'use strict';

/*
 * LOADING
 * -------
 * Loaded before anything else (see index.js). It does two things:
 *
 * 1. Smaller downloads. The 3D models (res/*.bin) are also published
 *    gzipped (the build makes res/*.bin.gz, about half the size). Where
 *    the browser can unzip by itself (DecompressionStream) the .gz copy is
 *    fetched and unzipped; otherwise, or if anything goes wrong, the plain
 *    .bin is fetched as before. The rest of the code does not notice.
 *
 * 2. The loading screen in base.html: it counts the gallery's files as
 *    they arrive, moves the thin line, and fades away once everything that
 *    was asked for has come in.
 */

const screen = document.getElementById('loader');
const nameEl = screen && screen.querySelector('.loader-name');

let asked = 0;
let done = 0;
let finished = false;
const started = performance.now();

// the brush: how much of the name is painted (0..1). It follows the
// files as they arrive, never goes back, and when everything is in it
// finishes the name; the screen fades once the name is complete.
let target = 0.06;
let shown = 0;
let lastT = 0;
let closing = false;
const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function paint(p) {
	if (!nameEl) return;
	const W = nameEl.offsetWidth || 1;
	// the ragged edge sits in the middle of a mask twice the name's width;
	// it starts just past the name's right end and leaves past its left
	const edge = W * (1.14 - 1.28 * p);
	const x = (edge - W).toFixed(1) + 'px 0';
	nameEl.style.webkitMaskPosition = x;
	nameEl.style.maskPosition = x;
}

function brush(now) {
	const dt = Math.min(0.05, lastT ? (now - lastT) / 1000 : 0.016);
	lastT = now;
	// a brush moves steadily, a little faster when it has ground to make up
	const speed = finished ? 0.75 : 0.22 + (target - shown) * 1.2;
	shown = Math.min(target, shown + Math.max(0, speed) * dt);
	if (reduce) shown = target;
	paint(shown);
	if (finished && shown >= 0.999) {
		if (!closing) {
			closing = true;
			setTimeout(close, 650);
		}
		return;
	}
	requestAnimationFrame(brush);
}
if (nameEl) requestAnimationFrame(brush);

function update() {
	// (more files are asked for as the gallery builds itself, so the brush
	// never claims more than it knows)
	const p = asked ? done / Math.max(asked, 24) : 0;
	target = Math.max(target, Math.min(0.9, 0.06 + p * 0.84));
}

function close() {
	if (!screen) return;
	screen.classList.add('done');
	setTimeout(() => screen.remove(), 1400);
}

function finish() {
	if (finished) return;
	finished = true;
	window.__galleryReady = true;
	if (!screen) return;
	target = 1;
	if (!nameEl) close();
}

// close once nothing is outstanding for a moment (and never later than 20 s)
let quiet = null;
function check() {
	clearTimeout(quiet);
	if (done >= asked && performance.now() - started > 600) {
		quiet = setTimeout(() => { if (done >= asked) finish(); }, 450);
	}
}
setTimeout(finish, 20000);

const ours = (url) => /(^|\/)(res|images)\//.test(url);
const plainFetch = window.fetch.bind(window);

async function gunzip(url, init) {
	const r = await plainFetch(url + '.gz', init);
	if (!r.ok) throw new Error('no .gz');
	const buf = new Uint8Array(await r.arrayBuffer());
	// a host that already unzipped it for us: use it as it is
	if (!(buf[0] === 0x1f && buf[1] === 0x8b)) return new Response(buf);
	const stream = new Blob([buf]).stream().pipeThrough(new DecompressionStream('gzip'));
	const out = await new Response(stream).arrayBuffer();
	return new Response(out, { status: 200, headers: { 'Content-Type': 'application/octet-stream' } });
}

window.fetch = function (input, init) {
	const url = typeof input === 'string' ? input : (input && input.url) || '';
	if (!ours(url)) return plainFetch(input, init);

	asked++;
	update();
	const settle = (x) => { done++; update(); check(); return x; };

	let p;
	if (/\.bin$/.test(url) && typeof DecompressionStream !== 'undefined') {
		p = gunzip(url, init).catch(() => plainFetch(input, init));
	} else {
		p = plainFetch(input, init);
	}
	return p.then(settle, (e) => { settle(); throw e; });
};

module.exports = { finish };

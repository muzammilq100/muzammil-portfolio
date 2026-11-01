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
const bar = screen && screen.querySelector('.loader-bar i');

let asked = 0;
let done = 0;
let finished = false;
const started = performance.now();

function update() {
	if (!bar) return;
	// (more files are asked for as the gallery builds itself, so the line
	// never claims more than it knows)
	const p = asked ? done / Math.max(asked, 24) : 0;
	bar.style.transform = 'scaleX(' + Math.min(1, 0.06 + p * 0.94).toFixed(3) + ')';
}

function finish() {
	if (finished) return;
	finished = true;
	window.__galleryReady = true;
	if (!screen) return;
	if (bar) bar.style.transform = 'scaleX(1)';
	screen.classList.add('done');
	setTimeout(() => screen.remove(), 1400);
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

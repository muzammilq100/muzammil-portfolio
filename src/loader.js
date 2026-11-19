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
 *    they arrive, paints the name, and fades away once everything that
 *    the first sight (the window corridor) needs has come in.
 *
 * 3. Everything else comes afterwards. The files of the rooms further on
 *    (LATER below) are not counted by the loading screen and are not even
 *    asked for until the corridor is in; then they come one room at a
 *    time, in the order the tour reaches them. `ready(name)` says whether
 *    a room's files are all in, and `onReady(name, f)` calls back when
 *    they are; the tour waits at the shot before a room that is not
 *    ready yet (tour.js).
 */

// the rooms further on and their files, in the order the tour shows them
const LATER = [
	// under the dome: the tree and the artist (his body and its textures; his motion
	// capture can follow, he walks by the older cycles until it comes)
	{ name: 'court', test: /res\/(tree\.bin|tree\/|avatar\/(?!motion\.))/ },
	// down the hall: the Pietà, Venus and David, and his motion capture
	// (for his footsteps there)
	{ name: 'hall', test: /res\/(pieta\.bin|venus\.bin|david\.bin|avatar\/motion\.)/ },
	// the rest: the piano and its music's timings, the street by night
	{ name: 'rest', test: /res\/(piano\.bin|audio\/|street\/photo_night)/ }
];

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
	corridorIn = true;
	settleRooms();
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

// one room of LATER: its files wait until the room before it is in
const rooms = LATER.map((r) => ({ name: r.name, test: r.test, waiting: [], asked: 0, done: 0, open: false, cbs: [] }));
const roomOf = (url) => rooms.find((r) => r.test.test(url));
let corridorIn = false;

function roomDone(r) {
	return r.open && r.done >= r.asked && r.waiting.length === 0;
}
function settleRooms() {
	// each room opens once the one before it has all come in (or when
	// hurried); each room's waiters are told as soon as it is in
	for (let i = 0; i < rooms.length; i++) {
		const r = rooms[i];
		const before = i === 0 ? corridorIn : roomDone(rooms[i - 1]);
		if (!r.open && before) {
			r.open = true;
			r.waiting.splice(0).forEach((go) => go());
		}
		if (roomDone(r)) {
			r.cbs.splice(0).forEach((f) => { try { f(); } catch (e) { console.error(e); } });
		}
	}
}

function get(input, init, url) {
	if (/\.bin$/.test(url) && typeof DecompressionStream !== 'undefined') {
		return gunzip(url, init).catch(() => plainFetch(input, init));
	}
	return plainFetch(input, init);
}

window.fetch = function (input, init) {
	const url = typeof input === 'string' ? input : (input && input.url) || '';
	if (!ours(url)) return plainFetch(input, init);

	const room = roomOf(url);
	if (room) {
		room.asked++;
		const settle = () => { room.done++; settleRooms(); };
		// (the whole file, not just its first bytes, before the room counts it in)
		const whole = (r) => r.blob().then((b) => new Response(b, { status: r.status, statusText: r.statusText, headers: r.headers }));
		const start = () => get(input, init, url).then(whole).then((x) => { settle(); return x; }, (e) => { settle(); throw e; });
		if (room.open) return start();
		return new Promise((resolve, reject) => {
			room.waiting.push(() => start().then(resolve, reject));
		});
	}

	asked++;
	update();
	const settle = (x) => { done++; update(); check(); return x; };
	return get(input, init, url).then(settle, (e) => { settle(); throw e; });
};

// the visitor wants the last room now (a note, from anywhere): every
// room's files are asked for at once
function hurry() {
	if (!corridorIn) return;
	rooms.forEach((r) => {
		if (r.open) return;
		r.open = true;
		r.waiting.splice(0).forEach((go) => go());
	});
	settleRooms();
}

// whether a room's files have all come in (true for a name not in LATER)
function ready(name) {
	const r = rooms.find((x) => x.name === name);
	return !r || roomDone(r);
}
function onReady(name, f) {
	if (ready(name)) { f(); return; }
	rooms.find((x) => x.name === name).cbs.push(f);
}

module.exports = { finish, ready, onReady, hurry };

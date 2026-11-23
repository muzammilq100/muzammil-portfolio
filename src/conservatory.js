'use strict';

/*
 * THE CONSERVATORY OF UNSAID THINGS: THE WAY IN
 * ---------------------------------------------
 * Behind "Love me like I am Already Dead" there is a room: the conservatory
 * (studio.js), with its pool, its nymph, its rotunda of red cloth and the
 * grave beneath it. The gallery knows only where it is (studiobox.js); the
 * room itself, its tour and its pictures are a file of their own
 * (conservatory.js in dist/, built from conservatory-room.js) that is
 * fetched only when a visitor is let in.
 *
 * Under the painting's story there is a way in. It asks a question:
 *
 *   They are offered only at the end, and heal nothing they touch.
 *   What are they?
 *
 * Answered ("flowers"), it offers "Bring a flower while it still matters".
 * A wrong answer gets no hint and no second try: the way in goes, and the
 * gallery's tour carries on.
 * The camera goes into the painting, into the red of its cloth, and comes
 * out of the red of the conservatory's door; it rises to the bougainvillea
 * and the petal's tour begins (studiotour.js). When the petal has settled
 * on the grave, a note asks the visitor to lay their flower beside it.
 * "Back to the gallery" is there all the while.
 *
 * ?studio in the address opens the room on its own, as the preview did.
 */

const env = require('./env');
const studioBox = require('./studiobox');

const SLUG = 'love-me-like-i-am-already-dead';
// (the answer, kept as a hash rather than in plain words)
const ANSWER = 0xd7d7382f;
const hash = (s) => {
	let h = 0x811c9dc5;
	for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
	return h >>> 0;
};
const PREVIEW = /[?&]studio\b/.test(location.search);
// the red of the painting's cloth and of the door: where the cut is hidden
const RED = [0.32, 0.02, 0.05];
// where in the painting the camera goes in: a fold of its red cloth
// (across from the left, down from the top)
const INTO = [0.3, 0.37];

const clamp01 = (x) => Math.max(0, Math.min(1, x));
const smooth = (x) => { x = clamp01(x); return x * x * (3 - 2 * x); };
const easeIn = (x) => { x = clamp01(x); return x * x * x; };
const mix = (a, b, t) => a + (b - a) * t;
const mix3 = (a, b, t) => [mix(a[0], b[0], t), mix(a[1], b[1], t), mix(a[2], b[2], t)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const LOOK0 = { fade: 0, fadeColor: [0, 0, 0], letterbox: 0, focus: 6, aperture: 0, exposure: 1, shafts: 1, vignette: 0 };

const CSS = `
.cons-btn {
	display: inline-flex; align-items: center; gap: 10px;
	min-height: 40px; margin: 2px 0 14px; padding: 0 18px 0 14px;
	border: 1px solid rgba(190,40,60,.7); border-radius: 999px;
	background: rgba(120,10,25,.18); color: #f4ecdf;
	font: 500 12px/1.2 Georgia, serif; letter-spacing: .16em; text-transform: uppercase;
	cursor: pointer; pointer-events: auto;
	transition: background .35s ease, border-color .35s ease, box-shadow .35s ease;
}
.cons-btn:hover { background: rgba(150,15,35,.32); border-color: #d9475d; box-shadow: 0 0 26px rgba(200,30,60,.25); }
.cons-btn:focus-visible { outline: 2px solid #e9cf9a; outline-offset: 3px; }
.cons-btn svg { flex: none; }
.cons-ask {
	position: fixed; inset: 0; z-index: 420;
	display: flex; align-items: center; justify-content: center;
	background: rgba(6,3,4,.55); opacity: 0; transition: opacity .6s ease;
	font-family: 'Cormorant Garamond', Georgia, serif; color: #f4ecdf;
	backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px);
}
.cons-ask.on { opacity: 1; }
.cons-card {
	position: relative; width: min(460px, 88vw); padding: 34px 32px 30px;
	background: rgba(24,10,12,.82); border: 1px solid rgba(190,40,60,.45); border-radius: 4px;
	box-shadow: 0 30px 80px rgba(0,0,0,.6); text-align: center;
}
.cons-kicker { display: block; font: 500 11px/1.4 Georgia, serif; letter-spacing: .26em; text-transform: uppercase; color: #d98a96; margin-bottom: 18px; }
.cons-q { font-size: 23px; line-height: 1.4; font-style: italic; margin: 0 0 22px; }
.cons-form { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
.cons-in {
	flex: 1 1 180px; min-width: 0; height: 42px; padding: 0 14px;
	background: rgba(0,0,0,.35); color: #f4ecdf; border: 1px solid rgba(244,236,223,.3); border-radius: 3px;
	font: 18px Georgia, serif; text-align: center;
}
.cons-in:focus { outline: none; border-color: #d9475d; }
.cons-go, .cons-flower {
	height: 42px; padding: 0 20px; border-radius: 999px; cursor: pointer;
	border: 1px solid rgba(190,40,60,.75); background: rgba(140,15,35,.35); color: #f4ecdf;
	font: 500 12px/1 Georgia, serif; letter-spacing: .18em; text-transform: uppercase;
}
.cons-go:hover, .cons-flower:hover { background: rgba(170,20,45,.55); }
.cons-flower { height: 48px; padding: 0 26px; display: inline-flex; align-items: center; gap: 10px; }
.cons-msg { min-height: 1.4em; margin: 16px 0 0; font-size: 17px; font-style: italic; color: #e9b8c0; opacity: 0; transition: opacity .5s ease; }
.cons-msg.on { opacity: 1; }
.cons-x {
	position: absolute; top: 8px; right: 10px; width: 34px; height: 34px;
	background: none; border: 0; color: rgba(244,236,223,.6); font-size: 22px; cursor: pointer;
}
.cons-x:hover { color: #f4ecdf; }
.cons-shake { animation: cons-shake .45s ease; }
@keyframes cons-shake { 20%, 60% { transform: translateX(-7px); } 40%, 80% { transform: translateX(7px); } }

/* in the room */
body.in-conservatory .tour,
body.in-conservatory #museum-mobile-controls,
body.in-conservatory .painting-plaque { display: none !important; }
.cons-ui { position: fixed; top: 16px; right: 16px; z-index: 410; display: flex; gap: 10px; opacity: 0; transition: opacity 1s ease; pointer-events: none; }
.cons-ui.on { opacity: 1; pointer-events: auto; }
.cons-ui button, .st-ui {
	height: 40px; min-width: 40px; padding: 0 14px; border-radius: 999px;
	border: 1px solid rgba(244,236,223,.4); background: rgba(12,10,8,.35); color: #f4ecdf;
	font: 500 11px/1 Georgia, serif; letter-spacing: .18em; text-transform: uppercase; cursor: pointer;
	backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px);
}
.cons-ui .cons-sky { font-size: 18px; padding: 0; width: 40px; letter-spacing: 0; text-transform: none; }
.cons-name {
	position: fixed; left: 50%; top: 13vh; transform: translateX(-50%); z-index: 405;
	font: italic 400 clamp(20px, 3.2vw, 34px)/1.3 'Cormorant Garamond', Georgia, serif; color: #f4ecdf;
	text-shadow: 0 2px 24px rgba(0,0,0,.85); letter-spacing: .04em; text-align: center; white-space: nowrap;
	opacity: 0; transition: opacity 2.2s ease; pointer-events: none;
}
.cons-name.on { opacity: .92; }
.cons-note {
	position: fixed; left: 50%; bottom: 12vh; transform: translate(-50%, 10px); z-index: 410;
	width: min(440px, 86vw); padding: 22px 26px 24px; text-align: center;
	background: rgba(20,8,10,.72); border: 1px solid rgba(190,40,60,.4); border-radius: 4px;
	font-family: 'Cormorant Garamond', Georgia, serif; color: #f4ecdf;
	opacity: 0; transition: opacity 1.2s ease, transform 1.2s ease; pointer-events: none;
	backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px);
}
.cons-note.on { opacity: 1; transform: translate(-50%, 0); pointer-events: auto; }
.cons-note p { margin: 0 0 16px; font-size: 20px; line-height: 1.4; font-style: italic; }
`;

const ROSE_SVG = '<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8.5c-2.2 0-3.6-1.6-3.6-3.4C8.4 3.6 10 2.5 12 3.6c2-1.1 3.6 0 3.6 1.5 0 1.8-1.4 3.4-3.6 3.4z"/><path d="M12 8.5V21"/><path d="M12 15c-2.5-.2-4-1.6-4.4-3.4 2.3.1 3.8 1.1 4.4 3.4z"/><path d="M12 13c1.8-.4 3-1.6 3.3-3 -1.7.1-2.9 1-3.3 3z"/></svg>';
const DOOR_SVG = '<svg aria-hidden="true" width="16" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 21V9a6 6 0 0 1 12 0v12"/><path d="M4 21h16"/><path d="M14.5 13.5v1"/></svg>';

// the room's file: fetched once, the first time anyone is let in
let roomFile = null;
function loadRoom() {
	if (!roomFile) {
		roomFile = new Promise((ok, fail) => {
			if (window.__conservatoryRoom) { ok(window.__conservatoryRoom); return; }
			const s = document.createElement('script');
			/* global __ROOM_V__ */
			s.src = 'conservatory.js?v=' + (typeof __ROOM_V__ !== 'undefined' ? __ROOM_V__ : Date.now());
			s.async = true;
			s.onload = () => (window.__conservatoryRoom ? ok(window.__conservatoryRoom) : fail(new Error('The conservatory did not load')));
			s.onerror = () => { roomFile = null; fail(new Error('The conservatory could not be fetched')); };
			document.head.appendChild(s);
		});
	}
	return roomFile;
}

let regl = null, post = null;
let room = null;        // { studio, tour } from the room's file
let draw = null;        // the room's draw (studio.js), once made
let dummy = null;
let roomTour = null;    // the petal's tour, while a visit lasts
let phase = 'idle';     // idle, zoom, wait, room, leave
let phaseAt = 0, now = 0;
let start = null;       // the gallery's camera when the visitor went in
let into = null;        // the point in the painting the camera goes into
let lastLook = null;
let ui = null, note = null, nameCard = null;
let noted = false;

function el(tag, cls, html) {
	const e = document.createElement(tag);
	if (cls) e.className = cls;
	if (html !== undefined) e.innerHTML = html;
	return e;
}

function setPhase(p) { phase = p; phaseAt = now; }

// the room, made the first time it is needed
function ensureRoom() {
	return loadRoom().then((r) => {
		room = r;
		if (!draw) {
			draw = r.studio(regl);
			if (post && post.useStudio) post.useStudio(r.studio);
		}
		return r;
	});
}

// ---------------------------------------------------------------
// the way in, under the painting's story
// ---------------------------------------------------------------
let refused = false;      // a wrong answer: the way in is gone for this visit
function button(p) {
	if (!p || p.slug !== SLUG || PREVIEW || refused) return null;
	const b = el('button', 'cons-btn', DOOR_SVG + '<span>The Conservatory of Unsaid Things</span>');
	b.type = 'button';
	b.setAttribute('aria-label', 'The Conservatory of Unsaid Things: answer its question to go in');
	b.addEventListener('pointerdown', (e) => e.stopPropagation());
	b.addEventListener('click', (e) => { e.stopPropagation(); ask(p); });
	return b;
}

function ask(p) {
	if (phase !== 'idle' || refused) return;
	document.body.classList.add('cons-asking');
	const wrap = el('div', 'cons-ask');
	wrap.setAttribute('role', 'dialog');
	wrap.setAttribute('aria-label', 'The Conservatory of Unsaid Things');
	const card = el('div', 'cons-card', `
		<button type="button" class="cons-x" aria-label="Close">×</button>
		<span class="cons-kicker">The Conservatory of Unsaid Things</span>
		<p class="cons-q">They are offered only at the end,<br>and heal nothing they touch.<br>What are they?</p>
		<form class="cons-form" autocomplete="off">
			<input class="cons-in" type="text" aria-label="Your answer" spellcheck="false" autocapitalize="off">
			<button type="submit" class="cons-go">Answer</button>
		</form>
		<p class="cons-msg" aria-live="polite"></p>`);
	wrap.appendChild(card);
	document.body.appendChild(wrap);
	requestAnimationFrame(() => wrap.classList.add('on'));
	const input = card.querySelector('.cons-in');
	const msg = card.querySelector('.cons-msg');
	const close = () => {
		wrap.classList.remove('on');
		document.body.classList.remove('cons-asking');
		setTimeout(() => wrap.remove(), 600);
		window.removeEventListener('keydown', onKey, true);
	};
	const onKey = (e) => { e.stopPropagation(); if (e.key === 'Escape') close(); };
	window.addEventListener('keydown', onKey, true);
	['pointerdown', 'wheel', 'touchstart', 'touchmove'].forEach((t) => wrap.addEventListener(t, (e) => e.stopPropagation(), { passive: true }));
	wrap.addEventListener('click', (e) => { if (e.target === wrap) close(); });
	card.querySelector('.cons-x').addEventListener('click', close);
	setTimeout(() => input.focus(), 350);
	card.querySelector('form').addEventListener('submit', (e) => {
		e.preventDefault();
		const a = input.value.trim().replace(/[.!?]+$/, '').toLowerCase();
		if (hash(a) === ANSWER) {
			// let in: the room starts on its way now
			ensureRoom().catch((err) => console.error(err));
			card.innerHTML = `
				<button type="button" class="cons-x" aria-label="Close">×</button>
				<span class="cons-kicker">The Conservatory of Unsaid Things</span>
				<p class="cons-q">Flowers.</p>
				<button type="button" class="cons-flower">${ROSE_SVG}<span>Bring a flower while it still matters</span></button>`;
			card.querySelector('.cons-x').addEventListener('click', close);
			card.querySelector('.cons-flower').addEventListener('click', () => { close(); enter(p); });
			setTimeout(() => { const f = card.querySelector('.cons-flower'); if (f) f.focus(); }, 50);
			return;
		}
		// no hints, no second try: the room is not for them, and the
		// gallery's tour goes on
		refused = true;
		input.disabled = true;
		card.querySelector('.cons-go').disabled = true;
		msg.textContent = 'Not this time.';
		msg.classList.add('on');
		document.querySelectorAll('.cons-btn').forEach((b) => b.remove());
		setTimeout(close, 1800);
	});
}

// ---------------------------------------------------------------
// going in
// ---------------------------------------------------------------
function enter(p) {
	// the point in the painting's red cloth the camera goes into, and the
	// way out of the wall
	const c = p.paintingPosition, w = p.width || 1.6, h = p.height || 1.1;
	const right = p.side === 'right';
	const n = right ? [-1, 0, 0] : [1, 0, 0];
	const across = right ? [0, 0, 1] : [0, 0, -1];   // left to right in the picture
	const du = (INTO[0] - 0.5) * w, dv = (0.5 - INTO[1]) * h;
	into = { at: [c[0] + across[0] * du - n[0] * 0.04, c[1] + dv, c[2] + across[2] * du], n };
	start = null;
	noted = false;
	document.body.classList.add('in-conservatory');
	setPhase('zoom');
	buildUi();
}

function buildUi() {
	if (ui) { ui.classList.add('on'); return; }
	ui = el('div', 'cons-ui');
	const sky = el('button', 'cons-sky', env.night > 0.5 ? '☀' : '☾');
	sky.type = 'button';
	sky.setAttribute('aria-label', 'Day or night');
	sky.addEventListener('click', (e) => { e.stopPropagation(); env.toggle(); setTimeout(() => { sky.textContent = env.night > 0.5 ? '☀' : '☾'; }, 50); });
	const back = el('button', 'cons-back', '← Back to the gallery');
	back.type = 'button';
	back.setAttribute('aria-label', 'Back to the gallery');
	back.addEventListener('click', (e) => { e.stopPropagation(); leave(); });
	ui.appendChild(sky);
	ui.appendChild(back);
	['pointerdown', 'pointerup'].forEach((t) => ui.addEventListener(t, (e) => e.stopPropagation()));
	document.body.appendChild(ui);
	requestAnimationFrame(() => ui.classList.add('on'));
	nameCard = el('div', 'cons-name', 'The Conservatory of Unsaid Things');
	document.body.appendChild(nameCard);
	window.addEventListener('keydown', escKey);
}
const escKey = (e) => { if (e.key === 'Escape' && (phase === 'room' || phase === 'wait')) leave(); };

function showNote() {
	if (note) note.remove();
	note = el('div', 'cons-note', `
		<p>You brought a flower while it still matters.<br>Lay it down.</p>
		<button type="button" class="cons-flower">${ROSE_SVG}<span>Place the flower</span></button>`);
	['pointerdown', 'pointerup'].forEach((t) => note.addEventListener(t, (e) => e.stopPropagation()));
	note.querySelector('button').addEventListener('click', (e) => {
		e.stopPropagation();
		if (roomTour) roomTour.placeFlower();
		note.classList.remove('on');
		setTimeout(() => { if (note) { note.remove(); note = null; } }, 1300);
	});
	document.body.appendChild(note);
	requestAnimationFrame(() => note.classList.add('on'));
}

function leave() {
	if (phase !== 'room' && phase !== 'wait') return;
	setPhase('leave');
	if (note) { note.classList.remove('on'); }
	if (nameCard) nameCard.classList.remove('on');
}

function finishLeaving() {
	if (roomTour) { roomTour.dispose(); roomTour = null; }
	if (room) { room.studio.setFlower(-1); room.studio.setGuide({ vis: false }); }
	if (note) { note.remove(); note = null; }
	if (ui) { ui.classList.remove('on'); }
	if (nameCard) { nameCard.remove(); nameCard = null; }
	window.removeEventListener('keydown', escKey);
	document.body.classList.remove('in-conservatory');
	setPhase('back');
}

// ---------------------------------------------------------------
// each frame: the camera while a visit lasts (null when the gallery's
// own tour has it)
// ---------------------------------------------------------------
function update(time, cam, look) {
	now = time;
	if (PREVIEW) {
		if (!roomTour) return null;
		const sc = roomTour.update(time);
		return { eye: sc.eye, target: sc.target, fov: sc.fov, roll: sc.roll, moving: sc.moving, look: Object.assign({}, LOOK0, sc.look) };
	}
	if (phase === 'idle') { if (look) lastLook = look; return null; }
	const t = time - phaseAt;
	if (phase === 'zoom') {
		if (!start) {
			start = cam ? { eye: cam.eye.slice(), target: cam.target.slice(), fov: cam.fov, roll: cam.roll || 0 } : null;
			lastLook = look || LOOK0;
			if (!start) return null;
		}
		// into the painting: the camera closes on its red cloth until the
		// red is all there is
		const D = 2.8;
		const k = clamp01(t / D);
		const e = smooth(k), e2 = easeIn(k);
		const end = [into.at[0] + into.n[0] * 0.09, into.at[1], into.at[2] + into.n[2] * 0.09];
		const eye = mix3(start.eye, end, mix(e, 1, e2 * 0.6));
		const target = mix3(start.target, into.at, smooth(k * 1.6));
		const L = Object.assign({}, LOOK0, lastLook, { fade: smooth((k - 0.72) / 0.28), fadeColor: RED, aperture: 0, letterbox: (lastLook && lastLook.letterbox) || 0 });
		if (k >= 1) setPhase('wait');
		return { eye, target, fov: mix(start.fov, 26, e), roll: mix(start.roll, 0, e), look: L, moving: true };
	}
	if (phase === 'wait') {
		// all red, while the room arrives
		const ok = room && draw && room.studio.ready() && t > 0.35;
		if (ok) {
			roomTour = room.tour({ intro: true, onLanded: showNote, onFlowerSettled: () => {} });
			if (nameCard) setTimeout(() => { if (nameCard && phase === 'room') nameCard.classList.add('on'); setTimeout(() => { if (nameCard) nameCard.classList.remove('on'); }, 5200); }, 2600);
			setPhase('room');
		}
		const end = [into.at[0] + into.n[0] * 0.09, into.at[1], into.at[2] + into.n[2] * 0.09];
		return { eye: end, target: into.at, fov: 26, roll: 0, look: Object.assign({}, LOOK0, lastLook, { fade: 1, fadeColor: RED }), moving: false };
	}
	if (phase === 'room' || phase === 'leave') {
		const sc = roomTour.update(time);
		const L = Object.assign({}, LOOK0, sc.look);
		if (phase === 'leave') {
			const k = clamp01(t / 0.9);
			L.fade = Math.max(L.fade || 0, smooth(k));
			L.fadeColor = [0, 0, 0];
			if (k >= 1) finishLeaving();
		}
		return { eye: sc.eye, target: sc.target, fov: sc.fov, roll: sc.roll, moving: sc.moving, look: L };
	}
	if (phase === 'back') {
		// back before the painting: up out of the dark
		const k = clamp01(t / 1.2);
		if (k >= 1) { setPhase('idle'); return null; }
		if (!cam) return null;
		return { eye: cam.eye, target: cam.target, fov: cam.fov, roll: cam.roll || 0, look: Object.assign({}, LOOK0, look || lastLook, { fade: 1 - smooth(k), fadeColor: [0, 0, 0] }), moving: true };
	}
	return null;
}

module.exports = {
	SLUG,
	PREVIEW,
	box: studioBox,
	// called once by index.js
	init(opts) {
		regl = opts.regl;
		post = opts.post;
		const st = document.createElement('style');
		st.textContent = CSS;
		document.head.appendChild(st);
		dummy = regl.texture({ width: 1, height: 1, data: [0, 0, 0, 0] });
		if (PREVIEW) startPreview();
	},
	button,
	update,
	// the room's draw (null until it has come)
	get draw() { return draw; },
	get active() { return phase !== 'idle' || PREVIEW; },
	// the room's baked sun, for the shaders that share its light
	bake() { return room ? room.studio.bakedSun(regl) : dummy; }
};

// ?studio: the room on its own, its tour straight away, a small moon (or
// sun) in the corner to turn day to night and back
function startPreview() {
	const st = document.createElement('style');
	st.textContent = '.tour, #museum-mobile-controls, .painting-plaque { display: none !important; } .st-ui { position: fixed; top: 18px; right: 18px; z-index: 30; width: 42px; padding: 0; font-size: 20px; letter-spacing: 0; }';
	document.head.appendChild(st);
	ensureRoom().then(() => { roomTour = room.tour({}); }).catch((e) => console.error(e));
	const b = document.createElement('button');
	b.type = 'button';
	b.className = 'st-ui';
	b.setAttribute('aria-label', 'Day or night');
	b.textContent = '☾';
	document.body.appendChild(b);
	b.addEventListener('pointerdown', (e) => e.stopPropagation());
	b.addEventListener('click', (e) => { e.stopPropagation(); env.toggle(); setTimeout(() => { b.textContent = env.night > 0.5 ? '☀' : '☾'; }, 50); });
	window.addEventListener('keydown', (e) => { if (e.key === 'n') env.toggle(); });
}

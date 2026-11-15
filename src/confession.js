'use strict';

/*
 * THE CONFESSION
 * --------------
 * At the end of the tour the visitor may leave the artist a note. The
 * camera crosses the hall into the round stair hall, where he is at the
 * piano among the candles, playing. It does not go straight to the
 * confessional: each scroll or swipe is another way of seeing him play
 * (never his face: from behind, over his shoulder, down on his hands,
 * low through the flames, high from the stair). Only then does it back
 * in through the booth's open curtain, where the music can still be
 * watched through the holes of the brass screen, and turn at last to
 * the window to write.
 *
 * The visitor writes. When they slide the note, the camera looks down at
 * the paper on the ledge and their words are written onto it in his
 * handwriting. A scroll, a swipe, a key or a tap folds the paper in half
 * and slips it through the slit; the camera rises back to the window and
 * the light through the brass. The note is sent to him (Web3Forms, to his
 * email).
 *
 * tour.js asks for the camera and the look each frame while this is on,
 * and passes on the visitor's scrolls, swipes, taps and keys.
 */

const C = require('./confessional');
const SH = require('./stairhall');
const HandWriter = require('./handwriter');

// the note goes to his inbox through Web3Forms (this key only allows
// sending to the address it was made for)
const NOTE_KEY = '81efb912-50a2-4fcd-b5e8-c3a28eecbe93';
const MAX_WORDS = 100;

const clamp01 = (x) => Math.max(0, Math.min(1, x));
const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const mix = (a, b, t) => a + (b - a) * t;
const mix3 = (a, b, t) => [mix(a[0], b[0], t), mix(a[1], b[1], t), mix(a[2], b[2], t)];
// a Catmull-Rom curve through points (t 0..1 over the whole run)
function curve(P, t) {
	const n = P.length - 1;
	const x = clamp01(t) * n;
	const i = Math.min(n - 1, Math.floor(x));
	const u = x - i;
	const p0 = P[Math.max(0, i - 1)], p1 = P[i], p2 = P[i + 1], p3 = P[Math.min(n, i + 2)];
	return [0, 1, 2].map((k) => 0.5 * ((2 * p1[k]) + (-p0[k] + p2[k]) * u +
		(2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * u * u + (-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * u * u * u));
}
const camOf = (s) => ({ eye: s.eye.slice(), target: s.target.slice(), fov: s.fov, roll: 0 });
function mixCam(a, b, t) {
	return { eye: mix3(a.eye, b.eye, t), target: mix3(a.target, b.target, t), fov: mix(a.fov, b.fov, t), roll: mix(a.roll || 0, b.roll || 0, t) };
}

// THE PIANO ROOM, shot by shot (gallery metres). He sits at the +z end
// of the piano facing -z, so every camera here is behind him, above him
// or down at his hands.
const PL = SH.PLAY;
const HIM = [PL.stoolX, 1.0, PL.keyFront + 0.25];
const HANDS = [PL.stoolX, PL.keyTop + 0.03, PL.keyFront - 0.05];
const ROOM = [
	// the room: the sea of candles, the piano, his back
	{ eye: [-3.9, 1.9, 47.9], target: [-7.0, 0.9, 44.8], fov: 50, aperture: 0.5 },
	// low, through the flames, from behind
	{ eye: [-6.2, 0.22, 46.9], target: [-6.95, 0.5, 45.5], fov: 38, aperture: 1.3 },
	// over his right shoulder
	{ eye: [-6.5, 1.3, 46.05], target: [-7.0, 0.80, 45.2], fov: 42, aperture: 1.0, to: HANDS },
	// his hands on the keys
	{ eye: [-6.35, 1.05, 45.75], target: [-6.85, 0.78, 45.3], fov: 44, aperture: 1.2, to: HANDS },
	// straight down on the keyboard
	{ eye: [-6.93, 3.2, 45.85], target: [-6.93, 0.77, 45.3], fov: 34, aperture: 0.6, to: HANDS },
	// from behind on his left, the hall beyond
	{ eye: [-8.0, 0.95, 47.4], target: [-6.9, 0.85, 45.3], fov: 34, aperture: 1.0 },
	// high up, from the turn of the stair
	{ eye: [-9.6, 4.3, 46.3], target: [-7.0, 0.8, 45.0], fov: 44, aperture: 0.6 }
];
const dist3 = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
const lookOfRoom = (r) => ({ letterbox: 0.55, exposure: 1.3, focus: dist3(r.eye, r.to || HIM), aperture: r.aperture, vignette: 0.42, shafts: 0.0 });
const LOOK_PEEK = { letterbox: 0.55, exposure: 2.1, focus: 6.2, aperture: 0.55, vignette: 0.45, shafts: 0.0 };

// how each part of the visit is seen
const LOOK_BOOTH = { letterbox: 0.55, exposure: 2.0, focus: 0.82, aperture: 1.1, vignette: 0.48, shafts: 0.0 };
const LOOK_PAPER = { letterbox: 0.55, exposure: 1.8, focus: 0.42, aperture: 1.3, vignette: 0.5, shafts: 0.0 };

const CSS = `
.conf-ui { position: absolute; inset: 0; pointer-events: none; z-index: 6; font-family: 'Cormorant Garamond', Georgia, serif; color: #f4ecdf; }
.conf-ui > * { position: absolute; left: 50%; transform: translateX(-50%); opacity: 0; visibility: hidden; transition: opacity 1s ease, visibility 0s linear 1s; }
.conf-ui > .on { opacity: 1; visibility: visible; transition: opacity 1.1s ease; pointer-events: auto; }
.conf-write { bottom: max(6vh, 44px); width: min(500px, calc(100vw - 32px)); padding: 18px 22px 14px; box-sizing: border-box;
	background: linear-gradient(180deg, rgba(14,10,8,.55), rgba(14,10,8,.78)); border: 1px solid rgba(233,207,154,.22); border-radius: 3px;
	backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); text-shadow: 0 1px 12px rgba(0,0,0,.6); }
.conf-kicker { margin: 0; font: 500 11px/1.4 Georgia, serif; letter-spacing: .32em; text-transform: uppercase; color: #e9cf9a; }
.conf-lead { margin: 8px 0 12px; font-style: italic; font-size: clamp(17px, 1.6vw, 20px); line-height: 1.4; opacity: .9; }
.conf-write textarea { display: block; width: 100%; box-sizing: border-box; min-height: 92px; max-height: 30vh; resize: none;
	background: transparent; border: 0; border-bottom: 1px solid rgba(244,236,223,.25); outline: none; padding: 6px 2px 10px;
	color: #f4ecdf; font: italic 500 clamp(18px, 1.7vw, 21px)/1.5 'Cormorant Garamond', Georgia, serif; caret-color: #e9cf9a; }
.conf-write textarea::placeholder { color: rgba(244,236,223,.4); }
.conf-write textarea:focus { border-bottom-color: rgba(233,207,154,.7); }
.conf-row { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-top: 14px; }
.conf-btn { min-height: 44px; padding: 0 18px; border-radius: 999px; border: 1px solid rgba(233,207,154,.55); background: rgba(233,207,154,.14);
	color: #f4ecdf; font: 500 12px/1 Georgia, serif; letter-spacing: .16em; text-transform: uppercase; cursor: pointer; transition: background .3s ease, opacity .3s ease; }
.conf-btn:hover { background: rgba(233,207,154,.28); }
.conf-btn:disabled { opacity: .35; cursor: default; }
.conf-btn.quiet { border-color: transparent; background: transparent; padding: 0 6px; opacity: .7; }
.conf-btn:focus-visible { outline: 2px solid #e9cf9a; outline-offset: 3px; }
.conf-hint { bottom: max(8vh, 56px); font-style: italic; font-size: clamp(16px, 1.5vw, 19px); text-align: center; text-shadow: 0 1px 14px rgba(0,0,0,.8); }
.conf-hint.on { pointer-events: none; animation: conf-breathe 3.2s ease-in-out infinite; }
@keyframes conf-breathe { 0%, 100% { opacity: .55; } 50% { opacity: 1; } }
.conf-final { bottom: max(9vh, 60px); text-align: center; text-shadow: 0 1px 16px rgba(0,0,0,.8); }
.conf-final p { margin: 0 0 6px; font-style: italic; font-size: clamp(20px, 2vw, 26px); }
.conf-final p.small { font-size: clamp(15px, 1.3vw, 17px); opacity: .75; margin-bottom: 18px; }
.conf-close { top: max(16px, env(safe-area-inset-top)); left: auto; right: 16px; transform: none; }
body.confessing .tour-card, body.confessing .tour-progress, body.confessing .tour-hint, body.confessing .tour-links, body.confessing .tour-mark { opacity: 0 !important; visibility: hidden !important; pointer-events: none !important; }
@media (prefers-reduced-motion: reduce) { .conf-hint.on { animation: none; } }
`;

module.exports = function createConfession(opts) {
	const { root, avatar } = opts;

	const style = document.createElement('style');
	style.textContent = CSS;
	document.head.appendChild(style);

	const ui = document.createElement('div');
	ui.className = 'conf-ui';
	ui.innerHTML = `
		<div class="conf-write" role="dialog" aria-label="Leave a note for the artist">
			<p class="conf-kicker">The confessional</p>
			<p class="conf-lead">Leave something behind. No one but me will read it.</p>
			<textarea rows="4" aria-label="Your note" placeholder="Write it here…" spellcheck="true"></textarea>
			<div class="conf-row">
				<button type="button" class="conf-btn quiet" data-act="leave">Not now</button>
				<button type="button" class="conf-btn" data-act="send" disabled>Slide the note</button>
			</div>
		</div>
		<div class="conf-hint" aria-live="polite"></div>
		<button type="button" class="conf-btn quiet conf-close" data-act="leave">Return to the gallery</button>
		<div class="conf-final">
			<p>It’s with me now.</p>
			<p class="small">Whatever it was, you don’t have to carry it out of here.</p>
			<button type="button" class="conf-btn" data-act="leave">Return to the gallery</button>
		</div>`;
	root.appendChild(ui);
	const panel = ui.querySelector('.conf-write');
	const area = ui.querySelector('textarea');
	const sendBtn = ui.querySelector('[data-act="send"]');
	const hint = ui.querySelector('.conf-hint');
	const closeBtn = ui.querySelector('.conf-close');
	const final = ui.querySelector('.conf-final');

	const fine = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
	const REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	// at most a hundred words (no one is told; the box simply takes no more)
	area.addEventListener('input', () => {
		const m = area.value.match(new RegExp('^\\s*(\\S+\\s+){0,' + (MAX_WORDS - 1) + '}\\S+'));
		const words = area.value.trim() ? area.value.trim().split(/\s+/).length : 0;
		if (words > MAX_WORDS && m) area.value = m[0];
		sendBtn.disabled = !area.value.trim();
	});
	['keydown', 'keyup', 'keypress'].forEach((t) => area.addEventListener(t, (e) => e.stopPropagation()));

	ui.addEventListener('pointerdown', (e) => e.stopPropagation());
	ui.addEventListener('click', (e) => {
		const b = e.target.closest('button');
		if (!b) return;
		e.stopPropagation();
		if (b.dataset.act === 'send') send();
		if (b.dataset.act === 'leave') leave();
	});

	let active = false;
	let stage = '';
	let clock = 0;          // seconds into the stage
	let from = null;        // the tour's camera when it began
	let fromLook = null;
	let note = '';
	let pen = null;
	let writeDone = 0;      // how long the writing takes
	let lastShown = '';

	const inkCanvas = document.createElement('canvas');
	inkCanvas.width = 512; inkCanvas.height = 652;

	function show(which) {
		if (which === lastShown) return;
		lastShown = which;
		panel.classList.toggle('on', which === 'write');
		hint.classList.toggle('on', which === 'hint');
		closeBtn.classList.toggle('on', active && which === 'hint' && (stage === 'room' || stage === 'peek'));
		final.classList.toggle('on', which === 'final');
		if (which === 'write') setTimeout(() => { if (stage === 'write') try { area.focus({ preventScroll: true }); } catch (e) { /* fine */ } }, 900);
	}
	function go(s) { stage = s; clock = 0; }

	function start(cam, look) {
		if (active) return;
		active = true;
		from = { eye: cam.eye.slice(), target: cam.target.slice(), fov: cam.fov, roll: cam.roll || 0 };
		fromLook = Object.assign({}, look);
		note = '';
		area.value = '';
		sendBtn.disabled = true;
		C.STATE.fold = 0; C.STATE.slide = 0; C.STATE.shown = true; C.STATE.active = true;
		const g = inkCanvas.getContext('2d');
		g.setTransform(1, 0, 0, 1, 0, 0);
		g.clearRect(0, 0, inkCanvas.width, inkCanvas.height);
		C.STATE.ink = inkCanvas; C.STATE.inkDirty = true;
		// (the booth behind the brass is empty: only the lamp burns there)
		document.body.classList.add('confessing');
		// across the hall, in through the arch, to the first sight of him
		const R0 = ROOM[0];
		seq.i = 0; seq.u = 0; seq.T = REDUCED ? 0.6 : 10.0; seq.moving = true; seq.rest = 0;
		seq.lookFrom = fromLook; seq.lookTo = lookOfRoom(R0);
		const eyes = [from.eye, [3.4, 1.75, 44.5], [0.3, 1.72, 44.5], [-2.4, 1.85, 46.4], R0.eye];
		const tgts = [from.target, [-3.0, 1.9, 44.5], [-6.5, 1.3, 44.8], [-7.0, 1.0, 44.9], R0.target];
		seq.path = (e) => ({ eye: curve(eyes, e), target: curve(tgts, smooth(0, 1, e * 1.03)), fov: mix(from.fov, R0.fov, smooth(0.5, 0.97, e)), roll: (from.roll || 0) * (1 - e) });
		go('room');
		show('');
	}

	// the piano room: which shot, and the move towards it
	const seq = { i: 0, u: 0, T: 1, moving: false, rest: 0, path: null, lookFrom: null, lookTo: null };
	const onHint = () => (fine ? 'Scroll on' : 'Swipe up');
	function moveTo(j) {
		const a = lastCam, b = ROOM[j];
		const A = { eye: a.eye.slice(), target: a.target.slice(), fov: a.fov, roll: a.roll || 0 };
		// the camera swings out round him rather than cutting straight across
		const midp = mix3(A.eye, b.eye, 0.5);
		const out = [midp[0] - HIM[0], 0, midp[2] - HIM[2]];
		const ol = Math.hypot(out[0], out[2]) || 1;
		const ctl = [midp[0] + out[0] / ol * 0.6, midp[1] + 0.3, midp[2] + out[2] / ol * 0.6];
		seq.path = (e) => {
			const u = 1 - e;
			return {
				eye: [0, 1, 2].map((k) => u * u * A.eye[k] + 2 * u * e * ctl[k] + e * e * b.eye[k]),
				target: mix3(A.target, b.target, smooth(0, 1, e)),
				fov: mix(A.fov, b.fov, e), roll: A.roll * u
			};
		};
		seq.lookFrom = lastLook || lookOfRoom(ROOM[seq.i]);
		seq.lookTo = lookOfRoom(b);
		seq.i = j; seq.u = 0; seq.moving = true; seq.rest = 0;
		seq.T = REDUCED ? 0.4 : Math.max(2.8, Math.min(4.4, dist3(A.eye, b.eye) * 1.0 + 1.6));
		show('');
	}
	let lastLook = null;

	function send() {
		if (stage !== 'write') return;
		note = area.value.trim();
		if (!note) return;
		area.blur();
		show('');
		// write it onto the paper, in his hand, a size that fits
		const xh = Math.max(10, Math.min(22, 24 - note.length / 28));
		pen = HandWriter(inkCanvas, opts.glyphs(), {
			ink: 'rgba(30,16,8,0.97)', xh, width: 0.15, seed: 11 + note.length,
			speed: 60, pace: 0.2, minDur: 0.03,
			maxTime: (t) => 2.4 + t.length / 160,
			fixed: { mx: 46, my: 40 },
			onPen: () => { C.STATE.inkDirty = true; },
			onDone: () => { C.STATE.inkDirty = true; }
		});
		go('down');
	}

	function post() {
		try {
			const body = {
				access_key: NOTE_KEY,
				subject: 'A note left in the confessional',
				from_name: 'Your gallery',
				message: note,
				page: location.href,
				when: new Date().toString()
			};
			fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify(body),
				keepalive: true
			}).catch(() => {});
		} catch (e) { /* the note is still folded and passed through */ }
	}

	function fold() {
		if (stage !== 'ready') return;
		post();
		go('fold');
		show('');
	}

	function leave() {
		if (!active || stage === 'leave') return;
		show('');
		area.blur();
		leaveFrom = lastCam;
		leaveLook = lastLook;
		go('leave');
	}
	let leaveFrom = null;
	let leaveLook = null;
	let lastCam = null;

	// the way in: across the hall and through the arch into the stair
	// hall, round the piano in its candles, to the confessional in the far
	// wall, in through the curtain and round to face the window
	// (gallery metres; the booth's own points are moved with it, see OFF)
	const W = C.SHOTS.window;
	const O = C.OFF;
	const at = (p) => [p[0] + O[0], p[1], p[2]];
	const IN_EYES = [[3.4, 1.75, 44.5], [0.3, 1.72, 44.5], [-2.5, 1.66, 45.0], [-4.6, 1.6, 46.55], [-7.0, 1.58, 47.15], [-9.3, 1.55, 46.4], at([1.25, 1.5, 43.25]), at([-0.55, 1.36, 42.92])];
	const IN_TGTS = [[-3.0, 1.9, 44.5], [-6.5, 1.5, 44.6], [-7.0, 1.0, 44.4], [-7.6, 0.95, 44.0], [-10.5, 1.5, 44.6], at([-1.0, 1.55, 43.6]), at([-1.4, 1.35, 43.1]), at([-1.5, 1.33, 43.3])];
	function approachCam(t) {
		const e = ease(clamp01(t));
		const eyes = [from.eye, ...IN_EYES, W.eye];
		const tgts = [from.target, ...IN_TGTS, W.target];
		return { eye: curve(eyes, e), target: curve(tgts, smooth(0, 1, e * 1.03)), fov: mix(from.fov, W.fov, smooth(0.6, 0.97, e)), roll: (from.roll || 0) * (1 - e) };
	}

	// a held camera breathes a little
	function breathe(c, k) {
		if (REDUCED) return c;
		const t = performance.now() / 1000;
		const a = 0.004 * k;
		const n1 = Math.sin(t * 0.61) * 0.6 + Math.sin(t * 1.37 + 1.3) * 0.4;
		const n2 = Math.sin(t * 0.47 + 2.1) * 0.6 + Math.sin(t * 1.13 + 0.4) * 0.4;
		return { eye: [c.eye[0] + n1 * a, c.eye[1] + n2 * a * 0.7, c.eye[2]], target: [c.target[0] + n2 * a * 1.5, c.target[1] + n1 * a, c.target[2]], fov: c.fov, roll: c.roll };
	}

	function lookMix(a, b, t) {
		const o = {};
		for (const k in b) o[k] = typeof b[k] === 'number' && typeof a[k] === 'number' ? mix(a[k], b[k], t) : b[k];
		return o;
	}

	function update(dt) {
		// (tests may run it faster)
		dt *= (window.__confSpeed || 1);
		clock += dt;
		const winCam = camOf(W), paperCam = camOf(C.SHOTS.paper);
		let cam, look;
		const peekCam = camOf(C.SHOTS.peek);
		if (stage === 'room') {
			if (seq.moving) {
				seq.u = Math.min(1, seq.u + dt / seq.T);
				cam = seq.path(ease(seq.u));
				look = lookMix(seq.lookFrom, seq.lookTo, smooth(0.1, 0.9, seq.u));
				if (seq.u >= 1) { seq.moving = false; seq.rest = 0; hint.textContent = onHint(); show('hint'); }
			} else {
				seq.rest += dt;
				cam = breathe(camOf(ROOM[seq.i]), 2.5);
				look = lookOfRoom(ROOM[seq.i]);
			}
		} else if (stage === 'enter') {
			// round to the confessional, turning to keep him in view, and
			// backwards in through the open half of its arch, until the
			// brass screen slides across the picture
			const T = REDUCED ? 0.6 : 8.0;
			const u = clamp01(clock / T);
			const e = ease(u);
			const eyes = [enterFrom.eye, [-9.5, 1.9, 44.6], at([0.75, 1.5, 42.95]), at([-0.25, 1.42, 42.82]), at([-0.9, 1.42, 42.82]), peekCam.eye];
			cam = { eye: curve(eyes, e), target: mix3(enterFrom.target, peekCam.target, smooth(0, 0.35, e)), fov: mix(enterFrom.fov, peekCam.fov, smooth(0.3, 1, e)), roll: 0 };
			look = lookMix(enterLook, LOOK_PEEK, smooth(0.2, 0.9, u));
			if (u >= 1) { go('peek'); hint.textContent = fine ? 'Scroll to sit and write' : 'Swipe up to sit and write'; show('hint'); }
		} else if (stage === 'peek') {
			cam = breathe(peekCam, 1.5);
			look = LOOK_PEEK;
		} else if (stage === 'turn') {
			const u = clamp01(clock / (REDUCED ? 0.4 : 3.2));
			cam = mixCam(peekCam, winCam, ease(u));
			look = lookMix(LOOK_PEEK, LOOK_BOOTH, ease(u));
			if (u >= 1) { go('write'); show('write'); }
		} else if (stage === 'write') {
			cam = breathe(winCam, 1);
			look = LOOK_BOOTH;
		} else if (stage === 'down') {
			const u = clamp01(clock / (REDUCED ? 0.4 : 2.0));
			cam = mixCam(winCam, paperCam, ease(u));
			look = lookMix(LOOK_BOOTH, LOOK_PAPER, ease(u));
			if (u >= 1) {
				writeDone = pen.write(note, REDUCED) || 0;
				C.STATE.inkDirty = true;
				go('writing');
			}
		} else if (stage === 'writing') {
			cam = breathe(paperCam, 0.6);
			look = LOOK_PAPER;
			if (clock > writeDone + 0.8) {
				go('ready');
				hint.textContent = fine ? 'Scroll to fold it and pass it through' : 'Swipe up to fold it and pass it through';
				show('hint');
			}
		} else if (stage === 'ready') {
			cam = breathe(paperCam, 0.6);
			look = LOOK_PAPER;
		} else if (stage === 'fold') {
			const u = clamp01(clock / (REDUCED ? 0.3 : 1.5));
			C.STATE.fold = ease(u);
			cam = breathe(paperCam, 0.6);
			look = LOOK_PAPER;
			if (u >= 1) go('slide');
		} else if (stage === 'slide') {
			const D = REDUCED ? 0.6 : 3.4;
			const u = clamp01(clock / D);
			// the paper first, the camera rising after it
			C.STATE.slide = ease(smooth(0, 0.7, u));
			const cu = ease(smooth(0.35, 1, u));
			cam = mixCam(paperCam, winCam, cu);
			look = lookMix(LOOK_PAPER, LOOK_BOOTH, cu);
			if (u >= 1) {
				C.STATE.shown = false;
				go('final');
				show('final');
			}
		} else if (stage === 'final') {
			cam = breathe(winCam, 1);
			look = LOOK_BOOTH;
		} else if (stage === 'leave') {
			// back out through the curtain and across the hall to where the
			// tour ended
			const T = REDUCED ? 0.6 : (leaveFrom.eye[0] < O[0] - 0.3 ? 12.0 : 7.0);
			const u = clamp01(clock / T);
			const back = { eye: from.eye, target: from.target, fov: from.fov, roll: from.roll };
			const e = ease(u);
			// (from inside the booth: out through the open half of the arch
			// first; from the piano room: straight for the hall)
			const inBooth = leaveFrom.eye[0] < O[0] - 0.3;
			const eyes = inBooth
				? [leaveFrom.eye, at([-0.55, 1.4, 42.80]), at([1.4, 1.55, 43.3]), [-9.3, 1.58, 46.4], [-7.0, 1.6, 47.15], [-4.6, 1.62, 46.55], [-2.2, 1.68, 44.8], [0.6, 1.72, 44.5], back.eye]
				: [leaveFrom.eye, [-3.4, 1.7, 46.2], [-1.2, 1.7, 44.8], [0.6, 1.72, 44.5], back.eye];
			const tgts = inBooth
				? [leaveFrom.target, at([1.5, 1.45, 43.4]), [-7.0, 1.2, 44.6], [-4.0, 1.5, 47.0], [-1.5, 1.7, 45.5], [1.0, 1.8, 44.5], [4.0, 1.8, 44.5], [7.0, 1.9, 44.2], back.target]
				: [leaveFrom.target, [-1.5, 1.7, 45.2], [2.0, 1.8, 44.5], [6.0, 1.9, 44.3], back.target];
			cam = { eye: curve(eyes, e), target: curve(tgts, e), fov: mix(leaveFrom.fov, back.fov, e), roll: back.roll * e };
			look = lookMix(leaveLook || LOOK_BOOTH, fromLook, smooth(0.1, 0.7, u));
			if (u >= 1) {
				active = false;
				C.STATE.active = false;
				C.STATE.shown = true;
				C.STATE.fold = 0; C.STATE.slide = 0;
				const g = inkCanvas.getContext('2d');
				g.setTransform(1, 0, 0, 1, 0, 0);
				g.clearRect(0, 0, inkCanvas.width, inkCanvas.height);
				C.STATE.inkDirty = true;
				document.body.classList.remove('confessing');
				if (opts.onExit) opts.onExit();
			}
		}
		lastCam = cam;
		lastLook = look;
		return { camera: cam, look };
	}

	// the visitor's gestures while it is on: onwards folds the paper, a tap
	// finishes the writing
	let enterFrom = null, enterLook = null;
	function onward() {
		if (stage === 'room') {
			// one sight of him for each scroll or swipe; after the last, the booth
			if (seq.moving || seq.rest < 0.4) return;
			if (seq.i < ROOM.length - 1) moveTo(seq.i + 1);
			else { enterFrom = lastCam; enterLook = lastLook; show(''); go('enter'); }
			return;
		}
		if (stage === 'peek') { if (clock > 0.4) { show(''); go('turn'); } return; }
		if (stage === 'ready') fold();
		else if (stage === 'writing' && pen) { pen.finish(); clock = Math.max(clock, writeDone); }
	}

	// back to the sight before (in the piano room only)
	function backward() {
		if (stage === 'room' && !seq.moving && seq.rest > 0.4 && seq.i > 0) moveTo(seq.i - 1);
	}

	return {
		start, update, leave,
		get active() { return active; },
		get stage() { return stage; },
		wheel(dy) { if (dy > 8) onward(); else if (dy < -8) backward(); },
		swipe(dir) { if (dir > 0) onward(); else if (dir < 0) backward(); },
		tap() { onward(); },
		key(k) {
			if (['ArrowDown', 'ArrowRight', 'PageDown', ' ', 'Enter'].indexOf(k) >= 0) { onward(); return true; }
			if (['ArrowUp', 'ArrowLeft', 'PageUp'].indexOf(k) >= 0) { backward(); return true; }
			if (k === 'Escape') { leave(); return true; }
			return false;
		},
		// (for tests)
		_setNote(t) { area.value = t; area.dispatchEvent(new Event('input')); }
	};
};

'use strict';

/*
 * THE CONFESSION
 * --------------
 * At the end of the tour the visitor may leave the artist a note. The
 * camera crosses the hall to the confessional (confessional.js), goes in
 * through the open curtain and comes to rest facing the brass window,
 * behind which he sits with his back to it.
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

// how each part of the visit is seen
const LOOK_BOOTH = { letterbox: 0.55, exposure: 2.0, focus: 0.82, aperture: 1.1, vignette: 0.48, shafts: 0.0 };
const LOOK_PAPER = { letterbox: 0.55, exposure: 1.8, focus: 0.42, aperture: 1.3, vignette: 0.5, shafts: 0.0 };

const CSS = `
.conf-ui { position: absolute; inset: 0; pointer-events: none; z-index: 6; font-family: 'Cormorant Garamond', Georgia, serif; color: #f4ecdf; }
.conf-ui > * { position: absolute; left: 50%; transform: translateX(-50%); opacity: 0; visibility: hidden; transition: opacity 1s ease, visibility 0s linear 1s; }
.conf-ui > .on { opacity: 1; visibility: visible; transition: opacity 1.1s ease; pointer-events: auto; }
.conf-write { bottom: max(7vh, 52px); width: min(560px, calc(100vw - 32px)); padding: 22px 24px 18px; box-sizing: border-box;
	background: linear-gradient(180deg, rgba(14,10,8,.55), rgba(14,10,8,.78)); border: 1px solid rgba(233,207,154,.22); border-radius: 3px;
	backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); text-shadow: 0 1px 12px rgba(0,0,0,.6); }
.conf-kicker { margin: 0; font: 500 11px/1.4 Georgia, serif; letter-spacing: .32em; text-transform: uppercase; color: #e9cf9a; }
.conf-lead { margin: 8px 0 12px; font-style: italic; font-size: clamp(17px, 1.6vw, 20px); line-height: 1.4; opacity: .9; }
.conf-write textarea { display: block; width: 100%; box-sizing: border-box; min-height: 120px; max-height: 34vh; resize: none;
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
		avatar.setSeat({ x: C.SEAT.x, z: C.SEAT.z, y: C.SEAT.y, heading: C.SEAT.heading, lamp: [C.LAMP[0], C.LAMP[1], C.LAMP[2], 1.6] });
		document.body.classList.add('confessing');
		go('approach');
		show('');
	}

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
		go('leave');
	}
	let leaveFrom = null;
	let lastCam = null;

	// the way in: across the hall to the bay, in through the curtain, and
	// round to face the window
	const W = C.SHOTS.window;
	function approachCam(t) {
		const e = ease(clamp01(t));
		const eyes = [from.eye, [4.6, 1.9, 43.4], [1.3, 1.5, 43.0], [-0.55, 1.36, 42.92], W.eye];
		const tgts = [from.target, [-0.6, 1.6, 43.6], [-1.4, 1.35, 43.1], [-1.5, 1.33, 43.3], W.target];
		return { eye: curve(eyes, e), target: curve(tgts, smooth(0, 1, e * 1.04)), fov: mix(from.fov, W.fov, smooth(0.2, 0.9, e)), roll: (from.roll || 0) * (1 - e) };
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
		clock += dt;
		const winCam = camOf(W), paperCam = camOf(C.SHOTS.paper);
		let cam, look;
		if (stage === 'approach') {
			const T = REDUCED ? 0.6 : 6.5;
			const u = clamp01(clock / T);
			cam = approachCam(u);
			look = lookMix(fromLook, LOOK_BOOTH, smooth(0.35, 0.95, u));
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
			const T = REDUCED ? 0.6 : 5.5;
			const u = clamp01(clock / T);
			const back = { eye: from.eye, target: from.target, fov: from.fov, roll: from.roll };
			const e = ease(u);
			const eyes = [leaveFrom.eye, [-0.55, 1.4, 42.95], [1.6, 1.65, 43.2], back.eye];
			const tgts = [leaveFrom.target, [1.5, 1.45, 43.3], [6.0, 1.5, 46.0], back.target];
			cam = { eye: curve(eyes, e), target: curve(tgts, e), fov: mix(leaveFrom.fov, back.fov, e), roll: back.roll * e };
			look = lookMix(LOOK_BOOTH, fromLook, smooth(0.1, 0.7, u));
			if (u >= 1) {
				active = false;
				C.STATE.active = false;
				C.STATE.shown = true;
				C.STATE.fold = 0; C.STATE.slide = 0;
				const g = inkCanvas.getContext('2d');
				g.setTransform(1, 0, 0, 1, 0, 0);
				g.clearRect(0, 0, inkCanvas.width, inkCanvas.height);
				C.STATE.inkDirty = true;
				avatar.setSeat(null);
				document.body.classList.remove('confessing');
				if (opts.onExit) opts.onExit();
			}
		}
		lastCam = cam;
		return { camera: cam, look };
	}

	// the visitor's gestures while it is on: onwards folds the paper, a tap
	// finishes the writing
	function onward() {
		if (stage === 'ready') fold();
		else if (stage === 'writing' && pen) { pen.finish(); clock = Math.max(clock, writeDone); }
	}

	return {
		start, update, leave,
		get active() { return active; },
		get stage() { return stage; },
		wheel(dy) { if (dy > 8) onward(); },
		swipe(dir) { if (dir > 0) onward(); },
		tap() { onward(); },
		key(k) {
			if (['ArrowDown', 'ArrowRight', 'PageDown', ' ', 'Enter'].indexOf(k) >= 0) { onward(); return true; }
			if (k === 'Escape') { leave(); return true; }
			return false;
		},
		// (for tests)
		_setNote(t) { area.value = t; area.dispatchEvent(new Event('input')); }
	};
};

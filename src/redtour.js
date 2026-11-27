'use strict';

/*
 * The red room's tour. One continuous camera move, played forwards and
 * backwards by the visitor's scroll or swipe, settling on a shot whenever
 * they stop. In seven acts:
 *
 *   I    the threshold: the dark corridor, ENTER flickering, through the door
 *   II   the table under its window: candles, roses, the stack of polaroids
 *   III  the darkroom: the print coming up in the developer, the old camera,
 *        the prints drying on their lines
 *   IV   the cable: from its socket along the floor to the polaroids' wall
 *   V    the projector: its reels, its lens and smoke, along its beam
 *   VI   the televisions, ten of them one by one, in no order
 *   VII  her: the camera cranes back over her into the dark behind her, the
 *        spot comes on, and it settles where the painting stands
 *
 * Her face is never seen: no shot is in front of her, and the room will
 * not draw her for a camera that is (redroom.js, setViewer).
 *
 * Past the last shot the room resists (THE WARNING): the camera only
 * creeps, every set falls to the same snow, the film stops on one frame,
 * and a line comes up: "Some grief is not yours to witness." Pressing on,
 * the sets spell LEAVE HER BE, a letter at a time. Pressing on after that,
 * everything breaks up and the visitor is put out, back to the gallery
 * (opts.onExpel). Easing off calms it all again: it is a warning, not a trap.
 *
 * Positions are in the room's own coordinates (redroom.js); the camera it
 * returns is in the world's.
 */

const room = require('./redroom');
const { O } = room;
const { W, L, TV, DARK, PROJ, TBL, WOMAN } = room.ROOM;

const W3 = (p) => [p[0] + O[0], p[1] + O[1], p[2] + O[2]];
const mix = (a, b, t) => a + (b - a) * t;
const clamp01 = (x) => Math.max(0, Math.min(1, x));

const SUBTITLE = 'Some grief is not yours to witness.';
const smooth = (x) => { x = clamp01(x); return x * x * (3 - 2 * x); };
// where she sits, and the way she faces (towards the sets)
const HER = [WOMAN.x, 0, WOMAN.z];
const FX = Math.sin(WOMAN.yaw), FZ = Math.cos(WOMAN.yaw);
const herAt = (f, y, side) => [HER[0] + FX * f + FZ * (side || 0), y, HER[2] + FZ * f - FX * (side || 0)];

// the projector's parts in the room (its small pitch left out)
const PX = PROJ.x, PY = PROJ.table, PZ = PROJ.z;
const REEL = [PX + PROJ.feed[0], PY + PROJ.feed[1], PZ + PROJ.feed[2]];
const LENS = PROJ.lens;
const tray = DARK.trays[0];

// eye, what it looks at, lens (degrees); dof: how shallow the focus is;
// p: changes for a phone held upright; pass: the camera goes through this
// point without stopping there
const BASE_KEYS = [
	// the corridor: far back in the dark, the door and its sign
	{ eye: [W / 2 + 0.15, 1.55, -9.6], at: [W / 2, 1.7, 0.0], fov: 40, dof: 0.05, p: { fov: 58 } },
	// closer: the sign overhead, the red pouring out
	{ eye: [W / 2 + 0.05, 1.6, -3.0], at: [W / 2, 1.85, 1.5], fov: 50, dof: 0.05, p: { fov: 70 } },
	// through the door: the room opens
	{ eye: [W / 2 - 0.2, 1.5, 0.9], at: [W / 2 - 3.0, 1.4, 7.0], fov: 56, dof: 0.04, p: { fov: 74 } },
	// to the right: the table under its window, the candles burning
	{ eye: [W - 4.4, 1.55, 1.2], at: [W - 0.7, 1.05, TBL.z + 0.2], fov: 46, dof: 0.06, p: { eye: [W - 4.8, 1.6, 0.9], fov: 68 } },
	// close: the roses laid among the candles
	{ eye: [TBL.x - 1.4, TBL.top + 0.48, TBL.z - 0.7], at: [TBL.x + 0.05, TBL.top + 0.26, TBL.z + 0.0], fov: 40, dof: 0.32, p: { fov: 50 } },
	// down over the stack of polaroids by the candles
	{ eye: [TBL.stack[0] - 0.35, TBL.top + 0.75, TBL.stack[1] - 0.25], at: [TBL.stack[0] + 0.02, TBL.top, TBL.stack[1] + 0.02], fov: 34, dof: 0.3, p: { fov: 50 } },
	// the darkroom along the left wall
	{ eye: [3.3, 1.55, 1.3], at: [0.3, 1.35, 5.2], fov: 50, dof: 0.05, p: { eye: [2.8, 1.6, 0.9], fov: 72 } },
	// down into the developer: his photograph floating up in the black water
	{ eye: [1.05, 1.5, tray - 0.42], at: [DARK.TXc - 0.02, DARK.liquid, tray + 0.04], fov: 34, dof: 0.2, p: { eye: [1.0, 1.55, tray - 0.45], fov: 52 } },
	// the old camera on its shelf by the trays
	{ eye: [0.62, 1.68, (DARK.shelf.z0 + DARK.shelf.z1) / 2 - 0.36], at: [0.14, 1.55, (DARK.shelf.z0 + DARK.shelf.z1) / 2], fov: 34, dof: 0.34, p: { fov: 48 } },
	// up to the prints drying on their lines
	{ eye: [2.0, 1.6, 8.3], at: [0.4, 2.25, 11.3], fov: 50, dof: 0.12, p: { eye: [1.8, 1.6, 8.1], fov: 72 } },
];

// a smooth curve through points (Catmull-Rom), s from 0 to the last point
function spline(pts, s) {
	const n = pts.length - 1;
	const x = Math.max(0, Math.min(n, s));
	const i = Math.min(n - 1, Math.floor(x));
	const u = x - i;
	const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(n, i + 2)];
	const u2 = u * u, u3 = u2 * u;
	return [0, 1, 2].map((k) => 0.5 * ((2 * p1[k]) + (-p0[k] + p2[k]) * u + (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * u2 + (-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * u3));
}

// the rest of the film, made once the room has been built (the polaroids'
// places are known then): close to some of the polaroids; the projector,
// its reels, its lens and its beam; every television in turn, the camera
// drawing back between them; and the memories on the far wall
let REVEAL = 0;
function buildKeys() {
	const K = BASE_KEYS.slice();
	// the cable: where it is plugged in, low, close; then down on the floor
	// with it, following it across the room to the polaroids' wall
	const C = room.ROOM.CABLE, cp = C.path, zs = C.socket[2];
	const sx = C.socket[0];
	K.push({ eye: [sx + 1.05, 0.42, zs - 0.45], at: [sx, 0.27, zs + 0.08], fov: 42, dof: 0.32, p: { eye: [sx + 1.3, 0.48, zs - 0.55], fov: 58 } });
	const [ra, rb] = C.run;
	for (const fr of [0.04, 0.22, 0.42, 0.62, 0.82]) {
		const i = Math.round(ra + (rb - ra) * fr);
		const a = cp[Math.max(0, i - 6)], b = cp[Math.min(cp.length - 1, i + 6)], q = cp[i];
		let dx = b[0] - a[0], dz = b[2] - a[2];
		const dl = Math.hypot(dx, dz) || 1; dx /= dl; dz /= dl;
		K.push({ eye: [q[0] - dx * 0.8 - dz * 0.12, 0.3, q[2] - dz * 0.8 + dx * 0.12], at: [q[0] + dx * 1.5, 0.06, q[2] + dz * 1.5], fov: 44, dof: 0.24, pass: true, p: { fov: 60 } });
	}
	// it reaches the right wall, and the polaroids rise up it
	K.push({ eye: [W - 3.0, 0.45, zs - 1.6], at: [W - 0.3, 1.9, zs + 0.9], fov: 50, dof: 0.1, p: { fov: 70 } });
	const add3 = (a, b, k) => [a[0] + b[0] * k, a[1] + b[1] * k, a[2] + b[2] * k];
	let seed = 11;
	const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
	// three polaroids on the right wall, at different heights, along the way
	const spots = (room.ROOM.POL.spots || []).filter((q) => q.n[0] < -0.5 && q.c[2] > 10.5 && q.c[2] < 21.5 && q.c[1] > 1.9 && q.c[1] < 4.6);
	const score = (q, zc) => Math.abs(q.c[2] - zc) + Math.abs(q.c[1] - 3.0) * 0.4;
	const pick = [];
	for (const zc of [12.6, 15.0, 17.3]) {
		let best = null;
		for (const q of spots) if (!best || score(q, zc) < score(best, zc)) best = q;
		if (best && pick.indexOf(best) < 0) pick.push(best);
	}
	pick.forEach((q, i) => {
		const n = q.n, c = q.c;
		if (i > 0) K.push({ eye: add3(add3(c, n, 2.2), [0, 0.15, -0.6], 1), at: c, fov: 50, dof: 0.05, pass: true });
		K.push({ eye: add3(add3(c, n, 1.0), [0, 0.06, -0.3], 1), at: c, fov: 36, dof: 0.26, p: { fov: 50 } });
	});
	// the projector on its table, out of the dark
	K.push({ eye: [PX + 2.0, 1.35, PZ - 1.5], at: [PX, 1.35, PZ + 0.1], fov: 42, dof: 0.12, p: { eye: [PX + 1.6, 1.4, PZ - 1.5], fov: 62 } });
	// its reels turning, close
	K.push({ eye: [PX + 0.85, REEL[1] + 0.12, REEL[2] - 0.35], at: [REEL[0], REEL[1] - 0.05, REEL[2]], fov: 36, dof: 0.32, p: { fov: 52 } });
	// the lens: into the light, the focus on the lamp's glow
	K.push({ eye: [PX + 0.42, LENS[1] + 0.08, LENS[2] + 1.35], at: [PX, LENS[1], LENS[2]], fov: 36, dof: 0.35, p: { fov: 52 } });
	// from behind it: the beam reaching over the televisions to the wall
	K.push({ eye: [PX - 0.55, 1.75, PZ - 1.4], at: [W / 2, 5.0, L], fov: 50, dof: 0.06, p: { fov: 70 } });
	// along it, up over the sets towards his memories
	K.push({ eye: [PX - 0.2, 3.3, PZ + 3.2], at: [W / 2, 5.4, L], fov: 52, dof: 0.04, pass: true, p: { fov: 72 } });
	// the televisions: all of them, then one by one, in no order
	const sets = TV.stack;
	K.push({ eye: [W / 2 + 1.4, 1.2, TV.z - 4.9], at: [W / 2, 1.75, TV.z], fov: 50, dof: 0.05, p: { fov: 70 } });
	let order = sets.map((t, i) => i);
	for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); const x = order[i]; order[i] = order[j]; order[j] = x; }
	order = order.slice(0, 10);
	let prev = null;
	for (const i of order) {
		const t = sets[i];
		const sc = t.screen, f = t.facing, d = t.size * 1.25;
		if (prev) {
			// drawing back between them
			const mid = [(prev[0] + sc[0]) / 2, (prev[1] + sc[1]) / 2 + 0.2, Math.min(prev[2], sc[2]) - 2.6];
			K.push({ eye: mid, at: [(prev[0] + sc[0]) / 2, (prev[1] + sc[1]) / 2, TV.z], fov: 46, dof: 0.05, pass: true });
		}
		const side = (rnd() - 0.5) * 0.5;
		K.push({ eye: [sc[0] + f[0] * d + side, sc[1] + 0.05 + (rnd() - 0.5) * 0.15, sc[2] + f[2] * d], at: [sc[0], sc[1], sc[2]], fov: 30, dof: 0.3, p: { fov: 44 } });
		prev = sc;
	}
	// VII. her. Up from the sets, and back over her head looking always
	// ahead (she is below and behind the camera all the way)
	K.push({ eye: [W / 2 + 0.3, 3.3, TV.z - 2.3], at: [W / 2, 2.4, TV.z + 3.0], fov: 52, dof: 0.04, pass: true });
	K.push({ eye: herAt(-0.9, 4.4, 0.2), at: herAt(4.6, 1.5), fov: 54, dof: 0.04, pass: true });
	// the dark behind her, high and wide: the spot comes on
	REVEAL = K.length;
	K.push({ eye: herAt(-3.4, 2.5, -1.5), at: herAt(1.0, 0.75), fov: 46, dof: 0.08, p: { fov: 66 } });
	// down behind her, where the painting stands: her back, the chair, the
	// sets either side of her, his memories over them
	K.push({ eye: herAt(-2.55, 2.3, 0.0), at: herAt(5.2, 0.95), fov: 56, dof: 0.12, p: { eye: herAt(-2.55, 2.4, 0.0), fov: 74 } });
	// and close to her back, as the painting has her: the veil, the
	// shoulders, the lace in the chair; the sets glowing past her
	K.push({ eye: herAt(-1.6, 0.92, 0.0), at: herAt(3.0, 1.02), fov: 50, dof: 0.28, p: { eye: herAt(-1.9, 0.95, 0.0), fov: 64 } });
	return K;
}

// ---- sound, made here and now (no files): the hum that rises as the room
// resists, a hiss under the snow, a tick for each letter, the spot's clunk,
// and the tearing burst at the end
function makeSound() {
	let ac = null, hum = null, hiss = null, master = null;
	const noiseBuf = (sec) => {
		const b = ac.createBuffer(1, Math.floor(ac.sampleRate * sec), ac.sampleRate);
		const d = b.getChannelData(0);
		for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
		return b;
	};
	const start = () => {
		if (ac) { if (ac.state === 'suspended') ac.resume(); return; }
		const AC = window.AudioContext || window.webkitAudioContext;
		if (!AC) return;
		ac = window.__redAudio || new AC();
		window.__redAudio = ac;
		if (ac.state === 'suspended') ac.resume();
		master = ac.createGain(); master.gain.value = 0.9; master.connect(ac.destination);
		// the hum: two low saws a hair apart, under a low-pass
		hum = ac.createGain(); hum.gain.value = 0;
		const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 170; lp.Q.value = 4;
		[55, 55.6, 110.3].forEach((fq, i) => { const o = ac.createOscillator(); o.type = i < 2 ? 'sawtooth' : 'sine'; o.frequency.value = fq; o.connect(lp); o.start(); });
		lp.connect(hum); hum.connect(master);
		// the hiss of the snow
		hiss = ac.createGain(); hiss.gain.value = 0;
		const ns = ac.createBufferSource(); ns.buffer = noiseBuf(2); ns.loop = true;
		const bp = ac.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 3200; bp.Q.value = 0.6;
		ns.connect(bp); bp.connect(hiss); hiss.connect(master); ns.start();
	};
	const env = (node, t0, a, peak, d) => { node.gain.setValueAtTime(0, t0); node.gain.linearRampToValueAtTime(peak, t0 + a); node.gain.exponentialRampToValueAtTime(0.0001, t0 + a + d); };
	return {
		start,
		set(humK, hissK) {
			if (!ac) return;
			const t = ac.currentTime;
			hum.gain.setTargetAtTime(humK * 0.16, t, 0.15);
			hiss.gain.setTargetAtTime(hissK * 0.035, t, 0.08);
		},
		tick() {
			if (!ac) return;
			const t = ac.currentTime;
			const o = ac.createOscillator(); o.type = 'square'; o.frequency.setValueAtTime(1180, t); o.frequency.exponentialRampToValueAtTime(240, t + 0.09);
			const g = ac.createGain(); env(g, t, 0.002, 0.09, 0.12);
			o.connect(g); g.connect(master); o.start(t); o.stop(t + 0.2);
			const th = ac.createOscillator(); th.type = 'sine'; th.frequency.setValueAtTime(90, t); th.frequency.exponentialRampToValueAtTime(40, t + 0.2);
			const g2 = ac.createGain(); env(g2, t, 0.004, 0.35, 0.25);
			th.connect(g2); g2.connect(master); th.start(t); th.stop(t + 0.35);
		},
		clunk() {
			if (!ac) return;
			const t = ac.currentTime;
			const th = ac.createOscillator(); th.type = 'sine'; th.frequency.setValueAtTime(75, t); th.frequency.exponentialRampToValueAtTime(38, t + 0.25);
			const g = ac.createGain(); env(g, t, 0.003, 0.5, 0.35);
			th.connect(g); g.connect(master); th.start(t); th.stop(t + 0.5);
			const ns = ac.createBufferSource(); ns.buffer = noiseBuf(0.08);
			const hp = ac.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 1800;
			const g2 = ac.createGain(); env(g2, t, 0.001, 0.25, 0.06);
			ns.connect(hp); hp.connect(g2); g2.connect(master); ns.start(t);
		},
		burst() {
			if (!ac) return;
			const t = ac.currentTime;
			const ns = ac.createBufferSource(); ns.buffer = noiseBuf(2.4);
			const bp = ac.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 0.7;
			bp.frequency.setValueAtTime(600, t); bp.frequency.exponentialRampToValueAtTime(5000, t + 1.6);
			const g = ac.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.5, t + 0.5); g.gain.setValueAtTime(0.5, t + 1.7); g.gain.exponentialRampToValueAtTime(0.0001, t + 2.3);
			ns.connect(bp); bp.connect(g); g.connect(master); ns.start(t);
			// and the hum dropping out from under it
			const o = ac.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(110, t); o.frequency.exponentialRampToValueAtTime(18, t + 2.0);
			const g2 = ac.createGain(); env(g2, t, 0.05, 0.18, 2.0);
			o.connect(g2); g2.connect(master); o.start(t); o.stop(t + 2.2);
		},
		stop() { if (hum) hum.gain.value = 0; if (hiss) hiss.gain.value = 0; if (master) { try { master.disconnect(); } catch (e) { /* gone */ } } ac = null; hum = hiss = master = null; }
	};
}

const SUB_CSS = `
.red-sub {
	position: fixed; left: 50%; bottom: 9vh; transform: translateX(-50%); z-index: 406;
	width: min(92vw, 900px); text-align: center; pointer-events: none;
	font: italic 400 clamp(19px, 2.5vw, 32px)/1.35 'Cormorant Garamond', Georgia, serif;
	color: #f1e7dc; letter-spacing: .035em; text-shadow: 0 2px 18px rgba(0,0,0,.9), 0 0 2px rgba(0,0,0,.8);
	opacity: 0;
}`;

module.exports = function createRedTour(opts) {
	opts = opts || {};
	const KEYS = buildKeys();
	const END = KEYS.length - 1;
	// the shots the camera stops on
	const STOPS = KEYS.map((k, i) => (k.pass ? -1 : i)).filter((i) => i >= 0);
	// where to come to rest: the next shot the way the visitor was going
	// (never back past where they let go, unless they were all but there)
	const settleStop = (x, d) => {
		if (d >= 0) { for (const i of STOPS) if (i >= x - 0.06) return i; return STOPS[STOPS.length - 1]; }
		for (let j = STOPS.length - 1; j >= 0; j--) if (STOPS[j] <= x + 0.06) return STOPS[j];
		return STOPS[0];
	};
	const nextStop = (x, d) => {
		if (d > 0) { for (const i of STOPS) if (i > x + 0.01) return i; return STOPS[STOPS.length - 1]; }
		for (let j = STOPS.length - 1; j >= 0; j--) if (STOPS[j] < x - 0.01) return STOPS[j];
		return STOPS[0];
	};
	let eyeS = null, atS = null;
	// THE WARNING: press, how hard the visitor has pushed past the last shot
	// (0..1 the room resisting, 1..2 the letters, past 2.1 put out)
	let press = 0, pressGoal = 0, lastN = 0, expelAt = null, spotOnAt = null, spotState = 0;
	const sound = makeSound();
	const sub = document.createElement('div');
	sub.className = 'red-sub';
	sub.textContent = SUBTITLE;
	const subCss = document.createElement('style');
	subCss.textContent = SUB_CSS;
	document.head.appendChild(subCss);
	document.body.appendChild(sub);
	let scroll = 0, target = 0, last = null, lastInput = -10, now = 0, startAt = null, dir = 1, dirAt = -10;
	const listeners = [];
	const on = (t, fn, o) => { window.addEventListener(t, fn, o); listeners.push([t, fn, o]); };
	const push = (d) => {
		const sd = Math.sign(d);
		if (!sd || expelAt !== null) return;
		// at the last shot, forward is pressure, not movement; and back eases
		// the pressure off before the camera moves at all
		if ((sd > 0 && target >= END - 0.001 && scroll > END - 0.08) || (sd < 0 && pressGoal > 0)) {
			const gain = pressGoal < 1 ? 2.2 : 0.75;
			pressGoal = Math.max(0, Math.min(2.4, pressGoal + Math.max(-0.2, Math.min(0.13, d)) * gain));
			lastInput = now; dirAt = now; dir = sd;
			return;
		}
		// (a trackpad's tail of momentum can twitch backwards: ignore a tiny
		// reverse just after a gesture)
		if (sd !== dir && now - dirAt < 0.25 && Math.abs(d) < 0.02) return;
		if (sd !== dir) dir = sd;
		dirAt = now;
		target = Math.max(0, Math.min(END, target + d));
		lastInput = now;
	};
	const go = (d) => {
		if (expelAt !== null) return;
		if ((d > 0 && target >= END - 0.001) || (d < 0 && pressGoal > 0)) { push(d > 0 ? 0.12 : -0.12); return; }
		dir = d > 0 ? 1 : -1; target = nextStop(target, d); lastInput = now - 10;
	};
	// (the sound may only start from a tap, a click or a key)
	on('pointerdown', () => sound.start());
	on('keydown', () => sound.start());
	on('touchend', () => sound.start());
	on('wheel', (e) => {
		if (e.target.closest && e.target.closest('.st-ui')) return;
		e.preventDefault();
		const px = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * window.innerHeight : e.deltaY;
		push(Math.max(-0.6, Math.min(0.6, px / 700)));
	}, { passive: false });
	let drag = null;
	on('pointerdown', (e) => {
		if (e.target.closest && e.target.closest('button, a, .st-ui')) return;
		drag = { lx: e.clientX, ly: e.clientY, moved: 0, t: performance.now() };
	});
	on('pointermove', (e) => {
		if (!drag) return;
		const dx = e.clientX - drag.lx, dy = e.clientY - drag.ly;
		drag.lx = e.clientX; drag.ly = e.clientY;
		const d = Math.abs(dy) >= Math.abs(dx) ? -dy : -dx;
		drag.moved += Math.abs(d);
		if (drag.moved > 6) push(d / (window.innerHeight * 0.55));
	});
	on('pointerup', () => {
		const d = drag; drag = null;
		if (d && d.moved < 8 && performance.now() - d.t < 450) go(1);
	});
	on('keydown', (e) => {
		if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') go(1);
		else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') go(-1);
	});

	function update(time) {
		now = time;
		if (startAt === null) startAt = time;
		const dt = last === null ? 0 : Math.min(0.1, time - last);
		last = time;
		// (tests: ?tourdebug and window.__redShot put the camera anywhere)
		if (typeof window !== 'undefined' && window.__redShot !== undefined && /tourdebug/.test(location.search)) { scroll = target = window.__redShot; eyeS = null; }
		if (typeof window !== 'undefined' && window.__press !== undefined && /tourdebug/.test(location.search)) { pressGoal = press = window.__press; }
		// when the visitor stops, the camera settles on the nearest shot
		if (now - lastInput > 0.35) target += (settleStop(target, dir) - target) * (1 - Math.exp(-dt * 2.0));
		// a heavy, smooth glide
		scroll += (target - scroll) * (1 - Math.exp(-dt * 1.7));
		if (Math.abs(target - scroll) < 1e-4) scroll = target;

		const portrait = window.innerWidth < window.innerHeight;
		const ks = KEYS.map((k) => (portrait && k.p ? Object.assign({}, k, k.p) : k));
		const i = Math.min(END - 1, Math.floor(scroll)), u = scroll - i;
		const e = u * u * (3 - 2 * u);
		let eye = spline(ks.map((k) => k.eye), scroll);
		let at = spline(ks.map((k) => k.at), scroll);
		// (and smoothed once more, so no corner of the path is ever felt)
		if (!eyeS || dt === 0 || dt > 0.09) { eyeS = eye.slice(); atS = at.slice(); }
		const kk = 1 - Math.exp(-dt * 5.0);
		for (let c = 0; c < 3; c++) { eyeS[c] += (eye[c] - eyeS[c]) * kk; atS[c] += (at[c] - atS[c]) * kk; }
		eye = eyeS.slice(); at = atS.slice();
		const A = ks[i], B = ks[Math.min(END, i + 1)];
		const fov = mix(A.fov, B.fov, e);
		const dof = mix(A.dof, B.dof, e);
		// ---- the warning
		// (the pressure follows the visitor's push, but no faster than the
		// room allows; left alone, it ebbs, a letter at a time)
		if (now - lastInput > 2.2 && expelAt === null) pressGoal = Math.max(0, pressGoal - dt * 0.14);
		const rate = press < 1 ? 0.9 : 0.55;
		press += Math.max(-rate * dt * 2, Math.min(rate * dt, pressGoal - press));
		if (press > 2.08 && expelAt === null) { expelAt = time; sound.burst(); }
		const p1 = clamp01(press), p2 = clamp01(press - 1);
		const n = Math.min(10, Math.max(0, (press - 1) * 10.5));
		if (Math.floor(n) > lastN) { sound.tick(); if (navigator.vibrate) { try { navigator.vibrate(28); } catch (e) { /* no */ } } }
		lastN = Math.floor(n);
		let xk = expelAt === null ? 0 : clamp01((time - expelAt) / 2.3);
		if (typeof window !== 'undefined' && window.__xk !== undefined && /tourdebug/.test(location.search)) xk = window.__xk;
		// the camera creeps in, a little, and is held there trembling
		const creep = smooth(p1) * 0.28 + p2 * 0.06;
		eye = [eye[0] + FX * creep, eye[1] - creep * 0.08, eye[2] + FZ * creep];
		const shake = (p1 * 0.004 + p2 * 0.008 + xk * 0.05);
		eye[0] += Math.sin(time * 37.0) * shake; eye[1] += Math.sin(time * 41.0 + 1.0) * shake;
		// the spot: on (with a clunk and a stutter) once she is found; under
		// the pressure it falters
		const want = scroll > REVEAL - 0.35 ? 1 : 0;
		if (want && !spotState) { spotState = 1; spotOnAt = time; sound.clunk(); }
		if (!want && spotState && scroll < REVEAL - 0.8) spotState = 0;
		let sk = 0;
		if (spotState) {
			const st = time - spotOnAt;
			sk = st < 0.75 ? [0, 1, 0.15, 0.9, 0.3, 1][Math.min(5, Math.floor(st / 0.125))] : 1;
		}
		const fh = Math.sin(time * 13.0) * Math.sin(time * 5.3);
		sk *= 1 - (p1 * 0.25 + p2 * 0.3) * (fh > 0.6 ? 1 : 0) - xk * (Math.sin(time * 60) > 0 ? 0.8 : 0);
		room.setSpot(Math.max(0, sk));
		room.setWarn({ s: smooth((press - 0.12) / 0.45), n, glitch: smooth(xk * 1.6), freeze: press > 0.15 });
		sub.style.opacity = String(smooth((press - 0.35) / 0.4) * (1 - smooth((xk - 0.1) / 0.3)) * (0.88 + 0.12 * Math.sin(time * 2.0)));
		sound.set(smooth(p1) * (1 - xk) + p2 * 0.5, smooth((press - 0.12) / 0.45) * (1 - xk * 0.5));
		if (expelAt !== null && xk >= 1) {
			// put out
			if (opts.onExpel) opts.onExpel();
			else reset();
			expelAt = null;
		}
		// a hand-held breath: slight, slow
		const tt = (typeof window !== 'undefined' && window.__tvTime != null ? window.__tvTime : time);
		const dist = Math.hypot(at[0] - eye[0], at[1] - eye[1], at[2] - eye[2]);
		const br = 0.01 + 0.03 * Math.min(1, dist / 6);
		eye = [eye[0] + Math.sin(tt * 0.31) * br, eye[1] + Math.sin(tt * 0.43 + 1) * br * 0.6, eye[2] + Math.cos(tt * 0.27) * br];
		at = [at[0] + Math.sin(tt * 0.21 + 2) * br * 0.8, at[1] + Math.sin(tt * 0.37) * br * 0.5, at[2]];
		const ew = W3(eye), aw = W3(at);
		// out of the dark at the start
		const fade = Math.max(1 - clamp01((time - startAt - 0.3) / 1.8), smooth((xk - 0.82) / 0.18));
		// (the room keeps her from any camera in front of her)
		room.setViewer(ew);
		return {
			eye: ew, target: aw, fov, roll: Math.sin(tt * 0.17) * 0.004,
			moving: true,
			look: { letterbox: 0.45, focus: dist, aperture: dof, vignette: 0.3 + p1 * 0.25, exposure: 1.45, shafts: 1.0, fade, fadeColor: [0, 0, 0], glitch: smooth((xk - 0.25) / 0.6) * 0.9 + p2 * 0.06 }
		};
	}
	// back to the start (the preview, put out, comes round again)
	function reset() {
		press = pressGoal = 0; lastN = 0; expelAt = null; spotState = 0;
		scroll = target = 0; eyeS = null; startAt = null;
		room.setWarn({ s: 0, n: 0, glitch: 0, freeze: false });
		room.setSpot(0);
	}
	function dispose() {
		for (const [t, fn, o] of listeners) window.removeEventListener(t, fn, o);
		listeners.length = 0;
		sound.stop();
		sub.remove(); subCss.remove();
		room.setWarn({ s: 0, n: 0, glitch: 0, freeze: false });
		room.setSpot(0);
		room.setViewer(null);
	}
	if (/tourdebug/.test(location.search)) window.__redTourInfo = { END, REVEAL, STOPS };
	return { update, tap: () => go(1), dispose, placeFlower() {}, startSound: () => sound.start(), get scroll() { return scroll; }, END, REVEAL };
};

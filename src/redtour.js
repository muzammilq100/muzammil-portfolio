'use strict';

/*
 * The red room's tour (?redroom). One continuous camera move, played
 * forwards and backwards by the visitor's scroll or swipe, settling on a
 * shot whenever they stop:
 *
 *   the dark corridor, ENTER flickering over the open door; closer; through
 *   it; the darkroom opening up along the left wall; down into the
 *   developer, where his photograph comes up in the black liquid; up to the
 *   prints drying on their lines; the black cable climbing the shaft; up
 *   with it as it is slung across the room; down the far side past the
 *   polaroids; the projector on its table; its reels turning, close; the
 *   lens, its light, the sparks of dust in it; along the beam over the
 *   televisions; and his memories on the far wall.
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
	// her: from behind, as in the painting, the sets glowing beyond her
	{
		const fx = Math.sin(WOMAN.yaw), fz = Math.cos(WOMAN.yaw);
		K.push({ eye: [WOMAN.x - fx * 2.5 - fz * 0.2, 1.3, WOMAN.z - fz * 2.5 + fx * 0.2], at: [WOMAN.x + fx * 0.4, 0.85, WOMAN.z + fz * 0.4], fov: 40, dof: 0.22, p: { fov: 58 } });
	}
	// the televisions: all of them, then one by one, in no order
	const sets = TV.stack;
	K.push({ eye: [W / 2 + 1.4, 1.2, TV.z - 4.9], at: [W / 2, 1.75, TV.z], fov: 50, dof: 0.05, p: { fov: 70 } });
	const order = sets.map((t, i) => i);
	for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); const x = order[i]; order[i] = order[j]; order[j] = x; }
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
	// back, up, over them: his memories on the far wall
	K.push({ eye: [W / 2, 2.6, TV.z - 3.5], at: [W / 2, 4.5, L], fov: 52, dof: 0.05, pass: true });
	K.push({ eye: [W / 2, 4.3, TV.z + 1.6], at: [W / 2, 6.0, L], fov: 62, dof: 0.04, p: { fov: 82 } });
	return K;
}

module.exports = function createRedTour() {
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
	let scroll = 0, target = 0, last = null, lastInput = -10, now = 0, startAt = null, dir = 1, dirAt = -10;
	const listeners = [];
	const on = (t, fn, o) => { window.addEventListener(t, fn, o); listeners.push([t, fn, o]); };
	const push = (d) => {
		const sd = Math.sign(d);
		if (!sd) return;
		// (a trackpad's tail of momentum can twitch backwards: ignore a tiny
		// reverse just after a gesture)
		if (sd !== dir && now - dirAt < 0.25 && Math.abs(d) < 0.02) return;
		if (sd !== dir) dir = sd;
		dirAt = now;
		target = Math.max(0, Math.min(END, target + d));
		lastInput = now;
	};
	const go = (d) => { dir = d > 0 ? 1 : -1; target = nextStop(target, d); lastInput = now - 10; };
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
		if (typeof window !== 'undefined' && window.__redShot !== undefined && /tourdebug/.test(location.search)) { scroll = target = window.__redShot; }
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
		// a hand-held breath: slight, slow
		const tt = (typeof window !== 'undefined' && window.__tvTime != null ? window.__tvTime : time);
		const dist = Math.hypot(at[0] - eye[0], at[1] - eye[1], at[2] - eye[2]);
		const br = 0.01 + 0.03 * Math.min(1, dist / 6);
		eye = [eye[0] + Math.sin(tt * 0.31) * br, eye[1] + Math.sin(tt * 0.43 + 1) * br * 0.6, eye[2] + Math.cos(tt * 0.27) * br];
		at = [at[0] + Math.sin(tt * 0.21 + 2) * br * 0.8, at[1] + Math.sin(tt * 0.37) * br * 0.5, at[2]];
		const ew = W3(eye), aw = W3(at);
		// out of the dark at the start
		const fade = 1 - clamp01((time - startAt - 0.3) / 1.8);
		return {
			eye: ew, target: aw, fov, roll: Math.sin(tt * 0.17) * 0.004,
			moving: true,
			look: { letterbox: 0.45, focus: dist, aperture: dof, vignette: 0.3, exposure: 1.45, shafts: 1.0, fade, fadeColor: [0, 0, 0] }
		};
	}
	function dispose() { for (const [t, fn, o] of listeners) window.removeEventListener(t, fn, o); listeners.length = 0; }
	return { update, tap: () => go(1), dispose, placeFlower() {}, get scroll() { return scroll; }, END };
};

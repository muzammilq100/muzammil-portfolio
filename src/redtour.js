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
const { W, L, TV, DARK, PROJ } = room.ROOM;

const W3 = (p) => [p[0] + O[0], p[1] + O[1], p[2] + O[2]];
const mix = (a, b, t) => a + (b - a) * t;
const clamp01 = (x) => Math.max(0, Math.min(1, x));
const easeIO = (t) => 0.5 - 0.5 * Math.cos(Math.PI * clamp01(t));

// the projector's parts in the room (its small pitch left out)
const PX = PROJ.x, PY = PROJ.table, PZ = PROJ.z;
const REEL = [PX + PROJ.feed[0], PY + PROJ.feed[1], PZ + PROJ.feed[2]];
const LENS = PROJ.lens;
const tray = DARK.trays[0];

// eye, what it looks at, lens (degrees); dof: how shallow the focus is;
// p: changes for a phone held upright
const KEYS = [
	// the corridor: far back in the dark, the door and its sign
	{ eye: [W / 2 + 0.15, 1.55, -9.6], at: [W / 2, 1.7, 0.0], fov: 40, dof: 0.05, p: { fov: 58 } },
	// closer: the sign overhead, the red pouring out
	{ eye: [W / 2 + 0.05, 1.6, -3.0], at: [W / 2, 1.85, 1.5], fov: 50, dof: 0.05, p: { fov: 70 } },
	// through the door: the room opens
	{ eye: [W / 2 - 0.2, 1.5, 0.9], at: [W / 2 - 3.0, 1.4, 7.0], fov: 56, dof: 0.04, p: { fov: 74 } },
	// the darkroom along the left wall
	{ eye: [3.3, 1.55, 1.3], at: [0.3, 1.35, 5.2], fov: 50, dof: 0.05, p: { eye: [2.8, 1.6, 0.9], fov: 72 } },
	// down into the developer: his photograph coming up in the black water
	{ eye: [1.05, 1.5, tray - 0.42], at: [DARK.TXc - 0.02, DARK.liquid, tray + 0.04], fov: 34, dof: 0.2, p: { eye: [1.0, 1.55, tray - 0.45], fov: 52 } },
	// up to the prints drying on their lines
	{ eye: [2.0, 1.6, 8.3], at: [0.4, 2.25, 11.3], fov: 50, dof: 0.12, p: { eye: [1.8, 1.6, 8.1], fov: 72 } },
	// the cable, climbing the shaft
	{ eye: [4.2, 1.7, 5.6], at: [0.5, 3.6, 7.6], fov: 58, dof: 0.04, p: { fov: 76 } },
	// up with it as it is slung across the room
	{ eye: [3.6, 5.4, 8.0], at: [10.5, 5.0, 11.6], fov: 56, dof: 0.04, p: { fov: 76 } },
	// down the far side, past the polaroids between the windows
	{ eye: [12.4, 2.9, 11.4], at: [W, 3.2, 14.4], fov: 52, dof: 0.06, p: { fov: 72 } },
	// the projector on its table
	{ eye: [PX + 2.0, 1.35, PZ - 1.5], at: [PX, 1.35, PZ + 0.1], fov: 42, dof: 0.12, p: { eye: [PX + 1.6, 1.4, PZ - 1.5], fov: 62 } },
	// its reels turning, close
	{ eye: [PX + 0.85, REEL[1] + 0.12, REEL[2] - 0.35], at: [REEL[0], REEL[1] - 0.05, REEL[2]], fov: 36, dof: 0.32, p: { fov: 52 } },
	// the lens: its light, and the sparks of dust turning in it
	{ eye: [PX + 0.75, LENS[1] + 0.06, LENS[2] + 1.1], at: [PX, LENS[1] + 0.02, LENS[2]], fov: 44, dof: 0.22, p: { fov: 62 } },
	// along the beam, over the televisions
	{ eye: [W / 2 + 0.4, 2.4, 17.6], at: [W / 2, 5.4, L], fov: 54, dof: 0.05, p: { fov: 74 } },
	// his memories on the far wall
	{ eye: [W / 2, 4.3, TV.z + 1.6], at: [W / 2, 6.0, L], fov: 62, dof: 0.04, p: { fov: 82 } }
];
const END = KEYS.length - 1;

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

module.exports = function createRedTour() {
	let scroll = 0, target = 0, last = null, lastInput = -10, now = 0, startAt = null;
	const listeners = [];
	const on = (t, fn, o) => { window.addEventListener(t, fn, o); listeners.push([t, fn, o]); };
	const push = (d) => { target = Math.max(0, Math.min(END, target + d)); lastInput = now; };
	const go = (d) => { target = Math.max(0, Math.min(END, Math.round(target) + d)); lastInput = now - 10; };
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
		if (now - lastInput > 0.5) target += (Math.round(target) - target) * (1 - Math.exp(-dt * 3.0));
		scroll += (target - scroll) * (1 - Math.exp(-dt * 2.0));
		if (Math.abs(target - scroll) < 1e-4) scroll = target;

		const portrait = window.innerWidth < window.innerHeight;
		const ks = KEYS.map((k) => (portrait && k.p ? Object.assign({}, k, k.p) : k));
		// eased between the shots, so the camera comes to rest on each
		const i = Math.min(END - 1, Math.floor(scroll)), u = scroll - i;
		const e = easeIO(u);
		const s = i + e;
		let eye = spline(ks.map((k) => k.eye), s);
		let at = spline(ks.map((k) => k.at), s);
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
module.exports.KEYS = KEYS;

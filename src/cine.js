'use strict';

/*
 * THE CAMERA OPERATOR
 * -------------------
 * tour.js says where the camera is and what it looks at. This module
 * is the person holding it: the small things a real camera does that
 * make a room read as deep rather than flat.
 *
 *   - parallax: move the mouse (or tilt the phone) and the camera
 *     shifts a little to that side while still looking at its subject,
 *     so near things slide across far things, the way they do when you
 *     lean to look round something. This is the strongest cue of depth
 *     there is on a flat screen.
 *   - a slow arc while a shot rests: the camera is never dead still, it
 *     drifts a few centimetres round its subject, wider for wide shots.
 *   - speed: as a move gathers pace the lens opens a touch wider and the
 *     camera leans into the turn; both settle as it comes to rest.
 *   - focus is pulled, not snapped: when the subject changes, sharpness
 *     travels to it over a moment (post.js does the blur).
 *
 * All of it is small, eased, and zero on the first frame of a shot cut,
 * so the tour's own framing is kept.
 */

const quality = require('./quality');

const ptr = [0, 0];       // where the pointer / tilt asks the camera to lean, -1..1
const lean = [0, 0];      // where it is, eased
let tilt0 = null;
let lastInput = 0;

if (typeof window !== 'undefined') {
	window.addEventListener('pointermove', (e) => {
		if (e.pointerType === 'touch') return;
		ptr[0] = Math.max(-1, Math.min(1, (e.clientX / window.innerWidth) * 2 - 1));
		ptr[1] = Math.max(-1, Math.min(1, (e.clientY / window.innerHeight) * 2 - 1));
		lastInput = performance.now();
	}, { passive: true });
	const mark = () => { lastInput = performance.now(); };
	['wheel', 'touchstart', 'touchmove', 'keydown', 'pointerdown'].forEach((n) => window.addEventListener(n, mark, { passive: true, capture: true }));
	// phones that report their tilt without asking (Android): lean with the hand
	window.addEventListener('deviceorientation', (e) => {
		if (e.gamma === null || e.beta === null) return;
		if (!tilt0) tilt0 = [e.gamma, e.beta];
		// the resting angle follows slowly, so however the phone is held is "level"
		tilt0[0] += (e.gamma - tilt0[0]) * 0.01;
		tilt0[1] += (e.beta - tilt0[1]) * 0.01;
		ptr[0] = Math.max(-1, Math.min(1, (e.gamma - tilt0[0]) / 14));
		ptr[1] = Math.max(-1, Math.min(1, (e.beta - tilt0[1]) / 14));
	}, { passive: true });
}

let last = 0;
let prevEye = null, prevTarget = null;
const vel = [0, 0, 0];
let speed = 0;            // metres a second, eased
let focus = null;
let still = 0;            // seconds the camera has been (nearly) at rest

const out = { eye: [0, 0, 0], target: [0, 0, 0], fov: 50, roll: 0 };

const cine = {
	// c: { eye, target, fov (degrees), roll } from the tour
	apply(c, time) {
		const dt = Math.min(0.1, Math.max(0, time - last));
		last = time;

		const e = c.eye, t = c.target;
		let f = [t[0] - e[0], t[1] - e[1], t[2] - e[2]];
		const d = Math.hypot(f[0], f[1], f[2]) || 1;
		f = [f[0] / d, f[1] / d, f[2] / d];
		let r = [-f[2], 0, f[0]];
		const rl = Math.hypot(r[0], r[2]) || 1;
		r = [r[0] / rl, 0, r[2] / rl];
		const u = [r[1] * f[2] - r[2] * f[1], r[2] * f[0] - r[0] * f[2], r[0] * f[1] - r[1] * f[0]];

		// how fast the tour is moving the camera (a jump of metres is a cut)
		let cut = !prevEye;
		if (prevEye && dt > 0) {
			const m = [e[0] - prevEye[0], e[1] - prevEye[1], e[2] - prevEye[2]];
			const len = Math.hypot(m[0], m[1], m[2]);
			if (len > 2.5) cut = true;
			else {
				const k = Math.min(1, dt * 5);
				for (let i = 0; i < 3; i++) vel[i] += (m[i] / dt - vel[i]) * k;
			}
			const tm = Math.hypot(t[0] - prevTarget[0], t[1] - prevTarget[1], t[2] - prevTarget[2]);
			still = (len / dt < 0.12 && tm / dt < 0.2) ? still + dt : 0;
		}
		if (cut) { vel[0] = vel[1] = vel[2] = 0; still = 0; }
		prevEye = e.slice(); prevTarget = t.slice();
		speed = Math.hypot(vel[0], vel[1], vel[2]);

		// lean towards the pointer, with a little weight to it
		const k = Math.min(1, dt * 2.6);
		lean[0] += (ptr[0] - lean[0]) * k;
		lean[1] += (ptr[1] - lean[1]) * k;

		// the further the subject, the further the camera may travel
		const reach = Math.max(0.03, Math.min(0.32, d * 0.05));
		// at rest, a slow arc round the subject (wider on a phone held still,
		// where nothing else moves the view)
		const arcK = (quality.isPhone && !tilt0 ? 1.5 : 1.0) * Math.min(1, still / 2.5);
		const arcX = (Math.sin(time * 0.131) * 0.55 + Math.sin(time * 0.071 + 1.3) * 0.45) * reach * 0.55 * arcK;
		const arcY = Math.sin(time * 0.097 + 0.6) * reach * 0.16 * arcK;

		const sx = lean[0] * reach + arcX;
		const sy = -lean[1] * reach * 0.45 + arcY;
		for (let i = 0; i < 3; i++) {
			out.eye[i] = e[i] + r[i] * sx + u[i] * sy;
			// the subject stays where it is in the frame, almost: it slips a
			// little, as it does for a head that turns less than it moves
			out.target[i] = t[i] + (r[i] * sx + u[i] * sy) * 0.12;
		}
		// never under the floor
		if (e[1] > 0.05) out.eye[1] = Math.max(0.05, out.eye[1]);

		// speed opens the lens a little; a sideways move banks the camera
		const side = vel[0] * r[0] + vel[2] * r[2];
		out.fov = c.fov + Math.min(3.5, speed * 0.55);
		out.roll = (c.roll || 0) + Math.max(-0.035, Math.min(0.035, -side * 0.006));
		return out;
	},

	// the lens's focus, pulled towards what the tour asks for
	pull(shot, time) {
		if (focus === null || !(Math.abs(shot.focus - focus) < 40)) focus = shot.focus;
		const dt = 1 / 60;
		focus += (shot.focus - focus) * Math.min(1, dt * 3.2);
		shot.focus = focus;
		// a resting shot holds its subject a touch more apart from the room
		if (shot.aperture > 0) shot.aperture *= 1 + 0.25 * Math.min(1, still / 3);
	},

	get speed() { return speed; },
	// has the view been at rest, with no one touching anything, for a while?
	get resting() {
		return still > 2 && performance.now() - lastInput > 2000;
	}
};

module.exports = cine;

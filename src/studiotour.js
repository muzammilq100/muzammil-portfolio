/*
 * The studio's tour (?studio). A petal of bougainvillea leads the eye.
 * It parts from the vine under the glass roof, falls through a window's
 * beam among the dust, drifts the length of the room to the red door, and
 * from there glides through the rotunda's arches on the pool's line (the
 * symmetry of the room in one frame: arch, arch, pool, niche, nymph), skims
 * the water to the nymph, and lands on the pool, where a koi comes up and
 * takes it.
 *
 * Like the gallery's tour it moves only while the visitor scrolls, swipes
 * or taps: each gesture carries the camera at most to the next shot, and it
 * settles there. All positions are in the studio's own coordinates
 * (studio.js); the camera it returns is in the world's.
 */
const studio = require('./studio');
const O = studio.O;
const { W, H, POOL, ROT, WIN } = studio.STUDIO;

const W3 = (p) => [p[0] + O[0], p[1] + O[1], p[2] + O[2]];
const mix = (a, b, t) => a + (b - a) * t;
const mix3 = (a, b, t) => [mix(a[0], b[0], t), mix(a[1], b[1], t), mix(a[2], b[2], t)];
const clamp01 = (x) => Math.max(0, Math.min(1, x));
const smooth = (t) => t * t * (3 - 2 * t);
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// a smooth curve through points (Catmull-Rom, ends held)
function spline(pts, t) {
	const n = pts.length - 1;
	const x = clamp01(t) * n;
	const i = Math.min(n - 1, Math.floor(x));
	const u = x - i;
	const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(n, i + 2)];
	const u2 = u * u, u3 = u2 * u;
	return [0, 1, 2].map((k) => 0.5 * ((2 * p1[k]) + (-p0[k] + p2[k]) * u + (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * u2 + (-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * u3));
}

// where the petal comes down on the water, near the nymph
const LAND = [W / 2 + 0.35, 0.02, POOL.z0 + 3.5];
// where it hangs at each shot, and where the camera stands
const AXIS = ROT.cx;
const HOME = [4.3, 7.42, 16.35];                   // under the vine on the far truss
const BEAM = [2.25, 3.35, WIN.c[2] - 0.75];        // in a window's beam
const DOOR = [AXIS, 1.95, 20.85];                  // before the red door, on the line
const OUT = [AXIS, 1.45, ROT.cz - ROT.ro - 1.55];  // out through the rotunda, over the pool
const NYMPH = [AXIS + 0.2, 0.95, POOL.z0 + 2.6];   // before the nymph
const SHOTS = [
	// 0: the petal among the blossom under the old glass
	{ petal: HOME, eye: [5.75, 6.25, 14.55], at: HOME, fov: 40, look: { focus: 2.4, aperture: 0.7 } },
	// 1: falling through a window's beam, the dust gold about it
	{ petal: BEAM, eye: [3.6, 3.05, BEAM[2] - 1.15], at: BEAM, fov: 46, look: { focus: 3.3, aperture: 0.6 } },
	// 2: before the red door: the rotunda's arches frame the niche, the nymph in it
	{ petal: DOOR, eye: [AXIS, DOOR[1] - 0.06, DOOR[2] + 0.95], at: [AXIS, 2.1, 1.0], fov: 50, look: { focus: 0.9, aperture: 0.12 } },
	// 3: out of the rotunda over the water, the pool running to the niche
	{ petal: OUT, eye: [AXIS, OUT[1] - 0.06, OUT[2] + 0.95], at: [AXIS, 2.1, 1.0], fov: 54, look: { focus: 1.5, aperture: 0.15 } },
	// 4: low by the water before the nymph, her reflection below
	{ petal: NYMPH, eye: [AXIS + 1.35, 0.42, NYMPH[2] + 1.7], at: [AXIS, 2.1, 1.0], fov: 48, look: { focus: 2.2, aperture: 0.55 } },
	// 5: on the water: the koi comes up for it
	{ petal: LAND, eye: [LAND[0] - 0.62, 0.2, LAND[2] + 0.85], at: [LAND[0] + 0.05, 0.0, LAND[2] - 0.1], fov: 40, look: { focus: 1.05, aperture: 0.8 } }
];
// the moves between them: how long each takes (film seconds), the petal's
// path and the camera's (both through the shots' own places at their ends)
const MOVES = [
	{
		dur: 5.5,
		petal: [HOME, [3.6, 6.4, 15.6], [2.7, 5.1, 14.6], [2.15, 4.1, 13.4], BEAM],
		eye: [SHOTS[0].eye, [5.0, 5.4, 14.6], [4.2, 3.9, 13.4], SHOTS[1].eye]
	},
	{
		dur: 7,
		petal: [BEAM, [3.0, 3.9, 15.0], [4.6, 3.4, 18.4], [6.4, 2.6, 20.6], DOOR],
		eye: [SHOTS[1].eye, [2.0, 2.7, 15.2], [3.0, 2.2, 20.3], [5.9, 2.0, 21.8], SHOTS[2].eye],
		// the camera keeps the petal in view, then swings round onto the line
		at: (u, p) => (u < 0.72 ? p : mix3(p, SHOTS[2].at, smooth((u - 0.72) / 0.28)))
	},
	{
		// through the arches on the line: the symmetry of the room
		dur: 7,
		petal: [DOOR, [AXIS, 2.0, ROT.cz + ROT.ri], [AXIS, 1.85, ROT.cz], [AXIS, 1.65, ROT.cz - ROT.ri], OUT],
		eye: null,
		follow: (p) => [AXIS, p[1] - 0.06, p[2] + 0.95],
		at: () => SHOTS[2].at
	},
	{
		dur: 7,
		petal: [OUT, [AXIS + 0.25, 1.05, OUT[2] - 3.2], [AXIS - 0.35, 0.65, (OUT[2] + NYMPH[2]) / 2], [AXIS + 0.3, 0.75, NYMPH[2] + 1.8], NYMPH],
		eye: [SHOTS[3].eye, [AXIS + 1.6, 0.7, OUT[2] - 1.5], [AXIS + 1.75, 0.45, (OUT[2] + NYMPH[2]) / 2 + 1.0], SHOTS[4].eye],
		at: (u, p) => (u < 0.3 ? mix3(SHOTS[3].at, p, smooth(u / 0.3)) : mix3(p, SHOTS[4].at, smooth(clamp01((u - 0.55) / 0.45))))
	},
	{
		// a last turn before her, and down, spinning, onto the water
		dur: 6,
		petal: [NYMPH, [AXIS - 0.4, 1.35, NYMPH[2] - 0.8], [AXIS - 0.15, 0.9, NYMPH[2] + 0.4], [LAND[0] - 0.1, 0.38, LAND[2] - 0.15], [LAND[0], 0.06, LAND[2]], LAND],
		eye: [SHOTS[4].eye, [AXIS + 1.2, 0.5, NYMPH[2] + 1.6], [LAND[0] - 0.4, 0.3, LAND[2] + 1.2], SHOTS[5].eye],
		at: (u, p) => (u < 0.25 ? mix3(SHOTS[4].at, p, smooth(u / 0.25)) : mix3(p, SHOTS[5].at, smooth(clamp01((u - 0.7) / 0.3))))
	}
];
const AT = [0];
MOVES.forEach((m) => AT.push(AT[AT.length - 1] + m.dur));
const END = AT[AT.length - 1];

// how far a wheel or a finger winds the film (as the gallery's tour)
const WHEEL_PX_PER_SEC = 210;
const TOUCH_PX_PER_SEC = 95;
const GESTURE_GAP = 0.35;
const FOLLOW = 0.45;
const SETTLE_AFTER = 0.7, SETTLE_NEAR = 0.9;

function smoothDamp(current, target, velocity, smoothTime, dt, maxSpeed) {
	smoothTime = Math.max(0.0001, smoothTime);
	const omega = 2 / smoothTime;
	const x = omega * dt;
	const exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
	let change = current - target;
	const maxChange = maxSpeed * smoothTime;
	change = Math.max(-maxChange, Math.min(maxChange, change));
	const t2 = current - change;
	const temp = (velocity + omega * change) * dt;
	let v = (velocity - omega * temp) * exp;
	let out = t2 + (change + temp) * exp;
	if ((target - current > 0) === (out > target)) { out = target; v = (out - target) / dt; }
	return [out, v];
}

module.exports = function createStudioTour() {
	let scroll = 0, vel = 0, target = 0, lastInput = -10, now = 0, last = null;
	let gestureFrom = null, auto = false;
	let landed = false, lured = false, landedAt = 0;

	const nearest = (s) => { let b = 0; for (let i = 1; i < AT.length; i++) if (Math.abs(AT[i] - s) < Math.abs(AT[b] - s)) b = i; return b; };
	// one gesture never carries past the next shot
	const wind = (secs) => {
		if (now - lastInput > GESTURE_GAP || gestureFrom === null) gestureFrom = nearest(target);
		lastInput = now;
		auto = false;
		const lo = AT[Math.max(0, gestureFrom - 1)], hi = AT[Math.min(AT.length - 1, gestureFrom + 1)];
		target = Math.max(lo, Math.min(hi, target + secs));
	};
	const go = (d) => {
		const i = nearest(target);
		target = AT[Math.max(0, Math.min(AT.length - 1, i + d))];
		auto = true; lastInput = now;
	};

	// input
	let drag = null;
	const onWheel = (e) => {
		if (e.target.closest && e.target.closest('.koi-feed, .st-ui')) return;
		e.preventDefault();
		const px = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * window.innerHeight : e.deltaY;
		wind(px / WHEEL_PX_PER_SEC);
	};
	window.addEventListener('wheel', onWheel, { passive: false });
	window.addEventListener('pointerdown', (e) => {
		if (e.target.closest && e.target.closest('button, a, .st-ui')) return;
		drag = { ly: e.clientY, lx: e.clientX, moved: 0, t: performance.now(), v: 0, lt: performance.now() };
	});
	window.addEventListener('pointermove', (e) => {
		if (!drag) return;
		const dx = e.clientX - drag.lx, dy = e.clientY - drag.ly;
		drag.lx = e.clientX; drag.ly = e.clientY;
		const d = Math.abs(dy) >= Math.abs(dx) ? -dy : -dx;
		drag.moved += Math.abs(d);
		const t = performance.now(), secs = d / TOUCH_PX_PER_SEC;
		drag.v = drag.v * 0.6 + (secs / Math.max(0.008, (t - drag.lt) / 1000)) * 0.4;
		drag.lt = t;
		if (drag.moved > 6) wind(secs);
	});
	window.addEventListener('pointerup', () => {
		const d = drag; drag = null;
		if (!d) return;
		// a tap is for the koi (when feeding) or carries on; a flick glides a little
		if (d.moved >= 10 && performance.now() - d.lt < 120) wind(Math.max(-1.6, Math.min(1.6, d.v * 0.22)));
	});
	window.addEventListener('keydown', (e) => {
		if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') go(1);
		else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') go(-1);
	});

	// a tap that nothing else took: on to the next shot
	function tap() { go(1); }

	// the petal and the camera at a place on the film
	function frame(s, time) {
		let idx = 0;
		while (idx < MOVES.length - 1 && s >= AT[idx + 1]) idx++;
		const M = MOVES[idx];
		const u = clamp01((s - AT[idx]) / M.dur);
		const e = ease(u);
		const near = nearest(s);
		const drift = 1 - smooth(clamp01(Math.abs(s - AT[near]) / 0.9));
		// the petal: along its path; at a shot, hovering on the air
		let p = spline(M.petal, e);
		const hov = [Math.sin(time * 0.53 + near) * 0.06, Math.sin(time * 0.71 + near * 2.0) * 0.05, Math.cos(time * 0.47 + near) * 0.06];
		const still = near === 5 ? 0 : drift;
		p = [p[0] + hov[0] * still, p[1] + hov[1] * still, p[2] + hov[2] * still];
		// the camera
		let eye = M.eye ? spline(M.eye, e) : M.follow(p);
		let at = M.at ? M.at(u, p) : p;
		// a breath of hand-held movement
		eye = [eye[0] + Math.sin(time * 0.31) * 0.025, eye[1] + Math.sin(time * 0.43 + 1) * 0.018, eye[2] + Math.cos(time * 0.27) * 0.025];
		const fov = mix(SHOTS[idx].fov, SHOTS[idx + 1].fov, smooth(u));
		const la = SHOTS[idx].look, lb = SHOTS[idx + 1].look;
		const focus = Math.hypot(eye[0] - p[0], eye[1] - p[1], eye[2] - p[2]);
		const aperture = mix(la.aperture, lb.aperture, smooth(u));
		// the tumble: a slow turn and flutter, flatter as it settles
		const spin = s * 1.7 + time * 0.5;
		const axis = [Math.sin(spin * 0.37), 0.8 + 0.2 * Math.cos(spin * 0.5), Math.cos(spin * 0.29)];
		const ang = (idx === 4 ? (1 - u) : 1) * (spin * 1.3) + (idx === 4 ? u * 0.3 : 0);
		// the roll: a lean into the swing round to the door, and the glide over the water
		const roll = idx === 1 ? Math.sin(u * Math.PI) * -0.07 : idx === 3 ? Math.sin(u * Math.PI) * 0.05 : 0;
		return { p, eye, at, fov, focus, aperture, axis, ang, roll, idx, u, near };
	}

	function update(time) {
		const dt = last === null ? 0 : Math.min(0.1, time - last);
		last = time; now = time;
		if (!auto && !drag && now - lastInput > SETTLE_AFTER) {
			const i = nearest(target);
			if (Math.abs(AT[i] - target) < SETTLE_NEAR) target = AT[i];
		}
		if (auto) {
			const r = smoothDamp(scroll, target, vel, 1.2, dt, 1.4);
			scroll = r[0]; vel = r[1];
			if (Math.abs(target - scroll) < 1e-3) { scroll = target; vel = 0; auto = false; }
		} else {
			const r = smoothDamp(scroll, target, vel, FOLLOW, dt, 3.0);
			scroll = r[0]; vel = r[1];
			if (Math.abs(target - scroll) < 1e-4 && Math.abs(vel) < 1e-3) { scroll = target; vel = 0; }
		}
		// (tests: ?tourdebug and window.__stScroll put the film anywhere)
		if (typeof window !== 'undefined' && window.__stScroll !== undefined && /tourdebug/.test(location.search)) { scroll = target = window.__stScroll; vel = 0; }
		const F = frame(scroll, time);
		// the petal's end on the water: a koi drifts over to wait as it comes
		// down; it lands; it is taken. Winding back takes it off the water.
		if (F.idx >= 3 && !lured) { studio.petalLure(LAND[0], LAND[2]); lured = true; }
		if (scroll >= END - 0.02 && !landed) { studio.petalLand(LAND[0], LAND[2]); landed = true; landedAt = time; }
		if (scroll < END - 0.3 && landed) { studio.petalReset(); landed = false; }
		if (F.idx < 3 && lured) { lured = false; }
		const ps = studio.petalState();
		// on the water: the camera sinks slowly towards it and leans in, and
		// holds there while the koi comes up for it
		if (landed) {
			const k = ease(clamp01((time - landedAt) / 7));
			const close = [LAND[0] - 0.36, 0.1, LAND[2] + 0.5];
			F.eye = mix3(F.eye, close, k);
			F.fov = mix(F.fov, 34, k);
			F.focus = Math.hypot(F.eye[0] - LAND[0], F.eye[1] - LAND[1], F.eye[2] - LAND[2]);
		}
		studio.setGuide({ vis: true, pos: F.p, axis: F.axis, ang: F.ang, size: 0.07 });
		return {
			eye: W3(F.eye), target: W3(F.at), fov: F.fov, roll: F.roll, fade: 0,
			// at the end, after the koi has eaten, the visitor may feed them
			pond: landed && ps.eaten, shot: landed ? 5 : F.near,
			look: { letterbox: 0.55, focus: Math.max(0.3, F.focus), aperture: F.aperture, vignette: 0.28, exposure: 1.0, shafts: 1.0 }
		};
	}

	return { update, tap, get scroll() { return scroll; }, END };
};

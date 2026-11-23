/*
 * The studio's tour (?studio). A petal of bougainvillea leads the eye.
 *
 * It lets go of the vine under the glass roof and falls, rocking and
 * slipping like a real petal, through a window's beam; it drifts past the
 * tall red door; then, in one wide shot of the whole rotunda hung with its
 * moving cloth, it passes through the arches on the pool's line; it comes
 * out over the water to the nymph, where the low sun through the first
 * window lights her and her reflection lies in the pool; it circles her,
 * and settles on the water, where the skylight and the bougainvillea lie
 * mirrored, and a koi comes up and takes it.
 *
 * Like the gallery's tour it moves only while the visitor scrolls, swipes
 * or taps: each gesture carries the camera at most to the next shot, and
 * it settles there. Positions are in the studio's own coordinates
 * (studio.js); the camera it returns is in the world's.
 *
 * The petal's turning is worked out from its flight, as the gallery's
 * falling leaf's is (tour.js, leafState): it rides flat on the air and
 * rocks, slipping towards the edge that is down; carried along, it trails
 * its tip and banks into the bends; dropping fast, it goes over and whirls.
 * The faster the air goes over it, the more it bends and flutters.
 */
const studio = require('./studio');
const O = studio.O;
const { POOL, ROT } = studio.STUDIO;

const W3 = (p) => [p[0] + O[0], p[1] + O[1], p[2] + O[2]];
const mix = (a, b, t) => a + (b - a) * t;
const mix3 = (a, b, t) => [mix(a[0], b[0], t), mix(a[1], b[1], t), mix(a[2], b[2], t)];
const add3 = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sub3 = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const scale3 = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
const norm3 = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return scale3(a, 1 / l); };
const cross3 = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const clamp01 = (x) => Math.max(0, Math.min(1, x));
const smooth = (t) => t * t * (3 - 2 * t);
const sstep = (a, b, x) => smooth(clamp01((x - a) / (b - a)));
const easeIO = (t) => 0.5 - 0.5 * Math.cos(Math.PI * clamp01(t));

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

const AXIS = ROT.cx;
// where it comes down on the water, where the roof and the vine lie mirrored
const LAND = [AXIS + 0.3, 0.02, POOL.z0 + 5.4];
// where it hangs at each shot
const HOME = [5.0, 7.42, 11.25];                       // under the vine on the middle truss
const BYDOOR = [6.15, 2.65, 21.0];                     // drifting before the red door
const INROT = [AXIS, 2.35, ROT.cz - 0.9];              // inside the rotunda, framed by its front arch
const SUNLIT = [AXIS + 0.75, 1.85, 3.35];              // in the beam, beside the nymph
const CLOSE = [AXIS - 0.75, 1.6, 3.7];                 // on her other side
const OVERWATER = [AXIS + 0.15, 1.05, LAND[2] - 0.6];  // over the water, about to come down

const SHOTS = [
	// 0: under the old glass, the petal among the blossom
	{ petal: HOME, eye: [6.5, 6.0, 9.55], at: HOME, fov: 42, look: { aperture: 0.7 } },
	// 1: the tall red door, the rotunda's cloth to one side
	{ petal: BYDOOR, eye: [2.6, 2.2, 18.2], at: [7.8, 3.1, 22.0], fov: 50, look: { aperture: 0.35 } },
	// 2: the whole rotunda, its cloth stirring, the petal in its arch
	{ petal: INROT, eye: [AXIS, 1.05, 8.4], at: [AXIS, 3.05, ROT.cz], fov: 56, look: { aperture: 0.08 } },
	// 3: the nymph in the low sun, her reflection in the pool below
	{ petal: SUNLIT, eye: [10.55, 0.55, 4.9], at: [AXIS, 1.95, 1.0], fov: 50, look: { aperture: 0.3 } },
	// 4: from the water's edge before her, low, the sunlit nymph and her
	// reflection lying in the pool
	{ petal: CLOSE, eye: [7.15, 0.24, 5.4], at: [AXIS, 1.7, 1.0], fov: 56, look: { aperture: 0.35 } },
	// 5: low over the water, the nymph and her reflection beyond: it lands here
	{ petal: LAND, eye: [LAND[0] - 0.2, 0.38, LAND[2] + 1.5], at: [AXIS, 0.9, 1.0], fov: 44, look: { aperture: 0.45 } }
];
// the moves between them: how long each takes (film seconds), the petal's
// path, the camera's, how far the petal sways from side to side as it
// goes (a falling petal swings like a pendulum), and how strongly the
// camera watches the petal rather than the shots' own framing on the way
const MOVES = [
	{
		dur: 7,
		petal: [HOME, [4.6, 6.6, 12.4], [3.9, 5.3, 14.0], [3.6, 4.1, 16.2], [4.4, 3.2, 18.8], BYDOOR],
		eye: [SHOTS[0].eye, [6.0, 5.2, 10.8], [5.4, 3.9, 12.8], [3.6, 2.7, 15.6], SHOTS[1].eye],
		sway: 0.55, track: 1.0
	},
	{
		// round the rotunda's side to the wide front; the petal crosses before
		// the door and goes in by the arch on the line
		dur: 8,
		petal: [BYDOOR, [7.3, 2.5, 21.25], [AXIS, 2.45, 20.7], [AXIS, 2.4, ROT.cz + 1.2], INROT],
		eye: [SHOTS[1].eye, [1.8, 2.3, 15.6], [3.2, 1.9, 11.6], [6.2, 1.3, 9.2], SHOTS[2].eye],
		sway: 0.12, track: 0.35
	},
	{
		// out through the front arch, over the water, to the nymph
		dur: 7,
		petal: [INROT, [AXIS, 2.15, ROT.cz - ROT.ro - 0.8], [AXIS + 0.25, 1.7, 11.0], [AXIS - 0.3, 1.55, 7.2], [AXIS + 0.5, 1.75, 4.6], SUNLIT],
		eye: [SHOTS[2].eye, [AXIS + 0.7, 0.9, 9.0], [10.3, 0.95, 7.0], SHOTS[3].eye],
		sway: 0.25, track: 0.6
	},
	{
		// round her, through the sun
		dur: 6,
		petal: [SUNLIT, [AXIS + 0.85, 2.7, 2.3], [AXIS - 0.1, 3.1, 2.15], [AXIS - 0.95, 2.4, 2.9], CLOSE],
		eye: [SHOTS[3].eye, [9.6, 0.55, 5.6], [7.7, 0.45, 5.3], SHOTS[4].eye],
		sway: 0.1, track: 0.5
	},
	{
		// away over the water, falling, onto the mirrored skylight
		dur: 7,
		petal: [CLOSE, [AXIS - 0.4, 1.5, 4.8], [AXIS + 0.6, 1.25, 5.9], OVERWATER, [LAND[0] - 0.05, 0.4, LAND[2] - 0.15], [LAND[0], 0.07, LAND[2]], LAND],
		eye: [SHOTS[4].eye, [7.4, 0.55, 6.4], [7.9, 0.5, 8.0], SHOTS[5].eye],
		sway: 0.35, track: 0.7
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
	let eyeNow = SHOTS[0].eye;

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
	window.addEventListener('wheel', (e) => {
		if (e.target.closest && e.target.closest('.koi-feed, .st-ui')) return;
		e.preventDefault();
		const px = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * window.innerHeight : e.deltaY;
		wind(px / WHEEL_PX_PER_SEC);
	}, { passive: false });
	window.addEventListener('pointerdown', (e) => {
		if (e.target.closest && e.target.closest('button, a, .st-ui')) return;
		drag = { ly: e.clientY, lx: e.clientX, moved: 0, v: 0, lt: performance.now() };
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
		// a flick glides on a little
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
		const e = easeIO(u);
		const near = nearest(s);
		const rest = 1 - sstep(0, 0.9, Math.abs(s - AT[near]));
		// the petal: along its path, swinging from side to side as it goes
		let p = spline(M.petal, e);
		const ahead = sub3(spline(M.petal, Math.min(1, e + 0.02)), spline(M.petal, Math.max(0, e - 0.02)));
		const side = norm3(cross3([0, 1, 0], Math.hypot(ahead[0], ahead[2]) > 1e-4 ? ahead : [1, 0, 0]));
		const swing = Math.sin(e * Math.PI * (2.5 + M.dur * 0.25)) * Math.sin(e * Math.PI);
		p = add3(p, scale3(side, swing * M.sway));
		p[1] += -Math.abs(swing) * M.sway * 0.25;     // dipping at the bottom of each swing
		// at a shot: hanging on the air (on the vine at the first, still)
		const hov = near === 0 ? [Math.sin(time * 0.9) * 0.01, 0, Math.cos(time * 0.7) * 0.01]
			: [Math.sin(time * 0.53 + near) * 0.07, Math.sin(time * 0.71 + near * 2.0) * 0.05, Math.cos(time * 0.47 + near) * 0.07];
		const still = near === 5 ? 0 : rest;
		p = add3(p, scale3(hov, still));
		// the camera: along its path; it watches the petal on the way and
		// comes round to each shot's own framing at either end
		const eye = spline(M.eye, e);
		const A = SHOTS[idx].at, B = SHOTS[idx + 1].at;
		const w = M.track * sstep(0, 0.3, u) * (1 - sstep(0.65, 1, u));
		const at = mix3(mix3(A, B, sstep(0.25, 0.95, u)), p, w);
		const fov = mix(SHOTS[idx].fov, SHOTS[idx + 1].fov, smooth(u));
		const aperture = mix(SHOTS[idx].look.aperture, SHOTS[idx + 1].look.aperture, smooth(u));
		// a lean into the big swing round the rotunda, and the glide over the water
		const roll = idx === 1 ? Math.sin(u * Math.PI) * -0.08 : idx === 2 ? Math.sin(u * Math.PI) * 0.04 : idx === 3 ? Math.sin(u * Math.PI) * 0.05 : 0;
		return { p, eye, at, fov, aperture, roll, idx, u, near, hanging: near === 0 && rest > 0.98 };
	}

	// how the petal turns, from how it is moving (see the top)
	const fl = { prev: null, vel: [0, 0, 0], axis: [1, 0, 0], dir: null, bank: 0, rock: 0, spin: 0, fresh: true, go: 0, fall: 0 };
	function petalModel(p, dt, hanging, time) {
		let X, Y, Z;
		if (hanging) {
			// on the vine: hanging from where it is joined, turning a little in the air
			X = norm3([Math.sin(time * 0.8) * 0.25, -1, 0.35 + Math.sin(time * 1.1) * 0.15]);
			Y = norm3(cross3(cross3(X, [0.4, 0, -1]), X));
			Z = cross3(X, Y);
			fl.prev = null; fl.vel = [0, 0, 0]; fl.fresh = true; fl.spin = 0; fl.bank = 0; fl.dir = null; fl.go = 0; fl.fall = 0;
		} else {
			if (fl.prev && dt > 0) {
				const d = sub3(p, fl.prev);
				if (Math.hypot(d[0], d[1], d[2]) < 1.5) {
					const kk = Math.min(1, dt * 6);
					for (let i = 0; i < 3; i++) fl.vel[i] += (d[i] / dt - fl.vel[i]) * kk;
				} else fl.vel = [0, 0, 0];
			}
			fl.prev = p.slice();
			const v = fl.vel;
			const speed = Math.hypot(v[0], v[1], v[2]);
			const go = sstep(0.2, 1.2, speed), fall = sstep(0.35, 1.6, -v[1]);
			fl.go = go; fl.fall = fall;
			const yaw = time * 0.35 + 0.65;
			let ax = [Math.cos(yaw), 0, Math.sin(yaw)];
			if (speed > 1e-3) ax = mix3(ax, scale3(v, -1 / speed), go);
			fl.axis = mix3(fl.axis, ax, fl.fresh ? 1 : Math.min(1, dt * 4));
			X = norm3(fl.axis);
			// its face up, leaning towards the camera enough to be seen
			const c = norm3(sub3(eyeNow, p));
			const see = mix(0.6, 0.25, go);
			Y = [c[0] * see, 1 + c[1] * see, c[2] * see];
			Y = norm3(sub3(Y, scale3(X, X[0] * Y[0] + X[1] * Y[1] + X[2] * Y[2])));
			Z = cross3(X, Y);
			// banking into the bends of its path
			const hs = Math.hypot(v[0], v[2]);
			let turn = 0;
			if (hs > 0.15 && fl.dir && dt > 0) { const nd = [v[0] / hs, v[2] / hs]; turn = (fl.dir[0] * nd[1] - fl.dir[1] * nd[0]) / dt; fl.dir = nd; }
			else if (hs > 0.15) fl.dir = [v[0] / hs, v[2] / hs];
			fl.bank += (Math.max(-0.8, Math.min(0.8, turn * 0.3)) * go - fl.bank) * Math.min(1, dt * 3);
			// rocking (quicker in faster air), and the whirl when it drops
			fl.rock += dt * (1.7 + 2.6 * go);
			fl.spin += dt * fall * 6.0;
			const roll = Math.sin(fl.rock) * (0.42 + 0.2 * go) * (1 - 0.5 * fall) + fl.bank + fl.spin;
			const pitch = Math.sin(fl.rock * 0.63 + 1.0) * 0.32;
			let cs = Math.cos(roll), sn = Math.sin(roll);
			const Y1 = add3(scale3(Y, cs), scale3(Z, sn)), Z1 = add3(scale3(Z, cs), scale3(Y, -sn));
			cs = Math.cos(pitch); sn = Math.sin(pitch);
			X = add3(scale3(X, cs), scale3(Y1, sn));
			Y = add3(scale3(Y1, cs), scale3(X, -sn));
			Z = Z1;
			// slipping towards the edge that is down
			p = add3(p, scale3(Z, Math.sin(fl.rock + 1.5708) * 0.05 * (1 - 0.5 * go)));
			fl.fresh = false;
		}
		const q = W3(p);
		return [X[0], X[1], X[2], 0, Y[0], Y[1], Y[2], 0, Z[0], Z[1], Z[2], 0, q[0], q[1], q[2], 1];
	}

	function update(time) {
		const dt = last === null ? 0 : Math.min(0.1, Math.max(0, time - last));
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
		// the end on the water: a koi drifts over to wait as it comes down;
		// it lands; it is taken. Winding back takes it off the water.
		if (F.idx >= 3 && !lured) { studio.petalLure(LAND[0], LAND[2]); lured = true; }
		if (scroll >= END - 0.02 && !landed) { studio.petalLand(LAND[0], LAND[2]); landed = true; landedAt = time; }
		if (scroll < END - 0.3 && landed) { studio.petalReset(); landed = false; }
		if (F.idx < 3 && lured) lured = false;
		const ps = studio.petalState();
		// on the water: the camera comes down slowly towards it and holds
		// while the koi comes up for it
		if (landed) {
			const k = easeIO((time - landedAt) / 7);
			F.eye = mix3(F.eye, [LAND[0] + 0.35, 0.3, LAND[2] + 0.95], k);
			F.at = mix3(F.at, [LAND[0], 0.0, LAND[2] - 0.3], k);
			F.fov = mix(F.fov, 38, k);
		}
		eyeNow = F.eye;
		const model = petalModel(F.p, dt, F.hanging, time);
		// the air working it: bending and fluttering with its speed
		const flutter = F.hanging ? 0.12 : 0.2 + 0.55 * fl.go + 0.35 * fl.fall;
		const flex = F.hanging ? 0.05 : Math.sin(fl.rock * 1.3) * 0.18 + 0.12 * fl.go;
		studio.setGuide({ vis: true, model, ang: time * 0.08, size: 0.09, flex, flutter });
		const pw = model.slice(12, 15);
		const ew = W3(F.eye);
		return {
			eye: ew, target: W3(F.at), fov: F.fov, roll: F.roll, fade: 0,
			// at the end, after the koi has eaten, the visitor may feed them
			pond: landed && ps.eaten, shot: landed ? 5 : F.near,
			look: { letterbox: 0.55, focus: Math.max(0.3, Math.hypot(ew[0] - pw[0], ew[1] - pw[1], ew[2] - pw[2])), aperture: F.aperture, vignette: 0.28, exposure: 1.0, shafts: 1.0 },
			// whether anything is on the move (the frame rate can rest when not)
			moving: Math.abs(vel) > 0.02 || Math.abs(target - scroll) > 0.01 || landed
		};
	}

	return { update, tap, get scroll() { return scroll; }, END };
};

'use strict';

/*
 * THE STAIR HALL
 * --------------
 * In the right-hand wall of the hall (as you walk in, x = 0), beside the
 * masterpiece, a deep stone arch opens into a round, tall stair hall of
 * pale limestone. A stair winds up round its wall on a smooth stone
 * ribbon, behind a black iron railing of interlaced arcs, and climbs out
 * of sight through the ceiling into the dark.
 *
 * In the middle stands a black grand piano, its lid raised, in a sea of
 * candles that fills the floor round it and climbs the first steps. Their
 * light is the room's light: warm, low, flickering, with the cold of the
 * oculus high above.
 *
 * Across the room, in a shallow bay in the curved wall, is the
 * confessional (confessional.js, which is built where it always was and
 * moved here whole by OFF).
 *
 * Gallery metres: x across the main hall, z along it, y up. The room lies
 * beyond the hall's x = 0 wall (x < 0).
 */

const env = require('./env');

const PI = Math.PI;
const f = (x) => (+x).toFixed(4);
const v3 = (a) => `vec3(${f(a[0])}, ${f(a[1])}, ${f(a[2])})`;

// ------------------------------------------------------------------
// LAYOUT
// ------------------------------------------------------------------

const C = { x: -7.0, z: 44.5 };     // centre of the round room
const R = 5.2;                       // its radius (to the wall)
const TOP = 15.0;                    // the ceiling

// the passage through the hall wall: a deep round-headed arch
const PASS = { z0: 42.6, z1: 46.4, zc: 44.5, spring: 4.0, r: 1.9 };
// the stone surround on the hall side (map.js leaves this part of the
// wall to us)
const SURR = { z0: 42.2, z1: 46.8, top: 6.3, x: 0.35 };

// the confessional, moved whole from its old bay (its own coordinates)
// into a bay in the far side of the round wall
const OFF = [C.x - Math.sqrt(R * R - 3.05 * 3.05), 0, 0];
// the bay, in gallery metres
const BAY = { x0: -2.05 + OFF[0], x1: OFF[0], z0: 41.45, z1: 47.55, top: 4.3 };
// a candle on an iron bracket either side of the bay
const SCONCES = [[BAY.x1 + 0.05, 2.35, BAY.z0 - 0.45], [BAY.x1 + 0.05, 2.35, BAY.z1 + 0.45]].map(([x, y, z]) => {
	const a = Math.atan2(z - C.z, x - C.x);
	return [C.x + Math.cos(a) * (R - 0.16), y, C.z + Math.sin(a) * (R - 0.16)];
});

// the stair: it starts at the floor just right of the arch (as you come
// in) and winds round the wall, rising as it goes, over the confessional
// and on up through the ceiling
const ST = {
	ri: 3.4,                 // inner edge (the railing)
	ro: R,                   // outer edge (the wall)
	a0: -35 * PI / 180,      // where it starts (angle round the room)
	rise: 0.1836,            // each step's rise
	step: 3.6 * PI / 180,    // each step's turn
	n: 88,                   // steps
	thick: 0.36              // stone under the nosing line
};
ST.k = ST.rise / ST.step;    // rise per radian
// the angle of the room at stair "travel" t (radians from the start)
const stAngle = (t) => ST.a0 - t;
const stLine = (t) => t * ST.k;

// the piano: centre, turn (radians) and size
const PIANO = { x: C.x + 0.1, z: C.z - 0.15, yaw: -PI / 2, scale: 1.1 };

// the way the camera goes in to the confessional (and out again): through
// the arch, round the piano on its far side, to the booth's open curtain
const PATH = [
	[3.6, 44.5], [0.6, 44.5], [-2.2, 44.7], [-4.5, 46.5], [-7.0, 47.2],
	[-9.4, 46.6], [-10.5, 44.9], [-10.9, 43.2]
];

// ------------------------------------------------------------------
// small helpers
// ------------------------------------------------------------------

function rng(seed) {
	let s = seed >>> 0;
	return () => {
		s = (s + 0x6D2B79F5) >>> 0;
		let t = s;
		t = Math.imul(t ^ (t >>> 15), t | 1);
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

function distToPath(x, z) {
	let best = 1e9;
	for (let i = 0; i < PATH.length - 1; i++) {
		const [ax, az] = PATH[i], [bx, bz] = PATH[i + 1];
		const dx = bx - ax, dz = bz - az;
		const t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / (dx * dx + dz * dz)));
		best = Math.min(best, Math.hypot(x - ax - dx * t, z - az - dz * t));
	}
	return best;
}

const archTop = (z) => PASS.spring + Math.sqrt(Math.max(0, PASS.r * PASS.r - (z - PASS.zc) * (z - PASS.zc)));
const wallX = (z) => C.x + Math.sqrt(Math.max(0, R * R - (z - C.z) * (z - C.z)));   // near side of the circle

// is the floor here inside the room, the passage or the bay?
function onFloor(x, z) {
	if (Math.hypot(x - C.x, z - C.z) < R) return true;
	if (x <= 0.0 && x > C.x && z > PASS.z0 && z < PASS.z1) return true;
	if (x > BAY.x0 && x < BAY.x1 && z > BAY.z0 && z < BAY.z1) return true;
	return false;
}

// where the stair is overhead, how high its underside is (or 99)
function stairCeilingAt(x, z) {
	const r = Math.hypot(x - C.x, z - C.z);
	if (r < ST.ri - 0.05) return 99;
	let a = Math.atan2(z - C.z, x - C.x);
	// travel: how far round from the start, first time round
	let t = ST.a0 - a;
	while (t < 0) t += 2 * PI;
	while (t >= 2 * PI) t -= 2 * PI;
	if (t > ST.n * ST.step) return 99;
	return stLine(t) - ST.thick;
}

// ------------------------------------------------------------------
// CANDLES: where they stand
// ------------------------------------------------------------------

function placeCandles() {
	const out = [];              // [x, y (base), z, radius, height, phase]
	const rnd = rng(1729);
	const tooClose = (x, z, r) => {
		for (let i = Math.max(0, out.length - 400); i < out.length; i++) {
			const c = out[i];
			if (c[1] > 0.01) continue;
			if (Math.hypot(c[0] - x, c[2] - z) < r + c[3] + 0.012) return true;
		}
		return false;
	};
	const pianoFoot = (x, z) => {
		// the piano's footprint (with a little room round it), in its own frame
		const dx = x - PIANO.x, dz = z - PIANO.z;
		const c = Math.cos(PIANO.yaw), s = Math.sin(PIANO.yaw);
		const lx = (c * dx - s * dz) / PIANO.scale, lz = (s * dx + c * dz) / PIANO.scale;
		return lx > -1.05 && lx < 1.30 && lz > -0.70 && lz < 0.72;
	};
	let tries = 0;
	while (out.length < 980 && tries < 60000) {
		tries++;
		// more of them near the piano and along the wall
		const u = rnd();
		const r = u < 0.55 ? 1.25 + rnd() * 2.1 : 1.25 + Math.sqrt(rnd()) * (R - 1.45);
		const a = rnd() * 2 * PI;
		const x = C.x + Math.cos(a) * r, z = C.z + Math.sin(a) * r;
		if (!onFloor(x, z) || r > R - 0.18) continue;
		if (pianoFoot(x, z)) continue;
		if (distToPath(x, z) < 0.62) continue;
		if (stairCeilingAt(x, z) < 2.3) continue;
		if (x < BAY.x1 + 0.9) continue;   // keep clear of the confessional
		// in clusters: a candle wants a neighbour
		const rad = 0.022 + rnd() * 0.02;
		if (tooClose(x, z, rad)) continue;
		const h = rnd() < 0.15 ? 0.22 + rnd() * 0.14 : 0.05 + rnd() * 0.15;
		out.push([x, 0, z, rad, h, rnd() * 100]);
	}
	// on the first steps, against the wall side
	for (let i = 1; i < 26; i++) {
		const n = i < 12 ? 3 : 2;
		for (let k = 0; k < n; k++) {
			const t = (i + 0.25 + rnd() * 0.5) * ST.step;
			const a = stAngle(t);
			const r = ST.ri + 0.55 + rnd() * (ST.ro - ST.ri - 0.75);
			const rad = 0.022 + rnd() * 0.016;
			out.push([C.x + Math.cos(a) * r, (i + 1) * ST.rise, C.z + Math.sin(a) * r, rad, 0.05 + rnd() * 0.14, rnd() * 100]);
		}
	}
	// the candles on the brackets by the bay
	for (const sc of SCONCES) {
		for (const [dx, dz, h] of [[0, 0, 0.26], [0.06, 0.05, 0.18], [-0.05, -0.04, 0.14]]) out.push([sc[0] + dx, sc[1], sc[2] + dz, 0.024, h, rnd() * 100]);
	}
	// two tall groups either side of the confessional
	for (const zc of [BAY.z0 - 0.35, BAY.z1 + 0.35]) {
		for (let k = 0; k < 9; k++) {
			const x = BAY.x1 + 0.35 + rnd() * 0.5, z = zc + (rnd() - 0.5) * 0.5;
			if (Math.hypot(x - C.x, z - C.z) > R - 0.15) continue;
			out.push([x, 0, z, 0.026 + rnd() * 0.014, 0.18 + rnd() * 0.3, rnd() * 100]);
		}
	}
	return out;
}

// gather the candles into a few lights for the shaders: [x, y, z, weight]
function candleLights(cs) {
	const K = 14;
	const rnd = rng(77);
	let cen = [];
	for (let i = 0; i < K; i++) {
		const c = cs[Math.floor(rnd() * cs.length)];
		cen.push([c[0], c[1] + c[4], c[2]]);
	}
	for (let it = 0; it < 12; it++) {
		const sum = cen.map(() => [0, 0, 0, 0]);
		for (const c of cs) {
			const p = [c[0], c[1] + c[4], c[2]];
			let bi = 0, bd = 1e9;
			cen.forEach((q, i) => { const d = (p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2 * 4 + (p[2] - q[2]) ** 2; if (d < bd) { bd = d; bi = i; } });
			sum[bi][0] += p[0]; sum[bi][1] += p[1]; sum[bi][2] += p[2]; sum[bi][3]++;
		}
		cen = sum.map((s, i) => (s[3] ? [s[0] / s[3], s[1] / s[3], s[2] / s[3], s[3]] : cen[i]));
	}
	// the light sits a little above the flames
	return cen.filter((c) => c[3] > 0).map((c) => [c[0], c[1] + 0.12, c[2], c[3] / cs.length]);
}

const CANDLES = placeCandles();
const LIGHTS = candleLights(CANDLES.filter((c) => c[1] < 2.0 || c[1] > 2.5)).concat(SCONCES.map((s) => [s[0], s[1] + 0.35, s[2], 0.035]));

// ------------------------------------------------------------------
// SHARED LIGHT (needs uniforms night, time)
// ------------------------------------------------------------------
//   vec3 roomLight(p, N, V, gloss, out spec)   light reaching p (diffuse)
//   vec3 roomHaze(p, eye)                       the warm air between

function roomGLSL() {
	const lights = LIGHTS.map((l, i) => `
		{
			vec3 d = ${v3(l)} - p;
			float dd = dot(d, d);
			vec3 L = d * inversesqrt(dd);
			float fl = 0.86 + 0.08 * sin(time * ${f(5.3 + i * 0.71)} + ${f(i * 1.9)}) + 0.06 * sin(time * ${f(11.7 + i * 1.3)} + ${f(i * 0.7)});
			float w = ${f(l[3] * LIGHTS.length)} * fl;
			float lam = max(dot(N, L), 0.0) * 0.82 + 0.18;
			col += w * lam / (0.7 + dd * 0.42);
			// the floor glows in pools round the candles
			col += w * floorK * 0.9 / (0.02 + dd * 7.0);
			spec += w * pow(max(dot(N, normalize(L + V)), 0.0), mix(10.0, 180.0, gloss)) * gloss * 1.6 / (0.25 + dd * 0.9);
		}`).join('');
	return `
	vec3 roomLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		vec3 col = vec3(0.0);
		float floorK = (p.y < 0.02 && N.y > 0.9) ? 1.0 : 0.0;
		${lights}
		col *= vec3(1.0, 0.56, 0.24) * 0.62;
		spec *= vec3(1.0, 0.62, 0.30) * 0.62;
		// light from the oculus, high above: pale by day, moonlight at night
		float up = smoothstep(0.0, ${f(TOP)}, p.y);
		vec3 sky = mix(vec3(0.10, 0.095, 0.085), vec3(0.030, 0.045, 0.085), night);
		col += sky * (0.35 + 0.65 * up) * (0.55 + 0.45 * max(N.y, 0.0)) * (0.6 + 0.4 * max(-dot(N, normalize(p - vec3(${f(C.x)}, ${f(TOP)}, ${f(C.z)}))), 0.0));
		// a little of the hall's light comes in through the arch
		float near = smoothstep(-4.5, 0.4, p.x) * (1.0 - smoothstep(4.4, 6.5, p.y));
		vec3 hall = mix(vec3(0.55, 0.50, 0.42), vec3(0.16, 0.15, 0.17), night);
		col += hall * near * near * (0.35 + 0.65 * max(N.x, 0.0));
		return col;
	}
	vec3 roomHaze(vec3 p, vec3 eye, vec3 col) {
		float d = length(p - eye);
		float h = 1.0 - exp(-d * 0.045);
		float low = 1.0 - smoothstep(0.0, 6.0, p.y);
		return mix(col, vec3(0.16, 0.085, 0.035) * (0.45 + 0.55 * low), h * 0.55);
	}`;
}

// ------------------------------------------------------------------
// GEOMETRY
// ------------------------------------------------------------------

// material ids (kind)
const K = {
	FLOOR: 0, WALL: 1, STEP: 2, SOFFIT: 3, STRING: 4, CEIL: 5, OCULUS: 6,
	HALLSTONE: 7,      // the surround, seen from the hall
	IRON: 8, RAILING: 9, CANDLE: 10
};

function Geo() {
	const g = { pos: [], nrm: [], kind: [], uv: [], idx: [] };
	g.v = (p, n, k, uv) => {
		g.pos.push(p[0], p[1], p[2]); g.nrm.push(n[0], n[1], n[2]); g.kind.push(k); g.uv.push(uv ? uv[0] : 0, uv ? uv[1] : 0);
		return g.pos.length / 3 - 1;
	};
	// a quad a-b-c-d (in order round it), one normal
	g.quad = (a, b, c, d, n, k, uvs) => {
		const i = g.v(a, n, k, uvs && uvs[0]), j = g.v(b, n, k, uvs && uvs[1]), l = g.v(c, n, k, uvs && uvs[2]), m = g.v(d, n, k, uvs && uvs[3]);
		g.idx.push(i, j, l, i, l, m);
	};
	g.tri = (a, b, c, n, k) => {
		const i = g.v(a, n, k), j = g.v(b, n, k), l = g.v(c, n, k);
		g.idx.push(i, j, l);
	};
	return g;
}

function build() {
	const g = Geo();
	const P = (a, r, y) => [C.x + Math.cos(a) * r, y, C.z + Math.sin(a) * r];
	const radial = (a) => [Math.cos(a), 0, Math.sin(a)];

	// --- the floor: room, passage and bay, in small squares
	{
		const S = 0.25;
		for (let x = 0.0; x > BAY.x0 - 0.01; x -= S) {
			for (let z = 41.2; z < 47.8; z += 0.2) {
				const x0 = x - S, x1 = x, z0 = z, z1 = z + 0.2;
				if (!(onFloor(x0, z0) || onFloor(x1, z0) || onFloor(x0, z1) || onFloor(x1, z1) || onFloor((x0 + x1) / 2, (z0 + z1) / 2))) continue;
				// keep the passage's floor between its walls
				let zz0 = z0, zz1 = z1;
				if (x0 > wallX(PASS.z0) - 0.3) { zz0 = Math.max(zz0, PASS.z0); zz1 = Math.min(zz1, PASS.z1); if (zz1 <= zz0) continue; }
				g.quad([x0, 0, zz0], [x0, 0, zz1], [x1, 0, zz1], [x1, 0, zz0], [0, 1, 0], K.FLOOR);
			}
		}
		// beyond the grid's reach on the far side (the circle and bay are covered above)
	}

	// --- the round wall, in narrow upright strips; the arch and the bay
	// are left open
	{
		const N = 360;
		for (let i = 0; i < N; i++) {
			const a0 = (i / N) * 2 * PI, a1 = ((i + 1) / N) * 2 * PI;
			const am = (a0 + a1) / 2;
			const pm = P(am, R, 0);
			let y0 = 0;
			if (pm[0] > C.x && pm[2] > PASS.z0 - 0.02 && pm[2] < PASS.z1 + 0.02) y0 = Math.max(archTop(Math.min(Math.max(P(a0, R, 0)[2], PASS.z0), PASS.z1)), archTop(Math.min(Math.max(P(a1, R, 0)[2], PASS.z0), PASS.z1)));
			if (pm[0] < C.x && pm[2] > BAY.z0 - 0.02 && pm[2] < BAY.z1 + 0.02) y0 = BAY.top;
			// in bands, so the stone's joints line up (uv: metres round, metres up)
			const u0 = a0 * R, u1 = a1 * R;
			const n0 = radial(a0).map((c) => -c), n1 = radial(a1).map((c) => -c);
			const ys = [y0];
			for (let y = Math.ceil(y0 / 2.5) * 2.5; y < TOP; y += 2.5) if (y > y0 + 0.01) ys.push(y);
			ys.push(TOP);
			for (let j = 0; j < ys.length - 1; j++) {
				const ya = ys[j], yb = ys[j + 1];
				const a = g.v(P(a0, R, ya), n0, K.WALL, [u0, ya]), b = g.v(P(a1, R, ya), n1, K.WALL, [u1, ya]);
				const c = g.v(P(a1, R, yb), n1, K.WALL, [u1, yb]), d = g.v(P(a0, R, yb), n0, K.WALL, [u0, yb]);
				g.idx.push(a, b, c, a, c, d);
			}
		}
		// a moulded string course round the room at the arch's top, and a
		// plinth at the floor
		for (const [y, h, out] of [[6.55, 0.22, 0.07], [0.0, 0.32, 0.05]]) {
			for (let i = 0; i < N; i++) {
				const a0 = (i / N) * 2 * PI, a1 = ((i + 1) / N) * 2 * PI, am = (a0 + a1) / 2;
				const pm = P(am, R, 0);
				if (y < 1 && ((pm[0] > C.x && pm[2] > PASS.z0 && pm[2] < PASS.z1) || (pm[0] < C.x && pm[2] > BAY.z0 && pm[2] < BAY.z1))) continue;
				const r = R - out;
				g.quad(P(a0, r, y), P(a1, r, y), P(a1, r, y + h), P(a0, r, y + h), radial(am).map((c) => -c), K.WALL, [[a0 * R, y + 100], [a1 * R, y + 100], [a1 * R, y + h + 100], [a0 * R, y + h + 100]]);
				g.quad(P(a0, r, y + h), P(a1, r, y + h), P(a1, R, y + h), P(a0, R, y + h), [0, 1, 0], K.WALL, [[0, 200], [0, 200], [0, 200], [0, 200]]);
				if (y > 1) g.quad(P(a0, R, y), P(a1, R, y), P(a1, r, y), P(a0, r, y), [0, -1, 0], K.WALL, [[0, 200], [0, 200], [0, 200], [0, 200]]);
			}
		}
	}

	// --- the passage: two walls and a barrel vault, from the hall's face
	// to the round wall
	{
		const xh = SURR.x;
		for (const [z, nz] of [[PASS.z0, 1], [PASS.z1, -1]]) {
			const xr = wallX(z);
			g.quad([xh, 0, z], [xr, 0, z], [xr, PASS.spring, z], [xh, PASS.spring, z], [0, 0, nz], K.WALL, [[xh, 0], [xr, 0], [xr, PASS.spring], [xh, PASS.spring]]);
		}
		const M = 40;
		for (let i = 0; i < M; i++) {
			const p0 = (i / M) * PI, p1 = ((i + 1) / M) * PI;
			const z0 = PASS.zc - Math.cos(p0) * PASS.r, z1 = PASS.zc - Math.cos(p1) * PASS.r;
			const y0 = PASS.spring + Math.sin(p0) * PASS.r, y1 = PASS.spring + Math.sin(p1) * PASS.r;
			const n0 = [0, -Math.sin(p0), Math.cos(p0)], n1 = [0, -Math.sin(p1), Math.cos(p1)];
			const a = g.v([xh, y0, z0], n0, K.WALL, [xh, p0 * PASS.r]), b = g.v([wallX(z0), y0, z0], n0, K.WALL, [wallX(z0), p0 * PASS.r]);
			const c = g.v([wallX(z1), y1, z1], n1, K.WALL, [wallX(z1), p1 * PASS.r]), d = g.v([xh, y1, z1], n1, K.WALL, [xh, p1 * PASS.r]);
			g.idx.push(a, b, c, a, c, d);
		}
	}

	// --- the surround on the hall side: the wall's face round the arch,
	// an architrave and a keystone
	{
		const x = SURR.x, dz = 0.05;
		for (let z = SURR.z0; z < SURR.z1 - 1e-6; z += dz) {
			const za = z, zb = Math.min(SURR.z1, z + dz);
			const inside = (q) => q > PASS.z0 && q < PASS.z1;
			const ya = inside((za + zb) / 2) ? Math.max(archTop(za), archTop(zb)) : 0;
			g.quad([x, ya, za], [x, ya, zb], [x, SURR.top, zb], [x, SURR.top, za], [1, 0, 0], K.HALLSTONE, [[za, ya], [zb, ya], [zb, SURR.top], [za, SURR.top]]);
		}
		// the architrave: a flat band round the arch and down the jambs,
		// standing a little proud of the wall
		const W = 0.32, out = 0.06, xo = x + out;
		const M = 36;
		for (let i = 0; i < M; i++) {
			const p0 = (i / M) * PI, p1 = ((i + 1) / M) * PI;
			const ring = (p, r) => [xo, PASS.spring + Math.sin(p) * r, PASS.zc - Math.cos(p) * r];
			const ri = PASS.r, ro = PASS.r + W;
			g.quad(ring(p0, ri), ring(p1, ri), ring(p1, ro), ring(p0, ro), [1, 0, 0], K.HALLSTONE, [[0, 300], [0, 300], [1, 300], [1, 300]]);
			// its outer edge
			const e = (p, r, xx) => [xx, PASS.spring + Math.sin(p) * r, PASS.zc - Math.cos(p) * r];
			const nm = [0, Math.sin((p0 + p1) / 2), -Math.cos((p0 + p1) / 2)];
			g.quad(e(p0, ro, x), e(p1, ro, x), e(p1, ro, xo), e(p0, ro, xo), nm, K.HALLSTONE, [[0, 300], [0, 300], [0, 300], [0, 300]]);
			// and its soffit edge, into the passage
			g.quad(e(p0, ri, x), e(p1, ri, x), e(p1, ri, xo), e(p0, ri, xo), nm.map((c) => -c), K.HALLSTONE, [[0, 300], [0, 300], [0, 300], [0, 300]]);
		}
		for (const [za, zb, side] of [[PASS.z0 - W, PASS.z0, -1], [PASS.z1, PASS.z1 + W, 1]]) {
			g.quad([xo, 0, za], [xo, 0, zb], [xo, PASS.spring, zb], [xo, PASS.spring, za], [1, 0, 0], K.HALLSTONE, [[0, 300], [1, 300], [1, 300], [0, 300]]);
			const zo = side < 0 ? za : zb, zi = side < 0 ? zb : za;
			g.quad([x, 0, zo], [xo, 0, zo], [xo, PASS.spring, zo], [x, PASS.spring, zo], [0, 0, side], K.HALLSTONE, [[0, 300], [0, 300], [0, 300], [0, 300]]);
			g.quad([x, 0, zi], [xo, 0, zi], [xo, PASS.spring, zi], [x, PASS.spring, zi], [0, 0, -side], K.HALLSTONE, [[0, 300], [0, 300], [0, 300], [0, 300]]);
			// a little impost at the springing
			const y = PASS.spring - 0.16, h = 0.16, o2 = 0.11;
			const z0 = Math.min(za, zb) - 0.05, z1 = Math.max(za, zb) + 0.05;
			g.quad([x + o2, y, z0], [x + o2, y, z1], [x + o2, y + h, z1], [x + o2, y + h, z0], [1, 0, 0], K.HALLSTONE, [[0, 300], [0, 300], [0, 300], [0, 300]]);
			g.quad([x, y + h, z0], [x + o2, y + h, z0], [x + o2, y + h, z1], [x, y + h, z1], [0, 1, 0], K.HALLSTONE, [[0, 300], [0, 300], [0, 300], [0, 300]]);
			g.quad([x, y, z0], [x, y, z1], [x + o2, y, z1], [x + o2, y, z0], [0, -1, 0], K.HALLSTONE, [[0, 300], [0, 300], [0, 300], [0, 300]]);
			for (const zz of [z0, z1]) g.quad([x, y, zz], [x + o2, y, zz], [x + o2, y + h, zz], [x, y + h, zz], [0, 0, zz === z0 ? -1 : 1], K.HALLSTONE, [[0, 300], [0, 300], [0, 300], [0, 300]]);
		}
		// the keystone
		{
			const yb = PASS.spring + PASS.r - 0.05, yt = PASS.spring + PASS.r + W + 0.12, hw0 = 0.16, hw1 = 0.22, x2 = xo + 0.04;
			g.quad([x2, yb, PASS.zc - hw0], [x2, yb, PASS.zc + hw0], [x2, yt, PASS.zc + hw1], [x2, yt, PASS.zc - hw1], [1, 0, 0], K.HALLSTONE, [[0, 300], [0, 300], [0, 300], [0, 300]]);
			for (const s of [-1, 1]) {
				g.quad([x, yb, PASS.zc + s * hw0], [x2, yb, PASS.zc + s * hw0], [x2, yt, PASS.zc + s * hw1], [x, yt, PASS.zc + s * hw1], [0, 0, s], K.HALLSTONE, [[0, 300], [0, 300], [0, 300], [0, 300]]);
			}
			g.quad([x, yt, PASS.zc - hw1], [x2, yt, PASS.zc - hw1], [x2, yt, PASS.zc + hw1], [x, yt, PASS.zc + hw1], [0, 1, 0], K.HALLSTONE, [[0, 300], [0, 300], [0, 300], [0, 300]]);
		}
	}

	// --- the bay for the confessional
	{
		const { x0, x1, z0, z1, top } = BAY;
		g.quad([x0, 0, z0], [x0, 0, z1], [x0, top, z1], [x0, top, z0], [1, 0, 0], K.WALL, [[z0, 0], [z1, 0], [z1, top], [z0, top]]);
		for (const [z, nz] of [[z0, 1], [z1, -1]]) {
			const xr = C.x - Math.sqrt(R * R - (z - C.z) * (z - C.z));
			g.quad([x0, 0, z], [xr, 0, z], [xr, top, z], [x0, top, z], [0, 0, nz], K.WALL, [[x0, 0], [xr, 0], [xr, top], [x0, top]]);
		}
		// its ceiling, out to the curve of the wall
		const M = 24;
		for (let i = 0; i < M; i++) {
			const za = z0 + (z1 - z0) * i / M, zb = z0 + (z1 - z0) * (i + 1) / M;
			const xa = C.x - Math.sqrt(R * R - (za - C.z) ** 2), xb = C.x - Math.sqrt(R * R - (zb - C.z) ** 2);
			g.quad([x0, top, za], [xa, top, za], [xb, top, zb], [x0, top, zb], [0, -1, 0], K.WALL, [[0, 200], [0, 200], [0, 200], [0, 200]]);
		}
		// a plain stone frame round the bay's mouth
		for (let i = 0; i < M; i++) {
			const za = z0 + (z1 - z0) * i / M, zb = z0 + (z1 - z0) * (i + 1) / M;
			const xa = C.x - Math.sqrt(R * R - (za - C.z) ** 2) + 0.05, xb = C.x - Math.sqrt(R * R - (zb - C.z) ** 2) + 0.05;
			g.quad([xa, top - 0.3, za], [xb, top - 0.3, zb], [xb, top, zb], [xa, top, za], [1, 0, 0], K.WALL, [[0, 200], [0, 200], [0, 200], [0, 200]]);
		}
	}

	// --- the ceiling, with the oculus and the opening the stair goes up through
	{
		const NA = 120, rr = [1.15, 1.6, 2.3, 3.0, 3.35, 4.2, R];
		for (let i = 0; i < NA; i++) {
			const a0 = (i / NA) * 2 * PI, a1 = ((i + 1) / NA) * 2 * PI;
			let am = (a0 + a1) / 2; if (am > PI) am -= 2 * PI;
			for (let j = 0; j < rr.length - 1; j++) {
				const r0 = rr[j], r1 = rr[j + 1];
				// the opening: where the stair passes through
				const deg = am * 180 / PI;
				if (r0 >= 3.3 && deg > 8 && deg < 85) continue;
				g.quad(P(a0, r0, TOP), P(a0, r1, TOP), P(a1, r1, TOP), P(a1, r0, TOP), [0, -1, 0], K.CEIL, [[a0 * r0, r0], [a0 * r1, r1], [a1 * r1, r1], [a1 * r0, r0]]);
			}
			// the oculus: a short collar, and the sky at its top
			g.quad(P(a0, 1.15, TOP), P(a1, 1.15, TOP), P(a1, 1.15, TOP + 0.7), P(a0, 1.15, TOP + 0.7), radial(am).map((c) => -c), K.CEIL, [[0, 400], [0, 400], [0, 400], [0, 400]]);
			g.tri([C.x, TOP + 0.7, C.z], P(a1, 1.15, TOP + 0.7), P(a0, 1.15, TOP + 0.7), [0, -1, 0], K.OCULUS);
		}
	}

	// --- the stair
	{
		const ri = ST.ri, ro = ST.ro;
		const tEnd = ST.n * ST.step;
		for (let i = 0; i < ST.n; i++) {
			const t0 = i * ST.step, t1 = (i + 1) * ST.step;
			const a0 = stAngle(t0), a1 = stAngle(t1);
			const yt = (i + 1) * ST.rise, yb = i * ST.rise;
			// tread (a little overhanging nosing at the front)
			const SUB = 2;
			for (let s = 0; s < SUB; s++) {
				const aa = a0 + (a1 - a0) * s / SUB - (s === 0 ? 0.004 : 0), ab = a0 + (a1 - a0) * (s + 1) / SUB;
				g.quad(P(aa, ri, yt), P(aa, ro, yt), P(ab, ro, yt), P(ab, ri, yt), [0, 1, 0], K.STEP, [[ri * aa, i], [ro * aa, i], [ro * ab, i], [ri * ab, i]]);
			}
			// riser, facing down the stair
			const tng = [-Math.sin(a0), 0, Math.cos(a0)];       // direction of decreasing travel
			const ra = a0 - 0.004;
			g.quad(P(ra, ri, yb), P(ra, ro, yb), P(ra, ro, yt), P(ra, ri, yt), tng, K.STEP, [[ri * a0, i + 0.5], [ro * a0, i + 0.5], [ro * a0, i + 0.5], [ri * a0, i + 0.5]]);
			// the step's own end on the inside, down to the string
			g.quad(P(a0, ri, stLine(t0) + 0.06), P(a1, ri, stLine(t1) + 0.06), P(a1, ri, yt), P(ra, ri, yt), radial((a0 + a1) / 2).map((c) => -c), K.STEP, [[0, 500], [0, 500], [0, 500], [0, 500]]);
		}
		// the ribbon: the string on the inside and the smooth underside
		const M = Math.ceil(tEnd / (1.2 * PI / 180));
		const rings = [ri, ri + 0.6, ri + 1.2, ro];
		for (let i = 0; i < M; i++) {
			const t0 = (i / M) * tEnd, t1 = ((i + 1) / M) * tEnd;
			const a0 = stAngle(t0), a1 = stAngle(t1);
			const l0 = stLine(t0), l1 = stLine(t1);
			const s0 = l0 - ST.thick, s1 = l1 - ST.thick;
			const n0 = radial(a0).map((c) => -c), n1 = radial(a1).map((c) => -c);
			const a = g.v(P(a0, ri, s0), n0, K.STRING, [t0 * ri, 0]), b = g.v(P(a1, ri, s1), n1, K.STRING, [t1 * ri, 0]);
			const c = g.v(P(a1, ri, l1 + 0.06), n1, K.STRING, [t1 * ri, 1]), d = g.v(P(a0, ri, l0 + 0.06), n0, K.STRING, [t0 * ri, 1]);
			g.idx.push(a, b, c, a, c, d);
			for (let j = 0; j < rings.length - 1; j++) {
				const r0 = rings[j], r1 = rings[j + 1];
				// the underside leans a little: its normal points down and in
				const nn = (aa) => { const rd = radial(aa); return [-rd[0] * 0.12, -0.99, -rd[2] * 0.12]; };
				g.quad(P(a0, r0, s0), P(a0, r1, s0), P(a1, r1, s1), P(a1, r0, s1), nn((a0 + a1) / 2), K.SOFFIT, [[t0 * r0, r0], [t0 * r1, r1], [t1 * r1, r1], [t1 * r0, r0]]);
			}
		}
	}

	return g;
}

// the railing: a ribbon along the inner edge of the stair, cut into
// interlaced iron arcs in the shader, and a round handrail on top
function buildRailing() {
	const g = Geo();
	const ri = ST.ri + 0.045;
	const tEnd = ST.n * ST.step;
	const M = Math.ceil(tEnd / (0.8 * PI / 180));
	const H = 0.92;
	const P = (a, r, y) => [C.x + Math.cos(a) * r, y, C.z + Math.sin(a) * r];
	const radial = (a) => [Math.cos(a), 0, Math.sin(a)];
	for (let i = 0; i < M; i++) {
		const t0 = (i / M) * tEnd, t1 = ((i + 1) / M) * tEnd;
		const a0 = stAngle(t0), a1 = stAngle(t1);
		const y0 = stLine(t0) + 0.06, y1 = stLine(t1) + 0.06;
		const n0 = radial(a0).map((c) => -c), n1 = radial(a1).map((c) => -c);
		// uv: metres along (level), height above the string
		const u0 = t0 * ri, u1 = t1 * ri;
		const a = g.v(P(a0, ri, y0), n0, K.RAILING, [u0, 0]), b = g.v(P(a1, ri, y1), n1, K.RAILING, [u1, 0]);
		const c = g.v(P(a1, ri, y1 + H), n1, K.RAILING, [u1, H]), d = g.v(P(a0, ri, y0 + H), n0, K.RAILING, [u0, H]);
		g.idx.push(a, b, c, a, c, d);
	}
	// handrail: a tube
	const tube = (rOff, yOff, rad, kind) => {
		const S = 8;
		const ring = (t) => {
			const a = stAngle(t), y = stLine(t) + 0.06 + yOff;
			const c = P(a, ri + rOff, y);
			const rd = radial(a);
			const out = [];
			for (let s = 0; s < S; s++) {
				const q = (s / S) * 2 * PI;
				const n = [rd[0] * Math.cos(q), Math.sin(q), rd[2] * Math.cos(q)];
				out.push([[c[0] + n[0] * rad, c[1] + n[1] * rad, c[2] + n[2] * rad], n]);
			}
			return out;
		};
		let prev = ring(0);
		for (let i = 1; i <= M; i++) {
			const cur = ring((i / M) * tEnd);
			for (let s = 0; s < S; s++) {
				const s1 = (s + 1) % S;
				const A = g.v(prev[s][0], prev[s][1], kind), B = g.v(cur[s][0], cur[s][1], kind);
				const Cc = g.v(cur[s1][0], cur[s1][1], kind), D = g.v(prev[s1][0], prev[s1][1], kind);
				g.idx.push(A, B, Cc, A, Cc, D);
			}
			prev = cur;
		}
	};
	tube(0, H + 0.02, 0.028, K.IRON);
	// the sconces: a round iron dish on an arm from the wall
	for (const sc of SCONCES) {
		const a = Math.atan2(sc[2] - C.z, sc[0] - C.x);
		const out = [Math.cos(a), 0, Math.sin(a)];
		const S = 12;
		for (let s = 0; s < S; s++) {
			const q0 = (s / S) * 2 * PI, q1 = ((s + 1) / S) * 2 * PI;
			const pr = (q, r, y) => [sc[0] + Math.cos(q) * r, y, sc[2] + Math.sin(q) * r];
			g.quad(pr(q0, 0.16, sc[1]), pr(q1, 0.16, sc[1]), pr(q1, 0.13, sc[1] - 0.05), pr(q0, 0.13, sc[1] - 0.05), [Math.cos(q0) * 0.6, 0.8, Math.sin(q0) * 0.6], K.IRON);
			g.quad(pr(q0, 0.16, sc[1]), pr(q1, 0.16, sc[1]), pr(q1, 0.0, sc[1] + 0.002), pr(q0, 0.0, sc[1] + 0.002), [0, 1, 0], K.IRON);
		}
		// the arm, from the wall to under the dish
		const w = [sc[0] + out[0] * 0.16, sc[1] - 0.35, sc[2] + out[2] * 0.16];
		const side = [-out[2], 0, out[0]];
		const e = 0.018;
		g.quad([w[0] - side[0] * e, w[1], w[2] - side[2] * e], [w[0] + side[0] * e, w[1], w[2] + side[2] * e], [sc[0] + side[0] * e, sc[1] - 0.05, sc[2] + side[2] * e], [sc[0] - side[0] * e, sc[1] - 0.05, sc[2] - side[2] * e], [-out[0], 0.5, -out[2]], K.IRON);
	}
	// the newel at the foot: a short iron post with a knob
	{
		const a = stAngle(0), c = P(a, ri, 0);
		const S = 10;
		for (let s = 0; s < S; s++) {
			const q0 = (s / S) * 2 * PI, q1 = ((s + 1) / S) * 2 * PI;
			const pr = (q, r, y) => [c[0] + Math.cos(q) * r, y, c[2] + Math.sin(q) * r];
			g.quad(pr(q0, 0.035, 0), pr(q1, 0.035, 0), pr(q1, 0.035, H + 0.1), pr(q0, 0.035, H + 0.1), [Math.cos((q0 + q1) / 2), 0, Math.sin((q0 + q1) / 2)], K.IRON);
			g.quad(pr(q0, 0.06, H + 0.1), pr(q1, 0.06, H + 0.1), pr(q1, 0.03, H + 0.2), pr(q0, 0.03, H + 0.2), [Math.cos((q0 + q1) / 2) * 0.8, 0.6, Math.sin((q0 + q1) / 2) * 0.8], K.IRON);
		}
	}
	return g;
}

// the candles' wax: little upright cylinders, one mesh
function buildCandles() {
	const pos = [], nrm = [], info = [], idx = [];
	const S = 7;
	for (const c of CANDLES) {
		const [x, y, z, r, h, ph] = c;
		const base = pos.length / 3;
		// sides
		for (let s = 0; s <= S; s++) {
			const q = (s / S) * 2 * PI + ph;
			const nx = Math.cos(q), nz = Math.sin(q);
			pos.push(x + nx * r, y, z + nz * r, x + nx * r, y + h, z + nz * r);
			nrm.push(nx, 0, nz, nx, 0, nz);
			info.push(0, h, ph, 1, h, ph);
		}
		for (let s = 0; s < S; s++) {
			const a = base + s * 2;
			idx.push(a, a + 2, a + 3, a, a + 3, a + 1);
		}
		// top: a shallow dish of melted wax
		const top = pos.length / 3;
		pos.push(x, y + h - 0.006, z); nrm.push(0, 1, 0); info.push(2, h, ph);
		for (let s = 0; s < S; s++) {
			const q = (s / S) * 2 * PI + ph;
			pos.push(x + Math.cos(q) * r, y + h, z + Math.sin(q) * r); nrm.push(0, 1, 0); info.push(1, h, ph);
		}
		for (let s = 0; s < S; s++) idx.push(top, top + 1 + s, top + 1 + ((s + 1) % S));
	}
	return { pos, nrm, info, idx };
}

// the flames: one small upright card per candle, turned to face the camera
function buildFlames() {
	const ctr = [], corner = [], ph = [];
	const idx = [];
	for (const c of CANDLES) {
		const [x, y, z, , h, p] = c;
		const b = ctr.length / 3;
		for (const q of [[-1, 0], [1, 0], [1, 1], [-1, 1]]) {
			ctr.push(x, y + h + 0.004, z);
			corner.push(q[0], q[1]);
			ph.push(p);
		}
		idx.push(b, b + 1, b + 2, b, b + 2, b + 3);
	}
	return { ctr, corner, ph, idx };
}

// the piano file (res/piano.bin, made from the model by tools)
function decodePiano(buf) {
	const dv = new DataView(buf);
	const nV = dv.getUint32(4, true), nI = dv.getUint32(8, true);
	const mn = [], sz = [];
	for (let k = 0; k < 3; k++) { mn.push(dv.getFloat32(12 + k * 4, true)); sz.push(dv.getFloat32(24 + k * 4, true)); }
	let off = 36;
	const q = new Uint16Array(buf, off, nV * 3); off += nV * 6;
	const ix = new Uint16Array(buf, off, nI); off += nI * 2;
	const n8 = new Int8Array(buf, off, nV * 3); off += nV * 3;
	const m8 = new Uint8Array(buf, off, nV);
	const pos = new Float32Array(nV * 3), nrm = new Float32Array(nV * 3), mat = new Float32Array(nV);
	const c = Math.cos(PIANO.yaw), s = Math.sin(PIANO.yaw), S = PIANO.scale;
	for (let i = 0; i < nV; i++) {
		const x = (mn[0] + q[i * 3] / 65535 * sz[0]) * S;
		const y = (mn[1] + q[i * 3 + 1] / 65535 * sz[1]) * S;
		const z = (mn[2] + q[i * 3 + 2] / 65535 * sz[2]) * S;
		pos[i * 3] = PIANO.x + c * x + s * z;
		pos[i * 3 + 1] = y;
		pos[i * 3 + 2] = PIANO.z - s * x + c * z;
		const nx = n8[i * 3] / 127, ny = n8[i * 3 + 1] / 127, nz = n8[i * 3 + 2] / 127;
		nrm[i * 3] = c * nx + s * nz; nrm[i * 3 + 1] = ny; nrm[i * 3 + 2] = -s * nx + c * nz;
		mat[i] = m8[i];
	}
	return { pos, nrm, mat, idx: new Uint32Array(ix) };
}

// ------------------------------------------------------------------
// COLLISION (for walking freely): wall segments [[x0, z0], [x1, z1]]
// ------------------------------------------------------------------

function segments() {
	const out = [];
	const P = (a, r) => [C.x + Math.cos(a) * r, C.z + Math.sin(a) * r];
	// the passage's sides
	out.push([[0, PASS.z0], [wallX(PASS.z0), PASS.z0]]);
	out.push([[wallX(PASS.z1), PASS.z1], [0, PASS.z1]]);
	// the round wall (open at the passage), and the confessional's front
	const aP = Math.asin((PASS.z1 - C.z) / R);
	const N = 72;
	for (let i = 0; i < N; i++) {
		const a0 = aP + (i / N) * (2 * PI - 2 * aP), a1 = aP + ((i + 1) / N) * (2 * PI - 2 * aP);
		out.push([P(a0, R - 0.25), P(a1, R - 0.25)]);
	}
	const fx = OFF[0] - 0.55 + 0.35;
	out.push([[fx, BAY.z0], [fx, BAY.z1]]);
	// the foot of the stair, where it is too low to pass under
	const tLow = 2.4 / ST.k;
	const M = 12;
	for (let i = 0; i < M; i++) {
		const a0 = stAngle((i / M) * tLow), a1 = stAngle(((i + 1) / M) * tLow);
		out.push([P(a0, ST.ri - 0.2), P(a1, ST.ri - 0.2)]);
	}
	out.push([P(stAngle(0), ST.ri - 0.2), P(stAngle(0), R)]);
	out.push([P(stAngle(tLow), ST.ri - 0.2), P(stAngle(tLow), R)]);
	// the piano (its footprint)
	const c = Math.cos(PIANO.yaw), s = Math.sin(PIANO.yaw), S = PIANO.scale;
	const corners = [[-1.0, -0.62], [1.25, -0.62], [1.25, 0.62], [-1.0, 0.62]].map(([x, z]) => [PIANO.x + (c * x + s * z) * S, PIANO.z + (-s * x + c * z) * S]);
	for (let i = 0; i < 4; i++) out.push([corners[i], corners[(i + 1) % 4]]);
	return out;
}

// ------------------------------------------------------------------
// DRAWING
// ------------------------------------------------------------------

module.exports = (regl) => {
	const g = build();
	const rail = buildRailing();
	const wax = buildCandles();
	const fl = buildFlames();
	const LANTERN = require('./lanterns');

	const COMMON = `
	precision highp float;
	${env.GLSL}
	uniform float time;
	${roomGLSL()}
	${LANTERN.lanternGLSL()}
	float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
	float vnoise(vec2 p) {
		vec2 i = floor(p), f = fract(p);
		vec2 u = f * f * (3.0 - 2.0 * f);
		return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
	}
	float fbm(vec2 p) { return vnoise(p) * 0.5 + vnoise(p * 2.1) * 0.25 + vnoise(p * 4.3) * 0.125 + vnoise(p * 8.7) * 0.0625; }
	// limestone: warm, chalky, with fossil flecks and soft cloudy patches
	vec3 limestone(vec2 q) {
		float n = fbm(q * 1.3);
		float fine = vnoise(q * 37.0);
		vec3 c = mix(vec3(0.62, 0.56, 0.47), vec3(0.74, 0.68, 0.58), n);
		c *= 0.92 + 0.08 * fine;
		c *= 1.0 - 0.12 * smoothstep(0.82, 0.95, vnoise(q * 9.0));
		return c;
	}`;

	const VERT = `
	precision highp float;
	uniform mat4 proj, view;
	uniform float yScale;
	attribute vec3 position, normal;
	attribute float kind;
	attribute vec2 uv;
	varying vec3 v_pos, v_n, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	void main() {
		v_pos = position; v_n = normal; v_kind = kind; v_uv = uv;
		v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
		vec3 p = position; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`;

	const room = regl({
		vert: VERT,
		frag: `${COMMON}
		varying vec3 v_pos, v_n, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		void main() {
			vec3 N = normalize(v_n);
			if (!gl_FrontFacing) N = -N;
			vec3 V = normalize(v_eye - v_pos);
			float k = v_kind;
			vec3 base;
			float gloss = 0.08;
			if (k < 0.5) {
				// floor: big worn flags of pale stone, laid in rings round the middle
				vec2 q = v_pos.xz;
				float r = length(q - vec2(${f(C.x)}, ${f(C.z)}));
				float a = atan(q.y - ${f(C.z)}, q.x - ${f(C.x)});
				float ring = floor(r / 0.9);
				float cnt = max(1.0, floor(6.2831 * (ring + 0.5) * 0.9 / 0.95));
				float seg = a / 6.2831 * cnt + hash(vec2(ring, 3.0)) * 7.0;
				float jr = abs(fract(r / 0.9) - 0.5), ja = abs(fract(seg) - 0.5);
				float joint = smoothstep(0.485, 0.497, max(jr, ja * (r < 0.5 ? 0.0 : 1.0)));
				if (v_pos.x > ${f(C.x + R - 0.4)}) {
					// in the passage, straight flags
					vec2 s = v_pos.xz / vec2(0.9, 0.95);
					vec2 j = abs(fract(s + vec2(0.0, floor(s.x) * 0.5)) - 0.5);
					joint = smoothstep(0.485, 0.497, max(j.x, j.y));
					seg = floor(s.x) + floor(s.y) * 7.0;
				}
				base = limestone(q * 0.8 + vec2(seg, ring) * 1.7) * vec3(0.92, 0.88, 0.84);
				base *= 0.93 + 0.14 * hash(vec2(floor(seg), ring));
				base *= 1.0 - 0.45 * joint;
				// waxed by the candles: a soft sheen
				gloss = 0.32 * (1.0 - joint) * (0.7 + 0.3 * vnoise(q * 3.0));
			} else if (k < 1.5) {
				// the walls: dressed limestone in courses (uv: metres round, up)
				vec2 q = v_uv;
				float row = floor(q.y / 0.62);
				float jx = abs(fract(q.x / 1.3 + row * 0.5 + 0.13) - 0.5);
				float jy = abs(fract(q.y / 0.62) - 0.5);
				float joint = q.y > 99.0 ? 0.0 : max(smoothstep(0.486, 0.497, jx), smoothstep(0.47, 0.49, jy));
				base = limestone(q * 0.9 + vec2(row * 3.1, row)) * 1.02;
				base *= 0.95 + 0.08 * hash(vec2(floor(q.x / 1.3 + row * 0.5 + 0.13), row));
				// tool marks across each block
				base *= 0.96 + 0.04 * sin(q.x * 70.0 + vnoise(q * 6.0) * 4.0);
				base *= 1.0 - 0.35 * joint;
				// higher up, sooted a little by the candles' smoke
				base *= 1.0 - 0.25 * smoothstep(3.0, ${f(TOP)}, v_pos.y);
			} else if (k < 2.5) {
				// the steps: a greyer, harder stone, worn paler in the middle
				float r = length(v_pos.xz - vec2(${f(C.x)}, ${f(C.z)}));
				base = limestone(v_pos.xz * 1.4 + v_uv * 0.3) * vec3(0.90, 0.88, 0.86);
				base *= 1.0 + 0.10 * (1.0 - smoothstep(0.0, 0.6, abs(r - ${f((ST.ri + ST.ro) / 2)})));
				gloss = 0.12;
			} else if (k < 4.5) {
				// the ribbon under the stair and its string: smooth, plastered,
				// paler than the walls
				base = vec3(0.78, 0.74, 0.67) * (0.96 + 0.06 * fbm(v_uv * 2.0));
				gloss = 0.05;
			} else if (k < 5.5) {
				base = vec3(0.50, 0.46, 0.40) * (0.9 + 0.1 * fbm(v_uv));
			} else if (k < 6.5) {
				// the sky through the oculus
				vec3 sky = mix(vec3(0.62, 0.62, 0.60), vec3(0.05, 0.075, 0.15), night);
				// iron glazing bars: a ring and spokes
				vec2 q = v_pos.xz - vec2(${f(C.x)}, ${f(C.z)});
				float rr = length(q), aa = atan(q.y, q.x);
				float bars = max(1.0 - smoothstep(0.012, 0.022, abs(rr - 0.62)), 1.0 - smoothstep(0.012, 0.022, abs(fract(aa / 6.2831 * 12.0) - 0.5) * rr * 0.52));
				sky *= 1.0 - 0.9 * bars;
				gl_FragColor = vec4(sky, 1.0);
				return;
			} else {
				// the surround, seen from the hall: its cream stone in the hall's light
				base = limestone(v_pos.zy * 1.1) * vec3(0.86, 0.84, 0.80);
				vec3 hall = vec3(1.25, 1.12, 0.94) * (0.62 + 0.38 * max(N.x, 0.0)) * (0.8 + 0.2 * N.y);
				vec3 c = base * (toNight(hall, 0.55) * mix(1.0, 0.55, night) + lanternLight(v_pos, N));
				// in the passage it falls into the room's own light
				if (N.x < 0.5) { vec3 s; c = mix(c, base * roomLight(v_pos, N, V, 0.0, s), 0.5); }
				gl_FragColor = vec4(c, 1.0);
				return;
			}
			vec3 spec;
			vec3 light = roomLight(v_pos, N, V, gloss, spec);
			vec3 col = base * light + spec * 0.6;
			// under the stair, and high up, a deeper dark
			col *= mix(0.55, 1.0, smoothstep(-0.95, -0.2, N.y));
			col = roomHaze(v_pos, v_eye, col);
			gl_FragColor = vec4(col, 1.0);
		}`,
		attributes: { position: g.pos, normal: g.nrm, kind: g.kind, uv: g.uv },
		elements: new Uint32Array(g.idx),
		cull: { enable: false }
	});

	const railing = regl({
		vert: VERT,
		frag: `${COMMON}
		varying vec3 v_pos, v_n, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		void main() {
			vec3 N = normalize(v_n);
			if (!gl_FrontFacing) N = -N;
			vec3 V = normalize(v_eye - v_pos);
			if (v_kind > 8.5) {
				// the iron: interlaced arcs, like the scales of a net
				vec2 q = v_uv;
				float h = 0.92;
				float y = q.y / h;
				float w = 0.018;
				// rails at the foot and under the handrail
				float bar = step(y, 0.07) * step(0.035, y) + step(0.955, y);
				// two families of curved bars crossing
				float P = 0.36;
				float s1 = (q.x + 0.18 * sin(y * 3.1416)) / P + y * 1.25;
				float s2 = (q.x - 0.18 * sin(y * 3.1416)) / P - y * 1.25;
				float d1 = abs(fract(s1) - 0.5) * P, d2 = abs(fract(s2) - 0.5) * P;
				float lattice = step(0.07, y) * step(y, 0.955) * (step(P * 0.5 - w, d1) + step(P * 0.5 - w, d2));
				if (bar + lattice < 0.5) discard;
			}
			vec3 base = vec3(0.018, 0.016, 0.015);
			vec3 spec;
			vec3 light = roomLight(v_pos, N, V, 0.6, spec);
			vec3 col = base * light + spec * 0.55;
			col = roomHaze(v_pos, v_eye, col);
			gl_FragColor = vec4(col, 1.0);
		}`,
		attributes: { position: rail.pos, normal: rail.nrm, kind: rail.kind, uv: rail.uv },
		elements: new Uint32Array(rail.idx),
		cull: { enable: false }
	});

	const candles = regl({
		vert: `
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position, normal, info;
		varying vec3 v_pos, v_n, v_eye, v_info;
		void main() {
			v_pos = position; v_n = normal; v_info = info;
			v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			vec3 p = position; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,
		frag: `${COMMON}
		varying vec3 v_pos, v_n, v_eye, v_info;
		void main() {
			vec3 N = normalize(v_n);
			vec3 V = normalize(v_eye - v_pos);
			// v_info: 0 at the foot .. 1 at the rim, 2 the wick's dish; height; phase
			float t = v_info.x;
			vec3 base = vec3(0.86, 0.80, 0.68);
			vec3 spec;
			vec3 light = roomLight(v_pos, N, V, 0.25, spec);
			vec3 col = base * light + spec * 0.4;
			// the wax glows from within near the flame
			float fl = 0.85 + 0.15 * sin(time * 9.0 + v_info.z * 3.0) * sin(time * 2.3 + v_info.z);
			float glow = t > 1.5 ? 1.0 : smoothstep(0.35, 1.0, t) * smoothstep(0.30, 0.04, v_info.y * (1.0 - t) + 0.02);
			col += vec3(1.0, 0.62, 0.28) * glow * 0.85 * fl;
			col = roomHaze(v_pos, v_eye, col);
			gl_FragColor = vec4(col, 1.0);
		}`,
		attributes: { position: wax.pos, normal: wax.nrm, info: wax.info },
		elements: new Uint32Array(wax.idx),
		cull: { enable: false }
	});

	const flames = regl({
		vert: `
		precision highp float;
		uniform mat4 proj, view;
		uniform float time, halo;
		attribute vec3 ctr;
		attribute vec2 corner;
		attribute float ph;
		varying vec2 v_uv;
		varying float v_fl;
		void main() {
			vec3 right = vec3(view[0][0], view[1][0], view[2][0]);
			float fl = 0.85 + 0.10 * sin(time * 8.0 + ph * 2.0) + 0.05 * sin(time * 19.0 + ph);
			float sway = 0.0025 * sin(time * 3.1 + ph * 5.0);
			float w = halo > 0.5 ? 0.075 : 0.0075;
			float h = halo > 0.5 ? 0.075 : 0.030 * fl;
			vec3 c = ctr + vec3(0.0, halo > 0.5 ? 0.012 : 0.0, 0.0);
			vec3 p = c + right * corner.x * w + vec3(sway * corner.y, (halo > 0.5 ? corner.y * 2.0 - 1.0 : corner.y) * h, 0.0);
			v_uv = corner; v_fl = fl;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,
		frag: `
		precision highp float;
		uniform float halo, night;
		varying vec2 v_uv;
		varying float v_fl;
		void main() {
			if (halo > 0.5) {
				vec2 d = vec2(v_uv.x, v_uv.y * 2.0 - 1.0);
				float g = exp(-dot(d, d) * 5.0) * 0.16 * v_fl;
				gl_FragColor = vec4(vec3(1.0, 0.55, 0.20) * g, 1.0);
				return;
			}
			// a teardrop: round at the bottom, drawn to a point at the top
			float y = v_uv.y;
			float wid = sqrt(max(0.0, y * (1.0 - y))) * 2.0 * (1.0 - 0.45 * y);
			float x = abs(v_uv.x);
			float a = 1.0 - smoothstep(wid * 0.6, wid, x);
			a *= smoothstep(0.0, 0.12, y);
			vec3 core = mix(vec3(1.0, 0.90, 0.62), vec3(1.0, 0.55, 0.18), smoothstep(0.2, 0.9, y));
			core = mix(vec3(0.35, 0.40, 0.85), core, smoothstep(0.02, 0.18, y));   // blue at the root
			gl_FragColor = vec4(core * a * 3.2 * v_fl, 1.0);
		}`,
		attributes: { ctr: fl.ctr, corner: fl.corner, ph: fl.ph },
		elements: new Uint32Array(fl.idx),
		uniforms: { halo: regl.prop('halo') },
		depth: { enable: true, mask: false },
		cull: { enable: false },
		blend: { enable: true, func: { srcRGB: 'one', dstRGB: 'one', srcAlpha: 'zero', dstAlpha: 'one' } }
	});

	// the piano, once its file has come
	let piano = null;
	fetch('res/piano.bin')
		.then((r) => { if (!r.ok) throw new Error('Could not load piano.bin'); return r.arrayBuffer(); })
		.then((buf) => {
			const m = decodePiano(buf);
			piano = regl({
				vert: `
				precision highp float;
				uniform mat4 proj, view;
				uniform float yScale;
				attribute vec3 position, normal;
				attribute float mat;
				varying vec3 v_pos, v_n, v_eye;
				varying float v_mat;
				void main() {
					v_pos = position; v_n = normal; v_mat = mat;
					v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
					vec3 p = position; p.y *= yScale;
					gl_Position = proj * view * vec4(p, 1.0);
				}`,
				frag: `${COMMON}
				varying vec3 v_pos, v_n, v_eye;
				varying float v_mat;
				void main() {
					vec3 N = normalize(v_n);
					if (!gl_FrontFacing) N = -N;
					vec3 V = normalize(v_eye - v_pos);
					float m = v_mat;
					vec3 base; float gloss; float refl = 0.0;
					if (m < 0.5) { base = vec3(0.010, 0.009, 0.009); gloss = 0.95; refl = 1.0; }          // black lacquer
					else if (m < 1.5) { base = vec3(0.46, 0.33, 0.13); gloss = 0.7; }                     // the gilded iron frame, strings
					else if (m < 2.5) { base = vec3(0.42, 0.26, 0.12) * (0.85 + 0.15 * vnoise(v_pos.xz * vec2(40.0, 3.0))); gloss = 0.3; }   // soundboard
					else if (m < 3.5) { base = vec3(0.80, 0.77, 0.68); gloss = 0.5; }                     // ivory keys
					else if (m < 4.5) { base = vec3(0.015, 0.013, 0.012); gloss = 0.7; }                  // ebony keys
					else if (m < 5.5) { base = vec3(0.025, 0.020, 0.018); gloss = 0.35; }                 // the bench's leather
					else { base = vec3(0.30, 0.24, 0.12); gloss = 0.8; }                                  // brass casters
					vec3 spec;
					vec3 light = roomLight(v_pos, N, V, gloss, spec);
					vec3 col = base * light + spec * (m < 0.5 ? 1.4 : 0.8);
					if (refl > 0.5) {
						// the lacquer mirrors the sea of candles: a warm, broken glitter
						// low down, the dark room above
						vec3 Rv = reflect(-V, N);
						float low = smoothstep(0.25, -0.15, Rv.y);
						vec2 dir = Rv.xz / max(0.15, length(Rv.xz));
						float sparkle = pow(vnoise(dir * 38.0 + Rv.y * 25.0), 6.0) * 4.0 + pow(vnoise(dir * 90.0 + 3.0), 10.0) * 6.0;
						float fres = 0.05 + 0.95 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
						col += vec3(1.0, 0.55, 0.20) * (low * (0.05 + sparkle * 0.25)) * (0.4 + fres * 1.6);
						col += mix(vec3(0.05, 0.045, 0.04), vec3(0.015, 0.02, 0.035), night) * fres * smoothstep(-0.1, 0.6, Rv.y);
					}
					col = roomHaze(v_pos, v_eye, col);
					gl_FragColor = vec4(col, 1.0);
				}`,
				attributes: { position: m.pos, normal: m.nrm, mat: m.mat },
				elements: m.idx,
				cull: { enable: false }
			});
		})
		.catch((e) => console.error(e));

	function draw(opts) {
		const reflected = opts && opts.reflected;
		room();
		railing();
		candles();
		if (piano) piano();
		if (!reflected) {
			flames({ halo: 1 });
			flames({ halo: 0 });
		}
	}
	return draw;
};

module.exports.C = C;
module.exports.R = R;
module.exports.PASS = PASS;
module.exports.SURR = SURR;
module.exports.OFF = OFF;
module.exports.BAY = BAY;
module.exports.PATH = PATH;
module.exports.PIANO = PIANO;
module.exports.roomGLSL = roomGLSL;
module.exports.segments = segments;

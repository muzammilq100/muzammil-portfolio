'use strict';

/*
 * THE TREE ALCOVE
 * ---------------
 * Between the entrance and the grand archway, in the left wall (as you
 * walk in), a tall arched opening looks into a small square court with
 * a tree growing in it. A round black stone bench rings the tree, more
 * black slab benches line the three walls, and over it all a dome opens
 * to the sky through a glazed oculus, so a shaft of sun, crossed by the
 * shadows of its glazing, falls in on the tree and the benches. It is
 * there to be seen, not entered.
 *
 * The left wall of the hall (as you walk in) is the x = 14 wall. This
 * module builds that whole wall, from the entrance to the new corridor,
 * with the alcove's arch cut into it.
 *
 * Gallery metres: x across the main hall, z along it, y up.
 */

const wing = require('./wing');

const HEIGHT = 8;
const WALL = 0.35;
const WIDTH = 14;

// the court behind the arch
const HALF = 4.0;               // the court is 8 m square
const A = {
	x0: WIDTH + WALL,          // inside face of the court's front wall
	x1: WIDTH + WALL + 2 * HALF,
	z0: 5.9 - HALF,
	z1: 5.9 + HALF,
	zc: 5.9,
	cx: WIDTH + WALL + HALF,
	arch: { r: 2.6, spring: 4.4 },
	dome: { r: 3.3, base: HEIGHT },
	oculus: 1.1
};
// the glass sits a little way up the oculus's stone throat
A.ringY = A.dome.base + Math.sqrt(A.dome.r * A.dome.r - A.oculus * A.oculus);
A.domeTop = A.ringY + 0.45;

// glazing of the oculus, like the panes of the hall's skylight: two
// rings and eight spokes, as fractions of the oculus radius
const GLAZE = { ring1: 0.28, ring2: 0.66, bar: 0.022, spokes: 8 };

// the bench round the tree
const BENCH = { inner: 1.05, outer: 1.62, seat: 0.48, soil: 0.4 };

// the sun through the oculus: high, from the far side, so its patterned
// pool of light lands on the floor just inside the arch
const SHAFT = (() => {
	const v = [0.27, 1.0, -0.12];
	const l = Math.hypot(...v);
	return v.map((c) => c / l);
})();

const STONE = [0, 0, 0];
const PLASTER = [11, 0, 0];
const CREAM = [10, 0, 0];
const SKY = [9, 0, 0];
const SOIL = [5, 0, 0];
const BLACK = [3, 0, 0];      // polished black, like the plant pots
const STEEL = [8, 0, 0];

function face(B, a, b, c, d, n, m) {
	const ia = B.vert(a, n, m);
	const ib = B.vert(b, n, m);
	const ic = B.vert(c, n, m);
	const id = B.vert(d, n, m);
	B.tri(ia, ib, ic);
	B.tri(ia, ic, id);
}

function box(B, x0, y0, z0, x1, y1, z1, m) {
	B.box(Math.min(x0, x1), Math.min(y0, y1), Math.min(z0, z1),
		Math.max(x0, x1), Math.max(y0, y1), Math.max(z0, z1), m);
}

const archHead = (c, r, spring) => (u) => {
	const d = u - c;
	return spring + Math.sqrt(Math.max(0, r * r - d * d));
};

// the hall's left wall with the arch cut in it (u = z, front faces -x)
function addHallWall(B) {
	B.save();
	B.translate(WIDTH + WALL, 0, 0);
	B.rotateY(-Math.PI / 2);
	wing.wallWithHoles(B, {
		u0: 0,
		u1: wing.C.z0,
		w0: 0,
		w1: 2 * WALL,
		top: () => HEIGHT,
		holes: [{
			u0: A.zc - A.arch.r, u1: A.zc + A.arch.r, bottom: 0,
			head: archHead(A.zc, A.arch.r, A.arch.spring), step: 0.05
		}],
		mat: PLASTER,
		revealMat: STONE,
		topStep: 1.0
	});
	B.restore();

	// skirting along the hall side, broken by the arch
	const xs = WIDTH - WALL;
	for (const [z0, z1] of [[0, A.zc - A.arch.r], [A.zc + A.arch.r, wing.C.z0]]) {
		box(B, xs - 0.12, 0, z0, xs, 0.42, z1, STONE);
		box(B, xs - 0.07, 0.42, z0, xs, 0.50, z1, STONE);
	}

	// a stone archivolt with a keystone, and pilasters either side
	const x = xs, ring = 0.24, seg = 40;
	const q = (a, rr, xx) => [xx, A.arch.spring + Math.sin(a) * rr, A.zc + Math.cos(a) * rr];
	for (let i = 0; i < seg; i++) {
		const a0 = Math.PI * i / seg, a1 = Math.PI * (i + 1) / seg;
		face(B, q(a0, A.arch.r, x - 0.07), q(a1, A.arch.r, x - 0.07), q(a1, A.arch.r + ring, x - 0.07), q(a0, A.arch.r + ring, x - 0.07), [-1, 0, 0], STONE);
		face(B, q(a0, A.arch.r + ring, x), q(a1, A.arch.r + ring, x), q(a1, A.arch.r + ring, x - 0.07), q(a0, A.arch.r + ring, x - 0.07),
			[0, Math.sin((a0 + a1) / 2), Math.cos((a0 + a1) / 2)], STONE);
		face(B, q(a0, A.arch.r, x), q(a1, A.arch.r, x), q(a1, A.arch.r, x - 0.07), q(a0, A.arch.r, x - 0.07),
			[0, -Math.sin((a0 + a1) / 2), -Math.cos((a0 + a1) / 2)], STONE);
	}
	box(B, x - 0.12, A.arch.spring + A.arch.r - 0.06, A.zc - 0.17, x, A.arch.spring + A.arch.r + ring + 0.16, A.zc + 0.17, STONE);
	for (const sd of [-1, 1]) {
		const za = A.zc + sd * A.arch.r, zb = A.zc + sd * (A.arch.r + ring);
		box(B, x - 0.07, 0, za, x, A.arch.spring, zb, STONE);
		box(B, x - 0.13, A.arch.spring - 0.16, za - sd * 0.03, x, A.arch.spring, zb + sd * 0.08, STONE);
		box(B, x - 0.12, 0, za - sd * 0.03, x, 0.5, zb + sd * 0.06, STONE);
	}
}

// the court: floor, walls, ceiling, dome, oculus, bench
function addCourt(B) {

	const { x0, x1, z0, z1 } = A;

	// floor (the hall's marble carries on in)
	face(B, [WIDTH, 0, z0], [x1, 0, z0], [x1, 0, z1], [WIDTH, 0, z1], [0, 1, 0], STONE);

	// walls, facing in
	B.curMat = PLASTER;
	face(B, [x1, 0, z0], [x1, 0, z1], [x1, HEIGHT, z1], [x1, HEIGHT, z0], [-1, 0, 0], PLASTER);
	face(B, [x0, 0, z0], [x1, 0, z0], [x1, HEIGHT, z0], [x0, HEIGHT, z0], [0, 0, 1], PLASTER);
	face(B, [x1, 0, z1], [x0, 0, z1], [x0, HEIGHT, z1], [x1, HEIGHT, z1], [0, 0, -1], PLASTER);
	// the back of the hall wall, seen from inside the court
	face(B, [x0, 0, z1], [x0, 0, z0], [x0, HEIGHT, z0], [x0, HEIGHT, z1], [1, 0, 0], PLASTER);

	// skirting and a cornice round the three walls
	box(B, x1 - 0.12, 0, z0, x1, 0.42, z1, STONE);
	box(B, x0, 0, z0, x1, 0.42, z0 + 0.12, STONE);
	box(B, x0, 0, z1 - 0.12, x1, 0.42, z1, STONE);
	box(B, x1 - 0.2, HEIGHT - 0.3, z0, x1, HEIGHT, z1, STONE);
	box(B, x0, HEIGHT - 0.3, z0, x1, HEIGHT, z0 + 0.2, STONE);
	box(B, x0, HEIGHT - 0.3, z1 - 0.2, x1, HEIGHT, z1, STONE);
	box(B, x0, HEIGHT - 0.3, z0, x0 + 0.2, HEIGHT, z1, STONE);

	// flat ceiling with a round opening for the dome
	const R = A.dome.r, seg = 48;
	const ring = [];
	for (let i = 0; i <= seg; i++) {
		const a = Math.PI * 2 * i / seg;
		ring.push([A.cx + Math.cos(a) * R, A.zc + Math.sin(a) * R]);
	}
	// distance from the centre to the square's edge in direction a
	const toEdge = (a) => {
		const c = Math.abs(Math.cos(a)), sn = Math.abs(Math.sin(a));
		return Math.min(HALF / Math.max(c, 1e-6), HALF / Math.max(sn, 1e-6));
	};
	for (let i = 0; i < seg; i++) {
		const a0 = Math.PI * 2 * i / seg, a1 = Math.PI * 2 * (i + 1) / seg;
		const t0 = toEdge(a0), t1 = toEdge(a1);
		const o0 = [A.cx + Math.cos(a0) * t0, HEIGHT, A.zc + Math.sin(a0) * t0];
		const o1 = [A.cx + Math.cos(a1) * t1, HEIGHT, A.zc + Math.sin(a1) * t1];
		face(B, [ring[i][0], HEIGHT, ring[i][1]], [ring[i + 1][0], HEIGHT, ring[i + 1][1]], o1, o0, [0, -1, 0], CREAM);
	}
	// a moulded ring at the foot of the dome
	B.lathe([[R + 0.02, HEIGHT - 0.18, 1], [R - 0.12, HEIGHT - 0.18, 1], [R - 0.12, HEIGHT - 0.06, 1], [R - 0.05, HEIGHT, 1], [R, HEIGHT + 0.02]],
		A.cx, A.zc, seg, { mat: () => STONE });

	// the dome, seen from below, with coffers suggested by ribs
	const rings = 16;
	const D = (a, e, rr) => [A.cx + Math.cos(a) * Math.cos(e) * rr, A.dome.base + Math.sin(e) * rr, A.zc + Math.sin(a) * Math.cos(e) * rr];
	const eTop = Math.acos(A.oculus / R);
	for (let i = 0; i < seg; i++) {
		for (let j = 0; j < rings; j++) {
			const a0 = Math.PI * 2 * i / seg, a1 = Math.PI * 2 * (i + 1) / seg;
			const e0 = eTop * j / rings, e1 = eTop * (j + 1) / rings;
			const n = (a, e) => [-Math.cos(a) * Math.cos(e), -Math.sin(e), -Math.sin(a) * Math.cos(e)];
			const v = [B.vert(D(a0, e0, R), n(a0, e0), CREAM), B.vert(D(a1, e0, R), n(a1, e0), CREAM),
				B.vert(D(a1, e1, R), n(a1, e1), CREAM), B.vert(D(a0, e1, R), n(a0, e1), CREAM)];
			B.tri(v[0], v[1], v[2]);
			B.tri(v[0], v[2], v[3]);
		}
	}
	// sixteen ribs up the dome
	for (let k = 0; k < 16; k++) {
		const a = Math.PI * 2 * k / 16;
		const pts = [];
		for (let j = 0; j <= 12; j++) pts.push(D(a, eTop * j / 12, R - 0.03));
		B.tube(pts, () => 0.045, 16, 6, { mat: () => STONE });
	}
	// two rings of the coffering
	for (const e of [eTop * 0.35, eTop * 0.7]) {
		const rr = Math.cos(e) * (R - 0.03), y = A.dome.base + Math.sin(e) * (R - 0.03);
		const pts = [];
		for (let i = 0; i <= 64; i++) {
			const a = Math.PI * 2 * i / 64;
			pts.push([A.cx + Math.cos(a) * rr, y, A.zc + Math.sin(a) * rr]);
		}
		B.tube(pts, () => 0.04, 64, 6, { mat: () => STONE });
	}
	// the oculus: a stone throat, the sky through clear glass, and black
	// glazing bars in the same pattern as the hall's skylight
	const yTop = A.ringY;
	const yG = A.domeTop;
	B.lathe([[A.oculus + 0.16, yTop - 0.06, 1], [A.oculus, yTop - 0.06, 1], [A.oculus, yG + 0.08, 1]], A.cx, A.zc, 48, { mat: () => STONE });
	const c = B.vert([A.cx, yG + 0.06, A.zc], [0, -1, 0], SKY);
	for (let i = 0; i < 48; i++) {
		const a0 = Math.PI * 2 * i / 48, a1 = Math.PI * 2 * (i + 1) / 48;
		B.tri(c, B.vert([A.cx + Math.cos(a0) * A.oculus, yG + 0.06, A.zc + Math.sin(a0) * A.oculus], [0, -1, 0], SKY),
			B.vert([A.cx + Math.cos(a1) * A.oculus, yG + 0.06, A.zc + Math.sin(a1) * A.oculus], [0, -1, 0], SKY));
	}
	const ringPts = (rr) => {
		const pts = [];
		for (let i = 0; i <= 64; i++) {
			const a = Math.PI * 2 * i / 64;
			pts.push([A.cx + Math.cos(a) * rr, yG, A.zc + Math.sin(a) * rr]);
		}
		return pts;
	};
	const R0 = A.oculus;
	B.tube(ringPts(R0 * GLAZE.ring1), () => 0.022, 64, 6, { mat: () => STEEL });
	B.tube(ringPts(R0 * GLAZE.ring2), () => 0.022, 64, 6, { mat: () => STEEL });
	B.tube(ringPts(R0 - 0.03), () => 0.035, 64, 6, { mat: () => STEEL });
	for (let k = 0; k < GLAZE.spokes; k++) {
		const a = Math.PI * 2 * k / GLAZE.spokes;
		const p = (rr) => [A.cx + Math.cos(a) * rr, yG, A.zc + Math.sin(a) * rr];
		B.tube([p(R0 * GLAZE.ring1), p(R0 * 0.6), p(R0 - 0.02)], () => 0.02, 8, 5, { mat: () => STEEL });
	}
	// a cross through the middle
	for (const a of [0, Math.PI / 2]) {
		const p = (rr) => [A.cx + Math.cos(a) * rr, yG, A.zc + Math.sin(a) * rr];
		B.tube([p(-R0 * GLAZE.ring1), p(0), p(R0 * GLAZE.ring1)], () => 0.018, 6, 5, { mat: () => STEEL });
	}

	// black slab benches along the three walls, set a little off the wall
	const benchY = 0.46, depth = 0.55, gap = 0.12;
	const slab = (x0b, z0b, x1b, z1b) => {
		// a thick polished top on a recessed base
		box(B, x0b, benchY - 0.08, z0b, x1b, benchY, z1b, BLACK);
		const ix = (x1b - x0b) > (z1b - z0b) ? [x0b + 0.25, x1b - 0.25] : [x0b + 0.06, x1b - 0.06];
		const iz = (x1b - x0b) > (z1b - z0b) ? [z0b + 0.06, z1b - 0.06] : [z0b + 0.25, z1b - 0.25];
		box(B, ix[0], 0, iz[0], ix[1], benchY - 0.08, iz[1], BLACK);
	};
	slab(x1 - gap - depth, z0 + 1.1, x1 - gap, z1 - 1.1);
	slab(x0 + 1.0, z0 + gap, x1 - 1.1, z0 + gap + depth);
	slab(x0 + 1.0, z1 - gap - depth, x1 - 1.1, z1 - gap);

	// the round bench, with earth and moss inside it for the tree
	const b = BENCH;
	B.lathe([
		[b.outer, 0, 1], [b.outer, b.seat - 0.1, 1], [b.outer + 0.07, b.seat - 0.07, 1], [b.outer + 0.07, b.seat, 1],
		[b.inner - 0.05, b.seat, 1], [b.inner - 0.05, b.seat - 0.06, 1], [b.inner, b.seat - 0.08, 1], [b.inner, b.soil]
	], A.cx, A.zc, 64, { mat: () => BLACK });
	B.lathe([[b.inner, b.soil, 1], [0.0, b.soil + 0.03]], A.cx, A.zc, 48, { mat: () => SOIL });
}

function addAlcove(B) {
	addHallWall(B);
	addCourt(B);
	B.curMat = [0, 0, 0];
}

/* ---- light in the court (GLSL, for mesh.js) ---- */

const f = (x) => x.toFixed(4);

function oculusGLSL() {
	return `
	const vec3 SHAFT = vec3(${f(SHAFT[0])}, ${f(SHAFT[1])}, ${f(SHAFT[2])});

	// how much sun the glazed oculus lets through towards p (0..1):
	// the open disc, less the soft shadows of its rings and spokes
	float oculusOpen(vec3 p) {
		float t = (${f(A.domeTop)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${f(A.cx)}, ${f(A.zc)});
		float d = length(d2);
		float soft = 0.015 + 0.012 * t;
		float open = 1.0 - smoothstep(${f(A.oculus - 0.05)} - soft, ${f(A.oculus - 0.05)} + soft, d);
		float hw = ${f(GLAZE.bar)};
		float cover = 0.0;
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${f(A.oculus * GLAZE.ring1)})));
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${f(A.oculus * GLAZE.ring2)})));
		float ang = atan(d2.y, d2.x);
		float stp = ${f(Math.PI * 2 / GLAZE.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		float spoke = 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da));
		cover = max(cover, d > ${f(A.oculus * GLAZE.ring1)} ? spoke : 0.0);
		float crs = min(abs(d2.x), abs(d2.y));
		cover = max(cover, d < ${f(A.oculus * GLAZE.ring1)} ? 1.0 - smoothstep(hw - soft, hw + soft, crs) : 0.0);
		return open * (1.0 - cover * 0.9);
	}`;
}

function alcoveLightGLSL() {
	return `
	${oculusGLSL()}

	// sunlight through the oculus reaching p (0..1)
	float alcoveSun(vec3 p, vec3 n) {
		if (p.x < ${f(A.x0 - 0.75)} || p.z < ${f(A.z0 - 0.5)} || p.z > ${f(A.z1 + 0.5)}) return 0.0;
		float ndl = max(dot(n, SHAFT), 0.0);
		if (ndl <= 0.0) return 0.0;
		return ndl * oculusOpen(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${f(A.x0 - 1.5)} || p.z < ${f(A.z0 - 1.5)} || p.z > ${f(A.z1 + 1.5)}) return 0.0;
		float inside = smoothstep(${f(A.x0 - 1.2)}, ${f(A.x0 + 0.6)}, p.x);
		float d = length(p.xz - vec2(${f(A.cx)}, ${f(A.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`;
}

module.exports = { addAlcove, alcoveLightGLSL, oculusGLSL, A, BENCH, SHAFT };

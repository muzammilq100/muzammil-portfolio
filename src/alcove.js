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
	oculus: 3.3
};
A.domeTop = A.dome.base + A.dome.r;

// the glass dome's frame: sixteen ribs and two rings (their elevations)
const GLAZE = { spokes: 16, ringE: [0.42, 0.95], bar: 0.035 };

// the tree: its size and, roughly, its crown and trunk (for shadows)
const TREE = { sxz: 1.32, sy: 1.6, yaw: 0.6 };
TREE.crownC = [A.cx, 0.4 + 3.4 * TREE.sy, A.zc];
TREE.crownR = [2.3 * TREE.sxz, 1.9 * TREE.sy, 2.3 * TREE.sxz];
TREE.trunkR = 0.26 * TREE.sxz;
TREE.trunkTop = 0.4 + 2.2 * TREE.sy;

// the bench round the tree
const BENCH = { inner: 1.05, outer: 1.62, seat: 0.48, soil: 0.4 };

// the sun through the oculus: high, from the far side, so its patterned
// pool of light lands on the floor just inside the arch
const SHAFT = (() => {
	const v = [0.2, 1.0, -0.15];
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

	// the dome is all glass: the sky shows through it between slender
	// cream ribs and two rings, like a great round skylight
	const rings = 16;
	const D = (a, e, rr) => [A.cx + Math.cos(a) * Math.cos(e) * rr, A.dome.base + Math.sin(e) * rr, A.zc + Math.sin(a) * Math.cos(e) * rr];
	const eTop = Math.PI / 2;
	for (let i = 0; i < seg; i++) {
		for (let j = 0; j < rings; j++) {
			const a0 = Math.PI * 2 * i / seg, a1 = Math.PI * 2 * (i + 1) / seg;
			const e0 = eTop * j / rings, e1 = eTop * (j + 1) / rings;
			const n = (a, e) => [-Math.cos(a) * Math.cos(e), -Math.sin(e), -Math.sin(a) * Math.cos(e)];
			const v = [B.vert(D(a0, e0, R), n(a0, e0), SKY), B.vert(D(a1, e0, R), n(a1, e0), SKY),
				B.vert(D(a1, e1, R), n(a1, e1), SKY), B.vert(D(a0, e1, R), n(a0, e1), SKY)];
			B.tri(v[0], v[1], v[2]);
			B.tri(v[0], v[2], v[3]);
		}
	}
	// the ribs, meeting at a small hub at the top
	for (let k = 0; k < GLAZE.spokes; k++) {
		const a = Math.PI * 2 * k / GLAZE.spokes;
		const pts = [];
		for (let j = 0; j <= 14; j++) pts.push(D(a, (eTop - 0.06) * j / 14, R - 0.04));
		B.tube(pts, () => 0.04, 20, 6, { mat: () => CREAM });
	}
	for (const e of GLAZE.ringE) {
		const rr = Math.cos(e) * (R - 0.04), y = A.dome.base + Math.sin(e) * (R - 0.04);
		const pts = [];
		for (let i = 0; i <= 72; i++) {
			const a = Math.PI * 2 * i / 72;
			pts.push([A.cx + Math.cos(a) * rr, y, A.zc + Math.sin(a) * rr]);
		}
		B.tube(pts, () => 0.035, 72, 6, { mat: () => CREAM });
	}
	B.ellipsoid([A.cx, A.dome.base + R - 0.06, A.zc], [0.16, 0.08, 0.16], 6, 12, { mat: () => CREAM });

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
	const R = A.dome.r;
	const ringRs = GLAZE.ringE.map((e) => Math.cos(e) * R);
	return `
	const vec3 SHAFT = vec3(${f(SHAFT[0])}, ${f(SHAFT[1])}, ${f(SHAFT[2])});

	// how much sun the glass dome lets through towards p (0..1): the round
	// opening, less the soft shadows of its ribs and rings (worked out on
	// the dome's base, where the frame is seen almost straight on)
	float oculusOpen(vec3 p) {
		float t = (${f(A.dome.base + 0.6)} - p.y) / SHAFT.y;
		vec3 q = p + SHAFT * t;
		vec2 d2 = q.xz - vec2(${f(A.cx)}, ${f(A.zc)});
		float d = length(d2);
		float soft = 0.02 + 0.012 * t;
		float open = 1.0 - smoothstep(${f(R - 0.15)} - soft, ${f(R - 0.15)} + soft, d);
		float hw = ${f(GLAZE.bar)};
		float cover = 0.0;
		${ringRs.map((r) => `cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, abs(d - ${f(r)})));`).join('\n\t\t')}
		float ang = atan(d2.y, d2.x);
		float stp = ${f(Math.PI * 2 / GLAZE.spokes)};
		float da = abs(mod(ang + stp * 0.5, stp) - stp * 0.5);
		cover = max(cover, 1.0 - smoothstep(hw - soft, hw + soft, d * sin(da)));
		cover = max(cover, 1.0 - smoothstep(0.16 - soft, 0.16 + soft, d));
		return open * (1.0 - cover * 0.85);
	}

	// the tree's own shade: its crown lets dappled light through, its
	// trunk blocks it
	float treeShade(vec3 p) {
		vec3 c = vec3(${f(TREE.crownC[0])}, ${f(TREE.crownC[1])}, ${f(TREE.crownC[2])});
		vec3 r = vec3(${f(TREE.crownR[0])}, ${f(TREE.crownR[1])}, ${f(TREE.crownR[2])});
		vec3 oc = (p - c) / r, dd = SHAFT / r;
		float a = dot(dd, dd), b = dot(oc, dd), cc = dot(oc, oc) - 1.0;
		float disc = b * b - a * cc;
		float tr = 1.0;
		if (disc > 0.0) {
			float sq = sqrt(disc);
			float t0 = max(0.0, (-b - sq) / a), t1 = (-b + sq) / a;
			float len = max(0.0, t1 - t0);
			if (len > 0.0) {
				vec3 m = p + SHAFT * (t0 + t1) * 0.5;
				float gaps = sin(m.x * 4.1 + m.y * 1.3) * sin(m.z * 3.7 - m.y * 2.1) * sin(m.x * 2.3 + m.z * 2.9);
				gaps = smoothstep(0.15, 0.55, gaps);
				tr = mix(exp(-len * 1.4), 1.0, gaps * exp(-len * 0.35));
			}
		}
		// the trunk, a leaning column near the middle
		float tt = (${f(TREE.trunkTop)} - p.y) / SHAFT.y;
		if (tt > 0.0) {
			vec2 o = p.xz - vec2(${f(A.cx)}, ${f(A.zc)});
			vec2 dir = SHAFT.xz;
			float k = clamp(-dot(o, dir) / dot(dir, dir), 0.0, tt);
			float dist = length(o + dir * k);
			tr *= smoothstep(${f(TREE.trunkR * 0.7)}, ${f(TREE.trunkR * 1.3)}, dist);
		}
		return tr;
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
		return ndl * oculusOpen(p) * treeShade(p);
	}

	// soft daylight filling the court, brightest under the dome
	float alcoveGlow(vec3 p) {
		if (p.x < ${f(A.x0 - 1.5)} || p.z < ${f(A.z0 - 1.5)} || p.z > ${f(A.z1 + 1.5)}) return 0.0;
		float inside = smoothstep(${f(A.x0 - 1.2)}, ${f(A.x0 + 0.6)}, p.x);
		float d = length(p.xz - vec2(${f(A.cx)}, ${f(A.zc)}));
		return inside * (0.55 + 0.45 * smoothstep(0.0, 8.0, p.y)) * (1.0 - 0.35 * smoothstep(1.0, 5.0, d));
	}`;
}

module.exports = { addAlcove, alcoveLightGLSL, oculusGLSL, A, BENCH, SHAFT, TREE };

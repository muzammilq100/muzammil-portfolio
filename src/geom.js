'use strict';

/*
 * GEOMETRY BUILDER
 * ----------------
 * Small helper used by decor.js (statues, plants) and by the
 * round fluted arch columns in map.js.
 *
 * Every vertex carries a position, a normal and a "mat" triple:
 *
 *   mat.x = material id    (see mesh.js)
 *   mat.y, mat.z = free texture coordinates for that material
 *
 * Triangles are wound automatically from the vertex normals,
 * so a surface can never come out inside out.
 */

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const mul = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [
	a[1] * b[2] - a[2] * b[1],
	a[2] * b[0] - a[0] * b[2],
	a[0] * b[1] - a[1] * b[0]
];
const len = (a) => Math.hypot(a[0], a[1], a[2]);
const norm = (a) => {
	const l = len(a) || 1;
	return [a[0] / l, a[1] / l, a[2] / l];
};


/* Catmull-Rom through a list of 3D points, t in [0, 1] */
function catmull(pts, t) {
	const n = pts.length - 1;
	const f = Math.min(Math.max(t, 0), 1) * n;
	const i = Math.min(n - 1, Math.floor(f));
	const s = f - i;
	const p0 = pts[Math.max(0, i - 1)];
	const p1 = pts[i];
	const p2 = pts[i + 1];
	const p3 = pts[Math.min(n, i + 2)];
	const out = [0, 0, 0];
	for (let k = 0; k < 3; k++) {
		out[k] = 0.5 * (
			2 * p1[k] +
			(-p0[k] + p2[k]) * s +
			(2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * s * s +
			(-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * s * s * s
		);
	}
	return out;
}

/* Catmull-Rom through numbers: used for body profiles */
function curve1(vals, t) {
	return catmull(vals.map((v) => [v, 0, 0]), t)[0];
}


function createBuilder(position, normal, elements, matArr) {

	const B = {
		curMat: [0, 0, 0]
	};

	/* -------------------------------------------------------
	 * TRANSFORM STACK (uniform scale, rotation, translation)
	 * ----------------------------------------------------- */

	const identity = () => ({
		r: [1, 0, 0, 0, 1, 0, 0, 0, 1],
		t: [0, 0, 0],
		s: 1
	});

	let M = identity();
	const stack = [];

	B.save = () => {
		stack.push({ r: M.r.slice(), t: M.t.slice(), s: M.s });
	};

	B.restore = () => {
		M = stack.pop();
	};

	const rotMul = (a, b) => {
		const o = new Array(9);
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				o[i * 3 + j] =
					a[i * 3] * b[j] +
					a[i * 3 + 1] * b[3 + j] +
					a[i * 3 + 2] * b[6 + j];
			}
		}
		return o;
	};

	const apply = (v) => [
		M.r[0] * v[0] + M.r[1] * v[1] + M.r[2] * v[2],
		M.r[3] * v[0] + M.r[4] * v[1] + M.r[5] * v[2],
		M.r[6] * v[0] + M.r[7] * v[1] + M.r[8] * v[2]
	];

	B.translate = (x, y, z) => {
		const d = apply([x, y, z]);
		M.t = [
			M.t[0] + d[0] * M.s,
			M.t[1] + d[1] * M.s,
			M.t[2] + d[2] * M.s
		];
	};

	B.scale = (s) => {
		M.s *= s;
	};

	B.rotateY = (a) => {
		const c = Math.cos(a);
		const s = Math.sin(a);
		M.r = rotMul(M.r, [c, 0, s, 0, 1, 0, -s, 0, c]);
	};


	/* -------------------------------------------------------
	 * VERTEX / TRIANGLE
	 * ----------------------------------------------------- */

	B.vert = (p, n, m) => {
		const mm = m || B.curMat;
		const wp = apply(p);
		const wn = norm(apply(n));
		position.push(
			wp[0] * M.s + M.t[0],
			wp[1] * M.s + M.t[1],
			wp[2] * M.s + M.t[2]
		);
		normal.push(wn[0], wn[1], wn[2]);
		matArr.push(mm[0], mm[1], mm[2]);
		return position.length / 3 - 1;
	};

	const P = (i) => [position[i * 3], position[i * 3 + 1], position[i * 3 + 2]];
	const N = (i) => [normal[i * 3], normal[i * 3 + 1], normal[i * 3 + 2]];

	/* Orient the triangle so it faces the way its vertex normals do */
	B.tri = (a, b, c) => {
		const pa = P(a);
		const g = cross(sub(P(b), pa), sub(P(c), pa));
		const n = add(add(N(a), N(b)), N(c));
		if (dot(g, n) < 0) {
			elements.push(a, c, b);
		} else {
			elements.push(a, b, c);
		}
	};


	/* -------------------------------------------------------
	 * BOX WITH FLAT FACES
	 * ----------------------------------------------------- */

	B.box = (x0, y0, z0, x1, y1, z1, m) => {
		const faces = [
			[[x0, y0, z0], [x1, y0, z0], [x0, y1, z0], [x1, y1, z0], [0, 0, -1]],
			[[x1, y0, z1], [x0, y0, z1], [x1, y1, z1], [x0, y1, z1], [0, 0, 1]],
			[[x0, y0, z1], [x0, y0, z0], [x0, y1, z1], [x0, y1, z0], [-1, 0, 0]],
			[[x1, y0, z0], [x1, y0, z1], [x1, y1, z0], [x1, y1, z1], [1, 0, 0]],
			[[x0, y1, z0], [x1, y1, z0], [x0, y1, z1], [x1, y1, z1], [0, 1, 0]],
			[[x0, y0, z1], [x1, y0, z1], [x0, y0, z0], [x1, y0, z0], [0, -1, 0]]
		];
		for (const f of faces) {
			const a = B.vert(f[0], f[4], m);
			const b = B.vert(f[1], f[4], m);
			const c = B.vert(f[2], f[4], m);
			const d = B.vert(f[3], f[4], m);
			B.tri(a, b, c);
			B.tri(b, d, c);
		}
	};


	/* -------------------------------------------------------
	 * PARAMETRIC SURFACE
	 *
	 *   fn(u, v) -> [x, y, z]      u, v in [0, 1]
	 *
	 *   o.inside(u, v)   a point inside the solid, used to point
	 *                    the normals outwards
	 *   o.wrapV          v is periodic (closed around)
	 *   o.double         emit a back-facing copy (leaves, cloth)
	 *   o.mat(u, v, p)   material triple
	 * ----------------------------------------------------- */

	B.surface = (fn, nu, nv, o) => {

		o = o || {};

		const eps = 1e-3;
		const clamp = (x) => Math.min(1, Math.max(0, x));
		const grid = [];
		const gridBack = [];

		for (let i = 0; i <= nu; i++) {

			const row = [];
			const rowBack = [];

			for (let j = 0; j <= nv; j++) {

				const u = i / nu;
				const v = j / nv;
				const p = fn(u, v);

				const uu = Math.min(1 - eps, Math.max(eps, u));
				const vv = o.wrapV ? v : Math.min(1 - eps, Math.max(eps, v));

				const du = sub(fn(clamp(uu + eps), vv), fn(clamp(uu - eps), vv));
				const v1 = o.wrapV ? vv + eps : clamp(vv + eps);
				const v0 = o.wrapV ? vv - eps : clamp(vv - eps);
				const dv = sub(fn(uu, v1), fn(uu, v0));

				let n = cross(du, dv);

				if (len(n) < 1e-14) {
					n = o.inside ? sub(p, o.inside(u, v)) : [0, 1, 0];
				}

				n = norm(n);

				if (o.inside && dot(n, sub(p, o.inside(u, v))) < 0) {
					n = mul(n, -1);
				}

				const m = o.mat ? o.mat(u, v, p) : null;

				row.push(B.vert(p, n, m));

				if (o.double) {
					rowBack.push(B.vert(p, mul(n, -1), m));
				}
			}

			grid.push(row);
			gridBack.push(rowBack);
		}

		const quads = (g) => {
			for (let i = 0; i < nu; i++) {
				for (let j = 0; j < nv; j++) {
					const a = g[i][j];
					const b = g[i + 1][j];
					const c = g[i][j + 1];
					const d = g[i + 1][j + 1];
					B.tri(a, b, c);
					B.tri(b, d, c);
				}
			}
		};

		quads(grid);

		if (o.double) {
			quads(gridBack);
		}
	};


	/* -------------------------------------------------------
	 * ELLIPSOID
	 * ----------------------------------------------------- */

	B.ellipsoid = (c, r, nu, nv, o) => {

		o = o || {};
		const warp = o.warp || null;

		B.surface(
			(u, v) => {
				const th = u * Math.PI;
				const ph = v * Math.PI * 2;
				const k = warp ? warp(u, v) : 1;
				return [
					c[0] + r[0] * k * Math.sin(th) * Math.cos(ph),
					c[1] + r[1] * k * Math.cos(th),
					c[2] + r[2] * k * Math.sin(th) * Math.sin(ph)
				];
			},
			nu || 10,
			nv || 14,
			{
				wrapV: true,
				inside: () => c,
				mat: o.mat
			}
		);
	};


	/* -------------------------------------------------------
	 * TUBE ALONG A SPLINE
	 * ----------------------------------------------------- */

	B.tube = (pts, radius, seg, sides, o) => {

		o = o || {};

		const K = 40;
		const frames = [];
		let prevN = null;

		for (let k = 0; k <= K; k++) {

			const t = k / K;
			const a = catmull(pts, Math.max(0, t - 0.01));
			const b = catmull(pts, Math.min(1, t + 0.01));
			const T = norm(sub(b, a));

			let Nv;

			if (!prevN) {
				const helper = Math.abs(T[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
				Nv = norm(cross(T, helper));
			} else {
				Nv = norm(sub(prevN, mul(T, dot(prevN, T))));
			}

			frames.push({ N: Nv, B: norm(cross(T, Nv)) });
			prevN = Nv;
		}

		const frameAt = (u) => {
			const f = Math.min(Math.max(u, 0), 1) * K;
			const i = Math.min(K - 1, Math.floor(f));
			const s = f - i;
			const a = frames[i];
			const b = frames[i + 1];
			return {
				N: norm(add(mul(a.N, 1 - s), mul(b.N, s))),
				B: norm(add(mul(a.B, 1 - s), mul(b.B, s)))
			};
		};

		const squash = o.squash || [1, 1];

		B.surface(
			(u, v) => {
				const C = catmull(pts, u);
				const f = frameAt(u);
				const r = radius(u);
				const a = v * Math.PI * 2;
				return add(
					C,
					add(
						mul(f.N, Math.cos(a) * r * squash[0]),
						mul(f.B, Math.sin(a) * r * squash[1])
					)
				);
			},
			seg || 12,
			sides || 8,
			{
				wrapV: true,
				inside: (u) => catmull(pts, u),
				mat: o.mat
			}
		);
	};


	/* -------------------------------------------------------
	 * LATHE
	 *
	 * profile = [[r, y, hard?], ...] going upward on the outside.
	 * Points flagged hard (third value = 1) keep a crisp edge,
	 * all the others are shaded smooth.
	 * ----------------------------------------------------- */

	B.lathe = (profile, cx, cz, seg, o) => {

		o = o || {};

		const segN = [];

		for (let k = 0; k < profile.length - 1; k++) {
			const dr = profile[k + 1][0] - profile[k][0];
			const dy = profile[k + 1][1] - profile[k][1];
			segN.push(norm([dy, -dr, 0]));
		}

		for (let k = 0; k < profile.length - 1; k++) {

			const p0 = profile[k];
			const p1 = profile[k + 1];

			const startHard = k === 0 || p0[2] === 1;
			const endHard = k === profile.length - 2 || p1[2] === 1;

			const n0 = startHard ? segN[k] : norm(add(segN[k - 1], segN[k]));
			const n1 = endHard ? segN[k] : norm(add(segN[k], segN[k + 1]));

			const rowA = [];
			const rowB = [];

			for (let s = 0; s <= seg; s++) {

				const a = (s / seg) * Math.PI * 2;
				const ca = Math.cos(a);
				const sa = Math.sin(a);

				const m0 = o.mat ? o.mat(a, p0[1]) : null;
				const m1 = o.mat ? o.mat(a, p1[1]) : null;

				rowA.push(B.vert(
					[cx + p0[0] * ca, p0[1], cz + p0[0] * sa],
					[n0[0] * ca, n0[1], n0[0] * sa],
					m0
				));

				rowB.push(B.vert(
					[cx + p1[0] * ca, p1[1], cz + p1[0] * sa],
					[n1[0] * ca, n1[1], n1[0] * sa],
					m1
				));
			}

			for (let s = 0; s < seg; s++) {
				B.tri(rowA[s], rowA[s + 1], rowB[s]);
				B.tri(rowA[s + 1], rowB[s + 1], rowB[s]);
			}
		}
	};

	return B;
}


module.exports = {
	createBuilder,
	catmull,
	curve1,
	sub,
	add,
	mul,
	dot,
	cross,
	norm,
	len
};

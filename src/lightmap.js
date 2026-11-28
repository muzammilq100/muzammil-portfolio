'use strict';

/*
 * BAKED LIGHT: WHERE EACH SURFACE LIVES IN THE LIGHT PICTURE
 * ----------------------------------------------------------
 * The sunlight through the skylight, the windows, the door and the
 * oculus, the picture lights and the soft shadows on the floor never
 * change while the visitor watches (only day and night differ). So
 * instead of working them out for every pixel of every frame, mesh.js
 * works them out once, into a picture laid over the architecture, and
 * then simply reads it (see mesh.js, "BAKED LIGHT").
 *
 * This module decides where each flat face of the architecture lies in
 * that picture. The walls, floors, ceilings and the faces of pillars are
 * all flat and square to the room, so each one is simply laid flat
 * ("a chart"), like a plan or an elevation, and the charts are packed
 * side by side into one picture. Curved or slanted faces (the fluted
 * columns, arches, statues, plants) are left out and keep their light
 * worked out live, exactly as before.
 *
 * Every triangle gets its own three corners here (none are shared), so
 * a corner where two walls meet can sit in two charts at once. The
 * triangles that are baked come first, so the bake can draw just them.
 *
 * Gallery metres: x across the main hall, z along it, y up.
 */

// materials whose light is baked (see mesh.js): the architecture
// itself, the cream plaster round the skylight, and the plain walls
const BAKED_MATS = [0, 10, 11];

// the rooms a visitor can stand in: a face is baked only if its lit side
// looks into one of them (the outer faces of the outer walls are never
// seen from inside, and keep their light worked out live)
const { C: WING } = require('./wing');
const { A: COURT } = require('./alcove');
const SH = require('./stairhall');
const ROOMS = [
	[0.35, 13.65, 0.35, WING.hallEnd],                         // the main hall
	[WING.x0, WING.x1, WING.z0, WING.z1],                      // the window corridor
	[COURT.x0, COURT.x1, COURT.z0, COURT.z1],                  // the tree court
	[SH.C.x - SH.R - 0.6, SH.SURR.x, SH.C.z - SH.R - 0.6, SH.C.z + SH.R + 0.6]  // the stair hall
];
const inRoom = (x, z) => ROOMS.some((r) => x > r[0] - 0.01 && x < r[1] + 0.01 && z > r[2] - 0.01 && z < r[3] + 0.01);

// texels per metre: the floor carries the sharpest light (the
// skylight's squares and the shadows of its glazing bars, softened by
// the 9 metres they fall), walls a little less, ceilings least
const DENSITY = { floor: 34, wall: 22, ceiling: 12 };

// empty texels round each chart, so the light can be read right up to
// its edge without picking up a neighbour's
const PAD = 2;

function build(data, opts) {
	const o = Object.assign({ width: 2048, maxHeight: 2048, scale: 1 }, opts || {});
	const P = data.position, N = data.normal, M = data.mat, E = data.elements;
	const T = E.length / 3;

	// 1. which triangles are flat, square to the room and of a baked material
	const tri = [];
	for (let t = 0; t < T; t++) {
		const a = E[t * 3], b = E[t * 3 + 1], c = E[t * 3 + 2];
		const ax = P[a * 3], ay = P[a * 3 + 1], az = P[a * 3 + 2];
		const ux = P[b * 3] - ax, uy = P[b * 3 + 1] - ay, uz = P[b * 3 + 2] - az;
		const vx = P[c * 3] - ax, vy = P[c * 3 + 1] - ay, vz = P[c * 3 + 2] - az;
		let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
		const nl = Math.hypot(nx, ny, nz);
		let axis = -1, sign = 0;
		if (nl > 1e-12 && BAKED_MATS.indexOf(Math.round(M[a * 3])) >= 0) {
			nx /= nl; ny /= nl; nz /= nl;
			const n = [nx, ny, nz];
			for (let k = 0; k < 3; k++) if (Math.abs(n[k]) > 0.999) { axis = k; sign = n[k] > 0 ? 1 : -1; }
			// the shading normals must agree (a flat face, not a rounded one)
			// and its lit side must look into a room
			if (axis >= 0) {
				const cx = (P[a * 3] + P[b * 3] + P[c * 3]) / 3 + n[0] * 0.03;
				const cz = (P[a * 3 + 2] + P[b * 3 + 2] + P[c * 3 + 2]) / 3 + n[2] * 0.03;
				if (!inRoom(cx, cz)) axis = -1;
			}
			if (axis >= 0) {
				for (const v of [a, b, c]) {
					if (Math.abs(N[v * 3 + axis] - sign) > 0.01) { axis = -1; break; }
				}
			}
		}
		tri.push({ t, a, b, c, axis, sign });
	}

	// 2. group the baked triangles into charts: same plane, joined by
	// shared corners
	const key = (v) => P[v * 3].toFixed(3) + ',' + P[v * 3 + 1].toFixed(3) + ',' + P[v * 3 + 2].toFixed(3);
	const planes = new Map();
	for (const q of tri) {
		if (q.axis < 0) continue;
		const pk = q.axis + (q.sign > 0 ? '+' : '-') + P[q.a * 3 + q.axis].toFixed(3);
		if (!planes.has(pk)) planes.set(pk, []);
		planes.get(pk).push(q);
	}
	const charts = [];
	for (const [, list] of planes) {
		// union-find over the corners
		const parent = list.map((_, i) => i);
		const find = (i) => { while (parent[i] !== i) { parent[i] = parent[parent[i]]; i = parent[i]; } return i; };
		const owner = new Map();
		list.forEach((q, i) => {
			for (const v of [q.a, q.b, q.c]) {
				const k = key(v);
				if (owner.has(k)) { const r1 = find(owner.get(k)), r2 = find(i); if (r1 !== r2) parent[r1] = r2; }
				else owner.set(k, i);
			}
		});
		const groups = new Map();
		list.forEach((q, i) => { const r = find(i); if (!groups.has(r)) groups.set(r, []); groups.get(r).push(q); });
		for (const [, g] of groups) charts.push({ tris: g, axis: g[0].axis, sign: g[0].sign });
	}

	// the two in-plane directions of each axis (a plan for floors and
	// ceilings, an elevation for walls)
	const UV_AXES = [[2, 1], [0, 2], [0, 1]];
	for (const ch of charts) {
		const [i, j] = UV_AXES[ch.axis];
		let u0 = Infinity, v0 = Infinity, u1 = -Infinity, v1 = -Infinity;
		for (const q of ch.tris) for (const v of [q.a, q.b, q.c]) {
			const u = P[v * 3 + i], w = P[v * 3 + j];
			if (u < u0) u0 = u; if (u > u1) u1 = u;
			if (w < v0) v0 = w; if (w > v1) v1 = w;
		}
		ch.i = i; ch.j = j; ch.u0 = u0; ch.v0 = v0; ch.du = u1 - u0; ch.dv = v1 - v0;
		const up = ch.axis === 1 && ch.sign > 0;
		const down = ch.axis === 1 && ch.sign < 0;
		ch.kind = up && Math.abs(P[ch.tris[0].a * 3 + 1]) < 0.05 ? 'floor' : (down ? 'ceiling' : 'wall');
	}

	// 3. pack the charts into the picture, row by row (tallest first,
	// each lying on its long side);
	// if they do not fit, everything is made a little coarser and tried again
	const W = o.width;
	let scale = o.scale, H = 0, tries = 0;
	for (;;) {
		for (const ch of charts) {
			// (a thin face, a trim a centimetre deep, still gets a few
			// texels across, or no texel would ever be lit for it)
			const d = DENSITY[ch.kind] * scale;
			ch.dU = Math.max(d, 3 / Math.max(ch.du, 1e-4));
			ch.dV = Math.max(d, 3 / Math.max(ch.dv, 1e-4));
			ch.w = Math.ceil(ch.du * ch.dU) + PAD * 2;
			ch.h = Math.ceil(ch.dv * ch.dV) + PAD * 2;
			// every chart lies on its long side, so the rows pack tightly
			ch.rot = ch.h > ch.w;
			if (ch.rot) { const s = ch.w; ch.w = ch.h; ch.h = s; }
		}
		const order = charts.slice().sort((p, q) => q.h - p.h || q.w - p.w);
		let x = 0, y = 0, rowH = 0, ok = true;
		for (const ch of order) {
			if (ch.w > W) { ok = false; break; }
			if (x + ch.w > W) { y += rowH; x = 0; rowH = 0; }
			ch.x = x; ch.y = y;
			x += ch.w; rowH = Math.max(rowH, ch.h);
		}
		H = y + rowH;
		if (ok && H <= o.maxHeight) break;
		scale *= 0.92;
		if (++tries > 40) throw new Error('lightmap: the architecture does not fit');
	}
	// a height the graphics chip likes (a multiple of 4)
	H = Math.ceil(H / 4) * 4;

	// 4. new vertex lists: baked triangles first, each with its own corners
	const baked = tri.filter((q) => q.axis >= 0);
	const live = tri.filter((q) => q.axis < 0);
	const chartOf = new Map();
	for (const ch of charts) for (const q of ch.tris) chartOf.set(q, ch);
	const n = T * 3;
	const pos = new Float32Array(n * 3), nor = new Float32Array(n * 3), mat = new Float32Array(n * 3);
	const lm = new Float32Array(n * 3);
	let k = 0;
	for (const q of baked.concat(live)) {
		const ch = chartOf.get(q);
		for (const v of [q.a, q.b, q.c]) {
			for (let c = 0; c < 3; c++) {
				pos[k * 3 + c] = P[v * 3 + c];
				nor[k * 3 + c] = N[v * 3 + c];
				mat[k * 3 + c] = M[v * 3 + c];
			}
			if (ch) {
				let s = (P[v * 3 + ch.i] - ch.u0) * ch.dU + PAD;
				let t = (P[v * 3 + ch.j] - ch.v0) * ch.dV + PAD;
				if (ch.rot) { const r = s; s = t; t = r; }
				lm[k * 3] = (ch.x + s) / W;
				lm[k * 3 + 1] = (ch.y + t) / H;
				lm[k * 3 + 2] = 1;
			}
			k++;
		}
	}
	const elements = new Uint32Array(n);
	for (let i = 0; i < n; i++) elements[i] = i;

	return {
		width: W,
		height: H,
		scale,
		charts: charts.length,
		bakedCount: baked.length * 3,
		position: pos,
		normal: nor,
		mat,
		lm,
		elements
	};
}

module.exports = { build, BAKED_MATS };

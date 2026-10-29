'use strict';

/*
 * THE NEW WING
 * ------------
 * At the far end of the main hall an opening on the left leads into a
 * long corridor (an L). Along it:
 *
 *   - on the left, a plaster wall for three paintings, with two arched
 *     niches between them holding black polished statues
 *   - on the right, tall arched windows in black metal onto a cloister
 *     garden (garden.js)
 *   - overhead, a shallow barrel vault with a stone rib springing from
 *     every pier and a carved rosette in each bay
 *   - at the far end, an arched French door onto a Florence street
 *     (florence.js)
 *
 * Everything here is built on the shared builder and uses the main
 * hall's materials. Gallery metres: x across the main hall, z along it,
 * y up. The corridor runs along +x.
 */

const entrance = require('./entrance');

const HEIGHT = 8;              // main hall ceiling
const WALL = 0.35;             // half wall thickness

// the main hall ends just past its last pair of pillars; the corridor
// opens off its left wall right there, flush with the end wall
const C = {
	x0: 13.65,                 // where the corridor meets the main hall
	x1: 38.12,                 // the far door's wall
	z0: 41.0,                  // painting wall
	z1: 47.2,                  // window wall (in line with the hall's end wall)
	zc: 44.1,
	hallEnd: 50.65,            // inside face of the main hall's end wall, a little past the corridor
	spring: 5.6,               // the vault springs from the walls here
	crown: HEIGHT              // and rises to the main hall's ceiling height
};

// a segmental vault: a circle through both springings and the crown
const HALF = (C.z1 - C.z0) / 2;
const RISE = C.crown - C.spring;
const VR = (RISE * RISE + HALF * HALF) / (2 * RISE);
const VCY = C.crown - VR;

function vaultY(z) {
	const d = z - C.zc;
	return VCY + Math.sqrt(Math.max(0, VR * VR - d * d));
}

// windows on the garden side
// five bays: windows in all of them on the garden side; on the painting
// side a painting, a niche, a painting, a niche, a painting
const WIN = { first: 17.43, pitch: 4.4, count: 5, halfW: 1.2, sill: 0.75, spring: 4.3 };
const winCentres = Array.from({ length: WIN.count }, (_, k) => WIN.first + k * WIN.pitch);

// piers between the windows; a rib springs from each
const piers = winCentres.slice(1).map((x) => x - WIN.pitch / 2);

// the three painting positions and the two niches, centred in the bays
const PAINTING_X = [winCentres[0], winCentres[2], winCentres[4]];
const NICHE_X = [winCentres[1], winCentres[3]];

// an arched niche, semicircular in plan with a shell-like half dome
const NICHE = { r: 1.3, sill: 0.62, spring: 3.3 };

const STONE = [0, 0, 0];
const PLASTER = [11, 0, 0];
const CREAM = [10, 0, 0];
const STEEL = [8, 0, 0];


/* ===========================================================
 * HELPERS
 * ===========================================================
 */

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

/*
 * A wall with arched holes, in local coordinates:
 *   u along the wall, y up, w through it (w0 at the back, w1 at the front)
 *   top(u)  the wall's top edge
 *   holes   [{ u0, u1, bottom, head(u) }]  head = top of the hole at u
 * The caller places it with B.save / translate / rotateY.
 */
function wallWithHoles(B, o) {

	const { u0, u1, w0, w1, top, holes, mat } = o;
	const cuts = new Set([u0, u1]);

	for (const h of holes) {
		cuts.add(h.u0);
		cuts.add(h.u1);
		const n = Math.max(8, Math.ceil((h.u1 - h.u0) / (h.step || 0.08)));
		for (let i = 1; i < n; i++) cuts.add(h.u0 + (h.u1 - h.u0) * i / n);
	}
	for (const c of (o.cuts || [])) cuts.add(c);
	const step = o.topStep || 0.5;
	for (let u = u0; u < u1; u += step) cuts.add(u);

	const us = [...cuts].filter((u) => u >= u0 - 1e-9 && u <= u1 + 1e-9).sort((a, b) => a - b);
	const botOf = (h, u) => (h.bot ? h.bot(u) : h.bottom);

	// solid parts of the wall at u, given the holes that cover this slice
	const intervals = (u, hs) => {
		const t = top(u);
		const gaps = hs
			.map((h) => [Math.max(0, botOf(h, u)), Math.min(h.head(u), t)])
			.filter((g) => g[1] > g[0])
			.sort((a, b) => a[0] - b[0]);
		const out = [];
		let y = 0;
		for (const g of gaps) {
			if (g[0] > y + 1e-6) out.push([y, g[0]]);
			y = Math.max(y, g[1]);
		}
		if (t > y + 1e-6) out.push([y, t]);
		return out;
	};

	const P = (u, y, w) => [u, y, w];

	for (let i = 0; i < us.length - 1; i++) {
		const ua = us[i], ub = us[i + 1];
		const um = (ua + ub) / 2;
		const hs = holes.filter((h) => um > h.u0 && um < h.u1);
		const ea = hs.length ? Math.max(ua, Math.max(...hs.map((h) => h.u0)) + 1e-7) : ua;
		const eb = hs.length ? Math.min(ub, Math.min(...hs.map((h) => h.u1)) - 1e-7) : ub;
		const ia = intervals(ea, hs);
		const ib = intervals(eb, hs);
		const n = Math.min(ia.length, ib.length);
		for (let k = 0; k < n; k++) {
			const [ya0, ya1] = ia[k], [yb0, yb1] = ib[k];
			if (ya1 - ya0 < 1e-6 && yb1 - yb0 < 1e-6) continue;
			face(B, P(ua, ya0, w1), P(ub, yb0, w1), P(ub, yb1, w1), P(ua, ya1, w1), [0, 0, 1], mat);
			if (!o.frontOnly) {
				face(B, P(ub, yb0, w0), P(ua, ya0, w0), P(ua, ya1, w0), P(ub, yb1, w0), [0, 0, -1], mat);
			}
		}
	}

	// ends of the wall
	if (!o.noEnds) {
		face(B, P(u0, 0, w0), P(u0, 0, w1), P(u0, top(u0), w1), P(u0, top(u0), w0), [-1, 0, 0], mat);
		face(B, P(u1, 0, w1), P(u1, 0, w0), P(u1, top(u1), w0), P(u1, top(u1), w1), [1, 0, 0], mat);
	}

	// reveals of each hole
	for (const h of holes) {
		if (h.noReveal) continue;
		const rm = h.mat || o.revealMat || mat;
		const ya0 = Math.max(0, botOf(h, h.u0 + 1e-7)), yb0 = Math.max(0, botOf(h, h.u1 - 1e-7));
		const yl = Math.min(h.head(h.u0 + 1e-7), top(h.u0));
		const yr = Math.min(h.head(h.u1 - 1e-7), top(h.u1));
		if (yl > ya0 + 1e-6) face(B, P(h.u0, ya0, w1), P(h.u0, ya0, w0), P(h.u0, yl, w0), P(h.u0, yl, w1), [1, 0, 0], rm);
		if (yr > yb0 + 1e-6) face(B, P(h.u1, yb0, w0), P(h.u1, yb0, w1), P(h.u1, yr, w1), P(h.u1, yr, w0), [-1, 0, 0], rm);
		const n = Math.max(8, Math.ceil((h.u1 - h.u0) / (h.step || 0.06)));
		for (let i = 0; i < n; i++) {
			const a = h.u0 + (h.u1 - h.u0) * i / n;
			const b = h.u0 + (h.u1 - h.u0) * (i + 1) / n;
			const aa = Math.max(a, h.u0 + 1e-7), bb = Math.min(b, h.u1 - 1e-7);
			// the head, following its curve
			const ya = Math.min(h.head(aa), top(a));
			const yb = Math.min(h.head(bb), top(b));
			if (!(ya >= top(a) - 1e-6 && yb >= top(b) - 1e-6)) {
				const tx = b - a, ty = yb - ya;
				const l = Math.hypot(tx, ty) || 1;
				face(B, P(a, ya, w0), P(b, yb, w0), P(b, yb, w1), P(a, ya, w1), [ty / l, -tx / l, 0], rm);
			}
			// the sill or the lower curve
			const sa = botOf(h, aa), sb = botOf(h, bb);
			if (sa > 1e-6 || sb > 1e-6) {
				const tx = b - a, ty = sb - sa;
				const l = Math.hypot(tx, ty) || 1;
				face(B, P(b, sb, w0), P(a, sa, w0), P(a, sa, w1), P(b, sb, w1), [-ty / l, tx / l, 0], rm);
			}
		}
	}
}

const archHead = (c, r, spring) => (u) => {
	const d = u - c;
	return spring + Math.sqrt(Math.max(0, r * r - d * d));
};


/* ===========================================================
 * THE NICHES
 * ===========================================================
 */

function addNiche(B, x) {
	const r = NICHE.r, y0 = NICHE.sill, ys = NICHE.spring, z = C.z0;
	const seg = 24;
	const P = (a, rr, y) => [x + Math.cos(a) * rr, y, z - Math.sin(a) * rr];

	// the curved back, from the sill up to the springing
	for (let i = 0; i < seg; i++) {
		const a0 = Math.PI * i / seg, a1 = Math.PI * (i + 1) / seg;
		const n0 = [-Math.cos(a0), 0, Math.sin(a0)], n1 = [-Math.cos(a1), 0, Math.sin(a1)];
		const v = [B.vert(P(a0, r, y0), n0, STONE), B.vert(P(a1, r, y0), n1, STONE),
			B.vert(P(a1, r, ys), n1, STONE), B.vert(P(a0, r, ys), n0, STONE)];
		B.tri(v[0], v[1], v[2]);
		B.tri(v[0], v[2], v[3]);
	}

	// the half dome
	const rings = 12;
	const D = (a, e) => [x + Math.cos(a) * Math.cos(e) * r, ys + Math.sin(e) * r, z - Math.sin(a) * Math.cos(e) * r];
	const Dn = (a, e) => [-Math.cos(a) * Math.cos(e), -Math.sin(e), Math.sin(a) * Math.cos(e)];
	for (let i = 0; i < seg; i++) {
		for (let j = 0; j < rings; j++) {
			const a0 = Math.PI * i / seg, a1 = Math.PI * (i + 1) / seg;
			const e0 = (Math.PI / 2) * j / rings, e1 = (Math.PI / 2) * (j + 1) / rings;
			// shallow flutes like a scallop shell
			const v = [B.vert(D(a0, e0), Dn(a0, e0), CREAM), B.vert(D(a1, e0), Dn(a1, e0), CREAM),
				B.vert(D(a1, e1), Dn(a1, e1), CREAM), B.vert(D(a0, e1), Dn(a0, e1), CREAM)];
			B.tri(v[0], v[1], v[2]);
			B.tri(v[0], v[2], v[3]);
		}
	}
	// radial ribs of the shell
	for (let k = 1; k < 8; k++) {
		const a = Math.PI * k / 8;
		const pts = [];
		for (let j = 0; j <= 10; j++) {
			const e = (Math.PI / 2) * j / 10 * 0.97;
			pts.push(D(a, e).map((c, q) => c - Dn(a, e)[q] * 0.02));
		}
		B.tube(pts, (u) => 0.035 * (1 - u * 0.6), 12, 6, { mat: () => CREAM });
	}

	// the floor of the niche, a half disc, with a moulded lip at the front
	const c = B.vert([x, y0, z], [0, 1, 0], STONE);
	for (let i = 0; i < seg; i++) {
		const a0 = Math.PI * i / seg, a1 = Math.PI * (i + 1) / seg;
		B.tri(c, B.vert(P(a0, r, y0), [0, 1, 0], STONE), B.vert(P(a1, r, y0), [0, 1, 0], STONE));
	}
	box(B, x - r - 0.12, y0 - 0.1, z, x + r + 0.12, y0 + 0.02, z + 0.12, STONE);
	box(B, x - r - 0.16, y0 - 0.2, z, x + r + 0.16, y0 - 0.1, z + 0.07, STONE);

	// a stone archivolt round the opening, with a keystone
	const ring = 0.16;
	for (let i = 0; i < seg; i++) {
		const a0 = Math.PI * i / seg, a1 = Math.PI * (i + 1) / seg;
		const q = (a, rr, zz) => [x + Math.cos(a) * rr, ys + Math.sin(a) * rr, zz];
		face(B, q(a0, r, z + 0.05), q(a1, r, z + 0.05), q(a1, r + ring, z + 0.05), q(a0, r + ring, z + 0.05), [0, 0, 1], STONE);
		face(B, q(a0, r + ring, z), q(a1, r + ring, z), q(a1, r + ring, z + 0.05), q(a0, r + ring, z + 0.05),
			[Math.cos((a0 + a1) / 2), Math.sin((a0 + a1) / 2), 0], STONE);
		face(B, q(a0, r, z), q(a1, r, z), q(a1, r, z + 0.05), q(a0, r, z + 0.05),
			[-Math.cos((a0 + a1) / 2), -Math.sin((a0 + a1) / 2), 0], STONE);
	}
	// pilaster strips down each side of the opening
	for (const sd of [-1, 1]) {
		const xa = x + sd * r, xb = x + sd * (r + ring);
		box(B, xa, y0, z, xb, ys, z + 0.05, STONE);
		// impost block at the springing
		box(B, xa - sd * 0.02, ys - 0.12, z, xb + sd * 0.06, ys, z + 0.09, STONE);
	}
	box(B, x - 0.11, ys + r - 0.04, z, x + 0.11, ys + r + ring + 0.1, z + 0.09, STONE);

	// a low round plinth for the statue
	B.lathe([[0.66, y0, 1], [0.66, y0 + 0.06, 1], [0.62, y0 + 0.1], [0.6, y0 + 0.3], [0.64, y0 + 0.34, 1], [0.64, y0 + 0.4, 1], [0, y0 + 0.4]],
		x, z - 0.62, 40, { mat: () => STONE });
}

const NICHE_PLINTH_TOP = NICHE.sill + 0.4;
const NICHE_STATUE_Z = C.z0 - 0.62;


/* ===========================================================
 * THE SHELL
 * ===========================================================
 */

function addShell(B) {

	// floor of the corridor (the main hall's floor stops at x = 14)
	face(B, [14, 0, C.z0 - WALL], [C.x1 + WALL, 0, C.z0 - WALL], [C.x1 + WALL, 0, C.z1 + WALL], [14, 0, C.z1 + WALL],
		[0, 1, 0], STONE);

	// painting wall, with the two niches cut into it
	// local u = x, w = z (front at w = z0, facing +z)
	B.curMat = PLASTER;
	wallWithHoles(B, {
		u0: 14 + WALL,
		u1: C.x1 + 2 * WALL,
		w0: C.z0 - 2 * WALL,
		w1: C.z0,
		top: () => C.spring,
		holes: NICHE_X.map((x) => ({
			u0: x - NICHE.r, u1: x + NICHE.r, bottom: NICHE.sill,
			head: archHead(x, NICHE.r, NICHE.spring),
			noReveal: true
		})),
		mat: PLASTER,
		cuts: [C.x1]
	});
	for (const x of NICHE_X) addNiche(B, x);

	// window wall, seen from inside: u = x, w = z (front = inside, towards -z)
	B.save();
	B.translate(0, 0, C.z1);
	B.rotateY(Math.PI);           // u -> -x, w -> -z
	B.translate(-(C.x1 + 2 * WALL), 0, -2 * WALL);
	// in this frame u runs from the far end back to the junction
	const U = (x) => (C.x1 + 2 * WALL) - x;
	wallWithHoles(B, {
		u0: U(C.x1 + 2 * WALL),
		u1: U(13.65),
		w0: 0,
		w1: 2 * WALL,
		top: () => C.spring,
		holes: winCentres.map((x) => ({
			u0: U(x + WIN.halfW),
			u1: U(x - WIN.halfW),
			bottom: WIN.sill,
			head: archHead(U(x), WIN.halfW, WIN.spring)
		})),
		mat: PLASTER,
		revealMat: STONE
	});
	B.restore();

	// far end wall around the door, following the vault
	// local u = z, front faces -x
	B.save();
	B.translate(C.x1, 0, 0);
	B.rotateY(-Math.PI / 2);      // u -> +z, w -> -x
	const d = entrance.DOOR;
	const dc = C.zc, dr = d.r;
	wallWithHoles(B, {
		u0: C.z0 - 2 * WALL,
		u1: C.z1 + 2 * WALL,
		w0: -2 * WALL,
		w1: 0,
		top: (z) => (z < C.z0 || z > C.z1) ? C.spring : vaultY(z),
		topStep: 0.15,
		holes: [{
			u0: dc - dr, u1: dc + dr, bottom: 0,
			head: archHead(dc, dr, d.spring)
		}],
		mat: PLASTER,
		revealMat: STONE
	});
	B.restore();

	// junction: the main hall's side wall above the opening into the corridor
	// local u = z, front faces -x (into the main hall)
	B.save();
	B.translate(14 + WALL, 0, 0);
	B.rotateY(-Math.PI / 2);
	wallWithHoles(B, {
		u0: C.z0,
		u1: C.z1,
		w0: -0.0,
		w1: 2 * WALL,
		top: () => HEIGHT,
		topStep: 0.15,
		holes: [{ u0: C.z0, u1: C.z1, bottom: 0, head: (z) => vaultY(z) }],
		mat: PLASTER,
		revealMat: STONE
	});
	B.restore();

	// the barrel vault (cream plaster)
	const vx0 = 14 + WALL;
	const nx = Math.ceil((C.x1 - vx0) / 1.0);
	const nz = 28;
	const grid = [];
	for (let i = 0; i <= nx; i++) {
		const x = vx0 + (C.x1 - vx0) * i / nx;
		const row = [];
		for (let j = 0; j <= nz; j++) {
			const z = C.z0 + (C.z1 - C.z0) * j / nz;
			const y = vaultY(z);
			const n = [0, VCY - y, C.zc - z];
			const l = Math.hypot(n[1], n[2]);
			row.push(B.vert([x, y, z], [0, n[1] / l, n[2] / l], CREAM));
		}
		grid.push(row);
	}
	for (let i = 0; i < nx; i++) {
		for (let j = 0; j < nz; j++) {
			B.tri(grid[i][j], grid[i + 1][j], grid[i][j + 1]);
			B.tri(grid[i + 1][j], grid[i + 1][j + 1], grid[i][j + 1]);
		}
	}
}


/* ===========================================================
 * RIBS, PILASTERS, CORNICE, ROSETTES
 * ===========================================================
 */

// a rib under the vault from one wall to the other, centred on x
function rib(B, x, halfW, depth) {
	const nz = 32;
	const pts = [];
	for (let j = 0; j <= nz; j++) {
		const z = C.z0 + (C.z1 - C.z0) * j / nz;
		const y = vaultY(z);
		const nY = VCY - y, nZ = C.zc - z;
		const l = Math.hypot(nY, nZ);
		const inner = [y + nY / l * depth, z + nZ / l * depth];
		pts.push({ y, z, iy: inner[0], iz: inner[1], n: [0, nY / l, nZ / l] });
	}
	for (let j = 0; j < nz; j++) {
		const a = pts[j], b = pts[j + 1];
		// underside
		face(B, [x - halfW, a.iy, a.iz], [x + halfW, a.iy, a.iz], [x + halfW, b.iy, b.iz], [x - halfW, b.iy, b.iz], a.n, STONE);
		// sides
		face(B, [x - halfW, a.y, a.z], [x - halfW, a.iy, a.iz], [x - halfW, b.iy, b.iz], [x - halfW, b.y, b.z], [-1, 0, 0], STONE);
		face(B, [x + halfW, a.iy, a.iz], [x + halfW, a.y, a.z], [x + halfW, b.y, b.z], [x + halfW, b.iy, b.iz], [1, 0, 0], STONE);
	}
}

// a pilaster on a wall face at z (dir = +1 into the room from the painting wall, -1 from the window wall)
function pilaster(B, x, zFace, dir) {
	const w = 0.28, dpt = 0.16;
	const z0 = zFace, z1 = zFace + dir * dpt;
	box(B, x - w, 0, z0, x + w, C.spring - 0.30, z1, STONE);
	// base
	box(B, x - w - 0.06, 0, z0, x + w + 0.06, 0.32, zFace + dir * (dpt + 0.05), STONE);
	// capital, a little wider, with a thin abacus
	box(B, x - w - 0.05, C.spring - 0.30, z0, x + w + 0.05, C.spring - 0.10, zFace + dir * (dpt + 0.05), STONE);
	box(B, x - w - 0.10, C.spring - 0.10, z0, x + w + 0.10, C.spring, zFace + dir * (dpt + 0.10), STONE);
}

// a rosette hanging from the crown
function rosette(B, x) {
	const y = vaultY(C.zc);
	const prof = [
		[0.0, y - 0.13, 1], [0.05, y - 0.125], [0.12, y - 0.10], [0.16, y - 0.06, 1],
		[0.22, y - 0.05], [0.30, y - 0.075], [0.40, y - 0.06], [0.48, y - 0.03, 1],
		[0.55, y - 0.035], [0.70, y - 0.025], [0.82, y - 0.012, 1], [0.95, y + 0.03]
	];
	B.lathe(prof, x, C.zc, 48, { mat: () => CREAM });
	// eight leaves of the rosette as raised ovals
	for (let k = 0; k < 8; k++) {
		const a = k * Math.PI / 4;
		const cx = x + Math.cos(a) * 0.32, cz = C.zc + Math.sin(a) * 0.32;
		B.save();
		B.translate(cx, y - 0.07, cz);
		B.rotateY(-a);
		B.curMat = CREAM;
		B.ellipsoid([0, 0, 0], [0.13, 0.03, 0.06], 6, 10);
		B.restore();
	}
}

function addDetails(B) {

	B.curMat = STONE;

	// cornice along both walls where the vault springs
	for (const [zf, dir] of [[C.z0, 1], [C.z1, -1]]) {
		box(B, 14.35, C.spring - 0.12, zf, C.x1, C.spring, zf + dir * 0.10, STONE);
		box(B, 14.35, C.spring - 0.04, zf, C.x1, C.spring + 0.05, zf + dir * 0.18, STONE);
	}

	// skirting along both walls
	for (const [zf, dir] of [[C.z0, 1], [C.z1, -1]]) {
		box(B, 14.35, 0, zf, C.x1, 0.42, zf + dir * 0.12, STONE);
		box(B, 14.35, 0.42, zf, C.x1, 0.50, zf + dir * 0.07, STONE);
	}

	// a rib and a pair of pilasters at every pier
	for (const x of piers) {
		rib(B, x, 0.24, 0.16);
		pilaster(B, x, C.z0, 1);
		pilaster(B, x, C.z1, -1);
	}

	// stronger arches framing the junction and the far end
	for (const x of [14.35 + 0.28, C.x1 - 0.28]) {
		rib(B, x, 0.28, 0.22);
		pilaster(B, x, C.z0, 1);
		pilaster(B, x, C.z1, -1);
	}

	// a rosette at the crown of every bay
	for (const x of winCentres) {
		rosette(B, x);
	}
}


/* ===========================================================
 * WINDOW FRAMES (black metal, small panes, radial fanlight)
 * ===========================================================
 */

function addWindowFrames(B) {

	const zf = C.z1 + WALL;           // in the middle of the wall
	const za = zf - 0.04, zb = zf + 0.04;
	const st = (x0, y0, x1, y1) => box(B, x0, y0, za, x1, y1, zb, STEEL);
	const R = WIN.halfW;

	const ringBar = (xc, r0, r1, a0, a1, steps) => {
		const P = (a, r, z) => [xc + r * Math.cos(a), WIN.spring + r * Math.sin(a), z];
		for (let i = 0; i < steps; i++) {
			const t0 = a0 + (a1 - a0) * i / steps, t1 = a0 + (a1 - a0) * (i + 1) / steps;
			face(B, P(t0, r0, za), P(t1, r0, za), P(t1, r1, za), P(t0, r1, za), [0, 0, -1], STEEL);
			face(B, P(t0, r1, zb), P(t1, r1, zb), P(t1, r0, zb), P(t0, r0, zb), [0, 0, 1], STEEL);
		}
	};

	for (const xc of winCentres) {
		const x0 = xc - R, x1 = xc + R;
		st(x0, WIN.sill, x0 + 0.07, WIN.spring);
		st(x1 - 0.07, WIN.sill, x1, WIN.spring);
		st(x0, WIN.sill, x1, WIN.sill + 0.07);
		st(x0, WIN.spring - 0.04, x1, WIN.spring + 0.04);
		// four columns of panes
		for (const f of [-0.5, 0, 0.5]) st(xc + f * R - 0.022, WIN.sill, xc + f * R + 0.022, WIN.spring);
		// rows of panes
		const rows = 6;
		for (let k = 1; k < rows; k++) {
			const y = WIN.sill + (WIN.spring - WIN.sill) * k / rows;
			st(x0, y - 0.02, x1, y + 0.02);
		}
		// fanlight: outer frame, an inner ring and radial bars
		ringBar(xc, R - 0.07, R, 0, Math.PI, 32);
		ringBar(xc, 0.42, 0.46, 0, Math.PI, 20);
		for (let k = 1; k < 6; k++) {
			const a = Math.PI * k / 6;
			const c = Math.cos(a), s = Math.sin(a), t = 0.02;
			const p = (r, side) => [xc + c * r - s * t * side, WIN.spring + s * r + c * t * side];
			face(B, [...p(0.44, -1), za], [...p(R - 0.05, -1), za], [...p(R - 0.05, 1), za], [...p(0.44, 1), za], [0, 0, -1], STEEL);
			face(B, [...p(0.44, 1), zb], [...p(R - 0.05, 1), zb], [...p(R - 0.05, -1), zb], [...p(0.44, -1), zb], [0, 0, 1], STEEL);
		}
	}
}

// glass panes for the windows: triangles plus the facing normal
function windowGlass() {
	const tris = [];
	const z = C.z1 + WALL;
	for (const xc of winCentres) {
		const x0 = xc - WIN.halfW, x1 = xc + WIN.halfW;
		tris.push([x0, WIN.sill, z], [x1, WIN.sill, z], [x1, WIN.spring, z], [x0, WIN.sill, z], [x1, WIN.spring, z], [x0, WIN.spring, z]);
		for (let i = 0; i < 24; i++) {
			const a0 = Math.PI * i / 24, a1 = Math.PI * (i + 1) / 24;
			tris.push([xc, WIN.spring, z],
				[xc + WIN.halfW * Math.cos(a0), WIN.spring + WIN.halfW * Math.sin(a0), z],
				[xc + WIN.halfW * Math.cos(a1), WIN.spring + WIN.halfW * Math.sin(a1), z]);
		}
	}
	return tris;
}


/* ===========================================================
 * THE FAR DOOR (same design as the entrance)
 * ===========================================================
 */

// place the entrance door design at the far end: local x 7 -> z 53,
// local z (towards the room) -> -x
function atFarDoor(B, fn) {
	B.save();
	B.translate(C.x1 + WALL, 0, C.zc - 7.0);
	B.rotateY(-Math.PI / 2);
	fn();
	B.restore();
}

function addFarDoor(B) {
	atFarDoor(B, () => {
		entrance.addSurround(B);
		// (the two leaves are drawn by fardoor.js, so they can open)
		entrance.addFrames(B, 'fixed');
	});
}

// the fanlight's glass ('fixed'), or one leaf's ('left', 'right')
function farDoorGlass(part) {
	const local = entrance.glassPanes(part || 'fixed');
	// local (x, y, z) -> world (C.x1 + WALL - z, y, C.zc - 7 + x)
	return local.map(([x, y, z]) => [C.x1 + WALL - z, y, C.zc - 7.0 + x]);
}


/* ===========================================================
 * EVERYTHING
 * ===========================================================
 */

function addWing(B) {
	addShell(B);
	addDetails(B);
	addWindowFrames(B);
	addFarDoor(B);
	B.curMat = [0, 0, 0];
}

// the far door's hinges, in gallery metres: the left leaf (as seen from
// the corridor) hangs at the z1 side, the right one at the z0 side
const FAR_DOOR = {
	x: C.x1 + WALL,          // the door's plane
	zLo: C.zc - entrance.DOOR.r,
	zHi: C.zc + entrance.DOOR.r
};

/* ===========================================================
 * DAYLIGHT THROUGH THE WINDOWS (GLSL)
 * ===========================================================
 *
 * The windows face away from the sun, so the light that comes in is
 * soft daylight from the bright sky over the garden: gentle window
 * shapes on the floor and the opposite wall, with blurred shadows of
 * the glazing bars, and a glow that fades with distance from the glass.
 */

const f4 = (x) => x.toFixed(4);

function windowLightGLSL() {
	return `
	const vec3 WIN_SKY = vec3(0.0, 0.58, 0.81);

	float winBar(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the window wall is at (x, y) on its plane, 0..1
	float winOpen(vec2 q, float soft) {
		float k = floor((q.x - ${f4(WIN.first)}) / ${f4(WIN.pitch)} + 0.5);
		if (k < 0.0 || k > ${f4(WIN.count - 1)}) return 0.0;
		float dx = q.x - (${f4(WIN.first)} + k * ${f4(WIN.pitch)});
		float side = 1.0 - smoothstep(${f4(WIN.halfW)} - soft, ${f4(WIN.halfW)} + soft, abs(dx));
		float sill = smoothstep(${f4(WIN.sill)} - soft, ${f4(WIN.sill)} + soft, q.y);
		float r = length(vec2(dx, q.y - ${f4(WIN.spring)}));
		float head = q.y < ${f4(WIN.spring)} ? 1.0 : 1.0 - smoothstep(${f4(WIN.halfW)} - soft, ${f4(WIN.halfW)} + soft, r);
		float open = side * sill * head;
		// the black glazing bars, softly
		float cover = 0.0;
		cover = max(cover, winBar(abs(dx), 0.022, soft));
		cover = max(cover, winBar(abs(abs(dx) - ${f4(WIN.halfW * 0.5)}), 0.022, soft));
		float rowH = ${f4((WIN.spring - WIN.sill) / 6)};
		float ry = (q.y - ${f4(WIN.sill)}) / rowH;
		cover = max(cover, q.y < ${f4(WIN.spring)} ? winBar(abs(fract(ry + 0.5) - 0.5) * rowH, 0.02, soft) : 0.0);
		cover = max(cover, q.y > ${f4(WIN.spring)} ? winBar(abs(r - 0.44), 0.02, soft) : 0.0);
		return open * (1.0 - cover * 0.75);
	}

	// daylight reaching point p from the windows
	float windowLight(vec3 p, vec3 n) {
		if (p.x < ${f4(C.x0)} || p.z < ${f4(C.z0 - 0.1)} || p.z > ${f4(C.z1)}) return 0.0;
		float ndl = max(dot(n, WIN_SKY), 0.0);
		if (ndl <= 0.0) return 0.0;
		float tIn = (${f4(C.z1)} - p.z) / WIN_SKY.z;
		float tOut = (${f4(C.z1 + 2 * WALL)} - p.z) / WIN_SKY.z;
		vec3 a = p + WIN_SKY * tIn;
		vec3 b = p + WIN_SKY * tOut;
		float soft = 0.03 + 0.05 * tIn;
		float open = winOpen(vec2(a.x, a.y), soft) * winOpen(vec2(b.x, b.y), soft);
		return open * ndl;
	}

	// a small hidden lamp in the crown of each niche, lighting the
	// statue and the curved back from above and slightly in front
	vec3 nicheLamp(vec3 p) {
		float best = 1e3;
		vec3 lamp = vec3(0.0);
		${NICHE_X.map((x) => `{ float d = abs(p.x - ${f4(x)}); if (d < best) { best = d; lamp = vec3(${f4(x)}, ${f4(NICHE.spring + 0.55)}, ${f4(C.z0 - 0.15)}); } }`).join('\n\t\t')}
		return lamp;
	}

	float nicheLight(vec3 p, vec3 n) {
		if (p.z > ${f4(C.z0 + 1.6)} || p.z < ${f4(C.z0 - NICHE.r - 0.1)} || p.x < ${f4(C.x0)}) return 0.0;
		vec3 lamp = nicheLamp(p);
		vec3 d = lamp - p;
		float dist = length(d);
		vec3 L = d / dist;
		// a cone pointing down into the niche
		float cone = smoothstep(0.35, 0.75, dot(-L, normalize(vec3(0.0, -1.0, 0.35))));
		float inside = 1.0 - smoothstep(${f4(NICHE.r)}, ${f4(NICHE.r + 0.5)}, abs(p.x - lamp.x));
		return max(dot(n, L), 0.0) * cone * inside / (1.0 + 0.35 * dist * dist);
	}

	// soft general daylight in the corridor, strongest near the glass
	float corridorGlow(vec3 p) {
		if (p.x < ${f4(C.x0 - 1.0)}) return 0.0;
		float inC = smoothstep(${f4(C.z0 - 1.5)}, ${f4(C.z0)}, p.z) * smoothstep(${f4(C.x0 - 1.0)}, ${f4(C.x0 + 1.0)}, p.x);
		float near = 0.55 + 0.45 * smoothstep(${f4(C.z0)}, ${f4(C.z1)}, p.z);
		return inC * near;
	}`;
}

module.exports = {
	wallWithHoles,
	windowLightGLSL,
	addWing,
	windowGlass,
	farDoorGlass,
	atFarDoor,
	FAR_DOOR,
	vaultY,
	C,
	NICHE_X,
	NICHE,
	NICHE_PLINTH_TOP,
	NICHE_STATUE_Z,
	WIN,
	winCentres,
	piers,
	PAINTING_X,
	HEIGHT
};

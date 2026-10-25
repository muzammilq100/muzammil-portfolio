'use strict';

/*
 * THE CLOISTER GARDEN
 * -------------------
 * Seen through the big windows of the side corridor: an old Italian
 * cloister on a bright spring day, after the Chiostro della Magnolia
 * at the Basilica del Santo in Padua.
 *
 *   - arcades of round arches on red marble columns, standing on a
 *     low parapet, on three sides; the corridor closes the fourth
 *   - warm brick walls with a string course, round oculi and shuttered
 *     windows above, and a raised loggia in the middle of the far side
 *   - a brick path round the edge, gravel paths crossing in the middle,
 *     a Venetian stone wellhead with an iron overthrow at the centre
 *   - four lawns edged with clipped box, a big magnolia, a row of
 *     cypresses, flowering shrubs and lemon trees in terracotta pots
 *   - the domes and bell towers of the basilica rising behind the roofs
 *
 * The sun comes from behind the corridor, so the far side of the garden
 * is in full light and the corridor's own shadow lies across the near
 * path. Every surface tests the sun against the buildings, the arcade
 * openings and the tree crowns, so the arches throw arch shaped light
 * on the arcade floors and the magnolia drops dappled shade.
 *
 * Trees and shrubs are clouds of small leaf clusters (res/garden/foliage.png)
 * that always face the visitor, each one lit by where it sits in its crown.
 *
 * Gallery coordinates: x across, z along the main hall, y up, metres.
 */

const geom = require('./geom');
const quality = require('./quality');
const { wallWithHoles, C } = require('./wing');


/* ===========================================================
 * LAYOUT
 * ===========================================================
 */

const T = 0.28;                       // half thickness of the garden's walls

// The garden is exactly as long as the corridor: closed on the west and
// east by plain houses whose fronts line up with the corridor's ends,
// and on the north by an arcade with its walk behind it. The corridor
// itself closes the south side, so no walkway runs into its windows.
const G = {
	westBack: 14.4,                   // back of the west house (the main hall stands behind it)
	westCol: 15.0 - T,                // centre line of the west house's front wall
	eastCol: 37.4 + T,                // centre line of the east house's front wall
	eastBack: 41.8,                   // back of the east house
	south: C.z1 + 0.7,                // outside face of the corridor
	northCol: C.z1 + 0.7 + 16.0,      // north column line
	northBack: C.z1 + 0.7 + 19.0,     // back wall of the north walk
	cx: (15.0 + 37.4) / 2,            // centre of the garden
	cz: (C.z1 + 0.7 + C.z1 + 0.7 + 16.0 - T) / 2
};

// the open courtyard, between the faces of the arcade walls
const YARD = {
	x0: G.westCol + T,
	x1: G.eastCol - T,
	z0: G.south,
	z1: G.northCol - T
};

const SPRING = 3.3;                   // arches spring from the capitals
const PARAPET = 0.92;                 // low wall the columns stand on
const CEIL = 5.6;                     // arcade ceiling
const STRING = 6.0;                   // string course
const EAVE_N = 11.9;                  // north range
const EAVE_SIDE = 9.6;                // west and east ranges
const LOGGIA = { x0: G.cx - 2.9, x1: G.cx + 2.9, top: 14.4 };

const NORTH_BAYS = 7;
const SIDE_BAYS = 4;
const NORTH_PITCH = (G.eastCol - G.westCol) / NORTH_BAYS;
const SIDE_PITCH = (G.northCol - G.south) / SIDE_BAYS;
const OPEN_NORTH = 3;                 // the bay where the cross path goes through
const CORNER = 0.26;                  // extra width of the corner piers

const PATH_EDGE = 1.4;                // perimeter path width
const CROSS = 1.1;                    // half width of the cross paths
const CIRCLE = 3.0;                   // the round space at the centre

// garden sun: from behind the corridor, a little from the east
const SUN = (() => {
	const v = [0.30, 0.82, -0.49];
	const l = Math.hypot(...v);
	return v.map((c) => c / l);
})();

// kinds of surface
const K = {
	GROUND: 0, BRICK: 1, STONE: 2, MARBLE: 3, HEDGE: 4, POT: 5, ROOF: 6,
	SHUTTER: 7, PANE: 8, PLASTER: 9, BARK: 10, IRON: 11, SKY: 12, LEAD: 13,
	FARBRICK: 14, DARK: 15, SOIL: 16
};


/* ===========================================================
 * TREES
 * ===========================================================
 */

// crowns: centre, radii, leaf cell, leaf colour, blossom colour
const CROWNS = [];

// positions relative to the centre of the garden
const at = (dx, y, dz) => [G.cx + dx, y, G.cz + dz];

// the magnolia stands in the far bed on the right (seen from the corridor)
const MAG_C = at(-5.9, 0, 3.4);
const MS = 0.85;
const MAGNOLIA = { c: [MAG_C[0], 4.6 * MS + 0.5, MAG_C[2]], r: [5.0 * MS, 3.6 * MS, 4.5 * MS] };
// the magnolia's crown is a few overlapping masses, so it is broad and uneven
const MAG_BLOBS = [
	{ d: [0, 4.4, 0], r: [3.9, 2.6, 3.6], n: 230 },
	{ d: [-2.7, 4.0, -1.2], r: [2.6, 2.1, 2.4], n: 105 },
	{ d: [2.7, 4.5, -1.6], r: [2.5, 2.2, 2.3], n: 105 },
	{ d: [0.8, 6.9, 0.8], r: [2.6, 2.0, 2.5], n: 105 },
	{ d: [-1.6, 6.1, 2.0], r: [2.2, 1.9, 2.0], n: 80 },
	{ d: [2.3, 3.4, 1.8], r: [2.0, 1.5, 1.9], n: 60 }
].map((b) => ({
	c: [MAG_C[0] + b.d[0] * MS, b.d[1] * MS + 0.5, MAG_C[2] + b.d[2] * MS],
	r: b.r.map((v) => v * MS),
	n: b.n
}));
for (const b of MAG_BLOBS) {
	CROWNS.push({ ...b, cell: 0, leaf: [0.50, 0.70, 0.46], bloom: [1, 1, 1], size: [0.95, 1.35], magnolia: 1, shadow: 1 });
}

const CYPRESS_DX = [3.6, 6.3, 9.0];
for (const dx of CYPRESS_DX) {
	const h = 8.6 + (dx % 1.7) * 0.6;
	CROWNS.push({ c: at(dx, h / 2 + 0.5, 5.2), r: [0.9, h / 2, 0.9], cell: 1, leaf: [0.50, 0.64, 0.50], bloom: [1, 1, 1], n: 180, size: [0.72, 0.98], spindle: 1, shadow: 1 });
}

const SHRUBS = [
	{ d: [-8.4, -4.0], bloom: [1.0, 0.62, 0.78] },
	{ d: [-3.6, -4.6], bloom: [1.0, 0.98, 0.94] },
	{ d: [3.8, -4.3], bloom: [1.0, 0.98, 0.94] },
	{ d: [8.5, -4.0], bloom: [1.0, 0.58, 0.72] }
].map((s) => ({ x: G.cx + s.d[0], z: G.cz + s.d[1], bloom: s.bloom }));
for (const s of SHRUBS) {
	CROWNS.push({ c: [s.x, 0.95, s.z], r: [1.25, 0.95, 1.1], cell: 3, leaf: [0.70, 0.86, 0.58], bloom: s.bloom, n: 80, size: [0.55, 0.8], shadow: 1 });
}

// lemon trees in pots on the diagonals round the wellhead
const LEMONS = [45, 135, 225, 315].map((d) => {
	const a = d * Math.PI / 180;
	return [G.cx + Math.cos(a) * 2.3, G.cz + Math.sin(a) * 2.3];
});
for (const [x, z] of LEMONS) {
	CROWNS.push({ c: [x, 1.85, z], r: [0.62, 0.55, 0.62], cell: 3, leaf: [0.78, 0.95, 0.55], bloom: [1.25, 1.0, 0.25], n: 36, size: [0.32, 0.42], shadow: 1 });
}

// low flowering plants along the foot of the houses and the parapet
const BORDERS = [];
{
	const strip = (x0, z0, x1, z1, skipA, skipB) => {
		const L = Math.hypot(x1 - x0, z1 - z0);
		const n = Math.floor(L / 0.9);
		for (let i = 0; i <= n; i++) {
			const t = i / n;
			const x = x0 + (x1 - x0) * t, z = z0 + (z1 - z0) * t;
			if (skipA !== undefined && Math.abs((x1 !== x0 ? x : z) - skipA) < skipB) continue;
			BORDERS.push([x, z]);
		}
	};
	const o = 0.45;
	strip(YARD.x0 + o, YARD.z0 + 1.2, YARD.x0 + o, YARD.z1 - o, G.cz, 1.0);
	strip(YARD.x1 - o, YARD.z0 + 1.2, YARD.x1 - o, YARD.z1 - o, G.cz, 1.0);
	strip(YARD.x0 + o, YARD.z1 - o, YARD.x1 - o, YARD.z1 - o, G.cx, 1.9);
}


/* ===========================================================
 * GEOMETRY
 * ===========================================================
 */

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const norm3 = (v) => {
	const l = Math.hypot(v[0], v[1], v[2]) || 1;
	return [v[0] / l, v[1] / l, v[2] / l];
};

function face(B, a, b, c, d, n, m) {
	const ia = B.vert(a, n, m);
	const ib = B.vert(b, n, m);
	const ic = B.vert(c, n, m);
	const id = B.vert(d, n, m);
	B.tri(ia, ib, ic);
	B.tri(ia, ic, id);
}

function box(B, x0, y0, z0, x1, y1, z1, kind) {
	B.box(Math.min(x0, x1), Math.min(y0, y1), Math.min(z0, z1),
		Math.max(x0, x1), Math.max(y0, y1), Math.max(z0, z1), [kind, 0, 0]);
}

// a builder that maps a wall's local (u, y, w) into the world
function framed(B, toWorld, toWorldN) {
	return {
		vert: (p, n, m) => B.vert(toWorld(p), toWorldN(n), m),
		tri: B.tri
	};
}

const FRAMES = {
	// front faces -z, u = x
	north: [
		(p) => [p[0], p[1], G.northCol - p[2]],
		(n) => [n[0], n[1], -n[2]]
	],
	// front faces +x, u = z
	west: [
		(p) => [G.westCol + p[2], p[1], p[0]],
		(n) => [n[2], n[1], n[0]]
	],
	// front faces -x, u = z
	east: [
		(p) => [G.eastCol - p[2], p[1], p[0]],
		(n) => [-n[2], n[1], n[0]]
	]
};

// the bays of one arcade: [u0, u1] of each opening
function bays(start, pitch, count, firstInset, lastInset) {
	const out = [];
	for (let k = 0; k < count; k++) {
		const a = start + k * pitch + (k === 0 ? firstInset : 0.02);
		const b = start + (k + 1) * pitch - (k === count - 1 ? lastInset : 0.02);
		out.push([a, b, start + (k + 0.5) * pitch]);
	}
	return out;
}

const NORTH_ARCH = bays(G.westCol, NORTH_PITCH, NORTH_BAYS, T + CORNER, T + CORNER);
const SIDE_BAY = bays(G.south, SIDE_PITCH, SIDE_BAYS, 0.32, T + CORNER);

// column positions along each arcade (u)
const BASILICA_SHIFT = [G.cx - 32.35, G.northCol - 77.0];

const NORTH_COLS = Array.from({ length: NORTH_BAYS - 1 }, (_, k) => G.westCol + (k + 1) * NORTH_PITCH);

const archRadius = (a) => (a[1] - a[0]) / 2 - 0.2;
const archCentre = (a) => (a[0] + a[1]) / 2;

function archHole(a, open) {
	const c = archCentre(a), r = archRadius(a);
	return {
		u0: a[0],
		u1: a[1],
		bottom: open ? 0 : PARAPET,
		head: (u) => {
			const d = Math.abs(u - c);
			return d < r ? SPRING + Math.sqrt(r * r - d * d) : SPRING;
		},
		step: 0.05
	};
}

function roundHole(c, y, r) {
	return {
		u0: c - r,
		u1: c + r,
		bot: (u) => y - Math.sqrt(Math.max(0, r * r - (u - c) * (u - c))),
		head: (u) => y + Math.sqrt(Math.max(0, r * r - (u - c) * (u - c))),
		step: 0.04,
		mat: [K.STONE, 0, 0]
	};
}

function rectHole(c, w, y0, y1) {
	return { u0: c - w / 2, u1: c + w / 2, bottom: y0, head: () => y1, step: 0.5, mat: [K.STONE, 0, 0] };
}

// one arcade wall with its storey above, plus everything fixed to it
function arcadeWall(B, side, o) {

	const [toW, toN] = FRAMES[side];
	const F = framed(B, toW, toN);

	const holes = [];
	o.arches.forEach((a, k) => holes.push(archHole(a, k === o.open)));

	// every window: centre, sill, head, width; doors have no shutters
	const wins = [];
	for (const a of (o.bays || o.arches)) {
		const c = archCentre(a);
		if (o.oculi) holes.push(roundHole(c, 6.85, 0.3));
		wins.push({ c, y0: o.win[0], y1: o.win[1], w: 1.05 });
	}
	for (const wdw of (o.extraWindows || [])) wins.push(wdw);
	for (const wdw of wins) holes.push(rectHole(wdw.c, wdw.w, wdw.y0, wdw.y1));
	for (const extra of (o.extraHoles || [])) holes.push(extra);

	wallWithHoles(F, {
		u0: o.u0, u1: o.u1, w0: -T, w1: T,
		top: o.top,
		holes,
		mat: [K.BRICK, 0, 0],
		revealMat: [K.BRICK, 0, 0],
		noEnds: o.noEnds,
		cuts: o.cuts,
		topStep: 0.25
	});

	// local helpers through the frame
	const lbox = (u0, y0, w0, u1, y1, w1, kind) => {
		const a = toW([u0, y0, w0]), b = toW([u1, y1, w1]);
		box(B, a[0], a[1], a[2], b[0], b[1], b[2], kind);
	};
	const lface = (p, q, r, s, n, kind) => face(F, p, q, r, s, n, [kind, 0, 0]);

	// arch rings: a stone band round each arch, just proud of the wall
	for (const a of o.arches) {
		const c = archCentre(a), r = archRadius(a);
		const N = 28;
		for (const w of [T, -T]) {
			const s = w > 0 ? 1 : -1;
			const ww = w + s * 0.025;
			for (let i = 0; i < N; i++) {
				const t0 = Math.PI * i / N, t1 = Math.PI * (i + 1) / N;
				const p = (t, rr) => [c + Math.cos(t) * rr, SPRING + Math.sin(t) * rr];
				const a0 = p(t0, r), a1 = p(t1, r), b0 = p(t0, r + 0.26), b1 = p(t1, r + 0.26);
				lface([a0[0], a0[1], ww], [a1[0], a1[1], ww], [b1[0], b1[1], ww], [b0[0], b0[1], ww], [0, 0, s], K.STONE);
				// outer edge of the band
				const nx = Math.cos((t0 + t1) / 2), ny = Math.sin((t0 + t1) / 2);
				lface([b0[0], b0[1], w], [b1[0], b1[1], w], [b1[0], b1[1], ww], [b0[0], b0[1], ww], [nx, ny, 0], K.STONE);
			}
		}
	}

	// parapet coping
	o.arches.forEach((a, k) => {
		if (k === o.open) return;
		lbox(a[0] - 0.02, PARAPET, -T - 0.05, a[1] + 0.02, PARAPET + 0.09, T + 0.05, K.STONE);
	});

	// string course, sill band and cornice
	lbox(o.u0, STRING, -T, o.u1, STRING + 0.18, T + 0.09, K.STONE);
	lbox(o.u0, o.win[0] - 0.12, T - 0.01, o.u1, o.win[0], T + 0.06, K.STONE);
	if (o.cornice) {
		for (const [c0, c1, y] of o.cornice) {
			lbox(c0, y - 0.22, T - 0.01, c1, y, T + 0.16, K.STONE);
			lbox(c0, y, T - 0.01, c1, y + 0.16, T + 0.42, K.STONE);
		}
	}

	// windows: dark glass set back, green shutters folded open, a stone frame
	for (const { c, y0, y1, w, door } of wins) {
		const h = w / 2;
		lface([c - h - 0.01, y0, 0.06], [c + h + 0.01, y0, 0.06], [c + h + 0.01, y1, 0.06], [c - h - 0.01, y1, 0.06], [0, 0, 1], door ? K.DARK : K.PANE);
		if (door) {
			// a plain stone frame and two panelled leaves
			lbox(c - h - 0.16, 0, T - 0.01, c - h, y1 + 0.16, T + 0.07, K.STONE);
			lbox(c + h, 0, T - 0.01, c + h + 0.16, y1 + 0.16, T + 0.07, K.STONE);
			lbox(c - h - 0.16, y1, T - 0.01, c + h + 0.16, y1 + 0.2, T + 0.09, K.STONE);
			lbox(c - h, 0, 0.07, c + h, y1 - 0.02, 0.12, K.SHUTTER);
			lbox(c - 0.012, 0, 0.12, c + 0.012, y1 - 0.02, 0.14, K.DARK);
			continue;
		}
		for (const s of [-1, 1]) {
			const e = c + s * h;
			lbox(e + s * 0.02, y0 + 0.02, T + 0.02, e + s * (h + 0.025), y1 - 0.02, T + 0.06, K.SHUTTER);
		}
		lbox(c - h - 0.09, y1, T - 0.01, c + h + 0.09, y1 + 0.16, T + 0.05, K.STONE);
		lbox(c - h - 0.09, y0 - 0.1, T - 0.01, c + h + 0.09, y0, T + 0.09, K.STONE);
		// glazing bars
		lbox(c - 0.015, y0, 0.06, c + 0.015, y1, 0.09, K.SHUTTER);
		lbox(c - h, (y0 + y1) / 2 - 0.015, 0.06, c + h, (y0 + y1) / 2 + 0.015, 0.09, K.SHUTTER);
	}

	// oculi: dark inside
	if (o.oculi) {
		for (const a of (o.bays || o.arches)) {
			const c = archCentre(a);
			lface([c - 0.31, 6.54, 0.0], [c + 0.31, 6.54, 0.0], [c + 0.31, 7.16, 0.0], [c - 0.31, 7.16, 0.0], [0, 0, 1], K.DARK);
		}
	}

	// columns on the parapet
	for (const u of o.cols) {
		const base = PARAPET + 0.09;
		const p = toW([u, 0, 0]);
		box(B, p[0] - 0.24, base, p[2] - 0.24, p[0] + 0.24, base + 0.12, p[2] + 0.24, K.MARBLE);
		B.lathe([
			[0.23, base + 0.12, 1],
			[0.24, base + 0.17],
			[0.20, base + 0.24],
			[0.215, base + 0.28],
			[0.17, base + 0.34, 1],
			[0.165, base + 0.6],
			[0.155, SPRING - 0.5],
			[0.15, SPRING - 0.38, 1],
			[0.175, SPRING - 0.34, 1],
			[0.17, SPRING - 0.3],
			[0.2, SPRING - 0.22],
			[0.27, SPRING - 0.15],
			[0.29, SPRING - 0.12, 1]
		], p[0], p[2], 18, { mat: () => [K.MARBLE, 0, 0] });
		box(B, p[0] - 0.29, SPRING - 0.12, p[2] - 0.29, p[0] + 0.29, SPRING + 0.01, p[2] + 0.29, K.STONE);
	}

	// arcade ceiling and back wall
	if (o.walk) o.walk(B);
}

function addArcades(B) {

	// north range: 7 bays, a raised loggia over the middle three
	const loggiaArches = [-1, 0, 1].map((k) => {
		const c = G.cx + k * 1.7;
		return {
			u0: c - 0.6, u1: c + 0.6, bottom: 11.0,
			head: (u) => 12.9 + Math.sqrt(Math.max(0, 0.36 - (u - c) * (u - c))),
			step: 0.04,
			mat: [K.STONE, 0, 0]
		};
	});

	arcadeWall(B, 'north', {
		u0: G.westCol - T, u1: G.eastCol + T,
		top: (u) => (u > LOGGIA.x0 + 1e-6 && u < LOGGIA.x1 - 1e-6 ? LOGGIA.top : EAVE_N),
		cuts: [LOGGIA.x0, LOGGIA.x0 + 1e-5, LOGGIA.x1 - 1e-5, LOGGIA.x1],
		arches: NORTH_ARCH,
		open: OPEN_NORTH,
		cols: NORTH_COLS,
		oculi: true,
		win: [8.0, 9.9],
		extraHoles: loggiaArches,
		cornice: [
			[G.westCol - T - 3.3, LOGGIA.x0, EAVE_N],
			[LOGGIA.x1, G.eastCol + T + 3.3, EAVE_N],
			[LOGGIA.x0 - 0.2, LOGGIA.x1 + 0.2, LOGGIA.top]
		],
		walk: (B) => {
			// ceiling and back wall of the north walk
			box(B, YARD.x0, CEIL, G.northCol + T, YARD.x1, CEIL + 0.2, G.northBack, K.PLASTER);
			box(B, YARD.x0, 0, G.northBack, YARD.x1, CEIL, G.northBack + 0.3, K.PLASTER);
			// doors in the back wall
			for (const x of [G.cx - 7.2, G.cx, G.cx + 7.2]) {
				face(B, [x - 0.8, 0, G.northBack - 0.01], [x + 0.8, 0, G.northBack - 0.01], [x + 0.8, 2.9, G.northBack - 0.01], [x - 0.8, 2.9, G.northBack - 0.01], [0, 0, -1], [K.DARK, 0, 0]);
				box(B, x - 0.98, 0, G.northBack - 0.06, x + 0.98, 3.12, G.northBack, K.STONE);
				face(B, [x - 0.8, 0, G.northBack - 0.07], [x + 0.8, 0, G.northBack - 0.07], [x + 0.8, 2.9, G.northBack - 0.07], [x - 0.8, 2.9, G.northBack - 0.07], [0, 0, -1], [K.DARK, 0, 0]);
			}
		}
	});

	// loggia: dark behind the arches, little columns, a balustrade
	face(B, [LOGGIA.x0, 11.0, G.northCol + 0.2], [LOGGIA.x1, 11.0, G.northCol + 0.2], [LOGGIA.x1, 13.6, G.northCol + 0.2], [LOGGIA.x0, 13.6, G.northCol + 0.2], [0, 0, -1], [K.DARK, 0, 0]);
	box(B, LOGGIA.x0 + 0.3, 10.88, G.northCol - T - 0.06, LOGGIA.x1 - 0.3, 11.0, G.northCol - T + 0.1, K.STONE);

	// north range above the arcade, and its roof
	box(B, G.westBack, CEIL + 0.2, G.northBack, G.eastBack, EAVE_N, G.northBack + 3.4, K.BRICK);
	box(B, G.westBack, EAVE_SIDE, G.northCol - T, G.westCol - T, EAVE_N, G.northCol + T, K.BRICK);
	box(B, G.eastCol + T, EAVE_SIDE, G.northCol - T, G.eastBack, EAVE_N, G.northCol + T, K.BRICK);
	box(B, G.westBack, CEIL + 0.2, G.northCol + T + 0.12, G.eastBack, EAVE_N, G.northBack, K.BRICK);
	roof(B, [G.westBack - 0.5, EAVE_N + 0.16, G.northCol - T - 0.42], [LOGGIA.x0 - G.westBack + 0.5, 0, 0], [0, 2.6, 4.4], K.ROOF);
	roof(B, [LOGGIA.x1, EAVE_N + 0.16, G.northCol - T - 0.42], [G.eastBack + 0.5 - LOGGIA.x1, 0, 0], [0, 2.6, 4.4], K.ROOF);
	roof(B, [LOGGIA.x0 - 0.3, LOGGIA.top + 0.16, G.northCol - T - 0.42], [LOGGIA.x1 - LOGGIA.x0 + 0.6, 0, 0], [0, 1.4, 3.0], K.ROOF);
	// ends of the loggia roof
	tri(B, [LOGGIA.x0 - 0.3, LOGGIA.top + 0.16, G.northCol - T - 0.42], [LOGGIA.x0 - 0.3, LOGGIA.top + 1.56, G.northCol - T + 2.58], [LOGGIA.x0 - 0.3, LOGGIA.top + 0.16, G.northCol - T + 2.58], [-1, 0, 0], K.BRICK);
	tri(B, [LOGGIA.x1 + 0.3, LOGGIA.top + 0.16, G.northCol - T - 0.42], [LOGGIA.x1 + 0.3, LOGGIA.top + 1.56, G.northCol - T + 2.58], [LOGGIA.x1 + 0.3, LOGGIA.top + 0.16, G.northCol - T + 2.58], [1, 0, 0], K.BRICK);
	box(B, LOGGIA.x0, EAVE_N, G.northCol + T, LOGGIA.x1, LOGGIA.top, G.northCol + 2.6, K.BRICK);
	// chimneys
	for (const [x, z] of [[G.cx - 9.8, G.northBack + 0.6], [G.cx + 9.4, G.northBack + 0.4], [G.cx - 4.6, G.northBack + 1.0]]) {
		box(B, x - 0.4, 12.5, z - 0.4, x + 0.4, 15.4, z + 0.4, K.BRICK);
		box(B, x - 0.52, 15.4, z - 0.52, x + 0.52, 15.62, z + 0.52, K.STONE);
	}

	// west and east houses: plain fronts of three storeys, no walkways
	const side = (name, back, col) => {
		const dir = name === 'west' ? -1 : 1;
		const extra = [];
		SIDE_BAY.forEach((a, k) => {
			const c = archCentre(a);
			if (k === 1) extra.push({ c, y0: 0, y1: 2.9, w: 1.4, door: true });
			else extra.push({ c, y0: 1.0, y1: 2.75, w: 1.05 });
			extra.push({ c, y0: 3.85, y1: 5.45, w: 1.05 });
		});
		arcadeWall(B, name, {
			u0: G.south, u1: G.northCol - T,
			top: () => EAVE_SIDE,
			arches: [],
			bays: SIDE_BAY,
			cols: [],
			win: [7.45, 8.85],
			extraWindows: extra,
			noEnds: true,
			cornice: [[G.south, G.northCol - T, EAVE_SIDE]]
		});
		// the body of the house behind its front
		box(B, back, 0, G.south, col + dir * (T + 0.12), EAVE_SIDE, G.northBack + 0.3, K.BRICK);
		// a stone plinth along the foot of the front
		const fx = col - dir * T;
		box(B, fx, 0, G.south, fx - dir * 0.06, 0.55, G.northCol - T, K.STONE);
		// roof sloping up away from the garden
		const eaveX = col - dir * (T + 0.42);
		roof(B, [eaveX, EAVE_SIDE + 0.16, G.south], [0, 0, G.northCol - T - G.south], [back - eaveX + dir * 0.4, 1.9, 0], K.ROOF);
	};
	side('west', G.westBack, G.westCol);
	side('east', G.eastBack, G.eastCol);

	// the corridor seen from outside: plaster above the windows, a cornice, a roof
	const cx1 = C.x1 + 0.7;
	box(B, 13.65, 7.4, G.south - 0.02, cx1, 7.62, G.south + 0.14, K.STONE);
	box(B, 13.65, 10.4, G.south - 0.02, cx1, 10.6, G.south + 0.38, K.STONE);
	roof(B, [13.65, 10.6, G.south + 0.38], [cx1 - 13.65, 0, 0], [0, 2.2, -5.0], K.ROOF);
}

function tri(B, a, b, c, n, kind) {
	const m = [kind, 0, 0];
	B.tri(B.vert(a, n, m), B.vert(b, n, m), B.vert(c, n, m));
}

// a sloping roof: corner, along-the-eave vector, up-the-slope vector
function roof(B, o, u, v, kind) {
	const n = norm3([
		u[1] * v[2] - u[2] * v[1],
		u[2] * v[0] - u[0] * v[2],
		u[0] * v[1] - u[1] * v[0]
	]);
	const nn = n[1] < 0 ? n.map((c) => -c) : n;
	const p = (a, b) => [o[0] + u[0] * a + v[0] * b, o[1] + u[1] * a + v[1] * b, o[2] + u[2] * a + v[2] * b];
	face(B, p(0, 0), p(1, 0), p(1, 1), p(0, 1), nn, [kind, 0, 0]);
	// the eave edge
	const d = 0.08;
	face(B, p(0, 0), p(1, 0), [p(1, 0)[0], p(1, 0)[1] - d, p(1, 0)[2]], [p(0, 0)[0], p(0, 0)[1] - d, p(0, 0)[2]],
		norm3([-v[0], 0, -v[2]]), [kind, 0, 0]);
}


/* ----- ground ----- */

function addGround(B) {
	const x0 = G.westBack, x1 = G.eastBack, z0 = G.south, z1 = G.northBack;
	const nx = 36, nz = 22;
	const g = [];
	for (let i = 0; i <= nx; i++) {
		g.push([]);
		for (let j = 0; j <= nz; j++) {
			const p = [x0 + (x1 - x0) * i / nx, 0, z0 + (z1 - z0) * j / nz];
			g[i].push(B.vert(p, [0, 1, 0], [K.GROUND, 0, 0]));
		}
	}
	for (let i = 0; i < nx; i++) {
		for (let j = 0; j < nz; j++) {
			B.tri(g[i][j], g[i + 1][j], g[i + 1][j + 1]);
			B.tri(g[i][j], g[i + 1][j + 1], g[i][j + 1]);
		}
	}
}


/* ----- clipped box hedges round the four lawns ----- */

const HEDGE_W = 0.46, HEDGE_H = 0.58;
const HEDGE_PROFILE = [
	[-0.5, 0.0], [-0.52, 0.45], [-0.46, 0.78], [-0.3, 0.95], [0, 1.0],
	[0.3, 0.95], [0.46, 0.78], [0.52, 0.45], [0.5, 0.0]
];

function bedOutline(sx, sz, inset) {
	const a0 = CROSS + inset;
	const a1 = (sx > 0 ? YARD.x1 - G.cx : G.cx - YARD.x0) - PATH_EDGE - inset;
	const b0 = CROSS + inset;
	const b1 = (sz > 0 ? YARD.z1 - G.cz : G.cz - YARD.z0) - PATH_EDGE - inset;
	const R = CIRCLE + inset;
	const bc = Math.sqrt(R * R - a0 * a0);
	const ac = Math.sqrt(R * R - b0 * b0);
	const pts = [[a0, bc], [a0, b1], [a1, b1], [a1, b0], [ac, b0]];
	const t0 = Math.atan2(b0, ac), t1 = Math.atan2(bc, a0);
	for (let i = 1; i < 10; i++) {
		const t = t0 + (t1 - t0) * i / 10;
		pts.push([Math.cos(t) * R, Math.sin(t) * R]);
	}
	return pts.map(([a, b]) => [G.cx + sx * a, G.cz + sz * b]);
}

function hedgeSegment(B, a, b) {
	const dx = b[0] - a[0], dz = b[1] - a[1];
	const L = Math.hypot(dx, dz);
	const tx = dx / L, tz = dz / L;
	const px = -tz, pz = tx;
	const e = HEDGE_W * 0.5;
	const s0 = -e, s1 = L + e;
	const rows = [];
	const n = Math.max(1, Math.ceil((s1 - s0) / 1.0));
	for (let i = 0; i <= n; i++) {
		const s = s0 + (s1 - s0) * i / n;
		const row = [];
		for (let k = 0; k < HEDGE_PROFILE.length; k++) {
			const [q, h] = HEDGE_PROFILE[k];
			const kk = Math.min(HEDGE_PROFILE.length - 2, k);
			const prev = HEDGE_PROFILE[Math.max(0, k - 1)], next = HEDGE_PROFILE[Math.min(HEDGE_PROFILE.length - 1, k + 1)];
			const dq = (next[0] - prev[0]) * HEDGE_W, dh = (next[1] - prev[1]) * HEDGE_H;
			const nq = dh, nh = -dq;
			const l = Math.hypot(nq, nh) || 1;
			void kk;
			const p = [a[0] + tx * s + px * q * HEDGE_W, h * HEDGE_H, a[1] + tz * s + pz * q * HEDGE_W];
			const nrm = [px * (-nq / l), -nh / l, pz * (-nq / l)];
			row.push(B.vert(p, nrm[1] < -0.2 ? [px * Math.sign(q), 0.3, pz * Math.sign(q)] : nrm, [K.HEDGE, 0, 0]));
		}
		rows.push(row);
	}
	for (let i = 0; i < n; i++) {
		for (let k = 0; k < HEDGE_PROFILE.length - 1; k++) {
			B.tri(rows[i][k], rows[i + 1][k], rows[i + 1][k + 1]);
			B.tri(rows[i][k], rows[i + 1][k + 1], rows[i][k + 1]);
		}
	}
	// end caps
	for (const [i, s] of [[0, -1], [n, 1]]) {
		const r = rows[i];
		const c = B.vert(
			[a[0] + tx * (i ? s1 : s0), HEDGE_H * 0.5, a[1] + tz * (i ? s1 : s0)],
			[tx * s, 0, tz * s], [K.HEDGE, 0, 0]);
		for (let k = 0; k < r.length - 1; k++) B.tri(c, r[k], r[k + 1]);
	}
}

function addHedges(B) {
	for (const sx of [-1, 1]) {
		for (const sz of [-1, 1]) {
			const pts = bedOutline(sx, sz, 0.3);
			for (let i = 0; i < pts.length; i++) {
				hedgeSegment(B, pts[i], pts[(i + 1) % pts.length]);
			}
		}
	}
}


/* ----- the wellhead, pots and trunks ----- */

function addWellhead(B) {
	const x = G.cx, z = G.cz;
	const st = () => [K.STONE, 0, 0];
	B.lathe([[1.45, 0, 1], [1.45, 0.14, 1], [1.12, 0.14, 1], [1.12, 0.3, 1], [0.0, 0.3]], x, z, 8, { mat: st });
	B.lathe([
		[0.76, 0.3, 1], [0.8, 0.38, 1], [0.74, 0.44], [0.76, 0.7], [0.82, 0.9], [0.8, 1.02, 1],
		[0.88, 1.06, 1], [0.88, 1.18, 1], [0.6, 1.18, 1], [0.6, 0.98]
	], x, z, 24, { mat: st });
	B.lathe([[0.6, 0.98, 1], [0.0, 0.98]], x, z, 16, { mat: () => [K.DARK, 0, 0] });
	// iron overthrow with a pulley
	const iron = { mat: () => [K.IRON, 0, 0] };
	B.tube([[x - 0.72, 1.1, z], [x - 0.72, 1.9, z], [x - 0.7, 2.3, z]], () => 0.035, 8, 6, iron);
	B.tube([[x + 0.72, 1.1, z], [x + 0.72, 1.9, z], [x + 0.7, 2.3, z]], () => 0.035, 8, 6, iron);
	const arc = [];
	for (let i = 0; i <= 10; i++) {
		const t = Math.PI * i / 10;
		arc.push([x - Math.cos(t) * 0.7, 2.3 + Math.sin(t) * 0.45, z]);
	}
	B.tube(arc, () => 0.03, 20, 6, iron);
	B.tube([[x - 0.45, 2.25, z], [x, 2.38, z], [x + 0.45, 2.25, z]], () => 0.02, 8, 5, iron);
	B.ellipsoid([x, 2.32, z], [0.03, 0.13, 0.13], 6, 10, iron);
	// scrolls
	for (const s of [-1, 1]) {
		const pts = [];
		for (let i = 0; i <= 12; i++) {
			const t = i / 12 * Math.PI * 1.6;
			const r = 0.16 * (1 - i / 16);
			pts.push([x + s * (0.72 - 0.18 + Math.cos(t) * r * s * -1 + 0.0), 1.95 + Math.sin(t) * r, z]);
		}
		B.tube(pts, () => 0.016, 16, 5, iron);
	}
}

function addPots(B) {
	for (const [x, z] of LEMONS) {
		B.lathe([
			[0.26, 0, 1], [0.3, 0.06], [0.36, 0.42], [0.38, 0.5, 1], [0.44, 0.52, 1],
			[0.44, 0.64, 1], [0.38, 0.66, 1], [0.37, 0.6]
		], x, z, 20, { mat: () => [K.POT, 0, 0] });
		B.lathe([[0.37, 0.6, 1], [0, 0.6]], x, z, 12, { mat: () => [K.SOIL, 0, 0] });
		B.tube([[x, 0.6, z], [x + 0.02, 1.0, z - 0.01], [x - 0.01, 1.45, z + 0.02]], (u) => 0.045 - u * 0.02, 6, 6, { mat: () => [K.BARK, 0, 0] });
	}
}

function addTrunks(B) {
	const [cx, , cz] = MAGNOLIA.c;
	const rnd = mulberry(7);
	const stems = [
		[-1.8, 0.4, 3.6], [1.6, -0.9, 3.9], [0.4, 1.9, 3.4], [-0.6, -1.7, 4.2], [2.1, 1.2, 3.2]
	];
	for (const [dx, dz, h] of stems) {
		const pts = [
			[cx + dx * 0.05, 0, cz + dz * 0.05],
			[cx + dx * 0.25, h * 0.35, cz + dz * 0.25],
			[cx + dx * 0.6, h * 0.7, cz + dz * 0.6],
			[cx + dx, h, cz + dz],
			[cx + dx * 1.35 + (rnd() - 0.5), h + 1.4, cz + dz * 1.35 + (rnd() - 0.5)]
		];
		B.tube(pts, (u) => 0.2 * (1 - u * 0.75), 14, 9, { mat: () => [K.BARK, 0, 0] });
		// a couple of side branches
		for (let k = 0; k < 2; k++) {
			const t = 0.55 + k * 0.2;
			const p = [cx + dx * t, h * t, cz + dz * t];
			const a = rnd() * Math.PI * 2;
			B.tube([p, [p[0] + Math.cos(a) * 1.3, p[1] + 0.9, p[2] + Math.sin(a) * 1.3], [p[0] + Math.cos(a) * 2.3, p[1] + 1.4 + rnd(), p[2] + Math.sin(a) * 2.3]],
				(u) => 0.08 * (1 - u * 0.7), 8, 6, { mat: () => [K.BARK, 0, 0] });
		}
	}
	// cypress trunks, mostly hidden
	for (const cr of CROWNS.filter((c) => c.spindle)) {
		B.tube([[cr.c[0], 0, cr.c[2]], [cr.c[0], 1.4, cr.c[2]]], () => 0.12, 3, 7, { mat: () => [K.BARK, 0, 0] });
	}
}


/* ----- the basilica beyond the roofs ----- */

function addBasilica(B) {
	const brick = () => [K.FARBRICK, 0, 0];
	const lead = () => [K.LEAD, 0, 0];

	// a dome on a drum, with a lantern
	const dome = (x, z, r, drumTop, rise, pointed) => {
		B.lathe([[r + 0.3, 20, 1], [r + 0.3, drumTop - 1.2, 1], [r + 0.8, drumTop - 0.9, 1], [r + 0.8, drumTop, 1], [r, drumTop, 1]], x, z, 28, { mat: brick });
		const prof = [];
		for (let i = 0; i <= 12; i++) {
			const t = i / 12 * Math.PI / 2;
			let rr = Math.cos(t) * r;
			let yy = Math.sin(t) * rise;
			if (pointed) rr *= 1 - 0.18 * Math.sin(t * 2);
			prof.push([Math.max(rr, r * 0.12), drumTop + yy]);
		}
		B.lathe(prof, x, z, 28, { mat: lead });
		const top = drumTop + rise;
		B.lathe([[r * 0.13, top - 0.2, 1], [r * 0.13, top + 3.0, 1], [r * 0.18, top + 3.2, 1], [r * 0.02, top + 6.4]], x, z, 10, { mat: lead });
	};

	// nave and transept blocks
	box(B, 14, 0, 104, 52, 26, 150, K.FARBRICK);
	B.lathe([[3, 26], [0.1, 26 + 6]], 33, 108, 4, { mat: brick });

	dome(26, 124, 7.2, 33, 9.5, true);
	dome(40.5, 116, 6.0, 31, 8.0, true);
	dome(16.5, 117, 5.5, 30, 7.2, true);
	// the conical central dome
	B.lathe([[6.4, 20, 1], [6.4, 34, 1], [6.9, 34.4, 1], [6.0, 34.4, 1], [0.6, 46.5, 1], [0.15, 50]], 33, 132, 24, { mat: lead });

	// two slender bell towers
	const tower = (x, z, h) => {
		box(B, x - 1.8, 0, z - 1.8, x + 1.8, h, z + 1.8, K.FARBRICK);
		B.lathe([[1.9, h, 1], [1.6, h + 3.5, 1], [1.2, h + 3.5, 1], [1.2, h + 6, 1], [0.9, h + 6.2, 1], [0.05, h + 13]], x, z, 8, { mat: brick });
	};
	tower(20.5, 109, 36);
	tower(46.5, 112, 38);
}


/* ----- sky ----- */

function addSky(B) {
	const R = 420, c = [G.cx, 0, G.cz];
	const nu = 24, nv = 10;
	const g = [];
	for (let i = 0; i <= nu; i++) {
		g.push([]);
		const az = -Math.PI * 0.62 + Math.PI * 1.24 * i / nu;
		for (let j = 0; j <= nv; j++) {
			const el = (Math.PI / 2) * (j / nv) - 0.05;
			const d = [Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el)];
			const p = [c[0] + d[0] * R, c[1] + d[1] * R, c[2] + d[2] * R];
			g[i].push(B.vert(p, [-d[0], -d[1], -d[2]], [K.SKY, 0, 0]));
		}
	}
	for (let i = 0; i < nu; i++) {
		for (let j = 0; j < nv; j++) {
			B.tri(g[i][j], g[i + 1][j], g[i + 1][j + 1]);
			B.tri(g[i][j], g[i + 1][j + 1], g[i][j + 1]);
		}
	}
}

function buildSolid() {
	const position = [], normal = [], elements = [], attr = [];
	const B = geom.createBuilder(position, normal, elements, attr);
	addGround(B);
	addArcades(B);
	addHedges(B);
	addWellhead(B);
	addPots(B);
	addTrunks(B);
	// the basilica was laid out for a garden centred at (32.35, 67.7) with
	// its arcade at z = 77; keep it in the same place relative to the garden
	B.save();
	B.translate(BASILICA_SHIFT[0], 0, BASILICA_SHIFT[1]);
	addBasilica(B);
	B.restore();
	addSky(B);
	return { position, normal, elements, attr };
}


/* ===========================================================
 * SUN AND SHADOW (shared by the CPU and the shader)
 * ===========================================================
 */

const BOXES = [
	[[13.65, 0, C.z0 - 0.7], [C.x1 + 0.7, 10.6, G.south]],                         // the corridor
	[[G.westBack, CEIL, G.northCol - T], [G.eastBack, EAVE_N, G.northBack + 3.4]],  // north range
	[[LOGGIA.x0, EAVE_N, G.northCol - T], [LOGGIA.x1, LOGGIA.top, G.northCol + 2.6]],
	[[G.westBack, 0, G.south], [G.westCol + T, EAVE_SIDE, G.northBack + 0.3]],        // west house
	[[G.eastCol - T, 0, G.south], [G.eastBack, EAVE_SIDE, G.northBack + 0.3]],        // east house
	[[14 + BASILICA_SHIFT[0], 0, 104 + BASILICA_SHIFT[1]], [52 + BASILICA_SHIFT[0], 26, 150 + BASILICA_SHIFT[1]]]
];

function rayBox(o, d, a, b) {
	let t0 = 1e-3, t1 = 1e9;
	for (let k = 0; k < 3; k++) {
		if (Math.abs(d[k]) < 1e-9) {
			if (o[k] < a[k] || o[k] > b[k]) return false;
			continue;
		}
		let ta = (a[k] - o[k]) / d[k], tb = (b[k] - o[k]) / d[k];
		if (ta > tb) [ta, tb] = [tb, ta];
		t0 = Math.max(t0, ta);
		t1 = Math.min(t1, tb);
		if (t0 > t1) return false;
	}
	return true;
}

// how far a ray travels inside an ellipsoid
function rayEllipsoid(o, d, c, r) {
	const oc = [(o[0] - c[0]) / r[0], (o[1] - c[1]) / r[1], (o[2] - c[2]) / r[2]];
	const dd = [d[0] / r[0], d[1] / r[1], d[2] / r[2]];
	const A = dd[0] * dd[0] + dd[1] * dd[1] + dd[2] * dd[2];
	const Bq = oc[0] * dd[0] + oc[1] * dd[1] + oc[2] * dd[2];
	const C = oc[0] * oc[0] + oc[1] * oc[1] + oc[2] * oc[2] - 1;
	const disc = Bq * Bq - A * C;
	if (disc <= 0) return 0;
	const s = Math.sqrt(disc);
	const t0 = Math.max(0, (-Bq - s) / A), t1 = (-Bq + s) / A;
	return Math.max(0, t1 - t0);
}

function sunVisibleCPU(p) {
	for (const [a, b] of BOXES) if (rayBox(p, SUN, a, b)) return 0;
	return 1;
}

function mulberry(seed) {
	let a = seed >>> 0;
	return () => {
		a = (a + 0x6D2B79F5) >>> 0;
		let t = a;
		t = Math.imul(t ^ (t >>> 15), t | 1);
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}


/* ===========================================================
 * FOLIAGE CLUSTERS
 * ===========================================================
 */

function buildFoliage() {

	const center = [], corner = [], par = [], light = [], tint = [], bloom = [];
	const elements = [];
	const rnd = mulberry(21);

	const addClump = (p, size, cell, rot, l, leafTint, bloomTint) => {
		const base = center.length / 3;
		for (const [cx, cy] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
			center.push(...p);
			corner.push(cx, cy);
			par.push(size, cell, rot);
			light.push(...l);
			tint.push(...leafTint);
			bloom.push(...bloomTint);
		}
		elements.push(base, base + 1, base + 2, base, base + 2, base + 3);
	};

	const shadowOthers = (p, self) => {
		let tr = 1;
		for (const cr of CROWNS) {
			if (cr === self || !cr.shadow) continue;
			const d = rayEllipsoid(p, SUN, cr.c, cr.r);
			if (d > 0) tr *= Math.exp(-d * 0.9);
		}
		return tr;
	};

	const all = CROWNS.map((cr) => ({ ...cr, pts: null }));

	for (const cr of all) {
		for (let i = 0; i < cr.n; i++) {
			// mostly near the outside of the crown, some inside
			let d;
			do {
				d = [rnd() * 2 - 1, rnd() * 2 - 1, rnd() * 2 - 1];
			} while (d[0] * d[0] + d[1] * d[1] + d[2] * d[2] > 1);
			const l = Math.hypot(d[0], d[1], d[2]) || 1;
			let rr = Math.pow(rnd(), 0.35) * 0.98;
			let u = [d[0] / l * rr, d[1] / l * rr, d[2] / l * rr];
			if (cr.spindle) {
				// narrow at the top and a little at the bottom
				const h = u[1];
				const w = Math.sqrt(Math.max(0.02, 1 - h * h)) * (h > 0 ? 1 - h * 0.55 : 1 + h * 0.25);
				const al = Math.hypot(u[0], u[2]) || 1;
				const k = w * Math.min(1, al * 1.4);
				u = [u[0] / al * k, h, u[2] / al * k];
			}
			if (cr.magnolia && u[1] < -0.55) {
				// flatter underneath
				u[1] = -0.55 + (u[1] + 0.55) * 0.35;
			}
			const p = [cr.c[0] + u[0] * cr.r[0], cr.c[1] + u[1] * cr.r[1], cr.c[2] + u[2] * cr.r[2]];

			// light: sun through the rest of this crown, buildings, other crowns
			let sun, nrm;
			if (cr.magnolia) {
				let inside = 0;
				for (const b of MAG_BLOBS) inside = Math.max(inside, rayEllipsoid(p, SUN, b.c, b.r));
				sun = Math.exp(-inside * 1.1);
				let tr = 1;
				for (const o of CROWNS) if (!o.magnolia && o.shadow) { const d = rayEllipsoid(p, SUN, o.c, o.r); if (d > 0) tr *= Math.exp(-d * 0.9); }
				sun *= sunVisibleCPU(p) * tr;
				const g = sub(p, MAGNOLIA.c);
				nrm = norm3([g[0] / MAGNOLIA.r[0] + u[0] * 0.5, g[1] / MAGNOLIA.r[1] + u[1] * 0.5, g[2] / MAGNOLIA.r[2] + u[2] * 0.5]);
				rr = Math.min(1, Math.hypot(g[0] / MAGNOLIA.r[0], g[1] / MAGNOLIA.r[1], g[2] / MAGNOLIA.r[2]) * 0.6 + rr * 0.4);
			} else {
				const inside = rayEllipsoid(p, SUN, cr.c, cr.r);
				sun = Math.exp(-inside * (cr.spindle ? 2.2 : 1.25));
				sun *= sunVisibleCPU(p) * shadowOthers(p, CROWNS[all.indexOf(cr)]);
				nrm = norm3([u[0] / cr.r[0], u[1] / cr.r[1], u[2] / cr.r[2]]);
			}
			const ndl = Math.max(0, nrm[0] * SUN[0] + nrm[1] * SUN[1] + nrm[2] * SUN[2]);
			const occl = 0.25 + 0.75 * Math.pow(rr, 1.5) * (0.65 + 0.35 * (nrm[1] * 0.5 + 0.5));
			const size = cr.size[0] + (cr.size[1] - cr.size[0]) * rnd();
			const jitter = 0.85 + rnd() * 0.3;
			const lt = cr.leaf.map((c) => c * jitter);
			let cell = cr.cell;
			if (cr.cell === 3 && rnd() < 0.35) cell = 2;      // some clusters without flowers
			addClump(p, size, cell, rnd() * Math.PI * 2, [sun, occl, 0.35 + 0.65 * ndl], lt, cr.bloom);
		}
	}

	// low flowering plants along the parapets
	for (const [x, z] of BORDERS) {
		const pink = rnd() < 0.5;
		for (let k = 0; k < 3; k++) {
			const p = [x + (rnd() - 0.5) * 0.7, 0.28 + rnd() * 0.22, z + (rnd() - 0.5) * 0.5];
			const sun = sunVisibleCPU(p) * shadowOthers(p, null);
			addClump(p, 0.32 + rnd() * 0.12, rnd() < 0.7 ? 3 : 2, rnd() * 6.28, [sun, 0.6 + rnd() * 0.3, 0.8],
				[0.75, 0.9, 0.6], pink ? [1.0, 0.55, 0.75] : [0.85, 0.8, 1.15]);
		}
	}

	// shuffle the clusters, so drawing only some of them thins every
	// plant evenly instead of leaving some out
	const groups = elements.length / 6;
	const order = Array.from({ length: groups }, (_, i) => i);
	for (let i = groups - 1; i > 0; i--) {
		const j = Math.floor(rnd() * (i + 1));
		[order[i], order[j]] = [order[j], order[i]];
	}
	const shuffled = [];
	for (const g of order) for (let k = 0; k < 6; k++) shuffled.push(elements[g * 6 + k]);

	return { center, corner, par, light, tint, bloom, elements: shuffled };
}


/* ===========================================================
 * SHADERS
 * ===========================================================
 */

const f = (x) => x.toFixed(4);
const v3 = (v) => `vec3(${f(v[0])}, ${f(v[1])}, ${f(v[2])})`;

const COMMON = `
const vec3 SUN = ${v3(SUN)};
const vec3 SUN_COL = vec3(1.95, 1.76, 1.48);
const vec3 SKY_AMB = vec3(0.47, 0.53, 0.63);
const vec3 BOUNCE = vec3(0.42, 0.36, 0.28);

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float hash3(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
float noise(vec2 p) {
	vec2 i = floor(p), f = fract(p);
	f = f * f * (3.0 - 2.0 * f);
	return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}
float noise3(vec3 p) {
	vec3 i = floor(p), f = fract(p);
	f = f * f * (3.0 - 2.0 * f);
	float a = mix(mix(hash3(i), hash3(i + vec3(1,0,0)), f.x), mix(hash3(i + vec3(0,1,0)), hash3(i + vec3(1,1,0)), f.x), f.y);
	float b = mix(mix(hash3(i + vec3(0,0,1)), hash3(i + vec3(1,0,1)), f.x), mix(hash3(i + vec3(0,1,1)), hash3(i + vec3(1,1,1)), f.x), f.y);
	return mix(a, b, f.z);
}
float fbm(vec2 p) {
	float s = 0.0, a = 0.5;
	for (int i = 0; i < 5; i++) { s += a * noise(p); p *= 2.03; a *= 0.5; }
	return s;
}

vec3 tonemap(vec3 c) {
	c *= 0.92;
	vec3 x = c * (2.51 * c + 0.03) / (c * (2.43 * c + 0.59) + 0.14);
	return clamp(x, 0.0, 1.0);
}
`;

const boxTests = BOXES.map(([a, b]) => `if (hitBox(ro, SUN, ${v3(a)}, ${v3(b)})) return 0.0;`).join('\n\t');

const shadowCrowns = CROWNS.filter((c) => c.shadow).map((c) =>
	`tr *= crownShade(ro, ${v3(c.c)}, ${v3(c.r)}, ${c.spindle ? '1.8' : '1.0'});`).join('\n\t');

const arcadeTest = (axis, plane, u0, pitch, count, first, last, open, sideOfPlane) => `
	{
		float t = (${f(plane)} - ro.${axis}) / SUN.${axis};
		if (t > 0.0) {
			vec3 q = ro + SUN * t;
			float u = q.${axis === 'z' ? 'x' : 'z'};
			if (q.y < ${f(CEIL)} && u > ${f(u0 - T)} && u < ${f(u0 + pitch * count + T)}) {
				float k = floor((u - ${f(u0)}) / ${f(pitch)});
				float a = ${f(u0)} + k * ${f(pitch)} + (k < 0.5 ? ${f(first)} : 0.02);
				float b = ${f(u0)} + (k + 1.0) * ${f(pitch)} - (k > ${f(count - 1.5)} ? ${f(last)} : 0.02);
				float c = 0.5 * (a + b), r = 0.5 * (b - a) - 0.2;
				float d = abs(u - c);
				float sill = abs(k - ${f(open)}) < 0.5 ? 0.0 : ${f(PARAPET + 0.09)};
				bool hole = (q.y > sill && q.y < ${f(SPRING)} && u > a && u < b && d < 0.5 * (b - a) - 0.17)
					|| (q.y >= ${f(SPRING)} && d * d + (q.y - ${f(SPRING)}) * (q.y - ${f(SPRING)}) < r * r);
				if (!hole && ${sideOfPlane}) return 0.0;
			}
		}
	}`;

// the hedge rings, measured in one quarter of the garden
const H_A0 = CROSS + 0.3, H_B0 = CROSS + 0.3, H_R = CIRCLE + 0.3;
const H_A1 = (YARD.x1 - G.cx) - PATH_EDGE - 0.3;
const H_B1N = (YARD.z1 - G.cz) - PATH_EDGE - 0.3, H_B1S = (G.cz - YARD.z0) - PATH_EDGE - 0.3;
const H_BC = Math.sqrt(H_R * H_R - H_A0 * H_A0), H_AC = Math.sqrt(H_R * H_R - H_B0 * H_B0);

const cylTests = [
	[G.cx, G.cz, 0.86, 1.18], [G.cx, G.cz, 1.25, 0.3],
	...LEMONS.map(([x, z]) => [x, z, 0.42, 0.65])
].map(([x, z, r, h]) => `if (hitCyl(ro, vec2(${f(x)}, ${f(z)}), ${f(r)}, ${f(h)})) return 0.0;`).join('\n\t');

const SHADOW_GLSL = `
float segDist(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a, ba = b - a;
	float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * h);
}

// distance to the nearest hedge line
float hedgeDist(vec2 xz) {
	vec2 q = abs(xz - vec2(${f(G.cx)}, ${f(G.cz)}));
	float b1 = xz.y > ${f(G.cz)} ? ${f(H_B1N)} : ${f(H_B1S)};
	vec2 A = vec2(${f(H_A0)}, ${f(H_BC)}), Bp = vec2(${f(H_A0)}, b1), C = vec2(${f(H_A1)}, b1);
	vec2 D = vec2(${f(H_A1)}, ${f(H_B0)}), E = vec2(${f(H_AC)}, ${f(H_B0)});
	float d = min(min(segDist(q, A, Bp), segDist(q, Bp, C)), min(segDist(q, C, D), segDist(q, D, E)));
	float ang = atan(q.y, q.x);
	if (ang > atan(E.y, E.x) && ang < atan(A.y, A.x)) d = min(d, abs(length(q) - ${f(H_R)}));
	return d;
}

bool hitCyl(vec3 ro, vec2 c, float r, float h) {
	if (ro.y > h) return false;
	vec2 oc = ro.xz - c, d = SUN.xz;
	float A = dot(d, d), B = dot(oc, d), C = dot(oc, oc) - r * r;
	float disc = B * B - A * C;
	if (disc <= 0.0) return false;
	float s = sqrt(disc);
	float tf = (-B + s) / A;
	if (tf <= 0.0) return false;
	float tn = max((-B - s) / A, 0.0);
	return ro.y + SUN.y * tn < h;
}

bool hitBox(vec3 ro, vec3 rd, vec3 a, vec3 b) {
	vec3 inv = 1.0 / rd;
	vec3 t0 = (a - ro) * inv, t1 = (b - ro) * inv;
	vec3 lo = min(t0, t1), hi = max(t0, t1);
	float tn = max(max(lo.x, lo.y), lo.z), tf = min(min(hi.x, hi.y), hi.z);
	return tf > max(tn, 0.001);
}

float crownShade(vec3 ro, vec3 c, vec3 r, float k) {
	vec3 oc = (ro - c) / r, dd = SUN / r;
	float A = dot(dd, dd), B = dot(oc, dd), C = dot(oc, oc) - 1.0;
	float disc = B * B - A * C;
	if (disc <= 0.0) return 1.0;
	float s = sqrt(disc);
	float t0 = max(0.0, (-B - s) / A), t1 = (-B + s) / A;
	float d = max(0.0, t1 - t0);
	if (d <= 0.0) return 1.0;
	// dappled: gaps in the leaves let spots of sun through
	vec3 q = ro + SUN * (t0 + t1) * 0.5;
	float gaps = smoothstep(0.62, 0.8, noise3(q * 1.7)) * 0.8;
	return mix(exp(-d * 1.1 * k), 1.0, gaps * exp(-d * 0.25));
}

float sunVisible(vec3 p, vec3 n) {
	vec3 ro = p + n * 0.03;
	${boxTests}
	${arcadeTest('z', G.northCol, G.westCol, NORTH_PITCH, NORTH_BAYS, T + CORNER, T + CORNER, OPEN_NORTH, 'ro.z > ' + f(G.northCol - T))}
	// on lighter settings only the buildings cast shadows
	if (gardenDetail < 0.5) return 1.0;
	${cylTests}
	if (ro.y < ${f(HEDGE_H)} && ro.x > ${f(YARD.x0)} && ro.x < ${f(YARD.x1)}) {
		for (int i = 1; i <= 4; i++) {
			float t = float(i) / 4.0 * (${f(HEDGE_H)} - ro.y) / SUN.y;
			vec3 q = ro + SUN * t;
			float w = ${f(HEDGE_W * 0.5)} * sqrt(max(0.0, 1.0 - pow(q.y / ${f(HEDGE_H)}, 4.0)));
			if (hedgeDist(q.xz) < w) return 0.0;
		}
	}
	float tr = 1.0;
	${shadowCrowns}
	return tr;
}
`;

const SOLID_FRAG = `
precision highp float;
varying vec3 v_pos, v_normal, v_attr, v_eye;
uniform float time, gardenDetail;
${COMMON}
${SHADOW_GLSL}

vec3 skyColor(vec3 d) {
	float h = max(d.y, 0.0);
	vec3 zen = vec3(0.20, 0.42, 0.80);
	vec3 hor = vec3(0.70, 0.80, 0.90);
	vec3 c = mix(hor, zen, pow(h, 0.55));
	float s = max(dot(d, SUN), 0.0);
	c += vec3(1.0, 0.9, 0.7) * (pow(s, 8.0) * 0.25 + pow(s, 200.0) * 2.0);
	// clouds on a high plane
	if (d.y > 0.02 && gardenDetail > 0.5) {
		vec2 uv = d.xz / d.y * 0.9 + vec2(time * 0.004, 0.0);
		float cl = fbm(uv * 0.55 + 3.0);
		cl = smoothstep(0.44, 0.78, cl) * smoothstep(0.02, 0.25, d.y);
		float lit = 0.88 + 0.12 * fbm(uv * 0.55 + 3.3);
		c = mix(c, vec3(1.0, 0.99, 0.97) * lit, cl * 0.9);
	}
	return c;
}

vec3 brick(vec2 q, float pink) {
	float row = floor(q.y / 0.072);
	float off = mod(row, 2.0) * 0.14;
	float col = floor((q.x + off) / 0.28);
	vec2 f = vec2(fract((q.x + off) / 0.28), fract(q.y / 0.072));
	float h = hash(vec2(col, row));
	vec3 c = mix(vec3(0.62, 0.36, 0.24), vec3(0.76, 0.52, 0.34), h);
	c = mix(c, vec3(0.70, 0.40, 0.32), pink);
	c *= 0.82 + 0.3 * hash(vec2(row, col * 1.7));
	float m = step(f.x, 0.05) + step(f.y, 0.14);
	vec3 mortar = vec3(0.74, 0.68, 0.58);
	vec3 b = mix(c, mortar, clamp(m, 0.0, 1.0) * 0.7);
	// old lime wash in patches, and some weathering
	float wash = smoothstep(0.5, 0.8, noise(q * vec2(0.5, 0.9)));
	b = mix(b, vec3(0.80, 0.66, 0.50), wash * 0.4);
	b *= 0.9 + 0.2 * noise(q * vec2(0.13, 0.4));
	return b;
}

void main() {
	float kind = floor(v_attr.x + 0.5);
	vec3 N = normalize(v_normal);
	vec3 V = v_eye - v_pos;
	float dist = length(V);
	V /= dist;

	if (kind == ${K.SKY}.0) {
		gl_FragColor = vec4(tonemap(skyColor(normalize(v_pos - v_eye)) * 1.05), 1.0);
		return;
	}

	vec3 P = v_pos;
	vec3 base = vec3(0.7);
	float spec = 0.0;
	float ao = 1.0;
	float far = 0.0;

	// coordinates along a surface for patterns
	vec2 wq = abs(N.x) > 0.5 ? P.zy : (abs(N.z) > 0.5 ? P.xy : P.xz);
	float lod = smoothstep(14.0, 40.0, dist);

	if (kind == ${K.GROUND}.0) {
		bool yard = P.x > ${f(YARD.x0)} && P.x < ${f(YARD.x1)} && P.z < ${f(YARD.z1)};
		if (!yard) {
			// stone slabs under the arcades
			vec2 g = P.xz / 0.62;
			vec2 fg = fract(g);
			float h = hash(floor(g));
			base = mix(vec3(0.66, 0.60, 0.52), vec3(0.76, 0.70, 0.62), h);
			base *= 1.0 - 0.25 * (step(fg.x, 0.03) + step(fg.y, 0.03)) * (1.0 - lod);
			spec = 0.15;
		} else {
			float ex = min(P.x - ${f(YARD.x0)}, ${f(YARD.x1)} - P.x);
			float ez = min(P.z - ${f(YARD.z0)}, ${f(YARD.z1)} - P.z);
			float edge = min(ex, ez);
			float dx = abs(P.x - ${f(G.cx)}), dz = abs(P.z - ${f(G.cz)});
			float rc = length(vec2(dx, dz));
			if (edge < ${f(PATH_EDGE)}) {
				// brick path laid in rows, with a stone kerb
				vec2 q = ex < ez ? P.zx : P.xz;
				base = brick(q * vec2(1.0, 2.6), 0.4) * 0.9;
				if (abs(edge - ${f(PATH_EDGE)}) < 0.08) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (rc < ${f(CIRCLE)}) {
				// brick in rings round the wellhead
				float ang = atan(P.z - ${f(G.cz)}, P.x - ${f(G.cx)});
				vec2 q = vec2(ang * rc, rc);
				base = brick(q * vec2(1.0, 2.6), 0.5) * 0.92;
				if (abs(rc - ${f(CIRCLE)}) < 0.1) base = vec3(0.70, 0.66, 0.60);
				spec = 0.05;
			} else if (dx < ${f(CROSS)} || dz < ${f(CROSS)}) {
				// pale gravel
				float g = noise(P.xz * 40.0) * 0.6 + noise(P.xz * 9.0) * 0.4;
				base = mix(vec3(0.66, 0.58, 0.46), vec3(0.86, 0.79, 0.66), mix(g, 0.5, lod));
				base *= 0.94 + 0.12 * noise(P.xz * 1.3);
				float e = min(${f(CROSS)} - min(dx, dz), 1.0);
				base *= 0.9 + 0.1 * smoothstep(0.0, 0.2, e);
			} else {
				// lawn
				float n1 = noise(P.xz * 0.35), n2 = noise(P.xz * 2.1), n3 = noise(P.xz * 23.0);
				base = mix(vec3(0.20, 0.36, 0.10), vec3(0.36, 0.52, 0.16), n1 * 0.6 + n2 * 0.4);
				base = mix(base, vec3(0.42, 0.50, 0.20), smoothstep(0.6, 0.85, n2) * 0.35);
				base *= 0.82 + 0.3 * mix(n3, 0.5, lod);
				// mown stripes
				base *= 0.96 + 0.06 * step(0.5, fract(P.x / 1.6));
				// daisies
				float d = step(0.985, hash(floor(P.xz * 9.0))) * (1.0 - lod);
				base = mix(base, vec3(0.95, 0.94, 0.86), d * 0.8);
			}
			ao *= 0.72 + 0.28 * smoothstep(0.0, 1.6, edge);
			ao *= 0.55 + 0.45 * smoothstep(0.2, 0.75, hedgeDist(P.xz));
			ao *= 0.6 + 0.4 * smoothstep(0.85, 1.6, length(P.xz - vec2(${f(G.cx)}, ${f(G.cz)})));
		}
	} else if (kind == ${K.BRICK}.0) {
		float pink = smoothstep(0.4, 0.6, noise(wq * 0.05 + 7.0));
		base = mix(brick(wq, 0.25 * pink), vec3(0.68, 0.46, 0.33), lod * 0.6);
		base *= 1.0 - 0.18 * smoothstep(0.0, 1.5, 1.6 - P.y) * noise(wq * 1.5);
		ao *= 0.78 + 0.22 * smoothstep(0.0, 1.2, P.y);
	} else if (kind == ${K.STONE}.0) {
		float n = noise(wq * 3.0) * 0.5 + noise(wq * 0.7) * 0.5;
		base = mix(vec3(0.74, 0.70, 0.62), vec3(0.86, 0.83, 0.76), n);
		spec = 0.1;
	} else if (kind == ${K.MARBLE}.0) {
		// red Verona marble
		float n = noise3(P * vec3(5.0, 1.5, 5.0)) * 0.6 + noise3(P * 14.0) * 0.4;
		base = mix(vec3(0.56, 0.32, 0.25), vec3(0.68, 0.42, 0.33), n);
		base = mix(base, vec3(0.80, 0.66, 0.56), smoothstep(0.66, 0.74, noise3(P * 9.0 + 3.0)) * 0.35);
		spec = 0.35;
	} else if (kind == ${K.HEDGE}.0) {
		float n = noise3(P * 9.0) * 0.55 + noise3(P * 2.5) * 0.45;
		base = mix(vec3(0.05, 0.16, 0.04), vec3(0.22, 0.38, 0.10), n);
		ao *= 0.55 + 0.45 * smoothstep(0.0, ${f(HEDGE_H)}, P.y) * (0.6 + 0.4 * n);
		N = normalize(N + vec3(noise3(P * 13.0) - 0.5, 0.0, noise3(P * 13.0 + 5.0) - 0.5) * 0.9);
	} else if (kind == ${K.POT}.0) {
		base = mix(vec3(0.66, 0.34, 0.20), vec3(0.75, 0.44, 0.28), noise(wq * 6.0));
	} else if (kind == ${K.SOIL}.0) {
		base = vec3(0.20, 0.14, 0.09);
	} else if (kind == ${K.ROOF}.0) {
		// rows of curved clay tiles
		float along = abs(N.x) > abs(N.z) ? P.z : P.x;
		float rib = abs(fract(along / 0.24) - 0.5) * 2.0;
		float h = hash(vec2(floor(along / 0.24), floor(P.y / 0.42)));
		base = mix(vec3(0.58, 0.30, 0.20), vec3(0.72, 0.44, 0.30), h);
		base = mix(base, vec3(0.45, 0.42, 0.36), smoothstep(0.55, 0.85, noise(P.xz * 0.6)) * 0.4);
		base *= mix(0.62 + 0.38 * (1.0 - rib * rib), 0.85, lod);
	} else if (kind == ${K.SHUTTER}.0) {
		float slat = fract(P.y / 0.07);
		base = vec3(0.17, 0.30, 0.20) * (0.75 + 0.25 * smoothstep(0.1, 0.5, slat));
	} else if (kind == ${K.PANE}.0) {
		vec3 R = reflect(-V, N);
		base = vec3(0.03, 0.035, 0.04);
		vec3 refl = skyColor(normalize(vec3(R.x, abs(R.y), R.z))) * 0.25;
		gl_FragColor = vec4(tonemap(base + refl * (0.4 + 0.6 * pow(1.0 - abs(dot(N, V)), 3.0))), 1.0);
		return;
	} else if (kind == ${K.PLASTER}.0) {
		base = mix(vec3(0.82, 0.76, 0.64), vec3(0.88, 0.83, 0.72), noise(wq * 1.3));
		// a darker dado on the back walls
		if (abs(N.y) < 0.5 && P.y < 1.1) base *= 0.82;
	} else if (kind == ${K.BARK}.0) {
		base = mix(vec3(0.30, 0.27, 0.24), vec3(0.45, 0.42, 0.38), noise3(P * vec3(8.0, 2.0, 8.0)));
	} else if (kind == ${K.IRON}.0) {
		base = vec3(0.07, 0.07, 0.07);
		spec = 0.4;
	} else if (kind == ${K.LEAD}.0) {
		base = mix(vec3(0.30, 0.33, 0.35), vec3(0.40, 0.43, 0.45), noise(P.xy * 0.5));
		// ribs on the domes
		float a = atan(P.z - floor(P.z / 50.0) * 50.0, 1.0);
		base *= 0.9 + 0.1 * step(0.5, fract(a * 6.0));
		far = 1.0;
	} else if (kind == ${K.FARBRICK}.0) {
		base = mix(vec3(0.66, 0.46, 0.34), vec3(0.74, 0.54, 0.40), noise(P.xy * 0.3));
		// a row of small arches under the eaves and some dark windows
		far = 1.0;
	} else if (kind == ${K.DARK}.0) {
		base = vec3(0.025, 0.022, 0.02);
	}

	// ---------- light ----------

	// in the arcade walks the sky is mostly hidden
	bool walk = (P.x < ${f(G.westCol)} || P.x > ${f(G.eastCol)} || P.z > ${f(G.northCol)}) && P.y < ${f(CEIL + 0.05)} && P.z > ${f(G.south - 0.1)} && P.z < ${f(G.northBack + 0.5)};
	float skyVis = 0.55 + 0.45 * N.y;
	if (walk) {
		float depth = P.z > ${f(G.northCol)} ? P.z - ${f(G.northCol)} : (P.x < ${f(G.westCol)} ? ${f(G.westCol)} - P.x : P.x - ${f(G.eastCol)});
		skyVis = mix(0.36, 0.14, clamp(depth / 3.0, 0.0, 1.0)) * (0.8 + 0.2 * N.y);
		if (N.y < -0.5) skyVis = 0.18;
	}

	float ndl = max(dot(N, SUN), 0.0);
	float sun = ndl > 0.0 ? sunVisible(P, normalize(v_normal)) : 0.0;

	vec3 amb = SKY_AMB * skyVis + BOUNCE * (0.35 - 0.25 * N.y) * (walk ? 1.4 : 1.0);
	vec3 col = base * (amb * ao + SUN_COL * ndl * sun);

	// a little sheen on stone and marble
	vec3 H = normalize(SUN + V);
	col += SUN_COL * spec * pow(max(dot(N, H), 0.0), 40.0) * sun * 0.6;

	// distant buildings fade into the air
	float haze = 1.0 - exp(-dist / (far > 0.5 ? 160.0 : 400.0));
	col = mix(col, vec3(0.68, 0.76, 0.86), haze * (far > 0.5 ? 0.5 : 0.25));

	gl_FragColor = vec4(tonemap(col), 1.0);
}`;

const SOLID_VERT = `
precision highp float;
uniform mat4 proj, view;
uniform float yScale;
attribute vec3 position, normal, attr;
varying vec3 v_pos, v_normal, v_attr, v_eye;
void main() {
	v_pos = position;
	v_normal = normal;
	v_attr = attr;
	vec3 t = view[3].xyz;
	v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
	vec3 p = position;
	p.y *= yScale;
	gl_Position = proj * view * vec4(p, 1.0);
}`;

const LEAF_VERT = `
precision highp float;
uniform mat4 proj, view;
uniform float yScale, time;
attribute vec3 center, par, light, tint, bloom;
attribute vec2 corner;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
void main() {
	vec3 c = center;
	// a gentle breeze
	float sway = sin(time * 1.3 + c.x * 0.7 + c.z * 0.5) * 0.025 * max(c.y - 1.0, 0.0) / 6.0;
	c.x += sway;
	c.z += sway * 0.6;
	c.y *= yScale;
	vec4 vp = view * vec4(c, 1.0);
	float s = par.x, rot = par.z;
	vec2 o = vec2(cos(rot) * corner.x - sin(rot) * corner.y, sin(rot) * corner.x + cos(rot) * corner.y);
	vp.xy += o * s * 0.5 * vec2(1.0, yScale);
	gl_Position = proj * vp;
	float cell = par.y;
	vec2 cuv = corner * 0.5 + 0.5;
	v_uv = (vec2(mod(cell, 2.0), floor(cell / 2.0)) + vec2(cuv.x, 1.0 - cuv.y)) * 0.5;
	v_light = light;
	v_tint = tint;
	v_bloom = bloom;
	v_pos = center;
}`;

const LEAF_FRAG = `
precision highp float;
uniform sampler2D leaves;
varying vec2 v_uv;
varying vec3 v_light, v_tint, v_bloom, v_pos;
${COMMON}
void main() {
	vec4 t = texture2D(leaves, v_uv);
	if (t.a < 0.5) discard;
	float white = smoothstep(0.45, 0.7, min(t.r, min(t.g, t.b)));
	float lum = dot(t.rgb, vec3(0.33));
	vec3 base = mix(t.rgb * v_tint * 1.15, v_bloom * (0.7 + 0.3 * lum), white);
	float sun = v_light.x, occl = v_light.y, facing = v_light.z;
	// leaves glow a little when the sun is behind them
	vec3 col = base * (SKY_AMB * 0.75 * occl + BOUNCE * 0.25 + SUN_COL * sun * (0.25 + 0.75 * facing) * 0.95);
	col += vec3(0.9, 0.95, 0.8) * sun * facing * 0.05;
	gl_FragColor = vec4(tonemap(col), 1.0);
}`;


/* ===========================================================
 * MODULE
 * ===========================================================
 */

function loadTexture(regl, url, fallback) {
	const tex = regl.texture({ data: [[fallback]], min: 'linear', mag: 'linear' });
	fetch(url)
		.then((r) => {
			if (!r.ok) throw new Error('Could not load ' + url);
			return r.blob();
		})
		.then((b) => createImageBitmap(b, { premultiplyAlpha: 'none' }))
		.then((img) => tex({ data: img, flipY: false, min: 'mipmap', mipmap: 'nice', mag: 'linear', wrapS: 'clamp', wrapT: 'clamp' }))
		.catch((e) => console.error(e));
	return tex;
}

module.exports = (regl) => {

	const solid = buildSolid();
	const leaves = buildFoliage();
	const tex = loadTexture(regl, 'res/garden/foliage.png', [0, 0, 0, 0]);
	const start = Date.now();
	const clock = () => (!quality.motion ? 20.0 :
		window.__streetClock !== undefined ? window.__streetClock : (Date.now() - start) / 1000);

	const drawSolid = regl({
		frag: SOLID_FRAG,
		vert: SOLID_VERT,
		attributes: {
			position: solid.position,
			normal: solid.normal,
			attr: solid.attr
		},
		elements: new Uint32Array(solid.elements),
		uniforms: { time: clock, gardenDetail: () => quality.gardenDetail }
	});

	const drawLeaves = regl({
		frag: LEAF_FRAG,
		vert: LEAF_VERT,
		attributes: {
			center: leaves.center,
			corner: leaves.corner,
			par: leaves.par,
			light: leaves.light,
			tint: leaves.tint,
			bloom: leaves.bloom
		},
		elements: new Uint32Array(leaves.elements),
		uniforms: { leaves: tex, time: clock },
		cull: { enable: false },
		// fewer leaf clusters on lighter settings (they are in random order)
		count: () => Math.floor(leaves.elements.length * quality.leafShare / 6) * 6
	});

	return function () {
		drawSolid();
		drawLeaves();
	};
};

module.exports.layout = { G, YARD, SUN };

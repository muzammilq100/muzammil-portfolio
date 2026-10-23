'use strict';

/*
 * ENTRANCE WALL
 * -------------
 * The wall you walk in from, opened up to the street outside:
 * a tall modern glass door in the middle and an arched window on
 * each side, all framed in slim black steel. The openings have
 * stone reveals, so they read as cut through a thick old wall:
 * a modern gallery inside an old Italian building.
 *
 * Material ids written here (see mesh.js):
 *   0  wall / stone
 *   8  black steel frames
 */

const WALL = 0.35;          // half thickness of the entrance wall
const WIDTH = 14;
const HEIGHT = 8;

const DOOR = { x0: 5.7, x1: 8.3, top: 4.6, transom: 3.55 };

const WINDOWS = [
	{ xc: 2.55, r: 1.15, sill: 1.2, spring: 3.85 },
	{ xc: 11.45, r: 1.15, sill: 1.2, spring: 3.85 }
];

const STEEL = [8, 0, 0];
const STONE = [0, 0, 0];

const BAR = 0.07;           // width of a frame bar
const BAR_D = 0.09;         // depth of a frame bar
const GLASS_Z = 0.0;        // frames and glass sit in the middle of the wall


/* box helper on the shared builder */
function box(B, x0, y0, z0, x1, y1, z1, m) {
	B.box(
		Math.min(x0, x1), Math.min(y0, y1), Math.min(z0, z1),
		Math.max(x0, x1), Math.max(y0, y1), Math.max(z0, z1),
		m
	);
}


/* a flat quad facing n (four corners in order around it) */
function face(B, a, b, c, d, n, m) {
	const ia = B.vert(a, n, m);
	const ib = B.vert(b, n, m);
	const ic = B.vert(c, n, m);
	const id = B.vert(d, n, m);
	B.tri(ia, ib, ic);
	B.tri(ia, ic, id);
}


/* the stone above the springing line of an arched window, outside the curve */
function archShoulders(B, w, top) {

	const steps = 40;
	const x0 = w.xc - w.r, x1 = w.xc + w.r;

	const rim = (a) => [w.xc + w.r * Math.cos(a), w.spring + w.r * Math.sin(a)];

	const outer = (a) => {
		const c = Math.cos(a), s = Math.sin(a);
		const tx = Math.abs(c) > 1e-6 ? w.r / Math.abs(c) : Infinity;
		const ty = s > 1e-6 ? (top - w.spring) / s : Infinity;
		const t = Math.min(tx, ty);
		return [
			Math.min(x1, Math.max(x0, w.xc + c * t)),
			Math.min(top, w.spring + s * t)
		];
	};

	for (let i = 0; i < steps; i++) {

		const a0 = Math.PI * i / steps;
		const a1 = Math.PI * (i + 1) / steps;

		const p0 = rim(a0), p1 = rim(a1), q0 = outer(a0), q1 = outer(a1);

		// gallery side and street side
		for (const [z, nz] of [[WALL, 1], [-WALL, -1]]) {
			face(B,
				[p0[0], p0[1], z], [p1[0], p1[1], z], [q1[0], q1[1], z], [q0[0], q0[1], z],
				[0, 0, nz], STONE);
		}

		// the curved stone soffit you look up into
		const am = (a0 + a1) / 2;
		face(B,
			[p0[0], p0[1], -WALL], [p1[0], p1[1], -WALL], [p1[0], p1[1], WALL], [p0[0], p0[1], WALL],
			[-Math.cos(am), -Math.sin(am), 0], STONE);
	}
}


/* black steel bars following the arch */
function archBar(B, w, rOut, rIn, z0, z1) {

	const steps = 32;

	for (let i = 0; i < steps; i++) {

		const a0 = Math.PI * i / steps;
		const a1 = Math.PI * (i + 1) / steps;
		const am = (a0 + a1) / 2;

		const P = (a, r, z) => [w.xc + r * Math.cos(a), w.spring + r * Math.sin(a), z];

		// faces towards the gallery and towards the street
		face(B, P(a0, rIn, z1), P(a1, rIn, z1), P(a1, rOut, z1), P(a0, rOut, z1), [0, 0, 1], STEEL);
		face(B, P(a0, rOut, z0), P(a1, rOut, z0), P(a1, rIn, z0), P(a0, rIn, z0), [0, 0, -1], STEEL);
		// inner edge
		face(B, P(a0, rIn, z0), P(a1, rIn, z0), P(a1, rIn, z1), P(a0, rIn, z1),
			[-Math.cos(am), -Math.sin(am), 0], STEEL);
	}
}


/* ===========================================================
 * WALL WITH OPENINGS
 * ===========================================================
 */

function addEntranceWall(B) {

	const z0 = -WALL, z1 = WALL;
	const [wl, wr] = WINDOWS;

	// full-height piers between the openings
	const piers = [
		[-WALL, wl.xc - wl.r],
		[wl.xc + wl.r, DOOR.x0],
		[DOOR.x1, wr.xc - wr.r],
		[wr.xc + wr.r, WIDTH + WALL]
	];

	for (const [a, b] of piers) {
		box(B, a, 0, z0, b, HEIGHT, z1, STONE);
	}

	// above the door
	box(B, DOOR.x0, DOOR.top, z0, DOOR.x1, HEIGHT, z1, STONE);

	// windows: below the sill, above the arch, and the arch shoulders
	for (const w of WINDOWS) {
		const top = w.spring + w.r;
		box(B, w.xc - w.r, 0, z0, w.xc + w.r, w.sill, z1, STONE);
		box(B, w.xc - w.r, top, z0, w.xc + w.r, HEIGHT, z1, STONE);
		archShoulders(B, w, top);
	}
}


/* ===========================================================
 * STEEL FRAMES
 * ===========================================================
 */

function addFrames(B) {

	const za = GLASS_Z - BAR_D / 2, zb = GLASS_Z + BAR_D / 2;
	const st = (x0, y0, x1, y1) => box(B, x0, y0, za, x1, y1, zb, STEEL);

	// ---------------- door ----------------
	const d = DOOR;
	st(d.x0, 0, d.x0 + BAR, d.top);                       // left
	st(d.x1 - BAR, 0, d.x1, d.top);                       // right
	st(d.x0, d.top - BAR, d.x1, d.top);                   // head
	st(d.x0, d.transom - BAR / 2, d.x1, d.transom + BAR / 2);   // transom
	st(d.x0, 0, d.x1, 0.11);                              // bottom rail
	const mid = (d.x0 + d.x1) / 2;
	st(mid - 0.045, 0, mid + 0.045, d.transom);           // meeting stiles

	// tall pull handles on the gallery side
	for (const hx of [mid - 0.16, mid + 0.16]) {
		box(B, hx - 0.022, 0.85, zb + 0.07, hx + 0.022, 2.35, zb + 0.11, STEEL);
		for (const hy of [0.95, 2.25]) {
			box(B, hx - 0.014, hy - 0.014, zb, hx + 0.014, hy + 0.014, zb + 0.07, STEEL);
		}
	}

	// ---------------- windows ----------------
	for (const w of WINDOWS) {
		const x0 = w.xc - w.r, x1 = w.xc + w.r;
		st(x0, w.sill, x0 + BAR, w.spring);                   // jambs
		st(x1 - BAR, w.sill, x1, w.spring);
		st(x0, w.sill, x1, w.sill + BAR);                     // sill bar
		st(x0, w.spring - BAR / 2, x1, w.spring + BAR / 2);   // transom at the springing
		st(w.xc - BAR / 2, w.sill, w.xc + BAR / 2, w.spring + w.r - 0.02);   // centre mullion
		archBar(B, w, w.r, w.r - BAR, za, zb);                // the arched head
		// two slim glazing bars in the fan light
		for (const a of [Math.PI / 4, 3 * Math.PI / 4]) {
			const c = Math.cos(a), s = Math.sin(a);
			const r0 = 0.0, r1 = w.r - 0.03;
			const t = 0.022;
			const p = (r, side) => [w.xc + c * r - s * t * side, w.spring + s * r + c * t * side];
			for (const [z, nz] of [[zb, 1], [za, -1]]) {
				face(B,
					[...p(r0, -1), z], [...p(r1, -1), z], [...p(r1, 1), z], [...p(r0, 1), z],
					[0, 0, nz], STEEL);
			}
		}
	}
}


/* ===========================================================
 * GLASS (drawn separately, see glass.js)
 * ===========================================================
 */

function glassPanes() {

	const position = [];
	const z = GLASS_Z;

	const rect = (x0, y0, x1, y1) => {
		position.push(
			[x0, y0, z], [x1, y0, z], [x1, y1, z],
			[x0, y0, z], [x1, y1, z], [x0, y1, z]
		);
	};

	rect(DOOR.x0, 0, DOOR.x1, DOOR.top);

	for (const w of WINDOWS) {
		rect(w.xc - w.r, w.sill, w.xc + w.r, w.spring);
		const steps = 32;
		for (let i = 0; i < steps; i++) {
			const a0 = Math.PI * i / steps, a1 = Math.PI * (i + 1) / steps;
			position.push(
				[w.xc, w.spring, z],
				[w.xc + w.r * Math.cos(a0), w.spring + w.r * Math.sin(a0), z],
				[w.xc + w.r * Math.cos(a1), w.spring + w.r * Math.sin(a1), z]
			);
		}
	}

	return position;
}


module.exports = {
	addEntranceWall,
	addFrames,
	glassPanes,
	DOOR,
	WINDOWS
};

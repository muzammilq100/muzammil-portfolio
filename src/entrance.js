'use strict';

/*
 * ENTRANCE WALL
 * -------------
 * One tall arched French door onto the street, in the spirit of the
 * great galleries: two glazed leaves with small panes in slim black
 * metal frames, a fanlight in the arch, and a carved stone surround.
 *
 * The same layout is used three times, so everything always agrees:
 *   - here, to build the frames and the wall around the opening
 *   - in glass.js, for the panes
 *   - in mesh.js (doorLightGLSL), to cast the light that falls
 *     through the door, with the shadows of every bar, onto the floor
 *
 * Material ids written here (see mesh.js):
 *   0  wall / stone
 *   8  black metal frames
 */

const WALL = 0.35;          // half thickness of the entrance wall
const WIDTH = 14;
const HEIGHT = 8;


/* ===========================================================
 * THE DOOR LAYOUT (gallery metres, the door plane is z = 0)
 * ===========================================================
 */

const DOOR = {
	xc: 7.0,                // centre
	r: 2.5,                 // arch radius = half the width
	spring: 4.7             // where the arch starts
};
DOOR.x0 = DOOR.xc - DOOR.r;
DOOR.x1 = DOOR.xc + DOOR.r;
DOOR.top = DOOR.spring + DOOR.r;

const BAR = 0.06;           // a glazing bar
const FRAME = 0.10;         // the outer frame and the meeting stiles
const BAR_D = 0.08;         // depth of the bars

// three columns of panes in each leaf
const LEAF = DOOR.r;
const VERTICALS = [
	DOOR.x0 + LEAF / 3,
	DOOR.x0 + 2 * LEAF / 3,
	DOOR.xc + LEAF / 3,
	DOOR.xc + 2 * LEAF / 3
];

// rows of panes below the arch
const BOTTOM_RAIL = 0.28;
const ROWS = [0.95, 1.65, 2.35, 3.05, 3.75];

// curved bars in the fanlight
const ARCS = [1.05, 1.80];


/* ===========================================================
 * HELPERS
 * ===========================================================
 */

const STEEL = [8, 0, 0];
const STONE = [0, 0, 0];

function box(B, x0, y0, z0, x1, y1, z1, m) {
	B.box(
		Math.min(x0, x1), Math.min(y0, y1), Math.min(z0, z1),
		Math.max(x0, x1), Math.max(y0, y1), Math.max(z0, z1),
		m
	);
}

function face(B, a, b, c, d, n, m) {
	const ia = B.vert(a, n, m);
	const ib = B.vert(b, n, m);
	const ic = B.vert(c, n, m);
	const id = B.vert(d, n, m);
	B.tri(ia, ib, ic);
	B.tri(ia, ic, id);
}

/* a ring following the arch: radii rIn..rOut, depth z0..z1 */
function ring(B, rIn, rOut, z0, z1, m, steps = 48, a0 = 0, a1 = Math.PI) {
	const P = (a, r, z) => [DOOR.xc + r * Math.cos(a), DOOR.spring + r * Math.sin(a), z];
	for (let i = 0; i < steps; i++) {
		const t0 = a0 + (a1 - a0) * i / steps;
		const t1 = a0 + (a1 - a0) * (i + 1) / steps;
		const tm = (t0 + t1) / 2;
		face(B, P(t0, rIn, z1), P(t1, rIn, z1), P(t1, rOut, z1), P(t0, rOut, z1), [0, 0, 1], m);
		face(B, P(t0, rOut, z0), P(t1, rOut, z0), P(t1, rIn, z0), P(t0, rIn, z0), [0, 0, -1], m);
		face(B, P(t0, rIn, z0), P(t1, rIn, z0), P(t1, rIn, z1), P(t0, rIn, z1),
			[-Math.cos(tm), -Math.sin(tm), 0], m);
		face(B, P(t1, rOut, z0), P(t0, rOut, z0), P(t0, rOut, z1), P(t1, rOut, z1),
			[Math.cos(tm), Math.sin(tm), 0], m);
	}
}

/* the wall between the arch and the top of the wall */
function archShoulders(B) {

	const steps = 48;
	const top = HEIGHT;
	const rim = (a) => [DOOR.xc + DOOR.r * Math.cos(a), DOOR.spring + DOOR.r * Math.sin(a)];
	const outer = (a) => {
		const c = Math.cos(a), s = Math.sin(a);
		const tx = Math.abs(c) > 1e-6 ? DOOR.r / Math.abs(c) : Infinity;
		const ty = s > 1e-6 ? (top - DOOR.spring) / s : Infinity;
		const t = Math.min(tx, ty);
		return [
			Math.min(DOOR.x1, Math.max(DOOR.x0, DOOR.xc + c * t)),
			Math.min(top, DOOR.spring + s * t)
		];
	};

	for (let i = 0; i < steps; i++) {
		const a0 = Math.PI * i / steps;
		const a1 = Math.PI * (i + 1) / steps;
		const p0 = rim(a0), p1 = rim(a1), q0 = outer(a0), q1 = outer(a1);
		for (const [z, nz] of [[WALL, 1], [-WALL, -1]]) {
			face(B, [p0[0], p0[1], z], [p1[0], p1[1], z], [q1[0], q1[1], z], [q0[0], q0[1], z], [0, 0, nz], STONE);
		}
		const am = (a0 + a1) / 2;
		face(B, [p0[0], p0[1], -WALL], [p1[0], p1[1], -WALL], [p1[0], p1[1], WALL], [p0[0], p0[1], WALL],
			[-Math.cos(am), -Math.sin(am), 0], STONE);
	}
}


/* ===========================================================
 * WALL WITH THE OPENING, AND ITS STONE SURROUND
 * ===========================================================
 */

function addEntranceWall(B) {

	const z0 = -WALL, z1 = WALL;

	// solid wall either side of the door
	box(B, -WALL, 0, z0, DOOR.x0, HEIGHT, z1, STONE);
	box(B, DOOR.x1, 0, z0, WIDTH + WALL, HEIGHT, z1, STONE);

	// above the arch
	archShoulders(B);

	addSurround(B);
}


/* carved surround on the gallery side: jambs, an archivolt and a keystone */
function addSurround(B) {

	const z1 = WALL;
	const W = 0.32, D = 0.07;
	box(B, DOOR.x0 - W, 0.30, z1, DOOR.x0, DOOR.spring, z1 + D, STONE);
	box(B, DOOR.x1, 0.30, z1, DOOR.x1 + W, DOOR.spring, z1 + D, STONE);
	// plinth blocks
	box(B, DOOR.x0 - W - 0.05, 0, z1, DOOR.x0, 0.30, z1 + D + 0.04, STONE);
	box(B, DOOR.x1, 0, z1, DOOR.x1 + W + 0.05, 0.30, z1 + D + 0.04, STONE);
	// impost mouldings where the arch springs
	box(B, DOOR.x0 - W - 0.06, DOOR.spring - 0.12, z1, DOOR.x0, DOOR.spring, z1 + D + 0.05, STONE);
	box(B, DOOR.x1, DOOR.spring - 0.12, z1, DOOR.x1 + W + 0.06, DOOR.spring, z1 + D + 0.05, STONE);
	// the archivolt, with a thin outer bead
	ring(B, DOOR.r, DOOR.r + W, z1, z1 + D, STONE);
	ring(B, DOOR.r + W, DOOR.r + W + 0.06, z1, z1 + D + 0.03, STONE);
	// keystone
	box(B, DOOR.xc - 0.22, DOOR.top - 0.08, z1, DOOR.xc + 0.22, DOOR.top + W + 0.12, z1 + D + 0.06, STONE);
}


/* ===========================================================
 * METAL FRAMES
 * ===========================================================
 */

function addFrames(B) {

	const za = -BAR_D / 2, zb = BAR_D / 2;
	const st = (x0, y0, x1, y1, w = 0) => box(B, x0 - w, y0, za, x1 + w, y1, zb, STEEL);

	// height of the arch above a given x
	const archY = (x) => DOOR.spring + Math.sqrt(Math.max(0, DOOR.r * DOOR.r - (x - DOOR.xc) * (x - DOOR.xc)));

	// outer frame: jambs, the arched head and the threshold
	st(DOOR.x0, 0, DOOR.x0 + FRAME, DOOR.spring);
	st(DOOR.x1 - FRAME, 0, DOOR.x1, DOOR.spring);
	ring(B, DOOR.r - FRAME, DOOR.r, za, zb, STEEL, 64);
	st(DOOR.x0, 0, DOOR.x1, 0.05);

	// the transom bar where the doors end and the fanlight begins
	st(DOOR.x0, DOOR.spring - 0.06, DOOR.x1, DOOR.spring + 0.06);

	// bottom rails of the two leaves
	st(DOOR.x0, 0, DOOR.x1, BOTTOM_RAIL);

	// meeting stiles in the middle, running up through the fanlight
	st(DOOR.xc - FRAME / 2, 0, DOOR.xc + FRAME / 2, DOOR.top - FRAME * 0.5);

	// vertical glazing bars, also running up through the fanlight
	for (const x of VERTICALS) {
		st(x - BAR / 2, BOTTOM_RAIL, x + BAR / 2, archY(x) - FRAME * 0.5);
	}

	// horizontal glazing bars in the doors
	for (const y of ROWS) {
		st(DOOR.x0, y - BAR / 2, DOOR.x1, y + BAR / 2);
	}

	// curved bars in the fanlight
	for (const r of ARCS) {
		ring(B, r - BAR / 2, r + BAR / 2, za, zb, STEEL, 48);
	}

	// small lever handles on the gallery side
	for (const s of [-1, 1]) {
		const hx = DOOR.xc + s * 0.16;
		box(B, hx - 0.02, 1.05, zb, hx + 0.02, 1.13, zb + 0.06, STEEL);
		box(B, hx - (s > 0 ? 0 : 0.14), 1.07, zb + 0.05, hx + (s > 0 ? 0.14 : 0), 1.11, zb + 0.08, STEEL);
	}
}


/* ===========================================================
 * GLASS
 * ===========================================================
 */

function glassPanes() {

	const position = [];
	const z = 0.0;
	const { x0, x1, xc, r, spring } = DOOR;

	position.push(
		[x0, 0, z], [x1, 0, z], [x1, spring, z],
		[x0, 0, z], [x1, spring, z], [x0, spring, z]
	);

	const steps = 48;
	for (let i = 0; i < steps; i++) {
		const a0 = Math.PI * i / steps, a1 = Math.PI * (i + 1) / steps;
		position.push(
			[xc, spring, z],
			[xc + r * Math.cos(a0), spring + r * Math.sin(a0), z],
			[xc + r * Math.cos(a1), spring + r * Math.sin(a1), z]
		);
	}

	return position;
}


/* ===========================================================
 * LIGHT THROUGH THE DOOR (GLSL)
 * ===========================================================
 *
 * For a point on the floor, follow a ray back towards the light
 * outside. It must pass through the opening at the inner and the
 * outer face of the wall (that gives the shadow of the reveal), and
 * it is dimmed wherever it crosses a bar of the frame. The shadow
 * edges soften with distance from the door, as real shadows do.
 */

const f = (x) => x.toFixed(4);

function doorLightGLSL() {

	const vList = VERTICALS.map((x) => `vb = max(vb, barCover(abs(q.x - ${f(x)}), ${f(BAR / 2)}, soft));`).join('\n\t\t');
	const hList = ROWS.map((y) => `hb = max(hb, barCover(abs(q.y - ${f(y)}), ${f(BAR / 2)}, soft));`).join('\n\t\t');
	const aList = ARCS.map((r) => `ab = max(ab, barCover(abs(rr - ${f(r)}), ${f(BAR / 2)}, soft));`).join('\n\t\t');

	return `
	float barCover(float d, float hw, float soft) {
		return 1.0 - smoothstep(hw - soft, hw + soft, d);
	}

	// how open the doorway is at a point (x, y) on a plane, 0..1
	float doorOpen(vec2 q, float soft) {
		float side = smoothstep(${f(DOOR.x0)} - soft, ${f(DOOR.x0)} + soft, q.x)
		           * (1.0 - smoothstep(${f(DOOR.x1)} - soft, ${f(DOOR.x1)} + soft, q.x));
		float above = smoothstep(-soft, soft, q.y);
		float rr = length(q - vec2(${f(DOOR.xc)}, ${f(DOOR.spring)}));
		float arch = q.y < ${f(DOOR.spring)} ? 1.0 : 1.0 - smoothstep(${f(DOOR.r)} - soft, ${f(DOOR.r)} + soft, rr);
		return side * above * arch;
	}

	// light that reaches floor point p through the door, 0..1
	float doorLight(vec3 p, vec3 toLight) {
		if (p.z < 0.3 || toLight.z > -0.01) return 0.0;
		// through the inner face of the wall
		float tIn = (${f(WALL)} - p.z) / toLight.z;
		float tMid = (0.0 - p.z) / toLight.z;
		float tOut = (${f(-WALL)} - p.z) / toLight.z;
		vec2 qIn = (p + toLight * tIn).xy;
		vec2 q = (p + toLight * tMid).xy;
		vec2 qOut = (p + toLight * tOut).xy;
		float dist = length(toLight * tMid);
		float soft = 0.006 + 0.016 * dist;
		float open = doorOpen(qIn, soft) * doorOpen(qOut, soft);
		if (open <= 0.0) return 0.0;

		// the frame: outer jambs, arched head, transom, rails, stiles, bars
		float rr = length(q - vec2(${f(DOOR.xc)}, ${f(DOOR.spring)}));
		float vb = barCover(abs(q.x - ${f(DOOR.xc)}), ${f(FRAME / 2)}, soft);
		${vList}
		float hb = barCover(abs(q.y - ${f(DOOR.spring)}), 0.06, soft);
		hb = max(hb, 1.0 - smoothstep(${f(BOTTOM_RAIL)} - soft, ${f(BOTTOM_RAIL)} + soft, q.y));
		float hRows = 0.0;
		{
			float hb2 = 0.0;
			${hList.replace(/hb = max\(hb,/g, 'hb2 = max(hb2,')}
			hRows = q.y < ${f(DOOR.spring)} ? hb2 : 0.0;
		}
		float ab = 0.0;
		${aList}
		ab = q.y > ${f(DOOR.spring)} ? ab : 0.0;
		float frame = max(
			barCover(abs(q.x - ${f(DOOR.x0 + FRAME / 2)}), ${f(FRAME / 2)}, soft),
			barCover(abs(q.x - ${f(DOOR.x1 - FRAME / 2)}), ${f(FRAME / 2)}, soft));
		frame = q.y < ${f(DOOR.spring)} ? frame : barCover(abs(rr - ${f(DOOR.r - FRAME / 2)}), ${f(FRAME / 2)}, soft);
		float cover = max(max(max(vb, hb), max(hRows, ab)), frame);
		return open * (1.0 - cover * 0.92);
	}`;
}


module.exports = {
	addEntranceWall,
	addSurround,
	addFrames,
	glassPanes,
	doorLightGLSL,
	DOOR,
	WALL
};

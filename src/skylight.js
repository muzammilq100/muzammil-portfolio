'use strict';

/*
 * SKYLIGHT
 * --------
 * A single rectangular glass lantern set into the middle of the
 * ceiling, clear of the walls: a clean two-step border in cream
 * plaster, slim beams dividing it into square panes, and fine
 * glazing in each pane (a star of bars with two square rings).
 *
 * Sunlight comes down through the panes and lands on the floor as
 * bright squares, each crossed by the shadows of the beams and the
 * glazing. The light is worked out in mesh.js with skylightGLSL(),
 * from the same layout as the geometry, so it always matches.
 *
 * Material ids written here (see mesh.js):
 *   9   sky seen through the glass
 *   10  cream plaster and the painted glazing bars
 */

const WIDTH = 14;
const HEIGHT = 8;


/* ===========================================================
 * LAYOUT (gallery metres)
 * ===========================================================
 */

// the lantern's overall size stays fixed; it is divided into panes
const SPAN_X = 7.75;
const SPAN_Z = 13.05;
const BEAM = 0.16;              // slim beam between panes
const NX = 6;                   // panes across the hall
const NZ = 9;                   // panes along the hall
const AX = (SPAN_X - (NX - 1) * BEAM) / NX;   // one pane, across (about 1.1 m)
const AZ = (SPAN_Z - (NZ - 1) * BEAM) / NZ;   // one pane, along (about 1.3 m)
const PX = AX + BEAM;
const PZ = AZ + BEAM;
const X_START = WIDTH / 2 - SPAN_X / 2;   // centred, about 3 m from each wall
const Z_START = 15.0;                     // a little past the entrance arch
const X_END = X_START + SPAN_X;
const Z_END = Z_START + SPAN_Z;           // ends before the last pair of side paintings

// the border steps up twice to the panes
const BORDER = 0.30;
const STEP1 = { y: HEIGHT + 0.18, inset: 0.15 };
const STEP2 = { y: HEIGHT + 0.36, inset: BORDER };
const BEAM_BOTTOM = HEIGHT + 0.20;        // the beams hang a little below the panes
const GLASS_Y = HEIGHT + 0.62;
const TOP_Y = HEIGHT + 0.90;              // the sky above the glass

const BAR = 0.016;              // half width of a glazing bar
const RING1 = 0.28;             // small rectangle round the centre (fraction of the pane)
const RING2 = 0.66;             // larger rectangle, nearer the pane's edge

// the sun for the skylight: high, a little towards the entrance and the left
const SUN = (() => {
	const v = [-0.15, 1.0, 0.30];
	const l = Math.hypot(v[0], v[1], v[2]);
	return v.map((x) => x / l);
})();

const SKY = [9, 0, 0];
const CREAM = [10, 0, 0];


/* ===========================================================
 * GEOMETRY
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

function down(B, x0, z0, x1, z1, y, m) {
	face(B, [x0, y, z0], [x1, y, z0], [x1, y, z1], [x0, y, z1], [0, -1, 0], m);
}

// four walls of a rectangular shaft, facing inwards
function shaft(B, x0, z0, x1, z1, y0, y1, m) {
	face(B, [x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0], [0, 0, 1], m);
	face(B, [x1, y0, z1], [x0, y0, z1], [x0, y1, z1], [x1, y1, z1], [0, 0, -1], m);
	face(B, [x0, y0, z1], [x0, y0, z0], [x0, y1, z0], [x0, y1, z1], [1, 0, 0], m);
	face(B, [x1, y0, z0], [x1, y0, z1], [x1, y1, z1], [x1, y1, z0], [-1, 0, 0], m);
}

// a rectangular ring facing down, between an outer and an inner rectangle
function ringDown(B, o, i, y, m) {
	down(B, o[0], o[1], o[2], i[1], y, m);
	down(B, o[0], i[3], o[2], o[3], y, m);
	down(B, o[0], i[1], i[0], i[3], y, m);
	down(B, i[2], i[1], o[2], i[3], y, m);
}

const paneX = (i) => X_START + i * PX;
const paneZ = (j) => Z_START + j * PZ;

function addSkylight(B, ceilingMat, length = 48) {

	// outer opening in the ceiling and the two steps of the border
	const R0 = [X_START - BORDER, Z_START - BORDER, X_END + BORDER, Z_END + BORDER];
	const inset = (r, d) => [r[0] + d, r[1] + d, r[2] - d, r[3] - d];
	const R1 = inset(R0, STEP1.inset);
	const R2 = inset(R0, STEP2.inset);

	// the plain ceiling around the lantern
	down(B, 0, 0, WIDTH, R0[1], HEIGHT, ceilingMat);
	down(B, 0, R0[3], WIDTH, length, HEIGHT, ceilingMat);
	down(B, 0, R0[1], R0[0], R0[3], HEIGHT, ceilingMat);
	down(B, R0[2], R0[1], WIDTH, R0[3], HEIGHT, ceilingMat);

	// a slim moulded lip round the opening
	const lip = 0.06, drop = 0.06;
	B.box(R0[0] - lip, HEIGHT - drop, R0[1] - lip, R0[2] + lip, HEIGHT, R0[1], CREAM);
	B.box(R0[0] - lip, HEIGHT - drop, R0[3], R0[2] + lip, HEIGHT, R0[3] + lip, CREAM);
	B.box(R0[0] - lip, HEIGHT - drop, R0[1], R0[0], HEIGHT, R0[3], CREAM);
	B.box(R0[2], HEIGHT - drop, R0[1], R0[2] + lip, HEIGHT, R0[3], CREAM);

	// the two steps
	shaft(B, ...R0.slice(0, 2), ...R0.slice(2), HEIGHT, STEP1.y, CREAM);
	ringDown(B, R0, R1, STEP1.y, CREAM);
	shaft(B, ...R1.slice(0, 2), ...R1.slice(2), STEP1.y, STEP2.y, CREAM);
	ringDown(B, R1, R2, STEP2.y, CREAM);

	// slim beams between the panes, hanging a little below them
	for (let i = 1; i < NX; i++) {
		const x = paneX(i) - BEAM;
		B.box(x, BEAM_BOTTOM, Z_START, x + BEAM, STEP2.y, Z_END, CREAM);
	}
	for (let j = 1; j < NZ; j++) {
		const z = paneZ(j) - BEAM;
		B.box(X_START, BEAM_BOTTOM, z, X_END, STEP2.y, z + BEAM, CREAM);
	}

	// each pane: a short shaft up to the glass, fine glazing, and the sky
	for (let j = 0; j < NZ; j++) {
		for (let i = 0; i < NX; i++) {
			const x = paneX(i), z = paneZ(j);
			shaft(B, x, z, x + AX, z + AZ, STEP2.y, TOP_Y, CREAM);
			down(B, x, z, x + AX, z + AZ, TOP_Y, SKY);
			addGlazing(B, x + AX / 2, z + AZ / 2, AX / 2, AZ / 2);
		}
	}
}

function addGlazing(B, cx, cz, hx, hz) {

	const y = GLASS_Y, w = BAR;

	// cross
	down(B, cx - hx, cz - w, cx + hx, cz + w, y, CREAM);
	down(B, cx - w, cz - hz, cx + w, cz + hz, y, CREAM);

	// diagonals, corner to corner
	for (const s of [1, -1]) {
		const L = Math.hypot(hx, hz);
		const ux = hx / L, uz = s * hz / L;
		const px = -uz * w, pz = ux * w;
		face(B,
			[cx - ux * L + px, y, cz - uz * L + pz],
			[cx + ux * L + px, y, cz + uz * L + pz],
			[cx + ux * L - px, y, cz + uz * L - pz],
			[cx - ux * L - px, y, cz - uz * L - pz],
			[0, -1, 0], CREAM);
	}

	// two rectangular rings
	for (const r of [RING1, RING2]) {
		const rx = r * hx, rz = r * hz;
		down(B, cx - rx - w, cz - rz - w, cx + rx + w, cz - rz + w, y, CREAM);
		down(B, cx - rx - w, cz + rz - w, cx + rx + w, cz + rz + w, y, CREAM);
		down(B, cx - rx - w, cz - rz + w, cx - rx + w, cz + rz - w, y, CREAM);
		down(B, cx + rx - w, cz - rz + w, cx + rx + w, cz + rz - w, y, CREAM);
	}
}


/* ===========================================================
 * LIGHT THROUGH THE SKYLIGHT (GLSL)
 * ===========================================================
 */

const f = (x) => x.toFixed(4);

function skylightGLSL() {
	return `
	const vec3 SKY_SUN = vec3(${SUN.map(f).join(', ')});

	float rectOpen(vec2 q, vec4 r, float soft) {
		vec2 lo = smoothstep(r.xy - soft, r.xy + soft, q);
		vec2 hi = 1.0 - smoothstep(r.zw - soft, r.zw + soft, q);
		return lo.x * lo.y * hi.x * hi.y;
	}

	// inside a pane (not on a beam)? 0..1
	float paneOpen(vec2 q, float soft) {
		vec2 rel = q - vec2(${f(X_START)}, ${f(Z_START)});
		vec2 pitch = vec2(${f(PX)}, ${f(PZ)});
		vec2 cell = floor(rel / pitch);
		if (cell.x < 0.0 || cell.y < 0.0 || cell.x > ${f(NX - 1)} || cell.y > ${f(NZ - 1)}) return 0.0;
		vec2 loc = rel - cell * pitch;
		return rectOpen(loc, vec4(0.0, 0.0, ${f(AX)}, ${f(AZ)}), soft);
	}

	float barCov(float d, float soft) {
		return 1.0 - smoothstep(${f(BAR)} - soft, ${f(BAR)} + soft, d);
	}

	// sunlight reaching point p through the skylight, 0..1
	float skylightAt(vec3 p) {
		if (p.y > ${f(HEIGHT - 0.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q0 = (p + L * ((${f(HEIGHT)} - p.y) / L.y)).xz;
		vec2 q1 = (p + L * ((${f(STEP1.y)} - p.y) / L.y)).xz;
		vec2 qb = (p + L * ((${f(BEAM_BOTTOM)} - p.y) / L.y)).xz;
		vec2 q2 = (p + L * ((${f(STEP2.y)} - p.y) / L.y)).xz;
		float tG = (${f(GLASS_Y)} - p.y) / L.y;
		vec2 qg = (p + L * tG).xz;
		vec2 qt = (p + L * ((${f(TOP_Y)} - p.y) / L.y)).xz;
		float soft = 0.004 + 0.007 * tG;
		float open = rectOpen(q0, vec4(${f(X_START - BORDER)}, ${f(Z_START - BORDER)}, ${f(X_END + BORDER)}, ${f(Z_END + BORDER)}), soft)
		           * rectOpen(q1, vec4(${f(X_START - BORDER + STEP1.inset)}, ${f(Z_START - BORDER + STEP1.inset)}, ${f(X_END + BORDER - STEP1.inset)}, ${f(Z_END + BORDER - STEP1.inset)}), soft)
		           * paneOpen(qb, soft) * paneOpen(q2, soft) * paneOpen(qt, soft);
		if (open <= 0.0) return 0.0;
		// the glazing, measured from the centre of this pane
		vec2 rel = qg - vec2(${f(X_START)}, ${f(Z_START)});
		vec2 pitch = vec2(${f(PX)}, ${f(PZ)});
		vec2 paneHalf = vec2(${f(AX / 2)}, ${f(AZ / 2)});
		vec2 c = rel - floor(rel / pitch) * pitch - paneHalf;
		vec2 ac = abs(c);
		vec2 an = ac / paneHalf;                       // 0 at the centre, 1 at the pane's edge
		float hm = min(paneHalf.x, paneHalf.y);
		float ring = max(an.x, an.y);
		float cover = max(barCov(ac.x, soft), barCov(ac.y, soft));
		cover = max(cover, barCov(abs(an.x - an.y) * hm * 0.7071, soft));
		cover = max(cover, barCov(abs(ring - ${f(RING1)}) * hm, soft));
		cover = max(cover, barCov(abs(ring - ${f(RING2)}) * hm, soft));
		return open * (1.0 - cover * 0.9);
	}

	// the same light for the beams in the air: the whole opening glows a
	// little, and the panes and bars show in it, softly
	float skylightVol(vec3 p) {
		if (p.y > ${f(HEIGHT - 0.1)}) return 0.0;
		vec3 L = SKY_SUN;
		vec2 q = (p + L * ((${f(GLASS_Y)} - p.y) / L.y)).xz;
		float open = rectOpen(q, vec4(${f(X_START)}, ${f(Z_START)}, ${f(X_END)}, ${f(Z_END)}), 0.25);
		if (open <= 0.0) return 0.0;
		return open * (0.2 + 0.8 * skylightAt(p));
	}

	// a soft daylight glow under the lantern
	float skylightGlow(vec3 p) {
		float z = smoothstep(${f(Z_START - 3.0)}, ${f(Z_START + 2.0)}, p.z)
		        * (1.0 - smoothstep(${f(Z_END - 2.0)}, ${f(Z_END + 3.0)}, p.z));
		float x = 1.0 - 0.35 * smoothstep(${f(SPAN_X / 2)}, ${f(WIDTH / 2)}, abs(p.x - ${f(WIDTH / 2)}));
		return z * x;
	}`;
}

module.exports = {
	addSkylight,
	skylightGLSL,
	Z_START,
	Z_END,
	GLASS_Y,
	HEIGHT
};

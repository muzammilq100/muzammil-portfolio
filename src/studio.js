'use strict';

/*
 * THE STUDIO
 * ----------
 * The painter's studio: a big, tall room under a glass roof of leaded,
 * patterned panes on black steel trusses. One long wall is old warm
 * plaster with tall arched steel windows; the other three are rough,
 * uneven slabs of pale coral stone (res/studio/rock_*). Bright morning
 * sun pours in through the windows and the roof, and every bar of the
 * glazing shows in the light on the floor, the walls and the dusty air.
 *
 * The red Gothic door in the far wall leads through to the piano room;
 * coming in by it, the windows are on your left. Facing it, against the
 * near wall, an old stone aedicule (res/studio/oldstone_*):
 * rusticated piers, a deep round-arched niche with a half dome, an
 * entablature and a low pediment. In the niche stands the nymph, seated
 * and preparing for her bath (res/nymph.bin, from his own scan file),
 * aged like the stone round her. From the niche's foot a long pool of
 * the same weathered stone runs back towards the door: dark still water
 * full of lily pads and pink water lilies.
 *
 * A work table with jars of brushes stands under the windows; pendant
 * lamps hang from the trusses (lit at night).
 *
 * Under the water: a gravel bed and the pool's marble walls, eight koi
 * (a real model, res/koi.bin, bent live along each fish's own swimming
 * path), caustics, and the shadows of the pads and the fish on the bed.
 * They are drawn after the water at its own depth and show through it
 * as much as the surface lets them, with the room's reflection laid
 * over them, bent by the waves. The surface is alive (pondSim): petals
 * fall and float, rings spread where they land and bounce off the walls,
 * koi near the surface leave wakes, the koi rise to sip, and the visitor can feed them
 * (see koiSim and feedAt). Credits for the pond's models and textures are
 * in the readme.
 *
 * The water and the polished stone floor both lie on y = 0, so the
 * gallery's own reflection pass (the room drawn upside down beneath the
 * floor) gives the pool its mirror.
 *
 * The light is worked out the way the rest of the gallery does it: from
 * the very same layout as the geometry (sunGLSL below), so the window
 * bars, the reveals, the roof's rafters and the trusses all cast their
 * shadows, and post.js uses the same function for the light shafts.
 *
 * The room is built in its own coordinates (x across 0..W, left wall at
 * x = 0; z from the entrance end 0 to the far end L; y up) and placed in
 * the gallery at O. It is not joined to the rest of the gallery yet.
 */

const PI = Math.PI;
const f = (x) => (+x).toFixed(4);

// ------------------------------------------------------------------
// LAYOUT (room metres)
// ------------------------------------------------------------------

const O = [-90.0, 0.0, 0.0];          // where the room sits in the gallery
const W = 16.0;                        // width (x)
const L = 22.0;                        // length (z)
const H = 7.8;                         // walls up to the roof's eaves
const RIDGE = 11.6;                    // the glass roof's ridge
const T = 0.55;                        // wall thickness
const KR = (RIDGE - H) / (W / 2);      // the roof's slope

// tall arched windows in both long walls
const WIN = { c: [3.6, 8.6, 13.6, 18.6], hw: 1.3, sill: 0.62, spring: 4.9 };
WIN.top = WIN.spring + WIN.hw;
// their steel glazing: three upright bars, transoms, a ring in the arch
const MULL = { cols: [-0.65, 0.0, 0.65], rowH: 0.71, w: 0.055, ring: 0.78 };

// the glass roof: rafters across, purlins along
const ROOF = { rafter: L / 12, rafterW: 0.10, purlin: 1.0, purlinW: 0.07 };
// the trusses under it (tie beams at the eaves)
const TRUSS_Z = [5.5, 11.0, 16.5];

// the niche (after his reference): an old stone aedicule standing proud of
// the near wall (z = 0), rusticated piers either side of a deep round-arched
// hollow, an entablature and a low pediment over it. The statue stands in
// the hollow and the pool runs out from its foot, straight towards the red
// door in the far wall (the way through to the piano room). NICHE is given,
// and buildNiche works, as if it stood against the far wall (z = L); it is
// then turned half round onto the near one (see appendTurned).
const NICHE = { cx: W / 2, hw: 1.12, spring: 3.95, pier: 1.05, face: L - 1.45, back: L - 0.2, floor: 0.66, top: 6.55 };
NICHE.x0 = NICHE.cx - NICHE.hw - NICHE.pier;
NICHE.x1 = NICHE.cx + NICHE.hw + NICHE.pier;
// the pool, from the niche's foot towards the door
const POOL = { x0: W / 2 - 1.7, x1: W / 2 + 1.7, z0: L - NICHE.face + 0.44, z1: L - 7.2, curb: 0.5, top: 0.36 };
// the old pool's layout (where its pads, lilies and koi were placed, from
// the door's end, 5.6, to the statue's, 16.6), mapped onto this one
const PZ = (z) => POOL.z1 - (z - 5.6) / 11.0 * (POOL.z1 - POOL.z0);
// the statue, standing in the niche on a low block, taller than before
// (VENUS.z is where she stands in the room; NZ is the same, seen from the far wall)
const VENUS = { x: W / 2, z: 1.0, plinth: NICHE.floor + 0.26, height: 2.75, yaw: 0.35, file: 'res/nymph.bin' };
const NZ = L - VENUS.z;

// the sun: the direction towards it. Bright morning sun, fairly low, from
// the window wall (x = 0) and a little from behind the red door's end, so
// it pours in through those windows and the roof and falls across the floor
// towards the niche and the nymph. At night the moon comes in the same way.
const SUN = (() => {
	const v = [-0.68, 0.60, 0.36];
	const l = Math.hypot(v[0], v[1], v[2]);
	return v.map((x) => x / l);
})();

const toW = (p) => [p[0] + O[0], p[1] + O[1], p[2] + O[2]];

// ------------------------------------------------------------------
// SHARED GLSL: the sun through the openings
// ------------------------------------------------------------------
//   float studioSun(vec3 pw)    0..1: how much sun reaches world point pw
//   STUDIO_SUN                  direction towards the sun

function sunGLSL() {
	const winTests = WIN.c.map((c) => `
		{
			float dz = q.z - ${f(c)};
			float inside = smoothstep(-b, b, ${f(WIN.hw)} - abs(dz)) * smoothstep(-b, b, q.y - ${f(WIN.sill)});
			float arch = smoothstep(-b, b, ${f(WIN.hw)} - length(vec2(dz, max(q.y - ${f(WIN.spring)}, 0.0))));
			o = max(o, inside * arch);
		}`).join('');
	const mullTests = WIN.c.map((c) => `
		{
			float dz = q.z - ${f(c)};
			if (abs(dz) < ${f(WIN.hw + 0.2)}) {
				${MULL.cols.map((m) => `bar = max(bar, 1.0 - smoothstep(${f(MULL.w * 0.5)} - b, ${f(MULL.w * 0.5)} + b, abs(dz - ${f(m)})));`).join('\n\t\t\t\t')}
				float ry = q.y - ${f(WIN.sill)};
				float tr = abs(ry - ${f(MULL.rowH)} * floor(ry / ${f(MULL.rowH)} + 0.5));
				if (q.y < ${f(WIN.spring + 0.02)}) bar = max(bar, 1.0 - smoothstep(${f(MULL.w * 0.5)} - b, ${f(MULL.w * 0.5)} + b, tr));
				float rr = length(vec2(dz, q.y - ${f(WIN.spring)}));
				if (q.y > ${f(WIN.spring)}) bar = max(bar, 1.0 - smoothstep(${f(MULL.w * 0.5)} - b, ${f(MULL.w * 0.5)} + b, abs(rr - ${f(MULL.ring)})));
				// the frame round the opening
				bar = max(bar, 1.0 - smoothstep(0.0, b + 0.03, ${f(WIN.hw)} - max(abs(dz), q.y > ${f(WIN.spring)} ? rr : 0.0)));
			}
		}`).join('');
	return `
	const vec3 STUDIO_SUN = vec3(${f(SUN[0])}, ${f(SUN[1])}, ${f(SUN[2])});

	// how open a window is at (y, z) on the wall's face; b softens edges
	float studioWinOpen(vec3 q, float b) {
		float o = 0.0;
		${winTests}
		return o;
	}
	float studioWinBars(vec3 q, float b) {
		float bar = 0.0;
		${mullTests}
		return bar;
	}

	// the leaded pattern in each pane of the roof: q is the pane's own
	// coordinates (centre 0, half size ${f(ROOF.purlin / 2)} x ${f(ROOF.rafter / 2)}),
	// b the softness. Returns how much light gets through.
	float studioRoofPattern(vec2 q, float b) {
		vec2 hs = vec2(${f(ROOF.purlin / 2)}, ${f(ROOF.rafter / 2)});
		vec2 a = abs(q);
		float w = 0.022;
		float d = abs(length(q * vec2(1.0, 0.62)) - 0.36);               // the ring
		d = min(d, abs(dot(a, hs.yx) - hs.x * hs.y) / length(hs));       // the diamond
		d = min(d, abs(length(q) - 0.11));                               // the rondel
		d = min(d, abs(length(a - hs) - 0.30));                          // quarter rings
		d = min(d, abs(length(a - vec2(0.0, hs.y)) - 0.16));             // and at the ends
		float lead = 1.0 - smoothstep(w - b, w + b, d);
		// textured, faintly frosted glass in the rondel and the ring's petals
		float frost = smoothstep(0.11 + b, 0.11 - b, length(q)) * 0.35
			+ smoothstep(0.36 + b, 0.36 - b, length(q * vec2(1.0, 0.62))) * smoothstep(0.1, 0.16, length(q)) * 0.12;
		return (1.0 - lead) * (1.0 - frost);
	}

	float studioVineClump(float u, float seed) {
		return step(-0.25, 0.5 * sin(u * 1.9 + seed) + 0.5 * sin(u * 0.77 + seed * 1.3));
	}
	// how much of the sun the flowering vine takes at a point under a beam
	// (d: distance across the beam, u, v: along and across for the dapple)
	float studioVineShade(float d, float u, float v, float seed) {
		float band = smoothstep(0.5, 0.2, abs(d));
		float dap = 0.5 + 0.5 * sin(u * 23.0 + v * 9.0 + seed) * sin(v * 29.0 - u * 7.0 + seed * 2.0);
		dap = smoothstep(0.2, 0.65, dap);
		return band * studioVineClump(u, seed) * dap * 0.85;
	}

	float studioSun(vec3 pw) {
		vec3 p = pw - vec3(${f(O[0])}, ${f(O[1])}, ${f(O[2])});
		vec3 S = STUDIO_SUN;
		// the niche: inside its hollow, the sun gets in only through the arch;
		// elsewhere its block of stone stands in the way of some of the light
		{
			// (worked as if the niche stood against the far wall: z turned round)
			vec3 q = vec3(${f(W)} - p.x, p.y, ${f(L)} - p.z);
			vec3 Sq = vec3(-S.x, S.y, -S.z);
			float dxn = q.x - ${f(NICHE.cx)};
			if (abs(dxn) < ${f(NICHE.hw)} && q.z > ${f(NICHE.face)} && q.y > ${f(NICHE.floor - 0.05)} && q.y < ${f(NICHE.spring)} + sqrt(max(${f(NICHE.hw * NICHE.hw)} - dxn * dxn, 0.0))) {
				if (Sq.z >= 0.0) return 0.0;
				vec3 hf = q + Sq * ((${f(NICHE.face)} - q.z) / Sq.z);
				float hx = hf.x - ${f(NICHE.cx)};
				float edge = ${f(NICHE.hw)} - abs(hx);
				float topY = ${f(NICHE.spring)} + sqrt(max(${f(NICHE.hw * NICHE.hw)} - hx * hx, 0.0));
				float soft = 0.02 + 0.03 * (${f(NICHE.face)} - q.z) / Sq.z;
				float inA = smoothstep(-soft, soft, edge) * smoothstep(-soft, soft, topY - hf.y);
				if (inA <= 0.0) return 0.0;
			} else {
				vec3 bmin = vec3(${f(NICHE.x0 - 0.2)}, 0.0, ${f(NICHE.face - 0.3)}), bmax = vec3(${f(NICHE.x1 + 0.2)}, ${f(6.95)}, ${f(L)});
				vec3 inv = 1.0 / Sq;
				vec3 t0 = (bmin - q) * inv, t1 = (bmax - q) * inv;
				vec3 tn = min(t0, t1), tf = max(t0, t1);
				float a = max(max(tn.x, tn.y), tn.z), bb = min(min(tf.x, tf.y), tf.z);
				if (bb > max(a, 0.0) && a > 0.0) return 0.0;
			}
		}
		// where the ray towards the sun leaves through the left wall
		float tw = (0.0 - p.x) / S.x;
		// and where it rises past the eaves
		float te = (${f(H)} - p.y) / S.y;
		if (tw > 0.0 && tw < te) {
			vec3 h0 = p + S * tw;
			if (h0.z < 0.0 || h0.z > ${f(L)}) return 0.0;
			vec3 h1 = p + S * ((${f(-T)} - p.x) / S.x);
			vec3 hm = p + S * ((${f(-T * 0.5)} - p.x) / S.x);
			float b = 0.006 + 0.0075 * tw;
			float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
			if (open <= 0.0) return 0.0;
			float bar = studioWinBars(hm, b);
			return open * (1.0 - bar) * 0.92;
		}
		// up through the roof: the trusses' tie beams first
		vec3 he = p + S * max(te, 0.0);
		float vis = 1.0;
		if (p.y < ${f(H)}) {
			if (he.z < 0.0 || he.z > ${f(L)} || he.x < 0.0 || he.x > ${f(W)}) return 0.0;
			float be = 0.01 + 0.008 * te;
			${TRUSS_Z.map((z) => `vis *= smoothstep(0.08 - be, 0.08 + be, abs(he.z - ${f(z)}));`).join('\n\t\t\t')}
			// the bougainvillea along the tie beams
			${VINE.filter((v) => v[0] === 'truss').map(([k, c, sd]) => `vis *= 1.0 - studioVineShade(he.z - ${f(c)}, he.x, he.z, ${f(sd)});`).join('\n\t\t\t')}
		}
		// then the glass: the two slopes of the roof
		float tl = (${f(KR)} * p.x - p.y + ${f(H)}) / (S.y - ${f(KR)} * S.x);
		float tr = (${f(KR)} * (${f(W)} - p.x) - p.y + ${f(H)}) / (S.y + ${f(KR)} * S.x);
		float t = 1e9;
		vec3 h = vec3(0.0);
		vec3 hl = p + S * tl, hr = p + S * tr;
		if (tl > 0.0 && hl.x >= -0.01 && hl.x <= ${f(W / 2 + 0.01)}) { t = tl; h = hl; }
		if (tr > 0.0 && tr < t && hr.x >= ${f(W / 2 - 0.01)} && hr.x <= ${f(W + 0.01)}) { t = tr; h = hr; }
		if (t > 1e8) return 0.0;
		if (h.z < 0.0 || h.z > ${f(L)}) return 0.0;
		float b = 0.008 + 0.0075 * t;
		float rz = abs(h.z - ${f(ROOF.rafter)} * floor(h.z / ${f(ROOF.rafter)} + 0.5));
		float bar = 1.0 - smoothstep(${f(ROOF.rafterW * 0.5)} - b, ${f(ROOF.rafterW * 0.5)} + b, rz);
		float ux = h.x < ${f(W / 2)} ? h.x : ${f(W)} - h.x;
		float rx = abs(ux - ${f(ROOF.purlin)} * floor(ux / ${f(ROOF.purlin)} + 0.5));
		bar = max(bar, 1.0 - smoothstep(${f(ROOF.purlinW * 0.5)} - b, ${f(ROOF.purlinW * 0.5)} + b, rx));
		// the ridge beam
		bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${f(W / 2)})));
		// the leaded pattern in the panes (its shadow is crisper than
		// the sun's disc would allow, for the drawing to read)
		vec2 pq = vec2(ux - ${f(ROOF.purlin)} * floor(ux / ${f(ROOF.purlin)}) - ${f(ROOF.purlin / 2)}, h.z - ${f(ROOF.rafter)} * floor(h.z / ${f(ROOF.rafter)}) - ${f(ROOF.rafter / 2)});
		float pat = studioRoofPattern(pq, 0.004 + 0.0035 * t);
		// and along the rafters and the ridge
		${VINE.filter((v) => v[0] === 'rafter').map(([k, c, sd]) => `pat *= 1.0 - studioVineShade(h.z - ${f(c)}, h.x, h.z, ${f(sd)});`).join('\n\t\t')}
		pat *= 1.0 - studioVineShade(h.x - ${f(W / 2)}, h.z, h.x, 0.9);
		return vis * (1.0 - bar) * pat * 0.78;
	}`;
}

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

// material ids
const K = {
	FLOOR: 0, PLASTER: 1, STONE: 2, STEEL: 3, WATER: 4, PAD: 5, PETAL: 6, STAMEN: 7,
	MARBLE: 8, WOOD: 9, GESSO: 10, PAINT: 11, POT: 12, SHADE: 13, BULB: 14, NICHE: 15,
	JAR: 16, SOIL: 17, BRUSH: 18, TRAVERTINE: 19, CLOTH: 20,
	WMARBLE: 21, REDDOOR: 22, REDPANEL: 23, DARKWOOD: 24, BRASS: 25, BRACT: 26, KEYHOLE: 27,
	ROCK: 28, OLDSTONE: 29, HOLLOW: 30
};

function Geo() {
	const g = { pos: [], nrm: [], kind: [], uv: [], anchor: [], idx: [] };
	// things floating on the pool carry their centre, a seed and a flag
	g.float = null;
	g.v = (p, n, k, uv) => {
		g.pos.push(p[0] + O[0], p[1] + O[1], p[2] + O[2]); g.nrm.push(n[0], n[1], n[2]); g.kind.push(k); g.uv.push(uv ? uv[0] : 0, uv ? uv[1] : 0);
		if (g.float) g.anchor.push(g.float[0] + O[0], g.float[1] + O[2], g.float[2], 1);
		else g.anchor.push(0, 0, 0, 0);
		return g.pos.length / 3 - 1;
	};
	g.quad = (a, b, c, d, n, k, uvs) => {
		const i = g.v(a, n, k, uvs && uvs[0]), j = g.v(b, n, k, uvs && uvs[1]), l = g.v(c, n, k, uvs && uvs[2]), m = g.v(d, n, k, uvs && uvs[3]);
		g.idx.push(i, j, l, i, l, m);
	};
	// an axis-aligned box (all six sides unless told otherwise)
	g.box = (x0, y0, z0, x1, y1, z1, k, skip) => {
		const s = skip || {};
		if (!s.top) g.quad([x0, y1, z0], [x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [0, 1, 0], k, [[x0, z0], [x0, z1], [x1, z1], [x1, z0]]);
		if (!s.bottom) g.quad([x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], [0, -1, 0], k, [[x0, z0], [x1, z0], [x1, z1], [x0, z1]]);
		if (!s.x0) g.quad([x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], [-1, 0, 0], k, [[z0, y0], [z1, y0], [z1, y1], [z0, y1]]);
		if (!s.x1) g.quad([x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [1, 0, 0], k, [[z1, y0], [z0, y0], [z0, y1], [z1, y1]]);
		if (!s.z0) g.quad([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [0, 0, -1], k, [[x1, y0], [x0, y0], [x0, y1], [x1, y1]]);
		if (!s.z1) g.quad([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], [0, 0, 1], k, [[x0, y0], [x1, y0], [x1, y1], [x0, y1]]);
	};
	// a box turned about y by yaw round its own centre (cx, cz)
	g.tbox = (cx, cz, yaw, hx, y0, y1, hz, k, tilt) => {
		const c = Math.cos(yaw), s = Math.sin(yaw);
		const ct = Math.cos(tilt || 0), st = Math.sin(tilt || 0);
		// tilt: lean back about the local x axis, from the bottom
		const P = (x, y, z) => {
			const yy = y0 + (y - y0) * ct - z * st * 0, zz = z + (y - y0) * st;
			const y2 = y0 + (y - y0) * ct;
			return [cx + c * x + s * zz, y2, cz - s * x + c * zz];
		};
		const R = (n) => {
			const ny = n[1] * ct - n[2] * st, nz = n[2] * ct + n[1] * st;
			return [c * n[0] + s * nz, ny, -s * n[0] + c * nz];
		};
		const q = (a, b, cc, d, n) => g.quad(P(...a), P(...b), P(...cc), P(...d), R(n), k, [[a[0] + a[2], a[1]], [b[0] + b[2], b[1]], [cc[0] + cc[2], cc[1]], [d[0] + d[2], d[1]]]);
		q([-hx, y1, -hz], [-hx, y1, hz], [hx, y1, hz], [hx, y1, -hz], [0, 1, 0]);
		q([-hx, y0, -hz], [hx, y0, -hz], [hx, y0, hz], [-hx, y0, hz], [0, -1, 0]);
		q([-hx, y0, -hz], [-hx, y0, hz], [-hx, y1, hz], [-hx, y1, -hz], [-1, 0, 0]);
		q([hx, y0, hz], [hx, y0, -hz], [hx, y1, -hz], [hx, y1, hz], [1, 0, 0]);
		q([hx, y0, -hz], [-hx, y0, -hz], [-hx, y1, -hz], [hx, y1, -hz], [0, 0, -1]);
		q([-hx, y0, hz], [hx, y0, hz], [hx, y1, hz], [-hx, y1, hz], [0, 0, 1]);
	};
	// a beam from a to b (a square section of half width r)
	g.beam = (a, b, r, k, up) => {
		const d = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
		const len = Math.hypot(...d);
		const t = d.map((x) => x / len);
		let u = up || (Math.abs(t[1]) > 0.9 ? [1, 0, 0] : [0, 1, 0]);
		let s = [t[1] * u[2] - t[2] * u[1], t[2] * u[0] - t[0] * u[2], t[0] * u[1] - t[1] * u[0]];
		const sl = Math.hypot(...s); s = s.map((x) => x / sl);
		u = [s[1] * t[2] - s[2] * t[1], s[2] * t[0] - s[0] * t[2], s[0] * t[1] - s[1] * t[0]];
		const corner = (p, i, j) => [p[0] + s[0] * r * i + u[0] * r * j, p[1] + s[1] * r * i + u[1] * r * j, p[2] + s[2] * r * i + u[2] * r * j];
		const sides = [[[1, -1], [1, 1], s], [[1, 1], [-1, 1], u], [[-1, 1], [-1, -1], s.map((x) => -x)], [[-1, -1], [1, -1], u.map((x) => -x)]];
		for (const [i0, i1, n] of sides) {
			g.quad(corner(a, ...i0), corner(b, ...i0), corner(b, ...i1), corner(a, ...i1), n, k, [[0, 0], [len, 0], [len, 1], [0, 1]]);
		}
	};
	// a lathe (surface of revolution) from a profile of [r, y]
	g.lathe = (cx, cz, prof, k, seg) => {
		const n = seg || 32;
		const rows = prof.map(([r, y], j) => {
			// normal from the neighbouring profile points
			const a = prof[Math.max(0, j - 1)], b = prof[Math.min(prof.length - 1, j + 1)];
			const dr = b[0] - a[0], dy = b[1] - a[1];
			const nl = Math.hypot(dr, dy) || 1;
			const nr = dy / nl, ny = -dr / nl;
			const row = [];
			for (let i = 0; i <= n; i++) {
				const t = (i / n) * 2 * PI;
				row.push(g.v([cx + Math.cos(t) * r, y, cz + Math.sin(t) * r], [Math.cos(t) * nr, ny, Math.sin(t) * nr], k, [i / n * r * 2 * PI, y]));
			}
			return row;
		});
		for (let j = 0; j < rows.length - 1; j++) {
			for (let i = 0; i < n; i++) {
				const a = rows[j][i], b = rows[j][i + 1], c = rows[j + 1][i + 1], d = rows[j + 1][i];
				g.idx.push(a, d, c, a, c, b);
			}
		}
	};
	return g;
}

const winTop = (dz) => (Math.abs(dz) >= WIN.hw ? null : WIN.spring + Math.sqrt(WIN.hw * WIN.hw - dz * dz));


// ------------------------------------------------------------------
// THE BOUGAINVILLEA: where it grows along the roof's steel (shared with
// the shader, so the flowers' dappled shadow falls where they are)
// ------------------------------------------------------------------

// beams it climbs: [kind, fixed coordinate, seed]
//   'truss'  along x at z = c (the tie beams, at the eaves)
//   'rafter' along x at z = c, following the roof's slope
//   'ridge'  along z at x = W / 2
const VINE = [
	['truss', TRUSS_Z[0], 3.1], ['truss', TRUSS_Z[1], 5.4], ['truss', TRUSS_Z[2], 7.7],
	['rafter', ROOF.rafter * 2, 1.7], ['rafter', ROOF.rafter * 5, 8.5], ['rafter', ROOF.rafter * 8, 13.6], ['rafter', ROOF.rafter * 10, 17.0],
	['ridge', W / 2, 0.9]
];
// whether a stretch of beam is in flower (identical in the shader)
const vineClump = (u, seed) => 0.5 * Math.sin(u * 1.9 + seed) + 0.5 * Math.sin(u * 0.77 + seed * 1.3) > -0.25;
const roofY = (x) => (x < W / 2 ? H + KR * x : H + KR * (W - x));
// a point along a vine beam, slightly under the steel
function vinePoint(kind, c, u) {
	if (kind === 'truss') return [u, H - 0.12, c];
	if (kind === 'rafter') return [u, roofY(u) - 0.2, c];
	return [c, RIDGE - 0.32, u];
}
const vineRange = (kind) => (kind === 'ridge' ? [0.4, L - 0.4] : [0.35, W - 0.35]);

// ------------------------------------------------------------------
// THE RED DOOR (after his reference): a tall pointed Gothic arch, deep
// crimson paint, one tall fielded panel below, two pointed panels in
// the arch split by a muntin, a long ornate brass plate with a round
// knob, all in a dark wooden pointed frame on plinth blocks.
// ------------------------------------------------------------------

const DOOR = { w: 1.72, spring: 2.05, r: 2.05, frame: 0.21, zl: L - 0.05, zf: L - 0.13 };
DOOR.c = DOOR.r - DOOR.w / 2;
// the top of the arch at x (from the door's centre), for an arch of
// half width hw drawn on the same two centres
const archTop = (x, grow) => {
	const r = DOOR.r + (grow || 0);
	const a = Math.abs(x) + DOOR.c;
	return a >= r ? DOOR.spring : DOOR.spring + Math.sqrt(r * r - a * a);
};
DOOR.top = archTop(0);

function buildDoor(g) {
	const cx = W / 2, { w, frame, zl, zf } = DOOR;
	const hw = w / 2, ow = hw + frame;
	const dx = 0.02;
	// the frame's face: between the leaf's outline and the outer arch
	for (let x = -ow; x < ow - 1e-6; x += dx) {
		const xa = x, xb = Math.min(ow, x + dx), xm = (xa + xb) / 2;
		const ta = archTop(xa, frame), tb = archTop(xb, frame);
		let ba = 0, bb = 0;
		if (Math.abs(xm) < hw) { ba = archTop(xa); bb = archTop(xb); }
		if (Math.abs(xm) >= hw || true) {
			const y0a = Math.abs(xm) < hw ? ba : 0, y0b = Math.abs(xm) < hw ? bb : 0;
			g.quad([cx + xb, y0b, zf], [cx + xa, y0a, zf], [cx + xa, ta, zf], [cx + xb, tb, zf], [0, 0, -1], K.DARKWOOD, [[xb, y0b], [xa, y0a], [xa, ta], [xb, tb]]);
		}
		// the frame's outer edge, back to the wall
		g.quad([cx + xa, ta, zf], [cx + xa, ta, L], [cx + xb, tb, L], [cx + xb, tb, zf], [0, 1, 0], K.DARKWOOD, [[xa, 0], [xa, 1], [xb, 1], [xb, 0]]);
		// the reveal: the frame's inner face, from its front to the leaf
		if (Math.abs(xm) < hw) {
			g.quad([cx + xa, ba, zf], [cx + xb, bb, zf], [cx + xb, bb, zl], [cx + xa, ba, zl], [0, -1, 0], K.DARKWOOD, [[xa, 0], [xb, 0], [xb, 1], [xa, 1]]);
		}
	}
	for (const sx of [-1, 1]) {
		// the frame's jambs: outer sides and inner reveals
		g.quad([cx + sx * ow, 0, zf], [cx + sx * ow, 0, L], [cx + sx * ow, DOOR.spring, L], [cx + sx * ow, DOOR.spring, zf], [sx, 0, 0], K.DARKWOOD, [[0, 0], [1, 0], [1, 1], [0, 1]]);
		g.quad([cx + sx * hw, 0, zf], [cx + sx * hw, DOOR.spring, zf], [cx + sx * hw, DOOR.spring, zl], [cx + sx * hw, 0, zl], [-sx, 0, 0], K.DARKWOOD, [[0, 0], [1, 0], [1, 1], [0, 1]]);
		// plinth blocks at the foot
		g.box(cx + sx * (hw + frame / 2) - frame / 2 - 0.04, 0, zf - 0.04, cx + sx * (hw + frame / 2) + frame / 2 + 0.04, 0.42, L, K.DARKWOOD);
	}
	// a small moulding round the frame's inner edge
	const M = 40;
	for (let i = 0; i < M; i++) {
		const xa = -hw + (2 * hw) * i / M, xb = -hw + (2 * hw) * (i + 1) / M;
		g.beam([cx + xa, archTop(xa) + 0.03, zf - 0.015], [cx + xb, archTop(xb) + 0.03, zf - 0.015], 0.018, K.DARKWOOD);
	}
	for (const sx of [-1, 1]) g.beam([cx + sx * (hw + 0.03), 0.42, zf - 0.015], [cx + sx * (hw + 0.03), DOOR.spring + 0.02, zf - 0.015], 0.018, K.DARKWOOD);

	// the leaf: a flat crimson slab filling the pointed arch
	for (let x = -hw; x < hw - 1e-6; x += dx) {
		const xa = x, xb = Math.min(hw, x + dx);
		const ta = archTop(xa), tb = archTop(xb);
		g.quad([cx + xb, 0, zl], [cx + xa, 0, zl], [cx + xa, ta, zl], [cx + xb, tb, zl], [0, 0, -1], K.REDDOOR, [[xb, 0], [xa, 0], [xa, ta], [xb, tb]]);
	}
	// the tall fielded panel below: a moulded border and a raised field
	const px = hw - 0.2, py0 = 0.3, py1 = 2.12, z = zl - 0.006;
	const mould = 0.05;
	const rail = (x0, y0, x1, y1) => g.box(cx + x0, y0, z - 0.018, cx + x1, y1, z, K.REDDOOR);
	rail(-px, py0, px, py0 + mould); rail(-px, py1 - mould, px, py1);
	rail(-px, py0, -px + mould, py1); rail(px - mould, py0, px, py1);
	g.box(cx - px + 0.14, py0 + 0.14, z - 0.022, cx + px - 0.14, py1 - 0.14, z, K.REDDOOR);
	// a lock rail across, and the two pointed panels in the arch,
	// recessed and darker, split by a muntin
	const ay0 = 2.36;
	rail(-hw + 0.08, py1 + 0.06, hw - 0.08, py1 + 0.12);
	for (const sx of [-1, 1]) {
		const x0 = 0.07, x1 = hw - 0.17;
		for (let x = x0; x < x1 - 1e-6; x += dx) {
			const xa = x, xb = Math.min(x1, x + dx);
			const ta = archTop(xa, -0.18), tb = archTop(xb, -0.18);
			if (ta <= ay0 + 0.02 && tb <= ay0 + 0.02) continue;
			const X = (u) => cx + sx * u;
			const pts = [[X(xa), ay0, z + 0.004], [X(xb), ay0, z + 0.004], [X(xb), Math.max(ay0, tb), z + 0.004], [X(xa), Math.max(ay0, ta), z + 0.004]];
			if (sx > 0) g.quad(pts[1], pts[0], pts[3], pts[2], [0, 0, -1], K.REDPANEL, [[xb, 0], [xa, 0], [xa, 1], [xb, 1]]);
			else g.quad(...pts, [0, 0, -1], K.REDPANEL, [[xa, 0], [xb, 0], [xb, 1], [xa, 1]]);
		}
	}
	g.beam([cx, ay0 - 0.02, z - 0.008], [cx, archTop(0, -0.12), z - 0.008], 0.03, K.REDDOOR);
	g.beam([cx - hw + 0.1, ay0 - 0.01, z - 0.006], [cx + hw - 0.1, ay0 - 0.01, z - 0.006], 0.014, K.REDDOOR);

	// the brass: a long ornate back plate, a round knob, a keyhole
	// (on the right as you face the door)
	const hx = cx - hw + 0.15, hy = 1.06, hz = z - 0.03;
	g.box(hx - 0.034, hy - 0.2, hz - 0.008, hx + 0.034, hy + 0.17, hz + 0.012, K.BRASS);
	for (const [y, r] of [[hy + 0.2, 0.026], [hy + 0.235, 0.016], [hy - 0.23, 0.026], [hy - 0.265, 0.016]]) {
		g.lathe(hx, hz - 0.002, [[0, y - r], [r, y - r * 0.4], [r, y + r * 0.4], [0, y + r]], K.BRASS, 12);
	}
	// scrolls down the plate's edges
	for (let i = 0; i < 6; i++) {
		const y = hy - 0.17 + i * 0.065;
		for (const sx of [-1, 1]) g.beam([hx + sx * 0.034, y, hz - 0.01], [hx + sx * 0.041, y + 0.03, hz - 0.01], 0.006, K.BRASS);
	}
	// the knob on its neck, standing out from the plate
	const kz = hz - 0.008;
	const knob = (zc, r, n) => {
		for (let j = 0; j < n; j++) {
			const a0 = PI * j / n, a1 = PI * (j + 1) / n;
			for (let i = 0; i < 16; i++) {
				const b0 = 2 * PI * i / 16, b1 = 2 * PI * (i + 1) / 16;
				const P = (a, b) => [hx + r * Math.sin(a) * Math.cos(b), hy + 0.03 + r * Math.sin(a) * Math.sin(b), zc - r * Math.cos(a)];
				const Nn = (a, b) => [Math.sin(a) * Math.cos(b), Math.sin(a) * Math.sin(b), -Math.cos(a)];
				const i0 = g.v(P(a0, b0), Nn(a0, b0), K.BRASS), i1 = g.v(P(a0, b1), Nn(a0, b1), K.BRASS), i2 = g.v(P(a1, b1), Nn(a1, b1), K.BRASS), i3 = g.v(P(a1, b0), Nn(a1, b0), K.BRASS);
				g.idx.push(i0, i1, i2, i0, i2, i3);
			}
		}
	};
	g.beam([hx, hy + 0.03, kz], [hx, hy + 0.03, kz - 0.05], 0.011, K.BRASS);
	knob(kz - 0.075, 0.034, 10);
	g.box(hx - 0.008, hy - 0.1, hz - 0.0125, hx + 0.008, hy - 0.06, hz - 0.0085, K.KEYHOLE);
}

// add geometry d to g, turned half round about the room's centre (so a
// thing built against the far wall stands against the near one, facing in)
function appendTurned(g, d) {
	const base = g.pos.length / 3;
	for (let i = 0; i < d.pos.length; i += 3) {
		const x = d.pos[i] - O[0], z = d.pos[i + 2] - O[2];
		g.pos.push(W - x + O[0], d.pos[i + 1], L - z + O[2]);
		g.nrm.push(-d.nrm[i], d.nrm[i + 1], -d.nrm[i + 2]);
	}
	g.kind.push(...d.kind); g.uv.push(...d.uv); g.anchor.push(...d.anchor);
	for (const k of d.idx) g.idx.push(k + base);
}

// ------------------------------------------------------------------
// THE NICHE (after his reference): an old stone aedicule standing proud
// of the far wall. On a plain base, two piers of rusticated blocks,
// alternately long and short like quoins, carry a moulded entablature with
// a carved cartouche in the frieze and a low pediment. Between them, a
// deep round-arched hollow with a half-dome, where the statue stands on
// a low block. Below it the base steps down into the pool's far end.
// ------------------------------------------------------------------

function buildNiche(g) {
	const { cx, hw, spring, pier, face: F, back, floor, x0, x1 } = NICHE;
	const S = K.OLDSTONE, Hk = K.HOLLOW;
	const C = back - hw;                 // the centre of the half-round back
	const eb = 5.35;                     // the entablature's foot
	const at = (x) => spring + Math.sqrt(Math.max(0, hw * hw - (x - cx) * (x - cx)));

	// the base, and the steps down to the pool
	g.box(x0 - 0.1, 0, F - 0.28, x1 + 0.1, floor - 0.06, L, S, { bottom: true });
	g.box(x0 - 0.14, floor - 0.06, F - 0.34, x1 + 0.14, floor, L, S);
	g.box(cx - 0.95, POOL.top, F - 0.62, cx + 0.95, POOL.top + 0.15, F - 0.28, S, { bottom: true });

	// the piers' cores, and their blocks: courses of long and short stones
	// a little proud of the face, with sunken joints between
	for (const [a, b] of [[x0, cx - hw], [cx + hw, x1]]) {
		g.box(a, floor, F + 0.03, b, eb, L, Hk, { bottom: true });
		const outer = a < cx ? a : b, inner = a < cx ? b : a, sgn = a < cx ? 1 : -1;
		const n = 11, ch = (eb - 0.38 - floor) / n;
		for (let i = 0; i < n; i++) {
			const y0 = floor + i * ch + 0.018, y1 = floor + (i + 1) * ch - 0.018;
			const long = i % 2 === 0;
			// the face block: long ones reach the opening, short ones stop short
			const ia = outer + sgn * 0.01, ib = long ? inner - sgn * 0.01 : outer + sgn * (pier * 0.66);
			g.box(Math.min(ia, ib), y0, F - 0.06, Math.max(ia, ib), y1, F + 0.03, S, { z1: true });
			if (!long) {
				const ja = outer + sgn * (pier * 0.66 + 0.025), jb = inner - sgn * 0.01;
				g.box(Math.min(ja, jb), y0, F - 0.02, Math.max(ja, jb), y1, F + 0.03, S, { z1: true });
			}
			// and round the outer side of the pier
			const sx = outer - sgn * 0.035;
			g.box(Math.min(sx, outer + sgn * 0.02), y0, F - 0.035, Math.max(sx, outer + sgn * 0.02), y1, long ? F + 0.9 : F + 0.55, S);
		}
		// a capital: a moulded neck and a wide abacus
		g.box(a - 0.05, eb - 0.38, F - 0.07, b + 0.05, eb - 0.3, L, S);
		g.box(a - 0.02, eb - 0.3, F - 0.03, b + 0.02, eb - 0.12, L, S);
		g.box(a - 0.09, eb - 0.12, F - 0.11, b + 0.09, eb, L, S);
	}

	// the opening's face between the piers: the spandrels over the arch
	const dx = 0.03;
	for (let x = cx - hw; x < cx + hw - 1e-6; x += dx) {
		const xa = x, xb = Math.min(cx + hw, x + dx);
		g.quad([xb, at(xb), F + 0.02], [xa, at(xa), F + 0.02], [xa, eb, F + 0.02], [xb, eb, F + 0.02], [0, 0, -1], S, [[xb, at(xb)], [xa, at(xa)], [xa, eb], [xb, eb]]);
	}
	// an archivolt round the arch, and a keystone
	{
		const M = 36, r = hw + 0.07;
		for (let i = 0; i < M; i++) {
			const p0 = PI * i / M, p1 = PI * (i + 1) / M;
			g.beam([cx + Math.cos(p0) * r, spring + Math.sin(p0) * r, F - 0.02], [cx + Math.cos(p1) * r, spring + Math.sin(p1) * r, F - 0.02], 0.065, S, [0, 0, 1]);
		}
		// imposts at the springing
		for (const sx of [-1, 1]) g.box(cx + sx * hw - 0.16, spring - 0.14, F - 0.06, cx + sx * hw + 0.16, spring, F + 0.4, S);
		const kt = spring + hw;
		g.quad([cx - 0.17, kt + 0.32, F - 0.08], [cx + 0.17, kt + 0.32, F - 0.08], [cx + 0.11, kt - 0.06, F - 0.08], [cx - 0.11, kt - 0.06, F - 0.08], [0, 0, -1], S, [[0, 1], [1, 1], [1, 0], [0, 0]]);
		for (const sx of [-1, 1]) g.quad([cx + sx * 0.11, kt - 0.06, F - 0.08], [cx + sx * 0.17, kt + 0.32, F - 0.08], [cx + sx * 0.17, kt + 0.32, F + 0.02], [cx + sx * 0.11, kt - 0.06, F + 0.02], [sx, -0.15, 0], S, [[0, 0], [1, 0], [1, 1], [0, 1]]);
		g.quad([cx - 0.11, kt - 0.06, F - 0.08], [cx + 0.11, kt - 0.06, F - 0.08], [cx + 0.11, kt - 0.06, F + 0.02], [cx - 0.11, kt - 0.06, F + 0.02], [0, -1, 0], S, [[0, 0], [1, 0], [1, 1], [0, 1]]);
	}

	// the hollow: straight jambs, then a half-round back under a half dome
	for (const sx of [-1, 1]) {
		const x = cx + sx * hw;
		g.quad([x, floor, F], [x, floor, C], [x, spring, C], [x, spring, F], [-sx, 0, 0], Hk, [[F, floor], [C, floor], [C, spring], [F, spring]]);
	}
	{
		const M = 40, R = 14;
		// the barrel of the arch from the face to the start of the dome
		for (let i = 0; i < M; i++) {
			const t0 = PI * i / M, t1 = PI * (i + 1) / M;
			const P = (t, z) => [cx + Math.cos(t) * hw, spring + Math.sin(t) * hw, z];
			const nm = [-Math.cos((t0 + t1) / 2), -Math.sin((t0 + t1) / 2), 0];
			g.quad(P(t0, F), P(t1, F), P(t1, C), P(t0, C), nm, Hk, [[hw * t0 + 0.0, F], [hw * t1, F], [hw * t1, C], [hw * t0, C]]);
		}
		// the half-round back wall
		for (let i = 0; i < M; i++) {
			const a0 = PI * i / M, a1 = PI * (i + 1) / M;
			const P = (a, y) => [cx + Math.cos(a) * hw, y, C + Math.sin(a) * hw];
			const N = (a) => [-Math.cos(a), 0, -Math.sin(a)];
			const ia = g.v(P(a0, floor), N(a0), Hk, [hw * a0, floor]), ib = g.v(P(a1, floor), N(a1), Hk, [hw * a1, floor]);
			const ic = g.v(P(a1, spring), N(a1), Hk, [hw * a1, spring]), id = g.v(P(a0, spring), N(a0), Hk, [hw * a0, spring]);
			g.idx.push(ia, ib, ic, ia, ic, id);
		}
		// the half dome over it
		const rows = [];
		for (let j = 0; j <= R; j++) {
			const b = (PI / 2) * j / R;
			const row = [];
			for (let i = 0; i <= M; i++) {
				const a = PI * i / M;
				const n = [Math.cos(a) * Math.cos(b), Math.sin(b), Math.sin(a) * Math.cos(b)];
				row.push(g.v([cx + hw * n[0], spring + hw * n[1], C + hw * n[2]], n.map((v) => -v), Hk, [hw * a, spring + hw * b]));
			}
			rows.push(row);
		}
		for (let j = 0; j < R; j++) for (let i = 0; i < M; i++) {
			const a = rows[j][i], b = rows[j][i + 1], c = rows[j + 1][i + 1], d = rows[j + 1][i];
			g.idx.push(a, b, c, a, c, d);
		}
		// the hollow's floor
		g.box(cx - hw, floor - 0.02, F - 0.02, cx + hw, floor, back, Hk, { bottom: true, x0: true, x1: true, z1: true });
	}
	// the low block the statue stands on
	g.box(VENUS.x - 0.6, floor, NZ - 0.5, VENUS.x + 0.6, VENUS.plinth - 0.05, NZ + 0.55, S, { bottom: true });
	g.box(VENUS.x - 0.64, VENUS.plinth - 0.05, NZ - 0.54, VENUS.x + 0.64, VENUS.plinth, NZ + 0.59, S);

	// the entablature: architrave, frieze with a cartouche, cornice
	g.box(x0 - 0.06, eb, F - 0.08, x1 + 0.06, eb + 0.32, L, S);
	g.box(x0 - 0.02, eb + 0.32, F - 0.02, x1 + 0.02, eb + 0.78, L, S);
	g.box(x0 - 0.12, eb + 0.78, F - 0.16, x1 + 0.12, eb + 0.86, L, S);
	g.box(x0 - 0.2, eb + 0.86, F - 0.26, x1 + 0.2, eb + 1.02, L, S);
	// the cartouche: a raised oval shield with a rolled rim and scrolls
	{
		const cy = eb + 0.55, rx = 0.34, ry = 0.2, M = 28;
		const rows = [];
		for (let j = 0; j <= 4; j++) {
			const t = j / 4, row = [];
			for (let i = 0; i <= M; i++) {
				const a = 2 * PI * i / M;
				const dz = 0.09 * Math.sqrt(Math.max(0, 1 - t * t)) + 0.01;
				row.push(g.v([cx + Math.cos(a) * rx * t, cy + Math.sin(a) * ry * t, F - 0.02 - dz], [Math.cos(a) * t * 0.6, Math.sin(a) * t * 0.6, -1], S, [Math.cos(a) * t, Math.sin(a) * t]));
			}
			rows.push(row);
		}
		for (let j = 0; j < 4; j++) for (let i = 0; i < M; i++) {
			const a = rows[j][i], b = rows[j][i + 1], c = rows[j + 1][i + 1], d = rows[j + 1][i];
			g.idx.push(a, d, c, a, c, b);
		}
		for (let i = 0; i < M; i++) {
			const a0 = 2 * PI * i / M, a1 = 2 * PI * (i + 1) / M;
			g.beam([cx + Math.cos(a0) * (rx + 0.03), cy + Math.sin(a0) * (ry + 0.03), F - 0.04], [cx + Math.cos(a1) * (rx + 0.03), cy + Math.sin(a1) * (ry + 0.03), F - 0.04], 0.025, S, [0, 0, 1]);
		}
		for (const sx of [-1, 1]) {
			for (let i = 0; i < 14; i++) {
				const a0 = 1.8 * PI * i / 14, a1 = 1.8 * PI * (i + 1) / 14, r0 = 0.1 * (1 - i / 16), r1 = 0.1 * (1 - (i + 1) / 16);
				const ox = cx + sx * (rx + 0.16), oy = cy;
				g.beam([ox + sx * Math.cos(a0) * r0, oy + Math.sin(a0) * r0, F - 0.04], [ox + sx * Math.cos(a1) * r1, oy + Math.sin(a1) * r1, F - 0.04], 0.018, S, [0, 0, 1]);
			}
		}
	}
	// the low pediment
	{
		const y0 = eb + 1.02, rise = 0.62, hx = (x1 - x0) / 2 + 0.2, zf = F - 0.2;
		const top = (x) => y0 + rise * (1 - Math.abs(x - cx) / hx);
		for (let x = cx - hx; x < cx + hx - 1e-6; x += 0.1) {
			const xa = x, xb = Math.min(cx + hx, x + 0.1);
			g.quad([xb, y0, zf], [xa, y0, zf], [xa, top(xa), zf], [xb, top(xb), zf], [0, 0, -1], S, [[xb, y0], [xa, y0], [xa, top(xa)], [xb, top(xb)]]);
		}
		const sl = Math.hypot(hx, rise);
		for (const sx of [-1, 1]) {
			const n = [sx * rise / sl, hx / sl, 0];
			const ex = cx + sx * (hx + 0.06);
			g.quad([cx, y0 + rise + 0.06, zf - 0.06], [ex, y0 - 0.02, zf - 0.06], [ex, y0 - 0.02, L], [cx, y0 + rise + 0.06, L], n, S, [[0, zf], [sl, zf], [sl, L], [0, L]]);
			g.quad([cx, y0 + rise + 0.06, zf - 0.06], [cx, y0 + rise - 0.06, zf - 0.06], [ex, y0 - 0.12, zf - 0.06], [ex, y0 - 0.02, zf - 0.06], [0, 0, -1], S, [[0, 1], [0, 0], [sl, 0], [sl, 1]]);
		}
	}
}

// the vine's own stems along the beams (twisting, dark), in the room's geometry
function buildVineStems(g) {
	const rnd = rng(77);
	for (const [kind, c, seed] of VINE) {
		const [u0, u1] = vineRange(kind);
		for (let strand = 0; strand < 2; strand++) {
			let prev = null;
			for (let u = u0; u <= u1; u += 0.18) {
				const p = vinePoint(kind, c, u);
				const tw = Math.sin(u * 3.1 + strand * 2 + seed) * 0.07, tw2 = Math.cos(u * 2.3 + strand + seed) * 0.05;
				const q = kind === 'ridge' ? [p[0] + tw, p[1] + tw2 + 0.12, p[2]] : [p[0], p[1] + tw2 + 0.12, p[2] + tw];
				if (prev && (vineClump(u, seed) || rnd() < 0.5)) g.beam(prev, q, 0.012 + 0.008 * rnd(), K.WOOD);
				prev = q;
			}
		}
	}
}

// fallen bracts: on the floor beneath the flowering beams and round the
// pool, and a few floating on the water
function buildPetals(g) {
	const rnd = rng(4242);
	const onFloor = (x, z) => !(x > POOL.x0 - POOL.curb - 0.1 && x < POOL.x1 + POOL.curb + 0.1 && z > POOL.z0 - POOL.curb - 0.1 && z < POOL.z1 + POOL.curb + 0.1) && x > 0.2 && x < W - 0.2 && z > 0.3 && z < L - 0.4;
	const petal = (x, y, z, white) => {
		const s = 0.022 + rnd() * 0.022, a = rnd() * 2 * PI;
		const c = Math.cos(a), sn = Math.sin(a);
		const P = (u, v) => [x + (u * c - v * sn) * s, y + 0.004 * u * v, z + (u * sn + v * c) * s];
		const o = white ? 2 : 0;
		g.quad(P(-1, -1), P(-1, 1), P(1, 1), P(1, -1), [0, 1, 0], K.BRACT, [[o, 0], [o, 1], [o + 1, 1], [o + 1, 0]]);
	};
	// under the flowering stretches of the beams, drifting a little
	for (const [kind, c, seed] of VINE) {
		const [u0, u1] = vineRange(kind);
		for (let u = u0; u <= u1; u += 0.05) {
			if (!vineClump(u, seed) || rnd() > 0.55) continue;
			const p = vinePoint(kind, c, u);
			const x = p[0] + (rnd() - 0.5) * 1.8, z = p[2] + (rnd() - 0.5) * 1.8;
			if (onFloor(x, z)) petal(x, 0.004, z, rnd() < 0.18);
		}
	}
	// gathered against the pool's curb and drifted into corners
	for (let i = 0; i < 260; i++) {
		const side = Math.floor(rnd() * 4);
		let x, z;
		if (side < 2) { x = side ? POOL.x1 + POOL.curb + 0.12 + rnd() * rnd() * 0.9 : POOL.x0 - POOL.curb - 0.12 - rnd() * rnd() * 0.9; z = POOL.z0 + rnd() * (POOL.z1 - POOL.z0); }
		else { z = side === 2 ? POOL.z0 - POOL.curb - 0.12 - rnd() * rnd() * 0.9 : POOL.z1 + POOL.curb + 0.12 + rnd() * rnd() * 0.9; x = POOL.x0 + rnd() * (POOL.x1 - POOL.x0); }
		if (onFloor(x, z)) petal(x, 0.004, z, rnd() < 0.18);
	}
	// floating on the pool
	for (let i = 0; i < 70; i++) {
		const x = POOL.x0 + 0.08 + rnd() * (POOL.x1 - POOL.x0 - 0.16), z = POOL.z0 + 0.08 + rnd() * (POOL.z1 - POOL.z0 - 0.16);
		if (Math.hypot(x - VENUS.x, z - VENUS.z) < 0.6) continue;
		g.float = [x, z, x * 5.1 + z * 2.9];
		petal(x, 0.016, z, rnd() < 0.2);
		g.float = null;
	}
}

// the flowers and leaves of the bougainvillea (into the leaf geometry):
// blossom cards in clumps along the beams, sprays hanging down, and
// small leaves among them
function bougainvillea(g, leaf, rnd) {
	const card = (c, size, yaw, pitch, white) => {
		const base = g.pos.length / 3;
		const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
		const ax = [cy, 0, -sy];
		const ay = [sy * sp, cp, cy * sp];
		const nrm = [ax[1] * ay[2] - ax[2] * ay[1], ax[2] * ay[0] - ax[0] * ay[2], ax[0] * ay[1] - ax[1] * ay[0]];
		const sh = white ? 0.95 : rnd() * 0.8;
		for (const [u, v] of [[0, 0], [1, 0], [1, 1], [0, 1]]) {
			const du = (u - 0.5) * size, dv = (v - 0.5) * size;
			g.pos.push(c[0] + ax[0] * du + ay[0] * dv + O[0], c[1] + ax[1] * du + ay[1] * dv + O[1], c[2] + ax[2] * du + ay[2] * dv + O[2]);
			g.nrm.push(...nrm);
			g.uv.push(u, v);
			g.shade.push(sh);
			g.flower.push(1);
		}
		g.idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
	};
	for (const [kind, c, seed] of VINE) {
		const [u0, u1] = vineRange(kind);
		for (let u = u0; u <= u1; u += 0.1) {
			if (!vineClump(u, seed)) continue;
			const p = vinePoint(kind, c, u);
			const off = () => (rnd() - 0.5) * 0.7;
			// a clump of blossom round the beam
			const n = 4 + Math.floor(rnd() * 4);
			for (let k = 0; k < n; k++) {
				const q = kind === 'ridge' ? [p[0] + off(), p[1] - rnd() * 0.25, p[2] + off() * 0.4] : [p[0] + off() * 0.4, p[1] - rnd() * 0.25, p[2] + off()];
				card(q, 0.42 + rnd() * 0.4, rnd() * 2 * PI, (rnd() - 0.5) * 2.4, rnd() < 0.16);
			}
			for (let k = 0; k < 5; k++) {
				const a = rnd() * 2 * PI;
				leaf([p[0] + off() * 0.6, p[1] - rnd() * 0.2, p[2] + off() * 0.6], [Math.cos(a), -0.3 - rnd() * 0.5, Math.sin(a)], [-Math.sin(a), 0, Math.cos(a)], 0.08 + rnd() * 0.06, 0.1);
			}
			// now and then a long spray hanging down
			if (rnd() < 0.22) {
				const len = 0.5 + rnd() * 2.0;
				let q = [p[0], p[1], p[2]];
				const drift = [(rnd() - 0.5) * 0.08, (rnd() - 0.5) * 0.08];
				for (let d = 0; d < len; d += 0.13) {
					q = [q[0] + drift[0], q[1] - 0.13, q[2] + drift[1]];
					const sz = (0.3 + rnd() * 0.22) * (1 - 0.4 * d / len);
					card([q[0] + (rnd() - 0.5) * 0.08, q[1], q[2] + (rnd() - 0.5) * 0.08], sz, rnd() * 2 * PI, (rnd() - 0.5) * 0.8, rnd() < 0.15);
					if (rnd() < 0.6) {
						const a = rnd() * 2 * PI;
						leaf([q[0], q[1], q[2]], [Math.cos(a), -0.6, Math.sin(a)], [-Math.sin(a), 0, Math.cos(a)], 0.05 + rnd() * 0.04, 0.1);
					}
				}
			}
		}
	}
}


// ------------------------------------------------------------------
// PETALS FALLING from the bougainvillea: each drifts down, tumbling,
// on a loop of its own; on the floor it lies a while and fades; in the
// pool it floats, and the water rings out from where it touched.
// The same sums run here (for the ripples) and in the shader.
// ------------------------------------------------------------------

const FALL = (() => {
	const rnd = rng(9001);
	const list = [];
	const flowering = [];
	for (const [kind, c, seed] of VINE) {
		const [u0, u1] = vineRange(kind);
		for (let u = u0; u <= u1; u += 0.1) if (vineClump(u, seed)) flowering.push(vinePoint(kind, c, u));
	}
	// half of them start over the pool, so the water gets its share
	const overPool = flowering.filter((p) => p[0] > POOL.x0 - 0.6 && p[0] < POOL.x1 + 0.6 && p[2] > POOL.z0 && p[2] < POOL.z1);
	for (let i = 0; i < 64; i++) {
		const src = (i % 2 === 0 && overPool.length) ? overPool : flowering;
		const p = src[Math.floor(rnd() * src.length)];
		list.push({
			start: [p[0] + (rnd() - 0.5) * 0.4, p[1] - 0.25 - rnd() * 0.3, p[2] + (rnd() - 0.5) * 0.4],
			period: 18 + rnd() * 22,
			offset: rnd() * 60,
			drift: [(rnd() - 0.5) * 1.6, (rnd() - 0.5) * 1.6],
			speed: 0.45 + rnd() * 0.25,
			seed: rnd(),
			white: rnd() < 0.18 ? 1 : 0
		});
	}
	return list;
})();
const PIN = [POOL.x0 + 0.06, POOL.z0 + 0.06, POOL.x1 - 0.06, POOL.z1 - 0.06];
// where a petal is in its loop at time t (seconds)
function fallState(pt, t) {
	const tt = t + pt.offset;
	const cyc = Math.floor(tt / pt.period);
	const ph = tt - cyc * pt.period;
	const m = 0.6 + 0.4 * Math.sin(cyc * 1.7 + pt.seed * 5.0);
	const lx = pt.start[0] + pt.drift[0] * m, lz = pt.start[2] + pt.drift[1] * m;
	const inPool = lx > PIN[0] && lx < PIN[2] && lz > PIN[1] && lz < PIN[3];
	const rest = inPool ? 0.017 : 0.006;
	const Tf = (pt.start[1] - rest) / pt.speed;
	return { ph, Tf, lx, lz, inPool };
}

// ------------------------------------------------------------------
// THE KOI: three orange carp wandering the pool
// ------------------------------------------------------------------
// Each swims a slow, looping path (a sum of sines kept inside the pool
// and short of the statue's plinth), with its pace easing in and out.
// The body follows its own path, head first, with a swimming wave
// running down it. Now and then one rises to sip at the surface and
// leaves rings. The same maths runs here (for the rings) and in the
// shader (for the fish), so the two always agree.
const KOI = [
	{ at: [W / 2 - 0.8, PZ(7.6)], dir: 0.9, len: 0.92, kind: 0, sip: 21, first: 9 },
	{ at: [W / 2 + 0.9, PZ(11.6)], dir: 3.6, len: 0.74, kind: 1, sip: 29, first: 17 },
	{ at: [W / 2 - 0.3, PZ(12.8)], dir: 5.2, len: 0.86, kind: 2, sip: 25, first: 4 },
	{ at: [W / 2 + 1.0, PZ(7.0)], dir: 2.2, len: 0.70, kind: 1, sip: 33, first: 23 },
	{ at: [W / 2 - 1.1, PZ(10.4)], dir: 4.4, len: 0.82, kind: 0, sip: 27, first: 13 },
	{ at: [W / 2 + 0.4, PZ(9.0)], dir: 1.4, len: 0.94, kind: 2, sip: 31, first: 28 },
	{ at: [W / 2 - 0.9, PZ(13.0)], dir: 5.9, len: 0.66, kind: 1, sip: 23, first: 6 },
	{ at: [W / 2 + 1.1, PZ(12.6)], dir: 3.0, len: 0.80, kind: 0, sip: 35, first: 31 }
];
// where they may swim: inside the pool, a little off its walls
const KOI_BOX = [POOL.x0 + 0.5, POOL.z0 + 0.5, POOL.x1 - 0.5, POOL.z1 - 0.55];
// where a crumb may be cast (it drifts in from the edges to here)
const FEED_BOX = [POOL.x0 + 0.25, POOL.z0 + 0.25, POOL.x1 - 0.25, POOL.z1 - 0.3];
const CRUMB_N = 12;
// the bed of the pool, below the surface (where it looks to be, seen through the water)
const BED_Y = -0.36;
// the lily pads (studio x, z, radius), for their shadows on the bed
const POND_PADS = [];
// How a koi swims. Not a steady wiggle: a few strokes of the tail, then a
// long glide with the tail still, the body straight, the pectoral fins
// out; then strokes again. It decides on a new heading now and then and
// turns to it, mostly while it strokes, bending its whole body into the
// turn (never more than a gentle C). It noses away from the walls well
// before it reaches them and gives the others room. Now and then it
// rises to sip at the surface; when crumbs land it hurries over with
// quick strokes and noses about among them, gulping.
function koiSim() {
	const rnd = (n) => { const r = Math.sin(n * 12.9898 + 78.233) * 43758.5453; return r - Math.floor(r); };
	const fish = KOI.map((k, i) => ({
		k, i, x: k.at[0], z: k.at[1], th: k.dir, w: 0, v: 0.08, y: -0.17, ph: i * 2.1, pitch: 0, kappa: 0,
		thrust: 0, amp: 0.2, stroking: i % 2 === 0, modeT: rnd(i * 3.1) * 3, aim: k.dir, nextAim: rnd(i * 7.7) * 5,
		yAim: -0.17, nextY: rnd(i * 5.9) * 8, gx: k.at[0], gz: k.at[1], nextSip: k.first, sipT: -1, bite: 0, notice: 0
	}));
	const events = [];
	const crumbs = [];
	for (let i = 0; i < CRUMB_N; i++) crumbs.push({ x: 0, z: 0, alive: 0, born: 0, seed: i * 0.37 });
	const feed = { on: false, x: 0, z: 0, t0: 0 };
	let simT = 0, seq = 0;
	const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));
	const R = () => rnd(++seq * 1.618 + simT * 0.37);
	// a handful of crumbs lands at x, z (studio coordinates)
	const drop = (x, z) => {
		x = Math.max(FEED_BOX[0], Math.min(FEED_BOX[2], x));
		z = Math.max(FEED_BOX[1], Math.min(FEED_BOX[3], z));
		Object.assign(feed, { on: true, x, z, t0: simT });
		crumbs.forEach((c, i) => {
			const a = rnd(simT + i) * Math.PI * 2, r = 0.04 + 0.16 * Math.sqrt(rnd(simT * 1.7 + i * 3.1));
			Object.assign(c, { x: x + Math.cos(a) * r, z: z + Math.sin(a) * r, alive: 1, born: simT + rnd(i * 5.3 + simT) * 0.35 });
		});
		events.push([x, z, simT, 1.0]);
		// the farther a koi is, the later it notices
		for (const F of fish) F.notice = simT + 0.3 + Math.hypot(F.x - x, F.z - z) * 0.35 + rnd(F.i * 9.1 + simT) * 0.7;
	};
	const step = (dt) => {
		simT += dt;
		const t = simT;
		// crumbs drift apart a little on the water
		let left = 0;
		for (const c of crumbs) {
			if (!c.alive || t < c.born) continue;
			left++;
			c.x += Math.sin(t * 0.7 + c.seed * 11) * 0.004 * dt;
			c.z += Math.cos(t * 0.6 + c.seed * 7) * 0.004 * dt;
		}
		if (feed.on && ((left === 0 && t > feed.t0 + 1) || t > feed.t0 + 40)) {
			feed.on = false;
			for (const c of crumbs) c.alive = 0;
		}
		for (const F of fish) {
			const { k } = F;
			const L = k.len;
			const hungry = feed.on && t > F.notice;
			// --- where it means to go: a place somewhere in the pond, a new one
			// when it gets there (or tires of it)
			if (t > F.nextAim || Math.hypot(F.gx - F.x, F.gz - F.z) < 0.7) {
				F.gx = KOI_BOX[0] + R() * (KOI_BOX[2] - KOI_BOX[0]);
				F.gz = KOI_BOX[1] + R() * (KOI_BOX[3] - KOI_BOX[1]);
				F.nextAim = t + 12 + R() * 14;
			}
			// heading there, with a lazy meander
			F.aim = Math.atan2(F.gz - F.z, F.gx - F.x) + 0.35 * Math.sin(t * 0.21 + F.i * 1.7);
			let aim = F.aim, maxTurn = 0.7;
			let target = null;
			if (hungry) {
				let bd = 1e9;
				for (const c of crumbs) {
					if (!c.alive || t < c.born) continue;
					const d = Math.hypot(c.x - F.x, c.z - F.z) + 0.1 * Math.sin(F.i * 3.3 + c.seed * 9);
					if (d < bd) { bd = d; target = c; }
				}
				const tx = target ? target.x : feed.x, tz = target ? target.z : feed.z;
				aim = Math.atan2(tz - F.z, tx - F.x);
				F.aim = aim;
				maxTurn = 1.8;
			}
			// the walls: look ahead and turn for open water well before them
			const look = 0.6 + L * 0.8 + F.v * 2.0;
			const box = hungry ? FEED_BOX : KOI_BOX;
			let need = 0;
			for (const da of [0, 0.5, -0.5]) {
				const ax = F.x + Math.cos(F.th + da) * look, az = F.z + Math.sin(F.th + da) * look;
				need = Math.max(need, Math.max(box[0] - ax, ax - box[2], box[1] - az, az - box[3], 0));
			}
			if (need > 0) {
				const cx = (box[0] + box[2]) / 2, cz = (box[1] + box[3]) / 2 + Math.sin(F.i * 2.3) * 1.5;
				const away = Math.atan2(cz - F.z, cx - F.x);
				const wgt = Math.min(1, need * 2.2);
				aim = F.th + wrap(away - F.th) * wgt + wrap(aim - F.th) * (1 - wgt);
				if (!hungry) F.aim = aim;
				maxTurn = Math.max(maxTurn, 0.6 + wgt * 0.8);
			}
			// and give the others room (less at the food)
			let crowd = 0;
			for (const G of fish) {
				if (G === F) continue;
				const dx = G.x - F.x, dz = G.z - F.z, d = Math.hypot(dx, dz);
				const r = (hungry ? 0.4 : 1.0) * (L + G.k.len) / 2 + 0.2;
				if (d < r && Math.abs(G.y - F.y) < 0.14) {
					const bearing = wrap(Math.atan2(dz, dx) - F.th);
					// ahead: turn aside; very close: turn away whichever side
					if (Math.abs(bearing) < 1.6 || d < r * 0.5) crowd -= Math.sign(bearing || 1) * (r - d) / r * (Math.abs(bearing) < 1.6 ? 1.0 : 0.6);
				}
			}
			const off = wrap(aim - F.th) + crowd * (hungry ? 0.4 : 2.0);
			// --- strokes and glides
			F.modeT -= dt;
			if (hungry) { F.stroking = true; F.modeT = Math.max(F.modeT, 0.4); }
			else if (F.modeT <= 0) {
				F.stroking = !F.stroking;
				F.modeT = F.stroking ? 1.2 + R() * 1.6 : 1.6 + R() * 3.2;
			}
			// a turn wants a stroke; so does losing way
			if (!F.stroking && (Math.abs(off) > 0.9 || F.v < 0.035)) { F.stroking = true; F.modeT = 1.0 + R() * 0.8; }
			// the sip: a slow rise, a gulp at the surface, back down
			if (!hungry && F.sipT < 0 && t > F.nextSip) { F.sipT = 0; F.nextSip = t + k.sip * (0.7 + 0.6 * R()); }
			let lift = 0;
			if (F.sipT >= 0) {
				const st = F.sipT;
				F.sipT += dt;
				lift = Math.min(1, st / 1.6) * (1 - Math.max(0, Math.min(1, (st - 2.6) / 1.6)));
				if (st < 1.7 && F.sipT >= 1.7) events.push([F.x + Math.cos(F.th) * 0.03, F.z + Math.sin(F.th) * 0.03, t, 0.9]);
				if (st < 2.4 && F.sipT >= 2.4) events.push([F.x, F.z, t, 0.55]);
				if (F.sipT > 4.2 || hungry) F.sipT = -1;
			}
			const wantThrust = (F.stroking ? (hungry ? 2.4 : 1.0) : 0) * (1 - 0.6 * lift);
			F.thrust += (wantThrust - F.thrust) * Math.min(dt * 3, 1);
			// water drags it to a stop; strokes push it on (bigger koi a little faster)
			const drag = hungry ? 0.9 : 0.55;
			F.v += (F.thrust * 0.085 * (0.7 + 0.4 * L) - drag * F.v) * dt;
			F.v = Math.max(F.v, 0.008);
			// --- turning: firm while stroking, a drift while gliding
			const turnable = 0.35 + 0.65 * Math.min(1, F.thrust);
			let wWant = Math.max(-maxTurn, Math.min(maxTurn, off * 1.3)) * turnable;
			F.w += (wWant - F.w) * Math.min(dt * 2.2, 1);
			F.th += F.w * dt;
			// --- depth: drifting between levels, up to the surface to sip or feed
			if (t > F.nextY) { F.yAim = -(0.13 + R() * 0.1); F.nextY = t + 6 + R() * 10; }
			let yt = F.yAim;
			if (lift > 0) yt += (-0.045 - yt) * lift;
			if (hungry) {
				const tx = target ? target.x : feed.x, tz = target ? target.z : feed.z;
				const near = 1 - Math.min(1, Math.max(0, (Math.hypot(tx - F.x, tz - F.z) - 0.15) / 0.9));
				yt += (-0.04 - yt) * near;
				// a gulp when the mouth reaches a crumb at the surface
				if (target && t > F.bite && F.y > -0.08) {
					const mx = F.x + Math.cos(F.th) * 0.02, mz = F.z + Math.sin(F.th) * 0.02;
					if (Math.hypot(target.x - mx, target.z - mz) < 0.09) {
						target.alive = 0;
						F.bite = t + 1.3;
						events.push([target.x, target.z, t, 0.75]);
					}
				}
			}
			// --- move
			F.x += Math.cos(F.th) * F.v * dt;
			F.z += Math.sin(F.th) * F.v * dt;
			F.x = Math.max(POOL.x0 + 0.15, Math.min(POOL.x1 - 0.15, F.x));
			F.z = Math.max(POOL.z0 + 0.15, Math.min(POOL.z1 - 0.15, F.z));
			const dy = (yt - F.y) * Math.min(dt * (hungry ? 2.0 : 0.8), 1);
			F.y += dy;
			F.pitch += (Math.max(-0.4, Math.min(0.4, dy / dt / Math.max(F.v, 0.06))) - F.pitch) * Math.min(dt * 2.5, 1);
			// the body bends into the turn: a gentle C at most
			const kWant = Math.max(-1.0 / L, Math.min(1.0 / L, F.w / Math.max(F.v, 0.1)));
			F.kappa += (kWant - F.kappa) * Math.min(dt * 4, 1);
			// the tail: beating while it strokes, settling still as it glides
			const ampWant = 0.12 + 0.88 * Math.min(1.4, F.thrust) + 0.4 * Math.min(1, Math.abs(F.w));
			F.amp += (ampWant - F.amp) * Math.min(dt * 2.0, 1);
			F.ph += dt * (2.0 + 5.5 * Math.min(1.6, F.thrust)) * (0.75 + 0.35 / Math.sqrt(L));
		}
		while (events.length && t - events[0][2] > 10) events.shift();
	};
	return { fish, events, crumbs, feed, drop, step, get t() { return simT; } };
}

// ------------------------------------------------------------------
// GEOMETRY: the room
// ------------------------------------------------------------------

function buildRoom() {
	const g = Geo();

	// --- the floor, round the pool
	{
		const px0 = POOL.x0 - POOL.curb, px1 = POOL.x1 + POOL.curb, pz0 = POOL.z0 - POOL.curb, pz1 = POOL.z1 + POOL.curb;
		const rects = [[0, 0, W, pz0], [0, pz1, W, L], [0, pz0, px0, pz1], [px1, pz0, W, pz1]];
		for (const [x0, z0, x1, z1] of rects) {
			const S = 1.0;
			for (let x = x0; x < x1 - 1e-6; x += S) {
				for (let z = z0; z < z1 - 1e-6; z += S) {
					const xa = x, xb = Math.min(x1, x + S), za = z, zb = Math.min(z1, z + S);
					g.quad([xa, 0, za], [xa, 0, zb], [xb, 0, zb], [xb, 0, za], [0, 1, 0], K.FLOOR, [[xa, za], [xa, zb], [xb, zb], [xb, za]]);
				}
			}
		}
	}

	// --- the long walls, with the window openings and their deep reveals
	for (const side of [0, 1]) {
		const xi = side ? W : 0, xo = side ? W + T : -T, n = side ? [-1, 0, 0] : [1, 0, 0];
		const dz = 0.04;
		for (let z = 0; z < L - 1e-6; z += dz) {
			const za = z, zb = Math.min(L, z + dz), zm = (za + zb) / 2;
			let hole = null;
			if (!side) for (const c of WIN.c) {
				const t = winTop(zm - c);
				if (t !== null) hole = [WIN.sill, Math.min(winTop(za - c) || WIN.spring, winTop(zb - c) || WIN.spring)];
			}
			const ys = hole ? [[0, hole[0]], [hole[1], H]] : [[0, H]];
			for (const [y0, y1] of ys) {
				if (y1 <= y0) continue;
				if (side) g.quad([xi, y0, zb], [xi, y0, za], [xi, y1, za], [xi, y1, zb], n, K.ROCK, [[zb, y0], [za, y0], [za, y1], [zb, y1]]);
				else g.quad([xi, y0, za], [xi, y0, zb], [xi, y1, zb], [xi, y1, za], n, K.PLASTER, [[za, y0], [zb, y0], [zb, y1], [za, y1]]);
			}
		}
		// the reveals: the jambs, the arch's soffit, and a stone sill
		// (only on the window wall: the other is shared with the gallery)
		if (!side) for (const c of WIN.c) {
			for (const s of [-1, 1]) {
				const z = c + s * WIN.hw;
				const nn = [0, 0, -s];
				const a = [xi, WIN.sill, z], b = [xo, WIN.sill, z], cc = [xo, WIN.spring, z], d = [xi, WIN.spring, z];
				if ((s > 0) !== !!side) g.quad(a, b, cc, d, nn, K.PLASTER, [[0, WIN.sill], [T, WIN.sill], [T, WIN.spring], [0, WIN.spring]]);
				else g.quad(d, cc, b, a, nn, K.PLASTER, [[0, WIN.spring], [T, WIN.spring], [T, WIN.sill], [0, WIN.sill]]);
			}
			const M = 28;
			for (let i = 0; i < M; i++) {
				const p0 = (i / M) * PI, p1 = ((i + 1) / M) * PI;
				const z0 = c + Math.cos(p0) * WIN.hw, z1 = c + Math.cos(p1) * WIN.hw;
				const y0 = WIN.spring + Math.sin(p0) * WIN.hw, y1 = WIN.spring + Math.sin(p1) * WIN.hw;
				const nm = [0, -Math.sin((p0 + p1) / 2), -Math.cos((p0 + p1) / 2)];
				if (side) g.quad([xi, y0, z0], [xo, y0, z0], [xo, y1, z1], [xi, y1, z1], nm, K.PLASTER, [[0, p0], [T, p0], [T, p1], [0, p1]]);
				else g.quad([xi, y1, z1], [xo, y1, z1], [xo, y0, z0], [xi, y0, z0], nm, K.PLASTER, [[0, p1], [T, p1], [T, p0], [0, p0]]);
			}
			// the sill: a stone slab, a little proud of the wall
			const sx0 = side ? W - 0.08 : -T, sx1 = side ? W + T : 0.08;
			g.box(sx0, WIN.sill - 0.09, c - WIN.hw - 0.12, sx1, WIN.sill, c + WIN.hw + 0.12, K.STONE);
		}
		// pilasters between the windows, a plinth along the foot of the wall
		// (the window wall only: the others are rough stone slabs)
		const xs = side ? W : 0, sg = side ? -1 : 1;
		const pil = [0.6, ...WIN.c.slice(1).map((c, i) => (c + WIN.c[i]) / 2), L - 0.6];
		if (!side) for (const z of pil) {
			const a = Math.min(xs, xs + sg * 0.14), b = Math.max(xs, xs + sg * 0.14);
			g.box(a, 0, z - 0.34, b, H - 0.7, z + 0.34, K.STONE, { bottom: true });
			const a2 = Math.min(xs, xs + sg * 0.24), b2 = Math.max(xs, xs + sg * 0.24);
			g.box(a2, 0, z - 0.44, b2, 0.55, z + 0.44, K.STONE, { bottom: true });
			g.box(a2, H - 0.95, z - 0.46, b2, H - 0.7, z + 0.46, K.STONE);
		}
		const a = Math.min(xs, xs + sg * 0.05), b = Math.max(xs, xs + sg * 0.05);
		if (!side) g.box(a, 0, 0, b, 0.22, L, K.STONE, { bottom: true });
		// a cornice under the eaves
		const ck = side ? K.OLDSTONE : K.STONE;
		const a3 = Math.min(xs, xs + sg * 0.32), b3 = Math.max(xs, xs + sg * 0.32);
		g.box(a3, H - 0.55, 0, b3, H - 0.3, L, ck);
		const a4 = Math.min(xs, xs + sg * 0.42), b4 = Math.max(xs, xs + sg * 0.42);
		g.box(a4, H - 0.3, 0, b4, H - 0.12, L, ck);
	}

	// --- the end walls and the gables up to the roof
	for (const [z, nz] of [[0, 1], [L, -1]]) {
		const N = 32;
		for (let i = 0; i < N; i++) {
			const x0 = (i / N) * W, x1 = ((i + 1) / N) * W;
			const top = (x) => (x < W / 2 ? H + KR * x : H + KR * (W - x));
			const pts = nz > 0 ? [[x1, 0], [x0, 0], [x0, top(x0)], [x1, top(x1)]] : [[x0, 0], [x1, 0], [x1, top(x1)], [x0, top(x0)]];
			g.quad(...pts.map(([x, y]) => [x, y, z]), [0, 0, nz], K.ROCK, pts.map(([x, y]) => [x, y]));
		}
		// a cornice under the eaves
		const zc = nz > 0 ? 0 : L - 0.32, zd = nz > 0 ? 0.32 : L;
		g.box(0, H - 0.55, zc, W, H - 0.3, zd, K.OLDSTONE);
	}

	// --- the red door in the far wall, the way through to the piano room
	buildDoor(g);

	// --- the niche against the near wall, where the pool begins
	{
		const d = Geo();
		buildNiche(d);
		appendTurned(g, d);
	}

	// --- the pool: a curb of old weathered stone round dark water
	{
		const { x0, x1, z0, z1, curb, top } = POOL;
		const lip = 0.06, cap = 0.08;
		// the curb's body
		g.box(x0 - curb, 0, z0 - curb, x0, top - cap, z1 + curb, K.OLDSTONE, { bottom: true });
		g.box(x1, 0, z0 - curb, x1 + curb, top - cap, z1 + curb, K.OLDSTONE, { bottom: true });
		g.box(x0, 0, z0 - curb, x1, top - cap, z0, K.OLDSTONE, { bottom: true });
		g.box(x0, 0, z1, x1, top - cap, z1 + curb, K.OLDSTONE, { bottom: true });
		// the coping, overhanging a little on both sides
		g.box(x0 - curb - lip, top - cap, z0 - curb - lip, x0 + lip * 0.5, top, z1 + curb + lip, K.OLDSTONE);
		g.box(x1 - lip * 0.5, top - cap, z0 - curb - lip, x1 + curb + lip, top, z1 + curb + lip, K.OLDSTONE);
		g.box(x0 + lip * 0.5, top - cap, z0 - curb - lip, x1 - lip * 0.5, top, z0 + lip * 0.5, K.OLDSTONE);
		g.box(x0 + lip * 0.5, top - cap, z1 - lip * 0.5, x1 - lip * 0.5, top, z1 + curb + lip, K.OLDSTONE);
		// the water, on the floor's plane (so it mirrors the room)
		const S = 0.5;
		for (let x = x0; x < x1 - 1e-6; x += S) {
			for (let z = z0; z < z1 - 1e-6; z += S) {
				const xa = x, xb = Math.min(x1, x + S), za = z, zb = Math.min(z1, z + S);
				g.quad([xa, 0, za], [xa, 0, zb], [xb, 0, zb], [xb, 0, za], [0, 1, 0], K.WATER, [[xa, za], [xa, zb], [xb, zb], [xb, za]]);
			}
		}
	}

	return g;
}

// ------------------------------------------------------------------
// GEOMETRY: steel (window glazing, roof, trusses)
// ------------------------------------------------------------------

function buildSteel(g) {
	// the window glazing, in the middle of the wall's thickness
	// (the wall at x = W is shared with the gallery and has none)
	for (const side of [0]) {
		const x = side ? W + T * 0.5 : -T * 0.5;
		const d = 0.05, w = MULL.w * 0.5;
		for (const c of WIN.c) {
			// uprights
			for (const m of MULL.cols) {
				const top = winTop(m) - 0.01;
				g.box(x - d, WIN.sill, c + m - w, x + d, top, c + m + w, K.STEEL);
			}
			// transoms
			for (let y = WIN.sill + MULL.rowH; y < WIN.spring + 0.01; y += MULL.rowH) {
				g.box(x - d, y - w, c - WIN.hw, x + d, y + w, c + WIN.hw, K.STEEL);
			}
			// the frame and the ring in the arch
			for (const [r, ww] of [[WIN.hw - 0.03, 0.06], [MULL.ring, w]]) {
				const M = 24;
				for (let i = 0; i < M; i++) {
					const p0 = (i / M) * PI, p1 = ((i + 1) / M) * PI;
					g.beam([x, WIN.spring + Math.sin(p0) * r, c + Math.cos(p0) * r], [x, WIN.spring + Math.sin(p1) * r, c + Math.cos(p1) * r], ww, K.STEEL, [1, 0, 0]);
				}
			}
			for (const s of [-1, 1]) g.box(x - d, WIN.sill, c + s * (WIN.hw - 0.03) - 0.03, x + d, WIN.spring, c + s * (WIN.hw - 0.03) + 0.03, K.STEEL);
			g.box(x - d, WIN.sill, c - WIN.hw, x + d, WIN.sill + 0.06, c + WIN.hw, K.STEEL);
		}
	}

	// the roof: rafters, purlins, the ridge
	const slope = (x) => (x < W / 2 ? H + KR * x : H + KR * (W - x));
	for (let i = 0; i <= 12; i++) {
		const z = i * ROOF.rafter;
		for (const [xa, xb] of [[-0.3, W / 2], [W / 2, W + 0.3]]) {
			g.beam([xa, slope(Math.max(0, Math.min(W, xa))) - 0.1, z], [xb, slope(xb) - 0.1, z], 0.06, K.STEEL);
		}
	}
	for (let u = ROOF.purlin; u < W / 2 - 0.2; u += ROOF.purlin) {
		for (const x of [u, W - u]) g.beam([x, slope(x) - 0.06, -0.2], [x, slope(x) - 0.06, L + 0.2], 0.035, K.STEEL);
	}
	g.beam([W / 2, RIDGE - 0.14, -0.2], [W / 2, RIDGE - 0.14, L + 0.2], 0.12, K.STEEL);
	// eaves beams
	for (const x of [0.05, W - 0.05]) g.beam([x, H - 0.05, 0], [x, H - 0.05, L], 0.1, K.STEEL);

	// the trusses: a tie beam at the eaves, a king post and struts
	for (const z of TRUSS_Z) {
		g.box(-0.05, H - 0.13, z - 0.08, W + 0.05, H + 0.13, z + 0.08, K.STEEL);
		g.beam([W / 2, H, z], [W / 2, RIDGE - 0.2, z], 0.07, K.STEEL);
		for (const s of [-1, 1]) {
			g.beam([W / 2 + s * W / 4, H, z], [W / 2, RIDGE - 0.4, z], 0.055, K.STEEL);
			g.beam([W / 2 + s * W / 4, H, z], [W / 2 + s * W / 4, slope(W / 2 + s * W / 4) - 0.2, z], 0.045, K.STEEL);
			g.beam([W / 2 + s * (W / 2 - 0.1), H, z], [W / 2 + s * W / 4, slope(W / 2 + s * W / 4) - 0.2, z], 0.045, K.STEEL);
		}
		// a little round boss where the struts meet the tie
		for (const s of [-1, 1]) g.box(W / 2 + s * W / 4 - 0.12, H - 0.18, z - 0.1, W / 2 + s * W / 4 + 0.12, H + 0.18, z + 0.1, K.STEEL);
	}
}

// ------------------------------------------------------------------
// GEOMETRY: the things in the room
// ------------------------------------------------------------------

function buildPond(g) {
	const rnd = rng(311);
	// lily pads: notched discs, in loose clusters, floating on the water
	const pads = [];
	const clusters = [[POOL.x0 + 0.9, PZ(6.6), 0.9, 11], [POOL.x1 - 0.8, PZ(8.4), 0.85, 10], [POOL.x0 + 0.8, PZ(10.6), 0.8, 9],
		[POOL.x1 - 0.9, PZ(12.4), 0.9, 11], [POOL.x0 + 1.0, PZ(13.9), 0.65, 7], [W / 2 + 0.2, PZ(9.6), 0.5, 4], [POOL.x1 - 0.7, PZ(15.9), 0.6, 6]];
	for (const [cx, cz, rad, n] of clusters) {
		for (let k = 0; k < n; k++) {
			for (let tries = 0; tries < 40; tries++) {
				const a = rnd() * 2 * PI, d = rad * Math.sqrt(rnd());
				const x = cx + Math.cos(a) * d, z = cz + Math.sin(a) * d, r = 0.15 + rnd() * 0.17;
				if (x - r < POOL.x0 + 0.04 || x + r > POOL.x1 - 0.04 || z - r < POOL.z0 + 0.04 || z + r > POOL.z1 - 0.04) continue;
				if (Math.hypot(x - VENUS.x, z - VENUS.z) < 0.62 + r) continue;
				if (pads.some((p) => Math.hypot(p[0] - x, p[1] - z) < (p[2] + r) * 0.93)) continue;
				pads.push([x, z, r, rnd() * 2 * PI, rnd()]);
				break;
			}
		}
	}
	for (const [x, z, r, rot, shade] of pads) {
		POND_PADS.push([x, z, r]);
		g.float = [x, z, shade * 7.3 + r * 13.0];
		// a gently domed disc carrying the photographed pad; the picture's own
		// edge cuts the outline and the notch (which points along rot)
		const NA = 28, NR = 4, R = r * 1.08;
		const ring = [];
		for (let i = 0; i <= NR; i++) {
			const row = [];
			for (let j = 0; j < NA; j++) {
				const a = j / NA * 2 * PI, rho = i / NR;
				const b = a - rot;
				const yy = 0.012 + 0.004 * (1 - rho * rho) + 0.006 * Math.pow(rho, 6) * (0.5 + 0.5 * Math.sin(a * 3 + shade * 9));
				row.push(g.v([x + Math.cos(a) * R * rho, yy, z + Math.sin(a) * R * rho], [0, 1, 0], K.PAD, [0.5 + 0.5 * rho * Math.sin(b), 0.5 + 0.5 * rho * Math.cos(b)]));
			}
			ring.push(row);
		}
		for (let i = 0; i < NR; i++) for (let j = 0; j < NA; j++) {
			const a = ring[i][j], b = ring[i][(j + 1) % NA], c = ring[i + 1][(j + 1) % NA], d = ring[i + 1][j];
			g.idx.push(a, b, c, a, c, d);
		}
	}
	g.float = null;
	// water lilies: cupped pink petals in three rings, a golden heart
	const flowers = [[POOL.x0 + 0.75, PZ(6.9), 1.0], [POOL.x1 - 0.65, PZ(8.1), 0.85], [POOL.x1 - 0.95, PZ(12.6), 1.1], [POOL.x0 + 0.95, PZ(10.3), 0.8], [POOL.x1 - 0.55, PZ(15.6), 0.9], [POOL.x0 + 1.05, PZ(13.7), 0.75]];
	for (const [x, z, open] of flowers) {
		g.float = [x, z, x * 3.7 + z * 1.3];
		const sz = 0.17;
		const rings = [[12, 1.0, 70], [10, 0.86, 48], [8, 0.66, 26]];
		rings.forEach(([cnt, len, tiltDeg], ri) => {
			for (let k = 0; k < cnt; k++) {
				const yaw = 2 * PI * k / cnt + ri * 0.33;
				const tilt = (90 - (90 - tiltDeg) * open) * PI / 180;
				// a petal: a pointed, cupped leaf shape
				const NS = 6, NW = 4;
				const verts = [];
				for (let i = 0; i <= NS; i++) {
					const t = i / NS;
					const wdt = (0.18 + 0.82 * Math.sin(PI * Math.min(1, Math.pow(t, 0.8) * 0.75 + 0.1))) * 0.36 * len * sz;
					const row = [];
					for (let j = 0; j <= NW; j++) {
						const u = (j / NW) * 2 - 1;
						const lx = u * wdt, ly = Math.abs(u) * Math.abs(u) * 0.12 * len * sz, lr = t * len * sz;
						// lift along the petal by its tilt
						const rr = lr * Math.cos(tilt), yy = lr * Math.sin(tilt) + ly;
						const px = x + Math.cos(yaw) * rr - Math.sin(yaw) * lx;
						const pz = z + Math.sin(yaw) * rr + Math.cos(yaw) * lx;
						row.push(g.v([px, 0.03 + yy, pz], [-Math.cos(yaw) * Math.sin(tilt) * 0.6, 0.8, -Math.sin(yaw) * Math.sin(tilt) * 0.6], K.PETAL, [(ri === 2 ? 0.5 : 0.0) + 0.5 * (0.5 + 0.5 * u * 0.92), 0.98 - t * 0.96]));
					}
					verts.push(row);
				}
				for (let i = 0; i < NS; i++) {
					for (let j = 0; j < NW; j++) {
						const a = verts[i][j], b = verts[i][j + 1], c = verts[i + 1][j + 1], d = verts[i + 1][j];
						g.idx.push(a, b, c, a, c, d, a, c, b, a, d, c);
					}
				}
			}
		});
		g.lathe(x, z, [[0.0, 0.03 + 0.05 * sz * 4], [0.025, 0.03 + 0.045 * sz * 4], [0.032, 0.035], [0.0, 0.03]], K.STAMEN, 12);
	}
	g.float = null;
}

function buildStudio(g) {
	const rnd = rng(907);
	// --- the work table under the left windows, with jars and brushes
	{
		const tx = 1.25, tz = 11.1, hl = 1.35, hw = 0.48, top = 0.86;
		g.box(tx - hw, top - 0.06, tz - hl, tx + hw, top, tz + hl, K.WOOD);
		for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.box(tx + sx * (hw - 0.08) - 0.04, 0, tz + sz * (hl - 0.1) - 0.04, tx + sx * (hw - 0.08) + 0.04, top - 0.06, tz + sz * (hl - 0.1) + 0.04, K.WOOD);
		g.box(tx - hw + 0.06, 0.16, tz - hl + 0.1, tx + hw - 0.06, 0.19, tz + hl - 0.1, K.WOOD);
		for (let i = 0; i < 11; i++) {
			const x = tx + (rnd() - 0.5) * 0.6, z = tz + (rnd() - 0.5) * 2.2;
			const r = 0.035 + rnd() * 0.04, h = 0.09 + rnd() * 0.14;
			g.lathe(x, z, [[0, top], [r, top], [r * 1.02, top + h * 0.9], [r * 0.9, top + h], [0.0, top + h]], i % 3 ? K.JAR : K.POT, 14);
			if (i % 3 === 0) {
				for (let k = 0; k < 7; k++) {
					const a = rnd() * 2 * PI, l = 0.28 + rnd() * 0.12, lean = 0.12 + rnd() * 0.2;
					g.beam([x, top + 0.03, z], [x + Math.cos(a) * lean * l, top + 0.03 + l, z + Math.sin(a) * lean * l], 0.0055, K.BRUSH);
				}
			}
		}
		// a stack of rags and a palette
		g.box(tx - 0.3, top, tz + 0.7, tx + 0.15, top + 0.02, tz + 1.15, K.WOOD);
	}
	// --- canvases leaning against the left wall, near the far end
	for (let i = 0; i < 5; i++) {
		const w = 0.55 + rnd() * 0.6, h = 0.75 + rnd() * 0.8, z = 19.3 + i * 0.16, x = 0.25 + i * 0.07;
		const lean = 0.17;
		const top = [x + h * Math.sin(lean) * 0, h, z];
		g.quad([x + 0.18, 0, z - w / 2], [x + 0.18, 0, z + w / 2], [x + 0.18 - h * Math.sin(lean), h * Math.cos(lean), z + w / 2], [x + 0.18 - h * Math.sin(lean), h * Math.cos(lean), z - w / 2], [Math.cos(lean), Math.sin(lean), 0], i % 2 ? K.WOOD : K.GESSO, [[0, 0], [1, 0], [1, 1], [0, 1]]);
		void top;
	}
	// --- pendant lamps hanging from the trusses (lit at night)
	for (const p of LAMPS) {
		g.beam([p[0], H, p[2]], [p[0], p[1] + 0.05, p[2]], 0.008, K.STEEL);
		g.lathe(p[0], p[2], [[0.04, p[1] + 0.06], [0.06, p[1] + 0.02], [0.16, p[1] - 0.09], [0.29, p[1] - 0.22], [0.33, p[1] - 0.28], [0.32, p[1] - 0.285]], K.SHADE, 32);
		g.lathe(p[0], p[2], [[0.0, p[1] - 0.25], [0.06, p[1] - 0.2], [0.0, p[1] - 0.12]], K.BULB, 12);
	}
}

const LAMPS = [[4.2, 4.6, 7.33], [11.8, 4.6, 7.33], [4.2, 4.6, 16.5], [11.8, 4.6, 16.5]];
const PLANTS = [[POOL.x0 - 1.0, POOL.z0 - 1.0, 1.0], [POOL.x1 + 1.0, POOL.z0 - 1.0, 0.95], [POOL.x0 - 1.0, POOL.z1 + 1.0, 1.15], [POOL.x1 + 1.0, POOL.z1 + 1.0, 1.1], [0.9, 1.3, 1.25], [W - 0.9, L - 1.2, 1.3]];

// ------------------------------------------------------------------
// GEOMETRY: leaves (cut out of res/tree/leaves.webp)
// ------------------------------------------------------------------

// the eight leaves in the texture: [u0, v0, u1, v1] (v down)
const LEAF_UV = [[0.0, 0.0, 0.16, 0.5], [0.16, 0.0, 0.34, 0.4], [0.35, 0.0, 0.5, 0.36], [0.5, 0.0, 0.66, 0.38], [0.68, 0.0, 0.84, 0.42],
	[0.0, 0.6, 0.19, 1.0], [0.2, 0.57, 0.36, 1.0], [0.41, 0.6, 0.58, 1.0]];

function buildLeaves() {
	const g = { pos: [], nrm: [], uv: [], shade: [], flower: [], idx: [] };
	const rnd = rng(1213);
	// a leaf card bent along its length, from base b, pointing along dir
	const leaf = (b, dir, side, len, curl) => {
		const box = LEAF_UV[Math.floor(rnd() * LEAF_UV.length)];
		const aspect = (box[2] - box[0]) / (box[3] - box[1]);
		const wid = len * aspect * 1.0;
		const NS = 5;
		const base = g.pos.length / 3;
		const sh = 0.6 + rnd() * 0.4;
		for (let i = 0; i <= NS; i++) {
			const t = i / NS;
			const droop = curl * t * t * len;
			const c = [b[0] + dir[0] * t * len, b[1] + dir[1] * t * len - droop, b[2] + dir[2] * t * len];
			for (const u of [-0.5, 0.5]) {
				g.pos.push(c[0] + side[0] * u * wid + O[0], c[1] + side[1] * u * wid - Math.abs(u) * 0.08 * wid + O[1], c[2] + side[2] * u * wid + O[2]);
				const n = [dir[1] * side[2] - dir[2] * side[1], dir[2] * side[0] - dir[0] * side[2], dir[0] * side[1] - dir[1] * side[0]];
				const nl = Math.hypot(...n) || 1;
				g.nrm.push(n[0] / nl, Math.abs(n[1] / nl) + 0.2, n[2] / nl);
				g.uv.push(u < 0 ? box[0] : box[2], box[3] - (box[3] - box[1]) * t);
				g.shade.push(sh);
				g.flower.push(0);
			}
		}
		for (let i = 0; i < NS; i++) {
			const a = base + i * 2;
			g.idx.push(a, a + 1, a + 3, a, a + 3, a + 2);
		}
	};
	// the bougainvillea's leaves, along the roof's beams
	bougainvillea(g, leaf, rnd);
	// and a little trailing over the corners of the pool's coping
	for (const [x, z, sx] of [[POOL.x0 - 0.3, POOL.z1 + 0.3, -1], [POOL.x1 + 0.3, POOL.z0 - 0.3, 1], [POOL.x0 - 0.3, POOL.z0 - 0.2, -1]]) {
		for (let i = 0; i < 26; i++) {
			const a = rnd() * 2 * PI;
			const px = x + (rnd() - 0.3) * 0.5 * -sx, pz = z + (rnd() - 0.5) * 0.8;
			const y = POOL.top + 0.01 - Math.max(0, (Math.abs(px - x) - 0.1)) * 0.6 * rnd();
			leaf([px, Math.max(0.05, y), pz], [Math.cos(a), -0.15, Math.sin(a)], [-Math.sin(a), 0, Math.cos(a)], 0.08 + rnd() * 0.05, 0.12);
		}
	}
	return g;
}

// ------------------------------------------------------------------
// GEOMETRY: glass (window panes and the roof)
// ------------------------------------------------------------------

function buildGlass() {
	const g = Geo();
	for (const side of [0]) {
		const x = side ? W + T * 0.5 + 0.01 : -T * 0.5 - 0.01;
		const n = side ? [-1, 0, 0] : [1, 0, 0];
		for (const c of WIN.c) {
			const dz = 0.05;
			for (let z = c - WIN.hw; z < c + WIN.hw - 1e-6; z += dz) {
				const za = z, zb = Math.min(c + WIN.hw, z + dz);
				const ta = winTop(za - c + 1e-4) || WIN.spring, tb = winTop(zb - c - 1e-4) || WIN.spring;
				if (side) g.quad([x, WIN.sill, zb], [x, WIN.sill, za], [x, ta, za], [x, tb, zb], n, 0, [[zb, WIN.sill], [za, WIN.sill], [za, ta], [zb, tb]]);
				else g.quad([x, WIN.sill, za], [x, WIN.sill, zb], [x, tb, zb], [x, ta, za], n, 0, [[za, WIN.sill], [zb, WIN.sill], [zb, tb], [za, ta]]);
			}
		}
	}
	// the roof's two slopes
	const nl = Math.hypot(KR, 1);
	g.quad([0, H + 0.002, L], [0, H + 0.002, 0], [W / 2, RIDGE + 0.002, 0], [W / 2, RIDGE + 0.002, L], [KR / nl, -1 / nl, 0].map((x) => -x).map((x, i) => (i === 1 ? -Math.abs(x) : x)), 1, [[0, L], [0, 0], [W / 2, 0], [W / 2, L]]);
	g.quad([W, H + 0.002, 0], [W, H + 0.002, L], [W / 2, RIDGE + 0.002, L], [W / 2, RIDGE + 0.002, 0], [-KR / nl, -1 / nl, 0], 1, [[W, 0], [W, L], [W / 2, L], [W / 2, 0]]);
	return g;
}

// ------------------------------------------------------------------
// GLSL: shared noise and the room's light
// ------------------------------------------------------------------

const NOISE = `
	float hash13(vec3 p3) {
		p3 = fract(p3 * 0.1031);
		p3 += dot(p3, p3.zyx + 31.32);
		return fract((p3.x + p3.y) * p3.z);
	}
	float vnoise3(vec3 p) {
		vec3 i = floor(p), f = fract(p);
		f = f * f * (3.0 - 2.0 * f);
		return mix(mix(mix(hash13(i), hash13(i + vec3(1, 0, 0)), f.x), mix(hash13(i + vec3(0, 1, 0)), hash13(i + vec3(1, 1, 0)), f.x), f.y),
		           mix(mix(hash13(i + vec3(0, 0, 1)), hash13(i + vec3(1, 0, 1)), f.x), mix(hash13(i + vec3(0, 1, 1)), hash13(i + vec3(1, 1, 1)), f.x), f.y), f.z);
	}
	float fbm3(vec3 p) {
		float s = 0.0, a = 0.5;
		for (int i = 0; i < 5; i++) { s += a * vnoise3(p); p = p * 2.03 + 7.1; a *= 0.5; }
		return s;
	}
`;

// the lamps, in world metres (for the shader)
const LAMPS_W = LAMPS.map((p) => toW([p[0], p[1] - 0.22, p[2]]));

const LIGHT = `
	${NOISE}
	${sunGLSL()}

	// the sky outside: what the windows and the roof show, and what
	// lights the room when the sun does not
	vec3 studioSky(vec3 d) {
		float up = clamp(d.y, -0.2, 1.0);
		vec3 dayZen = vec3(0.22, 0.45, 0.85), dayHor = vec3(0.86, 0.90, 0.92);
		vec3 day = mix(dayHor, dayZen, pow(max(up, 0.0), 0.55));
		float sd = max(dot(d, STUDIO_SUN), 0.0);
		day += vec3(1.0, 0.86, 0.62) * (pow(sd, 6.0) * 0.45 + pow(sd, 60.0) * 0.8);
		vec3 nZen = vec3(0.012, 0.022, 0.05), nHor = vec3(0.05, 0.065, 0.10);
		vec3 nite = mix(nHor, nZen, pow(max(up, 0.0), 0.5));
		// the moon, its halo, and the stars
		nite += vec3(0.55, 0.65, 0.9) * (pow(sd, 12.0) * 0.12 + pow(sd, 120.0) * 0.4) + vec3(0.95, 0.97, 1.0) * smoothstep(0.99955, 0.9997, sd) * 3.0;
		vec3 sg = floor(d * 260.0);
		float star = step(0.9965, hash13(sg)) * smoothstep(0.02, 0.2, d.y) * (0.5 + 0.5 * sin(time * 2.0 + hash13(sg + 3.0) * 30.0));
		nite += vec3(0.9, 0.93, 1.0) * star * 0.7;
		return mix(day, nite, night);
	}

	// the light reaching a point: sun through the openings, the sky
	// through the glass, light bounced off the sunlit floor, and at night
	// the pendant lamps. Returns diffuse light; spec gets the sun's glint.
	vec3 studioLight(vec3 pw, vec3 N, vec3 V, float gloss, out vec3 spec, out float sunVis) {
		vec3 p = pw - vec3(${f(O[0])}, ${f(O[1])}, ${f(O[2])});
		float vis = studioSun(pw + N * 0.03);
		sunVis = vis;
		vec3 sunC = mix(vec3(1.0, 0.88, 0.70) * 3.9, vec3(0.50, 0.64, 1.0) * 1.35, night);
		float lam = max(dot(N, STUDIO_SUN), 0.0);
		vec3 col = sunC * vis * lam;
		vec3 Hh = normalize(STUDIO_SUN + V);
		spec = sunC * vis * pow(max(dot(N, Hh), 0.0), mix(16.0, 400.0, gloss)) * mix(0.04, 1.0, gloss) * (lam > 0.0 ? 1.0 : 0.0);

		// skylight: the roof is glass, the walls are full of windows
		float upF = 0.5 + 0.5 * N.y;
		float hgt = clamp(p.y / ${f(H)}, 0.0, 1.0);
		// corners and the foot of the walls get less of the sky
		float dw = min(min(p.x, ${f(W)} - p.x), min(p.z, ${f(L)} - p.z));
		float occ = mix(0.55, 1.0, smoothstep(0.0, 2.2, dw)) * mix(0.72, 1.0, smoothstep(0.0, 2.5, p.y));
		vec3 skyC = mix(vec3(0.70, 0.65, 0.58), vec3(0.028, 0.042, 0.08), night);
		col += skyC * (0.22 + 0.62 * upF) * occ * (0.85 + 0.3 * hgt) * 0.36;
		// the bright left windows, seen from walls and things facing them
		col += mix(vec3(1.0, 0.86, 0.66), vec3(0.06, 0.08, 0.14), night) * max(-N.x, 0.0) * 0.16 * occ;
		// light thrown back up off the sunlit floor: warm, from below
		float pools = mix(1.0, 0.15, night);
		col += vec3(0.95, 0.68, 0.42) * pools * (0.12 + 0.26 * max(-N.y, 0.0)) * (1.0 - smoothstep(0.5, 6.0, p.y)) * smoothstep(0.0, 1.2, dw);

		// the lamps (by night)
		if (night > 0.01) {
			${LAMPS_W.map((l) => `
			{
				vec3 d = vec3(${f(l[0])}, ${f(l[1])}, ${f(l[2])}) - pw;
				float dd = dot(d, d);
				vec3 Ld = d * inversesqrt(dd);
				// the shade throws the light downwards
				float cone = smoothstep(0.05, 0.55, Ld.y);
				float w = night * 6.5 * cone / (1.0 + dd * 0.9);
				col += vec3(1.0, 0.66, 0.36) * w * (max(dot(N, Ld), 0.0) * 0.85 + 0.15);
				spec += vec3(1.0, 0.7, 0.4) * w * pow(max(dot(N, normalize(Ld + V)), 0.0), mix(16.0, 300.0, gloss)) * gloss;
			}`).join('')}
		}
		return col;
	}

	// the dusty, sun-warmed air between the eye and a surface
	vec3 studioAir(vec3 col, vec3 pw, vec3 eye) {
		float d = length(pw - eye);
		float h = 1.0 - exp(-d * 0.035);
		vec3 airC = mix(vec3(0.36, 0.30, 0.24), vec3(0.02, 0.03, 0.05), night);
		return mix(col, airC, h * 0.25);
	}
`;

// ------------------------------------------------------------------
// THE MODULE
// ------------------------------------------------------------------

function decodeStatue(buf) {
	const dv = new DataView(buf);
	const nV = dv.getUint32(4, true), nI = dv.getUint32(8, true);
	const mn = [], sz = [];
	for (let k = 0; k < 3; k++) { mn.push(dv.getFloat32(12 + k * 4, true)); sz.push(dv.getFloat32(24 + k * 4, true)); }
	let off = 36;
	const pos = new Uint16Array(buf, off, nV * 3); off += nV * 6;
	const idx = new Uint16Array(buf, off, nI); off += nI * 2;
	const nrm = new Int8Array(buf, off, nV * 3);
	return { nV, nI, mn, sz, pos, idx, nrm };
}

function loadTexture(regl, url, opts) {
	const wrap = (opts && opts.wrap) || 'clamp';
	const tex = regl.texture({ data: [[[0, 0, 0, 0]]], min: 'linear', mag: 'linear' });
	const state = { tex, ready: false };
	fetch(url)
		.then((r) => { if (!r.ok) throw new Error('Could not load ' + url); return r.blob(); })
		.then((b) => createImageBitmap(b, { premultiplyAlpha: 'none' }).catch(() => new Promise((ok, fail) => {
			const img = new Image(); img.onload = () => ok(img); img.onerror = fail; img.src = URL.createObjectURL(b);
		})))
		.then((img) => { tex({ data: img, flipY: false, min: 'mipmap', mipmap: 'nice', mag: 'linear', wrap }); state.ready = true; })
		.catch((e) => console.error(e));
	return state;
}

// the pool's motion, shared by the water and what floats on it: a slow
// swell, and the live surface (pondSim in the module): a height map of the
// pool, a cell every 3 cm, in which every touch on the water spreads as
// rings that cross, bounce off the walls and the plinth, and die away
// under the pads. Heights are kept in 8-bit pictures, two bytes each (so
// it works on every graphics chip), and read back here with our own
// smoothing between cells.
const SIM_NX = 128, SIM_NZ = Math.round((POOL.z1 - POOL.z0) / (11.0 / 372));
const SIM_DX = (POOL.x1 - POOL.x0) / SIM_NX, SIM_DZ = (POOL.z1 - POOL.z0) / SIM_NZ;
const SIM_HMAX = 0.02;
const SIM_CODEC = `
	float simDec(vec2 c) { return (floor(c.x * 255.0 + 0.5) * 256.0 + floor(c.y * 255.0 + 0.5)) / 65535.0 * 2.0 - 1.0; }
	vec2 simEnc(float h) {
		float v = floor(clamp(h * 0.5 + 0.5, 0.0, 1.0) * 65535.0 + 0.5);
		float hi = floor(v / 256.0);
		return vec2(hi, v - hi * 256.0) / 255.0;
	}
`;
const WAVES = `
	uniform float stime;
	uniform highp sampler2D simTex;
	${SIM_CODEC}
	float simAt(vec2 i) {
		i = clamp(i, vec2(0.0), vec2(${SIM_NX - 1}.0, ${SIM_NZ - 1}.0));
		return simDec(texture2D(simTex, (i + 0.5) / vec2(${SIM_NX}.0, ${SIM_NZ}.0)).rg);
	}
	// the height of the water at world xz (metres, tiny)
	float poolHeight(vec2 xz) {
		float h = 0.0018 * sin(xz.x * 2.1 + stime * 0.55) * sin(xz.y * 1.7 - stime * 0.43)
		        + 0.0010 * sin(xz.x * 3.7 - xz.y * 2.9 + stime * 0.8);
#ifndef NO_SIM
		vec2 g = (xz - vec2(${f(POOL.x0 + O[0])}, ${f(POOL.z0 + O[2])})) / vec2(${f(SIM_DX)}, ${f(SIM_DZ)}) - 0.5;
		vec2 i = floor(g), fr = g - i;
		float sh = mix(mix(simAt(i), simAt(i + vec2(1.0, 0.0)), fr.x), mix(simAt(i + vec2(0.0, 1.0)), simAt(i + vec2(1.0, 1.0)), fr.x), fr.y);
		h += sh * ${f(SIM_HMAX)};
#endif
		return h;
	}
`;

const VERT = `
	precision highp float;
	uniform mat4 proj, view;
	uniform float yScale;
	attribute vec3 position, normal;
	attribute float kind;
	attribute vec2 uv;
	attribute vec4 anchor;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${WAVES}
	void main() {
		vec3 q = position;
		vec3 n = normal;
		if (anchor.w > 0.5) {
			// floating: a slow wander, a slow turn, and riding the water
			vec2 c = anchor.xy;
			float sd = anchor.z;
			vec2 drift = vec2(sin(stime * 0.045 + sd * 6.3), cos(stime * 0.037 + sd * 4.1)) * 0.05;
			float rot = sin(stime * 0.05 + sd * 9.0) * 0.18;
			vec2 rel = q.xz - c;
			float cr = cos(rot), sr = sin(rot);
			rel = vec2(cr * rel.x - sr * rel.y, sr * rel.x + cr * rel.y);
			vec2 cc = c + drift;
			q.xz = cc + rel;
			// lift and tilt with the water under it
			float h0 = poolHeight(cc);
			float e = 0.08;
			vec2 grad = vec2(poolHeight(cc + vec2(e, 0.0)) - h0, poolHeight(cc + vec2(0.0, e)) - h0) / e;
			q.y += h0 * 1.4 + dot(rel, grad) * 1.4;
			n = normalize(vec3(n.x - grad.x * n.y, n.y, n.z - grad.y * n.y));
		}
		v_pos = q; v_nrm = n; v_kind = kind; v_uv = uv;
		vec3 t = view[3].xyz;
		v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
		v_eye.y *= yScale;
		vec3 p = q; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`;

const FRAG = `
	precision highp float;
	uniform float night, time, yScale, mirrorOn;
	uniform sampler2D padTex, petalTex, reflTex;
	uniform sampler2D rockCol, rockNrm, oldCol, oldNrm;
	uniform vec2 reflSize;
	uniform float reflOn;
	uniform mat4 view;
	${WAVES}
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${LIGHT}

	bool is(float k) { return abs(v_kind - k) < 0.5; }

	// a photographed stone laid flat on a face, along the face's main axis:
	// its texture coordinates and the directions of the picture's right and up
	void planar(vec3 p, vec3 N, float scale, out vec2 uv, out vec3 T, out vec3 B) {
		vec3 a = abs(N);
		if (a.y > a.x && a.y > a.z) { uv = p.xz; T = vec3(1.0, 0.0, 0.0); B = vec3(0.0, 0.0, -1.0); }
		else if (a.x > a.z) { uv = vec2(p.z, -p.y); T = vec3(0.0, 0.0, 1.0); B = vec3(0.0, 1.0, 0.0); }
		else { uv = vec2(p.x, -p.y); T = vec3(1.0, 0.0, 0.0); B = vec3(0.0, 1.0, 0.0); }
		uv /= scale;
	}
	// the stone's relief from its normal map (rg), and its hollows (b)
	vec3 bumped(vec3 N, vec3 T, vec3 B, vec4 tn, float k) {
		vec2 d = tn.rg * 2.0 - 1.0;
		return normalize(N + (T * d.x + B * d.y) * k);
	}
	// the old stone's colour: greyed, cooled, a little green, as in his photograph
	vec3 oldTone(vec3 tc) {
		float lum = dot(tc, vec3(0.3, 0.59, 0.11));
		return mix(vec3(lum), tc, 0.42) * vec3(1.06, 1.10, 1.06);
	}

	void main() {
		vec3 pw = v_pos;
		vec3 p = pw - vec3(${f(O[0])}, ${f(O[1])}, ${f(O[2])});
		vec3 V = normalize(v_eye - pw);
		vec3 N = normalize(v_nrm);
		if (dot(N, V) < 0.0 && !is(${K.PETAL}.0)) N = -N;
		if (is(${K.PETAL}.0) && dot(N, V) < 0.0) N = -N;

		// in the reflection under the floor, the floor and the water are not drawn
		bool floorish = is(${K.FLOOR}.0) || is(${K.WATER}.0);
		if (yScale < 0.0 && floorish) discard;

		// fallen bracts: little papery hearts, pink or white
		if (is(${K.BRACT}.0)) {
			vec2 u = vec2(fract(v_uv.x), v_uv.y) * 2.0 - 1.0;
			float heart = length(vec2(u.x * 1.1, u.y + 0.15 * abs(u.x) * 2.0 - 0.1)) ;
			if (heart > 0.85 + 0.1 * sin(atan(u.y, u.x) * 3.0)) discard;
		}
		vec3 base = vec3(0.5);
		float gloss = 0.1;
		float checker = 0.0;
		float rough = 1.0;
		float aoK = 1.0;
		float sss = 0.0;

		if (is(${K.ROCK}.0)) {
			// rough walling: uneven slabs of pale coral stone bedded in lime,
			// greyed by age, damp and darker at the foot, streaked where rain
			// once ran down
			vec2 uv; vec3 T, B;
			planar(p, N, 2.0, uv, T, B);
			vec3 tc = texture2D(rockCol, uv).rgb; tc *= tc;
			vec4 tn = texture2D(rockNrm, uv);
			float lum = dot(tc, vec3(0.3, 0.59, 0.11));
			base = mix(vec3(lum), tc, 0.5) * vec3(1.62, 1.64, 1.56);
			base *= 0.86 + 0.24 * fbm3(p * vec3(0.22, 0.16, 0.22) + 5.0);
			float streak = fbm3(vec3((p.x + p.z) * 1.6, p.y * 0.1, 3.0));
			base = mix(base, base * vec3(0.72, 0.75, 0.70), smoothstep(0.52, 0.78, streak) * 0.8);
			base *= mix(0.66, 1.0, smoothstep(0.0, 1.3, p.y + 0.4 * streak));
			base *= mix(1.0, 0.84, smoothstep(${f(H - 2.2)}, ${f(H)}, p.y));
			N = bumped(N, T, B, tn, 1.4);
			aoK = mix(0.42, 1.0, tn.b);
			gloss = 0.05;
		} else if (is(${K.OLDSTONE}.0) || is(${K.HOLLOW}.0)) {
			// old weathered limestone, dressed in blocks: grey and lichened,
			// darker and greener low down and where the water has been
			vec2 uv; vec3 T, B;
			planar(p, N, 1.7, uv, T, B);
			vec3 tc = texture2D(oldCol, uv).rgb; tc *= tc;
			vec4 tn = texture2D(oldNrm, uv);
			base = oldTone(tc) * 1.18;
			base *= 0.86 + 0.26 * fbm3(p * 0.5 + 9.0);
			float streak = fbm3(vec3((p.x + p.z) * 3.0, p.y * 0.25, 7.0));
			base = mix(base, base * vec3(0.55, 0.58, 0.52), smoothstep(0.55, 0.8, streak) * 0.75);
			// moss and wet near the water and the floor
			float low = 1.0 - smoothstep(0.0, ${f(POOL.top + 0.35)}, p.y);
			float moss = low * smoothstep(0.35, 0.65, fbm3(p * 4.0 + 2.0));
			base = mix(base, vec3(0.10, 0.12, 0.065), moss * 0.6);
			base *= mix(0.72, 1.0, smoothstep(0.0, 0.22, p.y));
			if (is(${K.HOLLOW}.0)) {
				// the hollow: older, damper, never washed by the sun
				base *= vec3(0.70, 0.73, 0.68) * (0.85 + 0.15 * smoothstep(${f(NICHE.floor)}, ${f(NICHE.spring)}, p.y));
			}
			N = bumped(N, T, B, tn, 1.1);
			aoK = mix(0.5, 1.0, tn.b);
			gloss = 0.08;
		} else if (is(${K.PLASTER}.0) || is(${K.NICHE}.0)) {
			// old lime plaster: warm, patchy, with a soft trowelled bloom
			float big = fbm3(p * vec3(0.35, 0.45, 0.35));
			float mid = fbm3(p * 1.6 + 3.0);
			float fine = vnoise3(p * 14.0);
			vec3 a = vec3(0.70, 0.60, 0.47), b = vec3(0.84, 0.76, 0.63);
			base = mix(a, b, smoothstep(0.3, 0.7, big));
			base *= 0.86 + 0.22 * mid + 0.05 * fine;
			// damp stains low down, soot high up
			base *= mix(0.86, 1.0, smoothstep(0.0, 1.4, p.y + 0.6 * mid));
			base *= mix(1.0, 0.9, smoothstep(${f(H - 2.0)}, ${f(H)}, p.y));
			// where the plaster has come away, old brick shows through
			float bare = smoothstep(0.70, 0.74, fbm3(p * vec3(0.5, 0.8, 0.5) + 11.0)) * smoothstep(0.4, 1.6, p.y) * 0.85;
			vec2 bk = (abs(N.x) > 0.5 ? p.zy : p.xy) * vec2(1.0 / 0.23, 1.0 / 0.075);
			bk.x += floor(bk.y) * 0.5;
			float mortar = max(smoothstep(0.9, 0.97, fract(bk.x)), smoothstep(0.82, 0.92, fract(bk.y)));
			vec3 brick = mix(vec3(0.55, 0.30, 0.20), vec3(0.42, 0.25, 0.18), vnoise3(vec3(floor(bk), 0.0) * 0.7)) * (0.85 + 0.3 * hash13(vec3(floor(bk), 1.0)));
			brick = mix(brick, vec3(0.62, 0.58, 0.52), mortar);
			base = mix(base, brick, bare);
			if (is(${K.NICHE}.0)) base *= 0.55;
			gloss = 0.04;
		} else if (is(${K.STONE}.0)) {
			float n = fbm3(p * vec3(1.2, 2.5, 1.2));
			base = mix(vec3(0.72, 0.66, 0.56), vec3(0.84, 0.79, 0.70), n) * (0.92 + 0.12 * vnoise3(p * 20.0));
			gloss = 0.12;
		} else if (is(${K.TRAVERTINE}.0)) {
			// travertine: bands, little holes, a warm cream
			float band = fbm3(vec3(p.x * 0.4, p.y * 9.0 + fbm3(p * 1.5) * 2.0, p.z * 0.4));
			base = mix(vec3(0.73, 0.65, 0.53), vec3(0.88, 0.82, 0.72), band);
			float pit = smoothstep(0.84, 0.9, vnoise3(p * 55.0));
			base *= 1.0 - pit * 0.18;
			// wet and darker just above the water
			base *= mix(0.78, 1.0, smoothstep(0.0, 0.12, p.y));
			gloss = 0.18;
		} else if (is(${K.STEEL}.0)) {
			base = vec3(0.035, 0.036, 0.038) * (0.8 + 0.4 * vnoise3(p * 3.0));
			gloss = 0.45;
		} else if (is(${K.FLOOR}.0)) {
			// the gallery's own floor: polished chequered marble, black and
			// dark cream, laid on the diagonal, with fine veins and hair-line
			// grout, the polish duller where people walk
			vec2 tq = mat2(0.70711, 0.70711, -0.70711, 0.70711) * (p.xz - vec2(${f(W / 2)}, 0.0));
			float tileSize = 0.62;
			vec2 tile = floor(tq / tileSize);
			checker = mod(tile.x + tile.y, 2.0);
			float rnd = hash13(vec3(tile, 5.0));
			vec3 lightTile = vec3(0.44, 0.37, 0.24) * (0.9 + 0.16 * rnd);
			vec3 darkTile = vec3(0.0008, 0.0007, 0.0006) + vec3(0.0002) * rnd;
			float vein = abs(sin(tq.x * 5.5 + tq.y * 2.0 + sin(tq.y * 1.6) + rnd * 6.0));
			vein = 1.0 - smoothstep(0.0, 0.09, vein);
			base = mix(lightTile, darkTile, checker);
			base = mix(base, base * 0.65, vein * 0.35 * (1.0 - checker));
			base = mix(base, base * 2.2 + 0.0006, vein * 0.18 * checker);
			vec2 tf = fract(tq / tileSize);
			float edge = min(min(tf.x, 1.0 - tf.x), min(tf.y, 1.0 - tf.y)) * tileSize;
			float grout = 1.0 - smoothstep(0.0, 0.006, edge);
			base *= 1.0 - 0.45 * grout;
			gloss = (0.86 + 0.28 * hash13(vec3(tile, 17.0))) * (1.0 - 0.5 * grout);
			aoK = mix(0.62, 1.0, smoothstep(0.0, 0.9, min(min(p.x, ${f(W)} - p.x), min(p.z, ${f(L)} - p.z))));
			// the curb throws a soft shadow round the pool
			vec2 dq = max(vec2(${f(POOL.x0 - POOL.curb)} - p.x, p.x - ${f(POOL.x1 + POOL.curb)}), vec2(${f(POOL.z0 - POOL.curb)} - p.z, p.z - ${f(POOL.z1 + POOL.curb)}));
			float dpool = max(max(dq.x, dq.y), 0.0);
			aoK *= mix(0.7, 1.0, smoothstep(0.0, 0.4, dpool));
		} else if (is(${K.WMARBLE}.0)) {
			// white statuary marble, polished: a soft grey cloud and fine veins
			float cl = fbm3(p * 1.4 + 2.0);
			float v1 = abs(sin(p.x * 3.1 + p.z * 1.7 + p.y * 5.0 + cl * 7.0));
			float vein = (1.0 - smoothstep(0.0, 0.05, v1)) * 0.7 + (1.0 - smoothstep(0.0, 0.02, abs(sin(p.z * 6.3 - p.x * 2.2 + cl * 11.0)))) * 0.3;
			base = mix(vec3(0.68, 0.68, 0.66), vec3(0.76, 0.76, 0.74), cl);
			base = mix(base, vec3(0.50, 0.51, 0.52), vein * 0.45);
			base *= mix(0.8, 1.0, smoothstep(0.0, 0.1, p.y));
			gloss = 0.88;
		} else if (is(${K.REDDOOR}.0) || is(${K.REDPANEL}.0)) {
			// deep crimson paint over wood: a soft sheen, the grain just showing
			float grain = vnoise3(vec3(p.x * 40.0, p.y * 2.0, p.z * 40.0));
			base = vec3(0.30, 0.022, 0.026) * (0.88 + 0.2 * grain);
			if (is(${K.REDPANEL}.0)) base *= 0.55;
			gloss = 0.62;
		} else if (is(${K.DARKWOOD}.0)) {
			float grain = vnoise3(vec3(p.x * 3.0, p.y * 45.0, p.z * 3.0));
			base = mix(vec3(0.030, 0.019, 0.014), vec3(0.062, 0.040, 0.028), grain);
			gloss = 0.35;
		} else if (is(${K.BRASS}.0)) {
			base = vec3(0.60, 0.44, 0.17) * (0.85 + 0.25 * vnoise3(p * 90.0));
			gloss = 0.78;
		} else if (is(${K.KEYHOLE}.0)) {
			base = vec3(0.004);
		} else if (is(${K.BRACT}.0)) {
			float white = step(1.5, v_uv.x);
			base = mix(vec3(0.62, 0.03, 0.22), vec3(0.86, 0.80, 0.80), white) * (0.8 + 0.3 * hash13(floor(p * 30.0)));
			sss = 0.5;
		} else if (is(${K.WATER}.0)) {
			base = vec3(0.012, 0.018, 0.014);
			gloss = 1.0;
		} else if (is(${K.PAD}.0)) {
			vec4 tx = texture2D(padTex, v_uv);
			if (tx.a < 0.5) discard;
			base = tx.rgb * tx.rgb * (0.8 + 0.35 * vnoise3(vec3(p.xz * 1.3, 2.0)));
			gloss = 0.55;
		} else if (is(${K.PETAL}.0)) {
			vec4 tx = texture2D(petalTex, v_uv);
			if (tx.a < 0.45) discard;
			base = tx.rgb * tx.rgb;
			sss = 0.6;
			gloss = 0.25;
		} else if (is(${K.STAMEN}.0)) {
			base = vec3(0.95, 0.66, 0.12);
			gloss = 0.2;
		} else if (is(${K.MARBLE}.0)) {
			// the nymph, aged like the niche: weathered pale stone gone grey,
			// rain streaks down her, grime in the folds and under her, lichen at the foot
			vec3 w = pow(abs(N), vec3(4.0)); w /= (w.x + w.y + w.z);
			vec3 tc = texture2D(oldCol, p.zy * 0.9).rgb * w.x + texture2D(oldCol, p.xz * 0.9).rgb * w.y + texture2D(oldCol, p.xy * 0.9).rgb * w.z;
			tc *= tc;
			base = mix(vec3(0.27, 0.26, 0.225), oldTone(tc) * 1.05, 0.65);
			float rain = fbm3(vec3(p.x * 7.0, p.y * 0.7, p.z * 7.0));
			base *= mix(1.0, 0.5, smoothstep(0.5, 0.8, rain));
			// grey-green lichen in blotches
			float lich = smoothstep(0.58, 0.72, fbm3(p * 9.0 + 4.0));
			base = mix(base, vec3(0.14, 0.15, 0.11), lich * 0.55);
			base *= mix(0.62, 1.0, smoothstep(-0.7, 0.35, N.y));
			float foot = 1.0 - smoothstep(${f(VENUS.plinth)}, ${f(VENUS.plinth + 0.7)}, p.y);
			base = mix(base, base * vec3(0.55, 0.62, 0.48), foot * smoothstep(0.4, 0.7, fbm3(p * 6.0)));
			sss = 0.06;
			gloss = 0.14;
		} else if (is(${K.WOOD}.0)) {
			float g = vnoise3(vec3(p.x * 2.0, p.y * 30.0, p.z * 2.0));
			base = mix(vec3(0.26, 0.15, 0.08), vec3(0.42, 0.27, 0.15), g) * (0.85 + 0.2 * vnoise3(p * 5.0));
			gloss = 0.2;
		} else if (is(${K.GESSO}.0)) {
			base = vec3(0.86, 0.83, 0.76) * (0.95 + 0.08 * vnoise3(p * 30.0));
		} else if (is(${K.PAINT}.0)) {
			// a canvas in progress (until his own go here): a warm toned
			// ground, a loose underpainting and a few strokes
			vec2 u = fract(v_uv);
			float idx = floor(v_uv.x);
			float sk = fbm3(vec3(u * vec2(3.0, 4.0), idx * 3.7));
			vec3 ground = mix(vec3(0.55, 0.36, 0.22), vec3(0.72, 0.56, 0.40), sk);
			float fig = smoothstep(0.32, 0.2, length((u - vec2(0.5, 0.58 + 0.04 * idx)) * vec2(1.4, 0.9)) + 0.15 * sk);
			base = mix(ground, vec3(0.22, 0.13, 0.08), fig * 0.6);
			base = mix(base, vec3(0.86, 0.80, 0.70), smoothstep(0.74, 0.8, fbm3(vec3(u * 9.0, idx))) * 0.5);
			float weave = 0.5 + 0.5 * sin(u.x * 610.0) * sin(u.y * 920.0);
			base *= 0.95 + 0.05 * weave;
			gloss = 0.3;
		} else if (is(${K.POT}.0)) {
			base = vec3(0.025, 0.025, 0.028);
			gloss = 0.85;
		} else if (is(${K.SOIL}.0)) {
			base = vec3(0.10, 0.07, 0.05) * (0.7 + 0.5 * vnoise3(p * 40.0));
		} else if (is(${K.SHADE}.0)) {
			base = vec3(0.03);
			gloss = 0.6;
		} else if (is(${K.BULB}.0)) {
			vec3 glow = mix(vec3(0.75, 0.70, 0.62) * 0.35, vec3(1.0, 0.75, 0.45) * 3.5, night);
			gl_FragColor = vec4(sqrt(glow), 1.0);
			return;
		} else if (is(${K.JAR}.0)) {
			base = mix(vec3(0.55, 0.42, 0.25), vec3(0.75, 0.70, 0.62), hash13(floor(p * 3.0)));
			gloss = 0.7;
		} else if (is(${K.BRUSH}.0)) {
			base = mix(vec3(0.42, 0.10, 0.06), vec3(0.75, 0.62, 0.38), step(${f(0.86 + 0.24)}, p.y));
			gloss = 0.5;
		} else if (is(${K.CLOTH}.0)) {
			float sp = smoothstep(0.86, 0.88, vnoise3(vec3(p.xz * 14.0, 5.0))) * smoothstep(0.5, 0.7, vnoise3(vec3(p.xz * 1.5, 1.0)));
			float sp2 = smoothstep(0.88, 0.9, vnoise3(vec3(p.xz * 19.0, 9.0))) * smoothstep(0.55, 0.75, vnoise3(vec3(p.xz * 1.2, 4.0)));
			base = vec3(0.52, 0.48, 0.42) * (0.9 + 0.12 * vnoise3(p * 25.0));
			base = mix(base, vec3(0.62, 0.30, 0.14), sp * 0.8);
			base = mix(base, vec3(0.20, 0.25, 0.35), sp2 * 0.7);
		}

		vec3 spec;
		float sunVis;
		vec3 light = studioLight(pw, N, V, gloss, spec, sunVis);
		vec3 col = base * light * aoK;

		// a soft sheen of light through the skin of petals and marble
		if (sss > 0.0) {
			float back = max(dot(-N, STUDIO_SUN), 0.0) * sunVis;
			float wrap = max(dot(N, STUDIO_SUN) + 0.5, 0.0) / 1.5 * sunVis;
			col += base * vec3(1.0, 0.82, 0.62) * (back * 0.8 + wrap * 0.6) * sss * mix(1.0, 0.1, night);
		}

		// reflections of the room and sky in the glossy things
		vec3 R = reflect(-V, N);
		float fres = pow(1.0 - max(dot(N, V), 0.0), 5.0);
		vec3 env = studioSky(R) * mix(0.35, 0.12, smoothstep(0.0, 0.5, -R.y)) * 0.8;
		col += spec;
		if (is(${K.POT}.0) || is(${K.STEEL}.0) || is(${K.SHADE}.0) || is(${K.JAR}.0)) {
			col += env * (0.04 + 0.6 * fres) * gloss * 1.2;
		}
		if (is(${K.BRASS}.0)) {
			col = base * light * 0.35 + spec * base * 2.5 + env * base * 1.6;
		}
		if (is(${K.REDDOOR}.0) || is(${K.REDPANEL}.0) || is(${K.WMARBLE}.0)) {
			col += env * (0.03 + 0.5 * fres) * gloss;
		}

		col = studioAir(col, pw, v_eye);

		float alpha = 1.0;
		if (is(${K.FLOOR}.0)) {
			// as polished as the gallery's: a clear reflection even looking
			// down, a mirror at grazing angles, more on the black tiles
			float cosV = clamp(V.y, 0.0, 1.0);
			float refl = 0.16 + 0.58 * pow(1.0 - cosV, 3.0);
			refl *= mix(0.72, 1.0, checker);
			refl *= gloss;
			alpha = 1.0 - refl * mirrorOn;
			alpha = mix(alpha, 1.0, clamp(sunVis * 0.4, 0.0, 0.45));
		}
		if (is(${K.WATER}.0)) {
			// still, dark water: almost a mirror, the sky's light on it, a
			// very slow breath of ripples
			// the moving surface: its slope from the swell and the rings
			float e = ${f(SIM_DX)};
			float h0 = poolHeight(pw.xz);
			vec2 grad = vec2(poolHeight(pw.xz + vec2(e, 0.0)) - poolHeight(pw.xz - vec2(e, 0.0)), poolHeight(pw.xz + vec2(0.0, e)) - poolHeight(pw.xz - vec2(0.0, e))) / (2.0 * e);
			vec3 Nw = normalize(vec3(-grad.x, 1.0, -grad.y));
			float stir = clamp(length(grad) * 6.0, 0.0, 1.0);
			float cosV = clamp(dot(Nw, V), 0.0, 1.0);
			float F = 0.02 + 0.98 * pow(1.0 - cosV, 5.0);
			float refl = mix(0.30, 0.95, F);
			// the sun (or the moon) glinting on the moving water
			vec3 Rw = reflect(-V, Nw);
			float glint = pow(max(dot(Rw, STUDIO_SUN), 0.0), 900.0) * sunVis;
			vec3 glintC = mix(vec3(1.0, 0.92, 0.78) * 9.0, vec3(0.75, 0.85, 1.0) * 3.0, night);
			col = base * light * 0.35;
			// where the rings pass, crests tipped away from you catch the bright
			// roof, troughs show the dark depth
			float side = clamp(dot(grad, normalize(V.xz + vec2(1e-4))) * 9.0, -1.0, 1.0);
			vec3 hi = studioSky(Rw) * mix(0.55, 0.30, night) + light * 0.04;
			vec3 lo = vec3(0.008, 0.011, 0.010);
			vec3 ringC = mix(lo, hi, 0.5 + 0.5 * side);
			col = mix(col, ringC, stir * (reflOn > 0.5 ? 0.25 : 0.6));
			col = studioAir(col, pw, v_eye);
			alpha = 1.0 - refl * mirrorOn * (1.0 - stir * 0.6);
			if (reflOn > 0.5 && mirrorOn > 0.5) {
				// the room's reflection, bent by the slope of the water under it
				vec3 dN = Nw - vec3(0.0, 1.0, 0.0);
				vec3 rgt = vec3(view[0].x, view[1].x, view[2].x), upv = vec3(view[0].y, view[1].y, view[2].y);
				float dist = length(v_eye - pw);
				vec2 off = vec2(dot(dN, rgt), dot(dN, upv)) * 0.3 / (1.0 + dist * 0.2);
				vec3 rc = texture2D(reflTex, clamp(gl_FragCoord.xy / reflSize + off, vec2(0.001), vec2(0.999))).rgb;
				col = mix(col, rc * rc, refl * (1.0 - stir * 0.3));
				alpha = 1.0;
			}
			col += glintC * glint;
			alpha = max(alpha, glint);
			if (mirrorOn < 0.5) { col = mix(col, studioSky(Rw) * 0.35, F); alpha = 1.0; }
		}

		col = max(col, vec3(0.0));
		gl_FragColor = vec4(sqrt(col), alpha);
	}`;

module.exports = function (regl) {
	const room = buildRoom();
	buildSteel(room);
	buildPond(room);
	buildStudio(room);
	buildVineStems(room);
	buildPetals(room);

	const BLEND = { enable: true, func: { srcRGB: 'src alpha', dstRGB: 'one minus src alpha', srcAlpha: 'one', dstAlpha: 'zero' } };

	// the studio's own clock, and the rings on the pool from the petals
	// that have landed in it lately
	const t0 = performance.now();
	const clock = { t: 0 };
	let heardKoi = 0;
	// vertex shaders read the moving water too, where the graphics chip lets
	// them (nearly all do); otherwise floating things ride the swell alone
	const GL = regl._gl;
	const VTF = !!(GL && GL.getParameter(GL.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0);
	const V = (src) => (VTF ? src : '#define NO_SIM\n' + src);

	// ---- the live surface of the pool (see WAVES) ------------------------
	const pondSim = (() => {
		const NX = SIM_NX, NZ = SIM_NZ;
		const zero = new Uint8Array(NX * NZ * 4);
		for (let i = 0; i < NX * NZ; i++) { zero[i * 4] = 128; zero[i * 4 + 2] = 128; }
		const mk = () => regl.framebuffer({ color: regl.texture({ width: NX, height: NZ, data: zero, min: 'nearest', mag: 'nearest', wrap: 'clamp' }), depth: false, stencil: false });
		const buf = [mk(), mk()];
		let cur = 0;
		// where there is water (R), and how much the pads hush it (G)
		const mask = new Uint8Array(NX * NZ * 4);
		for (let j = 0; j < NZ; j++) for (let i = 0; i < NX; i++) {
			const x = POOL.x0 + (i + 0.5) * SIM_DX, z = POOL.z0 + (j + 0.5) * SIM_DZ;
			const plinth = Math.abs(x - VENUS.x) < 0.43 && Math.abs(z - VENUS.z) < 0.43;
			let pad = 0;
			for (const p of POND_PADS) pad = Math.max(pad, 1 - Math.min(1, Math.max(0, (Math.hypot(x - p[0], z - p[1]) - p[2] * 0.7) / (p[2] * 0.3))));
			const k = (j * NX + i) * 4;
			mask[k] = plinth ? 0 : 255; mask[k + 1] = Math.round(pad * 255); mask[k + 3] = 255;
		}
		const maskTex = regl.texture({ width: NX, height: NZ, data: mask, min: 'nearest', mag: 'nearest', wrap: 'clamp' });
		const SRC_N = 16;
		const srcs = [];
		for (let i = 0; i < SRC_N; i++) srcs.push([0, 0, 0, 0.04]);
		const uni = { prev: regl.prop('prev'), mask: maskTex };
		for (let i = 0; i < SRC_N; i++) uni['src[' + i + ']'] = ((k) => () => srcs[k])(i);
		const C = Math.pow(0.36 * (1 / 60) / SIM_DX, 2);
		const step = regl({
			vert: 'precision highp float; attribute vec2 position; varying vec2 uv; void main() { uv = position * 0.5 + 0.5; gl_Position = vec4(position, 0.0, 1.0); }',
			frag: `
			precision highp float;
			uniform highp sampler2D prev, mask;
			uniform vec4 src[${SRC_N}];
			varying vec2 uv;
			${SIM_CODEC}
			void main() {
				vec2 px = 1.0 / vec2(${NX}.0, ${NZ}.0);
				vec4 c = texture2D(prev, uv);
				vec4 m = texture2D(mask, uv);
				float h = simDec(c.rg), hp = simDec(c.ba);
				if (m.r < 0.5) { gl_FragColor = vec4(simEnc(0.0), simEnc(0.0)); return; }
				// the neighbours (a wall or the plinth turns the wave back)
				float hs[4];
				vec2 d[4];
				d[0] = vec2(px.x, 0.0); d[1] = vec2(-px.x, 0.0); d[2] = vec2(0.0, px.y); d[3] = vec2(0.0, -px.y);
				float lap = -4.0 * h;
				for (int k = 0; k < 4; k++) {
					vec2 q = uv + d[k];
					bool inside = q.x > 0.0 && q.x < 1.0 && q.y > 0.0 && q.y < 1.0 && texture2D(mask, q).r > 0.5;
					lap += inside ? simDec(texture2D(prev, q).rg) : h;
				}
				// the pads hush the small waves under them
				float damp = mix(0.996, 0.95, m.g);
				float hn = h + (h - hp) * damp + ${f(C)} * lap;
				hn *= 0.9993;
				// whatever touched the water this moment
				vec2 p = vec2(${f(POOL.x0 + O[0])}, ${f(POOL.z0 + O[2])}) + uv * vec2(${f(POOL.x1 - POOL.x0)}, ${f(POOL.z1 - POOL.z0)});
				for (int i = 0; i < ${SRC_N}; i++) {
					vec4 s = src[i];
					if (s.z == 0.0) continue;
					vec2 dd = p - s.xy;
					hn += s.z * exp(-dot(dd, dd) / (s.w * s.w));
				}
				gl_FragColor = vec4(simEnc(clamp(hn, -1.0, 1.0)), simEnc(h));
			}`,
			attributes: { position: [-1, -1, 1, -1, -1, 1, 1, 1] },
			primitive: 'triangle strip',
			count: 4,
			framebuffer: regl.prop('out'),
			uniforms: uni,
			depth: { enable: false, mask: false },
			blend: { enable: false },
			cull: { enable: false },
			viewport: { x: 0, y: 0, width: NX, height: NZ }
		});
		// the things touching the water: [x, z (world), t0, strength, kind]
		// kind 0: a drop (a short train of rings), 1: a push (a moving fish)
		const touches = [];
		let simT = 0, acc = 0;
		return {
			tex: () => buf[cur].color[0],
			// a drop on the water: a petal, a sip, a gulp, a handful of crumbs
			drop(x, z, strength, size) {
				touches.push([x, z, simT, strength, 0, size || 0.035]);
				if (typeof window !== 'undefined' && window.__dropLog) window.__dropLog.push([x, z, simT, strength]);
			},
			// advance to time t, a sixtieth of a second at a time
			advance(t, pushes) {
				let dt = t - simT - acc;
				if (dt < 0 || dt > 2) { simT = t; acc = 0; return; }
				acc += dt;
				let n = 0;
				while (acc >= 1 / 60 && n < 8) {
					acc -= 1 / 60; simT += 1 / 60; n++;
					// the sources for this step
					let k = 0;
					for (let i = touches.length - 1; i >= 0; i--) {
						const tc = touches[i];
						const age = simT - tc[2];
						if (age > 1.4) { touches.splice(i, 1); continue; }
						if (k >= SRC_N) continue;
						// a few quick rings: the water springs back and forth
						const a = tc[3] * 0.05 * Math.sin(age * 2 * Math.PI * 2.4) * Math.exp(-age * 3.2);
						const sv = srcs[k++]; sv[0] = tc[0]; sv[1] = tc[1]; sv[2] = a; sv[3] = tc[5];
					}
					for (const ps of pushes) {
						if (k >= SRC_N) break;
						const sv = srcs[k++]; sv[0] = ps[0]; sv[1] = ps[1]; sv[2] = ps[2]; sv[3] = ps[3];
					}
					for (; k < SRC_N; k++) srcs[k][2] = 0;
					step({ prev: buf[cur].color[0], out: buf[1 - cur] });
					cur = 1 - cur;
				}
				if (n === 8) { acc = 0; simT = t; }
			},
			read() { return regl.read({ framebuffer: buf[cur] }); }
		};
	})();

	const tick = () => {
		clock.t = (performance.now() - t0) / 1000;
		if (typeof window !== 'undefined' && window.__studioFreeze != null) clock.t = window.__studioFreeze;
		for (const pt of FALL) {
			const st = fallState(pt, clock.t);
			const age = st.ph - st.Tf;
			// a soft drop as it touches the water
			if (st.inPool && age >= 0 && age < 0.5 && !(pt.heard > clock.t - 1)) {
				pt.heard = clock.t;
				pondSim.drop(st.lx + O[0], st.lz + O[2], 1.1, 0.04);
			}
		}
		// the koi: swim on; the rings where they sip and gulp
		let dt = clock.t - koi.sim.t;
		if (dt < 0 || dt > 120) { dt = Math.min(Math.max(dt, 0), 120); }
		while (dt > 1e-6) { const h = Math.min(dt, 0.05); koi.sim.step(h); dt -= h; }
		for (const e of koi.sim.events) if (e[2] > heardKoi) {
			heardKoi = e[2];
			pondSim.drop(e[0] + O[0], e[1] + O[2], e[3] * 1.3, e[3] >= 1 ? 0.07 : 0.04);
		}
		// a koi near the surface pushes the water ahead of it: a wake
		const pushes = [];
		for (const F of koi.sim.fish) {
			const shallow = Math.min(1, Math.max(0, (F.y + 0.15) / 0.09));
			if (shallow <= 0) continue;
			const a = 0.008 * shallow * Math.min(1.5, F.v / 0.15);
			pushes.push([F.x + O[0] + Math.cos(F.th) * 0.02, F.z + O[2] + Math.sin(F.th) * 0.02, a, 0.045]);
			pushes.push([F.x + O[0] - Math.cos(F.th) * 0.14, F.z + O[2] - Math.sin(F.th) * 0.14, -a, 0.055]);
		}
		pondSim.advance(clock.t, pushes);
	};
	const POOL_UNIFORMS = { stime: () => clock.t, simTex: () => pondSim.tex() };
	if (typeof location !== 'undefined' && /tourdebug/.test(location.search)) { window.__studioClock = clock; window.__pondSim = pondSim; }

	// the reflection under the floor, kept as a picture each frame so the
	// water can bend it
	let reflTex = regl.texture({ width: 4, height: 4, min: 'linear', mag: 'linear', wrap: 'clamp' });
	const reflSize = [4, 4];
	let reflOn = 0;
	const scope = regl({});
	const keepReflection = () => scope((ctx) => {
		const w = ctx.viewportWidth, h = ctx.viewportHeight;
		if (reflTex.width !== w || reflTex.height !== h) reflTex({ copy: true, width: w, height: h, min: 'linear', mag: 'linear', wrap: 'clamp' });
		else reflTex.subimage({ copy: true, width: w, height: h });
		reflSize[0] = w; reflSize[1] = h;
		reflOn = 1;
	});

	const padTex = loadTexture(regl, 'res/pond/lilypad.webp');
	const petalTex = loadTexture(regl, 'res/pond/petals.webp');
	// the rough slab walls and the old stone of the niche and the pool
	// (Poly Haven, CC0: see the readme)
	const rockCol = loadTexture(regl, 'res/studio/rock_col.webp', { wrap: 'repeat' });
	const rockNrm = loadTexture(regl, 'res/studio/rock_nrm.webp', { wrap: 'repeat' });
	const oldCol = loadTexture(regl, 'res/studio/oldstone_col.webp', { wrap: 'repeat' });
	const oldNrm = loadTexture(regl, 'res/studio/oldstone_nrm.webp', { wrap: 'repeat' });
	const ROOM_UNIFORMS = Object.assign({ padTex: () => padTex.tex, petalTex: () => petalTex.tex, reflTex: () => reflTex, reflSize: () => reflSize, reflOn: () => reflOn,
		rockCol: () => rockCol.tex, rockNrm: () => rockNrm.tex, oldCol: () => oldCol.tex, oldNrm: () => oldNrm.tex }, POOL_UNIFORMS);
	const makeDraw = (g, count) => regl({
		vert: V(VERT),
		frag: FRAG,
		attributes: {
			position: g.pos,
			normal: g.nrm,
			kind: g.kind,
			uv: g.uv,
			anchor: g.anchor && g.anchor.length ? g.anchor : new Float32Array(g.pos.length / 3 * 4)
		},
		elements: new Uint32Array(g.idx),
		count: count || g.idx.length,
		uniforms: ROOM_UNIFORMS,
		cull: { enable: false },
		blend: BLEND
	});
	const drawRoom = makeDraw(room);

	// the statue, loaded when it arrives
	let drawVenus = null;
	fetch(VENUS.file)
		.then((r) => { if (!r.ok) throw new Error('Could not load ' + VENUS.file); return r.arrayBuffer(); })
		.then((buf) => {
			const m = decodeStatue(buf);
			const g = { pos: [], nrm: [], kind: [], uv: [], anchor: null, idx: [] };
			const s = VENUS.height, c = Math.cos(VENUS.yaw), sn = Math.sin(VENUS.yaw);
			for (let i = 0; i < m.nV; i++) {
				const x = (m.mn[0] + m.pos[i * 3] / 65535 * m.sz[0]) * s;
				const y = (m.mn[1] + m.pos[i * 3 + 1] / 65535 * m.sz[1]) * s;
				const z = (m.mn[2] + m.pos[i * 3 + 2] / 65535 * m.sz[2]) * s;
				g.pos.push(VENUS.x + c * x + sn * z + O[0], VENUS.plinth + y + O[1], VENUS.z - sn * x + c * z + O[2]);
				const nx = m.nrm[i * 3] / 127, ny = m.nrm[i * 3 + 1] / 127, nz = m.nrm[i * 3 + 2] / 127;
				g.nrm.push(c * nx + sn * nz, ny, -sn * nx + c * nz);
				g.kind.push(K.MARBLE); g.uv.push(0, 0);
			}
			for (let i = 0; i < m.nI; i++) g.idx.push(m.idx[i]);
			drawVenus = makeDraw(g);
		})
		.catch((e) => console.error(e));

	// the leaves: cut-out cards from the tree's leaf texture
	const leafTex = loadTexture(regl, 'res/tree/leaves.webp');
	const lv = buildLeaves();
	const drawLeaves = regl({
		vert: V(`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position, normal;
		attribute vec2 uv;
		attribute float shade, flower;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_shade, v_flower;
		void main() {
			v_pos = position; v_nrm = normal; v_uv = uv; v_shade = shade; v_flower = flower;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = position; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`),
		frag: `
		precision highp float;
		uniform float night, time;
		uniform sampler2D tex;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_shade, v_flower;
		${LIGHT}
		vec2 hash22(vec2 p) {
			vec3 a = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
			a += dot(a, a.yzx + 33.33);
			return fract((a.xx + a.yz) * a.zy);
		}
		// a clump of bougainvillea: papery bracts in threes, magenta or white
		vec4 blossom(vec2 uv, float seed) {
			vec2 c = uv - 0.5;
			float edge = length(c) * 2.0;
			if (edge > 0.95) return vec4(0.0);
			vec2 q = uv * 4.0 + seed * 13.0;
			vec2 cell = floor(q), fq = fract(q);
			float best = 0.0; float tone = 0.0; vec2 bl = vec2(0.0);
			for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
				vec2 o = vec2(float(i), float(j));
				vec2 h = hash22(cell + o);
				if (h.x > 0.96) continue;
				vec2 ctr = o + 0.2 + 0.6 * hash22(cell + o + 7.0);
				vec2 d = fq - ctr;
				float rot = h.y * 6.283;
				// three bracts round the centre
				for (int k = 0; k < 3; k++) {
					float a = rot + float(k) * 2.094;
					vec2 bc = vec2(cos(a), sin(a)) * 0.2;
					vec2 dd = d - bc;
					float m = smoothstep(0.26, 0.2, length(dd * vec2(1.0, 1.25)));
					if (m > best) { best = m; tone = h.y; bl = dd; }
				}
			}
			best *= smoothstep(0.95, 0.6, edge + 0.25 * (hash22(cell).x - 0.5));
			return vec4(bl, tone, best);
		}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			if (v_flower > 0.5) {
				vec4 b = blossom(v_uv, v_shade);
				if (b.w < 0.5) discard;
				bool white = v_shade > 0.9 || b.z > 0.93;
				vec3 pink = mix(vec3(0.62, 0.02, 0.24), vec3(0.78, 0.08, 0.36), b.z);
				vec3 base = white ? vec3(0.84, 0.80, 0.80) : pink;
				// the bract's veins and its paler heart
				base *= 0.8 + 0.3 * smoothstep(0.25, 0.0, length(b.xy));
				vec3 spec; float sv;
				vec3 light = studioLight(v_pos, N, V, 0.3, spec, sv);
				float through = max(dot(-N, STUDIO_SUN), 0.0) * sv;
				vec3 col = base * light + base * vec3(1.0, 0.75, 0.8) * through * 2.6 * (1.0 - night) + spec * 0.15;
				col = studioAir(col, v_pos, v_eye);
				gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
				return;
			}
			vec4 t = texture2D(tex, v_uv);
			if (t.a < 0.5) discard;
			vec3 base = t.rgb * t.rgb * vec3(0.8, 0.95, 0.75) * v_shade;
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, 0.4, spec, sv);
			// light through the leaf
			float through = max(dot(-N, STUDIO_SUN), 0.0) * sv;
			vec3 col = base * light + base * vec3(0.9, 1.0, 0.5) * through * 2.2 * (1.0 - night) + spec * 0.3;
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,
		attributes: { position: lv.pos, normal: lv.nrm, uv: lv.uv, shade: lv.shade, flower: lv.flower },
		elements: new Uint32Array(lv.idx),
		uniforms: { tex: leafTex.tex },
		cull: { enable: false }
	});


	// the falling petals: one little card each, placed by the shader
	const fl = (() => {
		const g = { corner: [], start: [], par: [], misc: [], idx: [] };
		FALL.forEach((pt, i) => {
			for (const c of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
				g.corner.push(c[0], c[1]);
				g.start.push(pt.start[0] + O[0], pt.start[1], pt.start[2] + O[2]);
				g.par.push(pt.period, pt.offset, pt.drift[0], pt.drift[1]);
				g.misc.push(pt.speed, pt.seed, pt.white);
			}
			g.idx.push(i * 4, i * 4 + 1, i * 4 + 2, i * 4, i * 4 + 2, i * 4 + 3);
		});
		return g;
	})();
	const drawFalling = regl({
		vert: V(`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		attribute vec3 start;
		attribute vec4 par;
		attribute vec3 misc;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_white, v_fade;
		${WAVES}
		mat3 rotAxis(vec3 a, float t) {
			float c = cos(t), s = sin(t), ic = 1.0 - c;
			return mat3(c + a.x * a.x * ic, a.y * a.x * ic + a.z * s, a.z * a.x * ic - a.y * s,
			            a.x * a.y * ic - a.z * s, c + a.y * a.y * ic, a.z * a.y * ic + a.x * s,
			            a.x * a.z * ic + a.y * s, a.y * a.z * ic - a.x * s, c + a.z * a.z * ic);
		}
		void main() {
			float P = par.x, speed = misc.x, seed = misc.y;
			float tt = stime + par.y;
			float cyc = floor(tt / P);
			float ph = tt - cyc * P;
			float m = 0.6 + 0.4 * sin(cyc * 1.7 + seed * 5.0);
			vec2 land = start.xz + par.zw * m;
			vec2 lq = land - vec2(${f(O[0])}, ${f(O[2])});
			bool inPool = lq.x > ${f(PIN[0])} && lq.x < ${f(PIN[2])} && lq.y > ${f(PIN[1])} && lq.y < ${f(PIN[3])};
			float rest = inPool ? 0.017 : 0.006;
			float Tf = (start.y - rest) / speed;
			float s = clamp(ph / Tf, 0.0, 1.0);
			float size = 0.03 + 0.012 * seed;
			vec3 local = vec3(corner.x, 0.0, corner.y) * size;
			vec3 n = vec3(0.0, 1.0, 0.0);
			vec3 pos;
			if (ph < Tf) {
				// falling: a lazy sway from side to side, tumbling as it goes
				vec2 sway = vec2(sin(tt * 1.3 + seed * 7.0), cos(tt * 1.05 + seed * 3.0)) * 0.35 * sin(s * 3.14159);
				pos = vec3(start.x + (land.x - start.x) * s + sway.x, start.y - (start.y - rest) * s, start.z + (land.y - start.z) * s + sway.y);
				vec3 ax = normalize(vec3(sin(seed * 11.0), 0.6, cos(seed * 7.0)));
				mat3 R = rotAxis(ax, tt * (2.0 + seed * 2.5));
				// it flutters flatter as it slows near the ground
				local = R * local; n = R * n;
			} else {
				pos = vec3(land.x, rest, land.y);
				float a = seed * 6.283;
				mat3 Y = rotAxis(vec3(0.0, 1.0, 0.0), a);
				local = Y * local;
				if (inPool) {
					// floating: carried slowly, riding the swell and the rings
					float age = ph - Tf;
					pos.xz += vec2(sin(age * 0.12 + seed * 9.0), cos(age * 0.1 + seed * 5.0)) * 0.06 * min(age * 0.2, 1.0);
					float h0 = poolHeight(pos.xz);
					vec2 grad = vec2(poolHeight(pos.xz + vec2(0.05, 0.0)) - h0, poolHeight(pos.xz + vec2(0.0, 0.05)) - h0) / 0.05;
					pos.y += h0 * 1.4;
					local.y += dot(local.xz, grad) * 1.4;
					n = normalize(vec3(-grad.x, 1.0, -grad.y));
				}
			}
			// grow out of the flower at the start, fade away at the end
			v_fade = smoothstep(0.0, 1.2, ph) * (1.0 - smoothstep(P - 3.0, P - 0.2, ph));
			vec3 q = pos + local * (0.4 + 0.6 * v_fade);
			v_pos = q; v_nrm = n; v_uv = corner * 0.5 + 0.5; v_white = misc.z;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = q; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`),
		frag: `
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_white, v_fade;
		${LIGHT}
		void main() {
			vec2 u = v_uv * 2.0 - 1.0;
			float heart = length(vec2(u.x * 1.1, u.y + 0.15 * abs(u.x) * 2.0 - 0.1));
			if (heart > 0.85 + 0.1 * sin(atan(u.y, u.x) * 3.0)) discard;
			if (v_fade < 0.02) discard;
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			vec3 base = mix(vec3(0.62, 0.03, 0.22), vec3(0.86, 0.80, 0.80), v_white);
			base *= 0.85 + 0.25 * smoothstep(0.9, 0.0, heart);
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, 0.3, spec, sv);
			float through = abs(dot(N, STUDIO_SUN)) * sv;
			vec3 col = base * light + base * vec3(1.0, 0.75, 0.8) * through * 1.6 * (1.0 - night);
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,
		attributes: { corner: fl.corner, start: fl.start, par: fl.par, misc: fl.misc },
		elements: new Uint32Array(fl.idx),
		uniforms: POOL_UNIFORMS,
		cull: { enable: false }
	});

	// ---- under the water: the pond's bed and walls, and the koi --------
	// Both are drawn after the water, at the water's own depth, so the
	// pads and the curb still hide them; each works out for itself how much
	// of it shows through the surface (little at grazing angles, where the
	// water mirrors the room). The sun reaches them through the moving
	// surface, gathered into wandering threads of light, and the lily pads
	// and the koi throw soft shadows on the bed.
	const koi = { sim: koiSim(), ready: false };
	ACTIVE = koi.sim;
	if (typeof location !== 'undefined' && /tourdebug/.test(location.search)) window.__koi = koi.sim;
	const koiUniforms = Object.assign({}, POOL_UNIFORMS);
	KOI.forEach((k, n) => {
		koiUniforms['koiA[' + n + ']'] = () => { const F = koi.sim.fish[n]; return [F.x + O[0], F.y, F.z + O[2], F.th]; };
		koiUniforms['koiB[' + n + ']'] = () => { const F = koi.sim.fish[n]; return [F.kappa, F.ph, F.amp, F.pitch]; };
	});
	// the shadows of the pads on the bed, painted once into a small picture
	// of the pool (the pads drift only a hand's width)
	const padShadow = (() => {
		const cw = 96, chh = Math.round(96 * (POOL.z1 - POOL.z0) / (POOL.x1 - POOL.x0));
		const data = new Uint8Array(cw * chh * 4);
		const off = [-SUN[0] / SUN[1] * -BED_Y, -SUN[2] / SUN[1] * -BED_Y];
		const sx = cw / (POOL.x1 - POOL.x0), sz = chh / (POOL.z1 - POOL.z0);
		for (let j = 0; j < chh; j++) for (let i = 0; i < cw; i++) {
			const x = POOL.x0 + (i + 0.5) / sx, z = POOL.z0 + (j + 0.5) / sz;
			let s = 0;
			for (const p of POND_PADS) {
				const d = Math.hypot(x - (p[0] + off[0]), z - (p[1] + off[1]));
				s = Math.max(s, 1 - Math.min(1, Math.max(0, (d - p[2] * 0.82) / (p[2] * 0.35))));
			}
			data[(j * cw + i) * 4] = Math.round(s * 255);
			data[(j * cw + i) * 4 + 3] = 255;
		}
		return regl.texture({ width: cw, height: chh, data, min: 'linear', mag: 'linear' });
	})();
	const UNDER_V = `
		uniform vec4 koiA[${KOI.length}], koiB[${KOI.length}];
		// where we see a point under the water: at the surface's own depth
		vec4 underPos(vec3 q, mat4 proj, mat4 view, float order) {
			vec3 tr = view[3].xyz;
			vec3 eye = -vec3(dot(view[0].xyz, tr), dot(view[1].xyz, tr), dot(view[2].xyz, tr));
			vec4 cq = proj * view * vec4(q, 1.0);
			vec3 sp = eye + (q - eye) * (eye.y / max(eye.y - q.y, 1e-4));
			vec4 cs = proj * view * vec4(sp, 1.0);
			float zs = cs.z / cs.w;
			// a whisker in front of the water, keeping near-before-far among
			// themselves
			float z = zs - 3e-5 + clamp((cq.z / cq.w - zs) * 1e-3, 0.0, 2e-5) * order;
			return vec4(cq.xy, z * cq.w, cq.w);
		}
		vec3 eyeOf(mat4 view) {
			vec3 tr = view[3].xyz;
			return -vec3(dot(view[0].xyz, tr), dot(view[1].xyz, tr), dot(view[2].xyz, tr));
		}
	`;
	const UNDER_F = `
		uniform vec4 koiA[${KOI.length}], koiB[${KOI.length}];
		uniform sampler2D padShadow;
		const vec3 W_SUN = vec3(${f(SUN[0])}, ${f(SUN[1])}, ${f(SUN[2])});
		// light focused by the moving surface onto what's beneath it
		float caustic(vec2 p, float t) {
			vec2 q = p * 7.0;
			float c = 0.0;
			for (int i = 0; i < 3; i++) {
				q += vec2(sin(q.y * 0.9 + t * 0.9), cos(q.x * 0.8 - t * 0.7)) * 0.55;
				c += abs(sin(q.x) + sin(q.y));
			}
			return pow(max(1.0 - c / 3.6, 0.0), 2.5) * 4.0;
		}
		// how much a pad shades a point at height y below it
		float padShade(vec3 pw) {
			vec2 lp = pw.xz - vec2(${f(O[0])}, ${f(O[2])});
			// (the picture is for the bed; nearer the surface the shadow sits nearer the pad)
			vec2 back = W_SUN.xz / W_SUN.y * (pw.y - ${f(BED_Y)});
			vec2 uv = (lp - back - vec2(${f(POOL.x0)}, ${f(POOL.z0)})) / vec2(${f(POOL.x1 - POOL.x0)}, ${f(POOL.z1 - POOL.z0)});
			return texture2D(padShadow, uv).r;
		}
		// the sun's share of the light under the water at pw
		vec3 underSun(vec3 pw, vec3 N, float sv, out vec3 sunPart) {
			vec3 sunC = mix(vec3(1.0, 0.88, 0.70) * 3.9, vec3(0.50, 0.64, 1.0) * 1.35, night);
			sunPart = sunC * sv * max(dot(N, W_SUN), 0.0);
			float ca = caustic(pw.xz - W_SUN.xz / W_SUN.y * pw.y, stime);
			return sunPart * (1.0 - 0.85 * padShade(pw)) * (0.35 + 1.25 * ca);
		}
		// the water's surface over a point under it, as the eye sees it: the
		// room's reflection (bent by the waves), the sun's glint, and the rest
		// let through from below
		uniform sampler2D reflTex;
		uniform vec2 reflSize;
		uniform float reflOn;
		uniform mat4 view;
		vec3 throughSurface(vec3 under, vec3 pw, vec3 eye) {
			vec3 S = eye + (pw - eye) * (eye.y / max(eye.y - pw.y, 1e-4));
			float e = ${f(SIM_DX)};
			vec2 grad = vec2(poolHeight(S.xz + vec2(e, 0.0)) - poolHeight(S.xz - vec2(e, 0.0)), poolHeight(S.xz + vec2(0.0, e)) - poolHeight(S.xz - vec2(0.0, e))) / (2.0 * e);
			vec3 Nw = normalize(vec3(-grad.x, 1.0, -grad.y));
			vec3 V = normalize(eye - S);
			float cosV = clamp(dot(Nw, V), 0.0, 1.0);
			float R = mix(0.06, 1.0, pow(1.0 - cosV, 5.0));
			vec3 Rw = reflect(-V, Nw);
			vec3 rc;
			if (reflOn > 0.5) {
				vec3 dN = Nw - vec3(0.0, 1.0, 0.0);
				vec3 rgt = vec3(view[0].x, view[1].x, view[2].x), upv = vec3(view[0].y, view[1].y, view[2].y);
				float dist = length(eye - S);
				vec2 off = vec2(dot(dN, rgt), dot(dN, upv)) * 0.3 / (1.0 + dist * 0.2);
				rc = texture2D(reflTex, clamp(gl_FragCoord.xy / reflSize + off, vec2(0.001), vec2(0.999))).rgb;
				rc *= rc;
			} else {
				rc = studioSky(Rw) * 0.35;
			}
			float glint = pow(max(dot(Rw, STUDIO_SUN), 0.0), 900.0) * studioSun(S + vec3(0.0, 0.02, 0.0));
			vec3 glintC = mix(vec3(1.0, 0.92, 0.78) * 9.0, vec3(0.75, 0.85, 1.0) * 3.0, night);
			// a passing ring bends the light from below into bright and dark bands
			float ring = clamp(dot(grad, normalize(V.xz + vec2(1e-4))) * 12.0, -1.0, 1.0);
			float stir = clamp(length(grad) * 8.0, 0.0, 1.0);
			under *= 1.0 + 0.55 * ring * stir;
			return under * (1.0 - R) + rc * R + glintC * glint;
		}
		// what the water does to light that comes back up through it
		float showThrough(vec3 V) {
			float cosV = clamp(V.y, 0.0, 1.0);
			float Fr = 0.02 + 0.98 * pow(1.0 - cosV, 5.0);
			return 1.0 - mix(0.05, 0.93, Fr);
		}
	`;

	// --- the bed and the walls under the water
	const bed = (() => {
		const pos = [], nrm = [], kd = [], idx = [];
		const v = (x, y, z, n, k) => { pos.push(x + O[0], y, z + O[2]); nrm.push(...n); kd.push(k); return pos.length / 3 - 1; };
		const grid = (a, du, dv, nu, nv, n, k) => {
			const b = pos.length / 3;
			for (let i = 0; i <= nu; i++) for (let j = 0; j <= nv; j++) v(a[0] + du[0] * i / nu + dv[0] * j / nv, a[1] + du[1] * i / nu + dv[1] * j / nv, a[2] + du[2] * i / nu + dv[2] * j / nv, n, k);
			for (let i = 0; i < nu; i++) for (let j = 0; j < nv; j++) { const p = b + i * (nv + 1) + j; idx.push(p, p + 1, p + nv + 2, p, p + nv + 2, p + nv + 1); }
		};
		const { x0, x1, z0, z1 } = POOL, y = BED_Y;
		grid([x0, y, z0], [x1 - x0, 0, 0], [0, 0, z1 - z0], 8, 22, [0, 1, 0], 0);
		grid([x0, 0, z0], [0, 0, z1 - z0], [0, y, 0], 22, 2, [1, 0, 0], 1);
		grid([x1, 0, z0], [0, 0, z1 - z0], [0, y, 0], 22, 2, [-1, 0, 0], 1);
		grid([x0, 0, z0], [x1 - x0, 0, 0], [0, y, 0], 8, 2, [0, 0, 1], 1);
		grid([x0, 0, z1], [x1 - x0, 0, 0], [0, y, 0], 8, 2, [0, 0, -1], 1);
		return { pos, nrm, kd, idx };
	})();
	const gravelTex = loadTexture(regl, 'res/pond/gravel.jpg', { wrap: 'repeat' });
	const bedUniforms = Object.assign({ padShadow, gravel: () => gravelTex.tex, reflTex: () => reflTex, reflSize: () => reflSize, reflOn: () => reflOn }, koiUniforms);
	const drawBed = regl({
		vert: V(`
		precision highp float;
		uniform mat4 proj, view;
		attribute vec3 position, normal;
		attribute float kd;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kd;
		${WAVES}
		${UNDER_V}
		void main() {
			vec3 q = position;
			float h0 = poolHeight(q.xz);
			vec2 grad = vec2(poolHeight(q.xz + vec2(0.03, 0.0)) - h0, poolHeight(q.xz + vec2(0.0, 0.03)) - h0) / 0.03;
			q.xz -= grad * (-q.y) * 1.2;
			v_pos = q; v_nrm = normal; v_kd = kd; v_eye = eyeOf(view);
			gl_Position = underPos(q, proj, view, 0.0);
		}`),
		frag: `
		precision highp float;
		uniform float night, time;
		uniform sampler2D gravel;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kd;
		${WAVES}
		${LIGHT}
		${UNDER_F}
		float klen(int i) {
			${KOI.map((k, i) => `if (i == ${i}) return ${f(k.len)};`).join(' ')}
			return 0.45;
		}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			vec3 base;
			if (v_kd < 0.5) {
				base = texture2D(gravel, v_pos.xz * 1.9).rgb;
				base = base * base * vec3(1.25, 1.18, 1.0);
			} else {
				// the marble going down into the water, greening towards the bed
				vec2 wp = abs(N.x) > 0.5 ? v_pos.zy : v_pos.xy;
				base = vec3(0.70, 0.68, 0.62) * (0.92 + 0.12 * fract(sin(dot(floor(wp * 40.0), vec2(12.9, 78.2))) * 43758.5));
				base = mix(base, vec3(0.10, 0.13, 0.07), smoothstep(-0.05, ${f(BED_Y)}, v_pos.y) * 0.75);
			}
			vec3 spec; float sv;
			vec3 light = studioLight(vec3(v_pos.x - W_SUN.x / W_SUN.y * v_pos.y, 0.02, v_pos.z - W_SUN.z / W_SUN.y * v_pos.y), N, V, 0.1, spec, sv);
			vec3 sunPart;
			vec3 lit = underSun(v_pos, N, sv, sunPart);
			// the koi's shadows, softer the higher they swim above the bed
			float sh = 0.0;
			for (int i = 0; i < ${KOI.length}; i++) {
				vec4 A = koiA[i];
				float len = klen(i);
				vec2 F = vec2(cos(A.w), sin(A.w));
				vec2 c = A.xz - F * len * 0.42 - W_SUN.xz / W_SUN.y * (A.y - v_pos.y);
				vec2 d = v_pos.xz - c;
				float h = A.y - v_pos.y;
				float ell = pow(dot(d, F) / (len * 0.46), 2.0) + pow(dot(d, vec2(-F.y, F.x)) / (len * 0.12 + h * 0.08), 2.0);
				sh = max(sh, smoothstep(1.0, 0.25, ell) * (0.75 - h * 0.6));
			}
			lit *= 1.0 - sh;
			vec3 col = base * ((light - sunPart) * 0.9 + lit);
			// down through the water and back up again
			float path = -v_pos.y * (1.0 + 1.0 / max(V.y, 0.25));
			vec3 tr = exp(-path * vec3(0.75, 0.38, 0.48));
			col = col * tr + vec3(0.012, 0.020, 0.015) * (1.0 - tr) * mix(1.0, 0.12, night);
			col = throughSurface(col, v_pos, v_eye);
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,
		attributes: { position: bed.pos, normal: bed.nrm, kd: bed.kd },
		elements: new Uint16Array(bed.idx),
		uniforms: bedUniforms,
		cull: { enable: false },
		depth: { enable: true, mask: false, func: 'less' },
		blend: BLEND
	});

	// --- the koi: the model (res/koi.bin), straightened along its spine,
	// bent each frame along its turn with a swimming wave down its body
	const koiTex = loadTexture(regl, 'res/koi.webp');
	let drawKoiPart = null, koiEls = null;
	fetch('res/koi.bin')
		.then((r) => { if (!r.ok) throw new Error('Could not load res/koi.bin'); return r.arrayBuffer(); })
		.then((buf) => {
			const dv = new DataView(buf);
			const nV = dv.getUint32(4, true), nI = dv.getUint32(8, true), S = dv.getFloat32(12, true);
			let o = 16;
			const lu = new Uint16Array(buf, o, nV); o += nV * 2;
			const ll = new Int16Array(buf, o, nV * 2); o += nV * 4;
			const tu = new Uint16Array(buf, o, nV * 2); o += nV * 4;
			const ix = new Uint16Array(buf, o, nI); o += nI * 2;
			const n8 = new Int8Array(buf, o, nV * 3); o += nV * 3;
			const fp = new Uint8Array(buf, o, nV * 2);
			const n = KOI.length;
			const loc = new Float32Array(nV * 3 * n), nrm = new Float32Array(nV * 3 * n), uv = new Float32Array(nV * 2 * n), fin = new Float32Array(nV * 2 * n), km = new Float32Array(nV * 4 * n);
			KOI.forEach((k, f0) => {
				for (let i = 0; i < nV; i++) {
					const j = f0 * nV + i;
					loc[j * 3] = lu[i] / 65535 * 1.2; loc[j * 3 + 1] = ll[i * 2] / 32767 * S; loc[j * 3 + 2] = ll[i * 2 + 1] / 32767 * S;
					nrm[j * 3] = n8[i * 3] / 127; nrm[j * 3 + 1] = n8[i * 3 + 1] / 127; nrm[j * 3 + 2] = n8[i * 3 + 2] / 127;
					uv[j * 2] = tu[i * 2] / 65535; uv[j * 2 + 1] = tu[i * 2 + 1] / 65535;
					fin[j * 2] = fp[i * 2] / 255; fin[j * 2 + 1] = fp[i * 2 + 1] / 255;
					km[j * 4] = k.len; km[j * 4 + 1] = k.kind; km[j * 4 + 2] = f0; km[j * 4 + 3] = 0;
				}
			});
			// the body and the fins drawn apart: the body solid, the fins after it, see-through
			const body = [], fins = [];
			for (let f0 = 0; f0 < n; f0++) for (let t = 0; t < nI; t += 3) {
				const a = ix[t], b = ix[t + 1], c = ix[t + 2];
				const isFin = Math.max(fp[a * 2], fp[b * 2], fp[c * 2]) > 140;
				(isFin ? fins : body).push(a + f0 * nV, b + f0 * nV, c + f0 * nV);
			}
			koiEls = { body: regl.elements({ data: new Uint32Array(body), type: 'uint32' }), fins: regl.elements({ data: new Uint32Array(fins), type: 'uint32' }) };
			drawKoiPart = regl({
				vert: V(`
				precision highp float;
				uniform mat4 proj, view;
				attribute vec3 loc, nrm;
				attribute vec2 uv, fin;
				attribute vec4 km;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				varying float v_kind, v_fin, v_depth, v_seed, v_u;
				${WAVES}
				${UNDER_V}
				void main() {
					float len = km.x;
					int fi = int(km.z + 0.5);
					vec4 A = koiA[0], B = koiB[0];
					for (int i = 1; i < ${KOI.length}; i++) if (i == fi) { A = koiA[i]; B = koiB[i]; }
					float th = A.w, kap = B.x, ph = B.y, beat = B.z, pitch = B.w;
					vec3 f = vec3(cos(th), 0.0, sin(th));
					vec3 nl = vec3(-sin(th), 0.0, cos(th));
					// the spine bends along the arc of the turn, behind the nose
					float u = loc.x;
					float s = max(u, 0.0) * len;
					float ka = abs(kap) < 1e-3 ? 1e-3 : kap;
					vec3 P = A.xyz - f * (sin(ka * s) / ka) + nl * ((1.0 - cos(ka * s)) / ka);
					P.y = A.y - pitch * s;
					vec3 F = normalize(f * cos(ka * s) - nl * sin(ka * s) + vec3(0.0, pitch, 0.0));
					vec3 Sd = normalize(vec3(-F.z, 0.0, F.x));
					vec3 Up = cross(Sd, F);
					// the swimming wave: small at the head, wide at the tail, bigger
					// when it swims faster or turns
					// (beat: how hard the tail is working, 0.1 gliding .. 1.5 hurrying)
					float amp = (0.004 + 0.085 * u * u) * beat;
					float sway = amp * sin(ph - 6.0 * u);
					float dsway = amp * cos(ph - 6.0 * u) * -6.0;
					vec3 L = loc;
					// the fins trail and ripple a little behind the body
					sway += fin.x * 0.012 * sin(ph * 1.3 - 9.0 * u) * (0.6 + 0.4 * u);
					// the pectoral fins paddle slowly, and fold back when it hurries
					float pect = fin.y;
					float fast = smoothstep(0.8, 1.5, beat);
					// gliding, they spread and scull slowly; stroking, they fold back
					L.z += pect * (0.03 + 0.03 * (1.0 - fast)) * sin(stime * (1.6 + 0.3 * km.z) + sign(L.y) * 0.9 + km.z);
					L.y *= 1.0 - 0.35 * pect * fast;
					L.x += pect * 0.05 * fast;
					vec3 q = P + Sd * (L.y + sway) * len + Up * L.z * len - F * (L.x - u) * len;
					vec3 n = normalize(F * (nrm.x - nrm.y * dsway) + Sd * nrm.y + Up * nrm.z);
					// seen through the moving surface, it wavers a little
					float h0 = poolHeight(q.xz);
					vec2 grad = vec2(poolHeight(q.xz + vec2(0.02, 0.0)) - h0, poolHeight(q.xz + vec2(0.0, 0.02)) - h0) / 0.02;
					q.xz -= grad * (-q.y) * 1.3;
					q.y = min(q.y, -0.006);
					v_pos = q; v_nrm = n; v_uv = uv; v_kind = km.y; v_seed = km.z; v_fin = fin.x; v_depth = max(-q.y, 0.0); v_u = u;
					v_eye = eyeOf(view);
					gl_Position = underPos(q, proj, view, 1.0);
				}`),
				frag: `
				precision highp float;
				uniform float night, time;
				uniform sampler2D koiTex;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				varying float v_kind, v_fin, v_depth, v_seed, v_u;
				${WAVES}
				${LIGHT}
				${UNDER_F}
				void main() {
					vec3 V = normalize(v_eye - v_pos);
					vec3 N = normalize(v_nrm);
					if (dot(N, V) < 0.0) N = -N;
					vec3 t = texture2D(koiTex, v_uv).rgb;
					vec3 lin = t * t;
					// the model is a kohaku; the others are recoloured from it,
					// keeping its scales and the fine rays of its fins
					float lum = dot(lin, vec3(0.3, 0.59, 0.11));
					float red = clamp((t.r - t.g) * 2.2, 0.0, 1.0);
					float jit = fract(sin(v_seed * 91.7) * 4375.85);
					vec3 base = lin;
					float gloss = 0.55, metal = 0.35;
					if (v_kind < 0.5) {
						// yamabuki: metallic gold all over
						base = mix(vec3(1.0, 0.46, 0.05), vec3(1.0, 0.56, 0.10), jit) * (0.40 + 0.72 * lum) * mix(1.0, 0.85, red);
						gloss = 0.85; metal = 1.0;
					} else if (v_kind > 1.5) {
						// orange all over, the old patches a deeper red
						base = mix(vec3(0.98, 0.40, 0.05) * (0.45 + 0.7 * lum), vec3(0.82, 0.12, 0.03) * (0.5 + 0.6 * lum), red);
						gloss = 0.7; metal = 0.6;
					} else {
						base = mix(lin, lin * vec3(1.0, 0.92 + 0.1 * jit, 0.9), 0.5);
					}
					// the dark eyes stay dark
					base = mix(base, lin, smoothstep(0.08, 0.02, lum));
					float a = mix(1.0, 0.68, v_fin);
					vec3 spec; float sv;
					vec3 light = studioLight(vec3(v_pos.x - W_SUN.x / W_SUN.y * v_pos.y, 0.02, v_pos.z - W_SUN.z / W_SUN.y * v_pos.y), N, V, gloss, spec, sv);
					vec3 sunPart;
					vec3 lit = underSun(v_pos, N, sv, sunPart);
					float att = exp(-v_depth * 0.8);
					// sunlight through the thin fins
					float through = v_fin * max(dot(-N, W_SUN), 0.0) * sv;
					vec3 col = base * (((light - sunPart) + lit) * att + through * 0.8 * att * mix(vec3(1.0, 0.85, 0.6), vec3(0.4, 0.5, 0.8), night));
					// rounded: lit from above through the water, the belly in shade,
					// a sheen of the bright surface along the flanks
					col *= mix(0.42, 1.2, smoothstep(-0.7, 0.85, N.y));
					float rim = pow(1.0 - max(dot(N, V), 0.0), 3.0) * smoothstep(-0.2, 0.6, N.y);
					col += mix(base, vec3(1.0), 0.4) * rim * 0.35 * mix(1.0, 0.15, night) * att;
					col += spec * (0.15 + 0.85 * metal) * att * (1.0 - 0.85 * padShade(v_pos)) * (1.0 - v_fin * 0.7) * mix(vec3(1.0), base * 2.0, metal);
					// the water takes the colour away with depth
					vec3 tr = exp(-v_depth * vec3(1.9, 1.15, 1.3));
					col = col * tr + vec3(0.010, 0.016, 0.012) * (1.0 - tr) * mix(1.0, 0.1, night);
					col = throughSurface(col, v_pos, v_eye);
					col = studioAir(col, v_pos, v_eye);
					a *= mix(1.0, exp(-v_depth * 0.5), 0.5);
					gl_FragColor = vec4(sqrt(max(col, 0.0)), a);
				}`,
				attributes: { loc, nrm, uv, fin, km },
				elements: regl.prop('els'),
				uniforms: Object.assign({ koiTex: () => koiTex.tex, padShadow, reflTex: () => reflTex, reflSize: () => reflSize, reflOn: () => reflOn }, koiUniforms),
				cull: { enable: false },
				colorMask: regl.prop('color'),
				depth: { enable: true, mask: regl.prop('write'), func: regl.prop('func') },
				blend: BLEND
			});
			koi.ready = true;
		})
		.catch((e) => console.error(e));
	const drawKoi = () => {
		if (!drawKoiPart) return;
		// the bodies' nearest skin first (depth only), then their colour, then the fins
		drawKoiPart({ els: koiEls.body, color: [false, false, false, false], write: true, func: 'less' });
		drawKoiPart({ els: koiEls.body, color: [true, true, true, true], write: false, func: 'lequal' });
		drawKoiPart({ els: koiEls.fins, color: [true, true, true, true], write: false, func: 'less' });
	};

	// the crumbs, floating where they were cast, riding the swell
	const crumbGeo = (() => {
		const g = { cp: [], ci: [], idx: [] };
		for (let c = 0; c < CRUMB_N; c++) {
			const base = g.cp.length / 3;
			const R = 5, S = 7;
			for (let i = 0; i <= R; i++) for (let j = 0; j < S; j++) {
				const a = i / R * Math.PI, b = j / S * Math.PI * 2;
				const wob = 1 + 0.35 * Math.sin(b * 3 + c * 1.7) * Math.sin(a * 2 + c);
				g.cp.push(Math.sin(a) * Math.cos(b) * wob, Math.cos(a) * 0.6, Math.sin(a) * Math.sin(b) * wob * (0.8 + 0.4 * ((c * 0.37) % 1)));
				g.ci.push(c);
			}
			for (let i = 0; i < R; i++) for (let j = 0; j < S; j++) {
				const a = base + i * S + j, b = base + i * S + (j + 1) % S, d = base + (i + 1) * S + j, e = base + (i + 1) * S + (j + 1) % S;
				g.idx.push(a, b, e, a, e, d);
			}
		}
		return g;
	})();
	const crumbUniforms = Object.assign({}, POOL_UNIFORMS);
	for (let i = 0; i < CRUMB_N; i++) crumbUniforms['crumbs[' + i + ']'] = () => {
		const c = koi.sim.crumbs[i], t = koi.sim.t;
		const k = c.alive ? Math.min(1, Math.max(0, (t - c.born) / 0.25)) : 0;
		return [c.x + O[0], c.z + O[2], k, c.seed];
	};
	const drawCrumbs = regl({
		vert: V(`
		precision highp float;
		uniform mat4 proj, view;
		uniform vec4 crumbs[${CRUMB_N}];
		attribute vec3 cp;
		attribute float ci;
		varying vec3 v_pos, v_nrm, v_eye;
		${WAVES}
		void main() {
			int k = int(ci + 0.5);
			vec4 c = crumbs[0];
			for (int i = 1; i < ${CRUMB_N}; i++) if (i == k) c = crumbs[i];
			float sz = 0.016 * (0.8 + 0.5 * fract(c.w * 3.7)) * c.z;
			float h0 = poolHeight(c.xy);
			vec3 q = vec3(c.x, 0.003 + h0 * 1.4, c.y) + cp * sz;
			v_pos = q; v_nrm = normalize(cp);
			vec3 tr = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, tr), dot(view[1].xyz, tr), dot(view[2].xyz, tr));
			gl_Position = proj * view * vec4(q, 1.0);
			if (c.z < 0.01) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
		}`),
		frag: `
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		${LIGHT}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, 0.2, spec, sv);
			vec3 base = vec3(0.78, 0.60, 0.36) * (0.85 + 0.3 * fract(sin(dot(floor(v_pos.xz * 900.0), vec2(12.9, 78.2))) * 43758.5));
			// wet underneath
			base *= mix(0.55, 1.0, smoothstep(-0.4, 0.4, N.y));
			vec3 col = studioAir(base * light + spec * 0.1, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,
		attributes: { cp: crumbGeo.cp, ci: crumbGeo.ci },
		elements: new Uint32Array(crumbGeo.idx),
		uniforms: crumbUniforms,
		cull: { enable: false }
	});

	// the glass: a faint sheen, a little dust, the sky's reflection
	const gl = buildGlass();
	const drawGlass = regl({
		vert: V(VERT),
		frag: `
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		${LIGHT}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float F = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
			vec3 p = v_pos - vec3(${f(O[0])}, ${f(O[1])}, ${f(O[2])});
			float dust = fbm3(p * vec3(1.5, 3.0, 1.5)) * (v_kind > 0.5 ? 1.0 : 0.6);
			// streaks where old rain has run down the roof
			float streak = v_kind > 0.5 ? smoothstep(0.55, 0.9, vnoise3(vec3(p.z * 9.0, p.x * 0.6, 0.0))) * 0.5 : 0.0;
			vec3 c = mix(vec3(0.85, 0.80, 0.72), vec3(0.12, 0.13, 0.17), night) * (dust * 0.5 + streak);
			float a = clamp(0.05 + dust * 0.16 + streak * 0.2 + F * 0.4, 0.0, 0.6);
			vec3 col = mix(c, studioSky(reflect(-V, N)), F / max(a, 0.01) * 0.4);
			// the roof's leaded pattern: dark cames, frosted rondels lit
			// from behind by the sky
			if (v_kind > 0.5) {
				float ux = p.x < ${f(W / 2)} ? p.x : ${f(W)} - p.x;
				vec2 pq = vec2(ux - ${f(ROOF.purlin)} * floor(ux / ${f(ROOF.purlin)}) - ${f(ROOF.purlin / 2)}, p.z - ${f(ROOF.rafter)} * floor(p.z / ${f(ROOF.rafter)}) - ${f(ROOF.rafter / 2)});
				float pat = studioRoofPattern(pq, 0.004);
				float lead = 1.0 - smoothstep(0.2, 0.6, pat);
				float frost = clamp(1.0 - pat, 0.0, 1.0) * (1.0 - lead);
				vec3 frostC = mix(vec3(0.95, 0.93, 0.88), vec3(0.10, 0.13, 0.20), night);
				col = mix(col, frostC, frost * 0.9);
				a = max(a, frost * 0.45);
				col = mix(col, vec3(0.03, 0.03, 0.035), lead);
				a = mix(a, 1.0, lead);
			}
			gl_FragColor = vec4(sqrt(max(col, 0.0)), a);
		}`,
		attributes: { position: gl.pos, normal: gl.nrm, kind: gl.kind, uv: gl.uv, anchor: gl.anchor },
		uniforms: POOL_UNIFORMS,
		elements: new Uint32Array(gl.idx),
		cull: { enable: false },
		depth: { mask: false },
		blend: BLEND
	});

	// the world outside: the sky, a far line of trees in the haze, and the
	// sunlit ground below them (seen through the windows and the roof)
	const sky = (() => {
		const g = { pos: [], idx: [] };
		const R = 300, NS = 24, NR = 12;
		for (let j = 0; j <= NR; j++) {
			const ph = -0.25 * PI + (j / NR) * 0.75 * PI;
			for (let i = 0; i <= NS; i++) {
				const th = (i / NS) * 2 * PI;
				g.pos.push(O[0] + W / 2 + R * Math.cos(ph) * Math.cos(th), R * Math.sin(ph), O[2] + L / 2 + R * Math.cos(ph) * Math.sin(th));
			}
		}
		for (let j = 0; j < NR; j++) for (let i = 0; i < NS; i++) {
			const a = j * (NS + 1) + i, b = a + 1, c = a + NS + 2, d = a + NS + 1;
			g.idx.push(a, b, c, a, c, d);
		}
		return g;
	})();
	const drawSky = regl({
		vert: V(`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position;
		varying vec3 v_pos, v_eye;
		void main() {
			v_pos = position;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = position; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`),
		frag: `
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_eye;
		${LIGHT}
		void main() {
			vec3 d = normalize(v_pos - v_eye);
			vec3 col = studioSky(d) * 1.15;
			// a far line of trees in the haze, and the meadow before them
			float az = atan(d.z, d.x);
			float tl = 0.045 + 0.05 * fbm3(vec3(az * 7.0, 0.0, 1.0)) + 0.025 * vnoise3(vec3(az * 40.0, 0.0, 2.0));
			float ground = smoothstep(0.004, -0.004, d.y);
			vec3 trees = mix(vec3(0.42, 0.46, 0.30), vec3(0.62, 0.60, 0.48), 0.5 + 0.5 * vnoise3(vec3(az * 30.0, d.y * 60.0, 0.0)));
			trees = mix(trees, studioSky(vec3(d.x, 0.02, d.z)), 0.45);
			trees = mix(trees, toNightC(trees), night);
			float inTrees = smoothstep(tl + 0.004, tl - 0.004, d.y) * (1.0 - ground);
			col = mix(col, trees * 1.15, inTrees);
			vec3 meadow = mix(vec3(0.55, 0.55, 0.32), vec3(0.75, 0.70, 0.50), vnoise3(vec3(d.xz * 80.0, 0.0)));
			meadow = mix(meadow, toNightC(meadow), night);
			col = mix(col, meadow, ground);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`.replace('${LIGHT}', '') .replace('void main() {', `vec3 toNightC(vec3 c) { float l = dot(c, vec3(0.3, 0.59, 0.11)); return vec3(l) * vec3(0.06, 0.08, 0.14); }\n\t\tvoid main() {`),
		attributes: { position: sky.pos },
		elements: new Uint32Array(sky.idx),
		cull: { enable: false }
	});

	function draw(opts) {
		if (!(opts && opts.reflected)) { keepReflection(); tick(); }
		drawSky();
		drawRoom();
		if (!(opts && opts.reflected)) { drawBed(); drawKoi(); drawCrumbs(); }
		if (drawVenus) drawVenus();
		drawLeaves();
		drawFalling();
		if (!(opts && opts.reflected)) drawGlass();
	}
	return draw;
};

// feeding the koi (from the page): which koi pond is live, where a ray
// from the eye meets the water, and a handful of crumbs cast there
let ACTIVE = null;
function poolHit(eye, dir) {
	if (dir[1] >= -1e-4) return null;
	const k = -eye[1] / dir[1];
	const x = eye[0] + dir[0] * k - O[0], z = eye[2] + dir[2] * k - O[2];
	if (x < POOL.x0 || x > POOL.x1 || z < POOL.z0 || z > POOL.z1) return null;
	return [x + O[0], z + O[2]];
}
function feedAt(wx, wz) { if (ACTIVE) ACTIVE.drop(wx - O[0], wz - O[2]); }
function feeding() { return !!(ACTIVE && ACTIVE.feed.on); }

// A preview of the room (?studio in the address): the camera drifts
// slowly through a few shots, with a dip to black between them.
const PREVIEW = [
	// in through the red door: the pool runs away to the niche and the nymph
	{ from: [8.0, 1.65, 21.1], to: [8.0, 1.7, 19.1], at: [8.0, 2.4, 1.0], fov: 58 },
	{ from: [3.6, 1.65, 20.5], to: [4.6, 1.75, 18.7], at: [8.8, 2.7, 1.5], fov: 58 },
	{ from: [8.0, 1.45, 11.2], to: [8.0, 1.55, 8.4], at: [8.0, 2.5, 0.5], fov: 46 },
	// over the pond, looking down into it (the koi can be fed here)
	{ from: [8.9, 3.9, 11.4], to: [7.4, 3.7, 10.2], at: [8.0, -0.2, 7.2], fov: 50, pond: true },
	{ from: [5.1, 1.5, 5.8], to: [5.7, 1.7, 4.6], at: [8.0, 2.6, 0.8], fov: 44 },
	// from beside the niche, back down the pool to the red door
	{ from: [10.6, 1.6, 2.4], to: [9.7, 1.7, 3.6], at: [8.0, 2.4, 22.0], fov: 60 },
	{ from: [2.6, 1.5, 19.0], to: [3.6, 1.6, 17.4], at: [8.0, 6.8, 8.0], fov: 62 }
];
const SHOT_LEN = 11;
function previewCam(time) {
	const n = PREVIEW.length;
	const k = Math.floor(time / SHOT_LEN) % n;
	const u = (time % SHOT_LEN) / SHOT_LEN;
	const e = u * u * (3 - 2 * u);
	const S = PREVIEW[k];
	const eye = S.from.map((a, i) => a + (S.to[i] - a) * e);
	const fade = Math.max(0, 1 - Math.min(u * SHOT_LEN, (1 - u) * SHOT_LEN) / 0.7);
	return { eye: toW(eye), target: toW(S.at), fov: S.fov, roll: 0, fade, pond: !!S.pond && fade < 0.05, shot: Math.floor(time / SHOT_LEN) };
}

// for the light shafts (post.js) and the culling (cull.js)
module.exports.previewCam = previewCam;
module.exports.poolHit = poolHit;
module.exports.feedAt = feedAt;
module.exports.feeding = feeding;
module.exports.sunGLSL = sunGLSL;
module.exports.O = O;
module.exports.SIZE = { W, L, H, RIDGE };
module.exports.BOX = [O[0] - 0.8, 0, O[2] - 0.8, O[0] + W + 0.8, RIDGE + 0.5, O[2] + L + 0.8];
module.exports.AIR_BOX = [O[0], 0, O[2], O[0] + W, RIDGE, O[2] + L];

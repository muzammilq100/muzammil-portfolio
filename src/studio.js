'use strict';

/*
 * THE STUDIO
 * ----------
 * The painter's studio: a big, tall room of old warm plaster under a
 * glass roof on black steel trusses, with tall arched steel windows down
 * both long walls. Low afternoon sun pours in through the left-hand
 * windows and the roof, and every bar of the glazing shows in the light
 * on the floor, the walls and the dusty air.
 *
 * In the middle, the highlight: a long reflecting pool in pale
 * travertine, dark still water full of lily pads and pink water lilies,
 * and at its far end, standing in the water on a plinth, a marble
 * Venus (the same scan as the hall's). Behind her, on the end wall, a
 * classical aedicule half lost under hanging ivy.
 *
 * Down the right-hand side, his work in progress: three canvases on
 * easels, tilted back like boards, catching the light. Plants in black
 * glazed pots stand at the corners of the pool; a work table with jars
 * of brushes stands under the left windows; pendant lamps hang from the
 * trusses (lit at night).
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

// the pool
const POOL = { x0: W / 2 - 1.9, x1: W / 2 + 1.9, z0: 5.6, z1: 16.6, curb: 0.5, top: 0.36 };
// the statue in it, on a plinth near the far end
const VENUS = { x: W / 2, z: 14.9, plinth: 0.86, height: 2.35, yaw: PI + 0.35 };

// the sun: the direction towards it. Low afternoon light from the left,
// a little from the far end, so it comes in through the left windows
// and the roof and falls across the floor towards the entrance.
const SUN = (() => {
	const v = [-0.70, 0.56, 0.44];
	const l = Math.hypot(v[0], v[1], v[2]);
	return v.map((x) => x / l);
})();

const toW = (p) => [p[0] + O[0], p[1] + O[1], p[2] + O[2]];

// the weather over the studio: 0 sun, 1 rain (eased between)
const weather = { rain: /[?&]rain\b/.test(typeof location !== 'undefined' ? location.search : '') ? 1 : 0, target: 0, last: 0 };
weather.target = weather.rain;

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

	float studioSun(vec3 pw) {
		vec3 p = pw - vec3(${f(O[0])}, ${f(O[1])}, ${f(O[2])});
		vec3 S = STUDIO_SUN;
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
		return vis * (1.0 - bar) * 0.58;
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
	JAR: 16, SOIL: 17, BRUSH: 18, TRAVERTINE: 19, CLOTH: 20
};

function Geo() {
	const g = { pos: [], nrm: [], kind: [], uv: [], idx: [] };
	g.v = (p, n, k, uv) => {
		g.pos.push(p[0] + O[0], p[1] + O[1], p[2] + O[2]); g.nrm.push(n[0], n[1], n[2]); g.kind.push(k); g.uv.push(uv ? uv[0] : 0, uv ? uv[1] : 0);
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
			for (const c of WIN.c) {
				const t = winTop(zm - c);
				if (t !== null) hole = [WIN.sill, Math.min(winTop(za - c) || WIN.spring, winTop(zb - c) || WIN.spring)];
			}
			const ys = hole ? [[0, hole[0]], [hole[1], H]] : [[0, H]];
			for (const [y0, y1] of ys) {
				if (y1 <= y0) continue;
				if (side) g.quad([xi, y0, zb], [xi, y0, za], [xi, y1, za], [xi, y1, zb], n, K.PLASTER, [[zb, y0], [za, y0], [za, y1], [zb, y1]]);
				else g.quad([xi, y0, za], [xi, y0, zb], [xi, y1, zb], [xi, y1, za], n, K.PLASTER, [[za, y0], [zb, y0], [zb, y1], [za, y1]]);
			}
		}
		// the reveals: the jambs, the arch's soffit, and a stone sill
		for (const c of WIN.c) {
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
		const xs = side ? W : 0, sg = side ? -1 : 1;
		const pil = [0.6, ...WIN.c.slice(1).map((c, i) => (c + WIN.c[i]) / 2), L - 0.6];
		for (const z of pil) {
			const a = Math.min(xs, xs + sg * 0.14), b = Math.max(xs, xs + sg * 0.14);
			g.box(a, 0, z - 0.34, b, H - 0.7, z + 0.34, K.STONE, { bottom: true });
			const a2 = Math.min(xs, xs + sg * 0.24), b2 = Math.max(xs, xs + sg * 0.24);
			g.box(a2, 0, z - 0.44, b2, 0.55, z + 0.44, K.STONE, { bottom: true });
			g.box(a2, H - 0.95, z - 0.46, b2, H - 0.7, z + 0.46, K.STONE);
		}
		const a = Math.min(xs, xs + sg * 0.05), b = Math.max(xs, xs + sg * 0.05);
		g.box(a, 0, 0, b, 0.22, L, K.STONE, { bottom: true });
		// a cornice under the eaves
		const a3 = Math.min(xs, xs + sg * 0.32), b3 = Math.max(xs, xs + sg * 0.32);
		g.box(a3, H - 0.55, 0, b3, H - 0.3, L, K.STONE);
		const a4 = Math.min(xs, xs + sg * 0.42), b4 = Math.max(xs, xs + sg * 0.42);
		g.box(a4, H - 0.3, 0, b4, H - 0.12, L, K.STONE);
	}

	// --- the end walls and the gables up to the roof
	for (const [z, nz] of [[0, 1], [L, -1]]) {
		const N = 32;
		for (let i = 0; i < N; i++) {
			const x0 = (i / N) * W, x1 = ((i + 1) / N) * W;
			const top = (x) => (x < W / 2 ? H + KR * x : H + KR * (W - x));
			const pts = nz > 0 ? [[x1, 0], [x0, 0], [x0, top(x0)], [x1, top(x1)]] : [[x0, 0], [x1, 0], [x1, top(x1)], [x0, top(x0)]];
			g.quad(...pts.map(([x, y]) => [x, y, z]), [0, 0, nz], K.PLASTER, pts.map(([x, y]) => [x, y]));
		}
		// plinth and cornice
		const za = nz > 0 ? 0 : L - 0.05, zb = nz > 0 ? 0.05 : L;
		g.box(0, 0, za, W, 0.22, zb, K.STONE, { bottom: true });
		const zc = nz > 0 ? 0 : L - 0.32, zd = nz > 0 ? 0.32 : L;
		g.box(0, H - 0.55, zc, W, H - 0.3, zd, K.STONE);
	}

	// --- the near wall's door (the way in, for now a tall closed door)
	{
		const z = 0.02, dx0 = W / 2 - 1.1, dx1 = W / 2 + 1.1, top = 3.9;
		g.box(dx0 - 0.3, 0, 0, dx0, top + 0.3, 0.12, K.STONE);
		g.box(dx1, 0, 0, dx1 + 0.3, top + 0.3, 0.12, K.STONE);
		g.box(dx0 - 0.3, top, 0, dx1 + 0.3, top + 0.4, 0.14, K.STONE);
		for (const [a, b] of [[dx0, W / 2 - 0.01], [W / 2 + 0.01, dx1]]) {
			g.box(a, 0, z, b, top, z + 0.06, K.WOOD);
			// panels
			g.box(a + 0.12, 0.3, z + 0.06, b - 0.12, 1.7, z + 0.09, K.WOOD);
			g.box(a + 0.12, 2.0, z + 0.06, b - 0.12, top - 0.2, z + 0.09, K.WOOD);
		}
	}

	// --- the aedicule on the far wall, behind the statue
	{
		const zw = L, cx = W / 2;
		const hw = 1.25, top = 4.6;
		// the recess
		g.quad([cx - hw, 0.9, zw - 0.02], [cx + hw, 0.9, zw - 0.02], [cx + hw, top, zw - 0.02], [cx - hw, top, zw - 0.02], [0, 0, -1], K.NICHE, [[0, 0.9], [1, 0.9], [1, top], [0, top]]);
		for (const s of [-1, 1]) {
			const x = cx + s * (hw + 0.24);
			g.box(x - 0.24, 0.0, zw - 0.42, x + 0.24, top, zw, K.TRAVERTINE, { z1: true, bottom: true });
			g.box(x - 0.3, 0.0, zw - 0.5, x + 0.3, 0.9, zw, K.TRAVERTINE, { z1: true, bottom: true });
			g.box(x - 0.31, top, zw - 0.5, x + 0.31, top + 0.22, zw, K.TRAVERTINE, { z1: true });
		}
		g.box(cx - hw - 0.55, top + 0.22, zw - 0.56, cx + hw + 0.55, top + 0.72, zw, K.TRAVERTINE, { z1: true });
		g.box(cx - hw - 0.65, top + 0.72, zw - 0.66, cx + hw + 0.65, top + 0.84, zw, K.TRAVERTINE, { z1: true });
		// the pediment
		const pb = top + 0.84, pt = pb + 1.05, pw = hw + 0.7, zf = zw - 0.6;
		g.quad([cx - pw, pb, zf], [cx + pw, pb, zf], [cx, pt, zf], [cx, pt, zf], [0, 0, -1], K.TRAVERTINE, [[0, pb], [1, pb], [0.5, pt], [0.5, pt]]);
		const sl = Math.hypot(pw, pt - pb);
		for (const s of [-1, 1]) {
			const nx = s * (pt - pb) / sl, ny = pw / sl;
			const a = [cx + s * pw, pb, zf], b = [cx, pt, zf], c2 = [cx, pt, zw], d = [cx + s * pw, pb, zw];
			if (s < 0) g.quad(a, d, c2, b, [nx, ny, 0], K.TRAVERTINE, [[0, 0], [1, 0], [1, 1], [0, 1]]);
			else g.quad(a, b, c2, d, [nx, ny, 0], K.TRAVERTINE, [[0, 0], [1, 0], [1, 1], [0, 1]]);
		}
		// the sill of the niche
		g.box(cx - hw, 0.0, zw - 0.36, cx + hw, 0.9, zw, K.TRAVERTINE, { z1: true, bottom: true });
	}

	// --- the pool: a travertine curb round dark water
	{
		const { x0, x1, z0, z1, curb, top } = POOL;
		const lip = 0.06, cap = 0.08;
		// the curb's body
		g.box(x0 - curb, 0, z0 - curb, x0, top - cap, z1 + curb, K.TRAVERTINE, { bottom: true });
		g.box(x1, 0, z0 - curb, x1 + curb, top - cap, z1 + curb, K.TRAVERTINE, { bottom: true });
		g.box(x0, 0, z0 - curb, x1, top - cap, z0, K.TRAVERTINE, { bottom: true });
		g.box(x0, 0, z1, x1, top - cap, z1 + curb, K.TRAVERTINE, { bottom: true });
		// the coping, overhanging a little on both sides
		g.box(x0 - curb - lip, top - cap, z0 - curb - lip, x0 + lip * 0.5, top, z1 + curb + lip, K.TRAVERTINE);
		g.box(x1 - lip * 0.5, top - cap, z0 - curb - lip, x1 + curb + lip, top, z1 + curb + lip, K.TRAVERTINE);
		g.box(x0 + lip * 0.5, top - cap, z0 - curb - lip, x1 - lip * 0.5, top, z0 + lip * 0.5, K.TRAVERTINE);
		g.box(x0 + lip * 0.5, top - cap, z1 - lip * 0.5, x1 - lip * 0.5, top, z1 + curb + lip, K.TRAVERTINE);
		// the water, on the floor's plane (so it mirrors the room)
		const S = 0.5;
		for (let x = x0; x < x1 - 1e-6; x += S) {
			for (let z = z0; z < z1 - 1e-6; z += S) {
				const xa = x, xb = Math.min(x1, x + S), za = z, zb = Math.min(z1, z + S);
				g.quad([xa, 0, za], [xa, 0, zb], [xb, 0, zb], [xb, 0, za], [0, 1, 0], K.WATER, [[xa, za], [xa, zb], [xb, zb], [xb, za]]);
			}
		}
		// the plinth in the water for the statue
		const { x, z, plinth } = VENUS;
		g.box(x - 0.42, 0, z - 0.42, x + 0.42, plinth - 0.12, z + 0.42, K.TRAVERTINE, { bottom: true });
		g.box(x - 0.5, plinth - 0.12, z - 0.5, x + 0.5, plinth, z + 0.5, K.TRAVERTINE);
		g.box(x - 0.48, 0, z - 0.48, x + 0.48, 0.12, z + 0.48, K.TRAVERTINE, { bottom: true });
	}

	return g;
}

// ------------------------------------------------------------------
// GEOMETRY: steel (window glazing, roof, trusses)
// ------------------------------------------------------------------

function buildSteel(g) {
	// the window glazing, in the middle of the wall's thickness
	for (const side of [0, 1]) {
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
	const clusters = [[POOL.x0 + 0.9, 6.6, 0.9, 10], [POOL.x1 - 0.8, 8.4, 0.85, 9], [POOL.x0 + 0.8, 10.6, 0.8, 8],
		[POOL.x1 - 0.9, 12.4, 0.9, 10], [POOL.x0 + 1.0, 13.9, 0.65, 6], [W / 2 + 0.2, 9.6, 0.5, 4], [POOL.x1 - 0.7, 15.9, 0.55, 5]];
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
		const n = 30, notch = 0.34 + shade * 0.1;
		const c = g.v([x, 0.012, z], [0, 1, 0], K.PAD, [0.5, shade]);
		let prev = null;
		for (let i = 0; i <= n; i++) {
			const a = rot + notch / 2 + (2 * PI - notch) * i / n;
			const rr = r * (1 + 0.03 * Math.sin(a * 7 + shade * 10));
			const cur = g.v([x + Math.cos(a) * rr, 0.012 + 0.008 * Math.sin(a * 3 + shade * 9), z + Math.sin(a) * rr], [0, 1, 0], K.PAD, [1.0, shade]);
			if (prev !== null) g.idx.push(c, prev, cur);
			prev = cur;
		}
		// the rim curls up a touch
		prev = null;
		for (let i = 0; i <= n; i++) {
			const a = rot + notch / 2 + (2 * PI - notch) * i / n;
			const rr = r * (1 + 0.03 * Math.sin(a * 7 + shade * 10));
			const p0 = [x + Math.cos(a) * rr, 0.012, z + Math.sin(a) * rr];
			const p1 = [x + Math.cos(a) * (rr + 0.012), 0.03, z + Math.sin(a) * (rr + 0.012)];
			const i0 = g.v(p0, [Math.cos(a), 0.4, Math.sin(a)], K.PAD, [1.2, shade]), i1 = g.v(p1, [Math.cos(a), 0.4, Math.sin(a)], K.PAD, [1.2, shade]);
			if (prev) g.idx.push(prev[0], i0, i1, prev[0], i1, prev[1]);
			prev = [i0, i1];
		}
	}
	// water lilies: cupped pink petals in three rings, a golden heart
	const flowers = [[POOL.x0 + 0.75, 6.9, 1.0], [POOL.x1 - 0.65, 8.1, 0.85], [POOL.x1 - 0.95, 12.6, 1.1], [POOL.x0 + 0.95, 10.3, 0.8], [POOL.x1 - 0.55, 15.6, 0.9], [POOL.x0 + 1.15, 13.7, 0.75]];
	for (const [x, z, open] of flowers) {
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
					const wdt = Math.sin(PI * Math.pow(t, 0.8)) * 0.42 * len * sz;
					const row = [];
					for (let j = 0; j <= NW; j++) {
						const u = (j / NW) * 2 - 1;
						const lx = u * wdt, ly = Math.abs(u) * Math.abs(u) * 0.12 * len * sz, lr = t * len * sz;
						// lift along the petal by its tilt
						const rr = lr * Math.cos(tilt), yy = lr * Math.sin(tilt) + ly;
						const px = x + Math.cos(yaw) * rr - Math.sin(yaw) * lx;
						const pz = z + Math.sin(yaw) * rr + Math.cos(yaw) * lx;
						row.push(g.v([px, 0.03 + yy, pz], [-Math.cos(yaw) * Math.sin(tilt) * 0.6, 0.8, -Math.sin(yaw) * Math.sin(tilt) * 0.6], K.PETAL, [t, (u + 1) / 2]));
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
}

function buildStudio(g, plantSpots) {
	const rnd = rng(907);
	// --- three easels down the right-hand side, their canvases tilted
	// back like boards, turned towards the pool and the light
	const EASELS = [
		{ x: 12.4, z: 6.2, yaw: 0.62, lean: 0.20 },
		{ x: 13.1, z: 9.7, yaw: 0.95, lean: 0.24 },
		{ x: 12.6, z: 13.3, yaw: 1.22, lean: 0.18 }
	];
	EASELS.forEach((e, i) => {
		const c = Math.cos(e.yaw), s = Math.sin(e.yaw);
		const ct = Math.cos(e.lean), st = Math.sin(e.lean);
		// local frame: the canvas faces -z (towards the viewer), leans back (+z)
		const P = (x, y, z) => [e.x + c * x + s * (z + y * st), y * ct, e.z - s * x + c * (z + y * st)];
		const Pn = (n) => [c * n[0] + s * n[2], n[1], -s * n[0] + c * n[2]];
		const lean = (a, b) => g.beam(P(...a), P(...b), 0.022, K.WOOD);
		// two front legs splayed, a back leg, a mast, a ledge, a clamp
		lean([-0.36, 0, 0], [-0.06, 2.15, 0]);
		lean([0.36, 0, 0], [0.06, 2.15, 0]);
		g.beam(P(0, 0.05, 0.02), P(0, 2.3, 0.02), 0.026, K.WOOD);
		g.beam([e.x + s * 0.95, 0, e.z + c * 0.95], P(0, 1.85, 0.04), 0.02, K.WOOD);
		// the ledge
		const L0 = P(-0.42, 0.78, -0.06), L1 = P(0.42, 0.78, -0.06);
		g.beam(L0, L1, 0.035, K.WOOD);
		// the canvas: a stretched linen board 0.61 x 0.91 (2 x 3 ft), 3 cm deep
		const cw = 0.305, ch = 0.91, y0 = 0.82, zf = -0.11, zb = -0.08;
		const q = (a, b, cc, d, n, k, uv) => g.quad(P(...a), P(...b), P(...cc), P(...d), Pn(n), k, uv);
		q([-cw, y0, zf], [cw, y0, zf], [cw, y0 + ch, zf], [-cw, y0 + ch, zf], [0, st, -ct], K.PAINT, [[0 + i, 0], [1 + i, 0], [1 + i, 1], [0 + i, 1]]);
		q([cw, y0, zb], [-cw, y0, zb], [-cw, y0 + ch, zb], [cw, y0 + ch, zb], [0, -st, ct], K.WOOD, [[0, 0], [1, 0], [1, 1], [0, 1]]);
		for (const sx of [-1, 1]) q([sx * cw, y0, sx > 0 ? zf : zb], [sx * cw, y0, sx > 0 ? zb : zf], [sx * cw, y0 + ch, sx > 0 ? zb : zf], [sx * cw, y0 + ch, sx > 0 ? zf : zb], [sx, 0, 0], K.GESSO, [[0, 0], [1, 0], [1, 1], [0, 1]]);
		q([-cw, y0 + ch, zf], [cw, y0 + ch, zf], [cw, y0 + ch, zb], [-cw, y0 + ch, zb], [0, ct, st], K.GESSO, [[0, 0], [1, 0], [1, 1], [0, 1]]);
		q([cw, y0, zf], [-cw, y0, zf], [-cw, y0, zb], [cw, y0, zb], [0, -ct, -st], K.GESSO, [[0, 0], [1, 0], [1, 1], [0, 1]]);
		// the clamp over the top
		g.beam(P(-0.07, y0 + ch + 0.04, -0.1), P(0.07, y0 + ch + 0.04, -0.1), 0.03, K.WOOD);
	});

	// --- a paint-spattered drop cloth under the easels
	{
		const N = 14;
		const x0 = 11.4, x1 = 14.6, z0 = 4.6, z1 = 15.0;
		for (let i = 0; i < N; i++) {
			for (let j = 0; j < 3 * N; j++) {
				const xa = x0 + (x1 - x0) * i / N, xb = x0 + (x1 - x0) * (i + 1) / N;
				const za = z0 + (z1 - z0) * j / (3 * N), zb = z0 + (z1 - z0) * (j + 1) / (3 * N);
				const y = (x, z) => 0.004 + 0.012 * Math.max(0, Math.sin(x * 4.1 + z * 1.3) * Math.sin(z * 2.7 - x));
				g.quad([xa, y(xa, za), za], [xa, y(xa, zb), zb], [xb, y(xb, zb), zb], [xb, y(xb, za), za], [0, 1, 0], K.CLOTH, [[xa, za], [xa, zb], [xb, zb], [xb, za]]);
			}
		}
	}

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
	// --- a wooden stool by the easels
	{
		const x = 11.2, z = 8.2;
		g.lathe(x, z, [[0, 0.62], [0.2, 0.62], [0.2, 0.66], [0, 0.66]], K.WOOD, 20);
		for (let k = 0; k < 3; k++) {
			const a = 2 * PI * k / 3 + 0.4;
			g.beam([x + Math.cos(a) * 0.24, 0, z + Math.sin(a) * 0.24], [x + Math.cos(a) * 0.12, 0.62, z + Math.sin(a) * 0.12], 0.018, K.WOOD);
		}
	}
	// --- glazed black pots for the plants, at the corners of the pool
	for (const [x, z, s] of plantSpots) {
		g.lathe(x, z, [[0, 0], [0.26 * s, 0], [0.33 * s, 0.32 * s], [0.36 * s, 0.55 * s], [0.38 * s, 0.6 * s], [0.34 * s, 0.6 * s], [0.0, 0.57 * s]], K.POT, 36);
		g.lathe(x, z, [[0.0, 0.57 * s], [0.33 * s, 0.575 * s], [0.0, 0.58 * s]], K.SOIL, 20);
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
	const g = { pos: [], nrm: [], uv: [], shade: [], idx: [] };
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
			}
		}
		for (let i = 0; i < NS; i++) {
			const a = base + i * 2;
			g.idx.push(a, a + 1, a + 3, a, a + 3, a + 2);
		}
	};
	// the potted plants: a fountain of big leaves on long stems
	for (const [x, z, s] of PLANTS) {
		const n = 30 + Math.floor(rnd() * 10);
		for (let k = 0; k < n; k++) {
			const yaw = rnd() * 2 * PI;
			const up = 0.45 + rnd() * 0.9;
			const len = (0.55 + rnd() * 0.4) * s;
			const stem = (0.2 + rnd() * 0.9) * s;
			const b = [x + Math.cos(yaw) * stem * Math.cos(up) * 0.5, 0.58 * s + stem * Math.sin(up) * 0.9, z + Math.sin(yaw) * stem * Math.cos(up) * 0.5];
			const dir = [Math.cos(yaw) * Math.cos(up * 0.6), Math.sin(up * 0.6), Math.sin(yaw) * Math.cos(up * 0.6)];
			leaf(b, dir, [-Math.sin(yaw), 0, Math.cos(yaw)], len, 0.25 + rnd() * 0.25);
		}
	}
	// ivy hanging over the aedicule and down its sides
	const cx = W / 2;
	for (let k = 0; k < 34; k++) {
		let x = cx - 2.0 + rnd() * 4.0, y = 4.6 + 0.9 + rnd() * 0.9, z = L - 0.65 - rnd() * 0.05;
		const len = 1.0 + rnd() * 3.2;
		const steps = Math.floor(len / 0.11);
		for (let i = 0; i < steps; i++) {
			y -= 0.11; x += (rnd() - 0.5) * 0.05;
			if (y < 0.9) break;
			for (let m = 0; m < 2; m++) {
				const a = rnd() * 2 * PI;
				leaf([x, y, z - 0.02 - rnd() * 0.12], [Math.cos(a) * 0.5, -0.6 + rnd() * 0.3, -0.5], [Math.sin(a), 0, 0], 0.15 + rnd() * 0.1, 0.1);
			}
		}
	}
	// and a little trailing over the corners of the pool's coping
	for (const [x, z, sx] of [[POOL.x0 - 0.3, POOL.z0 - 0.3, -1], [POOL.x1 + 0.3, POOL.z1 + 0.3, 1], [POOL.x0 - 0.3, POOL.z1 + 0.2, -1]]) {
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
	for (const side of [0, 1]) {
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
		vec3 dayZen = vec3(0.30, 0.48, 0.80), dayHor = vec3(0.92, 0.88, 0.80);
		vec3 day = mix(dayHor, dayZen, pow(max(up, 0.0), 0.55));
		float sd = max(dot(d, STUDIO_SUN), 0.0);
		day += vec3(1.0, 0.86, 0.62) * (pow(sd, 6.0) * 0.45 + pow(sd, 60.0) * 0.8) * (1.0 - rain);
		// rain: a low, even, pearl-grey sky
		vec3 grey = mix(vec3(0.60, 0.61, 0.62), vec3(0.47, 0.50, 0.54), pow(max(up, 0.0), 0.6)) * 0.78;
		day = mix(day, grey, rain);
		vec3 nZen = vec3(0.012, 0.022, 0.05), nHor = vec3(0.05, 0.065, 0.10);
		vec3 nite = mix(nHor, nZen, pow(max(up, 0.0), 0.5)) + vec3(0.55, 0.65, 0.9) * pow(sd, 40.0) * 0.3 * (1.0 - rain);
		nite = mix(nite, vec3(0.03, 0.035, 0.045), rain * 0.6);
		return mix(day, nite, night);
	}

	// the light reaching a point: sun through the openings, the sky
	// through the glass, light bounced off the sunlit floor, and at night
	// the pendant lamps. Returns diffuse light; spec gets the sun's glint.
	vec3 studioLight(vec3 pw, vec3 N, vec3 V, float gloss, out vec3 spec, out float sunVis) {
		vec3 p = pw - vec3(${f(O[0])}, ${f(O[1])}, ${f(O[2])});
		float vis = studioSun(pw + N * 0.03);
		sunVis = vis;
		vec3 sunC = mix(vec3(1.0, 0.80, 0.56) * 4.6, vec3(0.42, 0.55, 0.95) * 0.75, night) * (1.0 - 0.97 * rain);
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
		vec3 skyC = mix(vec3(0.70, 0.65, 0.58), vec3(0.035, 0.05, 0.09), night);
		// under a rain sky the glass roof floods the room with soft grey light
		skyC = mix(skyC, mix(vec3(0.74, 0.77, 0.80) * 1.45, vec3(0.03, 0.04, 0.06), night), rain);
		col += skyC * (0.22 + 0.62 * upF) * occ * (0.85 + 0.3 * hgt) * 0.36;
		// the bright left windows, seen from walls and things facing them
		vec3 winC = mix(vec3(1.0, 0.86, 0.66), vec3(0.62, 0.66, 0.70) * 1.2, rain);
		col += mix(winC, vec3(0.06, 0.08, 0.14), night) * (max(-N.x, 0.0) + rain * max(N.x, 0.0)) * 0.16 * occ;
		// light thrown back up off the sunlit floor: warm, from below
		float pools = mix(1.0, 0.15, night) * (1.0 - 0.75 * rain);
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
				float w = night * 14.0 * cone / (1.0 + dd * 0.9);
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
		vec3 airC = mix(mix(vec3(0.36, 0.30, 0.24), vec3(0.50, 0.53, 0.56), rain), vec3(0.02, 0.03, 0.05), night);
		return mix(col, airC, h * mix(0.25, 0.34, rain));
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

function loadTexture(regl, url) {
	const tex = regl.texture({ data: [[[0, 0, 0, 0]]], min: 'linear', mag: 'linear' });
	const state = { tex, ready: false };
	fetch(url)
		.then((r) => { if (!r.ok) throw new Error('Could not load ' + url); return r.blob(); })
		.then((b) => createImageBitmap(b, { premultiplyAlpha: 'none' }).catch(() => new Promise((ok, fail) => {
			const img = new Image(); img.onload = () => ok(img); img.onerror = fail; img.src = URL.createObjectURL(b);
		})))
		.then((img) => { tex({ data: img, flipY: false, min: 'mipmap', mipmap: 'nice', mag: 'linear' }); state.ready = true; })
		.catch((e) => console.error(e));
	return state;
}

const VERT = `
	precision highp float;
	uniform mat4 proj, view;
	uniform float yScale;
	attribute vec3 position, normal;
	attribute float kind;
	attribute vec2 uv;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	void main() {
		v_pos = position; v_nrm = normal; v_kind = kind; v_uv = uv;
		vec3 t = view[3].xyz;
		v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
		v_eye.y *= yScale;
		vec3 p = position; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`;

const FRAG = `
	precision highp float;
	uniform float night, time, yScale, mirrorOn, rain;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${LIGHT}

	bool is(float k) { return abs(v_kind - k) < 0.5; }

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

		vec3 base = vec3(0.5);
		float gloss = 0.1;
		float rough = 1.0;
		float aoK = 1.0;
		float sss = 0.0;

		if (is(${K.PLASTER}.0) || is(${K.NICHE}.0)) {
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
			// big honed limestone flags, set in a running bond
			vec2 q = p.xz;
			float row = floor(q.y / 1.2);
			q.x += mod(row, 2.0) * 0.45;
			vec2 cell = floor(q / vec2(0.9, 1.2));
			vec2 fr = fract(q / vec2(0.9, 1.2)) * vec2(0.9, 1.2);
			float grout = 1.0 - smoothstep(0.0, 0.012, min(min(fr.x, 0.9 - fr.x), min(fr.y, 1.2 - fr.y)));
			float tone = hash13(vec3(cell, 3.0));
			float n = fbm3(vec3(p.x * 1.3, 0.0, p.z * 1.3) + vec3(cell * 3.1, 0.0));
			base = mix(vec3(0.58, 0.51, 0.42), vec3(0.74, 0.67, 0.57), tone * 0.6 + n * 0.4);
			base *= 1.0 - grout * 0.35;
			// worn paths and paint drips near the easels
			float wear = fbm3(vec3(p.x * 0.6, 1.0, p.z * 0.6));
			gloss = mix(0.35, 0.6, wear) * (1.0 - grout);
			float drip = smoothstep(0.82, 0.86, vnoise3(vec3(p.xz * 6.0, 2.0))) * smoothstep(9.8, 11.5, p.x);
			base = mix(base, vec3(0.55, 0.25, 0.12), drip * 0.5);
			aoK = mix(0.62, 1.0, smoothstep(0.0, 0.9, min(min(p.x, ${f(W)} - p.x), min(p.z, ${f(L)} - p.z))));
			// the curb throws a soft shadow round the pool
			vec2 dq = max(vec2(${f(POOL.x0 - POOL.curb)} - p.x, p.x - ${f(POOL.x1 + POOL.curb)}), vec2(${f(POOL.z0 - POOL.curb)} - p.z, p.z - ${f(POOL.z1 + POOL.curb)}));
			float dpool = max(max(dq.x, dq.y), 0.0);
			aoK *= mix(0.7, 1.0, smoothstep(0.0, 0.4, dpool));
		} else if (is(${K.WATER}.0)) {
			base = vec3(0.012, 0.018, 0.014);
			gloss = 1.0;
		} else if (is(${K.PAD}.0)) {
			float sh = v_uv.y;
			vec2 q = (p.xz) * 9.0;
			float veins = smoothstep(0.85, 1.0, abs(sin(atan(q.y, q.x) * 9.0)));
			base = mix(vec3(0.10, 0.20, 0.05), vec3(0.28, 0.36, 0.10), sh) * (0.85 + 0.25 * vnoise3(vec3(p.xz * 18.0, sh)));
			base = mix(base, vec3(0.45, 0.22, 0.10), smoothstep(1.1, 1.2, v_uv.x) * 0.7);
			base *= 1.0 - veins * 0.12;
			gloss = 0.55;
		} else if (is(${K.PETAL}.0)) {
			base = mix(vec3(0.98, 0.90, 0.92), vec3(0.86, 0.36, 0.62), smoothstep(0.2, 1.0, v_uv.x));
			sss = 0.6;
			gloss = 0.25;
		} else if (is(${K.STAMEN}.0)) {
			base = vec3(0.95, 0.66, 0.12);
			gloss = 0.2;
		} else if (is(${K.MARBLE}.0)) {
			// warm white marble with faint grey veins
			float v = fbm3(p * 2.2);
			float vein = 1.0 - smoothstep(0.0, 0.035, abs(sin((p.y * 3.0 + p.x * 2.0 + v * 6.0))) - 0.0) ;
			base = mix(vec3(0.86, 0.83, 0.77), vec3(0.93, 0.91, 0.86), v) * (1.0 - 0.06 * vein);
			// a little grime in the folds, darker at the foot
			base *= mix(0.84, 1.0, smoothstep(${f(VENUS.plinth)}, ${f(VENUS.plinth + 0.5)}, p.y));
			sss = 0.18;
			gloss = 0.32;
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

		col = studioAir(col, pw, v_eye);

		float alpha = 1.0;
		if (is(${K.FLOOR}.0)) {
			float cosV = clamp(V.y, 0.0, 1.0);
			float refl = (0.06 + 0.45 * pow(1.0 - cosV, 4.0)) * gloss * 1.4;
			alpha = 1.0 - refl * mirrorOn;
			alpha = mix(alpha, 1.0, clamp(sunVis * 0.5, 0.0, 0.5));
		}
		if (is(${K.WATER}.0)) {
			// still, dark water: almost a mirror, the sky's light on it, a
			// very slow breath of ripples
			float cosV = clamp(V.y, 0.0, 1.0);
			float rip = vnoise3(vec3(p.xz * 3.0, time * 0.15)) - 0.5;
			float F = 0.02 + 0.98 * pow(1.0 - cosV, 5.0);
			float refl = mix(0.72, 0.98, F) + rip * 0.03;
			col = base * light * 0.35 + spec * 1.6;
			col = studioAir(col, pw, v_eye);
			alpha = 1.0 - refl * mirrorOn;
			if (mirrorOn < 0.5) { col = mix(col, studioSky(R) * 0.35, F); alpha = 1.0; }
		}

		col = max(col, vec3(0.0));
		gl_FragColor = vec4(sqrt(col), alpha);
	}`;

module.exports = function (regl) {
	const room = buildRoom();
	buildSteel(room);
	buildPond(room);
	buildStudio(room, PLANTS);

	const BLEND = { enable: true, func: { srcRGB: 'src alpha', dstRGB: 'one minus src alpha', srcAlpha: 'one', dstAlpha: 'zero' } };

	const makeDraw = (g, count) => regl({
		vert: VERT,
		frag: FRAG,
		attributes: {
			position: g.pos,
			normal: g.nrm,
			kind: g.kind,
			uv: g.uv
		},
		elements: new Uint32Array(g.idx),
		count: count || g.idx.length,
		uniforms: { rain: () => weather.rain },
		cull: { enable: false },
		blend: BLEND
	});
	const drawRoom = makeDraw(room);

	// the statue, loaded when it arrives
	let drawVenus = null;
	fetch('res/venus.bin')
		.then((r) => { if (!r.ok) throw new Error('Could not load venus.bin'); return r.arrayBuffer(); })
		.then((buf) => {
			const m = decodeStatue(buf);
			const g = { pos: [], nrm: [], kind: [], uv: [], idx: [] };
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
		vert: `
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position, normal;
		attribute vec2 uv;
		attribute float shade;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_shade;
		void main() {
			v_pos = position; v_nrm = normal; v_uv = uv; v_shade = shade;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = position; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,
		frag: `
		precision highp float;
		uniform float night, time, rain;
		uniform sampler2D tex;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_shade;
		${LIGHT}
		void main() {
			vec4 t = texture2D(tex, v_uv);
			if (t.a < 0.5) discard;
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			vec3 base = t.rgb * t.rgb * vec3(0.8, 0.95, 0.75) * v_shade;
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, 0.4, spec, sv);
			// light through the leaf
			float through = max(dot(-N, STUDIO_SUN), 0.0) * sv;
			vec3 col = base * light + base * vec3(0.9, 1.0, 0.5) * through * 2.2 * (1.0 - night) + spec * 0.3;
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,
		attributes: { position: lv.pos, normal: lv.nrm, uv: lv.uv, shade: lv.shade },
		elements: new Uint32Array(lv.idx),
		uniforms: { tex: leafTex.tex, rain: () => weather.rain },
		cull: { enable: false }
	});

	// the glass: a faint sheen, a little dust, the sky's reflection
	const gl = buildGlass();
	const drawGlass = regl({
		vert: VERT,
		frag: `
		precision highp float;
		uniform float night, time, rain;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		${LIGHT}

		vec2 hash22(vec2 p) {
			vec3 a = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
			a += dot(a, a.yzx + 33.33);
			return fract((a.xx + a.yz) * a.zy);
		}
		// beads of rain sitting on the glass: returns coverage, and the
		// drop's local position (for its highlight and its dark rim)
		float beads(vec2 q, float cell, float fill, out vec2 local) {
			vec2 c = floor(q / cell), f = fract(q / cell);
			float best = 0.0; local = vec2(0.0);
			for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
				vec2 o = vec2(float(i), float(j));
				vec2 h = hash22(c + o);
				if (h.x > fill) continue;
				vec2 ctr = o + 0.15 + 0.7 * hash22(c + o + 17.0);
				float r = (0.12 + 0.28 * h.y);
				vec2 d = (f - ctr) * vec2(1.0, 0.85);
				float m = smoothstep(r, r * 0.75, length(d));
				if (m > best) { best = m; local = d / r; }
			}
			return best;
		}
		// rivulets running down: a drop sliding down each column with a
		// thin wet trail behind it
		float runs(vec2 q, float speed, out float head) {
			float colW = 0.07;
			float c = floor(q.x / colW);
			vec2 h = hash22(vec2(c, 3.0));
			head = 0.0;
			if (h.x > 0.45) return 0.0;
			float x = (fract(q.x / colW) - 0.5) * colW;
			// the path wanders a little
			x += sin(q.y * 7.0 + h.y * 20.0) * 0.004;
			float len = 2.6 + 3.0 * h.y;
			float y = mod(-q.y + time * speed * (0.6 + h.x * 2.0) + h.y * 10.0, len);
			float head0 = smoothstep(0.012, 0.006, length(vec2(x, (y - 0.025) * 0.6)));
			float trail = smoothstep(0.004, 0.0012, abs(x)) * smoothstep(0.0, 0.03, y) * (1.0 - smoothstep(0.3, 1.6, y));
			head = head0;
			return max(head0, trail * 0.7);
		}

		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float F = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
			vec3 p = v_pos - vec3(${f(O[0])}, ${f(O[1])}, ${f(O[2])});
			bool roof = v_kind > 0.5;
			float dust = fbm3(p * vec3(1.5, 3.0, 1.5)) * (roof ? 1.0 : 0.6);
			float streak = roof ? smoothstep(0.55, 0.9, vnoise3(vec3(p.z * 9.0, p.x * 0.6, 0.0))) * 0.5 : 0.0;
			vec3 c = mix(vec3(0.85, 0.80, 0.72), vec3(0.12, 0.13, 0.17), night) * (dust * 0.5 + streak);
			float a = clamp(0.05 + dust * 0.16 + streak * 0.2 + F * 0.4, 0.0, 0.6);
			vec3 sky = studioSky(reflect(-V, N));
			vec3 col = mix(c, sky, F / max(a, 0.01) * 0.4);

			if (rain > 0.001) {
				// the pane's own coordinates, "down" along the glass
				vec2 q = roof ? vec2(p.z, -abs(p.x - ${f(W / 2)}) * 1.25) : vec2(p.z, p.y);
				q.y = -q.y;
				// mist: the glass fogs from the cold, thickest low down
				float mist = roof ? 0.55 : mix(0.75, 0.42, smoothstep(${f(WIN.sill)}, ${f(WIN.top)}, p.y));
				mist *= 0.75 + 0.5 * fbm3(vec3(p.z * 2.0, p.y * 2.0 + p.x, 4.0));
				vec3 mistC = mix(vec3(0.70, 0.72, 0.74), vec3(0.06, 0.07, 0.09), night);
				// beads, big and small
				vec2 l1, l2;
				vec2 qb = roof ? q * 0.7 : q;
				float b1 = beads(qb, 0.065, 0.55, l1);
				float b2 = beads(qb + 7.3, 0.026, 0.75, l2);
				float bead = max(b1, b2 * 0.9);
				vec2 l = b1 > b2 ? l1 : l2;
				// running rivulets wipe clear lines through the mist
				float hd;
				float run = runs(q, roof ? 0.35 : 0.55, hd);
				// spatter: fresh drops landing on the roof
				float splat = 0.0;
				if (roof) {
					vec2 sc = floor(q / 0.22);
					vec2 sh = hash22(sc + 5.0);
					float ph = fract(time * (0.8 + sh.x) + sh.y);
					vec2 sp = (sc + 0.2 + 0.6 * hash22(sc + 9.0)) * 0.22;
					float rr = ph * 0.05;
					splat = smoothstep(0.004, 0.0, abs(length(q - sp) - rr)) * (1.0 - ph);
				}
				float wet = max(bead, run);
				// a drop is a little lens: dark at the rim, the sky's light
				// caught in its upper side, a tiny bright point
				vec3 dropC = mix(vec3(0.26, 0.27, 0.29), vec3(0.98, 0.99, 1.0), smoothstep(-0.1, 0.9, -l.y));
				dropC += vec3(1.0) * smoothstep(0.35, 0.0, length(l - vec2(-0.25, -0.35))) * 0.8;
				dropC = mix(dropC, dropC * vec3(0.06, 0.07, 0.1), night);
				vec3 rc = mix(mistC, dropC, wet);
				rc = mix(rc, mistC * 1.15, splat * 0.7);
				float ra = mix(mist * 0.6 * (1.0 - run * 0.8), 0.8, bead) + splat * 0.4;
				col = mix(col, rc, rain);
				a = mix(a, clamp(ra, 0.0, 0.85), rain);
			}
			gl_FragColor = vec4(sqrt(max(col, 0.0)), a);
		}`,
		attributes: { position: gl.pos, normal: gl.nrm, kind: gl.kind, uv: gl.uv },
		uniforms: { rain: () => weather.rain },
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
		vert: `
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
		}`,
		frag: `
		precision highp float;
		uniform float night, time, rain;
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
			trees = mix(trees, studioSky(vec3(d.x, 0.05, d.z)), rain * 0.55);
			col = mix(col, trees * 1.15, inTrees);
			vec3 meadow = mix(vec3(0.55, 0.55, 0.32), vec3(0.75, 0.70, 0.50), vnoise3(vec3(d.xz * 80.0, 0.0)));
			meadow = mix(meadow, toNightC(meadow), night);
			meadow = mix(meadow, vec3(0.38, 0.40, 0.36), rain * 0.7);
			col = mix(col, meadow, ground);
			// the rain itself: two layers of falling streaks
			if (rain > 0.001) {
				float streaks = 0.0;
				for (int k = 0; k < 2; k++) {
					float sc = k == 0 ? 160.0 : 90.0;
					vec2 q = vec2(az * sc, d.y * sc * 0.25 + time * (k == 0 ? 9.0 : 6.0));
					vec2 cc = floor(q), ff = fract(q);
					float r = hash13(vec3(cc, float(k)));
					float x = abs(ff.x - 0.2 - 0.6 * hash13(vec3(cc, 7.0 + float(k))));
					streaks += smoothstep(0.06, 0.0, x) * smoothstep(0.0, 0.2, ff.y) * smoothstep(1.0, 0.5, ff.y) * step(0.55, r);
				}
				col = mix(col, vec3(0.86, 0.88, 0.9) * mix(1.0, 0.08, night), clamp(streaks, 0.0, 1.0) * 0.28 * rain);
			}
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`.replace('${LIGHT}', '') .replace('void main() {', `vec3 toNightC(vec3 c) { float l = dot(c, vec3(0.3, 0.59, 0.11)); return vec3(l) * vec3(0.06, 0.08, 0.14); }\n\t\tvoid main() {`),
		attributes: { position: sky.pos },
		uniforms: { rain: () => weather.rain },
		elements: new Uint32Array(sky.idx),
		cull: { enable: false }
	});

	function draw(opts) {
		const now = performance.now() / 1000;
		const dt = Math.min(0.1, Math.max(0, now - weather.last));
		weather.last = now;
		weather.rain += (weather.target - weather.rain) * Math.min(1, dt * 0.8);
		drawSky();
		drawRoom();
		if (drawVenus) drawVenus();
		if (leafTex.ready) drawLeaves();
		if (!(opts && opts.reflected)) drawGlass();
	}
	return draw;
};

// A preview of the room (?studio in the address): the camera drifts
// slowly through a few shots, with a dip to black between them.
const PREVIEW = [
	{ from: [12.6, 1.65, 0.9], to: [11.4, 1.75, 2.6], at: [6.2, 2.6, 15.5], fov: 60 },
	{ from: [8.0, 1.45, 1.4], to: [8.0, 1.25, 4.4], at: [8.0, 1.7, 16.0], fov: 50 },
	{ from: [7.2, 1.6, 3.8], to: [8.3, 1.55, 5.2], at: [13.0, 1.4, 10.4], fov: 52 },
	{ from: [6.2, 1.45, 10.4], to: [7.0, 1.75, 11.6], at: [8.0, 2.3, 15.2], fov: 44 },
	{ from: [2.6, 1.5, 2.6], to: [3.6, 1.6, 4.4], at: [7.0, 6.8, 12.0], fov: 62 }
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
	return { eye: toW(eye), target: toW(S.at), fov: S.fov, roll: 0, fade };
}

// for the light shafts (post.js) and the culling (cull.js)
module.exports.previewCam = previewCam;
module.exports.setRain = (on) => { weather.target = on ? 1 : 0; };
module.exports.raining = () => weather.rain;
module.exports.rainTarget = () => weather.target;
module.exports.sunGLSL = sunGLSL;
module.exports.O = O;
module.exports.SIZE = { W, L, H, RIDGE };
module.exports.BOX = [O[0] - 0.8, 0, O[2] - 0.8, O[0] + W + 0.8, RIDGE + 0.5, O[2] + L + 0.8];
module.exports.AIR_BOX = [O[0], 0, O[2], O[0] + W, RIDGE, O[2] + L];

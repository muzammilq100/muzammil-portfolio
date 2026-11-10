'use strict';

/*
 * THE CONFESSIONAL
 * ----------------
 * In the right-hand wall of the hall (as you walk in, x = 0), between the
 * last pillar and Venus, the wall opens into a shallow stone bay, and in
 * it stands a carved Gothic confessional of dark walnut: two booths with
 * the priest's door between them, a pointed gable over each, pinnacles
 * at the posts.
 *
 * The booth nearer the entrance has its maroon velvet curtain drawn back;
 * the other's is closed. Inside the open one, in the wall shared with the
 * priest's compartment, is a small window of pierced brass (quatrefoils),
 * and under it a ledge with a slit just above it for passing notes. On
 * the ledge: a sheet of old paper, an ink pot with a quill standing in it
 * and, at night, a candle. Behind the brass sits the artist, his back to
 * the window, in the warm light of a lamp, which comes through the
 * quatrefoils in a pattern.
 *
 * confession.js runs the visit (the camera, the note, the folding); this
 * module builds and draws the place, and the paper as the visit leaves it
 * (STATE).
 *
 * Gallery metres: x across the hall, z along it, y up.
 */

const env = require('./env');
const SH = require('./stairhall');
const mat4 = require('gl-mat4');

const PI = Math.PI;
const f = (x) => (+x).toFixed(4);
const v3 = (a) => `vec3(${f(a[0])}, ${f(a[1])}, ${f(a[2])})`;

// the bay in the wall
const BAY = { x0: -2.05, z0: 41.45, z1: 47.55, top: 5.1 };

// the confessional
const FRONT = -0.55;           // its front face
const BACK = -2.0;             // its back, against the bay's back wall
const ZA = 42.25, ZB = 43.65, ZC = 45.35, ZD = 46.75;   // its sides and partitions
const H = 2.75;                // the top of the body
const PLINTH = 0.12;
const MID_X = (FRONT + BACK) / 2;

// the brass window between the open booth and the priest
const GRILLE = { x: -1.3, y: 1.42, w: 0.42, h: 0.52, z: ZB, cell: 0.026 };
// the ledge under it, and the slit just above the ledge
const LEDGE = { x0: -1.85, x1: -0.75, top: 0.98, z0: ZB - 0.30, z1: ZB - 0.02 };
const SLIT = { x0: -1.44, x1: -1.16, y0: LEDGE.top - 0.002, y1: LEDGE.top + 0.018 };
// the paper (lying on the ledge before the slit), the ink pot and the candle
const PAPER = { cx: -1.30, cz: ZB - 0.165, w: 0.20, d: 0.255, y: LEDGE.top + 0.0012 };
const INK = { x: -1.03, z: ZB - 0.14, r: 0.042, h: 0.075 };
const CANDLE = { x: -0.86, z: ZB - 0.12, h: 0.085, r: 0.019 };
CANDLE.flame = [CANDLE.x, LEDGE.top + 0.012 + CANDLE.h + 0.028, CANDLE.z];
// the quill: from its nib in the ink to its tip
const QUILL = { a: [INK.x - 0.004, LEDGE.top + 0.03, INK.z + 0.004], b: [INK.x - 0.13, LEDGE.top + 0.34, INK.z - 0.12] };
// the priest's lamp
const LAMP = [-1.50, 2.42, 44.66];
// a small lamp on the side wall of the open booth, as in old confessionals
const SCONCE = [-1.78, 1.95, ZA + 0.09];
// where the artist sits, behind the window, facing away from it
const SEAT = { x: -1.32, z: 44.08, y: 0.64, heading: 0.32 };

// the camera's places (used by confession.js)
const SHOTS = {
	window: { eye: [-1.30, 1.33, 42.80], target: [GRILLE.x, 1.37, ZB], fov: 54 },
	paper: { eye: [-1.30, 1.40, 43.23], target: [PAPER.cx, LEDGE.top, PAPER.cz + 0.01], fov: 40 },
	front: { eye: [1.6, 1.62, 43.0], target: [-0.9, 1.35, 43.0], fov: 55 },
	bay: { eye: [4.2, 2.1, 44.6], target: [-1.0, 1.9, 44.5], fov: 55 }
};

// what the visit has done to the paper (set by confession.js)
const STATE = {
	ink: null,            // a canvas with the words on it
	inkDirty: false,
	fold: 0,              // 0 flat .. 1 folded in half
	slide: 0,             // 0 on the ledge .. 1 through the slit
	shown: true,          // false once it has gone through
	active: false         // the visit is on (the artist sits in the booth)
};


/* ---------------------------------------------------------------
 * SHARED LIGHTING (needs uniforms night, time)
 * ------------------------------------------------------------- */

function lightGLSL() {
	return `
	// a quatrefoil hole in the brass (g: metres across the window from its centre)
	float grilleHole(vec2 g) {
		vec2 q = fract(g / ${f(GRILLE.cell)} + 0.5) - 0.5;
		float d = min(min(length(q - vec2(0.17, 0.0)), length(q + vec2(0.17, 0.0))),
		              min(length(q - vec2(0.0, 0.17)), length(q + vec2(0.0, 0.17))));
		d = min(d, length(q) - 0.04);
		return 1.0 - smoothstep(0.15, 0.19, d);
	}
	// how much of the lamp's light reaches p (on the penitent's side) through the window
	float throughGrille(vec3 p, float soft) {
		vec3 d = p - ${v3(LAMP)};
		if (d.z > -0.001) return 0.0;
		float t = (${f(GRILLE.z)} - ${f(LAMP[2])}) / d.z;
		vec2 g = (${v3(LAMP)} + d * t).xy - vec2(${f(GRILLE.x)}, ${f(GRILLE.y)});
		float inWin = (1.0 - smoothstep(${f(GRILLE.w / 2 - 0.01)}, ${f(GRILLE.w / 2)} + soft, abs(g.x))) *
		              (1.0 - smoothstep(${f(GRILLE.h / 2 - 0.01)}, ${f(GRILLE.h / 2)} + soft, abs(g.y)));
		// the lamp is not a point: the pattern blurs the further it falls
		// from the brass
		float pen = 0.045 * abs(p.z - ${f(GRILLE.z)}) / abs(${f(GRILLE.z)} - ${f(LAMP[2])}) / ${f(GRILLE.cell)};
		vec2 qc = fract(g / ${f(GRILLE.cell)} + 0.5) - 0.5;
		float hd = min(min(length(qc - vec2(0.17, 0.0)), length(qc + vec2(0.17, 0.0))),
		              min(length(qc - vec2(0.0, 0.17)), length(qc + vec2(0.0, 0.17))));
		hd = min(hd, length(qc) - 0.04);
		float b = pen * 0.35;
		float hole = 1.0 - smoothstep(0.17 - b, 0.19 + b, hd);
		hole = mix(hole, 0.45, smoothstep(0.35, 1.2, pen));
		hole = mix(hole, 0.62, smoothstep(0.0, 0.05, soft));
		return inWin * hole;
	}
	// the candle's light is hidden by the ink pot and the quill
	float candleShadow(vec3 p) {
		vec3 c = ${v3(CANDLE.flame)};
		vec3 d = c - p;
		float s = 1.0;
		// the pot: a short upright cylinder
		vec2 a = vec2(${f(INK.x)}, ${f(INK.z)}) - p.xz;
		vec2 dd = d.xz;
		float t = clamp(dot(a, dd) / max(dot(dd, dd), 1e-5), 0.0, 1.0);
		float r = length(p.xz + dd * t - vec2(${f(INK.x)}, ${f(INK.z)}));
		float y = p.y + d.y * t;
		s *= mix(1.0, 0.25, (1.0 - smoothstep(${f(INK.r * 0.7)}, ${f(INK.r * 1.6)}, r)) * (1.0 - smoothstep(${f(LEDGE.top + INK.h * 0.8)}, ${f(LEDGE.top + INK.h * 1.3)}, y)));
		// the quill: a thin capsule
		vec3 qa = ${v3(QUILL.a)}, qb = ${v3(QUILL.b)};
		// closest approach between the ray p->c and the quill's axis
		vec3 u = d, v = qb - qa, w = p - qa;
		float A = dot(u, u), B = dot(u, v), C = dot(v, v), D = dot(u, w), E = dot(v, w);
		float den = max(A * C - B * B, 1e-6);
		float sc = clamp((B * E - C * D) / den, 0.0, 1.0), tc = clamp((A * E - B * D) / den, 0.0, 1.0);
		float qd = length(w + u * sc - v * tc);
		float width = mix(0.002, 0.016, smoothstep(0.25, 0.6, tc)) * (1.0 - smoothstep(0.9, 1.0, tc));
		s *= mix(1.0, 0.55, 1.0 - smoothstep(width, width + 0.006 + 0.02 * (1.0 - sc), qd));
		return s;
	}
	float candleFlicker() {
		return 0.82 + 0.10 * sin(time * 8.3) + 0.06 * sin(time * 17.9 + 1.3) * sin(time * 2.7) + 0.04 * sin(time * 31.0);
	}
	// the confessional's light at p: the hall, the priest's lamp (through the
	// brass), and at night the candle on the ledge
	vec3 boothLight(vec3 p, vec3 N, vec3 V, float gloss, out vec3 spec) {
		spec = vec3(0.0);
		bool inB1 = p.z < ${f(ZB)} && p.z > ${f(ZA - 0.04)} && p.x < ${f(FRONT + 0.02)};
		bool inPriest = p.z >= ${f(ZB)} && p.z < ${f(ZC)} && p.x < ${f(FRONT)};
		bool inB2 = p.z >= ${f(ZC)} && p.z < ${f(ZD + 0.04)} && p.x < ${f(FRONT)};
		// how open to the hall it is
		float open = 1.0;
		if (inB1) open = mix(0.7, 1.1, smoothstep(${f(BACK)}, ${f(FRONT)}, p.x));
		if (inPriest) open = 0.16;
		if (inB2) open = 0.10;
		// deeper into the bay, a little less of the hall's light
		open *= mix(0.62, 1.0, smoothstep(${f(BAY.x0)}, 0.3, p.x));
		// the stair hall's candlelight (it stands there now: see stairhall.js)
		vec3 rs;
		vec3 col = roomLight(p + ${v3(SH.OFF)}, N, V, gloss, rs) * 1.25 * open;
		spec += rs * open;
		// the lamp, warm, behind the brass
		vec3 Ld = ${v3(LAMP)} - p;
		float dl = length(Ld);
		vec3 L = Ld / dl;
		float T = inPriest ? 1.0 : (inB1 ? throughGrille(p, 0.0) : 0.0);
		vec3 lampCol = vec3(1.0, 0.70, 0.40) * mix(3.2, 1.0, night);
		vec3 lamp = lampCol * T * max(dot(N, L), 0.0) / (1.0 + dl * dl * 1.6);
		col += lamp;
		spec += lampCol * T * pow(max(dot(N, normalize(L + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss / (1.0 + dl * dl * 1.6);
		// the little lamp in the open booth
		if (inB1) {
			vec3 Sd = ${v3(SCONCE)} - p;
			float ds = length(Sd);
			vec3 Ls = Sd / ds;
			vec3 sc = vec3(1.0, 0.72, 0.42) * mix(1.5, 0.35, night);
			col += sc * (max(dot(N, Ls), 0.0) * 0.8 + 0.2) / (0.15 + ds * ds * 1.6);
			spec += sc * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(8.0, 60.0, gloss)) * gloss * 0.6 / (0.15 + ds * ds * 1.6);
		}
		// the candle
		if (night > 0.01) {
			vec3 Cd = ${v3(CANDLE.flame)} - p;
			float dc = length(Cd);
			vec3 Lc = Cd / dc;
			float fl = candleFlicker();
			float sh = candleShadow(p);
			vec3 cc = vec3(1.0, 0.60, 0.28) * fl * sh * night * (inPriest || inB2 ? 0.0 : 1.0);
			col += cc * (max(dot(N, Lc), 0.0) * 0.85 + 0.15) * 0.42 / (0.02 + dc * dc * 1.2);
			spec += cc * pow(max(dot(N, normalize(Lc + V)), 0.0), mix(8.0, 70.0, gloss)) * gloss * 0.10 / (0.02 + dc * dc * 1.2);
		}
		// the gallery's lanterns, outside the booths
		return col;
	}`;
}


/* ---------------------------------------------------------------
 * GEOMETRY
 * ------------------------------------------------------------- */

const K = { WOOD: 0, CARVED: 1, VELVET: 2, CUSHION: 3, BRASS: 4, INKGLASS: 5, QUILL: 6, LAMPGLASS: 7, DARKWOOD: 8 };

function Builder() {
	const pos = [], nrm = [], kind = [], uv = [], idx = [];
	const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
	const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
	const norm = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
	const B = { pos, nrm, kind, uv, idx, norm, cross, sub };
	B.v = (p, n, k, t) => { pos.push(p[0], p[1], p[2]); nrm.push(n[0], n[1], n[2]); kind.push(k); uv.push(t ? t[0] : 0, t ? t[1] : 0); return pos.length / 3 - 1; };
	// a quad, a b c d anticlockwise seen from its front
	B.quad = (a, b, c, d, k, uvs) => {
		const n = norm(cross(sub(b, a), sub(d, a)));
		uvs = uvs || [[0, 0], [1, 0], [1, 1], [0, 1]];
		const i = B.v(a, n, k, uvs[0]), j = B.v(b, n, k, uvs[1]), m = B.v(c, n, k, uvs[2]), o = B.v(d, n, k, uvs[3]);
		idx.push(i, j, m, i, m, o);
	};
	// an axis-aligned box (uv: the face's own coordinates, in metres)
	B.box = (x0, y0, z0, x1, y1, z1, k) => {
		const q = (a, b, c, d, u0, u1, w0, w1) => B.quad(a, b, c, d, k, [[u0, w0], [u1, w0], [u1, w1], [u0, w1]]);
		q([x1, y0, z0], [x1, y0, z1], [x1, y1, z1], [x1, y1, z0], z0, z1, y0, y1);   // +x
		q([x0, y0, z1], [x0, y0, z0], [x0, y1, z0], [x0, y1, z1], z1, z0, y0, y1);   // -x
		q([x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1], x0, x1, z0, z1);   // +y
		q([x0, y0, z1], [x1, y0, z1], [x1, y0, z0], [x0, y0, z0], x0, x1, z1, z0);   // -y
		q([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], x0, x1, y0, y1);   // +z
		q([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], x1, x0, y0, y1);   // -z
	};
	// a round tube along a polyline
	B.tube = (pts, r, k, seg) => {
		seg = seg || 6;
		const base = pos.length / 3;
		for (let i = 0; i < pts.length; i++) {
			const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
			const T = norm(sub(b, a));
			const up = Math.abs(T[1]) > 0.9 ? [1, 0, 0] : [0, 1, 0];
			const X = norm(cross(T, up)), Y = cross(X, T);
			const rr = typeof r === 'function' ? r(i / (pts.length - 1)) : r;
			for (let j = 0; j <= seg; j++) {
				const t = (j / seg) * PI * 2, c = Math.cos(t), s = Math.sin(t);
				const n = [X[0] * c + Y[0] * s, X[1] * c + Y[1] * s, X[2] * c + Y[2] * s];
				B.v([pts[i][0] + n[0] * rr, pts[i][1] + n[1] * rr, pts[i][2] + n[2] * rr], n, k, [i / (pts.length - 1), j / seg]);
			}
		}
		for (let i = 0; i < pts.length - 1; i++) {
			for (let j = 0; j < seg; j++) {
				const a = base + i * (seg + 1) + j, b = a + seg + 1;
				idx.push(a, a + 1, b, a + 1, b + 1, b);
			}
		}
	};
	// a surface of revolution about a vertical axis: prof = [[r, y], ...]
	B.lathe = (cx, cz, prof, k, seg) => {
		seg = seg || 20;
		const base = pos.length / 3;
		for (let i = 0; i < prof.length; i++) {
			const [r, y] = prof[i];
			const a = prof[Math.max(0, i - 1)], b = prof[Math.min(prof.length - 1, i + 1)];
			const dr = b[0] - a[0], dy = b[1] - a[1];
			for (let j = 0; j <= seg; j++) {
				const t = (j / seg) * PI * 2, c = Math.cos(t), s = Math.sin(t);
				const n = norm([dy * c, -dr, dy * s]);
				B.v([cx + c * r, y, cz + s * r], n, k, [j / seg, i / (prof.length - 1)]);
			}
		}
		for (let i = 0; i < prof.length - 1; i++) {
			for (let j = 0; j < seg; j++) {
				const a = base + i * (seg + 1) + j, b = a + seg + 1;
				idx.push(a, b, a + 1, a + 1, b, b + 1);
			}
		}
	};
	// a square pyramid (a spire) standing on a square of half-width h at y0
	B.spire = (cx, cz, y0, h, top, k) => {
		const c = [[-h, -h], [h, -h], [h, h], [-h, h]];
		for (let i = 0; i < 4; i++) {
			const a = c[i], b = c[(i + 1) % 4];
			const pa = [cx + a[0], y0, cz + a[1]], pb = [cx + b[0], y0, cz + b[1]], pt = [cx, top, cz];
			const n = norm(cross(sub(pt, pa), sub(pb, pa)));
			const i0 = B.v(pa, n, k, [0, 0]), i1 = B.v(pb, n, k, [1, 0]), i2 = B.v(pt, n, k, [0.5, 1]);
			idx.push(i0, i2, i1);
		}
	};
	// make every triangle wind the way its normals face (the shaders turn
	// a normal round to face the viewer from gl_FrontFacing)
	B.orient = () => {
		for (let t = 0; t < idx.length; t += 3) {
			const [a, b, c] = [idx[t], idx[t + 1], idx[t + 2]];
			const P = (i) => [pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]];
			const n = cross(sub(P(b), P(a)), sub(P(c), P(a)));
			const m = [0, 1, 2].map((k) => nrm[a * 3 + k] + nrm[b * 3 + k] + nrm[c * 3 + k]);
			if (n[0] * m[0] + n[1] * m[1] + n[2] * m[2] < 0) { idx[t + 1] = c; idx[t + 2] = b; }
		}
		return B;
	};
	return B;
}

// half the width of a pointed arch opening at height y (spring ys, half span a, radius r)
function archHalf(y, ys, a, r) {
	if (y <= ys) return a;
	const dy = y - ys;
	if (dy >= r) return 0;
	return Math.max(0, Math.sqrt(r * r - dy * dy) - (r - a));
}
const ARCH = { ys: 1.78, a: 0.56, r: 0.78 };
ARCH.apex = ARCH.ys + Math.sqrt(ARCH.r * ARCH.r - (ARCH.r - ARCH.a) * (ARCH.r - ARCH.a));

function build() {
	const B = Builder();
	const W = K.WOOD, C = K.CARVED, DK = K.DARKWOOD;
	const T = 0.06;    // board thickness

	// the plinth and the top
	B.box(BACK, 0, ZA, FRONT + 0.08, PLINTH, ZD, DK);
	B.box(BACK, H - 0.06, ZA - 0.04, FRONT + 0.1, H, ZD + 0.04, W);
	// a cornice: two steps
	B.box(FRONT, H - 0.20, ZA - 0.06, FRONT + 0.12, H - 0.06, ZD + 0.06, W);
	B.box(FRONT + 0.02, H, ZA - 0.08, FRONT + 0.14, H + 0.07, ZD + 0.08, DK);
	// the back
	B.box(BACK, PLINTH, ZA, BACK + 0.04, H - 0.06, ZD, W);
	// the outer sides, with a raised panel on each
	for (const [z0, z1, dir] of [[ZA - T, ZA, -1], [ZD, ZD + T, 1]]) {
		B.box(BACK, 0, z0, FRONT + 0.08, H, z1, W);
		const zo = dir < 0 ? z0 - 0.018 : z1;
		B.box(BACK + 0.18, 0.45, Math.min(zo, zo + 0.018), FRONT - 0.12, 2.35, Math.max(zo, zo + 0.018), DK);
		B.box(BACK + 0.26, 0.55, Math.min(zo, zo + 0.03 * dir), FRONT - 0.2, 2.25, Math.max(zo, zo + 0.03 * dir), W);
	}
	// the partition between the open booth and the priest, with the
	// window and the slit cut out of it
	{
		const z0 = ZB - 0.02, z1 = ZB + 0.02;
		const gx0 = GRILLE.x - GRILLE.w / 2, gx1 = GRILLE.x + GRILLE.w / 2;
		const gy0 = GRILLE.y - GRILLE.h / 2, gy1 = GRILLE.y + GRILLE.h / 2;
		B.box(BACK, PLINTH, z0, FRONT, SLIT.y0, z1, W);
		B.box(BACK, SLIT.y0, z0, SLIT.x0, SLIT.y1, z1, W);
		B.box(SLIT.x1, SLIT.y0, z0, FRONT, SLIT.y1, z1, W);
		B.box(BACK, SLIT.y1, z0, FRONT, gy0, z1, W);
		B.box(BACK, gy0, z0, gx0, gy1, z1, W);
		B.box(gx1, gy0, z0, FRONT, gy1, z1, W);
		B.box(BACK, gy1, z0, FRONT, H - 0.06, z1, W);
		// a moulded frame round the window, on the penitent's side
		const fw = 0.05, fz = z0 - 0.025;
		B.box(gx0 - fw, gy0 - fw, fz, gx1 + fw, gy0, z0, DK);
		B.box(gx0 - fw, gy1, fz, gx1 + fw, gy1 + fw, z0, DK);
		B.box(gx0 - fw, gy0, fz, gx0, gy1, z0, DK);
		B.box(gx1, gy0, fz, gx1 + fw, gy1, z0, DK);
		// a little hood moulding above it
		B.box(gx0 - fw - 0.02, gy1 + fw, fz - 0.015, gx1 + fw + 0.02, gy1 + fw + 0.03, z0, W);
		// a brass lip round the slit
		B.box(SLIT.x0 - 0.01, SLIT.y1, z0 - 0.006, SLIT.x1 + 0.01, SLIT.y1 + 0.008, z0, K.BRASS);
	}
	// the other partition (plain)
	B.box(BACK, PLINTH, ZC - 0.02, FRONT, H - 0.06, ZC + 0.02, W);

	// the ledge, on two brackets
	B.box(LEDGE.x0, LEDGE.top - 0.035, LEDGE.z0, LEDGE.x1, LEDGE.top, LEDGE.z1, W);
	B.tube([[LEDGE.x0, LEDGE.top - 0.018, LEDGE.z0], [LEDGE.x1, LEDGE.top - 0.018, LEDGE.z0]], 0.02, W, 8);
	for (const x of [LEDGE.x0 + 0.1, LEDGE.x1 - 0.1]) {
		const pts = [];
		for (let i = 0; i <= 8; i++) {
			const u = i / 8;
			pts.push([x, LEDGE.top - 0.04 - 0.22 * u, LEDGE.z1 - 0.02 - 0.22 * Math.cos(u * PI / 2)]);
		}
		B.tube(pts, 0.018, DK, 6);
	}
	// the bench in the open booth, with a red velvet cushion
	B.box(BACK + 0.06, 0.12, ZA, FRONT - 0.1, 0.44, ZA + 0.42, DK);
	B.box(BACK + 0.08, 0.44, ZA + 0.01, FRONT - 0.12, 0.52, ZA + 0.41, K.CUSHION);
	// and in the closed one
	B.box(BACK + 0.06, 0.12, ZD - 0.42, FRONT - 0.1, 0.44, ZD, DK);
	// the little lamp on the open booth's side wall: a brass plate, an arm, a glass shade
	B.box(SCONCE[0] - 0.05, SCONCE[1] - 0.16, ZA, SCONCE[0] + 0.05, SCONCE[1] - 0.02, ZA + 0.012, K.BRASS);
	B.tube([[SCONCE[0], SCONCE[1] - 0.09, ZA + 0.012], [SCONCE[0], SCONCE[1] - 0.09, SCONCE[2] - 0.01], [SCONCE[0], SCONCE[1] - 0.05, SCONCE[2]]], 0.006, K.BRASS, 6);
	B.lathe(SCONCE[0], SCONCE[2], [[0.0, SCONCE[1] - 0.05], [0.028, SCONCE[1] - 0.035], [0.034, SCONCE[1] + 0.01], [0.024, SCONCE[1] + 0.06], [0.026, SCONCE[1] + 0.065]], K.LAMPGLASS, 16);
	// the priest's stool and his lamp
	B.box(SEAT.x - 0.22, 0.12, SEAT.z - 0.24, SEAT.x + 0.22, SEAT.y - 0.05, SEAT.z + 0.16, DK);
	B.box(SEAT.x - 0.24, SEAT.y - 0.05, SEAT.z - 0.26, SEAT.x + 0.24, SEAT.y, SEAT.z + 0.18, K.CUSHION);
	// (a small lamp hanging from the ceiling on a chain)
	B.tube([[LAMP[0], H - 0.06, LAMP[2]], [LAMP[0], LAMP[1] + 0.07, LAMP[2]]], 0.005, K.BRASS, 5);
	B.lathe(LAMP[0], LAMP[2], [[0.0, LAMP[1] + 0.09], [0.03, LAMP[1] + 0.08], [0.02, LAMP[1] + 0.06]], K.BRASS, 12);
	B.lathe(LAMP[0], LAMP[2], [[0.0, LAMP[1] - 0.06], [0.035, LAMP[1] - 0.04], [0.045, LAMP[1]], [0.035, LAMP[1] + 0.05], [0.018, LAMP[1] + 0.07]], K.LAMPGLASS, 16);

	// the front: a board with a pointed-arch opening for each booth and
	// the priest's door between them
	const xf = FRONT, xb = FRONT + T;   // (the front's back and front faces)
	function archBoard(z0, z1, open) {
		const zc = (z0 + z1) / 2;
		const N = 40;
		const ys = [];
		for (let i = 0; i <= N; i++) ys.push(PLINTH + (H - 0.2 - PLINTH) * i / N);
		// (more strips through the arch)
		const yy = [];
		ys.forEach((y) => yy.push(y));
		for (let i = 1; i < 24; i++) yy.push(ARCH.ys + (ARCH.apex - ARCH.ys) * i / 24);
		yy.sort((a, b) => a - b);
		for (let i = 0; i < yy.length - 1; i++) {
			const y0 = yy[i], y1 = yy[i + 1];
			if (y1 - y0 < 1e-4) continue;
			const h0 = open ? archHalf(y0, ARCH.ys, ARCH.a, ARCH.r) : 0;
			const h1 = open ? archHalf(y1, ARCH.ys, ARCH.a, ARCH.r) : 0;
			// left and right of the opening, front face
			const uv = (z, y) => [z, y];
			B.quad([xb, y0, zc - h0], [xb, y0, z0], [xb, y1, z0], [xb, y1, zc - h1], W, [uv(zc - h0, y0), uv(z0, y0), uv(z0, y1), uv(zc - h1, y1)]);
			B.quad([xb, y0, z1], [xb, y0, zc + h0], [xb, y1, zc + h1], [xb, y1, z1], W, [uv(z1, y0), uv(zc + h0, y0), uv(zc + h1, y1), uv(z1, y1)]);
			if (h0 > 0 || h1 > 0) {
				// the reveals of the opening
				B.quad([xf, y0, zc - h0], [xb, y0, zc - h0], [xb, y1, zc - h1], [xf, y1, zc - h1], DK);
				B.quad([xb, y0, zc + h0], [xf, y0, zc + h0], [xf, y1, zc + h1], [xb, y1, zc + h1], DK);
				// the back face inside the booth
				B.quad([xf, y0, z0], [xf, y0, zc - h0], [xf, y1, zc - h1], [xf, y1, z0], W);
				B.quad([xf, y0, zc + h0], [xf, y0, z1], [xf, y1, z1], [xf, y1, zc + h1], W);
			}
		}
		// above the strips: the band under the cornice
		B.box(xf, H - 0.2, z0, xb, H - 0.06, z1, W);
		// a carved band across, and a moulding round the arch
		B.box(xb, H - 0.42, z0 + 0.05, xb + 0.012, H - 0.24, z1 - 0.05, C);
		if (open) {
			const pts = [];
			for (let i = 0; i <= 30; i++) {
				const u = i / 30;
				// up the left side, over the point, down the right
				const y = u < 0.5 ? PLINTH + (ARCH.apex - PLINTH) * (u * 2) : ARCH.apex - (ARCH.apex - PLINTH) * ((u - 0.5) * 2);
				const s = u < 0.5 ? -1 : 1;
				pts.push([xb + 0.01, Math.min(y, ARCH.apex - 0.002), zc + s * (archHalf(y, ARCH.ys, ARCH.a, ARCH.r) + 0.03)]);
			}
			B.tube(pts, 0.022, DK, 6);
		}
	}
	archBoard(ZA, ZB, true);
	archBoard(ZC, ZD, true);
	// the priest's door: a pointed-arch panel, a carved plaque, a brass handle
	{
		const z0 = ZB, z1 = ZC, zc = (z0 + z1) / 2;
		B.box(xf, PLINTH, z0, xb, H - 0.06, z1, W);
		const pa = { ys: 1.85, a: 0.55, r: 0.8 };
		const pts = [];
		for (let i = 0; i <= 40; i++) {
			const u = i / 40;
			const apex = pa.ys + Math.sqrt(pa.r * pa.r - (pa.r - pa.a) * (pa.r - pa.a));
			const y = u < 0.5 ? 0.35 + (apex - 0.35) * (u * 2) : apex - (apex - 0.35) * ((u - 0.5) * 2);
			const s = u < 0.5 ? -1 : 1;
			pts.push([xb + 0.012, Math.min(y, apex - 0.002), zc + s * archHalf(y, pa.ys, pa.a, pa.r)]);
		}
		pts.push(pts[0]);
		B.tube(pts, 0.02, DK, 6);
		B.box(xb, 0.95, zc - 0.22, xb + 0.015, 1.30, zc + 0.22, C);
		B.box(xb, 0.35, zc - 0.42, xb + 0.01, 0.75, zc + 0.42, DK);
		B.tube([[xb + 0.03, 1.12, z1 - 0.13], [xb + 0.06, 1.12, z1 - 0.13], [xb + 0.06, 1.12, z1 - 0.2]], 0.009, K.BRASS, 6);
	}

	// posts with pinnacles, and a gable over each bay
	const posts = [ZA - 0.02, ZB, ZC, ZD + 0.02];
	posts.forEach((z, i) => {
		const inner = i === 1 || i === 2;
		const h = 0.075;
		const top = H + (inner ? 0.62 : 0.40);
		B.box(FRONT + 0.06, 0, z - h, FRONT + 0.06 + 2 * h, top, z + h, W);
		// a chamfered capital, the spire, small crockets and a finial
		B.box(FRONT + 0.04, top - 0.04, z - h - 0.02, FRONT + 0.08 + 2 * h, top, z + h + 0.02, DK);
		const sx = FRONT + 0.06 + h, sh = inner ? 0.62 : 0.50;
		B.spire(sx, z, top, h * 0.95, top + sh, W);
		for (let k = 1; k <= 3; k++) {
			const y = top + sh * k / 4.2, r = h * 0.95 * (1 - k / 4.2) + 0.02;
			for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
				B.tube([[sx + dx * (r - 0.02), y - 0.02, z + dz * (r - 0.02)], [sx + dx * (r + 0.015), y + 0.03, z + dz * (r + 0.015)]], 0.008, DK, 4);
			}
		}
		B.lathe(sx, z, [[0.0, top + sh - 0.02], [0.03, top + sh + 0.03], [0.022, top + sh + 0.07], [0.0, top + sh + 0.1]], W, 10);
	});
	// gables: a triangle of carved board with a roundel, edged with a moulding
	// and crockets, a finial at the peak
	const gable = (z0, z1, rise) => {
		const zc = (z0 + z1) / 2, x = FRONT + 0.075, y0 = H + 0.07, peak = y0 + rise;
		const n = [1, 0, 0];
		const i0 = B.v([x, y0, z0], n, C, [z0, y0]), i1 = B.v([x, y0, z1], n, C, [z1, y0]), i2 = B.v([x, peak, zc], n, C, [zc, peak]);
		B.idx.push(i0, i1, i2);
		const i3 = B.v([x - 0.04, y0, z0], [-1, 0, 0], W), i4 = B.v([x - 0.04, y0, z1], [-1, 0, 0], W), i5 = B.v([x - 0.04, peak, zc], [-1, 0, 0], W);
		B.idx.push(i3, i5, i4);
		const L = [], R = [];
		for (let i = 0; i <= 10; i++) {
			const u = i / 10;
			L.push([x + 0.02, y0 + rise * u, z0 + (zc - z0) * u]);
			R.push([x + 0.02, y0 + rise * u, z1 + (zc - z1) * u]);
		}
		B.tube(L, 0.022, DK, 6);
		B.tube(R, 0.022, DK, 6);
		for (let i = 2; i <= 8; i += 2) {
			for (const P of [L[i], R[i]]) B.tube([P, [P[0] + 0.01, P[1] + 0.06, P[2] + (P === L[i] ? -0.02 : 0.02)]], 0.01, DK, 4);
		}
		B.lathe(x, zc, [[0.0, peak], [0.035, peak + 0.06], [0.022, peak + 0.12], [0.0, peak + 0.16]].map(([r, y]) => [r, y]), W, 10);
		// the roundel, a ring of moulding
		const rr = Math.min(0.17, rise * 0.32), cy = y0 + rise * 0.38, ring = [];
		for (let i = 0; i <= 24; i++) { const a = i / 24 * PI * 2; ring.push([x + 0.012, cy + Math.sin(a) * rr, zc + Math.cos(a) * rr]); }
		B.tube(ring, 0.012, DK, 5);
	};
	gable(ZA - 0.02, ZB, 0.52);
	gable(ZB, ZC, 0.82);
	gable(ZC, ZD + 0.02, 0.52);

	// the ink pot: a squat bottle of dark glass with a brass collar
	B.lathe(INK.x, INK.z, [[0.0, LEDGE.top], [0.036, LEDGE.top + 0.001], [INK.r, LEDGE.top + 0.012], [INK.r * 1.02, LEDGE.top + 0.035],
		[0.036, LEDGE.top + 0.052], [0.02, LEDGE.top + 0.062], [0.016, LEDGE.top + 0.068]], K.INKGLASS, 24);
	B.lathe(INK.x, INK.z, [[0.016, LEDGE.top + 0.064], [0.021, LEDGE.top + 0.066], [0.022, LEDGE.top + 0.075], [0.016, LEDGE.top + 0.076], [0.0, LEDGE.top + 0.072]], K.BRASS, 20);

	// the quill: a curved shaft and the vane of a feather either side
	{
		const a = QUILL.a, b = QUILL.b, N = 26;
		const P = (u) => {
			// a gentle curve, bowing up and to the side
			const bow = Math.sin(u * PI) * 0.025;
			return [a[0] + (b[0] - a[0]) * u + bow * 0.6, a[1] + (b[1] - a[1]) * u + bow * 0.4, a[2] + (b[2] - a[2]) * u + bow];
		};
		const shaft = [];
		for (let i = 0; i <= N; i++) shaft.push(P(i / N));
		B.tube(shaft, (u) => 0.0028 * (1 - 0.7 * u) + 0.0006, K.QUILL, 5);
		// the vane: two strips from the shaft, widest two thirds along
		const dir = B.norm(B.sub(b, a));
		const side = B.norm(B.cross(dir, [0.2, 1, 0.1]));
		const up = B.cross(side, dir);
		for (const s of [-1, 1]) {
			const base = B.pos.length / 3;
			for (let i = 0; i <= N; i++) {
				const u = i / N;
				const c = P(u);
				const wv = u < 0.28 ? 0 : (s > 0 ? 0.030 : 0.020) * Math.sin(PI * Math.pow((u - 0.28) / 0.72, 0.75));
				const droop = wv * 0.25;
				const e = [c[0] + side[0] * s * wv - up[0] * droop, c[1] + side[1] * s * wv - up[1] * droop, c[2] + side[2] * s * wv - up[2] * droop];
				B.v(c, up, K.QUILL, [u, 0]);
				B.v(e, up, K.QUILL, [u, s]);
			}
			for (let i = 0; i < N; i++) {
				const q = base + i * 2;
				B.idx.push(q, q + 2, q + 1, q + 1, q + 2, q + 3);
			}
		}
	}
	return B.orient();
}

// the bay's own stone surfaces are part of the hall (map.js adds them)
function addBay(addBox, pushQuadFloor) {
	const WALL = 0.35, TOP = BAY.top, X0 = BAY.x0;
	// back wall, sides, ceiling
	addBox(X0 - 0.35, 0, BAY.z0 - 0.35, X0, TOP + 0.35, BAY.z1 + 0.35);
	addBox(X0, 0, BAY.z0 - 0.35, -WALL, TOP, BAY.z0);
	addBox(X0, 0, BAY.z1, -WALL, TOP, BAY.z1 + 0.35);
	addBox(X0, TOP, BAY.z0, -WALL, TOP + 0.35, BAY.z1);
	// a marble frame round the opening: pilasters and a lintel with a cornice
	addBox(WALL, 0, BAY.z0 - 0.42, WALL + 0.16, TOP, BAY.z0);
	addBox(WALL, 0, BAY.z1, WALL + 0.16, TOP, BAY.z1 + 0.42);
	addBox(WALL, TOP, BAY.z0 - 0.5, WALL + 0.18, TOP + 0.42, BAY.z1 + 0.5);
	addBox(WALL, TOP + 0.42, BAY.z0 - 0.6, WALL + 0.26, TOP + 0.52, BAY.z1 + 0.6);
	addBox(WALL, 0, BAY.z0 - 0.5, WALL + 0.22, 0.42, BAY.z0);
	addBox(WALL, 0, BAY.z1, WALL + 0.22, 0.42, BAY.z1 + 0.5);
	// the step up into it
	addBox(-WALL - 0.01, 0, BAY.z0, WALL + 0.12, 0.02, BAY.z1);
	pushQuadFloor(X0, BAY.z0, -WALL, BAY.z1);
}


/* ---------------------------------------------------------------
 * DRAWING
 * ------------------------------------------------------------- */

module.exports = (regl) => {
	const LANTERN = require('./lanterns');
	const NIGHT = env.GLSL;
	const g = build();

	const COMMON = `
	precision highp float;
	${NIGHT}
	uniform float time;
	${LANTERN.lanternGLSL()}
	${SH.roomGLSL()}
	${lightGLSL()}
	float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
	float vnoise(vec2 p) {
		vec2 i = floor(p), f = fract(p);
		vec2 u = f * f * (3.0 - 2.0 * f);
		return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
	}`;

	const VERT = `
	precision highp float;
	uniform mat4 proj, view;
	uniform float yScale, time;
	attribute vec3 position, normal;
	attribute float kind;
	attribute vec2 uv;
	varying vec3 v_pos, v_n, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	void main() {
		v_pos = position; v_n = normal; v_kind = kind; v_uv = uv;
		v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
		vec3 p = position; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`;


	const booth = regl({
		vert: VERT,
		frag: `${COMMON}
		varying vec3 v_pos, v_n, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		void main() {
			vec3 N = normalize(v_n);
			if (!gl_FrontFacing) N = -N;
			vec3 V = normalize(v_eye - v_pos);
			float k = v_kind;
			vec3 base;
			float gloss = 0.25;
			// the face's own plane, for the grain
			vec2 q = abs(N.x) > 0.6 ? v_pos.zy : (abs(N.z) > 0.6 ? v_pos.xy : v_pos.xz);
			if (k < 0.5 || (k > 7.5 && k < 8.5) || (k > 0.5 && k < 1.5)) {
				// walnut: long grain, darker in the pores, polished
				float gr = vnoise(vec2(q.x * 7.0, q.y * 0.6)) * 0.6 + vnoise(vec2(q.x * 31.0, q.y * 2.0)) * 0.4;
				float ring = sin(q.x * 34.0 + gr * 9.0 + vnoise(q * vec2(4.0, 0.4)) * 6.0) * 0.5 + 0.5;
				base = mix(vec3(0.20, 0.105, 0.055), vec3(0.37, 0.21, 0.11), gr * 0.7 + ring * 0.3);
				if (k > 7.5) base *= 0.62;     // the darker mouldings
				gloss = 0.45;
				if (k > 0.5 && k < 1.5) {
					// carved: a row of quatrefoils, cut in
					vec2 c = fract(v_uv * vec2(5.5, 5.5)) - 0.5;
					float d = min(min(length(c - vec2(0.2, 0.0)), length(c + vec2(0.2, 0.0))), min(length(c - vec2(0.0, 0.2)), length(c + vec2(0.0, 0.2))));
					float cut = smoothstep(0.24, 0.20, d) - smoothstep(0.17, 0.13, d) * 0.6;
					base *= 1.0 - 0.55 * cut;
					base *= 0.85;
				}
			} else if (k < 2.5 || (k > 2.5 && k < 3.5)) {
				// velvet: deep maroon (the cushions a little redder)
				base = k < 2.5 ? vec3(0.34, 0.018, 0.022) : vec3(0.30, 0.030, 0.030);
				base *= 0.9 + 0.2 * vnoise(q * 60.0);
				gloss = 0.0;
			} else if (k < 4.5) {
				base = vec3(0.42, 0.30, 0.14);
				gloss = 0.85;
			} else if (k < 5.5) {
				// the ink pot: almost black green glass
				base = vec3(0.012, 0.022, 0.018);
				gloss = 1.0;
			} else if (k < 6.5) {
				// the quill: ivory, greying towards the edge, with fine barbs
				float across = abs(v_uv.y);
				float barbs = 0.5 + 0.5 * sin((v_uv.x * 160.0 - across * 40.0));
				base = mix(vec3(0.82, 0.78, 0.68), vec3(0.48, 0.42, 0.36), smoothstep(0.4, 1.0, across) * 0.7 + smoothstep(0.75, 1.0, v_uv.x) * 0.3);
				base *= 0.85 + 0.15 * barbs;
				// the end of the feather is torn a little
				if (across > 0.9 - 0.25 * vnoise(vec2(v_uv.x * 40.0, 1.0))) discard;
				base = mix(base, vec3(0.02, 0.015, 0.012), 1.0 - smoothstep(0.02, 0.10, v_uv.x));  // ink on the nib
				gloss = 0.1;
			} else {
				// the lamp's glass, lit from within
				vec3 glow = vec3(1.0, 0.72, 0.42) * mix(2.2, 1.6, night);
				gl_FragColor = vec4(glow, 1.0);
				return;
			}
			vec3 spec;
			vec3 light = boothLight(v_pos, N, V, gloss, spec);
			vec3 col = base * light;
			// velvet: a soft bright rim where it turns away from you
			if (k > 1.5 && k < 3.5) col += base * light * 2.4 * pow(1.0 - max(dot(N, V), 0.0), 2.5);
			col += spec * (k > 3.5 && k < 5.5 ? 1.0 : 0.35);
			// polish: a soft reflection of the room
			col += gloss * vec3(0.05, 0.045, 0.04) * pow(1.0 - max(dot(N, V), 0.0), 4.0) * mix(1.0, 0.3, night);
			// the glass: the room and the lamp glinting in it
			if (k > 4.5 && k < 5.5) col += vec3(0.12, 0.13, 0.12) * pow(1.0 - max(dot(N, V), 0.0), 3.0);
			gl_FragColor = vec4(col, 1.0);
		}`,
		attributes: { position: g.pos, normal: g.nrm, kind: g.kind, uv: g.uv },
		elements: g.idx,
	});

	/* the curtains: velvet in deep folds, hanging from a rod; one drawn
	   across its booth, the other gathered back to the side */
	function curtain(z0, z1, gather, folds) {
		const pos = [], nrm = [], kind = [], uv = [], idx = [];
		const NU = 90, NV = 40;
		const x0 = FRONT - 0.02, top = ARCH.apex + 0.08, bottom = PLINTH + 0.015;
		for (let j = 0; j <= NV; j++) {
			const v = j / NV;
			const y = top + (bottom - top) * v;
			for (let i = 0; i <= NU; i++) {
				const u = i / NU;
				// gathered: the cloth bunched near the side, flaring at the hem
				const w = gather ? 0.20 + 0.13 * v * v : (z1 - z0);
				const z = gather ? z0 + u * w : z0 + u * w;
				const amp = gather ? 0.05 + 0.02 * v : 0.035 + 0.01 * Math.sin(u * 7.0);
				const ph = u * folds * PI * 2 + Math.sin(v * 2.0 + u * 5.0) * 0.6;
				const x = x0 - amp * (0.5 + 0.5 * Math.sin(ph)) - (gather ? 0.02 * v : 0);
				const dx = -amp * 0.5 * Math.cos(ph) * folds * PI * 2 / w;
				const n = [1, 0, -dx];
				const l = Math.hypot(n[0], n[1], n[2]);
				pos.push(x, y, z);
				nrm.push(n[0] / l, 0, n[2] / l);
				kind.push(2);
				uv.push(Math.sin(ph), v);
			}
		}
		for (let j = 0; j < NV; j++) {
			for (let i = 0; i < NU; i++) {
				const a = j * (NU + 1) + i, b = a + NU + 1;
				idx.push(a, b, a + 1, a + 1, b, b + 1);
			}
		}
		// (wind the triangles the way the cloth faces: out, towards the hall)
		for (let t = 0; t < idx.length; t += 3) {
			const [a, b, c] = [idx[t], idx[t + 1], idx[t + 2]];
			const P = (i) => [pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]];
			const e1 = [0, 1, 2].map((k) => P(b)[k] - P(a)[k]), e2 = [0, 1, 2].map((k) => P(c)[k] - P(a)[k]);
			const nx = e1[1] * e2[2] - e1[2] * e2[1];
			if (nx < 0) { idx[t + 1] = c; idx[t + 2] = b; }
		}
		return { pos, nrm, kind, uv, idx };
	}
	const cA = curtain(ZA + 0.02, ZA + 0.40, true, 6);
	const cB = curtain(ZC + 0.04, ZD - 0.04, false, 9);
	const cur = { pos: cA.pos.concat(cB.pos), nrm: cA.nrm.concat(cB.nrm), kind: cA.kind.concat(cB.kind), uv: cA.uv.concat(cB.uv), idx: cA.idx.concat(cB.idx.map((i) => i + cA.pos.length / 3)) };
	// the rods
	const curtains = regl({
		vert: `
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, time;
		attribute vec3 position, normal;
		attribute vec2 uv;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_uv;
		void main() {
			vec3 p = position;
			// the hem stirs, very slightly
			float hang = uv.y * uv.y;
			p.x += hang * 0.006 * sin(time * 0.7 + p.z * 4.0);
			p.z += hang * 0.004 * sin(time * 0.5 + p.z * 3.0 + 1.0);
			v_pos = p; v_n = normal; v_uv = uv; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,
		frag: `${COMMON}
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_uv;
		void main() {
			vec3 N = normalize(v_n);
			if (!gl_FrontFacing) N = -N;
			vec3 V = normalize(v_eye - v_pos);
			// deep in a fold the cloth is darker
			float crest = 0.5 + 0.5 * v_uv.x;
			vec3 base = vec3(0.19, 0.020, 0.038) * (0.9 + 0.15 * vnoise(v_pos.zy * vec2(80.0, 6.0)));
			vec3 spec;
			// (the curtains hang just inside the front: they take the hall's light)
			vec3 light = boothLight(v_pos + vec3(0.12, 0.0, 0.0), N, V, 0.0, spec);
			float ao = mix(0.35, 1.0, crest);
			vec3 col = base * light * ao;
			// velvet: the pile catches the light where the cloth turns away
			float rim = pow(1.0 - max(dot(N, V), 0.0), 2.2);
			col += vec3(0.55, 0.16, 0.18) * light * rim * 0.55 * (0.4 + 0.6 * crest);
			// and the hem is a little dustier
			col *= mix(1.0, 0.8, smoothstep(0.92, 1.0, v_uv.y));
			gl_FragColor = vec4(col, 1.0);
		}`,
		attributes: { position: cur.pos, normal: cur.nrm, uv: cur.uv },
		elements: cur.idx,
	});

	// the brass window: a plate with quatrefoils cut out of it
	const grille = regl({
		vert: `
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec3 v_pos, v_eye;
		void main() {
			vec3 p = vec3(${f(GRILLE.x)} + corner.x * ${f(GRILLE.w / 2)}, ${f(GRILLE.y)} + corner.y * ${f(GRILLE.h / 2)}, ${f(GRILLE.z)});
			v_pos = p; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,
		frag: `${COMMON}
		varying vec3 v_pos, v_eye;
		void main() {
			vec2 g = v_pos.xy - vec2(${f(GRILLE.x)}, ${f(GRILLE.y)});
			float hole = grilleHole(g);
			if (hole > 0.5) discard;
			vec3 N = vec3(0.0, 0.0, v_eye.z < ${f(GRILLE.z)} ? -1.0 : 1.0);
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			vec3 light = boothLight(v_pos + N * 0.01, N, V, 0.8, spec);
			// dark old bronze, its edges catching the lamp behind it
			vec3 base = vec3(0.16, 0.10, 0.05);
			vec3 col = base * light + spec * 0.6;
			float edge = smoothstep(0.25, 0.5, hole);
			col += vec3(1.0, 0.66, 0.34) * edge * mix(0.35, 0.22, night);
			gl_FragColor = vec4(col, 1.0);
		}`,
		attributes: { corner: [[-1, -1], [1, -1], [1, 1], [-1, -1], [1, 1], [-1, 1]] },
		count: 6,
		cull: { enable: false }
	});

	// the priest's compartment glows behind the brass: a soft warm haze
	// filling it, seen through the holes
	const glowBox = regl({
		vert: `
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		varying vec2 v_c;
		void main() {
			vec3 p = vec3(${f(GRILLE.x)} + corner.x * 0.75, ${f(GRILLE.y)} + corner.y * 0.9, ${f(ZC - 0.03)});
			v_c = corner;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,
		frag: `
		precision highp float;
		uniform float night;
		varying vec2 v_c;
		void main() {
			float r = length(v_c * vec2(0.8, 1.0));
			vec3 col = vec3(1.0, 0.62, 0.30) * pow(max(1.0 - r, 0.0), 1.6) * mix(0.16, 0.10, night);
			gl_FragColor = vec4(col, 1.0);
		}`,
		attributes: { corner: [[-1, -1], [1, -1], [1, 1], [-1, -1], [1, 1], [-1, 1]] },
		count: 6,
		depth: { enable: true, mask: false },
		blend: { enable: true, func: { srcRGB: 'one', dstRGB: 'one', srcAlpha: 'zero', dstAlpha: 'one' } }
	});

	// the light through the brass, seen in the air of the booth: a few
	// slices of the room, each glowing where the lamp's light crosses it
	const SLICES = 14;
	const sl = [];
	for (let i = 0; i < SLICES; i++) {
		[[-1, -1], [1, -1], [1, 1], [-1, -1], [1, 1], [-1, 1]].forEach((c) => sl.push(c[0], c[1], (i + 0.5) / SLICES));
	}
	const beams = regl({
		vert: `
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 c;
		varying vec3 v_pos;
		void main() {
			// slices across the booth, from the window back towards the bench
			vec3 p = vec3(${f(MID_X)} + c.x * ${f((FRONT - BACK) / 2 - 0.02)}, 0.9 + (c.y + 1.0) * 0.8, ${f(ZB - 0.03)} - c.z * 1.25);
			v_pos = p;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,
		frag: `
		precision highp float;
		uniform float night, time;
		${lightGLSL().split('// the candle\'s light is hidden')[0]}
		varying vec3 v_pos;
		void main() {
			float T = throughGrille(v_pos, 0.0);
			float d = length(v_pos - ${v3(LAMP)});
			// dust drifting in the beam
			float dust = 0.65 + 0.35 * sin(v_pos.x * 23.0 + time * 0.3) * sin(v_pos.y * 17.0 - time * 0.21) * sin(v_pos.z * 19.0 + time * 0.17);
			vec3 col = vec3(1.0, 0.68, 0.36) * T * dust * 0.035 / (0.4 + d * d * 0.5) * mix(1.0, 0.7, night);
			gl_FragColor = vec4(col, 1.0);
		}`.replace('float grilleHole', 'float grilleHole'),
		attributes: { c: { buffer: regl.buffer(sl), size: 3 } },
		count: sl.length / 3,
		depth: { enable: true, mask: false },
		blend: { enable: true, func: { srcRGB: 'one', dstRGB: 'one', srcAlpha: 'zero', dstAlpha: 'one' } },
		cull: { enable: false }
	});

	/* the paper: old, light brown, a little cockled, with the words in
	   ink; it folds in half (the near half over onto the far) and slides
	   into the slit */
	const paperCanvas = (() => {
		if (typeof document === 'undefined') return null;
		const c = document.createElement('canvas');
		c.width = 512; c.height = 652;
		const x = c.getContext('2d');
		x.fillStyle = '#cdb38a';
		x.fillRect(0, 0, c.width, c.height);
		// fibres and mottling
		let s = 7;
		const R = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
		for (let i = 0; i < 2400; i++) {
			x.fillStyle = `rgba(${R() < 0.5 ? '90,62,30' : '245,230,200'},${0.03 + R() * 0.05})`;
			const px = R() * c.width, py = R() * c.height;
			x.fillRect(px, py, 1 + R() * 14, 1);
		}
		for (let i = 0; i < 26; i++) {
			const cx = R() * c.width, cy = R() * c.height, r = 20 + R() * 90;
			const gr = x.createRadialGradient(cx, cy, 0, cx, cy, r);
			gr.addColorStop(0, `rgba(120,80,35,${0.04 + R() * 0.06})`);
			gr.addColorStop(1, 'rgba(120,80,35,0)');
			x.fillStyle = gr;
			x.fillRect(cx - r, cy - r, r * 2, r * 2);
		}
		// browner towards the edges, as old paper is
		const e = x.createRadialGradient(c.width / 2, c.height / 2, c.width * 0.3, c.width / 2, c.height / 2, c.height * 0.72);
		e.addColorStop(0, 'rgba(110,70,30,0)');
		e.addColorStop(1, 'rgba(110,70,30,0.38)');
		x.fillStyle = e;
		x.fillRect(0, 0, c.width, c.height);
		return c;
	})();
	const paperTex = paperCanvas ? regl.texture({ data: paperCanvas, min: 'linear', mag: 'linear', flipY: false }) : regl.texture();
	const inkTex = regl.texture({ shape: [8, 8], data: new Uint8Array(8 * 8 * 4) });
	const PN = [18, 24];
	const pGrid = [], pIdx = [];
	for (let j = 0; j <= PN[1]; j++) for (let i = 0; i <= PN[0]; i++) pGrid.push(i / PN[0], j / PN[1]);
	for (let j = 0; j < PN[1]; j++) for (let i = 0; i < PN[0]; i++) {
		const a = j * (PN[0] + 1) + i, b = a + PN[0] + 1;
		pIdx.push(a, a + 1, b, a + 1, b + 1, b);
	}
	const paper = regl({
		vert: `
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, fold, slide;
		attribute vec2 st;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// s across (texture left = +x), t from the near edge (0) to the far (1)
			float s = st.x, t = st.y;
			float x = ${f(PAPER.cx + PAPER.w / 2)} - s * ${f(PAPER.w)};
			float zNear = ${f(PAPER.cz - PAPER.d / 2)};
			vec3 p = vec3(x, ${f(PAPER.y)}, zNear + t * ${f(PAPER.d)});
			vec3 n = vec3(0.0, 1.0, 0.0);
			// a slight cockle
			p.y += 0.0012 * sin(s * 7.0 + t * 3.0) * sin(t * 5.0);
			// the near half folds up and over onto the far half
			if (t < 0.5) {
				float a = fold * 3.14159 * 0.985;
				float dd = (0.5 - t) * ${f(PAPER.d)};
				float zf = zNear + 0.5 * ${f(PAPER.d)};
				p.z = zf - dd * cos(a);
				p.y = ${f(PAPER.y)} + dd * sin(a) + 0.0016 * fold;
				n = vec3(0.0, cos(a), sin(a));
			}
			// then the whole of it slides through the slit
			p.z += slide * 0.40;
			p.y += 0.004 * fold;
			v_pos = p; v_n = n; v_st = st; v_eye = -vec3(dot(view[0].xyz, view[3].xyz), dot(view[1].xyz, view[3].xyz), dot(view[2].xyz, view[3].xyz));
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,
		frag: `${COMMON}
		uniform sampler2D paperTex, inkTex;
		uniform float fold;
		varying vec3 v_pos, v_n, v_eye;
		varying vec2 v_st;
		void main() {
			// beyond the slit it is inside the wall
			if (v_pos.z > ${f(ZB + 0.015)}) discard;
			vec3 N = normalize(v_n);
			bool top = gl_FrontFacing;
			if (!top) N = -N;
			vec3 V = normalize(v_eye - v_pos);
			vec2 tuv = vec2(v_st.x, 1.0 - v_st.y);
			vec3 base = texture2D(paperTex, tuv).rgb;
			if (top) {
				vec4 ink = texture2D(inkTex, tuv);
				base = mix(base, vec3(0.06, 0.035, 0.02), ink.a * 0.92);
			} else {
				base *= 0.92;
			}
			vec3 spec;
			vec3 light = boothLight(v_pos, N, V, 0.05, spec);
			// a little light through the sheet from behind
			vec3 col = base * light;
			// the crease
			col *= 1.0 - 0.18 * (1.0 - smoothstep(0.0, 0.025, abs(v_st.y - 0.5))) * smoothstep(0.0, 0.2, fold);
			gl_FragColor = vec4(col, 1.0);
		}`,
		attributes: { st: { buffer: regl.buffer(pGrid), size: 2 } },
		elements: pIdx,
		uniforms: {
			fold: () => STATE.fold,
			slide: () => STATE.slide,
			paperTex, inkTex
		},
		cull: { enable: false }
	});

	/* the candle (at night): a short church candle on a brass dish, its
	   flame and a soft glow */
	const cb = Builder();
	cb.lathe(CANDLE.x, CANDLE.z, [[0.0, LEDGE.top], [0.048, LEDGE.top + 0.002], [0.052, LEDGE.top + 0.012], [0.046, LEDGE.top + 0.014], [0.022, LEDGE.top + 0.012], [0.0, LEDGE.top + 0.012]], K.BRASS, 24);
	cb.lathe(CANDLE.x, CANDLE.z, [[0.0, LEDGE.top + 0.012], [CANDLE.r, LEDGE.top + 0.012], [CANDLE.r * 1.02, LEDGE.top + 0.012 + CANDLE.h * 0.6],
		[CANDLE.r, LEDGE.top + 0.012 + CANDLE.h], [CANDLE.r * 0.75, LEDGE.top + 0.012 + CANDLE.h - 0.004], [0.0, LEDGE.top + 0.012 + CANDLE.h - 0.008]], 9, 20);
	cb.tube([[CANDLE.x, LEDGE.top + 0.012 + CANDLE.h - 0.008, CANDLE.z], [CANDLE.x + 0.001, LEDGE.top + 0.012 + CANDLE.h + 0.012, CANDLE.z]], 0.0012, 8, 4);
	cb.orient();
	const candleBody = regl({
		vert: VERT,
		frag: `${COMMON}
		varying vec3 v_pos, v_n, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		void main() {
			vec3 N = normalize(v_n);
			if (!gl_FrontFacing) N = -N;
			vec3 V = normalize(v_eye - v_pos);
			vec3 spec;
			float isBrass = step(3.5, v_kind) * step(v_kind, 4.5);
			float isWick = step(7.5, v_kind) * step(v_kind, 8.5);
			vec3 base = isBrass > 0.5 ? vec3(0.42, 0.30, 0.14) : (isWick > 0.5 ? vec3(0.02) : vec3(0.86, 0.80, 0.66));
			vec3 light = boothLight(v_pos, N, V, isBrass > 0.5 ? 0.85 : 0.1, spec);
			vec3 col = base * light + spec * (isBrass > 0.5 ? 1.0 : 0.2);
			// the wax glows near the flame
			if (isBrass < 0.5 && isWick < 0.5) {
				float up = smoothstep(${f(LEDGE.top + CANDLE.h * 0.4)}, ${f(LEDGE.top + 0.012 + CANDLE.h)}, v_pos.y);
				col += vec3(1.0, 0.55, 0.22) * up * 0.22 * candleFlicker();
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,
		attributes: { position: cb.pos, normal: cb.nrm, kind: cb.kind, uv: cb.uv },
		elements: cb.idx,
	});
	const flame = regl({
		vert: `
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, time, halo;
		attribute vec2 corner;
		varying vec2 v_uv;
		varying float v_fl;
		void main() {
			v_fl = 0.85 + 0.09 * sin(time * 11.0) + 0.06 * sin(time * 27.0);
			float sway = 0.0025 * sin(time * 3.1) + 0.0015 * sin(time * 8.7);
			vec3 right = vec3(view[0][0], view[1][0], view[2][0]);
			vec2 size = halo > 0.5 ? vec2(0.07, 0.07) : vec2(0.0075, 0.021) * v_fl;
			vec3 p = ${v3(CANDLE.flame)} + right * corner.x * size.x + vec3(0.0, 1.0, 0.0) * corner.y * size.y;
			p.x += sway * (corner.y + 1.0) * 0.5 * (1.0 - halo);
			v_uv = corner;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,
		frag: `
		precision highp float;
		uniform float night, halo;
		varying vec2 v_uv;
		varying float v_fl;
		void main() {
			vec3 col;
			if (halo > 0.5) {
				float r = length(v_uv);
				col = vec3(1.0, 0.58, 0.24) * pow(max(1.0 - r, 0.0), 3.0) * 0.09 * v_fl;
			} else {
				vec2 q = vec2(v_uv.x / (1.0 - 0.55 * max(v_uv.y, 0.0)), v_uv.y);
				float r = length(q * vec2(1.0, 0.85));
				float body = 1.0 - smoothstep(0.55, 1.0, r);
				float core = 1.0 - smoothstep(0.0, 0.5, length((v_uv - vec2(0.0, -0.35)) * vec2(1.6, 1.0)));
				col = mix(vec3(1.0, 0.52, 0.16), vec3(1.0, 0.90, 0.66), core) * (body * 1.3 + core * 0.7);
				col += vec3(0.15, 0.25, 0.6) * (1.0 - smoothstep(0.0, 0.35, length(v_uv - vec2(0.0, -0.85)))) * 0.4;
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,
		attributes: { corner: [[-1, -1], [1, -1], [1, 1], [-1, -1], [1, 1], [-1, 1]] },
		count: 6,
		uniforms: { halo: regl.prop('halo') },
		depth: { enable: true, mask: false },
		blend: { enable: true, func: { srcRGB: 'one', dstRGB: 'one', srcAlpha: 'zero', dstAlpha: 'one' } }
	});

	let inkShape = [0, 0];
	// it is built where it always stood and moved, whole, into the stair hall
	const shift = regl({ uniforms: { view: regl.prop('view') } });
	const shifted = new Float32Array(16);
	function draw(opts) {
		mat4.translate(shifted, opts.view, SH.OFF);
		shift({ view: shifted }, () => drawHere(opts));
	}
	function drawHere(opts) {
		const reflected = opts && opts.reflected;
		booth();
		curtains();
		grille();
		if (STATE.ink && STATE.inkDirty) {
			const c = STATE.ink;
			if (inkShape[0] !== c.width || inkShape[1] !== c.height) {
				inkTex({ data: c, min: 'linear', mag: 'linear', flipY: false });
				inkShape = [c.width, c.height];
			} else {
				inkTex.subimage(c);
			}
			STATE.inkDirty = false;
		}
		if (STATE.shown) paper();
		if (env.night > 0.01) {
			candleBody();
			if (!reflected) {
				flame({ halo: 1 });
				flame({ halo: 0 });
			}
		}
		if (!reflected) {
			glowBox();
			beams();
		}
	}
	return draw;
};

module.exports.addBay = addBay;
module.exports.BAY = BAY;
module.exports.OFF = SH.OFF;
module.exports.STATE = STATE;
const moved = (p) => [p[0] + SH.OFF[0], p[1] + SH.OFF[1], p[2] + SH.OFF[2]];
module.exports.SHOTS = Object.fromEntries(Object.entries(SHOTS).map(([k, v]) => [k, Object.assign({}, v, { eye: moved(v.eye), target: moved(v.target) })]));
module.exports.SEAT = SEAT;
module.exports.LAMP = LAMP;
module.exports.SCONCE = SCONCE;
module.exports.GRILLE = GRILLE;
module.exports.PAPER = PAPER;
module.exports.ZONE = { FRONT, BACK, ZA, ZB, ZC, ZD };

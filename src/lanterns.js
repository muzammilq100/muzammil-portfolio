'use strict';

/*
 * LANTERNS
 * --------
 * Gothic wrought-iron lanterns: a six-sided cage of iron with leaded glass
 * in a diamond lattice, a pointed roof with little pinnacles at its
 * corners and a finial, held out from the wall on a scrolled iron bracket.
 *
 * They hang on the inner faces of the hall's pillars, either side of the
 * masterpiece, on the corridor's pilasters between its paintings and on
 * the wall either side of the Pietà. In the tree room there is only one,
 * a small one standing on the round bench just beyond his head.
 *
 * By day they are unlit. At night a flame burns in each, and its light
 * comes out through the glass: the lead lattice and the iron posts throw
 * a pattern of diamonds and bars onto the wall behind, the floor and
 * whatever is near (lanternGLSL() is shared with the other shaders).
 * A flame's light flickers a little, softened by the glass.
 */

const env = require('./env');
const { C: WING } = require('./wing');
const { A: COURT, BENCH } = require('./alcove');

const PI = Math.PI;

// the hall's free-standing pillars (map.js): 1.15 m square
const COL_Z = [18, 29, 40];
const COL_HALF = 0.575;

// one lantern: where its flame is (x, y, z), which way it faces out
// from what it hangs on (o: unit vector in xz), how far the wall is behind
// the flame (back), how wide what it hangs on is (hw, 99 for a wall),
// its size (s), its brightness (k) and how far its light reaches (range)
const L = [];
const wallLantern = (x, y, z, o, back, hw, extra) =>
	L.push(Object.assign({ x, y, z, o, back, hw, s: 1.0, k: 1.0, range: 7.0, mount: 'wall' }, extra || {}));

// the hall's pillars, on the face towards the middle of the hall
COL_Z.forEach((z) => {
	wallLantern(1.25 + COL_HALF + 0.48, 3.25, z, [1, 0], 0.48, COL_HALF, { s: 1.2 });
	wallLantern(12.75 - COL_HALF - 0.48, 3.25, z, [-1, 0], 0.48, COL_HALF, { s: 1.2 });
});
// either side of the masterpiece
[3.0, 11.0].forEach((x) => wallLantern(x, 3.45, WING.hallEnd - 0.5, [0, -1], 0.5, 99, { s: 1.2 }));
// the corridor's pilasters on the painting wall, between the paintings
// and the statue niches
const PIERS = [14.63, 19.63, 24.03, 28.43, 32.83, WING.x1 - 0.28];
PIERS.forEach((x) => wallLantern(x, 3.15, WING.z0 + 0.16 + 0.44, [0, 1], 0.44, 0.28));
// either side of the Pietà
[3.0, 8.8].forEach((z) => wallLantern(0.35 + 0.44, 2.75, z, [1, 0], 0.44, 99));
// the tree room: a small lantern on the round bench beyond his head
{
	const r = (BENCH.inner + BENCH.outer) / 2;
	const a = Math.atan2(-1.12, -0.98);
	L.push({
		x: COURT.cx + Math.cos(a) * r, y: BENCH.seat + 0.155, z: COURT.zc + Math.sin(a) * r,
		o: [Math.cos(a), Math.sin(a)], back: 0, hw: 0, ring: [COURT.cx, COURT.zc, BENCH.outer + 0.07, BENCH.seat], s: 0.52, k: 2.2, range: 3.6, mount: 'table'
	});
}

// the shape, at s = 1 (metres)
const APO = 0.13;          // from the flame to the middle of a glass panel
const HH = 0.21;           // half the height of the glass
const R6 = APO / Math.cos(PI / 6);   // from the flame to a corner post

const f = (x) => x.toFixed(4);

/*
 * shared GLSL: vec3 lanternLight(vec3 p, vec3 N), the warm light of the
 * lanterns reaching point p with normal N (0 by day). The shader must
 * declare uniforms "time" and "night". which: an optional list of lantern
 * indices to include (for shaders that only see one part of the gallery).
 */
function lanternGLSL(which) {
	const idx = which || L.map((_, i) => i);
	const terms = idx.map((i) => {
		const l = L[i];
		const tx = -l.o[1], tz = l.o[0];
		const tableShadow = l.mount === 'table' ? `
				// the bench it stands on hides the floor under and around it
				if (p.y < ${f(l.ring[3] - 0.03)}) {
					float tt = ${f(l.y - l.ring[3])} / max(-D.y, 1e-3);
					vec2 hit = vec2(${f(l.x)}, ${f(l.z)}) + D.xz * tt - vec2(${f(l.ring[0])}, ${f(l.ring[1])});
					T *= smoothstep(${f(l.ring[2] - 0.02)}, ${f(l.ring[2] + 0.12)}, length(hit));
				}` : '';
		const shadow = l.mount === 'wall' ? `
				{
					// what it hangs on stands behind it and hides what lies beyond
					float behind = -dot(D.xz, vec2(${f(l.o[0])}, ${f(l.o[1])}));
					if (behind > ${f(l.back + 0.06)}) {
						float side = abs(dot(D.xz, vec2(${f(tx)}, ${f(tz)}))) * ${f(l.back)} / behind;
						T *= smoothstep(${f(l.hw - 0.04)}, ${f(l.hw + 0.04)}, side);
					}
				}` : '';
		return `
			{
				vec3 D = p - vec3(${f(l.x)}, ${f(l.y)}, ${f(l.z)});
				float d2 = dot(D, D);
				if (d2 < ${f(l.range * l.range)}) {
					float d = sqrt(d2);
					// the direction in the lantern's own frame
					float c = ${f(Math.cos(Math.atan2(l.o[1], l.o[0])))}, s = ${f(Math.sin(Math.atan2(l.o[1], l.o[0])))};
					vec3 q = vec3(D.x * c + D.z * s, D.y, -D.x * s + D.z * c);
					float T = lanternGlass(q, 0.10 + 0.05 * d);
					${shadow}${tableShadow}
					float fl = 0.90 + 0.06 * sin(time * 6.1 + ${f(i * 1.7)}) + 0.04 * sin(time * 15.3 + ${f(i * 2.9)}) * sin(time * 1.9 + ${f(i * 0.6)});
					float lam = max(dot(N, -D / d), 0.0) * 0.85 + 0.15;
					float fall = 1.0 / (1.0 + d2 * ${f(1.0 / (l.s * l.s))}) * (1.0 - smoothstep(${f(l.range * 0.6)}, ${f(l.range)}, d));
					sum += ${f(l.k)} * T * fl * lam * fall;
				}
			}`;
	}).join('');
	return `
	// how much of a lantern's light gets out in direction q (lantern frame,
	// y up): through the leaded glass, past the iron posts, a little
	// through the vents in the roof and the open work under the base
	float lanternGlass(vec3 q, float blur) {
		float h = length(q.xz) + 1e-5;
		float az = atan(q.z, q.x);
		// which of the six panels, and where across it
		float t = mod(az + ${f(PI / 6)}, ${f(PI / 3)}) - ${f(PI / 6)};
		float U = tan(t) / ${f(Math.tan(PI / 6))};
		float V = (q.y / h) * (${f(APO / HH)} / cos(t));
		// the diamond lattice of lead: its shadow soft, as a flame is not
		// a point, and softer the further it falls
		float s1 = U * 1.5 + V * 2.0, s2 = U * 1.5 - V * 2.0;
		float e1 = 0.5 - abs(fract(s1) - 0.5), e2 = 0.5 - abs(fract(s2) - 0.5);
		float lead = 1.0 - smoothstep(0.0, 0.05 + blur, min(e1, e2));
		float T = 1.0 - 0.48 * lead;
		// the iron posts at the corners
		T *= 1.0 - 0.6 * smoothstep(0.80 - blur, 1.0, abs(U));
		// the rails at top and bottom, and beyond them the roof and base
		float inGlass = 1.0 - smoothstep(0.80 - blur, 1.05 + blur * 2.0, abs(V));
		float leak = V > 0.0 ? 0.26 : 0.40;
		// and a little light that is not patterned at all: the glow of
		// the warm glass itself
		return mix(mix(leak, T, inGlass), 1.0, 0.18);
	}
	vec3 lanternLight(vec3 p, vec3 N) {
		if (night <= 0.001) return vec3(0.0);
		float sum = 0.0;
		${terms}
		return vec3(1.0, 0.72, 0.38) * sum * 2.8 * night;
	}`;
}


/* ---------------------------------------------------------------
 * GEOMETRY: the iron, and the glass (with its lattice drawn on it)
 * ------------------------------------------------------------- */

const IRON = 0, GLASS = 1;

function build() {
	const pos = [], nrm = [], kind = [], uv = [], elems = [];
	const vtx = (p, n, k, t) => { pos.push(p[0], p[1], p[2]); nrm.push(n[0], n[1], n[2]); kind.push(k); uv.push(t ? t[0] : 0, t ? t[1] : 0); return pos.length / 3 - 1; };
	const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
	const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
	const norm = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };

	// a flat quad (a, b, c, d anticlockwise seen from its front)
	function quad(a, b, c, d, k, both) {
		const n = norm(cross(sub(b, a), sub(d, a)));
		const i = vtx(a, n, k, [0, 0]), j = vtx(b, n, k, [1, 0]), m = vtx(c, n, k, [1, 1]), o = vtx(d, n, k, [0, 1]);
		elems.push(i, j, m, i, m, o);
		if (both) elems.push(i, m, j, i, o, m);
	}
	// a round tube along a polyline
	function tube(pts, r, k) {
		const SEG = 6;
		for (let i = 0; i < pts.length; i++) {
			const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
			const T = norm(sub(b, a));
			let up = Math.abs(T[1]) > 0.9 ? [1, 0, 0] : [0, 1, 0];
			const X = norm(cross(T, up)), Y = cross(X, T);
			const rr = typeof r === 'function' ? r(i / (pts.length - 1)) : r;
			for (let j = 0; j <= SEG; j++) {
				const t = (j / SEG) * PI * 2, c = Math.cos(t), s = Math.sin(t);
				const n = [X[0] * c + Y[0] * s, X[1] * c + Y[1] * s, X[2] * c + Y[2] * s];
				vtx([pts[i][0] + n[0] * rr, pts[i][1] + n[1] * rr, pts[i][2] + n[2] * rr], n, k);
			}
		}
		const base = pos.length / 3 - pts.length * (SEG + 1);
		for (let i = 0; i < pts.length - 1; i++) {
			for (let j = 0; j < SEG; j++) {
				const a = base + i * (SEG + 1) + j, b = a + SEG + 1;
				elems.push(a, b, a + 1, a + 1, b, b + 1);
			}
		}
	}
	// a six-sided frustum around a vertical axis (flat faces, optional caps)
	function hex(c, y0, y1, r0, r1, yaw, k, capTop, capBot) {
		const P = (r, y, i) => { const a = yaw + PI / 6 + i * PI / 3; return [c[0] + Math.cos(a) * r, y, c[2] + Math.sin(a) * r]; };
		for (let i = 0; i < 6; i++) quad(P(r0, y0, i + 1), P(r0, y0, i), P(r1, y1, i), P(r1, y1, i + 1), k);
		if (capTop && r1 > 0) for (let i = 0; i < 6; i++) { const ci = vtx([c[0], y1, c[2]], [0, 1, 0], k); const a = vtx(P(r1, y1, i), [0, 1, 0], k), b = vtx(P(r1, y1, i + 1), [0, 1, 0], k); elems.push(ci, b, a); }
		if (capBot && r0 > 0) for (let i = 0; i < 6; i++) { const ci = vtx([c[0], y0, c[2]], [0, -1, 0], k); const a = vtx(P(r0, y0, i), [0, -1, 0], k), b = vtx(P(r0, y0, i + 1), [0, -1, 0], k); elems.push(ci, a, b); }
	}
	// a little scroll (a flat spiral) in a vertical plane
	function scroll(c, X, r0, turns, r, k, phase) {
		const pts = [];
		const N = 18;
		for (let i = 0; i <= N; i++) {
			const u = i / N, a = (phase || 0) + u * turns * PI * 2, rr = r0 * (1 - 0.75 * u);
			pts.push([c[0] + X[0] * Math.cos(a) * rr, c[1] + Math.sin(a) * rr, c[2] + X[2] * Math.cos(a) * rr]);
		}
		tube(pts, r, k);
	}

	L.forEach((l) => {
		const s = l.s;
		const yaw = Math.atan2(l.o[1], l.o[0]);
		const c = [l.x, l.y, l.z];
		const at = (out, y, side) => [l.x + l.o[0] * out - l.o[1] * (side || 0), l.y + y, l.z + l.o[1] * out + l.o[0] * (side || 0)];
		const yb = l.y - HH * s, yt = l.y + HH * s;

		// the glass, each panel with a lattice drawn on it in the shader
		for (let i = 0; i < 6; i++) {
			const a0 = yaw + PI / 6 + i * PI / 3, a1 = a0 + PI / 3;
			const r = R6 * s * 0.97;
			const p0 = [l.x + Math.cos(a0) * r, yb, l.z + Math.sin(a0) * r];
			const p1 = [l.x + Math.cos(a1) * r, yb, l.z + Math.sin(a1) * r];
			quad(p1, p0, [p0[0], yt, p0[2]], [p1[0], yt, p1[2]], GLASS, true);
		}
		// the corner posts, twisted bars
		for (let i = 0; i < 6; i++) {
			const a = yaw + PI / 6 + i * PI / 3, r = R6 * s;
			tube([[l.x + Math.cos(a) * r, yb - 0.02 * s, l.z + Math.sin(a) * r], [l.x + Math.cos(a) * r, yt + 0.02 * s, l.z + Math.sin(a) * r]], 0.011 * s, IRON);
		}
		// the base: a rim, a tray and a drop with a small knob under it
		hex(c, yb - 0.035 * s, yb, R6 * s * 1.12, R6 * s * 1.12, yaw, IRON, true, true);
		hex(c, yb - 0.10 * s, yb - 0.035 * s, R6 * s * 0.55, R6 * s * 1.0, yaw, IRON, false, true);
		hex(c, yb - 0.17 * s, yb - 0.10 * s, 0.0, R6 * s * 0.55, yaw, IRON, false, false);
		// a band of open work under the rim: little arches
		for (let i = 0; i < 6; i++) {
			const a = yaw + i * PI / 3, r = APO * s * 1.06;
			const cc = [l.x + Math.cos(a) * r, yb - 0.06 * s, l.z + Math.sin(a) * r];
			scroll(cc, [-Math.sin(a), 0, Math.cos(a)], 0.03 * s, 0.85, 0.004 * s, IRON, 0.3);
		}
		// the top rim, the pointed roof, the chimney cap and the finial
		hex(c, yt, yt + 0.03 * s, R6 * s * 1.14, R6 * s * 1.14, yaw, IRON, false, true);
		hex(c, yt + 0.03 * s, yt + 0.20 * s, R6 * s * 1.14, R6 * s * 0.32, yaw, IRON, false, false);
		hex(c, yt + 0.20 * s, yt + 0.27 * s, R6 * s * 0.34, R6 * s * 0.34, yaw, IRON, false, false);
		hex(c, yt + 0.27 * s, yt + 0.37 * s, R6 * s * 0.42, 0.0, yaw, IRON, false, true);
		tube([[l.x, yt + 0.36 * s, l.z], [l.x, yt + 0.47 * s, l.z]], (u) => 0.010 * s * (1 - 0.7 * u), IRON);
		hex([l.x, 0, l.z], yt + 0.44 * s, yt + 0.47 * s, 0.018 * s, 0.0, yaw, IRON, false, true);
		// the pinnacles at the roof's corners, each with a ball
		for (let i = 0; i < 6; i++) {
			const a = yaw + PI / 6 + i * PI / 3, r = R6 * s * 1.14;
			const b = [l.x + Math.cos(a) * r, yt + 0.03 * s, l.z + Math.sin(a) * r];
			tube([b, [b[0], b[1] + 0.09 * s, b[2]]], (u) => 0.008 * s * (1 - 0.8 * u), IRON);
			hex([b[0], 0, b[2]], b[1] + 0.035 * s, b[1] + 0.06 * s, 0.014 * s, 0.014 * s, a, IRON, true, true);
		}

		if (l.mount === 'wall') {
			// the bracket: a plate on the wall, an arm that comes out under
			// the lantern and turns up into it, and a scrolled brace below
			const back = l.back;
			const plateY = yb - 0.32;
			const wp = at(-back, 0, 0);
			const plate = (y0, y1, w) => {
				const o = [l.o[0], 0, l.o[1]], t = [-l.o[1], 0, l.o[0]];
				const P = (u, y, d) => [wp[0] + t[0] * u + o[0] * d, y, wp[2] + t[2] * u + o[2] * d];
				const d0 = 0.03, d1 = 0.065;
				quad(P(-w, y0, d1), P(w, y0, d1), P(w, y1, d1), P(-w, y1, d1), IRON, true);
				quad(P(w, y0, d0), P(w, y0, d1), P(w, y1, d1), P(w, y1, d0), IRON, true);
				quad(P(-w, y0, d1), P(-w, y0, d0), P(-w, y1, d0), P(-w, y1, d1), IRON, true);
				quad(P(-w, y1, d1), P(w, y1, d1), P(w, y1, d0), P(-w, y1, d0), IRON, true);
				quad(P(-w, y0, d0), P(w, y0, d0), P(w, y0, d1), P(-w, y0, d1), IRON, true);
				// a knob at top and bottom of the plate
				hex([wp[0] + o[0] * d1, 0, wp[2] + o[2] * d1], y1, y1 + 0.05, w * 0.6, 0.0, yaw, IRON, false, true);
				hex([wp[0] + o[0] * d1, 0, wp[2] + o[2] * d1], y0 - 0.05, y0, 0.0, w * 0.6, yaw, IRON, false, false);
			};
			plate(plateY - 0.2, plateY + 0.2, 0.07);
			// the arm: out from the plate, rising in a gentle curve
			const arm = [];
			for (let i = 0; i <= 14; i++) {
				const u = i / 14;
				const out = -back + 0.05 + u * (back - 0.05);
				const y = (plateY + 0.04) + (yb - 0.17 * s - plateY - 0.04) * Math.pow(u, 2.2);
				arm.push(at(out, y - l.y, 0));
			}
			tube(arm, (u) => 0.022 * (1 - 0.3 * u), IRON);
			// the brace below, ending in a scroll
			const brace = [];
			for (let i = 0; i <= 10; i++) {
				const u = i / 10;
				brace.push(at(-back + 0.05 + u * back * 0.6, (plateY - 0.14 + u * 0.16 + 0.05 * Math.sin(u * PI)) - l.y, 0));
			}
			tube(brace, 0.009, IRON);
			const e = brace[brace.length - 1];
			scroll([e[0] - l.o[0] * 0.03, e[1] + 0.02, e[2] - l.o[1] * 0.03], [l.o[0], 0, l.o[1]], 0.045, 1.1, 0.007, IRON, -0.4);
			// twisted ties between arm and brace
			[0.3, 0.55].forEach((u) => {
				const a = arm[Math.round(u * 14)], b = brace[Math.round(u / 0.62 * 10)] || brace[10];
				tube([a, b], 0.006, IRON);
			});
			// curls either side of the arm, under the lantern
			[-1, 1].forEach((sd) => {
				const p = at(-0.05, -HH * s - 0.2 * s, 0);
				scroll([p[0] - l.o[1] * sd * 0.05, p[1], p[2] + l.o[0] * sd * 0.05], [-l.o[1] * sd, 0, l.o[0] * sd], 0.05 * s, 0.9, 0.006, IRON, PI);
			});
		} else {
			// standing: three little feet under the drop
			for (let i = 0; i < 3; i++) {
				const a = yaw + i * PI * 2 / 3;
				const top = [l.x + Math.cos(a) * R6 * s * 0.7, yb - 0.035 * s, l.z + Math.sin(a) * R6 * s * 0.7];
				const foot = [l.x + Math.cos(a) * R6 * s * 1.25, yb - 0.17 * s, l.z + Math.sin(a) * R6 * s * 1.25];
				tube([top, foot], 0.012 * s, IRON);
			}
		}
	});
	return { pos, nrm, kind, uv, elems };
}


/* ---------------------------------------------------------------
 * DRAWING
 * ------------------------------------------------------------- */

module.exports = (regl) => {
	const g = build();

	const draw = regl({
		vert: `
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position, normal;
		attribute float kind;
		attribute vec2 uv;
		varying vec3 v_pos, v_n;
		varying float v_kind;
		varying vec2 v_uv;
		void main() {
			v_pos = position; v_n = normal; v_kind = kind; v_uv = uv;
			vec3 p = position; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,
		frag: `
		precision highp float;
		uniform float time, night;
		varying vec3 v_pos, v_n;
		varying float v_kind;
		varying vec2 v_uv;
		${lanternGLSL()}
		void main() {
			vec3 N = normalize(v_n);
			if (!gl_FrontFacing) N = -N;
			// the room's own light: warm by day, cold and dim at night
			vec3 amb = mix(vec3(0.46, 0.42, 0.37), vec3(0.055, 0.065, 0.095), night) * (0.7 + 0.3 * N.y);
			vec3 col;
			if (v_kind > 0.5) {
				// the glass: a lattice of lead over pale amber panes
				float s1 = (v_uv.x - 0.5) * 3.0 + (v_uv.y - 0.5) * 4.0;
				float s2 = (v_uv.x - 0.5) * 3.0 - (v_uv.y - 0.5) * 4.0;
				float e1 = 0.5 - abs(fract(s1) - 0.5), e2 = 0.5 - abs(fract(s2) - 0.5);
				float lead = 1.0 - smoothstep(0.035, 0.07, min(e1, e2));
				float rim = 1.0 - smoothstep(0.0, 0.05, min(v_uv.y, 1.0 - v_uv.y));
				lead = max(lead, rim);
				// by day: old glass, catching a little of the room
				vec3 day = vec3(0.62, 0.55, 0.42) * (0.55 + 0.45 * N.y * N.y) * amb * 1.4 + vec3(0.06, 0.05, 0.04);
				// at night: lit from within, brightest towards the flame
				float fl = 0.90 + 0.07 * sin(time * 6.1 + v_pos.x * 3.0) + 0.03 * sin(time * 17.0 + v_pos.z * 5.0);
				float hot = exp(-pow(length(v_uv - vec2(0.5, 0.42)) * 2.2, 2.0));
				vec3 glow = mix(vec3(1.0, 0.55, 0.20), vec3(1.0, 0.86, 0.60), hot) * (0.9 + 2.2 * hot) * fl;
				vec3 pane = mix(day, glow, night);
				col = mix(pane, vec3(0.04, 0.035, 0.03) * (amb + 0.1), lead);
			} else {
				// the iron: dark, with a dull warm sheen where the flame
				// catches it
				vec3 base = vec3(0.070, 0.058, 0.048);
				col = base * (amb * 1.6 + lanternLight(v_pos, N) * 0.5);
				col += vec3(0.95, 0.70, 0.40) * pow(max(N.y, 0.0), 4.0) * mix(0.02, 0.0, night);
			}
			gl_FragColor = vec4(col, 1.0);
		}`,
		attributes: { position: g.pos, normal: g.nrm, kind: g.kind, uv: g.uv },
		elements: g.elems,
		uniforms: { time: regl.context('time'), night: () => env.night }
	});

	// a soft glow around each lit lantern (drawn additively, at night only)
	const quadC = [], at = [];
	L.forEach((l, i) => {
		[[-1, -1], [1, -1], [1, 1], [-1, -1], [1, 1], [-1, 1]].forEach((c) => {
			quadC.push(c[0], c[1]);
			at.push(l.x, l.y, l.z, l.s + i * 0.001);
		});
	});
	const halo = regl({
		vert: `
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, time;
		attribute vec2 corner;
		attribute vec4 at;
		varying vec2 v_uv;
		varying float v_fl;
		void main() {
			float i = fract(at.w) * 1000.0;
			v_fl = 0.90 + 0.06 * sin(time * 6.1 + i * 1.7) + 0.04 * sin(time * 15.3 + i * 2.9);
			vec3 right = vec3(view[0][0], view[1][0], view[2][0]);
			vec3 up = vec3(view[0][1], view[1][1], view[2][1]);
			vec3 p = at.xyz + (right * corner.x + up * corner.y) * 1.1 * floor(at.w * 100.0 + 0.5) / 100.0;
			v_uv = corner;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,
		frag: `
		precision highp float;
		uniform float night;
		varying vec2 v_uv;
		varying float v_fl;
		void main() {
			float r = length(v_uv);
			vec3 col = vec3(1.0, 0.62, 0.28) * (pow(max(1.0 - r, 0.0), 3.0) * 0.30 + pow(max(1.0 - r, 0.0), 8.0) * 0.35) * v_fl;
			gl_FragColor = vec4(col * night, 1.0);
		}`,
		attributes: { corner: quadC, at },
		count: quadC.length / 2,
		uniforms: { time: regl.context('time'), night: () => env.night },
		depth: { enable: true, mask: false },
		blend: { enable: true, func: { srcRGB: 'one', dstRGB: 'one', srcAlpha: 'zero', dstAlpha: 'one' } }
	});

	return function () {
		draw();
		if (env.night > 0.01) halo();
	};
};

module.exports.lanternGLSL = lanternGLSL;
module.exports.LANTERNS = L;
// the one in the tree room (for the shaders of the tree and the figure)
module.exports.TREE_LANTERN = [L.length - 1];

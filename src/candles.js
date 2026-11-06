'use strict';

/*
 * CANDLES
 * -------
 * Tall wrought-iron floor candelabra, each holding three candles, in a few
 * places in the gallery: either side of the masterpiece, flanking the
 * Pietà by the entrance, at the back of the tree room, along the
 * corridor's window wall and by the door.
 *
 * By day they stand unlit. At night their flames burn, each flickering on
 * its own rhythm, and they cast a warm yellow light that flickers with
 * them onto the floor, the walls, the statues and the paintings near
 * them (candleGLSL() is shared with mesh.js and painting.js).
 */

const env = require('./env');
const { C: WING } = require('./wing');
const { A: COURT } = require('./alcove');

const HALL_END = WING.hallEnd + 0.35;

// where they stand (x, z) and which way their arms face (yaw)
const STANDS = [
	{ x: 3.35, z: HALL_END - 1.05, yaw: 0.0 },          // beside the masterpiece
	{ x: 10.65, z: HALL_END - 1.05, yaw: 0.0 },
	{ x: 3.75, z: 3.0, yaw: 1.2 },                      // flanking the Pietà
	{ x: 3.75, z: 8.8, yaw: -1.2 },
	{ x: COURT.x1 - 0.75, z: COURT.z0 + 0.75, yaw: 0.6 },   // the tree room
	{ x: COURT.x1 - 0.75, z: COURT.z1 - 0.75, yaw: -0.6 },
	{ x: 19.6, z: WING.z1 - 0.65, yaw: 0.0 },           // the corridor
	{ x: 26.9, z: WING.z1 - 0.65, yaw: 0.0 },
	{ x: 34.2, z: WING.z1 - 0.65, yaw: 0.0 },
	{ x: 12.3, z: 1.5, yaw: 0.4 }                       // by the door
];

const ARM_Y = 1.26;        // height of the arms
const ARM = 0.17;          // half span of the arms
const CUP_R = 0.036;
const CANDLE_R = 0.021;

// each stand: three candles of slightly different, burnt-down heights
const FLAMES = [];
STANDS.forEach((s, i) => {
	const c = Math.cos(s.yaw), sn = Math.sin(s.yaw);
	[-1, 0, 1].forEach((k, j) => {
		const h = 0.13 + ((i * 7 + j * 5) % 5) * 0.022;   // candle height
		const y0 = ARM_Y + (k === 0 ? 0.09 : 0.0) + 0.03;
		FLAMES.push({ stand: i, x: s.x + c * k * ARM, z: s.z + sn * k * ARM, y0, h, top: y0 + h, seed: i * 3 + j });
	});
});

// the light of each stand, for the shaders: one warm point per stand,
// at the height of its flames
const LIGHTS = STANDS.map((s) => [s.x, ARM_Y + 0.28, s.z]);

const f = (x) => x.toFixed(3);

// shared GLSL: needs uniforms "time" and "night"
function candleGLSL() {
	const terms = LIGHTS.map((p, i) => `
		{
			vec3 L = vec3(${f(p[0])}, ${f(p[1])}, ${f(p[2])}) - p;
			float d2 = dot(L, L);
			if (d2 < 64.0) {
				float d = sqrt(d2);
				float fl = 0.80 + 0.11 * sin(time * 7.3 + ${f(i * 1.9)}) + 0.09 * sin(time * 13.7 + ${f(i * 3.1)}) * sin(time * 2.3 + ${f(i * 0.7)});
				float lam = max(dot(N, L / d), 0.0) * 0.8 + 0.2;
				sum += fl * lam / (1.0 + d2 * 1.15) * (1.0 - smoothstep(4.0, 8.0, d));
			}
		}`).join('');
	return `
	// warm, flickering candlelight reaching point p (normal N); 0 by day
	vec3 candleLight(vec3 p, vec3 N) {
		if (night <= 0.001) return vec3(0.0);
		float sum = 0.0;
		${terms}
		return vec3(1.0, 0.70, 0.34) * sum * 1.6 * night;
	}`;
}


/* ---------------------------------------------------------------
 * GEOMETRY: the iron stands, the cups and the wax
 * ------------------------------------------------------------- */

function build() {
	const pos = [], nrm = [], kind = [], elems = [];
	const SEG = 10;
	// a cylinder (or cone) around a vertical axis
	function cyl(cx, cz, y0, y1, r0, r1, k, cap) {
		const base = pos.length / 3;
		for (let i = 0; i <= SEG; i++) {
			const a = (i / SEG) * Math.PI * 2, c = Math.cos(a), s = Math.sin(a);
			pos.push(cx + c * r0, y0, cz + s * r0, cx + c * r1, y1, cz + s * r1);
			nrm.push(c, (r0 - r1) * 0.5, s, c, (r0 - r1) * 0.5, s);
			kind.push(k, k);
		}
		for (let i = 0; i < SEG; i++) {
			const a = base + i * 2;
			elems.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
		}
		if (cap) {
			const ci = pos.length / 3;
			pos.push(cx, y1, cz); nrm.push(0, 1, 0); kind.push(k);
			for (let i = 0; i <= SEG; i++) {
				const a = (i / SEG) * Math.PI * 2;
				pos.push(cx + Math.cos(a) * r1, y1, cz + Math.sin(a) * r1); nrm.push(0, 1, 0); kind.push(k);
			}
			for (let i = 0; i < SEG; i++) elems.push(ci, ci + 1 + i + 1, ci + 1 + i);
		}
	}
	// a thin horizontal bar between two points
	function bar(a, b, y, r, k) {
		const dx = b[0] - a[0], dz = b[1] - a[1], L = Math.hypot(dx, dz);
		const ux = dx / L, uz = dz / L;
		const base = pos.length / 3;
		for (let i = 0; i <= SEG; i++) {
			const t = (i / SEG) * Math.PI * 2, c = Math.cos(t), s = Math.sin(t);
			// around the bar: sideways (-uz, ux) and up
			const ox = -uz * c * r, oz = ux * c * r, oy = s * r;
			pos.push(a[0] + ox, y + oy, a[1] + oz, b[0] + ox, y + oy, b[1] + oz);
			nrm.push(-uz * c, s, ux * c, -uz * c, s, ux * c);
			kind.push(k, k);
		}
		for (let i = 0; i < SEG; i++) {
			const q = base + i * 2;
			elems.push(q, q + 1, q + 2, q + 1, q + 3, q + 2);
		}
	}
	const IRON = 0, WAX = 1;
	STANDS.forEach((s) => {
		const c = Math.cos(s.yaw), sn = Math.sin(s.yaw);
		// three splayed feet, a turned base and the stem
		for (let k = 0; k < 3; k++) {
			const a = s.yaw + k * (Math.PI * 2 / 3) + 0.5;
			bar([s.x, s.z], [s.x + Math.cos(a) * 0.24, s.z + Math.sin(a) * 0.24], 0.03, 0.016, IRON);
		}
		cyl(s.x, s.z, 0.02, 0.16, 0.06, 0.03, IRON, false);
		cyl(s.x, s.z, 0.16, ARM_Y + 0.09, 0.016, 0.014, IRON, false);
		// a knot in the stem, and the arms
		cyl(s.x, s.z, 0.62, 0.70, 0.032, 0.032, IRON, true);
		bar([s.x - c * ARM, s.z - sn * ARM], [s.x + c * ARM, s.z + sn * ARM], ARM_Y, 0.012, IRON);
	});
	FLAMES.forEach((fl) => {
		// the cup (drip pan) and the candle
		cyl(fl.x, fl.z, fl.y0 - 0.03, fl.y0, CUP_R * 0.5, CUP_R, IRON, true);
		cyl(fl.x, fl.z, fl.y0, fl.top, CANDLE_R, CANDLE_R * 0.96, WAX, true);
	});
	return { pos, nrm, kind, elems };
}


/* ---------------------------------------------------------------
 * DRAWING
 * ------------------------------------------------------------- */

module.exports = (regl) => {
	const g = build();

	const stands = regl({
		vert: `
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position, normal;
		attribute float kind;
		varying vec3 v_pos, v_n;
		varying float v_kind;
		void main() {
			v_pos = position; v_n = normal; v_kind = kind;
			vec3 p = position; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,
		frag: `
		precision highp float;
		uniform float time, night;
		varying vec3 v_pos, v_n;
		varying float v_kind;
		${candleGLSL()}
		void main() {
			vec3 N = normalize(v_n);
			vec3 base = v_kind > 0.5 ? vec3(0.90, 0.84, 0.70) : vec3(0.075, 0.066, 0.058);
			// the room's own light: warm by day, cold and dim at night
			vec3 amb = mix(vec3(0.42, 0.38, 0.33), vec3(0.06, 0.07, 0.10), night) * (0.75 + 0.25 * N.y);
			vec3 col = base * (amb + candleLight(v_pos, N) * 0.6);
			// wax glows from inside near the flame
			if (v_kind > 0.5) col += vec3(1.0, 0.62, 0.25) * night * 0.55 * smoothstep(0.0, 0.12, v_pos.y - ${f(ARM_Y)}) * (0.85 + 0.15 * sin(time * 9.0 + v_pos.x * 30.0));
			// a dull sheen on the iron
			if (v_kind < 0.5) col += vec3(1.0, 0.75, 0.45) * night * pow(max(N.y, 0.0), 6.0) * 0.08;
			gl_FragColor = vec4(col, 1.0);
		}`,
		attributes: { position: g.pos, normal: g.nrm, kind: g.kind },
		elements: g.elems,
		uniforms: { time: regl.context('time'), night: () => env.night }
	});

	// the flames: little camera-facing teardrops, drawn additively, with a
	// soft halo around each
	const quad = [];
	const attrs = [];
	FLAMES.forEach((fl) => {
		[[-1, -1], [1, -1], [1, 1], [-1, -1], [1, 1], [-1, 1]].forEach((c) => {
			quad.push(c[0], c[1]);
			attrs.push(fl.x, fl.top + 0.035, fl.z, fl.seed);
		});
	});
	const flames = regl({
		vert: `
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale, time, halo;
		attribute vec2 corner;
		attribute vec4 flame;
		varying vec2 v_uv;
		varying float v_flick;
		void main() {
			float s = flame.w;
			// the flame breathes and sways a little
			v_flick = 0.85 + 0.09 * sin(time * 11.0 + s * 2.3) + 0.06 * sin(time * 27.0 + s * 5.1);
			float sway = 0.012 * sin(time * 3.1 + s) + 0.006 * sin(time * 8.7 + s * 3.0);
			vec3 right = vec3(view[0][0], view[1][0], view[2][0]);
			vec3 up = vec3(0.0, 1.0, 0.0);
			vec2 size = halo > 0.5 ? vec2(0.22, 0.22) : vec2(0.024, 0.06) * v_flick;
			vec3 p = flame.xyz + right * corner.x * size.x + up * corner.y * size.y;
			p.x += sway * (corner.y + 1.0) * 0.5 * (1.0 - halo);
			v_uv = corner;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,
		frag: `
		precision highp float;
		uniform float night, halo;
		varying vec2 v_uv;
		varying float v_flick;
		void main() {
			vec3 col;
			if (halo > 0.5) {
				float r = length(v_uv);
				col = vec3(1.0, 0.62, 0.25) * pow(max(1.0 - r, 0.0), 2.6) * 0.32 * v_flick;
			} else {
				// a teardrop: round below, drawn to a point above
				vec2 q = vec2(v_uv.x / (1.0 - 0.55 * max(v_uv.y, 0.0)), v_uv.y);
				float r = length(q * vec2(1.0, 0.85));
				float body = 1.0 - smoothstep(0.55, 1.0, r);
				float core = 1.0 - smoothstep(0.0, 0.5, length((v_uv - vec2(0.0, -0.35)) * vec2(1.6, 1.0)));
				col = mix(vec3(1.0, 0.55, 0.18), vec3(1.0, 0.92, 0.70), core) * (body * 1.4 + core * 0.8);
				// the blue at the root of a real flame
				col += vec3(0.15, 0.25, 0.6) * (1.0 - smoothstep(0.0, 0.35, length(v_uv - vec2(0.0, -0.85)))) * 0.4;
			}
			gl_FragColor = vec4(col * night, 1.0);
		}`,
		attributes: { corner: quad, flame: attrs },
		count: quad.length / 2,
		uniforms: { time: regl.context('time'), night: () => env.night, halo: regl.prop('halo') },
		depth: { enable: true, mask: false },
		blend: { enable: true, func: { srcRGB: 'one', dstRGB: 'one', srcAlpha: 'zero', dstAlpha: 'one' } }
	});

	return function () {
		stands();
		if (env.night > 0.01) {
			flames({ halo: 1 });
			flames({ halo: 0 });
		}
	};
};

module.exports.candleGLSL = candleGLSL;
module.exports.STANDS = STANDS;

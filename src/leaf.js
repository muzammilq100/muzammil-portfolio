'use strict';

/*
 * THE FALLING LEAF
 * ----------------
 * One leaf from the tree in the court. In the tour it lets go of a
 * branch, drifts out through the arch, rises into the sunlight under the
 * skylight and finally settles on the floor in front of the masterpiece;
 * the camera follows it. tour.js decides where it is and how it turns;
 * this module only draws it.
 *
 * It is lit by the same sun as the room: it flares up whenever it
 * crosses a beam from the skylight or the glass dome, and glows through
 * (green-gold) when the sun is behind it. It is drawn in the floor's
 * reflection too, so it meets its own reflection as it lands.
 */

const { skylightGLSL } = require('./skylight');
const { oculusGLSL } = require('./alcove');
const { windowLightGLSL } = require('./wing');

const LENGTH = 0.22;   // a little larger than life, so it reads on screen

function buildLeaf() {
	const pos = [], nrm = [], uv = [], idx = [];
	const NL = 14, NW = 4;
	// along the leaf: u 0 (stalk) .. 1 (tip); across: v -1 .. 1
	for (let i = 0; i <= NL; i++) {
		const u = i / NL;
		// an olive-like blade: narrow, widest a little below the middle
		const half = LENGTH * 0.2 * Math.pow(Math.sin(Math.PI * Math.pow(u, 0.85)), 0.9);
		for (let j = 0; j <= NW * 2; j++) {
			const v = j / NW - 1;
			const x = u * LENGTH - LENGTH * 0.12;
			const z = v * half;
			// folded slightly along the midrib and curling at the tip
			const y = Math.abs(v) * half * 0.35 - 0.12 * u * u * LENGTH;
			pos.push([x, y, z]);
			nrm.push([0, 1, 0]);
			uv.push([u, v]);
		}
	}
	const row = NW * 2 + 1;
	for (let i = 0; i < NL; i++) {
		for (let j = 0; j < row - 1; j++) {
			const a = i * row + j, b = a + 1, c = a + row, d = c + 1;
			idx.push([a, c, b], [b, c, d]);
		}
	}
	// the stalk: a thin sliver
	const s0 = pos.length;
	pos.push([-LENGTH * 0.12, 0.0, -0.003], [-LENGTH * 0.12, 0.0, 0.003], [-LENGTH * 0.24, -0.01, 0.0015], [-LENGTH * 0.24, -0.01, -0.0015]);
	nrm.push([0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0]);
	uv.push([0, 0], [0, 0], [-0.1, 0], [-0.1, 0]);
	idx.push([s0, s0 + 2, s0 + 1], [s0, s0 + 3, s0 + 2]);
	return { pos, nrm, uv, idx };
}

module.exports = (regl) => {

	const g = buildLeaf();

	const draw = regl({
		vert: `
		precision highp float;
		uniform mat4 proj, view, model;
		uniform float yScale;
		attribute vec3 position;
		attribute vec3 normal;
		attribute vec2 uv;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;
		void main() {
			vec4 w = model * vec4(position, 1.0);
			v_pos = w.xyz;
			v_normal = normalize(mat3(model) * normal);
			v_uv = uv;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			w.y *= yScale;
			gl_Position = proj * view * w;
		}`,
		frag: `
		precision highp float;
		uniform float yScale, visible;
		varying vec3 v_pos, v_normal;
		varying vec2 v_uv;
		varying vec3 v_eye;

		${skylightGLSL()}
		${oculusGLSL()}
		${windowLightGLSL()}

		void main() {
			if (yScale < 0.0 && v_pos.y < 0.0) discard;
			vec3 N = normalize(v_normal);
			vec3 V = normalize(v_eye - v_pos);
			if (!gl_FrontFacing) N = -N;

			// colour: olive green, lighter along the midrib, darker at the edge
			float across = abs(v_uv.y);
			vec3 base = mix(vec3(0.20, 0.30, 0.10), vec3(0.32, 0.40, 0.15), 1.0 - across);
			base = mix(base, vec3(0.55, 0.58, 0.32), (1.0 - smoothstep(0.0, 0.08, across)) * 0.6);
			// a hint of autumn towards the tip
			base = mix(base, vec3(0.55, 0.42, 0.14), smoothstep(0.55, 1.0, v_uv.x) * 0.35);

			// the sun from the skylight or the dome, whichever reaches it
			float sky = skylightVol(v_pos);
			float dome = 0.0;
			if (v_pos.x > 14.0) dome = oculusOpen(v_pos) * treeShade(v_pos);
			vec3 L = v_pos.x > 14.0 ? SHAFT : SKY_SUN;
			float sun = max(sky, dome);
			// in the corridor: daylight from the garden windows
			float win = windowLight(v_pos, WIN_SKY);
			if (win > sun) { sun = win * 0.8; L = WIN_SKY; }

			float front = max(dot(N, L), 0.0);
			float back = max(dot(-N, L), 0.0);
			// light passing through the leaf, strongest looking towards the sun
			float through = (back + 0.35 * front) * pow(max(dot(-V, L), 0.0), 2.0);

			// the room's own soft light, and a rim where it turns from you
			vec3 col = base * (0.62 + 0.25 * max(N.y, 0.0) + 0.35 * corridorGlow(v_pos));
			col += vec3(0.85, 0.80, 0.65) * pow(1.0 - abs(dot(N, V)), 3.0) * 0.3;
			col += base * vec3(1.15, 1.05, 0.85) * sun * (front * 1.3 + 0.2);
			col += vec3(0.70, 0.82, 0.25) * sun * through * 3.6;
			// in the dim hall, away from any sun, it still catches the soft
			// light of the room (and of the picture lights) along its edges
			float shade = 1.0 - clamp(sun * 2.0, 0.0, 1.0);
			col += (vec3(0.13, 0.17, 0.06) + vec3(0.30, 0.27, 0.18) * pow(1.0 - abs(dot(N, V)), 2.0)) * shade;
			// a waxy glint
			vec3 H = normalize(L + V);
			col += vec3(1.0, 0.95, 0.85) * sun * pow(max(dot(N, H), 0.0), 40.0) * 0.6;

			gl_FragColor = vec4(col * visible, 1.0);
		}`,
		attributes: { position: g.pos, normal: g.nrm, uv: g.uv },
		elements: g.idx,
		uniforms: {
			model: regl.prop('model'),
			visible: 1
		},
		cull: { enable: false }
	});

	// draws the leaf when tour.js says where it is (state.model)
	return function (state) {
		if (state && state.visible) draw({ model: state.model });
	};
};

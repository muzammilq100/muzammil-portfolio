'use strict';

const NIGHT_GLSL = require('./env').GLSL;   // moonlit by night (see env.js)

/*
 * THE FLORENCE STREET
 * -------------------
 * What you see through the door at the far end of the corridor: a
 * narrow street in Florence (Vicolo del Canneto) climbing to a flight
 * of steps between tall ochre houses.
 *
 * The street is a real photograph (res/florence/photo.jpg, stretched to
 * 1024 x 2048 so the GPU can mipmap it), cleaned of
 * signs, a parked car and a passer-by. The street is rebuilt as a few
 * simple surfaces (the road, the steps, the two rows of houses and the
 * house at the end) and the photo is projected back onto them from the
 * spot where it was taken, a few metres inside the corridor. From
 * anywhere along the corridor the picture lines up, and as you walk
 * towards the door the near houses slide past the far ones.
 *
 * Gallery coordinates: the street starts at the door's outer face and
 * runs on in +x, centred on the corridor's middle line.
 */

const geom = require('./geom');
const { C } = require('./wing');

// the door's outer face, and the corridor's middle line
const DOOR_X = C.x1 + 0.35;
const ZC = C.zc;

// where the photo was taken, and how it was held
const CAM = [DOOR_X - 7.3, 2.0, ZC];
const PITCH = 5.2 * Math.PI / 180;      // tilted up a little
const F = 2100, PCX = 725, PCY = 1288, PW = 1450, PH = 2576;

// the street (gallery metres)
const LEFT_Z = ZC - 3.2;                // houses on the left (seen from the corridor)
const RIGHT_Z = ZC + 3.3;               // houses on the right
const STEPS_X0 = DOOR_X + 5.0, STEPS_X1 = DOOR_X + 11.7, STEPS_H = 3.9;
const END_X = DOOR_X + 22.7;
const TOP = 40;

function buildStreet() {
	const position = [], normal = [], elements = [], attr = [];
	const B = geom.createBuilder(position, normal, elements, attr);

	const quad = (o, u, v, n, nu, nv) => {
		const g = [];
		for (let i = 0; i <= nu; i++) {
			g.push([]);
			for (let j = 0; j <= nv; j++) {
				const p = [0, 1, 2].map((k) => o[k] + u[k] * i / nu + v[k] * j / nv);
				g[i].push(B.vert(p, n, [0, 0, 0]));
			}
		}
		for (let i = 0; i < nu; i++) {
			for (let j = 0; j < nv; j++) {
				B.tri(g[i][j], g[i + 1][j], g[i + 1][j + 1]);
				B.tri(g[i][j], g[i + 1][j + 1], g[i][j + 1]);
			}
		}
	};

	const W = RIGHT_Z - LEFT_Z;
	const sx = 0.7;
	// road up to the steps, the steps as a slope, the street beyond
	quad([DOOR_X - sx, 0, LEFT_Z], [STEPS_X0 - DOOR_X + sx, 0, 0], [0, 0, W], [0, 1, 0], 6, 4);
	const run = STEPS_X1 - STEPS_X0;
	const l = Math.hypot(run, STEPS_H);
	quad([STEPS_X0, 0, LEFT_Z], [run, STEPS_H, 0], [0, 0, W], [-STEPS_H / l, run / l, 0], 6, 4);
	quad([STEPS_X1, STEPS_H, LEFT_Z], [END_X - STEPS_X1, 0, 0], [0, 0, W], [0, 1, 0], 6, 4);
	// the two rows of houses
	quad([DOOR_X - sx, 0, LEFT_Z], [END_X - DOOR_X + sx, 0, 0], [0, TOP, 0], [0, 0, 1], 12, 12);
	quad([DOOR_X - sx, 0, RIGHT_Z], [END_X - DOOR_X + sx, 0, 0], [0, TOP, 0], [0, 0, -1], 12, 12);
	// the house at the end, and a lid of sky
	quad([END_X, 0, LEFT_Z], [0, TOP, 0], [0, 0, W], [-1, 0, 0], 8, 4);
	quad([DOOR_X - sx, TOP, LEFT_Z], [END_X - DOOR_X + sx, 0, 0], [0, 0, W], [0, -1, 0], 6, 4);

	return { position, normal, elements, attr };
}

const f = (x) => x.toFixed(5);

// the street's lamps: [x, y, z, which wall] (+1: the left row of houses,
// whose face looks +z; -1: the right row)
const LAMPS = [
	[DOOR_X + 3.4, 3.7, LEFT_Z + 0.01, 1],
	[DOOR_X + 8.6, 4.1, RIGHT_Z - 0.01, -1],
	[DOOR_X + 14.8, STEPS_H + 3.3, LEFT_Z + 0.01, 1],
	[DOOR_X + 19.6, STEPS_H + 3.6, RIGHT_Z - 0.01, -1]
];

const FRAG = `
precision highp float;
${NIGHT_GLSL}
uniform sampler2D photo;
uniform float time;
varying vec3 v_pos;
varying vec3 v_normal;
const int NLAMP = ${LAMPS.length};
vec4 LAMP[NLAMP];

void main() {
	${LAMPS.map((l, i) => `LAMP[${i}] = vec4(${f(l[0])}, ${f(l[1])}, ${f(l[2])}, ${f(l[3])});`).join('\n\t')}
	vec3 d = v_pos - vec3(${f(CAM[0])}, ${f(CAM[1])}, ${f(CAM[2])});
	float c = ${f(Math.cos(PITCH))}, s = ${f(Math.sin(PITCH))};
	float fw = d.x * c + d.y * s;
	float up = -d.x * s + d.y * c;
	fw = max(fw, 0.05);
	vec2 px = vec2(${f(PCX)} + ${f(F)} * d.z / fw, ${f(PCY)} - ${f(F)} * up / fw);
	vec2 uv = px / vec2(${f(PW)}, ${f(PH)});
	vec2 cuv = clamp(uv, vec2(0.002), vec2(0.998));
	vec3 col = texture2D(photo, cuv).rgb;
	// beyond the edge of the photo, soften what is smeared in from the edge
	float outside = length(max(abs(uv - 0.5) - 0.5, 0.0));
	// (a very blurred sample there, so it reads as a wall in shade, not as streaks)
	vec3 soft = texture2D(photo, cuv, 7.0).rgb * vec3(0.95, 0.9, 0.82);
	col = mix(col, soft, smoothstep(0.0, 0.06, outside));
	// the photo is a little dark for a sunny day
	col = pow(col, vec3(0.9)) * 1.08;
	vec3 lit = toNight(col, 0.28);
	// the street's lamps: old iron lanterns on brackets high on the house
	// walls, burning low; warm pools on the walls and the paving under them
	float lampK = mix(0.22, 1.0, night);
	vec3 albedo = pow(col, vec3(1.1)) * 1.3 + 0.03;
	for (int i = 0; i < ${LAMPS.length}; i++) {
		vec4 L = LAMP[i];                       // x, y, z, side (+1 left wall, -1 right)
		vec3 d = L.xyz - v_pos;
		float dd = dot(d, d);
		float fl = 0.92 + 0.05 * sin(time * 7.3 + float(i) * 2.1) + 0.03 * sin(time * 17.0 + float(i));
		// the wall it hangs on is lit across, the paving from above
		float face = v_normal.y > 0.5 ? max(normalize(d).y, 0.0) : 0.35 + 0.65 * max(dot(v_normal, normalize(d)), 0.0);
		lit += albedo * vec3(1.0, 0.62, 0.30) * face * fl * lampK * 3.2 / (0.6 + dd * 0.45);
	}
	gl_FragColor = vec4(lit, 1.0);
}`;

const VERT = `
precision highp float;
uniform mat4 proj, view;
uniform float yScale;
attribute vec3 position, normal;
varying vec3 v_pos;
varying vec3 v_normal;
void main() {
	v_pos = position;
	v_normal = normal;
	vec3 p = position;
	p.y *= yScale;
	gl_Position = proj * view * vec4(p, 1.0);
}`;

module.exports = (regl) => {

	const data = buildStreet();

	const photo = regl.texture({ data: [[[120, 105, 85]]], min: 'linear', mag: 'linear' });
	fetch('res/florence/photo.jpg')
		.then((r) => {
			if (!r.ok) throw new Error('Could not load the Florence photo');
			return r.blob();
		})
		.then((b) => createImageBitmap(b))
		.then((img) => photo({ data: img, flipY: false, min: 'mipmap', mipmap: 'nice', mag: 'linear', wrapS: 'clamp', wrapT: 'clamp' }))
		.catch((e) => console.error(e));

	const draw = regl({
		frag: FRAG,
		vert: VERT,
		attributes: { position: data.position, normal: data.normal },
		elements: new Uint32Array(data.elements),
		uniforms: { photo },
		cull: { enable: false }
	});

	// the lanterns themselves: a glass box in an iron frame under a little
	// roof, held out from the wall on a bracket
	const lg = { pos: [], nrm: [], k: [], idx: [] };
	const box = (c, h, k) => {
		const [x, y, z] = c;
		const faces = [
			[[1, 0, 0], [0, 1, 0], [0, 0, 1]], [[-1, 0, 0], [0, 1, 0], [0, 0, -1]],
			[[0, 0, 1], [0, 1, 0], [-1, 0, 0]], [[0, 0, -1], [0, 1, 0], [1, 0, 0]],
			[[0, 1, 0], [0, 0, 1], [1, 0, 0]], [[0, -1, 0], [0, 0, 1], [-1, 0, 0]]
		];
		for (const [n, u, v] of faces) {
			const b0 = lg.pos.length / 3;
			for (const [su, sv] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
				lg.pos.push(x + n[0] * h[0] + u[0] * su * h[0] + v[0] * sv * h[0], y + n[1] * h[1] + u[1] * su * h[1] + v[1] * sv * h[1], z + n[2] * h[2] + u[2] * su * h[2] + v[2] * sv * h[2]);
				lg.nrm.push(...n); lg.k.push(k);
			}
			lg.idx.push(b0, b0 + 1, b0 + 2, b0, b0 + 2, b0 + 3);
		}
	};
	for (const L of LAMPS) {
		const out = L[3];                    // which way is out from the wall (z)
		const cz = L[2] + out * 0.42;
		box([L[0], L[1], cz], [0.11, 0.17, 0.11], 1);                       // the glass
		for (const sx of [-1, 1]) for (const sz of [-1, 1]) box([L[0] + sx * 0.11, L[1], cz + sz * 0.11], [0.014, 0.18, 0.014], 0);   // corner posts
		box([L[0], L[1] + 0.20, cz], [0.15, 0.03, 0.15], 0);                 // the roof
		box([L[0], L[1] + 0.27, cz], [0.05, 0.05, 0.05], 0);                 // its finial
		box([L[0], L[1] - 0.19, cz], [0.09, 0.025, 0.09], 0);                // the base
		box([L[0], L[1] + 0.34, L[2] + out * 0.21], [0.015, 0.015, 0.21], 0);   // the bracket
		box([L[0], L[1] + 0.15, L[2] + out * 0.03], [0.04, 0.24, 0.03], 0);  // its wall plate
	}
	const lanterns = regl({
		vert: `
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position, normal;
		attribute float k;
		varying vec3 v_n, v_pos;
		varying float v_k;
		void main() {
			v_n = normal; v_k = k; v_pos = position;
			vec3 p = position; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,
		frag: `
		precision highp float;
		uniform float night, time;
		varying vec3 v_n, v_pos;
		varying float v_k;
		void main() {
			float lampK = mix(0.22, 1.0, night);
			float fl = 0.92 + 0.06 * sin(time * 7.3 + v_pos.x) + 0.03 * sin(time * 17.0);
			if (v_k > 0.5) {
				gl_FragColor = vec4(vec3(1.0, 0.62, 0.30) * (0.45 + 1.5 * lampK) * fl, 1.0);
				return;
			}
			// old black iron, catching a little of its own light from below
			vec3 c = vec3(0.025, 0.022, 0.02) * (0.6 + 0.4 * max(v_n.y, 0.0));
			c += vec3(0.30, 0.18, 0.08) * lampK * max(-v_n.y, 0.0) * 0.4;
			gl_FragColor = vec4(c, 1.0);
		}`,
		attributes: { position: lg.pos, normal: lg.nrm, k: lg.k },
		elements: new Uint16Array(lg.idx),
		cull: { enable: false }
	});

	return function () {
		draw();
		lanterns();
	};
};

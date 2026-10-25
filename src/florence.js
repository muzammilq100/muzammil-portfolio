'use strict';

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

const FRAG = `
precision highp float;
uniform sampler2D photo;
varying vec3 v_pos;

void main() {
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
	gl_FragColor = vec4(col, 1.0);
}`;

const VERT = `
precision highp float;
uniform mat4 proj, view;
uniform float yScale;
attribute vec3 position;
varying vec3 v_pos;
void main() {
	v_pos = position;
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
		attributes: { position: data.position },
		elements: new Uint32Array(data.elements),
		uniforms: { photo },
		cull: { enable: false }
	});

	return function () {
		draw();
	};
};

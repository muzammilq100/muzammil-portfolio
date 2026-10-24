'use strict';

/*
 * GLASS
 * -----
 * The panes in the entrance door, the corridor windows and the far
 * door. Almost clear, with a faint cool reflection that grows at
 * grazing angles and a soft diagonal sheen, so the glass reads as
 * glass without hiding what is outside. Drawn last, blended over
 * everything else.
 */

const { glassPanes } = require('./entrance');
const wing = require('./wing');

function allPanes() {
	const position = [];
	const normal = [];
	const add = (tris, n) => {
		for (const p of tris) {
			position.push(p);
			normal.push(n);
		}
	};
	add(glassPanes(), [0, 0, 1]);
	add(wing.windowGlass(), [0, 0, 1]);
	add(wing.farDoorGlass(), [1, 0, 0]);
	return { position, normal };
}

module.exports = (regl) => {

	const panes = allPanes();

	const draw = regl({
		frag: `
		precision highp float;
		varying vec3 v_pos;
		varying vec3 v_eye;
		varying vec3 v_n;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, v_n));
			float fres = pow(1.0 - c, 3.0);
			// a couple of soft diagonal sheens
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05
			            + smoothstep(0.08, 0.0, abs(fract(d * 0.22 + 0.17) - 0.5)) * 0.04;
			float a = 0.05 + 0.32 * fres + sheen;
			vec3 col = mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4);
			gl_FragColor = vec4(col, a);
		}`,
		vert: `
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position, normal;
		varying vec3 v_pos, v_eye, v_n;
		void main() {
			v_pos = position;
			v_n = normal;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			vec3 p = position;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,
		attributes: {
			position: panes.position,
			normal: panes.normal
		},
		count: panes.position.length,
		cull: { enable: false },
		depth: { enable: true, mask: false },
		blend: {
			enable: true,
			func: {
				srcRGB: 'src alpha',
				dstRGB: 'one minus src alpha',
				srcAlpha: 'zero',
				dstAlpha: 'one'
			}
		}
	});

	return function () {
		draw();
	};
};

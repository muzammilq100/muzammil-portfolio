'use strict';

/*
 * DUST IN THE SUNLIGHT
 * --------------------
 * Tiny motes drifting in the air of the main hall and the tree court.
 * They are invisible in the shade and glint only where a beam of sun
 * passes through them, which is what makes the light feel like it is
 * falling through real air.
 */

const { skylightGLSL, Z_START, Z_END } = require('./skylight');
const { oculusGLSL, A: COURT } = require('./alcove');

module.exports = (regl, quality) => {

	const COUNT_HALL = quality.isPhone ? 900 : 2600;
	const COUNT_COURT = quality.isPhone ? 350 : 900;

	// a fixed scatter of points (so it is the same every visit)
	let seed = 7;
	const rnd = () => {
		seed = (seed * 16807) % 2147483647;
		return (seed - 1) / 2147483646;
	};

	const pts = [];
	for (let i = 0; i < COUNT_HALL; i++) {
		pts.push([2.5 + rnd() * 10.5, 0.3 + rnd() * 8.0, Z_START - 3.5 + rnd() * (Z_END - Z_START + 4.5), rnd()]);
	}
	for (let i = 0; i < COUNT_COURT; i++) {
		pts.push([COURT.x0 + 0.3 + rnd() * (COURT.x1 - COURT.x0 - 0.6), 0.3 + rnd() * 7.5, COURT.z0 + 0.3 + rnd() * (COURT.z1 - COURT.z0 - 0.6), rnd()]);
	}

	return regl({
		vert: `
		precision highp float;
		uniform mat4 proj, view;
		uniform float time, pixelScale;
		attribute vec4 seed;
		varying float v_light;
		varying float v_seed;

		${skylightGLSL()}
		${oculusGLSL()}

		void main() {
			vec3 p = seed.xyz;
			float s = seed.w * 6.2831;
			// slow drifting, the way dust hangs and turns in still air
			p += vec3(sin(time * 0.11 + s * 3.0) * 0.35, sin(time * 0.07 + s * 5.0) * 0.25 - 0.02 * time * (0.5 + seed.w), cos(time * 0.09 + s * 2.0) * 0.35);
			p.y = mod(p.y - 0.3, 8.0) + 0.3;

			float light = skylightAt(p);
			if (p.x > 14.0) light = oculusOpen(p) * treeShade(p);
			v_light = light;
			v_seed = seed.w;

			vec4 vp = view * vec4(p, 1.0);
			float dist = max(-vp.z, 0.1);
			gl_Position = proj * vp;
			// motes that catch no light are not drawn at all
			gl_PointSize = light > 0.02 ? clamp(pixelScale * (0.9 + seed.w) / dist, 1.0, 6.0) : 0.0;
			if (light <= 0.02) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
		}`,
		frag: `
		precision highp float;
		uniform float time;
		varying float v_light;
		varying float v_seed;
		void main() {
			vec2 c = gl_PointCoord - 0.5;
			float a = 1.0 - smoothstep(0.15, 0.5, length(c));
			// each mote twinkles as it turns
			float tw = 0.55 + 0.45 * sin(time * (1.5 + v_seed * 3.0) + v_seed * 40.0);
			gl_FragColor = vec4(vec3(1.0, 0.93, 0.80) * a * v_light * tw * 0.75, 1.0);
		}`,
		attributes: { seed: pts },
		count: pts.length,
		primitive: 'points',
		uniforms: {
			time: regl.context('time'),
			pixelScale: (ctx) => ctx.viewportHeight * 0.006
		},
		depth: { enable: true, mask: false },
		blend: {
			enable: true,
			func: { srcRGB: 'one', dstRGB: 'one', srcAlpha: 'zero', dstAlpha: 'one' }
		},
		cull: { enable: false }
	});
};

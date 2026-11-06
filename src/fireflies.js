'use strict';

/*
 * FIREFLIES
 * ---------
 * At night, a few dozen fireflies (jugnu) drift low through the garden
 * outside the corridor windows. Each wanders slowly on its own path and
 * glows and fades on its own slow rhythm, a soft warm green-gold with a
 * little halo, so they read as points of light seen through glass in the
 * dark. By day they are not drawn at all.
 */

const { C: WING } = require('./wing');
const env = require('./env');

// the open courtyard of the garden (see garden.js)
const X0 = 15.3, X1 = 37.1;
const Z0 = WING.z1 + 0.9, Z1 = WING.z1 + 0.7 + 16.0 - 0.6;

module.exports = (regl, quality) => {
	const COUNT = quality.isPhone ? 28 : 56;
	let seed = 11;
	const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
	const pts = [];
	for (let i = 0; i < COUNT; i++) {
		// most of them low, among the plants; a few higher
		const y = 0.35 + Math.pow(rnd(), 1.8) * 2.4;
		pts.push([X0 + rnd() * (X1 - X0), y, Z0 + rnd() * (Z1 - Z0), rnd()]);
	}

	const draw = regl({
		vert: `
		precision highp float;
		uniform mat4 proj, view;
		uniform float time, pixelScale;
		attribute vec4 seed;
		varying float v_glow;
		void main() {
			float s = seed.w * 6.2831;
			// a slow wandering path, different for each
			vec3 p = seed.xyz + vec3(
				sin(time * (0.11 + seed.w * 0.07) + s) * 0.9 + sin(time * 0.37 + s * 3.0) * 0.18,
				sin(time * (0.17 + seed.w * 0.05) + s * 2.0) * 0.25,
				cos(time * (0.09 + seed.w * 0.06) + s) * 0.9 + cos(time * 0.41 + s * 1.7) * 0.15);
			// glowing, then dark for a while: each on its own rhythm
			float period = 3.5 + seed.w * 4.0;
			float ph = fract(time / period + seed.w * 7.31);
			v_glow = smoothstep(0.0, 0.12, ph) * (1.0 - smoothstep(0.22, 0.5, ph));
			vec4 vp = view * vec4(p, 1.0);
			float dist = max(-vp.z, 0.1);
			gl_Position = proj * vp;
			gl_PointSize = v_glow > 0.01 ? clamp(pixelScale * 9.0 / dist, 4.0, 28.0) : 0.0;
			if (v_glow <= 0.01) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
		}`,
		frag: `
		precision highp float;
		uniform float night;
		varying float v_glow;
		void main() {
			float r = length(gl_PointCoord - 0.5) * 2.0;
			// a bright little core and a soft halo
			float core = 1.0 - smoothstep(0.0, 0.18, r);
			float halo = pow(max(1.0 - r, 0.0), 2.4);
			vec3 col = vec3(0.80, 1.0, 0.42) * (core * 2.2 + halo * 0.8);
			gl_FragColor = vec4(col * v_glow * night, 1.0);
		}`,
		attributes: { seed: pts },
		count: pts.length,
		primitive: 'points',
		uniforms: {
			time: regl.context('time'),
			pixelScale: (ctx) => ctx.viewportHeight * 0.006,
			night: () => env.night
		},
		depth: { enable: true, mask: false },
		blend: { enable: true, func: { srcRGB: 'one', dstRGB: 'one', srcAlpha: 'zero', dstAlpha: 'one' } }
	});

	return function () {
		if (env.night > 0.01) draw();
	};
};

'use strict';

/*
 * DUST IN THE LIGHT
 * -----------------
 * Motes drifting in the air of the main hall, the tree court and the
 * window corridor. They are invisible in the shade and glint only where
 * a beam of sun (or moon) passes through them, which is what makes the
 * light feel like it is falling through real air.
 *
 * They are seen the way a camera sees them: the ones at the distance
 * the lens is focused on are fine bright points; nearer and further
 * they open into soft, dim discs, and one drifting right past the lens
 * is a large pale circle. No two glint to the same rhythm.
 *
 * And the air moves them: the leaf drags a swirl of motes round its
 * path as it passes, which settles again behind it, and when the far
 * door bursts open the gust carries the corridor's dust along with it.
 *
 * index.js passes, every frame:
 *   wake      four points on the leaf's recent path (x, y, z, strength)
 *   wakeDir   the way the leaf is travelling
 *   gust      [how far the gust has carried the corridor's air (m),
 *              how hard it is blowing now (0..1)]
 *   focus, aperture   the lens (post.js)
 */

const { skylightGLSL, Z_START, Z_END } = require('./skylight');
const { oculusGLSL, A: COURT } = require('./alcove');
const { windowLightGLSL, C: WING } = require('./wing');

module.exports = (regl, quality) => {

	const COUNT_HALL = quality.isPhone ? 900 : 2600;
	const COUNT_COURT = quality.isPhone ? 350 : 900;
	const COUNT_WING = quality.isPhone ? 450 : 1300;
	const BOKEH = quality.isPhone ? 13 : 22;       // the largest soft disc, in pixels

	// a fixed scatter of points (so it is the same every visit)
	let seed = 7;
	const rnd = () => {
		seed = (seed * 16807) % 2147483647;
		return (seed - 1) / 2147483646;
	};

	const WX0 = WING.x0 + 0.6, WX1 = WING.x1 - 0.3;

	const pts = [];
	for (let i = 0; i < COUNT_HALL; i++) {
		pts.push([2.5 + rnd() * 10.5, 0.3 + rnd() * 8.0, Z_START - 3.5 + rnd() * (Z_END - Z_START + 4.5), rnd()]);
	}
	for (let i = 0; i < COUNT_COURT; i++) {
		pts.push([COURT.x0 + 0.3 + rnd() * (COURT.x1 - COURT.x0 - 0.6), 0.3 + rnd() * 7.5, COURT.z0 + 0.3 + rnd() * (COURT.z1 - COURT.z0 - 0.6), rnd()]);
	}
	for (let i = 0; i < COUNT_WING; i++) {
		pts.push([WX0 + rnd() * (WX1 - WX0), 0.2 + rnd() * 5.6, WING.z0 + 0.25 + rnd() * (WING.z1 - WING.z0 - 0.5), rnd()]);
	}

	const g = (x) => x.toFixed(4);
	const NONE = [[0, -50, 0, 0], [0, -50, 0, 0], [0, -50, 0, 0], [0, -50, 0, 0]];

	const draw = regl({
		vert: `
		precision highp float;
		uniform mat4 proj, view;
		uniform float time, pixelScale, night, focus, aperture;
		uniform vec4 wake0, wake1, wake2, wake3;
		uniform vec3 wakeDir;
		uniform vec2 gust;
		attribute vec4 seed;
		varying float v_light;
		varying float v_seed;
		varying float v_bokeh;

		${skylightGLSL()}
		${oculusGLSL()}
		${windowLightGLSL()}

		// the leaf's wake: motes near its path are dragged along and
		// swirl round it
		vec3 stir(vec3 p, vec4 w) {
			vec3 d = p - w.xyz;
			float k = w.w * exp(-dot(d, d) * 3.2);
			return (cross(wakeDir, d) * 2.4 + wakeDir * 0.30 + vec3(0.0, 0.10, 0.0)) * k;
		}

		void main() {
			vec3 p = seed.xyz;
			float s = seed.w * 6.2831;
			bool wing = p.x > 14.0 && p.z > 30.0;
			// slow drifting, the way dust hangs and turns in still air (two
			// unrelated rhythms each way, so the pattern never repeats)
			p += vec3(sin(time * 0.11 + s * 3.0) * 0.30 + sin(time * 0.047 + s * 7.0) * 0.18,
			          sin(time * 0.07 + s * 5.0) * 0.22 - 0.02 * time * (0.5 + seed.w),
			          cos(time * 0.09 + s * 2.0) * 0.30 + cos(time * 0.039 + s * 9.0) * 0.18) * (wing ? 0.6 : 1.0);
			if (wing) {
				p.y = mod(p.y - 0.2, 5.6) + 0.2;
				// the gust from the far door carries the corridor's air along
				// with it, tumbling as it goes
				p.x = ${g(WX0)} + mod(p.x - ${g(WX0)} - gust.x * (0.55 + 0.9 * seed.w), ${g(WX1 - WX0)});
				p.y += sin(time * 5.0 + s * 11.0) * 0.22 * gust.y;
				p.z += cos(time * 4.3 + s * 13.0) * 0.30 * gust.y;
				p.z = clamp(p.z, ${g(WING.z0 + 0.1)}, ${g(WING.z1 - 0.1)});
			} else {
				p.y = mod(p.y - 0.3, 8.0) + 0.3;
			}

			p += stir(p, wake0) + stir(p, wake1) + stir(p, wake2) + stir(p, wake3);

			float light;
			if (wing) light = windowLight(p, WIN_SKY) * 0.9;
			else if (p.x > 14.0) light = oculusOpen(p) * treeShade(p);
			else light = skylightAt(p);
			v_seed = seed.w;

			vec4 vp = view * vec4(p, 1.0);
			float dist = max(-vp.z, 0.05);
			gl_Position = proj * vp;

			// motes that catch no light are not drawn at all
			if (light <= 0.02 || vp.z > -0.08) {
				gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
				gl_PointSize = 0.0;
				v_light = 0.0;
				v_bokeh = 0.0;
				return;
			}

			// in focus: a fine point. Out of focus (or right by the lens): a
			// soft disc, as much dimmer as it is larger
			float sharp = clamp(pixelScale * (0.8 + 1.1 * seed.w) / dist, 1.0, 5.0);
			float coc = aperture > 0.0 ? clamp(abs(dist - focus) / max(max(dist, focus), 0.5) * aperture, 0.0, 1.0) : 0.0;
			float near = 1.0 - smoothstep(0.25, 1.6, dist);
			float blur = clamp(coc * 0.7 + near, 0.0, 1.0);
			float size = sharp + blur * ${g(BOKEH)} * (0.6 + 0.4 * seed.w);
			gl_PointSize = size;
			v_bokeh = blur;
			v_light = light * pow(sharp / size, 1.25) * (1.0 + 2.2 * blur);
		}`,
		frag: `
		precision highp float;
		uniform float time;
		uniform float night;
		varying float v_light;
		varying float v_seed;
		varying float v_bokeh;
		void main() {
			float r = length(gl_PointCoord - 0.5) * 2.0;
			// a point of light, or (out of focus) a flat disc with a faintly
			// brighter rim, the way a lens draws it
			float point = exp(-r * r * 3.2) * (1.0 - smoothstep(0.85, 1.0, r));
			float disc = (1.0 - smoothstep(0.86, 1.0, r)) * (0.72 + 0.34 * smoothstep(0.45, 0.92, r));
			float a = mix(point, disc, smoothstep(0.08, 0.5, v_bokeh));
			// each mote glints as it turns: two rhythms of its own, so the
			// air never pulses in step
			float t1 = sin(time * (0.9 + v_seed * 2.3) + v_seed * 40.0);
			float t2 = sin(time * (0.37 + v_seed * 1.1) + v_seed * 17.0);
			float tw = 0.35 + 0.65 * smoothstep(-0.6, 1.0, t1 * t2 + 0.35 * t1);
			// warm gold motes in the sun; silver ones, a little brighter against
			// the dark, in the moonlight
			gl_FragColor = vec4(mix(vec3(1.0, 0.93, 0.80), vec3(0.78, 0.86, 1.0) * 0.85, night) * a * v_light * tw * 0.8, 1.0);
		}`,
		attributes: { seed: pts },
		count: pts.length,
		primitive: 'points',
		uniforms: {
			time: regl.context('time'),
			pixelScale: (ctx) => ctx.viewportHeight * 0.006,
			focus: (ctx, p) => (p && p.focus) || 6,
			aperture: (ctx, p) => (p && p.aperture) || 0,
			wake0: (ctx, p) => ((p && p.wake) || NONE)[0],
			wake1: (ctx, p) => ((p && p.wake) || NONE)[1],
			wake2: (ctx, p) => ((p && p.wake) || NONE)[2],
			wake3: (ctx, p) => ((p && p.wake) || NONE)[3],
			wakeDir: (ctx, p) => (p && p.wakeDir) || [0, 0, 1],
			gust: (ctx, p) => (p && p.gust) || [0, 0]
		},
		depth: { enable: true, mask: false },
		blend: {
			enable: true,
			func: { srcRGB: 'one', dstRGB: 'one', srcAlpha: 'zero', dstAlpha: 'one' }
		},
		cull: { enable: false }
	});

	return (state) => draw(state || {});
};

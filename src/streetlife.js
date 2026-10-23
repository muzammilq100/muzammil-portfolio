'use strict';

/*
 * LIFE IN THE STREET
 * ------------------
 * A real cyclist riding past the gallery now and then.
 *
 * She was lifted out of a short stock clip (fixed camera, plain wall)
 * and packed into a sheet of 26 frames: res/street/cyclist.jpg for the
 * colour and res/street/cyclist_alpha.png for the cut-out. The frames
 * play forwards then backwards, so the motion loops without a jump,
 * and she rides at the same speed as in the clip, so the pedalling
 * matches how fast she moves.
 */

const { MOUTH_Z, S } = require('./street').layout;


/* ===========================================================
 * THE FRAME SHEET
 * ===========================================================
 */

const FRAMES = 26;
const COLS = 7;
const FW = 284, FH = 241;              // one frame, in pixels
const SHEET_W = 2048, SHEET_H = 1024;  // whole sheet, in pixels (padded to a power of two)
const FPS = 25;                        // the clip's frame rate

// size of one frame in the street (clip pixels -> metres -> gallery units)
const PX_PER_M = 376 * 0.36;           // 376 px per metre in the clip, sheet is 36 % of that
const QUAD_W = FW / PX_PER_M * S;
const QUAD_H = FH / PX_PER_M * S;
const HUB_U = 600 / 790;               // rear hub across the frame (she rides leftwards in the clip)
const GROUND_V = 0.035 / (FH / PX_PER_M);   // tyre bottom sits this far above the frame's bottom edge

const SPEED = 3.0 * S;                 // about 3 m/s, as in the clip


/* ===========================================================
 * WHEN AND WHERE
 * ===========================================================
 */

const STREET_X0 = -26, STREET_X1 = 40;
const LANE_Z = MOUTH_Z + 2.4;          // middle of the street outside
const PERIOD = 26;                     // a ride past every 26 seconds

function cyclistAt(t) {
	const span = STREET_X1 - STREET_X0;
	const travel = span / SPEED;
	const k = ((t + 4) % PERIOD + PERIOD) % PERIOD;
	if (k > travel) {
		return null;
	}
	const n = Math.floor((t + 4) / PERIOD);
	const leftward = n % 2 === 1;
	const p = k / travel;
	const x = leftward ? STREET_X1 - p * span : STREET_X0 + p * span;
	// forwards then backwards through the frames
	const step = Math.floor(k * FPS) % (2 * FRAMES - 2);
	const frame = step < FRAMES ? step : 2 * FRAMES - 2 - step;
	return { x, frame, leftward };
}


/* ===========================================================
 * TEXTURES
 * ===========================================================
 */

function load(regl, url) {
	const tex = regl.texture({ data: [[[0, 0, 0, 0]]] });
	fetch(url)
		.then((r) => {
			if (!r.ok) {
				throw new Error('Could not load ' + url);
			}
			return r.blob();
		})
		.then((b) => createImageBitmap(b))
		.then((img) => {
			tex({
				data: img,
				min: 'mipmap',
				mipmap: 'nice',
				mag: 'linear',
				wrapS: 'clamp',
				wrapT: 'clamp',
				flipY: false
			});
			tex.ready = true;
		})
		.catch((e) => console.error(e));
	return tex;
}


/* ===========================================================
 * DRAWING
 * ===========================================================
 */

module.exports = (regl) => {

	const colour = load(regl, 'res/street/cyclist.jpg');
	const alpha = load(regl, 'res/street/cyclist_alpha.png');

	// unit quad: x 0..1 across, y 0..1 up
	const corners = [[0, 0], [1, 0], [1, 1], [0, 0], [1, 1], [0, 1]];

	const draw = regl({
		frag: `
		precision mediump float;
		uniform sampler2D colour, alphaTex;
		uniform vec4 rect;          // u0, v0, u1, v1 of this frame in the sheet
		uniform float shadow;
		varying vec2 v_q;
		void main() {
			if (shadow > 0.5) {
				// a soft oval shadow on the cobbles
				vec2 d = (v_q - 0.5) * 2.0;
				float a = (1.0 - smoothstep(0.35, 1.0, length(d))) * 0.42;
				if (a < 0.01) discard;
				gl_FragColor = vec4(0.0, 0.0, 0.0, a);
				return;
			}
			vec2 uv = vec2(mix(rect.x, rect.z, v_q.x), mix(rect.w, rect.y, v_q.y));
			float a = texture2D(alphaTex, uv).r;
			if (a < 0.03) discard;
			// thin parts (rims, frame) lose a little coverage when shrunk; firm them up
			a = clamp(a * 1.6, 0.0, 1.0);
			vec3 c = texture2D(colour, uv).rgb;
			// the street's light: warm shade with the same golden grade
			c = pow(c, vec3(0.94)) * vec3(1.05, 1.0, 0.90) * vec3(0.92, 0.90, 0.92);
			gl_FragColor = vec4(c, a);
		}`,
		vert: `
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		uniform vec3 origin, across, up;
		attribute vec2 q;
		varying vec2 v_q;
		void main() {
			v_q = q;
			vec3 p = origin + across * q.x + up * q.y;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,
		attributes: { q: corners },
		count: 6,
		uniforms: {
			colour,
			alphaTex: alpha,
			rect: regl.prop('rect'),
			shadow: regl.prop('shadow'),
			origin: regl.prop('origin'),
			across: regl.prop('across'),
			up: regl.prop('up')
		},
		cull: { enable: false },
		blend: {
			enable: true,
			func: { srcRGB: 'src alpha', dstRGB: 'one minus src alpha', srcAlpha: 'zero', dstAlpha: 'one' }
		}
	});

	const start = Date.now();

	return function () {

		if (!colour.ready || !alpha.ready) {
			return;
		}

		// (window.__streetClock lets a test pick a moment; normally unused)
		const t = window.__streetClock !== undefined ? window.__streetClock : (Date.now() - start) / 1000;
		const c = cyclistAt(t);
		if (!c) {
			return;
		}

		const col = c.frame % COLS, row = Math.floor(c.frame / COLS);
		const u0 = (col * FW + 0.5) / SHEET_W, u1 = ((col + 1) * FW - 0.5) / SHEET_W;
		const v0 = (row * FH + 0.5) / SHEET_H, v1 = ((row + 1) * FH - 0.5) / SHEET_H;

		// in the clip she rides leftwards; riding rightwards shows the mirror image
		const rect = c.leftward ? [u0, v0, u1, v1] : [u1, v0, u0, v1];
		const hubFromLeft = c.leftward ? HUB_U : 1 - HUB_U;
		const x0 = c.x - hubFromLeft * QUAD_W;
		const y0 = -GROUND_V * QUAD_H;

		const wheelbase = 0.95 * S;
		const mid = c.x + (c.leftward ? -wheelbase / 2 : wheelbase / 2);

		draw([
			{
				shadow: 1,
				rect,
				origin: [mid - 1.25 * S, 0.012, LANE_Z + 0.35 * S],
				across: [2.5 * S, 0, 0],
				up: [0, 0, -0.7 * S]
			},
			{
				shadow: 0,
				rect,
				origin: [x0, y0, LANE_Z],
				across: [QUAD_W, 0, 0],
				up: [0, QUAD_H, 0]
			}
		]);
	};
};

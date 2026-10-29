'use strict';

/*
 * THE CAMERA'S EYE (post-processing)
 * ----------------------------------
 * The gallery is drawn into an off-screen picture first, and this module
 * then finishes it the way a film camera would see the room:
 *
 *   - light shafts: the air in the room catches the sun where it comes in
 *     (through the skylight, the glass dome over the tree, the corridor
 *     windows and the entrance door). They are worked out from the very
 *     same openings that light the floor, so every bar and pane of the
 *     glazing shows in the beams, and they stop where a wall or the floor
 *     is in the way.
 *   - glow (bloom) round the bright glass and the sunlit floor
 *   - depth of field: things nearer or further than the subject soften
 *   - a filmic, darker grade: deep warm shadows, highlights that roll off
 *     softly instead of clipping
 *   - vignette, a little film grain, letterbox bars and fades for the tour
 *   - edge smoothing (the off-screen picture has no built-in antialiasing)
 *
 * Everything is a few full-screen passes; phones get smaller buffers and
 * fewer samples. If the graphics chip cannot give us the depth picture,
 * the light shafts and depth of field are simply left out.
 *
 * Gallery metres: x across the main hall, z along it, y up.
 */

const { skylightGLSL, Z_START, Z_END, GLASS_Y } = require('./skylight');
const { oculusGLSL, A: COURT } = require('./alcove');
const { windowLightGLSL, C: WING } = require('./wing');
const { doorLightGLSL } = require('./entrance');

const f = (x) => x.toFixed(4);

// near and far planes of the camera (as in fps.js)
const NEAR = 0.1;
const FAR = 700.0;

// the grade, shared by the tour and free walking
const LOOK = {
	exposure: 0.88,       // overall brightness: below 1 darkens the room
	shafts: 1.0,         // strength of the light shafts
	bloom: 1.0,
	vignette: 0.42,
	grain: 0.045
};

function invert(out, a) {
	const a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
	const a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
	const a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
	const a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
	const b00 = a00 * a11 - a01 * a10, b01 = a00 * a12 - a02 * a10;
	const b02 = a00 * a13 - a03 * a10, b03 = a01 * a12 - a02 * a11;
	const b04 = a01 * a13 - a03 * a11, b05 = a02 * a13 - a03 * a12;
	const b06 = a20 * a31 - a21 * a30, b07 = a20 * a32 - a22 * a30;
	const b08 = a20 * a33 - a23 * a30, b09 = a21 * a32 - a22 * a31;
	const b10 = a21 * a33 - a23 * a31, b11 = a22 * a33 - a23 * a32;
	let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
	if (!det) return null;
	det = 1.0 / det;
	out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
	out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
	out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
	out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
	out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
	out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
	out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
	out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
	out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
	out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
	out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
	out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
	out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
	out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
	out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
	out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
	return out;
}

function multiply(out, a, b) {
	const r = new Array(16);
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			let s = 0;
			for (let k = 0; k < 4; k++) s += a[k * 4 + j] * b[i * 4 + k];
			r[i * 4 + j] = s;
		}
	}
	for (let i = 0; i < 16; i++) out[i] = r[i];
	return out;
}

const FULLSCREEN_VERT = `
precision highp float;
attribute vec2 position;
varying vec2 uv;
void main() {
	uv = position * 0.5 + 0.5;
	gl_Position = vec4(position, 0.0, 1.0);
}`;


module.exports = (regl, quality) => {

	const phone = !!quality.isPhone;
	const hasDepth = regl.hasExtension('webgl_depth_texture');

	// samples per lit volume, per pixel (the light-shaft picture is half
	// the screen's size at full quality, a quarter otherwise)
	const VOL_STEPS = phone ? 10 : 22;
	const volDiv = () => (quality.post >= 2 ? 2 : 4);

	const tex = (opts) => regl.texture(Object.assign({ width: 4, height: 4, min: 'linear', mag: 'linear', wrap: 'clamp' }, opts || {}));
	const fbo = () => regl.framebuffer({ color: tex(), depth: false });

	const sceneColor = tex();
	const sceneDepth = hasDepth ? regl.texture({ width: 4, height: 4, format: 'depth', type: 'uint32' }) : null;
	const scene = regl.framebuffer({ color: sceneColor, depth: sceneDepth || true });

	const half = [fbo(), fbo()];        // the blurred room, for depth of field
	const quarter = [fbo(), fbo()];     // bloom, near
	const eighth = [fbo(), fbo()];      // bloom, wide
	const vol = [fbo(), fbo()];         // light shafts

	const invVP = new Array(16).fill(0);
	const vp = new Array(16).fill(0);
	const eye = [0, 0, 0];

	// what the tour (or free walking) asks of the camera this frame
	const shot = {
		fade: 0,                 // 0..1 towards fadeColor
		fadeColor: [0, 0, 0],
		letterbox: 0,            // 0..1 of the bars' full height
		focus: 6.0,              // metres to the subject
		aperture: 0.0,           // 0 = everything sharp
		exposure: 1.0,
		shafts: 1.0,
		vignette: 0.0            // extra, on top of the look
	};

	const quad = { position: [-1, -1, 3, -1, -1, 3] };
	const pass = (frag, uniforms, extra) => regl(Object.assign({
		vert: FULLSCREEN_VERT,
		frag,
		attributes: quad,
		count: 3,
		depth: { enable: false, mask: false },
		cull: { enable: false },
		blend: { enable: false },
		uniforms,
		framebuffer: regl.prop('out')
	}, extra || {}));


	/* -------------------------------------------------------
	 * LIGHT SHAFTS
	 * ----------------------------------------------------- */

	// the boxes the lit air can be in, so the samples go only where they matter
	const SKY_BOX = [2.6, 0.0, Z_START - 3.2, 12.6, GLASS_Y, Z_END + 0.4];
	const COURT_BOX = [COURT.x0 - 0.2, 0.0, COURT.z0, COURT.x1, COURT.domeTop, COURT.z1];
	const WIN_BOX = [WING.x0, 0.0, WING.z0, WING.x1, 7.6, WING.z1];
	const DOOR_BOX = [0.35, 0.0, 0.35, 13.65, 7.6, 9.0];

	const box = (b) => `vec3(${f(b[0])}, ${f(b[1])}, ${f(b[2])}), vec3(${f(b[3])}, ${f(b[4])}, ${f(b[5])})`;

	const volPass = pass(`
	precision highp float;
	varying vec2 uv;
	uniform sampler2D depthTex;
	uniform mat4 invVP;
	uniform vec3 eye;
	uniform float time;
	uniform vec4 strength;   // skylight, dome, windows, door

	float hash12(vec2 p) {
		vec3 p3 = fract(vec3(p.x, p.y, p.x) * 0.1031);
		p3 += dot(p3, p3.yzx + 33.33);
		return fract((p3.x + p3.y) * p3.z);
	}
	float vnoise(vec2 p) {
		vec2 i = floor(p);
		vec2 g = fract(p);
		g = g * g * (3.0 - 2.0 * g);
		return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), g.x),
		           mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), g.x), g.y);
	}

	${skylightGLSL()}
	${oculusGLSL()}
	${windowLightGLSL()}
	${doorLightGLSL()}

	// the air is not perfectly even: slow drifting wisps of dust
	float air(vec3 p) {
		vec2 a = p.xz * 0.55 + vec2(p.y * 0.35 + time * 0.05, -p.y * 0.2 - time * 0.03);
		vec2 b = p.zy * 0.9 + vec2(time * 0.04, p.x * 0.3);
		float n = vnoise(a) * vnoise(b + 3.7);
		return 0.3 + 1.6 * n * n;
	}

	// Henyey-Greenstein: air scatters more light the closer you look
	// towards the sun
	float phase(float c, float g) {
		float g2 = g * g;
		return (1.0 - g2) / pow(1.0 + g2 - 2.0 * g * c, 1.5) * 0.25;
	}

	vec2 hitBox(vec3 ro, vec3 rd, vec3 lo, vec3 hi) {
		vec3 inv = 1.0 / rd;
		vec3 t0 = (lo - ro) * inv;
		vec3 t1 = (hi - ro) * inv;
		vec3 tn = min(t0, t1);
		vec3 tf = max(t0, t1);
		return vec2(max(max(tn.x, tn.y), max(tn.z, 0.0)), min(min(tf.x, tf.y), tf.z));
	}

	void main() {
		float d = texture2D(depthTex, uv).r;
		vec4 w = invVP * vec4(uv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
		vec3 P = w.xyz / w.w;
		vec3 rd = P - eye;
		float len = length(rd);
		rd /= len;
		len = min(len, 90.0);

		// a different start for each pixel; the blur afterwards evens it out
		float jit = hash12(gl_FragCoord.xy + fract(time * 7.13) * 61.0);
		const int N = ${VOL_STEPS};
		vec3 sum = vec3(0.0);

		// the skylight
		if (strength.x > 0.0) {
			vec2 t = hitBox(eye, rd, ${box(SKY_BOX)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					acc += skylightVol(p) * air(p);
				}
				float ph = phase(dot(rd, SKY_SUN), 0.55) + 0.05;
				sum += vec3(1.0, 0.86, 0.64) * acc * st * ph * strength.x;
			}
		}

		// the glass dome over the tree
		if (strength.y > 0.0) {
			vec2 t = hitBox(eye, rd, ${box(COURT_BOX)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					if (p.y < ${f(COURT.dome.base)} && p.x > ${f(COURT.x0 - 0.1)}) acc += oculusOpen(p) * treeShade(p) * air(p);
				}
				float ph = phase(dot(rd, SHAFT), 0.6) + 0.05;
				sum += vec3(1.0, 0.88, 0.68) * acc * st * ph * strength.y;
			}
		}

		// the corridor windows
		if (strength.z > 0.0) {
			vec2 t = hitBox(eye, rd, ${box(WIN_BOX)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					acc += windowLight(p, WIN_SKY) * air(p);
				}
				float ph = phase(dot(rd, WIN_SKY), 0.45) + 0.05;
				sum += vec3(0.86, 0.90, 1.0) * acc * st * ph * strength.z;
			}
		}

		// the entrance door
		if (strength.w > 0.0) {
			vec2 t = hitBox(eye, rd, ${box(DOOR_BOX)});
			t.y = min(t.y, len);
			if (t.y > t.x) {
				float st = (t.y - t.x) / float(N);
				float acc = 0.0;
				vec3 L = normalize(vec3(-0.22, 0.60, -0.77));
				for (int i = 0; i < N; i++) {
					vec3 p = eye + rd * (t.x + (float(i) + jit) * st);
					acc += doorLight(p, L) * air(p);
				}
				float ph = phase(dot(rd, L), 0.5) + 0.05;
				sum += vec3(1.0, 0.85, 0.66) * acc * st * ph * strength.w;
			}
		}

		gl_FragColor = vec4(sum, 1.0);
	}`, {
		depthTex: () => sceneDepth,
		invVP: () => invVP,
		eye: () => eye,
		time: regl.context('time'),
		strength: () => {
			const k = LOOK.shafts * shot.shafts;
			return [0.06 * k, 0.1 * k, 0.07 * k, 0.04 * k];
		}
	});


	/* -------------------------------------------------------
	 * BLUR, DOWNSAMPLE, BRIGHT PASS
	 * ----------------------------------------------------- */

	const blurPass = pass(`
	precision highp float;
	varying vec2 uv;
	uniform sampler2D src;
	uniform vec2 dir;
	void main() {
		vec3 c = texture2D(src, uv).rgb * 0.2270270;
		c += texture2D(src, uv + dir * 1.3846154).rgb * 0.3162162;
		c += texture2D(src, uv - dir * 1.3846154).rgb * 0.3162162;
		c += texture2D(src, uv + dir * 3.2307692).rgb * 0.0702703;
		c += texture2D(src, uv - dir * 3.2307692).rgb * 0.0702703;
		gl_FragColor = vec4(c, 1.0);
	}`, {
		src: regl.prop('src'),
		dir: (ctx, p) => [p.dir[0] / p.size[0], p.dir[1] / p.size[1]]
	});

	// 4 bilinear taps = a 4x4 box: a clean way to shrink by half
	const downPass = pass(`
	precision highp float;
	varying vec2 uv;
	uniform sampler2D src;
	uniform vec2 texel;
	uniform float threshold;
	void main() {
		vec3 c = texture2D(src, uv + texel * vec2(-1.0, -1.0)).rgb;
		c += texture2D(src, uv + texel * vec2(1.0, -1.0)).rgb;
		c += texture2D(src, uv + texel * vec2(-1.0, 1.0)).rgb;
		c += texture2D(src, uv + texel * vec2(1.0, 1.0)).rgb;
		c *= 0.25;
		if (threshold > 0.0) {
			// only what is bright: the glass, the sun on the floor, the lamps
			vec3 lin = c * c;
			float l = dot(lin, vec3(0.2126, 0.7152, 0.0722));
			float k = smoothstep(threshold, threshold + 0.35, l);
			c = lin * k;
		}
		gl_FragColor = vec4(c, 1.0);
	}`, {
		src: regl.prop('src'),
		texel: (ctx, p) => [0.5 / p.size[0], 0.5 / p.size[1]],
		threshold: regl.prop('threshold')
	});


	/* -------------------------------------------------------
	 * THE FINAL PICTURE
	 * ----------------------------------------------------- */

	const finalPass = pass(`
	precision highp float;
	varying vec2 uv;
	uniform sampler2D scene, depthTex, soft, bloomA, bloomB, shafts;
	uniform vec2 res;
	uniform float time, exposure, vignette, grain, letterbox, fade, aperture, focus, hasDepth, bloomK;
	uniform vec3 fadeColor;

	float hash12(vec2 p) {
		vec3 p3 = fract(vec3(p.x, p.y, p.x) * 0.1031);
		p3 += dot(p3, p3.yzx + 33.33);
		return fract((p3.x + p3.y) * p3.z);
	}

	float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

	// edge smoothing (FXAA, the small version)
	vec3 fxaa(vec2 p) {
		vec2 px = 1.0 / res;
		vec3 rgbNW = texture2D(scene, p + vec2(-1.0, -1.0) * px).rgb;
		vec3 rgbNE = texture2D(scene, p + vec2(1.0, -1.0) * px).rgb;
		vec3 rgbSW = texture2D(scene, p + vec2(-1.0, 1.0) * px).rgb;
		vec3 rgbSE = texture2D(scene, p + vec2(1.0, 1.0) * px).rgb;
		vec3 rgbM = texture2D(scene, p).rgb;
		float lNW = luma(rgbNW), lNE = luma(rgbNE), lSW = luma(rgbSW), lSE = luma(rgbSE), lM = luma(rgbM);
		float lMin = min(lM, min(min(lNW, lNE), min(lSW, lSE)));
		float lMax = max(lM, max(max(lNW, lNE), max(lSW, lSE)));
		vec2 dir = vec2(-((lNW + lNE) - (lSW + lSE)), ((lNW + lSW) - (lNE + lSE)));
		float reduce = max((lNW + lNE + lSW + lSE) * 0.03125, 1.0 / 128.0);
		float rcp = 1.0 / (min(abs(dir.x), abs(dir.y)) + reduce);
		dir = clamp(dir * rcp, -8.0, 8.0) * px;
		vec3 a = 0.5 * (texture2D(scene, p + dir * (1.0 / 3.0 - 0.5)).rgb + texture2D(scene, p + dir * (2.0 / 3.0 - 0.5)).rgb);
		vec3 b = a * 0.5 + 0.25 * (texture2D(scene, p + dir * -0.5).rgb + texture2D(scene, p + dir * 0.5).rgb);
		float lB = luma(b);
		return (lB < lMin || lB > lMax) ? a : b;
	}

	float linearDepth(float d) {
		float z = d * 2.0 - 1.0;
		return 2.0 * ${f(NEAR)} * ${f(FAR)} / (${f(FAR + NEAR)} - z * ${f(FAR - NEAR)});
	}

	// a filmic curve (ACES, fitted): soft shoulder, rich toe
	vec3 aces(vec3 x) {
		return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
	}

	void main() {
		vec2 p = uv;

		// letterbox: the picture is framed by black bars top and bottom
		float bar = letterbox * 0.11;
		if (p.y < bar || p.y > 1.0 - bar) {
			gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
			return;
		}

		vec3 c = fxaa(p);

		// depth of field: blend towards the soft picture away from the subject
		if (aperture > 0.0 && hasDepth > 0.5) {
			float z = linearDepth(texture2D(depthTex, p).r);
			// (things nearer than the subject soften a little less, so a leaf
			// drifting before a painting still reads)
			float coc = clamp(abs(z - focus) / max(max(z, focus), 0.5) * aperture, 0.0, 1.0);
			c = mix(c, texture2D(soft, p).rgb, smoothstep(0.0, 1.0, coc));
		}

		// into linear light
		vec3 lin = pow(c, vec3(2.2));

		// darker, more ambient: the room sinks, the light stays light
		float L = dot(lin, vec3(0.2126, 0.7152, 0.0722));
		lin *= mix(0.68, 1.0, smoothstep(0.05, 0.6, L)) * exposure;

		// the light shafts and the glow add light
		lin += texture2D(shafts, p).rgb;
		lin += (texture2D(bloomA, p).rgb * 0.45 + texture2D(bloomB, p).rgb * 0.6) * bloomK;

		// a soft shoulder instead of a hard clip
		vec3 over = max(lin - 0.7, 0.0);
		lin = min(lin, 0.7) + 0.3 * (1.0 - exp(-over / 0.3));

		vec3 col = pow(lin, vec3(1.0 / 2.2));

		// a gentle S-curve, warm shadows, a touch less saturation
		col = col * col * (3.0 - 2.0 * col) * 0.35 + col * 0.65;
		float l2 = luma(col);
		col = mix(col, col * vec3(1.05, 0.99, 0.90), (1.0 - smoothstep(0.0, 0.5, l2)) * 0.7);
		col = mix(vec3(l2), col, 0.93);

		// vignette
		vec2 q = (p - 0.5) * vec2(res.x / res.y, 1.0);
		float vig = 1.0 - smoothstep(0.35, 1.25, length(q * vec2(0.82, 1.0)) * 1.15) * vignette;
		col *= vig;

		// film grain, stronger in the shadows
		float n = hash12(gl_FragCoord.xy + fract(time * 13.37) * 113.0) - 0.5;
		col += n * grain * (1.0 - 0.6 * luma(col));

		col = mix(col, fadeColor, fade);
		gl_FragColor = vec4(col, 1.0);
	}`, {
		scene: () => sceneColor,
		depthTex: () => sceneDepth || sceneColor,
		soft: () => half[0],
		bloomA: () => quarter[0],
		bloomB: () => eighth[0],
		shafts: () => vol[0],
		res: (ctx) => [ctx.drawingBufferWidth, ctx.drawingBufferHeight],
		time: regl.context('time'),
		exposure: () => LOOK.exposure * shot.exposure,
		vignette: () => Math.min(1, LOOK.vignette + shot.vignette),
		grain: () => LOOK.grain,
		bloomK: () => LOOK.bloom,
		letterbox: () => shot.letterbox,
		fade: () => shot.fade,
		fadeColor: () => shot.fadeColor,
		aperture: () => (quality.post >= 2 ? shot.aperture : 0),
		focus: () => shot.focus,
		hasDepth: hasDepth ? 1 : 0
	}, { framebuffer: null });

	const sceneScope = regl({ framebuffer: () => scene });


	/* -------------------------------------------------------
	 * PUBLIC
	 * ----------------------------------------------------- */

	return {
		shot,
		look: LOOK,
		hasDepth,

		// draw the room (drawFn) into the off-screen picture
		capture(ctx, camera, drawFn) {
			const W = ctx.drawingBufferWidth, H = ctx.drawingBufferHeight;
			scene.resize(W, H);
			const hw = Math.max(1, Math.ceil(W / 2)), hh = Math.max(1, Math.ceil(H / 2));
			half.forEach((b) => b.resize(hw, hh));
			quarter.forEach((b) => b.resize(Math.max(1, Math.ceil(W / 4)), Math.max(1, Math.ceil(H / 4))));
			eighth.forEach((b) => b.resize(Math.max(1, Math.ceil(W / 8)), Math.max(1, Math.ceil(H / 8))));
			vol.forEach((b) => b.resize(Math.max(1, Math.ceil(W / volDiv())), Math.max(1, Math.ceil(H / volDiv()))));

			multiply(vp, camera.proj, camera.view);
			invert(invVP, vp);
			eye[0] = camera.eye[0]; eye[1] = camera.eye[1]; eye[2] = camera.eye[2];

			sceneScope(() => {
				regl.clear({ color: [0, 0, 0, 1], depth: 1 });
				drawFn();
			});
		},

		// finish the picture onto the screen
		present() {
			const sz = (b) => [b.width, b.height];

			// light shafts
			if (hasDepth && quality.post >= 1 && LOOK.shafts * shot.shafts > 0.001) {
				volPass({ out: vol[0] });
				blurPass({ out: vol[1], src: vol[0], dir: [1, 0], size: sz(vol[0]) });
				blurPass({ out: vol[0], src: vol[1], dir: [0, 1], size: sz(vol[0]) });
			} else {
				regl.clear({ color: [0, 0, 0, 1], framebuffer: vol[0] });
			}

			// the soft room (depth of field) and the glow
			downPass({ out: half[0], src: sceneColor, size: [scene.width, scene.height], threshold: 0 });
			blurPass({ out: half[1], src: half[0], dir: [1, 0], size: sz(half[0]) });
			blurPass({ out: half[0], src: half[1], dir: [0, 1], size: sz(half[0]) });

			downPass({ out: quarter[0], src: half[0], size: sz(half[0]), threshold: 0.42 });
			blurPass({ out: quarter[1], src: quarter[0], dir: [1, 0], size: sz(quarter[0]) });
			blurPass({ out: quarter[0], src: quarter[1], dir: [0, 1], size: sz(quarter[0]) });

			downPass({ out: eighth[0], src: quarter[0], size: sz(quarter[0]), threshold: 0 });
			blurPass({ out: eighth[1], src: eighth[0], dir: [1.5, 0], size: sz(eighth[0]) });
			blurPass({ out: eighth[0], src: eighth[1], dir: [0, 1.5], size: sz(eighth[0]) });

			finalPass({ out: null });
		}
	};
};

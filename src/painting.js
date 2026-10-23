'use strict';

const text = require('./text');


// ============================================================
// RENAISSANCE GILDED FRAME
// ============================================================
// One shared mesh: 9 stepped profile rings around the picture.
// Each vertex is (cornerX, cornerY, outward offset, depth).
// The vertex shader places the corners using the painting size,
// so the same mesh frames every painting. All of the ornament
// (beads, rope, palmette frieze, egg and dart, flutes, corner
// rosettes) is drawn procedurally in the fragment shader.
const FRAME_PROFILE = [
	[-0.02, 0.125], // rests on the canvas (lip overlaps the picture edge)
	[-0.02, 0.150], // inner lip wall
	[ 0.035, 0.150], // bead and reel fillet
	[ 0.070, 0.120], // rope cove
	[ 0.070, 0.170], // step up to the frieze
	[ 0.185, 0.170], // palmette and vine frieze
	[ 0.185, 0.190], // step up to the outer fillet
	[ 0.215, 0.190], // egg and dart
	[ 0.260, 0.030]  // fluted outer slope down to the wall
];

function buildFrameMesh() {
	const corners = [[0, 0], [1, 0], [1, 1], [0, 1]];
	const verts = [];
	FRAME_PROFILE.forEach(([off, z]) => {
		corners.forEach(([cx, cy]) => verts.push([cx, cy, off, z]));
	});
	const elems = [];
	for (let i = 0; i < FRAME_PROFILE.length - 1; i++) {
		for (let c = 0; c < 4; c++) {
			const c2 = (c + 1) % 4;
			const a = i * 4 + c, b = i * 4 + c2;
			const a2 = (i + 1) * 4 + c, b2 = (i + 1) * 4 + c2;
			elems.push(a, b, b2, a, b2, a2);
		}
	}
	return { verts, elems };
}

const FRAME_FRAG = `#extension GL_OES_standard_derivatives : enable
precision highp float;
uniform vec2 fsize;
varying vec2 v_l;
varying vec3 v_vpos;

float sst(float e0, float e1, float x) {
	float t = clamp((x - e0) / (e1 - e0), 0.0, 1.0);
	return t * t * (3.0 - 2.0 * t);
}

float hash21(vec2 p) {
	vec3 p3 = fract(vec3(p.x, p.y, p.x) * 0.1031);
	p3 += dot(p3, p3.yzx + 33.33);
	return fract((p3.x + p3.y) * p3.z);
}

// soft ellipse with a domed height
float disc(vec2 p, vec2 r, float aa) {
	vec2 q = p / r;
	float d = length(q);
	float k = aa / min(r.x, r.y);
	float cov = sst(1.0 + k, 1.0 - k, d);
	return cov * (sqrt(clamp(1.0 - d * d, 0.0, 1.0)) * 0.8 + 0.2);
}

// fan shaped palmette growing along +y from the origin
float palmette(vec2 p, float R, float aa) {
	float r = length(p) + 0.00001;
	float ang = atan(p.x, p.y + 0.00001);
	float Rt = R * (0.5 + 0.5 * abs(cos(ang * 5.0)));
	float cov = sst(0.0, aa, Rt - r) * sst(1.32, 1.22, abs(ang));
	float h = clamp((1.0 - r / Rt) * 1.6, 0.0, 1.0) * 0.75 + 0.25;
	float boss = sst(0.012 + aa, 0.012, r);
	return max(cov * h, boss);
}

void main() {
	float px = max(fwidth(v_l.x) + fwidth(v_l.y), 0.0001);
	float aa = clamp(px * 1.3, 0.0007, 0.02);
	float stipFade = 1.0 - sst(0.002, 0.005, px);

	float sdx = max(-v_l.x, v_l.x - fsize.x);
	float sdy = max(-v_l.y, v_l.y - fsize.y);

	float h = 0.0;
	float g = 1.0;

	if (sdx > 0.0 && sdy > 0.0) {
		// ---------------- CORNER ROSETTE BLOCK ----------------
		vec2 q = vec2(sdx, sdy) - 0.13;
		float r = length(q) + 0.00001;
		float ang = atan(q.y, q.x);
		float Rt = 0.1 * (0.55 + 0.45 * abs(cos(ang * 4.0)));
		float ros = sst(0.0, aa, Rt - r) * (clamp((1.0 - r / Rt) * 1.5, 0.0, 1.0) * 0.7 + 0.3);
		float boss = sst(0.028 + aa, 0.028, r);
		float ra = fract(ang / 6.2831853 * 12.0) - 0.5;
		float beads = disc(vec2(ra * 0.06, r - 0.112), vec2(0.0125), aa) * step(0.09, r);
		h = max(max(ros, boss), beads * 0.9);
		float st = step(0.78, hash21(floor(vec2(sdx, sdy) / 0.004))) * stipFade;
		g = mix(0.18 + 0.25 * st, 1.0, sst(0.02, 0.1, h));
	} else {
		float a;
		float s;
		if (sdx > sdy) { a = sdx; s = v_l.y; } else { a = sdy; s = v_l.x; }
		float st = step(0.78, hash21(floor(vec2(s, a) / 0.004))) * stipFade;

		if (a < 0.035) {
			// ---------------- BEAD AND REEL ----------------
			float pA = 0.04;
			float bead = disc(vec2((fract(s / pA) - 0.5) * pA, a - 0.0075), vec2(0.0165), aa);
			float reel = disc(vec2((fract(s / pA + 0.5) - 0.5) * pA, a - 0.0075), vec2(0.006, 0.0165), aa);
			float zA = max(bead, reel * 0.8);
			h = 0.25 + 0.7 * zA;
			g = mix(0.18 + 0.25 * st, 1.0, sst(0.02, 0.1, zA));
		} else if (a < 0.07) {
			// ---------------- TWISTED ROPE COVE ----------------
			float rope = 0.5 + 0.5 * sin((s + a * 3.0) * 6.2831853 / 0.03);
			h = 0.2 + 0.55 * rope;
			g = 0.65;
		} else if (a < 0.185) {
			// ---------------- PALMETTE AND VINE FRIEZE ----------------
			float P = 0.23;
			float xa = (fract(s / P) - 0.5) * P;
			float xb = (fract(s / P + 0.5) - 0.5) * P;
			float pa = palmette(vec2(xa, a - 0.085), 0.078, aa);
			float pb = palmette(vec2(xb, 0.172 - a), 0.062, aa);
			float aStem = 0.1275 + 0.022 * sin(s / P * 6.2831853);
			float stem = sst(0.0045 + aa, 0.0025, abs(a - aStem));
			float sg = sign(sin(s / P * 12.5663706));
			float dots = disc(vec2((fract(s / P * 2.0 + 0.25) - 0.5) * P * 0.5, a - 0.1275 - 0.036 * sg), vec2(0.007), aa);
			float hC = max(max(pa, pb), max(stem * 0.7, dots * 0.85));
			h = hC;
			g = mix(0.18 + 0.25 * st, 1.0, sst(0.02, 0.1, hC));
		} else if (a < 0.215) {
			// ---------------- EGG AND DART ----------------
			float pD = 0.045;
			float egg = disc(vec2((fract(s / pD) - 0.5) * pD, a - 0.2), vec2(0.0185, 0.0125), aa);
			float dx = (fract(s / pD + 0.5) - 0.5) * pD;
			float dart = sst(0.0, aa, 0.0045 * (1.0 - abs(a - 0.2) / 0.014) - abs(dx)) * step(abs(a - 0.2), 0.014);
			float hD = max(egg, dart * 0.8);
			h = hD;
			g = mix(0.18 + 0.25 * st, 1.0, sst(0.02, 0.1, hD));
		} else {
			// ---------------- FLUTED OUTER SLOPE ----------------
			float rib = 0.5 + 0.5 * cos(s * 6.2831853 / 0.03);
			float prof = clamp((a - 0.215) / 0.045, 0.0, 1.0);
			h = (0.35 + 0.55 * rib) * (1.0 - 0.5 * prof);
			g = 1.0 - 0.35 * sst(0.25, 0.26, a);
		}
	}

	// far away the fine carving melts into an even gilt tone
	float fade = sst(0.012, 0.03, px);
	h = mix(h, 0.45, fade);
	g = mix(g, 0.8, fade);

	// --- lighting: flat bevel normal + embossed relief from the ornament ---
	vec3 n = normalize(cross(dFdx(v_vpos), dFdy(v_vpos)));
	if (n.z < 0.0) n = -n;
	vec2 grad = vec2(dFdx(h), dFdy(h)) * (0.006 / px);
	grad = clamp(grad, vec2(-1.5), vec2(1.5));
	n = normalize(n + vec3(-grad.x, -grad.y, 0.0) * 0.9);

	vec3 key = normalize(vec3(-0.4, 0.55, 0.75));
	vec3 v = normalize(-v_vpos);
	float diff = max(dot(n, key), 0.0);
	float spec = pow(max(dot(n, normalize(key + v)), 0.0), 28.0);

	vec3 gold = vec3(0.80, 0.58, 0.22);
	vec3 dark = vec3(0.22, 0.13, 0.05);
	vec3 base = mix(dark, gold, clamp(h, 0.0, 1.0));
	base = base * g + dark * (1.0 - g) * 0.8;

	vec3 col = base * (0.30 + 0.95 * diff) + vec3(1.0, 0.8, 0.4) * spec * 0.5 * g;
	col *= 0.9;
	float dist = length(v_vpos);
	col *= mix(0.68, 1.0, 1.0 - sst(8.0, 55.0, dist));
	gl_FragColor = vec4(col, 1.0);
}`;

const FRAME_VERT = `
precision highp float;
uniform mat4 proj, view, model;
uniform float yScale;
uniform vec2 fsize;
attribute vec4 prof;
varying vec2 v_l;
varying vec3 v_vpos;
void main() {
	float ox = prof.x > 0.5 ? fsize.x + prof.z : -prof.z;
	float oy = prof.y > 0.5 ? fsize.y + prof.z : -prof.z;
	v_l = vec2(ox, oy);
	vec4 mpos = model * vec4(ox, oy, prof.w, 1.0);
	mpos.y *= yScale;
	vec4 vp = view * mpos;
	v_vpos = vp.xyz;
	gl_Position = proj * vp;
}`;

module.exports = (regl) => {
	const drawText = text.draw(regl);
	const painting =
		regl({
			frag: `
	precision lowp float;
	uniform sampler2D tex;
	varying vec3 uv;

	// http://madebyevan.com/shaders/fast-rounded-rectangle-shadows/
	// This approximates the error function, needed for the gaussian integral
	vec4 erf(vec4 x) {
		vec4 s = sign(x), a = abs(x);
		x = 1.0 + (0.278393 + (0.230389 + 0.078108 * (a * a)) * a) * a;
		x *= x;
		return s - s / (x * x);
	}

	// Return the mask for the shadow of a box from lower to upper
	float boxShadow(vec2 lower, vec2 upper, vec2 point, float sigma) {
		vec4 query = vec4(point - lower, upper - point);
		vec4 integral = 0.5 + 0.5 * erf(query * (sqrt(0.5) / sigma));
		return (integral.z - integral.x) * (integral.w - integral.y);
	}

	void main () {
		float frontMask = smoothstep(0.9, 1.0, uv.z);
		float paintingMask = step(0.001, uv.z);
		float shadowAlpha = boxShadow(vec2(.5), vec2(.7), abs(uv.xy-vec2(.5)), 0.02);
		float wrapping = 0.005 * sign(uv.x-.5) * (1.-uv.z);
		float sideShading = pow(uv.z/4.0, 0.1);
		vec3 col = texture2D(tex, uv.xy - vec2(wrapping, 0.)).rgb;
		col *= mix(sideShading, 1., frontMask);
		// light from the bar above: a touch brighter than the wall,
		// strongest at the top, easing off towards the bottom
		float lamp = 1.0 + 0.22 * (0.35 + 0.65 * uv.y) * (1.0 - 0.25 * pow(abs(uv.x - 0.5) * 2.0, 2.0));
		col *= mix(1.0, lamp, frontMask);
		gl_FragColor = mix(vec4(0.,0.,0.,shadowAlpha), vec4(col,1.), paintingMask);
	}`,
			vert: `
	precision highp float;
	uniform mat4 proj, view, model;
	uniform float yScale;
	attribute vec3 pos;
	varying vec3 uv;
	void main () {
		uv = pos;
		vec4 mpos = model * vec4(pos, 1);
		mpos.y *= yScale;
		gl_Position = proj * view * mpos;
	}`,

			attributes: {
				pos: [
					0, 0, 1, //Front
					1, 0, 1,
					0, 1, 1,
					1, 1, 1,
					0, 0, 0, //Contour
					1, 0, 0,
					0, 1, 0,
					1, 1, 0,
					-0.1, -0.1, 0, //Shadow
					1.1,  -0.1, 0,
					-0.1,  1.1, 0,
					1.1,   1.1, 0
				]
			},

			//count: 6
			elements: [
				0, 1, 2, 3, 2, 1, //Front
				1, 0, 5, 4, 5, 0, //Contour
				3, 1, 7, 5, 7, 1,
				0, 2, 4, 6, 4, 2,
				8,  9,  4, 5, 4, 9, //Shadow
				9,  11, 5, 7, 5, 11,
				11, 10, 7, 6, 7, 10,
				10, 8,  6, 4, 6, 8,
			],

			uniforms: {
				model: regl.prop('model'),
				tex: regl.prop('tex')
			},

			blend: {
				enable: true,
				func: {
					srcRGB: 'src alpha',
					srcAlpha: 'one minus src alpha',
					dstRGB: 'one minus src alpha',
					dstAlpha: 1
				},
				color: [0, 0, 0, 0]
			}
		});
	const mesh = buildFrameMesh();
	const frame = regl({
		frag: FRAME_FRAG,
		vert: FRAME_VERT,
		attributes: { prof: mesh.verts },
		elements: mesh.elems,
		uniforms: {
			model: regl.prop('framemodel'),
			fsize: regl.prop('framesize')
		},
		// double sided so it also works in the mirrored floor reflection
		cull: { enable: false },
		blend: { enable: false }
	});

	// Minimal picture light: a wall plate, an arm and a slim bar.
	const fixture = regl({
		frag: `#extension GL_OES_standard_derivatives : enable
precision highp float;
uniform vec3 fixcol;
uniform float fixglow;
varying vec3 v_vpos;
void main() {
	vec3 n = normalize(cross(dFdx(v_vpos), dFdy(v_vpos)));
	if (n.z < 0.0) n = -n;
	vec3 key = normalize(vec3(-0.35, 0.65, 0.70));
	vec3 col = fixcol * (0.40 + 0.90 * max(dot(n, key), 0.0));
	col = mix(col, vec3(1.0, 0.88, 0.62), fixglow);
	gl_FragColor = vec4(col, 1.0);
}`,
		vert: `
precision highp float;
uniform mat4 proj, view, model;
uniform float yScale;
attribute vec3 pos;
varying vec3 v_vpos;
void main() {
	vec4 mpos = model * vec4(pos, 1.0);
	mpos.y *= yScale;
	vec4 vp = view * mpos;
	v_vpos = vp.xyz;
	gl_Position = proj * vp;
}`,
		attributes: {
			pos: [
				[-0.5, -0.5, -0.5], [0.5, -0.5, -0.5], [0.5, 0.5, -0.5], [-0.5, 0.5, -0.5],
				[-0.5, -0.5, 0.5], [0.5, -0.5, 0.5], [0.5, 0.5, 0.5], [-0.5, 0.5, 0.5]
			]
		},
		elements: [
			0, 1, 2, 0, 2, 3,
			4, 5, 6, 4, 6, 7,
			0, 1, 5, 0, 5, 4,
			2, 3, 7, 2, 7, 6,
			0, 3, 7, 0, 7, 4,
			1, 2, 6, 1, 6, 5
		],
		uniforms: {
			model: regl.prop('fixmodel'),
			fixcol: regl.prop('fixcol'),
			fixglow: regl.prop('fixglow')
		},
		// the matrices can mirror the box, so draw both sides
		cull: { enable: false },
		blend: { enable: false }
	});

	return function (batch) {
		painting(batch);
		frame(batch);

		const fixtures = [];

		batch.forEach((p) => {
			if (p.fixtures) {
				fixtures.push(...p.fixtures);
			}
		});

		if (fixtures.length) {
			fixture(fixtures);
		}

		drawText(batch);
	}
};

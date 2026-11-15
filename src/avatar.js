'use strict';

const NIGHT_GLSL = require('./env').GLSL;   // moonlit by night (see env.js)

/*
 * THE ARTIST IN THE TREE COURT
 * ----------------------------
 * A 3D likeness of Muzammil (made with Avaturn from photographs), lying
 * on his back along the black bench under the glass dome, one knee up, a
 * hand under his head and an open book resting over his face. His other
 * arm reaches up and sways slowly through the light from the dome while
 * his fingers play in it. Above him floats a paintbrush; tapping it (or
 * the About card that appears when you face the court) tells you about
 * him.
 *
 * The model is packed into res/avatar/ (avatar.json describes the parts,
 * avatar.bin holds the numbers, the rest are its textures). It has a
 * skeleton; each frame the pose is worked out here and the skin is
 * bent to follow it on the CPU, which is cheap for a model this size and
 * works the same on every phone.
 *
 * His walk is motion capture (res/avatar/motion.*, made by
 * scripts/avatar/build_motion.py from clips of a real person moving),
 * and so is the way his body moves at the piano; what hangs loose on him
 * (hair, the ends of the scarf, the skirt of the coat) is left a little
 * behind by every movement and swings back (see "follow-through" below).
 *
 * When the round stair hall is in view he is there instead, at the
 * piano, playing (see pianoPose below): his hands follow the recording
 * that is sounding (sound.js), his body the music.
 *
 * Poses are written as turns about the gallery's own axes (x to his left,
 * y up, z in front of him), applied at each joint as if the body were
 * still standing straight, which keeps them easy to read and adjust.
 */

const { A, BENCH, oculusGLSL } = require('./alcove');
const quality = require('./quality');
const SH = require('./stairhall');
const sound = require('./sound');

const HEIGHT = 1.74;              // his real height
const MODEL_HEIGHT = 1.877;       // top of the head in the model
const S = HEIGHT / MODEL_HEIGHT;

// where he lies: on his back along the round black bench, on the side
// facing the arch, head towards the court's back wall (-z)
const PLACE = {
	x: A.cx - 1.22,
	z: A.zc + 0.02,
	hipY: BENCH.seat + 0.115      // the hip joint, above the bench top
};


/* ===========================================================
 * SMALL MATHS
 * ===========================================================
 */

const qmul = (a, b) => [
	a[3] * b[0] + a[0] * b[3] + a[1] * b[2] - a[2] * b[1],
	a[3] * b[1] - a[0] * b[2] + a[1] * b[3] + a[2] * b[0],
	a[3] * b[2] + a[0] * b[1] - a[1] * b[0] + a[2] * b[3],
	a[3] * b[3] - a[0] * b[0] - a[1] * b[1] - a[2] * b[2]
];
const qconj = (q) => [-q[0], -q[1], -q[2], q[3]];
const qaxis = (ax, ang) => {
	const l = Math.hypot(ax[0], ax[1], ax[2]) || 1, s = Math.sin(ang / 2);
	return [ax[0] / l * s, ax[1] / l * s, ax[2] / l * s, Math.cos(ang / 2)];
};
// turns about x, then y, then z (degrees), in the gallery's axes
const qeuler = (x, y, z) => qmul(qaxis([0, 0, 1], z * Math.PI / 180), qmul(qaxis([0, 1, 0], y * Math.PI / 180), qaxis([1, 0, 0], x * Math.PI / 180)));
const qnorm = (q) => { const l = Math.hypot(...q) || 1; return q.map((c) => c / l); };
const qslerp = (a, b, t) => {
	let d = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
	const bb = d < 0 ? b.map((c) => -c) : b;
	d = Math.abs(d);
	if (d > 0.9995) return qnorm(a.map((c, i) => c + (bb[i] - c) * t));
	const th = Math.acos(d), s = Math.sin(th);
	const wa = Math.sin((1 - t) * th) / s, wb = Math.sin(t * th) / s;
	return a.map((c, i) => c * wa + bb[i] * wb);
};

const vsub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const vadd = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const vscale = (a, k) => [a[0] * k, a[1] * k, a[2] * k];
const vdot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const vlen = (a) => Math.hypot(a[0], a[1], a[2]);
const vnorm = (a) => { const l = vlen(a) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
const vcross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
// a vector turned by a quaternion
const qrot = (q, v) => {
	const u = [q[0], q[1], q[2]], t = vscale(vcross(u, v), 2);
	return vadd(vadd(v, vscale(t, q[3])), vcross(u, t));
};
// the shortest turn that takes direction a to direction b
const qfromto = (a, b) => {
	const c = vcross(a, b), w = 1 + vdot(a, b);
	if (w < 1e-6) return [0, 0, 1, 0];
	return qnorm([c[0], c[1], c[2], w]);
};

// column-major 4x4 from translation, rotation, scale
function trs(t, q, s) {
	const [x, y, z, w] = q;
	const xx = x * x, yy = y * y, zz = z * z, xy = x * y, xz = x * z, yz = y * z, wx = w * x, wy = w * y, wz = w * z;
	return [
		(1 - 2 * (yy + zz)) * s[0], 2 * (xy + wz) * s[0], 2 * (xz - wy) * s[0], 0,
		2 * (xy - wz) * s[1], (1 - 2 * (xx + zz)) * s[1], 2 * (yz + wx) * s[1], 0,
		2 * (xz + wy) * s[2], 2 * (yz - wx) * s[2], (1 - 2 * (xx + yy)) * s[2], 0,
		t[0], t[1], t[2], 1
	];
}
function mmul(a, b) {
	const o = new Array(16);
	for (let c = 0; c < 4; c++) {
		for (let r = 0; r < 4; r++) {
			o[c * 4 + r] = a[r] * b[c * 4] + a[4 + r] * b[c * 4 + 1] + a[8 + r] * b[c * 4 + 2] + a[12 + r] * b[c * 4 + 3];
		}
	}
	return o;
}
// rotation part of a column-major matrix as a quaternion (scale removed)
function mquat(m) {
	const sx = Math.hypot(m[0], m[1], m[2]), sy = Math.hypot(m[4], m[5], m[6]), sz = Math.hypot(m[8], m[9], m[10]);
	const a = m[0] / sx, b = m[1] / sx, c = m[2] / sx, d = m[4] / sy, e = m[5] / sy, f = m[6] / sy, g = m[8] / sz, h = m[9] / sz, i = m[10] / sz;
	const tr = a + e + i;
	let q;
	if (tr > 0) {
		const s = Math.sqrt(tr + 1) * 2;
		q = [(f - h) / s, (g - c) / s, (b - d) / s, s / 4];
	} else if (a > e && a > i) {
		const s = Math.sqrt(1 + a - e - i) * 2;
		q = [s / 4, (d + b) / s, (g + c) / s, (f - h) / s];
	} else if (e > i) {
		const s = Math.sqrt(1 + e - a - i) * 2;
		q = [(d + b) / s, s / 4, (h + f) / s, (g - c) / s];
	} else {
		const s = Math.sqrt(1 + i - a - e) * 2;
		q = [(g + c) / s, (h + f) / s, s / 4, (b - d) / s];
	}
	return qnorm(q);
}


// height of whatever is under a point: the earth round the trunk, the
// bench top, or the floor
function groundAt(x, z) {
	const r = Math.hypot(x - A.cx, z - A.zc);
	return r < BENCH.inner ? BENCH.soil : r < BENCH.outer ? BENCH.seat : 0;
}

/* ===========================================================
 * POSES
 * ===========================================================
 *
 * Each pose: bone name -> [x, y, z] degrees about the gallery's axes.
 */

const LYING = {
	// left knee up, right leg long and loose
	LeftUpLeg: [-62, 10, 0],
	LeftLeg: [122, 0, 0],
	LeftFoot: [30, 0, 0],
	RightUpLeg: [0, -3, -2],
	RightLeg: [4, 0, 0],
	RightFoot: [35, -12, 0],
	// head resting on his left hand
	Neck: [10, 0, 0],
	Head: [6, 0, 0],
	LeftShoulder: [0, 0, 6],
	LeftArm: [-112.4, 3.4, 62.5],
	LeftForeArm: [0, -122.6, 0],
	LeftHand: [0, 0, -10],
	// right arm reaching up towards the dome
	RightShoulder: [0, 0, 0],
	RightArm: [0, 78, -8],
	RightForeArm: [0, 14, 0],
	RightHand: [0, 0, 0]
};
// fingers: the left loosely curled under his head, the right open
for (const side of ['Left', 'Right']) {
	const sg = side === 'Left' ? -1 : 1;
	const c = side === 'Left' ? 1 : 0.35;
	['Index', 'Middle', 'Ring', 'Pinky'].forEach((f, k) => {
		LYING[side + 'Hand' + f + '1'] = [0, 0, sg * (18 + k * 6) * c];
		LYING[side + 'Hand' + f + '2'] = [0, 0, sg * (26 + k * 6) * c];
		LYING[side + 'Hand' + f + '3'] = [0, 0, sg * 16 * c];
	});
}


/* ===========================================================
 * WALKING
 * ===========================================================
 *
 * In the tour he also walks past the camera, which sees only his shoes
 * and the bottom of his trousers. The walk is a gait cycle, phase 0..1
 * from his left heel striking the floor: the angles of hip, knee, ankle
 * and toes follow the curves of a normal human walk, the right leg half
 * a cycle behind the left. The pelvis turns a little with each step, the
 * arms swing against the legs, and the whole body is lowered every frame
 * so that whichever foot is down stands exactly on the floor.
 */

const STRIDE = 1.42;            // metres covered in one full cycle (two steps)

// a smooth bump centred on c (phase wraps round)
function bump(x, c, w) {
	let d = x - c;
	d -= Math.round(d);
	return Math.exp(-(d / w) * (d / w));
}

function legAngles(f) {
	const hip = 9 + 20 * Math.cos(2 * Math.PI * f);                       // + = thigh forward
	const knee = 4 + 13 * bump(f, 0.14, 0.07) + 57 * bump(f, 0.72, 0.12);   // + = bent
	const ankle = 5 * bump(f, 0.06, 0.04) - 9 * bump(f, 0.42, 0.12) + 17 * bump(f, 0.62, 0.05) - 3 * bump(f, 0.85, 0.1);  // + = toes down
	const toe = -26 * bump(f, 0.58, 0.06);                                 // - = toes bent up
	return { hip, knee, ankle, toe };
}

function walkPose(phase) {
	const f = ((phase % 1) + 1) % 1;
	const L = legAngles(f), R = legAngles(f + 0.5);
	const c = Math.cos(2 * Math.PI * f), sn = Math.sin(2 * Math.PI * f);
	// (in the body's own axes: x to his left, y up, z in front of him;
	// a thigh swings forward with a negative turn about x)
	return {
		swing: {
			LeftArm: [16 * c, 0, 0], RightArm: [-16 * c, 0, 0],
			LeftForeArm: [0, -14 - 8 * Math.max(0, -c), 0], RightForeArm: [0, 14 + 8 * Math.max(0, c), 0]
		},
		pose: {
			Hips: [0, 5 * sn, 1.5 * Math.cos(4 * Math.PI * f)],
			Spine1: [3, -4 * sn, 0],
			LeftUpLeg: [-L.hip, 0, 0], LeftLeg: [L.knee, 0, 0], LeftFoot: [L.ankle, 0, 0], LeftToeBase: [L.toe, 0, 0],
			RightUpLeg: [-R.hip, 0, 0], RightLeg: [R.knee, 0, 0], RightFoot: [R.ankle, 0, 0], RightToeBase: [R.toe, 0, 0],
			// arms down by his sides (they are held out straight in the model)
			LeftArm: [0, 0, -78], RightArm: [0, 0, 78],
			LeftHand: [0, 0, -8], RightHand: [0, 0, 8]
		},
		sway: 0.022 * c
	};
}


/* ===========================================================
 * SHADERS
 * ===========================================================
 */

const VERT = `
precision highp float;
uniform mat4 proj, view;
uniform float yScale;
attribute vec3 position, normal;
attribute vec2 uv;
varying vec3 v_pos, v_n, v_eye;
varying vec2 v_uv;
void main() {
	v_pos = position;
	vec3 tt = view[3].xyz;
	v_eye = -vec3(dot(view[0].xyz, tt), dot(view[1].xyz, tt), dot(view[2].xyz, tt));
	v_n = normal;
	v_uv = uv;
	vec3 p = position;
	p.y *= yScale;
	gl_Position = proj * view * vec4(p, 1.0);
}`;

const LANTERN = require('./lanterns');
const FRAG = `#extension GL_OES_standard_derivatives : enable
precision highp float;
${NIGHT_GLSL}
uniform float time;
${SH.roomGLSL()}
${LANTERN.lanternGLSL(LANTERN.TREE_LANTERN)}
uniform sampler2D tex;
uniform float alphaCut, skin, glowLight, kind, alphaScale;
uniform vec3 glowPos;
// in the confessional: the priest's lamp (xyz, strength), and how much of
// the court's own light reaches him (0 there)
uniform vec4 boothLamp;
uniform float court;
// 1 in the stair hall: lit by the candles round the piano
uniform float candle;
varying vec3 v_pos, v_n, v_eye;
varying vec2 v_uv;
${oculusGLSL()}
float chash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float cnoise(vec2 p) {
	vec2 i = floor(p), g = fract(p);
	g = g * g * (3.0 - 2.0 * g);
	return mix(mix(chash(i), chash(i + vec2(1.0, 0.0)), g.x), mix(chash(i + vec2(0.0, 1.0)), chash(i + vec2(1.0, 1.0)), g.x), g.y);
}
// bends the surface by a height h (no need for the cloth's own directions)
vec3 bump(vec3 N, vec3 p, float h, float k) {
	vec3 dpx = dFdx(p), dpy = dFdy(p);
	float dhx = dFdx(h), dhy = dFdy(h);
	vec3 r1 = cross(dpy, N), r2 = cross(N, dpx);
	float det = dot(dpx, r1);
	vec3 g = sign(det) * (dhx * r1 + dhy * r2);
	return normalize(abs(det) * N - k * g);
}
void main() {
	vec4 t = texture2D(tex, v_uv);
	t.a *= alphaScale;
	if (t.a < alphaCut) discard;
	float gloss = 0.0;
	float hairStreak = 0.5;
	// the outfit: a long black wool overcoat, a ribbed roll-neck, pleated
	// pinstripe trousers, a leather belt and shoes, a maroon scarf
	// (scripts/avatar/build_outfit.py makes them)
	if (kind > 0.5) {
		float n = fract(sin(dot(floor(v_uv * vec2(900.0, 900.0)), vec2(12.9898, 78.233))) * 43758.5453);
		if (kind < 1.5) {
			t.rgb = vec3(0.038, 0.037, 0.040) * (0.9 + 0.2 * n);
			gloss = 0.05;
		} else if (kind < 2.5) {
			float rib = abs(fract(v_uv.x / 0.007) - 0.5) * 2.0;
			t.rgb = vec3(0.032, 0.031, 0.034) * (0.75 + 0.45 * smoothstep(0.2, 0.8, rib));
			gloss = 0.02;
		} else if (kind < 3.5) {
			float d = abs(fract(v_uv.x / 0.016) - 0.5) * 0.016;
			float stripe = 1.0 - smoothstep(0.0004, 0.0011, d);
			t.rgb = mix(vec3(0.034, 0.034, 0.037), vec3(0.22, 0.22, 0.24), stripe * 0.75);
			gloss = 0.04;
		} else if (kind < 4.5) {
			bool buckle = abs(v_uv.x) < 0.028;
			t.rgb = buckle ? vec3(0.62, 0.62, 0.64) : vec3(0.025, 0.022, 0.02);
			gloss = buckle ? 0.9 : 0.35;
		} else if (kind < 6.5) {
			float l = dot(t.rgb, vec3(0.33));
			t.rgb = vec3(0.022, 0.02, 0.019) + vec3(0.05) * l * l;
			gloss = 0.55;
		} else if (kind > 8.5) {
			// his hair: sculpted locks (scripts/avatar/character.py). uv.x is
			// the lock's number plus the way round it, uv.y the way along it
			// (-1 marks the close dark cap under the locks)
			if (v_uv.x < -0.5) {
				t.rgb = vec3(0.012, 0.010, 0.009);
				hairStreak = 0.35;
			} else {
				float id = floor(v_uv.x), round_ = fract(v_uv.x);
				float h1 = fract(sin(id * 12.9898) * 43758.5453);
				// the strands that make up a lock: fine lines running its length
				float s1 = sin(round_ * 6.2831 * 9.0 + h1 * 6.0 + v_uv.y * 1.5);
				float s2 = sin(round_ * 6.2831 * 23.0 + h1 * 17.0);
				hairStreak = 0.5 + 0.26 * s1 + 0.20 * s2;
				// black, with the brown in it where a strand lightens; no two
				// locks quite the same, and the ends a shade paler
				t.rgb = vec3(0.085, 0.064, 0.050) * (0.40 + 1.05 * hairStreak) * (0.78 + 0.44 * h1) * (0.85 + 0.30 * v_uv.y);
			}
			gloss = 0.0;
		} else if (kind > 7.5) {
			// socks: fine charcoal wool in narrow ribs
			float rib = abs(fract(v_uv.x * 900.0) - 0.5) * 2.0;
			t.rgb = vec3(0.030, 0.029, 0.033) * (0.78 + 0.32 * smoothstep(0.2, 0.8, rib) + 0.1 * n);
			gloss = 0.02;
		} else {
			// the scarf: dark maroon wool, knitted in soft ribs
			float rib = abs(fract(v_uv.x / 0.006) - 0.5) * 2.0;
			float st = abs(fract(v_uv.y / 0.008 + 0.5 * step(0.5, fract(v_uv.x / 0.012))) - 0.5) * 2.0;
			t.rgb = vec3(0.24, 0.04, 0.055) * (0.7 + 0.25 * smoothstep(0.1, 0.9, rib) + 0.12 * st + 0.12 * n);
			gloss = 0.0;
		}
	}
	vec3 N = normalize(v_n);
	if (!gl_FrontFacing) N = -N;
	vec3 V = normalize(v_eye - v_pos);
	// cloth is never smooth: it lies in soft folds and creases (long
	// ones down the coat and trousers, shorter across the knit), and a
	// woven surface has a grain that breaks the light up
	float cloth = step(0.5, kind) * (1.0 - step(3.5, kind)) + step(6.5, kind) * (1.0 - step(8.5, kind));
	float isHair = step(8.5, kind);
	vec3 hairT = vec3(0.0, 1.0, 0.0);
	if (cloth > 0.5) {
		float folds = cnoise(v_uv * vec2(34.0, 9.0)) * 0.6 + cnoise(v_uv * vec2(70.0, 22.0) + 5.0) * 0.4;
		float grain = cnoise(v_uv * 520.0);
		float fade = 1.0 - smoothstep(0.0005, 0.004, fwidth(v_uv.x) + fwidth(v_uv.y));
		N = bump(N, v_pos, folds * 0.012 + grain * 0.0006 * fade, 1.0);
		// the hollows of the folds hold a little shadow
		t.rgb *= 0.82 + 0.36 * folds;
	}
	if (isHair > 0.5 && v_uv.x > -0.5) {
		// the strands run the length of the lock; each one tilts the light
		// a little its own way
		vec3 dpx = dFdx(v_pos), dpy = dFdy(v_pos);
		vec3 along = cross(dpy, N) * dFdx(v_uv.y) + cross(N, dpx) * dFdy(v_uv.y);
		float al = length(along);
		if (al > 1e-7) {
			hairT = along / al;
			N = normalize(N + normalize(cross(N, hairT)) * (hairStreak - 0.5) * 0.75);
		}
	}
	// soft daylight in the court, mostly from above
	float up = 0.55 + 0.45 * N.y;
	float light = (0.36 + 0.22 * up) * mix(0.5, 1.0, court);
	// sun through the glass dome, dappled by the tree
	float ndl = max(dot(N, SHAFT), 0.0);
	float sun = ndl * oculusOpen(v_pos) * treeShade(v_pos) * court;
	light += sun * 1.25;
	// a little light from the glowing brush above his head
	vec3 gl = glowPos - v_pos;
	float gd = length(gl);
	light += glowLight * max(dot(N, gl / gd), 0.0) / (1.0 + 6.0 * gd * gd);
	vec3 col = t.rgb * light * vec3(1.03, 1.0, 0.95);
	// skin: a warm glow where light passes through, and a soft sheen
	col += skin * t.rgb * vec3(0.20, 0.06, 0.03) * (0.4 + sun);
	// (his skin is a puppet's: matte, and the light sinks a little way
	// into it, so its shadows are warm and soft, and where it is thin and
	// turns away from you, ears, nostrils, the edge of a cheek, it glows)
	float thin = pow(1.0 - max(dot(N, V), 0.0), 2.2);
	col += skin * t.rgb * vec3(0.55, 0.16, 0.08) * thin * (0.22 + 0.6 * sun) * (1.0 - candle);
	vec3 H = normalize(SHAFT + V);
	col += vec3(1.0, 0.95, 0.85) * pow(max(dot(N, H), 0.0), 40.0) * sun * (0.06 + 0.1 * skin);
	// polish on leather and metal, and a soft sheen on the cloth
	vec3 R = reflect(-V, N);
	col += vec3(0.9, 0.88, 0.85) * gloss * (pow(max(dot(R, SHAFT), 0.0), 30.0) * (0.3 + sun) + 0.08 * smoothstep(0.2, 1.0, R.y));
	// wool has a nap: where the cloth turns away from you its fibres
	// catch whatever light there is, a soft pale edge, never a shine
	col += vec3(0.11, 0.11, 0.12) * cloth * pow(1.0 - max(dot(N, V), 0.0), 2.6) * (0.35 + light);
	col += vec3(0.05, 0.05, 0.055) * step(0.5, kind) * (1.0 - cloth) * pow(1.0 - max(dot(N, V), 0.0), 3.0);
	col = toNight(col, 0.85);
	// at the piano: nothing but the candles on the floor round him and
	// the pale light falling from the oculus
	if (candle > 0.5) {
		vec3 spc;
		vec3 rl = roomLight(v_pos, N, V, clamp(gloss, 0.0, 1.0), spc);
		col = t.rgb * rl * mix(1.3, 0.95, skin) + spc * (0.15 + gloss);
		col += skin * t.rgb * vec3(0.16, 0.05, 0.02) * rl;
		col += skin * t.rgb * vec3(0.55, 0.16, 0.08) * pow(1.0 - max(dot(N, V), 0.0), 2.2) * rl * 0.7;
		float edge = pow(1.0 - max(dot(N, V), 0.0), 2.6);
		col += (vec3(0.16) * cloth + vec3(0.05) * (1.0 - cloth)) * edge * rl * 1.6;
	}
	// the confessional's lamp, warm, in front of him and to the side, with
	// a soft rim on his hair where it wraps round
	if (boothLamp.w > 0.0) {
		vec3 bl = boothLamp.xyz - v_pos;
		float bd = length(bl);
		float lam = max(dot(N, bl / bd), 0.0);
		float wrap = max(dot(N, bl / bd) * 0.5 + 0.5, 0.0);
		col += t.rgb * vec3(1.0, 0.70, 0.40) * boothLamp.w * (lam * 0.8 + wrap * 0.25) / (1.0 + bd * bd * 1.6);
		col += vec3(1.0, 0.75, 0.45) * boothLamp.w * 0.22 * pow(1.0 - max(dot(N, V), 0.0), 2.5) * wrap;
		// and a little of the booth's light through the brass behind him
		vec3 gl2 = vec3(-1.30, 1.75, 43.62) - v_pos;
		float g2 = length(gl2);
		col += t.rgb * vec3(1.0, 0.78, 0.55) * 2.6 * (max(dot(N, gl2 / g2), 0.0) * 0.8 + 0.1) / (1.0 + g2 * g2 * 3.0);
		col += vec3(1.0, 0.8, 0.6) * 0.06 * pow(1.0 - max(dot(N, V), 0.0), 2.0) * max(dot(N, gl2 / g2), 0.0);
	}
	// at night, the little lantern by his head: warm on his face and coat,
	// and a glint on the leather
	if (isHair > 0.5) {
		// hair shines along its length, not like a surface: a narrow pale
		// band where the light meets the strands square on, and a wider,
		// warmer one beside it
		vec3 Lh = normalize(vec3(0.25, 1.0, 0.2));
		vec3 Hh = normalize(Lh + V);
		float a1 = dot(normalize(hairT + N * (hairStreak - 0.5) * 0.4), Hh);
		float a2 = dot(normalize(hairT - N * 0.28), Hh);
		float band1 = pow(max(1.0 - a1 * a1, 0.0), 26.0);
		float band2 = pow(max(1.0 - a2 * a2, 0.0), 7.0);
		float lit = (candle > 0.5 ? 0.85 : 0.45 + sun) * mix(1.0, 0.4, night) * max(dot(N, Lh) * 0.6 + 0.4, 0.0);
		col += (vec3(0.80, 0.76, 0.70) * band1 * 0.30 + vec3(0.36, 0.24, 0.14) * band2 * 0.20) * lit * (0.5 + hairStreak);
		// and each lock is edged with light where it turns away, which is
		// what separates one from the next
		col += vec3(0.13, 0.11, 0.09) * pow(1.0 - max(dot(N, V), 0.0), 2.0) * lit * (0.6 + 0.8 * hairStreak);
		// the locks sink into shadow between one another
		col *= 0.72 + 0.56 * smoothstep(0.25, 0.8, hairStreak);
	}
	vec3 lan = lanternLight(v_pos, N) * (1.0 - candle);
	col += t.rgb * lan * (1.3 + 1.2 * skin) + lan * gloss * 0.4;
	gl_FragColor = vec4(col, t.a);
}`;


/* ===========================================================
 * MODULE
 * ===========================================================
 */

function loadTexture(regl, url) {
	const tex = regl.texture({ data: [[[120, 100, 90, 255]]], min: 'linear', mag: 'linear' });
	fetch(url)
		.then((r) => {
			if (!r.ok) throw new Error('Could not load ' + url);
			return r.blob();
		})
		.then((b) => createImageBitmap(b, { premultiplyAlpha: 'none' }).catch(() => new Promise((ok, fail) => {
			const img = new Image();
			img.onload = () => ok(img);
			img.onerror = fail;
			img.src = URL.createObjectURL(b);
		})))
		.then((img) => tex({ data: img, flipY: false, min: 'mipmap', mipmap: 'nice', mag: 'linear', wrapS: 'clamp', wrapT: 'clamp' }))
		.catch((e) => console.error(e));
	return tex;
}

/* ===========================================================
 * THE BOOK
 * ===========================================================
 *
 * Built in its own frame: X across the open pages (his left is +X),
 * Y out of the pages towards his face, Z up the spine to the top edge.
 * One loose page turns from his right to his left.
 */

const BOOK = { w: 0.13, h: 0.20 };

// a paperback held open: soft covers no bigger than the pages, and pages
// that rise from the spine before lying flat
const pageY = (u) => 0.011 * (1 - Math.pow(1 - u, 3));

function buildBook() {
	const pos = [], nrm = [], uv = [], kind = [], idx = [];
	const quad = (a, b, c, d, n, k, uvs) => {
		const base = pos.length / 3;
		[a, b, c, d].forEach((p, i) => { pos.push(...p); nrm.push(...n); uv.push(...uvs[i]); kind.push(k); });
		idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
	};
	const { w, h } = BOOK;
	const hz = h / 2;
	const U = [[0, 1], [1, 1], [1, 0], [0, 0]];
	const cy = -0.006, cw = w + 0.001, ch = hz + 0.001;
	// soft covers (kind 1 = the front, outside; 2 = the back and insides)
	// front cover, on his left (+X): its outside faces away from him (-Y)
	quad([0, cy, -ch], [cw, cy, -ch], [cw, cy, ch], [0, cy, ch], [0, -1, 0], 1, [[0, 1], [1, 1], [1, 0], [0, 0]]);
	quad([0, cy + 0.001, -ch], [0, cy + 0.001, ch], [cw, cy + 0.001, ch], [cw, cy + 0.001, -ch], [0, 1, 0], 2, U);
	quad([-cw, cy, -ch], [0, cy, -ch], [0, cy, ch], [-cw, cy, ch], [0, -1, 0], 2, U);
	quad([-cw, cy + 0.001, -ch], [-cw, cy + 0.001, ch], [0, cy + 0.001, ch], [0, cy + 0.001, -ch], [0, 1, 0], 2, U);
	// the page blocks (kind 3 = printed page, 4 = page edges), in strips so
	// the pages can curve up from the spine
	const N = 8;
	for (const sd of [1, -1]) {
		for (let i = 0; i < N; i++) {
			const u0 = i / N, u1 = (i + 1) / N;
			const x0 = (0.002 + u0 * (w - 0.002)) * sd, x1 = (0.002 + u1 * (w - 0.002)) * sd;
			const y0 = pageY(u0), y1 = pageY(u1);
			const ua = sd > 0 ? u0 : 1 - u0, ub = sd > 0 ? u1 : 1 - u1;
			const ny = 1, nx = -(y1 - y0) / (x1 - x0);
			quad([x0, y0, -hz], [x1, y1, -hz], [x1, y1, hz], [x0, y0, hz], [nx, ny, 0], 3, [[ua, 1], [ub, 1], [ub, 0], [ua, 0]]);
			// top and bottom edges of the block
			quad([x0, cy + 0.001, hz], [x1, cy + 0.001, hz], [x1, y1, hz], [x0, y0, hz], [0, 0, 1], 4, U);
			quad([x0, y0, -hz], [x1, y1, -hz], [x1, cy + 0.001, -hz], [x0, cy + 0.001, -hz], [0, 0, -1], 4, U);
		}
		const xe = w * sd;
		quad([xe, cy + 0.001, -hz], [xe, pageY(1), -hz], [xe, pageY(1), hz], [xe, cy + 0.001, hz], [sd, 0, 0], 4, U);
	}
	// the turning page: a strip of columns, bent in the vertex shader (kind 5)
	const cols = 10;
	for (let i = 0; i < cols; i++) {
		const u0 = i / cols, u1 = (i + 1) / cols;
		const base = pos.length / 3;
		for (const [u, z] of [[u0, -hz], [u1, -hz], [u1, hz], [u0, hz]]) {
			pos.push(u, 0, z); nrm.push(0, 1, 0); uv.push(u, (z + hz) / h); kind.push(5);
		}
		idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
	}
	return { pos, nrm, uv, kind, idx };
}

// the front cover, drawn once on a canvas: an original design of soft
// ink and ochre washes on cream paper, like a painter's own notebook
function coverCanvas() {
	if (typeof document === 'undefined') return null;
	const c = document.createElement('canvas');
	c.width = 512; c.height = 768;
	const g = c.getContext('2d');
	g.fillStyle = '#ebe5d8';
	g.fillRect(0, 0, 512, 768);
	let seed = 7;
	const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
	// washes, built up from many faint soft blots
	const wash = (cx, cy, rx, ry, col, n, a) => {
		for (let i = 0; i < n; i++) {
			const x = cx + (rnd() - 0.5) * rx * 2, y = cy + (rnd() - 0.5) * ry * 2;
			const r = 20 + rnd() * 60;
			const gr = g.createRadialGradient(x, y, 0, x, y, r);
			gr.addColorStop(0, `rgba(${col},${a})`);
			gr.addColorStop(1, `rgba(${col},0)`);
			g.fillStyle = gr;
			g.fillRect(x - r, y - r, r * 2, r * 2);
		}
	};
	// a dark sun over a strip of ochre ground, and still water below
	const sun = g.createRadialGradient(236, 280, 10, 256, 300, 125);
	sun.addColorStop(0, '#3d4866');
	sun.addColorStop(1, '#232a3d');
	g.fillStyle = sun;
	g.beginPath();
	g.arc(256, 300, 122, 0, Math.PI * 2);
	g.fill();
	g.fillStyle = '#b8873f';
	g.beginPath();
	g.moveTo(64, 452);
	for (let x = 64; x <= 448; x += 16) g.lineTo(x, 446 + rnd() * 4);
	for (let x = 448; x >= 64; x -= 16) g.lineTo(x, 466 + rnd() * 4);
	g.fill();
	g.strokeStyle = '#2b2f3a';
	g.lineCap = 'round';
	[[120, 392, 500, 5], [160, 352, 530, 4], [205, 307, 558, 3]].forEach(([x0, x1, y, lw]) => {
		g.lineWidth = lw;
		g.beginPath();
		g.moveTo(x0, y);
		g.lineTo(x1, y);
		g.stroke();
	});
	// paper grain
	for (let i = 0; i < 9000; i++) {
		g.fillStyle = `rgba(90,80,60,${rnd() * 0.05})`;
		g.fillRect(rnd() * 512, rnd() * 768, 1, 1);
	}
	return c;
}

const BOOK_VERT = `
precision highp float;
uniform mat4 proj, view, model;
uniform float yScale, turn, fold;
attribute vec3 position, normal;
attribute vec2 uv;
attribute float kind;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
void main() {
	vec3 p = position;
	vec3 n = normal;
	if (kind > 4.5) {
		// the loose page: hinged at the spine, lying on his right when
		// turn = 0 and on his left when turn = 1, bending as it goes
		float a = turn * 3.14159;
		float u = p.x;
		float th = a + sin(a) * 0.55 * (u - 0.5);
		float r = u * ${BOOK.w.toFixed(3)};
		p = vec3(-cos(th) * r, sin(th) * r + 0.0125, p.z);
		n = vec3(sin(th), cos(th), 0.0);
	}
	// each half turns about the spine towards +Y, so the open book stands
	// as a roof
	float sg = p.x >= 0.0 ? 1.0 : -1.0;
	float ca = cos(fold), sa = sin(fold) * sg;
	p = vec3(p.x * ca - p.y * sa, p.x * sa + p.y * ca, p.z);
	n = vec3(n.x * ca - n.y * sa, n.x * sa + n.y * ca, n.z);
	vec4 wp = model * vec4(p, 1.0);
	v_pos = wp.xyz;
	v_n = mat3(model) * n;
	v_uv = uv;
	v_kind = kind;
	wp.y *= yScale;
	gl_Position = proj * view * wp;
}`;

const BOOK_FRAG = `
precision highp float;
${NIGHT_GLSL}
uniform float time;
${LANTERN.lanternGLSL(LANTERN.TREE_LANTERN)}
uniform sampler2D cover;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_kind;
${oculusGLSL()}
void main() {
	vec3 N = normalize(v_n);
	if (!gl_FrontFacing) N = -N;
	vec3 base;
	if (v_kind < 1.5) base = texture2D(cover, v_uv).rgb;
	else if (v_kind < 2.5) base = vec3(0.86, 0.83, 0.76);
	else if (v_kind < 4.5) {
		base = vec3(0.93, 0.90, 0.83);
		if (v_kind < 3.5) {
			// faint lines of print
			float line = step(0.5, fract(v_uv.y * 34.0)) * step(0.12, v_uv.x) * step(v_uv.x, 0.88) * step(0.08, v_uv.y) * step(v_uv.y, 0.92);
			base *= 1.0 - 0.18 * line;
		} else {
			base *= 0.85 + 0.15 * step(0.5, fract(v_pos.y * 900.0));
		}
	} else {
		base = vec3(0.95, 0.92, 0.85);
		float line = step(0.5, fract(v_uv.y * 34.0)) * step(0.12, v_uv.x) * step(v_uv.x, 0.88) * step(0.08, v_uv.y) * step(v_uv.y, 0.92);
		base *= 1.0 - 0.14 * line;
	}
	float light = 0.42 + 0.2 * (0.5 + 0.5 * N.y);
	light += max(dot(N, SHAFT), 0.0) * oculusOpen(v_pos) * treeShade(v_pos) * 1.2;
	gl_FragColor = vec4(toNight(base * light, 0.85) + base * lanternLight(v_pos, N), 1.0);
}`;


/* ===========================================================
 * THE GLOWING PAINTBRUSH
 * ===========================================================
 */

function buildBrush() {
	const pos = [], nrm = [], col = [], mat = [], idx = [];
	// a real artist's brush, hanging bristles down: [radius, y, colour,
	// material (0 = lacquered wood, 1 = metal, 2 = bristle)], and the
	// bristle tuft pressed flat like a filbert
	const wood = [0.36, 0.11, 0.07], tip = [0.10, 0.07, 0.05], metal = [0.78, 0.76, 0.72];
	const hair = [0.55, 0.41, 0.26], paint = [0.80, 0.55, 0.22];
	const prof = [
		[0.000, -0.150, paint, 2], [0.0012, -0.147, paint, 2], [0.0040, -0.138, paint, 2],
		[0.0058, -0.125, hair, 2], [0.0064, -0.112, hair, 2], [0.0060, -0.104, hair, 2],
		[0.0066, -0.102, metal, 1], [0.0066, -0.080, metal, 1], [0.0062, -0.074, metal, 1],
		[0.0068, -0.072, metal, 1], [0.0070, -0.066, metal, 1],
		[0.0058, -0.064, wood, 0], [0.0062, -0.040, wood, 0], [0.0058, 0.000, wood, 0],
		[0.0046, 0.060, wood, 0], [0.0036, 0.110, wood, 0], [0.0030, 0.130, tip, 0],
		[0.0026, 0.136, tip, 0], [0.0000, 0.139, tip, 0]
	];
	const seg = 16;
	for (let k = 0; k < prof.length; k++) {
		const [r, y, c, m] = prof[k];
		const flat = m === 2 ? 0.45 : 1.0;
		for (let i = 0; i <= seg; i++) {
			const a = i / seg * Math.PI * 2;
			pos.push(Math.cos(a) * r, y, Math.sin(a) * r * flat);
			const k0 = Math.max(k - 1, 0), k1 = Math.min(k + 1, prof.length - 1);
			const dr = prof[k1][0] - prof[k0][0], dy = prof[k1][1] - prof[k0][1];
			const l = Math.hypot(dr, dy) || 1;
			nrm.push(Math.cos(a) * dy / l, -dr / l, Math.sin(a) * dy / l / flat);
			col.push(...c);
			mat.push(m);
		}
	}
	for (let k = 0; k < prof.length - 1; k++) {
		for (let i = 0; i < seg; i++) {
			const a = k * (seg + 1) + i, b = a + seg + 1;
			idx.push(a, b, a + 1, a + 1, b, b + 1);
		}
	}
	return { pos, nrm, col, mat, idx };
}

const BRUSH_VERT = `
precision highp float;
uniform mat4 proj, view, model;
uniform float yScale;
attribute vec3 position, normal, color;
attribute float mat;
varying vec3 v_n, v_col, v_pos, v_eye;
varying float v_mat, v_y;
void main() {
	vec4 wp = model * vec4(position, 1.0);
	v_n = mat3(model) * normal;
	v_col = color;
	v_mat = mat;
	v_y = position.y;
	v_pos = wp.xyz;
	vec3 tt = view[3].xyz;
	v_eye = -vec3(dot(view[0].xyz, tt), dot(view[1].xyz, tt), dot(view[2].xyz, tt));
	wp.y *= yScale;
	gl_Position = proj * view * wp;
}`;

const BRUSH_FRAG = `
precision highp float;
${NIGHT_GLSL}
uniform float pulse;
varying vec3 v_n, v_col, v_pos, v_eye;
varying float v_mat, v_y;
void main() {
	vec3 N = normalize(v_n);
	if (!gl_FrontFacing) N = -N;
	vec3 V = normalize(v_eye - v_pos);
	vec3 L = normalize(vec3(0.2, 1.0, -0.15));
	float diff = 0.45 + 0.55 * max(dot(N, L), 0.0);
	vec3 col = v_col * diff;
	vec3 R = reflect(-V, N);
	if (v_mat < 0.5) col += vec3(0.5, 0.42, 0.35) * pow(max(dot(R, L), 0.0), 24.0) * 0.35;
	else if (v_mat < 1.5) col = v_col * (0.35 + 0.4 * diff) + vec3(0.9, 0.88, 0.82) * (pow(max(dot(R, L), 0.0), 18.0) + 0.25 * smoothstep(0.0, 1.0, R.y));
	else col *= 0.8 + 0.2 * fract(sin(dot(floor(v_pos.xz * 4000.0), vec2(12.9898, 78.233))) * 43758.5453);
	// only the wet paint on the tip holds a faint warm light
	col += vec3(0.30, 0.18, 0.05) * smoothstep(-0.128, -0.150, v_y) * (0.4 + 0.3 * pulse);
	gl_FragColor = vec4(toNight(col, 0.85), 1.0);
}`;

const HALO_VERT = `
precision highp float;
uniform mat4 proj, view;
uniform vec3 center;
uniform float size, yScale;
attribute vec2 corner;
varying vec2 v_c;
void main() {
	vec3 c = center;
	c.y *= yScale;
	vec4 vp = view * vec4(c, 1.0);
	vp.xy += corner * size;
	v_c = corner;
	gl_Position = proj * vp;
}`;

const HALO_FRAG = `
precision highp float;
uniform float pulse;
varying vec2 v_c;
void main() {
	float d = length(v_c);
	float g = exp(-d * d * 6.0) * 0.10 + exp(-d * d * 30.0) * 0.08;
	gl_FragColor = vec4(vec3(1.0, 0.80, 0.45) * g * (0.75 + 0.25 * pulse), 1.0);
}`;

module.exports = (regl) => {

	const base = 'res/avatar/';
	let ready = null;
	const start = Date.now();
	const clock = () => (typeof window !== 'undefined' && window.__streetClock !== undefined ? window.__streetClock : (Date.now() - start) / 1000);

	// the brush's glow, for lighting him; shared with the brush module
	const state = { glowPos: [PLACE.x, 1.9, PLACE.z], glow: 0.0 };

	Promise.all([
		fetch(base + 'avatar.json').then((r) => r.json()),
		fetch(base + 'avatar.bin').then((r) => r.arrayBuffer())
	]).then(([meta, buf]) => {
		ready = build(meta, buf);
	}).catch((e) => console.error(e));

	// the motion-capture clips (he moves by the older hand-made cycles
	// until they have arrived, or if they are missing)
	let motion = null;
	Promise.all([
		fetch(base + 'motion.json').then((r) => (r.ok ? r.json() : null)),
		fetch(base + 'motion.bin').then((r) => (r.ok ? r.arrayBuffer() : null))
	]).then(([mj, mb]) => {
		if (!mj || !mb) return;
		const out = {};
		for (const k in mj.clips) {
			const c = mj.clips[k], nbn = c.bones.length;
			const mean = new Float32Array(mb, c.mean, nbn * 4), meanQ = {};
			c.bones.forEach((n, i) => { meanQ[n] = [mean[i * 4], mean[i * 4 + 1], mean[i * 4 + 2], mean[i * 4 + 3]]; });
			out[k] = Object.assign({}, c, { Q: new Int16Array(mb, c.q, c.frames * nbn * 4), H: new Float32Array(mb, c.hips, c.frames * 3), meanQ });
		}
		motion = out;
	}).catch(() => {});

	// a clip at a moment (in frames, going round and round): every bone's
	// turn from rest, and where the hips are from their rest place
	function sampleClip(c, fr) {
		const n = c.frames, nbn = c.bones.length;
		const f = ((fr % n) + n) % n;
		const i0 = Math.floor(f) % n, i1 = (i0 + 1) % n, a = f - Math.floor(f);
		const q = {};
		for (let b = 0; b < nbn; b++) {
			const o0 = (i0 * nbn + b) * 4, o1 = (i1 * nbn + b) * 4;
			let x0 = c.Q[o0], y0 = c.Q[o0 + 1], z0 = c.Q[o0 + 2], w0 = c.Q[o0 + 3];
			let x1 = c.Q[o1], y1 = c.Q[o1 + 1], z1 = c.Q[o1 + 2], w1 = c.Q[o1 + 3];
			if (x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1 < 0) { x1 = -x1; y1 = -y1; z1 = -z1; w1 = -w1; }
			q[c.bones[b]] = qnorm([x0 + (x1 - x0) * a, y0 + (y1 - y0) * a, z0 + (z1 - z0) * a, w0 + (w1 - w0) * a]);
		}
		const h0 = i0 * 3, h1 = i1 * 3;
		return { q, hips: [c.H[h0] + (c.H[h1] - c.H[h0]) * a, c.H[h0 + 1] + (c.H[h1 + 1] - c.H[h0 + 1]) * a, c.H[h0 + 2] + (c.H[h1 + 2] - c.H[h0 + 2]) * a] };
	}

	const white = regl.texture({ data: [[[255, 255, 255, 255]]] });

	function build(meta, buf) {
		const f32 = (o, n) => new Float32Array(buf, o, n);
		const bones = meta.bones;
		const nb = bones.length;
		const byName = {};
		bones.forEach((b, i) => { byName[b.name] = i; });
		const ibm = [];
		for (let i = 0; i < nb; i++) ibm.push(Array.from(f32(meta.ibm + i * 64, 16)));

		// rest pose: local and world matrices, world rotations
		const restLocal = bones.map((b) => trs(b.t, b.r, b.s));
		const restWorld = [];
		for (let i = 0; i < nb; i++) {
			const p = bones[i].parent;
			restWorld[i] = p < 0 ? restLocal[i] : mmul(restWorld[p], restLocal[i]);
		}
		const restWorldQ = restWorld.map(mquat);

		// parts of the body
		const parts = meta.meshes.map((m) => {
			const pos = f32(m.pos, m.n * 3), nrm = f32(m.nrm, m.n * 3), uv = f32(m.uv, m.n * 2);
			const jnt = new Uint8Array(buf, m.jnt, m.n * 4), wgt = f32(m.wgt, m.n * 4);
			const idx = new Uint16Array(buf, m.idx, m.ni);
			const morphs = {};
			for (const k in m.morphs) {
				const mm = m.morphs[k];
				morphs[k] = { idx: new Uint16Array(buf, mm.idx, mm.n), d: f32(mm.d, mm.n * 3) };
			}
			const outP = new Float32Array(m.n * 3), outN = new Float32Array(m.n * 3);
			const work = new Float32Array(m.n * 3);
			const pb = regl.buffer({ data: outP, usage: 'dynamic' });
			const nbuf = regl.buffer({ data: outN, usage: 'dynamic' });
			const isHair = /avaturn_hair/.test(m.name), isEyeAO = /EyeAO|Eyelash/.test(m.name);
			const isSkin = /Body|Head/.test(m.name);
			const kind = m.kind || 0;
			return {
				m, pos, nrm, uv, jnt, wgt, idx, morphs, outP, outN, work, pb, nbuf,
				tex: m.tex ? loadTexture(regl, base + m.tex) : white,
				kind,
				alphaScale: /EyeAO/.test(m.name) ? 0.25 : 1.0,
				blend: m.blend || isHair,
				alphaCut: isHair ? 0.35 : (isEyeAO ? 0.02 : 0.0),
				skin: isSkin ? 1 : 0
			};
		});

		const drawOpaque = regl({
			vert: VERT, frag: FRAG,
			attributes: { position: regl.prop('pb'), normal: regl.prop('nb'), uv: regl.prop('uv') },
			elements: regl.prop('el'),
			uniforms: {
				tex: regl.prop('tex'), alphaCut: regl.prop('alphaCut'), skin: regl.prop('skin'),
				kind: regl.prop('kind'), alphaScale: regl.prop('alphaScale'),
				glowPos: () => state.glowPos, glowLight: () => state.glow,
				boothLamp: () => (seat && !piano ? seat.lamp : [0, 0, 0, 0]), court: () => (seat || piano ? 0 : 1), candle: () => (piano ? 1 : 0)
			},
			cull: { enable: false }
		});
		const drawBlend = regl({
			vert: VERT, frag: FRAG,
			attributes: { position: regl.prop('pb'), normal: regl.prop('nb'), uv: regl.prop('uv') },
			elements: regl.prop('el'),
			uniforms: {
				tex: regl.prop('tex'), alphaCut: regl.prop('alphaCut'), skin: regl.prop('skin'),
				kind: regl.prop('kind'), alphaScale: regl.prop('alphaScale'),
				glowPos: () => state.glowPos, glowLight: () => state.glow,
				boothLamp: () => (seat && !piano ? seat.lamp : [0, 0, 0, 0]), court: () => (seat || piano ? 0 : 1), candle: () => (piano ? 1 : 0)
			},
			cull: { enable: false },
			depth: { enable: true, mask: false },
			blend: { enable: true, func: { srcRGB: 'src alpha', dstRGB: 'one minus src alpha', srcAlpha: 'one', dstAlpha: 'one minus src alpha' } }
		});
		// socks: below the trousers' hem the body's own lower legs and feet
		// are drawn as dark knitted socks, so no bare ankle shows between
		// the shoe and the trousers when he walks (rest pose metres, y up)
		const SOCK_TOP = 0.30;
		for (const p of parts) {
			p.uvBuf = regl.buffer(p.uv);
			if (/Body/.test(p.m.name)) {
				const keep = [], sock = [];
				for (let t = 0; t < p.idx.length; t += 3) {
					const a = p.idx[t], b = p.idx[t + 1], c = p.idx[t + 2];
					const low = p.pos[a * 3 + 1] < SOCK_TOP && p.pos[b * 3 + 1] < SOCK_TOP && p.pos[c * 3 + 1] < SOCK_TOP;
					(low ? sock : keep).push(a, b, c);
				}
				p.el = regl.elements({ data: new Uint16Array(keep), type: 'uint16' });
				if (sock.length) p.sockEl = regl.elements({ data: new Uint16Array(sock), type: 'uint16' });
			} else {
				p.el = regl.elements({ data: p.idx, type: 'uint16' });
			}
		}

		// placing the whole figure in the court
		// lying on his back: his head (+y) towards -z, his front (+z) up
		const hipRest = restWorld[byName.Hips];
		const lie = qaxis([1, 0, 0], -Math.PI / 2);
		const place = mmul(
			trs([PLACE.x - hipRest[12] * S, PLACE.hipY - hipRest[14] * S, PLACE.z + hipRest[13] * S], lie, [1, 1, 1]),
			trs([0, 0, 0], [0, 0, 0, 1], [S, S, S])
		);

		const skinMats = new Array(nb);
		let lastPose = -1;

		// standing on the gallery floor at (x, z), facing `heading` (radians
		// about y; 0 faces +z, a quarter turn faces +x)
		const standAt = (x, z, heading) => mmul(
			trs([x, 0, z], qaxis([0, 1, 0], heading), [1, 1, 1]),
			trs([0, 0, 0], [0, 0, 0, 1], [S, S, S])
		);
		const footBones = ['LeftFoot', 'RightFoot', 'LeftToeBase', 'RightToeBase'].map((n) => byName[n]);
		const footRest = footBones.map((i) => restWorld[i][13] * S);

		function walkingPose(w) {
			if (motion && motion.walk) return capturedWalk(w);
			const P = walkPose(w.phase);
			const deltas = {};
			const addPose = (Q) => {
				for (const k in Q) {
					const e = Q[k];
					const q = qeuler(e[0], e[1], e[2]);
					deltas[k] = deltas[k] ? qmul(deltas[k], q) : q;
				}
			};
			// (the swing is added first so that it turns the arms after they
			// have been lowered)
			addPose(P.swing);
			addPose(P.pose);
			// a little side to side over the standing foot
			const hx = Math.cos(w.heading), hz = -Math.sin(w.heading);
			const place = standAt(w.x + hx * P.sway, w.z + hz * P.sway, w.heading);
			const world = new Array(nb);
			for (let i = 0; i < nb; i++) {
				const b = bones[i];
				let local = restLocal[i];
				const D = deltas[b.name];
				if (D) {
					const W = restWorldQ[i];
					const L = qmul(qconj(W), qmul(D, W));
					local = trs(b.t, qmul(b.r, L), b.s);
				}
				world[i] = b.parent < 0 ? mmul(place, local) : mmul(world[b.parent], local);
			}
			// lower (or raise) him so the foot that is down rests on the floor
			let drop = Infinity;
			footBones.forEach((i, k) => { drop = Math.min(drop, world[i][13] - footRest[k]); });
			for (let i = 0; i < nb; i++) {
				world[i] = world[i].slice();
				world[i][13] -= drop;
				skinMats[i] = mmul(world[i], ibm[i]);
			}
			return { blink: 0 };
		}

		// THE CAPTURED WALK: a real person's walk, a whole cycle for each
		// stride the tour moves him (phase 0 = his left foot furthest ahead,
		// as before). The clip walks on the spot; the tour carries him along.
		function capturedWalk(w) {
			const c = motion.walk;
			const smp = sampleClip(c, (w.phase + c.phase0) * c.frames);
			const place = standAt(w.x, w.z, w.heading);
			const world = new Array(nb);
			const hipsI = byName.Hips;
			for (let i = 0; i < nb; i++) {
				const b = bones[i];
				let local = restLocal[i];
				const D = smp.q[b.name];
				if (D) {
					const W = restWorldQ[i];
					const L = qmul(qconj(W), qmul(D, W));
					// (the hips also sway from side to side and bob)
					const tr = i === hipsI ? [b.t[0] + smp.hips[0], b.t[1] + smp.hips[1], b.t[2] + smp.hips[2]] : b.t;
					local = trs(tr, qmul(b.r, L), b.s);
				}
				world[i] = b.parent < 0 ? mmul(place, local) : mmul(world[b.parent], local);
			}
			// set him down so the foot that is down rests on the floor
			let drop = Infinity;
			footBones.forEach((i, k) => { drop = Math.min(drop, world[i][13] - footRest[k]); });
			for (let i = 0; i < nb; i++) {
				world[i] = world[i].slice();
				world[i][13] -= drop;
				skinMats[i] = mmul(world[i], ibm[i]);
			}
			return { blink: 0 };
		}

		// sitting on a stool, forearms on his thighs, head a little bowed;
		// he breathes and his head moves a very little
		function seatedPose(t, st) {
			const br = Math.sin(t * 2 * Math.PI / 4.6);
			const nod = Math.sin(t * 0.37) * 0.6 + Math.sin(t * 0.83 + 1.0) * 0.4;
			const P = {
				LeftUpLeg: [-86, -6, 0], RightUpLeg: [-84, 7, 0],
				LeftLeg: [88, 0, 0], RightLeg: [82, 0, 0],
				LeftFoot: [-4, 0, 0], RightFoot: [-2, 0, 0],
				Spine: [6, 0, 0], Spine1: [5 + br * 0.8, 0, 0], Spine2: [4 + br * 0.6, 0, 0],
				Neck: [10, 0, 0], Head: [12 + nod * 2.0, nod * 2.5, 0],
				LeftArm: [0, 0, -72], RightArm: [0, 0, 72],
				LeftForeArm: [0, -62, 0], RightForeArm: [0, 62, 0],
				LeftHand: [0, 0, -10], RightHand: [0, 0, 10]
			};
			const deltas = {};
			for (const k in P) { const e = P[k]; deltas[k] = qeuler(e[0], e[1], e[2]); }
			const place = standAt(st.x, st.z, st.heading);
			const world = new Array(nb);
			for (let i = 0; i < nb; i++) {
				const b = bones[i];
				let local = restLocal[i];
				const D = deltas[b.name];
				if (D) {
					const W = restWorldQ[i];
					const L = qmul(qconj(W), qmul(D, W));
					local = trs(b.t, qmul(b.r, L), b.s);
				}
				world[i] = b.parent < 0 ? mmul(place, local) : mmul(world[b.parent], local);
			}
			// lower him onto the seat
			const hy = world[byName.Hips][13];
			const drop = hy - (st.y + 0.10);
			for (let i = 0; i < nb; i++) {
				world[i] = world[i].slice();
				world[i][13] -= drop;
				skinMats[i] = mmul(world[i], ibm[i]);
			}
			const blinkT = (t % 4.1);
			return { blink: blinkT < 0.16 ? Math.sin(blinkT / 0.16 * Math.PI) : 0 };
		}

		/* AT THE PIANO
		 * He sits on the stool, leaning in a little, and plays what is
		 * sounding. sound.js knows where the music is and when keys go
		 * down in the bass (his left hand) and the treble (his right), how
		 * hard, and roughly where along the keyboard. Each hand travels to
		 * its next note ahead of time, lifting more over a longer wait; a
		 * finger goes down on the beat and the wrist gives with it. His
		 * arms are worked out backwards from where the hands must be
		 * (shoulder, elbow, wrist), elbows hanging out and down. His body
		 * leans into the louder passages and towards the busier hand, his
		 * head nods with the phrases, and his right foot works the pedal.
		 */
		const P3 = (i) => [restWorld[i][12], restWorld[i][13], restWorld[i][14]];
		// the turn that sets a limb along `dir`, the back of the hand as
		// near `up` as it can be
		const frameQ = (dir, up) => {
			const x = vnorm(dir);
			const y = vnorm(vsub(up, vscale(x, vdot(up, x))));
			const z = vcross(x, y);
			return mquat([x[0], x[1], x[2], 0, y[0], y[1], y[2], 0, z[0], z[1], z[2], 0, 0, 0, 0, 1]);
		};
		const ARMS = {};
		for (const side of ['Left', 'Right']) {
			const a = byName[side + 'Arm'], f = byName[side + 'ForeArm'], h = byName[side + 'Hand'], m = byName[side + 'HandMiddle1'];
			ARMS[side] = {
				a, f, h,
				upper: vlen(vsub(P3(f), P3(a))) * S,
				fore: vlen(vsub(P3(h), P3(f))) * S,
				dir0: vnorm(vsub(P3(f), P3(a))),
				qf0: frameQ(vsub(P3(h), P3(f)), [0, 1, 0]),
				qh0: frameQ(vsub(P3(m), P3(h)), [0, 1, 0])
			};
		}
		const ikOf = {};
		for (const side of ['Left', 'Right']) {
			ikOf[ARMS[side].a] = { side, part: 0 };
			ikOf[ARMS[side].f] = { side, part: 1 };
			ikOf[ARMS[side].h] = { side, part: 2 };
		}

		// where a hand is in the music: x along its half of the keyboard
		// (0..1), how high it is lifted, how far its finger is down, which finger
		function handAt(ev, tm, dur) {
			if (!ev || !ev.length) return { x: 0.5, lift: 0, press: 0, finger: 1, busy: 0 };
			let lo = 0, hi = ev.length - 1, i = -1;
			while (lo <= hi) { const mid = (lo + hi) >> 1; if (ev[mid].t <= tm) { i = mid; lo = mid + 1; } else hi = mid - 1; }
			const last = ev[ev.length - 1], first = ev[0];
			const a = i >= 0 ? ev[i] : { t: last.t - dur, x: last.x, w: last.w };
			const b = i + 1 < ev.length ? ev[i + 1] : { t: first.t + dur, x: first.x, w: first.w };
			const gap = Math.max(0.05, b.t - a.t);
			const hold = Math.min(0.14, gap * 0.45);
			const u = Math.max(0, Math.min(1, (tm - a.t - hold) / Math.max(gap - hold - 0.03, 0.02)));
			const e = u * u * (3 - 2 * u);
			const since = tm - a.t;
			const down = (0.55 + 0.45 * a.w) * Math.exp(-since / 0.11);
			const until = b.t - tm;
			const coming = until < 0.05 ? (0.55 + 0.45 * b.w) * (1 - until / 0.05) : 0;
			return {
				x: a.x + (b.x - a.x) * e,
				// over a long silence the hand comes to rest on the keys
				lift: Math.sin(Math.PI * u) * Math.min(0.05, 0.012 + gap * 0.03) * (gap > 2.5 ? 0.4 : 1),
				press: Math.max(down, coming),
				finger: coming > down ? ((i + 1) * 7 + 3) % 4 : ((Math.max(i, 0)) * 7 + 3) % 4,
				busy: Math.exp(-since / 0.9)
			};
		}

		const pn = { lean: 0, turn: 0, nod: 0, pedal: 0, last: -1 };
		const FINGERS = ['Index', 'Middle', 'Ring', 'Pinky'];

		function pianoPose(t) {
			const K = SH.PLAY, cues = sound.cues, tm = sound.time();
			const dur = (cues && cues.dur) || 158;
			const hands = { Left: handAt(cues && cues.left, tm, dur), Right: handAt(cues && cues.right, tm, dur) };
			// how loud the music is just now (0..1)
			let lv = 0.35;
			if (cues && cues.level && cues.level.length) {
				const x = tm * 8, i0 = Math.floor(x) % cues.level.length, i1 = (i0 + 1) % cues.level.length;
				lv = cues.level[i0] + (cues.level[i1] - cues.level[i0]) * (x - Math.floor(x));
			}
			const dt = pn.last < 0 ? 0 : Math.min(0.1, Math.max(0, t - pn.last));
			pn.last = t;
			const ease = (k) => Math.min(1, dt * k);
			pn.lean += (lv - pn.lean) * ease(1.2);
			pn.turn += ((hands.Right.busy - hands.Left.busy) - pn.turn) * ease(1.5);
			pn.nod += (Math.max(hands.Right.press, hands.Left.press * 0.7) - pn.nod) * ease(6);
			pn.pedal += ((hands.Left.busy > 0.35 ? 1 : 0.15) - pn.pedal) * ease(5);
			const br = Math.sin(t * 2 * Math.PI / 4.6);
			const phrase = Math.sin(tm * 0.41) * 0.6 + Math.sin(tm * 0.17 + 1.0) * 0.4;

			const P = {
				LeftUpLeg: [-80, -9, 0], RightUpLeg: [-77, 9, 0],
				LeftLeg: [86, 0, 0], RightLeg: [64, 0, 0],
				LeftFoot: [-2, 0, 0], RightFoot: [12 - 10 * pn.pedal, 0, 0],
				Spine: [9 + 3.5 * pn.lean + phrase * 1.6, pn.turn * 2.5, -pn.turn * 1.6],
				Spine1: [7 + br * 0.8 + 2.5 * pn.lean, pn.turn * 2.5, -pn.turn * 1.2],
				Spine2: [6 + br * 0.6 + phrase * 0.8, pn.turn * 1.5, 0],
				Neck: [13 + 3 * pn.lean, pn.turn * 3, 0],
				Head: [15 + pn.nod * 3.5 + phrase * 1.5, pn.turn * 5, phrase * 1.5]
			};
			// fingers arched over the keys; the one that plays goes down
			for (const side of ['Left', 'Right']) {
				const sg = side === 'Left' ? -1 : 1, H = hands[side];
				FINGERS.forEach((fn, k) => {
					const hit = k === H.finger ? H.press : H.press * 0.2;
					P[side + 'Hand' + fn + '1'] = [0, 0, sg * (20 + 3 * k + 20 * hit)];
					P[side + 'Hand' + fn + '2'] = [0, 0, sg * (26 + 4 * k - 6 * hit)];
					P[side + 'Hand' + fn + '3'] = [0, 0, sg * 14];
				});
				P[side + 'HandThumb1'] = [0, sg * -18, sg * 10];
			}
			const deltas = {};
			for (const k in P) { const e = P[k]; deltas[k] = qeuler(e[0], e[1], e[2]); }

			// and through all of it, the way a real pianist's back, neck and
			// head move while playing (motion capture), laid over the pose
			if (motion && motion.piano) {
				const c = motion.piano;
				const smp = sampleClip(c, t * c.fps);
				[['Hips', 0.35], ['Spine', 0.7], ['Spine1', 0.7], ['Spine2', 0.7], ['Neck', 0.75], ['Head', 0.75]].forEach(([bn, k]) => {
					const m = smp.q[bn], mean = c.meanQ[bn];
					if (!m || !mean) return;
					// the movement about its own average, so his posture stays his
					let rel = qmul(m, qconj(mean));
					if (rel[3] < 0) rel = [-rel[0], -rel[1], -rel[2], -rel[3]];
					rel = qnorm([rel[0] * k, rel[1] * k, rel[2] * k, 1 + (rel[3] - 1) * k]);
					deltas[bn] = deltas[bn] ? qmul(rel, deltas[bn]) : rel;
				});
			}

			// on the front half of the stool, the hips lowered onto it
			const hipRest = restWorld[byName.Hips][13] * S;
			const place = mmul(
				trs([K.stoolX, K.stoolTop + 0.10 - hipRest, K.stoolFront + 0.15], qaxis([0, 1, 0], K.heading), [1, 1, 1]),
				trs([0, 0, 0], [0, 0, 0, 1], [S, S, S])
			);

			// where each wrist must be for the fingers to rest on its note
			const mid = (K.keyX0 + K.keyX1) / 2;
			const wrist = {};
			for (const side of ['Left', 'Right']) {
				const H = hands[side];
				const x = side === 'Left' ? mid - 0.40 + 0.33 * H.x : mid + 0.07 + 0.33 * H.x;
				wrist[side] = [x, K.keyTop + 0.062 + H.lift - H.press * 0.012, K.keyFront + 0.075];
			}

			const world = new Array(nb);
			const tot = {};          // an arm bone's whole turn from its rest, in the room
			const DOWN = [0, 1, 0];
			for (let i = 0; i < nb; i++) {
				const b = bones[i];
				let local = restLocal[i];
				let D = deltas[b.name];
				const ik = ikOf[i];
				if (ik) {
					const A = ARMS[ik.side];
					if (ik.part === 0) {
						const pw = world[b.parent];
						const j = mmul(pw, restLocal[i]);
						const sh = [j[12], j[13], j[14]];
						const dP = qmul(mquat(pw), qconj(restWorldQ[b.parent]));
						let d = vsub(wrist[ik.side], sh);
						let dl = vlen(d);
						const reach = (A.upper + A.fore) * 0.995;
						if (dl > reach) { d = vscale(d, reach / dl); dl = reach; }
						const dir = vscale(d, 1 / dl);
						const along = (A.upper * A.upper - A.fore * A.fore + dl * dl) / (2 * dl);
						const out = Math.sqrt(Math.max(0, A.upper * A.upper - along * along));
						// the elbow hangs out to the side and down, a little back
						let pole = [ik.side === 'Left' ? -0.6 : 0.6, -0.8, 0.3];
						pole = vnorm(vsub(pole, vscale(dir, vdot(pole, dir))));
						const elbow = vadd(sh, vadd(vscale(dir, along), vscale(pole, out)));
						A.T = vadd(sh, d);
						A.elbow = elbow;
						const up = vnorm(vsub(elbow, sh));
						const Ra = qmul(qfromto(qrot(dP, A.dir0), up), dP);
						tot[i] = Ra;
						D = qmul(qconj(dP), Ra);
					} else if (ik.part === 1) {
						const Rf = qmul(frameQ(vsub(A.T, A.elbow), DOWN), qconj(A.qf0));
						tot[i] = Rf;
						D = qmul(qconj(tot[b.parent]), Rf);
					} else {
						// the hand lies along the keys, fingers a little down and in
						const H = hands[ik.side];
						const Rh = qmul(frameQ([ik.side === 'Left' ? 0.12 : -0.12, -0.20 - 0.10 * H.press, -1], DOWN), qconj(A.qh0));
						tot[i] = Rh;
						D = qmul(qconj(tot[b.parent]), Rh);
					}
				}
				if (D) {
					const W = restWorldQ[i];
					const L = qmul(qconj(W), qmul(D, W));
					local = trs(b.t, qmul(b.r, L), b.s);
				}
				world[i] = b.parent < 0 ? mmul(place, local) : mmul(world[b.parent], local);
			}
			for (let i = 0; i < nb; i++) skinMats[i] = mmul(world[i], ibm[i]);
			state.pianist = { head: [world[byName.Head][12], world[byName.Head][13], world[byName.Head][14]] };
			const blinkT = (t % 4.3);
			return { blink: blinkT < 0.16 ? Math.sin(blinkT / 0.16 * Math.PI) : 0 };
		}

		function pose(t, w) {
			if (piano) return pianoPose(t);
			if (seat) return seatedPose(t, seat);
			if (w) return walkingPose(w);
			const breath = Math.sin(t * 2 * Math.PI / 4.2);
			const blinkT = (t % 3.7);
			const blink = blinkT < 0.16 ? Math.sin(blinkT / 0.16 * Math.PI) : 0;
			// the raised arm sways slowly through the light from the dome
			// while the fingers ripple, as if playing with it
			const sway = Math.sin(t * 0.45);
			// (and the small things a body does when it is at ease: the hand
			// turns over in the light, the raised knee sways, a foot rocks,
			// and every so often the arm sinks and rises again)
			const turnHand = Math.sin(t * 0.31 + 0.8);
			const tire = Math.max(0, Math.sin(t * 0.085) - 0.75) * 4;      // 0..1, now and then
			const PLAY = {
				RightArm: [0, -22 * tire, 11 * sway],
				RightForeArm: [0, 8 + 26 * tire, 0],
				RightHand: [38 * turnHand, 0, 6 * Math.sin(t * 0.7)],
				LeftUpLeg: [0, 0, 3.2 * Math.sin(t * 0.36)],
				RightFoot: [5 * Math.sin(t * 0.52 + 0.4), 0, 0],
				Head: [0, 1.6 * Math.sin(t * 0.21), 0]
			};
			['Index', 'Middle', 'Ring', 'Pinky'].forEach((f, k) => {
				const w = Math.sin(t * 1.1 - k * 0.5);
				PLAY['RightHand' + f + '1'] = [0, 0, 8 + 12 * w];
				PLAY['RightHand' + f + '2'] = [0, 0, 6 + 10 * w];
			});

			const deltas = {};
			const addPose = (P, w) => {
				for (const k in P) {
					const e = P[k];
					const q = qeuler(e[0] * w, e[1] * w, e[2] * w);
					deltas[k] = deltas[k] ? qmul(deltas[k], q) : q;
				}
			};
			addPose(LYING, 1);
			addPose({ Spine1: [breath * 0.8, 0, 0], Spine2: [breath * 0.6, 0, 0] }, 1);
			addPose(PLAY, 1);

			// world matrices
			const world = new Array(nb);
			const worldQ = new Array(nb);
			for (let i = 0; i < nb; i++) {
				const b = bones[i];
				let local = restLocal[i];
				const D = deltas[b.name];
				if (D) {
					const W = restWorldQ[i];
					const L = qmul(qconj(W), qmul(D, W));
					local = trs(b.t, qmul(b.r, L), b.s);
				}
				world[i] = b.parent < 0 ? mmul(place, local) : mmul(world[b.parent], local);
				worldQ[i] = null;
			}
			for (let i = 0; i < nb; i++) skinMats[i] = mmul(world[i], ibm[i]);

			// where the hands and head are, for the book and the brush
			const pos3 = (m) => [m[12], m[13], m[14]];
			state.headPos = pos3(world[byName.Head]);
			state.hipsPos = pos3(world[byName.Hips]);
			state.headM = world[byName.Head];

			return { blink };
		}

		function skin(p, morphW) {
			const { pos, nrm, jnt, wgt, outP, outN, work, m } = p;
			const n = m.n;
			let src = pos;
			if (morphW) {
				work.set(pos);
				for (const k in p.morphs) {
					const w = morphW[k] || 0;
					if (w <= 0) continue;
					const mm = p.morphs[k];
					for (let i = 0; i < mm.idx.length; i++) {
						const v = mm.idx[i] * 3;
						work[v] += mm.d[i * 3] * w;
						work[v + 1] += mm.d[i * 3 + 1] * w;
						work[v + 2] += mm.d[i * 3 + 2] * w;
					}
				}
				src = work;
			}
			for (let i = 0; i < n; i++) {
				const x = src[i * 3], y = src[i * 3 + 1], z = src[i * 3 + 2];
				const nx = nrm[i * 3], ny = nrm[i * 3 + 1], nz = nrm[i * 3 + 2];
				let px = 0, py = 0, pz = 0, qx = 0, qy = 0, qz = 0;
				for (let k = 0; k < 4; k++) {
					const w = wgt[i * 4 + k];
					if (w === 0) continue;
					const M = skinMats[jnt[i * 4 + k]];
					px += w * (M[0] * x + M[4] * y + M[8] * z + M[12]);
					py += w * (M[1] * x + M[5] * y + M[9] * z + M[13]);
					pz += w * (M[2] * x + M[6] * y + M[10] * z + M[14]);
					qx += w * (M[0] * nx + M[4] * ny + M[8] * nz);
					qy += w * (M[1] * nx + M[5] * ny + M[9] * nz);
					qz += w * (M[2] * nx + M[6] * ny + M[10] * nz);
				}
				outP[i * 3] = px; outP[i * 3 + 1] = py; outP[i * 3 + 2] = pz;
				const l = Math.hypot(qx, qy, qz) || 1;
				outN[i * 3] = qx / l; outN[i * 3 + 1] = qy / l; outN[i * 3 + 2] = qz / l;
			}
			if (m.grid && !walking && !seat && !piano) drape(p);
			if (p.sway) follow(p);
			p.pb.subdata(outP);
			p.nbuf.subdata(outN);
		}

		// the coat's skirt settles flat on the bench under its own weight:
		// the further from the waist, the closer it lies to the stone
		function drape(p) {
			const [R, Cn] = p.m.grid;
			const o = p.outP, nO = p.outN;
			const g = BENCH.seat + 0.012;
			for (let r = 1; r < R; r++) {
				const f = Math.pow(1 - r / (R - 1), 1.5);
				for (let c = 0; c < Cn; c++) {
					const i = (r * Cn + c) * 3;
					if (o[i + 1] > g) o[i + 1] = g + (o[i + 1] - g) * Math.max(f, 0.15);
					else o[i + 1] = g;
				}
			}
			// lying flat, it faces straight up
			for (let k = 0; k < nO.length; k += 3) { nO[k] = 0; nO[k + 1] = 1; nO[k + 2] = 0; }
		}

		let walking = false;

		/* FOLLOW-THROUGH
		 * What hangs loose on him does not move as one with his body. When
		 * he starts, stops or turns, it is left a little behind, and then
		 * swings back and settles; when he walks it trails. Three things
		 * are loose: his hair (it follows his head), the ends of his scarf
		 * (his chest) and the skirt of his coat (his hips). Each is one
		 * weight on a spring; how far each point of the cloth or hair goes
		 * with it was set when he was loaded (the tips most, the roots not
		 * at all).
		 */
		const mkSpring = (bone, rate, damp, drag, most) => ({ bone: byName[bone], rate, damp, drag, most, x: [0, 0, 0], v: [0, 0, 0], p: null, vel: [0, 0, 0] });
		const springs = { head: mkSpring('Head', 15, 0.32, 0.012, 0.035), chest: mkSpring('Spine2', 9, 0.38, 0.030, 0.10), hips: mkSpring('Hips', 7, 0.42, 0.045, 0.16) };
		let springT = -1;
		function stepSprings(t) {
			const dt = springT < 0 ? 0 : t - springT;
			springT = t;
			for (const k in springs) {
				const sp = springs[k];
				const m = skinMats[sp.bone], r = restWorld[sp.bone];
				const x = r[12], y = r[13], z = r[14];
				const p = [m[0] * x + m[4] * y + m[8] * z + m[12], m[1] * x + m[5] * y + m[9] * z + m[13], m[2] * x + m[6] * y + m[10] * z + m[14]];
				// (a cut to another place, or a long pause: start again at rest)
				if (!sp.p || !(dt > 0) || dt > 0.25 || Math.hypot(p[0] - sp.p[0], p[1] - sp.p[1], p[2] - sp.p[2]) > 0.5) {
					sp.p = p; sp.x = [0, 0, 0]; sp.v = [0, 0, 0]; sp.vel = [0, 0, 0];
					continue;
				}
				const vel = [(p[0] - sp.p[0]) / dt, (p[1] - sp.p[1]) / dt, (p[2] - sp.p[2]) / dt];
				const steps = Math.max(1, Math.ceil(dt / 0.016)), h = dt / steps;
				for (let j = 0; j < 3; j++) {
					const acc = Math.max(-30, Math.min(30, (vel[j] - sp.vel[j]) / dt));
					const rest = -vel[j] * sp.drag;                  // trailing behind a steady move
					for (let q = 0; q < steps; q++) {
						sp.v[j] += ((rest - sp.x[j]) * sp.rate * sp.rate - 2 * sp.damp * sp.rate * sp.v[j] - acc) * h;
						sp.x[j] += sp.v[j] * h;
					}
				}
				const len = Math.hypot(sp.x[0], sp.x[1], sp.x[2]);
				if (len > sp.most) { const f = sp.most / len; sp.x = [sp.x[0] * f, sp.x[1] * f, sp.x[2] * f]; }
				sp.p = p; sp.vel = vel;
			}
		}
		// how much of its spring's swing each point takes
		for (const p of parts) {
			const m = p.m, n = m.n;
			let w = null, group = null;
			if (m.kind === 9) {
				group = 'head'; w = new Float32Array(n);
				for (let i = 0; i < n; i++) { const a = p.uv[i * 2] < -0.5 ? 0 : p.uv[i * 2 + 1]; w[i] = a * a; }
			} else if (m.name === 'scarf') {
				group = 'chest'; w = new Float32Array(n);
				for (let i = 0; i < n; i++) w[i] = smooth(1.52, 1.12, p.pos[i * 3 + 1]);
			} else if (m.grid) {
				group = 'hips'; w = new Float32Array(n);
				const R = m.grid[0], Cn = m.grid[1];
				for (let i = 0; i < n; i++) w[i] = Math.pow(Math.floor(i / Cn) / (R - 1), 1.6);
			}
			if (w) { p.sway = w; p.spring = springs[group]; p.loose = group; }
		}
		function follow(p) {
			// (lying on the bench the coat is spread on the stone and his hair
			// rests: nothing swings)
			if (!walking && !piano && !seat) return;
			const x = p.spring.x, w = p.sway, o = p.outP;
			if (Math.abs(x[0]) + Math.abs(x[1]) + Math.abs(x[2]) < 1e-5) return;
			for (let i = 0, n = w.length; i < n; i++) {
				const k = w[i];
				if (k > 0) { o[i * 3] += x[0] * k; o[i * 3 + 1] += x[1] * k; o[i * 3 + 2] += x[2] * k; }
			}
		}

		function update(t, w) {
			walking = !!w;
			const st = pose(t, w);
			stepSprings(t);
			const morphW = { eyeBlinkLeft: st.blink, eyeBlinkRight: st.blink };
			for (const p of parts) skin(p, Object.keys(p.morphs).length ? morphW : null);
			state.pose = st;
		}

		return { parts, update, drawOpaque, drawBlend, state };
	}

	function smooth(a, b, x) {
		const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
		return t * t * (3 - 2 * t);
	}

	// the book, the brush and its glow
	const bookGeo = buildBook();
	const cv = coverCanvas();
	const coverTex = cv ? regl.texture({ data: cv, flipY: false, min: 'linear', mag: 'linear' }) : white;
	const drawBook = regl({
		vert: BOOK_VERT, frag: BOOK_FRAG,
		attributes: { position: bookGeo.pos, normal: bookGeo.nrm, uv: bookGeo.uv, kind: bookGeo.kind },
		elements: new Uint16Array(bookGeo.idx),
		uniforms: { model: regl.prop('model'), turn: 0, fold: 1.12, cover: coverTex },
		cull: { enable: false }
	});
	const brushGeo = buildBrush();
	const drawBrush = regl({
		vert: BRUSH_VERT, frag: BRUSH_FRAG,
		attributes: { position: brushGeo.pos, normal: brushGeo.nrm, color: brushGeo.col, mat: brushGeo.mat },
		elements: new Uint16Array(brushGeo.idx),
		uniforms: { model: regl.prop('model'), pulse: regl.prop('pulse') },
		cull: { enable: false }
	});
	const drawHalo = regl({
		vert: HALO_VERT, frag: HALO_FRAG,
		attributes: { corner: [[-1, -1], [1, -1], [1, 1], [-1, -1], [1, 1], [-1, 1]] },
		count: 6,
		uniforms: { center: regl.prop('center'), size: regl.prop('size'), pulse: regl.prop('pulse') },
		depth: { enable: true, mask: false },
		blend: { enable: true, func: { srcRGB: 'one', dstRGB: 'one', srcAlpha: 'zero', dstAlpha: 'one' } },
		cull: { enable: false }
	});

	// the book lies open over his face like a little roof: the spine runs
	// from his brow to his chin, and the two halves fall to either cheek
	function bookMatrix(st) {
		const H = st.headM;
		const n = (v) => { const l = Math.hypot(...v) || 1; return v.map((c) => c / l); };
		const up = n([H[4], H[5], H[6]]);          // up the head
		const fwd = n([H[8], H[9], H[10]]);        // out of the face
		const Z = up;
		const Y = fwd.map((c) => -c);              // the pages face down onto him
		const X = [Y[1] * Z[2] - Y[2] * Z[1], Y[2] * Z[0] - Y[0] * Z[2], Y[0] * Z[1] - Y[1] * Z[0]];
		const h = st.headPos;
		const o = [0, 1, 2].map((k) => h[k] + up[k] * 0.06 + fwd[k] * 0.185);
		return [X[0], X[1], X[2], 0, Y[0], Y[1], Y[2], 0, Z[0], Z[1], Z[2], 0, o[0], o[1], o[2], 1];
	}

	let lastT = -1;
	let lastWalk = '';
	// the tour sets this while he walks past the camera ({ x, z, heading,
	// phase }); null puts him back on his bench
	let walk = null;
	// in the confessional: { x, z, y (seat), heading, lamp: [x, y, z, strength] }
	let seat = null;
	// at the piano in the stair hall (see pianoPose)
	let piano = false;

	function draw(ctx) {
		if (!ready) return;
		const t = quality.motion ? clock() : clock();
		const wk = walk ? [walk.x, walk.z, walk.heading, walk.phase].map((v) => v.toFixed(4)).join() : '';
		// on phones the figure is re-posed at most 30 times a second
		if (seat || piano || wk !== lastWalk || (!walk && Math.abs(t - lastT) > (quality.isPhone ? 1 / 30 : 0))) {
			ready.update(t, walk);
			lastT = t;
			lastWalk = wk;
		}
		for (const p of ready.parts) {
			if (p.blend) continue;
			ready.drawOpaque({ pb: p.pb, nb: p.nbuf, uv: p.uvBuf, el: p.el, tex: p.tex, alphaCut: p.alphaCut, skin: p.skin, kind: p.kind, alphaScale: p.alphaScale });
			if (p.sockEl) ready.drawOpaque({ pb: p.pb, nb: p.nbuf, uv: p.uvBuf, el: p.sockEl, tex: white, alphaCut: 0, skin: 0, kind: 8, alphaScale: 1 });
		}
		// the book over his face, and the brush floating above him
		const st = ready.state;
		if (st.headM && !walk && !seat && !piano) {
			drawBook({ model: bookMatrix(st) });
			const hp = st.headPos;
			const bob = Math.sin(t * 1.3) * 0.02;
			const c = [hp[0], hp[1] + 0.62 + bob, hp[2] + 0.05];
			const spin = t * 0.6;
			const model = trs(c, qmul(qaxis([0, 1, 0], spin), qaxis([0, 0, 1], 0.18)), [1.2, 1.2, 1.2]);
			const pulse = 0.5 + 0.5 * Math.sin(t * 2.0);
			drawBrush({ model, pulse });
			state.glowPos = c;
			state.glow = 0.06 + 0.03 * pulse;
			drawHalo({ center: [c[0], c[1] - 0.12, c[2]], size: 0.10, pulse });
		}
		for (const p of ready.parts) {
			if (!p.blend) continue;
			ready.drawBlend({ pb: p.pb, nb: p.nbuf, uv: p.uvBuf, el: p.el, tex: p.tex, alphaCut: p.alphaCut, skin: p.skin, kind: p.kind, alphaScale: p.alphaScale });
		}
	}

	draw.state = state;
	draw.place = PLACE;
	draw.setWalk = (w) => { walk = w || null; if (walk) state.glow = 0; };
	draw.setSeat = (s) => { seat = s || null; state.glow = seat ? 0 : state.glow; lastT = -1; };
	draw.setPiano = (on) => { on = !!on; if (on !== piano) { piano = on; if (piano) state.glow = 0; lastT = -1; } };
	return draw;
};

module.exports.PLACE = PLACE;

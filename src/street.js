'use strict';

/*
 * THE STREET OUTSIDE
 * ------------------
 * A Padua alley seen through the glass door and the two windows of
 * the entrance wall, on a golden afternoon.
 *
 * How it works
 *
 *   The alley is a real photograph (res/street/photo.jpg). Its camera
 *   was measured from the photo's own perspective lines, and the
 *   street was rebuilt as simple 3D surfaces at the right distances.
 *   The photo is then projected back onto those surfaces from where
 *   it was taken, so it lines up exactly, and when you move inside the
 *   gallery the near walls slide past the far ones like a real street.
 *
 *   Where the photo has no information (upper floors, the street
 *   across from the windows) the surfaces use painted facade textures
 *   cut from the same photo.
 *
 *   The sun is low and warm and comes from behind the gallery. Each
 *   surface checks whether a building stands between it and the sun,
 *   so upper floors glow while the street below sits in soft shade.
 *
 * Coordinates are gallery metres: the entrance wall is at z = 0, the
 * street lies at z < 0, the floor is y = 0.
 */

const geom = require('./geom');


/* ===========================================================
 * MEASURED PHOTO CAMERA
 * ===========================================================
 */

// photo metres -> gallery metres (eye height 1.55 m -> 2.0 m)
const S = 1.29032;

// where the photo was taken, in gallery coordinates
const CAM = [9.2968, 2.0, 5.9];

// gallery offset -> photo camera space (row-major)
const A = [
	[0.767398, 0.00185, -0.10827],
	[0.010515, 0.769952, 0.087681],
	[-0.107774, 0.08829, -0.762374]
];

// photo intrinsics (pixels)
const F = 2147.64, PCX = 725.0, PCY = 1288.0, PW = 1450, PH = 2576;


/* ===========================================================
 * STREET LAYOUT (gallery metres)
 * ===========================================================
 */

const MOUTH_Z = -5.197;        // far side of the street outside, where the alley starts
const PINK_X = 3.865;          // left wall of the alley
const RIGHT_X = 10.135;        // right wall of the alley
const PINK_END_Z = -14.679;    // pink building's far corner
const YELLOW_Z = -30.229;      // yellow building at the end
const YELLOW_X = 7.232;        // yellow building's corner
const FAR_Z = -45.713;         // where the alley turns away

const PINK_H = 17.1 * S;
const CREAM_H = 16.6 * S;
const YELLOW_H = 16.6 * S;

// sizes of the painted facade textures, in photo metres
const PINK_TEX = [6.9, 17.1];
const BAY_TEX = [2.95, 16.6];
const COBBLE_TEX = 1.6;

// kinds of surface
const K_GROUND = 0, K_PINK = 1, K_PINK_X = 2, K_YELLOW = 3, K_CREAM = 4, K_CREAM_X = 5, K_SKY = 6;


/* ===========================================================
 * GEOMETRY
 * ===========================================================
 */

function buildStreet() {

	const position = [];
	const normal = [];
	const elements = [];
	const attr = [];

	const B = geom.createBuilder(position, normal, elements, attr);

	// a flat rectangle: corner, two edge vectors, normal, kind,
	// and a function giving fallback texture coordinates for a point
	const quad = (o, u, v, n, kind, uvOf, nu = 1, nv = 1) => {

		const grid = [];

		for (let i = 0; i <= nu; i++) {

			const row = [];

			for (let j = 0; j <= nv; j++) {

				const p = [
					o[0] + u[0] * i / nu + v[0] * j / nv,
					o[1] + u[1] * i / nu + v[1] * j / nv,
					o[2] + u[2] * i / nu + v[2] * j / nv
				];

				const t = uvOf(p);

				row.push(B.vert(p, n, [kind, t[0], t[1]]));
			}

			grid.push(row);
		}

		for (let i = 0; i < nu; i++) {
			for (let j = 0; j < nv; j++) {
				B.tri(grid[i][j], grid[i + 1][j], grid[i][j + 1]);
				B.tri(grid[i + 1][j], grid[i + 1][j + 1], grid[i][j + 1]);
			}
		}
	};

	const alongZ = (z0) => (p) => [(CAM[2] - p[2]) / S - z0, p[1] / S];

	// ---------------- ground ----------------
	quad([-60, 0, -0.36], [130, 0, 0], [0, 0, -140], [0, 1, 0], K_GROUND,
		(p) => [p[0] / S, p[2] / S], 13, 14);

	// ---------------- pink building ----------------
	// alley side
	quad([PINK_X, 0, MOUTH_Z], [0, 0, PINK_END_Z - MOUTH_Z], [0, PINK_H, 0], [1, 0, 0], K_PINK,
		alongZ(8.6), 6, 6);
	// facing the gallery across the street (texture wraps round the corner)
	quad([-40, 0, MOUTH_Z], [PINK_X + 40, 0, 0], [0, PINK_H, 0], [0, 0, 1], K_PINK_X,
		(p) => [(PINK_X - p[0]) / S, p[1] / S], 8, 4);
	// end of the street on the left
	quad([-40, 0, -0.36], [0, 0, MOUTH_Z + 0.36], [0, PINK_H, 0], [1, 0, 0], K_PINK_X,
		(p) => [-p[2] / S, p[1] / S]);

	// ---------------- arcade building on the right ----------------
	// alley side
	quad([RIGHT_X, 0, -80], [0, 0, MOUTH_Z + 80], [0, CREAM_H, 0], [-1, 0, 0], K_CREAM,
		alongZ(8.6), 12, 6);
	// facing the gallery
	quad([RIGHT_X, 0, MOUTH_Z], [60, 0, 0], [0, CREAM_H, 0], [0, 0, 1], K_CREAM_X,
		(p) => [(p[0] - RIGHT_X) / S, p[1] / S], 8, 4);
	// end of the street on the right
	quad([70, 0, MOUTH_Z], [0, 0, -0.36 - MOUTH_Z], [0, CREAM_H, 0], [-1, 0, 0], K_CREAM_X,
		(p) => [-p[2] / S, p[1] / S]);

	// ---------------- yellow building at the end ----------------
	const yellowU = (p) => [(p[0] - CAM[0]) / S + 4.18, p[1] / S];
	quad([-20, 0, YELLOW_Z], [YELLOW_X + 20, 0, 0], [0, YELLOW_H, 0], [0, 0, 1], K_YELLOW,
		yellowU, 8, 6);
	// its side, where the alley bends away
	quad([YELLOW_X, 0, YELLOW_Z], [0, 0, FAR_Z - YELLOW_Z], [0, YELLOW_H, 0], [1, 0, 0], K_YELLOW,
		alongZ(28.0), 4, 4);
	// the far end of the bend
	quad([YELLOW_X, 0, FAR_Z], [RIGHT_X - YELLOW_X, 0, 0], [0, CREAM_H, 0], [0, 0, 1], K_CREAM,
		(p) => [(p[0] - CAM[0]) / S, p[1] / S], 2, 4);
	// the little square behind the pink building, closed on the left
	quad([-20, 0, PINK_END_Z], [0, 0, YELLOW_Z - PINK_END_Z], [0, YELLOW_H, 0], [1, 0, 0], K_YELLOW,
		alongZ(16.0), 4, 4);

	// ---------------- sky ----------------
	const sky = (o, u, v, n) => quad(o, u, v, n, K_SKY, () => [0, 0], 4, 4);
	sky([-300, -20, -300], [600, 0, 0], [0, 320, 0], [0, 0, 1]);          // ahead
	sky([-300, 300, -300], [600, 0, 0], [0, 0, 300], [0, -1, 0]);          // overhead
	sky([-300, -20, 0], [0, 0, -300], [0, 320, 0], [1, 0, 0]);             // left
	sky([300, -20, -300], [0, 0, 300], [0, 320, 0], [-1, 0, 0]);           // right

	return { position, normal, elements, attr };
}


/* ===========================================================
 * TEXTURES
 * ===========================================================
 */

function loadTexture(regl, url, opts, fallback) {

	const tex = regl.texture({
		data: [[fallback]],
		...opts,
		min: 'linear',
		mag: 'linear'
	});

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
				...opts,
				min: 'mipmap',
				mipmap: 'nice',
				mag: 'linear'
			});
		})
		.catch((e) => console.error(e));

	return tex;
}


/* ===========================================================
 * SHADER
 * ===========================================================
 */

const glslVec = (v) => 'vec3(' + v.map((x) => x.toFixed(4)).join(', ') + ')';

// buildings that can block the sun (min, max)
const SHADOW_BOXES = [
	[[-0.35, 0, -0.35], [14.35, 9.2, 50]],                     // the gallery itself
	[[-40, 0, PINK_END_Z], [PINK_X, PINK_H, MOUTH_Z]],         // pink building
	[[RIGHT_X, 0, -80], [70, CREAM_H, MOUTH_Z]],               // arcade building
	[[-20, 0, -80], [YELLOW_X, YELLOW_H, YELLOW_Z]],           // yellow building
	[[-40, 0, -80], [-20, YELLOW_H, PINK_END_Z]]               // behind the little square
];

const shadowGLSL = SHADOW_BOXES.map((b) =>
	`if (hitBox(ro, rd, ${glslVec(b[0])}, ${glslVec(b[1])}, 1e4) ) return 0.0;`
).join('\n\t\t');

const amat = 'mat3(' + [0, 1, 2].map((c) => [0, 1, 2].map((r) => A[r][c].toFixed(6)).join(', ')).join(', ') + ')';

const FRAG = `
precision highp float;

uniform sampler2D photo, photoMask, pinkTex, yellowTex, creamTex, cobbleTex;
uniform float time;

varying vec3 v_pos;
varying vec3 v_normal;
varying vec3 v_attr;
varying vec3 v_eye;

const vec3 SUN = ${glslVec([-0.25, 0.40, 0.88].map((x) => x / Math.hypot(-0.25, 0.40, 0.88)))};

float hash(vec2 p) {
	vec3 p3 = fract(vec3(p.xyx) * 0.1031);
	p3 += dot(p3, p3.yzx + 33.33);
	return fract((p3.x + p3.y) * p3.z);
}

float vnoise(vec2 p) {
	vec2 i = floor(p), f = fract(p);
	f = f * f * (3.0 - 2.0 * f);
	return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x),
	           mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}

float fbm(vec2 p) {
	float s = 0.0, a = 0.5;
	for (int i = 0; i < 5; i++) {
		s += a * vnoise(p);
		p = p * 2.03 + vec2(1.7, 9.2);
		a *= 0.5;
	}
	return s;
}

// does a ray (ro + rd t, 0 < t < tMax) pass through a box?
bool hitBox(vec3 ro, vec3 rd, vec3 bmin, vec3 bmax, float tMax) {
	vec3 inv = 1.0 / rd;
	vec3 t0 = (bmin - ro) * inv;
	vec3 t1 = (bmax - ro) * inv;
	vec3 tn3 = min(t0, t1), tf3 = max(t0, t1);
	float tn = max(max(tn3.x, tn3.y), tn3.z);
	float tf = min(min(tf3.x, tf3.y), tf3.z);
	return tf > max(tn, 0.0) && tn < tMax;
}

float sunRay(vec3 ro, vec3 rd) {
	${shadowGLSL}
	return 1.0;
}

// three slightly different sun directions give a soft shadow edge
float sunVisible(vec3 p, vec3 n) {
	vec3 ro = p + n * 0.03;
	vec3 side = normalize(cross(SUN, vec3(0.0, 1.0, 0.0)));
	vec3 up = cross(side, SUN);
	return (sunRay(ro, SUN)
	      + sunRay(ro, normalize(SUN + up * 0.035 + side * 0.02))
	      + sunRay(ro, normalize(SUN - up * 0.035 - side * 0.02))) / 3.0;
}

// can the photo's camera see this point? (the side buildings may hide it)
bool photoSees(vec3 p) {
	vec3 ro = ${glslVec(CAM)};
	vec3 rd = p - ro;
	if (hitBox(ro, rd, ${glslVec([-40, 0, PINK_END_Z])}, ${glslVec([PINK_X - 0.02, PINK_H, MOUTH_Z])}, 0.995)) return false;
	if (hitBox(ro, rd, ${glslVec([RIGHT_X + 0.02, 0, -80])}, ${glslVec([70, CREAM_H, MOUTH_Z])}, 0.995)) return false;
	return true;
}

// is this point sky in the photo? (only meaningful inside the photo)
bool photoSky(vec3 p) {
	vec3 pc = ${amat} * (p - ${glslVec(CAM)});
	if (pc.z < 0.2) return false;
	vec2 uv = vec2(
		(${PCX.toFixed(2)} + ${F.toFixed(3)} * pc.x / pc.z) / ${PW.toFixed(1)},
		(${PCY.toFixed(2)} - ${F.toFixed(3)} * pc.y / pc.z) / ${PH.toFixed(1)}
	);
	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return false;
	return texture2D(photoMask, uv).r < 0.5;
}

// photo colour and how much to trust it (0..1)
vec4 photoAt(vec3 p, vec3 n, vec3 eye) {
	vec3 pc = ${amat} * (p - ${glslVec(CAM)});
	if (pc.z < 0.2) return vec4(0.0);
	vec2 uv = vec2(
		(${PCX.toFixed(2)} + ${F.toFixed(3)} * pc.x / pc.z) / ${PW.toFixed(1)},
		(${PCY.toFixed(2)} - ${F.toFixed(3)} * pc.y / pc.z) / ${PH.toFixed(1)}
	);
	vec2 e = min(uv, 1.0 - uv);
	float w = smoothstep(0.002, 0.02, min(e.x, e.y));
	if (w <= 0.0) return vec4(0.0);
	w *= smoothstep(0.35, 0.75, texture2D(photoMask, uv).r);
	if (w <= 0.0) return vec4(0.0);
	if (!photoSees(p)) return vec4(0.0);
	// if we see this surface much more square-on than the photo did,
	// the photo would look smeared: hand over to the painted facade
	float camCos = abs(dot(normalize(p - ${glslVec(CAM)}), n));
	float eyeCos = abs(dot(normalize(p - eye), n));
	float stretch = eyeCos / max(camCos, 0.001);
	w *= 1.0 - smoothstep(2.2, 3.6, stretch);
	return vec4(texture2D(photo, uv).rgb, w);
}

vec3 skyColour(vec3 dir) {
	float h = clamp(dir.y, 0.0, 1.0);
	vec3 horizon = vec3(1.00, 0.80, 0.58);
	vec3 belt = vec3(0.98, 0.72, 0.66);
	vec3 zenith = vec3(0.47, 0.62, 0.84);
	vec3 col = mix(horizon, belt, smoothstep(0.02, 0.18, h));
	col = mix(col, zenith, smoothstep(0.15, 0.65, h));
	// slow drifting clouds, lit gold from below
	vec2 cp = dir.xz / max(dir.y, 0.06) * 0.9 + vec2(time * 0.012, time * 0.004);
	float c = fbm(cp * 0.6);
	c = smoothstep(0.52, 0.80, c) * smoothstep(0.02, 0.12, h);
	vec3 cloud = mix(vec3(1.0, 0.86, 0.70), vec3(1.0, 0.95, 0.88), fbm(cp * 1.7));
	return mix(col, cloud, c * 0.75);
}

void main() {
	float kind = v_attr.x;
	vec2 fuv = v_attr.yz;
	vec3 N = normalize(v_normal);
	vec3 V = v_pos - v_eye;
	float dist = length(V);

	if (kind > 5.5) {
		gl_FragColor = vec4(skyColour(normalize(V)), 1.0);
		return;
	}

	// ---------- painted fallback ----------
	vec3 base;
	if (kind < 0.5) {
		base = texture2D(cobbleTex, fuv / ${COBBLE_TEX.toFixed(2)}).rgb;
	} else if (kind < 2.5) {
		base = texture2D(pinkTex, vec2(fuv.x / ${PINK_TEX[0].toFixed(2)}, 1.0 - fuv.y / ${PINK_TEX[1].toFixed(2)})).rgb;
	} else if (kind < 3.5) {
		base = texture2D(yellowTex, vec2(fuv.x / ${BAY_TEX[0].toFixed(2)}, 1.0 - fuv.y / ${BAY_TEX[1].toFixed(2)})).rgb;
	} else {
		base = texture2D(creamTex, vec2(fuv.x / ${BAY_TEX[0].toFixed(2)}, 1.0 - fuv.y / ${BAY_TEX[1].toFixed(2)})).rgb;
	}

	// ---------- the photograph, where it can be trusted ----------
	bool projectable = kind < 0.5 || (kind > 0.5 && kind < 1.5) || (kind > 2.5 && kind < 4.5);
	if (kind < 0.5) {
		// the photo only shows ground inside the alley, or beyond its corners
		bool inAlley = v_pos.x > ${(PINK_X - 0.05).toFixed(3)} && v_pos.x < ${(RIGHT_X + 0.05).toFixed(3)};
		projectable = inAlley || v_pos.z < ${PINK_END_Z.toFixed(3)};
		projectable = projectable && v_pos.z < ${(MOUTH_Z + 4.5).toFixed(3)};
	}
	// the yellow building ends at its real roofline
	if (kind > 2.5 && kind < 3.5 && v_pos.y > 15.0 && photoSky(v_pos)) discard;

	if (projectable) {
		vec4 ph = photoAt(v_pos, N, v_eye);
		base = mix(base, ph.rgb, ph.a);
	}

	// ---------- golden afternoon ----------
	base = pow(base, vec3(0.94)) * vec3(1.05, 1.0, 0.90);

	float ndl = max(dot(N, SUN), 0.0);
	float lit = ndl > 0.0 ? sunVisible(v_pos, N) : 0.0;
	vec3 shade = vec3(0.80, 0.80, 0.86);
	vec3 sun = vec3(1.30, 1.02, 0.66);
	vec3 col = base * (shade + sun * ndl * lit * 0.95);

	// warm haze with distance
	col = mix(col, vec3(1.0, 0.86, 0.68), (1.0 - exp(-dist / 140.0)) * 0.35);

	gl_FragColor = vec4(col, 1.0);
}`;

const VERT = `
precision highp float;
uniform mat4 proj, view;
uniform float yScale;
attribute vec3 position, normal, attr;
varying vec3 v_pos, v_normal, v_attr, v_eye;
void main() {
	v_pos = position;
	v_normal = normal;
	v_attr = attr;
	vec3 t = view[3].xyz;
	v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
	vec3 p = position;
	p.y *= yScale;
	gl_Position = proj * view * vec4(p, 1.0);
}`;


/* ===========================================================
 * MODULE
 * ===========================================================
 */

module.exports = (regl) => {

	const data = buildStreet();

	const clampOpts = { wrapS: 'clamp', wrapT: 'clamp', flipY: false };
	const mirrorOpts = { wrapS: 'mirror', wrapT: 'clamp', flipY: false };
	const repeatOpts = { wrapS: 'repeat', wrapT: 'repeat', flipY: false };

	const photo = loadTexture(regl, 'res/street/photo.jpg', clampOpts, [190, 160, 120]);
	const photoMask = loadTexture(regl, 'res/street/photo_mask.png', clampOpts, [255, 255, 255]);
	const pinkTex = loadTexture(regl, 'res/street/facade_pink.jpg', mirrorOpts, [200, 150, 135]);
	const yellowTex = loadTexture(regl, 'res/street/facade_yellow.jpg', mirrorOpts, [225, 180, 95]);
	const creamTex = loadTexture(regl, 'res/street/facade_cream.jpg', mirrorOpts, [215, 200, 175]);
	const cobbleTex = loadTexture(regl, 'res/street/cobbles.jpg', repeatOpts, [95, 95, 95]);

	const start = Date.now();

	const draw = regl({
		frag: FRAG,
		vert: VERT,
		attributes: {
			position: data.position,
			normal: data.normal,
			attr: data.attr
		},
		elements: new Uint32Array(data.elements),
		uniforms: {
			photo,
			photoMask,
			pinkTex,
			yellowTex,
			creamTex,
			cobbleTex,
			time: () => (Date.now() - start) / 1000
		}
	});

	return function () {
		draw();
	};
};


module.exports.layout = {
	MOUTH_Z,
	PINK_X,
	RIGHT_X,
	PINK_H,
	CREAM_H,
	S
};

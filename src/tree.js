'use strict';

const NIGHT_GLSL = require('./env').GLSL;   // moonlit by night (see env.js)

/*
 * THE TREE IN THE ALCOVE
 * ----------------------
 * A real tree model (Poly Haven's "Island Tree 01", CC0), slimmed down
 * for the web and packed into res/tree.bin:
 *
 *   header   'TREE', vertex count, wood vertex count, index count,
 *            bounding box min (3 floats), bounding box size (3 floats)
 *   then     positions (uint16 x 3), leaf texture coords (uint16 x 2),
 *            normals (int8 x 3), padding to 4 bytes, triangles (uint32 x 3)
 *
 * The first vertices are the trunk and branches (bark mapped on from
 * the sides, so they need no texture coordinates); the rest are leaf
 * cards cut out of res/tree/leaves.webp.
 *
 * It stands on the earth inside the round bench (alcove.js) and is lit
 * by the shaft of sun from the oculus, by the soft daylight in the
 * court, and a little by the hall.
 */

const { A, BENCH, SHAFT, TREE, oculusGLSL } = require('./alcove');
const quality = require('./quality');

// a tall tree: stretched a little more upwards than outwards
const SXZ = TREE.sxz, SY = TREE.sy;
const YAW = TREE.yaw;

function decode(buf) {
	const dv = new DataView(buf);
	const nV = dv.getUint32(4, true);
	const nWood = dv.getUint32(8, true);
	const nI = dv.getUint32(12, true);
	const mn = [0, 1, 2].map((k) => dv.getFloat32(16 + k * 4, true));
	const sz = [0, 1, 2].map((k) => dv.getFloat32(28 + k * 4, true));
	let off = 40;
	const pos = new Uint16Array(buf, off, nV * 3); off += nV * 6;
	const uv = new Uint16Array(buf, off, nV * 2); off += nV * 4;
	const nrm = new Int8Array(buf, off, nV * 3); off += nV * 3;
	off = (off + 3) & ~3;
	const idx = new Uint32Array(buf, off, nI);
	return { nV, nWood, nI, mn, sz, pos, uv, nrm, idx };
}

function build(m) {
	const position = new Float32Array(m.nV * 3);
	const normal = new Float32Array(m.nV * 3);
	const uv = new Float32Array(m.nV * 2);
	const leaf = new Float32Array(m.nV);
	const c = Math.cos(YAW), s = Math.sin(YAW);
	for (let i = 0; i < m.nV; i++) {
		const x = (m.mn[0] + m.pos[i * 3] / 65535 * m.sz[0]) * SXZ;
		const y = (m.mn[1] + m.pos[i * 3 + 1] / 65535 * m.sz[1]) * SY;
		const z = (m.mn[2] + m.pos[i * 3 + 2] / 65535 * m.sz[2]) * SXZ;
		position[i * 3] = A.cx + c * x + s * z;
		position[i * 3 + 1] = BENCH.soil + 0.02 + y;
		position[i * 3 + 2] = A.zc - s * x + c * z;
		let nx = m.nrm[i * 3] / 127 / SXZ, ny = m.nrm[i * 3 + 1] / 127 / SY, nz = m.nrm[i * 3 + 2] / 127 / SXZ;
		const nl = Math.hypot(nx, ny, nz) || 1;
		nx /= nl; ny /= nl; nz /= nl;
		normal[i * 3] = c * nx + s * nz;
		normal[i * 3 + 1] = ny;
		normal[i * 3 + 2] = -s * nx + c * nz;
		uv[i * 2] = m.uv[i * 2] / 65535;
		uv[i * 2 + 1] = m.uv[i * 2 + 1] / 65535;
		leaf[i] = i >= m.nWood ? 1 : 0;
	}
	return { position, normal, uv, leaf, elements: m.idx };
}

function loadTexture(regl, url, opts, fallback) {
	const tex = regl.texture({ data: [[fallback]], min: 'linear', mag: 'linear' });
	fetch(url)
		.then((r) => {
			if (!r.ok) throw new Error('Could not load ' + url);
			return r.blob();
		})
		// some phones refuse the options, so fall back to a plain image
		.then((b) => createImageBitmap(b, { premultiplyAlpha: 'none' }).catch(() => new Promise((ok, fail) => {
			const img = new Image();
			img.onload = () => ok(img);
			img.onerror = fail;
			img.src = URL.createObjectURL(b);
		})))
		.then((img) => tex({ data: img, flipY: false, min: 'mipmap', mipmap: 'nice', mag: 'linear', ...opts }))
		.catch((e) => console.error(e));
	return tex;
}

const f = (x) => x.toFixed(4);

// the crown, roughly, for the sun shaft's shade inside it
const CROWN_C = TREE.crownC;
const CROWN_R = TREE.crownR;

const VERT = `
precision highp float;
uniform mat4 proj, view;
uniform float yScale, time;
attribute vec3 position, normal;
attribute vec2 uv;
attribute float leaf;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

const vec3 SHAFT = vec3(${f(SHAFT[0])}, ${f(SHAFT[1])}, ${f(SHAFT[2])});

void main() {
	vec3 p = position;
	// the air in the court is never quite still. The whole tree leans
	// with it, slowly, more the higher and the further out on a limb
	// (wood and leaves together, so every leaf stays on its twig) ...
	float h = max(p.y - 1.2, 0.0);
	vec2 out2 = p.xz - vec2(${f(A.cx)}, ${f(A.zc)});
	float reach = h * (0.5 + 0.35 * length(out2));
	float breeze = sin(time * 0.43 + p.x * 0.35 + p.z * 0.27) * 0.6 + sin(time * 0.19 + 1.7) * 0.4;
	p.x += breeze * 0.010 * reach;
	p.z += (sin(time * 0.37 + p.z * 0.41 + 2.1) * 0.6 + sin(time * 0.23) * 0.4) * 0.008 * reach;
	// ... each bough nods on its own ...
	float bough = sin(time * 0.9 + floor(p.y * 0.8) * 2.4 + atan(out2.y, out2.x) * 2.0);
	p.y += bough * 0.006 * reach;
	// ... and now and then a breath passes through the crown and the
	// leaves it touches shiver
	float gustWave = smoothstep(0.55, 1.0, sin(time * 0.31 + p.x * 0.6 - p.z * 0.4 + p.y * 0.3));
	float shiver = 0.25 + 0.75 * gustWave;
	p.x += leaf * sin(time * 3.1 + p.y * 7.3 + p.z * 5.9) * 0.009 * shiver * min(h, 2.5);
	p.y += leaf * sin(time * 2.7 + p.x * 6.1 + p.z * 4.3) * 0.006 * shiver * min(h, 2.5);
	p.z += leaf * cos(time * 2.3 + p.x * 6.7) * 0.008 * shiver * min(h, 2.5);
	v_pos = p;
	v_n = normal;
	v_uv = uv;
	v_leaf = leaf;
	vec3 tv = view[3].xyz;
	v_eye = -vec3(dot(view[0].xyz, tv), dot(view[1].xyz, tv), dot(view[2].xyz, tv));
	v_eye.y *= yScale;

	// how much of the crown lies between this point and the oculus
	vec3 cc = vec3(${f(CROWN_C[0])}, ${f(CROWN_C[1])}, ${f(CROWN_C[2])});
	vec3 cr = vec3(${f(CROWN_R[0])}, ${f(CROWN_R[1])}, ${f(CROWN_R[2])});
	vec3 oc = (p - cc) / cr, dd = SHAFT / cr;
	float a = dot(dd, dd), b = dot(oc, dd), c = dot(oc, oc) - 1.0;
	float disc = b * b - a * c;
	float inside = 0.0;
	if (disc > 0.0) {
		float sq = sqrt(disc);
		inside = max(0.0, (-b + sq) / a - max(0.0, (-b - sq) / a));
	}
	v_shade = exp(-inside * 1.3);

	p.y *= yScale;
	gl_Position = proj * view * vec4(p, 1.0);
}`;

const LANTERN = require('./lanterns');
const FRAG = `
precision highp float;
${NIGHT_GLSL}
uniform float time;
${LANTERN.lanternGLSL(LANTERN.TREE_LANTERN)}
const vec3 LANTERN_POS = vec3(${LANTERN.LANTERNS[LANTERN.TREE_LANTERN[0]].x.toFixed(3)}, ${LANTERN.LANTERNS[LANTERN.TREE_LANTERN[0]].y.toFixed(3)}, ${LANTERN.LANTERNS[LANTERN.TREE_LANTERN[0]].z.toFixed(3)});
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;
varying vec3 v_eye;

${oculusGLSL()}

float hash3(vec3 p) {
	p = fract(p * 0.1031);
	p += dot(p, p.yzx + 33.33);
	return fract((p.x + p.y) * p.z);
}
float noise3(vec3 p) {
	vec3 i = floor(p), g = fract(p);
	g = g * g * (3.0 - 2.0 * g);
	return mix(mix(mix(hash3(i), hash3(i + vec3(1, 0, 0)), g.x), mix(hash3(i + vec3(0, 1, 0)), hash3(i + vec3(1, 1, 0)), g.x), g.y),
	           mix(mix(hash3(i + vec3(0, 0, 1)), hash3(i + vec3(1, 0, 1)), g.x), mix(hash3(i + vec3(0, 1, 1)), hash3(i + vec3(1, 1, 1)), g.x), g.y), g.z);
}

float oculusSun(vec3 p) {
	return oculusOpen(p);
}

void main() {
	vec3 N = normalize(v_n);
	vec3 V = normalize(v_eye - v_pos);
	vec3 base;
	float rough = 0.0;
	if (v_leaf > 0.5) {
		vec4 t = texture2D(leaves, v_uv);
		// (seen from across the hall a leaf is smaller than a pixel, and a
		// hard cut-out would thin the crown away to nothing: further off,
		// more of each leaf is kept, so the tree stays as full as it is)
		float away = length(v_eye - v_pos);
		if (t.a < mix(0.5, 0.2, smoothstep(2.5, 11.0, away))) discard;
		base = t.rgb * vec3(0.92, 1.0, 0.86);
		// no two sprays of leaves are the same green: some younger and
		// yellower, some older and darker, a few just turning
		float kind = noise3(v_pos * 1.7);
		float fine = noise3(v_pos * 9.0);
		base *= mix(vec3(0.80, 0.86, 0.78), vec3(1.12, 1.10, 0.92), kind);
		base = mix(base, base * vec3(1.25, 1.02, 0.62), smoothstep(0.80, 0.97, fine) * 0.55);
		base *= 0.9 + 0.2 * fine;
		if (!gl_FrontFacing) N = -N;
	} else {
		// bark from the three sides, blended by the normal
		vec3 w = abs(N);
		w = pow(w, vec3(4.0));
		w /= (w.x + w.y + w.z);
		vec3 q = v_pos * 0.9;
		base = texture2D(bark, q.yz).rgb * w.x + texture2D(bark, q.xz).rgb * w.y + texture2D(bark, q.xy).rgb * w.z;
		// the furrows of the bark are deep and dark, the ridges catch the
		// light; a little moss low down and on the side away from the sun
		float ridge = dot(base, vec3(0.333));
		rough = smoothstep(0.18, 0.55, ridge);
		base *= 0.74 + 0.36 * rough;
		float moss = smoothstep(0.45, 0.75, noise3(v_pos * vec3(2.3, 1.1, 2.3))) * (1.0 - smoothstep(0.4, 2.6, v_pos.y)) * (0.4 + 0.6 * max(-dot(N, SHAFT), 0.0));
		base = mix(base, base * vec3(0.78, 0.95, 0.60) + vec3(0.006, 0.014, 0.003), moss * 0.4);
	}

	// depth in the crown: darker deep inside
	vec3 rel = (v_pos - vec3(${f(CROWN_C[0])}, ${f(CROWN_C[1])}, ${f(CROWN_C[2])})) / vec3(${f(CROWN_R[0])}, ${f(CROWN_R[1])}, ${f(CROWN_R[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.38, 1.0, outer * outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));
	// and the trunk darkens where it meets the soil
	ao *= 0.6 + 0.4 * smoothstep(${f(BENCH.soil)}, ${f(BENCH.soil + 0.5)}, v_pos.y);

	// soft daylight in the court, coming mostly from above
	float up = 0.6 + 0.4 * N.y;
	float light = (0.40 + 0.24 * up) * ao;

	// the shaft of sun through the oculus, broken into flecks by the
	// leaves above: they drift as the crown moves
	float dapple = mix(1.0, smoothstep(0.30, 0.62, noise3(v_pos * 3.1 + vec3(time * 0.07, 0.0, time * 0.05))), 0.75 * (1.0 - v_shade * 0.6));
	float lit = oculusSun(v_pos) * v_shade * dapple;
	float ndl = v_leaf > 0.5 ? (0.35 + 0.65 * abs(dot(N, SHAFT))) : max(dot(N, SHAFT), 0.0) * (0.6 + 0.4 * rough);
	float sun = lit * ndl;
	light += sun * 1.5;

	vec3 col = base * light * vec3(1.03, 1.0, 0.94);
	if (v_leaf > 0.5) {
		// a leaf with the sun behind it lights up from inside, most of all
		// when you look towards the sun through it
		float behind = max(dot(-N, SHAFT), 0.0);
		float towards = pow(max(dot(-V, SHAFT), 0.0), 2.0);
		col += base * vec3(0.80, 0.95, 0.30) * lit * (0.30 + 0.9 * behind * (0.4 + 1.6 * towards));
		// and its waxy face throws a small cold glint of the sky
		vec3 H = normalize(SHAFT + V);
		col += vec3(0.9, 0.95, 1.0) * pow(max(dot(N, H), 0.0), 42.0) * (0.10 + 0.55 * lit) * ao;
		// the edge of the crown against the bright dome: a thin rim
		col += base * pow(1.0 - abs(dot(N, V)), 3.0) * 0.18 * outer;
	}
	// at night the little lantern on the bench glints on the bark and
	// the undersides of the leaves
	vec3 lan = lanternLight(v_pos, v_leaf > 0.5 ? normalize(LANTERN_POS - v_pos) : N);
	gl_FragColor = vec4(toNight(col, 1.15) + base * lan * 1.2, 1.0);
}`;

module.exports = (regl) => {

	let draw = null;
	const leaves = loadTexture(regl, 'res/tree/leaves.webp', { wrapS: 'clamp', wrapT: 'clamp' }, [60, 80, 40, 0]);
	const bark = loadTexture(regl, 'res/tree/bark.jpg', { wrapS: 'repeat', wrapT: 'repeat' }, [90, 80, 70]);
	const start = Date.now();

	fetch('res/tree.bin')
		.then((r) => {
			if (!r.ok) throw new Error('Could not load the tree');
			return r.arrayBuffer();
		})
		.then((buf) => {
			const g = build(decode(buf));
			draw = regl({
				vert: VERT,
				frag: FRAG,
				attributes: {
					position: g.position,
					normal: g.normal,
					uv: g.uv,
					leaf: g.leaf
				},
				elements: g.elements,
				uniforms: {
					leaves,
					bark,
					time: () => (!quality.motion ? 0.0 : typeof window !== 'undefined' && window.__streetClock !== undefined ? window.__streetClock : (Date.now() - start) / 1000)
				},
				cull: { enable: false }
			});
		})
		.catch((e) => console.error(e));

	return function () {
		if (draw) draw();
	};
};

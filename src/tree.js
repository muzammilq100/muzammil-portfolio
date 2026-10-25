'use strict';

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
 * cards cut out of res/tree/leaves.png.
 *
 * It stands on the earth inside the round bench (alcove.js) and is lit
 * by the shaft of sun from the oculus, by the soft daylight in the
 * court, and a little by the hall.
 */

const { A, BENCH, SHAFT, oculusGLSL } = require('./alcove');
const quality = require('./quality');

const SCALE = 1.3;
const YAW = 0.6;

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
		const x = (m.mn[0] + m.pos[i * 3] / 65535 * m.sz[0]) * SCALE;
		const y = (m.mn[1] + m.pos[i * 3 + 1] / 65535 * m.sz[1]) * SCALE;
		const z = (m.mn[2] + m.pos[i * 3 + 2] / 65535 * m.sz[2]) * SCALE;
		position[i * 3] = A.cx + c * x + s * z;
		position[i * 3 + 1] = BENCH.soil + 0.02 + y;
		position[i * 3 + 2] = A.zc - s * x + c * z;
		const nx = m.nrm[i * 3] / 127, ny = m.nrm[i * 3 + 1] / 127, nz = m.nrm[i * 3 + 2] / 127;
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
const CROWN_C = [A.cx, BENCH.soil + 3.3 * SCALE, A.zc];
const CROWN_R = [2.3 * SCALE, 1.8 * SCALE, 2.3 * SCALE];

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

const vec3 SHAFT = vec3(${f(SHAFT[0])}, ${f(SHAFT[1])}, ${f(SHAFT[2])});

void main() {
	vec3 p = position;
	// leaves stir a little
	float h = max(p.y - 1.5, 0.0);
	p.x += leaf * sin(time * 1.7 + p.y * 2.3 + p.z * 1.9) * 0.012 * h;
	p.z += leaf * cos(time * 1.3 + p.x * 2.1) * 0.010 * h;
	v_pos = p;
	v_n = normal;
	v_uv = uv;
	v_leaf = leaf;

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

const FRAG = `
precision highp float;
uniform sampler2D leaves, bark;
varying vec3 v_pos, v_n;
varying vec2 v_uv;
varying float v_leaf, v_shade;

${oculusGLSL()}

float oculusSun(vec3 p) {
	return oculusOpen(p);
}

void main() {
	vec3 N = normalize(v_n);
	vec3 base;
	if (v_leaf > 0.5) {
		vec4 t = texture2D(leaves, v_uv);
		if (t.a < 0.5) discard;
		base = t.rgb * vec3(0.92, 1.0, 0.86);
		if (!gl_FrontFacing) N = -N;
	} else {
		// bark from the three sides, blended by the normal
		vec3 w = abs(N);
		w = pow(w, vec3(4.0));
		w /= (w.x + w.y + w.z);
		vec3 q = v_pos * 0.9;
		base = texture2D(bark, q.yz).rgb * w.x + texture2D(bark, q.xz).rgb * w.y + texture2D(bark, q.xy).rgb * w.z;
		base *= 0.85;
	}

	// depth in the crown: darker deep inside
	vec3 rel = (v_pos - vec3(${f(CROWN_C[0])}, ${f(CROWN_C[1])}, ${f(CROWN_C[2])})) / vec3(${f(CROWN_R[0])}, ${f(CROWN_R[1])}, ${f(CROWN_R[2])});
	float outer = clamp(length(rel), 0.0, 1.0);
	float ao = mix(0.45, 1.0, outer) * (0.75 + 0.25 * smoothstep(0.4, 2.0, v_pos.y));

	// soft daylight in the court, coming mostly from above
	float up = 0.6 + 0.4 * N.y;
	float light = (0.30 + 0.16 * up) * ao;

	// the shaft of sun through the oculus
	float ndl = v_leaf > 0.5 ? (0.35 + 0.65 * abs(dot(N, SHAFT))) : max(dot(N, SHAFT), 0.0);
	float sun = oculusSun(v_pos) * v_shade * ndl;
	light += sun * 1.45;

	vec3 col = base * light * vec3(1.03, 1.0, 0.94);
	// leaves glow a little where the sun comes through them
	col += v_leaf * base * vec3(0.55, 0.65, 0.25) * oculusSun(v_pos) * v_shade * 0.35;
	gl_FragColor = vec4(col, 1.0);
}`;

module.exports = (regl) => {

	let draw = null;
	const leaves = loadTexture(regl, 'res/tree/leaves.png', { wrapS: 'clamp', wrapT: 'clamp' }, [60, 80, 40, 0]);
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

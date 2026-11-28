'use strict';

/*
 * BAKED LIGHT FOR THE ROOMS
 * -------------------------
 * The same idea as the gallery's baked light (lightmap.js, mesh.js), for
 * rooms whose surfaces are not all square to the walls: the piano room's
 * round wall and winding stair, the red room's pointed vault.
 *
 * charts(): lays the surfaces flat into one picture. Neighbouring
 * triangles that face nearly the same way (within about 20 degrees) and lie
 * close to one plane are grown into one piece ("a chart") and laid flat on
 * that plane; a curved wall becomes a row of gently bent strips, each
 * flattened. The pieces are packed side by side, and every triangle gets
 * its own corners (the baked ones first, so the bake draws just them).
 *
 * baker(): draws the baked triangles laid out in that picture with the
 * room's own light code (one picture per pass, four numbers to a texel),
 * then spreads every piece's edge a few texels outwards, so reading right
 * at an edge never picks up an empty texel.
 */

const PAD = 2;

// grow, pack and lay out. g: { pos, nrm, idx } plus any other per-vertex
// lists in g.extra ({ name: [list, size] }); bakeTri(t, a, b, c, n) says
// whether a triangle is baked; density(n, p) its texels per metre
function charts(g, opts) {
	const o = Object.assign({ width: 1024, maxHeight: 2048, scale: 1, cos: 0.94, slab: 0.6 }, opts || {});
	const P = g.pos, N = g.nrm, E = g.idx;
	const T = E.length / 3;

	// each triangle: its face normal, and whether it is baked
	const tri = new Array(T);
	for (let t = 0; t < T; t++) {
		const a = E[t * 3], b = E[t * 3 + 1], c = E[t * 3 + 2];
		const ux = P[b * 3] - P[a * 3], uy = P[b * 3 + 1] - P[a * 3 + 1], uz = P[b * 3 + 2] - P[a * 3 + 2];
		const vx = P[c * 3] - P[a * 3], vy = P[c * 3 + 1] - P[a * 3 + 1], vz = P[c * 3 + 2] - P[a * 3 + 2];
		let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
		const l = Math.hypot(nx, ny, nz);
		let ok = l > 1e-10;
		if (ok) {
			nx /= l; ny /= l; nz /= l;
			// (the face the shading normal says is the front)
			const sn = N[a * 3] * nx + N[a * 3 + 1] * ny + N[a * 3 + 2] * nz;
			if (sn < 0) { nx = -nx; ny = -ny; nz = -nz; }
			ok = !!o.bakeTri(t, a, b, c, [nx, ny, nz]);
		}
		tri[t] = { t, a, b, c, n: [nx, ny, nz], ok, chart: null };
	}

	// neighbours across shared edges (by position)
	const key = (v) => Math.round(P[v * 3] * 2000) + ',' + Math.round(P[v * 3 + 1] * 2000) + ',' + Math.round(P[v * 3 + 2] * 2000);
	const edges = new Map();
	const vk = new Array(P.length / 3);
	for (let v = 0; v < vk.length; v++) vk[v] = key(v);
	for (const q of tri) {
		if (!q.ok) continue;
		const ks = [vk[q.a], vk[q.b], vk[q.c]];
		for (let e = 0; e < 3; e++) {
			const k1 = ks[e], k2 = ks[(e + 1) % 3];
			const ek = k1 < k2 ? k1 + '|' + k2 : k2 + '|' + k1;
			if (!edges.has(ek)) edges.set(ek, []);
			edges.get(ek).push(q);
		}
	}
	const nb = (q) => {
		const ks = [vk[q.a], vk[q.b], vk[q.c]], out = [];
		for (let e = 0; e < 3; e++) {
			const k1 = ks[e], k2 = ks[(e + 1) % 3];
			for (const r of edges.get(k1 < k2 ? k1 + '|' + k2 : k2 + '|' + k1) || []) if (r !== q) out.push(r);
		}
		return out;
	};

	// grow the charts
	const list = [];
	for (const seed of tri) {
		if (!seed.ok || seed.chart) continue;
		const n0 = seed.n;
		// a frame on the seed's plane
		const up = Math.abs(n0[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
		let tx = up[1] * n0[2] - up[2] * n0[1], ty = up[2] * n0[0] - up[0] * n0[2], tz = up[0] * n0[1] - up[1] * n0[0];
		const tl = Math.hypot(tx, ty, tz); tx /= tl; ty /= tl; tz /= tl;
		const bx = n0[1] * tz - n0[2] * ty, by = n0[2] * tx - n0[0] * tz, bz = n0[0] * ty - n0[1] * tx;
		const d0 = P[seed.a * 3] * n0[0] + P[seed.a * 3 + 1] * n0[1] + P[seed.a * 3 + 2] * n0[2];
		const ch = { tris: [], n: n0, T: [tx, ty, tz], B: [bx, by, bz], kind: o.kind ? o.kind(n0, [P[seed.a * 3], P[seed.a * 3 + 1], P[seed.a * 3 + 2]]) : 'wall' };
		const stack = [seed];
		seed.chart = ch;
		while (stack.length) {
			const q = stack.pop();
			ch.tris.push(q);
			for (const r of nb(q)) {
				if (r.chart || !r.ok) continue;
				if (r.n[0] * n0[0] + r.n[1] * n0[1] + r.n[2] * n0[2] < o.cos) continue;
				// (and close to the seed's plane, so a winding surface is cut
				// into pieces that never lie over one another when flattened)
				let far = false;
				for (const v of [r.a, r.b, r.c]) if (Math.abs(P[v * 3] * n0[0] + P[v * 3 + 1] * n0[1] + P[v * 3 + 2] * n0[2] - d0) > o.slab) far = true;
				if (far) continue;
				r.chart = ch;
				stack.push(r);
			}
		}
		list.push(ch);
	}

	// each chart's extent on its plane
	for (const ch of list) {
		let u0 = Infinity, v0 = Infinity, u1 = -Infinity, v1 = -Infinity;
		for (const q of ch.tris) for (const v of [q.a, q.b, q.c]) {
			const u = P[v * 3] * ch.T[0] + P[v * 3 + 1] * ch.T[1] + P[v * 3 + 2] * ch.T[2];
			const w = P[v * 3] * ch.B[0] + P[v * 3 + 1] * ch.B[1] + P[v * 3 + 2] * ch.B[2];
			if (u < u0) u0 = u; if (u > u1) u1 = u;
			if (w < v0) v0 = w; if (w > v1) v1 = w;
		}
		ch.u0 = u0; ch.v0 = v0; ch.du = u1 - u0; ch.dv = v1 - v0;
	}

	// pack (rows, tallest first, each piece on its long side); coarser and
	// again if it does not fit
	const W = o.width;
	let scale = o.scale, H = 0;
	for (let tries = 0; ; tries++) {
		for (const ch of list) {
			const d = o.density(ch.kind) * scale;
			ch.dU = Math.max(d, 3 / Math.max(ch.du, 1e-4));
			ch.dV = Math.max(d, 3 / Math.max(ch.dv, 1e-4));
			ch.w = Math.ceil(ch.du * ch.dU) + PAD * 2;
			ch.h = Math.ceil(ch.dv * ch.dV) + PAD * 2;
			ch.rot = ch.h > ch.w;
			if (ch.rot) { const s = ch.w; ch.w = ch.h; ch.h = s; }
		}
		const order = list.slice().sort((p, q) => q.h - p.h || q.w - p.w);
		let x = 0, y = 0, rowH = 0, ok = true;
		for (const ch of order) {
			if (ch.w > W) { ok = false; break; }
			if (x + ch.w > W) { y += rowH; x = 0; rowH = 0; }
			ch.x = x; ch.y = y;
			x += ch.w; rowH = Math.max(rowH, ch.h);
		}
		H = y + rowH;
		if (ok && H <= o.maxHeight) break;
		scale *= 0.92;
		if (tries > 40) throw new Error('bake: the room does not fit');
	}
	H = Math.max(4, Math.ceil(H / 4) * 4);

	// the new vertex lists: baked triangles first
	const order = tri.filter((q) => q.ok).concat(tri.filter((q) => !q.ok));
	const n = T * 3;
	const out = { position: new Float32Array(n * 3), normal: new Float32Array(n * 3), lm: new Float32Array(n * 3) };
	const extra = g.extra || {};
	for (const name in extra) out[name] = new Float32Array(n * extra[name][1]);
	let k = 0;
	for (const q of order) {
		const ch = q.chart;
		for (const v of [q.a, q.b, q.c]) {
			for (let c = 0; c < 3; c++) { out.position[k * 3 + c] = P[v * 3 + c]; out.normal[k * 3 + c] = N[v * 3 + c]; }
			for (const name in extra) {
				const [src, size] = extra[name];
				for (let c = 0; c < size; c++) out[name][k * size + c] = src[v * size + c];
			}
			if (ch && q.ok) {
				const pu = P[v * 3] * ch.T[0] + P[v * 3 + 1] * ch.T[1] + P[v * 3 + 2] * ch.T[2];
				const pv = P[v * 3] * ch.B[0] + P[v * 3 + 1] * ch.B[1] + P[v * 3 + 2] * ch.B[2];
				let s = (pu - ch.u0) * ch.dU + PAD, t = (pv - ch.v0) * ch.dV + PAD;
				if (ch.rot) { const r = s; s = t; t = r; }
				out.lm[k * 3] = (ch.x + s) / W;
				out.lm[k * 3 + 1] = (ch.y + t) / H;
				out.lm[k * 3 + 2] = 1;
			}
			k++;
		}
	}
	out.elements = new Uint32Array(n);
	for (let i = 0; i < n; i++) out.elements[i] = i;
	out.width = W; out.height = H; out.scale = scale;
	out.bakedCount = tri.filter((q) => q.ok).length * 3;
	out.charts = list.length;
	return out;
}

// the bake itself. passes: [{ frag, uniforms }]: each frag computes
// gl_FragColor for one texel from v_pos, v_nrm (and v_kind, v_uv when the
// room has them: attributes are handed over as they are), with alpha > 0
// wherever a face lies. Returns { tex: [...], ready, bake() }.
function baker(regl, lm, attributes, passes) {
	const W = lm.width, H = lm.height;
	const tex = (filter) => regl.texture({ width: W, height: H, min: filter, mag: filter, wrap: 'clamp' });
	const fbo = (t) => regl.framebuffer({ color: t, depth: false });
	const outs = passes.map(() => tex('linear'));
	const fOuts = outs.map(fbo);

	const names = Object.keys(attributes).filter((a) => a !== 'lm' && a !== 'a_lm');
	const decl = names.map((a) => {
		const size = attributes[a].length / (lm.elements.length);
		return 'attribute ' + (size === 1 ? 'float' : 'vec' + Math.round(size)) + ' ' + a + ';';
	}).join('\n');
	const cmds = passes.map((p) => regl({
		frag: p.frag,
		vert: `
		precision highp float;
		${decl}
		attribute vec3 a_lm;
		${p.vertDecl || ''}
		void main() {
			${p.vertMain || ''}
			gl_Position = vec4(a_lm.xy * 2.0 - 1.0, 0.0, 1.0);
		}`,
		attributes: Object.assign({}, attributes, { a_lm: attributes.a_lm || lm.lm }),
		uniforms: p.uniforms || {},
		framebuffer: regl.prop('fbo'),
		depth: { enable: false },
		cull: { enable: false },
		blend: { enable: false },
		viewport: { x: 0, y: 0, width: W, height: H },
		count: lm.bakedCount
	}));

	const spread = regl({
		frag: `
		precision highp float;
		uniform sampler2D src;
		uniform vec2 px;
		uniform float copyOnly;
		void main() {
			vec2 uv = gl_FragCoord.xy * px;
			vec4 c = texture2D(src, uv);
			if (c.a > 0.0 || copyOnly > 0.5) { gl_FragColor = c; return; }
			vec4 sum = vec4(0.0);
			float n = 0.0;
			for (int y = -1; y <= 1; y++) {
				for (int x = -1; x <= 1; x++) {
					vec4 s = texture2D(src, uv + vec2(float(x), float(y)) * px);
					if (s.a > 0.0) { sum += s; n += 1.0; }
				}
			}
			gl_FragColor = n > 0.0 ? sum / n : vec4(0.0);
		}`,
		vert: `
		precision highp float;
		attribute vec2 p;
		void main() { gl_Position = vec4(p, 0.0, 1.0); }`,
		attributes: { p: [-1, -1, 3, -1, -1, 3] },
		uniforms: { src: regl.prop('src'), px: [1 / W, 1 / H], copyOnly: regl.prop('copy') },
		framebuffer: regl.prop('fbo'),
		depth: { enable: false },
		blend: { enable: false },
		viewport: { x: 0, y: 0, width: W, height: H },
		count: 3
	});

	const state = {
		tex: outs,
		ready: false,
		bake() {
			const a = tex('nearest'), b = tex('nearest');
			const fa = fbo(a), fb = fbo(b);
			cmds.forEach((cmd, i) => {
				regl.clear({ color: [0, 0, 0, 0], framebuffer: fa });
				cmd({ fbo: fa });
				for (let k = 0; k < 2; k++) {
					spread({ src: a, fbo: fb, copy: 0 });
					spread({ src: b, fbo: fa, copy: 0 });
				}
				spread({ src: a, fbo: fOuts[i], copy: 1 });
			});
			fa.destroy(); fb.destroy(); a.destroy(); b.destroy();
			state.ready = true;
		}
	};
	return state;
}

module.exports = { charts, baker };

'use strict';

/*
 * THE FAR DOOR'S LEAVES
 * ---------------------
 * The two glazed leaves of the arched French door at the end of the
 * window corridor. They are built here, apart from the rest of the
 * building, so they can swing: in the tour a gust of wind throws them
 * wide open into the corridor and sends the leaf flying again.
 *
 * Same design as the entrance door (entrance.js builds both); each leaf
 * turns on its hinge at the outer edge of the opening. `draw(open)`
 * takes how far open they are: 0 shut, 1 wide open (about 100 degrees);
 * a little over 1 lets them swing past and settle back.
 *
 * Gallery metres: the door stands in the plane x = FAR_DOOR.x, across
 * the corridor's centre line z = C.zc; "into the room" is -x.
 */

const geom = require('./geom');
const entrance = require('./entrance');
const { C, FAR_DOOR } = require('./wing');

const OPEN_ANGLE = 100 * Math.PI / 180;

// the door design is built in its own frame (x across, y up, z towards
// the room) and placed at the far end as wing.atFarDoor does:
// local (x, y, z) -> world (FAR_DOOR.x - z, y, C.zc - 7 + x)
const toWorld = (p) => [FAR_DOOR.x - p[2], p[1], C.zc - 7.0 + p[0]];
const toWorldN = (n) => [-n[2], n[1], n[0]];

function buildLeaf(part) {
	const position = [], normal = [], elements = [], mat = [];
	const B = geom.createBuilder(position, normal, elements, mat);
	entrance.addFrames(B, part);
	const glass = entrance.glassPanes(part);
	// (the builder keeps flat lists; here they are wanted point by point)
	const triples = (a) => { const o = []; for (let i = 0; i < a.length; i += 3) o.push([a[i], a[i + 1], a[i + 2]]); return o; };
	return { position: triples(position), normal: triples(normal), elements, glass };
}

module.exports = (regl) => {

	const D = entrance.DOOR;
	const leaves = ['left', 'right'].map((part) => {
		const g = buildLeaf(part);
		const n = g.position.length;
		return {
			part,
			hinge: part === 'left' ? D.x0 : D.x1,
			// turning into the room: the left leaf one way, the right the other
			sign: part === 'left' ? -1 : 1,
			src: g.position.map((p) => p.slice()),
			srcN: g.normal.map((p) => p.slice()),
			srcG: g.glass.map((p) => p.slice()),
			pos: regl.buffer({ data: new Float32Array(n * 3), usage: 'dynamic' }),
			nrm: regl.buffer({ data: new Float32Array(n * 3), usage: 'dynamic' }),
			gpos: regl.buffer({ data: new Float32Array(g.glass.length * 3), usage: 'dynamic' }),
			gnrm: regl.buffer({ data: new Float32Array(g.glass.length * 3), usage: 'dynamic' }),
			el: regl.elements({ data: new Uint32Array(g.elements), type: 'uint32' }),
			glassCount: g.glass.length,
			outP: new Float32Array(n * 3),
			outN: new Float32Array(n * 3),
			outG: new Float32Array(g.glass.length * 3),
			outGN: new Float32Array(g.glass.length * 3)
		};
	});

	// swing every leaf to angle a and send it to the graphics chip
	let lastAngle = null;
	function pose(a) {
		if (a === lastAngle) return;
		lastAngle = a;
		for (const L of leaves) {
			const t = L.sign * a;
			const c = Math.cos(t), s = Math.sin(t);
			const turn = (p) => {
				const x = p[0] - L.hinge, z = p[2];
				return [L.hinge + x * c + z * s, p[1], -x * s + z * c];
			};
			const turnN = (n) => [n[0] * c + n[2] * s, n[1], -n[0] * s + n[2] * c];
			L.src.forEach((p, i) => {
				const w = toWorld(turn(p));
				L.outP.set(w, i * 3);
				L.outN.set(toWorldN(turnN(L.srcN[i])), i * 3);
			});
			const gn = toWorldN(turnN([0, 0, 1]));
			L.srcG.forEach((p, i) => {
				L.outG.set(toWorld(turn(p)), i * 3);
				L.outGN.set(gn, i * 3);
			});
			L.pos.subdata(L.outP);
			L.nrm.subdata(L.outN);
			L.gpos.subdata(L.outG);
			L.gnrm.subdata(L.outGN);
		}
	}
	pose(0);

	const VERT = `
	precision highp float;
	uniform mat4 proj, view;
	uniform float yScale;
	attribute vec3 position, normal;
	varying vec3 v_pos, v_n, v_eye;
	void main() {
		v_pos = position;
		v_n = normal;
		vec3 t = view[3].xyz;
		v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
		v_eye.y *= yScale;
		vec3 p = position;
		p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`;

	// black steel, with a dull sheen of the bright street behind it
	const drawSteel = regl({
		vert: VERT,
		frag: `
		precision highp float;
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 N = normalize(v_n);
			if (!gl_FrontFacing) N = -N;
			vec3 V = normalize(v_eye - v_pos);
			vec3 L = normalize(vec3(1.0, 0.6, 0.2));
			float d = max(dot(N, L), 0.0);
			vec3 col = vec3(0.045, 0.045, 0.048) * (0.35 + 0.5 * d);
			vec3 H = normalize(L + V);
			col += vec3(0.30, 0.29, 0.27) * pow(max(dot(N, H), 0.0), 24.0) * 0.18;
			gl_FragColor = vec4(col, 1.0);
		}`,
		attributes: { position: regl.prop('pos'), normal: regl.prop('nrm') },
		elements: regl.prop('el'),
		cull: { enable: false }
	});

	// the panes: almost clear, catching a little sheen as they swing
	const drawGlass = regl({
		vert: VERT,
		frag: `
		precision highp float;
		varying vec3 v_pos, v_n, v_eye;
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			float c = abs(dot(V, normalize(v_n)));
			float fres = pow(1.0 - c, 3.0);
			float d = (v_pos.x + v_pos.z) * 0.55 + v_pos.y * 0.85;
			float sheen = smoothstep(0.35, 0.0, abs(fract(d * 0.22) - 0.5)) * 0.05;
			float a = 0.05 + 0.32 * fres + sheen;
			gl_FragColor = vec4(mix(vec3(0.80, 0.86, 0.90), vec3(1.0, 0.95, 0.86), 0.4), a);
		}`,
		attributes: { position: regl.prop('pos'), normal: regl.prop('nrm') },
		count: regl.prop('count'),
		cull: { enable: false },
		depth: { enable: true, mask: false },
		blend: {
			enable: true,
			func: { srcRGB: 'src alpha', dstRGB: 'one minus src alpha', srcAlpha: 'zero', dstAlpha: 'one' }
		}
	});

	let open = 0;
	const draw = () => {
		pose(open * OPEN_ANGLE);
		for (const L of leaves) drawSteel({ pos: L.pos, nrm: L.nrm, el: L.el });
	};
	// the panes are drawn with the other glass, after everything else
	draw.glass = () => {
		for (const L of leaves) drawGlass({ pos: L.gpos, nrm: L.gnrm, count: L.glassCount });
	};
	draw.setOpen = (o) => { open = o || 0; };
	return draw;
};

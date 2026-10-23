'use strict';

/*
 * LIFE IN THE STREET
 * ------------------
 * A cyclist gliding past, two people strolling, pigeons pecking at
 * the cobbles and a little flock crossing over now and then.
 *
 * The figures are painted once, frame by frame, onto a canvas when
 * the page loads (no extra files to download), then shown as flat
 * cut-outs in the street outside, like figures in a painting.
 */

const { MOUTH_Z, S } = require('./street').layout;


/* ===========================================================
 * PAINTING THE FIGURES
 * ===========================================================
 */

const ATLAS_W = 2048, ATLAS_H = 1024;

// where each set of frames lives in the atlas
const CELLS = {
	cyclist: { x: 0, y: 0, w: 256, h: 256, n: 8 },
	walkerA: { x: 0, y: 256, w: 128, h: 256, n: 8 },
	walkerB: { x: 1024, y: 256, w: 128, h: 256, n: 8 },
	pigeonFly: { x: 0, y: 512, w: 128, h: 128, n: 4 },
	pigeonPeck: { x: 512, y: 512, w: 128, h: 128, n: 2 },
	shadow: { x: 768, y: 512, w: 128, h: 64, n: 1 }
};

const PX = 107;   // pixels per metre in the figure drawings (before the street scale)

function legIK(hip, foot, l1, l2, forward) {
	const dx = foot[0] - hip[0], dy = foot[1] - hip[1];
	let d = Math.hypot(dx, dy);
	d = Math.min(d, l1 + l2 - 0.5);
	const base = Math.atan2(dy, dx);
	const k = Math.acos(Math.max(-1, Math.min(1, (l1 * l1 + d * d - l2 * l2) / (2 * l1 * d))));
	const a = base - k * forward;
	return [hip[0] + l1 * Math.cos(a), hip[1] + l1 * Math.sin(a)];
}

function limb(ctx, pts, width, colour) {
	ctx.strokeStyle = colour;
	ctx.lineWidth = width;
	ctx.lineCap = 'round';
	ctx.lineJoin = 'round';
	ctx.beginPath();
	ctx.moveTo(pts[0][0], pts[0][1]);
	for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
	ctx.stroke();
}

function blob(ctx, x, y, rx, ry, colour, rot = 0) {
	ctx.fillStyle = colour;
	ctx.beginPath();
	ctx.ellipse(x, y, rx, ry, rot, 0, Math.PI * 2);
	ctx.fill();
}

function drawCyclist(ctx, ox, oy, frame) {
	const a = frame / 8 * Math.PI * 2;
	const g = oy + 250;
	const R = 0.34 * PX;
	const rear = [ox + 66, g - R], front = [ox + 188, g - R];
	const bb = [ox + 124, g - R + 4];
	const seat = [ox + 108, g - 104];
	const head = [ox + 172, g - 108];
	const crank = 0.17 * PX;
	const p1 = [bb[0] + crank * Math.cos(a), bb[1] + crank * Math.sin(a)];
	const p2 = [bb[0] - crank * Math.cos(a), bb[1] - crank * Math.sin(a)];
	const hip = [seat[0] + 2, seat[1] - 6];
	const shoulder = [ox + 150, g - 168];
	const hand = [head[0] + 6, head[1] - 4];
	const skin = '#c99a76', shirt = '#efe4cf', trousers = '#2e3a52', frame_ = '#7d2b26', dark = '#26211e';

	// far leg (behind the bike)
	const k2 = legIK(hip, p2, 50, 50, -1);
	limb(ctx, [hip, k2, p2], 13, '#232c40');
	// wheels with turning spokes
	for (const c of [rear, front]) {
		ctx.strokeStyle = dark; ctx.lineWidth = 5;
		ctx.beginPath(); ctx.arc(c[0], c[1], R, 0, Math.PI * 2); ctx.stroke();
		ctx.lineWidth = 1.2; ctx.strokeStyle = 'rgba(40,36,33,0.7)';
		for (let s = 0; s < 6; s++) {
			const t = a * 0.6 + s * Math.PI / 3;
			ctx.beginPath(); ctx.moveTo(c[0], c[1]); ctx.lineTo(c[0] + R * Math.cos(t), c[1] + R * Math.sin(t)); ctx.stroke();
		}
	}
	// frame
	limb(ctx, [rear, bb, seat, rear], 5, frame_);
	limb(ctx, [bb, [head[0] - 4, head[1] + 22], seat], 5, frame_);
	limb(ctx, [[head[0] - 4, head[1] + 22], front], 5, frame_);
	limb(ctx, [[head[0] - 4, head[1] + 22], head, [head[0] + 10, head[1] - 4]], 4, dark);
	limb(ctx, [[seat[0] - 10, seat[1] - 2], [seat[0] + 12, seat[1] - 2]], 6, dark);
	// basket on the front
	ctx.fillStyle = '#9b7a4c';
	ctx.fillRect(head[0] + 6, head[1] - 2, 26, 18);
	// cranks
	limb(ctx, [p1, p2], 4, dark);
	// body
	limb(ctx, [hip, shoulder], 26, shirt);
	limb(ctx, [shoulder, [shoulder[0] + 16, shoulder[1] + 26], hand], 10, shirt);
	blob(ctx, hand[0], hand[1], 5, 5, skin);
	blob(ctx, shoulder[0] + 10, shoulder[1] - 20, 12, 13, skin);
	blob(ctx, shoulder[0] + 6, shoulder[1] - 27, 13, 9, '#3b2a20');
	// near leg
	const k1 = legIK(hip, p1, 50, 50, -1);
	limb(ctx, [hip, k1, p1], 14, trousers);
	blob(ctx, p1[0] + 4, p1[1] + 2, 9, 4, dark);
}

function drawWalker(ctx, ox, oy, frame, look) {
	const p = frame / 8 * Math.PI * 2;
	const g = oy + 250;
	const bob = Math.abs(Math.cos(p)) * 2;
	const hip = [ox + 64, g - 0.92 * PX - bob];
	const shoulder = [ox + 66, hip[1] - 0.52 * PX];
	const legL = 0.47 * PX;
	const leg = (phase, colour, w) => {
		const sw = 0.42 * Math.sin(phase);
		const bend = Math.max(0, Math.sin(phase + 1.3)) * 0.55;
		const knee = [hip[0] + legL * Math.sin(sw), hip[1] + legL * Math.cos(sw)];
		const foot = [knee[0] + legL * Math.sin(sw - bend), Math.min(g - 4, knee[1] + legL * Math.cos(sw - bend))];
		limb(ctx, [hip, knee, foot], w, colour);
		blob(ctx, foot[0] + 5, foot[1] + 1, 8, 4, '#2a2420');
	};
	const arm = (phase, colour) => {
		const sw = -0.35 * Math.sin(phase);
		const elbow = [shoulder[0] + 30 * Math.sin(sw), shoulder[1] + 30 * Math.cos(sw)];
		const hand = [elbow[0] + 28 * Math.sin(sw + 0.25), elbow[1] + 28 * Math.cos(sw + 0.25)];
		limb(ctx, [shoulder, elbow, hand], 9, colour);
		blob(ctx, hand[0], hand[1], 5, 5, look.skin);
		return hand;
	};
	leg(p + Math.PI, look.legsFar, 12);
	arm(p, look.sleeveFar);
	if (look.dress) {
		ctx.fillStyle = look.dress;
		ctx.beginPath();
		ctx.moveTo(shoulder[0] - 14, shoulder[1]);
		ctx.lineTo(shoulder[0] + 14, shoulder[1]);
		ctx.lineTo(hip[0] + 28, hip[1] + 44);
		ctx.lineTo(hip[0] - 26, hip[1] + 44);
		ctx.closePath(); ctx.fill();
	} else {
		limb(ctx, [hip, shoulder], 30, look.coat);
		limb(ctx, [[hip[0], hip[1] - 2], [hip[0] + 2, hip[1] + 20]], 30, look.coat);
	}
	leg(p, look.legs, 13);
	const hand = arm(p + Math.PI, look.sleeve);
	if (look.bag) {
		ctx.fillStyle = look.bag;
		ctx.fillRect(hand[0] - 10, hand[1] - 2, 22, 26);
	}
	blob(ctx, shoulder[0] + 3, shoulder[1] - 22, 12, 13, look.skin);
	blob(ctx, shoulder[0] - 1, shoulder[1] - 30, 13, 9, look.hair);
	if (look.bun) blob(ctx, shoulder[0] - 12, shoulder[1] - 28, 7, 7, look.hair);
	if (look.cap) { limb(ctx, [[shoulder[0] - 10, shoulder[1] - 33], [shoulder[0] + 18, shoulder[1] - 33]], 6, look.cap); }
}

function drawPigeon(ctx, ox, oy, frame, pecking) {
	const cx = ox + 64, cy = oy + 78;
	const body = '#6f727a', dark = '#474a52', neck = '#55635e';
	if (pecking) {
		const down = frame === 1;
		blob(ctx, cx, cy + 14, 24, 13, body);
		blob(ctx, cx - 22, cy + 10, 12, 6, dark, -0.3);
		blob(ctx, cx + (down ? 22 : 18), cy + (down ? 26 : 2), 8, 8, neck);
		limb(ctx, [[cx + (down ? 28 : 25), cy + (down ? 30 : 2)], [cx + (down ? 33 : 31), cy + (down ? 33 : 4)]], 3, '#c9a24a');
		limb(ctx, [[cx - 4, cy + 26], [cx - 4, cy + 38]], 2.5, '#a8524a');
		limb(ctx, [[cx + 6, cy + 26], [cx + 6, cy + 38]], 2.5, '#a8524a');
		return;
	}
	const wing = [-0.9, -0.2, 0.6, -0.2][frame];
	blob(ctx, cx, cy, 22, 11, body);
	blob(ctx, cx + 22, cy - 6, 8, 8, neck);
	limb(ctx, [[cx + 28, cy - 6], [cx + 34, cy - 4]], 3, '#c9a24a');
	blob(ctx, cx - 26, cy + 2, 12, 5, dark);
	ctx.fillStyle = dark;
	ctx.beginPath();
	ctx.moveTo(cx - 8, cy - 2);
	ctx.lineTo(cx + 12, cy - 2);
	ctx.lineTo(cx - 6 + 10 * Math.sin(wing), cy - 2 + 40 * Math.sin(wing));
	ctx.closePath(); ctx.fill();
}

function paintAtlas() {
	const c = document.createElement('canvas');
	c.width = ATLAS_W; c.height = ATLAS_H;
	const ctx = c.getContext('2d');
	ctx.clearRect(0, 0, ATLAS_W, ATLAS_H);

	const lookA = {
		skin: '#d2a07c', hair: '#4a2e22', dress: '#b5543a', legs: '#c99a76', legsFar: '#a97f62',
		sleeve: '#b5543a', sleeveFar: '#93432f', bag: '#d8c9a3', bun: true
	};
	const lookB = {
		skin: '#b98563', hair: '#2b211b', coat: '#3d4250', legs: '#c8bca4', legsFar: '#a69a83',
		sleeve: '#3d4250', sleeveFar: '#2d313c', cap: '#5a4636'
	};

	for (let f = 0; f < 8; f++) {
		drawCyclist(ctx, CELLS.cyclist.x + f * CELLS.cyclist.w, CELLS.cyclist.y, f);
		drawWalker(ctx, CELLS.walkerA.x + f * CELLS.walkerA.w, CELLS.walkerA.y, f, lookA);
		drawWalker(ctx, CELLS.walkerB.x + f * CELLS.walkerB.w, CELLS.walkerB.y, f, lookB);
	}
	for (let f = 0; f < 4; f++) drawPigeon(ctx, CELLS.pigeonFly.x + f * 128, CELLS.pigeonFly.y, f, false);
	for (let f = 0; f < 2; f++) drawPigeon(ctx, CELLS.pigeonPeck.x + f * 128, CELLS.pigeonPeck.y, f, true);

	// a soft contact shadow
	const sh = CELLS.shadow;
	const grad = ctx.createRadialGradient(sh.x + 64, sh.y + 32, 2, sh.x + 64, sh.y + 32, 60);
	grad.addColorStop(0, 'rgba(0,0,0,0.55)');
	grad.addColorStop(1, 'rgba(0,0,0,0)');
	ctx.save();
	ctx.translate(sh.x + 64, sh.y + 32); ctx.scale(1, 0.5); ctx.translate(-(sh.x + 64), -(sh.y + 32));
	ctx.fillStyle = grad;
	ctx.fillRect(sh.x, sh.y - 32, 128, 128);
	ctx.restore();
	return c;
}


/* ===========================================================
 * WHO IS WHERE, AND WHEN
 * ===========================================================
 */

const STREET_X0 = -24, STREET_X1 = 38;

// returns 0..1 progress along a pass, or -1 while waiting off-stage
function pass(t, period, travel, offset) {
	const k = ((t + offset) % period + period) % period;
	return k < travel ? k / travel : -1;
}

function actors(t) {
	const out = [];

	// cyclist: crosses every 24 s, alternating direction
	{
		const span = STREET_X1 - STREET_X0;
		const speed = 4.2 * S;
		const travel = span / speed;
		const k = pass(t, 24, travel, 3);
		if (k >= 0) {
			const n = Math.floor((t + 3) / 24);
			const rightward = n % 2 === 0;
			const x = rightward ? STREET_X0 + k * span : STREET_X1 - k * span;
			const frame = Math.floor(t * 9) % 8;
			out.push({ cell: 'cyclist', frame, x, z: MOUTH_Z + 2.4, w: 2.4 * S, h: 2.4 * S, flip: !rightward, shadow: 1.6 });
		}
	}

	// a woman with a bag, walking slowly along the far side
	{
		const span = STREET_X1 - STREET_X0;
		const speed = 1.15 * S;
		const k = pass(t, span / speed + 9, span / speed, 0);
		if (k >= 0) {
			const x = STREET_X1 - k * span;
			const frame = Math.floor(t * 6.5) % 8;
			out.push({ cell: 'walkerA', frame, x, z: MOUTH_Z + 0.9, w: 1.2 * S, h: 2.4 * S, flip: true, shadow: 0.9 });
		}
	}

	// a man in a cap, strolling the other way, nearer the gallery
	{
		const span = STREET_X1 - STREET_X0;
		const speed = 1.3 * S;
		const k = pass(t, span / speed + 14, span / speed, 21);
		if (k >= 0) {
			const x = STREET_X0 + k * span;
			const frame = Math.floor(t * 7) % 8;
			out.push({ cell: 'walkerB', frame, x, z: -1.9, w: 1.2 * S, h: 2.4 * S, flip: false, shadow: 0.9 });
		}
	}

	// pigeons pecking in front of the door; they flutter up when the cyclist passes
	const cyc = out.find((a) => a.cell === 'cyclist');
	[[6.1, -3.6, 0.0], [7.4, -3.1, 1.3], [5.2, -2.7, 2.1]].forEach(([px, pz, ph], i) => {
		const near = cyc && Math.abs(cyc.x - px) < 4.5;
		if (near) {
			const lift = Math.max(0, 1 - Math.abs(cyc.x - px) / 4.5);
			out.push({
				cell: 'pigeonFly', frame: Math.floor(t * 14 + i) % 4,
				x: px + lift * 0.8 * (i - 1), y: lift * 1.3, z: pz, w: 0.55 * S, h: 0.55 * S,
				flip: i % 2 === 1, shadow: 0.25
			});
		} else {
			const peck = Math.floor(t * 2.2 + ph * 3) % 3 === 0 ? 1 : 0;
			out.push({
				cell: 'pigeonPeck', frame: peck, x: px, y: 0, z: pz, w: 0.55 * S, h: 0.55 * S,
				flip: i % 2 === 1, shadow: 0.25
			});
		}
	});

	// a small flock crossing high over the street every 30 s
	{
		const k = pass(t, 30, 7, 11);
		if (k >= 0) {
			const n = Math.floor((t + 11) / 30);
			const rightward = n % 2 === 0;
			for (let i = 0; i < 4; i++) {
				const kk = Math.min(1, Math.max(0, k * 1.1 - i * 0.03));
				const x0 = rightward ? -14 : 30, x1 = rightward ? 30 : -14;
				out.push({
					cell: 'pigeonFly', frame: Math.floor(t * 13 + i * 1.7) % 4,
					x: x0 + (x1 - x0) * kk + i * 0.7,
					y: 2.5 + 1.3 * Math.sin(Math.PI * kk) + i * 0.3,
					z: -2.2 - i * 0.6, w: 0.55 * S, h: 0.55 * S, flip: !rightward
				});
			}
		}
	}

	return out;
}


/* ===========================================================
 * DRAWING
 * ===========================================================
 */

module.exports = (regl) => {

	let atlas = regl.texture({ data: [[[0, 0, 0, 0]]] });

	try {
		atlas = regl.texture({
			data: paintAtlas(),
			min: 'mipmap',
			mipmap: 'nice',
			mag: 'linear',
			wrapS: 'clamp',
			wrapT: 'clamp',
			flipY: false
		});
	} catch (e) {
		console.error(e);
	}

	const MAX_QUADS = 32;
	const posBuf = regl.buffer({ usage: 'dynamic', type: 'float', length: MAX_QUADS * 6 * 3 * 4 });
	const uvBuf = regl.buffer({ usage: 'dynamic', type: 'float', length: MAX_QUADS * 6 * 2 * 4 });

	const draw = regl({
		frag: `
		precision mediump float;
		uniform sampler2D atlas;
		varying vec2 v_uv;
		varying float v_shadow;
		void main() {
			vec4 c = texture2D(atlas, v_uv);
			if (v_shadow > 0.5) {
				if (c.a < 0.02) discard;
				gl_FragColor = vec4(0.0, 0.0, 0.0, c.a * 0.55);
				return;
			}
			if (c.a < 0.45) discard;
			// in the soft shade of the street, with the same golden grade
			vec3 col = pow(c.rgb, vec3(0.94)) * vec3(1.05, 1.0, 0.90) * vec3(0.84, 0.84, 0.90);
			gl_FragColor = vec4(col, 1.0);
		}`,
		vert: `
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position;
		attribute vec2 uv;
		varying vec2 v_uv;
		varying float v_shadow;
		void main() {
			v_uv = uv;
			// shadow quads are flagged by a uv below zero
			v_shadow = uv.x < -0.5 ? 1.0 : 0.0;
			if (v_shadow > 0.5) v_uv = vec2(uv.x + 2.0, uv.y);
			vec3 p = position;
			p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`,
		attributes: {
			position: posBuf,
			uv: uvBuf
		},
		uniforms: { atlas },
		count: regl.prop('count'),
		cull: { enable: false },
		blend: {
			enable: true,
			func: { srcRGB: 'src alpha', dstRGB: 'one minus src alpha', srcAlpha: 'zero', dstAlpha: 'one' }
		}
	});

	const pos = new Float32Array(MAX_QUADS * 6 * 3);
	const uvs = new Float32Array(MAX_QUADS * 6 * 2);
	const start = Date.now();

	return function () {

		// (window.__streetClock lets a test pick a moment; normally unused)
		const t = window.__streetClock !== undefined ? window.__streetClock : (Date.now() - start) / 1000;
		const list = actors(t);
		let q = 0;

		const push = (corners, rect, isShadow) => {
			if (q >= MAX_QUADS) return;
			const [u0, v0, u1, v1] = rect;
			const off = isShadow ? -2.0 : 0.0;
			const tuv = [[u0, v1], [u1, v1], [u1, v0], [u0, v1], [u1, v0], [u0, v0]];
			const idx = [0, 1, 2, 0, 2, 3];
			for (let k = 0; k < 6; k++) {
				const c = corners[idx[k]];
				pos.set(c, (q * 6 + k) * 3);
				uvs.set([tuv[k][0] + off, tuv[k][1]], (q * 6 + k) * 2);
			}
			q++;
		};

		for (const a of list) {
			const cell = CELLS[a.cell];
			const u0 = (cell.x + a.frame * cell.w) / ATLAS_W, u1 = u0 + cell.w / ATLAS_W;
			const v0 = cell.y / ATLAS_H, v1 = (cell.y + cell.h) / ATLAS_H;
			const y = a.y || 0;
			const hw = a.w / 2;

			if (a.shadow && y < 0.5) {
				const sh = CELLS.shadow;
				const r = [sh.x / ATLAS_W, sh.y / ATLAS_H, (sh.x + sh.w) / ATLAS_W, (sh.y + sh.h) / ATLAS_H];
				const sw = a.shadow * S, sd = 0.35 * S;
				push([[a.x - sw, 0.015, a.z + sd], [a.x + sw, 0.015, a.z + sd], [a.x + sw, 0.015, a.z - sd], [a.x - sw, 0.015, a.z - sd]], r, true);
			}

			const rect = a.flip ? [u1, v0, u0, v1] : [u0, v0, u1, v1];
			push([[a.x - hw, y, a.z], [a.x + hw, y, a.z], [a.x + hw, y + a.h, a.z], [a.x - hw, y + a.h, a.z]], rect, false);
		}

		if (q === 0) return;

		posBuf.subdata(pos.subarray(0, q * 18));
		uvBuf.subdata(uvs.subarray(0, q * 12));
		draw({ count: q * 6 });
	};
};

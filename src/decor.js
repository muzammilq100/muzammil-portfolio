'use strict';

/*
 * GALLERY DECOR
 * -------------
 * Statue pedestals, leafy plants in glossy black pots and the
 * round fluted columns of the entrance arch. The statues
 * themselves are real 3D scans, loaded by statues.js.
 *
 * Everything is generated in code (no model files), using the
 * builder in geom.js. Material ids (see mesh.js):
 *
 *   1  statue / pedestal, wall coloured
 *   2  leaf blade
 *   3  glossy black pot
 *   4  plant stem
 *   5  soil
 *   7  marble with its own texture coordinates (fluted shafts)
 */

const {
	norm,
	add,
	mul,
	sub,
	cross
} = require('./geom');


const TAU = Math.PI * 2;

const smooth = (a, b, x) => {
	const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
	return t * t * (3 - 2 * t);
};


/* Small seeded random number generator */
function rng(seed) {
	let a = seed >>> 0;
	return () => {
		a |= 0;
		a = (a + 0x6D2B79F5) | 0;
		let t = Math.imul(a ^ (a >>> 15), 1 | a);
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}


/* ===========================================================
 * ROUND FLUTED COLUMN  (entrance arch)
 * ===========================================================
 * Returns the height of the top of the abacus.
 */

function addFlutedColumn(B, x, z, y0, y1, r) {

	const MARBLE = (a, y) => [7, a * r, y];

	/* square plinth */

	B.curMat = [0, 0, 0];

	B.box(
		x - r * 1.36, y0, z - r * 1.36,
		x + r * 1.36, y0 + 0.22, z + r * 1.36
	);

	/* round base: torus and fillets */

	B.lathe(
		[
			[r * 1.24, y0 + 0.22, 1],
			[r * 1.30, y0 + 0.27],
			[r * 1.31, y0 + 0.32],
			[r * 1.26, y0 + 0.37, 1],
			[r * 1.10, y0 + 0.40],
			[r * 1.14, y0 + 0.44, 1],
			[r * 1.18, y0 + 0.47],
			[r * 1.10, y0 + 0.52, 1],
			[r * 0.96, y0 + 0.55]
		],
		x, z, 56,
		{ mat: MARBLE }
	);

	/* fluted shaft with a gentle taper: 20 carved vertical grooves */

	const shaftY0 = y0 + 0.55;
	const h = y1 - shaftY0;

	const FLUTES = 20;
	const SAMPLES = 6;
	const depth = r * 0.075;

	B.surface(
		(u, v) => {
			const y = shaftY0 + u * h;
			const rr = r * (0.96 - 0.12 * u);
			const th = v * TAU;
			const s = (v * FLUTES) % 1;
			const R = rr - depth * 4 * s * (1 - s);
			return [x + R * Math.cos(th), y, z + R * Math.sin(th)];
		},
		10,
		FLUTES * SAMPLES,
		{
			wrapV: true,
			inside: (u) => [x, shaftY0 + u * h, z],
			mat: (u, v) => [7, v * TAU * r, shaftY0 + u * h]
		}
	);

	/* neck rings and echinus */

	B.lathe(
		[
			[r * 0.80, y1 - 0.02, 1],
			[r * 0.90, y1 + 0.02],
			[r * 0.90, y1 + 0.07, 1],
			[r * 0.82, y1 + 0.09, 1],
			[r * 0.86, y1 + 0.13],
			[r * 1.06, y1 + 0.20],
			[r * 1.22, y1 + 0.28],
			[r * 1.28, y1 + 0.33, 1]
		],
		x, z, 56,
		{ mat: MARBLE }
	);

	/* abacus */

	B.curMat = [0, 0, 0];

	B.box(
		x - r * 1.42, y1 + 0.33, z - r * 1.42,
		x + r * 1.42, y1 + 0.53, z + r * 1.42
	);

	return y1 + 0.53;
}


/* ===========================================================
 * STATUE PEDESTAL
 * ===========================================================
 */

function addPedestal(B, R, H) {

	B.curMat = [1, 0, 0];

	/* round, low and wide: a plinth, a plain drum and a moulded top */
	B.lathe(
		[
			[R * 1.10, 0.00, 1],
			[R * 1.10, H * 0.14, 1],
			[R * 1.04, H * 0.14, 1],
			[R * 1.04, H * 0.20],
			[R * 0.97, H * 0.26, 1],
			[R * 0.95, H * 0.26, 1],
			[R * 0.95, H * 0.80, 1],
			[R * 0.98, H * 0.80, 1],
			[R * 1.03, H * 0.86],
			[R * 1.05, H * 0.92, 1],
			[R * 1.05, H, 1],
			[R * 0.50, H, 1],
			[0.0, H]
		],
		0, 0, 72
	);
}


/* A pedestal for one of the scanned statues (see statues.js) */

function addStatue(B, x, z, radius, height) {

	B.save();
	B.translate(x, 0, z);

	addPedestal(B, radius, height);

	B.restore();
}


/* ===========================================================
 * LEAFY PLANT IN A GLOSSY BLACK POT  (bird of paradise type)
 * ===========================================================
 */

function addPlant(B, x, z, seed, scale, away) {

	const rand = rng(seed);

	/* direction of open floor; leaves pointing into the wall or the
	   pillar stand more upright so they don't pass through them */
	const aw = away ? norm([away[0], 0, away[1]]) : null;

	B.save();
	B.translate(x, 0, z);
	B.scale(scale || 1);

	/* ---- pot ---- */

	B.curMat = [3, 0, 0];

	B.lathe(
		[
			[0.17, 0.000, 1],
			[0.20, 0.020],
			[0.28, 0.130],
			[0.36, 0.300],
			[0.395, 0.470],
			[0.380, 0.620],
			[0.320, 0.740],
			[0.290, 0.800],
			[0.292, 0.820, 1],
			[0.325, 0.840],
			[0.335, 0.880, 1],
			[0.300, 0.905, 1],
			[0.275, 0.895, 1],
			[0.272, 0.850]
		],
		0, 0, 48
	);

	/* soil */

	B.curMat = [5, 0, 0];

	B.lathe(
		[
			[0.272, 0.850, 1],
			[0.100, 0.868],
			[0.0, 0.872]
		],
		0, 0, 24
	);

	/* ---- leaves ---- */

	const leafCount = 11;
	const baseY = 0.86;

	for (let i = 0; i < leafCount; i++) {

		const young = i >= leafCount - 2;

		const phi = i * 2.399963 + rand() * 0.5;
		const O = [Math.cos(phi), 0, Math.sin(phi)];
		const S = [-Math.sin(phi), 0, Math.cos(phi)];

		const k = (i * 0.618) % 1;

		/* outer leaves lean further out */
		let lean = young ? 0.06 + rand() * 0.06 : 0.12 + 0.62 * k;

		let room = 1;

		if (aw) {
			const facing = O[0] * aw[0] + O[2] * aw[2];
			room = 0.25 + 0.75 * smooth(-0.7, 0.5, facing);
			lean *= room;
		}

		const petLen = young
			? 1.10 + rand() * 0.25
			: 0.85 + 0.55 * (1 - k * 0.55) + rand() * 0.15;

		const bladeLen = young
			? 1.0 + rand() * 0.2
			: 0.95 + rand() * 0.28;

		const halfW = young ? 0.055 : 0.215 + rand() * 0.05;

		const startR = 0.04 + rand() * 0.05;

		const base = [O[0] * startR, baseY, O[2] * startR];

		/* long stem rising and curving a little outwards */

		const petEnd = [
			base[0] + O[0] * Math.sin(lean) * petLen * 0.92,
			base[1] + Math.cos(lean) * petLen,
			base[2] + O[2] * Math.sin(lean) * petLen * 0.92
		];

		const petMid = [
			base[0] + O[0] * Math.sin(lean * 0.5) * petLen * 0.45,
			base[1] + petLen * 0.5,
			base[2] + O[2] * Math.sin(lean * 0.5) * petLen * 0.45
		];

		B.curMat = [4, 0, 0];

		B.tube(
			[base, petMid, petEnd],
			(t) => 0.020 - 0.008 * t,
			8, 7
		);

		/* blade centre line, arching over as it grows */

		const steps = 24;
		const beta0 = lean * 0.9 + 0.05;
		const beta1 = lean + (young ? 0.12 : (0.95 + 0.45 * k) * (0.35 + 0.65 * room));

		const cl = [petEnd];
		const tg = [];

		let cur = petEnd;

		for (let s = 0; s < steps; s++) {
			const t = s / steps;
			const beta = beta0 + (beta1 - beta0) * t * t;
			const d = [
				O[0] * Math.sin(beta),
				Math.cos(beta),
				O[2] * Math.sin(beta)
			];
			tg.push(d);
			cur = add(cur, mul(d, bladeLen / steps));
			cl.push(cur);
		}

		tg.push(tg[tg.length - 1]);

		const centreAt = (u) => {
			const f = u * steps;
			const i0 = Math.min(steps - 1, Math.floor(f));
			const s = f - i0;
			return add(mul(cl[i0], 1 - s), mul(cl[i0 + 1], s));
		};

		const tangentAt = (u) => {
			const f = u * steps;
			const i0 = Math.min(steps, Math.floor(f));
			const i1 = Math.min(steps, i0 + 1);
			const s = f - i0;
			return norm(add(mul(tg[i0], 1 - s), mul(tg[i1], s)));
		};

		const twist = (rand() - 0.5) * 0.5;

		B.curMat = [2, 0, 0];

		B.surface(
			(u, v) => {

				const s = v * 2 - 1;
				const C = centreAt(u);
				const T = tangentAt(u);

				/* leaf plane, slightly rolled around the midrib */
				const roll = twist * u;
				let side = add(mul(S, Math.cos(roll)), mul(cross(T, S), Math.sin(roll)));
				side = norm(sub(side, mul(T, side[0] * T[0] + side[1] * T[1] + side[2] * T[2])));
				const nrm = norm(cross(side, T));

				/* blade outline: rounded base, pointed tip */
				const w = halfW * Math.pow(Math.sin(Math.PI * Math.pow(u, 0.72)), 0.85);

				/* V fold along the midrib and a soft ripple at the edge */
				const lift = 0.30 * w * Math.abs(s) +
					0.012 * Math.sin(u * 40 + s * 2) * Math.abs(s) * (young ? 0 : 1);

				const droopEdge = -0.10 * w * s * s * s * s;
				const off = lift + droopEdge;

				return [
					C[0] + side[0] * s * w + nrm[0] * off,
					C[1] + side[1] * s * w + nrm[1] * off,
					C[2] + side[2] * s * w + nrm[2] * off
				];
			},
			14,
			8,
			{
				double: true,
				mat: (u, v) => [2, v * 2 - 1, u]
			}
		);
	}

	B.restore();
}


module.exports = {
	addFlutedColumn,
	addStatue,
	addPlant
};

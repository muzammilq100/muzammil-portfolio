'use strict';

/*
 * THE RED ROOM
 * ------------
 * A big, dark room, all red: red plaster walls, a red pointed vault, and a
 * floor of glossy red lacquer that looks wet (after his reference: a
 * domed hall with a shining red floor). Down both long walls stand tall
 * Gothic windows after his other reference: a pointed arch split by a
 * mullion into two pointed lancets, a ring in the head, and every pane
 * leaded in a lattice of long diamonds, the glass glowing deep red.
 *
 * Red light comes in through them from high outside, so each window lays
 * its own shape (its bars, its ring, every lead of its lattice) on the
 * floor, long and slanting; the air catches the same light in beams
 * (post.js uses sunGLSL below, as it does the studio's), and the floor
 * mirrors the windows and the beams back, smeared a little as wet paint
 * does. The rest of the room stays in shadow.
 *
 * It is built like the studio: in its own coordinates (x across 0..W, the
 * left wall at x = 0; z from the near end 0 to the far end L; y up) and
 * placed in the gallery at O. For now it is seen only on its own
 * (?redroom), standing where the studio stands and the same size; it
 * offers the same face to the gallery as studio.js (draw, draw.reflect,
 * sunGLSL, bakedSun, ready) so conservatory.js can show it.
 */

const { O, W, L } = require('./studiobox');
const f = (x) => (+x).toFixed(4);

// ------------------------------------------------------------------
// LAYOUT (room metres)
// ------------------------------------------------------------------
const H = 10.5;          // walls up to the vault's springing
const T = 0.7;           // wall thickness (the windows' reveals)
const VAULT = 3.0;       // the pointed vault's rise above the walls

// the windows, four down each long wall, after the reference
const WIN = { hw: 1.25, sill: 1.35, spring: 6.9, n: 4, step: 6.35 };
WIN.z0 = L / 2 - WIN.step * (WIN.n - 1) / 2;
WIN.apex = WIN.spring + WIN.hw * Math.sqrt(3);
const winZ = (i) => WIN.z0 + WIN.step * i;
// the first two windows on the left are walled up: the darkroom stands there
WIN.leftFrom = 2;
// the engaged shafts between them, carrying the vault's ribs
const SHAFTS = [];
for (let i = 0; i <= WIN.n; i++) SHAFTS.push(WIN.z0 + WIN.step * (i - 0.5));

// a tall pointed doorway in the near end wall: the way in (the far wall
// is whole: the televisions stand before it)
const DOOR = { hw: 0.75, h: 2.6, depth: 0.7 };
// THE WAY IN (after his reference): a long dark corridor of bare concrete
// ending at a plain door standing open towards you, the red of the room
// pouring out of it across the wet floor, ENTER in red neon over it,
// flickering. ENT.z is where the corridor ends, far from the door.
const ENT = { hw: 1.8, h: 3.6, z: -11.0, sign: [W / 2, DOOR.h + 0.32, -DOOR.depth - 0.05], open: 2.2 };

// the televisions: three real sets from Sketchfab, stacked any old way
// before the far wall, every screen turned to the door (credits in the
// readme). Sizes are each set's own, in metres, before the stack's G.
const TV = {
	z: 21.2,
	G: 2.4,
	models: {
		sony: { file: 'res/redroom/tv_sony.bin', tex: 3, w: 0.36, h: 0.341, d: 0.455, dark: 0.55 },
		crt: { file: 'res/redroom/tv_crt.bin', tex: 3, w: 0.47, h: 0.454, d: 0.389, dark: 0.9 },
		old: { file: 'res/redroom/tv_old.bin', tex: 1, w: 0.62, h: 0.418, d: 0.416, dark: 0.75 }
	}
};
// [set, row, across from the middle, turn (degrees), forward]
TV.stack = [
	['old', 0, -1.41, 2, 0.04], ['crt', 0, 0.05, -1, -0.02], ['sony', 0, 1.24, -2, 0.06],
	['crt', 1, -1.16, 3, 0.02], ['sony', 1, -0.03, -1, 0.04], ['crt', 1, 1.14, -3, 0.06],
	['sony', 2, -0.73, 2, 0.06], ['old', 2, 0.66, -2, 0.03],
	// and two either side, close in
	['crt', 0, -2.78, 3, 0.08], ['sony', 1, -2.68, 4, 0.1],
	['old', 0, 2.50, -3, 0.08], ['sony', 1, 2.32, -4, 0.1]
];
// where each screen's middle is, in the room (for the camera)
const SCREEN_MID = { sony: [0, 0.194], crt: [0, 0.27], old: [0.0625, 0.2145] };
// each set down on whatever is under it
(() => {
	const placed = [];
	for (const t of TV.stack) {
		const m = TV.models[t[0]], row = t[1], dx = t[2], w = m.w * TV.G;
		let base = 0;
		for (const q of placed) {
			if (q.row >= row) continue;
			if (Math.abs(q.dx - dx) < (q.w + w) / 2 * 0.92) base = Math.max(base, q.top);
		}
		placed.push({ dx, row, w, top: base + m.h * TV.G * 0.99 });
		t.base = base;
		const sm = SCREEN_MID[t[0]], a = t[3] * Math.PI / 180;
		t.screen = [W / 2 + dx + sm[0] * TV.G, base + sm[1] * TV.G, TV.z + t[4]];
		t.facing = [-Math.sin(a), 0, -Math.cos(a)];
		t.size = m.w * TV.G;
	}
})();

// THE DARKROOM: where the walled-up windows were, along the left wall by
// the door, a darkroom after his references. Two tiled benches either side
// of the second shaft. On the first, a long shallow sink with the three
// trays, developer, stop and fix, black liquid in them, a print lying in
// the developer (his childhood photograph, res/redroom/print.webp) and
// coming up as the camera comes to it, tongs resting across the trays,
// a tap at the end; over them a bare red bulb hangs from a bracket. On
// the second, the chemistry: gallon jugs and canisters (Poly Haven, CC0).
// Over both, prints hang to dry on lines strung between the shafts, on
// pegs, curling, stirring; a red tube on the wall above lights them.
const DARK = (() => {
	const D = { top: 0.92, depth: 0.78 };
	D.a = [SHAFTS[0] + 0.7, SHAFTS[1] - 0.55];     // the sink bench, along z
	D.b = [SHAFTS[1] + 0.55, SHAFTS[2] - 0.7];     // the chemistry bench
	D.basin = { x0: 0.08, x1: D.depth - 0.07, z0: D.a[0] + 0.1, z1: D.a[1] - 0.1, floor: D.top - 0.1 };
	// the trays: [middle z, what is in it (0 developer with the print, 1
	// stop, 2 fix)]; each is TX across and TZ along
	D.TX = 0.44; D.TZ = 0.54; D.TH = 0.075; D.TXc = (D.basin.x0 + D.basin.x1) / 2;
	D.trays = [D.a[0] + 1.1, D.a[0] + 1.72, D.a[0] + 2.34];
	D.liquid = D.basin.floor + 0.05;
	// the bulb over the developer, and the tube over the lines
	D.bulb = [D.TXc + 0.02, 1.39, D.trays[0] + 0.05];
	D.tube = { x: 0.07, y: 3.05, z0: D.b[0] + 0.2, z1: D.b[1] - 0.2 };
	// the drying lines: [x out from the wall, height, from z, to z, sag]
	D.lines = [
		[0.32, 2.74, SHAFTS[0], SHAFTS[1], 0.12], [0.74, 2.52, SHAFTS[0], SHAFTS[1], 0.17], [1.1, 2.62, SHAFTS[0], SHAFTS[1], 0.2],
		[0.3, 2.76, SHAFTS[1], SHAFTS[2], 0.15], [0.68, 2.46, SHAFTS[1], SHAFTS[2], 0.19], [1.06, 2.66, SHAFTS[1], SHAFTS[2], 0.22],
		[0.5, 1.98, SHAFTS[1], SHAFTS[2], 0.12]
	];
	return D;
})();

// THE PROJECTOR: a vintage two-reel film projector (Sketchfab, CC BY: see
// the readme) on a tall
// side table (Poly Haven, CC0) in the middle of the room, throwing his
// memories over the televisions onto the bare far wall, its reels turning.
// Its parts were taken apart from the model (res/redroom/proj_*.bin): the
// body, and the two reels, which turn about their own hubs.
const PROJ = (() => {
	const P = { x: W / 2 - 0.006, z: 15.0 - 0.08, tableK: 1.25, pitch: 0.1 };
	P.table = 0.761 * P.tableK;
	// the reels' hubs, in the projector's own metres (x across, y up, z forward)
	P.feed = [0.0254, 0.7696, 0.3364];
	P.takeup = [0.0252, 0.2484, 0.337];
	// the lens, between the reels, in the projector's own metres
	P.lensL = [0.006, 0.456, 0.15];
	// where the lens is in the room (the projector tilted up by its pitch)
	const c = Math.cos(P.pitch), s = Math.sin(P.pitch);
	const l = P.lensL;
	P.lens = [P.x + l[0], P.table + l[1] * c + l[2] * s, P.z - l[1] * s + l[2] * c];
	// the picture on the far wall: its middle and size
	P.img = { x: W / 2, y: 6.0, w: 6.4 };
	P.img.h = P.img.w * 0.75;
	return P;
})();

// a darkroom safelight: a long red tube high on the far wall, over the
// photographs (after his darkroom references)
const SAFE = { x0: 4.2, x1: 11.8, y: 9.0, z: L - 0.16 };

// THE CABLE: one thick black cable through the room, the line the camera
// follows. It is plugged into a socket low on the left wall at the end of
// the darkroom, drops to the floor and crosses it in a long lazy S to the
// right wall under the polaroids, runs along it and round in a loose loop
// to the televisions, where it goes in at the back of the middle set.
// (Room metres; CABLE.r is its radius; CABLE.path is the line through its
// middle; CABLE.socket where it is plugged in; CABLE.run the stretch of
// path across the floor, for the camera.)
const CABLE = { r: 0.045 };
(() => {
	// (the socket is low in the front of the darkroom's second bench)
	const r = CABLE.r, d = DARK.depth, zs = DARK.b[1] - 0.22;
	CABLE.socket = [d, 0.3, zs];
	CABLE.ctrl = [
		[d + 0.1, 0.3, zs], [d + 0.2, 0.295, zs], [d + 0.3, 0.22, zs + 0.02], [d + 0.42, r, zs + 0.1], [d + 0.8, r, zs + 0.3],
		[1.8, r, zs + 0.45], [3.4, r, zs + 0.1], [5.2, r, zs - 0.55], [7.2, r, zs - 0.95], [9.4, r, zs - 0.9],
		[11.4, r, zs - 0.45], [13.2, r, zs + 0.1], [W - 1.15, r, zs + 0.55], [W - 0.85, r, zs + 1.05],
		[W - 0.85, r, 15.2], [W - 1.1, r, 16.3], [W - 1.7, r, 17.2], [W - 2.5, r, 17.9], [12.9, r, 18.5], [11.5, r, 18.9],
		[10.6, r, 19.5], [10.5, r, 20.3], [11.2, r, 20.5], [10.9, r, 19.95], [10.0, r * 2.2, 20.1], [9.3, r, 20.75], [9.5, r, 21.9], [8.6, r, 22.25], [8.1, 0.22, 21.95]
	];
	// a smooth line through them (Catmull-Rom), a point every few centimetres
	const P = CABLE.ctrl, out = [];
	for (let i = 0; i < P.length - 1; i++) {
		const p0 = P[Math.max(0, i - 1)], p1 = P[i], p2 = P[i + 1], p3 = P[Math.min(P.length - 1, i + 2)];
		const n = Math.max(2, Math.ceil(Math.hypot(p2[0] - p1[0], p2[1] - p1[1], p2[2] - p1[2]) / 0.06));
		for (let j = 0; j < n; j++) {
			const u = j / n, u2 = u * u, u3 = u2 * u;
			out.push([0, 1, 2].map((k) => 0.5 * ((2 * p1[k]) + (-p0[k] + p2[k]) * u + (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * u2 + (-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * u3)));
		}
	}
	out.push(P[P.length - 1].slice());
	// (lying on the floor it never sinks into it)
	for (const q of out) if (q[1] < r && q[2] > -1.4) q[1] = r;
	CABLE.path = out;
	let a = out.findIndex((q) => q[1] <= r * 1.01);
	let b = out.findIndex((q, i) => i > a && q[0] > W - 1.3);
	CABLE.run = [a, b];
})();

// THE POLAROIDS: his photographs, blurred and darkened as if left in the
// developer too long, pinned in drifts on the wall panels between the
// windows. (The far wall is kept bare for the projector.)
const POL = { spots: [], w: 0.36, h: 0.435, n: 36, lines: [{ z: L - 1.7, y: 6.5, sag: 1.0 }, { z: L - 2.6, y: 5.3, sag: 0.8 }] };

// the light: from high outside each long wall, a little from the far end,
// so every window's shape lies long on the floor towards the middle
const LDIR = (() => { const v = [-0.62, 0.75, -0.16]; const l = Math.hypot(...v); return v.map((x) => x / l); })();

// the vault: two arcs meeting at a point over the middle
const VC = (() => { const s = W / 2; return (s * s + VAULT * VAULT) / (2 * s); })();
const vaultY = (x) => { const u = x <= W / 2 ? x : W - x; return H + Math.sqrt(Math.max(0, VC * VC - (u - VC) * (u - VC))); };

// ------------------------------------------------------------------
// GEOMETRY
// ------------------------------------------------------------------
const K = { FLOOR: 0, WALL: 1, REVEAL: 2, GLASS: 3, VAULT: 4, TRIM: 5, VOID: 6, TUBE: 7, CABLE: 8, TILE: 9, STEEL: 10, PEG: 11, CONC: 12, CFLOOR: 13, DOOR: 14 };

function Geo() {
	const pos = [], nrm = [], kind = [], uv = [], idx = [];
	const g = {
		pos, nrm, kind, uv, idx,
		v(p, n, k, t) {
			pos.push(p[0] + O[0], p[1] + O[1], p[2] + O[2]);
			nrm.push(n[0], n[1], n[2]); kind.push(k); uv.push(t ? t[0] : 0, t ? t[1] : 0);
			return pos.length / 3 - 1;
		},
		quad(a, b, c, d, n, k, ta, tb, tc, td) {
			const i = g.v(a, n, k, ta), j = g.v(b, n, k, tb), m = g.v(c, n, k, tc), o = g.v(d, n, k, td);
			idx.push(i, j, m, i, m, o);
		},
		// an axis-aligned box (all six faces, outward)
		box(x0, y0, z0, x1, y1, z1, k) {
			g.quad([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], [0, 0, 1], k);
			g.quad([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [0, 0, -1], k);
			g.quad([x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [1, 0, 0], k);
			g.quad([x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], [-1, 0, 0], k);
			g.quad([x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0], [0, 1, 0], k);
			g.quad([x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], [0, -1, 0], k);
		},
		// an upright cylinder
		cyl(cx, cz, r, y0, y1, k, seg) {
			seg = seg || 18;
			for (let i = 0; i < seg; i++) {
				const a0 = i / seg * Math.PI * 2, a1 = (i + 1) / seg * Math.PI * 2;
				const n0 = [Math.sin(a0), 0, Math.cos(a0)], n1 = [Math.sin(a1), 0, Math.cos(a1)];
				const p = (n, y) => [cx + n[0] * r, y, cz + n[2] * r];
				const a = g.v(p(n0, y0), n0, k), b = g.v(p(n1, y0), n1, k), c = g.v(p(n1, y1), n1, k), d = g.v(p(n0, y1), n0, k);
				idx.push(a, b, c, a, c, d);
			}
		}
	};
	return g;
}

// a round tube along a line of points (parallel-transported rings)
function tube(g, pts, r, sides, k) {
	let prev = null, nrm = null;
	const ring = [];
	for (let i = 0; i < pts.length; i++) {
		const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
		let t = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
		const tl = Math.hypot(...t) || 1; t = t.map((x) => x / tl);
		if (!nrm) { nrm = Math.abs(t[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0]; }
		// keep the ring's frame turning with the line
		const d = nrm[0] * t[0] + nrm[1] * t[1] + nrm[2] * t[2];
		nrm = [nrm[0] - t[0] * d, nrm[1] - t[1] * d, nrm[2] - t[2] * d];
		const nl = Math.hypot(...nrm) || 1; nrm = nrm.map((x) => x / nl);
		const bi = [t[1] * nrm[2] - t[2] * nrm[1], t[2] * nrm[0] - t[0] * nrm[2], t[0] * nrm[1] - t[1] * nrm[0]];
		const cur = [];
		for (let s = 0; s < sides; s++) {
			const an = s / sides * Math.PI * 2, c = Math.cos(an), sn = Math.sin(an);
			const n = [nrm[0] * c + bi[0] * sn, nrm[1] * c + bi[1] * sn, nrm[2] * c + bi[2] * sn];
			cur.push(g.v([pts[i][0] + n[0] * r, pts[i][1] + n[1] * r, pts[i][2] + n[2] * r], n, k, [i, s]));
		}
		if (prev) for (let s = 0; s < sides; s++) {
			const s2 = (s + 1) % sides;
			g.idx.push(prev[s], prev[s2], cur[s2], prev[s], cur[s2], cur[s]);
		}
		prev = cur;
		ring.push(cur);
	}
}
// a point along one of the darkroom's drying lines (u 0..1)
const darkLineAt = (ln, u) => [ln[0], ln[1] - ln[4] * 4 * u * (1 - u), ln[2] + 0.35 + (ln[3] - ln[2] - 0.7) * u];
// the line of a sagging clothesline, x from wall to wall
const lineAt = (L0, x) => { const t = (x - 0.62) / (W - 1.24); return [x, L0.y - L0.sag * 4 * t * (1 - t), L0.z]; };

// the outline of a pointed opening, round from the left foot to the right
// foot ([u, v]: u across from its middle, v up)
function outline(hw, sill, spring) {
	const pts = [[-hw, sill], [-hw, spring]];
	const r = 2 * hw, N = 14;
	for (let i = 1; i <= N; i++) { const a = Math.PI - i / N * (Math.PI / 3); pts.push([hw + r * Math.cos(a), spring + r * Math.sin(a)]); }
	for (let i = 1; i <= N; i++) { const a = Math.PI / 3 - i / N * (Math.PI / 3); pts.push([-hw + r * Math.cos(a), spring + r * Math.sin(a)]); }
	pts.push([hw, sill]);
	return pts;
}

// the sides of an opening through a wall, from the room's face (depth 0)
// back to depth d; place(u, v, depth) gives the room point
function reveal(g, pts, d, place, closeBottom, k, centre) {
	const n = closeBottom ? pts.length : pts.length - 1;
	for (let i = 0; i < n; i++) {
		const a = pts[i], b = pts[(i + 1) % pts.length];
		const du = b[0] - a[0], dv = b[1] - a[1];
		let nu = -dv, nv = du;
		const l = Math.hypot(nu, nv) || 1; nu /= l; nv /= l;
		const mu = (a[0] + b[0]) / 2 - centre[0], mv = (a[1] + b[1]) / 2 - centre[1];
		if (nu * mu + nv * mv > 0) { nu = -nu; nv = -nv; }
		const N = place(nu, nv, 0, true);
		g.quad(place(a[0], a[1], 0), place(b[0], b[1], 0), place(b[0], b[1], d), place(a[0], a[1], d), N, k, [a[0], a[1]], [b[0], b[1]], [b[0], b[1]], [a[0], a[1]]);
	}
}

function build() {
	const g = Geo();
	// the floor (and under the doorways)
	g.quad([0, 0, 0], [0, 0, L], [W, 0, L], [W, 0, 0], [0, 1, 0], K.FLOOR);

	// the long walls (the windows are cut out of them in the shader)
	g.quad([0, 0, L], [0, 0, 0], [0, H, 0], [0, H, L], [1, 0, 0], K.WALL, [L, 0], [0, 0], [0, H], [L, H]);
	g.quad([W, 0, 0], [W, 0, L], [W, H, L], [W, H, 0], [-1, 0, 0], K.WALL, [0, 0], [L, 0], [L, H], [0, H]);
	// the end walls, up into the vault (the doorways cut out in the shader)
	const S = 24;
	for (const end of [0, 1]) {
		const z = end ? L : 0, n = [0, 0, end ? -1 : 1];
		for (let i = 0; i < S; i++) {
			const x0 = i / S * W, x1 = (i + 1) / S * W;
			const a = [x0, 0, z], b = [x1, 0, z], c = [x1, vaultY(x1), z], d = [x0, vaultY(x0), z];
			if (end) g.quad(b, a, d, c, n, K.WALL, [x1, 0], [x0, 0], [x0, d[1]], [x1, c[1]]);
			else g.quad(a, b, c, d, n, K.WALL, [x0, 0], [x1, 0], [x1, c[1]], [x0, d[1]]);
		}
	}

	// the vault
	const VS = 40;
	for (let i = 0; i < VS; i++) {
		const x0 = i / VS * W, x1 = (i + 1) / VS * W;
		const y0 = vaultY(x0), y1 = vaultY(x1);
		const nAt = (x, y) => { const u = x <= W / 2 ? x : W - x; let nx = (VC - u) / VC, ny = (H - y) / VC; if (x > W / 2) nx = -nx; return [nx, ny, 0]; };
		const n0 = nAt(x0, y0), n1 = nAt(x1, y1);
		const a = g.v([x0, y0, 0], n0, K.VAULT, [x0, 0]), b = g.v([x1, y1, 0], n1, K.VAULT, [x1, 0]);
		const c = g.v([x1, y1, L], n1, K.VAULT, [x1, L]), d = g.v([x0, y0, L], n0, K.VAULT, [x0, L]);
		g.idx.push(a, b, c, a, c, d);
	}

	// the windows: their deep stone sides, and the glass
	const wp = outline(WIN.hw, WIN.sill, WIN.spring);
	for (let i = 0; i < WIN.n; i++) {
		const zc = winZ(i);
		// left wall: depth goes to -x; u runs along -z seen from inside? keep u along +z
		const left = i >= WIN.leftFrom;
		if (left) reveal(g, wp, T, (u, v, d, isN) => (isN ? [0, v, u] : [-d, v, zc + u]), true, K.REVEAL, [0, (WIN.sill + WIN.apex) / 2]);
		reveal(g, wp, T, (u, v, d, isN) => (isN ? [0, v, u] : [W + d, v, zc + u]), true, K.REVEAL, [0, (WIN.sill + WIN.apex) / 2]);
		const gx = T * 0.55;
		const lo = WIN.sill - 0.02, hi = WIN.apex + 0.02, a = WIN.hw + 0.02;
		if (left) g.quad([-gx, lo, zc + a], [-gx, lo, zc - a], [-gx, hi, zc - a], [-gx, hi, zc + a], [1, 0, 0], K.GLASS, [a, lo], [-a, lo], [-a, hi], [a, hi]);
		g.quad([W + gx, lo, zc - a], [W + gx, lo, zc + a], [W + gx, hi, zc + a], [W + gx, hi, zc - a], [-1, 0, 0], K.GLASS, [-a, lo], [a, lo], [a, hi], [-a, hi]);
		// the sill, a little proud of the wall
		if (left) g.box(-0.02, WIN.sill - 0.12, zc - WIN.hw - 0.18, 0.12, WIN.sill, zc + WIN.hw + 0.18, K.TRIM);
		g.box(W - 0.12, WIN.sill - 0.12, zc - WIN.hw - 0.18, W + 0.02, WIN.sill, zc + WIN.hw + 0.18, K.TRIM);
	}

	// the doorways: their sides and the dark beyond
	// the doorway: a plain square opening through the wall
	{
		const x0 = W / 2 - DOOR.hw, x1 = W / 2 + DOOR.hw, h = DOOR.h, d = DOOR.depth;
		g.quad([x0, 0, -d], [x0, 0, 0], [x0, h, 0], [x0, h, -d], [1, 0, 0], K.REVEAL);
		g.quad([x1, 0, 0], [x1, 0, -d], [x1, h, -d], [x1, h, 0], [-1, 0, 0], K.REVEAL);
		g.quad([x0, h, 0], [x1, h, 0], [x1, h, -d], [x0, h, -d], [0, -1, 0], K.REVEAL);
		g.quad([x0, 0.001, -d], [x1, 0.001, -d], [x1, 0.001, 0], [x0, 0.001, 0], [0, 1, 0], K.CFLOOR);
		// the corridor: wet concrete floor, bare walls and ceiling
		const cx0 = W / 2 - ENT.hw, cx1 = W / 2 + ENT.hw, ch = ENT.h, ez = ENT.z;
		g.quad([cx0, 0, ez], [cx0, 0, -d], [cx1, 0, -d], [cx1, 0, ez], [0, 1, 0], K.CFLOOR);
		g.quad([cx0, 0, -d], [cx0, 0, ez], [cx0, ch, ez], [cx0, ch, -d], [1, 0, 0], K.CONC, [-d, 0], [ez, 0], [ez, ch], [-d, ch]);
		g.quad([cx1, 0, ez], [cx1, 0, -d], [cx1, ch, -d], [cx1, ch, ez], [-1, 0, 0], K.CONC, [ez, 0], [-d, 0], [-d, ch], [ez, ch]);
		g.quad([cx0, ch, ez], [cx0, ch, -d], [cx1, ch, -d], [cx1, ch, ez], [0, -1, 0], K.CONC, [ez, 0], [-d, 0], [-d, 1], [ez, 1]);
		g.quad([cx1, 0, ez], [cx0, 0, ez], [cx0, ch, ez], [cx1, ch, ez], [0, 0, 1], K.CONC, [0, 0], [1, 0], [1, ch], [0, ch]);
		// the corridor's end of the wall, round the door
		const wz = -d;
		g.quad([cx0, 0, wz], [x0, 0, wz], [x0, ch, wz], [cx0, ch, wz], [0, 0, -1], K.CONC, [cx0, 0], [x0, 0], [x0, ch], [cx0, ch]);
		g.quad([x1, 0, wz], [cx1, 0, wz], [cx1, ch, wz], [x1, ch, wz], [0, 0, -1], K.CONC, [x1, 0], [cx1, 0], [cx1, ch], [x1, ch]);
		g.quad([x0, h, wz], [x1, h, wz], [x1, ch, wz], [x0, ch, wz], [0, 0, -1], K.CONC, [x0, h], [x1, h], [x1, ch], [x0, ch]);
		// the door itself, swung open towards you on its hinges at the right
		const hx = x0, hz = wz - 0.01, a = ENT.open, dw = DOOR.hw * 2 - 0.04, th = 0.045;
		const ux = [Math.cos(a), 0, -Math.sin(a)], nz = [Math.sin(a), 0, Math.cos(a)];
		const P = (u, y, v) => [hx + ux[0] * u + nz[0] * v, y, hz + ux[2] * u + nz[2] * v];
		const yb = 0.012, yt = h - 0.02;
		g.quad(P(0, yb, th), P(dw, yb, th), P(dw, yt, th), P(0, yt, th), nz, K.DOOR);
		g.quad(P(dw, yb, 0), P(0, yb, 0), P(0, yt, 0), P(dw, yt, 0), nz.map((x) => -x), K.DOOR);
		g.quad(P(dw, yb, th), P(dw, yb, 0), P(dw, yt, 0), P(dw, yt, th), ux, K.DOOR);
		g.quad(P(0, yt, th), P(dw, yt, th), P(dw, yt, 0), P(0, yt, 0), [0, 1, 0], K.DOOR);
		// its handle
		const hp = P(dw - 0.09, 1.02, th + 0.03);
		tube(g, [P(dw - 0.09, 1.02, th), hp, [hp[0] - ux[0] * 0.12, hp[1], hp[2] - ux[2] * 0.12]], 0.011, 6, K.STEEL);
		// and the neon sign's box over the door
		const sg = ENT.sign;
		g.box(sg[0] - 0.33, sg[1] - 0.12, sg[2] - 0.02, sg[0] + 0.33, sg[1] + 0.12, wz, K.TRIM);
	}

	// the shafts between the windows, their bases and capitals, and the
	// ribs they carry over the vault
	for (const z of SHAFTS) {
		for (const x of [0.2, W - 0.2]) {
			g.box(x - 0.42, 0, z - 0.42, x + 0.42, 0.5, z + 0.42, K.TRIM);
			g.cyl(x, z, 0.27, 0.5, H - 0.55, K.TRIM);
			g.cyl(x + (x < W / 2 ? 0.2 : -0.2), z - 0.36, 0.1, 0.5, H - 0.55, K.TRIM, 10);
			g.cyl(x + (x < W / 2 ? 0.2 : -0.2), z + 0.36, 0.1, 0.5, H - 0.55, K.TRIM, 10);
			g.box(x - 0.45, H - 0.55, z - 0.5, x + 0.45, H - 0.25, z + 0.5, K.TRIM);
		}
		// the rib: a band under the vault, following its curve
		const RS = 40, rw = 0.22, rd = 0.22;
		for (let i = 0; i < RS; i++) {
			const x0 = i / RS * W, x1 = (i + 1) / RS * W;
			const y0 = vaultY(x0), y1 = vaultY(x1);
			const n0 = [W / 2 - x0, -(y0 - H + 2), 0], n1 = [W / 2 - x1, -(y1 - H + 2), 0];
			const nn = (n) => { const l = Math.hypot(n[0], n[1]) || 1; return [n[0] / l, n[1] / l, 0]; };
			const m0 = nn(n0), m1 = nn(n1);
			const p0 = [x0 + m0[0] * rd, y0 + m0[1] * rd], p1 = [x1 + m1[0] * rd, y1 + m1[1] * rd];
			g.quad([p0[0], p0[1], z - rw], [p1[0], p1[1], z - rw], [p1[0], p1[1], z + rw], [p0[0], p0[1], z + rw], m0, K.TRIM);
			g.quad([x0, y0, z - rw], [x1, y1, z - rw], [p1[0], p1[1], z - rw], [p0[0], p0[1], z - rw], [0, 0, -1], K.TRIM);
			g.quad([x1, y1, z + rw], [x0, y0, z + rw], [p0[0], p0[1], z + rw], [p1[0], p1[1], z + rw], [0, 0, 1], K.TRIM);
		}
	}


	// THE DARKROOM ------------------------------------------------------
	{
		const D = DARK, t = D.top, b = D.basin;
		const plank = (z0, z1, sink) => {
			// the tiled body, from the floor to the top, with a kick plate
			g.box(0, 0, z0, D.depth - 0.06, 0.12, z1, K.TRIM);
			g.quad([D.depth, 0.12, z0], [D.depth, 0.12, z1], [D.depth, t, z1], [D.depth, t, z0], [1, 0, 0], K.TILE, [z0, 0.12], [z1, 0.12], [z1, t], [z0, t]);
			g.quad([0, 0.12, z0], [D.depth, 0.12, z0], [D.depth, t, z0], [0, t, z0], [0, 0, -1], K.TILE, [0, 0.12], [D.depth, 0.12], [D.depth, t], [0, t]);
			g.quad([D.depth, 0.12, z1], [0, 0.12, z1], [0, t, z1], [D.depth, t, z1], [0, 0, 1], K.TILE, [D.depth, 0.12], [0, 0.12], [0, t], [D.depth, t]);
			if (!sink) {
				g.quad([0, t, z0], [0, t, z1], [D.depth, t, z1], [D.depth, t, z0], [0, 1, 0], K.TILE, [0, z0], [0, z1], [D.depth, z1], [D.depth, z0]);
				return;
			}
			// the sink: a rim round a shallow basin
			const top = (x0, x1, za, zb) => g.quad([x0, t, za], [x0, t, zb], [x1, t, zb], [x1, t, za], [0, 1, 0], K.TILE, [x0, za], [x0, zb], [x1, zb], [x1, za]);
			top(0, b.x0, z0, z1); top(b.x1, D.depth, z0, z1); top(b.x0, b.x1, z0, b.z0); top(b.x0, b.x1, b.z1, z1);
			g.quad([b.x0, b.floor, b.z0], [b.x0, b.floor, b.z1], [b.x1, b.floor, b.z1], [b.x1, b.floor, b.z0], [0, 1, 0], K.TILE, [b.x0, b.z0], [b.x0, b.z1], [b.x1, b.z1], [b.x1, b.z0]);
			g.quad([b.x0, b.floor, b.z1], [b.x0, b.floor, b.z0], [b.x0, t, b.z0], [b.x0, t, b.z1], [1, 0, 0], K.TILE, [b.z1, b.floor], [b.z0, b.floor], [b.z0, t], [b.z1, t]);
			g.quad([b.x1, b.floor, b.z0], [b.x1, b.floor, b.z1], [b.x1, t, b.z1], [b.x1, t, b.z0], [-1, 0, 0], K.TILE, [b.z0, b.floor], [b.z1, b.floor], [b.z1, t], [b.z0, t]);
			g.quad([b.x0, b.floor, b.z0], [b.x1, b.floor, b.z0], [b.x1, t, b.z0], [b.x0, t, b.z0], [0, 0, 1], K.TILE, [b.x0, b.floor], [b.x1, b.floor], [b.x1, t], [b.x0, t]);
			g.quad([b.x1, b.floor, b.z1], [b.x0, b.floor, b.z1], [b.x0, t, b.z1], [b.x1, t, b.z1], [0, 0, -1], K.TILE, [b.x1, b.floor], [b.x0, b.floor], [b.x0, t], [b.x1, t]);
		};
		plank(D.a[0], D.a[1], true);
		plank(D.b[0], D.b[1], false);
		// a tiled splashback up the wall behind them
		for (const [z0, z1] of [D.a, D.b]) g.quad([0.012, t, z1], [0.012, t, z0], [0.012, t + 0.62, z0], [0.012, t + 0.62, z1], [1, 0, 0], K.TILE, [z1, t], [z0, t], [z0, t + 0.62], [z1, t + 0.62]);
		// the trays: thin steel, sloping sides, a rolled rim
		const tray = (zc) => {
			const y0 = b.floor + 0.004, y1 = y0 + D.TH, hx = D.TX / 2, hz = D.TZ / 2, s = 0.02, xc = D.TXc;
			const lo = [[xc - hx + s, zc - hz + s], [xc + hx - s, zc - hz + s], [xc + hx - s, zc + hz - s], [xc - hx + s, zc + hz - s]];
			const hi = [[xc - hx, zc - hz], [xc + hx, zc - hz], [xc + hx, zc + hz], [xc - hx, zc + hz]];
			g.quad([lo[0][0], y0, lo[0][1]], [lo[3][0], y0, lo[3][1]], [lo[2][0], y0, lo[2][1]], [lo[1][0], y0, lo[1][1]], [0, 1, 0], K.STEEL);
			for (let i = 0; i < 4; i++) {
				const j = (i + 1) % 4;
				const a = [lo[i][0], y0, lo[i][1]], bb = [lo[j][0], y0, lo[j][1]], c = [hi[j][0], y1, hi[j][1]], d = [hi[i][0], y1, hi[i][1]];
				const mx = (lo[i][0] + lo[j][0]) / 2 - xc, mz = (lo[i][1] + lo[j][1]) / 2 - zc;
				const l = Math.hypot(mx, mz) || 1;
				g.quad(a, bb, c, d, [-mx / l * 0.95, 0.3, -mz / l * 0.95], K.STEEL);
				g.quad(bb, a, [d[0], y0 + 0.001, d[2]], [c[0], y0 + 0.001, c[2]], [mx / l, 0, mz / l], K.STEEL);
			}
			tube(g, [...hi, hi[0]].map((q) => [q[0], y1 + 0.004, q[1]]), 0.005, 5, K.STEEL);
		};
		for (const z of D.trays) tray(z);
		// tongs: two flat sticks with rubber tips, resting across the trays
		const tongs = (x0, z0, x1, z1, y0, y1) => {
			for (const o of [-0.012, 0.012]) tube(g, [[x0, y0, z0 + o], [(x0 + x1) / 2, (y0 + y1) / 2 + 0.006, (z0 + z1) / 2 + o * 0.6], [x1, y1, z1 + o * 0.2]], 0.0045, 5, K.PEG);
		};
		tongs(D.TXc + 0.05, D.trays[0] + 0.12, D.TXc + 0.27, D.trays[0] + 0.42, D.liquid - 0.005, D.top + 0.03);
		tongs(D.TXc - 0.1, D.trays[2] - 0.2, D.TXc + 0.24, D.trays[2] - 0.05, D.liquid + 0.002, D.liquid + D.TH * 0.9);
		// the tap at the far end of the sink
		const tz = b.z1 - 0.3;
		tube(g, [[0.0, 1.32, tz], [0.18, 1.32, tz], [0.27, 1.3, tz], [0.32, 1.22, tz], [0.33, 1.12, tz]], 0.016, 8, K.STEEL);
		g.box(0.0, 1.27, tz - 0.05, 0.05, 1.37, tz + 0.05, K.STEEL);
		// the bulb's bracket: an arm from the wall, a cord down to the socket
		const bl = DARK.bulb;
		tube(g, [[0.0, 2.32, bl[2]], [bl[0] * 0.6, 2.32, bl[2]], [bl[0], 2.28, bl[2]]], 0.012, 6, K.TRIM);
		g.box(0.0, 2.24, bl[2] - 0.06, 0.03, 2.4, bl[2] + 0.06, K.TRIM);
		tube(g, [[bl[0], 2.28, bl[2]], [bl[0] + 0.004, 1.9, bl[2] + 0.003], [bl[0], bl[1] + 0.2, bl[2]]], 0.004, 5, K.CABLE);
		// the red tube over the lines, on two clips
		const tb = DARK.tube;
		tube(g, [[tb.x + 0.02, tb.y, tb.z0], [tb.x + 0.02, tb.y, (tb.z0 + tb.z1) / 2], [tb.x + 0.02, tb.y, tb.z1]], 0.035, 10, K.TUBE);
		g.box(0, tb.y - 0.05, tb.z0 - 0.06, 0.07, tb.y + 0.05, tb.z0 - 0.01, K.TRIM);
		g.box(0, tb.y - 0.05, tb.z1 + 0.01, 0.07, tb.y + 0.05, tb.z1 + 0.06, K.TRIM);
		// the drying lines
		for (const ln of DARK.lines) {
			const pts = [];
			for (let i = 0; i <= 24; i++) { const u = i / 24; pts.push(darkLineAt(ln, u)); }
			tube(g, pts, 0.0035, 5, K.CABLE);
			for (const e of [pts[0], pts[24]]) tube(g, [[0.0, e[1] + 0.05, e[2]], [e[0] * 0.5, e[1] + 0.02, e[2]], [e[0] + 0.02, e[1], e[2]]], 0.007, 5, K.TRIM);
		}
	}

	// the sets' own power cords, out of their backs and down to the floor,
	// gathering behind the stack
	TV.stack.forEach((t, i) => {
		const m = TV.models[t[0]], G = TV.G;
		const x = W / 2 + t[2], z = TV.z + t[4] + m.d * G * 0.85, y = t.base + 0.12 * G;
		const gx = W / 2 + (i % 3 - 1) * 0.5, gz = TV.z + 2.3 + (i % 4) * 0.12;
		tube(g, [[x, y, z - 0.05], [x + 0.05, y - 0.02, z + 0.15], [x + 0.1, Math.max(0.02, y * 0.4), z + 0.35], [x * 0.6 + gx * 0.4, 0.018, z + 0.6], [gx, 0.018, gz]], 0.012, 6, K.CABLE);
	});
	// the cable, and the socket it is plugged into
	tube(g, CABLE.path, CABLE.r, 16, K.CABLE);
	{
		const [sx, sy, sz] = CABLE.socket;
		g.box(sx, sy - 0.07, sz - 0.07, sx + 0.018, sy + 0.07, sz + 0.07, K.STEEL);
		g.box(sx + 0.018, sy - 0.035, sz - 0.032, sx + 0.11, sy + 0.035, sz + 0.032, K.TRIM);
		// its little pilot lamp, glowing
		g.box(sx, sy + 0.042, sz + 0.035, sx + 0.03, sy + 0.058, sz + 0.051, K.TUBE);
	}
	// the safelight
	g.box(SAFE.x0 - 0.08, SAFE.y - 0.07, L - 0.08, SAFE.x0 - 0.02, SAFE.y + 0.07, L, K.TRIM);
	g.box(SAFE.x1 + 0.02, SAFE.y - 0.07, L - 0.08, SAFE.x1 + 0.08, SAFE.y + 0.07, L, K.TRIM);
	tube(g, [[SAFE.x0 - 0.02, SAFE.y, SAFE.z], [(SAFE.x0 + SAFE.x1) / 2, SAFE.y, SAFE.z], [SAFE.x1 + 0.02, SAFE.y, SAFE.z]], 0.045, 10, K.TUBE);

	// skirting, a dado rail, and a cornice at the vault's foot
	for (const side of [0, 1]) {
		const x0 = side ? W - 0.06 : 0, x1 = side ? W : 0.06;
		g.box(x0, 0, 0, x1, 0.24, L, K.TRIM);
		g.box(side ? W - 0.05 : 0, 1.0, 0, side ? W : 0.05, 1.08, L, K.TRIM);
		const c0 = side ? W - 0.32 : 0, c1 = side ? W : 0.32;
		g.box(c0, H - 0.25, 0, c1, H + 0.08, L, K.TRIM);
	}
	for (const end of [0, 1]) {
		const z0 = end ? L - 0.06 : 0, z1 = end ? L : 0.06;
		if (end) g.box(0, 0, z0, W, 0.24, z1, K.TRIM);
		else {
			g.box(0, 0, z0, W / 2 - DOOR.hw, 0.24, z1, K.TRIM);
			g.box(W / 2 + DOOR.hw, 0, z0, W, 0.24, z1, K.TRIM);
		}
		const c0 = end ? L - 0.32 : 0, c1 = end ? L : 0.32;
		g.box(0, H - 0.25, c0, W, H + 0.08, c1, K.TRIM);
	}
	return g;
}


// the polaroids' cards: where each one is, its picture, and whether it hangs
function buildPolaroids() {
	let seed = 7;
	const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
	const pos = [], nrm = [], uv = [], pic = [], piv = [], idx = [], sty = [];
	const NU = 3, NV = 4;
	// one card: centre c, its across (ax) and up (ay) directions and the way
	// it faces (n); hang: [pivot x, y, z, swing]
	const card = (c, ax, ay, n, sc, tile, hang, curl, style) => {
		const w = POL.w * sc, h = POL.h * sc, base = pos.length / 3;
		for (let j = 0; j <= NV; j++) for (let i = 0; i <= NU; i++) {
			const u = i / NU, v = j / NV;
			const du = (u - 0.5) * w, dv = (v - 0.5) * h;
			// old photographic paper curls a little at its edges
			const off = curl * ((u - 0.5) * (u - 0.5) * 4 + (1 - v) * (1 - v) * 0.6);
			pos.push(O[0] + c[0] + ax[0] * du + ay[0] * dv + n[0] * off, O[1] + c[1] + ax[1] * du + ay[1] * dv + n[1] * off, O[2] + c[2] + ax[2] * du + ay[2] * dv + n[2] * off);
			nrm.push(n[0], n[1], n[2]); uv.push(u, v); pic.push(tile); sty.push(style || 0);
			piv.push(hang[0] + O[0], hang[1] + O[1], hang[2] + O[2], hang[3]);
		}
		for (let j = 0; j < NV; j++) for (let i = 0; i < NU; i++) {
			const a = base + j * (NU + 1) + i, b = a + 1, c2 = a + NU + 1, d = c2 + 1;
			idx.push(a, b, d, a, d, c2);
		}
	};
	const rot = (ax, ay, a) => {
		const c = Math.cos(a), s = Math.sin(a);
		return [ax.map((x, k) => x * c + ay[k] * s), ay.map((y, k) => -ax[k] * s + y * c)];
	};
	const none = [0, 0, 0, 0];
	let k = 0;
	// pinned in drifts on a stretch of wall: x0..x1 along it, y0..y1 up it
	const drift = (place, n, along, x0, x1, y0, y1, dens, cy) => {
		const sx = 0.4, sy = 0.48;
		let layer = 0;
		for (let y = y0; y < y1; y += sy) for (let x = x0; x < x1; x += sx) {
			const px = x + (rnd() - 0.5) * sx * 0.7, py = y + (rnd() - 0.5) * sy * 0.6;
			if (rnd() > dens(px, py)) continue;
			const [ax, ay] = rot(along, [0, 1, 0], (rnd() - 0.5) * 0.5);
			const c = place(px, py, 0.012 + 0.0016 * (layer++ % 9) + rnd() * 0.004);
			const sc = 0.88 + rnd() * 0.3;
			card(c, ax, ay, n, sc, Math.floor(rnd() * POL.n), none, (rnd() - 0.3) * 0.02);
			// (where they are, for the camera to come close to some)
			if (POL.spots.length < 400) POL.spots.push({ c, n, up: ay, size: POL.h * sc });
			k++;
		}
	};
	const ry = (py, cy, s) => Math.exp(-Math.pow((py - cy) / s, 2));
	// the wall panels between the windows, either side of each shaft
	for (let i = 0; i < WIN.n - 1; i++) {
		const zc = SHAFTS[i + 1];
		const spans = [[winZ(i) + WIN.hw + 0.32, zc - 0.66], [zc + 0.66, winZ(i + 1) - WIN.hw - 0.32]];
		for (const [za, zb] of spans) {
			const dens = (px, py) => 0.85 * ry(py, 3.4, 1.7);
			// (none on the left over the darkroom: its prints hang on lines)
			if (zb > DARK.b[1] + 0.3) drift((z, y, o) => [o, y, z], [1, 0, 0], [0, 0, -1], za, zb, 1.45, 6.3, dens);
			drift((z, y, o) => [W - o, y, z], [-1, 0, 0], [0, 0, 1], za, zb, 1.45, 6.3, dens);
		}
	}
	// the darkroom's prints, drying on their lines, facing into the room
	const pegs = [];
	for (const ln of DARK.lines) {
		const len = ln[3] - ln[2] - 0.7;
		for (let d = 0.18; d < len - 0.1; d += 0.3 + rnd() * 0.14) {
			const u = d / len, p = darkLineAt(ln, u);
			if (rnd() < 0.1) continue;
			if (Math.abs(p[2] - DARK.bulb[2]) < 0.4 && p[1] > 2.3) continue;
			const sc = 0.56 + rnd() * 0.14, h = POL.h * sc;
			const tilt = (rnd() - 0.5) * 0.7;
			// hung by a corner now and then, as in the reference
			const corner = rnd() < 0.3 ? (rnd() < 0.5 ? -0.75 : 0.75) : tilt;
			const [ax, ay] = rot([0, 0, -1], [0, 1, 0], corner);
			const n = [1, 0, 0];
			const c = [p[0] + 0.004, p[1] - 0.02 - ay[1] * h * 0.5, p[2] - ay[2] * h * 0.5];
			card(c, ax, ay, n, sc, Math.floor(rnd() * POL.n), [p[0], p[1], p[2], -(0.04 + rnd() * 0.06)], 0.01 + rnd() * 0.025, 1);
			pegs.push(p);
			k++;
		}
	}
	return { pos, nrm, uv, pic, piv, idx, sty, pegs, count: k };
}

// ------------------------------------------------------------------
// LIGHT (shared by the room's shader and post.js's light shafts)
// ------------------------------------------------------------------
const COMMON = `
	const float RW = ${f(W)}, RL = ${f(L)}, RH = ${f(H)}, RT = ${f(T)};
	const float HW = ${f(WIN.hw)}, SILL = ${f(WIN.sill)}, SPRING = ${f(WIN.spring)};
	const float WZ0 = ${f(WIN.z0)}, WSTEP = ${f(WIN.step)};
	const vec3 RO = vec3(${f(O[0])}, ${f(O[1])}, ${f(O[2])});
	const vec3 LDIR_L = vec3(${f(LDIR[0])}, ${f(LDIR[1])}, ${f(LDIR[2])});
	const vec3 LDIR_R = vec3(${f(-LDIR[0])}, ${f(LDIR[1])}, ${f(LDIR[2])});

	float rhash(vec2 p) {
		vec3 p3 = fract(vec3(p.x, p.y, p.x) * 0.1031);
		p3 += dot(p3, p3.yzx + 33.33);
		return fract((p3.x + p3.y) * p3.z);
	}
	float rnoise(vec2 p) {
		vec2 i = floor(p), g = fract(p);
		g = g * g * (3.0 - 2.0 * g);
		return mix(mix(rhash(i), rhash(i + vec2(1.0, 0.0)), g.x), mix(rhash(i + vec2(0.0, 1.0)), rhash(i + vec2(1.0, 1.0)), g.x), g.y);
	}
	float rfbm(vec2 p) {
		float s = 0.0, a = 0.5;
		for (int i = 0; i < 4; i++) { s += a * rnoise(p); p = p * 2.03 + 7.1; a *= 0.5; }
		return s;
	}

	// how far inside a pointed opening (q: across from its middle, up),
	// negative outside
	float pointedSD(vec2 q, float hw, float sill, float spring) {
		float au = abs(q.x);
		float d = q.y < spring ? hw - au : 2.0 * hw - length(vec2(au + hw, q.y - spring));
		return min(d, q.y - sill);
	}
	// which window a point along a long wall belongs to, and where in it
	float winIdx(float z) { return clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${f(WIN.n - 1)}); }
	// (on the left, the first windows are walled up)
	float leftOpen(float z) { return step(${f(WIN.leftFrom - 0.5)}, winIdx(z)); }
	vec2 winLocal(float z, float y) {
		float i = clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${f(WIN.n - 1)});
		return vec2(z - (WZ0 + WSTEP * i), y);
	}

	// the window's stonework and leading: 1 where the glass is clear, 0 on
	// the stone and the lead (w: how soft the edges are)
	float glassOpen(vec2 q, float w) {
		float sd = pointedSD(q, HW, SILL, SPRING);
		if (sd < 0.0) return 0.0;
		float stone = 1.0 - smoothstep(0.09, 0.09 + w, sd);
		// the mullion, up to the lancets' points
		float la = HW * 0.5 - 0.05;
		float lApex = SPRING + la * 1.7320508;
		stone = max(stone, (1.0 - smoothstep(0.07, 0.07 + w, abs(q.x))) * step(q.y, lApex + 0.05));
		// the two lancets' pointed heads
		float lu = abs(abs(q.x) - HW * 0.5);
		float lr = length(vec2(lu + la, q.y - SPRING));
		stone = max(stone, (1.0 - smoothstep(0.065, 0.065 + w, abs(lr - 2.0 * la))) * step(SPRING, q.y) * step(lu + la, 2.0 * la + 0.2));
		// the ring in the head
		vec2 rc = vec2(0.0, SPRING + HW * 1.08);
		float rr = HW * 0.42;
		float ring = abs(length(q - rc) - rr);
		stone = max(stone, 1.0 - smoothstep(0.065, 0.065 + w, ring));
		// the four little cusps in the ring
		vec2 rq = q - rc;
		float cusp = abs(length(abs(rq) - vec2(rr * 0.5)) - rr * 0.32);
		stone = max(stone, (1.0 - smoothstep(0.022, 0.022 + w, cusp)) * step(length(rq), rr));
		// the leads: long diamonds, with an upright through each lancet
		float inRing = step(length(rq), rr);
		vec2 lq = mix(q, rq * 1.6, inRing);
		float sx = 0.2, sy = 0.36;
		vec2 a = vec2(lq.x / sx + lq.y / sy, -lq.x / sx + lq.y / sy);
		vec2 fa = abs(fract(a) - 0.5);
		float lead = 1.0 - smoothstep(0.04, 0.04 + w * 4.0, 0.5 - max(fa.x, fa.y));
		lead = max(lead, (1.0 - smoothstep(0.012, 0.012 + w, abs(lu))) * step(q.y, lApex) * (1.0 - inRing));
		// and level bars every so often
		float bar = abs(fract((q.y - SILL) / 0.72) - 0.5);
		lead = max(lead, smoothstep(0.482, 0.484 + w * 1.2, bar) * (1.0 - inRing));
		return (1.0 - stone) * (1.0 - lead * 0.92);
	}
	// the glass itself: deep red, hot where the light is strongest, mottled
	// like old pot-metal glass
	vec3 glassTint(vec2 q) {
		float m = rfbm(q * vec2(1.6, 0.9) + 3.0);
		float pane = rhash(floor(vec2(q.x / 0.24 + q.y / 0.42, -q.x / 0.24 + q.y / 0.42)));
		float hot = smoothstep(0.35, 0.95, m) * (0.6 + 0.4 * pane);
		float k = 0.55 + 0.7 * m + 0.25 * pane;
		return mix(vec3(0.62, 0.03, 0.02), vec3(1.0, 0.36, 0.2), hot) * k;
	}

	// the same, roughly: the openings only, the glass's average colour (for
	// the light thrown back off the floor, which is soft anyway)
	vec3 redLightRough(vec3 p) {
		float t = -p.x / LDIR_L.x;
		vec3 h = p + LDIR_L * t;
		float a = smoothstep(-0.1, 0.25, pointedSD(winLocal(h.z, h.y), HW, SILL, SPRING)) * leftOpen(h.z);
		t = (RW - p.x) / LDIR_R.x;
		h = p + LDIR_R * t;
		a += smoothstep(-0.1, 0.25, pointedSD(winLocal(h.z, h.y), HW, SILL, SPRING));
		return vec3(0.75, 0.08, 0.05) * a * 0.62;
	}
	// for the air: the leading, but the glass's colour left plain
	vec3 redLightAir(vec3 p) {
		vec3 sum = vec3(0.0);
		float t = (-RT * 0.55 - p.x) / LDIR_L.x;
		vec3 h = p + LDIR_L * t;
		sum += vec3(0.8, 0.09, 0.05) * glassOpen(winLocal(h.z, h.y), 0.06) * leftOpen(h.z);
		t = (RW + RT * 0.55 - p.x) / LDIR_R.x;
		h = p + LDIR_R * t;
		sum += vec3(0.8, 0.09, 0.05) * glassOpen(winLocal(h.z, h.y), 0.06);
		return sum;
	}

	// the red light at a point in the room (room metres), through both
	// rows of windows; soft: how much to blur the leading
	vec3 redLight(vec3 p, float soft) {
		vec3 sum = vec3(0.0);
		// the left wall's windows
		{
			float t = (-RT * 0.55 - p.x) / LDIR_L.x;
			vec3 h = p + LDIR_L * t;
			vec2 q = winLocal(h.z, h.y);
			float t0 = -p.x / LDIR_L.x;
			vec3 h0 = p + LDIR_L * t0;
			vec2 q0 = winLocal(h0.z, h0.y);
			float open = glassOpen(q, soft) * step(0.0, pointedSD(q0, HW, SILL, SPRING) + 0.02) * leftOpen(h.z);
			sum += glassTint(q) * open;
		}
		// the right wall's
		{
			float t = (RW + RT * 0.55 - p.x) / LDIR_R.x;
			vec3 h = p + LDIR_R * t;
			vec2 q = winLocal(h.z, h.y);
			float t0 = (RW - p.x) / LDIR_R.x;
			vec3 h0 = p + LDIR_R * t0;
			vec2 q0 = winLocal(h0.z, h0.y);
			float open = glassOpen(q, soft) * step(0.0, pointedSD(q0, HW, SILL, SPRING) + 0.02);
			sum += glassTint(q + 11.0) * open;
		}
		return sum;
	}
`;

// for post.js's light shafts: how much of the red light reaches a point in
// the air (world metres)
function sunGLSL() {
	return `
	#define STUDIO_SUN ${'vec3(' + f(LDIR[0]) + ', ' + f(LDIR[1]) + ', ' + f(LDIR[2]) + ')'}
	#define STUDIO_SUN2 ${'vec3(' + f(-LDIR[0]) + ', ' + f(LDIR[1]) + ', ' + f(LDIR[2]) + ')'}
	#define SHAFT_TINT vec3(0.6, 0.012, 0.008)
	#define STUDIO_AIR_EVEN
	${COMMON}
	float studioSun(vec3 p) {
		vec3 lp = p - RO;
		if (lp.x < 0.0 || lp.x > RW || lp.z < 0.0 || lp.z > RL || lp.y > RH + 2.0) return 0.0;
		vec3 c = redLightAir(lp);
		return dot(c, vec3(0.7, 0.2, 0.1)) * 3.2;
	}`;
}

// ------------------------------------------------------------------
// SHADERS
// ------------------------------------------------------------------
const VERT = `
	precision highp float;
	uniform mat4 proj, view;
	uniform float yScale;
	attribute vec3 position, normal;
	attribute float kind;
	attribute vec2 uv;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	void main() {
		v_pos = position; v_nrm = normal; v_kind = kind; v_uv = uv;
		vec3 t = view[3].xyz;
		v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
		v_eye.y *= yScale;
		vec3 p = position; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`;

const SHADE = `
	// the televisions' flicker, thrown on whatever is in front of them
	uniform vec4 tvLight;
	vec3 tvGlow(vec3 lp, vec3 N) {
		vec3 d = vec3(${f(W / 2)}, 1.35, ${f(TV.z - 0.9)}) - lp;
		float dd = dot(d, d);
		float face = 0.35 + 0.65 * max(0.0, dot(N, normalize(d)));
		// (only in front of them: the stack's own back is in its shadow)
		float front = smoothstep(${f(TV.z + 0.6)}, ${f(TV.z - 0.2)}, lp.z);
		return tvLight.rgb * face * front / (1.0 + dd * 0.55);
	}
	// THE FILM: his memories as an old print would show them, drained to
	// a warm grey, flickering, weaving in the gate, grained, scratched,
	// specked with dust, burnt at its edges; a new memory every few seconds,
	// with a flash of bare light between
	uniform sampler2D memTex;
	uniform float projT;
	vec3 film(vec2 uv) {
		float t = projT;
		float fr = floor(t * 18.0);
		float shot = floor(t / 3.4);
		float k = floor(rhash(vec2(shot, 4.7)) * 36.0);
		float f = fract(t / 3.4);
		uv += vec2(sin(t * 13.0) * 0.0015 + (rhash(vec2(fr, 1.0)) - 0.5) * 0.003, (rhash(vec2(fr, 2.0)) - 0.5) * 0.006);
		// an old print, only a touch soft: its colours faded, not gone
		vec2 su = clamp((floor(uv * vec2(210.0, 158.0)) + 0.5) / vec2(210.0, 158.0), 0.01, 0.99);
		vec2 tile = vec2(mod(k, 6.0), floor(k / 6.0));
		vec3 pc = vec3(0.0);
		for (int i = 0; i < 5; i++) {
			vec2 o = i == 0 ? vec2(0.0) : vec2(i == 1 ? 1.0 : (i == 2 ? -1.0 : 0.0), i == 3 ? 1.0 : (i == 4 ? -1.0 : 0.0)) * 0.0065;
			pc += texture2D(memTex, (tile + vec2(clamp(su.x + o.x, 0.005, 0.995), 1.0 - clamp(su.y + o.y, 0.005, 0.995))) / 6.0).rgb * (i == 0 ? 0.4 : 0.15);
		}
		float l = dot(pc, vec3(0.3, 0.59, 0.11));
		float l0 = clamp((l - 0.04) * 1.18, 0.0, 1.0);
		vec3 pcol = mix(vec3(l0), pc * (l0 / max(l, 0.02)), 0.5);
		l = pow(l0, 1.1);
		// grain, dust and hairs, scratches running down the print
		l += (rhash(floor(uv * vec2(260.0, 195.0)) + fr * 7.1) - 0.5) * 0.16;
		l *= 1.0 - step(0.9975, rhash(floor(uv * vec2(70.0, 52.0)) + fr * 3.3)) * 0.9;
		float sx = rhash(vec2(floor(t * 2.0), 9.0));
		l += smoothstep(0.0016, 0.0, abs(uv.x - sx)) * 0.5 * step(0.5, rhash(vec2(fr, 5.0)));
		l -= smoothstep(0.0012, 0.0, abs(uv.x - fract(sx * 3.7))) * 0.4;
		// the lamp breathes; between memories, a burst of bare light
		l *= 0.82 + 0.18 * rhash(vec2(fr, 3.0));
		float gap = 1.0 - smoothstep(0.0, 0.05, f) + smoothstep(0.97, 1.0, f);
		l = mix(l, 0.9 + 0.1 * rhash(vec2(fr, 6.0)), gap);
		// the light falls off to the edges and corners of the frame
		vec2 e = uv * (1.0 - uv);
		float vig = clamp(pow(e.x * e.y * 16.0, 0.45), 0.0, 1.0);
		vec3 c = mix(vec3(l), pcol * (l / max(l0, 0.02)), 0.28 * (1.0 - gap));
		return vec3(1.0, 0.86, 0.66) * max(c, 0.0) * vig;
	}
	// where a point in the room is in the projected picture (x, y in 0..1;
	// z: how far along the beam, 0 at the lens, 1 at the wall)
	vec3 projUV(vec3 lp) {
		vec3 L0 = vec3(${f(PROJ.lens[0])}, ${f(PROJ.lens[1])}, ${f(PROJ.lens[2])});
		vec3 d = lp - L0;
		float s = (${f(L - 0.005)} - L0.z) / max(d.z, 1e-4);
		vec3 h = L0 + d * s;
		return vec3(1.0 - (h.x - ${f(PROJ.img.x - PROJ.img.w / 2)}) / ${f(PROJ.img.w)}, (h.y - ${f(PROJ.img.y - PROJ.img.h / 2)}) / ${f(PROJ.img.h)}, 1.0 / s);
	}
	// the televisions stand in the beam's way: their shadows on the picture
	uniform vec3 tvLo[12], tvHi[12];
	float projShadow(vec3 lp) {
		vec3 L0 = vec3(${f(PROJ.lens[0])}, ${f(PROJ.lens[1])}, ${f(PROJ.lens[2])});
		vec3 d = lp - L0;
		vec3 inv = 1.0 / d;
		for (int i = 0; i < 12; i++) {
			vec3 t0 = (tvLo[i] - L0) * inv, t1 = (tvHi[i] - L0) * inv;
			vec3 tn = min(t0, t1), tf = max(t0, t1);
			float a = max(max(tn.x, tn.y), tn.z), b = min(min(tf.x, tf.y), tf.z);
			if (a < b && b > 0.0 && a < 0.995) return 0.0;
		}
		return 1.0;
	}

	// the safelight: a long red tube on the far wall
	vec3 safeLight(vec3 lp, vec3 N) {
		vec3 c = vec3(clamp(lp.x, ${f(SAFE.x0)}, ${f(SAFE.x1)}), ${f(SAFE.y)}, ${f(SAFE.z)});
		vec3 d = c - lp;
		float dd = dot(d, d);
		float face = 0.25 + 0.75 * max(0.0, dot(N, normalize(d)));
		return vec3(1.0, 0.06, 0.045) * 2.6 * face / (1.0 + dd * 0.055);
	}
	// the darkroom: the bare red bulb over the trays, the tube over the lines
	vec3 darkLight(vec3 lp, vec3 N) {
		vec3 d = vec3(${f(DARK.bulb[0])}, ${f(DARK.bulb[1])}, ${f(DARK.bulb[2])}) - lp;
		float dd = dot(d, d);
		vec3 c = vec3(1.0, 0.07, 0.04) * 1.15 * (0.2 + 0.8 * max(0.0, dot(N, normalize(d)))) / (0.02 + dd * 2.2);
		vec3 tq = vec3(${f(DARK.tube.x + 0.02)}, ${f(DARK.tube.y)}, clamp(lp.z, ${f(DARK.tube.z0)}, ${f(DARK.tube.z1)}));
		vec3 e = tq - lp;
		float ee = dot(e, e);
		c += vec3(1.0, 0.06, 0.045) * 1.5 * (0.2 + 0.8 * max(0.0, dot(N, normalize(e)))) / (0.05 + ee * 0.9);
		return c;
	}
	// THE WAY IN: the room's red pouring out through the door into the
	// corridor, and the neon sign's flicker
	uniform float signK;
	vec3 doorGlow(vec3 lp, vec3 N) {
		if (lp.z > 0.05) return vec3(0.0);
		vec3 Ls = vec3(${f(W / 2)}, 1.25, 1.6);
		vec3 d = lp - Ls;
		float t = (${f(-DOOR.depth)} - Ls.z) / d.z;
		vec3 h = Ls + d * t;
		float m = smoothstep(0.08, -0.05, abs(h.x - ${f(W / 2)}) - ${f(DOOR.hw)}) * smoothstep(0.08, -0.05, h.y - ${f(DOOR.h)}) * step(0.0, h.y);
		float dd = dot(d, d);
		vec3 Ld = -normalize(d);
		vec3 c = vec3(1.0, 0.07, 0.05) * 26.0 * m * (0.15 + 0.85 * max(0.0, dot(N, Ld))) / (1.0 + dd * 0.55);
		vec3 sd = vec3(${f(ENT.sign[0])}, ${f(ENT.sign[1])}, ${f(ENT.sign[2])}) - lp;
		c += vec3(1.0, 0.12, 0.1) * signK * 0.5 * (0.2 + 0.8 * max(0.0, dot(N, normalize(sd)))) / (0.05 + dot(sd, sd) * 3.0);
		return c;
	}
	vec3 ambient(vec3 lp, vec3 N) {
		// the room's own dark: a little red, lifted near the lit floor
		// the glow of the glass itself, spread round each window
		float g = 0.0;
		if (abs(N.x) > 0.5) {
			vec2 q = winLocal(lp.z, lp.y);
			g = exp(pointedSD(q, HW, SILL, SPRING) * 1.1) * 0.9 * (lp.x > RW * 0.5 ? 1.0 : leftOpen(lp.z));
		}
		// (out in the corridor there is only what comes through the door)
		float room = 1.0 - 0.9 * smoothstep(-0.3, -1.2, lp.z);
		return (vec3(0.2, 0.017, 0.02) * (0.8 + 0.2 * N.y) + vec3(0.1, 0.007, 0.007) * exp(-lp.y * 0.25)) * room + vec3(0.7, 0.06, 0.04) * g + tvGlow(lp, N) + safeLight(lp, N) + darkLight(lp, N) + doorGlow(lp, N);
	}
	// what the lit floor throws back up onto the walls and the shafts
	vec3 bounce(vec3 lp, vec3 N) {
		vec3 fp = vec3(clamp(lp.x + N.x * (0.8 + lp.y * 0.35), 0.1, RW - 0.1), 0.0, lp.z + N.z * (0.8 + lp.y * 0.35));
		vec3 b = redLightRough(fp) * 0.5 + redLightRough(fp + vec3(N.x * 1.4, 0.0, 1.2)) * 0.25 + redLightRough(fp + vec3(N.x * 1.4, 0.0, -1.2)) * 0.25;
		return b * 0.42 * exp(-lp.y * 0.18) * (0.55 + 0.45 * max(0.0, -N.y + 0.4));
	}

`;

const FRAG = `
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, yScale, mirrorOn, reflOn;
	uniform sampler2D reflTex;
	uniform vec2 reflSize;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${COMMON}

	const float DHW = ${f(DOOR.hw)}, DH = ${f(DOOR.h)};

	${SHADE}

	void main() {
		vec3 lp = v_pos - RO;
		vec3 N = normalize(v_nrm);
		int k = int(v_kind + 0.5);
		bool flr = k == 0 || k == 13;
		if (yScale < 0.0 && flr) discard;
		// (the reflection is only of what stands above the floor)
		vec3 V = normalize(v_eye - v_pos);
		float wpx = length(fwidth(lp)) + 0.004;
		vec3 col;

		if (k == 3) {
			// the glass, glowing; the stone and lead dark against it
			vec2 q = v_uv;
			if (pointedSD(q, HW, SILL, SPRING) < -0.005) discard;
			float open = glassOpen(q, max(wpx, 0.006));
			vec3 g = glassTint(q + (N.x < 0.0 ? 11.0 : 0.0));
			// brighter towards the top of each window, as the sky is
			g *= 0.85 + 0.35 * smoothstep(SILL, SPRING + 2.0, q.y);
			vec3 stoneCol = vec3(0.022, 0.002, 0.002) + g * 0.05;
			col = mix(stoneCol, g * 1.25, open);
		} else if (k == 6) {
			col = vec3(0.004, 0.0, 0.0);
		} else if (k == 7) {
			// the safelight's tube, glowing
			col = vec3(1.0, 0.16, 0.1) * (0.9 + 0.1 * sin(time * 100.0));
		} else {
			// the openings in the walls
			if (k == 1) {
				if (abs(N.x) > 0.5) {
					vec2 q = winLocal(lp.z, lp.y);
					if (pointedSD(q, HW, SILL, SPRING) > 0.0 && (lp.x > RW * 0.5 || leftOpen(lp.z) > 0.5)) discard;
				} else {
					vec2 q = vec2(lp.x - RW * 0.5, lp.y);
					if (lp.z < RL * 0.5 && abs(q.x) < DHW && q.y < DH) discard;
				}
			}
			vec3 alb;
			float spec = 0.0;
			if (k == 0) alb = vec3(0.40, 0.022, 0.026);
			else if (k == 13) alb = vec3(0.2, 0.18, 0.17) * (0.6 + 0.6 * rfbm(lp.xz * 1.3));
			else if (k == 12) alb = vec3(0.16, 0.15, 0.14) * (0.65 + 0.5 * rfbm(vec2(lp.x + lp.z, lp.y) * 1.7));
			else if (k == 14) { alb = vec3(0.22, 0.2, 0.2); spec = 1.0; }
			else if (k == 1) {
				// red plaster: uneven, faintly streaked, darker as it rises
				float n = rfbm(vec2(lp.z + lp.x, lp.y) * vec2(0.9, 0.35));
				float st = rnoise(vec2((lp.z + lp.x) * 7.0, lp.y * 0.25));
				alb = vec3(0.36, 0.022, 0.028) * (0.85 + 0.22 * n) * (0.94 + 0.08 * st);
				// the panelling below the dado rail
				if (lp.y < 1.0) alb *= 0.7;
			} else if (k == 2) alb = vec3(0.16, 0.012, 0.014) * (0.8 + 0.4 * rfbm(v_uv * 3.0));
			else if (k == 4) alb = vec3(0.22, 0.014, 0.018) * (0.75 + 0.4 * rfbm(lp.xz * 0.6));
			else if (k == 8) alb = vec3(0.016, 0.012, 0.012);
			else if (k == 9) {
				// white tiles gone red under the safelights, dark grout between
				vec2 tu = abs(N.y) > 0.5 ? lp.xz : (abs(N.x) > 0.5 ? vec2(lp.z, lp.y) : vec2(lp.x, lp.y));
				vec2 tg = abs(fract(tu / 0.105) - 0.5);
				float grout = smoothstep(0.465, 0.485, max(tg.x, tg.y)) * 0.8;
				float stain = rfbm(tu * 3.0);
				alb = mix(vec3(0.62, 0.56, 0.5) * (0.85 + 0.2 * stain), vec3(0.08, 0.06, 0.05), grout);
				spec = 1.0 - grout;
			}
			else if (k == 10) { alb = vec3(0.32, 0.31, 0.3); spec = 1.0; }
			else if (k == 11) alb = vec3(0.5, 0.36, 0.22);
			else { alb = vec3(0.17, 0.008, 0.012); spec = 1.0; }

			// light: straight through the windows, and back off the floor
			vec3 lit = vec3(0.0);
			float nl = max(0.0, dot(N, LDIR_L)) + max(0.0, dot(N, LDIR_R));
			if (flr) lit = redLight(lp, max(wpx * 0.6, 0.004)) * 3.2 * LDIR_L.y;
			else if (nl > 0.0) lit = redLight(lp + N * 0.02, max(wpx, 0.01)) * 2.0 * min(1.0, nl);
			vec3 amb = ambient(lp, N) * (flr ? 1.4 : 1.0);
			if (!flr) amb += bounce(lp, N);
			// the deep sides of the windows catch the glass's glow
			if (k == 2) {
				float sideL = lp.x < RW * 0.5 ? 1.0 : -1.0;
				vec2 q = winLocal(lp.z, lp.y);
				float depth = lp.x < RW * 0.5 ? -lp.x : lp.x - RW;
				if (abs(N.x) < 0.5 && lp.z > 0.5 && lp.z < RL - 0.5) amb += vec3(1.0, 0.08, 0.05) * 0.5 * smoothstep(0.0, RT * 0.6, depth) * (0.6 + 0.4 * rfbm(q * 2.0));
			}
			col = alb * (amb + lit);
			if (k == 14) col += amb * 0.5 * pow(1.0 - max(0.0, dot(N, V)), 3.0);
			// the far wall: the projector's picture
			if (k == 1 && N.z < -0.5 && lp.z > RL - 0.02) {
				vec3 pu = projUV(lp);
				if (pu.x > 0.0 && pu.x < 1.0 && pu.y > 0.0 && pu.y < 1.0) {
					float sh = projShadow(lp);
					vec3 pl = film(pu.xy) * sh;
					col += alb * pl * 4.4 + pl * 0.09;
				}
			}
			if (k == 8) {
				// black rubber: dull, but its round back catches a red line
				float fr = pow(1.0 - max(0.0, dot(N, V)), 2.5);
				col += (amb * 0.5 + lit * 0.2) * fr * 0.5 + amb * 0.05 * pow(max(0.0, dot(reflect(-V, N), normalize(vec3(0.0, 1.0, 0.3)))), 8.0);
			}
			if (k == 9 || k == 10) {
				// glazed tiles and steel: the bulb and the tube shine in them
				vec3 Rf = reflect(-V, N);
				vec3 bd = normalize(vec3(${f(DARK.bulb[0])}, ${f(DARK.bulb[1])}, ${f(DARK.bulb[2])}) - lp);
				float hl = pow(max(0.0, dot(Rf, bd)), k == 10 ? 60.0 : 120.0);
				float fr2 = pow(1.0 - max(0.0, dot(N, V)), 4.0);
				col += vec3(1.0, 0.12, 0.08) * hl * spec * (k == 10 ? 1.4 : 0.8) + amb * fr2 * 0.3 * spec;
			}
			if (k == 5) {
				// lacquered: a soft sheen of what is lit around it
				float fr = pow(1.0 - max(0.0, dot(N, V)), 3.0);
				col += (amb + lit * 0.4) * 0.6 * fr + bounce(lp, N) * 0.8 * fr;
			}

			if (flr) {
				// where the televisions stand, the floor is in their shadow
				if (k == 0 && lp.z > ${f(TV.z - 1.5)}) {
					float occ = 9.0;
					for (int i = 0; i < 12; i++) {
						vec2 c = (tvLo[i].xz + tvHi[i].xz) * 0.5, hs = (tvHi[i].xz - tvLo[i].xz) * 0.5;
						vec2 q = max(abs(lp.xz - c) - hs, 0.0);
						if (tvLo[i].y < 0.05) occ = min(occ, length(q));
					}
					float ao = 0.3 + 0.7 * smoothstep(0.0, 0.7, occ);
					col *= ao;
				}
				// THE FLOOR: red lacquer, wet. Gloss varies across it, like a
				// floor painted by hand and mopped: some of it a mirror, some
				// of it satin; the reflection smears along the line of sight
				float gl = smoothstep(0.25, 0.75, rfbm(lp.xz * 0.28 + 4.0));
				gl = mix(0.45, 1.0, gl);
				float ripple = rfbm(lp.xz * 1.7);
				vec2 grad = vec2(rnoise(lp.xz * 2.3 + vec2(0.05, 0.0)) - rnoise(lp.xz * 2.3 - vec2(0.05, 0.0)),
				                 rnoise(lp.xz * 2.3 + vec2(0.0, 0.05)) - rnoise(lp.xz * 2.3 - vec2(0.0, 0.05)));
				float cosV = max(0.02, V.y);
				float F = 0.05 + 0.95 * pow(1.0 - cosV, 5.0);
				float kr = mix(0.5, 0.92, F) * gl;
				vec3 rc = vec3(0.0);
				if (reflOn > 0.5 && mirrorOn > 0.5) {
					vec2 uv0 = gl_FragCoord.xy / reflSize + grad * 0.012;
					float blur = (1.0 - gl) * 0.02 + 0.0015 + ripple * 0.003;
					float wsum = 0.0;
					for (int i = -4; i <= 4; i++) {
						float fi = float(i);
						float wgt = exp(-fi * fi * 0.12);
						vec2 o = vec2(fi * blur * 0.18, fi * blur);
						rc += texture2D(reflTex, clamp(uv0 + o, vec2(0.001), vec2(0.999))).rgb * wgt;
						wsum += wgt;
					}
					rc /= wsum;
				} else {
					rc = vec3(0.05, 0.005, 0.005);
				}
				// and the windows' glow, softly, wherever the gloss would
				// catch it (a blurred mirror, wider the further it reaches)
				vec3 rd = normalize(v_pos - v_eye);
				vec3 r = vec3(rd.x, -rd.y, rd.z);
				vec3 sheen = vec3(0.0);
				for (int s = 0; s < 2; s++) {
					if (k != 0) break;
					float wx = s == 0 ? 0.0 : RW;
					float t = (wx - lp.x) / (abs(r.x) > 1e-4 ? r.x : 1e-4);
					if (t > 0.0) {
						vec3 h = lp + r * t;
						vec2 q = winLocal(h.z, h.y);
						float b = 0.12 + t * (0.05 + 0.12 * (1.0 - gl));
						float sd = pointedSD(q, HW, SILL, SPRING);
						sheen += vec3(0.95, 0.13, 0.08) * smoothstep(-b, b * 0.5, sd) * (0.7 + 0.3 * smoothstep(SILL, SPRING, h.y));
					}
				}
				rc += sheen * (0.35 + 0.4 * gl);
				// the lacquer tints what it mirrors
				rc *= vec3(1.15, 0.75, 0.72);
				col = col * (1.0 - kr * 0.6) + rc * kr * 1.5;
#ifdef DBG_REFL
				col = rc * 2.0;
#endif
			}
		}
		// the red haze of the room's air: far things sink into it
		float dist = length(v_eye - v_pos);
		col = mix(col, vec3(0.06, 0.004, 0.005), (1.0 - exp(-dist * 0.035)) * 0.55);
		gl_FragColor = vec4(col, 1.0);
	}`;


// the televisions: their cases (each set's own textures, in the room's red),
// and their screens: snow, and his memories coming through it
const TV_VERT = `
	precision highp float;
	uniform mat4 proj, view, model;
	uniform float yScale;
	attribute vec3 position, normal;
	attribute vec2 uv;
	attribute float flag;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_flag;
	void main() {
		vec4 w = model * vec4(position, 1.0);
		v_pos = w.xyz;
		v_nrm = mat3(model) * normal;
		v_uv = uv; v_flag = flag;
		vec3 t = view[3].xyz;
		v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
		v_eye.y *= yScale;
		vec3 p = w.xyz; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`;
const TV_FRAG = `
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, sigTime, yScale, seed, dark, nMem, emit;
	uniform sampler2D bodyTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_flag;
	${COMMON}
	${SHADE}

	float lum(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

	// THE SIGNAL. Each set has its own clock: the picture lasts a moment
	// (a second, three), then a cut, a burst of snow, and the next. Most of
	// the time it is snow; often a memory surfaces, drained, dark, torn by
	// the tube, washed red or cold; sometimes the set goes almost dead.
	vec3 signal(vec2 uv) {
		float t = sigTime + seed * 37.0;
		float rate = 0.42 + 0.35 * fract(seed * 7.13);
		float ph = t * rate;
		float seg = floor(ph);
		float f = fract(ph);
		float h0 = rhash(vec2(seg, seed * 91.0));
		float h1 = rhash(vec2(seed * 13.0, seg + 3.1));
		float fr = floor(sigTime * 24.0);
		// what this moment is
		float isMem = step(0.3, h0) * step(h0, 0.95);
		float isDead = step(0.95, h0);
		// the cut: snow for a breath either side of it, and the odd stutter
		float burst = 1.0 - smoothstep(0.0, 0.07, f) + smoothstep(0.95, 1.0, f);
		burst = max(burst, step(0.985, rhash(vec2(fr, seed * 5.0))));

		// snow: hard grains at the tube's own coarse resolution
		vec2 g = floor(uv * vec2(120.0, 90.0));
		float sn = rhash(g + vec2(fr * 17.3, fr * 3.7) + seed * 50.0);
		sn = mix(sn, sn * sn, 0.4);
		float hl = rhash(vec2(floor(uv.y * 112.0), fr + seed * 9.0));
		vec3 snow = vec3(0.86, 0.9, 0.98) * (0.16 + 0.84 * sn) * (0.85 + 0.3 * hl);

		// the memory: torn, wobbling, drifting slowly closer
		float k = floor(h1 * nMem);
		vec2 q = uv - 0.5;
		q *= 1.0 - 0.07 * f;
		q.x += sin(uv.y * 22.0 + t * 7.0) * 0.004;
		float line = floor(uv.y * 140.0);
		float jit = (rhash(vec2(line, fr)) - 0.5) * 0.012;
		// a band where the picture slips sideways
		float band = smoothstep(0.06, 0.0, abs(fract(uv.y * 0.7 - t * 0.31) - 0.5));
		jit += band * 0.05 * (rhash(vec2(fr, 2.0)) - 0.3);
		q.x += jit;
		vec2 mu = clamp((floor((q + 0.5) * vec2(150.0, 112.0)) + 0.5) / vec2(150.0, 112.0), 0.002, 0.998);
		vec2 tile = vec2(mod(k, 6.0), floor(k / 6.0));
		vec2 au = (tile + vec2(mu.x, 1.0 - mu.y)) / 6.0;
		vec2 ca = vec2(0.004 + 0.01 * band, 0.0) / 6.0;
		vec3 m = vec3(texture2D(memTex, au + ca).r, texture2D(memTex, au).g, texture2D(memTex, au - ca).b);
		// drained and darkened, the shadows crushed
		float l = lum(m);
		l = pow(clamp(l * 1.1, 0.0, 1.0), 1.3);
		vec3 mono = vec3(l);
		// washed red, or cold and grey
		float red = step(0.62, rhash(vec2(seg, 7.0 + seed)));
		vec3 tint = mix(vec3(0.78, 0.86, 0.95), vec3(1.15, 0.28, 0.22), red);
		m = mix(mono * tint, mix(vec3(l), m, 0.5) * 1.05, 0.22);
		// the odd frame in negative
		if (rhash(vec2(fr, seed * 3.0)) > 0.992) m = vec3(0.9) - m;
		// grain over it, and the snow showing through
		float gr = rhash(g * 1.7 + fr) - 0.5;
		m += gr * 0.16;
		m = mix(m, snow * 0.5, 0.08 + 0.25 * band);
		m *= 0.85 + 0.15 * sin(t * 50.0) * sin(t * 3.0);

		vec3 dead = snow * 0.06 + vec3(0.02) * sn;
		vec3 c = mix(snow, m, isMem);
		c = mix(c, dead, isDead);
		c = mix(c, snow * 1.1, clamp(burst, 0.0, 1.0));
		// a white bar tearing through, now and then
		float bar = step(0.9, rhash(vec2(floor(t * 1.7), seed * 4.0)));
		float by = fract(t * 0.9 + seed);
		c = mix(c, vec3(1.0), bar * smoothstep(0.045, 0.0, abs(uv.y - by)) * 0.95);
		// the rolling hum bar, scan lines, the tube's dark corners
		c *= 0.82 + 0.18 * smoothstep(0.0, 0.25, abs(fract(uv.y - t * 0.12) - 0.5));
		// (scan lines only where the screen is big enough on the picture
		// to show them: smaller, they would shimmer into moire)
		float slw = fwidth(uv.y) * 115.0;
		c *= 1.0 - 0.22 * (0.5 - 0.5 * sin(uv.y * 3.14159 * 230.0)) * (1.0 - smoothstep(0.2, 0.45, slw));
		vec2 e = uv * (1.0 - uv);
		c *= clamp(pow(e.x * e.y * 20.0, 0.3), 0.0, 1.0);
		return c;
	}

	void main() {
		vec3 lp = v_pos - RO;
		vec3 N = normalize(v_nrm);
		vec3 V = normalize(v_eye - v_pos);
		if (dot(N, V) < 0.0) N = -N;
		float fr = pow(1.0 - max(0.0, dot(N, V)), 4.0);
		vec3 amb = ambient(lp, N) + bounce(lp, N);
		vec3 col;
		if (v_flag > 0.5) {
			// the tube's light, a little warmed and dimmed by the room
			vec3 sg = signal(v_uv);
			col = mix(sg, sg * vec3(1.0, 0.78, 0.74), 0.35) * 0.78;
			// the curved glass catches the room: its red, the windows' glow
			col += amb * 0.65 * (0.08 + fr) + vec3(0.05, 0.004, 0.004);
		} else {
			vec4 tx = texture2D(bodyTex, v_uv);
			if (emit > 0.0) {
				// a lit bulb: the filament's glow through the red glass
				float fr2 = pow(max(0.0, dot(N, V)), 1.5);
				gl_FragColor = vec4(vec3(1.0, 0.18, 0.1) * emit * (0.55 + 0.6 * fr2), 1.0);
				return;
			}
			if (tx.a < 0.35) discard;
			vec3 alb = tx.rgb * tx.rgb * dark;
			vec3 lit = vec3(0.0);
			float nl = max(0.0, dot(N, LDIR_L)) + max(0.0, dot(N, LDIR_R));
			if (nl > 0.0) lit = redLightRough(lp + N * 0.05) * 1.6 * min(1.0, nl);
			// the projector's light grazing the tops of the sets in its way
			vec3 pu = projUV(lp);
			if (pu.z > 0.0 && pu.x > 0.0 && pu.x < 1.0 && pu.y > 0.0 && pu.y < 1.0) {
				vec3 Lp = normalize(vec3(${f(PROJ.lens[0])}, ${f(PROJ.lens[1])}, ${f(PROJ.lens[2])}) - lp);
				lit += film(vec2(0.5)) * 1.4 * max(0.0, dot(N, Lp)) * (0.7 + 0.3 * rnoise(v_uv * 40.0));
			}
			col = alb * (amb + lit);
			// worn plastic and veneer: a red sheen along the edges, as in
			// the reference, where the room's light rims every set
			col += (amb * 0.9 + lit * 0.3 + vec3(0.25, 0.02, 0.02)) * fr * 0.45;
		}
		float dist = length(v_eye - v_pos);
		col = mix(col, vec3(0.06, 0.004, 0.005), (1.0 - exp(-dist * 0.035)) * 0.55);
		gl_FragColor = vec4(col, 1.0);
	}`;


// the polaroids: white card gone red under the safelight, and in it a
// photograph too dark and too soft to be sure of
const POL_VERT = `
	precision highp float;
	uniform mat4 proj, view;
	uniform float yScale, time;
	attribute vec3 position, normal;
	attribute vec2 uv;
	attribute float pic;
	attribute vec4 pivot;
	attribute float style;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_pic, v_style;
	void main() {
		vec3 q = position, n = normal;
		v_style = style;
		vec3 t0 = view[3].xyz;
		vec3 eye0 = -vec3(dot(view[0].xyz, t0), dot(view[1].xyz, t0), dot(view[2].xyz, t0));
		eye0.y *= yScale;
		// the air the camera stirs as it comes close
		float prox = 1.0 + 2.4 * smoothstep(3.6, 0.7, length(eye0 - pivot.xyz));
		if (pivot.w < 0.0) {
			// a print on a darkroom line (the line runs along z): it swings
			// out from the line and turns on its peg
			float w = -pivot.w * prox;
			float a = w * sin(time * 0.8 + pivot.z * 2.3) + w * 0.4 * sin(time * 2.1 + pivot.z * 5.1);
			float tw = w * 1.6 * sin(time * 0.55 + pivot.z * 3.7) + w * 0.5 * sin(time * 1.3 + pivot.z * 1.9);
			vec3 d = q - pivot.xyz;
			float c = cos(a), s = sin(a);
			d = vec3(d.x * c - d.y * s, d.x * s + d.y * c, d.z);
			n = vec3(n.x * c - n.y * s, n.x * s + n.y * c, n.z);
			c = cos(tw); s = sin(tw);
			d = vec3(d.x * c - d.z * s, d.y, d.x * s + d.z * c);
			n = vec3(n.x * c - n.z * s, n.y, n.x * s + n.z * c);
			q = pivot.xyz + d;
		}
		if (pivot.w > 0.0) {
			// stirring on its peg, in the room's slow air
			float pw = pivot.w * prox;
			float a = pw * sin(time * 0.7 + pivot.x * 1.7) + pw * 0.4 * sin(time * 1.9 + pivot.x * 4.1);
			float r = pw * 0.6 * sin(time * 0.5 + pivot.x * 2.3);
			vec3 d = q - pivot.xyz;
			float c = cos(a), s = sin(a);
			d = vec3(d.x, d.y * c - d.z * s, d.y * s + d.z * c);
			n = vec3(n.x, n.y * c - n.z * s, n.y * s + n.z * c);
			c = cos(r); s = sin(r);
			d = vec3(d.x * c - d.y * s, d.x * s + d.y * c, d.z);
			q = pivot.xyz + d;
		}
		v_pos = q; v_nrm = n; v_uv = uv; v_pic = pic;
		vec3 t = view[3].xyz;
		v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
		v_eye.y *= yScale;
		vec3 p = q; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`;
const POL_FRAG = `
	precision highp float;
	uniform float time, yScale;
	uniform sampler2D polTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_pic, v_style;
	${COMMON}
	${SHADE}
	void main() {
		vec3 lp = v_pos - RO;
		vec3 N = normalize(v_nrm);
		vec3 V = normalize(v_eye - v_pos);
		bool back = !gl_FrontFacing;
		if (dot(N, V) < 0.0) N = -N;
		// the card: aged paper, a little grimy
		float grime = rnoise(v_uv * vec2(9.0, 11.0) + v_pic * 3.1);
		vec3 alb = vec3(0.82, 0.78, 0.72) * (0.82 + 0.18 * grime);
		vec2 u = v_uv;
		// a polaroid's frame, or a darkroom print's thin even border
		vec4 fr4 = v_style > 0.5 ? vec4(0.06, 0.94, 0.05, 0.95) : vec4(0.065, 0.935, 0.235, 0.94);
		bool inPic = !back && u.x > fr4.x && u.x < fr4.y && u.y > fr4.z && u.y < fr4.w;
		if (inPic) {
			vec2 pu = vec2((u.x - fr4.x) / (fr4.y - fr4.x), 1.0 - (u.y - fr4.z) / (fr4.w - fr4.z));
			vec2 tile = vec2(mod(v_pic, 6.0), floor(v_pic / 6.0));
			vec3 ph = texture2D(polTex, (tile + clamp(pu, 0.01, 0.99)) / 6.0).rgb;
			// burnt in a little at the edges, as if the chemistry ran out
			vec2 e = pu * (1.0 - pu);
			ph *= 0.62 + 0.38 * clamp(e.x * e.y * 18.0, 0.0, 1.0);
			alb = ph * 0.85 + 0.012;
		}
		vec3 amb = ambient(lp, N) + bounce(lp, N);
		float nl = max(0.0, dot(N, LDIR_L)) + max(0.0, dot(N, LDIR_R));
		vec3 lit = nl > 0.0 ? redLightRough(lp + N * 0.03) * 1.5 * min(1.0, nl) : vec3(0.0);
		vec3 col = alb * (amb * 1.15 + lit);
		// the photographs are glossy
		if (inPic) col += (amb * 0.35) * pow(1.0 - max(0.0, dot(N, V)), 3.0);
		float dist = length(v_eye - v_pos);
		col = mix(col, vec3(0.06, 0.004, 0.005), (1.0 - exp(-dist * 0.035)) * 0.55);
		gl_FragColor = vec4(col, 1.0);
	}`;

// the projector's beam: nested cones of light from the lens to the picture,
// carrying the picture's own light and the smoke drifting through it
const BEAM_VERT = `
	precision highp float;
	uniform mat4 proj, view;
	uniform float yScale;
	attribute vec3 position;
	attribute float layer;
	varying vec3 v_pos, v_eye;
	varying float v_layer;
	void main() {
		v_pos = position; v_layer = layer;
		vec3 t = view[3].xyz;
		v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
		vec3 p = position; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`;
const BEAM_FRAG = `
	precision highp float;
	uniform float time;
	varying vec3 v_pos, v_eye;
	varying float v_layer;
	${COMMON}
	${SHADE}
	void main() {
		vec3 lp = v_pos - RO;
		vec3 pu = projUV(lp);
		vec2 uv = clamp(pu.xy, 0.0, 1.0);
		// what the film is showing just there, blurred by the smoke
		// (only the picture's broad light and the lamp's flicker: in the air the
		// picture itself never reads)
		vec3 fl = film(floor(uv * 4.0) / 4.0 + 0.125) * 0.35 + film(vec2(0.5)) * 0.65;
		float smoke = rfbm(vec2(lp.x * 0.8 + time * 0.05, lp.y * 0.7 - lp.z * 0.12 + time * 0.03)) * rfbm(vec2(lp.z * 0.5 - time * 0.04, lp.y * 0.9));
		float along = pu.z;
		// soft at its edges, as a beam through smoke is
		// (each layer is a smaller copy of the beam inside the last: the
		// further in, the denser, so the light gathers to a core)
		vec2 eg = min(pu.xy, 1.0 - pu.xy);
		float edge = smoothstep(0.0, 0.5, min(eg.x, eg.y));
		// strong at the lens, thinning out towards the wall
		fl = max(fl, vec3(0.3, 0.24, 0.17));
		float a = (0.35 + 2.2 * smoke) * (0.3 + 0.7 * exp(-along * 2.4)) * smoothstep(0.0, 0.03, along) + 2.2 * exp(-along * 10.0) * (0.6 + 0.8 * smoke);
		float dist = length(v_eye - v_pos);
		gl_FragColor = vec4(fl * a * edge * 0.075 * smoothstep(0.25, 1.4, dist), 1.0);
	}`;


// THE TRAYS' LIQUID: black, still but for a slow tremor, the bulb shining
// in it; under it a print: in the developer his childhood photograph,
// coming up as the camera draws near; in the fixer one of the memories
const LIQ_VERT = `
	precision highp float;
	uniform mat4 proj, view;
	uniform float yScale;
	attribute vec3 position;
	attribute float tray;
	varying vec3 v_pos, v_eye;
	varying float v_tray;
	void main() {
		v_pos = position; v_tray = tray;
		vec3 t = view[3].xyz;
		v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
		v_eye.y *= yScale;
		vec3 p = position; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`;
const LIQ_FRAG = `
	precision highp float;
	uniform float time;
	uniform sampler2D printTex, polTex;
	varying vec3 v_pos, v_eye;
	varying float v_tray;
	${COMMON}
	${SHADE}
	const vec3 BULB = vec3(${f(DARK.bulb[0])}, ${f(DARK.bulb[1])}, ${f(DARK.bulb[2])});
	void main() {
		vec3 lp = v_pos - RO;
		int k = int(v_tray + 0.5);
		float zc = k == 0 ? ${f(DARK.trays[0])} : (k == 1 ? ${f(DARK.trays[1])} : ${f(DARK.trays[2])});
		vec2 tl = vec2(lp.x - ${f(DARK.TXc)}, lp.z - zc);
		vec3 V = normalize(v_eye - v_pos);
		// the surface: a faint, slow tremor, and now and then a ring where
		// a drop falls from the tongs
		vec2 q = tl * 9.0;
		float e = 0.04;
		float h0 = rnoise(q + time * 0.25) + rnoise(q * 2.3 - time * 0.4) * 0.5;
		float hx = rnoise(q + vec2(e, 0.0) + time * 0.25) + rnoise((q + vec2(e, 0.0)) * 2.3 - time * 0.4) * 0.5;
		float hz = rnoise(q + vec2(0.0, e) + time * 0.25) + rnoise((q + vec2(0.0, e)) * 2.3 - time * 0.4) * 0.5;
		vec2 g = vec2(hx - h0, hz - h0) / e * 0.012;
		float rt = fract(time * 0.18 + float(k) * 0.37);
		vec2 rc = vec2(0.09 - float(k) * 0.05, 0.13 - float(k) * 0.08);
		float rd = length(tl - rc);
		float ring = sin((rd - rt * 0.25) * 140.0) * exp(-rd * 14.0) * (1.0 - rt) * smoothstep(rt * 0.25 + 0.02, rt * 0.25 - 0.01, rd);
		g += normalize(tl - rc + 1e-4) * ring * 0.05;
		vec3 n = normalize(vec3(-g.x, 1.0, -g.y));
		// through the surface to what lies under it
		vec3 rf = refract(-V, n, 0.75);
		float depth = 0.022;
		vec2 under = tl + rf.xz * depth / max(0.2, -rf.y);
		vec3 base = vec3(0.012, 0.009, 0.008);
		vec3 lit = darkLight(vec3(lp.x, lp.y - depth, lp.z), vec3(0.0, 1.0, 0.0)) + ambient(lp, vec3(0.0, 1.0, 0.0)) * 0.6;
		if (k == 0) {
			// the print, turned a little in the tray
			// it floats: drifting a little, turning a little, never still
			float an = 0.11 + 0.05 * sin(time * 0.23) + 0.02 * sin(time * 0.71 + 1.3);
			vec2 off = vec2(0.012, -0.03) + vec2(sin(time * 0.17) * 0.014, sin(time * 0.13 + 2.0) * 0.018);
			vec2 pq = under - off;
			pq = vec2(cos(an) * pq.x - sin(an) * pq.y, sin(an) * pq.x + cos(an) * pq.y);
			// (across the tray is the print's height; along it its width)
			vec2 hsz = k == 0 ? vec2(0.112, 0.162) : vec2(0.13, 0.13);
			vec2 pu = vec2(pq.y / hsz.y, -pq.x / hsz.x) * 0.5 + 0.5;
			if (pu.x > 0.0 && pu.x < 1.0 && pu.y > 0.0 && pu.y < 1.0) {
				float paper = 0.78;
				vec2 iu = (pu - 0.045) / 0.91;
				if (iu.x > 0.0 && iu.x < 1.0 && iu.y > 0.0 && iu.y < 1.0) {
					float im;
					if (k == 0) {
						im = texture2D(printTex, vec2(iu.x, 1.0 - iu.y)).r;
						// developing: the shadows come first, then the
						// middle tones, as the camera draws near
						float dev = smoothstep(2.6, 1.05, length(v_eye - v_pos));
						dev = clamp(dev * 1.25 - 0.05, 0.0, 1.0);
						float thr = dev * 1.35 - 0.1;
						im = mix(1.0, im, smoothstep(thr, thr - 0.3, im));
					} else {
						im = texture2D(polTex, (vec2(2.0, 1.0) + vec2(iu.x, 1.0 - iu.y)) / 6.0).r;
					}
					paper *= mix(0.06, 1.0, im);
				}
				base = vec3(paper) * vec3(0.92, 0.9, 0.85);
			}
		}
		// the liquid swallows light: what is under it is dim and warm; the
		// print rides just under the surface and its edge lifts a ripple
		vec3 col = base * lit * vec3(0.62, 0.5, 0.42);
		// and its surface is a black mirror: the bulb, and the room's red
		float F = 0.03 + 0.97 * pow(1.0 - max(0.0, dot(n, V)), 5.0);
		vec3 R = reflect(-V, n);
		vec3 bd = BULB - lp;
		float bl = length(bd);
		float hit = pow(max(0.0, dot(R, bd / bl)), 2200.0 * bl * bl + 200.0);
		col += vec3(1.0, 0.16, 0.1) * hit * 6.0;
		col += ambient(lp + R * 0.6, -R) * 0.35 * F + vec3(0.12, 0.01, 0.01) * F;
		float dist = length(v_eye - v_pos);
		col = mix(col, vec3(0.06, 0.004, 0.005), (1.0 - exp(-dist * 0.035)) * 0.55);
		gl_FragColor = vec4(col, 1.0);
	}`;

// dust in the red air: it shows only where the beams are
const DUST_VERT = `
	precision highp float;
	uniform mat4 proj, view;
	uniform float time, pxScale;
	attribute vec4 seed;
	varying float v_b, v_w;
	${COMMON}
	void main() {
		vec3 lp = vec3(0.3 + seed.x * (RW - 0.6), 0.2 + seed.y * (RH - 0.5), 0.3 + seed.z * (RL - 0.6));
		float t = time * (0.03 + 0.03 * seed.w);
		lp += vec3(sin(t * 3.1 + seed.w * 40.0) * 0.35, sin(t * 1.7 + seed.x * 30.0) * 0.4 - t * 0.6, cos(t * 2.3 + seed.z * 50.0) * 0.35);
		lp.y = 0.2 + mod(lp.y - 0.2, RH - 0.5);
		vec3 c = redLightAir(lp);
		v_b = dot(c, vec3(0.6, 0.3, 0.1));
		// and in the projector's beam, lit warm
		vec3 L0 = vec3(${f(PROJ.lens[0])}, ${f(PROJ.lens[1])}, ${f(PROJ.lens[2])});
		vec3 dd = lp - L0;
		float s = (${f(L)} - L0.z) / max(dd.z, 1e-4);
		vec3 hh = L0 + dd * s;
		vec2 pu = vec2((hh.x - ${f(PROJ.img.x - PROJ.img.w / 2)}) / ${f(PROJ.img.w)}, (hh.y - ${f(PROJ.img.y - PROJ.img.h / 2)}) / ${f(PROJ.img.h)});
		v_w = (dd.z > 0.2 && pu.x > 0.0 && pu.x < 1.0 && pu.y > 0.0 && pu.y < 1.0) ? 1.6 : 0.0;
		vec4 v = view * vec4(lp + RO, 1.0);
		gl_Position = proj * v;
		float tw = 0.6 + 0.4 * sin(time * (1.0 + seed.w * 2.0) + seed.x * 80.0);
		v_b *= tw;
		gl_PointSize = clamp(pxScale * (0.012 + 0.012 * seed.w) / max(0.2, -v.z), 1.0, 6.0);
	}`;
const DUST_FRAG = `
	precision highp float;
	varying float v_b, v_w;
	void main() {
		vec2 d = gl_PointCoord - 0.5;
		float a = smoothstep(0.5, 0.0, length(d));
		gl_FragColor = vec4((vec3(1.0, 0.14, 0.09) * min(v_b, 1.4) + vec3(1.0, 0.8, 0.55) * v_w) * a * 0.55, 1.0);
	}`;

// ------------------------------------------------------------------
module.exports = function (regl) {
	const geo = build();
	const buf = {
		position: regl.buffer(geo.pos),
		normal: regl.buffer(geo.nrm),
		kind: regl.buffer(geo.kind),
		uv: regl.buffer(geo.uv)
	};
	const elements = regl.elements({ data: geo.idx.length > 65535 ? new Uint32Array(geo.idx) : new Uint16Array(geo.idx), type: geo.idx.length > 65535 ? 'uint32' : 'uint16' });

	// the reflection under the floor: drawn into a picture of its own at
	// half the size, not every frame (as in the studio)
	const reflColor = regl.texture({ width: 4, height: 4, min: 'linear', mag: 'linear', wrap: 'clamp' });
	const reflFbo = regl.framebuffer({ color: reflColor, depth: true });
	const reflScope = regl({ framebuffer: reflFbo });
	const reflDummy = regl.texture({ width: 1, height: 1, data: [0, 0, 0, 255] });
	const scope = regl({});
	let reflTex = reflDummy, reflOn = 0, reflCount = 0, reflReady = false;
	const reflSize = [4, 4];

	const tvLight = [0, 0, 0, 0];
	// the projector's film clock, the memories, and the televisions' boxes
	// (for their shadows in the beam), shared by every shader that lights
	let memTexShared = null;
	const memDummy = regl.texture({ width: 1, height: 1, data: [0, 0, 0, 255] });
	// the neon sign's flicker: mostly lit, now and then it stutters
	let signNow = 1;
	const signFlicker = (t) => {
		const h = (x) => { const s = Math.sin(x * 127.1) * 43758.5453; return s - Math.floor(s); };
		const slot = Math.floor(t * 9.0);
		const r = h(slot), r2 = h(Math.floor(t * 0.7));
		let v = 0.92 + 0.08 * Math.sin(t * 120.0);
		if (r2 > 0.55 && r > 0.6) v = r > 0.85 ? 0.08 : 0.45;
		return v;
	};
	const SHARED = {
		signK: () => signNow,
		memTex: () => memTexShared || memDummy,
		projT: (ctx) => (typeof window !== 'undefined' && window.__tvTime != null ? window.__tvTime : ctx.time)
	};
	TV.stack.forEach((t, i) => {
		const m = TV.models[t[0]], G = TV.G;
		SHARED['tvLo[' + i + ']'] = [W / 2 + t[2] - m.w * G / 2, t.base, TV.z + t[4] - 0.02];
		SHARED['tvHi[' + i + ']'] = [W / 2 + t[2] + m.w * G / 2, t.base + m.h * G, TV.z + t[4] + m.d * G];
	});
	const room = regl({
		vert: VERT,
		frag: FRAG,
		attributes: buf,
		elements,
		cull: { enable: false },
		uniforms: {
			reflTex: () => reflTex,
			reflSize: () => reflSize,
			reflOn: () => reflOn,
			tvLight: () => tvLight,
			...SHARED
		}
	});

	// ---- the televisions ------------------------------------------------
	// their flicker, as a light on the room in front of them

	const loadImg = (url) => new Promise((ok, fail) => {
		const im = new Image();
		// (mipmaps only where the picture's sides are powers of two)
		const pot = (n) => (n & (n - 1)) === 0;
		im.onload = () => ok(regl.texture({ data: im, min: pot(im.width) && pot(im.height) ? 'mipmap' : 'linear', mag: 'linear', wrap: 'clamp' }));
		im.onerror = fail;
		im.src = url;
	});
	const tvSets = TV.stack.map((t, i) => {
		const [name, , dx, yawDeg, dz] = t;
		// turned to face the door (the sets face +z)
		const a = Math.PI + yawDeg * Math.PI / 180, G = TV.G;
		const c = Math.cos(a) * G, sn = Math.sin(a) * G;
		const x = O[0] + W / 2 + dx, y = O[1] + t.base, z = O[2] + TV.z + dz;
		return { name, seed: ((i + 1) * 0.6180339) % 1, model: [c, 0, -sn, 0, 0, G, 0, 0, sn, 0, c, 0, x, y, z, 1] };
	});
	const tvModels = {};
	let memTex = null;
	const NMEM = 36;
	const tvCmd = regl({
		vert: TV_VERT,
		frag: TV_FRAG,
		attributes: {
			position: { buffer: regl.prop('vb'), stride: 36, offset: 0 },
			normal: { buffer: regl.prop('vb'), stride: 36, offset: 12 },
			uv: { buffer: regl.prop('vb'), stride: 36, offset: 24 },
			flag: { buffer: regl.prop('vb'), stride: 36, offset: 32 }
		},
		elements: regl.prop('el'),
		offset: regl.prop('offset'),
		count: regl.prop('count'),
		cull: { enable: false },
		uniforms: {
			model: regl.prop('model'),
			seed: regl.prop('seed'),
			dark: regl.prop('dark'),
			emit: (ctx, p) => p.emit || 0,
			bodyTex: regl.prop('tex'),
			...SHARED,
			memTex: () => memTex || memDummy,
			nMem: NMEM,
			// (tests may hold the screens' clock: window.__tvTime)
			sigTime: (ctx) => (typeof window !== 'undefined' && window.__tvTime != null ? window.__tvTime : ctx.time),
			tvLight: () => tvLight
		}
	});
	loadImg('res/redroom/memories.webp').then((t) => { memTex = t; memTexShared = t; }).catch((e) => console.error('The memories did not load', e));
	for (const name in TV.models) {
		const M = TV.models[name];
		const texs = [];
		for (let k = 0; k < M.tex; k++) texs.push(loadImg('res/redroom/tv_' + name + '_' + k + '.webp'));
		Promise.all([fetch(M.file).then((r) => r.arrayBuffer()), ...texs]).then(([buf, ...tex]) => {
			const hd = new Uint32Array(buf, 0, 4);
			const nV = hd[0], nI = hd[1], nS = hd[2], big = hd[3];
			const sub = new Int32Array(buf, 16, nS * 3);
			const vOff = 16 + nS * 12;
			const vb = regl.buffer(new Float32Array(buf, vOff, nV * 9));
			const iOff = vOff + nV * 36;
			const idx = big ? new Uint32Array(buf.slice(iOff, iOff + nI * 4)) : new Uint16Array(buf.slice(iOff, iOff + nI * 2));
			const el = regl.elements({ data: idx, type: big ? 'uint32' : 'uint16' });
			const parts = [];
			for (let i = 0; i < nS; i++) parts.push({ offset: sub[i * 3], count: sub[i * 3 + 1], tex: sub[i * 3 + 2] >= 0 ? tex[sub[i * 3 + 2]] : tex[0] });
			tvModels[name] = { vb, el, parts, dark: M.dark };
		}).catch((e) => console.error('A television did not load', e));
	}
	const tvBatch = [];
	const drawTvs = () => {
		if (!memTex) return;
		tvBatch.length = 0;
		for (const s of tvSets) {
			const m = tvModels[s.name];
			if (!m) continue;
			for (const p of m.parts) tvBatch.push({ vb: m.vb, el: m.el, offset: p.offset, count: p.count, tex: p.tex, model: s.model, seed: s.seed, dark: m.dark });
		}
		if (tvBatch.length) tvCmd(tvBatch);
	};


	// ---- the polaroids ----------------------------------------------------
	const pg = buildPolaroids();
	let polTex = null;
	loadImg('res/redroom/polaroids.webp').then((t) => { polTex = t; }).catch((e) => console.error('The photographs did not load', e));
	const polDraw = regl({
		vert: POL_VERT,
		frag: POL_FRAG,
		attributes: { position: pg.pos, normal: pg.nrm, uv: pg.uv, pic: pg.pic, style: pg.sty, pivot: { buffer: regl.buffer(pg.piv), size: 4 } },
		elements: regl.elements({ data: new Uint16Array(pg.idx), type: 'uint16' }),
		cull: { enable: false },
		uniforms: { ...SHARED, polTex: () => polTex, tvLight: () => tvLight }
	});



	// ---- the projector, its table, its beam ------------------------------
	const loadPart = (file, texNames) => Promise.all([fetch(file).then((r) => r.arrayBuffer()), ...texNames.map(loadImg)]).then(([buf, ...tex]) => {
		const hd = new Uint32Array(buf, 0, 4);
		const nV = hd[0], nI = hd[1], nS = hd[2], big = hd[3];
		const sub = new Int32Array(buf, 16, nS * 3);
		const vOff = 16 + nS * 12, iOff = vOff + nV * 36;
		const vb = regl.buffer(new Float32Array(buf, vOff, nV * 9));
		const idx = big ? new Uint32Array(buf.slice(iOff, iOff + nI * 4)) : new Uint16Array(buf.slice(iOff, iOff + nI * 2));
		const el = regl.elements({ data: idx, type: big ? 'uint32' : 'uint16' });
		const parts = [];
		for (let i = 0; i < nS; i++) parts.push({ offset: sub[i * 3], count: sub[i * 3 + 1], tex: tex[Math.max(0, sub[i * 3 + 2])], mat: sub[i * 3 + 2] });
		return { vb, el, parts };
	});
	const mul = (a, b) => {
		const o = new Array(16);
		for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) o[c * 4 + r] = a[r] * b[c * 4] + a[4 + r] * b[c * 4 + 1] + a[8 + r] * b[c * 4 + 2] + a[12 + r] * b[c * 4 + 3];
		return o;
	};
	const trans = (x, y, z) => [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
	const rotX = (a) => { const c = Math.cos(a), s = Math.sin(a); return [1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1]; };
	const projBase = mul(trans(O[0] + PROJ.x, O[1] + PROJ.table, O[2] + PROJ.z), rotX(-PROJ.pitch));
	const K_ = PROJ.tableK;
	const tableM = [K_, 0, 0, 0, 0, K_, 0, 0, 0, 0, K_, 0, O[0] + W / 2, O[1], O[2] + 15.0, 1];
	const props = {};
	const pTex = ['res/redroom/proj_0.webp'];
	loadPart('res/redroom/proj_body.bin', pTex).then((m) => { props.body = m; }).catch((e) => console.error(e));
	loadPart('res/redroom/proj_feed.bin', pTex).then((m) => { props.feed = m; }).catch((e) => console.error(e));
	loadPart('res/redroom/proj_takeup.bin', pTex).then((m) => { props.takeup = m; }).catch((e) => console.error(e));
	loadPart('res/redroom/table_all.bin', ['res/redroom/table_0.webp']).then((m) => { props.table = m; }).catch((e) => console.error(e));
	// a reel turned about its own hub
	const reel = (hub, a) => mul(projBase, mul(trans(hub[0], hub[1], hub[2]), mul(rotX(a), trans(-hub[0], -hub[1], -hub[2]))));
	const propBatch = [];
	const drawProps = (t) => {
		propBatch.length = 0;
		const add = (m, model, dark) => { if (m) for (const p of m.parts) propBatch.push({ vb: m.vb, el: m.el, offset: p.offset, count: p.count, tex: p.tex, model, seed: 0, dark }); };
		add(props.table, tableM, 0.9);
		add(props.body, projBase, 1.0);
		// the reels: the film runs at its own pace, the take-up a little faster
		add(props.feed, reel(PROJ.feed, -t * 2.6), 1.0);
		add(props.takeup, reel(PROJ.takeup, -t * 3.5), 1.0);
		if (propBatch.length) tvCmd(propBatch);
	};
	// the beam: three cones of light, one inside the other
	const beamPos = [], beamLayer = [];
	{
		const Lw = [O[0] + PROJ.lens[0], O[1] + PROJ.lens[1], O[2] + PROJ.lens[2]];
		[0.96, 0.86, 0.76, 0.66, 0.56, 0.46, 0.36].forEach((sc, li) => {
			const hw = PROJ.img.w / 2 * sc, hh = PROJ.img.h / 2 * sc;
			const c = [[-hw, -hh], [hw, -hh], [hw, hh], [-hw, hh]].map(([x, y]) => [O[0] + PROJ.img.x + x, O[1] + PROJ.img.y + y, O[2] + L - 0.02]);
			for (let i = 0; i < 4; i++) {
				const a = c[i], b = c[(i + 1) % 4];
				beamPos.push(...Lw, ...a, ...b);
				beamLayer.push(li, li, li);
			}
		});
	}
	const beamDraw = regl({
		vert: BEAM_VERT, frag: BEAM_FRAG,
		attributes: { position: beamPos, layer: beamLayer },
		count: beamPos.length / 3,
		cull: { enable: false },
		depth: { enable: true, mask: false },
		blend: { enable: true, func: { src: 'one', dst: 'one' } },
		uniforms: { ...SHARED, tvLight: () => tvLight }
	});
	// the lens: a hot point of light
	const lensDraw = regl({
		vert: `precision highp float; uniform mat4 proj, view; uniform float yScale, pxScale; attribute vec3 position; void main() { vec3 p = position; p.y *= yScale; vec4 v = view * vec4(p, 1.0); gl_Position = proj * v; gl_PointSize = clamp(pxScale * 0.22 / max(0.3, -v.z), 4.0, 220.0); }`,
		frag: `precision highp float; uniform float time; void main() { vec2 d = gl_PointCoord - 0.5; float r = length(d); float a = exp(-r * r * 160.0) * 1.6 + 0.35 * exp(-r * r * 30.0) + 0.12 * exp(-r * r * 8.0) + 0.5 * exp(-d.y * d.y * 2500.0) * exp(-abs(d.x) * 7.0); gl_FragColor = vec4(vec3(1.0, 0.84, 0.62) * a * (0.9 + 0.1 * sin(time * 37.0)), 1.0); }`,
		attributes: { position: [O[0] + PROJ.lens[0], O[1] + PROJ.lens[1], O[2] + PROJ.lens[2] + 0.01] },
		count: 1,
		primitive: 'points',
		depth: { enable: true, mask: false },
		blend: { enable: true, func: { src: 'one', dst: 'one' } },
		uniforms: { pxScale: (ctx) => ctx.viewportHeight * 1.2 }
	});


	// ---- the darkroom: its liquid, its bottles, its bulb, its pegs ---------
	let printTex = null;
	loadImg('res/redroom/print.webp').then((t) => { printTex = t; }).catch((e) => console.error(e));
	const liqPos = [], liqTray = [];
	DARK.trays.forEach((zc, i) => {
		const hx = DARK.TX / 2 - 0.009, hz = DARK.TZ / 2 - 0.009, xc = DARK.TXc, y = DARK.liquid;
		const c = [[xc - hx, zc - hz], [xc + hx, zc - hz], [xc + hx, zc + hz], [xc - hx, zc + hz]].map(([x, z]) => [O[0] + x, O[1] + y, O[2] + z]);
		liqPos.push(...c[0], ...c[2], ...c[1], ...c[0], ...c[3], ...c[2]);
		for (let k = 0; k < 6; k++) liqTray.push(i);
	});
	const liqDraw = regl({
		vert: LIQ_VERT, frag: LIQ_FRAG,
		attributes: { position: liqPos, tray: liqTray },
		count: liqPos.length / 3,
		cull: { enable: false },
		uniforms: { ...SHARED, tvLight: () => tvLight, printTex: () => printTex || memDummy, polTex: () => polTex || memDummy }
	});
	const pegGeo = Geo();
	for (const p of pg.pegs) pegGeo.box(p[0] - 0.008, p[1] - 0.045, p[2] - 0.011, p[0] + 0.008, p[1] + 0.03, p[2] + 0.011, K.PEG);
	const pegDraw = regl({
		vert: VERT, frag: FRAG,
		attributes: { position: pegGeo.pos, normal: pegGeo.nrm, kind: pegGeo.kind, uv: pegGeo.uv },
		elements: regl.elements({ data: new Uint16Array(pegGeo.idx), type: 'uint16' }),
		cull: { enable: false },
		uniforms: { ...SHARED, reflTex: () => reflDummy, reflSize: [4, 4], reflOn: 0, tvLight: () => tvLight }
	});
	const rotY = (a) => { const c = Math.cos(a), s = Math.sin(a); return [c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1]; };
	const at = (x, y, z, yaw) => mul(trans(O[0] + x, O[1] + y, O[2] + z), rotY(yaw || 0));
	loadPart('res/redroom/plastic_all.bin', ['res/redroom/plastic_0.webp']).then((m) => { props.jug = m; }).catch((e) => console.error(e));
	loadPart('res/redroom/multi_cleaner_all.bin', ['res/redroom/multi_cleaner_0.webp']).then((m) => { props.can = m; }).catch((e) => console.error(e));
	loadPart('res/redroom/pull_all.bin', ['res/redroom/pull_0.webp']).then((m) => { props.socket = m; }).catch((e) => console.error(e));
	loadPart('res/redroom/bulb_all.bin', ['res/redroom/bulb_0.webp', 'res/redroom/bulb_1.webp']).then((m) => { props.bulb = m; }).catch((e) => console.error(e));
	const T0 = DARK.top, B0 = DARK.b[0];
	const DARK_PROPS = [
		['jug', at(0.16, T0, B0 + 0.3, 0.4)], ['jug', at(0.17, T0, B0 + 0.52, -0.3)], ['jug', at(0.36, T0, B0 + 0.4, 2.2)],
		['can', at(0.14, T0, B0 + 0.95, 1.57)], ['can', at(0.15, T0, B0 + 1.3, 1.45)],
		['jug', at(0.16, T0, DARK.b[1] - 0.35, 0.9)], ['can', at(0.2, T0, DARK.b[1] - 0.8, 1.7)],
		['socket', at(DARK.bulb[0], DARK.bulb[1] + 0.065, DARK.bulb[2], 0)],
		['bulb', mul(at(DARK.bulb[0], DARK.bulb[1] + 0.048, DARK.bulb[2], 0), rotX(Math.PI))]
	];
	const drawDark = () => {
		const batch = [];
		for (const [name, model] of DARK_PROPS) {
			const m = props[name];
			if (!m) continue;
			m.parts.forEach((p, i) => batch.push({ vb: m.vb, el: m.el, offset: p.offset, count: p.count, tex: p.tex, model, seed: 0, dark: name === 'jug' || name === 'can' ? 0.85 : 0.7, emit: name === 'bulb' && p.mat === 0 ? 1.6 : 0 }));
		}
		if (batch.length) tvCmd(batch);
		liqDraw();
		pegDraw();
	};


	// ---- the ENTER sign ------------------------------------------------------
	const signCanvas = document.createElement('canvas');
	signCanvas.width = 512; signCanvas.height = 192;
	{
		const c = signCanvas.getContext('2d');
		c.fillStyle = '#000'; c.fillRect(0, 0, 512, 192);
		c.font = 'bold 128px "Helvetica Neue", Arial, sans-serif';
		c.textAlign = 'center'; c.textBaseline = 'middle';
		c.shadowColor = '#ff2a20'; c.shadowBlur = 28;
		c.fillStyle = '#ff6a5a';
		c.fillText('ENTER', 256, 100);
		c.shadowBlur = 0; c.fillStyle = '#ffd8d0';
		c.fillText('ENTER', 256, 100);
	}
	const signTex = regl.texture({ data: signCanvas, min: 'linear', mag: 'linear', wrap: 'clamp' });
	const sg = ENT.sign, sw = 0.3, sh = 0.1125, sz = sg[2] - 0.025;
	const signDraw = regl({
		vert: `precision highp float; uniform mat4 proj, view; uniform float yScale; attribute vec3 position; attribute vec2 uv; varying vec2 v_uv; void main() { v_uv = uv; vec3 p = position; p.y *= yScale; gl_Position = proj * view * vec4(p, 1.0); }`,
		frag: `precision highp float; uniform sampler2D tex; uniform float signK; varying vec2 v_uv; void main() { vec3 c = texture2D(tex, v_uv).rgb; vec3 col = c * vec3(1.6, 0.55, 0.5) * signK + vec3(0.06, 0.0, 0.0); gl_FragColor = vec4(col, 1.0); }`,
		attributes: {
			position: [[sg[0] + sw, sg[1] - sh, sz], [sg[0] - sw, sg[1] - sh, sz], [sg[0] - sw, sg[1] + sh, sz], [sg[0] + sw, sg[1] + sh, sz]].map((q) => [q[0] + O[0], q[1] + O[1], q[2] + O[2]]),
			uv: [[0, 1], [1, 1], [1, 0], [0, 0]]
		},
		elements: [0, 1, 2, 0, 2, 3],
		cull: { enable: false },
		uniforms: { tex: signTex, signK: () => signNow }
	});


	// ---- sparks of dust turning in the beam, close by the projector --------
	const SPARK_N = 220;
	const sparkSeeds = [];
	for (let i = 0; i < SPARK_N; i++) sparkSeeds.push(Math.random(), Math.random(), Math.random(), Math.random());
	const sparkDraw = regl({
		vert: `
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b;
			void main() {
				vec3 L0 = vec3(${f(O[0] + PROJ.lens[0])}, ${f(O[1] + PROJ.lens[1])}, ${f(O[2] + PROJ.lens[2])});
				vec3 C = vec3(${f(O[0] + PROJ.img.x)}, ${f(O[1] + PROJ.img.y)}, ${f(O[2] + L)});
				vec3 fw = normalize(C - L0);
				vec3 rt = normalize(cross(fw, vec3(0.0, 1.0, 0.0)));
				vec3 up = cross(rt, fw);
				// most of them close to the lens
				float along = 0.15 + pow(seed.x, 2.2) * 7.5;
				float sp = along / length(C - L0);
				vec2 off = (vec2(seed.y, seed.z) - 0.5) * vec2(${f(PROJ.img.w)}, ${f(PROJ.img.h)}) * sp;
				float t = time * (0.05 + 0.08 * seed.w);
				off += vec2(sin(t * 2.0 + seed.w * 30.0), cos(t * 1.6 + seed.y * 20.0)) * 0.05 * (0.3 + along * 0.1);
				vec3 p = L0 + fw * along + rt * off.x + up * (off.y + sin(t + seed.z * 9.0) * 0.04);
				p.y *= yScale;
				vec4 v = view * vec4(p, 1.0);
				gl_Position = proj * v;
				// they flash as they turn edge-on to the light
				float tw = pow(0.5 + 0.5 * sin(time * (2.0 + 5.0 * seed.w) + seed.x * 60.0), 6.0);
				v_b = (0.15 + 0.7 * tw) / (1.0 + along * 0.5);
				gl_PointSize = clamp(pxScale * (0.006 + 0.008 * seed.w) / max(0.15, -v.z), 1.0, 7.0);
			}`,
		frag: `precision highp float; varying float v_b; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vec3(1.0, 0.84, 0.6) * v_b * a, 1.0); }`,
		attributes: { seed: sparkSeeds },
		count: SPARK_N,
		primitive: 'points',
		depth: { enable: true, mask: false },
		blend: { enable: true, func: { src: 'one', dst: 'one' } },
		uniforms: { pxScale: (ctx) => ctx.viewportHeight * 1.2 }
	});

	// ---- smoke: curling up out of the lamp house and drifting through the
	// light at the lens, lit where it crosses the beam
	const SMOKE_N = 70;
	const smokeSeeds = [];
	for (let i = 0; i < SMOKE_N; i++) smokeSeeds.push(Math.random(), Math.random(), Math.random(), i < SMOKE_N * 0.6 ? 1 : 0);
	const smokeDraw = regl({
		vert: `
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b, v_a, v_s;
			void main() {
				vec3 L0 = vec3(${f(O[0] + PROJ.lens[0])}, ${f(O[1] + PROJ.lens[1])}, ${f(O[2] + PROJ.lens[2])});
				vec3 C = vec3(${f(O[0] + PROJ.img.x)}, ${f(O[1] + PROJ.img.y)}, ${f(O[2] + L)});
				vec3 fw = normalize(C - L0);
				float life = fract(time * (0.07 + 0.04 * seed.y) + seed.x);
				vec3 p;
				if (seed.w > 0.5) {
					// at the lens, pulled forward into the beam
					p = L0 + fw * (0.05 + life * 1.3) + vec3((seed.z - 0.5) * 0.16, life * 0.32 + (seed.y - 0.5) * 0.1, 0.0);
				} else {
					// up out of the lamp house's vents
					p = L0 + vec3((seed.z - 0.5) * 0.12, 0.08 + life * 0.75, -0.32 + (seed.y - 0.5) * 0.12);
				}
				p.x += sin(time * 0.6 + seed.y * 20.0) * 0.06 * life;
				p.z += cos(time * 0.4 + seed.z * 17.0) * 0.05 * life;
				// how much of the beam's light it is in
				vec3 d = p - L0;
				float al = max(dot(d, fw), 0.0);
				float perp = length(d - fw * al);
				float rc = 0.04 + al * ${f(PROJ.img.h * 0.5)} / length(C - L0);
				v_b = 0.12 + 1.4 * smoothstep(rc + 0.06, rc * 0.5, perp) * smoothstep(0.0, 0.06, al);
				v_a = sin(3.14159 * life) * (0.5 + 0.5 * seed.y);
				v_s = seed.x * 31.0 + seed.z * 7.0;
				vec3 pw = p; pw.y *= yScale;
				vec4 v = view * vec4(pw, 1.0);
				gl_Position = proj * v;
				gl_PointSize = clamp(pxScale * (0.14 + 0.36 * life) / max(0.2, -v.z), 2.0, 600.0);
			}`,
		frag: `
			precision highp float;
			uniform float time;
			varying float v_b, v_a, v_s;
			${COMMON}
			void main() {
				vec2 d = gl_PointCoord - 0.5;
				float g = exp(-dot(d, d) * 9.0);
				float n = rnoise(gl_PointCoord * 3.2 + v_s + time * 0.05) * 0.7 + rnoise(gl_PointCoord * 7.0 - v_s) * 0.3;
				float a = g * smoothstep(0.2, 0.8, n) * v_a * 0.15;
				gl_FragColor = vec4(mix(vec3(0.5, 0.06, 0.04), vec3(1.0, 0.86, 0.68), clamp(v_b - 0.12, 0.0, 1.0)) * v_b * a, 1.0);
			}`,
		attributes: { seed: smokeSeeds },
		count: SMOKE_N,
		primitive: 'points',
		depth: { enable: true, mask: false },
		blend: { enable: true, func: { src: 'one', dst: 'one' } },
		uniforms: { pxScale: (ctx) => ctx.viewportHeight * 1.2 }
	});

	const DUST_N = 2200;
	const seeds = [];
	for (let i = 0; i < DUST_N; i++) seeds.push(Math.random(), Math.random(), Math.random(), Math.random());
	const dust = regl({
		vert: DUST_VERT,
		frag: DUST_FRAG,
		attributes: { seed: seeds },
		count: DUST_N,
		primitive: 'points',
		depth: { enable: true, mask: false },
		blend: { enable: true, func: { src: 'one', dst: 'one' } },
		uniforms: { pxScale: (ctx) => ctx.viewportHeight * 1.2 }
	});

	const draw = (o) => {
		const reflected = !!(o && o.reflected);
		// the snow's light flickers with the screens
		const t = performance.now() / 1000;
		const fl = 0.8 + 0.12 * Math.sin(t * 47) * Math.sin(t * 3.1) + 0.08 * Math.sin(t * 23.0 + 1.3);
		tvLight[0] = 0.8 * fl; tvLight[1] = 0.84 * fl; tvLight[2] = 0.95 * fl;
		signNow = signFlicker(typeof window !== 'undefined' && window.__tvTime != null ? window.__tvTime : t);
		room();
		signDraw();
		drawTvs();
		if (polTex) polDraw();
		drawDark();
		drawProps(typeof window !== 'undefined' && window.__tvTime != null ? window.__tvTime : t);
		if (memTexShared && !(typeof window !== 'undefined' && window.__noBeam)) beamDraw();
		lensDraw();
		if (!reflected && !(typeof window !== "undefined" && window.__noSmoke)) smokeDraw();
		if (!reflected) sparkDraw();
		if (!reflected) dust();
	};
	draw.reflect = (fn, every) => scope((ctx) => {
		const W0 = ctx.viewportWidth, H0 = ctx.viewportHeight;
		const w = Math.max(2, Math.round(W0 / 2)), h = Math.max(2, Math.round(H0 / 2));
		let fresh = !reflReady;
		if (reflFbo.width !== w || reflFbo.height !== h) { reflFbo.resize(w, h); fresh = true; }
		reflSize[0] = W0; reflSize[1] = H0;
		reflOn = 1;
		if (!fresh && (++reflCount % every) !== 0) { reflTex = reflColor; return; }
		reflTex = reflDummy;
		reflScope(() => {
			regl.clear({ color: [0, 0, 0, 1], depth: 1 });
			fn();
		});
		reflTex = reflColor;
		reflReady = true;
	});
	return draw;
};

// the same face to the gallery as studio.js
let dummy = null;
Object.assign(module.exports, {
	O, W, L, H,
	ROOM: { W, L, H, WIN, DOOR, ENT, SHAFTS, TV, DARK, PROJ, CABLE, POL, winZ, vaultY },
	POST: { threshold: 0.3 },
	sunGLSL,
	bakedSun(regl) { if (!dummy) dummy = regl.texture({ width: 1, height: 1, data: [0, 0, 0, 0] }); return dummy; },
	ready: () => true,
	setFlower() {},
	setGuide() {},
	setWind() {}
});

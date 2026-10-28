'use strict';

/*
 * THE CINEMATIC TOUR
 * ------------------
 * Instead of walking, the visitor is shown the gallery in a few shots,
 * one per swipe (or scroll, arrow key, click), and every swipe plays a
 * camera move from one shot to the next:
 *
 *   0  THE CORRIDOR      a slow push down the window corridor
 *        ↓  the camera rushes at the bright door at the end and through
 *           the light, and comes out under the glass dome of the tree court
 *   1  ABOUT             the artist reading under the tree, and his words
 *        ↓  a leaf lets go of the tree; the camera follows it out through
 *           the arch and up into the sunlight under the skylight
 *   2  THE SKYLIGHT      the leaf turning in the beams, dust in the air
 *        ↓  the leaf drifts down the hall and settles on the floor in
 *           front of the masterpiece; the camera rises to meet it
 *   3  THE MASTERPIECE   the painting alone in its light
 *        ↓  the camera eases aside
 *   4  ITS STORY         the title writes itself in, then the words
 *
 * Swiping back plays the same moves in reverse. "Explore freely" hands
 * the visitor over to the normal walking mode at any time.
 *
 * Gallery metres: x across the main hall, z along it, y up. The tree
 * court is through the arch in the x = 14 wall; the corridor runs off
 * the far end of the hall towards +x; the masterpiece hangs on the end
 * wall at z = 50.65.
 */

const mat4 = require('gl-mat4');
const about = require('./about');
const { A: COURT } = require('./alcove');
const { C: WING, PAINTING_X } = require('./wing');


/* ===========================================================
 * SMALL MATHS
 * ===========================================================
 */

const clamp01 = (x) => Math.max(0, Math.min(1, x));
const lerp = (a, b, t) => a + (b - a) * t;
const mix3 = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
const add3 = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sub3 = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const scale3 = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeIn = (t) => t * t * t;
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const sineInOut = (t) => -(Math.cos(Math.PI * t) - 1) / 2;

// a smooth curve through the points (Catmull-Rom), t from 0 to 1
function spline(pts, t) {
	const n = pts.length - 1;
	const x = clamp01(t) * n;
	const i = Math.min(n - 1, Math.floor(x));
	const u = x - i;
	const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(n, i + 2)];
	const u2 = u * u, u3 = u2 * u;
	return [0, 1, 2].map((k) => 0.5 * (
		2 * p1[k] +
		(-p0[k] + p2[k]) * u +
		(2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * u2 +
		(-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * u3
	));
}

// a camera: where it is, what it looks at, its vertical field of view
// (degrees) and a slight tilt (radians)
const cam = (eye, target, fov, roll) => ({ eye, target, fov, roll: roll || 0 });

function mixCam(a, b, t) {
	return cam(mix3(a.eye, b.eye, t), mix3(a.target, b.target, t), lerp(a.fov, b.fov, t), lerp(a.roll, b.roll, t));
}

// how wide the screen is, 0 = phone upright, 1 = laptop
const wideness = () => smooth(0.75, 1.3, window.innerWidth / window.innerHeight);

// each shot is framed twice, for a tall phone screen and a wide one
const framed = (portrait, landscape) => mixCam(portrait, landscape, wideness());


/* ===========================================================
 * PLACES
 * ===========================================================
 */

const MASTER = [7.0, 3.95, WING.hallEnd - 0.05];      // centre of the masterpiece
const DOOR = [WING.x1, 2.9, WING.zc];                // the corridor's far door
const LEAF_HOME = [16.75, 4.55, 6.75];               // where the leaf hangs in the tree
const LEAF_SKY = [6.92, 2.72, 14.5];                 // where it hovers in the sun
const LEAF_FLOOR = [7.3, 0.015, 47.1];              // where it comes to rest

// the leaf's way out of the tree, through the arch and up into the light
const LEAF_OUT = [
	LEAF_HOME,
	[16.2, 4.0, 7.0],
	[15.3, 3.45, 6.4],
	[14.1, 3.2, 5.7],
	[12.2, 3.35, 6.6],
	[10.0, 3.75, 9.6],
	[8.2, 3.8, 12.2],
	[7.3, 3.4, 13.8],
	LEAF_SKY
];

// and down the hall to the masterpiece
const LEAF_DOWN = [
	LEAF_SKY,
	[7.3, 4.6, 19.5],
	[7.6, 4.9, 23.5],
	[6.6, 4.3, 28.5],
	[7.5, 3.2, 34.0],
	[6.8, 2.1, 39.5],
	[7.4, 1.0, 44.2],
	[7.2, 0.3, 46.4],
	LEAF_FLOOR
];

// the second half: the artist walks past and sets the leaf flying again,
// it drifts into the corridor, past two paintings, and settles at the door
const P1 = [PAINTING_X[0], 3.0, WING.z0];            // the corridor's first painting
const P2 = [PAINTING_X[1], 3.0, WING.z0];            // and its second
const WALK_Z = 47.45;                                // the line he walks along
const WALK_FROM = 4.6;                               // where he starts (off screen)
const WALK_TO = 13.2;                                // where he leaves the picture
const STRIDE = 1.42;                                 // as in avatar.js
const LEAF_FLOAT = [7.55, 1.25, 46.75];              // the leaf, kicked up into the air
const LEAF_P1 = [17.25, 2.42, 46.0];                 // hovering before the first painting
const LEAF_P2 = [26.05, 1.95, 46.0];                   // lower, before the second
const LEAF_DOOR = [36.15, 0.015, 44.0];              // at rest before the far door

// where he stands when his shoes have just come into the picture (a
// phone's narrow picture needs him a little further in)
const walkRest = () => lerp(6.8, 6.15, wideness());

// out into the hall, along the corridor to the first painting
const LEAF_AWAY = [
	LEAF_FLOAT,
	[9.6, 1.65, 46.2],
	[12.3, 2.05, 45.1],
	[14.6, 2.35, 44.5],
	[16.2, 2.3, 44.7],
	LEAF_P1
];

// on to the second painting, sinking a little
const LEAF_ON = [
	LEAF_P1,
	[20.2, 2.05, 45.6],
	[23.2, 1.8, 45.0],
	LEAF_P2
];

// and down to the floor before the door
const LEAF_LAND = [
	LEAF_P2,
	[29.4, 1.25, 45.0],
	[32.3, 0.8, 44.4],
	[34.6, 0.35, 44.05],
	[35.8, 0.07, 44.0],
	LEAF_DOOR
];


// the third act: the third painting, the door, the gust, and the hall
const P3 = [PAINTING_X[2], 3.0, WING.z0];            // the corridor's third painting
const LEAF_P3 = [34.8, 1.35, 46.0];                  // low now, about to settle
const LEAF_REST = [7.89, 0.03, 19.03];              // its last rest, in a patch of sun under the skylight

// the main hall's paintings: three on the x = 0 wall, three on the x = 14
// wall (as they hang in placement.js)
const LEFT_X = 0.36, RIGHT_X = 13.64;
const HALL = [
	{ side: 'left', z: 34.5 },     // Between Grief and Acceptance
	{ side: 'left', z: 23.5 },     // A Private Eulogy
	{ side: 'left', z: 14.6 },     // Everything Else Was Easier To Perform
	{ side: 'right', z: 14.6 },    // Uncertainty
	{ side: 'right', z: 23.5 },    // The Hardest Gift I Gave
	{ side: 'right', z: 34.5 }     // Love me like I am Already Dead
];

// where the leaf hangs before a hall painting (to the painting's side of
// the picture on a laptop, nearer the middle on a phone)
function hallLeaf(h) {
	const s = h.side === 'left' ? 1 : -1;
	return mix3([7 - s * 1.0, 3.0, h.z + s * 0.2], [7 - s * 0.6, 3.25, h.z + s * 0.13], wideness());
}

// the camera before a hall painting: the painting on the left and the
// words on the right on a laptop; the painting above the words on a phone
function hallCam(h) {
	if (h.side === 'left') {
		return framed(
			cam([8.6, 3.9, h.z], [LEFT_X, 1.45, h.z], 76),
			cam([8.0, 3.6, h.z + 0.7], [LEFT_X, 3.95, h.z - 2.0], 46, -0.008)
		);
	}
	return framed(
		cam([5.4, 3.9, h.z], [RIGHT_X, 1.45, h.z], 76),
		cam([6.0, 3.6, h.z - 0.7], [RIGHT_X, 3.95, h.z + 2.0], 46, -0.008)
	);
}

// the gust's path: off the floor, back up the corridor past the windows,
// out into the hall and round to the first painting on the far wall
const leafGust = () => [
	LEAF_DOOR,
	[35.6, 0.5, 44.6],
	[33.2, 1.5, 45.6],
	[29.0, 2.3, 46.1],
	[23.5, 2.7, 45.9],
	[18.5, 2.9, 45.4],
	[14.8, 3.1, 44.3],
	[11.0, 3.3, 41.8],
	[7.4, 3.4, 38.8],
	[5.4, 3.3, 36.6],
	hallLeaf(HALL[0])
];

// from the near wall round the arch to the far wall: out between the
// arch's left column and the wall, across in front of the arch on the
// entrance side, and back in between its right column and the other wall
const leafArch = () => [
	hallLeaf(HALL[2]),
	[3.0, 3.2, 13.2],
	[1.7, 3.0, 12.0],
	[2.6, 3.2, 10.0],
	[5.0, 3.6, 8.9],
	[7.0, 3.8, 8.6],
	[9.0, 3.6, 8.9],
	[11.4, 3.2, 10.0],
	[12.3, 3.0, 12.0],
	[11.0, 3.1, 13.4],
	hallLeaf(HALL[3])
];

// the last fall, to the floor under the skylight
const leafSettle = () => [
	hallLeaf(HALL[5]),
	[9.0, 3.4, 31.0],
	[7.8, 2.8, 27.5],
	[6.8, 1.9, 24.5],
	[7.4, 1.0, 21.0],
	[7.75, 0.35, 19.6],
	LEAF_REST
];

// a leaf that hangs in the air at a shot, turning slowly while you read
const HOVER = {
	2: { pos: () => LEAF_SKY, amp: [0.18, 0.07, 0.12], tumble: 0.5 },
	7: { pos: () => LEAF_FLOAT, amp: [0.12, 0.09, 0.1], tumble: 0.55 },
	8: { pos: () => LEAF_P1, amp: [0.1, 0.08, 0.08], tumble: 0.5 },
	9: { pos: () => LEAF_P2, amp: [0.09, 0.06, 0.07], tumble: 0.45 },
	10: { pos: () => LEAF_P3, amp: [0.07, 0.04, 0.06], tumble: 0.35 },
	12: { pos: () => hallLeaf(HALL[0]), amp: [0.12, 0.08, 0.1], tumble: 0.5 },
	13: { pos: () => hallLeaf(HALL[1]), amp: [0.12, 0.08, 0.1], tumble: 0.5 },
	14: { pos: () => hallLeaf(HALL[2]), amp: [0.12, 0.08, 0.1], tumble: 0.5 },
	15: { pos: () => hallLeaf(HALL[3]), amp: [0.12, 0.08, 0.1], tumble: 0.5 },
	16: { pos: () => hallLeaf(HALL[4]), amp: [0.12, 0.08, 0.1], tumble: 0.5 },
	17: { pos: () => hallLeaf(HALL[5]), amp: [0.12, 0.08, 0.1], tumble: 0.5 }
};



/* ===========================================================
 * THE SHOTS (resting cameras)
 * tt = seconds since the camera arrived; every drift is zero at tt = 0
 * ===========================================================
 */

const SHOTS = [

	// 0  THE CORRIDOR: a slow push towards the light of the far door
	{
		name: 'corridor',
		ui: 'intro',
		look: { letterbox: 1, exposure: 1.0, focus: 14, aperture: 0.25, vignette: 0.1 },
		cam(tt) {
			const push = 0.9 * (1 - Math.exp(-tt / 14));
			const sway = [0, Math.sin(tt * 0.37) * 0.025, Math.sin(tt * 0.23) * 0.06];
			const base = framed(
				cam([WING.x0 + 0.9, 1.85, WING.zc + 0.25], [WING.x1, 2.85, WING.zc - 0.1], 64),
				cam([WING.x0 + 1.2, 2.0, WING.zc + 0.35], [WING.x1, 2.6, WING.zc - 0.15], 50)
			);
			base.eye = add3(add3(base.eye, [push, 0, 0]), sway);
			return base;
		}
	},

	// 1  ABOUT: the artist under the tree
	{
		name: 'about',
		ui: 'about',
		look: { letterbox: 0.55, exposure: 1.32, focus: 2.9, aperture: 0.9, vignette: 0.12, shafts: 0.65 },
		cam(tt) {
			const drift = [Math.sin(tt * 0.21) * 0.08, Math.sin(tt * 0.33) * 0.03, -0.25 * (1 - Math.exp(-tt / 12))];
			const base = framed(
				cam([16.6, 1.9, 9.2], [17.3, 0.4, 5.6], 64),
				cam([15.0, 1.35, 7.75], [17.55, 1.05, 5.5], 44, -0.02)
			);
			base.eye = add3(base.eye, drift);
			return base;
		}
	},

	// 2  THE SKYLIGHT: looking up into the sun, the leaf turning in it
	{
		name: 'sky',
		ui: 'sky',
		look: { letterbox: 0.55, exposure: 1.0, focus: 2.1, aperture: 0.45, vignette: 0.1, shafts: 1.0 },
		cam(tt) {
			const orbit = [Math.sin(tt * 0.12) * 0.35, Math.sin(tt * 0.2) * 0.04, (1 - Math.cos(tt * 0.12)) * 0.25];
			const base = framed(
				cam([7.0, 1.35, 13.0], [7.2, 7.6, 20.4], 74, 0.05),
				cam([6.6, 1.5, 12.6], [7.3, 7.2, 20.8], 56, 0.07)
			);
			base.eye = add3(base.eye, orbit);
			return base;
		}
	},

	// 3  THE MASTERPIECE: straight on, alone in its light
	{
		name: 'master',
		ui: 'master',
		look: { letterbox: 0.55, exposure: 1.12, focus: 8.0, aperture: 0.6, vignette: 0.3, shafts: 0.5 },
		cam(tt) {
			const breathe = [Math.sin(tt * 0.17) * 0.05, Math.sin(tt * 0.29) * 0.02, -0.35 * (1 - Math.exp(-tt / 16))];
			const base = framed(
				cam([7.0, 3.6, 43.7], [7.0, 3.85, MASTER[2]], 74),
				cam([7.0, 3.6, 41.3], [7.0, 3.95, MASTER[2]], 46)
			);
			base.eye = add3(base.eye, breathe);
			return base;
		}
	},

	// 4  ITS STORY: the camera eases aside to make room for the words
	{
		name: 'story',
		ui: 'story',
		look: { letterbox: 0.55, exposure: 1.0, focus: 8.1, aperture: 0.9, vignette: 0.4, shafts: 0.4 },
		cam(tt) {
			const breathe = [Math.sin(tt * 0.15) * 0.04, Math.sin(tt * 0.25) * 0.015, 0];
			const base = framed(
				// phone: the painting rises to the top, the words below
				cam([7.0, 3.9, 40.3], [7.0, 1.35, MASTER[2]], 76),
				// laptop: the painting on the left, the words on the right
				cam([6.3, 3.6, 41.2], [3.7, 3.95, MASTER[2]], 46, -0.008)
			);
			base.eye = add3(base.eye, breathe);
			return base;
		}
	},

	// 5  THE LEAF ON THE FLOOR: down at its level, the room gone soft
	{
		name: 'leaf',
		ui: 'leaf',
		look: { letterbox: 0.55, exposure: 1.15, focus: 1.25, aperture: 1.3, vignette: 0.35, shafts: 0.4 },
		cam(tt) {
			const breathe = [Math.sin(tt * 0.2) * 0.02, Math.sin(tt * 0.3) * 0.006, 0];
			const base = framed(
				cam([7.15, 0.15, 46.0], [7.3, 0.04, LEAF_FLOOR[2]], 50),
				cam([7.05, 0.14, 45.9], [7.25, 0.05, LEAF_FLOOR[2]], 32)
			);
			base.eye = add3(base.eye, breathe);
			return base;
		}
	},

	// 6  FOOTSTEPS: his shoes come into the picture, close to the floor
	{
		name: 'steps',
		ui: 'steps',
		look: { letterbox: 0.9, exposure: 1.2, focus: 1.6, aperture: 1.4, vignette: 0.4, shafts: 0.4 },
		cam(tt) {
			const breathe = [Math.sin(tt * 0.2) * 0.015, 0, 0];
			const base = framed(
				cam([7.15, 0.1, 46.3], [7.05, 0.1, WALK_Z], 50),
				cam([7.1, 0.12, 45.85], [7.0, 0.2, WALK_Z], 30)
			);
			base.eye = add3(base.eye, breathe);
			return base;
		}
	},

	// 7  THE LEAF IN THE AIR: kicked up by his step, turning above the floor
	{
		name: 'float',
		ui: 'float',
		look: { letterbox: 0.55, exposure: 1.1, focus: 2.2, aperture: 0.8, vignette: 0.3, shafts: 0.6 },
		cam(tt) {
			const breathe = [Math.sin(tt * 0.17) * 0.05, Math.sin(tt * 0.27) * 0.02, 0];
			const base = framed(
				cam([7.3, 0.85, 45.65], [7.6, 1.38, 47.1], 64),
				cam([7.25, 0.82, 45.8], [7.65, 1.35, 47.1], 44)
			);
			base.eye = add3(base.eye, breathe);
			return base;
		}
	},

	// 8  THE FIRST PAINTING IN THE CORRIDOR, the leaf hanging before it
	{
		name: 'painting1',
		ui: 'p1',
		look: { letterbox: 0.55, exposure: 1.0, focus: 5.8, aperture: 0.7, vignette: 0.32, shafts: 0.8 },
		cam(tt) {
			const breathe = [Math.sin(tt * 0.15) * 0.04, Math.sin(tt * 0.25) * 0.015, 0];
			const base = framed(
				cam([P1[0], 2.3, 46.85], [P1[0], 1.25, P1[2]], 74),
				cam([P1[0] - 0.6, 2.55, 46.85], [P1[0] + 1.9, 2.9, P1[2]], 46, 0.008)
			);
			base.eye = add3(base.eye, breathe);
			return base;
		}
	},

	// 9  THE SECOND PAINTING, the leaf lower now
	{
		name: 'painting2',
		ui: 'p2',
		look: { letterbox: 0.55, exposure: 1.0, focus: 5.8, aperture: 0.7, vignette: 0.32, shafts: 0.8 },
		cam(tt) {
			const breathe = [Math.sin(tt * 0.15) * 0.04, Math.sin(tt * 0.25) * 0.015, 0];
			const base = framed(
				cam([P2[0], 1.95, 46.85], [P2[0], 1.0, P2[2]], 74),
				cam([P2[0] - 0.6, 2.1, 46.85], [P2[0] + 1.9, 2.75, P2[2]], 46, 0.008)
			);
			base.eye = add3(base.eye, breathe);
			return base;
		}
	},

	// 10  THE THIRD PAINTING, the leaf low now, about to settle
	{
		name: 'painting3',
		ui: 'p3',
		look: { letterbox: 0.55, exposure: 1.0, focus: 5.8, aperture: 0.7, vignette: 0.32, shafts: 0.9 },
		cam(tt) {
			const breathe = [Math.sin(tt * 0.15) * 0.04, Math.sin(tt * 0.25) * 0.015, 0];
			const base = framed(
				cam([P3[0], 1.4, 46.85], [P3[0], 0.6, P3[2]], 74),
				cam([P3[0] - 0.6, 1.45, 46.85], [P3[0] + 1.9, 2.0, P3[2]], 46, 0.008)
			);
			base.eye = add3(base.eye, breathe);
			return base;
		}
	},

	// 11  AT REST BEFORE THE DOOR, seen from down on the floor
	{
		name: 'door',
		ui: 'door',
		look: { letterbox: 0.8, exposure: 1.05, focus: 1.45, aperture: 1.1, vignette: 0.35, shafts: 1.0 },
		cam(tt) {
			const breathe = [Math.sin(tt * 0.2) * 0.02, Math.sin(tt * 0.3) * 0.006, 0];
			const base = framed(
				cam([34.75, 0.5, 44.15], [WING.x1, 0.8, 43.95], 66),
				cam([34.75, 0.45, 44.3], [WING.x1, 0.35, 43.95], 50)
			);
			base.eye = add3(base.eye, breathe);
			return base;
		}
	},

	// 12 – 17  THE HALL'S PAINTINGS, one by one, the leaf before each
	...HALL.map((h, i) => ({
		name: 'hall' + i,
		ui: 'h' + i,
		look: { letterbox: 0.55, exposure: 1.0, focus: 7.6, aperture: 0.7, vignette: 0.35, shafts: 0.7 },
		cam(tt) {
			const breathe = [Math.sin(tt * 0.15) * 0.04, Math.sin(tt * 0.25) * 0.015, Math.sin(tt * 0.11) * 0.04];
			const base = hallCam(h);
			base.eye = add3(base.eye, breathe);
			return base;
		}
	})),

	// 18  THE END: looking down on the leaf at rest in the sunlight, the
	// shadows of the skylight's glazing on the floor, dust turning in the air
	{
		name: 'rest',
		ui: 'end',
		look: { letterbox: 0.55, exposure: 1.05, focus: 2.4, aperture: 0.5, vignette: 0.4, shafts: 1.15 },
		cam(tt) {
			const turn = tt * 0.025;
			const base = framed(
				cam([7.75, 2.6, 18.6], [7.89, 0.0, 19.08], 60),
				cam([7.75, 2.3, 18.45], [7.89, 0.0, 19.08], 46)
			);
			// very slowly circling overhead
			const dx = base.eye[0] - LEAF_REST[0], dz = base.eye[2] - LEAF_REST[2];
			base.eye = [LEAF_REST[0] + dx * Math.cos(turn) - dz * Math.sin(turn), base.eye[1], LEAF_REST[2] + dx * Math.sin(turn) + dz * Math.cos(turn)];
			return base;
		}
	}

];


/* ===========================================================
 * THE MOVES BETWEEN SHOTS
 * u goes 0 → 1 over `dur` seconds; `from` and `to` are the two
 * resting cameras at the moment the move starts and the arrival pose
 * ===========================================================
 */

const WHITE = [1.0, 0.96, 0.88];

// from one hall painting to the next along the same wall: the camera
// glides along, the leaf drifts out from the wall and back in
function hallMove(i, dur) {
	return {
		dur,
		cam(u, from, to) {
			const k = sineInOut(u);
			const c = mixCam(from, to, k);
			const out = HALL[i].side === 'left' ? 1 : -1;
			c.eye = add3(c.eye, [out * 0.6 * Math.sin(Math.PI * k), 0.15 * Math.sin(Math.PI * k), 0]);
			return c;
		},
		look(u, a, b) {
			const o = {};
			for (const key in b) if (typeof b[key] === 'number') o[key] = lerp(a[key], b[key], u);
			o.aperture = lerp(a.aperture, b.aperture, u) * (1 - 0.5 * Math.sin(Math.PI * u));
			return o;
		},
		leaf(u) {
			const k = sineInOut(u);
			const A = hallLeaf(HALL[i]), B = hallLeaf(HALL[i + 1]);
			const out = HALL[i].side === 'left' ? 1 : -1;
			const mid = add3(mix3(A, B, 0.5), [out * 1.2, 0.5, 0]);
			const p = spline([A, mix3(A, mid, 0.6), mid, mix3(B, mid, 0.6), B], k);
			return { phase: 'fly', pos: add3(p, [0, Math.sin(u * Math.PI * 5) * 0.07 * Math.sin(Math.PI * u), 0]), tumble: 0.5 + 0.35 * Math.sin(Math.PI * u) };
		}
	};
}

const MOVES = [

	// 0 → 1  THROUGH THE LIGHT
	{
		dur: 6.2,
		cam(u, from, to) {
			if (u < 0.5) {
				// rush the far door, faster and faster, as the light swells
				const k = easeIn(u / 0.5);
				const eye = mix3(from.eye, [WING.x1 - 3.2, 2.6, WING.zc], k);
				const target = mix3(from.target, DOOR, smooth(0, 0.6, u / 0.5));
				return cam(eye, target, lerp(from.fov, from.fov - 8, k), lerp(from.roll, 0.04, k));
			}
			// come out of the light under the glass dome, and sink through
			// the branches to the artist
			const k = easeOut((u - 0.5) / 0.5);
			const eyes = [
				[COURT.cx + 0.4, 10.4, COURT.zc + 0.6],
				[COURT.cx - 0.6, 7.6, COURT.zc + 1.3],
				[COURT.cx - 1.9, 4.6, COURT.zc + 1.75],
				to.eye
			];
			const targets = [
				[COURT.cx - 0.1, 0.0, COURT.zc - 0.2],
				[COURT.cx - 1.0, 0.4, COURT.zc - 0.1],
				[COURT.cx - 1.1, 0.8, COURT.zc - 0.2],
				to.target
			];
			const c = cam(spline(eyes, k), spline(targets, k), lerp(to.fov + 14, to.fov, k), lerp(-0.25, to.roll, k));
			return c;
		},
		look(u, a, b) {
			const toWhite = smooth(0.22, 0.5, u);
			const fromWhite = 1 - smooth(0.5, 0.74, u);
			return {
				fade: u < 0.5 ? toWhite : fromWhite,
				fadeColor: WHITE,
				exposure: lerp(a.exposure, b.exposure, smooth(0.5, 0.9, u)) * (1 + 2.2 * (u < 0.5 ? smooth(0.15, 0.5, u) : 1 - smooth(0.5, 0.8, u))),
				letterbox: lerp(a.letterbox, b.letterbox, smooth(0.3, 0.7, u)),
				aperture: u < 0.5 ? a.aperture * (1 - u * 2) : b.aperture * smooth(0.6, 1.0, u),
				focus: lerp(4, b.focus, smooth(0.5, 1, u)),
				shafts: lerp(a.shafts, b.shafts, smooth(0.4, 0.6, u)),
				vignette: lerp(a.vignette, b.vignette, u)
			};
		},
		leaf() { return { phase: 'home' }; }
	},

	// 1 → 2  THE LEAF
	{
		dur: 9.0,
		cam(u, from, to, leaf) {
			// the camera turns to the leaf, follows it out through the arch
			// a little behind and below it, then tilts up into the light
			const eyes = [
				from.eye,
				[15.6, 2.4, 8.3],
				[15.4, 2.7, 7.1],
				[12.6, 2.6, 5.4],
				[9.6, 2.0, 7.4],
				[7.6, 1.6, 10.6],
				to.eye
			];
			const eye = spline(eyes, sineInOut(u));
			// look at the leaf for most of the way, then at the skylight
			const atLeaf = smooth(0.0, 0.12, u) * (1 - smooth(0.82, 1.0, u));
			const target = mix3(mix3(from.target, to.target, smooth(0.55, 1, u)), leaf.pos, atLeaf);
			const fov = lerp(from.fov, to.fov, smooth(0.3, 1, u)) - 6 * Math.sin(Math.PI * u);
			const roll = lerp(from.roll, to.roll, u) + 0.05 * Math.sin(Math.PI * 2 * u);
			return cam(eye, target, fov, roll);
		},
		look(u, a, b, leaf, eye) {
			const d = Math.hypot(leaf.pos[0] - eye[0], leaf.pos[1] - eye[1], leaf.pos[2] - eye[2]);
			return {
				exposure: lerp(a.exposure, b.exposure, smooth(0.25, 0.75, u)),
				letterbox: lerp(a.letterbox, b.letterbox, u),
				// keep the leaf in focus while it is the subject
				focus: lerp(d, b.focus, smooth(0.8, 1, u)),
				aperture: lerp(0.7, b.aperture, smooth(0.8, 1, u)),
				shafts: lerp(a.shafts, b.shafts, smooth(0.3, 0.8, u)),
				vignette: lerp(a.vignette, b.vignette, u)
			};
		},
		leaf(u) {
			const k = easeInOut(u);
			const flutter = Math.sin(u * Math.PI * 7) * 0.14 * Math.sin(Math.PI * u);
			const p = add3(spline(LEAF_OUT, k), [0, Math.sin(u * Math.PI * 9) * 0.05 * Math.sin(Math.PI * u), flutter]);
			return { phase: 'fly', pos: p, tumble: 1 - 0.5 * smooth(0.8, 1, u) };
		}
	},

	// 2 → 3  DOWN THE HALL TO THE MASTERPIECE
	{
		dur: 11.5,
		cam(u, from, to, leaf) {
			// down from the skylight, following the falling leaf along the
			// hall; low over the floor as it lands, then rising to the painting
			// (the last stretch: down close to the leaf as it lands, then
			// back and up, and the masterpiece rises into view)
			const run = spline([
				from.eye,
				[7.0, 1.9, 19.0],
				[7.1, 1.6, 27.5],
				[6.9, 1.1, 36.0],
				[7.0, 0.7, 42.5],
				[7.05, 0.5, 45.7]
			], smooth(0, 0.8, u) * 0.6 + sineInOut(clamp01(u / 0.8)) * 0.4);
			const crane = spline([
				[7.05, 0.5, 45.7],
				[7.0, 1.2, 45.3],
				[7.0, 2.6, 43.8],
				to.eye
			], sineInOut(smooth(0.8, 1.0, u)));
			const eye = u < 0.8 ? run : crane;
			const target = mix3(mix3(from.target, leaf.pos, smooth(0.03, 0.22, u)), to.target, smooth(0.82, 1.0, u));
			const fov = lerp(from.fov, to.fov, smooth(0.15, 0.7, u)) - 6 * smooth(0.6, 0.8, u) * (1 - smooth(0.85, 1, u));
			const roll = lerp(from.roll, to.roll, smooth(0, 0.6, u)) - 0.04 * Math.sin(Math.PI * u);
			return cam(eye, target, fov, roll);
		},
		look(u, a, b, leaf, eye) {
			const d = Math.hypot(leaf.pos[0] - eye[0], leaf.pos[1] - eye[1], leaf.pos[2] - eye[2]);
			return {
				exposure: lerp(a.exposure, b.exposure, smooth(0.5, 1, u)),
				letterbox: lerp(a.letterbox, b.letterbox, u),
				focus: lerp(d, b.focus, smooth(0.84, 1, u)),
				aperture: lerp(1.1, b.aperture, smooth(0.84, 1, u)),
				shafts: lerp(a.shafts, b.shafts, smooth(0.2, 0.9, u)),
				vignette: lerp(a.vignette, b.vignette, smooth(0.5, 1, u))
			};
		},
		leaf(u) {
			// it falls slowly, swinging from side to side like a pendulum,
			// and settles flat on the polished floor
			const k = lerp(easeInOut(u), u, 0.35);
			const p = spline(LEAF_DOWN, smooth(0, 0.78, k));
			const swing = Math.sin(u * Math.PI * 8) * 0.35 * (1 - smooth(0.55, 0.76, u));
			const settle = smooth(0.7, 0.8, u);
			return { phase: 'fly', pos: add3(p, [swing, Math.abs(Math.cos(u * Math.PI * 8)) * 0.12 * (1 - settle), 0]), tumble: 1 - settle, swing };
		}
	},

	// 3 → 4  STEP ASIDE FOR THE STORY
	{
		dur: 2.6,
		cam(u, from, to) {
			const k = sineInOut(u);
			const c = mixCam(from, to, k);
			// a gentle arc rather than a straight slide
			c.eye = add3(c.eye, [0, 0, -0.35 * Math.sin(Math.PI * k)]);
			return c;
		},
		look(u, a, b) {
			const k = sineInOut(u);
			const o = {};
			for (const key in b) if (typeof b[key] === 'number') o[key] = lerp(a[key], b[key], k);
			return o;
		},
		leaf() { return { phase: 'floor' }; }
	},

	// 4 → 5  DOWN TO THE LEAF
	{
		dur: 4.5,
		cam(u, from, to) {
			const k = sineInOut(u);
			const eye = spline([from.eye, [6.9, 1.7, 43.9], [7.05, 0.45, 45.4], to.eye], k);
			const target = mix3(from.target, to.target, smooth(0.1, 0.85, u));
			return cam(eye, target, lerp(from.fov, to.fov, smooth(0.2, 1, u)), lerp(from.roll, to.roll, k));
		},
		look(u, a, b) {
			const o = {};
			for (const key in b) if (typeof b[key] === 'number') o[key] = lerp(a[key], b[key], smooth(0.2, 1, u));
			return o;
		},
		leaf() { return { phase: 'floor' }; }
	},

	// 5 → 6  FOOTSTEPS COMING
	{
		dur: 3.5,
		cam(u, from, to) { return mixCam(from, to, sineInOut(u)); },
		look(u, a, b) {
			const o = {};
			for (const key in b) if (typeof b[key] === 'number') o[key] = lerp(a[key], b[key], sineInOut(u));
			return o;
		},
		leaf() { return { phase: 'floor' }; },
		walker(u) { return lerp(WALK_FROM, walkRest(), u); }
	},

	// 6 → 7  HE WALKS PAST, AND THE LEAF TAKES OFF
	// the picture narrows to a wide film frame for the steps, and opens
	// out again once the leaf is in the air
	{
		dur: 7.5,
		kick: (u) => clamp01((u - kickU()) / (1 - kickU())),
		cam(u, from, to, leaf) {
			const ku = kickU();
			// follow his feet a little, then the leaf as it rises
			const pan = smooth(0, ku, u) * (1 - smooth(ku + 0.12, ku + 0.35, u));
			const wx = walkerX(Math.min(u, CROSS));
			let target = add3(from.target, [(wx - from.target[0]) * 0.15 * pan, 0, 0]);
			const lift = smooth(ku + 0.12, 1, u);
			const eye = spline([from.eye, from.eye, add3(from.eye, [0, 0.12, -0.3]), to.eye], lift);
			target = mix3(target, leaf.pos, smooth(ku + 0.06, ku + 0.24, u) * (1 - smooth(0.9, 1, u)));
			target = mix3(target, to.target, smooth(0.88, 1, u));
			return cam(eye, target, lerp(from.fov, to.fov, lift), lerp(from.roll, to.roll, lift));
		},
		look(u, a, b, leaf, eye) {
			const ku = kickU();
			const d = Math.hypot(leaf.pos[0] - eye[0], leaf.pos[1] - eye[1], leaf.pos[2] - eye[2]);
			const bars = smooth(0, 0.12, u) * (1 - smooth(ku + 0.25, ku + 0.5, u));
			return {
				letterbox: lerp(lerp(a.letterbox, b.letterbox, smooth(ku, 1, u)), 1.75, bars),
				exposure: lerp(a.exposure, b.exposure, smooth(ku, 1, u)),
				focus: u < ku ? a.focus : lerp(a.focus, d, smooth(ku, ku + 0.2, u)),
				aperture: lerp(a.aperture, b.aperture, smooth(ku, 1, u)),
				vignette: lerp(a.vignette, b.vignette, u),
				shafts: lerp(a.shafts, b.shafts, u)
			};
		},
		leaf(u) {
			const k = clamp01((u - kickU()) / (1 - kickU()));
			if (k <= 0) return { phase: 'floor' };
			// swept up by the air off his heel: a quick lift and a slow,
			// turning rise into the light
			const rise = smooth(0, 0.85, k) * 0.85 + easeOut(smooth(0, 0.15, k)) * 0.15;
			const p = add3(LEAF_FLOOR, [
				(LEAF_FLOAT[0] - LEAF_FLOOR[0]) * rise + Math.sin(k * 9) * 0.08 * (1 - k),
				(LEAF_FLOAT[1] - LEAF_FLOOR[1]) * rise,
				(LEAF_FLOAT[2] - LEAF_FLOOR[2]) * rise + Math.sin(k * 7) * 0.06 * (1 - k)
			]);
			return { phase: 'fly', pos: p, tumble: 1.3 - 0.75 * k };
		},
		walker(u) { return u < 0.985 ? walkerX(u) : null; }
	},

	// 7 → 8  INTO THE CORRIDOR, TO THE FIRST PAINTING
	{
		dur: 9.0,
		cam(u, from, to, leaf) {
			const k = sineInOut(u);
			const eye = spline([from.eye, [9.4, 1.35, 45.6], [12.4, 2.0, 45.9], [15.0, 2.45, 46.5], to.eye], k);
			const atLeaf = 1 - smooth(0.6, 0.92, u);
			const target = mix3(mix3(from.target, leaf.pos, smooth(0, 0.15, u)), to.target, 1 - atLeaf);
			const fov = lerp(from.fov, to.fov, smooth(0.3, 1, u));
			const roll = lerp(from.roll, to.roll, k) + 0.04 * Math.sin(Math.PI * u);
			return cam(eye, target, fov, roll);
		},
		look(u, a, b, leaf, eye) {
			const d = Math.hypot(leaf.pos[0] - eye[0], leaf.pos[1] - eye[1], leaf.pos[2] - eye[2]);
			return {
				letterbox: lerp(a.letterbox, b.letterbox, u),
				exposure: lerp(a.exposure, b.exposure, smooth(0.3, 0.8, u)),
				focus: lerp(d, b.focus, smooth(0.6, 0.95, u)),
				aperture: lerp(a.aperture, b.aperture, smooth(0.6, 1, u)),
				vignette: lerp(a.vignette, b.vignette, u),
				shafts: lerp(a.shafts, b.shafts, smooth(0.3, 0.8, u))
			};
		},
		leaf(u) {
			const k = sineInOut(u);
			const p = add3(spline(LEAF_AWAY, k), [0, Math.sin(u * Math.PI * 5) * 0.08 * Math.sin(Math.PI * u), Math.sin(u * Math.PI * 4) * 0.12 * Math.sin(Math.PI * u)]);
			return { phase: 'fly', pos: p, tumble: 0.55 + 0.4 * Math.sin(Math.PI * u) };
		}
	},

	// 8 → 9  ALONG TO THE SECOND PAINTING
	{
		dur: 6.5,
		cam(u, from, to) {
			const k = sineInOut(u);
			const c = mixCam(from, to, k);
			// stepping back a little as it passes the niche
			c.eye = add3(c.eye, [0, 0.12 * Math.sin(Math.PI * k), 0.1 * Math.sin(Math.PI * k)]);
			return c;
		},
		look(u, a, b) {
			const o = {};
			for (const key in b) if (typeof b[key] === 'number') o[key] = lerp(a[key], b[key], u);
			o.aperture = lerp(a.aperture, b.aperture, u) * (1 - 0.5 * Math.sin(Math.PI * u));
			return o;
		},
		leaf(u) {
			const k = sineInOut(u);
			const p = add3(spline(LEAF_ON, k), [0, Math.sin(u * Math.PI * 4) * 0.07 * Math.sin(Math.PI * u), 0]);
			return { phase: 'fly', pos: p, tumble: 0.5 + 0.3 * Math.sin(Math.PI * u) };
		}
	},

	// 9 → 10  ALONG TO THE THIRD PAINTING, the leaf sinking
	{
		dur: 6.5,
		cam(u, from, to) {
			const k = sineInOut(u);
			const c = mixCam(from, to, k);
			c.eye = add3(c.eye, [0, 0.1 * Math.sin(Math.PI * k), 0.1 * Math.sin(Math.PI * k)]);
			return c;
		},
		look(u, a, b) {
			const o = {};
			for (const key in b) if (typeof b[key] === 'number') o[key] = lerp(a[key], b[key], u);
			o.aperture = lerp(a.aperture, b.aperture, u) * (1 - 0.5 * Math.sin(Math.PI * u));
			return o;
		},
		leaf(u) {
			const k = sineInOut(u);
			const p = add3(spline([LEAF_P2, [29.2, 1.75, 45.5], [32.2, 1.5, 45.4], LEAF_P3], k), [0, Math.sin(u * Math.PI * 4) * 0.06 * Math.sin(Math.PI * u), 0]);
			return { phase: 'fly', pos: p, tumble: 0.45 + 0.25 * Math.sin(Math.PI * u) };
		}
	},

	// 10 → 11  DOWN TO REST BEFORE THE DOOR
	{
		dur: 6.0,
		cam(u, from, to, leaf) {
			const k = sineInOut(u);
			const eye = spline([from.eye, [34.2, 1.15, 45.6], [34.5, 0.7, 44.8], to.eye], k);
			const atLeaf = smooth(0.05, 0.3, u) * (1 - smooth(0.8, 1, u));
			const target = mix3(mix3(from.target, to.target, smooth(0.6, 1, u)), leaf.pos, atLeaf);
			return cam(eye, target, lerp(from.fov, to.fov, smooth(0.2, 1, u)), lerp(from.roll, to.roll, k));
		},
		look(u, a, b, leaf, eye) {
			const d = Math.hypot(leaf.pos[0] - eye[0], leaf.pos[1] - eye[1], leaf.pos[2] - eye[2]);
			return {
				letterbox: lerp(a.letterbox, b.letterbox, u),
				exposure: lerp(a.exposure, b.exposure, u),
				focus: lerp(d, b.focus, smooth(0.8, 1, u)),
				aperture: lerp(0.9, b.aperture, smooth(0.8, 1, u)),
				vignette: lerp(a.vignette, b.vignette, u),
				shafts: lerp(a.shafts, b.shafts, u)
			};
		},
		leaf(u) {
			// it sinks in slow swings, smaller and smaller, and lies down
			const p = spline([LEAF_P3, [35.3, 0.9, 45.2], [35.75, 0.4, 44.4], [36.0, 0.08, 44.05], LEAF_DOOR], smooth(0, 0.85, u));
			const swing = Math.sin(u * Math.PI * 6) * 0.25 * (1 - smooth(0.35, 0.82, u));
			const settle = smooth(0.78, 0.88, u);
			return { phase: 'fly', pos: add3(p, [0, Math.abs(Math.cos(u * Math.PI * 6)) * 0.07 * (1 - settle), swing]), tumble: 0.7 * (1 - settle), swing };
		}
	},

	// 11 → 12  THE GUST: the door bursts open, the leaf is flung back up
	// the corridor past the windows and round into the hall
	{
		dur: 12.0,
		door(u) {
			const k = clamp01((u - 0.02) / 0.09);
			// thrown open, swinging a little past and settling back
			return easeOut(k) + 0.07 * Math.sin(clamp01((u - 0.08) / 0.18) * Math.PI) * (1 - clamp01((u - 0.08) / 0.3));
		},
		cam(u, from, to, leaf) {
			// a jolt as the door slams back, then the camera swings round to
			// travel alongside the leaf, the windows and the garden behind it
			const shake = Math.sin(u * 340) * 0.012 * smooth(0.02, 0.05, u) * (1 - smooth(0.08, 0.16, u));
			const run = smooth(0.06, 1, u);
			let eye = spline([
				from.eye,
				[34.3, 1.0, 43.6],
				[31.5, 1.9, 43.4],
				[26.5, 2.4, 43.6],
				[21.0, 2.6, 43.6],
				[16.5, 2.8, 43.2],
				[12.6, 3.1, 41.2],
				[9.6, 3.4, 38.0],
				to.eye
			], run * 0.55 + sineInOut(run) * 0.45);
			// along the corridor it rides beside the leaf, a little behind it
			// and towards the painting wall, so the windows are behind the leaf
			const beside = add3(leaf.pos, [1.0, -0.2, -1.45]);
			eye = mix3(eye, beside, smooth(0.1, 0.22, u) * (1 - smooth(0.52, 0.72, u)));
			const atLeaf = smooth(0.06, 0.16, u) * (1 - smooth(0.86, 1, u));
			let target = mix3(from.target, leaf.pos, atLeaf);
			target = mix3(target, to.target, smooth(0.86, 1, u));
			const fov = lerp(from.fov, to.fov, smooth(0.1, 1, u)) + 6 * Math.sin(Math.PI * smooth(0.08, 0.9, u));
			const roll = lerp(from.roll, to.roll, u) + 0.06 * Math.sin(Math.PI * 2 * smooth(0.1, 0.9, u)) + shake;
			return cam(add3(eye, [0, shake, 0]), target, fov, roll);
		},
		look(u, a, b, leaf, eye) {
			const d = Math.hypot(leaf.pos[0] - eye[0], leaf.pos[1] - eye[1], leaf.pos[2] - eye[2]);
			// a burst of daylight as the door flies open
			const burst = smooth(0.02, 0.06, u) * (1 - smooth(0.08, 0.3, u));
			return {
				letterbox: lerp(a.letterbox, b.letterbox, smooth(0.1, 0.4, u)),
				exposure: lerp(a.exposure, b.exposure, u) * (1 + 0.8 * burst),
				focus: lerp(d, b.focus, smooth(0.86, 1, u)),
				aperture: lerp(0.8, b.aperture, smooth(0.86, 1, u)),
				vignette: lerp(a.vignette, b.vignette, u),
				shafts: lerp(a.shafts, b.shafts, u) + burst
			};
		},
		leaf(u) {
			const k = clamp01((u - 0.05) / 0.95);
			if (k <= 0) return { phase: 'floor' };
			// faster this time, carried on the wind
			const p = spline(leafGust(), k * 0.6 + sineInOut(k) * 0.4);
			const flutter = Math.sin(u * Math.PI * 9) * 0.12 * Math.sin(Math.PI * k);
			return { phase: 'fly', pos: add3(p, [0, flutter * 0.6, flutter]), tumble: 1.4 - 0.8 * k };
		}
	},

	// 12 → 13, 13 → 14  ALONG THE NEAR WALL
	...[0, 1].map((i) => hallMove(i, 7.5)),

	// 14 → 15  ROUND THE ARCH TO THE FAR WALL
	{
		dur: 10.0,
		cam(u, from, to, leaf) {
			const k = sineInOut(u);
			// stepping back to watch it through the arch, then round to the
			// other wall
			const eye = spline([from.eye, [7.6, 3.2, 16.2], [7.0, 2.9, 17.2], [6.5, 3.2, 16.0], to.eye], k);
			const atLeaf = smooth(0.0, 0.15, u) * (1 - smooth(0.85, 1, u));
			const target = mix3(mix3(from.target, to.target, smooth(0.5, 1, u)), leaf.pos, atLeaf);
			return cam(eye, target, lerp(from.fov, to.fov, k) + 4 * Math.sin(Math.PI * k), lerp(from.roll, to.roll, k));
		},
		look(u, a, b, leaf, eye) {
			const d = Math.hypot(leaf.pos[0] - eye[0], leaf.pos[1] - eye[1], leaf.pos[2] - eye[2]);
			return {
				letterbox: lerp(a.letterbox, b.letterbox, u),
				exposure: lerp(a.exposure, b.exposure, u),
				focus: lerp(d, b.focus, smooth(0.85, 1, u)),
				aperture: lerp(0.6, b.aperture, smooth(0.85, 1, u)),
				vignette: lerp(a.vignette, b.vignette, u),
				shafts: lerp(a.shafts, b.shafts, u)
			};
		},
		leaf(u) {
			const k = sineInOut(u);
			const p = spline(leafArch(), k);
			return { phase: 'fly', pos: add3(p, [0, Math.sin(u * Math.PI * 6) * 0.06 * Math.sin(Math.PI * u), 0]), tumble: 0.6 + 0.4 * Math.sin(Math.PI * u) };
		}
	},

	// 15 → 16, 16 → 17  ALONG THE FAR WALL
	...[3, 4].map((i) => hallMove(i, 7.5)),

	// 17 → 18  THE LAST FALL, INTO THE SUNLIGHT
	{
		dur: 10.0,
		cam(u, from, to, leaf) {
			const k = sineInOut(u);
			// up and over, until the camera looks straight down on it
			const eye = spline([from.eye, [7.6, 4.0, 30.5], [7.3, 4.4, 25.5], [7.1, 4.0, 21.8], to.eye], k);
			const atLeaf = smooth(0.0, 0.2, u) * (1 - smooth(0.9, 1, u));
			const target = mix3(mix3(from.target, to.target, smooth(0.5, 1, u)), leaf.pos, atLeaf);
			return cam(eye, target, lerp(from.fov, to.fov, k), lerp(from.roll, to.roll, k));
		},
		look(u, a, b, leaf, eye) {
			const d = Math.hypot(leaf.pos[0] - eye[0], leaf.pos[1] - eye[1], leaf.pos[2] - eye[2]);
			return {
				letterbox: lerp(a.letterbox, b.letterbox, u),
				exposure: lerp(a.exposure, b.exposure, u),
				focus: lerp(d, b.focus, smooth(0.85, 1, u)),
				aperture: lerp(0.7, b.aperture, smooth(0.85, 1, u)),
				vignette: lerp(a.vignette, b.vignette, u),
				shafts: lerp(a.shafts, b.shafts, u)
			};
		},
		leaf(u) {
			const p = spline(leafSettle(), smooth(0, 0.86, u));
			const swing = Math.sin(u * Math.PI * 7) * 0.3 * (1 - smooth(0.4, 0.84, u));
			const settle = smooth(0.8, 0.9, u);
			return { phase: 'fly', pos: add3(p, [swing, Math.abs(Math.cos(u * Math.PI * 7)) * 0.08 * (1 - settle), 0]), tumble: 0.8 * (1 - settle), swing };
		}
	}

];

// how far along the walk he is (hips over the floor, x), and where in it
// the leaf takes off: when his left foot comes down beside it
// (slow, almost slow motion, while he crosses the picture; then he walks
// on out of it)
const WALK_OUT = 9.2;
const CROSS = 0.6;
function walkerX(u) {
	return u < CROSS ? lerp(walkRest(), WALK_OUT, u / CROSS) : lerp(WALK_OUT, WALK_TO, (u - CROSS) / (1 - CROSS));
}
function kickU() { return CROSS * clamp01((LEAF_FLOOR[0] + 0.15 - walkRest()) / (WALK_OUT - walkRest())); }

const DEFAULT_LOOK = { fade: 0, fadeColor: [0, 0, 0], letterbox: 0, focus: 6, aperture: 0, exposure: 1, shafts: 1, vignette: 0 };
const lookOf = (i) => Object.assign({}, DEFAULT_LOOK, SHOTS[i].look);


/* ===========================================================
 * THE WORDS ON SCREEN
 * ===========================================================
 */

const CSS = `
.tour {
	position: fixed;
	inset: 0;
	z-index: 50;
	touch-action: none;
	user-select: none;
	-webkit-user-select: none;
	-webkit-tap-highlight-color: transparent;
	color: #f4ecdf;
	font-family: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
	cursor: pointer;
}
.tour[hidden] { display: none; }
.tour * { box-sizing: border-box; }

/* the gallery's name, quietly in the corner */
.tour-mark {
	position: absolute;
	top: max(18px, env(safe-area-inset-top));
	left: 22px;
	font: 500 13px/1 'Cormorant Garamond', Georgia, serif;
	letter-spacing: .42em;
	text-transform: uppercase;
	opacity: .78;
	pointer-events: none;
}

.tour-free {
	position: absolute;
	top: max(10px, env(safe-area-inset-top));
	right: 14px;
	min-height: 44px;
	padding: 0 16px;
	border: 1px solid rgba(244,236,223,.32);
	border-radius: 999px;
	background: rgba(20,15,10,.28);
	backdrop-filter: blur(6px);
	-webkit-backdrop-filter: blur(6px);
	color: #f4ecdf;
	font: 500 12px/1 Georgia, serif;
	letter-spacing: .16em;
	text-transform: uppercase;
	cursor: pointer;
	transition: background .3s ease, border-color .3s ease;
}
.tour-free:hover { background: rgba(60,45,30,.45); border-color: rgba(244,236,223,.55); }
.tour-free:focus-visible, .tour-btn:focus-visible { outline: 2px solid #e9cf9a; outline-offset: 3px; }

/* progress: one short line per shot */
.tour-progress {
	position: absolute;
	left: 50%;
	bottom: max(18px, env(safe-area-inset-bottom));
	transform: translateX(-50%);
	display: flex;
	gap: 4px;
	pointer-events: none;
}
.tour-progress i {
	display: block;
	width: 10px;
	height: 2px;
	border-radius: 1px;
	background: rgba(244,236,223,.28);
	transition: background .6s ease, width .6s ease;
}
.tour-progress i.on { background: #e9cf9a; width: 22px; }

/* the swipe hint */
.tour-hint {
	position: absolute;
	left: 50%;
	bottom: calc(max(18px, env(safe-area-inset-bottom)) + 18px);
	transform: translateX(-50%);
	font: italic 500 15px/1.2 'Cormorant Garamond', Georgia, serif;
	letter-spacing: .06em;
	opacity: 0;
	transition: opacity 1.2s ease;
	pointer-events: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6px;
	text-shadow: 0 1px 12px rgba(0,0,0,.6);
	white-space: nowrap;
}
.tour-hint.on { opacity: .85; }
.tour-hint svg { animation: tour-nudge 2.4s ease-in-out infinite; }
@keyframes tour-nudge { 0%, 100% { transform: translateY(0); opacity: .5; } 50% { transform: translateY(-6px); opacity: 1; } }

/* a block of words; each line rises into place in turn */
.tour-card {
	position: absolute;
	opacity: 0;
	visibility: hidden;
	transition: opacity .9s ease, visibility 0s linear .9s;
	pointer-events: none;
	text-shadow: 0 1px 18px rgba(0,0,0,.55);
}
.tour-card.on {
	opacity: 1;
	visibility: visible;
	transition: opacity .9s ease;
}
.tour-line {
	display: block;
	opacity: 0;
	transform: translateY(14px);
	filter: blur(4px);
	transition: opacity 1.2s ease, transform 1.4s cubic-bezier(.2,.7,.2,1), filter 1.2s ease;
}
.tour-card.on .tour-line { opacity: 1; transform: none; filter: none; }
/* (long texts rise in without the blur: lighter on phones) */
.tour-body .tour-line { filter: none; }
.tour-card:not(.on), .tour-card:not(.on) .tour-line, .tour-card:not(.on) .tour-rule, .tour-card:not(.on) .tour-letters .tour-word span {
	transition-delay: 0s !important;
	transition-duration: .45s !important;
}

.tour-kicker {
	font: 500 12px/1.4 Georgia, serif;
	letter-spacing: .38em;
	text-transform: uppercase;
	color: #e9cf9a;
}
.tour-title {
	margin: 0;
	font-weight: 500;
	font-size: clamp(40px, 6.2vw, 88px);
	line-height: .98;
	letter-spacing: .01em;
}
.tour-sub {
	font-style: italic;
	font-size: clamp(19px, 2vw, 26px);
	opacity: .9;
}
.tour-rule {
	display: block;
	height: 1px;
	width: 0;
	margin: 18px 0 16px;
	background: linear-gradient(90deg, #e9cf9a, rgba(233,207,154,0));
	transition: width 1.6s cubic-bezier(.2,.7,.2,1);
}
.tour-card.on .tour-rule { width: 120px; }

/* 0: the opening title, centred */
.tour-intro {
	left: 0; right: 0;
	top: 50%;
	transform: translateY(-50%);
	text-align: center;
	padding: 0 24px;
}
.tour-intro .tour-rule { margin: 20px auto 16px; background: linear-gradient(90deg, rgba(233,207,154,0), #e9cf9a, rgba(233,207,154,0)); }
.tour-intro.on .tour-rule { width: 160px; }

/* 1: about, to the right of the artist (below him on a phone) */
.tour-about {
	right: clamp(24px, 6vw, 96px);
	top: 50%;
	transform: translateY(-50%);
	width: min(430px, 40vw);
}
.tour-about p {
	margin: 0 0 14px;
	font-size: clamp(17px, 1.45vw, 20px);
	line-height: 1.55;
	color: rgba(244,236,223,.92);
}
.tour-about .tour-title { font-size: clamp(34px, 3.6vw, 54px); }

/* 2: the skylight, a single line low on the screen */
.tour-sky {
	left: 0; right: 0;
	bottom: 22%;
	text-align: center;
	padding: 0 24px;
}
.tour-sky .tour-sub { font-size: clamp(21px, 2.4vw, 30px); }

/* 3: the masterpiece, a small caption */
.tour-master {
	left: 0; right: 0;
	bottom: 15%;
	text-align: center;
}

/* 10: the end, centred above the leaf */
.tour-endcard {
	left: 0; right: 0;
	top: 18%;
	text-align: center;
	padding: 0 24px;
	pointer-events: auto;
}
.tour-endcard .tour-rule { margin: 16px auto 14px; background: linear-gradient(90deg, rgba(233,207,154,0), #e9cf9a, rgba(233,207,154,0)); }
.tour-endcard.on .tour-rule { width: 160px; }
.tour-endcard .tour-end { justify-content: center; margin-top: 22px; }
.tour-endcard .tour-kicker { letter-spacing: .22em; }

/* 4: the story, beside the painting (below it on a phone) */
.tour-story {
	right: clamp(24px, 5vw, 80px);
	top: 50%;
	transform: translateY(-50%);
	width: min(500px, 42vw);
	max-height: 76vh;
	display: flex;
	flex-direction: column;
	pointer-events: auto;
}
.tour-story .tour-title { font-size: clamp(36px, 4vw, 60px); }
.tour-letters .tour-word { display: inline-block; white-space: nowrap; }
.tour-letters .tour-word span {
	display: inline-block;
	opacity: 0;
	transform: translateY(.35em);
	filter: blur(6px);
	transition: opacity .9s ease, transform 1.1s cubic-bezier(.2,.7,.2,1), filter .9s ease;
}
.tour-story.on .tour-letters .tour-word span { opacity: 1; transform: none; filter: none; }
.tour-body {
	overflow-y: auto;
	touch-action: pan-y;
	-webkit-overflow-scrolling: touch;
	overscroll-behavior: contain;
	padding-right: 10px;
	cursor: auto;
	-webkit-mask-image: linear-gradient(180deg, transparent 0, #000 14px, #000 calc(100% - 40px), transparent 100%);
	mask-image: linear-gradient(180deg, transparent 0, #000 14px, #000 calc(100% - 40px), transparent 100%);
	scrollbar-width: thin;
	scrollbar-color: rgba(233,207,154,.4) transparent;
	user-select: text;
	-webkit-user-select: text;
}
.tour-body p {
	margin: 0 0 14px;
	white-space: pre-line;
	font-size: clamp(17px, 1.35vw, 20px);
	line-height: 1.6;
	color: rgba(244,236,223,.9);
}
.tour-end {
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
	margin-top: 14px;
}
.tour-btn {
	min-height: 44px;
	padding: 0 18px;
	border-radius: 999px;
	border: 1px solid rgba(233,207,154,.55);
	background: rgba(233,207,154,.12);
	color: #f4ecdf;
	font: 500 12px/1 Georgia, serif;
	letter-spacing: .16em;
	text-transform: uppercase;
	cursor: pointer;
	transition: background .3s ease;
}
.tour-btn:hover { background: rgba(233,207,154,.26); }
.tour-btn.quiet { border-color: rgba(244,236,223,.28); background: transparent; }

/* short, wide screens (a small laptop window, a phone on its side) */
@media (min-aspect-ratio: 1/1) and (max-height: 560px) {
	.tour-about { max-height: 70vh; overflow: hidden; }
	.tour-about p { font-size: 14px; line-height: 1.45; margin-bottom: 8px; }
	.tour-about p:nth-of-type(n+2) { display: none; }
	.tour-about .tour-title, .tour-story .tour-title { font-size: 28px; }
	.tour-rule { margin: 8px 0 10px; }
	.tour-story { max-height: 78vh; }
	.tour-body p { font-size: 14px; line-height: 1.45; }
	.tour-btn { min-height: 38px; }
}
@media (max-width: 370px) {
	.tour-mark { display: none; }
}
@media (prefers-reduced-motion: reduce) {
	.tour-hint svg { animation: none; }
}
@media (max-aspect-ratio: 1/1) {
	.tour-about, .tour-story {
		left: 18px; right: 18px;
		top: auto;
		bottom: calc(max(18px, env(safe-area-inset-bottom)) + 30px);
		transform: none;
		width: auto;
	}
	.tour-about { max-height: 48vh; overflow: hidden; bottom: calc(max(18px, env(safe-area-inset-bottom)) + 66px); }
	.tour-about p { font-size: 16px; line-height: 1.5; margin-bottom: 10px; }
	.tour-about p:nth-of-type(n+3) { display: none; }
	.tour-story { max-height: 50vh; }
	.tour-story .tour-title { font-size: 34px; }
	.tour-body p { font-size: 16.5px; }
	.tour-rule { margin: 12px 0 12px; }
	.tour-sky { bottom: 24%; }
	.tour-master { bottom: 13%; }
}
`;

function el(tag, cls, html) {
	const e = document.createElement(tag);
	if (cls) e.className = cls;
	if (html !== undefined) e.innerHTML = html;
	return e;
}

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// each line rises in a little after the one before
function stagger(card, start, step) {
	card.querySelectorAll('.tour-line').forEach((e, i) => {
		e.style.transitionDelay = (start + i * step).toFixed(2) + 's';
	});
}


/* ===========================================================
 * THE TOUR
 * ===========================================================
 */

module.exports = function createTour(opts) {

	const DEBUG = /tourdebug/.test(location.search);

	const { fps } = opts;

	// a nicer serif for the words, if the network allows; Georgia otherwise
	if (!document.querySelector('link[data-tour-font]')) {
		const l = document.createElement('link');
		l.rel = 'stylesheet';
		l.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap';
		l.setAttribute('data-tour-font', '');
		document.head.appendChild(l);
	}

	const style = document.createElement('style');
	style.textContent = CSS + `
	body.touring #museum-mobile-controls,
	body.touring .painting-plaque { display: none !important; }`;
	document.head.appendChild(style);

	const root = el('div', 'tour');
	root.setAttribute('role', 'region');
	root.setAttribute('aria-label', 'Guided tour of the gallery. Swipe, scroll or press the arrow keys to move on.');

	const mark = el('div', 'tour-mark', esc(about.name));
	const free = el('button', 'tour-free', 'Explore freely');
	free.type = 'button';

	const progress = el('div', 'tour-progress', SHOTS.map(() => '<i></i>').join(''));
	const hint = el('div', 'tour-hint',
		'<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 15l6-6 6 6"></path></svg><span></span>');
	const hintText = hint.querySelector('span');

	// 0: the opening
	const intro = el('div', 'tour-card tour-intro', `
		<span class="tour-line tour-kicker">A virtual gallery</span>
		<span class="tour-rule"></span>
		<h1 class="tour-line tour-title">${esc(about.name)}</h1>
		<span class="tour-line tour-sub">Oil portraits of quiet, modern feelings</span>`);
	stagger(intro, 0.4, 0.35);

	// 1: about him
	const aboutParas = about.text.split(/\n\s*\n/).map((p) => `<p class="tour-line">${esc(p.trim())}</p>`).join('');
	const aboutCard = el('div', 'tour-card tour-about', `
		<span class="tour-line tour-kicker">The artist</span>
		<h2 class="tour-line tour-title">${esc(about.title)}</h2>
		<span class="tour-rule"></span>
		${aboutParas}`);
	stagger(aboutCard, 0.25, 0.28);

	// 2: the skylight
	const sky = el('div', 'tour-card tour-sky', `
		<span class="tour-line tour-sub">Every painting here waits for the light.</span>`);
	stagger(sky, 0.6, 0.3);

	// 3: the masterpiece
	// (the masterpiece speaks for itself: no words)
	const master = el('div', 'tour-card tour-master', '');

	// a painting's story: the title writes itself in, then the words
	// (filled in once the painting has loaded)
	function storyCard(find) {
		const card = el('div', 'tour-card tour-story', `
			<span class="tour-line tour-kicker">Oil on canvas</span>
			<h2 class="tour-title tour-letters"></h2>
			<span class="tour-rule"></span>
			<div class="tour-body"></div>`);
		const title = card.querySelector('.tour-title');
		const body = card.querySelector('.tour-body');
		card.filled = false;
		card.body = body;
		card.fill = () => {
			const p = find();
			if (!p || card.filled) return;
			card.filled = true;
			const t = p.title || '';
			// (letters grouped by word, so a line never breaks inside a word)
			let n = 0;
			title.innerHTML = t.split(' ').map((word) =>
				'<span class="tour-word">' + word.split('').map((ch) =>
					`<span style="transition-delay:${(0.35 + (n++) * 0.045).toFixed(3)}s">${esc(ch)}</span>`).join('') + '</span>'
			).join(' ');
			title.setAttribute('aria-label', t);
			const after = 0.35 + t.length * 0.045 + 0.2;
			card.querySelector('.tour-rule').style.transitionDelay = after.toFixed(2) + 's';
			const paras = String(p.description || '').split(/\n\s*\n/).filter((x) => x.trim());
			body.innerHTML = paras.map((x) => `<p class="tour-line">${esc(x.trim())}</p>`).join('');
			card.querySelector('.tour-kicker').style.transitionDelay = '0.1s';
			body.querySelectorAll('.tour-line').forEach((e, i) => {
				e.style.transitionDelay = (after + 0.3 + Math.min(i, 6) * 0.35).toFixed(2) + 's';
			});
		};
		return card;
	}

	const paintings = () => (opts.paintings ? opts.paintings() : []);
	const corridorPainting = (x) => paintings().find((p) => p.side === 'corridor' && Math.abs(p.paintingPosition[0] - x) < 0.5);

	// 4: the masterpiece's story
	const story = storyCard(() => paintings().find((p) => p.side === 'end'));

	// 5, 6, 7: no words, just the leaf and the footsteps
	const quiet = () => el('div', 'tour-card', '');

	// 8, 9, 10: the corridor's paintings
	const story1 = storyCard(() => corridorPainting(P1[0]));
	const story2 = storyCard(() => corridorPainting(P2[0]));
	const story3 = storyCard(() => corridorPainting(P3[0]));

	// 12 - 17: the hall's paintings
	const hallStories = HALL.map((h) => storyCard(() => paintings().find((p) => p.side === h.side && Math.abs(p.paintingPosition[2] - h.z) < 0.5)));

	// 18: the end of the tour
	const end = el('div', 'tour-card tour-endcard', `
		<span class="tour-line tour-kicker">Thank you for walking with me</span>
		<span class="tour-rule"></span>
		<span class="tour-line tour-sub">The rest of the gallery is yours to wander.</span>
		<div class="tour-line tour-end">
			<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);
	stagger(end, 0.5, 0.35);

	const cards = [intro, aboutCard, sky, master, story, quiet(), quiet(), quiet(), story1, story2, story3, quiet(), ...hallStories, end];
	root.append(...cards, mark, free, progress, hint);
	document.body.appendChild(root);
	document.body.classList.add('touring');

	// phones swipe, laptops scroll (or click, or press the arrow keys)
	const fine = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
	const verb = fine ? 'Scroll' : 'Swipe';
	const HINTS = SHOTS.map((sh, i) =>
		i === 0 ? (fine ? 'Scroll to begin' : 'Swipe up to begin')
			: i === 1 ? verb + ' to follow the leaf'
				: i === 2 ? verb + ' to follow the light'
					: i === 3 ? verb + ' for its story'
						: (i === 6 || i === 7 || i === SHOTS.length - 1) ? ''
							: verb + ' on');


	/* -------------------------------------------------------
	 * STATE
	 *
	 * The whole tour is one strip of film, `scroll` seconds long: each
	 * move takes up its own length of it (MOVES[i].dur), and the shots
	 * sit at the joins. Scrolling or swiping winds the film on or back,
	 * and the camera only moves while the visitor does; it eases to a
	 * stop when they stop. Resting near a shot, it settles onto it and
	 * the words appear.
	 * ----------------------------------------------------- */

	// where each shot sits on the strip
	const AT = [0];
	MOVES.forEach((m) => AT.push(AT[AT.length - 1] + m.dur));
	const END = AT[AT.length - 1];

	// how far a scroll wheel or a finger winds the film
	const WHEEL_PX_PER_SEC = 150;       // pixels of scrolling per second of film
	const TOUCH_PX_PER_SEC = 70;        // pixels of finger travel per second of film
	const EASE = 4.2;                   // how quickly the camera catches up
	const MAX_LEAD = 2.2;               // the camera never lags more than this behind
	const SETTLE_AFTER = 0.7;           // seconds of stillness before settling on a shot
	const SETTLE_NEAR = 0.9;            // ...if it is within this much film of one

	let active = true;
	let scroll = 0;            // where the camera is on the strip
	let target = 0;            // where the visitor has wound it to
	let lastInput = -10;       // when they last scrolled or swiped
	let auto = false;          // a key, click or tap: glide to the next shot
	let shown = -1;            // the shot whose words are on screen
	let restShot = 0;          // the shot the drift belongs to
	let restClock = 0;         // how long we have rested there
	let now = 0;
	let exiting = null;        // { start, fromCam }

	const look = Object.assign({}, lookOf(0));
	let camNow = SHOTS[0].cam(0);
	let leaf = { phase: 'home', pos: LEAF_HOME.slice(), tumble: 0 };
	let leafClock = 0;

	const nearestShot = (s) => {
		let best = 0;
		for (let i = 1; i < AT.length; i++) if (Math.abs(AT[i] - s) < Math.abs(AT[best] - s)) best = i;
		return best;
	};

	function showUI(i) {
		const c = cards[i];
		if (c && c.fill) {
			// write the words in first, so they can animate in
			c.fill();
			c.body.scrollTop = 0;
			void c.offsetWidth;
		}
		cards.forEach((c, k) => c.classList.toggle('on', k === i));
		hintText.textContent = HINTS[i] || '';
		hint.classList.toggle('on', !!HINTS[i]);
	}
	function hideUI() {
		cards.forEach((c) => c.classList.remove('on'));
		hint.classList.remove('on');
	}

	// wind the film on (or back) by `secs`
	function wind(secs) {
		if (!active || exiting) return;
		auto = false;
		lastInput = now;
		target = Math.max(0, Math.min(END, target + secs));
		// never let the camera fall too far behind a fast flick
		target = Math.max(scroll - MAX_LEAD, Math.min(scroll + MAX_LEAD, target));
	}

	// a key, click or tap: glide on to the next shot (or back to the last)
	function go(dir) {
		if (!active || exiting) return;
		const here = auto ? target : scroll;
		let i;
		if (dir > 0) i = AT.findIndex((a) => a > here + 0.05);
		else { i = -1; for (let k = AT.length - 1; k >= 0; k--) if (AT[k] < here - 0.05) { i = k; break; } }
		if (i < 0) return;
		target = AT[i];
		auto = true;
		lastInput = now;
	}


	/* -------------------------------------------------------
	 * INPUT: swipes, scrolling, keys, clicks
	 * ----------------------------------------------------- */

	let drag = null;

	const stop = (e) => e.stopPropagation();
	['touchstart', 'touchmove', 'touchend', 'mousedown', 'mouseup', 'click', 'contextmenu'].forEach((t) => root.addEventListener(t, stop));

	// a finger (or a mouse dragged like one) winds the film as it moves:
	// up or left = onwards, down or right = back
	root.addEventListener('pointerdown', (e) => {
		e.stopPropagation();
		if (e.target.closest('button') || e.target.closest('.tour-body')) return;
		drag = { x: e.clientX, y: e.clientY, lx: e.clientX, ly: e.clientY, t: performance.now(), moved: 0, v: 0, lt: performance.now() };
		try { root.setPointerCapture(e.pointerId); } catch (err) { /* not needed */ }
	});
	root.addEventListener('pointermove', (e) => {
		if (!drag) return;
		const dx = e.clientX - drag.lx, dy = e.clientY - drag.ly;
		drag.lx = e.clientX; drag.ly = e.clientY;
		const d = Math.abs(dy) >= Math.abs(dx) ? -dy : -dx;
		drag.moved += Math.abs(d);
		const t = performance.now();
		const secs = d / TOUCH_PX_PER_SEC;
		// keep a running speed, for the glide after the finger lifts
		drag.v = drag.v * 0.6 + (secs / Math.max(0.008, (t - drag.lt) / 1000)) * 0.4;
		drag.lt = t;
		if (drag.moved > 6) wind(secs);
	});
	const endDrag = (e) => {
		const d = drag;
		drag = null;
		if (!d) return;
		if (d.moved < 10 && performance.now() - d.t < 500) {
			// a tap or click: on to the next shot
			go(1);
		} else if (performance.now() - d.lt < 120) {
			// a flick carries on a little, like a page
			wind(Math.max(-1.6, Math.min(1.6, d.v * 0.22)));
		}
	};
	root.addEventListener('pointerup', (e) => { e.stopPropagation(); endDrag(e); });
	root.addEventListener('pointercancel', () => { drag = null; });

	root.addEventListener('wheel', (e) => {
		if (e.target.closest('.tour-body')) {
			const b = e.target.closest('.tour-body');
			const atEnd = b.scrollTop + b.clientHeight >= b.scrollHeight - 2 && e.deltaY > 0;
			const atTop = b.scrollTop <= 0 && e.deltaY < 0;
			if (!atEnd && !atTop) return;
		}
		e.preventDefault();
		const px = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * window.innerHeight : e.deltaY;
		wind(px / WHEEL_PX_PER_SEC);
	}, { passive: false });

	window.addEventListener('keydown', (e) => {
		if (!active || exiting) return;
		const k = e.key;
		if (['ArrowDown', 'ArrowRight', 'PageDown', ' ', 'Enter'].indexOf(k) >= 0) {
			// (Enter and Space on a focused button press the button)
			if ((k === 'Enter' || k === ' ') && e.target && e.target.tagName === 'BUTTON') return;
			e.preventDefault();
			e.stopImmediatePropagation();
			go(1);
		} else if (['ArrowUp', 'ArrowLeft', 'PageUp'].indexOf(k) >= 0) {
			e.preventDefault();
			e.stopImmediatePropagation();
			go(-1);
		} else if (k === 'Escape') {
			e.preventDefault();
			exit();
		} else if (/^[wasdzq]$/i.test(k)) {
			e.stopImmediatePropagation();
		}
	}, true);
	window.addEventListener('keyup', (e) => {
		if (active && !exiting && /^(Arrow|[wasdzq]$)/i.test(e.key)) e.stopImmediatePropagation();
	}, true);

	free.addEventListener('click', (e) => { e.stopPropagation(); exit(); });
	end.addEventListener('click', (e) => {
		const b = e.target.closest('button');
		if (!b) return;
		e.stopPropagation();
		if (b.dataset.act === 'free') exit();
		if (b.dataset.act === 'replay') replay();
	});


	/* -------------------------------------------------------
	 * LEAVING AND COMING BACK
	 * ----------------------------------------------------- */

	// where free walking picks up after each shot: [distance along the
	// walk, heading] (see fps.js; Math.PI looks down the hall)
	const HANDOVER = [
		null,                              // the corridor: start at the entrance
		[COURT.zc - 1.6, Math.PI / 2],     // facing the tree court
		[11.4, Math.PI],                   // under the arch, looking down the hall
		[39.4, Math.PI],                   // before the masterpiece
		[39.4, Math.PI],
		[39.4, Math.PI],
		[39.4, Math.PI],
		[39.4, Math.PI],
		// in the corridor (the walk turns there and runs along x), facing
		// the painting wall, and at the far end facing the door
		[42.5 + PAINTING_X[0] - 7, 0],
		[42.5 + PAINTING_X[1] - 7, 0],
		[42.5 + PAINTING_X[2] - 7, 0],
		[1e3, Math.PI / 2],
		// in the hall, on its centre line, facing each painting
		...HALL.map((h) => [h.z - 1.6, h.side === 'left' ? -Math.PI / 2 : Math.PI / 2]),
		[LEAF_REST[2] - 1.6, Math.PI]
	];

	let restingLeaf = null;
	let restingDoor = 0;

	function exit() {
		if (!active || exiting) return;
		const at = nearestShot(scroll);
		const h = HANDOVER[at];
		// the leaf stays in the tree, or on the floor where it landed
		restingLeaf = at <= 1 ? { phase: 'home', pos: LEAF_HOME.slice() }
			: (at >= 3 && at <= 6) ? { phase: 'floor', pos: LEAF_FLOOR.slice() }
			: at === 11 ? { phase: 'floor', pos: LEAF_DOOR.slice() }
			: at === 18 ? { phase: 'floor', pos: LEAF_REST.slice() } : null;
		restingDoor = at >= 12 ? 1 : 0;
		if (h && fps.place) fps.place(h[0], h[1]);
		exiting = { start: now, fromCam: camNow, fromLook: Object.assign({}, look) };
		hideUI();
		root.hidden = true;
		document.body.classList.remove('touring');
		if (opts.onExit) opts.onExit();
	}

	function replay() {
		scroll = target = 0;
		auto = false;
		shown = -1;
		restShot = 0;
		restClock = 0;
		leaf = { phase: 'home', pos: LEAF_HOME.slice(), tumble: 0 };
		fadeIn = { start: now };
	}

	// the very first frame fades up from black
	let fadeIn = { start: -1 };
	let started = false;


	/* -------------------------------------------------------
	 * EACH FRAME
	 * ----------------------------------------------------- */

	const leafModel = [];

	function leafState(dt) {
		leafClock += dt * (leaf.phase === 'floor' ? 0 : 1);
		const k = leaf.tumble === undefined ? 0 : leaf.tumble;
		let m = mat4.fromTranslation(leafModel, leaf.pos);
		if (leaf.phase === 'home') {
			// hanging from its twig, stirring in the air
			m = mat4.rotateY(m, m, 2.2 + Math.sin(leafClock * 0.9) * 0.15);
			m = mat4.rotateZ(m, m, -1.0 + Math.sin(leafClock * 1.3) * 0.12);
			m = mat4.rotateX(m, m, 0.4);
		} else if (leaf.phase === 'floor') {
			// lying on the floor, resting on its curl
			m = mat4.rotateY(m, m, 0.65);
			m = mat4.rotateX(m, m, 0.16);
		} else {
			// in the air it turns its face to the camera, more or less, and
			// tumbles about that: wildly in flight, gently while it hangs
			const e = camNow.eye, p = leaf.pos;
			let n = [e[0] - p[0], e[1] - p[1], e[2] - p[2]];
			const nl = Math.hypot(n[0], n[1], n[2]) || 1;
			n = [n[0] / nl, n[1] / nl, n[2] / nl];
			let x = [n[2], 0, -n[0]];
			const xl = Math.hypot(x[0], x[2]) || 1;
			x = [x[0] / xl, 0, x[2] / xl];
			const z = [x[1] * n[2] - x[2] * n[1], x[2] * n[0] - x[0] * n[2], x[0] * n[1] - x[1] * n[0]];
			const face = [x[0], x[1], x[2], 0, n[0], n[1], n[2], 0, z[0], z[1], z[2], 0, p[0], p[1], p[2], 1];
			for (let i = 0; i < 16; i++) m[i] = face[i];
			m = mat4.rotateY(m, m, leafClock * 0.9 * k + 0.65);
			m = mat4.rotateX(m, m, Math.sin(leafClock * 2.3) * 0.9 * k);
			m = mat4.rotateZ(m, m, Math.sin(leafClock * 1.7 + 1.0) * 1.1 * k + (leaf.swing || 0) * 0.9);
		}
		return { visible: true, model: m };
	}

	function setLook(l) {
		for (const k in DEFAULT_LOOK) look[k] = l[k] !== undefined ? l[k] : DEFAULT_LOOK[k];
	}

	// the leaf where a shot leaves it
	function leafAtShot(i, tt) {
		if (i <= 1) return { phase: 'home', pos: LEAF_HOME.slice(), tumble: 0 };
		const H = HOVER[i];
		if (H) {
			// hanging in the air and turning slowly, while you read
			const a = H.amp;
			return {
				phase: 'fly',
				pos: add3(H.pos(), [Math.sin(tt * 0.55) * a[0], Math.sin(tt * 0.8) * a[1], (1 - Math.cos(tt * 0.45)) * a[2]]),
				tumble: H.tumble
			};
		}
		return { phase: 'floor', pos: (i >= 18 ? LEAF_REST : i >= 10 ? LEAF_DOOR : LEAF_FLOOR).slice(), tumble: 0 };
	}

	let lastTime = 0;
	let walker = null;

	function update(time) {
		const dt = Math.min(0.1, Math.max(0, time - lastTime));
		lastTime = time;
		now = time;
		if (!started) { started = true; fadeIn.start = time; }

		if (exiting) {
			return null;
		}

		// resting near a shot: settle onto it
		if (!auto && !drag && now - lastInput > SETTLE_AFTER) {
			const i = nearestShot(target);
			if (Math.abs(AT[i] - target) < SETTLE_NEAR) target = AT[i];
		}

		// the camera catches up with where the visitor has wound the film:
		// smoothly, so it glides on a little after a swipe and eases to a stop
		const gap = target - scroll;
		if (auto) {
			// a key or tap: play the move at its natural pace
			const step = Math.sign(gap) * Math.min(Math.abs(gap), dt * (0.35 + 0.65 * smooth(0, 0.6, Math.abs(gap))) * 1.0);
			scroll += step;
			if (Math.abs(target - scroll) < 1e-4) { scroll = target; auto = false; }
		} else {
			scroll += gap * (1 - Math.exp(-dt * EASE));
			if (Math.abs(gap) < 1e-4) scroll = target;
		}

		// which move we are in, and how far along it
		let idx = 0;
		while (idx < MOVES.length - 1 && scroll >= AT[idx + 1]) idx++;
		const M = MOVES[idx];
		const u = clamp01((scroll - AT[idx]) / M.dur);
		const A = SHOTS[idx], B = SHOTS[idx + 1];

		// the slow drift of the shot we rest at (or have just left)
		const near = nearestShot(scroll);
		if (near !== restShot) { restShot = near; restClock = 0; }
		const resting = Math.abs(scroll - AT[near]) < 0.02;
		if (resting) restClock += dt;
		const drift = 1 - smooth(0, 1.2, Math.abs(scroll - AT[near]));

		// the leaf
		const L = M.leaf(u);
		if (L.pos) leaf = Object.assign({}, L);
		else leaf = Object.assign({}, L, { pos: L.phase === 'home' ? LEAF_HOME.slice() : (idx >= 10 ? LEAF_DOOR : LEAF_FLOOR).slice() });
		if (HOVER[near] && drift > 0) {
			const h = leafAtShot(near, restClock);
			leaf.pos = mix3(leaf.pos, h.pos, drift);
		}

		// the artist walking past (only his shoes are seen)
		const wx = M.walker && (u > 0.01 || idx === 6) ? M.walker(u) : null;
		walker = wx === null || wx === undefined ? null : { x: wx, z: WALK_Z, heading: Math.PI / 2, phase: (wx - WALK_FROM) / STRIDE };

		// the camera: the move's path, plus the resting shot's drift
		let c = M.cam(u, A.cam(0), B.cam(0), leaf);
		if (drift > 0 && restClock > 0) {
			const S = SHOTS[near];
			const d0 = S.cam(0), d1 = S.cam(restClock);
			c = cam(
				add3(c.eye, scale3(sub3(d1.eye, d0.eye), drift)),
				add3(c.target, scale3(sub3(d1.target, d0.target), drift)),
				c.fov + (d1.fov - d0.fov) * drift,
				c.roll + (d1.roll - d0.roll) * drift
			);
		}
		camNow = c;

		const la = lookOf(idx), lb = lookOf(idx + 1);
		const ml = Object.assign({}, la, M.look(u, la, lb, leaf, c.eye));
		// at rest, a shot always looks the way it was set up
		if (drift > 0) {
			const sl = lookOf(near);
			for (const k in sl) if (typeof sl[k] === 'number') ml[k] = lerp(ml[k], sl[k], drift);
		}
		setLook(ml);

		// the words: only once the camera has come to rest on a shot
		const settled = resting && Math.abs(target - scroll) < 0.02;
		const want = settled ? near : -1;
		if (want !== shown) {
			shown = want;
			if (want >= 0) showUI(want);
			else hideUI();
		}
		progress.querySelectorAll('i').forEach((e, k) => e.classList.toggle('on', k === near));

		const sc = shown >= 0 ? cards[shown] : null;
		if (sc && sc.fill && !sc.filled) {
			// the painting's words arrived late (slow connection)
			sc.fill();
			if (sc.filled) {
				sc.classList.remove('on');
				void sc.offsetWidth;
				sc.classList.add('on');
			}
		}

		// fading up from black at the start (and on replay)
		const fi = clamp01((time - fadeIn.start) / 2.6);
		if (fi < 1) {
			look.fade = Math.max(look.fade, 1 - smooth(0, 1, fi));
			look.fadeColor = [0, 0, 0];
		}

		if (DEBUG && window.__camOverride) camNow = window.__camOverride;
		if (DEBUG && window.__lookOverride) Object.assign(look, window.__lookOverride);

		return {
			camera: camNow,
			walker,
			// the far door: shut until the gust, then open
			door: M.door ? M.door(u) : (idx >= 12 ? 1 : 0),
			look,
			leaf: leafState(dt)
		};
	}

	// test hooks (only with ?tourdebug in the address)
	if (DEBUG) {
		window.__tour = {
			go, exit, wind,
			seek(i, u) { scroll = target = AT[i] + (AT[i + 1] - AT[i]) * u; auto = false; lastInput = now + 1e6; fadeIn.start = now - 10; started = true; },
			jump(i) { scroll = target = AT[i]; auto = false; restClock = 0; lastInput = now; fadeIn.start = now - 10; started = true; },
			state: () => ({ current: nearestShot(scroll), scroll: +scroll.toFixed(3), target: +target.toFixed(3), shown, move: Math.abs(target - scroll) > 0.02 ? { p: scroll } : null, camNow, leaf, look })
		};
	}


	return {
		update,
		get active() { return active && !exiting; },
		// after "Explore freely": glide from the tour's camera into the
		// visitor's own over a moment, then let go entirely
		handover(time) {
			if (!exiting) return null;
			const p = clamp01((time - exiting.start) / 1.8);
			if (p >= 1) {
				active = false;
				return null;
			}
			return { from: exiting.fromCam, fromLook: exiting.fromLook, k: sineInOut(p) };
		},
		// the far door once the tour is over
		restingDoor: () => restingDoor,
		// where the leaf is once the tour is over (or null: not shown)
		restingLeaf() {
			if (!restingLeaf) return null;
			leaf = restingLeaf;
			return leafState(0);
		},
		mix: mixCam,
		cam
	};
};

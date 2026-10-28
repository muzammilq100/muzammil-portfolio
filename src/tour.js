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
const { C: WING } = require('./wing');


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
			const push = 2.2 * (1 - Math.exp(-tt / 14));
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
	}
];


/* ===========================================================
 * THE MOVES BETWEEN SHOTS
 * u goes 0 → 1 over `dur` seconds; `from` and `to` are the two
 * resting cameras at the moment the move starts and the arrival pose
 * ===========================================================
 */

const WHITE = [1.0, 0.96, 0.88];

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
	}
];

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
	gap: 7px;
	pointer-events: none;
}
.tour-progress i {
	display: block;
	width: 18px;
	height: 2px;
	border-radius: 1px;
	background: rgba(244,236,223,.28);
	transition: background .6s ease, width .6s ease;
}
.tour-progress i.on { background: #e9cf9a; width: 30px; }

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

	// 4: its story (filled in once the painting has loaded)
	const story = el('div', 'tour-card tour-story', `
		<span class="tour-line tour-kicker">Oil on canvas</span>
		<h2 class="tour-title tour-letters"></h2>
		<span class="tour-rule"></span>
		<div class="tour-body"></div>
		<div class="tour-line tour-end">
			<button type="button" class="tour-btn" data-act="free">Walk the gallery</button>
			<button type="button" class="tour-btn quiet" data-act="replay">Replay</button>
		</div>`);
	const storyTitle = story.querySelector('.tour-title');
	const storyBody = story.querySelector('.tour-body');

	const cards = [intro, aboutCard, sky, master, story];
	root.append(...cards, mark, free, progress, hint);
	document.body.appendChild(root);
	document.body.classList.add('touring');

	let storyFilled = false;
	function fillStory() {
		const p = opts.masterpiece && opts.masterpiece();
		if (!p || storyFilled) return;
		storyFilled = true;
		const title = p.title || '';
		// the title writes itself in, letter by letter
		// (letters grouped by word, so a line never breaks inside a word)
		let n = 0;
		storyTitle.innerHTML = title.split(' ').map((word) =>
			'<span class="tour-word">' + word.split('').map((ch) =>
				`<span style="transition-delay:${(0.35 + (n++) * 0.045).toFixed(3)}s">${esc(ch)}</span>`).join('') + '</span>'
		).join(' ');
		storyTitle.setAttribute('aria-label', title);
		const after = 0.35 + title.length * 0.045 + 0.2;
		story.querySelector('.tour-rule').style.transitionDelay = after.toFixed(2) + 's';
		const paras = String(p.description || '').split(/\n\s*\n/).filter((s) => s.trim());
		storyBody.innerHTML = paras.map((s) => `<p class="tour-line">${esc(s.trim())}</p>`).join('');
		story.querySelector('.tour-kicker').style.transitionDelay = '0.1s';
		storyBody.querySelectorAll('.tour-line').forEach((e, i) => {
			e.style.transitionDelay = (after + 0.3 + Math.min(i, 6) * 0.35).toFixed(2) + 's';
		});
		story.querySelector('.tour-end').style.transitionDelay = (after + 1.2).toFixed(2) + 's';
	}

	// phones swipe, laptops scroll (or click, or press the arrow keys)
	const fine = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
	const HINTS = fine
		? ['Scroll to begin', 'Scroll to follow the leaf', 'Scroll to follow the light', 'Scroll for its story', '']
		: ['Swipe up to begin', 'Swipe to follow the leaf', 'Swipe to follow the light', 'Swipe for its story', ''];


	/* -------------------------------------------------------
	 * STATE
	 * ----------------------------------------------------- */

	let active = true;
	let current = 0;          // the shot we are at (or leaving)
	let move = null;          // { from, to, dir, start, fromCam, fromLeaf }
	let arrived = 0;          // when we arrived at `current`
	let now = 0;
	let exiting = null;       // { start, fromCam }

	const look = Object.assign({}, lookOf(0));
	let camNow = SHOTS[0].cam(0);
	let leaf = { phase: 'home', pos: LEAF_HOME.slice(), tumble: 0 };
	let leafClock = 0;

	function showUI(i) {
		if (i === 4) {
			// write the words in first, so they can animate in
			fillStory();
			storyBody.scrollTop = 0;
			void story.offsetWidth;
		}
		cards.forEach((c, k) => c.classList.toggle('on', k === i));
		progress.querySelectorAll('i').forEach((e, k) => e.classList.toggle('on', k === i));
		hintText.textContent = HINTS[i] || '';
		hint.classList.toggle('on', !!HINTS[i]);
	}
	function hideUI() {
		cards.forEach((c) => c.classList.remove('on'));
		hint.classList.remove('on');
	}

	function go(dir, fromWheel) {
		if (!active || exiting) return;
		if (move) {
			// (a scroll wheel keeps sending for a while after one flick:
			// it never changes a move already under way)
			if (fromWheel) return;
			if (dir === move.dir) {
				// impatient: the same way again plays the move faster
				move.speed = Math.min(3, move.speed + 1.2);
			} else {
				// changed their mind: turn round from right where we are
				move.dir = dir;
				move.p = 1 - move.p;
				const t = move.from;
				move.from = move.to;
				move.to = t;
				move.fromCam = null;
				move.fromLeaf = null;
				move.speed = 1.6;
				progress.querySelectorAll('i').forEach((e, k) => e.classList.toggle('on', k === move.to));
			}
			return;
		}
		const to = current + dir;
		if (to < 0 || to >= SHOTS.length) return;
		hideUI();
		// the move that joins the two shots (played backwards when going back)
		const idx = dir > 0 ? current : to;
		move = {
			idx,
			dir,
			from: current,
			to,
			start: now,
			p: 0,
			speed: 1,
			fromCam: camNow,
			fromLook: Object.assign({}, look),
			fromLeaf: leaf.pos.slice()
		};
		progress.querySelectorAll('i').forEach((e, k) => e.classList.toggle('on', k === to));
	}


	/* -------------------------------------------------------
	 * INPUT: swipes, scrolling, keys, clicks
	 * ----------------------------------------------------- */

	let down = null;
	let wheelLock = 0;

	const stop = (e) => e.stopPropagation();
	['touchstart', 'touchmove', 'touchend', 'mousedown', 'mouseup', 'click', 'contextmenu'].forEach((t) => root.addEventListener(t, stop));

	root.addEventListener('pointerdown', (e) => {
		e.stopPropagation();
		if (e.target.closest('button') || e.target.closest('.tour-body')) return;
		down = { x: e.clientX, y: e.clientY, t: performance.now() };
	});
	root.addEventListener('pointerup', (e) => {
		e.stopPropagation();
		const d = down;
		down = null;
		if (!d) return;
		const dx = e.clientX - d.x, dy = e.clientY - d.y;
		const dist = Math.hypot(dx, dy);
		if (dist > 40) {
			// up or left = onwards, down or right = back
			const onwards = Math.abs(dy) > Math.abs(dx) ? dy < 0 : dx < 0;
			go(onwards ? 1 : -1);
		} else if (dist < 10 && performance.now() - d.t < 500) {
			// a tap or click moves on too
			go(1);
		}
	});
	root.addEventListener('pointercancel', () => { down = null; });

	root.addEventListener('wheel', (e) => {
		if (e.target.closest('.tour-body')) {
			const b = storyBody;
			const atEnd = b.scrollTop + b.clientHeight >= b.scrollHeight - 2 && e.deltaY > 0;
			const atTop = b.scrollTop <= 0 && e.deltaY < 0;
			if (!atEnd && !atTop) return;
		}
		e.preventDefault();
		if (performance.now() < wheelLock || Math.abs(e.deltaY) < 8) {
			// still scrolling from the last flick: wait for it to calm down
			wheelLock = Math.max(wheelLock, performance.now() + 250);
			return;
		}
		wheelLock = performance.now() + 1200;
		go(e.deltaY > 0 ? 1 : -1, true);
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
	story.addEventListener('click', (e) => {
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
		[39.4, Math.PI]
	];

	let restingLeaf = null;

	function exit() {
		if (!active || exiting) return;
		const at = move ? move.to : current;
		const h = HANDOVER[at];
		// the leaf stays in the tree, or on the floor where it landed
		restingLeaf = at <= 1 ? { phase: 'home', pos: LEAF_HOME.slice() } : at >= 3 ? { phase: 'floor', pos: LEAF_FLOOR.slice() } : null;
		if (h && fps.place) fps.place(h[0], h[1]);
		exiting = { start: now, fromCam: camNow, fromLook: Object.assign({}, look) };
		hideUI();
		root.hidden = true;
		document.body.classList.remove('touring');
		if (opts.onExit) opts.onExit();
	}

	function replay() {
		current = 0;
		move = null;
		arrived = now;
		leaf = { phase: 'home', pos: LEAF_HOME.slice(), tumble: 0 };
		Object.assign(look, lookOf(0), { fade: 1, fadeColor: [0, 0, 0] });
		fadeIn = { start: now };
		showUI(0);
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
			m = mat4.rotateY(m, m, 0.65);
		} else {
			m = mat4.rotateY(m, m, leafClock * 0.9 * k + 0.65);
			m = mat4.rotateX(m, m, Math.sin(leafClock * 2.3) * 0.9 * k);
			m = mat4.rotateZ(m, m, Math.sin(leafClock * 1.7 + 1.0) * 1.1 * k + (leaf.swing || 0) * 0.9);
		}
		return { visible: true, model: m };
	}

	function setLook(l) {
		for (const k in DEFAULT_LOOK) look[k] = l[k] !== undefined ? l[k] : DEFAULT_LOOK[k];
	}

	let lastTime = 0;

	function update(time) {
		const dt = Math.min(0.1, Math.max(0, time - lastTime));
		lastTime = time;
		now = time;
		if (!started) { started = true; fadeIn.start = time; arrived = time; showUI(0); }

		if (exiting) {
			return null;
		}

		if (move) {
			const M = MOVES[move.idx];
			move.p = clamp01(move.p + dt * move.speed / M.dur);
			const p = move.p;
			// u runs forwards along the move, or backwards when going back
			const u = move.dir > 0 ? p : 1 - p;
			const A = SHOTS[move.idx], B = SHOTS[move.idx + 1];
			const aCam = A.cam(0), bCam = B.cam(0);

			// the leaf
			const L = M.leaf(u);
			if (L.pos) {
				// blend from wherever the leaf really was when the move began
				const w = move.fromLeaf ? 1 - smooth(0, 0.25, p) : 0;
				const startPos = move.dir > 0 ? M.leaf(0).pos : M.leaf(1).pos;
				const off = startPos && move.fromLeaf ? sub3(move.fromLeaf, startPos) : [0, 0, 0];
				leaf = Object.assign({}, L, { pos: add3(L.pos, scale3(off, w)) });
			} else {
				leaf = Object.assign({}, L, { pos: L.phase === 'home' ? LEAF_HOME.slice() : LEAF_FLOOR.slice() });
			}

			// the camera, joined smoothly to where it really was
			let c = M.cam(u, aCam, bCam, leaf);
			const startCam = move.dir > 0 ? M.cam(0, aCam, bCam, leaf) : M.cam(1, aCam, bCam, leaf);
			const w = move.fromCam ? 1 - sineInOut(clamp01(p / 0.35)) : 0;
			if (w > 0) c = cam(
				add3(c.eye, scale3(sub3(move.fromCam.eye, startCam.eye), w)),
				add3(c.target, scale3(sub3(move.fromCam.target, startCam.target), w)),
				c.fov + (move.fromCam.fov - startCam.fov) * w,
				c.roll + (move.fromCam.roll - startCam.roll) * w
			);
			camNow = c;

			const la = lookOf(move.idx), lb = lookOf(move.idx + 1);
			const l = M.look(u, la, lb, leaf, c.eye);
			setLook(Object.assign({}, la, l));

			if (p >= 1) {
				current = move.to;
				move = null;
				arrived = time;
				showUI(current);
				wheelLock = performance.now() + 450;
			}
		} else {
			const tt = time - arrived;
			camNow = SHOTS[current].cam(tt);
			if (current === 4 && !storyFilled) {
				// the painting's words arrived late (slow connection)
				fillStory();
				if (storyFilled) {
					story.classList.remove('on');
					void story.offsetWidth;
					story.classList.add('on');
				}
			}
			setLook(lookOf(current));
			if (current <= 1) leaf = { phase: 'home', pos: LEAF_HOME.slice(), tumble: 0 };
			else if (current === 2) {
				// hovering and turning in the sun
				leaf = {
					phase: 'fly',
					pos: add3(LEAF_SKY, [Math.sin(tt * 0.55) * 0.18, Math.sin(tt * 0.8) * 0.07, (1 - Math.cos(tt * 0.45)) * 0.12]),
					tumble: 0.5
				};
			} else leaf = { phase: 'floor', pos: LEAF_FLOOR.slice(), tumble: 0 };
		}

		// fading up from black at the start (and on replay)
		const fi = clamp01((time - fadeIn.start) / 2.6);
		if (fi < 1) {
			look.fade = Math.max(look.fade, 1 - smooth(0, 1, fi));
			look.fadeColor = look.fade > 0 && !(move && move.idx === 0) ? [0, 0, 0] : look.fadeColor;
		}

		if (DEBUG && window.__camOverride) camNow = window.__camOverride;

		return {
			camera: camNow,
			look,
			leaf: leafState(dt)
		};
	}

	// test hooks (only with ?tourdebug in the address)
	if (DEBUG) {
		window.__tour = {
			go, exit,
			jump(i) { current = i; move = null; arrived = now; fadeIn.start = now - 10; started = true; showUI(i); },
			state: () => ({ current, move, camNow, leaf, look })
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

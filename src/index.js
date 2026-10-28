'use strict';

/*
 * RENAISSANCE ART GALLERY
 *
 * Museum-mode presentation:
 * - eye-level camera only
 * - horizontal looking only
 * - calm walking
 * - plain translucent title card when approaching a painting
 * - tap/click plaque to open description
 * - mobile touch controls
 * - animated story overlay
 */

// phones get a lighter version of the gallery, laptops get everything,
// and any device that struggles steps down a notch (see quality.js)
const quality = require('./quality');

// the polished floor reflects the room; off on phones, and switched off
// automatically if a laptop turns out to be too slow for it
var useReflexion = quality.reflection;
var showStats = false;


/* -----------------------------------------------------------
 * FIELD OF VIEW
 * --------------------------------------------------------- */

const mapVal = (value, min1, max1, min2, max2) =>
	min2 + (value - min1) * (max2 - min2) / (max1 - min1);

var fovX = () =>
	mapVal(
		window.innerWidth / window.innerHeight,
		16 / 9,
		9 / 16,
		1.7,
		Math.PI / 3
	);

if (
	navigator.userAgent.match(
		/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
	)
) {
	fovX = () =>
		mapVal(
			window.innerWidth / window.innerHeight,
			16 / 9,
			9 / 16,
			1.5,
			Math.PI / 3
		);
}

var fovY = () =>
	2 *
	Math.atan(
		Math.tan(fovX() * 0.5) *
		window.innerHeight /
		window.innerWidth
	);


/* -----------------------------------------------------------
 * LIBRARIES
 * --------------------------------------------------------- */

const Stats = require('stats.js');

var stats = new Stats();
stats.showPanel(0);

if (showStats) {
	document.body.appendChild(stats.dom);
}


/* -----------------------------------------------------------
 * WEBGL / GALLERY
 * --------------------------------------------------------- */

let regl;
let map;
let drawMap;
let placement;
let drawPainting;
let fps;

regl = require('regl')({
	extensions: [
		'OES_element_index_uint',
		'OES_standard_derivatives'
	],
	optionalExtensions: [
		'EXT_texture_filter_anisotropic',
		// lets the camera module see how far away things are (light shafts,
		// depth of field)
		'WEBGL_depth_texture'
	],
	attributes: {
		alpha: false,
		// the picture is finished off-screen (post.js), which smooths the
		// edges itself
		antialias: false
	},
	pixelRatio: quality.pixelRatio
});


map = require('./map')();

const mesh = require('./mesh');

drawMap = mesh(
	regl,
	map,
	useReflexion
);

placement = require('./placement')(regl, map);

drawPainting = require('./painting')(regl);

const drawStatues = require('./statues')(regl, map);

const drawStreet = require('./street')(regl);

const drawGlass = require('./glass')(regl);

// the cloister garden beyond the corridor windows
const drawGarden = require('./garden')(regl);

// the Florence street beyond the corridor's far door
const drawFlorence = require('./florence')(regl);

// the tree in the alcove by the entrance
const drawTree = require('./tree')(regl);

// the artist himself, reading under the glass dome, and the About card
const drawAvatar = require('./avatar')(regl);
const about = require('./about');
const { A: COURT } = require('./alcove');

fps = require('./fps')(
	map,
	fovY
);

// the film camera: light shafts, glow, depth of field and the grade
const post = require('./post')(regl, quality);

// the far door's two leaves, which a gust throws open in the tour
const drawFarDoor = require('./fardoor')(regl);

// the leaf that falls from the tree, and the dust in the sunbeams
const drawLeaf = require('./leaf')(regl);
const drawDust = require('./dust')(regl, quality);

// the cinematic tour the visit opens with (see tour.js)
const tour = require('./tour')({
	fps,
	// the paintings (with their titles and words), once they have loaded
	paintings: () => placement.interactables(),
	onExit: () => fps.setPaused(false)
});
fps.setPaused(true);
if (/tourdebug/.test(location.search)) window.__post = post;

// where the camera is this frame (the tour's, or the visitor's own)
const camView = [];
const camProj = [];
const camEye = [7, 2, 1.6];

// the shader picks the picture lights nearest the camera
map.viewer = camEye;


/* -----------------------------------------------------------
 * RENDER CONTEXT
 * --------------------------------------------------------- */

const context = regl({
	cull: {
		enable: true,
		face: 'back'
	},

	uniforms: {
		view: () => camView,
		proj: () => camProj,
		yScale: 1.0,
		mirrorOn: () => (useReflexion ? 1.0 : 0.0)
	}
});


const reflexion = regl({
	cull: {
		enable: true,
		face: 'front'
	},

	uniforms: {
		yScale: -1.0
	}
});


/* ===========================================================
 * MUSEUM UI
 * ===========================================================
 */

const style = document.createElement('style');

style.textContent = `

/* -----------------------------------------------------------
   PAGE
----------------------------------------------------------- */

html,
body {
	margin: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: #080706;
}

canvas {
	display: block;
	width: 100vw;
	height: 100vh;
}




/* ===========================================================
   TITLE CARD (appears when you walk up to a painting)
   Plain, beige brown, see-through
=========================================================== */

.painting-plaque {
	position: fixed;
	left: 50%;
	bottom: 28px;
	z-index: 30;
	transform: translateX(-50%) translateY(10px);
	width: min(520px, calc(100vw - 30px));
	max-width: 520px;
	min-width: 0;
	box-sizing: border-box;
	padding: 14px 22px;
	border: none;
	border-radius: 4px;
	background: rgba(158,130,98,.62);
	color: #fffaf0;
	font: 500 13px/1.3 Georgia, serif;
	letter-spacing: .05em;
	text-align: center;
	cursor: pointer;
	opacity: 0;
	visibility: hidden;
	pointer-events: none;
	touch-action: manipulation;
	-webkit-tap-highlight-color: transparent;
	user-select: none;
	-webkit-user-select: none;
	backdrop-filter: blur(6px);
	-webkit-backdrop-filter: blur(6px);
	transition: opacity .28s ease, transform .28s ease, background .28s ease;
}

.painting-plaque.visible {
	opacity: 1;
	visibility: visible;
	pointer-events: auto;
	transform: translateX(-50%) translateY(0);
}

.painting-plaque:hover {
	background: rgba(170,141,107,.72);
}

.painting-plaque:active {
	transform: translateX(-50%) scale(.985);
}


/* ===========================================================
   DESCRIPTION OVERLAY
=========================================================== */

.story-overlay {
	position: fixed;
	inset: 0;
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: clamp(20px, 5vw, 70px);
	background: rgba(18,13,8,.30);
	opacity: 0;
	visibility: hidden;
	pointer-events: none;
	touch-action: auto;
	transition: opacity .38s ease, visibility 0s linear .38s;
}

.story-overlay.open {
	opacity: 1;
	visibility: visible;
	pointer-events: auto;
	transition: opacity .38s ease;
}


/* ===========================================================
   DESCRIPTION CARD
   Plain beige brown, translucent, no ornament
=========================================================== */

.story-card {
	position: relative;
	width: min(760px, 88vw);
	max-height: 82vh;
	overflow-y: auto;
	padding: 40px clamp(25px, 5vw, 56px) 44px;
	box-sizing: border-box;
	border: none;
	border-radius: 4px;
	background: rgba(150,122,92,.78);
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	box-shadow: 0 12px 40px rgba(0,0,0,.25);
	color: #fffaf0;
	transform: translateY(12px);
	transition: transform .4s ease;
	touch-action: auto;
	-webkit-overflow-scrolling: touch;
}

.story-overlay.open .story-card {
	transform: translateY(0);
}

.story-title {
	margin: 0 38px 22px 0;
	color: #ffffff;
	font: normal clamp(24px, 3vw, 36px) / 1.15 Georgia, serif;
	letter-spacing: .01em;
}

.story-body {
	margin: 0;
	white-space: pre-line;
	font: normal clamp(15px, 1.5vw, 18px) / 1.72 Georgia, serif;
	color: rgba(255,250,240,.96);
}

.story-close {
	position: absolute;
	top: 12px;
	right: 14px;
	width: 34px;
	height: 34px;
	border: 1px solid rgba(255,248,235,.40);
	border-radius: 50%;
	background: transparent;
	color: #fffaf0;
	cursor: pointer;
	font: 24px/29px Georgia, serif;
	touch-action: manipulation;
	z-index: 5;
	transition: background .2s ease;
}

.story-close:hover {
	background: rgba(255,248,235,.16);
}


/* ===========================================================
   ABOUT: the camera glides into the tree court, so the card
   sits to the right and leaves the view clear
=========================================================== */

.story-overlay.about-mode {
	justify-content: flex-end;
	background: transparent;
}

.story-overlay.about-mode .story-card {
	width: min(440px, 38vw);
	max-height: 86vh;
	transform: translateX(16px);
}

.story-overlay.about-mode.open .story-card {
	transform: translateX(0);
}


/* ===========================================================
   MOBILE
=========================================================== */

@media (max-width: 600px) {



	.painting-plaque {

		bottom: 20px;

		width:
			calc(
				100vw - 24px
			);

		max-width: none;

		min-width: 0;

		font-size: 12px;

		padding:
			13px
			16px;
	}


	.story-overlay {

		align-items:
			flex-end;

		padding:
			12px;
	}


	.story-card {

		width:
			calc(
				100vw - 24px
			);

		max-height:
			86vh;

		padding:
			36px
			22px
			32px;
	}


	.story-title {

		font-size:
			27px;

		margin-right:
			42px;
	}


	.story-body {

		font-size:
			16px;

		line-height:
			1.75;
	}


	.story-close {

		top: 10px;

		right: 10px;
	}

	.story-overlay.about-mode .story-card {
		width: calc(100vw - 24px);
		max-height: 46vh;
		transform: translateY(16px);
	}

	.story-overlay.about-mode.open .story-card {
		transform: translateY(0);
	}
}
`;

document.head.appendChild(style);


/* ===========================================================
   TITLE CARD
=========================================================== */

const plaque =
	document.createElement('button');

plaque.className =
	'painting-plaque';

plaque.type =
	'button';

plaque.setAttribute(
	'aria-label',
	'Read painting'
);

document.body.appendChild(plaque);


/* ===========================================================
   STORY OVERLAY
=========================================================== */

const overlay =
	document.createElement('div');

overlay.className =
	'story-overlay';

overlay.innerHTML = `

	<article
		class="story-card"
		role="dialog"
		aria-modal="true"
		aria-labelledby="story-title"
	>

		<button
			class="story-close"
			type="button"
			aria-label="Close"
		>
			×
		</button>

		<h2
			class="story-title"
			id="story-title"
		></h2>

		<p
			class="story-body"
			id="story-body"
		></p>

	</article>
`;

document.body.appendChild(overlay);


/* ===========================================================
   STORY REFERENCES
=========================================================== */

const storyTitle =
	overlay.querySelector(
		'#story-title'
	);

const storyBody =
	overlay.querySelector(
		'#story-body'
	);

const closeStory =
	overlay.querySelector(
		'.story-close'
	);


/* ===========================================================
   STATE
=========================================================== */

let activePainting = null;

// how far the camera has glided into the tree court for the About card
const aboutZoom = { p: 0, target: 0, last: 0 };

const ABOUT_CARD = { title: about.title, description: about.text, isAbout: true };

let currentPlaque = null;


/* ===========================================================
   OPEN STORY
=========================================================== */

function openStory(painting) {

	if (!painting) {
		return;
	}

	activePainting =
		painting;

	storyTitle.textContent =
		painting.title || '';

	storyBody.textContent =
		painting.description || '';

	overlay.classList.toggle('about-mode', !!painting.isAbout);

	overlay.classList.add(
		'open'
	);

	// the About card: glide into the tree court to look at him
	aboutZoom.target = painting.isAbout ? 1 : 0;

	currentPlaque =
		painting;

	plaque.classList.remove(
		'visible'
	);

	/*
	 * Stop walking while reading.
	 */
	fps.setPaused(true);
}


/* ===========================================================
   CLOSE STORY
=========================================================== */

function closeStoryPanel() {

	overlay.classList.remove(
		'open'
	);

	aboutZoom.target = 0;

	activePainting =
		null;

	currentPlaque =
		null;

	fps.setPaused(false);
}


/* ===========================================================
   READ PLAQUE
   IMPORTANT MOBILE FIX
=========================================================== */

function readCurrentPainting(e) {

	if (e) {

		e.preventDefault();

		e.stopPropagation();
	}

	if (!currentPlaque) {
		return;
	}

	openStory(
		currentPlaque
	);
}


/*
 * Pointer event.
 * Works for mouse and modern touch devices.
 */

plaque.addEventListener(
	'pointerup',
	readCurrentPainting,
	true
);


/*
 * Explicit touch event.
 * This prevents the mobile movement system
 * from swallowing the tap.
 */

plaque.addEventListener(
	'touchend',
	readCurrentPainting,
	{
		passive: false,
		capture: true
	}
);


/*
 * Normal click fallback.
 */

plaque.addEventListener(
	'click',
	(e) => {

		if (e) {

			e.preventDefault();

			e.stopPropagation();
		}

		if (
			activePainting === null &&
			currentPlaque
		) {

			openStory(
				currentPlaque
			);
		}
	},
	true
);


/* ===========================================================
   CLOSE EVENTS
=========================================================== */

closeStory.addEventListener(
	'click',
	closeStoryPanel
);


/*
 * Tapping outside the story card closes it.
 */

overlay.addEventListener(
	'click',
	(e) => {

		if (
			e.target === overlay
		) {

			closeStoryPanel();
		}
	}
);


/*
 * Escape closes the story.
 */

window.addEventListener(
	'keydown',
	(e) => {

		if (
			e.code === 'Escape' &&
			overlay.classList.contains('open')
		) {

			closeStoryPanel();
		}
	}
);


/* ===========================================================
   MATRIX HELPERS
=========================================================== */

function multiplyPoint(
	m,
	p
) {

	const x = p[0];

	const y = p[1];

	const z = p[2];

	return [

		m[0] * x +
		m[4] * y +
		m[8] * z +
		m[12],

		m[1] * x +
		m[5] * y +
		m[9] * z +
		m[13],

		m[2] * x +
		m[6] * y +
		m[10] * z +
		m[14],

		m[3] * x +
		m[7] * y +
		m[11] * z +
		m[15]
	];
}


/* ===========================================================
   DISTANCE
=========================================================== */

function horizontalDistance(
	a,
	b
) {

	return Math.hypot(
		a[0] - b[0],
		a[2] - b[2]
	);
}


/* ===========================================================
   PLAQUE DETECTION
=========================================================== */

/*
 * Deliberately simple.
 *
 * If the visitor is within 10 metres of a painting,
 * the nearest painting gets a READ plaque.
 *
 * There is NO projection calculation and NO facing
 * requirement. This makes the interaction reliable.
 */

function updatePlaque() {

	if (activePainting) {
		return;
	}

	if (tour.active) {
		currentPlaque = null;
		plaque.classList.remove('visible');
		return;
	}

	const candidates =
		placement.interactables();

	// which way the visitor is looking (flat)
	const fx = fps.forward[0], fz = fps.forward[2];
	const fl = Math.hypot(fx, fz) || 1;

	let best = null;
	let bestDist = Infinity;

	for (const painting of candidates) {

		const pp = painting.paintingPosition;

		// the wall's normal (into the room) and the direction along it
		let nx = 0, nz = 0;
		if (painting.side === 'left') nx = 1;
		else if (painting.side === 'right') nx = -1;
		else if (painting.side === 'corridor') nz = 1;
		else nz = -1;

		const dx = pp[0] - fps.pos[0];
		const dz = pp[2] - fps.pos[2];

		// distance straight out from the wall, and how far to one side
		const out = -(dx * nx + dz * nz);
		const along = Math.abs(dx * nz - dz * nx);

		// facing the painting: looking within about 25 degrees of it
		const facing = -(fx * nx + fz * nz) / fl;

		// close enough: side walls are always close from the centre line,
		// the end painting only from the last stretch of the hall
		const near = painting.side === 'end' ? 11.0 : 8.0;

		const halfWidth = (painting.width || 2) / 2;

		if (
			facing > 0.9 &&
			out > 0.5 && out < near &&
			along < halfWidth + 0.8
		) {
			if (out < bestDist) {
				best = painting;
				bestDist = out;
			}
		}
	}

	// facing the tree court from the hall: the About card
	if (!best) {
		const px = fps.pos[0], pz = fps.pos[2];
		const facingCourt = fx / fl > 0.85;
		if (facingCourt && px < 13.6 && pz > COURT.z0 - 0.5 && pz < COURT.z1 + 0.5) {
			best = Object.assign({}, ABOUT_CARD, { plaqueTitle: about.name });
		}
	}

	if (best) {

		currentPlaque = best;

		plaque.textContent = best.isAbout ? 'ABOUT  ·  ' + best.plaqueTitle : 'READ  ·  ' + best.title;

		plaque.classList.add('visible');

	} else {

		currentPlaque = null;

		plaque.classList.remove('visible');
	}
}


/* ===========================================================
   THE ARTIST'S BRUSH
   Tapping or clicking the floating brush opens the About card.
=========================================================== */

const glMat4 = require('gl-mat4');

function brushOnScreen() {
	const st = drawAvatar.state;
	if (!st || !st.glowPos) return null;
	const v = multiplyPoint(fps.view(), [st.glowPos[0], st.glowPos[1] - 0.08, st.glowPos[2], 1]);
	const c = multiplyPoint(fps.proj(), v);
	if (c[3] <= 0.05) return null;
	return [
		(c[0] / c[3] * 0.5 + 0.5) * window.innerWidth,
		(0.5 - c[1] / c[3] * 0.5) * window.innerHeight,
		c[3]
	];
}

let tapStart = null;

window.addEventListener('pointerdown', (e) => {
	tapStart = { x: e.clientX, y: e.clientY, t: performance.now() };
}, true);

window.addEventListener('pointerup', (e) => {
	const t0 = tapStart;
	tapStart = null;
	if (!t0 || activePainting || tour.active || !e.target || !/^(CANVAS|BODY)$/.test(e.target.tagName)) return;
	if (Math.hypot(e.clientX - t0.x, e.clientY - t0.y) > 12 || performance.now() - t0.t > 600) return;
	const b = brushOnScreen();
	if (!b) return;
	// with the mouse captured for looking around, aim from the middle of
	// the screen
	const locked = !!document.pointerLockElement;
	const x = locked ? window.innerWidth / 2 : e.clientX;
	const y = locked ? window.innerHeight / 2 : e.clientY;
	// a generous target: the brush is slim, and fingers are not
	const r = Math.max(e.pointerType === 'touch' ? 60 : 40, 260 / b[2]);
	if (Math.hypot(x - b[0], y - b[1]) < r) {
		e.preventDefault();
		e.stopPropagation();
		openStory(ABOUT_CARD);
	}
}, true);


/* ===========================================================
   ABOUT ZOOM
   While the About card is open the camera glides from wherever
   the visitor stands into the tree court, framing him on the left
   (or above the card, on a phone), and glides back when it closes.
=========================================================== */

function applyAboutZoom(time) {
	const dt = Math.min(Math.max(time - aboutZoom.last, 0), 0.1);
	aboutZoom.last = time;
	const step = dt / 1.6;
	aboutZoom.p = aboutZoom.target > aboutZoom.p ? Math.min(1, aboutZoom.p + step) : Math.max(0, aboutZoom.p - step);
	if (aboutZoom.p <= 0) return;

	const k = aboutZoom.p < 0.5 ? 2 * aboutZoom.p * aboutZoom.p : 1 - Math.pow(-2 * aboutZoom.p + 2, 2) / 2;
	const portrait = window.innerHeight > window.innerWidth;
	const st = drawAvatar.state;
	const hx = st && st.hipsPos ? st.hipsPos[0] : COURT.cx - 1.2;
	const hz = st && st.hipsPos ? st.hipsPos[2] : COURT.zc;

	const eye1 = portrait ? [hx - 2.3, 2.0, hz - 0.1] : [hx - 1.55, 1.55, hz + 0.3];
	const tgt1 = portrait ? [hx + 0.1, 0.2, hz - 0.1] : [hx + 0.1, 0.7, hz + 0.6];

	const p = fps.pos, f = fps.forward;
	const eye0 = [p[0], p[1], p[2]];
	const tgt0 = [p[0] + f[0], p[1] + f[1], p[2] + f[2]];
	const mix = (a, b) => a.map((v, i) => v + (b[i] - v) * k);
	// the eye travels along a curve that comes through the arch, so it
	// never passes through a wall on the way in or out
	const ctl = [COURT.cx - 6.2, 1.7, COURT.zc];
	const u = 1 - k;
	const eye = eye0.map((v, i) => u * u * v + 2 * u * k * ctl[i] + k * k * eye1[i]);
	glMat4.lookAt(fps.view(), eye, mix(tgt0, tgt1), [0, 1, 0]);
}


/* ===========================================================
   THE CAMERA FOR THIS FRAME
   During the tour the tour moves the camera; when the visitor takes
   over, the view glides from the tour's last shot into their own.
=========================================================== */

const FREE_LOOK = { fade: 0, fadeColor: [0, 0, 0], letterbox: 0, focus: 6, aperture: 0, exposure: 1, shafts: 1, vignette: 0 };
let leafNow = null;

function lookAtRolled(out, eye, target, roll) {
	const f = [target[0] - eye[0], target[1] - eye[1], target[2] - eye[2]];
	const fl = Math.hypot(f[0], f[1], f[2]) || 1;
	// right = forward x up
	let r = [-f[2] / fl, 0, f[0] / fl];
	const rl = Math.hypot(r[0], r[2]) || 1;
	r = [r[0] / rl, 0, r[2] / rl];
	const c = Math.cos(roll), s = Math.sin(roll);
	return glMat4.lookAt(out, eye, target, [r[0] * s, c, r[2] * s]);
}

function setCamera(time) {
	const aspect = window.innerWidth / window.innerHeight;
	const shot = post.shot;

	const t = tour.active ? tour.update(time) : null;
	const h = t ? null : tour.handover(time);

	let c = null;
	let look = FREE_LOOK;

	if (t) {
		c = t.camera;
		look = t.look;
		leafNow = t.leaf;
		// the artist leaves his bench to walk past the camera
		drawAvatar.setWalk(t.walker || null);
		drawFarDoor.setOpen(t.door || 0);
	} else {
		leafNow = tour.restingLeaf();
		drawAvatar.setWalk(null);
		drawFarDoor.setOpen(tour.restingDoor());
	}

	if (h) {
		// glide into the visitor's own view
		const p = fps.pos, f = fps.forward;
		const mine = tour.cam([p[0], p[1], p[2]], [p[0] + f[0], p[1] + f[1], p[2] + f[2]], fovY() * 180 / Math.PI, 0);
		c = tour.mix(h.from, mine, h.k);
		look = {};
		for (const k in FREE_LOOK) {
			look[k] = Array.isArray(FREE_LOOK[k]) ? FREE_LOOK[k] : h.fromLook[k] + (FREE_LOOK[k] - h.fromLook[k]) * h.k;
		}
	}

	if (c) {
		lookAtRolled(camView, c.eye, c.target, c.roll || 0);
		glMat4.perspective(camProj, c.fov * Math.PI / 180, aspect, 0.1, 700);
		camEye[0] = c.eye[0]; camEye[1] = c.eye[1]; camEye[2] = c.eye[2];
	} else {
		const v = fps.view(), pr = fps.proj();
		for (let i = 0; i < 16; i++) { camView[i] = v[i]; camProj[i] = pr[i]; }
		// where the eye really is (the About glide moves it off the walk)
		const t0 = v[12], t1 = v[13], t2 = v[14];
		camEye[0] = -(v[0] * t0 + v[1] * t1 + v[2] * t2);
		camEye[1] = -(v[4] * t0 + v[5] * t1 + v[6] * t2);
		camEye[2] = -(v[8] * t0 + v[9] * t1 + v[10] * t2);
	}

	for (const k in FREE_LOOK) shot[k] = look[k];
}


/* ===========================================================
   RENDER LOOP
=========================================================== */

let perfFrames = 0;
let perfStart = 0;

regl.frame(
	function ({ time }) {

		stats.begin();

		// after a few seconds, check the frame rate; if it is low, step
		// down one notch and check again
		perfFrames++;
		if (perfFrames === 60) perfStart = time;
		if (perfFrames === 180) {
			const fpsMeasured = 120 / Math.max(time - perfStart, 0.001);
			if (fpsMeasured < 32 && quality.stepDown()) {
				useReflexion = quality.reflection;
				perfFrames = 0;
			}
		}


		fps.tick({
			time
		});

		applyAboutZoom(time);


		placement.update(
			fps.pos,
			fps.fmouse[1],
			fovX()
		);


		updatePlaque();


		setCamera(time);

		post.capture(
			arguments[0],
			{ view: camView, proj: camProj, eye: camEye },
			() => {
				context(
					() => {

						if (
							useReflexion
						) {

							// the room upside down beneath the polished floor
							reflexion(
								() => {
									drawMap();
									drawStatues();
									drawTree();
									drawAvatar();
									drawPainting(
										placement.batch()
									);
									drawStreet();
									drawGarden();
									drawFlorence();
									drawLeaf(leafNow);
									drawFarDoor();
									drawGlass();
									drawFarDoor.glass();
								}
							);
						}

						drawMap();
						drawStatues();
						drawTree();
						drawAvatar();
						drawPainting(
							placement.batch()
						);

						// the street outside, seen through the door
						drawStreet();

						// the garden and the Florence street, through the corridor glass
						drawGarden();
						drawFlorence();

						// the leaf, and the dust glinting in the sunbeams
						drawLeaf(leafNow);
						drawFarDoor();
						drawDust();

						// glass last, over everything
						drawGlass();
						drawFarDoor.glass();
					}
				);
			}
		);

		post.present();

		stats.end();
	}
);
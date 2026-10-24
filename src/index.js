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

// the polished floor reflects the room; switched off automatically
// if the device turns out to be too slow for it
var useReflexion = true;
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
		'EXT_texture_filter_anisotropic'
	],
	attributes: {
		alpha: false
	}
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

fps = require('./fps')(
	map,
	fovY
);

// the shader picks the picture lights nearest the visitor
map.viewer = fps.pos;


/* -----------------------------------------------------------
 * RENDER CONTEXT
 * --------------------------------------------------------- */

const context = regl({
	cull: {
		enable: true,
		face: 'back'
	},

	uniforms: {
		view: fps.view,
		proj: fps.proj,
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

	overlay.classList.add(
		'open'
	);

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

	if (best) {

		currentPlaque = best;

		plaque.textContent = 'READ  ·  ' + best.title;

		plaque.classList.add('visible');

	} else {

		currentPlaque = null;

		plaque.classList.remove('visible');
	}
}


/* ===========================================================
   RENDER LOOP
=========================================================== */

let perfFrames = 0;
let perfStart = 0;

regl.frame(
	({ time }) => {

		stats.begin();

		// after a few seconds, check the frame rate once
		if (useReflexion) {
			perfFrames++;
			if (perfFrames === 30) perfStart = time;
			if (perfFrames === 150) {
				const fpsMeasured = 120 / Math.max(time - perfStart, 0.001);
				if (fpsMeasured < 32) {
					useReflexion = false;
				}
			}
		}


		fps.tick({
			time
		});


		placement.update(
			fps.pos,
			fps.fmouse[1],
			fovX()
		);


		updatePlaque();


		regl.clear({
			color: [
				0,
				0,
				0,
				1
			],

			depth: 1
		});


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

							drawPainting(
								placement.batch()
							);

							drawStreet();

							drawGarden();

							drawFlorence();

							drawGlass();
						}
					);
				}


				drawMap();

				drawStatues();

				drawPainting(
					placement.batch()
				);

				// the street outside, seen through the door
				drawStreet();

				// the garden and the Florence street, through the corridor glass
				drawGarden();

				drawFlorence();

				// glass last, over everything
				drawGlass();
			}
		);


		stats.end();
	}
);
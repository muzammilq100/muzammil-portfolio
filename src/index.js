'use strict';

/*
 * RENAISSANCE ART GALLERY
 *
 * Museum-mode presentation:
 * - eye-level camera only
 * - horizontal looking only
 * - calm walking
 * - gold reading plaque when approaching a painting
 * - tap/click plaque to open description
 * - mobile touch controls
 * - animated story overlay
 */

var useReflexion = false;
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

placement = require('./placement')(regl);

drawPainting = require('./painting')(regl);

fps = require('./fps')(
	map,
	fovY
);


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
		yScale: 1.0
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


/* -----------------------------------------------------------
   TOP MUSEUM HINT
----------------------------------------------------------- */

.museum-hint {
	position: fixed;

	left: 50%;
	top: 24px;

	transform: translateX(-50%);

	z-index: 20;

	pointer-events: none;

	padding: 9px 18px;

	border:
		1px solid
		rgba(202,160,76,.35);

	border-radius: 2px;

	background:
		rgba(13,10,7,.48);

	color:
		rgba(246,232,199,.72);

	font:
		12px/1.4
		Georgia,
		serif;

	letter-spacing: .14em;

	text-transform: uppercase;

	backdrop-filter:
		blur(5px);

	-webkit-backdrop-filter:
		blur(5px);

	transition:
		opacity .7s ease;
}

.museum-hint.hidden {
	opacity: 0;
}


/* ===========================================================
   GOLD READING PLAQUE
=========================================================== */

.painting-plaque {

	position: fixed;

	left: 50%;

	bottom: 28px;

	z-index: 30;

	transform:
		translateX(-50%)
		translateY(14px);

	width:
		min(
			520px,
			calc(100vw - 30px)
		);

	max-width: 520px;

	min-width: 0;

	padding:
		14px
		24px
		15px;

	border:
		1px solid
		#8f681d;

	border-radius: 2px;

	background:
		linear-gradient(
			180deg,
			#f4d783 0%,
			#c7942e 28%,
			#8b5b13 54%,
			#d5aa49 78%,
			#80520f 100%
		);

	box-shadow:
		0 3px 14px rgba(0,0,0,.55),
		inset 0 1px rgba(255,248,210,.7),
		inset 0 -2px rgba(70,39,4,.55);

	color:
		#211506;

	cursor:
		pointer;

	font:
		600 13px/1.25
		Georgia,
		serif;

	letter-spacing:
		.055em;

	text-align:
		center;

	text-shadow:
		0 1px rgba(255,240,180,.45);

	opacity: 0;

	visibility: hidden;

	pointer-events: none;

	touch-action: manipulation;

	-webkit-tap-highlight-color:
		transparent;

	user-select: none;

	-webkit-user-select: none;

	transition:
		opacity .28s ease,
		transform .28s ease,
		filter .28s ease;
}


/* Visible plaque */

.painting-plaque.visible {

	opacity: 1;

	visibility: visible;

	pointer-events: auto;

	transform:
		translateX(-50%)
		translateY(0);
}


/* Desktop hover */

.painting-plaque:hover {

	filter:
		brightness(1.12);

	transform:
		translateX(-50%)
		translateY(-2px);
}


/* Mobile / touch press */

.painting-plaque:active {

	transform:
		translateX(-50%)
		scale(.985);
}


/* Decorative screws */

.painting-plaque::before,
.painting-plaque::after {

	content: "";

	position: absolute;

	top: 50%;

	width: 5px;

	height: 5px;

	margin-top: -3px;

	border-radius: 50%;

	background:
		#5e3c0b;

	box-shadow:
		inset 0 1px
		rgba(255,224,130,.5);
}

.painting-plaque::before {
	left: 6px;
}

.painting-plaque::after {
	right: 6px;
}


/* ===========================================================
   STORY OVERLAY
=========================================================== */

.story-overlay {

	position: fixed;

	inset: 0;

	z-index: 100;

	display: flex;

	align-items: center;

	justify-content: center;

	padding:
		clamp(
			20px,
			5vw,
			70px
		);

	background:
		rgba(
			5,
			4,
			3,
			.58
		);

	backdrop-filter:
		blur(3px);

	-webkit-backdrop-filter:
		blur(3px);

	opacity: 0;

	visibility: hidden;

	pointer-events: none;

	touch-action: auto;

	transition:
		opacity .38s ease,
		visibility 0s linear .38s;
}


/* Open state */

.story-overlay.open {

	opacity: 1;

	visibility: visible;

	pointer-events: auto;

	transition:
		opacity .38s ease;
}


/* ===========================================================
   STORY CARD
=========================================================== */

.story-card {

	position: relative;

	width:
		min(
			760px,
			88vw
		);

	max-height:
		82vh;

	overflow-y: auto;

	padding:
		42px
		clamp(
			25px,
			5vw,
			58px
		)
		46px;

	box-sizing: border-box;

	border:
		1px solid
		rgba(
			204,
			164,
			82,
			.7
		);

	background:
		linear-gradient(
			rgba(20,15,10,.80),
			rgba(10,8,6,.88)
		),
		radial-gradient(
			circle at 50% 0%,
			rgba(210,168,83,.12),
			transparent 55%
		);

	box-shadow:
		0 20px 80px
		rgba(0,0,0,.65),

		inset 0 0 45px
		rgba(196,151,57,.055);

	color:
		#eadfc8;

	transform:
		translateY(18px)
		scale(.97);

	transition:
		transform .48s
		cubic-bezier(
			.2,
			.8,
			.2,
			1
		);

	touch-action: auto;

	-webkit-overflow-scrolling:
		touch;
}


/* Card animation */

.story-overlay.open
.story-card {

	transform:
		translateY(0)
		scale(1);
}


/* Decorative line */

.story-card::before {

	content: "";

	position: absolute;

	left: 16px;

	right: 16px;

	top: 15px;

	height: 1px;

	background:
		linear-gradient(
			90deg,
			transparent,
			#b88a37,
			transparent
		);
}


/* ===========================================================
   STORY TITLE
=========================================================== */

.story-title {

	margin:
		0
		35px
		25px
		0;

	color:
		#e0b65c;

	font:
		normal
		clamp(
			25px,
			3.2vw,
			39px
		)
		/
		1.12
		Georgia,
		serif;

	letter-spacing:
		.025em;
}


/* ===========================================================
   STORY BODY
=========================================================== */

.story-body {

	margin: 0;

	white-space:
		pre-line;

	font:
		normal
		clamp(
			15px,
			1.5vw,
			18px
		)
		/
		1.72
		Georgia,
		serif;

	color:
		rgba(
			240,
			232,
			216,
			.91
		);
}


/* ===========================================================
   CLOSE BUTTON
=========================================================== */

.story-close {

	position: absolute;

	top: 13px;

	right: 15px;

	width: 34px;

	height: 34px;

	border:
		1px solid
		rgba(
			208,
			169,
			91,
			.55
		);

	border-radius: 50%;

	background:
		rgba(
			0,
			0,
			0,
			.18
		);

	color:
		#d8b463;

	cursor:
		pointer;

	font:
		25px/29px
		Georgia,
		serif;

	touch-action:
		manipulation;

	z-index: 5;

	transition:
		background .2s ease,
		transform .2s ease;
}

.story-close:hover {

	background:
		rgba(
			210,
			170,
			90,
			.12
		);

	transform:
		rotate(90deg);
}


/* ===========================================================
   MOBILE
=========================================================== */

@media (max-width: 600px) {

	.museum-hint {

		top: 12px;

		font-size: 10px;

		padding:
			7px
			11px;
	}


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
   MUSEUM HINT
=========================================================== */

const hint =
	document.createElement('div');

hint.className =
	'museum-hint';

hint.textContent =
	'Walk through the gallery  ·  Approach a painting  ·  Read its plaque';

document.body.appendChild(hint);


/* ===========================================================
   GOLD PLAQUE
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

	hint.classList.add(
		'hidden'
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

	let best = null;

	let bestDist =
		Infinity;


	for (
		const painting of candidates
	) {

		const dist =
			horizontalDistance(
				fps.pos,
				painting.paintingPosition
			);


		/*
		 * Near enough to read.
		 */
		if (
			dist >= 10.0 ||
			dist < 0.9
		) {

			continue;
		}


		if (
			dist < bestDist
		) {

			best =
				painting;

			bestDist =
				dist;
		}
	}


	if (best) {

		currentPlaque =
			best;

		plaque.textContent =
			'READ  ·  ' +
			best.title;

		plaque.classList.add(
			'visible'
		);

	} else {

		currentPlaque =
			null;

		plaque.classList.remove(
			'visible'
		);
	}
}


/* ===========================================================
   RENDER LOOP
=========================================================== */

regl.frame(
	({ time }) => {

		stats.begin();


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

					reflexion(
						() => {

							drawMap();

							drawPainting(
								placement.batch()
							);
						}
					);
				}


				drawMap();

				drawPainting(
					placement.batch()
				);
			}
		);


		stats.end();
	}
);
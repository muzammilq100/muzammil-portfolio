'use strict';

const mat4 = require('gl-mat4');
const vec3 = require('gl-vec3');
const lock = require('pointer-lock');


/* -----------------------------------------------------------
 * SETTINGS
 * --------------------------------------------------------- */

const mouseSensibility = 0.002;

const touchSensibility = 0.008;

const rotationFilter = 0.95;

const limitAngle =
	Math.PI / 4;

const slowAngle =
	Math.PI / 6;

const height = 2;

const stepHeight = 0.03;

const distToWalls = 0.5;

const viewingDist = 3;

const paintingSnapDist = 1.3;

const yLimitTouch = 5;

const touchDistLimit = 40;

const rayStep = 4;

const tpDuration = 1;


/*
 * Calm museum walking speed.
 */

const walkSpeed = 2.4;

const runSpeed = 2.4;

const walkStepLen = 1000;

const runStepLen = 5;


/*
 * GUIDED MUSEUM MODE
 *
 * The visitor walks only along the centre line of the hall,
 * forwards and backwards, and turns in fixed 45 degree steps
 * (0, 45, 90 ... 315, all the way round, either way).
 */

const CENTRE_X = 7.0;           // middle of the 14 m wide hall

/*
 * The walk is an L: down the middle of the main hall, then left
 * along the middle of the new corridor. Points are [x, z].
 */
const WING = require('./wing').C;

const PATH = [
	[7.0, 1.6],                       // just inside the entrance
	[7.0, WING.zc],                   // the turn, in line with the corridor
	[WING.x1 - 2.95, WING.zc]         // a few steps short of the far door
];

const SEGS = PATH.slice(1).map((p, i) => {
	const a = PATH[i];
	const dx = p[0] - a[0], dz = p[1] - a[1];
	const len = Math.hypot(dx, dz);
	return { a, len, dir: [dx / len, dz / len] };
});

const PATH_LEN = SEGS.reduce((t, sg) => t + sg.len, 0);

// position on the path at distance s
function pathPoint(s) {
	let rest = Math.max(0, Math.min(PATH_LEN, s));
	for (const sg of SEGS) {
		if (rest <= sg.len) {
			return [sg.a[0] + sg.dir[0] * rest, sg.a[1] + sg.dir[1] * rest];
		}
		rest -= sg.len;
	}
	const last = PATH[PATH.length - 1];
	return [last[0], last[1]];
}

// direction of travel just ahead of s (increasing) and just behind it
function pathDirs(s) {
	let acc = 0;
	for (let i = 0; i < SEGS.length; i++) {
		const sg = SEGS[i];
		const end = acc + sg.len;
		if (s < end - 1e-4 || i === SEGS.length - 1) {
			const ahead = sg.dir;
			const atStart = s <= acc + 1e-4 && i > 0;
			const back = atStart ? SEGS[i - 1].dir : sg.dir;
			return { ahead, back: [-back[0], -back[1]] };
		}
		acc = end;
	}
	const d = SEGS[SEGS.length - 1].dir;
	return { ahead: d, back: [-d[0], -d[1]] };
}

const TURN_STEP = Math.PI / 4;  // 45 degrees

const TURN_EASE = 7.0;          // how quickly a turn glides into place

const MOUSE_STEP_PX = 140;      // mouse travel for one 45 degree step

const SWIPE_STEP_PX = 70;       // finger travel for one 45 degree step


/* -----------------------------------------------------------
 * GEOMETRY HELPERS
 * --------------------------------------------------------- */

const sdLine = (
	p,
	a,
	b,
	tmp1,
	tmp2
) => {

	const pa =
		vec3.sub(
			tmp1,
			p,
			a
		);

	const ba =
		vec3.sub(
			tmp2,
			b,
			a
		);

	const h =
		Math.max(
			Math.min(
				vec3.dot(
					pa,
					ba
				) /
				vec3.dot(
					ba,
					ba
				),
				1
			),
			0
		);

	return vec3.dist(
		pa,
		vec3.scale(
			ba,
			ba,
			h
		)
	);
};


const planeProject = (
	org,
	dir,
	plane
) => {

	const dist =
		-(
			vec3.dot(
				org,
				plane
			) -
			plane[3]
		) /
		vec3.dot(
			dir,
			plane
		);

	let intersection =
		vec3.scale(
			[],
			dir,
			dist
		);

	vec3.add(
		intersection,
		intersection,
		org
	);

	return {
		dist,
		intersection
	};
};


const wallProject = (
	org,
	dir,
	a,
	b
) => {

	const vx =
		a[0] -
		b[0];

	const vz =
		a[1] -
		b[1];

	const nx =
		-vz;

	const nz =
		vx;

	const wAB =
		a[0] * nx +
		a[1] * nz;


	let {
		dist,
		intersection: i
	} =
		planeProject(
			org,
			dir,
			[
				nx,
				0,
				nz,
				wAB
			]
		);


	const wA =
		a[0] * vx +
		a[1] * vz;

	const wB =
		b[0] * vx +
		b[1] * vz;

	const wI =
		i[0] * vx +
		i[2] * vz;


	if (
		(wI > wA) +
		(wI > wB) !== 1
	) {

		dist = Infinity;
	}


	return {
		a,
		b,
		dist,
		intersection: i
	};
};


const lerp = (
	x,
	a,
	b
) =>
	(1 - x) * a +
	x * b;


const easeInOutQuad = x =>
	x < 0.5
		?
		2 * x * x
		:
		1 -
		Math.pow(
			-2 * x + 2,
			2
		) / 2;


/* ===========================================================
 * FPS CONTROLLER
 * ===========================================================
 */

module.exports =
function (
	{
		getGridSegments,
		getGridParts
	},
	fovY
) {


	/* -------------------------------------------------------
	 * CAMERA STATE
	 * ----------------------------------------------------- */

	// mouse[1] is the target heading (always a multiple of 45 degrees),
	// fmouse[1] glides towards it. Math.PI looks straight down the hall.
	var mouse = [
		0,
		Math.PI
	];

	var fmouse = [
		0,
		Math.PI
	];

	// distance dragged or swiped since the last 45 degree step
	var turnAccum = 0;

	var dir = [
		0,
		0,
		0
	];

	var pos = [
		CENTRE_X,
		height,
		PATH[0][1]
	];

	// how far along the path the visitor is, and which way they last went
	var pathS = 0;
	var lastTowards = 1;

	var forward = [
		0.707,
		0,
		0.707
	];

	var up = [
		0,
		1,
		0
	];

	var force = [
		0,
		0,
		0
	];

	var walkTime =
		0.5;

	var view =
		mat4.identity([]);

	var proj =
		mat4.identity([]);

	var run =
		false;

	var startPos = [
		0,
		0,
		0
	];

	var endPos = [
		0,
		0,
		0
	];

	var tpProgress =
		1;

	var paused =
		false;


	/* -------------------------------------------------------
	 * CAMERA ROTATION
	 *
	 * Vertical camera rotation is deliberately disabled.
	 * ----------------------------------------------------- */

	const turn = (steps) => {

		mouse[1] += steps * TURN_STEP;
	};


	const orientCamera = (
		dx,
		dy,
		stepPx
	) => {

		dx =
			Math.max(
				Math.min(
					dx,
					100
				),
				-100
			);

		dy =
			Math.max(
				Math.min(
					dy,
					100
				),
				-100
			);


		/*
		 * Eye-level museum camera.
		 *
		 * We intentionally ignore dy.
		 */

		mouse[0] = 0;

		/*
		 * Drags and swipes add up; every stepPx of travel
		 * turns the view one 45 degree step.
		 */

		if (paused) {
			turnAccum = 0;
			return;
		}

		turnAccum += dx;

		while (turnAccum >= stepPx) {
			turn(1);
			turnAccum -= stepPx;
		}

		while (turnAccum <= -stepPx) {
			turn(-1);
			turnAccum += stepPx;
		}
	};


	/* -------------------------------------------------------
	 * MOUSE / POINTER LOCK
	 * ----------------------------------------------------- */

	let pointer =
		lock(document.body);


	pointer.on(
		'attain',
		(movements) => {

			movements.on(
				'data',
				(move) => {

					orientCamera(
						move.dx,
						move.dy,
						MOUSE_STEP_PX
					);
				}
			);
		}
	);


	/* =======================================================
	 * MOBILE CONTROLS
	 * =======================================================
	 *
	 * Left thumb:
	 *     walk
	 *
	 * Right thumb:
	 *     horizontal look
	 *
	 * Vertical look:
	 *     disabled
	 * =======================================================
	 */

	let moveTouchId =
		null;

	let lookTouchId =
		null;

	let lookLastX =
		0;

	let joystickCenter = {
		x: 0,
		y: 0
	};

	const joystickRadius =
		58;


	/* -------------------------------------------------------
	 * MOBILE CONTROL UI
	 * ----------------------------------------------------- */

	const mobileControls =
		document.createElement(
			'div'
		);

	mobileControls.id =
		'museum-mobile-controls';

	mobileControls.innerHTML = `

		<div
			id="museum-joystick"
			aria-label="Move"
		>
			<div
				id="museum-joystick-knob"
			></div>
		</div>

		<div
			id="museum-look-hint"
		>
			SWIPE TO TURN
		</div>
	`;

	document.body.appendChild(
		mobileControls
	);


	const joystick =
		mobileControls.querySelector(
			'#museum-joystick'
		);


	const knob =
		mobileControls.querySelector(
			'#museum-joystick-knob'
		);


	/* -------------------------------------------------------
	 * JOYSTICK RESET
	 * ----------------------------------------------------- */

	const resetJoystick = () => {

		knob.style.transform =
			'translate(-50%, -50%)';

		dir[0] = 0;

		dir[2] = 0;
	};


	/* -------------------------------------------------------
	 * JOYSTICK UPDATE
	 * ----------------------------------------------------- */

	const updateJoystick = (
		touch
	) => {

		let dx =
			touch.clientX -
			joystickCenter.x;

		let dy =
			touch.clientY -
			joystickCenter.y;


		const length =
			Math.hypot(
				dx,
				dy
			);


		if (
			length >
			joystickRadius
		) {

			dx =
				dx /
				length *
				joystickRadius;

			dy =
				dy /
				length *
				joystickRadius;
		}


		knob.style.transform =
			`translate(
				calc(-50% + ${dx}px),
				calc(-50% + ${dy}px)
			)`;


		const deadZone =
			10;


		if (
			length <
			deadZone
		) {

			dir[0] = 0;

			dir[2] = 0;

			return;
		}


		const nx =
			dx /
			joystickRadius;

		const ny =
			dy /
			joystickRadius;


		// along the hall only: sideways movement is ignored
		dir[0] =
			0;

		dir[2] =
			Math.abs(ny) > 0.15 ? ny : 0;
	};


	/* -------------------------------------------------------
	 * FIND TOUCH BY ID
	 * ----------------------------------------------------- */

	const touchById = (
		touches,
		id
	) => {

		for (
			let i = 0;
			i < touches.length;
			i++
		) {

			if (
				touches[i].identifier ===
				id
			) {

				return touches[i];
			}
		}

		return null;
	};


	/* =======================================================
	 * IMPORTANT:
	 *
	 * DO NOT LET THE MOVEMENT SYSTEM STEAL UI TOUCHES.
	 *
	 * This is what fixes the plaque tap problem.
	 * =======================================================
	 */

	const isMuseumUiTarget =
		(target) => {

			return !!(
				target &&
				target.closest &&
				target.closest(
					'.painting-plaque, ' +
					'.story-overlay, ' +
					'.story-card, ' +
					'.story-close, ' +
					'button'
				)
			);
		};


	/* -------------------------------------------------------
	 * TOUCH START
	 * ----------------------------------------------------- */

	const handleTouchStart = (
		e
	) => {

		/*
		 * IMPORTANT:
		 *
		 * If the user touches the plaque,
		 * story panel or another button,
		 * leave the event completely alone.
		 *
		 * Do NOT preventDefault().
		 */

		if (
			isMuseumUiTarget(
				e.target
			)
		) {

			return;
		}


		if (
			e.cancelable
		) {

			e.preventDefault();
		}


		if (
			paused
		) {

			return;
		}


		for (
			let i = 0;
			i <
			e.changedTouches.length;
			i++
		) {

			const touch =
				e.changedTouches[i];


			/*
			 * LEFT SIDE:
			 * movement
			 */

			if (
				moveTouchId === null &&
				touch.clientX <
				window.innerWidth * 0.48
			) {

				moveTouchId =
					touch.identifier;


				const rect =
					joystick.getBoundingClientRect();


				joystickCenter.x =
					rect.left +
					rect.width / 2;

				joystickCenter.y =
					rect.top +
					rect.height / 2;


				updateJoystick(
					touch
				);


			}

			/*
			 * RIGHT SIDE:
			 * horizontal look
			 */

			else if (
				lookTouchId === null &&
				touch.clientX >=
				window.innerWidth * 0.48
			) {

				lookTouchId =
					touch.identifier;

				lookLastX =
					touch.clientX;

				turnAccum = 0;
			}
		}
	};


	/* -------------------------------------------------------
	 * TOUCH MOVE
	 * ----------------------------------------------------- */

	const handleTouchMove = (
		e
	) => {

		/*
		 * UI owns its own touch movement.
		 */

		if (
			isMuseumUiTarget(
				e.target
			)
		) {

			return;
		}


		if (
			e.cancelable
		) {

			e.preventDefault();
		}


		if (
			paused
		) {

			return;
		}


		const moveTouch =
			moveTouchId === null
				?
				null
				:
				touchById(
					e.touches,
					moveTouchId
				);


		if (
			moveTouch
		) {

			updateJoystick(
				moveTouch
			);
		}


		const lookTouch =
			lookTouchId === null
				?
				null
				:
				touchById(
					e.touches,
					lookTouchId
				);


		if (
			lookTouch
		) {

			const dx =
				lookTouch.clientX -
				lookLastX;


			lookLastX =
				lookTouch.clientX;


			orientCamera(
				dx,
				0,
				SWIPE_STEP_PX
			);
		}
	};


	/* -------------------------------------------------------
	 * TOUCH END
	 * ----------------------------------------------------- */

	const handleTouchEnd = (
		e
	) => {

		/*
		 * IMPORTANT:
		 *
		 * If a plaque tap is ending,
		 * do NOT preventDefault().
		 *
		 * Otherwise the browser can suppress
		 * the click/pointer activation.
		 */

		if (
			isMuseumUiTarget(
				e.target
			)
		) {

			return;
		}


		if (
			e.cancelable
		) {

			e.preventDefault();
		}


		for (
			let i = 0;
			i <
			e.changedTouches.length;
			i++
		) {

			const touch =
				e.changedTouches[i];


			if (
				touch.identifier ===
				moveTouchId
			) {

				moveTouchId =
					null;

				resetJoystick();
			}


			if (
				touch.identifier ===
				lookTouchId
			) {

				lookTouchId =
					null;
			}
		}
	};


	/* -------------------------------------------------------
	 * REGISTER TOUCH EVENTS
	 * ----------------------------------------------------- */

	document.addEventListener(
		'touchstart',
		handleTouchStart,
		{
			passive: false
		}
	);


	document.addEventListener(
		'touchmove',
		handleTouchMove,
		{
			passive: false
		}
	);


	document.addEventListener(
		'touchend',
		handleTouchEnd,
		{
			passive: false
		}
	);


	document.addEventListener(
		'touchcancel',
		handleTouchEnd,
		{
			passive: false
		}
	);


	/* =======================================================
	 * MOBILE CSS
	 * =======================================================
	 */

	const mobileStyle =
		document.createElement(
			'style'
		);


	mobileStyle.textContent = `

		#museum-mobile-controls {

			display: none;

			position: fixed;

			inset: 0;

			z-index: 15;

			pointer-events: none;

			touch-action: none;

			user-select: none;

		}


		#museum-joystick {

			position: absolute;

			left: 24px;

			bottom: 28px;

			width: 116px;

			height: 116px;

			border-radius: 50%;

			border:
				1px solid
				rgba(
					226,
					195,
					128,
					.42
				);

			background:
				rgba(
					20,
					15,
					10,
					.22
				);

			box-shadow:
				inset 0 0 22px
				rgba(
					255,
					220,
					140,
					.06
				);

			pointer-events:
				auto;

			touch-action:
				none;
		}


		#museum-joystick-knob {

			position: absolute;

			left: 50%;

			top: 50%;

			width: 48px;

			height: 48px;

			border-radius: 50%;

			border:
				1px solid
				rgba(
					244,
					215,
					135,
					.55
				);

			background:
				rgba(
					191,
					145,
					54,
					.38
				);

			box-shadow:
				0 3px 14px
				rgba(
					0,
					0,
					0,
					.3
				),

				inset 0 0 12px
				rgba(
					255,
					235,
					180,
					.12
				);

			transform:
				translate(
					-50%,
					-50%
				);
		}


		#museum-look-hint {

			position: absolute;

			right: 18px;

			bottom: 34px;

			color:
				rgba(
					245,
					232,
					205,
					.32
				);

			font:
				10px
				Georgia,
				serif;

			letter-spacing:
				.16em;

			pointer-events:
				none;
		}


		@media
		(max-width: 900px)
		and
		(pointer: coarse) {

			#museum-mobile-controls {

				display:
					block;
			}
		}
	`;

	document.head.appendChild(
		mobileStyle
	);


	/* =======================================================
	 * KEYBOARD INPUT
	 * =======================================================
	 */

	var keys = {};


	const handleKey = (
		e
	) => {

		if (
			e.defaultPrevented ||
			e.ctrlKey ||
			e.altKey ||
			e.metaKey
		) {

			return;
		}


		const isDown =
			e.type ===
			'keydown';

		keys[e.code] =
			isDown;


		/*
		 * Left / right turn one 45 degree step per press.
		 */

		if (
			isDown &&
			!e.repeat &&
			!paused
		) {

			if (
				e.code === 'KeyA' ||
				e.code === 'ArrowLeft'
			) {
				turn(-1);
			}

			if (
				e.code === 'KeyD' ||
				e.code === 'ArrowRight'
			) {
				turn(1);
			}
		}


		run =
			false;


		const up =
			keys['KeyW'] ||
			keys['ArrowUp']
				?
				1
				:
				0;


		const down =
			keys['KeyS'] ||
			keys['ArrowDown']
				?
				1
				:
				0;


		dir = [
			0,
			0,
			down - up
		];


		e.preventDefault();
	};


	window.addEventListener(
		'keydown',
		handleKey
	);


	window.addEventListener(
		'keyup',
		handleKey
	);


	/* =======================================================
	 * FIRST PERSON LOOP
	 * =======================================================
	 */

	var lastTime =
		0;


	return {

		pos,

		fmouse,

		forward,

		up,


		setPaused:
			(value) => {

				paused =
					!!value;

				/*
				 * Stop walking immediately.
				 */

				if (paused) {

					dir[0] = 0;

					dir[2] = 0;

					resetJoystick();
				}
			},


		// put the visitor at distance s along the walk, facing heading
		// (used when the tour hands over to free walking)
		place:
			(s, heading) => {
				pathS = Math.max(0, Math.min(PATH_LEN, s));
				const p = pathPoint(pathS);
				pos[0] = p[0];
				pos[2] = p[1];
				mouse[1] = heading;
				fmouse[1] = heading;
				turnAccum = 0;
				lastTowards = 1;
			},


		view:
			() => view,


		proj:
			() => {

				mat4.perspective(
					proj,
					fovY(),
					window.innerWidth /
					window.innerHeight,
					0.1,
					700
				);

				return proj;
			},


		tick:
			({ time }) => {

				/* ------------------------------------------------
				 * DELTA TIME
				 * ---------------------------------------------- */

				const dt =
					time -
					lastTime;

				lastTime =
					time;


				/* ------------------------------------------------
				 * TEMP ARRAYS
				 * ---------------------------------------------- */

				let tmp1 =
					[0, 0, 0];

				let tmp2 = [];


				/* ------------------------------------------------
				 * FORWARD / UP
				 * ---------------------------------------------- */

				vec3.set(
					forward,
					Math.sin(fmouse[1]),
					0,
					-Math.cos(fmouse[1])
				);


				vec3.set(
					up,
					0,
					1,
					0
				);


				/* ------------------------------------------------
				 * MOVEMENT ALONG THE CENTRE LINE
				 *
				 * Forward / back always carry the visitor along
				 * the hall, in the direction they are roughly
				 * facing. Facing a side wall, forward goes on
				 * deeper into the gallery.
				 * ---------------------------------------------- */

				const speed =
					run
						?
						runSpeed
						:
						walkSpeed;


				// which way along the path to go: the direction (ahead or back)
				// that best matches where the visitor is facing; facing a
				// side wall, keep going the way they were last going
				const fx = Math.sin(mouse[1]);
				const fz = -Math.cos(mouse[1]);
				const pd = pathDirs(pathS);
				const aheadDot = fx * pd.ahead[0] + fz * pd.ahead[1];
				const backDot = fx * pd.back[0] + fz * pd.back[1];

				let towards = lastTowards;
				if (Math.max(aheadDot, backDot) > 0.3) {
					towards = aheadDot >= backDot ? 1 : -1;
				}

				let ds =
					-dir[2] *
					towards *
					speed *
					Math.min(dt, 0.1);


				if (paused) {

					dir[0] = 0;

					dir[2] = 0;

					ds = 0;
				}


				if (ds !== 0) {
					lastTowards = Math.sign(ds) * Math.sign(-dir[2] || 1);
				}

				pathS = Math.max(0, Math.min(PATH_LEN, pathS + ds));

				const target = pathPoint(pathS);


				vec3.set(
					force,
					target[0] - pos[0],
					0,
					target[1] - pos[2]
				);


				/* ------------------------------------------------
				 * WALK ANIMATION
				 * ---------------------------------------------- */

				const d =
					vec3.len(
						force
					);


				if (
					d === 0 &&
					walkTime !== 0.25
				) {

					walkTime =
						(
							Math.abs(
								(
									walkTime +
									0.5
								) %
								1 -
								0.5
							)
							-
							0.25
						)
						*
						0.8
						+
						0.25;


					if (
						(
							walkTime +
							0.01
						)
						%
						0.25
						<
						0.02
					) {

						walkTime =
							0.25;
					}
				}


				const lastWalkTime =
					walkTime;


				walkTime +=
					d /
					(
						run
							?
							runStepLen
							:
							walkStepLen
					);


				/*
				 * Keep camera at exact eye height.
				 */

				pos[1] =
					height;


				vec3.add(
					pos,
					pos,
					force
				);


				/* ------------------------------------------------
				 * TELEPORTATION
				 * ---------------------------------------------- */

				if (
					tpProgress < 1
				) {

					tpProgress +=
						dt /
						tpDuration;


					tpProgress =
						Math.min(
							tpProgress,
							1
						);


					const t =
						easeInOutQuad(
							tpProgress
						);


					vec3.set(
						pos,

						lerp(
							t,
							startPos[0],
							endPos[0]
						),

						pos[1],

						lerp(
							t,
							startPos[2],
							endPos[2]
						)
					);
				}


				/* ------------------------------------------------
				 * FILTER HORIZONTAL CAMERA MOVEMENT
				 * -------------------------------------------------------------- */

				fmouse[0] =
					0;


				fmouse[1] +=
					(mouse[1] - fmouse[1]) *
					Math.min(
						1,
						Math.min(dt, 0.1) * TURN_EASE
					);

				if (
					Math.abs(mouse[1] - fmouse[1]) < 0.0005
				) {

					fmouse[1] = mouse[1];
				}


				/* ------------------------------------------------
				 * VIEW MATRIX
				 * -------------------------------------------------------------- */

				mat4.identity(
					view
				);


				mat4.rotateX(
					view,
					view,
					0
				);


				mat4.rotateY(
					view,
					view,
					fmouse[1]
				);


				mat4.translate(
					view,
					view,
					vec3.scale(
						tmp1,
						pos,
						-1
					)
				);


				return;
			}
		};
 };
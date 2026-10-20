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

	var mouse = [
		0,
		Math.PI * 3 / 4
	];

	var fmouse = [
		0,
		Math.PI * 3 / 4
	];

	var dir = [
		0,
		0,
		0
	];

	var pos = [
		2,
		height,
		2
	];

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

	const orientCamera = (
		dx,
		dy,
		sensibility
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

		mouse[1] +=
			dx *
			sensibility;
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
						mouseSensibility
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
			SWIPE TO LOOK
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


		dir[0] =
			nx;

		dir[2] =
			ny;
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
				touchSensibility
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


		keys[e.code] =
			e.type ===
			'keydown';


		run =
			false;


		const left =
			keys['KeyA'] ||
			keys['ArrowLeft']
				?
				1
				:
				0;


		const right =
			keys['KeyD'] ||
			keys['ArrowRight']
				?
				1
				:
				0;


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
			right - left,
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
					100
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
					1,
					0,
					0
				);


				vec3.set(
					up,
					0,
					1,
					0
				);


				vec3.rotateY(
					force,
					dir,
					tmp1,
					-mouse[1]
				);


				vec3.rotateY(
					forward,
					forward,
					tmp1,
					-mouse[1]
				);


				/*
				 * Vertical camera rotation is disabled.
				 */

				vec3.rotateX(
					forward,
					forward,
					tmp1,
					0
				);


				vec3.rotateX(
					up,
					up,
					tmp1,
					0
				);


				vec3.normalize(
					force,
					force
				);


				/* ------------------------------------------------
				 * MOVEMENT
				 * ---------------------------------------------- */

				const speed =
					run
						?
						runSpeed
						:
						walkSpeed;


				vec3.scale(
					force,
					force,
					speed * dt
				);


				pos[1] =
					height;


				if (paused) {

					dir[0] = 0;

					dir[2] = 0;

					vec3.set(
						force,
						0,
						0,
						0
					);
				}


				const newPos =
					vec3.add(
						[],
						pos,
						force
					);


				/* ------------------------------------------------
				 * WALL COLLISION
				 * ---------------------------------------------- */

				const collisions =
					getGridSegments(
						newPos[0],
						newPos[2]
					)

					.map(
						([
							[ax, ay],
							[bx, by]
						]) => [

							[
								ax,
								height,
								ay
							],

							[
								bx,
								height,
								by
							]
						]
					)

					.filter(
						([a, b]) =>
							sdLine(
								newPos,
								a,
								b,
								tmp1,
								tmp2
							)
							<
							distToWalls
					);


				if (
					collisions.length !== 0
				) {

					for (
						let [a, b]
						of collisions
					) {

						const distance =
							distToWalls -
							sdLine(
								newPos,
								a,
								b,
								tmp1,
								tmp2
							);


						const delta =
							vec3.sub(
								tmp1,
								b,
								a
							).reverse();


						delta[0] =
							-delta[0];


						vec3.normalize(
							delta,
							delta
						);


						vec3.scale(
							delta,
							delta,
							distance
						);


						vec3.add(
							force,
							force,
							delta
						);
					}
				}


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


				fmouse[1] =
					rotationFilter *
					mouse[1]
					+
					(1 -
						rotationFilter) *
					fmouse[1];


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
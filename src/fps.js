'use strict';

const mat4 = require('gl-mat4');
const vec3 = require('gl-vec3');
const lock = require('pointer-lock');

// ------------------------------------------------------------
// MUSEUM MOVEMENT SETTINGS
// ------------------------------------------------------------

// Slow, deliberate gallery walking speed.
const walkSpeed = 2.4;

// No sprinting in museum mode.
const runSpeed = 2.4;

const mouseSensibility = 0.002;
const touchSensibility = 0.008;
const rotationFilter = 0.95;

// Camera remains exactly at eye level.
const height = 2;

// Collision distance from walls.
const distToWalls = 0.5;

// Very subtle/no visible head bob.
const walkStepLen = 1000;
const runStepLen = 1000;

const sdLine = (p, a, b, tmp1, tmp2) => {
	const pa = vec3.sub(tmp1, p, a);
	const ba = vec3.sub(tmp2, b, a);

	const h = Math.max(
		Math.min(
			vec3.dot(pa, ba) / vec3.dot(ba, ba),
			1
		),
		0
	);

	return vec3.dist(
		pa,
		vec3.scale(ba, ba, h)
	);
};

module.exports = function ({getGridSegments, getGridParts}, fovY) {

	// ----------------------------------------------------------
	// CAMERA
	// ----------------------------------------------------------

	var mouse = [0, Math.PI * 3 / 4];
	var fmouse = [0, Math.PI * 3 / 4];

	var dir = [0, 0, 0];

	var pos = [2, height, 2];

	var forward = [0.707, 0, 0.707];
	var up = [0, 1, 0];

	var force = [0, 0, 0];

	var walkTime = 0.5;

	var view = mat4.identity([]);
	var proj = mat4.identity([]);

	var run = false;

	var paused = false;

	// ----------------------------------------------------------
	// CAMERA ROTATION
	// ----------------------------------------------------------
	// IMPORTANT:
	// Vertical mouse movement is deliberately ignored.
	//
	// The visitor can rotate:
	//
	//             LEFT <---- 90° ----> RIGHT
	//
	// but cannot look toward the ceiling or floor.
	// ----------------------------------------------------------

	const orientCamera = (dx, dy, sensibility) => {

		dx = Math.max(
			Math.min(dx, 100),
			-100
		);

		// Vertical movement is intentionally ignored.
		dy = 0;

		mouse[0] = 0;

		// Horizontal rotation only.
		mouse[1] += dx * sensibility;
	};

	// ----------------------------------------------------------
	// MOUSE / POINTER LOCK
	// ----------------------------------------------------------

	let pointer = lock(document.body);

	pointer.on('attain', (movements) => {

		movements.on('data', (move) => {

			orientCamera(
				move.dx,
				0,
				mouseSensibility
			);

		});

	});

	// ----------------------------------------------------------
	// TOUCH
	// ----------------------------------------------------------

	let lastTouch = false;

	const handleTouch = (e) => {

		e.preventDefault();

		if(pointer) {
			pointer.destroy();
			pointer = false;
		}

		if(e.type === 'touchstart') {

			lastTouch = e.touches[0];

		} else if(
			e.type === 'touchmove' &&
			lastTouch
		) {

			orientCamera(
				e.touches[0].pageX - lastTouch.pageX,
				0,
				touchSensibility
			);

			lastTouch = e.touches[0];

		} else if(e.type === 'touchend') {

			lastTouch = false;

		}
	};

	window.addEventListener(
		'touchstart',
		handleTouch,
		{passive:false}
	);

	window.addEventListener(
		'touchmove',
		handleTouch,
		{passive:false}
	);

	window.addEventListener(
		'touchend',
		handleTouch,
		{passive:false}
	);

	// ----------------------------------------------------------
	// KEYBOARD
	// ----------------------------------------------------------

	var keys = {};

	const handleKey = (e) => {

		if(
			e.defaultPrevented ||
			e.ctrlKey ||
			e.altKey ||
			e.metaKey
		) return;

		keys[e.code] = e.type === 'keydown';

		// Museum mode:
		// no sprinting regardless of Shift.
		run = false;

		const left =
			keys['KeyA'] ||
			keys['ArrowLeft']
			? 1
			: 0;

		const right =
			keys['KeyD'] ||
			keys['ArrowRight']
			? 1
			: 0;

		const up =
			keys['KeyW'] ||
			keys['ArrowUp']
			? 1
			: 0;

		const down =
			keys['KeyS'] ||
			keys['ArrowDown']
			? 1
			: 0;

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

	// ----------------------------------------------------------
	// FIRST PERSON CAMERA
	// ----------------------------------------------------------

	var lastTime = 0;

	return {

		pos,
		fmouse,
		forward,
		up,

		// Used by the museum reading overlay.
		setPaused: (value) => {

			paused = !!value;

			if(paused) {
				dir = [0, 0, 0];
			}

		},

		view: () => view,

		proj: () => {

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

		tick: ({time}) => {

			// --------------------------------------------------
			// TIME
			// --------------------------------------------------

			const dt = time - lastTime;
			lastTime = time;

			// --------------------------------------------------
			// FORCE / CAMERA DIRECTION
			// --------------------------------------------------

			let tmp1 = [0, 0, 0];
			let tmp2 = [];

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

			// Horizontal rotation only.
			vec3.rotateY(
				forward,
				forward,
				tmp1,
				-mouse[1]
			);

			vec3.rotateY(
				force,
				dir,
				tmp1,
				-mouse[1]
			);

			// Absolutely no vertical camera rotation.
			forward[1] = 0;
			up[0] = 0;
			up[1] = 1;
			up[2] = 0;

			vec3.normalize(
				forward,
				forward
			);

			vec3.normalize(
				force,
				force
			);

			// --------------------------------------------------
			// MOVEMENT
			// --------------------------------------------------

			if(paused) {

				vec3.set(
					force,
					0,
					0,
					0
				);

			}

			const speed =
				run
					? runSpeed
					: walkSpeed;

			vec3.scale(
				force,
				force,
				speed * dt
			);

			// Maintain fixed eye level.
			pos[1] = height;

			const newPos =
				vec3.add(
					[],
					pos,
					force
				);

			// --------------------------------------------------
			// WALL COLLISION
			// --------------------------------------------------

			const collisions =
				getGridSegments(
					newPos[0],
					newPos[2]
				)
				.map(
					([[ax, ay], [bx, by]]) => [
						[ax, height, ay],
						[bx, height, by]
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
						) < distToWalls
				);

			if(collisions.length !== 0) {

				for(
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

			// --------------------------------------------------
			// MOVEMENT / NO HEAD BOB
			// --------------------------------------------------

			const d =
				vec3.len(force);

			// Keep walking animation essentially stationary.
			// This removes the game-like bouncing sensation.
			walkTime = 0.25;

			pos[1] = height;

			vec3.add(
				pos,
				pos,
				force
			);

			// --------------------------------------------------
			// FILTER HORIZONTAL ROTATION
			// --------------------------------------------------

			fmouse[0] = 0;

			fmouse[1] =
				rotationFilter * mouse[1] +
				(1 - rotationFilter) *
				fmouse[1];

			// --------------------------------------------------
			// VIEW MATRIX
			// --------------------------------------------------

			mat4.identity(view);

			// No X rotation.
			// Therefore the visitor can NEVER look up/down.
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
		}
	};
};
'use strict';

const texture = require('./image');

const mat4 = require('gl-mat4');

const wing = require('./wing');

const dynamicResPeriod =
	3000;

let dynamicRes =
	'high';

let dynamicResTimer;


/* ===========================================================
 * ROOM FACTS
 * ===========================================================
 */

const LEFT_X =
	0.36;

const RIGHT_X =
	13.64;

const END_Z =
	wing.C.hallEnd - 0.01;

// the painting wall of the new corridor (faces +z)
const CORR_Z =
	wing.C.z0 + 0.01;


const LABEL_X_LEFT =
	0.356;

const LABEL_X_RIGHT =
	13.644;

const LABEL_Z_END =
	wing.C.hallEnd - 0.006;

const LABEL_Z_CORR =
	wing.C.z0 + 0.006;


const PAINTING_DEPTH =
	0.12;


/*
 * All paintings share the same eye-line.
 */

const CENTRE_Y =
	4.0;

const cyOf = (index) =>
	(layouts[index] && layouts[index].cy) || CENTRE_Y;


/*
 * Gold frame width.
 */

const FRAME_W =
	0.26;


/*
 * Maximum artwork size.
 */

const MAX_HEIGHT =
	5.6;

const MAX_WIDTH =
	7.0;


/*
 * The paintings' words now live in content/paintings.js.
 */


/* ===========================================================
 * PAINTING POSITIONS
 * ===========================================================
 */

const layouts = [

	/*
	 * Artwork I
	 * Love me like I am Already Dead
	 */

	{
		side: 'right',
		z: 34.5
	},


	/*
	 * Artwork II
	 * The Hardest Gift I Gave
	 */

	{
		side: 'right',
		z: 23.5     // between the first two pairs of pillars
	},


	/*
	 * Artwork III
	 * A Private Eulogy
	 */

	{
		side: 'left',
		z: 23.5     // facing The Hardest Gift I Gave
	},


	/*
	 * Artwork IV
	 * The Guardians I Built to Defend
	 */

	{
		side: 'end',
		z: END_Z
	},


	/*
	 * Artwork V
	 * Between Grief and Acceptance
	 * (facing Love me like I am Already Dead)
	 */

	{
		side: 'left',
		z: 34.5
	},


	/*
	 * Artwork VI
	 * Uncertainty
	 * (just past the arch)
	 */

	{
		side: 'right',
		z: 14.6
	},


	/*
	 * Artwork VII
	 * Everything Else Was Easier To Perform
	 * (facing Uncertainty)
	 *
	 * Square painting, kept to the width of Uncertainty
	 * opposite, so the pair matches.
	 */

	{
		side: 'left',
		z: 14.6,
		maxW: 3.70,
		maxH: 3.70
	},


	/*
	 * Artworks VIII, IX and X
	 * The new corridor's painting wall: the first, middle and last
	 * bays, with the two statue niches between them. Each is two
	 * thirds the height of the masterpiece at the end of the hall.
	 */

	{ side: 'corridor', x: wing.PAINTING_X[0], cy: 3.0, maxW: 3.3, maxH: 3.73 },
	{ side: 'corridor', x: wing.PAINTING_X[1], cy: 3.0, maxW: 3.3, maxH: 3.73 },
	{ side: 'corridor', x: wing.PAINTING_X[2], cy: 3.0, maxW: 3.3, maxH: 3.73 }
];


/* ===========================================================
 * DIMENSIONS
 * ===========================================================
 */

function getDimensions(
	aspect,
	layout
) {

	/*
	 * A layout can ask for a smaller painting (maxW / maxH),
	 * otherwise every painting uses the shared limits.
	 */

	const maxH =
		(layout && layout.maxH) || MAX_HEIGHT;

	const maxW =
		(layout && layout.maxW) || MAX_WIDTH;

	const height =
		Math.min(
			maxH,
			maxW / aspect
		);

	return {
		width:
			height * aspect,

		height
	};
}


/* ===========================================================
 * PAINTING MODEL
 * ===========================================================
 */

function makeModel(
	width,
	height,
	index
) {

	const layout =
		layouts[index];

	const model = [];

	const y =
		cyOf(index) -
		height / 2;


	/* LEFT WALL */

	if (
		layout.side ===
		'left'
	) {

		mat4.fromTranslation(
			model,
			[
				LEFT_X,
				y,
				layout.z +
				width / 2
			]
		);


		mat4.rotateY(
			model,
			model,
			Math.PI / 2
		);
	}


	/* RIGHT WALL */

	else if (
		layout.side ===
		'right'
	) {

		mat4.fromTranslation(
			model,
			[
				RIGHT_X,
				y,
				layout.z -
				width / 2
			]
		);


		mat4.rotateY(
			model,
			model,
			-Math.PI / 2
		);
	}


	/* CORRIDOR WALL */

	else if (
		layout.side ===
		'corridor'
	) {

		mat4.fromTranslation(
			model,
			[
				layout.x -
				width / 2,
				y,
				CORR_Z
			]
		);
	}


	/* END WALL */

	else {

		mat4.fromTranslation(
			model,
			[
				7.0 +
				width / 2,

				y,

				END_Z
			]
		);


		mat4.rotateY(
			model,
			model,
			Math.PI
		);
	}


	mat4.scale(
		model,
		model,
		[
			width,
			height,
			PAINTING_DEPTH
		]
	);


	return model;
}


/* ===========================================================
 * FRAME MODEL
 * ===========================================================
 */

function makeFrameModel(
	width,
	height,
	index
) {

	const layout =
		layouts[index];

	const model = [];

	const y =
		cyOf(index) -
		height / 2;


	if (
		layout.side ===
		'left'
	) {

		mat4.fromTranslation(
			model,
			[
				LEFT_X,
				y,
				layout.z +
				width / 2
			]
		);


		mat4.rotateY(
			model,
			model,
			Math.PI / 2
		);
	}


	else if (
		layout.side ===
		'right'
	) {

		mat4.fromTranslation(
			model,
			[
				RIGHT_X,
				y,
				layout.z -
				width / 2
			]
		);


		mat4.rotateY(
			model,
			model,
			-Math.PI / 2
		);
	}


	else if (
		layout.side ===
		'corridor'
	) {

		mat4.fromTranslation(
			model,
			[
				layout.x -
				width / 2,
				y,
				CORR_Z
			]
		);
	}


	else {

		mat4.fromTranslation(
			model,
			[
				7.0 +
				width / 2,
				y,
				END_Z
			]
		);


		mat4.rotateY(
			model,
			model,
			Math.PI
		);
	}


	return model;
}


/* ===========================================================
 * TEXT MODEL
 * ===========================================================
 */

function makeTextModel(
	width,
	height,
	index
) {

	const layout =
		layouts[index];

	const model = [];


	const y =
		cyOf(index) -
		height / 2 -
		FRAME_W -
		0.38;


	if (
		layout.side ===
		'left'
	) {

		mat4.fromTranslation(
			model,
			[
				LABEL_X_LEFT,
				y,
				layout.z +
				width / 2
			]
		);


		mat4.rotateY(
			model,
			model,
			Math.PI / 2
		);
	}


	else if (
		layout.side ===
		'right'
	) {

		mat4.fromTranslation(
			model,
			[
				LABEL_X_RIGHT,
				y,
				layout.z -
				width / 2
			]
		);


		mat4.rotateY(
			model,
			model,
			-Math.PI / 2
		);
	}


	else if (
		layout.side ===
		'corridor'
	) {

		mat4.fromTranslation(
			model,
			[
				layout.x -
				width / 2,
				y,
				LABEL_Z_CORR
			]
		);
	}


	else {

		mat4.fromTranslation(
			model,
			[
				7.0 +
				width / 2,
				y,
				LABEL_Z_END
			]
		);


		mat4.rotateY(
			model,
			model,
			Math.PI
		);
	}


	mat4.scale(
		model,
		model,
		[
			2,
			2,
			2
		]
	);


	return model;
}


/* ===========================================================
 * PLAQUE POSITION
 * ===========================================================
 */

function makePlaquePosition(
	width,
	height,
	index
) {

	const layout =
		layouts[index];


	const y =
		cyOf(index) -
		height / 2 -
		FRAME_W -
		0.38;


	if (
		layout.side ===
		'left'
	) {

		return [
			LEFT_X + 0.55,
			y,
			layout.z
		];
	}


	if (
		layout.side ===
		'right'
	) {

		return [
			RIGHT_X - 0.55,
			y,
			layout.z
		];
	}


	if (
		layout.side ===
		'corridor'
	) {

		return [
			layout.x,
			y,
			CORR_Z + 0.55
		];
	}


	return [
		7.0,
		y,
		END_Z - 0.55
	];
}


/* ===========================================================
 * PICTURE LIGHT ABOVE EACH PAINTING
 * ===========================================================
 *
 * A slim bronze bar on a short arm, hung above the frame.
 * Returns the little fixture boxes (drawn in painting.js) and
 * the light data that mesh.js uses to brighten the wall.
 *
 * ===========================================================
 */

const LIGHT_ARM = 0.42;

function boxModel(centre, A, Nn, sx, sy, sz) {

	return [
		A[0] * sx, A[1] * sx, A[2] * sx, 0,
		0, sy, 0, 0,
		Nn[0] * sz, Nn[1] * sz, Nn[2] * sz, 0,
		centre[0], centre[1], centre[2], 1
	];
}

function makeLight(width, height, index) {

	const layout =
		layouts[index];

	let W;
	let A;
	let Nn;

	if (layout.side === 'left') {

		W = [LEFT_X, layout.z];
		A = [0, 0, 1];
		Nn = [1, 0, 0];

	} else if (layout.side === 'right') {

		W = [RIGHT_X, layout.z];
		A = [0, 0, 1];
		Nn = [-1, 0, 0];

	} else if (layout.side === 'corridor') {

		W = [layout.x, CORR_Z];
		A = [1, 0, 0];
		Nn = [0, 0, 1];

	} else {

		W = [7.0, END_Z];
		A = [1, 0, 0];
		Nn = [0, 0, -1];
	}

	const barY =
		cyOf(index) +
		height / 2 +
		FRAME_W +
		0.30;

	const barLen =
		Math.min(2.4, Math.max(0.9, width * 0.55));

	const at = (depth, y) => [
		W[0] + Nn[0] * depth,
		y,
		W[1] + Nn[2] * depth
	];

	const bronze = [0.075, 0.062, 0.050];

	const fixtures = [

		// wall plate
		{
			fixmodel: boxModel(at(0.014, barY), A, Nn, 0.10, 0.13, 0.028),
			fixcol: bronze,
			fixglow: 0
		},

		// arm
		{
			fixmodel: boxModel(at(LIGHT_ARM / 2, barY), A, Nn, 0.02, 0.02, LIGHT_ARM),
			fixcol: bronze,
			fixglow: 0
		},

		// bar
		{
			fixmodel: boxModel(at(LIGHT_ARM, barY), A, Nn, barLen, 0.034, 0.05),
			fixcol: bronze,
			fixglow: 0
		},

		// warm glowing strip under the bar
		{
			fixmodel: boxModel(at(LIGHT_ARM - 0.012, barY - 0.019), A, Nn, barLen * 0.94, 0.006, 0.028),
			fixcol: bronze,
			fixglow: 1
		}
	];

	const c = at(LIGHT_ARM, barY - 0.02);

	return {

		fixtures,

		light: {
			c: [c[0], c[1], c[2], 1],
			d: [A[0], A[1], A[2], barLen / 2]
		}
	};
}


/* ===========================================================
 * MAIN PLACEMENT MODULE
 * ===========================================================
 */

module.exports =
(regl, map) => {

	let batch = [];

	let shownBatch = [];


	/* -------------------------------------------------------
	 * LOAD PAINTING
	 * ----------------------------------------------------- */

	const loadPainting =
	(p) => {

		const index =
			p.image_id;


		if (
			!layouts[index]
		) {

			return;
		}


		const {
			width,
			height
		} =
			getDimensions(
				p.aspect,
				layouts[index]
			);


		const lamp =
			makeLight(
				width,
				height,
				index
			);

		if (
			map &&
			map.lights &&
			index < map.lights.length
		) {

			map.lights[index] =
				lamp.light;
		}


		batch.push({

			...p,

			fixtures:
				lamp.fixtures,

			side:
				layouts[index].side,


			model:
				makeModel(
					width,
					height,
					index
				),


			framemodel:
				makeFrameModel(
					width,
					height,
					index
				),


			framesize:
				[
					width,
					height
				],


			textmodel:
				makeTextModel(
					width,
					height,
					index
				),


			text:
				p.textGen(
					width
				),


			width,

			height,


			/*
			 * Title from api/local.js.
			 */

			title:
				p.title,


			/*
			 * Curatorial description.
			 */

			description:
				p.description,

			medium:
				p.medium,

			size:
				p.size,


			/*
			 * Position used by the
			 * museum interaction system.
			 */

			plaquePosition:
				makePlaquePosition(
					width,
					height,
					index
				),


			/*
			 * Approximate centre of
			 * each painting.
			 */

			paintingPosition:

				layouts[index].side ===
				'left'

					?

					[
						LEFT_X + 0.05,
						CENTRE_Y,
						layouts[index].z
					]

					:

				layouts[index].side ===
				'right'

					?

					[
						RIGHT_X - 0.05,
						CENTRE_Y,
						layouts[index].z
					]

					:

				layouts[index].side ===
				'corridor'

					?

					[
						layouts[index].x,
						cyOf(index),
						CORR_Z + 0.05
					]

					:

					[
						7.0,
						CENTRE_Y,
						END_Z - 0.05
					],


			textGen:
				null
		});
	};


	/* -------------------------------------------------------
	 * FETCH
	 * ----------------------------------------------------- */

	texture.fetch(
		regl,
		layouts.length,
		dynamicRes,
		loadPainting,
		() => {}
	);


	/* -------------------------------------------------------
	 * PUBLIC API
	 * ----------------------------------------------------- */

	return {

		update:
		() => {

			shownBatch =
				batch;


			shownBatch.forEach(
				(painting) => {

					texture.load(
						regl,
						painting,
						dynamicRes
					);
				}
			);


			dynamicRes =
				'low';


			if (
				dynamicResTimer
			) {

				clearTimeout(
					dynamicResTimer
				);
			}


			dynamicResTimer =
				setTimeout(
					() => {

						dynamicRes =
							'high';

					},
					dynamicResPeriod
				);
		},


		batch:
			() =>
				shownBatch,


		/*
		 * This is what index.js uses
		 * to find readable paintings.
		 */

		interactables:
			() =>
				shownBatch.map(
					(p, index) => ({

						side:
							p.side,

						width:
							p.width,

						index,

						title:
							p.title,

						description:
							p.description,

						medium:
							p.medium,

						size:
							p.size,

						plaquePosition:
							p.plaquePosition,

						paintingPosition:
							p.paintingPosition
					})
				)
	};
};
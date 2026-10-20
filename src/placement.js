'use strict';

const texture = require('./image');

const mat4 = require('gl-mat4');

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
	47.64;


const LABEL_X_LEFT =
	0.356;

const LABEL_X_RIGHT =
	13.644;

const LABEL_Z_END =
	47.644;


const PAINTING_DEPTH =
	0.12;


/*
 * All paintings share the same eye-line.
 */

const CENTRE_Y =
	4.0;


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


/* ===========================================================
 * PAINTING DESCRIPTIONS
 * ===========================================================
 *
 * IMPORTANT:
 *
 * These are in exactly the same order as api/local.js.
 *
 * 0 = Love me like I am Already Dead
 * 1 = The Hardest Gift I Gave
 * 2 = A Private Eulogy
 * 3 = The Guardians I Built to Defend
 *
 * ===========================================================
 */

const DESCRIPTIONS = [

/* -----------------------------------------------------------
   0
   LOVE ME LIKE I AM ALREADY DEAD
----------------------------------------------------------- */

`We live in a world soaked in hypocrisy. We’re told not to “speak ill of the dead,” yet we spend lifetimes speaking ill of the living. We judge, ignore, neglect—and then pretend to mourn with grace when it’s too late. People say beautiful things at funerals, but only after burying a lifetime of cruelty or silence.

Why?

Because the dead are easier to love. They don’t talk back. They don’t disappoint. They don’t challenge your beliefs or make demands of your time or empathy. The dead become perfect in memory—flaws forgotten, expectations erased. To love someone who’s no longer here is safe. You get to shape them however you want. You don’t have to face the complexity of who they really were, or who you failed to be for them.

And this is what I’ve seen, over and over. People rarely offer love when it matters. Parents, siblings, friends, partners—their love is often conditional. Measured. Dependent on how useful, agreeable, or flawless you are. You can pour yourself out for them, break yourself trying to be enough, and still fall short. You can live your whole life waiting for a kind word that never comes.

But when you die, everything changes.

Suddenly, you were “the kindest soul,” “too good for this world,” “someone we didn’t deserve.” The same people who made you feel small now speak of you with reverence. They bring flowers. They cry. They whisper prayers. But none of it is for you anymore. The flowers don’t heal what they broke. The prayers don’t reach ears that have gone silent. These gestures are not for the dead—they’re for the living. For their guilt. For their comfort. For their image.

“You brought me flowers when I could no longer smell them.
You reached for my hand when it was already cold.”

This work is not just about death—it’s about being noticed only when you’re gone. It’s about how easily people forget your flaws once you’re no longer around to inconvenience them. How we wait for silence to speak love. How we mourn more for our comfort than for the person who’s passed.

It asks one question, quietly but sharply:

Why must someone die before we finally decide they were worthy of love?`,



/* -----------------------------------------------------------
   1
   THE HARDEST GIFT I GAVE
----------------------------------------------------------- */

`True love is an act of shelter, but it is incredibly easy for that shelter to quietly warp into a cage. We fall into the trap of believing that because we love someone deeply, they belong near us, that our affection is enough to justify keeping them close, even when their spirit is pulling toward a completely different horizon. But love isn't a possession. It isn't a debt or a contract of ownership. Realising that you are holding someone back against their will, and choosing to unlatch the door anyway, is perhaps the rawest, most devastating form of love there is. It is the moment you value their breathing room more than your own comfort.

But there is a second, heavier truth hidden in that departure, and it rests entirely in the feather left behind in her fingers. Freedom is rarely a clean break; it demands a physical toll. The bird didn't just fly away unharmed. It had to leave a part of itself behind in order to slip through the bars. That single feather is the currency of its flight. It means that when we finally let someone go, they don't leave whole, and we don't end up completely empty-handed. They leave a piece of their identity locked in our grasp, a permanent casualty of the time they spent confined. She is left holding the physical receipt of his freedom, a reminder that the hardest gift you can give someone always costs a piece of both of you.`,


/* -----------------------------------------------------------
   2
   A PRIVATE EULOGY
----------------------------------------------------------- */

`There is a unique kind of sorrow in mourning something you were never supposed to have, or holding onto a loss the world expects you to simply forget. When grief is disallowed by circumstances, society, or our own rigid rules, it cannot be shared. It becomes an isolated country.

In A Private Eulogy, the subject turns her back completely to the world. Her posture is not collapsed in defeat; it is held together with immense, quiet effort, the rigid stillness of someone delivering a final, silent tribute inside her own mind. Clad in a heavy black shroud of self-imposed composure, she creates a boundary that no one else can cross.

She sits alone, at the altar of her own thoughts, giving a beautiful, unauthorized goodbye to a memory that only she is left to honor. We will never know exactly what she is honoring. The viewer is left standing outside the door of her thoughts, witnessing the sheer gravity of a quiet, beautiful goodbye.`,


/* -----------------------------------------------------------
   3
   THE GUARDIANS I BUILT TO DEFEND
----------------------------------------------------------- */

`I built them one at a time, though I don't remember choosing to. I only remember needing them.

The first stands above, where thought begins. It doesn't watch the world, it watches me: deciding, in silence, what takes root and what dissolves before it ever becomes belief. I never asked for a guardian of the mind. I just found myself with one, already old, already certain of its job.

The second lies across my mouth. Every word has to pass beneath it first: weighed, questioned, sometimes let through, sometimes swallowed whole. I built this one out of every "should I say this" I ever asked myself and answered wrong, out of every sentence I decided, halfway through, not to finish.

The third turns away, facing down, toward everything I've carried but never looked at directly. It doesn't guard my face or my words. It holds what's buried. And the second guardian leans back against it, quietly confessing what I already knew: my voice was never really mine alone. It rests on everything underneath it that I haven't processed yet.

Between the first guardian and the second, only one eye stays uncovered. Mind, contained. Voice, filtered. And still, I see.

I built these so carefully, so early, that I forgot they were built at all.

This isn't a portrait of a woman hiding behind her defenses. It's a portrait of the defenses themselves, raised by her for her so quietly that even she had to look twice to recognize it as her own.`
];


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
		z: 44.2
	},


	/*
	 * Artwork III
	 * A Private Eulogy
	 */

	{
		side: 'left',
		z: 44.2
	},


	/*
	 * Artwork IV
	 * The Guardians I Built to Defend
	 */

	{
		side: 'end',
		z: END_Z
	}
];


/* ===========================================================
 * DIMENSIONS
 * ===========================================================
 */

function getDimensions(
	aspect
) {

	const height =
		Math.min(
			MAX_HEIGHT,
			MAX_WIDTH / aspect
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
		CENTRE_Y -
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
		CENTRE_Y -
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
		CENTRE_Y -
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
		CENTRE_Y -
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


	return [
		7.0,
		y,
		END_Z - 0.55
	];
}


/* ===========================================================
 * MAIN PLACEMENT MODULE
 * ===========================================================
 */

module.exports =
(regl) => {

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
				p.aspect
			);


		batch.push({

			...p,


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
				DESCRIPTIONS[index],


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

						index,

						title:
							p.title,

						description:
							p.description,

						plaquePosition:
							p.plaquePosition,

						paintingPosition:
							p.paintingPosition
					})
				)
	};
};
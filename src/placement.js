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
	57.64;

// the painting wall of the new corridor (faces +z)
const CORR_Z =
	48.36;


const LABEL_X_LEFT =
	0.356;

const LABEL_X_RIGHT =
	13.644;

const LABEL_Z_END =
	57.644;

const LABEL_Z_CORR =
	48.356;


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
 * 4 = Between Grief and Acceptance
 * 5 = Uncertainty
 * 6 = Everything Else Was Easier To Perform
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

This isn't a portrait of a woman hiding behind her defenses. It's a portrait of the defenses themselves, raised by her for her so quietly that even she had to look twice to recognize it as her own.`,


/* -----------------------------------------------------------
   4
   BETWEEN GRIEF AND ACCEPTANCE
----------------------------------------------------------- */

`Something has just finished. Not with a blow you could point to, not with any sound loud enough to call an ending. It simply stopped, the way a breath you've been holding without noticing finally has to let go on its own.

And what's left is this: a body that hasn't moved yet. Not because it can't. Moving would mean deciding what to call this, grief or relief, and right now it doesn't have to choose. It can be both at once, sitting in the same chest, breathing the same air.

The hand still curls around the shape of what it used to hold, even though there's nothing left in it. That's the strange part nobody warns you about, how long the hand keeps the memory of weight after the weight itself is gone. You open your fingers and they still won't lie flat. Something in you is still holding on, out of habit more than hope.

Somewhere close, a thin line of smoke keeps rising on its own, unbothered, indifferent to whatever you're feeling. Time doesn't pause to let you finish. It just keeps climbing upward while you're still sitting in the wreckage of the moment, and somehow that keeps going. Life continuing without asking your permission first.

This is what it looks like when you finally understand that something cannot be undone, and instead of breaking, you just go quiet. You sit with the absence like it's something you can still hold, even though it isn't, even though your hands are already empty. And underneath the ache of that, so faint you almost miss it, is a lightness. The kind that only shows up once you stop carrying something you were never meant to carry forever.

Not the fall. Not the healing. Just the long, still breath in between, where losing something and finally being free of it turn out to be the same exact feeling, wearing two different names.`,


/* -----------------------------------------------------------
   5
   UNCERTAINTY
----------------------------------------------------------- */

`The moment right before the crown touches your head.
Not yet crowned.
Not yet forgotten.
Just suspended.

That's what uncertainty feels like. Like someone holding a version of your worth just above you, close enough to taste, far enough to keep you reaching. You have no idea if it'll be placed on your head or taken away the moment you start to believe you deserve it.

It's about the aching pause life holds you in the mid-air between "what is" and "what could have been."

It's about the people who make you feel like you're extraordinary, only to leave you questioning if you ever were.

It's about promises unspoken but implied, gestures that said everything but meant nothing.

And maybe that's what life is. A series of held crowns and hollow hands. Moments where you almost became something more. Moments where you almost believed.

Have you never wondered how life can take you from a high to a hollow in a moment. How the ground can vanish beneath your feet, and yet you learn to walk anyway.

Faiz once wrote:

دل نا امید تو نہیں ناکام ہی تو ہے
لمبی ہے غم کی شام مگر شام ہی تو ہے

(The heart is not hopeless—just defeated a little,
The evening of sorrow is long, but just an evening still.)

Maybe that's the strange mercy in all this, that just as the good times don't last forever, maybe the bad ones won't either and we go on. Certain only of uncertainty.`,


/* -----------------------------------------------------------
   6
   EVERYTHING ELSE WAS EASIER TO PERFORM
----------------------------------------------------------- */

`There is a kind of honesty the body can't help but give away, and a kind it learns to hold back. Hands can be taught to rest gently. Posture can settle into ease. Even fabric, draped just so, catching light in the right places, can be arranged to look like comfort. Almost everything about us can be practiced until it looks true, even when it isn't quite.

The face is different. It says things before we mean to say them. The flicker before a smile, the pause before composure, the small ache that shows up in the eyes when nothing else has moved. It is the one part of us that was never very good at lying. So maybe it makes sense that if any part of us needed protecting, it would be that one.

She looks completely at ease. The kind of comfort you can't fake, or so it seems. She is warm, present, close enough to reach. She offers almost everything a person can offer without saying a word, comfort, beauty, closeness, her hand resting easily like she has nothing to hide.

And that's exactly what makes it work. No one looking at her would think anything is missing. She isn't cold or distant. She isn't guarded in any way you could point to. That's the quiet part of it. The protection is so convincing that it doesn't even look like protection. People don't walk away feeling like they were kept out. They walk away thinking they saw her completely.

Only she knows they didn't.

That's the ache underneath all of it. Not that she hides, but that the hiding costs her nothing on the surface. She gets to be close to people, liked by people, comfortable in front of people, and still keep the one part of herself that actually could be hurt somewhere no one thinks to look. It isn't a wall anyone can see. It's just a very convincing kind of openness, one that gives everything except the one thing that was never really safe to give.

Maybe that's the most human thing about her. Not that she hides something, we all do that. But that she's learned how to hide it so well that even the people closest to her never notice there was a door there at all.`

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
	 * The new corridor's painting wall, one in each of three bays.
	 * The corridor is lower than the main hall, so these hang a
	 * little lower and are a little smaller.
	 */

	{ side: 'corridor', x: 21.0, cy: 3.05, maxW: 3.1, maxH: 3.5 },
	{ side: 'corridor', x: 29.8, cy: 3.05, maxW: 3.1, maxH: 3.5 },
	{ side: 'corridor', x: 38.6, cy: 3.05, maxW: 3.1, maxH: 3.5 }
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

						plaquePosition:
							p.plaquePosition,

						paintingPosition:
							p.paintingPosition
					})
				)
	};
};
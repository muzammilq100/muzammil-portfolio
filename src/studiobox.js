'use strict';

/*
 * THE CONSERVATORY OF UNSAID THINGS: WHERE IT IS
 * ----------------------------------------------
 * Where the conservatory (studio.js) sits in the gallery and how big it
 * is. The gallery itself needs only this much of it; the room, its tour
 * and its pictures (conservatory.js, built on its own) are fetched only
 * when a visitor is let in.
 */

const O = [-90.0, 0.0, 0.0];   // where the room sits in the gallery
const W = 16.0;                // width (x)
const L = 27.5;                // length (z): long enough to stand well back from the rotunda
const RIDGE = 11.6;            // the glass roof's ridge

module.exports = {
	O, W, L, RIDGE,
	// what the camera can be in to be in the room
	BOX: [O[0] - 0.8, 0, O[2] - 0.8, O[0] + W + 0.8, RIDGE + 0.5, O[2] + L + 0.8],
	// the room's air, for its light shafts
	AIR_BOX: [O[0], 0, O[2], O[0] + W, RIDGE, O[2] + L]
};

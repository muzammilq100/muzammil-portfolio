'use strict';

/*
 * QUALITY SETTINGS
 * ----------------
 * Phones and tablets get a lighter version of the gallery, laptops and
 * desktops get everything. Nothing about the artwork, the architecture
 * or where things stand ever changes; only how much work the graphics
 * chip does each frame.
 *
 *   full (laptop, desktop)          light (phone, tablet)
 *   - mirror shine on the floor     - floor without the mirror shine
 *   - sharp on high-res screens     - screen sharpness capped a little
 *   - garden sun and shadows        - garden shadows simplified
 *     worked out live
 *   - all the garden's leaves       - about two thirds of them
 *   - swaying leaves, moving clouds - still leaves and clouds
 *   - light shafts in fine detail,  - light shafts in less detail,
 *     depth of field                  no depth of field
 *
 * The frame rate is watched the whole visit. When it sags the picture
 * is first drawn a little softer (see Q.scale below); if that is not
 * enough a laptop steps down one notch at a time (first the floor
 * shine, then the garden detail and movement) and a phone drops the
 * leaf movement. Every step keeps the picture the same, just a little
 * plainer, and the softness is given back when there is room again.
 */

const ua = (typeof navigator !== 'undefined' && navigator.userAgent) || '';

const touchOnly =
	typeof window !== 'undefined' &&
	window.matchMedia &&
	window.matchMedia('(pointer: coarse)').matches &&
	!window.matchMedia('(any-pointer: fine)').matches;

const isPhone =
	/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(ua) ||
	// iPads report themselves as Macs; they are the Macs with touch screens
	(/Macintosh/.test(ua) && typeof navigator !== 'undefined' && navigator.maxTouchPoints > 1) ||
	touchOnly;

const dpr = (typeof window !== 'undefined' && window.devicePixelRatio) || 1;

const Q = {
	isPhone,

	// fixed at start-up
	pixelRatio: isPhone ? Math.min(dpr, 1.5) : Math.min(dpr, 2),

	// can be stepped down while running
	reflection: !isPhone,
	gardenDetail: isPhone ? 0 : 1,
	leafShare: isPhone ? 0.65 : 1,
	motion: !isPhone,
	// the film camera (post.js): 2 everything, 1 lighter light shafts and
	// no depth of field, 0 no light shafts
	post: isPhone ? 1 : 2,

	level: isPhone ? 1 : 0
};

// SHARPNESS THAT FOLLOWS THE FRAME RATE
// The room is drawn into an off-screen picture (post.js) whose size is
// Q.scale times the screen's. Every three quarters of a second the frame
// rate is checked: when it sags the picture is drawn a little smaller
// (softer, never jerky), and when there has been room to spare for a
// while it is drawn sharper again. Only if that is not enough do the
// notches below come into it.
Q.scale = 1;
const MIN_SCALE = isPhone ? 0.55 : 0.6;
let acc = 0, frames = 0, slow = 0, good = 0;
let cap = 1, capHold = 0;          // do not climb back past a size that was too much
let floorFps = 48;                 // "smooth enough" (lower on screens that refresh slowly)
let lastDrop = null;               // { fps, scale } before the last cut
let noGain = 0;

function degrade(fps) {
	lastDrop = { fps, scale: Q.scale };
	if (Q.scale > 0.86) Q.scale = 0.85;
	else if (Q.reflection) Q.stepDown();
	else if (Q.scale > 0.71) Q.scale = 0.7;
	else if (!Q.stepDown()) Q.scale = Math.max(MIN_SCALE, Q.scale - 0.1);
}

// called once for every frame drawn, with the seconds since the last one
let adapt = true;
try { if (/[?&]noadapt\b/.test(location.search)) adapt = false; } catch (e) { /* on */ }
Q.frame = (dt) => {
	if (!adapt) return;
	if (!(dt > 0) || dt > 1.0) { acc = 0; frames = 0; return; }    // tab was away
	acc += dt; frames++;
	if (acc < 0.75) return;
	const fps = frames / acc;
	acc = 0; frames = 0;
	if (capHold > 0) { capHold -= 0.75; if (capHold <= 0) cap = 1; }

	// a cut that bought nothing means the screen itself is the limit
	// (a battery saver holding it to 30, a 50 Hz display): put the
	// sharpness back and expect no more than this
	if (lastDrop) {
		if (fps < lastDrop.fps * 1.08 && lastDrop.scale > Q.scale) {
			if (++noGain >= 2) {
				Q.scale = 1; cap = 1; capHold = 0;
				floorFps = Math.min(floorFps, fps * 0.85);
				noGain = 0; slow = 0; lastDrop = null;
				return;
			}
		} else {
			noGain = 0;
		}
		lastDrop = null;
	}

	if (fps < floorFps) {
		good = 0;
		if (++slow >= 2) {
			slow = 0;
			// a size we had just climbed to: step back and stay there a while
			if (Q.scale > 0.61 && Q.climbed) { cap = Q.scale - 0.05; capHold = 40; Q.scale = cap; Q.climbed = false; return; }
			degrade(fps);
		}
	} else if (fps > Math.max(floorFps * 1.15, 55)) {
		slow = 0;
		if (++good >= 6 && Q.scale < cap - 0.001) {
			Q.scale = Math.min(cap, Q.scale + 0.05);
			Q.climbed = true;
			good = 0;
		} else if (good >= 6) {
			Q.climbed = false;
		}
	} else {
		slow = 0; good = 0;
	}
};

// one notch lighter; returns false when there is nothing left to drop
Q.stepDown = () => {
	if (Q.reflection) {
		Q.reflection = false;
	} else if (Q.gardenDetail > 0 || Q.motion) {
		Q.gardenDetail = 0;
		Q.motion = false;
		Q.leafShare = Math.min(Q.leafShare, 0.65);
	} else if (Q.post > 0) {
		Q.post--;
	} else {
		return false;
	}
	Q.level++;
	return true;
};

module.exports = Q;

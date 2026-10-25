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
 *
 * After loading, the frame rate is measured. If a laptop struggles it
 * steps down one notch at a time (first the floor shine, then the
 * garden detail and movement); if a phone still struggles it drops the
 * floor shine's last traces and the leaf movement. Every step keeps
 * the picture the same, just a little plainer.
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

	level: isPhone ? 1 : 0
};

// one notch lighter; returns false when there is nothing left to drop
Q.stepDown = () => {
	if (Q.reflection) {
		Q.reflection = false;
	} else if (Q.gardenDetail > 0 || Q.motion) {
		Q.gardenDetail = 0;
		Q.motion = false;
		Q.leafShare = Math.min(Q.leafShare, 0.65);
	} else {
		return false;
	}
	Q.level++;
	return true;
};

module.exports = Q;

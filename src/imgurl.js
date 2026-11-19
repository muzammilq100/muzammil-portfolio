'use strict';

/*
 * A painting's picture, at an address that changes whenever the picture
 * does (the build fingerprints every file in images/: scripts/build.js).
 * Browsers keep pictures for a week (static/_headers); with this, a
 * replaced photo is fetched at once, and an unchanged one stays cached.
 */

/* global __IMAGE_VERSIONS__ */
const V = typeof __IMAGE_VERSIONS__ !== 'undefined' ? __IMAGE_VERSIONS__ : {};

module.exports = (file) => (V[file] ? file + '?v=' + V[file] : file);

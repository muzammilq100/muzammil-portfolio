'use strict';

/*
 * The conservatory's own file (dist/conservatory.js): the room (studio.js)
 * and its tour (studiotour.js), fetched by conservatory.js only when a
 * visitor is let in.
 */

window.__conservatoryRoom = {
	studio: require('./studio'),
	tour: require('./studiotour')
};

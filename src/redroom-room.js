'use strict';

/*
 * The red room's own file (dist/redroom.js): the room (redroom.js) and
 * its look-round (redtour.js), fetched only on ?redroom for now.
 */

window.__redRoom = {
	studio: require('./redroom'),
	tour: require('./redtour')
};

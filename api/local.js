'use strict';

// the paintings and their words live in content/paintings.js
const paintings = require('../content/paintings');
const quality = require('../src/quality');

// phones get the 1024 px copy, everything else the 2048 px one; if the
// web copies are missing (e.g. a dev server before a build) the original
// photograph is used
const webFile = (p) => 'images/web/' + p.slug + (quality.isPhone ? '-1024' : '') + '.webp';

async function get(url) {
	const response = await fetch(url);
	if (!response.ok) throw new Error('Could not load ' + url);
	return response.blob();
}

module.exports = {
	fetchList: async function (from, count) {
		return paintings.slice(from, from + count).map((p, i) => ({
			...p,
			image_id: from + i
		}));
	},

	fetchImage: async function (obj) {
		let image;
		try {
			image = await get(webFile(obj));
		} catch (e) {
			image = await get('images/' + obj.file);
		}
		return { title: obj.title, image };
	}
};

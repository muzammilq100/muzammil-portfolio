'use strict';

// "Oil on canvas · 91 × 61 cm" for a painting from content/paintings.js
module.exports = (p) => {
	if (!p) return '';
	const parts = [];
	if (p.medium) parts.push(p.medium);
	if (p.size && p.size.length === 2) parts.push(p.size[0] + ' × ' + p.size[1] + ' cm');
	return parts.join('  ·  ');
};

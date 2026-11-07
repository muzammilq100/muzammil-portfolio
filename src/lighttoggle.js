'use strict';

// The Day / Night button: a sun by night (to bring the day back), a moon
// by day. Works the same in the tour's corner and while walking.
const env = require('./env');

const SUN = '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>';
const MOON = '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M19.5 14.6A8 8 0 0 1 9.4 4.5a8 8 0 1 0 10.1 10.1z"/></svg>';

module.exports = function lightToggle(cls) {
	const b = document.createElement('button');
	b.type = 'button';
	b.className = cls + ' light-toggle';
	const show = () => {
		const n = env.isNight;
		b.innerHTML = n ? SUN : MOON;
		b.setAttribute('aria-label', n ? 'Switch to day' : 'Switch to night');
		b.title = n ? 'Day' : 'Night';
		b.setAttribute('aria-pressed', n ? 'true' : 'false');
	};
	show();
	env.onChange(show);
	['mousedown', 'pointerdown'].forEach((t) => b.addEventListener(t, (e) => e.stopPropagation()));
	b.addEventListener('click', (e) => { e.stopPropagation(); env.toggle(); });
	return b;
};

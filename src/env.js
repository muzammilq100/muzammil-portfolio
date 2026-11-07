'use strict';

/*
 * DAY AND NIGHT
 * -------------
 * One value every shader reads as the uniform "night": 0 by day, 1 at
 * night. The toggle in the corner sets where it is going; the light then
 * turns over a couple of seconds (the room dims, the moon comes up), so
 * the change itself is a small moment rather than a jump.
 *
 * The visitor's choice is remembered on their device. ?night or ?day in
 * the address opens the gallery that way.
 */

const KEY = 'gallery-light';
let target = 0;
try {
	const q = location.search;
	if (/[?&]night\b/.test(q)) target = 1;
	else if (/[?&]day\b/.test(q)) target = 0;
	else if (localStorage.getItem(KEY) === 'night') target = 1;
} catch (e) { /* storage not available: day */ }

let value = target;
let last = 0;
const listeners = [];

const env = {
	// called once a frame; eases the light towards the chosen time
	tick(now) {
		const dt = last ? Math.min(0.1, now - last) : 0;
		last = now;
		if (value !== target) {
			const step = dt / 2.4;                      // about two and a half seconds
			value = target > value ? Math.min(target, value + step) : Math.max(target, value - step);
		}
		return env.night;
	},
	// smoothed, so the change starts and ends gently
	get night() { return value * value * (3 - 2 * value); },
	get isNight() { return target === 1; },
	set(n) {
		target = n ? 1 : 0;
		try { localStorage.setItem(KEY, n ? 'night' : 'day'); } catch (e) { /* fine */ }
		listeners.forEach((f) => f(target));
	},
	toggle() { env.set(!target); },
	onChange(f) { listeners.push(f); }
};

// for the views out of the gallery (garden, far street, the tree and
// the figure in its room): the classic "day for night", a moonlit,
// colder, darker version of whatever the shader worked out by day.
// keep: how much light is left (0.2 a dark garden .. 0.5 in moonlight)
env.GLSL = `
uniform float night;
vec3 toNight(vec3 c, float keep) {
	float l = dot(c, vec3(0.299, 0.587, 0.114));
	vec3 n = mix(vec3(l), c, 0.35) * vec3(0.55, 0.70, 1.05) * keep;
	return mix(c, n, night);
}
`;

module.exports = env;

'use strict';

/*
 * THE PIANO, HEARD FROM WHERE YOU STAND
 * -------------------------------------
 * He is playing in the round stair hall, and the music comes from there.
 * In that room it is close and clear. Out in the gallery it is what you
 * would hear through an arch and down a long stone hall: quieter the
 * further you are, the high notes lost first, and more of it the room's
 * own echo than the instrument. Walk towards it and it grows.
 *
 * The recording (res/audio/) plays in a loop. Browsers do not let a page
 * make sound until the visitor has touched it, so it starts with their
 * first tap, click or key; the button in the corner turns it off and on,
 * and the choice is remembered.
 *
 * His hands follow the same recording (avatar.js): res/audio/*.json
 * lists when keys go down in the bass and the treble, how hard, and
 * roughly where along the keyboard (timing and weight only, worked out
 * from the recording by tools), and `time()` here says where the music is.
 */

const SH = require('./stairhall');

const SRC = 'res/audio/go-tomorrow.mp3';
const CUES = 'res/audio/go-tomorrow.json';
const KEY = 'gallery-sound';

// where the sound comes from (the piano's strings), gallery metres
const AT = [SH.PIANO.x, 1.0, SH.PIANO.z];
const ROOM_R = SH.R;

let wanted = true;
try { if (localStorage.getItem(KEY) === 'off') wanted = false; } catch (e) { /* on */ }

let audio = null, ctx = null, dry = null, wet = null, tone = null, master = null;
let started = false;
let cues = null;
const listeners = [];
const t0 = (typeof performance !== 'undefined' ? performance.now() : 0) / 1000;

// the echo of a tall stone room: a burst of noise dying away over a
// couple of seconds, made here rather than downloaded
function stoneRoom(c) {
	const len = Math.floor(c.sampleRate * 2.6);
	const buf = c.createBuffer(2, len, c.sampleRate);
	let seed = 12345;
	const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 1073741823.5 - 1; };
	for (let ch = 0; ch < 2; ch++) {
		const d = buf.getChannelData(ch);
		let lp = 0;
		for (let i = 0; i < len; i++) {
			const t = i / c.sampleRate;
			// (the echo grows duller as it dies)
			const k = 0.25 + 0.6 * Math.exp(-t * 2.2);
			lp += (rnd() - lp) * k;
			d[i] = lp * Math.pow(1 - i / len, 2.2) * Math.exp(-t * 1.5) * (t < 0.012 ? t / 0.012 : 1);
		}
	}
	return buf;
}

function build() {
	if (audio) return;
	audio = new Audio();
	audio.src = SRC;
	audio.loop = true;
	audio.preload = 'auto';
	audio.crossOrigin = 'anonymous';
	const AC = window.AudioContext || window.webkitAudioContext;
	if (!AC) { audio.volume = 0.2; return; }      // a very old browser: just play it, softly
	try {
		ctx = new AC();
		const src = ctx.createMediaElementSource(audio);
		tone = ctx.createBiquadFilter();
		tone.type = 'lowpass';
		tone.frequency.value = 1500;
		tone.Q.value = 0.4;
		dry = ctx.createGain(); dry.gain.value = 0;
		wet = ctx.createGain(); wet.gain.value = 0;
		const echo = ctx.createConvolver();
		echo.buffer = stoneRoom(ctx);
		master = ctx.createGain(); master.gain.value = wanted ? 1 : 0;
		src.connect(tone);
		tone.connect(dry); dry.connect(master);
		tone.connect(echo); echo.connect(wet); wet.connect(master);
		master.connect(ctx.destination);
	} catch (e) {
		ctx = null;
		audio.volume = 0.2;
	}
}

function begin() {
	if (started || !wanted) return;
	build();
	const go = () => audio.play().then(() => { started = true; }).catch(() => { /* not yet: the next touch will try again */ });
	if (ctx && ctx.state === 'suspended') ctx.resume().then(go, go); else go();
}

if (typeof window !== 'undefined') {
	['pointerdown', 'pointerup', 'touchend', 'keydown', 'click'].forEach((n) =>
		window.addEventListener(n, begin, { capture: true, passive: true }));
	// nothing plays while the page is hidden
	document.addEventListener('visibilitychange', () => {
		if (!audio || !started) return;
		if (document.hidden) audio.pause();
		else if (wanted) audio.play().catch(() => {});
	});
	fetch(CUES).then((r) => (r.ok ? r.json() : null)).then((j) => {
		if (!j) return;
		// spread each hand's notes over its part of the keyboard
		const spread = (ev) => {
			const p = ev.map((e) => e[2]).sort((a, b) => a - b);
			const lo = p[Math.floor(p.length * 0.03)] || 0, hi = p[Math.floor(p.length * 0.97)] || 1;
			return ev.map((e) => ({ t: e[0], w: e[1], x: Math.max(0, Math.min(1, (e[2] - lo) / Math.max(hi - lo, 1e-3))) }));
		};
		cues = { left: spread(j.l), right: spread(j.r), level: j.e, dur: j.d };
	}).catch(() => {});
}

const sound = {
	AT,

	// once a frame: where the listener (the camera) is
	listen(eye) {
		if (!ctx || !started) return;
		const dx = eye[0] - AT[0], dz = eye[2] - AT[2];
		const d = Math.hypot(dx, dz, (eye[1] - AT[1]) * 0.5);
		// inside the round room, or out in the gallery?
		const inRoom = Math.hypot(eye[0] - SH.C.x, eye[2] - SH.C.z) < ROOM_R + 0.4 || (eye[0] < -0.2 && Math.abs(eye[2] - SH.C.z) < 4);
		let direct, echoed, cut;
		if (inRoom) {
			// close to the instrument it is all piano; across the room a little softer
			const near = Math.max(0, Math.min(1, (d - 1.2) / 5));
			direct = 1.0 - 0.3 * near;
			echoed = 0.22 + 0.16 * near;
			cut = 16000;
		} else {
			// through the arch and away down the hall
			const far = 5.5 / Math.max(d, 5.5);
			// the tree court is round a corner: duller and fainter still
			const corner = eye[0] > 14.2 && eye[2] < 12 ? 0.6 : 1;
			direct = 0.5 * Math.pow(far, 1.5) * corner;
			echoed = 0.34 * Math.pow(far, 0.95) * corner;
			cut = (650 + 9000 * Math.pow(far, 1.3)) * (corner < 1 ? 0.7 : 1);
		}
		const now = ctx.currentTime;
		dry.gain.setTargetAtTime(direct, now, 0.35);
		wet.gain.setTargetAtTime(echoed, now, 0.35);
		tone.frequency.setTargetAtTime(cut, now, 0.35);
	},

	// seconds into the piece (it runs silently until the sound starts, so
	// he is always playing; once it sounds, his hands follow what is heard)
	time() {
		const dur = (cues && cues.dur) || 158;
		if (audio && started && !audio.paused) return audio.currentTime % dur;
		if (audio && started) return audio.currentTime % dur;
		return ((performance.now() / 1000 - t0) % dur + dur) % dur;
	},

	get cues() { return cues; },
	get on() { return wanted; },

	set(on) {
		wanted = !!on;
		try { localStorage.setItem(KEY, wanted ? 'on' : 'off'); } catch (e) { /* not remembered */ }
		if (wanted) {
			begin();
			if (audio && started) audio.play().catch(() => {});
			if (master) master.gain.setTargetAtTime(1, ctx.currentTime, 0.2);
		} else {
			if (master) master.gain.setTargetAtTime(0, ctx.currentTime, 0.15);
			else if (audio) audio.pause();
		}
		listeners.forEach((f) => f(wanted));
	},
	toggle() { sound.set(!wanted); },
	onChange(f) { listeners.push(f); },

	// the button for the corner (like the day and night one)
	button(cls) {
		const ON = '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11"/></svg>';
		const OFF = '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>';
		const b = document.createElement('button');
		b.type = 'button';
		b.className = cls + ' sound-toggle';
		const show = () => {
			b.innerHTML = wanted ? ON : OFF;
			b.setAttribute('aria-label', wanted ? 'Turn the music off' : 'Turn the music on');
			b.title = wanted ? 'Music on' : 'Music off';
			b.setAttribute('aria-pressed', wanted ? 'true' : 'false');
		};
		show();
		sound.onChange(show);
		['mousedown', 'pointerdown'].forEach((t) => b.addEventListener(t, (e) => e.stopPropagation()));
		b.addEventListener('click', (e) => { e.stopPropagation(); sound.toggle(); });
		return b;
	}
};

module.exports = sound;

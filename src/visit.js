'use strict';

/*
 * VISIT WHAT REMAINED
 * -------------------
 * Some paintings can be "visited": a short film of the painting coming
 * to life, which ends by settling back into the painting itself.
 *
 * Laptops and desktops only (a phone, or anything without a mouse, never
 * sees the button). The film for a painting is set in content/paintings.js:
 *
 *   visit: { video: 'visits/<slug>.mp4', poster: 'visits/<slug>.jpg' }
 *
 * While a visit plays, the gallery behind it stops drawing (body.visiting)
 * so the film has the whole machine to itself.
 *
 * The sequence: the gallery fades to black, the cinema bars close in, the
 * film plays (with the painting's name for a moment), and as it ends the
 * real painting fades up out of its last frame, with its name and size.
 * Esc, the × or "Return to the gallery" bring you back.
 */

const quality = require('./quality');
const caption = require('./caption');

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// laptops and desktops: a fine pointer, not a phone or tablet, room to breathe
function available() {
	if (quality.isPhone) return false;
	if (!window.matchMedia || !window.matchMedia('(pointer: fine)').matches) return false;
	return window.innerWidth >= 900 && window.innerHeight >= 520;
}

const CSS = `
.visit-btn {
	display: inline-flex;
	align-items: center;
	gap: 10px;
	min-height: 40px;
	padding: 0 18px 0 14px;
	border: 1px solid rgba(233,207,154,.6);
	border-radius: 999px;
	background: rgba(233,207,154,.10);
	color: #f4ecdf;
	font: 500 12px/1 Georgia, serif;
	letter-spacing: .2em;
	text-transform: uppercase;
	cursor: pointer;
	pointer-events: auto;
	transition: background .35s ease, border-color .35s ease, box-shadow .35s ease;
}
.visit-btn:hover {
	background: rgba(233,207,154,.22);
	border-color: #e9cf9a;
	box-shadow: 0 0 24px rgba(233,207,154,.18);
}
.visit-btn:focus-visible { outline: 2px solid #e9cf9a; outline-offset: 3px; }
.visit-btn svg { flex: none; }
.visit-btn .visit-play { transition: transform .35s ease; }
.visit-btn:hover .visit-play { transform: scale(1.12); }
.visit-row { display: block; margin: 2px 0 18px; }

.visit {
	position: fixed;
	inset: 0;
	z-index: 400;
	background: #000;
	opacity: 0;
	transition: opacity 1.1s ease;
	overflow: hidden;
	font-family: 'Cormorant Garamond', Georgia, serif;
	color: #f4ecdf;
	cursor: default;
}
.visit.on { opacity: 1; }
.visit video, .visit .visit-art {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
}
.visit video { object-fit: cover; opacity: 0; transition: opacity 1.6s ease; }
.visit.playing video { opacity: 1; }
/* the painting itself, fading up out of the film's last frame */
.visit .visit-art {
	object-fit: contain;
	padding: 12vh 8vw calc(8.5vh + 150px);
	box-sizing: border-box;
	opacity: 0;
	transform: scale(1.04);
	transition: opacity 2.4s ease, transform 6s cubic-bezier(.2,.7,.2,1);
	filter: drop-shadow(0 24px 50px rgba(0,0,0,.6));
}
.visit.resolved .visit-art { opacity: 1; transform: none; }
.visit.resolved video { opacity: 0; transition: opacity 2.4s ease; }

/* cinema bars that close in, a vignette and a breath of film grain */
.visit-bar {
	position: absolute;
	left: 0; right: 0;
	height: 0;
	background: #000;
	z-index: 3;
	transition: height 1.4s cubic-bezier(.6,0,.2,1);
}
.visit-bar.top { top: 0; }
.visit-bar.bottom { bottom: 0; }
.visit.on .visit-bar { height: 8.5vh; }
.visit-vignette {
	position: absolute;
	inset: 0;
	z-index: 2;
	pointer-events: none;
	background: radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,.55) 100%);
}
.visit-grain {
	position: absolute;
	inset: -50%;
	width: 200%;
	height: 200%;
	z-index: 2;
	pointer-events: none;
	opacity: .07;
	mix-blend-mode: overlay;
	image-rendering: pixelated;
}

/* words */
.visit-title {
	position: absolute;
	left: 6vw;
	bottom: calc(8.5vh + 28px);
	z-index: 4;
	max-width: 60vw;
	opacity: 0;
	transform: translateY(10px);
	transition: opacity 1.6s ease, transform 1.8s cubic-bezier(.2,.7,.2,1);
	text-shadow: 0 2px 20px rgba(0,0,0,.8);
	pointer-events: none;
}
.visit-title.on { opacity: 1; transform: none; }
.visit-kicker { display: block; font: 500 11px/1.4 Georgia, serif; letter-spacing: .38em; text-transform: uppercase; color: #e9cf9a; }
.visit-name { display: block; margin-top: 8px; font-size: clamp(28px, 3.2vw, 46px); font-weight: 500; line-height: 1.05; }
.visit-meta { display: block; margin-top: 8px; font: 500 12px/1.4 Georgia, serif; letter-spacing: .24em; text-transform: uppercase; opacity: .8; }

.visit-end {
	position: absolute;
	right: 6vw;
	bottom: calc(8.5vh + 28px);
	z-index: 4;
	display: flex;
	gap: 10px;
	opacity: 0;
	transition: opacity 1.4s ease 1.2s;
	pointer-events: none;
}
.visit.resolved .visit-end { opacity: 1; pointer-events: auto; }
.visit-end button, .visit-skip, .visit-close {
	min-height: 40px;
	padding: 0 18px;
	border-radius: 999px;
	border: 1px solid rgba(244,236,223,.35);
	background: rgba(20,15,10,.35);
	color: #f4ecdf;
	font: 500 11px/1 Georgia, serif;
	letter-spacing: .2em;
	text-transform: uppercase;
	cursor: pointer;
	transition: background .3s ease, border-color .3s ease;
}
.visit-end button.primary { border-color: rgba(233,207,154,.6); background: rgba(233,207,154,.14); }
.visit-end button:hover, .visit-skip:hover, .visit-close:hover { background: rgba(60,45,30,.55); border-color: rgba(244,236,223,.6); }
.visit-close {
	position: absolute;
	top: calc(8.5vh + 18px);
	right: 22px;
	z-index: 5;
	width: 40px;
	padding: 0;
	font: 22px/1 Georgia, serif;
	letter-spacing: 0;
	opacity: .7;
}
.visit-skip {
	position: absolute;
	right: 6vw;
	bottom: calc(8.5vh + 28px);
	z-index: 4;
	opacity: 0;
	transition: opacity .8s ease;
}
.visit.playing .visit-skip { opacity: .6; }
.visit.playing .visit-skip:hover { opacity: 1; }
.visit.resolved .visit-skip { display: none; }
.visit button:focus-visible { outline: 2px solid #e9cf9a; outline-offset: 3px; }

@media (prefers-reduced-motion: reduce) {
	.visit .visit-art { transform: none; transition: opacity 1.2s ease; }
	.visit-grain { display: none; }
}
`;

let styled = false;
function style() {
	if (styled) return;
	styled = true;
	const s = document.createElement('style');
	s.textContent = CSS;
	document.head.appendChild(s);
}

const PLAY_SVG = '<svg class="visit-play" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10.2"/><path d="M10 8.4l6 3.6-6 3.6z" fill="currentColor" stroke="none"/></svg>';

// the button that sits on a painting's card (or '' if it has no visit, or
// this device should not offer one)
function button(p) {
	if (!p || !p.visit || !available()) return '';
	style();
	return `<button type="button" class="visit-btn" data-visit="${esc(p.slug || '')}" aria-label="Visit what remained: watch ${esc(p.title)} come to life">${PLAY_SVG}<span>Visit what remained</span></button>`;
}

// moving film grain: a tiny noise tile redrawn a few times a second
function grain(canvas) {
	const ctx = canvas.getContext('2d');
	canvas.width = canvas.height = 160;
	const img = ctx.createImageData(160, 160);
	let alive = true, last = 0;
	(function tick(t) {
		if (!alive) return;
		if (t - last > 70) {
			last = t;
			const d = img.data;
			for (let i = 0; i < d.length; i += 4) {
				const v = Math.random() * 255;
				d[i] = d[i + 1] = d[i + 2] = v;
				d[i + 3] = 255;
			}
			ctx.putImageData(img, 0, 0);
			canvas.style.transform = `translate(${(Math.random() * 6 - 3).toFixed(1)}%, ${(Math.random() * 6 - 3).toFixed(1)}%)`;
		}
		requestAnimationFrame(tick);
	})(0);
	return () => { alive = false; };
}

let current = null;

function open(p) {
	if (current || !p || !p.visit) return;
	style();
	const before = document.activeElement;
	document.body.classList.add('visiting');

	const art = 'images/web/' + p.slug + (quality.isPhone ? '-1024' : '') + '.webp';
	const el = document.createElement('div');
	el.className = 'visit';
	el.setAttribute('role', 'dialog');
	el.setAttribute('aria-modal', 'true');
	el.setAttribute('aria-label', 'Visiting ' + p.title);
	el.innerHTML = `
		<video muted playsinline preload="auto" ${p.visit.poster ? `poster="${esc(p.visit.poster)}"` : ''}></video>
		<img class="visit-art" alt="${esc(p.title)}, ${esc(caption(p))}" src="${esc(art)}">
		<canvas class="visit-grain" aria-hidden="true"></canvas>
		<div class="visit-vignette" aria-hidden="true"></div>
		<div class="visit-bar top" aria-hidden="true"></div>
		<div class="visit-bar bottom" aria-hidden="true"></div>
		<div class="visit-title">
			<span class="visit-kicker">A visit</span>
			<span class="visit-name">${esc(p.title)}</span>
			<span class="visit-meta">${esc(caption(p))}</span>
		</div>
		<button type="button" class="visit-close" aria-label="Return to the gallery">×</button>
		<button type="button" class="visit-skip">Skip</button>
		<div class="visit-end">
			<button type="button" class="primary" data-act="back">Return to the gallery</button>
			<button type="button" data-act="again">Watch again</button>
		</div>`;
	document.body.appendChild(el);

	const video = el.querySelector('video');
	const title = el.querySelector('.visit-title');
	const stopGrain = grain(el.querySelector('.visit-grain'));
	const timers = [];
	const later = (fn, ms) => timers.push(setTimeout(fn, ms));

	// keep every key, click and scroll inside the visit
	const swallow = (e) => e.stopPropagation();
	['mousedown', 'pointerdown', 'click', 'wheel', 'touchstart', 'touchmove'].forEach((t) => el.addEventListener(t, swallow));
	const onKey = (e) => {
		if (e.key === 'Escape') { e.preventDefault(); close(); }
		else if (e.key === ' ' && !(e.target && e.target.tagName === 'BUTTON')) { e.preventDefault(); resolve(); }
		e.stopImmediatePropagation();
	};
	window.addEventListener('keydown', onKey, true);
	const onKeyUp = (e) => e.stopImmediatePropagation();
	window.addEventListener('keyup', onKeyUp, true);

	let resolved = false;
	function resolve() {
		if (resolved) return;
		resolved = true;
		title.classList.add('on');
		el.classList.add('resolved');
		later(() => { const b = el.querySelector('[data-act="back"]'); if (b) b.focus({ preventScroll: true }); }, 1300);
	}

	function play() {
		resolved = false;
		el.classList.remove('resolved');
		title.classList.remove('on');
		try { video.currentTime = 0; } catch (e) { /* not loaded yet */ }
		const go = video.play();
		if (go && go.catch) go.catch(() => resolve());
		el.classList.add('playing');
		// the painting's name for a moment, early in the film
		later(() => { if (!resolved) title.classList.add('on'); }, 1600);
		later(() => { if (!resolved) title.classList.remove('on'); }, 6200);
	}

	// the film's last frame dissolves into the painting itself
	video.addEventListener('timeupdate', () => {
		if (video.duration && video.currentTime > video.duration - 1.2) resolve();
	});
	video.addEventListener('ended', resolve);
	video.addEventListener('error', resolve);

	function close() {
		if (!current) return;
		current = null;
		timers.forEach(clearTimeout);
		el.classList.remove('on');
		try { video.pause(); } catch (e) { /* fine */ }
		window.removeEventListener('keydown', onKey, true);
		window.removeEventListener('keyup', onKeyUp, true);
		// the gallery starts drawing again under the fading black
		document.body.classList.remove('visiting');
		setTimeout(() => {
			stopGrain();
			el.remove();
			if (before && before.focus) before.focus({ preventScroll: true });
		}, 1150);
	}

	el.querySelector('.visit-close').addEventListener('click', close);
	el.querySelector('.visit-skip').addEventListener('click', () => { try { video.pause(); } catch (e) { /* fine */ } resolve(); });
	el.querySelector('.visit-end').addEventListener('click', (e) => {
		const b = e.target.closest('button');
		if (!b) return;
		if (b.dataset.act === 'back') close();
		if (b.dataset.act === 'again') { timers.forEach(clearTimeout); play(); }
	});

	video.src = p.visit.video;
	current = { close };
	requestAnimationFrame(() => {
		el.classList.add('on');
		// let the black and the bars settle before the film begins
		later(play, 1300);
	});
}

// start fetching a film quietly once its button is on screen
const warmed = {};
function warm(p) {
	if (!p || !p.visit || warmed[p.visit.video] || !available()) return;
	warmed[p.visit.video] = true;
	const l = document.createElement('link');
	l.rel = 'preload';
	l.as = 'video';
	l.href = p.visit.video;
	document.head.appendChild(l);
}

module.exports = { available, button, open, warm, get active() { return !!current; } };

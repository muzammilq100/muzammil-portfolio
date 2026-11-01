'use strict';

/*
 * THE PAINTINGS AS A LIST
 * -----------------------
 * A plain page of the paintings with their words: for phones that cannot
 * draw the 3D gallery, for anyone who opens the site with #list, and from
 * the "All paintings" button at the end of the tour.
 */

const paintings = require('../content/paintings');
const contact = require('./contact');
const caption = require('./caption');
const quality = require('./quality');

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const CSS = `
.plist {
	position: fixed; inset: 0; z-index: 300;
	overflow-y: auto; -webkit-overflow-scrolling: touch;
	background: #14100c; color: #f4ecdf;
	font-family: 'Cormorant Garamond', Georgia, serif;
	opacity: 0; transition: opacity .5s ease;
}
.plist.on { opacity: 1; }
.plist * { box-sizing: border-box; }
.plist-head { max-width: 1100px; margin: 0 auto; padding: clamp(28px, 6vw, 72px) 20px 10px; text-align: center; }
.plist-head h1 { margin: 0; font-weight: 500; font-size: clamp(40px, 7vw, 72px); letter-spacing: .01em; }
.plist-motto { margin: 12px 0 18px; font-style: italic; font-size: clamp(18px, 2.2vw, 22px); line-height: 1.4; opacity: .9; }
.plist-contact { display: flex; justify-content: center; flex-wrap: wrap; gap: 6px 20px; font-size: 16px; }
.plist-contact a { display: inline-flex; align-items: center; gap: 7px; min-height: 36px; color: #e9cf9a; text-decoration: none; }
.plist-close {
	position: fixed; top: 12px; right: 14px; min-height: 44px; padding: 0 16px; z-index: 2;
	border: 1px solid rgba(244,236,223,.32); border-radius: 999px; background: rgba(20,15,10,.6);
	color: #f4ecdf; font: 500 12px/1 Georgia, serif; letter-spacing: .16em; text-transform: uppercase; cursor: pointer;
}
.plist-grid { max-width: 1100px; margin: 0 auto; padding: 30px 20px 80px; display: grid; gap: 56px 40px; grid-template-columns: repeat(auto-fill, minmax(min(100%, 440px), 1fr)); }
.plist-item img { display: block; width: 100%; height: auto; background: #241c15; box-shadow: 0 18px 40px rgba(0,0,0,.45); }
.plist-meta { margin: 18px 0 4px; font: 500 12px/1.4 Georgia, serif; letter-spacing: .24em; text-transform: uppercase; color: #e9cf9a; }
.plist-item h2 { margin: 0 0 10px; font-weight: 500; font-size: clamp(26px, 3vw, 34px); line-height: 1.1; }
.plist-item details summary { cursor: pointer; font-style: italic; font-size: 17px; opacity: .85; }
.plist-item details p { margin: 12px 0 0; white-space: pre-line; font-size: 18px; line-height: 1.6; color: rgba(244,236,223,.9); }
.plist-note { max-width: 640px; margin: 0 auto; padding: 0 20px; text-align: center; font-size: 16px; opacity: .75; }
`;

let page = null;

function show(no3d) {
	if (page) { page.hidden = false; requestAnimationFrame(() => page.classList.add('on')); return; }
	const style = document.createElement('style');
	style.textContent = CSS;
	document.head.appendChild(style);

	const big = !quality.isPhone;
	page = document.createElement('div');
	page.className = 'plist';
	page.setAttribute('role', 'region');
	page.setAttribute('aria-label', 'All paintings');
	page.innerHTML = `
		${no3d ? '' : '<button type="button" class="plist-close">Back to the gallery</button>'}
		<header class="plist-head">
			<h1>Muzammil</h1>
			<p class="plist-motto">I don’t paint what happened.<br>I paint what remained<br>after it happened</p>
			${contact.line('plist-contact')}
		</header>
		${no3d ? '<p class="plist-note">This device could not open the 3D gallery, so here are the paintings on their own.</p>' : ''}
		<main class="plist-grid">
			${paintings.map((p) => `
			<article class="plist-item" id="${esc(p.slug)}">
				<img loading="lazy" decoding="async" alt="${esc(p.title)}, ${esc(caption(p))}"
					src="images/web/${esc(p.slug)}${big ? '' : '-1024'}.webp"
					onerror="this.onerror=null;this.src='images/${esc(p.file)}'">
				<p class="plist-meta">${esc(caption(p))}</p>
				<h2>${esc(p.title)}</h2>
				<details><summary>Read its story</summary>
					${String(p.description).split(/\n\s*\n/).map((x) => `<p>${esc(x.trim())}</p>`).join('')}
				</details>
			</article>`).join('')}
		</main>`;
	// (keep the gallery's own keys and clicks out of the list)
	['mousedown', 'pointerdown', 'click', 'wheel', 'touchstart', 'touchmove', 'keydown'].forEach((t) =>
		page.addEventListener(t, (e) => e.stopPropagation(), { passive: true }));
	const close = page.querySelector('.plist-close');
	if (close) close.addEventListener('click', hide);
	document.body.appendChild(page);
	requestAnimationFrame(() => page.classList.add('on'));
}

function hide() {
	if (!page) return;
	page.classList.remove('on');
	setTimeout(() => { page.hidden = true; }, 500);
	if (location.hash === '#list') history.replaceState(null, '', location.pathname + location.search);
}

module.exports = { show, hide };

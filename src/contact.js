'use strict';

/*
 * CONTACT
 * -------
 * Where visitors can find the artist. Shown in the tour's corner, on the
 * About card, at the end of the tour, in free walking and in the list view.
 */

const CONTACT = {
	instagram: 'muzammil_qureshi',
	email: 'muzammilqureshi100@gmail.com'
};

const IG_SVG = '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>';
const MAIL_SVG = '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>';

CONTACT.instagramUrl = 'https://instagram.com/' + CONTACT.instagram;
CONTACT.mailUrl = 'mailto:' + CONTACT.email + '?subject=' + encodeURIComponent('Your paintings');

// two round icon links (for corners)
CONTACT.icons = (cls) => `
	<a class="${cls}" href="${CONTACT.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram: @${CONTACT.instagram}" title="Instagram">${IG_SVG}</a>
	<a class="${cls}" href="${CONTACT.mailUrl}" aria-label="Email ${CONTACT.email}" title="Email">${MAIL_SVG}</a>`;

// a line of words (for cards)
CONTACT.line = (cls) => `
	<span class="${cls}">
		<a href="${CONTACT.instagramUrl}" target="_blank" rel="noopener">${IG_SVG}<span>@${CONTACT.instagram}</span></a>
		<a href="${CONTACT.mailUrl}">${MAIL_SVG}<span>${CONTACT.email}</span></a>
	</span>`;

module.exports = CONTACT;

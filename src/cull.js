'use strict';

/*
 * WHAT THE CAMERA CAN SEE
 * -----------------------
 * The gallery is several rooms joined by openings: the main hall, the
 * tree court (through its arch), the window corridor (off the hall's far
 * end), the round stair hall (through its arch opposite the corridor),
 * the street (through the entrance door), the garden (through the
 * corridor windows) and the Florence street (through the far door).
 *
 * Drawing all of them every frame is most of the graphics chip's work,
 * and most of the time most of them are behind a wall. Each frame this
 * module works out which rooms can really be seen:
 *
 *   - a room is drawn when the camera stands in it;
 *   - otherwise only when every opening on the way to it is in front of
 *     the camera AND the openings line up, seen from where the camera
 *     is (looking down the hall, the corridor's mouth is in view but the
 *     garden windows cannot be seen through it);
 *   - anything else (a statue, a tree) only when its box is in view.
 *
 * Nothing is ever hidden that could be seen: every test errs on the
 * side of drawing. Outside the rooms it knows (a camera in the garden,
 * say) it falls back to drawing everything in view.
 *
 * The same tests run for the room's reflection in the polished floor,
 * with every box mirrored below the floor.
 *
 * Gallery metres: x across the main hall, z along it, y up.
 * A box is [x0, y0, z0, x1, y1, z1].
 */

const { A: COURT } = require('./alcove');
const { C: WING } = require('./wing');
const { DOOR } = require('./entrance');
const SH = require('./stairhall');
const STUDIO = require('./studiobox');

const HALL_END = WING.hallEnd + 0.35;

// the openings between rooms
const PORTAL = {
	arch: [13.6, 0, COURT.zc - COURT.arch.r - 0.3, 14.4, COURT.arch.spring + COURT.arch.r + 0.3, COURT.zc + COURT.arch.r + 0.3],
	mouth: [13.3, 0, WING.z0 - 0.3, 14.3, 8.2, WING.z1 + 0.3],
	stair: [-0.5, 0, SH.SURR.z0 - 0.2, 0.5, SH.SURR.top + 0.3, SH.SURR.z1 + 0.2],
	door: [DOOR.x0 - 0.4, 0, -0.5, DOOR.x1 + 0.4, DOOR.top + 0.4, 0.5],
	windows: [15.6, 0.4, WING.z1 - 0.2, 36.9, 6.4, WING.z1 + 0.9],
	farDoor: [WING.x1 - 0.2, 0, WING.zc - DOOR.r - 0.4, WING.x1 + 0.9, DOOR.top + 0.4, WING.zc + DOOR.r + 0.4]
};

// what lies beyond them
const ROOM = {
	court: [COURT.x0 - 0.4, 0, COURT.z0 - 0.3, COURT.x1 + 0.3, COURT.domeTop + 0.5, COURT.z1 + 0.3],
	stair: [SH.C.x - SH.R - 2.6, 0, SH.C.z - SH.R - 1.5, 0.5, 15.6, SH.C.z + SH.R + 1.5],
	street: [-60, -1, -140, 74, 60, 0.6],
	garden: [10, -1, WING.z1, 46, 60, WING.z1 + 110],
	florence: [WING.x1, -1, WING.zc - 30, WING.x1 + 80, 60, WING.zc + 30],
	// the studio is a room of its own for now: seen only from inside it
	studio: STUDIO.BOX
};

// the polished floors (for the reflection)
const FLOORS = [
	[0, 0, 0, 14, 0, HALL_END],
	[13.6, 0, WING.z0, WING.x1 + 0.4, 0, WING.z1],
	[COURT.x0 - 0.4, 0, COURT.z0, COURT.x1, 0, COURT.z1],
	[SH.C.x - SH.R - 2.6, 0, SH.C.z - SH.R, 0.4, 0, SH.C.z + SH.R],
	[STUDIO.BOX[0], 0, STUDIO.BOX[2], STUDIO.BOX[3], 0, STUDIO.BOX[5]]
];

// the openings to pass through, from each room the camera can be in
const WAY = {
	hall: { court: ['arch'], stair: ['stair'], street: ['door'], garden: ['mouth', 'windows'], florence: ['mouth', 'farDoor'] },
	wing: { court: ['mouth', 'arch'], stair: ['mouth', 'stair'], street: ['mouth', 'door'], garden: ['windows'], florence: ['farDoor'] },
	court: { stair: ['arch', 'stair'], street: ['arch', 'door'], garden: ['arch', 'mouth', 'windows'], florence: ['arch', 'mouth', 'farDoor'] },
	stair: { court: ['stair', 'arch'], street: ['stair', 'door'], garden: ['stair', 'mouth', 'windows'], florence: ['stair', 'mouth', 'farDoor'] }
};

const planes = new Float64Array(24);
const eye = [7, 2, 2];
let fwdA = 0;                 // the camera's heading, in the plan
let zone = 'out';
let enabled = true;
try { if (/[?&]nocull\b/.test(location.search)) enabled = false; } catch (e) { /* on */ }

const seen = { court: true, stair: true, street: true, garden: true, florence: true, studio: false };
const seenR = { court: true, stair: true, street: true, garden: true, florence: true, studio: false };
let floorSeen = true;

function setPlanes(m) {
	// Gribb/Hartmann, column-major matrix
	const row = (i) => [m[i], m[4 + i], m[8 + i], m[12 + i]];
	const r0 = row(0), r1 = row(1), r2 = row(2), r3 = row(3);
	const set = (k, a, s, b) => {
		for (let i = 0; i < 4; i++) planes[k * 4 + i] = a[i] + s * b[i];
	};
	set(0, r3, 1, r0); set(1, r3, -1, r0);
	set(2, r3, 1, r1); set(3, r3, -1, r1);
	set(4, r3, 1, r2); set(5, r3, -1, r2);
}

// is any part of the box inside the view? (errs towards yes)
function boxIn(b, mirrored) {
	if (!enabled) return true;
	const y0 = mirrored ? -b[4] : b[1];
	const y1 = mirrored ? -b[1] : b[4];
	for (let k = 0; k < 6; k++) {
		const a = planes[k * 4], bb = planes[k * 4 + 1], c = planes[k * 4 + 2], d = planes[k * 4 + 3];
		const x = a > 0 ? b[3] : b[0];
		const y = bb > 0 ? y1 : y0;
		const z = c > 0 ? b[5] : b[2];
		if (a * x + bb * y + c * z + d < 0) return false;
	}
	return true;
}

const inside = (b, pad) =>
	eye[0] > b[0] - pad && eye[0] < b[3] + pad && eye[2] > b[2] - pad && eye[2] < b[5] + pad;

// the span of headings (relative to where the camera looks) that a box
// covers in the plan, or null for "all round"
function span(b) {
	if (inside(b, 0.6)) return null;
	let lo = Infinity, hi = -Infinity;
	for (let i = 0; i < 4; i++) {
		const x = (i & 1 ? b[3] : b[0]) - eye[0];
		const z = (i & 2 ? b[5] : b[2]) - eye[2];
		let a = Math.atan2(x, z) - fwdA;
		a -= Math.round(a / (2 * Math.PI)) * 2 * Math.PI;
		lo = Math.min(lo, a); hi = Math.max(hi, a);
	}
	// reaching round behind the camera: no use as a limit
	if (hi - lo > Math.PI) return null;
	return [lo, hi];
}

function through(names, target, mirrored) {
	let lo = -Math.PI, hi = Math.PI;
	const narrow = (b) => {
		const s = span(b);
		if (!s) return true;
		lo = Math.max(lo, s[0] - 0.03); hi = Math.min(hi, s[1] + 0.03);
		return lo <= hi;
	};
	for (const n of names) {
		const p = PORTAL[n];
		if (inside(p, 0.6)) continue;
		if (!boxIn(p, mirrored)) return false;
		if (!narrow(p)) return false;
	}
	return boxIn(target, mirrored) && narrow(target);
}

function whichZone() {
	const x = eye[0], z = eye[2];
	const sb = STUDIO.BOX;
	if (x > sb[0] && x < sb[3] && z > sb[2] && z < sb[5]) return 'studio';
	if (x < 0.0 && z > SH.C.z - SH.R - 1.5 && x > SH.C.x - SH.R - 2.6) return 'stair';
	if (x > 14.1 && z > COURT.z0 - 0.3 && z < COURT.z1 + 0.3 && x < COURT.x1 + 0.3) return 'court';
	if (x > 13.9 && z > WING.z0 - 0.4 && z < WING.z1 + 0.1 && x < WING.x1 + 0.3) return 'wing';
	if (x >= 0.0 && x <= 14.1 && z > 0.3 && z < HALL_END) return 'hall';
	return 'out';
}

const cull = {
	PORTAL,
	ROOM,

	// once a frame, before drawing
	update(view, proj, e) {
		const m = new Array(16);
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				let s = 0;
				for (let k = 0; k < 4; k++) s += proj[k * 4 + j] * view[i * 4 + k];
				m[i * 4 + j] = s;
			}
		}
		setPlanes(m);
		eye[0] = e[0]; eye[1] = e[1]; eye[2] = e[2];
		fwdA = Math.atan2(-view[2], -view[10]);
		zone = whichZone();

		for (const r in ROOM) {
			// the studio and the rest of the gallery cannot see each other
			if (r === 'studio' || zone === 'studio') {
				seen[r] = seenR[r] = (r === 'studio' && zone === 'studio');
				continue;
			}
			if (!enabled || zone === 'out' || zone === r || inside(ROOM[r], 0.3)) {
				seen[r] = boxIn(ROOM[r], false) || zone === r;
				seenR[r] = boxIn(ROOM[r], true) || zone === r;
			} else {
				const way = WAY[zone][r];
				seen[r] = way ? through(way, ROOM[r], false) : boxIn(ROOM[r], false);
				seenR[r] = way ? through(way, ROOM[r], true) : boxIn(ROOM[r], true);
			}
		}

		floorSeen = !enabled || FLOORS.some((f) => boxIn(f, false));
	},

	get zone() { return zone; },

	// is this room in view (or, with mirrored, its reflection in the floor)?
	room(name, mirrored) { return mirrored ? seenR[name] : seen[name]; },

	// is this box in view? room: the room it stands in, if not the hall
	box(b, mirrored, room) {
		if (room && !(mirrored ? seenR[room] : seen[room])) return false;
		return boxIn(b, mirrored);
	},

	// can any polished floor be seen (is the reflection worth drawing)?
	get floor() { return floorSeen; }
};

module.exports = cull;

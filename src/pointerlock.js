'use strict';

/*
 * POINTER LOCK
 * ------------
 * A small stand-in for the old "pointer-lock" package (which needed Node's
 * events and stream modules in the browser). Same behaviour: pressing the
 * mouse on the element locks the pointer, and while it is locked every
 * mouse movement is passed on as { dx, dy }.
 *
 *   const pointer = lock(document.body);
 *   pointer.on('attain', (movements) => movements.on('data', (m) => ...));
 */

function emitter() {
	const handlers = {};
	return {
		on(name, fn) { (handlers[name] = handlers[name] || []).push(fn); return this; },
		emit(name, value) { (handlers[name] || []).slice().forEach((fn) => fn(value)); }
	};
}

module.exports = function lock(el) {
	const doc = el.ownerDocument || document;
	const ee = emitter();
	let stream = null;
	const out = { dx: 0, dy: 0, dt: 0 };
	let since = 0;

	const locked = () => doc.pointerLockElement || doc.webkitPointerLockElement || null;
	const request = () => {
		if (locked()) return;
		const fn = el.requestPointerLock || el.webkitRequestPointerLock;
		if (!fn) return;
		try {
			const r = fn.call(el);
			// (newer browsers return a promise that rejects if refused)
			if (r && r.catch) r.catch(() => {});
		} catch (e) { /* not allowed right now */ }
	};

	el.addEventListener('mousedown', request, false);

	const onchange = () => {
		if (!locked()) {
			if (stream) {
				ee.emit('release');
				stream.emit('end');
				stream = null;
			}
			return;
		}
		stream = emitter();
		since = Date.now();
		ee.emit('attain', stream);
	};
	doc.addEventListener('pointerlockchange', onchange);
	doc.addEventListener('webkitpointerlockchange', onchange);
	doc.addEventListener('pointerlockerror', () => ee.emit('error'));

	(doc.body || el).addEventListener('mousemove', (ev) => {
		if (!stream) return;
		out.dx = ev.movementX || ev.webkitMovementX || 0;
		out.dy = ev.movementY || ev.webkitMovementY || 0;
		out.dt = Date.now() - since;
		ee.emit('data', out);
		stream.emit('data', out);
	}, false);

	ee.request = request;
	ee.target = locked;
	ee.release = () => {
		if (locked()) (doc.exitPointerLock || doc.webkitExitPointerLock).call(doc);
	};
	return ee;
};

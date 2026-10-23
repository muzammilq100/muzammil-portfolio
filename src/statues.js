'use strict';

/*
 * SCANNED STATUES
 * ---------------
 * Loads the two real statue scans (Venus de Milo and Michelangelo's
 * David, from Scan the World) and stands them on their pedestals.
 *
 * The scans were slimmed down for phones and packed into small
 * binary files in res/:
 *
 *   header   'STAT', vertex count, index count,
 *            bounding box min (3 floats), bounding box size (3 floats)
 *   then     positions  (uint16 x 3, scaled into the bounding box)
 *            triangles  (uint16 x 3)
 *            normals    (int8 x 3)
 *
 * Each model is 1 unit tall, standing on y = 0, facing +z. Here it
 * is scaled, turned and placed using the STATUES list in map.js,
 * then drawn with the same shader as the rest of the gallery, in the
 * wall-coloured statue material (material id 1).
 */

const mesh = require('./mesh');

function decode(buf) {

	const dv = new DataView(buf);

	const magic = String.fromCharCode(
		dv.getUint8(0), dv.getUint8(1), dv.getUint8(2), dv.getUint8(3)
	);

	if (magic !== 'STAT') {
		throw new Error('Not a statue file');
	}

	const nV = dv.getUint32(4, true);
	const nI = dv.getUint32(8, true);

	const mn = [];
	const sz = [];

	for (let k = 0; k < 3; k++) {
		mn.push(dv.getFloat32(12 + k * 4, true));
		sz.push(dv.getFloat32(24 + k * 4, true));
	}

	let off = 36;

	const pos = new Uint16Array(buf, off, nV * 3);
	off += nV * 6;

	const idx = new Uint16Array(buf, off, nI);
	off += nI * 2;

	const nrm = new Int8Array(buf, off, nV * 3);

	return { nV, nI, mn, sz, pos, idx, nrm };
}


module.exports = (regl, map) => {

	const position = [];
	const normal = [];
	const mat = [];
	const elements = [];

	let draw = null;
	let pending = map.statues.length;

	const addModel = (m, st) => {

		const base = position.length / 3;
		const s = st.height;
		const c = Math.cos(st.yaw);
		const sn = Math.sin(st.yaw);
		const y0 = map.pedestalTop;

		for (let i = 0; i < m.nV; i++) {

			const x = (m.mn[0] + m.pos[i * 3] / 65535 * m.sz[0]) * s;
			const y = (m.mn[1] + m.pos[i * 3 + 1] / 65535 * m.sz[1]) * s;
			const z = (m.mn[2] + m.pos[i * 3 + 2] / 65535 * m.sz[2]) * s;

			// same turn as the pedestal (rotation about the vertical axis)
			position.push(
				st.x + c * x + sn * z,
				y0 + y,
				st.z - sn * x + c * z
			);

			const nx = m.nrm[i * 3] / 127;
			const ny = m.nrm[i * 3 + 1] / 127;
			const nz = m.nrm[i * 3 + 2] / 127;

			normal.push(
				c * nx + sn * nz,
				ny,
				-sn * nx + c * nz
			);

			mat.push(1, 0, 0);
		}

		for (let i = 0; i < m.nI; i++) {
			elements.push(base + m.idx[i]);
		}
	};

	const finish = () => {

		if (elements.length === 0) {
			return;
		}

		draw = mesh(
			regl,
			{
				position,
				normal,
				mat,
				elements,
				lights: map.lights
			},
			false
		);
	};

	map.statues.forEach((st) => {

		fetch('res/' + st.file)
			.then((r) => {
				if (!r.ok) {
					throw new Error('Could not load ' + st.file);
				}
				return r.arrayBuffer();
			})
			.then((buf) => addModel(decode(buf), st))
			.catch((e) => console.error(e))
			.then(() => {
				if (--pending === 0) {
					finish();
				}
			});
	});

	return function () {
		if (draw) {
			draw();
		}
	};
};

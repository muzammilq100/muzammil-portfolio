'use strict';

const texture = require('./image');
const mat4 = require('gl-mat4');

const dynamicResPeriod = 3000;

let dynamicRes = 'high';
let dynamicResTimer;

// ------------------------------------------------------------
// ROOM FACTS (from map.js)
// ------------------------------------------------------------
// Room is 14 wide (x: 0 -> 14) and 48 long (z: 0 -> 48).
// Walls are 0.35 thick, so the VISIBLE wall faces sit at:
//   left wall   x = 0.35
//   right wall  x = 13.65
//   end wall    z = 47.65
// Columns stand at z = 18, 29 and 40, so the slots below stay
// clear of them.
// ------------------------------------------------------------
const LEFT_X = 0.36;    // just in front of the left wall face
const RIGHT_X = 13.64;  // just in front of the right wall face
const END_Z = 47.64;    // just in front of the end wall face
const LABEL_X_LEFT = 0.356;
const LABEL_X_RIGHT = 13.644;
const LABEL_Z_END = 47.644;

const PAINTING_DEPTH = 0.12;

// Every painting is centred at the same height as the masterpiece,
// so the whole gallery shares one eye line.
const CENTRE_Y = 4.0;

// Every painting uses the SAME size rule as the masterpiece:
// as tall as 5.6 m, or as wide as 7 m, whichever limit it hits first.
const MAX_HEIGHT = 5.6;
const MAX_WIDTH = 7.0;

// ------------------------------------------------------------
// WHERE EACH ARTWORK GOES
// ------------------------------------------------------------
// z is the CENTRE of the painting along the wall.
// The order matches api/local.js: index 0 = Artwork I, etc.
//
// Columns stand at z = 18, 29 and 40.
//   Artwork I   landscape, right wall, centred between the
//               columns at z 29 and 40 (z = 34.5)
//   Artwork II  portrait, right wall, z = 44.2
//   Artwork III portrait, left wall,  z = 44.2
// II and III share the same z, so they face each other across
// the gallery. The masterpiece closes the end wall.
// ------------------------------------------------------------
const layouts = [
    { side: 'right', z: 34.5 },  // Artwork I (landscape)
    { side: 'right', z: 44.2 },  // Artwork II (yellow dress)
    { side: 'left',  z: 44.2 },  // Artwork III (red chair)
    { side: 'end',   z: END_Z }  // Masterpiece (centred at x = 7)
];

function getDimensions(aspect) {
    const height = Math.min(MAX_HEIGHT, MAX_WIDTH / aspect);
    return { width: height * aspect, height };
}

// ------------------------------------------------------------
// THE FIX
// ------------------------------------------------------------
// The painting mesh is a unit box: x = width, y = height,
// z = depth (z = 1 is the visible front face).
//
// The matrix MUST be built as  translate -> rotate -> scale.
// That way the box is stretched in its OWN axes first, and only
// then turned to face the room. The old code scaled before
// rotating, which stretched the side-wall paintings along the
// wrong world axes and buried them inside the wall. The end wall
// only worked because a 180 degree turn is symmetrical.
//
// Rotation guide (viewer standing in the room):
//   left wall  : rotateY(+PI/2)  front faces +X, width runs toward -Z
//   right wall : rotateY(-PI/2)  front faces -X, width runs toward +Z
//   end wall   : rotateY(PI)     front faces -Z, width runs toward -X
// In every case local x = 0 is the viewer's LEFT edge of the
// painting, so the first translation is that left edge.
// ------------------------------------------------------------
function makeModel(width, height, index) {
    const layout = layouts[index];
    const model = [];
    const y = CENTRE_Y - height / 2;

    if (layout.side === 'left') {
        mat4.fromTranslation(model, [LEFT_X, y, layout.z + width / 2]);
        mat4.rotateY(model, model, Math.PI / 2);
    } else if (layout.side === 'right') {
        mat4.fromTranslation(model, [RIGHT_X, y, layout.z - width / 2]);
        mat4.rotateY(model, model, -Math.PI / 2);
    } else {
        mat4.fromTranslation(model, [7.0 + width / 2, y, END_Z]);
        mat4.rotateY(model, model, Math.PI);
    }

    mat4.scale(model, model, [width, height, PAINTING_DEPTH]);
    return model;
}

// Small caption sitting just under each painting, starting at the
// painting's left edge.
function makeTextModel(width, height, index) {
    const layout = layouts[index];
    const model = [];
    const y = CENTRE_Y - height / 2 - 0.45;

    if (layout.side === 'left') {
        mat4.fromTranslation(model, [LABEL_X_LEFT, y, layout.z + width / 2]);
        mat4.rotateY(model, model, Math.PI / 2);
    } else if (layout.side === 'right') {
        mat4.fromTranslation(model, [LABEL_X_RIGHT, y, layout.z - width / 2]);
        mat4.rotateY(model, model, -Math.PI / 2);
    } else {
        mat4.fromTranslation(model, [7.0 + width / 2, y, LABEL_Z_END]);
        mat4.rotateY(model, model, Math.PI);
    }

    mat4.scale(model, model, [2, 2, 2]);
    return model;
}

module.exports = (regl) => {
    let batch = [];
    let shownBatch = [];

    const loadPainting = (p) => {
        const index = p.image_id;
        if (!layouts[index]) return;

        const { width, height } = getDimensions(p.aspect);

        batch.push({
            ...p,
            model: makeModel(width, height, index),
            textmodel: makeTextModel(width, height, index),
            text: p.textGen(width),
            width,
            height,
            textGen: null
        });
    };

    texture.fetch(regl, layouts.length, dynamicRes, loadPainting, () => {});

    return {
        update: () => {
            shownBatch = batch;

            shownBatch.forEach((painting) => {
                texture.load(regl, painting, dynamicRes);
            });

            dynamicRes = 'low';

            if (dynamicResTimer) clearTimeout(dynamicResTimer);
            dynamicResTimer = setTimeout(() => {
                dynamicRes = 'high';
            }, dynamicResPeriod);
        },

        batch: () => shownBatch
    };
};

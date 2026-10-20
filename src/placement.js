'use strict';

const texture = require('./image');
const mat4 = require('gl-mat4');

const dynamicResPeriod = 3000;

let dynamicRes = 'high';
let dynamicResTimer;

// Exact wall-panel centres from map.js.
// The fourth artwork is the central masterpiece on the end wall.
const layouts = [
    { side: 'left', z: 5 },
    { side: 'right', z: 9 },
    { side: 'left', z: 22 },
    { side: 'end', z: 47.65 }
];

function getDimensions(aspect, index) {
    if (index === 3) {
        const maxHeight = 5.6;
        const maxWidth = 7.0;
        const height = Math.min(maxHeight, maxWidth / aspect);
        return { width: height * aspect, height };
    }

    const maxWidth = 3.05;
    const maxHeight = 3.75;
    const height = Math.min(maxHeight, maxWidth / aspect);
    return { width: height * aspect, height };
}

function makeModel(width, height, index) {
    const layout = layouts[index];
    const model = [];
    const y = (index === 3 ? 4.0 : 3.35) - height / 2;
    const depth = 0.12;

    if (layout.side === 'left') {
        mat4.fromTranslation(model, [
            0.27,
            y,
            layout.z - width / 2
        ]);
        mat4.scale(model, model, [width, height, depth]);
        mat4.rotateY(model, model, Math.PI / 2);
    } else if (layout.side === 'right') {
        mat4.fromTranslation(model, [
            13.73,
            y,
            layout.z + width / 2
        ]);
        mat4.scale(model, model, [width, height, depth]);
        mat4.rotateY(model, model, -Math.PI / 2);
    } else {
        mat4.fromTranslation(model, [
            7.0 + width / 2,
            y,
            47.65
        ]);
        mat4.scale(model, model, [width, height, depth]);
        mat4.rotateY(model, model, Math.PI);
    }

    return model;
}

function makeTextModel(index) {
    const layout = layouts[index];
    const textmodel = [];
    const labelWidth = 2.0;
    const y = 0.35;

    if (layout.side === 'left') {
        mat4.fromTranslation(textmodel, [
            0.145,
            y,
            layout.z - labelWidth / 2
        ]);
        mat4.scale(textmodel, textmodel, [2, 2, 2]);
        mat4.rotateY(textmodel, textmodel, Math.PI / 2);
    } else if (layout.side === 'right') {
        mat4.fromTranslation(textmodel, [
            13.855,
            y,
            layout.z + labelWidth / 2
        ]);
        mat4.scale(textmodel, textmodel, [2, 2, 2]);
        mat4.rotateY(textmodel, textmodel, -Math.PI / 2);
    } else {
        mat4.fromTranslation(textmodel, [
            8.0,
            y,
            47.65
        ]);
        mat4.scale(textmodel, textmodel, [2, 2, 2]);
        mat4.rotateY(textmodel, textmodel, Math.PI);
    }

    return textmodel;
}

module.exports = (regl) => {
    let batch = [];
    let shownBatch = [];

    const loadPainting = (p) => {
        const index = p.image_id;
        if (!layouts[index]) return;

        const { width, height } = getDimensions(p.aspect, index);

        batch.push({
            ...p,
            model: makeModel(width, height, index),
            textmodel: makeTextModel(index),
            text: p.textGen(width),
            width,
            height,
            angle: layouts[index].side === 'left'
                ? Math.PI / 2
                : layouts[index].side === 'right'
                    ? -Math.PI / 2
                    : Math.PI,
            textGen: null
        });
    };

    texture.fetch(regl, 4, dynamicRes, loadPainting, () => {});

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

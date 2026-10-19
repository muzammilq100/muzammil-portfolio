'use strict';

const texture = require('./image');
const mat4 = require('gl-mat4');

const renderDist = 50;
const loadDist = 40;
const unloadDist = 60;

const fovxMargin = Math.PI / 20;

const dynamicResPeriod = 3000;

let dynamicRes = 'high';
let dynamicResTimer;


module.exports = (
    regl,
    {
        placements,
        getAreaIndex
    }
) => {

    let batch = [];
    let shownBatch = [];
    let fetching = true;


    // ========================================================
    // LOAD ONE PAINTING
    // ========================================================

    const loadPainting = (p) => {

        /*
         * IMPORTANT:
         * Use the image_id to decide where the painting goes.
         * This prevents asynchronous image loading from
         * putting paintings on the wrong walls.
         */

        const seg = placements[p.image_id];

        if (!seg) {
            return;
        }


        const x1 = seg[0][0];
        const z1 = seg[0][1];

        const x2 = seg[1][0];
        const z2 = seg[1][1];


        const dx = x2 - x1;
        const dz = z2 - z1;

        const segLen = Math.hypot(dx, dz);


        // ====================================================
        // DETERMINE WALL TYPE
        // ====================================================

        const isEndWall =
            Math.abs(z1 - z2) < 0.01;

        const isLeftWall =
            !isEndWall &&
            Math.abs(x1) < 0.01;

        const isRightWall =
            !isEndWall &&
            Math.abs(x1 - 14) < 0.01;


        // ====================================================
        // MASTERPIECE
        // ====================================================

        const isMasterpiece =
            p.image_id === 0;


        // ====================================================
        // PAINTING SIZE
        // ====================================================

        let globalScale =
            isMasterpiece
                ? 3.0
                : 2.25;


        globalScale =
            Math.min(
                globalScale,
                segLen /
                p.aspect /
                1.25
            );


        globalScale =
            Math.min(
                globalScale,
                isMasterpiece
                    ? 3.0
                    : 2.4
            );


        const width =
            globalScale *
            p.aspect;


        // ====================================================
        // POSITION
        // ====================================================

        let pos;


        if (isEndWall) {

            // CENTRAL MASTERPIECE

            pos = [
                7,
                3.6 - globalScale,
                47.65
            ];

        } else if (isLeftWall) {

            // LEFT WALL
            // Keep painting INSIDE the gallery.

            pos = [
                0.22,
                3.35 - globalScale,
                (z1 + z2) / 2
            ];

        } else if (isRightWall) {

            // RIGHT WALL
            // Keep painting INSIDE the gallery.

            pos = [
                13.78,
                3.35 - globalScale,
                (z1 + z2) / 2
            ];

        } else {

            return;
        }


        // ====================================================
        // ROTATION
        // ====================================================

        let angle;

        if (isEndWall) {

            // Face toward the viewer coming down the corridor.

            angle = Math.PI;

        } else if (isLeftWall) {

            // Face toward the centre of the gallery.

            angle = Math.PI / 2;

        } else {

            // Right wall.

            angle = -Math.PI / 2;
        }


        // ====================================================
        // MODEL SCALE
        // ====================================================

        let scale = [
            0.1,
            2 * globalScale,
            2 * width
        ];


        if (isLeftWall || isRightWall) {

            scale = [
                2 * width,
                2 * globalScale,
                0.1
            ];
        }


        // ====================================================
        // PAINTING MODEL
        // ====================================================

        const model = [];

        mat4.fromTranslation(
            model,
            pos
        );

        mat4.scale(
            model,
            model,
            scale
        );

        mat4.rotateY(
            model,
            model,
            angle
        );


        // ====================================================
        // TITLE
        // ====================================================

        const text =
            p.textGen(width);


        const textmodel = [];

        mat4.fromTranslation(
            textmodel,
            [
                pos[0],
                pos[1] - 0.35,
                pos[2]
            ]
        );

        mat4.scale(
            textmodel,
            textmodel,
            [2, 2, 2]
        );

        mat4.rotateY(
            textmodel,
            textmodel,
            angle
        );


        // ====================================================
        // CULLING SEGMENT
        // ====================================================

        const vseg = [
            [
                pos[0] - dx * 0.15,
                pos[2] - dz * 0.15
            ],
            [
                pos[0] + dx * 0.15,
                pos[2] + dz * 0.15
            ]
        ];


        // ====================================================
        // STORE
        // ====================================================

        batch.push({

            ...p,

            vseg,
            angle,

            model,
            textmodel,

            text,

            width,

            textGen: null
        });
    };


    // ========================================================
    // LOAD ALL PAINTINGS
    // ========================================================

    texture.fetch(
        regl,
        20,
        dynamicRes,

        loadPainting,

        () => {
            fetching = false;
        }
    );


    // ========================================================
    // RETURN API
    // ========================================================

    return {

        update: (
            pos,
            angle,
            fovX
        ) => {

            const index =
                getAreaIndex(
                    pos[0],
                    pos[2],
                    4
                );


            if (index === -1) {
                return;
            }


            // ------------------------------------------------
            // SHOW ALL NEARBY PAINTINGS
            // ------------------------------------------------

            shownBatch =
                batch.slice(
                    Math.max(
                        0,
                        index - renderDist
                    ),
                    index + renderDist
                );


            // ------------------------------------------------
            // LOAD TEXTURES
            // ------------------------------------------------

            shownBatch.forEach(
                t => {

                    texture.load(
                        regl,
                        t,
                        dynamicRes
                    );

                }
            );


            // ------------------------------------------------
            // DO NOT HIDE PAINTINGS YET
            // ------------------------------------------------
            //
            // We deliberately keep all nearby paintings
            // visible while we establish the gallery.
            //
            // Once everything is positioned correctly,
            // we'll add intelligent mobile culling back.
            // ------------------------------------------------


            // ------------------------------------------------
            // FETCH MORE IF REQUIRED
            // ------------------------------------------------

            if (
                index >
                batch.length - loadDist
            ) {

                if (!fetching) {

                    texture.fetch(
                        regl,
                        10,
                        dynamicRes,

                        loadPainting,

                        () => {
                            fetching = false;
                        }
                    );

                    fetching = true;
                }
            }


            // ------------------------------------------------
            // TEMPORARY LOWER RESOLUTION WHILE MOVING
            // ------------------------------------------------

            dynamicRes = 'low';

            if (dynamicResTimer) {

                clearTimeout(
                    dynamicResTimer
                );
            }

            dynamicResTimer =
                setTimeout(
                    () => {
                        dynamicRes = 'high';
                    },
                    dynamicResPeriod
                );
        },


        batch: () =>
            shownBatch
    };
};
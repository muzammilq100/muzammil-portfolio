'use strict';

const texture = require('./image');
const mat4 = require('gl-mat4');

const dynamicResPeriod = 3000;

let dynamicRes = 'high';
let dynamicResTimer;


// ============================================================
// SINGLE MASTERPIECE
// ============================================================

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
    // LOAD MASTERPIECE
    // ========================================================

    const loadPainting = (p) => {

        const seg = placements[0];

        if (!seg) {
            return;
        }


        // ====================================================
        // END WALL
        // ====================================================

        const x1 = seg[0][0];
        const z1 = seg[0][1];

        const x2 = seg[1][0];
        const z2 = seg[1][1];


        const centerX =
            (x1 + x2) / 2;

        const centerZ =
            (z1 + z2) / 2;


        // ====================================================
        // MASTERPIECE SIZE
        // ====================================================

        const globalScale = 3.0;

        const width =
            globalScale *
            p.aspect;


        // ====================================================
        // POSITION
        // ====================================================

        /*
         * The end wall is at Z = 47.65.
         *
         * The painting geometry faces +Z by default.
         *
         * We rotate it 180 degrees around Y so that the
         * painting faces the viewer approaching from the
         * gallery corridor.
         *
         * We also move it slightly toward the corridor so
         * that it sits just in front of the wall instead
         * of being buried inside it.
         */

        const pos = [

            centerX - width,

            3.0 - globalScale,

            centerZ + 0.08

        ];


        // ====================================================
        // SCALE
        // ====================================================

        const scale = [

            2 * width,

            2 * globalScale,

            0.12

        ];


        // ====================================================
        // MODEL
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


        // ====================================================
        // IMPORTANT:
        // FACE THE VIEWER
        // ====================================================

        mat4.rotateY(
            model,
            model,
            Math.PI
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

                centerX - width,

                0.25,

                centerZ + 0.06

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
            Math.PI
        );


        // ====================================================
        // STORE
        // ====================================================

        batch.push({

            ...p,

            image_id: 0,

            model,

            textmodel,

            text,

            width,

            angle: Math.PI,

            textGen: null

        });

    };


    // ========================================================
    // LOAD
    // ========================================================

    texture.fetch(

        regl,

        1,

        dynamicRes,

        loadPainting,

        () => {

            fetching = false;

        }

    );


    // ========================================================
    // UPDATE
    // ========================================================

    return {

        update: (
            pos,
            angle,
            fovX
        ) => {

            /*
             * No artwork culling.
             *
             * The masterpiece stays available while the
             * viewer approaches it.
             */

            shownBatch =
                batch;


            // =================================================
            // LOAD TEXTURE
            // =================================================

            shownBatch.forEach(

                painting => {

                    texture.load(
                        regl,
                        painting,
                        dynamicRes
                    );

                }

            );


            // =================================================
            // DYNAMIC RESOLUTION
            // =================================================

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


        // ====================================================
        // DRAW
        // ====================================================

        batch: () =>
            shownBatch

    };

};
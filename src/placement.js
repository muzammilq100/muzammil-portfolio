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
    // LOAD THE MASTERPIECE
    // ========================================================

    const loadPainting = (p) => {

        // We currently have ONLY ONE image.
        // local.js returns the 2544 painting as image 0.

        const seg = placements[0];

        if (!seg) {
            return;
        }


        // ----------------------------------------------------
        // END WALL
        // ----------------------------------------------------

        /*
         * map.js already defines the end-wall placement.
         *
         * We use that existing position instead of changing
         * the architecture.
         */

        const x1 = seg[0][0];
        const z1 = seg[0][1];

        const x2 = seg[1][0];
        const z2 = seg[1][1];


        const centerX =
            (x1 + x2) / 2;

        const centerZ =
            (z1 + z2) / 2;


        // ----------------------------------------------------
        // MASTERPIECE SIZE
        // ----------------------------------------------------

        /*
         * Larger than the original gallery paintings.
         *
         * We will fine-tune this after seeing it on the phone.
         */

        const globalScale = 3.0;

        const width =
            globalScale *
            p.aspect;


        // ----------------------------------------------------
        // POSITION
        // ----------------------------------------------------

        /*
         * Painting geometry uses its lower-left corner as
         * the model origin.
         *
         * This centres the complete painting on the end wall.
         */

        const pos = [

            centerX - width,

            3.0 - globalScale,

            centerZ - 0.015

        ];


        // ----------------------------------------------------
        // SCALE
        // ----------------------------------------------------

        const scale = [

            2 * width,

            2 * globalScale,

            0.12

        ];


        // ----------------------------------------------------
        // MODEL
        // ----------------------------------------------------

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


        /*
         * The existing end wall runs across the gallery.
         *
         * Rotation 0 keeps the painting parallel to that wall.
         */

        mat4.rotateY(
            model,
            model,
            0
        );


        // ----------------------------------------------------
        // TITLE
        // ----------------------------------------------------

        const text =
            p.textGen(width);


        const textmodel = [];


        mat4.fromTranslation(
            textmodel,

            [

                centerX - width,

                0.25,

                centerZ - 0.02

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
            0
        );


        // ----------------------------------------------------
        // STORE
        // ----------------------------------------------------

        batch.push({

            ...p,

            image_id: 0,

            model,

            textmodel,

            text,

            width,

            angle: 0,

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
             * IMPORTANT:
             *
             * There is deliberately NO artwork culling.
             *
             * The masterpiece remains available while we
             * approach it.
             */

            shownBatch =
                batch;


            // ------------------------------------------------
            // LOAD TEXTURE
            // ------------------------------------------------

            shownBatch.forEach(

                painting => {

                    texture.load(
                        regl,
                        painting,
                        dynamicRes
                    );

                }

            );


            // ------------------------------------------------
            // DYNAMIC RESOLUTION
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


        // ----------------------------------------------------
        // DRAW
        // ----------------------------------------------------

        batch: () =>
            shownBatch

    };

};
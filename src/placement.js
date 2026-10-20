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


    // ========================================================
    // LOAD MASTERPIECE
    // ========================================================

    const loadPainting = (p) => {

        const seg =
            placements[0];


        if (!seg) {
            return;
        }


        // ====================================================
        // END WALL CENTRE
        // ====================================================

        const x1 =
            seg[0][0];

        const z1 =
            seg[0][1];


        const x2 =
            seg[1][0];

        const z2 =
            seg[1][1];


        const centerX =
            (x1 + x2) / 2;


        const centerZ =
            (z1 + z2) / 2;


        // ====================================================
        // MASTERPIECE SIZE
        // ====================================================

        const globalScale =
            3.0;


        const width =
            globalScale *
            p.aspect;


        // ====================================================
        // MODEL
        // ====================================================

        const model = [];


        /*
         * The painting's local origin is its LOWER-LEFT
         * corner.
         *
         * After a 180 degree rotation, the artwork extends
         * toward negative X.
         *
         * Therefore the translation must compensate for that
         * rotation so the finished artwork is centred on the
         * gallery wall.
         */


        const pos = [

            centerX + width,

            3.0 - globalScale,

            centerZ + 0.10

        ];


        const scale = [

            2 * width,

            2 * globalScale,

            0.12

        ];


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

                centerX + width,

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

            angle:
                Math.PI,

            textGen: null

        });

    };


    // ========================================================
    // FETCH MASTERPIECE
    // ========================================================

    texture.fetch(

        regl,

        1,

        dynamicRes,

        loadPainting,

        () => {}

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

            shownBatch =
                batch;


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

            dynamicRes =
                'low';


            if (
                dynamicResTimer
            ) {

                clearTimeout(
                    dynamicResTimer
                );

            }


            dynamicResTimer =
                setTimeout(

                    () => {

                        dynamicRes =
                            'high';

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
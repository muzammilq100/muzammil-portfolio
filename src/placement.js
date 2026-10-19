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


// ============================================================
// PAINTING CULLING
// ============================================================

const culling = (
    ppos,
    pangle,
    fovx,
    { vseg, angle }
) => {

    const sx1 =
        vseg[0][0] - ppos[0];

    const sy1 =
        vseg[0][1] - ppos[2];

    const sx2 =
        vseg[1][0] - ppos[0];

    const sy2 =
        vseg[1][1] - ppos[2];


    const angles = [
        angle,
        pangle - fovx / 2 - fovxMargin + Math.PI / 2,
        pangle + fovx / 2 + fovxMargin - Math.PI / 2
    ];


    for (const a of angles) {

        const nx = Math.sin(a);
        const ny = -Math.cos(a);


        if (
            nx * sx1 + ny * sy1 < 0 &&
            nx * sx2 + ny * sy2 < 0
        ) {
            return false;
        }
    }


    return true;
};


// ============================================================
// MAIN
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
    // LOAD PAINTING
    // ========================================================

    const loadPainting = (p) => {

        /*
         * Each image gets a fixed position from map.js.
         */

        const seg =
            placements[p.image_id];


        if (!seg) {
            return;
        }


        // ----------------------------------------------------
        // WALL DIRECTION
        // ----------------------------------------------------

        const dir = [
            seg[1][0] - seg[0][0],
            seg[1][1] - seg[0][1]
        ];


        // Wall normal

        const norm = [
            seg[1][1] - seg[0][1],
            seg[0][0] - seg[1][0]
        ];


        const segLen =
            Math.hypot(
                dir[0],
                dir[1]
            );


        // ----------------------------------------------------
        // PAINTING SIZE
        // ----------------------------------------------------

        let globalScale =
            4.0 / (3 + p.aspect);


        globalScale =
            Math.min(
                globalScale,
                segLen /
                p.aspect /
                2.2
            );


        globalScale =
            Math.min(
                globalScale,
                2.5
            );


        const width =
            globalScale *
            p.aspect;


        // ----------------------------------------------------
        // POSITION
        // ----------------------------------------------------

        const pos = [

            (seg[0][0] + seg[1][0]) / 2,

            3.0 - globalScale,

            (seg[0][1] + seg[1][1]) / 2

        ];


        // ----------------------------------------------------
        // WALL ANGLE
        // ----------------------------------------------------

        const angle =
            Math.atan2(
                dir[1],
                dir[0]
            );


        // ----------------------------------------------------
        // DETERMINE WALL ORIENTATION
        // ----------------------------------------------------

        const horiz =
            Math.abs(angle % 3) < 1
                ? 1
                : 0;


        const vert =
            1 - horiz;


        // ----------------------------------------------------
        // MODEL SCALE
        // ----------------------------------------------------

        const scale = [

            2 * width * horiz +
            0.1 * vert,

            2 * globalScale,

            2 * width * vert +
            0.1 * horiz

        ];


        // ----------------------------------------------------
        // TEXT
        // ----------------------------------------------------

        const text =
            p.textGen(width);


        // ----------------------------------------------------
        // VISIBLE SEGMENT
        // ----------------------------------------------------

        const d1 =
            width / segLen;


        const d2 =
            0.005 /
            Math.hypot(
                norm[0],
                norm[1]
            );


        const vseg = [

            [
                pos[0] -
                dir[0] * d1 * 2,

                pos[2] -
                dir[1] * d1
            ],

            [
                pos[0] +
                dir[0] * d1 * 2,

                pos[2] +
                dir[1] * d1
            ]

        ];


        // ----------------------------------------------------
        // MOVE PAINTING SLIGHTLY OFF WALL
        // ----------------------------------------------------

        pos[0] -=
            dir[0] * d1 +
            norm[0] * d2;


        pos[2] -=
            dir[1] * d1 +
            norm[1] * d2;


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
         * IMPORTANT:
         * Use POSITIVE angle.
         *
         * This makes:
         * - left-wall paintings face the gallery
         * - right-wall paintings face the gallery
         * - end-wall masterpiece face back toward the viewer
         */

        mat4.rotateY(
            model,
            model,
            angle
        );


        // ----------------------------------------------------
        // TITLE MODEL
        // ----------------------------------------------------

        const textmodel = [];


        mat4.fromTranslation(
            textmodel,

            [
                pos[0],

                2.25 -
                globalScale,

                pos[2]
            ]
        );


        mat4.scale(
            textmodel,
            textmodel,
            [2, 2, 2]
        );


        /*
         * Title uses the same corrected orientation.
         */

        mat4.rotateY(
            textmodel,
            textmodel,
            angle
        );


        // ----------------------------------------------------
        // STORE
        // ----------------------------------------------------

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
    // FETCH FIRST PAINTINGS
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
    // UPDATE
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
            // SHOW NEARBY PAINTINGS
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
            // ORIENTATION CULLING
            // ------------------------------------------------

            shownBatch =
                shownBatch.filter(
                    t =>
                        t.tex &&
                        culling(
                            pos,
                            angle,
                            fovX,
                            t
                        )
                );


            // ------------------------------------------------
            // FETCH MORE
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
        // PAINTINGS TO RENDER
        // ----------------------------------------------------

        batch: () =>
            shownBatch

    };
};
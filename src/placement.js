'use strict';

const texture = require('./image');
const mat4 = require('gl-mat4');


// ============================================================
// PAINTING VISIBILITY
// ============================================================

const renderDist = 30;

const loadDist = 24;

const unloadDist = 45;

const fovxMargin =
    Math.PI / 28;


// ============================================================
// DYNAMIC RESOLUTION
// ============================================================

const dynamicResPeriod = 3000;

let dynamicRes = "high";

let dynamicResTimer;


// ============================================================
// VIEW CULLING
// ============================================================

const culling = (
    ppos,
    pangle,
    fovx,
    {vseg, angle}
) => {

    const sx1 =
        vseg[0][0] -
        ppos[0];

    const sy1 =
        vseg[0][1] -
        ppos[2];


    const sx2 =
        vseg[1][0] -
        ppos[0];

    const sy2 =
        vseg[1][1] -
        ppos[2];


    const angles = [

        angle,

        pangle -
        fovx / 2 -
        fovxMargin +
        Math.PI / 2,

        pangle +
        fovx / 2 +
        fovxMargin -
        Math.PI / 2

    ];


    for (
        let a of angles
    ) {

        const nx =
            Math.sin(a);

        const ny =
            -Math.cos(a);


        if (
            nx * sx1 +
            ny * sy1 < 0 &&

            nx * sx2 +
            ny * sy2 < 0
        ) {

            return false;
        }
    }


    return true;
};


// ============================================================
// MAIN PLACEMENT SYSTEM
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

        const seg =
            placements[
                batch.length
            ];


        if (!seg) {

            return;
        }


        // ----------------------------------------------------
        // SEGMENT DIRECTION
        // ----------------------------------------------------

        const dir = [

            seg[1][0] -
            seg[0][0],

            seg[1][1] -
            seg[0][1]

        ];


        // ----------------------------------------------------
        // WALL NORMAL
        // ----------------------------------------------------

        const norm = [

            seg[1][1] -
            seg[0][1],

            seg[0][0] -
            seg[1][0]

        ];


        const segLen =
            Math.hypot(
                dir[0],
                dir[1]
            );


        // ====================================================
        // PAINTING SIZE
        // ====================================================
        //
        // Larger than the original.
        //
        // This is especially important on mobile.
        // ====================================================

        let globalScale =
            6.2 /
            (2.8 + p.aspect);


        // Horizontal clamp

        globalScale =
            Math.min(
                globalScale,
                segLen /
                p.aspect /
                1.7
            );


        // Vertical clamp

        globalScale =
            Math.min(
                globalScale,
                2.35
            );


        // ====================================================
        // PAINTING POSITION
        // ====================================================

        const pos = [

            (
                seg[0][0] +
                seg[1][0]
            ) / 2,

            2.65 -
            globalScale,

            (
                seg[0][1] +
                seg[1][1]
            ) / 2

        ];


        // ====================================================
        // ROTATION
        // ====================================================

        const angle =
            Math.atan2(
                dir[1],
                dir[0]
            );


        const horiz =
            Math.abs(
                angle % 3
            ) < 1
                ? 1
                : 0;


        const vert =
            1 -
            horiz;


        // ====================================================
        // WIDTH
        // ====================================================

        const width =
            globalScale *
            p.aspect;


        // ====================================================
        // MODEL SCALE
        // ====================================================

        const scale = [

            2 *
            width *
            horiz +

            0.1 *
            vert,


            2 *
            globalScale,


            2 *
            width *
            vert +

            0.1 *
            horiz

        ];


        // ====================================================
        // TITLE TEXT
        // ====================================================

        const text =
            p.textGen(
                width
            );


        // ====================================================
        // CULLING SEGMENT
        // ====================================================

        const d1 =
            width /
            segLen;


        const d2 =
            0.008 /
            Math.hypot(
                norm[0],
                norm[1]
            );


        const vseg = [

            [
                pos[0] -
                dir[0] *
                d1 *
                2,

                pos[2] -
                dir[1] *
                d1
            ],


            [
                pos[0] +
                dir[0] *
                d1 *
                2,

                pos[2] +
                dir[1] *
                d1
            ]

        ];


        // ====================================================
        // MOVE PAINTING SLIGHTLY AWAY FROM WALL
        // ====================================================

        pos[0] -=
            dir[0] *
            d1 +
            norm[0] *
            d2;


        pos[2] -=
            dir[1] *
            d1 +
            norm[1] *
            d2;


        // ====================================================
        // MODEL MATRIX
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
            -angle
        );


        // ====================================================
        // TEXT MODEL
        // ====================================================

        const textmodel = [];


        mat4.fromTranslation(

            textmodel,

            [
                pos[0],
                1.8 -
                globalScale,
                pos[2]
            ]

        );


        mat4.scale(

            textmodel,

            textmodel,

            [
                2,
                2,
                2
            ]

        );


        mat4.rotateY(

            textmodel,

            textmodel,

            -angle

        );


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
    // INITIAL TEXTURE FETCH
    // ========================================================

    texture.fetch(

        regl,

        20,

        dynamicRes,

        loadPainting,

        () =>
            fetching = false

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

            // ------------------------------------------------
            // CURRENT GALLERY AREA
            // ------------------------------------------------

            let index =
                getAreaIndex(
                    pos[0],
                    pos[2],
                    4
                );


            if (
                index === -1
            ) {

                return;
            }


            // ------------------------------------------------
            // UNLOAD FAR PAINTINGS
            // ------------------------------------------------

            batch
                .slice(
                    0,
                    Math.max(
                        0,
                        index -
                        unloadDist
                    )
                )
                .map(
                    t =>
                        texture.unload(t)
                );


            batch
                .slice(
                    index +
                    unloadDist
                )
                .map(
                    t =>
                        texture.unload(t)
                );


            // ------------------------------------------------
            // SHOW NEARBY PAINTINGS
            // ------------------------------------------------

            shownBatch =
                batch.slice(

                    Math.max(
                        0,
                        index -
                        renderDist
                    ),

                    index +
                    renderDist

                );


            // ------------------------------------------------
            // LOAD TEXTURES
            // ------------------------------------------------

            shownBatch.map(

                t =>
                    texture.load(
                        regl,
                        t,
                        dynamicRes
                    )

            );


            // ------------------------------------------------
            // VIEW CULLING
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
                index <=
                batch.length -
                loadDist
            ) {

                return;
            }


            if (
                !fetching
            ) {

                texture.fetch(

                    regl,

                    10,

                    dynamicRes,

                    loadPainting,

                    () =>
                        fetching = false

                );


                fetching = true;
            }


            // ------------------------------------------------
            // TEMPORARY LOWER RESOLUTION DURING MOVEMENT
            // ------------------------------------------------

            dynamicRes =
                "low";


            if (
                dynamicResTimer
            ) {

                clearTimeout(
                    dynamicResTimer
                );
            }


            dynamicResTimer =
                setTimeout(

                    () =>
                        dynamicRes =
                            "high",

                    dynamicResPeriod

                );
        },


        batch: () =>
            shownBatch

    };

};
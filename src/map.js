'use strict';

/*
 * RENAISSANCE GALLERY
 * --------------------
 * Controlled museum corridor replacing the old procedural maze.
 */

const WIDTH = 14;
const LENGTH = 48;
const HEIGHT = 8;

const WALL = 0.35;

const COLUMN_W = 1.15;
const COLUMN_D = 1.15;

const COLUMN_Z = [9, 20, 31, 42];


// ------------------------------------------------------------
// COLLISION WALLS
// ------------------------------------------------------------

const wallSegments = [
    [[0, 0], [0, LENGTH]],
    [[WIDTH, LENGTH], [WIDTH, 0]],
    [[0, 0], [WIDTH, 0]],
    [[WIDTH, LENGTH], [0, LENGTH]]
];


// ------------------------------------------------------------
// COLUMN COLLISION SEGMENTS
// ------------------------------------------------------------

const columnSegments = [];

for (const z of COLUMN_Z) {

    for (const x of [1.25, WIDTH - 1.25]) {

        const halfW = COLUMN_W / 2;
        const halfD = COLUMN_D / 2;

        columnSegments.push(
            [[x - halfW, z - halfD], [x + halfW, z - halfD]],
            [[x + halfW, z - halfD], [x + halfW, z + halfD]],
            [[x + halfW, z + halfD], [x - halfW, z + halfD]],
            [[x - halfW, z + halfD], [x - halfW, z - halfD]]
        );
    }
}

const collisionSegments = wallSegments.concat(columnSegments);


// ------------------------------------------------------------
// SPATIAL GRID
// ------------------------------------------------------------

function makeGrid(segments) {

    const cell = 4;
    const grid = new Map();

    const add = (cx, cz, seg) => {

        const key = cx + ':' + cz;

        if (!grid.has(key)) {
            grid.set(key, []);
        }

        const list = grid.get(key);

        if (!list.includes(seg)) {
            list.push(seg);
        }
    };

    for (const seg of segments) {

        const minX =
            Math.floor(
                Math.min(seg[0][0], seg[1][0]) / cell
            ) - 1;

        const maxX =
            Math.floor(
                Math.max(seg[0][0], seg[1][0]) / cell
            ) + 1;

        const minZ =
            Math.floor(
                Math.min(seg[0][1], seg[1][1]) / cell
            ) - 1;

        const maxZ =
            Math.floor(
                Math.max(seg[0][1], seg[1][1]) / cell
            ) + 1;

        for (let x = minX; x <= maxX; x++) {

            for (let z = minZ; z <= maxZ; z++) {

                add(x, z, seg);
            }
        }
    }

    return {

        get(x, z) {

            const cx = Math.floor(x / cell);
            const cz = Math.floor(z / cell);

            const out = [];

            for (let dx = -1; dx <= 1; dx++) {

                for (let dz = -1; dz <= 1; dz++) {

                    const list =
                        grid.get(
                            (cx + dx) + ':' + (cz + dz)
                        );

                    if (list) {
                        out.push(...list);
                    }
                }
            }

            return [...new Set(out)];
        }
    };
}


// ------------------------------------------------------------
// QUAD
// ------------------------------------------------------------

function pushQuad(
    position,
    normal,
    a,
    b,
    c,
    d,
    n
) {

    const base = position.length / 3;

    position.push(
        ...a,
        ...b,
        ...c,
        ...d
    );

    normal.push(
        ...n,
        ...n,
        ...n,
        ...n
    );

    return [
        base,
        base + 2,
        base + 1,
        base + 1,
        base + 2,
        base + 3
    ];
}


// ------------------------------------------------------------
// BOX
// ------------------------------------------------------------

function addBox(
    position,
    normal,
    elements,
    minX,
    minY,
    minZ,
    maxX,
    maxY,
    maxZ
) {

    const add = (
        a,
        b,
        c,
        d,
        n
    ) => {

        elements.push(
            ...pushQuad(
                position,
                normal,
                a,
                b,
                c,
                d,
                n
            )
        );
    };


    // Front
    add(
        [minX, minY, minZ],
        [maxX, minY, minZ],
        [minX, maxY, minZ],
        [maxX, maxY, minZ],
        [0, 0, -1]
    );


    // Back
    add(
        [maxX, minY, maxZ],
        [minX, minY, maxZ],
        [maxX, maxY, maxZ],
        [minX, maxY, maxZ],
        [0, 0, 1]
    );


    // Left
    add(
        [minX, minY, maxZ],
        [minX, minY, minZ],
        [minX, maxY, maxZ],
        [minX, maxY, minZ],
        [-1, 0, 0]
    );


    // Right
    add(
        [maxX, minY, minZ],
        [maxX, minY, maxZ],
        [maxX, maxY, minZ],
        [maxX, maxY, maxZ],
        [1, 0, 0]
    );


    // Top
    add(
        [minX, maxY, minZ],
        [maxX, maxY, minZ],
        [minX, maxY, maxZ],
        [maxX, maxY, maxZ],
        [0, 1, 0]
    );


    // Bottom
    add(
        [minX, minY, maxZ],
        [maxX, minY, maxZ],
        [minX, minY, minZ],
        [maxX, minY, minZ],
        [0, -1, 0]
    );
}


// ------------------------------------------------------------
// ROUNDED ARCH
// ------------------------------------------------------------

function addArch(
    position,
    normal,
    elements,
    z
) {

    const cx = WIDTH / 2;

    const cy = 5.9;

    const inner = 4.7;

    const outer = 5.9;

    const depth = 0.55;

    const steps = 32;


    for (let i = 0; i < steps; i++) {

        const a0 =
            Math.PI * i / steps;

        const a1 =
            Math.PI * (i + 1) / steps;


        const points = [

            [
                cx + inner * Math.cos(a0),
                cy + inner * Math.sin(a0)
            ],

            [
                cx + inner * Math.cos(a1),
                cy + inner * Math.sin(a1)
            ],

            [
                cx + outer * Math.cos(a1),
                cy + outer * Math.sin(a1)
            ],

            [
                cx + outer * Math.cos(a0),
                cy + outer * Math.sin(a0)
            ]

        ];


        const add = (
            a,
            b,
            c,
            d,
            n
        ) => {

            elements.push(
                ...pushQuad(
                    position,
                    normal,
                    a,
                    b,
                    c,
                    d,
                    n
                )
            );
        };


        // Front
        add(
            [
                points[0][0],
                points[0][1],
                z - depth / 2
            ],

            [
                points[1][0],
                points[1][1],
                z - depth / 2
            ],

            [
                points[0][0],
                points[0][1],
                z + depth / 2
            ],

            [
                points[1][0],
                points[1][1],
                z + depth / 2
            ],

            [0, 0, -1]
        );


        // Back
        add(
            [
                points[3][0],
                points[3][1],
                z + depth / 2
            ],

            [
                points[2][0],
                points[2][1],
                z + depth / 2
            ],

            [
                points[3][0],
                points[3][1],
                z - depth / 2
            ],

            [
                points[2][0],
                points[2][1],
                z - depth / 2
            ],

            [0, 0, 1]
        );
    }


    // Left arch pier

    addBox(
        position,
        normal,
        elements,

        cx - outer,
        0,
        z - depth / 2,

        cx - inner,
        cy,
        z + depth / 2
    );


    // Right arch pier

    addBox(
        position,
        normal,
        elements,

        cx + inner,
        0,
        z - depth / 2,

        cx + outer,
        cy,
        z + depth / 2
    );
}


// ------------------------------------------------------------
// MAIN GALLERY
// ------------------------------------------------------------

module.exports = function () {

    const position = [];

    const normal = [];

    const elements = [];


    // --------------------------------------------------------
    // FLOOR
    // --------------------------------------------------------

    elements.push(
        ...pushQuad(

            position,
            normal,

            [0, 0, 0],

            [WIDTH, 0, 0],

            [0, 0, LENGTH],

            [WIDTH, 0, LENGTH],

            [0, 1, 0]
        )
    );


    // --------------------------------------------------------
    // CEILING
    // --------------------------------------------------------

    elements.push(
        ...pushQuad(

            position,
            normal,

            [0, HEIGHT, LENGTH],

            [WIDTH, HEIGHT, LENGTH],

            [0, HEIGHT, 0],

            [WIDTH, HEIGHT, 0],

            [0, -1, 0]
        )
    );


    // --------------------------------------------------------
    // SIDE WALLS
    // --------------------------------------------------------

    addBox(
        position,
        normal,
        elements,

        -WALL,
        0,
        0,

        WALL,
        HEIGHT,
        LENGTH
    );


    addBox(
        position,
        normal,
        elements,

        WIDTH - WALL,
        0,
        0,

        WIDTH + WALL,
        HEIGHT,
        LENGTH
    );


    // --------------------------------------------------------
    // ENTRANCE WALL
    // --------------------------------------------------------

    addBox(
        position,
        normal,
        elements,

        -WALL,
        0,
        -WALL,

        WIDTH + WALL,
        HEIGHT,
        WALL
    );


    // --------------------------------------------------------
    // MASTERPIECE END WALL
    // --------------------------------------------------------

    addBox(
        position,
        normal,
        elements,

        -WALL,
        0,
        LENGTH - WALL,

        WIDTH + WALL,
        HEIGHT,
        LENGTH + WALL
    );


    // --------------------------------------------------------
    // CLASSICAL COLUMNS
    // --------------------------------------------------------

    for (const z of COLUMN_Z) {

        for (const x of [
            1.25,
            WIDTH - 1.25
        ]) {


            // Main shaft

            addBox(

                position,
                normal,
                elements,

                x - COLUMN_W / 2,
                0,
                z - COLUMN_D / 2,

                x + COLUMN_W / 2,
                HEIGHT - 1.2,
                z + COLUMN_D / 2
            );


            // Capital

            addBox(

                position,
                normal,
                elements,

                x - 0.85,
                HEIGHT - 1.2,
                z - 0.85,

                x + 0.85,
                HEIGHT - 0.55,
                z + 0.85
            );


            // Upper capital detail

            addBox(

                position,
                normal,
                elements,

                x - 0.58,
                HEIGHT - 0.55,
                z - 0.58,

                x + 0.58,
                HEIGHT - 0.2,
                z + 0.58
            );
        }
    }


    // --------------------------------------------------------
    // LARGE ROUNDED ARCH
    // --------------------------------------------------------

    addArch(
        position,
        normal,
        elements,
        6.2
    );


    // --------------------------------------------------------
    // PAINTING POSITIONS
    // --------------------------------------------------------
    //
    // FIRST POSITION = CENTRAL MASTERPIECE
    //
    // Remaining positions = SIDE WALLS
    //

    const placements = [

        // Central masterpiece
        [
            [WIDTH, LENGTH - 0.35],
            [0, LENGTH - 0.35]
        ],

        // Left wall
        [
            [0, 4],
            [0, 14]
        ],

        // Right wall
        [
            [WIDTH, 15],
            [WIDTH, 25]
        ],

        // Left wall
        [
            [0, 27],
            [0, 37]
        ],

        // Right wall
        [
            [WIDTH, 38],
            [WIDTH, 47]
        ]

    ];


    // --------------------------------------------------------
    // COLLISION GRID
    // --------------------------------------------------------

    const grid =
        makeGrid(
            collisionSegments
        );


    // --------------------------------------------------------
    // AREA INDEX
    // --------------------------------------------------------

    const getAreaIndex = (
        x,
        z
    ) => {

        let best = 0;

        let bestDist =
            Infinity;


        placements.forEach(
            (
                seg,
                i
            ) => {

                const mx =
                    (
                        seg[0][0] +
                        seg[1][0]
                    ) / 2;

                const mz =
                    (
                        seg[0][1] +
                        seg[1][1]
                    ) / 2;


                const d =
                    Math.hypot(
                        x - mx,
                        z - mz
                    );


                if (d < bestDist) {

                    bestDist = d;

                    best = i;
                }
            }
        );


        return best;
    };


    // --------------------------------------------------------
    // RETURN GALLERY DATA
    // --------------------------------------------------------

    return {

        placements,

        getAreaIndex,

        getGridSegments:
            (x, z) =>
                grid.get(x, z),

        getGridParts:
            (x, z) =>
                grid.get(x, z),

        position,

        normal,

        elements
    };
};
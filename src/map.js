'use strict';

/*
 * RENAISSANCE ART GALLERY
 * ------------------------
 * Main architectural environment.
 *
 * Design:
 * - Warm classical gallery
 * - Large Renaissance / Roman archway
 * - Layered arch mouldings
 * - Classical pilasters
 * - Classical columns
 * - Wall panels
 * - Recessed ceiling coffers
 * - Long symmetrical exhibition corridor
 * - Central masterpiece at the far end
 *
 * The file keeps the same map API used by fps.js:
 *
 * {
 *   placements,
 *   getAreaIndex,
 *   getGridSegments,
 *   getGridParts
 * }
 */


// ============================================================
// GALLERY DIMENSIONS
// ============================================================

const WIDTH = 14;
const LENGTH = 48;
const HEIGHT = 8;

const WALL = 0.35;


// ============================================================
// CLASSICAL COLUMN DIMENSIONS
// ============================================================

const COLUMN_W = 1.15;
const COLUMN_D = 1.15;

const COLUMN_Z = [
    9,
    20,
    31,
    42
];


// ============================================================
// COLLISION WALLS
// ============================================================

const wallSegments = [

    // Left wall
    [
        [0, 0],
        [0, LENGTH]
    ],

    // Right wall
    [
        [WIDTH, LENGTH],
        [WIDTH, 0]
    ],

    // Entrance
    [
        [0, 0],
        [WIDTH, 0]
    ],

    // End wall
    [
        [WIDTH, LENGTH],
        [0, LENGTH]
    ]

];


// ============================================================
// COLUMN COLLISION
// ============================================================

const columnSegments = [];

for (const z of COLUMN_Z) {

    for (const x of [
        1.25,
        WIDTH - 1.25
    ]) {

        const halfW = COLUMN_W / 2;
        const halfD = COLUMN_D / 2;

        columnSegments.push(

            [
                [x - halfW, z - halfD],
                [x + halfW, z - halfD]
            ],

            [
                [x + halfW, z - halfD],
                [x + halfW, z + halfD]
            ],

            [
                [x + halfW, z + halfD],
                [x - halfW, z + halfD]
            ],

            [
                [x - halfW, z + halfD],
                [x - halfW, z - halfD]
            ]

        );
    }
}


const collisionSegments =
    wallSegments.concat(columnSegments);


// ============================================================
// SPATIAL GRID
// ============================================================

function makeGrid(segments) {

    const cell = 4;

    const grid = new Map();


    const add = (
        cx,
        cz,
        seg
    ) => {

        const key =
            cx + ':' + cz;


        if (!grid.has(key)) {

            grid.set(
                key,
                []
            );
        }


        const list =
            grid.get(key);


        if (!list.includes(seg)) {

            list.push(seg);
        }
    };


    for (const seg of segments) {

        const minX =
            Math.floor(
                Math.min(
                    seg[0][0],
                    seg[1][0]
                ) / cell
            ) - 1;


        const maxX =
            Math.floor(
                Math.max(
                    seg[0][0],
                    seg[1][0]
                ) / cell
            ) + 1;


        const minZ =
            Math.floor(
                Math.min(
                    seg[0][1],
                    seg[1][1]
                ) / cell
            ) - 1;


        const maxZ =
            Math.floor(
                Math.max(
                    seg[0][1],
                    seg[1][1]
                ) / cell
            ) + 1;


        for (
            let x = minX;
            x <= maxX;
            x++
        ) {

            for (
                let z = minZ;
                z <= maxZ;
                z++
            ) {

                add(
                    x,
                    z,
                    seg
                );
            }
        }
    }


    return {

        get(x, z) {

            const cx =
                Math.floor(
                    x / cell
                );

            const cz =
                Math.floor(
                    z / cell
                );


            const out = [];


            for (
                let dx = -1;
                dx <= 1;
                dx++
            ) {

                for (
                    let dz = -1;
                    dz <= 1;
                    dz++
                ) {

                    const list =
                        grid.get(
                            (cx + dx) +
                            ':' +
                            (cz + dz)
                        );


                    if (list) {

                        out.push(
                            ...list
                        );
                    }
                }
            }


            return [
                ...new Set(out)
            ];
        }
    };
}


// ============================================================
// QUAD
// ============================================================

function pushQuad(
    position,
    normal,
    a,
    b,
    c,
    d,
    n
) {

    const base =
        position.length / 3;


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


// ============================================================
// BOX
// ============================================================

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


    // --------------------------------------------------------
    // FRONT
    // --------------------------------------------------------

    add(

        [minX, minY, minZ],
        [maxX, minY, minZ],

        [minX, maxY, minZ],
        [maxX, maxY, minZ],

        [0, 0, -1]

    );


    // --------------------------------------------------------
    // BACK
    // --------------------------------------------------------

    add(

        [maxX, minY, maxZ],
        [minX, minY, maxZ],

        [maxX, maxY, maxZ],
        [minX, maxY, maxZ],

        [0, 0, 1]

    );


    // --------------------------------------------------------
    // LEFT
    // --------------------------------------------------------

    add(

        [minX, minY, maxZ],
        [minX, minY, minZ],

        [minX, maxY, maxZ],
        [minX, maxY, minZ],

        [-1, 0, 0]

    );


    // --------------------------------------------------------
    // RIGHT
    // --------------------------------------------------------

    add(

        [maxX, minY, minZ],
        [maxX, minY, maxZ],

        [maxX, maxY, minZ],
        [maxX, maxY, maxZ],

        [1, 0, 0]

    );


    // --------------------------------------------------------
    // TOP
    // --------------------------------------------------------

    add(

        [minX, maxY, minZ],
        [maxX, maxY, minZ],

        [minX, maxY, maxZ],
        [maxX, maxY, maxZ],

        [0, 1, 0]

    );


    // --------------------------------------------------------
    // BOTTOM
    // --------------------------------------------------------

    add(

        [minX, minY, maxZ],
        [maxX, minY, maxZ],

        [minX, minY, minZ],
        [maxX, minY, minZ],

        [0, -1, 0]

    );
}


// ============================================================
// ARCH RING
// ============================================================
//
// Creates a curved architectural moulding.
//
// The arch is deliberately kept below the 8-unit ceiling so
// that it is actually visible instead of being clipped.
// ============================================================

function addArchRing(
    position,
    normal,
    elements,

    centerX,
    springY,

    innerRadius,
    outerRadius,

    frontZ,
    backZ,

    steps
) {

    for (
        let i = 0;
        i < steps;
        i++
    ) {

        const a0 =
            Math.PI *
            i /
            steps;


        const a1 =
            Math.PI *
            (i + 1) /
            steps;


        const x0i =
            centerX +
            innerRadius *
            Math.cos(a0);


        const y0i =
            springY +
            innerRadius *
            Math.sin(a0);


        const x1i =
            centerX +
            innerRadius *
            Math.cos(a1);


        const y1i =
            springY +
            innerRadius *
            Math.sin(a1);


        const x0o =
            centerX +
            outerRadius *
            Math.cos(a0);


        const y0o =
            springY +
            outerRadius *
            Math.sin(a0);


        const x1o =
            centerX +
            outerRadius *
            Math.cos(a1);


        const y1o =
            springY +
            outerRadius *
            Math.sin(a1);


        // ----------------------------------------------------
        // FRONT FACE
        // ----------------------------------------------------

        elements.push(

            ...pushQuad(

                position,
                normal,

                [
                    x0i,
                    y0i,
                    frontZ
                ],

                [
                    x1i,
                    y1i,
                    frontZ
                ],

                [
                    x0o,
                    y0o,
                    frontZ
                ],

                [
                    x1o,
                    y1o,
                    frontZ
                ],

                [0, 0, -1]

            )

        );


        // ----------------------------------------------------
        // BACK FACE
        // ----------------------------------------------------

        elements.push(

            ...pushQuad(

                position,
                normal,

                [
                    x0o,
                    y0o,
                    backZ
                ],

                [
                    x1o,
                    y1o,
                    backZ
                ],

                [
                    x0i,
                    y0i,
                    backZ
                ],

                [
                    x1i,
                    y1i,
                    backZ
                ],

                [0, 0, 1]

            )

        );


        // ----------------------------------------------------
        // INNER CURVE
        // ----------------------------------------------------

        const midA =
            (a0 + a1) / 2;


        const innerNormal = [

            -Math.cos(midA),
            -Math.sin(midA),
            0

        ];


        elements.push(

            ...pushQuad(

                position,
                normal,

                [
                    x0i,
                    y0i,
                    backZ
                ],

                [
                    x1i,
                    y1i,
                    backZ
                ],

                [
                    x0i,
                    y0i,
                    frontZ
                ],

                [
                    x1i,
                    y1i,
                    frontZ
                ],

                innerNormal

            )

        );


        // ----------------------------------------------------
        // OUTER CURVE
        // ----------------------------------------------------

        const outerNormal = [

            Math.cos(midA),
            Math.sin(midA),
            0

        ];


        elements.push(

            ...pushQuad(

                position,
                normal,

                [
                    x0o,
                    y0o,
                    frontZ
                ],

                [
                    x1o,
                    y1o,
                    frontZ
                ],

                [
                    x0o,
                    y0o,
                    backZ
                ],

                [
                    x1o,
                    y1o,
                    backZ
                ],

                outerNormal

            )

        );
    }
}


// ============================================================
// GRAND RENAISSANCE ARCH
// ============================================================

function addGrandArch(
    position,
    normal,
    elements,
    z
) {

    const cx =
        WIDTH / 2;


    /*
     * The arch opening.
     *
     * springY = height at which the
     * rounded portion begins.
     */

    const springY = 4.0;


    /*
     * Keep the outermost point
     * below the ceiling.
     */

    const innerRadius = 2.8;
    const outerRadius = 3.25;


    const frontZ =
        z - 0.55;


    const backZ =
        z + 0.55;


    const steps = 48;


    // ========================================================
    // MAIN ARCH MOULDINGS
    // ========================================================

    addArchRing(

        position,
        normal,
        elements,

        cx,
        springY,

        2.80,
        3.18,

        frontZ,
        backZ,

        steps

    );


    addArchRing(

        position,
        normal,
        elements,

        cx,
        springY,

        3.27,
        3.50,

        frontZ - 0.08,
        backZ + 0.08,

        steps

    );


    addArchRing(

        position,
        normal,
        elements,

        cx,
        springY,

        3.58,
        3.78,

        frontZ - 0.16,
        backZ + 0.16,

        steps

    );


    // ========================================================
    // ARCH PIERS
    // ========================================================

    // Left main pier

    addBox(

        position,
        normal,
        elements,

        cx - 3.78,
        0.0,
        frontZ,

        cx - 2.80,
        springY,
        backZ

    );


    // Right main pier

    addBox(

        position,
        normal,
        elements,

        cx + 2.80,
        0.0,
        frontZ,

        cx + 3.78,
        springY,
        backZ

    );


    // ========================================================
    // PIER BASES
    // ========================================================

    addBox(

        position,
        normal,
        elements,

        cx - 4.05,
        0.0,
        z - 0.72,

        cx - 2.55,
        0.32,
        z + 0.72

    );


    addBox(

        position,
        normal,
        elements,

        cx + 2.55,
        0.0,
        z - 0.72,

        cx + 4.05,
        0.32,
        z + 0.72

    );


    // Second base step

    addBox(

        position,
        normal,
        elements,

        cx - 3.88,
        0.32,
        z - 0.62,

        cx - 2.68,
        0.52,
        z + 0.62

    );


    addBox(

        position,
        normal,
        elements,

        cx + 2.68,
        0.32,
        z - 0.62,

        cx + 3.88,
        0.52,
        z + 0.62

    );


    // ========================================================
    // PILASTER CAPITALS
    // ========================================================

    addBox(

        position,
        normal,
        elements,

        cx - 4.00,
        springY - 0.35,
        z - 0.72,

        cx - 2.58,
        springY,
        z + 0.72

    );


    addBox(

        position,
        normal,
        elements,

        cx + 2.58,
        springY - 0.35,
        z - 0.72,

        cx + 4.00,
        springY,
        z + 0.72

    );


    // ========================================================
    // CAPITAL DETAIL
    // ========================================================

    addBox(

        position,
        normal,
        elements,

        cx - 4.18,
        springY - 0.52,
        z - 0.82,

        cx - 2.42,
        springY - 0.35,
        z + 0.82

    );


    addBox(

        position,
        normal,
        elements,

        cx + 2.42,
        springY - 0.52,
        z - 0.82,

        cx + 4.18,
        springY - 0.35,
        z + 0.82

    );


    // ========================================================
    // TOP CORNICE
    // ========================================================

    const corniceY =
        springY + outerRadius - 0.18;


    addBox(

        position,
        normal,
        elements,

        cx - 4.05,
        corniceY,
        z - 0.70,

        cx + 4.05,
        corniceY + 0.28,
        z + 0.70

    );


    addBox(

        position,
        normal,
        elements,

        cx - 3.80,
        corniceY + 0.28,
        z - 0.58,

        cx + 3.80,
        corniceY + 0.48,
        z + 0.58

    );


    // ========================================================
    // ARCH KEYSTONE
    // ========================================================

    addBox(

        position,
        normal,
        elements,

        cx - 0.38,
        springY + outerRadius - 0.20,
        z - 0.68,

        cx + 0.38,
        springY + outerRadius + 0.28,
        z + 0.68

    );
}


// ============================================================
// CLASSICAL COLUMN
// ============================================================

function addClassicalColumn(
    position,
    normal,
    elements,
    x,
    z
) {

    // ========================================================
    // BASE
    // ========================================================

    addBox(

        position,
        normal,
        elements,

        x - 0.72,
        0.00,
        z - 0.72,

        x + 0.72,
        0.20,
        z + 0.72

    );


    addBox(

        position,
        normal,
        elements,

        x - 0.58,
        0.20,
        z - 0.58,

        x + 0.58,
        0.40,
        z + 0.58

    );


    // ========================================================
    // SHAFT
    // ========================================================

    addBox(

        position,
        normal,
        elements,

        x - COLUMN_W / 2,
        0.40,
        z - COLUMN_D / 2,

        x + COLUMN_W / 2,
        HEIGHT - 1.35,
        z + COLUMN_D / 2

    );


    // ========================================================
    // LOWER SHAFT BAND
    // ========================================================

    addBox(

        position,
        normal,
        elements,

        x - 0.67,
        0.42,
        z - 0.67,

        x + 0.67,
        0.62,
        z + 0.67

    );


    // ========================================================
    // UPPER SHAFT BAND
    // ========================================================

    addBox(

        position,
        normal,
        elements,

        x - 0.67,
        HEIGHT - 1.58,
        z - 0.67,

        x + 0.67,
        HEIGHT - 1.35,
        z + 0.67

    );


    // ========================================================
    // CAPITAL
    // ========================================================

    addBox(

        position,
        normal,
        elements,

        x - 0.82,
        HEIGHT - 1.35,
        z - 0.82,

        x + 0.82,
        HEIGHT - 1.05,
        z + 0.82

    );


    addBox(

        position,
        normal,
        elements,

        x - 0.66,
        HEIGHT - 1.05,
        z - 0.66,

        x + 0.66,
        HEIGHT - 0.78,
        z + 0.66

    );


    addBox(

        position,
        normal,
        elements,

        x - 0.92,
        HEIGHT - 0.78,
        z - 0.92,

        x + 0.92,
        HEIGHT - 0.55,
        z + 0.92

    );


    // ========================================================
    // TOP ABACUS
    // ========================================================

    addBox(

        position,
        normal,
        elements,

        x - 0.78,
        HEIGHT - 0.55,
        z - 0.78,

        x + 0.78,
        HEIGHT - 0.30,
        z + 0.78

    );


    addBox(

        position,
        normal,
        elements,

        x - 0.92,
        HEIGHT - 0.30,
        z - 0.92,

        x + 0.92,
        HEIGHT - 0.10,
        z + 0.92

    );
}


// ============================================================
// WALL PANEL
// ============================================================
//
// Decorative recessed panels between the paintings.
// These make the walls feel architectural rather than flat.
// ============================================================

function addWallPanel(
    position,
    normal,
    elements,

    x,
    z,
    side
) {

    const panelWidth = 3.6;
    const panelHeight = 4.6;

    const bottom = 1.0;

    const top =
        bottom + panelHeight;


    const depth = 0.08;


    if (side === 'left') {

        const wallX = 0;


        // Outer frame

        addBox(

            position,
            normal,
            elements,

            wallX - depth,
            bottom,
            z - panelWidth / 2,

            wallX + 0.12,
            top,
            z + panelWidth / 2

        );


        // Inner decorative panel

        addBox(

            position,
            normal,
            elements,

            wallX - depth - 0.04,
            bottom + 0.18,
            z - panelWidth / 2 + 0.18,

            wallX + 0.16,
            top - 0.18,
            z + panelWidth / 2 - 0.18

        );

    } else {

        const wallX = WIDTH;


        addBox(

            position,
            normal,
            elements,

            wallX - 0.12,
            bottom,
            z - panelWidth / 2,

            wallX + depth,
            top,
            z + panelWidth / 2

        );


        addBox(

            position,
            normal,
            elements,

            wallX - 0.16,
            bottom + 0.18,
            z - panelWidth / 2 + 0.18,

            wallX + depth + 0.04,
            top - 0.18,
            z + panelWidth / 2 - 0.18

        );
    }
}


// ============================================================
// CEILING COFFER
// ============================================================
//
// Creates recessed-looking ceiling sections.
// ============================================================

function addCeilingCoffer(
    position,
    normal,
    elements,
    z
) {

    const margin = 0.7;

    const innerWidth = 5.0;

    const depth = 0.18;


    // Left recessed border

    addBox(

        position,
        normal,
        elements,

        margin,
        HEIGHT - depth,
        z - 1.7,

        margin + 0.22,
        HEIGHT,
        z + 1.7

    );


    // Right recessed border

    addBox(

        position,
        normal,
        elements,

        WIDTH - margin - 0.22,
        HEIGHT - depth,
        z - 1.7,

        WIDTH - margin,
        HEIGHT,
        z + 1.7

    );


    // Front border

    addBox(

        position,
        normal,
        elements,

        margin,
        HEIGHT - depth,
        z - 1.7,

        WIDTH - margin,
        HEIGHT,
        z - 1.48

    );


    // Back border

    addBox(

        position,
        normal,
        elements,

        margin,
        HEIGHT - depth,
        z + 1.48,

        WIDTH - margin,
        HEIGHT,
        z + 1.7

    );


    // Inner recessed ceiling

    elements.push(

        ...pushQuad(

            position,
            normal,

            [
                margin + 0.22,
                HEIGHT - depth,
                z - 1.48
            ],

            [
                WIDTH - margin - 0.22,
                HEIGHT - depth,
                z - 1.48
            ],

            [
                margin + 0.22,
                HEIGHT - depth,
                z + 1.48
            ],

            [
                WIDTH - margin - 0.22,
                HEIGHT - depth,
                z + 1.48
            ],

            [0, -1, 0]

        )

    );
}


// ============================================================
// MAIN GALLERY
// ============================================================

module.exports = function () {

    const position = [];

    const normal = [];

    const elements = [];


    // ========================================================
    // FLOOR
    // ========================================================

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


    // ========================================================
    // CEILING
    // ========================================================

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


    // ========================================================
    // SIDE WALLS
    // ========================================================

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


    // ========================================================
    // ENTRANCE WALL
    // ========================================================

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


    // ========================================================
    // MASTERPIECE END WALL
    // ========================================================

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


    // ========================================================
    // CLASSICAL COLUMNS
    // ========================================================

    for (const z of COLUMN_Z) {

        addClassicalColumn(

            position,
            normal,
            elements,

            1.25,
            z

        );


        addClassicalColumn(

            position,
            normal,
            elements,

            WIDTH - 1.25,
            z

        );
    }


    // ========================================================
    // WALL DECORATION
    // ========================================================

    addWallPanel(
        position,
        normal,
        elements,
        1.8,
        5.0,
        'left'
    );


    addWallPanel(
        position,
        normal,
        elements,
        1.8,
        14.0,
        'left'
    );


    addWallPanel(
        position,
        normal,
        elements,
        1.8,
        25.0,
        'left'
    );


    addWallPanel(
        position,
        normal,
        elements,
        1.8,
        36.0,
        'left'
    );


    addWallPanel(
        position,
        normal,
        elements,
        1.8,
        45.0,
        'left'
    );


    addWallPanel(
        position,
        normal,
        elements,
        WIDTH - 1.8,
        5.0,
        'right'
    );


    addWallPanel(
        position,
        normal,
        elements,
        WIDTH - 1.8,
        15.0,
        'right'
    );


    addWallPanel(
        position,
        normal,
        elements,
        WIDTH - 1.8,
        26.0,
        'right'
    );


    addWallPanel(
        position,
        normal,
        elements,
        WIDTH - 1.8,
        37.0,
        'right'
    );


    addWallPanel(
        position,
        normal,
        elements,
        WIDTH - 1.8,
        45.0,
        'right'
    );


    // ========================================================
    // CEILING COFFERS
    // ========================================================

    const cofferPositions = [
        4,
        10,
        16,
        22,
        28,
        34,
        40,
        46
    ];


    for (const z of cofferPositions) {

        addCeilingCoffer(

            position,
            normal,
            elements,
            z

        );
    }


    // ========================================================
    // GRAND RENAISSANCE ARCHWAY
    // ========================================================

    addGrandArch(

        position,
        normal,
        elements,

        8.0

    );


    // ========================================================
    // PAINTING POSITIONS
    // ========================================================
    //
    // FIRST POSITION:
    // CENTRAL MASTERPIECE
    //
    // Remaining positions:
    // SIDE WALLS
    //
    // The painting system uses these wall segments to
    // determine orientation and placement.
    // ========================================================

    const placements = [

        // ----------------------------------------------------
        // CENTRAL MASTERPIECE
        // ----------------------------------------------------

        [
            [WIDTH, LENGTH - 0.35],
            [0, LENGTH - 0.35]
        ],


        // ----------------------------------------------------
        // LEFT WALL
        // ----------------------------------------------------

        [
            [0, 4],
            [0, 14]
        ],


        // ----------------------------------------------------
        // RIGHT WALL
        // ----------------------------------------------------

        [
            [WIDTH, 15],
            [WIDTH, 25]
        ],


        // ----------------------------------------------------
        // LEFT WALL
        // ----------------------------------------------------

        [
            [0, 27],
            [0, 37]
        ],


        // ----------------------------------------------------
        // RIGHT WALL
        // ----------------------------------------------------

        [
            [WIDTH, 38],
            [WIDTH, 47]
        ]

    ];


    // ========================================================
    // COLLISION GRID
    // ========================================================

    const grid =
        makeGrid(
            collisionSegments
        );


    // ========================================================
    // AREA INDEX
    // ========================================================

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


                if (
                    d <
                    bestDist
                ) {

                    bestDist =
                        d;

                    best =
                        i;
                }

            }
        );


        return best;
    };


    // ========================================================
    // RETURN GALLERY DATA
    // ========================================================

    return {

        placements,


        getAreaIndex,


        getGridSegments:
            (x, z) =>
                grid.get(
                    x,
                    z
                ),


        getGridParts:
            (x, z) =>
                grid.get(
                    x,
                    z
                ),


        position,


        normal,


        elements

    };

};
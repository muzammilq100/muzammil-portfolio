'use strict';

/*
 * RENAISSANCE ART GALLERY
 * ------------------------
 * Classical Italian / Renaissance gallery environment.
 *
 * Main composition:
 *
 * ENTRANCE
 *    ↓
 * GRAND ARCHWAY
 *    ↓
 * LONG EXHIBITION CORRIDOR
 *    ↓
 * CENTRAL MASTERPIECE
 *
 * The arch is designed as a monumental doorway rather
 * than a ceiling arch.
 */


// ============================================================
// GALLERY DIMENSIONS
// ============================================================

const WIDTH = 14;
const LENGTH = 48;
const HEIGHT = 8;

const WALL = 0.35;


// ============================================================
// CLASSICAL COLUMNS
// ============================================================

const COLUMN_W = 1.15;
const COLUMN_D = 1.15;

const COLUMN_Z = [
    18,
    29,
    40
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


    // FRONT

    add(

        [minX, minY, minZ],
        [maxX, minY, minZ],

        [minX, maxY, minZ],
        [maxX, maxY, minZ],

        [0, 0, -1]

    );


    // BACK

    add(

        [maxX, minY, maxZ],
        [minX, minY, maxZ],

        [maxX, maxY, maxZ],
        [minX, maxY, maxZ],

        [0, 0, 1]

    );


    // LEFT

    add(

        [minX, minY, maxZ],
        [minX, minY, minZ],

        [minX, maxY, maxZ],
        [minX, maxY, minZ],

        [-1, 0, 0]

    );


    // RIGHT

    add(

        [maxX, minY, minZ],
        [maxX, minY, maxZ],

        [maxX, maxY, minZ],
        [maxX, maxY, maxZ],

        [1, 0, 0]

    );


    // TOP

    add(

        [minX, maxY, minZ],
        [maxX, maxY, minZ],

        [minX, maxY, maxZ],
        [maxX, maxY, maxZ],

        [0, 1, 0]

    );


    // BOTTOM

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


        // FRONT OF ARCH

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


        // BACK OF ARCH

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


        // INNER CURVE

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


        // OUTER CURVE

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
//
// IMPORTANT PROPORTION CHANGES:
//
// The arch is now:
// - farther down the gallery
// - wider
// - lower at the spring point
// - less deep
// - less dominant vertically
//
// This makes it read as a monumental doorway.
// ============================================================

function addGrandArch(
    position,
    normal,
    elements,
    z
) {

    const cx =
        WIDTH / 2;


    // --------------------------------------------------------
    // MAIN ARCH PROPORTIONS
    // --------------------------------------------------------

    const springY = 3.35;

    const innerRadius = 3.75;

    const outerRadius = 4.15;


    const frontZ =
        z - 0.45;


    const backZ =
        z + 0.45;


    const steps = 56;


    // --------------------------------------------------------
    // INNER ARCH
    // --------------------------------------------------------

    addArchRing(

        position,
        normal,
        elements,

        cx,
        springY,

        innerRadius,
        4.00,

        frontZ,
        backZ,

        steps

    );


    // --------------------------------------------------------
    // SECOND MOULDING
    // --------------------------------------------------------

    addArchRing(

        position,
        normal,
        elements,

        cx,
        springY,

        4.08,
        4.25,

        frontZ - 0.07,
        backZ + 0.07,

        steps

    );


    // --------------------------------------------------------
    // ARCH PIERS
    // --------------------------------------------------------

    addBox(

        position,
        normal,
        elements,

        cx - 4.25,
        0,
        frontZ,

        cx - 3.75,
        springY,
        backZ

    );


    addBox(

        position,
        normal,
        elements,

        cx + 3.75,
        0,
        frontZ,

        cx + 4.25,
        springY,
        backZ

    );


    // --------------------------------------------------------
    // LARGE PILASTERS
    // --------------------------------------------------------

    addBox(

        position,
        normal,
        elements,

        cx - 4.55,
        0,
        z - 0.62,

        cx - 3.55,
        6.75,
        z + 0.62

    );


    addBox(

        position,
        normal,
        elements,

        cx + 3.55,
        0,
        z - 0.62,

        cx + 4.55,
        6.75,
        z + 0.62

    );


    // --------------------------------------------------------
    // PILASTER BASES
    // --------------------------------------------------------

    addBox(

        position,
        normal,
        elements,

        cx - 4.78,
        0,
        z - 0.82,

        cx - 3.32,
        0.22,
        z + 0.82

    );


    addBox(

        position,
        normal,
        elements,

        cx + 3.32,
        0,
        z - 0.82,

        cx + 4.78,
        0.22,
        z + 0.82

    );


    addBox(

        position,
        normal,
        elements,

        cx - 4.62,
        0.22,
        z - 0.68,

        cx - 3.48,
        0.42,
        z + 0.68

    );


    addBox(

        position,
        normal,
        elements,

        cx + 3.48,
        0.22,
        z - 0.68,

        cx + 4.62,
        0.42,
        z + 0.68

    );


    // --------------------------------------------------------
    // PILASTER CAPITALS
    // --------------------------------------------------------

    addBox(

        position,
        normal,
        elements,

        cx - 4.68,
        6.75,
        z - 0.76,

        cx - 3.32,
        7.05,
        z + 0.76

    );


    addBox(

        position,
        normal,
        elements,

        cx + 3.32,
        6.75,
        z - 0.76,

        cx + 4.68,
        7.05,
        z + 0.76

    );


    // --------------------------------------------------------
    // CAPITAL DETAIL
    // --------------------------------------------------------

    addBox(

        position,
        normal,
        elements,

        cx - 4.82,
        7.05,
        z - 0.86,

        cx - 3.18,
        7.25,
        z + 0.86

    );


    addBox(

        position,
        normal,
        elements,

        cx + 3.18,
        7.05,
        z - 0.86,

        cx + 4.82,
        7.25,
        z + 0.86

    );


    // --------------------------------------------------------
    // TOP CORNICE
    // --------------------------------------------------------

    addBox(

        position,
        normal,
        elements,

        cx - 4.80,
        7.25,
        z - 0.72,

        cx + 4.80,
        7.48,
        z + 0.72

    );


    addBox(

        position,
        normal,
        elements,

        cx - 4.58,
        7.48,
        z - 0.58,

        cx + 4.58,
        7.68,
        z + 0.58

    );


    // --------------------------------------------------------
    // KEYSTONE
    // --------------------------------------------------------

    addBox(

        position,
        normal,
        elements,

        cx - 0.40,
        7.05,
        z - 0.55,

        cx + 0.40,
        7.68,
        z + 0.55

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

    // BASE

    addBox(

        position,
        normal,
        elements,

        x - 0.72,
        0,
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


    // SHAFT

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


    // LOWER BAND

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


    // UPPER BAND

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


    // CAPITAL

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


    // TOP ABACUS

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

function addWallPanel(
    position,
    normal,
    elements,
    z,
    side
) {

    const panelWidth = 3.8;
    const bottom = 1.0;
    const top = 5.7;

    const depth = 0.08;


    if (side === 'left') {

        addBox(

            position,
            normal,
            elements,

            -depth,
            bottom,
            z - panelWidth / 2,

            0.14,
            top,
            z + panelWidth / 2

        );


        addBox(

            position,
            normal,
            elements,

            -depth - 0.04,
            bottom + 0.18,
            z - panelWidth / 2 + 0.18,

            0.18,
            top - 0.18,
            z + panelWidth / 2 - 0.18

        );

    } else {

        addBox(

            position,
            normal,
            elements,

            WIDTH - 0.14,
            bottom,
            z - panelWidth / 2,

            WIDTH + depth,
            top,
            z + panelWidth / 2

        );


        addBox(

            position,
            normal,
            elements,

            WIDTH - 0.18,
            bottom + 0.18,
            z - panelWidth / 2 + 0.18,

            WIDTH + depth + 0.04,
            top - 0.18,
            z + panelWidth / 2 - 0.18

        );
    }
}


// ============================================================
// CEILING COFFER
// ============================================================

function addCeilingCoffer(
    position,
    normal,
    elements,
    z
) {

    const margin = 0.65;

    const depth = 0.16;


    // LEFT BORDER

    addBox(

        position,
        normal,
        elements,

        margin,
        HEIGHT - depth,
        z - 1.65,

        margin + 0.22,
        HEIGHT,
        z + 1.65

    );


    // RIGHT BORDER

    addBox(

        position,
        normal,
        elements,

        WIDTH - margin - 0.22,
        HEIGHT - depth,
        z - 1.65,

        WIDTH - margin,
        HEIGHT,
        z + 1.65

    );


    // FRONT BORDER

    addBox(

        position,
        normal,
        elements,

        margin,
        HEIGHT - depth,
        z - 1.65,

        WIDTH - margin,
        HEIGHT,
        z - 1.43

    );


    // BACK BORDER

    addBox(

        position,
        normal,
        elements,

        margin,
        HEIGHT - depth,
        z + 1.43,

        WIDTH - margin,
        HEIGHT,
        z + 1.65

    );


    // RECESSED PANEL

    elements.push(

        ...pushQuad(

            position,
            normal,

            [
                margin + 0.22,
                HEIGHT - depth,
                z - 1.43
            ],

            [
                WIDTH - margin - 0.22,
                HEIGHT - depth,
                z - 1.43
            ],

            [
                margin + 0.22,
                HEIGHT - depth,
                z + 1.43
            ],

            [
                WIDTH - margin - 0.22,
                HEIGHT - depth,
                z + 1.43
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
    // SKIRTING BOARDS (marble, two steps) on the side and end walls
    // ========================================================
    addBox(position, normal, elements, WALL, 0, 0, WALL + 0.12, 0.42, LENGTH - WALL);
    addBox(position, normal, elements, WALL, 0.42, 0, WALL + 0.07, 0.50, LENGTH - WALL);
    addBox(position, normal, elements, WIDTH - WALL - 0.12, 0, 0, WIDTH - WALL, 0.42, LENGTH - WALL);
    addBox(position, normal, elements, WIDTH - WALL - 0.07, 0.42, 0, WIDTH - WALL, 0.50, LENGTH - WALL);
    addBox(position, normal, elements, WALL, 0, LENGTH - WALL - 0.12, WIDTH - WALL, 0.42, LENGTH - WALL);
    addBox(position, normal, elements, WALL, 0.42, LENGTH - WALL - 0.07, WIDTH - WALL, 0.50, LENGTH - WALL);

    // ========================================================
    // ENTRANCE
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
    // END WALL
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
    // GRAND ARCHWAY
    // ========================================================
    //
    // Moved from z = 8 to z = 12.
    //
    // This gives the viewer enough distance to see the
    // arch as a complete architectural portal.
    // ========================================================

    addGrandArch(

        position,
        normal,
        elements,

        12

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
    // WALL PANELS
    // ========================================================

    addWallPanel(
        position,
        normal,
        elements,
        5,
        'left'
    );


    addWallPanel(
        position,
        normal,
        elements,
        9,
        'right'
    );


    addWallPanel(
        position,
        normal,
        elements,
        22,
        'left'
    );


    addWallPanel(
        position,
        normal,
        elements,
        25,
        'right'
    );


    addWallPanel(
        position,
        normal,
        elements,
        33,
        'left'
    );


    addWallPanel(
        position,
        normal,
        elements,
        36,
        'right'
    );


    addWallPanel(
        position,
        normal,
        elements,
        43,
        'left'
    );


    addWallPanel(
        position,
        normal,
        elements,
        44,
        'right'
    );


    // ========================================================
    // CEILING COFFERS
    // ========================================================

    const cofferPositions = [

        4,
        9,
        14,
        19,
        24,
        29,
        34,
        39,
        44

    ];


    for (
        const z of cofferPositions
    ) {

        addCeilingCoffer(

            position,
            normal,
            elements,

            z

        );
    }


    // ========================================================
    // PAINTING POSITIONS
    // ========================================================

    const placements = [

        // CENTRAL MASTERPIECE

        [
            [WIDTH, LENGTH - 0.35],
            [0, LENGTH - 0.35]
        ],


        // LEFT WALL

        [
            [0, 3],
            [0, 10]
        ],


        // RIGHT WALL

        [
            [WIDTH, 15],
            [WIDTH, 22]
        ],


        // LEFT WALL

        [
            [0, 24],
            [0, 31]
        ],


        // RIGHT WALL

        [
            [WIDTH, 33],
            [WIDTH, 40]
        ],


        // LEFT WALL

        [
            [0, 41],
            [0, 46]
        ]

    ];


    // ========================================================
    // GRID
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

                    bestDist = d;

                    best = i;
                }

            }
        );


        return best;
    };


    // ========================================================
    // RETURN MAP
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
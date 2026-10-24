'use strict';

const geom = require('./geom');
const { addFlutedColumn, addStatue, addPlant } = require('./decor');
const entrance = require('./entrance');
const skylight = require('./skylight');
const wing = require('./wing');

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
const LENGTH = 58;          // extended: the new wing opens off the far end
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


// ============================================================
// ENTRANCE ARCH, STATUES AND PLANTS
// ============================================================

const ARCH_Z = 12;
const ARCH_R_IN = 2.95;     // half of the clear opening
const ARCH_COL_R = 0.62;    // radius of the round fluted columns
const ARCH_COL_X = ARCH_R_IN + ARCH_COL_R;

// Statues stand in the two far corners, turned towards the hall.
// They are real 3D scans (res/venus.bin, res/david.bin) placed on
// the pedestals by statues.js. height = statue height in metres.
// They are close to the height of the paintings (about 5.2 m).
const STATUES = [
    { file: 'venus.bin', x: 1.85, z: 56.2, yaw: 2.67, height: 5.2 },
    { file: 'david.bin', x: WIDTH - 2.1, z: 56.2, yaw: -2.67, height: 5.2 }
];

// low round pedestal under each statue
const PEDESTAL_TOP = 0.8;
const PEDESTAL_R = 1.17;

// Six plants, in three pairs facing each other across the hall,
// tucked into the corners between the side walls and the pillars.
// "away" points towards open floor so leaves lean out of the corner.
const PLANTS = [];

[
    { z: 10.4, dz: -0.7 },   // just before the entrance arch
    { z: 19.2, dz: 0.7 },    // just behind them
    { z: 27.8, dz: -0.7 }    // in front of the second pair
].forEach((p, i) => {
    PLANTS.push({ x: 1.0, z: p.z, seed: 11 + i * 7, away: [1, p.dz] });
    PLANTS.push({ x: WIDTH - 1.0, z: p.z, seed: 53 + i * 5, away: [-1, p.dz] });
});

function boxSegments(x, z, halfW, halfD) {
    return [
        [[x - halfW, z - halfD], [x + halfW, z - halfD]],
        [[x + halfW, z - halfD], [x + halfW, z + halfD]],
        [[x + halfW, z + halfD], [x - halfW, z + halfD]],
        [[x - halfW, z + halfD], [x - halfW, z - halfD]]
    ];
}

const obstacleSegments = [];

for (const sgn of [-1, 1]) {
    obstacleSegments.push(
        ...boxSegments(WIDTH / 2 + sgn * ARCH_COL_X, ARCH_Z, 0.85, 0.85)
    );
}

for (const st of STATUES) {
    obstacleSegments.push(...boxSegments(st.x, st.z, PEDESTAL_R * 1.1, PEDESTAL_R * 1.1));
}

for (const pl of PLANTS) {
    obstacleSegments.push(...boxSegments(pl.x, pl.z, 0.42, 0.42));
}


const collisionSegments =
    wallSegments.concat(columnSegments, obstacleSegments);


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
// MATERIAL ATTRIBUTE + BUILDER (shared by every mesh below)
// ============================================================

let matArr = [];

let builder = { curMat: [0, 0, 0] };


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


    // material triple (id, u, v) read by the shader
    const m = builder.curMat;

    matArr.push(
        ...m,
        ...m,
        ...m,
        ...m
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
// ARCH RING (built with the shared builder so every face is
// wound the right way round)
// ============================================================

function archQuad(a, b, c, d, n) {
    const B = builder;
    const ia = B.vert(a, n);
    const ib = B.vert(b, n);
    const ic = B.vert(c, n);
    const id = B.vert(d, n);
    B.tri(ia, ib, ic);
    B.tri(ib, id, ic);
}

function addArchRing(
    cx,
    springY,
    innerRadius,
    outerRadius,
    frontZ,
    backZ,
    steps
) {

    for (let i = 0; i < steps; i++) {

        const a0 = Math.PI * i / steps;
        const a1 = Math.PI * (i + 1) / steps;

        const c0 = Math.cos(a0);
        const s0 = Math.sin(a0);
        const c1 = Math.cos(a1);
        const s1 = Math.sin(a1);

        const i0 = [cx + innerRadius * c0, springY + innerRadius * s0];
        const i1 = [cx + innerRadius * c1, springY + innerRadius * s1];
        const o0 = [cx + outerRadius * c0, springY + outerRadius * s0];
        const o1 = [cx + outerRadius * c1, springY + outerRadius * s1];

        // front and back faces
        archQuad(
            [i0[0], i0[1], frontZ], [i1[0], i1[1], frontZ],
            [o0[0], o0[1], frontZ], [o1[0], o1[1], frontZ],
            [0, 0, -1]
        );

        archQuad(
            [i0[0], i0[1], backZ], [i1[0], i1[1], backZ],
            [o0[0], o0[1], backZ], [o1[0], o1[1], backZ],
            [0, 0, 1]
        );

        // inner curve (the underside you walk beneath)
        const mid = (a0 + a1) / 2;

        archQuad(
            [i0[0], i0[1], frontZ], [i1[0], i1[1], frontZ],
            [i0[0], i0[1], backZ], [i1[0], i1[1], backZ],
            [-Math.cos(mid), -Math.sin(mid), 0]
        );

        // outer curve
        archQuad(
            [o0[0], o0[1], frontZ], [o1[0], o1[1], frontZ],
            [o0[0], o0[1], backZ], [o1[0], o1[1], backZ],
            [Math.cos(mid), Math.sin(mid), 0]
        );
    }
}


// ============================================================
// SPANDREL: the wall that fills the space above the curve
// ============================================================

function addSpandrel(
    cx,
    springY,
    radius,
    topY,
    frontZ,
    backZ,
    steps
) {

    for (let i = 0; i < steps; i++) {

        const a0 = Math.PI * i / steps;
        const a1 = Math.PI * (i + 1) / steps;

        const x0 = cx + radius * Math.cos(a0);
        const y0 = springY + radius * Math.sin(a0);
        const x1 = cx + radius * Math.cos(a1);
        const y1 = springY + radius * Math.sin(a1);

        archQuad([x0, y0, frontZ], [x1, y1, frontZ], [x0, topY, frontZ], [x1, topY, frontZ], [0, 0, -1]);
        archQuad([x0, y0, backZ], [x1, y1, backZ], [x0, topY, backZ], [x1, topY, backZ], [0, 0, 1]);
    }
}


// ============================================================
// GRAND RENAISSANCE ARCH
// ============================================================
//
// A true semicircular arch with correct proportions:
//
//   - clear opening 5.9 m wide, springing at 3.0 m, so the
//     curve is a perfect half circle that crowns at 5.95 m
//   - round fluted columns (20 carved vertical grooves) stand
//     on either side, their inner faces exactly on the line
//     where the arch springs
//   - the whole curve sits below the entablature, so it is never
//     cut by the cornice, and the wall above it is filled in
// ============================================================

function addGrandArch(
    position,
    normal,
    elements,
    z
) {

    const cx = WIDTH / 2;

    const R_IN = ARCH_R_IN;
    const SPRING = 3.0;
    const R_OUT = R_IN + 0.42;
    const R_MOULD = R_OUT + 0.15;

    const COL_R = ARCH_COL_R;
    const COL_X = ARCH_COL_X;
    const COL_SHAFT_TOP = 5.98;

    const frontZ = z - 0.45;
    const backZ = z + 0.45;
    const steps = 64;


    // --------------------------------------------------------
    // ROUND FLUTED COLUMNS
    // --------------------------------------------------------

    const ENT_Y = addFlutedColumn(builder, cx - COL_X, z, 0, COL_SHAFT_TOP, COL_R);

    addFlutedColumn(builder, cx + COL_X, z, 0, COL_SHAFT_TOP, COL_R);

    builder.curMat = [0, 0, 0];


    // --------------------------------------------------------
    // ARCH RING AND OUTER MOULDING
    // --------------------------------------------------------

    addArchRing(cx, SPRING, R_IN, R_OUT, frontZ, backZ, steps);

    addArchRing(
        cx, SPRING, R_OUT, R_MOULD,
        frontZ - 0.07, backZ + 0.07,
        steps
    );


    // --------------------------------------------------------
    // WALL ABOVE THE ARCH AND BESIDE IT
    // --------------------------------------------------------

    addSpandrel(cx, SPRING, R_MOULD, ENT_Y + 0.05, frontZ, backZ, steps);

    for (const sgn of [-1, 1]) {

        const x0 = cx + sgn * (R_MOULD - 0.02);
        const x1 = cx + sgn * COL_X;

        addBox(
            position, normal, elements,
            Math.min(x0, x1), SPRING, frontZ,
            Math.max(x0, x1), ENT_Y + 0.05, backZ
        );
    }


    // --------------------------------------------------------
    // IMPOST BLOCKS where the arch springs from the columns
    // --------------------------------------------------------

    for (const sgn of [-1, 1]) {

        const xa = cx + sgn * (R_IN - 0.05);
        const xb = cx + sgn * (R_IN + 0.85);

        addBox(
            position, normal, elements,
            Math.min(xa, xb), SPRING - 0.16, z - 0.60,
            Math.max(xa, xb), SPRING, z + 0.60
        );
    }


    // --------------------------------------------------------
    // ENTABLATURE: architrave, frieze, cornice
    // --------------------------------------------------------

    const EX = COL_X + COL_R * 1.42 + 0.45;

    addBox(
        position, normal, elements,
        cx - EX, ENT_Y, z - 0.70,
        cx + EX, ENT_Y + 0.44, z + 0.70
    );

    addBox(
        position, normal, elements,
        cx - EX + 0.12, ENT_Y + 0.44, z - 0.62,
        cx + EX - 0.12, ENT_Y + 0.70, z + 0.62
    );

    addBox(
        position, normal, elements,
        cx - EX - 0.10, ENT_Y + 0.70, z - 0.84,
        cx + EX + 0.10, ENT_Y + 0.84, z + 0.84
    );

    addBox(
        position, normal, elements,
        cx - EX - 0.22, ENT_Y + 0.84, z - 0.96,
        cx + EX + 0.22, ENT_Y + 1.00, z + 0.96
    );


    // --------------------------------------------------------
    // KEYSTONE
    // --------------------------------------------------------

    addBox(
        position, normal, elements,
        cx - 0.30, SPRING + R_IN - 0.10, z - 0.56,
        cx + 0.30, ENT_Y, z + 0.56
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

    matArr = [];

    builder = geom.createBuilder(
        position,
        normal,
        elements,
        matArr
    );


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

    // the plain ceiling, with a coffered glass skylight over the middle
    // of the hall (see skylight.js)
    skylight.addSkylight(builder, [0, 0, 0], LENGTH);

    builder.curMat = [0, 0, 0];


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
        wing.C.z0

    );


    // ========================================================
    // SKIRTING BOARDS (marble, two steps) on the side and end walls
    // ========================================================
    addBox(position, normal, elements, WALL, 0, 0, WALL + 0.12, 0.42, LENGTH - WALL);
    addBox(position, normal, elements, WALL, 0.42, 0, WALL + 0.07, 0.50, LENGTH - WALL);
    addBox(position, normal, elements, WIDTH - WALL - 0.12, 0, 0, WIDTH - WALL, 0.42, wing.C.z0);
    addBox(position, normal, elements, WIDTH - WALL - 0.07, 0.42, 0, WIDTH - WALL, 0.50, wing.C.z0);
    addBox(position, normal, elements, WALL, 0, LENGTH - WALL - 0.12, WIDTH - WALL, 0.42, LENGTH - WALL);
    addBox(position, normal, elements, WALL, 0.42, LENGTH - WALL - 0.07, WIDTH - WALL, 0.50, LENGTH - WALL);

    // ========================================================
    // ENTRANCE: glass door and two arched windows onto the street
    // ========================================================

    entrance.addEntranceWall(builder);

    entrance.addFrames(builder);

    builder.curMat = [0, 0, 0];


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

        WIDTH - WALL,
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

        ARCH_Z

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
        34,
        39,
        44,
        49,
        54

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
    // THE NEW WING: corridor, windows, vault and far door
    // ========================================================

    wing.addWing(builder);

    builder.curMat = [0, 0, 0];


    // ========================================================
    // STATUES (far corners)
    // ========================================================

    for (const st of STATUES) {
        addStatue(builder, st.x, st.z, PEDESTAL_R, PEDESTAL_TOP);
    }


    // ========================================================
    // PLANTS (three pairs facing each other)
    // ========================================================

    for (const pl of PLANTS) {
        addPlant(builder, pl.x, pl.z, pl.seed, 1.0, pl.away);
    }

    builder.curMat = [0, 0, 0];


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

    // One picture light per painting. placement.js fills these in
    // once each painting has loaded and its size is known.
    const lights = [];

    for (let i = 0; i < 10; i++) {
        lights.push({
            c: [0, 0, 0, 0],
            d: [1, 0, 0, 0]
        });
    }


    return {

        placements,

        lights,

        statues: STATUES,

        // things standing on the floor, for soft contact shadows: [x, z, radius]
        occluders: [
            ...COLUMN_Z.flatMap((z) => [[1.25, z, 0.78], [WIDTH - 1.25, z, 0.78]]),
            [WIDTH / 2 - ARCH_COL_X, ARCH_Z, 0.86],
            [WIDTH / 2 + ARCH_COL_X, ARCH_Z, 0.86],
            ...STATUES.map((st) => [st.x, st.z, PEDESTAL_R * 1.12]),
            ...PLANTS.map((pl) => [pl.x, pl.z, 0.34])
        ],

        pedestalTop: PEDESTAL_TOP,

        mat: matArr,

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
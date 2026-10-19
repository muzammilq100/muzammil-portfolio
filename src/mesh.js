'use strict';

/*
 * RENAISSANCE GALLERY MATERIALS
 *
 * Warm ivory limestone walls
 * Dark / cream checkerboard marble floor
 * Warm architectural lighting
 * Subtle ceiling shading
 */

module.exports = (regl, data, useReflexion) => {

    return regl({

        frag: `
        precision highp float;

        varying vec3 v_pos;
        varying vec3 v_relativepos;
        varying vec3 v_normal;

        void main() {

            // ------------------------------------------------
            // BASIC MATERIAL COLOURS
            // ------------------------------------------------

            vec3 ivory =
                vec3(0.82, 0.76, 0.64);

            vec3 ivoryLight =
                vec3(0.93, 0.88, 0.76);

            vec3 marbleLight =
                vec3(0.78, 0.74, 0.65);

            vec3 marbleDark =
                vec3(0.075, 0.065, 0.055);


            // ------------------------------------------------
            // CHECKERBOARD MARBLE FLOOR
            // ------------------------------------------------

            float tileSize = 1.5;

            float tileX =
                floor(v_pos.x / tileSize);

            float tileZ =
                floor(v_pos.z / tileSize);

            float checker =
                mod(tileX + tileZ, 2.0);

            vec3 floorMaterial =
                mix(
                    marbleLight,
                    marbleDark,
                    checker
                );


            // ------------------------------------------------
            // DETERMINE FLOOR / WALL / CEILING
            // ------------------------------------------------

            float isFloor =
                step(0.5, v_normal.y);

            float isCeiling =
                step(0.5, -v_normal.y);


            // ------------------------------------------------
            // WALL MATERIAL
            // ------------------------------------------------

            float wallVariation =
                0.5 +
                0.5 *
                sin(
                    v_pos.y * 0.45 +
                    v_pos.z * 0.025
                );

            vec3 wallMaterial =
                mix(
                    ivory,
                    ivoryLight,
                    wallVariation * 0.16
                );


            // ------------------------------------------------
            // CEILING
            // ------------------------------------------------

            vec3 ceilingMaterial =
                vec3(
                    0.68,
                    0.63,
                    0.55
                );


            // ------------------------------------------------
            // COMBINE MATERIALS
            // ------------------------------------------------

            vec3 material =
                wallMaterial;

            material =
                mix(
                    material,
                    floorMaterial,
                    isFloor
                );

            material =
                mix(
                    material,
                    ceilingMaterial,
                    isCeiling
                );


            // ------------------------------------------------
            // WARM ARCHITECTURAL LIGHT
            // ------------------------------------------------

            vec3 lightDirection =
                normalize(
                    vec3(
                        -0.35,
                        0.85,
                        -0.55
                    )
                );

            float directionalLight =
                max(
                    dot(
                        normalize(v_normal),
                        lightDirection
                    ),
                    0.0
                );


            // Ambient illumination
            float light =
                0.60 +
                directionalLight * 0.40;


            // ------------------------------------------------
            // WARM LIGHT FROM THE END OF THE GALLERY
            // ------------------------------------------------

            float endLight =
                1.0 -
                smoothstep(
                    10.0,
                    42.0,
                    abs(v_pos.z - 46.0)
                );

            light +=
                endLight * 0.16;


            // ------------------------------------------------
            // SIDE WALL DEPTH
            // ------------------------------------------------

            float sideShade =
                abs(v_normal.x);

            light *=
                0.88 +
                sideShade * 0.12;


            // ------------------------------------------------
            // FINAL COLOUR
            // ------------------------------------------------

            vec3 finalColour =
                material * light;


            // Slight warm Renaissance tone
            finalColour.r *= 1.04;
            finalColour.g *= 0.98;
            finalColour.b *= 0.91;


            // ------------------------------------------------
            // DISTANCE ATMOSPHERE
            // ------------------------------------------------

            float distanceFromCamera =
                length(v_relativepos);

            float atmosphere =
                smoothstep(
                    55.0,
                    5.0,
                    distanceFromCamera
                );

            finalColour =
                mix(
                    finalColour * 0.72,
                    finalColour,
                    atmosphere
                );


            // ------------------------------------------------
            // OUTPUT
            // ------------------------------------------------

            float alpha =
                ${useReflexion
                    ? "0.98 + smoothstep(150.0, 0.0, distanceFromCamera) - v_normal.y"
                    : "1.0"
                };

            gl_FragColor =
                vec4(
                    finalColour,
                    alpha
                );
        }`,


        vert: `
        precision highp float;

        uniform mat4 proj;
        uniform mat4 view;

        attribute vec3 position;
        attribute vec3 normal;

        varying vec3 v_pos;
        varying vec3 v_relativepos;
        varying vec3 v_normal;

        uniform float yScale;


        void main() {

            vec3 pos =
                position;

            v_pos =
                pos;

            v_relativepos =
                (
                    view *
                    vec4(pos, 1.0)
                ).xyz;

            pos.y *=
                yScale;

            v_normal =
                normal;

            gl_Position =
                proj *
                view *
                vec4(
                    pos,
                    1.0
                );
        }`,


        attributes: {

            position:
                data.position,

            normal:
                data.normal
        },


        blend:
            useReflexion
                ? {
                    enable: true,
                    func: {
                        src: 'src alpha',
                        dst: 'one minus src alpha'
                    }
                }
                : {},


        elements:
            new Uint32Array(
                data.elements
            )
    });
};
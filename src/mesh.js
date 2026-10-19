'use strict';

/*
 * RENAISSANCE GALLERY MATERIALS
 * -----------------------------
 * Warm ivory limestone
 * Elegant black / cream marble
 * Warm museum illumination
 * Polished floor highlights
 * Cinematic Renaissance atmosphere
 */

module.exports = (regl, data, useReflexion) => {

    return regl({

        frag: `
        precision highp float;

        varying vec3 v_pos;
        varying vec3 v_relativepos;
        varying vec3 v_normal;
        varying vec3 v_viewnormal;


        void main() {

            // =================================================
            // MATERIAL PALETTE
            // =================================================

            // Warm ivory limestone
            vec3 limestone =
                vec3(
                    0.91,
                    0.87,
                    0.78
                );

            vec3 limestoneLight =
                vec3(
                    0.985,
                    0.955,
                    0.885
                );

            // Slightly deeper stone for architectural depth
            vec3 limestoneShadow =
                vec3(
                    0.76,
                    0.71,
                    0.62
                );

            // Marble
            vec3 marbleCream =
                vec3(
                    0.91,
                    0.895,
                    0.83
                );

            vec3 marbleBlack =
                vec3(
                    0.035,
                    0.032,
                    0.029
                );

            // Ceiling stone
            vec3 ceilingMaterial =
                vec3(
                    0.84,
                    0.80,
                    0.71
                );


            // =================================================
            // FLOOR CHECKERBOARD
            // =================================================

            // Smaller tiles than before.
            // This prevents the floor from dominating the phone
            // screen and makes it feel more like marble flooring.
            float tileSize = 0.72;

            float tileX =
                floor(v_pos.x / tileSize);

            float tileZ =
                floor(v_pos.z / tileSize);

            float checker =
                mod(
                    tileX + tileZ,
                    2.0
                );


            vec3 floorMaterial =
                mix(
                    marbleCream,
                    marbleBlack,
                    checker
                );


            // =================================================
            // SUBTLE MARBLE VARIATION
            // =================================================

            float vein =
                sin(
                    v_pos.x * 6.0 +
                    v_pos.z * 2.2 +
                    sin(v_pos.z * 1.7)
                );

            vein =
                smoothstep(
                    0.84,
                    0.98,
                    abs(vein)
                );


            floorMaterial =
                mix(
                    floorMaterial,
                    floorMaterial * 1.10,
                    vein * 0.12
                );


            // =================================================
            // SURFACE IDENTIFICATION
            // =================================================

            float isFloor =
                step(
                    0.5,
                    v_normal.y
                );

            float isCeiling =
                step(
                    0.5,
                    -v_normal.y
                );


            // =================================================
            // LIMESTONE VARIATION
            // =================================================

            float stoneNoise =
                sin(v_pos.x * 1.35) *
                sin(v_pos.z * 0.55) *
                0.5 +
                0.5;


            vec3 wallMaterial =
                mix(
                    limestone,
                    limestoneLight,
                    stoneNoise * 0.13
                );


            // Give recessed / shaded areas a little more depth.
            float architecturalShade =
                1.0 -
                smoothstep(
                    0.0,
                    1.2,
                    abs(v_normal.y)
                );

            wallMaterial =
                mix(
                    wallMaterial,
                    limestoneShadow,
                    architecturalShade * 0.08
                );


            // =================================================
            // FINAL MATERIAL
            // =================================================

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


            // =================================================
            // WARM MUSEUM KEY LIGHT
            // =================================================

            vec3 lightDirection =
                normalize(
                    vec3(
                        -0.32,
                        0.92,
                        -0.40
                    )
                );


            vec3 normal =
                normalize(v_normal);


            float diffuse =
                max(
                    dot(
                        normal,
                        lightDirection
                    ),
                    0.0
                );


            // Bright enough to make the ivory architecture
            // readable on a phone screen.
            float light =
                0.76 +
                diffuse * 0.34;


            // =================================================
            // LOWER WALL / FLOOR AMBIENT LIGHT
            // =================================================

            float lowerGlow =
                1.0 -
                smoothstep(
                    0.0,
                    3.5,
                    v_pos.y
                );


            light +=
                lowerGlow * 0.045;


            // =================================================
            // CENTRAL GALLERY LIGHT
            // =================================================

            float galleryLight =
                1.0 -
                smoothstep(
                    7.0,
                    35.0,
                    abs(v_pos.z - 29.0)
                );


            light +=
                galleryLight * 0.09;


            // =================================================
            // MASTERPIECE END LIGHT
            // =================================================

            float endLight =
                1.0 -
                smoothstep(
                    2.0,
                    16.0,
                    abs(v_pos.z - 46.0)
                );


            light +=
                endLight * 0.18;


            // =================================================
            // POLISHED MARBLE SPECULAR
            // =================================================

            vec3 viewDirection =
                normalize(
                    -v_relativepos
                );


            vec3 halfVector =
                normalize(
                    lightDirection +
                    viewDirection
                );


            float specular =
                pow(
                    max(
                        dot(
                            normalize(v_viewnormal),
                            halfVector
                        ),
                        0.0
                    ),
                    55.0
                );


            // Stronger polish on the marble floor.
            specular *=
                isFloor * 0.62;


            light +=
                specular;


            // =================================================
            // FLOOR EDGE / GRAZING HIGHLIGHT
            // =================================================

            float grazing =
                pow(
                    1.0 -
                    max(
                        dot(
                            normalize(v_viewnormal),
                            viewDirection
                        ),
                        0.0
                    ),
                    3.5
                );


            grazing *=
                isFloor * 0.10;


            // =================================================
            // FINAL COLOUR
            // =================================================

            vec3 finalColour =
                material * light;


            finalColour +=
                vec3(
                    0.045,
                    0.032,
                    0.020
                ) *
                grazing;


            // =================================================
            // WARM CINEMATIC BALANCE
            // =================================================

            finalColour.r *= 1.025;
            finalColour.g *= 1.010;
            finalColour.b *= 0.965;


            // =================================================
            // DISTANCE ATMOSPHERE
            // =================================================

            float distanceFromCamera =
                length(
                    v_relativepos
                );


            float atmosphere =
                smoothstep(
                    60.0,
                    8.0,
                    distanceFromCamera
                );


            finalColour =
                mix(
                    finalColour * 0.86,
                    finalColour,
                    atmosphere
                );


            // =================================================
            // REFLECTION ALPHA
            // =================================================

            float alpha =
                ${
                    useReflexion
                        ? 'clamp(0.96 + smoothstep(150.0, 0.0, distanceFromCamera) - v_normal.y, 0.0, 1.0)'
                        : '1.0'
                };


            gl_FragColor =
                vec4(
                    finalColour,
                    alpha
                );
        }`,


        // =====================================================
        // VERTEX SHADER
        // =====================================================

        vert: `
        precision highp float;

        uniform mat4 proj;
        uniform mat4 view;

        attribute vec3 position;
        attribute vec3 normal;

        varying vec3 v_pos;
        varying vec3 v_relativepos;
        varying vec3 v_normal;
        varying vec3 v_viewnormal;

        uniform float yScale;


        void main() {

            vec3 pos =
                position;


            v_pos =
                pos;


            v_relativepos =
                (
                    view *
                    vec4(
                        pos,
                        1.0
                    )
                ).xyz;


            v_normal =
                normal;


            v_viewnormal =
                normalize(
                    mat3(view) *
                    normal
                );


            pos.y *=
                yScale;


            gl_Position =
                proj *
                view *
                vec4(
                    pos,
                    1.0
                );
        }`,


        // =====================================================
        // ATTRIBUTES
        // =====================================================

        attributes: {

            position:
                data.position,

            normal:
                data.normal

        },


        // =====================================================
        // REFLECTION BLENDING
        // =====================================================

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


        // =====================================================
        // GEOMETRY
        // =====================================================

        elements:
            new Uint32Array(
                data.elements
            )

    });

};
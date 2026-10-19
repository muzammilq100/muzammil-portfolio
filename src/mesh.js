'use strict';

/*
 * RENAISSANCE GALLERY
 * -------------------
 * Warm ivory limestone
 * Polished black / cream marble
 * Stronger architectural lighting
 * Subtle marble variation
 * Specular highlights
 * Cinematic museum atmosphere
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
            // BASE MATERIALS
            // =================================================

            vec3 limestoneDark =
                vec3(
                    0.62,
                    0.56,
                    0.46
                );

            vec3 limestone =
                vec3(
                    0.86,
                    0.81,
                    0.70
                );

            vec3 limestoneLight =
                vec3(
                    0.98,
                    0.94,
                    0.84
                );


            vec3 marbleCream =
                vec3(
                    0.86,
                    0.83,
                    0.75
                );

            vec3 marbleBlack =
                vec3(
                    0.025,
                    0.022,
                    0.020
                );


            // =================================================
            // FLOOR CHECKERBOARD
            // =================================================

            float tileSize = 1.05;

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
            // MARBLE VEINING
            // =================================================

            float vein =
                sin(
                    v_pos.x * 5.0 +
                    v_pos.z * 2.7 +
                    sin(v_pos.z * 3.0)
                );

            vein =
                smoothstep(
                    0.78,
                    0.96,
                    abs(vein)
                );


            floorMaterial =
                mix(
                    floorMaterial,
                    floorMaterial * 1.16,
                    vein * 0.18
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
                sin(v_pos.x * 1.7) *
                sin(v_pos.z * 0.8) *
                0.5 +
                0.5;


            vec3 wallMaterial =
                mix(
                    limestone,
                    limestoneLight,
                    stoneNoise * 0.16
                );


            // =================================================
            // CEILING MATERIAL
            // =================================================

            vec3 ceilingMaterial =
                vec3(
                    0.78,
                    0.73,
                    0.64
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
            // WARM KEY LIGHT
            // =================================================

            vec3 lightDirection =
                normalize(
                    vec3(
                        -0.35,
                        0.90,
                        -0.45
                    )
                );


            float diffuse =
                max(
                    dot(
                        normalize(v_normal),
                        lightDirection
                    ),
                    0.0
                );


            // =================================================
            // AMBIENT LIGHT
            // =================================================

            float light =
                0.62 +
                diffuse * 0.42;


            // =================================================
            // FLOOR / LOWER WALL LIGHT
            // =================================================

            float lowerGlow =
                1.0 -
                smoothstep(
                    0.0,
                    3.5,
                    v_pos.y
                );


            light +=
                lowerGlow * 0.06;


            // =================================================
            // CENTRAL GALLERY LIGHT
            // =================================================

            float galleryLight =
                1.0 -
                smoothstep(
                    8.0,
                    42.0,
                    abs(v_pos.z - 30.0)
                );


            light +=
                galleryLight * 0.12;


            // =================================================
            // MASTERPIECE END LIGHT
            // =================================================

            float endLight =
                1.0 -
                smoothstep(
                    3.0,
                    18.0,
                    abs(v_pos.z - 46.0)
                );


            light +=
                endLight * 0.20;


            // =================================================
            // SPECULAR HIGHLIGHT
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
                    42.0
                );


            // Only strongly visible on polished floor
            specular *=
                isFloor * 0.42;


            light +=
                specular;


            // =================================================
            // FRESNEL SHEEN
            // =================================================

            float fresnel =
                pow(
                    1.0 -
                    max(
                        dot(
                            normalize(v_viewnormal),
                            normalize(-v_relativepos)
                        ),
                        0.0
                    ),
                    4.0
                );


            fresnel *=
                isFloor * 0.12;


            // =================================================
            // FINAL COLOUR
            // =================================================

            vec3 finalColour =
                material * light;


            finalColour +=
                vec3(
                    0.055,
                    0.035,
                    0.018
                ) * fresnel;


            // =================================================
            // WARM CINEMATIC TONING
            // =================================================

            finalColour.r *= 1.045;
            finalColour.g *= 1.010;
            finalColour.b *= 0.930;


            // =================================================
            // DISTANCE ATMOSPHERE
            // =================================================

            float distanceFromCamera =
                length(
                    v_relativepos
                );


            float atmosphere =
                smoothstep(
                    58.0,
                    7.0,
                    distanceFromCamera
                );


            finalColour =
                mix(
                    finalColour * 0.78,
                    finalColour,
                    atmosphere
                );


            // =================================================
            // OUTPUT
            // =================================================

            float alpha =
                ${
                    useReflexion
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
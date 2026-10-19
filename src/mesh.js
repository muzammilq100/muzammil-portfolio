'use strict';

/*
 * RENAISSANCE GALLERY MATERIALS
 * -----------------------------
 * Warm ivory limestone
 * Polished black / cream marble
 * Stronger cinematic museum lighting
 * Glossy floor reflections
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

      // ---------------------------------------------------------
      // MATERIAL PALETTE
      // ---------------------------------------------------------

      vec3 limestone       = vec3(0.91, 0.87, 0.78);
      vec3 limestoneLight  = vec3(0.985, 0.955, 0.885);
      vec3 limestoneShadow = vec3(0.76, 0.71, 0.62);

      vec3 marbleCream = vec3(0.91, 0.895, 0.83);
      vec3 marbleBlack = vec3(0.025, 0.023, 0.021);

      vec3 ceilingMaterial = vec3(0.84, 0.80, 0.71);


      // ---------------------------------------------------------
      // FLOOR
      // ---------------------------------------------------------
      // IMPORTANT:
      // The floor is identified by its WORLD HEIGHT,
      // not by its normal.
      //
      // This prevents the checkerboard marble from appearing
      // on the arch and other upward-facing architecture.
      // ---------------------------------------------------------

      float isFloor =
        1.0 - smoothstep(
          0.02,
          0.18,
          abs(v_pos.y)
        );

      float tileSize = 0.78;

      float tileX = floor(v_pos.x / tileSize);
      float tileZ = floor(v_pos.z / tileSize);

      float checker = mod(tileX + tileZ, 2.0);

      vec3 floorMaterial =
        mix(
          marbleCream,
          marbleBlack,
          checker
        );


      // ---------------------------------------------------------
      // SUBTLE MARBLE VEINING
      // ---------------------------------------------------------

      float vein =
        sin(
          v_pos.x * 5.5 +
          v_pos.z * 2.0 +
          sin(v_pos.z * 1.6)
        );

      vein = smoothstep(
        0.86,
        0.985,
        abs(vein)
      );

      floorMaterial =
        mix(
          floorMaterial,
          floorMaterial * 1.12,
          vein * 0.10
        );


      // ---------------------------------------------------------
      // CEILING
      // ---------------------------------------------------------

      float isCeiling =
        smoothstep(
          7.6,
          8.0,
          v_pos.y
        );


      // ---------------------------------------------------------
      // LIMESTONE WALL MATERIAL
      // ---------------------------------------------------------

      float stoneNoise =
        sin(v_pos.x * 1.35) *
        sin(v_pos.z * 0.55) *
        0.5 + 0.5;

      vec3 wallMaterial =
        mix(
          limestone,
          limestoneLight,
          stoneNoise * 0.13
        );

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


      // ---------------------------------------------------------
      // SELECT MATERIAL
      // ---------------------------------------------------------

      vec3 material = wallMaterial;

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


      // ---------------------------------------------------------
      // MAIN MUSEUM LIGHT
      // ---------------------------------------------------------

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
          dot(normal, lightDirection),
          0.0
        );

      float light =
        0.74 +
        diffuse * 0.36;


      // ---------------------------------------------------------
      // LOWER WARM GLOW
      // ---------------------------------------------------------

      float lowerGlow =
        1.0 -
        smoothstep(
          0.0,
          3.5,
          v_pos.y
        );

      light +=
        lowerGlow * 0.045;


      // ---------------------------------------------------------
      // CENTRAL GALLERY LIGHT
      // ---------------------------------------------------------

      float galleryLight =
        1.0 -
        smoothstep(
          7.0,
          35.0,
          abs(v_pos.z - 29.0)
        );

      light +=
        galleryLight * 0.09;


      // ---------------------------------------------------------
      // MASTERPIECE / END-WALL LIGHT
      // ---------------------------------------------------------

      float endLight =
        1.0 -
        smoothstep(
          2.0,
          16.0,
          abs(v_pos.z - 46.0)
        );

      light +=
        endLight * 0.18;


      // ---------------------------------------------------------
      // VIEW DIRECTION
      // ---------------------------------------------------------

      vec3 viewDirection =
        normalize(-v_relativepos);


      // ---------------------------------------------------------
      // POLISHED MARBLE SPECULAR
      // ---------------------------------------------------------
      // Stronger than the previous version.
      // This creates the visible "wet/polished" highlight.
      // ---------------------------------------------------------

      vec3 halfVector =
        normalize(
          lightDirection +
          viewDirection
        );

      float floorSpecular =
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

      floorSpecular *=
        isFloor * 1.35;

      light +=
        floorSpecular;


      // ---------------------------------------------------------
      // SECOND BROAD REFLECTION
      // ---------------------------------------------------------
      // Lower-frequency highlight makes the marble feel polished
      // rather than simply metallic.
      // ---------------------------------------------------------

      float broadSpecular =
        pow(
          max(
            dot(
              normalize(v_viewnormal),
              halfVector
            ),
            0.0
          ),
          12.0
        );

      broadSpecular *=
        isFloor * 0.22;

      light +=
        broadSpecular;


      // ---------------------------------------------------------
      // GRAZING REFLECTION
      // ---------------------------------------------------------
      // Helps the floor catch light when viewed at a shallow angle.
      // ---------------------------------------------------------

      float viewDot =
        max(
          dot(
            normalize(v_viewnormal),
            viewDirection
          ),
          0.0
        );

      float grazing =
        pow(
          1.0 - viewDot,
          3.0
        );

      grazing *=
        isFloor * 0.16;


      // ---------------------------------------------------------
      // FINAL MATERIAL
      // ---------------------------------------------------------

      vec3 finalColour =
        material * light;


      // Warm reflection at shallow angles

      finalColour +=
        vec3(
          0.055,
          0.040,
          0.025
        ) * grazing;


      // Slight warm Renaissance colour grading

      finalColour.r *= 1.025;
      finalColour.g *= 1.010;
      finalColour.b *= 0.965;


      // ---------------------------------------------------------
      // POLISHED FLOOR HIGHLIGHT
      // ---------------------------------------------------------
      // Adds a soft broad sheen specifically to the floor.
      // It remains subtle so the floor doesn't look like glass.
      // ---------------------------------------------------------

      float floorSheen =
        pow(
          max(
            dot(
              normalize(v_viewnormal),
              vec3(
                -0.15,
                0.96,
                -0.22
              )
            ),
            0.0
          ),
          7.0
        );

      floorSheen *=
        isFloor * 0.18;

      finalColour +=
        vec3(
          0.11,
          0.10,
          0.085
        ) * floorSheen;


      // ---------------------------------------------------------
      // DISTANCE ATMOSPHERE
      // ---------------------------------------------------------

      float distanceFromCamera =
        length(v_relativepos);

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


      // ---------------------------------------------------------
      // REFLECTION PASS
      // ---------------------------------------------------------

      float alpha = ${
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

      vec3 pos = position;

      // Keep original world position for material calculations.
      v_pos = pos;

      v_relativepos =
        (view * vec4(pos, 1.0)).xyz;

      v_normal =
        normal;

      v_viewnormal =
        normalize(
          mat3(view) * normal
        );

      pos.y *= yScale;

      gl_Position =
        proj *
        view *
        vec4(
          pos,
          1.0
        );
    }`,

    attributes: {
      position: data.position,
      normal: data.normal
    },

    blend: useReflexion
      ? {
          enable: true,
          func: {
            src: 'src alpha',
            dst: 'one minus src alpha'
          }
        }
      : {},

    elements:
      new Uint32Array(data.elements)
  });
};
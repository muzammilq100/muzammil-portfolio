'use strict';

/*
 * RENAISSANCE GALLERY MATERIALS
 * -----------------------------
 * Warm greige plaster walls with a soft mottled finish
 * Veined cream marble for pillars, arch and skirting
 * Glossy black and dark-cream marble floor with light reflections
 * Dim, moody museum lighting
 */

module.exports = (regl, data, useReflexion) => {
  return regl({
    frag: `
    precision highp float;

    uniform float yScale;

    varying vec3 v_pos;
    varying vec3 v_relativepos;
    varying vec3 v_normal;
    varying vec3 v_eye;

    // ---------------------------------------------------------
    // SMALL NOISE TOOLKIT
    // ---------------------------------------------------------

    float hash12(vec2 p) {
      vec3 p3 = fract(vec3(p.x, p.y, p.x) * 0.1031);
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.x + p3.y) * p3.z);
    }

    float vnoise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      return mix(
        mix(hash12(i), hash12(i + vec2(1.0, 0.0)), f.x),
        mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), f.x),
        f.y
      );
    }

    float fbm(vec2 p) {
      float s = 0.0;
      float a = 0.5;
      for (int i = 0; i < 3; i++) {
        s += a * vnoise(p);
        p = p * 2.03 + vec2(1.7, 9.2);
        a *= 0.5;
      }
      return s;
    }

    float fadeFar(float a, float b, float x) {
      return 1.0 - smoothstep(a, b, x);
    }

    float bell(float x) {
      return exp(-x * x);
    }

    // 2D texture coordinates picked from the dominant axis of the face
    vec2 planeUV(vec3 p, vec3 n) {
      vec3 a = abs(n);
      if (a.x > 0.5) return p.zy;
      if (a.z > 0.5) return p.xy;
      return p.xz;
    }

    void main() {

      vec3 N = normalize(v_normal);
      vec3 V = normalize(v_eye - v_pos);
      float dist = length(v_relativepos);

      // The mirrored floor pass skips the expensive noise detail.
      bool detail = yScale > 0.0;

      // ---------------------------------------------------------
      // SURFACE CLASSIFICATION
      // ---------------------------------------------------------

      // Floor: an upward face lying at y = 0 (not column bases)
      float isFloor =
        step(0.99, N.y) *
        (1.0 - smoothstep(0.01, 0.05, abs(v_pos.y)));

      // Ceiling and coffer undersides
      float isCeiling =
        step(N.y, -0.9) * step(6.5, v_pos.y);

      // The four plain room walls (plaster). Everything else that is
      // vertical (pillars, arch, skirting) is marble.
      float isShell = clamp(
        step(abs(v_pos.x - 0.35), 0.02) * step(0.5, N.x) +
        step(abs(v_pos.x - 13.65), 0.02) * step(0.5, -N.x) +
        step(abs(v_pos.z - 47.65), 0.02) * step(0.5, -N.z) +
        step(abs(v_pos.z - 0.35), 0.02) * step(0.5, N.z),
        0.0, 1.0);


      // ---------------------------------------------------------
      // MATERIAL PALETTE (warm greige, like the reference gallery)
      // ---------------------------------------------------------

      vec3 plaster      = vec3(0.71, 0.65, 0.54);
      vec3 plasterShade = vec3(0.60, 0.54, 0.44);
      vec3 marbleBase   = vec3(0.79, 0.74, 0.64);
      vec3 marbleVein   = vec3(0.46, 0.41, 0.34);
      vec3 ceilingMat   = vec3(0.56, 0.51, 0.42);

      vec3 tileLight    = vec3(0.80, 0.74, 0.60);   // darker cream instead of white
      vec3 tileDark     = vec3(0.028, 0.026, 0.024);


      // ---------------------------------------------------------
      // WALL / PILLAR MATERIAL
      // ---------------------------------------------------------

      vec2 uv = planeUV(v_pos, N);

      // Plaster: soft mottled limestone wash
      vec3 wallMaterial = plaster;
      if (detail) {
        float mott = fbm(uv * 0.9);
        float cloud = fbm(uv * 2.6 + 4.0);
        wallMaterial = mix(plaster, plasterShade, smoothstep(0.35, 0.75, mott) * 0.55);
        wallMaterial *= 0.95 + 0.10 * cloud;
      }

      // Marble: warped veins with a cloudy body
      vec3 marbleMaterial = marbleBase;
      if (detail) {
        vec2 m = uv * 1.3;
        float warp = fbm(m * 0.8);
        float v1 = abs(sin((m.x * 0.8 + m.y * 1.7) * 2.2 + warp * 7.0));
        float v2 = abs(sin((m.x * 1.9 - m.y * 0.6) * 4.5 + warp * 11.0));
        float line1 = 1.0 - smoothstep(0.0, 0.10, v1);
        float line2 = 1.0 - smoothstep(0.0, 0.05, v2);
        marbleMaterial = marbleBase * (0.90 + 0.18 * warp);
        marbleMaterial = mix(marbleMaterial, marbleVein, clamp(line1 * 0.50 + line2 * 0.25, 0.0, 1.0));
      }

      vec3 material = mix(marbleMaterial, wallMaterial, isShell);


      // ---------------------------------------------------------
      // FLOOR MATERIAL: polished chequered marble
      // ---------------------------------------------------------

      float tileSize = 0.78;
      vec2 tile = floor(v_pos.xz / tileSize);
      float checker = mod(tile.x + tile.y, 2.0);
      float rnd = hash12(tile);

      vec3 lightTile = tileLight * (0.93 + 0.10 * rnd);
      vec3 darkTile  = tileDark + vec3(0.012) * rnd;

      float vein = abs(sin(v_pos.x * 5.5 + v_pos.z * 2.0 + sin(v_pos.z * 1.6) + rnd * 6.0));
      vein = 1.0 - smoothstep(0.0, 0.09, vein);

      vec3 floorMaterial = mix(lightTile, darkTile, checker);
      floorMaterial = mix(floorMaterial, floorMaterial * 0.80, vein * 0.35 * (1.0 - checker));
      floorMaterial = mix(floorMaterial, floorMaterial * 1.5 + 0.02, vein * 0.18 * checker);

      // hair-line grout between tiles
      vec2 tf = fract(v_pos.xz / tileSize);
      float edge = min(min(tf.x, 1.0 - tf.x), min(tf.y, 1.0 - tf.y)) * tileSize;
      float grout = (1.0 - smoothstep(0.0, 0.006, edge)) * fadeFar(8.0, 30.0, dist);
      floorMaterial *= 1.0 - 0.28 * grout;

      material = mix(material, floorMaterial, isFloor);
      material = mix(material, ceilingMat, isCeiling);


      // ---------------------------------------------------------
      // MUSEUM LIGHTING (dimmer, moodier)
      // ---------------------------------------------------------

      vec3 lightDirection = normalize(vec3(-0.32, 0.92, -0.40));
      float diffuse = max(dot(N, lightDirection), 0.0);

      float light = 0.62 + diffuse * 0.26;

      // Soft pools of spot-light on the walls where the paintings hang
      float wash =
        bell((v_pos.z - 34.5) / 3.8) +
        bell((v_pos.z - 44.2) / 3.4) * 1.1 +
        bell((v_pos.z - 47.0) / 3.6) * 0.8;
      wash *= bell((v_pos.y - 4.2) / 2.9);
      light += wash * 0.14 * (1.0 - isFloor);

      // Corridor glow and the end wall light
      light += (1.0 - smoothstep(7.0, 35.0, abs(v_pos.z - 29.0))) * 0.06;
      light += (1.0 - smoothstep(2.0, 16.0, abs(v_pos.z - 46.0))) * 0.14;

      // Walls fall into shadow towards the ceiling
      light *= mix(0.80, 1.0, min(1.0, fadeFar(4.5, 8.0, v_pos.y) + isFloor));

      light += (1.0 - smoothstep(0.0, 3.5, v_pos.y)) * 0.03;

      vec3 finalColour = material * light;


      // ---------------------------------------------------------
      // GLOSSY FLOOR: lamp reflections + fresnel
      // ---------------------------------------------------------

      float reflectivity = 0.0;

      if (isFloor > 0.5) {
        float spec = 0.0;
        for (int i = 0; i < 7; i++) {
          vec3 lampPos = vec3(7.0, 7.6, 4.0 + float(i) * 7.0);
          vec3 L = normalize(lampPos - v_pos);
          vec3 H = normalize(L + V);
          float nh = max(H.y, 0.0);
          spec += pow(nh, 220.0) * 1.6 + pow(nh, 40.0) * 0.16;
        }
        finalColour += vec3(1.0, 0.92, 0.76) * spec * 0.75;

        float viewDot = max(V.y, 0.0);
        float fres = pow(1.0 - viewDot, 3.0);
        reflectivity = clamp(0.20 + 0.55 * fres, 0.0, 0.80);
        reflectivity *= 0.55 + 0.45 * fadeFar(6.0, 70.0, dist);

        // fallback sheen when the mirrored pass is switched off
        ${useReflexion ? '' : 'finalColour += vec3(0.10, 0.09, 0.07) * fres;'}
      }


      // ---------------------------------------------------------
      // GRADING + ATMOSPHERE
      // ---------------------------------------------------------

      finalColour.r *= 1.025;
      finalColour.g *= 1.008;
      finalColour.b *= 0.955;

      float atmosphere = fadeFar(8.0, 60.0, dist);
      finalColour = mix(finalColour * 0.72, finalColour, atmosphere);

      float alpha = ${
        useReflexion
          ? '1.0 - reflectivity'
          : '1.0'
      };

      gl_FragColor = vec4(finalColour, alpha);
    }`,

    vert: `
    precision highp float;

    uniform mat4 proj;
    uniform mat4 view;
    uniform float yScale;

    attribute vec3 position;
    attribute vec3 normal;

    varying vec3 v_pos;
    varying vec3 v_relativepos;
    varying vec3 v_normal;
    varying vec3 v_eye;

    void main() {

      vec3 pos = position;

      // Keep original world position for material calculations.
      v_pos = pos;
      v_normal = normal;
      v_relativepos = (view * vec4(pos, 1.0)).xyz;

      // Camera position in world space, recovered from the view matrix
      vec3 t = view[3].xyz;
      v_eye = -vec3(
        dot(view[0].xyz, t),
        dot(view[1].xyz, t),
        dot(view[2].xyz, t)
      );

      pos.y *= yScale;

      gl_Position = proj * view * vec4(pos, 1.0);
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

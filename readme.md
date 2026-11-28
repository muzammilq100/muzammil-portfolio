# Muzammil · A Virtual Gallery

Oil paintings by Muzammil, hung in a Renaissance-inspired gallery you can walk through in the browser.

Live: https://muzammil-gallery.pages.dev (backup: GitHub Pages)

## Working on it

```shell
npm install
npm start          # builds into dist/ and serves it at http://localhost:8000
npm run build      # the finished site in dist/ (what gets published)
npm run images     # after adding or replacing a painting's photo (needs Python + Pillow)
```

Pushing to `master` builds the site and publishes it to Cloudflare Pages and GitHub Pages
(`.github/workflows/build-and-deploy.yml`).

## Where things are

- `content/paintings.js` – every painting: photo, title, medium, real size, and its words.
  To add a painting, put its photo in `images/`, add an entry here, run `npm run images`.
- `src/contact.js` – Instagram and email, shown across the site.
- `src/about.js` – the words on the About card.
- `base.html` – the page itself: title, link preview, loading screen.
- `static/` – icons, the link-preview picture (`og.jpg`) and Cloudflare's cache rules (`_headers`).
- `src/painting.js` – the paintings (canvas weave, varnish, light pool) and their gilded frames.
- `src/mesh.js` – the architecture's materials and light (marble, plaster, the floor).
- `src/lightmap.js` – baked light: the light on the architecture's flat faces (floors, walls, ceilings, pillar faces) is worked out once, on the visitor's device while the loading screen is up, into a light picture for day and one for night (`mesh.js`, "BAKED LIGHT"), instead of every frame. Curved and moving things keep their light live. Add `?nobake` to the address to see it all worked out live, as before.
- `src/bake.js` – the same for the rooms whose faces are curved or slanted: lays them flat in bent strips and runs a room's bake. The piano room bakes each candle's light separately (its flicker stays live); the red room bakes its windows' light and lattice, still ambient, safelights and bounce (the screens, sign, candles and spot stay live). The candles' flicker in all three rooms is worked out once a frame, not for every pixel, and each room is drawn once out of sight before the visitor steps in (`index.js`, warmDraw), so its shaders are ready.
- `src/tour.js` – the cinematic tour; `src/fps.js` – free walking.
- `src/studiotour.js` – the studio's tour (?studio): a petal of bougainvillea leads the camera, scroll by scroll: it falls from the roof past the nymph's face and her roses, skims the pool, circles half the rotunda, and settles on the grave inside it while the wind works the cloth.
- `src/studio.js` – the painter's studio (a leaded glass roof hung with bougainvillea, rough stone slab walls with arched windows on one side, bougainvillea and green vines climbing between them, ivy and dark red climbing roses on the others, a flagstone floor with grass and weeds in its joints; the red Gothic door through to the piano room, and facing it an old stone niche with the nymph, res/nymph.bin, inside, and a weathered stone lily pool running from the niche back towards the door). Not joined to the gallery yet: open the site with `?studio` (add `&night` for night) to look round it; a tap turns day to night.
- `src/redroom.js` – the red room: red plaster walls and pointed vault, a wet-looking red lacquer floor that mirrors the room, four tall Gothic windows down each long wall (two lancets, a ring in the head, leaded diamond panes of deep red glass) whose red light lies on the floor and hangs in the air; a darkroom along the left wall by the door where two windows were walled up (a tiled sink with three trays of black liquid, his childhood photograph developing in the first as the camera comes close, tongs, a tap, a bare red bulb, chemical jugs, prints drying on lines between the shafts under a red tube); blurred polaroids of his photographs pinned between the windows; before the far wall twelve old televisions stacked close, all facing the door, their screens buzzing with snow through which his memories surface; a vintage two-reel film projector on a tall table in the middle, its reels turning, throwing his memories as old film over the televisions onto the bare far wall (their shadows in the picture); a red darkroom safelight; and one thick black cable through the whole room, the line the camera will follow (CABLE.path). The photographs are in `res/redroom/memories.webp` and `polaroids.webp`, sixteen to a sheet. Not joined to the gallery yet: open the site with `?redroom` and swipe, scroll or tap through a few shots (`src/redtour.js`). It is the studio's size and, for now, stands in the studio's place.
- Red room table and chairs: "Old wooden table and chair" by MaX3Dd (https://sketchfab.com/3d-models/old-wooden-table-and-chair-da18a40480ec42d6920a2a828d10018c), CC BY 4.0; wood darkened, seats recoloured dark red.
- Red room candlesticks: "Candlestick" by FlukierJupiter (https://sketchfab.com/3d-models/candlestick-d1a0b96e5b3e44a9ba548ba9a8864c0d), CC BY 4.0; candle cut to different lengths.
- Red room darkroom camera: "Camera" by White_sniper (https://sketchfab.com/3d-models/camera-8e561c5fc7b6489dadae9c02de30f2db), CC BY 4.0. It now lies on the sink's tiles beside the developer (the shelf is gone).
- Red room darkroom enlarger: "Krokus 66 enlarger" by the Museum of Engineering and Technology, Krakow (https://sketchfab.com/3d-models/krokus-66-enlarger-eb989ade028f42918d772fefb614590a), CC BY-NC-SA 4.0; simplified to about 10,000 triangles, in `res/redroom/enlarger_*`. That licence allows no commercial use, and this adapted copy is shared under the same licence.
- Red room letters: "Paper letters - Zivid 3D machine vision" by Zivid (https://sketchfab.com/3d-models/paper-letters-zivid-3d-machine-vision-bd0444415ab94b00a076b91fc0dcb86b), CC BY 4.0; the scan's points rebuilt as a surface with its paper's outline, in `res/redroom/letters_*`.
- Red room mug: "Cup" by Dmytro Nikonov (https://sketchfab.com/3d-models/cup-7d450bb714034fceaa7b59a0e564f46b), CC BY 4.0.
- Red room books: "Vintage Books" by feivelyn (https://sketchfab.com/3d-models/vintage-books-7a9bedf1e85c4f85b1b384dbdadadee9), CC BY-NC 4.0 (no commercial use); the set split into its stacks and single books, in `res/redroom/books_*`.
- Red room ashtray: "Vintage Metal Ashtray" by Mattyew (https://sketchfab.com/3d-models/vintage-metal-ashtray-e3a5fd374386419680a26a3acaa18728), CC BY 4.0.
- Her veil (`res/redroom/veil.bin`): a circle of sheer net let fall on her head as cloth (worked out once, pinned at the crown, resting on her shoulders); in the room it gathers into folds, stirs, and rises and falls with her breath.
- The projector plays only his clips (`res/redroom/reel.mp4`, 400 x 300, his phone clips cropped to 4:3), no stills between them.
- His two letters (`res/redroom/letters_real.webp`, photographed, straightened and evened out) lie open on the table before a chair pushed back and turned aside; the tour comes down over the table and close to each, near enough to read.
- The cigarette in the darkroom's ashtray, still burning, its thread of smoke curling up into the red light.
- The cable's heartbeat: pulses of light run along the black cable from its socket to the televisions, lub-dub, quicker as the camera nears her, with an electric buzz (made in the browser, no sound files). The projector clicks at every change of clip or still.
- `src/listview.js` – all paintings as a plain list (`#list`, and the fallback without 3D).
- `source/` – source files that are not published (e.g. the Blender wall model).

Based on [Virtual Art Gallery](https://github.com/ClementCariou/virtual-art-gallery) by Clément Cariou (MIT).

## Statue credits

The two statues are real 3D scans, slimmed down for the web and stored in `res/venus.bin` and `res/david.bin`:

- Venus de Milo, scan by SMK (Statens Museum for Kunst), via Scan the World / MyMiniFactory
- Michelangelo's David, scan via Scan the World / MyMiniFactory

## The studio pond: credits

- Koi model: "Koi Fish" by SDPM Esare (https://sketchfab.com/3d-models/koi-fish-3e1b80c3653f43349252aab3b4fb1d86), licensed under CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). Straightened along its spine and repacked as `res/koi.bin` and `res/koi.webp`; recoloured in the shader for the yamabuki and orange koi.
- Lily pad and petal textures: "Water lily" by ivanzubak on TurboSquid (free), in `res/pond/`.
- Gravel: Gravel030 from ambientCG (CC0), in `res/pond/gravel.jpg`.
- Stone: "Coral Stone Wall" by Dimitrios Savva (the rough slab walls) and "Large Sandstone Blocks 01" by Rob Tuytel (the niche and the pool), both from Poly Haven (https://polyhaven.com, CC0), in `res/studio/` (colour, and the normal map with the hollows packed in its blue).
- Floor: "Grassy Cobblestone" by Dario Barresi and Charlotte Baglioni, from Poly Haven (CC0), in `res/studio/floor_*`.
- The roses left before: every visitor's rose stays on the grave for those who come after. They are kept by a Cloudflare Pages Function (`functions/api/roses.js`, at `/api/roses`) in Workers KV; the deploy workflow makes the KV namespace (`muzammil-gallery-roses`) and binds it as `ROSES` (the Cloudflare token needs the "Workers KV Storage: Edit" permission). One rose a day from one visitor. The newest six are fresh; each one older is darker and wilted, with petals fallen on the stone. The live site and the preview keep separate lists. Without the server (the GitHub Pages copy) a visitor sees only their own roses, kept in their browser. The pile uses a lighter copy of the rose (`res/conservatory/rose_lo.bin`).
- The visitor's rose in the Conservatory of Unsaid Things: "Red rose" by Lassi Kaukonen (https://sketchfab.com/3d-models/red-rose-74520e87c3ed46898668c83356dd9cfa), CC BY 4.0; simplified and repacked as `res/conservatory/flower.bin` and `res/conservatory/flower.webp`.
- Grave: the photographed ledger grave and headstone he supplied (gravestone_lowpoly.obj with its texture), levelled, scaled and repacked as `res/studio/grave.bin` and `res/studio/grave.webp`.
- Cloth: the folds of the rotunda's red netting follow a draped-cloth simulation he supplied (Nylon_Canvas.glb, a CLO export); only the fold profile round its hem is used, in `src/studio.js` (CLOTH_FOLD).
- Rose: the climbing roses' blooms are based on "Pink Rose" (https://sketchfab.com/3d-models/pink-rose-60514b3b9bf244dea1ea8f3c8f6c6124) by mtaesiri (https://sketchfab.com/mtaesiri), licensed under CC BY 4.0 (http://creativecommons.org/licenses/by/4.0/); simplified and recoloured dark red, in `res/studio/rose.bin` and `rose_col.webp`.
- Vine leaves: the vines' broad leaves are based on "Grape vines" (https://sketchfab.com/3d-models/grape-vines-c735dedcc9c24171adf670d0deea9682) by tribeimmersive (https://sketchfab.com/tribeimmersive), licensed under CC BY-NC-SA 4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/): eight leaves cut from the scan with their curl, in `res/studio/vleaves.webp` (and their heights in `src/studio.js`). That licence allows no commercial use, and these adapted leaves are shared under the same licence.
- Plants: ivy leaves (LeafSet017), lobed leaves (LeafSet029), rose leaves (LeafSet024), grass blades (Foliage001) and daisies (FlowerSet001) from ambientCG (https://ambientcg.com, CC0), cut out and packed into `res/studio/plants.webp` with a dark red rose petal painted for it; each rose is built from those petals in rings.

## The street outside

The view through the entrance door and windows is built from a photograph of a street in Padua taken by Muzammil (`res/street/photo.jpg`). The photo's camera was measured from its perspective lines and the street rebuilt as simple 3D surfaces, so the photo lines up from where it was taken and gains real depth as you move.

## The cinematic tour

The gallery now opens with a guided, cinematic tour instead of dropping the visitor straight into walking mode. Each swipe (or scroll, arrow key, tap or click) plays one camera move:

1. **The corridor** – a slow push down the window corridor towards the light of the far door.
2. **Through the light** – the camera rushes the door, the picture blooms to white, and it comes out under the glass dome of the tree court, sinking through the branches to the artist and the About text.
3. **The leaf** – a leaf lets go of the tree; the camera follows it out through the arch and up into the sunlight under the skylight.
4. **Down the hall** – the leaf drifts down the hall and lands on the polished floor in front of the masterpiece; the camera rises to reveal it.
5. **Its story** – the camera eases aside and the title writes itself in, followed by the description.
6. **Footsteps** – down at the leaf on the floor; the artist's shoes walk into a close, letterboxed shot, and as he passes, his step lifts the leaf back into the air.
7. **The corridor** – the leaf drifts into the window corridor and hangs before the first painting, then the second (a little lower), each with its story, turning gently while you read.
8. **The third painting and the door** – it hangs low before the third painting, then sinks to rest on the floor before the far door.
9. **The gust** – the door bursts open; the wind flings the leaf back up the corridor past the windows and the garden, into the main hall.
10. **The hall** – it stops before each painting on one wall, curls out round the grand arch between its column and the wall, comes back in on the other side and stops before each painting on the other wall.
11. **The end** – it falls into the sunlight under the skylight; the camera looks down on it lying in the pattern of the glazing, dust turning in the light.

The camera only moves while you scroll or swipe, easing to a stop when you stop, and settling onto a shot (with its words) when you stop near one. Arrow keys, Space and taps glide on to the next shot. "Explore freely" (top right) or Escape hands over to the normal walking mode at any time, from wherever the tour is.

Where it lives:

- `src/tour.js` – the shots, the camera moves between them, the leaf's path, the words on screen and the swipe/scroll/key handling. Each shot is framed twice, for a phone held upright and for a wide screen.
- `src/post.js` – the "film camera": the gallery is drawn off-screen and finished with light shafts (worked out from the real skylight, dome, window and door openings, so the glazing bars show in the beams), glow, depth of field, a darker filmic grade, vignette, grain, letterbox bars and fades. It also smooths edges (FXAA). Phones get a lighter version, and it steps down automatically on slow devices (see `quality.js`).
- `src/leaf.js` – the falling leaf, lit by the same sun as the room.
- `src/avatar.js` – also has the artist's walk (a gait cycle for hips, knees, ankles and toes, with the stance foot kept on the floor), used for the footsteps shot.
- `src/dust.js` – dust motes that glint only inside the sunbeams.
- `src/fardoor.js` – the corridor's far door, built as two hinged leaves so the gust can throw them open.

The overall darkness and the strength of the effects are set in `LOOK` at the top of `src/post.js`; each shot's own exposure, depth of field and letterbox are in `SHOTS` in `src/tour.js`.

## The Conservatory of Unsaid Things

Behind "Love me like I am Already Dead" (src/conservatory.js): a way in under its story asks a question, and the right answer offers "Bring a flower while it still matters". The camera goes into the red of the painting and out of the red of the conservatory's door, rises to the bougainvillea, and the petal's tour (src/studiotour.js) begins; at the end the visitor lays a rose on the grave. The room (src/studio.js) and its tour are built into their own file, `dist/conservatory.js`, and nothing of it, nor any of its pictures, is fetched until a visitor answers. `?studio` opens the room on its own.

## The red room: credits

- "Sony PVM-14L2 CRT TV" by Poring (https://sketchfab.com/3d-models/sony-pvm-14l2-crt-tv-ab19c2419c2647299ce96d027b3e7f5e), licensed under CC BY 4.0 (http://creativecommons.org/licenses/by/4.0/); repacked as `res/redroom/tv_sony.bin` with its textures shrunk.
- "CRT TV" by Timothy Ahene (https://sketchfab.com/3d-models/crt-tv-9ba4baa106e64319a0b540cf0af5aa9e), Sketchfab Standard licence; repacked as `res/redroom/tv_crt.bin`.
- "Old TV" by tinderboxh (https://sketchfab.com/3d-models/old-tv-8ee8454ea06b47f1b204dfefb7af8e24), licensed under CC BY 4.0; repacked as `res/redroom/tv_old.bin`.
- "GAP - deco object - vintage projector" by Hana Soojin E Stoffels (https://sketchfab.com/3d-models/gap-deco-object-vintage-projector-d6ed3f8ad84b47b5867e2addc3ccf586), licensed under CC BY 4.0; taken apart into its body and two reels (`res/redroom/proj_*.bin`).
- "Side Table Tall 01" from Poly Haven (https://polyhaven.com, CC0).
- Darkroom props from Poly Haven (https://polyhaven.com, CC0): "Plastic Bottle Gallon", "Multi Cleaner 5 Litre", "Pull Chain Light Socket" and "Lightbulb 01".

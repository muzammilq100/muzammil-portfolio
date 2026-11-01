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
- `src/tour.js` – the cinematic tour; `src/fps.js` – free walking.
- `src/listview.js` – all paintings as a plain list (`#list`, and the fallback without 3D).
- `source/` – source files that are not published (e.g. the Blender wall model).

Based on [Virtual Art Gallery](https://github.com/ClementCariou/virtual-art-gallery) by Clément Cariou (MIT).

## Statue credits

The two statues are real 3D scans, slimmed down for the web and stored in `res/venus.bin` and `res/david.bin`:

- Venus de Milo, scan by SMK (Statens Museum for Kunst), via Scan the World / MyMiniFactory
- Michelangelo's David, scan via Scan the World / MyMiniFactory

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

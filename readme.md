# [Virtual Art Gallery](https://clementcariou.github.io/virtual-art-gallery/build) [![Build Status](https://github.com/ClementCariou/virtual-art-gallery/actions/workflows/build-and-deploy.yml/badge.svg)](https://github.com/ClementCariou/virtual-art-gallery/actions/workflows/build-and-deploy.yml)

[![screenshot](ArtGallery.png "App screenshot")](https://clementcariou.github.io/virtual-art-gallery/build)

## Description

This project simulates an art gallery in your browser using [REGL](https://github.com/regl-project/regl).
It aims at reproducing the experience of a real art gallery.
The architecture is generated using a 10km long 6th order [Hilbert Curve](https://en.wikipedia.org/wiki/Hilbert_curve).
The paintings are asynchronously loaded from the [ARTIC](https://api.artic.edu) and placed on the walls.
You can use this project to display your own artworks.

## Setup

Installation :
```shell
git clone https://github.com/ClementCariou/virtual-art-gallery.git
npm install
```
Start the budo dev server : 
```shell
npm start
```
Build : 
```shell
npm build
```

## Using it with [local images](https://clementcariou.github.io/virtual-art-gallery/build?api=local)

The local api is accessible using this URI params in the address bar: ```?api=local``` (it's possible to load automatically this API by changing the default API in the [api.js](api/api.js) file). You can change the displayed images in the folder [images](images), you will need to rebuild the project (or relauch the dev server) to apply the modifications.

Muzammil Portfolio

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
8. **The door** – it sinks and comes to rest on the floor before the far door, where the tour ends.

The camera only moves while you scroll or swipe, easing to a stop when you stop, and settling onto a shot (with its words) when you stop near one. Arrow keys, Space and taps glide on to the next shot. "Explore freely" (top right) or Escape hands over to the normal walking mode at any time, from wherever the tour is.

Where it lives:

- `src/tour.js` – the shots, the camera moves between them, the leaf's path, the words on screen and the swipe/scroll/key handling. Each shot is framed twice, for a phone held upright and for a wide screen.
- `src/post.js` – the "film camera": the gallery is drawn off-screen and finished with light shafts (worked out from the real skylight, dome, window and door openings, so the glazing bars show in the beams), glow, depth of field, a darker filmic grade, vignette, grain, letterbox bars and fades. It also smooths edges (FXAA). Phones get a lighter version, and it steps down automatically on slow devices (see `quality.js`).
- `src/leaf.js` – the falling leaf, lit by the same sun as the room.
- `src/avatar.js` – also has the artist's walk (a gait cycle for hips, knees, ankles and toes, with the stance foot kept on the floor), used for the footsteps shot.
- `src/dust.js` – dust motes that glint only inside the sunbeams.

The overall darkness and the strength of the effects are set in `LOOK` at the top of `src/post.js`; each shot's own exposure, depth of field and letterbox are in `SHOTS` in `src/tour.js`.

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

The view through the entrance door and windows is built from a photograph of a street in Padua taken by Muzammil (`res/street/photo.jpg`). The photo's camera was measured from its perspective lines and the street rebuilt as simple 3D surfaces, so the photo lines up from where it was taken and gains real depth as you move. The figures in the street are painted in code when the page loads (`src/streetlife.js`).

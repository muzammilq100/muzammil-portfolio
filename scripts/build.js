'use strict';

/*
 * BUILD
 * -----
 *   npm run build     makes the finished site in dist/
 *   npm start         the same, then serves dist/ at http://localhost:8000
 *                     and rebuilds the code whenever a file in src/ changes
 *
 * dist/ holds: index.html (from base.html), app.js (all of src/ in one
 * small file), res/ (with a gzipped copy of every .bin), images/ (the web
 * copies and the originals) and everything in static/ (icons, the link
 * preview picture, Cloudflare's _headers).
 *
 * The site's address (for the link preview) comes from SITE_URL, or
 * defaults to the Cloudflare one.
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const crypto = require('crypto');
const esbuild = require('esbuild');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SITE = (process.env.SITE_URL || 'https://muzammil-gallery.pages.dev').replace(/\/$/, '');
const serve = process.argv.includes('--serve');

const BUNDLE = {
	entryPoints: [path.join(ROOT, 'src/index.js')],
	bundle: true,
	minify: true,
	format: 'iife',
	target: 'es2018',
	outfile: path.join(DIST, 'app.js'),
	legalComments: 'none',
	logLevel: 'warning'
};

function copyDir(from, to, filter = () => true) {
	if (!fs.existsSync(from)) return;
	fs.mkdirSync(to, { recursive: true });
	for (const name of fs.readdirSync(from)) {
		const a = path.join(from, name), b = path.join(to, name);
		if (fs.statSync(a).isDirectory()) copyDir(a, b, filter);
		else if (filter(a)) fs.copyFileSync(a, b);
	}
}

function writeHtml() {
	const app = fs.readFileSync(path.join(DIST, 'app.js'));
	const v = crypto.createHash('sha1').update(app).digest('hex').slice(0, 10);
	const html = fs.readFileSync(path.join(ROOT, 'base.html'), 'utf8')
		.replace(/%APP%/g, 'app.js?v=' + v)
		.replace(/%SITE%/g, SITE);
	fs.writeFileSync(path.join(DIST, 'index.html'), html);
}

function copyAssets() {
	// 3D models, textures; every .bin also gets a .bin.gz (see src/loader.js)
	copyDir(path.join(ROOT, 'res'), path.join(DIST, 'res'));
	for (const f of walk(path.join(DIST, 'res'))) {
		if (f.endsWith('.bin')) fs.writeFileSync(f + '.gz', zlib.gzipSync(fs.readFileSync(f), { level: 9 }));
	}
	// the paintings: web copies, and the originals as a fallback
	copyDir(path.join(ROOT, 'images'), path.join(DIST, 'images'), (f) => /\.(jpe?g|png|webp)$/i.test(f));
	copyDir(path.join(ROOT, 'static'), DIST);
}

function walk(dir) {
	return fs.readdirSync(dir).flatMap((n) => {
		const f = path.join(dir, n);
		return fs.statSync(f).isDirectory() ? walk(f) : [f];
	});
}

async function main() {
	fs.rmSync(DIST, { recursive: true, force: true });
	fs.mkdirSync(DIST, { recursive: true });
	copyAssets();

	if (!serve) {
		await esbuild.build(BUNDLE);
		writeHtml();
		const kb = (f) => (fs.statSync(path.join(DIST, f)).size / 1024).toFixed(0) + ' KB';
		console.log('Built dist/ (app.js ' + kb('app.js') + ')');
		return;
	}

	const ctx = await esbuild.context({
		...BUNDLE,
		minify: false,
		sourcemap: true,
		plugins: [{ name: 'html', setup(b) { b.onEnd(() => { try { writeHtml(); } catch (e) { console.error(e); } }); } }]
	});
	await ctx.watch();
	const { port } = await ctx.serve({ servedir: DIST, port: 8000 });
	console.log('Gallery at http://localhost:' + port);
}

main().catch((e) => { console.error(e); process.exit(1); });

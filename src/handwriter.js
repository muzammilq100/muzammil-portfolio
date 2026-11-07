/*
 * HANDWRITER
 * ----------
 * Writes text in Muzammil's own handwriting, stroke by stroke, the way a
 * pen moves: each letter is one of several versions traced from his
 * writing, laid down with small natural differences in size, angle and
 * baseline; the pen eases into and out of every stroke, lifts briefly
 * between letters and pauses after words and full stops.
 *
 *   const w = HandWriter(canvas, GLYPHS, { ink: '#2a1d12', xh: 15, speed: 9 });
 *   w.write('Some words.');     // starts writing
 *   w.finish();                 // shows it all at once
 */
'use strict';

function rng(seed) {
	let s = seed >>> 0 || 1;
	return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

const PAUSE0 = { stroke: 0.05, letter: 0.045, word: 0.15, comma: 0.28, stop: 0.45, line: 0.25, para: 0.6 };
const BIGRAMS = ['th', 'ng', 'er'];

function HandWriter(canvas, G, opts) {
	opts = Object.assign({ ink: '#2a1d12', xh: 14, speed: 23, lineHeight: 2.85, seed: 7, width: 0.12, pace: 0.45 }, opts || {});
	const ctx = canvas.getContext('2d');
	// the pauses, scaled with the writing pace
	const PAUSE = {}; Object.keys(PAUSE0).forEach((k) => { PAUSE[k] = PAUSE0[k] * opts.pace; });
	let strokes = [], total = 0, raf = 0, t0 = 0, drawn = [];

	function layout(text, cssWidth) {
		const R = rng(opts.seed);
		const xh = opts.xh;
		const lastVariant = {};
		const pick = (k) => {
			const v = G[k]; if (!v) return null;
			let i = Math.floor(R() * v.length);
			if (v.length > 1 && i === lastVariant[k]) i = (i + 1) % v.length;
			lastVariant[k] = i;
			return v[i];
		};
		const glyphFor = (ch) => {
			if (G[ch]) return { g: pick(ch), sc: 1 };
			const lo = ch.toLowerCase();
			if (G[lo]) return { g: pick(lo), sc: /[A-Z]/.test(ch) ? 1.32 : 1 };
			return null;
		};

		const out = [];
		let t = 0.15;
		let x = 0, line = 0;
		let slope = (R() - 0.5) * 0.02;
		const maxW = cssWidth / xh;   // in x-heights
		const paras = text.split(/\n\s*\n/);

		paras.forEach((para, pi) => {
			const words = para.replace(/\s+/g, ' ').trim().split(' ');
			words.forEach((word) => {
				// the word's glyphs, with an occasional joined pair
				const seq = [];
				for (let i = 0; i < word.length; i++) {
					const bi = word.substr(i, 2).toLowerCase();
					if (BIGRAMS.indexOf(bi) >= 0 && G[bi] && R() < 0.55 && word[i] === word[i].toLowerCase()) {
						seq.push({ ch: bi, gl: { g: pick(bi), sc: 1 } }); i++; continue;
					}
					const gl = glyphFor(word[i]);
					if (gl && gl.g) seq.push({ ch: word[i], gl });
				}
				const gaps = seq.map(() => 0.17 + R() * 0.07);
				const wordW = seq.reduce((a, s, i) => a + s.gl.g.w * s.gl.sc + gaps[i], 0);
				if (x > 0 && x + wordW > maxW) {
					x = 0; line++; t += PAUSE.line;
					slope = (R() - 0.5) * 0.02;
				}
				seq.forEach((s, i) => {
					const g = s.gl.g;
					const sc = s.gl.sc * (0.95 + R() * 0.1);
					const rot = (R() - 0.5) * 0.06;
					const dy = (R() - 0.5) * 0.08 + slope * x;
					const ox = x, oy = line * opts.lineHeight + 1.9 + dy;
					const cos = Math.cos(rot), sin = Math.sin(rot);
					const place = (p) => [
						(ox + (p[0] * cos - p[1] * sin) * sc) * xh,
						(oy + (p[0] * sin + p[1] * cos) * sc) * xh
					];
					const add = (pts, dot) => {
						let L = 0;
						for (let k = 1; k < pts.length; k++) L += Math.hypot(pts[k][0] - pts[k - 1][0], pts[k][1] - pts[k - 1][1]);
						const dur = Math.max(dot ? 0.06 : 0.07, L / (opts.speed * xh));
						out.push({ pts, L, start: t, dur, dot });
						t += dur;
					};
					g.s.forEach((st, k) => {
						if (k > 0) t += PAUSE.stroke;
						add(st.map(place), false);
					});
					if (g.dot) {
						// the dot over an i or j: a quick tap above the stem
						let top = g.s[0][0];
						g.s.forEach((st) => st.forEach((p) => { if (p[1] < top[1]) top = p; }));
						const c = place([top[0] + 0.1, -1.36]);
						t += PAUSE.stroke * 1.4;
						add([c, [c[0] + xh * 0.05, c[1] + xh * 0.03]], true);
					}
					t += PAUSE.letter * (0.6 + R() * 0.8);
					x += g.w * sc + gaps[i];
				});
				const last = word[word.length - 1];
				t += /[.!?]/.test(last) ? PAUSE.stop : /[,;:]/.test(last) ? PAUSE.comma : PAUSE.word;
				x += 0.55 + R() * 0.2;
			});
			if (pi < paras.length - 1) { x = 0; line += 1.6; t += PAUSE.para; }
		});
		const height = (line + 1) * opts.lineHeight * xh + xh * 1.55;
		return { strokes: out, total: t, height };
	}

	function size(cssW, cssH) {
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		canvas.width = Math.round(cssW * dpr);
		canvas.height = Math.round(cssH * dpr);
		canvas.style.height = cssH + 'px';
		canvas.style.width = cssW + 'px';
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		ctx.clearRect(0, 0, cssW, cssH);
		ctx.strokeStyle = opts.ink;
		ctx.fillStyle = opts.ink;
		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';
		if (opts.shadow) { ctx.shadowColor = opts.shadow; ctx.shadowBlur = opts.shadowBlur || 6; }
	}

	// a pen eases in and out of each stroke
	const ease = (u) => u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;

	function drawTo(s, upto) {
		// draw the part of stroke s from what is already down to length "upto"
		const from = drawn[s.i] || 0;
		if (upto <= from) return;
		const base = opts.width * opts.xh;
		let acc = 0;
		for (let k = 1; k < s.pts.length; k++) {
			const a = s.pts[k - 1], b = s.pts[k];
			const seg = Math.hypot(b[0] - a[0], b[1] - a[1]);
			const s0 = acc, s1 = acc + seg;
			acc = s1;
			if (s1 <= from || seg === 0) continue;
			if (s0 >= upto) break;
			const u0 = Math.max(0, (from - s0) / seg), u1 = Math.min(1, (upto - s0) / seg);
			const p0 = [a[0] + (b[0] - a[0]) * u0, a[1] + (b[1] - a[1]) * u0];
			const p1 = [a[0] + (b[0] - a[0]) * u1, a[1] + (b[1] - a[1]) * u1];
			// lighter at the very start and end of a stroke, like a ballpoint
			const m = ((s0 + s1) / 2) / (s.L || 1);
			const press = 0.72 + 0.28 * Math.sin(Math.PI * Math.min(1, Math.max(0, m)));
			ctx.lineWidth = base * press;
			ctx.globalAlpha = 0.86 + 0.14 * press;
			ctx.beginPath(); ctx.moveTo(p0[0], p0[1]); ctx.lineTo(p1[0], p1[1]); ctx.stroke();
		}
		if (s.dot && from === 0) {
			ctx.globalAlpha = 1;
			ctx.beginPath(); ctx.arc(s.pts[0][0], s.pts[0][1], base * 0.75, 0, Math.PI * 2); ctx.fill();
		}
		drawn[s.i] = upto;
	}

	function frame(now) {
		const t = (now - t0) / 1000;
		for (let i = 0; i < strokes.length; i++) {
			const s = strokes[i];
			if (s.start > t) break;
			const u = Math.min(1, (t - s.start) / s.dur);
			drawTo(s, ease(u) * s.L);
		}
		// tell whoever is watching where the pen is (to keep it in view)
		if (opts.onPen) {
			let k = 0;
			while (k + 1 < strokes.length && strokes[k + 1].start <= t) k++;
			if (strokes[k]) opts.onPen(strokes[k].pts[0][1]);
		}
		if (t < total) raf = requestAnimationFrame(frame);
		else if (opts.onDone) opts.onDone();
	}

	return {
		write(text, instant) {
			cancelAnimationFrame(raf);
			const cssW = canvas.parentElement.clientWidth;
			const L = layout(text, cssW);
			strokes = L.strokes; total = L.total;
			strokes.forEach((s, i) => { s.i = i; });
			drawn = [];
			size(cssW, L.height);
			const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			if (instant || reduce) { strokes.forEach((s) => drawTo(s, s.L)); return; }
			t0 = performance.now();
			raf = requestAnimationFrame(frame);
			return total;
		},
		finish() { cancelAnimationFrame(raf); strokes.forEach((s) => drawTo(s, s.L)); if (opts.onDone) opts.onDone(); },
		stop() { cancelAnimationFrame(raf); }
	};
}

module.exports = HandWriter;

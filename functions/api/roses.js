// THE ROSES LEFT IN THE CONSERVATORY OF UNSAID THINGS
// A Cloudflare Pages Function at /api/roses. Every visitor who lays their
// rose on the grave adds one here, and every visitor sees them all (the
// conservatory shows the newest six fresh, the older ones wilting).
//
//   GET  /api/roses   ->  { first, n, roses: [{ t, s }] }   (oldest first)
//   POST /api/roses   ->  the same, with { added: true|false }
//
// Kept in Workers KV (binding ROSES, set up by the deploy workflow). One
// rose per visitor a day (by a hash of their address, kept a day, never the
// address itself). The live site and the preview keep separate lists.
// Nothing else about the visitor is stored.

const KEEP = 300;
const json = (d, status) => new Response(JSON.stringify(d), {
	status: status || 200,
	headers: { 'content-type': 'application/json', 'cache-control': 'no-store' }
});
const listKey = (request) => (new URL(request.url).hostname === 'muzammil-gallery.pages.dev' ? 'roses:live' : 'roses:preview');

async function read(env, key) {
	const d = await env.ROSES.get(key, 'json');
	return d && Array.isArray(d.roses) ? d : { first: 0, roses: [] };
}
const out = (d, extra) => Object.assign({ first: d.first, n: d.first + d.roses.length, roses: d.roses }, extra || {});

export async function onRequestGet({ request, env }) {
	if (!env.ROSES) return json({ error: 'no store' }, 503);
	return json(out(await read(env, listKey(request))));
}

export async function onRequestPost({ request, env }) {
	if (!env.ROSES) return json({ error: 'no store' }, 503);
	const key = listKey(request);
	let s = Math.random();
	try { const b = await request.json(); if (typeof b.s === 'number' && b.s >= 0 && b.s < 1) s = b.s; } catch (e) { /* no body */ }
	// one a day from one place
	const ip = request.headers.get('CF-Connecting-IP') || '';
	const day = new Date().toISOString().slice(0, 10);
	const dig = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(key + '|' + ip + '|' + day));
	const tag = 'day:' + [...new Uint8Array(dig)].slice(0, 12).map((b) => b.toString(16).padStart(2, '0')).join('');
	const d = await read(env, key);
	if (await env.ROSES.get(tag)) return json(out(d, { added: false }));
	await env.ROSES.put(tag, '1', { expirationTtl: 60 * 60 * 26 });
	d.roses.push({ t: Date.now(), s: Math.round(s * 1e6) / 1e6 });
	if (d.roses.length > KEEP) { const cut = d.roses.length - KEEP; d.roses.splice(0, cut); d.first += cut; }
	await env.ROSES.put(key, JSON.stringify(d));
	return json(out(d, { added: true }));
}

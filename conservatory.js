"use strict";(()=>{var Ye=(t,o)=>()=>(o||t((o={exports:{}}).exports,o),o.exports);var Ee=Ye((xn,Uo)=>{"use strict";var Et=[-90,0,0],Xe=16,Ze=27.5,Je=11.6;Uo.exports={O:Et,W:Xe,L:Ze,RIDGE:Je,BOX:[Et[0]-.8,0,Et[2]-11.5,Et[0]+Xe+.8,Je+.5,Et[2]+Ze+.8],AIR_BOX:[Et[0],0,Et[2],Et[0]+Xe,Je,Et[2]+Ze]}});var io=Ye((bn,Y0)=>{"use strict";var G=Math.PI,r=t=>(+t).toFixed(4),{O:F,W:T,L:W,RIDGE:yt}=Ee(),r0=7.8,tt=.55,ot=(yt-r0)/(T/2),I={c:[3.6,8.6,13.6,18.6,23.6],hw:1.3,sill:.62,spring:4.9};I.top=I.spring+I.hw;var vt={cols:[-.65,0,.65],rowH:.71,w:.055,ring:.78},dt={rafter:W/12,rafterW:.1,purlin:1,purlinW:.07},It=[5.5,11,16.5,22],o0={cx:T/2,hw:1.12,spring:3.95,pier:1.05,face:W-1.45,back:W-.2,floor:.66,top:6.55};o0.x0=o0.cx-o0.hw-o0.pier;o0.x1=o0.cx+o0.hw+o0.pier;var k={x0:T/2-1.7,x1:T/2+1.7,z0:W-o0.face+.44,z1:13.8,curb:.5,top:.13},B={cx:T/2,cz:18.1,ri:1.66,ro:2.06,top:6,hw:.84,spring:3.4,cornice:4.85,cloth:2.6,gap:.92},Vo=[.647,.614,.279,-.154,-.322,-.191,-.012,.041,-.087,-.551,-.876,-1,.368,.414,.325,.162,.216,.345,.495,.35,.369,-.7,-.522,-.318,-.128,-.041,.581,.696,.442,.274,.394,.607,.713,-.498,-.313,.401,.802,.751,-.174,-.702,-.917,-.992,-.883,.29,.475,.557,.55,.426,.135,-.125,-.259,-.391,-.671,-.951,-.964,-.727,-.471,-.32,-.244,-.123,.166,.573,.775,.395],Q0=t=>k.z1-(t-5.6)/11*(k.z1-k.z0),P0={x:T/2,z:1,plinth:o0.floor+.26,height:2.75,yaw:.35,file:"res/nymph.bin"},De=W-P0.z,Qe=[7.83,3.45,1.15],ut=(()=>{let t=[-.85,.3,.3],o=Math.hypot(t[0],t[1],t[2]);return t.map(s=>s/o)})(),Le=(()=>{let t=[-.3,.82,.48],o=Math.hypot(t[0],t[1],t[2]);return t.map(s=>s/o)})(),Co=t=>{let o=1e9,s=-1e9,a=1e9,e=-1e9;for(let n of[0,T])for(let c of[0,yt+.3])for(let l of[0,W]){let h=(r0-c)/t[1],w=n+t[0]*h,m=l+t[2]*h;o=Math.min(o,w),s=Math.max(s,w),a=Math.min(a,m),e=Math.max(e,m)}return[o-.3,a-.3,s-o+.6,e-a+.6]},at={sun:Co(ut),moon:Co(Le)},Xt=t=>[t[0]+F[0],t[1]+F[1],t[2]+F[2]];function Ce(t){(!t||t==="baked")&&(t=typeof location!="undefined"&&/analyticsun/.test(location.search)?"analytic":"baked");let o=I.c.map(a=>`
		{
			float dz = q.z - ${r(a)};
			float inside = smoothstep(-b, b, ${r(I.hw)} - abs(dz)) * smoothstep(-b, b, q.y - ${r(I.sill)});
			float arch = smoothstep(-b, b, ${r(I.hw)} - length(vec2(dz, max(q.y - ${r(I.spring)}, 0.0))));
			o = max(o, inside * arch);
		}`).join(""),s=I.c.map(a=>`
		{
			float dz = q.z - ${r(a)};
			if (abs(dz) < ${r(I.hw+.2)}) {
				${vt.cols.map(e=>`bar = max(bar, 1.0 - smoothstep(${r(vt.w*.5)} - b, ${r(vt.w*.5)} + b, abs(dz - ${r(e)})));`).join(`
				`)}
				float ry = q.y - ${r(I.sill)};
				float tr = abs(ry - ${r(vt.rowH)} * floor(ry / ${r(vt.rowH)} + 0.5));
				if (q.y < ${r(I.spring+.02)}) bar = max(bar, 1.0 - smoothstep(${r(vt.w*.5)} - b, ${r(vt.w*.5)} + b, tr));
				float rr = length(vec2(dz, q.y - ${r(I.spring)}));
				if (q.y > ${r(I.spring)}) bar = max(bar, 1.0 - smoothstep(${r(vt.w*.5)} - b, ${r(vt.w*.5)} + b, abs(rr - ${r(vt.ring)})));
				// the frame round the opening
				bar = max(bar, 1.0 - smoothstep(0.0, b + 0.03, ${r(I.hw)} - max(abs(dz), q.y > ${r(I.spring)} ? rr : 0.0)));
			}
		}`).join("");return`
	const vec3 STUDIO_SUN_D = vec3(${r(ut[0])}, ${r(ut[1])}, ${r(ut[2])});
	const vec3 STUDIO_MOON_D = vec3(${r(Le[0])}, ${r(Le[1])}, ${r(Le[2])});
#define STUDIO_SUN normalize(mix(STUDIO_SUN_D, STUDIO_MOON_D, smoothstep(0.25, 0.75, night)))

	// how open a window is at (y, z) on the wall's face; b softens edges
	float studioWinOpen(vec3 q, float b) {
		float o = 0.0;
		${o}
		return o;
	}
	float studioWinBars(vec3 q, float b) {
		float bar = 0.0;
		${s}
		return bar;
	}

	float studioVineClump(float u, float seed) {
		return step(-0.25, 0.5 * sin(u * 1.9 + seed) + 0.5 * sin(u * 0.77 + seed * 1.3));
	}
	// how much of the sun the flowering vine takes at a point under a beam
	// (d: distance across the beam, u, v: along and across for the dapple)
	float studioVineShade(float d, float u, float v, float seed) {
		float band = smoothstep(0.5, 0.2, abs(d));
		float dap = 0.5 + 0.5 * sin(u * 23.0 + v * 9.0 + seed) * sin(v * 29.0 - u * 7.0 + seed * 2.0);
		dap = smoothstep(0.2, 0.65, dap);
		return band * studioVineClump(u, seed) * dap * 0.85;
	}

${t==="analytic"?`	float studioSun0(vec3 pw) {
		vec3 p = pw - vec3(${r(F[0])}, ${r(F[1])}, ${r(F[2])});
		vec3 S = STUDIO_SUN;
		// the niche: inside its hollow, the sun gets in only through the arch;
		// elsewhere its block of stone stands in the way of some of the light
		{
			// (worked as if the niche stood against the far wall: z turned round)
			vec3 q = vec3(${r(T)} - p.x, p.y, ${r(W)} - p.z);
			vec3 Sq = vec3(-S.x, S.y, -S.z);
			float dxn = q.x - ${r(o0.cx)};
			if (abs(dxn) < ${r(o0.hw)} && q.z > ${r(o0.face)} && q.y > ${r(o0.floor-.05)} && q.y < ${r(o0.spring)} + sqrt(max(${r(o0.hw*o0.hw)} - dxn * dxn, 0.0))) {
				if (Sq.z >= 0.0) return 0.0;
				vec3 hf = q + Sq * ((${r(o0.face)} - q.z) / Sq.z);
				float hx = hf.x - ${r(o0.cx)};
				float edge = ${r(o0.hw)} - abs(hx);
				float topY = ${r(o0.spring)} + sqrt(max(${r(o0.hw*o0.hw)} - hx * hx, 0.0));
				float soft = 0.02 + 0.03 * (${r(o0.face)} - q.z) / Sq.z;
				float inA = smoothstep(-soft, soft, edge) * smoothstep(-soft, soft, topY - hf.y);
				if (inA <= 0.0) return 0.0;
			} else {
				vec3 bmin = vec3(${r(o0.x0-.2)}, 0.0, ${r(o0.face-.3)}), bmax = vec3(${r(o0.x1+.2)}, ${r(6.95)}, ${r(W)});
				vec3 inv = 1.0 / Sq;
				vec3 t0 = (bmin - q) * inv, t1 = (bmax - q) * inv;
				vec3 tn = min(t0, t1), tf = max(t0, t1);
				float a = max(max(tn.x, tn.y), tn.z), bb = min(min(tf.x, tf.y), tf.z);
				if (bb > max(a, 0.0) && a > 0.0) return 0.0;
			}
		}
		// where the ray towards the sun leaves through the left wall
		float tw = (0.0 - p.x) / S.x;
		// and where it rises past the eaves
		float te = (${r(r0)} - p.y) / S.y;
		if (tw > 0.0 && tw < te) {
			vec3 h0 = p + S * tw;
			if (h0.z < 0.0 || h0.z > ${r(W)}) return 0.0;
			vec3 h1 = p + S * ((${r(-tt)} - p.x) / S.x);
			vec3 hm = p + S * ((${r(-tt*.5)} - p.x) / S.x);
			float b = 0.006 + 0.0075 * tw;
			float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
			if (open <= 0.0) return 0.0;
			float bar = studioWinBars(hm, b);
			return open * (1.0 - bar) * 0.92;
		}
		// up through the roof: the trusses' tie beams first
		vec3 he = p + S * max(te, 0.0);
		float vis = 1.0;
		if (p.y < ${r(r0)}) {
			if (he.z < 0.0 || he.z > ${r(W)} || he.x < 0.0 || he.x > ${r(T)}) return 0.0;
			float be = 0.01 + 0.008 * te;
			${It.map(a=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(he.z - ${r(a)}));`).join(`
			`)}
			// the bougainvillea along the tie beams
			${Lt.filter(a=>a[0]==="truss").map(([a,e,n])=>`vis *= 1.0 - studioVineShade(he.z - ${r(e)}, he.x, he.z, ${r(n)});`).join(`
			`)}
		}
		// then the glass: the two slopes of the roof
		float tl = (${r(ot)} * p.x - p.y + ${r(r0)}) / (S.y - ${r(ot)} * S.x);
		float tr = (${r(ot)} * (${r(T)} - p.x) - p.y + ${r(r0)}) / (S.y + ${r(ot)} * S.x);
		float t = 1e9;
		vec3 h = vec3(0.0);
		vec3 hl = p + S * tl, hr = p + S * tr;
		if (tl > 0.0 && hl.x >= -0.01 && hl.x <= ${r(T/2+.01)}) { t = tl; h = hl; }
		if (tr > 0.0 && tr < t && hr.x >= ${r(T/2-.01)} && hr.x <= ${r(T+.01)}) { t = tr; h = hr; }
		if (t > 1e8) return 0.0;
		if (h.z < 0.0 || h.z > ${r(W)}) return 0.0;
		float b = 0.008 + 0.0075 * t;
		float rz = abs(h.z - ${r(dt.rafter)} * floor(h.z / ${r(dt.rafter)} + 0.5));
		float bar = 1.0 - smoothstep(${r(dt.rafterW*.5)} - b, ${r(dt.rafterW*.5)} + b, rz);
		// the ridge beam
		bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${r(T/2)})));
		// the old glass is grimy: it lets less through than the windows,
		// unevenly, so the roof's light falls in soft dim drifts and the
		// windows' patterned beams are the bright, dramatic ones
		float pat = 0.42 + 0.3 * smoothstep(-0.6, 0.6, sin(h.x * 0.9 + 1.3) * sin(h.z * 0.7 + 0.4) + 0.4 * sin(h.x * 2.1 - h.z * 1.7));
		// and the vine along the rafters and the ridge
		${Lt.filter(a=>a[0]==="rafter").map(([a,e,n])=>`pat *= 1.0 - studioVineShade(h.z - ${r(e)}, h.x, h.z, ${r(n)});`).join(`
		`)}
		pat *= 1.0 - studioVineShade(h.x - ${r(T/2)}, h.z, h.x, 0.9);
		return vis * (1.0 - bar) * pat * 0.78;
	}

`:t==="bake"?`	// for the bake: how much of the sky a beam along S gets through the
	// windows or the roof, given where it crosses the eaves' height
	// (r: for points below the eaves, past the tie beams; g: above them)
	vec2 studioExit(vec3 q, vec3 S) {
		float g = 0.0;
		{
			float tl = (${r(ot)} * q.x - q.y + ${r(r0)}) / (S.y - ${r(ot)} * S.x);
			float tr = (${r(ot)} * (${r(T)} - q.x) - q.y + ${r(r0)}) / (S.y + ${r(ot)} * S.x);
			float t = 1e9;
			vec3 h = vec3(0.0);
			vec3 hl = q + S * tl, hr = q + S * tr;
			if (tl > -20.0 && hl.x >= -0.01 && hl.x <= ${r(T/2+.01)}) { t = tl; h = hl; }
			if (tr > -20.0 && tr < t && hr.x >= ${r(T/2-.01)} && hr.x <= ${r(T+.01)}) { t = tr; h = hr; }
			if (t < 1e8 && h.z >= 0.0 && h.z <= ${r(W)}) {
				float b = 0.03 + 0.0075 * max(t, 0.0);
				float rz = abs(h.z - ${r(dt.rafter)} * floor(h.z / ${r(dt.rafter)} + 0.5));
				float bar = 1.0 - smoothstep(${r(dt.rafterW*.5)} - b, ${r(dt.rafterW*.5)} + b, rz);
				bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${r(T/2)})));
				float pat = 0.42 + 0.3 * smoothstep(-0.6, 0.6, sin(h.x * 0.9 + 1.3) * sin(h.z * 0.7 + 0.4) + 0.4 * sin(h.x * 2.1 - h.z * 1.7));
				${Lt.filter(a=>a[0]==="rafter").map(([a,e,n])=>`pat *= 1.0 - studioVineShade(h.z - ${r(e)}, h.x, h.z, ${r(n)});`).join(`
				`)}
				pat *= 1.0 - studioVineShade(h.x - ${r(T/2)}, h.z, h.x, 0.9);
				g = (1.0 - bar) * pat * 0.78;
			}
		}
		float r = 0.0;
		if (q.x < 0.0) {
			// it leaves through a window in the left wall
			vec3 h0 = q + S * ((0.0 - q.x) / S.x);
			if (h0.z >= 0.0 && h0.z <= ${r(W)} && h0.y > 0.0) {
				vec3 h1 = q + S * ((${r(-tt)} - q.x) / S.x);
				vec3 hm = q + S * ((${r(-tt*.5)} - q.x) / S.x);
				float b = 0.022;
				float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
				r = open * (1.0 - studioWinBars(hm, b)) * 0.92;
			}
		} else if (q.x <= ${r(T)} && q.z >= 0.0 && q.z <= ${r(W)}) {
			// up through the roof, past the tie beams and their vine
			float vis = 1.0;
			float be = 0.025;
			${It.map(a=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(q.z - ${r(a)}));`).join(`
			`)}
			${Lt.filter(a=>a[0]==="truss").map(([a,e,n])=>`vis *= 1.0 - studioVineShade(q.z - ${r(e)}, q.x, q.z, ${r(n)});`).join(`
			`)}
			r = vis * g;
		}
		return vec2(r, g);
	}
	float studioSun0(vec3 pw) { return 0.0; }

`:`	uniform sampler2D studioBake;
	float studioSun0(vec3 pw) {
		vec3 p = pw - vec3(${r(F[0])}, ${r(F[1])}, ${r(F[2])});
		vec3 S = STUDIO_SUN;
		// the niche: inside its hollow, the sun gets in only through the arch;
		// elsewhere its block of stone stands in the way of some of the light
		{
			// (worked as if the niche stood against the far wall: z turned round)
			vec3 q = vec3(${r(T)} - p.x, p.y, ${r(W)} - p.z);
			vec3 Sq = vec3(-S.x, S.y, -S.z);
			float dxn = q.x - ${r(o0.cx)};
			if (abs(dxn) < ${r(o0.hw)} && q.z > ${r(o0.face)} && q.y > ${r(o0.floor-.05)} && q.y < ${r(o0.spring)} + sqrt(max(${r(o0.hw*o0.hw)} - dxn * dxn, 0.0))) {
				if (Sq.z >= 0.0) return 0.0;
				vec3 hf = q + Sq * ((${r(o0.face)} - q.z) / Sq.z);
				float hx = hf.x - ${r(o0.cx)};
				float edge = ${r(o0.hw)} - abs(hx);
				float topY = ${r(o0.spring)} + sqrt(max(${r(o0.hw*o0.hw)} - hx * hx, 0.0));
				float soft = 0.02 + 0.03 * (${r(o0.face)} - q.z) / Sq.z;
				float inA = smoothstep(-soft, soft, edge) * smoothstep(-soft, soft, topY - hf.y);
				if (inA <= 0.0) return 0.0;
			} else {
				vec3 bmin = vec3(${r(o0.x0-.2)}, 0.0, ${r(o0.face-.3)}), bmax = vec3(${r(o0.x1+.2)}, ${r(6.95)}, ${r(W)});
				vec3 inv = 1.0 / Sq;
				vec3 t0 = (bmin - q) * inv, t1 = (bmax - q) * inv;
				vec3 tn = min(t0, t1), tf = max(t0, t1);
				float a = max(max(tn.x, tn.y), tn.z), bb = min(min(tf.x, tf.y), tf.z);
				if (bb > max(a, 0.0) && a > 0.0) return 0.0;
			}
		}
		// the windows and the roof: worked out once (bakeSun below), looked
		// up along the beam where it crosses the eaves' height
		float w = smoothstep(0.25, 0.75, night);
		float hi = step(${r(r0)}, p.y);
		float v = 0.0;
		if (w < 0.999) {
			vec2 q = (p.xz + STUDIO_SUN_D.xz * ((${r(r0)} - p.y) / STUDIO_SUN_D.y) - vec2(${r(at.sun[0])}, ${r(at.sun[1])})) / vec2(${r(at.sun[2])}, ${r(at.sun[3])});
			vec4 t = texture2D(studioBake, q);
			v += (1.0 - w) * mix(t.r, t.g, hi);
		}
		if (w > 0.001) {
			vec2 q = (p.xz + STUDIO_MOON_D.xz * ((${r(r0)} - p.y) / STUDIO_MOON_D.y) - vec2(${r(at.moon[0])}, ${r(at.moon[1])})) / vec2(${r(at.moon[2])}, ${r(at.moon[3])});
			vec4 t = texture2D(studioBake, q);
			v += w * mix(t.b, t.a, hi);
		}
		return v;
	}

`}	// the rotunda: its ring of stone stops the sun except through the
	// arches; its sheer cloth lets about half through
	float rotHit(vec2 c, vec2 d, float a, float R, out float t1, out float t2) {
		float b = dot(c, d), cc = dot(c, c) - R * R, disc = b * b - a * cc;
		if (disc <= 0.0) { t1 = t2 = -1.0; return 0.0; }
		float q = sqrt(disc);
		t1 = (-b - q) / a; t2 = (-b + q) / a;
		return 1.0;
	}
	float rotOpen(vec3 h, float R) {
		float an = atan(h.x - ${r(B.cx)}, h.z - ${r(B.cz)});
		float m = an - 1.5707963 * floor(an / 1.5707963 + 0.5);
		float d = R * sin(m);
		return (abs(d) < ${r(B.hw)} && h.y < ${r(B.spring)} + sqrt(max(${r(B.hw*B.hw)} - d * d, 0.0))) ? 1.0 : 0.0;
	}
	float rotShade(vec3 pw) {
		vec3 p = pw - vec3(${r(F[0])}, ${r(F[1])}, ${r(F[2])});
		vec3 S = STUDIO_SUN;
		vec2 c = p.xz - vec2(${r(B.cx)}, ${r(B.cz)});
		vec2 d = S.xz;
		float a = dot(d, d);
		float k = 1.0, t1, t2;
		// the stone (as one thin ring at the middle of the wall)
		if (rotHit(c, d, a, ${r((B.ri+B.ro)/2)}, t1, t2) > 0.0) {
			if (t1 > 0.03) { vec3 h = p + S * t1; if (h.y < ${r(B.top-.2)} && rotOpen(h, ${r((B.ri+B.ro)/2)}) < 0.5) return 0.0; }
			if (t2 > 0.03) { vec3 h = p + S * t2; if (h.y < ${r(B.top-.2)} && rotOpen(h, ${r((B.ri+B.ro)/2)}) < 0.5) return 0.0; }
		}
		// the cloth, except where it parts on the pool's line
		if (rotHit(c, d, a, ${r(B.cloth+.15)}, t1, t2) > 0.0) {
			for (int i = 0; i < 2; i++) {
				float t = i == 0 ? t1 : t2;
				if (t > 0.08) {
					vec3 h = p + S * t;
					float an = atan(h.x - ${r(B.cx)}, h.z - ${r(B.cz)});
					float lat = ${r(B.cloth+.15)} * abs(sin(an));
					bool gap = lat < ${r(B.gap)} && h.y < ${r(B.top)};
					if (h.y < ${r(B.top)} && !gap) k *= 0.5;
				}
			}
		}
		return k;
	}
	float studioSun(vec3 pw) { float s0 = studioSun0(pw); return s0 > 0.0 ? s0 * rotShade(pw) : 0.0; }`}function Rt(t){let o=t>>>0;return()=>{o=o+1831565813>>>0;let s=o;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296}}var q={FLOOR:0,PLASTER:1,STONE:2,STEEL:3,WATER:4,PAD:5,PETAL:6,STAMEN:7,MARBLE:8,WOOD:9,GESSO:10,PAINT:11,POT:12,SHADE:13,BULB:14,NICHE:15,JAR:16,SOIL:17,BRUSH:18,TRAVERTINE:19,CLOTH:20,WMARBLE:21,REDDOOR:22,REDPANEL:23,DARKWOOD:24,BRASS:25,BRACT:26,KEYHOLE:27,ROCK:28,OLDSTONE:29,HOLLOW:30,FLAME:31,CFLAME:32};function so(){let t={pos:[],nrm:[],kind:[],uv:[],anchor:[],idx:[]};return t.float=null,t.v=(o,s,a,e)=>(t.pos.push(o[0]+F[0],o[1]+F[1],o[2]+F[2]),t.nrm.push(s[0],s[1],s[2]),t.kind.push(a),t.uv.push(e?e[0]:0,e?e[1]:0),t.float?t.anchor.push(t.float[0]+F[0],t.float[1]+F[2],t.float[2],1):t.anchor.push(0,0,0,0),t.pos.length/3-1),t.quad=(o,s,a,e,n,c,l)=>{let h=t.v(o,n,c,l&&l[0]),w=t.v(s,n,c,l&&l[1]),m=t.v(a,n,c,l&&l[2]),N=t.v(e,n,c,l&&l[3]);t.idx.push(h,w,m,h,m,N)},t.box=(o,s,a,e,n,c,l,h)=>{let w=h||{};w.top||t.quad([o,n,a],[o,n,c],[e,n,c],[e,n,a],[0,1,0],l,[[o,a],[o,c],[e,c],[e,a]]),w.bottom||t.quad([o,s,a],[e,s,a],[e,s,c],[o,s,c],[0,-1,0],l,[[o,a],[e,a],[e,c],[o,c]]),w.x0||t.quad([o,s,a],[o,s,c],[o,n,c],[o,n,a],[-1,0,0],l,[[a,s],[c,s],[c,n],[a,n]]),w.x1||t.quad([e,s,c],[e,s,a],[e,n,a],[e,n,c],[1,0,0],l,[[c,s],[a,s],[a,n],[c,n]]),w.z0||t.quad([e,s,a],[o,s,a],[o,n,a],[e,n,a],[0,0,-1],l,[[e,s],[o,s],[o,n],[e,n]]),w.z1||t.quad([o,s,c],[e,s,c],[e,n,c],[o,n,c],[0,0,1],l,[[o,s],[e,s],[e,n],[o,n]])},t.tbox=(o,s,a,e,n,c,l,h,w)=>{let m=Math.cos(a),N=Math.sin(a),x=Math.cos(w||0),g=Math.sin(w||0),f=(i,d,p)=>{let M=n+(d-n)*x-p*g*0,A=p+(d-n)*g,u=n+(d-n)*x;return[o+m*i+N*A,u,s-N*i+m*A]},v=i=>{let d=i[1]*x-i[2]*g,p=i[2]*x+i[1]*g;return[m*i[0]+N*p,d,-N*i[0]+m*p]},y=(i,d,p,M,A)=>t.quad(f(...i),f(...d),f(...p),f(...M),v(A),h,[[i[0]+i[2],i[1]],[d[0]+d[2],d[1]],[p[0]+p[2],p[1]],[M[0]+M[2],M[1]]]);y([-e,c,-l],[-e,c,l],[e,c,l],[e,c,-l],[0,1,0]),y([-e,n,-l],[e,n,-l],[e,n,l],[-e,n,l],[0,-1,0]),y([-e,n,-l],[-e,n,l],[-e,c,l],[-e,c,-l],[-1,0,0]),y([e,n,l],[e,n,-l],[e,c,-l],[e,c,l],[1,0,0]),y([e,n,-l],[-e,n,-l],[-e,c,-l],[e,c,-l],[0,0,-1]),y([-e,n,l],[e,n,l],[e,c,l],[-e,c,l],[0,0,1])},t.beam=(o,s,a,e,n)=>{let c=[s[0]-o[0],s[1]-o[1],s[2]-o[2]],l=Math.hypot(...c),h=c.map(f=>f/l),w=n||(Math.abs(h[1])>.9?[1,0,0]:[0,1,0]),m=[h[1]*w[2]-h[2]*w[1],h[2]*w[0]-h[0]*w[2],h[0]*w[1]-h[1]*w[0]],N=Math.hypot(...m);m=m.map(f=>f/N),w=[m[1]*h[2]-m[2]*h[1],m[2]*h[0]-m[0]*h[2],m[0]*h[1]-m[1]*h[0]];let x=(f,v,y)=>[f[0]+m[0]*a*v+w[0]*a*y,f[1]+m[1]*a*v+w[1]*a*y,f[2]+m[2]*a*v+w[2]*a*y],g=[[[1,-1],[1,1],m],[[1,1],[-1,1],w],[[-1,1],[-1,-1],m.map(f=>-f)],[[-1,-1],[1,-1],w.map(f=>-f)]];for(let[f,v,y]of g)t.quad(x(o,...f),x(s,...f),x(s,...v),x(o,...v),y,e,[[0,0],[l,0],[l,1],[0,1]])},t.lathe=(o,s,a,e,n)=>{let c=n||32,l=a.map(([h,w],m)=>{let N=a[Math.max(0,m-1)],x=a[Math.min(a.length-1,m+1)],g=x[0]-N[0],f=x[1]-N[1],v=Math.hypot(g,f)||1,y=f/v,i=-g/v,d=[];for(let p=0;p<=c;p++){let M=p/c*2*G;d.push(t.v([o+Math.cos(M)*h,w,s+Math.sin(M)*h],[Math.cos(M)*y,i,Math.sin(M)*y],e,[p/c*h*2*G,w]))}return d});for(let h=0;h<l.length-1;h++)for(let w=0;w<c;w++){let m=l[h][w],N=l[h][w+1],x=l[h+1][w+1],g=l[h+1][w];t.idx.push(m,g,x,m,x,N)}},t}var Nt=t=>Math.abs(t)>=I.hw?null:I.spring+Math.sqrt(I.hw*I.hw-t*t),Lt=[["truss",It[0],3.1],["truss",It[1],5.4],["truss",It[2],7.7],["truss",It[3],2.2],["rafter",dt.rafter*2,1.7],["rafter",dt.rafter*5,8.5],["rafter",dt.rafter*8,13.6],["rafter",dt.rafter*10,17],["rafter",dt.rafter*11,6.1],["ridge",T/2,.9],...[.75,...I.c.slice(1).map((t,o)=>(t+I.c[o])/2),W-.75].map((t,o)=>["wall",t,2.3+o*4.1])],xe=(t,o)=>.5*Math.sin(t*1.9+o)+.5*Math.sin(t*.77+o*1.3)>-.25,Yo=t=>t<T/2?r0+ot*t:r0+ot*(T-t);function Ie(t,o,s){return t==="wall"?[.12,s,o]:t==="truss"?[s,r0-.12,o]:t==="rafter"?[s,Yo(s)-.2,o]:[o,yt-.32,s]}var je=t=>t==="ridge"?[.4,W-.4]:t==="wall"?[.15,r0-.05]:[.35,T-.35],H0={w:1.95,spring:3.35,r:2.3,frame:.23,zl:W-.05,zf:W-.13};H0.c=H0.r-H0.w/2;var gt=(t,o)=>{let s=H0.r+(o||0),a=Math.abs(t)+H0.c;return a>=s?H0.spring:H0.spring+Math.sqrt(s*s-a*a)};H0.top=gt(0);function gs(t){let o=T/2,{w:s,frame:a,zl:e,zf:n}=H0,c=s/2,l=c+a,h=.02;for(let u=-l;u<l-1e-6;u+=h){let z=u,O=Math.min(l,u+h),R=(z+O)/2,Z=gt(z,a),i0=gt(O,a),s0=0,U=0;Math.abs(R)<c&&(s0=gt(z),U=gt(O)),Math.abs(R)>=c;{let p0=Math.abs(R)<c?s0:0,g0=Math.abs(R)<c?U:0;t.quad([o+O,g0,n],[o+z,p0,n],[o+z,Z,n],[o+O,i0,n],[0,0,-1],q.DARKWOOD,[[O,g0],[z,p0],[z,Z],[O,i0]])}t.quad([o+z,Z,n],[o+z,Z,W],[o+O,i0,W],[o+O,i0,n],[0,1,0],q.DARKWOOD,[[z,0],[z,1],[O,1],[O,0]]),Math.abs(R)<c&&t.quad([o+z,s0,n],[o+O,U,n],[o+O,U,e],[o+z,s0,e],[0,-1,0],q.DARKWOOD,[[z,0],[O,0],[O,1],[z,1]])}for(let u of[-1,1])t.quad([o+u*l,0,n],[o+u*l,0,W],[o+u*l,H0.spring,W],[o+u*l,H0.spring,n],[u,0,0],q.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.quad([o+u*c,0,n],[o+u*c,H0.spring,n],[o+u*c,H0.spring,e],[o+u*c,0,e],[-u,0,0],q.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.box(o+u*(c+a/2)-a/2-.04,0,n-.04,o+u*(c+a/2)+a/2+.04,.42,W,q.DARKWOOD);let w=40;for(let u=0;u<w;u++){let z=-c+2*c*u/w,O=-c+2*c*(u+1)/w;t.beam([o+z,gt(z)+.03,n-.015],[o+O,gt(O)+.03,n-.015],.018,q.DARKWOOD)}for(let u of[-1,1])t.beam([o+u*(c+.03),.42,n-.015],[o+u*(c+.03),H0.spring+.02,n-.015],.018,q.DARKWOOD);for(let u=-c;u<c-1e-6;u+=h){let z=u,O=Math.min(c,u+h),R=gt(z),Z=gt(O);t.quad([o+O,0,e],[o+z,0,e],[o+z,R,e],[o+O,Z,e],[0,0,-1],q.REDDOOR,[[O,0],[z,0],[z,R],[O,Z]])}let m=c-.2,N=.3,x=H0.spring+.07,g=e-.006,f=.05,v=(u,z,O,R)=>t.box(o+u,z,g-.018,o+O,R,g,q.REDDOOR);v(-m,N,m,N+f),v(-m,x-f,m,x),v(-m,N,-m+f,x),v(m-f,N,m,x),t.box(o-m+.14,N+.14,g-.022,o+m-.14,x-.14,g,q.REDDOOR);let y=H0.spring+.31;v(-c+.08,x+.06,c-.08,x+.12);for(let u of[-1,1]){let O=c-.17;for(let R=.07;R<O-1e-6;R+=h){let Z=R,i0=Math.min(O,R+h),s0=gt(Z,-.18),U=gt(i0,-.18);if(s0<=y+.02&&U<=y+.02)continue;let p0=C0=>o+u*C0,g0=[[p0(Z),y,g+.004],[p0(i0),y,g+.004],[p0(i0),Math.max(y,U),g+.004],[p0(Z),Math.max(y,s0),g+.004]];u>0?t.quad(g0[1],g0[0],g0[3],g0[2],[0,0,-1],q.REDPANEL,[[i0,0],[Z,0],[Z,1],[i0,1]]):t.quad(...g0,[0,0,-1],q.REDPANEL,[[Z,0],[i0,0],[i0,1],[Z,1]])}}t.beam([o,y-.02,g-.008],[o,gt(0,-.12),g-.008],.03,q.REDDOOR),t.beam([o-c+.1,y-.01,g-.006],[o+c-.1,y-.01,g-.006],.014,q.REDDOOR);let i=o-c+.15,d=1.06,p=g-.03;t.box(i-.034,d-.2,p-.008,i+.034,d+.17,p+.012,q.BRASS);for(let[u,z]of[[d+.2,.026],[d+.235,.016],[d-.23,.026],[d-.265,.016]])t.lathe(i,p-.002,[[0,u-z],[z,u-z*.4],[z,u+z*.4],[0,u+z]],q.BRASS,12);for(let u=0;u<6;u++){let z=d-.17+u*.065;for(let O of[-1,1])t.beam([i+O*.034,z,p-.01],[i+O*.041,z+.03,p-.01],.006,q.BRASS)}let M=p-.008,A=(u,z,O)=>{for(let R=0;R<O;R++){let Z=G*R/O,i0=G*(R+1)/O;for(let s0=0;s0<16;s0++){let U=2*G*s0/16,p0=2*G*(s0+1)/16,g0=(J,m0)=>[i+z*Math.sin(J)*Math.cos(m0),d+.03+z*Math.sin(J)*Math.sin(m0),u-z*Math.cos(J)],C0=(J,m0)=>[Math.sin(J)*Math.cos(m0),Math.sin(J)*Math.sin(m0),-Math.cos(J)],L=t.v(g0(Z,U),C0(Z,U),q.BRASS),Y=t.v(g0(Z,p0),C0(Z,p0),q.BRASS),V=t.v(g0(i0,p0),C0(i0,p0),q.BRASS),v0=t.v(g0(i0,U),C0(i0,U),q.BRASS);t.idx.push(L,Y,V,L,V,v0)}}};t.beam([i,d+.03,M],[i,d+.03,M-.05],.011,q.BRASS),A(M-.075,.034,10),t.box(i-.008,d-.1,p-.0125,i+.008,d-.06,p-.0085,q.KEYHOLE)}var Io=[0,G/2,G,-G/2],to=t=>{let o=G/2;return t-Math.round(t/o)*o},ue=t=>{let o=Math.abs(t);return B.top-.55*Math.pow(Math.max(0,Math.sin(o*3+.6)),6)-.25*Math.pow(Math.max(0,Math.sin(o*7+1.9)),8)-.06*Math.sin(o*23)},q0={cx:T/2,cz:B.cz,hx:.57,hz:1.19,top:.19,file:"res/studio/grave.bin",tex:"res/studio/grave.webp"},wn=[[q0.cx-.19,q0.cz-.36,.16],[q0.cx-.05,q0.cz-.43,.25],[q0.cx+.24,q0.cz-.38,.1]];function ys(t){let{cx:o,cz:s,ri:a,ro:e,hw:n,spring:c}=B,l=q.OLDSTONE,h=(x,g,f)=>[o+Math.sin(x)*g,f,s+Math.cos(x)*g],w=x=>c+Math.sqrt(Math.max(0,n*n-x*x)),m=(x,g)=>{let f=[];for(let i=0;i<=160;i++)f.push(-G+2*G*i/160);let y=Math.asin(Math.min(.999,n/x));for(let i of Io)for(let d of[-1,1])f.push(((i+d*y+G)%(2*G)+2*G)%(2*G)-G);f.sort((i,d)=>i-d);for(let i=0;i<f.length-1;i++){let d=f[i],p=f[i+1];if(p-d<1e-5)continue;let M=to((d+p)/2),A=Math.abs(x*Math.sin(M))<n&&Math.abs(M)<G/4,u=L=>A?w(x*Math.sin(to(L))):0,z=[Math.sin(d)*g,0,Math.cos(d)*g],O=[Math.sin(p)*g,0,Math.cos(p)*g],R=h(d,x,u(d)),Z=h(p,x,u(p)),i0=h(p,x,ue(p)),s0=h(d,x,ue(d)),U=t.v(R,z,l,[x*d,R[1]]),p0=t.v(Z,O,l,[x*p,Z[1]]),g0=t.v(i0,O,l,[x*p,i0[1]]),C0=t.v(s0,z,l,[x*d,s0[1]]);if(g>0?t.idx.push(U,p0,g0,U,g0,C0):t.idx.push(U,g0,p0,U,C0,g0),g>0){let L=h(d,a,ue(d)),Y=h(p,a,ue(p));t.quad(s0,i0,Y,L,[0,1,0],l,[[s0[0],s0[2]],[i0[0],i0[2]],[Y[0],Y[2]],[L[0],L[2]]])}}};m(e,1),m(a,-1);for(let x of Io){let g=[Math.sin(x),0,Math.cos(x)],f=[Math.cos(x),0,-Math.sin(x)],v=(d,p,M)=>[o+g[0]*Math.sqrt(p*p-d*d)+f[0]*d,M,s+g[2]*Math.sqrt(p*p-d*d)+f[2]*d];for(let d of[-1,1]){let p=d*n,M=[-f[0]*d,0,-f[2]*d];t.quad(v(p,a,0),v(p,e,0),v(p,e,c),v(p,a,c),M,l,[[0,0],[1,0],[1,1],[0,1]])}let y=20;for(let d=0;d<y;d++){let p=-n+2*n*d/y,M=-n+2*n*(d+1)/y,A=(p+M)/2,u=w(A),z=[-(f[0]*A),-(u-c),-(f[2]*A)],O=Math.hypot(...z),R=z.map(Z=>Z/O);t.quad(v(p,a,w(p)),v(M,a,w(M)),v(M,e,w(M)),v(p,e,w(p)),R,l,[[p,0],[M,0],[M,1],[p,1]])}let i=e+.05;for(let d=0;d<24;d++){let p=G*d/24,M=G*(d+1)/24,A=n+.08,u=z=>{let O=Math.cos(z)*A;return v(Math.max(-i+.01,Math.min(i-.01,O)),i,c+Math.sin(z)*A)};t.beam(u(p),u(M),.06,l)}for(let d of[-1,1]){let p=v(d*(n+.1),e+.06,c-.15),M=v(d*(n+.1),e+.06,c);t.beam(p,M,.14,l)}t.beam(v(0,e+.07,c+n-.05),v(0,e+.07,c+n+.3),.13,l)}let N=(x,g,f,v,y)=>{for(let d=0;d<96;d++){let p=-G+2*G*d/96,M=-G+2*G*(d+1)/96,A=to((p+M)/2);if(y&&Math.abs(g*Math.sin(A))<n+.05&&Math.abs(A)<G/4)continue;let u=[Math.sin(p),0,Math.cos(p)],z=[Math.sin(M),0,Math.cos(M)],O=t.v(h(p,g,f),u,l,[g*p,f]),R=t.v(h(M,g,f),z,l,[g*M,f]),Z=t.v(h(M,g,v),z,l,[g*M,v]),i0=t.v(h(p,g,v),u,l,[g*p,v]);t.idx.push(O,R,Z,O,Z,i0),t.quad(h(p,g,v),h(M,g,v),h(M,x,v),h(p,x,v),[0,1,0],l,[[p,0],[M,0],[M,1],[p,1]]),t.quad(h(p,x,f),h(M,x,f),h(M,g,f),h(p,g,f),[0,-1,0],l,[[p,0],[M,0],[M,1],[p,1]])}};N(e-.02,e+.12,0,.38,!0),N(e-.02,e+.1,B.cornice-.12,B.cornice,!1),N(e-.02,e+.2,B.cornice,B.cornice+.2,!1);for(let x of[G/4,3*G/4,-G/4,-3*G/4]){let g=.3/e;for(let[f,v,y,i]of[[e,e+.07,.38,B.cornice-.12]]){let d=x-g,p=x+g,M=[Math.sin(x),0,Math.cos(x)];t.quad(h(d,v,y),h(p,v,y),h(p,v,i),h(d,v,i),M,l,[[d*v,y],[p*v,y],[p*v,i],[d*v,i]]);for(let[A,u]of[[d,-1],[p,1]]){let z=[Math.cos(A)*u,0,-Math.sin(A)*u];t.quad(h(A,f,y),h(A,v,y),h(A,v,i),h(A,f,i),z,l,[[0,y],[1,y],[1,i],[0,i]])}}}}function bs(){let{cx:t,cz:o,ro:s}=B,a=[],e=[],n=[],c=[],l=[],h=f=>{let v=(f/(2*G)*4%1+1)%1*64,y=Math.floor(v),i=v-y;return Vo[y%64]*(1-i)+Vo[(y+1)%64]*i},w=Rt(9090),m=Math.asin(Math.min(.999,B.gap/B.cloth)),N=[[m,G-m,0],[-G+m,-m,0],[-m-.02,m+.02,1],[G-m-.02,G+m+.02,1]],x=46,g=8;for(let[f,v,y]of N){let i=Math.round((v-f)*B.cloth/.035),d=a.length/3,p=[],M=[];for(let u=0;u<=i;u++)M.push(.2+.25*w());for(let u=0;u<=(y?x:x+g);u++){let z=[];for(let O=0;O<=i;O++){let R=f+(v-f)*O/i,Z=ue(R)+.04,i0=Math.min(R-f,v-R)*B.cloth,s0,U;if(u===0)s0=B.ri+.12,U=Z+.03;else if(u===1)s0=s+.08,U=Z+.07;else if(u<=x){let p0=(u-1)/(x-1);if(U=(Z+.02)*(1-p0),y){let J=Math.abs(Math.sin(R))*B.cloth/B.gap,m0=B.spring+B.hw+.32+.35*(1-Math.min(1,J));U=Z+.02-(Z+.02-m0)*p0}let g0=.38*Math.pow(p0,2)+.1*Math.sqrt(p0)+.26,C0=(.05+.34*Math.pow(p0,1.3))*h(R),L=(.02+.07*p0)*Math.sin(R*B.cloth/.16+2*h(R*1.7)),Y=.03*(1-p0)*Math.sin(R*B.cloth/.055)+.015*Math.sin(R*B.cloth/.031+p0*3),V=L+Y,v0=.12*Math.exp(-i0/.25)*Math.sin(i0*18)*p0;s0=Math.max(s+.26,s+g0+C0+V+v0),y&&(s0=s+.26+.06*Math.sin(R*B.cloth/.09)+.05*p0)}else{let p0=(u-x)/g;s0=s+.74+.39*h(R)+p0*M[O]*(.7+.3*(1+h(R+.3))),U=.012+.05*Math.max(0,Math.sin(p0*7+R*23))*(1-p0)+.03*(1-p0)}z.push([t+Math.sin(R)*s0,U,o+Math.cos(R)*s0])}p.push(z)}for(let u=0;u<p.length;u++)for(let z=0;z<=i;z++){let O=p[u][z],R=p[u][Math.max(z-1,0)],Z=p[u][Math.min(z+1,i)],i0=p[Math.max(u-1,0)][z],s0=p[Math.min(u+1,p.length-1)][z],U=[Z[0]-R[0],Z[1]-R[1],Z[2]-R[2]],p0=[s0[0]-i0[0],s0[1]-i0[1],s0[2]-i0[2]],g0=[U[1]*p0[2]-U[2]*p0[1],U[2]*p0[0]-U[0]*p0[2],U[0]*p0[1]-U[1]*p0[0]],C0=Math.hypot(...g0)||1;g0=g0.map(Y=>Y/C0),a.push(O[0]+F[0],O[1]+F[1],O[2]+F[2]),e.push(...g0),n.push((f+(v-f)*z/i)*B.cloth,u/(x+g));let L=u<=1?0:u<=x?(u-1)/(x-1):1-(u-x)/g*.9;l.push(u<=x?Math.pow(L,1.3)*(1-.6*Math.pow(L,6)):.4*L*L)}let A=i+1;for(let u=0;u<p.length-1;u++)for(let z=0;z<i;z++){let O=d+u*A+z;c.push(O,O+1,O+A+1,O,O+A+1,O+A)}}for(let f of[G/2,-G/2]){let v=a.length/3,y=40,i=30,d=[Math.sin(f),0,Math.cos(f)],p=[Math.cos(f),0,-Math.sin(f)];for(let M=0;M<=i;M++)for(let A=0;A<=y;A++){let u=-B.hw+2*B.hw*A/y,z=M/i,R=(B.spring+Math.sqrt(Math.max(0,B.hw*B.hw-u*u))-.02)*(1-z)+.01,Z=(B.ri+B.ro)/2+.06*Math.sin(u*34)*(.3+z)+.12*z*z,i0=[t+d[0]*Z+p[0]*u,R,o+d[2]*Z+p[2]*u];a.push(i0[0]+F[0],i0[1]+F[1],i0[2]+F[2]),l.push(.6*z);let s0=[d[0]+p[0]*Math.cos(u*34)*.6,.1,d[2]+p[2]*Math.cos(u*34)*.6],U=Math.hypot(...s0);e.push(s0[0]/U,s0[1]/U,s0[2]/U),n.push(u,z)}for(let M=0;M<i;M++)for(let A=0;A<y;A++){let u=v+M*(y+1)+A;c.push(u,u+1,u+y+2,u,u+y+2,u+y+1)}}return{pos:a,nrm:e,uv:n,idx:c,sw:l}}function Ms(t,o){let s=t.pos.length/3;for(let a=0;a<o.pos.length;a+=3){let e=o.pos[a]-F[0],n=o.pos[a+2]-F[2];t.pos.push(T-e+F[0],o.pos[a+1],W-n+F[2]),t.nrm.push(-o.nrm[a],o.nrm[a+1],-o.nrm[a+2])}t.kind.push(...o.kind),t.uv.push(...o.uv),t.anchor.push(...o.anchor);for(let a of o.idx)t.idx.push(a+s)}function _s(t){let{cx:o,hw:s,spring:a,pier:e,face:n,back:c,floor:l,x0:h,x1:w}=o0,m=q.OLDSTONE,N=q.HOLLOW,x=c-s,g=5.35,f=y=>a+Math.sqrt(Math.max(0,s*s-(y-o)*(y-o)));t.box(h-.1,0,n-.28,w+.1,l-.06,W,m,{bottom:!0}),t.box(h-.14,l-.06,n-.34,w+.14,l,W,m),t.box(o-.95,k.top,n-.62,o+.95,k.top+.15,n-.28,m,{bottom:!0});for(let[y,i]of[[h,o-s],[o+s,w]]){t.box(y,l,n+.03,i,g,W,N,{bottom:!0});let d=y<o?y:i,p=y<o?i:y,M=y<o?1:-1,A=11,u=(g-.38-l)/A;for(let z=0;z<A;z++){let O=l+z*u+.018,R=l+(z+1)*u-.018,Z=z%2===0,i0=d+M*.01,s0=Z?p-M*.01:d+M*(e*.66);if(t.box(Math.min(i0,s0),O,n-.06,Math.max(i0,s0),R,n+.03,m,{z1:!0}),!Z){let p0=d+M*(e*.66+.025),g0=p-M*.01;t.box(Math.min(p0,g0),O,n-.02,Math.max(p0,g0),R,n+.03,m,{z1:!0})}let U=d-M*.035;t.box(Math.min(U,d+M*.02),O,n-.035,Math.max(U,d+M*.02),R,Z?n+.9:n+.55,m)}t.box(y-.05,g-.38,n-.07,i+.05,g-.3,W,m),t.box(y-.02,g-.3,n-.03,i+.02,g-.12,W,m),t.box(y-.09,g-.12,n-.11,i+.09,g,W,m)}let v=.03;for(let y=o-s;y<o+s-1e-6;y+=v){let i=y,d=Math.min(o+s,y+v);t.quad([d,f(d),n+.02],[i,f(i),n+.02],[i,g,n+.02],[d,g,n+.02],[0,0,-1],m,[[d,f(d)],[i,f(i)],[i,g],[d,g]])}{let i=s+.07;for(let p=0;p<36;p++){let M=G*p/36,A=G*(p+1)/36;t.beam([o+Math.cos(M)*i,a+Math.sin(M)*i,n-.02],[o+Math.cos(A)*i,a+Math.sin(A)*i,n-.02],.065,m,[0,0,1])}for(let p of[-1,1])t.box(o+p*s-.16,a-.14,n-.06,o+p*s+.16,a,n+.4,m);let d=a+s;t.quad([o-.17,d+.32,n-.08],[o+.17,d+.32,n-.08],[o+.11,d-.06,n-.08],[o-.11,d-.06,n-.08],[0,0,-1],m,[[0,1],[1,1],[1,0],[0,0]]);for(let p of[-1,1])t.quad([o+p*.11,d-.06,n-.08],[o+p*.17,d+.32,n-.08],[o+p*.17,d+.32,n+.02],[o+p*.11,d-.06,n+.02],[p,-.15,0],m,[[0,0],[1,0],[1,1],[0,1]]);t.quad([o-.11,d-.06,n-.08],[o+.11,d-.06,n-.08],[o+.11,d-.06,n+.02],[o-.11,d-.06,n+.02],[0,-1,0],m,[[0,0],[1,0],[1,1],[0,1]])}for(let y of[-1,1]){let i=o+y*s;t.quad([i,l,n],[i,l,x],[i,a,x],[i,a,n],[-y,0,0],N,[[n,l],[x,l],[x,a],[n,a]])}{for(let p=0;p<40;p++){let M=G*p/40,A=G*(p+1)/40,u=(O,R)=>[o+Math.cos(O)*s,a+Math.sin(O)*s,R],z=[-Math.cos((M+A)/2),-Math.sin((M+A)/2),0];t.quad(u(M,n),u(A,n),u(A,x),u(M,x),z,N,[[s*M+0,n],[s*A,n],[s*A,x],[s*M,x]])}for(let p=0;p<40;p++){let M=G*p/40,A=G*(p+1)/40,u=(s0,U)=>[o+Math.cos(s0)*s,U,x+Math.sin(s0)*s],z=s0=>[-Math.cos(s0),0,-Math.sin(s0)],O=t.v(u(M,l),z(M),N,[s*M,l]),R=t.v(u(A,l),z(A),N,[s*A,l]),Z=t.v(u(A,a),z(A),N,[s*A,a]),i0=t.v(u(M,a),z(M),N,[s*M,a]);t.idx.push(O,R,Z,O,Z,i0)}let d=[];for(let p=0;p<=14;p++){let M=G/2*p/14,A=[];for(let u=0;u<=40;u++){let z=G*u/40,O=[Math.cos(z)*Math.cos(M),Math.sin(M),Math.sin(z)*Math.cos(M)];A.push(t.v([o+s*O[0],a+s*O[1],x+s*O[2]],O.map(R=>-R),N,[s*z,a+s*M]))}d.push(A)}for(let p=0;p<14;p++)for(let M=0;M<40;M++){let A=d[p][M],u=d[p][M+1],z=d[p+1][M+1],O=d[p+1][M];t.idx.push(A,u,z,A,z,O)}t.box(o-s,l-.02,n-.02,o+s,l,c,N,{bottom:!0,x0:!0,x1:!0,z1:!0})}t.box(P0.x-.6,l,De-.5,P0.x+.6,P0.plinth-.05,De+.55,m,{bottom:!0}),t.box(P0.x-.64,P0.plinth-.05,De-.54,P0.x+.64,P0.plinth,De+.59,m),t.box(h-.06,g,n-.08,w+.06,g+.32,W,m),t.box(h-.02,g+.32,n-.02,w+.02,g+.78,W,m),t.box(h-.12,g+.78,n-.16,w+.12,g+.86,W,m),t.box(h-.2,g+.86,n-.26,w+.2,g+1.02,W,m);{let y=g+.55,i=.34,d=.2,p=28,M=[];for(let A=0;A<=4;A++){let u=A/4,z=[];for(let O=0;O<=p;O++){let R=2*G*O/p,Z=.09*Math.sqrt(Math.max(0,1-u*u))+.01;z.push(t.v([o+Math.cos(R)*i*u,y+Math.sin(R)*d*u,n-.02-Z],[Math.cos(R)*u*.6,Math.sin(R)*u*.6,-1],m,[Math.cos(R)*u,Math.sin(R)*u]))}M.push(z)}for(let A=0;A<4;A++)for(let u=0;u<p;u++){let z=M[A][u],O=M[A][u+1],R=M[A+1][u+1],Z=M[A+1][u];t.idx.push(z,Z,R,z,R,O)}for(let A=0;A<p;A++){let u=2*G*A/p,z=2*G*(A+1)/p;t.beam([o+Math.cos(u)*(i+.03),y+Math.sin(u)*(d+.03),n-.04],[o+Math.cos(z)*(i+.03),y+Math.sin(z)*(d+.03),n-.04],.025,m,[0,0,1])}for(let A of[-1,1])for(let u=0;u<14;u++){let z=1.8*G*u/14,O=1.8*G*(u+1)/14,R=.1*(1-u/16),Z=.1*(1-(u+1)/16),i0=o+A*(i+.16),s0=y;t.beam([i0+A*Math.cos(z)*R,s0+Math.sin(z)*R,n-.04],[i0+A*Math.cos(O)*Z,s0+Math.sin(O)*Z,n-.04],.018,m,[0,0,1])}}{let y=g+1.02,i=.62,d=(w-h)/2+.2,p=n-.2,M=u=>y+i*(1-Math.abs(u-o)/d);for(let u=o-d;u<o+d-1e-6;u+=.1){let z=u,O=Math.min(o+d,u+.1);t.quad([O,y,p],[z,y,p],[z,M(z),p],[O,M(O),p],[0,0,-1],m,[[O,y],[z,y],[z,M(z)],[O,M(O)]])}let A=Math.hypot(d,i);for(let u of[-1,1]){let z=[u*i/A,d/A,0],O=o+u*(d+.06);t.quad([o,y+i+.06,p-.06],[O,y-.02,p-.06],[O,y-.02,W],[o,y+i+.06,W],z,m,[[0,p],[A,p],[A,W],[0,W]]),t.quad([o,y+i+.06,p-.06],[o,y+i-.06,p-.06],[O,y-.12,p-.06],[O,y-.02,p-.06],[0,0,-1],m,[[0,1],[0,0],[A,0],[A,1]])}}}var jo=[[72,72,72,72,72,72,70,69,68,65,63,61,63,63,64,66,68,69,70,70,70,70,70,71],[72,72,72,72,72,72,70,69,68,65,63,61,63,63,64,66,68,69,70,70,70,70,70,71],[72,72,72,72,72,72,70,69,67,65,63,61,63,63,64,66,68,69,70,70,70,70,70,71],[41,44,57,57,57,53,51,34,53,55,57,57,59,59,59,63,65,65,65,64,60,60,60,59],[56,56,62,63,63,63,59,35,54,55,59,59,59,59,58,61,63,63,63,62,50,50,50,50],[62,73,73,73,71,71,60,40,54,55,59,60,60,60,58,62,65,65,65,61,54,49,49,54],[66,79,79,79,78,76,65,45,54,54,59,62,62,62,62,62,65,65,65,61,54,49,49,54],[66,80,81,82,82,82,65,50,48,57,62,62,62,62,62,62,65,65,65,61,54,49,49,54],[66,80,86,86,86,85,66,50,48,57,62,62,62,62,62,61,64,64,64,60,52,50,50,52],[64,80,86,86,86,85,66,50,43,57,62,62,62,62,61,61,63,63,63,59,51,50,50,49],[64,76,86,86,86,85,66,50,46,56,60,60,60,60,58,59,61,61,61,57,51,51,51,48],[59,66,85,85,85,85,66,50,46,47,54,56,56,56,53,55,58,58,58,55,52,52,51,46],[46,52,77,77,77,77,66,49,46,44,39,42,42,42,43,47,47,47,50,52,52,52,51,45],[38,38,49,60,60,60,56,46,46,44,39,42,42,42,44,47,47,47,51,52,52,52,51,37],[25,30,30,30,35,38,38,38,44,47,47,47,45,42,44,47,47,47,51,52,52,52,50,23],[13,14,27,28,29,30,31,36,45,49,49,49,48,41,44,47,47,47,51,52,52,52,41,17],[23,15,15,16,16,28,30,36,45,49,49,49,48,41,44,45,45,45,50,50,50,50,43,32],[23,19,19,19,19,19,23,34,45,49,49,49,48,41,44,44,44,44,51,51,51,51,46,32],[24,19,19,19,19,22,27,31,42,48,48,48,47,39,42,42,42,44,51,51,51,51,46,32],[24,19,19,19,23,25,28,31,38,42,42,42,40,37,40,41,42,44,51,51,51,51,46,32],[26,23,18,19,23,25,28,31,37,37,37,37,32,33,34,38,42,44,50,51,51,51,46,31],[31,30,27,27,23,25,28,30,31,31,31,30,28,28,29,34,40,42,48,49,49,49,46,31],[39,37,33,30,22,25,27,27,27,27,26,22,22,22,22,24,31,36,42,43,43,43,43,39],[42,40,35,30,27,14,14,15,15,15,12,12,12,13,13,15,16,18,39,43,43,43,43,42],[42,41,35,30,27,0,0,0,0,0,0,0,0,0,0,0,0,0,41,43,43,43,43,42],[42,41,35,29,27,0,0,0,0,0,0,0,0,0,0,0,0,0,41,43,43,43,43,42],[42,41,35,29,15,0,0,0,0,0,0,0,0,0,0,0,0,0,41,43,43,43,42,42]];function zs(t,o){let a=jo.length,e=Math.max(0,Math.min(a-1.001,t/.1)),n=(o/(2*G)*24%24+24)%24,c=Math.floor(e),l=Math.floor(n),h=e-c,w=n-l,m=(g,f)=>jo[Math.min(a-1,g)][f%24]/100,N=m(c,l)*(1-w)+m(c,l+1)*w,x=m(c+1,l)*(1-w)+m(c+1,l+1)*w;return N*(1-h)+x*h}var ao=[[-2.5,2.1,2.3,1,1.3],[2.2,1.6,1.55,-1,4.1]];function Xo(t){let[o,s,a,e,n]=ao[t],c=[],l=140,h=null;for(let w=0;w<=l;w++){let m=w/l,N=.02+Math.pow(m,.92)*a,x=o+e*s*2*G*m,g=zs(N,x)+.035;h=h===null?g:Math.max(g,h*.75+g*.25);let f=h+.018*Math.sin(m*37+n)+.01*Math.sin(m*71+n*3);c.push([P0.x+Math.sin(x)*f,P0.plinth+N+.025*Math.sin(m*23+n*2),P0.z-.05+Math.cos(x)*f,x,m])}return c}function Ss(t){let o=Rt(77);for(let s=0;s<ao.length;s++){let a=Xo(s);for(let e=0;e<a.length-1;e++)t.beam(a[e],a[e+1],.013*(1-a[e][4]*.45),q.DARKWOOD)}for(let[s,a,e]of Lt){let[n,c]=je(s);for(let l=0;l<2;l++){let h=null;for(let w=n;w<=c;w+=.18){let m=Ie(s,a,w),N=Math.sin(w*3.1+l*2+e)*.07,x=Math.cos(w*2.3+l+e)*.05,g=s==="wall"?.25+.5*w/r0:0,f=s==="wall"?[.05+Math.abs(x)*.6,m[1],m[2]+N*(1.5+l)*(1+2*g)+(l-.5)*g]:s==="ridge"?[m[0]+N,m[1]+x+.12,m[2]]:[m[0],m[1]+x+.12,m[2]+N];h&&(s==="wall"||xe(w,e)||o()<.5)&&t.beam(h,f,(s==="wall"?.022*(1.2-w/r0):.012)+.008*o(),q.WOOD),h=f}}}}function $s(t){let o=Rt(4242),s=(e,n)=>!(Math.abs(e-q0.cx)<q0.hx+.2&&Math.abs(n-q0.cz+.08)<q0.hz+.42)&&!(e>k.x0-k.curb-.1&&e<k.x1+k.curb+.1&&n>k.z0-k.curb-.1&&n<k.z1+k.curb+.1)&&e>.2&&e<T-.2&&n>.3&&n<W-.4,a=(e,n,c,l)=>{let h=.022+o()*.022,w=o()*2*G,m=Math.cos(w),N=Math.sin(w),x=(f,v)=>[e+(f*m-v*N)*h,n+.004*f*v,c+(f*N+v*m)*h],g=l?2:0;t.quad(x(-1,-1),x(-1,1),x(1,1),x(1,-1),[0,1,0],q.BRACT,[[g,0],[g,1],[g+1,1],[g+1,0]])};for(let[e,n,c]of Lt){let[l,h]=je(e);for(let w=l;w<=h;w+=.05){if(!xe(w,c)||o()>.55)continue;let m=Ie(e,n,w),N=m[0]+(o()-.5)*1.8,x=m[2]+(o()-.5)*1.8;s(N,x)&&a(N,.004,x,o()<.18)}}for(let e=0;e<260;e++){let n=Math.floor(o()*4),c,l;n<2?(c=n?k.x1+k.curb+.12+o()*o()*.9:k.x0-k.curb-.12-o()*o()*.9,l=k.z0+o()*(k.z1-k.z0)):(l=n===2?k.z0-k.curb-.12-o()*o()*.9:k.z1+k.curb+.12+o()*o()*.9,c=k.x0+o()*(k.x1-k.x0)),s(c,l)&&a(c,.004,l,o()<.18)}for(let e=0;e<70;e++){let n=k.x0+.08+o()*(k.x1-k.x0-.16),c=k.z0+.08+o()*(k.z1-k.z0-.16);Math.hypot(n-P0.x,c-P0.z)<.6||(t.float=[n,c,n*5.1+c*2.9],a(n,.016,c,o()<.2),t.float=null)}}function ks(t,o,s){let a=(n,c,l,h,w)=>{let m=t.pos.length/3,N=Math.cos(l),x=Math.sin(l),g=Math.cos(h),f=Math.sin(h),v=[N,0,-x],y=[x*f,g,N*f],i=[v[1]*y[2]-v[2]*y[1],v[2]*y[0]-v[0]*y[2],v[0]*y[1]-v[1]*y[0]],d=w?.95:s()*.8;for(let[p,M]of[[0,0],[1,0],[1,1],[0,1]]){let A=(p-.5)*c,u=(M-.5)*c;t.pos.push(n[0]+v[0]*A+y[0]*u+F[0],n[1]+v[1]*A+y[1]*u+F[1],n[2]+v[2]*A+y[2]*u+F[2]),t.nrm.push(...i),t.uv.push(p,M),t.shade.push(d),t.flower.push(1)}t.idx.push(m,m+1,m+2,m,m+2,m+3)};function e(n,c,l){let h=c/r0,w=Math.min(.15+.9*h,n<1||n>W-1?.6:1.15),m=Math.round(3+7*h),N=c<1?0:Math.round((2+9*h)*(xe(c*1.4,l)?1:.45));for(let x=0;x<m;x++){let g=s()*2*G;o([.04+s()*.22,c+(s()-.5)*.12,n+(s()-.5)*2*w],[Math.cos(g)*.4+.5,-.2-s()*.5,Math.sin(g)],[0,0,1],.07+s()*.06,.1)}for(let x=0;x<N;x++)a([.06+s()*.28,c+(s()-.5)*.18,n+(s()-.5)*2*w*.9],.34+s()*.32,s()*2*G,(s()-.5)*2.4,s()<.14);if(c>3&&s()<.05){let x=[.15,c,n+(s()-.5)*2*w],g=.4+s()*1.2;for(let f=0;f<g;f+=.13)x=[x[0]+.03,x[1]-.13,x[2]+(s()-.5)*.06],a([x[0],x[1],x[2]],(.26+s()*.2)*(1-.4*f/g),s()*2*G,(s()-.5)*.8,s()<.15)}}for(let[n,c,l]of Lt){let[h,w]=je(n);for(let m=h;m<=w;m+=.1){if(n==="wall"){e(c,m,l);continue}if(!xe(m,l))continue;let N=Ie(n,c,m),x=()=>(s()-.5)*.7,g=4+Math.floor(s()*4);for(let f=0;f<g;f++){let v=n==="ridge"?[N[0]+x(),N[1]-s()*.25,N[2]+x()*.4]:[N[0]+x()*.4,N[1]-s()*.25,N[2]+x()];a(v,.42+s()*.4,s()*2*G,(s()-.5)*2.4,s()<.16)}for(let f=0;f<5;f++){let v=s()*2*G;o([N[0]+x()*.6,N[1]-s()*.2,N[2]+x()*.6],[Math.cos(v),-.3-s()*.5,Math.sin(v)],[-Math.sin(v),0,Math.cos(v)],.08+s()*.06,.1)}if(s()<.22){let f=.5+s()*2,v=[N[0],N[1],N[2]],y=[(s()-.5)*.08,(s()-.5)*.08];for(let i=0;i<f;i+=.13){v=[v[0]+y[0],v[1]-.13,v[2]+y[1]];let d=(.3+s()*.22)*(1-.4*i/f);if(a([v[0]+(s()-.5)*.08,v[1],v[2]+(s()-.5)*.08],d,s()*2*G,(s()-.5)*.8,s()<.15),s()<.6){let p=s()*2*G;o([v[0],v[1],v[2]],[Math.cos(p),-.6,Math.sin(p)],[-Math.sin(p),0,Math.cos(p)],.05+s()*.04,.1)}}}}}}var Bo=(()=>{let t=Rt(9001),o=[],s=[];for(let[e,n,c]of Lt){let[l,h]=je(e);for(let w=l;w<=h;w+=.1)xe(w,c)&&s.push(Ie(e,n,w))}let a=s.filter(e=>e[0]>k.x0-.6&&e[0]<k.x1+.6&&e[2]>k.z0&&e[2]<k.z1);for(let e=0;e<64;e++){let n=e%2===0&&a.length?a:s,c=n[Math.floor(t()*n.length)];o.push({start:[c[0]+(t()-.5)*.4,c[1]-.25-t()*.3,c[2]+(t()-.5)*.4],period:18+t()*22,offset:t()*60,drift:[(t()-.5)*1.6,(t()-.5)*1.6],speed:.45+t()*.25,seed:t(),white:t()<.18?1:0})}return o})(),jt=[k.x0+.06,k.z0+.06,k.x1-.06,k.z1-.06];function Ns(t,o){let s=o+t.offset,a=Math.floor(s/t.period),e=s-a*t.period,n=.6+.4*Math.sin(a*1.7+t.seed*5),c=t.start[0]+t.drift[0]*n,l=t.start[2]+t.drift[1]*n,h=c>jt[0]&&c<jt[2]&&l>jt[1]&&l<jt[3],w=h?.017:.006,m=(t.start[1]-w)/t.speed;return{ph:e,Tf:m,lx:c,lz:l,inPool:h}}var $t=[{at:[T/2-.8,Q0(7.6)],dir:.9,len:.92,kind:0,sip:21,first:9},{at:[T/2+.9,Q0(11.6)],dir:3.6,len:.74,kind:1,sip:29,first:17},{at:[T/2-.3,Q0(12.8)],dir:5.2,len:.86,kind:2,sip:25,first:4},{at:[T/2+1,Q0(7)],dir:2.2,len:.7,kind:1,sip:33,first:23},{at:[T/2-1.1,Q0(10.4)],dir:4.4,len:.82,kind:0,sip:27,first:13},{at:[T/2+.4,Q0(9)],dir:1.4,len:.94,kind:2,sip:31,first:28},{at:[T/2-.9,Q0(13)],dir:5.9,len:.66,kind:1,sip:23,first:6},{at:[T/2+1.1,Q0(12.6)],dir:3,len:.8,kind:0,sip:35,first:31}],Gt=[k.x0+.5,k.z0+.5,k.x1-.5,k.z1-.55],ve=[k.x0+.25,k.z0+.25,k.x1-.25,k.z1-.3],de=12,pe=-.36,no=[];function As(){let t=f=>{let v=Math.sin(f*12.9898+78.233)*43758.5453;return v-Math.floor(v)},o=$t.map((f,v)=>({k:f,i:v,x:f.at[0],z:f.at[1],th:f.dir,w:0,v:.08,y:-.17,ph:v*2.1,pitch:0,kappa:0,thrust:0,amp:.2,stroking:v%2===0,modeT:t(v*3.1)*3,aim:f.dir,nextAim:t(v*7.7)*5,yAim:-.17,nextY:t(v*5.9)*8,gx:f.at[0],gz:f.at[1],nextSip:f.first,sipT:-1,bite:0,notice:0})),s=[],a=[];for(let f=0;f<de;f++)a.push({x:0,z:0,alive:0,born:0,seed:f*.37});let e={on:!1,x:0,z:0,t0:0,petal:!1,eaten:0,lure:null},n=0,c=0,l=f=>Math.atan2(Math.sin(f),Math.cos(f)),h=()=>t(++c*1.618+n*.37);return{fish:o,events:s,crumbs:a,feed:e,drop:(f,v)=>{f=Math.max(ve[0],Math.min(ve[2],f)),v=Math.max(ve[1],Math.min(ve[3],v)),Object.assign(e,{on:!0,x:f,z:v,t0:n,petal:!1,eaten:0}),a.forEach((y,i)=>{let d=t(n+i)*Math.PI*2,p=.04+.16*Math.sqrt(t(n*1.7+i*3.1));Object.assign(y,{x:f+Math.cos(d)*p,z:v+Math.sin(d)*p,alive:1,born:n+t(i*5.3+n)*.35})}),s.push([f,v,n,1]);for(let y of o)y.notice=n+.3+Math.hypot(y.x-f,y.z-v)*.35+t(y.i*9.1+n)*.7},lure:(f,v)=>{let y=null,i=1e9;for(let d of o){let p=Math.hypot(d.x-f,d.z-v);p<i&&(i=p,y=d)}e.lure={x:f,z:v,fish:y}},petal:(f,v)=>{Object.assign(e,{on:!0,x:f,z:v,t0:n,petal:!0,eaten:0}),a.forEach((i,d)=>Object.assign(i,{x:f,z:v,alive:d===0?1:0,born:n})),s.push([f,v,n,.45]);let y=e.lure&&e.lure.fish;if(!y){let i=1e9;for(let d of o){let p=Math.hypot(d.x-f,d.z-v);p<i&&(i=p,y=d)}}Math.hypot(y.x-f,y.z-v)>1.4&&(y.x=f+.2,y.z=v-1.2,y.th=Math.PI/2,y.y=-.22,y.v=.06);for(let i of o)i.notice=i===y?n+.9:n+4.5+Math.hypot(i.x-f,i.z-v)*.8+t(i.i*9.1)*2;e.lure=null},unpetal:()=>{if(!e.petal){e.lure=null;return}e.on=!1,e.petal=!1,e.eaten=0,e.lure=null;for(let f of a)f.alive=0},step:f=>{n+=f;let v=n,y=0;for(let i of a)!i.alive||v<i.born||(y++,i.x+=Math.sin(v*.7+i.seed*11)*.004*f,i.z+=Math.cos(v*.6+i.seed*7)*.004*f);if(e.on&&(y===0&&v>e.t0+1&&!e.petal||e.petal&&e.eaten&&v>e.eaten+3||v>e.t0+40)){e.petal=!1,e.on=!1;for(let i of a)i.alive=0}for(let i of o){let{k:d}=i,p=d.len,M=e.on&&v>i.notice;(v>i.nextAim||Math.hypot(i.gx-i.x,i.gz-i.z)<.7)&&(i.gx=Gt[0]+h()*(Gt[2]-Gt[0]),i.gz=Gt[1]+h()*(Gt[3]-Gt[1]),i.nextAim=v+12+h()*14),e.lure&&e.lure.fish===i&&(i.gx=e.lure.x+Math.cos(v*.3)*.3,i.gz=e.lure.z-.45+Math.sin(v*.3)*.2,i.nextAim=v+1,i.yAim=-.2),i.aim=Math.atan2(i.gz-i.z,i.gx-i.x)+.35*Math.sin(v*.21+i.i*1.7);let A=i.aim,u=.7,z=null;if(M){let $0=1e9;for(let b of a){if(!b.alive||v<b.born)continue;let $=Math.hypot(b.x-i.x,b.z-i.z)+.1*Math.sin(i.i*3.3+b.seed*9);$<$0&&($0=$,z=b)}let M0=z?z.x:e.x,_0=z?z.z:e.z;A=Math.atan2(_0-i.z,M0-i.x),i.aim=A,u=1.8}let O=.6+p*.8+i.v*2,R=M?ve:Gt,Z=0;for(let $0 of[0,.5,-.5]){let M0=i.x+Math.cos(i.th+$0)*O,_0=i.z+Math.sin(i.th+$0)*O;Z=Math.max(Z,Math.max(R[0]-M0,M0-R[2],R[1]-_0,_0-R[3],0))}if(Z>0){let $0=(R[0]+R[2])/2,M0=(R[1]+R[3])/2+Math.sin(i.i*2.3)*1.5,_0=Math.atan2(M0-i.z,$0-i.x),b=Math.min(1,Z*2.2);A=i.th+l(_0-i.th)*b+l(A-i.th)*(1-b),M||(i.aim=A),u=Math.max(u,.6+b*.8)}let i0=0;for(let $0 of o){if($0===i)continue;let M0=$0.x-i.x,_0=$0.z-i.z,b=Math.hypot(M0,_0),$=(M?.4:1)*(p+$0.k.len)/2+.2;if(b<$&&Math.abs($0.y-i.y)<.14){let D=l(Math.atan2(_0,M0)-i.th);(Math.abs(D)<1.6||b<$*.5)&&(i0-=Math.sign(D||1)*($-b)/$*(Math.abs(D)<1.6?1:.6))}}let s0=l(A-i.th)+i0*(M?.4:2);i.modeT-=f,M?(i.stroking=!0,i.modeT=Math.max(i.modeT,.4)):i.modeT<=0&&(i.stroking=!i.stroking,i.modeT=i.stroking?1.2+h()*1.6:1.6+h()*3.2),!i.stroking&&(Math.abs(s0)>.9||i.v<.035)&&(i.stroking=!0,i.modeT=1+h()*.8),!M&&i.sipT<0&&v>i.nextSip&&(i.sipT=0,i.nextSip=v+d.sip*(.7+.6*h()));let U=0;if(i.sipT>=0){let $0=i.sipT;i.sipT+=f,U=Math.min(1,$0/1.6)*(1-Math.max(0,Math.min(1,($0-2.6)/1.6))),$0<1.7&&i.sipT>=1.7&&s.push([i.x+Math.cos(i.th)*.03,i.z+Math.sin(i.th)*.03,v,.9]),$0<2.4&&i.sipT>=2.4&&s.push([i.x,i.z,v,.55]),(i.sipT>4.2||M)&&(i.sipT=-1)}let p0=M&&e.petal?.7:1,g0=(i.stroking?M?2.4*p0:1:0)*(1-.6*U);i.thrust+=(g0-i.thrust)*Math.min(f*3,1);let C0=M?.9:.55;i.v+=(i.thrust*.085*(.7+.4*p)-C0*i.v)*f,i.v=Math.max(i.v,.008);let L=.35+.65*Math.min(1,i.thrust),Y=Math.max(-u,Math.min(u,s0*1.3))*L;i.w+=(Y-i.w)*Math.min(f*2.2,1),i.th+=i.w*f,v>i.nextY&&(i.yAim=-(.13+h()*.1),i.nextY=v+6+h()*10);let V=i.yAim;if(U>0&&(V+=(-.045-V)*U),M){let $0=z?z.x:e.x,M0=z?z.z:e.z,_0=1-Math.min(1,Math.max(0,(Math.hypot($0-i.x,M0-i.z)-.15)/.9));if(V+=((e.petal?.012:-.04)-V)*_0,z&&v>i.bite&&i.y>(e.petal?-.02:-.08)){let b=i.x+Math.cos(i.th)*(e.petal?.09:.02),$=i.z+Math.sin(i.th)*(e.petal?.09:.02);Math.hypot(z.x-b,z.z-$)<(e.petal?.14:.09)&&(z.alive=0,i.bite=v+1.3,e.petal?(e.eaten=v,s.push([z.x,z.z,v,1.6]),s.push([z.x+Math.cos(i.th)*.12,z.z+Math.sin(i.th)*.12,v+.01,1])):s.push([z.x,z.z,v,.75]))}}i.x+=Math.cos(i.th)*i.v*f,i.z+=Math.sin(i.th)*i.v*f,i.x=Math.max(k.x0+.15,Math.min(k.x1-.15,i.x)),i.z=Math.max(k.z0+.15,Math.min(k.z1-.15,i.z));let v0=(V-i.y)*Math.min(f*(M?2:.8),1);i.y+=v0;let J=M&&e.petal?.75:.4;i.pitch+=(Math.max(-J,Math.min(J,v0/f/Math.max(i.v,.06)*(M&&e.petal?1.8:1)))-i.pitch)*Math.min(f*2.5,1);let m0=Math.max(-1/p,Math.min(1/p,i.w/Math.max(i.v,.1)));i.kappa+=(m0-i.kappa)*Math.min(f*4,1);let D0=.12+.88*Math.min(1.4,i.thrust)+.4*Math.min(1,Math.abs(i.w));i.amp+=(D0-i.amp)*Math.min(f*2,1),i.ph+=f*(2+5.5*Math.min(1.6,i.thrust))*(.75+.35/Math.sqrt(p))}for(;s.length&&v-s[0][2]>10;)s.shift()},get t(){return n}}}function qs(){let t=so();{let o=k.x0-k.curb,s=k.x1+k.curb,a=k.z0-k.curb,e=k.z1+k.curb,n=[[0,0,T,a],[0,e,T,W],[0,a,o,e],[s,a,T,e]];for(let[c,l,h,w]of n)for(let N=c;N<h-1e-6;N+=1)for(let x=l;x<w-1e-6;x+=1){let g=N,f=Math.min(h,N+1),v=x,y=Math.min(w,x+1);t.quad([g,0,v],[g,0,y],[f,0,y],[f,0,v],[0,1,0],q.FLOOR,[[g,v],[g,y],[f,y],[f,v]])}}for(let o of[0,1]){let s=o?T:0,a=o?T+tt:-tt,e=o?[-1,0,0]:[1,0,0],n=.04;for(let g=0;g<W-1e-6;g+=n){let f=g,v=Math.min(W,g+n),y=(f+v)/2,i=null;if(!o)for(let p of I.c)Nt(y-p)!==null&&(i=[I.sill,Math.min(Nt(f-p)||I.spring,Nt(v-p)||I.spring)]);let d=i?[[0,i[0]],[i[1],r0]]:[[0,r0]];for(let[p,M]of d)M<=p||(o?t.quad([s,p,v],[s,p,f],[s,M,f],[s,M,v],e,q.ROCK,[[v,p],[f,p],[f,M],[v,M]]):t.quad([s,p,f],[s,p,v],[s,M,v],[s,M,f],e,q.ROCK,[[f,p],[v,p],[v,M],[f,M]]))}if(!o)for(let g of I.c){for(let i of[-1,1]){let d=g+i*I.hw,p=[0,0,-i],M=[s,I.sill,d],A=[a,I.sill,d],u=[a,I.spring,d],z=[s,I.spring,d];i>0!=!!o?t.quad(M,A,u,z,p,q.ROCK,[[0,I.sill],[tt,I.sill],[tt,I.spring],[0,I.spring]]):t.quad(z,u,A,M,p,q.ROCK,[[0,I.spring],[tt,I.spring],[tt,I.sill],[0,I.sill]])}let f=28;for(let i=0;i<f;i++){let d=i/f*G,p=(i+1)/f*G,M=g+Math.cos(d)*I.hw,A=g+Math.cos(p)*I.hw,u=I.spring+Math.sin(d)*I.hw,z=I.spring+Math.sin(p)*I.hw,O=[0,-Math.sin((d+p)/2),-Math.cos((d+p)/2)];o?t.quad([s,u,M],[a,u,M],[a,z,A],[s,z,A],O,q.ROCK,[[0,d],[tt,d],[tt,p],[0,p]]):t.quad([s,z,A],[a,z,A],[a,u,M],[s,u,M],O,q.ROCK,[[0,p],[tt,p],[tt,d],[0,d]])}let v=o?T-.08:-tt,y=o?T+tt:.08;t.box(v,I.sill-.09,g-I.hw-.12,y,I.sill,g+I.hw+.12,q.OLDSTONE)}let c=o?T:0,l=o?-1:1,h=q.OLDSTONE,w=Math.min(c,c+l*.32),m=Math.max(c,c+l*.32);t.box(w,r0-.55,0,m,r0-.3,W,h);let N=Math.min(c,c+l*.42),x=Math.max(c,c+l*.42);t.box(N,r0-.3,0,x,r0-.12,W,h)}for(let[o,s]of[[0,1],[W,-1]]){for(let c=0;c<32;c++){let l=c/32*T,h=(c+1)/32*T,w=N=>N<T/2?r0+ot*N:r0+ot*(T-N),m=s>0?[[h,0],[l,0],[l,w(l)],[h,w(h)]]:[[l,0],[h,0],[h,w(h)],[l,w(l)]];t.quad(...m.map(([N,x])=>[N,x,o]),[0,0,s],q.ROCK,m.map(([N,x])=>[N,x]))}let e=s>0?0:W-.32,n=s>0?.32:W;t.box(0,r0-.55,e,T,r0-.3,n,q.OLDSTONE)}gs(t);{let o=so();_s(o),Ms(t,o)}ys(t);{let{x0:o,x1:s,z0:a,z1:e,curb:n,top:c}=k,l=.06,h=.085;t.box(o-n,0,a-n,o,c-h,e+n,q.OLDSTONE,{bottom:!0}),t.box(s,0,a-n,s+n,c-h,e+n,q.OLDSTONE,{bottom:!0}),t.box(o,0,a-n,s,c-h,a,q.OLDSTONE,{bottom:!0}),t.box(o,0,e,s,c-h,e+n,q.OLDSTONE,{bottom:!0}),t.box(o-n-l,c-h,a-n-l,o+l*.5,c,e+n+l,q.OLDSTONE),t.box(s-l*.5,c-h,a-n-l,s+n+l,c,e+n+l,q.OLDSTONE),t.box(o+l*.5,c-h,a-n-l,s-l*.5,c,a+l*.5,q.OLDSTONE),t.box(o+l*.5,c-h,e-l*.5,s-l*.5,c,e+n+l,q.OLDSTONE);let w=.5;for(let m=o;m<s-1e-6;m+=w)for(let N=a;N<e-1e-6;N+=w){let x=m,g=Math.min(s,m+w),f=N,v=Math.min(e,N+w);t.quad([x,0,f],[x,0,v],[g,0,v],[g,0,f],[0,1,0],q.WATER,[[x,f],[x,v],[g,v],[g,f]])}}return t}function Os(t){for(let s of[0]){let a=s?T+tt*.5:-tt*.5,e=.05,n=vt.w*.5;for(let c of I.c){for(let l of vt.cols){let h=Nt(l)-.01;t.box(a-e,I.sill,c+l-n,a+e,h,c+l+n,q.STEEL)}for(let l=I.sill+vt.rowH;l<I.spring+.01;l+=vt.rowH)t.box(a-e,l-n,c-I.hw,a+e,l+n,c+I.hw,q.STEEL);for(let[l,h]of[[I.hw-.03,.06],[vt.ring,n]])for(let m=0;m<24;m++){let N=m/24*G,x=(m+1)/24*G;t.beam([a,I.spring+Math.sin(N)*l,c+Math.cos(N)*l],[a,I.spring+Math.sin(x)*l,c+Math.cos(x)*l],h,q.STEEL,[1,0,0])}for(let l of[-1,1])t.box(a-e,I.sill,c+l*(I.hw-.03)-.03,a+e,I.spring,c+l*(I.hw-.03)+.03,q.STEEL);t.box(a-e,I.sill,c-I.hw,a+e,I.sill+.06,c+I.hw,q.STEEL)}}let o=s=>s<T/2?r0+ot*s:r0+ot*(T-s);for(let s=0;s<=12;s++){let a=s*dt.rafter;for(let[e,n]of[[-.3,T/2],[T/2,T+.3]])t.beam([e,o(Math.max(0,Math.min(T,e)))-.1,a],[n,o(n)-.1,a],.06,q.STEEL)}t.beam([T/2,yt-.14,-.2],[T/2,yt-.14,W+.2],.12,q.STEEL);for(let s of[.05,T-.05])t.beam([s,r0-.05,0],[s,r0-.05,W],.1,q.STEEL);for(let s of It){t.box(-.05,r0-.13,s-.08,T+.05,r0+.13,s+.08,q.STEEL),t.beam([T/2,r0,s],[T/2,yt-.2,s],.07,q.STEEL);for(let a of[-1,1])t.beam([T/2+a*T/4,r0,s],[T/2,yt-.4,s],.055,q.STEEL),t.beam([T/2+a*T/4,r0,s],[T/2+a*T/4,o(T/2+a*T/4)-.2,s],.045,q.STEEL),t.beam([T/2+a*(T/2-.1),r0,s],[T/2+a*T/4,o(T/2+a*T/4)-.2,s],.045,q.STEEL);for(let a of[-1,1])t.box(T/2+a*T/4-.12,r0-.18,s-.1,T/2+a*T/4+.12,r0+.18,s+.1,q.STEEL)}}function Ts(t){let o=Rt(311),s=[],a=[[k.x0+.9,Q0(6.6),.9,11],[k.x1-.8,Q0(8.4),.85,10],[k.x0+.8,Q0(10.6),.8,9],[k.x1-.9,Q0(12.4),.9,11],[k.x0+1,Q0(13.9),.65,7],[T/2+.2,Q0(9.6),.5,4],[k.x1-.7,Q0(15.9),.6,6]];for(let[n,c,l,h]of a)for(let w=0;w<h;w++)for(let m=0;m<40;m++){let N=o()*2*G,x=l*Math.sqrt(o()),g=n+Math.cos(N)*x,f=c+Math.sin(N)*x,v=.15+o()*.17;if(!(g-v<k.x0+.04||g+v>k.x1-.04||f-v<k.z0+.04||f+v>k.z1-.04)&&!(Math.hypot(g-P0.x,f-P0.z)<.62+v)&&!s.some(y=>Math.hypot(y[0]-g,y[1]-f)<(y[2]+v)*.93)){s.push([g,f,v,o()*2*G,o()]);break}}for(let[n,c,l,h,w]of s){no.push([n,c,l]),t.float=[n,c,w*7.3+l*13];let m=28,N=4,x=l*1.08,g=[];for(let f=0;f<=N;f++){let v=[];for(let y=0;y<m;y++){let i=y/m*2*G,d=f/N,p=i-h,M=.012+.004*(1-d*d)+.006*Math.pow(d,6)*(.5+.5*Math.sin(i*3+w*9));v.push(t.v([n+Math.cos(i)*x*d,M,c+Math.sin(i)*x*d],[0,1,0],q.PAD,[.5+.5*d*Math.sin(p),.5+.5*d*Math.cos(p)]))}g.push(v)}for(let f=0;f<N;f++)for(let v=0;v<m;v++){let y=g[f][v],i=g[f][(v+1)%m],d=g[f+1][(v+1)%m],p=g[f+1][v];t.idx.push(y,i,d,y,d,p)}}t.float=null;let e=[[k.x0+.75,Q0(6.9),1],[k.x1-.65,Q0(8.1),.85],[k.x1-.95,Q0(12.6),1.1],[k.x0+.95,Q0(10.3),.8],[k.x1-.55,Q0(15.6),.9],[k.x0+1.05,Q0(13.7),.75]];for(let[n,c,l]of e){t.float=[n,c,n*3.7+c*1.3];let h=.17;[[12,1,70],[10,.86,48],[8,.66,26]].forEach(([m,N,x],g)=>{for(let f=0;f<m;f++){let v=2*G*f/m+g*.33,y=(90-(90-x)*l)*G/180,i=6,d=4,p=[];for(let M=0;M<=i;M++){let A=M/i,u=(.18+.82*Math.sin(G*Math.min(1,Math.pow(A,.8)*.75+.1)))*.36*N*h,z=[];for(let O=0;O<=d;O++){let R=O/d*2-1,Z=R*u,i0=Math.abs(R)*Math.abs(R)*.12*N*h,s0=A*N*h,U=s0*Math.cos(y),p0=s0*Math.sin(y)+i0,g0=n+Math.cos(v)*U-Math.sin(v)*Z,C0=c+Math.sin(v)*U+Math.cos(v)*Z;z.push(t.v([g0,.03+p0,C0],[-Math.cos(v)*Math.sin(y)*.6,.8,-Math.sin(v)*Math.sin(y)*.6],q.PETAL,[(g===2?.5:0)+.5*(.5+.5*R*.92),.98-A*.96]))}p.push(z)}for(let M=0;M<i;M++)for(let A=0;A<d;A++){let u=p[M][A],z=p[M][A+1],O=p[M+1][A+1],R=p[M+1][A];t.idx.push(u,z,O,u,O,R,u,O,z,u,R,O)}}}),t.lathe(n,c,[[0,.03+.05*h*4],[.025,.03+.045*h*4],[.032,.035],[0,.03]],q.STAMEN,12)}t.float=null}function Es(t){let o=Rt(907);{t.box(1.25-.48,.86-.06,11.1-1.35,1.25+.48,.86,11.1+1.35,q.WOOD);for(let l of[-1,1])for(let h of[-1,1])t.box(1.25+l*(.48-.08)-.04,0,11.1+h*(1.35-.1)-.04,1.25+l*(.48-.08)+.04,.86-.06,11.1+h*(1.35-.1)+.04,q.WOOD);t.box(1.25-.48+.06,.16,11.1-1.35+.1,1.25+.48-.06,.19,11.1+1.35-.1,q.WOOD);for(let l=0;l<11;l++){let h=1.25+(o()-.5)*.6,w=11.1+(o()-.5)*2.2,m=.035+o()*.04,N=.09+o()*.14;if(t.lathe(h,w,[[0,.86],[m,.86],[m*1.02,.86+N*.9],[m*.9,.86+N],[0,.86+N]],l%3?q.JAR:q.POT,14),l%3===0)for(let x=0;x<7;x++){let g=o()*2*G,f=.28+o()*.12,v=.12+o()*.2;t.beam([h,.86+.03,w],[h+Math.cos(g)*v*f,.86+.03+f,w+Math.sin(g)*v*f],.0055,q.BRUSH)}}t.box(1.25-.3,.86,11.1+.7,1.25+.15,.86+.02,11.1+1.15,q.WOOD)}for(let s=0;s<5;s++){let a=.55+o()*.6,e=.75+o()*.8,n=19.3+s*.16,c=.25+s*.07,l=.17,h=[c+e*Math.sin(l)*0,e,n];t.quad([c+.18,0,n-a/2],[c+.18,0,n+a/2],[c+.18-e*Math.sin(l),e*Math.cos(l),n+a/2],[c+.18-e*Math.sin(l),e*Math.cos(l),n-a/2],[Math.cos(l),Math.sin(l),0],s%2?q.WOOD:q.GESSO,[[0,0],[1,0],[1,1],[0,1]])}for(let[s,a,e,n]of[...Zo.map(c=>[...c,W]),...Jo.map(c=>[...c,W-o0.face])]){t.beam([s,a+.42,n],[s,a+.42,e+Math.sign(n-e)*.02],.016,q.STEEL),t.beam([s,a+.42,e],[s,a+.26,e],.01,q.STEEL);for(let[c,l]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.beam([s+c*.085,a-.2,e+l*.085],[s+c*.085,a+.16,e+l*.085],.009,q.STEEL);t.box(s-.1,a-.24,e-.1,s+.1,a-.2,e+.1,q.STEEL),t.lathe(s,e,[[.13,a+.16],[.05,a+.27],[0,a+.29]],q.STEEL,4),t.lathe(s,e,[[0,a-.2],[.022,a-.19],[.022,a-.06],[0,a-.055]],q.GESSO,10),t.lathe(s,e,[[0,a-.055],[.014,a-.035],[0,a+.02]],q.FLAME,8)}for(let[s,a,e,n]of os){let c=a+n,l=.024;t.beam([s,c+.02,e],[s,Yo(s)-.05,e],.0018,q.STEEL),t.lathe(s,e,[[0,a],[l*.8,a+.004],[l,a+.02],[l,c-.02],[l*1.12,c-.008],[l*.9,c],[0,c-.004]],q.GESSO,10),t.beam([s,c-.004,e],[s,c+.014,e],.0016,q.STEEL),t.lathe(s,e,[[0,c+.008],[.013,c+.028],[.009,c+.055],[0,c+.095]],q.CFLAME,8)}}var Ds=[[4.2,4.6,7.33],[11.8,4.6,7.33],[4.2,4.6,16.5],[11.8,4.6,16.5],[4.2,4.6,24.2],[11.8,4.6,24.2]],Zo=[-1,1].map(t=>[T/2+t*(1.95/2+.62),2.95,W-.34]),Jo=[-1,1].map(t=>[T/2+t*(o0.hw+o0.pier/2),2.7,W-o0.face+.34]),Qo=[[8,3.6,5.4,12],[4.6,6.8,5,12],[11.2,7.4,5.2,12],[8,9.8,5.7,10],[2.4,11.6,4.8,11],[13.8,12.2,5,11],[B.cx,B.cz,3.7,5],[2.8,24.4,4.8,11],[13.2,24.6,5,11],[8,25.9,5.8,9]],ts=6,es=[[T/2,2.3,W-3.9],[8.6,4.2,22],[9.5,6.9,18.1],[8.6,5.2,14.2],[8,3.6,10.5],[7.6,4.1,6],[7.4,4.8,3.2]],Ls=[es,[[7.4,4.8,3.2],[8.2,4.3,3.4],[9,3.7,3],[9.2,3.45,2.6]]],Rs=(t,o)=>Ls.every(s=>{for(let a=0;a<s.length-1;a++){let e=s[a],n=s[a+1],c=[n[0]-e[0],n[1]-e[1],n[2]-e[2]],l=[t[0]-e[0],t[1]-e[1],t[2]-e[2]],h=Math.max(0,Math.min(1,(l[0]*c[0]+l[1]*c[1]+l[2]*c[2])/(c[0]*c[0]+c[1]*c[1]+c[2]*c[2])));if(Math.hypot(l[0]-c[0]*h,l[1]-c[1]*h,l[2]-c[2]*h)<o)return!1}return!0}),os=(()=>{let t=[],o=911,s=()=>(o=o*16807%2147483647,(o-1)/2147483646);return Qo.forEach(([a,e,n,c],l)=>{for(let h=0,w=0;h<c&&w<400;w++){let m=l===ts,N=s()*2*G,x=m?.35+.6*Math.sqrt(s()):.25+1.35*Math.sqrt(s()),g=a+Math.cos(N)*x,f=e+Math.sin(N)*x,v=.26+.18*s(),y=n+(s()-.5)*(m?.9:2.6),i=Math.hypot(g-B.cx,f-B.cz);!m&&i<7&&(i>4.4||y<B.top+.5)||g<.8||g>T-.8||f<2.2||f>W-.9||t.some(d=>Math.hypot(d[0]-g,d[2]-f)<.2)||Rs([g,y+v*.5,f],.85)&&(t.push([g,y,f,v,l]),h++)}}),t})(),eo=Qo.map((t,o)=>{let s=os.filter(e=>e[4]===o),a=[0,0,0];for(let e of s)a[0]+=e[0],a[1]+=e[1]+e[3]+.05,a[2]+=e[2];return[a[0]/s.length,a[1]/s.length,a[2]/s.length,s.length]}),gn=[[k.x0-1,k.z0-1,1],[k.x1+1,k.z0-1,.95],[k.x0-1,k.z1+1,1.15],[k.x1+1,k.z1+1,1.1],[.9,1.3,1.25],[T-.9,W-1.2,1.3]],Wo=[[0,0,.16,.5],[.16,0,.34,.4],[.35,0,.5,.36],[.5,0,.66,.38],[.68,0,.84,.42],[0,.6,.19,1],[.2,.57,.36,1],[.41,.6,.58,1]];function Fs(){let t={pos:[],nrm:[],uv:[],shade:[],flower:[],idx:[]},o=Rt(1213),s=(a,e,n,c,l)=>{let h=Wo[Math.floor(o()*Wo.length)],w=(h[2]-h[0])/(h[3]-h[1]),m=c*w*1,N=5,x=t.pos.length/3,g=.6+o()*.4;for(let f=0;f<=N;f++){let v=f/N,y=l*v*v*c,i=[a[0]+e[0]*v*c,a[1]+e[1]*v*c-y,a[2]+e[2]*v*c];for(let d of[-.5,.5]){t.pos.push(i[0]+n[0]*d*m+F[0],i[1]+n[1]*d*m-Math.abs(d)*.08*m+F[1],i[2]+n[2]*d*m+F[2]);let p=[e[1]*n[2]-e[2]*n[1],e[2]*n[0]-e[0]*n[2],e[0]*n[1]-e[1]*n[0]],M=Math.hypot(...p)||1;t.nrm.push(p[0]/M,Math.abs(p[1]/M)+.2,p[2]/M),t.uv.push(d<0?h[0]:h[2],h[3]-(h[3]-h[1])*v),t.shade.push(g),t.flower.push(0)}}for(let f=0;f<N;f++){let v=x+f*2;t.idx.push(v,v+1,v+3,v,v+3,v+2)}};ks(t,s,o);for(let[a,e,n]of[[k.x0-.3,k.z1+.3,-1],[k.x1+.3,k.z0-.3,1],[k.x0-.3,k.z0-.2,-1]])for(let c=0;c<26;c++){let l=o()*2*G,h=a+(o()-.3)*.5*-n,w=e+(o()-.5)*.8,m=k.top+.01-Math.max(0,Math.abs(h-a)-.1)*.6*o();s([h,Math.max(.05,m),w],[Math.cos(l),-.15,Math.sin(l)],[-Math.sin(l),0,Math.cos(l)],.08+o()*.05,.12)}return t}function Ps(){let t=so();for(let s of[0]){let a=s?T+tt*.5+.01:-tt*.5-.01,e=s?[-1,0,0]:[1,0,0];for(let n of I.c)for(let l=n-I.hw;l<n+I.hw-1e-6;l+=.05){let h=l,w=Math.min(n+I.hw,l+.05),m=Nt(h-n+1e-4)||I.spring,N=Nt(w-n-1e-4)||I.spring;s?t.quad([a,I.sill,w],[a,I.sill,h],[a,m,h],[a,N,w],e,0,[[w,I.sill],[h,I.sill],[h,m],[w,N]]):t.quad([a,I.sill,h],[a,I.sill,w],[a,N,w],[a,m,h],e,0,[[h,I.sill],[w,I.sill],[w,N],[h,m]])}}let o=Math.hypot(ot,1);return t.quad([0,r0+.002,W],[0,r0+.002,0],[T/2,yt+.002,0],[T/2,yt+.002,W],[ot/o,-1/o,0].map(s=>-s).map((s,a)=>a===1?-Math.abs(s):s),1,[[0,W],[0,0],[T/2,0],[T/2,W]]),t.quad([T,r0+.002,0],[T,r0+.002,W],[T/2,yt+.002,W],[T/2,yt+.002,0],[-ot/o,-1/o,0],1,[[T,0],[T,W],[T/2,W],[T/2,0]]),t}var Kt={ivy:[[.00293,.0127,.12207,.23633],[.13037,.00586,.24463,.24414],[.25293,.0166,.37207,.23242],[.37793,.02344,.49707,.22656],[.50293,.01367,.62207,.23535],[.62793,.03418,.74707,.21582]],blade:[[.01855,.50391,.02832,.99512],[.05762,.50391,.08301,.99512],[.10889,.50391,.12549,.99609],[.1582,.50391,.16943,.99512],[.19922,.50391,.22266,.99512],[.25,.50391,.26562,.99609],[.29932,.50391,.31006,.99609],[.33008,.50781,.37305,.99121],[.38721,.50391,.40918,.99609]],daisy:[[.75684,.00586,.86768,.24414],[.87793,.00781,.99707,.24121],[.00342,.25586,.12158,.49414],[.12842,.25586,.24609,.49414],[.25293,.25684,.37207,.49219],[.37891,.25586,.49609,.49316]],weed:[[.50293,.25781,.62207,.49121],[.62793,.26562,.74707,.48438],[.75293,.26855,.87207,.48047],[.88281,.25586,.99219,.49414],[.44043,.50977,.55957,.73926],[.5752,.50586,.67432,.74414],[.69043,.50586,.80908,.74414],[.81738,.50586,.93213,.74414],[.44043,.75781,.55957,.99219]],rleaf:[[.69824,.75586,.78076,.99414],[.79834,.75586,.88867,.99414],[.9043,.75586,.99072,.99414],[.94043,.54395,.99707,.70605]],petal:[[.56445,.75391,.68555,.99609]]},Us=[[.248,.8613],[.3438,.9785],[.4492,.584],[.5957,.3281],[.5371,.918],[.1699,.4062],[.752,.6699],[.5879,.2207],[.3789,.8477],[.2637,.2266],[.6758,.7422],[.6016,.0273],[.5762,.502],[.0469,.5078],[.1406,.7773],[.791,.7539],[.6113,.5605],[.9121,.6777],[.6523,.1523],[.2871,.3301],[.2109,.832],[.4297,.625],[.168,.4434],[.1348,.1211],[.9668,.0859],[.3164,.873],[.1777,.7539],[.0215,.3281],[.6719,.334],[.9844,.6172],[.6523,.3828],[.1152,.2988],[.0176,.1328],[.207,.0996],[.6152,.9844],[.0234,.0117],[.0723,.6328],[.2695,.7695],[.2539,.9395],[.502,.9941],[.1504,.9961],[.957,.8145],[.5117,.123],[.4062,.4941],[.0547,.1387],[.4375,.2949],[.373,.2109],[.1699,.3086],[.5176,.6445],[.4863,.3027],[.877,.6602],[.5977,.8887],[.5488,.0098],[.5156,.5332],[.6973,.1094],[.4707,.2051],[.498,.7559],[.0312,.7363],[.2051,.4629],[.541,.8379],[.8398,.8965],[.1426,.1855],[.3711,.1172],[.1328,.9082],[.75,.9629],[.2812,.0449],[.6367,.4277],[.2051,.9824],[.7012,.9766],[.0059,.9102],[.7168,.3379],[.1602,.584],[.8594,.1973],[.3516,.7227],[.0918,.9727],[.416,.3359],[.6465,.9355],[.3418,.627],[.7578,.332],[.0293,.6973],[.9004,.957],[.7012,.7617],[.1855,.8652],[.6914,.8184],[.5684,.543],[.6523,.8672],[.5742,.7441],[.2949,.4121],[.2363,.6387],[.25,.1953],[.0352,.5918],[.248,.293],[.0762,.4863],[.9785,.4922],[.9004,.7305],[.9277,.5527],[.9395,.125],[.3691,.8789],[.4805,.0469],[.5703,.4551],[.4199,.2246],[.0371,.625],[.3281,.4941],[.1152,.6094],[.2793,.834],[.5039,.166],[.4609,.5312],[.0645,.7715],[.6035,.7227],[.4746,.6348],[.6777,.5684],[.2773,.4512],[.8008,.1191],[.3945,.9297],[.2109,.6855],[.5977,.1875],[.5195,.0742],[.1309,.4609],[.9531,.4277],[.4785,.9648],[.543,.3262],[.9121,.041],[.5059,.7188],[.0098,.2969],[.8438,.3789],[.1504,.2637],[.7969,.873],[.8613,.9863],[.834,.7461],[.377,.6211],[.791,.7227],[.6758,.8457],[.7832,.8066],[.834,.5293],[.1973,.6562],[.8281,.9609],[.5332,.7773],[.9062,.8008],[.3262,.0234],[.8984,.7676]],se={IVY:0,BLADE:1,DAISY:2,WEED:3,ROSE:4,RLEAF:5,GRAPE:6},Ho=[[[.006,.013,-.051],[-.04,-.022,.004],[-.029,.026,-.015]],[[-.094,.019,.023],[.014,-.004,-.003],[.06,.026,-.027]],[[-.034,-.031,.002],[-.019,.07,-.028],[-.07,.018,-.039]],[[.102,-.049,-.011],[.057,-.046,.157],[.042,-.031,.089]],[[.026,.006,.019],[-.038,-.037,-.073],[-.042,-.019,.021]],[[.088,-.048,.008],[.143,-.012,.005],[-.044,.033,.028]],[[.039,-.084,-.04],[-.054,-.031,.031],[.076,.028,.014]],[[.082,-.037,-.05],[-.078,.011,.004],[-.076,-.047,.042]]],Vs=2;function Cs(){let t={pos:[],nrm:[],uv:[],info:[],idx:[]},o=[],s={pos:[],nrm:[],uv:[],info:[],idx:[]},a=t,e=Rt(2718),n=b=>{let $=Math.hypot(b[0],b[1],b[2])||1;return[b[0]/$,b[1]/$,b[2]/$]},c=(b,$)=>[b[1]*$[2]-b[2]*$[1],b[2]*$[0]-b[0]*$[2],b[0]*$[1]-b[1]*$[0]],l=(b,$)=>b[0]*$[0]+b[1]*$[1]+b[2]*$[2],h=(b,$,D)=>[b[0]+$[0]*D,b[1]+$[1]*D,b[2]+$[2]*D],w=b=>b[Math.floor(e()*b.length)],m=b=>(b[2]-b[0])*Vs/(b[3]-b[1]),N=(b,$,D,j,t0,e0)=>(a.pos.push(b[0]+F[0],b[1]+F[1],b[2]+F[2]),a.nrm.push($[0],$[1],$[2]),a.uv.push(D[0],D[1]),a.info.push(j,t0,e0),a.pos.length/3-1),x=(b,$,D,j,t0,e0,c0,a0,l0)=>{let u0=l0?2:1,T0=a.pos.length/3;for(let x0=0;x0<=u0;x0++){let L0=x0/u0,S0=l0?h(h(b,D,L0),a0,l0*L0*L0):h(b,D,L0),y0=j[3]+(j[1]-j[3])*L0;N(h(S0,$,-1),c0,[j[0],y0],t0,e0,L0),N(h(S0,$,1),c0,[j[2],y0],t0,e0,L0)}for(let x0=0;x0<u0;x0++){let L0=T0+x0*2;a.idx.push(L0,L0+1,L0+3,L0,L0+3,L0+2)}},g=null,f=[...Kt.ivy,...Kt.ivy,...Kt.weed.slice(0,7)],v=[0,1,0],y=(b,$,D,j,t0)=>{let e0=w(f),c0=c(D,$),a0=n(h(h($,D,e()*.9-.25),c0,(e()-.5)*.8)),l0=n(h(D,a0,-l(D,a0))),u0=(e()-.5)*2,T0=Math.cos(u0),x0=Math.sin(u0);l0=n(h(h([0,0,0],l0,T0),c(a0,l0),x0));let L0=c(l0,a0),S0=j*m(e0);x(h(b,l0,-j*.18),h([0,0,0],L0,S0/2),h([0,0,0],l0,j),e0,t0,se.IVY,a0)},i=(b,$,D,j,t0)=>{let e0=Math.floor(e()*Ho.length),c0=Ho[e0],a0=c(D,$),l0=n(h(h($,D,e()*.8-.3),a0,(e()-.5)*.9)),u0=n(h(D,l0,-l(D,l0))),T0=e()*2*G,x0=Math.cos(T0),L0=Math.sin(T0);u0=n(h(h([0,0,0],u0,x0),c(l0,u0),L0));let S0=c(u0,l0),y0=e0%4/4,N0=Math.floor(e0/4)/2,I0=1.4,rt=[],pt=a.pos.length/3;for(let j0=0;j0<3;j0++)for(let G0=0;G0<3;G0++){let K0=G0/2-.5,lt=.5-j0/2;rt.push(h(h(h(b,S0,K0*j),u0,lt*j),l0,c0[j0][G0]*j*I0))}for(let j0=0;j0<3;j0++)for(let G0=0;G0<3;G0++){let K0=Math.max(G0-1,0),lt=Math.min(G0+1,2),Ot=Math.max(j0-1,0),Zt=Math.min(j0+1,2),kt=h(rt[j0*3+lt],rt[j0*3+K0],-1),Jt=h(rt[Ot*3+G0],rt[Zt*3+G0],-1),X0=n(c(kt,Jt));l(X0,l0)<0&&(X0=X0.map(Tt=>-Tt)),N(rt[j0*3+G0],X0,[y0+G0/2*.25,N0+j0/2*.5],t0,se.GRAPE,1)}for(let j0=0;j0<2;j0++)for(let G0=0;G0<2;G0++){let K0=pt+j0*3+G0;a.idx.push(K0,K0+1,K0+4,K0,K0+4,K0+3)}},d=(b,$,D,j,t0,e0,c0,a0,l0,u0=.3)=>{let T0=Math.max(3,Math.round(t0*2.4*c0)),x0=[];for(let S0=0;S0<T0;S0++){let y0=j+(e()-.5)*t0,N0=Math.min(1,Math.abs(y0-j)/(t0/2+.001)),I0=e0*(.6+.4*e())*(1-.5*N0*N0);x0.push([y0,a0||e()*.15,(e()-.5)*.5,I0,0])}let L0=0;for(;x0.length&&L0++<4e3;){let[S0,y0,N0,I0,rt]=x0.pop(),pt=y0;for(let j0=0;j0<260&&(N0+=(e()-.5)*.45,N0=Math.max(-1,Math.min(1,N0)),S0+=Math.sin(N0)*.09,y0+=(a0?-1:1)*Math.cos(N0)*.09,!(a0?pt-y0>I0||y0<(l0?l0(S0):.05):y0-pt>I0));j0++){let K0=a0?(pt-y0)/I0:(y0-pt)/I0,lt=e()<.9*c0?e()<.5?2:1:0;for(let Ot=0;Ot<lt;Ot++){let Zt=.015+e()*.11,kt=S0+(e()-.5)*.2,Jt=y0+(e()-.5)*.12;if(g&&g(kt,Jt))continue;let X0=h(h(h(b,$,kt),v,Jt),D,Zt),Tt=(.14+.1*e())*(a0?1.05-.3*K0:1.2-.4*K0),le=.45+.55*(Zt/.125)*(.6+.4*e());e()<u0?e()<.55&&i(X0,D,v,Tt*1.7,le):y(X0,D,v,Tt,le)}rt<2&&e()<.035&&x0.push([S0,y0,N0+(e()<.5?-.7:.7),I0*(.35+.4*e())*(1-K0*.5),rt+1])}}},p=(b,$,D,j,t0)=>{let e0=w(Kt.rleaf),c0=n(h(h($,D,e()*.8-.1),c(D,$),(e()-.5)*.9)),a0=n(h(D,c0,-l(D,c0))),l0=(e()-.5)*3,u0=Math.cos(l0),T0=Math.sin(l0);a0=n(h(h([0,0,0],a0,u0),c(c0,a0),T0));let x0=c(a0,c0);x(h(b,a0,-j*.1),h([0,0,0],x0,j*m(e0)/2),h([0,0,0],a0,j),e0,t0,se.RLEAF,c0)},M=(b,$,D,j,t0,e0,c0)=>{let a0=Math.max(3,Math.round(t0*2.2)),l0=(S0,y0,N0)=>h(h(h(b,$,S0),v,y0),D,N0),u0=p,T0=null,x0=(S0,...y0)=>{g&&g(l(h(S0,b,-1),$),S0[1])||u0(S0,...y0)},L0=(S0,y0,N0)=>{g&&g(l(h(S0,b,-1),$),S0[1])||o.push({at:S0,f:y0,size:N0,spin:e()*2*G})};for(let S0=0;S0<a0;S0++){let y0=j+(e()-.5)*t0*.35,N0=.05,I0=(e()-.5)*1.4,rt=e0*(.6+.4*e()),pt=(y0-j)/(t0/2+.001);for(let j0=0;j0<200&&N0<rt&&(I0+=(e()-.5)*.3+pt*.012+(N0>rt*.6?Math.sign(I0||1)*.02:0),I0=Math.max(-1.25,Math.min(1.25,I0)),y0+=Math.sin(I0)*.08,N0+=Math.cos(I0)*.08,!(Math.abs(y0-j)>t0*.6));j0++){let G0=N0/rt;for(let K0=0;K0<(e()<.8?2:1);K0++){let lt=.02+e()*.12;x0(l0(y0+(e()-.5)*.16,N0+(e()-.5)*.12,lt),D,v,.07+e()*.05,.5+.5*e())}if(G0>.2&&e()<c0*(.018+.038*G0)){let K0=1+Math.floor(e()*3);for(let lt=0;lt<K0;lt++){let Ot=n(h(h(D,v,(e()-.4)*.8),c(v,D),(e()-.5)*.9));L0(l0(y0+(e()-.5)*.22,N0+(e()-.5)*.2,.16+e()*.1),Ot,.19+e()*.09)}for(let lt=0;lt<3;lt++)x0(l0(y0+(e()-.5)*.25,N0+(e()-.5)*.2,.05+e()*.08),D,v,.07+e()*.04,.6+.4*e())}}}},A=(b,...$)=>M(b.o,b.u,b.n,...$);{let b=[[.28,.47,.66,.84,.97],[.5,.78,.96]];for(let $=0;$<ao.length;$++){let D=Xo($);for(let j=3;j<D.length;j++){let[t0,e0,c0,a0,l0]=D[j],u0=[Math.sin(a0),0,Math.cos(a0)],T0=[t0+u0[0]*.025,e0,c0+u0[2]*.025];if(j%2===0)for(let x0=0;x0<2;x0++)p(h(T0,[e()-.5,(e()-.5)*.6,e()-.5],.05),u0,v,.045+.03*e()*(1-l0*.3),.35+.4*e())}for(let j of b[$]){let t0=Math.round(j*(D.length-1)),[e0,c0,a0,l0]=D[t0],u0=[Math.sin(l0),0,Math.cos(l0)],T0=n([u0[0]*.8,.35,u0[2]*.8+.45]);o.push({at:[e0+u0[0]*.05,c0+.02,a0+u0[2]*.05],f:T0,size:.12+.035*e(),spin:e()*2*G});for(let x0=0;x0<2;x0++)p(h([e0,c0,a0],u0,.03+.02*e()),u0,v,.045+.02*e(),.6+.4*e())}}}let u={o:[0,0,0],u:[1,0,0],n:[0,0,1]},z={o:[0,0,W],u:[1,0,0],n:[0,0,-1]},O={o:[T,0,0],u:[0,0,1],n:[-1,0,0]},R=(b,...$)=>d(b.o,b.u,b.n,...$);R(u,4.1,3,7,1.5),R(u,12,3.4,5.8,1.3),R(u,1,2.2,4.2,1.2),R(u,15,2,5,1.2),A(u,3.6,3.2,5.6,1.1),A(u,12.6,3,4.8,1),A(u,.9,1.6,3.2,.8);{let b=o0.face-.26,$={o:[0,0,W-b+.03],u:[1,0,0],n:[0,0,1]},D=5.35+1.02;d($.o,$.u,$.n,T-o0.x1+1,1.9,2.2,1.2,D,()=>3.2),d($.o,$.u,$.n,T-o0.x0-.5,.8,1,.8,D,()=>4.6);for(let j=0;j<70;j++){let t0=o0.x0+.2+Math.pow(e(),1.6)*2.4,e0=(o0.x1-o0.x0)/2+.2,c0=D+.62*(1-Math.abs(t0-o0.cx)/e0)+.02;y([T-t0,c0+e()*.05,.1+e()*(W-b-.15)],n([0,1,.3]),[0,0,1],.08+e()*.05,.7+.3*e())}}g=(b,$)=>Math.abs(b-T/2)<H0.w/2+H0.frame+.12&&$<H0.top+H0.frame+.12,R(z,5.3,3.2,6.2,1.4),R(z,11,3.6,7,1.4),R(z,1.2,2.4,4.4,1.2),R(z,14.9,2.2,5.4,1.2),d(z.o,z.u,z.n,T/2+.3,4,1.6,1.3,H0.top+1.7,b=>Math.abs(b-T/2)<H0.w/2+.3?H0.top+H0.frame+.15:2.4),A(z,5.6,3.4,5.2,1.2),A(z,10.6,3.6,5.8,1.2),A(z,14.6,2,4,.9),g=null,R(O,2.6,4,7,1.4),R(O,9.2,4.6,5.4,1.2),R(O,15.6,5,7.4,1.5),R(O,20.9,2,4,1.2),R(O,23.8,4.2,6.6,1.4),R(O,26.6,1.8,4.4,1.2),A(O,3.2,3.6,5.4,1.1),A(O,8.6,3,4.2,1),A(O,13.4,3.2,5.8,1.1),A(O,18.6,3.4,5,1.2),A(O,23.2,3.6,5.6,1.2),A(O,26.4,1.6,3.6,.9),g=(b,$)=>I.c.some(D=>{let j=Nt(b-D);return j!==null&&Math.abs(b-D)<I.hw+.06&&$>I.sill-.05&&$<j+.06});for(let[b,$]of Lt.filter(D=>D[0]==="wall")){let D=$<1||$>W-1;d([0,0,0],[0,0,1],[1,0,0],$,D?1:1.7,r0-.6,D?.9:1.1,0,null,.85)}for(let b of I.c)d([0,0,0],[0,0,1],[1,0,0],b,I.hw*2.3,1.6,.8,r0-.6,$=>Nt($-b)!==null?Nt($-b)+.15:r0-2.2,.85);g=null,a=s;let Z=(b,$,D,j,t0,e0,c0)=>{let a0=w(Kt.blade),l0=[Math.cos(e0),0,Math.sin(e0)],u0=Math.max(j*.16,.012);x([b,$,D],[-l0[2]*u0/2,0,l0[0]*u0/2],[l0[0]*t0*j*.4,j,l0[2]*t0*j*.4],a0,c0,se.BLADE,n([l0[0]*.5,1,l0[2]*.5]),l0,j>.12?j*t0*.6:0)},i0=(b,$,D,j,t0)=>{for(let e0=0;e0<t0;e0++){let c0=e()*2*G,a0=e()*.035;Z(b+Math.cos(c0)*a0,$,D+Math.sin(c0)*a0,j*(.45+.55*e()),.25+.75*e(),c0+(e()-.5),.6+.4*e())}},s0=(b,$,D,j)=>{let t0=4+Math.floor(e()*3),e0=e()*2*G;for(let c0=0;c0<t0;c0++){let a0=w(Kt.weed),l0=e0+c0*2*G/t0+(e()-.5)*.4,u0=[Math.cos(l0),0,Math.sin(l0)],T0=.35+e()*.45,x0=j*(.7+.5*e()),L0=[u0[0]*Math.cos(T0)*x0,Math.sin(T0)*x0,u0[2]*Math.cos(T0)*x0],S0=x0*m(a0);x([b,$+.004,D],[-u0[2]*S0/2,0,u0[0]*S0/2],L0,a0,.7+.3*e(),se.WEED,n([-u0[0]*Math.sin(T0),Math.cos(T0),-u0[2]*Math.sin(T0)]),[0,-1,0],x0*.15)}},U=(b,$,D)=>{let j=.05+e()*.12;Z(b,$,D,j+.02,.15,e()*2*G,.8);let t0=w(Kt.daisy),e0=.03+e()*.025,c0=(e()-.5)*.6,a0=e()*2*G,l0=[Math.cos(a0)*e0*2,Math.sin(c0)*e0,Math.sin(a0)*e0*2],u0=[-Math.sin(a0)*e0,0,Math.cos(a0)*e0];x([b-Math.cos(a0)*e0,$+j,D-Math.sin(a0)*e0],u0,l0,t0,1,se.DAISY,[0,1,0]),s0(b,$,D,.04)},p0=(b,$,D,j)=>{let t0=e();t0<.8?i0(b,$,D,j?.2+.3*e():.08+.1*e(),j?5+Math.floor(e()*6):3+Math.floor(e()*3)):t0<.93?s0(b,$,D,j?.09+.06*e():.06+.03*e()):U(b,$,D)},g0=k.x0-k.curb-.08,C0=k.x1+k.curb+.08,L=k.z0-k.curb-.08,Y=k.z1+k.curb+.08,V=T-o0.x1-.16,v0=T-o0.x0+.16,J=W-o0.face+.36,m0=(b,$)=>Math.hypot(b-B.cx,$-B.cz),D0=(b,$)=>Math.abs(b-q0.cx)<q0.hx+.16&&Math.abs($-q0.cz+.08)<q0.hz+.4||m0(b,$)>B.ri-.1&&m0(b,$)<B.ro+1.6||b>g0&&b<C0&&$>L&&$<Y||b>V&&b<v0&&$<J||Math.abs(b-T/2)<1.15&&$>W-.5||b<.06||b>T-.06||$<.06||$>W-.06,$0=(b,$)=>{let D=Math.min(b,T-b,$,W-$),j=Math.max(g0-b,b-C0,L-$,$-Y),t0=Math.max(V-b,b-v0,$-J);return Math.min(D,Math.max(j,0)+(j<0?9:0),Math.max(t0,0)+(t0<0?9:0))},M0=(b,$)=>.5+.5*Math.sin(b*.9+1.3)*Math.sin($*.7-.4)+.25*Math.sin(b*2.3+$*1.7);for(let b=0;b*2<T;b++)for(let $=0;$*2<W;$++)for(let[D,j]of Us){let t0=(b+D)*2,e0=($+j)*2;if(D0(t0,e0))continue;let c0=$0(t0,e0),a0=(c0<1.2?.75-.4*c0:.2)*Math.max(.2,M0(t0,e0));e()<a0&&p0(t0,.002,e0,c0<.8&&e()<.85)}let _0=(b,$,D)=>{let j=Math.hypot($[0]-b[0],$[1]-b[1]);for(let t0=0;t0<j;t0+=.08){if(e()>.8)continue;let e0=t0/j,c0=.04+Math.pow(e(),2)*.3,a0=b[0]+($[0]-b[0])*e0+D[0]*c0,l0=b[1]+($[1]-b[1])*e0+D[1]*c0;D0(a0,l0)||p0(a0,.002,l0,!0)}};_0([0,0],[0,W],[1,0]),_0([T,0],[T,W],[-1,0]),_0([0,0],[T,0],[0,1]),_0([0,W],[T,W],[0,-1]),_0([g0,L],[C0,L],[0,-1]),_0([g0,L],[g0,Y],[-1,0]),_0([C0,L],[C0,Y],[1,0]),_0([V,J],[v0,J],[0,1]),_0([V,0],[V,J],[-1,0]),_0([v0,0],[v0,J],[1,0]);for(let b=0;b<60;b++){let $=Math.floor(e()*3),D,j;$<2?(D=$?k.x1+.08+e()*.38:k.x0-.08-e()*.38,j=k.z0+e()*(k.z1-k.z0)):(j=k.z1+.08+e()*.38,D=k.x0+e()*(k.x1-k.x0)),i0(D,k.top,j,.04+.06*e(),2+Math.floor(e()*3))}for(let b=0;b<70;b++){let $=e()*2-1,D=Math.floor(e()*4),j=q0.hx+.16+e()*e()*.25,t0=q0.hz+.3+e()*e()*.25,e0,c0;D<2?(e0=q0.cx+(D?j:-j),c0=q0.cz-.08+$*t0):(c0=q0.cz-.08+(D===2?t0:-t0),e0=q0.cx+$*j),i0(e0,0,c0,.05+.09*e(),2+Math.floor(e()*4))}for(let b=0;b<6;b++)i0(q0.cx+(e()*2-1)*(q0.hx+.1),.09,q0.cz-.08+(e()<.5?-1:1)*(q0.hz+.08+e()*.12),.03+.04*e(),2);return{walls:t,ground:s,roses:o}}var Is=`
	float hash13(vec3 p3) {
		p3 = fract(p3 * 0.1031);
		p3 += dot(p3, p3.zyx + 31.32);
		return fract((p3.x + p3.y) * p3.z);
	}
	float vnoise3(vec3 p) {
		vec3 i = floor(p), f = fract(p);
		f = f * f * (3.0 - 2.0 * f);
		return mix(mix(mix(hash13(i), hash13(i + vec3(1, 0, 0)), f.x), mix(hash13(i + vec3(0, 1, 0)), hash13(i + vec3(1, 1, 0)), f.x), f.y),
		           mix(mix(hash13(i + vec3(0, 0, 1)), hash13(i + vec3(1, 0, 1)), f.x), mix(hash13(i + vec3(0, 1, 1)), hash13(i + vec3(1, 1, 1)), f.x), f.y), f.z);
	}
	float fbm3(vec3 p) {
		float s = 0.0, a = 0.5;
		for (int i = 0; i < 5; i++) { s += a * vnoise3(p); p = p * 2.03 + 7.1; a *= 0.5; }
		return s;
	}
`,yn=Ds.map(t=>Xt([t[0],t[1]-.22,t[2]])),ft=`
	${Is}
	${Ce()}

	// the sky outside: what the windows and the roof show, and what
	// lights the room when the sun does not
	vec3 studioSky(vec3 d) {
		float up = clamp(d.y, -0.2, 1.0);
		vec3 dayZen = vec3(0.22, 0.45, 0.85), dayHor = vec3(0.86, 0.90, 0.92);
		vec3 day = mix(dayHor, dayZen, pow(max(up, 0.0), 0.55));
		float sd = max(dot(d, STUDIO_SUN), 0.0);
		day += vec3(1.0, 0.86, 0.62) * (pow(sd, 6.0) * 0.45 + pow(sd, 60.0) * 0.8);
		vec3 nZen = vec3(0.012, 0.022, 0.05), nHor = vec3(0.05, 0.065, 0.10);
		vec3 nite = mix(nHor, nZen, pow(max(up, 0.0), 0.5));
		// the moon, its halo, and the stars
		nite += vec3(0.55, 0.65, 0.9) * (pow(sd, 12.0) * 0.12 + pow(sd, 120.0) * 0.4) + vec3(0.95, 0.97, 1.0) * smoothstep(0.99955, 0.9997, sd) * 3.0;
		vec3 sg = floor(d * 260.0);
		float star = step(0.9965, hash13(sg)) * smoothstep(0.02, 0.2, d.y) * (0.5 + 0.5 * sin(time * 2.0 + hash13(sg + 3.0) * 30.0));
		nite += vec3(0.9, 0.93, 1.0) * star * 0.7;
		return mix(day, nite, night);
	}

	// the light reaching a point: sun through the openings, the sky
	// through the glass, light bounced off the sunlit floor, and at night
	// the pendant lamps. Returns diffuse light; spec gets the sun's glint.
	uniform float candleT;
	// a candle's flame: a steady breath, quick tremors, and now and then a
	// gutter when a draught finds it
	float candleFlicker(float s) {
		float t = candleT;
		float f = 0.78 + 0.1 * sin(t * 7.3 + s) * sin(t * 3.1 + s * 1.9) + 0.06 * sin(t * 17.9 + s * 3.1) + 0.05 * sin(t * 29.3 + s * 5.7);
		float gut = smoothstep(0.92, 1.0, sin(t * 0.83 + s * 2.3) * sin(t * 1.37 + s));
		return f * (1.0 - 0.45 * gut);
	}
	// the candles' drifts mirrored in the water: R the reflected ray off it
	vec3 candleGlints(vec3 R, vec3 pw) {
		float nkw = smoothstep(0.35, 0.8, night);
		if (nkw < 0.01) return vec3(0.0);
		float cg = 0.0;
		${eo.map((t,o)=>{let s=Xt(t);return`
		{
			vec3 Lc = normalize(vec3(${r(s[0])}, ${r(s[1])}, ${r(s[2])}) - pw);
			float k = max(dot(R, Lc), 0.0);
			cg += (pow(k, 500.0) * 2.6 + pow(k, 60.0) * 0.12) * candleFlicker(${r(o*7.31+1.7)});
		}`}).join("")}
		return vec3(1.0, 0.6, 0.27) * cg * nkw;
	}
	// what stands between a point and a candle: the rotunda's ring (but for
	// its arches) and its cloth
	vec3 candleShade(vec3 p, vec3 lp) {
		vec3 D = lp - p;
		vec2 c = p.xz - vec2(${r(B.cx)}, ${r(B.cz)});
		float a = dot(D.xz, D.xz);
		if (a < 1e-6) return vec3(1.0);
		float t1, t2;
		vec3 k = vec3(1.0);
		if (rotHit(c, D.xz, a, ${r((B.ri+B.ro)/2)}, t1, t2) > 0.0) {
			if (t1 > 0.002 && t1 < 0.998) { vec3 h = p + D * t1; if (h.y < ${r(B.top-.2)} && rotOpen(h, ${r((B.ri+B.ro)/2)}) < 0.5) return vec3(0.0); }
			if (t2 > 0.002 && t2 < 0.998) { vec3 h = p + D * t2; if (h.y < ${r(B.top-.2)} && rotOpen(h, ${r((B.ri+B.ro)/2)}) < 0.5) return vec3(0.0); }
		}
		if (rotHit(c, D.xz, a, ${r(B.cloth+.15)}, t1, t2) > 0.0) {
			for (int i = 0; i < 2; i++) {
				float t = i == 0 ? t1 : t2;
				if (t > 0.002 && t < 0.998) {
					vec3 h = p + D * t;
					float an = atan(h.x - ${r(B.cx)}, h.z - ${r(B.cz)});
					bool gap = ${r(B.cloth+.15)} * abs(sin(an)) < ${r(B.gap)};
					if (h.y < ${r(B.top)} && !gap) k *= vec3(0.75, 0.22, 0.2);
				}
			}
		}
		return k;
	}
	vec3 studioLight(vec3 pw, vec3 N, vec3 V, float gloss, out vec3 spec, out float sunVis) {
		vec3 p = pw - vec3(${r(F[0])}, ${r(F[1])}, ${r(F[2])});
		float vis = studioSun(pw + N * 0.03);
		sunVis = vis;
		vec3 sunC = mix(vec3(1.0, 0.84, 0.62) * 4.6, vec3(0.50, 0.64, 1.0) * 1.6, night);
		float lam = max(dot(N, STUDIO_SUN), 0.0);
		vec3 col = sunC * vis * lam;
		vec3 Hh = normalize(STUDIO_SUN + V);
		spec = sunC * vis * pow(max(dot(N, Hh), 0.0), mix(16.0, 400.0, gloss)) * mix(0.04, 1.0, gloss) * (lam > 0.0 ? 1.0 : 0.0);
		// by day a shaft from the glass roof finds the nymph's face
		{
			const vec3 FL = vec3(0.62, 0.62, 0.48);
			vec3 hc = p - vec3(${r(Qe[0])}, ${r(Qe[1])}, ${r(Qe[2])});
			vec3 Ls = normalize(FL);
			float off = length(hc - Ls * dot(hc, Ls));
			float beam = (1.0 - smoothstep(0.22, 0.5, off)) * (1.0 - night) * step(-0.6, dot(hc, Ls));
			if (beam > 0.0) {
				float fl = max(dot(N, Ls), 0.0);
				col += sunC * 0.55 * beam * fl;
				spec += sunC * 0.4 * beam * pow(max(dot(N, normalize(Ls + V)), 0.0), mix(16.0, 400.0, gloss)) * gloss * (fl > 0.0 ? 1.0 : 0.0);
			}
		}

		// skylight: the roof is glass, the walls are full of windows
		float upF = 0.5 + 0.5 * N.y;
		float hgt = clamp(p.y / ${r(r0)}, 0.0, 1.0);
		// corners and the foot of the walls get less of the sky
		float dw = min(min(p.x, ${r(T)} - p.x), min(p.z, ${r(W)} - p.z));
		float occ = mix(0.55, 1.0, smoothstep(0.0, 2.2, dw)) * mix(0.72, 1.0, smoothstep(0.0, 2.5, p.y));
		// (kept low and cool: the shade is deep and a little green-grey, so
		// the room feels old and still and the sunbeams carry the drama)
		vec3 skyC = mix(vec3(0.50, 0.55, 0.54), vec3(0.020, 0.032, 0.065), night);
		col += skyC * (0.18 + 0.55 * upF) * occ * (0.85 + 0.3 * hgt) * 0.22;
		// the bright left windows, seen from walls and things facing them
		col += mix(vec3(1.0, 0.86, 0.66), vec3(0.06, 0.08, 0.14), night) * max(-N.x, 0.0) * 0.12 * occ;
		// light thrown back up off the sunlit floor: warm, from below
		float pools = mix(1.0, 0.15, night);
		col += vec3(0.95, 0.68, 0.42) * pools * (0.07 + 0.18 * max(-N.y, 0.0)) * (1.0 - smoothstep(0.5, 6.0, p.y)) * smoothstep(0.0, 1.2, dw);

		// the lanterns by the red door: warm candlelight on the door and the
		// stone round it (only near that end of the room)
		if (p.z > ${r(W-6)}) {
			${Zo.map(t=>Xt(t)).map(t=>`
			{
				vec3 d = vec3(${r(t[0])}, ${r(t[1]-.06)}, ${r(t[2])}) - pw;
				float dd = dot(d, d);
				vec3 Ld = d * inversesqrt(dd);
				float w = mix(1.6, 2.4, night) * candleFlicker(${r(t[0]*3.1)}) / (0.25 + dd * 1.8);
				col += vec3(1.0, 0.6, 0.3) * w * (max(dot(N, Ld), 0.0) * 0.9 + 0.1);
				spec += vec3(1.0, 0.65, 0.35) * w * pow(max(dot(N, normalize(Ld + V)), 0.0), mix(16.0, 300.0, gloss)) * gloss * 0.6;
			}`).join("")}
		}
		// the lanterns either side of the nymph: candlelight that breathes
		// and gutters on her, the niche and the head of the pool
		if (p.z < 9.0) {
			${Jo.map(t=>Xt(t)).map((t,o)=>`
			{
				float fl = candleFlicker(${r(11.3+o*4.7)});
				vec3 lp = vec3(${r(t[0])}, ${r(t[1]-.06)}, ${r(t[2])}) + vec3(sin(candleT * ${r(2.3+o*.4)}), 0.0, cos(candleT * ${r(1.9+o*.3)})) * 0.02 * (1.2 - fl);
				vec3 d = lp - pw;
				float dd = dot(d, d);
				vec3 Ld = d * inversesqrt(dd);
				float w = mix(0.9, 2.3, night) * fl / (0.3 + dd * 1.1);
				col += vec3(1.0, 0.58, 0.28) * w * (max(dot(N, Ld), 0.0) * 0.9 + 0.1);
				spec += vec3(1.0, 0.65, 0.35) * w * pow(max(dot(N, normalize(Ld + V)), 0.0), mix(16.0, 300.0, gloss)) * gloss * 0.6;
			}`).join("")}
		}
		// the hanging candles (by night): each drift a flickering flame, the
		// rotunda's ring putting its arches' shadows round the room and its
		// cloth staining what lies beyond it red
		float nk = smoothstep(0.35, 0.8, night);
		if (nk > 0.01) {
			${eo.map((t,o)=>`
			{
				float fl = candleFlicker(${r(o*7.31+1.7)});
				vec3 lp = vec3(${r(t[0])}, ${r(t[1])}, ${r(t[2])}) + vec3(sin(candleT * ${r(2.1+o*.37)} + ${r(o)}), 0.0, cos(candleT * ${r(1.7+o*.29)} + ${r(o*2)})) * 0.035 * (1.2 - fl);
				vec3 d = lp - p;
				float dd = dot(d, d);
				vec3 Ld = d * inversesqrt(dd);
				vec3 sh = candleShade(p + N * 0.02, lp);
				vec3 w = sh * (nk * ${r(o===ts?4.6:1.4+.3*t[3])} * fl / (0.4 + dd * 0.9));
				col += vec3(1.0, 0.56, 0.24) * w * (max(dot(N, Ld), 0.0) * 0.88 + 0.12);
				spec += vec3(1.0, 0.62, 0.3) * w * pow(max(dot(N, normalize(Ld + V)), 0.0), mix(16.0, 300.0, gloss)) * gloss;
			}`).join("")}
		}
		return col;
	}

	// the dusty, sun-warmed air between the eye and a surface
	vec3 studioAir(vec3 col, vec3 pw, vec3 eye) {
		float d = length(pw - eye);
		float h = 1.0 - exp(-d * 0.06);
		// thicker low down, where the damp hangs over the floor and the pool
		float low = 1.0 - smoothstep(0.0, 3.0, (pw.y + eye.y) * 0.5);
		vec3 airC = mix(vec3(0.17, 0.17, 0.16), vec3(0.012, 0.018, 0.035), night);
		col = mix(col, airC, clamp(h * (0.42 + 0.25 * low), 0.0, 0.8));
		// by night the damp air glows round each drift of candles
		float nka = smoothstep(0.35, 0.8, night);
		if (nka > 0.01) {
			vec3 rd = (pw - eye) / max(d, 1e-4);
			float g = 0.0;
			${eo.map((t,o)=>{let s=Xt(t);return`
			{
				vec3 c = vec3(${r(s[0])}, ${r(s[1])}, ${r(s[2])}) - eye;
				float t = clamp(dot(c, rd), 0.0, d);
				vec3 q = c - rd * t;
				g += ${r(.012*t[3])} * candleFlicker(${r(o*7.31+1.7)}) / (0.5 + dot(q, q) * 1.6);
			}`}).join("")}
			col += vec3(1.0, 0.55, 0.25) * g * nka;
		}
		return col;
	}
`;function js(t){let o=new DataView(t),s=o.getUint32(4,!0),a=o.getUint32(8,!0),e=[],n=[];for(let m=0;m<3;m++)e.push(o.getFloat32(12+m*4,!0)),n.push(o.getFloat32(24+m*4,!0));let c=36,l=new Uint16Array(t,c,s*3);c+=s*6;let h=new Uint16Array(t,c,a);c+=a*2;let w=new Int8Array(t,c,s*3);return{nV:s,nI:a,mn:e,sz:n,pos:l,idx:h,nrm:w}}var we={pending:0},ne=t=>(we.pending++,fetch(t).finally(()=>{setTimeout(()=>{we.pending--},250)}));function nt(t,o,s){let a=s&&s.wrap||"clamp";we.pending++;let e=t.texture({data:[[[0,0,0,0]]],min:"linear",mag:"linear"}),n={tex:e,ready:!1};return fetch(o).then(c=>{if(!c.ok)throw new Error("Could not load "+o);return c.blob()}).then(c=>createImageBitmap(c,{premultiplyAlpha:"none"}).catch(()=>new Promise((l,h)=>{let w=new Image;w.onload=()=>l(w),w.onerror=h,w.src=URL.createObjectURL(c)}))).then(c=>{e({data:c,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrap:a}),n.ready=!0}).catch(c=>console.error(c)).finally(()=>{we.pending--}),n}var Fe=128,Pe=Math.round((k.z1-k.z0)/(11/372)),me=(k.x1-k.x0)/Fe,ss=(k.z1-k.z0)/Pe,Bs=.02,ns=`
	float simDec(vec2 c) { return (floor(c.x * 255.0 + 0.5) * 256.0 + floor(c.y * 255.0 + 0.5)) / 65535.0 * 2.0 - 1.0; }
	vec2 simEnc(float h) {
		float v = floor(clamp(h * 0.5 + 0.5, 0.0, 1.0) * 65535.0 + 0.5);
		float hi = floor(v / 256.0);
		return vec2(hi, v - hi * 256.0) / 255.0;
	}
`,Dt=`
	uniform float stime;
	uniform highp sampler2D simTex;
	${ns}
	float simAt(vec2 i) {
		i = clamp(i, vec2(0.0), vec2(${Fe-1}.0, ${Pe-1}.0));
		return simDec(texture2D(simTex, (i + 0.5) / vec2(${Fe}.0, ${Pe}.0)).rg);
	}
	// the height of the water at world xz (metres, tiny)
	float poolHeight(vec2 xz) {
		float h = 0.0018 * sin(xz.x * 2.1 + stime * 0.55) * sin(xz.y * 1.7 - stime * 0.43)
		        + 0.0010 * sin(xz.x * 3.7 - xz.y * 2.9 + stime * 0.8);
#ifndef NO_SIM
		vec2 g = (xz - vec2(${r(k.x0+F[0])}, ${r(k.z0+F[2])})) / vec2(${r(me)}, ${r(ss)}) - 0.5;
		vec2 i = floor(g), fr = g - i;
		float sh = mix(mix(simAt(i), simAt(i + vec2(1.0, 0.0)), fr.x), mix(simAt(i + vec2(0.0, 1.0)), simAt(i + vec2(1.0, 1.0)), fr.x), fr.y);
		h += sh * ${r(Bs)};
#endif
		return h;
	}
`,Go=`
	precision highp float;
	uniform mat4 proj, view;
	uniform float yScale;
	attribute vec3 position, normal;
	attribute float kind;
	attribute vec2 uv;
	attribute vec4 anchor;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${Dt}
	void main() {
		vec3 q = position;
		vec3 n = normal;
		if (anchor.w > 0.5) {
			// floating: a slow wander, a slow turn, and riding the water
			vec2 c = anchor.xy;
			float sd = anchor.z;
			vec2 drift = vec2(sin(stime * 0.045 + sd * 6.3), cos(stime * 0.037 + sd * 4.1)) * 0.05;
			float rot = sin(stime * 0.05 + sd * 9.0) * 0.18;
			vec2 rel = q.xz - c;
			float cr = cos(rot), sr = sin(rot);
			rel = vec2(cr * rel.x - sr * rel.y, sr * rel.x + cr * rel.y);
			vec2 cc = c + drift;
			q.xz = cc + rel;
			// lift and tilt with the water under it
			float h0 = poolHeight(cc);
			float e = 0.08;
			vec2 grad = vec2(poolHeight(cc + vec2(e, 0.0)) - h0, poolHeight(cc + vec2(0.0, e)) - h0) / e;
			q.y += h0 * 1.4 + dot(rel, grad) * 1.4;
			n = normalize(vec3(n.x - grad.x * n.y, n.y, n.z - grad.y * n.y));
		}
		v_pos = q; v_nrm = n; v_kind = kind; v_uv = uv;
		vec3 t = view[3].xyz;
		v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
		v_eye.y *= yScale;
		vec3 p = q; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`,Ws=`
	precision highp float;
	uniform float night, time, yScale, mirrorOn;
	uniform sampler2D padTex, petalTex, reflTex;
	uniform sampler2D rockCol, rockNrm, oldCol, oldNrm, floorCol, floorNrm;
	uniform vec2 reflSize;
	uniform float reflOn;
	uniform mat4 view;
	${Dt}
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${ft}

	bool is(float k) { return abs(v_kind - k) < 0.5; }

	// a photographed stone laid flat on a face, along the face's main axis:
	// its texture coordinates and the directions of the picture's right and up
	void planar(vec3 p, vec3 N, float scale, out vec2 uv, out vec3 T, out vec3 B) {
		vec3 a = abs(N);
		if (a.y > a.x && a.y > a.z) { uv = p.xz; T = vec3(1.0, 0.0, 0.0); B = vec3(0.0, 0.0, -1.0); }
		else if (a.x > a.z) { uv = vec2(p.z, -p.y); T = vec3(0.0, 0.0, 1.0); B = vec3(0.0, 1.0, 0.0); }
		else { uv = vec2(p.x, -p.y); T = vec3(1.0, 0.0, 0.0); B = vec3(0.0, 1.0, 0.0); }
		uv /= scale;
	}
	// the stone's relief from its normal map (rg), and its hollows (b)
	vec3 bumped(vec3 N, vec3 T, vec3 B, vec4 tn, float k) {
		vec2 d = tn.rg * 2.0 - 1.0;
		return normalize(N + (T * d.x + B * d.y) * k);
	}
	// the old stone's colour: greyed, cooled, a little green, as in his photograph
	vec3 oldTone(vec3 tc) {
		float lum = dot(tc, vec3(0.3, 0.59, 0.11));
		return mix(vec3(lum), tc, 0.42) * vec3(1.06, 1.10, 1.06);
	}

	void main() {
		vec3 pw = v_pos;
		vec3 p = pw - vec3(${r(F[0])}, ${r(F[1])}, ${r(F[2])});
		vec3 V = normalize(v_eye - pw);
		vec3 N = normalize(v_nrm);
		if (dot(N, V) < 0.0 && !is(${q.PETAL}.0)) N = -N;
		if (is(${q.PETAL}.0) && dot(N, V) < 0.0) N = -N;

		// in the reflection under the floor, the floor and the water are not drawn
		bool floorish = is(${q.FLOOR}.0) || is(${q.WATER}.0);
		if (yScale < 0.0 && floorish) discard;

		// fallen bracts: little papery hearts, pink or white
		if (is(${q.BRACT}.0)) {
			vec2 u = vec2(fract(v_uv.x), v_uv.y) * 2.0 - 1.0;
			float heart = length(vec2(u.x * 1.1, u.y + 0.15 * abs(u.x) * 2.0 - 0.1)) ;
			if (heart > 0.85 + 0.1 * sin(atan(u.y, u.x) * 3.0)) discard;
		}
		vec3 base = vec3(0.5);
		float gloss = 0.1;
		float checker = 0.0;
		float rough = 1.0;
		float aoK = 1.0;
		float sss = 0.0;

		if (is(${q.ROCK}.0)) {
			// rough walling: uneven slabs of pale coral stone bedded in lime,
			// greyed by age, damp and darker at the foot, streaked where rain
			// once ran down
			vec2 uv; vec3 T, B;
			planar(p, N, 2.0, uv, T, B);
			vec3 tc = texture2D(rockCol, uv).rgb; tc *= tc;
			vec4 tn = texture2D(rockNrm, uv);
			float lum = dot(tc, vec3(0.3, 0.59, 0.11));
			base = mix(vec3(lum), tc, 0.5) * vec3(1.62, 1.64, 1.56);
			base *= 0.86 + 0.24 * fbm3(p * vec3(0.22, 0.16, 0.22) + 5.0);
			float streak = fbm3(vec3((p.x + p.z) * 1.6, p.y * 0.1, 3.0));
			base = mix(base, base * vec3(0.72, 0.75, 0.70), smoothstep(0.52, 0.78, streak) * 0.8);
			base *= mix(0.66, 1.0, smoothstep(0.0, 1.3, p.y + 0.4 * streak));
			base *= mix(1.0, 0.84, smoothstep(${r(r0-2.2)}, ${r(r0)}, p.y));
			N = bumped(N, T, B, tn, 1.4);
			aoK = mix(0.42, 1.0, tn.b);
			gloss = 0.05;
		} else if (is(${q.OLDSTONE}.0) || is(${q.HOLLOW}.0)) {
			// old weathered limestone, dressed in blocks: grey and lichened,
			// darker and greener low down and where the water has been
			vec2 uv; vec3 T, B;
			planar(p, N, 1.7, uv, T, B);
			vec3 tc = texture2D(oldCol, uv).rgb; tc *= tc;
			vec4 tn = texture2D(oldNrm, uv);
			base = oldTone(tc) * 1.18;
			base *= 0.86 + 0.26 * fbm3(p * 0.5 + 9.0);
			float streak = fbm3(vec3((p.x + p.z) * 3.0, p.y * 0.25, 7.0));
			base = mix(base, base * vec3(0.55, 0.58, 0.52), smoothstep(0.55, 0.8, streak) * 0.75);
			// moss and wet near the water and the floor
			float low = 1.0 - smoothstep(0.0, ${r(k.top+.35)}, p.y);
			float moss = low * smoothstep(0.35, 0.65, fbm3(p * 4.0 + 2.0));
			base = mix(base, vec3(0.10, 0.12, 0.065), moss * 0.6);
			base *= mix(0.72, 1.0, smoothstep(0.0, 0.22, p.y));
			if (is(${q.HOLLOW}.0)) {
				// the hollow: older, damper, never washed by the sun
				base *= vec3(0.70, 0.73, 0.68) * (0.85 + 0.15 * smoothstep(${r(o0.floor)}, ${r(o0.spring)}, p.y));
			}
			N = bumped(N, T, B, tn, 1.1);
			aoK = mix(0.5, 1.0, tn.b);
			gloss = 0.08;
		} else if (is(${q.PLASTER}.0) || is(${q.NICHE}.0)) {
			// old lime plaster: warm, patchy, with a soft trowelled bloom
			float big = fbm3(p * vec3(0.35, 0.45, 0.35));
			float mid = fbm3(p * 1.6 + 3.0);
			float fine = vnoise3(p * 14.0);
			vec3 a = vec3(0.70, 0.60, 0.47), b = vec3(0.84, 0.76, 0.63);
			base = mix(a, b, smoothstep(0.3, 0.7, big));
			base *= 0.86 + 0.22 * mid + 0.05 * fine;
			// damp stains low down, soot high up
			base *= mix(0.86, 1.0, smoothstep(0.0, 1.4, p.y + 0.6 * mid));
			base *= mix(1.0, 0.9, smoothstep(${r(r0-2)}, ${r(r0)}, p.y));
			// where the plaster has come away, old brick shows through
			float bare = smoothstep(0.70, 0.74, fbm3(p * vec3(0.5, 0.8, 0.5) + 11.0)) * smoothstep(0.4, 1.6, p.y) * 0.85;
			vec2 bk = (abs(N.x) > 0.5 ? p.zy : p.xy) * vec2(1.0 / 0.23, 1.0 / 0.075);
			bk.x += floor(bk.y) * 0.5;
			float mortar = max(smoothstep(0.9, 0.97, fract(bk.x)), smoothstep(0.82, 0.92, fract(bk.y)));
			vec3 brick = mix(vec3(0.55, 0.30, 0.20), vec3(0.42, 0.25, 0.18), vnoise3(vec3(floor(bk), 0.0) * 0.7)) * (0.85 + 0.3 * hash13(vec3(floor(bk), 1.0)));
			brick = mix(brick, vec3(0.62, 0.58, 0.52), mortar);
			base = mix(base, brick, bare);
			if (is(${q.NICHE}.0)) base *= 0.55;
			gloss = 0.04;
		} else if (is(${q.STONE}.0)) {
			float n = fbm3(p * vec3(1.2, 2.5, 1.2));
			base = mix(vec3(0.72, 0.66, 0.56), vec3(0.84, 0.79, 0.70), n) * (0.92 + 0.12 * vnoise3(p * 20.0));
			gloss = 0.12;
		} else if (is(${q.TRAVERTINE}.0)) {
			// travertine: bands, little holes, a warm cream
			float band = fbm3(vec3(p.x * 0.4, p.y * 9.0 + fbm3(p * 1.5) * 2.0, p.z * 0.4));
			base = mix(vec3(0.73, 0.65, 0.53), vec3(0.88, 0.82, 0.72), band);
			float pit = smoothstep(0.84, 0.9, vnoise3(p * 55.0));
			base *= 1.0 - pit * 0.18;
			// wet and darker just above the water
			base *= mix(0.78, 1.0, smoothstep(0.0, 0.12, p.y));
			gloss = 0.18;
		} else if (is(${q.STEEL}.0)) {
			base = vec3(0.035, 0.036, 0.038) * (0.8 + 0.4 * vnoise3(p * 3.0));
			gloss = 0.45;
		} else if (is(${q.FLOOR}.0)) {
			// flagstones: irregular grey slabs, worn and uneven, with grass and
			// moss in the joints between them (res/studio/floor_*)
			vec2 uv = p.xz / 2.0;
			vec3 tc = texture2D(floorCol, uv).rgb; tc *= tc;
			vec4 tn = texture2D(floorNrm, uv);
			float lum = dot(tc, vec3(0.3, 0.59, 0.11));
			float green = smoothstep(-0.01, 0.035, sqrt(tc.g) - 0.5 * (sqrt(tc.r) + sqrt(tc.b)));
			// the stones greyed like his photograph, the joints kept green
			base = mix(mix(vec3(lum), tc, 0.35) * vec3(1.18, 1.20, 1.16), tc * vec3(0.62, 1.12, 0.42), green);
			base *= 0.84 + 0.28 * fbm3(vec3(p.xz * 0.3, 4.0));
			// damp and darker near the walls and round the pool
			float wallD = min(min(p.x, ${r(T)} - p.x), min(p.z, ${r(W)} - p.z));
			base *= mix(0.72, 1.0, smoothstep(0.0, 1.2, wallD));
			N = normalize(N + (vec3(1.0, 0.0, 0.0) * (tn.r * 2.0 - 1.0) + vec3(0.0, 0.0, -1.0) * (tn.g * 2.0 - 1.0)) * 1.2);
			gloss = 0.12;
			aoK = mix(0.5, 1.0, tn.b) * mix(0.62, 1.0, smoothstep(0.0, 0.9, wallD));
			// the curb throws a soft shadow round the pool
			vec2 dq = max(vec2(${r(k.x0-k.curb)} - p.x, p.x - ${r(k.x1+k.curb)}), vec2(${r(k.z0-k.curb)} - p.z, p.z - ${r(k.z1+k.curb)}));
			float dpool = max(max(dq.x, dq.y), 0.0);
			aoK *= mix(0.7, 1.0, smoothstep(0.0, 0.4, dpool));
		} else if (is(${q.WMARBLE}.0)) {
			// white statuary marble, polished: a soft grey cloud and fine veins
			float cl = fbm3(p * 1.4 + 2.0);
			float v1 = abs(sin(p.x * 3.1 + p.z * 1.7 + p.y * 5.0 + cl * 7.0));
			float vein = (1.0 - smoothstep(0.0, 0.05, v1)) * 0.7 + (1.0 - smoothstep(0.0, 0.02, abs(sin(p.z * 6.3 - p.x * 2.2 + cl * 11.0)))) * 0.3;
			base = mix(vec3(0.68, 0.68, 0.66), vec3(0.76, 0.76, 0.74), cl);
			base = mix(base, vec3(0.50, 0.51, 0.52), vein * 0.45);
			base *= mix(0.8, 1.0, smoothstep(0.0, 0.1, p.y));
			gloss = 0.88;
		} else if (is(${q.REDDOOR}.0) || is(${q.REDPANEL}.0)) {
			// deep crimson paint over wood: a soft sheen, the grain just showing
			float grain = vnoise3(vec3(p.x * 40.0, p.y * 2.0, p.z * 40.0));
			base = vec3(0.30, 0.022, 0.026) * (0.88 + 0.2 * grain);
			if (is(${q.REDPANEL}.0)) base *= 0.55;
			gloss = 0.62;
		} else if (is(${q.DARKWOOD}.0)) {
			float grain = vnoise3(vec3(p.x * 3.0, p.y * 45.0, p.z * 3.0));
			base = mix(vec3(0.030, 0.019, 0.014), vec3(0.062, 0.040, 0.028), grain);
			gloss = 0.35;
		} else if (is(${q.BRASS}.0)) {
			base = vec3(0.60, 0.44, 0.17) * (0.85 + 0.25 * vnoise3(p * 90.0));
			gloss = 0.78;
		} else if (is(${q.KEYHOLE}.0)) {
			base = vec3(0.004);
		} else if (is(${q.BRACT}.0)) {
			float white = step(1.5, v_uv.x);
			base = mix(vec3(0.62, 0.03, 0.22), vec3(0.86, 0.80, 0.80), white) * (0.8 + 0.3 * hash13(floor(p * 30.0)));
			sss = 0.5;
		} else if (is(${q.WATER}.0)) {
			base = vec3(0.012, 0.018, 0.014);
			gloss = 1.0;
		} else if (is(${q.PAD}.0)) {
			vec4 tx = texture2D(padTex, v_uv);
			if (tx.a < 0.5) discard;
			base = tx.rgb * tx.rgb * (0.8 + 0.35 * vnoise3(vec3(p.xz * 1.3, 2.0)));
			gloss = 0.55;
		} else if (is(${q.PETAL}.0)) {
			vec4 tx = texture2D(petalTex, v_uv);
			if (tx.a < 0.45) discard;
			base = tx.rgb * tx.rgb;
			sss = 0.6;
			gloss = 0.25;
		} else if (is(${q.STAMEN}.0)) {
			base = vec3(0.95, 0.66, 0.12);
			gloss = 0.2;
		} else if (is(${q.MARBLE}.0)) {
			// the nymph, aged like the niche: weathered pale stone gone grey,
			// rain streaks down her, grime in the folds and under her, lichen at the foot
			vec3 w = pow(abs(N), vec3(4.0)); w /= (w.x + w.y + w.z);
			vec3 tc = texture2D(oldCol, p.zy * 0.9).rgb * w.x + texture2D(oldCol, p.xz * 0.9).rgb * w.y + texture2D(oldCol, p.xy * 0.9).rgb * w.z;
			tc *= tc;
			base = mix(vec3(0.27, 0.26, 0.225), oldTone(tc) * 1.05, 0.65);
			float rain = fbm3(vec3(p.x * 7.0, p.y * 0.7, p.z * 7.0));
			base *= mix(1.0, 0.5, smoothstep(0.5, 0.8, rain));
			// grey-green lichen in blotches
			float lich = smoothstep(0.58, 0.72, fbm3(p * 9.0 + 4.0));
			base = mix(base, vec3(0.14, 0.15, 0.11), lich * 0.55);
			// moss: soft cushions where rain and dust settle, on what faces up
			// (her shoulders, hair, the tops of her knees and arms, the folds)
			// and thicker down towards the damp base, with a velvety edge
			float up = smoothstep(0.15, 0.75, N.y);
			float mn = fbm3(p * 5.0 + 11.0), mf = fbm3(p * 23.0 + 3.0);
			float lowm = 1.0 - smoothstep(${r(P0.plinth+.2)}, ${r(P0.plinth+1.6)}, p.y);
			float moss = smoothstep(0.5, 0.4, mn - up * 0.12 - lowm * 0.1) * (0.12 + 0.88 * up * up + 0.3 * lowm);
			moss = clamp(moss * (0.75 + 0.5 * mf), 0.0, 1.0);
			vec3 mossC = mix(vec3(0.12, 0.15, 0.06), vec3(0.25, 0.29, 0.11), mf);
			base = mix(base, mossC, moss * 0.8);
			N = normalize(N + (vec3(mf, 0.0, mn) - 0.5) * moss * 0.6);
			base *= mix(0.62, 1.0, smoothstep(-0.7, 0.35, N.y));
			float foot = 1.0 - smoothstep(${r(P0.plinth)}, ${r(P0.plinth+.7)}, p.y);
			base = mix(base, base * vec3(0.55, 0.62, 0.48), foot * smoothstep(0.4, 0.7, fbm3(p * 6.0)));
			sss = 0.06;
			gloss = 0.14;
		} else if (is(${q.WOOD}.0)) {
			float g = vnoise3(vec3(p.x * 2.0, p.y * 30.0, p.z * 2.0));
			base = mix(vec3(0.26, 0.15, 0.08), vec3(0.42, 0.27, 0.15), g) * (0.85 + 0.2 * vnoise3(p * 5.0));
			gloss = 0.2;
		} else if (is(${q.GESSO}.0)) {
			base = vec3(0.86, 0.83, 0.76) * (0.95 + 0.08 * vnoise3(p * 30.0));
		} else if (is(${q.PAINT}.0)) {
			// a canvas in progress (until his own go here): a warm toned
			// ground, a loose underpainting and a few strokes
			vec2 u = fract(v_uv);
			float idx = floor(v_uv.x);
			float sk = fbm3(vec3(u * vec2(3.0, 4.0), idx * 3.7));
			vec3 ground = mix(vec3(0.55, 0.36, 0.22), vec3(0.72, 0.56, 0.40), sk);
			float fig = smoothstep(0.32, 0.2, length((u - vec2(0.5, 0.58 + 0.04 * idx)) * vec2(1.4, 0.9)) + 0.15 * sk);
			base = mix(ground, vec3(0.22, 0.13, 0.08), fig * 0.6);
			base = mix(base, vec3(0.86, 0.80, 0.70), smoothstep(0.74, 0.8, fbm3(vec3(u * 9.0, idx))) * 0.5);
			float weave = 0.5 + 0.5 * sin(u.x * 610.0) * sin(u.y * 920.0);
			base *= 0.95 + 0.05 * weave;
			gloss = 0.3;
		} else if (is(${q.POT}.0)) {
			base = vec3(0.025, 0.025, 0.028);
			gloss = 0.85;
		} else if (is(${q.SOIL}.0)) {
			base = vec3(0.10, 0.07, 0.05) * (0.7 + 0.5 * vnoise3(p * 40.0));
		} else if (is(${q.SHADE}.0)) {
			base = vec3(0.03);
			gloss = 0.6;
		} else if (is(${q.FLAME}.0)) {
			float fl = 0.85 + 0.15 * sin(time * 9.0 + p.x * 3.0) * sin(time * 5.3 + 1.0);
			gl_FragColor = vec4(sqrt(vec3(1.0, 0.62, 0.28) * 4.0 * fl), 1.0);
			return;
		} else if (is(${q.CFLAME}.0)) {
			// a hanging candle's flame: out by day; by night bright at its
			// root, flickering with its own drift's breath
			float nk = smoothstep(0.35, 0.8, night);
			if (nk < 0.02) discard;
			float fl = 0.75 + 0.25 * sin(time * 11.0 + p.x * 37.0 + p.z * 13.0) * sin(time * 6.1 + p.z * 29.0);
			gl_FragColor = vec4(sqrt(vec3(1.0, 0.7, 0.34) * 10.0 * fl * nk), 1.0);
			return;
		} else if (is(${q.BULB}.0)) {
			vec3 glow = mix(vec3(0.75, 0.70, 0.62) * 0.35, vec3(1.0, 0.75, 0.45) * 3.5, night);
			gl_FragColor = vec4(sqrt(glow), 1.0);
			return;
		} else if (is(${q.JAR}.0)) {
			base = mix(vec3(0.55, 0.42, 0.25), vec3(0.75, 0.70, 0.62), hash13(floor(p * 3.0)));
			gloss = 0.7;
		} else if (is(${q.BRUSH}.0)) {
			base = mix(vec3(0.42, 0.10, 0.06), vec3(0.75, 0.62, 0.38), step(${r(.86+.24)}, p.y));
			gloss = 0.5;
		} else if (is(${q.CLOTH}.0)) {
			float sp = smoothstep(0.86, 0.88, vnoise3(vec3(p.xz * 14.0, 5.0))) * smoothstep(0.5, 0.7, vnoise3(vec3(p.xz * 1.5, 1.0)));
			float sp2 = smoothstep(0.88, 0.9, vnoise3(vec3(p.xz * 19.0, 9.0))) * smoothstep(0.55, 0.75, vnoise3(vec3(p.xz * 1.2, 4.0)));
			base = vec3(0.52, 0.48, 0.42) * (0.9 + 0.12 * vnoise3(p * 25.0));
			base = mix(base, vec3(0.62, 0.30, 0.14), sp * 0.8);
			base = mix(base, vec3(0.20, 0.25, 0.35), sp2 * 0.7);
		}

		vec3 spec;
		float sunVis;
		vec3 light = studioLight(pw, N, V, gloss, spec, sunVis);
		vec3 col = base * light * aoK;

		// a soft sheen of light through the skin of petals and marble
		if (sss > 0.0) {
			float back = max(dot(-N, STUDIO_SUN), 0.0) * sunVis;
			float wrap = max(dot(N, STUDIO_SUN) + 0.5, 0.0) / 1.5 * sunVis;
			col += base * vec3(1.0, 0.82, 0.62) * (back * 0.8 + wrap * 0.6) * sss * mix(1.0, 0.1, night);
		}

		// reflections of the room and sky in the glossy things
		vec3 R = reflect(-V, N);
		float fres = pow(1.0 - max(dot(N, V), 0.0), 5.0);
		vec3 env = studioSky(R) * mix(0.35, 0.12, smoothstep(0.0, 0.5, -R.y)) * 0.8;
		col += spec;
		if (is(${q.POT}.0) || is(${q.STEEL}.0) || is(${q.SHADE}.0) || is(${q.JAR}.0)) {
			col += env * (0.04 + 0.6 * fres) * gloss * 1.2;
		}
		if (is(${q.BRASS}.0)) {
			col = base * light * 0.35 + spec * base * 2.5 + env * base * 1.6;
		}
		if (is(${q.REDDOOR}.0) || is(${q.REDPANEL}.0) || is(${q.WMARBLE}.0)) {
			col += env * (0.03 + 0.5 * fres) * gloss;
		}

		col = studioAir(col, pw, v_eye);

		float alpha = 1.0;
		if (is(${q.FLOOR}.0)) {
			// worn stone: no mirror, just a faint sheen of the room at grazing angles
			float cosV = clamp(V.y, 0.0, 1.0);
			alpha = 1.0 - 0.1 * pow(1.0 - cosV, 4.0) * mirrorOn;
			if (reflOn > 0.5 && mirrorOn > 0.5) {
				vec3 rc = texture2D(reflTex, clamp(gl_FragCoord.xy / reflSize, vec2(0.001), vec2(0.999))).rgb;
				col = mix(rc, col, alpha);
				alpha = 1.0;
			}
		}
		if (is(${q.WATER}.0)) {
			// still, dark water: almost a mirror, the sky's light on it, a
			// very slow breath of ripples
			// the moving surface: its slope from the swell and the rings
			float e = ${r(me)};
			float h0 = poolHeight(pw.xz);
			vec2 grad = vec2(poolHeight(pw.xz + vec2(e, 0.0)) - poolHeight(pw.xz - vec2(e, 0.0)), poolHeight(pw.xz + vec2(0.0, e)) - poolHeight(pw.xz - vec2(0.0, e))) / (2.0 * e);
			vec3 Nw = normalize(vec3(-grad.x, 1.0, -grad.y));
			float stir = clamp(length(grad) * 6.0, 0.0, 1.0);
			float cosV = clamp(dot(Nw, V), 0.0, 1.0);
			float F = 0.02 + 0.98 * pow(1.0 - cosV, 5.0);
			float refl = mix(0.30, 0.95, F);
			// the sun (or the moon) glinting on the moving water
			vec3 Rw = reflect(-V, Nw);
			float glint = pow(max(dot(Rw, STUDIO_SUN), 0.0), 900.0) * sunVis;
			vec3 glintC = mix(vec3(1.0, 0.92, 0.78) * 9.0, vec3(0.75, 0.85, 1.0) * 3.0, night);
			col = base * light * 0.35;
			// where the rings pass, crests tipped away from you catch the bright
			// roof, troughs show the dark depth
			float side = clamp(dot(grad, normalize(V.xz + vec2(1e-4))) * 9.0, -1.0, 1.0);
			vec3 hi = studioSky(Rw) * mix(0.55, 0.30, night) + light * 0.04;
			vec3 lo = vec3(0.008, 0.011, 0.010);
			vec3 ringC = mix(lo, hi, 0.5 + 0.5 * side);
			col = mix(col, ringC, stir * (reflOn > 0.5 ? 0.25 : 0.6));
			col = studioAir(col, pw, v_eye);
			alpha = 1.0 - refl * mirrorOn * (1.0 - stir * 0.6);
			if (reflOn > 0.5 && mirrorOn > 0.5) {
				// the room's reflection, bent by the slope of the water under it
				vec3 dN = Nw - vec3(0.0, 1.0, 0.0);
				vec3 rgt = vec3(view[0].x, view[1].x, view[2].x), upv = vec3(view[0].y, view[1].y, view[2].y);
				float dist = length(v_eye - pw);
				vec2 off = vec2(dot(dN, rgt), dot(dN, upv)) * 0.3 / (1.0 + dist * 0.2);
				vec3 rc = texture2D(reflTex, clamp(gl_FragCoord.xy / reflSize + off, vec2(0.001), vec2(0.999))).rgb;
				col = mix(col, rc * rc, refl * (1.0 - stir * 0.3));
				alpha = 1.0;
			}
			col += glintC * glint;
			alpha = max(alpha, glint);
			// by night each drift of candles lies in the water as a long warm
			// shimmer, broken up by the ripples
			vec3 cgl = candleGlints(Rw, pw) * (0.6 + 0.8 * stir + 0.5 * F);
			col += cgl;
			alpha = max(alpha, clamp(dot(cgl, vec3(0.33)), 0.0, 1.0));
			if (mirrorOn < 0.5) { col = mix(col, studioSky(Rw) * 0.35, F); alpha = 1.0; }
		}

		col = max(col, vec3(0.0));
		gl_FragColor = vec4(sqrt(col), alpha);
	}`,Yt={tex:null,dummy:null};function Hs(t){if(Yt.tex)return;let o=typeof navigator!="undefined"&&/Mobi|Android|iPhone|iPad/.test(navigator.userAgent),s=Math.min(o?1024:2048,t.limits.maxTextureSize),a=t.texture({width:s,height:s,min:"linear",mag:"linear",wrap:"clamp"}),e=t.framebuffer({color:a,depth:!1});t({vert:`
		precision highp float;
		attribute vec2 pos;
		varying vec2 uv;
		void main() { uv = pos * 0.5 + 0.5; gl_Position = vec4(pos, 0.0, 1.0); }`,frag:`
		precision highp float;
		varying vec2 uv;
		uniform float night;
		${Ce("bake")}
		void main() {
			vec2 qs = vec2(${r(at.sun[0])}, ${r(at.sun[1])}) + uv * vec2(${r(at.sun[2])}, ${r(at.sun[3])});
			vec2 qm = vec2(${r(at.moon[0])}, ${r(at.moon[1])}) + uv * vec2(${r(at.moon[2])}, ${r(at.moon[3])});
			gl_FragColor = vec4(studioExit(vec3(qs.x, ${r(r0)}, qs.y), STUDIO_SUN_D), studioExit(vec3(qm.x, ${r(r0)}, qm.y), STUDIO_MOON_D));
		}`,attributes:{pos:[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]},uniforms:{night:0},count:6,depth:{enable:!1},framebuffer:e})(),Yt.tex=a}function Gs(t){return Yt.tex?Yt.tex:(Yt.dummy||(Yt.dummy=t.texture({width:1,height:1,data:[0,0,0,0]})),Yt.dummy)}Y0.exports=function(t){Hs(t);let o=qs();Os(o),Ts(o),Es(o),Ss(o),$s(o);let s={enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},a=performance.now(),e={t:0},n=0,c=t._gl,l=!!(c&&c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0),h=_=>l?_:`#define NO_SIM
`+_,w=(()=>{let _=Fe,E=Pe,S=new Uint8Array(_*E*4);for(let z0=0;z0<_*E;z0++)S[z0*4]=128,S[z0*4+2]=128;let X=()=>t.framebuffer({color:t.texture({width:_,height:E,data:S,min:"nearest",mag:"nearest",wrap:"clamp"}),depth:!1,stencil:!1}),P=[X(),X()],H=0,C=new Uint8Array(_*E*4);for(let z0=0;z0<E;z0++)for(let V0=0;V0<_;V0++){let k0=k.x0+(V0+.5)*me,F0=k.z0+(z0+.5)*ss,O0=Math.abs(k0-P0.x)<.43&&Math.abs(F0-P0.z)<.43,A0=0;for(let f0 of no)A0=Math.max(A0,1-Math.min(1,Math.max(0,(Math.hypot(k0-f0[0],F0-f0[1])-f0[2]*.7)/(f0[2]*.3))));let b0=(z0*_+V0)*4;C[b0]=O0?0:255,C[b0+1]=Math.round(A0*255),C[b0+3]=255}let Q=t.texture({width:_,height:E,data:C,min:"nearest",mag:"nearest",wrap:"clamp"}),K=16,h0=[];for(let z0=0;z0<K;z0++)h0.push([0,0,0,.04]);let w0={prev:t.prop("prev"),mask:Q};for(let z0=0;z0<K;z0++)w0["src["+z0+"]"]=(V0=>()=>h0[V0])(z0);let d0=Math.pow(.36*(1/60)/me,2),n0=t({vert:"precision highp float; attribute vec2 position; varying vec2 uv; void main() { uv = position * 0.5 + 0.5; gl_Position = vec4(position, 0.0, 1.0); }",frag:`
			precision highp float;
			uniform highp sampler2D prev, mask;
			uniform vec4 src[${K}];
			varying vec2 uv;
			${ns}
			void main() {
				vec2 px = 1.0 / vec2(${_}.0, ${E}.0);
				vec4 c = texture2D(prev, uv);
				vec4 m = texture2D(mask, uv);
				float h = simDec(c.rg), hp = simDec(c.ba);
				if (m.r < 0.5) { gl_FragColor = vec4(simEnc(0.0), simEnc(0.0)); return; }
				// the neighbours (a wall or the plinth turns the wave back)
				float hs[4];
				vec2 d[4];
				d[0] = vec2(px.x, 0.0); d[1] = vec2(-px.x, 0.0); d[2] = vec2(0.0, px.y); d[3] = vec2(0.0, -px.y);
				float lap = -4.0 * h;
				for (int k = 0; k < 4; k++) {
					vec2 q = uv + d[k];
					bool inside = q.x > 0.0 && q.x < 1.0 && q.y > 0.0 && q.y < 1.0 && texture2D(mask, q).r > 0.5;
					lap += inside ? simDec(texture2D(prev, q).rg) : h;
				}
				// the pads hush the small waves under them
				float damp = mix(0.996, 0.95, m.g);
				float hn = h + (h - hp) * damp + ${r(d0)} * lap;
				hn *= 0.9993;
				// whatever touched the water this moment
				vec2 p = vec2(${r(k.x0+F[0])}, ${r(k.z0+F[2])}) + uv * vec2(${r(k.x1-k.x0)}, ${r(k.z1-k.z0)});
				for (int i = 0; i < ${K}; i++) {
					vec4 s = src[i];
					if (s.z == 0.0) continue;
					vec2 dd = p - s.xy;
					hn += s.z * exp(-dot(dd, dd) / (s.w * s.w));
				}
				gl_FragColor = vec4(simEnc(clamp(hn, -1.0, 1.0)), simEnc(h));
			}`,attributes:{position:[-1,-1,1,-1,-1,1,1,1]},primitive:"triangle strip",count:4,framebuffer:t.prop("out"),uniforms:w0,depth:{enable:!1,mask:!1},blend:{enable:!1},cull:{enable:!1},viewport:{x:0,y:0,width:_,height:E}}),E0=[],B0=0,R0=0;return{tex:()=>P[H].color[0],drop(z0,V0,k0,F0){E0.push([z0,V0,B0,k0,0,F0||.035]),typeof window!="undefined"&&window.__dropLog&&window.__dropLog.push([z0,V0,B0,k0])},advance(z0,V0){let k0=z0-B0-R0;if(k0<0||k0>2){B0=z0,R0=0;return}R0+=k0;let F0=0;for(;R0>=1/60&&F0<8;){R0-=1/60,B0+=1/60,F0++;let O0=0;for(let A0=E0.length-1;A0>=0;A0--){let b0=E0[A0],f0=B0-b0[2];if(f0>1.4){E0.splice(A0,1);continue}if(O0>=K)continue;let ht=b0[3]*.05*Math.sin(f0*2*Math.PI*2.4)*Math.exp(-f0*3.2),J0=h0[O0++];J0[0]=b0[0],J0[1]=b0[1],J0[2]=ht,J0[3]=b0[5]}for(let A0 of V0){if(O0>=K)break;let b0=h0[O0++];b0[0]=A0[0],b0[1]=A0[1],b0[2]=A0[2],b0[3]=A0[3]}for(;O0<K;O0++)h0[O0][2]=0;n0({prev:P[H].color[0],out:P[1-H]}),H=1-H}F0===8&&(R0=0,B0=z0)},read(){return t.read({framebuffer:P[H]})}}})(),m=()=>{e.t=(performance.now()-a)/1e3,typeof window!="undefined"&&window.__studioFreeze!=null&&(e.t=window.__studioFreeze);for(let S of Bo){let X=Ns(S,e.t),P=X.ph-X.Tf;X.inPool&&P>=0&&P<.5&&!(S.heard>e.t-1)&&(S.heard=e.t,w.drop(X.lx+F[0],X.lz+F[2],1.1,.04))}let _=e.t-X0.sim.t;for((_<0||_>120)&&(_=Math.min(Math.max(_,0),120));_>1e-6;){let S=Math.min(_,.05);X0.sim.step(S),_-=S}for(let S of X0.sim.events)S[2]>n&&(n=S[2],w.drop(S[0]+F[0],S[1]+F[2],S[3]*1.3,S[3]>=1?.07:.04));let E=[];for(let S of X0.sim.fish){let X=Math.min(1,Math.max(0,(S.y+.15)/.09));if(X<=0)continue;let P=.008*X*Math.min(1.5,S.v/.15);E.push([S.x+F[0]+Math.cos(S.th)*.02,S.z+F[2]+Math.sin(S.th)*.02,P,.045]),E.push([S.x+F[0]-Math.cos(S.th)*.14,S.z+F[2]-Math.sin(S.th)*.14,-P,.055])}w.advance(e.t,E)},N={stime:()=>e.t,simTex:()=>w.tex()};typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__studioClock=e,window.__pondSim=w);let x=t.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),g=x,f=[4,4],v=0,y=t({}),i=()=>y(_=>{if(u){u=!1;return}let E=_.viewportWidth,S=_.viewportHeight;x.width!==E||x.height!==S?x({copy:!0,width:E,height:S,min:"linear",mag:"linear",wrap:"clamp"}):x.subimage({copy:!0,width:E,height:S}),g=x,f[0]=E,f[1]=S,v=1}),d=t.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),p=t.framebuffer({color:d,depth:!0}),M=t({framebuffer:p}),A=t.texture({width:1,height:1,data:[0,0,0,255]}),u=!1,z=0,O=!1,R=(_,E)=>y(S=>{let X=S.viewportWidth,P=S.viewportHeight,H=Math.max(2,Math.round(X/2)),C=Math.max(2,Math.round(P/2)),Q=!O;if((p.width!==H||p.height!==C)&&(p.resize(H,C),Q=!0),f[0]=X,f[1]=P,u=!0,v=1,!Q&&++z%E!==0){g=d;return}g=A,M(()=>{t.clear({color:[0,0,0,1],depth:1}),_()}),g=d,O=!0}),Z=nt(t,"res/pond/lilypad.webp"),i0=nt(t,"res/pond/petals.webp"),s0=nt(t,"res/studio/rock_col.webp",{wrap:"repeat"}),U=nt(t,"res/studio/rock_nrm.webp",{wrap:"repeat"}),p0=nt(t,"res/studio/oldstone_col.webp",{wrap:"repeat"}),g0=nt(t,"res/studio/oldstone_nrm.webp",{wrap:"repeat"}),C0=nt(t,"res/studio/floor_col.webp",{wrap:"repeat"}),L=nt(t,"res/studio/floor_nrm.webp",{wrap:"repeat"}),Y=Object.assign({padTex:()=>Z.tex,petalTex:()=>i0.tex,reflTex:()=>g,reflSize:()=>f,reflOn:()=>v,rockCol:()=>s0.tex,rockNrm:()=>U.tex,oldCol:()=>p0.tex,oldNrm:()=>g0.tex,floorCol:()=>C0.tex,floorNrm:()=>L.tex},N),V=(_,E)=>t({vert:h(Go),frag:Ws,attributes:{position:_.pos,normal:_.nrm,kind:_.kind,uv:_.uv,anchor:_.anchor&&_.anchor.length?_.anchor:new Float32Array(_.pos.length/3*4)},elements:new Uint32Array(_.idx),count:E||_.idx.length,uniforms:Y,cull:{enable:!1},blend:s}),v0=V(o),J=null;ne(P0.file).then(_=>{if(!_.ok)throw new Error("Could not load "+P0.file);return _.arrayBuffer()}).then(_=>{let E=js(_),S={pos:[],nrm:[],kind:[],uv:[],anchor:null,idx:[]},X=P0.height,P=Math.cos(P0.yaw),H=Math.sin(P0.yaw);for(let C=0;C<E.nV;C++){let Q=(E.mn[0]+E.pos[C*3]/65535*E.sz[0])*X,K=(E.mn[1]+E.pos[C*3+1]/65535*E.sz[1])*X,h0=(E.mn[2]+E.pos[C*3+2]/65535*E.sz[2])*X;S.pos.push(P0.x+P*Q+H*h0+F[0],P0.plinth+K+F[1],P0.z-H*Q+P*h0+F[2]);let w0=E.nrm[C*3]/127,d0=E.nrm[C*3+1]/127,n0=E.nrm[C*3+2]/127;S.nrm.push(P*w0+H*n0,d0,-H*w0+P*n0),S.kind.push(q.MARBLE),S.uv.push(0,0)}for(let C=0;C<E.nI;C++)S.idx.push(E.idx[C]);J=V(S)}).catch(_=>console.error(_));let m0=null,D0=nt(t,q0.tex);ne(q0.file).then(_=>{if(!_.ok)throw new Error("Could not load "+q0.file);return _.arrayBuffer()}).then(_=>{let E=new DataView(_),S=E.getUint32(4,!0),X=E.getUint32(8,!0),P=12,H=new Float32Array(_,P,S*3);P+=S*12;let C=new Uint16Array(_,P,S*2);P+=S*4;let Q=new Uint16Array(_,P,X);P+=X*2;let K=new Int8Array(_,P,S*3),h0=new Float32Array(S*3),w0=new Float32Array(S*3),d0=new Float32Array(S*2);for(let n0=0;n0<S;n0++)h0[n0*3]=H[n0*3]+F[0],h0[n0*3+1]=H[n0*3+1]+F[1],h0[n0*3+2]=H[n0*3+2]+F[2],w0[n0*3]=K[n0*3]/127,w0[n0*3+1]=K[n0*3+1]/127,w0[n0*3+2]=K[n0*3+2]/127,d0[n0*2]=C[n0*2]/65535,d0[n0*2+1]=1-C[n0*2+1]/65535;m0=t({vert:`
				precision highp float;
				uniform mat4 proj, view;
				uniform float yScale;
				attribute vec3 position, normal;
				attribute vec2 uv;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				void main() {
					v_pos = position; v_nrm = normal; v_uv = uv;
					vec3 t = view[3].xyz;
					v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
					v_eye.y *= yScale;
					vec3 p = position; p.y *= yScale;
					gl_Position = proj * view * vec4(p, 1.0);
				}`,frag:`
				precision highp float;
				uniform float night, time;
				uniform sampler2D graveTex;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				${ft}
				void main() {
					vec3 V = normalize(v_eye - v_pos);
					vec3 N = normalize(v_nrm);
					if (dot(N, V) < 0.0) N = -N;
					vec3 tc = texture2D(graveTex, v_uv).rgb;
					vec3 base = tc * tc * 1.15;
					vec3 spec; float sv;
					vec3 light = studioLight(v_pos, N, V, 0.15, spec, sv);
					vec3 col = base * light + spec * 0.15;
					col = studioAir(col, v_pos, v_eye);
					gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
				}`,attributes:{position:h0,normal:w0,uv:d0},elements:Q,uniforms:{graveTex:()=>D0.tex},cull:{enable:!1}})}).catch(_=>console.error(_));let $0=null,M0=nt(t,"res/conservatory/flower.webp"),_0=new Float32Array(16);ne("res/conservatory/flower.bin").then(_=>{if(!_.ok)throw new Error("Could not load the flower");return _.arrayBuffer()}).then(_=>{let E=new DataView(_),S=E.getUint32(4,!0),X=E.getUint32(8,!0),P=12,H=new Float32Array(_.slice(P,P+S*12));P+=S*12;let C=new Uint16Array(_,P,S*2);P+=S*4;let Q=new Uint16Array(_.slice(P,P+X*2));P+=X*2;let K=new Int8Array(_,P,S*3),h0=new Float32Array(S*3),w0=new Float32Array(S*2);for(let d0=0;d0<S*3;d0++)h0[d0]=K[d0]/127;for(let d0=0;d0<S;d0++)w0[d0*2]=C[d0*2]/65535,w0[d0*2+1]=1-C[d0*2+1]/65535;$0=t({vert:`
				precision highp float;
				uniform mat4 proj, view, model;
				uniform float yScale;
				attribute vec3 position, normal;
				attribute vec2 uv;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				void main() {
					vec4 w = model * vec4(position, 1.0);
					v_pos = w.xyz; v_nrm = mat3(model) * normal; v_uv = uv;
					vec3 t = view[3].xyz;
					v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
					v_eye.y *= yScale;
					vec3 p = w.xyz; p.y *= yScale;
					gl_Position = proj * view * vec4(p, 1.0);
				}`,frag:`
				precision highp float;
				uniform float night, time, glow;
				uniform sampler2D flowerTex;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				${ft}
				void main() {
					vec3 V = normalize(v_eye - v_pos);
					vec3 N = normalize(v_nrm);
					if (dot(N, V) < 0.0) N = -N;
					vec3 tc = texture2D(flowerTex, v_uv).rgb;
					vec3 base = tc * tc * 1.5;
					vec3 spec; float sv;
					vec3 light = studioLight(v_pos, N, V, 0.35, spec, sv);
					// velvet: the petals' edges catch the light
					float rim = pow(1.0 - max(dot(N, V), 0.0), 3.0);
					vec3 col = base * (light + vec3(0.05, 0.03, 0.035)) + spec * 0.12 + base * rim * 0.35 * (light + 0.2);
					col = studioAir(col, v_pos, v_eye);
					col += base * vec3(1.0, 0.45, 0.5) * glow;
					gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
				}`,attributes:{position:H,normal:h0,uv:w0},elements:Q,uniforms:{flowerTex:()=>M0.tex,model:()=>_0,glow:()=>wt.glow},cull:{enable:!1}})}).catch(_=>console.error(_));let b=null,$=null,D={list:null,first:0,hide:0,from:0,at:0,dur:4.5,pending:null};ne("res/conservatory/rose_lo.bin").then(_=>{if(!_.ok)throw new Error("Could not load the roses");return _.arrayBuffer()}).then(_=>{let E=new DataView(_),S=E.getUint32(4,!0),X=E.getUint32(8,!0),P=12,H=new Float32Array(_.slice(P,P+S*12));P+=S*12;let C=new Uint16Array(_.slice(P,P+S*4));P+=S*4;let Q=new Uint16Array(_.slice(P,P+X*2));P+=X*2;let K=new Int8Array(_.slice(P,P+S*3));if($={pos:H,uv:C,idx:Q,nr:K,nV:S,nI:X},D.pending){let h0=D.pending;D.pending=null,l0(h0.list,h0.first,h0.hide,!1)}}).catch(_=>console.error(_));let j=48,t0=6,e0=(_,E)=>{let S=E-1-_;return S<t0?0:Math.min(1,.5+(S-t0)*.045)},c0=(_,E)=>{let S=n0=>{let E0=Math.sin(n0*12.9898+E*78.233)*43758.5453;return E0-Math.floor(E0)},X=Math.floor(_/j),P=_%j*29%j,H=P*2.39996+X*1.1+S(1)*.5,C=Math.sqrt((P+.6)/j),Q=q0.cx+Math.cos(H)*C*.34+(S(2)-.5)*.06,K=q0.cz+.5+Math.sin(H)*C*.55+(S(3)-.5)*.06,h0=Q-wt.at[0],w0=K-wt.at[2],d0=Math.hypot(h0,w0);return d0<.16&&(Q=wt.at[0]+h0/(d0||1)*.16,K=wt.at[2]+w0/(d0||1)*.16),{x:Q,z:K,yaw:S(4)*Math.PI*2,roll:(S(5)-.5)*.35,y:q0.top-.002+X*.012+P%3*.006,k:.72+S(6)*.12}},a0=(_,E,S,X,P)=>{if(X>0&&S<-.08){let H=X*.55*Math.min(1,(-.08-S)/.1),C=.06,Q=-.08,K=Math.cos(H),h0=Math.sin(H),w0=E-C,d0=S-Q;E=C+w0*K+d0*h0,S=Q+d0*K-w0*h0;let n0=[0,.05,-.19],E0=1-.2*X;_=n0[0]+(_-n0[0])*E0,E=n0[1]+(E-n0[1])*E0*(1-.15*X),S=n0[2]+(S-n0[2])*E0}return P[0]=_,P[1]=Math.max(.002,E),P[2]=S,P};function l0(_,E,S,X){if(!$){D.pending={list:_,first:E,hide:S};return}let P=_.length,H=Math.min(j,P-S),C=Math.max(0,P-S-H),Q=D.list?Wt=>{let Ut=Wt+(E-D.first);return Ut>=0&&Ut<D.list.length?e0(Ut,D.list.length):0}:null,K=$,h0=K.nV,w0=K.nI,d0=5,n0=H,E0=n0*(h0+d0*4),B0=n0*(w0+d0*6),R0=new Float32Array(E0*3),z0=new Float32Array(E0*3),V0=new Float32Array(E0*3),k0=new Float32Array(E0*2),F0=new Float32Array(E0),O0=new Float32Array(E0),A0=new Float32Array(E0*2).fill(.5),b0=new Uint32Array(B0),f0=0,ht=0,J0=[0,0,0];for(let Wt=0;Wt<n0;Wt++){let Ut=C+Wt,qo=E+Ut,mt=c0(qo,_[Ut].s||0),fe=e0(Ut,P),Ae=X&&Q?Q(Ut):fe,te=Math.cos(mt.yaw),ee=Math.sin(mt.yaw),qe=Math.cos(mt.roll),Oe=Math.sin(mt.roll),Oo=(U0,Mt,Vt)=>{let _t=U0[0]*qe-U0[1]*Oe,Ct=U0[0]*Oe+U0[1]*qe,zt=U0[2];_t*=mt.k,Ct*=mt.k;let St=zt*mt.k;Mt[Vt]=F[0]+mt.x+_t*te+St*ee,Mt[Vt+1]=F[1]+mt.y+Math.max(0,Ct),Mt[Vt+2]=F[2]+mt.z-_t*ee+St*te},ws=f0;for(let U0=0;U0<h0;U0++,f0++){let Mt=K.pos[U0*3],Vt=K.pos[U0*3+1],_t=K.pos[U0*3+2];Oo(a0(Mt,Vt,_t,Ae,J0),R0,f0*3),Oo(a0(Mt,Vt,_t,fe,J0),z0,f0*3);let Ct=K.nr[U0*3]/127,zt=K.nr[U0*3+1]/127,St=K.nr[U0*3+2]/127,Ht=Ct*qe-zt*Oe,oe=Ct*Oe+zt*qe;V0[f0*3]=Ht*te+St*ee,V0[f0*3+1]=oe,V0[f0*3+2]=-Ht*ee+St*te,k0[f0*2]=K.uv[U0*2]/65535,k0[f0*2+1]=1-K.uv[U0*2+1]/65535,F0[f0]=Ae,O0[f0]=fe}for(let U0=0;U0<w0;U0++)b0[ht++]=ws+K.idx[U0];let Te=U0=>{let Mt=Math.sin(U0*7.13+qo*3.71)*43758.5453;return Mt-Math.floor(Mt)};for(let U0=0;U0<d0;U0++){let Mt=(Te(U0)-.5)*.2,Vt=-.19*mt.k+(Te(U0+9)-.5)*.2,_t=Te(U0+3)*6.283,Ct=.011+Te(U0+5)*.008,zt=f0;for(let St=0;St<4;St++){let Ht=St===1||St===2?1:0,oe=St>=2?1:0,To=(Ht-.5)*Ct*2,Eo=(oe-.5)*Ct*2.4,Do=Mt+To*Math.cos(_t)-Eo*Math.sin(_t),Lo=Vt+To*Math.sin(_t)+Eo*Math.cos(_t),Ro=F[0]+mt.x+Do*te+Lo*ee,Fo=F[2]+mt.z-Do*ee+Lo*te,Po=F[1]+q0.top+.0015+(Ht===oe?.004:0);R0[f0*3]=Ro,R0[f0*3+1]=Po-(Ae>0?0:.03),R0[f0*3+2]=Fo,z0[f0*3]=Ro,z0[f0*3+1]=Po-(fe>0?0:.03),z0[f0*3+2]=Fo,V0[f0*3+1]=1,k0[f0*2]=.82+Ht*.03,k0[f0*2+1]=.53+oe*.035,A0[f0*2]=Ht,A0[f0*2+1]=oe,F0[f0]=Ae>0?-1:-2,O0[f0]=fe>0?-1:-2,f0++}b0[ht++]=zt,b0[ht++]=zt+1,b0[ht++]=zt+2,b0[ht++]=zt,b0[ht++]=zt+2,b0[ht++]=zt+3}}b&&b.bufs.forEach(Wt=>Wt.destroy());let No=[t.buffer(R0),t.buffer(z0),t.buffer(V0),t.buffer(k0),t.buffer(F0),t.buffer(O0),t.buffer(A0)],Ao=t.elements({data:b0,type:"uint32"});No.push(Ao),D.list=_,D.first=E,D.hide=S,D.at=X?null:-1,b={bufs:No,el:Ao,count:ht}}let u0=t({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float yScale, mixK;
			attribute vec3 posA, posB, normal;
			attribute vec2 uv;
			attribute float wiltA, wiltB;
			attribute vec2 shape;
			varying vec3 v_pos, v_nrm, v_eye;
			varying vec2 v_uv, v_shape;
			varying float v_wilt, v_petal;
			void main() {
				v_shape = shape;
				vec3 p = mix(posA, posB, mixK);
				float w = mix(wiltA, wiltB, mixK);
				v_petal = w < -0.5 ? 1.0 : 0.0;
				// (a petal not yet fallen: under the stone)
				v_wilt = w < -0.5 ? 0.75 : w;
				v_pos = p; v_nrm = normal; v_uv = uv;
				vec3 t = view[3].xyz;
				v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
				v_eye.y *= yScale;
				vec3 q = p; q.y *= yScale;
				gl_Position = proj * view * vec4(q, 1.0);
			}`,frag:`
			precision highp float;
			uniform float night, time;
			uniform sampler2D flowerTex;
			varying vec3 v_pos, v_nrm, v_eye;
			varying vec2 v_uv, v_shape;
			varying float v_wilt, v_petal;
			${ft}
			void main() {
				if (v_petal > 0.5) {
					// a petal: rounded, a little notched at its tip
					vec2 q = (v_shape - 0.5) * vec2(2.0, 2.0);
					float r = length(q * vec2(1.0, 0.85 + 0.25 * q.y));
					if (r > 0.95 - 0.12 * smoothstep(0.6, 1.0, q.y) * (1.0 - abs(q.x) * 3.0)) discard;
				}
				vec3 V = normalize(v_eye - v_pos);
				vec3 N = normalize(v_nrm);
				if (dot(N, V) < 0.0) N = -N;
				vec3 tc = texture2D(flowerTex, v_uv).rgb;
				vec3 base = tc * tc * 1.5;
				// wilting: the red darkening to the brown-black of a dried rose,
				// the green going to straw
				float w = v_wilt;
				float l = dot(base, vec3(0.3, 0.55, 0.15));
				vec3 dried = vec3(l) * vec3(1.25, 0.55, 0.42) + vec3(0.012, 0.004, 0.003);
				base = mix(base, dried, 0.75 * w) * mix(1.0, 0.42, w);
				vec3 spec; float sv;
				vec3 light = studioLight(v_pos, N, V, 0.35, spec, sv);
				float rim = pow(1.0 - max(dot(N, V), 0.0), 3.0);
				vec3 col = base * (light + vec3(0.05, 0.03, 0.035)) + spec * 0.12 * (1.0 - 0.7 * w) + base * rim * 0.35 * (light + 0.2) * (1.0 - 0.5 * w);
				col = studioAir(col, v_pos, v_eye);
				gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
			}`,attributes:{posA:()=>b.bufs[0],posB:()=>b.bufs[1],normal:()=>b.bufs[2],uv:()=>b.bufs[3],wiltA:()=>b.bufs[4],wiltB:()=>b.bufs[5],shape:()=>b.bufs[6]},elements:()=>b.el,count:()=>b.count,uniforms:{flowerTex:()=>M0.tex,mixK:()=>D.k===void 0?1:D.k},cull:{enable:!1}});if(oo=()=>{if(!b)return;let _=performance.now()/1e3;D.at===null&&(D.at=_+.6),D.k=D.at<0?1:Math.max(0,Math.min(1,(_-D.at)/D.dur)),D.k=D.k*D.k*(3-2*D.k),u0()},Ue=(_,E,S,X)=>l0(_||[],E||0,S||0,!!X),Re.a){let _=Re.a;Re.a=null,Ue(..._)}let T0=nt(t,"res/tree/leaves.webp"),x0=Fs(),L0=t({vert:h(`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position, normal;
		attribute vec2 uv;
		attribute float shade, flower;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_shade, v_flower;
		void main() {
			v_pos = position; v_nrm = normal; v_uv = uv; v_shade = shade; v_flower = flower;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = position; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`),frag:`
		precision highp float;
		uniform float night, time;
		uniform sampler2D tex;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_shade, v_flower;
		${ft}
		vec2 hash22(vec2 p) {
			vec3 a = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
			a += dot(a, a.yzx + 33.33);
			return fract((a.xx + a.yz) * a.zy);
		}
		// a clump of bougainvillea: papery bracts in threes, magenta or white
		vec4 blossom(vec2 uv, float seed) {
			vec2 c = uv - 0.5;
			float edge = length(c) * 2.0;
			if (edge > 0.95) return vec4(0.0);
			vec2 q = uv * 4.0 + seed * 13.0;
			vec2 cell = floor(q), fq = fract(q);
			float best = 0.0; float tone = 0.0; vec2 bl = vec2(0.0);
			for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
				vec2 o = vec2(float(i), float(j));
				vec2 h = hash22(cell + o);
				if (h.x > 0.96) continue;
				vec2 ctr = o + 0.2 + 0.6 * hash22(cell + o + 7.0);
				vec2 d = fq - ctr;
				float rot = h.y * 6.283;
				// three bracts round the centre
				for (int k = 0; k < 3; k++) {
					float a = rot + float(k) * 2.094;
					vec2 bc = vec2(cos(a), sin(a)) * 0.2;
					vec2 dd = d - bc;
					float m = smoothstep(0.26, 0.2, length(dd * vec2(1.0, 1.25)));
					if (m > best) { best = m; tone = h.y; bl = dd; }
				}
			}
			best *= smoothstep(0.95, 0.6, edge + 0.25 * (hash22(cell).x - 0.5));
			return vec4(bl, tone, best);
		}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			if (v_flower > 0.5) {
				vec4 b = blossom(v_uv, v_shade);
				if (b.w < 0.5) discard;
				bool white = v_shade > 0.9 || b.z > 0.93;
				vec3 pink = mix(vec3(0.62, 0.02, 0.24), vec3(0.78, 0.08, 0.36), b.z);
				vec3 base = white ? vec3(0.84, 0.80, 0.80) : pink;
				// the bract's veins and its paler heart
				base *= 0.8 + 0.3 * smoothstep(0.25, 0.0, length(b.xy));
				vec3 spec; float sv;
				vec3 light = studioLight(v_pos, N, V, 0.3, spec, sv);
				float through = max(dot(-N, STUDIO_SUN), 0.0) * sv;
				vec3 col = base * light + base * vec3(1.0, 0.75, 0.8) * through * 2.6 * (1.0 - night) + spec * 0.15;
				col = studioAir(col, v_pos, v_eye);
				gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
				return;
			}
			vec4 t = texture2D(tex, v_uv);
			if (t.a < 0.5) discard;
			vec3 base = t.rgb * t.rgb * vec3(0.8, 0.95, 0.75) * v_shade;
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, 0.4, spec, sv);
			// light through the leaf
			float through = max(dot(-N, STUDIO_SUN), 0.0) * sv;
			vec3 col = base * light + base * vec3(0.9, 1.0, 0.5) * through * 2.2 * (1.0 - night) + spec * 0.3;
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,attributes:{position:x0.pos,normal:x0.nrm,uv:x0.uv,shade:x0.shade,flower:x0.flower},elements:new Uint32Array(x0.idx),uniforms:{tex:T0.tex},cull:{enable:!1}}),S0=nt(t,"res/studio/plants.webp"),y0=nt(t,"res/studio/vleaves.webp"),N0=Cs(),I0=_=>t({vert:h(`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position, normal, info;
		attribute vec2 uv;
		varying vec3 v_pos, v_nrm, v_eye, v_info;
		varying vec2 v_uv;
		void main() {
			v_pos = position; v_nrm = normal; v_uv = uv; v_info = info;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = position; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`),frag:`
		precision highp float;
		uniform float night, time;
		uniform sampler2D tex, tex2;
		varying vec3 v_pos, v_nrm, v_eye, v_info;
		varying vec2 v_uv;
		${ft}
		void main() {
			vec4 tx = v_info.y > 5.5 ? texture2D(tex2, v_uv) : texture2D(tex, v_uv);
			if (tx.a < 0.5) discard;
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float type = v_info.y;
			vec3 base = tx.rgb * tx.rgb;
			float gloss = 0.3, through = 1.8;
			vec3 trC = vec3(0.9, 1.0, 0.5);
			if (type < 0.5) {
				// ivy: the photographed leaves deepened to an old ivy's dark green
				float l = dot(base, vec3(0.3, 0.59, 0.11));
				base = mix(vec3(l), base, 1.3) * vec3(0.42, 0.60, 0.36);
				gloss = 0.55; through = 1.2;
			} else if (type < 1.5) {
				base *= vec3(0.80, 0.92, 0.62);
				// darker down in the grass, near the ground
				base *= mix(0.35, 1.0, smoothstep(0.0, 0.7, v_info.z));
			} else if (type < 2.5) {
				gloss = 0.15; through = 0.8;
			} else if (type < 3.5) {
				base *= vec3(0.62, 0.78, 0.5);
			} else if (type < 4.5) {
				// rose petals: dark red velvet, the sun glowing red through them
				gloss = 0.22; through = 1.6; trC = vec3(1.0, 0.35, 0.35);
			} else if (type > 5.5) {
				// the vine's leaves, as photographed, a little deepened for the shade of the room
				base *= vec3(0.78, 0.86, 0.68);
				gloss = 0.4; through = 1.3;
			} else {
				// the rose's own leaves: a deeper, bluer green than the ivy
				base *= vec3(0.55, 0.72, 0.5);
				gloss = 0.45; through = 1.0;
			}
			base *= v_info.x;
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, gloss, spec, sv);
			float tr = max(dot(-N, STUDIO_SUN), 0.0) * sv;
			vec3 col = base * light + base * trC * tr * through * (1.0 - night) + spec * 0.2 * gloss;
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,attributes:{position:_.pos,normal:_.nrm,uv:_.uv,info:_.info},elements:new Uint32Array(_.idx),uniforms:{tex:S0.tex,tex2:y0.tex},cull:{enable:!1}}),rt=I0(N0.walls),pt=bs(),j0=t({vert:h(`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		uniform float time, windK, closeK;
		attribute vec3 position, normal;
		attribute vec2 uv;
		attribute float sw;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		void main() {
			// a slow flow in the still air: waves running down the fall, the
			// hem lifting and settling, never in step round the drum
			vec2 c = position.xz - vec2(${r(B.cx+F[0])}, ${r(B.cz+F[2])});
			float a = atan(c.x, c.y);
			vec2 out2 = normalize(c);
			float y = position.y;
			float w = sin(time * 0.55 + a * 2.3 - y * 0.9) * 0.6 + sin(time * 0.93 + a * 5.1 + y * 1.7) * 0.3 + sin(time * 0.31 - a * 1.3) * 0.4;
			float side = sin(time * 0.7 + a * 3.7 - y * 1.3);
			vec2 tng = vec2(-out2.y, out2.x);
			// and the wind: a draught from the windows' side across the drum,
			// coming in slow gusts. The cloth on the far side of the drum
			// from it lifts and billows out; the near side is pressed in
			// against the stone and ripples; the parted edges on the pool's
			// line, free, flap and curl most.
			vec2 wd = normalize(vec2(0.92, -0.38));
			float gust = (0.55 + 0.3 * sin(time * 0.29) * sin(time * 0.17 + 1.3) + 0.25 * sin(time * 0.61 + 0.7) + 0.12 * sin(time * 1.37 + a)) * windK;
			float lee = dot(out2, wd);
			float wave = sin(time * 1.6 + a * 4.0 - y * 1.5) * 0.55 + sin(time * 2.7 + a * 9.0 + y * 2.4) * 0.25;
			float lat = ${r(B.cloth)} * abs(sin(a));
			float edge = (1.0 - smoothstep(${r(B.gap)}, ${r(B.gap+.9)}, lat)) * step(abs(sin(a)), 0.7);
			vec2 blow = wd * gust * (0.16 + 0.1 * wave) * mix(0.35, 1.0, smoothstep(-0.6, 0.6, lee))
				+ out2 * gust * max(lee, 0.0) * (0.14 + 0.08 * wave)
				+ tng * edge * gust * (sin(time * 2.1 + y * 2.3 + a * 6.0) * 0.13 + sin(time * 3.3 - y * 3.1) * 0.05);
			vec3 p0 = position + vec3(out2.x, 0.0, out2.y) * w * 0.09 * sw + vec3(tng.x, 0.0, tng.y) * side * 0.05 * sw
				+ vec3(blow.x, 0.03 * gust * wave, blow.y) * sw;
			// at the end the wind swings the two halves either side of each
			// arch in towards each other, so that now and then they meet
			// across it and hide what is beyond, and then part again
			if (closeK > 0.0) {
				float lx = c.x;
				float ax = abs(lx);
				float hang = sqrt(clamp(sw, 0.0, 1.0));
				float wgt = (1.0 - smoothstep(${r(B.gap)}, ${r(B.gap+1.9)}, ax)) * step(${r(B.gap-.05)}, ax) * step(0.55, abs(out2.y));
				float swing = smoothstep(-0.25, 0.85, sin(time * 0.42 + 0.6) * 0.65 + sin(time * 0.23 + 2.1) * 0.35 + 0.08 * sin(time * 1.3 + y));
				float move = min(closeK * swing * wgt * hang * (0.98 + 0.06 * wave), max(ax - 0.035, 0.0));
				p0.x -= sign(lx) * move;
				p0.z += out2.y * move * 0.12;
			}
			v_pos = p0;
			v_nrm = normalize(normal + vec3(out2.x, 0.0, out2.y) * side * 0.3 * sw + vec3(tng.x, 0.0, tng.y) * wave * gust * 0.5 * sw);
			v_uv = uv;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = p0; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		${ft}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			float facing = dot(N, V);
			if (facing < 0.0) N = -N;
			float cosV = abs(facing);
			// the net: fine threads, and the threads' own unevenness in streaks down the fall
			vec2 w = v_uv * vec2(260.0, 900.0);
			float threads = max(smoothstep(0.78, 0.98, abs(sin(w.x))), smoothstep(0.78, 0.98, abs(sin(w.y))));
			float streak = 0.5 + 0.5 * sin(v_uv.x * 41.0 + sin(v_uv.y * 9.0 + v_uv.x * 3.0) * 2.0);
			float sheer = 0.5 + 0.16 * streak + 0.08 * threads;
			// edge on, the net closes up into solid colour
			float a = clamp(sheer + (1.0 - sheer) * pow(1.0 - cosV, 2.6) * 0.9, 0.0, 0.9);
			vec3 base = vec3(0.2, 0.008, 0.036) * (0.8 + 0.4 * streak);
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, 0.35, spec, sv);
			float tr = max(dot(-N, STUDIO_SUN), 0.0) * sv * (1.0 - night * 0.6);
			float sheen = pow(1.0 - cosV, 3.0);
			// (a little of the room's own dim light caught in the net, so it reads even in the shade)
			vec3 col = base * (light + vec3(0.6, 0.5, 0.48)) * (1.0 + 1.6 * sheen) + vec3(0.3, 0.012, 0.025) * tr * 0.45 + spec * 0.03;
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)) * a, a);
		}`,attributes:{position:pt.pos,normal:pt.nrm,uv:pt.uv,sw:pt.sw},uniforms:{windK:()=>Ve.k,closeK:()=>Ve.close},elements:new Uint32Array(pt.idx),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",srcAlpha:"one",dstRGB:"one minus src alpha",dstAlpha:"one minus src alpha"}}}),G0=nt(t,"res/studio/rose_col.webp"),K0=null;ne("res/studio/rose.bin").then(_=>{if(!_.ok)throw new Error("Could not load res/studio/rose.bin");return _.arrayBuffer()}).then(_=>{let E=new DataView(_).getUint32(4,!0),S=new Float32Array(_,8,E*8),X=new Float32Array(N0.roses.length*E*3),P=new Float32Array(X.length),H=new Float32Array(N0.roses.length*E*2),C=0;for(let Q of N0.roses){let K=Q.f,h0=Math.abs(K[1])>.9?[1,0,0]:[0,1,0],w0=[h0[1]*K[2]-h0[2]*K[1],h0[2]*K[0]-h0[0]*K[2],h0[0]*K[1]-h0[1]*K[0]],d0=Math.hypot(...w0),n0=w0.map(k0=>k0/d0),E0=[K[1]*n0[2]-K[2]*n0[1],K[2]*n0[0]-K[0]*n0[2],K[0]*n0[1]-K[1]*n0[0]],B0=Math.cos(Q.spin),R0=Math.sin(Q.spin),z0=n0.map((k0,F0)=>k0*B0+E0[F0]*R0),V0=E0.map((k0,F0)=>k0*B0-n0[F0]*R0);for(let k0=0;k0<E;k0++){let F0=S[k0*8],O0=S[k0*8+1],A0=S[k0*8+2],b0=S[k0*8+3],f0=S[k0*8+4],ht=S[k0*8+5];for(let J0=0;J0<3;J0++)X[C*3+J0]=Q.at[J0]+F[J0]+(z0[J0]*F0+V0[J0]*O0+K[J0]*A0)*Q.size,P[C*3+J0]=z0[J0]*b0+V0[J0]*f0+K[J0]*ht;H[C*2]=S[k0*8+6],H[C*2+1]=S[k0*8+7],C++}}K0=t({vert:h(`
				precision highp float;
				uniform mat4 proj, view;
				uniform float yScale;
				attribute vec3 position, normal;
				attribute vec2 uv;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				void main() {
					v_pos = position; v_nrm = normal; v_uv = uv;
					vec3 t = view[3].xyz;
					v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
					v_eye.y *= yScale;
					vec3 p = position; p.y *= yScale;
					gl_Position = proj * view * vec4(p, 1.0);
				}`),frag:`
				precision highp float;
				uniform float night, time;
				uniform sampler2D tex;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				${ft}
				void main() {
					vec3 V = normalize(v_eye - v_pos);
					vec3 N = normalize(v_nrm);
					if (dot(N, V) < 0.0) N = -N;
					vec3 base = texture2D(tex, v_uv).rgb; base *= base;
					vec3 spec; float sv;
					vec3 light = studioLight(v_pos, N, V, 0.25, spec, sv);
					// velvet: a soft sheen at the petals' edges, and the sun glowing red through them
					float rim = pow(1.0 - max(dot(N, V), 0.0), 2.0);
					float tr = max(dot(-N, STUDIO_SUN), 0.0) * sv * (1.0 - night);
					vec3 col = base * light * (1.0 + 0.35 * rim) + base * vec3(1.0, 0.3, 0.3) * tr * 1.5 + spec * 0.05;
					col = studioAir(col, v_pos, v_eye);
					gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
				}`,attributes:{position:X,normal:P,uv:H},count:C,uniforms:{tex:G0.tex},cull:{enable:!1}})}).catch(_=>console.error(_));let lt=I0(N0.ground);typeof location!="undefined"&&/tourdebug/.test(location.search)&&console.log("studio greenery: ivy verts",N0.walls.pos.length/3,"ground verts",N0.ground.pos.length/3);let Ot=(()=>{let _=[],E=[];for(let H=0;H<=14;H++)for(let C=0;C<=6*2;C++)_.push([H/14,C/6-1]);let P=6*2+1;for(let H=0;H<14;H++)for(let C=0;C<6*2;C++){let Q=H*P+C;E.push([Q,Q+P,Q+P+1],[Q,Q+P+1,Q+1])}return{uvw:_,idx:E}})(),Zt=t({vert:h(`
		precision highp float;
		uniform mat4 proj, view, gModel;
		uniform float yScale, gFloat, gSize, gFlex, gFlutter, gAng, time;
		uniform vec3 gPos;
		attribute vec2 uvw;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		${Dt}
		// the bract at (u, v): u 0 (where it was joined) .. 1 (its tip),
		// v -1 .. 1 across. x along its length, y out of its face, z across
		vec3 shape(float u, float v) {
			float L = gSize;
			// an ovate heart: rounded lobes near the base, widest past the
			// middle, drawn to a soft point
			float hw = L * 0.36 * pow(max(sin(3.14159 * pow(u, 0.72)), 0.0), 0.8) * (1.0 + 0.18 * (1.0 - u) * (1.0 - u));
			float x = (u - 0.38) * L;
			float z = v * hw;
			// cupped along its middle, the tip curling back, the edge rippling
			float y = abs(v) * hw * 0.38 + v * v * hw * 0.12 - 0.1 * u * u * L;
			y += sin(u * 13.0 + (v > 0.0 ? 0.0 : 1.9)) * 0.018 * L * v * v * v * v;
			// the air bending it: the whole blade arching, and a ripple
			// running along it from the base to the tip
			y += gFlex * L * (0.45 * u * u - 0.25 * v * v);
			y += gFlutter * L * 0.16 * u * sin(time * 17.0 - u * 6.0 + v * 1.3);
			z += gFlutter * L * 0.05 * u * sin(time * 11.0 - u * 4.0);
			return vec3(x, y, z);
		}
		mat3 rotY(float t) { float c = cos(t), s = sin(t); return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c); }
		void main() {
			float u = uvw.x, v = uvw.y;
			vec3 p0 = shape(u, v);
			vec3 du = shape(min(u + 0.02, 1.0), v) - shape(max(u - 0.02, 0.0), v);
			vec3 dv = shape(u, min(v + 0.05, 1.0)) - shape(u, max(v - 0.05, -1.0));
			vec3 n0 = normalize(cross(dv, du));
			vec3 q, n;
			if (gFloat > 0.5) {
				// lying on the water, turning slowly, lifted and tilted by the swell
				vec3 pos = gPos;
				float h0 = poolHeight(pos.xz);
				vec2 grad = vec2(poolHeight(pos.xz + vec2(0.05, 0.0)) - h0, poolHeight(pos.xz + vec2(0.0, 0.05)) - h0) / 0.05;
				pos.y = 0.018 + h0 * 1.4;
				mat3 R = rotY(gAng);
				vec3 l = R * vec3(p0.x, p0.y * 0.6, p0.z);
				l.y += dot(l.xz, grad) * 1.4;
				q = pos + l;
				n = normalize(R * n0 + vec3(-grad.x, 0.0, -grad.y));
			} else {
				q = (gModel * vec4(p0, 1.0)).xyz;
				n = normalize(mat3(gModel) * n0);
			}
			v_pos = q; v_nrm = n; v_uv = vec2(u, v);
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = q; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		${ft}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float u = v_uv.x, w = abs(v_uv.y);
			// papery magenta: deeper towards the base, the fine veins running
			// out from the midrib, the edge a shade darker
			float vein = 0.5 + 0.5 * cos((w * 7.0 + u * 2.0) * 3.14159 * 1.6);
			float mid = exp(-w * w * 120.0) * (1.0 - u);
			vec3 base = mix(vec3(0.66, 0.03, 0.24), vec3(0.42, 0.015, 0.16), (1.0 - u) * 0.6);
			base *= (0.9 + 0.12 * vein) * (1.0 - 0.18 * smoothstep(0.75, 1.0, w)) * (1.0 + 0.4 * mid * vec3(0.4, 1.0, 0.6));
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, 0.3, spec, sv);
			// thin as paper: the sun behind it sets it glowing
			float through = abs(dot(N, STUDIO_SUN)) * sv;
			// and a little light of its own, so the eye can follow it through the shade
			vec3 col = base * (light + vec3(0.2, 0.15, 0.17)) + base * vec3(1.0, 0.7, 0.8) * through * 2.0 * (1.0 - night * 0.5) + spec * 0.05;
			col = studioAir(col, v_pos, v_eye);
			// and it glows: a soft light of its own, brighter than anything
			// round it, more so by night (the bloom spreads it into a halo);
			// it breathes a little, and the veins and the middle glow most
			float breath = 0.88 + 0.12 * sin(time * 1.7) * sin(time * 0.9 + 1.3);
			vec3 glow = vec3(1.0, 0.2, 0.55) * (0.7 + 0.45 * vein + 0.6 * mid) * mix(0.55, 1.6, night) * breath;
			col += glow;
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,attributes:{uvw:Ot.uvw},elements:Ot.idx,uniforms:Object.assign({gModel:()=>xt.model,gPos:()=>{let _=X0.sim.crumbs[0];return[_.x+F[0],0,_.z+F[2]]},gAng:()=>xt.ang,gSize:()=>xt.size,gFlex:()=>xt.flex,gFlutter:()=>xt.flutter,gFloat:()=>xt.floating?1:0},N),cull:{enable:!1}}),kt=(()=>{let _={corner:[],start:[],par:[],misc:[],idx:[]};return Bo.forEach((E,S)=>{for(let X of[[-1,-1],[1,-1],[1,1],[-1,1]])_.corner.push(X[0],X[1]),_.start.push(E.start[0]+F[0],E.start[1],E.start[2]+F[2]),_.par.push(E.period,E.offset,E.drift[0],E.drift[1]),_.misc.push(E.speed,E.seed,E.white);_.idx.push(S*4,S*4+1,S*4+2,S*4,S*4+2,S*4+3)}),_})(),Jt=t({vert:h(`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec2 corner;
		attribute vec3 start;
		attribute vec4 par;
		attribute vec3 misc;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_white, v_fade;
		${Dt}
		mat3 rotAxis(vec3 a, float t) {
			float c = cos(t), s = sin(t), ic = 1.0 - c;
			return mat3(c + a.x * a.x * ic, a.y * a.x * ic + a.z * s, a.z * a.x * ic - a.y * s,
			            a.x * a.y * ic - a.z * s, c + a.y * a.y * ic, a.z * a.y * ic + a.x * s,
			            a.x * a.z * ic + a.y * s, a.y * a.z * ic - a.x * s, c + a.z * a.z * ic);
		}
		void main() {
			float P = par.x, speed = misc.x, seed = misc.y;
			float tt = stime + par.y;
			float cyc = floor(tt / P);
			float ph = tt - cyc * P;
			float m = 0.6 + 0.4 * sin(cyc * 1.7 + seed * 5.0);
			vec2 land = start.xz + par.zw * m;
			vec2 lq = land - vec2(${r(F[0])}, ${r(F[2])});
			bool inPool = lq.x > ${r(jt[0])} && lq.x < ${r(jt[2])} && lq.y > ${r(jt[1])} && lq.y < ${r(jt[3])};
			float rest = inPool ? 0.017 : 0.006;
			float Tf = (start.y - rest) / speed;
			float s = clamp(ph / Tf, 0.0, 1.0);
			float size = 0.03 + 0.012 * seed;
			vec3 local = vec3(corner.x, 0.0, corner.y) * size;
			vec3 n = vec3(0.0, 1.0, 0.0);
			vec3 pos;
			if (ph < Tf) {
				// falling: a lazy sway from side to side, tumbling as it goes
				vec2 sway = vec2(sin(tt * 1.3 + seed * 7.0), cos(tt * 1.05 + seed * 3.0)) * 0.35 * sin(s * 3.14159);
				pos = vec3(start.x + (land.x - start.x) * s + sway.x, start.y - (start.y - rest) * s, start.z + (land.y - start.z) * s + sway.y);
				vec3 ax = normalize(vec3(sin(seed * 11.0), 0.6, cos(seed * 7.0)));
				mat3 R = rotAxis(ax, tt * (2.0 + seed * 2.5));
				// it flutters flatter as it slows near the ground
				local = R * local; n = R * n;
			} else {
				pos = vec3(land.x, rest, land.y);
				float a = seed * 6.283;
				mat3 Y = rotAxis(vec3(0.0, 1.0, 0.0), a);
				local = Y * local;
				if (inPool) {
					// floating: carried slowly, riding the swell and the rings
					float age = ph - Tf;
					pos.xz += vec2(sin(age * 0.12 + seed * 9.0), cos(age * 0.1 + seed * 5.0)) * 0.06 * min(age * 0.2, 1.0);
					float h0 = poolHeight(pos.xz);
					vec2 grad = vec2(poolHeight(pos.xz + vec2(0.05, 0.0)) - h0, poolHeight(pos.xz + vec2(0.0, 0.05)) - h0) / 0.05;
					pos.y += h0 * 1.4;
					local.y += dot(local.xz, grad) * 1.4;
					n = normalize(vec3(-grad.x, 1.0, -grad.y));
				}
			}
			// grow out of the flower at the start, fade away at the end
			v_fade = smoothstep(0.0, 1.2, ph) * (1.0 - smoothstep(P - 3.0, P - 0.2, ph));
			vec3 q = pos + local * (0.4 + 0.6 * v_fade);
			v_pos = q; v_nrm = n; v_uv = corner * 0.5 + 0.5; v_white = misc.z;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = q; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		varying float v_white, v_fade;
		${ft}
		void main() {
			vec2 u = v_uv * 2.0 - 1.0;
			float heart = length(vec2(u.x * 1.1, u.y + 0.15 * abs(u.x) * 2.0 - 0.1));
			if (heart > 0.85 + 0.1 * sin(atan(u.y, u.x) * 3.0)) discard;
			if (v_fade < 0.02) discard;
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			vec3 base = mix(vec3(0.62, 0.03, 0.22), vec3(0.86, 0.80, 0.80), v_white);
			base *= 0.85 + 0.25 * smoothstep(0.9, 0.0, heart);
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, 0.3, spec, sv);
			float through = abs(dot(N, STUDIO_SUN)) * sv;
			vec3 col = base * light + base * vec3(1.0, 0.75, 0.8) * through * 1.6 * (1.0 - night);
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,attributes:{corner:kt.corner,start:kt.start,par:kt.par,misc:kt.misc},elements:new Uint32Array(kt.idx),uniforms:N,cull:{enable:!1}}),X0={sim:As(),ready:!1};it=X0.sim,typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__koi=X0.sim);let Tt=Object.assign({},N);$t.forEach((_,E)=>{Tt["koiA["+E+"]"]=()=>{let S=X0.sim.fish[E];return[S.x+F[0],S.y,S.z+F[2],S.th]},Tt["koiB["+E+"]"]=()=>{let S=X0.sim.fish[E];return[S.kappa,S.ph,S.amp,S.pitch]}});let le=(()=>{let E=Math.round(96*(k.z1-k.z0)/(k.x1-k.x0)),S=new Uint8Array(96*E*4),X=[-ut[0]/ut[1]*-pe,-ut[2]/ut[1]*-pe],P=96/(k.x1-k.x0),H=E/(k.z1-k.z0);for(let C=0;C<E;C++)for(let Q=0;Q<96;Q++){let K=k.x0+(Q+.5)/P,h0=k.z0+(C+.5)/H,w0=0;for(let d0 of no){let n0=Math.hypot(K-(d0[0]+X[0]),h0-(d0[1]+X[1]));w0=Math.max(w0,1-Math.min(1,Math.max(0,(n0-d0[2]*.82)/(d0[2]*.35))))}S[(C*96+Q)*4]=Math.round(w0*255),S[(C*96+Q)*4+3]=255}return t.texture({width:96,height:E,data:S,min:"linear",mag:"linear"})})(),Mo=`
		uniform vec4 koiA[${$t.length}], koiB[${$t.length}];
		// where we see a point under the water: at the surface's own depth
		vec4 underPos(vec3 q, mat4 proj, mat4 view, float order) {
			vec3 tr = view[3].xyz;
			vec3 eye = -vec3(dot(view[0].xyz, tr), dot(view[1].xyz, tr), dot(view[2].xyz, tr));
			vec4 cq = proj * view * vec4(q, 1.0);
			vec3 sp = eye + (q - eye) * (eye.y / max(eye.y - q.y, 1e-4));
			vec4 cs = proj * view * vec4(sp, 1.0);
			float zs = cs.z / cs.w;
			// a whisker in front of the water, keeping near-before-far among
			// themselves
			float z = zs - 3e-5 + clamp((cq.z / cq.w - zs) * 1e-3, 0.0, 2e-5) * order;
			return vec4(cq.xy, z * cq.w, cq.w);
		}
		vec3 eyeOf(mat4 view) {
			vec3 tr = view[3].xyz;
			return -vec3(dot(view[0].xyz, tr), dot(view[1].xyz, tr), dot(view[2].xyz, tr));
		}
	`,_o=`
		uniform vec4 koiA[${$t.length}], koiB[${$t.length}];
		uniform sampler2D padShadow;
		const vec3 W_SUN = vec3(${r(ut[0])}, ${r(ut[1])}, ${r(ut[2])});
		// light focused by the moving surface onto what's beneath it
		float caustic(vec2 p, float t) {
			vec2 q = p * 7.0;
			float c = 0.0;
			for (int i = 0; i < 3; i++) {
				q += vec2(sin(q.y * 0.9 + t * 0.9), cos(q.x * 0.8 - t * 0.7)) * 0.55;
				c += abs(sin(q.x) + sin(q.y));
			}
			return pow(max(1.0 - c / 3.6, 0.0), 2.5) * 4.0;
		}
		// how much a pad shades a point at height y below it
		float padShade(vec3 pw) {
			vec2 lp = pw.xz - vec2(${r(F[0])}, ${r(F[2])});
			// (the picture is for the bed; nearer the surface the shadow sits nearer the pad)
			vec2 back = W_SUN.xz / W_SUN.y * (pw.y - ${r(pe)});
			vec2 uv = (lp - back - vec2(${r(k.x0)}, ${r(k.z0)})) / vec2(${r(k.x1-k.x0)}, ${r(k.z1-k.z0)});
			return texture2D(padShadow, uv).r;
		}
		// the sun's share of the light under the water at pw
		vec3 underSun(vec3 pw, vec3 N, float sv, out vec3 sunPart) {
			vec3 sunC = mix(vec3(1.0, 0.84, 0.62) * 4.6, vec3(0.50, 0.64, 1.0) * 1.6, night);
			sunPart = sunC * sv * max(dot(N, W_SUN), 0.0);
			float ca = caustic(pw.xz - W_SUN.xz / W_SUN.y * pw.y, stime);
			return sunPart * (1.0 - 0.85 * padShade(pw)) * (0.35 + 1.25 * ca);
		}
		// the water's surface over a point under it, as the eye sees it: the
		// room's reflection (bent by the waves), the sun's glint, and the rest
		// let through from below
		uniform sampler2D reflTex;
		uniform vec2 reflSize;
		uniform float reflOn;
		uniform mat4 view;
		vec3 throughSurface(vec3 under, vec3 pw, vec3 eye) {
			vec3 S = eye + (pw - eye) * (eye.y / max(eye.y - pw.y, 1e-4));
			float e = ${r(me)};
			vec2 grad = vec2(poolHeight(S.xz + vec2(e, 0.0)) - poolHeight(S.xz - vec2(e, 0.0)), poolHeight(S.xz + vec2(0.0, e)) - poolHeight(S.xz - vec2(0.0, e))) / (2.0 * e);
			vec3 Nw = normalize(vec3(-grad.x, 1.0, -grad.y));
			vec3 V = normalize(eye - S);
			float cosV = clamp(dot(Nw, V), 0.0, 1.0);
			float R = mix(0.06, 1.0, pow(1.0 - cosV, 5.0));
			vec3 Rw = reflect(-V, Nw);
			vec3 rc;
			if (reflOn > 0.5) {
				vec3 dN = Nw - vec3(0.0, 1.0, 0.0);
				vec3 rgt = vec3(view[0].x, view[1].x, view[2].x), upv = vec3(view[0].y, view[1].y, view[2].y);
				float dist = length(eye - S);
				vec2 off = vec2(dot(dN, rgt), dot(dN, upv)) * 0.3 / (1.0 + dist * 0.2);
				rc = texture2D(reflTex, clamp(gl_FragCoord.xy / reflSize + off, vec2(0.001), vec2(0.999))).rgb;
				rc *= rc;
			} else {
				rc = studioSky(Rw) * 0.35;
			}
			float glint = pow(max(dot(Rw, STUDIO_SUN), 0.0), 900.0) * studioSun(S + vec3(0.0, 0.02, 0.0));
			vec3 glintC = mix(vec3(1.0, 0.92, 0.78) * 9.0, vec3(0.75, 0.85, 1.0) * 3.0, night);
			// a passing ring bends the light from below into bright and dark bands
			float ring = clamp(dot(grad, normalize(V.xz + vec2(1e-4))) * 12.0, -1.0, 1.0);
			float stir = clamp(length(grad) * 8.0, 0.0, 1.0);
			under *= 1.0 + 0.55 * ring * stir;
			return under * (1.0 - R) + rc * R + glintC * glint + candleGlints(Rw, S) * (0.7 + 0.8 * stir);
		}
		// what the water does to light that comes back up through it
		float showThrough(vec3 V) {
			float cosV = clamp(V.y, 0.0, 1.0);
			float Fr = 0.02 + 0.98 * pow(1.0 - cosV, 5.0);
			return 1.0 - mix(0.05, 0.93, Fr);
		}
	`,Se=(()=>{let _=[],E=[],S=[],X=[],P=(d0,n0,E0,B0,R0)=>(_.push(d0+F[0],n0,E0+F[2]),E.push(...B0),S.push(R0),_.length/3-1),H=(d0,n0,E0,B0,R0,z0,V0)=>{let k0=_.length/3;for(let F0=0;F0<=B0;F0++)for(let O0=0;O0<=R0;O0++)P(d0[0]+n0[0]*F0/B0+E0[0]*O0/R0,d0[1]+n0[1]*F0/B0+E0[1]*O0/R0,d0[2]+n0[2]*F0/B0+E0[2]*O0/R0,z0,V0);for(let F0=0;F0<B0;F0++)for(let O0=0;O0<R0;O0++){let A0=k0+F0*(R0+1)+O0;X.push(A0,A0+1,A0+R0+2,A0,A0+R0+2,A0+R0+1)}},{x0:C,x1:Q,z0:K,z1:h0}=k,w0=pe;return H([C,w0,K],[Q-C,0,0],[0,0,h0-K],8,22,[0,1,0],0),H([C,0,K],[0,0,h0-K],[0,w0,0],22,2,[1,0,0],1),H([Q,0,K],[0,0,h0-K],[0,w0,0],22,2,[-1,0,0],1),H([C,0,K],[Q-C,0,0],[0,w0,0],8,2,[0,0,1],1),H([C,0,h0],[Q-C,0,0],[0,w0,0],8,2,[0,0,-1],1),{pos:_,nrm:E,kd:S,idx:X}})(),ls=nt(t,"res/pond/gravel.jpg",{wrap:"repeat"}),hs=Object.assign({padShadow:le,gravel:()=>ls.tex,reflTex:()=>g,reflSize:()=>f,reflOn:()=>v},Tt),fs=t({vert:h(`
		precision highp float;
		uniform mat4 proj, view;
		attribute vec3 position, normal;
		attribute float kd;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kd;
		${Dt}
		${Mo}
		void main() {
			vec3 q = position;
			float h0 = poolHeight(q.xz);
			vec2 grad = vec2(poolHeight(q.xz + vec2(0.03, 0.0)) - h0, poolHeight(q.xz + vec2(0.0, 0.03)) - h0) / 0.03;
			q.xz -= grad * (-q.y) * 1.2;
			v_pos = q; v_nrm = normal; v_kd = kd; v_eye = eyeOf(view);
			gl_Position = underPos(q, proj, view, 0.0);
		}`),frag:`
		precision highp float;
		uniform float night, time;
		uniform sampler2D gravel;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kd;
		${Dt}
		${ft}
		${_o}
		float klen(int i) {
			${$t.map((_,E)=>`if (i == ${E}) return ${r(_.len)};`).join(" ")}
			return 0.45;
		}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			vec3 base;
			if (v_kd < 0.5) {
				base = texture2D(gravel, v_pos.xz * 1.9).rgb;
				base = base * base * vec3(1.25, 1.18, 1.0);
			} else {
				// the marble going down into the water, greening towards the bed
				vec2 wp = abs(N.x) > 0.5 ? v_pos.zy : v_pos.xy;
				base = vec3(0.70, 0.68, 0.62) * (0.92 + 0.12 * fract(sin(dot(floor(wp * 40.0), vec2(12.9, 78.2))) * 43758.5));
				base = mix(base, vec3(0.10, 0.13, 0.07), smoothstep(-0.05, ${r(pe)}, v_pos.y) * 0.75);
			}
			vec3 spec; float sv;
			vec3 light = studioLight(vec3(v_pos.x - W_SUN.x / W_SUN.y * v_pos.y, 0.02, v_pos.z - W_SUN.z / W_SUN.y * v_pos.y), N, V, 0.1, spec, sv);
			vec3 sunPart;
			vec3 lit = underSun(v_pos, N, sv, sunPart);
			// the koi's shadows, softer the higher they swim above the bed
			float sh = 0.0;
			for (int i = 0; i < ${$t.length}; i++) {
				vec4 A = koiA[i];
				float len = klen(i);
				vec2 F = vec2(cos(A.w), sin(A.w));
				vec2 c = A.xz - F * len * 0.42 - W_SUN.xz / W_SUN.y * (A.y - v_pos.y);
				vec2 d = v_pos.xz - c;
				float h = A.y - v_pos.y;
				float ell = pow(dot(d, F) / (len * 0.46), 2.0) + pow(dot(d, vec2(-F.y, F.x)) / (len * 0.12 + h * 0.08), 2.0);
				sh = max(sh, smoothstep(1.0, 0.25, ell) * (0.75 - h * 0.6));
			}
			lit *= 1.0 - sh;
			vec3 col = base * ((light - sunPart) * 0.9 + lit);
			// down through the water and back up again
			float path = -v_pos.y * (1.0 + 1.0 / max(V.y, 0.25));
			vec3 tr = exp(-path * vec3(0.75, 0.38, 0.48));
			col = col * tr + vec3(0.012, 0.020, 0.015) * (1.0 - tr) * mix(1.0, 0.12, night);
			col = throughSurface(col, v_pos, v_eye);
			col = studioAir(col, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,attributes:{position:Se.pos,normal:Se.nrm,kd:Se.kd},elements:new Uint16Array(Se.idx),uniforms:hs,cull:{enable:!1},depth:{enable:!0,mask:!1,func:"less"},blend:s}),vs=nt(t,"res/koi.webp"),he=null,$e=null;ne("res/koi.bin").then(_=>{if(!_.ok)throw new Error("Could not load res/koi.bin");return _.arrayBuffer()}).then(_=>{let E=new DataView(_),S=E.getUint32(4,!0),X=E.getUint32(8,!0),P=E.getFloat32(12,!0),H=16,C=new Uint16Array(_,H,S);H+=S*2;let Q=new Int16Array(_,H,S*2);H+=S*4;let K=new Uint16Array(_,H,S*2);H+=S*4;let h0=new Uint16Array(_,H,X);H+=X*2;let w0=new Int8Array(_,H,S*3);H+=S*3;let d0=new Uint8Array(_,H,S*2),n0=$t.length,E0=new Float32Array(S*3*n0),B0=new Float32Array(S*3*n0),R0=new Float32Array(S*2*n0),z0=new Float32Array(S*2*n0),V0=new Float32Array(S*4*n0);$t.forEach((O0,A0)=>{for(let b0=0;b0<S;b0++){let f0=A0*S+b0;E0[f0*3]=C[b0]/65535*1.2,E0[f0*3+1]=Q[b0*2]/32767*P,E0[f0*3+2]=Q[b0*2+1]/32767*P,B0[f0*3]=w0[b0*3]/127,B0[f0*3+1]=w0[b0*3+1]/127,B0[f0*3+2]=w0[b0*3+2]/127,R0[f0*2]=K[b0*2]/65535,R0[f0*2+1]=K[b0*2+1]/65535,z0[f0*2]=d0[b0*2]/255,z0[f0*2+1]=d0[b0*2+1]/255,V0[f0*4]=O0.len,V0[f0*4+1]=O0.kind,V0[f0*4+2]=A0,V0[f0*4+3]=0}});let k0=[],F0=[];for(let O0=0;O0<n0;O0++)for(let A0=0;A0<X;A0+=3){let b0=h0[A0],f0=h0[A0+1],ht=h0[A0+2];(Math.max(d0[b0*2],d0[f0*2],d0[ht*2])>140?F0:k0).push(b0+O0*S,f0+O0*S,ht+O0*S)}$e={body:t.elements({data:new Uint32Array(k0),type:"uint32"}),fins:t.elements({data:new Uint32Array(F0),type:"uint32"})},he=t({vert:h(`
				precision highp float;
				uniform mat4 proj, view;
				attribute vec3 loc, nrm;
				attribute vec2 uv, fin;
				attribute vec4 km;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				varying float v_kind, v_fin, v_depth, v_seed, v_u;
				${Dt}
				${Mo}
				void main() {
					float len = km.x;
					int fi = int(km.z + 0.5);
					vec4 A = koiA[0], B = koiB[0];
					for (int i = 1; i < ${$t.length}; i++) if (i == fi) { A = koiA[i]; B = koiB[i]; }
					float th = A.w, kap = B.x, ph = B.y, beat = B.z, pitch = B.w;
					vec3 f = vec3(cos(th), 0.0, sin(th));
					vec3 nl = vec3(-sin(th), 0.0, cos(th));
					// the spine bends along the arc of the turn, behind the nose
					float u = loc.x;
					float s = max(u, 0.0) * len;
					float ka = abs(kap) < 1e-3 ? 1e-3 : kap;
					vec3 P = A.xyz - f * (sin(ka * s) / ka) + nl * ((1.0 - cos(ka * s)) / ka);
					P.y = A.y - pitch * s;
					vec3 F = normalize(f * cos(ka * s) - nl * sin(ka * s) + vec3(0.0, pitch, 0.0));
					vec3 Sd = normalize(vec3(-F.z, 0.0, F.x));
					vec3 Up = cross(Sd, F);
					// the swimming wave: small at the head, wide at the tail, bigger
					// when it swims faster or turns
					// (beat: how hard the tail is working, 0.1 gliding .. 1.5 hurrying)
					float amp = (0.004 + 0.085 * u * u) * beat;
					float sway = amp * sin(ph - 6.0 * u);
					float dsway = amp * cos(ph - 6.0 * u) * -6.0;
					vec3 L = loc;
					// the fins trail and ripple a little behind the body
					sway += fin.x * 0.012 * sin(ph * 1.3 - 9.0 * u) * (0.6 + 0.4 * u);
					// the pectoral fins paddle slowly, and fold back when it hurries
					float pect = fin.y;
					float fast = smoothstep(0.8, 1.5, beat);
					// gliding, they spread and scull slowly; stroking, they fold back
					L.z += pect * (0.03 + 0.03 * (1.0 - fast)) * sin(stime * (1.6 + 0.3 * km.z) + sign(L.y) * 0.9 + km.z);
					L.y *= 1.0 - 0.35 * pect * fast;
					L.x += pect * 0.05 * fast;
					vec3 q = P + Sd * (L.y + sway) * len + Up * L.z * len - F * (L.x - u) * len;
					vec3 n = normalize(F * (nrm.x - nrm.y * dsway) + Sd * nrm.y + Up * nrm.z);
					// seen through the moving surface, it wavers a little
					float h0 = poolHeight(q.xz);
					vec2 grad = vec2(poolHeight(q.xz + vec2(0.02, 0.0)) - h0, poolHeight(q.xz + vec2(0.0, 0.02)) - h0) / 0.02;
					q.xz -= grad * (-q.y) * 1.3;
					q.y = min(q.y, -0.006);
					v_pos = q; v_nrm = n; v_uv = uv; v_kind = km.y; v_seed = km.z; v_fin = fin.x; v_depth = max(-q.y, 0.0); v_u = u;
					v_eye = eyeOf(view);
					gl_Position = underPos(q, proj, view, 1.0);
				}`),frag:`
				precision highp float;
				uniform float night, time;
				uniform sampler2D koiTex;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				varying float v_kind, v_fin, v_depth, v_seed, v_u;
				${Dt}
				${ft}
				${_o}
				void main() {
					vec3 V = normalize(v_eye - v_pos);
					vec3 N = normalize(v_nrm);
					if (dot(N, V) < 0.0) N = -N;
					vec3 t = texture2D(koiTex, v_uv).rgb;
					vec3 lin = t * t;
					// the model is a kohaku; the others are recoloured from it,
					// keeping its scales and the fine rays of its fins
					float lum = dot(lin, vec3(0.3, 0.59, 0.11));
					float red = clamp((t.r - t.g) * 2.2, 0.0, 1.0);
					float jit = fract(sin(v_seed * 91.7) * 4375.85);
					vec3 base = lin;
					float gloss = 0.55, metal = 0.35;
					if (v_kind < 0.5) {
						// yamabuki: metallic gold all over
						base = mix(vec3(1.0, 0.46, 0.05), vec3(1.0, 0.56, 0.10), jit) * (0.40 + 0.72 * lum) * mix(1.0, 0.85, red);
						gloss = 0.85; metal = 1.0;
					} else if (v_kind > 1.5) {
						// orange all over, the old patches a deeper red
						base = mix(vec3(0.98, 0.40, 0.05) * (0.45 + 0.7 * lum), vec3(0.82, 0.12, 0.03) * (0.5 + 0.6 * lum), red);
						gloss = 0.7; metal = 0.6;
					} else {
						base = mix(lin, lin * vec3(1.0, 0.92 + 0.1 * jit, 0.9), 0.5);
					}
					// the dark eyes stay dark
					base = mix(base, lin, smoothstep(0.08, 0.02, lum));
					float a = mix(1.0, 0.68, v_fin);
					vec3 spec; float sv;
					vec3 light = studioLight(vec3(v_pos.x - W_SUN.x / W_SUN.y * v_pos.y, 0.02, v_pos.z - W_SUN.z / W_SUN.y * v_pos.y), N, V, gloss, spec, sv);
					vec3 sunPart;
					vec3 lit = underSun(v_pos, N, sv, sunPart);
					float att = exp(-v_depth * 0.8);
					// sunlight through the thin fins
					float through = v_fin * max(dot(-N, W_SUN), 0.0) * sv;
					vec3 col = base * (((light - sunPart) + lit) * att + through * 0.8 * att * mix(vec3(1.0, 0.85, 0.6), vec3(0.4, 0.5, 0.8), night));
					// rounded: lit from above through the water, the belly in shade,
					// a sheen of the bright surface along the flanks
					col *= mix(0.42, 1.2, smoothstep(-0.7, 0.85, N.y));
					float rim = pow(1.0 - max(dot(N, V), 0.0), 3.0) * smoothstep(-0.2, 0.6, N.y);
					col += mix(base, vec3(1.0), 0.4) * rim * 0.35 * mix(1.0, 0.15, night) * att;
					col += spec * (0.15 + 0.85 * metal) * att * (1.0 - 0.85 * padShade(v_pos)) * (1.0 - v_fin * 0.7) * mix(vec3(1.0), base * 2.0, metal);
					// the water takes the colour away with depth
					vec3 tr = exp(-v_depth * vec3(1.9, 1.15, 1.3));
					col = col * tr + vec3(0.010, 0.016, 0.012) * (1.0 - tr) * mix(1.0, 0.1, night);
					col = throughSurface(col, v_pos, v_eye);
					col = studioAir(col, v_pos, v_eye);
					a *= mix(1.0, exp(-v_depth * 0.5), 0.5);
					gl_FragColor = vec4(sqrt(max(col, 0.0)), a);
				}`,attributes:{loc:E0,nrm:B0,uv:R0,fin:z0,km:V0},elements:t.prop("els"),uniforms:Object.assign({koiTex:()=>vs.tex,padShadow:le,reflTex:()=>g,reflSize:()=>f,reflOn:()=>v},Tt),cull:{enable:!1},colorMask:t.prop("color"),depth:{enable:!0,mask:t.prop("write"),func:t.prop("func")},blend:s}),X0.ready=!0}).catch(_=>console.error(_));let ps=()=>{he&&(he({els:$e.body,color:[!1,!1,!1,!1],write:!0,func:"less"}),he({els:$e.body,color:[!0,!0,!0,!0],write:!1,func:"lequal"}),he({els:$e.fins,color:[!0,!0,!0,!0],write:!1,func:"less"}))},Ke=(()=>{let _={cp:[],ci:[],idx:[]};for(let E=0;E<de;E++){let S=_.cp.length/3,X=5,P=7;for(let H=0;H<=X;H++)for(let C=0;C<P;C++){let Q=H/X*Math.PI,K=C/P*Math.PI*2,h0=1+.35*Math.sin(K*3+E*1.7)*Math.sin(Q*2+E);_.cp.push(Math.sin(Q)*Math.cos(K)*h0,Math.cos(Q)*.6,Math.sin(Q)*Math.sin(K)*h0*(.8+.4*(E*.37%1))),_.ci.push(E)}for(let H=0;H<X;H++)for(let C=0;C<P;C++){let Q=S+H*P+C,K=S+H*P+(C+1)%P,h0=S+(H+1)*P+C,w0=S+(H+1)*P+(C+1)%P;_.idx.push(Q,K,w0,Q,w0,h0)}}return _})(),zo=Object.assign({},N);for(let _=0;_<de;_++)zo["crumbs["+_+"]"]=()=>{let E=X0.sim.crumbs[_],S=X0.sim.t,X=E.alive&&!X0.sim.feed.petal?Math.min(1,Math.max(0,(S-E.born)/.25)):0;return[E.x+F[0],E.z+F[2],X,E.seed]};let us=t({vert:h(`
		precision highp float;
		uniform mat4 proj, view;
		uniform vec4 crumbs[${de}];
		attribute vec3 cp;
		attribute float ci;
		varying vec3 v_pos, v_nrm, v_eye;
		${Dt}
		void main() {
			int k = int(ci + 0.5);
			vec4 c = crumbs[0];
			for (int i = 1; i < ${de}; i++) if (i == k) c = crumbs[i];
			float sz = 0.016 * (0.8 + 0.5 * fract(c.w * 3.7)) * c.z;
			float h0 = poolHeight(c.xy);
			vec3 q = vec3(c.x, 0.003 + h0 * 1.4, c.y) + cp * sz;
			v_pos = q; v_nrm = normalize(cp);
			vec3 tr = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, tr), dot(view[1].xyz, tr), dot(view[2].xyz, tr));
			gl_Position = proj * view * vec4(q, 1.0);
			if (c.z < 0.01) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
		}`),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		${ft}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			vec3 spec; float sv;
			vec3 light = studioLight(v_pos, N, V, 0.2, spec, sv);
			vec3 base = vec3(0.78, 0.60, 0.36) * (0.85 + 0.3 * fract(sin(dot(floor(v_pos.xz * 900.0), vec2(12.9, 78.2))) * 43758.5));
			// wet underneath
			base *= mix(0.55, 1.0, smoothstep(-0.4, 0.4, N.y));
			vec3 col = studioAir(base * light + spec * 0.1, v_pos, v_eye);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`,attributes:{cp:Ke.cp,ci:Ke.ci},elements:new Uint32Array(Ke.idx),uniforms:zo,cull:{enable:!1}}),Qt=Ps(),ds=t({vert:h(Go),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		${ft}
		void main() {
			vec3 V = normalize(v_eye - v_pos);
			vec3 N = normalize(v_nrm);
			if (dot(N, V) < 0.0) N = -N;
			float F = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
			vec3 p = v_pos - vec3(${r(F[0])}, ${r(F[1])}, ${r(F[2])});
			float dust = fbm3(p * vec3(1.5, 3.0, 1.5)) * (v_kind > 0.5 ? 1.0 : 0.6);
			// streaks where old rain has run down the roof
			float streak = v_kind > 0.5 ? smoothstep(0.55, 0.9, vnoise3(vec3(p.z * 9.0, p.x * 0.6, 0.0))) * 0.5 : 0.0;
			vec3 c = mix(vec3(0.85, 0.80, 0.72), vec3(0.12, 0.13, 0.17), night) * (dust * 0.5 + streak);
			float a = clamp(0.05 + dust * 0.16 + streak * 0.2 + F * 0.4, 0.0, 0.6);
			vec3 col = mix(c, studioSky(reflect(-V, N)), F / max(a, 0.01) * 0.4);
			// the roof: old plain glass, grimed and streaked, dimming the sky
			if (v_kind > 0.5) {
				float grime = smoothstep(0.25, 0.75, vnoise3(vec3(p.x * 0.35, p.z * 0.28, 2.0)));
				col = mix(col, mix(vec3(0.26, 0.27, 0.24), vec3(0.03, 0.035, 0.05), night), 0.6 + 0.3 * grime);
				a = max(a, 0.48 + 0.25 * (1.0 - grime));
			}
			gl_FragColor = vec4(sqrt(max(col, 0.0)), a);
		}`,attributes:{position:Qt.pos,normal:Qt.nrm,kind:Qt.kind,uv:Qt.uv,anchor:Qt.anchor},uniforms:N,elements:new Uint32Array(Qt.idx),cull:{enable:!1},depth:{mask:!1},blend:s}),So=(()=>{let _={pos:[],idx:[]},E=300,S=24,X=12;for(let P=0;P<=X;P++){let H=-.25*G+P/X*.75*G;for(let C=0;C<=S;C++){let Q=C/S*2*G;_.pos.push(F[0]+T/2+E*Math.cos(H)*Math.cos(Q),E*Math.sin(H),F[2]+W/2+E*Math.cos(H)*Math.sin(Q))}}for(let P=0;P<X;P++)for(let H=0;H<S;H++){let C=P*(S+1)+H,Q=C+1,K=C+S+2,h0=C+S+1;_.idx.push(C,Q,K,C,K,h0)}return _})(),ms=t({vert:h(`
		precision highp float;
		uniform mat4 proj, view;
		uniform float yScale;
		attribute vec3 position;
		varying vec3 v_pos, v_eye;
		void main() {
			v_pos = position;
			vec3 t = view[3].xyz;
			v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
			v_eye.y *= yScale;
			vec3 p = position; p.y *= yScale;
			gl_Position = proj * view * vec4(p, 1.0);
		}`),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_eye;
		${ft}
		void main() {
			vec3 d = normalize(v_pos - v_eye);
			vec3 col = studioSky(d) * 1.15;
			// a far line of trees in the haze, and the meadow before them
			float az = atan(d.z, d.x);
			float tl = 0.045 + 0.05 * fbm3(vec3(az * 7.0, 0.0, 1.0)) + 0.025 * vnoise3(vec3(az * 40.0, 0.0, 2.0));
			float ground = smoothstep(0.004, -0.004, d.y);
			vec3 trees = mix(vec3(0.42, 0.46, 0.30), vec3(0.62, 0.60, 0.48), 0.5 + 0.5 * vnoise3(vec3(az * 30.0, d.y * 60.0, 0.0)));
			trees = mix(trees, studioSky(vec3(d.x, 0.02, d.z)), 0.45);
			trees = mix(trees, toNightC(trees), night);
			float inTrees = smoothstep(tl + 0.004, tl - 0.004, d.y) * (1.0 - ground);
			col = mix(col, trees * 1.15, inTrees);
			vec3 meadow = mix(vec3(0.55, 0.55, 0.32), vec3(0.75, 0.70, 0.50), vnoise3(vec3(d.xz * 80.0, 0.0)));
			meadow = mix(meadow, toNightC(meadow), night);
			col = mix(col, meadow, ground);
			gl_FragColor = vec4(sqrt(max(col, 0.0)), 1.0);
		}`.replace("${LIGHT}","").replace("void main() {",`vec3 toNightC(vec3 c) { float l = dot(c, vec3(0.3, 0.59, 0.11)); return vec3(l) * vec3(0.06, 0.08, 0.14); }
		void main() {`),attributes:{position:So.pos},elements:new Uint32Array(So.idx),cull:{enable:!1}}),$o=typeof navigator!="undefined"&&/Mobi|Android|iPhone|iPad/.test(navigator.userAgent),ke=$o?2600:6500,Ne=[];{let _=Rt(4242),E=(X,P,H)=>{let C=-X/ut[0],Q=P+ut[1]*C,K=H+ut[2]*C;return I.c.some(h0=>{let w0=Nt(K-h0);return w0!==null&&Q>I.sill&&Q<w0})},S=0;for(;Ne.length<ke&&S++<ke*60;){let X=[.2+_()*(T-.4),.1+_()*(r0+1),.2+_()*(W-.4)];Ne.length<ke*.8&&!E(...X)||Ne.push([...X,_()])}}let xs=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float time, night, pixelScale;
		attribute vec4 seed;
		varying float v_light, v_seed, v_spark;
		${Ce(t.limits.maxVertexTextureUnits>0?"baked":"analytic")}
		void main() {
			float s = seed.w * 6.2831;
			vec3 p = seed.xyz;
			// slow drifting and turning, a faint settling, never in step
			p += vec3(sin(time * 0.10 + s * 3.0) * 0.32 + sin(time * 0.043 + s * 7.0) * 0.2,
			          sin(time * 0.07 + s * 5.0) * 0.25 - 0.015 * time * (0.4 + seed.w),
			          cos(time * 0.085 + s * 2.0) * 0.32 + cos(time * 0.037 + s * 9.0) * 0.2);
			p.y = mod(p.y - 0.1, ${r(r0+1)}) + 0.1;
			p += vec3(${r(F[0])}, ${r(F[1])}, ${r(F[2])});
			float light = studioSun(p);
			// a faint few in the shade too, so the dark air is not empty
			float dim = 0.05 * (1.0 - night * 0.5);
			v_seed = seed.w;
			v_spark = step(0.955, fract(seed.w * 37.0));
			vec4 vp = view * vec4(p, 1.0);
			float dist = max(-vp.z, 0.05);
			gl_Position = proj * vp;
			float lit = max(light, dim * step(0.7, fract(seed.w * 11.0)));
			if (lit <= 0.01 || vp.z > -0.15) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); gl_PointSize = 0.0; v_light = 0.0; return; }
			float sharp = clamp(pixelScale * (0.9 + 1.3 * seed.w) / dist, 1.3, 5.0);
			// near the lens they swim out of focus into soft discs
			float blur = 1.0 - smoothstep(0.4, 2.2, dist);
			float size = sharp + blur * ${$o?"12.0":"20.0"} * (0.6 + 0.4 * seed.w);
			if (v_spark > 0.5) size = max(size, pixelScale * 9.0 / dist + 5.0);
			gl_PointSize = size;
			v_light = lit * (v_spark > 0.5 ? 1.0 : pow(sharp / size, 1.2) * (1.0 + 2.0 * blur));
		}`,frag:`
		precision highp float;
		uniform float time, night;
		varying float v_light, v_seed, v_spark;
		void main() {
			vec2 q = gl_PointCoord - 0.5;
			float r = length(q) * 2.0;
			vec3 c = mix(vec3(1.0, 0.90, 0.72), vec3(0.75, 0.84, 1.0), night);
			if (v_spark > 0.5) {
				// a glint: it flashes now and then as the fleck turns
				float ph = fract(time * (0.08 + 0.12 * v_seed) + v_seed * 13.0);
				float flash = smoothstep(0.0, 0.04, ph) * (1.0 - smoothstep(0.04, 0.22, ph));
				float core = exp(-r * r * 30.0);
				float star = exp(-abs(q.x) * 70.0) * exp(-abs(q.y) * 5.0) + exp(-abs(q.y) * 70.0) * exp(-abs(q.x) * 5.0);
				float a = (core * 1.6 + star * 0.9) * flash + core * 0.15;
				gl_FragColor = vec4(c * vec3(1.0, 0.97, 0.92) * a * v_light * 2.2, 1.0);
				return;
			}
			float point = exp(-r * r * 3.2) * (1.0 - smoothstep(0.85, 1.0, r));
			float t1 = sin(time * (0.9 + v_seed * 2.3) + v_seed * 40.0), t2 = sin(time * (0.37 + v_seed * 1.1) + v_seed * 17.0);
			float tw = 0.35 + 0.65 * smoothstep(-0.6, 1.0, t1 * t2 + 0.35 * t1);
			gl_FragColor = vec4(c * point * v_light * tw * 1.1, 1.0);
		}`,attributes:{seed:Ne},count:ke,primitive:"points",uniforms:{pixelScale:_=>_.viewportHeight*.0055},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function ko(_){let E=!!(_&&_.reflected);E||(i(),m()),ms(),v0(),E||(fs(),ps(),us()),J&&J(),m0&&m0(),$0&&wt.k>=0&&(Xs(wt.k,_0),$0()),oo&&oo(),L0(),E||(rt(),K0&&K0(),lt()),Jt(),xt.vis&&!(xt.floating&&X0.sim.feed.eaten)&&Zt(),j0(),E||(ds(),xs())}return ko.reflect=R,ko};var it=null,xt={vis:!1,model:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],ang:0,size:.09,flex:0,flutter:0,floating:!1},wt={k:-1,glow:0,at:[q0.cx+.06,q0.top-.004,q0.cz-.1],yaw:0};function Ks(t,o){wt.k=t,wt.glow=o||0}var oo=null,Ue=null,Re={a:null};function Ys(t,o,s,a){Ue?Ue(t,o,s,a):Re.a=[t,o,s,a]}function Xs(t,o){let s=Math.max(0,Math.min(1,t)),a=(1-s)*(1-s)*.6,e=-(1-s)*1.05,n=wt.yaw+(1-s)*.5,c=Math.cos(n),l=Math.sin(n),h=Math.cos(e),w=Math.sin(e);o[0]=c,o[1]=0,o[2]=-l,o[3]=0,o[4]=l*w,o[5]=h,o[6]=c*w,o[7]=0,o[8]=l*h,o[9]=-w,o[10]=c*h,o[11]=0,o[12]=wt.at[0]+F[0],o[13]=wt.at[1]+a+F[1],o[14]=wt.at[2]+F[2],o[15]=1}var Ve={k:1,close:0};function Zs(t,o){Ve.k=t,Ve.close=o||0}function Js(t){Object.assign(xt,t)}function Qs(t,o){it&&!it.feed.lure&&!it.feed.petal&&it.lure(t,o)}function tn(t,o){it&&!it.feed.petal&&(it.petal(t,o),xt.floating=!0)}function en(){it&&it.unpetal(),xt.floating=!1}function on(){let t=it&&it.feed;return{landed:!!(t&&(t.petal||t.eaten))&&xt.floating,eaten:!!(t&&t.eaten&&xt.floating)}}function sn(t,o){if(o[1]>=-1e-4)return null;let s=-t[1]/o[1],a=t[0]+o[0]*s-F[0],e=t[2]+o[2]*s-F[2];return a<k.x0||a>k.x1||e<k.z0||e>k.z1?null:[a+F[0],e+F[2]]}function nn(t,o){it&&it.drop(t-F[0],o-F[2])}function an(){return!!(it&&it.feed.on)}var Ko=[{from:[8,1.65,21.75],to:[8,1.7,21.2],at:[8,2.3,1],fov:52},{from:[8,1.65,21.1],to:[8,1.7,19.1],at:[8,2.4,1],fov:58},{from:[3.6,1.65,20.5],to:[4.6,1.75,18.7],at:[8.8,2.7,1.5],fov:58},{from:[8,1.45,11.2],to:[8,1.55,8.4],at:[8,2.5,.5],fov:46},{from:[8.9,3.9,11.4],to:[7.4,3.7,10.2],at:[8,-.2,7.2],fov:50,pond:!0},{from:[5.1,1.5,5.8],to:[5.7,1.7,4.6],at:[8,2.6,.8],fov:44},{from:[10.6,1.6,2.4],to:[9.7,1.7,3.6],at:[8,2.4,22],fov:60},{from:[2.6,1.5,19],to:[3.6,1.6,17.4],at:[8,6.8,8],fov:62}],ae=11;function cn(t){let o=Ko.length,s=Math.floor(t/ae)%o,a=t%ae/ae,e=a*a*(3-2*a),n=Ko[s],c=n.from.map((h,w)=>h+(n.to[w]-h)*e),l=Math.max(0,1-Math.min(a*ae,(1-a)*ae)/.7);return{eye:Xt(c),target:Xt(n.at),fov:n.fov,roll:0,fade:l,pond:!!n.pond&&l<.05,shot:Math.floor(t/ae)}}Y0.exports.previewCam=cn;Y0.exports.setGuide=Js;Y0.exports.setWind=Zs;Y0.exports.setFlower=Ks;Y0.exports.setRoses=Ys;Y0.exports.INTRO_PATH=es;Y0.exports.ready=()=>we.pending<=0;Y0.exports.petalLure=Qs;Y0.exports.petalLand=tn;Y0.exports.petalReset=en;Y0.exports.petalState=on;Y0.exports.STUDIO={W:T,L:W,H:r0,POOL:k,ROT:B,NICHE:o0,VENUS:P0,WIN:I,TRUSS_Z:It,GRAVE:q0};Y0.exports.poolHit=sn;Y0.exports.feedAt=nn;Y0.exports.feeding=an;Y0.exports.sunGLSL=Ce;Y0.exports.bakedSun=Gs;Y0.exports.O=F;Y0.exports.SIZE={W:T,L:W,H:r0,RIDGE:yt};Y0.exports.BOX=Ee().BOX;Y0.exports.AIR_BOX=Ee().AIR_BOX});var rs=Ye((Mn,bo)=>{var Bt=io(),co=Bt.O,{ROT:ho,GRAVE:as}=Bt.STUDIO,Me=t=>[t[0]+co[0],t[1]+co[1],t[2]+co[2]],qt=(t,o,s)=>t+(o-t)*s,bt=(t,o,s)=>[qt(t[0],o[0],s),qt(t[1],o[1],s),qt(t[2],o[2],s)],Ft=(t,o)=>[t[0]+o[0],t[1]+o[1],t[2]+o[2]],ie=(t,o)=>[t[0]-o[0],t[1]-o[1],t[2]-o[2]],ct=(t,o)=>[t[0]*o,t[1]*o,t[2]*o],At=t=>{let o=Math.hypot(t[0],t[1],t[2])||1;return ct(t,1/o)},ce=(t,o)=>[t[1]*o[2]-t[2]*o[1],t[2]*o[0]-t[0]*o[2],t[0]*o[1]-t[1]*o[0]],_e=t=>Math.max(0,Math.min(1,t)),fo=t=>t*t*(3-2*t),st=(t,o,s)=>fo(_e((s-t)/(o-t))),ge=t=>.5-.5*Math.cos(Math.PI*_e(t));function ye(t,o){let s=t.length-1,a=_e(o)*s,e=Math.min(s-1,Math.floor(a)),n=a-e,c=t[Math.max(0,e-1)],l=t[e],h=t[e+1],w=t[Math.min(s,e+2)],m=n*n,N=m*n;return[0,1,2].map(x=>.5*(2*l[x]+(-c[x]+h[x])*n+(2*c[x]-5*l[x]+4*h[x]-w[x])*m+(-c[x]+3*l[x]-3*h[x]+w[x])*N))}var W0=ho.cx,He=[W0+.06,as.top+.012,as.cz+.22],Pt={a0:Math.PI,a1:4*Math.PI,r0:4.3,r1:3.7,y0:4.4,y1:1.3},ze=(t,o,s,a)=>{let e=Pt.a0+(Pt.a1-Pt.a0)*t+(a||0),n=Pt.r0+(Pt.r1-Pt.r0)*t+(o||0),c=Pt.y0+(Pt.y1-Pt.y0)*(t*t*(3-2*t))+(s||0);return[ho.cx+Math.sin(e)*n,c,ho.cz+Math.cos(e)*n]},Be=(t,o,s,a,e,n)=>{let c=[];for(let l=0;l<=s;l++)c.push(ze(t+(o-t)*l/s,a,e,n));return c},vo=1.7,po=.8,uo=1.2,Ge=[9.1,7.42,5.5],mo=[8.6,3.3,1.95],xo=[7.9,1.6,2.5],wo=[7.95,.17,6.4],go=[W0,.25,10.4],rn=ze(.5),cs=ze(1),Z0=[{petal:Ge,eye:[7.4,4.8,3.2],at:Ge,fov:44,look:{aperture:.6}},{petal:mo,eye:[9.2,3.45,2.6],at:[7.85,3.2,1.15],fov:40,look:{aperture:.45}},{petal:xo,eye:[7,1.55,3.3],at:[8.1,1.75,1],fov:42,look:{aperture:.45}},{petal:wo,eye:[8.45,.55,7.9],at:[7.9,.25,5],fov:46,look:{aperture:.35}},{petal:go,eye:[W0,.95,7.4],at:[W0,2,22],fov:48,look:{aperture:.12}},{petal:rn,eye:ze(.5,vo,uo,po),at:ze(.47),fov:54,look:{aperture:.12}},{petal:cs,eye:[W0,2.6,26.9],at:[W0,2.6,10],fov:58,look:{aperture:.04}},{petal:He,eye:[W0+.2,1.6,23.3],at:[W0,.7,15.4],fov:50,look:{aperture:.2}}],be=[{dur:6,petal:[Ge,[9,6.6,4.6],[8.8,5.3,3.5],[8.7,4.1,2.5],mo],eye:[Z0[0].eye,[8.2,4.3,3.4],[9,3.7,3],Z0[1].eye],sway:.45,track:.7},{dur:5,petal:[mo,[8.4,2.6,2.3],[8.1,2,2.5],xo],eye:[Z0[1].eye,[8.4,2.6,3.6],Z0[2].eye],sway:.3,track:.6},{dur:6,petal:[xo,[8,1,3],[8,.45,3.9],[8,.2,5],wo],eye:[Z0[2].eye,[7.4,1,4.6],[8.1,.7,7],Z0[3].eye],sway:.2,track:.55},{dur:6,petal:[wo,[W0,.2,8],[W0,.22,9.6],go],eye:[Z0[3].eye,[9.4,.7,7],[8.9,.8,5.9],Z0[4].eye],sway:.06,track:.5,roll:.06},{dur:9,petal:[go,[W0,1.5,11.6],[W0-.3,3.4,12.9],...Be(0,.5,6)],eye:[Z0[4].eye,[W0+.6,2.2,8.6],[W0+2.4,4.2,10.6],...Be(.1,.5,5,vo,uo,po)],sway:.15,track:.8,roll:-.04},{dur:9,petal:Be(.5,1,6),eye:[...Be(.5,.92,5,vo,uo,po),[6,2.8,25.8],Z0[6].eye],sway:.12,track:.7,roll:-.04},{dur:8,petal:[cs,[W0,1.15,20.6],[W0+.02,.9,19.6],[W0+.05,.55,18.9],[He[0],.3,He[2]+.12],He],eye:[Z0[6].eye,[W0+.15,2.1,24.6],Z0[7].eye],sway:.25,track:.45}],re={delay:.8,dur:14,eye:[W0-.1,1.5,22.9],at:[W0,.68,15.6]},We={dur:5,eye:[W0+.2,1.5,20.3],at:[W0,.1,15.4],fov:54},{L:ro}=Bt.STUDIO,yo={hold:.9,back:3.6,rise:7.6,door:[W0,2.75,ro],close:[W0,2.75,ro-.38],away:[W0,2.3,ro-3.9],path:Bt.INTRO_PATH},ln=[.32,.02,.05],et=[0];be.forEach(t=>et.push(et[et.length-1]+t.dur));var lo=et[et.length-1],hn=210,fn=95,vn=.35,pn=.45,un=.7,dn=.9;function is(t,o,s,a,e,n){a=Math.max(1e-4,a);let c=2/a,l=c*e,h=1/(1+l+.48*l*l+.235*l*l*l),w=t-o,m=n*a;w=Math.max(-m,Math.min(m,w));let N=t-w,x=(s+c*w)*e,g=(s-c*x)*h,f=N+(w+x)*h;return o-t>0==f>o&&(f=o,g=(f-o)/e),[f,g]}bo.exports=function(o){o=o||{};let s=0,a=0,e=0,n=-10,c=0,l=null,h=null,w=!1,m=!1,N=0,x=!1,g=null,f=!o.intro,v=null,y=[],i=(L,Y,V)=>{window.addEventListener(L,Y,V),y.push([L,Y,V])},d=Z0[0].eye,p=L=>{let Y=0;for(let V=1;V<et.length;V++)Math.abs(et[V]-L)<Math.abs(et[Y]-L)&&(Y=V);return Y},M=L=>{(c-n>vn||h===null)&&(h=p(e)),n=c,w=!1;let Y=et[Math.max(0,h-1)],V=et[Math.min(et.length-1,h+1)];e=Math.max(Y,Math.min(V,e+L))},A=L=>{let Y=p(e);e=et[Math.max(0,Math.min(et.length-1,Y+L))],w=!0,n=c},u=null;i("wheel",L=>{if(L.target.closest&&L.target.closest(".st-ui, .cons-ui, .cons-note"))return;if(!f){L.preventDefault();return}L.preventDefault();let Y=L.deltaMode===1?L.deltaY*16:L.deltaMode===2?L.deltaY*window.innerHeight:L.deltaY;M(Y/hn)},{passive:!1}),i("pointerdown",L=>{L.target.closest&&L.target.closest("button, a, .st-ui, .cons-ui, .cons-note")||(u={ly:L.clientY,lx:L.clientX,moved:0,v:0,lt:performance.now(),t0:performance.now()})}),i("pointermove",L=>{if(!u||!f)return;let Y=L.clientX-u.lx,V=L.clientY-u.ly;u.lx=L.clientX,u.ly=L.clientY;let v0=Math.abs(V)>=Math.abs(Y)?-V:-Y;u.moved+=Math.abs(v0);let J=performance.now(),m0=v0/fn;u.v=u.v*.6+m0/Math.max(.008,(J-u.lt)/1e3)*.4,u.lt=J,u.moved>6&&M(m0)}),i("pointerup",()=>{let L=u;u=null,!(!L||!f)&&(L.moved>=10&&performance.now()-L.lt<120?M(Math.max(-1.6,Math.min(1.6,L.v*.22))):L.moved<8&&performance.now()-L.t0<450&&A(1))}),i("keydown",L=>{f&&(L.key==="ArrowDown"||L.key==="ArrowRight"||L.key==="PageDown"?A(1):(L.key==="ArrowUp"||L.key==="ArrowLeft"||L.key==="PageUp")&&A(-1))});function z(){f&&A(1)}function O(){for(let[L,Y,V]of y)window.removeEventListener(L,Y,V);y.length=0}function R(){v===null&&(v=c)}let Z=(L,Y)=>At(ie(Y,L));function i0(L){let Y=yo;if(L<Y.hold+Y.back){let _0=st(Y.hold,Y.hold+Y.back,L);return{eye:bt(Y.close,Y.away,_0),at:Y.door,fov:qt(24,50,_0),k:0}}let V=_e((L-Y.hold-Y.back)/Y.rise),v0=ge(V),J=ye(Y.path,v0),m0=st(.05,.6,v0),D0=Z(J,Y.door),$0=Z(J,Ge),M0=At(Ft(bt(D0,$0,m0),[0,Math.sin(Math.PI*m0)*.9,0]));return{eye:J,at:Ft(J,ct(M0,4)),fov:qt(50,Z0[0].fov,v0),k:V}}function s0(L,Y){let V=0;for(;V<be.length-1&&L>=et[V+1];)V++;let v0=be[V],J=_e((L-et[V])/v0.dur),m0=ge(J),D0=p(L),$0=1-st(0,.9,Math.abs(L-et[D0])),M0=ye(v0.petal,m0),_0=ie(ye(v0.petal,Math.min(1,m0+.02)),ye(v0.petal,Math.max(0,m0-.02))),b=At(ce([0,1,0],Math.hypot(_0[0],_0[2])>1e-4?_0:[1,0,0])),$=Math.sin(m0*Math.PI*(2.5+v0.dur*.25))*Math.sin(m0*Math.PI);M0=Ft(M0,ct(b,$*v0.sway)),M0[1]+=-Math.abs($)*v0.sway*.25;let D=D0===0?[Math.sin(Y*.9)*.01,0,Math.cos(Y*.7)*.01]:[Math.sin(Y*.53+D0)*.07,Math.sin(Y*.71+D0*2)*.05,Math.cos(Y*.47+D0)*.07],j=D0===Z0.length-1?0:$0;M0=Ft(M0,ct(D,j));let t0=ye(v0.eye,m0),e0=Z0[V].at,c0=Z0[V+1].at,a0=v0.track*st(0,.3,J)*(1-st(.65,1,J)),l0=bt(bt(e0,c0,st(.25,.95,J)),M0,a0),u0=qt(Z0[V].fov,Z0[V+1].fov,fo(J));if(v0.zoom){let[L0,S0,y0,N0]=v0.zoom,I0=J<S0?st(L0,S0,J):1-st(S0,y0,J);u0=qt(u0,N0,I0)}let T0=qt(Z0[V].look.aperture,Z0[V+1].look.aperture,fo(J)),x0=(v0.roll||0)*Math.sin(J*Math.PI);return{p:M0,eye:t0,at:l0,fov:u0,aperture:T0,roll:x0,idx:V,u:J,near:D0,hanging:D0===0&&$0>.98}}let U={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0,go:0,fall:0};function p0(L,Y,V,v0){let J,m0,D0;if(V)J=At([Math.sin(v0*.8)*.25,-1,.35+Math.sin(v0*1.1)*.15]),m0=At(ce(ce(J,[.4,0,-1]),J)),D0=ce(J,m0),U.prev=null,U.vel=[0,0,0],U.fresh=!0,U.spin=0,U.bank=0,U.dir=null,U.go=0,U.fall=0;else{if(U.prev&&Y>0){let y0=ie(L,U.prev);if(Math.hypot(y0[0],y0[1],y0[2])<1.5){let N0=Math.min(1,Y*6);for(let I0=0;I0<3;I0++)U.vel[I0]+=(y0[I0]/Y-U.vel[I0])*N0}else U.vel=[0,0,0]}U.prev=L.slice();let M0=U.vel,_0=Math.hypot(M0[0],M0[1],M0[2]),b=st(.2,1.2,_0),$=st(.35,1.6,-M0[1]);U.go=b,U.fall=$;let D=v0*.35+.65,j=[Math.cos(D),0,Math.sin(D)];_0>.001&&(j=bt(j,ct(M0,-1/_0),b)),U.axis=bt(U.axis,j,U.fresh?1:Math.min(1,Y*4)),J=At(U.axis);let t0=At(ie(d,L)),e0=qt(.6,.25,b);m0=[t0[0]*e0,1+t0[1]*e0,t0[2]*e0],m0=At(ie(m0,ct(J,J[0]*m0[0]+J[1]*m0[1]+J[2]*m0[2]))),D0=ce(J,m0);let c0=Math.hypot(M0[0],M0[2]),a0=0;if(c0>.15&&U.dir&&Y>0){let y0=[M0[0]/c0,M0[2]/c0];a0=(U.dir[0]*y0[1]-U.dir[1]*y0[0])/Y,U.dir=y0}else c0>.15&&(U.dir=[M0[0]/c0,M0[2]/c0]);U.bank+=(Math.max(-.8,Math.min(.8,a0*.3))*b-U.bank)*Math.min(1,Y*3),U.rock+=Y*(1.7+2.6*b),U.spin+=Y*$*6;let l0=Math.sin(U.rock)*(.42+.2*b)*(1-.5*$)+U.bank+U.spin,u0=Math.sin(U.rock*.63+1)*.32,T0=Math.cos(l0),x0=Math.sin(l0),L0=Ft(ct(m0,T0),ct(D0,x0)),S0=Ft(ct(D0,T0),ct(m0,-x0));T0=Math.cos(u0),x0=Math.sin(u0),J=Ft(ct(J,T0),ct(L0,x0)),m0=Ft(ct(L0,T0),ct(J,-x0)),D0=S0,L=Ft(L,ct(D0,Math.sin(U.rock+1.5708)*.05*(1-.5*b))),U.fresh=!1}let $0=Me(L);return[J[0],J[1],J[2],0,m0[0],m0[1],m0[2],0,D0[0],D0[1],D0[2],0,$0[0],$0[1],$0[2],1]}function g0(L,Y){let V=At(bt([L[0],L[1],L[2]],[Math.cos(.5),0,Math.sin(.5)],Y)),v0=bt([L[4],L[5],L[6]],[0,1,0],Y);v0=At(ie(v0,ct(V,V[0]*v0[0]+V[1]*v0[1]+V[2]*v0[2])));let J=ce(V,v0);return[V[0],V[1],V[2],0,v0[0],v0[1],v0[2],0,J[0],J[1],J[2],0,L[12],L[13],L[14],1]}function C0(L){let Y=l===null?0:Math.min(.1,Math.max(0,L-l));if(l=L,c=L,!w&&!u&&c-n>un){let $=p(e);Math.abs(et[$]-e)<dn&&(e=et[$])}if(w){let $=is(s,e,a,1.2,Y,1.4);s=$[0],a=$[1],Math.abs(e-s)<.001&&(s=e,a=0,w=!1)}else{let $=is(s,e,a,pn,Y,3);s=$[0],a=$[1],Math.abs(e-s)<1e-4&&Math.abs(a)<.001&&(s=e,a=0)}typeof window!="undefined"&&window.__stScroll!==void 0&&/tourdebug/.test(location.search)&&(s=e=window.__stScroll,a=0);let V=s0(s,L);s>=lo-.02&&!m&&(m=!0,N=L),s<lo-.3&&m&&(m=!1);let v0=st(.82,1,V.idx===be.length-1?V.u:0);if(m){let $=ge((L-N-re.delay)/re.dur);V.eye=bt(V.eye,re.eye,$),V.at=bt(V.at,re.at,$),!x&&L-N>3.2&&(x=!0,o.onLanded&&o.onLanded())}let J=0,m0=[0,0,0];if(v!==null&&m){let $=L-v,D=ge($/We.dur);V.eye=bt(V.eye,We.eye,D),V.at=bt(V.at,We.at,D),V.fov=qt(V.fov,We.fov,D);let j=ge(($-.8)/3.4);Bt.setFlower(j,(.26+.4*(1-st(3.2,7,$)))*st(0,.8,$))}else Bt.setFlower(-1);if(!f){g===null&&(g=L);let $=L-g,D=i0($);V.eye=D.eye,V.at=D.at,V.fov=D.fov,V.roll=0,V.aperture=.15,J=1-st(.1,1.1,$),m0=ln,D.k>=1&&(f=!0,s=e=0,a=0)}Bt.setWind(1+.8*st(.3,1,V.idx===be.length-1?V.u:0)+(m?.2*st(0,4,L-N):0),m?st(.5,3.5,L-N):0),d=V.eye;let D0=p0(V.p,Y,V.hanging,L);v0>0&&(D0=g0(D0,v0));let $0=(V.hanging?.12:.2+.55*U.go+.35*U.fall)*(1-v0),M0=(V.hanging?.05:Math.sin(U.rock*1.3)*.18+.12*U.go)*(1-v0);Bt.setGuide({vis:!0,model:D0,ang:L*.08,size:.13,flex:M0,flutter:$0,floating:!1});let _0=D0.slice(12,15),b=Me(V.eye);return{eye:b,target:Me(V.at),fov:V.fov,roll:V.roll,fade:J,shot:m?Z0.length:V.near,look:{letterbox:.55,focus:Math.max(.3,Math.hypot(b[0]-_0[0],b[1]-_0[1],b[2]-_0[2])),aperture:V.aperture,vignette:.28,exposure:1,shafts:1,fade:J,fadeColor:m0},moving:!f||v!==null&&L-v<8||Math.abs(a)>.02||Math.abs(e-s)>.01||m&&L-N<re.delay+re.dur+.5}}return{update:C0,tap:z,dispose:O,placeFlower:R,get scroll(){return s},END:lo}};bo.exports.introStart=()=>({eye:Me(yo.close),target:Me(yo.door),fov:24,roll:0})});window.__conservatoryRoom={studio:io(),tour:rs()};})();

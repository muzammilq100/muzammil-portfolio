"use strict";(()=>{var ze=(t,o)=>()=>(o||t((o={exports:{}}).exports,o),o.exports);var he=ze(($s,Je)=>{"use strict";var _t=[-90,0,0],$e=16,Se=27.5,ke=11.6;Je.exports={O:_t,W:$e,L:Se,RIDGE:ke,BOX:[_t[0]-.8,0,_t[2]-.8,_t[0]+$e+.8,ke+.5,_t[2]+Se+.8],AIR_BOX:[_t[0],0,_t[2],_t[0]+$e,ke,_t[2]+Se]}});var De=ze((qs,K0)=>{"use strict";var W=Math.PI,r=t=>(+t).toFixed(4),{O:F,W:T,L:I,RIDGE:mt}=he(),n0=7.8,Z0=.55,ot=(mt-n0)/(T/2),C={c:[3.6,8.6,13.6,18.6,23.6],hw:1.3,sill:.62,spring:4.9};C.top=C.spring+C.hw;var rt={cols:[-.65,0,.65],rowH:.71,w:.055,ring:.78},ft={rafter:I/12,rafterW:.1,purlin:1,purlinW:.07},At=[5.5,11,16.5,22],Q={cx:T/2,hw:1.12,spring:3.95,pier:1.05,face:I-1.45,back:I-.2,floor:.66,top:6.55};Q.x0=Q.cx-Q.hw-Q.pier;Q.x1=Q.cx+Q.hw+Q.pier;var $={x0:T/2-1.7,x1:T/2+1.7,z0:I-Q.face+.44,z1:13.8,curb:.5,top:.13},V={cx:T/2,cz:18.1,ri:1.66,ro:2.06,top:6,hw:.84,spring:3.4,cornice:4.85,cloth:2.6,gap:.92},Qe=[.647,.614,.279,-.154,-.322,-.191,-.012,.041,-.087,-.551,-.876,-1,.368,.414,.325,.162,.216,.345,.495,.35,.369,-.7,-.522,-.318,-.128,-.041,.581,.696,.442,.274,.394,.607,.713,-.498,-.313,.401,.802,.751,-.174,-.702,-.917,-.992,-.883,.29,.475,.557,.55,.426,.135,-.125,-.259,-.391,-.671,-.951,-.964,-.727,-.471,-.32,-.244,-.123,.166,.573,.775,.395],X0=t=>$.z1-(t-5.6)/11*($.z1-$.z0),D0={x:T/2,z:1,plinth:Q.floor+.26,height:2.75,yaw:.35,file:"res/nymph.bin"},fe=I-D0.z,Ne=[7.83,3.45,1.15],ht=(()=>{let t=[-.85,.3,.3],o=Math.hypot(t[0],t[1],t[2]);return t.map(s=>s/o)})(),ve=(()=>{let t=[-.3,.82,.48],o=Math.hypot(t[0],t[1],t[2]);return t.map(s=>s/o)})(),to=t=>{let o=1e9,s=-1e9,n=1e9,e=-1e9;for(let a of[0,T])for(let c of[0,mt+.3])for(let l of[0,I]){let h=(n0-c)/t[1],w=a+t[0]*h,m=l+t[2]*h;o=Math.min(o,w),s=Math.max(s,w),n=Math.min(n,m),e=Math.max(e,m)}return[o-.3,n-.3,s-o+.6,e-n+.6]},nt={sun:to(ht),moon:to(ve)},Ft=t=>[t[0]+F[0],t[1]+F[1],t[2]+F[2]];function me(t){(!t||t==="baked")&&(t=typeof location!="undefined"&&/analyticsun/.test(location.search)?"analytic":"baked");let o=C.c.map(n=>`
		{
			float dz = q.z - ${r(n)};
			float inside = smoothstep(-b, b, ${r(C.hw)} - abs(dz)) * smoothstep(-b, b, q.y - ${r(C.sill)});
			float arch = smoothstep(-b, b, ${r(C.hw)} - length(vec2(dz, max(q.y - ${r(C.spring)}, 0.0))));
			o = max(o, inside * arch);
		}`).join(""),s=C.c.map(n=>`
		{
			float dz = q.z - ${r(n)};
			if (abs(dz) < ${r(C.hw+.2)}) {
				${rt.cols.map(e=>`bar = max(bar, 1.0 - smoothstep(${r(rt.w*.5)} - b, ${r(rt.w*.5)} + b, abs(dz - ${r(e)})));`).join(`
				`)}
				float ry = q.y - ${r(C.sill)};
				float tr = abs(ry - ${r(rt.rowH)} * floor(ry / ${r(rt.rowH)} + 0.5));
				if (q.y < ${r(C.spring+.02)}) bar = max(bar, 1.0 - smoothstep(${r(rt.w*.5)} - b, ${r(rt.w*.5)} + b, tr));
				float rr = length(vec2(dz, q.y - ${r(C.spring)}));
				if (q.y > ${r(C.spring)}) bar = max(bar, 1.0 - smoothstep(${r(rt.w*.5)} - b, ${r(rt.w*.5)} + b, abs(rr - ${r(rt.ring)})));
				// the frame round the opening
				bar = max(bar, 1.0 - smoothstep(0.0, b + 0.03, ${r(C.hw)} - max(abs(dz), q.y > ${r(C.spring)} ? rr : 0.0)));
			}
		}`).join("");return`
	const vec3 STUDIO_SUN_D = vec3(${r(ht[0])}, ${r(ht[1])}, ${r(ht[2])});
	const vec3 STUDIO_MOON_D = vec3(${r(ve[0])}, ${r(ve[1])}, ${r(ve[2])});
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
			vec3 q = vec3(${r(T)} - p.x, p.y, ${r(I)} - p.z);
			vec3 Sq = vec3(-S.x, S.y, -S.z);
			float dxn = q.x - ${r(Q.cx)};
			if (abs(dxn) < ${r(Q.hw)} && q.z > ${r(Q.face)} && q.y > ${r(Q.floor-.05)} && q.y < ${r(Q.spring)} + sqrt(max(${r(Q.hw*Q.hw)} - dxn * dxn, 0.0))) {
				if (Sq.z >= 0.0) return 0.0;
				vec3 hf = q + Sq * ((${r(Q.face)} - q.z) / Sq.z);
				float hx = hf.x - ${r(Q.cx)};
				float edge = ${r(Q.hw)} - abs(hx);
				float topY = ${r(Q.spring)} + sqrt(max(${r(Q.hw*Q.hw)} - hx * hx, 0.0));
				float soft = 0.02 + 0.03 * (${r(Q.face)} - q.z) / Sq.z;
				float inA = smoothstep(-soft, soft, edge) * smoothstep(-soft, soft, topY - hf.y);
				if (inA <= 0.0) return 0.0;
			} else {
				vec3 bmin = vec3(${r(Q.x0-.2)}, 0.0, ${r(Q.face-.3)}), bmax = vec3(${r(Q.x1+.2)}, ${r(6.95)}, ${r(I)});
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
		float te = (${r(n0)} - p.y) / S.y;
		if (tw > 0.0 && tw < te) {
			vec3 h0 = p + S * tw;
			if (h0.z < 0.0 || h0.z > ${r(I)}) return 0.0;
			vec3 h1 = p + S * ((${r(-Z0)} - p.x) / S.x);
			vec3 hm = p + S * ((${r(-Z0*.5)} - p.x) / S.x);
			float b = 0.006 + 0.0075 * tw;
			float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
			if (open <= 0.0) return 0.0;
			float bar = studioWinBars(hm, b);
			return open * (1.0 - bar) * 0.92;
		}
		// up through the roof: the trusses' tie beams first
		vec3 he = p + S * max(te, 0.0);
		float vis = 1.0;
		if (p.y < ${r(n0)}) {
			if (he.z < 0.0 || he.z > ${r(I)} || he.x < 0.0 || he.x > ${r(T)}) return 0.0;
			float be = 0.01 + 0.008 * te;
			${At.map(n=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(he.z - ${r(n)}));`).join(`
			`)}
			// the bougainvillea along the tie beams
			${$t.filter(n=>n[0]==="truss").map(([n,e,a])=>`vis *= 1.0 - studioVineShade(he.z - ${r(e)}, he.x, he.z, ${r(a)});`).join(`
			`)}
		}
		// then the glass: the two slopes of the roof
		float tl = (${r(ot)} * p.x - p.y + ${r(n0)}) / (S.y - ${r(ot)} * S.x);
		float tr = (${r(ot)} * (${r(T)} - p.x) - p.y + ${r(n0)}) / (S.y + ${r(ot)} * S.x);
		float t = 1e9;
		vec3 h = vec3(0.0);
		vec3 hl = p + S * tl, hr = p + S * tr;
		if (tl > 0.0 && hl.x >= -0.01 && hl.x <= ${r(T/2+.01)}) { t = tl; h = hl; }
		if (tr > 0.0 && tr < t && hr.x >= ${r(T/2-.01)} && hr.x <= ${r(T+.01)}) { t = tr; h = hr; }
		if (t > 1e8) return 0.0;
		if (h.z < 0.0 || h.z > ${r(I)}) return 0.0;
		float b = 0.008 + 0.0075 * t;
		float rz = abs(h.z - ${r(ft.rafter)} * floor(h.z / ${r(ft.rafter)} + 0.5));
		float bar = 1.0 - smoothstep(${r(ft.rafterW*.5)} - b, ${r(ft.rafterW*.5)} + b, rz);
		// the ridge beam
		bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${r(T/2)})));
		// the old glass is grimy: it lets less through than the windows,
		// unevenly, so the roof's light falls in soft dim drifts and the
		// windows' patterned beams are the bright, dramatic ones
		float pat = 0.42 + 0.3 * smoothstep(-0.6, 0.6, sin(h.x * 0.9 + 1.3) * sin(h.z * 0.7 + 0.4) + 0.4 * sin(h.x * 2.1 - h.z * 1.7));
		// and the vine along the rafters and the ridge
		${$t.filter(n=>n[0]==="rafter").map(([n,e,a])=>`pat *= 1.0 - studioVineShade(h.z - ${r(e)}, h.x, h.z, ${r(a)});`).join(`
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
			float tl = (${r(ot)} * q.x - q.y + ${r(n0)}) / (S.y - ${r(ot)} * S.x);
			float tr = (${r(ot)} * (${r(T)} - q.x) - q.y + ${r(n0)}) / (S.y + ${r(ot)} * S.x);
			float t = 1e9;
			vec3 h = vec3(0.0);
			vec3 hl = q + S * tl, hr = q + S * tr;
			if (tl > -20.0 && hl.x >= -0.01 && hl.x <= ${r(T/2+.01)}) { t = tl; h = hl; }
			if (tr > -20.0 && tr < t && hr.x >= ${r(T/2-.01)} && hr.x <= ${r(T+.01)}) { t = tr; h = hr; }
			if (t < 1e8 && h.z >= 0.0 && h.z <= ${r(I)}) {
				float b = 0.03 + 0.0075 * max(t, 0.0);
				float rz = abs(h.z - ${r(ft.rafter)} * floor(h.z / ${r(ft.rafter)} + 0.5));
				float bar = 1.0 - smoothstep(${r(ft.rafterW*.5)} - b, ${r(ft.rafterW*.5)} + b, rz);
				bar = max(bar, 1.0 - smoothstep(0.14 - b, 0.14 + b, abs(h.x - ${r(T/2)})));
				float pat = 0.42 + 0.3 * smoothstep(-0.6, 0.6, sin(h.x * 0.9 + 1.3) * sin(h.z * 0.7 + 0.4) + 0.4 * sin(h.x * 2.1 - h.z * 1.7));
				${$t.filter(n=>n[0]==="rafter").map(([n,e,a])=>`pat *= 1.0 - studioVineShade(h.z - ${r(e)}, h.x, h.z, ${r(a)});`).join(`
				`)}
				pat *= 1.0 - studioVineShade(h.x - ${r(T/2)}, h.z, h.x, 0.9);
				g = (1.0 - bar) * pat * 0.78;
			}
		}
		float r = 0.0;
		if (q.x < 0.0) {
			// it leaves through a window in the left wall
			vec3 h0 = q + S * ((0.0 - q.x) / S.x);
			if (h0.z >= 0.0 && h0.z <= ${r(I)} && h0.y > 0.0) {
				vec3 h1 = q + S * ((${r(-Z0)} - q.x) / S.x);
				vec3 hm = q + S * ((${r(-Z0*.5)} - q.x) / S.x);
				float b = 0.022;
				float open = min(studioWinOpen(h0, b), studioWinOpen(h1, b));
				r = open * (1.0 - studioWinBars(hm, b)) * 0.92;
			}
		} else if (q.x <= ${r(T)} && q.z >= 0.0 && q.z <= ${r(I)}) {
			// up through the roof, past the tie beams and their vine
			float vis = 1.0;
			float be = 0.025;
			${At.map(n=>`vis *= smoothstep(0.08 - be, 0.08 + be, abs(q.z - ${r(n)}));`).join(`
			`)}
			${$t.filter(n=>n[0]==="truss").map(([n,e,a])=>`vis *= 1.0 - studioVineShade(q.z - ${r(e)}, q.x, q.z, ${r(a)});`).join(`
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
			vec3 q = vec3(${r(T)} - p.x, p.y, ${r(I)} - p.z);
			vec3 Sq = vec3(-S.x, S.y, -S.z);
			float dxn = q.x - ${r(Q.cx)};
			if (abs(dxn) < ${r(Q.hw)} && q.z > ${r(Q.face)} && q.y > ${r(Q.floor-.05)} && q.y < ${r(Q.spring)} + sqrt(max(${r(Q.hw*Q.hw)} - dxn * dxn, 0.0))) {
				if (Sq.z >= 0.0) return 0.0;
				vec3 hf = q + Sq * ((${r(Q.face)} - q.z) / Sq.z);
				float hx = hf.x - ${r(Q.cx)};
				float edge = ${r(Q.hw)} - abs(hx);
				float topY = ${r(Q.spring)} + sqrt(max(${r(Q.hw*Q.hw)} - hx * hx, 0.0));
				float soft = 0.02 + 0.03 * (${r(Q.face)} - q.z) / Sq.z;
				float inA = smoothstep(-soft, soft, edge) * smoothstep(-soft, soft, topY - hf.y);
				if (inA <= 0.0) return 0.0;
			} else {
				vec3 bmin = vec3(${r(Q.x0-.2)}, 0.0, ${r(Q.face-.3)}), bmax = vec3(${r(Q.x1+.2)}, ${r(6.95)}, ${r(I)});
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
		float hi = step(${r(n0)}, p.y);
		float v = 0.0;
		if (w < 0.999) {
			vec2 q = (p.xz + STUDIO_SUN_D.xz * ((${r(n0)} - p.y) / STUDIO_SUN_D.y) - vec2(${r(nt.sun[0])}, ${r(nt.sun[1])})) / vec2(${r(nt.sun[2])}, ${r(nt.sun[3])});
			vec4 t = texture2D(studioBake, q);
			v += (1.0 - w) * mix(t.r, t.g, hi);
		}
		if (w > 0.001) {
			vec2 q = (p.xz + STUDIO_MOON_D.xz * ((${r(n0)} - p.y) / STUDIO_MOON_D.y) - vec2(${r(nt.moon[0])}, ${r(nt.moon[1])})) / vec2(${r(nt.moon[2])}, ${r(nt.moon[3])});
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
		float an = atan(h.x - ${r(V.cx)}, h.z - ${r(V.cz)});
		float m = an - 1.5707963 * floor(an / 1.5707963 + 0.5);
		float d = R * sin(m);
		return (abs(d) < ${r(V.hw)} && h.y < ${r(V.spring)} + sqrt(max(${r(V.hw*V.hw)} - d * d, 0.0))) ? 1.0 : 0.0;
	}
	float rotShade(vec3 pw) {
		vec3 p = pw - vec3(${r(F[0])}, ${r(F[1])}, ${r(F[2])});
		vec3 S = STUDIO_SUN;
		vec2 c = p.xz - vec2(${r(V.cx)}, ${r(V.cz)});
		vec2 d = S.xz;
		float a = dot(d, d);
		float k = 1.0, t1, t2;
		// the stone (as one thin ring at the middle of the wall)
		if (rotHit(c, d, a, ${r((V.ri+V.ro)/2)}, t1, t2) > 0.0) {
			if (t1 > 0.03) { vec3 h = p + S * t1; if (h.y < ${r(V.top-.2)} && rotOpen(h, ${r((V.ri+V.ro)/2)}) < 0.5) return 0.0; }
			if (t2 > 0.03) { vec3 h = p + S * t2; if (h.y < ${r(V.top-.2)} && rotOpen(h, ${r((V.ri+V.ro)/2)}) < 0.5) return 0.0; }
		}
		// the cloth, except where it parts on the pool's line
		if (rotHit(c, d, a, ${r(V.cloth+.15)}, t1, t2) > 0.0) {
			for (int i = 0; i < 2; i++) {
				float t = i == 0 ? t1 : t2;
				if (t > 0.08) {
					vec3 h = p + S * t;
					float an = atan(h.x - ${r(V.cx)}, h.z - ${r(V.cz)});
					float lat = ${r(V.cloth+.15)} * abs(sin(an));
					bool gap = lat < ${r(V.gap)} && h.y < ${r(V.top)};
					if (h.y < ${r(V.top)} && !gap) k *= 0.5;
				}
			}
		}
		return k;
	}
	float studioSun(vec3 pw) { float s0 = studioSun0(pw); return s0 > 0.0 ? s0 * rotShade(pw) : 0.0; }`}function kt(t){let o=t>>>0;return()=>{o=o+1831565813>>>0;let s=o;return s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61),((s^s>>>14)>>>0)/4294967296}}var q={FLOOR:0,PLASTER:1,STONE:2,STEEL:3,WATER:4,PAD:5,PETAL:6,STAMEN:7,MARBLE:8,WOOD:9,GESSO:10,PAINT:11,POT:12,SHADE:13,BULB:14,NICHE:15,JAR:16,SOIL:17,BRUSH:18,TRAVERTINE:19,CLOTH:20,WMARBLE:21,REDDOOR:22,REDPANEL:23,DARKWOOD:24,BRASS:25,BRACT:26,KEYHOLE:27,ROCK:28,OLDSTONE:29,HOLLOW:30,FLAME:31,CFLAME:32};function Ae(){let t={pos:[],nrm:[],kind:[],uv:[],anchor:[],idx:[]};return t.float=null,t.v=(o,s,n,e)=>(t.pos.push(o[0]+F[0],o[1]+F[1],o[2]+F[2]),t.nrm.push(s[0],s[1],s[2]),t.kind.push(n),t.uv.push(e?e[0]:0,e?e[1]:0),t.float?t.anchor.push(t.float[0]+F[0],t.float[1]+F[2],t.float[2],1):t.anchor.push(0,0,0,0),t.pos.length/3-1),t.quad=(o,s,n,e,a,c,l)=>{let h=t.v(o,a,c,l&&l[0]),w=t.v(s,a,c,l&&l[1]),m=t.v(n,a,c,l&&l[2]),S=t.v(e,a,c,l&&l[3]);t.idx.push(h,w,m,h,m,S)},t.box=(o,s,n,e,a,c,l,h)=>{let w=h||{};w.top||t.quad([o,a,n],[o,a,c],[e,a,c],[e,a,n],[0,1,0],l,[[o,n],[o,c],[e,c],[e,n]]),w.bottom||t.quad([o,s,n],[e,s,n],[e,s,c],[o,s,c],[0,-1,0],l,[[o,n],[e,n],[e,c],[o,c]]),w.x0||t.quad([o,s,n],[o,s,c],[o,a,c],[o,a,n],[-1,0,0],l,[[n,s],[c,s],[c,a],[n,a]]),w.x1||t.quad([e,s,c],[e,s,n],[e,a,n],[e,a,c],[1,0,0],l,[[c,s],[n,s],[n,a],[c,a]]),w.z0||t.quad([e,s,n],[o,s,n],[o,a,n],[e,a,n],[0,0,-1],l,[[e,s],[o,s],[o,a],[e,a]]),w.z1||t.quad([o,s,c],[e,s,c],[e,a,c],[o,a,c],[0,0,1],l,[[o,s],[e,s],[e,a],[o,a]])},t.tbox=(o,s,n,e,a,c,l,h,w)=>{let m=Math.cos(n),S=Math.sin(n),x=Math.cos(w||0),g=Math.sin(w||0),f=(i,d,p)=>{let y=a+(d-a)*x-p*g*0,k=p+(d-a)*g,u=a+(d-a)*x;return[o+m*i+S*k,u,s-S*i+m*k]},v=i=>{let d=i[1]*x-i[2]*g,p=i[2]*x+i[1]*g;return[m*i[0]+S*p,d,-S*i[0]+m*p]},b=(i,d,p,y,k)=>t.quad(f(...i),f(...d),f(...p),f(...y),v(k),h,[[i[0]+i[2],i[1]],[d[0]+d[2],d[1]],[p[0]+p[2],p[1]],[y[0]+y[2],y[1]]]);b([-e,c,-l],[-e,c,l],[e,c,l],[e,c,-l],[0,1,0]),b([-e,a,-l],[e,a,-l],[e,a,l],[-e,a,l],[0,-1,0]),b([-e,a,-l],[-e,a,l],[-e,c,l],[-e,c,-l],[-1,0,0]),b([e,a,l],[e,a,-l],[e,c,-l],[e,c,l],[1,0,0]),b([e,a,-l],[-e,a,-l],[-e,c,-l],[e,c,-l],[0,0,-1]),b([-e,a,l],[e,a,l],[e,c,l],[-e,c,l],[0,0,1])},t.beam=(o,s,n,e,a)=>{let c=[s[0]-o[0],s[1]-o[1],s[2]-o[2]],l=Math.hypot(...c),h=c.map(f=>f/l),w=a||(Math.abs(h[1])>.9?[1,0,0]:[0,1,0]),m=[h[1]*w[2]-h[2]*w[1],h[2]*w[0]-h[0]*w[2],h[0]*w[1]-h[1]*w[0]],S=Math.hypot(...m);m=m.map(f=>f/S),w=[m[1]*h[2]-m[2]*h[1],m[2]*h[0]-m[0]*h[2],m[0]*h[1]-m[1]*h[0]];let x=(f,v,b)=>[f[0]+m[0]*n*v+w[0]*n*b,f[1]+m[1]*n*v+w[1]*n*b,f[2]+m[2]*n*v+w[2]*n*b],g=[[[1,-1],[1,1],m],[[1,1],[-1,1],w],[[-1,1],[-1,-1],m.map(f=>-f)],[[-1,-1],[1,-1],w.map(f=>-f)]];for(let[f,v,b]of g)t.quad(x(o,...f),x(s,...f),x(s,...v),x(o,...v),b,e,[[0,0],[l,0],[l,1],[0,1]])},t.lathe=(o,s,n,e,a)=>{let c=a||32,l=n.map(([h,w],m)=>{let S=n[Math.max(0,m-1)],x=n[Math.min(n.length-1,m+1)],g=x[0]-S[0],f=x[1]-S[1],v=Math.hypot(g,f)||1,b=f/v,i=-g/v,d=[];for(let p=0;p<=c;p++){let y=p/c*2*W;d.push(t.v([o+Math.cos(y)*h,w,s+Math.sin(y)*h],[Math.cos(y)*b,i,Math.sin(y)*b],e,[p/c*h*2*W,w]))}return d});for(let h=0;h<l.length-1;h++)for(let w=0;w<c;w++){let m=l[h][w],S=l[h][w+1],x=l[h+1][w+1],g=l[h+1][w];t.idx.push(m,g,x,m,x,S)}},t}var gt=t=>Math.abs(t)>=C.hw?null:C.spring+Math.sqrt(C.hw*C.hw-t*t),$t=[["truss",At[0],3.1],["truss",At[1],5.4],["truss",At[2],7.7],["truss",At[3],2.2],["rafter",ft.rafter*2,1.7],["rafter",ft.rafter*5,8.5],["rafter",ft.rafter*8,13.6],["rafter",ft.rafter*10,17],["rafter",ft.rafter*11,6.1],["ridge",T/2,.9],...[.75,...C.c.slice(1).map((t,o)=>(t+C.c[o])/2),I-.75].map((t,o)=>["wall",t,2.3+o*4.1])],te=(t,o)=>.5*Math.sin(t*1.9+o)+.5*Math.sin(t*.77+o*1.3)>-.25,ro=t=>t<T/2?n0+ot*t:n0+ot*(T-t);function xe(t,o,s){return t==="wall"?[.12,s,o]:t==="truss"?[s,n0-.12,o]:t==="rafter"?[s,ro(s)-.2,o]:[o,mt-.32,s]}var we=t=>t==="ridge"?[.4,I-.4]:t==="wall"?[.15,n0-.05]:[.35,T-.35],W0={w:1.95,spring:3.35,r:2.3,frame:.23,zl:I-.05,zf:I-.13};W0.c=W0.r-W0.w/2;var dt=(t,o)=>{let s=W0.r+(o||0),n=Math.abs(t)+W0.c;return n>=s?W0.spring:W0.spring+Math.sqrt(s*s-n*n)};W0.top=dt(0);function No(t){let o=T/2,{w:s,frame:n,zl:e,zf:a}=W0,c=s/2,l=c+n,h=.02;for(let u=-l;u<l-1e-6;u+=h){let M=u,O=Math.min(l,u+h),D=(M+O)/2,K=dt(M,n),s0=dt(O,n),t0=0,P=0;Math.abs(D)<c&&(t0=dt(M),P=dt(O)),Math.abs(D)>=c;{let h0=Math.abs(D)<c?t0:0,d0=Math.abs(D)<c?P:0;t.quad([o+O,d0,a],[o+M,h0,a],[o+M,K,a],[o+O,s0,a],[0,0,-1],q.DARKWOOD,[[O,d0],[M,h0],[M,K],[O,s0]])}t.quad([o+M,K,a],[o+M,K,I],[o+O,s0,I],[o+O,s0,a],[0,1,0],q.DARKWOOD,[[M,0],[M,1],[O,1],[O,0]]),Math.abs(D)<c&&t.quad([o+M,t0,a],[o+O,P,a],[o+O,P,e],[o+M,t0,e],[0,-1,0],q.DARKWOOD,[[M,0],[O,0],[O,1],[M,1]])}for(let u of[-1,1])t.quad([o+u*l,0,a],[o+u*l,0,I],[o+u*l,W0.spring,I],[o+u*l,W0.spring,a],[u,0,0],q.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.quad([o+u*c,0,a],[o+u*c,W0.spring,a],[o+u*c,W0.spring,e],[o+u*c,0,e],[-u,0,0],q.DARKWOOD,[[0,0],[1,0],[1,1],[0,1]]),t.box(o+u*(c+n/2)-n/2-.04,0,a-.04,o+u*(c+n/2)+n/2+.04,.42,I,q.DARKWOOD);let w=40;for(let u=0;u<w;u++){let M=-c+2*c*u/w,O=-c+2*c*(u+1)/w;t.beam([o+M,dt(M)+.03,a-.015],[o+O,dt(O)+.03,a-.015],.018,q.DARKWOOD)}for(let u of[-1,1])t.beam([o+u*(c+.03),.42,a-.015],[o+u*(c+.03),W0.spring+.02,a-.015],.018,q.DARKWOOD);for(let u=-c;u<c-1e-6;u+=h){let M=u,O=Math.min(c,u+h),D=dt(M),K=dt(O);t.quad([o+O,0,e],[o+M,0,e],[o+M,D,e],[o+O,K,e],[0,0,-1],q.REDDOOR,[[O,0],[M,0],[M,D],[O,K]])}let m=c-.2,S=.3,x=W0.spring+.07,g=e-.006,f=.05,v=(u,M,O,D)=>t.box(o+u,M,g-.018,o+O,D,g,q.REDDOOR);v(-m,S,m,S+f),v(-m,x-f,m,x),v(-m,S,-m+f,x),v(m-f,S,m,x),t.box(o-m+.14,S+.14,g-.022,o+m-.14,x-.14,g,q.REDDOOR);let b=W0.spring+.31;v(-c+.08,x+.06,c-.08,x+.12);for(let u of[-1,1]){let O=c-.17;for(let D=.07;D<O-1e-6;D+=h){let K=D,s0=Math.min(O,D+h),t0=dt(K,-.18),P=dt(s0,-.18);if(t0<=b+.02&&P<=b+.02)continue;let h0=F0=>o+u*F0,d0=[[h0(K),b,g+.004],[h0(s0),b,g+.004],[h0(s0),Math.max(b,P),g+.004],[h0(K),Math.max(b,t0),g+.004]];u>0?t.quad(d0[1],d0[0],d0[3],d0[2],[0,0,-1],q.REDPANEL,[[s0,0],[K,0],[K,1],[s0,1]]):t.quad(...d0,[0,0,-1],q.REDPANEL,[[K,0],[s0,0],[s0,1],[K,1]])}}t.beam([o,b-.02,g-.008],[o,dt(0,-.12),g-.008],.03,q.REDDOOR),t.beam([o-c+.1,b-.01,g-.006],[o+c-.1,b-.01,g-.006],.014,q.REDDOOR);let i=o-c+.15,d=1.06,p=g-.03;t.box(i-.034,d-.2,p-.008,i+.034,d+.17,p+.012,q.BRASS);for(let[u,M]of[[d+.2,.026],[d+.235,.016],[d-.23,.026],[d-.265,.016]])t.lathe(i,p-.002,[[0,u-M],[M,u-M*.4],[M,u+M*.4],[0,u+M]],q.BRASS,12);for(let u=0;u<6;u++){let M=d-.17+u*.065;for(let O of[-1,1])t.beam([i+O*.034,M,p-.01],[i+O*.041,M+.03,p-.01],.006,q.BRASS)}let y=p-.008,k=(u,M,O)=>{for(let D=0;D<O;D++){let K=W*D/O,s0=W*(D+1)/O;for(let t0=0;t0<16;t0++){let P=2*W*t0/16,h0=2*W*(t0+1)/16,d0=(X,v0)=>[i+M*Math.sin(X)*Math.cos(v0),d+.03+M*Math.sin(X)*Math.sin(v0),u-M*Math.cos(X)],F0=(X,v0)=>[Math.sin(X)*Math.cos(v0),Math.sin(X)*Math.sin(v0),-Math.cos(X)],E=t.v(d0(K,P),F0(K,P),q.BRASS),H=t.v(d0(K,h0),F0(K,h0),q.BRASS),U=t.v(d0(s0,h0),F0(s0,h0),q.BRASS),l0=t.v(d0(s0,P),F0(s0,P),q.BRASS);t.idx.push(E,H,U,E,U,l0)}}};t.beam([i,d+.03,y],[i,d+.03,y-.05],.011,q.BRASS),k(y-.075,.034,10),t.box(i-.008,d-.1,p-.0125,i+.008,d-.06,p-.0085,q.KEYHOLE)}var eo=[0,W/2,W,-W/2],qe=t=>{let o=W/2;return t-Math.round(t/o)*o},Zt=t=>{let o=Math.abs(t);return V.top-.55*Math.pow(Math.max(0,Math.sin(o*3+.6)),6)-.25*Math.pow(Math.max(0,Math.sin(o*7+1.9)),8)-.06*Math.sin(o*23)},T0={cx:T/2,cz:V.cz,hx:.57,hz:1.19,top:.19,file:"res/studio/grave.bin",tex:"res/studio/grave.webp"},Ss=[[T0.cx-.19,T0.cz-.36,.16],[T0.cx-.05,T0.cz-.43,.25],[T0.cx+.24,T0.cz-.38,.1]];function qo(t){let{cx:o,cz:s,ri:n,ro:e,hw:a,spring:c}=V,l=q.OLDSTONE,h=(x,g,f)=>[o+Math.sin(x)*g,f,s+Math.cos(x)*g],w=x=>c+Math.sqrt(Math.max(0,a*a-x*x)),m=(x,g)=>{let f=[];for(let i=0;i<=160;i++)f.push(-W+2*W*i/160);let b=Math.asin(Math.min(.999,a/x));for(let i of eo)for(let d of[-1,1])f.push(((i+d*b+W)%(2*W)+2*W)%(2*W)-W);f.sort((i,d)=>i-d);for(let i=0;i<f.length-1;i++){let d=f[i],p=f[i+1];if(p-d<1e-5)continue;let y=qe((d+p)/2),k=Math.abs(x*Math.sin(y))<a&&Math.abs(y)<W/4,u=E=>k?w(x*Math.sin(qe(E))):0,M=[Math.sin(d)*g,0,Math.cos(d)*g],O=[Math.sin(p)*g,0,Math.cos(p)*g],D=h(d,x,u(d)),K=h(p,x,u(p)),s0=h(p,x,Zt(p)),t0=h(d,x,Zt(d)),P=t.v(D,M,l,[x*d,D[1]]),h0=t.v(K,O,l,[x*p,K[1]]),d0=t.v(s0,O,l,[x*p,s0[1]]),F0=t.v(t0,M,l,[x*d,t0[1]]);if(g>0?t.idx.push(P,h0,d0,P,d0,F0):t.idx.push(P,d0,h0,P,F0,d0),g>0){let E=h(d,n,Zt(d)),H=h(p,n,Zt(p));t.quad(t0,s0,H,E,[0,1,0],l,[[t0[0],t0[2]],[s0[0],s0[2]],[H[0],H[2]],[E[0],E[2]]])}}};m(e,1),m(n,-1);for(let x of eo){let g=[Math.sin(x),0,Math.cos(x)],f=[Math.cos(x),0,-Math.sin(x)],v=(d,p,y)=>[o+g[0]*Math.sqrt(p*p-d*d)+f[0]*d,y,s+g[2]*Math.sqrt(p*p-d*d)+f[2]*d];for(let d of[-1,1]){let p=d*a,y=[-f[0]*d,0,-f[2]*d];t.quad(v(p,n,0),v(p,e,0),v(p,e,c),v(p,n,c),y,l,[[0,0],[1,0],[1,1],[0,1]])}let b=20;for(let d=0;d<b;d++){let p=-a+2*a*d/b,y=-a+2*a*(d+1)/b,k=(p+y)/2,u=w(k),M=[-(f[0]*k),-(u-c),-(f[2]*k)],O=Math.hypot(...M),D=M.map(K=>K/O);t.quad(v(p,n,w(p)),v(y,n,w(y)),v(y,e,w(y)),v(p,e,w(p)),D,l,[[p,0],[y,0],[y,1],[p,1]])}let i=e+.05;for(let d=0;d<24;d++){let p=W*d/24,y=W*(d+1)/24,k=a+.08,u=M=>{let O=Math.cos(M)*k;return v(Math.max(-i+.01,Math.min(i-.01,O)),i,c+Math.sin(M)*k)};t.beam(u(p),u(y),.06,l)}for(let d of[-1,1]){let p=v(d*(a+.1),e+.06,c-.15),y=v(d*(a+.1),e+.06,c);t.beam(p,y,.14,l)}t.beam(v(0,e+.07,c+a-.05),v(0,e+.07,c+a+.3),.13,l)}let S=(x,g,f,v,b)=>{for(let d=0;d<96;d++){let p=-W+2*W*d/96,y=-W+2*W*(d+1)/96,k=qe((p+y)/2);if(b&&Math.abs(g*Math.sin(k))<a+.05&&Math.abs(k)<W/4)continue;let u=[Math.sin(p),0,Math.cos(p)],M=[Math.sin(y),0,Math.cos(y)],O=t.v(h(p,g,f),u,l,[g*p,f]),D=t.v(h(y,g,f),M,l,[g*y,f]),K=t.v(h(y,g,v),M,l,[g*y,v]),s0=t.v(h(p,g,v),u,l,[g*p,v]);t.idx.push(O,D,K,O,K,s0),t.quad(h(p,g,v),h(y,g,v),h(y,x,v),h(p,x,v),[0,1,0],l,[[p,0],[y,0],[y,1],[p,1]]),t.quad(h(p,x,f),h(y,x,f),h(y,g,f),h(p,g,f),[0,-1,0],l,[[p,0],[y,0],[y,1],[p,1]])}};S(e-.02,e+.12,0,.38,!0),S(e-.02,e+.1,V.cornice-.12,V.cornice,!1),S(e-.02,e+.2,V.cornice,V.cornice+.2,!1);for(let x of[W/4,3*W/4,-W/4,-3*W/4]){let g=.3/e;for(let[f,v,b,i]of[[e,e+.07,.38,V.cornice-.12]]){let d=x-g,p=x+g,y=[Math.sin(x),0,Math.cos(x)];t.quad(h(d,v,b),h(p,v,b),h(p,v,i),h(d,v,i),y,l,[[d*v,b],[p*v,b],[p*v,i],[d*v,i]]);for(let[k,u]of[[d,-1],[p,1]]){let M=[Math.cos(k)*u,0,-Math.sin(k)*u];t.quad(h(k,f,b),h(k,v,b),h(k,v,i),h(k,f,i),M,l,[[0,b],[1,b],[1,i],[0,i]])}}}}function Oo(){let{cx:t,cz:o,ro:s}=V,n=[],e=[],a=[],c=[],l=[],h=f=>{let v=(f/(2*W)*4%1+1)%1*64,b=Math.floor(v),i=v-b;return Qe[b%64]*(1-i)+Qe[(b+1)%64]*i},w=kt(9090),m=Math.asin(Math.min(.999,V.gap/V.cloth)),S=[[m,W-m,0],[-W+m,-m,0],[-m-.02,m+.02,1],[W-m-.02,W+m+.02,1]],x=46,g=8;for(let[f,v,b]of S){let i=Math.round((v-f)*V.cloth/.035),d=n.length/3,p=[],y=[];for(let u=0;u<=i;u++)y.push(.2+.25*w());for(let u=0;u<=(b?x:x+g);u++){let M=[];for(let O=0;O<=i;O++){let D=f+(v-f)*O/i,K=Zt(D)+.04,s0=Math.min(D-f,v-D)*V.cloth,t0,P;if(u===0)t0=V.ri+.12,P=K+.03;else if(u===1)t0=s+.08,P=K+.07;else if(u<=x){let h0=(u-1)/(x-1);if(P=(K+.02)*(1-h0),b){let X=Math.abs(Math.sin(D))*V.cloth/V.gap,v0=V.spring+V.hw+.32+.35*(1-Math.min(1,X));P=K+.02-(K+.02-v0)*h0}let d0=.38*Math.pow(h0,2)+.1*Math.sqrt(h0)+.26,F0=(.05+.34*Math.pow(h0,1.3))*h(D),E=(.02+.07*h0)*Math.sin(D*V.cloth/.16+2*h(D*1.7)),H=.03*(1-h0)*Math.sin(D*V.cloth/.055)+.015*Math.sin(D*V.cloth/.031+h0*3),U=E+H,l0=.12*Math.exp(-s0/.25)*Math.sin(s0*18)*h0;t0=Math.max(s+.26,s+d0+F0+U+l0),b&&(t0=s+.26+.06*Math.sin(D*V.cloth/.09)+.05*h0)}else{let h0=(u-x)/g;t0=s+.74+.39*h(D)+h0*y[O]*(.7+.3*(1+h(D+.3))),P=.012+.05*Math.max(0,Math.sin(h0*7+D*23))*(1-h0)+.03*(1-h0)}M.push([t+Math.sin(D)*t0,P,o+Math.cos(D)*t0])}p.push(M)}for(let u=0;u<p.length;u++)for(let M=0;M<=i;M++){let O=p[u][M],D=p[u][Math.max(M-1,0)],K=p[u][Math.min(M+1,i)],s0=p[Math.max(u-1,0)][M],t0=p[Math.min(u+1,p.length-1)][M],P=[K[0]-D[0],K[1]-D[1],K[2]-D[2]],h0=[t0[0]-s0[0],t0[1]-s0[1],t0[2]-s0[2]],d0=[P[1]*h0[2]-P[2]*h0[1],P[2]*h0[0]-P[0]*h0[2],P[0]*h0[1]-P[1]*h0[0]],F0=Math.hypot(...d0)||1;d0=d0.map(H=>H/F0),n.push(O[0]+F[0],O[1]+F[1],O[2]+F[2]),e.push(...d0),a.push((f+(v-f)*M/i)*V.cloth,u/(x+g));let E=u<=1?0:u<=x?(u-1)/(x-1):1-(u-x)/g*.9;l.push(u<=x?Math.pow(E,1.3)*(1-.6*Math.pow(E,6)):.4*E*E)}let k=i+1;for(let u=0;u<p.length-1;u++)for(let M=0;M<i;M++){let O=d+u*k+M;c.push(O,O+1,O+k+1,O,O+k+1,O+k)}}for(let f of[W/2,-W/2]){let v=n.length/3,b=40,i=30,d=[Math.sin(f),0,Math.cos(f)],p=[Math.cos(f),0,-Math.sin(f)];for(let y=0;y<=i;y++)for(let k=0;k<=b;k++){let u=-V.hw+2*V.hw*k/b,M=y/i,D=(V.spring+Math.sqrt(Math.max(0,V.hw*V.hw-u*u))-.02)*(1-M)+.01,K=(V.ri+V.ro)/2+.06*Math.sin(u*34)*(.3+M)+.12*M*M,s0=[t+d[0]*K+p[0]*u,D,o+d[2]*K+p[2]*u];n.push(s0[0]+F[0],s0[1]+F[1],s0[2]+F[2]),l.push(.6*M);let t0=[d[0]+p[0]*Math.cos(u*34)*.6,.1,d[2]+p[2]*Math.cos(u*34)*.6],P=Math.hypot(...t0);e.push(t0[0]/P,t0[1]/P,t0[2]/P),a.push(u,M)}for(let y=0;y<i;y++)for(let k=0;k<b;k++){let u=v+y*(b+1)+k;c.push(u,u+1,u+b+2,u,u+b+2,u+b+1)}}return{pos:n,nrm:e,uv:a,idx:c,sw:l}}function Ao(t,o){let s=t.pos.length/3;for(let n=0;n<o.pos.length;n+=3){let e=o.pos[n]-F[0],a=o.pos[n+2]-F[2];t.pos.push(T-e+F[0],o.pos[n+1],I-a+F[2]),t.nrm.push(-o.nrm[n],o.nrm[n+1],-o.nrm[n+2])}t.kind.push(...o.kind),t.uv.push(...o.uv),t.anchor.push(...o.anchor);for(let n of o.idx)t.idx.push(n+s)}function To(t){let{cx:o,hw:s,spring:n,pier:e,face:a,back:c,floor:l,x0:h,x1:w}=Q,m=q.OLDSTONE,S=q.HOLLOW,x=c-s,g=5.35,f=b=>n+Math.sqrt(Math.max(0,s*s-(b-o)*(b-o)));t.box(h-.1,0,a-.28,w+.1,l-.06,I,m,{bottom:!0}),t.box(h-.14,l-.06,a-.34,w+.14,l,I,m),t.box(o-.95,$.top,a-.62,o+.95,$.top+.15,a-.28,m,{bottom:!0});for(let[b,i]of[[h,o-s],[o+s,w]]){t.box(b,l,a+.03,i,g,I,S,{bottom:!0});let d=b<o?b:i,p=b<o?i:b,y=b<o?1:-1,k=11,u=(g-.38-l)/k;for(let M=0;M<k;M++){let O=l+M*u+.018,D=l+(M+1)*u-.018,K=M%2===0,s0=d+y*.01,t0=K?p-y*.01:d+y*(e*.66);if(t.box(Math.min(s0,t0),O,a-.06,Math.max(s0,t0),D,a+.03,m,{z1:!0}),!K){let h0=d+y*(e*.66+.025),d0=p-y*.01;t.box(Math.min(h0,d0),O,a-.02,Math.max(h0,d0),D,a+.03,m,{z1:!0})}let P=d-y*.035;t.box(Math.min(P,d+y*.02),O,a-.035,Math.max(P,d+y*.02),D,K?a+.9:a+.55,m)}t.box(b-.05,g-.38,a-.07,i+.05,g-.3,I,m),t.box(b-.02,g-.3,a-.03,i+.02,g-.12,I,m),t.box(b-.09,g-.12,a-.11,i+.09,g,I,m)}let v=.03;for(let b=o-s;b<o+s-1e-6;b+=v){let i=b,d=Math.min(o+s,b+v);t.quad([d,f(d),a+.02],[i,f(i),a+.02],[i,g,a+.02],[d,g,a+.02],[0,0,-1],m,[[d,f(d)],[i,f(i)],[i,g],[d,g]])}{let i=s+.07;for(let p=0;p<36;p++){let y=W*p/36,k=W*(p+1)/36;t.beam([o+Math.cos(y)*i,n+Math.sin(y)*i,a-.02],[o+Math.cos(k)*i,n+Math.sin(k)*i,a-.02],.065,m,[0,0,1])}for(let p of[-1,1])t.box(o+p*s-.16,n-.14,a-.06,o+p*s+.16,n,a+.4,m);let d=n+s;t.quad([o-.17,d+.32,a-.08],[o+.17,d+.32,a-.08],[o+.11,d-.06,a-.08],[o-.11,d-.06,a-.08],[0,0,-1],m,[[0,1],[1,1],[1,0],[0,0]]);for(let p of[-1,1])t.quad([o+p*.11,d-.06,a-.08],[o+p*.17,d+.32,a-.08],[o+p*.17,d+.32,a+.02],[o+p*.11,d-.06,a+.02],[p,-.15,0],m,[[0,0],[1,0],[1,1],[0,1]]);t.quad([o-.11,d-.06,a-.08],[o+.11,d-.06,a-.08],[o+.11,d-.06,a+.02],[o-.11,d-.06,a+.02],[0,-1,0],m,[[0,0],[1,0],[1,1],[0,1]])}for(let b of[-1,1]){let i=o+b*s;t.quad([i,l,a],[i,l,x],[i,n,x],[i,n,a],[-b,0,0],S,[[a,l],[x,l],[x,n],[a,n]])}{for(let p=0;p<40;p++){let y=W*p/40,k=W*(p+1)/40,u=(O,D)=>[o+Math.cos(O)*s,n+Math.sin(O)*s,D],M=[-Math.cos((y+k)/2),-Math.sin((y+k)/2),0];t.quad(u(y,a),u(k,a),u(k,x),u(y,x),M,S,[[s*y+0,a],[s*k,a],[s*k,x],[s*y,x]])}for(let p=0;p<40;p++){let y=W*p/40,k=W*(p+1)/40,u=(t0,P)=>[o+Math.cos(t0)*s,P,x+Math.sin(t0)*s],M=t0=>[-Math.cos(t0),0,-Math.sin(t0)],O=t.v(u(y,l),M(y),S,[s*y,l]),D=t.v(u(k,l),M(k),S,[s*k,l]),K=t.v(u(k,n),M(k),S,[s*k,n]),s0=t.v(u(y,n),M(y),S,[s*y,n]);t.idx.push(O,D,K,O,K,s0)}let d=[];for(let p=0;p<=14;p++){let y=W/2*p/14,k=[];for(let u=0;u<=40;u++){let M=W*u/40,O=[Math.cos(M)*Math.cos(y),Math.sin(y),Math.sin(M)*Math.cos(y)];k.push(t.v([o+s*O[0],n+s*O[1],x+s*O[2]],O.map(D=>-D),S,[s*M,n+s*y]))}d.push(k)}for(let p=0;p<14;p++)for(let y=0;y<40;y++){let k=d[p][y],u=d[p][y+1],M=d[p+1][y+1],O=d[p+1][y];t.idx.push(k,u,M,k,M,O)}t.box(o-s,l-.02,a-.02,o+s,l,c,S,{bottom:!0,x0:!0,x1:!0,z1:!0})}t.box(D0.x-.6,l,fe-.5,D0.x+.6,D0.plinth-.05,fe+.55,m,{bottom:!0}),t.box(D0.x-.64,D0.plinth-.05,fe-.54,D0.x+.64,D0.plinth,fe+.59,m),t.box(h-.06,g,a-.08,w+.06,g+.32,I,m),t.box(h-.02,g+.32,a-.02,w+.02,g+.78,I,m),t.box(h-.12,g+.78,a-.16,w+.12,g+.86,I,m),t.box(h-.2,g+.86,a-.26,w+.2,g+1.02,I,m);{let b=g+.55,i=.34,d=.2,p=28,y=[];for(let k=0;k<=4;k++){let u=k/4,M=[];for(let O=0;O<=p;O++){let D=2*W*O/p,K=.09*Math.sqrt(Math.max(0,1-u*u))+.01;M.push(t.v([o+Math.cos(D)*i*u,b+Math.sin(D)*d*u,a-.02-K],[Math.cos(D)*u*.6,Math.sin(D)*u*.6,-1],m,[Math.cos(D)*u,Math.sin(D)*u]))}y.push(M)}for(let k=0;k<4;k++)for(let u=0;u<p;u++){let M=y[k][u],O=y[k][u+1],D=y[k+1][u+1],K=y[k+1][u];t.idx.push(M,K,D,M,D,O)}for(let k=0;k<p;k++){let u=2*W*k/p,M=2*W*(k+1)/p;t.beam([o+Math.cos(u)*(i+.03),b+Math.sin(u)*(d+.03),a-.04],[o+Math.cos(M)*(i+.03),b+Math.sin(M)*(d+.03),a-.04],.025,m,[0,0,1])}for(let k of[-1,1])for(let u=0;u<14;u++){let M=1.8*W*u/14,O=1.8*W*(u+1)/14,D=.1*(1-u/16),K=.1*(1-(u+1)/16),s0=o+k*(i+.16),t0=b;t.beam([s0+k*Math.cos(M)*D,t0+Math.sin(M)*D,a-.04],[s0+k*Math.cos(O)*K,t0+Math.sin(O)*K,a-.04],.018,m,[0,0,1])}}{let b=g+1.02,i=.62,d=(w-h)/2+.2,p=a-.2,y=u=>b+i*(1-Math.abs(u-o)/d);for(let u=o-d;u<o+d-1e-6;u+=.1){let M=u,O=Math.min(o+d,u+.1);t.quad([O,b,p],[M,b,p],[M,y(M),p],[O,y(O),p],[0,0,-1],m,[[O,b],[M,b],[M,y(M)],[O,y(O)]])}let k=Math.hypot(d,i);for(let u of[-1,1]){let M=[u*i/k,d/k,0],O=o+u*(d+.06);t.quad([o,b+i+.06,p-.06],[O,b-.02,p-.06],[O,b-.02,I],[o,b+i+.06,I],M,m,[[0,p],[k,p],[k,I],[0,I]]),t.quad([o,b+i+.06,p-.06],[o,b+i-.06,p-.06],[O,b-.12,p-.06],[O,b-.02,p-.06],[0,0,-1],m,[[0,1],[0,0],[k,0],[k,1]])}}}var oo=[[72,72,72,72,72,72,70,69,68,65,63,61,63,63,64,66,68,69,70,70,70,70,70,71],[72,72,72,72,72,72,70,69,68,65,63,61,63,63,64,66,68,69,70,70,70,70,70,71],[72,72,72,72,72,72,70,69,67,65,63,61,63,63,64,66,68,69,70,70,70,70,70,71],[41,44,57,57,57,53,51,34,53,55,57,57,59,59,59,63,65,65,65,64,60,60,60,59],[56,56,62,63,63,63,59,35,54,55,59,59,59,59,58,61,63,63,63,62,50,50,50,50],[62,73,73,73,71,71,60,40,54,55,59,60,60,60,58,62,65,65,65,61,54,49,49,54],[66,79,79,79,78,76,65,45,54,54,59,62,62,62,62,62,65,65,65,61,54,49,49,54],[66,80,81,82,82,82,65,50,48,57,62,62,62,62,62,62,65,65,65,61,54,49,49,54],[66,80,86,86,86,85,66,50,48,57,62,62,62,62,62,61,64,64,64,60,52,50,50,52],[64,80,86,86,86,85,66,50,43,57,62,62,62,62,61,61,63,63,63,59,51,50,50,49],[64,76,86,86,86,85,66,50,46,56,60,60,60,60,58,59,61,61,61,57,51,51,51,48],[59,66,85,85,85,85,66,50,46,47,54,56,56,56,53,55,58,58,58,55,52,52,51,46],[46,52,77,77,77,77,66,49,46,44,39,42,42,42,43,47,47,47,50,52,52,52,51,45],[38,38,49,60,60,60,56,46,46,44,39,42,42,42,44,47,47,47,51,52,52,52,51,37],[25,30,30,30,35,38,38,38,44,47,47,47,45,42,44,47,47,47,51,52,52,52,50,23],[13,14,27,28,29,30,31,36,45,49,49,49,48,41,44,47,47,47,51,52,52,52,41,17],[23,15,15,16,16,28,30,36,45,49,49,49,48,41,44,45,45,45,50,50,50,50,43,32],[23,19,19,19,19,19,23,34,45,49,49,49,48,41,44,44,44,44,51,51,51,51,46,32],[24,19,19,19,19,22,27,31,42,48,48,48,47,39,42,42,42,44,51,51,51,51,46,32],[24,19,19,19,23,25,28,31,38,42,42,42,40,37,40,41,42,44,51,51,51,51,46,32],[26,23,18,19,23,25,28,31,37,37,37,37,32,33,34,38,42,44,50,51,51,51,46,31],[31,30,27,27,23,25,28,30,31,31,31,30,28,28,29,34,40,42,48,49,49,49,46,31],[39,37,33,30,22,25,27,27,27,27,26,22,22,22,22,24,31,36,42,43,43,43,43,39],[42,40,35,30,27,14,14,15,15,15,12,12,12,13,13,15,16,18,39,43,43,43,43,42],[42,41,35,30,27,0,0,0,0,0,0,0,0,0,0,0,0,0,41,43,43,43,43,42],[42,41,35,29,27,0,0,0,0,0,0,0,0,0,0,0,0,0,41,43,43,43,43,42],[42,41,35,29,15,0,0,0,0,0,0,0,0,0,0,0,0,0,41,43,43,43,42,42]];function Eo(t,o){let n=oo.length,e=Math.max(0,Math.min(n-1.001,t/.1)),a=(o/(2*W)*24%24+24)%24,c=Math.floor(e),l=Math.floor(a),h=e-c,w=a-l,m=(g,f)=>oo[Math.min(n-1,g)][f%24]/100,S=m(c,l)*(1-w)+m(c,l+1)*w,x=m(c+1,l)*(1-w)+m(c+1,l+1)*w;return S*(1-h)+x*h}var Ee=[[-2.5,2.1,2.3,1,1.3],[2.2,1.6,1.55,-1,4.1]];function lo(t){let[o,s,n,e,a]=Ee[t],c=[],l=140,h=null;for(let w=0;w<=l;w++){let m=w/l,S=.02+Math.pow(m,.92)*n,x=o+e*s*2*W*m,g=Eo(S,x)+.035;h=h===null?g:Math.max(g,h*.75+g*.25);let f=h+.018*Math.sin(m*37+a)+.01*Math.sin(m*71+a*3);c.push([D0.x+Math.sin(x)*f,D0.plinth+S+.025*Math.sin(m*23+a*2),D0.z-.05+Math.cos(x)*f,x,m])}return c}function Do(t){let o=kt(77);for(let s=0;s<Ee.length;s++){let n=lo(s);for(let e=0;e<n.length-1;e++)t.beam(n[e],n[e+1],.013*(1-n[e][4]*.45),q.DARKWOOD)}for(let[s,n,e]of $t){let[a,c]=we(s);for(let l=0;l<2;l++){let h=null;for(let w=a;w<=c;w+=.18){let m=xe(s,n,w),S=Math.sin(w*3.1+l*2+e)*.07,x=Math.cos(w*2.3+l+e)*.05,g=s==="wall"?.25+.5*w/n0:0,f=s==="wall"?[.05+Math.abs(x)*.6,m[1],m[2]+S*(1.5+l)*(1+2*g)+(l-.5)*g]:s==="ridge"?[m[0]+S,m[1]+x+.12,m[2]]:[m[0],m[1]+x+.12,m[2]+S];h&&(s==="wall"||te(w,e)||o()<.5)&&t.beam(h,f,(s==="wall"?.022*(1.2-w/n0):.012)+.008*o(),q.WOOD),h=f}}}}function Lo(t){let o=kt(4242),s=(e,a)=>!(Math.abs(e-T0.cx)<T0.hx+.2&&Math.abs(a-T0.cz+.08)<T0.hz+.42)&&!(e>$.x0-$.curb-.1&&e<$.x1+$.curb+.1&&a>$.z0-$.curb-.1&&a<$.z1+$.curb+.1)&&e>.2&&e<T-.2&&a>.3&&a<I-.4,n=(e,a,c,l)=>{let h=.022+o()*.022,w=o()*2*W,m=Math.cos(w),S=Math.sin(w),x=(f,v)=>[e+(f*m-v*S)*h,a+.004*f*v,c+(f*S+v*m)*h],g=l?2:0;t.quad(x(-1,-1),x(-1,1),x(1,1),x(1,-1),[0,1,0],q.BRACT,[[g,0],[g,1],[g+1,1],[g+1,0]])};for(let[e,a,c]of $t){let[l,h]=we(e);for(let w=l;w<=h;w+=.05){if(!te(w,c)||o()>.55)continue;let m=xe(e,a,w),S=m[0]+(o()-.5)*1.8,x=m[2]+(o()-.5)*1.8;s(S,x)&&n(S,.004,x,o()<.18)}}for(let e=0;e<260;e++){let a=Math.floor(o()*4),c,l;a<2?(c=a?$.x1+$.curb+.12+o()*o()*.9:$.x0-$.curb-.12-o()*o()*.9,l=$.z0+o()*($.z1-$.z0)):(l=a===2?$.z0-$.curb-.12-o()*o()*.9:$.z1+$.curb+.12+o()*o()*.9,c=$.x0+o()*($.x1-$.x0)),s(c,l)&&n(c,.004,l,o()<.18)}for(let e=0;e<70;e++){let a=$.x0+.08+o()*($.x1-$.x0-.16),c=$.z0+.08+o()*($.z1-$.z0-.16);Math.hypot(a-D0.x,c-D0.z)<.6||(t.float=[a,c,a*5.1+c*2.9],n(a,.016,c,o()<.2),t.float=null)}}function Ro(t,o,s){let n=(a,c,l,h,w)=>{let m=t.pos.length/3,S=Math.cos(l),x=Math.sin(l),g=Math.cos(h),f=Math.sin(h),v=[S,0,-x],b=[x*f,g,S*f],i=[v[1]*b[2]-v[2]*b[1],v[2]*b[0]-v[0]*b[2],v[0]*b[1]-v[1]*b[0]],d=w?.95:s()*.8;for(let[p,y]of[[0,0],[1,0],[1,1],[0,1]]){let k=(p-.5)*c,u=(y-.5)*c;t.pos.push(a[0]+v[0]*k+b[0]*u+F[0],a[1]+v[1]*k+b[1]*u+F[1],a[2]+v[2]*k+b[2]*u+F[2]),t.nrm.push(...i),t.uv.push(p,y),t.shade.push(d),t.flower.push(1)}t.idx.push(m,m+1,m+2,m,m+2,m+3)};function e(a,c,l){let h=c/n0,w=Math.min(.15+.9*h,a<1||a>I-1?.6:1.15),m=Math.round(3+7*h),S=c<1?0:Math.round((2+9*h)*(te(c*1.4,l)?1:.45));for(let x=0;x<m;x++){let g=s()*2*W;o([.04+s()*.22,c+(s()-.5)*.12,a+(s()-.5)*2*w],[Math.cos(g)*.4+.5,-.2-s()*.5,Math.sin(g)],[0,0,1],.07+s()*.06,.1)}for(let x=0;x<S;x++)n([.06+s()*.28,c+(s()-.5)*.18,a+(s()-.5)*2*w*.9],.34+s()*.32,s()*2*W,(s()-.5)*2.4,s()<.14);if(c>3&&s()<.05){let x=[.15,c,a+(s()-.5)*2*w],g=.4+s()*1.2;for(let f=0;f<g;f+=.13)x=[x[0]+.03,x[1]-.13,x[2]+(s()-.5)*.06],n([x[0],x[1],x[2]],(.26+s()*.2)*(1-.4*f/g),s()*2*W,(s()-.5)*.8,s()<.15)}}for(let[a,c,l]of $t){let[h,w]=we(a);for(let m=h;m<=w;m+=.1){if(a==="wall"){e(c,m,l);continue}if(!te(m,l))continue;let S=xe(a,c,m),x=()=>(s()-.5)*.7,g=4+Math.floor(s()*4);for(let f=0;f<g;f++){let v=a==="ridge"?[S[0]+x(),S[1]-s()*.25,S[2]+x()*.4]:[S[0]+x()*.4,S[1]-s()*.25,S[2]+x()];n(v,.42+s()*.4,s()*2*W,(s()-.5)*2.4,s()<.16)}for(let f=0;f<5;f++){let v=s()*2*W;o([S[0]+x()*.6,S[1]-s()*.2,S[2]+x()*.6],[Math.cos(v),-.3-s()*.5,Math.sin(v)],[-Math.sin(v),0,Math.cos(v)],.08+s()*.06,.1)}if(s()<.22){let f=.5+s()*2,v=[S[0],S[1],S[2]],b=[(s()-.5)*.08,(s()-.5)*.08];for(let i=0;i<f;i+=.13){v=[v[0]+b[0],v[1]-.13,v[2]+b[1]];let d=(.3+s()*.22)*(1-.4*i/f);if(n([v[0]+(s()-.5)*.08,v[1],v[2]+(s()-.5)*.08],d,s()*2*W,(s()-.5)*.8,s()<.15),s()<.6){let p=s()*2*W;o([v[0],v[1],v[2]],[Math.cos(p),-.6,Math.sin(p)],[-Math.sin(p),0,Math.cos(p)],.05+s()*.04,.1)}}}}}}var so=(()=>{let t=kt(9001),o=[],s=[];for(let[e,a,c]of $t){let[l,h]=we(e);for(let w=l;w<=h;w+=.1)te(w,c)&&s.push(xe(e,a,w))}let n=s.filter(e=>e[0]>$.x0-.6&&e[0]<$.x1+.6&&e[2]>$.z0&&e[2]<$.z1);for(let e=0;e<64;e++){let a=e%2===0&&n.length?n:s,c=a[Math.floor(t()*a.length)];o.push({start:[c[0]+(t()-.5)*.4,c[1]-.25-t()*.3,c[2]+(t()-.5)*.4],period:18+t()*22,offset:t()*60,drift:[(t()-.5)*1.6,(t()-.5)*1.6],speed:.45+t()*.25,seed:t(),white:t()<.18?1:0})}return o})(),Tt=[$.x0+.06,$.z0+.06,$.x1-.06,$.z1-.06];function Fo(t,o){let s=o+t.offset,n=Math.floor(s/t.period),e=s-n*t.period,a=.6+.4*Math.sin(n*1.7+t.seed*5),c=t.start[0]+t.drift[0]*a,l=t.start[2]+t.drift[1]*a,h=c>Tt[0]&&c<Tt[2]&&l>Tt[1]&&l<Tt[3],w=h?.017:.006,m=(t.start[1]-w)/t.speed;return{ph:e,Tf:m,lx:c,lz:l,inPool:h}}var wt=[{at:[T/2-.8,X0(7.6)],dir:.9,len:.92,kind:0,sip:21,first:9},{at:[T/2+.9,X0(11.6)],dir:3.6,len:.74,kind:1,sip:29,first:17},{at:[T/2-.3,X0(12.8)],dir:5.2,len:.86,kind:2,sip:25,first:4},{at:[T/2+1,X0(7)],dir:2.2,len:.7,kind:1,sip:33,first:23},{at:[T/2-1.1,X0(10.4)],dir:4.4,len:.82,kind:0,sip:27,first:13},{at:[T/2+.4,X0(9)],dir:1.4,len:.94,kind:2,sip:31,first:28},{at:[T/2-.9,X0(13)],dir:5.9,len:.66,kind:1,sip:23,first:6},{at:[T/2+1.1,X0(12.6)],dir:3,len:.8,kind:0,sip:35,first:31}],Dt=[$.x0+.5,$.z0+.5,$.x1-.5,$.z1-.55],Kt=[$.x0+.25,$.z0+.25,$.x1-.25,$.z1-.3],Jt=12,Yt=-.36,Te=[];function Po(){let t=f=>{let v=Math.sin(f*12.9898+78.233)*43758.5453;return v-Math.floor(v)},o=wt.map((f,v)=>({k:f,i:v,x:f.at[0],z:f.at[1],th:f.dir,w:0,v:.08,y:-.17,ph:v*2.1,pitch:0,kappa:0,thrust:0,amp:.2,stroking:v%2===0,modeT:t(v*3.1)*3,aim:f.dir,nextAim:t(v*7.7)*5,yAim:-.17,nextY:t(v*5.9)*8,gx:f.at[0],gz:f.at[1],nextSip:f.first,sipT:-1,bite:0,notice:0})),s=[],n=[];for(let f=0;f<Jt;f++)n.push({x:0,z:0,alive:0,born:0,seed:f*.37});let e={on:!1,x:0,z:0,t0:0,petal:!1,eaten:0,lure:null},a=0,c=0,l=f=>Math.atan2(Math.sin(f),Math.cos(f)),h=()=>t(++c*1.618+a*.37);return{fish:o,events:s,crumbs:n,feed:e,drop:(f,v)=>{f=Math.max(Kt[0],Math.min(Kt[2],f)),v=Math.max(Kt[1],Math.min(Kt[3],v)),Object.assign(e,{on:!0,x:f,z:v,t0:a,petal:!1,eaten:0}),n.forEach((b,i)=>{let d=t(a+i)*Math.PI*2,p=.04+.16*Math.sqrt(t(a*1.7+i*3.1));Object.assign(b,{x:f+Math.cos(d)*p,z:v+Math.sin(d)*p,alive:1,born:a+t(i*5.3+a)*.35})}),s.push([f,v,a,1]);for(let b of o)b.notice=a+.3+Math.hypot(b.x-f,b.z-v)*.35+t(b.i*9.1+a)*.7},lure:(f,v)=>{let b=null,i=1e9;for(let d of o){let p=Math.hypot(d.x-f,d.z-v);p<i&&(i=p,b=d)}e.lure={x:f,z:v,fish:b}},petal:(f,v)=>{Object.assign(e,{on:!0,x:f,z:v,t0:a,petal:!0,eaten:0}),n.forEach((i,d)=>Object.assign(i,{x:f,z:v,alive:d===0?1:0,born:a})),s.push([f,v,a,.45]);let b=e.lure&&e.lure.fish;if(!b){let i=1e9;for(let d of o){let p=Math.hypot(d.x-f,d.z-v);p<i&&(i=p,b=d)}}Math.hypot(b.x-f,b.z-v)>1.4&&(b.x=f+.2,b.z=v-1.2,b.th=Math.PI/2,b.y=-.22,b.v=.06);for(let i of o)i.notice=i===b?a+.9:a+4.5+Math.hypot(i.x-f,i.z-v)*.8+t(i.i*9.1)*2;e.lure=null},unpetal:()=>{if(!e.petal){e.lure=null;return}e.on=!1,e.petal=!1,e.eaten=0,e.lure=null;for(let f of n)f.alive=0},step:f=>{a+=f;let v=a,b=0;for(let i of n)!i.alive||v<i.born||(b++,i.x+=Math.sin(v*.7+i.seed*11)*.004*f,i.z+=Math.cos(v*.6+i.seed*7)*.004*f);if(e.on&&(b===0&&v>e.t0+1&&!e.petal||e.petal&&e.eaten&&v>e.eaten+3||v>e.t0+40)){e.petal=!1,e.on=!1;for(let i of n)i.alive=0}for(let i of o){let{k:d}=i,p=d.len,y=e.on&&v>i.notice;(v>i.nextAim||Math.hypot(i.gx-i.x,i.gz-i.z)<.7)&&(i.gx=Dt[0]+h()*(Dt[2]-Dt[0]),i.gz=Dt[1]+h()*(Dt[3]-Dt[1]),i.nextAim=v+12+h()*14),e.lure&&e.lure.fish===i&&(i.gx=e.lure.x+Math.cos(v*.3)*.3,i.gz=e.lure.z-.45+Math.sin(v*.3)*.2,i.nextAim=v+1,i.yAim=-.2),i.aim=Math.atan2(i.gz-i.z,i.gx-i.x)+.35*Math.sin(v*.21+i.i*1.7);let k=i.aim,u=.7,M=null;if(y){let M0=1e9;for(let _ of n){if(!_.alive||v<_.born)continue;let z=Math.hypot(_.x-i.x,_.z-i.z)+.1*Math.sin(i.i*3.3+_.seed*9);z<M0&&(M0=z,M=_)}let g0=M?M.x:e.x,w0=M?M.z:e.z;k=Math.atan2(w0-i.z,g0-i.x),i.aim=k,u=1.8}let O=.6+p*.8+i.v*2,D=y?Kt:Dt,K=0;for(let M0 of[0,.5,-.5]){let g0=i.x+Math.cos(i.th+M0)*O,w0=i.z+Math.sin(i.th+M0)*O;K=Math.max(K,Math.max(D[0]-g0,g0-D[2],D[1]-w0,w0-D[3],0))}if(K>0){let M0=(D[0]+D[2])/2,g0=(D[1]+D[3])/2+Math.sin(i.i*2.3)*1.5,w0=Math.atan2(g0-i.z,M0-i.x),_=Math.min(1,K*2.2);k=i.th+l(w0-i.th)*_+l(k-i.th)*(1-_),y||(i.aim=k),u=Math.max(u,.6+_*.8)}let s0=0;for(let M0 of o){if(M0===i)continue;let g0=M0.x-i.x,w0=M0.z-i.z,_=Math.hypot(g0,w0),z=(y?.4:1)*(p+M0.k.len)/2+.2;if(_<z&&Math.abs(M0.y-i.y)<.14){let R=l(Math.atan2(w0,g0)-i.th);(Math.abs(R)<1.6||_<z*.5)&&(s0-=Math.sign(R||1)*(z-_)/z*(Math.abs(R)<1.6?1:.6))}}let t0=l(k-i.th)+s0*(y?.4:2);i.modeT-=f,y?(i.stroking=!0,i.modeT=Math.max(i.modeT,.4)):i.modeT<=0&&(i.stroking=!i.stroking,i.modeT=i.stroking?1.2+h()*1.6:1.6+h()*3.2),!i.stroking&&(Math.abs(t0)>.9||i.v<.035)&&(i.stroking=!0,i.modeT=1+h()*.8),!y&&i.sipT<0&&v>i.nextSip&&(i.sipT=0,i.nextSip=v+d.sip*(.7+.6*h()));let P=0;if(i.sipT>=0){let M0=i.sipT;i.sipT+=f,P=Math.min(1,M0/1.6)*(1-Math.max(0,Math.min(1,(M0-2.6)/1.6))),M0<1.7&&i.sipT>=1.7&&s.push([i.x+Math.cos(i.th)*.03,i.z+Math.sin(i.th)*.03,v,.9]),M0<2.4&&i.sipT>=2.4&&s.push([i.x,i.z,v,.55]),(i.sipT>4.2||y)&&(i.sipT=-1)}let h0=y&&e.petal?.7:1,d0=(i.stroking?y?2.4*h0:1:0)*(1-.6*P);i.thrust+=(d0-i.thrust)*Math.min(f*3,1);let F0=y?.9:.55;i.v+=(i.thrust*.085*(.7+.4*p)-F0*i.v)*f,i.v=Math.max(i.v,.008);let E=.35+.65*Math.min(1,i.thrust),H=Math.max(-u,Math.min(u,t0*1.3))*E;i.w+=(H-i.w)*Math.min(f*2.2,1),i.th+=i.w*f,v>i.nextY&&(i.yAim=-(.13+h()*.1),i.nextY=v+6+h()*10);let U=i.yAim;if(P>0&&(U+=(-.045-U)*P),y){let M0=M?M.x:e.x,g0=M?M.z:e.z,w0=1-Math.min(1,Math.max(0,(Math.hypot(M0-i.x,g0-i.z)-.15)/.9));if(U+=((e.petal?.012:-.04)-U)*w0,M&&v>i.bite&&i.y>(e.petal?-.02:-.08)){let _=i.x+Math.cos(i.th)*(e.petal?.09:.02),z=i.z+Math.sin(i.th)*(e.petal?.09:.02);Math.hypot(M.x-_,M.z-z)<(e.petal?.14:.09)&&(M.alive=0,i.bite=v+1.3,e.petal?(e.eaten=v,s.push([M.x,M.z,v,1.6]),s.push([M.x+Math.cos(i.th)*.12,M.z+Math.sin(i.th)*.12,v+.01,1])):s.push([M.x,M.z,v,.75]))}}i.x+=Math.cos(i.th)*i.v*f,i.z+=Math.sin(i.th)*i.v*f,i.x=Math.max($.x0+.15,Math.min($.x1-.15,i.x)),i.z=Math.max($.z0+.15,Math.min($.z1-.15,i.z));let l0=(U-i.y)*Math.min(f*(y?2:.8),1);i.y+=l0;let X=y&&e.petal?.75:.4;i.pitch+=(Math.max(-X,Math.min(X,l0/f/Math.max(i.v,.06)*(y&&e.petal?1.8:1)))-i.pitch)*Math.min(f*2.5,1);let v0=Math.max(-1/p,Math.min(1/p,i.w/Math.max(i.v,.1)));i.kappa+=(v0-i.kappa)*Math.min(f*4,1);let N0=.12+.88*Math.min(1.4,i.thrust)+.4*Math.min(1,Math.abs(i.w));i.amp+=(N0-i.amp)*Math.min(f*2,1),i.ph+=f*(2+5.5*Math.min(1.6,i.thrust))*(.75+.35/Math.sqrt(p))}for(;s.length&&v-s[0][2]>10;)s.shift()},get t(){return a}}}function Uo(){let t=Ae();{let o=$.x0-$.curb,s=$.x1+$.curb,n=$.z0-$.curb,e=$.z1+$.curb,a=[[0,0,T,n],[0,e,T,I],[0,n,o,e],[s,n,T,e]];for(let[c,l,h,w]of a)for(let S=c;S<h-1e-6;S+=1)for(let x=l;x<w-1e-6;x+=1){let g=S,f=Math.min(h,S+1),v=x,b=Math.min(w,x+1);t.quad([g,0,v],[g,0,b],[f,0,b],[f,0,v],[0,1,0],q.FLOOR,[[g,v],[g,b],[f,b],[f,v]])}}for(let o of[0,1]){let s=o?T:0,n=o?T+Z0:-Z0,e=o?[-1,0,0]:[1,0,0],a=.04;for(let g=0;g<I-1e-6;g+=a){let f=g,v=Math.min(I,g+a),b=(f+v)/2,i=null;if(!o)for(let p of C.c)gt(b-p)!==null&&(i=[C.sill,Math.min(gt(f-p)||C.spring,gt(v-p)||C.spring)]);let d=i?[[0,i[0]],[i[1],n0]]:[[0,n0]];for(let[p,y]of d)y<=p||(o?t.quad([s,p,v],[s,p,f],[s,y,f],[s,y,v],e,q.ROCK,[[v,p],[f,p],[f,y],[v,y]]):t.quad([s,p,f],[s,p,v],[s,y,v],[s,y,f],e,q.ROCK,[[f,p],[v,p],[v,y],[f,y]]))}if(!o)for(let g of C.c){for(let i of[-1,1]){let d=g+i*C.hw,p=[0,0,-i],y=[s,C.sill,d],k=[n,C.sill,d],u=[n,C.spring,d],M=[s,C.spring,d];i>0!=!!o?t.quad(y,k,u,M,p,q.ROCK,[[0,C.sill],[Z0,C.sill],[Z0,C.spring],[0,C.spring]]):t.quad(M,u,k,y,p,q.ROCK,[[0,C.spring],[Z0,C.spring],[Z0,C.sill],[0,C.sill]])}let f=28;for(let i=0;i<f;i++){let d=i/f*W,p=(i+1)/f*W,y=g+Math.cos(d)*C.hw,k=g+Math.cos(p)*C.hw,u=C.spring+Math.sin(d)*C.hw,M=C.spring+Math.sin(p)*C.hw,O=[0,-Math.sin((d+p)/2),-Math.cos((d+p)/2)];o?t.quad([s,u,y],[n,u,y],[n,M,k],[s,M,k],O,q.ROCK,[[0,d],[Z0,d],[Z0,p],[0,p]]):t.quad([s,M,k],[n,M,k],[n,u,y],[s,u,y],O,q.ROCK,[[0,p],[Z0,p],[Z0,d],[0,d]])}let v=o?T-.08:-Z0,b=o?T+Z0:.08;t.box(v,C.sill-.09,g-C.hw-.12,b,C.sill,g+C.hw+.12,q.OLDSTONE)}let c=o?T:0,l=o?-1:1,h=q.OLDSTONE,w=Math.min(c,c+l*.32),m=Math.max(c,c+l*.32);t.box(w,n0-.55,0,m,n0-.3,I,h);let S=Math.min(c,c+l*.42),x=Math.max(c,c+l*.42);t.box(S,n0-.3,0,x,n0-.12,I,h)}for(let[o,s]of[[0,1],[I,-1]]){for(let c=0;c<32;c++){let l=c/32*T,h=(c+1)/32*T,w=S=>S<T/2?n0+ot*S:n0+ot*(T-S),m=s>0?[[h,0],[l,0],[l,w(l)],[h,w(h)]]:[[l,0],[h,0],[h,w(h)],[l,w(l)]];t.quad(...m.map(([S,x])=>[S,x,o]),[0,0,s],q.ROCK,m.map(([S,x])=>[S,x]))}let e=s>0?0:I-.32,a=s>0?.32:I;t.box(0,n0-.55,e,T,n0-.3,a,q.OLDSTONE)}No(t);{let o=Ae();To(o),Ao(t,o)}qo(t);{let{x0:o,x1:s,z0:n,z1:e,curb:a,top:c}=$,l=.06,h=.085;t.box(o-a,0,n-a,o,c-h,e+a,q.OLDSTONE,{bottom:!0}),t.box(s,0,n-a,s+a,c-h,e+a,q.OLDSTONE,{bottom:!0}),t.box(o,0,n-a,s,c-h,n,q.OLDSTONE,{bottom:!0}),t.box(o,0,e,s,c-h,e+a,q.OLDSTONE,{bottom:!0}),t.box(o-a-l,c-h,n-a-l,o+l*.5,c,e+a+l,q.OLDSTONE),t.box(s-l*.5,c-h,n-a-l,s+a+l,c,e+a+l,q.OLDSTONE),t.box(o+l*.5,c-h,n-a-l,s-l*.5,c,n+l*.5,q.OLDSTONE),t.box(o+l*.5,c-h,e-l*.5,s-l*.5,c,e+a+l,q.OLDSTONE);let w=.5;for(let m=o;m<s-1e-6;m+=w)for(let S=n;S<e-1e-6;S+=w){let x=m,g=Math.min(s,m+w),f=S,v=Math.min(e,S+w);t.quad([x,0,f],[x,0,v],[g,0,v],[g,0,f],[0,1,0],q.WATER,[[x,f],[x,v],[g,v],[g,f]])}}return t}function Co(t){for(let s of[0]){let n=s?T+Z0*.5:-Z0*.5,e=.05,a=rt.w*.5;for(let c of C.c){for(let l of rt.cols){let h=gt(l)-.01;t.box(n-e,C.sill,c+l-a,n+e,h,c+l+a,q.STEEL)}for(let l=C.sill+rt.rowH;l<C.spring+.01;l+=rt.rowH)t.box(n-e,l-a,c-C.hw,n+e,l+a,c+C.hw,q.STEEL);for(let[l,h]of[[C.hw-.03,.06],[rt.ring,a]])for(let m=0;m<24;m++){let S=m/24*W,x=(m+1)/24*W;t.beam([n,C.spring+Math.sin(S)*l,c+Math.cos(S)*l],[n,C.spring+Math.sin(x)*l,c+Math.cos(x)*l],h,q.STEEL,[1,0,0])}for(let l of[-1,1])t.box(n-e,C.sill,c+l*(C.hw-.03)-.03,n+e,C.spring,c+l*(C.hw-.03)+.03,q.STEEL);t.box(n-e,C.sill,c-C.hw,n+e,C.sill+.06,c+C.hw,q.STEEL)}}let o=s=>s<T/2?n0+ot*s:n0+ot*(T-s);for(let s=0;s<=12;s++){let n=s*ft.rafter;for(let[e,a]of[[-.3,T/2],[T/2,T+.3]])t.beam([e,o(Math.max(0,Math.min(T,e)))-.1,n],[a,o(a)-.1,n],.06,q.STEEL)}t.beam([T/2,mt-.14,-.2],[T/2,mt-.14,I+.2],.12,q.STEEL);for(let s of[.05,T-.05])t.beam([s,n0-.05,0],[s,n0-.05,I],.1,q.STEEL);for(let s of At){t.box(-.05,n0-.13,s-.08,T+.05,n0+.13,s+.08,q.STEEL),t.beam([T/2,n0,s],[T/2,mt-.2,s],.07,q.STEEL);for(let n of[-1,1])t.beam([T/2+n*T/4,n0,s],[T/2,mt-.4,s],.055,q.STEEL),t.beam([T/2+n*T/4,n0,s],[T/2+n*T/4,o(T/2+n*T/4)-.2,s],.045,q.STEEL),t.beam([T/2+n*(T/2-.1),n0,s],[T/2+n*T/4,o(T/2+n*T/4)-.2,s],.045,q.STEEL);for(let n of[-1,1])t.box(T/2+n*T/4-.12,n0-.18,s-.1,T/2+n*T/4+.12,n0+.18,s+.1,q.STEEL)}}function Vo(t){let o=kt(311),s=[],n=[[$.x0+.9,X0(6.6),.9,11],[$.x1-.8,X0(8.4),.85,10],[$.x0+.8,X0(10.6),.8,9],[$.x1-.9,X0(12.4),.9,11],[$.x0+1,X0(13.9),.65,7],[T/2+.2,X0(9.6),.5,4],[$.x1-.7,X0(15.9),.6,6]];for(let[a,c,l,h]of n)for(let w=0;w<h;w++)for(let m=0;m<40;m++){let S=o()*2*W,x=l*Math.sqrt(o()),g=a+Math.cos(S)*x,f=c+Math.sin(S)*x,v=.15+o()*.17;if(!(g-v<$.x0+.04||g+v>$.x1-.04||f-v<$.z0+.04||f+v>$.z1-.04)&&!(Math.hypot(g-D0.x,f-D0.z)<.62+v)&&!s.some(b=>Math.hypot(b[0]-g,b[1]-f)<(b[2]+v)*.93)){s.push([g,f,v,o()*2*W,o()]);break}}for(let[a,c,l,h,w]of s){Te.push([a,c,l]),t.float=[a,c,w*7.3+l*13];let m=28,S=4,x=l*1.08,g=[];for(let f=0;f<=S;f++){let v=[];for(let b=0;b<m;b++){let i=b/m*2*W,d=f/S,p=i-h,y=.012+.004*(1-d*d)+.006*Math.pow(d,6)*(.5+.5*Math.sin(i*3+w*9));v.push(t.v([a+Math.cos(i)*x*d,y,c+Math.sin(i)*x*d],[0,1,0],q.PAD,[.5+.5*d*Math.sin(p),.5+.5*d*Math.cos(p)]))}g.push(v)}for(let f=0;f<S;f++)for(let v=0;v<m;v++){let b=g[f][v],i=g[f][(v+1)%m],d=g[f+1][(v+1)%m],p=g[f+1][v];t.idx.push(b,i,d,b,d,p)}}t.float=null;let e=[[$.x0+.75,X0(6.9),1],[$.x1-.65,X0(8.1),.85],[$.x1-.95,X0(12.6),1.1],[$.x0+.95,X0(10.3),.8],[$.x1-.55,X0(15.6),.9],[$.x0+1.05,X0(13.7),.75]];for(let[a,c,l]of e){t.float=[a,c,a*3.7+c*1.3];let h=.17;[[12,1,70],[10,.86,48],[8,.66,26]].forEach(([m,S,x],g)=>{for(let f=0;f<m;f++){let v=2*W*f/m+g*.33,b=(90-(90-x)*l)*W/180,i=6,d=4,p=[];for(let y=0;y<=i;y++){let k=y/i,u=(.18+.82*Math.sin(W*Math.min(1,Math.pow(k,.8)*.75+.1)))*.36*S*h,M=[];for(let O=0;O<=d;O++){let D=O/d*2-1,K=D*u,s0=Math.abs(D)*Math.abs(D)*.12*S*h,t0=k*S*h,P=t0*Math.cos(b),h0=t0*Math.sin(b)+s0,d0=a+Math.cos(v)*P-Math.sin(v)*K,F0=c+Math.sin(v)*P+Math.cos(v)*K;M.push(t.v([d0,.03+h0,F0],[-Math.cos(v)*Math.sin(b)*.6,.8,-Math.sin(v)*Math.sin(b)*.6],q.PETAL,[(g===2?.5:0)+.5*(.5+.5*D*.92),.98-k*.96]))}p.push(M)}for(let y=0;y<i;y++)for(let k=0;k<d;k++){let u=p[y][k],M=p[y][k+1],O=p[y+1][k+1],D=p[y+1][k];t.idx.push(u,M,O,u,O,D,u,O,M,u,D,O)}}}),t.lathe(a,c,[[0,.03+.05*h*4],[.025,.03+.045*h*4],[.032,.035],[0,.03]],q.STAMEN,12)}t.float=null}function Io(t){let o=kt(907);{t.box(1.25-.48,.86-.06,11.1-1.35,1.25+.48,.86,11.1+1.35,q.WOOD);for(let l of[-1,1])for(let h of[-1,1])t.box(1.25+l*(.48-.08)-.04,0,11.1+h*(1.35-.1)-.04,1.25+l*(.48-.08)+.04,.86-.06,11.1+h*(1.35-.1)+.04,q.WOOD);t.box(1.25-.48+.06,.16,11.1-1.35+.1,1.25+.48-.06,.19,11.1+1.35-.1,q.WOOD);for(let l=0;l<11;l++){let h=1.25+(o()-.5)*.6,w=11.1+(o()-.5)*2.2,m=.035+o()*.04,S=.09+o()*.14;if(t.lathe(h,w,[[0,.86],[m,.86],[m*1.02,.86+S*.9],[m*.9,.86+S],[0,.86+S]],l%3?q.JAR:q.POT,14),l%3===0)for(let x=0;x<7;x++){let g=o()*2*W,f=.28+o()*.12,v=.12+o()*.2;t.beam([h,.86+.03,w],[h+Math.cos(g)*v*f,.86+.03+f,w+Math.sin(g)*v*f],.0055,q.BRUSH)}}t.box(1.25-.3,.86,11.1+.7,1.25+.15,.86+.02,11.1+1.15,q.WOOD)}for(let s=0;s<5;s++){let n=.55+o()*.6,e=.75+o()*.8,a=19.3+s*.16,c=.25+s*.07,l=.17,h=[c+e*Math.sin(l)*0,e,a];t.quad([c+.18,0,a-n/2],[c+.18,0,a+n/2],[c+.18-e*Math.sin(l),e*Math.cos(l),a+n/2],[c+.18-e*Math.sin(l),e*Math.cos(l),a-n/2],[Math.cos(l),Math.sin(l),0],s%2?q.WOOD:q.GESSO,[[0,0],[1,0],[1,1],[0,1]])}for(let[s,n,e,a]of[...ho.map(c=>[...c,I]),...fo.map(c=>[...c,I-Q.face])]){t.beam([s,n+.42,a],[s,n+.42,e+Math.sign(a-e)*.02],.016,q.STEEL),t.beam([s,n+.42,e],[s,n+.26,e],.01,q.STEEL);for(let[c,l]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.beam([s+c*.085,n-.2,e+l*.085],[s+c*.085,n+.16,e+l*.085],.009,q.STEEL);t.box(s-.1,n-.24,e-.1,s+.1,n-.2,e+.1,q.STEEL),t.lathe(s,e,[[.13,n+.16],[.05,n+.27],[0,n+.29]],q.STEEL,4),t.lathe(s,e,[[0,n-.2],[.022,n-.19],[.022,n-.06],[0,n-.055]],q.GESSO,10),t.lathe(s,e,[[0,n-.055],[.014,n-.035],[0,n+.02]],q.FLAME,8)}for(let[s,n,e,a]of mo){let c=n+a,l=.024;t.beam([s,c+.02,e],[s,ro(s)-.05,e],.0018,q.STEEL),t.lathe(s,e,[[0,n],[l*.8,n+.004],[l,n+.02],[l,c-.02],[l*1.12,c-.008],[l*.9,c],[0,c-.004]],q.GESSO,10),t.beam([s,c-.004,e],[s,c+.014,e],.0016,q.STEEL),t.lathe(s,e,[[0,c+.008],[.013,c+.028],[.009,c+.055],[0,c+.095]],q.CFLAME,8)}}var jo=[[4.2,4.6,7.33],[11.8,4.6,7.33],[4.2,4.6,16.5],[11.8,4.6,16.5],[4.2,4.6,24.2],[11.8,4.6,24.2]],ho=[-1,1].map(t=>[T/2+t*(1.95/2+.62),2.95,I-.34]),fo=[-1,1].map(t=>[T/2+t*(Q.hw+Q.pier/2),2.7,I-Q.face+.34]),vo=[[8,3.6,5.4,12],[4.6,6.8,5,12],[11.2,7.4,5.2,12],[8,9.8,5.7,10],[2.4,11.6,4.8,11],[13.8,12.2,5,11],[V.cx,V.cz,3.7,5],[2.8,24.4,4.8,11],[13.2,24.6,5,11],[8,25.9,5.8,9]],po=6,uo=[[T/2,2.3,I-3.9],[8.6,4.2,22],[9.5,6.9,18.1],[8.6,5.2,14.2],[8,3.6,10.5],[7.6,4.1,6],[7.4,4.8,3.2]],Wo=[uo,[[7.4,4.8,3.2],[8.2,4.3,3.4],[9,3.7,3],[9.2,3.45,2.6]]],Bo=(t,o)=>Wo.every(s=>{for(let n=0;n<s.length-1;n++){let e=s[n],a=s[n+1],c=[a[0]-e[0],a[1]-e[1],a[2]-e[2]],l=[t[0]-e[0],t[1]-e[1],t[2]-e[2]],h=Math.max(0,Math.min(1,(l[0]*c[0]+l[1]*c[1]+l[2]*c[2])/(c[0]*c[0]+c[1]*c[1]+c[2]*c[2])));if(Math.hypot(l[0]-c[0]*h,l[1]-c[1]*h,l[2]-c[2]*h)<o)return!1}return!0}),mo=(()=>{let t=[],o=911,s=()=>(o=o*16807%2147483647,(o-1)/2147483646);return vo.forEach(([n,e,a,c],l)=>{for(let h=0,w=0;h<c&&w<400;w++){let m=l===po,S=s()*2*W,x=m?.35+.6*Math.sqrt(s()):.25+1.35*Math.sqrt(s()),g=n+Math.cos(S)*x,f=e+Math.sin(S)*x,v=.26+.18*s(),b=a+(s()-.5)*(m?.9:2.6),i=Math.hypot(g-V.cx,f-V.cz);!m&&i<7&&(i>4.4||b<V.top+.5)||g<.8||g>T-.8||f<2.2||f>I-.9||t.some(d=>Math.hypot(d[0]-g,d[2]-f)<.2)||Bo([g,b+v*.5,f],.85)&&(t.push([g,b,f,v,l]),h++)}}),t})(),Oe=vo.map((t,o)=>{let s=mo.filter(e=>e[4]===o),n=[0,0,0];for(let e of s)n[0]+=e[0],n[1]+=e[1]+e[3]+.05,n[2]+=e[2];return[n[0]/s.length,n[1]/s.length,n[2]/s.length,s.length]}),ks=[[$.x0-1,$.z0-1,1],[$.x1+1,$.z0-1,.95],[$.x0-1,$.z1+1,1.15],[$.x1+1,$.z1+1,1.1],[.9,1.3,1.25],[T-.9,I-1.2,1.3]],ao=[[0,0,.16,.5],[.16,0,.34,.4],[.35,0,.5,.36],[.5,0,.66,.38],[.68,0,.84,.42],[0,.6,.19,1],[.2,.57,.36,1],[.41,.6,.58,1]];function Ho(){let t={pos:[],nrm:[],uv:[],shade:[],flower:[],idx:[]},o=kt(1213),s=(n,e,a,c,l)=>{let h=ao[Math.floor(o()*ao.length)],w=(h[2]-h[0])/(h[3]-h[1]),m=c*w*1,S=5,x=t.pos.length/3,g=.6+o()*.4;for(let f=0;f<=S;f++){let v=f/S,b=l*v*v*c,i=[n[0]+e[0]*v*c,n[1]+e[1]*v*c-b,n[2]+e[2]*v*c];for(let d of[-.5,.5]){t.pos.push(i[0]+a[0]*d*m+F[0],i[1]+a[1]*d*m-Math.abs(d)*.08*m+F[1],i[2]+a[2]*d*m+F[2]);let p=[e[1]*a[2]-e[2]*a[1],e[2]*a[0]-e[0]*a[2],e[0]*a[1]-e[1]*a[0]],y=Math.hypot(...p)||1;t.nrm.push(p[0]/y,Math.abs(p[1]/y)+.2,p[2]/y),t.uv.push(d<0?h[0]:h[2],h[3]-(h[3]-h[1])*v),t.shade.push(g),t.flower.push(0)}}for(let f=0;f<S;f++){let v=x+f*2;t.idx.push(v,v+1,v+3,v,v+3,v+2)}};Ro(t,s,o);for(let[n,e,a]of[[$.x0-.3,$.z1+.3,-1],[$.x1+.3,$.z0-.3,1],[$.x0-.3,$.z0-.2,-1]])for(let c=0;c<26;c++){let l=o()*2*W,h=n+(o()-.3)*.5*-a,w=e+(o()-.5)*.8,m=$.top+.01-Math.max(0,Math.abs(h-n)-.1)*.6*o();s([h,Math.max(.05,m),w],[Math.cos(l),-.15,Math.sin(l)],[-Math.sin(l),0,Math.cos(l)],.08+o()*.05,.12)}return t}function Go(){let t=Ae();for(let s of[0]){let n=s?T+Z0*.5+.01:-Z0*.5-.01,e=s?[-1,0,0]:[1,0,0];for(let a of C.c)for(let l=a-C.hw;l<a+C.hw-1e-6;l+=.05){let h=l,w=Math.min(a+C.hw,l+.05),m=gt(h-a+1e-4)||C.spring,S=gt(w-a-1e-4)||C.spring;s?t.quad([n,C.sill,w],[n,C.sill,h],[n,m,h],[n,S,w],e,0,[[w,C.sill],[h,C.sill],[h,m],[w,S]]):t.quad([n,C.sill,h],[n,C.sill,w],[n,S,w],[n,m,h],e,0,[[h,C.sill],[w,C.sill],[w,S],[h,m]])}}let o=Math.hypot(ot,1);return t.quad([0,n0+.002,I],[0,n0+.002,0],[T/2,mt+.002,0],[T/2,mt+.002,I],[ot/o,-1/o,0].map(s=>-s).map((s,n)=>n===1?-Math.abs(s):s),1,[[0,I],[0,0],[T/2,0],[T/2,I]]),t.quad([T,n0+.002,0],[T,n0+.002,I],[T/2,mt+.002,I],[T/2,mt+.002,0],[-ot/o,-1/o,0],1,[[T,0],[T,I],[T/2,I],[T/2,0]]),t}var Lt={ivy:[[.00293,.0127,.12207,.23633],[.13037,.00586,.24463,.24414],[.25293,.0166,.37207,.23242],[.37793,.02344,.49707,.22656],[.50293,.01367,.62207,.23535],[.62793,.03418,.74707,.21582]],blade:[[.01855,.50391,.02832,.99512],[.05762,.50391,.08301,.99512],[.10889,.50391,.12549,.99609],[.1582,.50391,.16943,.99512],[.19922,.50391,.22266,.99512],[.25,.50391,.26562,.99609],[.29932,.50391,.31006,.99609],[.33008,.50781,.37305,.99121],[.38721,.50391,.40918,.99609]],daisy:[[.75684,.00586,.86768,.24414],[.87793,.00781,.99707,.24121],[.00342,.25586,.12158,.49414],[.12842,.25586,.24609,.49414],[.25293,.25684,.37207,.49219],[.37891,.25586,.49609,.49316]],weed:[[.50293,.25781,.62207,.49121],[.62793,.26562,.74707,.48438],[.75293,.26855,.87207,.48047],[.88281,.25586,.99219,.49414],[.44043,.50977,.55957,.73926],[.5752,.50586,.67432,.74414],[.69043,.50586,.80908,.74414],[.81738,.50586,.93213,.74414],[.44043,.75781,.55957,.99219]],rleaf:[[.69824,.75586,.78076,.99414],[.79834,.75586,.88867,.99414],[.9043,.75586,.99072,.99414],[.94043,.54395,.99707,.70605]],petal:[[.56445,.75391,.68555,.99609]]},Ko=[[.248,.8613],[.3438,.9785],[.4492,.584],[.5957,.3281],[.5371,.918],[.1699,.4062],[.752,.6699],[.5879,.2207],[.3789,.8477],[.2637,.2266],[.6758,.7422],[.6016,.0273],[.5762,.502],[.0469,.5078],[.1406,.7773],[.791,.7539],[.6113,.5605],[.9121,.6777],[.6523,.1523],[.2871,.3301],[.2109,.832],[.4297,.625],[.168,.4434],[.1348,.1211],[.9668,.0859],[.3164,.873],[.1777,.7539],[.0215,.3281],[.6719,.334],[.9844,.6172],[.6523,.3828],[.1152,.2988],[.0176,.1328],[.207,.0996],[.6152,.9844],[.0234,.0117],[.0723,.6328],[.2695,.7695],[.2539,.9395],[.502,.9941],[.1504,.9961],[.957,.8145],[.5117,.123],[.4062,.4941],[.0547,.1387],[.4375,.2949],[.373,.2109],[.1699,.3086],[.5176,.6445],[.4863,.3027],[.877,.6602],[.5977,.8887],[.5488,.0098],[.5156,.5332],[.6973,.1094],[.4707,.2051],[.498,.7559],[.0312,.7363],[.2051,.4629],[.541,.8379],[.8398,.8965],[.1426,.1855],[.3711,.1172],[.1328,.9082],[.75,.9629],[.2812,.0449],[.6367,.4277],[.2051,.9824],[.7012,.9766],[.0059,.9102],[.7168,.3379],[.1602,.584],[.8594,.1973],[.3516,.7227],[.0918,.9727],[.416,.3359],[.6465,.9355],[.3418,.627],[.7578,.332],[.0293,.6973],[.9004,.957],[.7012,.7617],[.1855,.8652],[.6914,.8184],[.5684,.543],[.6523,.8672],[.5742,.7441],[.2949,.4121],[.2363,.6387],[.25,.1953],[.0352,.5918],[.248,.293],[.0762,.4863],[.9785,.4922],[.9004,.7305],[.9277,.5527],[.9395,.125],[.3691,.8789],[.4805,.0469],[.5703,.4551],[.4199,.2246],[.0371,.625],[.3281,.4941],[.1152,.6094],[.2793,.834],[.5039,.166],[.4609,.5312],[.0645,.7715],[.6035,.7227],[.4746,.6348],[.6777,.5684],[.2773,.4512],[.8008,.1191],[.3945,.9297],[.2109,.6855],[.5977,.1875],[.5195,.0742],[.1309,.4609],[.9531,.4277],[.4785,.9648],[.543,.3262],[.9121,.041],[.5059,.7188],[.0098,.2969],[.8438,.3789],[.1504,.2637],[.7969,.873],[.8613,.9863],[.834,.7461],[.377,.6211],[.791,.7227],[.6758,.8457],[.7832,.8066],[.834,.5293],[.1973,.6562],[.8281,.9609],[.5332,.7773],[.9062,.8008],[.3262,.0234],[.8984,.7676]],jt={IVY:0,BLADE:1,DAISY:2,WEED:3,ROSE:4,RLEAF:5,GRAPE:6},no=[[[.006,.013,-.051],[-.04,-.022,.004],[-.029,.026,-.015]],[[-.094,.019,.023],[.014,-.004,-.003],[.06,.026,-.027]],[[-.034,-.031,.002],[-.019,.07,-.028],[-.07,.018,-.039]],[[.102,-.049,-.011],[.057,-.046,.157],[.042,-.031,.089]],[[.026,.006,.019],[-.038,-.037,-.073],[-.042,-.019,.021]],[[.088,-.048,.008],[.143,-.012,.005],[-.044,.033,.028]],[[.039,-.084,-.04],[-.054,-.031,.031],[.076,.028,.014]],[[.082,-.037,-.05],[-.078,.011,.004],[-.076,-.047,.042]]],Yo=2;function Xo(){let t={pos:[],nrm:[],uv:[],info:[],idx:[]},o=[],s={pos:[],nrm:[],uv:[],info:[],idx:[]},n=t,e=kt(2718),a=_=>{let z=Math.hypot(_[0],_[1],_[2])||1;return[_[0]/z,_[1]/z,_[2]/z]},c=(_,z)=>[_[1]*z[2]-_[2]*z[1],_[2]*z[0]-_[0]*z[2],_[0]*z[1]-_[1]*z[0]],l=(_,z)=>_[0]*z[0]+_[1]*z[1]+_[2]*z[2],h=(_,z,R)=>[_[0]+z[0]*R,_[1]+z[1]*R,_[2]+z[2]*R],w=_=>_[Math.floor(e()*_.length)],m=_=>(_[2]-_[0])*Yo/(_[3]-_[1]),S=(_,z,R,j,J,Z)=>(n.pos.push(_[0]+F[0],_[1]+F[1],_[2]+F[2]),n.nrm.push(z[0],z[1],z[2]),n.uv.push(R[0],R[1]),n.info.push(j,J,Z),n.pos.length/3-1),x=(_,z,R,j,J,Z,e0,a0,o0)=>{let f0=o0?2:1,z0=n.pos.length/3;for(let u0=0;u0<=f0;u0++){let q0=u0/f0,b0=o0?h(h(_,R,q0),a0,o0*q0*q0):h(_,R,q0),m0=j[3]+(j[1]-j[3])*q0;S(h(b0,z,-1),e0,[j[0],m0],J,Z,q0),S(h(b0,z,1),e0,[j[2],m0],J,Z,q0)}for(let u0=0;u0<f0;u0++){let q0=z0+u0*2;n.idx.push(q0,q0+1,q0+3,q0,q0+3,q0+2)}},g=null,f=[...Lt.ivy,...Lt.ivy,...Lt.weed.slice(0,7)],v=[0,1,0],b=(_,z,R,j,J)=>{let Z=w(f),e0=c(R,z),a0=a(h(h(z,R,e()*.9-.25),e0,(e()-.5)*.8)),o0=a(h(R,a0,-l(R,a0))),f0=(e()-.5)*2,z0=Math.cos(f0),u0=Math.sin(f0);o0=a(h(h([0,0,0],o0,z0),c(a0,o0),u0));let q0=c(o0,a0),b0=j*m(Z);x(h(_,o0,-j*.18),h([0,0,0],q0,b0/2),h([0,0,0],o0,j),Z,J,jt.IVY,a0)},i=(_,z,R,j,J)=>{let Z=Math.floor(e()*no.length),e0=no[Z],a0=c(R,z),o0=a(h(h(z,R,e()*.8-.3),a0,(e()-.5)*.9)),f0=a(h(R,o0,-l(R,o0))),z0=e()*2*W,u0=Math.cos(z0),q0=Math.sin(z0);f0=a(h(h([0,0,0],f0,u0),c(o0,f0),q0));let b0=c(f0,o0),m0=Z%4/4,$0=Math.floor(Z/4)/2,U0=1.4,L0=[],vt=n.pos.length/3;for(let C0=0;C0<3;C0++)for(let j0=0;j0<3;j0++){let H0=j0/2-.5,J0=.5-C0/2;L0.push(h(h(h(_,b0,H0*j),f0,J0*j),o0,e0[C0][j0]*j*U0))}for(let C0=0;C0<3;C0++)for(let j0=0;j0<3;j0++){let H0=Math.max(j0-1,0),J0=Math.min(j0+1,2),Ot=Math.max(C0-1,0),Pt=Math.min(C0+1,2),Ut=h(L0[C0*3+J0],L0[C0*3+H0],-1),Ct=h(L0[Ot*3+j0],L0[Pt*3+j0],-1),pt=a(c(Ut,Ct));l(pt,o0)<0&&(pt=pt.map(Mt=>-Mt)),S(L0[C0*3+j0],pt,[m0+j0/2*.25,$0+C0/2*.5],J,jt.GRAPE,1)}for(let C0=0;C0<2;C0++)for(let j0=0;j0<2;j0++){let H0=vt+C0*3+j0;n.idx.push(H0,H0+1,H0+4,H0,H0+4,H0+3)}},d=(_,z,R,j,J,Z,e0,a0,o0,f0=.3)=>{let z0=Math.max(3,Math.round(J*2.4*e0)),u0=[];for(let b0=0;b0<z0;b0++){let m0=j+(e()-.5)*J,$0=Math.min(1,Math.abs(m0-j)/(J/2+.001)),U0=Z*(.6+.4*e())*(1-.5*$0*$0);u0.push([m0,a0||e()*.15,(e()-.5)*.5,U0,0])}let q0=0;for(;u0.length&&q0++<4e3;){let[b0,m0,$0,U0,L0]=u0.pop(),vt=m0;for(let C0=0;C0<260&&($0+=(e()-.5)*.45,$0=Math.max(-1,Math.min(1,$0)),b0+=Math.sin($0)*.09,m0+=(a0?-1:1)*Math.cos($0)*.09,!(a0?vt-m0>U0||m0<(o0?o0(b0):.05):m0-vt>U0));C0++){let H0=a0?(vt-m0)/U0:(m0-vt)/U0,J0=e()<.9*e0?e()<.5?2:1:0;for(let Ot=0;Ot<J0;Ot++){let Pt=.015+e()*.11,Ut=b0+(e()-.5)*.2,Ct=m0+(e()-.5)*.12;if(g&&g(Ut,Ct))continue;let pt=h(h(h(_,z,Ut),v,Ct),R,Pt),Mt=(.14+.1*e())*(a0?1.05-.3*H0:1.2-.4*H0),ce=.45+.55*(Pt/.125)*(.6+.4*e());e()<f0?e()<.55&&i(pt,R,v,Mt*1.7,ce):b(pt,R,v,Mt,ce)}L0<2&&e()<.035&&u0.push([b0,m0,$0+(e()<.5?-.7:.7),U0*(.35+.4*e())*(1-H0*.5),L0+1])}}},p=(_,z,R,j,J)=>{let Z=w(Lt.rleaf),e0=a(h(h(z,R,e()*.8-.1),c(R,z),(e()-.5)*.9)),a0=a(h(R,e0,-l(R,e0))),o0=(e()-.5)*3,f0=Math.cos(o0),z0=Math.sin(o0);a0=a(h(h([0,0,0],a0,f0),c(e0,a0),z0));let u0=c(a0,e0);x(h(_,a0,-j*.1),h([0,0,0],u0,j*m(Z)/2),h([0,0,0],a0,j),Z,J,jt.RLEAF,e0)},y=(_,z,R,j,J,Z,e0)=>{let a0=Math.max(3,Math.round(J*2.2)),o0=(b0,m0,$0)=>h(h(h(_,z,b0),v,m0),R,$0),f0=p,z0=null,u0=(b0,...m0)=>{g&&g(l(h(b0,_,-1),z),b0[1])||f0(b0,...m0)},q0=(b0,m0,$0)=>{g&&g(l(h(b0,_,-1),z),b0[1])||o.push({at:b0,f:m0,size:$0,spin:e()*2*W})};for(let b0=0;b0<a0;b0++){let m0=j+(e()-.5)*J*.35,$0=.05,U0=(e()-.5)*1.4,L0=Z*(.6+.4*e()),vt=(m0-j)/(J/2+.001);for(let C0=0;C0<200&&$0<L0&&(U0+=(e()-.5)*.3+vt*.012+($0>L0*.6?Math.sign(U0||1)*.02:0),U0=Math.max(-1.25,Math.min(1.25,U0)),m0+=Math.sin(U0)*.08,$0+=Math.cos(U0)*.08,!(Math.abs(m0-j)>J*.6));C0++){let j0=$0/L0;for(let H0=0;H0<(e()<.8?2:1);H0++){let J0=.02+e()*.12;u0(o0(m0+(e()-.5)*.16,$0+(e()-.5)*.12,J0),R,v,.07+e()*.05,.5+.5*e())}if(j0>.2&&e()<e0*(.018+.038*j0)){let H0=1+Math.floor(e()*3);for(let J0=0;J0<H0;J0++){let Ot=a(h(h(R,v,(e()-.4)*.8),c(v,R),(e()-.5)*.9));q0(o0(m0+(e()-.5)*.22,$0+(e()-.5)*.2,.16+e()*.1),Ot,.19+e()*.09)}for(let J0=0;J0<3;J0++)u0(o0(m0+(e()-.5)*.25,$0+(e()-.5)*.2,.05+e()*.08),R,v,.07+e()*.04,.6+.4*e())}}}},k=(_,...z)=>y(_.o,_.u,_.n,...z);{let _=[[.28,.47,.66,.84,.97],[.5,.78,.96]];for(let z=0;z<Ee.length;z++){let R=lo(z);for(let j=3;j<R.length;j++){let[J,Z,e0,a0,o0]=R[j],f0=[Math.sin(a0),0,Math.cos(a0)],z0=[J+f0[0]*.025,Z,e0+f0[2]*.025];if(j%2===0)for(let u0=0;u0<2;u0++)p(h(z0,[e()-.5,(e()-.5)*.6,e()-.5],.05),f0,v,.045+.03*e()*(1-o0*.3),.35+.4*e())}for(let j of _[z]){let J=Math.round(j*(R.length-1)),[Z,e0,a0,o0]=R[J],f0=[Math.sin(o0),0,Math.cos(o0)],z0=a([f0[0]*.8,.35,f0[2]*.8+.45]);o.push({at:[Z+f0[0]*.05,e0+.02,a0+f0[2]*.05],f:z0,size:.12+.035*e(),spin:e()*2*W});for(let u0=0;u0<2;u0++)p(h([Z,e0,a0],f0,.03+.02*e()),f0,v,.045+.02*e(),.6+.4*e())}}}let u={o:[0,0,0],u:[1,0,0],n:[0,0,1]},M={o:[0,0,I],u:[1,0,0],n:[0,0,-1]},O={o:[T,0,0],u:[0,0,1],n:[-1,0,0]},D=(_,...z)=>d(_.o,_.u,_.n,...z);D(u,4.1,3,7,1.5),D(u,12,3.4,5.8,1.3),D(u,1,2.2,4.2,1.2),D(u,15,2,5,1.2),k(u,3.6,3.2,5.6,1.1),k(u,12.6,3,4.8,1),k(u,.9,1.6,3.2,.8);{let _=Q.face-.26,z={o:[0,0,I-_+.03],u:[1,0,0],n:[0,0,1]},R=5.35+1.02;d(z.o,z.u,z.n,T-Q.x1+1,1.9,2.2,1.2,R,()=>3.2),d(z.o,z.u,z.n,T-Q.x0-.5,.8,1,.8,R,()=>4.6);for(let j=0;j<70;j++){let J=Q.x0+.2+Math.pow(e(),1.6)*2.4,Z=(Q.x1-Q.x0)/2+.2,e0=R+.62*(1-Math.abs(J-Q.cx)/Z)+.02;b([T-J,e0+e()*.05,.1+e()*(I-_-.15)],a([0,1,.3]),[0,0,1],.08+e()*.05,.7+.3*e())}}g=(_,z)=>Math.abs(_-T/2)<W0.w/2+W0.frame+.12&&z<W0.top+W0.frame+.12,D(M,5.3,3.2,6.2,1.4),D(M,11,3.6,7,1.4),D(M,1.2,2.4,4.4,1.2),D(M,14.9,2.2,5.4,1.2),d(M.o,M.u,M.n,T/2+.3,4,1.6,1.3,W0.top+1.7,_=>Math.abs(_-T/2)<W0.w/2+.3?W0.top+W0.frame+.15:2.4),k(M,5.6,3.4,5.2,1.2),k(M,10.6,3.6,5.8,1.2),k(M,14.6,2,4,.9),g=null,D(O,2.6,4,7,1.4),D(O,9.2,4.6,5.4,1.2),D(O,15.6,5,7.4,1.5),D(O,20.9,2,4,1.2),D(O,23.8,4.2,6.6,1.4),D(O,26.6,1.8,4.4,1.2),k(O,3.2,3.6,5.4,1.1),k(O,8.6,3,4.2,1),k(O,13.4,3.2,5.8,1.1),k(O,18.6,3.4,5,1.2),k(O,23.2,3.6,5.6,1.2),k(O,26.4,1.6,3.6,.9),g=(_,z)=>C.c.some(R=>{let j=gt(_-R);return j!==null&&Math.abs(_-R)<C.hw+.06&&z>C.sill-.05&&z<j+.06});for(let[_,z]of $t.filter(R=>R[0]==="wall")){let R=z<1||z>I-1;d([0,0,0],[0,0,1],[1,0,0],z,R?1:1.7,n0-.6,R?.9:1.1,0,null,.85)}for(let _ of C.c)d([0,0,0],[0,0,1],[1,0,0],_,C.hw*2.3,1.6,.8,n0-.6,z=>gt(z-_)!==null?gt(z-_)+.15:n0-2.2,.85);g=null,n=s;let K=(_,z,R,j,J,Z,e0)=>{let a0=w(Lt.blade),o0=[Math.cos(Z),0,Math.sin(Z)],f0=Math.max(j*.16,.012);x([_,z,R],[-o0[2]*f0/2,0,o0[0]*f0/2],[o0[0]*J*j*.4,j,o0[2]*J*j*.4],a0,e0,jt.BLADE,a([o0[0]*.5,1,o0[2]*.5]),o0,j>.12?j*J*.6:0)},s0=(_,z,R,j,J)=>{for(let Z=0;Z<J;Z++){let e0=e()*2*W,a0=e()*.035;K(_+Math.cos(e0)*a0,z,R+Math.sin(e0)*a0,j*(.45+.55*e()),.25+.75*e(),e0+(e()-.5),.6+.4*e())}},t0=(_,z,R,j)=>{let J=4+Math.floor(e()*3),Z=e()*2*W;for(let e0=0;e0<J;e0++){let a0=w(Lt.weed),o0=Z+e0*2*W/J+(e()-.5)*.4,f0=[Math.cos(o0),0,Math.sin(o0)],z0=.35+e()*.45,u0=j*(.7+.5*e()),q0=[f0[0]*Math.cos(z0)*u0,Math.sin(z0)*u0,f0[2]*Math.cos(z0)*u0],b0=u0*m(a0);x([_,z+.004,R],[-f0[2]*b0/2,0,f0[0]*b0/2],q0,a0,.7+.3*e(),jt.WEED,a([-f0[0]*Math.sin(z0),Math.cos(z0),-f0[2]*Math.sin(z0)]),[0,-1,0],u0*.15)}},P=(_,z,R)=>{let j=.05+e()*.12;K(_,z,R,j+.02,.15,e()*2*W,.8);let J=w(Lt.daisy),Z=.03+e()*.025,e0=(e()-.5)*.6,a0=e()*2*W,o0=[Math.cos(a0)*Z*2,Math.sin(e0)*Z,Math.sin(a0)*Z*2],f0=[-Math.sin(a0)*Z,0,Math.cos(a0)*Z];x([_-Math.cos(a0)*Z,z+j,R-Math.sin(a0)*Z],f0,o0,J,1,jt.DAISY,[0,1,0]),t0(_,z,R,.04)},h0=(_,z,R,j)=>{let J=e();J<.8?s0(_,z,R,j?.2+.3*e():.08+.1*e(),j?5+Math.floor(e()*6):3+Math.floor(e()*3)):J<.93?t0(_,z,R,j?.09+.06*e():.06+.03*e()):P(_,z,R)},d0=$.x0-$.curb-.08,F0=$.x1+$.curb+.08,E=$.z0-$.curb-.08,H=$.z1+$.curb+.08,U=T-Q.x1-.16,l0=T-Q.x0+.16,X=I-Q.face+.36,v0=(_,z)=>Math.hypot(_-V.cx,z-V.cz),N0=(_,z)=>Math.abs(_-T0.cx)<T0.hx+.16&&Math.abs(z-T0.cz+.08)<T0.hz+.4||v0(_,z)>V.ri-.1&&v0(_,z)<V.ro+1.6||_>d0&&_<F0&&z>E&&z<H||_>U&&_<l0&&z<X||Math.abs(_-T/2)<1.15&&z>I-.5||_<.06||_>T-.06||z<.06||z>I-.06,M0=(_,z)=>{let R=Math.min(_,T-_,z,I-z),j=Math.max(d0-_,_-F0,E-z,z-H),J=Math.max(U-_,_-l0,z-X);return Math.min(R,Math.max(j,0)+(j<0?9:0),Math.max(J,0)+(J<0?9:0))},g0=(_,z)=>.5+.5*Math.sin(_*.9+1.3)*Math.sin(z*.7-.4)+.25*Math.sin(_*2.3+z*1.7);for(let _=0;_*2<T;_++)for(let z=0;z*2<I;z++)for(let[R,j]of Ko){let J=(_+R)*2,Z=(z+j)*2;if(N0(J,Z))continue;let e0=M0(J,Z),a0=(e0<1.2?.75-.4*e0:.2)*Math.max(.2,g0(J,Z));e()<a0&&h0(J,.002,Z,e0<.8&&e()<.85)}let w0=(_,z,R)=>{let j=Math.hypot(z[0]-_[0],z[1]-_[1]);for(let J=0;J<j;J+=.08){if(e()>.8)continue;let Z=J/j,e0=.04+Math.pow(e(),2)*.3,a0=_[0]+(z[0]-_[0])*Z+R[0]*e0,o0=_[1]+(z[1]-_[1])*Z+R[1]*e0;N0(a0,o0)||h0(a0,.002,o0,!0)}};w0([0,0],[0,I],[1,0]),w0([T,0],[T,I],[-1,0]),w0([0,0],[T,0],[0,1]),w0([0,I],[T,I],[0,-1]),w0([d0,E],[F0,E],[0,-1]),w0([d0,E],[d0,H],[-1,0]),w0([F0,E],[F0,H],[1,0]),w0([U,X],[l0,X],[0,1]),w0([U,0],[U,X],[-1,0]),w0([l0,0],[l0,X],[1,0]);for(let _=0;_<60;_++){let z=Math.floor(e()*3),R,j;z<2?(R=z?$.x1+.08+e()*.38:$.x0-.08-e()*.38,j=$.z0+e()*($.z1-$.z0)):(j=$.z1+.08+e()*.38,R=$.x0+e()*($.x1-$.x0)),s0(R,$.top,j,.04+.06*e(),2+Math.floor(e()*3))}for(let _=0;_<70;_++){let z=e()*2-1,R=Math.floor(e()*4),j=T0.hx+.16+e()*e()*.25,J=T0.hz+.3+e()*e()*.25,Z,e0;R<2?(Z=T0.cx+(R?j:-j),e0=T0.cz-.08+z*J):(e0=T0.cz-.08+(R===2?J:-J),Z=T0.cx+z*j),s0(Z,0,e0,.05+.09*e(),2+Math.floor(e()*4))}for(let _=0;_<6;_++)s0(T0.cx+(e()*2-1)*(T0.hx+.1),.09,T0.cz-.08+(e()<.5?-1:1)*(T0.hz+.08+e()*.12),.03+.04*e(),2);return{walls:t,ground:s,roses:o}}var Zo=`
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
`,Ns=jo.map(t=>Ft([t[0],t[1]-.22,t[2]])),lt=`
	${Zo}
	${me()}

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
		${Oe.map((t,o)=>{let s=Ft(t);return`
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
		vec2 c = p.xz - vec2(${r(V.cx)}, ${r(V.cz)});
		float a = dot(D.xz, D.xz);
		if (a < 1e-6) return vec3(1.0);
		float t1, t2;
		vec3 k = vec3(1.0);
		if (rotHit(c, D.xz, a, ${r((V.ri+V.ro)/2)}, t1, t2) > 0.0) {
			if (t1 > 0.002 && t1 < 0.998) { vec3 h = p + D * t1; if (h.y < ${r(V.top-.2)} && rotOpen(h, ${r((V.ri+V.ro)/2)}) < 0.5) return vec3(0.0); }
			if (t2 > 0.002 && t2 < 0.998) { vec3 h = p + D * t2; if (h.y < ${r(V.top-.2)} && rotOpen(h, ${r((V.ri+V.ro)/2)}) < 0.5) return vec3(0.0); }
		}
		if (rotHit(c, D.xz, a, ${r(V.cloth+.15)}, t1, t2) > 0.0) {
			for (int i = 0; i < 2; i++) {
				float t = i == 0 ? t1 : t2;
				if (t > 0.002 && t < 0.998) {
					vec3 h = p + D * t;
					float an = atan(h.x - ${r(V.cx)}, h.z - ${r(V.cz)});
					bool gap = ${r(V.cloth+.15)} * abs(sin(an)) < ${r(V.gap)};
					if (h.y < ${r(V.top)} && !gap) k *= vec3(0.75, 0.22, 0.2);
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
			vec3 hc = p - vec3(${r(Ne[0])}, ${r(Ne[1])}, ${r(Ne[2])});
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
		float hgt = clamp(p.y / ${r(n0)}, 0.0, 1.0);
		// corners and the foot of the walls get less of the sky
		float dw = min(min(p.x, ${r(T)} - p.x), min(p.z, ${r(I)} - p.z));
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
		if (p.z > ${r(I-6)}) {
			${ho.map(t=>Ft(t)).map(t=>`
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
			${fo.map(t=>Ft(t)).map((t,o)=>`
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
			${Oe.map((t,o)=>`
			{
				float fl = candleFlicker(${r(o*7.31+1.7)});
				vec3 lp = vec3(${r(t[0])}, ${r(t[1])}, ${r(t[2])}) + vec3(sin(candleT * ${r(2.1+o*.37)} + ${r(o)}), 0.0, cos(candleT * ${r(1.7+o*.29)} + ${r(o*2)})) * 0.035 * (1.2 - fl);
				vec3 d = lp - p;
				float dd = dot(d, d);
				vec3 Ld = d * inversesqrt(dd);
				vec3 sh = candleShade(p + N * 0.02, lp);
				vec3 w = sh * (nk * ${r(o===po?4.6:1.4+.3*t[3])} * fl / (0.4 + dd * 0.9));
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
			${Oe.map((t,o)=>{let s=Ft(t);return`
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
`;function Jo(t){let o=new DataView(t),s=o.getUint32(4,!0),n=o.getUint32(8,!0),e=[],a=[];for(let m=0;m<3;m++)e.push(o.getFloat32(12+m*4,!0)),a.push(o.getFloat32(24+m*4,!0));let c=36,l=new Uint16Array(t,c,s*3);c+=s*6;let h=new Uint16Array(t,c,n);c+=n*2;let w=new Int8Array(t,c,s*3);return{nV:s,nI:n,mn:e,sz:a,pos:l,idx:h,nrm:w}}var ee={pending:0},Xt=t=>(ee.pending++,fetch(t).finally(()=>{setTimeout(()=>{ee.pending--},250)}));function at(t,o,s){let n=s&&s.wrap||"clamp";ee.pending++;let e=t.texture({data:[[[0,0,0,0]]],min:"linear",mag:"linear"}),a={tex:e,ready:!1};return fetch(o).then(c=>{if(!c.ok)throw new Error("Could not load "+o);return c.blob()}).then(c=>createImageBitmap(c,{premultiplyAlpha:"none"}).catch(()=>new Promise((l,h)=>{let w=new Image;w.onload=()=>l(w),w.onerror=h,w.src=URL.createObjectURL(c)}))).then(c=>{e({data:c,flipY:!1,min:"mipmap",mipmap:"nice",mag:"linear",wrap:n}),a.ready=!0}).catch(c=>console.error(c)).finally(()=>{ee.pending--}),a}var pe=128,ue=Math.round(($.z1-$.z0)/(11/372)),Qt=($.x1-$.x0)/pe,xo=($.z1-$.z0)/ue,Qo=.02,wo=`
	float simDec(vec2 c) { return (floor(c.x * 255.0 + 0.5) * 256.0 + floor(c.y * 255.0 + 0.5)) / 65535.0 * 2.0 - 1.0; }
	vec2 simEnc(float h) {
		float v = floor(clamp(h * 0.5 + 0.5, 0.0, 1.0) * 65535.0 + 0.5);
		float hi = floor(v / 256.0);
		return vec2(hi, v - hi * 256.0) / 255.0;
	}
`,zt=`
	uniform float stime;
	uniform highp sampler2D simTex;
	${wo}
	float simAt(vec2 i) {
		i = clamp(i, vec2(0.0), vec2(${pe-1}.0, ${ue-1}.0));
		return simDec(texture2D(simTex, (i + 0.5) / vec2(${pe}.0, ${ue}.0)).rg);
	}
	// the height of the water at world xz (metres, tiny)
	float poolHeight(vec2 xz) {
		float h = 0.0018 * sin(xz.x * 2.1 + stime * 0.55) * sin(xz.y * 1.7 - stime * 0.43)
		        + 0.0010 * sin(xz.x * 3.7 - xz.y * 2.9 + stime * 0.8);
#ifndef NO_SIM
		vec2 g = (xz - vec2(${r($.x0+F[0])}, ${r($.z0+F[2])})) / vec2(${r(Qt)}, ${r(xo)}) - 0.5;
		vec2 i = floor(g), fr = g - i;
		float sh = mix(mix(simAt(i), simAt(i + vec2(1.0, 0.0)), fr.x), mix(simAt(i + vec2(0.0, 1.0)), simAt(i + vec2(1.0, 1.0)), fr.x), fr.y);
		h += sh * ${r(Qo)};
#endif
		return h;
	}
`,io=`
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
	${zt}
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
	}`,ts=`
	precision highp float;
	uniform float night, time, yScale, mirrorOn;
	uniform sampler2D padTex, petalTex, reflTex;
	uniform sampler2D rockCol, rockNrm, oldCol, oldNrm, floorCol, floorNrm;
	uniform vec2 reflSize;
	uniform float reflOn;
	uniform mat4 view;
	${zt}
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${lt}

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
			base *= mix(1.0, 0.84, smoothstep(${r(n0-2.2)}, ${r(n0)}, p.y));
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
			float low = 1.0 - smoothstep(0.0, ${r($.top+.35)}, p.y);
			float moss = low * smoothstep(0.35, 0.65, fbm3(p * 4.0 + 2.0));
			base = mix(base, vec3(0.10, 0.12, 0.065), moss * 0.6);
			base *= mix(0.72, 1.0, smoothstep(0.0, 0.22, p.y));
			if (is(${q.HOLLOW}.0)) {
				// the hollow: older, damper, never washed by the sun
				base *= vec3(0.70, 0.73, 0.68) * (0.85 + 0.15 * smoothstep(${r(Q.floor)}, ${r(Q.spring)}, p.y));
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
			base *= mix(1.0, 0.9, smoothstep(${r(n0-2)}, ${r(n0)}, p.y));
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
			float wallD = min(min(p.x, ${r(T)} - p.x), min(p.z, ${r(I)} - p.z));
			base *= mix(0.72, 1.0, smoothstep(0.0, 1.2, wallD));
			N = normalize(N + (vec3(1.0, 0.0, 0.0) * (tn.r * 2.0 - 1.0) + vec3(0.0, 0.0, -1.0) * (tn.g * 2.0 - 1.0)) * 1.2);
			gloss = 0.12;
			aoK = mix(0.5, 1.0, tn.b) * mix(0.62, 1.0, smoothstep(0.0, 0.9, wallD));
			// the curb throws a soft shadow round the pool
			vec2 dq = max(vec2(${r($.x0-$.curb)} - p.x, p.x - ${r($.x1+$.curb)}), vec2(${r($.z0-$.curb)} - p.z, p.z - ${r($.z1+$.curb)}));
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
			float lowm = 1.0 - smoothstep(${r(D0.plinth+.2)}, ${r(D0.plinth+1.6)}, p.y);
			float moss = smoothstep(0.5, 0.4, mn - up * 0.12 - lowm * 0.1) * (0.12 + 0.88 * up * up + 0.3 * lowm);
			moss = clamp(moss * (0.75 + 0.5 * mf), 0.0, 1.0);
			vec3 mossC = mix(vec3(0.12, 0.15, 0.06), vec3(0.25, 0.29, 0.11), mf);
			base = mix(base, mossC, moss * 0.8);
			N = normalize(N + (vec3(mf, 0.0, mn) - 0.5) * moss * 0.6);
			base *= mix(0.62, 1.0, smoothstep(-0.7, 0.35, N.y));
			float foot = 1.0 - smoothstep(${r(D0.plinth)}, ${r(D0.plinth+.7)}, p.y);
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
			float e = ${r(Qt)};
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
	}`,Rt={tex:null,dummy:null};function es(t){if(Rt.tex)return;let o=typeof navigator!="undefined"&&/Mobi|Android|iPhone|iPad/.test(navigator.userAgent),s=Math.min(o?1024:2048,t.limits.maxTextureSize),n=t.texture({width:s,height:s,min:"linear",mag:"linear",wrap:"clamp"}),e=t.framebuffer({color:n,depth:!1});t({vert:`
		precision highp float;
		attribute vec2 pos;
		varying vec2 uv;
		void main() { uv = pos * 0.5 + 0.5; gl_Position = vec4(pos, 0.0, 1.0); }`,frag:`
		precision highp float;
		varying vec2 uv;
		uniform float night;
		${me("bake")}
		void main() {
			vec2 qs = vec2(${r(nt.sun[0])}, ${r(nt.sun[1])}) + uv * vec2(${r(nt.sun[2])}, ${r(nt.sun[3])});
			vec2 qm = vec2(${r(nt.moon[0])}, ${r(nt.moon[1])}) + uv * vec2(${r(nt.moon[2])}, ${r(nt.moon[3])});
			gl_FragColor = vec4(studioExit(vec3(qs.x, ${r(n0)}, qs.y), STUDIO_SUN_D), studioExit(vec3(qm.x, ${r(n0)}, qm.y), STUDIO_MOON_D));
		}`,attributes:{pos:[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]},uniforms:{night:0},count:6,depth:{enable:!1},framebuffer:e})(),Rt.tex=n}function os(t){return Rt.tex?Rt.tex:(Rt.dummy||(Rt.dummy=t.texture({width:1,height:1,data:[0,0,0,0]})),Rt.dummy)}K0.exports=function(t){es(t);let o=Uo();Co(o),Vo(o),Io(o),Do(o),Lo(o);let s={enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"zero"}},n=performance.now(),e={t:0},a=0,c=t._gl,l=!!(c&&c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS)>0),h=N=>l?N:`#define NO_SIM
`+N,w=(()=>{let N=pe,L=ue,A=new Uint8Array(N*L*4);for(let S0=0;S0<N*L;S0++)A[S0*4]=128,A[S0*4+2]=128;let i0=()=>t.framebuffer({color:t.texture({width:N,height:L,data:A,min:"nearest",mag:"nearest",wrap:"clamp"}),depth:!1,stencil:!1}),Y=[i0(),i0()],G=0,B=new Uint8Array(N*L*4);for(let S0=0;S0<L;S0++)for(let G0=0;G0<N;G0++){let O0=$.x0+(G0+.5)*Qt,P0=$.z0+(S0+.5)*xo,E0=Math.abs(O0-D0.x)<.43&&Math.abs(P0-D0.z)<.43,A0=0;for(let R0 of Te)A0=Math.max(A0,1-Math.min(1,Math.max(0,(Math.hypot(O0-R0[0],P0-R0[1])-R0[2]*.7)/(R0[2]*.3))));let k0=(S0*N+G0)*4;B[k0]=E0?0:255,B[k0+1]=Math.round(A0*255),B[k0+3]=255}let r0=t.texture({width:N,height:L,data:B,min:"nearest",mag:"nearest",wrap:"clamp"}),c0=16,x0=[];for(let S0=0;S0<c0;S0++)x0.push([0,0,0,.04]);let _0={prev:t.prop("prev"),mask:r0};for(let S0=0;S0<c0;S0++)_0["src["+S0+"]"]=(G0=>()=>x0[G0])(S0);let y0=Math.pow(.36*(1/60)/Qt,2),p0=t({vert:"precision highp float; attribute vec2 position; varying vec2 uv; void main() { uv = position * 0.5 + 0.5; gl_Position = vec4(position, 0.0, 1.0); }",frag:`
			precision highp float;
			uniform highp sampler2D prev, mask;
			uniform vec4 src[${c0}];
			varying vec2 uv;
			${wo}
			void main() {
				vec2 px = 1.0 / vec2(${N}.0, ${L}.0);
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
				float hn = h + (h - hp) * damp + ${r(y0)} * lap;
				hn *= 0.9993;
				// whatever touched the water this moment
				vec2 p = vec2(${r($.x0+F[0])}, ${r($.z0+F[2])}) + uv * vec2(${r($.x1-$.x0)}, ${r($.z1-$.z0)});
				for (int i = 0; i < ${c0}; i++) {
					vec4 s = src[i];
					if (s.z == 0.0) continue;
					vec2 dd = p - s.xy;
					hn += s.z * exp(-dot(dd, dd) / (s.w * s.w));
				}
				gl_FragColor = vec4(simEnc(clamp(hn, -1.0, 1.0)), simEnc(h));
			}`,attributes:{position:[-1,-1,1,-1,-1,1,1,1]},primitive:"triangle strip",count:4,framebuffer:t.prop("out"),uniforms:_0,depth:{enable:!1,mask:!1},blend:{enable:!1},cull:{enable:!1},viewport:{x:0,y:0,width:N,height:L}}),Q0=[],B0=0,V0=0;return{tex:()=>Y[G].color[0],drop(S0,G0,O0,P0){Q0.push([S0,G0,B0,O0,0,P0||.035]),typeof window!="undefined"&&window.__dropLog&&window.__dropLog.push([S0,G0,B0,O0])},advance(S0,G0){let O0=S0-B0-V0;if(O0<0||O0>2){B0=S0,V0=0;return}V0+=O0;let P0=0;for(;V0>=1/60&&P0<8;){V0-=1/60,B0+=1/60,P0++;let E0=0;for(let A0=Q0.length-1;A0>=0;A0--){let k0=Q0[A0],R0=B0-k0[2];if(R0>1.4){Q0.splice(A0,1);continue}if(E0>=c0)continue;let It=k0[3]*.05*Math.sin(R0*2*Math.PI*2.4)*Math.exp(-R0*3.2),tt=x0[E0++];tt[0]=k0[0],tt[1]=k0[1],tt[2]=It,tt[3]=k0[5]}for(let A0 of G0){if(E0>=c0)break;let k0=x0[E0++];k0[0]=A0[0],k0[1]=A0[1],k0[2]=A0[2],k0[3]=A0[3]}for(;E0<c0;E0++)x0[E0][2]=0;p0({prev:Y[G].color[0],out:Y[1-G]}),G=1-G}P0===8&&(V0=0,B0=S0)},read(){return t.read({framebuffer:Y[G]})}}})(),m=()=>{e.t=(performance.now()-n)/1e3,typeof window!="undefined"&&window.__studioFreeze!=null&&(e.t=window.__studioFreeze);for(let A of so){let i0=Fo(A,e.t),Y=i0.ph-i0.Tf;i0.inPool&&Y>=0&&Y<.5&&!(A.heard>e.t-1)&&(A.heard=e.t,w.drop(i0.lx+F[0],i0.lz+F[2],1.1,.04))}let N=e.t-L0.sim.t;for((N<0||N>120)&&(N=Math.min(Math.max(N,0),120));N>1e-6;){let A=Math.min(N,.05);L0.sim.step(A),N-=A}for(let A of L0.sim.events)A[2]>a&&(a=A[2],w.drop(A[0]+F[0],A[1]+F[2],A[3]*1.3,A[3]>=1?.07:.04));let L=[];for(let A of L0.sim.fish){let i0=Math.min(1,Math.max(0,(A.y+.15)/.09));if(i0<=0)continue;let Y=.008*i0*Math.min(1.5,A.v/.15);L.push([A.x+F[0]+Math.cos(A.th)*.02,A.z+F[2]+Math.sin(A.th)*.02,Y,.045]),L.push([A.x+F[0]-Math.cos(A.th)*.14,A.z+F[2]-Math.sin(A.th)*.14,-Y,.055])}w.advance(e.t,L)},S={stime:()=>e.t,simTex:()=>w.tex()};typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__studioClock=e,window.__pondSim=w);let x=t.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),g=x,f=[4,4],v=0,b=t({}),i=()=>b(N=>{if(u){u=!1;return}let L=N.viewportWidth,A=N.viewportHeight;x.width!==L||x.height!==A?x({copy:!0,width:L,height:A,min:"linear",mag:"linear",wrap:"clamp"}):x.subimage({copy:!0,width:L,height:A}),g=x,f[0]=L,f[1]=A,v=1}),d=t.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),p=t.framebuffer({color:d,depth:!0}),y=t({framebuffer:p}),k=t.texture({width:1,height:1,data:[0,0,0,255]}),u=!1,M=0,O=!1,D=(N,L)=>b(A=>{let i0=A.viewportWidth,Y=A.viewportHeight,G=Math.max(2,Math.round(i0/2)),B=Math.max(2,Math.round(Y/2)),r0=!O;if((p.width!==G||p.height!==B)&&(p.resize(G,B),r0=!0),f[0]=i0,f[1]=Y,u=!0,v=1,!r0&&++M%L!==0){g=d;return}g=k,y(()=>{t.clear({color:[0,0,0,1],depth:1}),N()}),g=d,O=!0}),K=at(t,"res/pond/lilypad.webp"),s0=at(t,"res/pond/petals.webp"),t0=at(t,"res/studio/rock_col.webp",{wrap:"repeat"}),P=at(t,"res/studio/rock_nrm.webp",{wrap:"repeat"}),h0=at(t,"res/studio/oldstone_col.webp",{wrap:"repeat"}),d0=at(t,"res/studio/oldstone_nrm.webp",{wrap:"repeat"}),F0=at(t,"res/studio/floor_col.webp",{wrap:"repeat"}),E=at(t,"res/studio/floor_nrm.webp",{wrap:"repeat"}),H=Object.assign({padTex:()=>K.tex,petalTex:()=>s0.tex,reflTex:()=>g,reflSize:()=>f,reflOn:()=>v,rockCol:()=>t0.tex,rockNrm:()=>P.tex,oldCol:()=>h0.tex,oldNrm:()=>d0.tex,floorCol:()=>F0.tex,floorNrm:()=>E.tex},S),U=(N,L)=>t({vert:h(io),frag:ts,attributes:{position:N.pos,normal:N.nrm,kind:N.kind,uv:N.uv,anchor:N.anchor&&N.anchor.length?N.anchor:new Float32Array(N.pos.length/3*4)},elements:new Uint32Array(N.idx),count:L||N.idx.length,uniforms:H,cull:{enable:!1},blend:s}),l0=U(o),X=null;Xt(D0.file).then(N=>{if(!N.ok)throw new Error("Could not load "+D0.file);return N.arrayBuffer()}).then(N=>{let L=Jo(N),A={pos:[],nrm:[],kind:[],uv:[],anchor:null,idx:[]},i0=D0.height,Y=Math.cos(D0.yaw),G=Math.sin(D0.yaw);for(let B=0;B<L.nV;B++){let r0=(L.mn[0]+L.pos[B*3]/65535*L.sz[0])*i0,c0=(L.mn[1]+L.pos[B*3+1]/65535*L.sz[1])*i0,x0=(L.mn[2]+L.pos[B*3+2]/65535*L.sz[2])*i0;A.pos.push(D0.x+Y*r0+G*x0+F[0],D0.plinth+c0+F[1],D0.z-G*r0+Y*x0+F[2]);let _0=L.nrm[B*3]/127,y0=L.nrm[B*3+1]/127,p0=L.nrm[B*3+2]/127;A.nrm.push(Y*_0+G*p0,y0,-G*_0+Y*p0),A.kind.push(q.MARBLE),A.uv.push(0,0)}for(let B=0;B<L.nI;B++)A.idx.push(L.idx[B]);X=U(A)}).catch(N=>console.error(N));let v0=null,N0=at(t,T0.tex);Xt(T0.file).then(N=>{if(!N.ok)throw new Error("Could not load "+T0.file);return N.arrayBuffer()}).then(N=>{let L=new DataView(N),A=L.getUint32(4,!0),i0=L.getUint32(8,!0),Y=12,G=new Float32Array(N,Y,A*3);Y+=A*12;let B=new Uint16Array(N,Y,A*2);Y+=A*4;let r0=new Uint16Array(N,Y,i0);Y+=i0*2;let c0=new Int8Array(N,Y,A*3),x0=new Float32Array(A*3),_0=new Float32Array(A*3),y0=new Float32Array(A*2);for(let p0=0;p0<A;p0++)x0[p0*3]=G[p0*3]+F[0],x0[p0*3+1]=G[p0*3+1]+F[1],x0[p0*3+2]=G[p0*3+2]+F[2],_0[p0*3]=c0[p0*3]/127,_0[p0*3+1]=c0[p0*3+1]/127,_0[p0*3+2]=c0[p0*3+2]/127,y0[p0*2]=B[p0*2]/65535,y0[p0*2+1]=1-B[p0*2+1]/65535;v0=t({vert:`
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
				${lt}
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
				}`,attributes:{position:x0,normal:_0,uv:y0},elements:r0,uniforms:{graveTex:()=>N0.tex},cull:{enable:!1}})}).catch(N=>console.error(N));let M0=null,g0=at(t,"res/conservatory/flower.webp"),w0=new Float32Array(16);Xt("res/conservatory/flower.bin").then(N=>{if(!N.ok)throw new Error("Could not load the flower");return N.arrayBuffer()}).then(N=>{let L=new DataView(N),A=L.getUint32(4,!0),i0=L.getUint32(8,!0),Y=12,G=new Float32Array(N.slice(Y,Y+A*12));Y+=A*12;let B=new Uint16Array(N,Y,A*2);Y+=A*4;let r0=new Uint16Array(N.slice(Y,Y+i0*2));Y+=i0*2;let c0=new Int8Array(N,Y,A*3),x0=new Float32Array(A*3),_0=new Float32Array(A*2);for(let y0=0;y0<A*3;y0++)x0[y0]=c0[y0]/127;for(let y0=0;y0<A;y0++)_0[y0*2]=B[y0*2]/65535,_0[y0*2+1]=1-B[y0*2+1]/65535;M0=t({vert:`
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
				${lt}
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
				}`,attributes:{position:G,normal:x0,uv:_0},elements:r0,uniforms:{flowerTex:()=>g0.tex,model:()=>w0,glow:()=>St.glow},cull:{enable:!1}})}).catch(N=>console.error(N));let _=at(t,"res/tree/leaves.webp"),z=Ho(),R=t({vert:h(`
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
		${lt}
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
		}`,attributes:{position:z.pos,normal:z.nrm,uv:z.uv,shade:z.shade,flower:z.flower},elements:new Uint32Array(z.idx),uniforms:{tex:_.tex},cull:{enable:!1}}),j=at(t,"res/studio/plants.webp"),J=at(t,"res/studio/vleaves.webp"),Z=Xo(),e0=N=>t({vert:h(`
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
		${lt}
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
		}`,attributes:{position:N.pos,normal:N.nrm,uv:N.uv,info:N.info},elements:new Uint32Array(N.idx),uniforms:{tex:j.tex,tex2:J.tex},cull:{enable:!1}}),a0=e0(Z.walls),o0=Oo(),f0=t({vert:h(`
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
			vec2 c = position.xz - vec2(${r(V.cx+F[0])}, ${r(V.cz+F[2])});
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
			float lat = ${r(V.cloth)} * abs(sin(a));
			float edge = (1.0 - smoothstep(${r(V.gap)}, ${r(V.gap+.9)}, lat)) * step(abs(sin(a)), 0.7);
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
				float wgt = (1.0 - smoothstep(${r(V.gap)}, ${r(V.gap+1.9)}, ax)) * step(${r(V.gap-.05)}, ax) * step(0.55, abs(out2.y));
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
		${lt}
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
		}`,attributes:{position:o0.pos,normal:o0.nrm,uv:o0.uv,sw:o0.sw},uniforms:{windK:()=>de.k,closeK:()=>de.close},elements:new Uint32Array(o0.idx),cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",srcAlpha:"one",dstRGB:"one minus src alpha",dstAlpha:"one minus src alpha"}}}),z0=at(t,"res/studio/rose_col.webp"),u0=null;Xt("res/studio/rose.bin").then(N=>{if(!N.ok)throw new Error("Could not load res/studio/rose.bin");return N.arrayBuffer()}).then(N=>{let L=new DataView(N).getUint32(4,!0),A=new Float32Array(N,8,L*8),i0=new Float32Array(Z.roses.length*L*3),Y=new Float32Array(i0.length),G=new Float32Array(Z.roses.length*L*2),B=0;for(let r0 of Z.roses){let c0=r0.f,x0=Math.abs(c0[1])>.9?[1,0,0]:[0,1,0],_0=[x0[1]*c0[2]-x0[2]*c0[1],x0[2]*c0[0]-x0[0]*c0[2],x0[0]*c0[1]-x0[1]*c0[0]],y0=Math.hypot(..._0),p0=_0.map(O0=>O0/y0),Q0=[c0[1]*p0[2]-c0[2]*p0[1],c0[2]*p0[0]-c0[0]*p0[2],c0[0]*p0[1]-c0[1]*p0[0]],B0=Math.cos(r0.spin),V0=Math.sin(r0.spin),S0=p0.map((O0,P0)=>O0*B0+Q0[P0]*V0),G0=Q0.map((O0,P0)=>O0*B0-p0[P0]*V0);for(let O0=0;O0<L;O0++){let P0=A[O0*8],E0=A[O0*8+1],A0=A[O0*8+2],k0=A[O0*8+3],R0=A[O0*8+4],It=A[O0*8+5];for(let tt=0;tt<3;tt++)i0[B*3+tt]=r0.at[tt]+F[tt]+(S0[tt]*P0+G0[tt]*E0+c0[tt]*A0)*r0.size,Y[B*3+tt]=S0[tt]*k0+G0[tt]*R0+c0[tt]*It;G[B*2]=A[O0*8+6],G[B*2+1]=A[O0*8+7],B++}}u0=t({vert:h(`
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
				${lt}
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
				}`,attributes:{position:i0,normal:Y,uv:G},count:B,uniforms:{tex:z0.tex},cull:{enable:!1}})}).catch(N=>console.error(N));let q0=e0(Z.ground);typeof location!="undefined"&&/tourdebug/.test(location.search)&&console.log("studio greenery: ivy verts",Z.walls.pos.length/3,"ground verts",Z.ground.pos.length/3);let b0=(()=>{let N=[],L=[];for(let G=0;G<=14;G++)for(let B=0;B<=6*2;B++)N.push([G/14,B/6-1]);let Y=6*2+1;for(let G=0;G<14;G++)for(let B=0;B<6*2;B++){let r0=G*Y+B;L.push([r0,r0+Y,r0+Y+1],[r0,r0+Y+1,r0+1])}return{uvw:N,idx:L}})(),m0=t({vert:h(`
		precision highp float;
		uniform mat4 proj, view, gModel;
		uniform float yScale, gFloat, gSize, gFlex, gFlutter, gAng, time;
		uniform vec3 gPos;
		attribute vec2 uvw;
		varying vec3 v_pos, v_nrm, v_eye;
		varying vec2 v_uv;
		${zt}
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
		${lt}
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
		}`,attributes:{uvw:b0.uvw},elements:b0.idx,uniforms:Object.assign({gModel:()=>ut.model,gPos:()=>{let N=L0.sim.crumbs[0];return[N.x+F[0],0,N.z+F[2]]},gAng:()=>ut.ang,gSize:()=>ut.size,gFlex:()=>ut.flex,gFlutter:()=>ut.flutter,gFloat:()=>ut.floating?1:0},S),cull:{enable:!1}}),$0=(()=>{let N={corner:[],start:[],par:[],misc:[],idx:[]};return so.forEach((L,A)=>{for(let i0 of[[-1,-1],[1,-1],[1,1],[-1,1]])N.corner.push(i0[0],i0[1]),N.start.push(L.start[0]+F[0],L.start[1],L.start[2]+F[2]),N.par.push(L.period,L.offset,L.drift[0],L.drift[1]),N.misc.push(L.speed,L.seed,L.white);N.idx.push(A*4,A*4+1,A*4+2,A*4,A*4+2,A*4+3)}),N})(),U0=t({vert:h(`
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
		${zt}
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
			bool inPool = lq.x > ${r(Tt[0])} && lq.x < ${r(Tt[2])} && lq.y > ${r(Tt[1])} && lq.y < ${r(Tt[3])};
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
		${lt}
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
		}`,attributes:{corner:$0.corner,start:$0.start,par:$0.par,misc:$0.misc},elements:new Uint32Array($0.idx),uniforms:S,cull:{enable:!1}}),L0={sim:Po(),ready:!1};it=L0.sim,typeof location!="undefined"&&/tourdebug/.test(location.search)&&(window.__koi=L0.sim);let vt=Object.assign({},S);wt.forEach((N,L)=>{vt["koiA["+L+"]"]=()=>{let A=L0.sim.fish[L];return[A.x+F[0],A.y,A.z+F[2],A.th]},vt["koiB["+L+"]"]=()=>{let A=L0.sim.fish[L];return[A.kappa,A.ph,A.amp,A.pitch]}});let C0=(()=>{let L=Math.round(96*($.z1-$.z0)/($.x1-$.x0)),A=new Uint8Array(96*L*4),i0=[-ht[0]/ht[1]*-Yt,-ht[2]/ht[1]*-Yt],Y=96/($.x1-$.x0),G=L/($.z1-$.z0);for(let B=0;B<L;B++)for(let r0=0;r0<96;r0++){let c0=$.x0+(r0+.5)/Y,x0=$.z0+(B+.5)/G,_0=0;for(let y0 of Te){let p0=Math.hypot(c0-(y0[0]+i0[0]),x0-(y0[1]+i0[1]));_0=Math.max(_0,1-Math.min(1,Math.max(0,(p0-y0[2]*.82)/(y0[2]*.35))))}A[(B*96+r0)*4]=Math.round(_0*255),A[(B*96+r0)*4+3]=255}return t.texture({width:96,height:L,data:A,min:"linear",mag:"linear"})})(),j0=`
		uniform vec4 koiA[${wt.length}], koiB[${wt.length}];
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
	`,H0=`
		uniform vec4 koiA[${wt.length}], koiB[${wt.length}];
		uniform sampler2D padShadow;
		const vec3 W_SUN = vec3(${r(ht[0])}, ${r(ht[1])}, ${r(ht[2])});
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
			vec2 back = W_SUN.xz / W_SUN.y * (pw.y - ${r(Yt)});
			vec2 uv = (lp - back - vec2(${r($.x0)}, ${r($.z0)})) / vec2(${r($.x1-$.x0)}, ${r($.z1-$.z0)});
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
			float e = ${r(Qt)};
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
	`,J0=(()=>{let N=[],L=[],A=[],i0=[],Y=(y0,p0,Q0,B0,V0)=>(N.push(y0+F[0],p0,Q0+F[2]),L.push(...B0),A.push(V0),N.length/3-1),G=(y0,p0,Q0,B0,V0,S0,G0)=>{let O0=N.length/3;for(let P0=0;P0<=B0;P0++)for(let E0=0;E0<=V0;E0++)Y(y0[0]+p0[0]*P0/B0+Q0[0]*E0/V0,y0[1]+p0[1]*P0/B0+Q0[1]*E0/V0,y0[2]+p0[2]*P0/B0+Q0[2]*E0/V0,S0,G0);for(let P0=0;P0<B0;P0++)for(let E0=0;E0<V0;E0++){let A0=O0+P0*(V0+1)+E0;i0.push(A0,A0+1,A0+V0+2,A0,A0+V0+2,A0+V0+1)}},{x0:B,x1:r0,z0:c0,z1:x0}=$,_0=Yt;return G([B,_0,c0],[r0-B,0,0],[0,0,x0-c0],8,22,[0,1,0],0),G([B,0,c0],[0,0,x0-c0],[0,_0,0],22,2,[1,0,0],1),G([r0,0,c0],[0,0,x0-c0],[0,_0,0],22,2,[-1,0,0],1),G([B,0,c0],[r0-B,0,0],[0,_0,0],8,2,[0,0,1],1),G([B,0,x0],[r0-B,0,0],[0,_0,0],8,2,[0,0,-1],1),{pos:N,nrm:L,kd:A,idx:i0}})(),Ot=at(t,"res/pond/gravel.jpg",{wrap:"repeat"}),Pt=Object.assign({padShadow:C0,gravel:()=>Ot.tex,reflTex:()=>g,reflSize:()=>f,reflOn:()=>v},vt),Ut=t({vert:h(`
		precision highp float;
		uniform mat4 proj, view;
		attribute vec3 position, normal;
		attribute float kd;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kd;
		${zt}
		${j0}
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
		${zt}
		${lt}
		${H0}
		float klen(int i) {
			${wt.map((N,L)=>`if (i == ${L}) return ${r(N.len)};`).join(" ")}
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
				base = mix(base, vec3(0.10, 0.13, 0.07), smoothstep(-0.05, ${r(Yt)}, v_pos.y) * 0.75);
			}
			vec3 spec; float sv;
			vec3 light = studioLight(vec3(v_pos.x - W_SUN.x / W_SUN.y * v_pos.y, 0.02, v_pos.z - W_SUN.z / W_SUN.y * v_pos.y), N, V, 0.1, spec, sv);
			vec3 sunPart;
			vec3 lit = underSun(v_pos, N, sv, sunPart);
			// the koi's shadows, softer the higher they swim above the bed
			float sh = 0.0;
			for (int i = 0; i < ${wt.length}; i++) {
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
		}`,attributes:{position:J0.pos,normal:J0.nrm,kd:J0.kd},elements:new Uint16Array(J0.idx),uniforms:Pt,cull:{enable:!1},depth:{enable:!0,mask:!1,func:"less"},blend:s}),Ct=at(t,"res/koi.webp"),pt=null,Mt=null;Xt("res/koi.bin").then(N=>{if(!N.ok)throw new Error("Could not load res/koi.bin");return N.arrayBuffer()}).then(N=>{let L=new DataView(N),A=L.getUint32(4,!0),i0=L.getUint32(8,!0),Y=L.getFloat32(12,!0),G=16,B=new Uint16Array(N,G,A);G+=A*2;let r0=new Int16Array(N,G,A*2);G+=A*4;let c0=new Uint16Array(N,G,A*2);G+=A*4;let x0=new Uint16Array(N,G,i0);G+=i0*2;let _0=new Int8Array(N,G,A*3);G+=A*3;let y0=new Uint8Array(N,G,A*2),p0=wt.length,Q0=new Float32Array(A*3*p0),B0=new Float32Array(A*3*p0),V0=new Float32Array(A*2*p0),S0=new Float32Array(A*2*p0),G0=new Float32Array(A*4*p0);wt.forEach((E0,A0)=>{for(let k0=0;k0<A;k0++){let R0=A0*A+k0;Q0[R0*3]=B[k0]/65535*1.2,Q0[R0*3+1]=r0[k0*2]/32767*Y,Q0[R0*3+2]=r0[k0*2+1]/32767*Y,B0[R0*3]=_0[k0*3]/127,B0[R0*3+1]=_0[k0*3+1]/127,B0[R0*3+2]=_0[k0*3+2]/127,V0[R0*2]=c0[k0*2]/65535,V0[R0*2+1]=c0[k0*2+1]/65535,S0[R0*2]=y0[k0*2]/255,S0[R0*2+1]=y0[k0*2+1]/255,G0[R0*4]=E0.len,G0[R0*4+1]=E0.kind,G0[R0*4+2]=A0,G0[R0*4+3]=0}});let O0=[],P0=[];for(let E0=0;E0<p0;E0++)for(let A0=0;A0<i0;A0+=3){let k0=x0[A0],R0=x0[A0+1],It=x0[A0+2];(Math.max(y0[k0*2],y0[R0*2],y0[It*2])>140?P0:O0).push(k0+E0*A,R0+E0*A,It+E0*A)}Mt={body:t.elements({data:new Uint32Array(O0),type:"uint32"}),fins:t.elements({data:new Uint32Array(P0),type:"uint32"})},pt=t({vert:h(`
				precision highp float;
				uniform mat4 proj, view;
				attribute vec3 loc, nrm;
				attribute vec2 uv, fin;
				attribute vec4 km;
				varying vec3 v_pos, v_nrm, v_eye;
				varying vec2 v_uv;
				varying float v_kind, v_fin, v_depth, v_seed, v_u;
				${zt}
				${j0}
				void main() {
					float len = km.x;
					int fi = int(km.z + 0.5);
					vec4 A = koiA[0], B = koiB[0];
					for (int i = 1; i < ${wt.length}; i++) if (i == fi) { A = koiA[i]; B = koiB[i]; }
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
				${zt}
				${lt}
				${H0}
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
				}`,attributes:{loc:Q0,nrm:B0,uv:V0,fin:S0,km:G0},elements:t.prop("els"),uniforms:Object.assign({koiTex:()=>Ct.tex,padShadow:C0,reflTex:()=>g,reflSize:()=>f,reflOn:()=>v},vt),cull:{enable:!1},colorMask:t.prop("color"),depth:{enable:!0,mask:t.prop("write"),func:t.prop("func")},blend:s}),L0.ready=!0}).catch(N=>console.error(N));let ce=()=>{pt&&(pt({els:Mt.body,color:[!1,!1,!1,!1],write:!0,func:"less"}),pt({els:Mt.body,color:[!0,!0,!0,!0],write:!1,func:"lequal"}),pt({els:Mt.fins,color:[!0,!0,!0,!0],write:!1,func:"less"}))},_e=(()=>{let N={cp:[],ci:[],idx:[]};for(let L=0;L<Jt;L++){let A=N.cp.length/3,i0=5,Y=7;for(let G=0;G<=i0;G++)for(let B=0;B<Y;B++){let r0=G/i0*Math.PI,c0=B/Y*Math.PI*2,x0=1+.35*Math.sin(c0*3+L*1.7)*Math.sin(r0*2+L);N.cp.push(Math.sin(r0)*Math.cos(c0)*x0,Math.cos(r0)*.6,Math.sin(r0)*Math.sin(c0)*x0*(.8+.4*(L*.37%1))),N.ci.push(L)}for(let G=0;G<i0;G++)for(let B=0;B<Y;B++){let r0=A+G*Y+B,c0=A+G*Y+(B+1)%Y,x0=A+(G+1)*Y+B,_0=A+(G+1)*Y+(B+1)%Y;N.idx.push(r0,c0,_0,r0,_0,x0)}}return N})(),Ke=Object.assign({},S);for(let N=0;N<Jt;N++)Ke["crumbs["+N+"]"]=()=>{let L=L0.sim.crumbs[N],A=L0.sim.t,i0=L.alive&&!L0.sim.feed.petal?Math.min(1,Math.max(0,(A-L.born)/.25)):0;return[L.x+F[0],L.z+F[2],i0,L.seed]};let zo=t({vert:h(`
		precision highp float;
		uniform mat4 proj, view;
		uniform vec4 crumbs[${Jt}];
		attribute vec3 cp;
		attribute float ci;
		varying vec3 v_pos, v_nrm, v_eye;
		${zt}
		void main() {
			int k = int(ci + 0.5);
			vec4 c = crumbs[0];
			for (int i = 1; i < ${Jt}; i++) if (i == k) c = crumbs[i];
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
		${lt}
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
		}`,attributes:{cp:_e.cp,ci:_e.ci},elements:new Uint32Array(_e.idx),uniforms:Ke,cull:{enable:!1}}),Vt=Go(),$o=t({vert:h(io),frag:`
		precision highp float;
		uniform float night, time;
		varying vec3 v_pos, v_nrm, v_eye;
		varying float v_kind;
		varying vec2 v_uv;
		${lt}
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
		}`,attributes:{position:Vt.pos,normal:Vt.nrm,kind:Vt.kind,uv:Vt.uv,anchor:Vt.anchor},uniforms:S,elements:new Uint32Array(Vt.idx),cull:{enable:!1},depth:{mask:!1},blend:s}),Ye=(()=>{let N={pos:[],idx:[]},L=300,A=24,i0=12;for(let Y=0;Y<=i0;Y++){let G=-.25*W+Y/i0*.75*W;for(let B=0;B<=A;B++){let r0=B/A*2*W;N.pos.push(F[0]+T/2+L*Math.cos(G)*Math.cos(r0),L*Math.sin(G),F[2]+I/2+L*Math.cos(G)*Math.sin(r0))}}for(let Y=0;Y<i0;Y++)for(let G=0;G<A;G++){let B=Y*(A+1)+G,r0=B+1,c0=B+A+2,x0=B+A+1;N.idx.push(B,r0,c0,B,c0,x0)}return N})(),So=t({vert:h(`
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
		${lt}
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
		void main() {`),attributes:{position:Ye.pos},elements:new Uint32Array(Ye.idx),cull:{enable:!1}}),Xe=typeof navigator!="undefined"&&/Mobi|Android|iPhone|iPad/.test(navigator.userAgent),re=Xe?2600:6500,le=[];{let N=kt(4242),L=(i0,Y,G)=>{let B=-i0/ht[0],r0=Y+ht[1]*B,c0=G+ht[2]*B;return C.c.some(x0=>{let _0=gt(c0-x0);return _0!==null&&r0>C.sill&&r0<_0})},A=0;for(;le.length<re&&A++<re*60;){let i0=[.2+N()*(T-.4),.1+N()*(n0+1),.2+N()*(I-.4)];le.length<re*.8&&!L(...i0)||le.push([...i0,N()])}}let ko=t({vert:`
		precision highp float;
		uniform mat4 proj, view;
		uniform float time, night, pixelScale;
		attribute vec4 seed;
		varying float v_light, v_seed, v_spark;
		${me(t.limits.maxVertexTextureUnits>0?"baked":"analytic")}
		void main() {
			float s = seed.w * 6.2831;
			vec3 p = seed.xyz;
			// slow drifting and turning, a faint settling, never in step
			p += vec3(sin(time * 0.10 + s * 3.0) * 0.32 + sin(time * 0.043 + s * 7.0) * 0.2,
			          sin(time * 0.07 + s * 5.0) * 0.25 - 0.015 * time * (0.4 + seed.w),
			          cos(time * 0.085 + s * 2.0) * 0.32 + cos(time * 0.037 + s * 9.0) * 0.2);
			p.y = mod(p.y - 0.1, ${r(n0+1)}) + 0.1;
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
			float size = sharp + blur * ${Xe?"12.0":"20.0"} * (0.6 + 0.4 * seed.w);
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
		}`,attributes:{seed:le},count:re,primitive:"points",uniforms:{pixelScale:N=>N.viewportHeight*.0055},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"one",dstRGB:"one",srcAlpha:"zero",dstAlpha:"one"}},cull:{enable:!1}});function Ze(N){let L=!!(N&&N.reflected);L||(i(),m()),So(),l0(),L||(Ut(),ce(),zo()),X&&X(),v0&&v0(),M0&&St.k>=0&&(as(St.k,w0),M0()),R(),L||(a0(),u0&&u0(),q0()),U0(),ut.vis&&!(ut.floating&&L0.sim.feed.eaten)&&m0(),f0(),L||($o(),ko())}return Ze.reflect=D,Ze};var it=null,ut={vis:!1,model:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],ang:0,size:.09,flex:0,flutter:0,floating:!1},St={k:-1,glow:0,at:[T0.cx+.06,T0.top-.004,T0.cz-.1],yaw:0};function ss(t,o){St.k=t,St.glow=o||0}function as(t,o){let s=Math.max(0,Math.min(1,t)),n=(1-s)*(1-s)*.6,e=-(1-s)*1.05,a=St.yaw+(1-s)*.5,c=Math.cos(a),l=Math.sin(a),h=Math.cos(e),w=Math.sin(e);o[0]=c,o[1]=0,o[2]=-l,o[3]=0,o[4]=l*w,o[5]=h,o[6]=c*w,o[7]=0,o[8]=l*h,o[9]=-w,o[10]=c*h,o[11]=0,o[12]=St.at[0]+F[0],o[13]=St.at[1]+n+F[1],o[14]=St.at[2]+F[2],o[15]=1}var de={k:1,close:0};function ns(t,o){de.k=t,de.close=o||0}function is(t){Object.assign(ut,t)}function cs(t,o){it&&!it.feed.lure&&!it.feed.petal&&it.lure(t,o)}function rs(t,o){it&&!it.feed.petal&&(it.petal(t,o),ut.floating=!0)}function ls(){it&&it.unpetal(),ut.floating=!1}function hs(){let t=it&&it.feed;return{landed:!!(t&&(t.petal||t.eaten))&&ut.floating,eaten:!!(t&&t.eaten&&ut.floating)}}function fs(t,o){if(o[1]>=-1e-4)return null;let s=-t[1]/o[1],n=t[0]+o[0]*s-F[0],e=t[2]+o[2]*s-F[2];return n<$.x0||n>$.x1||e<$.z0||e>$.z1?null:[n+F[0],e+F[2]]}function vs(t,o){it&&it.drop(t-F[0],o-F[2])}function ps(){return!!(it&&it.feed.on)}var co=[{from:[8,1.65,21.75],to:[8,1.7,21.2],at:[8,2.3,1],fov:52},{from:[8,1.65,21.1],to:[8,1.7,19.1],at:[8,2.4,1],fov:58},{from:[3.6,1.65,20.5],to:[4.6,1.75,18.7],at:[8.8,2.7,1.5],fov:58},{from:[8,1.45,11.2],to:[8,1.55,8.4],at:[8,2.5,.5],fov:46},{from:[8.9,3.9,11.4],to:[7.4,3.7,10.2],at:[8,-.2,7.2],fov:50,pond:!0},{from:[5.1,1.5,5.8],to:[5.7,1.7,4.6],at:[8,2.6,.8],fov:44},{from:[10.6,1.6,2.4],to:[9.7,1.7,3.6],at:[8,2.4,22],fov:60},{from:[2.6,1.5,19],to:[3.6,1.6,17.4],at:[8,6.8,8],fov:62}],Wt=11;function us(t){let o=co.length,s=Math.floor(t/Wt)%o,n=t%Wt/Wt,e=n*n*(3-2*n),a=co[s],c=a.from.map((h,w)=>h+(a.to[w]-h)*e),l=Math.max(0,1-Math.min(n*Wt,(1-n)*Wt)/.7);return{eye:Ft(c),target:Ft(a.at),fov:a.fov,roll:0,fade:l,pond:!!a.pond&&l<.05,shot:Math.floor(t/Wt)}}K0.exports.previewCam=us;K0.exports.setGuide=is;K0.exports.setWind=ns;K0.exports.setFlower=ss;K0.exports.INTRO_PATH=uo;K0.exports.ready=()=>ee.pending<=0;K0.exports.petalLure=cs;K0.exports.petalLand=rs;K0.exports.petalReset=ls;K0.exports.petalState=hs;K0.exports.STUDIO={W:T,L:I,H:n0,POOL:$,ROT:V,NICHE:Q,VENUS:D0,WIN:C,TRUSS_Z:At,GRAVE:T0};K0.exports.poolHit=fs;K0.exports.feedAt=vs;K0.exports.feeding=ps;K0.exports.sunGLSL=me;K0.exports.bakedSun=os;K0.exports.O=F;K0.exports.SIZE={W:T,L:I,H:n0,RIDGE:mt};K0.exports.BOX=he().BOX;K0.exports.AIR_BOX=he().AIR_BOX});var _o=ze((Os,Mo)=>{var Et=De(),Le=Et.O,{ROT:Ue,GRAVE:go}=Et.STUDIO,Re=t=>[t[0]+Le[0],t[1]+Le[1],t[2]+Le[2]],yt=(t,o,s)=>t+(o-t)*s,xt=(t,o,s)=>[yt(t[0],o[0],s),yt(t[1],o[1],s),yt(t[2],o[2],s)],Nt=(t,o)=>[t[0]+o[0],t[1]+o[1],t[2]+o[2]],Bt=(t,o)=>[t[0]-o[0],t[1]-o[1],t[2]-o[2]],ct=(t,o)=>[t[0]*o,t[1]*o,t[2]*o],bt=t=>{let o=Math.hypot(t[0],t[1],t[2])||1;return ct(t,1/o)},Ht=(t,o)=>[t[1]*o[2]-t[2]*o[1],t[2]*o[0]-t[0]*o[2],t[0]*o[1]-t[1]*o[0]],ne=t=>Math.max(0,Math.min(1,t)),Ce=t=>t*t*(3-2*t),st=(t,o,s)=>Ce(ne((s-t)/(o-t))),oe=t=>.5-.5*Math.cos(Math.PI*ne(t));function se(t,o){let s=t.length-1,n=ne(o)*s,e=Math.min(s-1,Math.floor(n)),a=n-e,c=t[Math.max(0,e-1)],l=t[e],h=t[e+1],w=t[Math.min(s,e+2)],m=a*a,S=m*a;return[0,1,2].map(x=>.5*(2*l[x]+(-c[x]+h[x])*a+(2*c[x]-5*l[x]+4*h[x]-w[x])*m+(-c[x]+3*l[x]-3*h[x]+w[x])*S))}var I0=Ue.cx,ye=[I0+.06,go.top+.012,go.cz+.22],qt={a0:Math.PI,a1:4*Math.PI,r0:4.3,r1:3.7,y0:4.4,y1:1.3},ie=(t,o,s,n)=>{let e=qt.a0+(qt.a1-qt.a0)*t+(n||0),a=qt.r0+(qt.r1-qt.r0)*t+(o||0),c=qt.y0+(qt.y1-qt.y0)*(t*t*(3-2*t))+(s||0);return[Ue.cx+Math.sin(e)*a,c,Ue.cz+Math.cos(e)*a]},ge=(t,o,s,n,e,a)=>{let c=[];for(let l=0;l<=s;l++)c.push(ie(t+(o-t)*l/s,n,e,a));return c},Ve=1.7,Ie=.8,je=1.2,Me=[9.1,7.42,5.5],We=[8.6,3.3,1.95],Be=[7.9,1.6,2.5],He=[7.95,.17,6.4],Ge=[I0,.25,10.4],ds=ie(.5),yo=ie(1),Y0=[{petal:Me,eye:[7.4,4.8,3.2],at:Me,fov:44,look:{aperture:.6}},{petal:We,eye:[9.2,3.45,2.6],at:[7.85,3.2,1.15],fov:40,look:{aperture:.45}},{petal:Be,eye:[7,1.55,3.3],at:[8.1,1.75,1],fov:42,look:{aperture:.45}},{petal:He,eye:[8.45,.55,7.9],at:[7.9,.25,5],fov:46,look:{aperture:.35}},{petal:Ge,eye:[I0,.95,7.4],at:[I0,2,22],fov:48,look:{aperture:.12}},{petal:ds,eye:ie(.5,Ve,je,Ie),at:ie(.47),fov:54,look:{aperture:.12}},{petal:yo,eye:[I0,2.6,26.9],at:[I0,2.6,10],fov:58,look:{aperture:.04}},{petal:ye,eye:[I0+.2,1.6,23.3],at:[I0,.7,15.4],fov:50,look:{aperture:.2}}],ae=[{dur:6,petal:[Me,[9,6.6,4.6],[8.8,5.3,3.5],[8.7,4.1,2.5],We],eye:[Y0[0].eye,[8.2,4.3,3.4],[9,3.7,3],Y0[1].eye],sway:.45,track:.7},{dur:5,petal:[We,[8.4,2.6,2.3],[8.1,2,2.5],Be],eye:[Y0[1].eye,[8.4,2.6,3.6],Y0[2].eye],sway:.3,track:.6},{dur:6,petal:[Be,[8,1,3],[8,.45,3.9],[8,.2,5],He],eye:[Y0[2].eye,[7.4,1,4.6],[8.1,.7,7],Y0[3].eye],sway:.2,track:.55},{dur:6,petal:[He,[I0,.2,8],[I0,.22,9.6],Ge],eye:[Y0[3].eye,[9.4,.7,7],[8.9,.8,5.9],Y0[4].eye],sway:.06,track:.5,roll:.06},{dur:9,petal:[Ge,[I0,1.5,11.6],[I0-.3,3.4,12.9],...ge(0,.5,6)],eye:[Y0[4].eye,[I0+.6,2.2,8.6],[I0+2.4,4.2,10.6],...ge(.1,.5,5,Ve,je,Ie)],sway:.15,track:.8,roll:-.04},{dur:9,petal:ge(.5,1,6),eye:[...ge(.5,.92,5,Ve,je,Ie),[6,2.8,25.8],Y0[6].eye],sway:.12,track:.7,roll:-.04},{dur:8,petal:[yo,[I0,1.15,20.6],[I0+.02,.9,19.6],[I0+.05,.55,18.9],[ye[0],.3,ye[2]+.12],ye],eye:[Y0[6].eye,[I0+.15,2.1,24.6],Y0[7].eye],sway:.25,track:.45}],Gt={delay:.8,dur:14,eye:[I0-.1,1.5,22.9],at:[I0,.68,15.6]},be={dur:5,eye:[I0+.2,1.5,20.3],at:[I0,.1,15.4],fov:54},{L:Fe}=Et.STUDIO,ms={hold:.9,back:3.6,rise:7.6,door:[I0,2.75,Fe],close:[I0,2.75,Fe-.38],away:[I0,2.3,Fe-3.9],path:Et.INTRO_PATH},xs=[.32,.02,.05],et=[0];ae.forEach(t=>et.push(et[et.length-1]+t.dur));var Pe=et[et.length-1],ws=210,gs=95,bs=.35,ys=.45,Ms=.7,_s=.9;function bo(t,o,s,n,e,a){n=Math.max(1e-4,n);let c=2/n,l=c*e,h=1/(1+l+.48*l*l+.235*l*l*l),w=t-o,m=a*n;w=Math.max(-m,Math.min(m,w));let S=t-w,x=(s+c*w)*e,g=(s-c*x)*h,f=S+(w+x)*h;return o-t>0==f>o&&(f=o,g=(f-o)/e),[f,g]}Mo.exports=function(o){o=o||{};let s=0,n=0,e=0,a=-10,c=0,l=null,h=null,w=!1,m=!1,S=0,x=!1,g=null,f=!o.intro,v=null,b=[],i=(E,H,U)=>{window.addEventListener(E,H,U),b.push([E,H,U])},d=Y0[0].eye,p=E=>{let H=0;for(let U=1;U<et.length;U++)Math.abs(et[U]-E)<Math.abs(et[H]-E)&&(H=U);return H},y=E=>{(c-a>bs||h===null)&&(h=p(e)),a=c,w=!1;let H=et[Math.max(0,h-1)],U=et[Math.min(et.length-1,h+1)];e=Math.max(H,Math.min(U,e+E))},k=E=>{let H=p(e);e=et[Math.max(0,Math.min(et.length-1,H+E))],w=!0,a=c},u=null;i("wheel",E=>{if(E.target.closest&&E.target.closest(".st-ui, .cons-ui, .cons-note"))return;if(!f){E.preventDefault();return}E.preventDefault();let H=E.deltaMode===1?E.deltaY*16:E.deltaMode===2?E.deltaY*window.innerHeight:E.deltaY;y(H/ws)},{passive:!1}),i("pointerdown",E=>{E.target.closest&&E.target.closest("button, a, .st-ui, .cons-ui, .cons-note")||(u={ly:E.clientY,lx:E.clientX,moved:0,v:0,lt:performance.now(),t0:performance.now()})}),i("pointermove",E=>{if(!u||!f)return;let H=E.clientX-u.lx,U=E.clientY-u.ly;u.lx=E.clientX,u.ly=E.clientY;let l0=Math.abs(U)>=Math.abs(H)?-U:-H;u.moved+=Math.abs(l0);let X=performance.now(),v0=l0/gs;u.v=u.v*.6+v0/Math.max(.008,(X-u.lt)/1e3)*.4,u.lt=X,u.moved>6&&y(v0)}),i("pointerup",()=>{let E=u;u=null,!(!E||!f)&&(E.moved>=10&&performance.now()-E.lt<120?y(Math.max(-1.6,Math.min(1.6,E.v*.22))):E.moved<8&&performance.now()-E.t0<450&&k(1))}),i("keydown",E=>{f&&(E.key==="ArrowDown"||E.key==="ArrowRight"||E.key==="PageDown"?k(1):(E.key==="ArrowUp"||E.key==="ArrowLeft"||E.key==="PageUp")&&k(-1))});function M(){f&&k(1)}function O(){for(let[E,H,U]of b)window.removeEventListener(E,H,U);b.length=0}function D(){v===null&&(v=c)}let K=(E,H)=>bt(Bt(H,E));function s0(E){let H=ms;if(E<H.hold+H.back){let w0=st(H.hold,H.hold+H.back,E);return{eye:xt(H.close,H.away,w0),at:H.door,fov:yt(24,50,w0),k:0}}let U=ne((E-H.hold-H.back)/H.rise),l0=oe(U),X=se(H.path,l0),v0=st(.05,.6,l0),N0=K(X,H.door),M0=K(X,Me),g0=bt(Nt(xt(N0,M0,v0),[0,Math.sin(Math.PI*v0)*.9,0]));return{eye:X,at:Nt(X,ct(g0,4)),fov:yt(50,Y0[0].fov,l0),k:U}}function t0(E,H){let U=0;for(;U<ae.length-1&&E>=et[U+1];)U++;let l0=ae[U],X=ne((E-et[U])/l0.dur),v0=oe(X),N0=p(E),M0=1-st(0,.9,Math.abs(E-et[N0])),g0=se(l0.petal,v0),w0=Bt(se(l0.petal,Math.min(1,v0+.02)),se(l0.petal,Math.max(0,v0-.02))),_=bt(Ht([0,1,0],Math.hypot(w0[0],w0[2])>1e-4?w0:[1,0,0])),z=Math.sin(v0*Math.PI*(2.5+l0.dur*.25))*Math.sin(v0*Math.PI);g0=Nt(g0,ct(_,z*l0.sway)),g0[1]+=-Math.abs(z)*l0.sway*.25;let R=N0===0?[Math.sin(H*.9)*.01,0,Math.cos(H*.7)*.01]:[Math.sin(H*.53+N0)*.07,Math.sin(H*.71+N0*2)*.05,Math.cos(H*.47+N0)*.07],j=N0===Y0.length-1?0:M0;g0=Nt(g0,ct(R,j));let J=se(l0.eye,v0),Z=Y0[U].at,e0=Y0[U+1].at,a0=l0.track*st(0,.3,X)*(1-st(.65,1,X)),o0=xt(xt(Z,e0,st(.25,.95,X)),g0,a0),f0=yt(Y0[U].fov,Y0[U+1].fov,Ce(X));if(l0.zoom){let[q0,b0,m0,$0]=l0.zoom,U0=X<b0?st(q0,b0,X):1-st(b0,m0,X);f0=yt(f0,$0,U0)}let z0=yt(Y0[U].look.aperture,Y0[U+1].look.aperture,Ce(X)),u0=(l0.roll||0)*Math.sin(X*Math.PI);return{p:g0,eye:J,at:o0,fov:f0,aperture:z0,roll:u0,idx:U,u:X,near:N0,hanging:N0===0&&M0>.98}}let P={prev:null,vel:[0,0,0],axis:[1,0,0],dir:null,bank:0,rock:0,spin:0,fresh:!0,go:0,fall:0};function h0(E,H,U,l0){let X,v0,N0;if(U)X=bt([Math.sin(l0*.8)*.25,-1,.35+Math.sin(l0*1.1)*.15]),v0=bt(Ht(Ht(X,[.4,0,-1]),X)),N0=Ht(X,v0),P.prev=null,P.vel=[0,0,0],P.fresh=!0,P.spin=0,P.bank=0,P.dir=null,P.go=0,P.fall=0;else{if(P.prev&&H>0){let m0=Bt(E,P.prev);if(Math.hypot(m0[0],m0[1],m0[2])<1.5){let $0=Math.min(1,H*6);for(let U0=0;U0<3;U0++)P.vel[U0]+=(m0[U0]/H-P.vel[U0])*$0}else P.vel=[0,0,0]}P.prev=E.slice();let g0=P.vel,w0=Math.hypot(g0[0],g0[1],g0[2]),_=st(.2,1.2,w0),z=st(.35,1.6,-g0[1]);P.go=_,P.fall=z;let R=l0*.35+.65,j=[Math.cos(R),0,Math.sin(R)];w0>.001&&(j=xt(j,ct(g0,-1/w0),_)),P.axis=xt(P.axis,j,P.fresh?1:Math.min(1,H*4)),X=bt(P.axis);let J=bt(Bt(d,E)),Z=yt(.6,.25,_);v0=[J[0]*Z,1+J[1]*Z,J[2]*Z],v0=bt(Bt(v0,ct(X,X[0]*v0[0]+X[1]*v0[1]+X[2]*v0[2]))),N0=Ht(X,v0);let e0=Math.hypot(g0[0],g0[2]),a0=0;if(e0>.15&&P.dir&&H>0){let m0=[g0[0]/e0,g0[2]/e0];a0=(P.dir[0]*m0[1]-P.dir[1]*m0[0])/H,P.dir=m0}else e0>.15&&(P.dir=[g0[0]/e0,g0[2]/e0]);P.bank+=(Math.max(-.8,Math.min(.8,a0*.3))*_-P.bank)*Math.min(1,H*3),P.rock+=H*(1.7+2.6*_),P.spin+=H*z*6;let o0=Math.sin(P.rock)*(.42+.2*_)*(1-.5*z)+P.bank+P.spin,f0=Math.sin(P.rock*.63+1)*.32,z0=Math.cos(o0),u0=Math.sin(o0),q0=Nt(ct(v0,z0),ct(N0,u0)),b0=Nt(ct(N0,z0),ct(v0,-u0));z0=Math.cos(f0),u0=Math.sin(f0),X=Nt(ct(X,z0),ct(q0,u0)),v0=Nt(ct(q0,z0),ct(X,-u0)),N0=b0,E=Nt(E,ct(N0,Math.sin(P.rock+1.5708)*.05*(1-.5*_))),P.fresh=!1}let M0=Re(E);return[X[0],X[1],X[2],0,v0[0],v0[1],v0[2],0,N0[0],N0[1],N0[2],0,M0[0],M0[1],M0[2],1]}function d0(E,H){let U=bt(xt([E[0],E[1],E[2]],[Math.cos(.5),0,Math.sin(.5)],H)),l0=xt([E[4],E[5],E[6]],[0,1,0],H);l0=bt(Bt(l0,ct(U,U[0]*l0[0]+U[1]*l0[1]+U[2]*l0[2])));let X=Ht(U,l0);return[U[0],U[1],U[2],0,l0[0],l0[1],l0[2],0,X[0],X[1],X[2],0,E[12],E[13],E[14],1]}function F0(E){let H=l===null?0:Math.min(.1,Math.max(0,E-l));if(l=E,c=E,!w&&!u&&c-a>Ms){let z=p(e);Math.abs(et[z]-e)<_s&&(e=et[z])}if(w){let z=bo(s,e,n,1.2,H,1.4);s=z[0],n=z[1],Math.abs(e-s)<.001&&(s=e,n=0,w=!1)}else{let z=bo(s,e,n,ys,H,3);s=z[0],n=z[1],Math.abs(e-s)<1e-4&&Math.abs(n)<.001&&(s=e,n=0)}typeof window!="undefined"&&window.__stScroll!==void 0&&/tourdebug/.test(location.search)&&(s=e=window.__stScroll,n=0);let U=t0(s,E);s>=Pe-.02&&!m&&(m=!0,S=E),s<Pe-.3&&m&&(m=!1);let l0=st(.82,1,U.idx===ae.length-1?U.u:0);if(m){let z=oe((E-S-Gt.delay)/Gt.dur);U.eye=xt(U.eye,Gt.eye,z),U.at=xt(U.at,Gt.at,z),!x&&E-S>3.2&&(x=!0,o.onLanded&&o.onLanded())}let X=0,v0=[0,0,0];if(v!==null&&m){let z=E-v,R=oe(z/be.dur);U.eye=xt(U.eye,be.eye,R),U.at=xt(U.at,be.at,R),U.fov=yt(U.fov,be.fov,R);let j=oe((z-.8)/3.4);Et.setFlower(j,(.26+.4*(1-st(3.2,7,z)))*st(0,.8,z))}else Et.setFlower(-1);if(!f){g===null&&(g=E);let z=E-g,R=s0(z);U.eye=R.eye,U.at=R.at,U.fov=R.fov,U.roll=0,U.aperture=.15,X=1-st(.1,1.1,z),v0=xs,R.k>=1&&(f=!0,s=e=0,n=0)}Et.setWind(1+.8*st(.3,1,U.idx===ae.length-1?U.u:0)+(m?.2*st(0,4,E-S):0),m?st(.5,3.5,E-S):0),d=U.eye;let N0=h0(U.p,H,U.hanging,E);l0>0&&(N0=d0(N0,l0));let M0=(U.hanging?.12:.2+.55*P.go+.35*P.fall)*(1-l0),g0=(U.hanging?.05:Math.sin(P.rock*1.3)*.18+.12*P.go)*(1-l0);Et.setGuide({vis:!0,model:N0,ang:E*.08,size:.13,flex:g0,flutter:M0,floating:!1});let w0=N0.slice(12,15),_=Re(U.eye);return{eye:_,target:Re(U.at),fov:U.fov,roll:U.roll,fade:X,shot:m?Y0.length:U.near,look:{letterbox:.55,focus:Math.max(.3,Math.hypot(_[0]-w0[0],_[1]-w0[1],_[2]-w0[2])),aperture:U.aperture,vignette:.28,exposure:1,shafts:1,fade:X,fadeColor:v0},moving:!f||v!==null&&E-v<8||Math.abs(n)>.02||Math.abs(e-s)>.01||m&&E-S<Gt.delay+Gt.dur+.5}}return{update:F0,tap:M,dispose:O,placeFlower:D,get scroll(){return s},END:Pe}}});window.__conservatoryRoom={studio:De(),tour:_o()};})();

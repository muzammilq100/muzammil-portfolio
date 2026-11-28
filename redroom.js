"use strict";(()=>{var S0=(e,x)=>()=>(x||e((x={exports:{}}).exports,x),x.exports);var $t=S0((Uo,Ot)=>{"use strict";var Xe=[-90,0,0],rt=16,it=27.5,ct=11.6;Ot.exports={O:Xe,W:rt,L:it,RIDGE:ct,BOX:[Xe[0]-.8,0,Xe[2]-11.5,Xe[0]+rt+.8,ct+.5,Xe[2]+it+.8],AIR_BOX:[Xe[0],0,Xe[2],Xe[0]+rt,ct,Xe[2]+it]}});var ft=S0((Ko,Vt)=>{"use strict";var Dt=typeof navigator!="undefined"&&navigator.userAgent||"",yo=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,Ge=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(Dt)||/Macintosh/.test(Dt)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||yo,G0=typeof window!="undefined"&&window.devicePixelRatio||1,xo=typeof location!="undefined"&&/[?&](studio|redroom)\b/.test(location.search),Q={isPhone:Ge,noBake:(()=>{try{return/[?&]nobake\b/.test(location.search)}catch(e){return!1}})(),pixelRatio:xo?Ge?Math.min(G0,1.25):Math.min(G0,1.5):Ge?Math.min(G0,1.5):Math.min(G0,2),reflection:!Ge,gardenDetail:Ge?0:1,leafShare:Ge?.65:1,motion:!Ge,post:Ge?1:2,level:Ge?1:0};Q.scale=1;var bo=Ge?.55:.6,R0=0,F0=0,q0=0,N0=0,y0=1,A0=0,H0=48,x0=null,lt=0;function wo(e){x0={fps:e,scale:Q.scale},Q.scale>.86?Q.scale=.85:Q.reflection?Q.stepDown():Q.scale>.71?Q.scale=.7:Q.stepDown()||(Q.scale=Math.max(bo,Q.scale-.1))}var Ct=!0;try{/[?&]noadapt\b/.test(location.search)&&(Ct=!1)}catch(e){}Q.frame=e=>{if(!Ct)return;if(!(e>0)||e>1){R0=0,F0=0;return}if(R0+=e,F0++,R0<.75)return;let x=F0/R0;if(R0=0,F0=0,A0>0&&(A0-=.75,A0<=0&&(y0=1)),x0){if(x<x0.fps*1.08&&x0.scale>Q.scale){if(++lt>=2){Q.scale=1,y0=1,A0=0,H0=Math.min(H0,x*.85),lt=0,q0=0,x0=null;return}}else lt=0;x0=null}if(x<H0){if(N0=0,++q0>=2){if(q0=0,Q.scale>.61&&Q.climbed){y0=Q.scale-.05,A0=40,Q.scale=y0,Q.climbed=!1;return}wo(x)}}else x>Math.max(H0*1.15,55)?(q0=0,++N0>=6&&Q.scale<y0-.001?(Q.scale=Math.min(y0,Q.scale+.05),Q.climbed=!0,N0=0):N0>=6&&(Q.climbed=!1)):(q0=0,N0=0)};Q.stepDown=()=>{if(Q.reflection)Q.reflection=!1;else if(Q.gardenDetail>0||Q.motion)Q.gardenDetail=0,Q.motion=!1,Q.leafShare=Math.min(Q.leafShare,.65);else if(Q.post>0)Q.post--;else return!1;return Q.level++,!0};Vt.exports=Q});var ht=S0((Xo,Bt)=>{"use strict";function _o(e,x){let m=Object.assign({width:1024,maxHeight:2048,scale:1,cos:.94,slab:.6},x||{}),c=e.pos,A=e.nrm,a=e.idx,r=a.length/3,o=new Array(r);for(let s=0;s<r;s++){let d=a[s*3],L=a[s*3+1],k=a[s*3+2],P=c[L*3]-c[d*3],E=c[L*3+1]-c[d*3+1],S=c[L*3+2]-c[d*3+2],G=c[k*3]-c[d*3],B=c[k*3+1]-c[d*3+1],re=c[k*3+2]-c[d*3+2],Z=E*re-S*B,K=S*G-P*re,se=P*B-E*G,me=Math.hypot(Z,K,se),oe=me>1e-10;oe&&(Z/=me,K/=me,se/=me,A[d*3]*Z+A[d*3+1]*K+A[d*3+2]*se<0&&(Z=-Z,K=-K,se=-se),oe=!!m.bakeTri(s,d,L,k,[Z,K,se])),o[s]={t:s,a:d,b:L,c:k,n:[Z,K,se],ok:oe,chart:null}}let l=s=>Math.round(c[s*3]*2e3)+","+Math.round(c[s*3+1]*2e3)+","+Math.round(c[s*3+2]*2e3),n=new Map,f=new Array(c.length/3);for(let s=0;s<f.length;s++)f[s]=l(s);for(let s of o){if(!s.ok)continue;let d=[f[s.a],f[s.b],f[s.c]];for(let L=0;L<3;L++){let k=d[L],P=d[(L+1)%3],E=k<P?k+"|"+P:P+"|"+k;n.has(E)||n.set(E,[]),n.get(E).push(s)}}let v=s=>{let d=[f[s.a],f[s.b],f[s.c]],L=[];for(let k=0;k<3;k++){let P=d[k],E=d[(k+1)%3];for(let S of n.get(P<E?P+"|"+E:E+"|"+P)||[])S!==s&&L.push(S)}return L},i=[];for(let s of o){if(!s.ok||s.chart)continue;let d=s.n,L=Math.abs(d[1])<.9?[0,1,0]:[1,0,0],k=L[1]*d[2]-L[2]*d[1],P=L[2]*d[0]-L[0]*d[2],E=L[0]*d[1]-L[1]*d[0],S=Math.hypot(k,P,E);k/=S,P/=S,E/=S;let G=d[1]*E-d[2]*P,B=d[2]*k-d[0]*E,re=d[0]*P-d[1]*k,Z=c[s.a*3]*d[0]+c[s.a*3+1]*d[1]+c[s.a*3+2]*d[2],K={tris:[],n:d,T:[k,P,E],B:[G,B,re],kind:m.kind?m.kind(d,[c[s.a*3],c[s.a*3+1],c[s.a*3+2]]):"wall"},se=[s];for(s.chart=K;se.length;){let me=se.pop();K.tris.push(me);for(let oe of v(me)){if(oe.chart||!oe.ok||oe.n[0]*d[0]+oe.n[1]*d[1]+oe.n[2]*d[2]<m.cos)continue;let q=!1;for(let F of[oe.a,oe.b,oe.c])Math.abs(c[F*3]*d[0]+c[F*3+1]*d[1]+c[F*3+2]*d[2]-Z)>m.slab&&(q=!0);q||(oe.chart=K,se.push(oe))}}i.push(K)}for(let s of i){let d=1/0,L=1/0,k=-1/0,P=-1/0;for(let E of s.tris)for(let S of[E.a,E.b,E.c]){let G=c[S*3]*s.T[0]+c[S*3+1]*s.T[1]+c[S*3+2]*s.T[2],B=c[S*3]*s.B[0]+c[S*3+1]*s.B[1]+c[S*3+2]*s.B[2];G<d&&(d=G),G>k&&(k=G),B<L&&(L=B),B>P&&(P=B)}s.u0=d,s.v0=L,s.du=k-d,s.dv=P-L}let z=m.width,g=m.scale,p=0;for(let s=0;;s++){for(let S of i){let G=m.density(S.kind)*g;if(S.dU=Math.max(G,3/Math.max(S.du,1e-4)),S.dV=Math.max(G,3/Math.max(S.dv,1e-4)),S.w=Math.ceil(S.du*S.dU)+2*2,S.h=Math.ceil(S.dv*S.dV)+2*2,S.rot=S.h>S.w,S.rot){let B=S.w;S.w=S.h,S.h=B}}let d=i.slice().sort((S,G)=>G.h-S.h||G.w-S.w),L=0,k=0,P=0,E=!0;for(let S of d){if(S.w>z){E=!1;break}L+S.w>z&&(k+=P,L=0,P=0),S.x=L,S.y=k,L+=S.w,P=Math.max(P,S.h)}if(p=k+P,E&&p<=m.maxHeight)break;if(g*=.92,s>40)throw new Error("bake: the room does not fit")}p=Math.max(4,Math.ceil(p/4)*4);let y=o.filter(s=>s.ok).concat(o.filter(s=>!s.ok)),h=r*3,u={position:new Float32Array(h*3),normal:new Float32Array(h*3),lm:new Float32Array(h*3)},R=e.extra||{};for(let s in R)u[s]=new Float32Array(h*R[s][1]);let w=0;for(let s of y){let d=s.chart;for(let L of[s.a,s.b,s.c]){for(let k=0;k<3;k++)u.position[w*3+k]=c[L*3+k],u.normal[w*3+k]=A[L*3+k];for(let k in R){let[P,E]=R[k];for(let S=0;S<E;S++)u[k][w*E+S]=P[L*E+S]}if(d&&s.ok){let k=c[L*3]*d.T[0]+c[L*3+1]*d.T[1]+c[L*3+2]*d.T[2],P=c[L*3]*d.B[0]+c[L*3+1]*d.B[1]+c[L*3+2]*d.B[2],E=(k-d.u0)*d.dU+2,S=(P-d.v0)*d.dV+2;if(d.rot){let G=E;E=S,S=G}u.lm[w*3]=(d.x+E)/z,u.lm[w*3+1]=(d.y+S)/p,u.lm[w*3+2]=1}w++}}u.elements=new Uint32Array(h);for(let s=0;s<h;s++)u.elements[s]=s;return u.width=z,u.height=p,u.scale=g,u.bakedCount=o.filter(s=>s.ok).length*3,u.charts=i.length,u}function zo(e,x,m,c){let A=x.width,a=x.height,r=p=>e.texture({width:A,height:a,min:p,mag:p,wrap:"clamp"}),o=p=>e.framebuffer({color:p,depth:!1}),l=c.map(()=>r("linear")),n=l.map(o),v=Object.keys(m).filter(p=>p!=="lm"&&p!=="a_lm").map(p=>{let y=m[p].length/x.elements.length;return"attribute "+(y===1?"float":"vec"+Math.round(y))+" "+p+";"}).join(`
`),i=c.map(p=>e({frag:p.frag,vert:`
		precision highp float;
		${v}
		attribute vec3 a_lm;
		${p.vertDecl||""}
		void main() {
			${p.vertMain||""}
			gl_Position = vec4(a_lm.xy * 2.0 - 1.0, 0.0, 1.0);
		}`,attributes:Object.assign({},m,{a_lm:m.a_lm||x.lm}),uniforms:p.uniforms||{},framebuffer:e.prop("fbo"),depth:{enable:!1},cull:{enable:!1},blend:{enable:!1},viewport:{x:0,y:0,width:A,height:a},count:x.bakedCount})),z=e({frag:`
		precision highp float;
		uniform sampler2D src;
		uniform vec2 px;
		uniform float copyOnly;
		void main() {
			vec2 uv = gl_FragCoord.xy * px;
			vec4 c = texture2D(src, uv);
			if (c.a > 0.0 || copyOnly > 0.5) { gl_FragColor = c; return; }
			vec4 sum = vec4(0.0);
			float n = 0.0;
			for (int y = -1; y <= 1; y++) {
				for (int x = -1; x <= 1; x++) {
					vec4 s = texture2D(src, uv + vec2(float(x), float(y)) * px);
					if (s.a > 0.0) { sum += s; n += 1.0; }
				}
			}
			gl_FragColor = n > 0.0 ? sum / n : vec4(0.0);
		}`,vert:`
		precision highp float;
		attribute vec2 p;
		void main() { gl_Position = vec4(p, 0.0, 1.0); }`,attributes:{p:[-1,-1,3,-1,-1,3]},uniforms:{src:e.prop("src"),px:[1/A,1/a],copyOnly:e.prop("copy")},framebuffer:e.prop("fbo"),depth:{enable:!1},blend:{enable:!1},viewport:{x:0,y:0,width:A,height:a},count:3}),g={tex:l,ready:!1,bake(){let p=r("nearest"),y=r("nearest"),h=o(p),u=o(y);i.forEach((R,w)=>{e.clear({color:[0,0,0,0],framebuffer:h}),R({fbo:h});for(let s=0;s<2;s++)z({src:p,fbo:u,copy:0}),z({src:y,fbo:h,copy:0});z({src:p,fbo:n[w],copy:1})}),h.destroy(),u.destroy(),p.destroy(),y.destroy(),g.ready=!0}};return g}Bt.exports={charts:_o,baker:zo}});var mt=S0((Yo,ut)=>{"use strict";var{O,W:I,L:Y}=$t(),b=e=>(+e).toFixed(4),he=10.5,j0=.7,Gt=3,H={hw:1.25,sill:1.35,spring:6.9,n:4,step:6.35};H.z0=Y/2-H.step*(H.n-1)/2;H.apex=H.spring+H.hw*Math.sqrt(3);var U0=e=>H.z0+H.step*e;H.leftFrom=2;var J=(()=>{let x=H.z0,m={k:1.42,z:x,top:.543*1.42,half:.601*1.42,depth:.706*1.42};return m.x=I-.12-m.depth/2,m.candles=[[I-.4,x-.52,1],[I-.3,x-.3,.62],[I-.36,x+.42,.38],[I-.86,x-.06,.55],[I-.24,x+.66,.85],[I-.8,x+.42,.3]],m.vase={x:I-.55,z:x+.06,h:.24},m.flames=m.candles.map(([c,A,a])=>[c,m.top+.156+.144*a+.018,A]),m.laid=[[I-.66,x-.22,Math.PI/2+.5],[I-.62,x-.36,Math.PI/2+.15],[I-.7,x+.26,Math.PI/2-.6]],m.stack=[I-.88,x-.5],m.occ=[[I-.55,m.top+.46,x+.06,.15],[I-.55,m.top+.26,x+.06,.06],[I-.55,m.top+.11,x+.06,.08],...m.laid.map(([c,A,a])=>[c-Math.sin(a)*.15,m.top+.05,A-Math.cos(a)*.15,.065])],m})(),Lo="LEAVEHERBE",E0={k:0},Ae={s:0,n:0,glitch:0,freeze:!1,frozenAt:null},K0={phase:0,period:1.2},vt={click:null},Ut={eye:null},Mo=()=>{let e=Ut.eye;return e?(e[0]-O[0]-pe.x)*Math.sin(pe.yaw)+(e[2]-O[2]-pe.z)*Math.cos(pe.yaw)>-.25:!1};H.lowSill=J.top+.06;var pe={x:I/2,z:18.6,k:1.3};pe.yaw=Math.atan2(I/2-pe.x,21.2-pe.z);{let e=Math.sin(pe.yaw),x=Math.cos(pe.yaw),m=(c,A,a)=>[pe.x+e*c,A,pe.z+x*c,a];pe.occ=[m(0,1.17,.13),m(-.02,.86,.22),m(.1,.42,.36),m(-.3,.62,.17)]}var fe=(()=>{let e=Math.sin(pe.yaw),x=Math.cos(pe.yaw),m=[pe.x-e*1.4,8.4,pe.z-x*1.4],c=[pe.x+e*.25,.55,pe.z+x*.25],A=[c[0]-m[0],c[1]-m[1],c[2]-m[2]],a=Math.hypot(...A);return{pos:m,axis:A.map(r=>r/a),inner:.115,outer:.17,reach:a}})(),te=[];for(let e=0;e<=H.n;e++)te.push(H.z0+H.step*(e-.5));var ze={hw:.75,h:2.6,depth:.7},De={hw:1.8,h:3.6,z:-11,sign:[I/2,ze.h+.32,-ze.depth-.05],open:2.2},ae={z:21.2,G:2.4,models:{sony:{file:"res/redroom/tv_sony.bin",tex:3,w:.36,h:.341,d:.455,dark:.55},crt:{file:"res/redroom/tv_crt.bin",tex:3,w:.47,h:.454,d:.389,dark:.9},old:{file:"res/redroom/tv_old.bin",tex:1,w:.62,h:.418,d:.416,dark:.75}}};ae.stack=[["old",0,-1.41,2,.04],["crt",0,.05,-1,-.02],["sony",0,1.24,-2,.06],["crt",1,-1.16,3,.02],["sony",1,-.03,-1,.04],["crt",1,1.14,-3,.06],["sony",2,-.73,2,.06],["old",2,.66,-2,.03],["crt",0,-2.78,3,.08],["sony",1,-2.68,4,.1],["old",0,2.5,-3,.08],["sony",1,2.32,-4,.1]];var ko={sony:[0,.194],crt:[0,.27],old:[.0625,.2145]};(()=>{let e=[];for(let x of ae.stack){let m=ae.models[x[0]],c=x[1],A=x[2],a=m.w*ae.G,r=0;for(let n of e)n.row>=c||Math.abs(n.dx-A)<(n.w+a)/2*.92&&(r=Math.max(r,n.top));e.push({dx:A,row:c,w:a,top:r+m.h*ae.G*.99}),x.base=r;let o=ko[x[0]],l=x[3]*Math.PI/180;x.screen=[I/2+A+o[0]*ae.G,r+o[1]*ae.G,ae.z+x[4]],x.facing=[-Math.sin(l),0,-Math.cos(l)],x.size=m.w*ae.G}})();ae.letters=(()=>{let e=[1,0].map(m=>ae.stack.map((c,A)=>[A,c]).filter(([,c])=>c[1]===m).sort((c,A)=>A[1].screen[0]-c[1].screen[0]).map(([c])=>c)),x=ae.stack.map(()=>-1);return[...e[0],...e[1]].forEach((m,c)=>{x[m]=c}),x})();J.letters=[{x:J.x-.39,z:J.z+.2,a:.12,w:.2,h:.292,y:.0012},{x:J.x-.37,z:J.z+.5,a:-.22,w:.2,h:.292,y:.0024}];var W0={x0:.3,x1:.56,z0:12.38,z1:12.7,h:.055},C=(()=>{let e={top:.92,depth:.78};return e.a=[te[0]+.7,te[1]-.55],e.b=[te[1]+.55,te[2]-.7],e.basin={x0:.08,x1:e.depth-.07,z0:e.a[0]+.1,z1:e.a[1]-.1,floor:e.top-.1},e.TX=.44,e.TZ=.54,e.TH=.075,e.TXc=(e.basin.x0+e.basin.x1)/2,e.trays=[e.a[0]+1.1,e.a[0]+1.72,e.a[0]+2.34],e.liquid=e.basin.floor+.05,e.bulb=[e.TXc+.02,1.39,e.trays[0]+.05],e.tube={x:.07,y:3.05,z0:e.b[0]+.2,z1:e.b[1]-.2},e.cam={x:.43,y:e.basin.floor,z:e.trays[0]-e.TZ/2-.3},e.hung=[],e.ash={x:.6,z:11.62},e.lines=[[.32,2.74,te[0],te[1],.12],[.74,2.52,te[0],te[1],.17],[1.1,2.62,te[0],te[1],.2],[.3,2.76,te[1],te[2],.15],[.68,2.46,te[1],te[2],.19],[1.06,2.66,te[1],te[2],.22],[.5,1.98,te[1],te[2],.12],[.45,2.98,te[0],te[1],.1,1.45],[1.45,2.4,te[0],te[1],.2],[.95,2.26,te[0],te[1],.13,.4],[1.4,3,te[1],te[2],.14,.45],[1.5,2.36,te[1],te[2],.22],[.9,2.2,te[1],te[2],.15,1.35]],e})(),V=(()=>{let e={x:I/2-.006,z:14.92,tableK:1.25,pitch:.1};e.table=.761*e.tableK,e.feed=[.0254,.7696,.3364],e.takeup=[.0252,.2484,.337],e.lensL=[.006,.456,.15];let x=Math.cos(e.pitch),m=Math.sin(e.pitch),c=e.lensL;return e.lens=[e.x+c[0],e.table+c[1]*x+c[2]*m,e.z-c[1]*m+c[2]*x],e.img={x:I/2,y:6,w:6.4},e.img.h=e.img.w*.75,e})(),ue={x0:4.2,x1:11.8,y:9,z:Y-.16},Ee={r:.045};(()=>{let e=Ee.r,x=C.depth,m=C.b[1]-.22;Ee.socket=[x,.3,m],Ee.ctrl=[[x+.1,.3,m],[x+.2,.295,m],[x+.3,.22,m+.02],[x+.42,e,m+.1],[x+.8,e,m+.3],[1.8,e,m+.45],[3.4,e,m+.1],[5.2,e,m-.55],[7.2,e,m-.95],[9.4,e,m-.9],[11.4,e,m-.45],[13.2,e,m+.1],[I-1.15,e,m+.55],[I-.85,e,m+1.05],[I-.85,e,15.2],[I-1.1,e,16.3],[I-1.7,e,17.2],[I-2.5,e,17.9],[12.9,e,18.5],[11.5,e,18.9],[10.6,e,19.5],[10.5,e,20.3],[11.2,e,20.5],[10.9,e,19.95],[10,e*2.2,20.1],[9.3,e,20.75],[9.5,e,21.9],[8.6,e,22.25],[8.1,.22,21.95]];let c=Ee.ctrl,A=[];for(let o=0;o<c.length-1;o++){let l=c[Math.max(0,o-1)],n=c[o],f=c[o+1],v=c[Math.min(c.length-1,o+2)],i=Math.max(2,Math.ceil(Math.hypot(f[0]-n[0],f[1]-n[1],f[2]-n[2])/.06));for(let z=0;z<i;z++){let g=z/i,p=g*g,y=p*g;A.push([0,1,2].map(h=>.5*(2*n[h]+(-l[h]+f[h])*g+(2*l[h]-5*n[h]+4*f[h]-v[h])*p+(-l[h]+3*n[h]-3*f[h]+v[h])*y)))}}A.push(c[c.length-1].slice());for(let o of A)o[1]<e&&o[2]>-1.4&&(o[1]=e);Ee.path=A;let a=A.findIndex(o=>o[1]<=e*1.01),r=A.findIndex((o,l)=>l>a&&o[0]>I-1.3);Ee.run=[a,r]})();var a0={spots:[],w:.36,h:.435,n:55,lines:[{z:Y-1.7,y:6.5,sag:1},{z:Y-2.6,y:5.3,sag:.8}]},Ie=(()=>{let e=[-.62,.75,-.16],x=Math.hypot(...e);return e.map(m=>m/x)})(),c0=(()=>{let e=I/2;return(e*e+Gt*Gt)/(2*e)})(),i0=e=>{let x=e<=I/2?e:I-e;return he+Math.sqrt(Math.max(0,c0*c0-(x-c0)*(x-c0)))},T={FLOOR:0,WALL:1,REVEAL:2,GLASS:3,VAULT:4,TRIM:5,VOID:6,TUBE:7,CABLE:8,TILE:9,STEEL:10,PEG:11,CONC:12,CFLOOR:13,DOOR:14,MAINCABLE:15,PAPER:16,ASH:17};function Kt(){let e=[],x=[],m=[],c=[],A=[],a={pos:e,nrm:x,kind:m,uv:c,idx:A,v(r,o,l,n){return e.push(r[0]+O[0],r[1]+O[1],r[2]+O[2]),x.push(o[0],o[1],o[2]),m.push(l),c.push(n?n[0]:0,n?n[1]:0),e.length/3-1},quad(r,o,l,n,f,v,i,z,g,p){let y=a.v(r,f,v,i),h=a.v(o,f,v,z),u=a.v(l,f,v,g),R=a.v(n,f,v,p);A.push(y,h,u,y,u,R)},box(r,o,l,n,f,v,i){a.quad([r,o,v],[n,o,v],[n,f,v],[r,f,v],[0,0,1],i),a.quad([n,o,l],[r,o,l],[r,f,l],[n,f,l],[0,0,-1],i),a.quad([n,o,v],[n,o,l],[n,f,l],[n,f,v],[1,0,0],i),a.quad([r,o,l],[r,o,v],[r,f,v],[r,f,l],[-1,0,0],i),a.quad([r,f,v],[n,f,v],[n,f,l],[r,f,l],[0,1,0],i),a.quad([r,o,l],[n,o,l],[n,o,v],[r,o,v],[0,-1,0],i)},cyl(r,o,l,n,f,v,i){i=i||18;for(let z=0;z<i;z++){let g=z/i*Math.PI*2,p=(z+1)/i*Math.PI*2,y=[Math.sin(g),0,Math.cos(g)],h=[Math.sin(p),0,Math.cos(p)],u=(L,k)=>[r+L[0]*l,k,o+L[2]*l],R=a.v(u(y,n),y,v),w=a.v(u(h,n),h,v),s=a.v(u(h,f),h,v),d=a.v(u(y,f),y,v);A.push(R,w,s,R,s,d)}}};return a}function xe(e,x,m,c,A,a){let r=null,o=null,l=[];for(let n=0;n<x.length;n++){let f=x[Math.max(0,n-1)],v=x[Math.min(x.length-1,n+1)],i=[v[0]-f[0],v[1]-f[1],v[2]-f[2]],z=Math.hypot(...i)||1;i=i.map(u=>u/z),o||(o=Math.abs(i[1])<.9?[0,1,0]:[1,0,0]);let g=o[0]*i[0]+o[1]*i[1]+o[2]*i[2];o=[o[0]-i[0]*g,o[1]-i[1]*g,o[2]-i[2]*g];let p=Math.hypot(...o)||1;o=o.map(u=>u/p);let y=[i[1]*o[2]-i[2]*o[1],i[2]*o[0]-i[0]*o[2],i[0]*o[1]-i[1]*o[0]],h=[];for(let u=0;u<c;u++){let R=u/c*Math.PI*2,w=Math.cos(R),s=Math.sin(R),d=[o[0]*w+y[0]*s,o[1]*w+y[1]*s,o[2]*w+y[2]*s];h.push(e.v([x[n][0]+d[0]*m,x[n][1]+d[1]*m,x[n][2]+d[2]*m],d,A,[a?a[n]:n,u]))}if(r)for(let u=0;u<c;u++){let R=(u+1)%c;e.idx.push(r[u],r[R],h[R],r[u],h[R],h[u])}r=h,l.push(h)}}var dt=(e,x)=>[e[0]+((e[5]===void 0?e[0]:e[5])-e[0])*x,e[1]-e[4]*4*x*(1-x),e[2]+.35+(e[3]-e[2]-.7)*x];function Ft(e,x,m){let c=[[-e,x],[-e,m]],A=2*e,a=14;for(let r=1;r<=a;r++){let o=Math.PI-r/a*(Math.PI/3);c.push([e+A*Math.cos(o),m+A*Math.sin(o)])}for(let r=1;r<=a;r++){let o=Math.PI/3-r/a*(Math.PI/3);c.push([-e+A*Math.cos(o),m+A*Math.sin(o)])}return c.push([e,x]),c}function Ht(e,x,m,c,A,a,r){let o=A?x.length:x.length-1;for(let l=0;l<o;l++){let n=x[l],f=x[(l+1)%x.length],v=f[0]-n[0],z=-(f[1]-n[1]),g=v,p=Math.hypot(z,g)||1;z/=p,g/=p;let y=(n[0]+f[0])/2-r[0],h=(n[1]+f[1])/2-r[1];z*y+g*h>0&&(z=-z,g=-g);let u=c(z,g,0,!0);e.quad(c(n[0],n[1],0),c(f[0],f[1],0),c(f[0],f[1],m),c(n[0],n[1],m),u,a,[n[0],n[1]],[f[0],f[1]],[f[0],f[1]],[n[0],n[1]])}}function To(){let e=Kt();e.quad([0,0,0],[0,0,Y],[I,0,Y],[I,0,0],[0,1,0],T.FLOOR),e.quad([0,0,Y],[0,0,0],[0,he,0],[0,he,Y],[1,0,0],T.WALL,[Y,0],[0,0],[0,he],[Y,he]),e.quad([I,0,0],[I,0,Y],[I,he,Y],[I,he,0],[-1,0,0],T.WALL,[0,0],[Y,0],[Y,he],[0,he]);let x=24;for(let a of[0,1]){let r=a?Y:0,o=[0,0,a?-1:1];for(let l=0;l<x;l++){let n=l/x*I,f=(l+1)/x*I,v=[n,0,r],i=[f,0,r],z=[f,i0(f),r],g=[n,i0(n),r];a?e.quad(i,v,g,z,o,T.WALL,[f,0],[n,0],[n,g[1]],[f,z[1]]):e.quad(v,i,z,g,o,T.WALL,[n,0],[f,0],[f,z[1]],[n,g[1]])}}let m=40;for(let a=0;a<m;a++){let r=a/m*I,o=(a+1)/m*I,l=i0(r),n=i0(o),f=(h,u)=>{let R=h<=I/2?h:I-h,w=(c0-R)/c0,s=(he-u)/c0;return h>I/2&&(w=-w),[w,s,0]},v=f(r,l),i=f(o,n),z=e.v([r,l,0],v,T.VAULT,[r,0]),g=e.v([o,n,0],i,T.VAULT,[o,0]),p=e.v([o,n,Y],i,T.VAULT,[o,Y]),y=e.v([r,l,Y],v,T.VAULT,[r,Y]);e.idx.push(z,g,p,z,p,y)}let c=Ft(H.hw,H.sill,H.spring),A=Ft(H.hw,H.lowSill,H.spring);for(let a=0;a<H.n;a++){let r=a===0?H.lowSill:H.sill,o=U0(a),l=a>=H.leftFrom;l&&Ht(e,c,j0,(g,p,y,h)=>h?[0,p,g]:[-y,p,o+g],!0,T.REVEAL,[0,(H.sill+H.apex)/2]),Ht(e,a===0?A:c,j0,(g,p,y,h)=>h?[0,p,g]:[I+y,p,o+g],!0,T.REVEAL,[0,(r+H.apex)/2]);let n=j0*.55,f=H.sill-.02,v=H.apex+.02,i=H.hw+.02;l&&e.quad([-n,f,o+i],[-n,f,o-i],[-n,v,o-i],[-n,v,o+i],[1,0,0],T.GLASS,[i,f],[-i,f],[-i,v],[i,v]);let z=r-.02;e.quad([I+n,z,o-i],[I+n,z,o+i],[I+n,v,o+i],[I+n,v,o-i],[-1,0,0],T.GLASS,[-i,z],[i,z],[i,v],[-i,v]),l&&e.box(-.02,H.sill-.12,o-H.hw-.18,.12,H.sill,o+H.hw+.18,T.TRIM),e.box(I-.12,r-(a===0?.05:.12),o-H.hw-.18,I+.02,r,o+H.hw+.18,T.TRIM)}{let a=I/2-ze.hw,r=I/2+ze.hw,o=ze.h,l=ze.depth;e.quad([a,0,-l],[a,0,0],[a,o,0],[a,o,-l],[1,0,0],T.REVEAL),e.quad([r,0,0],[r,0,-l],[r,o,-l],[r,o,0],[-1,0,0],T.REVEAL),e.quad([a,o,0],[r,o,0],[r,o,-l],[a,o,-l],[0,-1,0],T.REVEAL),e.quad([a,.001,-l],[r,.001,-l],[r,.001,0],[a,.001,0],[0,1,0],T.CFLOOR);let n=I/2-De.hw,f=I/2+De.hw,v=De.h,i=De.z;e.quad([n,0,i],[n,0,-l],[f,0,-l],[f,0,i],[0,1,0],T.CFLOOR),e.quad([n,0,-l],[n,0,i],[n,v,i],[n,v,-l],[1,0,0],T.CONC,[-l,0],[i,0],[i,v],[-l,v]),e.quad([f,0,i],[f,0,-l],[f,v,-l],[f,v,i],[-1,0,0],T.CONC,[i,0],[-l,0],[-l,v],[i,v]),e.quad([n,v,i],[n,v,-l],[f,v,-l],[f,v,i],[0,-1,0],T.CONC,[i,0],[-l,0],[-l,1],[i,1]),e.quad([f,0,i],[n,0,i],[n,v,i],[f,v,i],[0,0,1],T.CONC,[0,0],[1,0],[1,v],[0,v]);let z=-l;e.quad([n,0,z],[a,0,z],[a,v,z],[n,v,z],[0,0,-1],T.CONC,[n,0],[a,0],[a,v],[n,v]),e.quad([r,0,z],[f,0,z],[f,v,z],[r,v,z],[0,0,-1],T.CONC,[r,0],[f,0],[f,v],[r,v]),e.quad([a,o,z],[r,o,z],[r,v,z],[a,v,z],[0,0,-1],T.CONC,[a,o],[r,o],[r,v],[a,v]);let g=a,p=z-.01,y=De.open,h=ze.hw*2-.04,u=.045,R=[Math.cos(y),0,-Math.sin(y)],w=[Math.sin(y),0,Math.cos(y)],s=(E,S,G)=>[g+R[0]*E+w[0]*G,S,p+R[2]*E+w[2]*G],d=.012,L=o-.02;e.quad(s(0,d,u),s(h,d,u),s(h,L,u),s(0,L,u),w,T.DOOR),e.quad(s(h,d,0),s(0,d,0),s(0,L,0),s(h,L,0),w.map(E=>-E),T.DOOR),e.quad(s(h,d,u),s(h,d,0),s(h,L,0),s(h,L,u),R,T.DOOR),e.quad(s(0,L,u),s(h,L,u),s(h,L,0),s(0,L,0),[0,1,0],T.DOOR);let k=s(h-.09,1.02,u+.03);xe(e,[s(h-.09,1.02,u),k,[k[0]-R[0]*.12,k[1],k[2]-R[2]*.12]],.011,6,T.STEEL);let P=De.sign;e.box(P[0]-.33,P[1]-.12,P[2]-.02,P[0]+.33,P[1]+.12,z,T.TRIM)}for(let a of te){for(let n of[.2,I-.2])e.box(n-.42,0,a-.42,n+.42,.5,a+.42,T.TRIM),e.cyl(n,a,.27,.5,he-.55,T.TRIM),e.cyl(n+(n<I/2?.2:-.2),a-.36,.1,.5,he-.55,T.TRIM,10),e.cyl(n+(n<I/2?.2:-.2),a+.36,.1,.5,he-.55,T.TRIM,10),e.box(n-.45,he-.55,a-.5,n+.45,he-.25,a+.5,T.TRIM);let r=40,o=.22,l=.22;for(let n=0;n<r;n++){let f=n/r*I,v=(n+1)/r*I,i=i0(f),z=i0(v),g=[I/2-f,-(i-he+2),0],p=[I/2-v,-(z-he+2),0],y=s=>{let d=Math.hypot(s[0],s[1])||1;return[s[0]/d,s[1]/d,0]},h=y(g),u=y(p),R=[f+h[0]*l,i+h[1]*l],w=[v+u[0]*l,z+u[1]*l];e.quad([R[0],R[1],a-o],[w[0],w[1],a-o],[w[0],w[1],a+o],[R[0],R[1],a+o],h,T.TRIM),e.quad([f,i,a-o],[v,z,a-o],[w[0],w[1],a-o],[R[0],R[1],a-o],[0,0,-1],T.TRIM),e.quad([v,z,a+o],[f,i,a+o],[R[0],R[1],a+o],[w[0],w[1],a+o],[0,0,1],T.TRIM)}}{let a=C,r=a.top,o=a.basin,l=(g,p,y)=>{if(e.box(0,0,g,a.depth-.06,.12,p,T.TRIM),e.quad([a.depth,.12,g],[a.depth,.12,p],[a.depth,r,p],[a.depth,r,g],[1,0,0],T.TILE,[g,.12],[p,.12],[p,r],[g,r]),e.quad([0,.12,g],[a.depth,.12,g],[a.depth,r,g],[0,r,g],[0,0,-1],T.TILE,[0,.12],[a.depth,.12],[a.depth,r],[0,r]),e.quad([a.depth,.12,p],[0,.12,p],[0,r,p],[a.depth,r,p],[0,0,1],T.TILE,[a.depth,.12],[0,.12],[0,r],[a.depth,r]),!y){e.quad([0,r,g],[0,r,p],[a.depth,r,p],[a.depth,r,g],[0,1,0],T.TILE,[0,g],[0,p],[a.depth,p],[a.depth,g]);return}let h=(u,R,w,s)=>e.quad([u,r,w],[u,r,s],[R,r,s],[R,r,w],[0,1,0],T.TILE,[u,w],[u,s],[R,s],[R,w]);h(0,o.x0,g,p),h(o.x1,a.depth,g,p),h(o.x0,o.x1,g,o.z0),h(o.x0,o.x1,o.z1,p),e.quad([o.x0,o.floor,o.z0],[o.x0,o.floor,o.z1],[o.x1,o.floor,o.z1],[o.x1,o.floor,o.z0],[0,1,0],T.TILE,[o.x0,o.z0],[o.x0,o.z1],[o.x1,o.z1],[o.x1,o.z0]),e.quad([o.x0,o.floor,o.z1],[o.x0,o.floor,o.z0],[o.x0,r,o.z0],[o.x0,r,o.z1],[1,0,0],T.TILE,[o.z1,o.floor],[o.z0,o.floor],[o.z0,r],[o.z1,r]),e.quad([o.x1,o.floor,o.z0],[o.x1,o.floor,o.z1],[o.x1,r,o.z1],[o.x1,r,o.z0],[-1,0,0],T.TILE,[o.z0,o.floor],[o.z1,o.floor],[o.z1,r],[o.z0,r]),e.quad([o.x0,o.floor,o.z0],[o.x1,o.floor,o.z0],[o.x1,r,o.z0],[o.x0,r,o.z0],[0,0,1],T.TILE,[o.x0,o.floor],[o.x1,o.floor],[o.x1,r],[o.x0,r]),e.quad([o.x1,o.floor,o.z1],[o.x0,o.floor,o.z1],[o.x0,r,o.z1],[o.x1,r,o.z1],[0,0,-1],T.TILE,[o.x1,o.floor],[o.x0,o.floor],[o.x0,r],[o.x1,r])};l(a.a[0],a.a[1],!0),l(a.b[0],a.b[1],!1);for(let[g,p]of[a.a,a.b])e.quad([.012,r,p],[.012,r,g],[.012,r+.62,g],[.012,r+.62,p],[1,0,0],T.TILE,[p,r],[g,r],[g,r+.62],[p,r+.62]);let n=g=>{let p=o.floor+.004,y=p+a.TH,h=a.TX/2,u=a.TZ/2,R=.02,w=a.TXc,s=[[w-h+R,g-u+R],[w+h-R,g-u+R],[w+h-R,g+u-R],[w-h+R,g+u-R]],d=[[w-h,g-u],[w+h,g-u],[w+h,g+u],[w-h,g+u]];e.quad([s[0][0],p,s[0][1]],[s[3][0],p,s[3][1]],[s[2][0],p,s[2][1]],[s[1][0],p,s[1][1]],[0,1,0],T.STEEL);for(let L=0;L<4;L++){let k=(L+1)%4,P=[s[L][0],p,s[L][1]],E=[s[k][0],p,s[k][1]],S=[d[k][0],y,d[k][1]],G=[d[L][0],y,d[L][1]],B=(s[L][0]+s[k][0])/2-w,re=(s[L][1]+s[k][1])/2-g,Z=Math.hypot(B,re)||1;e.quad(P,E,S,G,[-B/Z*.95,.3,-re/Z*.95],T.STEEL),e.quad(E,P,[G[0],p+.001,G[2]],[S[0],p+.001,S[2]],[B/Z,0,re/Z],T.STEEL)}xe(e,[...d,d[0]].map(L=>[L[0],y+.004,L[1]]),.005,5,T.STEEL)};for(let g of a.trays)n(g);let f=(g,p,y,h,u,R)=>{for(let w of[-.012,.012])xe(e,[[g,u,p+w],[(g+y)/2,(u+R)/2+.006,(p+h)/2+w*.6],[y,R,h+w*.2]],.0045,5,T.PEG)};f(a.TXc+.05,a.trays[0]+.12,a.TXc+.27,a.trays[0]+.42,a.liquid-.005,a.top+.03),f(a.TXc-.1,a.trays[2]-.2,a.TXc+.24,a.trays[2]-.05,a.liquid+.002,a.liquid+a.TH*.9);let v=o.z1-.3;xe(e,[[0,1.32,v],[.18,1.32,v],[.27,1.3,v],[.32,1.22,v],[.33,1.12,v]],.016,8,T.STEEL),e.box(0,1.27,v-.05,.05,1.37,v+.05,T.STEEL);let i=C.bulb;xe(e,[[0,2.32,i[2]],[i[0]*.6,2.32,i[2]],[i[0],2.28,i[2]]],.012,6,T.TRIM),e.box(0,2.24,i[2]-.06,.03,2.4,i[2]+.06,T.TRIM),xe(e,[[i[0],2.28,i[2]],[i[0]+.004,1.9,i[2]+.003],[i[0],i[1]+.2,i[2]]],.004,5,T.CABLE);{let g=J.vase,p=J.top,y=[[.045,0],[.07,.03],[.08,.09],[.072,.15],[.05,.2],[.042,.225],[.05,g.h]],h=24;for(let u=0;u<y.length-1;u++){let[R,w]=y[u],[s,d]=y[u+1];for(let L=0;L<h;L++){let k=L/h*Math.PI*2,P=(L+1)/h*Math.PI*2,E=(B,re,Z)=>[g.x+Math.cos(Z)*B,p+re,g.z+Math.sin(Z)*B],S=B=>{let re=s-R,Z=d-w,K=Math.hypot(re,Z);return[Math.cos(B)*Z/K,-re/K,Math.sin(B)*Z/K]},G=(k+P)/2;e.quad(E(R,w,k),E(R,w,P),E(s,d,P),E(s,d,k),S(G),T.TRIM)}}}{let g=a.trays[1]+.12,p=a.TXc+a.TX/2-.03;xe(e,[[p-.12,a.liquid-.02,g-.02],[p+.02,a.liquid+.13,g+.02]],.0035,6,T.STEEL);let y=[p+.03,a.liquid+.145,g+.024],h=[.62,.66,.42];xe(e,[[y[0]-h[0]*.008,y[1]-h[1]*.008,y[2]-h[2]*.008],[y[0]+h[0]*.012,y[1]+h[1]*.012,y[2]+h[2]*.012]],.026,14,T.STEEL)}{let g=a.top,p=a.ash.x,y=a.ash.z,h=[p-.012,g+.027,y+.006],u=[p+.066,g+.041,y-.012],R=w=>[h[0]+(u[0]-h[0])*w,h[1]+(u[1]-h[1])*w,h[2]+(u[2]-h[2])*w];xe(e,[h,R(.03)],.0041,8,T.TUBE),xe(e,[R(.03),R(.2)],.0042,8,T.ASH),xe(e,[R(.2),R(.7)],.0043,8,T.PAPER),xe(e,[R(.7),u],.0044,8,T.PEG),a.smoke=h}{let g=a.top;xe(e,[[.62,g+.042,12.02],[.62,g+.042,12.045]],.042,16,T.PEG),xe(e,[[.62,g+.042,12.018],[.62,g+.042,12.047]],.024,12,T.TRIM);let p=W0;e.box(p.x0,g,p.z0,p.x1,g+p.h,p.z1,T.TRIM),e.box(p.x0+.004,g+p.h,p.z0+.004,p.x1-.004,g+p.h+.001,p.z1-.004,T.VOID);let y=p.z1+.012;e.quad([p.x0-.01,g,y+.05],[p.x1+.01,g,y+.05],[p.x1+.01,g+.24,y],[p.x0-.01,g+.24,y],[0,.2,.98],T.TRIM)}let z=C.tube;xe(e,[[z.x+.02,z.y,z.z0],[z.x+.02,z.y,(z.z0+z.z1)/2],[z.x+.02,z.y,z.z1]],.035,10,T.TUBE),e.box(0,z.y-.05,z.z0-.06,.07,z.y+.05,z.z0-.01,T.TRIM),e.box(0,z.y-.05,z.z1+.01,.07,z.y+.05,z.z1+.06,T.TRIM);for(let g of C.lines){let p=[];for(let y=0;y<=24;y++){let h=y/24;p.push(dt(g,h))}xe(e,p,.0035,5,T.CABLE);for(let y of[p[0],p[24]])xe(e,[[0,y[1]+.05,y[2]],[y[0]*.5,y[1]+.02,y[2]],[y[0]+.02,y[1],y[2]]],.007,5,T.TRIM)}}ae.stack.forEach((a,r)=>{let o=ae.models[a[0]],l=ae.G,n=I/2+a[2],f=ae.z+a[4]+o.d*l*.85,v=a.base+.12*l,i=I/2+(r%3-1)*.5,z=ae.z+2.3+r%4*.12;xe(e,[[n,v,f-.05],[n+.05,v-.02,f+.15],[n+.1,Math.max(.02,v*.4),f+.35],[n*.6+i*.4,.018,f+.6],[i,.018,z]],.012,6,T.CABLE)});{let a=Ee.path,r=[0];for(let o=1;o<a.length;o++)r.push(r[o-1]+Math.hypot(a[o][0]-a[o-1][0],a[o][1]-a[o-1][1],a[o][2]-a[o-1][2]));Ee.length=r[r.length-1],xe(e,Ee.path,Ee.r,16,T.MAINCABLE,r)}{let[a,r,o]=Ee.socket;e.box(a,r-.07,o-.07,a+.018,r+.07,o+.07,T.STEEL),e.box(a+.018,r-.035,o-.032,a+.11,r+.035,o+.032,T.TRIM),e.box(a,r+.042,o+.035,a+.03,r+.058,o+.051,T.TUBE)}e.box(ue.x0-.08,ue.y-.07,Y-.08,ue.x0-.02,ue.y+.07,Y,T.TRIM),e.box(ue.x1+.02,ue.y-.07,Y-.08,ue.x1+.08,ue.y+.07,Y,T.TRIM),xe(e,[[ue.x0-.02,ue.y,ue.z],[(ue.x0+ue.x1)/2,ue.y,ue.z],[ue.x1+.02,ue.y,ue.z]],.045,10,T.TUBE);for(let a of[0,1]){let r=a?I-.06:0,o=a?I:.06;e.box(r,0,0,o,.24,Y,T.TRIM),e.box(a?I-.05:0,1,0,a?I:.05,1.08,Y,T.TRIM);let l=a?I-.32:0,n=a?I:.32;e.box(l,he-.25,0,n,he+.08,Y,T.TRIM)}for(let a of[0,1]){let r=a?Y-.06:0,o=a?Y:.06;a?e.box(0,0,r,I,.24,o,T.TRIM):(e.box(0,0,r,I/2-ze.hw,.24,o,T.TRIM),e.box(I/2+ze.hw,0,r,I,.24,o,T.TRIM));let l=a?Y-.32:0,n=a?Y:.32;e.box(0,he-.25,l,I,he+.08,n,T.TRIM)}return e}function So(){let e=7,x=0,m=()=>(x++*23+5)%a0.n,c=()=>(e=e*16807%2147483647,(e-1)/2147483646),A=[],a=[],r=[],o=[],l=[],n=[],f=[],v=3,i=4,z=(w,s,d,L,k,P,E,S,G,B)=>{let re=B?B[0]:a0.w*k,Z=B?B[1]:a0.h*k,K=A.length/3;for(let se=0;se<=i;se++)for(let me=0;me<=v;me++){let oe=me/v,q=se/i,F=(oe-.5)*re,W=(q-.5)*Z,be=S*((oe-.5)*(oe-.5)*4+(1-q)*(1-q)*.6);A.push(O[0]+w[0]+s[0]*F+d[0]*W+L[0]*be,O[1]+w[1]+s[1]*F+d[1]*W+L[1]*be,O[2]+w[2]+s[2]*F+d[2]*W+L[2]*be),a.push(L[0],L[1],L[2]),r.push(oe,q),o.push(P),f.push(G||0),l.push(E[0]+O[0],E[1]+O[1],E[2]+O[2],E[3])}for(let se=0;se<i;se++)for(let me=0;me<v;me++){let oe=K+se*(v+1)+me,q=oe+1,F=oe+v+1,W=F+1;n.push(oe,q,W,oe,W,F)}},g=(w,s,d)=>{let L=Math.cos(d),k=Math.sin(d);return[w.map((P,E)=>P*L+s[E]*k),s.map((P,E)=>-w[E]*k+P*L)]},p=[0,0,0,0],y=0,h=(w,s,d,L,k,P,E,S,G)=>{let Z=0;for(let K=P;K<E;K+=.48)for(let se=L;se<k;se+=.4){let me=se+(c()-.5)*.4*.7,oe=K+(c()-.5)*.48*.6;if(c()>S(me,oe))continue;let[q,F]=g(d,[0,1,0],(c()-.5)*.5),W=w(me,oe,.012+.0016*(Z++%9)+c()*.004),be=.88+c()*.3;z(W,q,F,s,be,m(),p,(c()-.3)*.02),a0.spots.length<400&&a0.spots.push({c:W,n:s,up:F,size:a0.h*be}),y++}},u=(w,s,d)=>Math.exp(-Math.pow((w-s)/d,2));for(let w=0;w<H.n-1;w++){let s=te[w+1],d=[[U0(w)+H.hw+.32,s-.66],[s+.66,U0(w+1)-H.hw-.32]];for(let[L,k]of d){let P=(E,S)=>.85*u(S,3.4,1.7);k>C.b[1]+.3&&h((E,S,G)=>[G,S,E],[1,0,0],[0,0,-1],L,k,1.45,6.3,P),h((E,S,G)=>[I-G,S,E],[-1,0,0],[0,0,1],L,k,1.45,6.3,P)}}let R=[];for(let w of C.lines){let s=w[3]-w[2]-.7;for(let d=.18;d<s-.1;d+=.3+c()*.14){let L=d/s,k=dt(w,L);if(c()<.1||Math.abs(k[2]-C.bulb[2])<.4&&k[1]>2.3)continue;let P=.56+c()*.14,E=a0.h*P,S=(c()-.5)*.7,G=c()<.3?c()<.5?-.75:.75:S,[B,re]=g([0,0,-1],[0,1,0],G),Z=[1,0,0],K=[k[0]+.004,k[1]-.02-re[1]*E*.5,k[2]-re[2]*E*.5];z(K,B,re,Z,P,m(),[k[0],k[1],k[2],-(.04+c()*.06)],.01+c()*.025,1),C.hung.length<200&&C.hung.push({c:K,h:E,peg:k}),R.push(k),y++}}J.letters.forEach((w,s)=>{let d=[Math.cos(w.a),0,Math.sin(w.a)],L=[-Math.sin(w.a),0,Math.cos(w.a)];z([w.x,J.top+w.y,w.z],L,d,[0,1,0],1,s,p,.003,6,[w.w,w.h]),y++});{let[w,s]=J.stack,d=[0,1,0];for(let k=0;k<9;k++){let P=(c()-.5)*.35+.3;z([w+(c()-.5)*.012,J.top+.003+k*.0022,s+(c()-.5)*.012],[Math.cos(P),0,Math.sin(P)],[Math.sin(P),0,-Math.cos(P)],d,.26,m(),p,.004),y++}[[.13,.12,.9],[-.04,.2,-.4],[.2,-.05,1.6]].forEach(([k,P,E],S)=>{z([w+k,J.top+.002+S*.0012,s+P],[Math.cos(E),0,Math.sin(E)],[Math.sin(E),0,-Math.cos(E)],d,.26,m(),p,.006),y++})}{let w=[0,1,0],s=(P,E,S,G,B,re,Z,K,se)=>{z([P,E,S],[Math.cos(G),0,Math.sin(G)],[Math.sin(G),0,-Math.cos(G)],w,1,Z,p,se||0,K,[B,re]),y++},d=C.basin.floor+.002,L=C.top+.0015;s(.36,d,4.78,.25,.2,.25,m(),1,.003),s(.44,d+.0012,5.02,-.4,.2,.25,m(),1,.004),s(.3,d+.0024,5.3,1.3,.2,.25,m(),5,.006),s(.47,d,5.62,.1,.2,.25,m(),3,.002),s(.33,d+.0012,5.95,-1,.2,.25,m(),1,.005),s(.6,d+.003,C.trays[0]-.4,.2,.036,.22,m(),2,.01),s(.55,L+5e-4,9.24,.35,.2,.25,m(),3,.004),s(.5,L+.001,11.88,1.35,.036,.23,m(),2,.012),s(.45,L+.0017,11.97,1.55,.036,.23,m(),2,.009),s(.36,L+.001,12.08,-.25,.2,.25,m(),5,.004),s(.43,W0.h+L+.0012,(W0.z0+W0.z1)/2,.06,.2,.25,m(),5,.002);for(let[P,E,S,G]of[[.56,9.38,.11,.3],[.2,9.9,.1,1.1],[.47,10.95,.16,2],[.3,12,.12,.7],[.5,8.7,.14,2.4],[.5,6.3,.18,1.9]]){let B=(E<C.a[1]?d:L)+4e-4;s(P,B,E,G,S,S,m(),4,0)}let k=C.lines[6];for(let P of[.42,.47,.53,.66]){let E=dt(k,P),S=.2+c()*.06,[G,B]=g([0,0,-1],[0,1,0],(c()-.5)*.12);z([E[0]+.003,E[1]-.012-S/2,E[2]],G,B,[1,0,0],1,m(),[E[0],E[1],E[2],-(.03+c()*.04)],.008,2,[.036,S]),R.push(E),y++}}return{pos:A,nrm:a,uv:r,pic:o,piv:l,idx:n,sty:f,pegs:R,count:y}}var Se=`
	const float RW = ${b(I)}, RL = ${b(Y)}, RH = ${b(he)}, RT = ${b(j0)};
	const float HW = ${b(H.hw)}, SILL = ${b(H.sill)}, SPRING = ${b(H.spring)};
	const float WZ0 = ${b(H.z0)}, WSTEP = ${b(H.step)};
	const vec3 RO = vec3(${b(O[0])}, ${b(O[1])}, ${b(O[2])});
	const vec3 LDIR_L = vec3(${b(Ie[0])}, ${b(Ie[1])}, ${b(Ie[2])});
	const vec3 LDIR_R = vec3(${b(-Ie[0])}, ${b(Ie[1])}, ${b(Ie[2])});

	float rhash(vec2 p) {
		vec3 p3 = fract(vec3(p.x, p.y, p.x) * 0.1031);
		p3 += dot(p3, p3.yzx + 33.33);
		return fract((p3.x + p3.y) * p3.z);
	}
	float rnoise(vec2 p) {
		vec2 i = floor(p), g = fract(p);
		g = g * g * (3.0 - 2.0 * g);
		return mix(mix(rhash(i), rhash(i + vec2(1.0, 0.0)), g.x), mix(rhash(i + vec2(0.0, 1.0)), rhash(i + vec2(1.0, 1.0)), g.x), g.y);
	}
	float rfbm(vec2 p) {
		float s = 0.0, a = 0.5;
		for (int i = 0; i < 4; i++) { s += a * rnoise(p); p = p * 2.03 + 7.1; a *= 0.5; }
		return s;
	}

	// how far inside a pointed opening (q: across from its middle, up),
	// negative outside
	float pointedSD(vec2 q, float hw, float sill, float spring) {
		float au = abs(q.x);
		float d = q.y < spring ? hw - au : 2.0 * hw - length(vec2(au + hw, q.y - spring));
		return min(d, q.y - sill);
	}
	// which window a point along a long wall belongs to, and where in it
	float winIdx(float z) { return clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${b(H.n-1)}); }
	// (on the left, the first windows are walled up)
	float leftOpen(float z) { return step(${b(H.leftFrom-.5)}, winIdx(z)); }
	vec2 winLocal(float z, float y) {
		float i = clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${b(H.n-1)});
		return vec2(z - (WZ0 + WSTEP * i), y);
	}
	// (on the right, the first window comes down to the table: its height
	// below the springing is stretched onto the others' shape)
	const float LSILL = ${b(H.lowSill)};
	float lowY(float z, float y) { return (winIdx(z) < 0.5 && y < SPRING) ? SILL + (y - LSILL) * (SPRING - SILL) / (SPRING - LSILL) : y; }
	vec2 winLocalR(float z, float y) { return vec2(winLocal(z, y).x, lowY(z, y)); }

	// the window's stonework and leading: 1 where the glass is clear, 0 on
	// the stone and the lead (w: how soft the edges are)
	float glassOpen(vec2 q, float w) {
		float sd = pointedSD(q, HW, SILL, SPRING);
		if (sd < 0.0) return 0.0;
		float stone = 1.0 - smoothstep(0.09, 0.09 + w, sd);
		// the mullion, up to the lancets' points
		float la = HW * 0.5 - 0.05;
		float lApex = SPRING + la * 1.7320508;
		stone = max(stone, (1.0 - smoothstep(0.07, 0.07 + w, abs(q.x))) * step(q.y, lApex + 0.05));
		// the two lancets' pointed heads
		float lu = abs(abs(q.x) - HW * 0.5);
		float lr = length(vec2(lu + la, q.y - SPRING));
		stone = max(stone, (1.0 - smoothstep(0.065, 0.065 + w, abs(lr - 2.0 * la))) * step(SPRING, q.y) * step(lu + la, 2.0 * la + 0.2));
		// the ring in the head
		vec2 rc = vec2(0.0, SPRING + HW * 1.08);
		float rr = HW * 0.42;
		float ring = abs(length(q - rc) - rr);
		stone = max(stone, 1.0 - smoothstep(0.065, 0.065 + w, ring));
		// the four little cusps in the ring
		vec2 rq = q - rc;
		float cusp = abs(length(abs(rq) - vec2(rr * 0.5)) - rr * 0.32);
		stone = max(stone, (1.0 - smoothstep(0.022, 0.022 + w, cusp)) * step(length(rq), rr));
		// the leads: long diamonds, with an upright through each lancet
		float inRing = step(length(rq), rr);
		vec2 lq = mix(q, rq * 1.6, inRing);
		float sx = 0.2, sy = 0.36;
		vec2 a = vec2(lq.x / sx + lq.y / sy, -lq.x / sx + lq.y / sy);
		vec2 fa = abs(fract(a) - 0.5);
		float lead = 1.0 - smoothstep(0.04, 0.04 + w * 4.0, 0.5 - max(fa.x, fa.y));
		lead = max(lead, (1.0 - smoothstep(0.012, 0.012 + w, abs(lu))) * step(q.y, lApex) * (1.0 - inRing));
		// and level bars every so often
		float bar = abs(fract((q.y - SILL) / 0.72) - 0.5);
		lead = max(lead, smoothstep(0.482, 0.484 + w * 1.2, bar) * (1.0 - inRing));
		return (1.0 - stone) * (1.0 - lead * 0.92);
	}
	// the glass itself: deep red, hot where the light is strongest, mottled
	// like old pot-metal glass
	vec3 glassTint(vec2 q) {
		float m = rfbm(q * vec2(1.6, 0.9) + 3.0);
		float pane = rhash(floor(vec2(q.x / 0.24 + q.y / 0.42, -q.x / 0.24 + q.y / 0.42)));
		float hot = smoothstep(0.35, 0.95, m) * (0.6 + 0.4 * pane);
		float k = 0.55 + 0.7 * m + 0.25 * pane;
		return mix(vec3(0.62, 0.03, 0.02), vec3(1.0, 0.36, 0.2), hot) * k;
	}

	// the same, roughly: the openings only, the glass's average colour (for
	// the light thrown back off the floor, which is soft anyway)
	vec3 redLightRough(vec3 p) {
		float t = -p.x / LDIR_L.x;
		vec3 h = p + LDIR_L * t;
		float a = smoothstep(-0.1, 0.25, pointedSD(winLocal(h.z, h.y), HW, SILL, SPRING)) * leftOpen(h.z);
		t = (RW - p.x) / LDIR_R.x;
		h = p + LDIR_R * t;
		a += smoothstep(-0.1, 0.25, pointedSD(winLocalR(h.z, h.y), HW, SILL, SPRING));
		return vec3(0.75, 0.08, 0.05) * a * 0.62;
	}
	// for the air: the leading, but the glass's colour left plain
	vec3 redLightAir(vec3 p) {
		vec3 sum = vec3(0.0);
		float t = (-RT * 0.55 - p.x) / LDIR_L.x;
		vec3 h = p + LDIR_L * t;
		sum += vec3(0.8, 0.09, 0.05) * glassOpen(winLocal(h.z, h.y), 0.06) * leftOpen(h.z);
		t = (RW + RT * 0.55 - p.x) / LDIR_R.x;
		h = p + LDIR_R * t;
		sum += vec3(0.8, 0.09, 0.05) * glassOpen(winLocalR(h.z, h.y), 0.06);
		return sum;
	}

	// the red light at a point in the room (room metres), through both
	// rows of windows; soft: how much to blur the leading
	vec3 redLight(vec3 p, float soft) {
		vec3 sum = vec3(0.0);
		// the left wall's windows
		{
			float t = (-RT * 0.55 - p.x) / LDIR_L.x;
			vec3 h = p + LDIR_L * t;
			vec2 q = winLocal(h.z, h.y);
			float t0 = -p.x / LDIR_L.x;
			vec3 h0 = p + LDIR_L * t0;
			vec2 q0 = winLocal(h0.z, h0.y);
			float open = glassOpen(q, soft) * step(0.0, pointedSD(q0, HW, SILL, SPRING) + 0.02) * leftOpen(h.z);
			sum += glassTint(q) * open;
		}
		// the right wall's
		{
			float t = (RW + RT * 0.55 - p.x) / LDIR_R.x;
			vec3 h = p + LDIR_R * t;
			vec2 q = winLocalR(h.z, h.y);
			float t0 = (RW - p.x) / LDIR_R.x;
			vec3 h0 = p + LDIR_R * t0;
			vec2 q0 = winLocalR(h0.z, h0.y);
			float open = glassOpen(q, soft) * step(0.0, pointedSD(q0, HW, SILL, SPRING) + 0.02);
			sum += glassTint(q + 11.0) * open;
		}
		return sum;
	}
`;function Ro(){return`
	#define STUDIO_SUN ${"vec3("+b(Ie[0])+", "+b(Ie[1])+", "+b(Ie[2])+")"}
	#define STUDIO_SUN2 ${"vec3("+b(-Ie[0])+", "+b(Ie[1])+", "+b(Ie[2])+")"}
	#define SHAFT_TINT vec3(0.6, 0.012, 0.008)
	#define STUDIO_AIR_EVEN
	${Se}
	float studioSun(vec3 p) {
		vec3 lp = p - RO;
		if (lp.x < 0.0 || lp.x > RW || lp.z < 0.0 || lp.z > RL || lp.y > RH + 2.0) return 0.0;
		vec3 c = redLightAir(lp);
		return dot(c, vec3(0.7, 0.2, 0.1)) * 3.2;
	}`}var jt=`
	precision highp float;
	uniform mat4 proj, view;
	uniform float yScale;
	attribute vec3 position, normal;
	attribute float kind;
	attribute vec2 uv;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	#ifdef HAS_BAKE
	attribute vec3 a_lm;
	varying vec3 v_lm;
	#endif
	void main() {
		v_pos = position; v_nrm = normal; v_kind = kind; v_uv = uv;
		#ifdef HAS_BAKE
		v_lm = a_lm;
		#endif
		vec3 t = view[3].xyz;
		v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
		v_eye.y *= yScale;
		vec3 p = position; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`,n0=`
	// the televisions' flicker, thrown on whatever is in front of them
	uniform vec4 tvLight;
	vec3 tvGlow(vec3 lp, vec3 N) {
		vec3 d = vec3(${b(I/2)}, 1.35, ${b(ae.z-.9)}) - lp;
		float dd = dot(d, d);
		float face = 0.35 + 0.65 * max(0.0, dot(N, normalize(d)));
		// (only in front of them: the stack's own back is in its shadow)
		float front = smoothstep(${b(ae.z+.6)}, ${b(ae.z-.2)}, lp.z);
		return tvLight.rgb * face * front / (1.0 + dd * 0.55);
	}
	// THE FILM: his memories as an old print would show them, drained to
	// a warm grey, flickering, weaving in the gate, grained, scratched,
	// specked with dust, burnt at its edges; a new memory every few seconds,
	// with a flash of bare light between
	uniform sampler2D memTex;
	uniform float projT, memRot, vidOn;
	uniform sampler2D vidTex;
	vec3 film(vec2 uv) {
		float t = projT;
		float fr = floor(t * 18.0);
		float shot = floor(t / 3.4);
		float k = mod(48.0 + floor(rhash(vec2(shot, 4.7)) * 4.0) + 4.0 * memRot, 52.0);
		float f = fract(t / 3.4);
		uv += vec2(sin(t * 13.0) * 0.0015 + (rhash(vec2(fr, 1.0)) - 0.5) * 0.003, (rhash(vec2(fr, 2.0)) - 0.5) * 0.006);
		// (each shot moves, as if filmed: a slow push in, drifting one way)
		vec2 dr = vec2(rhash(vec2(shot, 8.1)), rhash(vec2(shot, 9.3))) - 0.5;
		uv = 0.5 + (uv - 0.5) * (0.9 - 0.07 * f) + dr * 0.08 * (f - 0.5);
		// an old print, only a touch soft: its colours faded, not gone
		vec2 su = clamp((floor(uv * vec2(300.0, 225.0)) + 0.5) / vec2(300.0, 225.0), 0.01, 0.99);
		vec2 tile = vec2(mod(k, 8.0), floor(k / 8.0));
		vec3 pc = vec3(0.0);
		for (int i = 0; i < 5; i++) {
			vec2 o = i == 0 ? vec2(0.0) : vec2(i == 1 ? 1.0 : (i == 2 ? -1.0 : 0.0), i == 3 ? 1.0 : (i == 4 ? -1.0 : 0.0)) * 0.0042;
			vec2 q = vec2(clamp(su.x + o.x, 0.005, 0.995), 1.0 - clamp(su.y + o.y, 0.005, 0.995));
			// (his clips, from the reel; between them a still or two)
			pc += (vidOn > 0.5 ? texture2D(vidTex, q).rgb : texture2D(memTex, (tile + q) / 8.0).rgb) * (i == 0 ? 0.4 : 0.15);
		}
		float l = dot(pc, vec3(0.3, 0.59, 0.11));
		float l0 = clamp((l - 0.04) * 1.18, 0.0, 1.0);
		vec3 pcol = mix(vec3(l0), pc * (l0 / max(l, 0.02)), 0.5);
		l = pow(l0, 1.1);
		// grain, dust and hairs, scratches running down the print
		l += (rhash(floor(uv * vec2(260.0, 195.0)) + fr * 7.1) - 0.5) * 0.16;
		l *= 1.0 - step(0.9975, rhash(floor(uv * vec2(70.0, 52.0)) + fr * 3.3)) * 0.9;
		float sx = rhash(vec2(floor(t * 2.0), 9.0));
		l += smoothstep(0.0016, 0.0, abs(uv.x - sx)) * 0.5 * step(0.5, rhash(vec2(fr, 5.0)));
		l -= smoothstep(0.0012, 0.0, abs(uv.x - fract(sx * 3.7))) * 0.4;
		// the lamp breathes; between memories, a burst of bare light
		l *= 0.82 + 0.18 * rhash(vec2(fr, 3.0));
		float gap = 1.0 - smoothstep(0.0, 0.05, f) + smoothstep(0.97, 1.0, f);
		l = mix(l, 0.9 + 0.1 * rhash(vec2(fr, 6.0)), gap);
		// the light falls off to the edges and corners of the frame
		vec2 e = uv * (1.0 - uv);
		float vig = clamp(pow(e.x * e.y * 16.0, 0.45), 0.0, 1.0);
		vec3 c = mix(vec3(l), pcol * (l / max(l0, 0.02)), 0.36 * (1.0 - gap));
		return vec3(1.0, 0.86, 0.66) * max(c, 0.0) * vig;
	}
	// where a point in the room is in the projected picture (x, y in 0..1;
	// z: how far along the beam, 0 at the lens, 1 at the wall)
	vec3 projUV(vec3 lp) {
		vec3 L0 = vec3(${b(V.lens[0])}, ${b(V.lens[1])}, ${b(V.lens[2])});
		vec3 d = lp - L0;
		float s = (${b(Y-.005)} - L0.z) / max(d.z, 1e-4);
		vec3 h = L0 + d * s;
		return vec3(1.0 - (h.x - ${b(V.img.x-V.img.w/2)}) / ${b(V.img.w)}, (h.y - ${b(V.img.y-V.img.h/2)}) / ${b(V.img.h)}, 1.0 / s);
	}
	// the televisions stand in the beam's way: their shadows on the picture
	uniform vec3 tvLo[12], tvHi[12];
	float projShadow(vec3 lp) {
		vec3 L0 = vec3(${b(V.lens[0])}, ${b(V.lens[1])}, ${b(V.lens[2])});
		vec3 d = lp - L0;
		vec3 inv = 1.0 / d;
		for (int i = 0; i < 12; i++) {
			vec3 t0 = (tvLo[i] - L0) * inv, t1 = (tvHi[i] - L0) * inv;
			vec3 tn = min(t0, t1), tf = max(t0, t1);
			float a = max(max(tn.x, tn.y), tn.z), b = min(min(tf.x, tf.y), tf.z);
			if (a < b && b > 0.0 && a < 0.995) return 0.0;
		}
		return 1.0;
	}

	// the safelight: a long red tube on the far wall
	vec3 safeLight(vec3 lp, vec3 N) {
		vec3 c = vec3(clamp(lp.x, ${b(ue.x0)}, ${b(ue.x1)}), ${b(ue.y)}, ${b(ue.z)});
		vec3 d = c - lp;
		float dd = dot(d, d);
		float face = 0.25 + 0.75 * max(0.0, dot(N, normalize(d)));
		return vec3(1.0, 0.06, 0.045) * 2.6 * face / (1.0 + dd * 0.055);
	}
	// the darkroom: the bare red bulb over the trays, the tube over the lines
	vec3 darkLight(vec3 lp, vec3 N) {
		vec3 d = vec3(${b(C.bulb[0])}, ${b(C.bulb[1])}, ${b(C.bulb[2])}) - lp;
		float dd = dot(d, d);
		vec3 c = vec3(1.0, 0.07, 0.04) * 1.15 * (0.2 + 0.8 * max(0.0, dot(N, normalize(d)))) / (0.02 + dd * 2.2);
		vec3 tq = vec3(${b(C.tube.x+.02)}, ${b(C.tube.y)}, clamp(lp.z, ${b(C.tube.z0)}, ${b(C.tube.z1)}));
		vec3 e = tq - lp;
		float ee = dot(e, e);
		c += vec3(1.0, 0.06, 0.045) * 1.5 * (0.2 + 0.8 * max(0.0, dot(N, normalize(e)))) / (0.05 + ee * 0.9);
		return c;
	}
	// THE WAY IN: the room's red pouring out through the door into the
	// corridor, and the neon sign's flicker
	uniform float signK;
	vec3 doorGlow(vec3 lp, vec3 N) {
		if (lp.z > 0.05) return vec3(0.0);
		vec3 Ls = vec3(${b(I/2)}, 1.25, 1.6);
		vec3 d = lp - Ls;
		float t = (${b(-ze.depth)} - Ls.z) / d.z;
		vec3 h = Ls + d * t;
		float m = smoothstep(0.08, -0.05, abs(h.x - ${b(I/2)}) - ${b(ze.hw)}) * smoothstep(0.08, -0.05, h.y - ${b(ze.h)}) * step(0.0, h.y);
		float dd = dot(d, d);
		vec3 Ld = -normalize(d);
		return vec3(1.0, 0.07, 0.05) * 26.0 * m * (0.15 + 0.85 * max(0.0, dot(N, Ld))) / (1.0 + dd * 0.55);
	}
	// the ENTER sign's flickering glow (live: it stutters)
	vec3 signGlow(vec3 lp, vec3 N) {
		if (lp.z > 0.05) return vec3(0.0);
		vec3 sd = vec3(${b(De.sign[0])}, ${b(De.sign[1])}, ${b(De.sign[2])}) - lp;
		return vec3(1.0, 0.12, 0.1) * signK * 0.5 * (0.2 + 0.8 * max(0.0, dot(N, normalize(sd)))) / (0.05 + dot(sd, sd) * 3.0);
	}
	uniform float spotK;
	const vec3 SPOTP = vec3(${b(fe.pos[0])}, ${b(fe.pos[1])}, ${b(fe.pos[2])});
	const vec3 SPOTA = vec3(${b(fe.axis[0])}, ${b(fe.axis[1])}, ${b(fe.axis[2])});
	const float SPOT_CI = ${b(Math.cos(fe.inner))}, SPOT_CO = ${b(Math.cos(fe.outer))};
	// her shape in the spot's light: soft round blockers, her shadow
	float spotShade(vec3 lp, vec3 L, float len) {
		float sh = 1.0;
		${pe.occ.map(e=>`{
			vec3 C = vec3(${b(e[0])}, ${b(e[1])}, ${b(e[2])}) - lp;
			float t = dot(C, L);
			float r = ${b(e[3])};
			if (t > 0.0 && t < len && dot(C, C) > r * r * 1.15) sh *= smoothstep(r * 0.55, r * (1.0 + 0.6 * t / len), length(C - L * t));
		}`).join(`
`)}
		return sh;
	}
	// how much of the spot reaches here (0 outside its cone)
	float spotAt(vec3 lp, out vec3 L) {
		vec3 d = SPOTP - lp;
		float r2 = dot(d, d), len = sqrt(r2);
		L = d / len;
		float cone = smoothstep(SPOT_CO, SPOT_CI, dot(-L, SPOTA));
		if (cone <= 0.0 || spotK <= 0.0) return 0.0;
		return spotK * cone * spotShade(lp, L, len) * 150.0 / r2;
	}
	vec3 spotLight(vec3 lp, vec3 N) {
		vec3 L;
		float k = spotAt(lp, L);
		return k > 0.0 ? vec3(1.0, 0.9, 0.78) * k * max(0.0, dot(N, L)) : vec3(0.0);
	}
	// on cloth: a satin sheen along the folds, and a soft highlight
	vec3 spotSheen(vec3 lp, vec3 N, vec3 V) {
		vec3 L;
		float k = spotAt(lp, L);
		if (k <= 0.0) return vec3(0.0);
		vec3 H = normalize(L + V);
		float nl = max(0.0, dot(N, L));
		// (cloth: no hard highlight, a broad soft sheen and the bright
		// fringe velvet and crepe get where they turn from the eye)
		float sheen = pow(max(0.0, dot(N, H)), 5.0) * 0.08;
		float rim = pow(1.0 - max(0.0, dot(N, V)), 4.0) * (0.25 + 0.75 * nl) * 0.35;
		return vec3(1.0, 0.88, 0.78) * min(k, 1.6) * (sheen + rim);
	}
	// the roses and the vase standing in the candles' light: soft round
	// blockers, so they throw soft shadows across the table and the window
	float candleShade(vec3 lp, vec3 d) {
		float sh = 1.0;
		float len = length(d);
		vec3 dir = d / len;
		${J.occ.map(e=>`{
			vec3 C = vec3(${b(e[0])}, ${b(e[1])}, ${b(e[2])}) - lp;
			float t = dot(C, dir);
			float cd = length(C - dir * t);
			float r = ${b(e[3])};
			if (t > 0.0 && t < len && dot(C, C) > r * r * 1.1) sh *= mix(1.0, smoothstep(r * 0.35, r * (1.0 + 2.5 * t / len), cd), 0.9);
		}`).join(`
`)}
		return sh;
	}
	// the candles on the table: a warm, breathing light close round them
	// each flame's flicker, worked out once a frame (flameUniforms)
	uniform vec4 rrF0, rrF1;
	vec3 candleLight(vec3 lp, vec3 N) {
		vec3 sum = vec3(0.0);
		${J.flames.map((e,x)=>`{
			vec3 d = vec3(${b(e[0])}, ${b(e[1])}, ${b(e[2])}) - lp;
 			float r2 = dot(d, d);
			float sh = candleShade(lp, d);
			float fl = rrF${x>>2}.${"xyzw"[x&3]};
			sum += sh * fl * (0.35 + 0.65 * max(0.0, dot(N, d * inversesqrt(r2 + 1e-4)))) / (r2 * 5.0 + 0.1);
		}`).join(`
`)}
		return vec3(1.0, 0.52, 0.22) * sum * 0.6;
	}
	// the room's light that never changes (baked, bake.js): its dim red
	// air, the windows' glow on their walls, the darkroom's safelights, the
	// red doorway
	vec3 ambientStatic(vec3 lp, vec3 N) {
		float g = 0.0;
		if (abs(N.x) > 0.5) {
			vec2 q = lp.x > RW * 0.5 ? winLocalR(lp.z, lp.y) : winLocal(lp.z, lp.y);
			g = exp(pointedSD(q, HW, SILL, SPRING) * 1.1) * 0.9 * (lp.x > RW * 0.5 ? 1.0 : leftOpen(lp.z));
		}
		float room = 1.0 - 0.9 * smoothstep(-0.3, -1.2, lp.z);
		return (vec3(0.2, 0.017, 0.02) * (0.8 + 0.2 * N.y) + vec3(0.1, 0.007, 0.007) * exp(-lp.y * 0.25)) * room + vec3(0.7, 0.06, 0.04) * g + safeLight(lp, N) + darkLight(lp, N) + doorGlow(lp, N);
	}
	// and the light that moves: the screens, the sign, the candles, the spot
	vec3 ambientLive(vec3 lp, vec3 N) {
		return tvGlow(lp, N) + signGlow(lp, N) + candleLight(lp, N) + spotLight(lp, N);
	}
	vec3 ambient(vec3 lp, vec3 N) {
		return ambientStatic(lp, N) + ambientLive(lp, N);
	}
	// everything of the room's light on a face that never changes: through
	// the windows, the still ambient, the bounce off the floor, the
	// windows' deep sides (soft: how wide a texel or a pixel is, in metres)
	vec3 bounce(vec3 lp, vec3 N);
	vec3 staticLight(vec3 lp, vec3 N, int k, bool flr, float soft) {
		vec3 lit = vec3(0.0);
		float nl = max(0.0, dot(N, LDIR_L)) + max(0.0, dot(N, LDIR_R));
		if (flr) lit = redLight(lp, max(soft * 0.6, 0.004)) * 3.2 * LDIR_L.y;
		else if (nl > 0.0) lit = redLight(lp + N * 0.02, max(soft, 0.01)) * 2.0 * min(1.0, nl);
		vec3 amb = ambientStatic(lp, N) * (flr ? 1.4 : 1.0);
		if (!flr) amb += bounce(lp, N);
		// the deep sides of the windows catch the glass's glow
		if (k == 2) {
			vec2 q = winLocal(lp.z, lp.y);
			float depth = lp.x < RW * 0.5 ? -lp.x : lp.x - RW;
			if (abs(N.x) < 0.5 && lp.z > 0.5 && lp.z < RL - 0.5) amb += vec3(1.0, 0.08, 0.05) * 0.5 * smoothstep(0.0, RT * 0.6, depth) * (0.6 + 0.4 * rfbm(q * 2.0));
		}
		return amb + lit;
	}
	// the baked light's numbers: log2(1 + 8 x) / log2(1 + 8 * 64), so the
	// dim red keeps its gradations as well as the bright pools
	const float RR_LOG = ${b(Math.log2(1+8*64))};
	vec3 rrEnc(vec3 x) { return log2(1.0 + 8.0 * max(x, 0.0)) / RR_LOG; }
	vec3 rrDec(vec3 e) { return (exp2(e * RR_LOG) - 1.0) / 8.0; }
	vec3 bounce(vec3 lp, vec3 N) {
		vec3 fp = vec3(clamp(lp.x + N.x * (0.8 + lp.y * 0.35), 0.1, RW - 0.1), 0.0, lp.z + N.z * (0.8 + lp.y * 0.35));
		vec3 b = redLightRough(fp) * 0.5 + redLightRough(fp + vec3(N.x * 1.4, 0.0, 1.2)) * 0.25 + redLightRough(fp + vec3(N.x * 1.4, 0.0, -1.2)) * 0.25;
		return b * 0.42 * exp(-lp.y * 0.18) * (0.55 + 0.45 * max(0.0, -N.y + 0.4));
	}

`,Wt=`
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, yScale, mirrorOn, reflOn;
	uniform sampler2D reflTex;
	uniform vec2 reflSize;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	#ifdef HAS_BAKE
	uniform float bakeOn;
	uniform sampler2D rrBake, rrBakeSoft, rrBakeSofter;
	varying vec3 v_lm;
	#endif
	${Se}

	const float DHW = ${b(ze.hw)}, DH = ${b(ze.h)};

	${n0}

	// THE CABLE'S HEARTBEAT: light running along it from the socket to the
	// televisions, beat by beat (lub, dub), the current showing through the
	// rubber with a crackle. phase counts the beats, period is the time
	// between them (redtour.js)
	uniform float pulsePhase, pulsePeriod;
	vec3 cablePulse(float s, vec3 N, vec3 V) {
		const float SPEED = 7.5;
		float g = 0.0;
		float b0 = floor(pulsePhase);
		for (int j = 0; j < 7; j++) {
			float age = (pulsePhase - (b0 - float(j))) * pulsePeriod;
			float d = s - age * SPEED;
			float lub = exp(-d * d / 0.3);
			float dd = d + 0.24 * SPEED;
			float dub = exp(-dd * dd / 0.24) * 0.65;
			float wake = d < 0.0 ? exp(d * 0.6) * 0.16 : 0.0;
			g += (lub + dub + wake) * exp(-age * 0.05);
		}
		g *= 0.7 + 0.3 * rhash(vec2(floor(time * 37.0), floor(s * 9.0)));
		float face = max(0.0, dot(N, V));
		return (vec3(1.0, 0.16, 0.07) * 0.9 + vec3(1.0, 0.65, 0.45) * 0.6 * g) * g * (0.4 + 0.6 * face);
	}

	void main() {
		vec3 lp = v_pos - RO;
		vec3 N = normalize(v_nrm);
		int k = int(v_kind + 0.5);
		bool mainCable = k == 15;
		if (mainCable) k = 8;
		bool flr = k == 0 || k == 13;
		if (yScale < 0.0 && flr) discard;
		// (the reflection is only of what stands above the floor)
		vec3 V = normalize(v_eye - v_pos);
		float wpx = length(fwidth(lp)) + 0.004;
		vec3 col;

		if (k == 3) {
			// the glass, glowing; the stone and lead dark against it
			vec2 q = v_uv;
			if (lp.x > RW * 0.5) q.y = lowY(lp.z, q.y);
			if (pointedSD(q, HW, SILL, SPRING) < -0.005) discard;
			float open = glassOpen(q, max(wpx, 0.006));
			vec3 g = glassTint(q + (N.x < 0.0 ? 11.0 : 0.0));
			// brighter towards the top of each window, as the sky is
			g *= 0.85 + 0.35 * smoothstep(SILL, SPRING + 2.0, q.y);
			vec3 stoneCol = vec3(0.022, 0.002, 0.002) + g * 0.05;
			col = mix(stoneCol, g * 1.25, open);
		} else if (k == 6) {
			col = vec3(0.004, 0.0, 0.0);
		} else if (k == 7) {
			// the safelight's tube, glowing
			col = vec3(1.0, 0.16, 0.1) * (0.9 + 0.1 * sin(time * 100.0));
		} else {
			// the openings in the walls
			if (k == 1) {
				if (abs(N.x) > 0.5) {
					vec2 q = lp.x > RW * 0.5 ? winLocalR(lp.z, lp.y) : winLocal(lp.z, lp.y);
					if (pointedSD(q, HW, SILL, SPRING) > 0.0 && (lp.x > RW * 0.5 || leftOpen(lp.z) > 0.5)) discard;
				} else {
					vec2 q = vec2(lp.x - RW * 0.5, lp.y);
					if (lp.z < RL * 0.5 && abs(q.x) < DHW && q.y < DH) discard;
				}
			}
			vec3 alb;
			float spec = 0.0;
			if (k == 0) alb = vec3(0.40, 0.022, 0.026);
			else if (k == 13) alb = vec3(0.2, 0.18, 0.17) * (0.6 + 0.6 * rfbm(lp.xz * 1.3));
			else if (k == 12) alb = vec3(0.16, 0.15, 0.14) * (0.65 + 0.5 * rfbm(vec2(lp.x + lp.z, lp.y) * 1.7));
			else if (k == 14) { alb = vec3(0.22, 0.2, 0.2); spec = 1.0; }
			else if (k == 1) {
				// red plaster: uneven, faintly streaked, darker as it rises
				float n = rfbm(vec2(lp.z + lp.x, lp.y) * vec2(0.9, 0.35));
				float st = rnoise(vec2((lp.z + lp.x) * 7.0, lp.y * 0.25));
				alb = vec3(0.36, 0.022, 0.028) * (0.85 + 0.22 * n) * (0.94 + 0.08 * st);
				// the panelling below the dado rail
				if (lp.y < 1.0) alb *= 0.7;
			} else if (k == 2) alb = vec3(0.16, 0.012, 0.014) * (0.8 + 0.4 * rfbm(v_uv * 3.0));
			else if (k == 4) alb = vec3(0.22, 0.014, 0.018) * (0.75 + 0.4 * rfbm(lp.xz * 0.6));
			else if (k == 8) alb = vec3(0.016, 0.012, 0.012);
			else if (k == 9) {
				// white tiles gone red under the safelights, dark grout between
				vec2 tu = abs(N.y) > 0.5 ? lp.xz : (abs(N.x) > 0.5 ? vec2(lp.z, lp.y) : vec2(lp.x, lp.y));
				vec2 tg = abs(fract(tu / 0.105) - 0.5);
				float grout = smoothstep(0.465, 0.485, max(tg.x, tg.y)) * 0.8;
				float stain = rfbm(tu * 3.0);
				alb = mix(vec3(0.62, 0.56, 0.5) * (0.85 + 0.2 * stain), vec3(0.08, 0.06, 0.05), grout);
				spec = 1.0 - grout;
			}
			else if (k == 10) { alb = vec3(0.32, 0.31, 0.3); spec = 1.0; }
			else if (k == 11) alb = vec3(0.5, 0.36, 0.22);
			else if (k == 16) alb = vec3(0.8, 0.78, 0.74);
			else if (k == 17) alb = vec3(0.2, 0.19, 0.18) * (0.7 + 0.6 * rnoise(lp.xz * 900.0));
			else { alb = vec3(0.17, 0.008, 0.012); spec = 1.0; }

			// light: straight through the windows, and back off the floor
			vec3 lit = vec3(0.0);
			vec3 amb;
			bool fromBake = false;
			#ifdef HAS_BAKE
			// (the light that never changes, baked: staticLight below)
			if (bakeOn > 0.5 && v_lm.z > 0.5) {
				vec4 bk = texture2D(rrBake, v_lm.xy);
				if (bk.a > 0.5 / 255.0) {
					// (two bakes, the leading sharp and blurred: far off, where a
					// pixel spans more of the floor, the blurred one, as the live
					// light blurs its leading by the pixel's width)
					float sharp = flr ? 0.025 : 0.05;
					float sw = flr ? max(wpx * 0.6, 0.004) : max(wpx, 0.01);
					vec3 S = rrDec(bk.rgb);
					if (sw > sharp) {
						vec3 S1 = rrDec(texture2D(rrBakeSoft, v_lm.xy).rgb);
						if (sw < 0.1) S = mix(S, S1, (sw - sharp) / (0.1 - sharp));
						else S = mix(S1, rrDec(texture2D(rrBakeSofter, v_lm.xy).rgb), min((sw - 0.1) / 0.3, 1.0));
					}
					amb = S + ambientLive(lp, N) * (flr ? 1.4 : 1.0);
					fromBake = true;
				}
			}
			#endif
			if (!fromBake) {
				float nl = max(0.0, dot(N, LDIR_L)) + max(0.0, dot(N, LDIR_R));
				if (flr) lit = redLight(lp, max(wpx * 0.6, 0.004)) * 3.2 * LDIR_L.y;
				else if (nl > 0.0) lit = redLight(lp + N * 0.02, max(wpx, 0.01)) * 2.0 * min(1.0, nl);
				amb = ambient(lp, N) * (flr ? 1.4 : 1.0);
				if (!flr) amb += bounce(lp, N);
				// the deep sides of the windows catch the glass's glow
				if (k == 2) {
					vec2 q = winLocal(lp.z, lp.y);
					float depth = lp.x < RW * 0.5 ? -lp.x : lp.x - RW;
					if (abs(N.x) < 0.5 && lp.z > 0.5 && lp.z < RL - 0.5) amb += vec3(1.0, 0.08, 0.05) * 0.5 * smoothstep(0.0, RT * 0.6, depth) * (0.6 + 0.4 * rfbm(q * 2.0));
				}
			}
			col = alb * (amb + lit);
			if (k == 14) col += amb * 0.5 * pow(1.0 - max(0.0, dot(N, V)), 3.0);
			// the far wall: the projector's picture
			if (k == 1 && N.z < -0.5 && lp.z > RL - 0.02) {
				vec3 pu = projUV(lp);
				if (pu.x > 0.0 && pu.x < 1.0 && pu.y > 0.0 && pu.y < 1.0) {
					vec3 pl = film(pu.xy);
					col += alb * pl * 4.4 + pl * 0.09;
				}
			}
			if (k == 8) {
				// black rubber: dull, but its round back catches a red line
				float fr = pow(1.0 - max(0.0, dot(N, V)), 2.5);
				col += (amb * 0.5 + lit * 0.2) * fr * 0.5 + amb * 0.05 * pow(max(0.0, dot(reflect(-V, N), normalize(vec3(0.0, 1.0, 0.3)))), 8.0);
				if (mainCable) col += cablePulse(v_uv.x, N, V);
			}
			if (k == 9 || k == 10) {
				// glazed tiles and steel: the bulb and the tube shine in them
				vec3 Rf = reflect(-V, N);
				vec3 bd = normalize(vec3(${b(C.bulb[0])}, ${b(C.bulb[1])}, ${b(C.bulb[2])}) - lp);
				float hl = pow(max(0.0, dot(Rf, bd)), k == 10 ? 60.0 : 120.0);
				float fr2 = pow(1.0 - max(0.0, dot(N, V)), 4.0);
				col += vec3(1.0, 0.12, 0.08) * hl * spec * (k == 10 ? 1.4 : 0.8) + amb * fr2 * 0.3 * spec;
			}
			if (k == 5) {
				// lacquered: a soft sheen of what is lit around it
				float fr = pow(1.0 - max(0.0, dot(N, V)), 3.0);
				col += (amb + lit * 0.4) * 0.6 * fr + bounce(lp, N) * 0.8 * fr;
			}

			if (flr) {
				// where the televisions stand, the floor is in their shadow
				if (k == 0 && lp.z > ${b(ae.z-1.5)}) {
					float occ = 9.0;
					for (int i = 0; i < 12; i++) {
						vec2 c = (tvLo[i].xz + tvHi[i].xz) * 0.5, hs = (tvHi[i].xz - tvLo[i].xz) * 0.5;
						vec2 q = max(abs(lp.xz - c) - hs, 0.0);
						if (tvLo[i].y < 0.05) occ = min(occ, length(q));
					}
					float ao = 0.3 + 0.7 * smoothstep(0.0, 0.7, occ);
					col *= ao;
				}
				// THE FLOOR: red lacquer, wet. Gloss varies across it, like a
				// floor painted by hand and mopped: some of it a mirror, some
				// of it satin; the reflection smears along the line of sight
				float gl = smoothstep(0.25, 0.75, rfbm(lp.xz * 0.28 + 4.0));
				gl = mix(0.45, 1.0, gl);
				float ripple = rfbm(lp.xz * 1.7);
				vec2 grad = vec2(rnoise(lp.xz * 2.3 + vec2(0.05, 0.0)) - rnoise(lp.xz * 2.3 - vec2(0.05, 0.0)),
				                 rnoise(lp.xz * 2.3 + vec2(0.0, 0.05)) - rnoise(lp.xz * 2.3 - vec2(0.0, 0.05)));
				float cosV = max(0.02, V.y);
				float F = 0.05 + 0.95 * pow(1.0 - cosV, 5.0);
				float kr = mix(0.5, 0.92, F) * gl;
				vec3 rc = vec3(0.0);
				if (reflOn > 0.5 && mirrorOn > 0.5) {
					vec2 uv0 = gl_FragCoord.xy / reflSize + grad * 0.012;
					float blur = (1.0 - gl) * 0.02 + 0.0015 + ripple * 0.003;
					float wsum = 0.0;
					for (int i = -4; i <= 4; i++) {
						float fi = float(i);
						float wgt = exp(-fi * fi * 0.12);
						vec2 o = vec2(fi * blur * 0.18, fi * blur);
						rc += texture2D(reflTex, clamp(uv0 + o, vec2(0.001), vec2(0.999))).rgb * wgt;
						wsum += wgt;
					}
					rc /= wsum;
				} else {
					rc = vec3(0.05, 0.005, 0.005);
				}
				// and the windows' glow, softly, wherever the gloss would
				// catch it (a blurred mirror, wider the further it reaches)
				vec3 rd = normalize(v_pos - v_eye);
				vec3 r = vec3(rd.x, -rd.y, rd.z);
				vec3 sheen = vec3(0.0);
				for (int s = 0; s < 2; s++) {
					if (k != 0) break;
					float wx = s == 0 ? 0.0 : RW;
					float t = (wx - lp.x) / (abs(r.x) > 1e-4 ? r.x : 1e-4);
					if (t > 0.0) {
						vec3 h = lp + r * t;
						vec2 q = s == 0 ? winLocal(h.z, h.y) : winLocalR(h.z, h.y);
						float b = 0.12 + t * (0.05 + 0.12 * (1.0 - gl));
						float sd = pointedSD(q, HW, SILL, SPRING);
						sheen += vec3(0.95, 0.13, 0.08) * smoothstep(-b, b * 0.5, sd) * (0.7 + 0.3 * smoothstep(SILL, SPRING, h.y));
					}
				}
				rc += sheen * (0.35 + 0.4 * gl);
				// the lacquer tints what it mirrors
				rc *= vec3(1.15, 0.75, 0.72);
				col = col * (1.0 - kr * 0.6) + rc * kr * 1.5;
#ifdef DBG_REFL
				col = rc * 2.0;
#endif
			}
		}
		// the red haze of the room's air: far things sink into it
		float dist = length(v_eye - v_pos);
		col = mix(col, vec3(0.06, 0.004, 0.005), (1.0 - exp(-dist * 0.035)) * 0.55);
		gl_FragColor = vec4(col, 1.0);
	}`,qo=`
	precision highp float;
	uniform float time, softer;
	varying vec3 v_pos, v_nrm;
	varying float v_kind;
	varying vec2 v_uv;
	${Se}
	const float DHW = ${b(ze.hw)}, DH = ${b(ze.h)};
	${n0}
	void main() {
		vec3 lp = v_pos - RO;
		vec3 N = normalize(v_nrm);
		int k = int(v_kind + 0.5);
		bool flr = k == 0 || k == 13;
		if (k == 1) {
			if (abs(N.x) > 0.5) {
				vec2 q = lp.x > RW * 0.5 ? winLocalR(lp.z, lp.y) : winLocal(lp.z, lp.y);
				if (pointedSD(q, HW, SILL, SPRING) > 0.0 && (lp.x > RW * 0.5 || leftOpen(lp.z) > 0.5)) discard;
			} else {
				vec2 q = vec2(lp.x - RW * 0.5, lp.y);
				if (lp.z < RL * 0.5 && abs(q.x) < DHW && q.y < DH) discard;
			}
		}
		vec3 S = staticLight(lp, N, k, flr, softer > 1.5 ? 0.4 : (softer > 0.5 ? 0.1 : (flr ? 0.025 : 0.05)));
		gl_FragColor = vec4(rrEnc(S), 1.0);
	}`,Xt=`
	vec3 breathe(vec3 p, float b) {
		float up = smoothstep(0.3, 0.62, p.y);
		vec2 r = p.xz - vec2(0.035, -0.07);
		float chest = exp(-pow((p.y - 0.6) / 0.1, 2.0));
		vec3 d = vec3(0.0, 0.016 * b * up, 0.0);
		d.xz += normalize(r + vec2(1e-4)) * 0.009 * b * chest;
		// (her shoulders draw back a little as they rise)
		d.z -= 0.006 * b * up * smoothstep(0.08, 0.2, abs(p.x - 0.035));
		return p + d;
	}`,No=`
	precision highp float;
	uniform mat4 proj, view, model;
	uniform float yScale, breath;
	attribute vec3 position, normal;
	attribute vec2 uv;
	attribute float flag;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_flag;
	${Xt}
	void main() {
		vec3 bp = (breath > 0.0 && flag < -0.5) ? breathe(position, breath) : position;
		vec4 w = model * vec4(bp, 1.0);
		v_pos = w.xyz;
		v_nrm = mat3(model) * normal;
		v_uv = uv; v_flag = flag;
		vec3 t = view[3].xyz;
		v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
		v_eye.y *= yScale;
		vec3 p = w.xyz; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`,Ao=`
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, sigTime, yScale, seed, dark, nMem, emit, order, warnS, warnN, glitchK, slot;
	uniform sampler2D letterTex;
	uniform sampler2D bodyTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_flag;
	${Se}
	${n0}

	float lum(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

	// THE SIGNAL. Each set has its own clock: the picture lasts a moment
	// (a second, three), then a cut, a burst of snow, and the next. Most of
	// the time it is snow; often a memory surfaces, drained, dark, torn by
	// the tube, washed red or cold; sometimes the set goes almost dead.
	vec3 signal0(vec2 uv);
	// the warning: every set to the same snow at once; then, one by one, a
	// letter on black; then all of it tearing apart
	vec3 signal(vec2 uv) {
		float fr = floor(sigTime * 24.0);
		if (glitchK > 0.0) {
			// rolling, tearing, the lines slipping
			float ln = floor(uv.y * 30.0);
			uv.x += (rhash(vec2(ln, fr)) - 0.5) * glitchK * 0.35 * step(0.6 - glitchK * 0.4, rhash(vec2(ln * 1.7, fr + 3.0)));
			uv.y = fract(uv.y + glitchK * glitchK * fract(sigTime * 1.3 + seed) * 0.8);
		}
		vec3 c = warnS < 1.0 ? signal0(uv) : vec3(0.0);
		// the same snow on every set, in step
		vec2 g = floor(uv * vec2(120.0, 90.0));
		float sn = rhash(g + vec2(fr * 17.3, fr * 3.7));
		vec3 snow = vec3(0.86, 0.9, 0.98) * (0.12 + 0.88 * sn * sn);
		c = mix(c, snow * (0.85 + 0.15 * sin(uv.y * 400.0 + sigTime * 30.0)), clamp(warnS, 0.0, 1.0));
		// its letter
		if (order >= 0.0 && warnN > order) {
			float on = clamp((warnN - order) * 3.0, 0.0, 1.0);
			// (it comes on with a stutter)
			on *= step(0.25, rhash(vec2(fr, order + 9.0))) + step(0.999, on);
			vec2 lq = vec2((uv.x - 0.5) * 1.333 / (0.8 * 0.66) + 0.5, (uv.y - 0.5) / 0.66 + 0.5);
			lq.x += (rhash(vec2(floor(uv.y * 60.0), fr)) - 0.5) * 0.04 * (1.0 + glitchK * 6.0);
			float a = 0.0;
			if (lq.x > 0.0 && lq.x < 1.0 && lq.y > 0.0 && lq.y < 1.0) a = texture2D(letterTex, vec2((order + lq.x) / 10.0, 1.0 - lq.y)).r;
			vec3 lc = vec3(0.02) + vec3(0.96, 0.95, 0.9) * a + snow * 0.05;
			c = mix(c, lc, clamp(on, 0.0, 1.0));
		}
		if (glitchK > 0.0) {
			// colours parting, the picture breaking into blocks
			vec2 bk = floor(uv * vec2(8.0, 6.0));
			float br = rhash(bk + fr);
			c = mix(c, c.gbr * 1.4, step(1.0 - glitchK * 0.5, br));
			c *= 1.0 - step(1.0 - glitchK * 0.3, rhash(bk * 3.1 + fr));
		}
		return c;
	}
	vec3 signal0(vec2 uv) {
		float t = sigTime + seed * 37.0;
		float rate = 0.42 + 0.35 * fract(seed * 7.13);
		float ph = t * rate;
		float seg = floor(ph);
		float f = fract(ph);
		float h0 = rhash(vec2(seg, seed * 91.0));
		float h1 = rhash(vec2(seed * 13.0, seg + 3.1));
		float fr = floor(sigTime * 24.0);
		// what this moment is
		float isMem = step(0.3, h0) * step(h0, 0.95);
		float isDead = step(0.95, h0);
		// the cut: snow for a breath either side of it, and the odd stutter
		float burst = 1.0 - smoothstep(0.0, 0.07, f) + smoothstep(0.95, 1.0, f);
		burst = max(burst, step(0.985, rhash(vec2(fr, seed * 5.0))));

		// snow: hard grains at the tube's own coarse resolution
		vec2 g = floor(uv * vec2(120.0, 90.0));
		float sn = rhash(g + vec2(fr * 17.3, fr * 3.7) + seed * 50.0);
		sn = mix(sn, sn * sn, 0.4);
		float hl = rhash(vec2(floor(uv.y * 112.0), fr + seed * 9.0));
		vec3 snow = vec3(0.86, 0.9, 0.98) * (0.16 + 0.84 * sn) * (0.85 + 0.3 * hl);

		// the memory: torn, wobbling, drifting slowly closer
		float k = mod(4.0 * slot + floor(h1 * 4.0) + 4.0 * memRot, 57.0);
		vec2 q = uv - 0.5;
		q *= 1.0 - 0.07 * f;
		q.x += sin(uv.y * 22.0 + t * 7.0) * 0.004;
		float line = floor(uv.y * 140.0);
		float jit = (rhash(vec2(line, fr)) - 0.5) * 0.012;
		// a band where the picture slips sideways
		float band = smoothstep(0.06, 0.0, abs(fract(uv.y * 0.7 - t * 0.31) - 0.5));
		jit += band * 0.05 * (rhash(vec2(fr, 2.0)) - 0.3);
		q.x += jit;
		vec2 mu = clamp((floor((q + 0.5) * vec2(220.0, 165.0)) + 0.5) / vec2(220.0, 165.0), 0.002, 0.998);
		vec2 tile = vec2(mod(k, 8.0), floor(k / 8.0));
		vec2 au = (tile + vec2(mu.x, 1.0 - mu.y)) / 8.0;
		vec2 ca = vec2(0.004 + 0.01 * band, 0.0) / 8.0;
		vec3 m = vec3(texture2D(memTex, au + ca).r, texture2D(memTex, au).g, texture2D(memTex, au - ca).b);
		// drained and darkened, the shadows crushed
		float l = lum(m);
		l = pow(clamp(l * 1.1, 0.0, 1.0), 1.3);
		vec3 mono = vec3(l);
		// washed red, or cold and grey
		float red = step(0.62, rhash(vec2(seg, 7.0 + seed)));
		vec3 tint = mix(vec3(0.78, 0.86, 0.95), vec3(1.15, 0.28, 0.22), red);
		m = mix(mono * tint, mix(vec3(l), m, 0.6) * 1.05, 0.3);
		// the odd frame in negative
		if (rhash(vec2(fr, seed * 3.0)) > 0.992) m = vec3(0.9) - m;
		// grain over it, and the snow showing through
		float gr = rhash(g * 1.7 + fr) - 0.5;
		m += gr * 0.16;
		m = mix(m, snow * 0.5, 0.08 + 0.25 * band);
		m *= 0.85 + 0.15 * sin(t * 50.0) * sin(t * 3.0);

		vec3 dead = snow * 0.06 + vec3(0.02) * sn;
		vec3 c = mix(snow, m, isMem);
		c = mix(c, dead, isDead);
		c = mix(c, snow * 1.1, clamp(burst, 0.0, 1.0));
		// a white bar tearing through, now and then
		float bar = step(0.9, rhash(vec2(floor(t * 1.7), seed * 4.0)));
		float by = fract(t * 0.9 + seed);
		c = mix(c, vec3(1.0), bar * smoothstep(0.045, 0.0, abs(uv.y - by)) * 0.95);
		// the rolling hum bar, scan lines, the tube's dark corners
		c *= 0.82 + 0.18 * smoothstep(0.0, 0.25, abs(fract(uv.y - t * 0.12) - 0.5));
		// (scan lines only where the screen is big enough on the picture
		// to show them: smaller, they would shimmer into moire)
		float slw = fwidth(uv.y) * 115.0;
		c *= 1.0 - 0.22 * (0.5 - 0.5 * sin(uv.y * 3.14159 * 230.0)) * (1.0 - smoothstep(0.2, 0.45, slw));
		vec2 e = uv * (1.0 - uv);
		c *= clamp(pow(e.x * e.y * 20.0, 0.3), 0.0, 1.0);
		return c;
	}

	void main() {
		vec3 lp = v_pos - RO;
		vec3 N = normalize(v_nrm);
		vec3 V = normalize(v_eye - v_pos);
		if (dot(N, V) < 0.0) N = -N;
		float fr = pow(1.0 - max(0.0, dot(N, V)), 4.0);
		vec3 amb = ambient(lp, N) + bounce(lp, N);
		vec3 col;
		if (v_flag > 0.5) {
			// the tube's light, a little warmed and dimmed by the room
			vec3 sg = signal(v_uv);
			col = mix(sg, sg * vec3(1.0, 0.78, 0.74), 0.35) * 0.78;
			// the curved glass catches the room: its red, the windows' glow
			col += amb * 0.65 * (0.08 + fr) + vec3(0.05, 0.004, 0.004);
		} else {
			vec4 tx = texture2D(bodyTex, v_uv);
			if (emit > 0.0) {
				// a lit bulb: the filament's glow through the red glass
				float fr2 = pow(max(0.0, dot(N, V)), 1.5);
				gl_FragColor = vec4(vec3(1.0, 0.18, 0.1) * emit * (0.55 + 0.6 * fr2), 1.0);
				return;
			}
			if (tx.a < 0.35) discard;
			vec3 alb = tx.rgb * tx.rgb * dark;
			vec3 lit = vec3(0.0);
			float nl = max(0.0, dot(N, LDIR_L)) + max(0.0, dot(N, LDIR_R));
			if (nl > 0.0) lit = redLightRough(lp + N * 0.05) * 1.6 * min(1.0, nl);
			// the projector's light grazing the tops of the sets in its way
			vec3 pu = projUV(lp);
			if (pu.z > 0.0 && pu.x > 0.0 && pu.x < 1.0 && pu.y > 0.0 && pu.y < 1.0) {
				vec3 Lp = normalize(vec3(${b(V.lens[0])}, ${b(V.lens[1])}, ${b(V.lens[2])}) - lp);
				lit += film(vec2(0.5)) * 1.4 * max(0.0, dot(N, Lp)) * (0.7 + 0.3 * rnoise(v_uv * 40.0));
			}
			if (emit < 0.0) {
				col = vec3(0.0);
				// the bentwood chair's red lacquer (found by its colour)
				float lac = smoothstep(1.4, 2.2, alb.r / max(alb.g, 0.002)) * smoothstep(0.0015, 0.008, alb.r);
				// (the chair stops below her shoulders: red there is only the
				// scan's flecks)
				lac *= 1.0 - smoothstep(0.86, 0.92, lp.y);
				// HER CLOTHES: black crepe, not a cast. The scan's colour gives
				// only the depth of the folds (its red flecks are lost); the
				// cr\xEApe's crinkle breaks up the light, the fibres catch it at
				// a grazing angle (a soft sheen round every fold) and the spot
				// glints in the weave. Above her shoulders, under the veil, it
				// is her hair: darker, with a faint sheen running down it.
				float tl = dot(tx.rgb, vec3(0.299, 0.587, 0.114));
				vec2 cq = v_pos.xy * 210.0 + v_pos.zy * 170.0;
				float cr = rnoise(cq) - 0.5, cr2 = rnoise(cq * 2.3 + 5.0) - 0.5;
				vec3 Nc = normalize(N + (vec3(cr, cr2, cr * 0.7 - cr2 * 0.4) * 0.5 + vec3(rnoise(v_pos.zy * 40.0) - 0.5, 0.0, rnoise(v_pos.xy * 40.0) - 0.5) * 0.35) * (1.0 - lac));
				float hair = smoothstep(1.0, 1.08, lp.y) * (1.0 - lac);
				vec3 cloth = vec3(0.016, 0.012, 0.014) * (0.6 + 1.6 * clamp(tl * 9.0, 0.0, 1.0));
				cloth *= mix(1.0, 0.55, hair);
				alb = mix(alb, cloth, 1.0 - lac);
				vec3 Ls; float ks = spotAt(lp, Ls);
				float wrap = max(0.0, dot(Nc, Ls) * 0.6 + 0.4);
				lit += vec3(1.0, 0.9, 0.78) * ks * wrap * 0.35;
				float NV = max(0.0, dot(Nc, V));
				float sheen = pow(1.0 - NV, 3.0);
				vec3 Hs = normalize(Ls + V);
				float glint = pow(max(0.0, dot(Nc, Hs)), 28.0) * step(0.62, rnoise(cq * 0.7));
				// (hair: a sheen along its fall rather than across it)
				float strand = 0.5 + 0.5 * sin(v_pos.x * 900.0 + rnoise(v_pos.xy * 60.0) * 6.0);
				col += (1.0 - lac) * (
					vec3(1.0, 0.9, 0.8) * min(ks, 1.2) * (sheen * 0.05 + glint * 0.03 + hair * strand * pow(max(0.0, dot(Nc, Hs)), 8.0) * 0.04)
					+ amb * sheen * 0.1 + vec3(0.02, 0.0015, 0.0015) * sheen);
				alb = mix(alb, alb * vec3(2.2, 2.0, 1.2) + vec3(0.06, 0.012, 0.004), lac);
				lit += vec3(1.0, 0.85, 0.7) * ks * max(0.0, dot(N, Ls)) * 1.2 * lac;
				col += pow(max(0.0, dot(N, normalize(Ls + V))), 20.0) * ks * 0.12 * lac * vec3(1.0, 0.7, 0.5);
			}
			col = (emit < 0.0 ? col : vec3(0.0)) + alb * (amb + lit) + spotSheen(lp, N, V) * (emit < 0.0 ? 0.45 : 1.0);
			// worn plastic and veneer: a red sheen along the edges, as in
			// the reference, where the room's light rims every set
			col += (amb * 0.9 + lit * 0.3 + vec3(0.25, 0.02, 0.02)) * fr * 0.45;
		}
		float dist = length(v_eye - v_pos);
		col = mix(col, vec3(0.06, 0.004, 0.005), (1.0 - exp(-dist * 0.035)) * 0.55);
		gl_FragColor = vec4(col, 1.0);
	}`,Eo=`
	precision highp float;
	uniform mat4 proj, view;
	uniform float yScale, time;
	attribute vec3 position, normal;
	attribute vec2 uv;
	attribute float pic;
	attribute vec4 pivot;
	attribute float style;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_pic, v_style;
	void main() {
		vec3 q = position, n = normal;
		v_style = style;
		vec3 t0 = view[3].xyz;
		vec3 eye0 = -vec3(dot(view[0].xyz, t0), dot(view[1].xyz, t0), dot(view[2].xyz, t0));
		eye0.y *= yScale;
		// the air the camera stirs as it comes close
		float prox = 1.0 + 2.4 * smoothstep(3.6, 0.7, length(eye0 - pivot.xyz));
		if (pivot.w < 0.0) {
			// a print on a darkroom line (the line runs along z): it swings
			// out from the line and turns on its peg
			float w = -pivot.w * prox;
			float a = w * sin(time * 0.8 + pivot.z * 2.3) + w * 0.4 * sin(time * 2.1 + pivot.z * 5.1);
			float tw = w * 1.6 * sin(time * 0.55 + pivot.z * 3.7) + w * 0.5 * sin(time * 1.3 + pivot.z * 1.9);
			vec3 d = q - pivot.xyz;
			float c = cos(a), s = sin(a);
			d = vec3(d.x * c - d.y * s, d.x * s + d.y * c, d.z);
			n = vec3(n.x * c - n.y * s, n.x * s + n.y * c, n.z);
			c = cos(tw); s = sin(tw);
			d = vec3(d.x * c - d.z * s, d.y, d.x * s + d.z * c);
			n = vec3(n.x * c - n.z * s, n.y, n.x * s + n.z * c);
			q = pivot.xyz + d;
		}
		if (pivot.w > 0.0) {
			// stirring on its peg, in the room's slow air
			float pw = pivot.w * prox;
			float a = pw * sin(time * 0.7 + pivot.x * 1.7) + pw * 0.4 * sin(time * 1.9 + pivot.x * 4.1);
			float r = pw * 0.6 * sin(time * 0.5 + pivot.x * 2.3);
			vec3 d = q - pivot.xyz;
			float c = cos(a), s = sin(a);
			d = vec3(d.x, d.y * c - d.z * s, d.y * s + d.z * c);
			n = vec3(n.x, n.y * c - n.z * s, n.y * s + n.z * c);
			c = cos(r); s = sin(r);
			d = vec3(d.x * c - d.y * s, d.x * s + d.y * c, d.z);
			q = pivot.xyz + d;
		}
		v_pos = q; v_nrm = n; v_uv = uv; v_pic = pic;
		vec3 t = view[3].xyz;
		v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
		v_eye.y *= yScale;
		vec3 p = q; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`,Io=`
	precision highp float;
	uniform float time, yScale;
	uniform sampler2D polTex, letTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_pic, v_style;
	${Se}
	${n0}
	void main() {
		vec3 lp = v_pos - RO;
		vec3 N = normalize(v_nrm);
		vec3 V = normalize(v_eye - v_pos);
		bool back = !gl_FrontFacing;
		if (dot(N, V) < 0.0) N = -N;
		// the card: aged paper, a little grimy
		float grime = rnoise(v_uv * vec2(9.0, 11.0) + v_pic * 3.1);
		vec3 alb = vec3(0.82, 0.78, 0.72) * (0.82 + 0.18 * grime);
		vec2 u = v_uv;
		if (v_style > 3.5 && v_style < 4.5) {
			// a stain: the ring a wet jug or mug left, and drips beside it
			vec2 c = u - 0.5;
			float r = length(c * vec2(1.0, 1.0 + 0.1 * sin(v_pic)));
			float wob = rnoise(vec2(atan(c.y, c.x) * 3.0 + v_pic, v_pic)) * 0.05;
			// (never a whole ring: broken arcs, as a wet base leaves them)
			float arc = smoothstep(0.35, 0.65, rnoise(vec2(atan(c.y, c.x) * 1.6 + v_pic * 3.0, v_pic)));
			float ring = smoothstep(0.03, 0.0, abs(r - 0.36 - wob)) * 0.8 * arc + smoothstep(0.38, 0.15, r) * 0.1 * rnoise(u * 7.0 + v_pic);
			float drip = smoothstep(0.08, 0.0, length(c - vec2(0.38, -0.2) * (0.6 + 0.4 * fract(v_pic * 0.37))));
			float a = max(ring, drip * 0.8) * (0.6 + 0.4 * rnoise(u * 18.0 + v_pic));
			if (a < 0.12) discard;
			vec3 lp = v_pos - RO;
			vec3 N = vec3(0.0, 1.0, 0.0), V = normalize(v_eye - v_pos);
			vec3 amb = ambient(lp, N) + bounce(lp, N);
			// dried chemistry: brown, a little glossy where still wet
			vec3 col = vec3(0.16, 0.1, 0.05) * amb * 0.8 + amb * 0.25 * pow(1.0 - max(0.0, dot(N, V)), 4.0);
			gl_FragColor = vec4(col, 1.0);
			return;
		}
		if (v_style > 1.5 && v_style < 2.5) {
			// a strip of negatives: the film's dark base, its sprocket holes
			// (holes: nothing there), the frames' pictures in reverse
			vec2 q = vec2(u.x, u.y * 6.0);
			float hx = min(u.x, 1.0 - u.x);
			vec2 hq = vec2(hx, fract(q.y * 4.0));
			if (hx < 0.13 && hx > 0.04 && hq.y > 0.3 && hq.y < 0.7) discard;
			vec3 film = vec3(0.32, 0.27, 0.22);
			float fy = fract(q.y), fi = floor(q.y);
			if (hx > 0.17 && fy > 0.05 && fy < 0.95) {
				float k = mod(v_pic + fi * 7.0, 55.0);
				vec2 tile = vec2(mod(k, 8.0), floor(k / 8.0));
				vec2 pu = vec2((u.x - 0.17) / 0.66, (fy - 0.05) / 0.9);
				vec3 ph = texture2D(polTex, (tile + clamp(pu.yx, 0.01, 0.99)) / 8.0).rgb;
				film = (vec3(0.9) - ph * 0.85) * vec3(0.55, 0.47, 0.38) + 0.04;
			}
			alb = film * 0.55;
		} else if (v_style > 2.5 && v_style < 3.5) {
			// a contact sheet: the roll printed whole, frame by frame, in rows
			vec2 g = vec2(u.x * 4.0, u.y * 7.0);
			vec2 cell = floor(g), fq = fract(g);
			bool inside = u.x > 0.05 && u.x < 0.95 && u.y > 0.04 && u.y < 0.96;
			alb = vec3(0.84, 0.81, 0.76) * (0.85 + 0.15 * grime);
			if (inside) {
				alb = vec3(0.05);
				if (fq.x > 0.08 && fq.x < 0.92 && fq.y > 0.12 && fq.y < 0.88) {
					float k = mod(v_pic + cell.x + cell.y * 4.0, 55.0);
					vec2 tile = vec2(mod(k, 8.0), floor(k / 8.0));
					vec2 pu = vec2((fq.x - 0.08) / 0.84, 1.0 - (fq.y - 0.12) / 0.76);
					vec3 ph = texture2D(polTex, (tile + clamp(pu, 0.01, 0.99)) / 8.0).rgb;
					alb = vec3(dot(ph, vec3(0.3, 0.59, 0.11))) * 0.8 + 0.02;
				}
			}
		} else if (v_style > 5.5) {
			// a letter, his own: the photograph of the page (side by side in
			// letTex, each 1000 x 1460 of a 2048 square)
			vec2 lu = vec2((v_pic * 1024.0 + 12.0 + u.x * 1000.0) / 2048.0, (1.0 - u.y) * 1460.0 / 2048.0);
			alb = texture2D(letTex, lu).rgb;
			alb = alb * alb * 0.42;
		} else if (v_style > 4.5) {
			// blank photographic paper, its glossy face up
			alb = vec3(0.86, 0.84, 0.8) * (0.9 + 0.1 * grime);
		}
		// a polaroid's frame, or a darkroom print's thin even border
		vec4 fr4 = v_style > 0.5 ? vec4(0.06, 0.94, 0.05, 0.95) : vec4(0.065, 0.935, 0.235, 0.94);
		bool inPic = !back && v_style < 1.5 && u.x > fr4.x && u.x < fr4.y && u.y > fr4.z && u.y < fr4.w;
		if (inPic) {
			vec2 pu = vec2((u.x - fr4.x) / (fr4.y - fr4.x), 1.0 - (u.y - fr4.z) / (fr4.w - fr4.z));
			vec2 tile = vec2(mod(v_pic, 8.0), floor(v_pic / 8.0));
			vec3 ph = texture2D(polTex, (tile + clamp(pu, 0.01, 0.99)) / 8.0).rgb;
			// burnt in a little at the edges, as if the chemistry ran out
			vec2 e = pu * (1.0 - pu);
			ph *= 0.62 + 0.38 * clamp(e.x * e.y * 18.0, 0.0, 1.0);
			alb = ph * 0.85 + 0.012;
		}
		vec3 amb = ambient(lp, N) + bounce(lp, N);
		float nl = max(0.0, dot(N, LDIR_L)) + max(0.0, dot(N, LDIR_R));
		vec3 lit = nl > 0.0 ? redLightRough(lp + N * 0.03) * 1.5 * min(1.0, nl) : vec3(0.0);
		vec3 col = alb * (amb * 1.15 + lit);
		// the photographs are glossy
		if (inPic) col += (amb * 0.35) * pow(1.0 - max(0.0, dot(N, V)), 3.0);
		float dist = length(v_eye - v_pos);
		col = mix(col, vec3(0.06, 0.004, 0.005), (1.0 - exp(-dist * 0.035)) * 0.55);
		gl_FragColor = vec4(col, 1.0);
	}`,Po=`
	precision highp float;
	uniform mat4 proj, view;
	uniform float yScale;
	attribute vec3 position;
	attribute float layer;
	varying vec3 v_pos, v_eye;
	varying float v_layer;
	void main() {
		v_pos = position; v_layer = layer;
		vec3 t = view[3].xyz;
		v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
		vec3 p = position; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`,Oo=`
	precision highp float;
	uniform float time;
	varying vec3 v_pos, v_eye;
	varying float v_layer;
	${Se}
	${n0}
	void main() {
		vec3 lp = v_pos - RO;
		vec3 pu = projUV(lp);
		vec2 uv = clamp(pu.xy, 0.0, 1.0);
		// what the film is showing just there, blurred by the smoke
		// (only the picture's broad light and the lamp's flicker: in the air the
		// picture itself never reads)
		vec3 fl = film(floor(uv * 4.0) / 4.0 + 0.125) * 0.35 + film(vec2(0.5)) * 0.65;
		float smoke = rfbm(vec2(lp.x * 0.8 + time * 0.05, lp.y * 0.7 - lp.z * 0.12 + time * 0.03)) * rfbm(vec2(lp.z * 0.5 - time * 0.04, lp.y * 0.9));
		float along = pu.z;
		// soft at its edges, as a beam through smoke is
		// (each layer is a smaller copy of the beam inside the last: the
		// further in, the denser, so the light gathers to a core)
		vec2 eg = min(pu.xy, 1.0 - pu.xy);
		float edge = smoothstep(0.0, 0.5, min(eg.x, eg.y));
		// strong at the lens, thinning out towards the wall
		fl = max(fl, vec3(0.3, 0.24, 0.17));
		float a = (0.35 + 2.2 * smoke) * (0.3 + 0.7 * exp(-along * 2.4)) * smoothstep(0.0, 0.03, along) + 2.2 * exp(-along * 10.0) * (0.6 + 0.8 * smoke);
		float dist = length(v_eye - v_pos);
		gl_FragColor = vec4(fl * a * edge * 0.075 * smoothstep(0.25, 1.4, dist), 1.0);
	}`,$o=`
	precision highp float;
	uniform mat4 proj, view;
	uniform float yScale;
	attribute vec3 position;
	attribute float tray;
	varying vec3 v_pos, v_eye;
	varying float v_tray;
	void main() {
		v_pos = position; v_tray = tray;
		vec3 t = view[3].xyz;
		v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
		v_eye.y *= yScale;
		vec3 p = position; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`,Do=`
	precision highp float;
	uniform float time;
	uniform sampler2D printTex, polTex;
	varying vec3 v_pos, v_eye;
	varying float v_tray;
	${Se}
	${n0}
	const vec3 BULB = vec3(${b(C.bulb[0])}, ${b(C.bulb[1])}, ${b(C.bulb[2])});
	void main() {
		vec3 lp = v_pos - RO;
		int k = int(v_tray + 0.5);
		float zc = k == 0 ? ${b(C.trays[0])} : (k == 1 ? ${b(C.trays[1])} : ${b(C.trays[2])});
		vec2 tl = vec2(lp.x - ${b(C.TXc)}, lp.z - zc);
		vec3 V = normalize(v_eye - v_pos);
		// the surface: a faint, slow tremor, and now and then a ring where
		// a drop falls from the tongs
		vec2 q = tl * 9.0;
		float e = 0.04;
		float h0 = rnoise(q + time * 0.25) + rnoise(q * 2.3 - time * 0.4) * 0.5;
		float hx = rnoise(q + vec2(e, 0.0) + time * 0.25) + rnoise((q + vec2(e, 0.0)) * 2.3 - time * 0.4) * 0.5;
		float hz = rnoise(q + vec2(0.0, e) + time * 0.25) + rnoise((q + vec2(0.0, e)) * 2.3 - time * 0.4) * 0.5;
		vec2 g = vec2(hx - h0, hz - h0) / e * 0.012;
		float rt = fract(time * 0.18 + float(k) * 0.37);
		vec2 rc = vec2(0.09 - float(k) * 0.05, 0.13 - float(k) * 0.08);
		float rd = length(tl - rc);
		float ring = sin((rd - rt * 0.25) * 140.0) * exp(-rd * 14.0) * (1.0 - rt) * smoothstep(rt * 0.25 + 0.02, rt * 0.25 - 0.01, rd);
		g += normalize(tl - rc + 1e-4) * ring * 0.05;
		vec3 n = normalize(vec3(-g.x, 1.0, -g.y));
		// through the surface to what lies under it
		vec3 rf = refract(-V, n, 0.75);
		float depth = 0.022;
		vec2 under = tl + rf.xz * depth / max(0.2, -rf.y);
		vec3 base = vec3(0.012, 0.009, 0.008);
		vec3 lit = darkLight(vec3(lp.x, lp.y - depth, lp.z), vec3(0.0, 1.0, 0.0)) + ambient(lp, vec3(0.0, 1.0, 0.0)) * 0.6;
		if (k == 0) {
			// the print, turned a little in the tray
			// it floats: drifting a little, turning a little, never still
			float an = 0.11 + 0.05 * sin(time * 0.23) + 0.02 * sin(time * 0.71 + 1.3);
			vec2 off = vec2(0.012, -0.03) + vec2(sin(time * 0.17) * 0.014, sin(time * 0.13 + 2.0) * 0.018);
			vec2 pq = under - off;
			pq = vec2(cos(an) * pq.x - sin(an) * pq.y, sin(an) * pq.x + cos(an) * pq.y);
			// (across the tray is the print's height; along it its width)
			vec2 hsz = k == 0 ? vec2(0.112, 0.162) : vec2(0.13, 0.13);
			vec2 pu = vec2(pq.y / hsz.y, -pq.x / hsz.x) * 0.5 + 0.5;
			if (pu.x > 0.0 && pu.x < 1.0 && pu.y > 0.0 && pu.y < 1.0) {
				float paper = 0.78;
				vec2 iu = (pu - 0.045) / 0.91;
				if (iu.x > 0.0 && iu.x < 1.0 && iu.y > 0.0 && iu.y < 1.0) {
					float im;
					if (k == 0) {
						im = texture2D(printTex, vec2(iu.x, 1.0 - iu.y)).r;
						// developing: the shadows come first, then the
						// middle tones, as the camera draws near
						float dev = smoothstep(2.6, 1.05, length(v_eye - v_pos));
						dev = clamp(dev * 1.25 - 0.05, 0.0, 1.0);
						float thr = dev * 1.35 - 0.1;
						im = mix(1.0, im, smoothstep(thr, thr - 0.3, im));
					} else {
						im = texture2D(polTex, (vec2(0.0, 1.0) + vec2(iu.x, 1.0 - iu.y)) / 8.0).r;
					}
					paper *= mix(0.06, 1.0, im);
				}
				base = vec3(paper) * vec3(0.92, 0.9, 0.85);
			}
		}
		// the liquid swallows light: what is under it is dim and warm; the
		// print rides just under the surface and its edge lifts a ripple
		vec3 col = base * lit * vec3(0.62, 0.5, 0.42);
		// and its surface is a black mirror: the bulb, and the room's red
		float F = 0.03 + 0.97 * pow(1.0 - max(0.0, dot(n, V)), 5.0);
		vec3 R = reflect(-V, n);
		vec3 bd = BULB - lp;
		float bl = length(bd);
		float hit = pow(max(0.0, dot(R, bd / bl)), 2200.0 * bl * bl + 200.0);
		col += vec3(1.0, 0.16, 0.1) * hit * 6.0;
		col += ambient(lp + R * 0.6, -R) * 0.35 * F + vec3(0.12, 0.01, 0.01) * F;
		float dist = length(v_eye - v_pos);
		col = mix(col, vec3(0.06, 0.004, 0.005), (1.0 - exp(-dist * 0.035)) * 0.55);
		gl_FragColor = vec4(col, 1.0);
	}`,Co=`
	precision highp float;
	uniform mat4 proj, view;
	uniform float time, pxScale;
	attribute vec4 seed;
	varying float v_b, v_w;
	${Se}
	void main() {
		vec3 lp = vec3(0.3 + seed.x * (RW - 0.6), 0.2 + seed.y * (RH - 0.5), 0.3 + seed.z * (RL - 0.6));
		float t = time * (0.03 + 0.03 * seed.w);
		lp += vec3(sin(t * 3.1 + seed.w * 40.0) * 0.35, sin(t * 1.7 + seed.x * 30.0) * 0.4 - t * 0.6, cos(t * 2.3 + seed.z * 50.0) * 0.35);
		lp.y = 0.2 + mod(lp.y - 0.2, RH - 0.5);
		vec3 c = redLightAir(lp);
		v_b = dot(c, vec3(0.6, 0.3, 0.1));
		// and in the projector's beam, lit warm
		vec3 L0 = vec3(${b(V.lens[0])}, ${b(V.lens[1])}, ${b(V.lens[2])});
		vec3 dd = lp - L0;
		float s = (${b(Y)} - L0.z) / max(dd.z, 1e-4);
		vec3 hh = L0 + dd * s;
		vec2 pu = vec2((hh.x - ${b(V.img.x-V.img.w/2)}) / ${b(V.img.w)}, (hh.y - ${b(V.img.y-V.img.h/2)}) / ${b(V.img.h)});
		v_w = (dd.z > 0.2 && pu.x > 0.0 && pu.x < 1.0 && pu.y > 0.0 && pu.y < 1.0) ? 1.6 : 0.0;
		vec4 v = view * vec4(lp + RO, 1.0);
		gl_Position = proj * v;
		float tw = 0.6 + 0.4 * sin(time * (1.0 + seed.w * 2.0) + seed.x * 80.0);
		v_b *= tw;
		gl_PointSize = clamp(pxScale * (0.012 + 0.012 * seed.w) / max(0.2, -v.z), 1.0, 6.0);
	}`,Vo=`
	precision highp float;
	varying float v_b, v_w;
	void main() {
		vec2 d = gl_PointCoord - 0.5;
		float a = smoothstep(0.5, 0.0, length(d));
		gl_FragColor = vec4((vec3(1.0, 0.14, 0.09) * min(v_b, 1.4) + vec3(1.0, 0.8, 0.55) * v_w) * a * 0.55, 1.0);
	}`;ut.exports=function(e){let x=To(),m=null;if(!ft().noBake)try{m=ht().charts({pos:x.pos,nrm:x.nrm,idx:x.idx,extra:{kind:[x.kind,1],uv:[x.uv,2]}},{width:2048,maxHeight:2048,scale:ft().isPhone?.75:1,bakeTri:(t,_)=>[T.FLOOR,T.WALL,T.REVEAL,T.VAULT,T.CONC,T.CFLOOR].indexOf(Math.round(x.kind[_]))>=0,kind:(t,_)=>t[1]>.9&&_[1]-O[1]<.05?"floor":t[1]<-.5?"ceiling":"wall",density:t=>({floor:40,wall:20,ceiling:12})[t]})}catch(t){m=null}let c=m?{pos:m.position,nrm:m.normal,kind:m.kind,uv:m.uv,idx:m.elements}:x,A={position:e.buffer(c.pos),normal:e.buffer(c.nrm),kind:e.buffer(c.kind),uv:e.buffer(c.uv)};m&&(A.a_lm=e.buffer(m.lm));let a=e.elements({data:c.idx.length>65535?new Uint32Array(c.idx):new Uint16Array(c.idx),type:c.idx.length>65535?"uint32":"uint16"}),r=null;if(m)try{r=ht().baker(e,m,{position:m.position,normal:m.normal,kind:m.kind,uv:m.uv},[0,1,2].map(t=>({frag:qo,uniforms:{softer:t},vertDecl:"varying vec3 v_pos, v_nrm; varying float v_kind; varying vec2 v_uv;",vertMain:"v_pos = position; v_nrm = normal; v_kind = kind; v_uv = uv;"}))),r.bake()}catch(t){r=null}let o=e.texture({width:1,height:1}),l=e.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),n=e.framebuffer({color:l,depth:!0}),f=e({framebuffer:n}),v=e.texture({width:1,height:1,data:[0,0,0,255]}),i=e({}),z=v,g=0,p=0,y=!1,h=[4,4],u=[0,0,0,0],R=null,w=[0,3.417,8.417,12.333,15.625,19.25,22.5,25.958,30.75,33.417,36.25,40.125,43.667,46.917,51.292,56.458,60.25,64.083],s=e.texture({width:400,height:300,min:"linear",mag:"linear",wrap:"clamp"}),d={v:null,on:0,ready:!1,clip:-1,since:0,stillUntil:0},L=()=>{if(typeof document=="undefined")return;if(!d.v){let $=document.createElement("video");$.src="res/redroom/reel.mp4",$.muted=!0,$.loop=!0,$.playsInline=!0,$.preload="auto",$.setAttribute("playsinline",""),$.setAttribute("muted",""),$.addEventListener("loadeddata",()=>{d.ready=!0});let j=()=>{d.v&&d.v.paused&&!Ae.freeze&&performance.now()/1e3>d.stillUntil&&d.v.play().catch(()=>{})};window.addEventListener("pointerdown",j,{passive:!0}),window.addEventListener("touchend",j,{passive:!0}),d.v=$,$.play().catch(()=>{})}let t=d.v,_=performance.now()/1e3;if(!d.ready||t.readyState<2){d.on=0;return}let M=0;for(let $=0;$<w.length;$++)t.currentTime>=w[$]-.02&&(M=$);M!==d.clip&&(d.clip=M);let N=_<d.stillUntil,D=Ae.freeze?d.gate:N?"s"+Math.floor(e.now()/3.4):"c"+M;if(D!==d.gate&&(d.gate!==void 0&&vt.click&&vt.click(N?1:0),d.gate=D),Ae.freeze||N?t.paused||t.pause():t.paused&&t.play().catch(()=>{}),d.on=N?0:1,!N)try{s.subimage(t)}catch($){d.on=0}},k=e.texture({width:1,height:1,data:[0,0,0,255]}),P=1,E=t=>{let _=j=>{let U=Math.sin(j*127.1)*43758.5453;return U-Math.floor(U)},M=Math.floor(t*9),N=_(M),D=_(Math.floor(t*.7)),$=.92+.08*Math.sin(t*120);return D>.55&&N>.6&&($=N>.85?.08:.45),$},S={signK:()=>P,vidTex:()=>s,vidOn:()=>d.on,memRot:t=>Math.floor((typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:t.time)/21),memTex:()=>R||k,projT:t=>{let _=typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:t.time;return Ae.freeze?(Ae.frozenAt===null&&(Ae.frozenAt=_),Ae.frozenAt):(Ae.frozenAt=null,_)},spotK:()=>E0.k,pulsePhase:()=>K0.phase,pulsePeriod:()=>K0.period,warnS:()=>Ae.s,warnN:()=>Ae.n,glitchK:()=>Ae.glitch};ae.stack.forEach((t,_)=>{let M=ae.models[t[0]],N=ae.G;S["tvLo["+_+"]"]=[I/2+t[2]-M.w*N/2,t.base,ae.z+t[4]-.02],S["tvHi["+_+"]"]=[I/2+t[2]+M.w*N/2,t.base+M.h*N,ae.z+t[4]+M.d*N]});let G=e({vert:(r?`#define HAS_BAKE
`:"")+jt,frag:(r?`#define HAS_BAKE
`:"")+Wt,attributes:A,elements:a,cull:{enable:!1},uniforms:{bakeOn:()=>r&&r.ready?1:0,rrBake:()=>r&&r.ready?r.tex[0]:o,rrBakeSoft:()=>r&&r.ready?r.tex[1]:o,rrBakeSofter:()=>r&&r.ready?r.tex[2]:o,reflTex:()=>z,reflSize:()=>h,reflOn:()=>g,tvLight:()=>u,...S}}),B=t=>new Promise((_,M)=>{let N=new Image,D=$=>($&$-1)===0;N.onload=()=>_(e.texture({data:N,min:D(N.width)&&D(N.height)?"mipmap":"linear",mag:"linear",wrap:"clamp"})),N.onerror=M,N.src=t}),re=ae.stack.map((t,_)=>{let[M,,N,D,$]=t,j=Math.PI+D*Math.PI/180,U=ae.G,ee=Math.cos(j)*U,le=Math.sin(j)*U,Te=O[0]+I/2+N,_e=O[1]+t.base,Oe=O[2]+ae.z+$;return{name:M,seed:(_+1)*.6180339%1,model:[ee,0,-le,0,0,U,0,0,le,0,ee,0,Te,_e,Oe,1]}}),Z={},K=(()=>{let t=document.createElement("canvas");t.width=160,t.height=20;let _=t.getContext("2d");return _.fillStyle="#000",_.fillRect(0,0,160,20),_.fillStyle="#fff",_.font='bold 19px "Courier New", Courier, monospace',_.textAlign="center",_.textBaseline="middle",Lo.split("").forEach((M,N)=>_.fillText(M,N*16+8,11)),e.texture({data:t,min:"nearest",mag:"nearest",wrap:"clamp"})})(),se=null,oe=e({vert:No,frag:Ao,attributes:{position:{buffer:e.prop("vb"),stride:36,offset:0},normal:{buffer:e.prop("vb"),stride:36,offset:12},uv:{buffer:e.prop("vb"),stride:36,offset:24},flag:{buffer:e.prop("vb"),stride:36,offset:32}},elements:e.prop("el"),offset:e.prop("offset"),count:e.prop("count"),cull:{enable:!1},uniforms:{model:e.prop("model"),seed:e.prop("seed"),dark:e.prop("dark"),emit:(t,_)=>_.emit||0,breath:(t,_)=>_.breath||0,order:(t,_)=>_.order===void 0?-1:_.order,slot:(t,_)=>_.slot||0,letterTex:()=>K,bodyTex:e.prop("tex"),...S,memTex:()=>se||k,nMem:57,sigTime:t=>typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:t.time,tvLight:()=>u}});B("res/redroom/memories.webp").then(t=>{se=t,R=t}).catch(t=>console.error("The memories did not load",t));for(let t in ae.models){let _=ae.models[t],M=[];for(let N=0;N<_.tex;N++)M.push(B("res/redroom/tv_"+t+"_"+N+".webp"));Promise.all([fetch(_.file).then(N=>N.arrayBuffer()),...M]).then(([N,...D])=>{let $=new Uint32Array(N,0,4),j=$[0],U=$[1],ee=$[2],le=$[3],Te=new Int32Array(N,16,ee*3),_e=16+ee*12,Oe=e.buffer(new Float32Array(N,_e,j*9)),qe=_e+j*36,Be=le?new Uint32Array(N.slice(qe,qe+U*4)):new Uint16Array(N.slice(qe,qe+U*2)),$e=e.elements({data:Be,type:le?"uint32":"uint16"}),ge=[];for(let Ne=0;Ne<ee;Ne++)ge.push({offset:Te[Ne*3],count:Te[Ne*3+1],tex:Te[Ne*3+2]>=0?D[Te[Ne*3+2]]:D[0]});Z[t]={vb:Oe,el:$e,parts:ge,dark:_.dark}}).catch(N=>console.error("A television did not load",N))}let q=[],F=()=>{if(se){q.length=0;for(let t of re){let _=Z[t.name];if(_)for(let M of _.parts)q.push({vb:_.vb,el:_.el,offset:M.offset,count:M.count,tex:M.tex,model:t.model,seed:t.seed,dark:_.dark,order:ae.letters[re.indexOf(t)],slot:re.indexOf(t)})}q.length&&oe(q)}},W=So(),be=null,h0=null;B("res/redroom/polaroids.webp").then(t=>{be=t}).catch(t=>console.error("The photographs did not load",t)),B("res/redroom/letters_real.webp").then(t=>{h0=t}).catch(t=>console.error("The letters did not load",t));let z0=e({vert:Eo,frag:Io,attributes:{position:W.pos,normal:W.nrm,uv:W.uv,pic:W.pic,style:W.sty,pivot:{buffer:e.buffer(W.piv),size:4}},elements:e.elements({data:new Uint16Array(W.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...S,polTex:()=>be,letTex:()=>h0||k,tvLight:()=>u}}),de=(t,_)=>Promise.all([fetch(t).then(M=>M.arrayBuffer()),..._.map(B)]).then(([M,...N])=>{let D=new Uint32Array(M,0,4),$=D[0],j=D[1],U=D[2],ee=D[3],le=new Int32Array(M,16,U*3),Te=16+U*12,_e=Te+$*36,Oe=e.buffer(new Float32Array(M,Te,$*9)),qe=ee?new Uint32Array(M.slice(_e,_e+j*4)):new Uint16Array(M.slice(_e,_e+j*2)),Be=e.elements({data:qe,type:ee?"uint32":"uint16"}),$e=[];for(let ge=0;ge<U;ge++)$e.push({offset:le[ge*3],count:le[ge*3+1],tex:N[Math.max(0,le[ge*3+2])],mat:le[ge*3+2]});return{vb:Oe,el:Be,parts:$e}}),X=(t,_)=>{let M=new Array(16);for(let N=0;N<4;N++)for(let D=0;D<4;D++)M[N*4+D]=t[D]*_[N*4]+t[4+D]*_[N*4+1]+t[8+D]*_[N*4+2]+t[12+D]*_[N*4+3];return M},ye=(t,_,M)=>[1,0,0,0,0,1,0,0,0,0,1,0,t,_,M,1],Ze=t=>{let _=Math.cos(t),M=Math.sin(t);return[1,0,0,0,0,_,M,0,0,-M,_,0,0,0,0,1]},L0=X(ye(O[0]+V.x,O[1]+V.table,O[2]+V.z),Ze(-V.pitch)),p0=V.tableK,Q0=[p0,0,0,0,0,p0,0,0,0,0,p0,0,O[0]+I/2,O[1],O[2]+15,1],ie={},v0=0,s0=t=>{let _=t/4.6,M=Math.floor(_),N=_-M,D=Math.sin(M*91.7)*43758.5453,$=D-Math.floor(D)>.78?1.7:1,j=U=>(U=Math.max(0,Math.min(1,U)),U*U*(3-2*U));return(N<.38?j(N/.38):1-j((N-.38)/.5))*$},je=["res/redroom/proj_0.webp"];de("res/redroom/proj_body.bin",je).then(t=>{ie.body=t}).catch(t=>console.error(t)),de("res/redroom/proj_feed.bin",je).then(t=>{ie.feed=t}).catch(t=>console.error(t)),de("res/redroom/proj_takeup.bin",je).then(t=>{ie.takeup=t}).catch(t=>console.error(t)),de("res/redroom/table_all.bin",["res/redroom/table_0.webp"]).then(t=>{ie.table=t}).catch(t=>console.error(t));let d0=(t,_)=>X(L0,X(ye(t[0],t[1],t[2]),X(Ze(_),ye(-t[0],-t[1],-t[2])))),we=[],M0=t=>{we.length=0;let _=(M,N,D)=>{if(M)for(let $ of M.parts)we.push({vb:M.vb,el:M.el,offset:$.offset,count:$.count,tex:$.tex,model:N,seed:0,dark:D})};_(ie.table,Q0,.9),_(ie.body,L0,1),_(ie.feed,d0(V.feed,-t*2.6),1),_(ie.takeup,d0(V.takeup,-t*3.5),1),we.length&&oe(we)},u0=[],k0=[];{let t=[O[0]+V.lens[0],O[1]+V.lens[1],O[2]+V.lens[2]];[.96,.86,.76,.66,.56,.46,.36].forEach((_,M)=>{let N=V.img.w/2*_,D=V.img.h/2*_,$=[[-N,-D],[N,-D],[N,D],[-N,D]].map(([j,U])=>[O[0]+V.img.x+j,O[1]+V.img.y+U,O[2]+Y-.02]);for(let j=0;j<4;j++){let U=$[j],ee=$[(j+1)%4];u0.push(...t,...U,...ee),k0.push(M,M,M)}})}let T0=e({vert:Po,frag:Oo,attributes:{position:u0,layer:k0},count:u0.length/3,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{...S,tvLight:()=>u}}),J0=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale, pxScale; attribute vec3 position; void main() { vec3 p = position; p.y *= yScale; vec4 v = view * vec4(p, 1.0); gl_Position = proj * v; gl_PointSize = clamp(pxScale * 0.22 / max(0.3, -v.z), 4.0, 220.0); }",frag:"precision highp float; uniform float time; void main() { vec2 d = gl_PointCoord - 0.5; float r = length(d); float a = exp(-r * r * 160.0) * 1.6 + 0.35 * exp(-r * r * 30.0) + 0.12 * exp(-r * r * 8.0) + 0.5 * exp(-d.y * d.y * 2500.0) * exp(-abs(d.x) * 7.0); gl_FragColor = vec4(vec3(1.0, 0.84, 0.62) * a * (0.9 + 0.1 * sin(time * 37.0)), 1.0); }",attributes:{position:[O[0]+V.lens[0],O[1]+V.lens[1],O[2]+V.lens[2]+.01]},count:1,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2}}),We=null;B("res/redroom/print.webp").then(t=>{We=t}).catch(t=>console.error(t));let m0=[],Qe=[];C.trays.forEach((t,_)=>{let M=C.TX/2-.009,N=C.TZ/2-.009,D=C.TXc,$=C.liquid,j=[[D-M,t-N],[D+M,t-N],[D+M,t+N],[D-M,t+N]].map(([U,ee])=>[O[0]+U,O[1]+$,O[2]+ee]);m0.push(...j[0],...j[2],...j[1],...j[0],...j[3],...j[2]);for(let U=0;U<6;U++)Qe.push(_)});let O0=e({vert:$o,frag:Do,attributes:{position:m0,tray:Qe},count:m0.length/3,cull:{enable:!1},uniforms:{...S,tvLight:()=>u,printTex:()=>We||k,polTex:()=>be||k}}),Je=Kt();for(let t of W.pegs)Je.box(t[0]-.008,t[1]-.045,t[2]-.011,t[0]+.008,t[1]+.03,t[2]+.011,T.PEG);let et=e({vert:jt,frag:Wt,attributes:{position:Je.pos,normal:Je.nrm,kind:Je.kind,uv:Je.uv},elements:e.elements({data:new Uint16Array(Je.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...S,reflTex:()=>v,reflSize:[4,4],reflOn:0,tvLight:()=>u}}),ne=t=>{let _=Math.cos(t),M=Math.sin(t);return[_,0,-M,0,0,1,0,0,M,0,_,0,0,0,0,1]},ce=(t,_,M,N)=>X(ye(O[0]+t,O[1]+_,O[2]+M),ne(N||0));de("res/redroom/plastic_all.bin",["res/redroom/plastic_0.webp"]).then(t=>{ie.jug=t}).catch(t=>console.error(t)),de("res/redroom/multi_cleaner_all.bin",["res/redroom/multi_cleaner_0.webp"]).then(t=>{ie.can=t}).catch(t=>console.error(t)),de("res/redroom/pull_all.bin",["res/redroom/pull_0.webp"]).then(t=>{ie.socket=t}).catch(t=>console.error(t)),de("res/redroom/bulb_all.bin",["res/redroom/bulb_0.webp","res/redroom/bulb_1.webp"]).then(t=>{ie.bulb=t}).catch(t=>console.error(t));let Ue=C.top,Ve=C.b[0],g0=[["jug",ce(.16,Ue,Ve+.3,.4)],["jug",ce(.17,Ue,Ve+.52,-.3)],["jug",ce(.36,Ue,Ve+.4,2.2)],["can",ce(.14,Ue,Ve+.95,1.57)],["can",ce(.15,Ue,Ve+1.3,1.45)],["jug",ce(.16,Ue,C.b[1]-.35,.9)],["can",ce(.2,Ue,C.b[1]-.8,1.7)],["socket",ce(C.bulb[0],C.bulb[1]+.065,C.bulb[2],0)],["bulb",X(ce(C.bulb[0],C.bulb[1]+.048,C.bulb[2],0),Ze(Math.PI))]],Re=(t,_)=>[t,0,0,0,0,_===void 0?t:_,0,0,0,0,t,0,0,0,0,1];de("res/redroom/wtable_all.bin",["res/redroom/wtable_0.webp"]).then(t=>{ie.wtable=t}).catch(t=>console.error(t)),de("res/redroom/wchair_all.bin",["res/redroom/wchair_0.webp"]).then(t=>{ie.wchair=t}).catch(t=>console.error(t)),de("res/redroom/cstick_holder.bin",["res/redroom/cstick_0.webp"]).then(t=>{ie.holder=t}).catch(t=>console.error(t)),de("res/redroom/cstick_candle.bin",["res/redroom/cstick_0.webp"]).then(t=>{ie.candle=t}).catch(t=>console.error(t)),de("res/redroom/rose_all.bin",["res/redroom/rose_0.webp"]).then(t=>{ie.rose=t}).catch(t=>console.error(t)),de("res/redroom/camera_all.bin",[0,1,2,3].map(t=>"res/redroom/camera_"+t+".webp")).then(t=>{ie.camera=t}).catch(t=>console.error(t));let e0=J.k,Pe=J.z,r0=Math.PI/2,t0=[["wtable",X(ce(J.x,0,Pe,r0),Re(e0)),1.7],["wchair",X(ce(J.x-J.depth/2-.36,0,Pe-.42,r0+.05),Re(e0)),1.6],["wchair",X(ce(J.x-J.depth/2-.74,0,Pe+.66,r0-.95),Re(e0)),1.6],["wchair",X(ce(J.x+.02,0,Pe-J.half-.36,.06),Re(e0)),1.6],["wchair",X(ce(J.x-.05,0,Pe+J.half+.4,Math.PI-.1),Re(e0)),.95]];for(let[t,_,M]of J.candles)t0.push(["holder",ce(t,J.top,_,M*3),.9]),t0.push(["candle",X(ce(t,J.top,_,M*3),X(ye(0,.156,0),X(Re(1,M),ye(0,-.156,0)))),1.15]);{let t=7,_=()=>(t=t*16807%2147483647,(t-1)/2147483646),M=J.vase;for(let N=0;N<9;N++){let D=N*2.39996+_()*.4,$=N===0?.04:.16+_()*.2,j=.66+_()*.12,U=M.h+.25*j-.1-(N===0?-.04:_()*.05),ee=X(X(ce(M.x,J.top+.02,M.z,D),Ze($)),X(ye(0,U-.02,0),X(Ze(Math.PI/2),X(Re(j),ye(0,-.13,0)))));t0.push(["rose",ee,2])}}for(let[t,_,M]of J.laid)t0.push(["rose",X(ce(t,J.top+.002,_,M),Re(.72)),2]);de("res/redroom/woman_all.bin",["res/redroom/woman_0.webp"]).then(t=>{ie.woman=t}).catch(t=>console.error(t));let tt=X(ce(pe.x,0,pe.z,pe.yaw),Re(pe.k));t0.push(["woman",tt,2.6]),t0.push(["camera",ce(C.cam.x,C.cam.y,C.cam.z,r0+.35),1.7]),de("res/redroom/enlarger_all.bin",["res/redroom/enlarger_0.webp"]).then(t=>{ie.enlarger=t}).catch(t=>console.error(t)),de("res/redroom/letters_all.bin",["res/redroom/letters_0.webp"]).then(t=>{ie.letters=t}).catch(t=>console.error(t)),de("res/redroom/cup_all.bin",["res/redroom/cup_0.webp"]).then(t=>{ie.cup=t}).catch(t=>console.error(t)),de("res/redroom/ashtray_all.bin",["res/redroom/ashtray_0.webp"]).then(t=>{ie.ashtray=t}).catch(t=>console.error(t)),de("res/redroom/books_all.bin",["res/redroom/books_0.webp"]).then(t=>{ie.books=t}).catch(t=>console.error(t));{let t=C.top;t0.push(["enlarger",ce(.39,t,10.45,Math.PI-.04),1.25],["letters",ce(.45,t+.001,9.72,.55),1],["cup",ce(.19,t,9.66,2.3),1.3],["books",ce(.2,t,11.08,.15),1.3,0],["books",ce(.53,t,11.16,-.45),1.3,5],["books",ce(.22,t,11.72,1.45),1.3,6],["books",ce(.24,t+.058,11.75,1.8),1.3,7],["ashtray",ce(C.ash.x,t,C.ash.z,.7),1.2])}let oo=()=>{let t=[];for(let[M,N]of g0){let D=ie[M];D&&D.parts.forEach(($,j)=>t.push({vb:D.vb,el:D.el,offset:$.offset,count:$.count,tex:$.tex,model:N,seed:0,dark:M==="jug"||M==="can"?.85:.7,emit:M==="bulb"&&$.mat===0?1.6:0}))}let _=Mo();for(let[M,N,D,$]of t0){let j=ie[M];!j||_&&M==="woman"||j.parts.forEach((U,ee)=>{($===void 0||$===ee)&&t.push({vb:j.vb,el:j.el,offset:U.offset,count:U.count,tex:U.tex,model:N,seed:0,dark:D,emit:M==="woman"?-1:0,breath:M==="woman"?v0:0})})}t.length&&oe(t),io(),ie.woman&&!_&&ao(),ie.woman&&o0.n&&!_&&no(),E0.k>.001&&!It&&(so(),ro()),O0(),et()},ot=[],_t=[];for(let ee=0;ee<8;ee++)for(let le=0;le<8;le++){let Te=($e,ge)=>[-.08+.285*$e,.405+.20999999999999996*ge,-.222+-.05400000000000002*ge-.008],_e=le/8,Oe=(le+1)/8,qe=ee/8,Be=(ee+1)/8;for(let[$e,ge]of[[_e,qe],[Oe,qe],[Oe,Be],[_e,qe],[Oe,Be],[_e,Be]])ot.push(...Te($e,ge)),_t.push($e,ge)}let ao=e({vert:`
			precision highp float;
			uniform mat4 proj, view, model;
			uniform float yScale;
			attribute vec3 position;
			attribute vec2 uv;
			varying vec3 v_pos, v_eye;
			varying vec2 v_uv;
			void main() {
				vec4 w = model * vec4(position, 1.0);
				v_pos = w.xyz; v_uv = uv;
				vec3 t = view[3].xyz;
				v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
				v_eye.y *= yScale;
				vec3 p = w.xyz; p.y *= yScale;
				gl_Position = proj * view * vec4(p, 1.0);
			}`,frag:`
			#extension GL_OES_standard_derivatives : enable
			precision highp float;
			uniform float time;
			varying vec3 v_pos, v_eye;
			varying vec2 v_uv;
			${Se}
			${n0}
			void main() {
				vec2 u = v_uv;
				// the arch of the frame
				vec2 a = vec2((u.x - 0.5) / 0.5, (u.y - 0.55) / 0.45);
				if (u.y > 0.55 && dot(a, a) > 1.0) discard;
				// flowers: rings of thread round the knots of a noise, on a
				// fine net
				vec2 p = vec2(u.x * 2.6, u.y * 2.0);
				float n = rfbm(p * 2.2 + 3.7);
				float petals = abs(fract(n * 6.0) - 0.5);
				float flower = smoothstep(0.32, 0.4, petals) * smoothstep(0.42, 0.58, n);
				vec2 g = fract(vec2(u.x * 44.0 + u.y * 22.0, u.y * 50.0 - u.x * 18.0));
				float net = step(0.86, max(g.x, g.y));
				float edge = smoothstep(0.05, 0.0, min(min(u.x, 1.0 - u.x), u.y)) + (u.y > 0.55 ? smoothstep(0.92, 1.0, length(a)) : 0.0);
				float thread = max(max(flower, net * 0.9), edge);
				if (thread < 0.5) discard;
				vec3 lp = v_pos - RO;
				vec3 N = normalize(cross(dFdx(v_pos), dFdy(v_pos)));
				vec3 V = normalize(v_eye - v_pos);
				if (dot(N, V) < 0.0) N = -N;
				vec3 amb = ambient(lp, N) + bounce(lp, N);
				vec3 lit = redLightRough(lp + N * 0.05) * 1.2;
				vec3 col = vec3(0.6, 0.035, 0.04) * (amb + lit) * 1.5 + vec3(0.035, 0.002, 0.003) + spotSheen(lp, N, V) * vec3(0.9, 0.3, 0.3);
				float dist = length(v_eye - v_pos);
				col = mix(col, vec3(0.06, 0.004, 0.005), (1.0 - exp(-dist * 0.035)) * 0.55);
				gl_FragColor = vec4(col, 1.0);
			}`,attributes:{position:ot,uv:_t},count:ot.length/3,cull:{enable:!1},uniforms:{...S,model:()=>tt,tvLight:()=>u}}),o0={n:0,vb:null,el:null};fetch("res/redroom/veil.bin").then(t=>t.arrayBuffer()).then(t=>{let _=new Uint32Array(t,0,4),M=_[0],N=_[1],$=16+_[2]*12;o0.vb=e.buffer(new Float32Array(t,$,M*9)),o0.el=e.elements({data:new Uint16Array(t.slice($+M*36,$+M*36+N*2)),type:"uint16"}),o0.n=N}).catch(t=>console.error("Her veil did not load",t));let no=e({vert:`
			precision highp float;
			uniform mat4 proj, view, model;
			uniform float yScale, time, breath;
			attribute vec3 position, normal;
			attribute vec2 uv;
			varying vec3 v_pos, v_nrm, v_eye;
			varying vec2 v_uv;
			varying float v_fold;
			${Xt}
			void main() {
				vec3 p = position;
				vec3 n = normalize(normal);
				float u = uv.x * 6.28318, v = uv.y;
				// where it hangs free of her head, it gathers into folds...
				float free = smoothstep(0.42, 1.0, v);
				float fold = sin(u * 13.0 + sin(u * 3.0) * 1.6) * 0.6 + sin(u * 22.0 + 1.7) * 0.28 + sin(u * 5.0 + 0.4) * 0.3;
				// ...and the folds move: slow waves running round and down it
				float wv = sin(time * 0.8 + u * 5.0 - v * 4.0) * 0.55 + sin(time * 1.31 + u * 9.0 + v * 3.0) * 0.3 + sin(time * 0.37 + u * 2.0) * 0.4;
				// A LIGHT BREEZE: it comes and goes in gusts, lifting the hem
				// and sending a ripple up through it
				float gust = 0.55 + 0.45 * sin(time * 0.31) * sin(time * 0.17 + 1.3);
				float rip = sin(time * 1.7 - v * 7.0 + u * 2.0) * 0.6 + sin(time * 2.6 - v * 11.0 + u * 5.0) * 0.4;
				p += n * free * (fold * 0.0075 + wv * 0.006 * free + rip * 0.007 * free * free * gust);
				float sway = sin(time * 0.55 + u * 0.5) * 0.6 + sin(time * 1.1 + 2.0) * 0.4;
				p.x += (sway * 0.012 + 0.008) * free * free * gust;
				p.z += cos(time * 0.47 + u) * 0.008 * free * free * gust;
				p.y += max(0.0, rip) * 0.005 * free * free * gust;
				p = breathe(p, breath);
				v_fold = fold * free;
				vec4 w = model * vec4(p, 1.0);
				v_pos = w.xyz; v_uv = uv;
				v_nrm = mat3(model) * n;
				vec3 t = view[3].xyz;
				v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
				v_eye.y *= yScale;
				vec3 q = w.xyz; q.y *= yScale;
				gl_Position = proj * view * vec4(q, 1.0);
			}`,frag:`
			#extension GL_OES_standard_derivatives : enable
			precision highp float;
			uniform float time;
			varying vec3 v_pos, v_nrm, v_eye;
			varying vec2 v_uv;
			varying float v_fold;
			${Se}
			${n0}
			void main() {
				float u = v_uv.x, v = v_uv.y;
				// the scalloped hem
				float sc = abs(sin(u * 3.14159 * 72.0));
				float edge = 0.985 - 0.022 * (1.0 - sc);
				if (v > edge) discard;
				// the lace band: flowers in thread on a fine net, open between
				float lace = smoothstep(0.83, 0.86, v);
				if (lace > 0.0) {
					vec2 p = vec2(u * 72.0, (v - 0.83) * 26.0);
					float n = rfbm(p * 0.9 + 3.7);
					float petals = abs(fract(n * 6.0) - 0.5);
					float flower = smoothstep(0.3, 0.38, petals) * smoothstep(0.4, 0.56, n);
					float scroll = smoothstep(0.06, 0.0, abs(fract(p.x * 0.5 + sin(p.y * 2.2) * 0.3) - 0.5) - 0.04 * sc);
					float hemline = smoothstep(0.006, 0.0, abs(v - edge + 0.004)) + smoothstep(0.004, 0.0, abs(v - 0.845));
					float thread = max(max(flower, scroll * 0.8), hemline);
					if (thread < 0.45) discard;
				}
				vec3 lp = v_pos - RO;
				vec3 N = normalize(v_nrm);
				vec3 V = normalize(v_eye - v_pos);
				if (dot(N, V) < 0.0) N = -N;
				// a fine net: thread and hole, fading to its average where the
				// mesh is finer than the screen can show
				vec2 g = vec2(u * 1400.0, v * 420.0);
				vec2 gq = abs(fract(g) - 0.5);
				float fw = length(fwidth(g));
				float net = mix(step(0.32, max(gq.x, gq.y)), 0.36, clamp(fw * 3.0, 0.0, 1.0));
				float facing = abs(dot(N, V));
				// thin face on, near black where it turns away or lies in a fold
				float a = mix(0.97, 0.5 + 0.22 * net, smoothstep(0.1, 0.85, facing));
				a = mix(a, 0.96, lace);
				a = clamp(a + max(0.0, -v_fold) * 0.12, 0.0, 1.0);
				vec3 amb = ambient(lp, N) + bounce(lp, N);
				vec3 Ls; float ks = spotAt(lp, Ls);
				// the spot shining through it from above and behind
				float through = max(0.0, dot(-N, Ls)) * (1.0 - facing);
				vec3 alb = vec3(0.009, 0.006, 0.007);
				vec3 col = alb * (amb + vec3(1.0, 0.9, 0.8) * ks * max(0.0, dot(N, Ls) * 0.6 + 0.4) * 0.3)
					+ spotSheen(lp, N, V) * 0.55
					+ vec3(1.0, 0.86, 0.74) * ks * through * 0.03
					+ amb * pow(1.0 - facing, 3.0) * 0.05
					+ vec3(0.02, 0.0015, 0.0015) * (1.0 - facing);
				float dist = length(v_eye - v_pos);
				col = mix(col, vec3(0.06, 0.004, 0.005), (1.0 - exp(-dist * 0.035)) * 0.55);
				gl_FragColor = vec4(col, a);
			}`,attributes:{position:{buffer:()=>o0.vb,stride:36,offset:0},normal:{buffer:()=>o0.vb,stride:36,offset:12},uv:{buffer:()=>o0.vb,stride:36,offset:24}},elements:()=>o0.el,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}},uniforms:{...S,model:()=>tt,breath:()=>v0,tvLight:()=>u}}),at=[],zt=[];{let t=fe.axis,_=Math.abs(t[1])>.9?[1,0,0]:[0,1,0],M=(ee,le)=>[ee[1]*le[2]-ee[2]*le[1],ee[2]*le[0]-ee[0]*le[2],ee[0]*le[1]-ee[1]*le[0]],D=(ee=>{let le=Math.hypot(...ee);return ee.map(Te=>Te/le)})(M(t,_)),$=M(t,D),j=fe.pos[1]/-t[1],U=40;[1,.82,.64,.46,.3].forEach((ee,le)=>{let Te=Math.tan(fe.outer*ee)*j;for(let _e=0;_e<U;_e++){let Oe=_e/U*Math.PI*2,qe=(_e+1)/U*Math.PI*2,Be=ge=>[0,1,2].map(Ne=>O[Ne]+fe.pos[Ne]+t[Ne]*j+(D[Ne]*Math.cos(ge)+$[Ne]*Math.sin(ge))*Te),$e=[0,1,2].map(ge=>O[ge]+fe.pos[ge]);at.push(...$e,...Be(Oe),...Be(qe)),zt.push(le,le,le)}})}let so=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float yScale;
			attribute vec3 position;
			attribute float layer;
			varying vec3 v_pos, v_eye;
			void main() {
				v_pos = position;
				vec3 t = view[3].xyz;
				v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
				v_eye.y *= yScale;
				vec3 p = position; p.y *= yScale;
				gl_Position = proj * view * vec4(p, 1.0);
			}`,frag:`
			precision highp float;
			uniform float time, spotK;
			varying vec3 v_pos, v_eye;
			${Se}
			void main() {
				vec3 lp = v_pos - RO;
				float along = length(lp - vec3(${b(fe.pos[0])}, ${b(fe.pos[1])}, ${b(fe.pos[2])})) / ${b(fe.pos[1]/-fe.axis[1])};
				float haze = 0.55 + 0.9 * rfbm(lp.xz * 1.3 + vec2(lp.y * 0.6, time * 0.05)) * rfbm(lp.xy * 0.9 - time * 0.03);
				float dist = length(v_eye - v_pos);
				float a = spotK * haze * (0.55 + 0.45 * smoothstep(1.0, 0.0, along)) * smoothstep(0.0, 0.12, along) * smoothstep(0.98, 0.8, along) * smoothstep(0.3, 1.6, dist);
				gl_FragColor = vec4(vec3(1.0, 0.88, 0.74) * a * 0.045, 1.0);
			}`,attributes:{position:at,layer:zt},count:at.length/3,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{spotK:()=>E0.k}}),Lt=90,Mt=[];for(let t=0;t<Lt;t++)Mt.push(Math.random(),Math.random(),Math.random(),Math.random());let ro=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, yScale, pxScale, spotK;
			attribute vec4 seed;
			varying float v_a;
			void main() {
				vec3 S = vec3(${b(O[0]+fe.pos[0])}, ${b(O[1]+fe.pos[1])}, ${b(O[2]+fe.pos[2])});
				vec3 A = vec3(${b(fe.axis[0])}, ${b(fe.axis[1])}, ${b(fe.axis[2])});
				// somewhere in the cone, drifting slowly down and round
				float al = 0.25 + 0.7 * fract(seed.x - time * 0.004 * (0.5 + seed.w));
				float len = al * ${b(fe.pos[1]/-fe.axis[1])};
				float ang = seed.y * 6.2832 + time * 0.03 * (seed.z - 0.5);
				float rr = sqrt(seed.z) * tan(${b(fe.outer)}) * len * 0.92;
				vec3 U = normalize(cross(A, vec3(0.0, 1.0, 0.0)));
				vec3 V = cross(A, U);
				vec3 p = S + A * len + (U * cos(ang) + V * sin(ang)) * rr;
				p.y *= yScale;
				vec4 v = view * vec4(p, 1.0);
				gl_Position = proj * v;
				gl_PointSize = clamp(pxScale * 0.006 / max(0.2, -v.z), 1.0, 5.0);
				v_a = spotK * (0.4 + 0.6 * sin(time * (0.7 + seed.w) + seed.x * 30.0) * 0.5 + 0.3);
			}`,frag:`
			precision highp float;
			varying float v_a;
			void main() {
				float d = length(gl_PointCoord - 0.5);
				gl_FragColor = vec4(vec3(1.0, 0.9, 0.78) * smoothstep(0.5, 0.0, d) * v_a * 0.7, 1.0);
			}`,attributes:{seed:Mt},count:Lt,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2,spotK:()=>E0.k}}),io=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float yScale, pxScale, time;
			attribute vec4 fp;
			varying float v_i, v_h, v_s;
			void main() {
				vec3 p = fp.xyz; p.y *= yScale;
				vec4 v = view * vec4(p, 1.0);
				gl_Position = proj * v;
				gl_PointSize = clamp(pxScale * 0.2 / max(0.12, -v.z), 3.0, 600.0);
				float t = time + fp.w * 7.0;
				v_h = 0.85 + 0.12 * sin(t * 11.0) * sin(t * 2.7) + 0.08 * sin(t * 27.0);
				v_s = 0.25 * sin(t * 3.1) * sin(t * 1.3) + 0.12 * sin(t * 13.0);
				v_i = 0.85 + 0.15 * sin(t * 17.0 + 1.0);
			}`,frag:`
			precision highp float;
			varying float v_i, v_h, v_s;
			void main() {
				vec2 q = gl_PointCoord - 0.5; q.y = -q.y;
				// (q in units of the sprite: the flame is 0.07 m tall in 0.2 m)
				float y = (q.y + 0.07) / (0.2 * v_h);
				float x = q.x + v_s * max(0.0, y) * 0.12;
				float w = 0.045 * sqrt(max(0.0, 1.0 - y)) * smoothstep(-0.25, 0.25, y + 0.2);
				float flame = smoothstep(w, w * 0.25, abs(x)) * step(-0.12, y) * step(y, 1.0);
				float core = smoothstep(w * 0.5, 0.0, abs(x)) * smoothstep(0.55, 0.05, y) * step(-0.08, y);
				vec3 c = vec3(1.0, 0.55, 0.16) * flame * 1.6 + vec3(1.0, 0.92, 0.75) * core * 1.4;
				float r = length(vec2(q.x, q.y + 0.03));
				c += vec3(1.0, 0.45, 0.15) * (exp(-r * r * 120.0) * 0.35 + exp(-r * r * 18.0) * 0.08);
				gl_FragColor = vec4(c * v_i, 1.0);
			}`,attributes:{fp:[].concat(...J.flames.map((t,_)=>[O[0]+t[0],O[1]+t[1],O[2]+t[2],_*1.37]))},count:J.flames.length,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2}}),$0=document.createElement("canvas");$0.width=512,$0.height=192;{let t=$0.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,512,192),t.font='bold 128px "Helvetica Neue", Arial, sans-serif',t.textAlign="center",t.textBaseline="middle",t.shadowColor="#ff2a20",t.shadowBlur=28,t.fillStyle="#ff6a5a",t.fillText("ENTER",256,100),t.shadowBlur=0,t.fillStyle="#ffd8d0",t.fillText("ENTER",256,100)}let co=e.texture({data:$0,min:"linear",mag:"linear",wrap:"clamp"}),Ke=De.sign,D0=.3,C0=.1125,V0=Ke[2]-.025,lo=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale; attribute vec3 position; attribute vec2 uv; varying vec2 v_uv; void main() { v_uv = uv; vec3 p = position; p.y *= yScale; gl_Position = proj * view * vec4(p, 1.0); }",frag:"precision highp float; uniform sampler2D tex; uniform float signK; varying vec2 v_uv; void main() { vec3 c = texture2D(tex, v_uv).rgb; vec3 col = c * vec3(1.6, 0.55, 0.5) * signK + vec3(0.06, 0.0, 0.0); gl_FragColor = vec4(col, 1.0); }",attributes:{position:[[Ke[0]+D0,Ke[1]-C0,V0],[Ke[0]-D0,Ke[1]-C0,V0],[Ke[0]-D0,Ke[1]+C0,V0],[Ke[0]+D0,Ke[1]+C0,V0]].map(t=>[t[0]+O[0],t[1]+O[1],t[2]+O[2]]),uv:[[0,1],[1,1],[1,0],[0,0]]},elements:[0,1,2,0,2,3],cull:{enable:!1},uniforms:{tex:co,signK:()=>P}}),kt=220,Tt=[];for(let t=0;t<kt;t++)Tt.push(Math.random(),Math.random(),Math.random(),Math.random());let fo=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b;
			void main() {
				vec3 L0 = vec3(${b(O[0]+V.lens[0])}, ${b(O[1]+V.lens[1])}, ${b(O[2]+V.lens[2])});
				vec3 C = vec3(${b(O[0]+V.img.x)}, ${b(O[1]+V.img.y)}, ${b(O[2]+Y)});
				vec3 fw = normalize(C - L0);
				vec3 rt = normalize(cross(fw, vec3(0.0, 1.0, 0.0)));
				vec3 up = cross(rt, fw);
				// most of them close to the lens
				float along = 0.15 + pow(seed.x, 2.2) * 7.5;
				float sp = along / length(C - L0);
				vec2 off = (vec2(seed.y, seed.z) - 0.5) * vec2(${b(V.img.w)}, ${b(V.img.h)}) * sp;
				float t = time * (0.05 + 0.08 * seed.w);
				off += vec2(sin(t * 2.0 + seed.w * 30.0), cos(t * 1.6 + seed.y * 20.0)) * 0.05 * (0.3 + along * 0.1);
				vec3 p = L0 + fw * along + rt * off.x + up * (off.y + sin(t + seed.z * 9.0) * 0.04);
				p.y *= yScale;
				vec4 v = view * vec4(p, 1.0);
				gl_Position = proj * v;
				// they flash as they turn edge-on to the light
				float tw = pow(0.5 + 0.5 * sin(time * (2.0 + 5.0 * seed.w) + seed.x * 60.0), 6.0);
				v_b = (0.15 + 0.7 * tw) / (1.0 + along * 0.5);
				gl_PointSize = clamp(pxScale * (0.006 + 0.008 * seed.w) / max(0.15, -v.z), 1.0, 7.0);
			}`,frag:"precision highp float; varying float v_b; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vec3(1.0, 0.84, 0.6) * v_b * a, 1.0); }",attributes:{seed:Tt},count:kt,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2}}),nt=70,St=[];for(let t=0;t<nt;t++)St.push(Math.random(),Math.random(),Math.random(),t<nt*.6?1:0);let ho=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b, v_a, v_s;
			void main() {
				vec3 L0 = vec3(${b(O[0]+V.lens[0])}, ${b(O[1]+V.lens[1])}, ${b(O[2]+V.lens[2])});
				vec3 C = vec3(${b(O[0]+V.img.x)}, ${b(O[1]+V.img.y)}, ${b(O[2]+Y)});
				vec3 fw = normalize(C - L0);
				float life = fract(time * (0.07 + 0.04 * seed.y) + seed.x);
				vec3 p;
				if (seed.w > 0.5) {
					// at the lens, pulled forward into the beam
					p = L0 + fw * (0.05 + life * 1.3) + vec3((seed.z - 0.5) * 0.16, life * 0.32 + (seed.y - 0.5) * 0.1, 0.0);
				} else {
					// up out of the lamp house's vents
					p = L0 + vec3((seed.z - 0.5) * 0.12, 0.08 + life * 0.75, -0.32 + (seed.y - 0.5) * 0.12);
				}
				p.x += sin(time * 0.6 + seed.y * 20.0) * 0.06 * life;
				p.z += cos(time * 0.4 + seed.z * 17.0) * 0.05 * life;
				// how much of the beam's light it is in
				vec3 d = p - L0;
				float al = max(dot(d, fw), 0.0);
				float perp = length(d - fw * al);
				float rc = 0.04 + al * ${b(V.img.h*.5)} / length(C - L0);
				v_b = 0.12 + 1.4 * smoothstep(rc + 0.06, rc * 0.5, perp) * smoothstep(0.0, 0.06, al);
				v_a = sin(3.14159 * life) * (0.5 + 0.5 * seed.y);
				v_s = seed.x * 31.0 + seed.z * 7.0;
				vec3 pw = p; pw.y *= yScale;
				vec4 v = view * vec4(pw, 1.0);
				gl_Position = proj * v;
				gl_PointSize = clamp(pxScale * (0.14 + 0.36 * life) / max(0.2, -v.z), 2.0, 600.0);
			}`,frag:`
			precision highp float;
			uniform float time;
			varying float v_b, v_a, v_s;
			${Se}
			void main() {
				vec2 d = gl_PointCoord - 0.5;
				float g = exp(-dot(d, d) * 9.0);
				float n = rnoise(gl_PointCoord * 3.2 + v_s + time * 0.05) * 0.7 + rnoise(gl_PointCoord * 7.0 - v_s) * 0.3;
				float a = g * smoothstep(0.2, 0.8, n) * v_a * 0.15;
				gl_FragColor = vec4(mix(vec3(0.5, 0.06, 0.04), vec3(1.0, 0.86, 0.68), clamp(v_b - 0.12, 0.0, 1.0)) * v_b * a, 1.0);
			}`,attributes:{seed:St},count:nt,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2}}),Rt=2200,qt=[];for(let t=0;t<Rt;t++)qt.push(Math.random(),Math.random(),Math.random(),Math.random());let po=e({vert:Co,frag:Vo,attributes:{seed:qt},count:Rt,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2}}),Nt=56,st=(()=>{let t=[],_=[],M=[];for(let N=0;N<Nt;N++){for(let[$,j]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(N),_.push($,j);let D=N*4;M.push(D,D+1,D+2,D,D+2,D+3)}return{id:t,cr:_,idx:M}})(),vo=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, yScale;
			uniform vec3 src;
			attribute float id;
			attribute vec2 corner;
			varying vec2 v_c;
			varying float v_a, v_id, v_age;
			const float LIFE = 6.5, N = ${Nt}.0;
			void main() {
				float ph = fract(time / LIFE + id / N);
				float age = ph * LIFE;
				float born = time - age;
				// the thread wavers as a whole (by when each bit left the tip),
				// and each bit curls more the higher it is carried
				float sway = sin(born * 0.7) * 0.6 + sin(born * 1.9 + 1.0) * 0.3;
				vec3 p = src;
				p.y += age * 0.075 + age * age * 0.006;
				p.x += (sway * 0.012 + sin(age * 1.7 + id * 0.9) * 0.018 * age) * smoothstep(0.0, 1.2, age);
				p.z += (cos(born * 0.53) * 0.01 + cos(age * 1.3 + id * 1.7) * 0.016 * age) * smoothstep(0.0, 1.2, age) - age * 0.01;
				float size = 0.006 + 0.03 * smoothstep(0.6, LIFE, age) + 0.012 * smoothstep(0.0, 1.5, age);
				vec3 right = vec3(view[0][0], view[1][0], view[2][0]);
				vec3 up = vec3(view[0][1], view[1][1], view[2][1]);
				// (a thread is taller than it is wide)
				p += right * corner.x * size + up * corner.y * size * mix(2.6, 1.2, smoothstep(0.5, 3.0, age));
				v_c = corner; v_id = id; v_age = age;
				v_a = smoothstep(0.0, 0.25, age) * (1.0 - smoothstep(LIFE * 0.45, LIFE, age));
				p.y *= yScale;
				gl_Position = proj * view * vec4(p, 1.0);
			}`,frag:`
			precision highp float;
			uniform float time;
			varying vec2 v_c;
			varying float v_a, v_id, v_age;
			${Se}
			void main() {
				float r = length(v_c);
				if (r > 1.0) discard;
				float w = rfbm(v_c * 1.3 + vec2(v_id * 3.7, time * 0.25 - v_age * 0.4));
				float a = (1.0 - r * r) * smoothstep(0.25, 0.75, w) * v_a * mix(0.55, 0.16, smoothstep(0.5, 4.0, v_age));
				// pale smoke, lit red by the room, warmer where it is thick
				vec3 col = mix(vec3(0.42, 0.2, 0.19), vec3(0.62, 0.34, 0.3), w);
				gl_FragColor = vec4(col, a);
			}`,attributes:{id:st.id,corner:st.cr},elements:e.elements({data:new Uint16Array(st.idx),type:"uint16"}),depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}},cull:{enable:!1},uniforms:{...S,src:()=>[O[0]+C.smoke[0],O[1]+C.smoke[1],O[2]+C.smoke[2]]}}),B0=t=>+(+t).toFixed(4),uo=(t,_)=>.82+.1*Math.sin(t*(9+B0(_*1.7))+B0(_*2.1))*Math.sin(t*3.3+B0(_))+.08*Math.sin(t*23+B0(_*4)),At=(t,_)=>[0,1,2,3].map(M=>_*4+M<J.flames.length?uo(t,_*4+M):0),Et=e({uniforms:{rrF0:t=>At(t.time,0),rrF1:t=>At(t.time,1)}}),It=!1,Pt=t=>Et(()=>mo(t)),mo=t=>{let _=!!(t&&t.reflected);_||L(),It=_;let M=performance.now()/1e3;v0=s0(M);let N=.8+.12*Math.sin(M*47)*Math.sin(M*3.1)+.08*Math.sin(M*23+1.3);u[0]=.8*N,u[1]=.84*N,u[2]=.95*N,P=E(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:M),G(),lo(),F(),be&&z0(),oo(),M0(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:M),C.smoke&&vo(),R&&!(typeof window!="undefined"&&window.__noBeam)&&T0(),J0(),!_&&!(typeof window!="undefined"&&window.__noSmoke)&&ho(),_||fo(),_||po()};Pt.reflect=(t,_)=>Et(()=>go(t,_));let go=(t,_)=>i(M=>{let N=M.viewportWidth,D=M.viewportHeight,$=Math.max(2,Math.round(N/2)),j=Math.max(2,Math.round(D/2)),U=!y;if((n.width!==$||n.height!==j)&&(n.resize($,j),U=!0),h[0]=N,h[1]=D,g=1,!U&&++p%_!==0){z=l;return}z=v,f(()=>{e.clear({color:[0,0,0,1],depth:1}),t()}),z=l,y=!0});return Pt};var pt=null;Object.assign(ut.exports,{O,W:I,L:Y,H:he,ROOM:{W:I,L:Y,H:he,WIN:H,DOOR:ze,ENT:De,SHAFTS:te,TV:ae,DARK:C,PROJ:V,CABLE:Ee,POL:a0,TBL:J,WOMAN:pe,winZ:U0,vaultY:i0},POST:{threshold:.3},sunGLSL:Ro,bakedSun(e){return pt||(pt=e.texture({width:1,height:1,data:[0,0,0,0]})),pt},ready:()=>!0,setFlower(){},setGuide(){},setWind(){},setSpot(e){E0.k=e},setWarn(e){Object.assign(Ae,e)},setViewer(e){Ut.eye=e?e.slice():null},setPulse(e,x){K0.phase=e,K0.period=x},onClick(e){vt.click=e}})});var to=S0((Zo,eo)=>{"use strict";var Le=mt(),{O:gt}=Le,{W:Me,L:Yt,TV:b0,DARK:Ce,PROJ:f0,TBL:ve,WOMAN:Y0}=Le.ROOM,Zt=e=>[e[0]+gt[0],e[1]+gt[1],e[2]+gt[2]],yt=(e,x,m)=>e+(x-e)*m,_0=e=>Math.max(0,Math.min(1,e)),Bo="Some grief is not yours to witness.",Ye=e=>(e=_0(e),e*e*(3-2*e)),Z0=[Y0.x,0,Y0.z],bt=Math.sin(Y0.yaw),wt=Math.cos(Y0.yaw),Fe=(e,x,m)=>[Z0[0]+bt*e+wt*(m||0),x,Z0[2]+wt*e-bt*(m||0)],He=f0.x,Jt=f0.table,l0=f0.z,I0=[He+f0.feed[0],Jt+f0.feed[1],l0+f0.feed[2]],X0=f0.lens,xt=Ce.trays[0],ke=ve.letters,w0=[(ke[0].x+ke[1].x)/2,ve.top,(ke[0].z+ke[1].z)/2],Go=[{eye:[Me/2+.15,1.55,-9.6],at:[Me/2,1.7,0],fov:40,dof:.05,p:{fov:58}},{eye:[Me/2+.05,1.6,-3],at:[Me/2,1.85,1.5],fov:50,dof:.05,p:{fov:70}},{eye:[Me/2-.2,1.5,.9],at:[Me/2-3,1.4,7],fov:56,dof:.04,p:{fov:74}},{eye:[Me-4.4,1.55,1.2],at:[Me-.7,1.05,ve.z+.2],fov:46,dof:.06,p:{eye:[Me-4.8,1.6,.9],fov:68}},{eye:[ve.x-1.4,ve.top+.48,ve.z-.7],at:[ve.x+.05,ve.top+.26,ve.z+0],fov:40,dof:.32,p:{fov:50}},{eye:[ve.stack[0]-.35,ve.top+.75,ve.stack[1]-.25],at:[ve.stack[0]+.02,ve.top,ve.stack[1]+.02],fov:34,dof:.3,p:{fov:50}},{eye:[w0[0]-.3,ve.top+.85,w0[2]-.1],at:[w0[0]+.03,ve.top,w0[2]+.02],fov:40,dof:.22,p:{eye:[w0[0]-.35,ve.top+1.05,w0[2]-.1],fov:62}},{eye:[ke[0].x-.09,ve.top+.4,ke[0].z-.01],at:[ke[0].x+.012,ve.top,ke[0].z],fov:42,dof:.12,p:{eye:[ke[0].x-.1,ve.top+.46,ke[0].z],fov:70}},{eye:[ke[1].x-.09,ve.top+.4,ke[1].z+.01],at:[ke[1].x+.012,ve.top,ke[1].z],fov:42,dof:.12,p:{eye:[ke[1].x-.1,ve.top+.46,ke[1].z],fov:70}},{eye:[3.3,1.55,1.3],at:[.3,1.35,5.2],fov:50,dof:.05,p:{eye:[2.8,1.6,.9],fov:72}},{eye:[1.05,1.5,xt-.42],at:[Ce.TXc-.02,Ce.liquid,xt+.04],fov:34,dof:.2,p:{eye:[1,1.55,xt-.45],fov:52}},{eye:[.95,1.22,Ce.cam.z-.5],at:[Ce.cam.x-.02,Ce.cam.y+.04,Ce.cam.z+.06],fov:34,dof:.34,p:{fov:48}},{eye:[1.75,1.45,9],at:[.35,1.08,10.8],fov:46,dof:.12,p:{eye:[1.9,1.5,8.6],fov:66}},{eye:[.66,1.58,9.25],at:[.38,Ce.top,9.75],fov:52,dof:.18,p:{eye:[.7,1.68,9.15],fov:74}},{eye:[.66,1.58,10.75],at:[.38,Ce.top,11.25],fov:52,dof:.18,pass:!0,p:{eye:[.7,1.68,10.65],fov:74}},{eye:[.68,1.5,11.35],at:[.5,Ce.top+.06,11.72],fov:44,dof:.26,p:{eye:[.72,1.6,11.25],fov:66}},{eye:[.66,1.58,12.2],at:[.4,Ce.top,12.62],fov:52,dof:.18,p:{eye:[.7,1.68,12.1],fov:74}},{eye:[2,1.6,8.3],at:[.4,2.25,11.3],fov:50,dof:.12,p:{eye:[1.8,1.6,8.1],fov:72}}];function Qt(e,x){let m=e.length-1,c=Math.max(0,Math.min(m,x)),A=Math.min(m-1,Math.floor(c)),a=c-A,r=e[Math.max(0,A-1)],o=e[A],l=e[A+1],n=e[Math.min(m,A+2)],f=a*a,v=f*a;return[0,1,2].map(i=>.5*(2*o[i]+(-r[i]+l[i])*a+(2*r[i]-5*o[i]+4*l[i]-n[i])*f+(-r[i]+3*o[i]-3*l[i]+n[i])*v))}var P0=0;function Fo(){let e=Go.slice();{let y=(Le.ROOM.DARK.hung||[]).filter(h=>h.peg[0]>1.3&&h.c[2]>9.4&&h.c[2]<12.6&&h.c[1]>1.6&&h.c[1]<2.5);if(y.sort((h,u)=>Math.abs(h.c[2]-10.9)-Math.abs(u.c[2]-10.9)),y.length){let h=y[0],u=h.c;e.push({eye:[u[0]+.85,u[1]-.05,u[2]-.55],at:u,fov:30,dof:.42,p:{eye:[u[0]+1.05,u[1]-.05,u[2]-.6],fov:46}});let R=y.find(w=>Math.abs(w.c[2]-u[2])>.25&&Math.abs(w.c[2]-u[2])<.9);R&&e.push({eye:[R.c[0]+.7,R.c[1]+.02,R.c[2]+.45],at:R.c,fov:30,dof:.42,p:{eye:[R.c[0]+.9,R.c[1]+.02,R.c[2]+.5],fov:46}})}}let x=Le.ROOM.CABLE,m=x.path,c=x.socket[2],A=x.socket[0];e.push({eye:[A+1.05,.42,c-.45],at:[A,.27,c+.08],fov:42,dof:.32,p:{eye:[A+1.3,.48,c-.55],fov:58}});let[a,r]=x.run;for(let y of[.04,.22,.42,.62,.82]){let h=Math.round(a+(r-a)*y),u=m[Math.max(0,h-6)],R=m[Math.min(m.length-1,h+6)],w=m[h],s=R[0]-u[0],d=R[2]-u[2],L=Math.hypot(s,d)||1;s/=L,d/=L,e.push({eye:[w[0]-s*.8-d*.12,.3,w[2]-d*.8+s*.12],at:[w[0]+s*1.5,.06,w[2]+d*1.5],fov:44,dof:.24,pass:!0,p:{fov:60}})}e.push({eye:[Me-3,.45,c-1.6],at:[Me-.3,1.9,c+.9],fov:50,dof:.1,p:{fov:70}});let o=(y,h,u)=>[y[0]+h[0]*u,y[1]+h[1]*u,y[2]+h[2]*u],l=11,n=()=>(l=l*16807%2147483647,(l-1)/2147483646),f=(Le.ROOM.POL.spots||[]).filter(y=>y.n[0]<-.5&&y.c[2]>10.5&&y.c[2]<21.5&&y.c[1]>1.9&&y.c[1]<4.6),v=(y,h)=>Math.abs(y.c[2]-h)+Math.abs(y.c[1]-3)*.4,i=[];for(let y of[12.6,15,17.3]){let h=null;for(let u of f)(!h||v(u,y)<v(h,y))&&(h=u);h&&i.indexOf(h)<0&&i.push(h)}i.forEach((y,h)=>{let u=y.n,R=y.c;h>0&&e.push({eye:o(o(R,u,2.2),[0,.15,-.6],1),at:R,fov:50,dof:.05,pass:!0}),e.push({eye:o(o(R,u,1),[0,.06,-.3],1),at:R,fov:36,dof:.26,p:{fov:50}})}),e.push({eye:[He+2,1.35,l0-1.5],at:[He,1.35,l0+.1],fov:42,dof:.12,p:{eye:[He+1.6,1.4,l0-1.5],fov:62}}),e.push({eye:[He+.85,I0[1]+.12,I0[2]-.35],at:[I0[0],I0[1]-.05,I0[2]],fov:36,dof:.32,p:{fov:52}}),e.push({eye:[He+.42,X0[1]+.08,X0[2]+1.35],at:[He,X0[1],X0[2]],fov:36,dof:.35,p:{fov:52}}),e.push({eye:[He-.55,1.75,l0-1.4],at:[Me/2,5,Yt],fov:50,dof:.06,p:{fov:70}}),e.push({eye:[He-.2,3.3,l0+3.2],at:[Me/2,5.4,Yt],fov:52,dof:.04,pass:!0,p:{fov:72}});let z=b0.stack;e.push({eye:[Me/2+1.4,1.2,b0.z-4.9],at:[Me/2,1.75,b0.z],fov:50,dof:.05,p:{fov:70}});let g=z.map((y,h)=>h);for(let y=g.length-1;y>0;y--){let h=Math.floor(n()*(y+1)),u=g[y];g[y]=g[h],g[h]=u}g=g.slice(0,10);let p=null;for(let y of g){let h=z[y],u=h.screen,R=h.facing,w=h.size*1.25;if(p){let d=[(p[0]+u[0])/2,(p[1]+u[1])/2+.2,Math.min(p[2],u[2])-2.6];e.push({eye:d,at:[(p[0]+u[0])/2,(p[1]+u[1])/2,b0.z],fov:46,dof:.05,pass:!0})}let s=(n()-.5)*.5;e.push({eye:[u[0]+R[0]*w+s,u[1]+.05+(n()-.5)*.15,u[2]+R[2]*w],at:[u[0],u[1],u[2]],fov:30,dof:.3,p:{fov:44}}),p=u}return e.push({eye:[Me/2+.3,3.3,b0.z-2.3],at:[Me/2,2.4,b0.z+3],fov:52,dof:.04,pass:!0}),e.push({eye:Fe(-.9,4.4,.2),at:Fe(4.6,1.5),fov:54,dof:.04,pass:!0}),P0=e.length,e.push({eye:Fe(-3.4,2.5,-1.5),at:Fe(1,.75),fov:46,dof:.08,p:{fov:66}}),e.push({eye:Fe(-2.55,2.3,0),at:Fe(5.2,.95),fov:56,dof:.12,p:{eye:Fe(-2.55,2.4,0),fov:74}}),e.push({eye:Fe(-1.6,.92,0),at:Fe(3,1.02),fov:50,dof:.28,p:{eye:Fe(-1.9,.95,0),fov:64}}),e}function Ho(){let e=null,x=null,m=null,c=null,A=null,a=l=>{let n=e.createBuffer(1,Math.floor(e.sampleRate*l),e.sampleRate),f=n.getChannelData(0);for(let v=0;v<f.length;v++)f[v]=Math.random()*2-1;return n},r=()=>{if(e){e.state==="suspended"&&e.resume();return}let l=window.AudioContext||window.webkitAudioContext;if(!l)return;e=window.__redAudio||new l,window.__redAudio=e,e.state==="suspended"&&e.resume(),c=e.createGain(),c.gain.value=.9,c.connect(e.destination),x=e.createGain(),x.gain.value=0;let n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=170,n.Q.value=4,[55,55.6,110.3].forEach((i,z)=>{let g=e.createOscillator();g.type=z<2?"sawtooth":"sine",g.frequency.value=i,g.connect(n),g.start()}),n.connect(x),x.connect(c),m=e.createGain(),m.gain.value=0;let f=e.createBufferSource();f.buffer=a(2),f.loop=!0;let v=e.createBiquadFilter();v.type="bandpass",v.frequency.value=3200,v.Q.value=.6,f.connect(v),v.connect(m),m.connect(c),f.start()},o=(l,n,f,v,i)=>{l.gain.setValueAtTime(0,n),l.gain.linearRampToValueAtTime(v,n+f),l.gain.exponentialRampToValueAtTime(1e-4,n+f+i)};return{start:r,set(l,n){if(!e)return;let f=e.currentTime;x.gain.setTargetAtTime(l*.16,f,.15),m.gain.setTargetAtTime(n*.035,f,.08)},tick(){if(!e)return;let l=e.currentTime,n=e.createOscillator();n.type="square",n.frequency.setValueAtTime(1180,l),n.frequency.exponentialRampToValueAtTime(240,l+.09);let f=e.createGain();o(f,l,.002,.09,.12),n.connect(f),f.connect(c),n.start(l),n.stop(l+.2);let v=e.createOscillator();v.type="sine",v.frequency.setValueAtTime(90,l),v.frequency.exponentialRampToValueAtTime(40,l+.2);let i=e.createGain();o(i,l,.004,.35,.25),v.connect(i),i.connect(c),v.start(l),v.stop(l+.35)},clunk(){if(!e)return;let l=e.currentTime,n=e.createOscillator();n.type="sine",n.frequency.setValueAtTime(75,l),n.frequency.exponentialRampToValueAtTime(38,l+.25);let f=e.createGain();o(f,l,.003,.5,.35),n.connect(f),f.connect(c),n.start(l),n.stop(l+.5);let v=e.createBufferSource();v.buffer=a(.08);let i=e.createBiquadFilter();i.type="highpass",i.frequency.value=1800;let z=e.createGain();o(z,l,.001,.25,.06),v.connect(i),i.connect(z),z.connect(c),v.start(l)},burst(){if(!e)return;let l=e.currentTime,n=e.createBufferSource();n.buffer=a(2.4);let f=e.createBiquadFilter();f.type="bandpass",f.Q.value=.7,f.frequency.setValueAtTime(600,l),f.frequency.exponentialRampToValueAtTime(5e3,l+1.6);let v=e.createGain();v.gain.setValueAtTime(1e-4,l),v.gain.exponentialRampToValueAtTime(.5,l+.5),v.gain.setValueAtTime(.5,l+1.7),v.gain.exponentialRampToValueAtTime(1e-4,l+2.3),n.connect(f),f.connect(v),v.connect(c),n.start(l);let i=e.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(110,l),i.frequency.exponentialRampToValueAtTime(18,l+2);let z=e.createGain();o(z,l,.05,.18,2),i.connect(z),z.connect(c),i.start(l),i.stop(l+2.2)},beat(l){if(!e||l<.01)return;let n=e.currentTime;[[0,1],[.24,.62]].forEach(([f,v])=>{let i=n+f,z=e.createBiquadFilter();z.type="bandpass",z.frequency.value=340,z.Q.value=1.4;let g=e.createGain();o(g,i,.012,.22*v*l,.16),[100,150.4,200.9].forEach((u,R)=>{let w=e.createOscillator();w.type=R===1?"square":"sawtooth",w.frequency.setValueAtTime(u*1.04,i),w.frequency.exponentialRampToValueAtTime(u,i+.12),w.connect(z),w.start(i),w.stop(i+.32)});let p=e.createBufferSource();p.buffer=a(.18);let y=e.createBiquadFilter();y.type="highpass",y.frequency.value=2600;let h=e.createGain();o(h,i,.004,.05*v*l,.1),p.connect(y),y.connect(h),h.connect(c),p.start(i),z.connect(g),g.connect(c)})},buzz(l){if(e){if(!A){A=e.createGain(),A.gain.value=0;let n=e.createBiquadFilter();n.type="bandpass",n.frequency.value=260,n.Q.value=2.2,[100,100.7,300.2].forEach((f,v)=>{let i=e.createOscillator();i.type=v===2?"square":"sawtooth",i.frequency.value=f,i.connect(n),i.start()}),n.connect(A),A.connect(c)}A.gain.setTargetAtTime(l*.03,e.currentTime,.2)}},click(l,n){if(!e||l<.01)return;let f=e.currentTime,v=e.createBufferSource();v.buffer=a(.05);let i=e.createBiquadFilter();i.type="bandpass",i.frequency.value=n?1900:3100,i.Q.value=2.5;let z=e.createGain();o(z,f,8e-4,.55*l,.035),v.connect(i),i.connect(z),z.connect(c),v.start(f);let g=e.createOscillator();g.type="triangle",g.frequency.setValueAtTime(n?210:340,f),g.frequency.exponentialRampToValueAtTime(n?90:160,f+.06);let p=e.createGain();o(p,f,.001,(n?.32:.2)*l,.08),g.connect(p),p.connect(c),g.start(f),g.stop(f+.15);let y=e.createBufferSource();y.buffer=a(.03);let h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=4200,h.Q.value=3;let u=e.createGain();o(u,f+.055,8e-4,.22*l,.025),y.connect(h),h.connect(u),u.connect(c),y.start(f+.055)},stop(){if(A&&(A.gain.value=0),A=null,x&&(x.gain.value=0),m&&(m.gain.value=0),c)try{c.disconnect()}catch(l){}e=null,x=m=c=null}}}var jo=`
.red-sub {
	position: fixed; left: 50%; bottom: 9vh; transform: translateX(-50%); z-index: 406;
	width: min(92vw, 900px); text-align: center; pointer-events: none;
	font: italic 400 clamp(19px, 2.5vw, 32px)/1.35 'Cormorant Garamond', Georgia, serif;
	color: #f1e7dc; letter-spacing: .035em; text-shadow: 0 2px 18px rgba(0,0,0,.9), 0 0 2px rgba(0,0,0,.8);
	opacity: 0;
}`;eo.exports=function(x){x=x||{};let m=Fo(),c=m.length-1,A=m.map((q,F)=>q.pass?-1:F).filter(q=>q>=0),a=(q,F)=>{if(F>=0){for(let W of A)if(W>=q-.06)return W;return A[A.length-1]}for(let W=A.length-1;W>=0;W--)if(A[W]<=q+.06)return A[W];return A[0]},r=(q,F)=>{if(F>0){for(let W of A)if(W>q+.01)return W;return A[A.length-1]}for(let W=A.length-1;W>=0;W--)if(A[W]<q-.01)return A[W];return A[0]},o=null,l=null,n=0,f=0,v=0,i=null,z=null,g=0,p=Ho(),y={phase:0,period:1.2,beat:0},h=0;Le.onClick(q=>p.click(h,q));let u=document.createElement("div");u.className="red-sub",u.textContent=Bo;let R=document.createElement("style");R.textContent=jo,document.head.appendChild(R),document.body.appendChild(u);let w=0,s=0,d=null,L=-10,k=0,P=null,E=1,S=-10,G=[],B=(q,F,W)=>{window.addEventListener(q,F,W),G.push([q,F,W])},re=q=>{let F=Math.sign(q);if(!(!F||i!==null)){if(F>0&&s>=c-.001&&w>c-.08||F<0&&f>0){let W=f<1?2.2:.75;f=Math.max(0,Math.min(2.4,f+Math.max(-.2,Math.min(.13,q))*W)),L=k,S=k,E=F;return}F!==E&&k-S<.25&&Math.abs(q)<.02||(F!==E&&(E=F),S=k,s=Math.max(0,Math.min(c,s+q)),L=k)}},Z=q=>{if(i===null){if(q>0&&s>=c-.001||q<0&&f>0){re(q>0?.12:-.12);return}E=q>0?1:-1,s=r(s,q),L=k-10}};B("pointerdown",()=>p.start()),B("keydown",()=>p.start()),B("touchend",()=>p.start()),B("wheel",q=>{if(q.target.closest&&q.target.closest(".st-ui"))return;q.preventDefault();let F=q.deltaMode===1?q.deltaY*16:q.deltaMode===2?q.deltaY*window.innerHeight:q.deltaY;re(Math.max(-.6,Math.min(.6,F/700)))},{passive:!1});let K=null;B("pointerdown",q=>{q.target.closest&&q.target.closest("button, a, .st-ui")||(K={lx:q.clientX,ly:q.clientY,moved:0,t:performance.now()})}),B("pointermove",q=>{if(!K)return;let F=q.clientX-K.lx,W=q.clientY-K.ly;K.lx=q.clientX,K.ly=q.clientY;let be=Math.abs(W)>=Math.abs(F)?-W:-F;K.moved+=Math.abs(be),K.moved>6&&re(be/(window.innerHeight*.55))}),B("pointerup",()=>{let q=K;K=null,q&&q.moved<8&&performance.now()-q.t<450&&Z(1)}),B("keydown",q=>{q.key==="ArrowDown"||q.key==="ArrowRight"||q.key==="PageDown"||q.key===" "?Z(1):(q.key==="ArrowUp"||q.key==="ArrowLeft"||q.key==="PageUp")&&Z(-1)});function se(q){k=q,P===null&&(P=q);let F=d===null?0:Math.min(.1,q-d);d=q,typeof window!="undefined"&&window.__redShot!==void 0&&/tourdebug/.test(location.search)&&(w=s=window.__redShot,o=null),typeof window!="undefined"&&window.__press!==void 0&&/tourdebug/.test(location.search)&&(f=n=window.__press),k-L>.35&&(s+=(a(s,E)-s)*(1-Math.exp(-F*2))),w+=(s-w)*(1-Math.exp(-F*1.7)),Math.abs(s-w)<1e-4&&(w=s);let W=window.innerWidth<window.innerHeight,be=m.map(ne=>W&&ne.p?Object.assign({},ne,ne.p):ne),h0=Math.min(c-1,Math.floor(w)),z0=w-h0,de=z0*z0*(3-2*z0),X=Qt(be.map(ne=>ne.eye),w),ye=Qt(be.map(ne=>ne.at),w);(!o||F===0||F>.09)&&(o=X.slice(),l=ye.slice());let Ze=1-Math.exp(-F*5);for(let ne=0;ne<3;ne++)o[ne]+=(X[ne]-o[ne])*Ze,l[ne]+=(ye[ne]-l[ne])*Ze;X=o.slice(),ye=l.slice();let L0=be[h0],p0=be[Math.min(c,h0+1)],Q0=yt(L0.fov,p0.fov,de),ie=yt(L0.dof,p0.dof,de);k-L>2.2&&i===null&&(f=Math.max(0,f-F*.14));let v0=n<1?.9:.55;n+=Math.max(-v0*F*2,Math.min(v0*F,f-n)),n>2.08&&i===null&&(i=q,p.burst());let s0=_0(n),je=_0(n-1),d0=Math.min(10,Math.max(0,(n-1)*10.5));if(Math.floor(d0)>v&&(p.tick(),navigator.vibrate))try{navigator.vibrate(28)}catch(ne){}v=Math.floor(d0);let we=i===null?0:_0((q-i)/2.3);typeof window!="undefined"&&window.__xk!==void 0&&/tourdebug/.test(location.search)&&(we=window.__xk);let M0=Ye(s0)*.28+je*.06;X=[X[0]+bt*M0,X[1]-M0*.08,X[2]+wt*M0];let u0=s0*.004+je*.008+we*.05;X[0]+=Math.sin(q*37)*u0,X[1]+=Math.sin(q*41+1)*u0;let k0=w>P0-.35?1:0;k0&&!g&&(g=1,z=q,p.clunk()),!k0&&g&&w<P0-.8&&(g=0);let T0=0;if(g){let ne=q-z;T0=ne<.75?[0,1,.15,.9,.3,1][Math.min(5,Math.floor(ne/.125))]:1}let J0=Math.sin(q*13)*Math.sin(q*5.3);T0*=1-(s0*.25+je*.3)*(J0>.6?1:0)-we*(Math.sin(q*60)>0?.8:0),Le.setSpot(Math.max(0,T0));{let ne=X,ce=Math.hypot(ne[0]-Z0[0],ne[2]-Z0[2]),Ue=yt(.68,1.35,_0((ce-1.5)/12));y.phase+=F/y.period,y.period=Ue;let Ve=1e9,g0=Le.ROOM.CABLE.path;for(let Pe=0;Pe<g0.length;Pe+=6){let r0=Math.hypot(ne[0]-g0[Pe][0],ne[1]-g0[Pe][1],ne[2]-g0[Pe][2]);r0<Ve&&(Ve=r0)}let Re=1/(1+Ve*Ve*.18);Math.floor(y.phase)>y.beat&&(y.beat=Math.floor(y.phase),p.beat(Re*(1-we))),p.buzz((.25+Re)*(1-we)),Le.setPulse(y.phase,y.period);let e0=Math.hypot(ne[0]-He,ne[1]-Jt,ne[2]-l0);h=(1-we)/(1+e0*e0*.05)}Le.setWarn({s:Ye((n-.12)/.45),n:d0,glitch:Ye(we*1.6),freeze:n>.15}),u.style.opacity=String(Ye((n-.35)/.4)*(1-Ye((we-.1)/.3))*(.88+.12*Math.sin(q*2))),p.set(Ye(s0)*(1-we)+je*.5,Ye((n-.12)/.45)*(1-we*.5)),i!==null&&we>=1&&(x.onExpel?x.onExpel():me(),i=null);let We=typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:q,m0=Math.hypot(ye[0]-X[0],ye[1]-X[1],ye[2]-X[2]),Qe=.01+.03*Math.min(1,m0/6);X=[X[0]+Math.sin(We*.31)*Qe,X[1]+Math.sin(We*.43+1)*Qe*.6,X[2]+Math.cos(We*.27)*Qe],ye=[ye[0]+Math.sin(We*.21+2)*Qe*.8,ye[1]+Math.sin(We*.37)*Qe*.5,ye[2]];let O0=Zt(X),Je=Zt(ye),et=Math.max(1-_0((q-P-.3)/1.8),Ye((we-.82)/.18));return Le.setViewer(O0),{eye:O0,target:Je,fov:Q0,roll:Math.sin(We*.17)*.004,moving:!0,look:{letterbox:.45,focus:m0,aperture:ie,vignette:.3+s0*.25,exposure:1.45,shafts:1,fade:et,fadeColor:[0,0,0],glitch:Ye((we-.25)/.6)*.9+je*.06}}}function me(){n=f=0,v=0,i=null,g=0,w=s=0,o=null,P=null,Le.setWarn({s:0,n:0,glitch:0,freeze:!1}),Le.setSpot(0)}function oe(){for(let[q,F,W]of G)window.removeEventListener(q,F,W);G.length=0,p.stop(),u.remove(),R.remove(),Le.setWarn({s:0,n:0,glitch:0,freeze:!1}),Le.setSpot(0),Le.setViewer(null),Le.onClick(null)}return/tourdebug/.test(location.search)&&(window.__redTourInfo={END:c,REVEAL:P0,STOPS:A}),{update:se,tap:()=>Z(1),dispose:oe,placeFlower(){},startSound:()=>p.start(),get scroll(){return w},END:c,REVEAL:P0}}});window.__redRoom={studio:mt(),tour:to()};})();

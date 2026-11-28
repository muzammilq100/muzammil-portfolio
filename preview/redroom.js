"use strict";(()=>{var je=(e,u)=>()=>(u||e((u={exports:{}}).exports,u),u.exports);var It=je((Co,Et)=>{"use strict";var Z0=[-90,0,0],nt=16,st=27.5,rt=11.6;Et.exports={O:Z0,W:nt,L:st,RIDGE:rt,BOX:[Z0[0]-.8,0,Z0[2]-11.5,Z0[0]+nt+.8,rt+.5,Z0[2]+st+.8],AIR_BOX:[Z0[0],0,Z0[2],Z0[0]+nt,rt,Z0[2]+st]}});var We=je((Vo,$t)=>{"use strict";var At=typeof navigator!="undefined"&&navigator.userAgent||"",po=typeof window!="undefined"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&!window.matchMedia("(any-pointer: fine)").matches,F0=/Android|iPhone|iPad|iPod|Mobile|Silk|Kindle|webOS|BlackBerry|Opera Mini|IEMobile/i.test(At)||/Macintosh/.test(At)&&typeof navigator!="undefined"&&navigator.maxTouchPoints>1||po,Fe=typeof window!="undefined"&&window.devicePixelRatio||1,ho=typeof location!="undefined"&&/[?&](studio|redroom)\b/.test(location.search),vo=(()=>{try{return((/[?&]exp=([\w,]+)/.exec(location.search)||[])[1]||"").split(",")}catch(e){return[]}})(),W={isPhone:F0,exp:e=>vo.indexOf(e)>=0,pixelRatio:ho?F0?Math.min(Fe,1.25):Math.min(Fe,1.5):F0?Math.min(Fe,1.5):Math.min(Fe,2),reflection:!F0,gardenDetail:F0?0:1,leafShare:F0?.65:1,motion:!F0,post:F0?1:2,level:F0?1:0};W.scale=1;var uo=F0?.55:.6,Se=0,Be=0,Re=0,qe=0,ye=1,ke=0,He=48,xe=null,it=0;function mo(e){xe={fps:e,scale:W.scale},W.scale>.86?W.scale=.85:W.reflection?W.stepDown():W.scale>.71?W.scale=.7:W.stepDown()||(W.scale=Math.max(uo,W.scale-.1))}var Pt=!0;try{/[?&]noadapt\b/.test(location.search)&&(Pt=!1)}catch(e){}W.frame=e=>{if(!Pt)return;if(!(e>0)||e>1){Se=0,Be=0;return}if(Se+=e,Be++,Se<.75)return;let u=Be/Se;if(Se=0,Be=0,ke>0&&(ke-=.75,ke<=0&&(ye=1)),xe){if(u<xe.fps*1.08&&xe.scale>W.scale){if(++it>=2){W.scale=1,ye=1,ke=0,He=Math.min(He,u*.85),it=0,Re=0,xe=null;return}}else it=0;xe=null}if(u<He){if(qe=0,++Re>=2){if(Re=0,W.scale>.61&&W.climbed){ye=W.scale-.05,ke=40,W.scale=ye,W.climbed=!1;return}mo(u)}}else u>Math.max(He*1.15,55)?(Re=0,++qe>=6&&W.scale<ye-.001?(W.scale=Math.min(ye,W.scale+.05),W.climbed=!0,qe=0):qe>=6&&(W.climbed=!1)):(Re=0,qe=0)};W.stepDown=()=>{if(W.reflection)W.reflection=!1;else if(W.gardenDetail>0||W.motion)W.gardenDetail=0,W.motion=!1,W.leafShare=Math.min(W.leafShare,.65);else if(W.post>0)W.post--;else return!1;return W.level++,!0};$t.exports=W});var ht=je((Go,pt)=>{"use strict";var{O:I,W:R,L:H}=It(),d=e=>(+e).toFixed(4),c0=10.5,Ue=.7,Ot=3,G={hw:1.25,sill:1.35,spring:6.9,n:4,step:6.35};G.z0=H/2-G.step*(G.n-1)/2;G.apex=G.spring+G.hw*Math.sqrt(3);var Xe=e=>G.z0+G.step*e;G.leftFrom=2;var U=(()=>{let u=G.z0,w={k:1.42,z:u,top:.543*1.42,half:.601*1.42,depth:.706*1.42};return w.x=R-.12-w.depth/2,w.candles=[[R-.4,u-.52,1],[R-.3,u-.3,.62],[R-.36,u+.42,.38],[R-.86,u-.06,.55],[R-.24,u+.66,.85],[R-.8,u+.42,.3]],w.vase={x:R-.55,z:u+.06,h:.24},w.flames=w.candles.map(([y,q,a])=>[y,w.top+.156+.144*a+.018,q]),w.laid=[[R-.66,u-.22,Math.PI/2+.5],[R-.62,u-.36,Math.PI/2+.15],[R-.7,u+.26,Math.PI/2-.6]],w.stack=[R-.88,u-.5],w.occ=[[R-.55,w.top+.46,u+.06,.15],[R-.55,w.top+.26,u+.06,.06],[R-.55,w.top+.11,u+.06,.08],...w.laid.map(([y,q,a])=>[y-Math.sin(a)*.15,w.top+.05,q-Math.cos(a)*.15,.065])],w})(),go="LEAVEHERBE",Ne={k:0},N0={s:0,n:0,glitch:0,freeze:!1,frozenAt:null},Ye={phase:0,period:1.2},lt={click:null},jt={eye:null},yo=()=>{let e=jt.eye;return e?(e[0]-I[0]-l0.x)*Math.sin(l0.yaw)+(e[2]-I[2]-l0.z)*Math.cos(l0.yaw)>-.25:!1};G.lowSill=U.top+.06;var l0={x:R/2,z:18.6,k:1.3};l0.yaw=Math.atan2(R/2-l0.x,21.2-l0.z);{let e=Math.sin(l0.yaw),u=Math.cos(l0.yaw),w=(y,q,a)=>[l0.x+e*y,q,l0.z+u*y,a];l0.occ=[w(0,1.17,.13),w(-.02,.86,.22),w(.1,.42,.36),w(-.3,.62,.17)]}var i0=(()=>{let e=Math.sin(l0.yaw),u=Math.cos(l0.yaw),w=[l0.x-e*1.4,8.4,l0.z-u*1.4],y=[l0.x+e*.25,.55,l0.z+u*.25],q=[y[0]-w[0],y[1]-w[1],y[2]-w[2]],a=Math.hypot(...q);return{pos:w,axis:q.map(r=>r/a),inner:.115,outer:.17,reach:a}})(),Q=[];for(let e=0;e<=G.n;e++)Q.push(G.z0+G.step*(e-.5));var M0={hw:.75,h:2.6,depth:.7},C0={hw:1.8,h:3.6,z:-11,sign:[R/2,M0.h+.32,-M0.depth-.05],open:2.2},J={z:21.2,G:2.4,models:{sony:{file:"res/redroom/tv_sony.bin",tex:3,w:.36,h:.341,d:.455,dark:.55},crt:{file:"res/redroom/tv_crt.bin",tex:3,w:.47,h:.454,d:.389,dark:.9},old:{file:"res/redroom/tv_old.bin",tex:1,w:.62,h:.418,d:.416,dark:.75}}};J.stack=[["old",0,-1.41,2,.04],["crt",0,.05,-1,-.02],["sony",0,1.24,-2,.06],["crt",1,-1.16,3,.02],["sony",1,-.03,-1,.04],["crt",1,1.14,-3,.06],["sony",2,-.73,2,.06],["old",2,.66,-2,.03],["crt",0,-2.78,3,.08],["sony",1,-2.68,4,.1],["old",0,2.5,-3,.08],["sony",1,2.32,-4,.1]];var xo={sony:[0,.194],crt:[0,.27],old:[.0625,.2145]};(()=>{let e=[];for(let u of J.stack){let w=J.models[u[0]],y=u[1],q=u[2],a=w.w*J.G,r=0;for(let n of e)n.row>=y||Math.abs(n.dx-q)<(n.w+a)/2*.92&&(r=Math.max(r,n.top));e.push({dx:q,row:y,w:a,top:r+w.h*J.G*.99}),u.base=r;let o=xo[u[0]],i=u[3]*Math.PI/180;u.screen=[R/2+q+o[0]*J.G,r+o[1]*J.G,J.z+u[4]],u.facing=[-Math.sin(i),0,-Math.cos(i)],u.size=w.w*J.G}})();J.letters=(()=>{let e=[1,0].map(w=>J.stack.map((y,q)=>[q,y]).filter(([,y])=>y[1]===w).sort((y,q)=>q[1].screen[0]-y[1].screen[0]).map(([y])=>y)),u=J.stack.map(()=>-1);return[...e[0],...e[1]].forEach((w,y)=>{u[w]=y}),u})();U.letters=[{x:U.x-.39,z:U.z+.2,a:.12,w:.2,h:.292,y:.0012},{x:U.x-.37,z:U.z+.5,a:-.22,w:.2,h:.292,y:.0024}];var Ke={x0:.3,x1:.56,z0:12.38,z1:12.7,h:.055},O=(()=>{let e={top:.92,depth:.78};return e.a=[Q[0]+.7,Q[1]-.55],e.b=[Q[1]+.55,Q[2]-.7],e.basin={x0:.08,x1:e.depth-.07,z0:e.a[0]+.1,z1:e.a[1]-.1,floor:e.top-.1},e.TX=.44,e.TZ=.54,e.TH=.075,e.TXc=(e.basin.x0+e.basin.x1)/2,e.trays=[e.a[0]+1.1,e.a[0]+1.72,e.a[0]+2.34],e.liquid=e.basin.floor+.05,e.bulb=[e.TXc+.02,1.39,e.trays[0]+.05],e.tube={x:.07,y:3.05,z0:e.b[0]+.2,z1:e.b[1]-.2},e.cam={x:.43,y:e.basin.floor,z:e.trays[0]-e.TZ/2-.3},e.hung=[],e.ash={x:.6,z:11.62},e.lines=[[.32,2.74,Q[0],Q[1],.12],[.74,2.52,Q[0],Q[1],.17],[1.1,2.62,Q[0],Q[1],.2],[.3,2.76,Q[1],Q[2],.15],[.68,2.46,Q[1],Q[2],.19],[1.06,2.66,Q[1],Q[2],.22],[.5,1.98,Q[1],Q[2],.12],[.45,2.98,Q[0],Q[1],.1,1.45],[1.45,2.4,Q[0],Q[1],.2],[.95,2.26,Q[0],Q[1],.13,.4],[1.4,3,Q[1],Q[2],.14,.45],[1.5,2.36,Q[1],Q[2],.22],[.9,2.2,Q[1],Q[2],.15,1.35]],e})(),C=(()=>{let e={x:R/2-.006,z:14.92,tableK:1.25,pitch:.1};e.table=.761*e.tableK,e.feed=[.0254,.7696,.3364],e.takeup=[.0252,.2484,.337],e.lensL=[.006,.456,.15];let u=Math.cos(e.pitch),w=Math.sin(e.pitch),y=e.lensL;return e.lens=[e.x+y[0],e.table+y[1]*u+y[2]*w,e.z-y[1]*w+y[2]*u],e.img={x:R/2,y:6,w:6.4},e.img.h=e.img.w*.75,e})(),v0={x0:4.2,x1:11.8,y:9,z:H-.16},E0={r:.045};(()=>{let e=E0.r,u=O.depth,w=O.b[1]-.22;E0.socket=[u,.3,w],E0.ctrl=[[u+.1,.3,w],[u+.2,.295,w],[u+.3,.22,w+.02],[u+.42,e,w+.1],[u+.8,e,w+.3],[1.8,e,w+.45],[3.4,e,w+.1],[5.2,e,w-.55],[7.2,e,w-.95],[9.4,e,w-.9],[11.4,e,w-.45],[13.2,e,w+.1],[R-1.15,e,w+.55],[R-.85,e,w+1.05],[R-.85,e,15.2],[R-1.1,e,16.3],[R-1.7,e,17.2],[R-2.5,e,17.9],[12.9,e,18.5],[11.5,e,18.9],[10.6,e,19.5],[10.5,e,20.3],[11.2,e,20.5],[10.9,e,19.95],[10,e*2.2,20.1],[9.3,e,20.75],[9.5,e,21.9],[8.6,e,22.25],[8.1,.22,21.95]];let y=E0.ctrl,q=[];for(let o=0;o<y.length-1;o++){let i=y[Math.max(0,o-1)],n=y[o],c=y[o+1],l=y[Math.min(y.length-1,o+2)],s=Math.max(2,Math.ceil(Math.hypot(c[0]-n[0],c[1]-n[1],c[2]-n[2])/.06));for(let _=0;_<s;_++){let p=_/s,m=p*p,v=m*p;q.push([0,1,2].map(f=>.5*(2*n[f]+(-i[f]+c[f])*p+(2*i[f]-5*n[f]+4*c[f]-l[f])*m+(-i[f]+3*n[f]-3*c[f]+l[f])*v)))}}q.push(y[y.length-1].slice());for(let o of q)o[1]<e&&o[2]>-1.4&&(o[1]=e);E0.path=q;let a=q.findIndex(o=>o[1]<=e*1.01),r=q.findIndex((o,i)=>i>a&&o[0]>R-1.3);E0.run=[a,r]})();var ee={spots:[],w:.36,h:.435,n:55,lines:[{z:H-1.7,y:6.5,sag:1},{z:H-2.6,y:5.3,sag:.8}]},I0=(()=>{let e=[-.62,.75,-.16],u=Math.hypot(...e);return e.map(w=>w/u)})(),ce=(()=>{let e=R/2;return(e*e+Ot*Ot)/(2*e)})(),ie=e=>{let u=e<=R/2?e:R-e;return c0+Math.sqrt(Math.max(0,ce*ce-(u-ce)*(u-ce)))},L={FLOOR:0,WALL:1,REVEAL:2,GLASS:3,VAULT:4,TRIM:5,VOID:6,TUBE:7,CABLE:8,TILE:9,STEEL:10,PEG:11,CONC:12,CFLOOR:13,DOOR:14,MAINCABLE:15,PAPER:16,ASH:17};function Ft(){let e=[],u=[],w=[],y=[],q=[],a={pos:e,nrm:u,kind:w,uv:y,idx:q,v(r,o,i,n){return e.push(r[0]+I[0],r[1]+I[1],r[2]+I[2]),u.push(o[0],o[1],o[2]),w.push(i),y.push(n?n[0]:0,n?n[1]:0),e.length/3-1},quad(r,o,i,n,c,l,s,_,p,m){let v=a.v(r,c,l,s),f=a.v(o,c,l,_),h=a.v(i,c,l,p),T=a.v(n,c,l,m);q.push(v,f,h,v,h,T)},box(r,o,i,n,c,l,s){a.quad([r,o,l],[n,o,l],[n,c,l],[r,c,l],[0,0,1],s),a.quad([n,o,i],[r,o,i],[r,c,i],[n,c,i],[0,0,-1],s),a.quad([n,o,l],[n,o,i],[n,c,i],[n,c,l],[1,0,0],s),a.quad([r,o,i],[r,o,l],[r,c,l],[r,c,i],[-1,0,0],s),a.quad([r,c,l],[n,c,l],[n,c,i],[r,c,i],[0,1,0],s),a.quad([r,o,i],[n,o,i],[n,o,l],[r,o,l],[0,-1,0],s)},cyl(r,o,i,n,c,l,s){s=s||18;for(let _=0;_<s;_++){let p=_/s*Math.PI*2,m=(_+1)/s*Math.PI*2,v=[Math.sin(p),0,Math.cos(p)],f=[Math.sin(m),0,Math.cos(m)],h=(k,$)=>[r+k[0]*i,$,o+k[2]*i],T=a.v(h(v,n),v,l),g=a.v(h(f,n),f,l),x=a.v(h(f,c),f,l),N=a.v(h(v,c),v,l);q.push(T,g,x,T,x,N)}}};return a}function m0(e,u,w,y,q,a){let r=null,o=null,i=[];for(let n=0;n<u.length;n++){let c=u[Math.max(0,n-1)],l=u[Math.min(u.length-1,n+1)],s=[l[0]-c[0],l[1]-c[1],l[2]-c[2]],_=Math.hypot(...s)||1;s=s.map(h=>h/_),o||(o=Math.abs(s[1])<.9?[0,1,0]:[1,0,0]);let p=o[0]*s[0]+o[1]*s[1]+o[2]*s[2];o=[o[0]-s[0]*p,o[1]-s[1]*p,o[2]-s[2]*p];let m=Math.hypot(...o)||1;o=o.map(h=>h/m);let v=[s[1]*o[2]-s[2]*o[1],s[2]*o[0]-s[0]*o[2],s[0]*o[1]-s[1]*o[0]],f=[];for(let h=0;h<y;h++){let T=h/y*Math.PI*2,g=Math.cos(T),x=Math.sin(T),N=[o[0]*g+v[0]*x,o[1]*g+v[1]*x,o[2]*g+v[2]*x];f.push(e.v([u[n][0]+N[0]*w,u[n][1]+N[1]*w,u[n][2]+N[2]*w],N,q,[a?a[n]:n,h]))}if(r)for(let h=0;h<y;h++){let T=(h+1)%y;e.idx.push(r[h],r[T],f[T],r[h],f[T],f[h])}r=f,i.push(f)}}var ft=(e,u)=>[e[0]+((e[5]===void 0?e[0]:e[5])-e[0])*u,e[1]-e[4]*4*u*(1-u),e[2]+.35+(e[3]-e[2]-.7)*u];function Dt(e,u,w){let y=[[-e,u],[-e,w]],q=2*e,a=14;for(let r=1;r<=a;r++){let o=Math.PI-r/a*(Math.PI/3);y.push([e+q*Math.cos(o),w+q*Math.sin(o)])}for(let r=1;r<=a;r++){let o=Math.PI/3-r/a*(Math.PI/3);y.push([-e+q*Math.cos(o),w+q*Math.sin(o)])}return y.push([e,u]),y}function Ct(e,u,w,y,q,a,r){let o=q?u.length:u.length-1;for(let i=0;i<o;i++){let n=u[i],c=u[(i+1)%u.length],l=c[0]-n[0],_=-(c[1]-n[1]),p=l,m=Math.hypot(_,p)||1;_/=m,p/=m;let v=(n[0]+c[0])/2-r[0],f=(n[1]+c[1])/2-r[1];_*v+p*f>0&&(_=-_,p=-p);let h=y(_,p,0,!0);e.quad(y(n[0],n[1],0),y(c[0],c[1],0),y(c[0],c[1],w),y(n[0],n[1],w),h,a,[n[0],n[1]],[c[0],c[1]],[c[0],c[1]],[n[0],n[1]])}}function wo(){let e=Ft();e.quad([0,0,0],[0,0,H],[R,0,H],[R,0,0],[0,1,0],L.FLOOR),e.quad([0,0,H],[0,0,0],[0,c0,0],[0,c0,H],[1,0,0],L.WALL,[H,0],[0,0],[0,c0],[H,c0]),e.quad([R,0,0],[R,0,H],[R,c0,H],[R,c0,0],[-1,0,0],L.WALL,[0,0],[H,0],[H,c0],[0,c0]);let u=24;for(let a of[0,1]){let r=a?H:0,o=[0,0,a?-1:1];for(let i=0;i<u;i++){let n=i/u*R,c=(i+1)/u*R,l=[n,0,r],s=[c,0,r],_=[c,ie(c),r],p=[n,ie(n),r];a?e.quad(s,l,p,_,o,L.WALL,[c,0],[n,0],[n,p[1]],[c,_[1]]):e.quad(l,s,_,p,o,L.WALL,[n,0],[c,0],[c,_[1]],[n,p[1]])}}let w=40;for(let a=0;a<w;a++){let r=a/w*R,o=(a+1)/w*R,i=ie(r),n=ie(o),c=(f,h)=>{let T=f<=R/2?f:R-f,g=(ce-T)/ce,x=(c0-h)/ce;return f>R/2&&(g=-g),[g,x,0]},l=c(r,i),s=c(o,n),_=e.v([r,i,0],l,L.VAULT,[r,0]),p=e.v([o,n,0],s,L.VAULT,[o,0]),m=e.v([o,n,H],s,L.VAULT,[o,H]),v=e.v([r,i,H],l,L.VAULT,[r,H]);e.idx.push(_,p,m,_,m,v)}let y=Dt(G.hw,G.sill,G.spring),q=Dt(G.hw,G.lowSill,G.spring);for(let a=0;a<G.n;a++){let r=a===0?G.lowSill:G.sill,o=Xe(a),i=a>=G.leftFrom;i&&Ct(e,y,Ue,(p,m,v,f)=>f?[0,m,p]:[-v,m,o+p],!0,L.REVEAL,[0,(G.sill+G.apex)/2]),Ct(e,a===0?q:y,Ue,(p,m,v,f)=>f?[0,m,p]:[R+v,m,o+p],!0,L.REVEAL,[0,(r+G.apex)/2]);let n=Ue*.55,c=G.sill-.02,l=G.apex+.02,s=G.hw+.02;i&&e.quad([-n,c,o+s],[-n,c,o-s],[-n,l,o-s],[-n,l,o+s],[1,0,0],L.GLASS,[s,c],[-s,c],[-s,l],[s,l]);let _=r-.02;e.quad([R+n,_,o-s],[R+n,_,o+s],[R+n,l,o+s],[R+n,l,o-s],[-1,0,0],L.GLASS,[-s,_],[s,_],[s,l],[-s,l]),i&&e.box(-.02,G.sill-.12,o-G.hw-.18,.12,G.sill,o+G.hw+.18,L.TRIM),e.box(R-.12,r-(a===0?.05:.12),o-G.hw-.18,R+.02,r,o+G.hw+.18,L.TRIM)}{let a=R/2-M0.hw,r=R/2+M0.hw,o=M0.h,i=M0.depth;e.quad([a,0,-i],[a,0,0],[a,o,0],[a,o,-i],[1,0,0],L.REVEAL),e.quad([r,0,0],[r,0,-i],[r,o,-i],[r,o,0],[-1,0,0],L.REVEAL),e.quad([a,o,0],[r,o,0],[r,o,-i],[a,o,-i],[0,-1,0],L.REVEAL),e.quad([a,.001,-i],[r,.001,-i],[r,.001,0],[a,.001,0],[0,1,0],L.CFLOOR);let n=R/2-C0.hw,c=R/2+C0.hw,l=C0.h,s=C0.z;e.quad([n,0,s],[n,0,-i],[c,0,-i],[c,0,s],[0,1,0],L.CFLOOR),e.quad([n,0,-i],[n,0,s],[n,l,s],[n,l,-i],[1,0,0],L.CONC,[-i,0],[s,0],[s,l],[-i,l]),e.quad([c,0,s],[c,0,-i],[c,l,-i],[c,l,s],[-1,0,0],L.CONC,[s,0],[-i,0],[-i,l],[s,l]),e.quad([n,l,s],[n,l,-i],[c,l,-i],[c,l,s],[0,-1,0],L.CONC,[s,0],[-i,0],[-i,1],[s,1]),e.quad([c,0,s],[n,0,s],[n,l,s],[c,l,s],[0,0,1],L.CONC,[0,0],[1,0],[1,l],[0,l]);let _=-i;e.quad([n,0,_],[a,0,_],[a,l,_],[n,l,_],[0,0,-1],L.CONC,[n,0],[a,0],[a,l],[n,l]),e.quad([r,0,_],[c,0,_],[c,l,_],[r,l,_],[0,0,-1],L.CONC,[r,0],[c,0],[c,l],[r,l]),e.quad([a,o,_],[r,o,_],[r,l,_],[a,l,_],[0,0,-1],L.CONC,[a,o],[r,o],[r,l],[a,l]);let p=a,m=_-.01,v=C0.open,f=M0.hw*2-.04,h=.045,T=[Math.cos(v),0,-Math.sin(v)],g=[Math.sin(v),0,Math.cos(v)],x=(P,K,e0)=>[p+T[0]*P+g[0]*e0,K,m+T[2]*P+g[2]*e0],N=.012,k=o-.02;e.quad(x(0,N,h),x(f,N,h),x(f,k,h),x(0,k,h),g,L.DOOR),e.quad(x(f,N,0),x(0,N,0),x(0,k,0),x(f,k,0),g.map(P=>-P),L.DOOR),e.quad(x(f,N,h),x(f,N,0),x(f,k,0),x(f,k,h),T,L.DOOR),e.quad(x(0,k,h),x(f,k,h),x(f,k,0),x(0,k,0),[0,1,0],L.DOOR);let $=x(f-.09,1.02,h+.03);m0(e,[x(f-.09,1.02,h),$,[$[0]-T[0]*.12,$[1],$[2]-T[2]*.12]],.011,6,L.STEEL);let V=C0.sign;e.box(V[0]-.33,V[1]-.12,V[2]-.02,V[0]+.33,V[1]+.12,_,L.TRIM)}for(let a of Q){for(let n of[.2,R-.2])e.box(n-.42,0,a-.42,n+.42,.5,a+.42,L.TRIM),e.cyl(n,a,.27,.5,c0-.55,L.TRIM),e.cyl(n+(n<R/2?.2:-.2),a-.36,.1,.5,c0-.55,L.TRIM,10),e.cyl(n+(n<R/2?.2:-.2),a+.36,.1,.5,c0-.55,L.TRIM,10),e.box(n-.45,c0-.55,a-.5,n+.45,c0-.25,a+.5,L.TRIM);let r=40,o=.22,i=.22;for(let n=0;n<r;n++){let c=n/r*R,l=(n+1)/r*R,s=ie(c),_=ie(l),p=[R/2-c,-(s-c0+2),0],m=[R/2-l,-(_-c0+2),0],v=x=>{let N=Math.hypot(x[0],x[1])||1;return[x[0]/N,x[1]/N,0]},f=v(p),h=v(m),T=[c+f[0]*i,s+f[1]*i],g=[l+h[0]*i,_+h[1]*i];e.quad([T[0],T[1],a-o],[g[0],g[1],a-o],[g[0],g[1],a+o],[T[0],T[1],a+o],f,L.TRIM),e.quad([c,s,a-o],[l,_,a-o],[g[0],g[1],a-o],[T[0],T[1],a-o],[0,0,-1],L.TRIM),e.quad([l,_,a+o],[c,s,a+o],[T[0],T[1],a+o],[g[0],g[1],a+o],[0,0,1],L.TRIM)}}{let a=O,r=a.top,o=a.basin,i=(p,m,v)=>{if(e.box(0,0,p,a.depth-.06,.12,m,L.TRIM),e.quad([a.depth,.12,p],[a.depth,.12,m],[a.depth,r,m],[a.depth,r,p],[1,0,0],L.TILE,[p,.12],[m,.12],[m,r],[p,r]),e.quad([0,.12,p],[a.depth,.12,p],[a.depth,r,p],[0,r,p],[0,0,-1],L.TILE,[0,.12],[a.depth,.12],[a.depth,r],[0,r]),e.quad([a.depth,.12,m],[0,.12,m],[0,r,m],[a.depth,r,m],[0,0,1],L.TILE,[a.depth,.12],[0,.12],[0,r],[a.depth,r]),!v){e.quad([0,r,p],[0,r,m],[a.depth,r,m],[a.depth,r,p],[0,1,0],L.TILE,[0,p],[0,m],[a.depth,m],[a.depth,p]);return}let f=(h,T,g,x)=>e.quad([h,r,g],[h,r,x],[T,r,x],[T,r,g],[0,1,0],L.TILE,[h,g],[h,x],[T,x],[T,g]);f(0,o.x0,p,m),f(o.x1,a.depth,p,m),f(o.x0,o.x1,p,o.z0),f(o.x0,o.x1,o.z1,m),e.quad([o.x0,o.floor,o.z0],[o.x0,o.floor,o.z1],[o.x1,o.floor,o.z1],[o.x1,o.floor,o.z0],[0,1,0],L.TILE,[o.x0,o.z0],[o.x0,o.z1],[o.x1,o.z1],[o.x1,o.z0]),e.quad([o.x0,o.floor,o.z1],[o.x0,o.floor,o.z0],[o.x0,r,o.z0],[o.x0,r,o.z1],[1,0,0],L.TILE,[o.z1,o.floor],[o.z0,o.floor],[o.z0,r],[o.z1,r]),e.quad([o.x1,o.floor,o.z0],[o.x1,o.floor,o.z1],[o.x1,r,o.z1],[o.x1,r,o.z0],[-1,0,0],L.TILE,[o.z0,o.floor],[o.z1,o.floor],[o.z1,r],[o.z0,r]),e.quad([o.x0,o.floor,o.z0],[o.x1,o.floor,o.z0],[o.x1,r,o.z0],[o.x0,r,o.z0],[0,0,1],L.TILE,[o.x0,o.floor],[o.x1,o.floor],[o.x1,r],[o.x0,r]),e.quad([o.x1,o.floor,o.z1],[o.x0,o.floor,o.z1],[o.x0,r,o.z1],[o.x1,r,o.z1],[0,0,-1],L.TILE,[o.x1,o.floor],[o.x0,o.floor],[o.x0,r],[o.x1,r])};i(a.a[0],a.a[1],!0),i(a.b[0],a.b[1],!1);for(let[p,m]of[a.a,a.b])e.quad([.012,r,m],[.012,r,p],[.012,r+.62,p],[.012,r+.62,m],[1,0,0],L.TILE,[m,r],[p,r],[p,r+.62],[m,r+.62]);let n=p=>{let m=o.floor+.004,v=m+a.TH,f=a.TX/2,h=a.TZ/2,T=.02,g=a.TXc,x=[[g-f+T,p-h+T],[g+f-T,p-h+T],[g+f-T,p+h-T],[g-f+T,p+h-T]],N=[[g-f,p-h],[g+f,p-h],[g+f,p+h],[g-f,p+h]];e.quad([x[0][0],m,x[0][1]],[x[3][0],m,x[3][1]],[x[2][0],m,x[2][1]],[x[1][0],m,x[1][1]],[0,1,0],L.STEEL);for(let k=0;k<4;k++){let $=(k+1)%4,V=[x[k][0],m,x[k][1]],P=[x[$][0],m,x[$][1]],K=[N[$][0],v,N[$][1]],e0=[N[k][0],v,N[k][1]],X=(x[k][0]+x[$][0])/2-g,p0=(x[k][1]+x[$][1])/2-p,s0=Math.hypot(X,p0)||1;e.quad(V,P,K,e0,[-X/s0*.95,.3,-p0/s0*.95],L.STEEL),e.quad(P,V,[e0[0],m+.001,e0[2]],[K[0],m+.001,K[2]],[X/s0,0,p0/s0],L.STEEL)}m0(e,[...N,N[0]].map(k=>[k[0],v+.004,k[1]]),.005,5,L.STEEL)};for(let p of a.trays)n(p);let c=(p,m,v,f,h,T)=>{for(let g of[-.012,.012])m0(e,[[p,h,m+g],[(p+v)/2,(h+T)/2+.006,(m+f)/2+g*.6],[v,T,f+g*.2]],.0045,5,L.PEG)};c(a.TXc+.05,a.trays[0]+.12,a.TXc+.27,a.trays[0]+.42,a.liquid-.005,a.top+.03),c(a.TXc-.1,a.trays[2]-.2,a.TXc+.24,a.trays[2]-.05,a.liquid+.002,a.liquid+a.TH*.9);let l=o.z1-.3;m0(e,[[0,1.32,l],[.18,1.32,l],[.27,1.3,l],[.32,1.22,l],[.33,1.12,l]],.016,8,L.STEEL),e.box(0,1.27,l-.05,.05,1.37,l+.05,L.STEEL);let s=O.bulb;m0(e,[[0,2.32,s[2]],[s[0]*.6,2.32,s[2]],[s[0],2.28,s[2]]],.012,6,L.TRIM),e.box(0,2.24,s[2]-.06,.03,2.4,s[2]+.06,L.TRIM),m0(e,[[s[0],2.28,s[2]],[s[0]+.004,1.9,s[2]+.003],[s[0],s[1]+.2,s[2]]],.004,5,L.CABLE);{let p=U.vase,m=U.top,v=[[.045,0],[.07,.03],[.08,.09],[.072,.15],[.05,.2],[.042,.225],[.05,p.h]],f=24;for(let h=0;h<v.length-1;h++){let[T,g]=v[h],[x,N]=v[h+1];for(let k=0;k<f;k++){let $=k/f*Math.PI*2,V=(k+1)/f*Math.PI*2,P=(X,p0,s0)=>[p.x+Math.cos(s0)*X,m+p0,p.z+Math.sin(s0)*X],K=X=>{let p0=x-T,s0=N-g,n0=Math.hypot(p0,s0);return[Math.cos(X)*s0/n0,-p0/n0,Math.sin(X)*s0/n0]},e0=($+V)/2;e.quad(P(T,g,$),P(T,g,V),P(x,N,V),P(x,N,$),K(e0),L.TRIM)}}}{let p=a.trays[1]+.12,m=a.TXc+a.TX/2-.03;m0(e,[[m-.12,a.liquid-.02,p-.02],[m+.02,a.liquid+.13,p+.02]],.0035,6,L.STEEL);let v=[m+.03,a.liquid+.145,p+.024],f=[.62,.66,.42];m0(e,[[v[0]-f[0]*.008,v[1]-f[1]*.008,v[2]-f[2]*.008],[v[0]+f[0]*.012,v[1]+f[1]*.012,v[2]+f[2]*.012]],.026,14,L.STEEL)}{let p=a.top,m=a.ash.x,v=a.ash.z,f=[m-.012,p+.027,v+.006],h=[m+.066,p+.041,v-.012],T=g=>[f[0]+(h[0]-f[0])*g,f[1]+(h[1]-f[1])*g,f[2]+(h[2]-f[2])*g];m0(e,[f,T(.03)],.0041,8,L.TUBE),m0(e,[T(.03),T(.2)],.0042,8,L.ASH),m0(e,[T(.2),T(.7)],.0043,8,L.PAPER),m0(e,[T(.7),h],.0044,8,L.PEG),a.smoke=f}{let p=a.top;m0(e,[[.62,p+.042,12.02],[.62,p+.042,12.045]],.042,16,L.PEG),m0(e,[[.62,p+.042,12.018],[.62,p+.042,12.047]],.024,12,L.TRIM);let m=Ke;e.box(m.x0,p,m.z0,m.x1,p+m.h,m.z1,L.TRIM),e.box(m.x0+.004,p+m.h,m.z0+.004,m.x1-.004,p+m.h+.001,m.z1-.004,L.VOID);let v=m.z1+.012;e.quad([m.x0-.01,p,v+.05],[m.x1+.01,p,v+.05],[m.x1+.01,p+.24,v],[m.x0-.01,p+.24,v],[0,.2,.98],L.TRIM)}let _=O.tube;m0(e,[[_.x+.02,_.y,_.z0],[_.x+.02,_.y,(_.z0+_.z1)/2],[_.x+.02,_.y,_.z1]],.035,10,L.TUBE),e.box(0,_.y-.05,_.z0-.06,.07,_.y+.05,_.z0-.01,L.TRIM),e.box(0,_.y-.05,_.z1+.01,.07,_.y+.05,_.z1+.06,L.TRIM);for(let p of O.lines){let m=[];for(let v=0;v<=24;v++){let f=v/24;m.push(ft(p,f))}m0(e,m,.0035,5,L.CABLE);for(let v of[m[0],m[24]])m0(e,[[0,v[1]+.05,v[2]],[v[0]*.5,v[1]+.02,v[2]],[v[0]+.02,v[1],v[2]]],.007,5,L.TRIM)}}J.stack.forEach((a,r)=>{let o=J.models[a[0]],i=J.G,n=R/2+a[2],c=J.z+a[4]+o.d*i*.85,l=a.base+.12*i,s=R/2+(r%3-1)*.5,_=J.z+2.3+r%4*.12;m0(e,[[n,l,c-.05],[n+.05,l-.02,c+.15],[n+.1,Math.max(.02,l*.4),c+.35],[n*.6+s*.4,.018,c+.6],[s,.018,_]],.012,6,L.CABLE)});{let a=E0.path,r=[0];for(let o=1;o<a.length;o++)r.push(r[o-1]+Math.hypot(a[o][0]-a[o-1][0],a[o][1]-a[o-1][1],a[o][2]-a[o-1][2]));E0.length=r[r.length-1],m0(e,E0.path,E0.r,16,L.MAINCABLE,r)}{let[a,r,o]=E0.socket;e.box(a,r-.07,o-.07,a+.018,r+.07,o+.07,L.STEEL),e.box(a+.018,r-.035,o-.032,a+.11,r+.035,o+.032,L.TRIM),e.box(a,r+.042,o+.035,a+.03,r+.058,o+.051,L.TUBE)}e.box(v0.x0-.08,v0.y-.07,H-.08,v0.x0-.02,v0.y+.07,H,L.TRIM),e.box(v0.x1+.02,v0.y-.07,H-.08,v0.x1+.08,v0.y+.07,H,L.TRIM),m0(e,[[v0.x0-.02,v0.y,v0.z],[(v0.x0+v0.x1)/2,v0.y,v0.z],[v0.x1+.02,v0.y,v0.z]],.045,10,L.TUBE);for(let a of[0,1]){let r=a?R-.06:0,o=a?R:.06;e.box(r,0,0,o,.24,H,L.TRIM),e.box(a?R-.05:0,1,0,a?R:.05,1.08,H,L.TRIM);let i=a?R-.32:0,n=a?R:.32;e.box(i,c0-.25,0,n,c0+.08,H,L.TRIM)}for(let a of[0,1]){let r=a?H-.06:0,o=a?H:.06;a?e.box(0,0,r,R,.24,o,L.TRIM):(e.box(0,0,r,R/2-M0.hw,.24,o,L.TRIM),e.box(R/2+M0.hw,0,r,R,.24,o,L.TRIM));let i=a?H-.32:0,n=a?H:.32;e.box(0,c0-.25,i,R,c0+.08,n,L.TRIM)}return e}function bo(){let e=7,u=0,w=()=>(u++*23+5)%ee.n,y=()=>(e=e*16807%2147483647,(e-1)/2147483646),q=[],a=[],r=[],o=[],i=[],n=[],c=[],l=3,s=4,_=(g,x,N,k,$,V,P,K,e0,X)=>{let p0=X?X[0]:ee.w*$,s0=X?X[1]:ee.h*$,n0=q.length/3;for(let x0=0;x0<=s;x0++)for(let d0=0;d0<=l;d0++){let g0=d0/l,S=x0/s,F=(g0-.5)*p0,D=(S-.5)*s0,Y=K*((g0-.5)*(g0-.5)*4+(1-S)*(1-S)*.6);q.push(I[0]+g[0]+x[0]*F+N[0]*D+k[0]*Y,I[1]+g[1]+x[1]*F+N[1]*D+k[1]*Y,I[2]+g[2]+x[2]*F+N[2]*D+k[2]*Y),a.push(k[0],k[1],k[2]),r.push(g0,S),o.push(V),c.push(e0||0),i.push(P[0]+I[0],P[1]+I[1],P[2]+I[2],P[3])}for(let x0=0;x0<s;x0++)for(let d0=0;d0<l;d0++){let g0=n0+x0*(l+1)+d0,S=g0+1,F=g0+l+1,D=F+1;n.push(g0,S,D,g0,D,F)}},p=(g,x,N)=>{let k=Math.cos(N),$=Math.sin(N);return[g.map((V,P)=>V*k+x[P]*$),x.map((V,P)=>-g[P]*$+V*k)]},m=[0,0,0,0],v=0,f=(g,x,N,k,$,V,P,K,e0)=>{let s0=0;for(let n0=V;n0<P;n0+=.48)for(let x0=k;x0<$;x0+=.4){let d0=x0+(y()-.5)*.4*.7,g0=n0+(y()-.5)*.48*.6;if(y()>K(d0,g0))continue;let[S,F]=p(N,[0,1,0],(y()-.5)*.5),D=g(d0,g0,.012+.0016*(s0++%9)+y()*.004),Y=.88+y()*.3;_(D,S,F,x,Y,w(),m,(y()-.3)*.02),ee.spots.length<400&&ee.spots.push({c:D,n:x,up:F,size:ee.h*Y}),v++}},h=(g,x,N)=>Math.exp(-Math.pow((g-x)/N,2));for(let g=0;g<G.n-1;g++){let x=Q[g+1],N=[[Xe(g)+G.hw+.32,x-.66],[x+.66,Xe(g+1)-G.hw-.32]];for(let[k,$]of N){let V=(P,K)=>.85*h(K,3.4,1.7);$>O.b[1]+.3&&f((P,K,e0)=>[e0,K,P],[1,0,0],[0,0,-1],k,$,1.45,6.3,V),f((P,K,e0)=>[R-e0,K,P],[-1,0,0],[0,0,1],k,$,1.45,6.3,V)}}let T=[];for(let g of O.lines){let x=g[3]-g[2]-.7;for(let N=.18;N<x-.1;N+=.3+y()*.14){let k=N/x,$=ft(g,k);if(y()<.1||Math.abs($[2]-O.bulb[2])<.4&&$[1]>2.3)continue;let V=.56+y()*.14,P=ee.h*V,K=(y()-.5)*.7,e0=y()<.3?y()<.5?-.75:.75:K,[X,p0]=p([0,0,-1],[0,1,0],e0),s0=[1,0,0],n0=[$[0]+.004,$[1]-.02-p0[1]*P*.5,$[2]-p0[2]*P*.5];_(n0,X,p0,s0,V,w(),[$[0],$[1],$[2],-(.04+y()*.06)],.01+y()*.025,1),O.hung.length<200&&O.hung.push({c:n0,h:P,peg:$}),T.push($),v++}}U.letters.forEach((g,x)=>{let N=[Math.cos(g.a),0,Math.sin(g.a)],k=[-Math.sin(g.a),0,Math.cos(g.a)];_([g.x,U.top+g.y,g.z],k,N,[0,1,0],1,x,m,.003,6,[g.w,g.h]),v++});{let[g,x]=U.stack,N=[0,1,0];for(let $=0;$<9;$++){let V=(y()-.5)*.35+.3;_([g+(y()-.5)*.012,U.top+.003+$*.0022,x+(y()-.5)*.012],[Math.cos(V),0,Math.sin(V)],[Math.sin(V),0,-Math.cos(V)],N,.26,w(),m,.004),v++}[[.13,.12,.9],[-.04,.2,-.4],[.2,-.05,1.6]].forEach(([$,V,P],K)=>{_([g+$,U.top+.002+K*.0012,x+V],[Math.cos(P),0,Math.sin(P)],[Math.sin(P),0,-Math.cos(P)],N,.26,w(),m,.006),v++})}{let g=[0,1,0],x=(V,P,K,e0,X,p0,s0,n0,x0)=>{_([V,P,K],[Math.cos(e0),0,Math.sin(e0)],[Math.sin(e0),0,-Math.cos(e0)],g,1,s0,m,x0||0,n0,[X,p0]),v++},N=O.basin.floor+.002,k=O.top+.0015;x(.36,N,4.78,.25,.2,.25,w(),1,.003),x(.44,N+.0012,5.02,-.4,.2,.25,w(),1,.004),x(.3,N+.0024,5.3,1.3,.2,.25,w(),5,.006),x(.47,N,5.62,.1,.2,.25,w(),3,.002),x(.33,N+.0012,5.95,-1,.2,.25,w(),1,.005),x(.6,N+.003,O.trays[0]-.4,.2,.036,.22,w(),2,.01),x(.55,k+5e-4,9.24,.35,.2,.25,w(),3,.004),x(.5,k+.001,11.88,1.35,.036,.23,w(),2,.012),x(.45,k+.0017,11.97,1.55,.036,.23,w(),2,.009),x(.36,k+.001,12.08,-.25,.2,.25,w(),5,.004),x(.43,Ke.h+k+.0012,(Ke.z0+Ke.z1)/2,.06,.2,.25,w(),5,.002);for(let[V,P,K,e0]of[[.56,9.38,.11,.3],[.2,9.9,.1,1.1],[.47,10.95,.16,2],[.3,12,.12,.7],[.5,8.7,.14,2.4],[.5,6.3,.18,1.9]]){let X=(P<O.a[1]?N:k)+4e-4;x(V,X,P,e0,K,K,w(),4,0)}let $=O.lines[6];for(let V of[.42,.47,.53,.66]){let P=ft($,V),K=.2+y()*.06,[e0,X]=p([0,0,-1],[0,1,0],(y()-.5)*.12);_([P[0]+.003,P[1]-.012-K/2,P[2]],e0,X,[1,0,0],1,w(),[P[0],P[1],P[2],-(.03+y()*.04)],.008,2,[.036,K]),T.push(P),v++}}return{pos:q,nrm:a,uv:r,pic:o,piv:i,idx:n,sty:c,pegs:T,count:v}}var A0=`
	const float RW = ${d(R)}, RL = ${d(H)}, RH = ${d(c0)}, RT = ${d(Ue)};
	const float HW = ${d(G.hw)}, SILL = ${d(G.sill)}, SPRING = ${d(G.spring)};
	const float WZ0 = ${d(G.z0)}, WSTEP = ${d(G.step)};
	const vec3 RO = vec3(${d(I[0])}, ${d(I[1])}, ${d(I[2])});
	const vec3 LDIR_L = vec3(${d(I0[0])}, ${d(I0[1])}, ${d(I0[2])});
	const vec3 LDIR_R = vec3(${d(-I0[0])}, ${d(I0[1])}, ${d(I0[2])});

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
	float winIdx(float z) { return clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${d(G.n-1)}); }
	// (on the left, the first windows are walled up)
	float leftOpen(float z) { return step(${d(G.leftFrom-.5)}, winIdx(z)); }
	vec2 winLocal(float z, float y) {
		float i = clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${d(G.n-1)});
		return vec2(z - (WZ0 + WSTEP * i), y);
	}
	// (on the right, the first window comes down to the table: its height
	// below the springing is stretched onto the others' shape)
	const float LSILL = ${d(G.lowSill)};
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
`;function _o(){return`
	#define STUDIO_SUN ${"vec3("+d(I0[0])+", "+d(I0[1])+", "+d(I0[2])+")"}
	#define STUDIO_SUN2 ${"vec3("+d(-I0[0])+", "+d(I0[1])+", "+d(I0[2])+")"}
	#define SHAFT_TINT vec3(0.6, 0.012, 0.008)
	#define STUDIO_AIR_EVEN
	${A0}
	float studioSun(vec3 p) {
		vec3 lp = p - RO;
		if (lp.x < 0.0 || lp.x > RW || lp.z < 0.0 || lp.z > RL || lp.y > RH + 2.0) return 0.0;
		vec3 c = redLightAir(lp);
		return dot(c, vec3(0.7, 0.2, 0.1)) * 3.2;
	}`}var Vt=`
	precision highp float;
	uniform mat4 proj, view;
	uniform float yScale;
	attribute vec3 position, normal;
	attribute float kind;
	attribute vec2 uv;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	void main() {
		v_pos = position; v_nrm = normal; v_kind = kind; v_uv = uv;
		vec3 t = view[3].xyz;
		v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
		v_eye.y *= yScale;
		vec3 p = position; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`,le=`
	// the televisions' flicker, thrown on whatever is in front of them
	uniform vec4 tvLight;
	vec3 tvGlow(vec3 lp, vec3 N) {
		vec3 d = vec3(${d(R/2)}, 1.35, ${d(J.z-.9)}) - lp;
		float dd = dot(d, d);
		float face = 0.35 + 0.65 * max(0.0, dot(N, normalize(d)));
		// (only in front of them: the stack's own back is in its shadow)
		float front = smoothstep(${d(J.z+.6)}, ${d(J.z-.2)}, lp.z);
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
		vec3 L0 = vec3(${d(C.lens[0])}, ${d(C.lens[1])}, ${d(C.lens[2])});
		vec3 d = lp - L0;
		float s = (${d(H-.005)} - L0.z) / max(d.z, 1e-4);
		vec3 h = L0 + d * s;
		return vec3(1.0 - (h.x - ${d(C.img.x-C.img.w/2)}) / ${d(C.img.w)}, (h.y - ${d(C.img.y-C.img.h/2)}) / ${d(C.img.h)}, 1.0 / s);
	}
	// the televisions stand in the beam's way: their shadows on the picture
	uniform vec3 tvLo[12], tvHi[12];
	float projShadow(vec3 lp) {
		vec3 L0 = vec3(${d(C.lens[0])}, ${d(C.lens[1])}, ${d(C.lens[2])});
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
		vec3 c = vec3(clamp(lp.x, ${d(v0.x0)}, ${d(v0.x1)}), ${d(v0.y)}, ${d(v0.z)});
		vec3 d = c - lp;
		float dd = dot(d, d);
		float face = 0.25 + 0.75 * max(0.0, dot(N, normalize(d)));
		return vec3(1.0, 0.06, 0.045) * 2.6 * face / (1.0 + dd * 0.055);
	}
	// the darkroom: the bare red bulb over the trays, the tube over the lines
	vec3 darkLight(vec3 lp, vec3 N) {
		vec3 d = vec3(${d(O.bulb[0])}, ${d(O.bulb[1])}, ${d(O.bulb[2])}) - lp;
		float dd = dot(d, d);
		vec3 c = vec3(1.0, 0.07, 0.04) * 1.15 * (0.2 + 0.8 * max(0.0, dot(N, normalize(d)))) / (0.02 + dd * 2.2);
		vec3 tq = vec3(${d(O.tube.x+.02)}, ${d(O.tube.y)}, clamp(lp.z, ${d(O.tube.z0)}, ${d(O.tube.z1)}));
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
		vec3 Ls = vec3(${d(R/2)}, 1.25, 1.6);
		vec3 d = lp - Ls;
		float t = (${d(-M0.depth)} - Ls.z) / d.z;
		vec3 h = Ls + d * t;
		float m = smoothstep(0.08, -0.05, abs(h.x - ${d(R/2)}) - ${d(M0.hw)}) * smoothstep(0.08, -0.05, h.y - ${d(M0.h)}) * step(0.0, h.y);
		float dd = dot(d, d);
		vec3 Ld = -normalize(d);
		vec3 c = vec3(1.0, 0.07, 0.05) * 26.0 * m * (0.15 + 0.85 * max(0.0, dot(N, Ld))) / (1.0 + dd * 0.55);
		vec3 sd = vec3(${d(C0.sign[0])}, ${d(C0.sign[1])}, ${d(C0.sign[2])}) - lp;
		c += vec3(1.0, 0.12, 0.1) * signK * 0.5 * (0.2 + 0.8 * max(0.0, dot(N, normalize(sd)))) / (0.05 + dot(sd, sd) * 3.0);
		return c;
	}
	uniform float spotK;
	const vec3 SPOTP = vec3(${d(i0.pos[0])}, ${d(i0.pos[1])}, ${d(i0.pos[2])});
	const vec3 SPOTA = vec3(${d(i0.axis[0])}, ${d(i0.axis[1])}, ${d(i0.axis[2])});
	const float SPOT_CI = ${d(Math.cos(i0.inner))}, SPOT_CO = ${d(Math.cos(i0.outer))};
	// her shape in the spot's light: soft round blockers, her shadow
	float spotShade(vec3 lp, vec3 L, float len) {
		float sh = 1.0;
		${l0.occ.map(e=>`{
			vec3 C = vec3(${d(e[0])}, ${d(e[1])}, ${d(e[2])}) - lp;
			float t = dot(C, L);
			float r = ${d(e[3])};
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
		${U.occ.map(e=>`{
			vec3 C = vec3(${d(e[0])}, ${d(e[1])}, ${d(e[2])}) - lp;
			float t = dot(C, dir);
			float cd = length(C - dir * t);
			float r = ${d(e[3])};
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
		${U.flames.map((e,u)=>`{
			vec3 d = vec3(${d(e[0])}, ${d(e[1])}, ${d(e[2])}) - lp;
 			float r2 = dot(d, d);
			float sh = candleShade(lp, d);
			float fl = rrF${u>>2}.${"xyzw"[u&3]};
			sum += sh * fl * (0.35 + 0.65 * max(0.0, dot(N, d * inversesqrt(r2 + 1e-4)))) / (r2 * 5.0 + 0.1);
		}`).join(`
`)}
		return vec3(1.0, 0.52, 0.22) * sum * 0.6;
	}
	vec3 ambient(vec3 lp, vec3 N) {
		// the room's own dark: a little red, lifted near the lit floor
		// the glow of the glass itself, spread round each window
		float g = 0.0;
		if (abs(N.x) > 0.5) {
			vec2 q = lp.x > RW * 0.5 ? winLocalR(lp.z, lp.y) : winLocal(lp.z, lp.y);
			g = exp(pointedSD(q, HW, SILL, SPRING) * 1.1) * 0.9 * (lp.x > RW * 0.5 ? 1.0 : leftOpen(lp.z));
		}
		// (out in the corridor there is only what comes through the door)
		float room = 1.0 - 0.9 * smoothstep(-0.3, -1.2, lp.z);
		return ${We().exp("rrnodyn")?"(vec3(0.2, 0.017, 0.02) * (0.8 + 0.2 * N.y) + vec3(0.1, 0.007, 0.007) * exp(-lp.y * 0.25)) * room + vec3(0.7, 0.06, 0.04) * g + safeLight(lp, N) + darkLight(lp, N) + doorGlow(lp, N)":"(vec3(0.2, 0.017, 0.02) * (0.8 + 0.2 * N.y) + vec3(0.1, 0.007, 0.007) * exp(-lp.y * 0.25)) * room + vec3(0.7, 0.06, 0.04) * g + tvGlow(lp, N) + safeLight(lp, N) + darkLight(lp, N) + doorGlow(lp, N) + candleLight(lp, N) + spotLight(lp, N)"};
	}
	// what the lit floor throws back up onto the walls and the shafts
	vec3 bounce(vec3 lp, vec3 N) {
		vec3 fp = vec3(clamp(lp.x + N.x * (0.8 + lp.y * 0.35), 0.1, RW - 0.1), 0.0, lp.z + N.z * (0.8 + lp.y * 0.35));
		vec3 b = redLightRough(fp) * 0.5 + redLightRough(fp + vec3(N.x * 1.4, 0.0, 1.2)) * 0.25 + redLightRough(fp + vec3(N.x * 1.4, 0.0, -1.2)) * 0.25;
		return b * 0.42 * exp(-lp.y * 0.18) * (0.55 + 0.45 * max(0.0, -N.y + 0.4));
	}

`,Gt=`
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, yScale, mirrorOn, reflOn;
	uniform sampler2D reflTex;
	uniform vec2 reflSize;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${A0}

	const float DHW = ${d(M0.hw)}, DH = ${d(M0.h)};

	${le}

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
			float nl = max(0.0, dot(N, LDIR_L)) + max(0.0, dot(N, LDIR_R));
			${We().exp("rrnostatic"),""}
			if (flr) lit = redLight(lp, max(wpx * 0.6, 0.004)) * 3.2 * LDIR_L.y;
			else if (nl > 0.0) lit = redLight(lp + N * 0.02, max(wpx, 0.01)) * 2.0 * min(1.0, nl);
			vec3 amb = ambient(lp, N) * (flr ? 1.4 : 1.0);
			${We().exp("rrnostatic")?"lit = vec3(0.0);":"if (!flr) amb += bounce(lp, N);"}
			// the deep sides of the windows catch the glass's glow
			if (k == 2) {
				float sideL = lp.x < RW * 0.5 ? 1.0 : -1.0;
				vec2 q = winLocal(lp.z, lp.y);
				float depth = lp.x < RW * 0.5 ? -lp.x : lp.x - RW;
				if (abs(N.x) < 0.5 && lp.z > 0.5 && lp.z < RL - 0.5) amb += vec3(1.0, 0.08, 0.05) * 0.5 * smoothstep(0.0, RT * 0.6, depth) * (0.6 + 0.4 * rfbm(q * 2.0));
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
				vec3 bd = normalize(vec3(${d(O.bulb[0])}, ${d(O.bulb[1])}, ${d(O.bulb[2])}) - lp);
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
				if (k == 0 && lp.z > ${d(J.z-1.5)}) {
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
	}`,Bt=`
	vec3 breathe(vec3 p, float b) {
		float up = smoothstep(0.3, 0.62, p.y);
		vec2 r = p.xz - vec2(0.035, -0.07);
		float chest = exp(-pow((p.y - 0.6) / 0.1, 2.0));
		vec3 d = vec3(0.0, 0.016 * b * up, 0.0);
		d.xz += normalize(r + vec2(1e-4)) * 0.009 * b * chest;
		// (her shoulders draw back a little as they rise)
		d.z -= 0.006 * b * up * smoothstep(0.08, 0.2, abs(p.x - 0.035));
		return p + d;
	}`,zo=`
	precision highp float;
	uniform mat4 proj, view, model;
	uniform float yScale, breath;
	attribute vec3 position, normal;
	attribute vec2 uv;
	attribute float flag;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_flag;
	${Bt}
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
	}`,Lo=`
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, sigTime, yScale, seed, dark, nMem, emit, order, warnS, warnN, glitchK, slot;
	uniform sampler2D letterTex;
	uniform sampler2D bodyTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_flag;
	${A0}
	${le}

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
				vec3 Lp = normalize(vec3(${d(C.lens[0])}, ${d(C.lens[1])}, ${d(C.lens[2])}) - lp);
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
	}`,Mo=`
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
	}`,To=`
	precision highp float;
	uniform float time, yScale;
	uniform sampler2D polTex, letTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_pic, v_style;
	${A0}
	${le}
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
	}`,So=`
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
	}`,Ro=`
	precision highp float;
	uniform float time;
	varying vec3 v_pos, v_eye;
	varying float v_layer;
	${A0}
	${le}
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
	}`,qo=`
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
	}`,ko=`
	precision highp float;
	uniform float time;
	uniform sampler2D printTex, polTex;
	varying vec3 v_pos, v_eye;
	varying float v_tray;
	${A0}
	${le}
	const vec3 BULB = vec3(${d(O.bulb[0])}, ${d(O.bulb[1])}, ${d(O.bulb[2])});
	void main() {
		vec3 lp = v_pos - RO;
		int k = int(v_tray + 0.5);
		float zc = k == 0 ? ${d(O.trays[0])} : (k == 1 ? ${d(O.trays[1])} : ${d(O.trays[2])});
		vec2 tl = vec2(lp.x - ${d(O.TXc)}, lp.z - zc);
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
	}`,No=`
	precision highp float;
	uniform mat4 proj, view;
	uniform float time, pxScale;
	attribute vec4 seed;
	varying float v_b, v_w;
	${A0}
	void main() {
		vec3 lp = vec3(0.3 + seed.x * (RW - 0.6), 0.2 + seed.y * (RH - 0.5), 0.3 + seed.z * (RL - 0.6));
		float t = time * (0.03 + 0.03 * seed.w);
		lp += vec3(sin(t * 3.1 + seed.w * 40.0) * 0.35, sin(t * 1.7 + seed.x * 30.0) * 0.4 - t * 0.6, cos(t * 2.3 + seed.z * 50.0) * 0.35);
		lp.y = 0.2 + mod(lp.y - 0.2, RH - 0.5);
		vec3 c = redLightAir(lp);
		v_b = dot(c, vec3(0.6, 0.3, 0.1));
		// and in the projector's beam, lit warm
		vec3 L0 = vec3(${d(C.lens[0])}, ${d(C.lens[1])}, ${d(C.lens[2])});
		vec3 dd = lp - L0;
		float s = (${d(H)} - L0.z) / max(dd.z, 1e-4);
		vec3 hh = L0 + dd * s;
		vec2 pu = vec2((hh.x - ${d(C.img.x-C.img.w/2)}) / ${d(C.img.w)}, (hh.y - ${d(C.img.y-C.img.h/2)}) / ${d(C.img.h)});
		v_w = (dd.z > 0.2 && pu.x > 0.0 && pu.x < 1.0 && pu.y > 0.0 && pu.y < 1.0) ? 1.6 : 0.0;
		vec4 v = view * vec4(lp + RO, 1.0);
		gl_Position = proj * v;
		float tw = 0.6 + 0.4 * sin(time * (1.0 + seed.w * 2.0) + seed.x * 80.0);
		v_b *= tw;
		gl_PointSize = clamp(pxScale * (0.012 + 0.012 * seed.w) / max(0.2, -v.z), 1.0, 6.0);
	}`,Eo=`
	precision highp float;
	varying float v_b, v_w;
	void main() {
		vec2 d = gl_PointCoord - 0.5;
		float a = smoothstep(0.5, 0.0, length(d));
		gl_FragColor = vec4((vec3(1.0, 0.14, 0.09) * min(v_b, 1.4) + vec3(1.0, 0.8, 0.55) * v_w) * a * 0.55, 1.0);
	}`;pt.exports=function(e){let u=wo(),w={position:e.buffer(u.pos),normal:e.buffer(u.nrm),kind:e.buffer(u.kind),uv:e.buffer(u.uv)},y=e.elements({data:u.idx.length>65535?new Uint32Array(u.idx):new Uint16Array(u.idx),type:u.idx.length>65535?"uint32":"uint16"}),q=e.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),a=e.framebuffer({color:q,depth:!0}),r=e({framebuffer:a}),o=e.texture({width:1,height:1,data:[0,0,0,255]}),i=e({}),n=o,c=0,l=0,s=!1,_=[4,4],p=[0,0,0,0],m=null,v=[0,3.417,8.417,12.333,15.625,19.25,22.5,25.958,30.75,33.417,36.25,40.125,43.667,46.917,51.292,56.458,60.25,64.083],f=e.texture({width:400,height:300,min:"linear",mag:"linear",wrap:"clamp"}),h={v:null,on:0,ready:!1,clip:-1,since:0,stillUntil:0},T=()=>{if(typeof document=="undefined")return;if(!h.v){let E=document.createElement("video");E.src="res/redroom/reel.mp4",E.muted=!0,E.loop=!0,E.playsInline=!0,E.preload="auto",E.setAttribute("playsinline",""),E.setAttribute("muted",""),E.addEventListener("loadeddata",()=>{h.ready=!0});let j=()=>{h.v&&h.v.paused&&!N0.freeze&&performance.now()/1e3>h.stillUntil&&h.v.play().catch(()=>{})};window.addEventListener("pointerdown",j,{passive:!0}),window.addEventListener("touchend",j,{passive:!0}),h.v=E,E.play().catch(()=>{})}let t=h.v,b=performance.now()/1e3;if(!h.ready||t.readyState<2){h.on=0;return}let z=0;for(let E=0;E<v.length;E++)t.currentTime>=v[E]-.02&&(z=E);z!==h.clip&&(h.clip=z);let M=b<h.stillUntil,A=N0.freeze?h.gate:M?"s"+Math.floor(e.now()/3.4):"c"+z;if(A!==h.gate&&(h.gate!==void 0&&lt.click&&lt.click(M?1:0),h.gate=A),N0.freeze||M?t.paused||t.pause():t.paused&&t.play().catch(()=>{}),h.on=M?0:1,!M)try{f.subimage(t)}catch(E){h.on=0}},g=e.texture({width:1,height:1,data:[0,0,0,255]}),x=1,N=t=>{let b=j=>{let B=Math.sin(j*127.1)*43758.5453;return B-Math.floor(B)},z=Math.floor(t*9),M=b(z),A=b(Math.floor(t*.7)),E=.92+.08*Math.sin(t*120);return A>.55&&M>.6&&(E=M>.85?.08:.45),E},k={signK:()=>x,vidTex:()=>f,vidOn:()=>h.on,memRot:t=>Math.floor((typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:t.time)/21),memTex:()=>m||g,projT:t=>{let b=typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:t.time;return N0.freeze?(N0.frozenAt===null&&(N0.frozenAt=b),N0.frozenAt):(N0.frozenAt=null,b)},spotK:()=>Ne.k,pulsePhase:()=>Ye.phase,pulsePeriod:()=>Ye.period,warnS:()=>N0.s,warnN:()=>N0.n,glitchK:()=>N0.glitch};J.stack.forEach((t,b)=>{let z=J.models[t[0]],M=J.G;k["tvLo["+b+"]"]=[R/2+t[2]-z.w*M/2,t.base,J.z+t[4]-.02],k["tvHi["+b+"]"]=[R/2+t[2]+z.w*M/2,t.base+z.h*M,J.z+t[4]+z.d*M]});let $=e({vert:Vt,frag:Gt,attributes:w,elements:y,cull:{enable:!1},uniforms:{reflTex:()=>n,reflSize:()=>_,reflOn:()=>c,tvLight:()=>p,...k}}),V=t=>new Promise((b,z)=>{let M=new Image,A=E=>(E&E-1)===0;M.onload=()=>b(e.texture({data:M,min:A(M.width)&&A(M.height)?"mipmap":"linear",mag:"linear",wrap:"clamp"})),M.onerror=z,M.src=t}),P=J.stack.map((t,b)=>{let[z,,M,A,E]=t,j=Math.PI+A*Math.PI/180,B=J.G,Z=Math.cos(j)*B,r0=Math.sin(j)*B,L0=I[0]+R/2+M,y0=I[1]+t.base,O0=I[2]+J.z+E;return{name:z,seed:(b+1)*.6180339%1,model:[Z,0,-r0,0,0,B,0,0,r0,0,Z,0,L0,y0,O0,1]}}),K={},e0=(()=>{let t=document.createElement("canvas");t.width=160,t.height=20;let b=t.getContext("2d");return b.fillStyle="#000",b.fillRect(0,0,160,20),b.fillStyle="#fff",b.font='bold 19px "Courier New", Courier, monospace',b.textAlign="center",b.textBaseline="middle",go.split("").forEach((z,M)=>b.fillText(z,M*16+8,11)),e.texture({data:t,min:"nearest",mag:"nearest",wrap:"clamp"})})(),X=null,s0=e({vert:zo,frag:Lo,attributes:{position:{buffer:e.prop("vb"),stride:36,offset:0},normal:{buffer:e.prop("vb"),stride:36,offset:12},uv:{buffer:e.prop("vb"),stride:36,offset:24},flag:{buffer:e.prop("vb"),stride:36,offset:32}},elements:e.prop("el"),offset:e.prop("offset"),count:e.prop("count"),cull:{enable:!1},uniforms:{model:e.prop("model"),seed:e.prop("seed"),dark:e.prop("dark"),emit:(t,b)=>b.emit||0,breath:(t,b)=>b.breath||0,order:(t,b)=>b.order===void 0?-1:b.order,slot:(t,b)=>b.slot||0,letterTex:()=>e0,bodyTex:e.prop("tex"),...k,memTex:()=>X||g,nMem:57,sigTime:t=>typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:t.time,tvLight:()=>p}});V("res/redroom/memories.webp").then(t=>{X=t,m=t}).catch(t=>console.error("The memories did not load",t));for(let t in J.models){let b=J.models[t],z=[];for(let M=0;M<b.tex;M++)z.push(V("res/redroom/tv_"+t+"_"+M+".webp"));Promise.all([fetch(b.file).then(M=>M.arrayBuffer()),...z]).then(([M,...A])=>{let E=new Uint32Array(M,0,4),j=E[0],B=E[1],Z=E[2],r0=E[3],L0=new Int32Array(M,16,Z*3),y0=16+Z*12,O0=e.buffer(new Float32Array(M,y0,j*9)),q0=y0+j*36,j0=r0?new Uint32Array(M.slice(q0,q0+B*4)):new Uint16Array(M.slice(q0,q0+B*2)),D0=e.elements({data:j0,type:r0?"uint32":"uint16"}),u0=[];for(let k0=0;k0<Z;k0++)u0.push({offset:L0[k0*3],count:L0[k0*3+1],tex:L0[k0*3+2]>=0?A[L0[k0*3+2]]:A[0]});K[t]={vb:O0,el:D0,parts:u0,dark:b.dark}}).catch(M=>console.error("A television did not load",M))}let n0=[],x0=()=>{if(X){n0.length=0;for(let t of P){let b=K[t.name];if(b)for(let z of b.parts)n0.push({vb:b.vb,el:b.el,offset:z.offset,count:z.count,tex:z.tex,model:t.model,seed:t.seed,dark:b.dark,order:J.letters[P.indexOf(t)],slot:P.indexOf(t)})}n0.length&&s0(n0)}},d0=bo(),g0=null,S=null;V("res/redroom/polaroids.webp").then(t=>{g0=t}).catch(t=>console.error("The photographs did not load",t)),V("res/redroom/letters_real.webp").then(t=>{S=t}).catch(t=>console.error("The letters did not load",t));let F=e({vert:Mo,frag:To,attributes:{position:d0.pos,normal:d0.nrm,uv:d0.uv,pic:d0.pic,style:d0.sty,pivot:{buffer:e.buffer(d0.piv),size:4}},elements:e.elements({data:new Uint16Array(d0.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...k,polTex:()=>g0,letTex:()=>S||g,tvLight:()=>p}}),D=(t,b)=>Promise.all([fetch(t).then(z=>z.arrayBuffer()),...b.map(V)]).then(([z,...M])=>{let A=new Uint32Array(z,0,4),E=A[0],j=A[1],B=A[2],Z=A[3],r0=new Int32Array(z,16,B*3),L0=16+B*12,y0=L0+E*36,O0=e.buffer(new Float32Array(z,L0,E*9)),q0=Z?new Uint32Array(z.slice(y0,y0+j*4)):new Uint16Array(z.slice(y0,y0+j*2)),j0=e.elements({data:q0,type:Z?"uint32":"uint16"}),D0=[];for(let u0=0;u0<B;u0++)D0.push({offset:r0[u0*3],count:r0[u0*3+1],tex:M[Math.max(0,r0[u0*3+2])],mat:r0[u0*3+2]});return{vb:O0,el:j0,parts:D0}}),Y=(t,b)=>{let z=new Array(16);for(let M=0;M<4;M++)for(let A=0;A<4;A++)z[M*4+A]=t[A]*b[M*4]+t[4+A]*b[M*4+1]+t[8+A]*b[M*4+2]+t[12+A]*b[M*4+3];return z},R0=(t,b,z)=>[1,0,0,0,0,1,0,0,0,0,1,0,t,b,z,1],W0=t=>{let b=Math.cos(t),z=Math.sin(t);return[1,0,0,0,0,b,z,0,0,-z,b,0,0,0,0,1]},ze=Y(R0(I[0]+C.x,I[1]+C.table,I[2]+C.z),W0(-C.pitch)),h0=C.tableK,T0=[h0,0,0,0,0,h0,0,0,0,0,h0,0,I[0]+R/2,I[1],I[2]+15,1],o0={},he=0,Ae=t=>{let b=t/4.6,z=Math.floor(b),M=b-z,A=Math.sin(z*91.7)*43758.5453,E=A-Math.floor(A)>.78?1.7:1,j=B=>(B=Math.max(0,Math.min(1,B)),B*B*(3-2*B));return(M<.38?j(M/.38):1-j((M-.38)/.5))*E},Le=["res/redroom/proj_0.webp"];D("res/redroom/proj_body.bin",Le).then(t=>{o0.body=t}).catch(t=>console.error(t)),D("res/redroom/proj_feed.bin",Le).then(t=>{o0.feed=t}).catch(t=>console.error(t)),D("res/redroom/proj_takeup.bin",Le).then(t=>{o0.takeup=t}).catch(t=>console.error(t)),D("res/redroom/table_all.bin",["res/redroom/table_0.webp"]).then(t=>{o0.table=t}).catch(t=>console.error(t));let Pe=(t,b)=>Y(ze,Y(R0(t[0],t[1],t[2]),Y(W0(b),R0(-t[0],-t[1],-t[2])))),te=[],oe=t=>{te.length=0;let b=(z,M,A)=>{if(z)for(let E of z.parts)te.push({vb:z.vb,el:z.el,offset:E.offset,count:E.count,tex:E.tex,model:M,seed:0,dark:A})};b(o0.table,T0,.9),b(o0.body,ze,1),b(o0.feed,Pe(C.feed,-t*2.6),1),b(o0.takeup,Pe(C.takeup,-t*3.5),1),te.length&&s0(te)},U0=[],ve=[];{let t=[I[0]+C.lens[0],I[1]+C.lens[1],I[2]+C.lens[2]];[.96,.86,.76,.66,.56,.46,.36].forEach((b,z)=>{let M=C.img.w/2*b,A=C.img.h/2*b,E=[[-M,-A],[M,-A],[M,A],[-M,A]].map(([j,B])=>[I[0]+C.img.x+j,I[1]+C.img.y+B,I[2]+H-.02]);for(let j=0;j<4;j++){let B=E[j],Z=E[(j+1)%4];U0.push(...t,...B,...Z),ve.push(z,z,z)}})}let z0=e({vert:So,frag:Ro,attributes:{position:U0,layer:ve},count:U0.length/3,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{...k,tvLight:()=>p}}),Me=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale, pxScale; attribute vec3 position; void main() { vec3 p = position; p.y *= yScale; vec4 v = view * vec4(p, 1.0); gl_Position = proj * v; gl_PointSize = clamp(pxScale * 0.22 / max(0.3, -v.z), 4.0, 220.0); }",frag:"precision highp float; uniform float time; void main() { vec2 d = gl_PointCoord - 0.5; float r = length(d); float a = exp(-r * r * 160.0) * 1.6 + 0.35 * exp(-r * r * 30.0) + 0.12 * exp(-r * r * 8.0) + 0.5 * exp(-d.y * d.y * 2500.0) * exp(-abs(d.x) * 7.0); gl_FragColor = vec4(vec3(1.0, 0.84, 0.62) * a * (0.9 + 0.1 * sin(time * 37.0)), 1.0); }",attributes:{position:[I[0]+C.lens[0],I[1]+C.lens[1],I[2]+C.lens[2]+.01]},count:1,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2}}),Te=null;V("res/redroom/print.webp").then(t=>{Te=t}).catch(t=>console.error(t));let de=[],ue=[];O.trays.forEach((t,b)=>{let z=O.TX/2-.009,M=O.TZ/2-.009,A=O.TXc,E=O.liquid,j=[[A-z,t-M],[A+z,t-M],[A+z,t+M],[A-z,t+M]].map(([B,Z])=>[I[0]+B,I[1]+E,I[2]+Z]);de.push(...j[0],...j[2],...j[1],...j[0],...j[3],...j[2]);for(let B=0;B<6;B++)ue.push(b)});let et=e({vert:qo,frag:ko,attributes:{position:de,tray:ue},count:de.length/3,cull:{enable:!1},uniforms:{...k,tvLight:()=>p,printTex:()=>Te||g,polTex:()=>g0||g}}),S0=Ft();for(let t of d0.pegs)S0.box(t[0]-.008,t[1]-.045,t[2]-.011,t[0]+.008,t[1]+.03,t[2]+.011,L.PEG);let $e=e({vert:Vt,frag:Gt,attributes:{position:S0.pos,normal:S0.nrm,kind:S0.kind,uv:S0.uv},elements:e.elements({data:new Uint16Array(S0.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...k,reflTex:()=>o,reflSize:[4,4],reflOn:0,tvLight:()=>p}}),ae=t=>{let b=Math.cos(t),z=Math.sin(t);return[b,0,-z,0,0,1,0,0,z,0,b,0,0,0,0,1]},a0=(t,b,z,M)=>Y(R0(I[0]+t,I[1]+b,I[2]+z),ae(M||0));D("res/redroom/plastic_all.bin",["res/redroom/plastic_0.webp"]).then(t=>{o0.jug=t}).catch(t=>console.error(t)),D("res/redroom/multi_cleaner_all.bin",["res/redroom/multi_cleaner_0.webp"]).then(t=>{o0.can=t}).catch(t=>console.error(t)),D("res/redroom/pull_all.bin",["res/redroom/pull_0.webp"]).then(t=>{o0.socket=t}).catch(t=>console.error(t)),D("res/redroom/bulb_all.bin",["res/redroom/bulb_0.webp","res/redroom/bulb_1.webp"]).then(t=>{o0.bulb=t}).catch(t=>console.error(t));let K0=O.top,ne=O.b[0],t0=[["jug",a0(.16,K0,ne+.3,.4)],["jug",a0(.17,K0,ne+.52,-.3)],["jug",a0(.36,K0,ne+.4,2.2)],["can",a0(.14,K0,ne+.95,1.57)],["can",a0(.15,K0,ne+1.3,1.45)],["jug",a0(.16,K0,O.b[1]-.35,.9)],["can",a0(.2,K0,O.b[1]-.8,1.7)],["socket",a0(O.bulb[0],O.bulb[1]+.065,O.bulb[2],0)],["bulb",Y(a0(O.bulb[0],O.bulb[1]+.048,O.bulb[2],0),W0(Math.PI))]],P0=(t,b)=>[t,0,0,0,0,b===void 0?t:b,0,0,0,0,t,0,0,0,0,1];D("res/redroom/wtable_all.bin",["res/redroom/wtable_0.webp"]).then(t=>{o0.wtable=t}).catch(t=>console.error(t)),D("res/redroom/wchair_all.bin",["res/redroom/wchair_0.webp"]).then(t=>{o0.wchair=t}).catch(t=>console.error(t)),D("res/redroom/cstick_holder.bin",["res/redroom/cstick_0.webp"]).then(t=>{o0.holder=t}).catch(t=>console.error(t)),D("res/redroom/cstick_candle.bin",["res/redroom/cstick_0.webp"]).then(t=>{o0.candle=t}).catch(t=>console.error(t)),D("res/redroom/rose_all.bin",["res/redroom/rose_0.webp"]).then(t=>{o0.rose=t}).catch(t=>console.error(t)),D("res/redroom/camera_all.bin",[0,1,2,3].map(t=>"res/redroom/camera_"+t+".webp")).then(t=>{o0.camera=t}).catch(t=>console.error(t));let se=U.k,G0=U.z,X0=Math.PI/2,$0=[["wtable",Y(a0(U.x,0,G0,X0),P0(se)),1.7],["wchair",Y(a0(U.x-U.depth/2-.36,0,G0-.42,X0+.05),P0(se)),1.6],["wchair",Y(a0(U.x-U.depth/2-.74,0,G0+.66,X0-.95),P0(se)),1.6],["wchair",Y(a0(U.x+.02,0,G0-U.half-.36,.06),P0(se)),1.6],["wchair",Y(a0(U.x-.05,0,G0+U.half+.4,Math.PI-.1),P0(se)),.95]];for(let[t,b,z]of U.candles)$0.push(["holder",a0(t,U.top,b,z*3),.9]),$0.push(["candle",Y(a0(t,U.top,b,z*3),Y(R0(0,.156,0),Y(P0(1,z),R0(0,-.156,0)))),1.15]);{let t=7,b=()=>(t=t*16807%2147483647,(t-1)/2147483646),z=U.vase;for(let M=0;M<9;M++){let A=M*2.39996+b()*.4,E=M===0?.04:.16+b()*.2,j=.66+b()*.12,B=z.h+.25*j-.1-(M===0?-.04:b()*.05),Z=Y(Y(a0(z.x,U.top+.02,z.z,A),W0(E)),Y(R0(0,B-.02,0),Y(W0(Math.PI/2),Y(P0(j),R0(0,-.13,0)))));$0.push(["rose",Z,2])}}for(let[t,b,z]of U.laid)$0.push(["rose",Y(a0(t,U.top+.002,b,z),P0(.72)),2]);D("res/redroom/woman_all.bin",["res/redroom/woman_0.webp"]).then(t=>{o0.woman=t}).catch(t=>console.error(t));let me=Y(a0(l0.x,0,l0.z,l0.yaw),P0(l0.k));$0.push(["woman",me,2.6]),$0.push(["camera",a0(O.cam.x,O.cam.y,O.cam.z,X0+.35),1.7]),D("res/redroom/enlarger_all.bin",["res/redroom/enlarger_0.webp"]).then(t=>{o0.enlarger=t}).catch(t=>console.error(t)),D("res/redroom/letters_all.bin",["res/redroom/letters_0.webp"]).then(t=>{o0.letters=t}).catch(t=>console.error(t)),D("res/redroom/cup_all.bin",["res/redroom/cup_0.webp"]).then(t=>{o0.cup=t}).catch(t=>console.error(t)),D("res/redroom/ashtray_all.bin",["res/redroom/ashtray_0.webp"]).then(t=>{o0.ashtray=t}).catch(t=>console.error(t)),D("res/redroom/books_all.bin",["res/redroom/books_0.webp"]).then(t=>{o0.books=t}).catch(t=>console.error(t));{let t=O.top;$0.push(["enlarger",a0(.39,t,10.45,Math.PI-.04),1.25],["letters",a0(.45,t+.001,9.72,.55),1],["cup",a0(.19,t,9.66,2.3),1.3],["books",a0(.2,t,11.08,.15),1.3,0],["books",a0(.53,t,11.16,-.45),1.3,5],["books",a0(.22,t,11.72,1.45),1.3,6],["books",a0(.24,t+.058,11.75,1.8),1.3,7],["ashtray",a0(O.ash.x,t,O.ash.z,.7),1.2])}let re=()=>{let t=[];for(let[z,M]of t0){let A=o0[z];A&&A.parts.forEach((E,j)=>t.push({vb:A.vb,el:A.el,offset:E.offset,count:E.count,tex:E.tex,model:M,seed:0,dark:z==="jug"||z==="can"?.85:.7,emit:z==="bulb"&&E.mat===0?1.6:0}))}let b=yo();for(let[z,M,A,E]of $0){let j=o0[z];!j||b&&z==="woman"||j.parts.forEach((B,Z)=>{(E===void 0||E===Z)&&t.push({vb:j.vb,el:j.el,offset:B.offset,count:B.count,tex:B.tex,model:M,seed:0,dark:A,emit:z==="woman"?-1:0,breath:z==="woman"?he:0})})}t.length&&s0(t),to(),o0.woman&&!b&&Zt(),o0.woman&&J0.n&&!b&&Qt(),Ne.k>.001&&!kt&&(Jt(),eo()),et(),$e()},ge=[],yt=[];for(let Z=0;Z<8;Z++)for(let r0=0;r0<8;r0++){let L0=(D0,u0)=>[-.08+.285*D0,.405+.20999999999999996*u0,-.222+-.05400000000000002*u0-.008],y0=r0/8,O0=(r0+1)/8,q0=Z/8,j0=(Z+1)/8;for(let[D0,u0]of[[y0,q0],[O0,q0],[O0,j0],[y0,q0],[O0,j0],[y0,j0]])ge.push(...L0(D0,u0)),yt.push(D0,u0)}let Zt=e({vert:`
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
			${A0}
			${le}
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
			}`,attributes:{position:ge,uv:yt},count:ge.length/3,cull:{enable:!1},uniforms:{...k,model:()=>me,tvLight:()=>p}}),J0={n:0,vb:null,el:null};fetch("res/redroom/veil.bin").then(t=>t.arrayBuffer()).then(t=>{let b=new Uint32Array(t,0,4),z=b[0],M=b[1],E=16+b[2]*12;J0.vb=e.buffer(new Float32Array(t,E,z*9)),J0.el=e.elements({data:new Uint16Array(t.slice(E+z*36,E+z*36+M*2)),type:"uint16"}),J0.n=M}).catch(t=>console.error("Her veil did not load",t));let Qt=e({vert:`
			precision highp float;
			uniform mat4 proj, view, model;
			uniform float yScale, time, breath;
			attribute vec3 position, normal;
			attribute vec2 uv;
			varying vec3 v_pos, v_nrm, v_eye;
			varying vec2 v_uv;
			varying float v_fold;
			${Bt}
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
			${A0}
			${le}
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
			}`,attributes:{position:{buffer:()=>J0.vb,stride:36,offset:0},normal:{buffer:()=>J0.vb,stride:36,offset:12},uv:{buffer:()=>J0.vb,stride:36,offset:24}},elements:()=>J0.el,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}},uniforms:{...k,model:()=>me,breath:()=>he,tvLight:()=>p}}),tt=[],xt=[];{let t=i0.axis,b=Math.abs(t[1])>.9?[1,0,0]:[0,1,0],z=(Z,r0)=>[Z[1]*r0[2]-Z[2]*r0[1],Z[2]*r0[0]-Z[0]*r0[2],Z[0]*r0[1]-Z[1]*r0[0]],A=(Z=>{let r0=Math.hypot(...Z);return Z.map(L0=>L0/r0)})(z(t,b)),E=z(t,A),j=i0.pos[1]/-t[1],B=40;[1,.82,.64,.46,.3].forEach((Z,r0)=>{let L0=Math.tan(i0.outer*Z)*j;for(let y0=0;y0<B;y0++){let O0=y0/B*Math.PI*2,q0=(y0+1)/B*Math.PI*2,j0=u0=>[0,1,2].map(k0=>I[k0]+i0.pos[k0]+t[k0]*j+(A[k0]*Math.cos(u0)+E[k0]*Math.sin(u0))*L0),D0=[0,1,2].map(u0=>I[u0]+i0.pos[u0]);tt.push(...D0,...j0(O0),...j0(q0)),xt.push(r0,r0,r0)}})}let Jt=e({vert:`
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
			${A0}
			void main() {
				vec3 lp = v_pos - RO;
				float along = length(lp - vec3(${d(i0.pos[0])}, ${d(i0.pos[1])}, ${d(i0.pos[2])})) / ${d(i0.pos[1]/-i0.axis[1])};
				float haze = 0.55 + 0.9 * rfbm(lp.xz * 1.3 + vec2(lp.y * 0.6, time * 0.05)) * rfbm(lp.xy * 0.9 - time * 0.03);
				float dist = length(v_eye - v_pos);
				float a = spotK * haze * (0.55 + 0.45 * smoothstep(1.0, 0.0, along)) * smoothstep(0.0, 0.12, along) * smoothstep(0.98, 0.8, along) * smoothstep(0.3, 1.6, dist);
				gl_FragColor = vec4(vec3(1.0, 0.88, 0.74) * a * 0.045, 1.0);
			}`,attributes:{position:tt,layer:xt},count:tt.length/3,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{spotK:()=>Ne.k}}),wt=90,bt=[];for(let t=0;t<wt;t++)bt.push(Math.random(),Math.random(),Math.random(),Math.random());let eo=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, yScale, pxScale, spotK;
			attribute vec4 seed;
			varying float v_a;
			void main() {
				vec3 S = vec3(${d(I[0]+i0.pos[0])}, ${d(I[1]+i0.pos[1])}, ${d(I[2]+i0.pos[2])});
				vec3 A = vec3(${d(i0.axis[0])}, ${d(i0.axis[1])}, ${d(i0.axis[2])});
				// somewhere in the cone, drifting slowly down and round
				float al = 0.25 + 0.7 * fract(seed.x - time * 0.004 * (0.5 + seed.w));
				float len = al * ${d(i0.pos[1]/-i0.axis[1])};
				float ang = seed.y * 6.2832 + time * 0.03 * (seed.z - 0.5);
				float rr = sqrt(seed.z) * tan(${d(i0.outer)}) * len * 0.92;
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
			}`,attributes:{seed:bt},count:wt,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2,spotK:()=>Ne.k}}),to=e({vert:`
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
			}`,attributes:{fp:[].concat(...U.flames.map((t,b)=>[I[0]+t[0],I[1]+t[1],I[2]+t[2],b*1.37]))},count:U.flames.length,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2}}),Oe=document.createElement("canvas");Oe.width=512,Oe.height=192;{let t=Oe.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,512,192),t.font='bold 128px "Helvetica Neue", Arial, sans-serif',t.textAlign="center",t.textBaseline="middle",t.shadowColor="#ff2a20",t.shadowBlur=28,t.fillStyle="#ff6a5a",t.fillText("ENTER",256,100),t.shadowBlur=0,t.fillStyle="#ffd8d0",t.fillText("ENTER",256,100)}let oo=e.texture({data:Oe,min:"linear",mag:"linear",wrap:"clamp"}),Y0=C0.sign,De=.3,Ce=.1125,Ve=Y0[2]-.025,ao=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale; attribute vec3 position; attribute vec2 uv; varying vec2 v_uv; void main() { v_uv = uv; vec3 p = position; p.y *= yScale; gl_Position = proj * view * vec4(p, 1.0); }",frag:"precision highp float; uniform sampler2D tex; uniform float signK; varying vec2 v_uv; void main() { vec3 c = texture2D(tex, v_uv).rgb; vec3 col = c * vec3(1.6, 0.55, 0.5) * signK + vec3(0.06, 0.0, 0.0); gl_FragColor = vec4(col, 1.0); }",attributes:{position:[[Y0[0]+De,Y0[1]-Ce,Ve],[Y0[0]-De,Y0[1]-Ce,Ve],[Y0[0]-De,Y0[1]+Ce,Ve],[Y0[0]+De,Y0[1]+Ce,Ve]].map(t=>[t[0]+I[0],t[1]+I[1],t[2]+I[2]]),uv:[[0,1],[1,1],[1,0],[0,0]]},elements:[0,1,2,0,2,3],cull:{enable:!1},uniforms:{tex:oo,signK:()=>x}}),_t=220,zt=[];for(let t=0;t<_t;t++)zt.push(Math.random(),Math.random(),Math.random(),Math.random());let no=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b;
			void main() {
				vec3 L0 = vec3(${d(I[0]+C.lens[0])}, ${d(I[1]+C.lens[1])}, ${d(I[2]+C.lens[2])});
				vec3 C = vec3(${d(I[0]+C.img.x)}, ${d(I[1]+C.img.y)}, ${d(I[2]+H)});
				vec3 fw = normalize(C - L0);
				vec3 rt = normalize(cross(fw, vec3(0.0, 1.0, 0.0)));
				vec3 up = cross(rt, fw);
				// most of them close to the lens
				float along = 0.15 + pow(seed.x, 2.2) * 7.5;
				float sp = along / length(C - L0);
				vec2 off = (vec2(seed.y, seed.z) - 0.5) * vec2(${d(C.img.w)}, ${d(C.img.h)}) * sp;
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
			}`,frag:"precision highp float; varying float v_b; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vec3(1.0, 0.84, 0.6) * v_b * a, 1.0); }",attributes:{seed:zt},count:_t,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2}}),ot=70,Lt=[];for(let t=0;t<ot;t++)Lt.push(Math.random(),Math.random(),Math.random(),t<ot*.6?1:0);let so=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b, v_a, v_s;
			void main() {
				vec3 L0 = vec3(${d(I[0]+C.lens[0])}, ${d(I[1]+C.lens[1])}, ${d(I[2]+C.lens[2])});
				vec3 C = vec3(${d(I[0]+C.img.x)}, ${d(I[1]+C.img.y)}, ${d(I[2]+H)});
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
				float rc = 0.04 + al * ${d(C.img.h*.5)} / length(C - L0);
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
			${A0}
			void main() {
				vec2 d = gl_PointCoord - 0.5;
				float g = exp(-dot(d, d) * 9.0);
				float n = rnoise(gl_PointCoord * 3.2 + v_s + time * 0.05) * 0.7 + rnoise(gl_PointCoord * 7.0 - v_s) * 0.3;
				float a = g * smoothstep(0.2, 0.8, n) * v_a * 0.15;
				gl_FragColor = vec4(mix(vec3(0.5, 0.06, 0.04), vec3(1.0, 0.86, 0.68), clamp(v_b - 0.12, 0.0, 1.0)) * v_b * a, 1.0);
			}`,attributes:{seed:Lt},count:ot,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2}}),Mt=2200,Tt=[];for(let t=0;t<Mt;t++)Tt.push(Math.random(),Math.random(),Math.random(),Math.random());let ro=e({vert:No,frag:Eo,attributes:{seed:Tt},count:Mt,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2}}),St=56,at=(()=>{let t=[],b=[],z=[];for(let M=0;M<St;M++){for(let[E,j]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(M),b.push(E,j);let A=M*4;z.push(A,A+1,A+2,A,A+2,A+3)}return{id:t,cr:b,idx:z}})(),io=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, yScale;
			uniform vec3 src;
			attribute float id;
			attribute vec2 corner;
			varying vec2 v_c;
			varying float v_a, v_id, v_age;
			const float LIFE = 6.5, N = ${St}.0;
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
			${A0}
			void main() {
				float r = length(v_c);
				if (r > 1.0) discard;
				float w = rfbm(v_c * 1.3 + vec2(v_id * 3.7, time * 0.25 - v_age * 0.4));
				float a = (1.0 - r * r) * smoothstep(0.25, 0.75, w) * v_a * mix(0.55, 0.16, smoothstep(0.5, 4.0, v_age));
				// pale smoke, lit red by the room, warmer where it is thick
				vec3 col = mix(vec3(0.42, 0.2, 0.19), vec3(0.62, 0.34, 0.3), w);
				gl_FragColor = vec4(col, a);
			}`,attributes:{id:at.id,corner:at.cr},elements:e.elements({data:new Uint16Array(at.idx),type:"uint16"}),depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}},cull:{enable:!1},uniforms:{...k,src:()=>[I[0]+O.smoke[0],I[1]+O.smoke[1],I[2]+O.smoke[2]]}}),Ge=t=>+(+t).toFixed(4),co=(t,b)=>.82+.1*Math.sin(t*(9+Ge(b*1.7))+Ge(b*2.1))*Math.sin(t*3.3+Ge(b))+.08*Math.sin(t*23+Ge(b*4)),Rt=(t,b)=>[0,1,2,3].map(z=>b*4+z<U.flames.length?co(t,b*4+z):0),qt=e({uniforms:{rrF0:t=>Rt(t.time,0),rrF1:t=>Rt(t.time,1)}}),kt=!1,Nt=t=>qt(()=>lo(t)),lo=t=>{let b=!!(t&&t.reflected);b||T(),kt=b;let z=performance.now()/1e3;he=Ae(z);let M=.8+.12*Math.sin(z*47)*Math.sin(z*3.1)+.08*Math.sin(z*23+1.3);p[0]=.8*M,p[1]=.84*M,p[2]=.95*M,x=N(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:z),$(),ao(),x0(),g0&&F(),re(),oe(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:z),O.smoke&&io(),m&&!(typeof window!="undefined"&&window.__noBeam)&&z0(),Me(),!b&&!(typeof window!="undefined"&&window.__noSmoke)&&so(),b||no(),b||ro()};Nt.reflect=(t,b)=>qt(()=>fo(t,b));let fo=(t,b)=>i(z=>{let M=z.viewportWidth,A=z.viewportHeight,E=Math.max(2,Math.round(M/2)),j=Math.max(2,Math.round(A/2)),B=!s;if((a.width!==E||a.height!==j)&&(a.resize(E,j),B=!0),_[0]=M,_[1]=A,c=1,!B&&++l%b!==0){n=q;return}n=o,r(()=>{e.clear({color:[0,0,0,1],depth:1}),t()}),n=q,s=!0});return Nt};var ct=null;Object.assign(pt.exports,{O:I,W:R,L:H,H:c0,ROOM:{W:R,L:H,H:c0,WIN:G,DOOR:M0,ENT:C0,SHAFTS:Q,TV:J,DARK:O,PROJ:C,CABLE:E0,POL:ee,TBL:U,WOMAN:l0,winZ:Xe,vaultY:ie},POST:{threshold:.3},sunGLSL:_o,bakedSun(e){return ct||(ct=e.texture({width:1,height:1,data:[0,0,0,0]})),ct},ready:()=>!0,setFlower(){},setGuide(){},setWind(){},setSpot(e){Ne.k=e},setWarn(e){Object.assign(N0,e)},setViewer(e){jt.eye=e?e.slice():null},setPulse(e,u){Ye.phase=e,Ye.period=u},onClick(e){lt.click=e}})});var Yt=je((jo,Xt)=>{"use strict";var w0=ht(),{O:vt}=w0,{W:b0,L:Ht,TV:we,DARK:V0,PROJ:pe,TBL:f0,WOMAN:Qe}=w0.ROOM,Wt=e=>[e[0]+vt[0],e[1]+vt[1],e[2]+vt[2]],dt=(e,u,w)=>e+(u-e)*w,_e=e=>Math.max(0,Math.min(1,e)),Io="Some grief is not yours to witness.",Q0=e=>(e=_e(e),e*e*(3-2*e)),Je=[Qe.x,0,Qe.z],mt=Math.sin(Qe.yaw),gt=Math.cos(Qe.yaw),B0=(e,u,w)=>[Je[0]+mt*e+gt*(w||0),u,Je[2]+gt*e-mt*(w||0)],H0=pe.x,Kt=pe.table,fe=pe.z,Ee=[H0+pe.feed[0],Kt+pe.feed[1],fe+pe.feed[2]],Ze=pe.lens,ut=V0.trays[0],_0=f0.letters,be=[(_0[0].x+_0[1].x)/2,f0.top,(_0[0].z+_0[1].z)/2],Ao=[{eye:[b0/2+.15,1.55,-9.6],at:[b0/2,1.7,0],fov:40,dof:.05,p:{fov:58}},{eye:[b0/2+.05,1.6,-3],at:[b0/2,1.85,1.5],fov:50,dof:.05,p:{fov:70}},{eye:[b0/2-.2,1.5,.9],at:[b0/2-3,1.4,7],fov:56,dof:.04,p:{fov:74}},{eye:[b0-4.4,1.55,1.2],at:[b0-.7,1.05,f0.z+.2],fov:46,dof:.06,p:{eye:[b0-4.8,1.6,.9],fov:68}},{eye:[f0.x-1.4,f0.top+.48,f0.z-.7],at:[f0.x+.05,f0.top+.26,f0.z+0],fov:40,dof:.32,p:{fov:50}},{eye:[f0.stack[0]-.35,f0.top+.75,f0.stack[1]-.25],at:[f0.stack[0]+.02,f0.top,f0.stack[1]+.02],fov:34,dof:.3,p:{fov:50}},{eye:[be[0]-.3,f0.top+.85,be[2]-.1],at:[be[0]+.03,f0.top,be[2]+.02],fov:40,dof:.22,p:{eye:[be[0]-.35,f0.top+1.05,be[2]-.1],fov:62}},{eye:[_0[0].x-.09,f0.top+.4,_0[0].z-.01],at:[_0[0].x+.012,f0.top,_0[0].z],fov:42,dof:.12,p:{eye:[_0[0].x-.1,f0.top+.46,_0[0].z],fov:70}},{eye:[_0[1].x-.09,f0.top+.4,_0[1].z+.01],at:[_0[1].x+.012,f0.top,_0[1].z],fov:42,dof:.12,p:{eye:[_0[1].x-.1,f0.top+.46,_0[1].z],fov:70}},{eye:[3.3,1.55,1.3],at:[.3,1.35,5.2],fov:50,dof:.05,p:{eye:[2.8,1.6,.9],fov:72}},{eye:[1.05,1.5,ut-.42],at:[V0.TXc-.02,V0.liquid,ut+.04],fov:34,dof:.2,p:{eye:[1,1.55,ut-.45],fov:52}},{eye:[.95,1.22,V0.cam.z-.5],at:[V0.cam.x-.02,V0.cam.y+.04,V0.cam.z+.06],fov:34,dof:.34,p:{fov:48}},{eye:[1.75,1.45,9],at:[.35,1.08,10.8],fov:46,dof:.12,p:{eye:[1.9,1.5,8.6],fov:66}},{eye:[.66,1.58,9.25],at:[.38,V0.top,9.75],fov:52,dof:.18,p:{eye:[.7,1.68,9.15],fov:74}},{eye:[.66,1.58,10.75],at:[.38,V0.top,11.25],fov:52,dof:.18,pass:!0,p:{eye:[.7,1.68,10.65],fov:74}},{eye:[.68,1.5,11.35],at:[.5,V0.top+.06,11.72],fov:44,dof:.26,p:{eye:[.72,1.6,11.25],fov:66}},{eye:[.66,1.58,12.2],at:[.4,V0.top,12.62],fov:52,dof:.18,p:{eye:[.7,1.68,12.1],fov:74}},{eye:[2,1.6,8.3],at:[.4,2.25,11.3],fov:50,dof:.12,p:{eye:[1.8,1.6,8.1],fov:72}}];function Ut(e,u){let w=e.length-1,y=Math.max(0,Math.min(w,u)),q=Math.min(w-1,Math.floor(y)),a=y-q,r=e[Math.max(0,q-1)],o=e[q],i=e[q+1],n=e[Math.min(w,q+2)],c=a*a,l=c*a;return[0,1,2].map(s=>.5*(2*o[s]+(-r[s]+i[s])*a+(2*r[s]-5*o[s]+4*i[s]-n[s])*c+(-r[s]+3*o[s]-3*i[s]+n[s])*l))}var Ie=0;function Po(){let e=Ao.slice();{let v=(w0.ROOM.DARK.hung||[]).filter(f=>f.peg[0]>1.3&&f.c[2]>9.4&&f.c[2]<12.6&&f.c[1]>1.6&&f.c[1]<2.5);if(v.sort((f,h)=>Math.abs(f.c[2]-10.9)-Math.abs(h.c[2]-10.9)),v.length){let f=v[0],h=f.c;e.push({eye:[h[0]+.85,h[1]-.05,h[2]-.55],at:h,fov:30,dof:.42,p:{eye:[h[0]+1.05,h[1]-.05,h[2]-.6],fov:46}});let T=v.find(g=>Math.abs(g.c[2]-h[2])>.25&&Math.abs(g.c[2]-h[2])<.9);T&&e.push({eye:[T.c[0]+.7,T.c[1]+.02,T.c[2]+.45],at:T.c,fov:30,dof:.42,p:{eye:[T.c[0]+.9,T.c[1]+.02,T.c[2]+.5],fov:46}})}}let u=w0.ROOM.CABLE,w=u.path,y=u.socket[2],q=u.socket[0];e.push({eye:[q+1.05,.42,y-.45],at:[q,.27,y+.08],fov:42,dof:.32,p:{eye:[q+1.3,.48,y-.55],fov:58}});let[a,r]=u.run;for(let v of[.04,.22,.42,.62,.82]){let f=Math.round(a+(r-a)*v),h=w[Math.max(0,f-6)],T=w[Math.min(w.length-1,f+6)],g=w[f],x=T[0]-h[0],N=T[2]-h[2],k=Math.hypot(x,N)||1;x/=k,N/=k,e.push({eye:[g[0]-x*.8-N*.12,.3,g[2]-N*.8+x*.12],at:[g[0]+x*1.5,.06,g[2]+N*1.5],fov:44,dof:.24,pass:!0,p:{fov:60}})}e.push({eye:[b0-3,.45,y-1.6],at:[b0-.3,1.9,y+.9],fov:50,dof:.1,p:{fov:70}});let o=(v,f,h)=>[v[0]+f[0]*h,v[1]+f[1]*h,v[2]+f[2]*h],i=11,n=()=>(i=i*16807%2147483647,(i-1)/2147483646),c=(w0.ROOM.POL.spots||[]).filter(v=>v.n[0]<-.5&&v.c[2]>10.5&&v.c[2]<21.5&&v.c[1]>1.9&&v.c[1]<4.6),l=(v,f)=>Math.abs(v.c[2]-f)+Math.abs(v.c[1]-3)*.4,s=[];for(let v of[12.6,15,17.3]){let f=null;for(let h of c)(!f||l(h,v)<l(f,v))&&(f=h);f&&s.indexOf(f)<0&&s.push(f)}s.forEach((v,f)=>{let h=v.n,T=v.c;f>0&&e.push({eye:o(o(T,h,2.2),[0,.15,-.6],1),at:T,fov:50,dof:.05,pass:!0}),e.push({eye:o(o(T,h,1),[0,.06,-.3],1),at:T,fov:36,dof:.26,p:{fov:50}})}),e.push({eye:[H0+2,1.35,fe-1.5],at:[H0,1.35,fe+.1],fov:42,dof:.12,p:{eye:[H0+1.6,1.4,fe-1.5],fov:62}}),e.push({eye:[H0+.85,Ee[1]+.12,Ee[2]-.35],at:[Ee[0],Ee[1]-.05,Ee[2]],fov:36,dof:.32,p:{fov:52}}),e.push({eye:[H0+.42,Ze[1]+.08,Ze[2]+1.35],at:[H0,Ze[1],Ze[2]],fov:36,dof:.35,p:{fov:52}}),e.push({eye:[H0-.55,1.75,fe-1.4],at:[b0/2,5,Ht],fov:50,dof:.06,p:{fov:70}}),e.push({eye:[H0-.2,3.3,fe+3.2],at:[b0/2,5.4,Ht],fov:52,dof:.04,pass:!0,p:{fov:72}});let _=we.stack;e.push({eye:[b0/2+1.4,1.2,we.z-4.9],at:[b0/2,1.75,we.z],fov:50,dof:.05,p:{fov:70}});let p=_.map((v,f)=>f);for(let v=p.length-1;v>0;v--){let f=Math.floor(n()*(v+1)),h=p[v];p[v]=p[f],p[f]=h}p=p.slice(0,10);let m=null;for(let v of p){let f=_[v],h=f.screen,T=f.facing,g=f.size*1.25;if(m){let N=[(m[0]+h[0])/2,(m[1]+h[1])/2+.2,Math.min(m[2],h[2])-2.6];e.push({eye:N,at:[(m[0]+h[0])/2,(m[1]+h[1])/2,we.z],fov:46,dof:.05,pass:!0})}let x=(n()-.5)*.5;e.push({eye:[h[0]+T[0]*g+x,h[1]+.05+(n()-.5)*.15,h[2]+T[2]*g],at:[h[0],h[1],h[2]],fov:30,dof:.3,p:{fov:44}}),m=h}return e.push({eye:[b0/2+.3,3.3,we.z-2.3],at:[b0/2,2.4,we.z+3],fov:52,dof:.04,pass:!0}),e.push({eye:B0(-.9,4.4,.2),at:B0(4.6,1.5),fov:54,dof:.04,pass:!0}),Ie=e.length,e.push({eye:B0(-3.4,2.5,-1.5),at:B0(1,.75),fov:46,dof:.08,p:{fov:66}}),e.push({eye:B0(-2.55,2.3,0),at:B0(5.2,.95),fov:56,dof:.12,p:{eye:B0(-2.55,2.4,0),fov:74}}),e.push({eye:B0(-1.6,.92,0),at:B0(3,1.02),fov:50,dof:.28,p:{eye:B0(-1.9,.95,0),fov:64}}),e}function $o(){let e=null,u=null,w=null,y=null,q=null,a=i=>{let n=e.createBuffer(1,Math.floor(e.sampleRate*i),e.sampleRate),c=n.getChannelData(0);for(let l=0;l<c.length;l++)c[l]=Math.random()*2-1;return n},r=()=>{if(e){e.state==="suspended"&&e.resume();return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;e=window.__redAudio||new i,window.__redAudio=e,e.state==="suspended"&&e.resume(),y=e.createGain(),y.gain.value=.9,y.connect(e.destination),u=e.createGain(),u.gain.value=0;let n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=170,n.Q.value=4,[55,55.6,110.3].forEach((s,_)=>{let p=e.createOscillator();p.type=_<2?"sawtooth":"sine",p.frequency.value=s,p.connect(n),p.start()}),n.connect(u),u.connect(y),w=e.createGain(),w.gain.value=0;let c=e.createBufferSource();c.buffer=a(2),c.loop=!0;let l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=3200,l.Q.value=.6,c.connect(l),l.connect(w),w.connect(y),c.start()},o=(i,n,c,l,s)=>{i.gain.setValueAtTime(0,n),i.gain.linearRampToValueAtTime(l,n+c),i.gain.exponentialRampToValueAtTime(1e-4,n+c+s)};return{start:r,set(i,n){if(!e)return;let c=e.currentTime;u.gain.setTargetAtTime(i*.16,c,.15),w.gain.setTargetAtTime(n*.035,c,.08)},tick(){if(!e)return;let i=e.currentTime,n=e.createOscillator();n.type="square",n.frequency.setValueAtTime(1180,i),n.frequency.exponentialRampToValueAtTime(240,i+.09);let c=e.createGain();o(c,i,.002,.09,.12),n.connect(c),c.connect(y),n.start(i),n.stop(i+.2);let l=e.createOscillator();l.type="sine",l.frequency.setValueAtTime(90,i),l.frequency.exponentialRampToValueAtTime(40,i+.2);let s=e.createGain();o(s,i,.004,.35,.25),l.connect(s),s.connect(y),l.start(i),l.stop(i+.35)},clunk(){if(!e)return;let i=e.currentTime,n=e.createOscillator();n.type="sine",n.frequency.setValueAtTime(75,i),n.frequency.exponentialRampToValueAtTime(38,i+.25);let c=e.createGain();o(c,i,.003,.5,.35),n.connect(c),c.connect(y),n.start(i),n.stop(i+.5);let l=e.createBufferSource();l.buffer=a(.08);let s=e.createBiquadFilter();s.type="highpass",s.frequency.value=1800;let _=e.createGain();o(_,i,.001,.25,.06),l.connect(s),s.connect(_),_.connect(y),l.start(i)},burst(){if(!e)return;let i=e.currentTime,n=e.createBufferSource();n.buffer=a(2.4);let c=e.createBiquadFilter();c.type="bandpass",c.Q.value=.7,c.frequency.setValueAtTime(600,i),c.frequency.exponentialRampToValueAtTime(5e3,i+1.6);let l=e.createGain();l.gain.setValueAtTime(1e-4,i),l.gain.exponentialRampToValueAtTime(.5,i+.5),l.gain.setValueAtTime(.5,i+1.7),l.gain.exponentialRampToValueAtTime(1e-4,i+2.3),n.connect(c),c.connect(l),l.connect(y),n.start(i);let s=e.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(110,i),s.frequency.exponentialRampToValueAtTime(18,i+2);let _=e.createGain();o(_,i,.05,.18,2),s.connect(_),_.connect(y),s.start(i),s.stop(i+2.2)},beat(i){if(!e||i<.01)return;let n=e.currentTime;[[0,1],[.24,.62]].forEach(([c,l])=>{let s=n+c,_=e.createBiquadFilter();_.type="bandpass",_.frequency.value=340,_.Q.value=1.4;let p=e.createGain();o(p,s,.012,.22*l*i,.16),[100,150.4,200.9].forEach((h,T)=>{let g=e.createOscillator();g.type=T===1?"square":"sawtooth",g.frequency.setValueAtTime(h*1.04,s),g.frequency.exponentialRampToValueAtTime(h,s+.12),g.connect(_),g.start(s),g.stop(s+.32)});let m=e.createBufferSource();m.buffer=a(.18);let v=e.createBiquadFilter();v.type="highpass",v.frequency.value=2600;let f=e.createGain();o(f,s,.004,.05*l*i,.1),m.connect(v),v.connect(f),f.connect(y),m.start(s),_.connect(p),p.connect(y)})},buzz(i){if(e){if(!q){q=e.createGain(),q.gain.value=0;let n=e.createBiquadFilter();n.type="bandpass",n.frequency.value=260,n.Q.value=2.2,[100,100.7,300.2].forEach((c,l)=>{let s=e.createOscillator();s.type=l===2?"square":"sawtooth",s.frequency.value=c,s.connect(n),s.start()}),n.connect(q),q.connect(y)}q.gain.setTargetAtTime(i*.03,e.currentTime,.2)}},click(i,n){if(!e||i<.01)return;let c=e.currentTime,l=e.createBufferSource();l.buffer=a(.05);let s=e.createBiquadFilter();s.type="bandpass",s.frequency.value=n?1900:3100,s.Q.value=2.5;let _=e.createGain();o(_,c,8e-4,.55*i,.035),l.connect(s),s.connect(_),_.connect(y),l.start(c);let p=e.createOscillator();p.type="triangle",p.frequency.setValueAtTime(n?210:340,c),p.frequency.exponentialRampToValueAtTime(n?90:160,c+.06);let m=e.createGain();o(m,c,.001,(n?.32:.2)*i,.08),p.connect(m),m.connect(y),p.start(c),p.stop(c+.15);let v=e.createBufferSource();v.buffer=a(.03);let f=e.createBiquadFilter();f.type="bandpass",f.frequency.value=4200,f.Q.value=3;let h=e.createGain();o(h,c+.055,8e-4,.22*i,.025),v.connect(f),f.connect(h),h.connect(y),v.start(c+.055)},stop(){if(q&&(q.gain.value=0),q=null,u&&(u.gain.value=0),w&&(w.gain.value=0),y)try{y.disconnect()}catch(i){}e=null,u=w=y=null}}}var Oo=`
.red-sub {
	position: fixed; left: 50%; bottom: 9vh; transform: translateX(-50%); z-index: 406;
	width: min(92vw, 900px); text-align: center; pointer-events: none;
	font: italic 400 clamp(19px, 2.5vw, 32px)/1.35 'Cormorant Garamond', Georgia, serif;
	color: #f1e7dc; letter-spacing: .035em; text-shadow: 0 2px 18px rgba(0,0,0,.9), 0 0 2px rgba(0,0,0,.8);
	opacity: 0;
}`;Xt.exports=function(u){u=u||{};let w=Po(),y=w.length-1,q=w.map((S,F)=>S.pass?-1:F).filter(S=>S>=0),a=(S,F)=>{if(F>=0){for(let D of q)if(D>=S-.06)return D;return q[q.length-1]}for(let D=q.length-1;D>=0;D--)if(q[D]<=S+.06)return q[D];return q[0]},r=(S,F)=>{if(F>0){for(let D of q)if(D>S+.01)return D;return q[q.length-1]}for(let D=q.length-1;D>=0;D--)if(q[D]<S-.01)return q[D];return q[0]},o=null,i=null,n=0,c=0,l=0,s=null,_=null,p=0,m=$o(),v={phase:0,period:1.2,beat:0},f=0;w0.onClick(S=>m.click(f,S));let h=document.createElement("div");h.className="red-sub",h.textContent=Io;let T=document.createElement("style");T.textContent=Oo,document.head.appendChild(T),document.body.appendChild(h);let g=0,x=0,N=null,k=-10,$=0,V=null,P=1,K=-10,e0=[],X=(S,F,D)=>{window.addEventListener(S,F,D),e0.push([S,F,D])},p0=S=>{let F=Math.sign(S);if(!(!F||s!==null)){if(F>0&&x>=y-.001&&g>y-.08||F<0&&c>0){let D=c<1?2.2:.75;c=Math.max(0,Math.min(2.4,c+Math.max(-.2,Math.min(.13,S))*D)),k=$,K=$,P=F;return}F!==P&&$-K<.25&&Math.abs(S)<.02||(F!==P&&(P=F),K=$,x=Math.max(0,Math.min(y,x+S)),k=$)}},s0=S=>{if(s===null){if(S>0&&x>=y-.001||S<0&&c>0){p0(S>0?.12:-.12);return}P=S>0?1:-1,x=r(x,S),k=$-10}};X("pointerdown",()=>m.start()),X("keydown",()=>m.start()),X("touchend",()=>m.start()),X("wheel",S=>{if(S.target.closest&&S.target.closest(".st-ui"))return;S.preventDefault();let F=S.deltaMode===1?S.deltaY*16:S.deltaMode===2?S.deltaY*window.innerHeight:S.deltaY;p0(Math.max(-.6,Math.min(.6,F/700)))},{passive:!1});let n0=null;X("pointerdown",S=>{S.target.closest&&S.target.closest("button, a, .st-ui")||(n0={lx:S.clientX,ly:S.clientY,moved:0,t:performance.now()})}),X("pointermove",S=>{if(!n0)return;let F=S.clientX-n0.lx,D=S.clientY-n0.ly;n0.lx=S.clientX,n0.ly=S.clientY;let Y=Math.abs(D)>=Math.abs(F)?-D:-F;n0.moved+=Math.abs(Y),n0.moved>6&&p0(Y/(window.innerHeight*.55))}),X("pointerup",()=>{let S=n0;n0=null,S&&S.moved<8&&performance.now()-S.t<450&&s0(1)}),X("keydown",S=>{S.key==="ArrowDown"||S.key==="ArrowRight"||S.key==="PageDown"||S.key===" "?s0(1):(S.key==="ArrowUp"||S.key==="ArrowLeft"||S.key==="PageUp")&&s0(-1)});function x0(S){$=S,V===null&&(V=S);let F=N===null?0:Math.min(.1,S-N);N=S,typeof window!="undefined"&&window.__redShot!==void 0&&/tourdebug/.test(location.search)&&(g=x=window.__redShot,o=null),typeof window!="undefined"&&window.__press!==void 0&&/tourdebug/.test(location.search)&&(c=n=window.__press),$-k>.35&&(x+=(a(x,P)-x)*(1-Math.exp(-F*2))),g+=(x-g)*(1-Math.exp(-F*1.7)),Math.abs(x-g)<1e-4&&(g=x);let D=window.innerWidth<window.innerHeight,Y=w.map(t0=>D&&t0.p?Object.assign({},t0,t0.p):t0),R0=Math.min(y-1,Math.floor(g)),W0=g-R0,ze=W0*W0*(3-2*W0),h0=Ut(Y.map(t0=>t0.eye),g),T0=Ut(Y.map(t0=>t0.at),g);(!o||F===0||F>.09)&&(o=h0.slice(),i=T0.slice());let o0=1-Math.exp(-F*5);for(let t0=0;t0<3;t0++)o[t0]+=(h0[t0]-o[t0])*o0,i[t0]+=(T0[t0]-i[t0])*o0;h0=o.slice(),T0=i.slice();let he=Y[R0],Ae=Y[Math.min(y,R0+1)],Le=dt(he.fov,Ae.fov,ze),Pe=dt(he.dof,Ae.dof,ze);$-k>2.2&&s===null&&(c=Math.max(0,c-F*.14));let te=n<1?.9:.55;n+=Math.max(-te*F*2,Math.min(te*F,c-n)),n>2.08&&s===null&&(s=S,m.burst());let oe=_e(n),U0=_e(n-1),ve=Math.min(10,Math.max(0,(n-1)*10.5));if(Math.floor(ve)>l&&(m.tick(),navigator.vibrate))try{navigator.vibrate(28)}catch(t0){}l=Math.floor(ve);let z0=s===null?0:_e((S-s)/2.3);typeof window!="undefined"&&window.__xk!==void 0&&/tourdebug/.test(location.search)&&(z0=window.__xk);let Me=Q0(oe)*.28+U0*.06;h0=[h0[0]+mt*Me,h0[1]-Me*.08,h0[2]+gt*Me];let Te=oe*.004+U0*.008+z0*.05;h0[0]+=Math.sin(S*37)*Te,h0[1]+=Math.sin(S*41+1)*Te;let de=g>Ie-.35?1:0;de&&!p&&(p=1,_=S,m.clunk()),!de&&p&&g<Ie-.8&&(p=0);let ue=0;if(p){let t0=S-_;ue=t0<.75?[0,1,.15,.9,.3,1][Math.min(5,Math.floor(t0/.125))]:1}let et=Math.sin(S*13)*Math.sin(S*5.3);ue*=1-(oe*.25+U0*.3)*(et>.6?1:0)-z0*(Math.sin(S*60)>0?.8:0),w0.setSpot(Math.max(0,ue));{let t0=h0,P0=Math.hypot(t0[0]-Je[0],t0[2]-Je[2]),se=dt(.68,1.35,_e((P0-1.5)/12));v.phase+=F/v.period,v.period=se;let G0=1e9,X0=w0.ROOM.CABLE.path;for(let re=0;re<X0.length;re+=6){let ge=Math.hypot(t0[0]-X0[re][0],t0[1]-X0[re][1],t0[2]-X0[re][2]);ge<G0&&(G0=ge)}let $0=1/(1+G0*G0*.18);Math.floor(v.phase)>v.beat&&(v.beat=Math.floor(v.phase),m.beat($0*(1-z0))),m.buzz((.25+$0)*(1-z0)),w0.setPulse(v.phase,v.period);let me=Math.hypot(t0[0]-H0,t0[1]-Kt,t0[2]-fe);f=(1-z0)/(1+me*me*.05)}w0.setWarn({s:Q0((n-.12)/.45),n:ve,glitch:Q0(z0*1.6),freeze:n>.15}),h.style.opacity=String(Q0((n-.35)/.4)*(1-Q0((z0-.1)/.3))*(.88+.12*Math.sin(S*2))),m.set(Q0(oe)*(1-z0)+U0*.5,Q0((n-.12)/.45)*(1-z0*.5)),s!==null&&z0>=1&&(u.onExpel?u.onExpel():d0(),s=null);let S0=typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:S,$e=Math.hypot(T0[0]-h0[0],T0[1]-h0[1],T0[2]-h0[2]),ae=.01+.03*Math.min(1,$e/6);h0=[h0[0]+Math.sin(S0*.31)*ae,h0[1]+Math.sin(S0*.43+1)*ae*.6,h0[2]+Math.cos(S0*.27)*ae],T0=[T0[0]+Math.sin(S0*.21+2)*ae*.8,T0[1]+Math.sin(S0*.37)*ae*.5,T0[2]];let a0=Wt(h0),K0=Wt(T0),ne=Math.max(1-_e((S-V-.3)/1.8),Q0((z0-.82)/.18));return w0.setViewer(a0),{eye:a0,target:K0,fov:Le,roll:Math.sin(S0*.17)*.004,moving:!0,look:{letterbox:.45,focus:$e,aperture:Pe,vignette:.3+oe*.25,exposure:1.45,shafts:1,fade:ne,fadeColor:[0,0,0],glitch:Q0((z0-.25)/.6)*.9+U0*.06}}}function d0(){n=c=0,l=0,s=null,p=0,g=x=0,o=null,V=null,w0.setWarn({s:0,n:0,glitch:0,freeze:!1}),w0.setSpot(0)}function g0(){for(let[S,F,D]of e0)window.removeEventListener(S,F,D);e0.length=0,m.stop(),h.remove(),T.remove(),w0.setWarn({s:0,n:0,glitch:0,freeze:!1}),w0.setSpot(0),w0.setViewer(null),w0.onClick(null)}return/tourdebug/.test(location.search)&&(window.__redTourInfo={END:y,REVEAL:Ie,STOPS:q}),{update:x0,tap:()=>s0(1),dispose:g0,placeFlower(){},startSound:()=>m.start(),get scroll(){return g},END:y,REVEAL:Ie}}});window.__redRoom={studio:ht(),tour:Yt()};})();

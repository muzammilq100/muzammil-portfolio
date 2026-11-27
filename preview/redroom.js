"use strict";(()=>{var Ge=(e,u)=>()=>(u||e((u={exports:{}}).exports,u),u.exports);var ht=Ge((so,pt)=>{"use strict";var W0=[-90,0,0],je=16,We=27.5,He=11.6;pt.exports={O:W0,W:je,L:We,RIDGE:He,BOX:[W0[0]-.8,0,W0[2]-11.5,W0[0]+je+.8,He+.5,W0[2]+We+.8],AIR_BOX:[W0[0],0,W0[2],W0[0]+je,He,W0[2]+We]}});var Xe=Ge((ro,Ke)=>{"use strict";var{O:A,W:S,L:U}=ht(),p=e=>(+e).toFixed(4),r0=10.5,Ne=.7,vt=3,j={hw:1.25,sill:1.35,spring:6.9,n:4,step:6.35};j.z0=U/2-j.step*(j.n-1)/2;j.apex=j.spring+j.hw*Math.sqrt(3);var Ee=e=>j.z0+j.step*e;j.leftFrom=2;var o0=(()=>{let u=j.z0,g={k:1.42,z:u,top:.543*1.42,half:.601*1.42,depth:.706*1.42};return g.x=S-.12-g.depth/2,g.candles=[[S-.4,u-.52,1],[S-.3,u-.3,.62],[S-.36,u+.42,.38],[S-.86,u-.06,.55],[S-.24,u+.66,.85],[S-.8,u+.42,.3]],g.vase={x:S-.55,z:u+.06,h:.24},g.flames=g.candles.map(([y,R,n])=>[y,g.top+.156+.144*n+.018,R]),g.laid=[[S-.66,u-.22,Math.PI/2+.5],[S-.62,u-.36,Math.PI/2+.15],[S-.7,u+.26,Math.PI/2-.6]],g.stack=[S-.88,u-.5],g.occ=[[S-.55,g.top+.46,u+.06,.15],[S-.55,g.top+.26,u+.06,.06],[S-.55,g.top+.11,u+.06,.08],...g.laid.map(([y,R,n])=>[y-Math.sin(n)*.15,g.top+.05,R-Math.cos(n)*.15,.065])],g})(),Ot="LEAVEHERBE",xe={k:0},S0={s:0,n:0,glitch:0,freeze:!1,frozenAt:null},Ae={phase:0,period:1.2},Fe={click:null},gt={eye:null},Dt=()=>{let e=gt.eye;return e?(e[0]-A[0]-c0.x)*Math.sin(c0.yaw)+(e[2]-A[2]-c0.z)*Math.cos(c0.yaw)>-.25:!1};j.lowSill=o0.top+.06;var c0={x:S/2,z:18.6,k:1.3};c0.yaw=Math.atan2(S/2-c0.x,21.2-c0.z);{let e=Math.sin(c0.yaw),u=Math.cos(c0.yaw),g=(y,R,n)=>[c0.x+e*y,R,c0.z+u*y,n];c0.occ=[g(0,1.17,.13),g(-.02,.86,.22),g(.1,.42,.36),g(-.3,.62,.17)]}var s0=(()=>{let e=Math.sin(c0.yaw),u=Math.cos(c0.yaw),g=[c0.x-e*1.4,8.4,c0.z-u*1.4],y=[c0.x+e*.25,.55,c0.z+u*.25],R=[y[0]-g[0],y[1]-g[1],y[2]-g[2]],n=Math.hypot(...R);return{pos:g,axis:R.map(r=>r/n),inner:.115,outer:.17,reach:n}})(),Q=[];for(let e=0;e<=j.n;e++)Q.push(j.z0+j.step*(e-.5));var _0={hw:.75,h:2.6,depth:.7},I0={hw:1.8,h:3.6,z:-11,sign:[S/2,_0.h+.32,-_0.depth-.05],open:2.2},J={z:21.2,G:2.4,models:{sony:{file:"res/redroom/tv_sony.bin",tex:3,w:.36,h:.341,d:.455,dark:.55},crt:{file:"res/redroom/tv_crt.bin",tex:3,w:.47,h:.454,d:.389,dark:.9},old:{file:"res/redroom/tv_old.bin",tex:1,w:.62,h:.418,d:.416,dark:.75}}};J.stack=[["old",0,-1.41,2,.04],["crt",0,.05,-1,-.02],["sony",0,1.24,-2,.06],["crt",1,-1.16,3,.02],["sony",1,-.03,-1,.04],["crt",1,1.14,-3,.06],["sony",2,-.73,2,.06],["old",2,.66,-2,.03],["crt",0,-2.78,3,.08],["sony",1,-2.68,4,.1],["old",0,2.5,-3,.08],["sony",1,2.32,-4,.1]];var Ct={sony:[0,.194],crt:[0,.27],old:[.0625,.2145]};(()=>{let e=[];for(let u of J.stack){let g=J.models[u[0]],y=u[1],R=u[2],n=g.w*J.G,r=0;for(let a of e)a.row>=y||Math.abs(a.dx-R)<(a.w+n)/2*.92&&(r=Math.max(r,a.top));e.push({dx:R,row:y,w:n,top:r+g.h*J.G*.99}),u.base=r;let o=Ct[u[0]],c=u[3]*Math.PI/180;u.screen=[S/2+R+o[0]*J.G,r+o[1]*J.G,J.z+u[4]],u.facing=[-Math.sin(c),0,-Math.cos(c)],u.size=g.w*J.G}})();J.letters=(()=>{let e=[1,0].map(g=>J.stack.map((y,R)=>[R,y]).filter(([,y])=>y[1]===g).sort((y,R)=>R[1].screen[0]-y[1].screen[0]).map(([y])=>y)),u=J.stack.map(()=>-1);return[...e[0],...e[1]].forEach((g,y)=>{u[g]=y}),u})();var Ie={x0:.3,x1:.56,z0:12.38,z1:12.7,h:.055},V=(()=>{let e={top:.92,depth:.78};return e.a=[Q[0]+.7,Q[1]-.55],e.b=[Q[1]+.55,Q[2]-.7],e.basin={x0:.08,x1:e.depth-.07,z0:e.a[0]+.1,z1:e.a[1]-.1,floor:e.top-.1},e.TX=.44,e.TZ=.54,e.TH=.075,e.TXc=(e.basin.x0+e.basin.x1)/2,e.trays=[e.a[0]+1.1,e.a[0]+1.72,e.a[0]+2.34],e.liquid=e.basin.floor+.05,e.bulb=[e.TXc+.02,1.39,e.trays[0]+.05],e.tube={x:.07,y:3.05,z0:e.b[0]+.2,z1:e.b[1]-.2},e.cam={x:.43,y:e.basin.floor,z:e.trays[0]-e.TZ/2-.3},e.lines=[[.32,2.74,Q[0],Q[1],.12],[.74,2.52,Q[0],Q[1],.17],[1.1,2.62,Q[0],Q[1],.2],[.3,2.76,Q[1],Q[2],.15],[.68,2.46,Q[1],Q[2],.19],[1.06,2.66,Q[1],Q[2],.22],[.5,1.98,Q[1],Q[2],.12],[.45,2.98,Q[0],Q[1],.1,1.45],[1.45,2.4,Q[0],Q[1],.2],[.95,2.26,Q[0],Q[1],.13,.4],[1.4,3,Q[1],Q[2],.14,.45],[1.5,2.36,Q[1],Q[2],.22],[.9,2.2,Q[1],Q[2],.15,1.35]],e})(),C=(()=>{let e={x:S/2-.006,z:14.92,tableK:1.25,pitch:.1};e.table=.761*e.tableK,e.feed=[.0254,.7696,.3364],e.takeup=[.0252,.2484,.337],e.lensL=[.006,.456,.15];let u=Math.cos(e.pitch),g=Math.sin(e.pitch),y=e.lensL;return e.lens=[e.x+y[0],e.table+y[1]*u+y[2]*g,e.z-y[1]*g+y[2]*u],e.img={x:S/2,y:6,w:6.4},e.img.h=e.img.w*.75,e})(),f0={x0:4.2,x1:11.8,y:9,z:U-.16},R0={r:.045};(()=>{let e=R0.r,u=V.depth,g=V.b[1]-.22;R0.socket=[u,.3,g],R0.ctrl=[[u+.1,.3,g],[u+.2,.295,g],[u+.3,.22,g+.02],[u+.42,e,g+.1],[u+.8,e,g+.3],[1.8,e,g+.45],[3.4,e,g+.1],[5.2,e,g-.55],[7.2,e,g-.95],[9.4,e,g-.9],[11.4,e,g-.45],[13.2,e,g+.1],[S-1.15,e,g+.55],[S-.85,e,g+1.05],[S-.85,e,15.2],[S-1.1,e,16.3],[S-1.7,e,17.2],[S-2.5,e,17.9],[12.9,e,18.5],[11.5,e,18.9],[10.6,e,19.5],[10.5,e,20.3],[11.2,e,20.5],[10.9,e,19.95],[10,e*2.2,20.1],[9.3,e,20.75],[9.5,e,21.9],[8.6,e,22.25],[8.1,.22,21.95]];let y=R0.ctrl,R=[];for(let o=0;o<y.length-1;o++){let c=y[Math.max(0,o-1)],a=y[o],i=y[o+1],l=y[Math.min(y.length-1,o+2)],s=Math.max(2,Math.ceil(Math.hypot(i[0]-a[0],i[1]-a[1],i[2]-a[2])/.06));for(let w=0;w<s;w++){let f=w/s,m=f*f,d=m*f;R.push([0,1,2].map(v=>.5*(2*a[v]+(-c[v]+i[v])*f+(2*c[v]-5*a[v]+4*i[v]-l[v])*m+(-c[v]+3*a[v]-3*i[v]+l[v])*d)))}}R.push(y[y.length-1].slice());for(let o of R)o[1]<e&&o[2]>-1.4&&(o[1]=e);R0.path=R;let n=R.findIndex(o=>o[1]<=e*1.01),r=R.findIndex((o,c)=>c>n&&o[0]>S-1.3);R0.run=[n,r]})();var X0={spots:[],w:.36,h:.435,n:55,lines:[{z:U-1.7,y:6.5,sag:1},{z:U-2.6,y:5.3,sag:.8}]},q0=(()=>{let e=[-.62,.75,-.16],u=Math.hypot(...e);return e.map(g=>g/u)})(),ee=(()=>{let e=S/2;return(e*e+vt*vt)/(2*e)})(),J0=e=>{let u=e<=S/2?e:S-e;return r0+Math.sqrt(Math.max(0,ee*ee-(u-ee)*(u-ee)))},L={FLOOR:0,WALL:1,REVEAL:2,GLASS:3,VAULT:4,TRIM:5,VOID:6,TUBE:7,CABLE:8,TILE:9,STEEL:10,PEG:11,CONC:12,CFLOOR:13,DOOR:14,MAINCABLE:15};function xt(){let e=[],u=[],g=[],y=[],R=[],n={pos:e,nrm:u,kind:g,uv:y,idx:R,v(r,o,c,a){return e.push(r[0]+A[0],r[1]+A[1],r[2]+A[2]),u.push(o[0],o[1],o[2]),g.push(c),y.push(a?a[0]:0,a?a[1]:0),e.length/3-1},quad(r,o,c,a,i,l,s,w,f,m){let d=n.v(r,i,l,s),v=n.v(o,i,l,w),h=n.v(c,i,l,f),k=n.v(a,i,l,m);R.push(d,v,h,d,h,k)},box(r,o,c,a,i,l,s){n.quad([r,o,l],[a,o,l],[a,i,l],[r,i,l],[0,0,1],s),n.quad([a,o,c],[r,o,c],[r,i,c],[a,i,c],[0,0,-1],s),n.quad([a,o,l],[a,o,c],[a,i,c],[a,i,l],[1,0,0],s),n.quad([r,o,c],[r,o,l],[r,i,l],[r,i,c],[-1,0,0],s),n.quad([r,i,l],[a,i,l],[a,i,c],[r,i,c],[0,1,0],s),n.quad([r,o,c],[a,o,c],[a,o,l],[r,o,l],[0,-1,0],s)},cyl(r,o,c,a,i,l,s){s=s||18;for(let w=0;w<s;w++){let f=w/s*Math.PI*2,m=(w+1)/s*Math.PI*2,d=[Math.sin(f),0,Math.cos(f)],v=[Math.sin(m),0,Math.cos(m)],h=(q,P)=>[r+q[0]*c,P,o+q[2]*c],k=n.v(h(d,a),d,l),_=n.v(h(v,a),v,l),x=n.v(h(v,i),v,l),N=n.v(h(d,i),d,l);R.push(k,_,x,k,x,N)}}};return n}function g0(e,u,g,y,R,n){let r=null,o=null,c=[];for(let a=0;a<u.length;a++){let i=u[Math.max(0,a-1)],l=u[Math.min(u.length-1,a+1)],s=[l[0]-i[0],l[1]-i[1],l[2]-i[2]],w=Math.hypot(...s)||1;s=s.map(h=>h/w),o||(o=Math.abs(s[1])<.9?[0,1,0]:[1,0,0]);let f=o[0]*s[0]+o[1]*s[1]+o[2]*s[2];o=[o[0]-s[0]*f,o[1]-s[1]*f,o[2]-s[2]*f];let m=Math.hypot(...o)||1;o=o.map(h=>h/m);let d=[s[1]*o[2]-s[2]*o[1],s[2]*o[0]-s[0]*o[2],s[0]*o[1]-s[1]*o[0]],v=[];for(let h=0;h<y;h++){let k=h/y*Math.PI*2,_=Math.cos(k),x=Math.sin(k),N=[o[0]*_+d[0]*x,o[1]*_+d[1]*x,o[2]*_+d[2]*x];v.push(e.v([u[a][0]+N[0]*g,u[a][1]+N[1]*g,u[a][2]+N[2]*g],N,R,[n?n[a]:a,h]))}if(r)for(let h=0;h<y;h++){let k=(h+1)%y;e.idx.push(r[h],r[k],v[k],r[h],v[k],v[h])}r=v,c.push(v)}}var Ue=(e,u)=>[e[0]+((e[5]===void 0?e[0]:e[5])-e[0])*u,e[1]-e[4]*4*u*(1-u),e[2]+.35+(e[3]-e[2]-.7)*u];function dt(e,u,g){let y=[[-e,u],[-e,g]],R=2*e,n=14;for(let r=1;r<=n;r++){let o=Math.PI-r/n*(Math.PI/3);y.push([e+R*Math.cos(o),g+R*Math.sin(o)])}for(let r=1;r<=n;r++){let o=Math.PI/3-r/n*(Math.PI/3);y.push([-e+R*Math.cos(o),g+R*Math.sin(o)])}return y.push([e,u]),y}function ut(e,u,g,y,R,n,r){let o=R?u.length:u.length-1;for(let c=0;c<o;c++){let a=u[c],i=u[(c+1)%u.length],l=i[0]-a[0],w=-(i[1]-a[1]),f=l,m=Math.hypot(w,f)||1;w/=m,f/=m;let d=(a[0]+i[0])/2-r[0],v=(a[1]+i[1])/2-r[1];w*d+f*v>0&&(w=-w,f=-f);let h=y(w,f,0,!0);e.quad(y(a[0],a[1],0),y(i[0],i[1],0),y(i[0],i[1],g),y(a[0],a[1],g),h,n,[a[0],a[1]],[i[0],i[1]],[i[0],i[1]],[a[0],a[1]])}}function Vt(){let e=xt();e.quad([0,0,0],[0,0,U],[S,0,U],[S,0,0],[0,1,0],L.FLOOR),e.quad([0,0,U],[0,0,0],[0,r0,0],[0,r0,U],[1,0,0],L.WALL,[U,0],[0,0],[0,r0],[U,r0]),e.quad([S,0,0],[S,0,U],[S,r0,U],[S,r0,0],[-1,0,0],L.WALL,[0,0],[U,0],[U,r0],[0,r0]);let u=24;for(let n of[0,1]){let r=n?U:0,o=[0,0,n?-1:1];for(let c=0;c<u;c++){let a=c/u*S,i=(c+1)/u*S,l=[a,0,r],s=[i,0,r],w=[i,J0(i),r],f=[a,J0(a),r];n?e.quad(s,l,f,w,o,L.WALL,[i,0],[a,0],[a,f[1]],[i,w[1]]):e.quad(l,s,w,f,o,L.WALL,[a,0],[i,0],[i,w[1]],[a,f[1]])}}let g=40;for(let n=0;n<g;n++){let r=n/g*S,o=(n+1)/g*S,c=J0(r),a=J0(o),i=(v,h)=>{let k=v<=S/2?v:S-v,_=(ee-k)/ee,x=(r0-h)/ee;return v>S/2&&(_=-_),[_,x,0]},l=i(r,c),s=i(o,a),w=e.v([r,c,0],l,L.VAULT,[r,0]),f=e.v([o,a,0],s,L.VAULT,[o,0]),m=e.v([o,a,U],s,L.VAULT,[o,U]),d=e.v([r,c,U],l,L.VAULT,[r,U]);e.idx.push(w,f,m,w,m,d)}let y=dt(j.hw,j.sill,j.spring),R=dt(j.hw,j.lowSill,j.spring);for(let n=0;n<j.n;n++){let r=n===0?j.lowSill:j.sill,o=Ee(n),c=n>=j.leftFrom;c&&ut(e,y,Ne,(f,m,d,v)=>v?[0,m,f]:[-d,m,o+f],!0,L.REVEAL,[0,(j.sill+j.apex)/2]),ut(e,n===0?R:y,Ne,(f,m,d,v)=>v?[0,m,f]:[S+d,m,o+f],!0,L.REVEAL,[0,(r+j.apex)/2]);let a=Ne*.55,i=j.sill-.02,l=j.apex+.02,s=j.hw+.02;c&&e.quad([-a,i,o+s],[-a,i,o-s],[-a,l,o-s],[-a,l,o+s],[1,0,0],L.GLASS,[s,i],[-s,i],[-s,l],[s,l]);let w=r-.02;e.quad([S+a,w,o-s],[S+a,w,o+s],[S+a,l,o+s],[S+a,l,o-s],[-1,0,0],L.GLASS,[-s,w],[s,w],[s,l],[-s,l]),c&&e.box(-.02,j.sill-.12,o-j.hw-.18,.12,j.sill,o+j.hw+.18,L.TRIM),e.box(S-.12,r-(n===0?.05:.12),o-j.hw-.18,S+.02,r,o+j.hw+.18,L.TRIM)}{let n=S/2-_0.hw,r=S/2+_0.hw,o=_0.h,c=_0.depth;e.quad([n,0,-c],[n,0,0],[n,o,0],[n,o,-c],[1,0,0],L.REVEAL),e.quad([r,0,0],[r,0,-c],[r,o,-c],[r,o,0],[-1,0,0],L.REVEAL),e.quad([n,o,0],[r,o,0],[r,o,-c],[n,o,-c],[0,-1,0],L.REVEAL),e.quad([n,.001,-c],[r,.001,-c],[r,.001,0],[n,.001,0],[0,1,0],L.CFLOOR);let a=S/2-I0.hw,i=S/2+I0.hw,l=I0.h,s=I0.z;e.quad([a,0,s],[a,0,-c],[i,0,-c],[i,0,s],[0,1,0],L.CFLOOR),e.quad([a,0,-c],[a,0,s],[a,l,s],[a,l,-c],[1,0,0],L.CONC,[-c,0],[s,0],[s,l],[-c,l]),e.quad([i,0,s],[i,0,-c],[i,l,-c],[i,l,s],[-1,0,0],L.CONC,[s,0],[-c,0],[-c,l],[s,l]),e.quad([a,l,s],[a,l,-c],[i,l,-c],[i,l,s],[0,-1,0],L.CONC,[s,0],[-c,0],[-c,1],[s,1]),e.quad([i,0,s],[a,0,s],[a,l,s],[i,l,s],[0,0,1],L.CONC,[0,0],[1,0],[1,l],[0,l]);let w=-c;e.quad([a,0,w],[n,0,w],[n,l,w],[a,l,w],[0,0,-1],L.CONC,[a,0],[n,0],[n,l],[a,l]),e.quad([r,0,w],[i,0,w],[i,l,w],[r,l,w],[0,0,-1],L.CONC,[r,0],[i,0],[i,l],[r,l]),e.quad([n,o,w],[r,o,w],[r,l,w],[n,l,w],[0,0,-1],L.CONC,[n,o],[r,o],[r,l],[n,l]);let f=n,m=w-.01,d=I0.open,v=_0.hw*2-.04,h=.045,k=[Math.cos(d),0,-Math.sin(d)],_=[Math.sin(d),0,Math.cos(d)],x=($,K,e0)=>[f+k[0]*$+_[0]*e0,K,m+k[2]*$+_[2]*e0],N=.012,q=o-.02;e.quad(x(0,N,h),x(v,N,h),x(v,q,h),x(0,q,h),_,L.DOOR),e.quad(x(v,N,0),x(0,N,0),x(0,q,0),x(v,q,0),_.map($=>-$),L.DOOR),e.quad(x(v,N,h),x(v,N,0),x(v,q,0),x(v,q,h),k,L.DOOR),e.quad(x(0,q,h),x(v,q,h),x(v,q,0),x(0,q,0),[0,1,0],L.DOOR);let P=x(v-.09,1.02,h+.03);g0(e,[x(v-.09,1.02,h),P,[P[0]-k[0]*.12,P[1],P[2]-k[2]*.12]],.011,6,L.STEEL);let G=I0.sign;e.box(G[0]-.33,G[1]-.12,G[2]-.02,G[0]+.33,G[1]+.12,w,L.TRIM)}for(let n of Q){for(let a of[.2,S-.2])e.box(a-.42,0,n-.42,a+.42,.5,n+.42,L.TRIM),e.cyl(a,n,.27,.5,r0-.55,L.TRIM),e.cyl(a+(a<S/2?.2:-.2),n-.36,.1,.5,r0-.55,L.TRIM,10),e.cyl(a+(a<S/2?.2:-.2),n+.36,.1,.5,r0-.55,L.TRIM,10),e.box(a-.45,r0-.55,n-.5,a+.45,r0-.25,n+.5,L.TRIM);let r=40,o=.22,c=.22;for(let a=0;a<r;a++){let i=a/r*S,l=(a+1)/r*S,s=J0(i),w=J0(l),f=[S/2-i,-(s-r0+2),0],m=[S/2-l,-(w-r0+2),0],d=x=>{let N=Math.hypot(x[0],x[1])||1;return[x[0]/N,x[1]/N,0]},v=d(f),h=d(m),k=[i+v[0]*c,s+v[1]*c],_=[l+h[0]*c,w+h[1]*c];e.quad([k[0],k[1],n-o],[_[0],_[1],n-o],[_[0],_[1],n+o],[k[0],k[1],n+o],v,L.TRIM),e.quad([i,s,n-o],[l,w,n-o],[_[0],_[1],n-o],[k[0],k[1],n-o],[0,0,-1],L.TRIM),e.quad([l,w,n+o],[i,s,n+o],[k[0],k[1],n+o],[_[0],_[1],n+o],[0,0,1],L.TRIM)}}{let n=V,r=n.top,o=n.basin,c=(f,m,d)=>{if(e.box(0,0,f,n.depth-.06,.12,m,L.TRIM),e.quad([n.depth,.12,f],[n.depth,.12,m],[n.depth,r,m],[n.depth,r,f],[1,0,0],L.TILE,[f,.12],[m,.12],[m,r],[f,r]),e.quad([0,.12,f],[n.depth,.12,f],[n.depth,r,f],[0,r,f],[0,0,-1],L.TILE,[0,.12],[n.depth,.12],[n.depth,r],[0,r]),e.quad([n.depth,.12,m],[0,.12,m],[0,r,m],[n.depth,r,m],[0,0,1],L.TILE,[n.depth,.12],[0,.12],[0,r],[n.depth,r]),!d){e.quad([0,r,f],[0,r,m],[n.depth,r,m],[n.depth,r,f],[0,1,0],L.TILE,[0,f],[0,m],[n.depth,m],[n.depth,f]);return}let v=(h,k,_,x)=>e.quad([h,r,_],[h,r,x],[k,r,x],[k,r,_],[0,1,0],L.TILE,[h,_],[h,x],[k,x],[k,_]);v(0,o.x0,f,m),v(o.x1,n.depth,f,m),v(o.x0,o.x1,f,o.z0),v(o.x0,o.x1,o.z1,m),e.quad([o.x0,o.floor,o.z0],[o.x0,o.floor,o.z1],[o.x1,o.floor,o.z1],[o.x1,o.floor,o.z0],[0,1,0],L.TILE,[o.x0,o.z0],[o.x0,o.z1],[o.x1,o.z1],[o.x1,o.z0]),e.quad([o.x0,o.floor,o.z1],[o.x0,o.floor,o.z0],[o.x0,r,o.z0],[o.x0,r,o.z1],[1,0,0],L.TILE,[o.z1,o.floor],[o.z0,o.floor],[o.z0,r],[o.z1,r]),e.quad([o.x1,o.floor,o.z0],[o.x1,o.floor,o.z1],[o.x1,r,o.z1],[o.x1,r,o.z0],[-1,0,0],L.TILE,[o.z0,o.floor],[o.z1,o.floor],[o.z1,r],[o.z0,r]),e.quad([o.x0,o.floor,o.z0],[o.x1,o.floor,o.z0],[o.x1,r,o.z0],[o.x0,r,o.z0],[0,0,1],L.TILE,[o.x0,o.floor],[o.x1,o.floor],[o.x1,r],[o.x0,r]),e.quad([o.x1,o.floor,o.z1],[o.x0,o.floor,o.z1],[o.x0,r,o.z1],[o.x1,r,o.z1],[0,0,-1],L.TILE,[o.x1,o.floor],[o.x0,o.floor],[o.x0,r],[o.x1,r])};c(n.a[0],n.a[1],!0),c(n.b[0],n.b[1],!1);for(let[f,m]of[n.a,n.b])e.quad([.012,r,m],[.012,r,f],[.012,r+.62,f],[.012,r+.62,m],[1,0,0],L.TILE,[m,r],[f,r],[f,r+.62],[m,r+.62]);let a=f=>{let m=o.floor+.004,d=m+n.TH,v=n.TX/2,h=n.TZ/2,k=.02,_=n.TXc,x=[[_-v+k,f-h+k],[_+v-k,f-h+k],[_+v-k,f+h-k],[_-v+k,f+h-k]],N=[[_-v,f-h],[_+v,f-h],[_+v,f+h],[_-v,f+h]];e.quad([x[0][0],m,x[0][1]],[x[3][0],m,x[3][1]],[x[2][0],m,x[2][1]],[x[1][0],m,x[1][1]],[0,1,0],L.STEEL);for(let q=0;q<4;q++){let P=(q+1)%4,G=[x[q][0],m,x[q][1]],$=[x[P][0],m,x[P][1]],K=[N[P][0],d,N[P][1]],e0=[N[q][0],d,N[q][1]],X=(x[q][0]+x[P][0])/2-_,l0=(x[q][1]+x[P][1])/2-f,n0=Math.hypot(X,l0)||1;e.quad(G,$,K,e0,[-X/n0*.95,.3,-l0/n0*.95],L.STEEL),e.quad($,G,[e0[0],m+.001,e0[2]],[K[0],m+.001,K[2]],[X/n0,0,l0/n0],L.STEEL)}g0(e,[...N,N[0]].map(q=>[q[0],d+.004,q[1]]),.005,5,L.STEEL)};for(let f of n.trays)a(f);let i=(f,m,d,v,h,k)=>{for(let _ of[-.012,.012])g0(e,[[f,h,m+_],[(f+d)/2,(h+k)/2+.006,(m+v)/2+_*.6],[d,k,v+_*.2]],.0045,5,L.PEG)};i(n.TXc+.05,n.trays[0]+.12,n.TXc+.27,n.trays[0]+.42,n.liquid-.005,n.top+.03),i(n.TXc-.1,n.trays[2]-.2,n.TXc+.24,n.trays[2]-.05,n.liquid+.002,n.liquid+n.TH*.9);let l=o.z1-.3;g0(e,[[0,1.32,l],[.18,1.32,l],[.27,1.3,l],[.32,1.22,l],[.33,1.12,l]],.016,8,L.STEEL),e.box(0,1.27,l-.05,.05,1.37,l+.05,L.STEEL);let s=V.bulb;g0(e,[[0,2.32,s[2]],[s[0]*.6,2.32,s[2]],[s[0],2.28,s[2]]],.012,6,L.TRIM),e.box(0,2.24,s[2]-.06,.03,2.4,s[2]+.06,L.TRIM),g0(e,[[s[0],2.28,s[2]],[s[0]+.004,1.9,s[2]+.003],[s[0],s[1]+.2,s[2]]],.004,5,L.CABLE);{let f=o0.vase,m=o0.top,d=[[.045,0],[.07,.03],[.08,.09],[.072,.15],[.05,.2],[.042,.225],[.05,f.h]],v=24;for(let h=0;h<d.length-1;h++){let[k,_]=d[h],[x,N]=d[h+1];for(let q=0;q<v;q++){let P=q/v*Math.PI*2,G=(q+1)/v*Math.PI*2,$=(X,l0,n0)=>[f.x+Math.cos(n0)*X,m+l0,f.z+Math.sin(n0)*X],K=X=>{let l0=x-k,n0=N-_,t0=Math.hypot(l0,n0);return[Math.cos(X)*n0/t0,-l0/t0,Math.sin(X)*n0/t0]},e0=(P+G)/2;e.quad($(k,_,P),$(k,_,G),$(x,N,G),$(x,N,P),K(e0),L.TRIM)}}}{let f=n.trays[1]+.12,m=n.TXc+n.TX/2-.03;g0(e,[[m-.12,n.liquid-.02,f-.02],[m+.02,n.liquid+.13,f+.02]],.0035,6,L.STEEL);let d=[m+.03,n.liquid+.145,f+.024],v=[.62,.66,.42];g0(e,[[d[0]-v[0]*.008,d[1]-v[1]*.008,d[2]-v[2]*.008],[d[0]+v[0]*.012,d[1]+v[1]*.012,d[2]+v[2]*.012]],.026,14,L.STEEL)}{let f=n.top;g0(e,[[.62,f+.042,12.02],[.62,f+.042,12.045]],.042,16,L.PEG),g0(e,[[.62,f+.042,12.018],[.62,f+.042,12.047]],.024,12,L.TRIM);let m=Ie;e.box(m.x0,f,m.z0,m.x1,f+m.h,m.z1,L.TRIM),e.box(m.x0+.004,f+m.h,m.z0+.004,m.x1-.004,f+m.h+.001,m.z1-.004,L.VOID);let d=m.z1+.012;e.quad([m.x0-.01,f,d+.05],[m.x1+.01,f,d+.05],[m.x1+.01,f+.24,d],[m.x0-.01,f+.24,d],[0,.2,.98],L.TRIM)}let w=V.tube;g0(e,[[w.x+.02,w.y,w.z0],[w.x+.02,w.y,(w.z0+w.z1)/2],[w.x+.02,w.y,w.z1]],.035,10,L.TUBE),e.box(0,w.y-.05,w.z0-.06,.07,w.y+.05,w.z0-.01,L.TRIM),e.box(0,w.y-.05,w.z1+.01,.07,w.y+.05,w.z1+.06,L.TRIM);for(let f of V.lines){let m=[];for(let d=0;d<=24;d++){let v=d/24;m.push(Ue(f,v))}g0(e,m,.0035,5,L.CABLE);for(let d of[m[0],m[24]])g0(e,[[0,d[1]+.05,d[2]],[d[0]*.5,d[1]+.02,d[2]],[d[0]+.02,d[1],d[2]]],.007,5,L.TRIM)}}J.stack.forEach((n,r)=>{let o=J.models[n[0]],c=J.G,a=S/2+n[2],i=J.z+n[4]+o.d*c*.85,l=n.base+.12*c,s=S/2+(r%3-1)*.5,w=J.z+2.3+r%4*.12;g0(e,[[a,l,i-.05],[a+.05,l-.02,i+.15],[a+.1,Math.max(.02,l*.4),i+.35],[a*.6+s*.4,.018,i+.6],[s,.018,w]],.012,6,L.CABLE)});{let n=R0.path,r=[0];for(let o=1;o<n.length;o++)r.push(r[o-1]+Math.hypot(n[o][0]-n[o-1][0],n[o][1]-n[o-1][1],n[o][2]-n[o-1][2]));R0.length=r[r.length-1],g0(e,R0.path,R0.r,16,L.MAINCABLE,r)}{let[n,r,o]=R0.socket;e.box(n,r-.07,o-.07,n+.018,r+.07,o+.07,L.STEEL),e.box(n+.018,r-.035,o-.032,n+.11,r+.035,o+.032,L.TRIM),e.box(n,r+.042,o+.035,n+.03,r+.058,o+.051,L.TUBE)}e.box(f0.x0-.08,f0.y-.07,U-.08,f0.x0-.02,f0.y+.07,U,L.TRIM),e.box(f0.x1+.02,f0.y-.07,U-.08,f0.x1+.08,f0.y+.07,U,L.TRIM),g0(e,[[f0.x0-.02,f0.y,f0.z],[(f0.x0+f0.x1)/2,f0.y,f0.z],[f0.x1+.02,f0.y,f0.z]],.045,10,L.TUBE);for(let n of[0,1]){let r=n?S-.06:0,o=n?S:.06;e.box(r,0,0,o,.24,U,L.TRIM),e.box(n?S-.05:0,1,0,n?S:.05,1.08,U,L.TRIM);let c=n?S-.32:0,a=n?S:.32;e.box(c,r0-.25,0,a,r0+.08,U,L.TRIM)}for(let n of[0,1]){let r=n?U-.06:0,o=n?U:.06;n?e.box(0,0,r,S,.24,o,L.TRIM):(e.box(0,0,r,S/2-_0.hw,.24,o,L.TRIM),e.box(S/2+_0.hw,0,r,S,.24,o,L.TRIM));let c=n?U-.32:0,a=n?U:.32;e.box(0,r0-.25,c,S,r0+.08,a,L.TRIM)}return e}function Gt(){let e=7,u=0,g=()=>(u++*23+5)%X0.n,y=()=>(e=e*16807%2147483647,(e-1)/2147483646),R=[],n=[],r=[],o=[],c=[],a=[],i=[],l=3,s=4,w=(_,x,N,q,P,G,$,K,e0,X)=>{let l0=X?X[0]:X0.w*P,n0=X?X[1]:X0.h*P,t0=R.length/3;for(let m0=0;m0<=s;m0++)for(let p0=0;p0<=l;p0++){let d0=p0/l,T=m0/s,I=(d0-.5)*l0,O=(T-.5)*n0,i0=K*((d0-.5)*(d0-.5)*4+(1-T)*(1-T)*.6);R.push(A[0]+_[0]+x[0]*I+N[0]*O+q[0]*i0,A[1]+_[1]+x[1]*I+N[1]*O+q[1]*i0,A[2]+_[2]+x[2]*I+N[2]*O+q[2]*i0),n.push(q[0],q[1],q[2]),r.push(d0,T),o.push(G),i.push(e0||0),c.push($[0]+A[0],$[1]+A[1],$[2]+A[2],$[3])}for(let m0=0;m0<s;m0++)for(let p0=0;p0<l;p0++){let d0=t0+m0*(l+1)+p0,T=d0+1,I=d0+l+1,O=I+1;a.push(d0,T,O,d0,O,I)}},f=(_,x,N)=>{let q=Math.cos(N),P=Math.sin(N);return[_.map((G,$)=>G*q+x[$]*P),x.map((G,$)=>-_[$]*P+G*q)]},m=[0,0,0,0],d=0,v=(_,x,N,q,P,G,$,K,e0)=>{let n0=0;for(let t0=G;t0<$;t0+=.48)for(let m0=q;m0<P;m0+=.4){let p0=m0+(y()-.5)*.4*.7,d0=t0+(y()-.5)*.48*.6;if(y()>K(p0,d0))continue;let[T,I]=f(N,[0,1,0],(y()-.5)*.5),O=_(p0,d0,.012+.0016*(n0++%9)+y()*.004),i0=.88+y()*.3;w(O,T,I,x,i0,g(),m,(y()-.3)*.02),X0.spots.length<400&&X0.spots.push({c:O,n:x,up:I,size:X0.h*i0}),d++}},h=(_,x,N)=>Math.exp(-Math.pow((_-x)/N,2));for(let _=0;_<j.n-1;_++){let x=Q[_+1],N=[[Ee(_)+j.hw+.32,x-.66],[x+.66,Ee(_+1)-j.hw-.32]];for(let[q,P]of N){let G=($,K)=>.85*h(K,3.4,1.7);P>V.b[1]+.3&&v(($,K,e0)=>[e0,K,$],[1,0,0],[0,0,-1],q,P,1.45,6.3,G),v(($,K,e0)=>[S-e0,K,$],[-1,0,0],[0,0,1],q,P,1.45,6.3,G)}}let k=[];for(let _ of V.lines){let x=_[3]-_[2]-.7;for(let N=.18;N<x-.1;N+=.3+y()*.14){let q=N/x,P=Ue(_,q);if(y()<.1||Math.abs(P[2]-V.bulb[2])<.4&&P[1]>2.3)continue;let G=.56+y()*.14,$=X0.h*G,K=(y()-.5)*.7,e0=y()<.3?y()<.5?-.75:.75:K,[X,l0]=f([0,0,-1],[0,1,0],e0),n0=[1,0,0],t0=[P[0]+.004,P[1]-.02-l0[1]*$*.5,P[2]-l0[2]*$*.5];w(t0,X,l0,n0,G,g(),[P[0],P[1],P[2],-(.04+y()*.06)],.01+y()*.025,1),k.push(P),d++}}{let[_,x]=o0.stack,N=[0,1,0];for(let P=0;P<9;P++){let G=(y()-.5)*.35+.3;w([_+(y()-.5)*.012,o0.top+.003+P*.0022,x+(y()-.5)*.012],[Math.cos(G),0,Math.sin(G)],[Math.sin(G),0,-Math.cos(G)],N,.26,g(),m,.004),d++}[[.13,.12,.9],[-.04,.2,-.4],[.2,-.05,1.6]].forEach(([P,G,$],K)=>{w([_+P,o0.top+.002+K*.0012,x+G],[Math.cos($),0,Math.sin($)],[Math.sin($),0,-Math.cos($)],N,.26,g(),m,.006),d++})}{let _=[0,1,0],x=(G,$,K,e0,X,l0,n0,t0,m0)=>{w([G,$,K],[Math.cos(e0),0,Math.sin(e0)],[Math.sin(e0),0,-Math.cos(e0)],_,1,n0,m,m0||0,t0,[X,l0]),d++},N=V.basin.floor+.002,q=V.top+.0015;x(.36,N,4.78,.25,.2,.25,g(),1,.003),x(.44,N+.0012,5.02,-.4,.2,.25,g(),1,.004),x(.3,N+.0024,5.3,1.3,.2,.25,g(),5,.006),x(.47,N,5.62,.1,.2,.25,g(),3,.002),x(.33,N+.0012,5.95,-1,.2,.25,g(),1,.005),x(.6,N+.003,V.trays[0]-.4,.2,.036,.22,g(),2,.01),x(.55,q+5e-4,9.24,.35,.2,.25,g(),3,.004),x(.5,q+.001,11.88,1.35,.036,.23,g(),2,.012),x(.45,q+.0017,11.97,1.55,.036,.23,g(),2,.009),x(.36,q+.001,12.08,-.25,.2,.25,g(),5,.004),x(.43,Ie.h+q+.0012,(Ie.z0+Ie.z1)/2,.06,.2,.25,g(),5,.002);for(let[G,$,K,e0]of[[.56,9.38,.11,.3],[.2,9.9,.1,1.1],[.47,10.95,.16,2],[.3,12,.12,.7],[.5,8.7,.14,2.4],[.5,6.3,.18,1.9]]){let X=($<V.a[1]?N:q)+4e-4;x(G,X,$,e0,K,K,g(),4,0)}let P=V.lines[6];for(let G of[.42,.47,.53,.66]){let $=Ue(P,G),K=.2+y()*.06,[e0,X]=f([0,0,-1],[0,1,0],(y()-.5)*.12);w([$[0]+.003,$[1]-.012-K/2,$[2]],e0,X,[1,0,0],1,g(),[$[0],$[1],$[2],-(.03+y()*.04)],.008,2,[.036,K]),k.push($),d++}}return{pos:R,nrm:n,uv:r,pic:o,piv:c,idx:a,sty:i,pegs:k,count:d}}var E0=`
	const float RW = ${p(S)}, RL = ${p(U)}, RH = ${p(r0)}, RT = ${p(Ne)};
	const float HW = ${p(j.hw)}, SILL = ${p(j.sill)}, SPRING = ${p(j.spring)};
	const float WZ0 = ${p(j.z0)}, WSTEP = ${p(j.step)};
	const vec3 RO = vec3(${p(A[0])}, ${p(A[1])}, ${p(A[2])});
	const vec3 LDIR_L = vec3(${p(q0[0])}, ${p(q0[1])}, ${p(q0[2])});
	const vec3 LDIR_R = vec3(${p(-q0[0])}, ${p(q0[1])}, ${p(q0[2])});

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
	float winIdx(float z) { return clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${p(j.n-1)}); }
	// (on the left, the first windows are walled up)
	float leftOpen(float z) { return step(${p(j.leftFrom-.5)}, winIdx(z)); }
	vec2 winLocal(float z, float y) {
		float i = clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${p(j.n-1)});
		return vec2(z - (WZ0 + WSTEP * i), y);
	}
	// (on the right, the first window comes down to the table: its height
	// below the springing is stretched onto the others' shape)
	const float LSILL = ${p(j.lowSill)};
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
`;function jt(){return`
	#define STUDIO_SUN ${"vec3("+p(q0[0])+", "+p(q0[1])+", "+p(q0[2])+")"}
	#define STUDIO_SUN2 ${"vec3("+p(-q0[0])+", "+p(q0[1])+", "+p(q0[2])+")"}
	#define SHAFT_TINT vec3(0.6, 0.012, 0.008)
	#define STUDIO_AIR_EVEN
	${E0}
	float studioSun(vec3 p) {
		vec3 lp = p - RO;
		if (lp.x < 0.0 || lp.x > RW || lp.z < 0.0 || lp.z > RL || lp.y > RH + 2.0) return 0.0;
		vec3 c = redLightAir(lp);
		return dot(c, vec3(0.7, 0.2, 0.1)) * 3.2;
	}`}var mt=`
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
	}`,te=`
	// the televisions' flicker, thrown on whatever is in front of them
	uniform vec4 tvLight;
	vec3 tvGlow(vec3 lp, vec3 N) {
		vec3 d = vec3(${p(S/2)}, 1.35, ${p(J.z-.9)}) - lp;
		float dd = dot(d, d);
		float face = 0.35 + 0.65 * max(0.0, dot(N, normalize(d)));
		// (only in front of them: the stack's own back is in its shadow)
		float front = smoothstep(${p(J.z+.6)}, ${p(J.z-.2)}, lp.z);
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
		vec3 L0 = vec3(${p(C.lens[0])}, ${p(C.lens[1])}, ${p(C.lens[2])});
		vec3 d = lp - L0;
		float s = (${p(U-.005)} - L0.z) / max(d.z, 1e-4);
		vec3 h = L0 + d * s;
		return vec3(1.0 - (h.x - ${p(C.img.x-C.img.w/2)}) / ${p(C.img.w)}, (h.y - ${p(C.img.y-C.img.h/2)}) / ${p(C.img.h)}, 1.0 / s);
	}
	// the televisions stand in the beam's way: their shadows on the picture
	uniform vec3 tvLo[12], tvHi[12];
	float projShadow(vec3 lp) {
		vec3 L0 = vec3(${p(C.lens[0])}, ${p(C.lens[1])}, ${p(C.lens[2])});
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
		vec3 c = vec3(clamp(lp.x, ${p(f0.x0)}, ${p(f0.x1)}), ${p(f0.y)}, ${p(f0.z)});
		vec3 d = c - lp;
		float dd = dot(d, d);
		float face = 0.25 + 0.75 * max(0.0, dot(N, normalize(d)));
		return vec3(1.0, 0.06, 0.045) * 2.6 * face / (1.0 + dd * 0.055);
	}
	// the darkroom: the bare red bulb over the trays, the tube over the lines
	vec3 darkLight(vec3 lp, vec3 N) {
		vec3 d = vec3(${p(V.bulb[0])}, ${p(V.bulb[1])}, ${p(V.bulb[2])}) - lp;
		float dd = dot(d, d);
		vec3 c = vec3(1.0, 0.07, 0.04) * 1.15 * (0.2 + 0.8 * max(0.0, dot(N, normalize(d)))) / (0.02 + dd * 2.2);
		vec3 tq = vec3(${p(V.tube.x+.02)}, ${p(V.tube.y)}, clamp(lp.z, ${p(V.tube.z0)}, ${p(V.tube.z1)}));
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
		vec3 Ls = vec3(${p(S/2)}, 1.25, 1.6);
		vec3 d = lp - Ls;
		float t = (${p(-_0.depth)} - Ls.z) / d.z;
		vec3 h = Ls + d * t;
		float m = smoothstep(0.08, -0.05, abs(h.x - ${p(S/2)}) - ${p(_0.hw)}) * smoothstep(0.08, -0.05, h.y - ${p(_0.h)}) * step(0.0, h.y);
		float dd = dot(d, d);
		vec3 Ld = -normalize(d);
		vec3 c = vec3(1.0, 0.07, 0.05) * 26.0 * m * (0.15 + 0.85 * max(0.0, dot(N, Ld))) / (1.0 + dd * 0.55);
		vec3 sd = vec3(${p(I0.sign[0])}, ${p(I0.sign[1])}, ${p(I0.sign[2])}) - lp;
		c += vec3(1.0, 0.12, 0.1) * signK * 0.5 * (0.2 + 0.8 * max(0.0, dot(N, normalize(sd)))) / (0.05 + dot(sd, sd) * 3.0);
		return c;
	}
	uniform float spotK;
	const vec3 SPOTP = vec3(${p(s0.pos[0])}, ${p(s0.pos[1])}, ${p(s0.pos[2])});
	const vec3 SPOTA = vec3(${p(s0.axis[0])}, ${p(s0.axis[1])}, ${p(s0.axis[2])});
	const float SPOT_CI = ${p(Math.cos(s0.inner))}, SPOT_CO = ${p(Math.cos(s0.outer))};
	// her shape in the spot's light: soft round blockers, her shadow
	float spotShade(vec3 lp, vec3 L, float len) {
		float sh = 1.0;
		${c0.occ.map(e=>`{
			vec3 C = vec3(${p(e[0])}, ${p(e[1])}, ${p(e[2])}) - lp;
			float t = dot(C, L);
			float r = ${p(e[3])};
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
		${o0.occ.map(e=>`{
			vec3 C = vec3(${p(e[0])}, ${p(e[1])}, ${p(e[2])}) - lp;
			float t = dot(C, dir);
			float cd = length(C - dir * t);
			float r = ${p(e[3])};
			if (t > 0.0 && t < len && dot(C, C) > r * r * 1.1) sh *= mix(1.0, smoothstep(r * 0.35, r * (1.0 + 2.5 * t / len), cd), 0.9);
		}`).join(`
`)}
		return sh;
	}
	// the candles on the table: a warm, breathing light close round them
	vec3 candleLight(vec3 lp, vec3 N) {
		vec3 sum = vec3(0.0);
		${o0.flames.map((e,u)=>`{
			vec3 d = vec3(${p(e[0])}, ${p(e[1])}, ${p(e[2])}) - lp;
 			float r2 = dot(d, d);
			float sh = candleShade(lp, d);
			float fl = 0.82 + 0.1 * sin(time * (9.0 + ${p(u*1.7)}) + ${p(u*2.1)}) * sin(time * 3.3 + ${p(u)}) + 0.08 * sin(time * 23.0 + ${p(u*4)});
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
		return (vec3(0.2, 0.017, 0.02) * (0.8 + 0.2 * N.y) + vec3(0.1, 0.007, 0.007) * exp(-lp.y * 0.25)) * room + vec3(0.7, 0.06, 0.04) * g + tvGlow(lp, N) + safeLight(lp, N) + darkLight(lp, N) + doorGlow(lp, N) + candleLight(lp, N) + spotLight(lp, N);
	}
	// what the lit floor throws back up onto the walls and the shafts
	vec3 bounce(vec3 lp, vec3 N) {
		vec3 fp = vec3(clamp(lp.x + N.x * (0.8 + lp.y * 0.35), 0.1, RW - 0.1), 0.0, lp.z + N.z * (0.8 + lp.y * 0.35));
		vec3 b = redLightRough(fp) * 0.5 + redLightRough(fp + vec3(N.x * 1.4, 0.0, 1.2)) * 0.25 + redLightRough(fp + vec3(N.x * 1.4, 0.0, -1.2)) * 0.25;
		return b * 0.42 * exp(-lp.y * 0.18) * (0.55 + 0.45 * max(0.0, -N.y + 0.4));
	}

`,yt=`
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, yScale, mirrorOn, reflOn;
	uniform sampler2D reflTex;
	uniform vec2 reflSize;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${E0}

	const float DHW = ${p(_0.hw)}, DH = ${p(_0.h)};

	${te}

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
			else { alb = vec3(0.17, 0.008, 0.012); spec = 1.0; }

			// light: straight through the windows, and back off the floor
			vec3 lit = vec3(0.0);
			float nl = max(0.0, dot(N, LDIR_L)) + max(0.0, dot(N, LDIR_R));
			if (flr) lit = redLight(lp, max(wpx * 0.6, 0.004)) * 3.2 * LDIR_L.y;
			else if (nl > 0.0) lit = redLight(lp + N * 0.02, max(wpx, 0.01)) * 2.0 * min(1.0, nl);
			vec3 amb = ambient(lp, N) * (flr ? 1.4 : 1.0);
			if (!flr) amb += bounce(lp, N);
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
				vec3 bd = normalize(vec3(${p(V.bulb[0])}, ${p(V.bulb[1])}, ${p(V.bulb[2])}) - lp);
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
				if (k == 0 && lp.z > ${p(J.z-1.5)}) {
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
	}`,wt=`
	vec3 breathe(vec3 p, float b) {
		float up = smoothstep(0.3, 0.62, p.y);
		vec2 r = p.xz - vec2(0.035, -0.07);
		float chest = exp(-pow((p.y - 0.6) / 0.1, 2.0));
		vec3 d = vec3(0.0, 0.006 * b * up, 0.0);
		d.xz += normalize(r + vec2(1e-4)) * 0.0045 * b * chest;
		return p + d;
	}`,Wt=`
	precision highp float;
	uniform mat4 proj, view, model;
	uniform float yScale, breath;
	attribute vec3 position, normal;
	attribute vec2 uv;
	attribute float flag;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_flag;
	${wt}
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
	}`,Ht=`
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, sigTime, yScale, seed, dark, nMem, emit, order, warnS, warnN, glitchK, slot;
	uniform sampler2D letterTex;
	uniform sampler2D bodyTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_flag;
	${E0}
	${te}

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
		float k = mod(4.0 * slot + floor(h1 * 4.0) + 4.0 * memRot, 52.0);
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
				vec3 Lp = normalize(vec3(${p(C.lens[0])}, ${p(C.lens[1])}, ${p(C.lens[2])}) - lp);
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
	}`,Bt=`
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
	}`,Ft=`
	precision highp float;
	uniform float time, yScale;
	uniform sampler2D polTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_pic, v_style;
	${E0}
	${te}
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
	}`,Ut=`
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
	}`,Kt=`
	precision highp float;
	uniform float time;
	varying vec3 v_pos, v_eye;
	varying float v_layer;
	${E0}
	${te}
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
	}`,Xt=`
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
	}`,Yt=`
	precision highp float;
	uniform float time;
	uniform sampler2D printTex, polTex;
	varying vec3 v_pos, v_eye;
	varying float v_tray;
	${E0}
	${te}
	const vec3 BULB = vec3(${p(V.bulb[0])}, ${p(V.bulb[1])}, ${p(V.bulb[2])});
	void main() {
		vec3 lp = v_pos - RO;
		int k = int(v_tray + 0.5);
		float zc = k == 0 ? ${p(V.trays[0])} : (k == 1 ? ${p(V.trays[1])} : ${p(V.trays[2])});
		vec2 tl = vec2(lp.x - ${p(V.TXc)}, lp.z - zc);
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
	}`,Zt=`
	precision highp float;
	uniform mat4 proj, view;
	uniform float time, pxScale;
	attribute vec4 seed;
	varying float v_b, v_w;
	${E0}
	void main() {
		vec3 lp = vec3(0.3 + seed.x * (RW - 0.6), 0.2 + seed.y * (RH - 0.5), 0.3 + seed.z * (RL - 0.6));
		float t = time * (0.03 + 0.03 * seed.w);
		lp += vec3(sin(t * 3.1 + seed.w * 40.0) * 0.35, sin(t * 1.7 + seed.x * 30.0) * 0.4 - t * 0.6, cos(t * 2.3 + seed.z * 50.0) * 0.35);
		lp.y = 0.2 + mod(lp.y - 0.2, RH - 0.5);
		vec3 c = redLightAir(lp);
		v_b = dot(c, vec3(0.6, 0.3, 0.1));
		// and in the projector's beam, lit warm
		vec3 L0 = vec3(${p(C.lens[0])}, ${p(C.lens[1])}, ${p(C.lens[2])});
		vec3 dd = lp - L0;
		float s = (${p(U)} - L0.z) / max(dd.z, 1e-4);
		vec3 hh = L0 + dd * s;
		vec2 pu = vec2((hh.x - ${p(C.img.x-C.img.w/2)}) / ${p(C.img.w)}, (hh.y - ${p(C.img.y-C.img.h/2)}) / ${p(C.img.h)});
		v_w = (dd.z > 0.2 && pu.x > 0.0 && pu.x < 1.0 && pu.y > 0.0 && pu.y < 1.0) ? 1.6 : 0.0;
		vec4 v = view * vec4(lp + RO, 1.0);
		gl_Position = proj * v;
		float tw = 0.6 + 0.4 * sin(time * (1.0 + seed.w * 2.0) + seed.x * 80.0);
		v_b *= tw;
		gl_PointSize = clamp(pxScale * (0.012 + 0.012 * seed.w) / max(0.2, -v.z), 1.0, 6.0);
	}`,Qt=`
	precision highp float;
	varying float v_b, v_w;
	void main() {
		vec2 d = gl_PointCoord - 0.5;
		float a = smoothstep(0.5, 0.0, length(d));
		gl_FragColor = vec4((vec3(1.0, 0.14, 0.09) * min(v_b, 1.4) + vec3(1.0, 0.8, 0.55) * v_w) * a * 0.55, 1.0);
	}`;Ke.exports=function(e){let u=Vt(),g={position:e.buffer(u.pos),normal:e.buffer(u.nrm),kind:e.buffer(u.kind),uv:e.buffer(u.uv)},y=e.elements({data:u.idx.length>65535?new Uint32Array(u.idx):new Uint16Array(u.idx),type:u.idx.length>65535?"uint32":"uint16"}),R=e.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),n=e.framebuffer({color:R,depth:!0}),r=e({framebuffer:n}),o=e.texture({width:1,height:1,data:[0,0,0,255]}),c=e({}),a=o,i=0,l=0,s=!1,w=[4,4],f=[0,0,0,0],m=null,d=[0,3.417,8.417,12.333,15.625,19.25,22.5,25.958,30.75,33.417,36.25,40.125,43.667],v=e.texture({width:400,height:300,min:"linear",mag:"linear",wrap:"clamp"}),h={v:null,on:0,ready:!1,clip:-1,since:0,stillUntil:0},k=()=>{if(typeof document=="undefined")return;if(!h.v){let E=document.createElement("video");E.src="res/redroom/reel.mp4",E.muted=!0,E.loop=!0,E.playsInline=!0,E.preload="auto",E.setAttribute("playsinline",""),E.setAttribute("muted",""),E.addEventListener("loadeddata",()=>{h.ready=!0});let W=()=>{h.v&&h.v.paused&&!S0.freeze&&performance.now()/1e3>h.stillUntil&&h.v.play().catch(()=>{})};window.addEventListener("pointerdown",W,{passive:!0}),window.addEventListener("touchend",W,{passive:!0}),h.v=E,E.play().catch(()=>{})}let t=h.v,b=performance.now()/1e3;if(!h.ready||t.readyState<2){h.on=0;return}let z=0;for(let E=0;E<d.length;E++)t.currentTime>=d[E]-.02&&(z=E);z!==h.clip&&(h.clip>=0&&++h.since>=2&&(h.since=0,h.stillUntil=b+3.4),h.clip=z);let M=b<h.stillUntil,D=S0.freeze?h.gate:M?"s"+Math.floor(e.now()/3.4):"c"+z;if(D!==h.gate&&(h.gate!==void 0&&Fe.click&&Fe.click(M?1:0),h.gate=D),S0.freeze||M?t.paused||t.pause():t.paused&&t.play().catch(()=>{}),h.on=M?0:1,!M)try{v.subimage(t)}catch(E){h.on=0}},_=e.texture({width:1,height:1,data:[0,0,0,255]}),x=1,N=t=>{let b=W=>{let H=Math.sin(W*127.1)*43758.5453;return H-Math.floor(H)},z=Math.floor(t*9),M=b(z),D=b(Math.floor(t*.7)),E=.92+.08*Math.sin(t*120);return D>.55&&M>.6&&(E=M>.85?.08:.45),E},q={signK:()=>x,vidTex:()=>v,vidOn:()=>h.on,memRot:t=>Math.floor((typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:t.time)/21),memTex:()=>m||_,projT:t=>{let b=typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:t.time;return S0.freeze?(S0.frozenAt===null&&(S0.frozenAt=b),S0.frozenAt):(S0.frozenAt=null,b)},spotK:()=>xe.k,pulsePhase:()=>Ae.phase,pulsePeriod:()=>Ae.period,warnS:()=>S0.s,warnN:()=>S0.n,glitchK:()=>S0.glitch};J.stack.forEach((t,b)=>{let z=J.models[t[0]],M=J.G;q["tvLo["+b+"]"]=[S/2+t[2]-z.w*M/2,t.base,J.z+t[4]-.02],q["tvHi["+b+"]"]=[S/2+t[2]+z.w*M/2,t.base+z.h*M,J.z+t[4]+z.d*M]});let P=e({vert:mt,frag:yt,attributes:g,elements:y,cull:{enable:!1},uniforms:{reflTex:()=>a,reflSize:()=>w,reflOn:()=>i,tvLight:()=>f,...q}}),G=t=>new Promise((b,z)=>{let M=new Image,D=E=>(E&E-1)===0;M.onload=()=>b(e.texture({data:M,min:D(M.width)&&D(M.height)?"mipmap":"linear",mag:"linear",wrap:"clamp"})),M.onerror=z,M.src=t}),$=J.stack.map((t,b)=>{let[z,,M,D,E]=t,W=Math.PI+D*Math.PI/180,H=J.G,Z=Math.cos(W)*H,a0=Math.sin(W)*H,b0=A[0]+S/2+M,u0=A[1]+t.base,k0=A[2]+J.z+E;return{name:z,seed:(b+1)*.6180339%1,model:[Z,0,-a0,0,0,H,0,0,a0,0,Z,0,b0,u0,k0,1]}}),K={},e0=(()=>{let t=document.createElement("canvas");t.width=160,t.height=20;let b=t.getContext("2d");return b.fillStyle="#000",b.fillRect(0,0,160,20),b.fillStyle="#fff",b.font='bold 19px "Courier New", Courier, monospace',b.textAlign="center",b.textBaseline="middle",Ot.split("").forEach((z,M)=>b.fillText(z,M*16+8,11)),e.texture({data:t,min:"nearest",mag:"nearest",wrap:"clamp"})})(),X=null,n0=e({vert:Wt,frag:Ht,attributes:{position:{buffer:e.prop("vb"),stride:36,offset:0},normal:{buffer:e.prop("vb"),stride:36,offset:12},uv:{buffer:e.prop("vb"),stride:36,offset:24},flag:{buffer:e.prop("vb"),stride:36,offset:32}},elements:e.prop("el"),offset:e.prop("offset"),count:e.prop("count"),cull:{enable:!1},uniforms:{model:e.prop("model"),seed:e.prop("seed"),dark:e.prop("dark"),emit:(t,b)=>b.emit||0,breath:(t,b)=>b.breath||0,order:(t,b)=>b.order===void 0?-1:b.order,slot:(t,b)=>b.slot||0,letterTex:()=>e0,bodyTex:e.prop("tex"),...q,memTex:()=>X||_,nMem:55,sigTime:t=>typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:t.time,tvLight:()=>f}});G("res/redroom/memories.webp").then(t=>{X=t,m=t}).catch(t=>console.error("The memories did not load",t));for(let t in J.models){let b=J.models[t],z=[];for(let M=0;M<b.tex;M++)z.push(G("res/redroom/tv_"+t+"_"+M+".webp"));Promise.all([fetch(b.file).then(M=>M.arrayBuffer()),...z]).then(([M,...D])=>{let E=new Uint32Array(M,0,4),W=E[0],H=E[1],Z=E[2],a0=E[3],b0=new Int32Array(M,16,Z*3),u0=16+Z*12,k0=e.buffer(new Float32Array(M,u0,W*9)),M0=u0+W*36,$0=a0?new Uint32Array(M.slice(M0,M0+H*4)):new Uint16Array(M.slice(M0,M0+H*2)),N0=e.elements({data:$0,type:a0?"uint32":"uint16"}),h0=[];for(let T0=0;T0<Z;T0++)h0.push({offset:b0[T0*3],count:b0[T0*3+1],tex:b0[T0*3+2]>=0?D[b0[T0*3+2]]:D[0]});K[t]={vb:k0,el:N0,parts:h0,dark:b.dark}}).catch(M=>console.error("A television did not load",M))}let t0=[],m0=()=>{if(X){t0.length=0;for(let t of $){let b=K[t.name];if(b)for(let z of b.parts)t0.push({vb:b.vb,el:b.el,offset:z.offset,count:z.count,tex:z.tex,model:t.model,seed:t.seed,dark:b.dark,order:J.letters[$.indexOf(t)],slot:$.indexOf(t)})}t0.length&&n0(t0)}},p0=Gt(),d0=null;G("res/redroom/polaroids.webp").then(t=>{d0=t}).catch(t=>console.error("The photographs did not load",t));let T=e({vert:Bt,frag:Ft,attributes:{position:p0.pos,normal:p0.nrm,uv:p0.uv,pic:p0.pic,style:p0.sty,pivot:{buffer:e.buffer(p0.piv),size:4}},elements:e.elements({data:new Uint16Array(p0.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...q,polTex:()=>d0,tvLight:()=>f}}),I=(t,b)=>Promise.all([fetch(t).then(z=>z.arrayBuffer()),...b.map(G)]).then(([z,...M])=>{let D=new Uint32Array(z,0,4),E=D[0],W=D[1],H=D[2],Z=D[3],a0=new Int32Array(z,16,H*3),b0=16+H*12,u0=b0+E*36,k0=e.buffer(new Float32Array(z,b0,E*9)),M0=Z?new Uint32Array(z.slice(u0,u0+W*4)):new Uint16Array(z.slice(u0,u0+W*2)),$0=e.elements({data:M0,type:Z?"uint32":"uint16"}),N0=[];for(let h0=0;h0<H;h0++)N0.push({offset:a0[h0*3],count:a0[h0*3+1],tex:M[Math.max(0,a0[h0*3+2])],mat:a0[h0*3+2]});return{vb:k0,el:$0,parts:N0}}),O=(t,b)=>{let z=new Array(16);for(let M=0;M<4;M++)for(let D=0;D<4;D++)z[M*4+D]=t[D]*b[M*4]+t[4+D]*b[M*4+1]+t[8+D]*b[M*4+2]+t[12+D]*b[M*4+3];return z},i0=(t,b,z)=>[1,0,0,0,0,1,0,0,0,0,1,0,t,b,z,1],D0=t=>{let b=Math.cos(t),z=Math.sin(t);return[1,0,0,0,0,b,z,0,0,-z,b,0,0,0,0,1]},se=O(i0(A[0]+C.x,A[1]+C.table,A[2]+C.z),D0(-C.pitch)),re=C.tableK,v0=[re,0,0,0,0,re,0,0,0,0,re,0,A[0]+S/2,A[1],A[2]+15,1],B={},ce=0,_e=t=>{let b=t/4.6,z=Math.floor(b),M=b-z,D=Math.sin(z*91.7)*43758.5453,E=D-Math.floor(D)>.78?1.7:1,W=H=>(H=Math.max(0,Math.min(1,H)),H*H*(3-2*H));return(M<.38?W(M/.38):1-W((M-.38)/.5))*E},ie=["res/redroom/proj_0.webp"];I("res/redroom/proj_body.bin",ie).then(t=>{B.body=t}).catch(t=>console.error(t)),I("res/redroom/proj_feed.bin",ie).then(t=>{B.feed=t}).catch(t=>console.error(t)),I("res/redroom/proj_takeup.bin",ie).then(t=>{B.takeup=t}).catch(t=>console.error(t)),I("res/redroom/table_all.bin",["res/redroom/table_0.webp"]).then(t=>{B.table=t}).catch(t=>console.error(t));let ze=(t,b)=>O(se,O(i0(t[0],t[1],t[2]),O(D0(b),i0(-t[0],-t[1],-t[2])))),le=[],Le=t=>{le.length=0;let b=(z,M,D)=>{if(z)for(let E of z.parts)le.push({vb:z.vb,el:z.el,offset:E.offset,count:E.count,tex:E.tex,model:M,seed:0,dark:D})};b(B.table,v0,.9),b(B.body,se,1),b(B.feed,ze(C.feed,-t*2.6),1),b(B.takeup,ze(C.takeup,-t*3.5),1),le.length&&n0(le)},C0=[],B0=[];{let t=[A[0]+C.lens[0],A[1]+C.lens[1],A[2]+C.lens[2]];[.96,.86,.76,.66,.56,.46,.36].forEach((b,z)=>{let M=C.img.w/2*b,D=C.img.h/2*b,E=[[-M,-D],[M,-D],[M,D],[-M,D]].map(([W,H])=>[A[0]+C.img.x+W,A[1]+C.img.y+H,A[2]+U-.02]);for(let W=0;W<4;W++){let H=E[W],Z=E[(W+1)%4];C0.push(...t,...H,...Z),B0.push(z,z,z)}})}let ue=e({vert:Ut,frag:Kt,attributes:{position:C0,layer:B0},count:C0.length/3,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{...q,tvLight:()=>f}}),w0=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale, pxScale; attribute vec3 position; void main() { vec3 p = position; p.y *= yScale; vec4 v = view * vec4(p, 1.0); gl_Position = proj * v; gl_PointSize = clamp(pxScale * 0.22 / max(0.3, -v.z), 4.0, 220.0); }",frag:"precision highp float; uniform float time; void main() { vec2 d = gl_PointCoord - 0.5; float r = length(d); float a = exp(-r * r * 160.0) * 1.6 + 0.35 * exp(-r * r * 30.0) + 0.12 * exp(-r * r * 8.0) + 0.5 * exp(-d.y * d.y * 2500.0) * exp(-abs(d.x) * 7.0); gl_FragColor = vec4(vec3(1.0, 0.84, 0.62) * a * (0.9 + 0.1 * sin(time * 37.0)), 1.0); }",attributes:{position:[A[0]+C.lens[0],A[1]+C.lens[1],A[2]+C.lens[2]+.01]},count:1,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2}}),fe=null;G("res/redroom/print.webp").then(t=>{fe=t}).catch(t=>console.error(t));let pe=[],me=[];V.trays.forEach((t,b)=>{let z=V.TX/2-.009,M=V.TZ/2-.009,D=V.TXc,E=V.liquid,W=[[D-z,t-M],[D+z,t-M],[D+z,t+M],[D-z,t+M]].map(([H,Z])=>[A[0]+H,A[1]+E,A[2]+Z]);pe.push(...W[0],...W[2],...W[1],...W[0],...W[3],...W[2]);for(let H=0;H<6;H++)me.push(b)});let ye=e({vert:Xt,frag:Yt,attributes:{position:pe,tray:me},count:pe.length/3,cull:{enable:!1},uniforms:{...q,tvLight:()=>f,printTex:()=>fe||_,polTex:()=>d0||_}}),F0=xt();for(let t of p0.pegs)F0.box(t[0]-.008,t[1]-.045,t[2]-.011,t[0]+.008,t[1]+.03,t[2]+.011,L.PEG);let U0=e({vert:mt,frag:yt,attributes:{position:F0.pos,normal:F0.nrm,kind:F0.kind,uv:F0.uv},elements:e.elements({data:new Uint16Array(F0.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...q,reflTex:()=>o,reflSize:[4,4],reflOn:0,tvLight:()=>f}}),Me=t=>{let b=Math.cos(t),z=Math.sin(t);return[b,0,-z,0,0,1,0,0,z,0,b,0,0,0,0,1]},Y=(t,b,z,M)=>O(i0(A[0]+t,A[1]+b,A[2]+z),Me(M||0));I("res/redroom/plastic_all.bin",["res/redroom/plastic_0.webp"]).then(t=>{B.jug=t}).catch(t=>console.error(t)),I("res/redroom/multi_cleaner_all.bin",["res/redroom/multi_cleaner_0.webp"]).then(t=>{B.can=t}).catch(t=>console.error(t)),I("res/redroom/pull_all.bin",["res/redroom/pull_0.webp"]).then(t=>{B.socket=t}).catch(t=>console.error(t)),I("res/redroom/bulb_all.bin",["res/redroom/bulb_0.webp","res/redroom/bulb_1.webp"]).then(t=>{B.bulb=t}).catch(t=>console.error(t));let A0=V.top,Y0=V.b[0],De=[["jug",Y(.16,A0,Y0+.3,.4)],["jug",Y(.17,A0,Y0+.52,-.3)],["jug",Y(.36,A0,Y0+.4,2.2)],["can",Y(.14,A0,Y0+.95,1.57)],["can",Y(.15,A0,Y0+1.3,1.45)],["jug",Y(.16,A0,V.b[1]-.35,.9)],["can",Y(.2,A0,V.b[1]-.8,1.7)],["socket",Y(V.bulb[0],V.bulb[1]+.065,V.bulb[2],0)],["bulb",O(Y(V.bulb[0],V.bulb[1]+.048,V.bulb[2],0),D0(Math.PI))]],F=(t,b)=>[t,0,0,0,0,b===void 0?t:b,0,0,0,0,t,0,0,0,0,1];I("res/redroom/wtable_all.bin",["res/redroom/wtable_0.webp"]).then(t=>{B.wtable=t}).catch(t=>console.error(t)),I("res/redroom/wchair_all.bin",["res/redroom/wchair_0.webp"]).then(t=>{B.wchair=t}).catch(t=>console.error(t)),I("res/redroom/cstick_holder.bin",["res/redroom/cstick_0.webp"]).then(t=>{B.holder=t}).catch(t=>console.error(t)),I("res/redroom/cstick_candle.bin",["res/redroom/cstick_0.webp"]).then(t=>{B.candle=t}).catch(t=>console.error(t)),I("res/redroom/rose_all.bin",["res/redroom/rose_0.webp"]).then(t=>{B.rose=t}).catch(t=>console.error(t)),I("res/redroom/camera_all.bin",[0,1,2,3].map(t=>"res/redroom/camera_"+t+".webp")).then(t=>{B.camera=t}).catch(t=>console.error(t));let Z0=o0.k,Q0=o0.z,V0=Math.PI/2,z0=[["wtable",O(Y(o0.x,0,Q0,V0),F(Z0)),1.7],["wchair",O(Y(o0.x-o0.depth/2-.36,0,Q0-.42,V0+.05),F(Z0)),1.6],["wchair",O(Y(o0.x-o0.depth/2-.42,0,Q0+.45,V0-.12),F(Z0)),1.6],["wchair",O(Y(o0.x+.02,0,Q0-o0.half-.36,.06),F(Z0)),1.6],["wchair",O(Y(o0.x-.05,0,Q0+o0.half+.4,Math.PI-.1),F(Z0)),.95]];for(let[t,b,z]of o0.candles)z0.push(["holder",Y(t,o0.top,b,z*3),.9]),z0.push(["candle",O(Y(t,o0.top,b,z*3),O(i0(0,.156,0),O(F(1,z),i0(0,-.156,0)))),1.15]);{let t=7,b=()=>(t=t*16807%2147483647,(t-1)/2147483646),z=o0.vase;for(let M=0;M<9;M++){let D=M*2.39996+b()*.4,E=M===0?.04:.16+b()*.2,W=.66+b()*.12,H=z.h+.25*W-.1-(M===0?-.04:b()*.05),Z=O(O(Y(z.x,o0.top+.02,z.z,D),D0(E)),O(i0(0,H-.02,0),O(D0(Math.PI/2),O(F(W),i0(0,-.13,0)))));z0.push(["rose",Z,2])}}for(let[t,b,z]of o0.laid)z0.push(["rose",O(Y(t,o0.top+.002,b,z),F(.72)),2]);I("res/redroom/woman_all.bin",["res/redroom/woman_0.webp"]).then(t=>{B.woman=t}).catch(t=>console.error(t));let he=O(Y(c0.x,0,c0.z,c0.yaw),F(c0.k));z0.push(["woman",he,2.6]),z0.push(["camera",Y(V.cam.x,V.cam.y,V.cam.z,V0+.35),1.7]),I("res/redroom/enlarger_all.bin",["res/redroom/enlarger_0.webp"]).then(t=>{B.enlarger=t}).catch(t=>console.error(t)),I("res/redroom/letters_all.bin",["res/redroom/letters_0.webp"]).then(t=>{B.letters=t}).catch(t=>console.error(t)),I("res/redroom/cup_all.bin",["res/redroom/cup_0.webp"]).then(t=>{B.cup=t}).catch(t=>console.error(t)),I("res/redroom/ashtray_all.bin",["res/redroom/ashtray_0.webp"]).then(t=>{B.ashtray=t}).catch(t=>console.error(t)),I("res/redroom/books_all.bin",["res/redroom/books_0.webp"]).then(t=>{B.books=t}).catch(t=>console.error(t));{let t=V.top;z0.push(["enlarger",Y(.39,t,10.45,Math.PI-.04),1.25],["letters",Y(.45,t+.001,9.72,.55),1],["cup",Y(.19,t,9.66,2.3),1.3],["books",Y(.2,t,11.08,.15),1.3,0],["books",Y(.53,t,11.16,-.45),1.3,5],["books",Y(.22,t,11.72,1.45),1.3,6],["books",Y(.24,t+.058,11.75,1.8),1.3,7],["ashtray",Y(.6,t,11.62,.7),1.2])}let Te=()=>{let t=[];for(let[z,M]of De){let D=B[z];D&&D.parts.forEach((E,W)=>t.push({vb:D.vb,el:D.el,offset:E.offset,count:E.count,tex:E.tex,model:M,seed:0,dark:z==="jug"||z==="can"?.85:.7,emit:z==="bulb"&&E.mat===0?1.6:0}))}let b=Dt();for(let[z,M,D,E]of z0){let W=B[z];!W||b&&z==="woman"||W.parts.forEach((H,Z)=>{(E===void 0||E===Z)&&t.push({vb:W.vb,el:W.el,offset:H.offset,count:H.count,tex:H.tex,model:M,seed:0,dark:D,emit:z==="woman"?-1:0,breath:z==="woman"?ce:0})})}t.length&&n0(t),Nt(),B.woman&&!b&&St(),B.woman&&K0.n&&!b&&Rt(),xe.k>.001&&!lt&&(qt(),kt()),ye(),U0()},G0=[],ge=[];for(let Z=0;Z<8;Z++)for(let a0=0;a0<8;a0++){let b0=(N0,h0)=>[-.08+.285*N0,.405+.20999999999999996*h0,-.222+-.05400000000000002*h0-.008],u0=a0/8,k0=(a0+1)/8,M0=Z/8,$0=(Z+1)/8;for(let[N0,h0]of[[u0,M0],[k0,M0],[k0,$0],[u0,M0],[k0,$0],[u0,$0]])G0.push(...b0(N0,h0)),ge.push(N0,h0)}let St=e({vert:`
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
			${E0}
			${te}
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
			}`,attributes:{position:G0,uv:ge},count:G0.length/3,cull:{enable:!1},uniforms:{...q,model:()=>he,tvLight:()=>f}}),K0={n:0,vb:null,el:null};fetch("res/redroom/veil.bin").then(t=>t.arrayBuffer()).then(t=>{let b=new Uint32Array(t,0,4),z=b[0],M=b[1],E=16+b[2]*12;K0.vb=e.buffer(new Float32Array(t,E,z*9)),K0.el=e.elements({data:new Uint16Array(t.slice(E+z*36,E+z*36+M*2)),type:"uint16"}),K0.n=M}).catch(t=>console.error("Her veil did not load",t));let Rt=e({vert:`
			precision highp float;
			uniform mat4 proj, view, model;
			uniform float yScale, time, breath;
			attribute vec3 position, normal;
			attribute vec2 uv;
			varying vec3 v_pos, v_nrm, v_eye;
			varying vec2 v_uv;
			varying float v_fold;
			${wt}
			void main() {
				vec3 p = position;
				vec3 n = normalize(normal);
				float u = uv.x * 6.28318, v = uv.y;
				// where it hangs free of her head, it gathers into folds...
				float free = smoothstep(0.42, 1.0, v);
				float fold = sin(u * 13.0 + sin(u * 3.0) * 1.6) * 0.6 + sin(u * 22.0 + 1.7) * 0.28 + sin(u * 5.0 + 0.4) * 0.3;
				// ...and the folds move: slow waves running round and down it
				float wv = sin(time * 0.8 + u * 5.0 - v * 4.0) * 0.55 + sin(time * 1.31 + u * 9.0 + v * 3.0) * 0.3 + sin(time * 0.37 + u * 2.0) * 0.4;
				p += n * free * (fold * 0.0075 + wv * 0.0042 * free);
				// the draught: the hem swings a little, now this way, now that
				float sway = sin(time * 0.55 + u * 0.5) * 0.6 + sin(time * 1.1 + 2.0) * 0.4;
				p.x += sway * 0.004 * free * free;
				p.z += cos(time * 0.47 + u) * 0.0025 * free * free;
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
			${E0}
			${te}
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
			}`,attributes:{position:{buffer:()=>K0.vb,stride:36,offset:0},normal:{buffer:()=>K0.vb,stride:36,offset:12},uv:{buffer:()=>K0.vb,stride:36,offset:24}},elements:()=>K0.el,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}},uniforms:{...q,model:()=>he,breath:()=>ce,tvLight:()=>f}}),Ce=[],tt=[];{let t=s0.axis,b=Math.abs(t[1])>.9?[1,0,0]:[0,1,0],z=(Z,a0)=>[Z[1]*a0[2]-Z[2]*a0[1],Z[2]*a0[0]-Z[0]*a0[2],Z[0]*a0[1]-Z[1]*a0[0]],D=(Z=>{let a0=Math.hypot(...Z);return Z.map(b0=>b0/a0)})(z(t,b)),E=z(t,D),W=s0.pos[1]/-t[1],H=40;[1,.82,.64,.46,.3].forEach((Z,a0)=>{let b0=Math.tan(s0.outer*Z)*W;for(let u0=0;u0<H;u0++){let k0=u0/H*Math.PI*2,M0=(u0+1)/H*Math.PI*2,$0=h0=>[0,1,2].map(T0=>A[T0]+s0.pos[T0]+t[T0]*W+(D[T0]*Math.cos(h0)+E[T0]*Math.sin(h0))*b0),N0=[0,1,2].map(h0=>A[h0]+s0.pos[h0]);Ce.push(...N0,...$0(k0),...$0(M0)),tt.push(a0,a0,a0)}})}let qt=e({vert:`
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
			${E0}
			void main() {
				vec3 lp = v_pos - RO;
				float along = length(lp - vec3(${p(s0.pos[0])}, ${p(s0.pos[1])}, ${p(s0.pos[2])})) / ${p(s0.pos[1]/-s0.axis[1])};
				float haze = 0.55 + 0.9 * rfbm(lp.xz * 1.3 + vec2(lp.y * 0.6, time * 0.05)) * rfbm(lp.xy * 0.9 - time * 0.03);
				float dist = length(v_eye - v_pos);
				float a = spotK * haze * (0.55 + 0.45 * smoothstep(1.0, 0.0, along)) * smoothstep(0.0, 0.12, along) * smoothstep(0.98, 0.8, along) * smoothstep(0.3, 1.6, dist);
				gl_FragColor = vec4(vec3(1.0, 0.88, 0.74) * a * 0.045, 1.0);
			}`,attributes:{position:Ce,layer:tt},count:Ce.length/3,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{spotK:()=>xe.k}}),ot=90,nt=[];for(let t=0;t<ot;t++)nt.push(Math.random(),Math.random(),Math.random(),Math.random());let kt=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, yScale, pxScale, spotK;
			attribute vec4 seed;
			varying float v_a;
			void main() {
				vec3 S = vec3(${p(A[0]+s0.pos[0])}, ${p(A[1]+s0.pos[1])}, ${p(A[2]+s0.pos[2])});
				vec3 A = vec3(${p(s0.axis[0])}, ${p(s0.axis[1])}, ${p(s0.axis[2])});
				// somewhere in the cone, drifting slowly down and round
				float al = 0.25 + 0.7 * fract(seed.x - time * 0.004 * (0.5 + seed.w));
				float len = al * ${p(s0.pos[1]/-s0.axis[1])};
				float ang = seed.y * 6.2832 + time * 0.03 * (seed.z - 0.5);
				float rr = sqrt(seed.z) * tan(${p(s0.outer)}) * len * 0.92;
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
			}`,attributes:{seed:nt},count:ot,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2,spotK:()=>xe.k}}),Nt=e({vert:`
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
			}`,attributes:{fp:[].concat(...o0.flames.map((t,b)=>[A[0]+t[0],A[1]+t[1],A[2]+t[2],b*1.37]))},count:o0.flames.length,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2}}),Se=document.createElement("canvas");Se.width=512,Se.height=192;{let t=Se.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,512,192),t.font='bold 128px "Helvetica Neue", Arial, sans-serif',t.textAlign="center",t.textBaseline="middle",t.shadowColor="#ff2a20",t.shadowBlur=28,t.fillStyle="#ff6a5a",t.fillText("ENTER",256,100),t.shadowBlur=0,t.fillStyle="#ffd8d0",t.fillText("ENTER",256,100)}let It=e.texture({data:Se,min:"linear",mag:"linear",wrap:"clamp"}),j0=I0.sign,Re=.3,qe=.1125,ke=j0[2]-.025,Et=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale; attribute vec3 position; attribute vec2 uv; varying vec2 v_uv; void main() { v_uv = uv; vec3 p = position; p.y *= yScale; gl_Position = proj * view * vec4(p, 1.0); }",frag:"precision highp float; uniform sampler2D tex; uniform float signK; varying vec2 v_uv; void main() { vec3 c = texture2D(tex, v_uv).rgb; vec3 col = c * vec3(1.6, 0.55, 0.5) * signK + vec3(0.06, 0.0, 0.0); gl_FragColor = vec4(col, 1.0); }",attributes:{position:[[j0[0]+Re,j0[1]-qe,ke],[j0[0]-Re,j0[1]-qe,ke],[j0[0]-Re,j0[1]+qe,ke],[j0[0]+Re,j0[1]+qe,ke]].map(t=>[t[0]+A[0],t[1]+A[1],t[2]+A[2]]),uv:[[0,1],[1,1],[1,0],[0,0]]},elements:[0,1,2,0,2,3],cull:{enable:!1},uniforms:{tex:It,signK:()=>x}}),at=220,st=[];for(let t=0;t<at;t++)st.push(Math.random(),Math.random(),Math.random(),Math.random());let At=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b;
			void main() {
				vec3 L0 = vec3(${p(A[0]+C.lens[0])}, ${p(A[1]+C.lens[1])}, ${p(A[2]+C.lens[2])});
				vec3 C = vec3(${p(A[0]+C.img.x)}, ${p(A[1]+C.img.y)}, ${p(A[2]+U)});
				vec3 fw = normalize(C - L0);
				vec3 rt = normalize(cross(fw, vec3(0.0, 1.0, 0.0)));
				vec3 up = cross(rt, fw);
				// most of them close to the lens
				float along = 0.15 + pow(seed.x, 2.2) * 7.5;
				float sp = along / length(C - L0);
				vec2 off = (vec2(seed.y, seed.z) - 0.5) * vec2(${p(C.img.w)}, ${p(C.img.h)}) * sp;
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
			}`,frag:"precision highp float; varying float v_b; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vec3(1.0, 0.84, 0.6) * v_b * a, 1.0); }",attributes:{seed:st},count:at,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2}}),Ve=70,rt=[];for(let t=0;t<Ve;t++)rt.push(Math.random(),Math.random(),Math.random(),t<Ve*.6?1:0);let $t=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b, v_a, v_s;
			void main() {
				vec3 L0 = vec3(${p(A[0]+C.lens[0])}, ${p(A[1]+C.lens[1])}, ${p(A[2]+C.lens[2])});
				vec3 C = vec3(${p(A[0]+C.img.x)}, ${p(A[1]+C.img.y)}, ${p(A[2]+U)});
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
				float rc = 0.04 + al * ${p(C.img.h*.5)} / length(C - L0);
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
			${E0}
			void main() {
				vec2 d = gl_PointCoord - 0.5;
				float g = exp(-dot(d, d) * 9.0);
				float n = rnoise(gl_PointCoord * 3.2 + v_s + time * 0.05) * 0.7 + rnoise(gl_PointCoord * 7.0 - v_s) * 0.3;
				float a = g * smoothstep(0.2, 0.8, n) * v_a * 0.15;
				gl_FragColor = vec4(mix(vec3(0.5, 0.06, 0.04), vec3(1.0, 0.86, 0.68), clamp(v_b - 0.12, 0.0, 1.0)) * v_b * a, 1.0);
			}`,attributes:{seed:rt},count:Ve,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2}}),ct=2200,it=[];for(let t=0;t<ct;t++)it.push(Math.random(),Math.random(),Math.random(),Math.random());let Pt=e({vert:Zt,frag:Qt,attributes:{seed:it},count:ct,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2}}),lt=!1,ft=t=>{let b=!!(t&&t.reflected);b||k(),lt=b;let z=performance.now()/1e3;ce=_e(z);let M=.8+.12*Math.sin(z*47)*Math.sin(z*3.1)+.08*Math.sin(z*23+1.3);f[0]=.8*M,f[1]=.84*M,f[2]=.95*M,x=N(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:z),P(),Et(),m0(),d0&&T(),Te(),Le(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:z),m&&!(typeof window!="undefined"&&window.__noBeam)&&ue(),w0(),!b&&!(typeof window!="undefined"&&window.__noSmoke)&&$t(),b||At(),b||Pt()};return ft.reflect=(t,b)=>c(z=>{let M=z.viewportWidth,D=z.viewportHeight,E=Math.max(2,Math.round(M/2)),W=Math.max(2,Math.round(D/2)),H=!s;if((n.width!==E||n.height!==W)&&(n.resize(E,W),H=!0),w[0]=M,w[1]=D,i=1,!H&&++l%b!==0){a=R;return}a=o,r(()=>{e.clear({color:[0,0,0,1],depth:1}),t()}),a=R,s=!0}),ft};var Be=null;Object.assign(Ke.exports,{O:A,W:S,L:U,H:r0,ROOM:{W:S,L:U,H:r0,WIN:j,DOOR:_0,ENT:I0,SHAFTS:Q,TV:J,DARK:V,PROJ:C,CABLE:R0,POL:X0,TBL:o0,WOMAN:c0,winZ:Ee,vaultY:J0},POST:{threshold:.3},sunGLSL:jt,bakedSun(e){return Be||(Be=e.texture({width:1,height:1,data:[0,0,0,0]})),Be},ready:()=>!0,setFlower(){},setGuide(){},setWind(){},setSpot(e){xe.k=e},setWarn(e){Object.assign(S0,e)},setViewer(e){gt.eye=e?e.slice():null},setPulse(e,u){Ae.phase=e,Ae.period=u},onClick(e){Fe.click=e}})});var Tt=Ge((co,Mt)=>{"use strict";var x0=Xe(),{O:Ye}=x0,{W:y0,L:bt,TV:ve,DARK:oe,PROJ:ae,TBL:L0,WOMAN:Pe}=x0.ROOM,_t=e=>[e[0]+Ye[0],e[1]+Ye[1],e[2]+Ye[2]],Ze=(e,u,g)=>e+(u-e)*g,de=e=>Math.max(0,Math.min(1,e)),Jt="Some grief is not yours to witness.",H0=e=>(e=de(e),e*e*(3-2*e)),Oe=[Pe.x,0,Pe.z],Je=Math.sin(Pe.yaw),et=Math.cos(Pe.yaw),P0=(e,u,g)=>[Oe[0]+Je*e+et*(g||0),u,Oe[2]+et*e-Je*(g||0)],O0=ae.x,Lt=ae.table,ne=ae.z,we=[O0+ae.feed[0],Lt+ae.feed[1],ne+ae.feed[2]],$e=ae.lens,Qe=oe.trays[0],eo=[{eye:[y0/2+.15,1.55,-9.6],at:[y0/2,1.7,0],fov:40,dof:.05,p:{fov:58}},{eye:[y0/2+.05,1.6,-3],at:[y0/2,1.85,1.5],fov:50,dof:.05,p:{fov:70}},{eye:[y0/2-.2,1.5,.9],at:[y0/2-3,1.4,7],fov:56,dof:.04,p:{fov:74}},{eye:[y0-4.4,1.55,1.2],at:[y0-.7,1.05,L0.z+.2],fov:46,dof:.06,p:{eye:[y0-4.8,1.6,.9],fov:68}},{eye:[L0.x-1.4,L0.top+.48,L0.z-.7],at:[L0.x+.05,L0.top+.26,L0.z+0],fov:40,dof:.32,p:{fov:50}},{eye:[L0.stack[0]-.35,L0.top+.75,L0.stack[1]-.25],at:[L0.stack[0]+.02,L0.top,L0.stack[1]+.02],fov:34,dof:.3,p:{fov:50}},{eye:[3.3,1.55,1.3],at:[.3,1.35,5.2],fov:50,dof:.05,p:{eye:[2.8,1.6,.9],fov:72}},{eye:[1.05,1.5,Qe-.42],at:[oe.TXc-.02,oe.liquid,Qe+.04],fov:34,dof:.2,p:{eye:[1,1.55,Qe-.45],fov:52}},{eye:[.95,1.22,oe.cam.z-.5],at:[oe.cam.x-.02,oe.cam.y+.04,oe.cam.z+.06],fov:34,dof:.34,p:{fov:48}},{eye:[1.75,1.45,9],at:[.35,1.08,10.8],fov:46,dof:.12,p:{eye:[1.9,1.5,8.6],fov:66}},{eye:[2,1.6,8.3],at:[.4,2.25,11.3],fov:50,dof:.12,p:{eye:[1.8,1.6,8.1],fov:72}}];function zt(e,u){let g=e.length-1,y=Math.max(0,Math.min(g,u)),R=Math.min(g-1,Math.floor(y)),n=y-R,r=e[Math.max(0,R-1)],o=e[R],c=e[R+1],a=e[Math.min(g,R+2)],i=n*n,l=i*n;return[0,1,2].map(s=>.5*(2*o[s]+(-r[s]+c[s])*n+(2*r[s]-5*o[s]+4*c[s]-a[s])*i+(-r[s]+3*o[s]-3*c[s]+a[s])*l))}var be=0;function to(){let e=eo.slice(),u=x0.ROOM.CABLE,g=u.path,y=u.socket[2],R=u.socket[0];e.push({eye:[R+1.05,.42,y-.45],at:[R,.27,y+.08],fov:42,dof:.32,p:{eye:[R+1.3,.48,y-.55],fov:58}});let[n,r]=u.run;for(let d of[.04,.22,.42,.62,.82]){let v=Math.round(n+(r-n)*d),h=g[Math.max(0,v-6)],k=g[Math.min(g.length-1,v+6)],_=g[v],x=k[0]-h[0],N=k[2]-h[2],q=Math.hypot(x,N)||1;x/=q,N/=q,e.push({eye:[_[0]-x*.8-N*.12,.3,_[2]-N*.8+x*.12],at:[_[0]+x*1.5,.06,_[2]+N*1.5],fov:44,dof:.24,pass:!0,p:{fov:60}})}e.push({eye:[y0-3,.45,y-1.6],at:[y0-.3,1.9,y+.9],fov:50,dof:.1,p:{fov:70}});let o=(d,v,h)=>[d[0]+v[0]*h,d[1]+v[1]*h,d[2]+v[2]*h],c=11,a=()=>(c=c*16807%2147483647,(c-1)/2147483646),i=(x0.ROOM.POL.spots||[]).filter(d=>d.n[0]<-.5&&d.c[2]>10.5&&d.c[2]<21.5&&d.c[1]>1.9&&d.c[1]<4.6),l=(d,v)=>Math.abs(d.c[2]-v)+Math.abs(d.c[1]-3)*.4,s=[];for(let d of[12.6,15,17.3]){let v=null;for(let h of i)(!v||l(h,d)<l(v,d))&&(v=h);v&&s.indexOf(v)<0&&s.push(v)}s.forEach((d,v)=>{let h=d.n,k=d.c;v>0&&e.push({eye:o(o(k,h,2.2),[0,.15,-.6],1),at:k,fov:50,dof:.05,pass:!0}),e.push({eye:o(o(k,h,1),[0,.06,-.3],1),at:k,fov:36,dof:.26,p:{fov:50}})}),e.push({eye:[O0+2,1.35,ne-1.5],at:[O0,1.35,ne+.1],fov:42,dof:.12,p:{eye:[O0+1.6,1.4,ne-1.5],fov:62}}),e.push({eye:[O0+.85,we[1]+.12,we[2]-.35],at:[we[0],we[1]-.05,we[2]],fov:36,dof:.32,p:{fov:52}}),e.push({eye:[O0+.42,$e[1]+.08,$e[2]+1.35],at:[O0,$e[1],$e[2]],fov:36,dof:.35,p:{fov:52}}),e.push({eye:[O0-.55,1.75,ne-1.4],at:[y0/2,5,bt],fov:50,dof:.06,p:{fov:70}}),e.push({eye:[O0-.2,3.3,ne+3.2],at:[y0/2,5.4,bt],fov:52,dof:.04,pass:!0,p:{fov:72}});let w=ve.stack;e.push({eye:[y0/2+1.4,1.2,ve.z-4.9],at:[y0/2,1.75,ve.z],fov:50,dof:.05,p:{fov:70}});let f=w.map((d,v)=>v);for(let d=f.length-1;d>0;d--){let v=Math.floor(a()*(d+1)),h=f[d];f[d]=f[v],f[v]=h}f=f.slice(0,10);let m=null;for(let d of f){let v=w[d],h=v.screen,k=v.facing,_=v.size*1.25;if(m){let N=[(m[0]+h[0])/2,(m[1]+h[1])/2+.2,Math.min(m[2],h[2])-2.6];e.push({eye:N,at:[(m[0]+h[0])/2,(m[1]+h[1])/2,ve.z],fov:46,dof:.05,pass:!0})}let x=(a()-.5)*.5;e.push({eye:[h[0]+k[0]*_+x,h[1]+.05+(a()-.5)*.15,h[2]+k[2]*_],at:[h[0],h[1],h[2]],fov:30,dof:.3,p:{fov:44}}),m=h}return e.push({eye:[y0/2+.3,3.3,ve.z-2.3],at:[y0/2,2.4,ve.z+3],fov:52,dof:.04,pass:!0}),e.push({eye:P0(-.9,4.4,.2),at:P0(4.6,1.5),fov:54,dof:.04,pass:!0}),be=e.length,e.push({eye:P0(-3.4,2.5,-1.5),at:P0(1,.75),fov:46,dof:.08,p:{fov:66}}),e.push({eye:P0(-2.55,2.3,0),at:P0(5.2,.95),fov:56,dof:.12,p:{eye:P0(-2.55,2.4,0),fov:74}}),e.push({eye:P0(-1.6,.92,0),at:P0(3,1.02),fov:50,dof:.28,p:{eye:P0(-1.9,.95,0),fov:64}}),e}function oo(){let e=null,u=null,g=null,y=null,R=null,n=c=>{let a=e.createBuffer(1,Math.floor(e.sampleRate*c),e.sampleRate),i=a.getChannelData(0);for(let l=0;l<i.length;l++)i[l]=Math.random()*2-1;return a},r=()=>{if(e){e.state==="suspended"&&e.resume();return}let c=window.AudioContext||window.webkitAudioContext;if(!c)return;e=window.__redAudio||new c,window.__redAudio=e,e.state==="suspended"&&e.resume(),y=e.createGain(),y.gain.value=.9,y.connect(e.destination),u=e.createGain(),u.gain.value=0;let a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=170,a.Q.value=4,[55,55.6,110.3].forEach((s,w)=>{let f=e.createOscillator();f.type=w<2?"sawtooth":"sine",f.frequency.value=s,f.connect(a),f.start()}),a.connect(u),u.connect(y),g=e.createGain(),g.gain.value=0;let i=e.createBufferSource();i.buffer=n(2),i.loop=!0;let l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=3200,l.Q.value=.6,i.connect(l),l.connect(g),g.connect(y),i.start()},o=(c,a,i,l,s)=>{c.gain.setValueAtTime(0,a),c.gain.linearRampToValueAtTime(l,a+i),c.gain.exponentialRampToValueAtTime(1e-4,a+i+s)};return{start:r,set(c,a){if(!e)return;let i=e.currentTime;u.gain.setTargetAtTime(c*.16,i,.15),g.gain.setTargetAtTime(a*.035,i,.08)},tick(){if(!e)return;let c=e.currentTime,a=e.createOscillator();a.type="square",a.frequency.setValueAtTime(1180,c),a.frequency.exponentialRampToValueAtTime(240,c+.09);let i=e.createGain();o(i,c,.002,.09,.12),a.connect(i),i.connect(y),a.start(c),a.stop(c+.2);let l=e.createOscillator();l.type="sine",l.frequency.setValueAtTime(90,c),l.frequency.exponentialRampToValueAtTime(40,c+.2);let s=e.createGain();o(s,c,.004,.35,.25),l.connect(s),s.connect(y),l.start(c),l.stop(c+.35)},clunk(){if(!e)return;let c=e.currentTime,a=e.createOscillator();a.type="sine",a.frequency.setValueAtTime(75,c),a.frequency.exponentialRampToValueAtTime(38,c+.25);let i=e.createGain();o(i,c,.003,.5,.35),a.connect(i),i.connect(y),a.start(c),a.stop(c+.5);let l=e.createBufferSource();l.buffer=n(.08);let s=e.createBiquadFilter();s.type="highpass",s.frequency.value=1800;let w=e.createGain();o(w,c,.001,.25,.06),l.connect(s),s.connect(w),w.connect(y),l.start(c)},burst(){if(!e)return;let c=e.currentTime,a=e.createBufferSource();a.buffer=n(2.4);let i=e.createBiquadFilter();i.type="bandpass",i.Q.value=.7,i.frequency.setValueAtTime(600,c),i.frequency.exponentialRampToValueAtTime(5e3,c+1.6);let l=e.createGain();l.gain.setValueAtTime(1e-4,c),l.gain.exponentialRampToValueAtTime(.5,c+.5),l.gain.setValueAtTime(.5,c+1.7),l.gain.exponentialRampToValueAtTime(1e-4,c+2.3),a.connect(i),i.connect(l),l.connect(y),a.start(c);let s=e.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(110,c),s.frequency.exponentialRampToValueAtTime(18,c+2);let w=e.createGain();o(w,c,.05,.18,2),s.connect(w),w.connect(y),s.start(c),s.stop(c+2.2)},beat(c){if(!e||c<.01)return;let a=e.currentTime;[[0,1],[.24,.62]].forEach(([i,l])=>{let s=a+i,w=e.createBiquadFilter();w.type="bandpass",w.frequency.value=340,w.Q.value=1.4;let f=e.createGain();o(f,s,.012,.22*l*c,.16),[100,150.4,200.9].forEach((h,k)=>{let _=e.createOscillator();_.type=k===1?"square":"sawtooth",_.frequency.setValueAtTime(h*1.04,s),_.frequency.exponentialRampToValueAtTime(h,s+.12),_.connect(w),_.start(s),_.stop(s+.32)});let m=e.createBufferSource();m.buffer=n(.18);let d=e.createBiquadFilter();d.type="highpass",d.frequency.value=2600;let v=e.createGain();o(v,s,.004,.05*l*c,.1),m.connect(d),d.connect(v),v.connect(y),m.start(s),w.connect(f),f.connect(y)})},buzz(c){if(e){if(!R){R=e.createGain(),R.gain.value=0;let a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=260,a.Q.value=2.2,[100,100.7,300.2].forEach((i,l)=>{let s=e.createOscillator();s.type=l===2?"square":"sawtooth",s.frequency.value=i,s.connect(a),s.start()}),a.connect(R),R.connect(y)}R.gain.setTargetAtTime(c*.03,e.currentTime,.2)}},click(c,a){if(!e||c<.01)return;let i=e.currentTime,l=e.createBufferSource();l.buffer=n(.05);let s=e.createBiquadFilter();s.type="bandpass",s.frequency.value=a?1900:3100,s.Q.value=2.5;let w=e.createGain();o(w,i,8e-4,.55*c,.035),l.connect(s),s.connect(w),w.connect(y),l.start(i);let f=e.createOscillator();f.type="triangle",f.frequency.setValueAtTime(a?210:340,i),f.frequency.exponentialRampToValueAtTime(a?90:160,i+.06);let m=e.createGain();o(m,i,.001,(a?.32:.2)*c,.08),f.connect(m),m.connect(y),f.start(i),f.stop(i+.15);let d=e.createBufferSource();d.buffer=n(.03);let v=e.createBiquadFilter();v.type="bandpass",v.frequency.value=4200,v.Q.value=3;let h=e.createGain();o(h,i+.055,8e-4,.22*c,.025),d.connect(v),v.connect(h),h.connect(y),d.start(i+.055)},stop(){if(R&&(R.gain.value=0),R=null,u&&(u.gain.value=0),g&&(g.gain.value=0),y)try{y.disconnect()}catch(c){}e=null,u=g=y=null}}}var no=`
.red-sub {
	position: fixed; left: 50%; bottom: 9vh; transform: translateX(-50%); z-index: 406;
	width: min(92vw, 900px); text-align: center; pointer-events: none;
	font: italic 400 clamp(19px, 2.5vw, 32px)/1.35 'Cormorant Garamond', Georgia, serif;
	color: #f1e7dc; letter-spacing: .035em; text-shadow: 0 2px 18px rgba(0,0,0,.9), 0 0 2px rgba(0,0,0,.8);
	opacity: 0;
}`;Mt.exports=function(u){u=u||{};let g=to(),y=g.length-1,R=g.map((T,I)=>T.pass?-1:I).filter(T=>T>=0),n=(T,I)=>{if(I>=0){for(let O of R)if(O>=T-.06)return O;return R[R.length-1]}for(let O=R.length-1;O>=0;O--)if(R[O]<=T+.06)return R[O];return R[0]},r=(T,I)=>{if(I>0){for(let O of R)if(O>T+.01)return O;return R[R.length-1]}for(let O=R.length-1;O>=0;O--)if(R[O]<T-.01)return R[O];return R[0]},o=null,c=null,a=0,i=0,l=0,s=null,w=null,f=0,m=oo(),d={phase:0,period:1.2,beat:0},v=0;x0.onClick(T=>m.click(v,T));let h=document.createElement("div");h.className="red-sub",h.textContent=Jt;let k=document.createElement("style");k.textContent=no,document.head.appendChild(k),document.body.appendChild(h);let _=0,x=0,N=null,q=-10,P=0,G=null,$=1,K=-10,e0=[],X=(T,I,O)=>{window.addEventListener(T,I,O),e0.push([T,I,O])},l0=T=>{let I=Math.sign(T);if(!(!I||s!==null)){if(I>0&&x>=y-.001&&_>y-.08||I<0&&i>0){let O=i<1?2.2:.75;i=Math.max(0,Math.min(2.4,i+Math.max(-.2,Math.min(.13,T))*O)),q=P,K=P,$=I;return}I!==$&&P-K<.25&&Math.abs(T)<.02||(I!==$&&($=I),K=P,x=Math.max(0,Math.min(y,x+T)),q=P)}},n0=T=>{if(s===null){if(T>0&&x>=y-.001||T<0&&i>0){l0(T>0?.12:-.12);return}$=T>0?1:-1,x=r(x,T),q=P-10}};X("pointerdown",()=>m.start()),X("keydown",()=>m.start()),X("touchend",()=>m.start()),X("wheel",T=>{if(T.target.closest&&T.target.closest(".st-ui"))return;T.preventDefault();let I=T.deltaMode===1?T.deltaY*16:T.deltaMode===2?T.deltaY*window.innerHeight:T.deltaY;l0(Math.max(-.6,Math.min(.6,I/700)))},{passive:!1});let t0=null;X("pointerdown",T=>{T.target.closest&&T.target.closest("button, a, .st-ui")||(t0={lx:T.clientX,ly:T.clientY,moved:0,t:performance.now()})}),X("pointermove",T=>{if(!t0)return;let I=T.clientX-t0.lx,O=T.clientY-t0.ly;t0.lx=T.clientX,t0.ly=T.clientY;let i0=Math.abs(O)>=Math.abs(I)?-O:-I;t0.moved+=Math.abs(i0),t0.moved>6&&l0(i0/(window.innerHeight*.55))}),X("pointerup",()=>{let T=t0;t0=null,T&&T.moved<8&&performance.now()-T.t<450&&n0(1)}),X("keydown",T=>{T.key==="ArrowDown"||T.key==="ArrowRight"||T.key==="PageDown"||T.key===" "?n0(1):(T.key==="ArrowUp"||T.key==="ArrowLeft"||T.key==="PageUp")&&n0(-1)});function m0(T){P=T,G===null&&(G=T);let I=N===null?0:Math.min(.1,T-N);N=T,typeof window!="undefined"&&window.__redShot!==void 0&&/tourdebug/.test(location.search)&&(_=x=window.__redShot,o=null),typeof window!="undefined"&&window.__press!==void 0&&/tourdebug/.test(location.search)&&(i=a=window.__press),P-q>.35&&(x+=(n(x,$)-x)*(1-Math.exp(-I*2))),_+=(x-_)*(1-Math.exp(-I*1.7)),Math.abs(x-_)<1e-4&&(_=x);let O=window.innerWidth<window.innerHeight,i0=g.map(F=>O&&F.p?Object.assign({},F,F.p):F),D0=Math.min(y-1,Math.floor(_)),se=_-D0,re=se*se*(3-2*se),v0=zt(i0.map(F=>F.eye),_),B=zt(i0.map(F=>F.at),_);(!o||I===0||I>.09)&&(o=v0.slice(),c=B.slice());let ce=1-Math.exp(-I*5);for(let F=0;F<3;F++)o[F]+=(v0[F]-o[F])*ce,c[F]+=(B[F]-c[F])*ce;v0=o.slice(),B=c.slice();let _e=i0[D0],ie=i0[Math.min(y,D0+1)],ze=Ze(_e.fov,ie.fov,re),le=Ze(_e.dof,ie.dof,re);P-q>2.2&&s===null&&(i=Math.max(0,i-I*.14));let Le=a<1?.9:.55;a+=Math.max(-Le*I*2,Math.min(Le*I,i-a)),a>2.08&&s===null&&(s=T,m.burst());let C0=de(a),B0=de(a-1),ue=Math.min(10,Math.max(0,(a-1)*10.5));if(Math.floor(ue)>l&&(m.tick(),navigator.vibrate))try{navigator.vibrate(28)}catch(F){}l=Math.floor(ue);let w0=s===null?0:de((T-s)/2.3);typeof window!="undefined"&&window.__xk!==void 0&&/tourdebug/.test(location.search)&&(w0=window.__xk);let fe=H0(C0)*.28+B0*.06;v0=[v0[0]+Je*fe,v0[1]-fe*.08,v0[2]+et*fe];let pe=C0*.004+B0*.008+w0*.05;v0[0]+=Math.sin(T*37)*pe,v0[1]+=Math.sin(T*41+1)*pe;let me=_>be-.35?1:0;me&&!f&&(f=1,w=T,m.clunk()),!me&&f&&_<be-.8&&(f=0);let ye=0;if(f){let F=T-w;ye=F<.75?[0,1,.15,.9,.3,1][Math.min(5,Math.floor(F/.125))]:1}let F0=Math.sin(T*13)*Math.sin(T*5.3);ye*=1-(C0*.25+B0*.3)*(F0>.6?1:0)-w0*(Math.sin(T*60)>0?.8:0),x0.setSpot(Math.max(0,ye));{let F=v0,Z0=Math.hypot(F[0]-Oe[0],F[2]-Oe[2]),Q0=Ze(.68,1.35,de((Z0-1.5)/12));d.phase+=I/d.period,d.period=Q0;let V0=1e9,z0=x0.ROOM.CABLE.path;for(let G0=0;G0<z0.length;G0+=6){let ge=Math.hypot(F[0]-z0[G0][0],F[1]-z0[G0][1],F[2]-z0[G0][2]);ge<V0&&(V0=ge)}let he=1/(1+V0*V0*.18);Math.floor(d.phase)>d.beat&&(d.beat=Math.floor(d.phase),m.beat(he*(1-w0))),m.buzz((.25+he)*(1-w0)),x0.setPulse(d.phase,d.period);let Te=Math.hypot(F[0]-O0,F[1]-Lt,F[2]-ne);v=(1-w0)/(1+Te*Te*.05)}x0.setWarn({s:H0((a-.12)/.45),n:ue,glitch:H0(w0*1.6),freeze:a>.15}),h.style.opacity=String(H0((a-.35)/.4)*(1-H0((w0-.1)/.3))*(.88+.12*Math.sin(T*2))),m.set(H0(C0)*(1-w0)+B0*.5,H0((a-.12)/.45)*(1-w0*.5)),s!==null&&w0>=1&&(u.onExpel?u.onExpel():p0(),s=null);let U0=typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:T,Me=Math.hypot(B[0]-v0[0],B[1]-v0[1],B[2]-v0[2]),Y=.01+.03*Math.min(1,Me/6);v0=[v0[0]+Math.sin(U0*.31)*Y,v0[1]+Math.sin(U0*.43+1)*Y*.6,v0[2]+Math.cos(U0*.27)*Y],B=[B[0]+Math.sin(U0*.21+2)*Y*.8,B[1]+Math.sin(U0*.37)*Y*.5,B[2]];let A0=_t(v0),Y0=_t(B),De=Math.max(1-de((T-G-.3)/1.8),H0((w0-.82)/.18));return x0.setViewer(A0),{eye:A0,target:Y0,fov:ze,roll:Math.sin(U0*.17)*.004,moving:!0,look:{letterbox:.45,focus:Me,aperture:le,vignette:.3+C0*.25,exposure:1.45,shafts:1,fade:De,fadeColor:[0,0,0],glitch:H0((w0-.25)/.6)*.9+B0*.06}}}function p0(){a=i=0,l=0,s=null,f=0,_=x=0,o=null,G=null,x0.setWarn({s:0,n:0,glitch:0,freeze:!1}),x0.setSpot(0)}function d0(){for(let[T,I,O]of e0)window.removeEventListener(T,I,O);e0.length=0,m.stop(),h.remove(),k.remove(),x0.setWarn({s:0,n:0,glitch:0,freeze:!1}),x0.setSpot(0),x0.setViewer(null),x0.onClick(null)}return/tourdebug/.test(location.search)&&(window.__redTourInfo={END:y,REVEAL:be,STOPS:R}),{update:m0,tap:()=>n0(1),dispose:d0,placeFlower(){},startSound:()=>m.start(),get scroll(){return _},END:y,REVEAL:be}}});window.__redRoom={studio:Xe(),tour:Tt()};})();

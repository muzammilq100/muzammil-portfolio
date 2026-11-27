"use strict";(()=>{var Be=(e,m)=>()=>(m||e((m={exports:{}}).exports,m),m.exports);var gt=Be((po,mt)=>{"use strict";var X0=[-90,0,0],Fe=16,We=27.5,Ue=11.6;mt.exports={O:X0,W:Fe,L:We,RIDGE:Ue,BOX:[X0[0]-.8,0,X0[2]-11.5,X0[0]+Fe+.8,Ue+.5,X0[2]+We+.8],AIR_BOX:[X0[0],0,X0[2],X0[0]+Fe,Ue,X0[2]+We]}});var Qe=Be((ho,Ze)=>{"use strict";var{O:I,W:S,L:F}=gt(),d=e=>(+e).toFixed(4),i0=10.5,Ie=.7,yt=3,G={hw:1.25,sill:1.35,spring:6.9,n:4,step:6.35};G.z0=F/2-G.step*(G.n-1)/2;G.apex=G.spring+G.hw*Math.sqrt(3);var $e=e=>G.z0+G.step*e;G.leftFrom=2;var X=(()=>{let m=G.z0,w={k:1.42,z:m,top:.543*1.42,half:.601*1.42,depth:.706*1.42};return w.x=S-.12-w.depth/2,w.candles=[[S-.4,m-.52,1],[S-.3,m-.3,.62],[S-.36,m+.42,.38],[S-.86,m-.06,.55],[S-.24,m+.66,.85],[S-.8,m+.42,.3]],w.vase={x:S-.55,z:m+.06,h:.24},w.flames=w.candles.map(([y,q,a])=>[y,w.top+.156+.144*a+.018,q]),w.laid=[[S-.66,m-.22,Math.PI/2+.5],[S-.62,m-.36,Math.PI/2+.15],[S-.7,m+.26,Math.PI/2-.6]],w.stack=[S-.88,m-.5],w.occ=[[S-.55,w.top+.46,m+.06,.15],[S-.55,w.top+.26,m+.06,.06],[S-.55,w.top+.11,m+.06,.08],...w.laid.map(([y,q,a])=>[y-Math.sin(a)*.15,w.top+.05,q-Math.cos(a)*.15,.065])],w})(),Ht="LEAVEHERBE",ze={k:0},k0={s:0,n:0,glitch:0,freeze:!1,frozenAt:null},Pe={phase:0,period:1.2},Xe={click:null},zt={eye:null},Bt=()=>{let e=zt.eye;return e?(e[0]-I[0]-c0.x)*Math.sin(c0.yaw)+(e[2]-I[2]-c0.z)*Math.cos(c0.yaw)>-.25:!1};G.lowSill=X.top+.06;var c0={x:S/2,z:18.6,k:1.3};c0.yaw=Math.atan2(S/2-c0.x,21.2-c0.z);{let e=Math.sin(c0.yaw),m=Math.cos(c0.yaw),w=(y,q,a)=>[c0.x+e*y,q,c0.z+m*y,a];c0.occ=[w(0,1.17,.13),w(-.02,.86,.22),w(.1,.42,.36),w(-.3,.62,.17)]}var r0=(()=>{let e=Math.sin(c0.yaw),m=Math.cos(c0.yaw),w=[c0.x-e*1.4,8.4,c0.z-m*1.4],y=[c0.x+e*.25,.55,c0.z+m*.25],q=[y[0]-w[0],y[1]-w[1],y[2]-w[2]],a=Math.hypot(...q);return{pos:w,axis:q.map(r=>r/a),inner:.115,outer:.17,reach:a}})(),Z=[];for(let e=0;e<=G.n;e++)Z.push(G.z0+G.step*(e-.5));var L0={hw:.75,h:2.6,depth:.7},D0={hw:1.8,h:3.6,z:-11,sign:[S/2,L0.h+.32,-L0.depth-.05],open:2.2},Q={z:21.2,G:2.4,models:{sony:{file:"res/redroom/tv_sony.bin",tex:3,w:.36,h:.341,d:.455,dark:.55},crt:{file:"res/redroom/tv_crt.bin",tex:3,w:.47,h:.454,d:.389,dark:.9},old:{file:"res/redroom/tv_old.bin",tex:1,w:.62,h:.418,d:.416,dark:.75}}};Q.stack=[["old",0,-1.41,2,.04],["crt",0,.05,-1,-.02],["sony",0,1.24,-2,.06],["crt",1,-1.16,3,.02],["sony",1,-.03,-1,.04],["crt",1,1.14,-3,.06],["sony",2,-.73,2,.06],["old",2,.66,-2,.03],["crt",0,-2.78,3,.08],["sony",1,-2.68,4,.1],["old",0,2.5,-3,.08],["sony",1,2.32,-4,.1]];var Ft={sony:[0,.194],crt:[0,.27],old:[.0625,.2145]};(()=>{let e=[];for(let m of Q.stack){let w=Q.models[m[0]],y=m[1],q=m[2],a=w.w*Q.G,r=0;for(let s of e)s.row>=y||Math.abs(s.dx-q)<(s.w+a)/2*.92&&(r=Math.max(r,s.top));e.push({dx:q,row:y,w:a,top:r+w.h*Q.G*.99}),m.base=r;let o=Ft[m[0]],i=m[3]*Math.PI/180;m.screen=[S/2+q+o[0]*Q.G,r+o[1]*Q.G,Q.z+m[4]],m.facing=[-Math.sin(i),0,-Math.cos(i)],m.size=w.w*Q.G}})();Q.letters=(()=>{let e=[1,0].map(w=>Q.stack.map((y,q)=>[q,y]).filter(([,y])=>y[1]===w).sort((y,q)=>q[1].screen[0]-y[1].screen[0]).map(([y])=>y)),m=Q.stack.map(()=>-1);return[...e[0],...e[1]].forEach((w,y)=>{m[w]=y}),m})();X.letters=[{x:X.x-.39,z:X.z+.2,a:.12,w:.2,h:.292,y:.0012},{x:X.x-.37,z:X.z+.5,a:-.22,w:.2,h:.292,y:.0024}];var Ae={x0:.3,x1:.56,z0:12.38,z1:12.7,h:.055},O=(()=>{let e={top:.92,depth:.78};return e.a=[Z[0]+.7,Z[1]-.55],e.b=[Z[1]+.55,Z[2]-.7],e.basin={x0:.08,x1:e.depth-.07,z0:e.a[0]+.1,z1:e.a[1]-.1,floor:e.top-.1},e.TX=.44,e.TZ=.54,e.TH=.075,e.TXc=(e.basin.x0+e.basin.x1)/2,e.trays=[e.a[0]+1.1,e.a[0]+1.72,e.a[0]+2.34],e.liquid=e.basin.floor+.05,e.bulb=[e.TXc+.02,1.39,e.trays[0]+.05],e.tube={x:.07,y:3.05,z0:e.b[0]+.2,z1:e.b[1]-.2},e.cam={x:.43,y:e.basin.floor,z:e.trays[0]-e.TZ/2-.3},e.hung=[],e.ash={x:.6,z:11.62},e.lines=[[.32,2.74,Z[0],Z[1],.12],[.74,2.52,Z[0],Z[1],.17],[1.1,2.62,Z[0],Z[1],.2],[.3,2.76,Z[1],Z[2],.15],[.68,2.46,Z[1],Z[2],.19],[1.06,2.66,Z[1],Z[2],.22],[.5,1.98,Z[1],Z[2],.12],[.45,2.98,Z[0],Z[1],.1,1.45],[1.45,2.4,Z[0],Z[1],.2],[.95,2.26,Z[0],Z[1],.13,.4],[1.4,3,Z[1],Z[2],.14,.45],[1.5,2.36,Z[1],Z[2],.22],[.9,2.2,Z[1],Z[2],.15,1.35]],e})(),C=(()=>{let e={x:S/2-.006,z:14.92,tableK:1.25,pitch:.1};e.table=.761*e.tableK,e.feed=[.0254,.7696,.3364],e.takeup=[.0252,.2484,.337],e.lensL=[.006,.456,.15];let m=Math.cos(e.pitch),w=Math.sin(e.pitch),y=e.lensL;return e.lens=[e.x+y[0],e.table+y[1]*m+y[2]*w,e.z-y[1]*w+y[2]*m],e.img={x:S/2,y:6,w:6.4},e.img.h=e.img.w*.75,e})(),h0={x0:4.2,x1:11.8,y:9,z:F-.16},N0={r:.045};(()=>{let e=N0.r,m=O.depth,w=O.b[1]-.22;N0.socket=[m,.3,w],N0.ctrl=[[m+.1,.3,w],[m+.2,.295,w],[m+.3,.22,w+.02],[m+.42,e,w+.1],[m+.8,e,w+.3],[1.8,e,w+.45],[3.4,e,w+.1],[5.2,e,w-.55],[7.2,e,w-.95],[9.4,e,w-.9],[11.4,e,w-.45],[13.2,e,w+.1],[S-1.15,e,w+.55],[S-.85,e,w+1.05],[S-.85,e,15.2],[S-1.1,e,16.3],[S-1.7,e,17.2],[S-2.5,e,17.9],[12.9,e,18.5],[11.5,e,18.9],[10.6,e,19.5],[10.5,e,20.3],[11.2,e,20.5],[10.9,e,19.95],[10,e*2.2,20.1],[9.3,e,20.75],[9.5,e,21.9],[8.6,e,22.25],[8.1,.22,21.95]];let y=N0.ctrl,q=[];for(let o=0;o<y.length-1;o++){let i=y[Math.max(0,o-1)],s=y[o],c=y[o+1],l=y[Math.min(y.length-1,o+2)],n=Math.max(2,Math.ceil(Math.hypot(c[0]-s[0],c[1]-s[1],c[2]-s[2])/.06));for(let b=0;b<n;b++){let p=b/n,u=p*p,v=u*p;q.push([0,1,2].map(f=>.5*(2*s[f]+(-i[f]+c[f])*p+(2*i[f]-5*s[f]+4*c[f]-l[f])*u+(-i[f]+3*s[f]-3*c[f]+l[f])*v)))}}q.push(y[y.length-1].slice());for(let o of q)o[1]<e&&o[2]>-1.4&&(o[1]=e);N0.path=q;let a=q.findIndex(o=>o[1]<=e*1.01),r=q.findIndex((o,i)=>i>a&&o[0]>S-1.3);N0.run=[a,r]})();var Q0={spots:[],w:.36,h:.435,n:55,lines:[{z:F-1.7,y:6.5,sag:1},{z:F-2.6,y:5.3,sag:.8}]},E0=(()=>{let e=[-.62,.75,-.16],m=Math.hypot(...e);return e.map(w=>w/m)})(),re=(()=>{let e=S/2;return(e*e+yt*yt)/(2*e)})(),ne=e=>{let m=e<=S/2?e:S-e;return i0+Math.sqrt(Math.max(0,re*re-(m-re)*(m-re)))},L={FLOOR:0,WALL:1,REVEAL:2,GLASS:3,VAULT:4,TRIM:5,VOID:6,TUBE:7,CABLE:8,TILE:9,STEEL:10,PEG:11,CONC:12,CFLOOR:13,DOOR:14,MAINCABLE:15,PAPER:16,ASH:17};function Lt(){let e=[],m=[],w=[],y=[],q=[],a={pos:e,nrm:m,kind:w,uv:y,idx:q,v(r,o,i,s){return e.push(r[0]+I[0],r[1]+I[1],r[2]+I[2]),m.push(o[0],o[1],o[2]),w.push(i),y.push(s?s[0]:0,s?s[1]:0),e.length/3-1},quad(r,o,i,s,c,l,n,b,p,u){let v=a.v(r,c,l,n),f=a.v(o,c,l,b),h=a.v(i,c,l,p),M=a.v(s,c,l,u);q.push(v,f,h,v,h,M)},box(r,o,i,s,c,l,n){a.quad([r,o,l],[s,o,l],[s,c,l],[r,c,l],[0,0,1],n),a.quad([s,o,i],[r,o,i],[r,c,i],[s,c,i],[0,0,-1],n),a.quad([s,o,l],[s,o,i],[s,c,i],[s,c,l],[1,0,0],n),a.quad([r,o,i],[r,o,l],[r,c,l],[r,c,i],[-1,0,0],n),a.quad([r,c,l],[s,c,l],[s,c,i],[r,c,i],[0,1,0],n),a.quad([r,o,i],[s,o,i],[s,o,l],[r,o,l],[0,-1,0],n)},cyl(r,o,i,s,c,l,n){n=n||18;for(let b=0;b<n;b++){let p=b/n*Math.PI*2,u=(b+1)/n*Math.PI*2,v=[Math.sin(p),0,Math.cos(p)],f=[Math.sin(u),0,Math.cos(u)],h=(k,P)=>[r+k[0]*i,P,o+k[2]*i],M=a.v(h(v,s),v,l),g=a.v(h(f,s),f,l),x=a.v(h(f,c),f,l),N=a.v(h(v,c),v,l);q.push(M,g,x,M,x,N)}}};return a}function u0(e,m,w,y,q,a){let r=null,o=null,i=[];for(let s=0;s<m.length;s++){let c=m[Math.max(0,s-1)],l=m[Math.min(m.length-1,s+1)],n=[l[0]-c[0],l[1]-c[1],l[2]-c[2]],b=Math.hypot(...n)||1;n=n.map(h=>h/b),o||(o=Math.abs(n[1])<.9?[0,1,0]:[1,0,0]);let p=o[0]*n[0]+o[1]*n[1]+o[2]*n[2];o=[o[0]-n[0]*p,o[1]-n[1]*p,o[2]-n[2]*p];let u=Math.hypot(...o)||1;o=o.map(h=>h/u);let v=[n[1]*o[2]-n[2]*o[1],n[2]*o[0]-n[0]*o[2],n[0]*o[1]-n[1]*o[0]],f=[];for(let h=0;h<y;h++){let M=h/y*Math.PI*2,g=Math.cos(M),x=Math.sin(M),N=[o[0]*g+v[0]*x,o[1]*g+v[1]*x,o[2]*g+v[2]*x];f.push(e.v([m[s][0]+N[0]*w,m[s][1]+N[1]*w,m[s][2]+N[2]*w],N,q,[a?a[s]:s,h]))}if(r)for(let h=0;h<y;h++){let M=(h+1)%y;e.idx.push(r[h],r[M],f[M],r[h],f[M],f[h])}r=f,i.push(f)}}var Ye=(e,m)=>[e[0]+((e[5]===void 0?e[0]:e[5])-e[0])*m,e[1]-e[4]*4*m*(1-m),e[2]+.35+(e[3]-e[2]-.7)*m];function xt(e,m,w){let y=[[-e,m],[-e,w]],q=2*e,a=14;for(let r=1;r<=a;r++){let o=Math.PI-r/a*(Math.PI/3);y.push([e+q*Math.cos(o),w+q*Math.sin(o)])}for(let r=1;r<=a;r++){let o=Math.PI/3-r/a*(Math.PI/3);y.push([-e+q*Math.cos(o),w+q*Math.sin(o)])}return y.push([e,m]),y}function wt(e,m,w,y,q,a,r){let o=q?m.length:m.length-1;for(let i=0;i<o;i++){let s=m[i],c=m[(i+1)%m.length],l=c[0]-s[0],b=-(c[1]-s[1]),p=l,u=Math.hypot(b,p)||1;b/=u,p/=u;let v=(s[0]+c[0])/2-r[0],f=(s[1]+c[1])/2-r[1];b*v+p*f>0&&(b=-b,p=-p);let h=y(b,p,0,!0);e.quad(y(s[0],s[1],0),y(c[0],c[1],0),y(c[0],c[1],w),y(s[0],s[1],w),h,a,[s[0],s[1]],[c[0],c[1]],[c[0],c[1]],[s[0],s[1]])}}function Wt(){let e=Lt();e.quad([0,0,0],[0,0,F],[S,0,F],[S,0,0],[0,1,0],L.FLOOR),e.quad([0,0,F],[0,0,0],[0,i0,0],[0,i0,F],[1,0,0],L.WALL,[F,0],[0,0],[0,i0],[F,i0]),e.quad([S,0,0],[S,0,F],[S,i0,F],[S,i0,0],[-1,0,0],L.WALL,[0,0],[F,0],[F,i0],[0,i0]);let m=24;for(let a of[0,1]){let r=a?F:0,o=[0,0,a?-1:1];for(let i=0;i<m;i++){let s=i/m*S,c=(i+1)/m*S,l=[s,0,r],n=[c,0,r],b=[c,ne(c),r],p=[s,ne(s),r];a?e.quad(n,l,p,b,o,L.WALL,[c,0],[s,0],[s,p[1]],[c,b[1]]):e.quad(l,n,b,p,o,L.WALL,[s,0],[c,0],[c,b[1]],[s,p[1]])}}let w=40;for(let a=0;a<w;a++){let r=a/w*S,o=(a+1)/w*S,i=ne(r),s=ne(o),c=(f,h)=>{let M=f<=S/2?f:S-f,g=(re-M)/re,x=(i0-h)/re;return f>S/2&&(g=-g),[g,x,0]},l=c(r,i),n=c(o,s),b=e.v([r,i,0],l,L.VAULT,[r,0]),p=e.v([o,s,0],n,L.VAULT,[o,0]),u=e.v([o,s,F],n,L.VAULT,[o,F]),v=e.v([r,i,F],l,L.VAULT,[r,F]);e.idx.push(b,p,u,b,u,v)}let y=xt(G.hw,G.sill,G.spring),q=xt(G.hw,G.lowSill,G.spring);for(let a=0;a<G.n;a++){let r=a===0?G.lowSill:G.sill,o=$e(a),i=a>=G.leftFrom;i&&wt(e,y,Ie,(p,u,v,f)=>f?[0,u,p]:[-v,u,o+p],!0,L.REVEAL,[0,(G.sill+G.apex)/2]),wt(e,a===0?q:y,Ie,(p,u,v,f)=>f?[0,u,p]:[S+v,u,o+p],!0,L.REVEAL,[0,(r+G.apex)/2]);let s=Ie*.55,c=G.sill-.02,l=G.apex+.02,n=G.hw+.02;i&&e.quad([-s,c,o+n],[-s,c,o-n],[-s,l,o-n],[-s,l,o+n],[1,0,0],L.GLASS,[n,c],[-n,c],[-n,l],[n,l]);let b=r-.02;e.quad([S+s,b,o-n],[S+s,b,o+n],[S+s,l,o+n],[S+s,l,o-n],[-1,0,0],L.GLASS,[-n,b],[n,b],[n,l],[-n,l]),i&&e.box(-.02,G.sill-.12,o-G.hw-.18,.12,G.sill,o+G.hw+.18,L.TRIM),e.box(S-.12,r-(a===0?.05:.12),o-G.hw-.18,S+.02,r,o+G.hw+.18,L.TRIM)}{let a=S/2-L0.hw,r=S/2+L0.hw,o=L0.h,i=L0.depth;e.quad([a,0,-i],[a,0,0],[a,o,0],[a,o,-i],[1,0,0],L.REVEAL),e.quad([r,0,0],[r,0,-i],[r,o,-i],[r,o,0],[-1,0,0],L.REVEAL),e.quad([a,o,0],[r,o,0],[r,o,-i],[a,o,-i],[0,-1,0],L.REVEAL),e.quad([a,.001,-i],[r,.001,-i],[r,.001,0],[a,.001,0],[0,1,0],L.CFLOOR);let s=S/2-D0.hw,c=S/2+D0.hw,l=D0.h,n=D0.z;e.quad([s,0,n],[s,0,-i],[c,0,-i],[c,0,n],[0,1,0],L.CFLOOR),e.quad([s,0,-i],[s,0,n],[s,l,n],[s,l,-i],[1,0,0],L.CONC,[-i,0],[n,0],[n,l],[-i,l]),e.quad([c,0,n],[c,0,-i],[c,l,-i],[c,l,n],[-1,0,0],L.CONC,[n,0],[-i,0],[-i,l],[n,l]),e.quad([s,l,n],[s,l,-i],[c,l,-i],[c,l,n],[0,-1,0],L.CONC,[n,0],[-i,0],[-i,1],[n,1]),e.quad([c,0,n],[s,0,n],[s,l,n],[c,l,n],[0,0,1],L.CONC,[0,0],[1,0],[1,l],[0,l]);let b=-i;e.quad([s,0,b],[a,0,b],[a,l,b],[s,l,b],[0,0,-1],L.CONC,[s,0],[a,0],[a,l],[s,l]),e.quad([r,0,b],[c,0,b],[c,l,b],[r,l,b],[0,0,-1],L.CONC,[r,0],[c,0],[c,l],[r,l]),e.quad([a,o,b],[r,o,b],[r,l,b],[a,l,b],[0,0,-1],L.CONC,[a,o],[r,o],[r,l],[a,l]);let p=a,u=b-.01,v=D0.open,f=L0.hw*2-.04,h=.045,M=[Math.cos(v),0,-Math.sin(v)],g=[Math.sin(v),0,Math.cos(v)],x=($,W,J)=>[p+M[0]*$+g[0]*J,W,u+M[2]*$+g[2]*J],N=.012,k=o-.02;e.quad(x(0,N,h),x(f,N,h),x(f,k,h),x(0,k,h),g,L.DOOR),e.quad(x(f,N,0),x(0,N,0),x(0,k,0),x(f,k,0),g.map($=>-$),L.DOOR),e.quad(x(f,N,h),x(f,N,0),x(f,k,0),x(f,k,h),M,L.DOOR),e.quad(x(0,k,h),x(f,k,h),x(f,k,0),x(0,k,0),[0,1,0],L.DOOR);let P=x(f-.09,1.02,h+.03);u0(e,[x(f-.09,1.02,h),P,[P[0]-M[0]*.12,P[1],P[2]-M[2]*.12]],.011,6,L.STEEL);let V=D0.sign;e.box(V[0]-.33,V[1]-.12,V[2]-.02,V[0]+.33,V[1]+.12,b,L.TRIM)}for(let a of Z){for(let s of[.2,S-.2])e.box(s-.42,0,a-.42,s+.42,.5,a+.42,L.TRIM),e.cyl(s,a,.27,.5,i0-.55,L.TRIM),e.cyl(s+(s<S/2?.2:-.2),a-.36,.1,.5,i0-.55,L.TRIM,10),e.cyl(s+(s<S/2?.2:-.2),a+.36,.1,.5,i0-.55,L.TRIM,10),e.box(s-.45,i0-.55,a-.5,s+.45,i0-.25,a+.5,L.TRIM);let r=40,o=.22,i=.22;for(let s=0;s<r;s++){let c=s/r*S,l=(s+1)/r*S,n=ne(c),b=ne(l),p=[S/2-c,-(n-i0+2),0],u=[S/2-l,-(b-i0+2),0],v=x=>{let N=Math.hypot(x[0],x[1])||1;return[x[0]/N,x[1]/N,0]},f=v(p),h=v(u),M=[c+f[0]*i,n+f[1]*i],g=[l+h[0]*i,b+h[1]*i];e.quad([M[0],M[1],a-o],[g[0],g[1],a-o],[g[0],g[1],a+o],[M[0],M[1],a+o],f,L.TRIM),e.quad([c,n,a-o],[l,b,a-o],[g[0],g[1],a-o],[M[0],M[1],a-o],[0,0,-1],L.TRIM),e.quad([l,b,a+o],[c,n,a+o],[M[0],M[1],a+o],[g[0],g[1],a+o],[0,0,1],L.TRIM)}}{let a=O,r=a.top,o=a.basin,i=(p,u,v)=>{if(e.box(0,0,p,a.depth-.06,.12,u,L.TRIM),e.quad([a.depth,.12,p],[a.depth,.12,u],[a.depth,r,u],[a.depth,r,p],[1,0,0],L.TILE,[p,.12],[u,.12],[u,r],[p,r]),e.quad([0,.12,p],[a.depth,.12,p],[a.depth,r,p],[0,r,p],[0,0,-1],L.TILE,[0,.12],[a.depth,.12],[a.depth,r],[0,r]),e.quad([a.depth,.12,u],[0,.12,u],[0,r,u],[a.depth,r,u],[0,0,1],L.TILE,[a.depth,.12],[0,.12],[0,r],[a.depth,r]),!v){e.quad([0,r,p],[0,r,u],[a.depth,r,u],[a.depth,r,p],[0,1,0],L.TILE,[0,p],[0,u],[a.depth,u],[a.depth,p]);return}let f=(h,M,g,x)=>e.quad([h,r,g],[h,r,x],[M,r,x],[M,r,g],[0,1,0],L.TILE,[h,g],[h,x],[M,x],[M,g]);f(0,o.x0,p,u),f(o.x1,a.depth,p,u),f(o.x0,o.x1,p,o.z0),f(o.x0,o.x1,o.z1,u),e.quad([o.x0,o.floor,o.z0],[o.x0,o.floor,o.z1],[o.x1,o.floor,o.z1],[o.x1,o.floor,o.z0],[0,1,0],L.TILE,[o.x0,o.z0],[o.x0,o.z1],[o.x1,o.z1],[o.x1,o.z0]),e.quad([o.x0,o.floor,o.z1],[o.x0,o.floor,o.z0],[o.x0,r,o.z0],[o.x0,r,o.z1],[1,0,0],L.TILE,[o.z1,o.floor],[o.z0,o.floor],[o.z0,r],[o.z1,r]),e.quad([o.x1,o.floor,o.z0],[o.x1,o.floor,o.z1],[o.x1,r,o.z1],[o.x1,r,o.z0],[-1,0,0],L.TILE,[o.z0,o.floor],[o.z1,o.floor],[o.z1,r],[o.z0,r]),e.quad([o.x0,o.floor,o.z0],[o.x1,o.floor,o.z0],[o.x1,r,o.z0],[o.x0,r,o.z0],[0,0,1],L.TILE,[o.x0,o.floor],[o.x1,o.floor],[o.x1,r],[o.x0,r]),e.quad([o.x1,o.floor,o.z1],[o.x0,o.floor,o.z1],[o.x0,r,o.z1],[o.x1,r,o.z1],[0,0,-1],L.TILE,[o.x1,o.floor],[o.x0,o.floor],[o.x0,r],[o.x1,r])};i(a.a[0],a.a[1],!0),i(a.b[0],a.b[1],!1);for(let[p,u]of[a.a,a.b])e.quad([.012,r,u],[.012,r,p],[.012,r+.62,p],[.012,r+.62,u],[1,0,0],L.TILE,[u,r],[p,r],[p,r+.62],[u,r+.62]);let s=p=>{let u=o.floor+.004,v=u+a.TH,f=a.TX/2,h=a.TZ/2,M=.02,g=a.TXc,x=[[g-f+M,p-h+M],[g+f-M,p-h+M],[g+f-M,p+h-M],[g-f+M,p+h-M]],N=[[g-f,p-h],[g+f,p-h],[g+f,p+h],[g-f,p+h]];e.quad([x[0][0],u,x[0][1]],[x[3][0],u,x[3][1]],[x[2][0],u,x[2][1]],[x[1][0],u,x[1][1]],[0,1,0],L.STEEL);for(let k=0;k<4;k++){let P=(k+1)%4,V=[x[k][0],u,x[k][1]],$=[x[P][0],u,x[P][1]],W=[N[P][0],v,N[P][1]],J=[N[k][0],v,N[k][1]],U=(x[k][0]+x[P][0])/2-g,f0=(x[k][1]+x[P][1])/2-p,s0=Math.hypot(U,f0)||1;e.quad(V,$,W,J,[-U/s0*.95,.3,-f0/s0*.95],L.STEEL),e.quad($,V,[J[0],u+.001,J[2]],[W[0],u+.001,W[2]],[U/s0,0,f0/s0],L.STEEL)}u0(e,[...N,N[0]].map(k=>[k[0],v+.004,k[1]]),.005,5,L.STEEL)};for(let p of a.trays)s(p);let c=(p,u,v,f,h,M)=>{for(let g of[-.012,.012])u0(e,[[p,h,u+g],[(p+v)/2,(h+M)/2+.006,(u+f)/2+g*.6],[v,M,f+g*.2]],.0045,5,L.PEG)};c(a.TXc+.05,a.trays[0]+.12,a.TXc+.27,a.trays[0]+.42,a.liquid-.005,a.top+.03),c(a.TXc-.1,a.trays[2]-.2,a.TXc+.24,a.trays[2]-.05,a.liquid+.002,a.liquid+a.TH*.9);let l=o.z1-.3;u0(e,[[0,1.32,l],[.18,1.32,l],[.27,1.3,l],[.32,1.22,l],[.33,1.12,l]],.016,8,L.STEEL),e.box(0,1.27,l-.05,.05,1.37,l+.05,L.STEEL);let n=O.bulb;u0(e,[[0,2.32,n[2]],[n[0]*.6,2.32,n[2]],[n[0],2.28,n[2]]],.012,6,L.TRIM),e.box(0,2.24,n[2]-.06,.03,2.4,n[2]+.06,L.TRIM),u0(e,[[n[0],2.28,n[2]],[n[0]+.004,1.9,n[2]+.003],[n[0],n[1]+.2,n[2]]],.004,5,L.CABLE);{let p=X.vase,u=X.top,v=[[.045,0],[.07,.03],[.08,.09],[.072,.15],[.05,.2],[.042,.225],[.05,p.h]],f=24;for(let h=0;h<v.length-1;h++){let[M,g]=v[h],[x,N]=v[h+1];for(let k=0;k<f;k++){let P=k/f*Math.PI*2,V=(k+1)/f*Math.PI*2,$=(U,f0,s0)=>[p.x+Math.cos(s0)*U,u+f0,p.z+Math.sin(s0)*U],W=U=>{let f0=x-M,s0=N-g,a0=Math.hypot(f0,s0);return[Math.cos(U)*s0/a0,-f0/a0,Math.sin(U)*s0/a0]},J=(P+V)/2;e.quad($(M,g,P),$(M,g,V),$(x,N,V),$(x,N,P),W(J),L.TRIM)}}}{let p=a.trays[1]+.12,u=a.TXc+a.TX/2-.03;u0(e,[[u-.12,a.liquid-.02,p-.02],[u+.02,a.liquid+.13,p+.02]],.0035,6,L.STEEL);let v=[u+.03,a.liquid+.145,p+.024],f=[.62,.66,.42];u0(e,[[v[0]-f[0]*.008,v[1]-f[1]*.008,v[2]-f[2]*.008],[v[0]+f[0]*.012,v[1]+f[1]*.012,v[2]+f[2]*.012]],.026,14,L.STEEL)}{let p=a.top,u=a.ash.x,v=a.ash.z,f=[u-.012,p+.027,v+.006],h=[u+.066,p+.041,v-.012],M=g=>[f[0]+(h[0]-f[0])*g,f[1]+(h[1]-f[1])*g,f[2]+(h[2]-f[2])*g];u0(e,[f,M(.03)],.0041,8,L.TUBE),u0(e,[M(.03),M(.2)],.0042,8,L.ASH),u0(e,[M(.2),M(.7)],.0043,8,L.PAPER),u0(e,[M(.7),h],.0044,8,L.PEG),a.smoke=f}{let p=a.top;u0(e,[[.62,p+.042,12.02],[.62,p+.042,12.045]],.042,16,L.PEG),u0(e,[[.62,p+.042,12.018],[.62,p+.042,12.047]],.024,12,L.TRIM);let u=Ae;e.box(u.x0,p,u.z0,u.x1,p+u.h,u.z1,L.TRIM),e.box(u.x0+.004,p+u.h,u.z0+.004,u.x1-.004,p+u.h+.001,u.z1-.004,L.VOID);let v=u.z1+.012;e.quad([u.x0-.01,p,v+.05],[u.x1+.01,p,v+.05],[u.x1+.01,p+.24,v],[u.x0-.01,p+.24,v],[0,.2,.98],L.TRIM)}let b=O.tube;u0(e,[[b.x+.02,b.y,b.z0],[b.x+.02,b.y,(b.z0+b.z1)/2],[b.x+.02,b.y,b.z1]],.035,10,L.TUBE),e.box(0,b.y-.05,b.z0-.06,.07,b.y+.05,b.z0-.01,L.TRIM),e.box(0,b.y-.05,b.z1+.01,.07,b.y+.05,b.z1+.06,L.TRIM);for(let p of O.lines){let u=[];for(let v=0;v<=24;v++){let f=v/24;u.push(Ye(p,f))}u0(e,u,.0035,5,L.CABLE);for(let v of[u[0],u[24]])u0(e,[[0,v[1]+.05,v[2]],[v[0]*.5,v[1]+.02,v[2]],[v[0]+.02,v[1],v[2]]],.007,5,L.TRIM)}}Q.stack.forEach((a,r)=>{let o=Q.models[a[0]],i=Q.G,s=S/2+a[2],c=Q.z+a[4]+o.d*i*.85,l=a.base+.12*i,n=S/2+(r%3-1)*.5,b=Q.z+2.3+r%4*.12;u0(e,[[s,l,c-.05],[s+.05,l-.02,c+.15],[s+.1,Math.max(.02,l*.4),c+.35],[s*.6+n*.4,.018,c+.6],[n,.018,b]],.012,6,L.CABLE)});{let a=N0.path,r=[0];for(let o=1;o<a.length;o++)r.push(r[o-1]+Math.hypot(a[o][0]-a[o-1][0],a[o][1]-a[o-1][1],a[o][2]-a[o-1][2]));N0.length=r[r.length-1],u0(e,N0.path,N0.r,16,L.MAINCABLE,r)}{let[a,r,o]=N0.socket;e.box(a,r-.07,o-.07,a+.018,r+.07,o+.07,L.STEEL),e.box(a+.018,r-.035,o-.032,a+.11,r+.035,o+.032,L.TRIM),e.box(a,r+.042,o+.035,a+.03,r+.058,o+.051,L.TUBE)}e.box(h0.x0-.08,h0.y-.07,F-.08,h0.x0-.02,h0.y+.07,F,L.TRIM),e.box(h0.x1+.02,h0.y-.07,F-.08,h0.x1+.08,h0.y+.07,F,L.TRIM),u0(e,[[h0.x0-.02,h0.y,h0.z],[(h0.x0+h0.x1)/2,h0.y,h0.z],[h0.x1+.02,h0.y,h0.z]],.045,10,L.TUBE);for(let a of[0,1]){let r=a?S-.06:0,o=a?S:.06;e.box(r,0,0,o,.24,F,L.TRIM),e.box(a?S-.05:0,1,0,a?S:.05,1.08,F,L.TRIM);let i=a?S-.32:0,s=a?S:.32;e.box(i,i0-.25,0,s,i0+.08,F,L.TRIM)}for(let a of[0,1]){let r=a?F-.06:0,o=a?F:.06;a?e.box(0,0,r,S,.24,o,L.TRIM):(e.box(0,0,r,S/2-L0.hw,.24,o,L.TRIM),e.box(S/2+L0.hw,0,r,S,.24,o,L.TRIM));let i=a?F-.32:0,s=a?F:.32;e.box(0,i0-.25,i,S,i0+.08,s,L.TRIM)}return e}function Ut(){let e=7,m=0,w=()=>(m++*23+5)%Q0.n,y=()=>(e=e*16807%2147483647,(e-1)/2147483646),q=[],a=[],r=[],o=[],i=[],s=[],c=[],l=3,n=4,b=(g,x,N,k,P,V,$,W,J,U)=>{let f0=U?U[0]:Q0.w*P,s0=U?U[1]:Q0.h*P,a0=q.length/3;for(let y0=0;y0<=n;y0++)for(let v0=0;v0<=l;v0++){let m0=v0/l,R=y0/n,H=(m0-.5)*f0,D=(R-.5)*s0,K=W*((m0-.5)*(m0-.5)*4+(1-R)*(1-R)*.6);q.push(I[0]+g[0]+x[0]*H+N[0]*D+k[0]*K,I[1]+g[1]+x[1]*H+N[1]*D+k[1]*K,I[2]+g[2]+x[2]*H+N[2]*D+k[2]*K),a.push(k[0],k[1],k[2]),r.push(m0,R),o.push(V),c.push(J||0),i.push($[0]+I[0],$[1]+I[1],$[2]+I[2],$[3])}for(let y0=0;y0<n;y0++)for(let v0=0;v0<l;v0++){let m0=a0+y0*(l+1)+v0,R=m0+1,H=m0+l+1,D=H+1;s.push(m0,R,D,m0,D,H)}},p=(g,x,N)=>{let k=Math.cos(N),P=Math.sin(N);return[g.map((V,$)=>V*k+x[$]*P),x.map((V,$)=>-g[$]*P+V*k)]},u=[0,0,0,0],v=0,f=(g,x,N,k,P,V,$,W,J)=>{let s0=0;for(let a0=V;a0<$;a0+=.48)for(let y0=k;y0<P;y0+=.4){let v0=y0+(y()-.5)*.4*.7,m0=a0+(y()-.5)*.48*.6;if(y()>W(v0,m0))continue;let[R,H]=p(N,[0,1,0],(y()-.5)*.5),D=g(v0,m0,.012+.0016*(s0++%9)+y()*.004),K=.88+y()*.3;b(D,R,H,x,K,w(),u,(y()-.3)*.02),Q0.spots.length<400&&Q0.spots.push({c:D,n:x,up:H,size:Q0.h*K}),v++}},h=(g,x,N)=>Math.exp(-Math.pow((g-x)/N,2));for(let g=0;g<G.n-1;g++){let x=Z[g+1],N=[[$e(g)+G.hw+.32,x-.66],[x+.66,$e(g+1)-G.hw-.32]];for(let[k,P]of N){let V=($,W)=>.85*h(W,3.4,1.7);P>O.b[1]+.3&&f(($,W,J)=>[J,W,$],[1,0,0],[0,0,-1],k,P,1.45,6.3,V),f(($,W,J)=>[S-J,W,$],[-1,0,0],[0,0,1],k,P,1.45,6.3,V)}}let M=[];for(let g of O.lines){let x=g[3]-g[2]-.7;for(let N=.18;N<x-.1;N+=.3+y()*.14){let k=N/x,P=Ye(g,k);if(y()<.1||Math.abs(P[2]-O.bulb[2])<.4&&P[1]>2.3)continue;let V=.56+y()*.14,$=Q0.h*V,W=(y()-.5)*.7,J=y()<.3?y()<.5?-.75:.75:W,[U,f0]=p([0,0,-1],[0,1,0],J),s0=[1,0,0],a0=[P[0]+.004,P[1]-.02-f0[1]*$*.5,P[2]-f0[2]*$*.5];b(a0,U,f0,s0,V,w(),[P[0],P[1],P[2],-(.04+y()*.06)],.01+y()*.025,1),O.hung.length<200&&O.hung.push({c:a0,h:$,peg:P}),M.push(P),v++}}X.letters.forEach((g,x)=>{let N=[Math.cos(g.a),0,Math.sin(g.a)],k=[-Math.sin(g.a),0,Math.cos(g.a)];b([g.x,X.top+g.y,g.z],k,N,[0,1,0],1,x,u,.003,6,[g.w,g.h]),v++});{let[g,x]=X.stack,N=[0,1,0];for(let P=0;P<9;P++){let V=(y()-.5)*.35+.3;b([g+(y()-.5)*.012,X.top+.003+P*.0022,x+(y()-.5)*.012],[Math.cos(V),0,Math.sin(V)],[Math.sin(V),0,-Math.cos(V)],N,.26,w(),u,.004),v++}[[.13,.12,.9],[-.04,.2,-.4],[.2,-.05,1.6]].forEach(([P,V,$],W)=>{b([g+P,X.top+.002+W*.0012,x+V],[Math.cos($),0,Math.sin($)],[Math.sin($),0,-Math.cos($)],N,.26,w(),u,.006),v++})}{let g=[0,1,0],x=(V,$,W,J,U,f0,s0,a0,y0)=>{b([V,$,W],[Math.cos(J),0,Math.sin(J)],[Math.sin(J),0,-Math.cos(J)],g,1,s0,u,y0||0,a0,[U,f0]),v++},N=O.basin.floor+.002,k=O.top+.0015;x(.36,N,4.78,.25,.2,.25,w(),1,.003),x(.44,N+.0012,5.02,-.4,.2,.25,w(),1,.004),x(.3,N+.0024,5.3,1.3,.2,.25,w(),5,.006),x(.47,N,5.62,.1,.2,.25,w(),3,.002),x(.33,N+.0012,5.95,-1,.2,.25,w(),1,.005),x(.6,N+.003,O.trays[0]-.4,.2,.036,.22,w(),2,.01),x(.55,k+5e-4,9.24,.35,.2,.25,w(),3,.004),x(.5,k+.001,11.88,1.35,.036,.23,w(),2,.012),x(.45,k+.0017,11.97,1.55,.036,.23,w(),2,.009),x(.36,k+.001,12.08,-.25,.2,.25,w(),5,.004),x(.43,Ae.h+k+.0012,(Ae.z0+Ae.z1)/2,.06,.2,.25,w(),5,.002);for(let[V,$,W,J]of[[.56,9.38,.11,.3],[.2,9.9,.1,1.1],[.47,10.95,.16,2],[.3,12,.12,.7],[.5,8.7,.14,2.4],[.5,6.3,.18,1.9]]){let U=($<O.a[1]?N:k)+4e-4;x(V,U,$,J,W,W,w(),4,0)}let P=O.lines[6];for(let V of[.42,.47,.53,.66]){let $=Ye(P,V),W=.2+y()*.06,[J,U]=p([0,0,-1],[0,1,0],(y()-.5)*.12);b([$[0]+.003,$[1]-.012-W/2,$[2]],J,U,[1,0,0],1,w(),[$[0],$[1],$[2],-(.03+y()*.04)],.008,2,[.036,W]),M.push($),v++}}return{pos:q,nrm:a,uv:r,pic:o,piv:i,idx:s,sty:c,pegs:M,count:v}}var I0=`
	const float RW = ${d(S)}, RL = ${d(F)}, RH = ${d(i0)}, RT = ${d(Ie)};
	const float HW = ${d(G.hw)}, SILL = ${d(G.sill)}, SPRING = ${d(G.spring)};
	const float WZ0 = ${d(G.z0)}, WSTEP = ${d(G.step)};
	const vec3 RO = vec3(${d(I[0])}, ${d(I[1])}, ${d(I[2])});
	const vec3 LDIR_L = vec3(${d(E0[0])}, ${d(E0[1])}, ${d(E0[2])});
	const vec3 LDIR_R = vec3(${d(-E0[0])}, ${d(E0[1])}, ${d(E0[2])});

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
`;function Kt(){return`
	#define STUDIO_SUN ${"vec3("+d(E0[0])+", "+d(E0[1])+", "+d(E0[2])+")"}
	#define STUDIO_SUN2 ${"vec3("+d(-E0[0])+", "+d(E0[1])+", "+d(E0[2])+")"}
	#define SHAFT_TINT vec3(0.6, 0.012, 0.008)
	#define STUDIO_AIR_EVEN
	${I0}
	float studioSun(vec3 p) {
		vec3 lp = p - RO;
		if (lp.x < 0.0 || lp.x > RW || lp.z < 0.0 || lp.z > RL || lp.y > RH + 2.0) return 0.0;
		vec3 c = redLightAir(lp);
		return dot(c, vec3(0.7, 0.2, 0.1)) * 3.2;
	}`}var bt=`
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
	}`,ie=`
	// the televisions' flicker, thrown on whatever is in front of them
	uniform vec4 tvLight;
	vec3 tvGlow(vec3 lp, vec3 N) {
		vec3 d = vec3(${d(S/2)}, 1.35, ${d(Q.z-.9)}) - lp;
		float dd = dot(d, d);
		float face = 0.35 + 0.65 * max(0.0, dot(N, normalize(d)));
		// (only in front of them: the stack's own back is in its shadow)
		float front = smoothstep(${d(Q.z+.6)}, ${d(Q.z-.2)}, lp.z);
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
		float s = (${d(F-.005)} - L0.z) / max(d.z, 1e-4);
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
		vec3 c = vec3(clamp(lp.x, ${d(h0.x0)}, ${d(h0.x1)}), ${d(h0.y)}, ${d(h0.z)});
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
		vec3 Ls = vec3(${d(S/2)}, 1.25, 1.6);
		vec3 d = lp - Ls;
		float t = (${d(-L0.depth)} - Ls.z) / d.z;
		vec3 h = Ls + d * t;
		float m = smoothstep(0.08, -0.05, abs(h.x - ${d(S/2)}) - ${d(L0.hw)}) * smoothstep(0.08, -0.05, h.y - ${d(L0.h)}) * step(0.0, h.y);
		float dd = dot(d, d);
		vec3 Ld = -normalize(d);
		vec3 c = vec3(1.0, 0.07, 0.05) * 26.0 * m * (0.15 + 0.85 * max(0.0, dot(N, Ld))) / (1.0 + dd * 0.55);
		vec3 sd = vec3(${d(D0.sign[0])}, ${d(D0.sign[1])}, ${d(D0.sign[2])}) - lp;
		c += vec3(1.0, 0.12, 0.1) * signK * 0.5 * (0.2 + 0.8 * max(0.0, dot(N, normalize(sd)))) / (0.05 + dot(sd, sd) * 3.0);
		return c;
	}
	uniform float spotK;
	const vec3 SPOTP = vec3(${d(r0.pos[0])}, ${d(r0.pos[1])}, ${d(r0.pos[2])});
	const vec3 SPOTA = vec3(${d(r0.axis[0])}, ${d(r0.axis[1])}, ${d(r0.axis[2])});
	const float SPOT_CI = ${d(Math.cos(r0.inner))}, SPOT_CO = ${d(Math.cos(r0.outer))};
	// her shape in the spot's light: soft round blockers, her shadow
	float spotShade(vec3 lp, vec3 L, float len) {
		float sh = 1.0;
		${c0.occ.map(e=>`{
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
		${X.occ.map(e=>`{
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
	vec3 candleLight(vec3 lp, vec3 N) {
		vec3 sum = vec3(0.0);
		${X.flames.map((e,m)=>`{
			vec3 d = vec3(${d(e[0])}, ${d(e[1])}, ${d(e[2])}) - lp;
 			float r2 = dot(d, d);
			float sh = candleShade(lp, d);
			float fl = 0.82 + 0.1 * sin(time * (9.0 + ${d(m*1.7)}) + ${d(m*2.1)}) * sin(time * 3.3 + ${d(m)}) + 0.08 * sin(time * 23.0 + ${d(m*4)});
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

`,_t=`
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, yScale, mirrorOn, reflOn;
	uniform sampler2D reflTex;
	uniform vec2 reflSize;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${I0}

	const float DHW = ${d(L0.hw)}, DH = ${d(L0.h)};

	${ie}

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
				if (k == 0 && lp.z > ${d(Q.z-1.5)}) {
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
	}`,Tt=`
	vec3 breathe(vec3 p, float b) {
		float up = smoothstep(0.3, 0.62, p.y);
		vec2 r = p.xz - vec2(0.035, -0.07);
		float chest = exp(-pow((p.y - 0.6) / 0.1, 2.0));
		vec3 d = vec3(0.0, 0.016 * b * up, 0.0);
		d.xz += normalize(r + vec2(1e-4)) * 0.009 * b * chest;
		// (her shoulders draw back a little as they rise)
		d.z -= 0.006 * b * up * smoothstep(0.08, 0.2, abs(p.x - 0.035));
		return p + d;
	}`,Xt=`
	precision highp float;
	uniform mat4 proj, view, model;
	uniform float yScale, breath;
	attribute vec3 position, normal;
	attribute vec2 uv;
	attribute float flag;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_flag;
	${Tt}
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
	}`,Yt=`
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, sigTime, yScale, seed, dark, nMem, emit, order, warnS, warnN, glitchK, slot;
	uniform sampler2D letterTex;
	uniform sampler2D bodyTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_flag;
	${I0}
	${ie}

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
	}`,Zt=`
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
	}`,Qt=`
	precision highp float;
	uniform float time, yScale;
	uniform sampler2D polTex, letTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_pic, v_style;
	${I0}
	${ie}
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
	}`,Jt=`
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
	}`,eo=`
	precision highp float;
	uniform float time;
	varying vec3 v_pos, v_eye;
	varying float v_layer;
	${I0}
	${ie}
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
	}`,to=`
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
	}`,oo=`
	precision highp float;
	uniform float time;
	uniform sampler2D printTex, polTex;
	varying vec3 v_pos, v_eye;
	varying float v_tray;
	${I0}
	${ie}
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
	}`,ao=`
	precision highp float;
	uniform mat4 proj, view;
	uniform float time, pxScale;
	attribute vec4 seed;
	varying float v_b, v_w;
	${I0}
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
		float s = (${d(F)} - L0.z) / max(dd.z, 1e-4);
		vec3 hh = L0 + dd * s;
		vec2 pu = vec2((hh.x - ${d(C.img.x-C.img.w/2)}) / ${d(C.img.w)}, (hh.y - ${d(C.img.y-C.img.h/2)}) / ${d(C.img.h)});
		v_w = (dd.z > 0.2 && pu.x > 0.0 && pu.x < 1.0 && pu.y > 0.0 && pu.y < 1.0) ? 1.6 : 0.0;
		vec4 v = view * vec4(lp + RO, 1.0);
		gl_Position = proj * v;
		float tw = 0.6 + 0.4 * sin(time * (1.0 + seed.w * 2.0) + seed.x * 80.0);
		v_b *= tw;
		gl_PointSize = clamp(pxScale * (0.012 + 0.012 * seed.w) / max(0.2, -v.z), 1.0, 6.0);
	}`,so=`
	precision highp float;
	varying float v_b, v_w;
	void main() {
		vec2 d = gl_PointCoord - 0.5;
		float a = smoothstep(0.5, 0.0, length(d));
		gl_FragColor = vec4((vec3(1.0, 0.14, 0.09) * min(v_b, 1.4) + vec3(1.0, 0.8, 0.55) * v_w) * a * 0.55, 1.0);
	}`;Ze.exports=function(e){let m=Wt(),w={position:e.buffer(m.pos),normal:e.buffer(m.nrm),kind:e.buffer(m.kind),uv:e.buffer(m.uv)},y=e.elements({data:m.idx.length>65535?new Uint32Array(m.idx):new Uint16Array(m.idx),type:m.idx.length>65535?"uint32":"uint16"}),q=e.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),a=e.framebuffer({color:q,depth:!0}),r=e({framebuffer:a}),o=e.texture({width:1,height:1,data:[0,0,0,255]}),i=e({}),s=o,c=0,l=0,n=!1,b=[4,4],p=[0,0,0,0],u=null,v=[0,3.417,8.417,12.333,15.625,19.25,22.5,25.958,30.75,33.417,36.25,40.125,43.667,46.917,51.292,56.458,60.25,64.083],f=e.texture({width:400,height:300,min:"linear",mag:"linear",wrap:"clamp"}),h={v:null,on:0,ready:!1,clip:-1,since:0,stillUntil:0},M=()=>{if(typeof document=="undefined")return;if(!h.v){let E=document.createElement("video");E.src="res/redroom/reel.mp4",E.muted=!0,E.loop=!0,E.playsInline=!0,E.preload="auto",E.setAttribute("playsinline",""),E.setAttribute("muted",""),E.addEventListener("loadeddata",()=>{h.ready=!0});let j=()=>{h.v&&h.v.paused&&!k0.freeze&&performance.now()/1e3>h.stillUntil&&h.v.play().catch(()=>{})};window.addEventListener("pointerdown",j,{passive:!0}),window.addEventListener("touchend",j,{passive:!0}),h.v=E,E.play().catch(()=>{})}let t=h.v,_=performance.now()/1e3;if(!h.ready||t.readyState<2){h.on=0;return}let z=0;for(let E=0;E<v.length;E++)t.currentTime>=v[E]-.02&&(z=E);z!==h.clip&&(h.clip=z);let T=_<h.stillUntil,A=k0.freeze?h.gate:T?"s"+Math.floor(e.now()/3.4):"c"+z;if(A!==h.gate&&(h.gate!==void 0&&Xe.click&&Xe.click(T?1:0),h.gate=A),k0.freeze||T?t.paused||t.pause():t.paused&&t.play().catch(()=>{}),h.on=T?0:1,!T)try{f.subimage(t)}catch(E){h.on=0}},g=e.texture({width:1,height:1,data:[0,0,0,255]}),x=1,N=t=>{let _=j=>{let B=Math.sin(j*127.1)*43758.5453;return B-Math.floor(B)},z=Math.floor(t*9),T=_(z),A=_(Math.floor(t*.7)),E=.92+.08*Math.sin(t*120);return A>.55&&T>.6&&(E=T>.85?.08:.45),E},k={signK:()=>x,vidTex:()=>f,vidOn:()=>h.on,memRot:t=>Math.floor((typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:t.time)/21),memTex:()=>u||g,projT:t=>{let _=typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:t.time;return k0.freeze?(k0.frozenAt===null&&(k0.frozenAt=_),k0.frozenAt):(k0.frozenAt=null,_)},spotK:()=>ze.k,pulsePhase:()=>Pe.phase,pulsePeriod:()=>Pe.period,warnS:()=>k0.s,warnN:()=>k0.n,glitchK:()=>k0.glitch};Q.stack.forEach((t,_)=>{let z=Q.models[t[0]],T=Q.G;k["tvLo["+_+"]"]=[S/2+t[2]-z.w*T/2,t.base,Q.z+t[4]-.02],k["tvHi["+_+"]"]=[S/2+t[2]+z.w*T/2,t.base+z.h*T,Q.z+t[4]+z.d*T]});let P=e({vert:bt,frag:_t,attributes:w,elements:y,cull:{enable:!1},uniforms:{reflTex:()=>s,reflSize:()=>b,reflOn:()=>c,tvLight:()=>p,...k}}),V=t=>new Promise((_,z)=>{let T=new Image,A=E=>(E&E-1)===0;T.onload=()=>_(e.texture({data:T,min:A(T.width)&&A(T.height)?"mipmap":"linear",mag:"linear",wrap:"clamp"})),T.onerror=z,T.src=t}),$=Q.stack.map((t,_)=>{let[z,,T,A,E]=t,j=Math.PI+A*Math.PI/180,B=Q.G,Y=Math.cos(j)*B,n0=Math.sin(j)*B,z0=I[0]+S/2+T,g0=I[1]+t.base,P0=I[2]+Q.z+E;return{name:z,seed:(_+1)*.6180339%1,model:[Y,0,-n0,0,0,B,0,0,n0,0,Y,0,z0,g0,P0,1]}}),W={},J=(()=>{let t=document.createElement("canvas");t.width=160,t.height=20;let _=t.getContext("2d");return _.fillStyle="#000",_.fillRect(0,0,160,20),_.fillStyle="#fff",_.font='bold 19px "Courier New", Courier, monospace',_.textAlign="center",_.textBaseline="middle",Ht.split("").forEach((z,T)=>_.fillText(z,T*16+8,11)),e.texture({data:t,min:"nearest",mag:"nearest",wrap:"clamp"})})(),U=null,s0=e({vert:Xt,frag:Yt,attributes:{position:{buffer:e.prop("vb"),stride:36,offset:0},normal:{buffer:e.prop("vb"),stride:36,offset:12},uv:{buffer:e.prop("vb"),stride:36,offset:24},flag:{buffer:e.prop("vb"),stride:36,offset:32}},elements:e.prop("el"),offset:e.prop("offset"),count:e.prop("count"),cull:{enable:!1},uniforms:{model:e.prop("model"),seed:e.prop("seed"),dark:e.prop("dark"),emit:(t,_)=>_.emit||0,breath:(t,_)=>_.breath||0,order:(t,_)=>_.order===void 0?-1:_.order,slot:(t,_)=>_.slot||0,letterTex:()=>J,bodyTex:e.prop("tex"),...k,memTex:()=>U||g,nMem:57,sigTime:t=>typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:t.time,tvLight:()=>p}});V("res/redroom/memories.webp").then(t=>{U=t,u=t}).catch(t=>console.error("The memories did not load",t));for(let t in Q.models){let _=Q.models[t],z=[];for(let T=0;T<_.tex;T++)z.push(V("res/redroom/tv_"+t+"_"+T+".webp"));Promise.all([fetch(_.file).then(T=>T.arrayBuffer()),...z]).then(([T,...A])=>{let E=new Uint32Array(T,0,4),j=E[0],B=E[1],Y=E[2],n0=E[3],z0=new Int32Array(T,16,Y*3),g0=16+Y*12,P0=e.buffer(new Float32Array(T,g0,j*9)),S0=g0+j*36,G0=n0?new Uint32Array(T.slice(S0,S0+B*4)):new Uint16Array(T.slice(S0,S0+B*2)),O0=e.elements({data:G0,type:n0?"uint32":"uint16"}),d0=[];for(let q0=0;q0<Y;q0++)d0.push({offset:z0[q0*3],count:z0[q0*3+1],tex:z0[q0*3+2]>=0?A[z0[q0*3+2]]:A[0]});W[t]={vb:P0,el:O0,parts:d0,dark:_.dark}}).catch(T=>console.error("A television did not load",T))}let a0=[],y0=()=>{if(U){a0.length=0;for(let t of $){let _=W[t.name];if(_)for(let z of _.parts)a0.push({vb:_.vb,el:_.el,offset:z.offset,count:z.count,tex:z.tex,model:t.model,seed:t.seed,dark:_.dark,order:Q.letters[$.indexOf(t)],slot:$.indexOf(t)})}a0.length&&s0(a0)}},v0=Ut(),m0=null,R=null;V("res/redroom/polaroids.webp").then(t=>{m0=t}).catch(t=>console.error("The photographs did not load",t)),V("res/redroom/letters_real.webp").then(t=>{R=t}).catch(t=>console.error("The letters did not load",t));let H=e({vert:Zt,frag:Qt,attributes:{position:v0.pos,normal:v0.nrm,uv:v0.uv,pic:v0.pic,style:v0.sty,pivot:{buffer:e.buffer(v0.piv),size:4}},elements:e.elements({data:new Uint16Array(v0.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...k,polTex:()=>m0,letTex:()=>R||g,tvLight:()=>p}}),D=(t,_)=>Promise.all([fetch(t).then(z=>z.arrayBuffer()),..._.map(V)]).then(([z,...T])=>{let A=new Uint32Array(z,0,4),E=A[0],j=A[1],B=A[2],Y=A[3],n0=new Int32Array(z,16,B*3),z0=16+B*12,g0=z0+E*36,P0=e.buffer(new Float32Array(z,z0,E*9)),S0=Y?new Uint32Array(z.slice(g0,g0+j*4)):new Uint16Array(z.slice(g0,g0+j*2)),G0=e.elements({data:S0,type:Y?"uint32":"uint16"}),O0=[];for(let d0=0;d0<B;d0++)O0.push({offset:n0[d0*3],count:n0[d0*3+1],tex:T[Math.max(0,n0[d0*3+2])],mat:n0[d0*3+2]});return{vb:P0,el:G0,parts:O0}}),K=(t,_)=>{let z=new Array(16);for(let T=0;T<4;T++)for(let A=0;A<4;A++)z[T*4+A]=t[A]*_[T*4]+t[4+A]*_[T*4+1]+t[8+A]*_[T*4+2]+t[12+A]*_[T*4+3];return z},R0=(t,_,z)=>[1,0,0,0,0,1,0,0,0,0,1,0,t,_,z,1],B0=t=>{let _=Math.cos(t),z=Math.sin(t);return[1,0,0,0,0,_,z,0,0,-z,_,0,0,0,0,1]},xe=K(R0(I[0]+C.x,I[1]+C.table,I[2]+C.z),B0(-C.pitch)),p0=C.tableK,T0=[p0,0,0,0,0,p0,0,0,0,0,p0,0,I[0]+S/2,I[1],I[2]+15,1],t0={},fe=0,Me=t=>{let _=t/4.6,z=Math.floor(_),T=_-z,A=Math.sin(z*91.7)*43758.5453,E=A-Math.floor(A)>.78?1.7:1,j=B=>(B=Math.max(0,Math.min(1,B)),B*B*(3-2*B));return(T<.38?j(T/.38):1-j((T-.38)/.5))*E},we=["res/redroom/proj_0.webp"];D("res/redroom/proj_body.bin",we).then(t=>{t0.body=t}).catch(t=>console.error(t)),D("res/redroom/proj_feed.bin",we).then(t=>{t0.feed=t}).catch(t=>console.error(t)),D("res/redroom/proj_takeup.bin",we).then(t=>{t0.takeup=t}).catch(t=>console.error(t)),D("res/redroom/table_all.bin",["res/redroom/table_0.webp"]).then(t=>{t0.table=t}).catch(t=>console.error(t));let Re=(t,_)=>K(xe,K(R0(t[0],t[1],t[2]),K(B0(_),R0(-t[0],-t[1],-t[2])))),J0=[],ee=t=>{J0.length=0;let _=(z,T,A)=>{if(z)for(let E of z.parts)J0.push({vb:z.vb,el:z.el,offset:E.offset,count:E.count,tex:E.tex,model:T,seed:0,dark:A})};_(t0.table,T0,.9),_(t0.body,xe,1),_(t0.feed,Re(C.feed,-t*2.6),1),_(t0.takeup,Re(C.takeup,-t*3.5),1),J0.length&&s0(J0)},F0=[],pe=[];{let t=[I[0]+C.lens[0],I[1]+C.lens[1],I[2]+C.lens[2]];[.96,.86,.76,.66,.56,.46,.36].forEach((_,z)=>{let T=C.img.w/2*_,A=C.img.h/2*_,E=[[-T,-A],[T,-A],[T,A],[-T,A]].map(([j,B])=>[I[0]+C.img.x+j,I[1]+C.img.y+B,I[2]+F-.02]);for(let j=0;j<4;j++){let B=E[j],Y=E[(j+1)%4];F0.push(...t,...B,...Y),pe.push(z,z,z)}})}let _0=e({vert:Jt,frag:eo,attributes:{position:F0,layer:pe},count:F0.length/3,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{...k,tvLight:()=>p}}),be=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale, pxScale; attribute vec3 position; void main() { vec3 p = position; p.y *= yScale; vec4 v = view * vec4(p, 1.0); gl_Position = proj * v; gl_PointSize = clamp(pxScale * 0.22 / max(0.3, -v.z), 4.0, 220.0); }",frag:"precision highp float; uniform float time; void main() { vec2 d = gl_PointCoord - 0.5; float r = length(d); float a = exp(-r * r * 160.0) * 1.6 + 0.35 * exp(-r * r * 30.0) + 0.12 * exp(-r * r * 8.0) + 0.5 * exp(-d.y * d.y * 2500.0) * exp(-abs(d.x) * 7.0); gl_FragColor = vec4(vec3(1.0, 0.84, 0.62) * a * (0.9 + 0.1 * sin(time * 37.0)), 1.0); }",attributes:{position:[I[0]+C.lens[0],I[1]+C.lens[1],I[2]+C.lens[2]+.01]},count:1,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2}}),_e=null;V("res/redroom/print.webp").then(t=>{_e=t}).catch(t=>console.error(t));let he=[],ve=[];O.trays.forEach((t,_)=>{let z=O.TX/2-.009,T=O.TZ/2-.009,A=O.TXc,E=O.liquid,j=[[A-z,t-T],[A+z,t-T],[A+z,t+T],[A-z,t+T]].map(([B,Y])=>[I[0]+B,I[1]+E,I[2]+Y]);he.push(...j[0],...j[2],...j[1],...j[0],...j[3],...j[2]);for(let B=0;B<6;B++)ve.push(_)});let Ve=e({vert:to,frag:oo,attributes:{position:he,tray:ve},count:he.length/3,cull:{enable:!1},uniforms:{...k,tvLight:()=>p,printTex:()=>_e||g,polTex:()=>m0||g}}),M0=Lt();for(let t of v0.pegs)M0.box(t[0]-.008,t[1]-.045,t[2]-.011,t[0]+.008,t[1]+.03,t[2]+.011,L.PEG);let Se=e({vert:bt,frag:_t,attributes:{position:M0.pos,normal:M0.nrm,kind:M0.kind,uv:M0.uv},elements:e.elements({data:new Uint16Array(M0.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...k,reflTex:()=>o,reflSize:[4,4],reflOn:0,tvLight:()=>p}}),te=t=>{let _=Math.cos(t),z=Math.sin(t);return[_,0,-z,0,0,1,0,0,z,0,_,0,0,0,0,1]},o0=(t,_,z,T)=>K(R0(I[0]+t,I[1]+_,I[2]+z),te(T||0));D("res/redroom/plastic_all.bin",["res/redroom/plastic_0.webp"]).then(t=>{t0.jug=t}).catch(t=>console.error(t)),D("res/redroom/multi_cleaner_all.bin",["res/redroom/multi_cleaner_0.webp"]).then(t=>{t0.can=t}).catch(t=>console.error(t)),D("res/redroom/pull_all.bin",["res/redroom/pull_0.webp"]).then(t=>{t0.socket=t}).catch(t=>console.error(t)),D("res/redroom/bulb_all.bin",["res/redroom/bulb_0.webp","res/redroom/bulb_1.webp"]).then(t=>{t0.bulb=t}).catch(t=>console.error(t));let W0=O.top,oe=O.b[0],e0=[["jug",o0(.16,W0,oe+.3,.4)],["jug",o0(.17,W0,oe+.52,-.3)],["jug",o0(.36,W0,oe+.4,2.2)],["can",o0(.14,W0,oe+.95,1.57)],["can",o0(.15,W0,oe+1.3,1.45)],["jug",o0(.16,W0,O.b[1]-.35,.9)],["can",o0(.2,W0,O.b[1]-.8,1.7)],["socket",o0(O.bulb[0],O.bulb[1]+.065,O.bulb[2],0)],["bulb",K(o0(O.bulb[0],O.bulb[1]+.048,O.bulb[2],0),B0(Math.PI))]],A0=(t,_)=>[t,0,0,0,0,_===void 0?t:_,0,0,0,0,t,0,0,0,0,1];D("res/redroom/wtable_all.bin",["res/redroom/wtable_0.webp"]).then(t=>{t0.wtable=t}).catch(t=>console.error(t)),D("res/redroom/wchair_all.bin",["res/redroom/wchair_0.webp"]).then(t=>{t0.wchair=t}).catch(t=>console.error(t)),D("res/redroom/cstick_holder.bin",["res/redroom/cstick_0.webp"]).then(t=>{t0.holder=t}).catch(t=>console.error(t)),D("res/redroom/cstick_candle.bin",["res/redroom/cstick_0.webp"]).then(t=>{t0.candle=t}).catch(t=>console.error(t)),D("res/redroom/rose_all.bin",["res/redroom/rose_0.webp"]).then(t=>{t0.rose=t}).catch(t=>console.error(t)),D("res/redroom/camera_all.bin",[0,1,2,3].map(t=>"res/redroom/camera_"+t+".webp")).then(t=>{t0.camera=t}).catch(t=>console.error(t));let ae=X.k,V0=X.z,U0=Math.PI/2,$0=[["wtable",K(o0(X.x,0,V0,U0),A0(ae)),1.7],["wchair",K(o0(X.x-X.depth/2-.36,0,V0-.42,U0+.05),A0(ae)),1.6],["wchair",K(o0(X.x-X.depth/2-.74,0,V0+.66,U0-.95),A0(ae)),1.6],["wchair",K(o0(X.x+.02,0,V0-X.half-.36,.06),A0(ae)),1.6],["wchair",K(o0(X.x-.05,0,V0+X.half+.4,Math.PI-.1),A0(ae)),.95]];for(let[t,_,z]of X.candles)$0.push(["holder",o0(t,X.top,_,z*3),.9]),$0.push(["candle",K(o0(t,X.top,_,z*3),K(R0(0,.156,0),K(A0(1,z),R0(0,-.156,0)))),1.15]);{let t=7,_=()=>(t=t*16807%2147483647,(t-1)/2147483646),z=X.vase;for(let T=0;T<9;T++){let A=T*2.39996+_()*.4,E=T===0?.04:.16+_()*.2,j=.66+_()*.12,B=z.h+.25*j-.1-(T===0?-.04:_()*.05),Y=K(K(o0(z.x,X.top+.02,z.z,A),B0(E)),K(R0(0,B-.02,0),K(B0(Math.PI/2),K(A0(j),R0(0,-.13,0)))));$0.push(["rose",Y,2])}}for(let[t,_,z]of X.laid)$0.push(["rose",K(o0(t,X.top+.002,_,z),A0(.72)),2]);D("res/redroom/woman_all.bin",["res/redroom/woman_0.webp"]).then(t=>{t0.woman=t}).catch(t=>console.error(t));let de=K(o0(c0.x,0,c0.z,c0.yaw),A0(c0.k));$0.push(["woman",de,2.6]),$0.push(["camera",o0(O.cam.x,O.cam.y,O.cam.z,U0+.35),1.7]),D("res/redroom/enlarger_all.bin",["res/redroom/enlarger_0.webp"]).then(t=>{t0.enlarger=t}).catch(t=>console.error(t)),D("res/redroom/letters_all.bin",["res/redroom/letters_0.webp"]).then(t=>{t0.letters=t}).catch(t=>console.error(t)),D("res/redroom/cup_all.bin",["res/redroom/cup_0.webp"]).then(t=>{t0.cup=t}).catch(t=>console.error(t)),D("res/redroom/ashtray_all.bin",["res/redroom/ashtray_0.webp"]).then(t=>{t0.ashtray=t}).catch(t=>console.error(t)),D("res/redroom/books_all.bin",["res/redroom/books_0.webp"]).then(t=>{t0.books=t}).catch(t=>console.error(t));{let t=O.top;$0.push(["enlarger",o0(.39,t,10.45,Math.PI-.04),1.25],["letters",o0(.45,t+.001,9.72,.55),1],["cup",o0(.19,t,9.66,2.3),1.3],["books",o0(.2,t,11.08,.15),1.3,0],["books",o0(.53,t,11.16,-.45),1.3,5],["books",o0(.22,t,11.72,1.45),1.3,6],["books",o0(.24,t+.058,11.75,1.8),1.3,7],["ashtray",o0(O.ash.x,t,O.ash.z,.7),1.2])}let se=()=>{let t=[];for(let[z,T]of e0){let A=t0[z];A&&A.parts.forEach((E,j)=>t.push({vb:A.vb,el:A.el,offset:E.offset,count:E.count,tex:E.tex,model:T,seed:0,dark:z==="jug"||z==="can"?.85:.7,emit:z==="bulb"&&E.mat===0?1.6:0}))}let _=Bt();for(let[z,T,A,E]of $0){let j=t0[z];!j||_&&z==="woman"||j.parts.forEach((B,Y)=>{(E===void 0||E===Y)&&t.push({vb:j.vb,el:j.el,offset:B.offset,count:B.count,tex:B.tex,model:T,seed:0,dark:A,emit:z==="woman"?-1:0,breath:z==="woman"?fe:0})})}t.length&&s0(t),Pt(),t0.woman&&!_&&Et(),t0.woman&&Z0.n&&!_&&It(),ze.k>.001&&!dt&&(At(),$t()),Ve(),Se()},ue=[],st=[];for(let Y=0;Y<8;Y++)for(let n0=0;n0<8;n0++){let z0=(O0,d0)=>[-.08+.285*O0,.405+.20999999999999996*d0,-.222+-.05400000000000002*d0-.008],g0=n0/8,P0=(n0+1)/8,S0=Y/8,G0=(Y+1)/8;for(let[O0,d0]of[[g0,S0],[P0,S0],[P0,G0],[g0,S0],[P0,G0],[g0,G0]])ue.push(...z0(O0,d0)),st.push(O0,d0)}let Et=e({vert:`
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
			${I0}
			${ie}
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
			}`,attributes:{position:ue,uv:st},count:ue.length/3,cull:{enable:!1},uniforms:{...k,model:()=>de,tvLight:()=>p}}),Z0={n:0,vb:null,el:null};fetch("res/redroom/veil.bin").then(t=>t.arrayBuffer()).then(t=>{let _=new Uint32Array(t,0,4),z=_[0],T=_[1],E=16+_[2]*12;Z0.vb=e.buffer(new Float32Array(t,E,z*9)),Z0.el=e.elements({data:new Uint16Array(t.slice(E+z*36,E+z*36+T*2)),type:"uint16"}),Z0.n=T}).catch(t=>console.error("Her veil did not load",t));let It=e({vert:`
			precision highp float;
			uniform mat4 proj, view, model;
			uniform float yScale, time, breath;
			attribute vec3 position, normal;
			attribute vec2 uv;
			varying vec3 v_pos, v_nrm, v_eye;
			varying vec2 v_uv;
			varying float v_fold;
			${Tt}
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
			${I0}
			${ie}
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
			}`,attributes:{position:{buffer:()=>Z0.vb,stride:36,offset:0},normal:{buffer:()=>Z0.vb,stride:36,offset:12},uv:{buffer:()=>Z0.vb,stride:36,offset:24}},elements:()=>Z0.el,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}},uniforms:{...k,model:()=>de,breath:()=>fe,tvLight:()=>p}}),Ge=[],nt=[];{let t=r0.axis,_=Math.abs(t[1])>.9?[1,0,0]:[0,1,0],z=(Y,n0)=>[Y[1]*n0[2]-Y[2]*n0[1],Y[2]*n0[0]-Y[0]*n0[2],Y[0]*n0[1]-Y[1]*n0[0]],A=(Y=>{let n0=Math.hypot(...Y);return Y.map(z0=>z0/n0)})(z(t,_)),E=z(t,A),j=r0.pos[1]/-t[1],B=40;[1,.82,.64,.46,.3].forEach((Y,n0)=>{let z0=Math.tan(r0.outer*Y)*j;for(let g0=0;g0<B;g0++){let P0=g0/B*Math.PI*2,S0=(g0+1)/B*Math.PI*2,G0=d0=>[0,1,2].map(q0=>I[q0]+r0.pos[q0]+t[q0]*j+(A[q0]*Math.cos(d0)+E[q0]*Math.sin(d0))*z0),O0=[0,1,2].map(d0=>I[d0]+r0.pos[d0]);Ge.push(...O0,...G0(P0),...G0(S0)),nt.push(n0,n0,n0)}})}let At=e({vert:`
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
			${I0}
			void main() {
				vec3 lp = v_pos - RO;
				float along = length(lp - vec3(${d(r0.pos[0])}, ${d(r0.pos[1])}, ${d(r0.pos[2])})) / ${d(r0.pos[1]/-r0.axis[1])};
				float haze = 0.55 + 0.9 * rfbm(lp.xz * 1.3 + vec2(lp.y * 0.6, time * 0.05)) * rfbm(lp.xy * 0.9 - time * 0.03);
				float dist = length(v_eye - v_pos);
				float a = spotK * haze * (0.55 + 0.45 * smoothstep(1.0, 0.0, along)) * smoothstep(0.0, 0.12, along) * smoothstep(0.98, 0.8, along) * smoothstep(0.3, 1.6, dist);
				gl_FragColor = vec4(vec3(1.0, 0.88, 0.74) * a * 0.045, 1.0);
			}`,attributes:{position:Ge,layer:nt},count:Ge.length/3,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{spotK:()=>ze.k}}),rt=90,it=[];for(let t=0;t<rt;t++)it.push(Math.random(),Math.random(),Math.random(),Math.random());let $t=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, yScale, pxScale, spotK;
			attribute vec4 seed;
			varying float v_a;
			void main() {
				vec3 S = vec3(${d(I[0]+r0.pos[0])}, ${d(I[1]+r0.pos[1])}, ${d(I[2]+r0.pos[2])});
				vec3 A = vec3(${d(r0.axis[0])}, ${d(r0.axis[1])}, ${d(r0.axis[2])});
				// somewhere in the cone, drifting slowly down and round
				float al = 0.25 + 0.7 * fract(seed.x - time * 0.004 * (0.5 + seed.w));
				float len = al * ${d(r0.pos[1]/-r0.axis[1])};
				float ang = seed.y * 6.2832 + time * 0.03 * (seed.z - 0.5);
				float rr = sqrt(seed.z) * tan(${d(r0.outer)}) * len * 0.92;
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
			}`,attributes:{seed:it},count:rt,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2,spotK:()=>ze.k}}),Pt=e({vert:`
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
			}`,attributes:{fp:[].concat(...X.flames.map((t,_)=>[I[0]+t[0],I[1]+t[1],I[2]+t[2],_*1.37]))},count:X.flames.length,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2}}),qe=document.createElement("canvas");qe.width=512,qe.height=192;{let t=qe.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,512,192),t.font='bold 128px "Helvetica Neue", Arial, sans-serif',t.textAlign="center",t.textBaseline="middle",t.shadowColor="#ff2a20",t.shadowBlur=28,t.fillStyle="#ff6a5a",t.fillText("ENTER",256,100),t.shadowBlur=0,t.fillStyle="#ffd8d0",t.fillText("ENTER",256,100)}let Ot=e.texture({data:qe,min:"linear",mag:"linear",wrap:"clamp"}),K0=D0.sign,ke=.3,Ne=.1125,Ee=K0[2]-.025,Dt=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale; attribute vec3 position; attribute vec2 uv; varying vec2 v_uv; void main() { v_uv = uv; vec3 p = position; p.y *= yScale; gl_Position = proj * view * vec4(p, 1.0); }",frag:"precision highp float; uniform sampler2D tex; uniform float signK; varying vec2 v_uv; void main() { vec3 c = texture2D(tex, v_uv).rgb; vec3 col = c * vec3(1.6, 0.55, 0.5) * signK + vec3(0.06, 0.0, 0.0); gl_FragColor = vec4(col, 1.0); }",attributes:{position:[[K0[0]+ke,K0[1]-Ne,Ee],[K0[0]-ke,K0[1]-Ne,Ee],[K0[0]-ke,K0[1]+Ne,Ee],[K0[0]+ke,K0[1]+Ne,Ee]].map(t=>[t[0]+I[0],t[1]+I[1],t[2]+I[2]]),uv:[[0,1],[1,1],[1,0],[0,0]]},elements:[0,1,2,0,2,3],cull:{enable:!1},uniforms:{tex:Ot,signK:()=>x}}),ct=220,lt=[];for(let t=0;t<ct;t++)lt.push(Math.random(),Math.random(),Math.random(),Math.random());let Ct=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b;
			void main() {
				vec3 L0 = vec3(${d(I[0]+C.lens[0])}, ${d(I[1]+C.lens[1])}, ${d(I[2]+C.lens[2])});
				vec3 C = vec3(${d(I[0]+C.img.x)}, ${d(I[1]+C.img.y)}, ${d(I[2]+F)});
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
			}`,frag:"precision highp float; varying float v_b; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vec3(1.0, 0.84, 0.6) * v_b * a, 1.0); }",attributes:{seed:lt},count:ct,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2}}),je=70,ft=[];for(let t=0;t<je;t++)ft.push(Math.random(),Math.random(),Math.random(),t<je*.6?1:0);let Vt=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b, v_a, v_s;
			void main() {
				vec3 L0 = vec3(${d(I[0]+C.lens[0])}, ${d(I[1]+C.lens[1])}, ${d(I[2]+C.lens[2])});
				vec3 C = vec3(${d(I[0]+C.img.x)}, ${d(I[1]+C.img.y)}, ${d(I[2]+F)});
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
			${I0}
			void main() {
				vec2 d = gl_PointCoord - 0.5;
				float g = exp(-dot(d, d) * 9.0);
				float n = rnoise(gl_PointCoord * 3.2 + v_s + time * 0.05) * 0.7 + rnoise(gl_PointCoord * 7.0 - v_s) * 0.3;
				float a = g * smoothstep(0.2, 0.8, n) * v_a * 0.15;
				gl_FragColor = vec4(mix(vec3(0.5, 0.06, 0.04), vec3(1.0, 0.86, 0.68), clamp(v_b - 0.12, 0.0, 1.0)) * v_b * a, 1.0);
			}`,attributes:{seed:ft},count:je,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2}}),pt=2200,ht=[];for(let t=0;t<pt;t++)ht.push(Math.random(),Math.random(),Math.random(),Math.random());let Gt=e({vert:ao,frag:so,attributes:{seed:ht},count:pt,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:t=>t.viewportHeight*1.2}}),vt=56,He=(()=>{let t=[],_=[],z=[];for(let T=0;T<vt;T++){for(let[E,j]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(T),_.push(E,j);let A=T*4;z.push(A,A+1,A+2,A,A+2,A+3)}return{id:t,cr:_,idx:z}})(),jt=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, yScale;
			uniform vec3 src;
			attribute float id;
			attribute vec2 corner;
			varying vec2 v_c;
			varying float v_a, v_id, v_age;
			const float LIFE = 6.5, N = ${vt}.0;
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
			${I0}
			void main() {
				float r = length(v_c);
				if (r > 1.0) discard;
				float w = rfbm(v_c * 1.3 + vec2(v_id * 3.7, time * 0.25 - v_age * 0.4));
				float a = (1.0 - r * r) * smoothstep(0.25, 0.75, w) * v_a * mix(0.55, 0.16, smoothstep(0.5, 4.0, v_age));
				// pale smoke, lit red by the room, warmer where it is thick
				vec3 col = mix(vec3(0.42, 0.2, 0.19), vec3(0.62, 0.34, 0.3), w);
				gl_FragColor = vec4(col, a);
			}`,attributes:{id:He.id,corner:He.cr},elements:e.elements({data:new Uint16Array(He.idx),type:"uint16"}),depth:{enable:!0,mask:!1},blend:{enable:!0,func:{srcRGB:"src alpha",dstRGB:"one minus src alpha",srcAlpha:"one",dstAlpha:"one minus src alpha"}},cull:{enable:!1},uniforms:{...k,src:()=>[I[0]+O.smoke[0],I[1]+O.smoke[1],I[2]+O.smoke[2]]}}),dt=!1,ut=t=>{let _=!!(t&&t.reflected);_||M(),dt=_;let z=performance.now()/1e3;fe=Me(z);let T=.8+.12*Math.sin(z*47)*Math.sin(z*3.1)+.08*Math.sin(z*23+1.3);p[0]=.8*T,p[1]=.84*T,p[2]=.95*T,x=N(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:z),P(),Dt(),y0(),m0&&H(),se(),ee(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:z),O.smoke&&jt(),u&&!(typeof window!="undefined"&&window.__noBeam)&&_0(),be(),!_&&!(typeof window!="undefined"&&window.__noSmoke)&&Vt(),_||Ct(),_||Gt()};return ut.reflect=(t,_)=>i(z=>{let T=z.viewportWidth,A=z.viewportHeight,E=Math.max(2,Math.round(T/2)),j=Math.max(2,Math.round(A/2)),B=!n;if((a.width!==E||a.height!==j)&&(a.resize(E,j),B=!0),b[0]=T,b[1]=A,c=1,!B&&++l%_!==0){s=q;return}s=o,r(()=>{e.clear({color:[0,0,0,1],depth:1}),t()}),s=q,n=!0}),ut};var Ke=null;Object.assign(Ze.exports,{O:I,W:S,L:F,H:i0,ROOM:{W:S,L:F,H:i0,WIN:G,DOOR:L0,ENT:D0,SHAFTS:Z,TV:Q,DARK:O,PROJ:C,CABLE:N0,POL:Q0,TBL:X,WOMAN:c0,winZ:$e,vaultY:ne},POST:{threshold:.3},sunGLSL:Kt,bakedSun(e){return Ke||(Ke=e.texture({width:1,height:1,data:[0,0,0,0]})),Ke},ready:()=>!0,setFlower(){},setGuide(){},setWind(){},setSpot(e){ze.k=e},setWarn(e){Object.assign(k0,e)},setViewer(e){zt.eye=e?e.slice():null},setPulse(e,m){Pe.phase=e,Pe.period=m},onClick(e){Xe.click=e}})});var Nt=Be((vo,kt)=>{"use strict";var x0=Qe(),{O:Je}=x0,{W:w0,L:Mt,TV:me,DARK:C0,PROJ:le,TBL:l0,WOMAN:De}=x0.ROOM,Rt=e=>[e[0]+Je[0],e[1]+Je[1],e[2]+Je[2]],et=(e,m,w)=>e+(m-e)*w,ye=e=>Math.max(0,Math.min(1,e)),no="Some grief is not yours to witness.",Y0=e=>(e=ye(e),e*e*(3-2*e)),Ce=[De.x,0,De.z],ot=Math.sin(De.yaw),at=Math.cos(De.yaw),j0=(e,m,w)=>[Ce[0]+ot*e+at*(w||0),m,Ce[2]+at*e-ot*(w||0)],H0=le.x,qt=le.table,ce=le.z,Le=[H0+le.feed[0],qt+le.feed[1],ce+le.feed[2]],Oe=le.lens,tt=C0.trays[0],b0=l0.letters,ge=[(b0[0].x+b0[1].x)/2,l0.top,(b0[0].z+b0[1].z)/2],ro=[{eye:[w0/2+.15,1.55,-9.6],at:[w0/2,1.7,0],fov:40,dof:.05,p:{fov:58}},{eye:[w0/2+.05,1.6,-3],at:[w0/2,1.85,1.5],fov:50,dof:.05,p:{fov:70}},{eye:[w0/2-.2,1.5,.9],at:[w0/2-3,1.4,7],fov:56,dof:.04,p:{fov:74}},{eye:[w0-4.4,1.55,1.2],at:[w0-.7,1.05,l0.z+.2],fov:46,dof:.06,p:{eye:[w0-4.8,1.6,.9],fov:68}},{eye:[l0.x-1.4,l0.top+.48,l0.z-.7],at:[l0.x+.05,l0.top+.26,l0.z+0],fov:40,dof:.32,p:{fov:50}},{eye:[l0.stack[0]-.35,l0.top+.75,l0.stack[1]-.25],at:[l0.stack[0]+.02,l0.top,l0.stack[1]+.02],fov:34,dof:.3,p:{fov:50}},{eye:[ge[0]-.3,l0.top+.85,ge[2]-.1],at:[ge[0]+.03,l0.top,ge[2]+.02],fov:40,dof:.22,p:{eye:[ge[0]-.35,l0.top+1.05,ge[2]-.1],fov:62}},{eye:[b0[0].x-.09,l0.top+.4,b0[0].z-.01],at:[b0[0].x+.012,l0.top,b0[0].z],fov:42,dof:.12,p:{eye:[b0[0].x-.1,l0.top+.46,b0[0].z],fov:70}},{eye:[b0[1].x-.09,l0.top+.4,b0[1].z+.01],at:[b0[1].x+.012,l0.top,b0[1].z],fov:42,dof:.12,p:{eye:[b0[1].x-.1,l0.top+.46,b0[1].z],fov:70}},{eye:[3.3,1.55,1.3],at:[.3,1.35,5.2],fov:50,dof:.05,p:{eye:[2.8,1.6,.9],fov:72}},{eye:[1.05,1.5,tt-.42],at:[C0.TXc-.02,C0.liquid,tt+.04],fov:34,dof:.2,p:{eye:[1,1.55,tt-.45],fov:52}},{eye:[.95,1.22,C0.cam.z-.5],at:[C0.cam.x-.02,C0.cam.y+.04,C0.cam.z+.06],fov:34,dof:.34,p:{fov:48}},{eye:[1.75,1.45,9],at:[.35,1.08,10.8],fov:46,dof:.12,p:{eye:[1.9,1.5,8.6],fov:66}},{eye:[.66,1.58,9.25],at:[.38,C0.top,9.75],fov:52,dof:.18,p:{eye:[.7,1.68,9.15],fov:74}},{eye:[.66,1.58,10.75],at:[.38,C0.top,11.25],fov:52,dof:.18,pass:!0,p:{eye:[.7,1.68,10.65],fov:74}},{eye:[.68,1.5,11.35],at:[.5,C0.top+.06,11.72],fov:44,dof:.26,p:{eye:[.72,1.6,11.25],fov:66}},{eye:[.66,1.58,12.2],at:[.4,C0.top,12.62],fov:52,dof:.18,p:{eye:[.7,1.68,12.1],fov:74}},{eye:[2,1.6,8.3],at:[.4,2.25,11.3],fov:50,dof:.12,p:{eye:[1.8,1.6,8.1],fov:72}}];function St(e,m){let w=e.length-1,y=Math.max(0,Math.min(w,m)),q=Math.min(w-1,Math.floor(y)),a=y-q,r=e[Math.max(0,q-1)],o=e[q],i=e[q+1],s=e[Math.min(w,q+2)],c=a*a,l=c*a;return[0,1,2].map(n=>.5*(2*o[n]+(-r[n]+i[n])*a+(2*r[n]-5*o[n]+4*i[n]-s[n])*c+(-r[n]+3*o[n]-3*i[n]+s[n])*l))}var Te=0;function io(){let e=ro.slice();{let v=(x0.ROOM.DARK.hung||[]).filter(f=>f.peg[0]>1.3&&f.c[2]>9.4&&f.c[2]<12.6&&f.c[1]>1.6&&f.c[1]<2.5);if(v.sort((f,h)=>Math.abs(f.c[2]-10.9)-Math.abs(h.c[2]-10.9)),v.length){let f=v[0],h=f.c;e.push({eye:[h[0]+.85,h[1]-.05,h[2]-.55],at:h,fov:30,dof:.42,p:{eye:[h[0]+1.05,h[1]-.05,h[2]-.6],fov:46}});let M=v.find(g=>Math.abs(g.c[2]-h[2])>.25&&Math.abs(g.c[2]-h[2])<.9);M&&e.push({eye:[M.c[0]+.7,M.c[1]+.02,M.c[2]+.45],at:M.c,fov:30,dof:.42,p:{eye:[M.c[0]+.9,M.c[1]+.02,M.c[2]+.5],fov:46}})}}let m=x0.ROOM.CABLE,w=m.path,y=m.socket[2],q=m.socket[0];e.push({eye:[q+1.05,.42,y-.45],at:[q,.27,y+.08],fov:42,dof:.32,p:{eye:[q+1.3,.48,y-.55],fov:58}});let[a,r]=m.run;for(let v of[.04,.22,.42,.62,.82]){let f=Math.round(a+(r-a)*v),h=w[Math.max(0,f-6)],M=w[Math.min(w.length-1,f+6)],g=w[f],x=M[0]-h[0],N=M[2]-h[2],k=Math.hypot(x,N)||1;x/=k,N/=k,e.push({eye:[g[0]-x*.8-N*.12,.3,g[2]-N*.8+x*.12],at:[g[0]+x*1.5,.06,g[2]+N*1.5],fov:44,dof:.24,pass:!0,p:{fov:60}})}e.push({eye:[w0-3,.45,y-1.6],at:[w0-.3,1.9,y+.9],fov:50,dof:.1,p:{fov:70}});let o=(v,f,h)=>[v[0]+f[0]*h,v[1]+f[1]*h,v[2]+f[2]*h],i=11,s=()=>(i=i*16807%2147483647,(i-1)/2147483646),c=(x0.ROOM.POL.spots||[]).filter(v=>v.n[0]<-.5&&v.c[2]>10.5&&v.c[2]<21.5&&v.c[1]>1.9&&v.c[1]<4.6),l=(v,f)=>Math.abs(v.c[2]-f)+Math.abs(v.c[1]-3)*.4,n=[];for(let v of[12.6,15,17.3]){let f=null;for(let h of c)(!f||l(h,v)<l(f,v))&&(f=h);f&&n.indexOf(f)<0&&n.push(f)}n.forEach((v,f)=>{let h=v.n,M=v.c;f>0&&e.push({eye:o(o(M,h,2.2),[0,.15,-.6],1),at:M,fov:50,dof:.05,pass:!0}),e.push({eye:o(o(M,h,1),[0,.06,-.3],1),at:M,fov:36,dof:.26,p:{fov:50}})}),e.push({eye:[H0+2,1.35,ce-1.5],at:[H0,1.35,ce+.1],fov:42,dof:.12,p:{eye:[H0+1.6,1.4,ce-1.5],fov:62}}),e.push({eye:[H0+.85,Le[1]+.12,Le[2]-.35],at:[Le[0],Le[1]-.05,Le[2]],fov:36,dof:.32,p:{fov:52}}),e.push({eye:[H0+.42,Oe[1]+.08,Oe[2]+1.35],at:[H0,Oe[1],Oe[2]],fov:36,dof:.35,p:{fov:52}}),e.push({eye:[H0-.55,1.75,ce-1.4],at:[w0/2,5,Mt],fov:50,dof:.06,p:{fov:70}}),e.push({eye:[H0-.2,3.3,ce+3.2],at:[w0/2,5.4,Mt],fov:52,dof:.04,pass:!0,p:{fov:72}});let b=me.stack;e.push({eye:[w0/2+1.4,1.2,me.z-4.9],at:[w0/2,1.75,me.z],fov:50,dof:.05,p:{fov:70}});let p=b.map((v,f)=>f);for(let v=p.length-1;v>0;v--){let f=Math.floor(s()*(v+1)),h=p[v];p[v]=p[f],p[f]=h}p=p.slice(0,10);let u=null;for(let v of p){let f=b[v],h=f.screen,M=f.facing,g=f.size*1.25;if(u){let N=[(u[0]+h[0])/2,(u[1]+h[1])/2+.2,Math.min(u[2],h[2])-2.6];e.push({eye:N,at:[(u[0]+h[0])/2,(u[1]+h[1])/2,me.z],fov:46,dof:.05,pass:!0})}let x=(s()-.5)*.5;e.push({eye:[h[0]+M[0]*g+x,h[1]+.05+(s()-.5)*.15,h[2]+M[2]*g],at:[h[0],h[1],h[2]],fov:30,dof:.3,p:{fov:44}}),u=h}return e.push({eye:[w0/2+.3,3.3,me.z-2.3],at:[w0/2,2.4,me.z+3],fov:52,dof:.04,pass:!0}),e.push({eye:j0(-.9,4.4,.2),at:j0(4.6,1.5),fov:54,dof:.04,pass:!0}),Te=e.length,e.push({eye:j0(-3.4,2.5,-1.5),at:j0(1,.75),fov:46,dof:.08,p:{fov:66}}),e.push({eye:j0(-2.55,2.3,0),at:j0(5.2,.95),fov:56,dof:.12,p:{eye:j0(-2.55,2.4,0),fov:74}}),e.push({eye:j0(-1.6,.92,0),at:j0(3,1.02),fov:50,dof:.28,p:{eye:j0(-1.9,.95,0),fov:64}}),e}function co(){let e=null,m=null,w=null,y=null,q=null,a=i=>{let s=e.createBuffer(1,Math.floor(e.sampleRate*i),e.sampleRate),c=s.getChannelData(0);for(let l=0;l<c.length;l++)c[l]=Math.random()*2-1;return s},r=()=>{if(e){e.state==="suspended"&&e.resume();return}let i=window.AudioContext||window.webkitAudioContext;if(!i)return;e=window.__redAudio||new i,window.__redAudio=e,e.state==="suspended"&&e.resume(),y=e.createGain(),y.gain.value=.9,y.connect(e.destination),m=e.createGain(),m.gain.value=0;let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=170,s.Q.value=4,[55,55.6,110.3].forEach((n,b)=>{let p=e.createOscillator();p.type=b<2?"sawtooth":"sine",p.frequency.value=n,p.connect(s),p.start()}),s.connect(m),m.connect(y),w=e.createGain(),w.gain.value=0;let c=e.createBufferSource();c.buffer=a(2),c.loop=!0;let l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=3200,l.Q.value=.6,c.connect(l),l.connect(w),w.connect(y),c.start()},o=(i,s,c,l,n)=>{i.gain.setValueAtTime(0,s),i.gain.linearRampToValueAtTime(l,s+c),i.gain.exponentialRampToValueAtTime(1e-4,s+c+n)};return{start:r,set(i,s){if(!e)return;let c=e.currentTime;m.gain.setTargetAtTime(i*.16,c,.15),w.gain.setTargetAtTime(s*.035,c,.08)},tick(){if(!e)return;let i=e.currentTime,s=e.createOscillator();s.type="square",s.frequency.setValueAtTime(1180,i),s.frequency.exponentialRampToValueAtTime(240,i+.09);let c=e.createGain();o(c,i,.002,.09,.12),s.connect(c),c.connect(y),s.start(i),s.stop(i+.2);let l=e.createOscillator();l.type="sine",l.frequency.setValueAtTime(90,i),l.frequency.exponentialRampToValueAtTime(40,i+.2);let n=e.createGain();o(n,i,.004,.35,.25),l.connect(n),n.connect(y),l.start(i),l.stop(i+.35)},clunk(){if(!e)return;let i=e.currentTime,s=e.createOscillator();s.type="sine",s.frequency.setValueAtTime(75,i),s.frequency.exponentialRampToValueAtTime(38,i+.25);let c=e.createGain();o(c,i,.003,.5,.35),s.connect(c),c.connect(y),s.start(i),s.stop(i+.5);let l=e.createBufferSource();l.buffer=a(.08);let n=e.createBiquadFilter();n.type="highpass",n.frequency.value=1800;let b=e.createGain();o(b,i,.001,.25,.06),l.connect(n),n.connect(b),b.connect(y),l.start(i)},burst(){if(!e)return;let i=e.currentTime,s=e.createBufferSource();s.buffer=a(2.4);let c=e.createBiquadFilter();c.type="bandpass",c.Q.value=.7,c.frequency.setValueAtTime(600,i),c.frequency.exponentialRampToValueAtTime(5e3,i+1.6);let l=e.createGain();l.gain.setValueAtTime(1e-4,i),l.gain.exponentialRampToValueAtTime(.5,i+.5),l.gain.setValueAtTime(.5,i+1.7),l.gain.exponentialRampToValueAtTime(1e-4,i+2.3),s.connect(c),c.connect(l),l.connect(y),s.start(i);let n=e.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(110,i),n.frequency.exponentialRampToValueAtTime(18,i+2);let b=e.createGain();o(b,i,.05,.18,2),n.connect(b),b.connect(y),n.start(i),n.stop(i+2.2)},beat(i){if(!e||i<.01)return;let s=e.currentTime;[[0,1],[.24,.62]].forEach(([c,l])=>{let n=s+c,b=e.createBiquadFilter();b.type="bandpass",b.frequency.value=340,b.Q.value=1.4;let p=e.createGain();o(p,n,.012,.22*l*i,.16),[100,150.4,200.9].forEach((h,M)=>{let g=e.createOscillator();g.type=M===1?"square":"sawtooth",g.frequency.setValueAtTime(h*1.04,n),g.frequency.exponentialRampToValueAtTime(h,n+.12),g.connect(b),g.start(n),g.stop(n+.32)});let u=e.createBufferSource();u.buffer=a(.18);let v=e.createBiquadFilter();v.type="highpass",v.frequency.value=2600;let f=e.createGain();o(f,n,.004,.05*l*i,.1),u.connect(v),v.connect(f),f.connect(y),u.start(n),b.connect(p),p.connect(y)})},buzz(i){if(e){if(!q){q=e.createGain(),q.gain.value=0;let s=e.createBiquadFilter();s.type="bandpass",s.frequency.value=260,s.Q.value=2.2,[100,100.7,300.2].forEach((c,l)=>{let n=e.createOscillator();n.type=l===2?"square":"sawtooth",n.frequency.value=c,n.connect(s),n.start()}),s.connect(q),q.connect(y)}q.gain.setTargetAtTime(i*.03,e.currentTime,.2)}},click(i,s){if(!e||i<.01)return;let c=e.currentTime,l=e.createBufferSource();l.buffer=a(.05);let n=e.createBiquadFilter();n.type="bandpass",n.frequency.value=s?1900:3100,n.Q.value=2.5;let b=e.createGain();o(b,c,8e-4,.55*i,.035),l.connect(n),n.connect(b),b.connect(y),l.start(c);let p=e.createOscillator();p.type="triangle",p.frequency.setValueAtTime(s?210:340,c),p.frequency.exponentialRampToValueAtTime(s?90:160,c+.06);let u=e.createGain();o(u,c,.001,(s?.32:.2)*i,.08),p.connect(u),u.connect(y),p.start(c),p.stop(c+.15);let v=e.createBufferSource();v.buffer=a(.03);let f=e.createBiquadFilter();f.type="bandpass",f.frequency.value=4200,f.Q.value=3;let h=e.createGain();o(h,c+.055,8e-4,.22*i,.025),v.connect(f),f.connect(h),h.connect(y),v.start(c+.055)},stop(){if(q&&(q.gain.value=0),q=null,m&&(m.gain.value=0),w&&(w.gain.value=0),y)try{y.disconnect()}catch(i){}e=null,m=w=y=null}}}var lo=`
.red-sub {
	position: fixed; left: 50%; bottom: 9vh; transform: translateX(-50%); z-index: 406;
	width: min(92vw, 900px); text-align: center; pointer-events: none;
	font: italic 400 clamp(19px, 2.5vw, 32px)/1.35 'Cormorant Garamond', Georgia, serif;
	color: #f1e7dc; letter-spacing: .035em; text-shadow: 0 2px 18px rgba(0,0,0,.9), 0 0 2px rgba(0,0,0,.8);
	opacity: 0;
}`;kt.exports=function(m){m=m||{};let w=io(),y=w.length-1,q=w.map((R,H)=>R.pass?-1:H).filter(R=>R>=0),a=(R,H)=>{if(H>=0){for(let D of q)if(D>=R-.06)return D;return q[q.length-1]}for(let D=q.length-1;D>=0;D--)if(q[D]<=R+.06)return q[D];return q[0]},r=(R,H)=>{if(H>0){for(let D of q)if(D>R+.01)return D;return q[q.length-1]}for(let D=q.length-1;D>=0;D--)if(q[D]<R-.01)return q[D];return q[0]},o=null,i=null,s=0,c=0,l=0,n=null,b=null,p=0,u=co(),v={phase:0,period:1.2,beat:0},f=0;x0.onClick(R=>u.click(f,R));let h=document.createElement("div");h.className="red-sub",h.textContent=no;let M=document.createElement("style");M.textContent=lo,document.head.appendChild(M),document.body.appendChild(h);let g=0,x=0,N=null,k=-10,P=0,V=null,$=1,W=-10,J=[],U=(R,H,D)=>{window.addEventListener(R,H,D),J.push([R,H,D])},f0=R=>{let H=Math.sign(R);if(!(!H||n!==null)){if(H>0&&x>=y-.001&&g>y-.08||H<0&&c>0){let D=c<1?2.2:.75;c=Math.max(0,Math.min(2.4,c+Math.max(-.2,Math.min(.13,R))*D)),k=P,W=P,$=H;return}H!==$&&P-W<.25&&Math.abs(R)<.02||(H!==$&&($=H),W=P,x=Math.max(0,Math.min(y,x+R)),k=P)}},s0=R=>{if(n===null){if(R>0&&x>=y-.001||R<0&&c>0){f0(R>0?.12:-.12);return}$=R>0?1:-1,x=r(x,R),k=P-10}};U("pointerdown",()=>u.start()),U("keydown",()=>u.start()),U("touchend",()=>u.start()),U("wheel",R=>{if(R.target.closest&&R.target.closest(".st-ui"))return;R.preventDefault();let H=R.deltaMode===1?R.deltaY*16:R.deltaMode===2?R.deltaY*window.innerHeight:R.deltaY;f0(Math.max(-.6,Math.min(.6,H/700)))},{passive:!1});let a0=null;U("pointerdown",R=>{R.target.closest&&R.target.closest("button, a, .st-ui")||(a0={lx:R.clientX,ly:R.clientY,moved:0,t:performance.now()})}),U("pointermove",R=>{if(!a0)return;let H=R.clientX-a0.lx,D=R.clientY-a0.ly;a0.lx=R.clientX,a0.ly=R.clientY;let K=Math.abs(D)>=Math.abs(H)?-D:-H;a0.moved+=Math.abs(K),a0.moved>6&&f0(K/(window.innerHeight*.55))}),U("pointerup",()=>{let R=a0;a0=null,R&&R.moved<8&&performance.now()-R.t<450&&s0(1)}),U("keydown",R=>{R.key==="ArrowDown"||R.key==="ArrowRight"||R.key==="PageDown"||R.key===" "?s0(1):(R.key==="ArrowUp"||R.key==="ArrowLeft"||R.key==="PageUp")&&s0(-1)});function y0(R){P=R,V===null&&(V=R);let H=N===null?0:Math.min(.1,R-N);N=R,typeof window!="undefined"&&window.__redShot!==void 0&&/tourdebug/.test(location.search)&&(g=x=window.__redShot,o=null),typeof window!="undefined"&&window.__press!==void 0&&/tourdebug/.test(location.search)&&(c=s=window.__press),P-k>.35&&(x+=(a(x,$)-x)*(1-Math.exp(-H*2))),g+=(x-g)*(1-Math.exp(-H*1.7)),Math.abs(x-g)<1e-4&&(g=x);let D=window.innerWidth<window.innerHeight,K=w.map(e0=>D&&e0.p?Object.assign({},e0,e0.p):e0),R0=Math.min(y-1,Math.floor(g)),B0=g-R0,xe=B0*B0*(3-2*B0),p0=St(K.map(e0=>e0.eye),g),T0=St(K.map(e0=>e0.at),g);(!o||H===0||H>.09)&&(o=p0.slice(),i=T0.slice());let t0=1-Math.exp(-H*5);for(let e0=0;e0<3;e0++)o[e0]+=(p0[e0]-o[e0])*t0,i[e0]+=(T0[e0]-i[e0])*t0;p0=o.slice(),T0=i.slice();let fe=K[R0],Me=K[Math.min(y,R0+1)],we=et(fe.fov,Me.fov,xe),Re=et(fe.dof,Me.dof,xe);P-k>2.2&&n===null&&(c=Math.max(0,c-H*.14));let J0=s<1?.9:.55;s+=Math.max(-J0*H*2,Math.min(J0*H,c-s)),s>2.08&&n===null&&(n=R,u.burst());let ee=ye(s),F0=ye(s-1),pe=Math.min(10,Math.max(0,(s-1)*10.5));if(Math.floor(pe)>l&&(u.tick(),navigator.vibrate))try{navigator.vibrate(28)}catch(e0){}l=Math.floor(pe);let _0=n===null?0:ye((R-n)/2.3);typeof window!="undefined"&&window.__xk!==void 0&&/tourdebug/.test(location.search)&&(_0=window.__xk);let be=Y0(ee)*.28+F0*.06;p0=[p0[0]+ot*be,p0[1]-be*.08,p0[2]+at*be];let _e=ee*.004+F0*.008+_0*.05;p0[0]+=Math.sin(R*37)*_e,p0[1]+=Math.sin(R*41+1)*_e;let he=g>Te-.35?1:0;he&&!p&&(p=1,b=R,u.clunk()),!he&&p&&g<Te-.8&&(p=0);let ve=0;if(p){let e0=R-b;ve=e0<.75?[0,1,.15,.9,.3,1][Math.min(5,Math.floor(e0/.125))]:1}let Ve=Math.sin(R*13)*Math.sin(R*5.3);ve*=1-(ee*.25+F0*.3)*(Ve>.6?1:0)-_0*(Math.sin(R*60)>0?.8:0),x0.setSpot(Math.max(0,ve));{let e0=p0,A0=Math.hypot(e0[0]-Ce[0],e0[2]-Ce[2]),ae=et(.68,1.35,ye((A0-1.5)/12));v.phase+=H/v.period,v.period=ae;let V0=1e9,U0=x0.ROOM.CABLE.path;for(let se=0;se<U0.length;se+=6){let ue=Math.hypot(e0[0]-U0[se][0],e0[1]-U0[se][1],e0[2]-U0[se][2]);ue<V0&&(V0=ue)}let $0=1/(1+V0*V0*.18);Math.floor(v.phase)>v.beat&&(v.beat=Math.floor(v.phase),u.beat($0*(1-_0))),u.buzz((.25+$0)*(1-_0)),x0.setPulse(v.phase,v.period);let de=Math.hypot(e0[0]-H0,e0[1]-qt,e0[2]-ce);f=(1-_0)/(1+de*de*.05)}x0.setWarn({s:Y0((s-.12)/.45),n:pe,glitch:Y0(_0*1.6),freeze:s>.15}),h.style.opacity=String(Y0((s-.35)/.4)*(1-Y0((_0-.1)/.3))*(.88+.12*Math.sin(R*2))),u.set(Y0(ee)*(1-_0)+F0*.5,Y0((s-.12)/.45)*(1-_0*.5)),n!==null&&_0>=1&&(m.onExpel?m.onExpel():v0(),n=null);let M0=typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:R,Se=Math.hypot(T0[0]-p0[0],T0[1]-p0[1],T0[2]-p0[2]),te=.01+.03*Math.min(1,Se/6);p0=[p0[0]+Math.sin(M0*.31)*te,p0[1]+Math.sin(M0*.43+1)*te*.6,p0[2]+Math.cos(M0*.27)*te],T0=[T0[0]+Math.sin(M0*.21+2)*te*.8,T0[1]+Math.sin(M0*.37)*te*.5,T0[2]];let o0=Rt(p0),W0=Rt(T0),oe=Math.max(1-ye((R-V-.3)/1.8),Y0((_0-.82)/.18));return x0.setViewer(o0),{eye:o0,target:W0,fov:we,roll:Math.sin(M0*.17)*.004,moving:!0,look:{letterbox:.45,focus:Se,aperture:Re,vignette:.3+ee*.25,exposure:1.45,shafts:1,fade:oe,fadeColor:[0,0,0],glitch:Y0((_0-.25)/.6)*.9+F0*.06}}}function v0(){s=c=0,l=0,n=null,p=0,g=x=0,o=null,V=null,x0.setWarn({s:0,n:0,glitch:0,freeze:!1}),x0.setSpot(0)}function m0(){for(let[R,H,D]of J)window.removeEventListener(R,H,D);J.length=0,u.stop(),h.remove(),M.remove(),x0.setWarn({s:0,n:0,glitch:0,freeze:!1}),x0.setSpot(0),x0.setViewer(null),x0.onClick(null)}return/tourdebug/.test(location.search)&&(window.__redTourInfo={END:y,REVEAL:Te,STOPS:q}),{update:y0,tap:()=>s0(1),dispose:m0,placeFlower(){},startSound:()=>u.start(),get scroll(){return g},END:y,REVEAL:Te}}});window.__redRoom={studio:Qe(),tour:Nt()};})();

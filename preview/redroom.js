"use strict";(()=>{var Y0=(e,h)=>()=>(h||e((h={exports:{}}).exports,h),h.exports);var xe=Y0((rt,me)=>{"use strict";var g0=[-90,0,0],Z0=16,J0=27.5,Q0=11.6;me.exports={O:g0,W:Z0,L:J0,RIDGE:Q0,BOX:[g0[0]-.8,0,g0[2]-11.5,g0[0]+Z0+.8,Q0+.5,g0[2]+J0+.8],AIR_BOX:[g0[0],0,g0[2],g0[0]+Z0,Q0,g0[2]+J0]}});var oe=Y0((lt,te)=>{"use strict";var{O:N,W:_,L:A}=xe(),d=e=>(+e).toFixed(4),X=10.5,W0=.7,ge=3,E={hw:1.25,sill:1.35,spring:6.9,n:4,step:6.35};E.z0=A/2-E.step*(E.n-1)/2;E.apex=E.spring+E.hw*Math.sqrt(3);var H0=e=>E.z0+E.step*e;E.leftFrom=2;var G=[];for(let e=0;e<=E.n;e++)G.push(E.z0+E.step*(e-.5));var n0={hw:.75,h:2.6,depth:.7},v0={hw:1.8,h:3.6,z:-11,sign:[_/2,n0.h+.32,-n0.depth-.05],open:2.2},j={z:21.2,G:2.4,models:{sony:{file:"res/redroom/tv_sony.bin",tex:3,w:.36,h:.341,d:.455,dark:.55},crt:{file:"res/redroom/tv_crt.bin",tex:3,w:.47,h:.454,d:.389,dark:.9},old:{file:"res/redroom/tv_old.bin",tex:1,w:.62,h:.418,d:.416,dark:.75}}};j.stack=[["old",0,-1.41,2,.04],["crt",0,.05,-1,-.02],["sony",0,1.24,-2,.06],["crt",1,-1.16,3,.02],["sony",1,-.03,-1,.04],["crt",1,1.14,-3,.06],["sony",2,-.73,2,.06],["old",2,.66,-2,.03],["crt",0,-2.78,3,.08],["sony",1,-2.68,4,.1],["old",0,2.5,-3,.08],["sony",1,2.32,-4,.1]];var Ge={sony:[0,.194],crt:[0,.27],old:[.0625,.2145]};(()=>{let e=[];for(let h of j.stack){let I=j.models[h[0]],T=h[1],n=h[2],s=I.w*j.G,t=0;for(let r of e)r.row>=T||Math.abs(r.dx-n)<(r.w+s)/2*.92&&(t=Math.max(t,r.top));e.push({dx:n,row:T,w:s,top:t+I.h*j.G*.99}),h.base=t;let f=Ge[h[0]],i=h[3]*Math.PI/180;h.screen=[_/2+n+f[0]*j.G,t+f[1]*j.G,j.z+h[4]],h.facing=[-Math.sin(i),0,-Math.cos(i)],h.size=I.w*j.G}})();var O=(()=>{let e={top:.92,depth:.78};return e.a=[G[0]+.7,G[1]-.55],e.b=[G[1]+.55,G[2]-.7],e.basin={x0:.08,x1:e.depth-.07,z0:e.a[0]+.1,z1:e.a[1]-.1,floor:e.top-.1},e.TX=.44,e.TZ=.54,e.TH=.075,e.TXc=(e.basin.x0+e.basin.x1)/2,e.trays=[e.a[0]+1.1,e.a[0]+1.72,e.a[0]+2.34],e.liquid=e.basin.floor+.05,e.bulb=[e.TXc+.02,1.39,e.trays[0]+.05],e.tube={x:.07,y:3.05,z0:e.b[0]+.2,z1:e.b[1]-.2},e.lines=[[.5,2.62,G[0],G[1],.14],[.5,2.62,G[1],G[2],.16],[.5,2.08,G[1],G[2],.12]],e})(),k=(()=>{let e={x:_/2-.006,z:14.92,tableK:1.25,pitch:.1};e.table=.761*e.tableK,e.feed=[.0254,.7696,.3364],e.takeup=[.0252,.2484,.337],e.lensL=[.006,.456,.15];let h=Math.cos(e.pitch),I=Math.sin(e.pitch),T=e.lensL;return e.lens=[e.x+T[0],e.table+T[1]*h+T[2]*I,e.z-T[1]*I+T[2]*h],e.img={x:_/2,y:6,w:6.4},e.img.h=e.img.w*.75,e})(),Y={x0:4.2,x1:11.8,y:9,z:A-.16},L0={r:.045};(()=>{let e=L0.r,h=.51,I=_-.51,T=[h,5.5,G[1]],n=[I,6.1,G[2]],s=[];for(let i=1;i<14;i++){let r=i/14;s.push([T[0]+(n[0]-T[0])*r,T[1]+(n[1]-T[1])*r-2*4*r*(1-r),T[2]+(n[2]-T[2])*r])}L0.ctrl=[[_/2+.5,e,-1.3],[_/2+.2,e,1],[7.2,e,3.1],[4.7,e,4.5],[2.5,e,6],[1,e,6.95],[.72,e*1.2,G[1]],[.68,.3,G[1]],[.66,.53,G[1]],[.55,.62,G[1]],[h,1,G[1]],[h,3.2,G[1]],T,...s,n,[I,3.4,G[2]],[I,1,G[2]],[_-.55,.62,G[2]],[_-.66,.53,G[2]],[_-.68,.3,G[2]],[_-.75,e*1.2,G[2]+.25],[_-1.1,e,14.6],[_-1.7,e,16.2],[_-2.5,e,17.6],[12.9,e,18.5],[11.5,e,18.9],[10.6,e,19.5],[10.5,e,20.3],[11.2,e,20.5],[10.9,e,19.95],[10,e*2.2,20.1],[9.3,e,20.75],[9.5,e,21.9],[8.6,e,22.25],[8.1,.22,21.95]];let t=L0.ctrl,f=[];for(let i=0;i<t.length-1;i++){let r=t[Math.max(0,i-1)],o=t[i],l=t[i+1],c=t[Math.min(t.length-1,i+2)],u=Math.max(2,Math.ceil(Math.hypot(l[0]-o[0],l[1]-o[1],l[2]-o[2])/.06));for(let m=0;m<u;m++){let q=m/u,w=q*q,L=w*q;f.push([0,1,2].map(p=>.5*(2*o[p]+(-r[p]+l[p])*q+(2*r[p]-5*o[p]+4*l[p]-c[p])*w+(-r[p]+3*o[p]-3*l[p]+c[p])*L)))}}f.push(t[t.length-1].slice());for(let i of f)i[1]<e&&i[2]>-1.4&&(i[1]=e);L0.path=f})();var y0={spots:[],w:.36,h:.435,n:36,lines:[{z:A-1.7,y:6.5,sag:1},{z:A-2.6,y:5.3,sag:.8}]},c0=(()=>{let e=[-.62,.75,-.16],h=Math.hypot(...e);return e.map(I=>I/h)})(),z0=(()=>{let e=_/2;return(e*e+ge*ge)/(2*e)})(),_0=e=>{let h=e<=_/2?e:_-e;return X+Math.sqrt(Math.max(0,z0*z0-(h-z0)*(h-z0)))},x={FLOOR:0,WALL:1,REVEAL:2,GLASS:3,VAULT:4,TRIM:5,VOID:6,TUBE:7,CABLE:8,TILE:9,STEEL:10,PEG:11,CONC:12,CFLOOR:13,DOOR:14};function _e(){let e=[],h=[],I=[],T=[],n=[],s={pos:e,nrm:h,kind:I,uv:T,idx:n,v(t,f,i,r){return e.push(t[0]+N[0],t[1]+N[1],t[2]+N[2]),h.push(f[0],f[1],f[2]),I.push(i),T.push(r?r[0]:0,r?r[1]:0),e.length/3-1},quad(t,f,i,r,o,l,c,u,m,q){let w=s.v(t,o,l,c),L=s.v(f,o,l,u),p=s.v(i,o,l,m),g=s.v(r,o,l,q);n.push(w,L,p,w,p,g)},box(t,f,i,r,o,l,c){s.quad([t,f,l],[r,f,l],[r,o,l],[t,o,l],[0,0,1],c),s.quad([r,f,i],[t,f,i],[t,o,i],[r,o,i],[0,0,-1],c),s.quad([r,f,l],[r,f,i],[r,o,i],[r,o,l],[1,0,0],c),s.quad([t,f,i],[t,f,l],[t,o,l],[t,o,i],[-1,0,0],c),s.quad([t,o,l],[r,o,l],[r,o,i],[t,o,i],[0,1,0],c),s.quad([t,f,i],[r,f,i],[r,f,l],[t,f,l],[0,-1,0],c)},cyl(t,f,i,r,o,l,c){c=c||18;for(let u=0;u<c;u++){let m=u/c*Math.PI*2,q=(u+1)/c*Math.PI*2,w=[Math.sin(m),0,Math.cos(m)],L=[Math.sin(q),0,Math.cos(q)],p=(S,D)=>[t+S[0]*i,D,f+S[2]*i],g=s.v(p(w,r),w,l),y=s.v(p(L,r),L,l),v=s.v(p(L,o),L,l),b=s.v(p(w,o),w,l);n.push(g,y,v,g,v,b)}}};return s}function f0(e,h,I,T,n){let s=null,t=null,f=[];for(let i=0;i<h.length;i++){let r=h[Math.max(0,i-1)],o=h[Math.min(h.length-1,i+1)],l=[o[0]-r[0],o[1]-r[1],o[2]-r[2]],c=Math.hypot(...l)||1;l=l.map(L=>L/c),t||(t=Math.abs(l[1])<.9?[0,1,0]:[1,0,0]);let u=t[0]*l[0]+t[1]*l[1]+t[2]*l[2];t=[t[0]-l[0]*u,t[1]-l[1]*u,t[2]-l[2]*u];let m=Math.hypot(...t)||1;t=t.map(L=>L/m);let q=[l[1]*t[2]-l[2]*t[1],l[2]*t[0]-l[0]*t[2],l[0]*t[1]-l[1]*t[0]],w=[];for(let L=0;L<T;L++){let p=L/T*Math.PI*2,g=Math.cos(p),y=Math.sin(p),v=[t[0]*g+q[0]*y,t[1]*g+q[1]*y,t[2]*g+q[2]*y];w.push(e.v([h[i][0]+v[0]*I,h[i][1]+v[1]*I,h[i][2]+v[2]*I],v,n,[i,L]))}if(s)for(let L=0;L<T;L++){let p=(L+1)%T;e.idx.push(s[L],s[p],w[p],s[L],w[p],w[L])}s=w,f.push(w)}}var Le=(e,h)=>[e[0],e[1]-e[4]*4*h*(1-h),e[2]+.35+(e[3]-e[2]-.7)*h];function Ve(e,h,I){let T=[[-e,h],[-e,I]],n=2*e,s=14;for(let t=1;t<=s;t++){let f=Math.PI-t/s*(Math.PI/3);T.push([e+n*Math.cos(f),I+n*Math.sin(f)])}for(let t=1;t<=s;t++){let f=Math.PI/3-t/s*(Math.PI/3);T.push([-e+n*Math.cos(f),I+n*Math.sin(f)])}return T.push([e,h]),T}function ye(e,h,I,T,n,s,t){let f=n?h.length:h.length-1;for(let i=0;i<f;i++){let r=h[i],o=h[(i+1)%h.length],l=o[0]-r[0],u=-(o[1]-r[1]),m=l,q=Math.hypot(u,m)||1;u/=q,m/=q;let w=(r[0]+o[0])/2-t[0],L=(r[1]+o[1])/2-t[1];u*w+m*L>0&&(u=-u,m=-m);let p=T(u,m,0,!0);e.quad(T(r[0],r[1],0),T(o[0],o[1],0),T(o[0],o[1],I),T(r[0],r[1],I),p,s,[r[0],r[1]],[o[0],o[1]],[o[0],o[1]],[r[0],r[1]])}}function We(){let e=_e();e.quad([0,0,0],[0,0,A],[_,0,A],[_,0,0],[0,1,0],x.FLOOR),e.quad([0,0,A],[0,0,0],[0,X,0],[0,X,A],[1,0,0],x.WALL,[A,0],[0,0],[0,X],[A,X]),e.quad([_,0,0],[_,0,A],[_,X,A],[_,X,0],[-1,0,0],x.WALL,[0,0],[A,0],[A,X],[0,X]);let h=24;for(let n of[0,1]){let s=n?A:0,t=[0,0,n?-1:1];for(let f=0;f<h;f++){let i=f/h*_,r=(f+1)/h*_,o=[i,0,s],l=[r,0,s],c=[r,_0(r),s],u=[i,_0(i),s];n?e.quad(l,o,u,c,t,x.WALL,[r,0],[i,0],[i,u[1]],[r,c[1]]):e.quad(o,l,c,u,t,x.WALL,[i,0],[r,0],[r,c[1]],[i,u[1]])}}let I=40;for(let n=0;n<I;n++){let s=n/I*_,t=(n+1)/I*_,f=_0(s),i=_0(t),r=(w,L)=>{let p=w<=_/2?w:_-w,g=(z0-p)/z0,y=(X-L)/z0;return w>_/2&&(g=-g),[g,y,0]},o=r(s,f),l=r(t,i),c=e.v([s,f,0],o,x.VAULT,[s,0]),u=e.v([t,i,0],l,x.VAULT,[t,0]),m=e.v([t,i,A],l,x.VAULT,[t,A]),q=e.v([s,f,A],o,x.VAULT,[s,A]);e.idx.push(c,u,m,c,m,q)}let T=Ve(E.hw,E.sill,E.spring);for(let n=0;n<E.n;n++){let s=H0(n),t=n>=E.leftFrom;t&&ye(e,T,W0,(l,c,u,m)=>m?[0,c,l]:[-u,c,s+l],!0,x.REVEAL,[0,(E.sill+E.apex)/2]),ye(e,T,W0,(l,c,u,m)=>m?[0,c,l]:[_+u,c,s+l],!0,x.REVEAL,[0,(E.sill+E.apex)/2]);let f=W0*.55,i=E.sill-.02,r=E.apex+.02,o=E.hw+.02;t&&e.quad([-f,i,s+o],[-f,i,s-o],[-f,r,s-o],[-f,r,s+o],[1,0,0],x.GLASS,[o,i],[-o,i],[-o,r],[o,r]),e.quad([_+f,i,s-o],[_+f,i,s+o],[_+f,r,s+o],[_+f,r,s-o],[-1,0,0],x.GLASS,[-o,i],[o,i],[o,r],[-o,r]),t&&e.box(-.02,E.sill-.12,s-E.hw-.18,.12,E.sill,s+E.hw+.18,x.TRIM),e.box(_-.12,E.sill-.12,s-E.hw-.18,_+.02,E.sill,s+E.hw+.18,x.TRIM)}{let n=_/2-n0.hw,s=_/2+n0.hw,t=n0.h,f=n0.depth;e.quad([n,0,-f],[n,0,0],[n,t,0],[n,t,-f],[1,0,0],x.REVEAL),e.quad([s,0,0],[s,0,-f],[s,t,-f],[s,t,0],[-1,0,0],x.REVEAL),e.quad([n,t,0],[s,t,0],[s,t,-f],[n,t,-f],[0,-1,0],x.REVEAL),e.quad([n,.001,-f],[s,.001,-f],[s,.001,0],[n,.001,0],[0,1,0],x.CFLOOR);let i=_/2-v0.hw,r=_/2+v0.hw,o=v0.h,l=v0.z;e.quad([i,0,l],[i,0,-f],[r,0,-f],[r,0,l],[0,1,0],x.CFLOOR),e.quad([i,0,-f],[i,0,l],[i,o,l],[i,o,-f],[1,0,0],x.CONC,[-f,0],[l,0],[l,o],[-f,o]),e.quad([r,0,l],[r,0,-f],[r,o,-f],[r,o,l],[-1,0,0],x.CONC,[l,0],[-f,0],[-f,o],[l,o]),e.quad([i,o,l],[i,o,-f],[r,o,-f],[r,o,l],[0,-1,0],x.CONC,[l,0],[-f,0],[-f,1],[l,1]),e.quad([r,0,l],[i,0,l],[i,o,l],[r,o,l],[0,0,1],x.CONC,[0,0],[1,0],[1,o],[0,o]);let c=-f;e.quad([i,0,c],[n,0,c],[n,o,c],[i,o,c],[0,0,-1],x.CONC,[i,0],[n,0],[n,o],[i,o]),e.quad([s,0,c],[r,0,c],[r,o,c],[s,o,c],[0,0,-1],x.CONC,[s,0],[r,0],[r,o],[s,o]),e.quad([n,t,c],[s,t,c],[s,o,c],[n,o,c],[0,0,-1],x.CONC,[n,t],[s,t],[s,o],[n,o]);let u=n,m=c-.01,q=v0.open,w=n0.hw*2-.04,L=.045,p=[Math.cos(q),0,-Math.sin(q)],g=[Math.sin(q),0,Math.cos(q)],y=(F,K,Q)=>[u+p[0]*F+g[0]*Q,K,m+p[2]*F+g[2]*Q],v=.012,b=t-.02;e.quad(y(0,v,L),y(w,v,L),y(w,b,L),y(0,b,L),g,x.DOOR),e.quad(y(w,v,0),y(0,v,0),y(0,b,0),y(w,b,0),g.map(F=>-F),x.DOOR),e.quad(y(w,v,L),y(w,v,0),y(w,b,0),y(w,b,L),p,x.DOOR),e.quad(y(0,b,L),y(w,b,L),y(w,b,0),y(0,b,0),[0,1,0],x.DOOR);let S=y(w-.09,1.02,L+.03);f0(e,[y(w-.09,1.02,L),S,[S[0]-p[0]*.12,S[1],S[2]-p[2]*.12]],.011,6,x.STEEL);let D=v0.sign;e.box(D[0]-.33,D[1]-.12,D[2]-.02,D[0]+.33,D[1]+.12,c,x.TRIM)}for(let n of G){for(let i of[.2,_-.2])e.box(i-.42,0,n-.42,i+.42,.5,n+.42,x.TRIM),e.cyl(i,n,.27,.5,X-.55,x.TRIM),e.cyl(i+(i<_/2?.2:-.2),n-.36,.1,.5,X-.55,x.TRIM,10),e.cyl(i+(i<_/2?.2:-.2),n+.36,.1,.5,X-.55,x.TRIM,10),e.box(i-.45,X-.55,n-.5,i+.45,X-.25,n+.5,x.TRIM);let s=40,t=.22,f=.22;for(let i=0;i<s;i++){let r=i/s*_,o=(i+1)/s*_,l=_0(r),c=_0(o),u=[_/2-r,-(l-X+2),0],m=[_/2-o,-(c-X+2),0],q=y=>{let v=Math.hypot(y[0],y[1])||1;return[y[0]/v,y[1]/v,0]},w=q(u),L=q(m),p=[r+w[0]*f,l+w[1]*f],g=[o+L[0]*f,c+L[1]*f];e.quad([p[0],p[1],n-t],[g[0],g[1],n-t],[g[0],g[1],n+t],[p[0],p[1],n+t],w,x.TRIM),e.quad([r,l,n-t],[o,c,n-t],[g[0],g[1],n-t],[p[0],p[1],n-t],[0,0,-1],x.TRIM),e.quad([o,c,n+t],[r,l,n+t],[p[0],p[1],n+t],[g[0],g[1],n+t],[0,0,1],x.TRIM)}}{let n=O,s=n.top,t=n.basin,f=(u,m,q)=>{if(e.box(0,0,u,n.depth-.06,.12,m,x.TRIM),e.quad([n.depth,.12,u],[n.depth,.12,m],[n.depth,s,m],[n.depth,s,u],[1,0,0],x.TILE,[u,.12],[m,.12],[m,s],[u,s]),e.quad([0,.12,u],[n.depth,.12,u],[n.depth,s,u],[0,s,u],[0,0,-1],x.TILE,[0,.12],[n.depth,.12],[n.depth,s],[0,s]),e.quad([n.depth,.12,m],[0,.12,m],[0,s,m],[n.depth,s,m],[0,0,1],x.TILE,[n.depth,.12],[0,.12],[0,s],[n.depth,s]),!q){e.quad([0,s,u],[0,s,m],[n.depth,s,m],[n.depth,s,u],[0,1,0],x.TILE,[0,u],[0,m],[n.depth,m],[n.depth,u]);return}let w=(L,p,g,y)=>e.quad([L,s,g],[L,s,y],[p,s,y],[p,s,g],[0,1,0],x.TILE,[L,g],[L,y],[p,y],[p,g]);w(0,t.x0,u,m),w(t.x1,n.depth,u,m),w(t.x0,t.x1,u,t.z0),w(t.x0,t.x1,t.z1,m),e.quad([t.x0,t.floor,t.z0],[t.x0,t.floor,t.z1],[t.x1,t.floor,t.z1],[t.x1,t.floor,t.z0],[0,1,0],x.TILE,[t.x0,t.z0],[t.x0,t.z1],[t.x1,t.z1],[t.x1,t.z0]),e.quad([t.x0,t.floor,t.z1],[t.x0,t.floor,t.z0],[t.x0,s,t.z0],[t.x0,s,t.z1],[1,0,0],x.TILE,[t.z1,t.floor],[t.z0,t.floor],[t.z0,s],[t.z1,s]),e.quad([t.x1,t.floor,t.z0],[t.x1,t.floor,t.z1],[t.x1,s,t.z1],[t.x1,s,t.z0],[-1,0,0],x.TILE,[t.z0,t.floor],[t.z1,t.floor],[t.z1,s],[t.z0,s]),e.quad([t.x0,t.floor,t.z0],[t.x1,t.floor,t.z0],[t.x1,s,t.z0],[t.x0,s,t.z0],[0,0,1],x.TILE,[t.x0,t.floor],[t.x1,t.floor],[t.x1,s],[t.x0,s]),e.quad([t.x1,t.floor,t.z1],[t.x0,t.floor,t.z1],[t.x0,s,t.z1],[t.x1,s,t.z1],[0,0,-1],x.TILE,[t.x1,t.floor],[t.x0,t.floor],[t.x0,s],[t.x1,s])};f(n.a[0],n.a[1],!0),f(n.b[0],n.b[1],!1);for(let[u,m]of[n.a,n.b])e.quad([.012,s,m],[.012,s,u],[.012,s+.62,u],[.012,s+.62,m],[1,0,0],x.TILE,[m,s],[u,s],[u,s+.62],[m,s+.62]);let i=u=>{let m=t.floor+.004,q=m+n.TH,w=n.TX/2,L=n.TZ/2,p=.02,g=n.TXc,y=[[g-w+p,u-L+p],[g+w-p,u-L+p],[g+w-p,u+L-p],[g-w+p,u+L-p]],v=[[g-w,u-L],[g+w,u-L],[g+w,u+L],[g-w,u+L]];e.quad([y[0][0],m,y[0][1]],[y[3][0],m,y[3][1]],[y[2][0],m,y[2][1]],[y[1][0],m,y[1][1]],[0,1,0],x.STEEL);for(let b=0;b<4;b++){let S=(b+1)%4,D=[y[b][0],m,y[b][1]],F=[y[S][0],m,y[S][1]],K=[v[S][0],q,v[S][1]],Q=[v[b][0],q,v[b][1]],U=(y[b][0]+y[S][0])/2-g,P=(y[b][1]+y[S][1])/2-u,W=Math.hypot(U,P)||1;e.quad(D,F,K,Q,[-U/W*.95,.3,-P/W*.95],x.STEEL),e.quad(F,D,[Q[0],m+.001,Q[2]],[K[0],m+.001,K[2]],[U/W,0,P/W],x.STEEL)}f0(e,[...v,v[0]].map(b=>[b[0],q+.004,b[1]]),.005,5,x.STEEL)};for(let u of n.trays)i(u);let r=(u,m,q,w,L,p)=>{for(let g of[-.012,.012])f0(e,[[u,L,m+g],[(u+q)/2,(L+p)/2+.006,(m+w)/2+g*.6],[q,p,w+g*.2]],.0045,5,x.PEG)};r(n.TXc+.05,n.trays[0]+.12,n.TXc+.27,n.trays[0]+.42,n.liquid-.005,n.top+.03),r(n.TXc-.1,n.trays[2]-.2,n.TXc+.24,n.trays[2]-.05,n.liquid+.002,n.liquid+n.TH*.9);let o=t.z1-.3;f0(e,[[0,1.32,o],[.18,1.32,o],[.27,1.3,o],[.32,1.22,o],[.33,1.12,o]],.016,8,x.STEEL),e.box(0,1.27,o-.05,.05,1.37,o+.05,x.STEEL);let l=O.bulb;f0(e,[[0,2.32,l[2]],[l[0]*.6,2.32,l[2]],[l[0],2.28,l[2]]],.012,6,x.TRIM),e.box(0,2.24,l[2]-.06,.03,2.4,l[2]+.06,x.TRIM),f0(e,[[l[0],2.28,l[2]],[l[0]+.004,1.9,l[2]+.003],[l[0],l[1]+.2,l[2]]],.004,5,x.CABLE);let c=O.tube;f0(e,[[c.x+.02,c.y,c.z0],[c.x+.02,c.y,(c.z0+c.z1)/2],[c.x+.02,c.y,c.z1]],.035,10,x.TUBE),e.box(0,c.y-.05,c.z0-.06,.07,c.y+.05,c.z0-.01,x.TRIM),e.box(0,c.y-.05,c.z1+.01,.07,c.y+.05,c.z1+.06,x.TRIM);for(let u of O.lines){let m=[];for(let q=0;q<=24;q++){let w=q/24;m.push(Le(u,w))}f0(e,m,.0035,5,x.CABLE)}}j.stack.forEach((n,s)=>{let t=j.models[n[0]],f=j.G,i=_/2+n[2],r=j.z+n[4]+t.d*f*.85,o=n.base+.12*f,l=_/2+(s%3-1)*.5,c=j.z+2.3+s%4*.12;f0(e,[[i,o,r-.05],[i+.05,o-.02,r+.15],[i+.1,Math.max(.02,o*.4),r+.35],[i*.6+l*.4,.018,r+.6],[l,.018,c]],.012,6,x.CABLE)}),f0(e,L0.path,L0.r,9,x.CABLE),e.box(Y.x0-.08,Y.y-.07,A-.08,Y.x0-.02,Y.y+.07,A,x.TRIM),e.box(Y.x1+.02,Y.y-.07,A-.08,Y.x1+.08,Y.y+.07,A,x.TRIM),f0(e,[[Y.x0-.02,Y.y,Y.z],[(Y.x0+Y.x1)/2,Y.y,Y.z],[Y.x1+.02,Y.y,Y.z]],.045,10,x.TUBE);for(let n of[0,1]){let s=n?_-.06:0,t=n?_:.06;e.box(s,0,0,t,.24,A,x.TRIM),e.box(n?_-.05:0,1,0,n?_:.05,1.08,A,x.TRIM);let f=n?_-.32:0,i=n?_:.32;e.box(f,X-.25,0,i,X+.08,A,x.TRIM)}for(let n of[0,1]){let s=n?A-.06:0,t=n?A:.06;n?e.box(0,0,s,_,.24,t,x.TRIM):(e.box(0,0,s,_/2-n0.hw,.24,t,x.TRIM),e.box(_/2+n0.hw,0,s,_,.24,t,x.TRIM));let f=n?A-.32:0,i=n?A:.32;e.box(0,X-.25,f,_,X+.08,i,x.TRIM)}return e}function He(){let e=7,h=()=>(e=e*16807%2147483647,(e-1)/2147483646),I=[],T=[],n=[],s=[],t=[],f=[],i=[],r=3,o=4,l=(p,g,y,v,b,S,D,F,K)=>{let Q=y0.w*b,U=y0.h*b,P=I.length/3;for(let W=0;W<=o;W++)for(let t0=0;t0<=r;t0++){let B=t0/r,e0=W/o,o0=(B-.5)*Q,Z=(e0-.5)*U,r0=F*((B-.5)*(B-.5)*4+(1-e0)*(1-e0)*.6);I.push(N[0]+p[0]+g[0]*o0+y[0]*Z+v[0]*r0,N[1]+p[1]+g[1]*o0+y[1]*Z+v[1]*r0,N[2]+p[2]+g[2]*o0+y[2]*Z+v[2]*r0),T.push(v[0],v[1],v[2]),n.push(B,e0),s.push(S),i.push(K||0),t.push(D[0]+N[0],D[1]+N[1],D[2]+N[2],D[3])}for(let W=0;W<o;W++)for(let t0=0;t0<r;t0++){let B=P+W*(r+1)+t0,e0=B+1,o0=B+r+1,Z=o0+1;f.push(B,e0,Z,B,Z,o0)}},c=(p,g,y)=>{let v=Math.cos(y),b=Math.sin(y);return[p.map((S,D)=>S*v+g[D]*b),g.map((S,D)=>-p[D]*b+S*v)]},u=[0,0,0,0],m=0,q=(p,g,y,v,b,S,D,F,K)=>{let P=0;for(let W=S;W<D;W+=.48)for(let t0=v;t0<b;t0+=.4){let B=t0+(h()-.5)*.4*.7,e0=W+(h()-.5)*.48*.6;if(h()>F(B,e0))continue;let[o0,Z]=c(y,[0,1,0],(h()-.5)*.5),r0=p(B,e0,.012+.0016*(P++%9)+h()*.004),l0=.88+h()*.3;l(r0,o0,Z,g,l0,Math.floor(h()*y0.n),u,(h()-.3)*.02),y0.spots.length<400&&y0.spots.push({c:r0,n:g,up:Z,size:y0.h*l0}),m++}},w=(p,g,y)=>Math.exp(-Math.pow((p-g)/y,2));for(let p=0;p<E.n-1;p++){let g=G[p+1],y=[[H0(p)+E.hw+.32,g-.66],[g+.66,H0(p+1)-E.hw-.32]];for(let[v,b]of y){let S=(D,F)=>.85*w(F,3.4,1.7);b>O.b[1]+.3&&q((D,F,K)=>[K,F,D],[1,0,0],[0,0,-1],v,b,1.45,6.3,S),q((D,F,K)=>[_-K,F,D],[-1,0,0],[0,0,1],v,b,1.45,6.3,S)}}let L=[];for(let p of O.lines){let g=p[3]-p[2]-.7;for(let y=.18;y<g-.1;y+=.3+h()*.14){let v=y/g,b=Le(p,v);if(h()<.1||Math.abs(b[2]-O.bulb[2])<.4&&b[1]>2.3)continue;let S=.56+h()*.14,D=y0.h*S,F=(h()-.5)*.7,K=h()<.3?h()<.5?-.75:.75:F,[Q,U]=c([0,0,-1],[0,1,0],K),P=[1,0,0],W=[b[0]+.004,b[1]-.02-U[1]*D*.5,b[2]-U[2]*D*.5];l(W,Q,U,P,S,Math.floor(h()*y0.n),[b[0],b[1],b[2],-(.04+h()*.06)],.01+h()*.025,1),L.push(b),m++}}return{pos:I,nrm:T,uv:n,pic:s,piv:t,idx:f,sty:i,pegs:L,count:m}}var R0=`
	const float RW = ${d(_)}, RL = ${d(A)}, RH = ${d(X)}, RT = ${d(W0)};
	const float HW = ${d(E.hw)}, SILL = ${d(E.sill)}, SPRING = ${d(E.spring)};
	const float WZ0 = ${d(E.z0)}, WSTEP = ${d(E.step)};
	const vec3 RO = vec3(${d(N[0])}, ${d(N[1])}, ${d(N[2])});
	const vec3 LDIR_L = vec3(${d(c0[0])}, ${d(c0[1])}, ${d(c0[2])});
	const vec3 LDIR_R = vec3(${d(-c0[0])}, ${d(c0[1])}, ${d(c0[2])});

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
	float winIdx(float z) { return clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${d(E.n-1)}); }
	// (on the left, the first windows are walled up)
	float leftOpen(float z) { return step(${d(E.leftFrom-.5)}, winIdx(z)); }
	vec2 winLocal(float z, float y) {
		float i = clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${d(E.n-1)});
		return vec2(z - (WZ0 + WSTEP * i), y);
	}

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
		a += smoothstep(-0.1, 0.25, pointedSD(winLocal(h.z, h.y), HW, SILL, SPRING));
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
		sum += vec3(0.8, 0.09, 0.05) * glassOpen(winLocal(h.z, h.y), 0.06);
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
			vec2 q = winLocal(h.z, h.y);
			float t0 = (RW - p.x) / LDIR_R.x;
			vec3 h0 = p + LDIR_R * t0;
			vec2 q0 = winLocal(h0.z, h0.y);
			float open = glassOpen(q, soft) * step(0.0, pointedSD(q0, HW, SILL, SPRING) + 0.02);
			sum += glassTint(q + 11.0) * open;
		}
		return sum;
	}
`;function Fe(){return`
	#define STUDIO_SUN ${"vec3("+d(c0[0])+", "+d(c0[1])+", "+d(c0[2])+")"}
	#define STUDIO_SUN2 ${"vec3("+d(-c0[0])+", "+d(c0[1])+", "+d(c0[2])+")"}
	#define SHAFT_TINT vec3(0.6, 0.012, 0.008)
	#define STUDIO_AIR_EVEN
	${R0}
	float studioSun(vec3 p) {
		vec3 lp = p - RO;
		if (lp.x < 0.0 || lp.x > RW || lp.z < 0.0 || lp.z > RL || lp.y > RH + 2.0) return 0.0;
		vec3 c = redLightAir(lp);
		return dot(c, vec3(0.7, 0.2, 0.1)) * 3.2;
	}`}var we=`
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
	}`,$0=`
	// the televisions' flicker, thrown on whatever is in front of them
	uniform vec4 tvLight;
	vec3 tvGlow(vec3 lp, vec3 N) {
		vec3 d = vec3(${d(_/2)}, 1.35, ${d(j.z-.9)}) - lp;
		float dd = dot(d, d);
		float face = 0.35 + 0.65 * max(0.0, dot(N, normalize(d)));
		// (only in front of them: the stack's own back is in its shadow)
		float front = smoothstep(${d(j.z+.6)}, ${d(j.z-.2)}, lp.z);
		return tvLight.rgb * face * front / (1.0 + dd * 0.55);
	}
	// THE FILM: his memories as an old print would show them, drained to
	// a warm grey, flickering, weaving in the gate, grained, scratched,
	// specked with dust, burnt at its edges; a new memory every few seconds,
	// with a flash of bare light between
	uniform sampler2D memTex;
	uniform float projT;
	vec3 film(vec2 uv) {
		float t = projT;
		float fr = floor(t * 18.0);
		float shot = floor(t / 3.4);
		float k = floor(rhash(vec2(shot, 4.7)) * 36.0);
		float f = fract(t / 3.4);
		uv += vec2(sin(t * 13.0) * 0.0015 + (rhash(vec2(fr, 1.0)) - 0.5) * 0.003, (rhash(vec2(fr, 2.0)) - 0.5) * 0.006);
		// an old print, only a touch soft: its colours faded, not gone
		vec2 su = clamp(uv, 0.01, 0.99);
		vec2 tile = vec2(mod(k, 6.0), floor(k / 6.0));
		vec3 pc = vec3(0.0);
		for (int i = 0; i < 5; i++) {
			vec2 o = i == 0 ? vec2(0.0) : vec2(i == 1 ? 1.0 : (i == 2 ? -1.0 : 0.0), i == 3 ? 1.0 : (i == 4 ? -1.0 : 0.0)) * 0.0028;
			pc += texture2D(memTex, (tile + vec2(clamp(su.x + o.x, 0.005, 0.995), 1.0 - clamp(su.y + o.y, 0.005, 0.995))) / 6.0).rgb * (i == 0 ? 0.4 : 0.15);
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
		vec3 c = mix(vec3(l), pcol * (l / max(l0, 0.02)), 0.55 * (1.0 - gap));
		return vec3(1.0, 0.86, 0.66) * max(c, 0.0) * vig;
	}
	// where a point in the room is in the projected picture (x, y in 0..1;
	// z: how far along the beam, 0 at the lens, 1 at the wall)
	vec3 projUV(vec3 lp) {
		vec3 L0 = vec3(${d(k.lens[0])}, ${d(k.lens[1])}, ${d(k.lens[2])});
		vec3 d = lp - L0;
		float s = (${d(A-.005)} - L0.z) / max(d.z, 1e-4);
		vec3 h = L0 + d * s;
		return vec3(1.0 - (h.x - ${d(k.img.x-k.img.w/2)}) / ${d(k.img.w)}, (h.y - ${d(k.img.y-k.img.h/2)}) / ${d(k.img.h)}, 1.0 / s);
	}
	// the televisions stand in the beam's way: their shadows on the picture
	uniform vec3 tvLo[12], tvHi[12];
	float projShadow(vec3 lp) {
		vec3 L0 = vec3(${d(k.lens[0])}, ${d(k.lens[1])}, ${d(k.lens[2])});
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
		vec3 c = vec3(clamp(lp.x, ${d(Y.x0)}, ${d(Y.x1)}), ${d(Y.y)}, ${d(Y.z)});
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
		vec3 Ls = vec3(${d(_/2)}, 1.25, 1.6);
		vec3 d = lp - Ls;
		float t = (${d(-n0.depth)} - Ls.z) / d.z;
		vec3 h = Ls + d * t;
		float m = smoothstep(0.08, -0.05, abs(h.x - ${d(_/2)}) - ${d(n0.hw)}) * smoothstep(0.08, -0.05, h.y - ${d(n0.h)}) * step(0.0, h.y);
		float dd = dot(d, d);
		vec3 Ld = -normalize(d);
		vec3 c = vec3(1.0, 0.07, 0.05) * 26.0 * m * (0.15 + 0.85 * max(0.0, dot(N, Ld))) / (1.0 + dd * 0.55);
		vec3 sd = vec3(${d(v0.sign[0])}, ${d(v0.sign[1])}, ${d(v0.sign[2])}) - lp;
		c += vec3(1.0, 0.12, 0.1) * signK * 0.5 * (0.2 + 0.8 * max(0.0, dot(N, normalize(sd)))) / (0.05 + dot(sd, sd) * 3.0);
		return c;
	}
	vec3 ambient(vec3 lp, vec3 N) {
		// the room's own dark: a little red, lifted near the lit floor
		// the glow of the glass itself, spread round each window
		float g = 0.0;
		if (abs(N.x) > 0.5) {
			vec2 q = winLocal(lp.z, lp.y);
			g = exp(pointedSD(q, HW, SILL, SPRING) * 1.1) * 0.9 * (lp.x > RW * 0.5 ? 1.0 : leftOpen(lp.z));
		}
		// (out in the corridor there is only what comes through the door)
		float room = 1.0 - 0.9 * smoothstep(-0.3, -1.2, lp.z);
		return (vec3(0.2, 0.017, 0.02) * (0.8 + 0.2 * N.y) + vec3(0.1, 0.007, 0.007) * exp(-lp.y * 0.25)) * room + vec3(0.7, 0.06, 0.04) * g + tvGlow(lp, N) + safeLight(lp, N) + darkLight(lp, N) + doorGlow(lp, N);
	}
	// what the lit floor throws back up onto the walls and the shafts
	vec3 bounce(vec3 lp, vec3 N) {
		vec3 fp = vec3(clamp(lp.x + N.x * (0.8 + lp.y * 0.35), 0.1, RW - 0.1), 0.0, lp.z + N.z * (0.8 + lp.y * 0.35));
		vec3 b = redLightRough(fp) * 0.5 + redLightRough(fp + vec3(N.x * 1.4, 0.0, 1.2)) * 0.25 + redLightRough(fp + vec3(N.x * 1.4, 0.0, -1.2)) * 0.25;
		return b * 0.42 * exp(-lp.y * 0.18) * (0.55 + 0.45 * max(0.0, -N.y + 0.4));
	}

`,be=`
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, yScale, mirrorOn, reflOn;
	uniform sampler2D reflTex;
	uniform vec2 reflSize;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${R0}

	const float DHW = ${d(n0.hw)}, DH = ${d(n0.h)};

	${$0}

	void main() {
		vec3 lp = v_pos - RO;
		vec3 N = normalize(v_nrm);
		int k = int(v_kind + 0.5);
		bool flr = k == 0 || k == 13;
		if (yScale < 0.0 && flr) discard;
		// (the reflection is only of what stands above the floor)
		vec3 V = normalize(v_eye - v_pos);
		float wpx = length(fwidth(lp)) + 0.004;
		vec3 col;

		if (k == 3) {
			// the glass, glowing; the stone and lead dark against it
			vec2 q = v_uv;
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
					vec2 q = winLocal(lp.z, lp.y);
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
					float sh = projShadow(lp);
					vec3 pl = film(pu.xy) * sh;
					col += alb * pl * 4.4 + pl * 0.09;
				}
			}
			if (k == 8) {
				// black rubber: dull, but its round back catches a red line
				float fr = pow(1.0 - max(0.0, dot(N, V)), 2.5);
				col += (amb * 0.5 + lit * 0.2) * fr * 0.5 + amb * 0.05 * pow(max(0.0, dot(reflect(-V, N), normalize(vec3(0.0, 1.0, 0.3)))), 8.0);
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
				if (k == 0 && lp.z > ${d(j.z-1.5)}) {
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
						vec2 q = winLocal(h.z, h.y);
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
	}`,Ue=`
	precision highp float;
	uniform mat4 proj, view, model;
	uniform float yScale;
	attribute vec3 position, normal;
	attribute vec2 uv;
	attribute float flag;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_flag;
	void main() {
		vec4 w = model * vec4(position, 1.0);
		v_pos = w.xyz;
		v_nrm = mat3(model) * normal;
		v_uv = uv; v_flag = flag;
		vec3 t = view[3].xyz;
		v_eye = -vec3(dot(view[0].xyz, t), dot(view[1].xyz, t), dot(view[2].xyz, t));
		v_eye.y *= yScale;
		vec3 p = w.xyz; p.y *= yScale;
		gl_Position = proj * view * vec4(p, 1.0);
	}`,Be=`
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, sigTime, yScale, seed, dark, nMem, emit;
	uniform sampler2D bodyTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_flag;
	${R0}
	${$0}

	float lum(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

	// THE SIGNAL. Each set has its own clock: the picture lasts a moment
	// (a second, three), then a cut, a burst of snow, and the next. Most of
	// the time it is snow; often a memory surfaces, drained, dark, torn by
	// the tube, washed red or cold; sometimes the set goes almost dead.
	vec3 signal(vec2 uv) {
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
		float k = floor(h1 * nMem);
		vec2 q = uv - 0.5;
		q *= 1.0 - 0.07 * f;
		q.x += sin(uv.y * 22.0 + t * 7.0) * 0.004;
		float line = floor(uv.y * 140.0);
		float jit = (rhash(vec2(line, fr)) - 0.5) * 0.012;
		// a band where the picture slips sideways
		float band = smoothstep(0.06, 0.0, abs(fract(uv.y * 0.7 - t * 0.31) - 0.5));
		jit += band * 0.05 * (rhash(vec2(fr, 2.0)) - 0.3);
		q.x += jit;
		vec2 mu = clamp(q + 0.5, 0.002, 0.998);
		vec2 tile = vec2(mod(k, 6.0), floor(k / 6.0));
		vec2 au = (tile + vec2(mu.x, 1.0 - mu.y)) / 6.0;
		vec2 ca = vec2(0.004 + 0.01 * band, 0.0) / 6.0;
		vec3 m = vec3(texture2D(memTex, au + ca).r, texture2D(memTex, au).g, texture2D(memTex, au - ca).b);
		// drained and darkened, the shadows crushed
		float l = lum(m);
		l = pow(clamp(l * 1.12, 0.0, 1.0), 1.2);
		vec3 mono = vec3(l);
		// washed red, or cold and grey
		float red = step(0.62, rhash(vec2(seg, 7.0 + seed)));
		vec3 tint = mix(vec3(0.78, 0.86, 0.95), vec3(1.15, 0.28, 0.22), red);
		m = mix(mono * tint, m * 1.05, 0.42);
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
				vec3 Lp = normalize(vec3(${d(k.lens[0])}, ${d(k.lens[1])}, ${d(k.lens[2])}) - lp);
				lit += film(vec2(0.5)) * 1.4 * max(0.0, dot(N, Lp)) * (0.7 + 0.3 * rnoise(v_uv * 40.0));
			}
			col = alb * (amb + lit);
			// worn plastic and veneer: a red sheen along the edges, as in
			// the reference, where the room's light rims every set
			col += (amb * 0.9 + lit * 0.3 + vec3(0.25, 0.02, 0.02)) * fr * 0.45;
		}
		float dist = length(v_eye - v_pos);
		col = mix(col, vec3(0.06, 0.004, 0.005), (1.0 - exp(-dist * 0.035)) * 0.55);
		gl_FragColor = vec4(col, 1.0);
	}`,Xe=`
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
		if (pivot.w < 0.0) {
			// a print on a darkroom line (the line runs along z)
			float w = -pivot.w;
			float a = w * sin(time * 0.8 + pivot.z * 2.3) + w * 0.4 * sin(time * 2.1 + pivot.z * 5.1);
			vec3 d = q - pivot.xyz;
			float c = cos(a), s = sin(a);
			d = vec3(d.x * c - d.y * s, d.x * s + d.y * c, d.z);
			n = vec3(n.x * c - n.y * s, n.x * s + n.y * c, n.z);
			q = pivot.xyz + d;
		}
		if (pivot.w > 0.0) {
			// stirring on its peg, in the room's slow air
			float a = pivot.w * sin(time * 0.7 + pivot.x * 1.7) + pivot.w * 0.4 * sin(time * 1.9 + pivot.x * 4.1);
			float r = pivot.w * 0.6 * sin(time * 0.5 + pivot.x * 2.3);
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
	}`,Ke=`
	precision highp float;
	uniform float time, yScale;
	uniform sampler2D polTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_pic, v_style;
	${R0}
	${$0}
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
		// a polaroid's frame, or a darkroom print's thin even border
		vec4 fr4 = v_style > 0.5 ? vec4(0.06, 0.94, 0.05, 0.95) : vec4(0.065, 0.935, 0.235, 0.94);
		bool inPic = !back && u.x > fr4.x && u.x < fr4.y && u.y > fr4.z && u.y < fr4.w;
		if (inPic) {
			vec2 pu = vec2((u.x - fr4.x) / (fr4.y - fr4.x), 1.0 - (u.y - fr4.z) / (fr4.w - fr4.z));
			vec2 tile = vec2(mod(v_pic, 6.0), floor(v_pic / 6.0));
			vec3 ph = texture2D(polTex, (tile + clamp(pu, 0.01, 0.99)) / 6.0).rgb;
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
	}`,Ye=`
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
	}`,Ze=`
	precision highp float;
	uniform float time;
	varying vec3 v_pos, v_eye;
	varying float v_layer;
	${R0}
	${$0}
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
		float lsc = v_layer < 0.5 ? 1.0 : (v_layer < 1.5 ? 0.8 : 0.58);
		vec2 eg = (min(pu.xy, 1.0 - pu.xy) - (1.0 - lsc) * 0.5) / lsc;
		float edge = smoothstep(0.0, 0.3, eg.x) * smoothstep(0.0, 0.3, eg.y);
		// strong at the lens, thinning out towards the wall
		float a = (0.25 + 2.2 * smoke) * (0.35 + 0.65 * exp(-along * 2.2)) * smoothstep(0.0, 0.04, along);
		float dist = length(v_eye - v_pos);
		gl_FragColor = vec4(fl * a * edge * 0.05 * (1.0 + v_layer * 0.7) * (1.0 - exp(-dist * 0.8)), 1.0);
	}`,Je=`
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
	}`,Qe=`
	precision highp float;
	uniform float time;
	uniform sampler2D printTex, polTex;
	varying vec3 v_pos, v_eye;
	varying float v_tray;
	${R0}
	${$0}
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
						im = texture2D(polTex, (vec2(2.0, 1.0) + vec2(iu.x, 1.0 - iu.y)) / 6.0).r;
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
	}`,et=`
	precision highp float;
	uniform mat4 proj, view;
	uniform float time, pxScale;
	attribute vec4 seed;
	varying float v_b, v_w;
	${R0}
	void main() {
		vec3 lp = vec3(0.3 + seed.x * (RW - 0.6), 0.2 + seed.y * (RH - 0.5), 0.3 + seed.z * (RL - 0.6));
		float t = time * (0.03 + 0.03 * seed.w);
		lp += vec3(sin(t * 3.1 + seed.w * 40.0) * 0.35, sin(t * 1.7 + seed.x * 30.0) * 0.4 - t * 0.6, cos(t * 2.3 + seed.z * 50.0) * 0.35);
		lp.y = 0.2 + mod(lp.y - 0.2, RH - 0.5);
		vec3 c = redLightAir(lp);
		v_b = dot(c, vec3(0.6, 0.3, 0.1));
		// and in the projector's beam, lit warm
		vec3 L0 = vec3(${d(k.lens[0])}, ${d(k.lens[1])}, ${d(k.lens[2])});
		vec3 dd = lp - L0;
		float s = (${d(A)} - L0.z) / max(dd.z, 1e-4);
		vec3 hh = L0 + dd * s;
		vec2 pu = vec2((hh.x - ${d(k.img.x-k.img.w/2)}) / ${d(k.img.w)}, (hh.y - ${d(k.img.y-k.img.h/2)}) / ${d(k.img.h)});
		v_w = (dd.z > 0.2 && pu.x > 0.0 && pu.x < 1.0 && pu.y > 0.0 && pu.y < 1.0) ? 1.6 : 0.0;
		vec4 v = view * vec4(lp + RO, 1.0);
		gl_Position = proj * v;
		float tw = 0.6 + 0.4 * sin(time * (1.0 + seed.w * 2.0) + seed.x * 80.0);
		v_b *= tw;
		gl_PointSize = clamp(pxScale * (0.012 + 0.012 * seed.w) / max(0.2, -v.z), 1.0, 6.0);
	}`,tt=`
	precision highp float;
	varying float v_b, v_w;
	void main() {
		vec2 d = gl_PointCoord - 0.5;
		float a = smoothstep(0.5, 0.0, length(d));
		gl_FragColor = vec4((vec3(1.0, 0.14, 0.09) * min(v_b, 1.4) + vec3(1.0, 0.8, 0.55) * v_w) * a * 0.55, 1.0);
	}`;te.exports=function(e){let h=We(),I={position:e.buffer(h.pos),normal:e.buffer(h.nrm),kind:e.buffer(h.kind),uv:e.buffer(h.uv)},T=e.elements({data:h.idx.length>65535?new Uint32Array(h.idx):new Uint16Array(h.idx),type:h.idx.length>65535?"uint32":"uint16"}),n=e.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),s=e.framebuffer({color:n,depth:!0}),t=e({framebuffer:s}),f=e.texture({width:1,height:1,data:[0,0,0,255]}),i=e({}),r=f,o=0,l=0,c=!1,u=[4,4],m=[0,0,0,0],q=null,w=e.texture({width:1,height:1,data:[0,0,0,255]}),L=1,p=a=>{let M=V=>{let H=Math.sin(V*127.1)*43758.5453;return H-Math.floor(H)},R=Math.floor(a*9),z=M(R),$=M(Math.floor(a*.7)),C=.92+.08*Math.sin(a*120);return $>.55&&z>.6&&(C=z>.85?.08:.45),C},g={signK:()=>L,memTex:()=>q||w,projT:a=>typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:a.time};j.stack.forEach((a,M)=>{let R=j.models[a[0]],z=j.G;g["tvLo["+M+"]"]=[_/2+a[2]-R.w*z/2,a.base,j.z+a[4]-.02],g["tvHi["+M+"]"]=[_/2+a[2]+R.w*z/2,a.base+R.h*z,j.z+a[4]+R.d*z]});let y=e({vert:we,frag:be,attributes:I,elements:T,cull:{enable:!1},uniforms:{reflTex:()=>r,reflSize:()=>u,reflOn:()=>o,tvLight:()=>m,...g}}),v=a=>new Promise((M,R)=>{let z=new Image,$=C=>(C&C-1)===0;z.onload=()=>M(e.texture({data:z,min:$(z.width)&&$(z.height)?"mipmap":"linear",mag:"linear",wrap:"clamp"})),z.onerror=R,z.src=a}),b=j.stack.map((a,M)=>{let[R,,z,$,C]=a,V=Math.PI+$*Math.PI/180,H=j.G,i0=Math.cos(V)*H,p0=Math.sin(V)*H,u0=N[0]+_/2+z,m0=N[1]+a.base,E0=N[2]+j.z+C;return{name:R,seed:(M+1)*.6180339%1,model:[i0,0,-p0,0,0,H,0,0,p0,0,i0,0,u0,m0,E0,1]}}),S={},D=null,K=e({vert:Ue,frag:Be,attributes:{position:{buffer:e.prop("vb"),stride:36,offset:0},normal:{buffer:e.prop("vb"),stride:36,offset:12},uv:{buffer:e.prop("vb"),stride:36,offset:24},flag:{buffer:e.prop("vb"),stride:36,offset:32}},elements:e.prop("el"),offset:e.prop("offset"),count:e.prop("count"),cull:{enable:!1},uniforms:{model:e.prop("model"),seed:e.prop("seed"),dark:e.prop("dark"),emit:(a,M)=>M.emit||0,bodyTex:e.prop("tex"),...g,memTex:()=>D||w,nMem:36,sigTime:a=>typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:a.time,tvLight:()=>m}});v("res/redroom/memories.webp").then(a=>{D=a,q=a}).catch(a=>console.error("The memories did not load",a));for(let a in j.models){let M=j.models[a],R=[];for(let z=0;z<M.tex;z++)R.push(v("res/redroom/tv_"+a+"_"+z+".webp"));Promise.all([fetch(M.file).then(z=>z.arrayBuffer()),...R]).then(([z,...$])=>{let C=new Uint32Array(z,0,4),V=C[0],H=C[1],i0=C[2],p0=C[3],u0=new Int32Array(z,16,i0*3),m0=16+i0*12,E0=e.buffer(new Float32Array(z,m0,V*9)),q0=m0+V*36,K0=p0?new Uint32Array(z.slice(q0,q0+H*4)):new Uint16Array(z.slice(q0,q0+H*2)),V0=e.elements({data:K0,type:p0?"uint32":"uint16"}),x0=[];for(let S0=0;S0<i0;S0++)x0.push({offset:u0[S0*3],count:u0[S0*3+1],tex:u0[S0*3+2]>=0?$[u0[S0*3+2]]:$[0]});S[a]={vb:E0,el:V0,parts:x0,dark:M.dark}}).catch(z=>console.error("A television did not load",z))}let Q=[],U=()=>{if(D){Q.length=0;for(let a of b){let M=S[a.name];if(M)for(let R of M.parts)Q.push({vb:M.vb,el:M.el,offset:R.offset,count:R.count,tex:R.tex,model:a.model,seed:a.seed,dark:M.dark})}Q.length&&K(Q)}},P=He(),W=null;v("res/redroom/polaroids.webp").then(a=>{W=a}).catch(a=>console.error("The photographs did not load",a));let t0=e({vert:Xe,frag:Ke,attributes:{position:P.pos,normal:P.nrm,uv:P.uv,pic:P.pic,style:P.sty,pivot:{buffer:e.buffer(P.piv),size:4}},elements:e.elements({data:new Uint16Array(P.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...g,polTex:()=>W,tvLight:()=>m}}),B=(a,M)=>Promise.all([fetch(a).then(R=>R.arrayBuffer()),...M.map(v)]).then(([R,...z])=>{let $=new Uint32Array(R,0,4),C=$[0],V=$[1],H=$[2],i0=$[3],p0=new Int32Array(R,16,H*3),u0=16+H*12,m0=u0+C*36,E0=e.buffer(new Float32Array(R,u0,C*9)),q0=i0?new Uint32Array(R.slice(m0,m0+V*4)):new Uint16Array(R.slice(m0,m0+V*2)),K0=e.elements({data:q0,type:i0?"uint32":"uint16"}),V0=[];for(let x0=0;x0<H;x0++)V0.push({offset:p0[x0*3],count:p0[x0*3+1],tex:z[Math.max(0,p0[x0*3+2])],mat:p0[x0*3+2]});return{vb:E0,el:K0,parts:V0}}),e0=(a,M)=>{let R=new Array(16);for(let z=0;z<4;z++)for(let $=0;$<4;$++)R[z*4+$]=a[$]*M[z*4]+a[4+$]*M[z*4+1]+a[8+$]*M[z*4+2]+a[12+$]*M[z*4+3];return R},o0=(a,M,R)=>[1,0,0,0,0,1,0,0,0,0,1,0,a,M,R,1],Z=a=>{let M=Math.cos(a),R=Math.sin(a);return[1,0,0,0,0,M,R,0,0,-R,M,0,0,0,0,1]},r0=e0(o0(N[0]+k.x,N[1]+k.table,N[2]+k.z),Z(-k.pitch)),l0=k.tableK,U0=[l0,0,0,0,0,l0,0,0,0,0,l0,0,N[0]+_/2,N[1],N[2]+15,1],s0={},k0=["res/redroom/proj_0.webp"];B("res/redroom/proj_body.bin",k0).then(a=>{s0.body=a}).catch(a=>console.error(a)),B("res/redroom/proj_feed.bin",k0).then(a=>{s0.feed=a}).catch(a=>console.error(a)),B("res/redroom/proj_takeup.bin",k0).then(a=>{s0.takeup=a}).catch(a=>console.error(a)),B("res/redroom/table_all.bin",["res/redroom/table_0.webp"]).then(a=>{s0.table=a}).catch(a=>console.error(a));let J=(a,M)=>e0(r0,e0(o0(a[0],a[1],a[2]),e0(Z(M),o0(-a[0],-a[1],-a[2])))),A0=[],Se=a=>{A0.length=0;let M=(R,z,$)=>{if(R)for(let C of R.parts)A0.push({vb:R.vb,el:R.el,offset:C.offset,count:C.count,tex:C.tex,model:z,seed:0,dark:$})};M(s0.table,U0,.9),M(s0.body,r0,1),M(s0.feed,J(k.feed,-a*2.6),1),M(s0.takeup,J(k.takeup,-a*3.5),1),A0.length&&K(A0)},B0=[],le=[];{let a=[N[0]+k.lens[0],N[1]+k.lens[1],N[2]+k.lens[2]];[1,.8,.58].forEach((M,R)=>{let z=k.img.w/2*M,$=k.img.h/2*M,C=[[-z,-$],[z,-$],[z,$],[-z,$]].map(([V,H])=>[N[0]+k.img.x+V,N[1]+k.img.y+H,N[2]+A-.02]);for(let V=0;V<4;V++){let H=C[V],i0=C[(V+1)%4];B0.push(...a,...H,...i0),le.push(R,R,R)}})}let Ie=e({vert:Ye,frag:Ze,attributes:{position:B0,layer:le},count:B0.length/3,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{...g,tvLight:()=>m}}),ke=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale, pxScale; attribute vec3 position; void main() { vec3 p = position; p.y *= yScale; vec4 v = view * vec4(p, 1.0); gl_Position = proj * v; gl_PointSize = clamp(pxScale * 0.22 / max(0.3, -v.z), 4.0, 220.0); }",frag:"precision highp float; uniform float time; void main() { vec2 d = gl_PointCoord - 0.5; float r = length(d); float a = exp(-r * r * 160.0) * 1.6 + 0.35 * exp(-r * r * 30.0) + 0.12 * exp(-r * r * 8.0) + 0.5 * exp(-d.y * d.y * 2500.0) * exp(-abs(d.x) * 7.0); gl_FragColor = vec4(vec3(1.0, 0.84, 0.62) * a * (0.9 + 0.1 * sin(time * 37.0)), 1.0); }",attributes:{position:[N[0]+k.lens[0],N[1]+k.lens[1],N[2]+k.lens[2]+.01]},count:1,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:a=>a.viewportHeight*1.2}}),ce=null;v("res/redroom/print.webp").then(a=>{ce=a}).catch(a=>console.error(a));let X0=[],fe=[];O.trays.forEach((a,M)=>{let R=O.TX/2-.009,z=O.TZ/2-.009,$=O.TXc,C=O.liquid,V=[[$-R,a-z],[$+R,a-z],[$+R,a+z],[$-R,a+z]].map(([H,i0])=>[N[0]+H,N[1]+C,N[2]+i0]);X0.push(...V[0],...V[2],...V[1],...V[0],...V[3],...V[2]);for(let H=0;H<6;H++)fe.push(M)});let Ne=e({vert:Je,frag:Qe,attributes:{position:X0,tray:fe},count:X0.length/3,cull:{enable:!1},uniforms:{...g,tvLight:()=>m,printTex:()=>ce||w,polTex:()=>W||w}}),M0=_e();for(let a of P.pegs)M0.box(a[0]-.008,a[1]-.045,a[2]-.011,a[0]+.008,a[1]+.03,a[2]+.011,x.PEG);let Ee=e({vert:we,frag:be,attributes:{position:M0.pos,normal:M0.nrm,kind:M0.kind,uv:M0.uv},elements:e.elements({data:new Uint16Array(M0.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...g,reflTex:()=>f,reflSize:[4,4],reflOn:0,tvLight:()=>m}}),$e=a=>{let M=Math.cos(a),R=Math.sin(a);return[M,0,-R,0,0,1,0,0,R,0,M,0,0,0,0,1]},h0=(a,M,R,z)=>e0(o0(N[0]+a,N[1]+M,N[2]+R),$e(z||0));B("res/redroom/plastic_all.bin",["res/redroom/plastic_0.webp"]).then(a=>{s0.jug=a}).catch(a=>console.error(a)),B("res/redroom/multi_cleaner_all.bin",["res/redroom/multi_cleaner_0.webp"]).then(a=>{s0.can=a}).catch(a=>console.error(a)),B("res/redroom/pull_all.bin",["res/redroom/pull_0.webp"]).then(a=>{s0.socket=a}).catch(a=>console.error(a)),B("res/redroom/bulb_all.bin",["res/redroom/bulb_0.webp","res/redroom/bulb_1.webp"]).then(a=>{s0.bulb=a}).catch(a=>console.error(a));let b0=O.top,N0=O.b[0],De=[["jug",h0(.16,b0,N0+.3,.4)],["jug",h0(.17,b0,N0+.52,-.3)],["jug",h0(.36,b0,N0+.4,2.2)],["can",h0(.14,b0,N0+.95,1.57)],["can",h0(.15,b0,N0+1.3,1.45)],["jug",h0(.16,b0,O.b[1]-.35,.9)],["can",h0(.2,b0,O.b[1]-.8,1.7)],["socket",h0(O.bulb[0],O.bulb[1]+.065,O.bulb[2],0)],["bulb",e0(h0(O.bulb[0],O.bulb[1]+.048,O.bulb[2],0),Z(Math.PI))]],Oe=()=>{let a=[];for(let[M,R]of De){let z=s0[M];z&&z.parts.forEach(($,C)=>a.push({vb:z.vb,el:z.el,offset:$.offset,count:$.count,tex:$.tex,model:R,seed:0,dark:M==="jug"||M==="can"?.85:.7,emit:M==="bulb"&&$.mat===0?1.6:0}))}a.length&&K(a),Ne(),Ee()},P0=document.createElement("canvas");P0.width=512,P0.height=192;{let a=P0.getContext("2d");a.fillStyle="#000",a.fillRect(0,0,512,192),a.font='bold 128px "Helvetica Neue", Arial, sans-serif',a.textAlign="center",a.textBaseline="middle",a.shadowColor="#ff2a20",a.shadowBlur=28,a.fillStyle="#ff6a5a",a.fillText("ENTER",256,100),a.shadowBlur=0,a.fillStyle="#ffd8d0",a.fillText("ENTER",256,100)}let Ae=e.texture({data:P0,min:"linear",mag:"linear",wrap:"clamp"}),d0=v0.sign,j0=.3,C0=.1125,G0=d0[2]-.025,Pe=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale; attribute vec3 position; attribute vec2 uv; varying vec2 v_uv; void main() { v_uv = uv; vec3 p = position; p.y *= yScale; gl_Position = proj * view * vec4(p, 1.0); }",frag:"precision highp float; uniform sampler2D tex; uniform float signK; varying vec2 v_uv; void main() { vec3 c = texture2D(tex, v_uv).rgb; vec3 col = c * vec3(1.6, 0.55, 0.5) * signK + vec3(0.06, 0.0, 0.0); gl_FragColor = vec4(col, 1.0); }",attributes:{position:[[d0[0]+j0,d0[1]-C0,G0],[d0[0]-j0,d0[1]-C0,G0],[d0[0]-j0,d0[1]+C0,G0],[d0[0]+j0,d0[1]+C0,G0]].map(a=>[a[0]+N[0],a[1]+N[1],a[2]+N[2]]),uv:[[0,1],[1,1],[1,0],[0,0]]},elements:[0,1,2,0,2,3],cull:{enable:!1},uniforms:{tex:Ae,signK:()=>L}}),ve=220,pe=[];for(let a=0;a<ve;a++)pe.push(Math.random(),Math.random(),Math.random(),Math.random());let je=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b;
			void main() {
				vec3 L0 = vec3(${d(N[0]+k.lens[0])}, ${d(N[1]+k.lens[1])}, ${d(N[2]+k.lens[2])});
				vec3 C = vec3(${d(N[0]+k.img.x)}, ${d(N[1]+k.img.y)}, ${d(N[2]+A)});
				vec3 fw = normalize(C - L0);
				vec3 rt = normalize(cross(fw, vec3(0.0, 1.0, 0.0)));
				vec3 up = cross(rt, fw);
				// most of them close to the lens
				float along = 0.15 + pow(seed.x, 2.2) * 7.5;
				float sp = along / length(C - L0);
				vec2 off = (vec2(seed.y, seed.z) - 0.5) * vec2(${d(k.img.w)}, ${d(k.img.h)}) * sp;
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
			}`,frag:"precision highp float; varying float v_b; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vec3(1.0, 0.84, 0.6) * v_b * a, 1.0); }",attributes:{seed:pe},count:ve,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:a=>a.viewportHeight*1.2}}),he=2200,de=[];for(let a=0;a<he;a++)de.push(Math.random(),Math.random(),Math.random(),Math.random());let Ce=e({vert:et,frag:tt,attributes:{seed:de},count:he,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:a=>a.viewportHeight*1.2}}),ue=a=>{let M=!!(a&&a.reflected),R=performance.now()/1e3,z=.8+.12*Math.sin(R*47)*Math.sin(R*3.1)+.08*Math.sin(R*23+1.3);m[0]=.8*z,m[1]=.84*z,m[2]=.95*z,L=p(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:R),y(),Pe(),U(),W&&t0(),Oe(),Se(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:R),q&&!(typeof window!="undefined"&&window.__noBeam)&&Ie(),ke(),M||je(),M||Ce()};return ue.reflect=(a,M)=>i(R=>{let z=R.viewportWidth,$=R.viewportHeight,C=Math.max(2,Math.round(z/2)),V=Math.max(2,Math.round($/2)),H=!c;if((s.width!==C||s.height!==V)&&(s.resize(C,V),H=!0),u[0]=z,u[1]=$,o=1,!H&&++l%M!==0){r=n;return}r=f,t(()=>{e.clear({color:[0,0,0,1],depth:1}),a()}),r=n,c=!0}),ue};var ee=null;Object.assign(te.exports,{O:N,W:_,L:A,H:X,ROOM:{W:_,L:A,H:X,WIN:E,DOOR:n0,ENT:v0,SHAFTS:G,TV:j,DARK:O,PROJ:k,CABLE:L0,POL:y0,winZ:H0,vaultY:_0},POST:{threshold:.3},sunGLSL:Fe,bakedSun(e){return ee||(ee=e.texture({width:1,height:1,data:[0,0,0,0]})),ee},ready:()=>!0,setFlower(){},setGuide(){},setWind(){}})});var qe=Y0((ct,Me)=>{"use strict";var re=oe(),{O:se}=re,{W:a0,L:ne,TV:I0,DARK:ie,PROJ:T0}=re.ROOM,ze=e=>[e[0]+se[0],e[1]+se[1],e[2]+se[2]],Re=(e,h,I)=>e+(h-e)*I,ot=e=>Math.max(0,Math.min(1,e)),w0=T0.x,st=T0.table,O0=T0.z,D0=[w0+T0.feed[0],st+T0.feed[1],O0+T0.feed[2]],F0=T0.lens,ae=ie.trays[0],nt=[{eye:[a0/2+.15,1.55,-9.6],at:[a0/2,1.7,0],fov:40,dof:.05,p:{fov:58}},{eye:[a0/2+.05,1.6,-3],at:[a0/2,1.85,1.5],fov:50,dof:.05,p:{fov:70}},{eye:[a0/2-.2,1.5,.9],at:[a0/2-3,1.4,7],fov:56,dof:.04,p:{fov:74}},{eye:[3.3,1.55,1.3],at:[.3,1.35,5.2],fov:50,dof:.05,p:{eye:[2.8,1.6,.9],fov:72}},{eye:[1.05,1.5,ae-.42],at:[ie.TXc-.02,ie.liquid,ae+.04],fov:34,dof:.2,p:{eye:[1,1.55,ae-.45],fov:52}},{eye:[2,1.6,8.3],at:[.4,2.25,11.3],fov:50,dof:.12,p:{eye:[1.8,1.6,8.1],fov:72}},{eye:[4.2,1.7,5.6],at:[.5,3.6,7.6],fov:58,dof:.04,p:{fov:76}},{eye:[3.6,5.4,8],at:[10.5,5,11.6],fov:56,dof:.04,p:{fov:76}},{eye:[11.6,2.9,10.6],at:[a0,3.3,14.6],fov:52,dof:.06,p:{fov:72}}];function Te(e,h){let I=e.length-1,T=Math.max(0,Math.min(I,h)),n=Math.min(I-1,Math.floor(T)),s=T-n,t=e[Math.max(0,n-1)],f=e[n],i=e[n+1],r=e[Math.min(I,n+2)],o=s*s,l=o*s;return[0,1,2].map(c=>.5*(2*f[c]+(-t[c]+i[c])*s+(2*t[c]-5*f[c]+4*i[c]-r[c])*o+(-t[c]+3*f[c]-3*i[c]+r[c])*l))}function at(){let e=nt.slice(),h=(o,l,c)=>[o[0]+l[0]*c,o[1]+l[1]*c,o[2]+l[2]*c],I=11,T=()=>(I=I*16807%2147483647,(I-1)/2147483646),n=(re.ROOM.POL.spots||[]).filter(o=>o.n[0]<-.5&&o.c[2]>10.5&&o.c[2]<21.5&&o.c[1]>1.9&&o.c[1]<4.6),s=(o,l)=>Math.abs(o.c[2]-l)+Math.abs(o.c[1]-3)*.4,t=[];for(let o of[12.6,15,17.3]){let l=null;for(let c of n)(!l||s(c,o)<s(l,o))&&(l=c);l&&t.indexOf(l)<0&&t.push(l)}t.forEach((o,l)=>{let c=o.n,u=o.c;l>0&&e.push({eye:h(h(u,c,2.2),[0,.15,-.6],1),at:u,fov:50,dof:.05,pass:!0}),e.push({eye:h(h(u,c,1),[0,.06,-.3],1),at:u,fov:36,dof:.26,p:{fov:50}})}),e.push({eye:[w0+2,1.35,O0-1.5],at:[w0,1.35,O0+.1],fov:42,dof:.12,p:{eye:[w0+1.6,1.4,O0-1.5],fov:62}}),e.push({eye:[w0+.85,D0[1]+.12,D0[2]-.35],at:[D0[0],D0[1]-.05,D0[2]],fov:36,dof:.32,p:{fov:52}}),e.push({eye:[w0+.42,F0[1]+.08,F0[2]+1.35],at:[w0,F0[1],F0[2]],fov:36,dof:.35,p:{fov:52}}),e.push({eye:[w0-.55,1.75,O0-1.4],at:[a0/2,5,ne],fov:50,dof:.06,p:{fov:70}});let f=I0.stack;e.push({eye:[a0/2+.5,1.9,I0.z-6.2],at:[a0/2,1.8,I0.z],fov:48,dof:.05,p:{fov:70}});let i=f.map((o,l)=>l);for(let o=i.length-1;o>0;o--){let l=Math.floor(T()*(o+1)),c=i[o];i[o]=i[l],i[l]=c}let r=null;for(let o of i){let l=f[o],c=l.screen,u=l.facing,m=l.size*1.25;if(r){let w=[(r[0]+c[0])/2,(r[1]+c[1])/2+.2,Math.min(r[2],c[2])-2.6];e.push({eye:w,at:[(r[0]+c[0])/2,(r[1]+c[1])/2,I0.z],fov:46,dof:.05,pass:!0})}let q=(T()-.5)*.5;e.push({eye:[c[0]+u[0]*m+q,c[1]+.05+(T()-.5)*.15,c[2]+u[2]*m],at:[c[0],c[1],c[2]],fov:30,dof:.3,p:{fov:44}}),r=c}return e.push({eye:[a0/2,2.6,I0.z-3.5],at:[a0/2,4.5,ne],fov:52,dof:.05,pass:!0}),e.push({eye:[a0/2,4.3,I0.z+1.6],at:[a0/2,6,ne],fov:62,dof:.04,p:{fov:82}}),e}Me.exports=function(){let h=at(),I=h.length-1,T=h.map((v,b)=>v.pass?-1:b).filter(v=>v>=0),n=v=>T.reduce((b,S)=>Math.abs(S-v)<Math.abs(b-v)?S:b,T[0]),s=(v,b)=>{if(b>0){for(let S of T)if(S>v+.01)return S;return T[T.length-1]}for(let S=T.length-1;S>=0;S--)if(T[S]<v-.01)return T[S];return T[0]},t=null,f=null,i=0,r=0,o=null,l=-10,c=0,u=null,m=[],q=(v,b,S)=>{window.addEventListener(v,b,S),m.push([v,b,S])},w=v=>{r=Math.max(0,Math.min(I,r+v)),l=c},L=v=>{r=s(r,v),l=c-10};q("wheel",v=>{if(v.target.closest&&v.target.closest(".st-ui"))return;v.preventDefault();let b=v.deltaMode===1?v.deltaY*16:v.deltaMode===2?v.deltaY*window.innerHeight:v.deltaY;w(Math.max(-.6,Math.min(.6,b/700)))},{passive:!1});let p=null;q("pointerdown",v=>{v.target.closest&&v.target.closest("button, a, .st-ui")||(p={lx:v.clientX,ly:v.clientY,moved:0,t:performance.now()})}),q("pointermove",v=>{if(!p)return;let b=v.clientX-p.lx,S=v.clientY-p.ly;p.lx=v.clientX,p.ly=v.clientY;let D=Math.abs(S)>=Math.abs(b)?-S:-b;p.moved+=Math.abs(D),p.moved>6&&w(D/(window.innerHeight*.55))}),q("pointerup",()=>{let v=p;p=null,v&&v.moved<8&&performance.now()-v.t<450&&L(1)}),q("keydown",v=>{v.key==="ArrowDown"||v.key==="ArrowRight"||v.key==="PageDown"||v.key===" "?L(1):(v.key==="ArrowUp"||v.key==="ArrowLeft"||v.key==="PageUp")&&L(-1)});function g(v){c=v,u===null&&(u=v);let b=o===null?0:Math.min(.1,v-o);o=v,typeof window!="undefined"&&window.__redShot!==void 0&&/tourdebug/.test(location.search)&&(i=r=window.__redShot),c-l>.5&&(r+=(n(r)-r)*(1-Math.exp(-b*2.2))),i+=(r-i)*(1-Math.exp(-b*1.5)),Math.abs(r-i)<1e-4&&(i=r);let S=window.innerWidth<window.innerHeight,D=h.map(J=>S&&J.p?Object.assign({},J,J.p):J),F=Math.min(I-1,Math.floor(i)),K=i-F,Q=K*K*(3-2*K),U=Te(D.map(J=>J.eye),i),P=Te(D.map(J=>J.at),i);(!t||b===0||b>.09)&&(t=U.slice(),f=P.slice());let W=1-Math.exp(-b*5);for(let J=0;J<3;J++)t[J]+=(U[J]-t[J])*W,f[J]+=(P[J]-f[J])*W;U=t.slice(),P=f.slice();let t0=D[F],B=D[Math.min(I,F+1)],e0=Re(t0.fov,B.fov,Q),o0=Re(t0.dof,B.dof,Q),Z=typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:v,r0=Math.hypot(P[0]-U[0],P[1]-U[1],P[2]-U[2]),l0=.01+.03*Math.min(1,r0/6);U=[U[0]+Math.sin(Z*.31)*l0,U[1]+Math.sin(Z*.43+1)*l0*.6,U[2]+Math.cos(Z*.27)*l0],P=[P[0]+Math.sin(Z*.21+2)*l0*.8,P[1]+Math.sin(Z*.37)*l0*.5,P[2]];let U0=ze(U),s0=ze(P),k0=1-ot((v-u-.3)/1.8);return{eye:U0,target:s0,fov:e0,roll:Math.sin(Z*.17)*.004,moving:!0,look:{letterbox:.45,focus:r0,aperture:o0,vignette:.3,exposure:1.45,shafts:1,fade:k0,fadeColor:[0,0,0]}}}function y(){for(let[v,b,S]of m)window.removeEventListener(v,b,S);m.length=0}return{update:g,tap:()=>L(1),dispose:y,placeFlower(){},get scroll(){return i},END:I}}});window.__redRoom={studio:oe(),tour:qe()};})();

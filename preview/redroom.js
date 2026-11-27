"use strict";(()=>{var X0=(e,p)=>()=>(p||e((p={exports:{}}).exports,p),p.exports);var me=X0((lt,ue)=>{"use strict";var u0=[-90,0,0],K0=16,Y0=27.5,Z0=11.6;ue.exports={O:u0,W:K0,L:Y0,RIDGE:Z0,BOX:[u0[0]-.8,0,u0[2]-11.5,u0[0]+K0+.8,Z0+.5,u0[2]+Y0+.8],AIR_BOX:[u0[0],0,u0[2],u0[0]+K0,Z0,u0[2]+Y0]}});var ee=X0((it,Q0)=>{"use strict";var{O:I,W:y,L:O}=me(),d=e=>(+e).toFixed(4),G=10.5,W0=.7,xe=3,N={hw:1.25,sill:1.35,spring:6.9,n:4,step:6.35};N.z0=O/2-N.step*(N.n-1)/2;N.apex=N.spring+N.hw*Math.sqrt(3);var V0=e=>N.z0+N.step*e;N.leftFrom=2;var V=[];for(let e=0;e<=N.n;e++)V.push(N.z0+N.step*(e-.5));var t0={hw:.75,h:2.6,depth:.7},r0={hw:1.8,h:3.6,z:-11,sign:[y/2,t0.h+.32,-t0.depth-.05],open:2.2},Z={z:21.2,G:2.4,models:{sony:{file:"res/redroom/tv_sony.bin",tex:3,w:.36,h:.341,d:.455,dark:.55},crt:{file:"res/redroom/tv_crt.bin",tex:3,w:.47,h:.454,d:.389,dark:.9},old:{file:"res/redroom/tv_old.bin",tex:1,w:.62,h:.418,d:.416,dark:.75}}};Z.stack=[["old",0,-1.41,2,.04],["crt",0,.05,-1,-.02],["sony",0,1.24,-2,.06],["crt",1,-1.16,3,.02],["sony",1,-.03,-1,.04],["crt",1,1.14,-3,.06],["sony",2,-.73,2,.06],["old",2,.66,-2,.03],["crt",0,-2.78,3,.08],["sony",1,-2.68,4,.1],["old",0,2.5,-3,.08],["sony",1,2.32,-4,.1]];(()=>{let e=[];for(let p of Z.stack){let M=Z.models[p[0]],q=p[1],s=p[2],n=M.w*Z.G,t=0;for(let f of e)f.row>=q||Math.abs(f.dx-s)<(f.w+n)/2*.92&&(t=Math.max(t,f.top));e.push({dx:s,row:q,w:n,top:t+M.h*Z.G*.99}),p.base=t}})();var D=(()=>{let e={top:.92,depth:.78};return e.a=[V[0]+.7,V[1]-.55],e.b=[V[1]+.55,V[2]-.7],e.basin={x0:.08,x1:e.depth-.07,z0:e.a[0]+.1,z1:e.a[1]-.1,floor:e.top-.1},e.TX=.44,e.TZ=.54,e.TH=.075,e.TXc=(e.basin.x0+e.basin.x1)/2,e.trays=[e.a[0]+1.1,e.a[0]+1.72,e.a[0]+2.34],e.liquid=e.basin.floor+.05,e.bulb=[e.TXc+.02,1.39,e.trays[0]+.05],e.tube={x:.07,y:3.05,z0:e.b[0]+.2,z1:e.b[1]-.2},e.lines=[[.5,2.62,V[0],V[1],.14],[.5,2.62,V[1],V[2],.16],[.5,2.08,V[1],V[2],.12]],e})(),k=(()=>{let e={x:y/2-.006,z:14.92,tableK:1.25,pitch:.1};e.table=.761*e.tableK,e.feed=[.0254,.7696,.3364],e.takeup=[.0252,.2484,.337],e.lensL=[.006,.456,.15];let p=Math.cos(e.pitch),M=Math.sin(e.pitch),q=e.lensL;return e.lens=[e.x+q[0],e.table+q[1]*p+q[2]*M,e.z-q[1]*M+q[2]*p],e.img={x:y/2,y:6,w:6.4},e.img.h=e.img.w*.75,e})(),B={x0:4.2,x1:11.8,y:9,z:O-.16},g0={r:.045};(()=>{let e=g0.r,p=.51,M=y-.51,q=[p,5.5,V[1]],s=[M,6.1,V[2]],n=[];for(let l=1;l<14;l++){let c=l/14;n.push([q[0]+(s[0]-q[0])*c,q[1]+(s[1]-q[1])*c-2*4*c*(1-c),q[2]+(s[2]-q[2])*c])}g0.ctrl=[[y/2+.5,e,-1.3],[y/2+.2,e,1],[7.2,e,3.1],[4.7,e,4.5],[2.5,e,6],[1,e,6.95],[.72,e*1.2,V[1]],[.68,.3,V[1]],[.66,.53,V[1]],[.55,.62,V[1]],[p,1,V[1]],[p,3.2,V[1]],q,...n,s,[M,3.4,V[2]],[M,1,V[2]],[y-.55,.62,V[2]],[y-.66,.53,V[2]],[y-.68,.3,V[2]],[y-.75,e*1.2,V[2]+.25],[y-1.1,e,14.6],[y-1.7,e,16.2],[y-2.5,e,17.6],[12.9,e,18.5],[11.5,e,18.9],[10.6,e,19.5],[10.5,e,20.3],[11.2,e,20.5],[10.9,e,19.95],[10,e*2.2,20.1],[9.3,e,20.75],[9.5,e,21.9],[8.6,e,22.25],[8.1,.22,21.95]];let t=g0.ctrl,f=[];for(let l=0;l<t.length-1;l++){let c=t[Math.max(0,l-1)],r=t[l],i=t[l+1],v=t[Math.min(t.length-1,l+2)],u=Math.max(2,Math.ceil(Math.hypot(i[0]-r[0],i[1]-r[1],i[2]-r[2])/.06));for(let a=0;a<u;a++){let z=a/u,x=z*z,g=x*z;f.push([0,1,2].map(h=>.5*(2*r[h]+(-c[h]+i[h])*z+(2*c[h]-5*r[h]+4*i[h]-v[h])*x+(-c[h]+3*r[h]-3*i[h]+v[h])*g)))}}f.push(t[t.length-1].slice());for(let l of f)l[1]<e&&l[2]>-1.4&&(l[1]=e);g0.path=f})();var S0={w:.36,h:.435,n:16,lines:[{z:O-1.7,y:6.5,sag:1},{z:O-2.6,y:5.3,sag:.8}]},a0=(()=>{let e=[-.62,.75,-.16],p=Math.hypot(...e);return e.map(M=>M/p)})(),b0=(()=>{let e=y/2;return(e*e+xe*xe)/(2*e)})(),w0=e=>{let p=e<=y/2?e:y-e;return G+Math.sqrt(Math.max(0,b0*b0-(p-b0)*(p-b0)))},m={FLOOR:0,WALL:1,REVEAL:2,GLASS:3,VAULT:4,TRIM:5,VOID:6,TUBE:7,CABLE:8,TILE:9,STEEL:10,PEG:11,CONC:12,CFLOOR:13,DOOR:14};function ye(){let e=[],p=[],M=[],q=[],s=[],n={pos:e,nrm:p,kind:M,uv:q,idx:s,v(t,f,l,c){return e.push(t[0]+I[0],t[1]+I[1],t[2]+I[2]),p.push(f[0],f[1],f[2]),M.push(l),q.push(c?c[0]:0,c?c[1]:0),e.length/3-1},quad(t,f,l,c,r,i,v,u,a,z){let x=n.v(t,r,i,v),g=n.v(f,r,i,u),h=n.v(l,r,i,a),b=n.v(c,r,i,z);s.push(x,g,h,x,h,b)},box(t,f,l,c,r,i,v){n.quad([t,f,i],[c,f,i],[c,r,i],[t,r,i],[0,0,1],v),n.quad([c,f,l],[t,f,l],[t,r,l],[c,r,l],[0,0,-1],v),n.quad([c,f,i],[c,f,l],[c,r,l],[c,r,i],[1,0,0],v),n.quad([t,f,l],[t,f,i],[t,r,i],[t,r,l],[-1,0,0],v),n.quad([t,r,i],[c,r,i],[c,r,l],[t,r,l],[0,1,0],v),n.quad([t,f,l],[c,f,l],[c,f,i],[t,f,i],[0,-1,0],v)},cyl(t,f,l,c,r,i,v){v=v||18;for(let u=0;u<v;u++){let a=u/v*Math.PI*2,z=(u+1)/v*Math.PI*2,x=[Math.sin(a),0,Math.cos(a)],g=[Math.sin(z),0,Math.cos(z)],h=($,A)=>[t+$[0]*l,A,f+$[2]*l],b=n.v(h(x,c),x,i),w=n.v(h(g,c),g,i),S=n.v(h(g,r),g,i),T=n.v(h(x,r),x,i);s.push(b,w,S,b,S,T)}}};return n}function c0(e,p,M,q,s){let n=null,t=null,f=[];for(let l=0;l<p.length;l++){let c=p[Math.max(0,l-1)],r=p[Math.min(p.length-1,l+1)],i=[r[0]-c[0],r[1]-c[1],r[2]-c[2]],v=Math.hypot(...i)||1;i=i.map(g=>g/v),t||(t=Math.abs(i[1])<.9?[0,1,0]:[1,0,0]);let u=t[0]*i[0]+t[1]*i[1]+t[2]*i[2];t=[t[0]-i[0]*u,t[1]-i[1]*u,t[2]-i[2]*u];let a=Math.hypot(...t)||1;t=t.map(g=>g/a);let z=[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]],x=[];for(let g=0;g<q;g++){let h=g/q*Math.PI*2,b=Math.cos(h),w=Math.sin(h),S=[t[0]*b+z[0]*w,t[1]*b+z[1]*w,t[2]*b+z[2]*w];x.push(e.v([p[l][0]+S[0]*M,p[l][1]+S[1]*M,p[l][2]+S[2]*M],S,s,[l,g]))}if(n)for(let g=0;g<q;g++){let h=(g+1)%q;e.idx.push(n[g],n[h],x[h],n[g],x[h],x[g])}n=x,f.push(x)}}var _e=(e,p)=>[e[0],e[1]-e[4]*4*p*(1-p),e[2]+.35+(e[3]-e[2]-.7)*p];function Ge(e,p,M){let q=[[-e,p],[-e,M]],s=2*e,n=14;for(let t=1;t<=n;t++){let f=Math.PI-t/n*(Math.PI/3);q.push([e+s*Math.cos(f),M+s*Math.sin(f)])}for(let t=1;t<=n;t++){let f=Math.PI/3-t/n*(Math.PI/3);q.push([-e+s*Math.cos(f),M+s*Math.sin(f)])}return q.push([e,p]),q}function we(e,p,M,q,s,n,t){let f=s?p.length:p.length-1;for(let l=0;l<f;l++){let c=p[l],r=p[(l+1)%p.length],i=r[0]-c[0],u=-(r[1]-c[1]),a=i,z=Math.hypot(u,a)||1;u/=z,a/=z;let x=(c[0]+r[0])/2-t[0],g=(c[1]+r[1])/2-t[1];u*x+a*g>0&&(u=-u,a=-a);let h=q(u,a,0,!0);e.quad(q(c[0],c[1],0),q(r[0],r[1],0),q(r[0],r[1],M),q(c[0],c[1],M),h,n,[c[0],c[1]],[r[0],r[1]],[r[0],r[1]],[c[0],c[1]])}}function He(){let e=ye();e.quad([0,0,0],[0,0,O],[y,0,O],[y,0,0],[0,1,0],m.FLOOR),e.quad([0,0,O],[0,0,0],[0,G,0],[0,G,O],[1,0,0],m.WALL,[O,0],[0,0],[0,G],[O,G]),e.quad([y,0,0],[y,0,O],[y,G,O],[y,G,0],[-1,0,0],m.WALL,[0,0],[O,0],[O,G],[0,G]);let p=24;for(let s of[0,1]){let n=s?O:0,t=[0,0,s?-1:1];for(let f=0;f<p;f++){let l=f/p*y,c=(f+1)/p*y,r=[l,0,n],i=[c,0,n],v=[c,w0(c),n],u=[l,w0(l),n];s?e.quad(i,r,u,v,t,m.WALL,[c,0],[l,0],[l,u[1]],[c,v[1]]):e.quad(r,i,v,u,t,m.WALL,[l,0],[c,0],[c,v[1]],[l,u[1]])}}let M=40;for(let s=0;s<M;s++){let n=s/M*y,t=(s+1)/M*y,f=w0(n),l=w0(t),c=(x,g)=>{let h=x<=y/2?x:y-x,b=(b0-h)/b0,w=(G-g)/b0;return x>y/2&&(b=-b),[b,w,0]},r=c(n,f),i=c(t,l),v=e.v([n,f,0],r,m.VAULT,[n,0]),u=e.v([t,l,0],i,m.VAULT,[t,0]),a=e.v([t,l,O],i,m.VAULT,[t,O]),z=e.v([n,f,O],r,m.VAULT,[n,O]);e.idx.push(v,u,a,v,a,z)}let q=Ge(N.hw,N.sill,N.spring);for(let s=0;s<N.n;s++){let n=V0(s),t=s>=N.leftFrom;t&&we(e,q,W0,(i,v,u,a)=>a?[0,v,i]:[-u,v,n+i],!0,m.REVEAL,[0,(N.sill+N.apex)/2]),we(e,q,W0,(i,v,u,a)=>a?[0,v,i]:[y+u,v,n+i],!0,m.REVEAL,[0,(N.sill+N.apex)/2]);let f=W0*.55,l=N.sill-.02,c=N.apex+.02,r=N.hw+.02;t&&e.quad([-f,l,n+r],[-f,l,n-r],[-f,c,n-r],[-f,c,n+r],[1,0,0],m.GLASS,[r,l],[-r,l],[-r,c],[r,c]),e.quad([y+f,l,n-r],[y+f,l,n+r],[y+f,c,n+r],[y+f,c,n-r],[-1,0,0],m.GLASS,[-r,l],[r,l],[r,c],[-r,c]),t&&e.box(-.02,N.sill-.12,n-N.hw-.18,.12,N.sill,n+N.hw+.18,m.TRIM),e.box(y-.12,N.sill-.12,n-N.hw-.18,y+.02,N.sill,n+N.hw+.18,m.TRIM)}{let s=y/2-t0.hw,n=y/2+t0.hw,t=t0.h,f=t0.depth;e.quad([s,0,-f],[s,0,0],[s,t,0],[s,t,-f],[1,0,0],m.REVEAL),e.quad([n,0,0],[n,0,-f],[n,t,-f],[n,t,0],[-1,0,0],m.REVEAL),e.quad([s,t,0],[n,t,0],[n,t,-f],[s,t,-f],[0,-1,0],m.REVEAL),e.quad([s,.001,-f],[n,.001,-f],[n,.001,0],[s,.001,0],[0,1,0],m.CFLOOR);let l=y/2-r0.hw,c=y/2+r0.hw,r=r0.h,i=r0.z;e.quad([l,0,i],[l,0,-f],[c,0,-f],[c,0,i],[0,1,0],m.CFLOOR),e.quad([l,0,-f],[l,0,i],[l,r,i],[l,r,-f],[1,0,0],m.CONC,[-f,0],[i,0],[i,r],[-f,r]),e.quad([c,0,i],[c,0,-f],[c,r,-f],[c,r,i],[-1,0,0],m.CONC,[i,0],[-f,0],[-f,r],[i,r]),e.quad([l,r,i],[l,r,-f],[c,r,-f],[c,r,i],[0,-1,0],m.CONC,[i,0],[-f,0],[-f,1],[i,1]),e.quad([c,0,i],[l,0,i],[l,r,i],[c,r,i],[0,0,1],m.CONC,[0,0],[1,0],[1,r],[0,r]);let v=-f;e.quad([l,0,v],[s,0,v],[s,r,v],[l,r,v],[0,0,-1],m.CONC,[l,0],[s,0],[s,r],[l,r]),e.quad([n,0,v],[c,0,v],[c,r,v],[n,r,v],[0,0,-1],m.CONC,[n,0],[c,0],[c,r],[n,r]),e.quad([s,t,v],[n,t,v],[n,r,v],[s,r,v],[0,0,-1],m.CONC,[s,t],[n,t],[n,r],[s,r]);let u=s,a=v-.01,z=r0.open,x=t0.hw*2-.04,g=.045,h=[Math.cos(z),0,-Math.sin(z)],b=[Math.sin(z),0,Math.cos(z)],w=(H,K,J)=>[u+h[0]*H+b[0]*J,K,a+h[2]*H+b[2]*J],S=.012,T=t-.02;e.quad(w(0,S,g),w(x,S,g),w(x,T,g),w(0,T,g),b,m.DOOR),e.quad(w(x,S,0),w(0,S,0),w(0,T,0),w(x,T,0),b.map(H=>-H),m.DOOR),e.quad(w(x,S,g),w(x,S,0),w(x,T,0),w(x,T,g),h,m.DOOR),e.quad(w(0,T,g),w(x,T,g),w(x,T,0),w(0,T,0),[0,1,0],m.DOOR);let $=w(x-.09,1.02,g+.03);c0(e,[w(x-.09,1.02,g),$,[$[0]-h[0]*.12,$[1],$[2]-h[2]*.12]],.011,6,m.STEEL);let A=r0.sign;e.box(A[0]-.33,A[1]-.12,A[2]-.02,A[0]+.33,A[1]+.12,v,m.TRIM)}for(let s of V){for(let l of[.2,y-.2])e.box(l-.42,0,s-.42,l+.42,.5,s+.42,m.TRIM),e.cyl(l,s,.27,.5,G-.55,m.TRIM),e.cyl(l+(l<y/2?.2:-.2),s-.36,.1,.5,G-.55,m.TRIM,10),e.cyl(l+(l<y/2?.2:-.2),s+.36,.1,.5,G-.55,m.TRIM,10),e.box(l-.45,G-.55,s-.5,l+.45,G-.25,s+.5,m.TRIM);let n=40,t=.22,f=.22;for(let l=0;l<n;l++){let c=l/n*y,r=(l+1)/n*y,i=w0(c),v=w0(r),u=[y/2-c,-(i-G+2),0],a=[y/2-r,-(v-G+2),0],z=w=>{let S=Math.hypot(w[0],w[1])||1;return[w[0]/S,w[1]/S,0]},x=z(u),g=z(a),h=[c+x[0]*f,i+x[1]*f],b=[r+g[0]*f,v+g[1]*f];e.quad([h[0],h[1],s-t],[b[0],b[1],s-t],[b[0],b[1],s+t],[h[0],h[1],s+t],x,m.TRIM),e.quad([c,i,s-t],[r,v,s-t],[b[0],b[1],s-t],[h[0],h[1],s-t],[0,0,-1],m.TRIM),e.quad([r,v,s+t],[c,i,s+t],[h[0],h[1],s+t],[b[0],b[1],s+t],[0,0,1],m.TRIM)}}{let s=D,n=s.top,t=s.basin,f=(u,a,z)=>{if(e.box(0,0,u,s.depth-.06,.12,a,m.TRIM),e.quad([s.depth,.12,u],[s.depth,.12,a],[s.depth,n,a],[s.depth,n,u],[1,0,0],m.TILE,[u,.12],[a,.12],[a,n],[u,n]),e.quad([0,.12,u],[s.depth,.12,u],[s.depth,n,u],[0,n,u],[0,0,-1],m.TILE,[0,.12],[s.depth,.12],[s.depth,n],[0,n]),e.quad([s.depth,.12,a],[0,.12,a],[0,n,a],[s.depth,n,a],[0,0,1],m.TILE,[s.depth,.12],[0,.12],[0,n],[s.depth,n]),!z){e.quad([0,n,u],[0,n,a],[s.depth,n,a],[s.depth,n,u],[0,1,0],m.TILE,[0,u],[0,a],[s.depth,a],[s.depth,u]);return}let x=(g,h,b,w)=>e.quad([g,n,b],[g,n,w],[h,n,w],[h,n,b],[0,1,0],m.TILE,[g,b],[g,w],[h,w],[h,b]);x(0,t.x0,u,a),x(t.x1,s.depth,u,a),x(t.x0,t.x1,u,t.z0),x(t.x0,t.x1,t.z1,a),e.quad([t.x0,t.floor,t.z0],[t.x0,t.floor,t.z1],[t.x1,t.floor,t.z1],[t.x1,t.floor,t.z0],[0,1,0],m.TILE,[t.x0,t.z0],[t.x0,t.z1],[t.x1,t.z1],[t.x1,t.z0]),e.quad([t.x0,t.floor,t.z1],[t.x0,t.floor,t.z0],[t.x0,n,t.z0],[t.x0,n,t.z1],[1,0,0],m.TILE,[t.z1,t.floor],[t.z0,t.floor],[t.z0,n],[t.z1,n]),e.quad([t.x1,t.floor,t.z0],[t.x1,t.floor,t.z1],[t.x1,n,t.z1],[t.x1,n,t.z0],[-1,0,0],m.TILE,[t.z0,t.floor],[t.z1,t.floor],[t.z1,n],[t.z0,n]),e.quad([t.x0,t.floor,t.z0],[t.x1,t.floor,t.z0],[t.x1,n,t.z0],[t.x0,n,t.z0],[0,0,1],m.TILE,[t.x0,t.floor],[t.x1,t.floor],[t.x1,n],[t.x0,n]),e.quad([t.x1,t.floor,t.z1],[t.x0,t.floor,t.z1],[t.x0,n,t.z1],[t.x1,n,t.z1],[0,0,-1],m.TILE,[t.x1,t.floor],[t.x0,t.floor],[t.x0,n],[t.x1,n])};f(s.a[0],s.a[1],!0),f(s.b[0],s.b[1],!1);for(let[u,a]of[s.a,s.b])e.quad([.012,n,a],[.012,n,u],[.012,n+.62,u],[.012,n+.62,a],[1,0,0],m.TILE,[a,n],[u,n],[u,n+.62],[a,n+.62]);let l=u=>{let a=t.floor+.004,z=a+s.TH,x=s.TX/2,g=s.TZ/2,h=.02,b=s.TXc,w=[[b-x+h,u-g+h],[b+x-h,u-g+h],[b+x-h,u+g-h],[b-x+h,u+g-h]],S=[[b-x,u-g],[b+x,u-g],[b+x,u+g],[b-x,u+g]];e.quad([w[0][0],a,w[0][1]],[w[3][0],a,w[3][1]],[w[2][0],a,w[2][1]],[w[1][0],a,w[1][1]],[0,1,0],m.STEEL);for(let T=0;T<4;T++){let $=(T+1)%4,A=[w[T][0],a,w[T][1]],H=[w[$][0],a,w[$][1]],K=[S[$][0],z,S[$][1]],J=[S[T][0],z,S[T][1]],Y=(w[T][0]+w[$][0])/2-b,X=(w[T][1]+w[$][1])/2-u,P=Math.hypot(Y,X)||1;e.quad(A,H,K,J,[-Y/P*.95,.3,-X/P*.95],m.STEEL),e.quad(H,A,[J[0],a+.001,J[2]],[K[0],a+.001,K[2]],[Y/P,0,X/P],m.STEEL)}c0(e,[...S,S[0]].map(T=>[T[0],z+.004,T[1]]),.005,5,m.STEEL)};for(let u of s.trays)l(u);let c=(u,a,z,x,g,h)=>{for(let b of[-.012,.012])c0(e,[[u,g,a+b],[(u+z)/2,(g+h)/2+.006,(a+x)/2+b*.6],[z,h,x+b*.2]],.0045,5,m.PEG)};c(s.TXc+.05,s.trays[0]+.12,s.TXc+.27,s.trays[0]+.42,s.liquid-.005,s.top+.03),c(s.TXc-.1,s.trays[2]-.2,s.TXc+.24,s.trays[2]-.05,s.liquid+.002,s.liquid+s.TH*.9);let r=t.z1-.3;c0(e,[[0,1.32,r],[.18,1.32,r],[.27,1.3,r],[.32,1.22,r],[.33,1.12,r]],.016,8,m.STEEL),e.box(0,1.27,r-.05,.05,1.37,r+.05,m.STEEL);let i=D.bulb;c0(e,[[0,2.32,i[2]],[i[0]*.6,2.32,i[2]],[i[0],2.28,i[2]]],.012,6,m.TRIM),e.box(0,2.24,i[2]-.06,.03,2.4,i[2]+.06,m.TRIM),c0(e,[[i[0],2.28,i[2]],[i[0]+.004,1.9,i[2]+.003],[i[0],i[1]+.2,i[2]]],.004,5,m.CABLE);let v=D.tube;c0(e,[[v.x+.02,v.y,v.z0],[v.x+.02,v.y,(v.z0+v.z1)/2],[v.x+.02,v.y,v.z1]],.035,10,m.TUBE),e.box(0,v.y-.05,v.z0-.06,.07,v.y+.05,v.z0-.01,m.TRIM),e.box(0,v.y-.05,v.z1+.01,.07,v.y+.05,v.z1+.06,m.TRIM);for(let u of D.lines){let a=[];for(let z=0;z<=24;z++){let x=z/24;a.push(_e(u,x))}c0(e,a,.0035,5,m.CABLE)}}c0(e,g0.path,g0.r,9,m.CABLE),e.box(B.x0-.08,B.y-.07,O-.08,B.x0-.02,B.y+.07,O,m.TRIM),e.box(B.x1+.02,B.y-.07,O-.08,B.x1+.08,B.y+.07,O,m.TRIM),c0(e,[[B.x0-.02,B.y,B.z],[(B.x0+B.x1)/2,B.y,B.z],[B.x1+.02,B.y,B.z]],.045,10,m.TUBE);for(let s of[0,1]){let n=s?y-.06:0,t=s?y:.06;e.box(n,0,0,t,.24,O,m.TRIM),e.box(s?y-.05:0,1,0,s?y:.05,1.08,O,m.TRIM);let f=s?y-.32:0,l=s?y:.32;e.box(f,G-.25,0,l,G+.08,O,m.TRIM)}for(let s of[0,1]){let n=s?O-.06:0,t=s?O:.06;s?e.box(0,0,n,y,.24,t,m.TRIM):(e.box(0,0,n,y/2-t0.hw,.24,t,m.TRIM),e.box(y/2+t0.hw,0,n,y,.24,t,m.TRIM));let f=s?O-.32:0,l=s?O:.32;e.box(0,G-.25,f,y,G+.08,l,m.TRIM)}return e}function Fe(){let e=7,p=()=>(e=e*16807%2147483647,(e-1)/2147483646),M=[],q=[],s=[],n=[],t=[],f=[],l=[],c=3,r=4,i=(h,b,w,S,T,$,A,H,K)=>{let J=S0.w*T,Y=S0.h*T,X=M.length/3;for(let P=0;P<=r;P++)for(let e0=0;e0<=c;e0++){let F=e0/c,Q=P/r,U=(F-.5)*J,s0=(Q-.5)*Y,m0=H*((F-.5)*(F-.5)*4+(1-Q)*(1-Q)*.6);M.push(I[0]+h[0]+b[0]*U+w[0]*s0+S[0]*m0,I[1]+h[1]+b[1]*U+w[1]*s0+S[1]*m0,I[2]+h[2]+b[2]*U+w[2]*s0+S[2]*m0),q.push(S[0],S[1],S[2]),s.push(F,Q),n.push($),l.push(K||0),t.push(A[0]+I[0],A[1]+I[1],A[2]+I[2],A[3])}for(let P=0;P<r;P++)for(let e0=0;e0<c;e0++){let F=X+P*(c+1)+e0,Q=F+1,U=F+c+1,s0=U+1;f.push(F,Q,s0,F,s0,U)}},v=(h,b,w)=>{let S=Math.cos(w),T=Math.sin(w);return[h.map(($,A)=>$*S+b[A]*T),b.map(($,A)=>-h[A]*T+$*S)]},u=[0,0,0,0],a=0,z=(h,b,w,S,T,$,A,H,K)=>{let X=0;for(let P=$;P<A;P+=.48)for(let e0=S;e0<T;e0+=.4){let F=e0+(p()-.5)*.4*.7,Q=P+(p()-.5)*.48*.6;if(p()>H(F,Q))continue;let[U,s0]=v(w,[0,1,0],(p()-.5)*.5),m0=h(F,Q,.012+.0016*(X++%9)+p()*.004);i(m0,U,s0,b,.88+p()*.3,Math.floor(p()*S0.n),u,(p()-.3)*.02),a++}},x=(h,b,w)=>Math.exp(-Math.pow((h-b)/w,2));for(let h=0;h<N.n-1;h++){let b=V[h+1],w=[[V0(h)+N.hw+.32,b-.66],[b+.66,V0(h+1)-N.hw-.32]];for(let[S,T]of w){let $=(A,H)=>.85*x(H,3.4,1.7);T>D.b[1]+.3&&z((A,H,K)=>[K,H,A],[1,0,0],[0,0,-1],S,T,1.45,6.3,$),z((A,H,K)=>[y-K,H,A],[-1,0,0],[0,0,1],S,T,1.45,6.3,$)}}let g=[];for(let h of D.lines){let b=h[3]-h[2]-.7;for(let w=.18;w<b-.1;w+=.3+p()*.14){let S=w/b,T=_e(h,S);if(p()<.1||Math.abs(T[2]-D.bulb[2])<.4&&T[1]>2.3)continue;let $=.56+p()*.14,A=S0.h*$,H=(p()-.5)*.7,K=p()<.3?p()<.5?-.75:.75:H,[J,Y]=v([0,0,-1],[0,1,0],K),X=[1,0,0],P=[T[0]+.004,T[1]-.02-Y[1]*A*.5,T[2]-Y[2]*A*.5];i(P,J,Y,X,$,Math.floor(p()*S0.n),[T[0],T[1],T[2],-(.04+p()*.06)],.01+p()*.025,1),g.push(T),a++}}return{pos:M,nrm:q,uv:s,pic:n,piv:t,idx:f,sty:l,pegs:g,count:a}}var y0=`
	const float RW = ${d(y)}, RL = ${d(O)}, RH = ${d(G)}, RT = ${d(W0)};
	const float HW = ${d(N.hw)}, SILL = ${d(N.sill)}, SPRING = ${d(N.spring)};
	const float WZ0 = ${d(N.z0)}, WSTEP = ${d(N.step)};
	const vec3 RO = vec3(${d(I[0])}, ${d(I[1])}, ${d(I[2])});
	const vec3 LDIR_L = vec3(${d(a0[0])}, ${d(a0[1])}, ${d(a0[2])});
	const vec3 LDIR_R = vec3(${d(-a0[0])}, ${d(a0[1])}, ${d(a0[2])});

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
	float winIdx(float z) { return clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${d(N.n-1)}); }
	// (on the left, the first windows are walled up)
	float leftOpen(float z) { return step(${d(N.leftFrom-.5)}, winIdx(z)); }
	vec2 winLocal(float z, float y) {
		float i = clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${d(N.n-1)});
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
`;function Ue(){return`
	#define STUDIO_SUN ${"vec3("+d(a0[0])+", "+d(a0[1])+", "+d(a0[2])+")"}
	#define STUDIO_SUN2 ${"vec3("+d(-a0[0])+", "+d(a0[1])+", "+d(a0[2])+")"}
	#define SHAFT_TINT vec3(0.6, 0.012, 0.008)
	#define STUDIO_AIR_EVEN
	${y0}
	float studioSun(vec3 p) {
		vec3 lp = p - RO;
		if (lp.x < 0.0 || lp.x > RW || lp.z < 0.0 || lp.z > RL || lp.y > RH + 2.0) return 0.0;
		vec3 c = redLightAir(lp);
		return dot(c, vec3(0.7, 0.2, 0.1)) * 3.2;
	}`}var ge=`
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
	}`,I0=`
	// the televisions' flicker, thrown on whatever is in front of them
	uniform vec4 tvLight;
	vec3 tvGlow(vec3 lp, vec3 N) {
		vec3 d = vec3(${d(y/2)}, 1.35, ${d(Z.z-.9)}) - lp;
		float dd = dot(d, d);
		float face = 0.35 + 0.65 * max(0.0, dot(N, normalize(d)));
		// (only in front of them: the stack's own back is in its shadow)
		float front = smoothstep(${d(Z.z+.6)}, ${d(Z.z-.2)}, lp.z);
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
		float k = floor(rhash(vec2(shot, 4.7)) * 16.0);
		float f = fract(t / 3.4);
		uv += vec2(sin(t * 13.0) * 0.0015 + (rhash(vec2(fr, 1.0)) - 0.5) * 0.003, (rhash(vec2(fr, 2.0)) - 0.5) * 0.006);
		// a worn, low print thrown out of focus: coarse, and soft
		vec2 su = clamp((floor(uv * vec2(150.0, 112.0)) + 0.5) / vec2(150.0, 112.0), 0.01, 0.99);
		vec2 tile = vec2(mod(k, 4.0), floor(k / 4.0));
		float l = 0.0;
		for (int i = 0; i < 5; i++) {
			vec2 o = i == 0 ? vec2(0.0) : vec2(i == 1 ? 1.0 : (i == 2 ? -1.0 : 0.0), i == 3 ? 1.0 : (i == 4 ? -1.0 : 0.0)) * 0.012;
			l += dot(texture2D(memTex, (tile + vec2(clamp(su.x + o.x, 0.005, 0.995), 1.0 - clamp(su.y + o.y, 0.005, 0.995))) / 4.0).rgb, vec3(0.3, 0.59, 0.11)) * (i == 0 ? 0.36 : 0.16);
		}
		l = clamp((l - 0.06) * 1.25, 0.0, 1.0);
		l = pow(l, 1.2);
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
		l *= clamp(pow(e.x * e.y * 16.0, 0.45), 0.0, 1.0);
		return vec3(1.0, 0.84, 0.62) * max(l, 0.0);
	}
	// where a point in the room is in the projected picture (x, y in 0..1;
	// z: how far along the beam, 0 at the lens, 1 at the wall)
	vec3 projUV(vec3 lp) {
		vec3 L0 = vec3(${d(k.lens[0])}, ${d(k.lens[1])}, ${d(k.lens[2])});
		vec3 d = lp - L0;
		float s = (${d(O-.005)} - L0.z) / max(d.z, 1e-4);
		vec3 h = L0 + d * s;
		return vec3((h.x - ${d(k.img.x-k.img.w/2)}) / ${d(k.img.w)}, (h.y - ${d(k.img.y-k.img.h/2)}) / ${d(k.img.h)}, 1.0 / s);
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
		vec3 c = vec3(clamp(lp.x, ${d(B.x0)}, ${d(B.x1)}), ${d(B.y)}, ${d(B.z)});
		vec3 d = c - lp;
		float dd = dot(d, d);
		float face = 0.25 + 0.75 * max(0.0, dot(N, normalize(d)));
		return vec3(1.0, 0.06, 0.045) * 2.6 * face / (1.0 + dd * 0.055);
	}
	// the darkroom: the bare red bulb over the trays, the tube over the lines
	vec3 darkLight(vec3 lp, vec3 N) {
		vec3 d = vec3(${d(D.bulb[0])}, ${d(D.bulb[1])}, ${d(D.bulb[2])}) - lp;
		float dd = dot(d, d);
		vec3 c = vec3(1.0, 0.07, 0.04) * 1.15 * (0.2 + 0.8 * max(0.0, dot(N, normalize(d)))) / (0.02 + dd * 2.2);
		vec3 tq = vec3(${d(D.tube.x+.02)}, ${d(D.tube.y)}, clamp(lp.z, ${d(D.tube.z0)}, ${d(D.tube.z1)}));
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
		vec3 Ls = vec3(${d(y/2)}, 1.25, 1.6);
		vec3 d = lp - Ls;
		float t = (${d(-t0.depth)} - Ls.z) / d.z;
		vec3 h = Ls + d * t;
		float m = smoothstep(0.08, -0.05, abs(h.x - ${d(y/2)}) - ${d(t0.hw)}) * smoothstep(0.08, -0.05, h.y - ${d(t0.h)}) * step(0.0, h.y);
		float dd = dot(d, d);
		vec3 Ld = -normalize(d);
		vec3 c = vec3(1.0, 0.07, 0.05) * 26.0 * m * (0.15 + 0.85 * max(0.0, dot(N, Ld))) / (1.0 + dd * 0.55);
		vec3 sd = vec3(${d(r0.sign[0])}, ${d(r0.sign[1])}, ${d(r0.sign[2])}) - lp;
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
	${y0}

	const float DHW = ${d(t0.hw)}, DH = ${d(t0.h)};

	${I0}

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
					col += alb * pl * 3.2 + pl * 0.06;
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
				vec3 bd = normalize(vec3(${d(D.bulb[0])}, ${d(D.bulb[1])}, ${d(D.bulb[2])}) - lp);
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
	}`,Be=`
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
	}`,Xe=`
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, sigTime, yScale, seed, dark, nMem, emit;
	uniform sampler2D bodyTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_flag;
	${y0}
	${I0}

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
		float isMem = step(0.42, h0) * step(h0, 0.93);
		float isDead = step(0.93, h0);
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
		vec2 tile = vec2(mod(k, 4.0), floor(k / 4.0));
		vec2 au = (tile + vec2(mu.x, 1.0 - mu.y)) / 4.0;
		vec2 ca = vec2(0.006 + 0.01 * band, 0.0) / 4.0;
		vec3 m = vec3(texture2D(memTex, au + ca).r, texture2D(memTex, au).g, texture2D(memTex, au - ca).b);
		// drained and darkened, the shadows crushed
		float l = lum(m);
		l = pow(clamp(l * 1.1, 0.0, 1.0), 1.45);
		vec3 mono = vec3(l);
		// washed red, or cold and grey
		float red = step(0.62, rhash(vec2(seg, 7.0 + seed)));
		vec3 tint = mix(vec3(0.78, 0.86, 0.95), vec3(1.15, 0.28, 0.22), red);
		m = mix(mono * tint, m * l * 1.2, 0.18);
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
			col = signal(v_uv) * 1.05;
			// the curved glass catches the room
			col += amb * 0.5 * (0.05 + fr);
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
			col = alb * (amb + lit);
			// worn plastic and veneer: a red sheen along the edges, as in
			// the reference, where the room's light rims every set
			col += (amb * 0.9 + lit * 0.3 + vec3(0.25, 0.02, 0.02)) * fr * 0.45;
		}
		float dist = length(v_eye - v_pos);
		col = mix(col, vec3(0.06, 0.004, 0.005), (1.0 - exp(-dist * 0.035)) * 0.55);
		gl_FragColor = vec4(col, 1.0);
	}`,Ke=`
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
	}`,Ye=`
	precision highp float;
	uniform float time, yScale;
	uniform sampler2D polTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_pic, v_style;
	${y0}
	${I0}
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
			vec2 tile = vec2(mod(v_pic, 4.0), floor(v_pic / 4.0));
			vec3 ph = texture2D(polTex, (tile + clamp(pu, 0.01, 0.99)) / 4.0).rgb;
			// burnt in at the edges, as if the chemistry ran out
			vec2 e = pu * (1.0 - pu);
			ph *= 0.45 + 0.55 * clamp(e.x * e.y * 14.0, 0.0, 1.0);
			alb = ph * 0.75 + 0.012;
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
	}`,Ze=`
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
	}`,Je=`
	precision highp float;
	uniform float time;
	varying vec3 v_pos, v_eye;
	varying float v_layer;
	${y0}
	${I0}
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
		// strong at the lens, thinning out towards the wall
		float a = (0.25 + 2.2 * smoke) * (0.35 + 0.65 * exp(-along * 2.2)) * smoothstep(0.0, 0.04, along);
		float dist = length(v_eye - v_pos);
		gl_FragColor = vec4(fl * a * 0.022 * (1.0 + v_layer * 0.6) * (1.0 - exp(-dist * 0.8)), 1.0);
	}`,Qe=`
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
	}`,et=`
	precision highp float;
	uniform float time;
	uniform sampler2D printTex, polTex;
	varying vec3 v_pos, v_eye;
	varying float v_tray;
	${y0}
	${I0}
	const vec3 BULB = vec3(${d(D.bulb[0])}, ${d(D.bulb[1])}, ${d(D.bulb[2])});
	void main() {
		vec3 lp = v_pos - RO;
		int k = int(v_tray + 0.5);
		float zc = k == 0 ? ${d(D.trays[0])} : (k == 1 ? ${d(D.trays[1])} : ${d(D.trays[2])});
		vec2 tl = vec2(lp.x - ${d(D.TXc)}, lp.z - zc);
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
		if (k != 1) {
			// the print, turned a little in the tray
			float an = k == 0 ? 0.11 : -0.16;
			vec2 off = k == 0 ? vec2(0.012, -0.03) : vec2(-0.02, 0.04);
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
						im = texture2D(polTex, (vec2(2.0, 1.0) + vec2(iu.x, 1.0 - iu.y)) / 4.0).r;
					}
					paper *= mix(0.06, 1.0, im);
				}
				base = vec3(paper) * vec3(0.92, 0.9, 0.85);
			}
		}
		// the liquid swallows light: what is under it is dim and warm
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
	}`,tt=`
	precision highp float;
	uniform mat4 proj, view;
	uniform float time, pxScale;
	attribute vec4 seed;
	varying float v_b, v_w;
	${y0}
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
		float s = (${d(O)} - L0.z) / max(dd.z, 1e-4);
		vec3 hh = L0 + dd * s;
		vec2 pu = vec2((hh.x - ${d(k.img.x-k.img.w/2)}) / ${d(k.img.w)}, (hh.y - ${d(k.img.y-k.img.h/2)}) / ${d(k.img.h)});
		v_w = (dd.z > 0.2 && pu.x > 0.0 && pu.x < 1.0 && pu.y > 0.0 && pu.y < 1.0) ? 1.6 : 0.0;
		vec4 v = view * vec4(lp + RO, 1.0);
		gl_Position = proj * v;
		float tw = 0.6 + 0.4 * sin(time * (1.0 + seed.w * 2.0) + seed.x * 80.0);
		v_b *= tw;
		gl_PointSize = clamp(pxScale * (0.012 + 0.012 * seed.w) / max(0.2, -v.z), 1.0, 6.0);
	}`,ot=`
	precision highp float;
	varying float v_b, v_w;
	void main() {
		vec2 d = gl_PointCoord - 0.5;
		float a = smoothstep(0.5, 0.0, length(d));
		gl_FragColor = vec4((vec3(1.0, 0.14, 0.09) * min(v_b, 1.4) + vec3(1.0, 0.8, 0.55) * v_w) * a * 0.55, 1.0);
	}`;Q0.exports=function(e){let p=He(),M={position:e.buffer(p.pos),normal:e.buffer(p.nrm),kind:e.buffer(p.kind),uv:e.buffer(p.uv)},q=e.elements({data:p.idx.length>65535?new Uint32Array(p.idx):new Uint16Array(p.idx),type:p.idx.length>65535?"uint32":"uint16"}),s=e.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),n=e.framebuffer({color:s,depth:!0}),t=e({framebuffer:n}),f=e.texture({width:1,height:1,data:[0,0,0,255]}),l=e({}),c=f,r=0,i=0,v=!1,u=[4,4],a=[0,0,0,0],z=null,x=e.texture({width:1,height:1,data:[0,0,0,255]}),g=1,h=o=>{let R=C=>{let j=Math.sin(C*127.1)*43758.5453;return j-Math.floor(j)},L=Math.floor(o*9),_=R(L),E=R(Math.floor(o*.7)),W=.92+.08*Math.sin(o*120);return E>.55&&_>.6&&(W=_>.85?.08:.45),W},b={signK:()=>g,memTex:()=>z||x,projT:o=>typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:o.time};Z.stack.forEach((o,R)=>{let L=Z.models[o[0]],_=Z.G;b["tvLo["+R+"]"]=[y/2+o[2]-L.w*_/2,o.base,Z.z+o[4]-.02],b["tvHi["+R+"]"]=[y/2+o[2]+L.w*_/2,o.base+L.h*_,Z.z+o[4]+L.d*_]});let w=e({vert:ge,frag:be,attributes:M,elements:q,cull:{enable:!1},uniforms:{reflTex:()=>c,reflSize:()=>u,reflOn:()=>r,tvLight:()=>a,...b}}),S=o=>new Promise((R,L)=>{let _=new Image,E=W=>(W&W-1)===0;_.onload=()=>R(e.texture({data:_,min:E(_.width)&&E(_.height)?"mipmap":"linear",mag:"linear",wrap:"clamp"})),_.onerror=L,_.src=o}),T=Z.stack.map((o,R)=>{let[L,,_,E,W]=o,C=Math.PI+E*Math.PI/180,j=Z.G,n0=Math.cos(C)*j,i0=Math.sin(C)*j,h0=I[0]+y/2+_,p0=I[1]+o.base,q0=I[2]+Z.z+W;return{name:L,seed:(R+1)*.6180339%1,model:[n0,0,-i0,0,0,j,0,0,i0,0,n0,0,h0,p0,q0,1]}}),$={},A=null,K=e({vert:Be,frag:Xe,attributes:{position:{buffer:e.prop("vb"),stride:36,offset:0},normal:{buffer:e.prop("vb"),stride:36,offset:12},uv:{buffer:e.prop("vb"),stride:36,offset:24},flag:{buffer:e.prop("vb"),stride:36,offset:32}},elements:e.prop("el"),offset:e.prop("offset"),count:e.prop("count"),cull:{enable:!1},uniforms:{model:e.prop("model"),seed:e.prop("seed"),dark:e.prop("dark"),emit:(o,R)=>R.emit||0,bodyTex:e.prop("tex"),...b,memTex:()=>A||x,nMem:16,sigTime:o=>typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:o.time,tvLight:()=>a}});S("res/redroom/memories.webp").then(o=>{A=o,z=o}).catch(o=>console.error("The memories did not load",o));for(let o in Z.models){let R=Z.models[o],L=[];for(let _=0;_<R.tex;_++)L.push(S("res/redroom/tv_"+o+"_"+_+".webp"));Promise.all([fetch(R.file).then(_=>_.arrayBuffer()),...L]).then(([_,...E])=>{let W=new Uint32Array(_,0,4),C=W[0],j=W[1],n0=W[2],i0=W[3],h0=new Int32Array(_,16,n0*3),p0=16+n0*12,q0=e.buffer(new Float32Array(_,p0,C*9)),z0=p0+C*36,B0=i0?new Uint32Array(_.slice(z0,z0+j*4)):new Uint16Array(_.slice(z0,z0+j*2)),P0=e.elements({data:B0,type:i0?"uint32":"uint16"}),d0=[];for(let T0=0;T0<n0;T0++)d0.push({offset:h0[T0*3],count:h0[T0*3+1],tex:h0[T0*3+2]>=0?E[h0[T0*3+2]]:E[0]});$[o]={vb:q0,el:P0,parts:d0,dark:R.dark}}).catch(_=>console.error("A television did not load",_))}let J=[],Y=()=>{if(A){J.length=0;for(let o of T){let R=$[o.name];if(R)for(let L of R.parts)J.push({vb:R.vb,el:R.el,offset:L.offset,count:L.count,tex:L.tex,model:o.model,seed:o.seed,dark:R.dark})}J.length&&K(J)}},X=Fe(),P=null;S("res/redroom/polaroids.webp").then(o=>{P=o}).catch(o=>console.error("The photographs did not load",o));let e0=e({vert:Ke,frag:Ye,attributes:{position:X.pos,normal:X.nrm,uv:X.uv,pic:X.pic,style:X.sty,pivot:{buffer:e.buffer(X.piv),size:4}},elements:e.elements({data:new Uint16Array(X.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...b,polTex:()=>P,tvLight:()=>a}}),F=(o,R)=>Promise.all([fetch(o).then(L=>L.arrayBuffer()),...R.map(S)]).then(([L,..._])=>{let E=new Uint32Array(L,0,4),W=E[0],C=E[1],j=E[2],n0=E[3],i0=new Int32Array(L,16,j*3),h0=16+j*12,p0=h0+W*36,q0=e.buffer(new Float32Array(L,h0,W*9)),z0=n0?new Uint32Array(L.slice(p0,p0+C*4)):new Uint16Array(L.slice(p0,p0+C*2)),B0=e.elements({data:z0,type:n0?"uint32":"uint16"}),P0=[];for(let d0=0;d0<j;d0++)P0.push({offset:i0[d0*3],count:i0[d0*3+1],tex:_[Math.max(0,i0[d0*3+2])],mat:i0[d0*3+2]});return{vb:q0,el:B0,parts:P0}}),Q=(o,R)=>{let L=new Array(16);for(let _=0;_<4;_++)for(let E=0;E<4;E++)L[_*4+E]=o[E]*R[_*4]+o[4+E]*R[_*4+1]+o[8+E]*R[_*4+2]+o[12+E]*R[_*4+3];return L},U=(o,R,L)=>[1,0,0,0,0,1,0,0,0,0,1,0,o,R,L,1],s0=o=>{let R=Math.cos(o),L=Math.sin(o);return[1,0,0,0,0,R,L,0,0,-L,R,0,0,0,0,1]},m0=Q(U(I[0]+k.x,I[1]+k.table,I[2]+k.z),s0(-k.pitch)),G0=k.tableK,Ie=[G0,0,0,0,0,G0,0,0,0,0,G0,0,I[0]+y/2,I[1],I[2]+15,1],o0={},H0=["res/redroom/proj_0.webp"];F("res/redroom/proj_body.bin",H0).then(o=>{o0.body=o}).catch(o=>console.error(o)),F("res/redroom/proj_feed.bin",H0).then(o=>{o0.feed=o}).catch(o=>console.error(o)),F("res/redroom/proj_takeup.bin",H0).then(o=>{o0.takeup=o}).catch(o=>console.error(o)),F("res/redroom/table_all.bin",["res/redroom/table_0.webp"]).then(o=>{o0.table=o}).catch(o=>console.error(o));let re=(o,R)=>Q(m0,Q(U(o[0],o[1],o[2]),Q(s0(R),U(-o[0],-o[1],-o[2])))),E0=[],ke=o=>{E0.length=0;let R=(L,_,E)=>{if(L)for(let W of L.parts)E0.push({vb:L.vb,el:L.el,offset:W.offset,count:W.count,tex:W.tex,model:_,seed:0,dark:E})};R(o0.table,Ie,.9),R(o0.body,m0,1),R(o0.feed,re(k.feed,-o*2.6),1),R(o0.takeup,re(k.takeup,-o*3.5),1),E0.length&&K(E0)},F0=[],le=[];{let o=[I[0]+k.lens[0],I[1]+k.lens[1],I[2]+k.lens[2]];[1,.8,.58].forEach((R,L)=>{let _=k.img.w/2*R,E=k.img.h/2*R,W=[[-_,-E],[_,-E],[_,E],[-_,E]].map(([C,j])=>[I[0]+k.img.x+C,I[1]+k.img.y+j,I[2]+O-.02]);for(let C=0;C<4;C++){let j=W[C],n0=W[(C+1)%4];F0.push(...o,...j,...n0),le.push(L,L,L)}})}let Ne=e({vert:Ze,frag:Je,attributes:{position:F0,layer:le},count:F0.length/3,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{...b,tvLight:()=>a}}),Ee=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale, pxScale; attribute vec3 position; void main() { vec3 p = position; p.y *= yScale; vec4 v = view * vec4(p, 1.0); gl_Position = proj * v; gl_PointSize = clamp(pxScale * 0.09 / max(0.3, -v.z), 2.0, 90.0); }",frag:"precision highp float; uniform float time; void main() { vec2 d = gl_PointCoord - 0.5; float r = length(d); float a = exp(-r * r * 40.0) + 0.25 * exp(-r * r * 9.0); gl_FragColor = vec4(vec3(1.0, 0.82, 0.58) * a * (0.85 + 0.15 * sin(time * 37.0)), 1.0); }",attributes:{position:[I[0]+k.lens[0],I[1]+k.lens[1],I[2]+k.lens[2]+.01]},count:1,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),ie=null;S("res/redroom/print.webp").then(o=>{ie=o}).catch(o=>console.error(o));let U0=[],ce=[];D.trays.forEach((o,R)=>{let L=D.TX/2-.009,_=D.TZ/2-.009,E=D.TXc,W=D.liquid,C=[[E-L,o-_],[E+L,o-_],[E+L,o+_],[E-L,o+_]].map(([j,n0])=>[I[0]+j,I[1]+W,I[2]+n0]);U0.push(...C[0],...C[2],...C[1],...C[0],...C[3],...C[2]);for(let j=0;j<6;j++)ce.push(R)});let $e=e({vert:Qe,frag:et,attributes:{position:U0,tray:ce},count:U0.length/3,cull:{enable:!1},uniforms:{...b,tvLight:()=>a,printTex:()=>ie||x,polTex:()=>P||x}}),R0=ye();for(let o of X.pegs)R0.box(o[0]-.008,o[1]-.045,o[2]-.011,o[0]+.008,o[1]+.03,o[2]+.011,m.PEG);let De=e({vert:ge,frag:be,attributes:{position:R0.pos,normal:R0.nrm,kind:R0.kind,uv:R0.uv},elements:e.elements({data:new Uint16Array(R0.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...b,reflTex:()=>f,reflSize:[4,4],reflOn:0,tvLight:()=>a}}),Oe=o=>{let R=Math.cos(o),L=Math.sin(o);return[R,0,-L,0,0,1,0,0,L,0,R,0,0,0,0,1]},f0=(o,R,L,_)=>Q(U(I[0]+o,I[1]+R,I[2]+L),Oe(_||0));F("res/redroom/plastic_all.bin",["res/redroom/plastic_0.webp"]).then(o=>{o0.jug=o}).catch(o=>console.error(o)),F("res/redroom/multi_cleaner_all.bin",["res/redroom/multi_cleaner_0.webp"]).then(o=>{o0.can=o}).catch(o=>console.error(o)),F("res/redroom/pull_all.bin",["res/redroom/pull_0.webp"]).then(o=>{o0.socket=o}).catch(o=>console.error(o)),F("res/redroom/bulb_all.bin",["res/redroom/bulb_0.webp","res/redroom/bulb_1.webp"]).then(o=>{o0.bulb=o}).catch(o=>console.error(o));let x0=D.top,M0=D.b[0],Ae=[["jug",f0(.16,x0,M0+.3,.4)],["jug",f0(.17,x0,M0+.52,-.3)],["jug",f0(.36,x0,M0+.4,2.2)],["can",f0(.14,x0,M0+.95,1.57)],["can",f0(.15,x0,M0+1.3,1.45)],["jug",f0(.16,x0,D.b[1]-.35,.9)],["can",f0(.2,x0,D.b[1]-.8,1.7)],["socket",f0(D.bulb[0],D.bulb[1]+.065,D.bulb[2],0)],["bulb",Q(f0(D.bulb[0],D.bulb[1]+.048,D.bulb[2],0),s0(Math.PI))]],Pe=()=>{let o=[];for(let[R,L]of Ae){let _=o0[R];_&&_.parts.forEach((E,W)=>o.push({vb:_.vb,el:_.el,offset:E.offset,count:E.count,tex:E.tex,model:L,seed:0,dark:R==="jug"||R==="can"?.85:.7,emit:R==="bulb"&&E.mat===0?1.6:0}))}o.length&&K(o),$e(),De()},$0=document.createElement("canvas");$0.width=512,$0.height=192;{let o=$0.getContext("2d");o.fillStyle="#000",o.fillRect(0,0,512,192),o.font='bold 128px "Helvetica Neue", Arial, sans-serif',o.textAlign="center",o.textBaseline="middle",o.shadowColor="#ff2a20",o.shadowBlur=28,o.fillStyle="#ff6a5a",o.fillText("ENTER",256,100),o.shadowBlur=0,o.fillStyle="#ffd8d0",o.fillText("ENTER",256,100)}let We=e.texture({data:$0,min:"linear",mag:"linear",wrap:"clamp"}),v0=r0.sign,D0=.3,O0=.1125,A0=v0[2]-.025,Ve=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale; attribute vec3 position; attribute vec2 uv; varying vec2 v_uv; void main() { v_uv = uv; vec3 p = position; p.y *= yScale; gl_Position = proj * view * vec4(p, 1.0); }",frag:"precision highp float; uniform sampler2D tex; uniform float signK; varying vec2 v_uv; void main() { vec3 c = texture2D(tex, v_uv).rgb; vec3 col = c * vec3(1.6, 0.55, 0.5) * signK + vec3(0.06, 0.0, 0.0); gl_FragColor = vec4(col, 1.0); }",attributes:{position:[[v0[0]+D0,v0[1]-O0,A0],[v0[0]-D0,v0[1]-O0,A0],[v0[0]-D0,v0[1]+O0,A0],[v0[0]+D0,v0[1]+O0,A0]].map(o=>[o[0]+I[0],o[1]+I[1],o[2]+I[2]]),uv:[[0,1],[1,1],[1,0],[0,0]]},elements:[0,1,2,0,2,3],cull:{enable:!1},uniforms:{tex:We,signK:()=>g}}),fe=900,ve=[];for(let o=0;o<fe;o++)ve.push(Math.random(),Math.random(),Math.random(),Math.random());let Ce=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b;
			void main() {
				vec3 L0 = vec3(${d(I[0]+k.lens[0])}, ${d(I[1]+k.lens[1])}, ${d(I[2]+k.lens[2])});
				vec3 C = vec3(${d(I[0]+k.img.x)}, ${d(I[1]+k.img.y)}, ${d(I[2]+O)});
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
				v_b = (0.25 + 1.6 * tw) / (1.0 + along * 0.35);
				gl_PointSize = clamp(pxScale * (0.006 + 0.008 * seed.w) / max(0.15, -v.z), 1.0, 7.0);
			}`,frag:"precision highp float; varying float v_b; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vec3(1.0, 0.84, 0.6) * v_b * a, 1.0); }",attributes:{seed:ve},count:fe,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),he=2200,pe=[];for(let o=0;o<he;o++)pe.push(Math.random(),Math.random(),Math.random(),Math.random());let je=e({vert:tt,frag:ot,attributes:{seed:pe},count:he,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),de=o=>{let R=!!(o&&o.reflected),L=performance.now()/1e3,_=.8+.12*Math.sin(L*47)*Math.sin(L*3.1)+.08*Math.sin(L*23+1.3);a[0]=.8*_,a[1]=.84*_,a[2]=.95*_,g=h(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:L),w(),Ve(),Y(),P&&e0(),Pe(),ke(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:L),z&&!(typeof window!="undefined"&&window.__noBeam)&&Ne(),Ee(),R||Ce(),R||je()};return de.reflect=(o,R)=>l(L=>{let _=L.viewportWidth,E=L.viewportHeight,W=Math.max(2,Math.round(_/2)),C=Math.max(2,Math.round(E/2)),j=!v;if((n.width!==W||n.height!==C)&&(n.resize(W,C),j=!0),u[0]=_,u[1]=E,r=1,!j&&++i%R!==0){c=s;return}c=f,t(()=>{e.clear({color:[0,0,0,1],depth:1}),o()}),c=s,v=!0}),de};var J0=null;Object.assign(Q0.exports,{O:I,W:y,L:O,H:G,ROOM:{W:y,L:O,H:G,WIN:N,DOOR:t0,ENT:r0,SHAFTS:V,TV:Z,DARK:D,PROJ:k,CABLE:g0,winZ:V0,vaultY:w0},POST:{threshold:.3},sunGLSL:Ue,bakedSun(e){return J0||(J0=e.texture({width:1,height:1,data:[0,0,0,0]})),J0},ready:()=>!0,setFlower(){},setGuide(){},setWind(){}})});var Se=X0((ct,ae)=>{"use strict";var Me=ee(),{O:te}=Me,{W:l0,L:Le,TV:nt,DARK:ne,PROJ:L0}=Me.ROOM,Re=e=>[e[0]+te[0],e[1]+te[1],e[2]+te[2]],ze=(e,p,M)=>e+(p-e)*M,qe=e=>Math.max(0,Math.min(1,e)),st=e=>.5-.5*Math.cos(Math.PI*qe(e)),_0=L0.x,at=L0.table,j0=L0.z,k0=[_0+L0.feed[0],at+L0.feed[1],j0+L0.feed[2]],C0=L0.lens,oe=ne.trays[0],se=[{eye:[l0/2+.15,1.55,-9.6],at:[l0/2,1.7,0],fov:40,dof:.05,p:{fov:58}},{eye:[l0/2+.05,1.6,-3],at:[l0/2,1.85,1.5],fov:50,dof:.05,p:{fov:70}},{eye:[l0/2-.2,1.5,.9],at:[l0/2-3,1.4,7],fov:56,dof:.04,p:{fov:74}},{eye:[3.3,1.55,1.3],at:[.3,1.35,5.2],fov:50,dof:.05,p:{eye:[2.8,1.6,.9],fov:72}},{eye:[1.05,1.5,oe-.42],at:[ne.TXc-.02,ne.liquid,oe+.04],fov:34,dof:.2,p:{eye:[1,1.55,oe-.45],fov:52}},{eye:[2,1.6,8.3],at:[.4,2.25,11.3],fov:50,dof:.12,p:{eye:[1.8,1.6,8.1],fov:72}},{eye:[4.2,1.7,5.6],at:[.5,3.6,7.6],fov:58,dof:.04,p:{fov:76}},{eye:[3.6,5.4,8],at:[10.5,5,11.6],fov:56,dof:.04,p:{fov:76}},{eye:[12.4,2.9,11.4],at:[l0,3.2,14.4],fov:52,dof:.06,p:{fov:72}},{eye:[_0+2,1.35,j0-1.5],at:[_0,1.35,j0+.1],fov:42,dof:.12,p:{eye:[_0+1.6,1.4,j0-1.5],fov:62}},{eye:[_0+.85,k0[1]+.12,k0[2]-.35],at:[k0[0],k0[1]-.05,k0[2]],fov:36,dof:.32,p:{fov:52}},{eye:[_0+.75,C0[1]+.06,C0[2]+1.1],at:[_0,C0[1]+.02,C0[2]],fov:44,dof:.22,p:{fov:62}},{eye:[l0/2+.4,2.4,17.6],at:[l0/2,5.4,Le],fov:54,dof:.05,p:{fov:74}},{eye:[l0/2,4.3,nt.z+1.6],at:[l0/2,6,Le],fov:62,dof:.04,p:{fov:82}}],N0=se.length-1;function Te(e,p){let M=e.length-1,q=Math.max(0,Math.min(M,p)),s=Math.min(M-1,Math.floor(q)),n=q-s,t=e[Math.max(0,s-1)],f=e[s],l=e[s+1],c=e[Math.min(M,s+2)],r=n*n,i=r*n;return[0,1,2].map(v=>.5*(2*f[v]+(-t[v]+l[v])*n+(2*t[v]-5*f[v]+4*l[v]-c[v])*r+(-t[v]+3*f[v]-3*l[v]+c[v])*i))}ae.exports=function(){let p=0,M=0,q=null,s=-10,n=0,t=null,f=[],l=(a,z,x)=>{window.addEventListener(a,z,x),f.push([a,z,x])},c=a=>{M=Math.max(0,Math.min(N0,M+a)),s=n},r=a=>{M=Math.max(0,Math.min(N0,Math.round(M)+a)),s=n-10};l("wheel",a=>{if(a.target.closest&&a.target.closest(".st-ui"))return;a.preventDefault();let z=a.deltaMode===1?a.deltaY*16:a.deltaMode===2?a.deltaY*window.innerHeight:a.deltaY;c(Math.max(-.6,Math.min(.6,z/700)))},{passive:!1});let i=null;l("pointerdown",a=>{a.target.closest&&a.target.closest("button, a, .st-ui")||(i={lx:a.clientX,ly:a.clientY,moved:0,t:performance.now()})}),l("pointermove",a=>{if(!i)return;let z=a.clientX-i.lx,x=a.clientY-i.ly;i.lx=a.clientX,i.ly=a.clientY;let g=Math.abs(x)>=Math.abs(z)?-x:-z;i.moved+=Math.abs(g),i.moved>6&&c(g/(window.innerHeight*.55))}),l("pointerup",()=>{let a=i;i=null,a&&a.moved<8&&performance.now()-a.t<450&&r(1)}),l("keydown",a=>{a.key==="ArrowDown"||a.key==="ArrowRight"||a.key==="PageDown"||a.key===" "?r(1):(a.key==="ArrowUp"||a.key==="ArrowLeft"||a.key==="PageUp")&&r(-1)});function v(a){n=a,t===null&&(t=a);let z=q===null?0:Math.min(.1,a-q);q=a,typeof window!="undefined"&&window.__redShot!==void 0&&/tourdebug/.test(location.search)&&(p=M=window.__redShot),n-s>.5&&(M+=(Math.round(M)-M)*(1-Math.exp(-z*3))),p+=(M-p)*(1-Math.exp(-z*2)),Math.abs(M-p)<1e-4&&(p=M);let x=window.innerWidth<window.innerHeight,g=se.map(U=>x&&U.p?Object.assign({},U,U.p):U),h=Math.min(N0-1,Math.floor(p)),b=p-h,w=st(b),S=h+w,T=Te(g.map(U=>U.eye),S),$=Te(g.map(U=>U.at),S),A=g[h],H=g[Math.min(N0,h+1)],K=ze(A.fov,H.fov,w),J=ze(A.dof,H.dof,w),Y=typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:a,X=Math.hypot($[0]-T[0],$[1]-T[1],$[2]-T[2]),P=.01+.03*Math.min(1,X/6);T=[T[0]+Math.sin(Y*.31)*P,T[1]+Math.sin(Y*.43+1)*P*.6,T[2]+Math.cos(Y*.27)*P],$=[$[0]+Math.sin(Y*.21+2)*P*.8,$[1]+Math.sin(Y*.37)*P*.5,$[2]];let e0=Re(T),F=Re($),Q=1-qe((a-t-.3)/1.8);return{eye:e0,target:F,fov:K,roll:Math.sin(Y*.17)*.004,moving:!0,look:{letterbox:.45,focus:X,aperture:J,vignette:.3,exposure:1.45,shafts:1,fade:Q,fadeColor:[0,0,0]}}}function u(){for(let[a,z,x]of f)window.removeEventListener(a,z,x);f.length=0}return{update:v,tap:()=>r(1),dispose:u,placeFlower(){},get scroll(){return p},END:N0}};ae.exports.KEYS=se});window.__redRoom={studio:ee(),tour:Se()};})();

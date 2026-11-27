"use strict";(()=>{var Q0=(e,m)=>()=>(m||e((m={exports:{}}).exports,m),m.exports);var ye=Q0((ft,we)=>{"use strict";var w0=[-90,0,0],ee=16,te=27.5,oe=11.6;we.exports={O:w0,W:ee,L:te,RIDGE:oe,BOX:[w0[0]-.8,0,w0[2]-11.5,w0[0]+ee+.8,oe+.5,w0[2]+te+.8],AIR_BOX:[w0[0],0,w0[2],w0[0]+ee,oe,w0[2]+te]}});var ae=Q0((vt,ne)=>{"use strict";var{O:$,W:_,L:A}=ye(),d=e=>(+e).toFixed(4),B=10.5,F0=.7,be=3,D={hw:1.25,sill:1.35,spring:6.9,n:4,step:6.35};D.z0=A/2-D.step*(D.n-1)/2;D.apex=D.spring+D.hw*Math.sqrt(3);var U0=e=>D.z0+D.step*e;D.leftFrom=2;var K=[];for(let e=0;e<=D.n;e++)K.push(D.z0+D.step*(e-.5));var n0={hw:.75,h:2.6,depth:.7},v0={hw:1.8,h:3.6,z:-11,sign:[_/2,n0.h+.32,-n0.depth-.05],open:2.2},j={z:21.2,G:2.4,models:{sony:{file:"res/redroom/tv_sony.bin",tex:3,w:.36,h:.341,d:.455,dark:.55},crt:{file:"res/redroom/tv_crt.bin",tex:3,w:.47,h:.454,d:.389,dark:.9},old:{file:"res/redroom/tv_old.bin",tex:1,w:.62,h:.418,d:.416,dark:.75}}};j.stack=[["old",0,-1.41,2,.04],["crt",0,.05,-1,-.02],["sony",0,1.24,-2,.06],["crt",1,-1.16,3,.02],["sony",1,-.03,-1,.04],["crt",1,1.14,-3,.06],["sony",2,-.73,2,.06],["old",2,.66,-2,.03],["crt",0,-2.78,3,.08],["sony",1,-2.68,4,.1],["old",0,2.5,-3,.08],["sony",1,2.32,-4,.1]];var He={sony:[0,.194],crt:[0,.27],old:[.0625,.2145]};(()=>{let e=[];for(let m of j.stack){let R=j.models[m[0]],L=m[1],o=m[2],s=R.w*j.G,t=0;for(let a of e)a.row>=L||Math.abs(a.dx-o)<(a.w+s)/2*.92&&(t=Math.max(t,a.top));e.push({dx:o,row:L,w:s,top:t+R.h*j.G*.99}),m.base=t;let l=He[m[0]],r=m[3]*Math.PI/180;m.screen=[_/2+o+l[0]*j.G,t+l[1]*j.G,j.z+m[4]],m.facing=[-Math.sin(r),0,-Math.cos(r)],m.size=R.w*j.G}})();var P=(()=>{let e={top:.92,depth:.78};return e.a=[K[0]+.7,K[1]-.55],e.b=[K[1]+.55,K[2]-.7],e.basin={x0:.08,x1:e.depth-.07,z0:e.a[0]+.1,z1:e.a[1]-.1,floor:e.top-.1},e.TX=.44,e.TZ=.54,e.TH=.075,e.TXc=(e.basin.x0+e.basin.x1)/2,e.trays=[e.a[0]+1.1,e.a[0]+1.72,e.a[0]+2.34],e.liquid=e.basin.floor+.05,e.bulb=[e.TXc+.02,1.39,e.trays[0]+.05],e.tube={x:.07,y:3.05,z0:e.b[0]+.2,z1:e.b[1]-.2},e.lines=[[.32,2.74,K[0],K[1],.12],[.74,2.52,K[0],K[1],.17],[1.1,2.62,K[0],K[1],.2],[.3,2.76,K[1],K[2],.15],[.68,2.46,K[1],K[2],.19],[1.06,2.66,K[1],K[2],.22],[.5,1.98,K[1],K[2],.12]],e})(),N=(()=>{let e={x:_/2-.006,z:14.92,tableK:1.25,pitch:.1};e.table=.761*e.tableK,e.feed=[.0254,.7696,.3364],e.takeup=[.0252,.2484,.337],e.lensL=[.006,.456,.15];let m=Math.cos(e.pitch),R=Math.sin(e.pitch),L=e.lensL;return e.lens=[e.x+L[0],e.table+L[1]*m+L[2]*R,e.z-L[1]*R+L[2]*m],e.img={x:_/2,y:6,w:6.4},e.img.h=e.img.w*.75,e})(),X={x0:4.2,x1:11.8,y:9,z:A-.16},h0={r:.045};(()=>{let e=h0.r,m=P.depth,R=P.b[1]-.22;h0.socket=[m,.3,R],h0.ctrl=[[m+.1,.3,R],[m+.2,.295,R],[m+.3,.22,R+.02],[m+.42,e,R+.1],[m+.8,e,R+.3],[1.8,e,R+.45],[3.4,e,R+.1],[5.2,e,R-.55],[7.2,e,R-.95],[9.4,e,R-.9],[11.4,e,R-.45],[13.2,e,R+.1],[_-1.15,e,R+.55],[_-.85,e,R+1.05],[_-.85,e,15.2],[_-1.1,e,16.3],[_-1.7,e,17.2],[_-2.5,e,17.9],[12.9,e,18.5],[11.5,e,18.9],[10.6,e,19.5],[10.5,e,20.3],[11.2,e,20.5],[10.9,e,19.95],[10,e*2.2,20.1],[9.3,e,20.75],[9.5,e,21.9],[8.6,e,22.25],[8.1,.22,21.95]];let L=h0.ctrl,o=[];for(let l=0;l<L.length-1;l++){let r=L[Math.max(0,l-1)],a=L[l],i=L[l+1],c=L[Math.min(L.length-1,l+2)],v=Math.max(2,Math.ceil(Math.hypot(i[0]-a[0],i[1]-a[1],i[2]-a[2])/.06));for(let w=0;w<v;w++){let u=w/v,M=u*u,h=M*u;o.push([0,1,2].map(f=>.5*(2*a[f]+(-r[f]+i[f])*u+(2*r[f]-5*a[f]+4*i[f]-c[f])*M+(-r[f]+3*a[f]-3*i[f]+c[f])*h)))}}o.push(L[L.length-1].slice());for(let l of o)l[1]<e&&l[2]>-1.4&&(l[1]=e);h0.path=o;let s=o.findIndex(l=>l[1]<=e*1.01),t=o.findIndex((l,r)=>r>s&&l[0]>_-1.3);h0.run=[s,t]})();var y0={spots:[],w:.36,h:.435,n:36,lines:[{z:A-1.7,y:6.5,sag:1},{z:A-2.6,y:5.3,sag:.8}]},c0=(()=>{let e=[-.62,.75,-.16],m=Math.hypot(...e);return e.map(R=>R/m)})(),R0=(()=>{let e=_/2;return(e*e+be*be)/(2*e)})(),z0=e=>{let m=e<=_/2?e:_-e;return B+Math.sqrt(Math.max(0,R0*R0-(m-R0)*(m-R0)))},b={FLOOR:0,WALL:1,REVEAL:2,GLASS:3,VAULT:4,TRIM:5,VOID:6,TUBE:7,CABLE:8,TILE:9,STEEL:10,PEG:11,CONC:12,CFLOOR:13,DOOR:14};function Re(){let e=[],m=[],R=[],L=[],o=[],s={pos:e,nrm:m,kind:R,uv:L,idx:o,v(t,l,r,a){return e.push(t[0]+$[0],t[1]+$[1],t[2]+$[2]),m.push(l[0],l[1],l[2]),R.push(r),L.push(a?a[0]:0,a?a[1]:0),e.length/3-1},quad(t,l,r,a,i,c,v,w,u,M){let h=s.v(t,i,c,v),f=s.v(l,i,c,w),p=s.v(r,i,c,u),y=s.v(a,i,c,M);o.push(h,f,p,h,p,y)},box(t,l,r,a,i,c,v){s.quad([t,l,c],[a,l,c],[a,i,c],[t,i,c],[0,0,1],v),s.quad([a,l,r],[t,l,r],[t,i,r],[a,i,r],[0,0,-1],v),s.quad([a,l,c],[a,l,r],[a,i,r],[a,i,c],[1,0,0],v),s.quad([t,l,r],[t,l,c],[t,i,c],[t,i,r],[-1,0,0],v),s.quad([t,i,c],[a,i,c],[a,i,r],[t,i,r],[0,1,0],v),s.quad([t,l,r],[a,l,r],[a,l,c],[t,l,c],[0,-1,0],v)},cyl(t,l,r,a,i,c,v){v=v||18;for(let w=0;w<v;w++){let u=w/v*Math.PI*2,M=(w+1)/v*Math.PI*2,h=[Math.sin(u),0,Math.cos(u)],f=[Math.sin(M),0,Math.cos(M)],p=(x,q)=>[t+x[0]*r,q,l+x[2]*r],y=s.v(p(h,a),h,c),g=s.v(p(f,a),f,c),k=s.v(p(f,i),f,c),I=s.v(p(h,i),h,c);o.push(y,g,k,y,k,I)}}};return s}function l0(e,m,R,L,o){let s=null,t=null,l=[];for(let r=0;r<m.length;r++){let a=m[Math.max(0,r-1)],i=m[Math.min(m.length-1,r+1)],c=[i[0]-a[0],i[1]-a[1],i[2]-a[2]],v=Math.hypot(...c)||1;c=c.map(f=>f/v),t||(t=Math.abs(c[1])<.9?[0,1,0]:[1,0,0]);let w=t[0]*c[0]+t[1]*c[1]+t[2]*c[2];t=[t[0]-c[0]*w,t[1]-c[1]*w,t[2]-c[2]*w];let u=Math.hypot(...t)||1;t=t.map(f=>f/u);let M=[c[1]*t[2]-c[2]*t[1],c[2]*t[0]-c[0]*t[2],c[0]*t[1]-c[1]*t[0]],h=[];for(let f=0;f<L;f++){let p=f/L*Math.PI*2,y=Math.cos(p),g=Math.sin(p),k=[t[0]*y+M[0]*g,t[1]*y+M[1]*g,t[2]*y+M[2]*g];h.push(e.v([m[r][0]+k[0]*R,m[r][1]+k[1]*R,m[r][2]+k[2]*R],k,o,[r,f]))}if(s)for(let f=0;f<L;f++){let p=(f+1)%L;e.idx.push(s[f],s[p],h[p],s[f],h[p],h[f])}s=h,l.push(h)}}var Me=(e,m)=>[e[0],e[1]-e[4]*4*m*(1-m),e[2]+.35+(e[3]-e[2]-.7)*m];function Fe(e,m,R){let L=[[-e,m],[-e,R]],o=2*e,s=14;for(let t=1;t<=s;t++){let l=Math.PI-t/s*(Math.PI/3);L.push([e+o*Math.cos(l),R+o*Math.sin(l)])}for(let t=1;t<=s;t++){let l=Math.PI/3-t/s*(Math.PI/3);L.push([-e+o*Math.cos(l),R+o*Math.sin(l)])}return L.push([e,m]),L}function _e(e,m,R,L,o,s,t){let l=o?m.length:m.length-1;for(let r=0;r<l;r++){let a=m[r],i=m[(r+1)%m.length],c=i[0]-a[0],w=-(i[1]-a[1]),u=c,M=Math.hypot(w,u)||1;w/=M,u/=M;let h=(a[0]+i[0])/2-t[0],f=(a[1]+i[1])/2-t[1];w*h+u*f>0&&(w=-w,u=-u);let p=L(w,u,0,!0);e.quad(L(a[0],a[1],0),L(i[0],i[1],0),L(i[0],i[1],R),L(a[0],a[1],R),p,s,[a[0],a[1]],[i[0],i[1]],[i[0],i[1]],[a[0],a[1]])}}function Ue(){let e=Re();e.quad([0,0,0],[0,0,A],[_,0,A],[_,0,0],[0,1,0],b.FLOOR),e.quad([0,0,A],[0,0,0],[0,B,0],[0,B,A],[1,0,0],b.WALL,[A,0],[0,0],[0,B],[A,B]),e.quad([_,0,0],[_,0,A],[_,B,A],[_,B,0],[-1,0,0],b.WALL,[0,0],[A,0],[A,B],[0,B]);let m=24;for(let o of[0,1]){let s=o?A:0,t=[0,0,o?-1:1];for(let l=0;l<m;l++){let r=l/m*_,a=(l+1)/m*_,i=[r,0,s],c=[a,0,s],v=[a,z0(a),s],w=[r,z0(r),s];o?e.quad(c,i,w,v,t,b.WALL,[a,0],[r,0],[r,w[1]],[a,v[1]]):e.quad(i,c,v,w,t,b.WALL,[r,0],[a,0],[a,v[1]],[r,w[1]])}}let R=40;for(let o=0;o<R;o++){let s=o/R*_,t=(o+1)/R*_,l=z0(s),r=z0(t),a=(h,f)=>{let p=h<=_/2?h:_-h,y=(R0-p)/R0,g=(B-f)/R0;return h>_/2&&(y=-y),[y,g,0]},i=a(s,l),c=a(t,r),v=e.v([s,l,0],i,b.VAULT,[s,0]),w=e.v([t,r,0],c,b.VAULT,[t,0]),u=e.v([t,r,A],c,b.VAULT,[t,A]),M=e.v([s,l,A],i,b.VAULT,[s,A]);e.idx.push(v,w,u,v,u,M)}let L=Fe(D.hw,D.sill,D.spring);for(let o=0;o<D.n;o++){let s=U0(o),t=o>=D.leftFrom;t&&_e(e,L,F0,(c,v,w,u)=>u?[0,v,c]:[-w,v,s+c],!0,b.REVEAL,[0,(D.sill+D.apex)/2]),_e(e,L,F0,(c,v,w,u)=>u?[0,v,c]:[_+w,v,s+c],!0,b.REVEAL,[0,(D.sill+D.apex)/2]);let l=F0*.55,r=D.sill-.02,a=D.apex+.02,i=D.hw+.02;t&&e.quad([-l,r,s+i],[-l,r,s-i],[-l,a,s-i],[-l,a,s+i],[1,0,0],b.GLASS,[i,r],[-i,r],[-i,a],[i,a]),e.quad([_+l,r,s-i],[_+l,r,s+i],[_+l,a,s+i],[_+l,a,s-i],[-1,0,0],b.GLASS,[-i,r],[i,r],[i,a],[-i,a]),t&&e.box(-.02,D.sill-.12,s-D.hw-.18,.12,D.sill,s+D.hw+.18,b.TRIM),e.box(_-.12,D.sill-.12,s-D.hw-.18,_+.02,D.sill,s+D.hw+.18,b.TRIM)}{let o=_/2-n0.hw,s=_/2+n0.hw,t=n0.h,l=n0.depth;e.quad([o,0,-l],[o,0,0],[o,t,0],[o,t,-l],[1,0,0],b.REVEAL),e.quad([s,0,0],[s,0,-l],[s,t,-l],[s,t,0],[-1,0,0],b.REVEAL),e.quad([o,t,0],[s,t,0],[s,t,-l],[o,t,-l],[0,-1,0],b.REVEAL),e.quad([o,.001,-l],[s,.001,-l],[s,.001,0],[o,.001,0],[0,1,0],b.CFLOOR);let r=_/2-v0.hw,a=_/2+v0.hw,i=v0.h,c=v0.z;e.quad([r,0,c],[r,0,-l],[a,0,-l],[a,0,c],[0,1,0],b.CFLOOR),e.quad([r,0,-l],[r,0,c],[r,i,c],[r,i,-l],[1,0,0],b.CONC,[-l,0],[c,0],[c,i],[-l,i]),e.quad([a,0,c],[a,0,-l],[a,i,-l],[a,i,c],[-1,0,0],b.CONC,[c,0],[-l,0],[-l,i],[c,i]),e.quad([r,i,c],[r,i,-l],[a,i,-l],[a,i,c],[0,-1,0],b.CONC,[c,0],[-l,0],[-l,1],[c,1]),e.quad([a,0,c],[r,0,c],[r,i,c],[a,i,c],[0,0,1],b.CONC,[0,0],[1,0],[1,i],[0,i]);let v=-l;e.quad([r,0,v],[o,0,v],[o,i,v],[r,i,v],[0,0,-1],b.CONC,[r,0],[o,0],[o,i],[r,i]),e.quad([s,0,v],[a,0,v],[a,i,v],[s,i,v],[0,0,-1],b.CONC,[s,0],[a,0],[a,i],[s,i]),e.quad([o,t,v],[s,t,v],[s,i,v],[o,i,v],[0,0,-1],b.CONC,[o,t],[s,t],[s,i],[o,i]);let w=o,u=v-.01,M=v0.open,h=n0.hw*2-.04,f=.045,p=[Math.cos(M),0,-Math.sin(M)],y=[Math.sin(M),0,Math.cos(M)],g=(E,W,Z)=>[w+p[0]*E+y[0]*Z,W,u+p[2]*E+y[2]*Z],k=.012,I=t-.02;e.quad(g(0,k,f),g(h,k,f),g(h,I,f),g(0,I,f),y,b.DOOR),e.quad(g(h,k,0),g(0,k,0),g(0,I,0),g(h,I,0),y.map(E=>-E),b.DOOR),e.quad(g(h,k,f),g(h,k,0),g(h,I,0),g(h,I,f),p,b.DOOR),e.quad(g(0,I,f),g(h,I,f),g(h,I,0),g(0,I,0),[0,1,0],b.DOOR);let x=g(h-.09,1.02,f+.03);l0(e,[g(h-.09,1.02,f),x,[x[0]-p[0]*.12,x[1],x[2]-p[2]*.12]],.011,6,b.STEEL);let q=v0.sign;e.box(q[0]-.33,q[1]-.12,q[2]-.02,q[0]+.33,q[1]+.12,v,b.TRIM)}for(let o of K){for(let r of[.2,_-.2])e.box(r-.42,0,o-.42,r+.42,.5,o+.42,b.TRIM),e.cyl(r,o,.27,.5,B-.55,b.TRIM),e.cyl(r+(r<_/2?.2:-.2),o-.36,.1,.5,B-.55,b.TRIM,10),e.cyl(r+(r<_/2?.2:-.2),o+.36,.1,.5,B-.55,b.TRIM,10),e.box(r-.45,B-.55,o-.5,r+.45,B-.25,o+.5,b.TRIM);let s=40,t=.22,l=.22;for(let r=0;r<s;r++){let a=r/s*_,i=(r+1)/s*_,c=z0(a),v=z0(i),w=[_/2-a,-(c-B+2),0],u=[_/2-i,-(v-B+2),0],M=g=>{let k=Math.hypot(g[0],g[1])||1;return[g[0]/k,g[1]/k,0]},h=M(w),f=M(u),p=[a+h[0]*l,c+h[1]*l],y=[i+f[0]*l,v+f[1]*l];e.quad([p[0],p[1],o-t],[y[0],y[1],o-t],[y[0],y[1],o+t],[p[0],p[1],o+t],h,b.TRIM),e.quad([a,c,o-t],[i,v,o-t],[y[0],y[1],o-t],[p[0],p[1],o-t],[0,0,-1],b.TRIM),e.quad([i,v,o+t],[a,c,o+t],[p[0],p[1],o+t],[y[0],y[1],o+t],[0,0,1],b.TRIM)}}{let o=P,s=o.top,t=o.basin,l=(w,u,M)=>{if(e.box(0,0,w,o.depth-.06,.12,u,b.TRIM),e.quad([o.depth,.12,w],[o.depth,.12,u],[o.depth,s,u],[o.depth,s,w],[1,0,0],b.TILE,[w,.12],[u,.12],[u,s],[w,s]),e.quad([0,.12,w],[o.depth,.12,w],[o.depth,s,w],[0,s,w],[0,0,-1],b.TILE,[0,.12],[o.depth,.12],[o.depth,s],[0,s]),e.quad([o.depth,.12,u],[0,.12,u],[0,s,u],[o.depth,s,u],[0,0,1],b.TILE,[o.depth,.12],[0,.12],[0,s],[o.depth,s]),!M){e.quad([0,s,w],[0,s,u],[o.depth,s,u],[o.depth,s,w],[0,1,0],b.TILE,[0,w],[0,u],[o.depth,u],[o.depth,w]);return}let h=(f,p,y,g)=>e.quad([f,s,y],[f,s,g],[p,s,g],[p,s,y],[0,1,0],b.TILE,[f,y],[f,g],[p,g],[p,y]);h(0,t.x0,w,u),h(t.x1,o.depth,w,u),h(t.x0,t.x1,w,t.z0),h(t.x0,t.x1,t.z1,u),e.quad([t.x0,t.floor,t.z0],[t.x0,t.floor,t.z1],[t.x1,t.floor,t.z1],[t.x1,t.floor,t.z0],[0,1,0],b.TILE,[t.x0,t.z0],[t.x0,t.z1],[t.x1,t.z1],[t.x1,t.z0]),e.quad([t.x0,t.floor,t.z1],[t.x0,t.floor,t.z0],[t.x0,s,t.z0],[t.x0,s,t.z1],[1,0,0],b.TILE,[t.z1,t.floor],[t.z0,t.floor],[t.z0,s],[t.z1,s]),e.quad([t.x1,t.floor,t.z0],[t.x1,t.floor,t.z1],[t.x1,s,t.z1],[t.x1,s,t.z0],[-1,0,0],b.TILE,[t.z0,t.floor],[t.z1,t.floor],[t.z1,s],[t.z0,s]),e.quad([t.x0,t.floor,t.z0],[t.x1,t.floor,t.z0],[t.x1,s,t.z0],[t.x0,s,t.z0],[0,0,1],b.TILE,[t.x0,t.floor],[t.x1,t.floor],[t.x1,s],[t.x0,s]),e.quad([t.x1,t.floor,t.z1],[t.x0,t.floor,t.z1],[t.x0,s,t.z1],[t.x1,s,t.z1],[0,0,-1],b.TILE,[t.x1,t.floor],[t.x0,t.floor],[t.x0,s],[t.x1,s])};l(o.a[0],o.a[1],!0),l(o.b[0],o.b[1],!1);for(let[w,u]of[o.a,o.b])e.quad([.012,s,u],[.012,s,w],[.012,s+.62,w],[.012,s+.62,u],[1,0,0],b.TILE,[u,s],[w,s],[w,s+.62],[u,s+.62]);let r=w=>{let u=t.floor+.004,M=u+o.TH,h=o.TX/2,f=o.TZ/2,p=.02,y=o.TXc,g=[[y-h+p,w-f+p],[y+h-p,w-f+p],[y+h-p,w+f-p],[y-h+p,w+f-p]],k=[[y-h,w-f],[y+h,w-f],[y+h,w+f],[y-h,w+f]];e.quad([g[0][0],u,g[0][1]],[g[3][0],u,g[3][1]],[g[2][0],u,g[2][1]],[g[1][0],u,g[1][1]],[0,1,0],b.STEEL);for(let I=0;I<4;I++){let x=(I+1)%4,q=[g[I][0],u,g[I][1]],E=[g[x][0],u,g[x][1]],W=[k[x][0],M,k[x][1]],Z=[k[I][0],M,k[I][1]],t0=(g[I][0]+g[x][0])/2-y,Y=(g[I][1]+g[x][1])/2-w,C=Math.hypot(t0,Y)||1;e.quad(q,E,W,Z,[-t0/C*.95,.3,-Y/C*.95],b.STEEL),e.quad(E,q,[Z[0],u+.001,Z[2]],[W[0],u+.001,W[2]],[t0/C,0,Y/C],b.STEEL)}l0(e,[...k,k[0]].map(I=>[I[0],M+.004,I[1]]),.005,5,b.STEEL)};for(let w of o.trays)r(w);let a=(w,u,M,h,f,p)=>{for(let y of[-.012,.012])l0(e,[[w,f,u+y],[(w+M)/2,(f+p)/2+.006,(u+h)/2+y*.6],[M,p,h+y*.2]],.0045,5,b.PEG)};a(o.TXc+.05,o.trays[0]+.12,o.TXc+.27,o.trays[0]+.42,o.liquid-.005,o.top+.03),a(o.TXc-.1,o.trays[2]-.2,o.TXc+.24,o.trays[2]-.05,o.liquid+.002,o.liquid+o.TH*.9);let i=t.z1-.3;l0(e,[[0,1.32,i],[.18,1.32,i],[.27,1.3,i],[.32,1.22,i],[.33,1.12,i]],.016,8,b.STEEL),e.box(0,1.27,i-.05,.05,1.37,i+.05,b.STEEL);let c=P.bulb;l0(e,[[0,2.32,c[2]],[c[0]*.6,2.32,c[2]],[c[0],2.28,c[2]]],.012,6,b.TRIM),e.box(0,2.24,c[2]-.06,.03,2.4,c[2]+.06,b.TRIM),l0(e,[[c[0],2.28,c[2]],[c[0]+.004,1.9,c[2]+.003],[c[0],c[1]+.2,c[2]]],.004,5,b.CABLE);let v=P.tube;l0(e,[[v.x+.02,v.y,v.z0],[v.x+.02,v.y,(v.z0+v.z1)/2],[v.x+.02,v.y,v.z1]],.035,10,b.TUBE),e.box(0,v.y-.05,v.z0-.06,.07,v.y+.05,v.z0-.01,b.TRIM),e.box(0,v.y-.05,v.z1+.01,.07,v.y+.05,v.z1+.06,b.TRIM);for(let w of P.lines){let u=[];for(let M=0;M<=24;M++){let h=M/24;u.push(Me(w,h))}l0(e,u,.0035,5,b.CABLE);for(let M of[u[0],u[24]])l0(e,[[0,M[1]+.05,M[2]],[M[0]*.5,M[1]+.02,M[2]],[M[0]+.02,M[1],M[2]]],.007,5,b.TRIM)}}j.stack.forEach((o,s)=>{let t=j.models[o[0]],l=j.G,r=_/2+o[2],a=j.z+o[4]+t.d*l*.85,i=o.base+.12*l,c=_/2+(s%3-1)*.5,v=j.z+2.3+s%4*.12;l0(e,[[r,i,a-.05],[r+.05,i-.02,a+.15],[r+.1,Math.max(.02,i*.4),a+.35],[r*.6+c*.4,.018,a+.6],[c,.018,v]],.012,6,b.CABLE)}),l0(e,h0.path,h0.r,16,b.CABLE);{let[o,s,t]=h0.socket;e.box(o,s-.07,t-.07,o+.018,s+.07,t+.07,b.STEEL),e.box(o+.018,s-.035,t-.032,o+.11,s+.035,t+.032,b.TRIM),e.box(o,s+.042,t+.035,o+.03,s+.058,t+.051,b.TUBE)}e.box(X.x0-.08,X.y-.07,A-.08,X.x0-.02,X.y+.07,A,b.TRIM),e.box(X.x1+.02,X.y-.07,A-.08,X.x1+.08,X.y+.07,A,b.TRIM),l0(e,[[X.x0-.02,X.y,X.z],[(X.x0+X.x1)/2,X.y,X.z],[X.x1+.02,X.y,X.z]],.045,10,b.TUBE);for(let o of[0,1]){let s=o?_-.06:0,t=o?_:.06;e.box(s,0,0,t,.24,A,b.TRIM),e.box(o?_-.05:0,1,0,o?_:.05,1.08,A,b.TRIM);let l=o?_-.32:0,r=o?_:.32;e.box(l,B-.25,0,r,B+.08,A,b.TRIM)}for(let o of[0,1]){let s=o?A-.06:0,t=o?A:.06;o?e.box(0,0,s,_,.24,t,b.TRIM):(e.box(0,0,s,_/2-n0.hw,.24,t,b.TRIM),e.box(_/2+n0.hw,0,s,_,.24,t,b.TRIM));let l=o?A-.32:0,r=o?A:.32;e.box(0,B-.25,l,_,B+.08,r,b.TRIM)}return e}function Be(){let e=7,m=()=>(e=e*16807%2147483647,(e-1)/2147483646),R=[],L=[],o=[],s=[],t=[],l=[],r=[],a=3,i=4,c=(p,y,g,k,I,x,q,E,W)=>{let Z=y0.w*I,t0=y0.h*I,Y=R.length/3;for(let C=0;C<=i;C++)for(let H=0;H<=a;H++){let U=H/a,J=C/i,o0=(U-.5)*Z,s0=(J-.5)*t0,f0=E*((U-.5)*(U-.5)*4+(1-J)*(1-J)*.6);R.push($[0]+p[0]+y[0]*o0+g[0]*s0+k[0]*f0,$[1]+p[1]+y[1]*o0+g[1]*s0+k[1]*f0,$[2]+p[2]+y[2]*o0+g[2]*s0+k[2]*f0),L.push(k[0],k[1],k[2]),o.push(U,J),s.push(x),r.push(W||0),t.push(q[0]+$[0],q[1]+$[1],q[2]+$[2],q[3])}for(let C=0;C<i;C++)for(let H=0;H<a;H++){let U=Y+C*(a+1)+H,J=U+1,o0=U+a+1,s0=o0+1;l.push(U,J,s0,U,s0,o0)}},v=(p,y,g)=>{let k=Math.cos(g),I=Math.sin(g);return[p.map((x,q)=>x*k+y[q]*I),y.map((x,q)=>-p[q]*I+x*k)]},w=[0,0,0,0],u=0,M=(p,y,g,k,I,x,q,E,W)=>{let Y=0;for(let C=x;C<q;C+=.48)for(let H=k;H<I;H+=.4){let U=H+(m()-.5)*.4*.7,J=C+(m()-.5)*.48*.6;if(m()>E(U,J))continue;let[o0,s0]=v(g,[0,1,0],(m()-.5)*.5),f0=p(U,J,.012+.0016*(Y++%9)+m()*.004),i0=.88+m()*.3;c(f0,o0,s0,y,i0,Math.floor(m()*y0.n),w,(m()-.3)*.02),y0.spots.length<400&&y0.spots.push({c:f0,n:y,up:s0,size:y0.h*i0}),u++}},h=(p,y,g)=>Math.exp(-Math.pow((p-y)/g,2));for(let p=0;p<D.n-1;p++){let y=K[p+1],g=[[U0(p)+D.hw+.32,y-.66],[y+.66,U0(p+1)-D.hw-.32]];for(let[k,I]of g){let x=(q,E)=>.85*h(E,3.4,1.7);I>P.b[1]+.3&&M((q,E,W)=>[W,E,q],[1,0,0],[0,0,-1],k,I,1.45,6.3,x),M((q,E,W)=>[_-W,E,q],[-1,0,0],[0,0,1],k,I,1.45,6.3,x)}}let f=[];for(let p of P.lines){let y=p[3]-p[2]-.7;for(let g=.18;g<y-.1;g+=.3+m()*.14){let k=g/y,I=Me(p,k);if(m()<.1||Math.abs(I[2]-P.bulb[2])<.4&&I[1]>2.3)continue;let x=.56+m()*.14,q=y0.h*x,E=(m()-.5)*.7,W=m()<.3?m()<.5?-.75:.75:E,[Z,t0]=v([0,0,-1],[0,1,0],W),Y=[1,0,0],C=[I[0]+.004,I[1]-.02-t0[1]*q*.5,I[2]-t0[2]*q*.5];c(C,Z,t0,Y,x,Math.floor(m()*y0.n),[I[0],I[1],I[2],-(.04+m()*.06)],.01+m()*.025,1),f.push(I),u++}}return{pos:R,nrm:L,uv:o,pic:s,piv:t,idx:l,sty:r,pegs:f,count:u}}var b0=`
	const float RW = ${d(_)}, RL = ${d(A)}, RH = ${d(B)}, RT = ${d(F0)};
	const float HW = ${d(D.hw)}, SILL = ${d(D.sill)}, SPRING = ${d(D.spring)};
	const float WZ0 = ${d(D.z0)}, WSTEP = ${d(D.step)};
	const vec3 RO = vec3(${d($[0])}, ${d($[1])}, ${d($[2])});
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
	float winIdx(float z) { return clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${d(D.n-1)}); }
	// (on the left, the first windows are walled up)
	float leftOpen(float z) { return step(${d(D.leftFrom-.5)}, winIdx(z)); }
	vec2 winLocal(float z, float y) {
		float i = clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${d(D.n-1)});
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
`;function Ke(){return`
	#define STUDIO_SUN ${"vec3("+d(c0[0])+", "+d(c0[1])+", "+d(c0[2])+")"}
	#define STUDIO_SUN2 ${"vec3("+d(-c0[0])+", "+d(c0[1])+", "+d(c0[2])+")"}
	#define SHAFT_TINT vec3(0.6, 0.012, 0.008)
	#define STUDIO_AIR_EVEN
	${b0}
	float studioSun(vec3 p) {
		vec3 lp = p - RO;
		if (lp.x < 0.0 || lp.x > RW || lp.z < 0.0 || lp.z > RL || lp.y > RH + 2.0) return 0.0;
		vec3 c = redLightAir(lp);
		return dot(c, vec3(0.7, 0.2, 0.1)) * 3.2;
	}`}var Le=`
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
	}`,D0=`
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
		vec2 su = clamp((floor(uv * vec2(210.0, 158.0)) + 0.5) / vec2(210.0, 158.0), 0.01, 0.99);
		vec2 tile = vec2(mod(k, 6.0), floor(k / 6.0));
		vec3 pc = vec3(0.0);
		for (int i = 0; i < 5; i++) {
			vec2 o = i == 0 ? vec2(0.0) : vec2(i == 1 ? 1.0 : (i == 2 ? -1.0 : 0.0), i == 3 ? 1.0 : (i == 4 ? -1.0 : 0.0)) * 0.0065;
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
		vec3 c = mix(vec3(l), pcol * (l / max(l0, 0.02)), 0.28 * (1.0 - gap));
		return vec3(1.0, 0.86, 0.66) * max(c, 0.0) * vig;
	}
	// where a point in the room is in the projected picture (x, y in 0..1;
	// z: how far along the beam, 0 at the lens, 1 at the wall)
	vec3 projUV(vec3 lp) {
		vec3 L0 = vec3(${d(N.lens[0])}, ${d(N.lens[1])}, ${d(N.lens[2])});
		vec3 d = lp - L0;
		float s = (${d(A-.005)} - L0.z) / max(d.z, 1e-4);
		vec3 h = L0 + d * s;
		return vec3(1.0 - (h.x - ${d(N.img.x-N.img.w/2)}) / ${d(N.img.w)}, (h.y - ${d(N.img.y-N.img.h/2)}) / ${d(N.img.h)}, 1.0 / s);
	}
	// the televisions stand in the beam's way: their shadows on the picture
	uniform vec3 tvLo[12], tvHi[12];
	float projShadow(vec3 lp) {
		vec3 L0 = vec3(${d(N.lens[0])}, ${d(N.lens[1])}, ${d(N.lens[2])});
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
		vec3 c = vec3(clamp(lp.x, ${d(X.x0)}, ${d(X.x1)}), ${d(X.y)}, ${d(X.z)});
		vec3 d = c - lp;
		float dd = dot(d, d);
		float face = 0.25 + 0.75 * max(0.0, dot(N, normalize(d)));
		return vec3(1.0, 0.06, 0.045) * 2.6 * face / (1.0 + dd * 0.055);
	}
	// the darkroom: the bare red bulb over the trays, the tube over the lines
	vec3 darkLight(vec3 lp, vec3 N) {
		vec3 d = vec3(${d(P.bulb[0])}, ${d(P.bulb[1])}, ${d(P.bulb[2])}) - lp;
		float dd = dot(d, d);
		vec3 c = vec3(1.0, 0.07, 0.04) * 1.15 * (0.2 + 0.8 * max(0.0, dot(N, normalize(d)))) / (0.02 + dd * 2.2);
		vec3 tq = vec3(${d(P.tube.x+.02)}, ${d(P.tube.y)}, clamp(lp.z, ${d(P.tube.z0)}, ${d(P.tube.z1)}));
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

`,ze=`
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, yScale, mirrorOn, reflOn;
	uniform sampler2D reflTex;
	uniform vec2 reflSize;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${b0}

	const float DHW = ${d(n0.hw)}, DH = ${d(n0.h)};

	${D0}

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
				vec3 bd = normalize(vec3(${d(P.bulb[0])}, ${d(P.bulb[1])}, ${d(P.bulb[2])}) - lp);
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
	}`,Xe=`
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
	}`,Ye=`
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, sigTime, yScale, seed, dark, nMem, emit;
	uniform sampler2D bodyTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_flag;
	${b0}
	${D0}

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
		vec2 mu = clamp((floor((q + 0.5) * vec2(150.0, 112.0)) + 0.5) / vec2(150.0, 112.0), 0.002, 0.998);
		vec2 tile = vec2(mod(k, 6.0), floor(k / 6.0));
		vec2 au = (tile + vec2(mu.x, 1.0 - mu.y)) / 6.0;
		vec2 ca = vec2(0.004 + 0.01 * band, 0.0) / 6.0;
		vec3 m = vec3(texture2D(memTex, au + ca).r, texture2D(memTex, au).g, texture2D(memTex, au - ca).b);
		// drained and darkened, the shadows crushed
		float l = lum(m);
		l = pow(clamp(l * 1.1, 0.0, 1.0), 1.3);
		vec3 mono = vec3(l);
		// washed red, or cold and grey
		float red = step(0.62, rhash(vec2(seg, 7.0 + seed)));
		vec3 tint = mix(vec3(0.78, 0.86, 0.95), vec3(1.15, 0.28, 0.22), red);
		m = mix(mono * tint, mix(vec3(l), m, 0.5) * 1.05, 0.22);
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
				vec3 Lp = normalize(vec3(${d(N.lens[0])}, ${d(N.lens[1])}, ${d(N.lens[2])}) - lp);
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
	}`,Ze=`
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
	}`,Je=`
	precision highp float;
	uniform float time, yScale;
	uniform sampler2D polTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_pic, v_style;
	${b0}
	${D0}
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
	}`,Qe=`
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
	}`,et=`
	precision highp float;
	uniform float time;
	varying vec3 v_pos, v_eye;
	varying float v_layer;
	${b0}
	${D0}
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
	}`,tt=`
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
	}`,ot=`
	precision highp float;
	uniform float time;
	uniform sampler2D printTex, polTex;
	varying vec3 v_pos, v_eye;
	varying float v_tray;
	${b0}
	${D0}
	const vec3 BULB = vec3(${d(P.bulb[0])}, ${d(P.bulb[1])}, ${d(P.bulb[2])});
	void main() {
		vec3 lp = v_pos - RO;
		int k = int(v_tray + 0.5);
		float zc = k == 0 ? ${d(P.trays[0])} : (k == 1 ? ${d(P.trays[1])} : ${d(P.trays[2])});
		vec2 tl = vec2(lp.x - ${d(P.TXc)}, lp.z - zc);
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
	}`,st=`
	precision highp float;
	uniform mat4 proj, view;
	uniform float time, pxScale;
	attribute vec4 seed;
	varying float v_b, v_w;
	${b0}
	void main() {
		vec3 lp = vec3(0.3 + seed.x * (RW - 0.6), 0.2 + seed.y * (RH - 0.5), 0.3 + seed.z * (RL - 0.6));
		float t = time * (0.03 + 0.03 * seed.w);
		lp += vec3(sin(t * 3.1 + seed.w * 40.0) * 0.35, sin(t * 1.7 + seed.x * 30.0) * 0.4 - t * 0.6, cos(t * 2.3 + seed.z * 50.0) * 0.35);
		lp.y = 0.2 + mod(lp.y - 0.2, RH - 0.5);
		vec3 c = redLightAir(lp);
		v_b = dot(c, vec3(0.6, 0.3, 0.1));
		// and in the projector's beam, lit warm
		vec3 L0 = vec3(${d(N.lens[0])}, ${d(N.lens[1])}, ${d(N.lens[2])});
		vec3 dd = lp - L0;
		float s = (${d(A)} - L0.z) / max(dd.z, 1e-4);
		vec3 hh = L0 + dd * s;
		vec2 pu = vec2((hh.x - ${d(N.img.x-N.img.w/2)}) / ${d(N.img.w)}, (hh.y - ${d(N.img.y-N.img.h/2)}) / ${d(N.img.h)});
		v_w = (dd.z > 0.2 && pu.x > 0.0 && pu.x < 1.0 && pu.y > 0.0 && pu.y < 1.0) ? 1.6 : 0.0;
		vec4 v = view * vec4(lp + RO, 1.0);
		gl_Position = proj * v;
		float tw = 0.6 + 0.4 * sin(time * (1.0 + seed.w * 2.0) + seed.x * 80.0);
		v_b *= tw;
		gl_PointSize = clamp(pxScale * (0.012 + 0.012 * seed.w) / max(0.2, -v.z), 1.0, 6.0);
	}`,nt=`
	precision highp float;
	varying float v_b, v_w;
	void main() {
		vec2 d = gl_PointCoord - 0.5;
		float a = smoothstep(0.5, 0.0, length(d));
		gl_FragColor = vec4((vec3(1.0, 0.14, 0.09) * min(v_b, 1.4) + vec3(1.0, 0.8, 0.55) * v_w) * a * 0.55, 1.0);
	}`;ne.exports=function(e){let m=Ue(),R={position:e.buffer(m.pos),normal:e.buffer(m.nrm),kind:e.buffer(m.kind),uv:e.buffer(m.uv)},L=e.elements({data:m.idx.length>65535?new Uint32Array(m.idx):new Uint16Array(m.idx),type:m.idx.length>65535?"uint32":"uint16"}),o=e.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),s=e.framebuffer({color:o,depth:!0}),t=e({framebuffer:s}),l=e.texture({width:1,height:1,data:[0,0,0,255]}),r=e({}),a=l,i=0,c=0,v=!1,w=[4,4],u=[0,0,0,0],M=null,h=e.texture({width:1,height:1,data:[0,0,0,255]}),f=1,p=n=>{let S=V=>{let F=Math.sin(V*127.1)*43758.5453;return F-Math.floor(F)},T=Math.floor(n*9),z=S(T),O=S(Math.floor(n*.7)),G=.92+.08*Math.sin(n*120);return O>.55&&z>.6&&(G=z>.85?.08:.45),G},y={signK:()=>f,memTex:()=>M||h,projT:n=>typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:n.time};j.stack.forEach((n,S)=>{let T=j.models[n[0]],z=j.G;y["tvLo["+S+"]"]=[_/2+n[2]-T.w*z/2,n.base,j.z+n[4]-.02],y["tvHi["+S+"]"]=[_/2+n[2]+T.w*z/2,n.base+T.h*z,j.z+n[4]+T.d*z]});let g=e({vert:Le,frag:ze,attributes:R,elements:L,cull:{enable:!1},uniforms:{reflTex:()=>a,reflSize:()=>w,reflOn:()=>i,tvLight:()=>u,...y}}),k=n=>new Promise((S,T)=>{let z=new Image,O=G=>(G&G-1)===0;z.onload=()=>S(e.texture({data:z,min:O(z.width)&&O(z.height)?"mipmap":"linear",mag:"linear",wrap:"clamp"})),z.onerror=T,z.src=n}),I=j.stack.map((n,S)=>{let[T,,z,O,G]=n,V=Math.PI+O*Math.PI/180,F=j.G,r0=Math.cos(V)*F,p0=Math.sin(V)*F,u0=$[0]+_/2+z,x0=$[1]+n.base,E0=$[2]+j.z+G;return{name:T,seed:(S+1)*.6180339%1,model:[r0,0,-p0,0,0,F,0,0,p0,0,r0,0,u0,x0,E0,1]}}),x={},q=null,W=e({vert:Xe,frag:Ye,attributes:{position:{buffer:e.prop("vb"),stride:36,offset:0},normal:{buffer:e.prop("vb"),stride:36,offset:12},uv:{buffer:e.prop("vb"),stride:36,offset:24},flag:{buffer:e.prop("vb"),stride:36,offset:32}},elements:e.prop("el"),offset:e.prop("offset"),count:e.prop("count"),cull:{enable:!1},uniforms:{model:e.prop("model"),seed:e.prop("seed"),dark:e.prop("dark"),emit:(n,S)=>S.emit||0,bodyTex:e.prop("tex"),...y,memTex:()=>q||h,nMem:36,sigTime:n=>typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:n.time,tvLight:()=>u}});k("res/redroom/memories.webp").then(n=>{q=n,M=n}).catch(n=>console.error("The memories did not load",n));for(let n in j.models){let S=j.models[n],T=[];for(let z=0;z<S.tex;z++)T.push(k("res/redroom/tv_"+n+"_"+z+".webp"));Promise.all([fetch(S.file).then(z=>z.arrayBuffer()),...T]).then(([z,...O])=>{let G=new Uint32Array(z,0,4),V=G[0],F=G[1],r0=G[2],p0=G[3],u0=new Int32Array(z,16,r0*3),x0=16+r0*12,E0=e.buffer(new Float32Array(z,x0,V*9)),q0=x0+V*36,J0=p0?new Uint32Array(z.slice(q0,q0+F*4)):new Uint16Array(z.slice(q0,q0+F*2)),H0=e.elements({data:J0,type:p0?"uint32":"uint16"}),g0=[];for(let I0=0;I0<r0;I0++)g0.push({offset:u0[I0*3],count:u0[I0*3+1],tex:u0[I0*3+2]>=0?O[u0[I0*3+2]]:O[0]});x[n]={vb:E0,el:H0,parts:g0,dark:S.dark}}).catch(z=>console.error("A television did not load",z))}let Z=[],t0=()=>{if(q){Z.length=0;for(let n of I){let S=x[n.name];if(S)for(let T of S.parts)Z.push({vb:S.vb,el:S.el,offset:T.offset,count:T.count,tex:T.tex,model:n.model,seed:n.seed,dark:S.dark})}Z.length&&W(Z)}},Y=Be(),C=null;k("res/redroom/polaroids.webp").then(n=>{C=n}).catch(n=>console.error("The photographs did not load",n));let H=e({vert:Ze,frag:Je,attributes:{position:Y.pos,normal:Y.nrm,uv:Y.uv,pic:Y.pic,style:Y.sty,pivot:{buffer:e.buffer(Y.piv),size:4}},elements:e.elements({data:new Uint16Array(Y.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...y,polTex:()=>C,tvLight:()=>u}}),U=(n,S)=>Promise.all([fetch(n).then(T=>T.arrayBuffer()),...S.map(k)]).then(([T,...z])=>{let O=new Uint32Array(T,0,4),G=O[0],V=O[1],F=O[2],r0=O[3],p0=new Int32Array(T,16,F*3),u0=16+F*12,x0=u0+G*36,E0=e.buffer(new Float32Array(T,u0,G*9)),q0=r0?new Uint32Array(T.slice(x0,x0+V*4)):new Uint16Array(T.slice(x0,x0+V*2)),J0=e.elements({data:q0,type:r0?"uint32":"uint16"}),H0=[];for(let g0=0;g0<F;g0++)H0.push({offset:p0[g0*3],count:p0[g0*3+1],tex:z[Math.max(0,p0[g0*3+2])],mat:p0[g0*3+2]});return{vb:E0,el:J0,parts:H0}}),J=(n,S)=>{let T=new Array(16);for(let z=0;z<4;z++)for(let O=0;O<4;O++)T[z*4+O]=n[O]*S[z*4]+n[4+O]*S[z*4+1]+n[8+O]*S[z*4+2]+n[12+O]*S[z*4+3];return T},o0=(n,S,T)=>[1,0,0,0,0,1,0,0,0,0,1,0,n,S,T,1],s0=n=>{let S=Math.cos(n),T=Math.sin(n);return[1,0,0,0,0,S,T,0,0,-T,S,0,0,0,0,1]},f0=J(o0($[0]+N.x,$[1]+N.table,$[2]+N.z),s0(-N.pitch)),i0=N.tableK,A0=[i0,0,0,0,0,i0,0,0,0,0,i0,0,$[0]+_/2,$[1],$[2]+15,1],Q={},N0=["res/redroom/proj_0.webp"];U("res/redroom/proj_body.bin",N0).then(n=>{Q.body=n}).catch(n=>console.error(n)),U("res/redroom/proj_feed.bin",N0).then(n=>{Q.feed=n}).catch(n=>console.error(n)),U("res/redroom/proj_takeup.bin",N0).then(n=>{Q.takeup=n}).catch(n=>console.error(n)),U("res/redroom/table_all.bin",["res/redroom/table_0.webp"]).then(n=>{Q.table=n}).catch(n=>console.error(n));let C0=(n,S)=>J(f0,J(o0(n[0],n[1],n[2]),J(s0(S),o0(-n[0],-n[1],-n[2])))),T0=[],e0=n=>{T0.length=0;let S=(T,z,O)=>{if(T)for(let G of T.parts)T0.push({vb:T.vb,el:T.el,offset:G.offset,count:G.count,tex:G.tex,model:z,seed:0,dark:O})};S(Q.table,A0,.9),S(Q.body,f0,1),S(Q.feed,C0(N.feed,-n*2.6),1),S(Q.takeup,C0(N.takeup,-n*3.5),1),T0.length&&W(T0)},X0=[],fe=[];{let n=[$[0]+N.lens[0],$[1]+N.lens[1],$[2]+N.lens[2]];[.96,.86,.76,.66,.56,.46,.36].forEach((S,T)=>{let z=N.img.w/2*S,O=N.img.h/2*S,G=[[-z,-O],[z,-O],[z,O],[-z,O]].map(([V,F])=>[$[0]+N.img.x+V,$[1]+N.img.y+F,$[2]+A-.02]);for(let V=0;V<4;V++){let F=G[V],r0=G[(V+1)%4];X0.push(...n,...F,...r0),fe.push(T,T,T)}})}let Ne=e({vert:Qe,frag:et,attributes:{position:X0,layer:fe},count:X0.length/3,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{...y,tvLight:()=>u}}),$e=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale, pxScale; attribute vec3 position; void main() { vec3 p = position; p.y *= yScale; vec4 v = view * vec4(p, 1.0); gl_Position = proj * v; gl_PointSize = clamp(pxScale * 0.22 / max(0.3, -v.z), 4.0, 220.0); }",frag:"precision highp float; uniform float time; void main() { vec2 d = gl_PointCoord - 0.5; float r = length(d); float a = exp(-r * r * 160.0) * 1.6 + 0.35 * exp(-r * r * 30.0) + 0.12 * exp(-r * r * 8.0) + 0.5 * exp(-d.y * d.y * 2500.0) * exp(-abs(d.x) * 7.0); gl_FragColor = vec4(vec3(1.0, 0.84, 0.62) * a * (0.9 + 0.1 * sin(time * 37.0)), 1.0); }",attributes:{position:[$[0]+N.lens[0],$[1]+N.lens[1],$[2]+N.lens[2]+.01]},count:1,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:n=>n.viewportHeight*1.2}}),ve=null;k("res/redroom/print.webp").then(n=>{ve=n}).catch(n=>console.error(n));let Y0=[],pe=[];P.trays.forEach((n,S)=>{let T=P.TX/2-.009,z=P.TZ/2-.009,O=P.TXc,G=P.liquid,V=[[O-T,n-z],[O+T,n-z],[O+T,n+z],[O-T,n+z]].map(([F,r0])=>[$[0]+F,$[1]+G,$[2]+r0]);Y0.push(...V[0],...V[2],...V[1],...V[0],...V[3],...V[2]);for(let F=0;F<6;F++)pe.push(S)});let Ee=e({vert:tt,frag:ot,attributes:{position:Y0,tray:pe},count:Y0.length/3,cull:{enable:!1},uniforms:{...y,tvLight:()=>u,printTex:()=>ve||h,polTex:()=>C||h}}),S0=Re();for(let n of Y.pegs)S0.box(n[0]-.008,n[1]-.045,n[2]-.011,n[0]+.008,n[1]+.03,n[2]+.011,b.PEG);let De=e({vert:Le,frag:ze,attributes:{position:S0.pos,normal:S0.nrm,kind:S0.kind,uv:S0.uv},elements:e.elements({data:new Uint16Array(S0.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...y,reflTex:()=>l,reflSize:[4,4],reflOn:0,tvLight:()=>u}}),Oe=n=>{let S=Math.cos(n),T=Math.sin(n);return[S,0,-T,0,0,1,0,0,T,0,S,0,0,0,0,1]},d0=(n,S,T,z)=>J(o0($[0]+n,$[1]+S,$[2]+T),Oe(z||0));U("res/redroom/plastic_all.bin",["res/redroom/plastic_0.webp"]).then(n=>{Q.jug=n}).catch(n=>console.error(n)),U("res/redroom/multi_cleaner_all.bin",["res/redroom/multi_cleaner_0.webp"]).then(n=>{Q.can=n}).catch(n=>console.error(n)),U("res/redroom/pull_all.bin",["res/redroom/pull_0.webp"]).then(n=>{Q.socket=n}).catch(n=>console.error(n)),U("res/redroom/bulb_all.bin",["res/redroom/bulb_0.webp","res/redroom/bulb_1.webp"]).then(n=>{Q.bulb=n}).catch(n=>console.error(n));let L0=P.top,$0=P.b[0],Pe=[["jug",d0(.16,L0,$0+.3,.4)],["jug",d0(.17,L0,$0+.52,-.3)],["jug",d0(.36,L0,$0+.4,2.2)],["can",d0(.14,L0,$0+.95,1.57)],["can",d0(.15,L0,$0+1.3,1.45)],["jug",d0(.16,L0,P.b[1]-.35,.9)],["can",d0(.2,L0,P.b[1]-.8,1.7)],["socket",d0(P.bulb[0],P.bulb[1]+.065,P.bulb[2],0)],["bulb",J(d0(P.bulb[0],P.bulb[1]+.048,P.bulb[2],0),s0(Math.PI))]],Ae=()=>{let n=[];for(let[S,T]of Pe){let z=Q[S];z&&z.parts.forEach((O,G)=>n.push({vb:z.vb,el:z.el,offset:O.offset,count:O.count,tex:O.tex,model:T,seed:0,dark:S==="jug"||S==="can"?.85:.7,emit:S==="bulb"&&O.mat===0?1.6:0}))}n.length&&W(n),Ee(),De()},j0=document.createElement("canvas");j0.width=512,j0.height=192;{let n=j0.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,512,192),n.font='bold 128px "Helvetica Neue", Arial, sans-serif',n.textAlign="center",n.textBaseline="middle",n.shadowColor="#ff2a20",n.shadowBlur=28,n.fillStyle="#ff6a5a",n.fillText("ENTER",256,100),n.shadowBlur=0,n.fillStyle="#ffd8d0",n.fillText("ENTER",256,100)}let Ce=e.texture({data:j0,min:"linear",mag:"linear",wrap:"clamp"}),m0=v0.sign,G0=.3,V0=.1125,W0=m0[2]-.025,je=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale; attribute vec3 position; attribute vec2 uv; varying vec2 v_uv; void main() { v_uv = uv; vec3 p = position; p.y *= yScale; gl_Position = proj * view * vec4(p, 1.0); }",frag:"precision highp float; uniform sampler2D tex; uniform float signK; varying vec2 v_uv; void main() { vec3 c = texture2D(tex, v_uv).rgb; vec3 col = c * vec3(1.6, 0.55, 0.5) * signK + vec3(0.06, 0.0, 0.0); gl_FragColor = vec4(col, 1.0); }",attributes:{position:[[m0[0]+G0,m0[1]-V0,W0],[m0[0]-G0,m0[1]-V0,W0],[m0[0]-G0,m0[1]+V0,W0],[m0[0]+G0,m0[1]+V0,W0]].map(n=>[n[0]+$[0],n[1]+$[1],n[2]+$[2]]),uv:[[0,1],[1,1],[1,0],[0,0]]},elements:[0,1,2,0,2,3],cull:{enable:!1},uniforms:{tex:Ce,signK:()=>f}}),he=220,de=[];for(let n=0;n<he;n++)de.push(Math.random(),Math.random(),Math.random(),Math.random());let Ge=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b;
			void main() {
				vec3 L0 = vec3(${d($[0]+N.lens[0])}, ${d($[1]+N.lens[1])}, ${d($[2]+N.lens[2])});
				vec3 C = vec3(${d($[0]+N.img.x)}, ${d($[1]+N.img.y)}, ${d($[2]+A)});
				vec3 fw = normalize(C - L0);
				vec3 rt = normalize(cross(fw, vec3(0.0, 1.0, 0.0)));
				vec3 up = cross(rt, fw);
				// most of them close to the lens
				float along = 0.15 + pow(seed.x, 2.2) * 7.5;
				float sp = along / length(C - L0);
				vec2 off = (vec2(seed.y, seed.z) - 0.5) * vec2(${d(N.img.w)}, ${d(N.img.h)}) * sp;
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
			}`,frag:"precision highp float; varying float v_b; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vec3(1.0, 0.84, 0.6) * v_b * a, 1.0); }",attributes:{seed:de},count:he,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:n=>n.viewportHeight*1.2}}),Z0=70,me=[];for(let n=0;n<Z0;n++)me.push(Math.random(),Math.random(),Math.random(),n<Z0*.6?1:0);let Ve=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b, v_a, v_s;
			void main() {
				vec3 L0 = vec3(${d($[0]+N.lens[0])}, ${d($[1]+N.lens[1])}, ${d($[2]+N.lens[2])});
				vec3 C = vec3(${d($[0]+N.img.x)}, ${d($[1]+N.img.y)}, ${d($[2]+A)});
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
				float rc = 0.04 + al * ${d(N.img.h*.5)} / length(C - L0);
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
			${b0}
			void main() {
				vec2 d = gl_PointCoord - 0.5;
				float g = exp(-dot(d, d) * 9.0);
				float n = rnoise(gl_PointCoord * 3.2 + v_s + time * 0.05) * 0.7 + rnoise(gl_PointCoord * 7.0 - v_s) * 0.3;
				float a = g * smoothstep(0.2, 0.8, n) * v_a * 0.15;
				gl_FragColor = vec4(mix(vec3(0.5, 0.06, 0.04), vec3(1.0, 0.86, 0.68), clamp(v_b - 0.12, 0.0, 1.0)) * v_b * a, 1.0);
			}`,attributes:{seed:me},count:Z0,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:n=>n.viewportHeight*1.2}}),ue=2200,xe=[];for(let n=0;n<ue;n++)xe.push(Math.random(),Math.random(),Math.random(),Math.random());let We=e({vert:st,frag:nt,attributes:{seed:xe},count:ue,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:n=>n.viewportHeight*1.2}}),ge=n=>{let S=!!(n&&n.reflected),T=performance.now()/1e3,z=.8+.12*Math.sin(T*47)*Math.sin(T*3.1)+.08*Math.sin(T*23+1.3);u[0]=.8*z,u[1]=.84*z,u[2]=.95*z,f=p(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:T),g(),je(),t0(),C&&H(),Ae(),e0(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:T),M&&!(typeof window!="undefined"&&window.__noBeam)&&Ne(),$e(),!S&&!(typeof window!="undefined"&&window.__noSmoke)&&Ve(),S||Ge(),S||We()};return ge.reflect=(n,S)=>r(T=>{let z=T.viewportWidth,O=T.viewportHeight,G=Math.max(2,Math.round(z/2)),V=Math.max(2,Math.round(O/2)),F=!v;if((s.width!==G||s.height!==V)&&(s.resize(G,V),F=!0),w[0]=z,w[1]=O,i=1,!F&&++c%S!==0){a=o;return}a=l,t(()=>{e.clear({color:[0,0,0,1],depth:1}),n()}),a=o,v=!0}),ge};var se=null;Object.assign(ne.exports,{O:$,W:_,L:A,H:B,ROOM:{W:_,L:A,H:B,WIN:D,DOOR:n0,ENT:v0,SHAFTS:K,TV:j,DARK:P,PROJ:N,CABLE:h0,POL:y0,winZ:U0,vaultY:z0},POST:{threshold:.3},sunGLSL:Ke,bakedSun(e){return se||(se=e.texture({width:1,height:1,data:[0,0,0,0]})),se},ready:()=>!0,setFlower(){},setGuide(){},setWind(){}})});var ke=Q0((pt,Ie)=>{"use strict";var K0=ae(),{O:ie}=K0,{W:a0,L:re,TV:k0,DARK:ce,PROJ:M0}=K0.ROOM,Te=e=>[e[0]+ie[0],e[1]+ie[1],e[2]+ie[2]],Se=(e,m,R)=>e+(m-e)*R,at=e=>Math.max(0,Math.min(1,e)),_0=M0.x,it=M0.table,P0=M0.z,O0=[_0+M0.feed[0],it+M0.feed[1],P0+M0.feed[2]],B0=M0.lens,le=ce.trays[0],rt=[{eye:[a0/2+.15,1.55,-9.6],at:[a0/2,1.7,0],fov:40,dof:.05,p:{fov:58}},{eye:[a0/2+.05,1.6,-3],at:[a0/2,1.85,1.5],fov:50,dof:.05,p:{fov:70}},{eye:[a0/2-.2,1.5,.9],at:[a0/2-3,1.4,7],fov:56,dof:.04,p:{fov:74}},{eye:[3.3,1.55,1.3],at:[.3,1.35,5.2],fov:50,dof:.05,p:{eye:[2.8,1.6,.9],fov:72}},{eye:[1.05,1.5,le-.42],at:[ce.TXc-.02,ce.liquid,le+.04],fov:34,dof:.2,p:{eye:[1,1.55,le-.45],fov:52}},{eye:[2,1.6,8.3],at:[.4,2.25,11.3],fov:50,dof:.12,p:{eye:[1.8,1.6,8.1],fov:72}}];function qe(e,m){let R=e.length-1,L=Math.max(0,Math.min(R,m)),o=Math.min(R-1,Math.floor(L)),s=L-o,t=e[Math.max(0,o-1)],l=e[o],r=e[o+1],a=e[Math.min(R,o+2)],i=s*s,c=i*s;return[0,1,2].map(v=>.5*(2*l[v]+(-t[v]+r[v])*s+(2*t[v]-5*l[v]+4*r[v]-a[v])*i+(-t[v]+3*l[v]-3*r[v]+a[v])*c))}function lt(){let e=rt.slice(),m=K0.ROOM.CABLE,R=m.path,L=m.socket[2],o=m.socket[0];e.push({eye:[o+1.05,.42,L-.45],at:[o,.27,L+.08],fov:42,dof:.32,p:{eye:[o+1.3,.48,L-.55],fov:58}});let[s,t]=m.run;for(let h of[.04,.22,.42,.62,.82]){let f=Math.round(s+(t-s)*h),p=R[Math.max(0,f-6)],y=R[Math.min(R.length-1,f+6)],g=R[f],k=y[0]-p[0],I=y[2]-p[2],x=Math.hypot(k,I)||1;k/=x,I/=x,e.push({eye:[g[0]-k*.8-I*.12,.3,g[2]-I*.8+k*.12],at:[g[0]+k*1.5,.06,g[2]+I*1.5],fov:44,dof:.24,pass:!0,p:{fov:60}})}e.push({eye:[a0-3,.45,L-1.6],at:[a0-.3,1.9,L+.9],fov:50,dof:.1,p:{fov:70}});let l=(h,f,p)=>[h[0]+f[0]*p,h[1]+f[1]*p,h[2]+f[2]*p],r=11,a=()=>(r=r*16807%2147483647,(r-1)/2147483646),i=(K0.ROOM.POL.spots||[]).filter(h=>h.n[0]<-.5&&h.c[2]>10.5&&h.c[2]<21.5&&h.c[1]>1.9&&h.c[1]<4.6),c=(h,f)=>Math.abs(h.c[2]-f)+Math.abs(h.c[1]-3)*.4,v=[];for(let h of[12.6,15,17.3]){let f=null;for(let p of i)(!f||c(p,h)<c(f,h))&&(f=p);f&&v.indexOf(f)<0&&v.push(f)}v.forEach((h,f)=>{let p=h.n,y=h.c;f>0&&e.push({eye:l(l(y,p,2.2),[0,.15,-.6],1),at:y,fov:50,dof:.05,pass:!0}),e.push({eye:l(l(y,p,1),[0,.06,-.3],1),at:y,fov:36,dof:.26,p:{fov:50}})}),e.push({eye:[_0+2,1.35,P0-1.5],at:[_0,1.35,P0+.1],fov:42,dof:.12,p:{eye:[_0+1.6,1.4,P0-1.5],fov:62}}),e.push({eye:[_0+.85,O0[1]+.12,O0[2]-.35],at:[O0[0],O0[1]-.05,O0[2]],fov:36,dof:.32,p:{fov:52}}),e.push({eye:[_0+.42,B0[1]+.08,B0[2]+1.35],at:[_0,B0[1],B0[2]],fov:36,dof:.35,p:{fov:52}}),e.push({eye:[_0-.55,1.75,P0-1.4],at:[a0/2,5,re],fov:50,dof:.06,p:{fov:70}});let w=k0.stack;e.push({eye:[a0/2+1.4,1.2,k0.z-4.9],at:[a0/2,1.75,k0.z],fov:50,dof:.05,p:{fov:70}});let u=w.map((h,f)=>f);for(let h=u.length-1;h>0;h--){let f=Math.floor(a()*(h+1)),p=u[h];u[h]=u[f],u[f]=p}let M=null;for(let h of u){let f=w[h],p=f.screen,y=f.facing,g=f.size*1.25;if(M){let I=[(M[0]+p[0])/2,(M[1]+p[1])/2+.2,Math.min(M[2],p[2])-2.6];e.push({eye:I,at:[(M[0]+p[0])/2,(M[1]+p[1])/2,k0.z],fov:46,dof:.05,pass:!0})}let k=(a()-.5)*.5;e.push({eye:[p[0]+y[0]*g+k,p[1]+.05+(a()-.5)*.15,p[2]+y[2]*g],at:[p[0],p[1],p[2]],fov:30,dof:.3,p:{fov:44}}),M=p}return e.push({eye:[a0/2,2.6,k0.z-3.5],at:[a0/2,4.5,re],fov:52,dof:.05,pass:!0}),e.push({eye:[a0/2,4.3,k0.z+1.6],at:[a0/2,6,re],fov:62,dof:.04,p:{fov:82}}),e}Ie.exports=function(){let m=lt(),R=m.length-1,L=m.map((x,q)=>x.pass?-1:q).filter(x=>x>=0),o=(x,q)=>{if(q>=0){for(let E of L)if(E>=x-.06)return E;return L[L.length-1]}for(let E=L.length-1;E>=0;E--)if(L[E]<=x+.06)return L[E];return L[0]},s=(x,q)=>{if(q>0){for(let E of L)if(E>x+.01)return E;return L[L.length-1]}for(let E=L.length-1;E>=0;E--)if(L[E]<x-.01)return L[E];return L[0]},t=null,l=null,r=0,a=0,i=null,c=-10,v=0,w=null,u=1,M=-10,h=[],f=(x,q,E)=>{window.addEventListener(x,q,E),h.push([x,q,E])},p=x=>{let q=Math.sign(x);q&&(q!==u&&v-M<.25&&Math.abs(x)<.02||(q!==u&&(u=q),M=v,a=Math.max(0,Math.min(R,a+x)),c=v))},y=x=>{u=x>0?1:-1,a=s(a,x),c=v-10};f("wheel",x=>{if(x.target.closest&&x.target.closest(".st-ui"))return;x.preventDefault();let q=x.deltaMode===1?x.deltaY*16:x.deltaMode===2?x.deltaY*window.innerHeight:x.deltaY;p(Math.max(-.6,Math.min(.6,q/700)))},{passive:!1});let g=null;f("pointerdown",x=>{x.target.closest&&x.target.closest("button, a, .st-ui")||(g={lx:x.clientX,ly:x.clientY,moved:0,t:performance.now()})}),f("pointermove",x=>{if(!g)return;let q=x.clientX-g.lx,E=x.clientY-g.ly;g.lx=x.clientX,g.ly=x.clientY;let W=Math.abs(E)>=Math.abs(q)?-E:-q;g.moved+=Math.abs(W),g.moved>6&&p(W/(window.innerHeight*.55))}),f("pointerup",()=>{let x=g;g=null,x&&x.moved<8&&performance.now()-x.t<450&&y(1)}),f("keydown",x=>{x.key==="ArrowDown"||x.key==="ArrowRight"||x.key==="PageDown"||x.key===" "?y(1):(x.key==="ArrowUp"||x.key==="ArrowLeft"||x.key==="PageUp")&&y(-1)});function k(x){v=x,w===null&&(w=x);let q=i===null?0:Math.min(.1,x-i);i=x,typeof window!="undefined"&&window.__redShot!==void 0&&/tourdebug/.test(location.search)&&(r=a=window.__redShot),v-c>.35&&(a+=(o(a,u)-a)*(1-Math.exp(-q*2))),r+=(a-r)*(1-Math.exp(-q*1.7)),Math.abs(a-r)<1e-4&&(r=a);let E=window.innerWidth<window.innerHeight,W=m.map(e0=>E&&e0.p?Object.assign({},e0,e0.p):e0),Z=Math.min(R-1,Math.floor(r)),t0=r-Z,Y=t0*t0*(3-2*t0),C=qe(W.map(e0=>e0.eye),r),H=qe(W.map(e0=>e0.at),r);(!t||q===0||q>.09)&&(t=C.slice(),l=H.slice());let U=1-Math.exp(-q*5);for(let e0=0;e0<3;e0++)t[e0]+=(C[e0]-t[e0])*U,l[e0]+=(H[e0]-l[e0])*U;C=t.slice(),H=l.slice();let J=W[Z],o0=W[Math.min(R,Z+1)],s0=Se(J.fov,o0.fov,Y),f0=Se(J.dof,o0.dof,Y),i0=typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:x,A0=Math.hypot(H[0]-C[0],H[1]-C[1],H[2]-C[2]),Q=.01+.03*Math.min(1,A0/6);C=[C[0]+Math.sin(i0*.31)*Q,C[1]+Math.sin(i0*.43+1)*Q*.6,C[2]+Math.cos(i0*.27)*Q],H=[H[0]+Math.sin(i0*.21+2)*Q*.8,H[1]+Math.sin(i0*.37)*Q*.5,H[2]];let N0=Te(C),C0=Te(H),T0=1-at((x-w-.3)/1.8);return{eye:N0,target:C0,fov:s0,roll:Math.sin(i0*.17)*.004,moving:!0,look:{letterbox:.45,focus:A0,aperture:f0,vignette:.3,exposure:1.45,shafts:1,fade:T0,fadeColor:[0,0,0]}}}function I(){for(let[x,q,E]of h)window.removeEventListener(x,q,E);h.length=0}return{update:k,tap:()=>y(1),dispose:I,placeFlower(){},get scroll(){return r},END:R}}});window.__redRoom={studio:ae(),tour:ke()};})();

"use strict";(()=>{var ie=(e,i)=>()=>(i||e((i={exports:{}}).exports,i),i.exports);var Te=ie((wt,Me)=>{"use strict";var b0=[-90,0,0],le=16,ce=27.5,fe=11.6;Me.exports={O:b0,W:le,L:ce,RIDGE:fe,BOX:[b0[0]-.8,0,b0[2]-11.5,b0[0]+le+.8,fe+.5,b0[2]+ce+.8],AIR_BOX:[b0[0],0,b0[2],b0[0]+le,fe,b0[2]+ce]}});var ve=ie((gt,pe)=>{"use strict";var{O:$,W:_,L:j}=Te(),v=e=>(+e).toFixed(4),Z=10.5,Q0=.7,Se=3,P={hw:1.25,sill:1.35,spring:6.9,n:4,step:6.35};P.z0=j/2-P.step*(P.n-1)/2;P.apex=P.spring+P.hw*Math.sqrt(3);var ee=e=>P.z0+P.step*e;P.leftFrom=2;var B=(()=>{let i=P.z0,L={k:1.42,z:i,top:.543*1.42,half:.601*1.42,depth:.706*1.42};return L.x=_-.12-L.depth/2,L.candles=[[_-.4,i-.52,1],[_-.3,i-.3,.62],[_-.36,i+.42,.38],[_-.86,i-.06,.55],[_-.24,i+.66,.85],[_-.8,i+.42,.3]],L.vase={x:_-.55,z:i+.06,h:.24},L.flames=L.candles.map(([I,D,s])=>[I,L.top+.156+.144*s+.018,D]),L.laid=[[_-.66,i-.22,Math.PI/2+.5],[_-.62,i-.36,Math.PI/2+.15],[_-.7,i+.26,Math.PI/2-.6]],L.stack=[_-.88,i-.5],L.occ=[[_-.55,L.top+.46,i+.06,.15],[_-.55,L.top+.26,i+.06,.06],[_-.55,L.top+.11,i+.06,.08],...L.laid.map(([I,D,s])=>[I-Math.sin(s)*.15,L.top+.05,D-Math.cos(s)*.15,.065])],L})();P.lowSill=B.top+.06;var H=[];for(let e=0;e<=P.n;e++)H.push(P.z0+P.step*(e-.5));var l0={hw:.75,h:2.6,depth:.7},d0={hw:1.8,h:3.6,z:-11,sign:[_/2,l0.h+.32,-l0.depth-.05],open:2.2},K={z:21.2,G:2.4,models:{sony:{file:"res/redroom/tv_sony.bin",tex:3,w:.36,h:.341,d:.455,dark:.55},crt:{file:"res/redroom/tv_crt.bin",tex:3,w:.47,h:.454,d:.389,dark:.9},old:{file:"res/redroom/tv_old.bin",tex:1,w:.62,h:.418,d:.416,dark:.75}}};K.stack=[["old",0,-1.41,2,.04],["crt",0,.05,-1,-.02],["sony",0,1.24,-2,.06],["crt",1,-1.16,3,.02],["sony",1,-.03,-1,.04],["crt",1,1.14,-3,.06],["sony",2,-.73,2,.06],["old",2,.66,-2,.03],["crt",0,-2.78,3,.08],["sony",1,-2.68,4,.1],["old",0,2.5,-3,.08],["sony",1,2.32,-4,.1]];var Qe={sony:[0,.194],crt:[0,.27],old:[.0625,.2145]};(()=>{let e=[];for(let i of K.stack){let L=K.models[i[0]],I=i[1],D=i[2],s=L.w*K.G,n=0;for(let a of e)a.row>=I||Math.abs(a.dx-D)<(a.w+s)/2*.92&&(n=Math.max(n,a.top));e.push({dx:D,row:I,w:s,top:n+L.h*K.G*.99}),i.base=n;let t=Qe[i[0]],c=i[3]*Math.PI/180;i.screen=[_/2+D+t[0]*K.G,n+t[1]*K.G,K.z+i[4]],i.facing=[-Math.sin(c),0,-Math.cos(c)],i.size=L.w*K.G}})();var O=(()=>{let e={top:.92,depth:.78};return e.a=[H[0]+.7,H[1]-.55],e.b=[H[1]+.55,H[2]-.7],e.basin={x0:.08,x1:e.depth-.07,z0:e.a[0]+.1,z1:e.a[1]-.1,floor:e.top-.1},e.TX=.44,e.TZ=.54,e.TH=.075,e.TXc=(e.basin.x0+e.basin.x1)/2,e.trays=[e.a[0]+1.1,e.a[0]+1.72,e.a[0]+2.34],e.liquid=e.basin.floor+.05,e.bulb=[e.TXc+.02,1.39,e.trays[0]+.05],e.tube={x:.07,y:3.05,z0:e.b[0]+.2,z1:e.b[1]-.2},e.shelf={y:1.5,d:.3,z0:e.trays[2]+.42,z1:e.trays[2]+1.12},e.lines=[[.32,2.74,H[0],H[1],.12],[.74,2.52,H[0],H[1],.17],[1.1,2.62,H[0],H[1],.2],[.3,2.76,H[1],H[2],.15],[.68,2.46,H[1],H[2],.19],[1.06,2.66,H[1],H[2],.22],[.5,1.98,H[1],H[2],.12],[.45,2.98,H[0],H[1],.1,1.45],[1.45,2.4,H[0],H[1],.2],[.95,2.26,H[0],H[1],.13,.4],[1.4,3,H[1],H[2],.14,.45],[1.5,2.36,H[1],H[2],.22],[.9,2.2,H[1],H[2],.15,1.35]],e})(),N=(()=>{let e={x:_/2-.006,z:14.92,tableK:1.25,pitch:.1};e.table=.761*e.tableK,e.feed=[.0254,.7696,.3364],e.takeup=[.0252,.2484,.337],e.lensL=[.006,.456,.15];let i=Math.cos(e.pitch),L=Math.sin(e.pitch),I=e.lensL;return e.lens=[e.x+I[0],e.table+I[1]*i+I[2]*L,e.z-I[1]*L+I[2]*i],e.img={x:_/2,y:6,w:6.4},e.img.h=e.img.w*.75,e})(),e0={x0:4.2,x1:11.8,y:9,z:j-.16},u0={r:.045};(()=>{let e=u0.r,i=O.depth,L=O.b[1]-.22;u0.socket=[i,.3,L],u0.ctrl=[[i+.1,.3,L],[i+.2,.295,L],[i+.3,.22,L+.02],[i+.42,e,L+.1],[i+.8,e,L+.3],[1.8,e,L+.45],[3.4,e,L+.1],[5.2,e,L-.55],[7.2,e,L-.95],[9.4,e,L-.9],[11.4,e,L-.45],[13.2,e,L+.1],[_-1.15,e,L+.55],[_-.85,e,L+1.05],[_-.85,e,15.2],[_-1.1,e,16.3],[_-1.7,e,17.2],[_-2.5,e,17.9],[12.9,e,18.5],[11.5,e,18.9],[10.6,e,19.5],[10.5,e,20.3],[11.2,e,20.5],[10.9,e,19.95],[10,e*2.2,20.1],[9.3,e,20.75],[9.5,e,21.9],[8.6,e,22.25],[8.1,.22,21.95]];let I=u0.ctrl,D=[];for(let t=0;t<I.length-1;t++){let c=I[Math.max(0,t-1)],a=I[t],m=I[t+1],l=I[Math.min(I.length-1,t+2)],h=Math.max(2,Math.ceil(Math.hypot(m[0]-a[0],m[1]-a[1],m[2]-a[2])/.06));for(let b=0;b<h;b++){let z=b/h,u=z*z,f=u*z;D.push([0,1,2].map(r=>.5*(2*a[r]+(-c[r]+m[r])*z+(2*c[r]-5*a[r]+4*m[r]-l[r])*u+(-c[r]+3*a[r]-3*m[r]+l[r])*f)))}}D.push(I[I.length-1].slice());for(let t of D)t[1]<e&&t[2]>-1.4&&(t[1]=e);u0.path=D;let s=D.findIndex(t=>t[1]<=e*1.01),n=D.findIndex((t,c)=>c>s&&t[0]>_-1.3);u0.run=[s,n]})();var v0={spots:[],w:.36,h:.435,n:36,lines:[{z:j-1.7,y:6.5,sag:1},{z:j-2.6,y:5.3,sag:.8}]},h0=(()=>{let e=[-.62,.75,-.16],i=Math.hypot(...e);return e.map(L=>L/i)})(),T0=(()=>{let e=_/2;return(e*e+Se*Se)/(2*e)})(),M0=e=>{let i=e<=_/2?e:_-e;return Z+Math.sqrt(Math.max(0,T0*T0-(i-T0)*(i-T0)))},g={FLOOR:0,WALL:1,REVEAL:2,GLASS:3,VAULT:4,TRIM:5,VOID:6,TUBE:7,CABLE:8,TILE:9,STEEL:10,PEG:11,CONC:12,CFLOOR:13,DOOR:14};function Ne(){let e=[],i=[],L=[],I=[],D=[],s={pos:e,nrm:i,kind:L,uv:I,idx:D,v(n,t,c,a){return e.push(n[0]+$[0],n[1]+$[1],n[2]+$[2]),i.push(t[0],t[1],t[2]),L.push(c),I.push(a?a[0]:0,a?a[1]:0),e.length/3-1},quad(n,t,c,a,m,l,h,b,z,u){let f=s.v(n,m,l,h),r=s.v(t,m,l,b),p=s.v(c,m,l,z),x=s.v(a,m,l,u);D.push(f,r,p,f,p,x)},box(n,t,c,a,m,l,h){s.quad([n,t,l],[a,t,l],[a,m,l],[n,m,l],[0,0,1],h),s.quad([a,t,c],[n,t,c],[n,m,c],[a,m,c],[0,0,-1],h),s.quad([a,t,l],[a,t,c],[a,m,c],[a,m,l],[1,0,0],h),s.quad([n,t,c],[n,t,l],[n,m,l],[n,m,c],[-1,0,0],h),s.quad([n,m,l],[a,m,l],[a,m,c],[n,m,c],[0,1,0],h),s.quad([n,t,c],[a,t,c],[a,t,l],[n,t,l],[0,-1,0],h)},cyl(n,t,c,a,m,l,h){h=h||18;for(let b=0;b<h;b++){let z=b/h*Math.PI*2,u=(b+1)/h*Math.PI*2,f=[Math.sin(z),0,Math.cos(z)],r=[Math.sin(u),0,Math.cos(u)],p=(d,R)=>[n+d[0]*c,R,t+d[2]*c],x=s.v(p(f,a),f,l),y=s.v(p(r,a),r,l),w=s.v(p(r,m),r,l),T=s.v(p(f,m),f,l);D.push(x,y,w,x,w,T)}}};return s}function f0(e,i,L,I,D){let s=null,n=null,t=[];for(let c=0;c<i.length;c++){let a=i[Math.max(0,c-1)],m=i[Math.min(i.length-1,c+1)],l=[m[0]-a[0],m[1]-a[1],m[2]-a[2]],h=Math.hypot(...l)||1;l=l.map(r=>r/h),n||(n=Math.abs(l[1])<.9?[0,1,0]:[1,0,0]);let b=n[0]*l[0]+n[1]*l[1]+n[2]*l[2];n=[n[0]-l[0]*b,n[1]-l[1]*b,n[2]-l[2]*b];let z=Math.hypot(...n)||1;n=n.map(r=>r/z);let u=[l[1]*n[2]-l[2]*n[1],l[2]*n[0]-l[0]*n[2],l[0]*n[1]-l[1]*n[0]],f=[];for(let r=0;r<I;r++){let p=r/I*Math.PI*2,x=Math.cos(p),y=Math.sin(p),w=[n[0]*x+u[0]*y,n[1]*x+u[1]*y,n[2]*x+u[2]*y];f.push(e.v([i[c][0]+w[0]*L,i[c][1]+w[1]*L,i[c][2]+w[2]*L],w,D,[c,r]))}if(s)for(let r=0;r<I;r++){let p=(r+1)%I;e.idx.push(s[r],s[p],f[p],s[r],f[p],f[r])}s=f,t.push(f)}}var Ee=(e,i)=>[e[0]+((e[5]===void 0?e[0]:e[5])-e[0])*i,e[1]-e[4]*4*i*(1-i),e[2]+.35+(e[3]-e[2]-.7)*i];function qe(e,i,L){let I=[[-e,i],[-e,L]],D=2*e,s=14;for(let n=1;n<=s;n++){let t=Math.PI-n/s*(Math.PI/3);I.push([e+D*Math.cos(t),L+D*Math.sin(t)])}for(let n=1;n<=s;n++){let t=Math.PI/3-n/s*(Math.PI/3);I.push([-e+D*Math.cos(t),L+D*Math.sin(t)])}return I.push([e,i]),I}function Ie(e,i,L,I,D,s,n){let t=D?i.length:i.length-1;for(let c=0;c<t;c++){let a=i[c],m=i[(c+1)%i.length],l=m[0]-a[0],b=-(m[1]-a[1]),z=l,u=Math.hypot(b,z)||1;b/=u,z/=u;let f=(a[0]+m[0])/2-n[0],r=(a[1]+m[1])/2-n[1];b*f+z*r>0&&(b=-b,z=-z);let p=I(b,z,0,!0);e.quad(I(a[0],a[1],0),I(m[0],m[1],0),I(m[0],m[1],L),I(a[0],a[1],L),p,s,[a[0],a[1]],[m[0],m[1]],[m[0],m[1]],[a[0],a[1]])}}function et(){let e=Ne();e.quad([0,0,0],[0,0,j],[_,0,j],[_,0,0],[0,1,0],g.FLOOR),e.quad([0,0,j],[0,0,0],[0,Z,0],[0,Z,j],[1,0,0],g.WALL,[j,0],[0,0],[0,Z],[j,Z]),e.quad([_,0,0],[_,0,j],[_,Z,j],[_,Z,0],[-1,0,0],g.WALL,[0,0],[j,0],[j,Z],[0,Z]);let i=24;for(let s of[0,1]){let n=s?j:0,t=[0,0,s?-1:1];for(let c=0;c<i;c++){let a=c/i*_,m=(c+1)/i*_,l=[a,0,n],h=[m,0,n],b=[m,M0(m),n],z=[a,M0(a),n];s?e.quad(h,l,z,b,t,g.WALL,[m,0],[a,0],[a,z[1]],[m,b[1]]):e.quad(l,h,b,z,t,g.WALL,[a,0],[m,0],[m,b[1]],[a,z[1]])}}let L=40;for(let s=0;s<L;s++){let n=s/L*_,t=(s+1)/L*_,c=M0(n),a=M0(t),m=(r,p)=>{let x=r<=_/2?r:_-r,y=(T0-x)/T0,w=(Z-p)/T0;return r>_/2&&(y=-y),[y,w,0]},l=m(n,c),h=m(t,a),b=e.v([n,c,0],l,g.VAULT,[n,0]),z=e.v([t,a,0],h,g.VAULT,[t,0]),u=e.v([t,a,j],h,g.VAULT,[t,j]),f=e.v([n,c,j],l,g.VAULT,[n,j]);e.idx.push(b,z,u,b,u,f)}let I=qe(P.hw,P.sill,P.spring),D=qe(P.hw,P.lowSill,P.spring);for(let s=0;s<P.n;s++){let n=s===0?P.lowSill:P.sill,t=ee(s),c=s>=P.leftFrom;c&&Ie(e,I,Q0,(z,u,f,r)=>r?[0,u,z]:[-f,u,t+z],!0,g.REVEAL,[0,(P.sill+P.apex)/2]),Ie(e,s===0?D:I,Q0,(z,u,f,r)=>r?[0,u,z]:[_+f,u,t+z],!0,g.REVEAL,[0,(n+P.apex)/2]);let a=Q0*.55,m=P.sill-.02,l=P.apex+.02,h=P.hw+.02;c&&e.quad([-a,m,t+h],[-a,m,t-h],[-a,l,t-h],[-a,l,t+h],[1,0,0],g.GLASS,[h,m],[-h,m],[-h,l],[h,l]);let b=n-.02;e.quad([_+a,b,t-h],[_+a,b,t+h],[_+a,l,t+h],[_+a,l,t-h],[-1,0,0],g.GLASS,[-h,b],[h,b],[h,l],[-h,l]),c&&e.box(-.02,P.sill-.12,t-P.hw-.18,.12,P.sill,t+P.hw+.18,g.TRIM),e.box(_-.12,n-(s===0?.05:.12),t-P.hw-.18,_+.02,n,t+P.hw+.18,g.TRIM)}{let s=_/2-l0.hw,n=_/2+l0.hw,t=l0.h,c=l0.depth;e.quad([s,0,-c],[s,0,0],[s,t,0],[s,t,-c],[1,0,0],g.REVEAL),e.quad([n,0,0],[n,0,-c],[n,t,-c],[n,t,0],[-1,0,0],g.REVEAL),e.quad([s,t,0],[n,t,0],[n,t,-c],[s,t,-c],[0,-1,0],g.REVEAL),e.quad([s,.001,-c],[n,.001,-c],[n,.001,0],[s,.001,0],[0,1,0],g.CFLOOR);let a=_/2-d0.hw,m=_/2+d0.hw,l=d0.h,h=d0.z;e.quad([a,0,h],[a,0,-c],[m,0,-c],[m,0,h],[0,1,0],g.CFLOOR),e.quad([a,0,-c],[a,0,h],[a,l,h],[a,l,-c],[1,0,0],g.CONC,[-c,0],[h,0],[h,l],[-c,l]),e.quad([m,0,h],[m,0,-c],[m,l,-c],[m,l,h],[-1,0,0],g.CONC,[h,0],[-c,0],[-c,l],[h,l]),e.quad([a,l,h],[a,l,-c],[m,l,-c],[m,l,h],[0,-1,0],g.CONC,[h,0],[-c,0],[-c,1],[h,1]),e.quad([m,0,h],[a,0,h],[a,l,h],[m,l,h],[0,0,1],g.CONC,[0,0],[1,0],[1,l],[0,l]);let b=-c;e.quad([a,0,b],[s,0,b],[s,l,b],[a,l,b],[0,0,-1],g.CONC,[a,0],[s,0],[s,l],[a,l]),e.quad([n,0,b],[m,0,b],[m,l,b],[n,l,b],[0,0,-1],g.CONC,[n,0],[m,0],[m,l],[n,l]),e.quad([s,t,b],[n,t,b],[n,l,b],[s,l,b],[0,0,-1],g.CONC,[s,t],[n,t],[n,l],[s,l]);let z=s,u=b-.01,f=d0.open,r=l0.hw*2-.04,p=.045,x=[Math.cos(f),0,-Math.sin(f)],y=[Math.sin(f),0,Math.cos(f)],w=(F,J,t0)=>[z+x[0]*F+y[0]*t0,J,u+x[2]*F+y[2]*t0],T=.012,d=t-.02;e.quad(w(0,T,p),w(r,T,p),w(r,d,p),w(0,d,p),y,g.DOOR),e.quad(w(r,T,0),w(0,T,0),w(0,d,0),w(r,d,0),y.map(F=>-F),g.DOOR),e.quad(w(r,T,p),w(r,T,0),w(r,d,0),w(r,d,p),x,g.DOOR),e.quad(w(0,d,p),w(r,d,p),w(r,d,0),w(0,d,0),[0,1,0],g.DOOR);let R=w(r-.09,1.02,p+.03);f0(e,[w(r-.09,1.02,p),R,[R[0]-x[0]*.12,R[1],R[2]-x[2]*.12]],.011,6,g.STEEL);let k=d0.sign;e.box(k[0]-.33,k[1]-.12,k[2]-.02,k[0]+.33,k[1]+.12,b,g.TRIM)}for(let s of H){for(let a of[.2,_-.2])e.box(a-.42,0,s-.42,a+.42,.5,s+.42,g.TRIM),e.cyl(a,s,.27,.5,Z-.55,g.TRIM),e.cyl(a+(a<_/2?.2:-.2),s-.36,.1,.5,Z-.55,g.TRIM,10),e.cyl(a+(a<_/2?.2:-.2),s+.36,.1,.5,Z-.55,g.TRIM,10),e.box(a-.45,Z-.55,s-.5,a+.45,Z-.25,s+.5,g.TRIM);let n=40,t=.22,c=.22;for(let a=0;a<n;a++){let m=a/n*_,l=(a+1)/n*_,h=M0(m),b=M0(l),z=[_/2-m,-(h-Z+2),0],u=[_/2-l,-(b-Z+2),0],f=w=>{let T=Math.hypot(w[0],w[1])||1;return[w[0]/T,w[1]/T,0]},r=f(z),p=f(u),x=[m+r[0]*c,h+r[1]*c],y=[l+p[0]*c,b+p[1]*c];e.quad([x[0],x[1],s-t],[y[0],y[1],s-t],[y[0],y[1],s+t],[x[0],x[1],s+t],r,g.TRIM),e.quad([m,h,s-t],[l,b,s-t],[y[0],y[1],s-t],[x[0],x[1],s-t],[0,0,-1],g.TRIM),e.quad([l,b,s+t],[m,h,s+t],[x[0],x[1],s+t],[y[0],y[1],s+t],[0,0,1],g.TRIM)}}{let s=O,n=s.top,t=s.basin,c=(u,f,r)=>{if(e.box(0,0,u,s.depth-.06,.12,f,g.TRIM),e.quad([s.depth,.12,u],[s.depth,.12,f],[s.depth,n,f],[s.depth,n,u],[1,0,0],g.TILE,[u,.12],[f,.12],[f,n],[u,n]),e.quad([0,.12,u],[s.depth,.12,u],[s.depth,n,u],[0,n,u],[0,0,-1],g.TILE,[0,.12],[s.depth,.12],[s.depth,n],[0,n]),e.quad([s.depth,.12,f],[0,.12,f],[0,n,f],[s.depth,n,f],[0,0,1],g.TILE,[s.depth,.12],[0,.12],[0,n],[s.depth,n]),!r){e.quad([0,n,u],[0,n,f],[s.depth,n,f],[s.depth,n,u],[0,1,0],g.TILE,[0,u],[0,f],[s.depth,f],[s.depth,u]);return}let p=(x,y,w,T)=>e.quad([x,n,w],[x,n,T],[y,n,T],[y,n,w],[0,1,0],g.TILE,[x,w],[x,T],[y,T],[y,w]);p(0,t.x0,u,f),p(t.x1,s.depth,u,f),p(t.x0,t.x1,u,t.z0),p(t.x0,t.x1,t.z1,f),e.quad([t.x0,t.floor,t.z0],[t.x0,t.floor,t.z1],[t.x1,t.floor,t.z1],[t.x1,t.floor,t.z0],[0,1,0],g.TILE,[t.x0,t.z0],[t.x0,t.z1],[t.x1,t.z1],[t.x1,t.z0]),e.quad([t.x0,t.floor,t.z1],[t.x0,t.floor,t.z0],[t.x0,n,t.z0],[t.x0,n,t.z1],[1,0,0],g.TILE,[t.z1,t.floor],[t.z0,t.floor],[t.z0,n],[t.z1,n]),e.quad([t.x1,t.floor,t.z0],[t.x1,t.floor,t.z1],[t.x1,n,t.z1],[t.x1,n,t.z0],[-1,0,0],g.TILE,[t.z0,t.floor],[t.z1,t.floor],[t.z1,n],[t.z0,n]),e.quad([t.x0,t.floor,t.z0],[t.x1,t.floor,t.z0],[t.x1,n,t.z0],[t.x0,n,t.z0],[0,0,1],g.TILE,[t.x0,t.floor],[t.x1,t.floor],[t.x1,n],[t.x0,n]),e.quad([t.x1,t.floor,t.z1],[t.x0,t.floor,t.z1],[t.x0,n,t.z1],[t.x1,n,t.z1],[0,0,-1],g.TILE,[t.x1,t.floor],[t.x0,t.floor],[t.x0,n],[t.x1,n])};c(s.a[0],s.a[1],!0),c(s.b[0],s.b[1],!1);for(let[u,f]of[s.a,s.b])e.quad([.012,n,f],[.012,n,u],[.012,n+.62,u],[.012,n+.62,f],[1,0,0],g.TILE,[f,n],[u,n],[u,n+.62],[f,n+.62]);let a=u=>{let f=t.floor+.004,r=f+s.TH,p=s.TX/2,x=s.TZ/2,y=.02,w=s.TXc,T=[[w-p+y,u-x+y],[w+p-y,u-x+y],[w+p-y,u+x-y],[w-p+y,u+x-y]],d=[[w-p,u-x],[w+p,u-x],[w+p,u+x],[w-p,u+x]];e.quad([T[0][0],f,T[0][1]],[T[3][0],f,T[3][1]],[T[2][0],f,T[2][1]],[T[1][0],f,T[1][1]],[0,1,0],g.STEEL);for(let R=0;R<4;R++){let k=(R+1)%4,F=[T[R][0],f,T[R][1]],J=[T[k][0],f,T[k][1]],t0=[d[k][0],r,d[k][1]],Q=[d[R][0],r,d[R][1]],C=(T[R][0]+T[k][0])/2-w,W=(T[R][1]+T[k][1])/2-u,A=Math.hypot(C,W)||1;e.quad(F,J,t0,Q,[-C/A*.95,.3,-W/A*.95],g.STEEL),e.quad(J,F,[Q[0],f+.001,Q[2]],[t0[0],f+.001,t0[2]],[C/A,0,W/A],g.STEEL)}f0(e,[...d,d[0]].map(R=>[R[0],r+.004,R[1]]),.005,5,g.STEEL)};for(let u of s.trays)a(u);let m=(u,f,r,p,x,y)=>{for(let w of[-.012,.012])f0(e,[[u,x,f+w],[(u+r)/2,(x+y)/2+.006,(f+p)/2+w*.6],[r,y,p+w*.2]],.0045,5,g.PEG)};m(s.TXc+.05,s.trays[0]+.12,s.TXc+.27,s.trays[0]+.42,s.liquid-.005,s.top+.03),m(s.TXc-.1,s.trays[2]-.2,s.TXc+.24,s.trays[2]-.05,s.liquid+.002,s.liquid+s.TH*.9);let l=t.z1-.3;f0(e,[[0,1.32,l],[.18,1.32,l],[.27,1.3,l],[.32,1.22,l],[.33,1.12,l]],.016,8,g.STEEL),e.box(0,1.27,l-.05,.05,1.37,l+.05,g.STEEL);let h=O.bulb;f0(e,[[0,2.32,h[2]],[h[0]*.6,2.32,h[2]],[h[0],2.28,h[2]]],.012,6,g.TRIM),e.box(0,2.24,h[2]-.06,.03,2.4,h[2]+.06,g.TRIM),f0(e,[[h[0],2.28,h[2]],[h[0]+.004,1.9,h[2]+.003],[h[0],h[1]+.2,h[2]]],.004,5,g.CABLE);{let u=B.vase,f=B.top,r=[[.045,0],[.07,.03],[.08,.09],[.072,.15],[.05,.2],[.042,.225],[.05,u.h]],p=24;for(let x=0;x<r.length-1;x++){let[y,w]=r[x],[T,d]=r[x+1];for(let R=0;R<p;R++){let k=R/p*Math.PI*2,F=(R+1)/p*Math.PI*2,J=(C,W,A)=>[u.x+Math.cos(A)*C,f+W,u.z+Math.sin(A)*C],t0=C=>{let W=T-y,A=d-w,G=Math.hypot(W,A);return[Math.cos(C)*A/G,-W/G,Math.sin(C)*A/G]},Q=(k+F)/2;e.quad(J(y,w,k),J(y,w,F),J(T,d,F),J(T,d,k),t0(Q),g.TRIM)}}}let b=O.shelf;e.box(0,b.y-.03,b.z0,b.d,b.y,b.z1,g.TRIM);for(let u of[b.z0+.08,b.z1-.08])e.box(0,b.y-.2,u-.012,.022,b.y-.03,u+.012,g.TRIM),e.box(0,b.y-.06,u-.012,b.d*.7,b.y-.03,u+.012,g.TRIM);let z=O.tube;f0(e,[[z.x+.02,z.y,z.z0],[z.x+.02,z.y,(z.z0+z.z1)/2],[z.x+.02,z.y,z.z1]],.035,10,g.TUBE),e.box(0,z.y-.05,z.z0-.06,.07,z.y+.05,z.z0-.01,g.TRIM),e.box(0,z.y-.05,z.z1+.01,.07,z.y+.05,z.z1+.06,g.TRIM);for(let u of O.lines){let f=[];for(let r=0;r<=24;r++){let p=r/24;f.push(Ee(u,p))}f0(e,f,.0035,5,g.CABLE);for(let r of[f[0],f[24]])f0(e,[[0,r[1]+.05,r[2]],[r[0]*.5,r[1]+.02,r[2]],[r[0]+.02,r[1],r[2]]],.007,5,g.TRIM)}}K.stack.forEach((s,n)=>{let t=K.models[s[0]],c=K.G,a=_/2+s[2],m=K.z+s[4]+t.d*c*.85,l=s.base+.12*c,h=_/2+(n%3-1)*.5,b=K.z+2.3+n%4*.12;f0(e,[[a,l,m-.05],[a+.05,l-.02,m+.15],[a+.1,Math.max(.02,l*.4),m+.35],[a*.6+h*.4,.018,m+.6],[h,.018,b]],.012,6,g.CABLE)}),f0(e,u0.path,u0.r,16,g.CABLE);{let[s,n,t]=u0.socket;e.box(s,n-.07,t-.07,s+.018,n+.07,t+.07,g.STEEL),e.box(s+.018,n-.035,t-.032,s+.11,n+.035,t+.032,g.TRIM),e.box(s,n+.042,t+.035,s+.03,n+.058,t+.051,g.TUBE)}e.box(e0.x0-.08,e0.y-.07,j-.08,e0.x0-.02,e0.y+.07,j,g.TRIM),e.box(e0.x1+.02,e0.y-.07,j-.08,e0.x1+.08,e0.y+.07,j,g.TRIM),f0(e,[[e0.x0-.02,e0.y,e0.z],[(e0.x0+e0.x1)/2,e0.y,e0.z],[e0.x1+.02,e0.y,e0.z]],.045,10,g.TUBE);for(let s of[0,1]){let n=s?_-.06:0,t=s?_:.06;e.box(n,0,0,t,.24,j,g.TRIM),e.box(s?_-.05:0,1,0,s?_:.05,1.08,j,g.TRIM);let c=s?_-.32:0,a=s?_:.32;e.box(c,Z-.25,0,a,Z+.08,j,g.TRIM)}for(let s of[0,1]){let n=s?j-.06:0,t=s?j:.06;s?e.box(0,0,n,_,.24,t,g.TRIM):(e.box(0,0,n,_/2-l0.hw,.24,t,g.TRIM),e.box(_/2+l0.hw,0,n,_,.24,t,g.TRIM));let c=s?j-.32:0,a=s?j:.32;e.box(0,Z-.25,c,_,Z+.08,a,g.TRIM)}return e}function tt(){let e=7,i=()=>(e=e*16807%2147483647,(e-1)/2147483646),L=[],I=[],D=[],s=[],n=[],t=[],c=[],a=3,m=4,l=(p,x,y,w,T,d,R,k,F)=>{let J=v0.w*T,t0=v0.h*T,Q=L.length/3;for(let C=0;C<=m;C++)for(let W=0;W<=a;W++){let A=W/a,G=C/m,o0=(A-.5)*J,r0=(G-.5)*t0,p0=k*((A-.5)*(A-.5)*4+(1-G)*(1-G)*.6);L.push($[0]+p[0]+x[0]*o0+y[0]*r0+w[0]*p0,$[1]+p[1]+x[1]*o0+y[1]*r0+w[1]*p0,$[2]+p[2]+x[2]*o0+y[2]*r0+w[2]*p0),I.push(w[0],w[1],w[2]),D.push(A,G),s.push(d),c.push(F||0),n.push(R[0]+$[0],R[1]+$[1],R[2]+$[2],R[3])}for(let C=0;C<m;C++)for(let W=0;W<a;W++){let A=Q+C*(a+1)+W,G=A+1,o0=A+a+1,r0=o0+1;t.push(A,G,r0,A,r0,o0)}},h=(p,x,y)=>{let w=Math.cos(y),T=Math.sin(y);return[p.map((d,R)=>d*w+x[R]*T),x.map((d,R)=>-p[R]*T+d*w)]},b=[0,0,0,0],z=0,u=(p,x,y,w,T,d,R,k,F)=>{let Q=0;for(let C=d;C<R;C+=.48)for(let W=w;W<T;W+=.4){let A=W+(i()-.5)*.4*.7,G=C+(i()-.5)*.48*.6;if(i()>k(A,G))continue;let[o0,r0]=h(y,[0,1,0],(i()-.5)*.5),p0=p(A,G,.012+.0016*(Q++%9)+i()*.004),c0=.88+i()*.3;l(p0,o0,r0,x,c0,Math.floor(i()*v0.n),b,(i()-.3)*.02),v0.spots.length<400&&v0.spots.push({c:p0,n:x,up:r0,size:v0.h*c0}),z++}},f=(p,x,y)=>Math.exp(-Math.pow((p-x)/y,2));for(let p=0;p<P.n-1;p++){let x=H[p+1],y=[[ee(p)+P.hw+.32,x-.66],[x+.66,ee(p+1)-P.hw-.32]];for(let[w,T]of y){let d=(R,k)=>.85*f(k,3.4,1.7);T>O.b[1]+.3&&u((R,k,F)=>[F,k,R],[1,0,0],[0,0,-1],w,T,1.45,6.3,d),u((R,k,F)=>[_-F,k,R],[-1,0,0],[0,0,1],w,T,1.45,6.3,d)}}let r=[];for(let p of O.lines){let x=p[3]-p[2]-.7;for(let y=.18;y<x-.1;y+=.3+i()*.14){let w=y/x,T=Ee(p,w);if(i()<.1||Math.abs(T[2]-O.bulb[2])<.4&&T[1]>2.3)continue;let d=.56+i()*.14,R=v0.h*d,k=(i()-.5)*.7,F=i()<.3?i()<.5?-.75:.75:k,[J,t0]=h([0,0,-1],[0,1,0],F),Q=[1,0,0],C=[T[0]+.004,T[1]-.02-t0[1]*R*.5,T[2]-t0[2]*R*.5];l(C,J,t0,Q,d,Math.floor(i()*v0.n),[T[0],T[1],T[2],-(.04+i()*.06)],.01+i()*.025,1),r.push(T),z++}}{let[p,x]=B.stack,y=[0,1,0];for(let T=0;T<9;T++){let d=(i()-.5)*.35+.3;l([p+(i()-.5)*.012,B.top+.003+T*.0022,x+(i()-.5)*.012],[Math.cos(d),0,Math.sin(d)],[Math.sin(d),0,-Math.cos(d)],y,.26,Math.floor(i()*v0.n),b,.004),z++}[[.13,.12,.9],[-.04,.2,-.4],[.2,-.05,1.6]].forEach(([T,d,R],k)=>{l([p+T,B.top+.002+k*.0012,x+d],[Math.cos(R),0,Math.sin(R)],[Math.sin(R),0,-Math.cos(R)],y,.26,Math.floor(i()*v0.n),b,.006),z++})}return{pos:L,nrm:I,uv:D,pic:s,piv:n,idx:t,sty:c,pegs:r,count:z}}var z0=`
	const float RW = ${v(_)}, RL = ${v(j)}, RH = ${v(Z)}, RT = ${v(Q0)};
	const float HW = ${v(P.hw)}, SILL = ${v(P.sill)}, SPRING = ${v(P.spring)};
	const float WZ0 = ${v(P.z0)}, WSTEP = ${v(P.step)};
	const vec3 RO = vec3(${v($[0])}, ${v($[1])}, ${v($[2])});
	const vec3 LDIR_L = vec3(${v(h0[0])}, ${v(h0[1])}, ${v(h0[2])});
	const vec3 LDIR_R = vec3(${v(-h0[0])}, ${v(h0[1])}, ${v(h0[2])});

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
	float winIdx(float z) { return clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${v(P.n-1)}); }
	// (on the left, the first windows are walled up)
	float leftOpen(float z) { return step(${v(P.leftFrom-.5)}, winIdx(z)); }
	vec2 winLocal(float z, float y) {
		float i = clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${v(P.n-1)});
		return vec2(z - (WZ0 + WSTEP * i), y);
	}
	// (on the right, the first window comes down to the table: its height
	// below the springing is stretched onto the others' shape)
	const float LSILL = ${v(P.lowSill)};
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
`;function ot(){return`
	#define STUDIO_SUN ${"vec3("+v(h0[0])+", "+v(h0[1])+", "+v(h0[2])+")"}
	#define STUDIO_SUN2 ${"vec3("+v(-h0[0])+", "+v(h0[1])+", "+v(h0[2])+")"}
	#define SHAFT_TINT vec3(0.6, 0.012, 0.008)
	#define STUDIO_AIR_EVEN
	${z0}
	float studioSun(vec3 p) {
		vec3 lp = p - RO;
		if (lp.x < 0.0 || lp.x > RW || lp.z < 0.0 || lp.z > RL || lp.y > RH + 2.0) return 0.0;
		vec3 c = redLightAir(lp);
		return dot(c, vec3(0.7, 0.2, 0.1)) * 3.2;
	}`}var ke=`
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
	}`,W0=`
	// the televisions' flicker, thrown on whatever is in front of them
	uniform vec4 tvLight;
	vec3 tvGlow(vec3 lp, vec3 N) {
		vec3 d = vec3(${v(_/2)}, 1.35, ${v(K.z-.9)}) - lp;
		float dd = dot(d, d);
		float face = 0.35 + 0.65 * max(0.0, dot(N, normalize(d)));
		// (only in front of them: the stack's own back is in its shadow)
		float front = smoothstep(${v(K.z+.6)}, ${v(K.z-.2)}, lp.z);
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
		vec2 su = clamp((floor(uv * vec2(300.0, 225.0)) + 0.5) / vec2(300.0, 225.0), 0.01, 0.99);
		vec2 tile = vec2(mod(k, 6.0), floor(k / 6.0));
		vec3 pc = vec3(0.0);
		for (int i = 0; i < 5; i++) {
			vec2 o = i == 0 ? vec2(0.0) : vec2(i == 1 ? 1.0 : (i == 2 ? -1.0 : 0.0), i == 3 ? 1.0 : (i == 4 ? -1.0 : 0.0)) * 0.0042;
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
		vec3 c = mix(vec3(l), pcol * (l / max(l0, 0.02)), 0.36 * (1.0 - gap));
		return vec3(1.0, 0.86, 0.66) * max(c, 0.0) * vig;
	}
	// where a point in the room is in the projected picture (x, y in 0..1;
	// z: how far along the beam, 0 at the lens, 1 at the wall)
	vec3 projUV(vec3 lp) {
		vec3 L0 = vec3(${v(N.lens[0])}, ${v(N.lens[1])}, ${v(N.lens[2])});
		vec3 d = lp - L0;
		float s = (${v(j-.005)} - L0.z) / max(d.z, 1e-4);
		vec3 h = L0 + d * s;
		return vec3(1.0 - (h.x - ${v(N.img.x-N.img.w/2)}) / ${v(N.img.w)}, (h.y - ${v(N.img.y-N.img.h/2)}) / ${v(N.img.h)}, 1.0 / s);
	}
	// the televisions stand in the beam's way: their shadows on the picture
	uniform vec3 tvLo[12], tvHi[12];
	float projShadow(vec3 lp) {
		vec3 L0 = vec3(${v(N.lens[0])}, ${v(N.lens[1])}, ${v(N.lens[2])});
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
		vec3 c = vec3(clamp(lp.x, ${v(e0.x0)}, ${v(e0.x1)}), ${v(e0.y)}, ${v(e0.z)});
		vec3 d = c - lp;
		float dd = dot(d, d);
		float face = 0.25 + 0.75 * max(0.0, dot(N, normalize(d)));
		return vec3(1.0, 0.06, 0.045) * 2.6 * face / (1.0 + dd * 0.055);
	}
	// the darkroom: the bare red bulb over the trays, the tube over the lines
	vec3 darkLight(vec3 lp, vec3 N) {
		vec3 d = vec3(${v(O.bulb[0])}, ${v(O.bulb[1])}, ${v(O.bulb[2])}) - lp;
		float dd = dot(d, d);
		vec3 c = vec3(1.0, 0.07, 0.04) * 1.15 * (0.2 + 0.8 * max(0.0, dot(N, normalize(d)))) / (0.02 + dd * 2.2);
		vec3 tq = vec3(${v(O.tube.x+.02)}, ${v(O.tube.y)}, clamp(lp.z, ${v(O.tube.z0)}, ${v(O.tube.z1)}));
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
		vec3 Ls = vec3(${v(_/2)}, 1.25, 1.6);
		vec3 d = lp - Ls;
		float t = (${v(-l0.depth)} - Ls.z) / d.z;
		vec3 h = Ls + d * t;
		float m = smoothstep(0.08, -0.05, abs(h.x - ${v(_/2)}) - ${v(l0.hw)}) * smoothstep(0.08, -0.05, h.y - ${v(l0.h)}) * step(0.0, h.y);
		float dd = dot(d, d);
		vec3 Ld = -normalize(d);
		vec3 c = vec3(1.0, 0.07, 0.05) * 26.0 * m * (0.15 + 0.85 * max(0.0, dot(N, Ld))) / (1.0 + dd * 0.55);
		vec3 sd = vec3(${v(d0.sign[0])}, ${v(d0.sign[1])}, ${v(d0.sign[2])}) - lp;
		c += vec3(1.0, 0.12, 0.1) * signK * 0.5 * (0.2 + 0.8 * max(0.0, dot(N, normalize(sd)))) / (0.05 + dot(sd, sd) * 3.0);
		return c;
	}
	// the roses and the vase standing in the candles' light: soft round
	// blockers, so they throw soft shadows across the table and the window
	float candleShade(vec3 lp, vec3 d) {
		float sh = 1.0;
		float len = length(d);
		vec3 dir = d / len;
		${B.occ.map(e=>`{
			vec3 C = vec3(${v(e[0])}, ${v(e[1])}, ${v(e[2])}) - lp;
			float t = dot(C, dir);
			float cd = length(C - dir * t);
			float r = ${v(e[3])};
			if (t > 0.0 && t < len && dot(C, C) > r * r * 1.1) sh *= mix(1.0, smoothstep(r * 0.35, r * (1.0 + 2.5 * t / len), cd), 0.9);
		}`).join(`
`)}
		return sh;
	}
	// the candles on the table: a warm, breathing light close round them
	vec3 candleLight(vec3 lp, vec3 N) {
		vec3 sum = vec3(0.0);
		${B.flames.map((e,i)=>`{
			vec3 d = vec3(${v(e[0])}, ${v(e[1])}, ${v(e[2])}) - lp;
 			float r2 = dot(d, d);
			float sh = candleShade(lp, d);
			float fl = 0.82 + 0.1 * sin(time * (9.0 + ${v(i*1.7)}) + ${v(i*2.1)}) * sin(time * 3.3 + ${v(i)}) + 0.08 * sin(time * 23.0 + ${v(i*4)});
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
		return (vec3(0.2, 0.017, 0.02) * (0.8 + 0.2 * N.y) + vec3(0.1, 0.007, 0.007) * exp(-lp.y * 0.25)) * room + vec3(0.7, 0.06, 0.04) * g + tvGlow(lp, N) + safeLight(lp, N) + darkLight(lp, N) + doorGlow(lp, N) + candleLight(lp, N);
	}
	// what the lit floor throws back up onto the walls and the shafts
	vec3 bounce(vec3 lp, vec3 N) {
		vec3 fp = vec3(clamp(lp.x + N.x * (0.8 + lp.y * 0.35), 0.1, RW - 0.1), 0.0, lp.z + N.z * (0.8 + lp.y * 0.35));
		vec3 b = redLightRough(fp) * 0.5 + redLightRough(fp + vec3(N.x * 1.4, 0.0, 1.2)) * 0.25 + redLightRough(fp + vec3(N.x * 1.4, 0.0, -1.2)) * 0.25;
		return b * 0.42 * exp(-lp.y * 0.18) * (0.55 + 0.45 * max(0.0, -N.y + 0.4));
	}

`,$e=`
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, yScale, mirrorOn, reflOn;
	uniform sampler2D reflTex;
	uniform vec2 reflSize;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${z0}

	const float DHW = ${v(l0.hw)}, DH = ${v(l0.h)};

	${W0}

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
			}
			if (k == 9 || k == 10) {
				// glazed tiles and steel: the bulb and the tube shine in them
				vec3 Rf = reflect(-V, N);
				vec3 bd = normalize(vec3(${v(O.bulb[0])}, ${v(O.bulb[1])}, ${v(O.bulb[2])}) - lp);
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
				if (k == 0 && lp.z > ${v(K.z-1.5)}) {
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
	}`,st=`
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
	}`,nt=`
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, sigTime, yScale, seed, dark, nMem, emit;
	uniform sampler2D bodyTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_flag;
	${z0}
	${W0}

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
		vec2 mu = clamp((floor((q + 0.5) * vec2(220.0, 165.0)) + 0.5) / vec2(220.0, 165.0), 0.002, 0.998);
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
				vec3 Lp = normalize(vec3(${v(N.lens[0])}, ${v(N.lens[1])}, ${v(N.lens[2])}) - lp);
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
	}`,at=`
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
	}`,rt=`
	precision highp float;
	uniform float time, yScale;
	uniform sampler2D polTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_pic, v_style;
	${z0}
	${W0}
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
	}`,it=`
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
	}`,lt=`
	precision highp float;
	uniform float time;
	varying vec3 v_pos, v_eye;
	varying float v_layer;
	${z0}
	${W0}
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
	}`,ct=`
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
	}`,ft=`
	precision highp float;
	uniform float time;
	uniform sampler2D printTex, polTex;
	varying vec3 v_pos, v_eye;
	varying float v_tray;
	${z0}
	${W0}
	const vec3 BULB = vec3(${v(O.bulb[0])}, ${v(O.bulb[1])}, ${v(O.bulb[2])});
	void main() {
		vec3 lp = v_pos - RO;
		int k = int(v_tray + 0.5);
		float zc = k == 0 ? ${v(O.trays[0])} : (k == 1 ? ${v(O.trays[1])} : ${v(O.trays[2])});
		vec2 tl = vec2(lp.x - ${v(O.TXc)}, lp.z - zc);
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
	}`,ht=`
	precision highp float;
	uniform mat4 proj, view;
	uniform float time, pxScale;
	attribute vec4 seed;
	varying float v_b, v_w;
	${z0}
	void main() {
		vec3 lp = vec3(0.3 + seed.x * (RW - 0.6), 0.2 + seed.y * (RH - 0.5), 0.3 + seed.z * (RL - 0.6));
		float t = time * (0.03 + 0.03 * seed.w);
		lp += vec3(sin(t * 3.1 + seed.w * 40.0) * 0.35, sin(t * 1.7 + seed.x * 30.0) * 0.4 - t * 0.6, cos(t * 2.3 + seed.z * 50.0) * 0.35);
		lp.y = 0.2 + mod(lp.y - 0.2, RH - 0.5);
		vec3 c = redLightAir(lp);
		v_b = dot(c, vec3(0.6, 0.3, 0.1));
		// and in the projector's beam, lit warm
		vec3 L0 = vec3(${v(N.lens[0])}, ${v(N.lens[1])}, ${v(N.lens[2])});
		vec3 dd = lp - L0;
		float s = (${v(j)} - L0.z) / max(dd.z, 1e-4);
		vec3 hh = L0 + dd * s;
		vec2 pu = vec2((hh.x - ${v(N.img.x-N.img.w/2)}) / ${v(N.img.w)}, (hh.y - ${v(N.img.y-N.img.h/2)}) / ${v(N.img.h)});
		v_w = (dd.z > 0.2 && pu.x > 0.0 && pu.x < 1.0 && pu.y > 0.0 && pu.y < 1.0) ? 1.6 : 0.0;
		vec4 v = view * vec4(lp + RO, 1.0);
		gl_Position = proj * v;
		float tw = 0.6 + 0.4 * sin(time * (1.0 + seed.w * 2.0) + seed.x * 80.0);
		v_b *= tw;
		gl_PointSize = clamp(pxScale * (0.012 + 0.012 * seed.w) / max(0.2, -v.z), 1.0, 6.0);
	}`,pt=`
	precision highp float;
	varying float v_b, v_w;
	void main() {
		vec2 d = gl_PointCoord - 0.5;
		float a = smoothstep(0.5, 0.0, length(d));
		gl_FragColor = vec4((vec3(1.0, 0.14, 0.09) * min(v_b, 1.4) + vec3(1.0, 0.8, 0.55) * v_w) * a * 0.55, 1.0);
	}`;pe.exports=function(e){let i=et(),L={position:e.buffer(i.pos),normal:e.buffer(i.nrm),kind:e.buffer(i.kind),uv:e.buffer(i.uv)},I=e.elements({data:i.idx.length>65535?new Uint32Array(i.idx):new Uint16Array(i.idx),type:i.idx.length>65535?"uint32":"uint16"}),D=e.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),s=e.framebuffer({color:D,depth:!0}),n=e({framebuffer:s}),t=e.texture({width:1,height:1,data:[0,0,0,255]}),c=e({}),a=t,m=0,l=0,h=!1,b=[4,4],z=[0,0,0,0],u=null,f=e.texture({width:1,height:1,data:[0,0,0,255]}),r=1,p=o=>{let M=U=>{let X=Math.sin(U*127.1)*43758.5453;return X-Math.floor(X)},S=Math.floor(o*9),q=M(S),E=M(Math.floor(o*.7)),V=.92+.08*Math.sin(o*120);return E>.55&&q>.6&&(V=q>.85?.08:.45),V},x={signK:()=>r,memTex:()=>u||f,projT:o=>typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:o.time};K.stack.forEach((o,M)=>{let S=K.models[o[0]],q=K.G;x["tvLo["+M+"]"]=[_/2+o[2]-S.w*q/2,o.base,K.z+o[4]-.02],x["tvHi["+M+"]"]=[_/2+o[2]+S.w*q/2,o.base+S.h*q,K.z+o[4]+S.d*q]});let y=e({vert:ke,frag:$e,attributes:L,elements:I,cull:{enable:!1},uniforms:{reflTex:()=>a,reflSize:()=>b,reflOn:()=>m,tvLight:()=>z,...x}}),w=o=>new Promise((M,S)=>{let q=new Image,E=V=>(V&V-1)===0;q.onload=()=>M(e.texture({data:q,min:E(q.width)&&E(q.height)?"mipmap":"linear",mag:"linear",wrap:"clamp"})),q.onerror=S,q.src=o}),T=K.stack.map((o,M)=>{let[S,,q,E,V]=o,U=Math.PI+E*Math.PI/180,X=K.G,i0=Math.cos(U)*X,m0=Math.sin(U)*X,w0=$[0]+_/2+q,g0=$[1]+o.base,G0=$[2]+K.z+V;return{name:S,seed:(M+1)*.6180339%1,model:[i0,0,-m0,0,0,X,0,0,m0,0,i0,0,w0,g0,G0,1]}}),d={},R=null,F=e({vert:st,frag:nt,attributes:{position:{buffer:e.prop("vb"),stride:36,offset:0},normal:{buffer:e.prop("vb"),stride:36,offset:12},uv:{buffer:e.prop("vb"),stride:36,offset:24},flag:{buffer:e.prop("vb"),stride:36,offset:32}},elements:e.prop("el"),offset:e.prop("offset"),count:e.prop("count"),cull:{enable:!1},uniforms:{model:e.prop("model"),seed:e.prop("seed"),dark:e.prop("dark"),emit:(o,M)=>M.emit||0,bodyTex:e.prop("tex"),...x,memTex:()=>R||f,nMem:36,sigTime:o=>typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:o.time,tvLight:()=>z}});w("res/redroom/memories.webp").then(o=>{R=o,u=o}).catch(o=>console.error("The memories did not load",o));for(let o in K.models){let M=K.models[o],S=[];for(let q=0;q<M.tex;q++)S.push(w("res/redroom/tv_"+o+"_"+q+".webp"));Promise.all([fetch(M.file).then(q=>q.arrayBuffer()),...S]).then(([q,...E])=>{let V=new Uint32Array(q,0,4),U=V[0],X=V[1],i0=V[2],m0=V[3],w0=new Int32Array(q,16,i0*3),g0=16+i0*12,G0=e.buffer(new Float32Array(q,g0,U*9)),E0=g0+U*36,re=m0?new Uint32Array(q.slice(E0,E0+X*4)):new Uint16Array(q.slice(E0,E0+X*2)),J0=e.elements({data:re,type:m0?"uint32":"uint16"}),y0=[];for(let P0=0;P0<i0;P0++)y0.push({offset:w0[P0*3],count:w0[P0*3+1],tex:w0[P0*3+2]>=0?E[w0[P0*3+2]]:E[0]});d[o]={vb:G0,el:J0,parts:y0,dark:M.dark}}).catch(q=>console.error("A television did not load",q))}let J=[],t0=()=>{if(R){J.length=0;for(let o of T){let M=d[o.name];if(M)for(let S of M.parts)J.push({vb:M.vb,el:M.el,offset:S.offset,count:S.count,tex:S.tex,model:o.model,seed:o.seed,dark:M.dark})}J.length&&F(J)}},Q=tt(),C=null;w("res/redroom/polaroids.webp").then(o=>{C=o}).catch(o=>console.error("The photographs did not load",o));let W=e({vert:at,frag:rt,attributes:{position:Q.pos,normal:Q.nrm,uv:Q.uv,pic:Q.pic,style:Q.sty,pivot:{buffer:e.buffer(Q.piv),size:4}},elements:e.elements({data:new Uint16Array(Q.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...x,polTex:()=>C,tvLight:()=>z}}),A=(o,M)=>Promise.all([fetch(o).then(S=>S.arrayBuffer()),...M.map(w)]).then(([S,...q])=>{let E=new Uint32Array(S,0,4),V=E[0],U=E[1],X=E[2],i0=E[3],m0=new Int32Array(S,16,X*3),w0=16+X*12,g0=w0+V*36,G0=e.buffer(new Float32Array(S,w0,V*9)),E0=i0?new Uint32Array(S.slice(g0,g0+U*4)):new Uint16Array(S.slice(g0,g0+U*2)),re=e.elements({data:E0,type:i0?"uint32":"uint16"}),J0=[];for(let y0=0;y0<X;y0++)J0.push({offset:m0[y0*3],count:m0[y0*3+1],tex:q[Math.max(0,m0[y0*3+2])],mat:m0[y0*3+2]});return{vb:G0,el:re,parts:J0}}),G=(o,M)=>{let S=new Array(16);for(let q=0;q<4;q++)for(let E=0;E<4;E++)S[q*4+E]=o[E]*M[q*4]+o[4+E]*M[q*4+1]+o[8+E]*M[q*4+2]+o[12+E]*M[q*4+3];return S},o0=(o,M,S)=>[1,0,0,0,0,1,0,0,0,0,1,0,o,M,S,1],r0=o=>{let M=Math.cos(o),S=Math.sin(o);return[1,0,0,0,0,M,S,0,0,-S,M,0,0,0,0,1]},p0=G(o0($[0]+N.x,$[1]+N.table,$[2]+N.z),r0(-N.pitch)),c0=N.tableK,F0=[c0,0,0,0,0,c0,0,0,0,0,c0,0,$[0]+_/2,$[1],$[2]+15,1],Y={},O0=["res/redroom/proj_0.webp"];A("res/redroom/proj_body.bin",O0).then(o=>{Y.body=o}).catch(o=>console.error(o)),A("res/redroom/proj_feed.bin",O0).then(o=>{Y.feed=o}).catch(o=>console.error(o)),A("res/redroom/proj_takeup.bin",O0).then(o=>{Y.takeup=o}).catch(o=>console.error(o)),A("res/redroom/table_all.bin",["res/redroom/table_0.webp"]).then(o=>{Y.table=o}).catch(o=>console.error(o));let U0=(o,M)=>G(p0,G(o0(o[0],o[1],o[2]),G(r0(M),o0(-o[0],-o[1],-o[2])))),k0=[],s0=o=>{k0.length=0;let M=(S,q,E)=>{if(S)for(let V of S.parts)k0.push({vb:S.vb,el:S.el,offset:V.offset,count:V.count,tex:V.tex,model:q,seed:0,dark:E})};M(Y.table,F0,.9),M(Y.body,p0,1),M(Y.feed,U0(N.feed,-o*2.6),1),M(Y.takeup,U0(N.takeup,-o*3.5),1),k0.length&&F(k0)},se=[],xe=[];{let o=[$[0]+N.lens[0],$[1]+N.lens[1],$[2]+N.lens[2]];[.96,.86,.76,.66,.56,.46,.36].forEach((M,S)=>{let q=N.img.w/2*M,E=N.img.h/2*M,V=[[-q,-E],[q,-E],[q,E],[-q,E]].map(([U,X])=>[$[0]+N.img.x+U,$[1]+N.img.y+X,$[2]+j-.02]);for(let U=0;U<4;U++){let X=V[U],i0=V[(U+1)%4];se.push(...o,...X,...i0),xe.push(S,S,S)}})}let je=e({vert:it,frag:lt,attributes:{position:se,layer:xe},count:se.length/3,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{...x,tvLight:()=>z}}),Ge=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale, pxScale; attribute vec3 position; void main() { vec3 p = position; p.y *= yScale; vec4 v = view * vec4(p, 1.0); gl_Position = proj * v; gl_PointSize = clamp(pxScale * 0.22 / max(0.3, -v.z), 4.0, 220.0); }",frag:"precision highp float; uniform float time; void main() { vec2 d = gl_PointCoord - 0.5; float r = length(d); float a = exp(-r * r * 160.0) * 1.6 + 0.35 * exp(-r * r * 30.0) + 0.12 * exp(-r * r * 8.0) + 0.5 * exp(-d.y * d.y * 2500.0) * exp(-abs(d.x) * 7.0); gl_FragColor = vec4(vec3(1.0, 0.84, 0.62) * a * (0.9 + 0.1 * sin(time * 37.0)), 1.0); }",attributes:{position:[$[0]+N.lens[0],$[1]+N.lens[1],$[2]+N.lens[2]+.01]},count:1,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),we=null;w("res/redroom/print.webp").then(o=>{we=o}).catch(o=>console.error(o));let ne=[],ge=[];O.trays.forEach((o,M)=>{let S=O.TX/2-.009,q=O.TZ/2-.009,E=O.TXc,V=O.liquid,U=[[E-S,o-q],[E+S,o-q],[E+S,o+q],[E-S,o+q]].map(([X,i0])=>[$[0]+X,$[1]+V,$[2]+i0]);ne.push(...U[0],...U[2],...U[1],...U[0],...U[3],...U[2]);for(let X=0;X<6;X++)ge.push(M)});let We=e({vert:ct,frag:ft,attributes:{position:ne,tray:ge},count:ne.length/3,cull:{enable:!1},uniforms:{...x,tvLight:()=>z,printTex:()=>we||f,polTex:()=>C||f}}),$0=Ne();for(let o of Q.pegs)$0.box(o[0]-.008,o[1]-.045,o[2]-.011,o[0]+.008,o[1]+.03,o[2]+.011,g.PEG);let Ve=e({vert:ke,frag:$e,attributes:{position:$0.pos,normal:$0.nrm,kind:$0.kind,uv:$0.uv},elements:e.elements({data:new Uint16Array($0.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...x,reflTex:()=>t,reflSize:[4,4],reflOn:0,tvLight:()=>z}}),He=o=>{let M=Math.cos(o),S=Math.sin(o);return[M,0,-S,0,0,1,0,0,S,0,M,0,0,0,0,1]},n0=(o,M,S,q)=>G(o0($[0]+o,$[1]+M,$[2]+S),He(q||0));A("res/redroom/plastic_all.bin",["res/redroom/plastic_0.webp"]).then(o=>{Y.jug=o}).catch(o=>console.error(o)),A("res/redroom/multi_cleaner_all.bin",["res/redroom/multi_cleaner_0.webp"]).then(o=>{Y.can=o}).catch(o=>console.error(o)),A("res/redroom/pull_all.bin",["res/redroom/pull_0.webp"]).then(o=>{Y.socket=o}).catch(o=>console.error(o)),A("res/redroom/bulb_all.bin",["res/redroom/bulb_0.webp","res/redroom/bulb_1.webp"]).then(o=>{Y.bulb=o}).catch(o=>console.error(o));let R0=O.top,A0=O.b[0],Fe=[["jug",n0(.16,R0,A0+.3,.4)],["jug",n0(.17,R0,A0+.52,-.3)],["jug",n0(.36,R0,A0+.4,2.2)],["can",n0(.14,R0,A0+.95,1.57)],["can",n0(.15,R0,A0+1.3,1.45)],["jug",n0(.16,R0,O.b[1]-.35,.9)],["can",n0(.2,R0,O.b[1]-.8,1.7)],["socket",n0(O.bulb[0],O.bulb[1]+.065,O.bulb[2],0)],["bulb",G(n0(O.bulb[0],O.bulb[1]+.048,O.bulb[2],0),r0(Math.PI))]],_0=(o,M)=>[o,0,0,0,0,M===void 0?o:M,0,0,0,0,o,0,0,0,0,1];A("res/redroom/wtable_all.bin",["res/redroom/wtable_0.webp"]).then(o=>{Y.wtable=o}).catch(o=>console.error(o)),A("res/redroom/wchair_all.bin",["res/redroom/wchair_0.webp"]).then(o=>{Y.wchair=o}).catch(o=>console.error(o)),A("res/redroom/cstick_holder.bin",["res/redroom/cstick_0.webp"]).then(o=>{Y.holder=o}).catch(o=>console.error(o)),A("res/redroom/cstick_candle.bin",["res/redroom/cstick_0.webp"]).then(o=>{Y.candle=o}).catch(o=>console.error(o)),A("res/redroom/rose_all.bin",["res/redroom/rose_0.webp"]).then(o=>{Y.rose=o}).catch(o=>console.error(o)),A("res/redroom/camera_all.bin",[0,1,2,3].map(o=>"res/redroom/camera_"+o+".webp")).then(o=>{Y.camera=o}).catch(o=>console.error(o));let C0=B.k,j0=B.z,B0=Math.PI/2,N0=[["wtable",G(n0(B.x,0,j0,B0),_0(C0)),1.7],["wchair",G(n0(B.x-B.depth/2-.36,0,j0-.42,B0+.05),_0(C0)),1.6],["wchair",G(n0(B.x-B.depth/2-.42,0,j0+.45,B0-.12),_0(C0)),1.6],["wchair",G(n0(B.x+.02,0,j0-B.half-.36,.06),_0(C0)),1.6],["wchair",G(n0(B.x-.05,0,j0+B.half+.4,Math.PI-.1),_0(C0)),.95]];for(let[o,M,S]of B.candles)N0.push(["holder",n0(o,B.top,M,S*3),.9]),N0.push(["candle",G(n0(o,B.top,M,S*3),G(o0(0,.156,0),G(_0(1,S),o0(0,-.156,0)))),1.15]);{let o=7,M=()=>(o=o*16807%2147483647,(o-1)/2147483646),S=B.vase;for(let q=0;q<9;q++){let E=q*2.39996+M()*.4,V=q===0?.04:.16+M()*.2,U=.66+M()*.12,X=S.h+.25*U-.1-(q===0?-.04:M()*.05),i0=G(G(n0(S.x,B.top+.02,S.z,E),r0(V)),G(o0(0,X-.02,0),G(r0(Math.PI/2),G(_0(U),o0(0,-.13,0)))));N0.push(["rose",i0,2])}}for(let[o,M,S]of B.laid)N0.push(["rose",G(n0(o,B.top+.002,M,S),_0(.72)),2]);N0.push(["camera",n0(.15,O.shelf.y,(O.shelf.z0+O.shelf.z1)/2,B0-.4),1.7]);let Ue=()=>{let o=[];for(let[M,S]of Fe){let q=Y[M];q&&q.parts.forEach((E,V)=>o.push({vb:q.vb,el:q.el,offset:E.offset,count:E.count,tex:E.tex,model:S,seed:0,dark:M==="jug"||M==="can"?.85:.7,emit:M==="bulb"&&E.mat===0?1.6:0}))}for(let[M,S,q]of N0){let E=Y[M];if(E)for(let V of E.parts)o.push({vb:E.vb,el:E.el,offset:V.offset,count:V.count,tex:V.tex,model:S,seed:0,dark:q,emit:0})}o.length&&F(o),Be(),We(),Ve()},Be=e({vert:`
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
			}`,attributes:{fp:[].concat(...B.flames.map((o,M)=>[$[0]+o[0],$[1]+o[1],$[2]+o[2],M*1.37]))},count:B.flames.length,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),K0=document.createElement("canvas");K0.width=512,K0.height=192;{let o=K0.getContext("2d");o.fillStyle="#000",o.fillRect(0,0,512,192),o.font='bold 128px "Helvetica Neue", Arial, sans-serif',o.textAlign="center",o.textBaseline="middle",o.shadowColor="#ff2a20",o.shadowBlur=28,o.fillStyle="#ff6a5a",o.fillText("ENTER",256,100),o.shadowBlur=0,o.fillStyle="#ffd8d0",o.fillText("ENTER",256,100)}let Ke=e.texture({data:K0,min:"linear",mag:"linear",wrap:"clamp"}),x0=d0.sign,X0=.3,Y0=.1125,Z0=x0[2]-.025,Xe=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale; attribute vec3 position; attribute vec2 uv; varying vec2 v_uv; void main() { v_uv = uv; vec3 p = position; p.y *= yScale; gl_Position = proj * view * vec4(p, 1.0); }",frag:"precision highp float; uniform sampler2D tex; uniform float signK; varying vec2 v_uv; void main() { vec3 c = texture2D(tex, v_uv).rgb; vec3 col = c * vec3(1.6, 0.55, 0.5) * signK + vec3(0.06, 0.0, 0.0); gl_FragColor = vec4(col, 1.0); }",attributes:{position:[[x0[0]+X0,x0[1]-Y0,Z0],[x0[0]-X0,x0[1]-Y0,Z0],[x0[0]-X0,x0[1]+Y0,Z0],[x0[0]+X0,x0[1]+Y0,Z0]].map(o=>[o[0]+$[0],o[1]+$[1],o[2]+$[2]]),uv:[[0,1],[1,1],[1,0],[0,0]]},elements:[0,1,2,0,2,3],cull:{enable:!1},uniforms:{tex:Ke,signK:()=>r}}),ye=220,be=[];for(let o=0;o<ye;o++)be.push(Math.random(),Math.random(),Math.random(),Math.random());let Ye=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b;
			void main() {
				vec3 L0 = vec3(${v($[0]+N.lens[0])}, ${v($[1]+N.lens[1])}, ${v($[2]+N.lens[2])});
				vec3 C = vec3(${v($[0]+N.img.x)}, ${v($[1]+N.img.y)}, ${v($[2]+j)});
				vec3 fw = normalize(C - L0);
				vec3 rt = normalize(cross(fw, vec3(0.0, 1.0, 0.0)));
				vec3 up = cross(rt, fw);
				// most of them close to the lens
				float along = 0.15 + pow(seed.x, 2.2) * 7.5;
				float sp = along / length(C - L0);
				vec2 off = (vec2(seed.y, seed.z) - 0.5) * vec2(${v(N.img.w)}, ${v(N.img.h)}) * sp;
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
			}`,frag:"precision highp float; varying float v_b; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vec3(1.0, 0.84, 0.6) * v_b * a, 1.0); }",attributes:{seed:be},count:ye,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),ae=70,_e=[];for(let o=0;o<ae;o++)_e.push(Math.random(),Math.random(),Math.random(),o<ae*.6?1:0);let Ze=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b, v_a, v_s;
			void main() {
				vec3 L0 = vec3(${v($[0]+N.lens[0])}, ${v($[1]+N.lens[1])}, ${v($[2]+N.lens[2])});
				vec3 C = vec3(${v($[0]+N.img.x)}, ${v($[1]+N.img.y)}, ${v($[2]+j)});
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
				float rc = 0.04 + al * ${v(N.img.h*.5)} / length(C - L0);
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
			${z0}
			void main() {
				vec2 d = gl_PointCoord - 0.5;
				float g = exp(-dot(d, d) * 9.0);
				float n = rnoise(gl_PointCoord * 3.2 + v_s + time * 0.05) * 0.7 + rnoise(gl_PointCoord * 7.0 - v_s) * 0.3;
				float a = g * smoothstep(0.2, 0.8, n) * v_a * 0.15;
				gl_FragColor = vec4(mix(vec3(0.5, 0.06, 0.04), vec3(1.0, 0.86, 0.68), clamp(v_b - 0.12, 0.0, 1.0)) * v_b * a, 1.0);
			}`,attributes:{seed:_e},count:ae,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),ze=2200,Le=[];for(let o=0;o<ze;o++)Le.push(Math.random(),Math.random(),Math.random(),Math.random());let Je=e({vert:ht,frag:pt,attributes:{seed:Le},count:ze,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),Re=o=>{let M=!!(o&&o.reflected),S=performance.now()/1e3,q=.8+.12*Math.sin(S*47)*Math.sin(S*3.1)+.08*Math.sin(S*23+1.3);z[0]=.8*q,z[1]=.84*q,z[2]=.95*q,r=p(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:S),y(),Xe(),t0(),C&&W(),Ue(),s0(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:S),u&&!(typeof window!="undefined"&&window.__noBeam)&&je(),Ge(),!M&&!(typeof window!="undefined"&&window.__noSmoke)&&Ze(),M||Ye(),M||Je()};return Re.reflect=(o,M)=>c(S=>{let q=S.viewportWidth,E=S.viewportHeight,V=Math.max(2,Math.round(q/2)),U=Math.max(2,Math.round(E/2)),X=!h;if((s.width!==V||s.height!==U)&&(s.resize(V,U),X=!0),b[0]=q,b[1]=E,m=1,!X&&++l%M!==0){a=D;return}a=t,n(()=>{e.clear({color:[0,0,0,1],depth:1}),o()}),a=D,h=!0}),Re};var he=null;Object.assign(pe.exports,{O:$,W:_,L:j,H:Z,ROOM:{W:_,L:j,H:Z,WIN:P,DOOR:l0,ENT:d0,SHAFTS:H,TV:K,DARK:O,PROJ:N,CABLE:u0,POL:v0,TBL:B,winZ:ee,vaultY:M0},POST:{threshold:.3},sunGLSL:ot,bakedSun(e){return he||(he=e.texture({width:1,height:1,data:[0,0,0,0]})),he},ready:()=>!0,setFlower(){},setGuide(){},setWind(){}})});var Ce=ie((yt,Ae)=>{"use strict";var oe=ve(),{O:de}=oe,{W:a0,L:me,TV:D0,DARK:q0,PROJ:I0,TBL:S0}=oe.ROOM,Pe=e=>[e[0]+de[0],e[1]+de[1],e[2]+de[2]],De=(e,i,L)=>e+(i-e)*L,vt=e=>Math.max(0,Math.min(1,e)),L0=I0.x,dt=I0.table,H0=I0.z,V0=[L0+I0.feed[0],dt+I0.feed[1],H0+I0.feed[2]],te=I0.lens,ue=q0.trays[0],mt=[{eye:[a0/2+.15,1.55,-9.6],at:[a0/2,1.7,0],fov:40,dof:.05,p:{fov:58}},{eye:[a0/2+.05,1.6,-3],at:[a0/2,1.85,1.5],fov:50,dof:.05,p:{fov:70}},{eye:[a0/2-.2,1.5,.9],at:[a0/2-3,1.4,7],fov:56,dof:.04,p:{fov:74}},{eye:[a0-4.4,1.55,1.2],at:[a0-.7,1.05,S0.z+.2],fov:46,dof:.06,p:{eye:[a0-4.8,1.6,.9],fov:68}},{eye:[S0.x-1.4,S0.top+.48,S0.z-.7],at:[S0.x+.05,S0.top+.26,S0.z+0],fov:40,dof:.32,p:{fov:50}},{eye:[3.3,1.55,1.3],at:[.3,1.35,5.2],fov:50,dof:.05,p:{eye:[2.8,1.6,.9],fov:72}},{eye:[1.05,1.5,ue-.42],at:[q0.TXc-.02,q0.liquid,ue+.04],fov:34,dof:.2,p:{eye:[1,1.55,ue-.45],fov:52}},{eye:[.62,1.68,(q0.shelf.z0+q0.shelf.z1)/2-.36],at:[.14,1.55,(q0.shelf.z0+q0.shelf.z1)/2],fov:34,dof:.34,p:{fov:48}},{eye:[2,1.6,8.3],at:[.4,2.25,11.3],fov:50,dof:.12,p:{eye:[1.8,1.6,8.1],fov:72}}];function Oe(e,i){let L=e.length-1,I=Math.max(0,Math.min(L,i)),D=Math.min(L-1,Math.floor(I)),s=I-D,n=e[Math.max(0,D-1)],t=e[D],c=e[D+1],a=e[Math.min(L,D+2)],m=s*s,l=m*s;return[0,1,2].map(h=>.5*(2*t[h]+(-n[h]+c[h])*s+(2*n[h]-5*t[h]+4*c[h]-a[h])*m+(-n[h]+3*t[h]-3*c[h]+a[h])*l))}function ut(){let e=mt.slice(),i=oe.ROOM.CABLE,L=i.path,I=i.socket[2],D=i.socket[0];e.push({eye:[D+1.05,.42,I-.45],at:[D,.27,I+.08],fov:42,dof:.32,p:{eye:[D+1.3,.48,I-.55],fov:58}});let[s,n]=i.run;for(let f of[.04,.22,.42,.62,.82]){let r=Math.round(s+(n-s)*f),p=L[Math.max(0,r-6)],x=L[Math.min(L.length-1,r+6)],y=L[r],w=x[0]-p[0],T=x[2]-p[2],d=Math.hypot(w,T)||1;w/=d,T/=d,e.push({eye:[y[0]-w*.8-T*.12,.3,y[2]-T*.8+w*.12],at:[y[0]+w*1.5,.06,y[2]+T*1.5],fov:44,dof:.24,pass:!0,p:{fov:60}})}e.push({eye:[a0-3,.45,I-1.6],at:[a0-.3,1.9,I+.9],fov:50,dof:.1,p:{fov:70}});let t=(f,r,p)=>[f[0]+r[0]*p,f[1]+r[1]*p,f[2]+r[2]*p],c=11,a=()=>(c=c*16807%2147483647,(c-1)/2147483646),m=(oe.ROOM.POL.spots||[]).filter(f=>f.n[0]<-.5&&f.c[2]>10.5&&f.c[2]<21.5&&f.c[1]>1.9&&f.c[1]<4.6),l=(f,r)=>Math.abs(f.c[2]-r)+Math.abs(f.c[1]-3)*.4,h=[];for(let f of[12.6,15,17.3]){let r=null;for(let p of m)(!r||l(p,f)<l(r,f))&&(r=p);r&&h.indexOf(r)<0&&h.push(r)}h.forEach((f,r)=>{let p=f.n,x=f.c;r>0&&e.push({eye:t(t(x,p,2.2),[0,.15,-.6],1),at:x,fov:50,dof:.05,pass:!0}),e.push({eye:t(t(x,p,1),[0,.06,-.3],1),at:x,fov:36,dof:.26,p:{fov:50}})}),e.push({eye:[L0+2,1.35,H0-1.5],at:[L0,1.35,H0+.1],fov:42,dof:.12,p:{eye:[L0+1.6,1.4,H0-1.5],fov:62}}),e.push({eye:[L0+.85,V0[1]+.12,V0[2]-.35],at:[V0[0],V0[1]-.05,V0[2]],fov:36,dof:.32,p:{fov:52}}),e.push({eye:[L0+.42,te[1]+.08,te[2]+1.35],at:[L0,te[1],te[2]],fov:36,dof:.35,p:{fov:52}}),e.push({eye:[L0-.55,1.75,H0-1.4],at:[a0/2,5,me],fov:50,dof:.06,p:{fov:70}});let b=D0.stack;e.push({eye:[a0/2+1.4,1.2,D0.z-4.9],at:[a0/2,1.75,D0.z],fov:50,dof:.05,p:{fov:70}});let z=b.map((f,r)=>r);for(let f=z.length-1;f>0;f--){let r=Math.floor(a()*(f+1)),p=z[f];z[f]=z[r],z[r]=p}let u=null;for(let f of z){let r=b[f],p=r.screen,x=r.facing,y=r.size*1.25;if(u){let T=[(u[0]+p[0])/2,(u[1]+p[1])/2+.2,Math.min(u[2],p[2])-2.6];e.push({eye:T,at:[(u[0]+p[0])/2,(u[1]+p[1])/2,D0.z],fov:46,dof:.05,pass:!0})}let w=(a()-.5)*.5;e.push({eye:[p[0]+x[0]*y+w,p[1]+.05+(a()-.5)*.15,p[2]+x[2]*y],at:[p[0],p[1],p[2]],fov:30,dof:.3,p:{fov:44}}),u=p}return e.push({eye:[a0/2,2.6,D0.z-3.5],at:[a0/2,4.5,me],fov:52,dof:.05,pass:!0}),e.push({eye:[a0/2,4.3,D0.z+1.6],at:[a0/2,6,me],fov:62,dof:.04,p:{fov:82}}),e}Ae.exports=function(){let i=ut(),L=i.length-1,I=i.map((d,R)=>d.pass?-1:R).filter(d=>d>=0),D=(d,R)=>{if(R>=0){for(let k of I)if(k>=d-.06)return k;return I[I.length-1]}for(let k=I.length-1;k>=0;k--)if(I[k]<=d+.06)return I[k];return I[0]},s=(d,R)=>{if(R>0){for(let k of I)if(k>d+.01)return k;return I[I.length-1]}for(let k=I.length-1;k>=0;k--)if(I[k]<d-.01)return I[k];return I[0]},n=null,t=null,c=0,a=0,m=null,l=-10,h=0,b=null,z=1,u=-10,f=[],r=(d,R,k)=>{window.addEventListener(d,R,k),f.push([d,R,k])},p=d=>{let R=Math.sign(d);R&&(R!==z&&h-u<.25&&Math.abs(d)<.02||(R!==z&&(z=R),u=h,a=Math.max(0,Math.min(L,a+d)),l=h))},x=d=>{z=d>0?1:-1,a=s(a,d),l=h-10};r("wheel",d=>{if(d.target.closest&&d.target.closest(".st-ui"))return;d.preventDefault();let R=d.deltaMode===1?d.deltaY*16:d.deltaMode===2?d.deltaY*window.innerHeight:d.deltaY;p(Math.max(-.6,Math.min(.6,R/700)))},{passive:!1});let y=null;r("pointerdown",d=>{d.target.closest&&d.target.closest("button, a, .st-ui")||(y={lx:d.clientX,ly:d.clientY,moved:0,t:performance.now()})}),r("pointermove",d=>{if(!y)return;let R=d.clientX-y.lx,k=d.clientY-y.ly;y.lx=d.clientX,y.ly=d.clientY;let F=Math.abs(k)>=Math.abs(R)?-k:-R;y.moved+=Math.abs(F),y.moved>6&&p(F/(window.innerHeight*.55))}),r("pointerup",()=>{let d=y;y=null,d&&d.moved<8&&performance.now()-d.t<450&&x(1)}),r("keydown",d=>{d.key==="ArrowDown"||d.key==="ArrowRight"||d.key==="PageDown"||d.key===" "?x(1):(d.key==="ArrowUp"||d.key==="ArrowLeft"||d.key==="PageUp")&&x(-1)});function w(d){h=d,b===null&&(b=d);let R=m===null?0:Math.min(.1,d-m);m=d,typeof window!="undefined"&&window.__redShot!==void 0&&/tourdebug/.test(location.search)&&(c=a=window.__redShot),h-l>.35&&(a+=(D(a,z)-a)*(1-Math.exp(-R*2))),c+=(a-c)*(1-Math.exp(-R*1.7)),Math.abs(a-c)<1e-4&&(c=a);let k=window.innerWidth<window.innerHeight,F=i.map(s0=>k&&s0.p?Object.assign({},s0,s0.p):s0),J=Math.min(L-1,Math.floor(c)),t0=c-J,Q=t0*t0*(3-2*t0),C=Oe(F.map(s0=>s0.eye),c),W=Oe(F.map(s0=>s0.at),c);(!n||R===0||R>.09)&&(n=C.slice(),t=W.slice());let A=1-Math.exp(-R*5);for(let s0=0;s0<3;s0++)n[s0]+=(C[s0]-n[s0])*A,t[s0]+=(W[s0]-t[s0])*A;C=n.slice(),W=t.slice();let G=F[J],o0=F[Math.min(L,J+1)],r0=De(G.fov,o0.fov,Q),p0=De(G.dof,o0.dof,Q),c0=typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:d,F0=Math.hypot(W[0]-C[0],W[1]-C[1],W[2]-C[2]),Y=.01+.03*Math.min(1,F0/6);C=[C[0]+Math.sin(c0*.31)*Y,C[1]+Math.sin(c0*.43+1)*Y*.6,C[2]+Math.cos(c0*.27)*Y],W=[W[0]+Math.sin(c0*.21+2)*Y*.8,W[1]+Math.sin(c0*.37)*Y*.5,W[2]];let O0=Pe(C),U0=Pe(W),k0=1-vt((d-b-.3)/1.8);return{eye:O0,target:U0,fov:r0,roll:Math.sin(c0*.17)*.004,moving:!0,look:{letterbox:.45,focus:F0,aperture:p0,vignette:.3,exposure:1.45,shafts:1,fade:k0,fadeColor:[0,0,0]}}}function T(){for(let[d,R,k]of f)window.removeEventListener(d,R,k);f.length=0}return{update:w,tap:()=>x(1),dispose:T,placeFlower(){},get scroll(){return c},END:L}}});window.__redRoom={studio:ve(),tour:Ce()};})();

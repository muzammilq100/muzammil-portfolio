"use strict";(()=>{var fe=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Ne=fe((Lt,ke)=>{"use strict";var M0=[-90,0,0],he=16,ve=27.5,pe=11.6;ke.exports={O:M0,W:he,L:ve,RIDGE:pe,BOX:[M0[0]-.8,0,M0[2]-11.5,M0[0]+he+.8,pe+.5,M0[2]+ve+.8],AIR_BOX:[M0[0],0,M0[2],M0[0]+he,pe,M0[2]+ve]}});var ue=fe((Mt,me)=>{"use strict";var{O:N,W:g,L:V}=Ne(),p=e=>(+e).toFixed(4),Z=10.5,oe=.7,$e=3,P={hw:1.25,sill:1.35,spring:6.9,n:4,step:6.35};P.z0=V/2-P.step*(P.n-1)/2;P.apex=P.spring+P.hw*Math.sqrt(3);var se=e=>P.z0+P.step*e;P.leftFrom=2;var B=(()=>{let r=P.z0,L={k:1.42,z:r,top:.543*1.42,half:.601*1.42,depth:.706*1.42};return L.x=g-.12-L.depth/2,L.candles=[[g-.4,r-.52,1],[g-.3,r-.3,.62],[g-.36,r+.42,.38],[g-.86,r-.06,.55],[g-.24,r+.66,.85],[g-.8,r+.42,.3]],L.vase={x:g-.55,z:r+.06,h:.24},L.flames=L.candles.map(([I,O,s])=>[I,L.top+.156+.144*s+.018,O]),L.laid=[[g-.66,r-.22,Math.PI/2+.5],[g-.62,r-.36,Math.PI/2+.15],[g-.7,r+.26,Math.PI/2-.6]],L.stack=[g-.88,r-.5],L.occ=[[g-.55,L.top+.46,r+.06,.15],[g-.55,L.top+.26,r+.06,.06],[g-.55,L.top+.11,r+.06,.08],...L.laid.map(([I,O,s])=>[I-Math.sin(s)*.15,L.top+.05,O-Math.cos(s)*.15,.065])],L})();P.lowSill=B.top+.06;var T0={x:g/2-1.7,z:17.55,k:1.3};T0.yaw=Math.atan2(g/2-T0.x,21.2-T0.z);var H=[];for(let e=0;e<=P.n;e++)H.push(P.z0+P.step*(e-.5));var f0={hw:.75,h:2.6,depth:.7},y0={hw:1.8,h:3.6,z:-11,sign:[g/2,f0.h+.32,-f0.depth-.05],open:2.2},X={z:21.2,G:2.4,models:{sony:{file:"res/redroom/tv_sony.bin",tex:3,w:.36,h:.341,d:.455,dark:.55},crt:{file:"res/redroom/tv_crt.bin",tex:3,w:.47,h:.454,d:.389,dark:.9},old:{file:"res/redroom/tv_old.bin",tex:1,w:.62,h:.418,d:.416,dark:.75}}};X.stack=[["old",0,-1.41,2,.04],["crt",0,.05,-1,-.02],["sony",0,1.24,-2,.06],["crt",1,-1.16,3,.02],["sony",1,-.03,-1,.04],["crt",1,1.14,-3,.06],["sony",2,-.73,2,.06],["old",2,.66,-2,.03],["crt",0,-2.78,3,.08],["sony",1,-2.68,4,.1],["old",0,2.5,-3,.08],["sony",1,2.32,-4,.1]];var at={sony:[0,.194],crt:[0,.27],old:[.0625,.2145]};(()=>{let e=[];for(let r of X.stack){let L=X.models[r[0]],I=r[1],O=r[2],s=L.w*X.G,n=0;for(let a of e)a.row>=I||Math.abs(a.dx-O)<(a.w+s)/2*.92&&(n=Math.max(n,a.top));e.push({dx:O,row:I,w:s,top:n+L.h*X.G*.99}),r.base=n;let t=at[r[0]],f=r[3]*Math.PI/180;r.screen=[g/2+O+t[0]*X.G,n+t[1]*X.G,X.z+r[4]],r.facing=[-Math.sin(f),0,-Math.cos(f)],r.size=L.w*X.G}})();var D=(()=>{let e={top:.92,depth:.78};return e.a=[H[0]+.7,H[1]-.55],e.b=[H[1]+.55,H[2]-.7],e.basin={x0:.08,x1:e.depth-.07,z0:e.a[0]+.1,z1:e.a[1]-.1,floor:e.top-.1},e.TX=.44,e.TZ=.54,e.TH=.075,e.TXc=(e.basin.x0+e.basin.x1)/2,e.trays=[e.a[0]+1.1,e.a[0]+1.72,e.a[0]+2.34],e.liquid=e.basin.floor+.05,e.bulb=[e.TXc+.02,1.39,e.trays[0]+.05],e.tube={x:.07,y:3.05,z0:e.b[0]+.2,z1:e.b[1]-.2},e.shelf={y:1.5,d:.3,z0:e.trays[2]+.42,z1:e.trays[2]+1.12},e.lines=[[.32,2.74,H[0],H[1],.12],[.74,2.52,H[0],H[1],.17],[1.1,2.62,H[0],H[1],.2],[.3,2.76,H[1],H[2],.15],[.68,2.46,H[1],H[2],.19],[1.06,2.66,H[1],H[2],.22],[.5,1.98,H[1],H[2],.12],[.45,2.98,H[0],H[1],.1,1.45],[1.45,2.4,H[0],H[1],.2],[.95,2.26,H[0],H[1],.13,.4],[1.4,3,H[1],H[2],.14,.45],[1.5,2.36,H[1],H[2],.22],[.9,2.2,H[1],H[2],.15,1.35]],e})(),$=(()=>{let e={x:g/2-.006,z:14.92,tableK:1.25,pitch:.1};e.table=.761*e.tableK,e.feed=[.0254,.7696,.3364],e.takeup=[.0252,.2484,.337],e.lensL=[.006,.456,.15];let r=Math.cos(e.pitch),L=Math.sin(e.pitch),I=e.lensL;return e.lens=[e.x+I[0],e.table+I[1]*r+I[2]*L,e.z-I[1]*L+I[2]*r],e.img={x:g/2,y:6,w:6.4},e.img.h=e.img.w*.75,e})(),e0={x0:4.2,x1:11.8,y:9,z:V-.16},g0={r:.045};(()=>{let e=g0.r,r=D.depth,L=D.b[1]-.22;g0.socket=[r,.3,L],g0.ctrl=[[r+.1,.3,L],[r+.2,.295,L],[r+.3,.22,L+.02],[r+.42,e,L+.1],[r+.8,e,L+.3],[1.8,e,L+.45],[3.4,e,L+.1],[5.2,e,L-.55],[7.2,e,L-.95],[9.4,e,L-.9],[11.4,e,L-.45],[13.2,e,L+.1],[g-1.15,e,L+.55],[g-.85,e,L+1.05],[g-.85,e,15.2],[g-1.1,e,16.3],[g-1.7,e,17.2],[g-2.5,e,17.9],[12.9,e,18.5],[11.5,e,18.9],[10.6,e,19.5],[10.5,e,20.3],[11.2,e,20.5],[10.9,e,19.95],[10,e*2.2,20.1],[9.3,e,20.75],[9.5,e,21.9],[8.6,e,22.25],[8.1,.22,21.95]];let I=g0.ctrl,O=[];for(let t=0;t<I.length-1;t++){let f=I[Math.max(0,t-1)],a=I[t],m=I[t+1],l=I[Math.min(I.length-1,t+2)],h=Math.max(2,Math.ceil(Math.hypot(m[0]-a[0],m[1]-a[1],m[2]-a[2])/.06));for(let _=0;_<h;_++){let z=_/h,x=z*z,c=x*z;O.push([0,1,2].map(i=>.5*(2*a[i]+(-f[i]+m[i])*z+(2*f[i]-5*a[i]+4*m[i]-l[i])*x+(-f[i]+3*a[i]-3*m[i]+l[i])*c)))}}O.push(I[I.length-1].slice());for(let t of O)t[1]<e&&t[2]>-1.4&&(t[1]=e);g0.path=O;let s=O.findIndex(t=>t[1]<=e*1.01),n=O.findIndex((t,f)=>f>s&&t[0]>g-1.3);g0.run=[s,n]})();var x0={spots:[],w:.36,h:.435,n:36,lines:[{z:V-1.7,y:6.5,sag:1},{z:V-2.6,y:5.3,sag:.8}]},d0=(()=>{let e=[-.62,.75,-.16],r=Math.hypot(...e);return e.map(L=>L/r)})(),$0=(()=>{let e=g/2;return(e*e+$e*$e)/(2*e)})(),N0=e=>{let r=e<=g/2?e:g-e;return Z+Math.sqrt(Math.max(0,$0*$0-(r-$0)*(r-$0)))},w={FLOOR:0,WALL:1,REVEAL:2,GLASS:3,VAULT:4,TRIM:5,VOID:6,TUBE:7,CABLE:8,TILE:9,STEEL:10,PEG:11,CONC:12,CFLOOR:13,DOOR:14};function Ae(){let e=[],r=[],L=[],I=[],O=[],s={pos:e,nrm:r,kind:L,uv:I,idx:O,v(n,t,f,a){return e.push(n[0]+N[0],n[1]+N[1],n[2]+N[2]),r.push(t[0],t[1],t[2]),L.push(f),I.push(a?a[0]:0,a?a[1]:0),e.length/3-1},quad(n,t,f,a,m,l,h,_,z,x){let c=s.v(n,m,l,h),i=s.v(t,m,l,_),v=s.v(f,m,l,z),u=s.v(a,m,l,x);O.push(c,i,v,c,v,u)},box(n,t,f,a,m,l,h){s.quad([n,t,l],[a,t,l],[a,m,l],[n,m,l],[0,0,1],h),s.quad([a,t,f],[n,t,f],[n,m,f],[a,m,f],[0,0,-1],h),s.quad([a,t,l],[a,t,f],[a,m,f],[a,m,l],[1,0,0],h),s.quad([n,t,f],[n,t,l],[n,m,l],[n,m,f],[-1,0,0],h),s.quad([n,m,l],[a,m,l],[a,m,f],[n,m,f],[0,1,0],h),s.quad([n,t,f],[a,t,f],[a,t,l],[n,t,l],[0,-1,0],h)},cyl(n,t,f,a,m,l,h){h=h||18;for(let _=0;_<h;_++){let z=_/h*Math.PI*2,x=(_+1)/h*Math.PI*2,c=[Math.sin(z),0,Math.cos(z)],i=[Math.sin(x),0,Math.cos(x)],v=(d,M)=>[n+d[0]*f,M,t+d[2]*f],u=s.v(v(c,a),c,l),b=s.v(v(i,a),i,l),y=s.v(v(i,m),i,l),T=s.v(v(c,m),c,l);O.push(u,b,y,u,y,T)}}};return s}function p0(e,r,L,I,O){let s=null,n=null,t=[];for(let f=0;f<r.length;f++){let a=r[Math.max(0,f-1)],m=r[Math.min(r.length-1,f+1)],l=[m[0]-a[0],m[1]-a[1],m[2]-a[2]],h=Math.hypot(...l)||1;l=l.map(i=>i/h),n||(n=Math.abs(l[1])<.9?[0,1,0]:[1,0,0]);let _=n[0]*l[0]+n[1]*l[1]+n[2]*l[2];n=[n[0]-l[0]*_,n[1]-l[1]*_,n[2]-l[2]*_];let z=Math.hypot(...n)||1;n=n.map(i=>i/z);let x=[l[1]*n[2]-l[2]*n[1],l[2]*n[0]-l[0]*n[2],l[0]*n[1]-l[1]*n[0]],c=[];for(let i=0;i<I;i++){let v=i/I*Math.PI*2,u=Math.cos(v),b=Math.sin(v),y=[n[0]*u+x[0]*b,n[1]*u+x[1]*b,n[2]*u+x[2]*b];c.push(e.v([r[f][0]+y[0]*L,r[f][1]+y[1]*L,r[f][2]+y[2]*L],y,O,[f,i]))}if(s)for(let i=0;i<I;i++){let v=(i+1)%I;e.idx.push(s[i],s[v],c[v],s[i],c[v],c[i])}s=c,t.push(c)}}var Ce=(e,r)=>[e[0]+((e[5]===void 0?e[0]:e[5])-e[0])*r,e[1]-e[4]*4*r*(1-r),e[2]+.35+(e[3]-e[2]-.7)*r];function Ee(e,r,L){let I=[[-e,r],[-e,L]],O=2*e,s=14;for(let n=1;n<=s;n++){let t=Math.PI-n/s*(Math.PI/3);I.push([e+O*Math.cos(t),L+O*Math.sin(t)])}for(let n=1;n<=s;n++){let t=Math.PI/3-n/s*(Math.PI/3);I.push([-e+O*Math.cos(t),L+O*Math.sin(t)])}return I.push([e,r]),I}function Pe(e,r,L,I,O,s,n){let t=O?r.length:r.length-1;for(let f=0;f<t;f++){let a=r[f],m=r[(f+1)%r.length],l=m[0]-a[0],_=-(m[1]-a[1]),z=l,x=Math.hypot(_,z)||1;_/=x,z/=x;let c=(a[0]+m[0])/2-n[0],i=(a[1]+m[1])/2-n[1];_*c+z*i>0&&(_=-_,z=-z);let v=I(_,z,0,!0);e.quad(I(a[0],a[1],0),I(m[0],m[1],0),I(m[0],m[1],L),I(a[0],a[1],L),v,s,[a[0],a[1]],[m[0],m[1]],[m[0],m[1]],[a[0],a[1]])}}function it(){let e=Ae();e.quad([0,0,0],[0,0,V],[g,0,V],[g,0,0],[0,1,0],w.FLOOR),e.quad([0,0,V],[0,0,0],[0,Z,0],[0,Z,V],[1,0,0],w.WALL,[V,0],[0,0],[0,Z],[V,Z]),e.quad([g,0,0],[g,0,V],[g,Z,V],[g,Z,0],[-1,0,0],w.WALL,[0,0],[V,0],[V,Z],[0,Z]);let r=24;for(let s of[0,1]){let n=s?V:0,t=[0,0,s?-1:1];for(let f=0;f<r;f++){let a=f/r*g,m=(f+1)/r*g,l=[a,0,n],h=[m,0,n],_=[m,N0(m),n],z=[a,N0(a),n];s?e.quad(h,l,z,_,t,w.WALL,[m,0],[a,0],[a,z[1]],[m,_[1]]):e.quad(l,h,_,z,t,w.WALL,[a,0],[m,0],[m,_[1]],[a,z[1]])}}let L=40;for(let s=0;s<L;s++){let n=s/L*g,t=(s+1)/L*g,f=N0(n),a=N0(t),m=(i,v)=>{let u=i<=g/2?i:g-i,b=($0-u)/$0,y=(Z-v)/$0;return i>g/2&&(b=-b),[b,y,0]},l=m(n,f),h=m(t,a),_=e.v([n,f,0],l,w.VAULT,[n,0]),z=e.v([t,a,0],h,w.VAULT,[t,0]),x=e.v([t,a,V],h,w.VAULT,[t,V]),c=e.v([n,f,V],l,w.VAULT,[n,V]);e.idx.push(_,z,x,_,x,c)}let I=Ee(P.hw,P.sill,P.spring),O=Ee(P.hw,P.lowSill,P.spring);for(let s=0;s<P.n;s++){let n=s===0?P.lowSill:P.sill,t=se(s),f=s>=P.leftFrom;f&&Pe(e,I,oe,(z,x,c,i)=>i?[0,x,z]:[-c,x,t+z],!0,w.REVEAL,[0,(P.sill+P.apex)/2]),Pe(e,s===0?O:I,oe,(z,x,c,i)=>i?[0,x,z]:[g+c,x,t+z],!0,w.REVEAL,[0,(n+P.apex)/2]);let a=oe*.55,m=P.sill-.02,l=P.apex+.02,h=P.hw+.02;f&&e.quad([-a,m,t+h],[-a,m,t-h],[-a,l,t-h],[-a,l,t+h],[1,0,0],w.GLASS,[h,m],[-h,m],[-h,l],[h,l]);let _=n-.02;e.quad([g+a,_,t-h],[g+a,_,t+h],[g+a,l,t+h],[g+a,l,t-h],[-1,0,0],w.GLASS,[-h,_],[h,_],[h,l],[-h,l]),f&&e.box(-.02,P.sill-.12,t-P.hw-.18,.12,P.sill,t+P.hw+.18,w.TRIM),e.box(g-.12,n-(s===0?.05:.12),t-P.hw-.18,g+.02,n,t+P.hw+.18,w.TRIM)}{let s=g/2-f0.hw,n=g/2+f0.hw,t=f0.h,f=f0.depth;e.quad([s,0,-f],[s,0,0],[s,t,0],[s,t,-f],[1,0,0],w.REVEAL),e.quad([n,0,0],[n,0,-f],[n,t,-f],[n,t,0],[-1,0,0],w.REVEAL),e.quad([s,t,0],[n,t,0],[n,t,-f],[s,t,-f],[0,-1,0],w.REVEAL),e.quad([s,.001,-f],[n,.001,-f],[n,.001,0],[s,.001,0],[0,1,0],w.CFLOOR);let a=g/2-y0.hw,m=g/2+y0.hw,l=y0.h,h=y0.z;e.quad([a,0,h],[a,0,-f],[m,0,-f],[m,0,h],[0,1,0],w.CFLOOR),e.quad([a,0,-f],[a,0,h],[a,l,h],[a,l,-f],[1,0,0],w.CONC,[-f,0],[h,0],[h,l],[-f,l]),e.quad([m,0,h],[m,0,-f],[m,l,-f],[m,l,h],[-1,0,0],w.CONC,[h,0],[-f,0],[-f,l],[h,l]),e.quad([a,l,h],[a,l,-f],[m,l,-f],[m,l,h],[0,-1,0],w.CONC,[h,0],[-f,0],[-f,1],[h,1]),e.quad([m,0,h],[a,0,h],[a,l,h],[m,l,h],[0,0,1],w.CONC,[0,0],[1,0],[1,l],[0,l]);let _=-f;e.quad([a,0,_],[s,0,_],[s,l,_],[a,l,_],[0,0,-1],w.CONC,[a,0],[s,0],[s,l],[a,l]),e.quad([n,0,_],[m,0,_],[m,l,_],[n,l,_],[0,0,-1],w.CONC,[n,0],[m,0],[m,l],[n,l]),e.quad([s,t,_],[n,t,_],[n,l,_],[s,l,_],[0,0,-1],w.CONC,[s,t],[n,t],[n,l],[s,l]);let z=s,x=_-.01,c=y0.open,i=f0.hw*2-.04,v=.045,u=[Math.cos(c),0,-Math.sin(c)],b=[Math.sin(c),0,Math.cos(c)],y=(F,J,t0)=>[z+u[0]*F+b[0]*t0,J,x+u[2]*F+b[2]*t0],T=.012,d=t-.02;e.quad(y(0,T,v),y(i,T,v),y(i,d,v),y(0,d,v),b,w.DOOR),e.quad(y(i,T,0),y(0,T,0),y(0,d,0),y(i,d,0),b.map(F=>-F),w.DOOR),e.quad(y(i,T,v),y(i,T,0),y(i,d,0),y(i,d,v),u,w.DOOR),e.quad(y(0,d,v),y(i,d,v),y(i,d,0),y(0,d,0),[0,1,0],w.DOOR);let M=y(i-.09,1.02,v+.03);p0(e,[y(i-.09,1.02,v),M,[M[0]-u[0]*.12,M[1],M[2]-u[2]*.12]],.011,6,w.STEEL);let k=y0.sign;e.box(k[0]-.33,k[1]-.12,k[2]-.02,k[0]+.33,k[1]+.12,_,w.TRIM)}for(let s of H){for(let a of[.2,g-.2])e.box(a-.42,0,s-.42,a+.42,.5,s+.42,w.TRIM),e.cyl(a,s,.27,.5,Z-.55,w.TRIM),e.cyl(a+(a<g/2?.2:-.2),s-.36,.1,.5,Z-.55,w.TRIM,10),e.cyl(a+(a<g/2?.2:-.2),s+.36,.1,.5,Z-.55,w.TRIM,10),e.box(a-.45,Z-.55,s-.5,a+.45,Z-.25,s+.5,w.TRIM);let n=40,t=.22,f=.22;for(let a=0;a<n;a++){let m=a/n*g,l=(a+1)/n*g,h=N0(m),_=N0(l),z=[g/2-m,-(h-Z+2),0],x=[g/2-l,-(_-Z+2),0],c=y=>{let T=Math.hypot(y[0],y[1])||1;return[y[0]/T,y[1]/T,0]},i=c(z),v=c(x),u=[m+i[0]*f,h+i[1]*f],b=[l+v[0]*f,_+v[1]*f];e.quad([u[0],u[1],s-t],[b[0],b[1],s-t],[b[0],b[1],s+t],[u[0],u[1],s+t],i,w.TRIM),e.quad([m,h,s-t],[l,_,s-t],[b[0],b[1],s-t],[u[0],u[1],s-t],[0,0,-1],w.TRIM),e.quad([l,_,s+t],[m,h,s+t],[u[0],u[1],s+t],[b[0],b[1],s+t],[0,0,1],w.TRIM)}}{let s=D,n=s.top,t=s.basin,f=(x,c,i)=>{if(e.box(0,0,x,s.depth-.06,.12,c,w.TRIM),e.quad([s.depth,.12,x],[s.depth,.12,c],[s.depth,n,c],[s.depth,n,x],[1,0,0],w.TILE,[x,.12],[c,.12],[c,n],[x,n]),e.quad([0,.12,x],[s.depth,.12,x],[s.depth,n,x],[0,n,x],[0,0,-1],w.TILE,[0,.12],[s.depth,.12],[s.depth,n],[0,n]),e.quad([s.depth,.12,c],[0,.12,c],[0,n,c],[s.depth,n,c],[0,0,1],w.TILE,[s.depth,.12],[0,.12],[0,n],[s.depth,n]),!i){e.quad([0,n,x],[0,n,c],[s.depth,n,c],[s.depth,n,x],[0,1,0],w.TILE,[0,x],[0,c],[s.depth,c],[s.depth,x]);return}let v=(u,b,y,T)=>e.quad([u,n,y],[u,n,T],[b,n,T],[b,n,y],[0,1,0],w.TILE,[u,y],[u,T],[b,T],[b,y]);v(0,t.x0,x,c),v(t.x1,s.depth,x,c),v(t.x0,t.x1,x,t.z0),v(t.x0,t.x1,t.z1,c),e.quad([t.x0,t.floor,t.z0],[t.x0,t.floor,t.z1],[t.x1,t.floor,t.z1],[t.x1,t.floor,t.z0],[0,1,0],w.TILE,[t.x0,t.z0],[t.x0,t.z1],[t.x1,t.z1],[t.x1,t.z0]),e.quad([t.x0,t.floor,t.z1],[t.x0,t.floor,t.z0],[t.x0,n,t.z0],[t.x0,n,t.z1],[1,0,0],w.TILE,[t.z1,t.floor],[t.z0,t.floor],[t.z0,n],[t.z1,n]),e.quad([t.x1,t.floor,t.z0],[t.x1,t.floor,t.z1],[t.x1,n,t.z1],[t.x1,n,t.z0],[-1,0,0],w.TILE,[t.z0,t.floor],[t.z1,t.floor],[t.z1,n],[t.z0,n]),e.quad([t.x0,t.floor,t.z0],[t.x1,t.floor,t.z0],[t.x1,n,t.z0],[t.x0,n,t.z0],[0,0,1],w.TILE,[t.x0,t.floor],[t.x1,t.floor],[t.x1,n],[t.x0,n]),e.quad([t.x1,t.floor,t.z1],[t.x0,t.floor,t.z1],[t.x0,n,t.z1],[t.x1,n,t.z1],[0,0,-1],w.TILE,[t.x1,t.floor],[t.x0,t.floor],[t.x0,n],[t.x1,n])};f(s.a[0],s.a[1],!0),f(s.b[0],s.b[1],!1);for(let[x,c]of[s.a,s.b])e.quad([.012,n,c],[.012,n,x],[.012,n+.62,x],[.012,n+.62,c],[1,0,0],w.TILE,[c,n],[x,n],[x,n+.62],[c,n+.62]);let a=x=>{let c=t.floor+.004,i=c+s.TH,v=s.TX/2,u=s.TZ/2,b=.02,y=s.TXc,T=[[y-v+b,x-u+b],[y+v-b,x-u+b],[y+v-b,x+u-b],[y-v+b,x+u-b]],d=[[y-v,x-u],[y+v,x-u],[y+v,x+u],[y-v,x+u]];e.quad([T[0][0],c,T[0][1]],[T[3][0],c,T[3][1]],[T[2][0],c,T[2][1]],[T[1][0],c,T[1][1]],[0,1,0],w.STEEL);for(let M=0;M<4;M++){let k=(M+1)%4,F=[T[M][0],c,T[M][1]],J=[T[k][0],c,T[k][1]],t0=[d[k][0],i,d[k][1]],Q=[d[M][0],i,d[M][1]],C=(T[M][0]+T[k][0])/2-y,G=(T[M][1]+T[k][1])/2-x,A=Math.hypot(C,G)||1;e.quad(F,J,t0,Q,[-C/A*.95,.3,-G/A*.95],w.STEEL),e.quad(J,F,[Q[0],c+.001,Q[2]],[t0[0],c+.001,t0[2]],[C/A,0,G/A],w.STEEL)}p0(e,[...d,d[0]].map(M=>[M[0],i+.004,M[1]]),.005,5,w.STEEL)};for(let x of s.trays)a(x);let m=(x,c,i,v,u,b)=>{for(let y of[-.012,.012])p0(e,[[x,u,c+y],[(x+i)/2,(u+b)/2+.006,(c+v)/2+y*.6],[i,b,v+y*.2]],.0045,5,w.PEG)};m(s.TXc+.05,s.trays[0]+.12,s.TXc+.27,s.trays[0]+.42,s.liquid-.005,s.top+.03),m(s.TXc-.1,s.trays[2]-.2,s.TXc+.24,s.trays[2]-.05,s.liquid+.002,s.liquid+s.TH*.9);let l=t.z1-.3;p0(e,[[0,1.32,l],[.18,1.32,l],[.27,1.3,l],[.32,1.22,l],[.33,1.12,l]],.016,8,w.STEEL),e.box(0,1.27,l-.05,.05,1.37,l+.05,w.STEEL);let h=D.bulb;p0(e,[[0,2.32,h[2]],[h[0]*.6,2.32,h[2]],[h[0],2.28,h[2]]],.012,6,w.TRIM),e.box(0,2.24,h[2]-.06,.03,2.4,h[2]+.06,w.TRIM),p0(e,[[h[0],2.28,h[2]],[h[0]+.004,1.9,h[2]+.003],[h[0],h[1]+.2,h[2]]],.004,5,w.CABLE);{let x=B.vase,c=B.top,i=[[.045,0],[.07,.03],[.08,.09],[.072,.15],[.05,.2],[.042,.225],[.05,x.h]],v=24;for(let u=0;u<i.length-1;u++){let[b,y]=i[u],[T,d]=i[u+1];for(let M=0;M<v;M++){let k=M/v*Math.PI*2,F=(M+1)/v*Math.PI*2,J=(C,G,A)=>[x.x+Math.cos(A)*C,c+G,x.z+Math.sin(A)*C],t0=C=>{let G=T-b,A=d-y,j=Math.hypot(G,A);return[Math.cos(C)*A/j,-G/j,Math.sin(C)*A/j]},Q=(k+F)/2;e.quad(J(b,y,k),J(b,y,F),J(T,d,F),J(T,d,k),t0(Q),w.TRIM)}}}let _=D.shelf;e.box(0,_.y-.03,_.z0,_.d,_.y,_.z1,w.TRIM);for(let x of[_.z0+.08,_.z1-.08])e.box(0,_.y-.2,x-.012,.022,_.y-.03,x+.012,w.TRIM),e.box(0,_.y-.06,x-.012,_.d*.7,_.y-.03,x+.012,w.TRIM);let z=D.tube;p0(e,[[z.x+.02,z.y,z.z0],[z.x+.02,z.y,(z.z0+z.z1)/2],[z.x+.02,z.y,z.z1]],.035,10,w.TUBE),e.box(0,z.y-.05,z.z0-.06,.07,z.y+.05,z.z0-.01,w.TRIM),e.box(0,z.y-.05,z.z1+.01,.07,z.y+.05,z.z1+.06,w.TRIM);for(let x of D.lines){let c=[];for(let i=0;i<=24;i++){let v=i/24;c.push(Ce(x,v))}p0(e,c,.0035,5,w.CABLE);for(let i of[c[0],c[24]])p0(e,[[0,i[1]+.05,i[2]],[i[0]*.5,i[1]+.02,i[2]],[i[0]+.02,i[1],i[2]]],.007,5,w.TRIM)}}X.stack.forEach((s,n)=>{let t=X.models[s[0]],f=X.G,a=g/2+s[2],m=X.z+s[4]+t.d*f*.85,l=s.base+.12*f,h=g/2+(n%3-1)*.5,_=X.z+2.3+n%4*.12;p0(e,[[a,l,m-.05],[a+.05,l-.02,m+.15],[a+.1,Math.max(.02,l*.4),m+.35],[a*.6+h*.4,.018,m+.6],[h,.018,_]],.012,6,w.CABLE)}),p0(e,g0.path,g0.r,16,w.CABLE);{let[s,n,t]=g0.socket;e.box(s,n-.07,t-.07,s+.018,n+.07,t+.07,w.STEEL),e.box(s+.018,n-.035,t-.032,s+.11,n+.035,t+.032,w.TRIM),e.box(s,n+.042,t+.035,s+.03,n+.058,t+.051,w.TUBE)}e.box(e0.x0-.08,e0.y-.07,V-.08,e0.x0-.02,e0.y+.07,V,w.TRIM),e.box(e0.x1+.02,e0.y-.07,V-.08,e0.x1+.08,e0.y+.07,V,w.TRIM),p0(e,[[e0.x0-.02,e0.y,e0.z],[(e0.x0+e0.x1)/2,e0.y,e0.z],[e0.x1+.02,e0.y,e0.z]],.045,10,w.TUBE);for(let s of[0,1]){let n=s?g-.06:0,t=s?g:.06;e.box(n,0,0,t,.24,V,w.TRIM),e.box(s?g-.05:0,1,0,s?g:.05,1.08,V,w.TRIM);let f=s?g-.32:0,a=s?g:.32;e.box(f,Z-.25,0,a,Z+.08,V,w.TRIM)}for(let s of[0,1]){let n=s?V-.06:0,t=s?V:.06;s?e.box(0,0,n,g,.24,t,w.TRIM):(e.box(0,0,n,g/2-f0.hw,.24,t,w.TRIM),e.box(g/2+f0.hw,0,n,g,.24,t,w.TRIM));let f=s?V-.32:0,a=s?V:.32;e.box(0,Z-.25,f,g,Z+.08,a,w.TRIM)}return e}function rt(){let e=7,r=()=>(e=e*16807%2147483647,(e-1)/2147483646),L=[],I=[],O=[],s=[],n=[],t=[],f=[],a=3,m=4,l=(v,u,b,y,T,d,M,k,F)=>{let J=x0.w*T,t0=x0.h*T,Q=L.length/3;for(let C=0;C<=m;C++)for(let G=0;G<=a;G++){let A=G/a,j=C/m,o0=(A-.5)*J,r0=(j-.5)*t0,m0=k*((A-.5)*(A-.5)*4+(1-j)*(1-j)*.6);L.push(N[0]+v[0]+u[0]*o0+b[0]*r0+y[0]*m0,N[1]+v[1]+u[1]*o0+b[1]*r0+y[1]*m0,N[2]+v[2]+u[2]*o0+b[2]*r0+y[2]*m0),I.push(y[0],y[1],y[2]),O.push(A,j),s.push(d),f.push(F||0),n.push(M[0]+N[0],M[1]+N[1],M[2]+N[2],M[3])}for(let C=0;C<m;C++)for(let G=0;G<a;G++){let A=Q+C*(a+1)+G,j=A+1,o0=A+a+1,r0=o0+1;t.push(A,j,r0,A,r0,o0)}},h=(v,u,b)=>{let y=Math.cos(b),T=Math.sin(b);return[v.map((d,M)=>d*y+u[M]*T),u.map((d,M)=>-v[M]*T+d*y)]},_=[0,0,0,0],z=0,x=(v,u,b,y,T,d,M,k,F)=>{let Q=0;for(let C=d;C<M;C+=.48)for(let G=y;G<T;G+=.4){let A=G+(r()-.5)*.4*.7,j=C+(r()-.5)*.48*.6;if(r()>k(A,j))continue;let[o0,r0]=h(b,[0,1,0],(r()-.5)*.5),m0=v(A,j,.012+.0016*(Q++%9)+r()*.004),h0=.88+r()*.3;l(m0,o0,r0,u,h0,Math.floor(r()*x0.n),_,(r()-.3)*.02),x0.spots.length<400&&x0.spots.push({c:m0,n:u,up:r0,size:x0.h*h0}),z++}},c=(v,u,b)=>Math.exp(-Math.pow((v-u)/b,2));for(let v=0;v<P.n-1;v++){let u=H[v+1],b=[[se(v)+P.hw+.32,u-.66],[u+.66,se(v+1)-P.hw-.32]];for(let[y,T]of b){let d=(M,k)=>.85*c(k,3.4,1.7);T>D.b[1]+.3&&x((M,k,F)=>[F,k,M],[1,0,0],[0,0,-1],y,T,1.45,6.3,d),x((M,k,F)=>[g-F,k,M],[-1,0,0],[0,0,1],y,T,1.45,6.3,d)}}let i=[];for(let v of D.lines){let u=v[3]-v[2]-.7;for(let b=.18;b<u-.1;b+=.3+r()*.14){let y=b/u,T=Ce(v,y);if(r()<.1||Math.abs(T[2]-D.bulb[2])<.4&&T[1]>2.3)continue;let d=.56+r()*.14,M=x0.h*d,k=(r()-.5)*.7,F=r()<.3?r()<.5?-.75:.75:k,[J,t0]=h([0,0,-1],[0,1,0],F),Q=[1,0,0],C=[T[0]+.004,T[1]-.02-t0[1]*M*.5,T[2]-t0[2]*M*.5];l(C,J,t0,Q,d,Math.floor(r()*x0.n),[T[0],T[1],T[2],-(.04+r()*.06)],.01+r()*.025,1),i.push(T),z++}}{let[v,u]=B.stack,b=[0,1,0];for(let T=0;T<9;T++){let d=(r()-.5)*.35+.3;l([v+(r()-.5)*.012,B.top+.003+T*.0022,u+(r()-.5)*.012],[Math.cos(d),0,Math.sin(d)],[Math.sin(d),0,-Math.cos(d)],b,.26,Math.floor(r()*x0.n),_,.004),z++}[[.13,.12,.9],[-.04,.2,-.4],[.2,-.05,1.6]].forEach(([T,d,M],k)=>{l([v+T,B.top+.002+k*.0012,u+d],[Math.cos(M),0,Math.sin(M)],[Math.sin(M),0,-Math.cos(M)],b,.26,Math.floor(r()*x0.n),_,.006),z++})}return{pos:L,nrm:I,uv:O,pic:s,piv:n,idx:t,sty:f,pegs:i,count:z}}var R0=`
	const float RW = ${p(g)}, RL = ${p(V)}, RH = ${p(Z)}, RT = ${p(oe)};
	const float HW = ${p(P.hw)}, SILL = ${p(P.sill)}, SPRING = ${p(P.spring)};
	const float WZ0 = ${p(P.z0)}, WSTEP = ${p(P.step)};
	const vec3 RO = vec3(${p(N[0])}, ${p(N[1])}, ${p(N[2])});
	const vec3 LDIR_L = vec3(${p(d0[0])}, ${p(d0[1])}, ${p(d0[2])});
	const vec3 LDIR_R = vec3(${p(-d0[0])}, ${p(d0[1])}, ${p(d0[2])});

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
	float winIdx(float z) { return clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${p(P.n-1)}); }
	// (on the left, the first windows are walled up)
	float leftOpen(float z) { return step(${p(P.leftFrom-.5)}, winIdx(z)); }
	vec2 winLocal(float z, float y) {
		float i = clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${p(P.n-1)});
		return vec2(z - (WZ0 + WSTEP * i), y);
	}
	// (on the right, the first window comes down to the table: its height
	// below the springing is stretched onto the others' shape)
	const float LSILL = ${p(P.lowSill)};
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
`;function lt(){return`
	#define STUDIO_SUN ${"vec3("+p(d0[0])+", "+p(d0[1])+", "+p(d0[2])+")"}
	#define STUDIO_SUN2 ${"vec3("+p(-d0[0])+", "+p(d0[1])+", "+p(d0[2])+")"}
	#define SHAFT_TINT vec3(0.6, 0.012, 0.008)
	#define STUDIO_AIR_EVEN
	${R0}
	float studioSun(vec3 p) {
		vec3 lp = p - RO;
		if (lp.x < 0.0 || lp.x > RW || lp.z < 0.0 || lp.z > RL || lp.y > RH + 2.0) return 0.0;
		vec3 c = redLightAir(lp);
		return dot(c, vec3(0.7, 0.2, 0.1)) * 3.2;
	}`}var Oe=`
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
	}`,j0=`
	// the televisions' flicker, thrown on whatever is in front of them
	uniform vec4 tvLight;
	vec3 tvGlow(vec3 lp, vec3 N) {
		vec3 d = vec3(${p(g/2)}, 1.35, ${p(X.z-.9)}) - lp;
		float dd = dot(d, d);
		float face = 0.35 + 0.65 * max(0.0, dot(N, normalize(d)));
		// (only in front of them: the stack's own back is in its shadow)
		float front = smoothstep(${p(X.z+.6)}, ${p(X.z-.2)}, lp.z);
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
		vec3 L0 = vec3(${p($.lens[0])}, ${p($.lens[1])}, ${p($.lens[2])});
		vec3 d = lp - L0;
		float s = (${p(V-.005)} - L0.z) / max(d.z, 1e-4);
		vec3 h = L0 + d * s;
		return vec3(1.0 - (h.x - ${p($.img.x-$.img.w/2)}) / ${p($.img.w)}, (h.y - ${p($.img.y-$.img.h/2)}) / ${p($.img.h)}, 1.0 / s);
	}
	// the televisions stand in the beam's way: their shadows on the picture
	uniform vec3 tvLo[12], tvHi[12];
	float projShadow(vec3 lp) {
		vec3 L0 = vec3(${p($.lens[0])}, ${p($.lens[1])}, ${p($.lens[2])});
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
		vec3 c = vec3(clamp(lp.x, ${p(e0.x0)}, ${p(e0.x1)}), ${p(e0.y)}, ${p(e0.z)});
		vec3 d = c - lp;
		float dd = dot(d, d);
		float face = 0.25 + 0.75 * max(0.0, dot(N, normalize(d)));
		return vec3(1.0, 0.06, 0.045) * 2.6 * face / (1.0 + dd * 0.055);
	}
	// the darkroom: the bare red bulb over the trays, the tube over the lines
	vec3 darkLight(vec3 lp, vec3 N) {
		vec3 d = vec3(${p(D.bulb[0])}, ${p(D.bulb[1])}, ${p(D.bulb[2])}) - lp;
		float dd = dot(d, d);
		vec3 c = vec3(1.0, 0.07, 0.04) * 1.15 * (0.2 + 0.8 * max(0.0, dot(N, normalize(d)))) / (0.02 + dd * 2.2);
		vec3 tq = vec3(${p(D.tube.x+.02)}, ${p(D.tube.y)}, clamp(lp.z, ${p(D.tube.z0)}, ${p(D.tube.z1)}));
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
		vec3 Ls = vec3(${p(g/2)}, 1.25, 1.6);
		vec3 d = lp - Ls;
		float t = (${p(-f0.depth)} - Ls.z) / d.z;
		vec3 h = Ls + d * t;
		float m = smoothstep(0.08, -0.05, abs(h.x - ${p(g/2)}) - ${p(f0.hw)}) * smoothstep(0.08, -0.05, h.y - ${p(f0.h)}) * step(0.0, h.y);
		float dd = dot(d, d);
		vec3 Ld = -normalize(d);
		vec3 c = vec3(1.0, 0.07, 0.05) * 26.0 * m * (0.15 + 0.85 * max(0.0, dot(N, Ld))) / (1.0 + dd * 0.55);
		vec3 sd = vec3(${p(y0.sign[0])}, ${p(y0.sign[1])}, ${p(y0.sign[2])}) - lp;
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
		${B.flames.map((e,r)=>`{
			vec3 d = vec3(${p(e[0])}, ${p(e[1])}, ${p(e[2])}) - lp;
 			float r2 = dot(d, d);
			float sh = candleShade(lp, d);
			float fl = 0.82 + 0.1 * sin(time * (9.0 + ${p(r*1.7)}) + ${p(r*2.1)}) * sin(time * 3.3 + ${p(r)}) + 0.08 * sin(time * 23.0 + ${p(r*4)});
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

`,De=`
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, yScale, mirrorOn, reflOn;
	uniform sampler2D reflTex;
	uniform vec2 reflSize;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${R0}

	const float DHW = ${p(f0.hw)}, DH = ${p(f0.h)};

	${j0}

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
				vec3 bd = normalize(vec3(${p(D.bulb[0])}, ${p(D.bulb[1])}, ${p(D.bulb[2])}) - lp);
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
				if (k == 0 && lp.z > ${p(X.z-1.5)}) {
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
	}`,ct=`
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
	}`,ft=`
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, sigTime, yScale, seed, dark, nMem, emit;
	uniform sampler2D bodyTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_flag;
	${R0}
	${j0}

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
				vec3 Lp = normalize(vec3(${p($.lens[0])}, ${p($.lens[1])}, ${p($.lens[2])}) - lp);
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
	}`,ht=`
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
	}`,vt=`
	precision highp float;
	uniform float time, yScale;
	uniform sampler2D polTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_pic, v_style;
	${R0}
	${j0}
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
	}`,pt=`
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
	}`,dt=`
	precision highp float;
	uniform float time;
	varying vec3 v_pos, v_eye;
	varying float v_layer;
	${R0}
	${j0}
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
	}`,mt=`
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
	}`,ut=`
	precision highp float;
	uniform float time;
	uniform sampler2D printTex, polTex;
	varying vec3 v_pos, v_eye;
	varying float v_tray;
	${R0}
	${j0}
	const vec3 BULB = vec3(${p(D.bulb[0])}, ${p(D.bulb[1])}, ${p(D.bulb[2])});
	void main() {
		vec3 lp = v_pos - RO;
		int k = int(v_tray + 0.5);
		float zc = k == 0 ? ${p(D.trays[0])} : (k == 1 ? ${p(D.trays[1])} : ${p(D.trays[2])});
		vec2 tl = vec2(lp.x - ${p(D.TXc)}, lp.z - zc);
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
	}`,xt=`
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
		vec3 L0 = vec3(${p($.lens[0])}, ${p($.lens[1])}, ${p($.lens[2])});
		vec3 dd = lp - L0;
		float s = (${p(V)} - L0.z) / max(dd.z, 1e-4);
		vec3 hh = L0 + dd * s;
		vec2 pu = vec2((hh.x - ${p($.img.x-$.img.w/2)}) / ${p($.img.w)}, (hh.y - ${p($.img.y-$.img.h/2)}) / ${p($.img.h)});
		v_w = (dd.z > 0.2 && pu.x > 0.0 && pu.x < 1.0 && pu.y > 0.0 && pu.y < 1.0) ? 1.6 : 0.0;
		vec4 v = view * vec4(lp + RO, 1.0);
		gl_Position = proj * v;
		float tw = 0.6 + 0.4 * sin(time * (1.0 + seed.w * 2.0) + seed.x * 80.0);
		v_b *= tw;
		gl_PointSize = clamp(pxScale * (0.012 + 0.012 * seed.w) / max(0.2, -v.z), 1.0, 6.0);
	}`,yt=`
	precision highp float;
	varying float v_b, v_w;
	void main() {
		vec2 d = gl_PointCoord - 0.5;
		float a = smoothstep(0.5, 0.0, length(d));
		gl_FragColor = vec4((vec3(1.0, 0.14, 0.09) * min(v_b, 1.4) + vec3(1.0, 0.8, 0.55) * v_w) * a * 0.55, 1.0);
	}`;me.exports=function(e){let r=it(),L={position:e.buffer(r.pos),normal:e.buffer(r.nrm),kind:e.buffer(r.kind),uv:e.buffer(r.uv)},I=e.elements({data:r.idx.length>65535?new Uint32Array(r.idx):new Uint16Array(r.idx),type:r.idx.length>65535?"uint32":"uint16"}),O=e.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),s=e.framebuffer({color:O,depth:!0}),n=e({framebuffer:s}),t=e.texture({width:1,height:1,data:[0,0,0,255]}),f=e({}),a=t,m=0,l=0,h=!1,_=[4,4],z=[0,0,0,0],x=null,c=e.texture({width:1,height:1,data:[0,0,0,255]}),i=1,v=o=>{let R=U=>{let Y=Math.sin(U*127.1)*43758.5453;return Y-Math.floor(Y)},S=Math.floor(o*9),q=R(S),E=R(Math.floor(o*.7)),W=.92+.08*Math.sin(o*120);return E>.55&&q>.6&&(W=q>.85?.08:.45),W},u={signK:()=>i,memTex:()=>x||c,projT:o=>typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:o.time};X.stack.forEach((o,R)=>{let S=X.models[o[0]],q=X.G;u["tvLo["+R+"]"]=[g/2+o[2]-S.w*q/2,o.base,X.z+o[4]-.02],u["tvHi["+R+"]"]=[g/2+o[2]+S.w*q/2,o.base+S.h*q,X.z+o[4]+S.d*q]});let b=e({vert:Oe,frag:De,attributes:L,elements:I,cull:{enable:!1},uniforms:{reflTex:()=>a,reflSize:()=>_,reflOn:()=>m,tvLight:()=>z,...u}}),y=o=>new Promise((R,S)=>{let q=new Image,E=W=>(W&W-1)===0;q.onload=()=>R(e.texture({data:q,min:E(q.width)&&E(q.height)?"mipmap":"linear",mag:"linear",wrap:"clamp"})),q.onerror=S,q.src=o}),T=X.stack.map((o,R)=>{let[S,,q,E,W]=o,U=Math.PI+E*Math.PI/180,Y=X.G,n0=Math.cos(U)*Y,l0=Math.sin(U)*Y,u0=N[0]+g/2+q,v0=N[1]+o.base,z0=N[2]+X.z+W;return{name:S,seed:(R+1)*.6180339%1,model:[n0,0,-l0,0,0,Y,0,0,l0,0,n0,0,u0,v0,z0,1]}}),d={},M=null,F=e({vert:ct,frag:ft,attributes:{position:{buffer:e.prop("vb"),stride:36,offset:0},normal:{buffer:e.prop("vb"),stride:36,offset:12},uv:{buffer:e.prop("vb"),stride:36,offset:24},flag:{buffer:e.prop("vb"),stride:36,offset:32}},elements:e.prop("el"),offset:e.prop("offset"),count:e.prop("count"),cull:{enable:!1},uniforms:{model:e.prop("model"),seed:e.prop("seed"),dark:e.prop("dark"),emit:(o,R)=>R.emit||0,bodyTex:e.prop("tex"),...u,memTex:()=>M||c,nMem:36,sigTime:o=>typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:o.time,tvLight:()=>z}});y("res/redroom/memories.webp").then(o=>{M=o,x=o}).catch(o=>console.error("The memories did not load",o));for(let o in X.models){let R=X.models[o],S=[];for(let q=0;q<R.tex;q++)S.push(y("res/redroom/tv_"+o+"_"+q+".webp"));Promise.all([fetch(R.file).then(q=>q.arrayBuffer()),...S]).then(([q,...E])=>{let W=new Uint32Array(q,0,4),U=W[0],Y=W[1],n0=W[2],l0=W[3],u0=new Int32Array(q,16,n0*3),v0=16+n0*12,z0=e.buffer(new Float32Array(q,v0,U*9)),w0=v0+U*36,k0=l0?new Uint32Array(q.slice(w0,w0+Y*4)):new Uint16Array(q.slice(w0,w0+Y*2)),L0=e.elements({data:k0,type:l0?"uint32":"uint16"}),c0=[];for(let C0=0;C0<n0;C0++)c0.push({offset:u0[C0*3],count:u0[C0*3+1],tex:u0[C0*3+2]>=0?E[u0[C0*3+2]]:E[0]});d[o]={vb:z0,el:L0,parts:c0,dark:R.dark}}).catch(q=>console.error("A television did not load",q))}let J=[],t0=()=>{if(M){J.length=0;for(let o of T){let R=d[o.name];if(R)for(let S of R.parts)J.push({vb:R.vb,el:R.el,offset:S.offset,count:S.count,tex:S.tex,model:o.model,seed:o.seed,dark:R.dark})}J.length&&F(J)}},Q=rt(),C=null;y("res/redroom/polaroids.webp").then(o=>{C=o}).catch(o=>console.error("The photographs did not load",o));let G=e({vert:ht,frag:vt,attributes:{position:Q.pos,normal:Q.nrm,uv:Q.uv,pic:Q.pic,style:Q.sty,pivot:{buffer:e.buffer(Q.piv),size:4}},elements:e.elements({data:new Uint16Array(Q.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...u,polTex:()=>C,tvLight:()=>z}}),A=(o,R)=>Promise.all([fetch(o).then(S=>S.arrayBuffer()),...R.map(y)]).then(([S,...q])=>{let E=new Uint32Array(S,0,4),W=E[0],U=E[1],Y=E[2],n0=E[3],l0=new Int32Array(S,16,Y*3),u0=16+Y*12,v0=u0+W*36,z0=e.buffer(new Float32Array(S,u0,W*9)),w0=n0?new Uint32Array(S.slice(v0,v0+U*4)):new Uint16Array(S.slice(v0,v0+U*2)),k0=e.elements({data:w0,type:n0?"uint32":"uint16"}),L0=[];for(let c0=0;c0<Y;c0++)L0.push({offset:l0[c0*3],count:l0[c0*3+1],tex:q[Math.max(0,l0[c0*3+2])],mat:l0[c0*3+2]});return{vb:z0,el:k0,parts:L0}}),j=(o,R)=>{let S=new Array(16);for(let q=0;q<4;q++)for(let E=0;E<4;E++)S[q*4+E]=o[E]*R[q*4]+o[4+E]*R[q*4+1]+o[8+E]*R[q*4+2]+o[12+E]*R[q*4+3];return S},o0=(o,R,S)=>[1,0,0,0,0,1,0,0,0,0,1,0,o,R,S,1],r0=o=>{let R=Math.cos(o),S=Math.sin(o);return[1,0,0,0,0,R,S,0,0,-S,R,0,0,0,0,1]},m0=j(o0(N[0]+$.x,N[1]+$.table,N[2]+$.z),r0(-$.pitch)),h0=$.tableK,K0=[h0,0,0,0,0,h0,0,0,0,0,h0,0,N[0]+g/2,N[1],N[2]+15,1],K={},G0=["res/redroom/proj_0.webp"];A("res/redroom/proj_body.bin",G0).then(o=>{K.body=o}).catch(o=>console.error(o)),A("res/redroom/proj_feed.bin",G0).then(o=>{K.feed=o}).catch(o=>console.error(o)),A("res/redroom/proj_takeup.bin",G0).then(o=>{K.takeup=o}).catch(o=>console.error(o)),A("res/redroom/table_all.bin",["res/redroom/table_0.webp"]).then(o=>{K.table=o}).catch(o=>console.error(o));let Y0=(o,R)=>j(m0,j(o0(o[0],o[1],o[2]),j(r0(R),o0(-o[0],-o[1],-o[2])))),D0=[],a0=o=>{D0.length=0;let R=(S,q,E)=>{if(S)for(let W of S.parts)D0.push({vb:S.vb,el:S.el,offset:W.offset,count:W.count,tex:W.tex,model:q,seed:0,dark:E})};R(K.table,K0,.9),R(K.body,m0,1),R(K.feed,Y0($.feed,-o*2.6),1),R(K.takeup,Y0($.takeup,-o*3.5),1),D0.length&&F(D0)},ie=[],ge=[];{let o=[N[0]+$.lens[0],N[1]+$.lens[1],N[2]+$.lens[2]];[.96,.86,.76,.66,.56,.46,.36].forEach((R,S)=>{let q=$.img.w/2*R,E=$.img.h/2*R,W=[[-q,-E],[q,-E],[q,E],[-q,E]].map(([U,Y])=>[N[0]+$.img.x+U,N[1]+$.img.y+Y,N[2]+V-.02]);for(let U=0;U<4;U++){let Y=W[U],n0=W[(U+1)%4];ie.push(...o,...Y,...n0),ge.push(S,S,S)}})}let Fe=e({vert:pt,frag:dt,attributes:{position:ie,layer:ge},count:ie.length/3,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{...u,tvLight:()=>z}}),Ue=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale, pxScale; attribute vec3 position; void main() { vec3 p = position; p.y *= yScale; vec4 v = view * vec4(p, 1.0); gl_Position = proj * v; gl_PointSize = clamp(pxScale * 0.22 / max(0.3, -v.z), 4.0, 220.0); }",frag:"precision highp float; uniform float time; void main() { vec2 d = gl_PointCoord - 0.5; float r = length(d); float a = exp(-r * r * 160.0) * 1.6 + 0.35 * exp(-r * r * 30.0) + 0.12 * exp(-r * r * 8.0) + 0.5 * exp(-d.y * d.y * 2500.0) * exp(-abs(d.x) * 7.0); gl_FragColor = vec4(vec3(1.0, 0.84, 0.62) * a * (0.9 + 0.1 * sin(time * 37.0)), 1.0); }",attributes:{position:[N[0]+$.lens[0],N[1]+$.lens[1],N[2]+$.lens[2]+.01]},count:1,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),be=null;y("res/redroom/print.webp").then(o=>{be=o}).catch(o=>console.error(o));let re=[],_e=[];D.trays.forEach((o,R)=>{let S=D.TX/2-.009,q=D.TZ/2-.009,E=D.TXc,W=D.liquid,U=[[E-S,o-q],[E+S,o-q],[E+S,o+q],[E-S,o+q]].map(([Y,n0])=>[N[0]+Y,N[1]+W,N[2]+n0]);re.push(...U[0],...U[2],...U[1],...U[0],...U[3],...U[2]);for(let Y=0;Y<6;Y++)_e.push(R)});let Be=e({vert:mt,frag:ut,attributes:{position:re,tray:_e},count:re.length/3,cull:{enable:!1},uniforms:{...u,tvLight:()=>z,printTex:()=>be||c,polTex:()=>C||c}}),A0=Ae();for(let o of Q.pegs)A0.box(o[0]-.008,o[1]-.045,o[2]-.011,o[0]+.008,o[1]+.03,o[2]+.011,w.PEG);let Xe=e({vert:Oe,frag:De,attributes:{position:A0.pos,normal:A0.nrm,kind:A0.kind,uv:A0.uv},elements:e.elements({data:new Uint16Array(A0.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...u,reflTex:()=>t,reflSize:[4,4],reflOn:0,tvLight:()=>z}}),Ke=o=>{let R=Math.cos(o),S=Math.sin(o);return[R,0,-S,0,0,1,0,0,S,0,R,0,0,0,0,1]},s0=(o,R,S,q)=>j(o0(N[0]+o,N[1]+R,N[2]+S),Ke(q||0));A("res/redroom/plastic_all.bin",["res/redroom/plastic_0.webp"]).then(o=>{K.jug=o}).catch(o=>console.error(o)),A("res/redroom/multi_cleaner_all.bin",["res/redroom/multi_cleaner_0.webp"]).then(o=>{K.can=o}).catch(o=>console.error(o)),A("res/redroom/pull_all.bin",["res/redroom/pull_0.webp"]).then(o=>{K.socket=o}).catch(o=>console.error(o)),A("res/redroom/bulb_all.bin",["res/redroom/bulb_0.webp","res/redroom/bulb_1.webp"]).then(o=>{K.bulb=o}).catch(o=>console.error(o));let q0=D.top,H0=D.b[0],Ye=[["jug",s0(.16,q0,H0+.3,.4)],["jug",s0(.17,q0,H0+.52,-.3)],["jug",s0(.36,q0,H0+.4,2.2)],["can",s0(.14,q0,H0+.95,1.57)],["can",s0(.15,q0,H0+1.3,1.45)],["jug",s0(.16,q0,D.b[1]-.35,.9)],["can",s0(.2,q0,D.b[1]-.8,1.7)],["socket",s0(D.bulb[0],D.bulb[1]+.065,D.bulb[2],0)],["bulb",j(s0(D.bulb[0],D.bulb[1]+.048,D.bulb[2],0),r0(Math.PI))]],b0=(o,R)=>[o,0,0,0,0,R===void 0?o:R,0,0,0,0,o,0,0,0,0,1];A("res/redroom/wtable_all.bin",["res/redroom/wtable_0.webp"]).then(o=>{K.wtable=o}).catch(o=>console.error(o)),A("res/redroom/wchair_all.bin",["res/redroom/wchair_0.webp"]).then(o=>{K.wchair=o}).catch(o=>console.error(o)),A("res/redroom/cstick_holder.bin",["res/redroom/cstick_0.webp"]).then(o=>{K.holder=o}).catch(o=>console.error(o)),A("res/redroom/cstick_candle.bin",["res/redroom/cstick_0.webp"]).then(o=>{K.candle=o}).catch(o=>console.error(o)),A("res/redroom/rose_all.bin",["res/redroom/rose_0.webp"]).then(o=>{K.rose=o}).catch(o=>console.error(o)),A("res/redroom/camera_all.bin",[0,1,2,3].map(o=>"res/redroom/camera_"+o+".webp")).then(o=>{K.camera=o}).catch(o=>console.error(o));let F0=B.k,U0=B.z,Z0=Math.PI/2,I0=[["wtable",j(s0(B.x,0,U0,Z0),b0(F0)),1.7],["wchair",j(s0(B.x-B.depth/2-.36,0,U0-.42,Z0+.05),b0(F0)),1.6],["wchair",j(s0(B.x-B.depth/2-.42,0,U0+.45,Z0-.12),b0(F0)),1.6],["wchair",j(s0(B.x+.02,0,U0-B.half-.36,.06),b0(F0)),1.6],["wchair",j(s0(B.x-.05,0,U0+B.half+.4,Math.PI-.1),b0(F0)),.95]];for(let[o,R,S]of B.candles)I0.push(["holder",s0(o,B.top,R,S*3),.9]),I0.push(["candle",j(s0(o,B.top,R,S*3),j(o0(0,.156,0),j(b0(1,S),o0(0,-.156,0)))),1.15]);{let o=7,R=()=>(o=o*16807%2147483647,(o-1)/2147483646),S=B.vase;for(let q=0;q<9;q++){let E=q*2.39996+R()*.4,W=q===0?.04:.16+R()*.2,U=.66+R()*.12,Y=S.h+.25*U-.1-(q===0?-.04:R()*.05),n0=j(j(s0(S.x,B.top+.02,S.z,E),r0(W)),j(o0(0,Y-.02,0),j(r0(Math.PI/2),j(b0(U),o0(0,-.13,0)))));I0.push(["rose",n0,2])}}for(let[o,R,S]of B.laid)I0.push(["rose",j(s0(o,B.top+.002,R,S),b0(.72)),2]);A("res/redroom/woman_all.bin",["res/redroom/woman_0.webp"]).then(o=>{K.woman=o}).catch(o=>console.error(o));let ze=j(s0(T0.x,0,T0.z,T0.yaw),b0(T0.k));I0.push(["woman",ze,2.6]),I0.push(["camera",s0(.15,D.shelf.y,(D.shelf.z0+D.shelf.z1)/2,Z0-.4),1.7]);let Ze=()=>{let o=[];for(let[R,S]of Ye){let q=K[R];q&&q.parts.forEach((E,W)=>o.push({vb:q.vb,el:q.el,offset:E.offset,count:E.count,tex:E.tex,model:S,seed:0,dark:R==="jug"||R==="can"?.85:.7,emit:R==="bulb"&&E.mat===0?1.6:0}))}for(let[R,S,q]of I0){let E=K[R];if(E)for(let W of E.parts)o.push({vb:E.vb,el:E.el,offset:W.offset,count:W.count,tex:W.tex,model:S,seed:0,dark:q,emit:0})}o.length&&F(o),Qe(),K.woman&&Je(),Be(),Xe()},le=[],Le=[];for(let n0=0;n0<8;n0++)for(let l0=0;l0<8;l0++){let u0=(L0,c0)=>[-.08+.285*L0,.405+.20999999999999996*c0,-.222+-.05400000000000002*c0-.008],v0=l0/8,z0=(l0+1)/8,w0=n0/8,k0=(n0+1)/8;for(let[L0,c0]of[[v0,w0],[z0,w0],[z0,k0],[v0,w0],[z0,k0],[v0,k0]])le.push(...u0(L0,c0)),Le.push(L0,c0)}let Je=e({vert:`
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
			${R0}
			${j0}
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
				vec3 col = vec3(0.6, 0.035, 0.04) * (amb + lit) * 1.5 + vec3(0.035, 0.002, 0.003);
				float dist = length(v_eye - v_pos);
				col = mix(col, vec3(0.06, 0.004, 0.005), (1.0 - exp(-dist * 0.035)) * 0.55);
				gl_FragColor = vec4(col, 1.0);
			}`,attributes:{position:le,uv:Le},count:le.length/3,cull:{enable:!1},uniforms:{...u,model:()=>ze,tvLight:()=>z}}),Qe=e({vert:`
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
			}`,attributes:{fp:[].concat(...B.flames.map((o,R)=>[N[0]+o[0],N[1]+o[1],N[2]+o[2],R*1.37]))},count:B.flames.length,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),J0=document.createElement("canvas");J0.width=512,J0.height=192;{let o=J0.getContext("2d");o.fillStyle="#000",o.fillRect(0,0,512,192),o.font='bold 128px "Helvetica Neue", Arial, sans-serif',o.textAlign="center",o.textBaseline="middle",o.shadowColor="#ff2a20",o.shadowBlur=28,o.fillStyle="#ff6a5a",o.fillText("ENTER",256,100),o.shadowBlur=0,o.fillStyle="#ffd8d0",o.fillText("ENTER",256,100)}let et=e.texture({data:J0,min:"linear",mag:"linear",wrap:"clamp"}),_0=y0.sign,Q0=.3,ee=.1125,te=_0[2]-.025,tt=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale; attribute vec3 position; attribute vec2 uv; varying vec2 v_uv; void main() { v_uv = uv; vec3 p = position; p.y *= yScale; gl_Position = proj * view * vec4(p, 1.0); }",frag:"precision highp float; uniform sampler2D tex; uniform float signK; varying vec2 v_uv; void main() { vec3 c = texture2D(tex, v_uv).rgb; vec3 col = c * vec3(1.6, 0.55, 0.5) * signK + vec3(0.06, 0.0, 0.0); gl_FragColor = vec4(col, 1.0); }",attributes:{position:[[_0[0]+Q0,_0[1]-ee,te],[_0[0]-Q0,_0[1]-ee,te],[_0[0]-Q0,_0[1]+ee,te],[_0[0]+Q0,_0[1]+ee,te]].map(o=>[o[0]+N[0],o[1]+N[1],o[2]+N[2]]),uv:[[0,1],[1,1],[1,0],[0,0]]},elements:[0,1,2,0,2,3],cull:{enable:!1},uniforms:{tex:et,signK:()=>i}}),Me=220,Re=[];for(let o=0;o<Me;o++)Re.push(Math.random(),Math.random(),Math.random(),Math.random());let ot=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b;
			void main() {
				vec3 L0 = vec3(${p(N[0]+$.lens[0])}, ${p(N[1]+$.lens[1])}, ${p(N[2]+$.lens[2])});
				vec3 C = vec3(${p(N[0]+$.img.x)}, ${p(N[1]+$.img.y)}, ${p(N[2]+V)});
				vec3 fw = normalize(C - L0);
				vec3 rt = normalize(cross(fw, vec3(0.0, 1.0, 0.0)));
				vec3 up = cross(rt, fw);
				// most of them close to the lens
				float along = 0.15 + pow(seed.x, 2.2) * 7.5;
				float sp = along / length(C - L0);
				vec2 off = (vec2(seed.y, seed.z) - 0.5) * vec2(${p($.img.w)}, ${p($.img.h)}) * sp;
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
			}`,frag:"precision highp float; varying float v_b; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vec3(1.0, 0.84, 0.6) * v_b * a, 1.0); }",attributes:{seed:Re},count:Me,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),ce=70,Te=[];for(let o=0;o<ce;o++)Te.push(Math.random(),Math.random(),Math.random(),o<ce*.6?1:0);let st=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b, v_a, v_s;
			void main() {
				vec3 L0 = vec3(${p(N[0]+$.lens[0])}, ${p(N[1]+$.lens[1])}, ${p(N[2]+$.lens[2])});
				vec3 C = vec3(${p(N[0]+$.img.x)}, ${p(N[1]+$.img.y)}, ${p(N[2]+V)});
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
				float rc = 0.04 + al * ${p($.img.h*.5)} / length(C - L0);
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
			${R0}
			void main() {
				vec2 d = gl_PointCoord - 0.5;
				float g = exp(-dot(d, d) * 9.0);
				float n = rnoise(gl_PointCoord * 3.2 + v_s + time * 0.05) * 0.7 + rnoise(gl_PointCoord * 7.0 - v_s) * 0.3;
				float a = g * smoothstep(0.2, 0.8, n) * v_a * 0.15;
				gl_FragColor = vec4(mix(vec3(0.5, 0.06, 0.04), vec3(1.0, 0.86, 0.68), clamp(v_b - 0.12, 0.0, 1.0)) * v_b * a, 1.0);
			}`,attributes:{seed:Te},count:ce,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),Se=2200,qe=[];for(let o=0;o<Se;o++)qe.push(Math.random(),Math.random(),Math.random(),Math.random());let nt=e({vert:xt,frag:yt,attributes:{seed:qe},count:Se,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),Ie=o=>{let R=!!(o&&o.reflected),S=performance.now()/1e3,q=.8+.12*Math.sin(S*47)*Math.sin(S*3.1)+.08*Math.sin(S*23+1.3);z[0]=.8*q,z[1]=.84*q,z[2]=.95*q,i=v(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:S),b(),tt(),t0(),C&&G(),Ze(),a0(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:S),x&&!(typeof window!="undefined"&&window.__noBeam)&&Fe(),Ue(),!R&&!(typeof window!="undefined"&&window.__noSmoke)&&st(),R||ot(),R||nt()};return Ie.reflect=(o,R)=>f(S=>{let q=S.viewportWidth,E=S.viewportHeight,W=Math.max(2,Math.round(q/2)),U=Math.max(2,Math.round(E/2)),Y=!h;if((s.width!==W||s.height!==U)&&(s.resize(W,U),Y=!0),_[0]=q,_[1]=E,m=1,!Y&&++l%R!==0){a=O;return}a=t,n(()=>{e.clear({color:[0,0,0,1],depth:1}),o()}),a=O,h=!0}),Ie};var de=null;Object.assign(me.exports,{O:N,W:g,L:V,H:Z,ROOM:{W:g,L:V,H:Z,WIN:P,DOOR:f0,ENT:y0,SHAFTS:H,TV:X,DARK:D,PROJ:$,CABLE:g0,POL:x0,TBL:B,WOMAN:T0,winZ:se,vaultY:N0},POST:{threshold:.3},sunGLSL:lt,bakedSun(e){return de||(de=e.texture({width:1,height:1,data:[0,0,0,0]})),de},ready:()=>!0,setFlower(){},setGuide(){},setWind(){}})});var He=fe((Rt,Ge)=>{"use strict";var ae=ue(),{O:xe}=ae,{W:i0,L:ye,TV:V0,DARK:P0,PROJ:O0,TBL:E0,WOMAN:W0}=ae.ROOM,je=e=>[e[0]+xe[0],e[1]+xe[1],e[2]+xe[2]],Ve=(e,r,L)=>e+(r-e)*L,wt=e=>Math.max(0,Math.min(1,e)),S0=O0.x,gt=O0.table,X0=O0.z,B0=[S0+O0.feed[0],gt+O0.feed[1],X0+O0.feed[2]],ne=O0.lens,we=P0.trays[0],bt=[{eye:[i0/2+.15,1.55,-9.6],at:[i0/2,1.7,0],fov:40,dof:.05,p:{fov:58}},{eye:[i0/2+.05,1.6,-3],at:[i0/2,1.85,1.5],fov:50,dof:.05,p:{fov:70}},{eye:[i0/2-.2,1.5,.9],at:[i0/2-3,1.4,7],fov:56,dof:.04,p:{fov:74}},{eye:[i0-4.4,1.55,1.2],at:[i0-.7,1.05,E0.z+.2],fov:46,dof:.06,p:{eye:[i0-4.8,1.6,.9],fov:68}},{eye:[E0.x-1.4,E0.top+.48,E0.z-.7],at:[E0.x+.05,E0.top+.26,E0.z+0],fov:40,dof:.32,p:{fov:50}},{eye:[3.3,1.55,1.3],at:[.3,1.35,5.2],fov:50,dof:.05,p:{eye:[2.8,1.6,.9],fov:72}},{eye:[1.05,1.5,we-.42],at:[P0.TXc-.02,P0.liquid,we+.04],fov:34,dof:.2,p:{eye:[1,1.55,we-.45],fov:52}},{eye:[.62,1.68,(P0.shelf.z0+P0.shelf.z1)/2-.36],at:[.14,1.55,(P0.shelf.z0+P0.shelf.z1)/2],fov:34,dof:.34,p:{fov:48}},{eye:[2,1.6,8.3],at:[.4,2.25,11.3],fov:50,dof:.12,p:{eye:[1.8,1.6,8.1],fov:72}}];function We(e,r){let L=e.length-1,I=Math.max(0,Math.min(L,r)),O=Math.min(L-1,Math.floor(I)),s=I-O,n=e[Math.max(0,O-1)],t=e[O],f=e[O+1],a=e[Math.min(L,O+2)],m=s*s,l=m*s;return[0,1,2].map(h=>.5*(2*t[h]+(-n[h]+f[h])*s+(2*n[h]-5*t[h]+4*f[h]-a[h])*m+(-n[h]+3*t[h]-3*f[h]+a[h])*l))}function _t(){let e=bt.slice(),r=ae.ROOM.CABLE,L=r.path,I=r.socket[2],O=r.socket[0];e.push({eye:[O+1.05,.42,I-.45],at:[O,.27,I+.08],fov:42,dof:.32,p:{eye:[O+1.3,.48,I-.55],fov:58}});let[s,n]=r.run;for(let c of[.04,.22,.42,.62,.82]){let i=Math.round(s+(n-s)*c),v=L[Math.max(0,i-6)],u=L[Math.min(L.length-1,i+6)],b=L[i],y=u[0]-v[0],T=u[2]-v[2],d=Math.hypot(y,T)||1;y/=d,T/=d,e.push({eye:[b[0]-y*.8-T*.12,.3,b[2]-T*.8+y*.12],at:[b[0]+y*1.5,.06,b[2]+T*1.5],fov:44,dof:.24,pass:!0,p:{fov:60}})}e.push({eye:[i0-3,.45,I-1.6],at:[i0-.3,1.9,I+.9],fov:50,dof:.1,p:{fov:70}});let t=(c,i,v)=>[c[0]+i[0]*v,c[1]+i[1]*v,c[2]+i[2]*v],f=11,a=()=>(f=f*16807%2147483647,(f-1)/2147483646),m=(ae.ROOM.POL.spots||[]).filter(c=>c.n[0]<-.5&&c.c[2]>10.5&&c.c[2]<21.5&&c.c[1]>1.9&&c.c[1]<4.6),l=(c,i)=>Math.abs(c.c[2]-i)+Math.abs(c.c[1]-3)*.4,h=[];for(let c of[12.6,15,17.3]){let i=null;for(let v of m)(!i||l(v,c)<l(i,c))&&(i=v);i&&h.indexOf(i)<0&&h.push(i)}h.forEach((c,i)=>{let v=c.n,u=c.c;i>0&&e.push({eye:t(t(u,v,2.2),[0,.15,-.6],1),at:u,fov:50,dof:.05,pass:!0}),e.push({eye:t(t(u,v,1),[0,.06,-.3],1),at:u,fov:36,dof:.26,p:{fov:50}})}),e.push({eye:[S0+2,1.35,X0-1.5],at:[S0,1.35,X0+.1],fov:42,dof:.12,p:{eye:[S0+1.6,1.4,X0-1.5],fov:62}}),e.push({eye:[S0+.85,B0[1]+.12,B0[2]-.35],at:[B0[0],B0[1]-.05,B0[2]],fov:36,dof:.32,p:{fov:52}}),e.push({eye:[S0+.42,ne[1]+.08,ne[2]+1.35],at:[S0,ne[1],ne[2]],fov:36,dof:.35,p:{fov:52}}),e.push({eye:[S0-.55,1.75,X0-1.4],at:[i0/2,5,ye],fov:50,dof:.06,p:{fov:70}});{let c=Math.sin(W0.yaw),i=Math.cos(W0.yaw);e.push({eye:[W0.x-c*2.5-i*.2,1.3,W0.z-i*2.5+c*.2],at:[W0.x+c*.4,.85,W0.z+i*.4],fov:40,dof:.22,p:{fov:58}})}let _=V0.stack;e.push({eye:[i0/2+1.4,1.2,V0.z-4.9],at:[i0/2,1.75,V0.z],fov:50,dof:.05,p:{fov:70}});let z=_.map((c,i)=>i);for(let c=z.length-1;c>0;c--){let i=Math.floor(a()*(c+1)),v=z[c];z[c]=z[i],z[i]=v}let x=null;for(let c of z){let i=_[c],v=i.screen,u=i.facing,b=i.size*1.25;if(x){let T=[(x[0]+v[0])/2,(x[1]+v[1])/2+.2,Math.min(x[2],v[2])-2.6];e.push({eye:T,at:[(x[0]+v[0])/2,(x[1]+v[1])/2,V0.z],fov:46,dof:.05,pass:!0})}let y=(a()-.5)*.5;e.push({eye:[v[0]+u[0]*b+y,v[1]+.05+(a()-.5)*.15,v[2]+u[2]*b],at:[v[0],v[1],v[2]],fov:30,dof:.3,p:{fov:44}}),x=v}return e.push({eye:[i0/2,2.6,V0.z-3.5],at:[i0/2,4.5,ye],fov:52,dof:.05,pass:!0}),e.push({eye:[i0/2,4.3,V0.z+1.6],at:[i0/2,6,ye],fov:62,dof:.04,p:{fov:82}}),e}Ge.exports=function(){let r=_t(),L=r.length-1,I=r.map((d,M)=>d.pass?-1:M).filter(d=>d>=0),O=(d,M)=>{if(M>=0){for(let k of I)if(k>=d-.06)return k;return I[I.length-1]}for(let k=I.length-1;k>=0;k--)if(I[k]<=d+.06)return I[k];return I[0]},s=(d,M)=>{if(M>0){for(let k of I)if(k>d+.01)return k;return I[I.length-1]}for(let k=I.length-1;k>=0;k--)if(I[k]<d-.01)return I[k];return I[0]},n=null,t=null,f=0,a=0,m=null,l=-10,h=0,_=null,z=1,x=-10,c=[],i=(d,M,k)=>{window.addEventListener(d,M,k),c.push([d,M,k])},v=d=>{let M=Math.sign(d);M&&(M!==z&&h-x<.25&&Math.abs(d)<.02||(M!==z&&(z=M),x=h,a=Math.max(0,Math.min(L,a+d)),l=h))},u=d=>{z=d>0?1:-1,a=s(a,d),l=h-10};i("wheel",d=>{if(d.target.closest&&d.target.closest(".st-ui"))return;d.preventDefault();let M=d.deltaMode===1?d.deltaY*16:d.deltaMode===2?d.deltaY*window.innerHeight:d.deltaY;v(Math.max(-.6,Math.min(.6,M/700)))},{passive:!1});let b=null;i("pointerdown",d=>{d.target.closest&&d.target.closest("button, a, .st-ui")||(b={lx:d.clientX,ly:d.clientY,moved:0,t:performance.now()})}),i("pointermove",d=>{if(!b)return;let M=d.clientX-b.lx,k=d.clientY-b.ly;b.lx=d.clientX,b.ly=d.clientY;let F=Math.abs(k)>=Math.abs(M)?-k:-M;b.moved+=Math.abs(F),b.moved>6&&v(F/(window.innerHeight*.55))}),i("pointerup",()=>{let d=b;b=null,d&&d.moved<8&&performance.now()-d.t<450&&u(1)}),i("keydown",d=>{d.key==="ArrowDown"||d.key==="ArrowRight"||d.key==="PageDown"||d.key===" "?u(1):(d.key==="ArrowUp"||d.key==="ArrowLeft"||d.key==="PageUp")&&u(-1)});function y(d){h=d,_===null&&(_=d);let M=m===null?0:Math.min(.1,d-m);m=d,typeof window!="undefined"&&window.__redShot!==void 0&&/tourdebug/.test(location.search)&&(f=a=window.__redShot),h-l>.35&&(a+=(O(a,z)-a)*(1-Math.exp(-M*2))),f+=(a-f)*(1-Math.exp(-M*1.7)),Math.abs(a-f)<1e-4&&(f=a);let k=window.innerWidth<window.innerHeight,F=r.map(a0=>k&&a0.p?Object.assign({},a0,a0.p):a0),J=Math.min(L-1,Math.floor(f)),t0=f-J,Q=t0*t0*(3-2*t0),C=We(F.map(a0=>a0.eye),f),G=We(F.map(a0=>a0.at),f);(!n||M===0||M>.09)&&(n=C.slice(),t=G.slice());let A=1-Math.exp(-M*5);for(let a0=0;a0<3;a0++)n[a0]+=(C[a0]-n[a0])*A,t[a0]+=(G[a0]-t[a0])*A;C=n.slice(),G=t.slice();let j=F[J],o0=F[Math.min(L,J+1)],r0=Ve(j.fov,o0.fov,Q),m0=Ve(j.dof,o0.dof,Q),h0=typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:d,K0=Math.hypot(G[0]-C[0],G[1]-C[1],G[2]-C[2]),K=.01+.03*Math.min(1,K0/6);C=[C[0]+Math.sin(h0*.31)*K,C[1]+Math.sin(h0*.43+1)*K*.6,C[2]+Math.cos(h0*.27)*K],G=[G[0]+Math.sin(h0*.21+2)*K*.8,G[1]+Math.sin(h0*.37)*K*.5,G[2]];let G0=je(C),Y0=je(G),D0=1-wt((d-_-.3)/1.8);return{eye:G0,target:Y0,fov:r0,roll:Math.sin(h0*.17)*.004,moving:!0,look:{letterbox:.45,focus:K0,aperture:m0,vignette:.3,exposure:1.45,shafts:1,fade:D0,fadeColor:[0,0,0]}}}function T(){for(let[d,M,k]of c)window.removeEventListener(d,M,k);c.length=0}return{update:y,tap:()=>u(1),dispose:T,placeFlower(){},get scroll(){return f},END:L}}});window.__redRoom={studio:ue(),tour:He()};})();

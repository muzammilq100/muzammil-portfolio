"use strict";(()=>{var ie=(e,p)=>()=>(p||e((p={exports:{}}).exports,p),p.exports);var Te=ie((wt,Me)=>{"use strict";var y0=[-90,0,0],le=16,ce=27.5,fe=11.6;Me.exports={O:y0,W:le,L:ce,RIDGE:fe,BOX:[y0[0]-.8,0,y0[2]-11.5,y0[0]+le+.8,fe+.5,y0[2]+ce+.8],AIR_BOX:[y0[0],0,y0[2],y0[0]+le,fe,y0[2]+ce]}});var ve=ie((gt,he)=>{"use strict";var{O:N,W:M,L:j}=Te(),v=e=>(+e).toFixed(4),Y=10.5,Q0=.7,Se=3,P={hw:1.25,sill:1.35,spring:6.9,n:4,step:6.35};P.z0=j/2-P.step*(P.n-1)/2;P.apex=P.spring+P.hw*Math.sqrt(3);var ee=e=>P.z0+P.step*e;P.leftFrom=2;var Q=(()=>{let p=P.z0,T={k:1.42,z:p,top:.543*1.42,half:.601*1.42,depth:.706*1.42};return T.x=M-.12-T.depth/2,T.candles=[[M-.4,p-.52,1],[M-.3,p-.3,.62],[M-.36,p+.42,.38]],T.vase={x:M-.55,z:p+.06,h:.24},T.flames=T.candles.map(([I,D,s])=>[I,T.top+.156+.144*s+.018,D]),T})();P.lowSill=Q.top+.06;var H=[];for(let e=0;e<=P.n;e++)H.push(P.z0+P.step*(e-.5));var l0={hw:.75,h:2.6,depth:.7},v0={hw:1.8,h:3.6,z:-11,sign:[M/2,l0.h+.32,-l0.depth-.05],open:2.2},B={z:21.2,G:2.4,models:{sony:{file:"res/redroom/tv_sony.bin",tex:3,w:.36,h:.341,d:.455,dark:.55},crt:{file:"res/redroom/tv_crt.bin",tex:3,w:.47,h:.454,d:.389,dark:.9},old:{file:"res/redroom/tv_old.bin",tex:1,w:.62,h:.418,d:.416,dark:.75}}};B.stack=[["old",0,-1.41,2,.04],["crt",0,.05,-1,-.02],["sony",0,1.24,-2,.06],["crt",1,-1.16,3,.02],["sony",1,-.03,-1,.04],["crt",1,1.14,-3,.06],["sony",2,-.73,2,.06],["old",2,.66,-2,.03],["crt",0,-2.78,3,.08],["sony",1,-2.68,4,.1],["old",0,2.5,-3,.08],["sony",1,2.32,-4,.1]];var Qe={sony:[0,.194],crt:[0,.27],old:[.0625,.2145]};(()=>{let e=[];for(let p of B.stack){let T=B.models[p[0]],I=p[1],D=p[2],s=T.w*B.G,n=0;for(let a of e)a.row>=I||Math.abs(a.dx-D)<(a.w+s)/2*.92&&(n=Math.max(n,a.top));e.push({dx:D,row:I,w:s,top:n+T.h*B.G*.99}),p.base=n;let t=Qe[p[0]],l=p[3]*Math.PI/180;p.screen=[M/2+D+t[0]*B.G,n+t[1]*B.G,B.z+p[4]],p.facing=[-Math.sin(l),0,-Math.cos(l)],p.size=T.w*B.G}})();var O=(()=>{let e={top:.92,depth:.78};return e.a=[H[0]+.7,H[1]-.55],e.b=[H[1]+.55,H[2]-.7],e.basin={x0:.08,x1:e.depth-.07,z0:e.a[0]+.1,z1:e.a[1]-.1,floor:e.top-.1},e.TX=.44,e.TZ=.54,e.TH=.075,e.TXc=(e.basin.x0+e.basin.x1)/2,e.trays=[e.a[0]+1.1,e.a[0]+1.72,e.a[0]+2.34],e.liquid=e.basin.floor+.05,e.bulb=[e.TXc+.02,1.39,e.trays[0]+.05],e.tube={x:.07,y:3.05,z0:e.b[0]+.2,z1:e.b[1]-.2},e.shelf={y:1.5,d:.3,z0:e.trays[2]+.42,z1:e.trays[2]+1.12},e.lines=[[.32,2.74,H[0],H[1],.12],[.74,2.52,H[0],H[1],.17],[1.1,2.62,H[0],H[1],.2],[.3,2.76,H[1],H[2],.15],[.68,2.46,H[1],H[2],.19],[1.06,2.66,H[1],H[2],.22],[.5,1.98,H[1],H[2],.12],[.45,2.98,H[0],H[1],.1,1.45],[1.45,2.4,H[0],H[1],.2],[.95,2.26,H[0],H[1],.13,.4],[1.4,3,H[1],H[2],.14,.45],[1.5,2.36,H[1],H[2],.22],[.9,2.2,H[1],H[2],.15,1.35]],e})(),$=(()=>{let e={x:M/2-.006,z:14.92,tableK:1.25,pitch:.1};e.table=.761*e.tableK,e.feed=[.0254,.7696,.3364],e.takeup=[.0252,.2484,.337],e.lensL=[.006,.456,.15];let p=Math.cos(e.pitch),T=Math.sin(e.pitch),I=e.lensL;return e.lens=[e.x+I[0],e.table+I[1]*p+I[2]*T,e.z-I[1]*T+I[2]*p],e.img={x:M/2,y:6,w:6.4},e.img.h=e.img.w*.75,e})(),e0={x0:4.2,x1:11.8,y:9,z:j-.16},m0={r:.045};(()=>{let e=m0.r,p=O.depth,T=O.b[1]-.22;m0.socket=[p,.3,T],m0.ctrl=[[p+.1,.3,T],[p+.2,.295,T],[p+.3,.22,T+.02],[p+.42,e,T+.1],[p+.8,e,T+.3],[1.8,e,T+.45],[3.4,e,T+.1],[5.2,e,T-.55],[7.2,e,T-.95],[9.4,e,T-.9],[11.4,e,T-.45],[13.2,e,T+.1],[M-1.15,e,T+.55],[M-.85,e,T+1.05],[M-.85,e,15.2],[M-1.1,e,16.3],[M-1.7,e,17.2],[M-2.5,e,17.9],[12.9,e,18.5],[11.5,e,18.9],[10.6,e,19.5],[10.5,e,20.3],[11.2,e,20.5],[10.9,e,19.95],[10,e*2.2,20.1],[9.3,e,20.75],[9.5,e,21.9],[8.6,e,22.25],[8.1,.22,21.95]];let I=m0.ctrl,D=[];for(let t=0;t<I.length-1;t++){let l=I[Math.max(0,t-1)],a=I[t],d=I[t+1],i=I[Math.min(I.length-1,t+2)],f=Math.max(2,Math.ceil(Math.hypot(d[0]-a[0],d[1]-a[1],d[2]-a[2])/.06));for(let y=0;y<f;y++){let _=y/f,u=_*_,c=u*_;D.push([0,1,2].map(r=>.5*(2*a[r]+(-l[r]+d[r])*_+(2*l[r]-5*a[r]+4*d[r]-i[r])*u+(-l[r]+3*a[r]-3*d[r]+i[r])*c)))}}D.push(I[I.length-1].slice());for(let t of D)t[1]<e&&t[2]>-1.4&&(t[1]=e);m0.path=D;let s=D.findIndex(t=>t[1]<=e*1.01),n=D.findIndex((t,l)=>l>s&&t[0]>M-1.3);m0.run=[s,n]})();var b0={spots:[],w:.36,h:.435,n:36,lines:[{z:j-1.7,y:6.5,sag:1},{z:j-2.6,y:5.3,sag:.8}]},p0=(()=>{let e=[-.62,.75,-.16],p=Math.hypot(...e);return e.map(T=>T/p)})(),T0=(()=>{let e=M/2;return(e*e+Se*Se)/(2*e)})(),M0=e=>{let p=e<=M/2?e:M-e;return Y+Math.sqrt(Math.max(0,T0*T0-(p-T0)*(p-T0)))},g={FLOOR:0,WALL:1,REVEAL:2,GLASS:3,VAULT:4,TRIM:5,VOID:6,TUBE:7,CABLE:8,TILE:9,STEEL:10,PEG:11,CONC:12,CFLOOR:13,DOOR:14};function $e(){let e=[],p=[],T=[],I=[],D=[],s={pos:e,nrm:p,kind:T,uv:I,idx:D,v(n,t,l,a){return e.push(n[0]+N[0],n[1]+N[1],n[2]+N[2]),p.push(t[0],t[1],t[2]),T.push(l),I.push(a?a[0]:0,a?a[1]:0),e.length/3-1},quad(n,t,l,a,d,i,f,y,_,u){let c=s.v(n,d,i,f),r=s.v(t,d,i,y),h=s.v(l,d,i,_),x=s.v(a,d,i,u);D.push(c,r,h,c,h,x)},box(n,t,l,a,d,i,f){s.quad([n,t,i],[a,t,i],[a,d,i],[n,d,i],[0,0,1],f),s.quad([a,t,l],[n,t,l],[n,d,l],[a,d,l],[0,0,-1],f),s.quad([a,t,i],[a,t,l],[a,d,l],[a,d,i],[1,0,0],f),s.quad([n,t,l],[n,t,i],[n,d,i],[n,d,l],[-1,0,0],f),s.quad([n,d,i],[a,d,i],[a,d,l],[n,d,l],[0,1,0],f),s.quad([n,t,l],[a,t,l],[a,t,i],[n,t,i],[0,-1,0],f)},cyl(n,t,l,a,d,i,f){f=f||18;for(let y=0;y<f;y++){let _=y/f*Math.PI*2,u=(y+1)/f*Math.PI*2,c=[Math.sin(_),0,Math.cos(_)],r=[Math.sin(u),0,Math.cos(u)],h=(m,L)=>[n+m[0]*l,L,t+m[2]*l],x=s.v(h(c,a),c,i),b=s.v(h(r,a),r,i),w=s.v(h(r,d),r,i),q=s.v(h(c,d),c,i);D.push(x,b,w,x,w,q)}}};return s}function f0(e,p,T,I,D){let s=null,n=null,t=[];for(let l=0;l<p.length;l++){let a=p[Math.max(0,l-1)],d=p[Math.min(p.length-1,l+1)],i=[d[0]-a[0],d[1]-a[1],d[2]-a[2]],f=Math.hypot(...i)||1;i=i.map(r=>r/f),n||(n=Math.abs(i[1])<.9?[0,1,0]:[1,0,0]);let y=n[0]*i[0]+n[1]*i[1]+n[2]*i[2];n=[n[0]-i[0]*y,n[1]-i[1]*y,n[2]-i[2]*y];let _=Math.hypot(...n)||1;n=n.map(r=>r/_);let u=[i[1]*n[2]-i[2]*n[1],i[2]*n[0]-i[0]*n[2],i[0]*n[1]-i[1]*n[0]],c=[];for(let r=0;r<I;r++){let h=r/I*Math.PI*2,x=Math.cos(h),b=Math.sin(h),w=[n[0]*x+u[0]*b,n[1]*x+u[1]*b,n[2]*x+u[2]*b];c.push(e.v([p[l][0]+w[0]*T,p[l][1]+w[1]*T,p[l][2]+w[2]*T],w,D,[l,r]))}if(s)for(let r=0;r<I;r++){let h=(r+1)%I;e.idx.push(s[r],s[h],c[h],s[r],c[h],c[r])}s=c,t.push(c)}}var Ee=(e,p)=>[e[0]+((e[5]===void 0?e[0]:e[5])-e[0])*p,e[1]-e[4]*4*p*(1-p),e[2]+.35+(e[3]-e[2]-.7)*p];function qe(e,p,T){let I=[[-e,p],[-e,T]],D=2*e,s=14;for(let n=1;n<=s;n++){let t=Math.PI-n/s*(Math.PI/3);I.push([e+D*Math.cos(t),T+D*Math.sin(t)])}for(let n=1;n<=s;n++){let t=Math.PI/3-n/s*(Math.PI/3);I.push([-e+D*Math.cos(t),T+D*Math.sin(t)])}return I.push([e,p]),I}function Ie(e,p,T,I,D,s,n){let t=D?p.length:p.length-1;for(let l=0;l<t;l++){let a=p[l],d=p[(l+1)%p.length],i=d[0]-a[0],y=-(d[1]-a[1]),_=i,u=Math.hypot(y,_)||1;y/=u,_/=u;let c=(a[0]+d[0])/2-n[0],r=(a[1]+d[1])/2-n[1];y*c+_*r>0&&(y=-y,_=-_);let h=I(y,_,0,!0);e.quad(I(a[0],a[1],0),I(d[0],d[1],0),I(d[0],d[1],T),I(a[0],a[1],T),h,s,[a[0],a[1]],[d[0],d[1]],[d[0],d[1]],[a[0],a[1]])}}function et(){let e=$e();e.quad([0,0,0],[0,0,j],[M,0,j],[M,0,0],[0,1,0],g.FLOOR),e.quad([0,0,j],[0,0,0],[0,Y,0],[0,Y,j],[1,0,0],g.WALL,[j,0],[0,0],[0,Y],[j,Y]),e.quad([M,0,0],[M,0,j],[M,Y,j],[M,Y,0],[-1,0,0],g.WALL,[0,0],[j,0],[j,Y],[0,Y]);let p=24;for(let s of[0,1]){let n=s?j:0,t=[0,0,s?-1:1];for(let l=0;l<p;l++){let a=l/p*M,d=(l+1)/p*M,i=[a,0,n],f=[d,0,n],y=[d,M0(d),n],_=[a,M0(a),n];s?e.quad(f,i,_,y,t,g.WALL,[d,0],[a,0],[a,_[1]],[d,y[1]]):e.quad(i,f,y,_,t,g.WALL,[a,0],[d,0],[d,y[1]],[a,_[1]])}}let T=40;for(let s=0;s<T;s++){let n=s/T*M,t=(s+1)/T*M,l=M0(n),a=M0(t),d=(r,h)=>{let x=r<=M/2?r:M-r,b=(T0-x)/T0,w=(Y-h)/T0;return r>M/2&&(b=-b),[b,w,0]},i=d(n,l),f=d(t,a),y=e.v([n,l,0],i,g.VAULT,[n,0]),_=e.v([t,a,0],f,g.VAULT,[t,0]),u=e.v([t,a,j],f,g.VAULT,[t,j]),c=e.v([n,l,j],i,g.VAULT,[n,j]);e.idx.push(y,_,u,y,u,c)}let I=qe(P.hw,P.sill,P.spring),D=qe(P.hw,P.lowSill,P.spring);for(let s=0;s<P.n;s++){let n=s===0?P.lowSill:P.sill,t=ee(s),l=s>=P.leftFrom;l&&Ie(e,I,Q0,(_,u,c,r)=>r?[0,u,_]:[-c,u,t+_],!0,g.REVEAL,[0,(P.sill+P.apex)/2]),Ie(e,s===0?D:I,Q0,(_,u,c,r)=>r?[0,u,_]:[M+c,u,t+_],!0,g.REVEAL,[0,(n+P.apex)/2]);let a=Q0*.55,d=P.sill-.02,i=P.apex+.02,f=P.hw+.02;l&&e.quad([-a,d,t+f],[-a,d,t-f],[-a,i,t-f],[-a,i,t+f],[1,0,0],g.GLASS,[f,d],[-f,d],[-f,i],[f,i]);let y=n-.02;e.quad([M+a,y,t-f],[M+a,y,t+f],[M+a,i,t+f],[M+a,i,t-f],[-1,0,0],g.GLASS,[-f,y],[f,y],[f,i],[-f,i]),l&&e.box(-.02,P.sill-.12,t-P.hw-.18,.12,P.sill,t+P.hw+.18,g.TRIM),e.box(M-.12,n-(s===0?.05:.12),t-P.hw-.18,M+.02,n,t+P.hw+.18,g.TRIM)}{let s=M/2-l0.hw,n=M/2+l0.hw,t=l0.h,l=l0.depth;e.quad([s,0,-l],[s,0,0],[s,t,0],[s,t,-l],[1,0,0],g.REVEAL),e.quad([n,0,0],[n,0,-l],[n,t,-l],[n,t,0],[-1,0,0],g.REVEAL),e.quad([s,t,0],[n,t,0],[n,t,-l],[s,t,-l],[0,-1,0],g.REVEAL),e.quad([s,.001,-l],[n,.001,-l],[n,.001,0],[s,.001,0],[0,1,0],g.CFLOOR);let a=M/2-v0.hw,d=M/2+v0.hw,i=v0.h,f=v0.z;e.quad([a,0,f],[a,0,-l],[d,0,-l],[d,0,f],[0,1,0],g.CFLOOR),e.quad([a,0,-l],[a,0,f],[a,i,f],[a,i,-l],[1,0,0],g.CONC,[-l,0],[f,0],[f,i],[-l,i]),e.quad([d,0,f],[d,0,-l],[d,i,-l],[d,i,f],[-1,0,0],g.CONC,[f,0],[-l,0],[-l,i],[f,i]),e.quad([a,i,f],[a,i,-l],[d,i,-l],[d,i,f],[0,-1,0],g.CONC,[f,0],[-l,0],[-l,1],[f,1]),e.quad([d,0,f],[a,0,f],[a,i,f],[d,i,f],[0,0,1],g.CONC,[0,0],[1,0],[1,i],[0,i]);let y=-l;e.quad([a,0,y],[s,0,y],[s,i,y],[a,i,y],[0,0,-1],g.CONC,[a,0],[s,0],[s,i],[a,i]),e.quad([n,0,y],[d,0,y],[d,i,y],[n,i,y],[0,0,-1],g.CONC,[n,0],[d,0],[d,i],[n,i]),e.quad([s,t,y],[n,t,y],[n,i,y],[s,i,y],[0,0,-1],g.CONC,[s,t],[n,t],[n,i],[s,i]);let _=s,u=y-.01,c=v0.open,r=l0.hw*2-.04,h=.045,x=[Math.cos(c),0,-Math.sin(c)],b=[Math.sin(c),0,Math.cos(c)],w=(F,Z,t0)=>[_+x[0]*F+b[0]*t0,Z,u+x[2]*F+b[2]*t0],q=.012,m=t-.02;e.quad(w(0,q,h),w(r,q,h),w(r,m,h),w(0,m,h),b,g.DOOR),e.quad(w(r,q,0),w(0,q,0),w(0,m,0),w(r,m,0),b.map(F=>-F),g.DOOR),e.quad(w(r,q,h),w(r,q,0),w(r,m,0),w(r,m,h),x,g.DOOR),e.quad(w(0,m,h),w(r,m,h),w(r,m,0),w(0,m,0),[0,1,0],g.DOOR);let L=w(r-.09,1.02,h+.03);f0(e,[w(r-.09,1.02,h),L,[L[0]-x[0]*.12,L[1],L[2]-x[2]*.12]],.011,6,g.STEEL);let k=v0.sign;e.box(k[0]-.33,k[1]-.12,k[2]-.02,k[0]+.33,k[1]+.12,y,g.TRIM)}for(let s of H){for(let a of[.2,M-.2])e.box(a-.42,0,s-.42,a+.42,.5,s+.42,g.TRIM),e.cyl(a,s,.27,.5,Y-.55,g.TRIM),e.cyl(a+(a<M/2?.2:-.2),s-.36,.1,.5,Y-.55,g.TRIM,10),e.cyl(a+(a<M/2?.2:-.2),s+.36,.1,.5,Y-.55,g.TRIM,10),e.box(a-.45,Y-.55,s-.5,a+.45,Y-.25,s+.5,g.TRIM);let n=40,t=.22,l=.22;for(let a=0;a<n;a++){let d=a/n*M,i=(a+1)/n*M,f=M0(d),y=M0(i),_=[M/2-d,-(f-Y+2),0],u=[M/2-i,-(y-Y+2),0],c=w=>{let q=Math.hypot(w[0],w[1])||1;return[w[0]/q,w[1]/q,0]},r=c(_),h=c(u),x=[d+r[0]*l,f+r[1]*l],b=[i+h[0]*l,y+h[1]*l];e.quad([x[0],x[1],s-t],[b[0],b[1],s-t],[b[0],b[1],s+t],[x[0],x[1],s+t],r,g.TRIM),e.quad([d,f,s-t],[i,y,s-t],[b[0],b[1],s-t],[x[0],x[1],s-t],[0,0,-1],g.TRIM),e.quad([i,y,s+t],[d,f,s+t],[x[0],x[1],s+t],[b[0],b[1],s+t],[0,0,1],g.TRIM)}}{let s=O,n=s.top,t=s.basin,l=(u,c,r)=>{if(e.box(0,0,u,s.depth-.06,.12,c,g.TRIM),e.quad([s.depth,.12,u],[s.depth,.12,c],[s.depth,n,c],[s.depth,n,u],[1,0,0],g.TILE,[u,.12],[c,.12],[c,n],[u,n]),e.quad([0,.12,u],[s.depth,.12,u],[s.depth,n,u],[0,n,u],[0,0,-1],g.TILE,[0,.12],[s.depth,.12],[s.depth,n],[0,n]),e.quad([s.depth,.12,c],[0,.12,c],[0,n,c],[s.depth,n,c],[0,0,1],g.TILE,[s.depth,.12],[0,.12],[0,n],[s.depth,n]),!r){e.quad([0,n,u],[0,n,c],[s.depth,n,c],[s.depth,n,u],[0,1,0],g.TILE,[0,u],[0,c],[s.depth,c],[s.depth,u]);return}let h=(x,b,w,q)=>e.quad([x,n,w],[x,n,q],[b,n,q],[b,n,w],[0,1,0],g.TILE,[x,w],[x,q],[b,q],[b,w]);h(0,t.x0,u,c),h(t.x1,s.depth,u,c),h(t.x0,t.x1,u,t.z0),h(t.x0,t.x1,t.z1,c),e.quad([t.x0,t.floor,t.z0],[t.x0,t.floor,t.z1],[t.x1,t.floor,t.z1],[t.x1,t.floor,t.z0],[0,1,0],g.TILE,[t.x0,t.z0],[t.x0,t.z1],[t.x1,t.z1],[t.x1,t.z0]),e.quad([t.x0,t.floor,t.z1],[t.x0,t.floor,t.z0],[t.x0,n,t.z0],[t.x0,n,t.z1],[1,0,0],g.TILE,[t.z1,t.floor],[t.z0,t.floor],[t.z0,n],[t.z1,n]),e.quad([t.x1,t.floor,t.z0],[t.x1,t.floor,t.z1],[t.x1,n,t.z1],[t.x1,n,t.z0],[-1,0,0],g.TILE,[t.z0,t.floor],[t.z1,t.floor],[t.z1,n],[t.z0,n]),e.quad([t.x0,t.floor,t.z0],[t.x1,t.floor,t.z0],[t.x1,n,t.z0],[t.x0,n,t.z0],[0,0,1],g.TILE,[t.x0,t.floor],[t.x1,t.floor],[t.x1,n],[t.x0,n]),e.quad([t.x1,t.floor,t.z1],[t.x0,t.floor,t.z1],[t.x0,n,t.z1],[t.x1,n,t.z1],[0,0,-1],g.TILE,[t.x1,t.floor],[t.x0,t.floor],[t.x0,n],[t.x1,n])};l(s.a[0],s.a[1],!0),l(s.b[0],s.b[1],!1);for(let[u,c]of[s.a,s.b])e.quad([.012,n,c],[.012,n,u],[.012,n+.62,u],[.012,n+.62,c],[1,0,0],g.TILE,[c,n],[u,n],[u,n+.62],[c,n+.62]);let a=u=>{let c=t.floor+.004,r=c+s.TH,h=s.TX/2,x=s.TZ/2,b=.02,w=s.TXc,q=[[w-h+b,u-x+b],[w+h-b,u-x+b],[w+h-b,u+x-b],[w-h+b,u+x-b]],m=[[w-h,u-x],[w+h,u-x],[w+h,u+x],[w-h,u+x]];e.quad([q[0][0],c,q[0][1]],[q[3][0],c,q[3][1]],[q[2][0],c,q[2][1]],[q[1][0],c,q[1][1]],[0,1,0],g.STEEL);for(let L=0;L<4;L++){let k=(L+1)%4,F=[q[L][0],c,q[L][1]],Z=[q[k][0],c,q[k][1]],t0=[m[k][0],r,m[k][1]],J=[m[L][0],r,m[L][1]],C=(q[L][0]+q[k][0])/2-w,W=(q[L][1]+q[k][1])/2-u,A=Math.hypot(C,W)||1;e.quad(F,Z,t0,J,[-C/A*.95,.3,-W/A*.95],g.STEEL),e.quad(Z,F,[J[0],c+.001,J[2]],[t0[0],c+.001,t0[2]],[C/A,0,W/A],g.STEEL)}f0(e,[...m,m[0]].map(L=>[L[0],r+.004,L[1]]),.005,5,g.STEEL)};for(let u of s.trays)a(u);let d=(u,c,r,h,x,b)=>{for(let w of[-.012,.012])f0(e,[[u,x,c+w],[(u+r)/2,(x+b)/2+.006,(c+h)/2+w*.6],[r,b,h+w*.2]],.0045,5,g.PEG)};d(s.TXc+.05,s.trays[0]+.12,s.TXc+.27,s.trays[0]+.42,s.liquid-.005,s.top+.03),d(s.TXc-.1,s.trays[2]-.2,s.TXc+.24,s.trays[2]-.05,s.liquid+.002,s.liquid+s.TH*.9);let i=t.z1-.3;f0(e,[[0,1.32,i],[.18,1.32,i],[.27,1.3,i],[.32,1.22,i],[.33,1.12,i]],.016,8,g.STEEL),e.box(0,1.27,i-.05,.05,1.37,i+.05,g.STEEL);let f=O.bulb;f0(e,[[0,2.32,f[2]],[f[0]*.6,2.32,f[2]],[f[0],2.28,f[2]]],.012,6,g.TRIM),e.box(0,2.24,f[2]-.06,.03,2.4,f[2]+.06,g.TRIM),f0(e,[[f[0],2.28,f[2]],[f[0]+.004,1.9,f[2]+.003],[f[0],f[1]+.2,f[2]]],.004,5,g.CABLE);{let u=Q.vase,c=Q.top,r=[[.045,0],[.07,.03],[.08,.09],[.072,.15],[.05,.2],[.042,.225],[.05,u.h]],h=24;for(let x=0;x<r.length-1;x++){let[b,w]=r[x],[q,m]=r[x+1];for(let L=0;L<h;L++){let k=L/h*Math.PI*2,F=(L+1)/h*Math.PI*2,Z=(C,W,A)=>[u.x+Math.cos(A)*C,c+W,u.z+Math.sin(A)*C],t0=C=>{let W=q-b,A=m-w,G=Math.hypot(W,A);return[Math.cos(C)*A/G,-W/G,Math.sin(C)*A/G]},J=(k+F)/2;e.quad(Z(b,w,k),Z(b,w,F),Z(q,m,F),Z(q,m,k),t0(J),g.TRIM)}}}let y=O.shelf;e.box(0,y.y-.03,y.z0,y.d,y.y,y.z1,g.TRIM);for(let u of[y.z0+.08,y.z1-.08])e.box(0,y.y-.2,u-.012,.022,y.y-.03,u+.012,g.TRIM),e.box(0,y.y-.06,u-.012,y.d*.7,y.y-.03,u+.012,g.TRIM);let _=O.tube;f0(e,[[_.x+.02,_.y,_.z0],[_.x+.02,_.y,(_.z0+_.z1)/2],[_.x+.02,_.y,_.z1]],.035,10,g.TUBE),e.box(0,_.y-.05,_.z0-.06,.07,_.y+.05,_.z0-.01,g.TRIM),e.box(0,_.y-.05,_.z1+.01,.07,_.y+.05,_.z1+.06,g.TRIM);for(let u of O.lines){let c=[];for(let r=0;r<=24;r++){let h=r/24;c.push(Ee(u,h))}f0(e,c,.0035,5,g.CABLE);for(let r of[c[0],c[24]])f0(e,[[0,r[1]+.05,r[2]],[r[0]*.5,r[1]+.02,r[2]],[r[0]+.02,r[1],r[2]]],.007,5,g.TRIM)}}B.stack.forEach((s,n)=>{let t=B.models[s[0]],l=B.G,a=M/2+s[2],d=B.z+s[4]+t.d*l*.85,i=s.base+.12*l,f=M/2+(n%3-1)*.5,y=B.z+2.3+n%4*.12;f0(e,[[a,i,d-.05],[a+.05,i-.02,d+.15],[a+.1,Math.max(.02,i*.4),d+.35],[a*.6+f*.4,.018,d+.6],[f,.018,y]],.012,6,g.CABLE)}),f0(e,m0.path,m0.r,16,g.CABLE);{let[s,n,t]=m0.socket;e.box(s,n-.07,t-.07,s+.018,n+.07,t+.07,g.STEEL),e.box(s+.018,n-.035,t-.032,s+.11,n+.035,t+.032,g.TRIM),e.box(s,n+.042,t+.035,s+.03,n+.058,t+.051,g.TUBE)}e.box(e0.x0-.08,e0.y-.07,j-.08,e0.x0-.02,e0.y+.07,j,g.TRIM),e.box(e0.x1+.02,e0.y-.07,j-.08,e0.x1+.08,e0.y+.07,j,g.TRIM),f0(e,[[e0.x0-.02,e0.y,e0.z],[(e0.x0+e0.x1)/2,e0.y,e0.z],[e0.x1+.02,e0.y,e0.z]],.045,10,g.TUBE);for(let s of[0,1]){let n=s?M-.06:0,t=s?M:.06;e.box(n,0,0,t,.24,j,g.TRIM),e.box(s?M-.05:0,1,0,s?M:.05,1.08,j,g.TRIM);let l=s?M-.32:0,a=s?M:.32;e.box(l,Y-.25,0,a,Y+.08,j,g.TRIM)}for(let s of[0,1]){let n=s?j-.06:0,t=s?j:.06;s?e.box(0,0,n,M,.24,t,g.TRIM):(e.box(0,0,n,M/2-l0.hw,.24,t,g.TRIM),e.box(M/2+l0.hw,0,n,M,.24,t,g.TRIM));let l=s?j-.32:0,a=s?j:.32;e.box(0,Y-.25,l,M,Y+.08,a,g.TRIM)}return e}function tt(){let e=7,p=()=>(e=e*16807%2147483647,(e-1)/2147483646),T=[],I=[],D=[],s=[],n=[],t=[],l=[],a=3,d=4,i=(h,x,b,w,q,m,L,k,F)=>{let Z=b0.w*q,t0=b0.h*q,J=T.length/3;for(let C=0;C<=d;C++)for(let W=0;W<=a;W++){let A=W/a,G=C/d,o0=(A-.5)*Z,r0=(G-.5)*t0,h0=k*((A-.5)*(A-.5)*4+(1-G)*(1-G)*.6);T.push(N[0]+h[0]+x[0]*o0+b[0]*r0+w[0]*h0,N[1]+h[1]+x[1]*o0+b[1]*r0+w[1]*h0,N[2]+h[2]+x[2]*o0+b[2]*r0+w[2]*h0),I.push(w[0],w[1],w[2]),D.push(A,G),s.push(m),l.push(F||0),n.push(L[0]+N[0],L[1]+N[1],L[2]+N[2],L[3])}for(let C=0;C<d;C++)for(let W=0;W<a;W++){let A=J+C*(a+1)+W,G=A+1,o0=A+a+1,r0=o0+1;t.push(A,G,r0,A,r0,o0)}},f=(h,x,b)=>{let w=Math.cos(b),q=Math.sin(b);return[h.map((m,L)=>m*w+x[L]*q),x.map((m,L)=>-h[L]*q+m*w)]},y=[0,0,0,0],_=0,u=(h,x,b,w,q,m,L,k,F)=>{let J=0;for(let C=m;C<L;C+=.48)for(let W=w;W<q;W+=.4){let A=W+(p()-.5)*.4*.7,G=C+(p()-.5)*.48*.6;if(p()>k(A,G))continue;let[o0,r0]=f(b,[0,1,0],(p()-.5)*.5),h0=h(A,G,.012+.0016*(J++%9)+p()*.004),c0=.88+p()*.3;i(h0,o0,r0,x,c0,Math.floor(p()*b0.n),y,(p()-.3)*.02),b0.spots.length<400&&b0.spots.push({c:h0,n:x,up:r0,size:b0.h*c0}),_++}},c=(h,x,b)=>Math.exp(-Math.pow((h-x)/b,2));for(let h=0;h<P.n-1;h++){let x=H[h+1],b=[[ee(h)+P.hw+.32,x-.66],[x+.66,ee(h+1)-P.hw-.32]];for(let[w,q]of b){let m=(L,k)=>.85*c(k,3.4,1.7);q>O.b[1]+.3&&u((L,k,F)=>[F,k,L],[1,0,0],[0,0,-1],w,q,1.45,6.3,m),u((L,k,F)=>[M-F,k,L],[-1,0,0],[0,0,1],w,q,1.45,6.3,m)}}let r=[];for(let h of O.lines){let x=h[3]-h[2]-.7;for(let b=.18;b<x-.1;b+=.3+p()*.14){let w=b/x,q=Ee(h,w);if(p()<.1||Math.abs(q[2]-O.bulb[2])<.4&&q[1]>2.3)continue;let m=.56+p()*.14,L=b0.h*m,k=(p()-.5)*.7,F=p()<.3?p()<.5?-.75:.75:k,[Z,t0]=f([0,0,-1],[0,1,0],F),J=[1,0,0],C=[q[0]+.004,q[1]-.02-t0[1]*L*.5,q[2]-t0[2]*L*.5];i(C,Z,t0,J,m,Math.floor(p()*b0.n),[q[0],q[1],q[2],-(.04+p()*.06)],.01+p()*.025,1),r.push(q),_++}}return{pos:T,nrm:I,uv:D,pic:s,piv:n,idx:t,sty:l,pegs:r,count:_}}var _0=`
	const float RW = ${v(M)}, RL = ${v(j)}, RH = ${v(Y)}, RT = ${v(Q0)};
	const float HW = ${v(P.hw)}, SILL = ${v(P.sill)}, SPRING = ${v(P.spring)};
	const float WZ0 = ${v(P.z0)}, WSTEP = ${v(P.step)};
	const vec3 RO = vec3(${v(N[0])}, ${v(N[1])}, ${v(N[2])});
	const vec3 LDIR_L = vec3(${v(p0[0])}, ${v(p0[1])}, ${v(p0[2])});
	const vec3 LDIR_R = vec3(${v(-p0[0])}, ${v(p0[1])}, ${v(p0[2])});

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
	#define STUDIO_SUN ${"vec3("+v(p0[0])+", "+v(p0[1])+", "+v(p0[2])+")"}
	#define STUDIO_SUN2 ${"vec3("+v(-p0[0])+", "+v(p0[1])+", "+v(p0[2])+")"}
	#define SHAFT_TINT vec3(0.6, 0.012, 0.008)
	#define STUDIO_AIR_EVEN
	${_0}
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
		vec3 d = vec3(${v(M/2)}, 1.35, ${v(B.z-.9)}) - lp;
		float dd = dot(d, d);
		float face = 0.35 + 0.65 * max(0.0, dot(N, normalize(d)));
		// (only in front of them: the stack's own back is in its shadow)
		float front = smoothstep(${v(B.z+.6)}, ${v(B.z-.2)}, lp.z);
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
		vec3 L0 = vec3(${v($.lens[0])}, ${v($.lens[1])}, ${v($.lens[2])});
		vec3 d = lp - L0;
		float s = (${v(j-.005)} - L0.z) / max(d.z, 1e-4);
		vec3 h = L0 + d * s;
		return vec3(1.0 - (h.x - ${v($.img.x-$.img.w/2)}) / ${v($.img.w)}, (h.y - ${v($.img.y-$.img.h/2)}) / ${v($.img.h)}, 1.0 / s);
	}
	// the televisions stand in the beam's way: their shadows on the picture
	uniform vec3 tvLo[12], tvHi[12];
	float projShadow(vec3 lp) {
		vec3 L0 = vec3(${v($.lens[0])}, ${v($.lens[1])}, ${v($.lens[2])});
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
		vec3 Ls = vec3(${v(M/2)}, 1.25, 1.6);
		vec3 d = lp - Ls;
		float t = (${v(-l0.depth)} - Ls.z) / d.z;
		vec3 h = Ls + d * t;
		float m = smoothstep(0.08, -0.05, abs(h.x - ${v(M/2)}) - ${v(l0.hw)}) * smoothstep(0.08, -0.05, h.y - ${v(l0.h)}) * step(0.0, h.y);
		float dd = dot(d, d);
		vec3 Ld = -normalize(d);
		vec3 c = vec3(1.0, 0.07, 0.05) * 26.0 * m * (0.15 + 0.85 * max(0.0, dot(N, Ld))) / (1.0 + dd * 0.55);
		vec3 sd = vec3(${v(v0.sign[0])}, ${v(v0.sign[1])}, ${v(v0.sign[2])}) - lp;
		c += vec3(1.0, 0.12, 0.1) * signK * 0.5 * (0.2 + 0.8 * max(0.0, dot(N, normalize(sd)))) / (0.05 + dot(sd, sd) * 3.0);
		return c;
	}
	// the candles on the table: a warm, breathing light close round them
	vec3 candleLight(vec3 lp, vec3 N) {
		vec3 sum = vec3(0.0);
		${Q.flames.map((e,p)=>`{
			vec3 d = vec3(${v(e[0])}, ${v(e[1])}, ${v(e[2])}) - lp;
			float r2 = dot(d, d);
			float fl = 0.82 + 0.1 * sin(time * (9.0 + ${v(p*1.7)}) + ${v(p*2.1)}) * sin(time * 3.3 + ${v(p)}) + 0.08 * sin(time * 23.0 + ${v(p*4)});
			sum += fl * (0.35 + 0.65 * max(0.0, dot(N, d * inversesqrt(r2 + 1e-4)))) / (r2 * 5.0 + 0.1);
		}`).join(`
`)}
		return vec3(1.0, 0.52, 0.22) * sum * 0.45;
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

`,Ne=`
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, yScale, mirrorOn, reflOn;
	uniform sampler2D reflTex;
	uniform vec2 reflSize;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${_0}

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
				if (k == 0 && lp.z > ${v(B.z-1.5)}) {
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
	${_0}
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
				vec3 Lp = normalize(vec3(${v($.lens[0])}, ${v($.lens[1])}, ${v($.lens[2])}) - lp);
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
	${_0}
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
	${_0}
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
	${_0}
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
	}`,pt=`
	precision highp float;
	uniform mat4 proj, view;
	uniform float time, pxScale;
	attribute vec4 seed;
	varying float v_b, v_w;
	${_0}
	void main() {
		vec3 lp = vec3(0.3 + seed.x * (RW - 0.6), 0.2 + seed.y * (RH - 0.5), 0.3 + seed.z * (RL - 0.6));
		float t = time * (0.03 + 0.03 * seed.w);
		lp += vec3(sin(t * 3.1 + seed.w * 40.0) * 0.35, sin(t * 1.7 + seed.x * 30.0) * 0.4 - t * 0.6, cos(t * 2.3 + seed.z * 50.0) * 0.35);
		lp.y = 0.2 + mod(lp.y - 0.2, RH - 0.5);
		vec3 c = redLightAir(lp);
		v_b = dot(c, vec3(0.6, 0.3, 0.1));
		// and in the projector's beam, lit warm
		vec3 L0 = vec3(${v($.lens[0])}, ${v($.lens[1])}, ${v($.lens[2])});
		vec3 dd = lp - L0;
		float s = (${v(j)} - L0.z) / max(dd.z, 1e-4);
		vec3 hh = L0 + dd * s;
		vec2 pu = vec2((hh.x - ${v($.img.x-$.img.w/2)}) / ${v($.img.w)}, (hh.y - ${v($.img.y-$.img.h/2)}) / ${v($.img.h)});
		v_w = (dd.z > 0.2 && pu.x > 0.0 && pu.x < 1.0 && pu.y > 0.0 && pu.y < 1.0) ? 1.6 : 0.0;
		vec4 v = view * vec4(lp + RO, 1.0);
		gl_Position = proj * v;
		float tw = 0.6 + 0.4 * sin(time * (1.0 + seed.w * 2.0) + seed.x * 80.0);
		v_b *= tw;
		gl_PointSize = clamp(pxScale * (0.012 + 0.012 * seed.w) / max(0.2, -v.z), 1.0, 6.0);
	}`,ht=`
	precision highp float;
	varying float v_b, v_w;
	void main() {
		vec2 d = gl_PointCoord - 0.5;
		float a = smoothstep(0.5, 0.0, length(d));
		gl_FragColor = vec4((vec3(1.0, 0.14, 0.09) * min(v_b, 1.4) + vec3(1.0, 0.8, 0.55) * v_w) * a * 0.55, 1.0);
	}`;he.exports=function(e){let p=et(),T={position:e.buffer(p.pos),normal:e.buffer(p.nrm),kind:e.buffer(p.kind),uv:e.buffer(p.uv)},I=e.elements({data:p.idx.length>65535?new Uint32Array(p.idx):new Uint16Array(p.idx),type:p.idx.length>65535?"uint32":"uint16"}),D=e.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),s=e.framebuffer({color:D,depth:!0}),n=e({framebuffer:s}),t=e.texture({width:1,height:1,data:[0,0,0,255]}),l=e({}),a=t,d=0,i=0,f=!1,y=[4,4],_=[0,0,0,0],u=null,c=e.texture({width:1,height:1,data:[0,0,0,255]}),r=1,h=o=>{let z=U=>{let K=Math.sin(U*127.1)*43758.5453;return K-Math.floor(K)},S=Math.floor(o*9),R=z(S),E=z(Math.floor(o*.7)),V=.92+.08*Math.sin(o*120);return E>.55&&R>.6&&(V=R>.85?.08:.45),V},x={signK:()=>r,memTex:()=>u||c,projT:o=>typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:o.time};B.stack.forEach((o,z)=>{let S=B.models[o[0]],R=B.G;x["tvLo["+z+"]"]=[M/2+o[2]-S.w*R/2,o.base,B.z+o[4]-.02],x["tvHi["+z+"]"]=[M/2+o[2]+S.w*R/2,o.base+S.h*R,B.z+o[4]+S.d*R]});let b=e({vert:ke,frag:Ne,attributes:T,elements:I,cull:{enable:!1},uniforms:{reflTex:()=>a,reflSize:()=>y,reflOn:()=>d,tvLight:()=>_,...x}}),w=o=>new Promise((z,S)=>{let R=new Image,E=V=>(V&V-1)===0;R.onload=()=>z(e.texture({data:R,min:E(R.width)&&E(R.height)?"mipmap":"linear",mag:"linear",wrap:"clamp"})),R.onerror=S,R.src=o}),q=B.stack.map((o,z)=>{let[S,,R,E,V]=o,U=Math.PI+E*Math.PI/180,K=B.G,i0=Math.cos(U)*K,d0=Math.sin(U)*K,x0=N[0]+M/2+R,w0=N[1]+o.base,G0=N[2]+B.z+V;return{name:S,seed:(z+1)*.6180339%1,model:[i0,0,-d0,0,0,K,0,0,d0,0,i0,0,x0,w0,G0,1]}}),m={},L=null,F=e({vert:st,frag:nt,attributes:{position:{buffer:e.prop("vb"),stride:36,offset:0},normal:{buffer:e.prop("vb"),stride:36,offset:12},uv:{buffer:e.prop("vb"),stride:36,offset:24},flag:{buffer:e.prop("vb"),stride:36,offset:32}},elements:e.prop("el"),offset:e.prop("offset"),count:e.prop("count"),cull:{enable:!1},uniforms:{model:e.prop("model"),seed:e.prop("seed"),dark:e.prop("dark"),emit:(o,z)=>z.emit||0,bodyTex:e.prop("tex"),...x,memTex:()=>L||c,nMem:36,sigTime:o=>typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:o.time,tvLight:()=>_}});w("res/redroom/memories.webp").then(o=>{L=o,u=o}).catch(o=>console.error("The memories did not load",o));for(let o in B.models){let z=B.models[o],S=[];for(let R=0;R<z.tex;R++)S.push(w("res/redroom/tv_"+o+"_"+R+".webp"));Promise.all([fetch(z.file).then(R=>R.arrayBuffer()),...S]).then(([R,...E])=>{let V=new Uint32Array(R,0,4),U=V[0],K=V[1],i0=V[2],d0=V[3],x0=new Int32Array(R,16,i0*3),w0=16+i0*12,G0=e.buffer(new Float32Array(R,w0,U*9)),$0=w0+U*36,re=d0?new Uint32Array(R.slice($0,$0+K*4)):new Uint16Array(R.slice($0,$0+K*2)),J0=e.elements({data:re,type:d0?"uint32":"uint16"}),g0=[];for(let E0=0;E0<i0;E0++)g0.push({offset:x0[E0*3],count:x0[E0*3+1],tex:x0[E0*3+2]>=0?E[x0[E0*3+2]]:E[0]});m[o]={vb:G0,el:J0,parts:g0,dark:z.dark}}).catch(R=>console.error("A television did not load",R))}let Z=[],t0=()=>{if(L){Z.length=0;for(let o of q){let z=m[o.name];if(z)for(let S of z.parts)Z.push({vb:z.vb,el:z.el,offset:S.offset,count:S.count,tex:S.tex,model:o.model,seed:o.seed,dark:z.dark})}Z.length&&F(Z)}},J=tt(),C=null;w("res/redroom/polaroids.webp").then(o=>{C=o}).catch(o=>console.error("The photographs did not load",o));let W=e({vert:at,frag:rt,attributes:{position:J.pos,normal:J.nrm,uv:J.uv,pic:J.pic,style:J.sty,pivot:{buffer:e.buffer(J.piv),size:4}},elements:e.elements({data:new Uint16Array(J.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...x,polTex:()=>C,tvLight:()=>_}}),A=(o,z)=>Promise.all([fetch(o).then(S=>S.arrayBuffer()),...z.map(w)]).then(([S,...R])=>{let E=new Uint32Array(S,0,4),V=E[0],U=E[1],K=E[2],i0=E[3],d0=new Int32Array(S,16,K*3),x0=16+K*12,w0=x0+V*36,G0=e.buffer(new Float32Array(S,x0,V*9)),$0=i0?new Uint32Array(S.slice(w0,w0+U*4)):new Uint16Array(S.slice(w0,w0+U*2)),re=e.elements({data:$0,type:i0?"uint32":"uint16"}),J0=[];for(let g0=0;g0<K;g0++)J0.push({offset:d0[g0*3],count:d0[g0*3+1],tex:R[Math.max(0,d0[g0*3+2])],mat:d0[g0*3+2]});return{vb:G0,el:re,parts:J0}}),G=(o,z)=>{let S=new Array(16);for(let R=0;R<4;R++)for(let E=0;E<4;E++)S[R*4+E]=o[E]*z[R*4]+o[4+E]*z[R*4+1]+o[8+E]*z[R*4+2]+o[12+E]*z[R*4+3];return S},o0=(o,z,S)=>[1,0,0,0,0,1,0,0,0,0,1,0,o,z,S,1],r0=o=>{let z=Math.cos(o),S=Math.sin(o);return[1,0,0,0,0,z,S,0,0,-S,z,0,0,0,0,1]},h0=G(o0(N[0]+$.x,N[1]+$.table,N[2]+$.z),r0(-$.pitch)),c0=$.tableK,F0=[c0,0,0,0,0,c0,0,0,0,0,c0,0,N[0]+M/2,N[1],N[2]+15,1],X={},D0=["res/redroom/proj_0.webp"];A("res/redroom/proj_body.bin",D0).then(o=>{X.body=o}).catch(o=>console.error(o)),A("res/redroom/proj_feed.bin",D0).then(o=>{X.feed=o}).catch(o=>console.error(o)),A("res/redroom/proj_takeup.bin",D0).then(o=>{X.takeup=o}).catch(o=>console.error(o)),A("res/redroom/table_all.bin",["res/redroom/table_0.webp"]).then(o=>{X.table=o}).catch(o=>console.error(o));let U0=(o,z)=>G(h0,G(o0(o[0],o[1],o[2]),G(r0(z),o0(-o[0],-o[1],-o[2])))),k0=[],s0=o=>{k0.length=0;let z=(S,R,E)=>{if(S)for(let V of S.parts)k0.push({vb:S.vb,el:S.el,offset:V.offset,count:V.count,tex:V.tex,model:R,seed:0,dark:E})};z(X.table,F0,.9),z(X.body,h0,1),z(X.feed,U0($.feed,-o*2.6),1),z(X.takeup,U0($.takeup,-o*3.5),1),k0.length&&F(k0)},se=[],xe=[];{let o=[N[0]+$.lens[0],N[1]+$.lens[1],N[2]+$.lens[2]];[.96,.86,.76,.66,.56,.46,.36].forEach((z,S)=>{let R=$.img.w/2*z,E=$.img.h/2*z,V=[[-R,-E],[R,-E],[R,E],[-R,E]].map(([U,K])=>[N[0]+$.img.x+U,N[1]+$.img.y+K,N[2]+j-.02]);for(let U=0;U<4;U++){let K=V[U],i0=V[(U+1)%4];se.push(...o,...K,...i0),xe.push(S,S,S)}})}let je=e({vert:it,frag:lt,attributes:{position:se,layer:xe},count:se.length/3,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{...x,tvLight:()=>_}}),Ge=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale, pxScale; attribute vec3 position; void main() { vec3 p = position; p.y *= yScale; vec4 v = view * vec4(p, 1.0); gl_Position = proj * v; gl_PointSize = clamp(pxScale * 0.22 / max(0.3, -v.z), 4.0, 220.0); }",frag:"precision highp float; uniform float time; void main() { vec2 d = gl_PointCoord - 0.5; float r = length(d); float a = exp(-r * r * 160.0) * 1.6 + 0.35 * exp(-r * r * 30.0) + 0.12 * exp(-r * r * 8.0) + 0.5 * exp(-d.y * d.y * 2500.0) * exp(-abs(d.x) * 7.0); gl_FragColor = vec4(vec3(1.0, 0.84, 0.62) * a * (0.9 + 0.1 * sin(time * 37.0)), 1.0); }",attributes:{position:[N[0]+$.lens[0],N[1]+$.lens[1],N[2]+$.lens[2]+.01]},count:1,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),we=null;w("res/redroom/print.webp").then(o=>{we=o}).catch(o=>console.error(o));let ne=[],ge=[];O.trays.forEach((o,z)=>{let S=O.TX/2-.009,R=O.TZ/2-.009,E=O.TXc,V=O.liquid,U=[[E-S,o-R],[E+S,o-R],[E+S,o+R],[E-S,o+R]].map(([K,i0])=>[N[0]+K,N[1]+V,N[2]+i0]);ne.push(...U[0],...U[2],...U[1],...U[0],...U[3],...U[2]);for(let K=0;K<6;K++)ge.push(z)});let We=e({vert:ct,frag:ft,attributes:{position:ne,tray:ge},count:ne.length/3,cull:{enable:!1},uniforms:{...x,tvLight:()=>_,printTex:()=>we||c,polTex:()=>C||c}}),N0=$e();for(let o of J.pegs)N0.box(o[0]-.008,o[1]-.045,o[2]-.011,o[0]+.008,o[1]+.03,o[2]+.011,g.PEG);let Ve=e({vert:ke,frag:Ne,attributes:{position:N0.pos,normal:N0.nrm,kind:N0.kind,uv:N0.uv},elements:e.elements({data:new Uint16Array(N0.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...x,reflTex:()=>t,reflSize:[4,4],reflOn:0,tvLight:()=>_}}),He=o=>{let z=Math.cos(o),S=Math.sin(o);return[z,0,-S,0,0,1,0,0,S,0,z,0,0,0,0,1]},n0=(o,z,S,R)=>G(o0(N[0]+o,N[1]+z,N[2]+S),He(R||0));A("res/redroom/plastic_all.bin",["res/redroom/plastic_0.webp"]).then(o=>{X.jug=o}).catch(o=>console.error(o)),A("res/redroom/multi_cleaner_all.bin",["res/redroom/multi_cleaner_0.webp"]).then(o=>{X.can=o}).catch(o=>console.error(o)),A("res/redroom/pull_all.bin",["res/redroom/pull_0.webp"]).then(o=>{X.socket=o}).catch(o=>console.error(o)),A("res/redroom/bulb_all.bin",["res/redroom/bulb_0.webp","res/redroom/bulb_1.webp"]).then(o=>{X.bulb=o}).catch(o=>console.error(o));let L0=O.top,O0=O.b[0],Fe=[["jug",n0(.16,L0,O0+.3,.4)],["jug",n0(.17,L0,O0+.52,-.3)],["jug",n0(.36,L0,O0+.4,2.2)],["can",n0(.14,L0,O0+.95,1.57)],["can",n0(.15,L0,O0+1.3,1.45)],["jug",n0(.16,L0,O.b[1]-.35,.9)],["can",n0(.2,L0,O.b[1]-.8,1.7)],["socket",n0(O.bulb[0],O.bulb[1]+.065,O.bulb[2],0)],["bulb",G(n0(O.bulb[0],O.bulb[1]+.048,O.bulb[2],0),r0(Math.PI))]],R0=(o,z)=>[o,0,0,0,0,z===void 0?o:z,0,0,0,0,o,0,0,0,0,1];A("res/redroom/wtable_all.bin",["res/redroom/wtable_0.webp"]).then(o=>{X.wtable=o}).catch(o=>console.error(o)),A("res/redroom/wchair_all.bin",["res/redroom/wchair_0.webp"]).then(o=>{X.wchair=o}).catch(o=>console.error(o)),A("res/redroom/cstick_holder.bin",["res/redroom/cstick_0.webp"]).then(o=>{X.holder=o}).catch(o=>console.error(o)),A("res/redroom/cstick_candle.bin",["res/redroom/cstick_0.webp"]).then(o=>{X.candle=o}).catch(o=>console.error(o)),A("res/redroom/rose_all.bin",["res/redroom/rose_0.webp"]).then(o=>{X.rose=o}).catch(o=>console.error(o)),A("res/redroom/camera_all.bin",[0,1,2,3].map(o=>"res/redroom/camera_"+o+".webp")).then(o=>{X.camera=o}).catch(o=>console.error(o));let A0=Q.k,C0=Q.z,B0=Math.PI/2,j0=[["wtable",G(n0(Q.x,0,C0,B0),R0(A0)),1.7],["wchair",G(n0(Q.x-Q.depth/2-.36,0,C0-.42,B0+.05),R0(A0)),1.6],["wchair",G(n0(Q.x-Q.depth/2-.42,0,C0+.45,B0-.12),R0(A0)),1.6],["wchair",G(n0(Q.x+.02,0,C0-Q.half-.36,.06),R0(A0)),1.6],["wchair",G(n0(Q.x-.05,0,C0+Q.half+.4,Math.PI-.1),R0(A0)),.95]];for(let[o,z,S]of Q.candles)j0.push(["holder",n0(o,Q.top,z,S*3),.9]),j0.push(["candle",G(n0(o,Q.top,z,S*3),G(o0(0,.156,0),G(R0(1,S),o0(0,-.156,0)))),1.15]);{let o=7,z=()=>(o=o*16807%2147483647,(o-1)/2147483646),S=Q.vase;for(let R=0;R<9;R++){let E=R*2.39996+z()*.4,V=R===0?.04:.16+z()*.2,U=.66+z()*.12,K=S.h+.25*U-.1-(R===0?-.04:z()*.05),i0=G(G(n0(S.x,Q.top+.02,S.z,E),r0(V)),G(o0(0,K-.02,0),G(r0(Math.PI/2),G(R0(U),o0(0,-.13,0)))));j0.push(["rose",i0,2])}}j0.push(["camera",n0(.15,O.shelf.y,(O.shelf.z0+O.shelf.z1)/2,B0-.4),1.7]);let Ue=()=>{let o=[];for(let[z,S]of Fe){let R=X[z];R&&R.parts.forEach((E,V)=>o.push({vb:R.vb,el:R.el,offset:E.offset,count:E.count,tex:E.tex,model:S,seed:0,dark:z==="jug"||z==="can"?.85:.7,emit:z==="bulb"&&E.mat===0?1.6:0}))}for(let[z,S,R]of j0){let E=X[z];if(E)for(let V of E.parts)o.push({vb:E.vb,el:E.el,offset:V.offset,count:V.count,tex:V.tex,model:S,seed:0,dark:R,emit:0})}o.length&&F(o),Be(),We(),Ve()},Be=e({vert:`
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
			}`,attributes:{fp:[].concat(...Q.flames.map((o,z)=>[N[0]+o[0],N[1]+o[1],N[2]+o[2],z*1.37]))},count:Q.flames.length,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),K0=document.createElement("canvas");K0.width=512,K0.height=192;{let o=K0.getContext("2d");o.fillStyle="#000",o.fillRect(0,0,512,192),o.font='bold 128px "Helvetica Neue", Arial, sans-serif',o.textAlign="center",o.textBaseline="middle",o.shadowColor="#ff2a20",o.shadowBlur=28,o.fillStyle="#ff6a5a",o.fillText("ENTER",256,100),o.shadowBlur=0,o.fillStyle="#ffd8d0",o.fillText("ENTER",256,100)}let Ke=e.texture({data:K0,min:"linear",mag:"linear",wrap:"clamp"}),u0=v0.sign,X0=.3,Y0=.1125,Z0=u0[2]-.025,Xe=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale; attribute vec3 position; attribute vec2 uv; varying vec2 v_uv; void main() { v_uv = uv; vec3 p = position; p.y *= yScale; gl_Position = proj * view * vec4(p, 1.0); }",frag:"precision highp float; uniform sampler2D tex; uniform float signK; varying vec2 v_uv; void main() { vec3 c = texture2D(tex, v_uv).rgb; vec3 col = c * vec3(1.6, 0.55, 0.5) * signK + vec3(0.06, 0.0, 0.0); gl_FragColor = vec4(col, 1.0); }",attributes:{position:[[u0[0]+X0,u0[1]-Y0,Z0],[u0[0]-X0,u0[1]-Y0,Z0],[u0[0]-X0,u0[1]+Y0,Z0],[u0[0]+X0,u0[1]+Y0,Z0]].map(o=>[o[0]+N[0],o[1]+N[1],o[2]+N[2]]),uv:[[0,1],[1,1],[1,0],[0,0]]},elements:[0,1,2,0,2,3],cull:{enable:!1},uniforms:{tex:Ke,signK:()=>r}}),ye=220,be=[];for(let o=0;o<ye;o++)be.push(Math.random(),Math.random(),Math.random(),Math.random());let Ye=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b;
			void main() {
				vec3 L0 = vec3(${v(N[0]+$.lens[0])}, ${v(N[1]+$.lens[1])}, ${v(N[2]+$.lens[2])});
				vec3 C = vec3(${v(N[0]+$.img.x)}, ${v(N[1]+$.img.y)}, ${v(N[2]+j)});
				vec3 fw = normalize(C - L0);
				vec3 rt = normalize(cross(fw, vec3(0.0, 1.0, 0.0)));
				vec3 up = cross(rt, fw);
				// most of them close to the lens
				float along = 0.15 + pow(seed.x, 2.2) * 7.5;
				float sp = along / length(C - L0);
				vec2 off = (vec2(seed.y, seed.z) - 0.5) * vec2(${v($.img.w)}, ${v($.img.h)}) * sp;
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
				vec3 L0 = vec3(${v(N[0]+$.lens[0])}, ${v(N[1]+$.lens[1])}, ${v(N[2]+$.lens[2])});
				vec3 C = vec3(${v(N[0]+$.img.x)}, ${v(N[1]+$.img.y)}, ${v(N[2]+j)});
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
				float rc = 0.04 + al * ${v($.img.h*.5)} / length(C - L0);
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
			${_0}
			void main() {
				vec2 d = gl_PointCoord - 0.5;
				float g = exp(-dot(d, d) * 9.0);
				float n = rnoise(gl_PointCoord * 3.2 + v_s + time * 0.05) * 0.7 + rnoise(gl_PointCoord * 7.0 - v_s) * 0.3;
				float a = g * smoothstep(0.2, 0.8, n) * v_a * 0.15;
				gl_FragColor = vec4(mix(vec3(0.5, 0.06, 0.04), vec3(1.0, 0.86, 0.68), clamp(v_b - 0.12, 0.0, 1.0)) * v_b * a, 1.0);
			}`,attributes:{seed:_e},count:ae,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),ze=2200,Le=[];for(let o=0;o<ze;o++)Le.push(Math.random(),Math.random(),Math.random(),Math.random());let Je=e({vert:pt,frag:ht,attributes:{seed:Le},count:ze,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),Re=o=>{let z=!!(o&&o.reflected),S=performance.now()/1e3,R=.8+.12*Math.sin(S*47)*Math.sin(S*3.1)+.08*Math.sin(S*23+1.3);_[0]=.8*R,_[1]=.84*R,_[2]=.95*R,r=h(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:S),b(),Xe(),t0(),C&&W(),Ue(),s0(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:S),u&&!(typeof window!="undefined"&&window.__noBeam)&&je(),Ge(),!z&&!(typeof window!="undefined"&&window.__noSmoke)&&Ze(),z||Ye(),z||Je()};return Re.reflect=(o,z)=>l(S=>{let R=S.viewportWidth,E=S.viewportHeight,V=Math.max(2,Math.round(R/2)),U=Math.max(2,Math.round(E/2)),K=!f;if((s.width!==V||s.height!==U)&&(s.resize(V,U),K=!0),y[0]=R,y[1]=E,d=1,!K&&++i%z!==0){a=D;return}a=t,n(()=>{e.clear({color:[0,0,0,1],depth:1}),o()}),a=D,f=!0}),Re};var pe=null;Object.assign(he.exports,{O:N,W:M,L:j,H:Y,ROOM:{W:M,L:j,H:Y,WIN:P,DOOR:l0,ENT:v0,SHAFTS:H,TV:B,DARK:O,PROJ:$,CABLE:m0,POL:b0,TBL:Q,winZ:ee,vaultY:M0},POST:{threshold:.3},sunGLSL:ot,bakedSun(e){return pe||(pe=e.texture({width:1,height:1,data:[0,0,0,0]})),pe},ready:()=>!0,setFlower(){},setGuide(){},setWind(){}})});var Ce=ie((yt,Ae)=>{"use strict";var oe=ve(),{O:de}=oe,{W:a0,L:me,TV:P0,DARK:q0,PROJ:I0,TBL:S0}=oe.ROOM,Pe=e=>[e[0]+de[0],e[1]+de[1],e[2]+de[2]],De=(e,p,T)=>e+(p-e)*T,vt=e=>Math.max(0,Math.min(1,e)),z0=I0.x,dt=I0.table,H0=I0.z,V0=[z0+I0.feed[0],dt+I0.feed[1],H0+I0.feed[2]],te=I0.lens,ue=q0.trays[0],mt=[{eye:[a0/2+.15,1.55,-9.6],at:[a0/2,1.7,0],fov:40,dof:.05,p:{fov:58}},{eye:[a0/2+.05,1.6,-3],at:[a0/2,1.85,1.5],fov:50,dof:.05,p:{fov:70}},{eye:[a0/2-.2,1.5,.9],at:[a0/2-3,1.4,7],fov:56,dof:.04,p:{fov:74}},{eye:[a0-4.4,1.55,1.2],at:[a0-.7,1.05,S0.z+.2],fov:46,dof:.06,p:{eye:[a0-4.8,1.6,.9],fov:68}},{eye:[S0.x-1.4,S0.top+.48,S0.z-.7],at:[S0.x+.05,S0.top+.26,S0.z+0],fov:40,dof:.32,p:{fov:50}},{eye:[3.3,1.55,1.3],at:[.3,1.35,5.2],fov:50,dof:.05,p:{eye:[2.8,1.6,.9],fov:72}},{eye:[1.05,1.5,ue-.42],at:[q0.TXc-.02,q0.liquid,ue+.04],fov:34,dof:.2,p:{eye:[1,1.55,ue-.45],fov:52}},{eye:[.62,1.68,(q0.shelf.z0+q0.shelf.z1)/2-.36],at:[.14,1.55,(q0.shelf.z0+q0.shelf.z1)/2],fov:34,dof:.34,p:{fov:48}},{eye:[2,1.6,8.3],at:[.4,2.25,11.3],fov:50,dof:.12,p:{eye:[1.8,1.6,8.1],fov:72}}];function Oe(e,p){let T=e.length-1,I=Math.max(0,Math.min(T,p)),D=Math.min(T-1,Math.floor(I)),s=I-D,n=e[Math.max(0,D-1)],t=e[D],l=e[D+1],a=e[Math.min(T,D+2)],d=s*s,i=d*s;return[0,1,2].map(f=>.5*(2*t[f]+(-n[f]+l[f])*s+(2*n[f]-5*t[f]+4*l[f]-a[f])*d+(-n[f]+3*t[f]-3*l[f]+a[f])*i))}function ut(){let e=mt.slice(),p=oe.ROOM.CABLE,T=p.path,I=p.socket[2],D=p.socket[0];e.push({eye:[D+1.05,.42,I-.45],at:[D,.27,I+.08],fov:42,dof:.32,p:{eye:[D+1.3,.48,I-.55],fov:58}});let[s,n]=p.run;for(let c of[.04,.22,.42,.62,.82]){let r=Math.round(s+(n-s)*c),h=T[Math.max(0,r-6)],x=T[Math.min(T.length-1,r+6)],b=T[r],w=x[0]-h[0],q=x[2]-h[2],m=Math.hypot(w,q)||1;w/=m,q/=m,e.push({eye:[b[0]-w*.8-q*.12,.3,b[2]-q*.8+w*.12],at:[b[0]+w*1.5,.06,b[2]+q*1.5],fov:44,dof:.24,pass:!0,p:{fov:60}})}e.push({eye:[a0-3,.45,I-1.6],at:[a0-.3,1.9,I+.9],fov:50,dof:.1,p:{fov:70}});let t=(c,r,h)=>[c[0]+r[0]*h,c[1]+r[1]*h,c[2]+r[2]*h],l=11,a=()=>(l=l*16807%2147483647,(l-1)/2147483646),d=(oe.ROOM.POL.spots||[]).filter(c=>c.n[0]<-.5&&c.c[2]>10.5&&c.c[2]<21.5&&c.c[1]>1.9&&c.c[1]<4.6),i=(c,r)=>Math.abs(c.c[2]-r)+Math.abs(c.c[1]-3)*.4,f=[];for(let c of[12.6,15,17.3]){let r=null;for(let h of d)(!r||i(h,c)<i(r,c))&&(r=h);r&&f.indexOf(r)<0&&f.push(r)}f.forEach((c,r)=>{let h=c.n,x=c.c;r>0&&e.push({eye:t(t(x,h,2.2),[0,.15,-.6],1),at:x,fov:50,dof:.05,pass:!0}),e.push({eye:t(t(x,h,1),[0,.06,-.3],1),at:x,fov:36,dof:.26,p:{fov:50}})}),e.push({eye:[z0+2,1.35,H0-1.5],at:[z0,1.35,H0+.1],fov:42,dof:.12,p:{eye:[z0+1.6,1.4,H0-1.5],fov:62}}),e.push({eye:[z0+.85,V0[1]+.12,V0[2]-.35],at:[V0[0],V0[1]-.05,V0[2]],fov:36,dof:.32,p:{fov:52}}),e.push({eye:[z0+.42,te[1]+.08,te[2]+1.35],at:[z0,te[1],te[2]],fov:36,dof:.35,p:{fov:52}}),e.push({eye:[z0-.55,1.75,H0-1.4],at:[a0/2,5,me],fov:50,dof:.06,p:{fov:70}});let y=P0.stack;e.push({eye:[a0/2+1.4,1.2,P0.z-4.9],at:[a0/2,1.75,P0.z],fov:50,dof:.05,p:{fov:70}});let _=y.map((c,r)=>r);for(let c=_.length-1;c>0;c--){let r=Math.floor(a()*(c+1)),h=_[c];_[c]=_[r],_[r]=h}let u=null;for(let c of _){let r=y[c],h=r.screen,x=r.facing,b=r.size*1.25;if(u){let q=[(u[0]+h[0])/2,(u[1]+h[1])/2+.2,Math.min(u[2],h[2])-2.6];e.push({eye:q,at:[(u[0]+h[0])/2,(u[1]+h[1])/2,P0.z],fov:46,dof:.05,pass:!0})}let w=(a()-.5)*.5;e.push({eye:[h[0]+x[0]*b+w,h[1]+.05+(a()-.5)*.15,h[2]+x[2]*b],at:[h[0],h[1],h[2]],fov:30,dof:.3,p:{fov:44}}),u=h}return e.push({eye:[a0/2,2.6,P0.z-3.5],at:[a0/2,4.5,me],fov:52,dof:.05,pass:!0}),e.push({eye:[a0/2,4.3,P0.z+1.6],at:[a0/2,6,me],fov:62,dof:.04,p:{fov:82}}),e}Ae.exports=function(){let p=ut(),T=p.length-1,I=p.map((m,L)=>m.pass?-1:L).filter(m=>m>=0),D=(m,L)=>{if(L>=0){for(let k of I)if(k>=m-.06)return k;return I[I.length-1]}for(let k=I.length-1;k>=0;k--)if(I[k]<=m+.06)return I[k];return I[0]},s=(m,L)=>{if(L>0){for(let k of I)if(k>m+.01)return k;return I[I.length-1]}for(let k=I.length-1;k>=0;k--)if(I[k]<m-.01)return I[k];return I[0]},n=null,t=null,l=0,a=0,d=null,i=-10,f=0,y=null,_=1,u=-10,c=[],r=(m,L,k)=>{window.addEventListener(m,L,k),c.push([m,L,k])},h=m=>{let L=Math.sign(m);L&&(L!==_&&f-u<.25&&Math.abs(m)<.02||(L!==_&&(_=L),u=f,a=Math.max(0,Math.min(T,a+m)),i=f))},x=m=>{_=m>0?1:-1,a=s(a,m),i=f-10};r("wheel",m=>{if(m.target.closest&&m.target.closest(".st-ui"))return;m.preventDefault();let L=m.deltaMode===1?m.deltaY*16:m.deltaMode===2?m.deltaY*window.innerHeight:m.deltaY;h(Math.max(-.6,Math.min(.6,L/700)))},{passive:!1});let b=null;r("pointerdown",m=>{m.target.closest&&m.target.closest("button, a, .st-ui")||(b={lx:m.clientX,ly:m.clientY,moved:0,t:performance.now()})}),r("pointermove",m=>{if(!b)return;let L=m.clientX-b.lx,k=m.clientY-b.ly;b.lx=m.clientX,b.ly=m.clientY;let F=Math.abs(k)>=Math.abs(L)?-k:-L;b.moved+=Math.abs(F),b.moved>6&&h(F/(window.innerHeight*.55))}),r("pointerup",()=>{let m=b;b=null,m&&m.moved<8&&performance.now()-m.t<450&&x(1)}),r("keydown",m=>{m.key==="ArrowDown"||m.key==="ArrowRight"||m.key==="PageDown"||m.key===" "?x(1):(m.key==="ArrowUp"||m.key==="ArrowLeft"||m.key==="PageUp")&&x(-1)});function w(m){f=m,y===null&&(y=m);let L=d===null?0:Math.min(.1,m-d);d=m,typeof window!="undefined"&&window.__redShot!==void 0&&/tourdebug/.test(location.search)&&(l=a=window.__redShot),f-i>.35&&(a+=(D(a,_)-a)*(1-Math.exp(-L*2))),l+=(a-l)*(1-Math.exp(-L*1.7)),Math.abs(a-l)<1e-4&&(l=a);let k=window.innerWidth<window.innerHeight,F=p.map(s0=>k&&s0.p?Object.assign({},s0,s0.p):s0),Z=Math.min(T-1,Math.floor(l)),t0=l-Z,J=t0*t0*(3-2*t0),C=Oe(F.map(s0=>s0.eye),l),W=Oe(F.map(s0=>s0.at),l);(!n||L===0||L>.09)&&(n=C.slice(),t=W.slice());let A=1-Math.exp(-L*5);for(let s0=0;s0<3;s0++)n[s0]+=(C[s0]-n[s0])*A,t[s0]+=(W[s0]-t[s0])*A;C=n.slice(),W=t.slice();let G=F[Z],o0=F[Math.min(T,Z+1)],r0=De(G.fov,o0.fov,J),h0=De(G.dof,o0.dof,J),c0=typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:m,F0=Math.hypot(W[0]-C[0],W[1]-C[1],W[2]-C[2]),X=.01+.03*Math.min(1,F0/6);C=[C[0]+Math.sin(c0*.31)*X,C[1]+Math.sin(c0*.43+1)*X*.6,C[2]+Math.cos(c0*.27)*X],W=[W[0]+Math.sin(c0*.21+2)*X*.8,W[1]+Math.sin(c0*.37)*X*.5,W[2]];let D0=Pe(C),U0=Pe(W),k0=1-vt((m-y-.3)/1.8);return{eye:D0,target:U0,fov:r0,roll:Math.sin(c0*.17)*.004,moving:!0,look:{letterbox:.45,focus:F0,aperture:h0,vignette:.3,exposure:1.45,shafts:1,fade:k0,fadeColor:[0,0,0]}}}function q(){for(let[m,L,k]of c)window.removeEventListener(m,L,k);c.length=0}return{update:w,tap:()=>x(1),dispose:q,placeFlower(){},get scroll(){return l},END:T}}});window.__redRoom={studio:ve(),tour:Ce()};})();

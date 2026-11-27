"use strict";(()=>{var Se=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Qe=Se((Ut,Ze)=>{"use strict";var C0=[-90,0,0],qe=16,ke=27.5,Ie=11.6;Ze.exports={O:C0,W:qe,L:ke,RIDGE:Ie,BOX:[C0[0]-.8,0,C0[2]-11.5,C0[0]+qe+.8,Ie+.5,C0[2]+ke+.8],AIR_BOX:[C0[0],0,C0[2],C0[0]+qe,Ie,C0[2]+ke]}});var Ae=Se((Kt,$e)=>{"use strict";var{O:I,W:T,L:H}=Qe(),f=e=>(+e).toFixed(4),i0=10.5,we=.7,Je=3,P={hw:1.25,sill:1.35,spring:6.9,n:4,step:6.35};P.z0=H/2-P.step*(P.n-1)/2;P.apex=P.spring+P.hw*Math.sqrt(3);var be=e=>P.z0+P.step*e;P.leftFrom=2;var Z=(()=>{let r=P.z0,u={k:1.42,z:r,top:.543*1.42,half:.601*1.42,depth:.706*1.42};return u.x=T-.12-u.depth/2,u.candles=[[T-.4,r-.52,1],[T-.3,r-.3,.62],[T-.36,r+.42,.38],[T-.86,r-.06,.55],[T-.24,r+.66,.85],[T-.8,r+.42,.3]],u.vase={x:T-.55,z:r+.06,h:.24},u.flames=u.candles.map(([y,q,n])=>[y,u.top+.156+.144*n+.018,q]),u.laid=[[T-.66,r-.22,Math.PI/2+.5],[T-.62,r-.36,Math.PI/2+.15],[T-.7,r+.26,Math.PI/2-.6]],u.stack=[T-.88,r-.5],u.occ=[[T-.55,u.top+.46,r+.06,.15],[T-.55,u.top+.26,r+.06,.06],[T-.55,u.top+.11,r+.06,.08],...u.laid.map(([y,q,n])=>[y-Math.sin(n)*.15,u.top+.05,q-Math.cos(n)*.15,.065])],u})(),Lt="LEAVEHERBE",re={k:0},V0={s:0,n:0,glitch:0,freeze:!1,frozenAt:null},st={eye:null},Mt=()=>{let e=st.eye;return e?(e[0]-I[0]-l0.x)*Math.sin(l0.yaw)+(e[2]-I[2]-l0.z)*Math.cos(l0.yaw)>-.25:!1};P.lowSill=Z.top+.06;var l0={x:T/2-1.7,z:17.55,k:1.3};l0.yaw=Math.atan2(T/2-l0.x,21.2-l0.z);{let e=Math.sin(l0.yaw),r=Math.cos(l0.yaw),u=(y,q,n)=>[l0.x+e*y,q,l0.z+r*y,n];l0.occ=[u(0,1.17,.13),u(-.02,.86,.22),u(.1,.42,.36),u(-.3,.62,.17)]}var o0=(()=>{let e=Math.sin(l0.yaw),r=Math.cos(l0.yaw),u=[l0.x-e*1.4,8.4,l0.z-r*1.4],y=[l0.x+e*.25,.55,l0.z+r*.25],q=[y[0]-u[0],y[1]-u[1],y[2]-u[2]],n=Math.hypot(...q);return{pos:u,axis:q.map(s=>s/n),inner:.115,outer:.17,reach:n}})(),F=[];for(let e=0;e<=P.n;e++)F.push(P.z0+P.step*(e-.5));var x0={hw:.75,h:2.6,depth:.7},I0={hw:1.8,h:3.6,z:-11,sign:[T/2,x0.h+.32,-x0.depth-.05],open:2.2},B={z:21.2,G:2.4,models:{sony:{file:"res/redroom/tv_sony.bin",tex:3,w:.36,h:.341,d:.455,dark:.55},crt:{file:"res/redroom/tv_crt.bin",tex:3,w:.47,h:.454,d:.389,dark:.9},old:{file:"res/redroom/tv_old.bin",tex:1,w:.62,h:.418,d:.416,dark:.75}}};B.stack=[["old",0,-1.41,2,.04],["crt",0,.05,-1,-.02],["sony",0,1.24,-2,.06],["crt",1,-1.16,3,.02],["sony",1,-.03,-1,.04],["crt",1,1.14,-3,.06],["sony",2,-.73,2,.06],["old",2,.66,-2,.03],["crt",0,-2.78,3,.08],["sony",1,-2.68,4,.1],["old",0,2.5,-3,.08],["sony",1,2.32,-4,.1]];var Tt={sony:[0,.194],crt:[0,.27],old:[.0625,.2145]};(()=>{let e=[];for(let r of B.stack){let u=B.models[r[0]],y=r[1],q=r[2],n=u.w*B.G,s=0;for(let a of e)a.row>=y||Math.abs(a.dx-q)<(a.w+n)/2*.92&&(s=Math.max(s,a.top));e.push({dx:q,row:y,w:n,top:s+u.h*B.G*.99}),r.base=s;let t=Tt[r[0]],i=r[3]*Math.PI/180;r.screen=[T/2+q+t[0]*B.G,s+t[1]*B.G,B.z+r[4]],r.facing=[-Math.sin(i),0,-Math.cos(i)],r.size=u.w*B.G}})();B.letters=(()=>{let e=[1,0].map(u=>B.stack.map((y,q)=>[q,y]).filter(([,y])=>y[1]===u).sort((y,q)=>q[1].screen[0]-y[1].screen[0]).map(([y])=>y)),r=B.stack.map(()=>-1);return[...e[0],...e[1]].forEach((u,y)=>{r[u]=y}),r})();var D=(()=>{let e={top:.92,depth:.78};return e.a=[F[0]+.7,F[1]-.55],e.b=[F[1]+.55,F[2]-.7],e.basin={x0:.08,x1:e.depth-.07,z0:e.a[0]+.1,z1:e.a[1]-.1,floor:e.top-.1},e.TX=.44,e.TZ=.54,e.TH=.075,e.TXc=(e.basin.x0+e.basin.x1)/2,e.trays=[e.a[0]+1.1,e.a[0]+1.72,e.a[0]+2.34],e.liquid=e.basin.floor+.05,e.bulb=[e.TXc+.02,1.39,e.trays[0]+.05],e.tube={x:.07,y:3.05,z0:e.b[0]+.2,z1:e.b[1]-.2},e.shelf={y:1.5,d:.3,z0:e.trays[2]+.42,z1:e.trays[2]+1.12},e.lines=[[.32,2.74,F[0],F[1],.12],[.74,2.52,F[0],F[1],.17],[1.1,2.62,F[0],F[1],.2],[.3,2.76,F[1],F[2],.15],[.68,2.46,F[1],F[2],.19],[1.06,2.66,F[1],F[2],.22],[.5,1.98,F[1],F[2],.12],[.45,2.98,F[0],F[1],.1,1.45],[1.45,2.4,F[0],F[1],.2],[.95,2.26,F[0],F[1],.13,.4],[1.4,3,F[1],F[2],.14,.45],[1.5,2.36,F[1],F[2],.22],[.9,2.2,F[1],F[2],.15,1.35]],e})(),A=(()=>{let e={x:T/2-.006,z:14.92,tableK:1.25,pitch:.1};e.table=.761*e.tableK,e.feed=[.0254,.7696,.3364],e.takeup=[.0252,.2484,.337],e.lensL=[.006,.456,.15];let r=Math.cos(e.pitch),u=Math.sin(e.pitch),y=e.lensL;return e.lens=[e.x+y[0],e.table+y[1]*r+y[2]*u,e.z-y[1]*u+y[2]*r],e.img={x:T/2,y:6,w:6.4},e.img.h=e.img.w*.75,e})(),c0={x0:4.2,x1:11.8,y:9,z:H-.16},A0={r:.045};(()=>{let e=A0.r,r=D.depth,u=D.b[1]-.22;A0.socket=[r,.3,u],A0.ctrl=[[r+.1,.3,u],[r+.2,.295,u],[r+.3,.22,u+.02],[r+.42,e,u+.1],[r+.8,e,u+.3],[1.8,e,u+.45],[3.4,e,u+.1],[5.2,e,u-.55],[7.2,e,u-.95],[9.4,e,u-.9],[11.4,e,u-.45],[13.2,e,u+.1],[T-1.15,e,u+.55],[T-.85,e,u+1.05],[T-.85,e,15.2],[T-1.1,e,16.3],[T-1.7,e,17.2],[T-2.5,e,17.9],[12.9,e,18.5],[11.5,e,18.9],[10.6,e,19.5],[10.5,e,20.3],[11.2,e,20.5],[10.9,e,19.95],[10,e*2.2,20.1],[9.3,e,20.75],[9.5,e,21.9],[8.6,e,22.25],[8.1,.22,21.95]];let y=A0.ctrl,q=[];for(let t=0;t<y.length-1;t++){let i=y[Math.max(0,t-1)],a=y[t],l=y[t+1],c=y[Math.min(y.length-1,t+2)],p=Math.max(2,Math.ceil(Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2])/.06));for(let _=0;_<p;_++){let L=_/p,g=L*L,d=g*L;q.push([0,1,2].map(h=>.5*(2*a[h]+(-i[h]+l[h])*L+(2*i[h]-5*a[h]+4*l[h]-c[h])*g+(-i[h]+3*a[h]-3*l[h]+c[h])*d)))}}q.push(y[y.length-1].slice());for(let t of q)t[1]<e&&t[2]>-1.4&&(t[1]=e);A0.path=q;let n=q.findIndex(t=>t[1]<=e*1.01),s=q.findIndex((t,i)=>i>n&&t[0]>T-1.3);A0.run=[n,s]})();var k0={spots:[],w:.36,h:.435,n:36,lines:[{z:H-1.7,y:6.5,sag:1},{z:H-2.6,y:5.3,sag:.8}]},T0=(()=>{let e=[-.62,.75,-.16],r=Math.hypot(...e);return e.map(u=>u/r)})(),X0=(()=>{let e=T/2;return(e*e+Je*Je)/(2*e)})(),K0=e=>{let r=e<=T/2?e:T-e;return i0+Math.sqrt(Math.max(0,X0*X0-(r-X0)*(r-X0)))},z={FLOOR:0,WALL:1,REVEAL:2,GLASS:3,VAULT:4,TRIM:5,VOID:6,TUBE:7,CABLE:8,TILE:9,STEEL:10,PEG:11,CONC:12,CFLOOR:13,DOOR:14};function at(){let e=[],r=[],u=[],y=[],q=[],n={pos:e,nrm:r,kind:u,uv:y,idx:q,v(s,t,i,a){return e.push(s[0]+I[0],s[1]+I[1],s[2]+I[2]),r.push(t[0],t[1],t[2]),u.push(i),y.push(a?a[0]:0,a?a[1]:0),e.length/3-1},quad(s,t,i,a,l,c,p,_,L,g){let d=n.v(s,l,c,p),h=n.v(t,l,c,_),v=n.v(i,l,c,L),m=n.v(a,l,c,g);q.push(d,h,v,d,v,m)},box(s,t,i,a,l,c,p){n.quad([s,t,c],[a,t,c],[a,l,c],[s,l,c],[0,0,1],p),n.quad([a,t,i],[s,t,i],[s,l,i],[a,l,i],[0,0,-1],p),n.quad([a,t,c],[a,t,i],[a,l,i],[a,l,c],[1,0,0],p),n.quad([s,t,i],[s,t,c],[s,l,c],[s,l,i],[-1,0,0],p),n.quad([s,l,c],[a,l,c],[a,l,i],[s,l,i],[0,1,0],p),n.quad([s,t,i],[a,t,i],[a,t,c],[s,t,c],[0,-1,0],p)},cyl(s,t,i,a,l,c,p){p=p||18;for(let _=0;_<p;_++){let L=_/p*Math.PI*2,g=(_+1)/p*Math.PI*2,d=[Math.sin(L),0,Math.cos(L)],h=[Math.sin(g),0,Math.cos(g)],v=($,N)=>[s+$[0]*i,N,t+$[2]*i],m=n.v(v(d,a),d,c),S=n.v(v(h,a),h,c),w=n.v(v(h,l),h,c),M=n.v(v(d,l),d,c);q.push(m,S,w,m,w,M)}}};return n}function M0(e,r,u,y,q){let n=null,s=null,t=[];for(let i=0;i<r.length;i++){let a=r[Math.max(0,i-1)],l=r[Math.min(r.length-1,i+1)],c=[l[0]-a[0],l[1]-a[1],l[2]-a[2]],p=Math.hypot(...c)||1;c=c.map(h=>h/p),s||(s=Math.abs(c[1])<.9?[0,1,0]:[1,0,0]);let _=s[0]*c[0]+s[1]*c[1]+s[2]*c[2];s=[s[0]-c[0]*_,s[1]-c[1]*_,s[2]-c[2]*_];let L=Math.hypot(...s)||1;s=s.map(h=>h/L);let g=[c[1]*s[2]-c[2]*s[1],c[2]*s[0]-c[0]*s[2],c[0]*s[1]-c[1]*s[0]],d=[];for(let h=0;h<y;h++){let v=h/y*Math.PI*2,m=Math.cos(v),S=Math.sin(v),w=[s[0]*m+g[0]*S,s[1]*m+g[1]*S,s[2]*m+g[2]*S];d.push(e.v([r[i][0]+w[0]*u,r[i][1]+w[1]*u,r[i][2]+w[2]*u],w,q,[i,h]))}if(n)for(let h=0;h<y;h++){let v=(h+1)%y;e.idx.push(n[h],n[v],d[v],n[h],d[v],d[h])}n=d,t.push(d)}}var rt=(e,r)=>[e[0]+((e[5]===void 0?e[0]:e[5])-e[0])*r,e[1]-e[4]*4*r*(1-r),e[2]+.35+(e[3]-e[2]-.7)*r];function et(e,r,u){let y=[[-e,r],[-e,u]],q=2*e,n=14;for(let s=1;s<=n;s++){let t=Math.PI-s/n*(Math.PI/3);y.push([e+q*Math.cos(t),u+q*Math.sin(t)])}for(let s=1;s<=n;s++){let t=Math.PI/3-s/n*(Math.PI/3);y.push([-e+q*Math.cos(t),u+q*Math.sin(t)])}return y.push([e,r]),y}function tt(e,r,u,y,q,n,s){let t=q?r.length:r.length-1;for(let i=0;i<t;i++){let a=r[i],l=r[(i+1)%r.length],c=l[0]-a[0],_=-(l[1]-a[1]),L=c,g=Math.hypot(_,L)||1;_/=g,L/=g;let d=(a[0]+l[0])/2-s[0],h=(a[1]+l[1])/2-s[1];_*d+L*h>0&&(_=-_,L=-L);let v=y(_,L,0,!0);e.quad(y(a[0],a[1],0),y(l[0],l[1],0),y(l[0],l[1],u),y(a[0],a[1],u),v,n,[a[0],a[1]],[l[0],l[1]],[l[0],l[1]],[a[0],a[1]])}}function Rt(){let e=at();e.quad([0,0,0],[0,0,H],[T,0,H],[T,0,0],[0,1,0],z.FLOOR),e.quad([0,0,H],[0,0,0],[0,i0,0],[0,i0,H],[1,0,0],z.WALL,[H,0],[0,0],[0,i0],[H,i0]),e.quad([T,0,0],[T,0,H],[T,i0,H],[T,i0,0],[-1,0,0],z.WALL,[0,0],[H,0],[H,i0],[0,i0]);let r=24;for(let n of[0,1]){let s=n?H:0,t=[0,0,n?-1:1];for(let i=0;i<r;i++){let a=i/r*T,l=(i+1)/r*T,c=[a,0,s],p=[l,0,s],_=[l,K0(l),s],L=[a,K0(a),s];n?e.quad(p,c,L,_,t,z.WALL,[l,0],[a,0],[a,L[1]],[l,_[1]]):e.quad(c,p,_,L,t,z.WALL,[a,0],[l,0],[l,_[1]],[a,L[1]])}}let u=40;for(let n=0;n<u;n++){let s=n/u*T,t=(n+1)/u*T,i=K0(s),a=K0(t),l=(h,v)=>{let m=h<=T/2?h:T-h,S=(X0-m)/X0,w=(i0-v)/X0;return h>T/2&&(S=-S),[S,w,0]},c=l(s,i),p=l(t,a),_=e.v([s,i,0],c,z.VAULT,[s,0]),L=e.v([t,a,0],p,z.VAULT,[t,0]),g=e.v([t,a,H],p,z.VAULT,[t,H]),d=e.v([s,i,H],c,z.VAULT,[s,H]);e.idx.push(_,L,g,_,g,d)}let y=et(P.hw,P.sill,P.spring),q=et(P.hw,P.lowSill,P.spring);for(let n=0;n<P.n;n++){let s=n===0?P.lowSill:P.sill,t=be(n),i=n>=P.leftFrom;i&&tt(e,y,we,(L,g,d,h)=>h?[0,g,L]:[-d,g,t+L],!0,z.REVEAL,[0,(P.sill+P.apex)/2]),tt(e,n===0?q:y,we,(L,g,d,h)=>h?[0,g,L]:[T+d,g,t+L],!0,z.REVEAL,[0,(s+P.apex)/2]);let a=we*.55,l=P.sill-.02,c=P.apex+.02,p=P.hw+.02;i&&e.quad([-a,l,t+p],[-a,l,t-p],[-a,c,t-p],[-a,c,t+p],[1,0,0],z.GLASS,[p,l],[-p,l],[-p,c],[p,c]);let _=s-.02;e.quad([T+a,_,t-p],[T+a,_,t+p],[T+a,c,t+p],[T+a,c,t-p],[-1,0,0],z.GLASS,[-p,_],[p,_],[p,c],[-p,c]),i&&e.box(-.02,P.sill-.12,t-P.hw-.18,.12,P.sill,t+P.hw+.18,z.TRIM),e.box(T-.12,s-(n===0?.05:.12),t-P.hw-.18,T+.02,s,t+P.hw+.18,z.TRIM)}{let n=T/2-x0.hw,s=T/2+x0.hw,t=x0.h,i=x0.depth;e.quad([n,0,-i],[n,0,0],[n,t,0],[n,t,-i],[1,0,0],z.REVEAL),e.quad([s,0,0],[s,0,-i],[s,t,-i],[s,t,0],[-1,0,0],z.REVEAL),e.quad([n,t,0],[s,t,0],[s,t,-i],[n,t,-i],[0,-1,0],z.REVEAL),e.quad([n,.001,-i],[s,.001,-i],[s,.001,0],[n,.001,0],[0,1,0],z.CFLOOR);let a=T/2-I0.hw,l=T/2+I0.hw,c=I0.h,p=I0.z;e.quad([a,0,p],[a,0,-i],[l,0,-i],[l,0,p],[0,1,0],z.CFLOOR),e.quad([a,0,-i],[a,0,p],[a,c,p],[a,c,-i],[1,0,0],z.CONC,[-i,0],[p,0],[p,c],[-i,c]),e.quad([l,0,p],[l,0,-i],[l,c,-i],[l,c,p],[-1,0,0],z.CONC,[p,0],[-i,0],[-i,c],[p,c]),e.quad([a,c,p],[a,c,-i],[l,c,-i],[l,c,p],[0,-1,0],z.CONC,[p,0],[-i,0],[-i,1],[p,1]),e.quad([l,0,p],[a,0,p],[a,c,p],[l,c,p],[0,0,1],z.CONC,[0,0],[1,0],[1,c],[0,c]);let _=-i;e.quad([a,0,_],[n,0,_],[n,c,_],[a,c,_],[0,0,-1],z.CONC,[a,0],[n,0],[n,c],[a,c]),e.quad([s,0,_],[l,0,_],[l,c,_],[s,c,_],[0,0,-1],z.CONC,[s,0],[l,0],[l,c],[s,c]),e.quad([n,t,_],[s,t,_],[s,c,_],[n,c,_],[0,0,-1],z.CONC,[n,t],[s,t],[s,c],[n,c]);let L=n,g=_-.01,d=I0.open,h=x0.hw*2-.04,v=.045,m=[Math.cos(d),0,-Math.sin(d)],S=[Math.sin(d),0,Math.cos(d)],w=(n0,e0,a0)=>[L+m[0]*n0+S[0]*a0,e0,g+m[2]*n0+S[2]*a0],M=.012,$=t-.02;e.quad(w(0,M,v),w(h,M,v),w(h,$,v),w(0,$,v),S,z.DOOR),e.quad(w(h,M,0),w(0,M,0),w(0,$,0),w(h,$,0),S.map(n0=>-n0),z.DOOR),e.quad(w(h,M,v),w(h,M,0),w(h,$,0),w(h,$,v),m,z.DOOR),e.quad(w(0,$,v),w(h,$,v),w(h,$,0),w(0,$,0),[0,1,0],z.DOOR);let N=w(h-.09,1.02,v+.03);M0(e,[w(h-.09,1.02,v),N,[N[0]-m[0]*.12,N[1],N[2]-m[2]*.12]],.011,6,z.STEEL);let W=I0.sign;e.box(W[0]-.33,W[1]-.12,W[2]-.02,W[0]+.33,W[1]+.12,_,z.TRIM)}for(let n of F){for(let a of[.2,T-.2])e.box(a-.42,0,n-.42,a+.42,.5,n+.42,z.TRIM),e.cyl(a,n,.27,.5,i0-.55,z.TRIM),e.cyl(a+(a<T/2?.2:-.2),n-.36,.1,.5,i0-.55,z.TRIM,10),e.cyl(a+(a<T/2?.2:-.2),n+.36,.1,.5,i0-.55,z.TRIM,10),e.box(a-.45,i0-.55,n-.5,a+.45,i0-.25,n+.5,z.TRIM);let s=40,t=.22,i=.22;for(let a=0;a<s;a++){let l=a/s*T,c=(a+1)/s*T,p=K0(l),_=K0(c),L=[T/2-l,-(p-i0+2),0],g=[T/2-c,-(_-i0+2),0],d=w=>{let M=Math.hypot(w[0],w[1])||1;return[w[0]/M,w[1]/M,0]},h=d(L),v=d(g),m=[l+h[0]*i,p+h[1]*i],S=[c+v[0]*i,_+v[1]*i];e.quad([m[0],m[1],n-t],[S[0],S[1],n-t],[S[0],S[1],n+t],[m[0],m[1],n+t],h,z.TRIM),e.quad([l,p,n-t],[c,_,n-t],[S[0],S[1],n-t],[m[0],m[1],n-t],[0,0,-1],z.TRIM),e.quad([c,_,n+t],[l,p,n+t],[m[0],m[1],n+t],[S[0],S[1],n+t],[0,0,1],z.TRIM)}}{let n=D,s=n.top,t=n.basin,i=(g,d,h)=>{if(e.box(0,0,g,n.depth-.06,.12,d,z.TRIM),e.quad([n.depth,.12,g],[n.depth,.12,d],[n.depth,s,d],[n.depth,s,g],[1,0,0],z.TILE,[g,.12],[d,.12],[d,s],[g,s]),e.quad([0,.12,g],[n.depth,.12,g],[n.depth,s,g],[0,s,g],[0,0,-1],z.TILE,[0,.12],[n.depth,.12],[n.depth,s],[0,s]),e.quad([n.depth,.12,d],[0,.12,d],[0,s,d],[n.depth,s,d],[0,0,1],z.TILE,[n.depth,.12],[0,.12],[0,s],[n.depth,s]),!h){e.quad([0,s,g],[0,s,d],[n.depth,s,d],[n.depth,s,g],[0,1,0],z.TILE,[0,g],[0,d],[n.depth,d],[n.depth,g]);return}let v=(m,S,w,M)=>e.quad([m,s,w],[m,s,M],[S,s,M],[S,s,w],[0,1,0],z.TILE,[m,w],[m,M],[S,M],[S,w]);v(0,t.x0,g,d),v(t.x1,n.depth,g,d),v(t.x0,t.x1,g,t.z0),v(t.x0,t.x1,t.z1,d),e.quad([t.x0,t.floor,t.z0],[t.x0,t.floor,t.z1],[t.x1,t.floor,t.z1],[t.x1,t.floor,t.z0],[0,1,0],z.TILE,[t.x0,t.z0],[t.x0,t.z1],[t.x1,t.z1],[t.x1,t.z0]),e.quad([t.x0,t.floor,t.z1],[t.x0,t.floor,t.z0],[t.x0,s,t.z0],[t.x0,s,t.z1],[1,0,0],z.TILE,[t.z1,t.floor],[t.z0,t.floor],[t.z0,s],[t.z1,s]),e.quad([t.x1,t.floor,t.z0],[t.x1,t.floor,t.z1],[t.x1,s,t.z1],[t.x1,s,t.z0],[-1,0,0],z.TILE,[t.z0,t.floor],[t.z1,t.floor],[t.z1,s],[t.z0,s]),e.quad([t.x0,t.floor,t.z0],[t.x1,t.floor,t.z0],[t.x1,s,t.z0],[t.x0,s,t.z0],[0,0,1],z.TILE,[t.x0,t.floor],[t.x1,t.floor],[t.x1,s],[t.x0,s]),e.quad([t.x1,t.floor,t.z1],[t.x0,t.floor,t.z1],[t.x0,s,t.z1],[t.x1,s,t.z1],[0,0,-1],z.TILE,[t.x1,t.floor],[t.x0,t.floor],[t.x0,s],[t.x1,s])};i(n.a[0],n.a[1],!0),i(n.b[0],n.b[1],!1);for(let[g,d]of[n.a,n.b])e.quad([.012,s,d],[.012,s,g],[.012,s+.62,g],[.012,s+.62,d],[1,0,0],z.TILE,[d,s],[g,s],[g,s+.62],[d,s+.62]);let a=g=>{let d=t.floor+.004,h=d+n.TH,v=n.TX/2,m=n.TZ/2,S=.02,w=n.TXc,M=[[w-v+S,g-m+S],[w+v-S,g-m+S],[w+v-S,g+m-S],[w-v+S,g+m-S]],$=[[w-v,g-m],[w+v,g-m],[w+v,g+m],[w-v,g+m]];e.quad([M[0][0],d,M[0][1]],[M[3][0],d,M[3][1]],[M[2][0],d,M[2][1]],[M[1][0],d,M[1][1]],[0,1,0],z.STEEL);for(let N=0;N<4;N++){let W=(N+1)%4,n0=[M[N][0],d,M[N][1]],e0=[M[W][0],d,M[W][1]],a0=[$[W][0],h,$[W][1]],h0=[$[N][0],h,$[N][1]],C=(M[N][0]+M[W][0])/2-w,t0=(M[N][1]+M[W][1])/2-g,Q=Math.hypot(C,t0)||1;e.quad(n0,e0,a0,h0,[-C/Q*.95,.3,-t0/Q*.95],z.STEEL),e.quad(e0,n0,[h0[0],d+.001,h0[2]],[a0[0],d+.001,a0[2]],[C/Q,0,t0/Q],z.STEEL)}M0(e,[...$,$[0]].map(N=>[N[0],h+.004,N[1]]),.005,5,z.STEEL)};for(let g of n.trays)a(g);let l=(g,d,h,v,m,S)=>{for(let w of[-.012,.012])M0(e,[[g,m,d+w],[(g+h)/2,(m+S)/2+.006,(d+v)/2+w*.6],[h,S,v+w*.2]],.0045,5,z.PEG)};l(n.TXc+.05,n.trays[0]+.12,n.TXc+.27,n.trays[0]+.42,n.liquid-.005,n.top+.03),l(n.TXc-.1,n.trays[2]-.2,n.TXc+.24,n.trays[2]-.05,n.liquid+.002,n.liquid+n.TH*.9);let c=t.z1-.3;M0(e,[[0,1.32,c],[.18,1.32,c],[.27,1.3,c],[.32,1.22,c],[.33,1.12,c]],.016,8,z.STEEL),e.box(0,1.27,c-.05,.05,1.37,c+.05,z.STEEL);let p=D.bulb;M0(e,[[0,2.32,p[2]],[p[0]*.6,2.32,p[2]],[p[0],2.28,p[2]]],.012,6,z.TRIM),e.box(0,2.24,p[2]-.06,.03,2.4,p[2]+.06,z.TRIM),M0(e,[[p[0],2.28,p[2]],[p[0]+.004,1.9,p[2]+.003],[p[0],p[1]+.2,p[2]]],.004,5,z.CABLE);{let g=Z.vase,d=Z.top,h=[[.045,0],[.07,.03],[.08,.09],[.072,.15],[.05,.2],[.042,.225],[.05,g.h]],v=24;for(let m=0;m<h.length-1;m++){let[S,w]=h[m],[M,$]=h[m+1];for(let N=0;N<v;N++){let W=N/v*Math.PI*2,n0=(N+1)/v*Math.PI*2,e0=(C,t0,Q)=>[g.x+Math.cos(Q)*C,d+t0,g.z+Math.sin(Q)*C],a0=C=>{let t0=M-S,Q=$-w,X=Math.hypot(t0,Q);return[Math.cos(C)*Q/X,-t0/X,Math.sin(C)*Q/X]},h0=(W+n0)/2;e.quad(e0(S,w,W),e0(S,w,n0),e0(M,$,n0),e0(M,$,W),a0(h0),z.TRIM)}}}let _=D.shelf;e.box(0,_.y-.03,_.z0,_.d,_.y,_.z1,z.TRIM);for(let g of[_.z0+.08,_.z1-.08])e.box(0,_.y-.2,g-.012,.022,_.y-.03,g+.012,z.TRIM),e.box(0,_.y-.06,g-.012,_.d*.7,_.y-.03,g+.012,z.TRIM);let L=D.tube;M0(e,[[L.x+.02,L.y,L.z0],[L.x+.02,L.y,(L.z0+L.z1)/2],[L.x+.02,L.y,L.z1]],.035,10,z.TUBE),e.box(0,L.y-.05,L.z0-.06,.07,L.y+.05,L.z0-.01,z.TRIM),e.box(0,L.y-.05,L.z1+.01,.07,L.y+.05,L.z1+.06,z.TRIM);for(let g of D.lines){let d=[];for(let h=0;h<=24;h++){let v=h/24;d.push(rt(g,v))}M0(e,d,.0035,5,z.CABLE);for(let h of[d[0],d[24]])M0(e,[[0,h[1]+.05,h[2]],[h[0]*.5,h[1]+.02,h[2]],[h[0]+.02,h[1],h[2]]],.007,5,z.TRIM)}}B.stack.forEach((n,s)=>{let t=B.models[n[0]],i=B.G,a=T/2+n[2],l=B.z+n[4]+t.d*i*.85,c=n.base+.12*i,p=T/2+(s%3-1)*.5,_=B.z+2.3+s%4*.12;M0(e,[[a,c,l-.05],[a+.05,c-.02,l+.15],[a+.1,Math.max(.02,c*.4),l+.35],[a*.6+p*.4,.018,l+.6],[p,.018,_]],.012,6,z.CABLE)}),M0(e,A0.path,A0.r,16,z.CABLE);{let[n,s,t]=A0.socket;e.box(n,s-.07,t-.07,n+.018,s+.07,t+.07,z.STEEL),e.box(n+.018,s-.035,t-.032,n+.11,s+.035,t+.032,z.TRIM),e.box(n,s+.042,t+.035,n+.03,s+.058,t+.051,z.TUBE)}e.box(c0.x0-.08,c0.y-.07,H-.08,c0.x0-.02,c0.y+.07,H,z.TRIM),e.box(c0.x1+.02,c0.y-.07,H-.08,c0.x1+.08,c0.y+.07,H,z.TRIM),M0(e,[[c0.x0-.02,c0.y,c0.z],[(c0.x0+c0.x1)/2,c0.y,c0.z],[c0.x1+.02,c0.y,c0.z]],.045,10,z.TUBE);for(let n of[0,1]){let s=n?T-.06:0,t=n?T:.06;e.box(s,0,0,t,.24,H,z.TRIM),e.box(n?T-.05:0,1,0,n?T:.05,1.08,H,z.TRIM);let i=n?T-.32:0,a=n?T:.32;e.box(i,i0-.25,0,a,i0+.08,H,z.TRIM)}for(let n of[0,1]){let s=n?H-.06:0,t=n?H:.06;n?e.box(0,0,s,T,.24,t,z.TRIM):(e.box(0,0,s,T/2-x0.hw,.24,t,z.TRIM),e.box(T/2+x0.hw,0,s,T,.24,t,z.TRIM));let i=n?H-.32:0,a=n?H:.32;e.box(0,i0-.25,i,T,i0+.08,a,z.TRIM)}return e}function St(){let e=7,r=()=>(e=e*16807%2147483647,(e-1)/2147483646),u=[],y=[],q=[],n=[],s=[],t=[],i=[],a=3,l=4,c=(v,m,S,w,M,$,N,W,n0)=>{let e0=k0.w*M,a0=k0.h*M,h0=u.length/3;for(let C=0;C<=l;C++)for(let t0=0;t0<=a;t0++){let Q=t0/a,X=C/l,x=(Q-.5)*e0,E=(X-.5)*a0,j=W*((Q-.5)*(Q-.5)*4+(1-X)*(1-X)*.6);u.push(I[0]+v[0]+m[0]*x+S[0]*E+w[0]*j,I[1]+v[1]+m[1]*x+S[1]*E+w[1]*j,I[2]+v[2]+m[2]*x+S[2]*E+w[2]*j),y.push(w[0],w[1],w[2]),q.push(Q,X),n.push($),i.push(n0||0),s.push(N[0]+I[0],N[1]+I[1],N[2]+I[2],N[3])}for(let C=0;C<l;C++)for(let t0=0;t0<a;t0++){let Q=h0+C*(a+1)+t0,X=Q+1,x=Q+a+1,E=x+1;t.push(Q,X,E,Q,E,x)}},p=(v,m,S)=>{let w=Math.cos(S),M=Math.sin(S);return[v.map(($,N)=>$*w+m[N]*M),m.map(($,N)=>-v[N]*M+$*w)]},_=[0,0,0,0],L=0,g=(v,m,S,w,M,$,N,W,n0)=>{let h0=0;for(let C=$;C<N;C+=.48)for(let t0=w;t0<M;t0+=.4){let Q=t0+(r()-.5)*.4*.7,X=C+(r()-.5)*.48*.6;if(r()>W(Q,X))continue;let[x,E]=p(S,[0,1,0],(r()-.5)*.5),j=v(Q,X,.012+.0016*(h0++%9)+r()*.004),y0=.88+r()*.3;c(j,x,E,m,y0,Math.floor(r()*k0.n),_,(r()-.3)*.02),k0.spots.length<400&&k0.spots.push({c:j,n:m,up:E,size:k0.h*y0}),L++}},d=(v,m,S)=>Math.exp(-Math.pow((v-m)/S,2));for(let v=0;v<P.n-1;v++){let m=F[v+1],S=[[be(v)+P.hw+.32,m-.66],[m+.66,be(v+1)-P.hw-.32]];for(let[w,M]of S){let $=(N,W)=>.85*d(W,3.4,1.7);M>D.b[1]+.3&&g((N,W,n0)=>[n0,W,N],[1,0,0],[0,0,-1],w,M,1.45,6.3,$),g((N,W,n0)=>[T-n0,W,N],[-1,0,0],[0,0,1],w,M,1.45,6.3,$)}}let h=[];for(let v of D.lines){let m=v[3]-v[2]-.7;for(let S=.18;S<m-.1;S+=.3+r()*.14){let w=S/m,M=rt(v,w);if(r()<.1||Math.abs(M[2]-D.bulb[2])<.4&&M[1]>2.3)continue;let $=.56+r()*.14,N=k0.h*$,W=(r()-.5)*.7,n0=r()<.3?r()<.5?-.75:.75:W,[e0,a0]=p([0,0,-1],[0,1,0],n0),h0=[1,0,0],C=[M[0]+.004,M[1]-.02-a0[1]*N*.5,M[2]-a0[2]*N*.5];c(C,e0,a0,h0,$,Math.floor(r()*k0.n),[M[0],M[1],M[2],-(.04+r()*.06)],.01+r()*.025,1),h.push(M),L++}}{let[v,m]=Z.stack,S=[0,1,0];for(let M=0;M<9;M++){let $=(r()-.5)*.35+.3;c([v+(r()-.5)*.012,Z.top+.003+M*.0022,m+(r()-.5)*.012],[Math.cos($),0,Math.sin($)],[Math.sin($),0,-Math.cos($)],S,.26,Math.floor(r()*k0.n),_,.004),L++}[[.13,.12,.9],[-.04,.2,-.4],[.2,-.05,1.6]].forEach(([M,$,N],W)=>{c([v+M,Z.top+.002+W*.0012,m+$],[Math.cos(N),0,Math.sin(N)],[Math.sin(N),0,-Math.cos(N)],S,.26,Math.floor(r()*k0.n),_,.006),L++})}return{pos:u,nrm:y,uv:q,pic:n,piv:s,idx:t,sty:i,pegs:h,count:L}}var E0=`
	const float RW = ${f(T)}, RL = ${f(H)}, RH = ${f(i0)}, RT = ${f(we)};
	const float HW = ${f(P.hw)}, SILL = ${f(P.sill)}, SPRING = ${f(P.spring)};
	const float WZ0 = ${f(P.z0)}, WSTEP = ${f(P.step)};
	const vec3 RO = vec3(${f(I[0])}, ${f(I[1])}, ${f(I[2])});
	const vec3 LDIR_L = vec3(${f(T0[0])}, ${f(T0[1])}, ${f(T0[2])});
	const vec3 LDIR_R = vec3(${f(-T0[0])}, ${f(T0[1])}, ${f(T0[2])});

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
	float winIdx(float z) { return clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${f(P.n-1)}); }
	// (on the left, the first windows are walled up)
	float leftOpen(float z) { return step(${f(P.leftFrom-.5)}, winIdx(z)); }
	vec2 winLocal(float z, float y) {
		float i = clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${f(P.n-1)});
		return vec2(z - (WZ0 + WSTEP * i), y);
	}
	// (on the right, the first window comes down to the table: its height
	// below the springing is stretched onto the others' shape)
	const float LSILL = ${f(P.lowSill)};
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
`;function qt(){return`
	#define STUDIO_SUN ${"vec3("+f(T0[0])+", "+f(T0[1])+", "+f(T0[2])+")"}
	#define STUDIO_SUN2 ${"vec3("+f(-T0[0])+", "+f(T0[1])+", "+f(T0[2])+")"}
	#define SHAFT_TINT vec3(0.6, 0.012, 0.008)
	#define STUDIO_AIR_EVEN
	${E0}
	float studioSun(vec3 p) {
		vec3 lp = p - RO;
		if (lp.x < 0.0 || lp.x > RW || lp.z < 0.0 || lp.z > RL || lp.y > RH + 2.0) return 0.0;
		vec3 c = redLightAir(lp);
		return dot(c, vec3(0.7, 0.2, 0.1)) * 3.2;
	}`}var ot=`
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
	}`,oe=`
	// the televisions' flicker, thrown on whatever is in front of them
	uniform vec4 tvLight;
	vec3 tvGlow(vec3 lp, vec3 N) {
		vec3 d = vec3(${f(T/2)}, 1.35, ${f(B.z-.9)}) - lp;
		float dd = dot(d, d);
		float face = 0.35 + 0.65 * max(0.0, dot(N, normalize(d)));
		// (only in front of them: the stack's own back is in its shadow)
		float front = smoothstep(${f(B.z+.6)}, ${f(B.z-.2)}, lp.z);
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
		vec3 L0 = vec3(${f(A.lens[0])}, ${f(A.lens[1])}, ${f(A.lens[2])});
		vec3 d = lp - L0;
		float s = (${f(H-.005)} - L0.z) / max(d.z, 1e-4);
		vec3 h = L0 + d * s;
		return vec3(1.0 - (h.x - ${f(A.img.x-A.img.w/2)}) / ${f(A.img.w)}, (h.y - ${f(A.img.y-A.img.h/2)}) / ${f(A.img.h)}, 1.0 / s);
	}
	// the televisions stand in the beam's way: their shadows on the picture
	uniform vec3 tvLo[12], tvHi[12];
	float projShadow(vec3 lp) {
		vec3 L0 = vec3(${f(A.lens[0])}, ${f(A.lens[1])}, ${f(A.lens[2])});
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
		vec3 c = vec3(clamp(lp.x, ${f(c0.x0)}, ${f(c0.x1)}), ${f(c0.y)}, ${f(c0.z)});
		vec3 d = c - lp;
		float dd = dot(d, d);
		float face = 0.25 + 0.75 * max(0.0, dot(N, normalize(d)));
		return vec3(1.0, 0.06, 0.045) * 2.6 * face / (1.0 + dd * 0.055);
	}
	// the darkroom: the bare red bulb over the trays, the tube over the lines
	vec3 darkLight(vec3 lp, vec3 N) {
		vec3 d = vec3(${f(D.bulb[0])}, ${f(D.bulb[1])}, ${f(D.bulb[2])}) - lp;
		float dd = dot(d, d);
		vec3 c = vec3(1.0, 0.07, 0.04) * 1.15 * (0.2 + 0.8 * max(0.0, dot(N, normalize(d)))) / (0.02 + dd * 2.2);
		vec3 tq = vec3(${f(D.tube.x+.02)}, ${f(D.tube.y)}, clamp(lp.z, ${f(D.tube.z0)}, ${f(D.tube.z1)}));
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
		vec3 Ls = vec3(${f(T/2)}, 1.25, 1.6);
		vec3 d = lp - Ls;
		float t = (${f(-x0.depth)} - Ls.z) / d.z;
		vec3 h = Ls + d * t;
		float m = smoothstep(0.08, -0.05, abs(h.x - ${f(T/2)}) - ${f(x0.hw)}) * smoothstep(0.08, -0.05, h.y - ${f(x0.h)}) * step(0.0, h.y);
		float dd = dot(d, d);
		vec3 Ld = -normalize(d);
		vec3 c = vec3(1.0, 0.07, 0.05) * 26.0 * m * (0.15 + 0.85 * max(0.0, dot(N, Ld))) / (1.0 + dd * 0.55);
		vec3 sd = vec3(${f(I0.sign[0])}, ${f(I0.sign[1])}, ${f(I0.sign[2])}) - lp;
		c += vec3(1.0, 0.12, 0.1) * signK * 0.5 * (0.2 + 0.8 * max(0.0, dot(N, normalize(sd)))) / (0.05 + dot(sd, sd) * 3.0);
		return c;
	}
	uniform float spotK;
	const vec3 SPOTP = vec3(${f(o0.pos[0])}, ${f(o0.pos[1])}, ${f(o0.pos[2])});
	const vec3 SPOTA = vec3(${f(o0.axis[0])}, ${f(o0.axis[1])}, ${f(o0.axis[2])});
	const float SPOT_CI = ${f(Math.cos(o0.inner))}, SPOT_CO = ${f(Math.cos(o0.outer))};
	// her shape in the spot's light: soft round blockers, her shadow
	float spotShade(vec3 lp, vec3 L, float len) {
		float sh = 1.0;
		${l0.occ.map(e=>`{
			vec3 C = vec3(${f(e[0])}, ${f(e[1])}, ${f(e[2])}) - lp;
			float t = dot(C, L);
			float r = ${f(e[3])};
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
		return spotK * cone * spotShade(lp, L, len) * 95.0 / r2;
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
		float spec = pow(max(0.0, dot(N, H)), 24.0) * 0.55;
		float rim = pow(1.0 - max(0.0, dot(N, V)), 2.2) * (0.3 + 0.7 * nl) * 0.55;
		return vec3(1.0, 0.9, 0.8) * min(k, 1.4) * (spec + rim) * (0.4 + 0.6 * nl);
	}
	// the roses and the vase standing in the candles' light: soft round
	// blockers, so they throw soft shadows across the table and the window
	float candleShade(vec3 lp, vec3 d) {
		float sh = 1.0;
		float len = length(d);
		vec3 dir = d / len;
		${Z.occ.map(e=>`{
			vec3 C = vec3(${f(e[0])}, ${f(e[1])}, ${f(e[2])}) - lp;
			float t = dot(C, dir);
			float cd = length(C - dir * t);
			float r = ${f(e[3])};
			if (t > 0.0 && t < len && dot(C, C) > r * r * 1.1) sh *= mix(1.0, smoothstep(r * 0.35, r * (1.0 + 2.5 * t / len), cd), 0.9);
		}`).join(`
`)}
		return sh;
	}
	// the candles on the table: a warm, breathing light close round them
	vec3 candleLight(vec3 lp, vec3 N) {
		vec3 sum = vec3(0.0);
		${Z.flames.map((e,r)=>`{
			vec3 d = vec3(${f(e[0])}, ${f(e[1])}, ${f(e[2])}) - lp;
 			float r2 = dot(d, d);
			float sh = candleShade(lp, d);
			float fl = 0.82 + 0.1 * sin(time * (9.0 + ${f(r*1.7)}) + ${f(r*2.1)}) * sin(time * 3.3 + ${f(r)}) + 0.08 * sin(time * 23.0 + ${f(r*4)});
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

`,nt=`
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, yScale, mirrorOn, reflOn;
	uniform sampler2D reflTex;
	uniform vec2 reflSize;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${E0}

	const float DHW = ${f(x0.hw)}, DH = ${f(x0.h)};

	${oe}

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
				vec3 bd = normalize(vec3(${f(D.bulb[0])}, ${f(D.bulb[1])}, ${f(D.bulb[2])}) - lp);
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
				if (k == 0 && lp.z > ${f(B.z-1.5)}) {
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
	}`,kt=`
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
	}`,It=`
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, sigTime, yScale, seed, dark, nMem, emit, order, warnS, warnN, glitchK;
	uniform sampler2D letterTex;
	uniform sampler2D bodyTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_flag;
	${E0}
	${oe}

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
				vec3 Lp = normalize(vec3(${f(A.lens[0])}, ${f(A.lens[1])}, ${f(A.lens[2])}) - lp);
				lit += film(vec2(0.5)) * 1.4 * max(0.0, dot(N, Lp)) * (0.7 + 0.3 * rnoise(v_uv * 40.0));
			}
			col = alb * (amb + lit) + spotSheen(lp, N, V);
			// worn plastic and veneer: a red sheen along the edges, as in
			// the reference, where the room's light rims every set
			col += (amb * 0.9 + lit * 0.3 + vec3(0.25, 0.02, 0.02)) * fr * 0.45;
		}
		float dist = length(v_eye - v_pos);
		col = mix(col, vec3(0.06, 0.004, 0.005), (1.0 - exp(-dist * 0.035)) * 0.55);
		gl_FragColor = vec4(col, 1.0);
	}`,Nt=`
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
	}`,$t=`
	precision highp float;
	uniform float time, yScale;
	uniform sampler2D polTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_pic, v_style;
	${E0}
	${oe}
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
	}`,At=`
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
	}`,Et=`
	precision highp float;
	uniform float time;
	varying vec3 v_pos, v_eye;
	varying float v_layer;
	${E0}
	${oe}
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
	}`,Ot=`
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
	}`,Pt=`
	precision highp float;
	uniform float time;
	uniform sampler2D printTex, polTex;
	varying vec3 v_pos, v_eye;
	varying float v_tray;
	${E0}
	${oe}
	const vec3 BULB = vec3(${f(D.bulb[0])}, ${f(D.bulb[1])}, ${f(D.bulb[2])});
	void main() {
		vec3 lp = v_pos - RO;
		int k = int(v_tray + 0.5);
		float zc = k == 0 ? ${f(D.trays[0])} : (k == 1 ? ${f(D.trays[1])} : ${f(D.trays[2])});
		vec2 tl = vec2(lp.x - ${f(D.TXc)}, lp.z - zc);
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
	}`,Dt=`
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
		vec3 L0 = vec3(${f(A.lens[0])}, ${f(A.lens[1])}, ${f(A.lens[2])});
		vec3 dd = lp - L0;
		float s = (${f(H)} - L0.z) / max(dd.z, 1e-4);
		vec3 hh = L0 + dd * s;
		vec2 pu = vec2((hh.x - ${f(A.img.x-A.img.w/2)}) / ${f(A.img.w)}, (hh.y - ${f(A.img.y-A.img.h/2)}) / ${f(A.img.h)});
		v_w = (dd.z > 0.2 && pu.x > 0.0 && pu.x < 1.0 && pu.y > 0.0 && pu.y < 1.0) ? 1.6 : 0.0;
		vec4 v = view * vec4(lp + RO, 1.0);
		gl_Position = proj * v;
		float tw = 0.6 + 0.4 * sin(time * (1.0 + seed.w * 2.0) + seed.x * 80.0);
		v_b *= tw;
		gl_PointSize = clamp(pxScale * (0.012 + 0.012 * seed.w) / max(0.2, -v.z), 1.0, 6.0);
	}`,Ct=`
	precision highp float;
	varying float v_b, v_w;
	void main() {
		vec2 d = gl_PointCoord - 0.5;
		float a = smoothstep(0.5, 0.0, length(d));
		gl_FragColor = vec4((vec3(1.0, 0.14, 0.09) * min(v_b, 1.4) + vec3(1.0, 0.8, 0.55) * v_w) * a * 0.55, 1.0);
	}`;$e.exports=function(e){let r=Rt(),u={position:e.buffer(r.pos),normal:e.buffer(r.nrm),kind:e.buffer(r.kind),uv:e.buffer(r.uv)},y=e.elements({data:r.idx.length>65535?new Uint32Array(r.idx):new Uint16Array(r.idx),type:r.idx.length>65535?"uint32":"uint16"}),q=e.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),n=e.framebuffer({color:q,depth:!0}),s=e({framebuffer:n}),t=e.texture({width:1,height:1,data:[0,0,0,255]}),i=e({}),a=t,l=0,c=0,p=!1,_=[4,4],L=[0,0,0,0],g=null,d=e.texture({width:1,height:1,data:[0,0,0,255]}),h=1,v=o=>{let b=G=>{let U=Math.sin(G*127.1)*43758.5453;return U-Math.floor(U)},R=Math.floor(o*9),k=b(R),O=b(Math.floor(o*.7)),V=.92+.08*Math.sin(o*120);return O>.55&&k>.6&&(V=k>.85?.08:.45),V},m={signK:()=>h,memTex:()=>g||d,projT:o=>{let b=typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:o.time;return V0.freeze?(V0.frozenAt===null&&(V0.frozenAt=b),V0.frozenAt):(V0.frozenAt=null,b)},spotK:()=>re.k,warnS:()=>V0.s,warnN:()=>V0.n,glitchK:()=>V0.glitch};B.stack.forEach((o,b)=>{let R=B.models[o[0]],k=B.G;m["tvLo["+b+"]"]=[T/2+o[2]-R.w*k/2,o.base,B.z+o[4]-.02],m["tvHi["+b+"]"]=[T/2+o[2]+R.w*k/2,o.base+R.h*k,B.z+o[4]+R.d*k]});let S=e({vert:ot,frag:nt,attributes:u,elements:y,cull:{enable:!1},uniforms:{reflTex:()=>a,reflSize:()=>_,reflOn:()=>l,tvLight:()=>L,...m}}),w=o=>new Promise((b,R)=>{let k=new Image,O=V=>(V&V-1)===0;k.onload=()=>b(e.texture({data:k,min:O(k.width)&&O(k.height)?"mipmap":"linear",mag:"linear",wrap:"clamp"})),k.onerror=R,k.src=o}),M=B.stack.map((o,b)=>{let[R,,k,O,V]=o,G=Math.PI+O*Math.PI/180,U=B.G,K=Math.cos(G)*U,J=Math.sin(G)*U,m0=I[0]+T/2+k,v0=I[1]+o.base,S0=I[2]+B.z+V;return{name:R,seed:(b+1)*.6180339%1,model:[K,0,-J,0,0,U,0,0,J,0,K,0,m0,v0,S0,1]}}),$={},N=(()=>{let o=document.createElement("canvas");o.width=160,o.height=20;let b=o.getContext("2d");return b.fillStyle="#000",b.fillRect(0,0,160,20),b.fillStyle="#fff",b.font='bold 19px "Courier New", Courier, monospace',b.textAlign="center",b.textBaseline="middle",Lt.split("").forEach((R,k)=>b.fillText(R,k*16+8,11)),e.texture({data:o,min:"nearest",mag:"nearest",wrap:"clamp"})})(),W=null,e0=e({vert:kt,frag:It,attributes:{position:{buffer:e.prop("vb"),stride:36,offset:0},normal:{buffer:e.prop("vb"),stride:36,offset:12},uv:{buffer:e.prop("vb"),stride:36,offset:24},flag:{buffer:e.prop("vb"),stride:36,offset:32}},elements:e.prop("el"),offset:e.prop("offset"),count:e.prop("count"),cull:{enable:!1},uniforms:{model:e.prop("model"),seed:e.prop("seed"),dark:e.prop("dark"),emit:(o,b)=>b.emit||0,order:(o,b)=>b.order===void 0?-1:b.order,letterTex:()=>N,bodyTex:e.prop("tex"),...m,memTex:()=>W||d,nMem:36,sigTime:o=>typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:o.time,tvLight:()=>L}});w("res/redroom/memories.webp").then(o=>{W=o,g=o}).catch(o=>console.error("The memories did not load",o));for(let o in B.models){let b=B.models[o],R=[];for(let k=0;k<b.tex;k++)R.push(w("res/redroom/tv_"+o+"_"+k+".webp"));Promise.all([fetch(b.file).then(k=>k.arrayBuffer()),...R]).then(([k,...O])=>{let V=new Uint32Array(k,0,4),G=V[0],U=V[1],K=V[2],J=V[3],m0=new Int32Array(k,16,K*3),v0=16+K*12,S0=e.buffer(new Float32Array(k,v0,G*9)),z0=v0+G*36,$0=J?new Uint32Array(k.slice(z0,z0+U*4)):new Uint16Array(k.slice(z0,z0+U*2)),q0=e.elements({data:$0,type:J?"uint32":"uint16"}),p0=[];for(let L0=0;L0<K;L0++)p0.push({offset:m0[L0*3],count:m0[L0*3+1],tex:m0[L0*3+2]>=0?O[m0[L0*3+2]]:O[0]});$[o]={vb:S0,el:q0,parts:p0,dark:b.dark}}).catch(k=>console.error("A television did not load",k))}let a0=[],h0=()=>{if(W){a0.length=0;for(let o of M){let b=$[o.name];if(b)for(let R of b.parts)a0.push({vb:b.vb,el:b.el,offset:R.offset,count:R.count,tex:R.tex,model:o.model,seed:o.seed,dark:b.dark,order:B.letters[M.indexOf(o)]})}a0.length&&e0(a0)}},C=St(),t0=null;w("res/redroom/polaroids.webp").then(o=>{t0=o}).catch(o=>console.error("The photographs did not load",o));let Q=e({vert:Nt,frag:$t,attributes:{position:C.pos,normal:C.nrm,uv:C.uv,pic:C.pic,style:C.sty,pivot:{buffer:e.buffer(C.piv),size:4}},elements:e.elements({data:new Uint16Array(C.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...m,polTex:()=>t0,tvLight:()=>L}}),X=(o,b)=>Promise.all([fetch(o).then(R=>R.arrayBuffer()),...b.map(w)]).then(([R,...k])=>{let O=new Uint32Array(R,0,4),V=O[0],G=O[1],U=O[2],K=O[3],J=new Int32Array(R,16,U*3),m0=16+U*12,v0=m0+V*36,S0=e.buffer(new Float32Array(R,m0,V*9)),z0=K?new Uint32Array(R.slice(v0,v0+G*4)):new Uint16Array(R.slice(v0,v0+G*2)),$0=e.elements({data:z0,type:K?"uint32":"uint16"}),q0=[];for(let p0=0;p0<U;p0++)q0.push({offset:J[p0*3],count:J[p0*3+1],tex:k[Math.max(0,J[p0*3+2])],mat:J[p0*3+2]});return{vb:S0,el:$0,parts:q0}}),x=(o,b)=>{let R=new Array(16);for(let k=0;k<4;k++)for(let O=0;O<4;O++)R[k*4+O]=o[O]*b[k*4]+o[4+O]*b[k*4+1]+o[8+O]*b[k*4+2]+o[12+O]*b[k*4+3];return R},E=(o,b,R)=>[1,0,0,0,0,1,0,0,0,0,1,0,o,b,R,1],j=o=>{let b=Math.cos(o),R=Math.sin(o);return[1,0,0,0,0,b,R,0,0,-R,b,0,0,0,0,1]},y0=x(E(I[0]+A.x,I[1]+A.table,I[2]+A.z),j(-A.pitch)),F0=A.tableK,ae=[F0,0,0,0,0,F0,0,0,0,0,F0,0,I[0]+T/2,I[1],I[2]+15,1],s0={},f0=["res/redroom/proj_0.webp"];X("res/redroom/proj_body.bin",f0).then(o=>{s0.body=o}).catch(o=>console.error(o)),X("res/redroom/proj_feed.bin",f0).then(o=>{s0.feed=o}).catch(o=>console.error(o)),X("res/redroom/proj_takeup.bin",f0).then(o=>{s0.takeup=o}).catch(o=>console.error(o)),X("res/redroom/table_all.bin",["res/redroom/table_0.webp"]).then(o=>{s0.table=o}).catch(o=>console.error(o));let g0=(o,b)=>x(y0,x(E(o[0],o[1],o[2]),x(j(b),E(-o[0],-o[1],-o[2])))),B0=[],fe=o=>{B0.length=0;let b=(R,k,O)=>{if(R)for(let V of R.parts)B0.push({vb:R.vb,el:R.el,offset:V.offset,count:V.count,tex:V.tex,model:k,seed:0,dark:O})};b(s0.table,ae,.9),b(s0.body,y0,1),b(s0.feed,g0(A.feed,-o*2.6),1),b(s0.takeup,g0(A.takeup,-o*3.5),1),B0.length&&e0(B0)},J0=[],pe=[];{let o=[I[0]+A.lens[0],I[1]+A.lens[1],I[2]+A.lens[2]];[.96,.86,.76,.66,.56,.46,.36].forEach((b,R)=>{let k=A.img.w/2*b,O=A.img.h/2*b,V=[[-k,-O],[k,-O],[k,O],[-k,O]].map(([G,U])=>[I[0]+A.img.x+G,I[1]+A.img.y+U,I[2]+H-.02]);for(let G=0;G<4;G++){let U=V[G],K=V[(G+1)%4];J0.push(...o,...U,...K),pe.push(R,R,R)}})}let Le=e({vert:At,frag:Et,attributes:{position:J0,layer:pe},count:J0.length/3,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{...m,tvLight:()=>L}}),he=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale, pxScale; attribute vec3 position; void main() { vec3 p = position; p.y *= yScale; vec4 v = view * vec4(p, 1.0); gl_Position = proj * v; gl_PointSize = clamp(pxScale * 0.22 / max(0.3, -v.z), 4.0, 220.0); }",frag:"precision highp float; uniform float time; void main() { vec2 d = gl_PointCoord - 0.5; float r = length(d); float a = exp(-r * r * 160.0) * 1.6 + 0.35 * exp(-r * r * 30.0) + 0.12 * exp(-r * r * 8.0) + 0.5 * exp(-d.y * d.y * 2500.0) * exp(-abs(d.x) * 7.0); gl_FragColor = vec4(vec3(1.0, 0.84, 0.62) * a * (0.9 + 0.1 * sin(time * 37.0)), 1.0); }",attributes:{position:[I[0]+A.lens[0],I[1]+A.lens[1],I[2]+A.lens[2]+.01]},count:1,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),W0=null;w("res/redroom/print.webp").then(o=>{W0=o}).catch(o=>console.error(o));let O0=[],ee=[];D.trays.forEach((o,b)=>{let R=D.TX/2-.009,k=D.TZ/2-.009,O=D.TXc,V=D.liquid,G=[[O-R,o-k],[O+R,o-k],[O+R,o+k],[O-R,o+k]].map(([U,K])=>[I[0]+U,I[1]+V,I[2]+K]);O0.push(...G[0],...G[2],...G[1],...G[0],...G[3],...G[2]);for(let U=0;U<6;U++)ee.push(b)});let b0=e({vert:Ot,frag:Pt,attributes:{position:O0,tray:ee},count:O0.length/3,cull:{enable:!1},uniforms:{...m,tvLight:()=>L,printTex:()=>W0||d,polTex:()=>t0||d}}),N0=at();for(let o of C.pegs)N0.box(o[0]-.008,o[1]-.045,o[2]-.011,o[0]+.008,o[1]+.03,o[2]+.011,z.PEG);let ve=e({vert:ot,frag:nt,attributes:{position:N0.pos,normal:N0.nrm,kind:N0.kind,uv:N0.uv},elements:e.elements({data:new Uint16Array(N0.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...m,reflTex:()=>t,reflSize:[4,4],reflOn:0,tvLight:()=>L}}),de=o=>{let b=Math.cos(o),R=Math.sin(o);return[b,0,-R,0,0,1,0,0,R,0,b,0,0,0,0,1]},r0=(o,b,R,k)=>x(E(I[0]+o,I[1]+b,I[2]+R),de(k||0));X("res/redroom/plastic_all.bin",["res/redroom/plastic_0.webp"]).then(o=>{s0.jug=o}).catch(o=>console.error(o)),X("res/redroom/multi_cleaner_all.bin",["res/redroom/multi_cleaner_0.webp"]).then(o=>{s0.can=o}).catch(o=>console.error(o)),X("res/redroom/pull_all.bin",["res/redroom/pull_0.webp"]).then(o=>{s0.socket=o}).catch(o=>console.error(o)),X("res/redroom/bulb_all.bin",["res/redroom/bulb_0.webp","res/redroom/bulb_1.webp"]).then(o=>{s0.bulb=o}).catch(o=>console.error(o));let P0=D.top,_0=D.b[0],ue=[["jug",r0(.16,P0,_0+.3,.4)],["jug",r0(.17,P0,_0+.52,-.3)],["jug",r0(.36,P0,_0+.4,2.2)],["can",r0(.14,P0,_0+.95,1.57)],["can",r0(.15,P0,_0+1.3,1.45)],["jug",r0(.16,P0,D.b[1]-.35,.9)],["can",r0(.2,P0,D.b[1]-.8,1.7)],["socket",r0(D.bulb[0],D.bulb[1]+.065,D.bulb[2],0)],["bulb",x(r0(D.bulb[0],D.bulb[1]+.048,D.bulb[2],0),j(Math.PI))]],u0=(o,b)=>[o,0,0,0,0,b===void 0?o:b,0,0,0,0,o,0,0,0,0,1];X("res/redroom/wtable_all.bin",["res/redroom/wtable_0.webp"]).then(o=>{s0.wtable=o}).catch(o=>console.error(o)),X("res/redroom/wchair_all.bin",["res/redroom/wchair_0.webp"]).then(o=>{s0.wchair=o}).catch(o=>console.error(o)),X("res/redroom/cstick_holder.bin",["res/redroom/cstick_0.webp"]).then(o=>{s0.holder=o}).catch(o=>console.error(o)),X("res/redroom/cstick_candle.bin",["res/redroom/cstick_0.webp"]).then(o=>{s0.candle=o}).catch(o=>console.error(o)),X("res/redroom/rose_all.bin",["res/redroom/rose_0.webp"]).then(o=>{s0.rose=o}).catch(o=>console.error(o)),X("res/redroom/camera_all.bin",[0,1,2,3].map(o=>"res/redroom/camera_"+o+".webp")).then(o=>{s0.camera=o}).catch(o=>console.error(o));let H0=Z.k,U0=Z.z,te=Math.PI/2,Y=[["wtable",x(r0(Z.x,0,U0,te),u0(H0)),1.7],["wchair",x(r0(Z.x-Z.depth/2-.36,0,U0-.42,te+.05),u0(H0)),1.6],["wchair",x(r0(Z.x-Z.depth/2-.42,0,U0+.45,te-.12),u0(H0)),1.6],["wchair",x(r0(Z.x+.02,0,U0-Z.half-.36,.06),u0(H0)),1.6],["wchair",x(r0(Z.x-.05,0,U0+Z.half+.4,Math.PI-.1),u0(H0)),.95]];for(let[o,b,R]of Z.candles)Y.push(["holder",r0(o,Z.top,b,R*3),.9]),Y.push(["candle",x(r0(o,Z.top,b,R*3),x(E(0,.156,0),x(u0(1,R),E(0,-.156,0)))),1.15]);{let o=7,b=()=>(o=o*16807%2147483647,(o-1)/2147483646),R=Z.vase;for(let k=0;k<9;k++){let O=k*2.39996+b()*.4,V=k===0?.04:.16+b()*.2,G=.66+b()*.12,U=R.h+.25*G-.1-(k===0?-.04:b()*.05),K=x(x(r0(R.x,Z.top+.02,R.z,O),j(V)),x(E(0,U-.02,0),x(j(Math.PI/2),x(u0(G),E(0,-.13,0)))));Y.push(["rose",K,2])}}for(let[o,b,R]of Z.laid)Y.push(["rose",x(r0(o,Z.top+.002,b,R),u0(.72)),2]);X("res/redroom/woman_all.bin",["res/redroom/woman_0.webp"]).then(o=>{s0.woman=o}).catch(o=>console.error(o));let Ce=x(r0(l0.x,0,l0.z,l0.yaw),u0(l0.k));Y.push(["woman",Ce,2.6]),Y.push(["camera",r0(.15,D.shelf.y,(D.shelf.z0+D.shelf.z1)/2,te-.4),1.7]);let dt=()=>{let o=[];for(let[R,k]of ue){let O=s0[R];O&&O.parts.forEach((V,G)=>o.push({vb:O.vb,el:O.el,offset:V.offset,count:V.count,tex:V.tex,model:k,seed:0,dark:R==="jug"||R==="can"?.85:.7,emit:R==="bulb"&&V.mat===0?1.6:0}))}let b=Mt();for(let[R,k,O]of Y){let V=s0[R];if(!(!V||b&&R==="woman"))for(let G of V.parts)o.push({vb:V.vb,el:V.el,offset:G.offset,count:G.count,tex:G.tex,model:k,seed:0,dark:O,emit:0})}o.length&&e0(o),gt(),s0.woman&&!b&&ut(),re.k>.001&&!Xe&&(mt(),xt()),b0(),ve()},Me=[],Ve=[];for(let K=0;K<8;K++)for(let J=0;J<8;J++){let m0=(q0,p0)=>[-.08+.285*q0,.405+.20999999999999996*p0,-.222+-.05400000000000002*p0-.008],v0=J/8,S0=(J+1)/8,z0=K/8,$0=(K+1)/8;for(let[q0,p0]of[[v0,z0],[S0,z0],[S0,$0],[v0,z0],[S0,$0],[v0,$0]])Me.push(...m0(q0,p0)),Ve.push(q0,p0)}let ut=e({vert:`
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
			${oe}
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
			}`,attributes:{position:Me,uv:Ve},count:Me.length/3,cull:{enable:!1},uniforms:{...m,model:()=>Ce,tvLight:()=>L}}),Te=[],je=[];{let o=o0.axis,b=Math.abs(o[1])>.9?[1,0,0]:[0,1,0],R=(K,J)=>[K[1]*J[2]-K[2]*J[1],K[2]*J[0]-K[0]*J[2],K[0]*J[1]-K[1]*J[0]],O=(K=>{let J=Math.hypot(...K);return K.map(m0=>m0/J)})(R(o,b)),V=R(o,O),G=o0.pos[1]/-o[1],U=40;[1,.82,.64,.46,.3].forEach((K,J)=>{let m0=Math.tan(o0.outer*K)*G;for(let v0=0;v0<U;v0++){let S0=v0/U*Math.PI*2,z0=(v0+1)/U*Math.PI*2,$0=p0=>[0,1,2].map(L0=>I[L0]+o0.pos[L0]+o[L0]*G+(O[L0]*Math.cos(p0)+V[L0]*Math.sin(p0))*m0),q0=[0,1,2].map(p0=>I[p0]+o0.pos[p0]);Te.push(...q0,...$0(S0),...$0(z0)),je.push(J,J,J)}})}let mt=e({vert:`
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
				float along = length(lp - vec3(${f(o0.pos[0])}, ${f(o0.pos[1])}, ${f(o0.pos[2])})) / ${f(o0.pos[1]/-o0.axis[1])};
				float haze = 0.55 + 0.9 * rfbm(lp.xz * 1.3 + vec2(lp.y * 0.6, time * 0.05)) * rfbm(lp.xy * 0.9 - time * 0.03);
				float dist = length(v_eye - v_pos);
				float a = spotK * haze * (0.55 + 0.45 * smoothstep(1.0, 0.0, along)) * smoothstep(0.0, 0.12, along) * smoothstep(0.98, 0.8, along) * smoothstep(0.3, 1.6, dist);
				gl_FragColor = vec4(vec3(1.0, 0.88, 0.74) * a * 0.045, 1.0);
			}`,attributes:{position:Te,layer:je},count:Te.length/3,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{spotK:()=>re.k}}),Ge=90,We=[];for(let o=0;o<Ge;o++)We.push(Math.random(),Math.random(),Math.random(),Math.random());let xt=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, yScale, pxScale, spotK;
			attribute vec4 seed;
			varying float v_a;
			void main() {
				vec3 S = vec3(${f(I[0]+o0.pos[0])}, ${f(I[1]+o0.pos[1])}, ${f(I[2]+o0.pos[2])});
				vec3 A = vec3(${f(o0.axis[0])}, ${f(o0.axis[1])}, ${f(o0.axis[2])});
				// somewhere in the cone, drifting slowly down and round
				float al = 0.25 + 0.7 * fract(seed.x - time * 0.004 * (0.5 + seed.w));
				float len = al * ${f(o0.pos[1]/-o0.axis[1])};
				float ang = seed.y * 6.2832 + time * 0.03 * (seed.z - 0.5);
				float rr = sqrt(seed.z) * tan(${f(o0.outer)}) * len * 0.92;
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
			}`,attributes:{seed:We},count:Ge,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2,spotK:()=>re.k}}),gt=e({vert:`
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
			}`,attributes:{fp:[].concat(...Z.flames.map((o,b)=>[I[0]+o[0],I[1]+o[1],I[2]+o[2],b*1.37]))},count:Z.flames.length,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),me=document.createElement("canvas");me.width=512,me.height=192;{let o=me.getContext("2d");o.fillStyle="#000",o.fillRect(0,0,512,192),o.font='bold 128px "Helvetica Neue", Arial, sans-serif',o.textAlign="center",o.textBaseline="middle",o.shadowColor="#ff2a20",o.shadowBlur=28,o.fillStyle="#ff6a5a",o.fillText("ENTER",256,100),o.shadowBlur=0,o.fillStyle="#ffd8d0",o.fillText("ENTER",256,100)}let yt=e.texture({data:me,min:"linear",mag:"linear",wrap:"clamp"}),D0=I0.sign,xe=.3,ge=.1125,ye=D0[2]-.025,wt=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale; attribute vec3 position; attribute vec2 uv; varying vec2 v_uv; void main() { v_uv = uv; vec3 p = position; p.y *= yScale; gl_Position = proj * view * vec4(p, 1.0); }",frag:"precision highp float; uniform sampler2D tex; uniform float signK; varying vec2 v_uv; void main() { vec3 c = texture2D(tex, v_uv).rgb; vec3 col = c * vec3(1.6, 0.55, 0.5) * signK + vec3(0.06, 0.0, 0.0); gl_FragColor = vec4(col, 1.0); }",attributes:{position:[[D0[0]+xe,D0[1]-ge,ye],[D0[0]-xe,D0[1]-ge,ye],[D0[0]-xe,D0[1]+ge,ye],[D0[0]+xe,D0[1]+ge,ye]].map(o=>[o[0]+I[0],o[1]+I[1],o[2]+I[2]]),uv:[[0,1],[1,1],[1,0],[0,0]]},elements:[0,1,2,0,2,3],cull:{enable:!1},uniforms:{tex:yt,signK:()=>h}}),He=220,Fe=[];for(let o=0;o<He;o++)Fe.push(Math.random(),Math.random(),Math.random(),Math.random());let bt=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b;
			void main() {
				vec3 L0 = vec3(${f(I[0]+A.lens[0])}, ${f(I[1]+A.lens[1])}, ${f(I[2]+A.lens[2])});
				vec3 C = vec3(${f(I[0]+A.img.x)}, ${f(I[1]+A.img.y)}, ${f(I[2]+H)});
				vec3 fw = normalize(C - L0);
				vec3 rt = normalize(cross(fw, vec3(0.0, 1.0, 0.0)));
				vec3 up = cross(rt, fw);
				// most of them close to the lens
				float along = 0.15 + pow(seed.x, 2.2) * 7.5;
				float sp = along / length(C - L0);
				vec2 off = (vec2(seed.y, seed.z) - 0.5) * vec2(${f(A.img.w)}, ${f(A.img.h)}) * sp;
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
			}`,frag:"precision highp float; varying float v_b; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vec3(1.0, 0.84, 0.6) * v_b * a, 1.0); }",attributes:{seed:Fe},count:He,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),Re=70,Be=[];for(let o=0;o<Re;o++)Be.push(Math.random(),Math.random(),Math.random(),o<Re*.6?1:0);let _t=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b, v_a, v_s;
			void main() {
				vec3 L0 = vec3(${f(I[0]+A.lens[0])}, ${f(I[1]+A.lens[1])}, ${f(I[2]+A.lens[2])});
				vec3 C = vec3(${f(I[0]+A.img.x)}, ${f(I[1]+A.img.y)}, ${f(I[2]+H)});
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
				float rc = 0.04 + al * ${f(A.img.h*.5)} / length(C - L0);
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
			}`,attributes:{seed:Be},count:Re,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),Ue=2200,Ke=[];for(let o=0;o<Ue;o++)Ke.push(Math.random(),Math.random(),Math.random(),Math.random());let zt=e({vert:Dt,frag:Ct,attributes:{seed:Ke},count:Ue,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),Xe=!1,Ye=o=>{let b=!!(o&&o.reflected);Xe=b;let R=performance.now()/1e3,k=.8+.12*Math.sin(R*47)*Math.sin(R*3.1)+.08*Math.sin(R*23+1.3);L[0]=.8*k,L[1]=.84*k,L[2]=.95*k,h=v(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:R),S(),wt(),h0(),t0&&Q(),dt(),fe(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:R),g&&!(typeof window!="undefined"&&window.__noBeam)&&Le(),he(),!b&&!(typeof window!="undefined"&&window.__noSmoke)&&_t(),b||bt(),b||zt()};return Ye.reflect=(o,b)=>i(R=>{let k=R.viewportWidth,O=R.viewportHeight,V=Math.max(2,Math.round(k/2)),G=Math.max(2,Math.round(O/2)),U=!p;if((n.width!==V||n.height!==G)&&(n.resize(V,G),U=!0),_[0]=k,_[1]=O,l=1,!U&&++c%b!==0){a=q;return}a=t,s(()=>{e.clear({color:[0,0,0,1],depth:1}),o()}),a=q,p=!0}),Ye};var Ne=null;Object.assign($e.exports,{O:I,W:T,L:H,H:i0,ROOM:{W:T,L:H,H:i0,WIN:P,DOOR:x0,ENT:I0,SHAFTS:F,TV:B,DARK:D,PROJ:A,CABLE:A0,POL:k0,TBL:Z,WOMAN:l0,winZ:be,vaultY:K0},POST:{threshold:.3},sunGLSL:qt,bakedSun(e){return Ne||(Ne=e.texture({width:1,height:1,data:[0,0,0,0]})),Ne},ready:()=>!0,setFlower(){},setGuide(){},setWind(){},setSpot(e){re.k=e},setWarn(e){Object.assign(V0,e)},setViewer(e){st.eye=e?e.slice():null}})});var vt=Se((Xt,ht)=>{"use strict";var R0=Ae(),{O:Ee}=R0,{W:d0,L:it,TV:ne,DARK:Z0,PROJ:Q0,TBL:w0,WOMAN:ze}=R0.ROOM,lt=e=>[e[0]+Ee[0],e[1]+Ee[1],e[2]+Ee[2]],ct=(e,r,u)=>e+(r-e)*u,le=e=>Math.max(0,Math.min(1,e)),Vt="Some grief is not yours to witness.",j0=e=>(e=le(e),e*e*(3-2*e)),ft=[ze.x,0,ze.z],Pe=Math.sin(ze.yaw),De=Math.cos(ze.yaw),Y0=(e,r,u)=>[ft[0]+Pe*e+De*(u||0),r,ft[2]+De*e-Pe*(u||0)],G0=Q0.x,jt=Q0.table,se=Q0.z,ie=[G0+Q0.feed[0],jt+Q0.feed[1],se+Q0.feed[2]],_e=Q0.lens,Oe=Z0.trays[0],Gt=[{eye:[d0/2+.15,1.55,-9.6],at:[d0/2,1.7,0],fov:40,dof:.05,p:{fov:58}},{eye:[d0/2+.05,1.6,-3],at:[d0/2,1.85,1.5],fov:50,dof:.05,p:{fov:70}},{eye:[d0/2-.2,1.5,.9],at:[d0/2-3,1.4,7],fov:56,dof:.04,p:{fov:74}},{eye:[d0-4.4,1.55,1.2],at:[d0-.7,1.05,w0.z+.2],fov:46,dof:.06,p:{eye:[d0-4.8,1.6,.9],fov:68}},{eye:[w0.x-1.4,w0.top+.48,w0.z-.7],at:[w0.x+.05,w0.top+.26,w0.z+0],fov:40,dof:.32,p:{fov:50}},{eye:[w0.stack[0]-.35,w0.top+.75,w0.stack[1]-.25],at:[w0.stack[0]+.02,w0.top,w0.stack[1]+.02],fov:34,dof:.3,p:{fov:50}},{eye:[3.3,1.55,1.3],at:[.3,1.35,5.2],fov:50,dof:.05,p:{eye:[2.8,1.6,.9],fov:72}},{eye:[1.05,1.5,Oe-.42],at:[Z0.TXc-.02,Z0.liquid,Oe+.04],fov:34,dof:.2,p:{eye:[1,1.55,Oe-.45],fov:52}},{eye:[.62,1.68,(Z0.shelf.z0+Z0.shelf.z1)/2-.36],at:[.14,1.55,(Z0.shelf.z0+Z0.shelf.z1)/2],fov:34,dof:.34,p:{fov:48}},{eye:[2,1.6,8.3],at:[.4,2.25,11.3],fov:50,dof:.12,p:{eye:[1.8,1.6,8.1],fov:72}}];function pt(e,r){let u=e.length-1,y=Math.max(0,Math.min(u,r)),q=Math.min(u-1,Math.floor(y)),n=y-q,s=e[Math.max(0,q-1)],t=e[q],i=e[q+1],a=e[Math.min(u,q+2)],l=n*n,c=l*n;return[0,1,2].map(p=>.5*(2*t[p]+(-s[p]+i[p])*n+(2*s[p]-5*t[p]+4*i[p]-a[p])*l+(-s[p]+3*t[p]-3*i[p]+a[p])*c))}var ce=0;function Wt(){let e=Gt.slice(),r=R0.ROOM.CABLE,u=r.path,y=r.socket[2],q=r.socket[0];e.push({eye:[q+1.05,.42,y-.45],at:[q,.27,y+.08],fov:42,dof:.32,p:{eye:[q+1.3,.48,y-.55],fov:58}});let[n,s]=r.run;for(let d of[.04,.22,.42,.62,.82]){let h=Math.round(n+(s-n)*d),v=u[Math.max(0,h-6)],m=u[Math.min(u.length-1,h+6)],S=u[h],w=m[0]-v[0],M=m[2]-v[2],$=Math.hypot(w,M)||1;w/=$,M/=$,e.push({eye:[S[0]-w*.8-M*.12,.3,S[2]-M*.8+w*.12],at:[S[0]+w*1.5,.06,S[2]+M*1.5],fov:44,dof:.24,pass:!0,p:{fov:60}})}e.push({eye:[d0-3,.45,y-1.6],at:[d0-.3,1.9,y+.9],fov:50,dof:.1,p:{fov:70}});let t=(d,h,v)=>[d[0]+h[0]*v,d[1]+h[1]*v,d[2]+h[2]*v],i=11,a=()=>(i=i*16807%2147483647,(i-1)/2147483646),l=(R0.ROOM.POL.spots||[]).filter(d=>d.n[0]<-.5&&d.c[2]>10.5&&d.c[2]<21.5&&d.c[1]>1.9&&d.c[1]<4.6),c=(d,h)=>Math.abs(d.c[2]-h)+Math.abs(d.c[1]-3)*.4,p=[];for(let d of[12.6,15,17.3]){let h=null;for(let v of l)(!h||c(v,d)<c(h,d))&&(h=v);h&&p.indexOf(h)<0&&p.push(h)}p.forEach((d,h)=>{let v=d.n,m=d.c;h>0&&e.push({eye:t(t(m,v,2.2),[0,.15,-.6],1),at:m,fov:50,dof:.05,pass:!0}),e.push({eye:t(t(m,v,1),[0,.06,-.3],1),at:m,fov:36,dof:.26,p:{fov:50}})}),e.push({eye:[G0+2,1.35,se-1.5],at:[G0,1.35,se+.1],fov:42,dof:.12,p:{eye:[G0+1.6,1.4,se-1.5],fov:62}}),e.push({eye:[G0+.85,ie[1]+.12,ie[2]-.35],at:[ie[0],ie[1]-.05,ie[2]],fov:36,dof:.32,p:{fov:52}}),e.push({eye:[G0+.42,_e[1]+.08,_e[2]+1.35],at:[G0,_e[1],_e[2]],fov:36,dof:.35,p:{fov:52}}),e.push({eye:[G0-.55,1.75,se-1.4],at:[d0/2,5,it],fov:50,dof:.06,p:{fov:70}}),e.push({eye:[G0-.2,3.3,se+3.2],at:[d0/2,5.4,it],fov:52,dof:.04,pass:!0,p:{fov:72}});let _=ne.stack;e.push({eye:[d0/2+1.4,1.2,ne.z-4.9],at:[d0/2,1.75,ne.z],fov:50,dof:.05,p:{fov:70}});let L=_.map((d,h)=>h);for(let d=L.length-1;d>0;d--){let h=Math.floor(a()*(d+1)),v=L[d];L[d]=L[h],L[h]=v}L=L.slice(0,10);let g=null;for(let d of L){let h=_[d],v=h.screen,m=h.facing,S=h.size*1.25;if(g){let M=[(g[0]+v[0])/2,(g[1]+v[1])/2+.2,Math.min(g[2],v[2])-2.6];e.push({eye:M,at:[(g[0]+v[0])/2,(g[1]+v[1])/2,ne.z],fov:46,dof:.05,pass:!0})}let w=(a()-.5)*.5;e.push({eye:[v[0]+m[0]*S+w,v[1]+.05+(a()-.5)*.15,v[2]+m[2]*S],at:[v[0],v[1],v[2]],fov:30,dof:.3,p:{fov:44}}),g=v}return e.push({eye:[d0/2+.3,3.3,ne.z-2.3],at:[d0/2,2.4,ne.z+3],fov:52,dof:.04,pass:!0}),e.push({eye:Y0(-.9,4.4,.2),at:Y0(4.6,1.5),fov:54,dof:.04,pass:!0}),ce=e.length,e.push({eye:Y0(-3.4,2.5,-1.5),at:Y0(1,.75),fov:46,dof:.08,p:{fov:66}}),e.push({eye:Y0(-2.9,2.3,.05),at:Y0(5.2,.95),fov:56,dof:.14,p:{eye:Y0(-3.3,2.4,.05),fov:74}}),e}function Ht(){let e=null,r=null,u=null,y=null,q=t=>{let i=e.createBuffer(1,Math.floor(e.sampleRate*t),e.sampleRate),a=i.getChannelData(0);for(let l=0;l<a.length;l++)a[l]=Math.random()*2-1;return i},n=()=>{if(e){e.state==="suspended"&&e.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;e=window.__redAudio||new t,window.__redAudio=e,e.state==="suspended"&&e.resume(),y=e.createGain(),y.gain.value=.9,y.connect(e.destination),r=e.createGain(),r.gain.value=0;let i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=170,i.Q.value=4,[55,55.6,110.3].forEach((c,p)=>{let _=e.createOscillator();_.type=p<2?"sawtooth":"sine",_.frequency.value=c,_.connect(i),_.start()}),i.connect(r),r.connect(y),u=e.createGain(),u.gain.value=0;let a=e.createBufferSource();a.buffer=q(2),a.loop=!0;let l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=3200,l.Q.value=.6,a.connect(l),l.connect(u),u.connect(y),a.start()},s=(t,i,a,l,c)=>{t.gain.setValueAtTime(0,i),t.gain.linearRampToValueAtTime(l,i+a),t.gain.exponentialRampToValueAtTime(1e-4,i+a+c)};return{start:n,set(t,i){if(!e)return;let a=e.currentTime;r.gain.setTargetAtTime(t*.16,a,.15),u.gain.setTargetAtTime(i*.035,a,.08)},tick(){if(!e)return;let t=e.currentTime,i=e.createOscillator();i.type="square",i.frequency.setValueAtTime(1180,t),i.frequency.exponentialRampToValueAtTime(240,t+.09);let a=e.createGain();s(a,t,.002,.09,.12),i.connect(a),a.connect(y),i.start(t),i.stop(t+.2);let l=e.createOscillator();l.type="sine",l.frequency.setValueAtTime(90,t),l.frequency.exponentialRampToValueAtTime(40,t+.2);let c=e.createGain();s(c,t,.004,.35,.25),l.connect(c),c.connect(y),l.start(t),l.stop(t+.35)},clunk(){if(!e)return;let t=e.currentTime,i=e.createOscillator();i.type="sine",i.frequency.setValueAtTime(75,t),i.frequency.exponentialRampToValueAtTime(38,t+.25);let a=e.createGain();s(a,t,.003,.5,.35),i.connect(a),a.connect(y),i.start(t),i.stop(t+.5);let l=e.createBufferSource();l.buffer=q(.08);let c=e.createBiquadFilter();c.type="highpass",c.frequency.value=1800;let p=e.createGain();s(p,t,.001,.25,.06),l.connect(c),c.connect(p),p.connect(y),l.start(t)},burst(){if(!e)return;let t=e.currentTime,i=e.createBufferSource();i.buffer=q(2.4);let a=e.createBiquadFilter();a.type="bandpass",a.Q.value=.7,a.frequency.setValueAtTime(600,t),a.frequency.exponentialRampToValueAtTime(5e3,t+1.6);let l=e.createGain();l.gain.setValueAtTime(1e-4,t),l.gain.exponentialRampToValueAtTime(.5,t+.5),l.gain.setValueAtTime(.5,t+1.7),l.gain.exponentialRampToValueAtTime(1e-4,t+2.3),i.connect(a),a.connect(l),l.connect(y),i.start(t);let c=e.createOscillator();c.type="sawtooth",c.frequency.setValueAtTime(110,t),c.frequency.exponentialRampToValueAtTime(18,t+2);let p=e.createGain();s(p,t,.05,.18,2),c.connect(p),p.connect(y),c.start(t),c.stop(t+2.2)},stop(){if(r&&(r.gain.value=0),u&&(u.gain.value=0),y)try{y.disconnect()}catch(t){}e=null,r=u=y=null}}}var Ft=`
.red-sub {
	position: fixed; left: 50%; bottom: 9vh; transform: translateX(-50%); z-index: 406;
	width: min(92vw, 900px); text-align: center; pointer-events: none;
	font: italic 400 clamp(19px, 2.5vw, 32px)/1.35 'Cormorant Garamond', Georgia, serif;
	color: #f1e7dc; letter-spacing: .035em; text-shadow: 0 2px 18px rgba(0,0,0,.9), 0 0 2px rgba(0,0,0,.8);
	opacity: 0;
}`;ht.exports=function(r){r=r||{};let u=Wt(),y=u.length-1,q=u.map((x,E)=>x.pass?-1:E).filter(x=>x>=0),n=(x,E)=>{if(E>=0){for(let j of q)if(j>=x-.06)return j;return q[q.length-1]}for(let j=q.length-1;j>=0;j--)if(q[j]<=x+.06)return q[j];return q[0]},s=(x,E)=>{if(E>0){for(let j of q)if(j>x+.01)return j;return q[q.length-1]}for(let j=q.length-1;j>=0;j--)if(q[j]<x-.01)return q[j];return q[0]},t=null,i=null,a=0,l=0,c=0,p=null,_=null,L=0,g=Ht(),d=document.createElement("div");d.className="red-sub",d.textContent=Vt;let h=document.createElement("style");h.textContent=Ft,document.head.appendChild(h),document.body.appendChild(d);let v=0,m=0,S=null,w=-10,M=0,$=null,N=1,W=-10,n0=[],e0=(x,E,j)=>{window.addEventListener(x,E,j),n0.push([x,E,j])},a0=x=>{let E=Math.sign(x);if(!(!E||p!==null)){if(E>0&&m>=y-.001&&v>y-.08||E<0&&l>0){let j=l<1?2.2:.75;l=Math.max(0,Math.min(2.4,l+Math.max(-.2,Math.min(.13,x))*j)),w=M,W=M,N=E;return}E!==N&&M-W<.25&&Math.abs(x)<.02||(E!==N&&(N=E),W=M,m=Math.max(0,Math.min(y,m+x)),w=M)}},h0=x=>{if(p===null){if(x>0&&m>=y-.001||x<0&&l>0){a0(x>0?.12:-.12);return}N=x>0?1:-1,m=s(m,x),w=M-10}};e0("pointerdown",()=>g.start()),e0("keydown",()=>g.start()),e0("touchend",()=>g.start()),e0("wheel",x=>{if(x.target.closest&&x.target.closest(".st-ui"))return;x.preventDefault();let E=x.deltaMode===1?x.deltaY*16:x.deltaMode===2?x.deltaY*window.innerHeight:x.deltaY;a0(Math.max(-.6,Math.min(.6,E/700)))},{passive:!1});let C=null;e0("pointerdown",x=>{x.target.closest&&x.target.closest("button, a, .st-ui")||(C={lx:x.clientX,ly:x.clientY,moved:0,t:performance.now()})}),e0("pointermove",x=>{if(!C)return;let E=x.clientX-C.lx,j=x.clientY-C.ly;C.lx=x.clientX,C.ly=x.clientY;let y0=Math.abs(j)>=Math.abs(E)?-j:-E;C.moved+=Math.abs(y0),C.moved>6&&a0(y0/(window.innerHeight*.55))}),e0("pointerup",()=>{let x=C;C=null,x&&x.moved<8&&performance.now()-x.t<450&&h0(1)}),e0("keydown",x=>{x.key==="ArrowDown"||x.key==="ArrowRight"||x.key==="PageDown"||x.key===" "?h0(1):(x.key==="ArrowUp"||x.key==="ArrowLeft"||x.key==="PageUp")&&h0(-1)});function t0(x){M=x,$===null&&($=x);let E=S===null?0:Math.min(.1,x-S);S=x,typeof window!="undefined"&&window.__redShot!==void 0&&/tourdebug/.test(location.search)&&(v=m=window.__redShot,t=null),typeof window!="undefined"&&window.__press!==void 0&&/tourdebug/.test(location.search)&&(l=a=window.__press),M-w>.35&&(m+=(n(m,N)-m)*(1-Math.exp(-E*2))),v+=(m-v)*(1-Math.exp(-E*1.7)),Math.abs(m-v)<1e-4&&(v=m);let j=window.innerWidth<window.innerHeight,y0=u.map(Y=>j&&Y.p?Object.assign({},Y,Y.p):Y),F0=Math.min(y-1,Math.floor(v)),ae=v-F0,s0=ae*ae*(3-2*ae),f0=pt(y0.map(Y=>Y.eye),v),g0=pt(y0.map(Y=>Y.at),v);(!t||E===0||E>.09)&&(t=f0.slice(),i=g0.slice());let B0=1-Math.exp(-E*5);for(let Y=0;Y<3;Y++)t[Y]+=(f0[Y]-t[Y])*B0,i[Y]+=(g0[Y]-i[Y])*B0;f0=t.slice(),g0=i.slice();let fe=y0[F0],J0=y0[Math.min(y,F0+1)],pe=ct(fe.fov,J0.fov,s0),Le=ct(fe.dof,J0.dof,s0);M-w>2.2&&p===null&&(l=Math.max(0,l-E*.14));let he=a<1?.9:.55;a+=Math.max(-he*E*2,Math.min(he*E,l-a)),a>2.08&&p===null&&(p=x,g.burst());let W0=le(a),O0=le(a-1),ee=Math.min(10,Math.max(0,(a-1)*10.5));if(Math.floor(ee)>c&&(g.tick(),navigator.vibrate))try{navigator.vibrate(28)}catch(Y){}c=Math.floor(ee);let b0=p===null?0:le((x-p)/2.3);typeof window!="undefined"&&window.__xk!==void 0&&/tourdebug/.test(location.search)&&(b0=window.__xk);let N0=j0(W0)*.28+O0*.06;f0=[f0[0]+Pe*N0,f0[1]-N0*.08,f0[2]+De*N0];let ve=W0*.004+O0*.008+b0*.05;f0[0]+=Math.sin(x*37)*ve,f0[1]+=Math.sin(x*41+1)*ve;let de=v>ce-.35?1:0;de&&!L&&(L=1,_=x,g.clunk()),!de&&L&&v<ce-.8&&(L=0);let r0=0;if(L){let Y=x-_;r0=Y<.75?[0,1,.15,.9,.3,1][Math.min(5,Math.floor(Y/.125))]:1}let P0=Math.sin(x*13)*Math.sin(x*5.3);r0*=1-(W0*.25+O0*.3)*(P0>.6?1:0)-b0*(Math.sin(x*60)>0?.8:0),R0.setSpot(Math.max(0,r0)),R0.setWarn({s:j0((a-.12)/.45),n:ee,glitch:j0(b0*1.6),freeze:a>.15}),d.style.opacity=String(j0((a-.35)/.4)*(1-j0((b0-.1)/.3))*(.88+.12*Math.sin(x*2))),g.set(j0(W0)*(1-b0)+O0*.5,j0((a-.12)/.45)*(1-b0*.5)),p!==null&&b0>=1&&(r.onExpel?r.onExpel():Q(),p=null);let _0=typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:x,ue=Math.hypot(g0[0]-f0[0],g0[1]-f0[1],g0[2]-f0[2]),u0=.01+.03*Math.min(1,ue/6);f0=[f0[0]+Math.sin(_0*.31)*u0,f0[1]+Math.sin(_0*.43+1)*u0*.6,f0[2]+Math.cos(_0*.27)*u0],g0=[g0[0]+Math.sin(_0*.21+2)*u0*.8,g0[1]+Math.sin(_0*.37)*u0*.5,g0[2]];let H0=lt(f0),U0=lt(g0),te=Math.max(1-le((x-$-.3)/1.8),j0((b0-.82)/.18));return R0.setViewer(H0),{eye:H0,target:U0,fov:pe,roll:Math.sin(_0*.17)*.004,moving:!0,look:{letterbox:.45,focus:ue,aperture:Le,vignette:.3+W0*.25,exposure:1.45,shafts:1,fade:te,fadeColor:[0,0,0],glitch:j0((b0-.25)/.6)*.9+O0*.06}}}function Q(){a=l=0,c=0,p=null,L=0,v=m=0,t=null,$=null,R0.setWarn({s:0,n:0,glitch:0,freeze:!1}),R0.setSpot(0)}function X(){for(let[x,E,j]of n0)window.removeEventListener(x,E,j);n0.length=0,g.stop(),d.remove(),h.remove(),R0.setWarn({s:0,n:0,glitch:0,freeze:!1}),R0.setSpot(0),R0.setViewer(null)}return/tourdebug/.test(location.search)&&(window.__redTourInfo={END:y,REVEAL:ce,STOPS:q}),{update:t0,tap:()=>h0(1),dispose:X,placeFlower(){},startSound:()=>g.start(),get scroll(){return v},END:y,REVEAL:ce}}});window.__redRoom={studio:Ae(),tour:vt()};})();

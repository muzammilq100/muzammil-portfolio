"use strict";(()=>{var Se=(e,h)=>()=>(h||e((h={exports:{}}).exports,h),h.exports);var Qe=Se((Ut,Ze)=>{"use strict";var V0=[-90,0,0],qe=16,ke=27.5,Ie=11.6;Ze.exports={O:V0,W:qe,L:ke,RIDGE:Ie,BOX:[V0[0]-.8,0,V0[2]-11.5,V0[0]+qe+.8,Ie+.5,V0[2]+ke+.8],AIR_BOX:[V0[0],0,V0[2],V0[0]+qe,Ie,V0[2]+ke]}});var Ae=Se((Kt,$e)=>{"use strict";var{O:I,W:M,L:H}=Qe(),c=e=>(+e).toFixed(4),r0=10.5,we=.7,Je=3,P={hw:1.25,sill:1.35,spring:6.9,n:4,step:6.35};P.z0=H/2-P.step*(P.n-1)/2;P.apex=P.spring+P.hw*Math.sqrt(3);var be=e=>P.z0+P.step*e;P.leftFrom=2;var e0=(()=>{let h=P.z0,m={k:1.42,z:h,top:.543*1.42,half:.601*1.42,depth:.706*1.42};return m.x=M-.12-m.depth/2,m.candles=[[M-.4,h-.52,1],[M-.3,h-.3,.62],[M-.36,h+.42,.38],[M-.86,h-.06,.55],[M-.24,h+.66,.85],[M-.8,h+.42,.3]],m.vase={x:M-.55,z:h+.06,h:.24},m.flames=m.candles.map(([d,q,n])=>[d,m.top+.156+.144*n+.018,q]),m.laid=[[M-.66,h-.22,Math.PI/2+.5],[M-.62,h-.36,Math.PI/2+.15],[M-.7,h+.26,Math.PI/2-.6]],m.stack=[M-.88,h-.5],m.occ=[[M-.55,m.top+.46,h+.06,.15],[M-.55,m.top+.26,h+.06,.06],[M-.55,m.top+.11,h+.06,.08],...m.laid.map(([d,q,n])=>[d-Math.sin(n)*.15,m.top+.05,q-Math.cos(n)*.15,.065])],m})(),Lt="LEAVEHERBE",re={k:0},j0={s:0,n:0,glitch:0,freeze:!1,frozenAt:null},st={eye:null},Mt=()=>{let e=st.eye;return e?(e[0]-I[0]-i0.x)*Math.sin(i0.yaw)+(e[2]-I[2]-i0.z)*Math.cos(i0.yaw)>-.25:!1};P.lowSill=e0.top+.06;var i0={x:M/2,z:18.6,k:1.3};i0.yaw=Math.atan2(M/2-i0.x,21.2-i0.z);{let e=Math.sin(i0.yaw),h=Math.cos(i0.yaw),m=(d,q,n)=>[i0.x+e*d,q,i0.z+h*d,n];i0.occ=[m(0,1.17,.13),m(-.02,.86,.22),m(.1,.42,.36),m(-.3,.62,.17)]}var o0=(()=>{let e=Math.sin(i0.yaw),h=Math.cos(i0.yaw),m=[i0.x-e*1.4,8.4,i0.z-h*1.4],d=[i0.x+e*.25,.55,i0.z+h*.25],q=[d[0]-m[0],d[1]-m[1],d[2]-m[2]],n=Math.hypot(...q);return{pos:m,axis:q.map(s=>s/n),inner:.115,outer:.17,reach:n}})(),U=[];for(let e=0;e<=P.n;e++)U.push(P.z0+P.step*(e-.5));var g0={hw:.75,h:2.6,depth:.7},I0={hw:1.8,h:3.6,z:-11,sign:[M/2,g0.h+.32,-g0.depth-.05],open:2.2},X={z:21.2,G:2.4,models:{sony:{file:"res/redroom/tv_sony.bin",tex:3,w:.36,h:.341,d:.455,dark:.55},crt:{file:"res/redroom/tv_crt.bin",tex:3,w:.47,h:.454,d:.389,dark:.9},old:{file:"res/redroom/tv_old.bin",tex:1,w:.62,h:.418,d:.416,dark:.75}}};X.stack=[["old",0,-1.41,2,.04],["crt",0,.05,-1,-.02],["sony",0,1.24,-2,.06],["crt",1,-1.16,3,.02],["sony",1,-.03,-1,.04],["crt",1,1.14,-3,.06],["sony",2,-.73,2,.06],["old",2,.66,-2,.03],["crt",0,-2.78,3,.08],["sony",1,-2.68,4,.1],["old",0,2.5,-3,.08],["sony",1,2.32,-4,.1]];var Tt={sony:[0,.194],crt:[0,.27],old:[.0625,.2145]};(()=>{let e=[];for(let h of X.stack){let m=X.models[h[0]],d=h[1],q=h[2],n=m.w*X.G,s=0;for(let a of e)a.row>=d||Math.abs(a.dx-q)<(a.w+n)/2*.92&&(s=Math.max(s,a.top));e.push({dx:q,row:d,w:n,top:s+m.h*X.G*.99}),h.base=s;let t=Tt[h[0]],r=h[3]*Math.PI/180;h.screen=[M/2+q+t[0]*X.G,s+t[1]*X.G,X.z+h[4]],h.facing=[-Math.sin(r),0,-Math.cos(r)],h.size=m.w*X.G}})();X.letters=(()=>{let e=[1,0].map(m=>X.stack.map((d,q)=>[q,d]).filter(([,d])=>d[1]===m).sort((d,q)=>q[1].screen[0]-d[1].screen[0]).map(([d])=>d)),h=X.stack.map(()=>-1);return[...e[0],...e[1]].forEach((m,d)=>{h[m]=d}),h})();var D=(()=>{let e={top:.92,depth:.78};return e.a=[U[0]+.7,U[1]-.55],e.b=[U[1]+.55,U[2]-.7],e.basin={x0:.08,x1:e.depth-.07,z0:e.a[0]+.1,z1:e.a[1]-.1,floor:e.top-.1},e.TX=.44,e.TZ=.54,e.TH=.075,e.TXc=(e.basin.x0+e.basin.x1)/2,e.trays=[e.a[0]+1.1,e.a[0]+1.72,e.a[0]+2.34],e.liquid=e.basin.floor+.05,e.bulb=[e.TXc+.02,1.39,e.trays[0]+.05],e.tube={x:.07,y:3.05,z0:e.b[0]+.2,z1:e.b[1]-.2},e.shelf={y:1.5,d:.3,z0:e.trays[2]+.42,z1:e.trays[2]+1.12},e.lines=[[.32,2.74,U[0],U[1],.12],[.74,2.52,U[0],U[1],.17],[1.1,2.62,U[0],U[1],.2],[.3,2.76,U[1],U[2],.15],[.68,2.46,U[1],U[2],.19],[1.06,2.66,U[1],U[2],.22],[.5,1.98,U[1],U[2],.12],[.45,2.98,U[0],U[1],.1,1.45],[1.45,2.4,U[0],U[1],.2],[.95,2.26,U[0],U[1],.13,.4],[1.4,3,U[1],U[2],.14,.45],[1.5,2.36,U[1],U[2],.22],[.9,2.2,U[1],U[2],.15,1.35]],e})(),$=(()=>{let e={x:M/2-.006,z:14.92,tableK:1.25,pitch:.1};e.table=.761*e.tableK,e.feed=[.0254,.7696,.3364],e.takeup=[.0252,.2484,.337],e.lensL=[.006,.456,.15];let h=Math.cos(e.pitch),m=Math.sin(e.pitch),d=e.lensL;return e.lens=[e.x+d[0],e.table+d[1]*h+d[2]*m,e.z-d[1]*m+d[2]*h],e.img={x:M/2,y:6,w:6.4},e.img.h=e.img.w*.75,e})(),l0={x0:4.2,x1:11.8,y:9,z:H-.16},A0={r:.045};(()=>{let e=A0.r,h=D.depth,m=D.b[1]-.22;A0.socket=[h,.3,m],A0.ctrl=[[h+.1,.3,m],[h+.2,.295,m],[h+.3,.22,m+.02],[h+.42,e,m+.1],[h+.8,e,m+.3],[1.8,e,m+.45],[3.4,e,m+.1],[5.2,e,m-.55],[7.2,e,m-.95],[9.4,e,m-.9],[11.4,e,m-.45],[13.2,e,m+.1],[M-1.15,e,m+.55],[M-.85,e,m+1.05],[M-.85,e,15.2],[M-1.1,e,16.3],[M-1.7,e,17.2],[M-2.5,e,17.9],[12.9,e,18.5],[11.5,e,18.9],[10.6,e,19.5],[10.5,e,20.3],[11.2,e,20.5],[10.9,e,19.95],[10,e*2.2,20.1],[9.3,e,20.75],[9.5,e,21.9],[8.6,e,22.25],[8.1,.22,21.95]];let d=A0.ctrl,q=[];for(let t=0;t<d.length-1;t++){let r=d[Math.max(0,t-1)],a=d[t],l=d[t+1],i=d[Math.min(d.length-1,t+2)],f=Math.max(2,Math.ceil(Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2])/.06));for(let b=0;b<f;b++){let T=b/f,g=T*T,v=g*T;q.push([0,1,2].map(p=>.5*(2*a[p]+(-r[p]+l[p])*T+(2*r[p]-5*a[p]+4*l[p]-i[p])*g+(-r[p]+3*a[p]-3*l[p]+i[p])*v)))}}q.push(d[d.length-1].slice());for(let t of q)t[1]<e&&t[2]>-1.4&&(t[1]=e);A0.path=q;let n=q.findIndex(t=>t[1]<=e*1.01),s=q.findIndex((t,r)=>r>n&&t[0]>M-1.3);A0.run=[n,s]})();var U0={spots:[],w:.36,h:.435,n:55,lines:[{z:H-1.7,y:6.5,sag:1},{z:H-2.6,y:5.3,sag:.8}]},R0=(()=>{let e=[-.62,.75,-.16],h=Math.hypot(...e);return e.map(m=>m/h)})(),Z0=(()=>{let e=M/2;return(e*e+Je*Je)/(2*e)})(),Y0=e=>{let h=e<=M/2?e:M-e;return r0+Math.sqrt(Math.max(0,Z0*Z0-(h-Z0)*(h-Z0)))},_={FLOOR:0,WALL:1,REVEAL:2,GLASS:3,VAULT:4,TRIM:5,VOID:6,TUBE:7,CABLE:8,TILE:9,STEEL:10,PEG:11,CONC:12,CFLOOR:13,DOOR:14};function at(){let e=[],h=[],m=[],d=[],q=[],n={pos:e,nrm:h,kind:m,uv:d,idx:q,v(s,t,r,a){return e.push(s[0]+I[0],s[1]+I[1],s[2]+I[2]),h.push(t[0],t[1],t[2]),m.push(r),d.push(a?a[0]:0,a?a[1]:0),e.length/3-1},quad(s,t,r,a,l,i,f,b,T,g){let v=n.v(s,l,i,f),p=n.v(t,l,i,b),x=n.v(r,l,i,T),z=n.v(a,l,i,g);q.push(v,p,x,v,x,z)},box(s,t,r,a,l,i,f){n.quad([s,t,i],[a,t,i],[a,l,i],[s,l,i],[0,0,1],f),n.quad([a,t,r],[s,t,r],[s,l,r],[a,l,r],[0,0,-1],f),n.quad([a,t,i],[a,t,r],[a,l,r],[a,l,i],[1,0,0],f),n.quad([s,t,r],[s,t,i],[s,l,i],[s,l,r],[-1,0,0],f),n.quad([s,l,i],[a,l,i],[a,l,r],[s,l,r],[0,1,0],f),n.quad([s,t,r],[a,t,r],[a,t,i],[s,t,i],[0,-1,0],f)},cyl(s,t,r,a,l,i,f){f=f||18;for(let b=0;b<f;b++){let T=b/f*Math.PI*2,g=(b+1)/f*Math.PI*2,v=[Math.sin(T),0,Math.cos(T)],p=[Math.sin(g),0,Math.cos(g)],x=(A,N)=>[s+A[0]*r,N,t+A[2]*r],z=n.v(x(v,a),v,i),R=n.v(x(p,a),p,i),y=n.v(x(p,l),p,i),S=n.v(x(v,l),v,i);q.push(z,R,y,z,y,S)}}};return n}function T0(e,h,m,d,q){let n=null,s=null,t=[];for(let r=0;r<h.length;r++){let a=h[Math.max(0,r-1)],l=h[Math.min(h.length-1,r+1)],i=[l[0]-a[0],l[1]-a[1],l[2]-a[2]],f=Math.hypot(...i)||1;i=i.map(p=>p/f),s||(s=Math.abs(i[1])<.9?[0,1,0]:[1,0,0]);let b=s[0]*i[0]+s[1]*i[1]+s[2]*i[2];s=[s[0]-i[0]*b,s[1]-i[1]*b,s[2]-i[2]*b];let T=Math.hypot(...s)||1;s=s.map(p=>p/T);let g=[i[1]*s[2]-i[2]*s[1],i[2]*s[0]-i[0]*s[2],i[0]*s[1]-i[1]*s[0]],v=[];for(let p=0;p<d;p++){let x=p/d*Math.PI*2,z=Math.cos(x),R=Math.sin(x),y=[s[0]*z+g[0]*R,s[1]*z+g[1]*R,s[2]*z+g[2]*R];v.push(e.v([h[r][0]+y[0]*m,h[r][1]+y[1]*m,h[r][2]+y[2]*m],y,q,[r,p]))}if(n)for(let p=0;p<d;p++){let x=(p+1)%d;e.idx.push(n[p],n[x],v[x],n[p],v[x],v[p])}n=v,t.push(v)}}var rt=(e,h)=>[e[0]+((e[5]===void 0?e[0]:e[5])-e[0])*h,e[1]-e[4]*4*h*(1-h),e[2]+.35+(e[3]-e[2]-.7)*h];function et(e,h,m){let d=[[-e,h],[-e,m]],q=2*e,n=14;for(let s=1;s<=n;s++){let t=Math.PI-s/n*(Math.PI/3);d.push([e+q*Math.cos(t),m+q*Math.sin(t)])}for(let s=1;s<=n;s++){let t=Math.PI/3-s/n*(Math.PI/3);d.push([-e+q*Math.cos(t),m+q*Math.sin(t)])}return d.push([e,h]),d}function tt(e,h,m,d,q,n,s){let t=q?h.length:h.length-1;for(let r=0;r<t;r++){let a=h[r],l=h[(r+1)%h.length],i=l[0]-a[0],b=-(l[1]-a[1]),T=i,g=Math.hypot(b,T)||1;b/=g,T/=g;let v=(a[0]+l[0])/2-s[0],p=(a[1]+l[1])/2-s[1];b*v+T*p>0&&(b=-b,T=-T);let x=d(b,T,0,!0);e.quad(d(a[0],a[1],0),d(l[0],l[1],0),d(l[0],l[1],m),d(a[0],a[1],m),x,n,[a[0],a[1]],[l[0],l[1]],[l[0],l[1]],[a[0],a[1]])}}function Rt(){let e=at();e.quad([0,0,0],[0,0,H],[M,0,H],[M,0,0],[0,1,0],_.FLOOR),e.quad([0,0,H],[0,0,0],[0,r0,0],[0,r0,H],[1,0,0],_.WALL,[H,0],[0,0],[0,r0],[H,r0]),e.quad([M,0,0],[M,0,H],[M,r0,H],[M,r0,0],[-1,0,0],_.WALL,[0,0],[H,0],[H,r0],[0,r0]);let h=24;for(let n of[0,1]){let s=n?H:0,t=[0,0,n?-1:1];for(let r=0;r<h;r++){let a=r/h*M,l=(r+1)/h*M,i=[a,0,s],f=[l,0,s],b=[l,Y0(l),s],T=[a,Y0(a),s];n?e.quad(f,i,T,b,t,_.WALL,[l,0],[a,0],[a,T[1]],[l,b[1]]):e.quad(i,f,b,T,t,_.WALL,[a,0],[l,0],[l,b[1]],[a,T[1]])}}let m=40;for(let n=0;n<m;n++){let s=n/m*M,t=(n+1)/m*M,r=Y0(s),a=Y0(t),l=(p,x)=>{let z=p<=M/2?p:M-p,R=(Z0-z)/Z0,y=(r0-x)/Z0;return p>M/2&&(R=-R),[R,y,0]},i=l(s,r),f=l(t,a),b=e.v([s,r,0],i,_.VAULT,[s,0]),T=e.v([t,a,0],f,_.VAULT,[t,0]),g=e.v([t,a,H],f,_.VAULT,[t,H]),v=e.v([s,r,H],i,_.VAULT,[s,H]);e.idx.push(b,T,g,b,g,v)}let d=et(P.hw,P.sill,P.spring),q=et(P.hw,P.lowSill,P.spring);for(let n=0;n<P.n;n++){let s=n===0?P.lowSill:P.sill,t=be(n),r=n>=P.leftFrom;r&&tt(e,d,we,(T,g,v,p)=>p?[0,g,T]:[-v,g,t+T],!0,_.REVEAL,[0,(P.sill+P.apex)/2]),tt(e,n===0?q:d,we,(T,g,v,p)=>p?[0,g,T]:[M+v,g,t+T],!0,_.REVEAL,[0,(s+P.apex)/2]);let a=we*.55,l=P.sill-.02,i=P.apex+.02,f=P.hw+.02;r&&e.quad([-a,l,t+f],[-a,l,t-f],[-a,i,t-f],[-a,i,t+f],[1,0,0],_.GLASS,[f,l],[-f,l],[-f,i],[f,i]);let b=s-.02;e.quad([M+a,b,t-f],[M+a,b,t+f],[M+a,i,t+f],[M+a,i,t-f],[-1,0,0],_.GLASS,[-f,b],[f,b],[f,i],[-f,i]),r&&e.box(-.02,P.sill-.12,t-P.hw-.18,.12,P.sill,t+P.hw+.18,_.TRIM),e.box(M-.12,s-(n===0?.05:.12),t-P.hw-.18,M+.02,s,t+P.hw+.18,_.TRIM)}{let n=M/2-g0.hw,s=M/2+g0.hw,t=g0.h,r=g0.depth;e.quad([n,0,-r],[n,0,0],[n,t,0],[n,t,-r],[1,0,0],_.REVEAL),e.quad([s,0,0],[s,0,-r],[s,t,-r],[s,t,0],[-1,0,0],_.REVEAL),e.quad([n,t,0],[s,t,0],[s,t,-r],[n,t,-r],[0,-1,0],_.REVEAL),e.quad([n,.001,-r],[s,.001,-r],[s,.001,0],[n,.001,0],[0,1,0],_.CFLOOR);let a=M/2-I0.hw,l=M/2+I0.hw,i=I0.h,f=I0.z;e.quad([a,0,f],[a,0,-r],[l,0,-r],[l,0,f],[0,1,0],_.CFLOOR),e.quad([a,0,-r],[a,0,f],[a,i,f],[a,i,-r],[1,0,0],_.CONC,[-r,0],[f,0],[f,i],[-r,i]),e.quad([l,0,f],[l,0,-r],[l,i,-r],[l,i,f],[-1,0,0],_.CONC,[f,0],[-r,0],[-r,i],[f,i]),e.quad([a,i,f],[a,i,-r],[l,i,-r],[l,i,f],[0,-1,0],_.CONC,[f,0],[-r,0],[-r,1],[f,1]),e.quad([l,0,f],[a,0,f],[a,i,f],[l,i,f],[0,0,1],_.CONC,[0,0],[1,0],[1,i],[0,i]);let b=-r;e.quad([a,0,b],[n,0,b],[n,i,b],[a,i,b],[0,0,-1],_.CONC,[a,0],[n,0],[n,i],[a,i]),e.quad([s,0,b],[l,0,b],[l,i,b],[s,i,b],[0,0,-1],_.CONC,[s,0],[l,0],[l,i],[s,i]),e.quad([n,t,b],[s,t,b],[s,i,b],[n,i,b],[0,0,-1],_.CONC,[n,t],[s,t],[s,i],[n,i]);let T=n,g=b-.01,v=I0.open,p=g0.hw*2-.04,x=.045,z=[Math.cos(v),0,-Math.sin(v)],R=[Math.sin(v),0,Math.cos(v)],y=(G,F,n0)=>[T+z[0]*G+R[0]*n0,F,g+z[2]*G+R[2]*n0],S=.012,A=t-.02;e.quad(y(0,S,x),y(p,S,x),y(p,A,x),y(0,A,x),R,_.DOOR),e.quad(y(p,S,0),y(0,S,0),y(0,A,0),y(p,A,0),R.map(G=>-G),_.DOOR),e.quad(y(p,S,x),y(p,S,0),y(p,A,0),y(p,A,x),z,_.DOOR),e.quad(y(0,A,x),y(p,A,x),y(p,A,0),y(0,A,0),[0,1,0],_.DOOR);let N=y(p-.09,1.02,x+.03);T0(e,[y(p-.09,1.02,x),N,[N[0]-z[0]*.12,N[1],N[2]-z[2]*.12]],.011,6,_.STEEL);let C=I0.sign;e.box(C[0]-.33,C[1]-.12,C[2]-.02,C[0]+.33,C[1]+.12,b,_.TRIM)}for(let n of U){for(let a of[.2,M-.2])e.box(a-.42,0,n-.42,a+.42,.5,n+.42,_.TRIM),e.cyl(a,n,.27,.5,r0-.55,_.TRIM),e.cyl(a+(a<M/2?.2:-.2),n-.36,.1,.5,r0-.55,_.TRIM,10),e.cyl(a+(a<M/2?.2:-.2),n+.36,.1,.5,r0-.55,_.TRIM,10),e.box(a-.45,r0-.55,n-.5,a+.45,r0-.25,n+.5,_.TRIM);let s=40,t=.22,r=.22;for(let a=0;a<s;a++){let l=a/s*M,i=(a+1)/s*M,f=Y0(l),b=Y0(i),T=[M/2-l,-(f-r0+2),0],g=[M/2-i,-(b-r0+2),0],v=y=>{let S=Math.hypot(y[0],y[1])||1;return[y[0]/S,y[1]/S,0]},p=v(T),x=v(g),z=[l+p[0]*r,f+p[1]*r],R=[i+x[0]*r,b+x[1]*r];e.quad([z[0],z[1],n-t],[R[0],R[1],n-t],[R[0],R[1],n+t],[z[0],z[1],n+t],p,_.TRIM),e.quad([l,f,n-t],[i,b,n-t],[R[0],R[1],n-t],[z[0],z[1],n-t],[0,0,-1],_.TRIM),e.quad([i,b,n+t],[l,f,n+t],[z[0],z[1],n+t],[R[0],R[1],n+t],[0,0,1],_.TRIM)}}{let n=D,s=n.top,t=n.basin,r=(g,v,p)=>{if(e.box(0,0,g,n.depth-.06,.12,v,_.TRIM),e.quad([n.depth,.12,g],[n.depth,.12,v],[n.depth,s,v],[n.depth,s,g],[1,0,0],_.TILE,[g,.12],[v,.12],[v,s],[g,s]),e.quad([0,.12,g],[n.depth,.12,g],[n.depth,s,g],[0,s,g],[0,0,-1],_.TILE,[0,.12],[n.depth,.12],[n.depth,s],[0,s]),e.quad([n.depth,.12,v],[0,.12,v],[0,s,v],[n.depth,s,v],[0,0,1],_.TILE,[n.depth,.12],[0,.12],[0,s],[n.depth,s]),!p){e.quad([0,s,g],[0,s,v],[n.depth,s,v],[n.depth,s,g],[0,1,0],_.TILE,[0,g],[0,v],[n.depth,v],[n.depth,g]);return}let x=(z,R,y,S)=>e.quad([z,s,y],[z,s,S],[R,s,S],[R,s,y],[0,1,0],_.TILE,[z,y],[z,S],[R,S],[R,y]);x(0,t.x0,g,v),x(t.x1,n.depth,g,v),x(t.x0,t.x1,g,t.z0),x(t.x0,t.x1,t.z1,v),e.quad([t.x0,t.floor,t.z0],[t.x0,t.floor,t.z1],[t.x1,t.floor,t.z1],[t.x1,t.floor,t.z0],[0,1,0],_.TILE,[t.x0,t.z0],[t.x0,t.z1],[t.x1,t.z1],[t.x1,t.z0]),e.quad([t.x0,t.floor,t.z1],[t.x0,t.floor,t.z0],[t.x0,s,t.z0],[t.x0,s,t.z1],[1,0,0],_.TILE,[t.z1,t.floor],[t.z0,t.floor],[t.z0,s],[t.z1,s]),e.quad([t.x1,t.floor,t.z0],[t.x1,t.floor,t.z1],[t.x1,s,t.z1],[t.x1,s,t.z0],[-1,0,0],_.TILE,[t.z0,t.floor],[t.z1,t.floor],[t.z1,s],[t.z0,s]),e.quad([t.x0,t.floor,t.z0],[t.x1,t.floor,t.z0],[t.x1,s,t.z0],[t.x0,s,t.z0],[0,0,1],_.TILE,[t.x0,t.floor],[t.x1,t.floor],[t.x1,s],[t.x0,s]),e.quad([t.x1,t.floor,t.z1],[t.x0,t.floor,t.z1],[t.x0,s,t.z1],[t.x1,s,t.z1],[0,0,-1],_.TILE,[t.x1,t.floor],[t.x0,t.floor],[t.x0,s],[t.x1,s])};r(n.a[0],n.a[1],!0),r(n.b[0],n.b[1],!1);for(let[g,v]of[n.a,n.b])e.quad([.012,s,v],[.012,s,g],[.012,s+.62,g],[.012,s+.62,v],[1,0,0],_.TILE,[v,s],[g,s],[g,s+.62],[v,s+.62]);let a=g=>{let v=t.floor+.004,p=v+n.TH,x=n.TX/2,z=n.TZ/2,R=.02,y=n.TXc,S=[[y-x+R,g-z+R],[y+x-R,g-z+R],[y+x-R,g+z-R],[y-x+R,g+z-R]],A=[[y-x,g-z],[y+x,g-z],[y+x,g+z],[y-x,g+z]];e.quad([S[0][0],v,S[0][1]],[S[3][0],v,S[3][1]],[S[2][0],v,S[2][1]],[S[1][0],v,S[1][1]],[0,1,0],_.STEEL);for(let N=0;N<4;N++){let C=(N+1)%4,G=[S[N][0],v,S[N][1]],F=[S[C][0],v,S[C][1]],n0=[A[C][0],p,A[C][1]],d0=[A[N][0],p,A[N][1]],B=(S[N][0]+S[C][0])/2-y,c0=(S[N][1]+S[C][1])/2-g,Q=Math.hypot(B,c0)||1;e.quad(G,F,n0,d0,[-B/Q*.95,.3,-c0/Q*.95],_.STEEL),e.quad(F,G,[d0[0],v+.001,d0[2]],[n0[0],v+.001,n0[2]],[B/Q,0,c0/Q],_.STEEL)}T0(e,[...A,A[0]].map(N=>[N[0],p+.004,N[1]]),.005,5,_.STEEL)};for(let g of n.trays)a(g);let l=(g,v,p,x,z,R)=>{for(let y of[-.012,.012])T0(e,[[g,z,v+y],[(g+p)/2,(z+R)/2+.006,(v+x)/2+y*.6],[p,R,x+y*.2]],.0045,5,_.PEG)};l(n.TXc+.05,n.trays[0]+.12,n.TXc+.27,n.trays[0]+.42,n.liquid-.005,n.top+.03),l(n.TXc-.1,n.trays[2]-.2,n.TXc+.24,n.trays[2]-.05,n.liquid+.002,n.liquid+n.TH*.9);let i=t.z1-.3;T0(e,[[0,1.32,i],[.18,1.32,i],[.27,1.3,i],[.32,1.22,i],[.33,1.12,i]],.016,8,_.STEEL),e.box(0,1.27,i-.05,.05,1.37,i+.05,_.STEEL);let f=D.bulb;T0(e,[[0,2.32,f[2]],[f[0]*.6,2.32,f[2]],[f[0],2.28,f[2]]],.012,6,_.TRIM),e.box(0,2.24,f[2]-.06,.03,2.4,f[2]+.06,_.TRIM),T0(e,[[f[0],2.28,f[2]],[f[0]+.004,1.9,f[2]+.003],[f[0],f[1]+.2,f[2]]],.004,5,_.CABLE);{let g=e0.vase,v=e0.top,p=[[.045,0],[.07,.03],[.08,.09],[.072,.15],[.05,.2],[.042,.225],[.05,g.h]],x=24;for(let z=0;z<p.length-1;z++){let[R,y]=p[z],[S,A]=p[z+1];for(let N=0;N<x;N++){let C=N/x*Math.PI*2,G=(N+1)/x*Math.PI*2,F=(B,c0,Q)=>[g.x+Math.cos(Q)*B,v+c0,g.z+Math.sin(Q)*B],n0=B=>{let c0=S-R,Q=A-y,K=Math.hypot(c0,Q);return[Math.cos(B)*Q/K,-c0/K,Math.sin(B)*Q/K]},d0=(C+G)/2;e.quad(F(R,y,C),F(R,y,G),F(S,A,G),F(S,A,C),n0(d0),_.TRIM)}}}let b=D.shelf;e.box(0,b.y-.03,b.z0,b.d,b.y,b.z1,_.TRIM);for(let g of[b.z0+.08,b.z1-.08])e.box(0,b.y-.2,g-.012,.022,b.y-.03,g+.012,_.TRIM),e.box(0,b.y-.06,g-.012,b.d*.7,b.y-.03,g+.012,_.TRIM);let T=D.tube;T0(e,[[T.x+.02,T.y,T.z0],[T.x+.02,T.y,(T.z0+T.z1)/2],[T.x+.02,T.y,T.z1]],.035,10,_.TUBE),e.box(0,T.y-.05,T.z0-.06,.07,T.y+.05,T.z0-.01,_.TRIM),e.box(0,T.y-.05,T.z1+.01,.07,T.y+.05,T.z1+.06,_.TRIM);for(let g of D.lines){let v=[];for(let p=0;p<=24;p++){let x=p/24;v.push(rt(g,x))}T0(e,v,.0035,5,_.CABLE);for(let p of[v[0],v[24]])T0(e,[[0,p[1]+.05,p[2]],[p[0]*.5,p[1]+.02,p[2]],[p[0]+.02,p[1],p[2]]],.007,5,_.TRIM)}}X.stack.forEach((n,s)=>{let t=X.models[n[0]],r=X.G,a=M/2+n[2],l=X.z+n[4]+t.d*r*.85,i=n.base+.12*r,f=M/2+(s%3-1)*.5,b=X.z+2.3+s%4*.12;T0(e,[[a,i,l-.05],[a+.05,i-.02,l+.15],[a+.1,Math.max(.02,i*.4),l+.35],[a*.6+f*.4,.018,l+.6],[f,.018,b]],.012,6,_.CABLE)}),T0(e,A0.path,A0.r,16,_.CABLE);{let[n,s,t]=A0.socket;e.box(n,s-.07,t-.07,n+.018,s+.07,t+.07,_.STEEL),e.box(n+.018,s-.035,t-.032,n+.11,s+.035,t+.032,_.TRIM),e.box(n,s+.042,t+.035,n+.03,s+.058,t+.051,_.TUBE)}e.box(l0.x0-.08,l0.y-.07,H-.08,l0.x0-.02,l0.y+.07,H,_.TRIM),e.box(l0.x1+.02,l0.y-.07,H-.08,l0.x1+.08,l0.y+.07,H,_.TRIM),T0(e,[[l0.x0-.02,l0.y,l0.z],[(l0.x0+l0.x1)/2,l0.y,l0.z],[l0.x1+.02,l0.y,l0.z]],.045,10,_.TUBE);for(let n of[0,1]){let s=n?M-.06:0,t=n?M:.06;e.box(s,0,0,t,.24,H,_.TRIM),e.box(n?M-.05:0,1,0,n?M:.05,1.08,H,_.TRIM);let r=n?M-.32:0,a=n?M:.32;e.box(r,r0-.25,0,a,r0+.08,H,_.TRIM)}for(let n of[0,1]){let s=n?H-.06:0,t=n?H:.06;n?e.box(0,0,s,M,.24,t,_.TRIM):(e.box(0,0,s,M/2-g0.hw,.24,t,_.TRIM),e.box(M/2+g0.hw,0,s,M,.24,t,_.TRIM));let r=n?H-.32:0,a=n?H:.32;e.box(0,r0-.25,r,M,r0+.08,a,_.TRIM)}return e}function St(){let e=7,h=0,m=()=>(h++*23+5)%U0.n,d=()=>(e=e*16807%2147483647,(e-1)/2147483646),q=[],n=[],s=[],t=[],r=[],a=[],l=[],i=3,f=4,b=(R,y,S,A,N,C,G,F,n0)=>{let d0=U0.w*N,B=U0.h*N,c0=q.length/3;for(let Q=0;Q<=f;Q++)for(let K=0;K<=i;K++){let u=K/i,E=Q/f,V=(u-.5)*d0,h0=(E-.5)*B,y0=F*((u-.5)*(u-.5)*4+(1-E)*(1-E)*.6);q.push(I[0]+R[0]+y[0]*V+S[0]*h0+A[0]*y0,I[1]+R[1]+y[1]*V+S[1]*h0+A[1]*y0,I[2]+R[2]+y[2]*V+S[2]*h0+A[2]*y0),n.push(A[0],A[1],A[2]),s.push(u,E),t.push(C),l.push(n0||0),r.push(G[0]+I[0],G[1]+I[1],G[2]+I[2],G[3])}for(let Q=0;Q<f;Q++)for(let K=0;K<i;K++){let u=c0+Q*(i+1)+K,E=u+1,V=u+i+1,h0=V+1;a.push(u,E,h0,u,h0,V)}},T=(R,y,S)=>{let A=Math.cos(S),N=Math.sin(S);return[R.map((C,G)=>C*A+y[G]*N),y.map((C,G)=>-R[G]*N+C*A)]},g=[0,0,0,0],v=0,p=(R,y,S,A,N,C,G,F,n0)=>{let c0=0;for(let Q=C;Q<G;Q+=.48)for(let K=A;K<N;K+=.4){let u=K+(d()-.5)*.4*.7,E=Q+(d()-.5)*.48*.6;if(d()>F(u,E))continue;let[V,h0]=T(S,[0,1,0],(d()-.5)*.5),y0=R(u,E,.012+.0016*(c0++%9)+d()*.004),H0=.88+d()*.3;b(y0,V,h0,y,H0,m(),g,(d()-.3)*.02),U0.spots.length<400&&U0.spots.push({c:y0,n:y,up:h0,size:U0.h*H0}),v++}},x=(R,y,S)=>Math.exp(-Math.pow((R-y)/S,2));for(let R=0;R<P.n-1;R++){let y=U[R+1],S=[[be(R)+P.hw+.32,y-.66],[y+.66,be(R+1)-P.hw-.32]];for(let[A,N]of S){let C=(G,F)=>.85*x(F,3.4,1.7);N>D.b[1]+.3&&p((G,F,n0)=>[n0,F,G],[1,0,0],[0,0,-1],A,N,1.45,6.3,C),p((G,F,n0)=>[M-n0,F,G],[-1,0,0],[0,0,1],A,N,1.45,6.3,C)}}let z=[];for(let R of D.lines){let y=R[3]-R[2]-.7;for(let S=.18;S<y-.1;S+=.3+d()*.14){let A=S/y,N=rt(R,A);if(d()<.1||Math.abs(N[2]-D.bulb[2])<.4&&N[1]>2.3)continue;let C=.56+d()*.14,G=U0.h*C,F=(d()-.5)*.7,n0=d()<.3?d()<.5?-.75:.75:F,[d0,B]=T([0,0,-1],[0,1,0],n0),c0=[1,0,0],Q=[N[0]+.004,N[1]-.02-B[1]*G*.5,N[2]-B[2]*G*.5];b(Q,d0,B,c0,C,m(),[N[0],N[1],N[2],-(.04+d()*.06)],.01+d()*.025,1),z.push(N),v++}}{let[R,y]=e0.stack,S=[0,1,0];for(let N=0;N<9;N++){let C=(d()-.5)*.35+.3;b([R+(d()-.5)*.012,e0.top+.003+N*.0022,y+(d()-.5)*.012],[Math.cos(C),0,Math.sin(C)],[Math.sin(C),0,-Math.cos(C)],S,.26,m(),g,.004),v++}[[.13,.12,.9],[-.04,.2,-.4],[.2,-.05,1.6]].forEach(([N,C,G],F)=>{b([R+N,e0.top+.002+F*.0012,y+C],[Math.cos(G),0,Math.sin(G)],[Math.sin(G),0,-Math.cos(G)],S,.26,m(),g,.006),v++})}return{pos:q,nrm:n,uv:s,pic:t,piv:r,idx:a,sty:l,pegs:z,count:v}}var E0=`
	const float RW = ${c(M)}, RL = ${c(H)}, RH = ${c(r0)}, RT = ${c(we)};
	const float HW = ${c(P.hw)}, SILL = ${c(P.sill)}, SPRING = ${c(P.spring)};
	const float WZ0 = ${c(P.z0)}, WSTEP = ${c(P.step)};
	const vec3 RO = vec3(${c(I[0])}, ${c(I[1])}, ${c(I[2])});
	const vec3 LDIR_L = vec3(${c(R0[0])}, ${c(R0[1])}, ${c(R0[2])});
	const vec3 LDIR_R = vec3(${c(-R0[0])}, ${c(R0[1])}, ${c(R0[2])});

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
	float winIdx(float z) { return clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${c(P.n-1)}); }
	// (on the left, the first windows are walled up)
	float leftOpen(float z) { return step(${c(P.leftFrom-.5)}, winIdx(z)); }
	vec2 winLocal(float z, float y) {
		float i = clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${c(P.n-1)});
		return vec2(z - (WZ0 + WSTEP * i), y);
	}
	// (on the right, the first window comes down to the table: its height
	// below the springing is stretched onto the others' shape)
	const float LSILL = ${c(P.lowSill)};
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
	#define STUDIO_SUN ${"vec3("+c(R0[0])+", "+c(R0[1])+", "+c(R0[2])+")"}
	#define STUDIO_SUN2 ${"vec3("+c(-R0[0])+", "+c(R0[1])+", "+c(R0[2])+")"}
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
	}`,ne=`
	// the televisions' flicker, thrown on whatever is in front of them
	uniform vec4 tvLight;
	vec3 tvGlow(vec3 lp, vec3 N) {
		vec3 d = vec3(${c(M/2)}, 1.35, ${c(X.z-.9)}) - lp;
		float dd = dot(d, d);
		float face = 0.35 + 0.65 * max(0.0, dot(N, normalize(d)));
		// (only in front of them: the stack's own back is in its shadow)
		float front = smoothstep(${c(X.z+.6)}, ${c(X.z-.2)}, lp.z);
		return tvLight.rgb * face * front / (1.0 + dd * 0.55);
	}
	// THE FILM: his memories as an old print would show them, drained to
	// a warm grey, flickering, weaving in the gate, grained, scratched,
	// specked with dust, burnt at its edges; a new memory every few seconds,
	// with a flash of bare light between
	uniform sampler2D memTex;
	uniform float projT, memRot;
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
			pc += texture2D(memTex, (tile + vec2(clamp(su.x + o.x, 0.005, 0.995), 1.0 - clamp(su.y + o.y, 0.005, 0.995))) / 8.0).rgb * (i == 0 ? 0.4 : 0.15);
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
		vec3 L0 = vec3(${c($.lens[0])}, ${c($.lens[1])}, ${c($.lens[2])});
		vec3 d = lp - L0;
		float s = (${c(H-.005)} - L0.z) / max(d.z, 1e-4);
		vec3 h = L0 + d * s;
		return vec3(1.0 - (h.x - ${c($.img.x-$.img.w/2)}) / ${c($.img.w)}, (h.y - ${c($.img.y-$.img.h/2)}) / ${c($.img.h)}, 1.0 / s);
	}
	// the televisions stand in the beam's way: their shadows on the picture
	uniform vec3 tvLo[12], tvHi[12];
	float projShadow(vec3 lp) {
		vec3 L0 = vec3(${c($.lens[0])}, ${c($.lens[1])}, ${c($.lens[2])});
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
		vec3 c = vec3(clamp(lp.x, ${c(l0.x0)}, ${c(l0.x1)}), ${c(l0.y)}, ${c(l0.z)});
		vec3 d = c - lp;
		float dd = dot(d, d);
		float face = 0.25 + 0.75 * max(0.0, dot(N, normalize(d)));
		return vec3(1.0, 0.06, 0.045) * 2.6 * face / (1.0 + dd * 0.055);
	}
	// the darkroom: the bare red bulb over the trays, the tube over the lines
	vec3 darkLight(vec3 lp, vec3 N) {
		vec3 d = vec3(${c(D.bulb[0])}, ${c(D.bulb[1])}, ${c(D.bulb[2])}) - lp;
		float dd = dot(d, d);
		vec3 c = vec3(1.0, 0.07, 0.04) * 1.15 * (0.2 + 0.8 * max(0.0, dot(N, normalize(d)))) / (0.02 + dd * 2.2);
		vec3 tq = vec3(${c(D.tube.x+.02)}, ${c(D.tube.y)}, clamp(lp.z, ${c(D.tube.z0)}, ${c(D.tube.z1)}));
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
		vec3 Ls = vec3(${c(M/2)}, 1.25, 1.6);
		vec3 d = lp - Ls;
		float t = (${c(-g0.depth)} - Ls.z) / d.z;
		vec3 h = Ls + d * t;
		float m = smoothstep(0.08, -0.05, abs(h.x - ${c(M/2)}) - ${c(g0.hw)}) * smoothstep(0.08, -0.05, h.y - ${c(g0.h)}) * step(0.0, h.y);
		float dd = dot(d, d);
		vec3 Ld = -normalize(d);
		vec3 c = vec3(1.0, 0.07, 0.05) * 26.0 * m * (0.15 + 0.85 * max(0.0, dot(N, Ld))) / (1.0 + dd * 0.55);
		vec3 sd = vec3(${c(I0.sign[0])}, ${c(I0.sign[1])}, ${c(I0.sign[2])}) - lp;
		c += vec3(1.0, 0.12, 0.1) * signK * 0.5 * (0.2 + 0.8 * max(0.0, dot(N, normalize(sd)))) / (0.05 + dot(sd, sd) * 3.0);
		return c;
	}
	uniform float spotK;
	const vec3 SPOTP = vec3(${c(o0.pos[0])}, ${c(o0.pos[1])}, ${c(o0.pos[2])});
	const vec3 SPOTA = vec3(${c(o0.axis[0])}, ${c(o0.axis[1])}, ${c(o0.axis[2])});
	const float SPOT_CI = ${c(Math.cos(o0.inner))}, SPOT_CO = ${c(Math.cos(o0.outer))};
	// her shape in the spot's light: soft round blockers, her shadow
	float spotShade(vec3 lp, vec3 L, float len) {
		float sh = 1.0;
		${i0.occ.map(e=>`{
			vec3 C = vec3(${c(e[0])}, ${c(e[1])}, ${c(e[2])}) - lp;
			float t = dot(C, L);
			float r = ${c(e[3])};
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
		${e0.occ.map(e=>`{
			vec3 C = vec3(${c(e[0])}, ${c(e[1])}, ${c(e[2])}) - lp;
			float t = dot(C, dir);
			float cd = length(C - dir * t);
			float r = ${c(e[3])};
			if (t > 0.0 && t < len && dot(C, C) > r * r * 1.1) sh *= mix(1.0, smoothstep(r * 0.35, r * (1.0 + 2.5 * t / len), cd), 0.9);
		}`).join(`
`)}
		return sh;
	}
	// the candles on the table: a warm, breathing light close round them
	vec3 candleLight(vec3 lp, vec3 N) {
		vec3 sum = vec3(0.0);
		${e0.flames.map((e,h)=>`{
			vec3 d = vec3(${c(e[0])}, ${c(e[1])}, ${c(e[2])}) - lp;
 			float r2 = dot(d, d);
			float sh = candleShade(lp, d);
			float fl = 0.82 + 0.1 * sin(time * (9.0 + ${c(h*1.7)}) + ${c(h*2.1)}) * sin(time * 3.3 + ${c(h)}) + 0.08 * sin(time * 23.0 + ${c(h*4)});
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

	const float DHW = ${c(g0.hw)}, DH = ${c(g0.h)};

	${ne}

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
				vec3 bd = normalize(vec3(${c(D.bulb[0])}, ${c(D.bulb[1])}, ${c(D.bulb[2])}) - lp);
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
				if (k == 0 && lp.z > ${c(X.z-1.5)}) {
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
	uniform float time, sigTime, yScale, seed, dark, nMem, emit, order, warnS, warnN, glitchK, slot;
	uniform sampler2D letterTex;
	uniform sampler2D bodyTex;
	varying vec3 v_pos, v_nrm, v_eye;
	varying vec2 v_uv;
	varying float v_flag;
	${E0}
	${ne}

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
				vec3 Lp = normalize(vec3(${c($.lens[0])}, ${c($.lens[1])}, ${c($.lens[2])}) - lp);
				lit += film(vec2(0.5)) * 1.4 * max(0.0, dot(N, Lp)) * (0.7 + 0.3 * rnoise(v_uv * 40.0));
			}
			if (emit < 0.0) {
				// cloth: a fine weave and soft folds instead of a smooth
				// cast surface; the spot wraps round it
				float wv = rnoise(v_pos.xy * 260.0 + v_pos.z * 90.0) * 0.6 + rnoise(v_pos.zy * 70.0) * 0.4;
				alb *= 0.78 + 0.4 * wv;
				vec3 Ls; float ks = spotAt(lp, Ls);
				lit += vec3(1.0, 0.9, 0.78) * ks * max(0.0, dot(N, Ls) * 0.6 + 0.4) * 0.35;
				// the bentwood chair's red lacquer: warmed towards a deep
				// red-orange in the spot, with a soft gleam along its bends
				float lac = smoothstep(1.4, 2.2, alb.r / max(alb.g, 0.002)) * smoothstep(0.0015, 0.008, alb.r);
				alb = mix(alb, alb * vec3(2.2, 2.0, 1.2) + vec3(0.06, 0.012, 0.004), lac);
				lit += vec3(1.0, 0.85, 0.7) * ks * max(0.0, dot(N, Ls)) * 1.2 * lac;
				col = vec3(0.0) + pow(max(0.0, dot(N, normalize(Ls + V))), 20.0) * ks * 0.12 * lac * vec3(1.0, 0.7, 0.5);
			}
			col = (emit < 0.0 ? col : vec3(0.0)) + alb * (amb + lit) + spotSheen(lp, N, V);
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
	${ne}
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
	${ne}
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
	${ne}
	const vec3 BULB = vec3(${c(D.bulb[0])}, ${c(D.bulb[1])}, ${c(D.bulb[2])});
	void main() {
		vec3 lp = v_pos - RO;
		int k = int(v_tray + 0.5);
		float zc = k == 0 ? ${c(D.trays[0])} : (k == 1 ? ${c(D.trays[1])} : ${c(D.trays[2])});
		vec2 tl = vec2(lp.x - ${c(D.TXc)}, lp.z - zc);
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
		vec3 L0 = vec3(${c($.lens[0])}, ${c($.lens[1])}, ${c($.lens[2])});
		vec3 dd = lp - L0;
		float s = (${c(H)} - L0.z) / max(dd.z, 1e-4);
		vec3 hh = L0 + dd * s;
		vec2 pu = vec2((hh.x - ${c($.img.x-$.img.w/2)}) / ${c($.img.w)}, (hh.y - ${c($.img.y-$.img.h/2)}) / ${c($.img.h)});
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
	}`;$e.exports=function(e){let h=Rt(),m={position:e.buffer(h.pos),normal:e.buffer(h.nrm),kind:e.buffer(h.kind),uv:e.buffer(h.uv)},d=e.elements({data:h.idx.length>65535?new Uint32Array(h.idx):new Uint16Array(h.idx),type:h.idx.length>65535?"uint32":"uint16"}),q=e.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),n=e.framebuffer({color:q,depth:!0}),s=e({framebuffer:n}),t=e.texture({width:1,height:1,data:[0,0,0,255]}),r=e({}),a=t,l=0,i=0,f=!1,b=[4,4],T=[0,0,0,0],g=null,v=e.texture({width:1,height:1,data:[0,0,0,255]}),p=1,x=o=>{let w=W=>{let Y=Math.sin(W*127.1)*43758.5453;return Y-Math.floor(Y)},L=Math.floor(o*9),k=w(L),O=w(Math.floor(o*.7)),j=.92+.08*Math.sin(o*120);return O>.55&&k>.6&&(j=k>.85?.08:.45),j},z={signK:()=>p,memRot:o=>Math.floor((typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:o.time)/21),memTex:()=>g||v,projT:o=>{let w=typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:o.time;return j0.freeze?(j0.frozenAt===null&&(j0.frozenAt=w),j0.frozenAt):(j0.frozenAt=null,w)},spotK:()=>re.k,warnS:()=>j0.s,warnN:()=>j0.n,glitchK:()=>j0.glitch};X.stack.forEach((o,w)=>{let L=X.models[o[0]],k=X.G;z["tvLo["+w+"]"]=[M/2+o[2]-L.w*k/2,o.base,X.z+o[4]-.02],z["tvHi["+w+"]"]=[M/2+o[2]+L.w*k/2,o.base+L.h*k,X.z+o[4]+L.d*k]});let R=e({vert:ot,frag:nt,attributes:m,elements:d,cull:{enable:!1},uniforms:{reflTex:()=>a,reflSize:()=>b,reflOn:()=>l,tvLight:()=>T,...z}}),y=o=>new Promise((w,L)=>{let k=new Image,O=j=>(j&j-1)===0;k.onload=()=>w(e.texture({data:k,min:O(k.width)&&O(k.height)?"mipmap":"linear",mag:"linear",wrap:"clamp"})),k.onerror=L,k.src=o}),S=X.stack.map((o,w)=>{let[L,,k,O,j]=o,W=Math.PI+O*Math.PI/180,Y=X.G,Z=Math.cos(W)*Y,t0=Math.sin(W)*Y,x0=I[0]+M/2+k,v0=I[1]+o.base,q0=I[2]+X.z+j;return{name:L,seed:(w+1)*.6180339%1,model:[Z,0,-t0,0,0,Y,0,0,t0,0,Z,0,x0,v0,q0,1]}}),A={},N=(()=>{let o=document.createElement("canvas");o.width=160,o.height=20;let w=o.getContext("2d");return w.fillStyle="#000",w.fillRect(0,0,160,20),w.fillStyle="#fff",w.font='bold 19px "Courier New", Courier, monospace',w.textAlign="center",w.textBaseline="middle",Lt.split("").forEach((L,k)=>w.fillText(L,k*16+8,11)),e.texture({data:o,min:"nearest",mag:"nearest",wrap:"clamp"})})(),C=null,F=e({vert:kt,frag:It,attributes:{position:{buffer:e.prop("vb"),stride:36,offset:0},normal:{buffer:e.prop("vb"),stride:36,offset:12},uv:{buffer:e.prop("vb"),stride:36,offset:24},flag:{buffer:e.prop("vb"),stride:36,offset:32}},elements:e.prop("el"),offset:e.prop("offset"),count:e.prop("count"),cull:{enable:!1},uniforms:{model:e.prop("model"),seed:e.prop("seed"),dark:e.prop("dark"),emit:(o,w)=>w.emit||0,order:(o,w)=>w.order===void 0?-1:w.order,slot:(o,w)=>w.slot||0,letterTex:()=>N,bodyTex:e.prop("tex"),...z,memTex:()=>C||v,nMem:55,sigTime:o=>typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:o.time,tvLight:()=>T}});y("res/redroom/memories.webp").then(o=>{C=o,g=o}).catch(o=>console.error("The memories did not load",o));for(let o in X.models){let w=X.models[o],L=[];for(let k=0;k<w.tex;k++)L.push(y("res/redroom/tv_"+o+"_"+k+".webp"));Promise.all([fetch(w.file).then(k=>k.arrayBuffer()),...L]).then(([k,...O])=>{let j=new Uint32Array(k,0,4),W=j[0],Y=j[1],Z=j[2],t0=j[3],x0=new Int32Array(k,16,Z*3),v0=16+Z*12,q0=e.buffer(new Float32Array(k,v0,W*9)),L0=v0+W*36,$0=t0?new Uint32Array(k.slice(L0,L0+Y*4)):new Uint16Array(k.slice(L0,L0+Y*2)),k0=e.elements({data:$0,type:t0?"uint32":"uint16"}),p0=[];for(let M0=0;M0<Z;M0++)p0.push({offset:x0[M0*3],count:x0[M0*3+1],tex:x0[M0*3+2]>=0?O[x0[M0*3+2]]:O[0]});A[o]={vb:q0,el:k0,parts:p0,dark:w.dark}}).catch(k=>console.error("A television did not load",k))}let n0=[],d0=()=>{if(C){n0.length=0;for(let o of S){let w=A[o.name];if(w)for(let L of w.parts)n0.push({vb:w.vb,el:w.el,offset:L.offset,count:L.count,tex:L.tex,model:o.model,seed:o.seed,dark:w.dark,order:X.letters[S.indexOf(o)],slot:S.indexOf(o)})}n0.length&&F(n0)}},B=St(),c0=null;y("res/redroom/polaroids.webp").then(o=>{c0=o}).catch(o=>console.error("The photographs did not load",o));let Q=e({vert:Nt,frag:$t,attributes:{position:B.pos,normal:B.nrm,uv:B.uv,pic:B.pic,style:B.sty,pivot:{buffer:e.buffer(B.piv),size:4}},elements:e.elements({data:new Uint16Array(B.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...z,polTex:()=>c0,tvLight:()=>T}}),K=(o,w)=>Promise.all([fetch(o).then(L=>L.arrayBuffer()),...w.map(y)]).then(([L,...k])=>{let O=new Uint32Array(L,0,4),j=O[0],W=O[1],Y=O[2],Z=O[3],t0=new Int32Array(L,16,Y*3),x0=16+Y*12,v0=x0+j*36,q0=e.buffer(new Float32Array(L,x0,j*9)),L0=Z?new Uint32Array(L.slice(v0,v0+W*4)):new Uint16Array(L.slice(v0,v0+W*2)),$0=e.elements({data:L0,type:Z?"uint32":"uint16"}),k0=[];for(let p0=0;p0<Y;p0++)k0.push({offset:t0[p0*3],count:t0[p0*3+1],tex:k[Math.max(0,t0[p0*3+2])],mat:t0[p0*3+2]});return{vb:q0,el:$0,parts:k0}}),u=(o,w)=>{let L=new Array(16);for(let k=0;k<4;k++)for(let O=0;O<4;O++)L[k*4+O]=o[O]*w[k*4]+o[4+O]*w[k*4+1]+o[8+O]*w[k*4+2]+o[12+O]*w[k*4+3];return L},E=(o,w,L)=>[1,0,0,0,0,1,0,0,0,0,1,0,o,w,L,1],V=o=>{let w=Math.cos(o),L=Math.sin(o);return[1,0,0,0,0,w,L,0,0,-L,w,0,0,0,0,1]},h0=u(E(I[0]+$.x,I[1]+$.table,I[2]+$.z),V(-$.pitch)),y0=$.tableK,H0=[y0,0,0,0,0,y0,0,0,0,0,y0,0,I[0]+M/2,I[1],I[2]+15,1],s0={},f0=["res/redroom/proj_0.webp"];K("res/redroom/proj_body.bin",f0).then(o=>{s0.body=o}).catch(o=>console.error(o)),K("res/redroom/proj_feed.bin",f0).then(o=>{s0.feed=o}).catch(o=>console.error(o)),K("res/redroom/proj_takeup.bin",f0).then(o=>{s0.takeup=o}).catch(o=>console.error(o)),K("res/redroom/table_all.bin",["res/redroom/table_0.webp"]).then(o=>{s0.table=o}).catch(o=>console.error(o));let w0=(o,w)=>u(h0,u(E(o[0],o[1],o[2]),u(V(w),E(-o[0],-o[1],-o[2])))),K0=[],fe=o=>{K0.length=0;let w=(L,k,O)=>{if(L)for(let j of L.parts)K0.push({vb:L.vb,el:L.el,offset:j.offset,count:j.count,tex:j.tex,model:k,seed:0,dark:O})};w(s0.table,H0,.9),w(s0.body,h0,1),w(s0.feed,w0($.feed,-o*2.6),1),w(s0.takeup,w0($.takeup,-o*3.5),1),K0.length&&F(K0)},ee=[],pe=[];{let o=[I[0]+$.lens[0],I[1]+$.lens[1],I[2]+$.lens[2]];[.96,.86,.76,.66,.56,.46,.36].forEach((w,L)=>{let k=$.img.w/2*w,O=$.img.h/2*w,j=[[-k,-O],[k,-O],[k,O],[-k,O]].map(([W,Y])=>[I[0]+$.img.x+W,I[1]+$.img.y+Y,I[2]+H-.02]);for(let W=0;W<4;W++){let Y=j[W],Z=j[(W+1)%4];ee.push(...o,...Y,...Z),pe.push(L,L,L)}})}let Le=e({vert:At,frag:Et,attributes:{position:ee,layer:pe},count:ee.length/3,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{...z,tvLight:()=>T}}),he=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale, pxScale; attribute vec3 position; void main() { vec3 p = position; p.y *= yScale; vec4 v = view * vec4(p, 1.0); gl_Position = proj * v; gl_PointSize = clamp(pxScale * 0.22 / max(0.3, -v.z), 4.0, 220.0); }",frag:"precision highp float; uniform float time; void main() { vec2 d = gl_PointCoord - 0.5; float r = length(d); float a = exp(-r * r * 160.0) * 1.6 + 0.35 * exp(-r * r * 30.0) + 0.12 * exp(-r * r * 8.0) + 0.5 * exp(-d.y * d.y * 2500.0) * exp(-abs(d.x) * 7.0); gl_FragColor = vec4(vec3(1.0, 0.84, 0.62) * a * (0.9 + 0.1 * sin(time * 37.0)), 1.0); }",attributes:{position:[I[0]+$.lens[0],I[1]+$.lens[1],I[2]+$.lens[2]+.01]},count:1,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),F0=null;y("res/redroom/print.webp").then(o=>{F0=o}).catch(o=>console.error(o));let P0=[],te=[];D.trays.forEach((o,w)=>{let L=D.TX/2-.009,k=D.TZ/2-.009,O=D.TXc,j=D.liquid,W=[[O-L,o-k],[O+L,o-k],[O+L,o+k],[O-L,o+k]].map(([Y,Z])=>[I[0]+Y,I[1]+j,I[2]+Z]);P0.push(...W[0],...W[2],...W[1],...W[0],...W[3],...W[2]);for(let Y=0;Y<6;Y++)te.push(w)});let _0=e({vert:Ot,frag:Pt,attributes:{position:P0,tray:te},count:P0.length/3,cull:{enable:!1},uniforms:{...z,tvLight:()=>T,printTex:()=>F0||v,polTex:()=>c0||v}}),N0=at();for(let o of B.pegs)N0.box(o[0]-.008,o[1]-.045,o[2]-.011,o[0]+.008,o[1]+.03,o[2]+.011,_.PEG);let ve=e({vert:ot,frag:nt,attributes:{position:N0.pos,normal:N0.nrm,kind:N0.kind,uv:N0.uv},elements:e.elements({data:new Uint16Array(N0.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...z,reflTex:()=>t,reflSize:[4,4],reflOn:0,tvLight:()=>T}}),de=o=>{let w=Math.cos(o),L=Math.sin(o);return[w,0,-L,0,0,1,0,0,L,0,w,0,0,0,0,1]},a0=(o,w,L,k)=>u(E(I[0]+o,I[1]+w,I[2]+L),de(k||0));K("res/redroom/plastic_all.bin",["res/redroom/plastic_0.webp"]).then(o=>{s0.jug=o}).catch(o=>console.error(o)),K("res/redroom/multi_cleaner_all.bin",["res/redroom/multi_cleaner_0.webp"]).then(o=>{s0.can=o}).catch(o=>console.error(o)),K("res/redroom/pull_all.bin",["res/redroom/pull_0.webp"]).then(o=>{s0.socket=o}).catch(o=>console.error(o)),K("res/redroom/bulb_all.bin",["res/redroom/bulb_0.webp","res/redroom/bulb_1.webp"]).then(o=>{s0.bulb=o}).catch(o=>console.error(o));let D0=D.top,z0=D.b[0],ue=[["jug",a0(.16,D0,z0+.3,.4)],["jug",a0(.17,D0,z0+.52,-.3)],["jug",a0(.36,D0,z0+.4,2.2)],["can",a0(.14,D0,z0+.95,1.57)],["can",a0(.15,D0,z0+1.3,1.45)],["jug",a0(.16,D0,D.b[1]-.35,.9)],["can",a0(.2,D0,D.b[1]-.8,1.7)],["socket",a0(D.bulb[0],D.bulb[1]+.065,D.bulb[2],0)],["bulb",u(a0(D.bulb[0],D.bulb[1]+.048,D.bulb[2],0),V(Math.PI))]],m0=(o,w)=>[o,0,0,0,0,w===void 0?o:w,0,0,0,0,o,0,0,0,0,1];K("res/redroom/wtable_all.bin",["res/redroom/wtable_0.webp"]).then(o=>{s0.wtable=o}).catch(o=>console.error(o)),K("res/redroom/wchair_all.bin",["res/redroom/wchair_0.webp"]).then(o=>{s0.wchair=o}).catch(o=>console.error(o)),K("res/redroom/cstick_holder.bin",["res/redroom/cstick_0.webp"]).then(o=>{s0.holder=o}).catch(o=>console.error(o)),K("res/redroom/cstick_candle.bin",["res/redroom/cstick_0.webp"]).then(o=>{s0.candle=o}).catch(o=>console.error(o)),K("res/redroom/rose_all.bin",["res/redroom/rose_0.webp"]).then(o=>{s0.rose=o}).catch(o=>console.error(o)),K("res/redroom/camera_all.bin",[0,1,2,3].map(o=>"res/redroom/camera_"+o+".webp")).then(o=>{s0.camera=o}).catch(o=>console.error(o));let B0=e0.k,X0=e0.z,oe=Math.PI/2,J=[["wtable",u(a0(e0.x,0,X0,oe),m0(B0)),1.7],["wchair",u(a0(e0.x-e0.depth/2-.36,0,X0-.42,oe+.05),m0(B0)),1.6],["wchair",u(a0(e0.x-e0.depth/2-.42,0,X0+.45,oe-.12),m0(B0)),1.6],["wchair",u(a0(e0.x+.02,0,X0-e0.half-.36,.06),m0(B0)),1.6],["wchair",u(a0(e0.x-.05,0,X0+e0.half+.4,Math.PI-.1),m0(B0)),.95]];for(let[o,w,L]of e0.candles)J.push(["holder",a0(o,e0.top,w,L*3),.9]),J.push(["candle",u(a0(o,e0.top,w,L*3),u(E(0,.156,0),u(m0(1,L),E(0,-.156,0)))),1.15]);{let o=7,w=()=>(o=o*16807%2147483647,(o-1)/2147483646),L=e0.vase;for(let k=0;k<9;k++){let O=k*2.39996+w()*.4,j=k===0?.04:.16+w()*.2,W=.66+w()*.12,Y=L.h+.25*W-.1-(k===0?-.04:w()*.05),Z=u(u(a0(L.x,e0.top+.02,L.z,O),V(j)),u(E(0,Y-.02,0),u(V(Math.PI/2),u(m0(W),E(0,-.13,0)))));J.push(["rose",Z,2])}}for(let[o,w,L]of e0.laid)J.push(["rose",u(a0(o,e0.top+.002,w,L),m0(.72)),2]);K("res/redroom/woman_all.bin",["res/redroom/woman_0.webp"]).then(o=>{s0.woman=o}).catch(o=>console.error(o));let Ce=u(a0(i0.x,0,i0.z,i0.yaw),m0(i0.k));J.push(["woman",Ce,2.6]),J.push(["camera",a0(.15,D.shelf.y,(D.shelf.z0+D.shelf.z1)/2,oe-.4),1.7]);let dt=()=>{let o=[];for(let[L,k]of ue){let O=s0[L];O&&O.parts.forEach((j,W)=>o.push({vb:O.vb,el:O.el,offset:j.offset,count:j.count,tex:j.tex,model:k,seed:0,dark:L==="jug"||L==="can"?.85:.7,emit:L==="bulb"&&j.mat===0?1.6:0}))}let w=Mt();for(let[L,k,O]of J){let j=s0[L];if(!(!j||w&&L==="woman"))for(let W of j.parts)o.push({vb:j.vb,el:j.el,offset:W.offset,count:W.count,tex:W.tex,model:k,seed:0,dark:O,emit:L==="woman"?-1:0})}o.length&&F(o),gt(),s0.woman&&!w&&ut(),re.k>.001&&!Xe&&(mt(),xt()),_0(),ve()},Me=[],Ve=[];for(let Z=0;Z<8;Z++)for(let t0=0;t0<8;t0++){let x0=(k0,p0)=>[-.08+.285*k0,.405+.20999999999999996*p0,-.222+-.05400000000000002*p0-.008],v0=t0/8,q0=(t0+1)/8,L0=Z/8,$0=(Z+1)/8;for(let[k0,p0]of[[v0,L0],[q0,L0],[q0,$0],[v0,L0],[q0,$0],[v0,$0]])Me.push(...x0(k0,p0)),Ve.push(k0,p0)}let ut=e({vert:`
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
			${ne}
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
			}`,attributes:{position:Me,uv:Ve},count:Me.length/3,cull:{enable:!1},uniforms:{...z,model:()=>Ce,tvLight:()=>T}}),Te=[],je=[];{let o=o0.axis,w=Math.abs(o[1])>.9?[1,0,0]:[0,1,0],L=(Z,t0)=>[Z[1]*t0[2]-Z[2]*t0[1],Z[2]*t0[0]-Z[0]*t0[2],Z[0]*t0[1]-Z[1]*t0[0]],O=(Z=>{let t0=Math.hypot(...Z);return Z.map(x0=>x0/t0)})(L(o,w)),j=L(o,O),W=o0.pos[1]/-o[1],Y=40;[1,.82,.64,.46,.3].forEach((Z,t0)=>{let x0=Math.tan(o0.outer*Z)*W;for(let v0=0;v0<Y;v0++){let q0=v0/Y*Math.PI*2,L0=(v0+1)/Y*Math.PI*2,$0=p0=>[0,1,2].map(M0=>I[M0]+o0.pos[M0]+o[M0]*W+(O[M0]*Math.cos(p0)+j[M0]*Math.sin(p0))*x0),k0=[0,1,2].map(p0=>I[p0]+o0.pos[p0]);Te.push(...k0,...$0(q0),...$0(L0)),je.push(t0,t0,t0)}})}let mt=e({vert:`
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
				float along = length(lp - vec3(${c(o0.pos[0])}, ${c(o0.pos[1])}, ${c(o0.pos[2])})) / ${c(o0.pos[1]/-o0.axis[1])};
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
				vec3 S = vec3(${c(I[0]+o0.pos[0])}, ${c(I[1]+o0.pos[1])}, ${c(I[2]+o0.pos[2])});
				vec3 A = vec3(${c(o0.axis[0])}, ${c(o0.axis[1])}, ${c(o0.axis[2])});
				// somewhere in the cone, drifting slowly down and round
				float al = 0.25 + 0.7 * fract(seed.x - time * 0.004 * (0.5 + seed.w));
				float len = al * ${c(o0.pos[1]/-o0.axis[1])};
				float ang = seed.y * 6.2832 + time * 0.03 * (seed.z - 0.5);
				float rr = sqrt(seed.z) * tan(${c(o0.outer)}) * len * 0.92;
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
			}`,attributes:{fp:[].concat(...e0.flames.map((o,w)=>[I[0]+o[0],I[1]+o[1],I[2]+o[2],w*1.37]))},count:e0.flames.length,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),me=document.createElement("canvas");me.width=512,me.height=192;{let o=me.getContext("2d");o.fillStyle="#000",o.fillRect(0,0,512,192),o.font='bold 128px "Helvetica Neue", Arial, sans-serif',o.textAlign="center",o.textBaseline="middle",o.shadowColor="#ff2a20",o.shadowBlur=28,o.fillStyle="#ff6a5a",o.fillText("ENTER",256,100),o.shadowBlur=0,o.fillStyle="#ffd8d0",o.fillText("ENTER",256,100)}let yt=e.texture({data:me,min:"linear",mag:"linear",wrap:"clamp"}),C0=I0.sign,xe=.3,ge=.1125,ye=C0[2]-.025,wt=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale; attribute vec3 position; attribute vec2 uv; varying vec2 v_uv; void main() { v_uv = uv; vec3 p = position; p.y *= yScale; gl_Position = proj * view * vec4(p, 1.0); }",frag:"precision highp float; uniform sampler2D tex; uniform float signK; varying vec2 v_uv; void main() { vec3 c = texture2D(tex, v_uv).rgb; vec3 col = c * vec3(1.6, 0.55, 0.5) * signK + vec3(0.06, 0.0, 0.0); gl_FragColor = vec4(col, 1.0); }",attributes:{position:[[C0[0]+xe,C0[1]-ge,ye],[C0[0]-xe,C0[1]-ge,ye],[C0[0]-xe,C0[1]+ge,ye],[C0[0]+xe,C0[1]+ge,ye]].map(o=>[o[0]+I[0],o[1]+I[1],o[2]+I[2]]),uv:[[0,1],[1,1],[1,0],[0,0]]},elements:[0,1,2,0,2,3],cull:{enable:!1},uniforms:{tex:yt,signK:()=>p}}),He=220,Fe=[];for(let o=0;o<He;o++)Fe.push(Math.random(),Math.random(),Math.random(),Math.random());let bt=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b;
			void main() {
				vec3 L0 = vec3(${c(I[0]+$.lens[0])}, ${c(I[1]+$.lens[1])}, ${c(I[2]+$.lens[2])});
				vec3 C = vec3(${c(I[0]+$.img.x)}, ${c(I[1]+$.img.y)}, ${c(I[2]+H)});
				vec3 fw = normalize(C - L0);
				vec3 rt = normalize(cross(fw, vec3(0.0, 1.0, 0.0)));
				vec3 up = cross(rt, fw);
				// most of them close to the lens
				float along = 0.15 + pow(seed.x, 2.2) * 7.5;
				float sp = along / length(C - L0);
				vec2 off = (vec2(seed.y, seed.z) - 0.5) * vec2(${c($.img.w)}, ${c($.img.h)}) * sp;
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
				vec3 L0 = vec3(${c(I[0]+$.lens[0])}, ${c(I[1]+$.lens[1])}, ${c(I[2]+$.lens[2])});
				vec3 C = vec3(${c(I[0]+$.img.x)}, ${c(I[1]+$.img.y)}, ${c(I[2]+H)});
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
				float rc = 0.04 + al * ${c($.img.h*.5)} / length(C - L0);
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
			}`,attributes:{seed:Be},count:Re,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),Ue=2200,Ke=[];for(let o=0;o<Ue;o++)Ke.push(Math.random(),Math.random(),Math.random(),Math.random());let zt=e({vert:Dt,frag:Ct,attributes:{seed:Ke},count:Ue,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),Xe=!1,Ye=o=>{let w=!!(o&&o.reflected);Xe=w;let L=performance.now()/1e3,k=.8+.12*Math.sin(L*47)*Math.sin(L*3.1)+.08*Math.sin(L*23+1.3);T[0]=.8*k,T[1]=.84*k,T[2]=.95*k,p=x(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:L),R(),wt(),d0(),c0&&Q(),dt(),fe(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:L),g&&!(typeof window!="undefined"&&window.__noBeam)&&Le(),he(),!w&&!(typeof window!="undefined"&&window.__noSmoke)&&_t(),w||bt(),w||zt()};return Ye.reflect=(o,w)=>r(L=>{let k=L.viewportWidth,O=L.viewportHeight,j=Math.max(2,Math.round(k/2)),W=Math.max(2,Math.round(O/2)),Y=!f;if((n.width!==j||n.height!==W)&&(n.resize(j,W),Y=!0),b[0]=k,b[1]=O,l=1,!Y&&++i%w!==0){a=q;return}a=t,s(()=>{e.clear({color:[0,0,0,1],depth:1}),o()}),a=q,f=!0}),Ye};var Ne=null;Object.assign($e.exports,{O:I,W:M,L:H,H:r0,ROOM:{W:M,L:H,H:r0,WIN:P,DOOR:g0,ENT:I0,SHAFTS:U,TV:X,DARK:D,PROJ:$,CABLE:A0,POL:U0,TBL:e0,WOMAN:i0,winZ:be,vaultY:Y0},POST:{threshold:.3},sunGLSL:qt,bakedSun(e){return Ne||(Ne=e.texture({width:1,height:1,data:[0,0,0,0]})),Ne},ready:()=>!0,setFlower(){},setGuide(){},setWind(){},setSpot(e){re.k=e},setWarn(e){Object.assign(j0,e)},setViewer(e){st.eye=e?e.slice():null}})});var vt=Se((Xt,ht)=>{"use strict";var S0=Ae(),{O:Ee}=S0,{W:u0,L:it,TV:se,DARK:Q0,PROJ:J0,TBL:b0,WOMAN:ze}=S0.ROOM,lt=e=>[e[0]+Ee[0],e[1]+Ee[1],e[2]+Ee[2]],ct=(e,h,m)=>e+(h-e)*m,le=e=>Math.max(0,Math.min(1,e)),Vt="Some grief is not yours to witness.",G0=e=>(e=le(e),e*e*(3-2*e)),ft=[ze.x,0,ze.z],Pe=Math.sin(ze.yaw),De=Math.cos(ze.yaw),O0=(e,h,m)=>[ft[0]+Pe*e+De*(m||0),h,ft[2]+De*e-Pe*(m||0)],W0=J0.x,jt=J0.table,ae=J0.z,ie=[W0+J0.feed[0],jt+J0.feed[1],ae+J0.feed[2]],_e=J0.lens,Oe=Q0.trays[0],Gt=[{eye:[u0/2+.15,1.55,-9.6],at:[u0/2,1.7,0],fov:40,dof:.05,p:{fov:58}},{eye:[u0/2+.05,1.6,-3],at:[u0/2,1.85,1.5],fov:50,dof:.05,p:{fov:70}},{eye:[u0/2-.2,1.5,.9],at:[u0/2-3,1.4,7],fov:56,dof:.04,p:{fov:74}},{eye:[u0-4.4,1.55,1.2],at:[u0-.7,1.05,b0.z+.2],fov:46,dof:.06,p:{eye:[u0-4.8,1.6,.9],fov:68}},{eye:[b0.x-1.4,b0.top+.48,b0.z-.7],at:[b0.x+.05,b0.top+.26,b0.z+0],fov:40,dof:.32,p:{fov:50}},{eye:[b0.stack[0]-.35,b0.top+.75,b0.stack[1]-.25],at:[b0.stack[0]+.02,b0.top,b0.stack[1]+.02],fov:34,dof:.3,p:{fov:50}},{eye:[3.3,1.55,1.3],at:[.3,1.35,5.2],fov:50,dof:.05,p:{eye:[2.8,1.6,.9],fov:72}},{eye:[1.05,1.5,Oe-.42],at:[Q0.TXc-.02,Q0.liquid,Oe+.04],fov:34,dof:.2,p:{eye:[1,1.55,Oe-.45],fov:52}},{eye:[.62,1.68,(Q0.shelf.z0+Q0.shelf.z1)/2-.36],at:[.14,1.55,(Q0.shelf.z0+Q0.shelf.z1)/2],fov:34,dof:.34,p:{fov:48}},{eye:[2,1.6,8.3],at:[.4,2.25,11.3],fov:50,dof:.12,p:{eye:[1.8,1.6,8.1],fov:72}}];function pt(e,h){let m=e.length-1,d=Math.max(0,Math.min(m,h)),q=Math.min(m-1,Math.floor(d)),n=d-q,s=e[Math.max(0,q-1)],t=e[q],r=e[q+1],a=e[Math.min(m,q+2)],l=n*n,i=l*n;return[0,1,2].map(f=>.5*(2*t[f]+(-s[f]+r[f])*n+(2*s[f]-5*t[f]+4*r[f]-a[f])*l+(-s[f]+3*t[f]-3*r[f]+a[f])*i))}var ce=0;function Wt(){let e=Gt.slice(),h=S0.ROOM.CABLE,m=h.path,d=h.socket[2],q=h.socket[0];e.push({eye:[q+1.05,.42,d-.45],at:[q,.27,d+.08],fov:42,dof:.32,p:{eye:[q+1.3,.48,d-.55],fov:58}});let[n,s]=h.run;for(let v of[.04,.22,.42,.62,.82]){let p=Math.round(n+(s-n)*v),x=m[Math.max(0,p-6)],z=m[Math.min(m.length-1,p+6)],R=m[p],y=z[0]-x[0],S=z[2]-x[2],A=Math.hypot(y,S)||1;y/=A,S/=A,e.push({eye:[R[0]-y*.8-S*.12,.3,R[2]-S*.8+y*.12],at:[R[0]+y*1.5,.06,R[2]+S*1.5],fov:44,dof:.24,pass:!0,p:{fov:60}})}e.push({eye:[u0-3,.45,d-1.6],at:[u0-.3,1.9,d+.9],fov:50,dof:.1,p:{fov:70}});let t=(v,p,x)=>[v[0]+p[0]*x,v[1]+p[1]*x,v[2]+p[2]*x],r=11,a=()=>(r=r*16807%2147483647,(r-1)/2147483646),l=(S0.ROOM.POL.spots||[]).filter(v=>v.n[0]<-.5&&v.c[2]>10.5&&v.c[2]<21.5&&v.c[1]>1.9&&v.c[1]<4.6),i=(v,p)=>Math.abs(v.c[2]-p)+Math.abs(v.c[1]-3)*.4,f=[];for(let v of[12.6,15,17.3]){let p=null;for(let x of l)(!p||i(x,v)<i(p,v))&&(p=x);p&&f.indexOf(p)<0&&f.push(p)}f.forEach((v,p)=>{let x=v.n,z=v.c;p>0&&e.push({eye:t(t(z,x,2.2),[0,.15,-.6],1),at:z,fov:50,dof:.05,pass:!0}),e.push({eye:t(t(z,x,1),[0,.06,-.3],1),at:z,fov:36,dof:.26,p:{fov:50}})}),e.push({eye:[W0+2,1.35,ae-1.5],at:[W0,1.35,ae+.1],fov:42,dof:.12,p:{eye:[W0+1.6,1.4,ae-1.5],fov:62}}),e.push({eye:[W0+.85,ie[1]+.12,ie[2]-.35],at:[ie[0],ie[1]-.05,ie[2]],fov:36,dof:.32,p:{fov:52}}),e.push({eye:[W0+.42,_e[1]+.08,_e[2]+1.35],at:[W0,_e[1],_e[2]],fov:36,dof:.35,p:{fov:52}}),e.push({eye:[W0-.55,1.75,ae-1.4],at:[u0/2,5,it],fov:50,dof:.06,p:{fov:70}}),e.push({eye:[W0-.2,3.3,ae+3.2],at:[u0/2,5.4,it],fov:52,dof:.04,pass:!0,p:{fov:72}});let b=se.stack;e.push({eye:[u0/2+1.4,1.2,se.z-4.9],at:[u0/2,1.75,se.z],fov:50,dof:.05,p:{fov:70}});let T=b.map((v,p)=>p);for(let v=T.length-1;v>0;v--){let p=Math.floor(a()*(v+1)),x=T[v];T[v]=T[p],T[p]=x}T=T.slice(0,10);let g=null;for(let v of T){let p=b[v],x=p.screen,z=p.facing,R=p.size*1.25;if(g){let S=[(g[0]+x[0])/2,(g[1]+x[1])/2+.2,Math.min(g[2],x[2])-2.6];e.push({eye:S,at:[(g[0]+x[0])/2,(g[1]+x[1])/2,se.z],fov:46,dof:.05,pass:!0})}let y=(a()-.5)*.5;e.push({eye:[x[0]+z[0]*R+y,x[1]+.05+(a()-.5)*.15,x[2]+z[2]*R],at:[x[0],x[1],x[2]],fov:30,dof:.3,p:{fov:44}}),g=x}return e.push({eye:[u0/2+.3,3.3,se.z-2.3],at:[u0/2,2.4,se.z+3],fov:52,dof:.04,pass:!0}),e.push({eye:O0(-.9,4.4,.2),at:O0(4.6,1.5),fov:54,dof:.04,pass:!0}),ce=e.length,e.push({eye:O0(-3.4,2.5,-1.5),at:O0(1,.75),fov:46,dof:.08,p:{fov:66}}),e.push({eye:O0(-2.55,2.3,0),at:O0(5.2,.95),fov:56,dof:.12,p:{eye:O0(-2.55,2.4,0),fov:74}}),e.push({eye:O0(-1.6,.92,0),at:O0(3,1.02),fov:50,dof:.28,p:{eye:O0(-1.9,.95,0),fov:64}}),e}function Ht(){let e=null,h=null,m=null,d=null,q=t=>{let r=e.createBuffer(1,Math.floor(e.sampleRate*t),e.sampleRate),a=r.getChannelData(0);for(let l=0;l<a.length;l++)a[l]=Math.random()*2-1;return r},n=()=>{if(e){e.state==="suspended"&&e.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;e=window.__redAudio||new t,window.__redAudio=e,e.state==="suspended"&&e.resume(),d=e.createGain(),d.gain.value=.9,d.connect(e.destination),h=e.createGain(),h.gain.value=0;let r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=170,r.Q.value=4,[55,55.6,110.3].forEach((i,f)=>{let b=e.createOscillator();b.type=f<2?"sawtooth":"sine",b.frequency.value=i,b.connect(r),b.start()}),r.connect(h),h.connect(d),m=e.createGain(),m.gain.value=0;let a=e.createBufferSource();a.buffer=q(2),a.loop=!0;let l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=3200,l.Q.value=.6,a.connect(l),l.connect(m),m.connect(d),a.start()},s=(t,r,a,l,i)=>{t.gain.setValueAtTime(0,r),t.gain.linearRampToValueAtTime(l,r+a),t.gain.exponentialRampToValueAtTime(1e-4,r+a+i)};return{start:n,set(t,r){if(!e)return;let a=e.currentTime;h.gain.setTargetAtTime(t*.16,a,.15),m.gain.setTargetAtTime(r*.035,a,.08)},tick(){if(!e)return;let t=e.currentTime,r=e.createOscillator();r.type="square",r.frequency.setValueAtTime(1180,t),r.frequency.exponentialRampToValueAtTime(240,t+.09);let a=e.createGain();s(a,t,.002,.09,.12),r.connect(a),a.connect(d),r.start(t),r.stop(t+.2);let l=e.createOscillator();l.type="sine",l.frequency.setValueAtTime(90,t),l.frequency.exponentialRampToValueAtTime(40,t+.2);let i=e.createGain();s(i,t,.004,.35,.25),l.connect(i),i.connect(d),l.start(t),l.stop(t+.35)},clunk(){if(!e)return;let t=e.currentTime,r=e.createOscillator();r.type="sine",r.frequency.setValueAtTime(75,t),r.frequency.exponentialRampToValueAtTime(38,t+.25);let a=e.createGain();s(a,t,.003,.5,.35),r.connect(a),a.connect(d),r.start(t),r.stop(t+.5);let l=e.createBufferSource();l.buffer=q(.08);let i=e.createBiquadFilter();i.type="highpass",i.frequency.value=1800;let f=e.createGain();s(f,t,.001,.25,.06),l.connect(i),i.connect(f),f.connect(d),l.start(t)},burst(){if(!e)return;let t=e.currentTime,r=e.createBufferSource();r.buffer=q(2.4);let a=e.createBiquadFilter();a.type="bandpass",a.Q.value=.7,a.frequency.setValueAtTime(600,t),a.frequency.exponentialRampToValueAtTime(5e3,t+1.6);let l=e.createGain();l.gain.setValueAtTime(1e-4,t),l.gain.exponentialRampToValueAtTime(.5,t+.5),l.gain.setValueAtTime(.5,t+1.7),l.gain.exponentialRampToValueAtTime(1e-4,t+2.3),r.connect(a),a.connect(l),l.connect(d),r.start(t);let i=e.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(110,t),i.frequency.exponentialRampToValueAtTime(18,t+2);let f=e.createGain();s(f,t,.05,.18,2),i.connect(f),f.connect(d),i.start(t),i.stop(t+2.2)},stop(){if(h&&(h.gain.value=0),m&&(m.gain.value=0),d)try{d.disconnect()}catch(t){}e=null,h=m=d=null}}}var Ft=`
.red-sub {
	position: fixed; left: 50%; bottom: 9vh; transform: translateX(-50%); z-index: 406;
	width: min(92vw, 900px); text-align: center; pointer-events: none;
	font: italic 400 clamp(19px, 2.5vw, 32px)/1.35 'Cormorant Garamond', Georgia, serif;
	color: #f1e7dc; letter-spacing: .035em; text-shadow: 0 2px 18px rgba(0,0,0,.9), 0 0 2px rgba(0,0,0,.8);
	opacity: 0;
}`;ht.exports=function(h){h=h||{};let m=Wt(),d=m.length-1,q=m.map((u,E)=>u.pass?-1:E).filter(u=>u>=0),n=(u,E)=>{if(E>=0){for(let V of q)if(V>=u-.06)return V;return q[q.length-1]}for(let V=q.length-1;V>=0;V--)if(q[V]<=u+.06)return q[V];return q[0]},s=(u,E)=>{if(E>0){for(let V of q)if(V>u+.01)return V;return q[q.length-1]}for(let V=q.length-1;V>=0;V--)if(q[V]<u-.01)return q[V];return q[0]},t=null,r=null,a=0,l=0,i=0,f=null,b=null,T=0,g=Ht(),v=document.createElement("div");v.className="red-sub",v.textContent=Vt;let p=document.createElement("style");p.textContent=Ft,document.head.appendChild(p),document.body.appendChild(v);let x=0,z=0,R=null,y=-10,S=0,A=null,N=1,C=-10,G=[],F=(u,E,V)=>{window.addEventListener(u,E,V),G.push([u,E,V])},n0=u=>{let E=Math.sign(u);if(!(!E||f!==null)){if(E>0&&z>=d-.001&&x>d-.08||E<0&&l>0){let V=l<1?2.2:.75;l=Math.max(0,Math.min(2.4,l+Math.max(-.2,Math.min(.13,u))*V)),y=S,C=S,N=E;return}E!==N&&S-C<.25&&Math.abs(u)<.02||(E!==N&&(N=E),C=S,z=Math.max(0,Math.min(d,z+u)),y=S)}},d0=u=>{if(f===null){if(u>0&&z>=d-.001||u<0&&l>0){n0(u>0?.12:-.12);return}N=u>0?1:-1,z=s(z,u),y=S-10}};F("pointerdown",()=>g.start()),F("keydown",()=>g.start()),F("touchend",()=>g.start()),F("wheel",u=>{if(u.target.closest&&u.target.closest(".st-ui"))return;u.preventDefault();let E=u.deltaMode===1?u.deltaY*16:u.deltaMode===2?u.deltaY*window.innerHeight:u.deltaY;n0(Math.max(-.6,Math.min(.6,E/700)))},{passive:!1});let B=null;F("pointerdown",u=>{u.target.closest&&u.target.closest("button, a, .st-ui")||(B={lx:u.clientX,ly:u.clientY,moved:0,t:performance.now()})}),F("pointermove",u=>{if(!B)return;let E=u.clientX-B.lx,V=u.clientY-B.ly;B.lx=u.clientX,B.ly=u.clientY;let h0=Math.abs(V)>=Math.abs(E)?-V:-E;B.moved+=Math.abs(h0),B.moved>6&&n0(h0/(window.innerHeight*.55))}),F("pointerup",()=>{let u=B;B=null,u&&u.moved<8&&performance.now()-u.t<450&&d0(1)}),F("keydown",u=>{u.key==="ArrowDown"||u.key==="ArrowRight"||u.key==="PageDown"||u.key===" "?d0(1):(u.key==="ArrowUp"||u.key==="ArrowLeft"||u.key==="PageUp")&&d0(-1)});function c0(u){S=u,A===null&&(A=u);let E=R===null?0:Math.min(.1,u-R);R=u,typeof window!="undefined"&&window.__redShot!==void 0&&/tourdebug/.test(location.search)&&(x=z=window.__redShot,t=null),typeof window!="undefined"&&window.__press!==void 0&&/tourdebug/.test(location.search)&&(l=a=window.__press),S-y>.35&&(z+=(n(z,N)-z)*(1-Math.exp(-E*2))),x+=(z-x)*(1-Math.exp(-E*1.7)),Math.abs(z-x)<1e-4&&(x=z);let V=window.innerWidth<window.innerHeight,h0=m.map(J=>V&&J.p?Object.assign({},J,J.p):J),y0=Math.min(d-1,Math.floor(x)),H0=x-y0,s0=H0*H0*(3-2*H0),f0=pt(h0.map(J=>J.eye),x),w0=pt(h0.map(J=>J.at),x);(!t||E===0||E>.09)&&(t=f0.slice(),r=w0.slice());let K0=1-Math.exp(-E*5);for(let J=0;J<3;J++)t[J]+=(f0[J]-t[J])*K0,r[J]+=(w0[J]-r[J])*K0;f0=t.slice(),w0=r.slice();let fe=h0[y0],ee=h0[Math.min(d,y0+1)],pe=ct(fe.fov,ee.fov,s0),Le=ct(fe.dof,ee.dof,s0);S-y>2.2&&f===null&&(l=Math.max(0,l-E*.14));let he=a<1?.9:.55;a+=Math.max(-he*E*2,Math.min(he*E,l-a)),a>2.08&&f===null&&(f=u,g.burst());let F0=le(a),P0=le(a-1),te=Math.min(10,Math.max(0,(a-1)*10.5));if(Math.floor(te)>i&&(g.tick(),navigator.vibrate))try{navigator.vibrate(28)}catch(J){}i=Math.floor(te);let _0=f===null?0:le((u-f)/2.3);typeof window!="undefined"&&window.__xk!==void 0&&/tourdebug/.test(location.search)&&(_0=window.__xk);let N0=G0(F0)*.28+P0*.06;f0=[f0[0]+Pe*N0,f0[1]-N0*.08,f0[2]+De*N0];let ve=F0*.004+P0*.008+_0*.05;f0[0]+=Math.sin(u*37)*ve,f0[1]+=Math.sin(u*41+1)*ve;let de=x>ce-.35?1:0;de&&!T&&(T=1,b=u,g.clunk()),!de&&T&&x<ce-.8&&(T=0);let a0=0;if(T){let J=u-b;a0=J<.75?[0,1,.15,.9,.3,1][Math.min(5,Math.floor(J/.125))]:1}let D0=Math.sin(u*13)*Math.sin(u*5.3);a0*=1-(F0*.25+P0*.3)*(D0>.6?1:0)-_0*(Math.sin(u*60)>0?.8:0),S0.setSpot(Math.max(0,a0)),S0.setWarn({s:G0((a-.12)/.45),n:te,glitch:G0(_0*1.6),freeze:a>.15}),v.style.opacity=String(G0((a-.35)/.4)*(1-G0((_0-.1)/.3))*(.88+.12*Math.sin(u*2))),g.set(G0(F0)*(1-_0)+P0*.5,G0((a-.12)/.45)*(1-_0*.5)),f!==null&&_0>=1&&(h.onExpel?h.onExpel():Q(),f=null);let z0=typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:u,ue=Math.hypot(w0[0]-f0[0],w0[1]-f0[1],w0[2]-f0[2]),m0=.01+.03*Math.min(1,ue/6);f0=[f0[0]+Math.sin(z0*.31)*m0,f0[1]+Math.sin(z0*.43+1)*m0*.6,f0[2]+Math.cos(z0*.27)*m0],w0=[w0[0]+Math.sin(z0*.21+2)*m0*.8,w0[1]+Math.sin(z0*.37)*m0*.5,w0[2]];let B0=lt(f0),X0=lt(w0),oe=Math.max(1-le((u-A-.3)/1.8),G0((_0-.82)/.18));return S0.setViewer(B0),{eye:B0,target:X0,fov:pe,roll:Math.sin(z0*.17)*.004,moving:!0,look:{letterbox:.45,focus:ue,aperture:Le,vignette:.3+F0*.25,exposure:1.45,shafts:1,fade:oe,fadeColor:[0,0,0],glitch:G0((_0-.25)/.6)*.9+P0*.06}}}function Q(){a=l=0,i=0,f=null,T=0,x=z=0,t=null,A=null,S0.setWarn({s:0,n:0,glitch:0,freeze:!1}),S0.setSpot(0)}function K(){for(let[u,E,V]of G)window.removeEventListener(u,E,V);G.length=0,g.stop(),v.remove(),p.remove(),S0.setWarn({s:0,n:0,glitch:0,freeze:!1}),S0.setSpot(0),S0.setViewer(null)}return/tourdebug/.test(location.search)&&(window.__redTourInfo={END:d,REVEAL:ce,STOPS:q}),{update:c0,tap:()=>d0(1),dispose:K,placeFlower(){},startSound:()=>g.start(),get scroll(){return x},END:d,REVEAL:ce}}});window.__redRoom={studio:Ae(),tour:vt()};})();

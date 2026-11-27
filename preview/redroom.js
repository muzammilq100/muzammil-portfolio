"use strict";(()=>{var Ne=(e,h)=>()=>(h||e((h={exports:{}}).exports,h),h.exports);var ot=Ne((Zt,tt)=>{"use strict";var C0=[-90,0,0],$e=16,Ae=27.5,Ee=11.6;tt.exports={O:C0,W:$e,L:Ae,RIDGE:Ee,BOX:[C0[0]-.8,0,C0[2]-11.5,C0[0]+$e+.8,Ee+.5,C0[2]+Ae+.8],AIR_BOX:[C0[0],0,C0[2],C0[0]+$e,Ee,C0[2]+Ae]}});var De=Ne((Qt,Pe)=>{"use strict";var{O:N,W:L,L:H}=ot(),c=e=>(+e).toFixed(4),r0=10.5,Le=.7,nt=3,O={hw:1.25,sill:1.35,spring:6.9,n:4,step:6.35};O.z0=H/2-O.step*(O.n-1)/2;O.apex=O.spring+O.hw*Math.sqrt(3);var Me=e=>O.z0+O.step*e;O.leftFrom=2;var e0=(()=>{let h=O.z0,m={k:1.42,z:h,top:.543*1.42,half:.601*1.42,depth:.706*1.42};return m.x=L-.12-m.depth/2,m.candles=[[L-.4,h-.52,1],[L-.3,h-.3,.62],[L-.36,h+.42,.38],[L-.86,h-.06,.55],[L-.24,h+.66,.85],[L-.8,h+.42,.3]],m.vase={x:L-.55,z:h+.06,h:.24},m.flames=m.candles.map(([u,k,n])=>[u,m.top+.156+.144*n+.018,k]),m.laid=[[L-.66,h-.22,Math.PI/2+.5],[L-.62,h-.36,Math.PI/2+.15],[L-.7,h+.26,Math.PI/2-.6]],m.stack=[L-.88,h-.5],m.occ=[[L-.55,m.top+.46,h+.06,.15],[L-.55,m.top+.26,h+.06,.06],[L-.55,m.top+.11,h+.06,.08],...m.laid.map(([u,k,n])=>[u-Math.sin(n)*.15,m.top+.05,k-Math.cos(n)*.15,.065])],m})(),St="LEAVEHERBE",pe={k:0},k0={s:0,n:0,glitch:0,freeze:!1,frozenAt:null},lt={eye:null},qt=()=>{let e=lt.eye;return e?(e[0]-N[0]-i0.x)*Math.sin(i0.yaw)+(e[2]-N[2]-i0.z)*Math.cos(i0.yaw)>-.25:!1};O.lowSill=e0.top+.06;var i0={x:L/2,z:18.6,k:1.3};i0.yaw=Math.atan2(L/2-i0.x,21.2-i0.z);{let e=Math.sin(i0.yaw),h=Math.cos(i0.yaw),m=(u,k,n)=>[i0.x+e*u,k,i0.z+h*u,n];i0.occ=[m(0,1.17,.13),m(-.02,.86,.22),m(.1,.42,.36),m(-.3,.62,.17)]}var n0=(()=>{let e=Math.sin(i0.yaw),h=Math.cos(i0.yaw),m=[i0.x-e*1.4,8.4,i0.z-h*1.4],u=[i0.x+e*.25,.55,i0.z+h*.25],k=[u[0]-m[0],u[1]-m[1],u[2]-m[2]],n=Math.hypot(...k);return{pos:m,axis:k.map(s=>s/n),inner:.115,outer:.17,reach:n}})(),U=[];for(let e=0;e<=O.n;e++)U.push(O.z0+O.step*(e-.5));var w0={hw:.75,h:2.6,depth:.7},I0={hw:1.8,h:3.6,z:-11,sign:[L/2,w0.h+.32,-w0.depth-.05],open:2.2},K={z:21.2,G:2.4,models:{sony:{file:"res/redroom/tv_sony.bin",tex:3,w:.36,h:.341,d:.455,dark:.55},crt:{file:"res/redroom/tv_crt.bin",tex:3,w:.47,h:.454,d:.389,dark:.9},old:{file:"res/redroom/tv_old.bin",tex:1,w:.62,h:.418,d:.416,dark:.75}}};K.stack=[["old",0,-1.41,2,.04],["crt",0,.05,-1,-.02],["sony",0,1.24,-2,.06],["crt",1,-1.16,3,.02],["sony",1,-.03,-1,.04],["crt",1,1.14,-3,.06],["sony",2,-.73,2,.06],["old",2,.66,-2,.03],["crt",0,-2.78,3,.08],["sony",1,-2.68,4,.1],["old",0,2.5,-3,.08],["sony",1,2.32,-4,.1]];var kt={sony:[0,.194],crt:[0,.27],old:[.0625,.2145]};(()=>{let e=[];for(let h of K.stack){let m=K.models[h[0]],u=h[1],k=h[2],n=m.w*K.G,s=0;for(let a of e)a.row>=u||Math.abs(a.dx-k)<(a.w+n)/2*.92&&(s=Math.max(s,a.top));e.push({dx:k,row:u,w:n,top:s+m.h*K.G*.99}),h.base=s;let t=kt[h[0]],r=h[3]*Math.PI/180;h.screen=[L/2+k+t[0]*K.G,s+t[1]*K.G,K.z+h[4]],h.facing=[-Math.sin(r),0,-Math.cos(r)],h.size=m.w*K.G}})();K.letters=(()=>{let e=[1,0].map(m=>K.stack.map((u,k)=>[k,u]).filter(([,u])=>u[1]===m).sort((u,k)=>k[1].screen[0]-u[1].screen[0]).map(([u])=>u)),h=K.stack.map(()=>-1);return[...e[0],...e[1]].forEach((m,u)=>{h[m]=u}),h})();var C=(()=>{let e={top:.92,depth:.78};return e.a=[U[0]+.7,U[1]-.55],e.b=[U[1]+.55,U[2]-.7],e.basin={x0:.08,x1:e.depth-.07,z0:e.a[0]+.1,z1:e.a[1]-.1,floor:e.top-.1},e.TX=.44,e.TZ=.54,e.TH=.075,e.TXc=(e.basin.x0+e.basin.x1)/2,e.trays=[e.a[0]+1.1,e.a[0]+1.72,e.a[0]+2.34],e.liquid=e.basin.floor+.05,e.bulb=[e.TXc+.02,1.39,e.trays[0]+.05],e.tube={x:.07,y:3.05,z0:e.b[0]+.2,z1:e.b[1]-.2},e.shelf={y:1.5,d:.3,z0:e.trays[2]+.42,z1:e.trays[2]+1.12},e.lines=[[.32,2.74,U[0],U[1],.12],[.74,2.52,U[0],U[1],.17],[1.1,2.62,U[0],U[1],.2],[.3,2.76,U[1],U[2],.15],[.68,2.46,U[1],U[2],.19],[1.06,2.66,U[1],U[2],.22],[.5,1.98,U[1],U[2],.12],[.45,2.98,U[0],U[1],.1,1.45],[1.45,2.4,U[0],U[1],.2],[.95,2.26,U[0],U[1],.13,.4],[1.4,3,U[1],U[2],.14,.45],[1.5,2.36,U[1],U[2],.22],[.9,2.2,U[1],U[2],.15,1.35]],e})(),E=(()=>{let e={x:L/2-.006,z:14.92,tableK:1.25,pitch:.1};e.table=.761*e.tableK,e.feed=[.0254,.7696,.3364],e.takeup=[.0252,.2484,.337],e.lensL=[.006,.456,.15];let h=Math.cos(e.pitch),m=Math.sin(e.pitch),u=e.lensL;return e.lens=[e.x+u[0],e.table+u[1]*h+u[2]*m,e.z-u[1]*m+u[2]*h],e.img={x:L/2,y:6,w:6.4},e.img.h=e.img.w*.75,e})(),c0={x0:4.2,x1:11.8,y:9,z:H-.16},A0={r:.045};(()=>{let e=A0.r,h=C.depth,m=C.b[1]-.22;A0.socket=[h,.3,m],A0.ctrl=[[h+.1,.3,m],[h+.2,.295,m],[h+.3,.22,m+.02],[h+.42,e,m+.1],[h+.8,e,m+.3],[1.8,e,m+.45],[3.4,e,m+.1],[5.2,e,m-.55],[7.2,e,m-.95],[9.4,e,m-.9],[11.4,e,m-.45],[13.2,e,m+.1],[L-1.15,e,m+.55],[L-.85,e,m+1.05],[L-.85,e,15.2],[L-1.1,e,16.3],[L-1.7,e,17.2],[L-2.5,e,17.9],[12.9,e,18.5],[11.5,e,18.9],[10.6,e,19.5],[10.5,e,20.3],[11.2,e,20.5],[10.9,e,19.95],[10,e*2.2,20.1],[9.3,e,20.75],[9.5,e,21.9],[8.6,e,22.25],[8.1,.22,21.95]];let u=A0.ctrl,k=[];for(let t=0;t<u.length-1;t++){let r=u[Math.max(0,t-1)],a=u[t],l=u[t+1],i=u[Math.min(u.length-1,t+2)],f=Math.max(2,Math.ceil(Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2])/.06));for(let _=0;_<f;_++){let T=_/f,x=T*T,d=x*T;k.push([0,1,2].map(p=>.5*(2*a[p]+(-r[p]+l[p])*T+(2*r[p]-5*a[p]+4*l[p]-i[p])*x+(-r[p]+3*a[p]-3*l[p]+i[p])*d)))}}k.push(u[u.length-1].slice());for(let t of k)t[1]<e&&t[2]>-1.4&&(t[1]=e);A0.path=k;let n=k.findIndex(t=>t[1]<=e*1.01),s=k.findIndex((t,r)=>r>n&&t[0]>L-1.3);A0.run=[n,s]})();var U0={spots:[],w:.36,h:.435,n:55,lines:[{z:H-1.7,y:6.5,sag:1},{z:H-2.6,y:5.3,sag:.8}]},T0=(()=>{let e=[-.62,.75,-.16],h=Math.hypot(...e);return e.map(m=>m/h)})(),Y0=(()=>{let e=L/2;return(e*e+nt*nt)/(2*e)})(),X0=e=>{let h=e<=L/2?e:L-e;return r0+Math.sqrt(Math.max(0,Y0*Y0-(h-Y0)*(h-Y0)))},z={FLOOR:0,WALL:1,REVEAL:2,GLASS:3,VAULT:4,TRIM:5,VOID:6,TUBE:7,CABLE:8,TILE:9,STEEL:10,PEG:11,CONC:12,CFLOOR:13,DOOR:14};function ct(){let e=[],h=[],m=[],u=[],k=[],n={pos:e,nrm:h,kind:m,uv:u,idx:k,v(s,t,r,a){return e.push(s[0]+N[0],s[1]+N[1],s[2]+N[2]),h.push(t[0],t[1],t[2]),m.push(r),u.push(a?a[0]:0,a?a[1]:0),e.length/3-1},quad(s,t,r,a,l,i,f,_,T,x){let d=n.v(s,l,i,f),p=n.v(t,l,i,_),v=n.v(r,l,i,T),S=n.v(a,l,i,x);k.push(d,p,v,d,v,S)},box(s,t,r,a,l,i,f){n.quad([s,t,i],[a,t,i],[a,l,i],[s,l,i],[0,0,1],f),n.quad([a,t,r],[s,t,r],[s,l,r],[a,l,r],[0,0,-1],f),n.quad([a,t,i],[a,t,r],[a,l,r],[a,l,i],[1,0,0],f),n.quad([s,t,r],[s,t,i],[s,l,i],[s,l,r],[-1,0,0],f),n.quad([s,l,i],[a,l,i],[a,l,r],[s,l,r],[0,1,0],f),n.quad([s,t,r],[a,t,r],[a,t,i],[s,t,i],[0,-1,0],f)},cyl(s,t,r,a,l,i,f){f=f||18;for(let _=0;_<f;_++){let T=_/f*Math.PI*2,x=(_+1)/f*Math.PI*2,d=[Math.sin(T),0,Math.cos(T)],p=[Math.sin(x),0,Math.cos(x)],v=(A,$)=>[s+A[0]*r,$,t+A[2]*r],S=n.v(v(d,a),d,i),M=n.v(v(p,a),p,i),y=n.v(v(p,l),p,i),q=n.v(v(d,l),d,i);k.push(S,M,y,S,y,q)}}};return n}function M0(e,h,m,u,k){let n=null,s=null,t=[];for(let r=0;r<h.length;r++){let a=h[Math.max(0,r-1)],l=h[Math.min(h.length-1,r+1)],i=[l[0]-a[0],l[1]-a[1],l[2]-a[2]],f=Math.hypot(...i)||1;i=i.map(p=>p/f),s||(s=Math.abs(i[1])<.9?[0,1,0]:[1,0,0]);let _=s[0]*i[0]+s[1]*i[1]+s[2]*i[2];s=[s[0]-i[0]*_,s[1]-i[1]*_,s[2]-i[2]*_];let T=Math.hypot(...s)||1;s=s.map(p=>p/T);let x=[i[1]*s[2]-i[2]*s[1],i[2]*s[0]-i[0]*s[2],i[0]*s[1]-i[1]*s[0]],d=[];for(let p=0;p<u;p++){let v=p/u*Math.PI*2,S=Math.cos(v),M=Math.sin(v),y=[s[0]*S+x[0]*M,s[1]*S+x[1]*M,s[2]*S+x[2]*M];d.push(e.v([h[r][0]+y[0]*m,h[r][1]+y[1]*m,h[r][2]+y[2]*m],y,k,[r,p]))}if(n)for(let p=0;p<u;p++){let v=(p+1)%u;e.idx.push(n[p],n[v],d[v],n[p],d[v],d[p])}n=d,t.push(d)}}var ft=(e,h)=>[e[0]+((e[5]===void 0?e[0]:e[5])-e[0])*h,e[1]-e[4]*4*h*(1-h),e[2]+.35+(e[3]-e[2]-.7)*h];function st(e,h,m){let u=[[-e,h],[-e,m]],k=2*e,n=14;for(let s=1;s<=n;s++){let t=Math.PI-s/n*(Math.PI/3);u.push([e+k*Math.cos(t),m+k*Math.sin(t)])}for(let s=1;s<=n;s++){let t=Math.PI/3-s/n*(Math.PI/3);u.push([-e+k*Math.cos(t),m+k*Math.sin(t)])}return u.push([e,h]),u}function at(e,h,m,u,k,n,s){let t=k?h.length:h.length-1;for(let r=0;r<t;r++){let a=h[r],l=h[(r+1)%h.length],i=l[0]-a[0],_=-(l[1]-a[1]),T=i,x=Math.hypot(_,T)||1;_/=x,T/=x;let d=(a[0]+l[0])/2-s[0],p=(a[1]+l[1])/2-s[1];_*d+T*p>0&&(_=-_,T=-T);let v=u(_,T,0,!0);e.quad(u(a[0],a[1],0),u(l[0],l[1],0),u(l[0],l[1],m),u(a[0],a[1],m),v,n,[a[0],a[1]],[l[0],l[1]],[l[0],l[1]],[a[0],a[1]])}}function It(){let e=ct();e.quad([0,0,0],[0,0,H],[L,0,H],[L,0,0],[0,1,0],z.FLOOR),e.quad([0,0,H],[0,0,0],[0,r0,0],[0,r0,H],[1,0,0],z.WALL,[H,0],[0,0],[0,r0],[H,r0]),e.quad([L,0,0],[L,0,H],[L,r0,H],[L,r0,0],[-1,0,0],z.WALL,[0,0],[H,0],[H,r0],[0,r0]);let h=24;for(let n of[0,1]){let s=n?H:0,t=[0,0,n?-1:1];for(let r=0;r<h;r++){let a=r/h*L,l=(r+1)/h*L,i=[a,0,s],f=[l,0,s],_=[l,X0(l),s],T=[a,X0(a),s];n?e.quad(f,i,T,_,t,z.WALL,[l,0],[a,0],[a,T[1]],[l,_[1]]):e.quad(i,f,_,T,t,z.WALL,[a,0],[l,0],[l,_[1]],[a,T[1]])}}let m=40;for(let n=0;n<m;n++){let s=n/m*L,t=(n+1)/m*L,r=X0(s),a=X0(t),l=(p,v)=>{let S=p<=L/2?p:L-p,M=(Y0-S)/Y0,y=(r0-v)/Y0;return p>L/2&&(M=-M),[M,y,0]},i=l(s,r),f=l(t,a),_=e.v([s,r,0],i,z.VAULT,[s,0]),T=e.v([t,a,0],f,z.VAULT,[t,0]),x=e.v([t,a,H],f,z.VAULT,[t,H]),d=e.v([s,r,H],i,z.VAULT,[s,H]);e.idx.push(_,T,x,_,x,d)}let u=st(O.hw,O.sill,O.spring),k=st(O.hw,O.lowSill,O.spring);for(let n=0;n<O.n;n++){let s=n===0?O.lowSill:O.sill,t=Me(n),r=n>=O.leftFrom;r&&at(e,u,Le,(T,x,d,p)=>p?[0,x,T]:[-d,x,t+T],!0,z.REVEAL,[0,(O.sill+O.apex)/2]),at(e,n===0?k:u,Le,(T,x,d,p)=>p?[0,x,T]:[L+d,x,t+T],!0,z.REVEAL,[0,(s+O.apex)/2]);let a=Le*.55,l=O.sill-.02,i=O.apex+.02,f=O.hw+.02;r&&e.quad([-a,l,t+f],[-a,l,t-f],[-a,i,t-f],[-a,i,t+f],[1,0,0],z.GLASS,[f,l],[-f,l],[-f,i],[f,i]);let _=s-.02;e.quad([L+a,_,t-f],[L+a,_,t+f],[L+a,i,t+f],[L+a,i,t-f],[-1,0,0],z.GLASS,[-f,_],[f,_],[f,i],[-f,i]),r&&e.box(-.02,O.sill-.12,t-O.hw-.18,.12,O.sill,t+O.hw+.18,z.TRIM),e.box(L-.12,s-(n===0?.05:.12),t-O.hw-.18,L+.02,s,t+O.hw+.18,z.TRIM)}{let n=L/2-w0.hw,s=L/2+w0.hw,t=w0.h,r=w0.depth;e.quad([n,0,-r],[n,0,0],[n,t,0],[n,t,-r],[1,0,0],z.REVEAL),e.quad([s,0,0],[s,0,-r],[s,t,-r],[s,t,0],[-1,0,0],z.REVEAL),e.quad([n,t,0],[s,t,0],[s,t,-r],[n,t,-r],[0,-1,0],z.REVEAL),e.quad([n,.001,-r],[s,.001,-r],[s,.001,0],[n,.001,0],[0,1,0],z.CFLOOR);let a=L/2-I0.hw,l=L/2+I0.hw,i=I0.h,f=I0.z;e.quad([a,0,f],[a,0,-r],[l,0,-r],[l,0,f],[0,1,0],z.CFLOOR),e.quad([a,0,-r],[a,0,f],[a,i,f],[a,i,-r],[1,0,0],z.CONC,[-r,0],[f,0],[f,i],[-r,i]),e.quad([l,0,f],[l,0,-r],[l,i,-r],[l,i,f],[-1,0,0],z.CONC,[f,0],[-r,0],[-r,i],[f,i]),e.quad([a,i,f],[a,i,-r],[l,i,-r],[l,i,f],[0,-1,0],z.CONC,[f,0],[-r,0],[-r,1],[f,1]),e.quad([l,0,f],[a,0,f],[a,i,f],[l,i,f],[0,0,1],z.CONC,[0,0],[1,0],[1,i],[0,i]);let _=-r;e.quad([a,0,_],[n,0,_],[n,i,_],[a,i,_],[0,0,-1],z.CONC,[a,0],[n,0],[n,i],[a,i]),e.quad([s,0,_],[l,0,_],[l,i,_],[s,i,_],[0,0,-1],z.CONC,[s,0],[l,0],[l,i],[s,i]),e.quad([n,t,_],[s,t,_],[s,i,_],[n,i,_],[0,0,-1],z.CONC,[n,t],[s,t],[s,i],[n,i]);let T=n,x=_-.01,d=I0.open,p=w0.hw*2-.04,v=.045,S=[Math.cos(d),0,-Math.sin(d)],M=[Math.sin(d),0,Math.cos(d)],y=(j,F,l0)=>[T+S[0]*j+M[0]*l0,F,x+S[2]*j+M[2]*l0],q=.012,A=t-.02;e.quad(y(0,q,v),y(p,q,v),y(p,A,v),y(0,A,v),M,z.DOOR),e.quad(y(p,q,0),y(0,q,0),y(0,A,0),y(p,A,0),M.map(j=>-j),z.DOOR),e.quad(y(p,q,v),y(p,q,0),y(p,A,0),y(p,A,v),S,z.DOOR),e.quad(y(0,A,v),y(p,A,v),y(p,A,0),y(0,A,0),[0,1,0],z.DOOR);let $=y(p-.09,1.02,v+.03);M0(e,[y(p-.09,1.02,v),$,[$[0]-S[0]*.12,$[1],$[2]-S[2]*.12]],.011,6,z.STEEL);let P=I0.sign;e.box(P[0]-.33,P[1]-.12,P[2]-.02,P[0]+.33,P[1]+.12,_,z.TRIM)}for(let n of U){for(let a of[.2,L-.2])e.box(a-.42,0,n-.42,a+.42,.5,n+.42,z.TRIM),e.cyl(a,n,.27,.5,r0-.55,z.TRIM),e.cyl(a+(a<L/2?.2:-.2),n-.36,.1,.5,r0-.55,z.TRIM,10),e.cyl(a+(a<L/2?.2:-.2),n+.36,.1,.5,r0-.55,z.TRIM,10),e.box(a-.45,r0-.55,n-.5,a+.45,r0-.25,n+.5,z.TRIM);let s=40,t=.22,r=.22;for(let a=0;a<s;a++){let l=a/s*L,i=(a+1)/s*L,f=X0(l),_=X0(i),T=[L/2-l,-(f-r0+2),0],x=[L/2-i,-(_-r0+2),0],d=y=>{let q=Math.hypot(y[0],y[1])||1;return[y[0]/q,y[1]/q,0]},p=d(T),v=d(x),S=[l+p[0]*r,f+p[1]*r],M=[i+v[0]*r,_+v[1]*r];e.quad([S[0],S[1],n-t],[M[0],M[1],n-t],[M[0],M[1],n+t],[S[0],S[1],n+t],p,z.TRIM),e.quad([l,f,n-t],[i,_,n-t],[M[0],M[1],n-t],[S[0],S[1],n-t],[0,0,-1],z.TRIM),e.quad([i,_,n+t],[l,f,n+t],[S[0],S[1],n+t],[M[0],M[1],n+t],[0,0,1],z.TRIM)}}{let n=C,s=n.top,t=n.basin,r=(x,d,p)=>{if(e.box(0,0,x,n.depth-.06,.12,d,z.TRIM),e.quad([n.depth,.12,x],[n.depth,.12,d],[n.depth,s,d],[n.depth,s,x],[1,0,0],z.TILE,[x,.12],[d,.12],[d,s],[x,s]),e.quad([0,.12,x],[n.depth,.12,x],[n.depth,s,x],[0,s,x],[0,0,-1],z.TILE,[0,.12],[n.depth,.12],[n.depth,s],[0,s]),e.quad([n.depth,.12,d],[0,.12,d],[0,s,d],[n.depth,s,d],[0,0,1],z.TILE,[n.depth,.12],[0,.12],[0,s],[n.depth,s]),!p){e.quad([0,s,x],[0,s,d],[n.depth,s,d],[n.depth,s,x],[0,1,0],z.TILE,[0,x],[0,d],[n.depth,d],[n.depth,x]);return}let v=(S,M,y,q)=>e.quad([S,s,y],[S,s,q],[M,s,q],[M,s,y],[0,1,0],z.TILE,[S,y],[S,q],[M,q],[M,y]);v(0,t.x0,x,d),v(t.x1,n.depth,x,d),v(t.x0,t.x1,x,t.z0),v(t.x0,t.x1,t.z1,d),e.quad([t.x0,t.floor,t.z0],[t.x0,t.floor,t.z1],[t.x1,t.floor,t.z1],[t.x1,t.floor,t.z0],[0,1,0],z.TILE,[t.x0,t.z0],[t.x0,t.z1],[t.x1,t.z1],[t.x1,t.z0]),e.quad([t.x0,t.floor,t.z1],[t.x0,t.floor,t.z0],[t.x0,s,t.z0],[t.x0,s,t.z1],[1,0,0],z.TILE,[t.z1,t.floor],[t.z0,t.floor],[t.z0,s],[t.z1,s]),e.quad([t.x1,t.floor,t.z0],[t.x1,t.floor,t.z1],[t.x1,s,t.z1],[t.x1,s,t.z0],[-1,0,0],z.TILE,[t.z0,t.floor],[t.z1,t.floor],[t.z1,s],[t.z0,s]),e.quad([t.x0,t.floor,t.z0],[t.x1,t.floor,t.z0],[t.x1,s,t.z0],[t.x0,s,t.z0],[0,0,1],z.TILE,[t.x0,t.floor],[t.x1,t.floor],[t.x1,s],[t.x0,s]),e.quad([t.x1,t.floor,t.z1],[t.x0,t.floor,t.z1],[t.x0,s,t.z1],[t.x1,s,t.z1],[0,0,-1],z.TILE,[t.x1,t.floor],[t.x0,t.floor],[t.x0,s],[t.x1,s])};r(n.a[0],n.a[1],!0),r(n.b[0],n.b[1],!1);for(let[x,d]of[n.a,n.b])e.quad([.012,s,d],[.012,s,x],[.012,s+.62,x],[.012,s+.62,d],[1,0,0],z.TILE,[d,s],[x,s],[x,s+.62],[d,s+.62]);let a=x=>{let d=t.floor+.004,p=d+n.TH,v=n.TX/2,S=n.TZ/2,M=.02,y=n.TXc,q=[[y-v+M,x-S+M],[y+v-M,x-S+M],[y+v-M,x+S-M],[y-v+M,x+S-M]],A=[[y-v,x-S],[y+v,x-S],[y+v,x+S],[y-v,x+S]];e.quad([q[0][0],d,q[0][1]],[q[3][0],d,q[3][1]],[q[2][0],d,q[2][1]],[q[1][0],d,q[1][1]],[0,1,0],z.STEEL);for(let $=0;$<4;$++){let P=($+1)%4,j=[q[$][0],d,q[$][1]],F=[q[P][0],d,q[P][1]],l0=[A[P][0],p,A[P][1]],v0=[A[$][0],p,A[$][1]],t0=(q[$][0]+q[P][0])/2-y,p0=(q[$][1]+q[P][1])/2-x,X=Math.hypot(t0,p0)||1;e.quad(j,F,l0,v0,[-t0/X*.95,.3,-p0/X*.95],z.STEEL),e.quad(F,j,[v0[0],d+.001,v0[2]],[l0[0],d+.001,l0[2]],[t0/X,0,p0/X],z.STEEL)}M0(e,[...A,A[0]].map($=>[$[0],p+.004,$[1]]),.005,5,z.STEEL)};for(let x of n.trays)a(x);let l=(x,d,p,v,S,M)=>{for(let y of[-.012,.012])M0(e,[[x,S,d+y],[(x+p)/2,(S+M)/2+.006,(d+v)/2+y*.6],[p,M,v+y*.2]],.0045,5,z.PEG)};l(n.TXc+.05,n.trays[0]+.12,n.TXc+.27,n.trays[0]+.42,n.liquid-.005,n.top+.03),l(n.TXc-.1,n.trays[2]-.2,n.TXc+.24,n.trays[2]-.05,n.liquid+.002,n.liquid+n.TH*.9);let i=t.z1-.3;M0(e,[[0,1.32,i],[.18,1.32,i],[.27,1.3,i],[.32,1.22,i],[.33,1.12,i]],.016,8,z.STEEL),e.box(0,1.27,i-.05,.05,1.37,i+.05,z.STEEL);let f=C.bulb;M0(e,[[0,2.32,f[2]],[f[0]*.6,2.32,f[2]],[f[0],2.28,f[2]]],.012,6,z.TRIM),e.box(0,2.24,f[2]-.06,.03,2.4,f[2]+.06,z.TRIM),M0(e,[[f[0],2.28,f[2]],[f[0]+.004,1.9,f[2]+.003],[f[0],f[1]+.2,f[2]]],.004,5,z.CABLE);{let x=e0.vase,d=e0.top,p=[[.045,0],[.07,.03],[.08,.09],[.072,.15],[.05,.2],[.042,.225],[.05,x.h]],v=24;for(let S=0;S<p.length-1;S++){let[M,y]=p[S],[q,A]=p[S+1];for(let $=0;$<v;$++){let P=$/v*Math.PI*2,j=($+1)/v*Math.PI*2,F=(t0,p0,X)=>[x.x+Math.cos(X)*t0,d+p0,x.z+Math.sin(X)*t0],l0=t0=>{let p0=q-M,X=A-y,d0=Math.hypot(p0,X);return[Math.cos(t0)*X/d0,-p0/d0,Math.sin(t0)*X/d0]},v0=(P+j)/2;e.quad(F(M,y,P),F(M,y,j),F(q,A,j),F(q,A,P),l0(v0),z.TRIM)}}}let _=C.shelf;e.box(0,_.y-.03,_.z0,_.d,_.y,_.z1,z.TRIM);for(let x of[_.z0+.08,_.z1-.08])e.box(0,_.y-.2,x-.012,.022,_.y-.03,x+.012,z.TRIM),e.box(0,_.y-.06,x-.012,_.d*.7,_.y-.03,x+.012,z.TRIM);let T=C.tube;M0(e,[[T.x+.02,T.y,T.z0],[T.x+.02,T.y,(T.z0+T.z1)/2],[T.x+.02,T.y,T.z1]],.035,10,z.TUBE),e.box(0,T.y-.05,T.z0-.06,.07,T.y+.05,T.z0-.01,z.TRIM),e.box(0,T.y-.05,T.z1+.01,.07,T.y+.05,T.z1+.06,z.TRIM);for(let x of C.lines){let d=[];for(let p=0;p<=24;p++){let v=p/24;d.push(ft(x,v))}M0(e,d,.0035,5,z.CABLE);for(let p of[d[0],d[24]])M0(e,[[0,p[1]+.05,p[2]],[p[0]*.5,p[1]+.02,p[2]],[p[0]+.02,p[1],p[2]]],.007,5,z.TRIM)}}K.stack.forEach((n,s)=>{let t=K.models[n[0]],r=K.G,a=L/2+n[2],l=K.z+n[4]+t.d*r*.85,i=n.base+.12*r,f=L/2+(s%3-1)*.5,_=K.z+2.3+s%4*.12;M0(e,[[a,i,l-.05],[a+.05,i-.02,l+.15],[a+.1,Math.max(.02,i*.4),l+.35],[a*.6+f*.4,.018,l+.6],[f,.018,_]],.012,6,z.CABLE)}),M0(e,A0.path,A0.r,16,z.CABLE);{let[n,s,t]=A0.socket;e.box(n,s-.07,t-.07,n+.018,s+.07,t+.07,z.STEEL),e.box(n+.018,s-.035,t-.032,n+.11,s+.035,t+.032,z.TRIM),e.box(n,s+.042,t+.035,n+.03,s+.058,t+.051,z.TUBE)}e.box(c0.x0-.08,c0.y-.07,H-.08,c0.x0-.02,c0.y+.07,H,z.TRIM),e.box(c0.x1+.02,c0.y-.07,H-.08,c0.x1+.08,c0.y+.07,H,z.TRIM),M0(e,[[c0.x0-.02,c0.y,c0.z],[(c0.x0+c0.x1)/2,c0.y,c0.z],[c0.x1+.02,c0.y,c0.z]],.045,10,z.TUBE);for(let n of[0,1]){let s=n?L-.06:0,t=n?L:.06;e.box(s,0,0,t,.24,H,z.TRIM),e.box(n?L-.05:0,1,0,n?L:.05,1.08,H,z.TRIM);let r=n?L-.32:0,a=n?L:.32;e.box(r,r0-.25,0,a,r0+.08,H,z.TRIM)}for(let n of[0,1]){let s=n?H-.06:0,t=n?H:.06;n?e.box(0,0,s,L,.24,t,z.TRIM):(e.box(0,0,s,L/2-w0.hw,.24,t,z.TRIM),e.box(L/2+w0.hw,0,s,L,.24,t,z.TRIM));let r=n?H-.32:0,a=n?H:.32;e.box(0,r0-.25,r,L,r0+.08,a,z.TRIM)}return e}function Nt(){let e=7,h=0,m=()=>(h++*23+5)%U0.n,u=()=>(e=e*16807%2147483647,(e-1)/2147483646),k=[],n=[],s=[],t=[],r=[],a=[],l=[],i=3,f=4,_=(M,y,q,A,$,P,j,F,l0)=>{let v0=U0.w*$,t0=U0.h*$,p0=k.length/3;for(let X=0;X<=f;X++)for(let d0=0;d0<=i;d0++){let w=d0/i,D=X/f,W=(w-.5)*v0,B=(D-.5)*t0,Y=F*((w-.5)*(w-.5)*4+(1-D)*(1-D)*.6);k.push(N[0]+M[0]+y[0]*W+q[0]*B+A[0]*Y,N[1]+M[1]+y[1]*W+q[1]*B+A[1]*Y,N[2]+M[2]+y[2]*W+q[2]*B+A[2]*Y),n.push(A[0],A[1],A[2]),s.push(w,D),t.push(P),l.push(l0||0),r.push(j[0]+N[0],j[1]+N[1],j[2]+N[2],j[3])}for(let X=0;X<f;X++)for(let d0=0;d0<i;d0++){let w=p0+X*(i+1)+d0,D=w+1,W=w+i+1,B=W+1;a.push(w,D,B,w,B,W)}},T=(M,y,q)=>{let A=Math.cos(q),$=Math.sin(q);return[M.map((P,j)=>P*A+y[j]*$),y.map((P,j)=>-M[j]*$+P*A)]},x=[0,0,0,0],d=0,p=(M,y,q,A,$,P,j,F,l0)=>{let p0=0;for(let X=P;X<j;X+=.48)for(let d0=A;d0<$;d0+=.4){let w=d0+(u()-.5)*.4*.7,D=X+(u()-.5)*.48*.6;if(u()>F(w,D))continue;let[W,B]=T(q,[0,1,0],(u()-.5)*.5),Y=M(w,D,.012+.0016*(p0++%9)+u()*.004),x0=.88+u()*.3;_(Y,W,B,y,x0,m(),x,(u()-.3)*.02),U0.spots.length<400&&U0.spots.push({c:Y,n:y,up:B,size:U0.h*x0}),d++}},v=(M,y,q)=>Math.exp(-Math.pow((M-y)/q,2));for(let M=0;M<O.n-1;M++){let y=U[M+1],q=[[Me(M)+O.hw+.32,y-.66],[y+.66,Me(M+1)-O.hw-.32]];for(let[A,$]of q){let P=(j,F)=>.85*v(F,3.4,1.7);$>C.b[1]+.3&&p((j,F,l0)=>[l0,F,j],[1,0,0],[0,0,-1],A,$,1.45,6.3,P),p((j,F,l0)=>[L-l0,F,j],[-1,0,0],[0,0,1],A,$,1.45,6.3,P)}}let S=[];for(let M of C.lines){let y=M[3]-M[2]-.7;for(let q=.18;q<y-.1;q+=.3+u()*.14){let A=q/y,$=ft(M,A);if(u()<.1||Math.abs($[2]-C.bulb[2])<.4&&$[1]>2.3)continue;let P=.56+u()*.14,j=U0.h*P,F=(u()-.5)*.7,l0=u()<.3?u()<.5?-.75:.75:F,[v0,t0]=T([0,0,-1],[0,1,0],l0),p0=[1,0,0],X=[$[0]+.004,$[1]-.02-t0[1]*j*.5,$[2]-t0[2]*j*.5];_(X,v0,t0,p0,P,m(),[$[0],$[1],$[2],-(.04+u()*.06)],.01+u()*.025,1),S.push($),d++}}{let[M,y]=e0.stack,q=[0,1,0];for(let $=0;$<9;$++){let P=(u()-.5)*.35+.3;_([M+(u()-.5)*.012,e0.top+.003+$*.0022,y+(u()-.5)*.012],[Math.cos(P),0,Math.sin(P)],[Math.sin(P),0,-Math.cos(P)],q,.26,m(),x,.004),d++}[[.13,.12,.9],[-.04,.2,-.4],[.2,-.05,1.6]].forEach(([$,P,j],F)=>{_([M+$,e0.top+.002+F*.0012,y+P],[Math.cos(j),0,Math.sin(j)],[Math.sin(j),0,-Math.cos(j)],q,.26,m(),x,.006),d++})}return{pos:k,nrm:n,uv:s,pic:t,piv:r,idx:a,sty:l,pegs:S,count:d}}var E0=`
	const float RW = ${c(L)}, RL = ${c(H)}, RH = ${c(r0)}, RT = ${c(Le)};
	const float HW = ${c(O.hw)}, SILL = ${c(O.sill)}, SPRING = ${c(O.spring)};
	const float WZ0 = ${c(O.z0)}, WSTEP = ${c(O.step)};
	const vec3 RO = vec3(${c(N[0])}, ${c(N[1])}, ${c(N[2])});
	const vec3 LDIR_L = vec3(${c(T0[0])}, ${c(T0[1])}, ${c(T0[2])});
	const vec3 LDIR_R = vec3(${c(-T0[0])}, ${c(T0[1])}, ${c(T0[2])});

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
	float winIdx(float z) { return clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${c(O.n-1)}); }
	// (on the left, the first windows are walled up)
	float leftOpen(float z) { return step(${c(O.leftFrom-.5)}, winIdx(z)); }
	vec2 winLocal(float z, float y) {
		float i = clamp(floor((z - WZ0) / WSTEP + 0.5), 0.0, ${c(O.n-1)});
		return vec2(z - (WZ0 + WSTEP * i), y);
	}
	// (on the right, the first window comes down to the table: its height
	// below the springing is stretched onto the others' shape)
	const float LSILL = ${c(O.lowSill)};
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
`;function $t(){return`
	#define STUDIO_SUN ${"vec3("+c(T0[0])+", "+c(T0[1])+", "+c(T0[2])+")"}
	#define STUDIO_SUN2 ${"vec3("+c(-T0[0])+", "+c(T0[1])+", "+c(T0[2])+")"}
	#define SHAFT_TINT vec3(0.6, 0.012, 0.008)
	#define STUDIO_AIR_EVEN
	${E0}
	float studioSun(vec3 p) {
		vec3 lp = p - RO;
		if (lp.x < 0.0 || lp.x > RW || lp.z < 0.0 || lp.z > RL || lp.y > RH + 2.0) return 0.0;
		vec3 c = redLightAir(lp);
		return dot(c, vec3(0.7, 0.2, 0.1)) * 3.2;
	}`}var rt=`
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
		vec3 d = vec3(${c(L/2)}, 1.35, ${c(K.z-.9)}) - lp;
		float dd = dot(d, d);
		float face = 0.35 + 0.65 * max(0.0, dot(N, normalize(d)));
		// (only in front of them: the stack's own back is in its shadow)
		float front = smoothstep(${c(K.z+.6)}, ${c(K.z-.2)}, lp.z);
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
		vec3 L0 = vec3(${c(E.lens[0])}, ${c(E.lens[1])}, ${c(E.lens[2])});
		vec3 d = lp - L0;
		float s = (${c(H-.005)} - L0.z) / max(d.z, 1e-4);
		vec3 h = L0 + d * s;
		return vec3(1.0 - (h.x - ${c(E.img.x-E.img.w/2)}) / ${c(E.img.w)}, (h.y - ${c(E.img.y-E.img.h/2)}) / ${c(E.img.h)}, 1.0 / s);
	}
	// the televisions stand in the beam's way: their shadows on the picture
	uniform vec3 tvLo[12], tvHi[12];
	float projShadow(vec3 lp) {
		vec3 L0 = vec3(${c(E.lens[0])}, ${c(E.lens[1])}, ${c(E.lens[2])});
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
		vec3 c = vec3(clamp(lp.x, ${c(c0.x0)}, ${c(c0.x1)}), ${c(c0.y)}, ${c(c0.z)});
		vec3 d = c - lp;
		float dd = dot(d, d);
		float face = 0.25 + 0.75 * max(0.0, dot(N, normalize(d)));
		return vec3(1.0, 0.06, 0.045) * 2.6 * face / (1.0 + dd * 0.055);
	}
	// the darkroom: the bare red bulb over the trays, the tube over the lines
	vec3 darkLight(vec3 lp, vec3 N) {
		vec3 d = vec3(${c(C.bulb[0])}, ${c(C.bulb[1])}, ${c(C.bulb[2])}) - lp;
		float dd = dot(d, d);
		vec3 c = vec3(1.0, 0.07, 0.04) * 1.15 * (0.2 + 0.8 * max(0.0, dot(N, normalize(d)))) / (0.02 + dd * 2.2);
		vec3 tq = vec3(${c(C.tube.x+.02)}, ${c(C.tube.y)}, clamp(lp.z, ${c(C.tube.z0)}, ${c(C.tube.z1)}));
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
		vec3 Ls = vec3(${c(L/2)}, 1.25, 1.6);
		vec3 d = lp - Ls;
		float t = (${c(-w0.depth)} - Ls.z) / d.z;
		vec3 h = Ls + d * t;
		float m = smoothstep(0.08, -0.05, abs(h.x - ${c(L/2)}) - ${c(w0.hw)}) * smoothstep(0.08, -0.05, h.y - ${c(w0.h)}) * step(0.0, h.y);
		float dd = dot(d, d);
		vec3 Ld = -normalize(d);
		vec3 c = vec3(1.0, 0.07, 0.05) * 26.0 * m * (0.15 + 0.85 * max(0.0, dot(N, Ld))) / (1.0 + dd * 0.55);
		vec3 sd = vec3(${c(I0.sign[0])}, ${c(I0.sign[1])}, ${c(I0.sign[2])}) - lp;
		c += vec3(1.0, 0.12, 0.1) * signK * 0.5 * (0.2 + 0.8 * max(0.0, dot(N, normalize(sd)))) / (0.05 + dot(sd, sd) * 3.0);
		return c;
	}
	uniform float spotK;
	const vec3 SPOTP = vec3(${c(n0.pos[0])}, ${c(n0.pos[1])}, ${c(n0.pos[2])});
	const vec3 SPOTA = vec3(${c(n0.axis[0])}, ${c(n0.axis[1])}, ${c(n0.axis[2])});
	const float SPOT_CI = ${c(Math.cos(n0.inner))}, SPOT_CO = ${c(Math.cos(n0.outer))};
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

`,it=`
	#extension GL_OES_standard_derivatives : enable
	precision highp float;
	uniform float time, yScale, mirrorOn, reflOn;
	uniform sampler2D reflTex;
	uniform vec2 reflSize;
	varying vec3 v_pos, v_nrm, v_eye;
	varying float v_kind;
	varying vec2 v_uv;
	${E0}

	const float DHW = ${c(w0.hw)}, DH = ${c(w0.h)};

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
				vec3 bd = normalize(vec3(${c(C.bulb[0])}, ${c(C.bulb[1])}, ${c(C.bulb[2])}) - lp);
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
				if (k == 0 && lp.z > ${c(K.z-1.5)}) {
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
	}`,At=`
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
	}`,Et=`
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
				vec3 Lp = normalize(vec3(${c(E.lens[0])}, ${c(E.lens[1])}, ${c(E.lens[2])}) - lp);
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
	}`,Ot=`
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
	}`,Pt=`
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
	}`,Dt=`
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
	}`,Ct=`
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
	}`,Vt=`
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
	}`,jt=`
	precision highp float;
	uniform float time;
	uniform sampler2D printTex, polTex;
	varying vec3 v_pos, v_eye;
	varying float v_tray;
	${E0}
	${ne}
	const vec3 BULB = vec3(${c(C.bulb[0])}, ${c(C.bulb[1])}, ${c(C.bulb[2])});
	void main() {
		vec3 lp = v_pos - RO;
		int k = int(v_tray + 0.5);
		float zc = k == 0 ? ${c(C.trays[0])} : (k == 1 ? ${c(C.trays[1])} : ${c(C.trays[2])});
		vec2 tl = vec2(lp.x - ${c(C.TXc)}, lp.z - zc);
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
	}`,Gt=`
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
		vec3 L0 = vec3(${c(E.lens[0])}, ${c(E.lens[1])}, ${c(E.lens[2])});
		vec3 dd = lp - L0;
		float s = (${c(H)} - L0.z) / max(dd.z, 1e-4);
		vec3 hh = L0 + dd * s;
		vec2 pu = vec2((hh.x - ${c(E.img.x-E.img.w/2)}) / ${c(E.img.w)}, (hh.y - ${c(E.img.y-E.img.h/2)}) / ${c(E.img.h)});
		v_w = (dd.z > 0.2 && pu.x > 0.0 && pu.x < 1.0 && pu.y > 0.0 && pu.y < 1.0) ? 1.6 : 0.0;
		vec4 v = view * vec4(lp + RO, 1.0);
		gl_Position = proj * v;
		float tw = 0.6 + 0.4 * sin(time * (1.0 + seed.w * 2.0) + seed.x * 80.0);
		v_b *= tw;
		gl_PointSize = clamp(pxScale * (0.012 + 0.012 * seed.w) / max(0.2, -v.z), 1.0, 6.0);
	}`,Wt=`
	precision highp float;
	varying float v_b, v_w;
	void main() {
		vec2 d = gl_PointCoord - 0.5;
		float a = smoothstep(0.5, 0.0, length(d));
		gl_FragColor = vec4((vec3(1.0, 0.14, 0.09) * min(v_b, 1.4) + vec3(1.0, 0.8, 0.55) * v_w) * a * 0.55, 1.0);
	}`;Pe.exports=function(e){let h=It(),m={position:e.buffer(h.pos),normal:e.buffer(h.nrm),kind:e.buffer(h.kind),uv:e.buffer(h.uv)},u=e.elements({data:h.idx.length>65535?new Uint32Array(h.idx):new Uint16Array(h.idx),type:h.idx.length>65535?"uint32":"uint16"}),k=e.texture({width:4,height:4,min:"linear",mag:"linear",wrap:"clamp"}),n=e.framebuffer({color:k,depth:!0}),s=e({framebuffer:n}),t=e.texture({width:1,height:1,data:[0,0,0,255]}),r=e({}),a=t,l=0,i=0,f=!1,_=[4,4],T=[0,0,0,0],x=null,d=[0,3.417,8.417,12.333,15.625,19.25,22.5,25.958,30.75,33.417,36.25,40.125,43.667],p=e.texture({width:400,height:300,min:"linear",mag:"linear",wrap:"clamp"}),v={v:null,on:0,ready:!1,clip:-1,since:0,stillUntil:0},S=()=>{if(typeof document=="undefined")return;if(!v.v){let I=document.createElement("video");I.src="res/redroom/reel.mp4",I.muted=!0,I.loop=!0,I.playsInline=!0,I.preload="auto",I.setAttribute("playsinline",""),I.setAttribute("muted",""),I.addEventListener("loadeddata",()=>{v.ready=!0});let V=()=>{v.v&&v.v.paused&&!k0.freeze&&performance.now()/1e3>v.stillUntil&&v.v.play().catch(()=>{})};window.addEventListener("pointerdown",V,{passive:!0}),window.addEventListener("touchend",V,{passive:!0}),v.v=I,I.play().catch(()=>{})}let o=v.v,g=performance.now()/1e3;if(!v.ready||o.readyState<2){v.on=0;return}let b=0;for(let I=0;I<d.length;I++)o.currentTime>=d[I]-.02&&(b=I);b!==v.clip&&(v.clip>=0&&++v.since>=2&&(v.since=0,v.stillUntil=g+3.4),v.clip=b);let R=g<v.stillUntil;if(k0.freeze||R?o.paused||o.pause():o.paused&&o.play().catch(()=>{}),v.on=R?0:1,!R)try{p.subimage(o)}catch(I){v.on=0}},M=e.texture({width:1,height:1,data:[0,0,0,255]}),y=1,q=o=>{let g=G=>{let Z=Math.sin(G*127.1)*43758.5453;return Z-Math.floor(Z)},b=Math.floor(o*9),R=g(b),I=g(Math.floor(o*.7)),V=.92+.08*Math.sin(o*120);return I>.55&&R>.6&&(V=R>.85?.08:.45),V},A={signK:()=>y,vidTex:()=>p,vidOn:()=>v.on,memRot:o=>Math.floor((typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:o.time)/21),memTex:()=>x||M,projT:o=>{let g=typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:o.time;return k0.freeze?(k0.frozenAt===null&&(k0.frozenAt=g),k0.frozenAt):(k0.frozenAt=null,g)},spotK:()=>pe.k,warnS:()=>k0.s,warnN:()=>k0.n,glitchK:()=>k0.glitch};K.stack.forEach((o,g)=>{let b=K.models[o[0]],R=K.G;A["tvLo["+g+"]"]=[L/2+o[2]-b.w*R/2,o.base,K.z+o[4]-.02],A["tvHi["+g+"]"]=[L/2+o[2]+b.w*R/2,o.base+b.h*R,K.z+o[4]+b.d*R]});let $=e({vert:rt,frag:it,attributes:m,elements:u,cull:{enable:!1},uniforms:{reflTex:()=>a,reflSize:()=>_,reflOn:()=>l,tvLight:()=>T,...A}}),P=o=>new Promise((g,b)=>{let R=new Image,I=V=>(V&V-1)===0;R.onload=()=>g(e.texture({data:R,min:I(R.width)&&I(R.height)?"mipmap":"linear",mag:"linear",wrap:"clamp"})),R.onerror=b,R.src=o}),j=K.stack.map((o,g)=>{let[b,,R,I,V]=o,G=Math.PI+I*Math.PI/180,Z=K.G,Q=Math.cos(G)*Z,o0=Math.sin(G)*Z,y0=N[0]+L/2+R,u0=N[1]+o.base,S0=N[2]+K.z+V;return{name:b,seed:(g+1)*.6180339%1,model:[Q,0,-o0,0,0,Z,0,0,o0,0,Q,0,y0,u0,S0,1]}}),F={},l0=(()=>{let o=document.createElement("canvas");o.width=160,o.height=20;let g=o.getContext("2d");return g.fillStyle="#000",g.fillRect(0,0,160,20),g.fillStyle="#fff",g.font='bold 19px "Courier New", Courier, monospace',g.textAlign="center",g.textBaseline="middle",St.split("").forEach((b,R)=>g.fillText(b,R*16+8,11)),e.texture({data:o,min:"nearest",mag:"nearest",wrap:"clamp"})})(),v0=null,p0=e({vert:At,frag:Et,attributes:{position:{buffer:e.prop("vb"),stride:36,offset:0},normal:{buffer:e.prop("vb"),stride:36,offset:12},uv:{buffer:e.prop("vb"),stride:36,offset:24},flag:{buffer:e.prop("vb"),stride:36,offset:32}},elements:e.prop("el"),offset:e.prop("offset"),count:e.prop("count"),cull:{enable:!1},uniforms:{model:e.prop("model"),seed:e.prop("seed"),dark:e.prop("dark"),emit:(o,g)=>g.emit||0,order:(o,g)=>g.order===void 0?-1:g.order,slot:(o,g)=>g.slot||0,letterTex:()=>l0,bodyTex:e.prop("tex"),...A,memTex:()=>v0||M,nMem:55,sigTime:o=>typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:o.time,tvLight:()=>T}});P("res/redroom/memories.webp").then(o=>{v0=o,x=o}).catch(o=>console.error("The memories did not load",o));for(let o in K.models){let g=K.models[o],b=[];for(let R=0;R<g.tex;R++)b.push(P("res/redroom/tv_"+o+"_"+R+".webp"));Promise.all([fetch(g.file).then(R=>R.arrayBuffer()),...b]).then(([R,...I])=>{let V=new Uint32Array(R,0,4),G=V[0],Z=V[1],Q=V[2],o0=V[3],y0=new Int32Array(R,16,Q*3),u0=16+Q*12,S0=e.buffer(new Float32Array(R,u0,G*9)),z0=u0+G*36,$0=o0?new Uint32Array(R.slice(z0,z0+Z*4)):new Uint16Array(R.slice(z0,z0+Z*2)),q0=e.elements({data:$0,type:o0?"uint32":"uint16"}),f0=[];for(let L0=0;L0<Q;L0++)f0.push({offset:y0[L0*3],count:y0[L0*3+1],tex:y0[L0*3+2]>=0?I[y0[L0*3+2]]:I[0]});F[o]={vb:S0,el:q0,parts:f0,dark:g.dark}}).catch(R=>console.error("A television did not load",R))}let X=[],d0=()=>{if(v0){X.length=0;for(let o of j){let g=F[o.name];if(g)for(let b of g.parts)X.push({vb:g.vb,el:g.el,offset:b.offset,count:b.count,tex:b.tex,model:o.model,seed:o.seed,dark:g.dark,order:K.letters[j.indexOf(o)],slot:j.indexOf(o)})}X.length&&p0(X)}},w=Nt(),D=null;P("res/redroom/polaroids.webp").then(o=>{D=o}).catch(o=>console.error("The photographs did not load",o));let W=e({vert:Ot,frag:Pt,attributes:{position:w.pos,normal:w.nrm,uv:w.uv,pic:w.pic,style:w.sty,pivot:{buffer:e.buffer(w.piv),size:4}},elements:e.elements({data:new Uint16Array(w.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...A,polTex:()=>D,tvLight:()=>T}}),B=(o,g)=>Promise.all([fetch(o).then(b=>b.arrayBuffer()),...g.map(P)]).then(([b,...R])=>{let I=new Uint32Array(b,0,4),V=I[0],G=I[1],Z=I[2],Q=I[3],o0=new Int32Array(b,16,Z*3),y0=16+Z*12,u0=y0+V*36,S0=e.buffer(new Float32Array(b,y0,V*9)),z0=Q?new Uint32Array(b.slice(u0,u0+G*4)):new Uint16Array(b.slice(u0,u0+G*2)),$0=e.elements({data:z0,type:Q?"uint32":"uint16"}),q0=[];for(let f0=0;f0<Z;f0++)q0.push({offset:o0[f0*3],count:o0[f0*3+1],tex:R[Math.max(0,o0[f0*3+2])],mat:o0[f0*3+2]});return{vb:S0,el:$0,parts:q0}}),Y=(o,g)=>{let b=new Array(16);for(let R=0;R<4;R++)for(let I=0;I<4;I++)b[R*4+I]=o[I]*g[R*4]+o[4+I]*g[R*4+1]+o[8+I]*g[R*4+2]+o[12+I]*g[R*4+3];return b},x0=(o,g,b)=>[1,0,0,0,0,1,0,0,0,0,1,0,o,g,b,1],G0=o=>{let g=Math.cos(o),b=Math.sin(o);return[1,0,0,0,0,g,b,0,0,-b,g,0,0,0,0,1]},h0=Y(x0(N[0]+E.x,N[1]+E.table,N[2]+E.z),G0(-E.pitch)),g0=E.tableK,ue=[g0,0,0,0,0,g0,0,0,0,0,g0,0,N[0]+L/2,N[1],N[2]+15,1],a0={},J0=["res/redroom/proj_0.webp"];B("res/redroom/proj_body.bin",J0).then(o=>{a0.body=o}).catch(o=>console.error(o)),B("res/redroom/proj_feed.bin",J0).then(o=>{a0.feed=o}).catch(o=>console.error(o)),B("res/redroom/proj_takeup.bin",J0).then(o=>{a0.takeup=o}).catch(o=>console.error(o)),B("res/redroom/table_all.bin",["res/redroom/table_0.webp"]).then(o=>{a0.table=o}).catch(o=>console.error(o));let me=(o,g)=>Y(h0,Y(x0(o[0],o[1],o[2]),Y(G0(g),x0(-o[0],-o[1],-o[2])))),ee=[],xe=o=>{ee.length=0;let g=(b,R,I)=>{if(b)for(let V of b.parts)ee.push({vb:b.vb,el:b.el,offset:V.offset,count:V.count,tex:V.tex,model:R,seed:0,dark:I})};g(a0.table,ue,.9),g(a0.body,h0,1),g(a0.feed,me(E.feed,-o*2.6),1),g(a0.takeup,me(E.takeup,-o*3.5),1),ee.length&&p0(ee)},P0=[],W0=[];{let o=[N[0]+E.lens[0],N[1]+E.lens[1],N[2]+E.lens[2]];[.96,.86,.76,.66,.56,.46,.36].forEach((g,b)=>{let R=E.img.w/2*g,I=E.img.h/2*g,V=[[-R,-I],[R,-I],[R,I],[-R,I]].map(([G,Z])=>[N[0]+E.img.x+G,N[1]+E.img.y+Z,N[2]+H-.02]);for(let G=0;G<4;G++){let Z=V[G],Q=V[(G+1)%4];P0.push(...o,...Z,...Q),W0.push(b,b,b)}})}let re=e({vert:Dt,frag:Ct,attributes:{position:P0,layer:W0},count:P0.length/3,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{...A,tvLight:()=>T}}),_0=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale, pxScale; attribute vec3 position; void main() { vec3 p = position; p.y *= yScale; vec4 v = view * vec4(p, 1.0); gl_Position = proj * v; gl_PointSize = clamp(pxScale * 0.22 / max(0.3, -v.z), 4.0, 220.0); }",frag:"precision highp float; uniform float time; void main() { vec2 d = gl_PointCoord - 0.5; float r = length(d); float a = exp(-r * r * 160.0) * 1.6 + 0.35 * exp(-r * r * 30.0) + 0.12 * exp(-r * r * 8.0) + 0.5 * exp(-d.y * d.y * 2500.0) * exp(-abs(d.x) * 7.0); gl_FragColor = vec4(vec3(1.0, 0.84, 0.62) * a * (0.9 + 0.1 * sin(time * 37.0)), 1.0); }",attributes:{position:[N[0]+E.lens[0],N[1]+E.lens[1],N[2]+E.lens[2]+.01]},count:1,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),te=null;P("res/redroom/print.webp").then(o=>{te=o}).catch(o=>console.error(o));let oe=[],ie=[];C.trays.forEach((o,g)=>{let b=C.TX/2-.009,R=C.TZ/2-.009,I=C.TXc,V=C.liquid,G=[[I-b,o-R],[I+b,o-R],[I+b,o+R],[I-b,o+R]].map(([Z,Q])=>[N[0]+Z,N[1]+V,N[2]+Q]);oe.push(...G[0],...G[2],...G[1],...G[0],...G[3],...G[2]);for(let Z=0;Z<6;Z++)ie.push(g)});let le=e({vert:Vt,frag:jt,attributes:{position:oe,tray:ie},count:oe.length/3,cull:{enable:!1},uniforms:{...A,tvLight:()=>T,printTex:()=>te||M,polTex:()=>D||M}}),H0=ct();for(let o of w.pegs)H0.box(o[0]-.008,o[1]-.045,o[2]-.011,o[0]+.008,o[1]+.03,o[2]+.011,z.PEG);let F0=e({vert:rt,frag:it,attributes:{position:H0.pos,normal:H0.nrm,kind:H0.kind,uv:H0.uv},elements:e.elements({data:new Uint16Array(H0.idx),type:"uint16"}),cull:{enable:!1},uniforms:{...A,reflTex:()=>t,reflSize:[4,4],reflOn:0,tvLight:()=>T}}),ge=o=>{let g=Math.cos(o),b=Math.sin(o);return[g,0,-b,0,0,1,0,0,b,0,g,0,0,0,0,1]},s0=(o,g,b,R)=>Y(x0(N[0]+o,N[1]+g,N[2]+b),ge(R||0));B("res/redroom/plastic_all.bin",["res/redroom/plastic_0.webp"]).then(o=>{a0.jug=o}).catch(o=>console.error(o)),B("res/redroom/multi_cleaner_all.bin",["res/redroom/multi_cleaner_0.webp"]).then(o=>{a0.can=o}).catch(o=>console.error(o)),B("res/redroom/pull_all.bin",["res/redroom/pull_0.webp"]).then(o=>{a0.socket=o}).catch(o=>console.error(o)),B("res/redroom/bulb_all.bin",["res/redroom/bulb_0.webp","res/redroom/bulb_1.webp"]).then(o=>{a0.bulb=o}).catch(o=>console.error(o));let N0=C.top,B0=C.b[0],Se=[["jug",s0(.16,N0,B0+.3,.4)],["jug",s0(.17,N0,B0+.52,-.3)],["jug",s0(.36,N0,B0+.4,2.2)],["can",s0(.14,N0,B0+.95,1.57)],["can",s0(.15,N0,B0+1.3,1.45)],["jug",s0(.16,N0,C.b[1]-.35,.9)],["can",s0(.2,N0,C.b[1]-.8,1.7)],["socket",s0(C.bulb[0],C.bulb[1]+.065,C.bulb[2],0)],["bulb",Y(s0(C.bulb[0],C.bulb[1]+.048,C.bulb[2],0),G0(Math.PI))]],J=(o,g)=>[o,0,0,0,0,g===void 0?o:g,0,0,0,0,o,0,0,0,0,1];B("res/redroom/wtable_all.bin",["res/redroom/wtable_0.webp"]).then(o=>{a0.wtable=o}).catch(o=>console.error(o)),B("res/redroom/wchair_all.bin",["res/redroom/wchair_0.webp"]).then(o=>{a0.wchair=o}).catch(o=>console.error(o)),B("res/redroom/cstick_holder.bin",["res/redroom/cstick_0.webp"]).then(o=>{a0.holder=o}).catch(o=>console.error(o)),B("res/redroom/cstick_candle.bin",["res/redroom/cstick_0.webp"]).then(o=>{a0.candle=o}).catch(o=>console.error(o)),B("res/redroom/rose_all.bin",["res/redroom/rose_0.webp"]).then(o=>{a0.rose=o}).catch(o=>console.error(o)),B("res/redroom/camera_all.bin",[0,1,2,3].map(o=>"res/redroom/camera_"+o+".webp")).then(o=>{a0.camera=o}).catch(o=>console.error(o));let ce=e0.k,fe=e0.z,ye=Math.PI/2,K0=[["wtable",Y(s0(e0.x,0,fe,ye),J(ce)),1.7],["wchair",Y(s0(e0.x-e0.depth/2-.36,0,fe-.42,ye+.05),J(ce)),1.6],["wchair",Y(s0(e0.x-e0.depth/2-.42,0,fe+.45,ye-.12),J(ce)),1.6],["wchair",Y(s0(e0.x+.02,0,fe-e0.half-.36,.06),J(ce)),1.6],["wchair",Y(s0(e0.x-.05,0,fe+e0.half+.4,Math.PI-.1),J(ce)),.95]];for(let[o,g,b]of e0.candles)K0.push(["holder",s0(o,e0.top,g,b*3),.9]),K0.push(["candle",Y(s0(o,e0.top,g,b*3),Y(x0(0,.156,0),Y(J(1,b),x0(0,-.156,0)))),1.15]);{let o=7,g=()=>(o=o*16807%2147483647,(o-1)/2147483646),b=e0.vase;for(let R=0;R<9;R++){let I=R*2.39996+g()*.4,V=R===0?.04:.16+g()*.2,G=.66+g()*.12,Z=b.h+.25*G-.1-(R===0?-.04:g()*.05),Q=Y(Y(s0(b.x,e0.top+.02,b.z,I),G0(V)),Y(x0(0,Z-.02,0),Y(G0(Math.PI/2),Y(J(G),x0(0,-.13,0)))));K0.push(["rose",Q,2])}}for(let[o,g,b]of e0.laid)K0.push(["rose",Y(s0(o,e0.top+.002,g,b),J(.72)),2]);B("res/redroom/woman_all.bin",["res/redroom/woman_0.webp"]).then(o=>{a0.woman=o}).catch(o=>console.error(o));let We=Y(s0(i0.x,0,i0.z,i0.yaw),J(i0.k));K0.push(["woman",We,2.6]),K0.push(["camera",s0(.15,C.shelf.y,(C.shelf.z0+C.shelf.z1)/2,ye-.4),1.7]);let gt=()=>{let o=[];for(let[b,R]of Se){let I=a0[b];I&&I.parts.forEach((V,G)=>o.push({vb:I.vb,el:I.el,offset:V.offset,count:V.count,tex:V.tex,model:R,seed:0,dark:b==="jug"||b==="can"?.85:.7,emit:b==="bulb"&&V.mat===0?1.6:0}))}let g=qt();for(let[b,R,I]of K0){let V=a0[b];if(!(!V||g&&b==="woman"))for(let G of V.parts)o.push({vb:V.vb,el:V.el,offset:G.offset,count:G.count,tex:G.tex,model:R,seed:0,dark:I,emit:b==="woman"?-1:0})}o.length&&p0(o),_t(),a0.woman&&!g&&yt(),pe.k>.001&&!Je&&(wt(),bt()),le(),F0()},qe=[],He=[];for(let Q=0;Q<8;Q++)for(let o0=0;o0<8;o0++){let y0=(q0,f0)=>[-.08+.285*q0,.405+.20999999999999996*f0,-.222+-.05400000000000002*f0-.008],u0=o0/8,S0=(o0+1)/8,z0=Q/8,$0=(Q+1)/8;for(let[q0,f0]of[[u0,z0],[S0,z0],[S0,$0],[u0,z0],[S0,$0],[u0,$0]])qe.push(...y0(q0,f0)),He.push(q0,f0)}let yt=e({vert:`
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
			}`,attributes:{position:qe,uv:He},count:qe.length/3,cull:{enable:!1},uniforms:{...A,model:()=>We,tvLight:()=>T}}),ke=[],Fe=[];{let o=n0.axis,g=Math.abs(o[1])>.9?[1,0,0]:[0,1,0],b=(Q,o0)=>[Q[1]*o0[2]-Q[2]*o0[1],Q[2]*o0[0]-Q[0]*o0[2],Q[0]*o0[1]-Q[1]*o0[0]],I=(Q=>{let o0=Math.hypot(...Q);return Q.map(y0=>y0/o0)})(b(o,g)),V=b(o,I),G=n0.pos[1]/-o[1],Z=40;[1,.82,.64,.46,.3].forEach((Q,o0)=>{let y0=Math.tan(n0.outer*Q)*G;for(let u0=0;u0<Z;u0++){let S0=u0/Z*Math.PI*2,z0=(u0+1)/Z*Math.PI*2,$0=f0=>[0,1,2].map(L0=>N[L0]+n0.pos[L0]+o[L0]*G+(I[L0]*Math.cos(f0)+V[L0]*Math.sin(f0))*y0),q0=[0,1,2].map(f0=>N[f0]+n0.pos[f0]);ke.push(...q0,...$0(S0),...$0(z0)),Fe.push(o0,o0,o0)}})}let wt=e({vert:`
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
				float along = length(lp - vec3(${c(n0.pos[0])}, ${c(n0.pos[1])}, ${c(n0.pos[2])})) / ${c(n0.pos[1]/-n0.axis[1])};
				float haze = 0.55 + 0.9 * rfbm(lp.xz * 1.3 + vec2(lp.y * 0.6, time * 0.05)) * rfbm(lp.xy * 0.9 - time * 0.03);
				float dist = length(v_eye - v_pos);
				float a = spotK * haze * (0.55 + 0.45 * smoothstep(1.0, 0.0, along)) * smoothstep(0.0, 0.12, along) * smoothstep(0.98, 0.8, along) * smoothstep(0.3, 1.6, dist);
				gl_FragColor = vec4(vec3(1.0, 0.88, 0.74) * a * 0.045, 1.0);
			}`,attributes:{position:ke,layer:Fe},count:ke.length/3,cull:{enable:!1},depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{spotK:()=>pe.k}}),Ue=90,Be=[];for(let o=0;o<Ue;o++)Be.push(Math.random(),Math.random(),Math.random(),Math.random());let bt=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, yScale, pxScale, spotK;
			attribute vec4 seed;
			varying float v_a;
			void main() {
				vec3 S = vec3(${c(N[0]+n0.pos[0])}, ${c(N[1]+n0.pos[1])}, ${c(N[2]+n0.pos[2])});
				vec3 A = vec3(${c(n0.axis[0])}, ${c(n0.axis[1])}, ${c(n0.axis[2])});
				// somewhere in the cone, drifting slowly down and round
				float al = 0.25 + 0.7 * fract(seed.x - time * 0.004 * (0.5 + seed.w));
				float len = al * ${c(n0.pos[1]/-n0.axis[1])};
				float ang = seed.y * 6.2832 + time * 0.03 * (seed.z - 0.5);
				float rr = sqrt(seed.z) * tan(${c(n0.outer)}) * len * 0.92;
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
			}`,attributes:{seed:Be},count:Ue,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2,spotK:()=>pe.k}}),_t=e({vert:`
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
			}`,attributes:{fp:[].concat(...e0.flames.map((o,g)=>[N[0]+o[0],N[1]+o[1],N[2]+o[2],g*1.37]))},count:e0.flames.length,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),we=document.createElement("canvas");we.width=512,we.height=192;{let o=we.getContext("2d");o.fillStyle="#000",o.fillRect(0,0,512,192),o.font='bold 128px "Helvetica Neue", Arial, sans-serif',o.textAlign="center",o.textBaseline="middle",o.shadowColor="#ff2a20",o.shadowBlur=28,o.fillStyle="#ff6a5a",o.fillText("ENTER",256,100),o.shadowBlur=0,o.fillStyle="#ffd8d0",o.fillText("ENTER",256,100)}let zt=e.texture({data:we,min:"linear",mag:"linear",wrap:"clamp"}),D0=I0.sign,be=.3,_e=.1125,ze=D0[2]-.025,Lt=e({vert:"precision highp float; uniform mat4 proj, view; uniform float yScale; attribute vec3 position; attribute vec2 uv; varying vec2 v_uv; void main() { v_uv = uv; vec3 p = position; p.y *= yScale; gl_Position = proj * view * vec4(p, 1.0); }",frag:"precision highp float; uniform sampler2D tex; uniform float signK; varying vec2 v_uv; void main() { vec3 c = texture2D(tex, v_uv).rgb; vec3 col = c * vec3(1.6, 0.55, 0.5) * signK + vec3(0.06, 0.0, 0.0); gl_FragColor = vec4(col, 1.0); }",attributes:{position:[[D0[0]+be,D0[1]-_e,ze],[D0[0]-be,D0[1]-_e,ze],[D0[0]-be,D0[1]+_e,ze],[D0[0]+be,D0[1]+_e,ze]].map(o=>[o[0]+N[0],o[1]+N[1],o[2]+N[2]]),uv:[[0,1],[1,1],[1,0],[0,0]]},elements:[0,1,2,0,2,3],cull:{enable:!1},uniforms:{tex:zt,signK:()=>y}}),Ke=220,Xe=[];for(let o=0;o<Ke;o++)Xe.push(Math.random(),Math.random(),Math.random(),Math.random());let Mt=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b;
			void main() {
				vec3 L0 = vec3(${c(N[0]+E.lens[0])}, ${c(N[1]+E.lens[1])}, ${c(N[2]+E.lens[2])});
				vec3 C = vec3(${c(N[0]+E.img.x)}, ${c(N[1]+E.img.y)}, ${c(N[2]+H)});
				vec3 fw = normalize(C - L0);
				vec3 rt = normalize(cross(fw, vec3(0.0, 1.0, 0.0)));
				vec3 up = cross(rt, fw);
				// most of them close to the lens
				float along = 0.15 + pow(seed.x, 2.2) * 7.5;
				float sp = along / length(C - L0);
				vec2 off = (vec2(seed.y, seed.z) - 0.5) * vec2(${c(E.img.w)}, ${c(E.img.h)}) * sp;
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
			}`,frag:"precision highp float; varying float v_b; void main() { vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(vec3(1.0, 0.84, 0.6) * v_b * a, 1.0); }",attributes:{seed:Xe},count:Ke,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),Ie=70,Ye=[];for(let o=0;o<Ie;o++)Ye.push(Math.random(),Math.random(),Math.random(),o<Ie*.6?1:0);let Tt=e({vert:`
			precision highp float;
			uniform mat4 proj, view;
			uniform float time, pxScale, yScale;
			attribute vec4 seed;
			varying float v_b, v_a, v_s;
			void main() {
				vec3 L0 = vec3(${c(N[0]+E.lens[0])}, ${c(N[1]+E.lens[1])}, ${c(N[2]+E.lens[2])});
				vec3 C = vec3(${c(N[0]+E.img.x)}, ${c(N[1]+E.img.y)}, ${c(N[2]+H)});
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
				float rc = 0.04 + al * ${c(E.img.h*.5)} / length(C - L0);
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
			}`,attributes:{seed:Ye},count:Ie,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),Ze=2200,Qe=[];for(let o=0;o<Ze;o++)Qe.push(Math.random(),Math.random(),Math.random(),Math.random());let Rt=e({vert:Gt,frag:Wt,attributes:{seed:Qe},count:Ze,primitive:"points",depth:{enable:!0,mask:!1},blend:{enable:!0,func:{src:"one",dst:"one"}},uniforms:{pxScale:o=>o.viewportHeight*1.2}}),Je=!1,et=o=>{let g=!!(o&&o.reflected);g||S(),Je=g;let b=performance.now()/1e3,R=.8+.12*Math.sin(b*47)*Math.sin(b*3.1)+.08*Math.sin(b*23+1.3);T[0]=.8*R,T[1]=.84*R,T[2]=.95*R,y=q(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:b),$(),Lt(),d0(),D&&W(),gt(),xe(typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:b),x&&!(typeof window!="undefined"&&window.__noBeam)&&re(),_0(),!g&&!(typeof window!="undefined"&&window.__noSmoke)&&Tt(),g||Mt(),g||Rt()};return et.reflect=(o,g)=>r(b=>{let R=b.viewportWidth,I=b.viewportHeight,V=Math.max(2,Math.round(R/2)),G=Math.max(2,Math.round(I/2)),Z=!f;if((n.width!==V||n.height!==G)&&(n.resize(V,G),Z=!0),_[0]=R,_[1]=I,l=1,!Z&&++i%g!==0){a=k;return}a=t,s(()=>{e.clear({color:[0,0,0,1],depth:1}),o()}),a=k,f=!0}),et};var Oe=null;Object.assign(Pe.exports,{O:N,W:L,L:H,H:r0,ROOM:{W:L,L:H,H:r0,WIN:O,DOOR:w0,ENT:I0,SHAFTS:U,TV:K,DARK:C,PROJ:E,CABLE:A0,POL:U0,TBL:e0,WOMAN:i0,winZ:Me,vaultY:X0},POST:{threshold:.3},sunGLSL:$t,bakedSun(e){return Oe||(Oe=e.texture({width:1,height:1,data:[0,0,0,0]})),Oe},ready:()=>!0,setFlower(){},setGuide(){},setWind(){},setSpot(e){pe.k=e},setWarn(e){Object.assign(k0,e)},setViewer(e){lt.eye=e?e.slice():null}})});var xt=Ne((Jt,mt)=>{"use strict";var R0=De(),{O:Ce}=R0,{W:m0,L:pt,TV:se,DARK:Z0,PROJ:Q0,TBL:b0,WOMAN:Re}=R0.ROOM,ht=e=>[e[0]+Ce[0],e[1]+Ce[1],e[2]+Ce[2]],vt=(e,h,m)=>e+(h-e)*m,ve=e=>Math.max(0,Math.min(1,e)),Ht="Some grief is not yours to witness.",V0=e=>(e=ve(e),e*e*(3-2*e)),dt=[Re.x,0,Re.z],je=Math.sin(Re.yaw),Ge=Math.cos(Re.yaw),O0=(e,h,m)=>[dt[0]+je*e+Ge*(m||0),h,dt[2]+Ge*e-je*(m||0)],j0=Q0.x,Ft=Q0.table,ae=Q0.z,he=[j0+Q0.feed[0],Ft+Q0.feed[1],ae+Q0.feed[2]],Te=Q0.lens,Ve=Z0.trays[0],Ut=[{eye:[m0/2+.15,1.55,-9.6],at:[m0/2,1.7,0],fov:40,dof:.05,p:{fov:58}},{eye:[m0/2+.05,1.6,-3],at:[m0/2,1.85,1.5],fov:50,dof:.05,p:{fov:70}},{eye:[m0/2-.2,1.5,.9],at:[m0/2-3,1.4,7],fov:56,dof:.04,p:{fov:74}},{eye:[m0-4.4,1.55,1.2],at:[m0-.7,1.05,b0.z+.2],fov:46,dof:.06,p:{eye:[m0-4.8,1.6,.9],fov:68}},{eye:[b0.x-1.4,b0.top+.48,b0.z-.7],at:[b0.x+.05,b0.top+.26,b0.z+0],fov:40,dof:.32,p:{fov:50}},{eye:[b0.stack[0]-.35,b0.top+.75,b0.stack[1]-.25],at:[b0.stack[0]+.02,b0.top,b0.stack[1]+.02],fov:34,dof:.3,p:{fov:50}},{eye:[3.3,1.55,1.3],at:[.3,1.35,5.2],fov:50,dof:.05,p:{eye:[2.8,1.6,.9],fov:72}},{eye:[1.05,1.5,Ve-.42],at:[Z0.TXc-.02,Z0.liquid,Ve+.04],fov:34,dof:.2,p:{eye:[1,1.55,Ve-.45],fov:52}},{eye:[.62,1.68,(Z0.shelf.z0+Z0.shelf.z1)/2-.36],at:[.14,1.55,(Z0.shelf.z0+Z0.shelf.z1)/2],fov:34,dof:.34,p:{fov:48}},{eye:[2,1.6,8.3],at:[.4,2.25,11.3],fov:50,dof:.12,p:{eye:[1.8,1.6,8.1],fov:72}}];function ut(e,h){let m=e.length-1,u=Math.max(0,Math.min(m,h)),k=Math.min(m-1,Math.floor(u)),n=u-k,s=e[Math.max(0,k-1)],t=e[k],r=e[k+1],a=e[Math.min(m,k+2)],l=n*n,i=l*n;return[0,1,2].map(f=>.5*(2*t[f]+(-s[f]+r[f])*n+(2*s[f]-5*t[f]+4*r[f]-a[f])*l+(-s[f]+3*t[f]-3*r[f]+a[f])*i))}var de=0;function Bt(){let e=Ut.slice(),h=R0.ROOM.CABLE,m=h.path,u=h.socket[2],k=h.socket[0];e.push({eye:[k+1.05,.42,u-.45],at:[k,.27,u+.08],fov:42,dof:.32,p:{eye:[k+1.3,.48,u-.55],fov:58}});let[n,s]=h.run;for(let d of[.04,.22,.42,.62,.82]){let p=Math.round(n+(s-n)*d),v=m[Math.max(0,p-6)],S=m[Math.min(m.length-1,p+6)],M=m[p],y=S[0]-v[0],q=S[2]-v[2],A=Math.hypot(y,q)||1;y/=A,q/=A,e.push({eye:[M[0]-y*.8-q*.12,.3,M[2]-q*.8+y*.12],at:[M[0]+y*1.5,.06,M[2]+q*1.5],fov:44,dof:.24,pass:!0,p:{fov:60}})}e.push({eye:[m0-3,.45,u-1.6],at:[m0-.3,1.9,u+.9],fov:50,dof:.1,p:{fov:70}});let t=(d,p,v)=>[d[0]+p[0]*v,d[1]+p[1]*v,d[2]+p[2]*v],r=11,a=()=>(r=r*16807%2147483647,(r-1)/2147483646),l=(R0.ROOM.POL.spots||[]).filter(d=>d.n[0]<-.5&&d.c[2]>10.5&&d.c[2]<21.5&&d.c[1]>1.9&&d.c[1]<4.6),i=(d,p)=>Math.abs(d.c[2]-p)+Math.abs(d.c[1]-3)*.4,f=[];for(let d of[12.6,15,17.3]){let p=null;for(let v of l)(!p||i(v,d)<i(p,d))&&(p=v);p&&f.indexOf(p)<0&&f.push(p)}f.forEach((d,p)=>{let v=d.n,S=d.c;p>0&&e.push({eye:t(t(S,v,2.2),[0,.15,-.6],1),at:S,fov:50,dof:.05,pass:!0}),e.push({eye:t(t(S,v,1),[0,.06,-.3],1),at:S,fov:36,dof:.26,p:{fov:50}})}),e.push({eye:[j0+2,1.35,ae-1.5],at:[j0,1.35,ae+.1],fov:42,dof:.12,p:{eye:[j0+1.6,1.4,ae-1.5],fov:62}}),e.push({eye:[j0+.85,he[1]+.12,he[2]-.35],at:[he[0],he[1]-.05,he[2]],fov:36,dof:.32,p:{fov:52}}),e.push({eye:[j0+.42,Te[1]+.08,Te[2]+1.35],at:[j0,Te[1],Te[2]],fov:36,dof:.35,p:{fov:52}}),e.push({eye:[j0-.55,1.75,ae-1.4],at:[m0/2,5,pt],fov:50,dof:.06,p:{fov:70}}),e.push({eye:[j0-.2,3.3,ae+3.2],at:[m0/2,5.4,pt],fov:52,dof:.04,pass:!0,p:{fov:72}});let _=se.stack;e.push({eye:[m0/2+1.4,1.2,se.z-4.9],at:[m0/2,1.75,se.z],fov:50,dof:.05,p:{fov:70}});let T=_.map((d,p)=>p);for(let d=T.length-1;d>0;d--){let p=Math.floor(a()*(d+1)),v=T[d];T[d]=T[p],T[p]=v}T=T.slice(0,10);let x=null;for(let d of T){let p=_[d],v=p.screen,S=p.facing,M=p.size*1.25;if(x){let q=[(x[0]+v[0])/2,(x[1]+v[1])/2+.2,Math.min(x[2],v[2])-2.6];e.push({eye:q,at:[(x[0]+v[0])/2,(x[1]+v[1])/2,se.z],fov:46,dof:.05,pass:!0})}let y=(a()-.5)*.5;e.push({eye:[v[0]+S[0]*M+y,v[1]+.05+(a()-.5)*.15,v[2]+S[2]*M],at:[v[0],v[1],v[2]],fov:30,dof:.3,p:{fov:44}}),x=v}return e.push({eye:[m0/2+.3,3.3,se.z-2.3],at:[m0/2,2.4,se.z+3],fov:52,dof:.04,pass:!0}),e.push({eye:O0(-.9,4.4,.2),at:O0(4.6,1.5),fov:54,dof:.04,pass:!0}),de=e.length,e.push({eye:O0(-3.4,2.5,-1.5),at:O0(1,.75),fov:46,dof:.08,p:{fov:66}}),e.push({eye:O0(-2.55,2.3,0),at:O0(5.2,.95),fov:56,dof:.12,p:{eye:O0(-2.55,2.4,0),fov:74}}),e.push({eye:O0(-1.6,.92,0),at:O0(3,1.02),fov:50,dof:.28,p:{eye:O0(-1.9,.95,0),fov:64}}),e}function Kt(){let e=null,h=null,m=null,u=null,k=t=>{let r=e.createBuffer(1,Math.floor(e.sampleRate*t),e.sampleRate),a=r.getChannelData(0);for(let l=0;l<a.length;l++)a[l]=Math.random()*2-1;return r},n=()=>{if(e){e.state==="suspended"&&e.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;e=window.__redAudio||new t,window.__redAudio=e,e.state==="suspended"&&e.resume(),u=e.createGain(),u.gain.value=.9,u.connect(e.destination),h=e.createGain(),h.gain.value=0;let r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=170,r.Q.value=4,[55,55.6,110.3].forEach((i,f)=>{let _=e.createOscillator();_.type=f<2?"sawtooth":"sine",_.frequency.value=i,_.connect(r),_.start()}),r.connect(h),h.connect(u),m=e.createGain(),m.gain.value=0;let a=e.createBufferSource();a.buffer=k(2),a.loop=!0;let l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=3200,l.Q.value=.6,a.connect(l),l.connect(m),m.connect(u),a.start()},s=(t,r,a,l,i)=>{t.gain.setValueAtTime(0,r),t.gain.linearRampToValueAtTime(l,r+a),t.gain.exponentialRampToValueAtTime(1e-4,r+a+i)};return{start:n,set(t,r){if(!e)return;let a=e.currentTime;h.gain.setTargetAtTime(t*.16,a,.15),m.gain.setTargetAtTime(r*.035,a,.08)},tick(){if(!e)return;let t=e.currentTime,r=e.createOscillator();r.type="square",r.frequency.setValueAtTime(1180,t),r.frequency.exponentialRampToValueAtTime(240,t+.09);let a=e.createGain();s(a,t,.002,.09,.12),r.connect(a),a.connect(u),r.start(t),r.stop(t+.2);let l=e.createOscillator();l.type="sine",l.frequency.setValueAtTime(90,t),l.frequency.exponentialRampToValueAtTime(40,t+.2);let i=e.createGain();s(i,t,.004,.35,.25),l.connect(i),i.connect(u),l.start(t),l.stop(t+.35)},clunk(){if(!e)return;let t=e.currentTime,r=e.createOscillator();r.type="sine",r.frequency.setValueAtTime(75,t),r.frequency.exponentialRampToValueAtTime(38,t+.25);let a=e.createGain();s(a,t,.003,.5,.35),r.connect(a),a.connect(u),r.start(t),r.stop(t+.5);let l=e.createBufferSource();l.buffer=k(.08);let i=e.createBiquadFilter();i.type="highpass",i.frequency.value=1800;let f=e.createGain();s(f,t,.001,.25,.06),l.connect(i),i.connect(f),f.connect(u),l.start(t)},burst(){if(!e)return;let t=e.currentTime,r=e.createBufferSource();r.buffer=k(2.4);let a=e.createBiquadFilter();a.type="bandpass",a.Q.value=.7,a.frequency.setValueAtTime(600,t),a.frequency.exponentialRampToValueAtTime(5e3,t+1.6);let l=e.createGain();l.gain.setValueAtTime(1e-4,t),l.gain.exponentialRampToValueAtTime(.5,t+.5),l.gain.setValueAtTime(.5,t+1.7),l.gain.exponentialRampToValueAtTime(1e-4,t+2.3),r.connect(a),a.connect(l),l.connect(u),r.start(t);let i=e.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(110,t),i.frequency.exponentialRampToValueAtTime(18,t+2);let f=e.createGain();s(f,t,.05,.18,2),i.connect(f),f.connect(u),i.start(t),i.stop(t+2.2)},stop(){if(h&&(h.gain.value=0),m&&(m.gain.value=0),u)try{u.disconnect()}catch(t){}e=null,h=m=u=null}}}var Xt=`
.red-sub {
	position: fixed; left: 50%; bottom: 9vh; transform: translateX(-50%); z-index: 406;
	width: min(92vw, 900px); text-align: center; pointer-events: none;
	font: italic 400 clamp(19px, 2.5vw, 32px)/1.35 'Cormorant Garamond', Georgia, serif;
	color: #f1e7dc; letter-spacing: .035em; text-shadow: 0 2px 18px rgba(0,0,0,.9), 0 0 2px rgba(0,0,0,.8);
	opacity: 0;
}`;mt.exports=function(h){h=h||{};let m=Bt(),u=m.length-1,k=m.map((w,D)=>w.pass?-1:D).filter(w=>w>=0),n=(w,D)=>{if(D>=0){for(let W of k)if(W>=w-.06)return W;return k[k.length-1]}for(let W=k.length-1;W>=0;W--)if(k[W]<=w+.06)return k[W];return k[0]},s=(w,D)=>{if(D>0){for(let W of k)if(W>w+.01)return W;return k[k.length-1]}for(let W=k.length-1;W>=0;W--)if(k[W]<w-.01)return k[W];return k[0]},t=null,r=null,a=0,l=0,i=0,f=null,_=null,T=0,x=Kt(),d=document.createElement("div");d.className="red-sub",d.textContent=Ht;let p=document.createElement("style");p.textContent=Xt,document.head.appendChild(p),document.body.appendChild(d);let v=0,S=0,M=null,y=-10,q=0,A=null,$=1,P=-10,j=[],F=(w,D,W)=>{window.addEventListener(w,D,W),j.push([w,D,W])},l0=w=>{let D=Math.sign(w);if(!(!D||f!==null)){if(D>0&&S>=u-.001&&v>u-.08||D<0&&l>0){let W=l<1?2.2:.75;l=Math.max(0,Math.min(2.4,l+Math.max(-.2,Math.min(.13,w))*W)),y=q,P=q,$=D;return}D!==$&&q-P<.25&&Math.abs(w)<.02||(D!==$&&($=D),P=q,S=Math.max(0,Math.min(u,S+w)),y=q)}},v0=w=>{if(f===null){if(w>0&&S>=u-.001||w<0&&l>0){l0(w>0?.12:-.12);return}$=w>0?1:-1,S=s(S,w),y=q-10}};F("pointerdown",()=>x.start()),F("keydown",()=>x.start()),F("touchend",()=>x.start()),F("wheel",w=>{if(w.target.closest&&w.target.closest(".st-ui"))return;w.preventDefault();let D=w.deltaMode===1?w.deltaY*16:w.deltaMode===2?w.deltaY*window.innerHeight:w.deltaY;l0(Math.max(-.6,Math.min(.6,D/700)))},{passive:!1});let t0=null;F("pointerdown",w=>{w.target.closest&&w.target.closest("button, a, .st-ui")||(t0={lx:w.clientX,ly:w.clientY,moved:0,t:performance.now()})}),F("pointermove",w=>{if(!t0)return;let D=w.clientX-t0.lx,W=w.clientY-t0.ly;t0.lx=w.clientX,t0.ly=w.clientY;let B=Math.abs(W)>=Math.abs(D)?-W:-D;t0.moved+=Math.abs(B),t0.moved>6&&l0(B/(window.innerHeight*.55))}),F("pointerup",()=>{let w=t0;t0=null,w&&w.moved<8&&performance.now()-w.t<450&&v0(1)}),F("keydown",w=>{w.key==="ArrowDown"||w.key==="ArrowRight"||w.key==="PageDown"||w.key===" "?v0(1):(w.key==="ArrowUp"||w.key==="ArrowLeft"||w.key==="PageUp")&&v0(-1)});function p0(w){q=w,A===null&&(A=w);let D=M===null?0:Math.min(.1,w-M);M=w,typeof window!="undefined"&&window.__redShot!==void 0&&/tourdebug/.test(location.search)&&(v=S=window.__redShot,t=null),typeof window!="undefined"&&window.__press!==void 0&&/tourdebug/.test(location.search)&&(l=a=window.__press),q-y>.35&&(S+=(n(S,$)-S)*(1-Math.exp(-D*2))),v+=(S-v)*(1-Math.exp(-D*1.7)),Math.abs(S-v)<1e-4&&(v=S);let W=window.innerWidth<window.innerHeight,B=m.map(J=>W&&J.p?Object.assign({},J,J.p):J),Y=Math.min(u-1,Math.floor(v)),x0=v-Y,G0=x0*x0*(3-2*x0),h0=ut(B.map(J=>J.eye),v),g0=ut(B.map(J=>J.at),v);(!t||D===0||D>.09)&&(t=h0.slice(),r=g0.slice());let ue=1-Math.exp(-D*5);for(let J=0;J<3;J++)t[J]+=(h0[J]-t[J])*ue,r[J]+=(g0[J]-r[J])*ue;h0=t.slice(),g0=r.slice();let a0=B[Y],J0=B[Math.min(u,Y+1)],me=vt(a0.fov,J0.fov,G0),ee=vt(a0.dof,J0.dof,G0);q-y>2.2&&f===null&&(l=Math.max(0,l-D*.14));let xe=a<1?.9:.55;a+=Math.max(-xe*D*2,Math.min(xe*D,l-a)),a>2.08&&f===null&&(f=w,x.burst());let P0=ve(a),W0=ve(a-1),re=Math.min(10,Math.max(0,(a-1)*10.5));if(Math.floor(re)>i&&(x.tick(),navigator.vibrate))try{navigator.vibrate(28)}catch(J){}i=Math.floor(re);let _0=f===null?0:ve((w-f)/2.3);typeof window!="undefined"&&window.__xk!==void 0&&/tourdebug/.test(location.search)&&(_0=window.__xk);let te=V0(P0)*.28+W0*.06;h0=[h0[0]+je*te,h0[1]-te*.08,h0[2]+Ge*te];let oe=P0*.004+W0*.008+_0*.05;h0[0]+=Math.sin(w*37)*oe,h0[1]+=Math.sin(w*41+1)*oe;let ie=v>de-.35?1:0;ie&&!T&&(T=1,_=w,x.clunk()),!ie&&T&&v<de-.8&&(T=0);let le=0;if(T){let J=w-_;le=J<.75?[0,1,.15,.9,.3,1][Math.min(5,Math.floor(J/.125))]:1}let H0=Math.sin(w*13)*Math.sin(w*5.3);le*=1-(P0*.25+W0*.3)*(H0>.6?1:0)-_0*(Math.sin(w*60)>0?.8:0),R0.setSpot(Math.max(0,le)),R0.setWarn({s:V0((a-.12)/.45),n:re,glitch:V0(_0*1.6),freeze:a>.15}),d.style.opacity=String(V0((a-.35)/.4)*(1-V0((_0-.1)/.3))*(.88+.12*Math.sin(w*2))),x.set(V0(P0)*(1-_0)+W0*.5,V0((a-.12)/.45)*(1-_0*.5)),f!==null&&_0>=1&&(h.onExpel?h.onExpel():X(),f=null);let F0=typeof window!="undefined"&&window.__tvTime!=null?window.__tvTime:w,ge=Math.hypot(g0[0]-h0[0],g0[1]-h0[1],g0[2]-h0[2]),s0=.01+.03*Math.min(1,ge/6);h0=[h0[0]+Math.sin(F0*.31)*s0,h0[1]+Math.sin(F0*.43+1)*s0*.6,h0[2]+Math.cos(F0*.27)*s0],g0=[g0[0]+Math.sin(F0*.21+2)*s0*.8,g0[1]+Math.sin(F0*.37)*s0*.5,g0[2]];let N0=ht(h0),B0=ht(g0),Se=Math.max(1-ve((w-A-.3)/1.8),V0((_0-.82)/.18));return R0.setViewer(N0),{eye:N0,target:B0,fov:me,roll:Math.sin(F0*.17)*.004,moving:!0,look:{letterbox:.45,focus:ge,aperture:ee,vignette:.3+P0*.25,exposure:1.45,shafts:1,fade:Se,fadeColor:[0,0,0],glitch:V0((_0-.25)/.6)*.9+W0*.06}}}function X(){a=l=0,i=0,f=null,T=0,v=S=0,t=null,A=null,R0.setWarn({s:0,n:0,glitch:0,freeze:!1}),R0.setSpot(0)}function d0(){for(let[w,D,W]of j)window.removeEventListener(w,D,W);j.length=0,x.stop(),d.remove(),p.remove(),R0.setWarn({s:0,n:0,glitch:0,freeze:!1}),R0.setSpot(0),R0.setViewer(null)}return/tourdebug/.test(location.search)&&(window.__redTourInfo={END:u,REVEAL:de,STOPS:k}),{update:p0,tap:()=>v0(1),dispose:d0,placeFlower(){},startSound:()=>x.start(),get scroll(){return v},END:u,REVEAL:de}}});window.__redRoom={studio:De(),tour:xt()};})();

# piano.json -> res/piano.bin  (vertex clustering, per-vertex material)
import json, struct, sys, numpy as np
M=json.load(open('piano.json'))
S=0.1        # model units -> metres (body 1.0 m tall)
G=float(sys.argv[1]) if len(sys.argv)>1 else 0.004   # cluster cell, metres
# material ids: 0 black lacquer, 1 brass/strings, 2 soundboard wood, 3 white keys, 4 black keys, 5 leather, 6 dark metal (casters)
MAT={('10384_GrandPiano',0):0,('10384_GrandPiano',1):1,('10384_GrandPiano',2):2,('10384_GrandPiano',3):6,
     ('10384_GrandPiano.001',0):0,('10384_GrandPiano.001',1):0,('10384_GrandPiano.001',2):2,
     ('10384_GrandPiano.002',0):3,('10384_GrandPiano.002',1):4,('Cube.031',0):0,
     ('Sgabello1',0):5,('Sgabello1',1):0,('Sgabello1',2):6}
P=[];T=[];MV=[]
for m in M:
    if m['name']=='Plane': continue
    mt=np.array(m['matrix']).reshape(4,4).T
    V=np.array(m['verts']);V=((mt[:3,:3]@V.T).T+mt[:3,3])*S
    # blender z-up -> y-up: (x,y,z) -> (x, z, -y)
    V=np.stack([V[:,0],V[:,2],-V[:,1]],1)
    # cluster per (object, material) so seams between materials stay
    for p,mi in zip(m['polys'],m['pmat']):
        mid=MAT[(m['name'],mi)]
        for k in range(1,len(p)-1):
            T.append((V[p[0]],V[p[k]],V[p[k+1]],mid))
tri=np.array([[a,b,c] for a,b,c,_ in T]);mats=np.array([t[3] for t in T])
print('tris in',len(tri))
pts=tri.reshape(-1,3)
key=np.floor(pts/G).astype(np.int64)
key=np.concatenate([key,np.repeat(mats,3)[:,None]],1)
uk,inv=np.unique(key,axis=0,return_inverse=True)
inv=inv.reshape(-1)
# representative = mean of members
sums=np.zeros((len(uk),3));np.add.at(sums,inv,pts);cnt=np.bincount(inv);verts=sums/cnt[:,None]
vm=uk[:,3]
idx=inv.reshape(-1,3)
ok=(idx[:,0]!=idx[:,1])&(idx[:,1]!=idx[:,2])&(idx[:,0]!=idx[:,2])
idx=idx[ok]
# drop duplicate tris
s=np.sort(idx,1);_,u=np.unique(s,axis=0,return_index=True);idx=idx[np.sort(u)]
print('verts',len(verts),'tris',len(idx))
# normals with a crease: corners whose faces bend more than ~40 degrees get their own vertex
fn=np.cross(verts[idx[:,1]]-verts[idx[:,0]],verts[idx[:,2]]-verts[idx[:,0]])
fa=np.linalg.norm(fn,axis=1);fu=fn/np.maximum(fa,1e-12)[:,None]
from collections import defaultdict
inc=defaultdict(list)
for t in range(len(idx)):
    for k in range(3): inc[idx[t,k]].append(t)
COS=np.cos(np.radians(40))
nv=[];nn=[];nm=[];newidx=idx.copy()
for v,faces in inc.items():
    groups=[]
    for t in faces:
        for g in groups:
            if fu[t]@g[0]>COS: g[1].append(t); break
        else: groups.append([fu[t],[t]])
    for g in groups:
        n=sum(fn[t] for t in g[1]);n=n/max(np.linalg.norm(n),1e-12)
        vid=len(nv);nv.append(verts[v]);nn.append(n);nm.append(vm[v])
        for t in g[1]:
            for k in range(3):
                if idx[t,k]==v: newidx[t,k]=vid
verts=np.array(nv);N=np.array(nn);vm=np.array(nm);idx=newidx
print('after crease verts',len(verts))
lo=verts.min(0);size=verts.max(0)-lo
print('bbox',lo,size)
q=np.round((verts-lo)/size*65535).astype(np.uint16)
n8=np.clip(np.round(N*127),-127,127).astype(np.int8)
assert len(verts)<65536
with open(sys.argv[2] if len(sys.argv)>2 else '/home/claude/muzammil-portfolio/res/piano.bin','wb') as f:
    f.write(b'PIAN');f.write(struct.pack('<II',len(verts),idx.size));f.write(struct.pack('<6f',*lo,*size))
    f.write(q.tobytes());f.write(idx.astype(np.uint16).tobytes());f.write(n8.tobytes());f.write(vm.astype(np.uint8).tobytes())

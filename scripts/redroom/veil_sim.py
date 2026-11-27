# (run from the repository root: python3 scripts/redroom/<name>.py; the downloaded models unzipped under models/)
# drapes a sheer circular veil over the woman's head (res/redroom/woman_all.bin, her
# model units), pinned at the crown, falling to her shoulders; writes veil.bin
import sys; sys.path.insert(0, 'scripts/redroom')
import numpy as np, partbin, trimesh
from scipy.spatial import cKDTree
V, I, sub = partbin.read('res/redroom/woman_all.bin')
P = V[:, :3].astype(float); F = I.reshape(-1, 3)
mesh = trimesh.Trimesh(P, F, process=False)
# the surface, densely sampled, normals turned outwards from her middle
S, fi = trimesh.sample.sample_surface_even(mesh, 160000, seed=3)
N = mesh.face_normals[fi]
axis = np.column_stack([np.full(len(S), 0.035), S[:, 1], np.full(len(S), -0.06)])
out = S - axis; out[:, 1] = np.where(S[:, 1] > 0.9, (S[:, 1] - 0.86), 0) * 2
flip = (N * out).sum(1) < 0; N[flip] *= -1
keep = S[:, 1] > 0.45
S, N = S[keep], N[keep]
tree = cKDTree(S)
top = P[P[:, 1].argmax()]
print('crown', top.round(3))
crown = np.array([0.035, top[1], -0.035])
R, NR, NS = 0.37, 26, 112
TH = 0.009          # how far the cloth stands off her
pts, uv = [], []
for j in range(NR + 1):
    r = R * (j / NR) ** 1.0
    for i in range(NS if j else 1):
        a = 2 * np.pi * i / NS
        # (a little longer behind than in front)
        rr = r * (1.0 + 0.1 * (-np.cos(a)) * (j / NR))
        pts.append([crown[0] + rr * np.sin(a), crown[1] + 0.02, crown[2] - rr * np.cos(a)]); uv.append([i / NS if j else 0.0, j / NR])
pts = np.array(pts); uv = np.array(uv)
def vid(j, i): return 0 if j == 0 else 1 + (j - 1) * NS + (i % NS)
edges = []
for j in range(1, NR + 1):
    for i in range(NS):
        edges.append((vid(j, i), vid(j, i + 1)))          # round the ring
        edges.append((vid(j - 1, i), vid(j, i)))          # out along the spoke
        if j > 1:
            edges.append((vid(j - 1, i), vid(j, i + 1)))  # shear
            edges.append((vid(j - 1, i + 1), vid(j, i)))
        if j > 1: edges.append((vid(j - 2, i), vid(j, i)))       # bend, along
        edges.append((vid(j, i), vid(j, i + 2)))                 # bend, round
edges = np.unique(np.sort(np.array(edges), 1), axis=0)
rest = np.linalg.norm(pts[edges[:, 0]] - pts[edges[:, 1]], axis=1)
stiff = np.ones(len(edges))
pinned = uv[:, 1] <= 1.5 / NR
x = pts.copy(); xp = x.copy()
g = np.array([0, -9.8, 0]); dt = 1 / 240
for step in range(2400):
    v = (x - xp) * 0.985
    xp = x.copy()
    x = x + v + g * dt * dt
    for it in range(6):
        d = x[edges[:, 1]] - x[edges[:, 0]]
        L = np.linalg.norm(d, axis=1) + 1e-9
        # cloth stretches very little, compresses freely into folds
        c = (L - rest) / L
        c = np.where(c < 0, c * 0.08, c) * 0.5
        corr = d * c[:, None]
        acc = np.zeros_like(x); cnt = np.zeros(len(x))
        np.add.at(acc, edges[:, 0], corr); np.add.at(acc, edges[:, 1], -corr)
        np.add.at(cnt, edges[:, 0], 1); np.add.at(cnt, edges[:, 1], 1)
        x += acc / np.maximum(cnt, 1)[:, None] * 1.6
        x[pinned] = pts[pinned] + [0, -0.02, 0]
        # her: pushed out to lie on her, never inside
        dist, k = tree.query(x, k=1)
        s, n = S[k], N[k]
        dd = ((x - s) * n).sum(1)
        hit = (dd < TH) & (dist < 0.06)
        x[hit] += n[hit] * (TH - dd[hit])[:, None]
        # (friction where it rests on her)
        xp[hit] = xp[hit] * 0.5 + x[hit] * 0.5
    if step % 600 == 0: print(step, x[:, 1].min().round(3))
F2 = []
for j in range(1, NR + 1):
    for i in range(NS):
        if j == 1: F2.append([vid(0, 0), vid(1, i), vid(1, i + 1)])
        else:
            a, b, c, d = vid(j - 1, i), vid(j - 1, i + 1), vid(j, i), vid(j, i + 1)
            F2 += [[a, c, d], [a, d, b]]
F2 = np.array(F2)
vm = trimesh.Trimesh(x, F2, process=False)
vn = vm.vertex_normals.copy()
o = x - np.array([0.035, 0.75, -0.06]); vn[(vn * o).sum(1) < 0] *= -1
# a light smoothing so the folds read soft
for _ in range(2):
    nb = np.zeros_like(x); cn = np.zeros(len(x))
    np.add.at(nb, F2[:, 0], x[F2[:, 1]] + x[F2[:, 2]]); np.add.at(cn, F2[:, 0], 2)
    np.add.at(nb, F2[:, 1], x[F2[:, 0]] + x[F2[:, 2]]); np.add.at(cn, F2[:, 1], 2)
    np.add.at(nb, F2[:, 2], x[F2[:, 0]] + x[F2[:, 1]]); np.add.at(cn, F2[:, 2], 2)
    sm = nb / cn[:, None]
    x = np.where(pinned[:, None], x, x * 0.6 + sm * 0.4)
    dist, k = tree.query(x); s, n = S[k], N[k]; dd = ((x - s) * n).sum(1); hit = (dd < TH * 0.8) & (dist < 0.06); x[hit] += n[hit] * (TH * 0.8 - dd[hit])[:, None]
vm = trimesh.Trimesh(x, F2, process=False); vn = vm.vertex_normals.copy(); o = x - np.array([0.035, 0.75, -0.06]); vn[(vn * o).sum(1) < 0] *= -1
Vout = np.hstack([x, vn, uv, uv[:, 1:2]])
partbin.write('res/redroom/veil.bin', Vout, F2.reshape(-1), [[0, F2.size, -1]])
np.save('/tmp/veil_x.npy', x); np.save('/tmp/veil_f.npy', F2)
print('verts', len(x), 'tris', len(F2), 'hem y', np.percentile(x[uv[:, 1] > 0.99, 1], [0, 50, 100]).round(3))

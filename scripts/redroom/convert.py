# (run from the repository root: python3 scripts/redroom/<name>.py; the downloaded models unzipped under models/)
# glTF -> the red room's prop format (res/redroom/<name>_all.bin + <name>_<k>.webp)
# usage: convert.py scene.gltf outdir/name ratio size [axis] [texsize]
#   size: metres of the largest horizontal extent (or 'h0.85' for height)
import sys, os, subprocess, json, numpy as np, trimesh
sys.path.insert(0, os.path.dirname(__file__))
import partbin
from PIL import Image
src, out, ratio, size = sys.argv[1], sys.argv[2], float(sys.argv[3]), sys.argv[4]
texsize = int(sys.argv[5]) if len(sys.argv) > 5 else 1024
tmp = '/tmp/_conv.glb'
if ratio < 1:
    subprocess.run(['gltfpack', '-i', src, '-o', tmp, '-noq', '-si', str(ratio), '-tc' if False else '-v'], check=True, capture_output=True)
    path = tmp
else:
    path = src
s = trimesh.load(path, force='scene')
groups = {}   # texture image id -> list of (P, N, UV)
images = {}
for node in s.graph.nodes_geometry:
    T, gn = s.graph[node]
    g = s.geometry[gn]
    if not hasattr(g, 'faces') or len(g.faces) == 0: continue
    P = trimesh.transform_points(g.vertices, T)
    R = T[:3, :3]
    N = g.vertex_normals @ R.T
    N /= np.linalg.norm(N, axis=1, keepdims=True) + 1e-12
    vis = g.visual
    uv = getattr(vis, 'uv', None)
    if uv is None or len(uv) != len(P): uv = np.zeros((len(P), 2))
    uv = np.column_stack([uv[:, 0], 1.0 - uv[:, 1]])
    mat = getattr(vis, 'material', None)
    img = None
    if mat is not None:
        img = getattr(mat, 'baseColorTexture', None)
        if img is None: img = getattr(mat, 'image', None)
        if img is None and hasattr(mat, 'diffuseTexture'): img = mat.diffuseTexture
        occ = getattr(mat, 'occlusionTexture', None)
        if img is not None and occ is not None:
            a = np.array(img.convert('RGBA')).astype(float)
            o = np.array(occ.convert('RGB').resize(img.size)).astype(float)[..., 0:1] / 255.0
            a[..., :3] *= 0.35 + 0.65 * o
            img = Image.fromarray(a.clip(0, 255).astype(np.uint8))
    import hashlib
    key = hashlib.md5(img.tobytes()).hexdigest() if img is not None else 'none'
    if img is not None: images[key] = img
    groups.setdefault(key, []).append((P, N, uv, g.faces))
# gather
allP = np.concatenate([p for gl in groups.values() for (p, _, _, _) in gl])
mn, mx = allP.min(0), allP.max(0)
if size.startswith('h'):
    k = float(size[1:]) / (mx[1] - mn[1])
else:
    k = float(size) / max(mx[0] - mn[0], mx[2] - mn[2])
ctr = np.array([(mn[0] + mx[0]) / 2, mn[1], (mn[2] + mx[2]) / 2])
V, I, sub = [], [], []
texnames = []
keys = list(groups.keys())
for ti, key in enumerate(keys):
    off = sum(len(i) for i in I)
    start_idx = sum(len(i) for i in I)
    cnt = 0
    for (P, N, uv, F) in groups[key]:
        base = sum(len(v) for v in V)
        Pp = (P - ctr) * k
        flag = np.zeros((len(P), 1))
        V.append(np.hstack([Pp, N, uv, flag]))
        I.append((F + base).reshape(-1))
        cnt += F.size
    sub.append([start_idx, cnt, ti if key != 'none' else -1])
    if key != 'none':
        im = images[key].convert('RGBA')
        sc = min(1.0, texsize / max(im.size))
        if sc < 1: im = im.resize((int(im.size[0] * sc), int(im.size[1] * sc)), Image.LANCZOS)
        if np.array(im)[..., 3].min() > 250: im = im.convert('RGB')
        name = f'{out}_{ti}.webp'
        im.save(name, 'WEBP', quality=82, method=6)
        texnames.append(os.path.basename(name))
V = np.concatenate(V); I = np.concatenate(I)
partbin.write(out + '_all.bin', V, I, sub)
print(json.dumps({'tris': int(len(I) // 3), 'verts': int(len(V)), 'size_m': ((mx - mn) * k).round(3).tolist(), 'tex': texnames, 'bin_kb': os.path.getsize(out + '_all.bin') // 1024}))

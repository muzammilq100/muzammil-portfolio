# (run from the repository root: python3 scripts/redroom/<name>.py; the downloaded models unzipped under models/)
import sys, os, numpy as np, trimesh, hashlib, json
sys.path.insert(0, 'scripts/redroom'); import partbin
from PIL import Image
s = trimesh.load('models/vintage_books/scene.gltf', force='scene')
K = 0.55; out = {}
img_saved = False
for node in s.graph.nodes_geometry:
    T, gn = s.graph[node]; g = s.geometry[gn]
    P = trimesh.transform_points(g.vertices, T); N = g.vertex_normals @ T[:3, :3].T
    N /= np.linalg.norm(N, axis=1, keepdims=True)
    uv = np.column_stack([g.visual.uv[:, 0], 1.0 - g.visual.uv[:, 1]])
    mn, mx = P.min(0), P.max(0); ctr = np.array([(mn[0]+mx[0])/2, mn[1], (mn[2]+mx[2])/2])
    name = gn.split('_inst')[0].replace('prop_', '').replace('_0', '')
    name = gn[:22].replace('prop_','').replace('_inst_00','').replace('_inst','')
    V = np.hstack([(P-ctr)*K, N, uv, np.zeros((len(P),1))])
    partbin.write(f'res/redroom/b_{name}_all.bin', V, g.faces.reshape(-1), [[0, g.faces.size, 0]])
    out[name] = ((mx-mn)*K).round(3).tolist()
    if not img_saved:
        g.visual.material.baseColorTexture.convert('RGB').resize((1024,1024)).save('res/redroom/books_0.webp', 'WEBP', quality=82, method=6); img_saved = True
print(json.dumps(out, indent=0))

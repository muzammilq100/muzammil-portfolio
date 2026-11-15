#!/usr/bin/env python3
"""
HIS CLOTHES AND HAIR
--------------------
Rebuilds the parts of res/avatar/ that are made here rather than scanned:

  the outfit   a long black wool overcoat worn open (structured shoulders,
               notch lapels, hem at mid calf), a black ribbed roll-neck
               tucked in, a black leather belt with a steel buckle, wide
               pleated pinstripe trousers, and a narrow maroon scarf: once
               round the neck, one end down the front over the coat, the
               other thrown back over the shoulder
  the head, skin and hair
               see character.py: his scanned head softened into a puppet's,
               painted skin, and some three hundred sculpted locks of hair

Everything is built round his skeleton in its rest pose (arms straight
out; x to his left, y up, z in front of him; metres at the model's own
size, 1.877 tall) and given bone weights so it follows him. The face,
eyes, hands and shoes are his scan and are left alone.

    python3 scripts/avatar/build_outfit.py            writes res/avatar/avatar.{bin,json}
    python3 scripts/avatar/build_outfit.py --preview  also draws /tmp/outfit_*.png

It can be run again and again: the parts it replaces are kept (unused) in
the file, so the old hair is still there to measure the new one from.
"""
import json, sys, os, struct
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
RES = os.path.join(HERE, '..', '..', 'res', 'avatar')
PI = np.pi

MADE = ['trousers', 'knit', 'coat', 'skirt', 'belt', 'collar', 'lapels', 'scarf', 'hair', 'avaturn_hair_0',
        'Head_Mesh', 'Eye_Mesh', 'EyeAO_Mesh', 'Eyelash_Mesh']
HEAD_PARTS = ['Head_Mesh', 'Eye_Mesh', 'EyeAO_Mesh', 'Eyelash_Mesh']
LEVEL = 'A'      # how far the head is stylised (character.py)

# ---------------------------------------------------------------- file

def read():
    meta = json.load(open(os.path.join(RES, 'avatar.json')))
    buf = open(os.path.join(RES, 'avatar.bin'), 'rb').read()
    return meta, buf

def mesh_arrays(buf, me):
    n = me['n']
    return dict(
        pos=np.frombuffer(buf, np.float32, n * 3, me['pos']).reshape(-1, 3).astype(np.float64),
        nrm=np.frombuffer(buf, np.float32, n * 3, me['nrm']).reshape(-1, 3).astype(np.float64),
        jnt=np.frombuffer(buf, np.uint8, n * 4, me['jnt']).reshape(-1, 4).copy(),
        wgt=np.frombuffer(buf, np.float32, n * 4, me['wgt']).reshape(-1, 4).copy(),
        idx=np.frombuffer(buf, np.uint16, me['ni'], me['idx']).reshape(-1, 3).copy())

# ---------------------------------------------------------------- skeleton

def rest_world(bones):
    def trs(t, r, s):
        x, y, z, w = r
        R = np.array([[1 - 2 * (y * y + z * z), 2 * (x * y - w * z), 2 * (x * z + w * y)],
                      [2 * (x * y + w * z), 1 - 2 * (x * x + z * z), 2 * (y * z - w * x)],
                      [2 * (x * z - w * y), 2 * (y * z + w * x), 1 - 2 * (x * x + y * y)]])
        M = np.eye(4); M[:3, :3] = R * np.array(s); M[:3, 3] = t
        return M
    W = []
    for b in bones:
        L = trs(b['t'], b['r'], b['s'])
        W.append(L if b['parent'] < 0 else W[b['parent']] @ L)
    return W

smooth = lambda a, b, x: (lambda t: t * t * (3 - 2 * t))(np.clip((np.asarray(x, float) - a) / (b - a), 0, 1))

def interp(y, table):
    """table: rows of (y, v1, v2, ...) in rising y; smooth interpolation of each column"""
    T = np.array(table, float)
    return [np.interp(y, T[:, 0], T[:, k]) for k in range(1, T.shape[1])]

# ---------------------------------------------------------------- surfaces

class Part:
    def __init__(self, name, kind):
        self.name, self.kind = name, kind
        self.pos, self.uv, self.w, self.idx = [], [], [], []
        self.grid = None
    def add_grid(self, P, UV, Wt, closed=False, flip=False):
        """P[r][c] points; Wt[r][c] = {bone: weight}. Returns the index of the first vertex."""
        R, C = len(P), len(P[0])
        base = len(self.pos)
        for r in range(R):
            for c in range(C):
                self.pos.append(P[r][c]); self.uv.append(UV[r][c]); self.w.append(Wt[r][c])
        cols = C if closed else C - 1
        for r in range(R - 1):
            for c in range(cols):
                a = base + r * C + c; b = base + r * C + (c + 1) % C
                d = base + (r + 1) * C + c; e = base + (r + 1) * C + (c + 1) % C
                self.idx += ([a, b, e, a, e, d] if not flip else [a, e, b, a, d, e])
        return base
    def finish(self, byname):
        pos = np.array(self.pos, float); idx = np.array(self.idx, int).reshape(-1, 3)
        # smooth normals
        n = np.zeros_like(pos)
        fn = np.cross(pos[idx[:, 1]] - pos[idx[:, 0]], pos[idx[:, 2]] - pos[idx[:, 0]])
        for k in range(3): np.add.at(n, idx[:, k], fn)
        n /= (np.linalg.norm(n, axis=1, keepdims=True) + 1e-12)
        jn = np.zeros((len(pos), 4), np.uint8); wg = np.zeros((len(pos), 4), np.float32)
        for i, d in enumerate(self.w):
            it = sorted(d.items(), key=lambda kv: -kv[1])[:4]
            s = sum(v for _, v in it) or 1
            for k, (b, v) in enumerate(it):
                jn[i, k] = byname[b]; wg[i, k] = v / s
        return dict(pos=pos.astype(np.float32), nrm=n.astype(np.float32), uv=np.array(self.uv, np.float32),
                    jnt=jn, wgt=wg, idx=idx.astype(np.uint16))

# ---------------------------------------------------------------- weights

SPINE = [('Hips', 1.001), ('Spine', 1.086), ('Spine1', 1.213), ('Spine2', 1.381), ('Neck', 1.563), ('Head', 1.677)]

def spine_w(y):
    """which of the bones of the back a point at height y follows"""
    names = [n for n, _ in SPINE]; ys = [h for _, h in SPINE]
    cen = [(ys[i] + ys[i + 1]) / 2 for i in range(len(ys) - 1)] + [ys[-1] + 0.06]
    if y <= cen[0]: return {names[0]: 1.0}
    for i in range(len(cen) - 1):
        if y <= cen[i + 1]:
            t = float(smooth(cen[i], cen[i + 1], y))
            return {names[i]: 1 - t, names[i + 1]: t}
    return {names[-1]: 1.0}

def mixw(a, b, t):
    out = {}
    for k, v in a.items(): out[k] = out.get(k, 0) + v * (1 - t)
    for k, v in b.items(): out[k] = out.get(k, 0) + v * t
    return {k: v for k, v in out.items() if v > 1e-4}

# ---------------------------------------------------------------- the trousers

def wrap(a):
    return (a + PI) % (2 * PI) - PI

def trousers():
    P = Part('trousers', 3)
    N = 36
    # the seat: one tube from the waist to the fork
    rows = [(1.062, 0.168, 0.118), (1.03, 0.176, 0.124), (0.98, 0.190, 0.132), (0.93, 0.198, 0.136), (0.895, 0.200, 0.136)]
    G, U, Wt = [], [], []
    for y, rx, rz in rows:
        g, u, w = [], [], []
        for c in range(N):
            a = c / N * 2 * PI
            g.append([rx * np.sin(a), y, 0.006 + rz * np.cos(a)])
            u.append([a * (rx + rz) / 2, y])
            lw = 0.5 * float(smooth(0.99, 0.90, y))
            side = 'LeftUpLeg' if np.sin(a) >= 0 else 'RightUpLeg'
            w.append(mixw({'Hips': 1.0}, {side: 1.0}, lw * abs(np.sin(a))))
        G.append(g); U.append(u); Wt.append(w)
    P.add_grid(G, U, Wt, closed=True)
    # the legs: wide and straight, a pressed crease down the front and back,
    # a pleat under the waistband, and the folds a real pair falls into:
    # pulled across from the fork, creased behind the knee, stacked in a
    # soft break over the shoe, and finished with a turn-up
    for sg, up, lo in ((1, 'LeftUpLeg', 'LeftLeg'), (-1, 'RightUpLeg', 'RightLeg')):
        tab = [(0.075, 0.092, 0.112, 0.100), (0.16, 0.091, 0.110, 0.100), (0.544, 0.090, 0.108, 0.098),
               (0.80, 0.092, 0.114, 0.098), (0.905, 0.096, 0.124, 0.100), (0.93, 0.098, 0.128, 0.100)]
        ys = [(y, 0.0) for y in np.concatenate([np.linspace(0.93, 0.63, 9), np.linspace(0.60, 0.44, 12),
                                                np.linspace(0.41, 0.27, 4), np.linspace(0.24, 0.125, 7)])]
        ys += [(0.123, 0.007), (0.075, 0.007), (0.073, -0.006)]          # the turn-up
        G, U, Wt = [], [], []
        for y, cuff in ys:
            rx, rz, cx = interp(y, tab)
            g, u, w = [], [], []
            for c in range(N):
                a = c / N * 2 * PI
                front, inner = np.cos(a), max(0.0, -sg * np.sin(a))
                # the crease: a sharp ridge at the very front and back of the leg
                cr = 1 + 0.045 * (np.exp(-((np.cos(a) - 1) / 0.06) ** 2) + 0.6 * np.exp(-((np.cos(a) + 1) / 0.06) ** 2))
                d = cuff
                # the pleat, opening from the waistband and dying out down the thigh
                d += 0.007 * np.exp(-(wrap(a - sg * 0.55) / 0.15) ** 2) * float(smooth(0.60, 0.93, y))
                # cloth pulled across from the fork
                d += 0.006 * np.sin(y * 40 - sg * wrap(a) * 2.0) * float(smooth(0.60, 0.88, y)) * (0.4 + 0.6 * inner)
                # creases behind the knee
                d += 0.006 * np.sin((y - 0.52) * 2 * PI / 0.055) * np.exp(-((y - 0.52) / 0.07) ** 2) * max(0.0, -front)
                # the long soft flutes of a wide leg
                d += 0.004 * np.sin(a * 3 + sg + y * 5) * float(smooth(0.92, 0.6, y))
                # and the break: it stacks where it meets the shoe
                d += 0.010 * np.sin((y - 0.12) * 2 * PI / 0.07 + 1.2 * np.sin(a)) * float(smooth(0.30, 0.14, y)) * (0.55 + 0.45 * front)
                g.append([sg * cx + (rx * cr + d) * np.sin(a), y, 0.008 + (rz * cr + d) * np.cos(a)])
                u.append([a * (rx + rz) / 2 + sg * 3.0, y])
                if y > 0.88: ww = mixw({'Hips': 1.0}, {up: 1.0}, float(smooth(0.94, 0.86, y)))
                else: ww = mixw({up: 1.0}, {lo: 1.0}, float(smooth(0.60, 0.49, y)))
                w.append(ww)
            G.append(g); U.append(u); Wt.append(w)
        P.add_grid(G, U, Wt, closed=True, flip=True)
    return P

def belt():
    P = Part('belt', 4)
    N = 32
    G, U, Wt = [], [], []
    for y, k in ((1.030, 1.0), (1.034, 1.035), (1.058, 1.035), (1.062, 1.0)):
        g, u, w = [], [], []
        for c in range(N):
            a = c / N * 2 * PI
            rx, rz = 0.178 * k, 0.126 * k
            g.append([rx * np.sin(a), y, 0.006 + rz * np.cos(a)])
            # (the buckle is drawn where uv.x is near 0: the front)
            aa = a if a <= PI else a - 2 * PI
            u.append([aa * 0.15, y])
            w.append({'Hips': 1.0})
        G.append(g); U.append(u); Wt.append(w)
    P.add_grid(G, U, Wt, closed=True)
    return P

# ---------------------------------------------------------------- the roll-neck

def neck_axis(y):
    return -0.046 + (y - 1.563) / (1.677 - 1.563) * 0.028

def knit():
    P = Part('knit', 2)
    N = 32
    tab = [(1.00, 0.170, 0.118, 0.006), (1.06, 0.172, 0.120, 0.006), (1.15, 0.170, 0.120, 0.004), (1.28, 0.182, 0.128, 0.002),
           (1.40, 0.192, 0.132, -0.002), (1.48, 0.180, 0.118, -0.012), (1.525, 0.140, 0.104, -0.024), (1.555, 0.104, 0.094, -0.034), (1.572, 0.078, 0.082, -0.040)]
    G, U, Wt = [], [], []
    for y in [1.00, 1.04, 1.08, 1.13, 1.19, 1.25, 1.31, 1.37, 1.42, 1.46, 1.495, 1.525, 1.548, 1.562, 1.572]:
        rx, rz, zc = interp(y, tab)
        g, u, w = [], [], []
        for c in range(N):
            a = c / N * 2 * PI
            g.append([rx * np.sin(a), y, zc + rz * np.cos(a)])
            u.append([a * 0.16, y]); w.append(spine_w(y))
        G.append(g); U.append(u); Wt.append(w)
    P.add_grid(G, U, Wt, closed=True)
    return P

def collar():
    """the roll of the neck: up the neck, folded over and down again"""
    P = Part('collar', 2)
    N = 32
    prof = [(1.566, 0.0765), (1.585, 0.0745), (1.610, 0.0735), (1.636, 0.0735), (1.650, 0.0700), (1.652, 0.0640),
            (1.646, 0.0610)]
    G, U, Wt = [], [], []
    for k, (y, r) in enumerate(prof):
        g, u, w = [], [], []
        for c in range(N):
            a = c / N * 2 * PI
            # a little higher at the back, as a soft roll sits
            yy = y + 0.006 * (-np.cos(a)) * (k > 0)
            g.append([r * np.sin(a), yy, neck_axis(yy) + r * 1.04 * np.cos(a) + 0.004])
            u.append([a * 0.074, y]); w.append({'Neck': 1.0})
        G.append(g); U.append(u); Wt.append(w)
    P.add_grid(G, U, Wt, closed=True)
    return P

# ---------------------------------------------------------------- the coat

COAT = [  # y, half width, depth behind, depth in front, centre z, half the opening at the front
    (0.34, 0.280, 0.188, 0.160, 0.004, 0.124),
    (0.60, 0.256, 0.170, 0.150, 0.004, 0.108),
    (0.85, 0.234, 0.152, 0.142, 0.004, 0.094),
    (1.00, 0.222, 0.142, 0.138, 0.004, 0.086),
    (1.10, 0.212, 0.136, 0.136, 0.004, 0.080),
    (1.25, 0.218, 0.138, 0.140, 0.002, 0.074),
    (1.40, 0.230, 0.140, 0.142, 0.000, 0.070),
    (1.47, 0.236, 0.136, 0.134, -0.006, 0.068),
    (1.51, 0.236, 0.126, 0.120, -0.014, 0.067)]
SHOULDER = dict(rx=0.232, rzb=0.108, rzf=0.094, zc=-0.030, gap=0.066)
NECK = dict(rx=0.086, rzb=0.090, rzf=0.084, zc=-0.036, gap=0.058)

def coat_ring(y):
    rx, rzb, rzf, zc, gap = interp(y, COAT)
    return dict(rx=rx, rzb=rzb, rzf=rzf, zc=zc, gap=gap, y=lambda phi: y)

def ring_point(R, phi, y=None):
    """phi: 0 at the middle of his back, +-pi at the front; x to his left"""
    c = np.cos(phi)
    z = R['zc'] - (R['rzb'] if c > 0 else R['rzf']) * c
    return [R['rx'] * np.sin(phi), R['y'](phi) if y is None else y, z]

def coat_fold(phi, y, pm):
    """how far the cloth stands in or out of the coat's smooth shape here (a
    share of its radius): the folds heavy wool falls into. One field for the
    body and the skirt, so they meet at the waist."""
    ap = abs(phi)
    d = 0.0
    # below the waist: long folds, deepening to the hem, no two alike
    k = float(smooth(1.04, 0.40, y))
    d += k * (0.046 * np.sin(phi * 7.0 + 0.6) + 0.020 * np.sin(phi * 12.0 + 2.1 + 3.0 * y) + 0.010 * np.sin(phi * 4.0 - 1.0 + 2.0 * y))
    # down the back from the shoulder blades
    d += 0.012 * np.sin(phi * 7.0 + 0.6) * float(smooth(1.46, 1.14, y)) * float(smooth(1.04, 1.12, y) * 0.6 + 0.4) * np.exp(-(phi / 1.5) ** 2)
    # pulled round him at the waist: creases dragging across the sides
    d += 0.009 * np.sin(y * 48 + 3.0 * np.sin(phi * 1.5)) * np.exp(-((y - 1.13) / 0.10) ** 2) * float(smooth(0.3, 1.2, ap))
    # bunched under the arm
    d += 0.008 * np.sin(y * 60 + phi * 3) * np.exp(-((y - 1.36) / 0.07) ** 2) * np.exp(-((ap - 1.57) / 0.5) ** 2)
    d *= float(smooth(1.52, 1.44, y))
    # the fronts above the waist are pressed and lie clean under the lapels
    neat = float(smooth(pm - 0.05, pm - 0.6, ap))
    return 1.0 + d * (neat + (1 - neat) * float(smooth(1.10, 0.92, y)))

def fold_point(R, phi, y):
    p = ring_point(R, phi, y)
    f = coat_fold(phi, y, ring_phi_max(R))
    return [p[0] * f, p[1], R['zc'] + (p[2] - R['zc']) * f]

def ring_phi_max(R):
    return PI - np.arcsin(min(0.99, R['gap'] / R['rx']))

def shoulder_ring():
    R = dict(SHOULDER)
    # level across the yoke, falling only a little to the shoulder point: a cut, padded shoulder
    R['y'] = lambda phi: 1.598 - 0.016 * abs(np.sin(phi)) ** 1.25 - (0.034 * float(smooth(1.9, 2.9, abs(phi))))
    return R

def neck_ring():
    R = dict(NECK)
    # high at the back of the neck, dropping to the V of the lapels in front
    R['y'] = lambda phi: 1.606 - 0.082 * float(smooth(1.5, 3.0, abs(phi)))
    return R

def coat_w(p):
    x, y, z = p
    w = spine_w(y)
    # the shoulders carry the top of the coat
    s = float(smooth(0.09, 0.20, abs(x))) * float(smooth(1.43, 1.53, y)) * 0.55
    if s > 0: w = mixw(w, {('LeftShoulder' if x > 0 else 'RightShoulder'): 1.0}, s)
    return w

COLS = 81

def coat():
    P = Part('coat', 1)
    C = COLS
    hs = list(np.linspace(1.00, 1.42, 15)) + [1.45, 1.48, 1.51]
    rows = [coat_ring(y) for y in hs]
    sh, nk = shoulder_ring(), neck_ring()
    def blend(A, B, t):
        R = {k: A[k] * (1 - t) + B[k] * t for k in ('rx', 'rzb', 'rzf', 'zc', 'gap')}
        R['y'] = lambda phi: A['y'](phi) * (1 - t) + B['y'](phi) * t
        return R
    rows += [blend(rows[-1], sh, 0.5), sh, blend(sh, nk, 0.33), blend(sh, nk, 0.66), nk]
    G, U, Wt = [], [], []
    for i, R in enumerate(rows):
        pm = ring_phi_max(R)
        g, u, w = [], [], []
        for c in range(C):
            phi = -pm + 2 * pm * c / (C - 1)
            p = fold_point(R, phi, hs[i]) if i < len(hs) else ring_point(R, phi)
            g.append(p); u.append([phi * 0.2, p[1]]); w.append(coat_w(p))
        G.append(g); U.append(u); Wt.append(w)
    P.add_grid(G, U, Wt, flip=True)
    # the sleeves: roomy at the shoulder, straight, long enough to reach the
    # knuckles. They crease at the elbow (deepest inside the bend), twist a
    # little down the upper arm, bunch under the arm and stack towards the
    # cuff, which is turned in so the cloth has an edge
    S = 20
    tab = [(0.165, 0.070), (0.215, 0.072), (0.30, 0.070), (0.437, 0.064), (0.58, 0.060), (0.70, 0.058), (0.74, 0.058)]
    for sg, sh_b, arm, fore in ((1, 'LeftShoulder', 'LeftArm', 'LeftForeArm'), (-1, 'RightShoulder', 'RightArm', 'RightForeArm')):
        G, U, Wt = [], [], []
        ss = [(x, 0.0) for x in np.arange(0.165, 0.7351, 0.015)] + [(0.737, -0.007)]
        for s, turn in ss:
            r, = interp(s, tab)
            g, u, w = [], [], []
            for c in range(S):
                a = c / S * 2 * PI
                inside, under = max(0.0, np.sin(a)), max(0.0, -np.cos(a))
                d = turn
                d += 0.008 * np.sin((s - 0.437) * 2 * PI / 0.05) * np.exp(-((s - 0.437) / 0.075) ** 2) * (0.35 + 0.65 * inside)
                d += 0.004 * np.sin(2 * a + s * 34) * float(smooth(0.20, 0.30, s)) * float(smooth(0.75, 0.55, s))
                d += 0.005 * np.sin(s * 2 * PI / 0.06 + 1.5 * np.sin(a)) * float(smooth(0.50, 0.66, s))
                d += 0.007 * np.sin(s * 2 * PI / 0.055) * float(smooth(0.31, 0.20, s)) * under
                d += 0.005 * under * np.sin(PI * (s - 0.165) / 0.57)
                # the seam where the sleeve is set into the shoulder
                d += 0.004 * np.exp(-((s - 0.195) / 0.012) ** 2)
                rr = r + d
                # (the top of the sleeve head sits a touch above the shoulder: the pad)
                g.append([sg * s, 1.530 - 0.010 * float(smooth(0.30, 0.17, s)) + rr * np.cos(a), -0.036 + rr * 0.98 * np.sin(a)])
                u.append([a * r + 5.0 * sg, s])
                if s < 0.30:
                    t = float(smooth(0.165, 0.275, s))
                    ww = mixw(mixw({'Spine2': 1.0}, {sh_b: 1.0}, 0.65), {arm: 1.0}, t)
                else:
                    ww = mixw({arm: 1.0}, {fore: 1.0}, float(smooth(0.39, 0.485, s)))
                w.append(ww)
            G.append(g); U.append(u); Wt.append(w)
        P.add_grid(G, U, Wt, closed=True, flip=(sg > 0))
    return P

SKIRT_ROWS, SKIRT_COLS = 22, COLS

def skirt():
    """the coat below the waist: a grid, rows from the waist down (avatar.js lays it flat when he lies on the bench)"""
    P = Part('skirt', 1)
    P.grid = [SKIRT_ROWS, SKIRT_COLS]
    G, U, Wt = [], [], []
    # (the last row is the hem, turned up inside)
    hs = [(1.00 - (1.00 - 0.34) * r / (SKIRT_ROWS - 2), 1.0) for r in range(SKIRT_ROWS - 1)] + [(0.346, 0.975)]
    for y, turn in hs:
        R = coat_ring(y)
        pm = ring_phi_max(R)
        g, u, w = [], [], []
        for c in range(SKIRT_COLS):
            phi = -pm + 2 * pm * c / (SKIRT_COLS - 1)
            p = fold_point(R, phi, min(y, 0.34) if turn < 1 else y)
            p = [p[0] * turn, y, R['zc'] + (p[2] - R['zc']) * turn]
            g.append(p); u.append([phi * 0.2, y])
            # it swings a little with the leg on its side
            lw = 0.30 * float(smooth(0.92, 0.50, y)) * float(smooth(0.03, 0.12, abs(p[0])))
            w.append(mixw({'Hips': 1.0}, {('LeftUpLeg' if p[0] > 0 else 'RightUpLeg'): 1.0}, lw))
        G.append(g); U.append(u); Wt.append(w)
    P.add_grid(G, U, Wt, flip=True)
    return P

def surface_frame(rows_fn, y, phi):
    """a point on the coat and its outward normal"""
    e = 1e-3
    p = np.array(rows_fn(y, phi)); a = np.array(rows_fn(y, phi + e)); b = np.array(rows_fn(y + e, phi))
    n = np.cross(a - p, b - p); n /= np.linalg.norm(n) + 1e-12
    # outwards: away from the axis of the body
    if n[0] * p[0] + n[2] * (p[2] + 0.0) < 0: n = -n
    return p, n

def coat_surface(y, phi):
    """the coat's surface anywhere from the waist to the collar (y is a height up to 1.51, then 1.51..1.61 runs up over the shoulder to the neck)"""
    if y <= 1.51: return fold_point(coat_ring(y), phi, y)
    sh, nk = shoulder_ring(), neck_ring()
    top = coat_ring(1.51)
    t = (y - 1.51) / 0.10
    if t < 0.4:
        k = t / 0.4
        R = {q: top[q] * (1 - k) + sh[q] * k for q in ('rx', 'rzb', 'rzf', 'zc', 'gap')}
        R['y'] = lambda ph: 1.51 * (1 - k) + sh['y'](ph) * k
    else:
        k = (t - 0.4) / 0.6
        R = {q: sh[q] * (1 - k) + nk[q] * k for q in ('rx', 'rzb', 'rzf', 'zc', 'gap')}
        R['y'] = lambda ph: sh['y'](ph) * (1 - k) + nk['y'](ph) * k
    return ring_point(R, phi)

def coat_edge_phi(y):
    if y <= 1.51: return ring_phi_max(coat_ring(y))
    sh, nk, top = shoulder_ring(), neck_ring(), coat_ring(1.51)
    t = (y - 1.51) / 0.10
    if t < 0.4: k = t / 0.4; gap = top['gap'] * (1 - k) + sh['gap'] * k; rx = top['rx'] * (1 - k) + sh['rx'] * k
    else: k = (t - 0.4) / 0.6; gap = sh['gap'] * (1 - k) + nk['gap'] * k; rx = sh['rx'] * (1 - k) + nk['rx'] * k
    return PI - np.arcsin(min(0.99, gap / rx))

def lapels():
    """notch lapels turned back along the front edges, and the collar round the back of the neck"""
    P = Part('lapels', 1)
    for sg in (1, -1):
        G, U, Wt = [], [], []
        # y runs up the front edge; beyond 1.51 it carries on up to the neck
        ys = [1.14, 1.20, 1.26, 1.32, 1.38, 1.43, 1.47, 1.495, 1.497, 1.52, 1.55, 1.58, 1.606]
        wid = [0.004, 0.030, 0.052, 0.070, 0.084, 0.094, 0.098, 0.096, 0.060, 0.062, 0.060, 0.056, 0.052]   # (the step at 1.495 is the notch)
        for y, wd in zip(ys, wid):
            pe = coat_edge_phi(y)
            g, u, w = [], [], []
            for k, f in enumerate((0.0, 0.5, 1.0)):
                rr = coat_ring(min(y, 1.51))['rx'] if y <= 1.51 else 0.16
                phi = sg * (pe - (wd * f) / max(rr, 0.08))
                p, n = surface_frame(coat_surface, y, phi)
                lift = 0.004 + 0.007 * np.sin(f * PI) + 0.004 * f      # a soft roll, not a flat patch
                q = p + n * lift
                g.append(q.tolist()); u.append([f * wd + 9.0, y]); w.append(coat_w(q))
            G.append(g); U.append(u); Wt.append(w)
        P.add_grid(G, U, Wt, flip=(sg < 0))
    # the collar: a band lying round the back of the neck, from one notch to the other
    G, U, Wt = [], [], []
    nk, sh = neck_ring(), shoulder_ring()
    pm = ring_phi_max(nk) - 0.55
    for f in (0.0, 0.5, 1.0):
        g, u, w = [], [], []
        for c in range(29):
            phi = -pm + 2 * pm * c / 28
            a = np.array(ring_point(nk, phi)); b = np.array(ring_point(sh, phi))
            p = a + (b - a) * (0.42 * f)
            p[1] += 0.014 - 0.006 * f + 0.008 * np.sin(f * PI)
            out = np.array([p[0], 0, p[2] - nk['zc']]); out /= np.linalg.norm(out) + 1e-9
            p += out * (0.004 + 0.004 * f)
            g.append(p.tolist()); u.append([phi * 0.1 + 12.0, f * 0.05]); w.append(coat_w(p))
        G.append(g); U.append(u); Wt.append(w)
    P.add_grid(G, U, Wt, flip=True)
    return P

# ---------------------------------------------------------------- the scarf

def scarf():
    """a thick knitted maroon scarf, a garment of its own: wound once round the
    neck in a fat roll, one end down the front over the coat, the other thrown
    back over the shoulder, each finished in a fringe"""
    P = Part('scarf', 7)
    WID, THICK = 0.118, 0.017
    # round the neck: a full soft roll, crushed and wrinkled where it turns
    N, M = 32, 10
    G, U, Wt = [], [], []
    for j in range(M + 1):
        b = j / M * 2 * PI
        g, u, w = [], [], []
        for c in range(N + 1):
            a = c / N * 2 * PI
            r = 0.097 + 0.019 * np.cos(b) + 0.004 * np.sin(a * 7 + 2 * np.sin(b)) + 0.003 * np.sin(a * 3 + 1)
            y = 1.612 + 0.037 * np.sin(b) + 0.010 * (-np.cos(a)) + 0.005 * np.sin(a * 4 + 1 + b)
            g.append([r * np.sin(a), y, neck_axis(y) + r * 1.05 * np.cos(a) + 0.004])
            u.append([(0.5 - 0.5 * np.cos(b)) * WID * 0.5 + 0.2 * (b > PI), a * 0.097]); w.append(mixw({'Neck': 1.0}, {'Spine2': 1.0}, 0.45))
        G.append(g); U.append(u); Wt.append(w)
    P.add_grid(G, U, Wt)
    def on_coat(x, y, front):
        yc = min(y, 1.50)
        R = coat_ring(yc)
        sx = np.clip(x / R['rx'], -0.98, 0.98)
        phi = (PI - np.arcsin(sx)) if front else np.arcsin(sx)
        return fold_point(R, phi, yc)[2]
    # the two ends: a slab of knitting with body, its edges rolled
    def tail(x0, front, y_top, y_end, lean, seed):
        G, U, Wt = [], [], []
        ys = np.concatenate([np.linspace(y_top, 1.50, 6)[:-1], np.linspace(1.50, y_end, 13)])
        zdir = 1 if front else -1
        K = 10
        def centre(y, f, i):
            t = float(np.clip((1.50 - y) / (1.50 - y_end), 0, 1))
            up = float(smooth(1.50, y_top, y))               # 0 on the coat .. 1 at the neck
            wd = WID * (0.82 + 0.18 * t + 0.05 * np.sin(t * 5 + seed))
            x = x0 + lean * t + 0.008 * np.sin(t * 4.0 + seed) + f * wd
            # lying on the coat, with a long soft fold running down it and
            # its weight making it hang a little clear lower down
            z = on_coat(x, y, front) + zdir * (0.006 + THICK / 2 + 0.007 * np.cos(f * 2 * PI * 1.1 + i * 0.35 + seed) + 0.006 * t)
            # above the chest it leaves the coat and rises into the roll round the neck
            xn = x0 * 0.8 + f * WID * 0.7
            zn = neck_axis(y_top) + zdir * (0.100 - 0.02 * abs(f))
            return np.array([x * (1 - up) + xn * up, y, z * (1 - up) + zn * up]), t
        for i, y in enumerate(ys):
            g, u, w = [], [], []
            for k in range(K):
                b = k / K * 2 * PI
                cb, sb = np.cos(b), np.sin(b)
                f = 0.5 * np.sign(cb) * abs(cb) ** 0.6
                p, t = centre(y, f, i)
                p[2] += zdir * np.sign(sb) * abs(sb) ** 0.8 * THICK / 2
                p[1] += 0.004 * np.sin(f * 7 + i)
                g.append(p.tolist())
                u.append([f * WID + (3.0 if front else 6.0) + (0.5 if sb < 0 else 0.0), y]); w.append(spine_w(min(y, 1.54)))
            G.append(g); U.append(u); Wt.append(w)
        P.add_grid(G, U, Wt, closed=True, flip=not front)
        # the fringe: twisted tassels of the same yarn
        T = 8
        for k in range(T):
            f = (k + 0.5) / T - 0.5
            ln = 0.062 + 0.012 * np.sin(k * 2.3 + seed)
            G, U, Wt = [], [], []
            for q, (dy, rad) in enumerate(((0.004, 0.0052), (-0.35, 0.0040), (-0.75, 0.0046), (-1.0, 0.0058))):
                y = y_end + dy * ln if q else y_end + dy
                c0, _ = centre(y_end, f, len(ys) - 1)
                c0[0] += 0.004 * np.sin(k * 1.7 + q + seed) * q
                c0[2] = on_coat(c0[0], y, front) + zdir * (0.006 + THICK / 2 + 0.006 + 0.004 * np.sin(k + seed))
                g, u, w = [], [], []
                for m in range(4):
                    b = m / 4 * 2 * PI + q * 0.7
                    g.append([c0[0] + rad * np.cos(b), y, c0[2] + rad * np.sin(b)])
                    u.append([m / 4 * 0.015 + 9.0 + k, y]); w.append(spine_w(y))
                G.append(g); U.append(u); Wt.append(w)
            P.add_grid(G, U, Wt, closed=True)
    tail(0.088, True, 1.612, 1.08, -0.014, 0.0)     # down the front, on his left
    tail(-0.074, False, 1.618, 1.17, 0.012, 2.0)    # thrown back over his right shoulder
    return P

# ---------------------------------------------------------------- the hair

# ---------------------------------------------------------------- write

def main():
    import character as CH
    meta, buf = read()
    bones = meta['bones']
    byname = {b['name']: i for i, b in enumerate(bones)}
    every = meta['meshes'] + meta.get('unused', [])
    # (the scanned originals: the entries this script did not make)
    find = lambda n: next(m for m in every if m['name'] == n and not m.get('made'))
    old_hair = mesh_arrays(buf, find('avaturn_hair_0'))

    parts = [trousers(), knit(), collar(), belt(), coat(), skirt(), lapels(), scarf()]

    # ---- his head: the scan, softened and a little larger than life
    scan = {n: mesh_arrays(buf, find(n)) for n in HEAD_PARTS}
    S = CH.stylise_head(scan['Head_Mesh'], {n: scan[n]['pos'] for n in HEAD_PARTS[1:]}, LEVEL)
    grow = CH.LEVELS[LEVEL]['head'] * CH.LEVELS[LEVEL]['eye']
    # ---- his hair
    (cp, cu, ci), (kp, ku, ki), nlocks = CH.hair_clumps(S['Head_Mesh'], scan['Head_Mesh']['idx'], CH.head_scale(old_hair['pos'], LEVEL), LEVEL)
    # ---- his skin
    face = CH.paint_skin(0.0)
    face.save(os.path.join(RES, 'Head.jpg'), quality=90)
    CH.body_skin(face).save(os.path.join(RES, 'Body.jpg'), quality=90)

    keep = [m for m in meta['meshes'] if m['name'] not in MADE]
    unused = [m for m in every if m['name'] in MADE and m.get('made') is None]
    # (parts made by an earlier run are dropped; their bytes are cut off the end of the file)
    end = meta.get('made_from', len(buf))
    out = bytearray(buf[:end])
    def put(arr):
        while len(out) % 4: out.append(0)
        o = len(out); out.extend(arr.tobytes()); return o
    made = []
    for P in parts:
        A = P.finish(byname)
        me = dict(name=P.name, n=int(len(A['pos'])), ni=int(A['idx'].size), tex=None, kind=P.kind, blend=False, morphs={}, made=True)
        if P.grid: me['grid'] = P.grid
        for key in ('pos', 'nrm', 'uv', 'jnt', 'wgt', 'idx'): me[key] = put(A[key])
        made.append(me)
    # the head and eyes: the scan's own triangles, bone weights, picture and blink, moved to the new shape
    heads = []
    for n in HEAD_PARTS:
        src = find(n); A = scan[n]
        pos = S[n].astype(np.float32); idx = A['idx'].astype(int)
        nr = np.zeros_like(pos, dtype=np.float64)
        fn = np.cross(pos[idx[:, 1]] - pos[idx[:, 0]], pos[idx[:, 2]] - pos[idx[:, 0]]).astype(np.float64)
        for k in range(3): np.add.at(nr, idx[:, k], fn)
        if n == 'Head_Mesh':
            # (the same point on either side of a seam in the picture shares one direction)
            key = np.round(pos * 20000).astype(np.int64)
            _, inv = np.unique(key, axis=0, return_inverse=True); inv = inv.reshape(-1)
            acc = np.zeros((inv.max() + 1, 3)); np.add.at(acc, inv, nr); nr = acc[inv]
        nr /= (np.linalg.norm(nr, axis=1, keepdims=True) + 1e-12)
        me = dict(src); me['made'] = True
        me['pos'] = put(pos); me['nrm'] = put(nr.astype(np.float32))
        mo = {}
        for k, mm in src.get('morphs', {}).items():
            d = np.frombuffer(buf, np.float32, mm['n'] * 3, mm['d']) * grow
            mo[k] = dict(mm); mo[k]['d'] = put(d.astype(np.float32))
        me['morphs'] = mo
        heads.append(me)
    # the hair: the locks, and the close cap under them (marked by uv.x = -1)
    hp = np.vstack([kp, cp]); hu = np.vstack([ku, cu]); hi = np.vstack([ki, ci + len(kp)])
    nr = np.zeros_like(hp); fn = np.cross(hp[hi[:, 1]] - hp[hi[:, 0]], hp[hi[:, 2]] - hp[hi[:, 0]])
    for k in range(3): np.add.at(nr, hi[:, k], fn)
    nr /= (np.linalg.norm(nr, axis=1, keepdims=True) + 1e-12)
    # (pointing away from the middle of the head)
    c0 = CH.head_scale(np.array([[0.0, 1.765, -0.012]]), LEVEL)[0]
    capn = (kp - c0); capn /= np.linalg.norm(capn, axis=1, keepdims=True)
    nr[:len(kp)] = capn
    assert len(hp) < 65536
    jn = np.zeros((len(hp), 4), np.uint8); jn[:, 0] = byname['Head']
    wg = np.zeros((len(hp), 4), np.float32); wg[:, 0] = 1
    hm = dict(name='hair', n=int(len(hp)), ni=int(hi.size), tex=None, kind=9, blend=False, morphs={}, made=True)
    for key, arr in (('pos', hp.astype(np.float32)), ('nrm', nr.astype(np.float32)), ('uv', hu.astype(np.float32)), ('jnt', jn), ('wgt', wg), ('idx', hi.astype(np.uint16))):
        hm[key] = put(arr)
    # drawn first to last: clothes, the scan's hands and shoes, the head, the hair
    order = made + keep + heads + [hm]
    meta['meshes'] = order
    meta['unused'] = unused
    meta['made_from'] = end
    open(os.path.join(RES, 'avatar.bin'), 'wb').write(bytes(out))
    json.dump(meta, open(os.path.join(RES, 'avatar.json'), 'w'), separators=(',', ':'))
    tris = sum(m['ni'] // 3 for m in order)
    print('wrote', len(out), 'bytes;', nlocks, 'locks;', ', '.join('%s %d' % (m['name'], m['ni'] // 3) for m in order), '; total', tris, 'triangles')

if __name__ == '__main__':
    main()

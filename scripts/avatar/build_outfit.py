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
  the hair     short and wavy, not cropped: a full head of hair combed
               loosely back from the crown in soft locks, drawn as solid
               hair (not see-through cards), keeping his own hairline

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

MADE = ['trousers', 'knit', 'coat', 'skirt', 'belt', 'collar', 'lapels', 'scarf', 'hair', 'avaturn_hair_0']

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

def trousers():
    P = Part('trousers', 3)
    N = 28
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
    # two pleats under the waistband, a soft break over the shoe
    for sg, up, lo in ((1, 'LeftUpLeg', 'LeftLeg'), (-1, 'RightUpLeg', 'RightLeg')):
        tab = [(0.075, 0.092, 0.112, 0.100), (0.16, 0.091, 0.110, 0.100), (0.544, 0.090, 0.108, 0.098),
               (0.80, 0.092, 0.114, 0.098), (0.905, 0.096, 0.124, 0.100), (0.93, 0.098, 0.128, 0.100)]
        G, U, Wt = [], [], []
        for y in np.concatenate([np.linspace(0.93, 0.62, 7), np.linspace(0.58, 0.50, 4), np.linspace(0.45, 0.16, 6), [0.12, 0.09, 0.075]]):
            rx, rz, cx = interp(y, tab)
            g, u, w = [], [], []
            for c in range(N):
                a = c / N * 2 * PI
                # the crease: a sharp ridge at the very front and back of the leg
                cr = 1 + 0.045 * (np.exp(-((np.cos(a) - 1) / 0.06) ** 2) + 0.6 * np.exp(-((np.cos(a) + 1) / 0.06) ** 2))
                # the cloth breaks a little where it meets the shoe
                brk = 0.012 * np.sin(a * 3 + sg) * float(smooth(0.2, 0.08, y))
                g.append([sg * cx + rx * np.sin(a) * cr, y, 0.008 + rz * np.cos(a) * cr + brk])
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

def coat():
    P = Part('coat', 1)
    C = 57
    rows = [coat_ring(y) for y in (1.00, 1.045, 1.10, 1.16, 1.22, 1.28, 1.34, 1.40, 1.44, 1.475, 1.51)]
    sh, nk = shoulder_ring(), neck_ring()
    def blend(A, B, t):
        R = {k: A[k] * (1 - t) + B[k] * t for k in ('rx', 'rzb', 'rzf', 'zc', 'gap')}
        R['y'] = lambda phi: A['y'](phi) * (1 - t) + B['y'](phi) * t
        return R
    rows += [blend(rows[-1], sh, 0.5), sh, blend(sh, nk, 0.33), blend(sh, nk, 0.66), nk]
    G, U, Wt = [], [], []
    for R in rows:
        pm = ring_phi_max(R)
        g, u, w = [], [], []
        for c in range(C):
            phi = -pm + 2 * pm * c / (C - 1)
            p = ring_point(R, phi)
            g.append(p); u.append([phi * 0.2, p[1]]); w.append(coat_w(p))
        G.append(g); U.append(u); Wt.append(w)
    P.add_grid(G, U, Wt, flip=True)
    # the sleeves: roomy at the shoulder, straight, long enough to reach the knuckles
    S = 18
    tab = [(0.165, 0.070), (0.215, 0.072), (0.30, 0.070), (0.437, 0.064), (0.58, 0.060), (0.70, 0.058), (0.735, 0.058)]
    for sg, sh_b, arm, fore in ((1, 'LeftShoulder', 'LeftArm', 'LeftForeArm'), (-1, 'RightShoulder', 'RightArm', 'RightForeArm')):
        G, U, Wt = [], [], []
        for s in (0.165, 0.19, 0.215, 0.25, 0.30, 0.36, 0.41, 0.437, 0.465, 0.52, 0.58, 0.64, 0.70, 0.735):
            r, = interp(s, tab)
            g, u, w = [], [], []
            for c in range(S):
                a = c / S * 2 * PI
                # (the top of the sleeve head sits a touch above the shoulder: the pad)
                g.append([sg * s, 1.530 - 0.010 * float(smooth(0.30, 0.17, s)) + r * np.cos(a), -0.036 + r * 0.98 * np.sin(a)])
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

SKIRT_ROWS, SKIRT_COLS = 14, 57

def skirt():
    """the coat below the waist: a grid, rows from the waist down (avatar.js lays it flat when he lies on the bench)"""
    P = Part('skirt', 1)
    P.grid = [SKIRT_ROWS, SKIRT_COLS]
    G, U, Wt = [], [], []
    for r in range(SKIRT_ROWS):
        y = 1.00 - (1.00 - 0.34) * r / (SKIRT_ROWS - 1)
        R = coat_ring(y)
        pm = ring_phi_max(R)
        g, u, w = [], [], []
        for c in range(SKIRT_COLS):
            phi = -pm + 2 * pm * c / (SKIRT_COLS - 1)
            p = ring_point(R, phi)
            # heavy cloth falls in a few long soft folds, deeper towards the hem
            f = 1 + 0.022 * np.sin(phi * 7.0 + 0.6) * float(smooth(0.95, 0.45, y))
            p = [p[0] * f, p[1], R['zc'] + (p[2] - R['zc']) * f]
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
    if y <= 1.51: return ring_point(coat_ring(y), phi)
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
    """narrow maroon wool: once round the neck, one end down the front over the coat, the other back over the shoulder"""
    P = Part('scarf', 7)
    WID = 0.105
    # round the neck: a soft band, a little crushed
    N = 32
    G, U, Wt = [], [], []
    for k, (dy, dr) in enumerate([(-0.030, 0.006), (-0.020, 0.016), (0.0, 0.021), (0.020, 0.017), (0.032, 0.007)]):
        g, u, w = [], [], []
        for c in range(N + 1):
            a = c / N * 2 * PI
            r = 0.083 + dr + 0.004 * np.sin(a * 5 + k)
            y = 1.612 + dy + 0.010 * (-np.cos(a)) + 0.004 * np.sin(a * 3)
            g.append([r * np.sin(a), y, neck_axis(y) + r * 1.05 * np.cos(a) + 0.004])
            u.append([a * 0.09, (k / 4) * WID]); w.append(mixw({'Neck': 1.0}, {'Spine2': 1.0}, 0.45))
        G.append(g); U.append(u); Wt.append(w)
    P.add_grid(G, U, Wt)
    # the two ends
    def tail(x0, front, y_top, y_end, lean):
        G, U, Wt = [], [], []
        ys = np.concatenate([np.linspace(y_top, 1.50, 6)[:-1], np.linspace(1.50, y_end, 12)])
        zdir = 1 if front else -1
        for i, y in enumerate(ys):
            t = float(np.clip((1.50 - y) / (1.50 - y_end), 0, 1))
            up = float(smooth(1.50, y_top, y))               # 0 on the coat .. 1 at the neck
            g, u, w = [], [], []
            for k in range(5):
                f = k / 4 - 0.5
                x = x0 + lean * t + f * WID * (0.9 + 0.1 * t)
                # lying on the coat: the coat's surface at this x and height
                yc = min(y, 1.50)
                R = coat_ring(yc)
                sx = np.clip(x / R['rx'], -0.98, 0.98)
                phi = (PI - np.arcsin(sx)) if front else np.arcsin(sx)
                p = np.array(ring_point(R, phi))
                # soft folds along its length, standing a little proud of the coat
                z = p[2] + zdir * (0.016 + 0.006 * np.cos(f * 2 * PI * 1.5 + i * 0.5) + 0.004 * np.sin(t * 6))
                # above the chest it leaves the coat and rises to the band round the neck
                xn = x0 * 0.8 + f * WID * 0.75
                zn = neck_axis(y_top) + zdir * (0.098 - 0.02 * abs(f))
                g.append([x * (1 - up) + xn * up, y + 0.004 * np.sin(f * 7 + i) * (1 - up), z * (1 - up) + zn * up])
                u.append([f * WID + (3.0 if front else 6.0), y]); w.append(spine_w(min(y, 1.54)))
            G.append(g); U.append(u); Wt.append(w)
        P.add_grid(G, U, Wt, flip=not front)
    tail(0.085, True, 1.612, 1.10, -0.012)      # down the front, on his left
    tail(-0.070, False, 1.618, 1.16, 0.010)     # thrown back over his right shoulder
    return P

# ---------------------------------------------------------------- the hair

def hair(buf, old_hair, head):
    """
    Short wavy hair, the waves well defined: full and tousled on top,
    falling in a loose fringe either side of the forehead, over the top of
    the ears, and down to the nape, where the ends flick out. Measured
    outwards from the middle of his head in every direction: there is hair
    where his old hair was (so the hairline is his own), shaped into ten
    or so thick locks that run out from the crown, each one swinging from
    side to side as it goes and rising and falling along its length; the
    outline breaks up into the tips of the locks.
    uv: (sin, cos) of the lock's bearing round the crown; their length is
    1 at the very tips rising to 2 well inside (avatar.js cuts the tips).
    """
    P = Part('hair', 9)
    c0 = np.array([0.0, 1.765, -0.012])
    # the crown: up and a little back
    axis = np.array([0.0, 0.94, -0.34]); axis /= np.linalg.norm(axis)
    ex = np.array([1.0, 0, 0]); ez = np.cross(ex, axis)
    LA, LO = 56, 160
    SPAN = PI * 0.80
    def direction(la, lo):   # la: 0 at the crown, growing towards the chin
        return axis * np.cos(la) + (ex * np.sin(lo) + ez * np.cos(lo)) * np.sin(la)
    D = np.array([[direction(i / LA * SPAN, j / LO * 2 * PI) for j in range(LO)] for i in range(LA + 1)])
    def reach(pts, cone):
        d = pts - c0; r = np.linalg.norm(d, axis=1); u = d / r[:, None]
        out = np.zeros((LA + 1, LO))
        for i in range(LA + 1):
            for j in range(LO):
                m = (u @ D[i, j]) > cone
                out[i, j] = r[m].max() if m.any() else 0
        return out
    def cast(mesh):
        # the distance from the middle of the head to the mesh's surface, along every direction
        T = mesh['pos'][mesh['idx'].astype(int)]
        v0 = T[:, 0] - c0; e1 = T[:, 1] - T[:, 0]; e2 = T[:, 2] - T[:, 0]
        out = np.zeros((LA + 1, LO))
        for i in range(LA + 1):
            for j in range(LO):
                dv = D[i, j]
                pv = np.cross(dv, e2); det = (e1 * pv).sum(1)
                ok = np.abs(det) > 1e-12
                inv = np.where(ok, 1.0 / np.where(ok, det, 1), 0)
                tv = -v0
                uu = (tv * pv).sum(1) * inv
                qv = np.cross(tv, e1)
                vv = (qv @ dv) * inv
                tt = (e2 * qv).sum(1) * inv
                hit = ok & (uu >= -1e-6) & (vv >= -1e-6) & (uu + vv <= 1 + 1e-6) & (tt > 0)
                out[i, j] = tt[hit].max() if hit.any() else 0
        return out
    rh = reach(old_hair['pos'], np.cos(0.11))
    rs = cast(head)
    for _ in range(4):   # (a direction that slips between triangles takes its neighbours' value)
        z = rs <= 0
        if not z.any(): break
        nb = np.stack([np.roll(rs, 1, 1), np.roll(rs, -1, 1), np.vstack([rs[:1], rs[:-1]]), np.vstack([rs[1:], rs[-1:]])])
        rs = np.where(z, nb.max(0), rs)
    up = lambda m: np.vstack([m[:1], m[:-1]])
    dn = lambda m: np.vstack([m[1:], m[-1:]])
    def grow(m): return m | np.roll(m, 1, 1) | np.roll(m, -1, 1) | up(m) | dn(m)
    def shrink(m): return m & np.roll(m, 1, 1) & np.roll(m, -1, 1) & up(m) & dn(m)
    has = (rh > rs - 0.003) & (rh > 0)
    has = shrink(shrink(shrink(grow(grow(grow(has))))))     # fill the gaps the old thin cards left
    # the length: over the top of the ear at the sides, down to the nape behind
    Y = c0[1] + D[:, :, 1] * rs
    ZF = D[:, :, 2]
    floor = 1.738 + (1.676 - 1.738) * smooth(-0.15, -0.75, ZF)
    has &= ~((ZF <= 0.55) & (Y < floor))
    # the fringe: locks fall forward over the forehead, longest either side
    # of the middle, as hair parted loosely in the centre falls
    for j in range(LO):
        col = np.where(has[:, j] & (ZF[:, j] > 0.3))[0]
        if not len(col): continue
        ih = col.max()
        if ZF[ih, j] < 0.55: continue
        sx = abs(D[ih, j, 0])
        n = int(round(1.0 + 3.4 * float(smooth(0.06, 0.30, sx)) * (1 - float(smooth(0.55, 0.85, sx)))))
        has[ih + 1: min(LA, ih + 1 + n), j] = True
    # smooth the old hair's outline (it was lumpy), keeping the scalp underneath
    r = np.where(has, np.maximum(rh, rs), rs)
    for _ in range(6):
        r = (r + np.roll(r, 1, 1) + np.roll(r, -1, 1) + up(r) + dn(r)) / 5
    # how far inside the hair each point is (0 at the edge)
    depth = np.zeros_like(r); cur = has.copy()
    for k in range(1, 11):
        er = shrink(cur)
        depth[er] = k; cur = er
    depth = np.clip(depth / 7.0, 0, 1)
    G, U, Wt = [], [], []
    LOCKS = 10
    for i in range(LA + 1):
        la = i / LA * SPAN
        g, u, w = [], [], []
        for j in range(LO):
            lo = j / LO * 2 * PI
            dv = D[i, j]
            d = depth[i, j]
            ds = d * d * (3 - 2 * d)
            top = np.exp(-(la / 0.95) ** 2)
            thick = max(r[i, j] - rs[i, j], 0.0)
            thick = min(max(thick, 0.020 + 0.012 * top), 0.030 + 0.010 * top)
            # each lock swings from side to side as it runs out from the crown ...
            lock = lo * LOCKS / (2 * PI) + 0.78 * np.sin(la * 4.6 + lo * 2.0) + 0.24 * np.sin(la * 8.3 - lo * 3.0)
            ridge = (0.5 + 0.5 * np.cos(2 * PI * lock)) ** 0.8
            # ... and rises and falls along its length: the wave
            wave = 0.5 + 0.5 * np.sin(la * 8.6 + lo * 4.0 + 2.0 * np.sin(lo * 3.0))
            body = float(smooth(0.03, 0.30, la))
            bump = (0.0135 * ridge + 0.0065 * wave * ridge) * body * (0.45 + 0.55 * ds)
            # the edge: it does not taper into the skin, the ends stand off a
            # little and flick out (most at the nape and over the ears)
            lip = 0.34 + 0.10 * float(smooth(0.2, 0.7, dv[2]))
            flick = 0.009 * (1 - ds) * ridge * float(smooth(0.3, -0.5, dv[2]))
            rad = rs[i, j] + thick * (lip + (1 - lip) * ds) + bump + flick
            g.append(rad)
            # between the locks the outline is cut back further: the tips
            e = float(np.clip(d * 1.15 - 0.60 * (1 - ridge) * (1 - d), 0, 1))
            m = 1.0 + e
            u.append([np.sin(lo) * m, np.cos(lo) * m]); w.append({'Head': 1.0})
        G.append(g); U.append(u); Wt.append(w)
    # (one light pass of smoothing, so a lock running slantwise across the
    # grid has a clean edge rather than a saw's)
    RAD = np.array(G)
    RAD = (RAD * 2 + np.roll(RAD, 1, 1) + np.roll(RAD, -1, 1) + up(RAD) + dn(RAD)) / 6
    RAD = np.maximum(RAD, rs + 0.003)
    G = (c0 + D * RAD[:, :, None]).tolist()
    base = P.add_grid(G, U, Wt, closed=True, flip=True)
    # keep only where there is hair (and one ring of cells beyond, to cut the tips in)
    keep = grow(has)
    idx = np.array(P.idx).reshape(-1, 3)
    ok = keep.reshape(-1)[idx - base].all(axis=1)
    P.idx = idx[ok].reshape(-1).tolist()
    return P

# ---------------------------------------------------------------- write

def main():
    meta, buf = read()
    bones = meta['bones']
    byname = {b['name']: i for i, b in enumerate(bones)}
    every = meta['meshes'] + meta.get('unused', [])
    find = lambda n: next(m for m in every if m['name'] == n)
    old_hair = mesh_arrays(buf, find('avaturn_hair_0'))
    head = mesh_arrays(buf, find('Head_Mesh'))

    parts = [trousers(), knit(), collar(), belt(), coat(), skirt(), lapels(), scarf(), hair(buf, old_hair, head)]

    keep = [m for m in meta['meshes'] if m['name'] not in MADE]
    unused = [m for m in every if m['name'] in MADE and m.get('made') is None]
    # (parts made by an earlier run are dropped; their bytes are cut off the end of the file)
    end = meta.get('made_from', len(buf))
    out = bytearray(buf[:end])
    made = []
    built = {}
    for P in parts:
        A = P.finish(byname)
        built[P.name] = A
        me = dict(name=P.name, n=int(len(A['pos'])), ni=int(A['idx'].size), tex=None, kind=P.kind, blend=False, morphs={}, made=True)
        if P.grid: me['grid'] = P.grid
        for key in ('pos', 'nrm', 'uv', 'jnt', 'wgt', 'idx'):
            while len(out) % 4: out.append(0)
            me[key] = len(out)
            out += A[key].tobytes()
        made.append(me)
    # drawn first to last: clothes, then his scan (hair last of the solid parts)
    order = [m for m in made if m['name'] != 'hair'] + keep + [m for m in made if m['name'] == 'hair']
    meta['meshes'] = order
    meta['unused'] = unused
    meta['made_from'] = end
    open(os.path.join(RES, 'avatar.bin'), 'wb').write(bytes(out))
    json.dump(meta, open(os.path.join(RES, 'avatar.json'), 'w'), separators=(',', ':'))
    print('wrote', len(out), 'bytes;', ', '.join('%s %d' % (m['name'], m['n']) for m in made))
    return meta, bytes(out), built

if __name__ == '__main__':
    main()

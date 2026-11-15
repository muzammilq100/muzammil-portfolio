"""
HIS HEAD, SKIN AND HAIR (the puppet look)
-----------------------------------------
Used by build_outfit.py. He is a hand-made puppet of himself rather than a
photograph wrapped round a head:

  the head   his own scanned head, softened a little, the eyes a touch
             larger and the whole head a touch larger than life
  the skin   painted, not photographed: one even matte tone with blush on
             the cheeks, nose and ears, his own full brows and the small
             mark beside his nose; clean-shaven
             (scan/Head.jpg and scan/Body.jpg are the scans it starts from)
  the hair   some three hundred sculpted locks after his photograph: black
             waves swept up off the forehead and across from a parting on
             his left, brushed back close over the ears, running down to
             the nape where the ends kick out, short close locks round the
             ears, a few loose hairs, and a dark close cap underneath so no
             skin shows between them. His own hairline.

x to his left, y up, z in front of him; metres at the model's own size.
"""
import os, numpy as np
from PIL import Image, ImageFilter
PI = np.pi
HERE = os.path.dirname(os.path.abspath(__file__))
SCAN = os.path.join(HERE, 'scan')
sm = lambda a, b, x: (lambda t: t * t * (3 - 2 * t))(np.clip((np.asarray(x, float) - a) / (b - a), 0, 1))
EYE = np.array([0.0319, 1.7612, 0.0666])

LEVELS = {
    'A': dict(eye=1.10, head=1.04, chin=0.03, smooth=1, neck=0.0),
    'B': dict(eye=1.26, head=1.13, chin=0.10, smooth=3, neck=0.06),
}

def head_scale(P, lv):
    """the whole head a little larger than life (a puppet's proportion), from the neck up"""
    L = LEVELS[lv]
    piv = np.array([0, 1.60, -0.03])
    f = 1 + (L['head'] - 1) * sm(1.60, 1.69, P[:, 1])
    return piv + (P - piv) * f[:, None]

def eye_scale(P, lv, hard=False):
    L = LEVELS[lv]
    out = P.copy()
    for sg in (1, -1):
        e = EYE * np.array([sg, 1, 1])
        d = out - e
        r = np.hypot(d[:, 0], d[:, 1])
        w = np.ones(len(P)) if hard else sm(0.050, 0.018, r) * sm(0.02, 0.045, P[:, 2])
        if hard: w = (P[:, 0] * sg > 0).astype(float)
        k = 1 + (L['eye'] - 1) * w
        out = e + (out - e) * k[:, None] * np.array([1, 1, 1]) if hard else np.c_[e[0] + d[:, 0] * k, e[1] + d[:, 1] * k, out[:, 2] + (L['eye'] - 1) * 0.004 * w]
    return out

def stylise_head(H, others, lv):
    """H: the head mesh; others: {name: positions} of the eyes, their shadow and the lashes"""
    L = LEVELS[lv]
    P = H['pos'].copy()
    # weld the seams, soften the features
    key = np.round(P * 20000).astype(np.int64)
    _, inv = np.unique(key, axis=0, return_inverse=True)
    inv = inv.reshape(-1)
    n = inv.max() + 1
    W = np.zeros((n, 3)); cnt = np.zeros(n)
    np.add.at(W, inv, P); np.add.at(cnt, inv, 1); W /= cnt[:, None]
    idx = inv[H['idx'].astype(int)]
    for _ in range(L['smooth']):
        acc = np.zeros_like(W); c = np.zeros(n)
        for a, b in ((0, 1), (1, 2), (2, 0)):
            np.add.at(acc, idx[:, a], W[idx[:, b]]); np.add.at(c, idx[:, a], 1)
            np.add.at(acc, idx[:, b], W[idx[:, a]]); np.add.at(c, idx[:, b], 1)
        avg = acc / np.maximum(c, 1)[:, None]
        # (keep the lids and lips crisp: less smoothing close to the eyes and mouth)
        de = np.minimum(np.linalg.norm(W - EYE, axis=1), np.linalg.norm(W - EYE * [-1, 1, 1], axis=1))
        keep = 0.25 + 0.75 * sm(0.012, 0.035, de)
        W = W + (avg - W) * 0.5 * keep[:, None]
    P = W[inv]
    # a slightly finer chin and jaw, a slimmer neck
    front = sm(-0.02, 0.04, P[:, 2])
    P[:, 0] *= 1 - L['chin'] * sm(1.735, 1.655, P[:, 1]) * front
    P[:, 0] *= 1 - L['neck'] * sm(1.64, 1.58, P[:, 1]) * (1 - sm(1.56, 1.535, P[:, 1]))
    P = eye_scale(P, lv)
    P = head_scale(P, lv)
    out = {'Head_Mesh': P}
    for k in others:
        Q = eye_scale(others[k], lv, hard=True)
        if k != 'Eye_Mesh': Q[:, 2] += (L['eye'] - 1) * 0.004
        out[k] = head_scale(Q, lv)
    return out

# ------------------------------------------------------------------ skin paint

def paint_skin(stubble=0.0):
    src = Image.open(os.path.join(SCAN, 'Head.jpg')).convert('RGB')
    A = np.asarray(src).astype(np.float32) / 255
    H, Wd = A.shape[:2]
    yy, xx = np.mgrid[0:H, 0:Wd].astype(np.float32)
    blur = lambda im, r: np.asarray(Image.fromarray((np.clip(im, 0, 1) * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))).astype(np.float32) / 255
    blob = lambda cx, cy, rx, ry: np.exp(-(((xx - cx) / rx) ** 2 + ((yy - cy) / ry) ** 2))
    cover = (A.sum(2) > 0.06).astype(np.float32)
    tone = np.median(A[430:470, 300:380].reshape(-1, 3), axis=0)           # his cheek
    tone = tone * np.array([1.02, 0.97, 0.93])
    low = blur(A, 28)
    # painted, not photographed: one even tone, only the broadest light and dark of the scan kept
    lum = low.mean(2, keepdims=True) / max(tone.mean(), 1e-3)
    base = tone[None, None, :] * (0.86 + 0.14 * np.clip(lum, 0.6, 1.25))
    out = base.copy()
    # blush: cheeks, nose, ears, chin
    red = np.array([0.20, -0.02, -0.05])
    for cx, cy, rx, ry, k in ((372, 455, 70, 50, 0.32), (652, 455, 70, 50, 0.32), (512, 440, 34, 30, 0.26), (512, 590, 60, 34, 0.12),
                              (222, 425, 22, 50, 0.22), (802, 425, 22, 50, 0.22)):
        out += red[None, None, :] * (blob(cx, cy, rx, ry) * k)[:, :, None]
    # the hollows of the scan's ears, kept faintly
    earm = (blob(218, 425, 40, 75) + blob(806, 425, 40, 75))[:, :, None]
    out = out * (1 - 0.55 * earm) + (out * (A / np.maximum(low, 1e-3))) * (0.55 * earm)
    # eyebrows: his own, taken from the scan's dark pixels above the eyes, made full and soft
    d = (low.mean(2) - A.mean(2))
    box = ((xx > 355) & (xx < 672) & (yy > 292) & (yy < 342)).astype(np.float32)
    brow = np.clip((d - 0.06) / 0.08, 0, 1) * box
    brow = blur(np.repeat(brow[:, :, None], 3, 2), 3.0)[:, :, 0]
    brow = np.clip((brow - 0.22) / 0.30, 0, 1)                     # one full, soft-edged shape each
    brow = blur(np.repeat(brow[:, :, None], 3, 2), 1.4)[:, :, 0]
    out = out * (1 - brow[:, :, None] * 0.93) + np.array([0.060, 0.045, 0.038])[None, None, :] * brow[:, :, None] * 0.93
    # lips: where the scan is redder than skin
    gr = A[:, :, 1] / np.maximum(A[:, :, 0], 1e-3)
    lbox = ((xx > 438) & (xx < 590) & (yy > 496) & (yy < 550)).astype(np.float32)
    lip = np.clip((0.745 - gr) / 0.055, 0, 1) * lbox
    lip = np.clip(blur(np.repeat(lip[:, :, None], 3, 2), 2.2)[:, :, 0] * 1.25, 0, 1)
    out = out * (1 - 0.9 * lip[:, :, None]) + np.array([0.56, 0.31, 0.29])[None, None, :] * 0.9 * lip[:, :, None]
    # (the line where they meet)
    seam = np.clip((0.40 - A.mean(2)) / 0.10, 0, 1) * lbox
    out *= 1 - 0.35 * blur(np.repeat(seam[:, :, None], 3, 2), 1.2)
    # nostrils
    nos = np.clip((d - 0.10) / 0.12, 0, 1) * ((xx > 470) & (xx < 556) & (yy > 440) & (yy < 478)).astype(np.float32)
    out *= 1 - 0.6 * blur(np.repeat(nos[:, :, None], 3, 2), 1.5)
    # the small mark beside his nose
    out *= 1 - 0.55 * blob(436, 457, 3.2, 3.2)[:, :, None]
    if stubble > 0:
        # a light shadow of stubble: upper lip, chin and along the jaw
        st = np.clip(blob(512, 482, 62, 13) + blob(512, 585, 78, 42) + blob(372, 548, 62, 52) + blob(652, 548, 62, 52) + blob(512, 640, 150, 30) * 0.7, 0, 1)
        st *= 1 - lip
        rng = np.random.default_rng(3)
        grain = blur(rng.random((H, Wd, 3)).astype(np.float32), 0.8)[:, :, 0]
        st = st * (0.55 + 0.9 * (grain - 0.3))
        out = out * (1 - stubble * st[:, :, None]) + np.array([0.16, 0.13, 0.12])[None, None, :] * stubble * st[:, :, None]
    # the inside of the mouth, teeth and so on at the foot of the sheet are left as they were
    keep = ((yy > 858) & ((xx < 250) | (xx > 780))).astype(np.float32)[:, :, None]
    out = out * (1 - keep) + A * keep
    out = out * cover[:, :, None] + tone[None, None, :] * (1 - cover[:, :, None]) * (1 - keep) + A * keep * (1 - cover[:, :, None])
    return Image.fromarray((np.clip(out, 0, 1) * 255).astype(np.uint8))

# ------------------------------------------------------------------ hair

def hair_clumps(head_pos, head_idx, old_hair_pos, lv, seed=5):
    """Sculpted clumps after his photo: black waves swept up off the forehead and
    across to one side, brushed back over the ears, short at the nape with the
    ends flicking out. Returns (pos, uv, idx) for the clumps and for the under-layer."""
    rng = np.random.default_rng(seed)
    hs = LEVELS[lv]['head']
    c0 = head_scale(np.array([[0.0, 1.765, -0.012]]), lv)[0]
    axis = np.array([0.0, 0.94, -0.34]); axis /= np.linalg.norm(axis)
    ex = np.array([1.0, 0, 0]); ez = np.cross(ex, axis)
    LA, LO = 48, 128
    SPAN = PI * 0.80
    def direction(la, lo): return axis * np.cos(la) + (ex * np.sin(lo) + ez * np.cos(lo)) * np.sin(la)
    D = np.array([[direction(i / LA * SPAN, j / LO * 2 * PI) for j in range(LO)] for i in range(LA + 1)])
    T = head_pos[head_idx.astype(int)]
    v0 = T[:, 0] - c0; e1 = T[:, 1] - T[:, 0]; e2 = T[:, 2] - T[:, 0]
    rs = np.zeros((LA + 1, LO))
    for i in range(LA + 1):
        for j in range(LO):
            dv = D[i, j]
            pv = np.cross(dv, e2); det = (e1 * pv).sum(1)
            ok = np.abs(det) > 1e-12
            inv = np.where(ok, 1.0 / np.where(ok, det, 1), 0)
            uu = (-v0 * pv).sum(1) * inv
            qv = np.cross(-v0, e1)
            vv = (qv @ dv) * inv
            tt = (e2 * qv).sum(1) * inv
            hit = ok & (uu >= -1e-6) & (vv >= -1e-6) & (uu + vv <= 1 + 1e-6) & (tt > 0)
            rs[i, j] = tt[hit].max() if hit.any() else 0
    up = lambda m: np.vstack([m[:1], m[:-1]]); dn = lambda m: np.vstack([m[1:], m[-1:]])
    for _ in range(4):
        z = rs <= 0
        if not z.any(): break
        rs = np.where(z, np.stack([np.roll(rs, 1, 1), np.roll(rs, -1, 1), up(rs), dn(rs)]).max(0), rs)
    # where his hair grows: where the old hair was
    d = old_hair_pos - c0; r = np.linalg.norm(d, axis=1); u = d / r[:, None]
    rh = np.zeros((LA + 1, LO))
    for i in range(LA + 1):
        for j in range(LO):
            m = (u @ D[i, j]) > np.cos(0.11)
            rh[i, j] = r[m].max() if m.any() else 0
    grow = lambda m: m | np.roll(m, 1, 1) | np.roll(m, -1, 1) | up(m) | dn(m)
    shrink = lambda m: m & np.roll(m, 1, 1) & np.roll(m, -1, 1) & up(m) & dn(m)
    has = (rh > rs - 0.003) & (rh > 0)
    has = shrink(shrink(shrink(grow(grow(grow(has))))))
    Y = c0[1] + D[:, :, 1] * rs; ZF = D[:, :, 2]
    piv = 1.60
    fl = lambda y: piv + (y - piv) * hs
    floor = fl(1.748) + (fl(1.690) - fl(1.748)) * sm(-0.15, -0.75, ZF)
    has &= ~((ZF <= 0.55) & (Y < floor))
    # nothing in front of the ear or down the side of the face: the temple is the edge
    has &= ~((ZF > 0.26) & (ZF <= 0.55) & (Y < fl(1.782)))

    def scalp(p):
        """the point of the scalp under p, the outward direction there, and whether hair grows there"""
        dv = p - c0; dv /= np.linalg.norm(dv)
        la = np.arccos(np.clip(dv @ axis, -1, 1))
        lo = np.arctan2(dv @ ex, dv @ ez) % (2 * PI)
        fi = min(la / SPAN * LA, LA - 1e-3); fj = lo / (2 * PI) * LO
        i0 = int(fi); j0 = int(fj) % LO; j1 = (j0 + 1) % LO; a = fi - i0; b = fj - int(fj)
        rr = (rs[i0, j0] * (1 - b) + rs[i0, j1] * b) * (1 - a) + (rs[i0 + 1, j0] * (1 - b) + rs[i0 + 1, j1] * b) * a
        return c0 + dv * rr, dv, bool(has[int(round(fi)), int(round(fj)) % LO])

    UP = np.array([0, 1.0, 0])
    PART = 0.042 * hs                      # the parting, on his left
    def flow(p, dv):
        x, y, z = dv
        top = float(sm(0.30, 0.70, y))
        # on top: away from the parting, across and back; a strip beyond the parting falls the other way
        if p[0] < PART: ft = np.array([-0.80, 0.0, -0.50])
        else: ft = np.array([0.75, -0.25, -0.45])
        # sides: brushed back, a little down; back: down
        back = float(sm(-0.1, -0.7, z))
        fs = np.array([0.0, -0.22, -1.0]) * (1 - back) + np.array([0.12 * np.sign(x), -1.0, -0.15]) * back
        f = ft * top + fs * (1 - top)
        f = f - dv * (f @ dv)
        return f / (np.linalg.norm(f) + 1e-9)

    # roots: scattered evenly over the scalp, a row right on the front hairline
    roots = []
    cand = []
    for i in range(LA + 1):
        for j in range(LO):
            if has[i, j]: cand.append(c0 + D[i, j] * rs[i, j])
    cand = np.array(cand)
    order = rng.permutation(len(cand))
    for k in order:
        p = cand[k]
        dv = (p - c0) / np.linalg.norm(p - c0)
        mind = (0.0120 if dv[2] > 0.35 else 0.0135) * hs
        if all(np.linalg.norm(p - q) > mind for q in roots): roots.append(p)
    nfree = len(roots)
    edge = has & ~shrink(has)
    ec = [c0 + D[i, j] * rs[i, j] for i in range(LA + 1) for j in range(LO) if edge[i, j] and D[i, j, 2] < 0.50]
    for k in rng.permutation(len(ec)):
        p = ec[k]
        if all(np.linalg.norm(p - q) > 0.0085 * hs for q in roots[nfree:]): roots.append(p)
    roots = np.array(roots)

    pos, uv, idx = [], [], []
    NS, NR = 10, 4
    for ri, root in enumerate(roots):
        p, dv, _ = scalp(root)
        top = float(sm(0.30, 0.70, dv[1])); front = float(sm(0.25, 0.65, dv[2])); back = float(sm(-0.1, -0.7, dv[2]))
        side = (1 - top) * (1 - back)
        length = (0.120 * top + 0.080 * side + 0.090 * (1 - top) * back) * hs * (0.85 + 0.3 * rng.random())
        lift0 = (0.017 * top + 0.014 * top * front + 0.004 * side + 0.007 * (1 - top) * back) * hs
        half = (0.0125 + 0.005 * rng.random()) * hs * (1.0 - 0.25 * side)
        cyc = 0.75 + 0.3 * rng.random()
        amp = (0.010 * top + 0.005 * (1 - top)) * hs
        # neighbouring clumps wave together (that is what makes a wave), each a little out of step
        ph = p[0] * 38 + p[2] * 22 + p[1] * 15 + rng.random() * 1.1
        flick = 0.009 * hs * (side * 0.15 + (1 - top) * back * 1.0)
        rim = ri >= nfree
        if rim:
            # (round the ears and along the nape: short, close to the head, lying back along the edge)
            length = (0.034 + 0.012 * rng.random()) * hs; lift0 = 0.0025 * hs; half = (0.0085 + 0.003 * rng.random()) * hs; amp *= 0.4; flick *= 0.5
        # a lock stops where the hair stops: it does not spill down past the temple onto the face
        q = p.copy(); walked = 0.0
        for _ in range(24):
            sp, n, _h = scalp(q)
            if n[2] > -0.05 and sp[1] < fl(1.790) and walked > 0: break
            q = sp + flow(sp, n) * (length / 24); walked += length / 24
        if not rim and walked < 0.5 * length and float(sm(0.30, 0.70, dv[1])) < 0.6: continue      # (too short to be a lock: leave it out)
        if not rim: length = max(0.5 * length, min(length, walked * 0.92))
        pts, nrm = [], []
        q = p.copy()
        step = length / (NS - 1)
        for k in range(NS):
            s = k / (NS - 1)
            sp, n, _ = scalp(q)
            f = flow(sp, n)
            w = np.cross(n, f)
            # rises from the root, arcs over, comes back down; at the nape and over the ears the tip kicks out
            h = lift0 * (0.25 + 0.75 * np.sin(PI * min(1.0, s * 1.35 + 0.08)) ** 0.8) + (0.0025 - 0.006 * float(sm(0.12, 0.0, s))) * hs + flick * float(sm(0.72, 1.0, s))
            pts.append(sp + n * h + w * amp * np.sin(ph + s * 2 * PI * cyc) * float(sm(0.0, 0.25, s)))
            nrm.append(n)
            q = sp + (f + w * 0.14 * np.cos(ph + s * 2 * PI * cyc)) * step
        pts = np.array(pts); nrm = np.array(nrm)
        base = len(pos)
        tw = (rng.random() - 0.5) * 0.7
        for k in range(NS):
            s = k / (NS - 1)
            t = pts[min(k + 1, NS - 1)] - pts[max(k - 1, 0)]; t /= np.linalg.norm(t) + 1e-9
            n = nrm[k] - t * (nrm[k] @ t); n /= np.linalg.norm(n) + 1e-9
            b = np.cross(t, n)
            a = half * (np.sin(PI * (0.015 + 0.985 * s)) ** 0.55) * (1 - 0.35 * s) + 0.0005
            th = 0.26 * a
            ca, sa = np.cos(tw * s), np.sin(tw * s)
            for r_ in range(NR + 1):
                ang = r_ / NR * 2 * PI
                o = (b * ca + n * sa) * np.cos(ang) * a + (n * ca - b * sa) * np.sin(ang) * th
                # uv: the lock's number plus the way round it (0..1), and the way along it
                pos.append(pts[k] + o); uv.append([ri + 0.01 + 0.98 * r_ / NR, s])
        for k in range(NS - 1):
            for r_ in range(NR):
                a0 = base + k * (NR + 1) + r_; a1 = a0 + 1
                b0 = a0 + NR + 1; b1 = a1 + NR + 1
                idx += [[a0, b0, a1], [a1, b0, b1]]
        # now and then a few loose hairs lift away from a lock
        if rng.random() < 0.30:
            base = len(pos)
            k0 = NS // 2 + int(rng.integers(0, 3))
            curl = (rng.random(3) - 0.5) * 0.012 * hs
            fp = []
            for k in range(k0, NS + 2):
                kk = min(k, NS - 1); e = (k - k0) / (NS + 1 - k0)
                ext = (pts[NS - 1] - pts[NS - 2]) * max(0, k - (NS - 1))
                fp.append(pts[kk] + ext + nrm[kk] * (0.004 + 0.010 * e * e) * hs + curl * e * e)
            fp = np.array(fp)
            for k in range(len(fp)):
                t = fp[min(k + 1, len(fp) - 1)] - fp[max(k - 1, 0)]; t /= np.linalg.norm(t) + 1e-9
                a1 = np.cross(t, [0.3, 1, 0.2]); a1 /= np.linalg.norm(a1) + 1e-9; a2 = np.cross(t, a1)
                rr = 0.0008 * hs * (1 - 0.6 * k / (len(fp) - 1))
                for r_ in range(4):
                    ang = r_ / 3 * 2 * PI
                    pos.append(fp[k] + (a1 * np.cos(ang) + a2 * np.sin(ang)) * rr); uv.append([ri + 0.01 + 0.98 * r_ / 3, k / (len(fp) - 1)])
            for k in range(len(fp) - 1):
                for r_ in range(3):
                    a0 = base + k * 4 + r_; a1_ = a0 + 1
                    idx += [[a0, a0 + 4, a1_], [a1_, a0 + 4, a1_ + 4]]
    clumps = (np.array(pos), np.array(uv), np.array(idx))
    # the under-layer: a close dark cap, so no skin shows between the clumps
    hasc = shrink(has)          # (its edge sits a little inside the hairline, under the locks)
    cp, ci = [], []
    for i in range(0, LA + 1, 2):
        for j in range(0, LO, 2):
            cp.append(c0 + D[i, j] * (rs[i, j] + 0.006 * hs))
    LO2 = LO // 2
    for i in range(LA // 2):
        for j in range(LO2):
            j1 = (j + 1) % LO2
            if hasc[2 * i, 2 * j] and hasc[2 * i, 2 * j1] and hasc[2 * i + 2, 2 * j] and hasc[2 * i + 2, 2 * j1]:
                a = i * LO2 + j; b = i * LO2 + j1; c = (i + 1) * LO2 + j; dd = (i + 1) * LO2 + j1
                ci += [[a, c, b], [b, c, dd]]
    cap = (np.array(cp), np.tile([-1.0, 0.0], (len(cp), 1)), np.array(ci))
    return clumps, cap, len(roots)


def body_skin(tone_from):
    """the scan's neck and hands, repainted to the same even tone as the face"""
    src = Image.open(os.path.join(SCAN, 'Body.jpg')).convert('RGB')
    A = np.asarray(src).astype(np.float32) / 255
    low = np.asarray(src.filter(ImageFilter.GaussianBlur(10))).astype(np.float32) / 255
    cover = A.sum(2) > 0.25
    face = np.asarray(tone_from).astype(np.float32) / 255
    tone = np.median(face[430:470, 300:380].reshape(-1, 3), axis=0)
    mean = np.median(low[cover].reshape(-1, 3), axis=0)
    out = low * (tone / np.maximum(mean, 1e-3))[None, None, :]
    out = out * 0.7 + tone[None, None, :] * 0.3
    return Image.fromarray((np.clip(out, 0, 1) * 255).astype(np.uint8))

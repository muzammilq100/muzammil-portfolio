#!/usr/bin/env python3
"""
HIS MOVEMENT: MOTION CAPTURE
----------------------------
Turns motion-capture clips (Mixamo .fbx files, downloaded "without skin")
into res/avatar/motion.{json,bin}, which avatar.js plays on his skeleton.
His skeleton has the same bones, by the same names, standing in the same
rest pose as Mixamo's, so a clip is carried across bone by bone: for each
frame, how far each bone is turned from its rest, measured relative to
its parent (the form avatar.js poses him in), and where the hips are.

    pip install bpy                       (Blender as a Python module)
    python3 scripts/avatar/build_motion.py /folder/with/the/fbx/files

The .fbx files themselves are not kept in this repository.

motion.json: { clips: { name: { fps, frames, bones: [...], q: byte offset,
               hips: byte offset, mean: byte offset, phase0, stride } } }
motion.bin:  q     int16[frames][bones][4]  quaternions x, y, z, w (x 32767)
             hips  float32[frames][3]       the hips, from their rest place
                                            (his own model units, x left, y up, z ahead)
             mean  float32[bones][4]        each bone's average turn over the clip
"""
import sys, os, json, glob
import numpy as np
import bpy
from mathutils import Matrix

HERE = os.path.dirname(os.path.abspath(__file__))
RES = os.path.join(HERE, '..', '..', 'res', 'avatar')
# Blender's world (z up, he faces -y) -> his own axes (y up, he faces +z)
C = np.array([[1.0, 0, 0], [0, 0, 1], [0, -1, 0]])

CLIPS = {            # file name contains -> (clip name, frames a second kept, loops)
    'Walking': ('walk', 30, True),
    'Piano': ('piano', 15, True),
    'Sitting': ('sit', 15, True),
    'Breathing': ('idle', 15, True),
}

def quat(R):
    m = Matrix(R.tolist()).to_quaternion()
    return np.array([m.x, m.y, m.z, m.w])

def main(folder):
    meta = json.load(open(os.path.join(RES, 'avatar.json')))
    bones = meta['bones']
    names = [b['name'] for b in bones]
    parent = [b['parent'] for b in bones]
    # his own hip height at rest, in his model's units
    hip_rest = bones[names.index('Hips')]['t'][1]
    out = bytearray(); clips = {}
    def put(arr):
        while len(out) % 4: out.append(0)
        o = len(out); out.extend(arr.tobytes()); return o
    for f in sorted(glob.glob(os.path.join(folder, '*.fbx'))):
        key = next((k for k in CLIPS if k in os.path.basename(f)), None)
        if not key: continue
        cname, fps, loops = CLIPS[key]
        bpy.ops.wm.read_factory_settings(use_empty=True)
        bpy.ops.import_scene.fbx(filepath=f)
        sc = bpy.context.scene
        arm = [o for o in bpy.data.objects if o.type == 'ARMATURE'][0]
        f0, f1 = [int(round(x)) for x in arm.animation_data.action.frame_range]
        step = max(1, int(round(sc.render.fps / fps)))
        frames = list(range(f0, f1 + 1, step))
        if loops and len(frames) > 2: frames = frames[:-1]          # (the last frame repeats the first)
        have = [n for n in names if ('mixamorig:' + n) in arm.data.bones]
        Wm = np.array(arm.matrix_world.to_3x3()); Wm = Wm / np.linalg.norm(Wm, axis=0)
        scale = arm.matrix_world.to_scale()[0]
        rot = lambda M: (lambda A: A / np.linalg.norm(A, axis=0))(np.array(M.to_3x3()))
        rest = {n: Wm @ rot(arm.data.bones['mixamorig:' + n].matrix_local) for n in have}
        hb = arm.data.bones['mixamorig:Hips']
        hips0 = np.array(arm.matrix_world @ hb.head_local)
        k_size = hip_rest / hips0[2]
        Q = np.zeros((len(frames), len(have), 4)); H = np.zeros((len(frames), 3))
        feet = np.zeros((len(frames), 2)); feet_y = np.zeros((len(frames), 2))
        for fi, fr in enumerate(frames):
            sc.frame_set(fr)
            bpy.context.view_layer.update()
            delta = {}
            for n in have:
                pb = arm.pose.bones['mixamorig:' + n]
                R = Wm @ rot(pb.matrix)
                delta[n] = C @ (R @ rest[n].T) @ C.T               # how far it is turned from rest, in his axes
            for bi, n in enumerate(have):
                p = parent[names.index(n)]
                pn = names[p] if p >= 0 else None
                D = delta[n] if pn not in delta else delta[pn].T @ delta[n]
                Q[fi, bi] = quat(D)
            hp = np.array(arm.matrix_world @ arm.pose.bones['mixamorig:Hips'].head)
            H[fi] = C @ (hp - hips0) * k_size
            for s, side in enumerate(('Left', 'Right')):
                fp = np.array(arm.matrix_world @ arm.pose.bones['mixamorig:' + side + 'Foot'].head)
                feet[fi, s] = (C @ (fp - hp))[2] * k_size          # how far ahead of the hips the foot is
                feet_y[fi, s] = fp[2] * k_size                     # and how high off the floor
        # the same turn can be written two ways (q and -q): keep each bone's run consistent
        for bi in range(len(have)):
            for fi in range(1, len(frames)):
                if (Q[fi, bi] * Q[fi - 1, bi]).sum() < 0: Q[fi, bi] *= -1
        mean = Q.mean(0); mean /= np.linalg.norm(mean, axis=1, keepdims=True)
        travel = None
        if cname == 'walk':
            # he is carried along by the tour, so the clip must walk on the spot: take
            # out the steady travel ahead (if the clip has any) and keep the sway and the bob
            n = len(frames)
            slope = np.polyfit(np.arange(n), H[:, 2], 1)[0]
            travel = float(slope * n)
            H[:, 2] -= slope * np.arange(n)
            H[:, 2] -= H[:, 2].mean()
            H[:, 0] -= H[:, 0].mean()
        info = dict(fps=sc.render.fps / step, frames=len(frames), bones=have,
                    q=put((np.clip(Q, -1, 1) * 32767).astype(np.int16)),
                    hips=put(H.astype(np.float32)), mean=put(mean.astype(np.float32)))
        if cname == 'walk':
            # where in the cycle his left foot is furthest ahead (avatar.js counts a step from there)
            info['phase0'] = float(np.argmax(feet[:, 0]) / len(frames))
            # how far one whole cycle carries him: while a foot is on the floor it travels
            # back under him at exactly his walking speed
            n = len(frames); sp = []
            for s_ in range(2):
                down = feet_y[:, s_] < feet_y[:, s_].min() + 0.02
                for i in range(n):
                    j = (i + 1) % n
                    if down[i] and down[j]: sp.append(feet[i, s_] - feet[j, s_])
            info['stride'] = travel if travel and travel > 0.5 else float(np.mean(sp) * n)
        clips[cname] = info
        print(cname, len(frames), 'frames at', info['fps'], 'a second;', len(have), 'bones', {k: round(v, 3) for k, v in info.items() if k in ('phase0', 'stride')})
    open(os.path.join(RES, 'motion.bin'), 'wb').write(bytes(out))
    json.dump(dict(clips=clips), open(os.path.join(RES, 'motion.json'), 'w'), separators=(',', ':'))
    print('wrote', len(out), 'bytes')

if __name__ == '__main__':
    main(sys.argv[1])

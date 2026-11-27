import numpy as np, struct
def read(path):
    b = open(path,'rb').read()
    nV,nI,nS,big = struct.unpack_from('<4I', b, 0)
    sub = np.frombuffer(b, np.int32, nS*3, 16).reshape(-1,3)
    vOff = 16+nS*12; iOff = vOff+nV*36
    V = np.frombuffer(b, np.float32, nV*9, vOff).reshape(-1,9)
    I = np.frombuffer(b, np.uint32 if big else np.uint16, nI, iOff).astype(np.int64)
    return V, I, sub
def write(path, V, I, sub):
    V = np.asarray(V, np.float32); I = np.asarray(I)
    big = 1 if len(V) > 65535 else 0
    hdr = struct.pack('<4I', len(V), len(I), len(sub), big)
    s = np.asarray(sub, np.int32).tobytes()
    idx = I.astype(np.uint32 if big else np.uint16).tobytes()
    open(path,'wb').write(hdr + s + V.tobytes() + idx)

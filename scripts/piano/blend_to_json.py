"""Minimal .blend (2.8x/2.9x, uncompressed, 64-bit LE) mesh extractor.

Usage: python3 -I blendparse.py file.blend out.json
Writes every mesh object: name, world matrix, material names,
vertices, polygons (as vertex index lists) and per-poly material index.
"""
import struct, sys, json, re

path, out = sys.argv[1], sys.argv[2]
data = open(path, 'rb').read()
assert data[:7] == b'BLENDER'
P = 8 if data[7:8] == b'-' else 4
assert data[8:9] == b'v' and P == 8

# --- blocks
blocks = []
off = 12
while off < len(data):
    code = data[off:off+4]
    size, old, sdna, count = struct.unpack_from('<iQii', data, off+4)
    start = off + 24
    blocks.append((code, size, old, sdna, count, start))
    off = start + size
    if code == b'ENDB':
        break

by_ptr = {b[2]: b for b in blocks}

# --- SDNA
dna = next(b for b in blocks if b[0] == b'DNA1')
o = dna[5]
assert data[o:o+4] == b'SDNA'; o += 4

def align4(x): return (x + 3) & ~3

def read_strings(o, tag):
    assert data[o:o+4] == tag, (tag, data[o:o+4]); o += 4
    n, = struct.unpack_from('<i', data, o); o += 4
    out = []
    for _ in range(n):
        e = data.index(b'\0', o); out.append(data[o:e].decode('latin1')); o = e + 1
    return out, align4(o)

names, o = read_strings(o, b'NAME')
types, o = read_strings(o, b'TYPE')
assert data[o:o+4] == b'TLEN'; o += 4
tlen = list(struct.unpack_from('<%dh' % len(types), data, o)); o = align4(o + 2*len(types))
assert data[o:o+4] == b'STRC'; o += 4
ns, = struct.unpack_from('<i', data, o); o += 4
structs = []
for _ in range(ns):
    t, nf = struct.unpack_from('<hh', data, o); o += 4
    fields = []
    for _ in range(nf):
        ft, fn = struct.unpack_from('<hh', data, o); o += 4
        fields.append((ft, fn))
    structs.append((t, fields))

def field_size(ft, name):
    if name.startswith('*') or name.startswith('(*'):
        base = P
    else:
        base = tlen[ft]
    mult = 1
    for m in re.findall(r'\[(\d+)\]', name):
        mult *= int(m)
    return base * mult

layout = {}   # struct name -> {field: (offset, type, name)}
for t, fields in structs:
    d = {}; off2 = 0
    for ft, fn in fields:
        nm = names[fn]
        key = re.sub(r'[\*\(\)]|\[.*', '', nm)
        d[key] = (off2, types[ft], nm)
        off2 += field_size(ft, nm)
    layout[types[t]] = d
sdna_name = {i: types[t] for i, (t, _) in enumerate(structs)}

def get(block_start, sname, field, fmt=None):
    off2, tname, nm = layout[sname][field]
    a = block_start + off2
    if nm.startswith('*'):
        return struct.unpack_from('<Q', data, a)[0]
    if fmt:
        return struct.unpack_from('<' + fmt, data, a)
    return a

def idname(start, sname):
    a = get(start, sname, 'id')
    na = a + layout['ID']['name'][0]
    return data[na:na+66].split(b'\0')[0].decode('latin1')[2:]

meshes_out = []
for code, size, old, sdna, count, start in blocks:
    if code[:2] != b'OB':
        continue
    otype = get(start, 'Object', 'type', 'h')[0]
    if otype != 1:
        continue
    oname = idname(start, 'Object')
    mat = get(start, 'Object', 'obmat', '16f')
    me_ptr = get(start, 'Object', 'data')
    me = by_ptr.get(me_ptr)
    if not me:
        continue
    ms = me[5]
    tv = get(ms, 'Mesh', 'totvert', 'i')[0]
    tl = get(ms, 'Mesh', 'totloop', 'i')[0]
    tp = get(ms, 'Mesh', 'totpoly', 'i')[0]
    vb = by_ptr[get(ms, 'Mesh', 'mvert')]
    lb = by_ptr[get(ms, 'Mesh', 'mloop')]
    pb = by_ptr[get(ms, 'Mesh', 'mpoly')]
    vsz = vb[1] // vb[4]; lsz = lb[1] // lb[4]; psz = pb[1] // pb[4]
    co_off = layout['MVert']['co'][0]
    verts = [struct.unpack_from('<3f', data, vb[5] + i*vsz + co_off) for i in range(tv)]
    lv_off = layout['MLoop']['v'][0]
    loops = [struct.unpack_from('<I', data, lb[5] + i*lsz + lv_off)[0] for i in range(tl)]
    ls_off = layout['MPoly']['loopstart'][0]
    tl_off = layout['MPoly']['totloop'][0]
    mn_off = layout['MPoly']['mat_nr'][0]
    polys = []; pmat = []
    for i in range(tp):
        b0 = pb[5] + i*psz
        ls, = struct.unpack_from('<i', data, b0 + ls_off)
        n, = struct.unpack_from('<i', data, b0 + tl_off)
        m, = struct.unpack_from('<h', data, b0 + mn_off)
        polys.append(loops[ls:ls+n]); pmat.append(m)
    # material names
    totcol = get(ms, 'Mesh', 'totcol', 'h')[0]
    mats = []
    mp = get(ms, 'Mesh', 'mat')
    if mp and mp in by_ptr:
        arr = by_ptr[mp][5]
        for k in range(totcol):
            p, = struct.unpack_from('<Q', data, arr + 8*k)
            mats.append(idname(by_ptr[p][5], 'Material') if p in by_ptr else None)
    meshes_out.append(dict(name=oname, mesh=idname(ms, 'Mesh'), matrix=mat,
                           mats=mats, verts=verts, polys=polys, pmat=pmat))

json.dump(meshes_out, open(out, 'w'))
for m in meshes_out:
    print(m['name'], len(m['verts']), len(m['polys']), m['mats'])

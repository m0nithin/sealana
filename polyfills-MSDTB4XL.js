var Ge = (r, e) => () => (e || r((e = {
    exports: {}
}).exports, e), e.exports);
var Dt = Ge(Ze => {
    "use strict";
    Ze.byteLength = fr;
    Ze.toByteArray = pr;
    Ze.fromByteArray = Er;
    var fe = [],
        se = [],
        lr = typeof Uint8Array < "u" ? Uint8Array : Array,
        rt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (ge = 0, St = rt.length; ge < St; ++ge) fe[ge] = rt[ge], se[rt.charCodeAt(ge)] = ge;
    var ge, St;
    se[45] = 62;
    se[95] = 63;

    function Ft(r) {
        var e = r.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var t = r.indexOf("=");
        t === -1 && (t = e);
        var n = t === e ? 0 : 4 - t % 4;
        return [t, n]
    }

    function fr(r) {
        var e = Ft(r),
            t = e[0],
            n = e[1];
        return (t + n) * 3 / 4 - n
    }

    function hr(r, e, t) {
        return (e + t) * 3 / 4 - t
    }

    function pr(r) {
        var e, t = Ft(r),
            n = t[0],
            i = t[1],
            o = new lr(hr(r, n, i)),
            a = 0,
            f = i > 0 ? n - 4 : n,
            h;
        for (h = 0; h < f; h += 4) e = se[r.charCodeAt(h)] << 18 | se[r.charCodeAt(h + 1)] << 12 | se[r.charCodeAt(h + 2)] << 6 | se[r.charCodeAt(h + 3)], o[a++] = e >> 16 & 255, o[a++] = e >> 8 & 255, o[a++] = e & 255;
        return i === 2 && (e = se[r.charCodeAt(h)] << 2 | se[r.charCodeAt(h + 1)] >> 4, o[a++] = e & 255), i === 1 && (e = se[r.charCodeAt(h)] << 10 | se[r.charCodeAt(h + 1)] << 4 | se[r.charCodeAt(h + 2)] >> 2, o[a++] = e >> 8 & 255, o[a++] = e & 255), o
    }

    function dr(r) {
        return fe[r >> 18 & 63] + fe[r >> 12 & 63] + fe[r >> 6 & 63] + fe[r & 63]
    }

    function yr(r, e, t) {
        for (var n, i = [], o = e; o < t; o += 3) n = (r[o] << 16 & 16711680) + (r[o + 1] << 8 & 65280) + (r[o + 2] & 255), i.push(dr(n));
        return i.join("")
    }

    function Er(r) {
        for (var e, t = r.length, n = t % 3, i = [], o = 16383, a = 0, f = t - n; a < f; a += o) i.push(yr(r, a, a + o > f ? f : a + o));
        return n === 1 ? (e = r[t - 1], i.push(fe[e >> 2] + fe[e << 4 & 63] + "==")) : n === 2 && (e = (r[t - 2] << 8) + r[t - 1], i.push(fe[e >> 10] + fe[e >> 4 & 63] + fe[e << 2 & 63] + "=")), i.join("")
    }
});
var Pt = Ge(nt => {
    "use strict";
    nt.read = function(r, e, t, n, i) {
        var o, a, f = i * 8 - n - 1,
            h = (1 << f) - 1,
            E = h >> 1,
            d = -7,
            T = t ? i - 1 : 0,
            C = t ? -1 : 1,
            R = r[e + T];
        for (T += C, o = R & (1 << -d) - 1, R >>= -d, d += f; d > 0; o = o * 256 + r[e + T], T += C, d -= 8);
        for (a = o & (1 << -d) - 1, o >>= -d, d += n; d > 0; a = a * 256 + r[e + T], T += C, d -= 8);
        if (o === 0) o = 1 - E;
        else {
            if (o === h) return a ? NaN : (R ? -1 : 1) * (1 / 0);
            a = a + Math.pow(2, n), o = o - E
        }
        return (R ? -1 : 1) * a * Math.pow(2, o - n)
    };
    nt.write = function(r, e, t, n, i, o) {
        var a, f, h, E = o * 8 - i - 1,
            d = (1 << E) - 1,
            T = d >> 1,
            C = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            R = n ? 0 : o - 1,
            Z = n ? 1 : -1,
            O = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (f = isNaN(e) ? 1 : 0, a = d) : (a = Math.floor(Math.log(e) / Math.LN2), e * (h = Math.pow(2, -a)) < 1 && (a--, h *= 2), a + T >= 1 ? e += C / h : e += C * Math.pow(2, 1 - T), e * h >= 2 && (a++, h /= 2), a + T >= d ? (f = 0, a = d) : a + T >= 1 ? (f = (e * h - 1) * Math.pow(2, i), a = a + T) : (f = e * Math.pow(2, T - 1) * Math.pow(2, i), a = 0)); i >= 8; r[t + R] = f & 255, R += Z, f /= 256, i -= 8);
        for (a = a << i | f, E += i; E > 0; r[t + R] = a & 255, R += Z, a /= 256, E -= 8);
        r[t + R - Z] |= O * 128
    }
});
var qt = Ge(Re => {
    "use strict";
    var it = Dt(),
        Ce = Pt(),
        Bt = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    Re.Buffer = u;
    Re.SlowBuffer = kr;
    Re.INSPECT_MAX_BYTES = 50;
    var Oe = 2147483647;
    Re.kMaxLength = Oe;
    u.TYPED_ARRAY_SUPPORT = _r();
    !u.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

    function _r() {
        try {
            var r = new Uint8Array(1),
                e = {
                    foo: function() {
                        return 42
                    }
                };
            return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(r, e), r.foo() === 42
        } catch {
            return !1
        }
    }
    Object.defineProperty(u.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (u.isBuffer(this)) return this.buffer
        }
    });
    Object.defineProperty(u.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (u.isBuffer(this)) return this.byteOffset
        }
    });

    function _e(r) {
        if (r > Oe) throw new RangeError('The value "' + r + '" is invalid for option "size"');
        var e = new Uint8Array(r);
        return Object.setPrototypeOf(e, u.prototype), e
    }

    function u(r, e, t) {
        if (typeof r == "number") {
            if (typeof e == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
            return ct(r)
        }
        return Lt(r, e, t)
    }
    u.poolSize = 8192;

    function Lt(r, e, t) {
        if (typeof r == "string") return mr(r, e);
        if (ArrayBuffer.isView(r)) return gr(r);
        if (r == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
        if (he(r, ArrayBuffer) || r && he(r.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (he(r, SharedArrayBuffer) || r && he(r.buffer, SharedArrayBuffer))) return st(r, e, t);
        if (typeof r == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        var n = r.valueOf && r.valueOf();
        if (n != null && n !== r) return u.from(n, e, t);
        var i = wr(r);
        if (i) return i;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof r[Symbol.toPrimitive] == "function") return u.from(r[Symbol.toPrimitive]("string"), e, t);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r)
    }
    u.from = function(r, e, t) {
        return Lt(r, e, t)
    };
    Object.setPrototypeOf(u.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(u, Uint8Array);

    function Zt(r) {
        if (typeof r != "number") throw new TypeError('"size" argument must be of type number');
        if (r < 0) throw new RangeError('The value "' + r + '" is invalid for option "size"')
    }

    function Tr(r, e, t) {
        return Zt(r), r <= 0 ? _e(r) : e !== void 0 ? typeof t == "string" ? _e(r).fill(e, t) : _e(r).fill(e) : _e(r)
    }
    u.alloc = function(r, e, t) {
        return Tr(r, e, t)
    };

    function ct(r) {
        return Zt(r), _e(r < 0 ? 0 : ut(r) | 0)
    }
    u.allocUnsafe = function(r) {
        return ct(r)
    };
    u.allocUnsafeSlow = function(r) {
        return ct(r)
    };

    function mr(r, e) {
        if ((typeof e != "string" || e === "") && (e = "utf8"), !u.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
        var t = Ot(r, e) | 0,
            n = _e(t),
            i = n.write(r, e);
        return i !== t && (n = n.slice(0, i)), n
    }

    function ot(r) {
        for (var e = r.length < 0 ? 0 : ut(r.length) | 0, t = _e(e), n = 0; n < e; n += 1) t[n] = r[n] & 255;
        return t
    }

    function gr(r) {
        if (he(r, Uint8Array)) {
            var e = new Uint8Array(r);
            return st(e.buffer, e.byteOffset, e.byteLength)
        }
        return ot(r)
    }

    function st(r, e, t) {
        if (e < 0 || r.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
        if (r.byteLength < e + (t || 0)) throw new RangeError('"length" is outside of buffer bounds');
        var n;
        return e === void 0 && t === void 0 ? n = new Uint8Array(r) : t === void 0 ? n = new Uint8Array(r, e) : n = new Uint8Array(r, e, t), Object.setPrototypeOf(n, u.prototype), n
    }

    function wr(r) {
        if (u.isBuffer(r)) {
            var e = ut(r.length) | 0,
                t = _e(e);
            return t.length === 0 || r.copy(t, 0, 0, e), t
        }
        if (r.length !== void 0) return typeof r.length != "number" || lt(r.length) ? _e(0) : ot(r);
        if (r.type === "Buffer" && Array.isArray(r.data)) return ot(r.data)
    }

    function ut(r) {
        if (r >= Oe) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Oe.toString(16) + " bytes");
        return r | 0
    }

    function kr(r) {
        return +r != r && (r = 0), u.alloc(+r)
    }
    u.isBuffer = function(e) {
        return e != null && e._isBuffer === !0 && e !== u.prototype
    };
    u.compare = function(e, t) {
        if (he(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), he(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), !u.isBuffer(e) || !u.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e === t) return 0;
        for (var n = e.length, i = t.length, o = 0, a = Math.min(n, i); o < a; ++o)
            if (e[o] !== t[o]) {
                n = e[o], i = t[o];
                break
            }
        return n < i ? -1 : i < n ? 1 : 0
    };
    u.isEncoding = function(e) {
        switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return !0;
            default:
                return !1
        }
    };
    u.concat = function(e, t) {
        if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (e.length === 0) return u.alloc(0);
        var n;
        if (t === void 0)
            for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
        var i = u.allocUnsafe(t),
            o = 0;
        for (n = 0; n < e.length; ++n) {
            var a = e[n];
            if (he(a, Uint8Array)) o + a.length > i.length ? u.from(a).copy(i, o) : Uint8Array.prototype.set.call(i, a, o);
            else if (u.isBuffer(a)) a.copy(i, o);
            else throw new TypeError('"list" argument must be an Array of Buffers');
            o += a.length
        }
        return i
    };

    function Ot(r, e) {
        if (u.isBuffer(r)) return r.length;
        if (ArrayBuffer.isView(r) || he(r, ArrayBuffer)) return r.byteLength;
        if (typeof r != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof r);
        var t = r.length,
            n = arguments.length > 2 && arguments[2] === !0;
        if (!n && t === 0) return 0;
        for (var i = !1;;) switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
                return t;
            case "utf8":
            case "utf-8":
                return at(r).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return t * 2;
            case "hex":
                return t >>> 1;
            case "base64":
                return Wt(r).length;
            default:
                if (i) return n ? -1 : at(r).length;
                e = ("" + e).toLowerCase(), i = !0
        }
    }
    u.byteLength = Ot;

    function vr(r, e, t) {
        var n = !1;
        if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, e >>>= 0, t <= e)) return "";
        for (r || (r = "utf8");;) switch (r) {
            case "hex":
                return Pr(this, e, t);
            case "utf8":
            case "utf-8":
                return jt(this, e, t);
            case "ascii":
                return Fr(this, e, t);
            case "latin1":
            case "binary":
                return Dr(this, e, t);
            case "base64":
                return Ar(this, e, t);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Br(this, e, t);
            default:
                if (n) throw new TypeError("Unknown encoding: " + r);
                r = (r + "").toLowerCase(), n = !0
        }
    }
    u.prototype._isBuffer = !0;

    function we(r, e, t) {
        var n = r[e];
        r[e] = r[t], r[t] = n
    }
    u.prototype.swap16 = function() {
        var e = this.length;
        if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var t = 0; t < e; t += 2) we(this, t, t + 1);
        return this
    };
    u.prototype.swap32 = function() {
        var e = this.length;
        if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var t = 0; t < e; t += 4) we(this, t, t + 3), we(this, t + 1, t + 2);
        return this
    };
    u.prototype.swap64 = function() {
        var e = this.length;
        if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var t = 0; t < e; t += 8) we(this, t, t + 7), we(this, t + 1, t + 6), we(this, t + 2, t + 5), we(this, t + 3, t + 4);
        return this
    };
    u.prototype.toString = function() {
        var e = this.length;
        return e === 0 ? "" : arguments.length === 0 ? jt(this, 0, e) : vr.apply(this, arguments)
    };
    u.prototype.toLocaleString = u.prototype.toString;
    u.prototype.equals = function(e) {
        if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
        return this === e ? !0 : u.compare(this, e) === 0
    };
    u.prototype.inspect = function() {
        var e = "",
            t = Re.INSPECT_MAX_BYTES;
        return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">"
    };
    Bt && (u.prototype[Bt] = u.prototype.inspect);
    u.prototype.compare = function(e, t, n, i, o) {
        if (he(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), !u.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
        if (t === void 0 && (t = 0), n === void 0 && (n = e ? e.length : 0), i === void 0 && (i = 0), o === void 0 && (o = this.length), t < 0 || n > e.length || i < 0 || o > this.length) throw new RangeError("out of range index");
        if (i >= o && t >= n) return 0;
        if (i >= o) return -1;
        if (t >= n) return 1;
        if (t >>>= 0, n >>>= 0, i >>>= 0, o >>>= 0, this === e) return 0;
        for (var a = o - i, f = n - t, h = Math.min(a, f), E = this.slice(i, o), d = e.slice(t, n), T = 0; T < h; ++T)
            if (E[T] !== d[T]) {
                a = E[T], f = d[T];
                break
            }
        return a < f ? -1 : f < a ? 1 : 0
    };

    function Ut(r, e, t, n, i) {
        if (r.length === 0) return -1;
        if (typeof t == "string" ? (n = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, lt(t) && (t = i ? 0 : r.length - 1), t < 0 && (t = r.length + t), t >= r.length) {
            if (i) return -1;
            t = r.length - 1
        } else if (t < 0)
            if (i) t = 0;
            else return -1;
        if (typeof e == "string" && (e = u.from(e, n)), u.isBuffer(e)) return e.length === 0 ? -1 : Nt(r, e, t, n, i);
        if (typeof e == "number") return e = e & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(r, e, t) : Uint8Array.prototype.lastIndexOf.call(r, e, t) : Nt(r, [e], t, n, i);
        throw new TypeError("val must be string, number or Buffer")
    }

    function Nt(r, e, t, n, i) {
        var o = 1,
            a = r.length,
            f = e.length;
        if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
            if (r.length < 2 || e.length < 2) return -1;
            o = 2, a /= 2, f /= 2, t /= 2
        }

        function h(R, Z) {
            return o === 1 ? R[Z] : R.readUInt16BE(Z * o)
        }
        var E;
        if (i) {
            var d = -1;
            for (E = t; E < a; E++)
                if (h(r, E) === h(e, d === -1 ? 0 : E - d)) {
                    if (d === -1 && (d = E), E - d + 1 === f) return d * o
                } else d !== -1 && (E -= E - d), d = -1
        } else
            for (t + f > a && (t = a - f), E = t; E >= 0; E--) {
                for (var T = !0, C = 0; C < f; C++)
                    if (h(r, E + C) !== h(e, C)) {
                        T = !1;
                        break
                    }
                if (T) return E
            }
        return -1
    }
    u.prototype.includes = function(e, t, n) {
        return this.indexOf(e, t, n) !== -1
    };
    u.prototype.indexOf = function(e, t, n) {
        return Ut(this, e, t, n, !0)
    };
    u.prototype.lastIndexOf = function(e, t, n) {
        return Ut(this, e, t, n, !1)
    };

    function xr(r, e, t, n) {
        t = Number(t) || 0;
        var i = r.length - t;
        n ? (n = Number(n), n > i && (n = i)) : n = i;
        var o = e.length;
        n > o / 2 && (n = o / 2);
        for (var a = 0; a < n; ++a) {
            var f = parseInt(e.substr(a * 2, 2), 16);
            if (lt(f)) return a;
            r[t + a] = f
        }
        return a
    }

    function br(r, e, t, n) {
        return Ue(at(e, r.length - t), r, t, n)
    }

    function Cr(r, e, t, n) {
        return Ue(Lr(e), r, t, n)
    }

    function Rr(r, e, t, n) {
        return Ue(Wt(e), r, t, n)
    }

    function Ir(r, e, t, n) {
        return Ue(Zr(e, r.length - t), r, t, n)
    }
    u.prototype.write = function(e, t, n, i) {
        if (t === void 0) i = "utf8", n = this.length, t = 0;
        else if (n === void 0 && typeof t == "string") i = t, n = this.length, t = 0;
        else if (isFinite(t)) t = t >>> 0, isFinite(n) ? (n = n >>> 0, i === void 0 && (i = "utf8")) : (i = n, n = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        var o = this.length - t;
        if ((n === void 0 || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        i || (i = "utf8");
        for (var a = !1;;) switch (i) {
            case "hex":
                return xr(this, e, t, n);
            case "utf8":
            case "utf-8":
                return br(this, e, t, n);
            case "ascii":
            case "latin1":
            case "binary":
                return Cr(this, e, t, n);
            case "base64":
                return Rr(this, e, t, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Ir(this, e, t, n);
            default:
                if (a) throw new TypeError("Unknown encoding: " + i);
                i = ("" + i).toLowerCase(), a = !0
        }
    };
    u.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    };

    function Ar(r, e, t) {
        return e === 0 && t === r.length ? it.fromByteArray(r) : it.fromByteArray(r.slice(e, t))
    }

    function jt(r, e, t) {
        t = Math.min(r.length, t);
        for (var n = [], i = e; i < t;) {
            var o = r[i],
                a = null,
                f = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
            if (i + f <= t) {
                var h, E, d, T;
                switch (f) {
                    case 1:
                        o < 128 && (a = o);
                        break;
                    case 2:
                        h = r[i + 1], (h & 192) === 128 && (T = (o & 31) << 6 | h & 63, T > 127 && (a = T));
                        break;
                    case 3:
                        h = r[i + 1], E = r[i + 2], (h & 192) === 128 && (E & 192) === 128 && (T = (o & 15) << 12 | (h & 63) << 6 | E & 63, T > 2047 && (T < 55296 || T > 57343) && (a = T));
                        break;
                    case 4:
                        h = r[i + 1], E = r[i + 2], d = r[i + 3], (h & 192) === 128 && (E & 192) === 128 && (d & 192) === 128 && (T = (o & 15) << 18 | (h & 63) << 12 | (E & 63) << 6 | d & 63, T > 65535 && T < 1114112 && (a = T))
                }
            }
            a === null ? (a = 65533, f = 1) : a > 65535 && (a -= 65536, n.push(a >>> 10 & 1023 | 55296), a = 56320 | a & 1023), n.push(a), i += f
        }
        return Sr(n)
    }
    var Mt = 4096;

    function Sr(r) {
        var e = r.length;
        if (e <= Mt) return String.fromCharCode.apply(String, r);
        for (var t = "", n = 0; n < e;) t += String.fromCharCode.apply(String, r.slice(n, n += Mt));
        return t
    }

    function Fr(r, e, t) {
        var n = "";
        t = Math.min(r.length, t);
        for (var i = e; i < t; ++i) n += String.fromCharCode(r[i] & 127);
        return n
    }

    function Dr(r, e, t) {
        var n = "";
        t = Math.min(r.length, t);
        for (var i = e; i < t; ++i) n += String.fromCharCode(r[i]);
        return n
    }

    function Pr(r, e, t) {
        var n = r.length;
        (!e || e < 0) && (e = 0), (!t || t < 0 || t > n) && (t = n);
        for (var i = "", o = e; o < t; ++o) i += Or[r[o]];
        return i
    }

    function Br(r, e, t) {
        for (var n = r.slice(e, t), i = "", o = 0; o < n.length - 1; o += 2) i += String.fromCharCode(n[o] + n[o + 1] * 256);
        return i
    }
    u.prototype.slice = function(e, t) {
        var n = this.length;
        e = ~~e, t = t === void 0 ? n : ~~t, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < e && (t = e);
        var i = this.subarray(e, t);
        return Object.setPrototypeOf(i, u.prototype), i
    };

    function K(r, e, t) {
        if (r % 1 !== 0 || r < 0) throw new RangeError("offset is not uint");
        if (r + e > t) throw new RangeError("Trying to access beyond buffer length")
    }
    u.prototype.readUintLE = u.prototype.readUIntLE = function(e, t, n) {
        e = e >>> 0, t = t >>> 0, n || K(e, t, this.length);
        for (var i = this[e], o = 1, a = 0; ++a < t && (o *= 256);) i += this[e + a] * o;
        return i
    };
    u.prototype.readUintBE = u.prototype.readUIntBE = function(e, t, n) {
        e = e >>> 0, t = t >>> 0, n || K(e, t, this.length);
        for (var i = this[e + --t], o = 1; t > 0 && (o *= 256);) i += this[e + --t] * o;
        return i
    };
    u.prototype.readUint8 = u.prototype.readUInt8 = function(e, t) {
        return e = e >>> 0, t || K(e, 1, this.length), this[e]
    };
    u.prototype.readUint16LE = u.prototype.readUInt16LE = function(e, t) {
        return e = e >>> 0, t || K(e, 2, this.length), this[e] | this[e + 1] << 8
    };
    u.prototype.readUint16BE = u.prototype.readUInt16BE = function(e, t) {
        return e = e >>> 0, t || K(e, 2, this.length), this[e] << 8 | this[e + 1]
    };
    u.prototype.readUint32LE = u.prototype.readUInt32LE = function(e, t) {
        return e = e >>> 0, t || K(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216
    };
    u.prototype.readUint32BE = u.prototype.readUInt32BE = function(e, t) {
        return e = e >>> 0, t || K(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
    };
    u.prototype.readIntLE = function(e, t, n) {
        e = e >>> 0, t = t >>> 0, n || K(e, t, this.length);
        for (var i = this[e], o = 1, a = 0; ++a < t && (o *= 256);) i += this[e + a] * o;
        return o *= 128, i >= o && (i -= Math.pow(2, 8 * t)), i
    };
    u.prototype.readIntBE = function(e, t, n) {
        e = e >>> 0, t = t >>> 0, n || K(e, t, this.length);
        for (var i = t, o = 1, a = this[e + --i]; i > 0 && (o *= 256);) a += this[e + --i] * o;
        return o *= 128, a >= o && (a -= Math.pow(2, 8 * t)), a
    };
    u.prototype.readInt8 = function(e, t) {
        return e = e >>> 0, t || K(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e]
    };
    u.prototype.readInt16LE = function(e, t) {
        e = e >>> 0, t || K(e, 2, this.length);
        var n = this[e] | this[e + 1] << 8;
        return n & 32768 ? n | 4294901760 : n
    };
    u.prototype.readInt16BE = function(e, t) {
        e = e >>> 0, t || K(e, 2, this.length);
        var n = this[e + 1] | this[e] << 8;
        return n & 32768 ? n | 4294901760 : n
    };
    u.prototype.readInt32LE = function(e, t) {
        return e = e >>> 0, t || K(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
    };
    u.prototype.readInt32BE = function(e, t) {
        return e = e >>> 0, t || K(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
    };
    u.prototype.readFloatLE = function(e, t) {
        return e = e >>> 0, t || K(e, 4, this.length), Ce.read(this, e, !0, 23, 4)
    };
    u.prototype.readFloatBE = function(e, t) {
        return e = e >>> 0, t || K(e, 4, this.length), Ce.read(this, e, !1, 23, 4)
    };
    u.prototype.readDoubleLE = function(e, t) {
        return e = e >>> 0, t || K(e, 8, this.length), Ce.read(this, e, !0, 52, 8)
    };
    u.prototype.readDoubleBE = function(e, t) {
        return e = e >>> 0, t || K(e, 8, this.length), Ce.read(this, e, !1, 52, 8)
    };

    function ie(r, e, t, n, i, o) {
        if (!u.isBuffer(r)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
        if (t + n > r.length) throw new RangeError("Index out of range")
    }
    u.prototype.writeUintLE = u.prototype.writeUIntLE = function(e, t, n, i) {
        if (e = +e, t = t >>> 0, n = n >>> 0, !i) {
            var o = Math.pow(2, 8 * n) - 1;
            ie(this, e, t, n, o, 0)
        }
        var a = 1,
            f = 0;
        for (this[t] = e & 255; ++f < n && (a *= 256);) this[t + f] = e / a & 255;
        return t + n
    };
    u.prototype.writeUintBE = u.prototype.writeUIntBE = function(e, t, n, i) {
        if (e = +e, t = t >>> 0, n = n >>> 0, !i) {
            var o = Math.pow(2, 8 * n) - 1;
            ie(this, e, t, n, o, 0)
        }
        var a = n - 1,
            f = 1;
        for (this[t + a] = e & 255; --a >= 0 && (f *= 256);) this[t + a] = e / f & 255;
        return t + n
    };
    u.prototype.writeUint8 = u.prototype.writeUInt8 = function(e, t, n) {
        return e = +e, t = t >>> 0, n || ie(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1
    };
    u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(e, t, n) {
        return e = +e, t = t >>> 0, n || ie(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2
    };
    u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(e, t, n) {
        return e = +e, t = t >>> 0, n || ie(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2
    };
    u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(e, t, n) {
        return e = +e, t = t >>> 0, n || ie(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4
    };
    u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(e, t, n) {
        return e = +e, t = t >>> 0, n || ie(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4
    };
    u.prototype.writeIntLE = function(e, t, n, i) {
        if (e = +e, t = t >>> 0, !i) {
            var o = Math.pow(2, 8 * n - 1);
            ie(this, e, t, n, o - 1, -o)
        }
        var a = 0,
            f = 1,
            h = 0;
        for (this[t] = e & 255; ++a < n && (f *= 256);) e < 0 && h === 0 && this[t + a - 1] !== 0 && (h = 1), this[t + a] = (e / f >> 0) - h & 255;
        return t + n
    };
    u.prototype.writeIntBE = function(e, t, n, i) {
        if (e = +e, t = t >>> 0, !i) {
            var o = Math.pow(2, 8 * n - 1);
            ie(this, e, t, n, o - 1, -o)
        }
        var a = n - 1,
            f = 1,
            h = 0;
        for (this[t + a] = e & 255; --a >= 0 && (f *= 256);) e < 0 && h === 0 && this[t + a + 1] !== 0 && (h = 1), this[t + a] = (e / f >> 0) - h & 255;
        return t + n
    };
    u.prototype.writeInt8 = function(e, t, n) {
        return e = +e, t = t >>> 0, n || ie(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1
    };
    u.prototype.writeInt16LE = function(e, t, n) {
        return e = +e, t = t >>> 0, n || ie(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2
    };
    u.prototype.writeInt16BE = function(e, t, n) {
        return e = +e, t = t >>> 0, n || ie(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2
    };
    u.prototype.writeInt32LE = function(e, t, n) {
        return e = +e, t = t >>> 0, n || ie(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
    };
    u.prototype.writeInt32BE = function(e, t, n) {
        return e = +e, t = t >>> 0, n || ie(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4
    };

    function Ht(r, e, t, n, i, o) {
        if (t + n > r.length) throw new RangeError("Index out of range");
        if (t < 0) throw new RangeError("Index out of range")
    }

    function Gt(r, e, t, n, i) {
        return e = +e, t = t >>> 0, i || Ht(r, e, t, 4, 34028234663852886e22, -34028234663852886e22), Ce.write(r, e, t, n, 23, 4), t + 4
    }
    u.prototype.writeFloatLE = function(e, t, n) {
        return Gt(this, e, t, !0, n)
    };
    u.prototype.writeFloatBE = function(e, t, n) {
        return Gt(this, e, t, !1, n)
    };

    function Vt(r, e, t, n, i) {
        return e = +e, t = t >>> 0, i || Ht(r, e, t, 8, 17976931348623157e292, -17976931348623157e292), Ce.write(r, e, t, n, 52, 8), t + 8
    }
    u.prototype.writeDoubleLE = function(e, t, n) {
        return Vt(this, e, t, !0, n)
    };
    u.prototype.writeDoubleBE = function(e, t, n) {
        return Vt(this, e, t, !1, n)
    };
    u.prototype.copy = function(e, t, n, i) {
        if (!u.isBuffer(e)) throw new TypeError("argument should be a Buffer");
        if (n || (n = 0), !i && i !== 0 && (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n || e.length === 0 || this.length === 0) return 0;
        if (t < 0) throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
        if (i < 0) throw new RangeError("sourceEnd out of bounds");
        i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
        var o = i - n;
        return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, n, i) : Uint8Array.prototype.set.call(e, this.subarray(n, i), t), o
    };
    u.prototype.fill = function(e, t, n, i) {
        if (typeof e == "string") {
            if (typeof t == "string" ? (i = t, t = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), i !== void 0 && typeof i != "string") throw new TypeError("encoding must be a string");
            if (typeof i == "string" && !u.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
            if (e.length === 1) {
                var o = e.charCodeAt(0);
                (i === "utf8" && o < 128 || i === "latin1") && (e = o)
            }
        } else typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
        if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
        if (n <= t) return this;
        t = t >>> 0, n = n === void 0 ? this.length : n >>> 0, e || (e = 0);
        var a;
        if (typeof e == "number")
            for (a = t; a < n; ++a) this[a] = e;
        else {
            var f = u.isBuffer(e) ? e : u.from(e, i),
                h = f.length;
            if (h === 0) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
            for (a = 0; a < n - t; ++a) this[a + t] = f[a % h]
        }
        return this
    };
    var Nr = /[^+/0-9A-Za-z-_]/g;

    function Mr(r) {
        if (r = r.split("=")[0], r = r.trim().replace(Nr, ""), r.length < 2) return "";
        for (; r.length % 4 !== 0;) r = r + "=";
        return r
    }

    function at(r, e) {
        e = e || 1 / 0;
        for (var t, n = r.length, i = null, o = [], a = 0; a < n; ++a) {
            if (t = r.charCodeAt(a), t > 55295 && t < 57344) {
                if (!i) {
                    if (t > 56319) {
                        (e -= 3) > -1 && o.push(239, 191, 189);
                        continue
                    } else if (a + 1 === n) {
                        (e -= 3) > -1 && o.push(239, 191, 189);
                        continue
                    }
                    i = t;
                    continue
                }
                if (t < 56320) {
                    (e -= 3) > -1 && o.push(239, 191, 189), i = t;
                    continue
                }
                t = (i - 55296 << 10 | t - 56320) + 65536
            } else i && (e -= 3) > -1 && o.push(239, 191, 189);
            if (i = null, t < 128) {
                if ((e -= 1) < 0) break;
                o.push(t)
            } else if (t < 2048) {
                if ((e -= 2) < 0) break;
                o.push(t >> 6 | 192, t & 63 | 128)
            } else if (t < 65536) {
                if ((e -= 3) < 0) break;
                o.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128)
            } else if (t < 1114112) {
                if ((e -= 4) < 0) break;
                o.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128)
            } else throw new Error("Invalid code point")
        }
        return o
    }

    function Lr(r) {
        for (var e = [], t = 0; t < r.length; ++t) e.push(r.charCodeAt(t) & 255);
        return e
    }

    function Zr(r, e) {
        for (var t, n, i, o = [], a = 0; a < r.length && !((e -= 2) < 0); ++a) t = r.charCodeAt(a), n = t >> 8, i = t % 256, o.push(i), o.push(n);
        return o
    }

    function Wt(r) {
        return it.toByteArray(Mr(r))
    }

    function Ue(r, e, t, n) {
        for (var i = 0; i < n && !(i + t >= e.length || i >= r.length); ++i) e[i + t] = r[i];
        return i
    }

    function he(r, e) {
        return r instanceof e || r != null && r.constructor != null && r.constructor.name != null && r.constructor.name === e.name
    }

    function lt(r) {
        return r !== r
    }
    var Or = function() {
        for (var r = "0123456789abcdef", e = new Array(256), t = 0; t < 16; ++t)
            for (var n = t * 16, i = 0; i < 16; ++i) e[n + i] = r[t] + r[i];
        return e
    }()
});
(function(r) {
    let e = r.performance;

    function t(L) {
        e && e.mark && e.mark(L)
    }

    function n(L, g) {
        e && e.measure && e.measure(L, g)
    }
    t("Zone");
    let i = r.__Zone_symbol_prefix || "__zone_symbol__";

    function o(L) {
        return i + L
    }
    let a = r[o("forceDuplicateZoneCheck")] === !0;
    if (r.Zone) {
        if (a || typeof r.Zone.__symbol__ != "function") throw new Error("Zone already loaded.");
        return r.Zone
    }
    let f = (() => {
            let g = class g {
                static assertZonePatched() {
                    if (r.Promise !== ue.ZoneAwarePromise) throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")
                }
                static get root() {
                    let s = g.current;
                    for (; s.parent;) s = s.parent;
                    return s
                }
                static get current() {
                    return q.zone
                }
                static get currentTask() {
                    return ae
                }
                static __load_patch(s, w, A = !1) {
                    if (ue.hasOwnProperty(s)) {
                        if (!A && a) throw Error("Already loaded patch: " + s)
                    } else if (!r["__Zone_disable_" + s]) {
                        let M = "Zone:" + s;
                        t(M), ue[s] = w(r, g, $), n(M, M)
                    }
                }
                get parent() {
                    return this._parent
                }
                get name() {
                    return this._name
                }
                constructor(s, w) {
                    this._parent = s, this._name = w ? w.name || "unnamed" : "<root>", this._properties = w && w.properties || {}, this._zoneDelegate = new E(this, this._parent && this._parent._zoneDelegate, w)
                }
                get(s) {
                    let w = this.getZoneWith(s);
                    if (w) return w._properties[s]
                }
                getZoneWith(s) {
                    let w = this;
                    for (; w;) {
                        if (w._properties.hasOwnProperty(s)) return w;
                        w = w._parent
                    }
                    return null
                }
                fork(s) {
                    if (!s) throw new Error("ZoneSpec required!");
                    return this._zoneDelegate.fork(this, s)
                }
                wrap(s, w) {
                    if (typeof s != "function") throw new Error("Expecting function got: " + s);
                    let A = this._zoneDelegate.intercept(this, s, w),
                        M = this;
                    return function() {
                        return M.runGuarded(A, this, arguments, w)
                    }
                }
                run(s, w, A, M) {
                    q = {
                        parent: q,
                        zone: this
                    };
                    try {
                        return this._zoneDelegate.invoke(this, s, w, A, M)
                    } finally {
                        q = q.parent
                    }
                }
                runGuarded(s, w = null, A, M) {
                    q = {
                        parent: q,
                        zone: this
                    };
                    try {
                        try {
                            return this._zoneDelegate.invoke(this, s, w, A, M)
                        } catch (p) {
                            if (this._zoneDelegate.handleError(this, p)) throw p
                        }
                    } finally {
                        q = q.parent
                    }
                }
                runTask(s, w, A) {
                    if (s.zone != this) throw new Error("A task can only be run in the zone of creation! (Creation: " + (s.zone || Q).name + "; Execution: " + this.name + ")");
                    if (s.state === H && (s.type === te || s.type === I)) return;
                    let M = s.state != v;
                    M && s._transitionTo(v, U), s.runCount++;
                    let p = ae;
                    ae = s, q = {
                        parent: q,
                        zone: this
                    };
                    try {
                        s.type == I && s.data && !s.data.isPeriodic && (s.cancelFn = void 0);
                        try {
                            return this._zoneDelegate.invokeTask(this, s, w, A)
                        } catch (y) {
                            if (this._zoneDelegate.handleError(this, y)) throw y
                        }
                    } finally {
                        s.state !== H && s.state !== m && (s.type == te || s.data && s.data.isPeriodic ? M && s._transitionTo(U, v) : (s.runCount = 0, this._updateTaskCount(s, -1), M && s._transitionTo(H, v, H))), q = q.parent, ae = p
                    }
                }
                scheduleTask(s) {
                    if (s.zone && s.zone !== this) {
                        let A = this;
                        for (; A;) {
                            if (A === s.zone) throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${s.zone.name}`);
                            A = A.parent
                        }
                    }
                    s._transitionTo(z, H);
                    let w = [];
                    s._zoneDelegates = w, s._zone = this;
                    try {
                        s = this._zoneDelegate.scheduleTask(this, s)
                    } catch (A) {
                        throw s._transitionTo(m, z, H), this._zoneDelegate.handleError(this, A), A
                    }
                    return s._zoneDelegates === w && this._updateTaskCount(s, 1), s.state == z && s._transitionTo(U, z), s
                }
                scheduleMicroTask(s, w, A, M) {
                    return this.scheduleTask(new d(N, s, w, A, M, void 0))
                }
                scheduleMacroTask(s, w, A, M, p) {
                    return this.scheduleTask(new d(I, s, w, A, M, p))
                }
                scheduleEventTask(s, w, A, M, p) {
                    return this.scheduleTask(new d(te, s, w, A, M, p))
                }
                cancelTask(s) {
                    if (s.zone != this) throw new Error("A task can only be cancelled in the zone of creation! (Creation: " + (s.zone || Q).name + "; Execution: " + this.name + ")");
                    if (!(s.state !== U && s.state !== v)) {
                        s._transitionTo(G, U, v);
                        try {
                            this._zoneDelegate.cancelTask(this, s)
                        } catch (w) {
                            throw s._transitionTo(m, G), this._zoneDelegate.handleError(this, w), w
                        }
                        return this._updateTaskCount(s, -1), s._transitionTo(H, G), s.runCount = 0, s
                    }
                }
                _updateTaskCount(s, w) {
                    let A = s._zoneDelegates;
                    w == -1 && (s._zoneDelegates = null);
                    for (let M = 0; M < A.length; M++) A[M]._updateTaskCount(s.type, w)
                }
            };
            g.__symbol__ = o;
            let L = g;
            return L
        })(),
        h = {
            name: "",
            onHasTask: (L, g, l, s) => L.hasTask(l, s),
            onScheduleTask: (L, g, l, s) => L.scheduleTask(l, s),
            onInvokeTask: (L, g, l, s, w, A) => L.invokeTask(l, s, w, A),
            onCancelTask: (L, g, l, s) => L.cancelTask(l, s)
        };
    class E {
        constructor(g, l, s) {
            this._taskCounts = {
                microTask: 0,
                macroTask: 0,
                eventTask: 0
            }, this.zone = g, this._parentDelegate = l, this._forkZS = s && (s && s.onFork ? s : l._forkZS), this._forkDlgt = s && (s.onFork ? l : l._forkDlgt), this._forkCurrZone = s && (s.onFork ? this.zone : l._forkCurrZone), this._interceptZS = s && (s.onIntercept ? s : l._interceptZS), this._interceptDlgt = s && (s.onIntercept ? l : l._interceptDlgt), this._interceptCurrZone = s && (s.onIntercept ? this.zone : l._interceptCurrZone), this._invokeZS = s && (s.onInvoke ? s : l._invokeZS), this._invokeDlgt = s && (s.onInvoke ? l : l._invokeDlgt), this._invokeCurrZone = s && (s.onInvoke ? this.zone : l._invokeCurrZone), this._handleErrorZS = s && (s.onHandleError ? s : l._handleErrorZS), this._handleErrorDlgt = s && (s.onHandleError ? l : l._handleErrorDlgt), this._handleErrorCurrZone = s && (s.onHandleError ? this.zone : l._handleErrorCurrZone), this._scheduleTaskZS = s && (s.onScheduleTask ? s : l._scheduleTaskZS), this._scheduleTaskDlgt = s && (s.onScheduleTask ? l : l._scheduleTaskDlgt), this._scheduleTaskCurrZone = s && (s.onScheduleTask ? this.zone : l._scheduleTaskCurrZone), this._invokeTaskZS = s && (s.onInvokeTask ? s : l._invokeTaskZS), this._invokeTaskDlgt = s && (s.onInvokeTask ? l : l._invokeTaskDlgt), this._invokeTaskCurrZone = s && (s.onInvokeTask ? this.zone : l._invokeTaskCurrZone), this._cancelTaskZS = s && (s.onCancelTask ? s : l._cancelTaskZS), this._cancelTaskDlgt = s && (s.onCancelTask ? l : l._cancelTaskDlgt), this._cancelTaskCurrZone = s && (s.onCancelTask ? this.zone : l._cancelTaskCurrZone), this._hasTaskZS = null, this._hasTaskDlgt = null, this._hasTaskDlgtOwner = null, this._hasTaskCurrZone = null;
            let w = s && s.onHasTask,
                A = l && l._hasTaskZS;
            (w || A) && (this._hasTaskZS = w ? s : h, this._hasTaskDlgt = l, this._hasTaskDlgtOwner = this, this._hasTaskCurrZone = g, s.onScheduleTask || (this._scheduleTaskZS = h, this._scheduleTaskDlgt = l, this._scheduleTaskCurrZone = this.zone), s.onInvokeTask || (this._invokeTaskZS = h, this._invokeTaskDlgt = l, this._invokeTaskCurrZone = this.zone), s.onCancelTask || (this._cancelTaskZS = h, this._cancelTaskDlgt = l, this._cancelTaskCurrZone = this.zone))
        }
        fork(g, l) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, g, l) : new f(g, l)
        }
        intercept(g, l, s) {
            return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, g, l, s) : l
        }
        invoke(g, l, s, w, A) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, g, l, s, w, A) : l.apply(s, w)
        }
        handleError(g, l) {
            return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, g, l) : !0
        }
        scheduleTask(g, l) {
            let s = l;
            if (this._scheduleTaskZS) this._hasTaskZS && s._zoneDelegates.push(this._hasTaskDlgtOwner), s = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, g, l), s || (s = l);
            else if (l.scheduleFn) l.scheduleFn(l);
            else if (l.type == N) F(l);
            else throw new Error("Task is missing scheduleFn.");
            return s
        }
        invokeTask(g, l, s, w) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, g, l, s, w) : l.callback.apply(s, w)
        }
        cancelTask(g, l) {
            let s;
            if (this._cancelTaskZS) s = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, g, l);
            else {
                if (!l.cancelFn) throw Error("Task is not cancelable");
                s = l.cancelFn(l)
            }
            return s
        }
        hasTask(g, l) {
            try {
                this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, g, l)
            } catch (s) {
                this.handleError(g, s)
            }
        }
        _updateTaskCount(g, l) {
            let s = this._taskCounts,
                w = s[g],
                A = s[g] = w + l;
            if (A < 0) throw new Error("More tasks executed then were scheduled.");
            if (w == 0 || A == 0) {
                let M = {
                    microTask: s.microTask > 0,
                    macroTask: s.macroTask > 0,
                    eventTask: s.eventTask > 0,
                    change: g
                };
                this.hasTask(this.zone, M)
            }
        }
    }
    class d {
        constructor(g, l, s, w, A, M) {
            if (this._zone = null, this.runCount = 0, this._zoneDelegates = null, this._state = "notScheduled", this.type = g, this.source = l, this.data = w, this.scheduleFn = A, this.cancelFn = M, !s) throw new Error("callback is not defined");
            this.callback = s;
            let p = this;
            g === te && w && w.useG ? this.invoke = d.invokeTask : this.invoke = function() {
                return d.invokeTask.call(r, p, this, arguments)
            }
        }
        static invokeTask(g, l, s) {
            g || (g = this), ne++;
            try {
                return g.runCount++, g.zone.runTask(g, l, s)
            } finally {
                ne == 1 && k(), ne--
            }
        }
        get zone() {
            return this._zone
        }
        get state() {
            return this._state
        }
        cancelScheduleRequest() {
            this._transitionTo(H, z)
        }
        _transitionTo(g, l, s) {
            if (this._state === l || this._state === s) this._state = g, g == H && (this._zoneDelegates = null);
            else throw new Error(`${this.type} '${this.source}': can not transition to '${g}', expecting state '${l}'${s?" or '"+s+"'":""}, was '${this._state}'.`)
        }
        toString() {
            return this.data && typeof this.data.handleId < "u" ? this.data.handleId.toString() : Object.prototype.toString.call(this)
        }
        toJSON() {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            }
        }
    }
    let T = o("setTimeout"),
        C = o("Promise"),
        R = o("then"),
        Z = [],
        O = !1,
        ee;

    function Y(L) {
        if (ee || r[C] && (ee = r[C].resolve(0)), ee) {
            let g = ee[R];
            g || (g = ee.then), g.call(ee, L)
        } else r[T](L, 0)
    }

    function F(L) {
        ne === 0 && Z.length === 0 && Y(k), L && Z.push(L)
    }

    function k() {
        if (!O) {
            for (O = !0; Z.length;) {
                let L = Z;
                Z = [];
                for (let g = 0; g < L.length; g++) {
                    let l = L[g];
                    try {
                        l.zone.runTask(l, null, null)
                    } catch (s) {
                        $.onUnhandledError(s)
                    }
                }
            }
            $.microtaskDrainDone(), O = !1
        }
    }
    let Q = {
            name: "NO ZONE"
        },
        H = "notScheduled",
        z = "scheduling",
        U = "scheduled",
        v = "running",
        G = "canceling",
        m = "unknown",
        N = "microTask",
        I = "macroTask",
        te = "eventTask",
        ue = {},
        $ = {
            symbol: o,
            currentZoneFrame: () => q,
            onUnhandledError: X,
            microtaskDrainDone: X,
            scheduleMicroTask: F,
            showUncaughtError: () => !f[o("ignoreConsoleErrorUncaughtError")],
            patchEventTarget: () => [],
            patchOnProperties: X,
            patchMethod: () => X,
            bindArguments: () => [],
            patchThen: () => X,
            patchMacroTask: () => X,
            patchEventPrototype: () => X,
            isIEOrEdge: () => !1,
            getGlobalObjects: () => {},
            ObjectDefineProperty: () => X,
            ObjectGetOwnPropertyDescriptor: () => {},
            ObjectCreate: () => {},
            ArraySlice: () => [],
            patchClass: () => X,
            wrapWithCurrentZone: () => X,
            filterProperties: () => [],
            attachOriginToPatched: () => X,
            _redefineProperty: () => X,
            patchCallbacks: () => X,
            nativeScheduleMicroTask: Y
        },
        q = {
            parent: null,
            zone: new f(null, null)
        },
        ae = null,
        ne = 0;

    function X() {}
    return n("Zone", "Zone"), r.Zone = f
})(globalThis);
var Se = Object.getOwnPropertyDescriptor,
    Ye = Object.defineProperty,
    ze = Object.getPrototypeOf,
    Yt = Object.create,
    zt = Array.prototype.slice,
    $e = "addEventListener",
    Je = "removeEventListener",
    Ve = Zone.__symbol__($e),
    We = Zone.__symbol__(Je),
    pe = "true",
    de = "false",
    Fe = Zone.__symbol__("");

function Ke(r, e) {
    return Zone.current.wrap(r, e)
}

function Qe(r, e, t, n, i) {
    return Zone.current.scheduleMacroTask(r, e, t, n, i)
}
var j = Zone.__symbol__,
    Me = typeof window < "u",
    be = Me ? window : void 0,
    J = Me && be || globalThis,
    $t = "removeAttribute";

function et(r, e) {
    for (let t = r.length - 1; t >= 0; t--) typeof r[t] == "function" && (r[t] = Ke(r[t], e + "_" + t));
    return r
}

function Jt(r, e) {
    let t = r.constructor.name;
    for (let n = 0; n < e.length; n++) {
        let i = e[n],
            o = r[i];
        if (o) {
            let a = Se(r, i);
            if (!gt(a)) continue;
            r[i] = (f => {
                let h = function() {
                    return f.apply(this, et(arguments, t + "." + i))
                };
                return ye(h, f), h
            })(o)
        }
    }
}

function gt(r) {
    return r ? r.writable === !1 ? !1 : !(typeof r.get == "function" && typeof r.set > "u") : !0
}
var wt = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope,
    Le = !("nw" in J) && typeof J.process < "u" && {}.toString.call(J.process) === "[object process]",
    tt = !Le && !wt && !!(Me && be.HTMLElement),
    kt = typeof J.process < "u" && {}.toString.call(J.process) === "[object process]" && !wt && !!(Me && be.HTMLElement),
    Ne = {},
    Et = function(r) {
        if (r = r || J.event, !r) return;
        let e = Ne[r.type];
        e || (e = Ne[r.type] = j("ON_PROPERTY" + r.type));
        let t = this || r.target || J,
            n = t[e],
            i;
        if (tt && t === be && r.type === "error") {
            let o = r;
            i = n && n.call(this, o.message, o.filename, o.lineno, o.colno, o.error), i === !0 && r.preventDefault()
        } else i = n && n.apply(this, arguments), i != null && !i && r.preventDefault();
        return i
    };

function _t(r, e, t) {
    let n = Se(r, e);
    if (!n && t && Se(t, e) && (n = {
            enumerable: !0,
            configurable: !0
        }), !n || !n.configurable) return;
    let i = j("on" + e + "patched");
    if (r.hasOwnProperty(i) && r[i]) return;
    delete n.writable, delete n.value;
    let o = n.get,
        a = n.set,
        f = e.slice(2),
        h = Ne[f];
    h || (h = Ne[f] = j("ON_PROPERTY" + f)), n.set = function(E) {
        let d = this;
        if (!d && r === J && (d = J), !d) return;
        typeof d[h] == "function" && d.removeEventListener(f, Et), a && a.call(d, null), d[h] = E, typeof E == "function" && d.addEventListener(f, Et, !1)
    }, n.get = function() {
        let E = this;
        if (!E && r === J && (E = J), !E) return null;
        let d = E[h];
        if (d) return d;
        if (o) {
            let T = o.call(this);
            if (T) return n.set.call(this, T), typeof E[$t] == "function" && E.removeAttribute(e), T
        }
        return null
    }, Ye(r, e, n), r[i] = !0
}

function vt(r, e, t) {
    if (e)
        for (let n = 0; n < e.length; n++) _t(r, "on" + e[n], t);
    else {
        let n = [];
        for (let i in r) i.slice(0, 2) == "on" && n.push(i);
        for (let i = 0; i < n.length; i++) _t(r, n[i], t)
    }
}
var ce = j("originalInstance");

function De(r) {
    let e = J[r];
    if (!e) return;
    J[j(r)] = e, J[r] = function() {
        let i = et(arguments, r);
        switch (i.length) {
            case 0:
                this[ce] = new e;
                break;
            case 1:
                this[ce] = new e(i[0]);
                break;
            case 2:
                this[ce] = new e(i[0], i[1]);
                break;
            case 3:
                this[ce] = new e(i[0], i[1], i[2]);
                break;
            case 4:
                this[ce] = new e(i[0], i[1], i[2], i[3]);
                break;
            default:
                throw new Error("Arg list too long.")
        }
    }, ye(J[r], e);
    let t = new e(function() {}),
        n;
    for (n in t) r === "XMLHttpRequest" && n === "responseBlob" || function(i) {
        typeof t[i] == "function" ? J[r].prototype[i] = function() {
            return this[ce][i].apply(this[ce], arguments)
        } : Ye(J[r].prototype, i, {
            set: function(o) {
                typeof o == "function" ? (this[ce][i] = Ke(o, r + "." + i), ye(this[ce][i], o)) : this[ce][i] = o
            },
            get: function() {
                return this[ce][i]
            }
        })
    }(n);
    for (n in e) n !== "prototype" && e.hasOwnProperty(n) && (J[r][n] = e[n])
}

function Ee(r, e, t) {
    let n = r;
    for (; n && !n.hasOwnProperty(e);) n = ze(n);
    !n && r[e] && (n = r);
    let i = j(e),
        o = null;
    if (n && (!(o = n[i]) || !n.hasOwnProperty(i))) {
        o = n[i] = n[e];
        let a = n && Se(n, e);
        if (gt(a)) {
            let f = t(o, i, e);
            n[e] = function() {
                return f(this, arguments)
            }, ye(n[e], o)
        }
    }
    return o
}

function Kt(r, e, t) {
    let n = null;

    function i(o) {
        let a = o.data;
        return a.args[a.cbIdx] = function() {
            o.invoke.apply(this, arguments)
        }, n.apply(a.target, a.args), o
    }
    n = Ee(r, e, o => function(a, f) {
        let h = t(a, f);
        return h.cbIdx >= 0 && typeof f[h.cbIdx] == "function" ? Qe(h.name, f[h.cbIdx], h, i) : o.apply(a, f)
    })
}

function ye(r, e) {
    r[j("OriginalDelegate")] = e
}
var Tt = !1,
    qe = !1;

function Qt() {
    try {
        let r = be.navigator.userAgent;
        if (r.indexOf("MSIE ") !== -1 || r.indexOf("Trident/") !== -1) return !0
    } catch {}
    return !1
}

function er() {
    if (Tt) return qe;
    Tt = !0;
    try {
        let r = be.navigator.userAgent;
        (r.indexOf("MSIE ") !== -1 || r.indexOf("Trident/") !== -1 || r.indexOf("Edge/") !== -1) && (qe = !0)
    } catch {}
    return qe
}
Zone.__load_patch("ZoneAwarePromise", (r, e, t) => {
    let n = Object.getOwnPropertyDescriptor,
        i = Object.defineProperty;

    function o(p) {
        if (p && p.toString === Object.prototype.toString) {
            let y = p.constructor && p.constructor.name;
            return (y || "") + ": " + JSON.stringify(p)
        }
        return p ? p.toString() : Object.prototype.toString.call(p)
    }
    let a = t.symbol,
        f = [],
        h = r[a("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")] !== !1,
        E = a("Promise"),
        d = a("then"),
        T = "__creationTrace__";
    t.onUnhandledError = p => {
        if (t.showUncaughtError()) {
            let y = p && p.rejection;
            y ? console.error("Unhandled Promise rejection:", y instanceof Error ? y.message : y, "; Zone:", p.zone.name, "; Task:", p.task && p.task.source, "; Value:", y, y instanceof Error ? y.stack : void 0) : console.error(p)
        }
    }, t.microtaskDrainDone = () => {
        for (; f.length;) {
            let p = f.shift();
            try {
                p.zone.runGuarded(() => {
                    throw p.throwOriginal ? p.rejection : p
                })
            } catch (y) {
                R(y)
            }
        }
    };
    let C = a("unhandledPromiseRejectionHandler");

    function R(p) {
        t.onUnhandledError(p);
        try {
            let y = e[C];
            typeof y == "function" && y.call(this, p)
        } catch {}
    }

    function Z(p) {
        return p && p.then
    }

    function O(p) {
        return p
    }

    function ee(p) {
        return l.reject(p)
    }
    let Y = a("state"),
        F = a("value"),
        k = a("finally"),
        Q = a("parentPromiseValue"),
        H = a("parentPromiseState"),
        z = "Promise.then",
        U = null,
        v = !0,
        G = !1,
        m = 0;

    function N(p, y) {
        return c => {
            try {
                $(p, y, c)
            } catch (_) {
                $(p, !1, _)
            }
        }
    }
    let I = function() {
            let p = !1;
            return function(c) {
                return function() {
                    p || (p = !0, c.apply(null, arguments))
                }
            }
        },
        te = "Promise resolved with itself",
        ue = a("currentTaskTrace");

    function $(p, y, c) {
        let _ = I();
        if (p === c) throw new TypeError(te);
        if (p[Y] === U) {
            let b = null;
            try {
                (typeof c == "object" || typeof c == "function") && (b = c && c.then)
            } catch (S) {
                return _(() => {
                    $(p, !1, S)
                })(), p
            }
            if (y !== G && c instanceof l && c.hasOwnProperty(Y) && c.hasOwnProperty(F) && c[Y] !== U) ae(c), $(p, c[Y], c[F]);
            else if (y !== G && typeof b == "function") try {
                b.call(c, _(N(p, y)), _(N(p, !1)))
            } catch (S) {
                _(() => {
                    $(p, !1, S)
                })()
            } else {
                p[Y] = y;
                let S = p[F];
                if (p[F] = c, p[k] === k && y === v && (p[Y] = p[H], p[F] = p[Q]), y === G && c instanceof Error) {
                    let x = e.currentTask && e.currentTask.data && e.currentTask.data[T];
                    x && i(c, ue, {
                        configurable: !0,
                        enumerable: !1,
                        writable: !0,
                        value: x
                    })
                }
                for (let x = 0; x < S.length;) ne(p, S[x++], S[x++], S[x++], S[x++]);
                if (S.length == 0 && y == G) {
                    p[Y] = m;
                    let x = c;
                    try {
                        throw new Error("Uncaught (in promise): " + o(c) + (c && c.stack ? `
` + c.stack : ""))
                    } catch (D) {
                        x = D
                    }
                    h && (x.throwOriginal = !0), x.rejection = c, x.promise = p, x.zone = e.current, x.task = e.currentTask, f.push(x), t.scheduleMicroTask()
                }
            }
        }
        return p
    }
    let q = a("rejectionHandledHandler");

    function ae(p) {
        if (p[Y] === m) {
            try {
                let y = e[q];
                y && typeof y == "function" && y.call(this, {
                    rejection: p[F],
                    promise: p
                })
            } catch {}
            p[Y] = G;
            for (let y = 0; y < f.length; y++) p === f[y].promise && f.splice(y, 1)
        }
    }

    function ne(p, y, c, _, b) {
        ae(p);
        let S = p[Y],
            x = S ? typeof _ == "function" ? _ : O : typeof b == "function" ? b : ee;
        y.scheduleMicroTask(z, () => {
            try {
                let D = p[F],
                    P = !!c && k === c[k];
                P && (c[Q] = D, c[H] = S);
                let B = y.run(x, void 0, P && x !== ee && x !== O ? [] : [D]);
                $(c, !0, B)
            } catch (D) {
                $(c, !1, D)
            }
        }, c)
    }
    let X = "function ZoneAwarePromise() { [native code] }",
        L = function() {},
        g = r.AggregateError;
    class l {
        static toString() {
            return X
        }
        static resolve(y) {
            return y instanceof l ? y : $(new this(null), v, y)
        }
        static reject(y) {
            return $(new this(null), G, y)
        }
        static withResolvers() {
            let y = {};
            return y.promise = new l((c, _) => {
                y.resolve = c, y.reject = _
            }), y
        }
        static any(y) {
            if (!y || typeof y[Symbol.iterator] != "function") return Promise.reject(new g([], "All promises were rejected"));
            let c = [],
                _ = 0;
            try {
                for (let x of y) _++, c.push(l.resolve(x))
            } catch {
                return Promise.reject(new g([], "All promises were rejected"))
            }
            if (_ === 0) return Promise.reject(new g([], "All promises were rejected"));
            let b = !1,
                S = [];
            return new l((x, D) => {
                for (let P = 0; P < c.length; P++) c[P].then(B => {
                    b || (b = !0, x(B))
                }, B => {
                    S.push(B), _--, _ === 0 && (b = !0, D(new g(S, "All promises were rejected")))
                })
            })
        }
        static race(y) {
            let c, _, b = new this((D, P) => {
                c = D, _ = P
            });

            function S(D) {
                c(D)
            }

            function x(D) {
                _(D)
            }
            for (let D of y) Z(D) || (D = this.resolve(D)), D.then(S, x);
            return b
        }
        static all(y) {
            return l.allWithCallback(y)
        }
        static allSettled(y) {
            return (this && this.prototype instanceof l ? this : l).allWithCallback(y, {
                thenCallback: _ => ({
                    status: "fulfilled",
                    value: _
                }),
                errorCallback: _ => ({
                    status: "rejected",
                    reason: _
                })
            })
        }
        static allWithCallback(y, c) {
            let _, b, S = new this((B, V) => {
                    _ = B, b = V
                }),
                x = 2,
                D = 0,
                P = [];
            for (let B of y) {
                Z(B) || (B = this.resolve(B));
                let V = D;
                try {
                    B.then(W => {
                        P[V] = c ? c.thenCallback(W) : W, x--, x === 0 && _(P)
                    }, W => {
                        c ? (P[V] = c.errorCallback(W), x--, x === 0 && _(P)) : b(W)
                    })
                } catch (W) {
                    b(W)
                }
                x++, D++
            }
            return x -= 2, x === 0 && _(P), S
        }
        constructor(y) {
            let c = this;
            if (!(c instanceof l)) throw new Error("Must be an instanceof Promise.");
            c[Y] = U, c[F] = [];
            try {
                let _ = I();
                y && y(_(N(c, v)), _(N(c, G)))
            } catch (_) {
                $(c, !1, _)
            }
        }
        get[Symbol.toStringTag]() {
            return "Promise"
        }
        get[Symbol.species]() {
            return l
        }
        then(y, c) {
            let _ = this.constructor ? .[Symbol.species];
            (!_ || typeof _ != "function") && (_ = this.constructor || l);
            let b = new _(L),
                S = e.current;
            return this[Y] == U ? this[F].push(S, b, y, c) : ne(this, S, b, y, c), b
        } catch (y) {
            return this.then(null, y)
        } finally(y) {
            let c = this.constructor ? .[Symbol.species];
            (!c || typeof c != "function") && (c = l);
            let _ = new c(L);
            _[k] = k;
            let b = e.current;
            return this[Y] == U ? this[F].push(b, _, y, y) : ne(this, b, _, y, y), _
        }
    }
    l.resolve = l.resolve, l.reject = l.reject, l.race = l.race, l.all = l.all;
    let s = r[E] = r.Promise;
    r.Promise = l;
    let w = a("thenPatched");

    function A(p) {
        let y = p.prototype,
            c = n(y, "then");
        if (c && (c.writable === !1 || !c.configurable)) return;
        let _ = y.then;
        y[d] = _, p.prototype.then = function(b, S) {
            return new l((D, P) => {
                _.call(this, D, P)
            }).then(b, S)
        }, p[w] = !0
    }
    t.patchThen = A;

    function M(p) {
        return function(y, c) {
            let _ = p.apply(y, c);
            if (_ instanceof l) return _;
            let b = _.constructor;
            return b[w] || A(b), _
        }
    }
    return s && (A(s), Ee(r, "fetch", p => M(p))), Promise[e.__symbol__("uncaughtPromiseErrors")] = f, l
});
Zone.__load_patch("toString", r => {
    let e = Function.prototype.toString,
        t = j("OriginalDelegate"),
        n = j("Promise"),
        i = j("Error"),
        o = function() {
            if (typeof this == "function") {
                let E = this[t];
                if (E) return typeof E == "function" ? e.call(E) : Object.prototype.toString.call(E);
                if (this === Promise) {
                    let d = r[n];
                    if (d) return e.call(d)
                }
                if (this === Error) {
                    let d = r[i];
                    if (d) return e.call(d)
                }
            }
            return e.call(this)
        };
    o[t] = e, Function.prototype.toString = o;
    let a = Object.prototype.toString,
        f = "[object Promise]";
    Object.prototype.toString = function() {
        return typeof Promise == "function" && this instanceof Promise ? f : a.call(this)
    }
});
var ve = !1;
if (typeof window < "u") try {
    let r = Object.defineProperty({}, "passive", {
        get: function() {
            ve = !0
        }
    });
    window.addEventListener("test", r, r), window.removeEventListener("test", r, r)
} catch {
    ve = !1
}
var tr = {
        useG: !0
    },
    oe = {},
    xt = {},
    bt = new RegExp("^" + Fe + "(\\w+)(true|false)$"),
    Ct = j("propagationStopped");

function Rt(r, e) {
    let t = (e ? e(r) : r) + de,
        n = (e ? e(r) : r) + pe,
        i = Fe + t,
        o = Fe + n;
    oe[r] = {}, oe[r][de] = i, oe[r][pe] = o
}

function rr(r, e, t, n) {
    let i = n && n.add || $e,
        o = n && n.rm || Je,
        a = n && n.listeners || "eventListeners",
        f = n && n.rmAll || "removeAllListeners",
        h = j(i),
        E = "." + i + ":",
        d = "prependListener",
        T = "." + d + ":",
        C = function(F, k, Q) {
            if (F.isRemoved) return;
            let H = F.callback;
            typeof H == "object" && H.handleEvent && (F.callback = v => H.handleEvent(v), F.originalDelegate = H);
            let z;
            try {
                F.invoke(F, k, [Q])
            } catch (v) {
                z = v
            }
            let U = F.options;
            if (U && typeof U == "object" && U.once) {
                let v = F.originalDelegate ? F.originalDelegate : F.callback;
                k[o].call(k, Q.type, v, U)
            }
            return z
        };

    function R(F, k, Q) {
        if (k = k || r.event, !k) return;
        let H = F || k.target || r,
            z = H[oe[k.type][Q ? pe : de]];
        if (z) {
            let U = [];
            if (z.length === 1) {
                let v = C(z[0], H, k);
                v && U.push(v)
            } else {
                let v = z.slice();
                for (let G = 0; G < v.length && !(k && k[Ct] === !0); G++) {
                    let m = C(v[G], H, k);
                    m && U.push(m)
                }
            }
            if (U.length === 1) throw U[0];
            for (let v = 0; v < U.length; v++) {
                let G = U[v];
                e.nativeScheduleMicroTask(() => {
                    throw G
                })
            }
        }
    }
    let Z = function(F) {
            return R(this, F, !1)
        },
        O = function(F) {
            return R(this, F, !0)
        };

    function ee(F, k) {
        if (!F) return !1;
        let Q = !0;
        k && k.useG !== void 0 && (Q = k.useG);
        let H = k && k.vh,
            z = !0;
        k && k.chkDup !== void 0 && (z = k.chkDup);
        let U = !1;
        k && k.rt !== void 0 && (U = k.rt);
        let v = F;
        for (; v && !v.hasOwnProperty(i);) v = ze(v);
        if (!v && F[i] && (v = F), !v || v[h]) return !1;
        let G = k && k.eventNameToString,
            m = {},
            N = v[h] = v[i],
            I = v[j(o)] = v[o],
            te = v[j(a)] = v[a],
            ue = v[j(f)] = v[f],
            $;
        k && k.prepend && ($ = v[j(k.prepend)] = v[k.prepend]);

        function q(c, _) {
            return !ve && typeof c == "object" && c ? !!c.capture : !ve || !_ ? c : typeof c == "boolean" ? {
                capture: c,
                passive: !0
            } : c ? typeof c == "object" && c.passive !== !1 ? { ...c,
                passive: !0
            } : c : {
                passive: !0
            }
        }
        let ae = function(c) {
                if (!m.isExisting) return N.call(m.target, m.eventName, m.capture ? O : Z, m.options)
            },
            ne = function(c) {
                if (!c.isRemoved) {
                    let _ = oe[c.eventName],
                        b;
                    _ && (b = _[c.capture ? pe : de]);
                    let S = b && c.target[b];
                    if (S) {
                        for (let x = 0; x < S.length; x++)
                            if (S[x] === c) {
                                S.splice(x, 1), c.isRemoved = !0, S.length === 0 && (c.allRemoved = !0, c.target[b] = null);
                                break
                            }
                    }
                }
                if (c.allRemoved) return I.call(c.target, c.eventName, c.capture ? O : Z, c.options)
            },
            X = function(c) {
                return N.call(m.target, m.eventName, c.invoke, m.options)
            },
            L = function(c) {
                return $.call(m.target, m.eventName, c.invoke, m.options)
            },
            g = function(c) {
                return I.call(c.target, c.eventName, c.invoke, c.options)
            },
            l = Q ? ae : X,
            s = Q ? ne : g,
            w = function(c, _) {
                let b = typeof _;
                return b === "function" && c.callback === _ || b === "object" && c.originalDelegate === _
            },
            A = k && k.diff ? k.diff : w,
            M = Zone[j("UNPATCHED_EVENTS")],
            p = r[j("PASSIVE_EVENTS")],
            y = function(c, _, b, S, x = !1, D = !1) {
                return function() {
                    let P = this || r,
                        B = arguments[0];
                    k && k.transferEventName && (B = k.transferEventName(B));
                    let V = arguments[1];
                    if (!V) return c.apply(this, arguments);
                    if (Le && B === "uncaughtException") return c.apply(this, arguments);
                    let W = !1;
                    if (typeof V != "function") {
                        if (!V.handleEvent) return c.apply(this, arguments);
                        W = !0
                    }
                    if (H && !H(c, V, P, arguments)) return;
                    let Te = ve && !!p && p.indexOf(B) !== -1,
                        re = q(arguments[2], Te),
                        Ie = re && typeof re == "object" && re.signal && typeof re.signal == "object" ? re.signal : void 0;
                    if (Ie ? .aborted) return;
                    if (M) {
                        for (let me = 0; me < M.length; me++)
                            if (B === M[me]) return Te ? c.call(P, B, V, re) : c.apply(this, arguments)
                    }
                    let je = re ? typeof re == "boolean" ? !0 : re.capture : !1,
                        ft = re && typeof re == "object" ? re.once : !1,
                        Xt = Zone.current,
                        He = oe[B];
                    He || (Rt(B, G), He = oe[B]);
                    let ht = He[je ? pe : de],
                        ke = P[ht],
                        pt = !1;
                    if (ke) {
                        if (pt = !0, z) {
                            for (let me = 0; me < ke.length; me++)
                                if (A(ke[me], V)) return
                        }
                    } else ke = P[ht] = [];
                    let Pe, dt = P.constructor.name,
                        yt = xt[dt];
                    yt && (Pe = yt[B]), Pe || (Pe = dt + _ + (G ? G(B) : B)), m.options = re, ft && (m.options.once = !1), m.target = P, m.capture = je, m.eventName = B, m.isExisting = pt;
                    let Ae = Q ? tr : void 0;
                    Ae && (Ae.taskData = m), Ie && (m.options.signal = void 0);
                    let le = Xt.scheduleEventTask(Pe, V, Ae, b, S);
                    if (Ie && (m.options.signal = Ie, c.call(Ie, "abort", () => {
                            le.zone.cancelTask(le)
                        }, {
                            once: !0
                        })), m.target = null, Ae && (Ae.taskData = null), ft && (re.once = !0), !ve && typeof le.options == "boolean" || (le.options = re), le.target = P, le.capture = je, le.eventName = B, W && (le.originalDelegate = V), D ? ke.unshift(le) : ke.push(le), x) return P
                }
            };
        return v[i] = y(N, E, l, s, U), $ && (v[d] = y($, T, L, s, U, !0)), v[o] = function() {
            let c = this || r,
                _ = arguments[0];
            k && k.transferEventName && (_ = k.transferEventName(_));
            let b = arguments[2],
                S = b ? typeof b == "boolean" ? !0 : b.capture : !1,
                x = arguments[1];
            if (!x) return I.apply(this, arguments);
            if (H && !H(I, x, c, arguments)) return;
            let D = oe[_],
                P;
            D && (P = D[S ? pe : de]);
            let B = P && c[P];
            if (B)
                for (let V = 0; V < B.length; V++) {
                    let W = B[V];
                    if (A(W, x)) {
                        if (B.splice(V, 1), W.isRemoved = !0, B.length === 0 && (W.allRemoved = !0, c[P] = null, typeof _ == "string")) {
                            let Te = Fe + "ON_PROPERTY" + _;
                            c[Te] = null
                        }
                        return W.zone.cancelTask(W), U ? c : void 0
                    }
                }
            return I.apply(this, arguments)
        }, v[a] = function() {
            let c = this || r,
                _ = arguments[0];
            k && k.transferEventName && (_ = k.transferEventName(_));
            let b = [],
                S = It(c, G ? G(_) : _);
            for (let x = 0; x < S.length; x++) {
                let D = S[x],
                    P = D.originalDelegate ? D.originalDelegate : D.callback;
                b.push(P)
            }
            return b
        }, v[f] = function() {
            let c = this || r,
                _ = arguments[0];
            if (_) {
                k && k.transferEventName && (_ = k.transferEventName(_));
                let b = oe[_];
                if (b) {
                    let S = b[de],
                        x = b[pe],
                        D = c[S],
                        P = c[x];
                    if (D) {
                        let B = D.slice();
                        for (let V = 0; V < B.length; V++) {
                            let W = B[V],
                                Te = W.originalDelegate ? W.originalDelegate : W.callback;
                            this[o].call(this, _, Te, W.options)
                        }
                    }
                    if (P) {
                        let B = P.slice();
                        for (let V = 0; V < B.length; V++) {
                            let W = B[V],
                                Te = W.originalDelegate ? W.originalDelegate : W.callback;
                            this[o].call(this, _, Te, W.options)
                        }
                    }
                }
            } else {
                let b = Object.keys(c);
                for (let S = 0; S < b.length; S++) {
                    let x = b[S],
                        D = bt.exec(x),
                        P = D && D[1];
                    P && P !== "removeListener" && this[f].call(this, P)
                }
                this[f].call(this, "removeListener")
            }
            if (U) return this
        }, ye(v[i], N), ye(v[o], I), ue && ye(v[f], ue), te && ye(v[a], te), !0
    }
    let Y = [];
    for (let F = 0; F < t.length; F++) Y[F] = ee(t[F], n);
    return Y
}

function It(r, e) {
    if (!e) {
        let o = [];
        for (let a in r) {
            let f = bt.exec(a),
                h = f && f[1];
            if (h && (!e || h === e)) {
                let E = r[a];
                if (E)
                    for (let d = 0; d < E.length; d++) o.push(E[d])
            }
        }
        return o
    }
    let t = oe[e];
    t || (Rt(e), t = oe[e]);
    let n = r[t[de]],
        i = r[t[pe]];
    return n ? i ? n.concat(i) : n.slice() : i ? i.slice() : []
}

function nr(r, e) {
    let t = r.Event;
    t && t.prototype && e.patchMethod(t.prototype, "stopImmediatePropagation", n => function(i, o) {
        i[Ct] = !0, n && n.apply(i, o)
    })
}

function ir(r, e, t, n, i) {
    let o = Zone.__symbol__(n);
    if (e[o]) return;
    let a = e[o] = e[n];
    e[n] = function(f, h, E) {
        return h && h.prototype && i.forEach(function(d) {
            let T = `${t}.${n}::` + d,
                C = h.prototype;
            try {
                if (C.hasOwnProperty(d)) {
                    let R = r.ObjectGetOwnPropertyDescriptor(C, d);
                    R && R.value ? (R.value = r.wrapWithCurrentZone(R.value, T), r._redefineProperty(h.prototype, d, R)) : C[d] && (C[d] = r.wrapWithCurrentZone(C[d], T))
                } else C[d] && (C[d] = r.wrapWithCurrentZone(C[d], T))
            } catch {}
        }), a.call(e, f, h, E)
    }, r.attachOriginToPatched(e[n], a)
}

function At(r, e, t) {
    if (!t || t.length === 0) return e;
    let n = t.filter(o => o.target === r);
    if (!n || n.length === 0) return e;
    let i = n[0].ignoreProperties;
    return e.filter(o => i.indexOf(o) === -1)
}

function mt(r, e, t, n) {
    if (!r) return;
    let i = At(r, e, t);
    vt(r, i, n)
}

function Xe(r) {
    return Object.getOwnPropertyNames(r).filter(e => e.startsWith("on") && e.length > 2).map(e => e.substring(2))
}

function or(r, e) {
    if (Le && !kt || Zone[r.symbol("patchEvents")]) return;
    let t = e.__Zone_ignore_on_properties,
        n = [];
    if (tt) {
        let i = window;
        n = n.concat(["Document", "SVGElement", "Element", "HTMLElement", "HTMLBodyElement", "HTMLMediaElement", "HTMLFrameSetElement", "HTMLFrameElement", "HTMLIFrameElement", "HTMLMarqueeElement", "Worker"]);
        let o = Qt() ? [{
            target: i,
            ignoreProperties: ["error"]
        }] : [];
        mt(i, Xe(i), t && t.concat(o), ze(i))
    }
    n = n.concat(["XMLHttpRequest", "XMLHttpRequestEventTarget", "IDBIndex", "IDBRequest", "IDBOpenDBRequest", "IDBDatabase", "IDBTransaction", "IDBCursor", "WebSocket"]);
    for (let i = 0; i < n.length; i++) {
        let o = e[n[i]];
        o && o.prototype && mt(o.prototype, Xe(o.prototype), t)
    }
}
Zone.__load_patch("util", (r, e, t) => {
    let n = Xe(r);
    t.patchOnProperties = vt, t.patchMethod = Ee, t.bindArguments = et, t.patchMacroTask = Kt;
    let i = e.__symbol__("BLACK_LISTED_EVENTS"),
        o = e.__symbol__("UNPATCHED_EVENTS");
    r[o] && (r[i] = r[o]), r[i] && (e[i] = e[o] = r[i]), t.patchEventPrototype = nr, t.patchEventTarget = rr, t.isIEOrEdge = er, t.ObjectDefineProperty = Ye, t.ObjectGetOwnPropertyDescriptor = Se, t.ObjectCreate = Yt, t.ArraySlice = zt, t.patchClass = De, t.wrapWithCurrentZone = Ke, t.filterProperties = At, t.attachOriginToPatched = ye, t._redefineProperty = Object.defineProperty, t.patchCallbacks = ir, t.getGlobalObjects = () => ({
        globalSources: xt,
        zoneSymbolEventNames: oe,
        eventNames: n,
        isBrowser: tt,
        isMix: kt,
        isNode: Le,
        TRUE_STR: pe,
        FALSE_STR: de,
        ZONE_SYMBOL_PREFIX: Fe,
        ADD_EVENT_LISTENER_STR: $e,
        REMOVE_EVENT_LISTENER_STR: Je
    })
});

function sr(r, e) {
    e.patchMethod(r, "queueMicrotask", t => function(n, i) {
        Zone.current.scheduleMicroTask("queueMicrotask", i[0])
    })
}
var Be = j("zoneTask");

function xe(r, e, t, n) {
    let i = null,
        o = null;
    e += n, t += n;
    let a = {};

    function f(E) {
        let d = E.data;
        return d.args[0] = function() {
            return E.invoke.apply(this, arguments)
        }, d.handleId = i.apply(r, d.args), E
    }

    function h(E) {
        return o.call(r, E.data.handleId)
    }
    i = Ee(r, e, E => function(d, T) {
        if (typeof T[0] == "function") {
            let C = {
                    isPeriodic: n === "Interval",
                    delay: n === "Timeout" || n === "Interval" ? T[1] || 0 : void 0,
                    args: T
                },
                R = T[0];
            T[0] = function() {
                try {
                    return R.apply(this, arguments)
                } finally {
                    C.isPeriodic || (typeof C.handleId == "number" ? delete a[C.handleId] : C.handleId && (C.handleId[Be] = null))
                }
            };
            let Z = Qe(e, T[0], C, f, h);
            if (!Z) return Z;
            let O = Z.data.handleId;
            return typeof O == "number" ? a[O] = Z : O && (O[Be] = Z), O && O.ref && O.unref && typeof O.ref == "function" && typeof O.unref == "function" && (Z.ref = O.ref.bind(O), Z.unref = O.unref.bind(O)), typeof O == "number" || O ? O : Z
        } else return E.apply(r, T)
    }), o = Ee(r, t, E => function(d, T) {
        let C = T[0],
            R;
        typeof C == "number" ? R = a[C] : (R = C && C[Be], R || (R = C)), R && typeof R.type == "string" ? R.state !== "notScheduled" && (R.cancelFn && R.data.isPeriodic || R.runCount === 0) && (typeof C == "number" ? delete a[C] : C && (C[Be] = null), R.zone.cancelTask(R)) : E.apply(r, T)
    })
}

function ar(r, e) {
    let {
        isBrowser: t,
        isMix: n
    } = e.getGlobalObjects();
    if (!t && !n || !r.customElements || !("customElements" in r)) return;
    let i = ["connectedCallback", "disconnectedCallback", "adoptedCallback", "attributeChangedCallback", "formAssociatedCallback", "formDisabledCallback", "formResetCallback", "formStateRestoreCallback"];
    e.patchCallbacks(e, r.customElements, "customElements", "define", i)
}

function cr(r, e) {
    if (Zone[e.symbol("patchEventTarget")]) return;
    let {
        eventNames: t,
        zoneSymbolEventNames: n,
        TRUE_STR: i,
        FALSE_STR: o,
        ZONE_SYMBOL_PREFIX: a
    } = e.getGlobalObjects();
    for (let h = 0; h < t.length; h++) {
        let E = t[h],
            d = E + o,
            T = E + i,
            C = a + d,
            R = a + T;
        n[E] = {}, n[E][o] = C, n[E][i] = R
    }
    let f = r.EventTarget;
    if (!(!f || !f.prototype)) return e.patchEventTarget(r, e, [f && f.prototype]), !0
}

function ur(r, e) {
    e.patchEventPrototype(r, e)
}
Zone.__load_patch("legacy", r => {
    let e = r[Zone.__symbol__("legacyPatch")];
    e && e()
});
Zone.__load_patch("timers", r => {
    let e = "set",
        t = "clear";
    xe(r, e, t, "Timeout"), xe(r, e, t, "Interval"), xe(r, e, t, "Immediate")
});
Zone.__load_patch("requestAnimationFrame", r => {
    xe(r, "request", "cancel", "AnimationFrame"), xe(r, "mozRequest", "mozCancel", "AnimationFrame"), xe(r, "webkitRequest", "webkitCancel", "AnimationFrame")
});
Zone.__load_patch("blocking", (r, e) => {
    let t = ["alert", "prompt", "confirm"];
    for (let n = 0; n < t.length; n++) {
        let i = t[n];
        Ee(r, i, (o, a, f) => function(h, E) {
            return e.current.run(o, r, E, f)
        })
    }
});
Zone.__load_patch("EventTarget", (r, e, t) => {
    ur(r, t), cr(r, t);
    let n = r.XMLHttpRequestEventTarget;
    n && n.prototype && t.patchEventTarget(r, t, [n.prototype])
});
Zone.__load_patch("MutationObserver", (r, e, t) => {
    De("MutationObserver"), De("WebKitMutationObserver")
});
Zone.__load_patch("IntersectionObserver", (r, e, t) => {
    De("IntersectionObserver")
});
Zone.__load_patch("FileReader", (r, e, t) => {
    De("FileReader")
});
Zone.__load_patch("on_property", (r, e, t) => {
    or(t, r)
});
Zone.__load_patch("customElements", (r, e, t) => {
    ar(r, t)
});
Zone.__load_patch("XHR", (r, e) => {
    h(r);
    let t = j("xhrTask"),
        n = j("xhrSync"),
        i = j("xhrListener"),
        o = j("xhrScheduled"),
        a = j("xhrURL"),
        f = j("xhrErrorBeforeScheduled");

    function h(E) {
        let d = E.XMLHttpRequest;
        if (!d) return;
        let T = d.prototype;

        function C(m) {
            return m[t]
        }
        let R = T[Ve],
            Z = T[We];
        if (!R) {
            let m = E.XMLHttpRequestEventTarget;
            if (m) {
                let N = m.prototype;
                R = N[Ve], Z = N[We]
            }
        }
        let O = "readystatechange",
            ee = "scheduled";

        function Y(m) {
            let N = m.data,
                I = N.target;
            I[o] = !1, I[f] = !1;
            let te = I[i];
            R || (R = I[Ve], Z = I[We]), te && Z.call(I, O, te);
            let ue = I[i] = () => {
                if (I.readyState === I.DONE)
                    if (!N.aborted && I[o] && m.state === ee) {
                        let q = I[e.__symbol__("loadfalse")];
                        if (I.status !== 0 && q && q.length > 0) {
                            let ae = m.invoke;
                            m.invoke = function() {
                                let ne = I[e.__symbol__("loadfalse")];
                                for (let X = 0; X < ne.length; X++) ne[X] === m && ne.splice(X, 1);
                                !N.aborted && m.state === ee && ae.call(m)
                            }, q.push(m)
                        } else m.invoke()
                    } else !N.aborted && I[o] === !1 && (I[f] = !0)
            };
            return R.call(I, O, ue), I[t] || (I[t] = m), v.apply(I, N.args), I[o] = !0, m
        }

        function F() {}

        function k(m) {
            let N = m.data;
            return N.aborted = !0, G.apply(N.target, N.args)
        }
        let Q = Ee(T, "open", () => function(m, N) {
                return m[n] = N[2] == !1, m[a] = N[1], Q.apply(m, N)
            }),
            H = "XMLHttpRequest.send",
            z = j("fetchTaskAborting"),
            U = j("fetchTaskScheduling"),
            v = Ee(T, "send", () => function(m, N) {
                if (e.current[U] === !0 || m[n]) return v.apply(m, N); {
                    let I = {
                            target: m,
                            url: m[a],
                            isPeriodic: !1,
                            args: N,
                            aborted: !1
                        },
                        te = Qe(H, F, I, Y, k);
                    m && m[f] === !0 && !I.aborted && te.state === ee && te.invoke()
                }
            }),
            G = Ee(T, "abort", () => function(m, N) {
                let I = C(m);
                if (I && typeof I.type == "string") {
                    if (I.cancelFn == null || I.data && I.data.aborted) return;
                    I.zone.cancelTask(I)
                } else if (e.current[z] === !0) return G.apply(m, N)
            })
    }
});
Zone.__load_patch("geolocation", r => {
    r.navigator && r.navigator.geolocation && Jt(r.navigator.geolocation, ["getCurrentPosition", "watchPosition"])
});
Zone.__load_patch("PromiseRejectionEvent", (r, e) => {
    function t(n) {
        return function(i) {
            It(r, n).forEach(a => {
                let f = r.PromiseRejectionEvent;
                if (f) {
                    let h = new f(n, {
                        promise: i.promise,
                        reason: i.rejection
                    });
                    a.invoke(h)
                }
            })
        }
    }
    r.PromiseRejectionEvent && (e[j("unhandledPromiseRejectionHandler")] = t("unhandledrejection"), e[j("rejectionHandledHandler")] = t("rejectionhandled"))
});
Zone.__load_patch("queueMicrotask", (r, e, t) => {
    sr(r, t)
});
window.global = window;
global.Buffer = global.Buffer || qt().Buffer;
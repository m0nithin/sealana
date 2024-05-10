var I0 = Object.create;
var ai = Object.defineProperty,
    S0 = Object.defineProperties,
    A0 = Object.getOwnPropertyDescriptor,
    _0 = Object.getOwnPropertyDescriptors,
    R0 = Object.getOwnPropertyNames,
    ro = Object.getOwnPropertySymbols,
    L0 = Object.getPrototypeOf,
    Qs = Object.prototype.hasOwnProperty,
    Mc = Object.prototype.propertyIsEnumerable;
var Tc = (r, t, e) => t in r ? ai(r, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : r[t] = e,
    st = (r, t) => {
        for (var e in t || = {}) Qs.call(t, e) && Tc(r, e, t[e]);
        if (ro)
            for (var e of ro(t)) Mc.call(t, e) && Tc(r, e, t[e]);
        return r
    },
    ft = (r, t) => S0(r, _0(t));
var Nw = (r => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(r, {
    get: (t, e) => (typeof require < "u" ? require : t)[e]
}) : r)(function(r) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + r + '" is not supported')
});
var on = (r, t) => {
    var e = {};
    for (var n in r) Qs.call(r, n) && t.indexOf(n) < 0 && (e[n] = r[n]);
    if (r != null && ro)
        for (var n of ro(r)) t.indexOf(n) < 0 && Mc.call(r, n) && (e[n] = r[n]);
    return e
};
var yt = (r, t) => () => (r && (t = r(r = 0)), t);
var wt = (r, t) => () => (t || r((t = {
        exports: {}
    }).exports, t), t.exports),
    io = (r, t) => {
        for (var e in t) ai(r, e, {
            get: t[e],
            enumerable: !0
        })
    },
    no = (r, t, e, n) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let i of R0(t)) !Qs.call(r, i) && i !== e && ai(r, i, {
                get: () => t[i],
                enumerable: !(n = A0(t, i)) || n.enumerable
            });
        return r
    },
    Dw = (r, t, e) => (no(r, t, "default"), e && no(e, t, "default")),
    Qe = (r, t, e) => (e = r != null ? I0(L0(r)) : {}, no(t || !r || !r.__esModule ? ai(e, "default", {
        value: r,
        enumerable: !0
    }) : e, r)),
    ta = r => no(ai({}, "__esModule", {
        value: !0
    }), r);
var O = (r, t, e) => new Promise((n, i) => {
    var o = c => {
            try {
                a(e.next(c))
            } catch (d) {
                i(d)
            }
        },
        s = c => {
            try {
                a(e.throw(c))
            } catch (d) {
                i(d)
            }
        },
        a = c => c.done ? n(c.value) : Promise.resolve(c.value).then(o, s);
    a((e = e.apply(r, t)).next())
});
var ui = wt(oo => {
    "use strict";
    oo.byteLength = M0;
    oo.toByteArray = P0;
    oo.fromByteArray = O0;
    var tr = [],
        Ve = [],
        T0 = typeof Uint8Array < "u" ? Uint8Array : Array,
        ea = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (sn = 0, Uc = ea.length; sn < Uc; ++sn) tr[sn] = ea[sn], Ve[ea.charCodeAt(sn)] = sn;
    var sn, Uc;
    Ve[45] = 62;
    Ve[95] = 63;

    function Pc(r) {
        var t = r.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var e = r.indexOf("=");
        e === -1 && (e = t);
        var n = e === t ? 0 : 4 - e % 4;
        return [e, n]
    }

    function M0(r) {
        var t = Pc(r),
            e = t[0],
            n = t[1];
        return (e + n) * 3 / 4 - n
    }

    function U0(r, t, e) {
        return (t + e) * 3 / 4 - e
    }

    function P0(r) {
        var t, e = Pc(r),
            n = e[0],
            i = e[1],
            o = new T0(U0(r, n, i)),
            s = 0,
            a = i > 0 ? n - 4 : n,
            c;
        for (c = 0; c < a; c += 4) t = Ve[r.charCodeAt(c)] << 18 | Ve[r.charCodeAt(c + 1)] << 12 | Ve[r.charCodeAt(c + 2)] << 6 | Ve[r.charCodeAt(c + 3)], o[s++] = t >> 16 & 255, o[s++] = t >> 8 & 255, o[s++] = t & 255;
        return i === 2 && (t = Ve[r.charCodeAt(c)] << 2 | Ve[r.charCodeAt(c + 1)] >> 4, o[s++] = t & 255), i === 1 && (t = Ve[r.charCodeAt(c)] << 10 | Ve[r.charCodeAt(c + 1)] << 4 | Ve[r.charCodeAt(c + 2)] >> 2, o[s++] = t >> 8 & 255, o[s++] = t & 255), o
    }

    function C0(r) {
        return tr[r >> 18 & 63] + tr[r >> 12 & 63] + tr[r >> 6 & 63] + tr[r & 63]
    }

    function F0(r, t, e) {
        for (var n, i = [], o = t; o < e; o += 3) n = (r[o] << 16 & 16711680) + (r[o + 1] << 8 & 65280) + (r[o + 2] & 255), i.push(C0(n));
        return i.join("")
    }

    function O0(r) {
        for (var t, e = r.length, n = e % 3, i = [], o = 16383, s = 0, a = e - n; s < a; s += o) i.push(F0(r, s, s + o > a ? a : s + o));
        return n === 1 ? (t = r[e - 1], i.push(tr[t >> 2] + tr[t << 4 & 63] + "==")) : n === 2 && (t = (r[e - 2] << 8) + r[e - 1], i.push(tr[t >> 10] + tr[t >> 4 & 63] + tr[t << 2 & 63] + "=")), i.join("")
    }
});
var ci = wt(ra => {
    "use strict";
    ra.read = function(r, t, e, n, i) {
        var o, s, a = i * 8 - n - 1,
            c = (1 << a) - 1,
            d = c >> 1,
            g = -7,
            b = e ? i - 1 : 0,
            _ = e ? -1 : 1,
            I = r[t + b];
        for (b += _, o = I & (1 << -g) - 1, I >>= -g, g += a; g > 0; o = o * 256 + r[t + b], b += _, g -= 8);
        for (s = o & (1 << -g) - 1, o >>= -g, g += n; g > 0; s = s * 256 + r[t + b], b += _, g -= 8);
        if (o === 0) o = 1 - d;
        else {
            if (o === c) return s ? NaN : (I ? -1 : 1) * (1 / 0);
            s = s + Math.pow(2, n), o = o - d
        }
        return (I ? -1 : 1) * s * Math.pow(2, o - n)
    };
    ra.write = function(r, t, e, n, i, o) {
        var s, a, c, d = o * 8 - i - 1,
            g = (1 << d) - 1,
            b = g >> 1,
            _ = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            I = n ? 0 : o - 1,
            S = n ? 1 : -1,
            v = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = g) : (s = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), s + b >= 1 ? t += _ / c : t += _ * Math.pow(2, 1 - b), t * c >= 2 && (s++, c /= 2), s + b >= g ? (a = 0, s = g) : s + b >= 1 ? (a = (t * c - 1) * Math.pow(2, i), s = s + b) : (a = t * Math.pow(2, b - 1) * Math.pow(2, i), s = 0)); i >= 8; r[e + I] = a & 255, I += S, a /= 256, i -= 8);
        for (s = s << i | a, d += i; d > 0; r[e + I] = s & 255, I += S, s /= 256, d -= 8);
        r[e + I - S] |= v * 128
    }
});
var Xc = wt(Ln => {
    "use strict";
    var na = ui(),
        _n = ci(),
        Cc = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    Ln.Buffer = M;
    Ln.SlowBuffer = W0;
    Ln.INSPECT_MAX_BYTES = 50;
    var so = 2147483647;
    Ln.kMaxLength = so;
    M.TYPED_ARRAY_SUPPORT = N0();
    !M.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

    function N0() {
        try {
            let r = new Uint8Array(1),
                t = {
                    foo: function() {
                        return 42
                    }
                };
            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(r, t), r.foo() === 42
        } catch {
            return !1
        }
    }
    Object.defineProperty(M.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (M.isBuffer(this)) return this.buffer
        }
    });
    Object.defineProperty(M.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (M.isBuffer(this)) return this.byteOffset
        }
    });

    function pr(r) {
        if (r > so) throw new RangeError('The value "' + r + '" is invalid for option "size"');
        let t = new Uint8Array(r);
        return Object.setPrototypeOf(t, M.prototype), t
    }

    function M(r, t, e) {
        if (typeof r == "number") {
            if (typeof t == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
            return aa(r)
        }
        return Dc(r, t, e)
    }
    M.poolSize = 8192;

    function Dc(r, t, e) {
        if (typeof r == "string") return q0(r, t);
        if (ArrayBuffer.isView(r)) return z0(r);
        if (r == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
        if (er(r, ArrayBuffer) || r && er(r.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (er(r, SharedArrayBuffer) || r && er(r.buffer, SharedArrayBuffer))) return oa(r, t, e);
        if (typeof r == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        let n = r.valueOf && r.valueOf();
        if (n != null && n !== r) return M.from(n, t, e);
        let i = K0(r);
        if (i) return i;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof r[Symbol.toPrimitive] == "function") return M.from(r[Symbol.toPrimitive]("string"), t, e);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r)
    }
    M.from = function(r, t, e) {
        return Dc(r, t, e)
    };
    Object.setPrototypeOf(M.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(M, Uint8Array);

    function qc(r) {
        if (typeof r != "number") throw new TypeError('"size" argument must be of type number');
        if (r < 0) throw new RangeError('The value "' + r + '" is invalid for option "size"')
    }

    function D0(r, t, e) {
        return qc(r), r <= 0 ? pr(r) : t !== void 0 ? typeof e == "string" ? pr(r).fill(t, e) : pr(r).fill(t) : pr(r)
    }
    M.alloc = function(r, t, e) {
        return D0(r, t, e)
    };

    function aa(r) {
        return qc(r), pr(r < 0 ? 0 : ua(r) | 0)
    }
    M.allocUnsafe = function(r) {
        return aa(r)
    };
    M.allocUnsafeSlow = function(r) {
        return aa(r)
    };

    function q0(r, t) {
        if ((typeof t != "string" || t === "") && (t = "utf8"), !M.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
        let e = zc(r, t) | 0,
            n = pr(e),
            i = n.write(r, t);
        return i !== e && (n = n.slice(0, i)), n
    }

    function ia(r) {
        let t = r.length < 0 ? 0 : ua(r.length) | 0,
            e = pr(t);
        for (let n = 0; n < t; n += 1) e[n] = r[n] & 255;
        return e
    }

    function z0(r) {
        if (er(r, Uint8Array)) {
            let t = new Uint8Array(r);
            return oa(t.buffer, t.byteOffset, t.byteLength)
        }
        return ia(r)
    }

    function oa(r, t, e) {
        if (t < 0 || r.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
        if (r.byteLength < t + (e || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return t === void 0 && e === void 0 ? n = new Uint8Array(r) : e === void 0 ? n = new Uint8Array(r, t) : n = new Uint8Array(r, t, e), Object.setPrototypeOf(n, M.prototype), n
    }

    function K0(r) {
        if (M.isBuffer(r)) {
            let t = ua(r.length) | 0,
                e = pr(t);
            return e.length === 0 || r.copy(e, 0, 0, t), e
        }
        if (r.length !== void 0) return typeof r.length != "number" || fa(r.length) ? pr(0) : ia(r);
        if (r.type === "Buffer" && Array.isArray(r.data)) return ia(r.data)
    }

    function ua(r) {
        if (r >= so) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + so.toString(16) + " bytes");
        return r | 0
    }

    function W0(r) {
        return +r != r && (r = 0), M.alloc(+r)
    }
    M.isBuffer = function(t) {
        return t != null && t._isBuffer === !0 && t !== M.prototype
    };
    M.compare = function(t, e) {
        if (er(t, Uint8Array) && (t = M.from(t, t.offset, t.byteLength)), er(e, Uint8Array) && (e = M.from(e, e.offset, e.byteLength)), !M.isBuffer(t) || !M.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (t === e) return 0;
        let n = t.length,
            i = e.length;
        for (let o = 0, s = Math.min(n, i); o < s; ++o)
            if (t[o] !== e[o]) {
                n = t[o], i = e[o];
                break
            }
        return n < i ? -1 : i < n ? 1 : 0
    };
    M.isEncoding = function(t) {
        switch (String(t).toLowerCase()) {
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
    M.concat = function(t, e) {
        if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (t.length === 0) return M.alloc(0);
        let n;
        if (e === void 0)
            for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
        let i = M.allocUnsafe(e),
            o = 0;
        for (n = 0; n < t.length; ++n) {
            let s = t[n];
            if (er(s, Uint8Array)) o + s.length > i.length ? (M.isBuffer(s) || (s = M.from(s)), s.copy(i, o)) : Uint8Array.prototype.set.call(i, s, o);
            else if (M.isBuffer(s)) s.copy(i, o);
            else throw new TypeError('"list" argument must be an Array of Buffers');
            o += s.length
        }
        return i
    };

    function zc(r, t) {
        if (M.isBuffer(r)) return r.length;
        if (ArrayBuffer.isView(r) || er(r, ArrayBuffer)) return r.byteLength;
        if (typeof r != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof r);
        let e = r.length,
            n = arguments.length > 2 && arguments[2] === !0;
        if (!n && e === 0) return 0;
        let i = !1;
        for (;;) switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
                return e;
            case "utf8":
            case "utf-8":
                return sa(r).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return e * 2;
            case "hex":
                return e >>> 1;
            case "base64":
                return Zc(r).length;
            default:
                if (i) return n ? -1 : sa(r).length;
                t = ("" + t).toLowerCase(), i = !0
        }
    }
    M.byteLength = zc;

    function H0(r, t, e) {
        let n = !1;
        if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((e === void 0 || e > this.length) && (e = this.length), e <= 0) || (e >>>= 0, t >>>= 0, e <= t)) return "";
        for (r || (r = "utf8");;) switch (r) {
            case "hex":
                return td(this, t, e);
            case "utf8":
            case "utf-8":
                return Wc(this, t, e);
            case "ascii":
                return J0(this, t, e);
            case "latin1":
            case "binary":
                return Q0(this, t, e);
            case "base64":
                return Z0(this, t, e);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return ed(this, t, e);
            default:
                if (n) throw new TypeError("Unknown encoding: " + r);
                r = (r + "").toLowerCase(), n = !0
        }
    }
    M.prototype._isBuffer = !0;

    function an(r, t, e) {
        let n = r[t];
        r[t] = r[e], r[e] = n
    }
    M.prototype.swap16 = function() {
        let t = this.length;
        if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let e = 0; e < t; e += 2) an(this, e, e + 1);
        return this
    };
    M.prototype.swap32 = function() {
        let t = this.length;
        if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let e = 0; e < t; e += 4) an(this, e, e + 3), an(this, e + 1, e + 2);
        return this
    };
    M.prototype.swap64 = function() {
        let t = this.length;
        if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let e = 0; e < t; e += 8) an(this, e, e + 7), an(this, e + 1, e + 6), an(this, e + 2, e + 5), an(this, e + 3, e + 4);
        return this
    };
    M.prototype.toString = function() {
        let t = this.length;
        return t === 0 ? "" : arguments.length === 0 ? Wc(this, 0, t) : H0.apply(this, arguments)
    };
    M.prototype.toLocaleString = M.prototype.toString;
    M.prototype.equals = function(t) {
        if (!M.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
        return this === t ? !0 : M.compare(this, t) === 0
    };
    M.prototype.inspect = function() {
        let t = "",
            e = Ln.INSPECT_MAX_BYTES;
        return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t += " ... "), "<Buffer " + t + ">"
    };
    Cc && (M.prototype[Cc] = M.prototype.inspect);
    M.prototype.compare = function(t, e, n, i, o) {
        if (er(t, Uint8Array) && (t = M.from(t, t.offset, t.byteLength)), !M.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
        if (e === void 0 && (e = 0), n === void 0 && (n = t ? t.length : 0), i === void 0 && (i = 0), o === void 0 && (o = this.length), e < 0 || n > t.length || i < 0 || o > this.length) throw new RangeError("out of range index");
        if (i >= o && e >= n) return 0;
        if (i >= o) return -1;
        if (e >= n) return 1;
        if (e >>>= 0, n >>>= 0, i >>>= 0, o >>>= 0, this === t) return 0;
        let s = o - i,
            a = n - e,
            c = Math.min(s, a),
            d = this.slice(i, o),
            g = t.slice(e, n);
        for (let b = 0; b < c; ++b)
            if (d[b] !== g[b]) {
                s = d[b], a = g[b];
                break
            }
        return s < a ? -1 : a < s ? 1 : 0
    };

    function Kc(r, t, e, n, i) {
        if (r.length === 0) return -1;
        if (typeof e == "string" ? (n = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), e = +e, fa(e) && (e = i ? 0 : r.length - 1), e < 0 && (e = r.length + e), e >= r.length) {
            if (i) return -1;
            e = r.length - 1
        } else if (e < 0)
            if (i) e = 0;
            else return -1;
        if (typeof t == "string" && (t = M.from(t, n)), M.isBuffer(t)) return t.length === 0 ? -1 : Fc(r, t, e, n, i);
        if (typeof t == "number") return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(r, t, e) : Uint8Array.prototype.lastIndexOf.call(r, t, e) : Fc(r, [t], e, n, i);
        throw new TypeError("val must be string, number or Buffer")
    }

    function Fc(r, t, e, n, i) {
        let o = 1,
            s = r.length,
            a = t.length;
        if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
            if (r.length < 2 || t.length < 2) return -1;
            o = 2, s /= 2, a /= 2, e /= 2
        }

        function c(g, b) {
            return o === 1 ? g[b] : g.readUInt16BE(b * o)
        }
        let d;
        if (i) {
            let g = -1;
            for (d = e; d < s; d++)
                if (c(r, d) === c(t, g === -1 ? 0 : d - g)) {
                    if (g === -1 && (g = d), d - g + 1 === a) return g * o
                } else g !== -1 && (d -= d - g), g = -1
        } else
            for (e + a > s && (e = s - a), d = e; d >= 0; d--) {
                let g = !0;
                for (let b = 0; b < a; b++)
                    if (c(r, d + b) !== c(t, b)) {
                        g = !1;
                        break
                    }
                if (g) return d
            }
        return -1
    }
    M.prototype.includes = function(t, e, n) {
        return this.indexOf(t, e, n) !== -1
    };
    M.prototype.indexOf = function(t, e, n) {
        return Kc(this, t, e, n, !0)
    };
    M.prototype.lastIndexOf = function(t, e, n) {
        return Kc(this, t, e, n, !1)
    };

    function $0(r, t, e, n) {
        e = Number(e) || 0;
        let i = r.length - e;
        n ? (n = Number(n), n > i && (n = i)) : n = i;
        let o = t.length;
        n > o / 2 && (n = o / 2);
        let s;
        for (s = 0; s < n; ++s) {
            let a = parseInt(t.substr(s * 2, 2), 16);
            if (fa(a)) return s;
            r[e + s] = a
        }
        return s
    }

    function V0(r, t, e, n) {
        return ao(sa(t, r.length - e), r, e, n)
    }

    function G0(r, t, e, n) {
        return ao(od(t), r, e, n)
    }

    function j0(r, t, e, n) {
        return ao(Zc(t), r, e, n)
    }

    function Y0(r, t, e, n) {
        return ao(sd(t, r.length - e), r, e, n)
    }
    M.prototype.write = function(t, e, n, i) {
        if (e === void 0) i = "utf8", n = this.length, e = 0;
        else if (n === void 0 && typeof e == "string") i = e, n = this.length, e = 0;
        else if (isFinite(e)) e = e >>> 0, isFinite(n) ? (n = n >>> 0, i === void 0 && (i = "utf8")) : (i = n, n = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        let o = this.length - e;
        if ((n === void 0 || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        i || (i = "utf8");
        let s = !1;
        for (;;) switch (i) {
            case "hex":
                return $0(this, t, e, n);
            case "utf8":
            case "utf-8":
                return V0(this, t, e, n);
            case "ascii":
            case "latin1":
            case "binary":
                return G0(this, t, e, n);
            case "base64":
                return j0(this, t, e, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Y0(this, t, e, n);
            default:
                if (s) throw new TypeError("Unknown encoding: " + i);
                i = ("" + i).toLowerCase(), s = !0
        }
    };
    M.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    };

    function Z0(r, t, e) {
        return t === 0 && e === r.length ? na.fromByteArray(r) : na.fromByteArray(r.slice(t, e))
    }

    function Wc(r, t, e) {
        e = Math.min(r.length, e);
        let n = [],
            i = t;
        for (; i < e;) {
            let o = r[i],
                s = null,
                a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
            if (i + a <= e) {
                let c, d, g, b;
                switch (a) {
                    case 1:
                        o < 128 && (s = o);
                        break;
                    case 2:
                        c = r[i + 1], (c & 192) === 128 && (b = (o & 31) << 6 | c & 63, b > 127 && (s = b));
                        break;
                    case 3:
                        c = r[i + 1], d = r[i + 2], (c & 192) === 128 && (d & 192) === 128 && (b = (o & 15) << 12 | (c & 63) << 6 | d & 63, b > 2047 && (b < 55296 || b > 57343) && (s = b));
                        break;
                    case 4:
                        c = r[i + 1], d = r[i + 2], g = r[i + 3], (c & 192) === 128 && (d & 192) === 128 && (g & 192) === 128 && (b = (o & 15) << 18 | (c & 63) << 12 | (d & 63) << 6 | g & 63, b > 65535 && b < 1114112 && (s = b))
                }
            }
            s === null ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023), n.push(s), i += a
        }
        return X0(n)
    }
    var Oc = 4096;

    function X0(r) {
        let t = r.length;
        if (t <= Oc) return String.fromCharCode.apply(String, r);
        let e = "",
            n = 0;
        for (; n < t;) e += String.fromCharCode.apply(String, r.slice(n, n += Oc));
        return e
    }

    function J0(r, t, e) {
        let n = "";
        e = Math.min(r.length, e);
        for (let i = t; i < e; ++i) n += String.fromCharCode(r[i] & 127);
        return n
    }

    function Q0(r, t, e) {
        let n = "";
        e = Math.min(r.length, e);
        for (let i = t; i < e; ++i) n += String.fromCharCode(r[i]);
        return n
    }

    function td(r, t, e) {
        let n = r.length;
        (!t || t < 0) && (t = 0), (!e || e < 0 || e > n) && (e = n);
        let i = "";
        for (let o = t; o < e; ++o) i += ad[r[o]];
        return i
    }

    function ed(r, t, e) {
        let n = r.slice(t, e),
            i = "";
        for (let o = 0; o < n.length - 1; o += 2) i += String.fromCharCode(n[o] + n[o + 1] * 256);
        return i
    }
    M.prototype.slice = function(t, e) {
        let n = this.length;
        t = ~~t, e = e === void 0 ? n : ~~e, t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), e < t && (e = t);
        let i = this.subarray(t, e);
        return Object.setPrototypeOf(i, M.prototype), i
    };

    function be(r, t, e) {
        if (r % 1 !== 0 || r < 0) throw new RangeError("offset is not uint");
        if (r + t > e) throw new RangeError("Trying to access beyond buffer length")
    }
    M.prototype.readUintLE = M.prototype.readUIntLE = function(t, e, n) {
        t = t >>> 0, e = e >>> 0, n || be(t, e, this.length);
        let i = this[t],
            o = 1,
            s = 0;
        for (; ++s < e && (o *= 256);) i += this[t + s] * o;
        return i
    };
    M.prototype.readUintBE = M.prototype.readUIntBE = function(t, e, n) {
        t = t >>> 0, e = e >>> 0, n || be(t, e, this.length);
        let i = this[t + --e],
            o = 1;
        for (; e > 0 && (o *= 256);) i += this[t + --e] * o;
        return i
    };
    M.prototype.readUint8 = M.prototype.readUInt8 = function(t, e) {
        return t = t >>> 0, e || be(t, 1, this.length), this[t]
    };
    M.prototype.readUint16LE = M.prototype.readUInt16LE = function(t, e) {
        return t = t >>> 0, e || be(t, 2, this.length), this[t] | this[t + 1] << 8
    };
    M.prototype.readUint16BE = M.prototype.readUInt16BE = function(t, e) {
        return t = t >>> 0, e || be(t, 2, this.length), this[t] << 8 | this[t + 1]
    };
    M.prototype.readUint32LE = M.prototype.readUInt32LE = function(t, e) {
        return t = t >>> 0, e || be(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216
    };
    M.prototype.readUint32BE = M.prototype.readUInt32BE = function(t, e) {
        return t = t >>> 0, e || be(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
    };
    M.prototype.readBigUInt64LE = Pr(function(t) {
        t = t >>> 0, Rn(t, "offset");
        let e = this[t],
            n = this[t + 7];
        (e === void 0 || n === void 0) && fi(t, this.length - 8);
        let i = e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24,
            o = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + n * 2 ** 24;
        return BigInt(i) + (BigInt(o) << BigInt(32))
    });
    M.prototype.readBigUInt64BE = Pr(function(t) {
        t = t >>> 0, Rn(t, "offset");
        let e = this[t],
            n = this[t + 7];
        (e === void 0 || n === void 0) && fi(t, this.length - 8);
        let i = e * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t],
            o = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n;
        return (BigInt(i) << BigInt(32)) + BigInt(o)
    });
    M.prototype.readIntLE = function(t, e, n) {
        t = t >>> 0, e = e >>> 0, n || be(t, e, this.length);
        let i = this[t],
            o = 1,
            s = 0;
        for (; ++s < e && (o *= 256);) i += this[t + s] * o;
        return o *= 128, i >= o && (i -= Math.pow(2, 8 * e)), i
    };
    M.prototype.readIntBE = function(t, e, n) {
        t = t >>> 0, e = e >>> 0, n || be(t, e, this.length);
        let i = e,
            o = 1,
            s = this[t + --i];
        for (; i > 0 && (o *= 256);) s += this[t + --i] * o;
        return o *= 128, s >= o && (s -= Math.pow(2, 8 * e)), s
    };
    M.prototype.readInt8 = function(t, e) {
        return t = t >>> 0, e || be(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t]
    };
    M.prototype.readInt16LE = function(t, e) {
        t = t >>> 0, e || be(t, 2, this.length);
        let n = this[t] | this[t + 1] << 8;
        return n & 32768 ? n | 4294901760 : n
    };
    M.prototype.readInt16BE = function(t, e) {
        t = t >>> 0, e || be(t, 2, this.length);
        let n = this[t + 1] | this[t] << 8;
        return n & 32768 ? n | 4294901760 : n
    };
    M.prototype.readInt32LE = function(t, e) {
        return t = t >>> 0, e || be(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
    };
    M.prototype.readInt32BE = function(t, e) {
        return t = t >>> 0, e || be(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
    };
    M.prototype.readBigInt64LE = Pr(function(t) {
        t = t >>> 0, Rn(t, "offset");
        let e = this[t],
            n = this[t + 7];
        (e === void 0 || n === void 0) && fi(t, this.length - 8);
        let i = this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (n << 24);
        return (BigInt(i) << BigInt(32)) + BigInt(e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24)
    });
    M.prototype.readBigInt64BE = Pr(function(t) {
        t = t >>> 0, Rn(t, "offset");
        let e = this[t],
            n = this[t + 7];
        (e === void 0 || n === void 0) && fi(t, this.length - 8);
        let i = (e << 24) + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
        return (BigInt(i) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n)
    });
    M.prototype.readFloatLE = function(t, e) {
        return t = t >>> 0, e || be(t, 4, this.length), _n.read(this, t, !0, 23, 4)
    };
    M.prototype.readFloatBE = function(t, e) {
        return t = t >>> 0, e || be(t, 4, this.length), _n.read(this, t, !1, 23, 4)
    };
    M.prototype.readDoubleLE = function(t, e) {
        return t = t >>> 0, e || be(t, 8, this.length), _n.read(this, t, !0, 52, 8)
    };
    M.prototype.readDoubleBE = function(t, e) {
        return t = t >>> 0, e || be(t, 8, this.length), _n.read(this, t, !1, 52, 8)
    };

    function Oe(r, t, e, n, i, o) {
        if (!M.isBuffer(r)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
        if (e + n > r.length) throw new RangeError("Index out of range")
    }
    M.prototype.writeUintLE = M.prototype.writeUIntLE = function(t, e, n, i) {
        if (t = +t, e = e >>> 0, n = n >>> 0, !i) {
            let a = Math.pow(2, 8 * n) - 1;
            Oe(this, t, e, n, a, 0)
        }
        let o = 1,
            s = 0;
        for (this[e] = t & 255; ++s < n && (o *= 256);) this[e + s] = t / o & 255;
        return e + n
    };
    M.prototype.writeUintBE = M.prototype.writeUIntBE = function(t, e, n, i) {
        if (t = +t, e = e >>> 0, n = n >>> 0, !i) {
            let a = Math.pow(2, 8 * n) - 1;
            Oe(this, t, e, n, a, 0)
        }
        let o = n - 1,
            s = 1;
        for (this[e + o] = t & 255; --o >= 0 && (s *= 256);) this[e + o] = t / s & 255;
        return e + n
    };
    M.prototype.writeUint8 = M.prototype.writeUInt8 = function(t, e, n) {
        return t = +t, e = e >>> 0, n || Oe(this, t, e, 1, 255, 0), this[e] = t & 255, e + 1
    };
    M.prototype.writeUint16LE = M.prototype.writeUInt16LE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || Oe(this, t, e, 2, 65535, 0), this[e] = t & 255, this[e + 1] = t >>> 8, e + 2
    };
    M.prototype.writeUint16BE = M.prototype.writeUInt16BE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || Oe(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = t & 255, e + 2
    };
    M.prototype.writeUint32LE = M.prototype.writeUInt32LE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || Oe(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = t & 255, e + 4
    };
    M.prototype.writeUint32BE = M.prototype.writeUInt32BE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || Oe(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = t & 255, e + 4
    };

    function Hc(r, t, e, n, i) {
        Yc(t, n, i, r, e, 7);
        let o = Number(t & BigInt(4294967295));
        r[e++] = o, o = o >> 8, r[e++] = o, o = o >> 8, r[e++] = o, o = o >> 8, r[e++] = o;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return r[e++] = s, s = s >> 8, r[e++] = s, s = s >> 8, r[e++] = s, s = s >> 8, r[e++] = s, e
    }

    function $c(r, t, e, n, i) {
        Yc(t, n, i, r, e, 7);
        let o = Number(t & BigInt(4294967295));
        r[e + 7] = o, o = o >> 8, r[e + 6] = o, o = o >> 8, r[e + 5] = o, o = o >> 8, r[e + 4] = o;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return r[e + 3] = s, s = s >> 8, r[e + 2] = s, s = s >> 8, r[e + 1] = s, s = s >> 8, r[e] = s, e + 8
    }
    M.prototype.writeBigUInt64LE = Pr(function(t, e = 0) {
        return Hc(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
    });
    M.prototype.writeBigUInt64BE = Pr(function(t, e = 0) {
        return $c(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
    });
    M.prototype.writeIntLE = function(t, e, n, i) {
        if (t = +t, e = e >>> 0, !i) {
            let c = Math.pow(2, 8 * n - 1);
            Oe(this, t, e, n, c - 1, -c)
        }
        let o = 0,
            s = 1,
            a = 0;
        for (this[e] = t & 255; ++o < n && (s *= 256);) t < 0 && a === 0 && this[e + o - 1] !== 0 && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
        return e + n
    };
    M.prototype.writeIntBE = function(t, e, n, i) {
        if (t = +t, e = e >>> 0, !i) {
            let c = Math.pow(2, 8 * n - 1);
            Oe(this, t, e, n, c - 1, -c)
        }
        let o = n - 1,
            s = 1,
            a = 0;
        for (this[e + o] = t & 255; --o >= 0 && (s *= 256);) t < 0 && a === 0 && this[e + o + 1] !== 0 && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
        return e + n
    };
    M.prototype.writeInt8 = function(t, e, n) {
        return t = +t, e = e >>> 0, n || Oe(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = t & 255, e + 1
    };
    M.prototype.writeInt16LE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || Oe(this, t, e, 2, 32767, -32768), this[e] = t & 255, this[e + 1] = t >>> 8, e + 2
    };
    M.prototype.writeInt16BE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || Oe(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = t & 255, e + 2
    };
    M.prototype.writeInt32LE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || Oe(this, t, e, 4, 2147483647, -2147483648), this[e] = t & 255, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
    };
    M.prototype.writeInt32BE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || Oe(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = t & 255, e + 4
    };
    M.prototype.writeBigInt64LE = Pr(function(t, e = 0) {
        return Hc(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });
    M.prototype.writeBigInt64BE = Pr(function(t, e = 0) {
        return $c(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });

    function Vc(r, t, e, n, i, o) {
        if (e + n > r.length) throw new RangeError("Index out of range");
        if (e < 0) throw new RangeError("Index out of range")
    }

    function Gc(r, t, e, n, i) {
        return t = +t, e = e >>> 0, i || Vc(r, t, e, 4, 34028234663852886e22, -34028234663852886e22), _n.write(r, t, e, n, 23, 4), e + 4
    }
    M.prototype.writeFloatLE = function(t, e, n) {
        return Gc(this, t, e, !0, n)
    };
    M.prototype.writeFloatBE = function(t, e, n) {
        return Gc(this, t, e, !1, n)
    };

    function jc(r, t, e, n, i) {
        return t = +t, e = e >>> 0, i || Vc(r, t, e, 8, 17976931348623157e292, -17976931348623157e292), _n.write(r, t, e, n, 52, 8), e + 8
    }
    M.prototype.writeDoubleLE = function(t, e, n) {
        return jc(this, t, e, !0, n)
    };
    M.prototype.writeDoubleBE = function(t, e, n) {
        return jc(this, t, e, !1, n)
    };
    M.prototype.copy = function(t, e, n, i) {
        if (!M.isBuffer(t)) throw new TypeError("argument should be a Buffer");
        if (n || (n = 0), !i && i !== 0 && (i = this.length), e >= t.length && (e = t.length), e || (e = 0), i > 0 && i < n && (i = n), i === n || t.length === 0 || this.length === 0) return 0;
        if (e < 0) throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
        if (i < 0) throw new RangeError("sourceEnd out of bounds");
        i > this.length && (i = this.length), t.length - e < i - n && (i = t.length - e + n);
        let o = i - n;
        return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(e, n, i) : Uint8Array.prototype.set.call(t, this.subarray(n, i), e), o
    };
    M.prototype.fill = function(t, e, n, i) {
        if (typeof t == "string") {
            if (typeof e == "string" ? (i = e, e = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), i !== void 0 && typeof i != "string") throw new TypeError("encoding must be a string");
            if (typeof i == "string" && !M.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
            if (t.length === 1) {
                let s = t.charCodeAt(0);
                (i === "utf8" && s < 128 || i === "latin1") && (t = s)
            }
        } else typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
        if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
        if (n <= e) return this;
        e = e >>> 0, n = n === void 0 ? this.length : n >>> 0, t || (t = 0);
        let o;
        if (typeof t == "number")
            for (o = e; o < n; ++o) this[o] = t;
        else {
            let s = M.isBuffer(t) ? t : M.from(t, i),
                a = s.length;
            if (a === 0) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
            for (o = 0; o < n - e; ++o) this[o + e] = s[o % a]
        }
        return this
    };
    var An = {};

    function ca(r, t, e) {
        An[r] = class extends e {
            constructor() {
                super(), Object.defineProperty(this, "message", {
                    value: t.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }), this.name = `${this.name} [${r}]`, this.stack, delete this.name
            }
            get code() {
                return r
            }
            set code(i) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: i,
                    writable: !0
                })
            }
            toString() {
                return `${this.name} [${r}]: ${this.message}`
            }
        }
    }
    ca("ERR_BUFFER_OUT_OF_BOUNDS", function(r) {
        return r ? `${r} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
    }, RangeError);
    ca("ERR_INVALID_ARG_TYPE", function(r, t) {
        return `The "${r}" argument must be of type number. Received type ${typeof t}`
    }, TypeError);
    ca("ERR_OUT_OF_RANGE", function(r, t, e) {
        let n = `The value of "${r}" is out of range.`,
            i = e;
        return Number.isInteger(e) && Math.abs(e) > 2 ** 32 ? i = Nc(String(e)) : typeof e == "bigint" && (i = String(e), (e > BigInt(2) ** BigInt(32) || e < -(BigInt(2) ** BigInt(32))) && (i = Nc(i)), i += "n"), n += ` It must be ${t}. Received ${i}`, n
    }, RangeError);

    function Nc(r) {
        let t = "",
            e = r.length,
            n = r[0] === "-" ? 1 : 0;
        for (; e >= n + 4; e -= 3) t = `_${r.slice(e-3,e)}${t}`;
        return `${r.slice(0,e)}${t}`
    }

    function rd(r, t, e) {
        Rn(t, "offset"), (r[t] === void 0 || r[t + e] === void 0) && fi(t, r.length - (e + 1))
    }

    function Yc(r, t, e, n, i, o) {
        if (r > e || r < t) {
            let s = typeof t == "bigint" ? "n" : "",
                a;
            throw o > 3 ? t === 0 || t === BigInt(0) ? a = `>= 0${s} and < 2${s} ** ${(o+1)*8}${s}` : a = `>= -(2${s} ** ${(o+1)*8-1}${s}) and < 2 ** ${(o+1)*8-1}${s}` : a = `>= ${t}${s} and <= ${e}${s}`, new An.ERR_OUT_OF_RANGE("value", a, r)
        }
        rd(n, i, o)
    }

    function Rn(r, t) {
        if (typeof r != "number") throw new An.ERR_INVALID_ARG_TYPE(t, "number", r)
    }

    function fi(r, t, e) {
        throw Math.floor(r) !== r ? (Rn(r, e), new An.ERR_OUT_OF_RANGE(e || "offset", "an integer", r)) : t < 0 ? new An.ERR_BUFFER_OUT_OF_BOUNDS : new An.ERR_OUT_OF_RANGE(e || "offset", `>= ${e?1:0} and <= ${t}`, r)
    }
    var nd = /[^+/0-9A-Za-z-_]/g;

    function id(r) {
        if (r = r.split("=")[0], r = r.trim().replace(nd, ""), r.length < 2) return "";
        for (; r.length % 4 !== 0;) r = r + "=";
        return r
    }

    function sa(r, t) {
        t = t || 1 / 0;
        let e, n = r.length,
            i = null,
            o = [];
        for (let s = 0; s < n; ++s) {
            if (e = r.charCodeAt(s), e > 55295 && e < 57344) {
                if (!i) {
                    if (e > 56319) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue
                    } else if (s + 1 === n) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue
                    }
                    i = e;
                    continue
                }
                if (e < 56320) {
                    (t -= 3) > -1 && o.push(239, 191, 189), i = e;
                    continue
                }
                e = (i - 55296 << 10 | e - 56320) + 65536
            } else i && (t -= 3) > -1 && o.push(239, 191, 189);
            if (i = null, e < 128) {
                if ((t -= 1) < 0) break;
                o.push(e)
            } else if (e < 2048) {
                if ((t -= 2) < 0) break;
                o.push(e >> 6 | 192, e & 63 | 128)
            } else if (e < 65536) {
                if ((t -= 3) < 0) break;
                o.push(e >> 12 | 224, e >> 6 & 63 | 128, e & 63 | 128)
            } else if (e < 1114112) {
                if ((t -= 4) < 0) break;
                o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, e & 63 | 128)
            } else throw new Error("Invalid code point")
        }
        return o
    }

    function od(r) {
        let t = [];
        for (let e = 0; e < r.length; ++e) t.push(r.charCodeAt(e) & 255);
        return t
    }

    function sd(r, t) {
        let e, n, i, o = [];
        for (let s = 0; s < r.length && !((t -= 2) < 0); ++s) e = r.charCodeAt(s), n = e >> 8, i = e % 256, o.push(i), o.push(n);
        return o
    }

    function Zc(r) {
        return na.toByteArray(id(r))
    }

    function ao(r, t, e, n) {
        let i;
        for (i = 0; i < n && !(i + e >= t.length || i >= r.length); ++i) t[i + e] = r[i];
        return i
    }

    function er(r, t) {
        return r instanceof t || r != null && r.constructor != null && r.constructor.name != null && r.constructor.name === t.name
    }

    function fa(r) {
        return r !== r
    }
    var ad = function() {
        let r = "0123456789abcdef",
            t = new Array(256);
        for (let e = 0; e < 16; ++e) {
            let n = e * 16;
            for (let i = 0; i < 16; ++i) t[n + i] = r[e] + r[i]
        }
        return t
    }();

    function Pr(r) {
        return typeof BigInt > "u" ? ud : r
    }

    function ud() {
        throw new Error("BigInt not supported")
    }
});

function hi(r) {
    if (!Number.isSafeInteger(r) || r < 0) throw new Error(`positive integer expected, not ${r}`)
}

function cd(r) {
    return r instanceof Uint8Array || r != null && typeof r == "object" && r.constructor.name === "Uint8Array"
}

function Cr(r, ...t) {
    if (!cd(r)) throw new Error("Uint8Array expected");
    if (t.length > 0 && !t.includes(r.length)) throw new Error(`Uint8Array expected of length ${t}, not of length=${r.length}`)
}

function Jc(r) {
    if (typeof r != "function" || typeof r.create != "function") throw new Error("Hash should be wrapped by utils.wrapConstructor");
    hi(r.outputLen), hi(r.blockLen)
}

function yr(r, t = !0) {
    if (r.destroyed) throw new Error("Hash instance has been destroyed");
    if (t && r.finished) throw new Error("Hash#digest() has already been called")
}

function uo(r, t) {
    Cr(r);
    let e = t.outputLen;
    if (r.length < e) throw new Error(`digestInto() expects output buffer of length at least ${e}`)
}
var li = yt(() => {
    "use strict"
});
var co, Qc = yt(() => {
    "use strict";
    co = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0
});

function la(r) {
    for (let t = 0; t < r.length; t++) r[t] = fd(r[t])
}

function da(r) {
    if (typeof r != "string") throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
    return new Uint8Array(new TextEncoder().encode(r))
}

function Or(r) {
    return typeof r == "string" && (r = da(r)), Cr(r), r
}

function ho(...r) {
    let t = 0;
    for (let n = 0; n < r.length; n++) {
        let i = r[n];
        Cr(i), t += i.length
    }
    let e = new Uint8Array(t);
    for (let n = 0, i = 0; n < r.length; n++) {
        let o = r[n];
        e.set(o, i), i += o.length
    }
    return e
}

function Tn(r) {
    let t = n => r().update(Or(n)).digest(),
        e = r();
    return t.outputLen = e.outputLen, t.blockLen = e.blockLen, t.create = () => r(), t
}

function ef(r) {
    let t = (n, i) => r(i).update(Or(n)).digest(),
        e = r({});
    return t.outputLen = e.outputLen, t.blockLen = e.blockLen, t.create = n => r(n), t
}

function lo(r = 32) {
    if (co && typeof co.getRandomValues == "function") return co.getRandomValues(new Uint8Array(r));
    throw new Error("crypto.getRandomValues must be defined")
}
var tf, fo, Ye, ha, fd, Fr, Yw, Nr = yt(() => {
    "use strict";
    Qc();
    li();
    tf = r => new Uint32Array(r.buffer, r.byteOffset, Math.floor(r.byteLength / 4)), fo = r => new DataView(r.buffer, r.byteOffset, r.byteLength), Ye = (r, t) => r << 32 - t | r >>> t, ha = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, fd = r => r << 24 & 4278190080 | r << 8 & 16711680 | r >>> 8 & 65280 | r >>> 24 & 255;
    Fr = class {
        clone() {
            return this._cloneInto()
        }
    }, Yw = {}.toString
});

function hd(r, t, e, n) {
    if (typeof r.setBigUint64 == "function") return r.setBigUint64(t, e, n);
    let i = BigInt(32),
        o = BigInt(4294967295),
        s = Number(e >> i & o),
        a = Number(e & o),
        c = n ? 4 : 0,
        d = n ? 0 : 4;
    r.setUint32(t + c, s, n), r.setUint32(t + d, a, n)
}
var rf, nf, Mn, pa = yt(() => {
    "use strict";
    li();
    Nr();
    rf = (r, t, e) => r & t ^ ~r & e, nf = (r, t, e) => r & t ^ r & e ^ t & e, Mn = class extends Fr {
        constructor(t, e, n, i) {
            super(), this.blockLen = t, this.outputLen = e, this.padOffset = n, this.isLE = i, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = fo(this.buffer)
        }
        update(t) {
            yr(this);
            let {
                view: e,
                buffer: n,
                blockLen: i
            } = this;
            t = Or(t);
            let o = t.length;
            for (let s = 0; s < o;) {
                let a = Math.min(i - this.pos, o - s);
                if (a === i) {
                    let c = fo(t);
                    for (; i <= o - s; s += i) this.process(c, s);
                    continue
                }
                n.set(t.subarray(s, s + a), this.pos), this.pos += a, s += a, this.pos === i && (this.process(e, 0), this.pos = 0)
            }
            return this.length += t.length, this.roundClean(), this
        }
        digestInto(t) {
            yr(this), uo(t, this), this.finished = !0;
            let {
                buffer: e,
                view: n,
                blockLen: i,
                isLE: o
            } = this, {
                pos: s
            } = this;
            e[s++] = 128, this.buffer.subarray(s).fill(0), this.padOffset > i - s && (this.process(n, 0), s = 0);
            for (let b = s; b < i; b++) e[b] = 0;
            hd(n, i - 8, BigInt(this.length * 8), o), this.process(n, 0);
            let a = fo(t),
                c = this.outputLen;
            if (c % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
            let d = c / 4,
                g = this.get();
            if (d > g.length) throw new Error("_sha2: outputLen bigger than state");
            for (let b = 0; b < d; b++) a.setUint32(4 * b, g[b], o)
        }
        digest() {
            let {
                buffer: t,
                outputLen: e
            } = this;
            this.digestInto(t);
            let n = t.slice(0, e);
            return this.destroy(), n
        }
        _cloneInto(t) {
            t || (t = new this.constructor), t.set(...this.get());
            let {
                blockLen: e,
                buffer: n,
                length: i,
                finished: o,
                destroyed: s,
                pos: a
            } = this;
            return t.length = i, t.pos = a, t.finished = o, t.destroyed = s, i % e && t.buffer.set(n), t
        }
    }
});

function of (r, t = !1) {
    return t ? {
        h: Number(r & po),
        l: Number(r >> ya & po)
    } : {
        h: Number(r >> ya & po) | 0,
        l: Number(r & po) | 0
    }
}

function ga(r, t = !1) {
    let e = new Uint32Array(r.length),
        n = new Uint32Array(r.length);
    for (let i = 0; i < r.length; i++) {
        let {
            h: o,
            l: s
        } = of (r[i], t);
        [e[i], n[i]] = [o, s]
    }
    return [e, n]
}

function Ed(r, t, e, n) {
    let i = (t >>> 0) + (n >>> 0);
    return {
        h: r + e + (i / 2 ** 32 | 0) | 0,
        l: i | 0
    }
}
var po, ya, ld, dd, pd, yd, gd, md, wd, bd, xd, ma, wa, ba, xa, Bd, kd, vd, Id, Sd, Ad, _d, ct, Ea = yt(() => {
    "use strict";
    po = BigInt(4294967295), ya = BigInt(32);
    ld = (r, t) => BigInt(r >>> 0) << ya | BigInt(t >>> 0), dd = (r, t, e) => r >>> e, pd = (r, t, e) => r << 32 - e | t >>> e, yd = (r, t, e) => r >>> e | t << 32 - e, gd = (r, t, e) => r << 32 - e | t >>> e, md = (r, t, e) => r << 64 - e | t >>> e - 32, wd = (r, t, e) => r >>> e - 32 | t << 64 - e, bd = (r, t) => t, xd = (r, t) => r, ma = (r, t, e) => r << e | t >>> 32 - e, wa = (r, t, e) => t << e | r >>> 32 - e, ba = (r, t, e) => t << e - 32 | r >>> 64 - e, xa = (r, t, e) => r << e - 32 | t >>> 64 - e;
    Bd = (r, t, e) => (r >>> 0) + (t >>> 0) + (e >>> 0), kd = (r, t, e, n) => t + e + n + (r / 2 ** 32 | 0) | 0, vd = (r, t, e, n) => (r >>> 0) + (t >>> 0) + (e >>> 0) + (n >>> 0), Id = (r, t, e, n, i) => t + e + n + i + (r / 2 ** 32 | 0) | 0, Sd = (r, t, e, n, i) => (r >>> 0) + (t >>> 0) + (e >>> 0) + (n >>> 0) + (i >>> 0), Ad = (r, t, e, n, i, o) => t + e + n + i + o + (r / 2 ** 32 | 0) | 0, _d = {
        fromBig: of ,
        split: ga,
        toBig: ld,
        shrSH: dd,
        shrSL: pd,
        rotrSH: yd,
        rotrSL: gd,
        rotrBH: md,
        rotrBL: wd,
        rotr32H: bd,
        rotr32L: xd,
        rotlSH: ma,
        rotlSL: wa,
        rotlBH: ba,
        rotlBL: xa,
        add: Ed,
        add3L: Bd,
        add3H: kd,
        add4L: vd,
        add4H: Id,
        add5H: Ad,
        add5L: Sd
    }, ct = _d
});
var Rd, Ld, Dr, qr, Ba, ka, sf = yt(() => {
    "use strict";
    pa();
    Ea();
    Nr();
    [Rd, Ld] = ct.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map(r => BigInt(r))), Dr = new Uint32Array(80), qr = new Uint32Array(80), Ba = class extends Mn {
        constructor() {
            super(128, 64, 16, !1), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209
        }
        get() {
            let {
                Ah: t,
                Al: e,
                Bh: n,
                Bl: i,
                Ch: o,
                Cl: s,
                Dh: a,
                Dl: c,
                Eh: d,
                El: g,
                Fh: b,
                Fl: _,
                Gh: I,
                Gl: S,
                Hh: v,
                Hl: A
            } = this;
            return [t, e, n, i, o, s, a, c, d, g, b, _, I, S, v, A]
        }
        set(t, e, n, i, o, s, a, c, d, g, b, _, I, S, v, A) {
            this.Ah = t | 0, this.Al = e | 0, this.Bh = n | 0, this.Bl = i | 0, this.Ch = o | 0, this.Cl = s | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = d | 0, this.El = g | 0, this.Fh = b | 0, this.Fl = _ | 0, this.Gh = I | 0, this.Gl = S | 0, this.Hh = v | 0, this.Hl = A | 0
        }
        process(t, e) {
            for (let N = 0; N < 16; N++, e += 4) Dr[N] = t.getUint32(e), qr[N] = t.getUint32(e += 4);
            for (let N = 16; N < 80; N++) {
                let G = Dr[N - 15] | 0,
                    H = qr[N - 15] | 0,
                    W = ct.rotrSH(G, H, 1) ^ ct.rotrSH(G, H, 8) ^ ct.shrSH(G, H, 7),
                    J = ct.rotrSL(G, H, 1) ^ ct.rotrSL(G, H, 8) ^ ct.shrSL(G, H, 7),
                    et = Dr[N - 2] | 0,
                    mt = qr[N - 2] | 0,
                    dt = ct.rotrSH(et, mt, 19) ^ ct.rotrBH(et, mt, 61) ^ ct.shrSH(et, mt, 6),
                    Q = ct.rotrSL(et, mt, 19) ^ ct.rotrBL(et, mt, 61) ^ ct.shrSL(et, mt, 6),
                    Bt = ct.add4L(J, Q, qr[N - 7], qr[N - 16]),
                    B = ct.add4H(Bt, W, dt, Dr[N - 7], Dr[N - 16]);
                Dr[N] = B | 0, qr[N] = Bt | 0
            }
            let {
                Ah: n,
                Al: i,
                Bh: o,
                Bl: s,
                Ch: a,
                Cl: c,
                Dh: d,
                Dl: g,
                Eh: b,
                El: _,
                Fh: I,
                Fl: S,
                Gh: v,
                Gl: A,
                Hh: T,
                Hl: z
            } = this;
            for (let N = 0; N < 80; N++) {
                let G = ct.rotrSH(b, _, 14) ^ ct.rotrSH(b, _, 18) ^ ct.rotrBH(b, _, 41),
                    H = ct.rotrSL(b, _, 14) ^ ct.rotrSL(b, _, 18) ^ ct.rotrBL(b, _, 41),
                    W = b & I ^ ~b & v,
                    J = _ & S ^ ~_ & A,
                    et = ct.add5L(z, H, J, Ld[N], qr[N]),
                    mt = ct.add5H(et, T, G, W, Rd[N], Dr[N]),
                    dt = et | 0,
                    Q = ct.rotrSH(n, i, 28) ^ ct.rotrBH(n, i, 34) ^ ct.rotrBH(n, i, 39),
                    Bt = ct.rotrSL(n, i, 28) ^ ct.rotrBL(n, i, 34) ^ ct.rotrBL(n, i, 39),
                    B = n & o ^ n & a ^ o & a,
                    u = i & s ^ i & c ^ s & c;
                T = v | 0, z = A | 0, v = I | 0, A = S | 0, I = b | 0, S = _ | 0, {
                    h: b,
                    l: _
                } = ct.add(d | 0, g | 0, mt | 0, dt | 0), d = a | 0, g = c | 0, a = o | 0, c = s | 0, o = n | 0, s = i | 0;
                let h = ct.add3L(dt, Bt, u);
                n = ct.add3H(h, mt, Q, B), i = h | 0
            }({
                h: n,
                l: i
            } = ct.add(this.Ah | 0, this.Al | 0, n | 0, i | 0)), {
                h: o,
                l: s
            } = ct.add(this.Bh | 0, this.Bl | 0, o | 0, s | 0), {
                h: a,
                l: c
            } = ct.add(this.Ch | 0, this.Cl | 0, a | 0, c | 0), {
                h: d,
                l: g
            } = ct.add(this.Dh | 0, this.Dl | 0, d | 0, g | 0), {
                h: b,
                l: _
            } = ct.add(this.Eh | 0, this.El | 0, b | 0, _ | 0), {
                h: I,
                l: S
            } = ct.add(this.Fh | 0, this.Fl | 0, I | 0, S | 0), {
                h: v,
                l: A
            } = ct.add(this.Gh | 0, this.Gl | 0, v | 0, A | 0), {
                h: T,
                l: z
            } = ct.add(this.Hh | 0, this.Hl | 0, T | 0, z | 0), this.set(n, i, o, s, a, c, d, g, b, _, I, S, v, A, T, z)
        }
        roundClean() {
            Dr.fill(0), qr.fill(0)
        }
        destroy() {
            this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        }
    }, ka = Tn(() => new Ba)
});
var go = {};
io(go, {
    abytes: () => Un,
    bitGet: () => Od,
    bitLen: () => Fd,
    bitMask: () => di,
    bitSet: () => Nd,
    bytesToHex: () => mr,
    bytesToNumberBE: () => wr,
    bytesToNumberLE: () => Kr,
    concatBytes: () => br,
    createHmacDrbg: () => Sa,
    ensureBytes: () => jt,
    equalBytes: () => Pd,
    hexToBytes: () => un,
    hexToNumber: () => Ia,
    isBytes: () => zr,
    numberToBytesBE: () => Wr,
    numberToBytesLE: () => cn,
    numberToHexUnpadded: () => ff,
    numberToVarBytesBE: () => Ud,
    utf8ToBytes: () => Cd,
    validateObject: () => rr
});

function zr(r) {
    return r instanceof Uint8Array || r != null && typeof r == "object" && r.constructor.name === "Uint8Array"
}

function Un(r) {
    if (!zr(r)) throw new Error("Uint8Array expected")
}

function mr(r) {
    Un(r);
    let t = "";
    for (let e = 0; e < r.length; e++) t += Md[r[e]];
    return t
}

function ff(r) {
    let t = r.toString(16);
    return t.length & 1 ? `0${t}` : t
}

function Ia(r) {
    if (typeof r != "string") throw new Error("hex string expected, got " + typeof r);
    return BigInt(r === "" ? "0" : `0x${r}`)
}

function af(r) {
    if (r >= gr._0 && r <= gr._9) return r - gr._0;
    if (r >= gr._A && r <= gr._F) return r - (gr._A - 10);
    if (r >= gr._a && r <= gr._f) return r - (gr._a - 10)
}

function un(r) {
    if (typeof r != "string") throw new Error("hex string expected, got " + typeof r);
    let t = r.length,
        e = t / 2;
    if (t % 2) throw new Error("padded hex string expected, got unpadded hex of length " + t);
    let n = new Uint8Array(e);
    for (let i = 0, o = 0; i < e; i++, o += 2) {
        let s = af(r.charCodeAt(o)),
            a = af(r.charCodeAt(o + 1));
        if (s === void 0 || a === void 0) {
            let c = r[o] + r[o + 1];
            throw new Error('hex string expected, got non-hex character "' + c + '" at index ' + o)
        }
        n[i] = s * 16 + a
    }
    return n
}

function wr(r) {
    return Ia(mr(r))
}

function Kr(r) {
    return Un(r), Ia(mr(Uint8Array.from(r).reverse()))
}

function Wr(r, t) {
    return un(r.toString(16).padStart(t * 2, "0"))
}

function cn(r, t) {
    return Wr(r, t).reverse()
}

function Ud(r) {
    return un(ff(r))
}

function jt(r, t, e) {
    let n;
    if (typeof t == "string") try {
            n = un(t)
        } catch (o) {
            throw new Error(`${r} must be valid hex string, got "${t}". Cause: ${o}`)
        } else if (zr(t)) n = Uint8Array.from(t);
        else throw new Error(`${r} must be hex string or Uint8Array`);
    let i = n.length;
    if (typeof e == "number" && i !== e) throw new Error(`${r} expected ${e} bytes, got ${i}`);
    return n
}

function br(...r) {
    let t = 0;
    for (let n = 0; n < r.length; n++) {
        let i = r[n];
        Un(i), t += i.length
    }
    let e = new Uint8Array(t);
    for (let n = 0, i = 0; n < r.length; n++) {
        let o = r[n];
        e.set(o, i), i += o.length
    }
    return e
}

function Pd(r, t) {
    if (r.length !== t.length) return !1;
    let e = 0;
    for (let n = 0; n < r.length; n++) e |= r[n] ^ t[n];
    return e === 0
}

function Cd(r) {
    if (typeof r != "string") throw new Error(`utf8ToBytes expected string, got ${typeof r}`);
    return new Uint8Array(new TextEncoder().encode(r))
}

function Fd(r) {
    let t;
    for (t = 0; r > cf; r >>= yo, t += 1);
    return t
}

function Od(r, t) {
    return r >> BigInt(t) & yo
}

function Nd(r, t, e) {
    return r | (e ? yo : cf) << BigInt(t)
}

function Sa(r, t, e) {
    if (typeof r != "number" || r < 2) throw new Error("hashLen must be a number");
    if (typeof t != "number" || t < 2) throw new Error("qByteLen must be a number");
    if (typeof e != "function") throw new Error("hmacFn must be a function");
    let n = va(r),
        i = va(r),
        o = 0,
        s = () => {
            n.fill(1), i.fill(0), o = 0
        },
        a = (...b) => e(i, n, ...b),
        c = (b = va()) => {
            i = a(uf([0]), b), n = a(), b.length !== 0 && (i = a(uf([1]), b), n = a())
        },
        d = () => {
            if (o++ >= 1e3) throw new Error("drbg: tried 1000 values");
            let b = 0,
                _ = [];
            for (; b < t;) {
                n = a();
                let I = n.slice();
                _.push(I), b += n.length
            }
            return br(..._)
        };
    return (b, _) => {
        s(), c(b);
        let I;
        for (; !(I = _(d()));) c();
        return s(), I
    }
}

function rr(r, t, e = {}) {
    let n = (i, o, s) => {
        let a = Dd[o];
        if (typeof a != "function") throw new Error(`Invalid validator "${o}", expected function`);
        let c = r[i];
        if (!(s && c === void 0) && !a(c, r)) throw new Error(`Invalid param ${String(i)}=${c} (${typeof c}), expected ${o}`)
    };
    for (let [i, o] of Object.entries(t)) n(i, o, !1);
    for (let [i, o] of Object.entries(e)) n(i, o, !0);
    return r
}
var cf, yo, Td, Md, gr, di, va, uf, Dd, fn = yt(() => {
    "use strict";
    cf = BigInt(0), yo = BigInt(1), Td = BigInt(2);
    Md = Array.from({
        length: 256
    }, (r, t) => t.toString(16).padStart(2, "0"));
    gr = {
        _0: 48,
        _9: 57,
        _A: 65,
        _F: 70,
        _a: 97,
        _f: 102
    };
    di = r => (Td << BigInt(r - 1)) - yo, va = r => new Uint8Array(r), uf = r => Uint8Array.from(r);
    Dd = {
        bigint: r => typeof r == "bigint",
        function: r => typeof r == "function",
        boolean: r => typeof r == "boolean",
        string: r => typeof r == "string",
        stringOrUint8Array: r => typeof r == "string" || zr(r),
        isSafeInteger: r => Number.isSafeInteger(r),
        array: r => Array.isArray(r),
        field: (r, t) => t.Fp.isValid(r),
        hash: r => typeof r == "function" && Number.isSafeInteger(r.outputLen)
    }
});

function _t(r, t) {
    let e = r % t;
    return e >= we ? e : t + e
}

function Wd(r, t, e) {
    if (e <= we || t < we) throw new Error("Expected power/modulo > 0");
    if (e === Ut) return we;
    let n = Ut;
    for (; t > we;) t & Ut && (n = n * r % e), r = r * r % e, t >>= Ut;
    return n
}

function Pt(r, t, e) {
    let n = r;
    for (; t-- > we;) n *= n, n %= e;
    return n
}

function mo(r, t) {
    if (r === we || t <= we) throw new Error(`invert: expected positive integers, got n=${r} mod=${t}`);
    let e = _t(r, t),
        n = t,
        i = we,
        o = Ut,
        s = Ut,
        a = we;
    for (; e !== we;) {
        let d = n / e,
            g = n % e,
            b = i - s * d,
            _ = o - a * d;
        n = e, e = g, i = s, o = a, s = b, a = _
    }
    if (n !== Ut) throw new Error("invert: does not exist");
    return _t(i, t)
}

function Hd(r) {
    let t = (r - Ut) / hn,
        e, n, i;
    for (e = r - Ut, n = 0; e % hn === we; e /= hn, n++);
    for (i = hn; i < r && Wd(i, t, r) !== r - Ut; i++);
    if (n === 1) {
        let s = (r + Ut) / Aa;
        return function(c, d) {
            let g = c.pow(d, s);
            if (!c.eql(c.sqr(g), d)) throw new Error("Cannot find square root");
            return g
        }
    }
    let o = (e + Ut) / hn;
    return function(a, c) {
        if (a.pow(c, t) === a.neg(a.ONE)) throw new Error("Cannot find square root");
        let d = n,
            g = a.pow(a.mul(a.ONE, i), e),
            b = a.pow(c, o),
            _ = a.pow(c, e);
        for (; !a.eql(_, a.ONE);) {
            if (a.eql(_, a.ZERO)) return a.ZERO;
            let I = 1;
            for (let v = a.sqr(_); I < d && !a.eql(v, a.ONE); I++) v = a.sqr(v);
            let S = a.pow(g, Ut << BigInt(d - I - 1));
            g = a.sqr(S), b = a.mul(b, S), _ = a.mul(_, g), d = I
        }
        return b
    }
}

function $d(r) {
    if (r % Aa === qd) {
        let t = (r + Ut) / Aa;
        return function(n, i) {
            let o = n.pow(i, t);
            if (!n.eql(n.sqr(o), i)) throw new Error("Cannot find square root");
            return o
        }
    }
    if (r % lf === hf) {
        let t = (r - hf) / lf;
        return function(n, i) {
            let o = n.mul(i, hn),
                s = n.pow(o, t),
                a = n.mul(i, s),
                c = n.mul(n.mul(a, hn), s),
                d = n.mul(a, n.sub(c, n.ONE));
            if (!n.eql(n.sqr(d), i)) throw new Error("Cannot find square root");
            return d
        }
    }
    return r % Kd, Hd(r)
}

function _a(r) {
    let t = {
            ORDER: "bigint",
            MASK: "bigint",
            BYTES: "isSafeInteger",
            BITS: "isSafeInteger"
        },
        e = Vd.reduce((n, i) => (n[i] = "function", n), t);
    return rr(r, e)
}

function Gd(r, t, e) {
    if (e < we) throw new Error("Expected power > 0");
    if (e === we) return r.ONE;
    if (e === Ut) return t;
    let n = r.ONE,
        i = t;
    for (; e > we;) e & Ut && (n = r.mul(n, i)), i = r.sqr(i), e >>= Ut;
    return n
}

function jd(r, t) {
    let e = new Array(t.length),
        n = t.reduce((o, s, a) => r.is0(s) ? o : (e[a] = o, r.mul(o, s)), r.ONE),
        i = r.inv(n);
    return t.reduceRight((o, s, a) => r.is0(s) ? o : (e[a] = r.mul(o, e[a]), r.mul(o, s)), i), e
}

function Ra(r, t) {
    let e = t !== void 0 ? t : r.toString(2).length,
        n = Math.ceil(e / 8);
    return {
        nBitLength: e,
        nByteLength: n
    }
}

function wo(r, t, e = !1, n = {}) {
    if (r <= we) throw new Error(`Expected Field ORDER > 0, got ${r}`);
    let {
        nBitLength: i,
        nByteLength: o
    } = Ra(r, t);
    if (o > 2048) throw new Error("Field lengths over 2048 bytes are not supported");
    let s = $d(r),
        a = Object.freeze({
            ORDER: r,
            BITS: i,
            BYTES: o,
            MASK: di(i),
            ZERO: we,
            ONE: Ut,
            create: c => _t(c, r),
            isValid: c => {
                if (typeof c != "bigint") throw new Error(`Invalid field element: expected bigint, got ${typeof c}`);
                return we <= c && c < r
            },
            is0: c => c === we,
            isOdd: c => (c & Ut) === Ut,
            neg: c => _t(-c, r),
            eql: (c, d) => c === d,
            sqr: c => _t(c * c, r),
            add: (c, d) => _t(c + d, r),
            sub: (c, d) => _t(c - d, r),
            mul: (c, d) => _t(c * d, r),
            pow: (c, d) => Gd(a, c, d),
            div: (c, d) => _t(c * mo(d, r), r),
            sqrN: c => c * c,
            addN: (c, d) => c + d,
            subN: (c, d) => c - d,
            mulN: (c, d) => c * d,
            inv: c => mo(c, r),
            sqrt: n.sqrt || (c => s(a, c)),
            invertBatch: c => jd(a, c),
            cmov: (c, d, g) => g ? d : c,
            toBytes: c => e ? cn(c, o) : Wr(c, o),
            fromBytes: c => {
                if (c.length !== o) throw new Error(`Fp.fromBytes: expected ${o}, got ${c.length}`);
                return e ? Kr(c) : wr(c)
            }
        });
    return Object.freeze(a)
}

function pf(r, t) {
    if (!r.isOdd) throw new Error("Field doesn't have isOdd");
    let e = r.sqrt(t);
    return r.isOdd(e) ? r.neg(e) : e
}

function yf(r) {
    if (typeof r != "bigint") throw new Error("field order must be bigint");
    let t = r.toString(2).length;
    return Math.ceil(t / 8)
}

function La(r) {
    let t = yf(r);
    return t + Math.ceil(t / 2)
}

function gf(r, t, e = !1) {
    let n = r.length,
        i = yf(t),
        o = La(t);
    if (n < 16 || n < o || n > 1024) throw new Error(`expected ${o}-1024 bytes of input, got ${n}`);
    let s = e ? wr(r) : Kr(r),
        a = _t(s, t - Ut) + Ut;
    return e ? cn(a, i) : Wr(a, i)
}
var we, Ut, hn, qd, Aa, hf, lf, zd, Kd, df, Vd, Pn = yt(() => {
    "use strict";
    fn();
    we = BigInt(0), Ut = BigInt(1), hn = BigInt(2), qd = BigInt(3), Aa = BigInt(4), hf = BigInt(5), lf = BigInt(8), zd = BigInt(9), Kd = BigInt(16);
    df = (r, t) => (_t(r, t) & Ut) === Ut, Vd = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"]
});

function bo(r, t) {
    let e = (i, o) => {
            let s = o.negate();
            return i ? s : o
        },
        n = i => {
            let o = Math.ceil(t / i) + 1,
                s = 2 ** (i - 1);
            return {
                windows: o,
                windowSize: s
            }
        };
    return {
        constTimeNegate: e,
        unsafeLadder(i, o) {
            let s = r.ZERO,
                a = i;
            for (; o > Zd;) o & Ta && (s = s.add(a)), a = a.double(), o >>= Ta;
            return s
        },
        precomputeWindow(i, o) {
            let {
                windows: s,
                windowSize: a
            } = n(o), c = [], d = i, g = d;
            for (let b = 0; b < s; b++) {
                g = d, c.push(g);
                for (let _ = 1; _ < a; _++) g = g.add(d), c.push(g);
                d = g.double()
            }
            return c
        },
        wNAF(i, o, s) {
            let {
                windows: a,
                windowSize: c
            } = n(i), d = r.ZERO, g = r.BASE, b = BigInt(2 ** i - 1), _ = 2 ** i, I = BigInt(i);
            for (let S = 0; S < a; S++) {
                let v = S * c,
                    A = Number(s & b);
                s >>= I, A > c && (A -= _, s += Ta);
                let T = v,
                    z = v + Math.abs(A) - 1,
                    N = S % 2 !== 0,
                    G = A < 0;
                A === 0 ? g = g.add(e(N, o[T])) : d = d.add(e(G, o[z]))
            }
            return {
                p: d,
                f: g
            }
        },
        wNAFCached(i, o, s, a) {
            let c = i._WINDOW_SIZE || 1,
                d = o.get(i);
            return d || (d = this.precomputeWindow(i, c), c !== 1 && o.set(i, a(d))), this.wNAF(c, d, s)
        }
    }
}

function pi(r) {
    return _a(r.Fp), rr(r, {
        n: "bigint",
        h: "bigint",
        Gx: "field",
        Gy: "field"
    }, {
        nBitLength: "isSafeInteger",
        nByteLength: "isSafeInteger"
    }), Object.freeze(ft(st(st({}, Ra(r.n, r.nBitLength)), r), {
        p: r.Fp.ORDER
    }))
}
var Zd, Ta, Ma = yt(() => {
    "use strict";
    Pn();
    fn();
    Zd = BigInt(0), Ta = BigInt(1)
});

function Qd(r) {
    let t = pi(r);
    return rr(r, {
        hash: "function",
        a: "bigint",
        d: "bigint",
        randomBytes: "function"
    }, {
        adjustScalarBytes: "function",
        domain: "function",
        uvRatio: "function",
        mapToCurve: "function"
    }), Object.freeze(st({}, t))
}

function Eo(r) {
    let t = Qd(r),
        {
            Fp: e,
            n,
            prehash: i,
            hash: o,
            randomBytes: s,
            nByteLength: a,
            h: c
        } = t,
        d = xo << BigInt(a * 8) - We,
        g = e.create,
        b = t.uvRatio || ((y, w) => {
            try {
                return {
                    isValid: !0,
                    value: e.sqrt(y * e.inv(w))
                }
            } catch {
                return {
                    isValid: !1,
                    value: Ze
                }
            }
        }),
        _ = t.adjustScalarBytes || (y => y),
        I = t.domain || ((y, w, E) => {
            if (w.length || E) throw new Error("Contexts/pre-hash are not supported");
            return y
        }),
        S = y => typeof y == "bigint" && Ze < y,
        v = (y, w) => S(y) && S(w) && y < w,
        A = y => y === Ze || v(y, d);

    function T(y, w) {
        if (v(y, w)) return y;
        throw new Error(`Expected valid scalar < ${w}, got ${typeof y} ${y}`)
    }

    function z(y) {
        return y === Ze ? y : T(y, n)
    }
    let N = new Map;

    function G(y) {
        if (!(y instanceof H)) throw new Error("ExtendedPoint expected")
    }
    class H {
        constructor(w, E, m, f) {
            if (this.ex = w, this.ey = E, this.ez = m, this.et = f, !A(w)) throw new Error("x required");
            if (!A(E)) throw new Error("y required");
            if (!A(m)) throw new Error("z required");
            if (!A(f)) throw new Error("t required")
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static fromAffine(w) {
            if (w instanceof H) throw new Error("extended point not allowed");
            let {
                x: E,
                y: m
            } = w || {};
            if (!A(E) || !A(m)) throw new Error("invalid affine point");
            return new H(E, m, We, g(E * m))
        }
        static normalizeZ(w) {
            let E = e.invertBatch(w.map(m => m.ez));
            return w.map((m, f) => m.toAffine(E[f])).map(H.fromAffine)
        }
        _setWindowSize(w) {
            this._WINDOW_SIZE = w, N.delete(this)
        }
        assertValidity() {
            let {
                a: w,
                d: E
            } = t;
            if (this.is0()) throw new Error("bad point: ZERO");
            let {
                ex: m,
                ey: f,
                ez: x,
                et: F
            } = this, K = g(m * m), q = g(f * f), V = g(x * x), rt = g(V * V), ot = g(K * w), Lt = g(V * g(ot + q)), at = g(rt + g(E * g(K * q)));
            if (Lt !== at) throw new Error("bad point: equation left != right (1)");
            let ut = g(m * f),
                me = g(x * F);
            if (ut !== me) throw new Error("bad point: equation left != right (2)")
        }
        equals(w) {
            G(w);
            let {
                ex: E,
                ey: m,
                ez: f
            } = this, {
                ex: x,
                ey: F,
                ez: K
            } = w, q = g(E * K), V = g(x * f), rt = g(m * K), ot = g(F * f);
            return q === V && rt === ot
        }
        is0() {
            return this.equals(H.ZERO)
        }
        negate() {
            return new H(g(-this.ex), this.ey, this.ez, g(-this.et))
        }
        double() {
            let {
                a: w
            } = t, {
                ex: E,
                ey: m,
                ez: f
            } = this, x = g(E * E), F = g(m * m), K = g(xo * g(f * f)), q = g(w * x), V = E + m, rt = g(g(V * V) - x - F), ot = q + F, Lt = ot - K, at = q - F, ut = g(rt * Lt), me = g(ot * at), kt = g(rt * at), At = g(Lt * ot);
            return new H(ut, me, At, kt)
        }
        add(w) {
            G(w);
            let {
                a: E,
                d: m
            } = t, {
                ex: f,
                ey: x,
                ez: F,
                et: K
            } = this, {
                ex: q,
                ey: V,
                ez: rt,
                et: ot
            } = w;
            if (E === BigInt(-1)) {
                let ii = g((x - f) * (V + q)),
                    Nt = g((x + f) * (V - q)),
                    Mt = g(Nt - ii);
                if (Mt === Ze) return this.double();
                let oi = g(F * xo * ot),
                    Dt = g(K * xo * rt),
                    qt = Dt + oi,
                    si = Nt + ii,
                    zt = Dt - oi,
                    $t = g(qt * Mt),
                    eo = g(si * zt),
                    Vt = g(qt * zt),
                    Gt = g(Mt * si);
                return new H($t, eo, Gt, Vt)
            }
            let Lt = g(f * q),
                at = g(x * V),
                ut = g(K * m * ot),
                me = g(F * rt),
                kt = g((f + x) * (q + V) - Lt - at),
                At = me - ut,
                Ur = me + ut,
                Ot = g(at - E * Lt),
                Kt = g(kt * At),
                to = g(Ur * Ot),
                Wt = g(kt * Ot),
                Ht = g(At * Ur);
            return new H(Kt, to, Ht, Wt)
        }
        subtract(w) {
            return this.add(w.negate())
        }
        wNAF(w) {
            return et.wNAFCached(this, N, w, H.normalizeZ)
        }
        multiply(w) {
            let {
                p: E,
                f: m
            } = this.wNAF(T(w, n));
            return H.normalizeZ([E, m])[0]
        }
        multiplyUnsafe(w) {
            let E = z(w);
            return E === Ze ? J : this.equals(J) || E === We ? this : this.equals(W) ? this.wNAF(E).p : et.unsafeLadder(this, E)
        }
        isSmallOrder() {
            return this.multiplyUnsafe(c).is0()
        }
        isTorsionFree() {
            return et.unsafeLadder(this, n).is0()
        }
        toAffine(w) {
            let {
                ex: E,
                ey: m,
                ez: f
            } = this, x = this.is0();
            w == null && (w = x ? Xd : e.inv(f));
            let F = g(E * w),
                K = g(m * w),
                q = g(f * w);
            if (x) return {
                x: Ze,
                y: We
            };
            if (q !== We) throw new Error("invZ was invalid");
            return {
                x: F,
                y: K
            }
        }
        clearCofactor() {
            let {
                h: w
            } = t;
            return w === We ? this : this.multiplyUnsafe(w)
        }
        static fromHex(w, E = !1) {
            let {
                d: m,
                a: f
            } = t, x = e.BYTES;
            w = jt("pointHex", w, x);
            let F = w.slice(),
                K = w[x - 1];
            F[x - 1] = K & -129;
            let q = Kr(F);
            q === Ze || (E ? T(q, d) : T(q, e.ORDER));
            let V = g(q * q),
                rt = g(V - We),
                ot = g(m * V - f),
                {
                    isValid: Lt,
                    value: at
                } = b(rt, ot);
            if (!Lt) throw new Error("Point.fromHex: invalid y coordinate");
            let ut = (at & We) === We,
                me = (K & 128) !== 0;
            if (!E && at === Ze && me) throw new Error("Point.fromHex: x=0 and x_0=1");
            return me !== ut && (at = g(-at)), H.fromAffine({
                x: at,
                y: q
            })
        }
        static fromPrivateKey(w) {
            return Q(w).point
        }
        toRawBytes() {
            let {
                x: w,
                y: E
            } = this.toAffine(), m = cn(E, e.BYTES);
            return m[m.length - 1] |= w & We ? 128 : 0, m
        }
        toHex() {
            return mr(this.toRawBytes())
        }
    }
    H.BASE = new H(t.Gx, t.Gy, We, g(t.Gx * t.Gy)), H.ZERO = new H(Ze, We, We, Ze);
    let {
        BASE: W,
        ZERO: J
    } = H, et = bo(H, a * 8);

    function mt(y) {
        return _t(y, n)
    }

    function dt(y) {
        return mt(Kr(y))
    }

    function Q(y) {
        let w = a;
        y = jt("private key", y, w);
        let E = jt("hashed private key", o(y), 2 * w),
            m = _(E.slice(0, w)),
            f = E.slice(w, 2 * w),
            x = dt(m),
            F = W.multiply(x),
            K = F.toRawBytes();
        return {
            head: m,
            prefix: f,
            scalar: x,
            point: F,
            pointBytes: K
        }
    }

    function Bt(y) {
        return Q(y).pointBytes
    }

    function B(y = new Uint8Array, ...w) {
        let E = br(...w);
        return dt(o(I(E, jt("context", y), !!i)))
    }

    function u(y, w, E = {}) {
        y = jt("message", y), i && (y = i(y));
        let {
            prefix: m,
            scalar: f,
            pointBytes: x
        } = Q(w), F = B(E.context, m, y), K = W.multiply(F).toRawBytes(), q = B(E.context, K, x, y), V = mt(F + q * f);
        z(V);
        let rt = br(K, cn(V, e.BYTES));
        return jt("result", rt, a * 2)
    }
    let h = Jd;

    function l(y, w, E, m = h) {
        let {
            context: f,
            zip215: x
        } = m, F = e.BYTES;
        y = jt("signature", y, 2 * F), w = jt("message", w), i && (w = i(w));
        let K = Kr(y.slice(F, 2 * F)),
            q, V, rt;
        try {
            q = H.fromHex(E, x), V = H.fromHex(y.slice(0, F), x), rt = W.multiplyUnsafe(K)
        } catch {
            return !1
        }
        if (!x && q.isSmallOrder()) return !1;
        let ot = B(f, V.toRawBytes(), q.toRawBytes(), w);
        return V.add(q.multiplyUnsafe(ot)).subtract(rt).clearCofactor().equals(H.ZERO)
    }
    return W._setWindowSize(8), {
        CURVE: t,
        getPublicKey: Bt,
        sign: u,
        verify: l,
        ExtendedPoint: H,
        utils: {
            getExtendedPublicKey: Q,
            randomPrivateKey: () => s(e.BYTES),
            precompute(y = 8, w = H.BASE) {
                return w._setWindowSize(y), w.multiply(BigInt(3)), w
            }
        }
    }
}
var Ze, We, xo, Xd, Jd, mf = yt(() => {
    "use strict";
    Pn();
    fn();
    fn();
    Ma();
    Ze = BigInt(0), We = BigInt(1), xo = BigInt(2), Xd = BigInt(8), Jd = {
        zip215: !0
    }
});

function ip(r) {
    let t = Pa,
        n = r * r % t * r % t,
        i = Pt(n, Ua, t) * n % t,
        o = Pt(i, tp, t) * r % t,
        s = Pt(o, ep, t) * o % t,
        a = Pt(s, bf, t) * s % t,
        c = Pt(a, rp, t) * a % t,
        d = Pt(c, np, t) * c % t,
        g = Pt(d, xf, t) * d % t,
        b = Pt(g, xf, t) * d % t,
        _ = Pt(b, bf, t) * s % t;
    return {
        pow_p_5_8: Pt(_, Ua, t) * r % t,
        b2: n
    }
}

function op(r) {
    return r[0] &= 248, r[31] &= 127, r[31] |= 64, r
}

function sp(r, t) {
    let e = Pa,
        n = _t(t * t * t, e),
        i = _t(n * n * t, e),
        o = ip(r * i).pow_p_5_8,
        s = _t(r * n * o, e),
        a = _t(t * s * s, e),
        c = s,
        d = _t(s * wf, e),
        g = a === r,
        b = a === _t(-r, e),
        _ = a === _t(-r * wf, e);
    return g && (s = c), (b || _) && (s = d), df(s, e) && (s = _t(-s, e)), {
        isValid: g || b,
        value: s
    }
}

function Ef(r, t, e) {
    if (t.length > 255) throw new Error("Context is too big");
    return ho(da("SigEd25519 no Ed25519 collisions"), new Uint8Array([e ? 1 : 0, t.length]), t, r)
}
var Pa, wf, xb, tp, Ua, ep, bf, rp, np, xf, xr, Ca, ln, Eb, Bb, ap, kb, vb, Ib, Sb, Ab, _b, Rb, Lb, Tb, Mb, Bf = yt(() => {
    "use strict";
    sf();
    Nr();
    mf();
    Pn();
    Pa = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), wf = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752"), xb = BigInt(0), tp = BigInt(1), Ua = BigInt(2), ep = BigInt(5), bf = BigInt(10), rp = BigInt(20), np = BigInt(40), xf = BigInt(80);
    xr = wo(Pa, void 0, !0), Ca = {
        a: BigInt(-1),
        d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"),
        Fp: xr,
        n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"),
        h: BigInt(8),
        Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"),
        Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"),
        hash: ka,
        randomBytes: lo,
        adjustScalarBytes: op,
        uvRatio: sp
    }, ln = Eo(Ca);
    Eb = Eo(ft(st({}, Ca), {
        domain: Ef
    })), Bb = Eo(ft(st({}, Ca), {
        domain: Ef,
        prehash: ka
    })), ap = (xr.ORDER + BigInt(3)) / BigInt(8), kb = xr.pow(Ua, ap), vb = xr.sqrt(xr.neg(xr.ONE)), Ib = (xr.ORDER - BigInt(5)) / BigInt(8), Sb = BigInt(486662), Ab = pf(xr, xr.neg(BigInt(486664))), _b = BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235"), Rb = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578"), Lb = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838"), Tb = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952"), Mb = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
});
var Cf = wt(Fn => {
    "use strict";
    var Fa = ui(),
        Cn = ci(),
        kf = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    Fn.Buffer = P;
    Fn.SlowBuffer = dp;
    Fn.INSPECT_MAX_BYTES = 50;
    var Bo = 2147483647;
    Fn.kMaxLength = Bo;
    P.TYPED_ARRAY_SUPPORT = up();
    !P.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

    function up() {
        try {
            var r = new Uint8Array(1),
                t = {
                    foo: function() {
                        return 42
                    }
                };
            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(r, t), r.foo() === 42
        } catch {
            return !1
        }
    }
    Object.defineProperty(P.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (P.isBuffer(this)) return this.buffer
        }
    });
    Object.defineProperty(P.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (P.isBuffer(this)) return this.byteOffset
        }
    });

    function Er(r) {
        if (r > Bo) throw new RangeError('The value "' + r + '" is invalid for option "size"');
        var t = new Uint8Array(r);
        return Object.setPrototypeOf(t, P.prototype), t
    }

    function P(r, t, e) {
        if (typeof r == "number") {
            if (typeof t == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
            return qa(r)
        }
        return Sf(r, t, e)
    }
    P.poolSize = 8192;

    function Sf(r, t, e) {
        if (typeof r == "string") return fp(r, t);
        if (ArrayBuffer.isView(r)) return hp(r);
        if (r == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
        if (nr(r, ArrayBuffer) || r && nr(r.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (nr(r, SharedArrayBuffer) || r && nr(r.buffer, SharedArrayBuffer))) return Na(r, t, e);
        if (typeof r == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        var n = r.valueOf && r.valueOf();
        if (n != null && n !== r) return P.from(n, t, e);
        var i = lp(r);
        if (i) return i;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof r[Symbol.toPrimitive] == "function") return P.from(r[Symbol.toPrimitive]("string"), t, e);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r)
    }
    P.from = function(r, t, e) {
        return Sf(r, t, e)
    };
    Object.setPrototypeOf(P.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(P, Uint8Array);

    function Af(r) {
        if (typeof r != "number") throw new TypeError('"size" argument must be of type number');
        if (r < 0) throw new RangeError('The value "' + r + '" is invalid for option "size"')
    }

    function cp(r, t, e) {
        return Af(r), r <= 0 ? Er(r) : t !== void 0 ? typeof e == "string" ? Er(r).fill(t, e) : Er(r).fill(t) : Er(r)
    }
    P.alloc = function(r, t, e) {
        return cp(r, t, e)
    };

    function qa(r) {
        return Af(r), Er(r < 0 ? 0 : za(r) | 0)
    }
    P.allocUnsafe = function(r) {
        return qa(r)
    };
    P.allocUnsafeSlow = function(r) {
        return qa(r)
    };

    function fp(r, t) {
        if ((typeof t != "string" || t === "") && (t = "utf8"), !P.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
        var e = _f(r, t) | 0,
            n = Er(e),
            i = n.write(r, t);
        return i !== e && (n = n.slice(0, i)), n
    }

    function Oa(r) {
        for (var t = r.length < 0 ? 0 : za(r.length) | 0, e = Er(t), n = 0; n < t; n += 1) e[n] = r[n] & 255;
        return e
    }

    function hp(r) {
        if (nr(r, Uint8Array)) {
            var t = new Uint8Array(r);
            return Na(t.buffer, t.byteOffset, t.byteLength)
        }
        return Oa(r)
    }

    function Na(r, t, e) {
        if (t < 0 || r.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
        if (r.byteLength < t + (e || 0)) throw new RangeError('"length" is outside of buffer bounds');
        var n;
        return t === void 0 && e === void 0 ? n = new Uint8Array(r) : e === void 0 ? n = new Uint8Array(r, t) : n = new Uint8Array(r, t, e), Object.setPrototypeOf(n, P.prototype), n
    }

    function lp(r) {
        if (P.isBuffer(r)) {
            var t = za(r.length) | 0,
                e = Er(t);
            return e.length === 0 || r.copy(e, 0, 0, t), e
        }
        if (r.length !== void 0) return typeof r.length != "number" || Ka(r.length) ? Er(0) : Oa(r);
        if (r.type === "Buffer" && Array.isArray(r.data)) return Oa(r.data)
    }

    function za(r) {
        if (r >= Bo) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Bo.toString(16) + " bytes");
        return r | 0
    }

    function dp(r) {
        return +r != r && (r = 0), P.alloc(+r)
    }
    P.isBuffer = function(t) {
        return t != null && t._isBuffer === !0 && t !== P.prototype
    };
    P.compare = function(t, e) {
        if (nr(t, Uint8Array) && (t = P.from(t, t.offset, t.byteLength)), nr(e, Uint8Array) && (e = P.from(e, e.offset, e.byteLength)), !P.isBuffer(t) || !P.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (t === e) return 0;
        for (var n = t.length, i = e.length, o = 0, s = Math.min(n, i); o < s; ++o)
            if (t[o] !== e[o]) {
                n = t[o], i = e[o];
                break
            }
        return n < i ? -1 : i < n ? 1 : 0
    };
    P.isEncoding = function(t) {
        switch (String(t).toLowerCase()) {
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
    P.concat = function(t, e) {
        if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (t.length === 0) return P.alloc(0);
        var n;
        if (e === void 0)
            for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
        var i = P.allocUnsafe(e),
            o = 0;
        for (n = 0; n < t.length; ++n) {
            var s = t[n];
            if (nr(s, Uint8Array)) o + s.length > i.length ? P.from(s).copy(i, o) : Uint8Array.prototype.set.call(i, s, o);
            else if (P.isBuffer(s)) s.copy(i, o);
            else throw new TypeError('"list" argument must be an Array of Buffers');
            o += s.length
        }
        return i
    };

    function _f(r, t) {
        if (P.isBuffer(r)) return r.length;
        if (ArrayBuffer.isView(r) || nr(r, ArrayBuffer)) return r.byteLength;
        if (typeof r != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof r);
        var e = r.length,
            n = arguments.length > 2 && arguments[2] === !0;
        if (!n && e === 0) return 0;
        for (var i = !1;;) switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
                return e;
            case "utf8":
            case "utf-8":
                return Da(r).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return e * 2;
            case "hex":
                return e >>> 1;
            case "base64":
                return Pf(r).length;
            default:
                if (i) return n ? -1 : Da(r).length;
                t = ("" + t).toLowerCase(), i = !0
        }
    }
    P.byteLength = _f;

    function pp(r, t, e) {
        var n = !1;
        if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((e === void 0 || e > this.length) && (e = this.length), e <= 0) || (e >>>= 0, t >>>= 0, e <= t)) return "";
        for (r || (r = "utf8");;) switch (r) {
            case "hex":
                return vp(this, t, e);
            case "utf8":
            case "utf-8":
                return Lf(this, t, e);
            case "ascii":
                return Bp(this, t, e);
            case "latin1":
            case "binary":
                return kp(this, t, e);
            case "base64":
                return xp(this, t, e);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Ip(this, t, e);
            default:
                if (n) throw new TypeError("Unknown encoding: " + r);
                r = (r + "").toLowerCase(), n = !0
        }
    }
    P.prototype._isBuffer = !0;

    function dn(r, t, e) {
        var n = r[t];
        r[t] = r[e], r[e] = n
    }
    P.prototype.swap16 = function() {
        var t = this.length;
        if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var e = 0; e < t; e += 2) dn(this, e, e + 1);
        return this
    };
    P.prototype.swap32 = function() {
        var t = this.length;
        if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var e = 0; e < t; e += 4) dn(this, e, e + 3), dn(this, e + 1, e + 2);
        return this
    };
    P.prototype.swap64 = function() {
        var t = this.length;
        if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var e = 0; e < t; e += 8) dn(this, e, e + 7), dn(this, e + 1, e + 6), dn(this, e + 2, e + 5), dn(this, e + 3, e + 4);
        return this
    };
    P.prototype.toString = function() {
        var t = this.length;
        return t === 0 ? "" : arguments.length === 0 ? Lf(this, 0, t) : pp.apply(this, arguments)
    };
    P.prototype.toLocaleString = P.prototype.toString;
    P.prototype.equals = function(t) {
        if (!P.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
        return this === t ? !0 : P.compare(this, t) === 0
    };
    P.prototype.inspect = function() {
        var t = "",
            e = Fn.INSPECT_MAX_BYTES;
        return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t += " ... "), "<Buffer " + t + ">"
    };
    kf && (P.prototype[kf] = P.prototype.inspect);
    P.prototype.compare = function(t, e, n, i, o) {
        if (nr(t, Uint8Array) && (t = P.from(t, t.offset, t.byteLength)), !P.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
        if (e === void 0 && (e = 0), n === void 0 && (n = t ? t.length : 0), i === void 0 && (i = 0), o === void 0 && (o = this.length), e < 0 || n > t.length || i < 0 || o > this.length) throw new RangeError("out of range index");
        if (i >= o && e >= n) return 0;
        if (i >= o) return -1;
        if (e >= n) return 1;
        if (e >>>= 0, n >>>= 0, i >>>= 0, o >>>= 0, this === t) return 0;
        for (var s = o - i, a = n - e, c = Math.min(s, a), d = this.slice(i, o), g = t.slice(e, n), b = 0; b < c; ++b)
            if (d[b] !== g[b]) {
                s = d[b], a = g[b];
                break
            }
        return s < a ? -1 : a < s ? 1 : 0
    };

    function Rf(r, t, e, n, i) {
        if (r.length === 0) return -1;
        if (typeof e == "string" ? (n = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), e = +e, Ka(e) && (e = i ? 0 : r.length - 1), e < 0 && (e = r.length + e), e >= r.length) {
            if (i) return -1;
            e = r.length - 1
        } else if (e < 0)
            if (i) e = 0;
            else return -1;
        if (typeof t == "string" && (t = P.from(t, n)), P.isBuffer(t)) return t.length === 0 ? -1 : vf(r, t, e, n, i);
        if (typeof t == "number") return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(r, t, e) : Uint8Array.prototype.lastIndexOf.call(r, t, e) : vf(r, [t], e, n, i);
        throw new TypeError("val must be string, number or Buffer")
    }

    function vf(r, t, e, n, i) {
        var o = 1,
            s = r.length,
            a = t.length;
        if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
            if (r.length < 2 || t.length < 2) return -1;
            o = 2, s /= 2, a /= 2, e /= 2
        }

        function c(I, S) {
            return o === 1 ? I[S] : I.readUInt16BE(S * o)
        }
        var d;
        if (i) {
            var g = -1;
            for (d = e; d < s; d++)
                if (c(r, d) === c(t, g === -1 ? 0 : d - g)) {
                    if (g === -1 && (g = d), d - g + 1 === a) return g * o
                } else g !== -1 && (d -= d - g), g = -1
        } else
            for (e + a > s && (e = s - a), d = e; d >= 0; d--) {
                for (var b = !0, _ = 0; _ < a; _++)
                    if (c(r, d + _) !== c(t, _)) {
                        b = !1;
                        break
                    }
                if (b) return d
            }
        return -1
    }
    P.prototype.includes = function(t, e, n) {
        return this.indexOf(t, e, n) !== -1
    };
    P.prototype.indexOf = function(t, e, n) {
        return Rf(this, t, e, n, !0)
    };
    P.prototype.lastIndexOf = function(t, e, n) {
        return Rf(this, t, e, n, !1)
    };

    function yp(r, t, e, n) {
        e = Number(e) || 0;
        var i = r.length - e;
        n ? (n = Number(n), n > i && (n = i)) : n = i;
        var o = t.length;
        n > o / 2 && (n = o / 2);
        for (var s = 0; s < n; ++s) {
            var a = parseInt(t.substr(s * 2, 2), 16);
            if (Ka(a)) return s;
            r[e + s] = a
        }
        return s
    }

    function gp(r, t, e, n) {
        return ko(Da(t, r.length - e), r, e, n)
    }

    function mp(r, t, e, n) {
        return ko(_p(t), r, e, n)
    }

    function wp(r, t, e, n) {
        return ko(Pf(t), r, e, n)
    }

    function bp(r, t, e, n) {
        return ko(Rp(t, r.length - e), r, e, n)
    }
    P.prototype.write = function(t, e, n, i) {
        if (e === void 0) i = "utf8", n = this.length, e = 0;
        else if (n === void 0 && typeof e == "string") i = e, n = this.length, e = 0;
        else if (isFinite(e)) e = e >>> 0, isFinite(n) ? (n = n >>> 0, i === void 0 && (i = "utf8")) : (i = n, n = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        var o = this.length - e;
        if ((n === void 0 || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        i || (i = "utf8");
        for (var s = !1;;) switch (i) {
            case "hex":
                return yp(this, t, e, n);
            case "utf8":
            case "utf-8":
                return gp(this, t, e, n);
            case "ascii":
            case "latin1":
            case "binary":
                return mp(this, t, e, n);
            case "base64":
                return wp(this, t, e, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return bp(this, t, e, n);
            default:
                if (s) throw new TypeError("Unknown encoding: " + i);
                i = ("" + i).toLowerCase(), s = !0
        }
    };
    P.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    };

    function xp(r, t, e) {
        return t === 0 && e === r.length ? Fa.fromByteArray(r) : Fa.fromByteArray(r.slice(t, e))
    }

    function Lf(r, t, e) {
        e = Math.min(r.length, e);
        for (var n = [], i = t; i < e;) {
            var o = r[i],
                s = null,
                a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
            if (i + a <= e) {
                var c, d, g, b;
                switch (a) {
                    case 1:
                        o < 128 && (s = o);
                        break;
                    case 2:
                        c = r[i + 1], (c & 192) === 128 && (b = (o & 31) << 6 | c & 63, b > 127 && (s = b));
                        break;
                    case 3:
                        c = r[i + 1], d = r[i + 2], (c & 192) === 128 && (d & 192) === 128 && (b = (o & 15) << 12 | (c & 63) << 6 | d & 63, b > 2047 && (b < 55296 || b > 57343) && (s = b));
                        break;
                    case 4:
                        c = r[i + 1], d = r[i + 2], g = r[i + 3], (c & 192) === 128 && (d & 192) === 128 && (g & 192) === 128 && (b = (o & 15) << 18 | (c & 63) << 12 | (d & 63) << 6 | g & 63, b > 65535 && b < 1114112 && (s = b))
                }
            }
            s === null ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023), n.push(s), i += a
        }
        return Ep(n)
    }
    var If = 4096;

    function Ep(r) {
        var t = r.length;
        if (t <= If) return String.fromCharCode.apply(String, r);
        for (var e = "", n = 0; n < t;) e += String.fromCharCode.apply(String, r.slice(n, n += If));
        return e
    }

    function Bp(r, t, e) {
        var n = "";
        e = Math.min(r.length, e);
        for (var i = t; i < e; ++i) n += String.fromCharCode(r[i] & 127);
        return n
    }

    function kp(r, t, e) {
        var n = "";
        e = Math.min(r.length, e);
        for (var i = t; i < e; ++i) n += String.fromCharCode(r[i]);
        return n
    }

    function vp(r, t, e) {
        var n = r.length;
        (!t || t < 0) && (t = 0), (!e || e < 0 || e > n) && (e = n);
        for (var i = "", o = t; o < e; ++o) i += Lp[r[o]];
        return i
    }

    function Ip(r, t, e) {
        for (var n = r.slice(t, e), i = "", o = 0; o < n.length - 1; o += 2) i += String.fromCharCode(n[o] + n[o + 1] * 256);
        return i
    }
    P.prototype.slice = function(t, e) {
        var n = this.length;
        t = ~~t, e = e === void 0 ? n : ~~e, t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), e < t && (e = t);
        var i = this.subarray(t, e);
        return Object.setPrototypeOf(i, P.prototype), i
    };

    function xe(r, t, e) {
        if (r % 1 !== 0 || r < 0) throw new RangeError("offset is not uint");
        if (r + t > e) throw new RangeError("Trying to access beyond buffer length")
    }
    P.prototype.readUintLE = P.prototype.readUIntLE = function(t, e, n) {
        t = t >>> 0, e = e >>> 0, n || xe(t, e, this.length);
        for (var i = this[t], o = 1, s = 0; ++s < e && (o *= 256);) i += this[t + s] * o;
        return i
    };
    P.prototype.readUintBE = P.prototype.readUIntBE = function(t, e, n) {
        t = t >>> 0, e = e >>> 0, n || xe(t, e, this.length);
        for (var i = this[t + --e], o = 1; e > 0 && (o *= 256);) i += this[t + --e] * o;
        return i
    };
    P.prototype.readUint8 = P.prototype.readUInt8 = function(t, e) {
        return t = t >>> 0, e || xe(t, 1, this.length), this[t]
    };
    P.prototype.readUint16LE = P.prototype.readUInt16LE = function(t, e) {
        return t = t >>> 0, e || xe(t, 2, this.length), this[t] | this[t + 1] << 8
    };
    P.prototype.readUint16BE = P.prototype.readUInt16BE = function(t, e) {
        return t = t >>> 0, e || xe(t, 2, this.length), this[t] << 8 | this[t + 1]
    };
    P.prototype.readUint32LE = P.prototype.readUInt32LE = function(t, e) {
        return t = t >>> 0, e || xe(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216
    };
    P.prototype.readUint32BE = P.prototype.readUInt32BE = function(t, e) {
        return t = t >>> 0, e || xe(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
    };
    P.prototype.readIntLE = function(t, e, n) {
        t = t >>> 0, e = e >>> 0, n || xe(t, e, this.length);
        for (var i = this[t], o = 1, s = 0; ++s < e && (o *= 256);) i += this[t + s] * o;
        return o *= 128, i >= o && (i -= Math.pow(2, 8 * e)), i
    };
    P.prototype.readIntBE = function(t, e, n) {
        t = t >>> 0, e = e >>> 0, n || xe(t, e, this.length);
        for (var i = e, o = 1, s = this[t + --i]; i > 0 && (o *= 256);) s += this[t + --i] * o;
        return o *= 128, s >= o && (s -= Math.pow(2, 8 * e)), s
    };
    P.prototype.readInt8 = function(t, e) {
        return t = t >>> 0, e || xe(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t]
    };
    P.prototype.readInt16LE = function(t, e) {
        t = t >>> 0, e || xe(t, 2, this.length);
        var n = this[t] | this[t + 1] << 8;
        return n & 32768 ? n | 4294901760 : n
    };
    P.prototype.readInt16BE = function(t, e) {
        t = t >>> 0, e || xe(t, 2, this.length);
        var n = this[t + 1] | this[t] << 8;
        return n & 32768 ? n | 4294901760 : n
    };
    P.prototype.readInt32LE = function(t, e) {
        return t = t >>> 0, e || xe(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
    };
    P.prototype.readInt32BE = function(t, e) {
        return t = t >>> 0, e || xe(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
    };
    P.prototype.readFloatLE = function(t, e) {
        return t = t >>> 0, e || xe(t, 4, this.length), Cn.read(this, t, !0, 23, 4)
    };
    P.prototype.readFloatBE = function(t, e) {
        return t = t >>> 0, e || xe(t, 4, this.length), Cn.read(this, t, !1, 23, 4)
    };
    P.prototype.readDoubleLE = function(t, e) {
        return t = t >>> 0, e || xe(t, 8, this.length), Cn.read(this, t, !0, 52, 8)
    };
    P.prototype.readDoubleBE = function(t, e) {
        return t = t >>> 0, e || xe(t, 8, this.length), Cn.read(this, t, !1, 52, 8)
    };

    function Ne(r, t, e, n, i, o) {
        if (!P.isBuffer(r)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
        if (e + n > r.length) throw new RangeError("Index out of range")
    }
    P.prototype.writeUintLE = P.prototype.writeUIntLE = function(t, e, n, i) {
        if (t = +t, e = e >>> 0, n = n >>> 0, !i) {
            var o = Math.pow(2, 8 * n) - 1;
            Ne(this, t, e, n, o, 0)
        }
        var s = 1,
            a = 0;
        for (this[e] = t & 255; ++a < n && (s *= 256);) this[e + a] = t / s & 255;
        return e + n
    };
    P.prototype.writeUintBE = P.prototype.writeUIntBE = function(t, e, n, i) {
        if (t = +t, e = e >>> 0, n = n >>> 0, !i) {
            var o = Math.pow(2, 8 * n) - 1;
            Ne(this, t, e, n, o, 0)
        }
        var s = n - 1,
            a = 1;
        for (this[e + s] = t & 255; --s >= 0 && (a *= 256);) this[e + s] = t / a & 255;
        return e + n
    };
    P.prototype.writeUint8 = P.prototype.writeUInt8 = function(t, e, n) {
        return t = +t, e = e >>> 0, n || Ne(this, t, e, 1, 255, 0), this[e] = t & 255, e + 1
    };
    P.prototype.writeUint16LE = P.prototype.writeUInt16LE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || Ne(this, t, e, 2, 65535, 0), this[e] = t & 255, this[e + 1] = t >>> 8, e + 2
    };
    P.prototype.writeUint16BE = P.prototype.writeUInt16BE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || Ne(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = t & 255, e + 2
    };
    P.prototype.writeUint32LE = P.prototype.writeUInt32LE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || Ne(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = t & 255, e + 4
    };
    P.prototype.writeUint32BE = P.prototype.writeUInt32BE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || Ne(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = t & 255, e + 4
    };
    P.prototype.writeIntLE = function(t, e, n, i) {
        if (t = +t, e = e >>> 0, !i) {
            var o = Math.pow(2, 8 * n - 1);
            Ne(this, t, e, n, o - 1, -o)
        }
        var s = 0,
            a = 1,
            c = 0;
        for (this[e] = t & 255; ++s < n && (a *= 256);) t < 0 && c === 0 && this[e + s - 1] !== 0 && (c = 1), this[e + s] = (t / a >> 0) - c & 255;
        return e + n
    };
    P.prototype.writeIntBE = function(t, e, n, i) {
        if (t = +t, e = e >>> 0, !i) {
            var o = Math.pow(2, 8 * n - 1);
            Ne(this, t, e, n, o - 1, -o)
        }
        var s = n - 1,
            a = 1,
            c = 0;
        for (this[e + s] = t & 255; --s >= 0 && (a *= 256);) t < 0 && c === 0 && this[e + s + 1] !== 0 && (c = 1), this[e + s] = (t / a >> 0) - c & 255;
        return e + n
    };
    P.prototype.writeInt8 = function(t, e, n) {
        return t = +t, e = e >>> 0, n || Ne(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = t & 255, e + 1
    };
    P.prototype.writeInt16LE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || Ne(this, t, e, 2, 32767, -32768), this[e] = t & 255, this[e + 1] = t >>> 8, e + 2
    };
    P.prototype.writeInt16BE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || Ne(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = t & 255, e + 2
    };
    P.prototype.writeInt32LE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || Ne(this, t, e, 4, 2147483647, -2147483648), this[e] = t & 255, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
    };
    P.prototype.writeInt32BE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || Ne(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = t & 255, e + 4
    };

    function Tf(r, t, e, n, i, o) {
        if (e + n > r.length) throw new RangeError("Index out of range");
        if (e < 0) throw new RangeError("Index out of range")
    }

    function Mf(r, t, e, n, i) {
        return t = +t, e = e >>> 0, i || Tf(r, t, e, 4, 34028234663852886e22, -34028234663852886e22), Cn.write(r, t, e, n, 23, 4), e + 4
    }
    P.prototype.writeFloatLE = function(t, e, n) {
        return Mf(this, t, e, !0, n)
    };
    P.prototype.writeFloatBE = function(t, e, n) {
        return Mf(this, t, e, !1, n)
    };

    function Uf(r, t, e, n, i) {
        return t = +t, e = e >>> 0, i || Tf(r, t, e, 8, 17976931348623157e292, -17976931348623157e292), Cn.write(r, t, e, n, 52, 8), e + 8
    }
    P.prototype.writeDoubleLE = function(t, e, n) {
        return Uf(this, t, e, !0, n)
    };
    P.prototype.writeDoubleBE = function(t, e, n) {
        return Uf(this, t, e, !1, n)
    };
    P.prototype.copy = function(t, e, n, i) {
        if (!P.isBuffer(t)) throw new TypeError("argument should be a Buffer");
        if (n || (n = 0), !i && i !== 0 && (i = this.length), e >= t.length && (e = t.length), e || (e = 0), i > 0 && i < n && (i = n), i === n || t.length === 0 || this.length === 0) return 0;
        if (e < 0) throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
        if (i < 0) throw new RangeError("sourceEnd out of bounds");
        i > this.length && (i = this.length), t.length - e < i - n && (i = t.length - e + n);
        var o = i - n;
        return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(e, n, i) : Uint8Array.prototype.set.call(t, this.subarray(n, i), e), o
    };
    P.prototype.fill = function(t, e, n, i) {
        if (typeof t == "string") {
            if (typeof e == "string" ? (i = e, e = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), i !== void 0 && typeof i != "string") throw new TypeError("encoding must be a string");
            if (typeof i == "string" && !P.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
            if (t.length === 1) {
                var o = t.charCodeAt(0);
                (i === "utf8" && o < 128 || i === "latin1") && (t = o)
            }
        } else typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
        if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
        if (n <= e) return this;
        e = e >>> 0, n = n === void 0 ? this.length : n >>> 0, t || (t = 0);
        var s;
        if (typeof t == "number")
            for (s = e; s < n; ++s) this[s] = t;
        else {
            var a = P.isBuffer(t) ? t : P.from(t, i),
                c = a.length;
            if (c === 0) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
            for (s = 0; s < n - e; ++s) this[s + e] = a[s % c]
        }
        return this
    };
    var Sp = /[^+/0-9A-Za-z-_]/g;

    function Ap(r) {
        if (r = r.split("=")[0], r = r.trim().replace(Sp, ""), r.length < 2) return "";
        for (; r.length % 4 !== 0;) r = r + "=";
        return r
    }

    function Da(r, t) {
        t = t || 1 / 0;
        for (var e, n = r.length, i = null, o = [], s = 0; s < n; ++s) {
            if (e = r.charCodeAt(s), e > 55295 && e < 57344) {
                if (!i) {
                    if (e > 56319) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue
                    } else if (s + 1 === n) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue
                    }
                    i = e;
                    continue
                }
                if (e < 56320) {
                    (t -= 3) > -1 && o.push(239, 191, 189), i = e;
                    continue
                }
                e = (i - 55296 << 10 | e - 56320) + 65536
            } else i && (t -= 3) > -1 && o.push(239, 191, 189);
            if (i = null, e < 128) {
                if ((t -= 1) < 0) break;
                o.push(e)
            } else if (e < 2048) {
                if ((t -= 2) < 0) break;
                o.push(e >> 6 | 192, e & 63 | 128)
            } else if (e < 65536) {
                if ((t -= 3) < 0) break;
                o.push(e >> 12 | 224, e >> 6 & 63 | 128, e & 63 | 128)
            } else if (e < 1114112) {
                if ((t -= 4) < 0) break;
                o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, e & 63 | 128)
            } else throw new Error("Invalid code point")
        }
        return o
    }

    function _p(r) {
        for (var t = [], e = 0; e < r.length; ++e) t.push(r.charCodeAt(e) & 255);
        return t
    }

    function Rp(r, t) {
        for (var e, n, i, o = [], s = 0; s < r.length && !((t -= 2) < 0); ++s) e = r.charCodeAt(s), n = e >> 8, i = e % 256, o.push(i), o.push(n);
        return o
    }

    function Pf(r) {
        return Fa.toByteArray(Ap(r))
    }

    function ko(r, t, e, n) {
        for (var i = 0; i < n && !(i + e >= t.length || i >= r.length); ++i) t[i + e] = r[i];
        return i
    }

    function nr(r, t) {
        return r instanceof t || r != null && r.constructor != null && r.constructor.name != null && r.constructor.name === t.name
    }

    function Ka(r) {
        return r !== r
    }
    var Lp = function() {
        for (var r = "0123456789abcdef", t = new Array(256), e = 0; e < 16; ++e)
            for (var n = e * 16, i = 0; i < 16; ++i) t[n + i] = r[e] + r[i];
        return t
    }()
});
var Ha = wt((Ff, Wa) => {
    "use strict";
    (function(r, t) {
        "use strict";

        function e(B, u) {
            if (!B) throw new Error(u || "Assertion failed")
        }

        function n(B, u) {
            B.super_ = u;
            var h = function() {};
            h.prototype = u.prototype, B.prototype = new h, B.prototype.constructor = B
        }

        function i(B, u, h) {
            if (i.isBN(B)) return B;
            this.negative = 0, this.words = null, this.length = 0, this.red = null, B !== null && ((u === "le" || u === "be") && (h = u, u = 10), this._init(B || 0, u || 10, h || "be"))
        }
        typeof r == "object" ? r.exports = i : t.BN = i, i.BN = i, i.wordSize = 26;
        var o;
        try {
            typeof window < "u" && typeof window.Buffer < "u" ? o = window.Buffer : o = Cf().Buffer
        } catch {}
        i.isBN = function(u) {
            return u instanceof i ? !0 : u !== null && typeof u == "object" && u.constructor.wordSize === i.wordSize && Array.isArray(u.words)
        }, i.max = function(u, h) {
            return u.cmp(h) > 0 ? u : h
        }, i.min = function(u, h) {
            return u.cmp(h) < 0 ? u : h
        }, i.prototype._init = function(u, h, l) {
            if (typeof u == "number") return this._initNumber(u, h, l);
            if (typeof u == "object") return this._initArray(u, h, l);
            h === "hex" && (h = 16), e(h === (h | 0) && h >= 2 && h <= 36), u = u.toString().replace(/\s+/g, "");
            var p = 0;
            u[0] === "-" && (p++, this.negative = 1), p < u.length && (h === 16 ? this._parseHex(u, p, l) : (this._parseBase(u, h, p), l === "le" && this._initArray(this.toArray(), h, l)))
        }, i.prototype._initNumber = function(u, h, l) {
            u < 0 && (this.negative = 1, u = -u), u < 67108864 ? (this.words = [u & 67108863], this.length = 1) : u < 4503599627370496 ? (this.words = [u & 67108863, u / 67108864 & 67108863], this.length = 2) : (e(u < 9007199254740992), this.words = [u & 67108863, u / 67108864 & 67108863, 1], this.length = 3), l === "le" && this._initArray(this.toArray(), h, l)
        }, i.prototype._initArray = function(u, h, l) {
            if (e(typeof u.length == "number"), u.length <= 0) return this.words = [0], this.length = 1, this;
            this.length = Math.ceil(u.length / 3), this.words = new Array(this.length);
            for (var p = 0; p < this.length; p++) this.words[p] = 0;
            var y, w, E = 0;
            if (l === "be")
                for (p = u.length - 1, y = 0; p >= 0; p -= 3) w = u[p] | u[p - 1] << 8 | u[p - 2] << 16, this.words[y] |= w << E & 67108863, this.words[y + 1] = w >>> 26 - E & 67108863, E += 24, E >= 26 && (E -= 26, y++);
            else if (l === "le")
                for (p = 0, y = 0; p < u.length; p += 3) w = u[p] | u[p + 1] << 8 | u[p + 2] << 16, this.words[y] |= w << E & 67108863, this.words[y + 1] = w >>> 26 - E & 67108863, E += 24, E >= 26 && (E -= 26, y++);
            return this._strip()
        };

        function s(B, u) {
            var h = B.charCodeAt(u);
            if (h >= 48 && h <= 57) return h - 48;
            if (h >= 65 && h <= 70) return h - 55;
            if (h >= 97 && h <= 102) return h - 87;
            e(!1, "Invalid character in " + B)
        }

        function a(B, u, h) {
            var l = s(B, h);
            return h - 1 >= u && (l |= s(B, h - 1) << 4), l
        }
        i.prototype._parseHex = function(u, h, l) {
            this.length = Math.ceil((u.length - h) / 6), this.words = new Array(this.length);
            for (var p = 0; p < this.length; p++) this.words[p] = 0;
            var y = 0,
                w = 0,
                E;
            if (l === "be")
                for (p = u.length - 1; p >= h; p -= 2) E = a(u, h, p) << y, this.words[w] |= E & 67108863, y >= 18 ? (y -= 18, w += 1, this.words[w] |= E >>> 26) : y += 8;
            else {
                var m = u.length - h;
                for (p = m % 2 === 0 ? h + 1 : h; p < u.length; p += 2) E = a(u, h, p) << y, this.words[w] |= E & 67108863, y >= 18 ? (y -= 18, w += 1, this.words[w] |= E >>> 26) : y += 8
            }
            this._strip()
        };

        function c(B, u, h, l) {
            for (var p = 0, y = 0, w = Math.min(B.length, h), E = u; E < w; E++) {
                var m = B.charCodeAt(E) - 48;
                p *= l, m >= 49 ? y = m - 49 + 10 : m >= 17 ? y = m - 17 + 10 : y = m, e(m >= 0 && y < l, "Invalid character"), p += y
            }
            return p
        }
        i.prototype._parseBase = function(u, h, l) {
            this.words = [0], this.length = 1;
            for (var p = 0, y = 1; y <= 67108863; y *= h) p++;
            p--, y = y / h | 0;
            for (var w = u.length - l, E = w % p, m = Math.min(w, w - E) + l, f = 0, x = l; x < m; x += p) f = c(u, x, x + p, h), this.imuln(y), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
            if (E !== 0) {
                var F = 1;
                for (f = c(u, x, u.length, h), x = 0; x < E; x++) F *= h;
                this.imuln(F), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f)
            }
            this._strip()
        }, i.prototype.copy = function(u) {
            u.words = new Array(this.length);
            for (var h = 0; h < this.length; h++) u.words[h] = this.words[h];
            u.length = this.length, u.negative = this.negative, u.red = this.red
        };

        function d(B, u) {
            B.words = u.words, B.length = u.length, B.negative = u.negative, B.red = u.red
        }
        if (i.prototype._move = function(u) {
                d(u, this)
            }, i.prototype.clone = function() {
                var u = new i(null);
                return this.copy(u), u
            }, i.prototype._expand = function(u) {
                for (; this.length < u;) this.words[this.length++] = 0;
                return this
            }, i.prototype._strip = function() {
                for (; this.length > 1 && this.words[this.length - 1] === 0;) this.length--;
                return this._normSign()
            }, i.prototype._normSign = function() {
                return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
            }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
            i.prototype[Symbol.for("nodejs.util.inspect.custom")] = g
        } catch {
            i.prototype.inspect = g
        } else i.prototype.inspect = g;

        function g() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
        }
        var b = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
            _ = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            I = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
        i.prototype.toString = function(u, h) {
            u = u || 10, h = h | 0 || 1;
            var l;
            if (u === 16 || u === "hex") {
                l = "";
                for (var p = 0, y = 0, w = 0; w < this.length; w++) {
                    var E = this.words[w],
                        m = ((E << p | y) & 16777215).toString(16);
                    y = E >>> 24 - p & 16777215, p += 2, p >= 26 && (p -= 26, w--), y !== 0 || w !== this.length - 1 ? l = b[6 - m.length] + m + l : l = m + l
                }
                for (y !== 0 && (l = y.toString(16) + l); l.length % h !== 0;) l = "0" + l;
                return this.negative !== 0 && (l = "-" + l), l
            }
            if (u === (u | 0) && u >= 2 && u <= 36) {
                var f = _[u],
                    x = I[u];
                l = "";
                var F = this.clone();
                for (F.negative = 0; !F.isZero();) {
                    var K = F.modrn(x).toString(u);
                    F = F.idivn(x), F.isZero() ? l = K + l : l = b[f - K.length] + K + l
                }
                for (this.isZero() && (l = "0" + l); l.length % h !== 0;) l = "0" + l;
                return this.negative !== 0 && (l = "-" + l), l
            }
            e(!1, "Base should be between 2 and 36")
        }, i.prototype.toNumber = function() {
            var u = this.words[0];
            return this.length === 2 ? u += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? u += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && e(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -u : u
        }, i.prototype.toJSON = function() {
            return this.toString(16, 2)
        }, o && (i.prototype.toBuffer = function(u, h) {
            return this.toArrayLike(o, u, h)
        }), i.prototype.toArray = function(u, h) {
            return this.toArrayLike(Array, u, h)
        };
        var S = function(u, h) {
            return u.allocUnsafe ? u.allocUnsafe(h) : new u(h)
        };
        i.prototype.toArrayLike = function(u, h, l) {
            this._strip();
            var p = this.byteLength(),
                y = l || Math.max(1, p);
            e(p <= y, "byte array longer than desired length"), e(y > 0, "Requested array length <= 0");
            var w = S(u, y),
                E = h === "le" ? "LE" : "BE";
            return this["_toArrayLike" + E](w, p), w
        }, i.prototype._toArrayLikeLE = function(u, h) {
            for (var l = 0, p = 0, y = 0, w = 0; y < this.length; y++) {
                var E = this.words[y] << w | p;
                u[l++] = E & 255, l < u.length && (u[l++] = E >> 8 & 255), l < u.length && (u[l++] = E >> 16 & 255), w === 6 ? (l < u.length && (u[l++] = E >> 24 & 255), p = 0, w = 0) : (p = E >>> 24, w += 2)
            }
            if (l < u.length)
                for (u[l++] = p; l < u.length;) u[l++] = 0
        }, i.prototype._toArrayLikeBE = function(u, h) {
            for (var l = u.length - 1, p = 0, y = 0, w = 0; y < this.length; y++) {
                var E = this.words[y] << w | p;
                u[l--] = E & 255, l >= 0 && (u[l--] = E >> 8 & 255), l >= 0 && (u[l--] = E >> 16 & 255), w === 6 ? (l >= 0 && (u[l--] = E >> 24 & 255), p = 0, w = 0) : (p = E >>> 24, w += 2)
            }
            if (l >= 0)
                for (u[l--] = p; l >= 0;) u[l--] = 0
        }, Math.clz32 ? i.prototype._countBits = function(u) {
            return 32 - Math.clz32(u)
        } : i.prototype._countBits = function(u) {
            var h = u,
                l = 0;
            return h >= 4096 && (l += 13, h >>>= 13), h >= 64 && (l += 7, h >>>= 7), h >= 8 && (l += 4, h >>>= 4), h >= 2 && (l += 2, h >>>= 2), l + h
        }, i.prototype._zeroBits = function(u) {
            if (u === 0) return 26;
            var h = u,
                l = 0;
            return h & 8191 || (l += 13, h >>>= 13), h & 127 || (l += 7, h >>>= 7), h & 15 || (l += 4, h >>>= 4), h & 3 || (l += 2, h >>>= 2), h & 1 || l++, l
        }, i.prototype.bitLength = function() {
            var u = this.words[this.length - 1],
                h = this._countBits(u);
            return (this.length - 1) * 26 + h
        };

        function v(B) {
            for (var u = new Array(B.bitLength()), h = 0; h < u.length; h++) {
                var l = h / 26 | 0,
                    p = h % 26;
                u[h] = B.words[l] >>> p & 1
            }
            return u
        }
        i.prototype.zeroBits = function() {
            if (this.isZero()) return 0;
            for (var u = 0, h = 0; h < this.length; h++) {
                var l = this._zeroBits(this.words[h]);
                if (u += l, l !== 26) break
            }
            return u
        }, i.prototype.byteLength = function() {
            return Math.ceil(this.bitLength() / 8)
        }, i.prototype.toTwos = function(u) {
            return this.negative !== 0 ? this.abs().inotn(u).iaddn(1) : this.clone()
        }, i.prototype.fromTwos = function(u) {
            return this.testn(u - 1) ? this.notn(u).iaddn(1).ineg() : this.clone()
        }, i.prototype.isNeg = function() {
            return this.negative !== 0
        }, i.prototype.neg = function() {
            return this.clone().ineg()
        }, i.prototype.ineg = function() {
            return this.isZero() || (this.negative ^= 1), this
        }, i.prototype.iuor = function(u) {
            for (; this.length < u.length;) this.words[this.length++] = 0;
            for (var h = 0; h < u.length; h++) this.words[h] = this.words[h] | u.words[h];
            return this._strip()
        }, i.prototype.ior = function(u) {
            return e((this.negative | u.negative) === 0), this.iuor(u)
        }, i.prototype.or = function(u) {
            return this.length > u.length ? this.clone().ior(u) : u.clone().ior(this)
        }, i.prototype.uor = function(u) {
            return this.length > u.length ? this.clone().iuor(u) : u.clone().iuor(this)
        }, i.prototype.iuand = function(u) {
            var h;
            this.length > u.length ? h = u : h = this;
            for (var l = 0; l < h.length; l++) this.words[l] = this.words[l] & u.words[l];
            return this.length = h.length, this._strip()
        }, i.prototype.iand = function(u) {
            return e((this.negative | u.negative) === 0), this.iuand(u)
        }, i.prototype.and = function(u) {
            return this.length > u.length ? this.clone().iand(u) : u.clone().iand(this)
        }, i.prototype.uand = function(u) {
            return this.length > u.length ? this.clone().iuand(u) : u.clone().iuand(this)
        }, i.prototype.iuxor = function(u) {
            var h, l;
            this.length > u.length ? (h = this, l = u) : (h = u, l = this);
            for (var p = 0; p < l.length; p++) this.words[p] = h.words[p] ^ l.words[p];
            if (this !== h)
                for (; p < h.length; p++) this.words[p] = h.words[p];
            return this.length = h.length, this._strip()
        }, i.prototype.ixor = function(u) {
            return e((this.negative | u.negative) === 0), this.iuxor(u)
        }, i.prototype.xor = function(u) {
            return this.length > u.length ? this.clone().ixor(u) : u.clone().ixor(this)
        }, i.prototype.uxor = function(u) {
            return this.length > u.length ? this.clone().iuxor(u) : u.clone().iuxor(this)
        }, i.prototype.inotn = function(u) {
            e(typeof u == "number" && u >= 0);
            var h = Math.ceil(u / 26) | 0,
                l = u % 26;
            this._expand(h), l > 0 && h--;
            for (var p = 0; p < h; p++) this.words[p] = ~this.words[p] & 67108863;
            return l > 0 && (this.words[p] = ~this.words[p] & 67108863 >> 26 - l), this._strip()
        }, i.prototype.notn = function(u) {
            return this.clone().inotn(u)
        }, i.prototype.setn = function(u, h) {
            e(typeof u == "number" && u >= 0);
            var l = u / 26 | 0,
                p = u % 26;
            return this._expand(l + 1), h ? this.words[l] = this.words[l] | 1 << p : this.words[l] = this.words[l] & ~(1 << p), this._strip()
        }, i.prototype.iadd = function(u) {
            var h;
            if (this.negative !== 0 && u.negative === 0) return this.negative = 0, h = this.isub(u), this.negative ^= 1, this._normSign();
            if (this.negative === 0 && u.negative !== 0) return u.negative = 0, h = this.isub(u), u.negative = 1, h._normSign();
            var l, p;
            this.length > u.length ? (l = this, p = u) : (l = u, p = this);
            for (var y = 0, w = 0; w < p.length; w++) h = (l.words[w] | 0) + (p.words[w] | 0) + y, this.words[w] = h & 67108863, y = h >>> 26;
            for (; y !== 0 && w < l.length; w++) h = (l.words[w] | 0) + y, this.words[w] = h & 67108863, y = h >>> 26;
            if (this.length = l.length, y !== 0) this.words[this.length] = y, this.length++;
            else if (l !== this)
                for (; w < l.length; w++) this.words[w] = l.words[w];
            return this
        }, i.prototype.add = function(u) {
            var h;
            return u.negative !== 0 && this.negative === 0 ? (u.negative = 0, h = this.sub(u), u.negative ^= 1, h) : u.negative === 0 && this.negative !== 0 ? (this.negative = 0, h = u.sub(this), this.negative = 1, h) : this.length > u.length ? this.clone().iadd(u) : u.clone().iadd(this)
        }, i.prototype.isub = function(u) {
            if (u.negative !== 0) {
                u.negative = 0;
                var h = this.iadd(u);
                return u.negative = 1, h._normSign()
            } else if (this.negative !== 0) return this.negative = 0, this.iadd(u), this.negative = 1, this._normSign();
            var l = this.cmp(u);
            if (l === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
            var p, y;
            l > 0 ? (p = this, y = u) : (p = u, y = this);
            for (var w = 0, E = 0; E < y.length; E++) h = (p.words[E] | 0) - (y.words[E] | 0) + w, w = h >> 26, this.words[E] = h & 67108863;
            for (; w !== 0 && E < p.length; E++) h = (p.words[E] | 0) + w, w = h >> 26, this.words[E] = h & 67108863;
            if (w === 0 && E < p.length && p !== this)
                for (; E < p.length; E++) this.words[E] = p.words[E];
            return this.length = Math.max(this.length, E), p !== this && (this.negative = 1), this._strip()
        }, i.prototype.sub = function(u) {
            return this.clone().isub(u)
        };

        function A(B, u, h) {
            h.negative = u.negative ^ B.negative;
            var l = B.length + u.length | 0;
            h.length = l, l = l - 1 | 0;
            var p = B.words[0] | 0,
                y = u.words[0] | 0,
                w = p * y,
                E = w & 67108863,
                m = w / 67108864 | 0;
            h.words[0] = E;
            for (var f = 1; f < l; f++) {
                for (var x = m >>> 26, F = m & 67108863, K = Math.min(f, u.length - 1), q = Math.max(0, f - B.length + 1); q <= K; q++) {
                    var V = f - q | 0;
                    p = B.words[V] | 0, y = u.words[q] | 0, w = p * y + F, x += w / 67108864 | 0, F = w & 67108863
                }
                h.words[f] = F | 0, m = x | 0
            }
            return m !== 0 ? h.words[f] = m | 0 : h.length--, h._strip()
        }
        var T = function(u, h, l) {
            var p = u.words,
                y = h.words,
                w = l.words,
                E = 0,
                m, f, x, F = p[0] | 0,
                K = F & 8191,
                q = F >>> 13,
                V = p[1] | 0,
                rt = V & 8191,
                ot = V >>> 13,
                Lt = p[2] | 0,
                at = Lt & 8191,
                ut = Lt >>> 13,
                me = p[3] | 0,
                kt = me & 8191,
                At = me >>> 13,
                Ur = p[4] | 0,
                Ot = Ur & 8191,
                Kt = Ur >>> 13,
                to = p[5] | 0,
                Wt = to & 8191,
                Ht = to >>> 13,
                ii = p[6] | 0,
                Nt = ii & 8191,
                Mt = ii >>> 13,
                oi = p[7] | 0,
                Dt = oi & 8191,
                qt = oi >>> 13,
                si = p[8] | 0,
                zt = si & 8191,
                $t = si >>> 13,
                eo = p[9] | 0,
                Vt = eo & 8191,
                Gt = eo >>> 13,
                Ec = y[0] | 0,
                Zt = Ec & 8191,
                Xt = Ec >>> 13,
                Bc = y[1] | 0,
                Jt = Bc & 8191,
                Qt = Bc >>> 13,
                kc = y[2] | 0,
                te = kc & 8191,
                ee = kc >>> 13,
                vc = y[3] | 0,
                re = vc & 8191,
                ne = vc >>> 13,
                Ic = y[4] | 0,
                ie = Ic & 8191,
                oe = Ic >>> 13,
                Sc = y[5] | 0,
                se = Sc & 8191,
                ae = Sc >>> 13,
                Ac = y[6] | 0,
                ue = Ac & 8191,
                ce = Ac >>> 13,
                _c = y[7] | 0,
                fe = _c & 8191,
                he = _c >>> 13,
                Rc = y[8] | 0,
                le = Rc & 8191,
                de = Rc >>> 13,
                Lc = y[9] | 0,
                pe = Lc & 8191,
                ye = Lc >>> 13;
            l.negative = u.negative ^ h.negative, l.length = 19, m = Math.imul(K, Zt), f = Math.imul(K, Xt), f = f + Math.imul(q, Zt) | 0, x = Math.imul(q, Xt);
            var Ps = (E + m | 0) + ((f & 8191) << 13) | 0;
            E = (x + (f >>> 13) | 0) + (Ps >>> 26) | 0, Ps &= 67108863, m = Math.imul(rt, Zt), f = Math.imul(rt, Xt), f = f + Math.imul(ot, Zt) | 0, x = Math.imul(ot, Xt), m = m + Math.imul(K, Jt) | 0, f = f + Math.imul(K, Qt) | 0, f = f + Math.imul(q, Jt) | 0, x = x + Math.imul(q, Qt) | 0;
            var Cs = (E + m | 0) + ((f & 8191) << 13) | 0;
            E = (x + (f >>> 13) | 0) + (Cs >>> 26) | 0, Cs &= 67108863, m = Math.imul(at, Zt), f = Math.imul(at, Xt), f = f + Math.imul(ut, Zt) | 0, x = Math.imul(ut, Xt), m = m + Math.imul(rt, Jt) | 0, f = f + Math.imul(rt, Qt) | 0, f = f + Math.imul(ot, Jt) | 0, x = x + Math.imul(ot, Qt) | 0, m = m + Math.imul(K, te) | 0, f = f + Math.imul(K, ee) | 0, f = f + Math.imul(q, te) | 0, x = x + Math.imul(q, ee) | 0;
            var Fs = (E + m | 0) + ((f & 8191) << 13) | 0;
            E = (x + (f >>> 13) | 0) + (Fs >>> 26) | 0, Fs &= 67108863, m = Math.imul(kt, Zt), f = Math.imul(kt, Xt), f = f + Math.imul(At, Zt) | 0, x = Math.imul(At, Xt), m = m + Math.imul(at, Jt) | 0, f = f + Math.imul(at, Qt) | 0, f = f + Math.imul(ut, Jt) | 0, x = x + Math.imul(ut, Qt) | 0, m = m + Math.imul(rt, te) | 0, f = f + Math.imul(rt, ee) | 0, f = f + Math.imul(ot, te) | 0, x = x + Math.imul(ot, ee) | 0, m = m + Math.imul(K, re) | 0, f = f + Math.imul(K, ne) | 0, f = f + Math.imul(q, re) | 0, x = x + Math.imul(q, ne) | 0;
            var Os = (E + m | 0) + ((f & 8191) << 13) | 0;
            E = (x + (f >>> 13) | 0) + (Os >>> 26) | 0, Os &= 67108863, m = Math.imul(Ot, Zt), f = Math.imul(Ot, Xt), f = f + Math.imul(Kt, Zt) | 0, x = Math.imul(Kt, Xt), m = m + Math.imul(kt, Jt) | 0, f = f + Math.imul(kt, Qt) | 0, f = f + Math.imul(At, Jt) | 0, x = x + Math.imul(At, Qt) | 0, m = m + Math.imul(at, te) | 0, f = f + Math.imul(at, ee) | 0, f = f + Math.imul(ut, te) | 0, x = x + Math.imul(ut, ee) | 0, m = m + Math.imul(rt, re) | 0, f = f + Math.imul(rt, ne) | 0, f = f + Math.imul(ot, re) | 0, x = x + Math.imul(ot, ne) | 0, m = m + Math.imul(K, ie) | 0, f = f + Math.imul(K, oe) | 0, f = f + Math.imul(q, ie) | 0, x = x + Math.imul(q, oe) | 0;
            var Ns = (E + m | 0) + ((f & 8191) << 13) | 0;
            E = (x + (f >>> 13) | 0) + (Ns >>> 26) | 0, Ns &= 67108863, m = Math.imul(Wt, Zt), f = Math.imul(Wt, Xt), f = f + Math.imul(Ht, Zt) | 0, x = Math.imul(Ht, Xt), m = m + Math.imul(Ot, Jt) | 0, f = f + Math.imul(Ot, Qt) | 0, f = f + Math.imul(Kt, Jt) | 0, x = x + Math.imul(Kt, Qt) | 0, m = m + Math.imul(kt, te) | 0, f = f + Math.imul(kt, ee) | 0, f = f + Math.imul(At, te) | 0, x = x + Math.imul(At, ee) | 0, m = m + Math.imul(at, re) | 0, f = f + Math.imul(at, ne) | 0, f = f + Math.imul(ut, re) | 0, x = x + Math.imul(ut, ne) | 0, m = m + Math.imul(rt, ie) | 0, f = f + Math.imul(rt, oe) | 0, f = f + Math.imul(ot, ie) | 0, x = x + Math.imul(ot, oe) | 0, m = m + Math.imul(K, se) | 0, f = f + Math.imul(K, ae) | 0, f = f + Math.imul(q, se) | 0, x = x + Math.imul(q, ae) | 0;
            var Ds = (E + m | 0) + ((f & 8191) << 13) | 0;
            E = (x + (f >>> 13) | 0) + (Ds >>> 26) | 0, Ds &= 67108863, m = Math.imul(Nt, Zt), f = Math.imul(Nt, Xt), f = f + Math.imul(Mt, Zt) | 0, x = Math.imul(Mt, Xt), m = m + Math.imul(Wt, Jt) | 0, f = f + Math.imul(Wt, Qt) | 0, f = f + Math.imul(Ht, Jt) | 0, x = x + Math.imul(Ht, Qt) | 0, m = m + Math.imul(Ot, te) | 0, f = f + Math.imul(Ot, ee) | 0, f = f + Math.imul(Kt, te) | 0, x = x + Math.imul(Kt, ee) | 0, m = m + Math.imul(kt, re) | 0, f = f + Math.imul(kt, ne) | 0, f = f + Math.imul(At, re) | 0, x = x + Math.imul(At, ne) | 0, m = m + Math.imul(at, ie) | 0, f = f + Math.imul(at, oe) | 0, f = f + Math.imul(ut, ie) | 0, x = x + Math.imul(ut, oe) | 0, m = m + Math.imul(rt, se) | 0, f = f + Math.imul(rt, ae) | 0, f = f + Math.imul(ot, se) | 0, x = x + Math.imul(ot, ae) | 0, m = m + Math.imul(K, ue) | 0, f = f + Math.imul(K, ce) | 0, f = f + Math.imul(q, ue) | 0, x = x + Math.imul(q, ce) | 0;
            var qs = (E + m | 0) + ((f & 8191) << 13) | 0;
            E = (x + (f >>> 13) | 0) + (qs >>> 26) | 0, qs &= 67108863, m = Math.imul(Dt, Zt), f = Math.imul(Dt, Xt), f = f + Math.imul(qt, Zt) | 0, x = Math.imul(qt, Xt), m = m + Math.imul(Nt, Jt) | 0, f = f + Math.imul(Nt, Qt) | 0, f = f + Math.imul(Mt, Jt) | 0, x = x + Math.imul(Mt, Qt) | 0, m = m + Math.imul(Wt, te) | 0, f = f + Math.imul(Wt, ee) | 0, f = f + Math.imul(Ht, te) | 0, x = x + Math.imul(Ht, ee) | 0, m = m + Math.imul(Ot, re) | 0, f = f + Math.imul(Ot, ne) | 0, f = f + Math.imul(Kt, re) | 0, x = x + Math.imul(Kt, ne) | 0, m = m + Math.imul(kt, ie) | 0, f = f + Math.imul(kt, oe) | 0, f = f + Math.imul(At, ie) | 0, x = x + Math.imul(At, oe) | 0, m = m + Math.imul(at, se) | 0, f = f + Math.imul(at, ae) | 0, f = f + Math.imul(ut, se) | 0, x = x + Math.imul(ut, ae) | 0, m = m + Math.imul(rt, ue) | 0, f = f + Math.imul(rt, ce) | 0, f = f + Math.imul(ot, ue) | 0, x = x + Math.imul(ot, ce) | 0, m = m + Math.imul(K, fe) | 0, f = f + Math.imul(K, he) | 0, f = f + Math.imul(q, fe) | 0, x = x + Math.imul(q, he) | 0;
            var zs = (E + m | 0) + ((f & 8191) << 13) | 0;
            E = (x + (f >>> 13) | 0) + (zs >>> 26) | 0, zs &= 67108863, m = Math.imul(zt, Zt), f = Math.imul(zt, Xt), f = f + Math.imul($t, Zt) | 0, x = Math.imul($t, Xt), m = m + Math.imul(Dt, Jt) | 0, f = f + Math.imul(Dt, Qt) | 0, f = f + Math.imul(qt, Jt) | 0, x = x + Math.imul(qt, Qt) | 0, m = m + Math.imul(Nt, te) | 0, f = f + Math.imul(Nt, ee) | 0, f = f + Math.imul(Mt, te) | 0, x = x + Math.imul(Mt, ee) | 0, m = m + Math.imul(Wt, re) | 0, f = f + Math.imul(Wt, ne) | 0, f = f + Math.imul(Ht, re) | 0, x = x + Math.imul(Ht, ne) | 0, m = m + Math.imul(Ot, ie) | 0, f = f + Math.imul(Ot, oe) | 0, f = f + Math.imul(Kt, ie) | 0, x = x + Math.imul(Kt, oe) | 0, m = m + Math.imul(kt, se) | 0, f = f + Math.imul(kt, ae) | 0, f = f + Math.imul(At, se) | 0, x = x + Math.imul(At, ae) | 0, m = m + Math.imul(at, ue) | 0, f = f + Math.imul(at, ce) | 0, f = f + Math.imul(ut, ue) | 0, x = x + Math.imul(ut, ce) | 0, m = m + Math.imul(rt, fe) | 0, f = f + Math.imul(rt, he) | 0, f = f + Math.imul(ot, fe) | 0, x = x + Math.imul(ot, he) | 0, m = m + Math.imul(K, le) | 0, f = f + Math.imul(K, de) | 0, f = f + Math.imul(q, le) | 0, x = x + Math.imul(q, de) | 0;
            var Ks = (E + m | 0) + ((f & 8191) << 13) | 0;
            E = (x + (f >>> 13) | 0) + (Ks >>> 26) | 0, Ks &= 67108863, m = Math.imul(Vt, Zt), f = Math.imul(Vt, Xt), f = f + Math.imul(Gt, Zt) | 0, x = Math.imul(Gt, Xt), m = m + Math.imul(zt, Jt) | 0, f = f + Math.imul(zt, Qt) | 0, f = f + Math.imul($t, Jt) | 0, x = x + Math.imul($t, Qt) | 0, m = m + Math.imul(Dt, te) | 0, f = f + Math.imul(Dt, ee) | 0, f = f + Math.imul(qt, te) | 0, x = x + Math.imul(qt, ee) | 0, m = m + Math.imul(Nt, re) | 0, f = f + Math.imul(Nt, ne) | 0, f = f + Math.imul(Mt, re) | 0, x = x + Math.imul(Mt, ne) | 0, m = m + Math.imul(Wt, ie) | 0, f = f + Math.imul(Wt, oe) | 0, f = f + Math.imul(Ht, ie) | 0, x = x + Math.imul(Ht, oe) | 0, m = m + Math.imul(Ot, se) | 0, f = f + Math.imul(Ot, ae) | 0, f = f + Math.imul(Kt, se) | 0, x = x + Math.imul(Kt, ae) | 0, m = m + Math.imul(kt, ue) | 0, f = f + Math.imul(kt, ce) | 0, f = f + Math.imul(At, ue) | 0, x = x + Math.imul(At, ce) | 0, m = m + Math.imul(at, fe) | 0, f = f + Math.imul(at, he) | 0, f = f + Math.imul(ut, fe) | 0, x = x + Math.imul(ut, he) | 0, m = m + Math.imul(rt, le) | 0, f = f + Math.imul(rt, de) | 0, f = f + Math.imul(ot, le) | 0, x = x + Math.imul(ot, de) | 0, m = m + Math.imul(K, pe) | 0, f = f + Math.imul(K, ye) | 0, f = f + Math.imul(q, pe) | 0, x = x + Math.imul(q, ye) | 0;
            var Ws = (E + m | 0) + ((f & 8191) << 13) | 0;
            E = (x + (f >>> 13) | 0) + (Ws >>> 26) | 0, Ws &= 67108863, m = Math.imul(Vt, Jt), f = Math.imul(Vt, Qt), f = f + Math.imul(Gt, Jt) | 0, x = Math.imul(Gt, Qt), m = m + Math.imul(zt, te) | 0, f = f + Math.imul(zt, ee) | 0, f = f + Math.imul($t, te) | 0, x = x + Math.imul($t, ee) | 0, m = m + Math.imul(Dt, re) | 0, f = f + Math.imul(Dt, ne) | 0, f = f + Math.imul(qt, re) | 0, x = x + Math.imul(qt, ne) | 0, m = m + Math.imul(Nt, ie) | 0, f = f + Math.imul(Nt, oe) | 0, f = f + Math.imul(Mt, ie) | 0, x = x + Math.imul(Mt, oe) | 0, m = m + Math.imul(Wt, se) | 0, f = f + Math.imul(Wt, ae) | 0, f = f + Math.imul(Ht, se) | 0, x = x + Math.imul(Ht, ae) | 0, m = m + Math.imul(Ot, ue) | 0, f = f + Math.imul(Ot, ce) | 0, f = f + Math.imul(Kt, ue) | 0, x = x + Math.imul(Kt, ce) | 0, m = m + Math.imul(kt, fe) | 0, f = f + Math.imul(kt, he) | 0, f = f + Math.imul(At, fe) | 0, x = x + Math.imul(At, he) | 0, m = m + Math.imul(at, le) | 0, f = f + Math.imul(at, de) | 0, f = f + Math.imul(ut, le) | 0, x = x + Math.imul(ut, de) | 0, m = m + Math.imul(rt, pe) | 0, f = f + Math.imul(rt, ye) | 0, f = f + Math.imul(ot, pe) | 0, x = x + Math.imul(ot, ye) | 0;
            var Hs = (E + m | 0) + ((f & 8191) << 13) | 0;
            E = (x + (f >>> 13) | 0) + (Hs >>> 26) | 0, Hs &= 67108863, m = Math.imul(Vt, te), f = Math.imul(Vt, ee), f = f + Math.imul(Gt, te) | 0, x = Math.imul(Gt, ee), m = m + Math.imul(zt, re) | 0, f = f + Math.imul(zt, ne) | 0, f = f + Math.imul($t, re) | 0, x = x + Math.imul($t, ne) | 0, m = m + Math.imul(Dt, ie) | 0, f = f + Math.imul(Dt, oe) | 0, f = f + Math.imul(qt, ie) | 0, x = x + Math.imul(qt, oe) | 0, m = m + Math.imul(Nt, se) | 0, f = f + Math.imul(Nt, ae) | 0, f = f + Math.imul(Mt, se) | 0, x = x + Math.imul(Mt, ae) | 0, m = m + Math.imul(Wt, ue) | 0, f = f + Math.imul(Wt, ce) | 0, f = f + Math.imul(Ht, ue) | 0, x = x + Math.imul(Ht, ce) | 0, m = m + Math.imul(Ot, fe) | 0, f = f + Math.imul(Ot, he) | 0, f = f + Math.imul(Kt, fe) | 0, x = x + Math.imul(Kt, he) | 0, m = m + Math.imul(kt, le) | 0, f = f + Math.imul(kt, de) | 0, f = f + Math.imul(At, le) | 0, x = x + Math.imul(At, de) | 0, m = m + Math.imul(at, pe) | 0, f = f + Math.imul(at, ye) | 0, f = f + Math.imul(ut, pe) | 0, x = x + Math.imul(ut, ye) | 0;
            var $s = (E + m | 0) + ((f & 8191) << 13) | 0;
            E = (x + (f >>> 13) | 0) + ($s >>> 26) | 0, $s &= 67108863, m = Math.imul(Vt, re), f = Math.imul(Vt, ne), f = f + Math.imul(Gt, re) | 0, x = Math.imul(Gt, ne), m = m + Math.imul(zt, ie) | 0, f = f + Math.imul(zt, oe) | 0, f = f + Math.imul($t, ie) | 0, x = x + Math.imul($t, oe) | 0, m = m + Math.imul(Dt, se) | 0, f = f + Math.imul(Dt, ae) | 0, f = f + Math.imul(qt, se) | 0, x = x + Math.imul(qt, ae) | 0, m = m + Math.imul(Nt, ue) | 0, f = f + Math.imul(Nt, ce) | 0, f = f + Math.imul(Mt, ue) | 0, x = x + Math.imul(Mt, ce) | 0, m = m + Math.imul(Wt, fe) | 0, f = f + Math.imul(Wt, he) | 0, f = f + Math.imul(Ht, fe) | 0, x = x + Math.imul(Ht, he) | 0, m = m + Math.imul(Ot, le) | 0, f = f + Math.imul(Ot, de) | 0, f = f + Math.imul(Kt, le) | 0, x = x + Math.imul(Kt, de) | 0, m = m + Math.imul(kt, pe) | 0, f = f + Math.imul(kt, ye) | 0, f = f + Math.imul(At, pe) | 0, x = x + Math.imul(At, ye) | 0;
            var Vs = (E + m | 0) + ((f & 8191) << 13) | 0;
            E = (x + (f >>> 13) | 0) + (Vs >>> 26) | 0, Vs &= 67108863, m = Math.imul(Vt, ie), f = Math.imul(Vt, oe), f = f + Math.imul(Gt, ie) | 0, x = Math.imul(Gt, oe), m = m + Math.imul(zt, se) | 0, f = f + Math.imul(zt, ae) | 0, f = f + Math.imul($t, se) | 0, x = x + Math.imul($t, ae) | 0, m = m + Math.imul(Dt, ue) | 0, f = f + Math.imul(Dt, ce) | 0, f = f + Math.imul(qt, ue) | 0, x = x + Math.imul(qt, ce) | 0, m = m + Math.imul(Nt, fe) | 0, f = f + Math.imul(Nt, he) | 0, f = f + Math.imul(Mt, fe) | 0, x = x + Math.imul(Mt, he) | 0, m = m + Math.imul(Wt, le) | 0, f = f + Math.imul(Wt, de) | 0, f = f + Math.imul(Ht, le) | 0, x = x + Math.imul(Ht, de) | 0, m = m + Math.imul(Ot, pe) | 0, f = f + Math.imul(Ot, ye) | 0, f = f + Math.imul(Kt, pe) | 0, x = x + Math.imul(Kt, ye) | 0;
            var Gs = (E + m | 0) + ((f & 8191) << 13) | 0;
            E = (x + (f >>> 13) | 0) + (Gs >>> 26) | 0, Gs &= 67108863, m = Math.imul(Vt, se), f = Math.imul(Vt, ae), f = f + Math.imul(Gt, se) | 0, x = Math.imul(Gt, ae), m = m + Math.imul(zt, ue) | 0, f = f + Math.imul(zt, ce) | 0, f = f + Math.imul($t, ue) | 0, x = x + Math.imul($t, ce) | 0, m = m + Math.imul(Dt, fe) | 0, f = f + Math.imul(Dt, he) | 0, f = f + Math.imul(qt, fe) | 0, x = x + Math.imul(qt, he) | 0, m = m + Math.imul(Nt, le) | 0, f = f + Math.imul(Nt, de) | 0, f = f + Math.imul(Mt, le) | 0, x = x + Math.imul(Mt, de) | 0, m = m + Math.imul(Wt, pe) | 0, f = f + Math.imul(Wt, ye) | 0, f = f + Math.imul(Ht, pe) | 0, x = x + Math.imul(Ht, ye) | 0;
            var js = (E + m | 0) + ((f & 8191) << 13) | 0;
            E = (x + (f >>> 13) | 0) + (js >>> 26) | 0, js &= 67108863, m = Math.imul(Vt, ue), f = Math.imul(Vt, ce), f = f + Math.imul(Gt, ue) | 0, x = Math.imul(Gt, ce), m = m + Math.imul(zt, fe) | 0, f = f + Math.imul(zt, he) | 0, f = f + Math.imul($t, fe) | 0, x = x + Math.imul($t, he) | 0, m = m + Math.imul(Dt, le) | 0, f = f + Math.imul(Dt, de) | 0, f = f + Math.imul(qt, le) | 0, x = x + Math.imul(qt, de) | 0, m = m + Math.imul(Nt, pe) | 0, f = f + Math.imul(Nt, ye) | 0, f = f + Math.imul(Mt, pe) | 0, x = x + Math.imul(Mt, ye) | 0;
            var Ys = (E + m | 0) + ((f & 8191) << 13) | 0;
            E = (x + (f >>> 13) | 0) + (Ys >>> 26) | 0, Ys &= 67108863, m = Math.imul(Vt, fe), f = Math.imul(Vt, he), f = f + Math.imul(Gt, fe) | 0, x = Math.imul(Gt, he), m = m + Math.imul(zt, le) | 0, f = f + Math.imul(zt, de) | 0, f = f + Math.imul($t, le) | 0, x = x + Math.imul($t, de) | 0, m = m + Math.imul(Dt, pe) | 0, f = f + Math.imul(Dt, ye) | 0, f = f + Math.imul(qt, pe) | 0, x = x + Math.imul(qt, ye) | 0;
            var Zs = (E + m | 0) + ((f & 8191) << 13) | 0;
            E = (x + (f >>> 13) | 0) + (Zs >>> 26) | 0, Zs &= 67108863, m = Math.imul(Vt, le), f = Math.imul(Vt, de), f = f + Math.imul(Gt, le) | 0, x = Math.imul(Gt, de), m = m + Math.imul(zt, pe) | 0, f = f + Math.imul(zt, ye) | 0, f = f + Math.imul($t, pe) | 0, x = x + Math.imul($t, ye) | 0;
            var Xs = (E + m | 0) + ((f & 8191) << 13) | 0;
            E = (x + (f >>> 13) | 0) + (Xs >>> 26) | 0, Xs &= 67108863, m = Math.imul(Vt, pe), f = Math.imul(Vt, ye), f = f + Math.imul(Gt, pe) | 0, x = Math.imul(Gt, ye);
            var Js = (E + m | 0) + ((f & 8191) << 13) | 0;
            return E = (x + (f >>> 13) | 0) + (Js >>> 26) | 0, Js &= 67108863, w[0] = Ps, w[1] = Cs, w[2] = Fs, w[3] = Os, w[4] = Ns, w[5] = Ds, w[6] = qs, w[7] = zs, w[8] = Ks, w[9] = Ws, w[10] = Hs, w[11] = $s, w[12] = Vs, w[13] = Gs, w[14] = js, w[15] = Ys, w[16] = Zs, w[17] = Xs, w[18] = Js, E !== 0 && (w[19] = E, l.length++), l
        };
        Math.imul || (T = A);

        function z(B, u, h) {
            h.negative = u.negative ^ B.negative, h.length = B.length + u.length;
            for (var l = 0, p = 0, y = 0; y < h.length - 1; y++) {
                var w = p;
                p = 0;
                for (var E = l & 67108863, m = Math.min(y, u.length - 1), f = Math.max(0, y - B.length + 1); f <= m; f++) {
                    var x = y - f,
                        F = B.words[x] | 0,
                        K = u.words[f] | 0,
                        q = F * K,
                        V = q & 67108863;
                    w = w + (q / 67108864 | 0) | 0, V = V + E | 0, E = V & 67108863, w = w + (V >>> 26) | 0, p += w >>> 26, w &= 67108863
                }
                h.words[y] = E, l = w, w = p
            }
            return l !== 0 ? h.words[y] = l : h.length--, h._strip()
        }

        function N(B, u, h) {
            return z(B, u, h)
        }
        i.prototype.mulTo = function(u, h) {
            var l, p = this.length + u.length;
            return this.length === 10 && u.length === 10 ? l = T(this, u, h) : p < 63 ? l = A(this, u, h) : p < 1024 ? l = z(this, u, h) : l = N(this, u, h), l
        };

        function G(B, u) {
            this.x = B, this.y = u
        }
        G.prototype.makeRBT = function(u) {
            for (var h = new Array(u), l = i.prototype._countBits(u) - 1, p = 0; p < u; p++) h[p] = this.revBin(p, l, u);
            return h
        }, G.prototype.revBin = function(u, h, l) {
            if (u === 0 || u === l - 1) return u;
            for (var p = 0, y = 0; y < h; y++) p |= (u & 1) << h - y - 1, u >>= 1;
            return p
        }, G.prototype.permute = function(u, h, l, p, y, w) {
            for (var E = 0; E < w; E++) p[E] = h[u[E]], y[E] = l[u[E]]
        }, G.prototype.transform = function(u, h, l, p, y, w) {
            this.permute(w, u, h, l, p, y);
            for (var E = 1; E < y; E <<= 1)
                for (var m = E << 1, f = Math.cos(2 * Math.PI / m), x = Math.sin(2 * Math.PI / m), F = 0; F < y; F += m)
                    for (var K = f, q = x, V = 0; V < E; V++) {
                        var rt = l[F + V],
                            ot = p[F + V],
                            Lt = l[F + V + E],
                            at = p[F + V + E],
                            ut = K * Lt - q * at;
                        at = K * at + q * Lt, Lt = ut, l[F + V] = rt + Lt, p[F + V] = ot + at, l[F + V + E] = rt - Lt, p[F + V + E] = ot - at, V !== m && (ut = f * K - x * q, q = f * q + x * K, K = ut)
                    }
        }, G.prototype.guessLen13b = function(u, h) {
            var l = Math.max(h, u) | 1,
                p = l & 1,
                y = 0;
            for (l = l / 2 | 0; l; l = l >>> 1) y++;
            return 1 << y + 1 + p
        }, G.prototype.conjugate = function(u, h, l) {
            if (!(l <= 1))
                for (var p = 0; p < l / 2; p++) {
                    var y = u[p];
                    u[p] = u[l - p - 1], u[l - p - 1] = y, y = h[p], h[p] = -h[l - p - 1], h[l - p - 1] = -y
                }
        }, G.prototype.normalize13b = function(u, h) {
            for (var l = 0, p = 0; p < h / 2; p++) {
                var y = Math.round(u[2 * p + 1] / h) * 8192 + Math.round(u[2 * p] / h) + l;
                u[p] = y & 67108863, y < 67108864 ? l = 0 : l = y / 67108864 | 0
            }
            return u
        }, G.prototype.convert13b = function(u, h, l, p) {
            for (var y = 0, w = 0; w < h; w++) y = y + (u[w] | 0), l[2 * w] = y & 8191, y = y >>> 13, l[2 * w + 1] = y & 8191, y = y >>> 13;
            for (w = 2 * h; w < p; ++w) l[w] = 0;
            e(y === 0), e((y & -8192) === 0)
        }, G.prototype.stub = function(u) {
            for (var h = new Array(u), l = 0; l < u; l++) h[l] = 0;
            return h
        }, G.prototype.mulp = function(u, h, l) {
            var p = 2 * this.guessLen13b(u.length, h.length),
                y = this.makeRBT(p),
                w = this.stub(p),
                E = new Array(p),
                m = new Array(p),
                f = new Array(p),
                x = new Array(p),
                F = new Array(p),
                K = new Array(p),
                q = l.words;
            q.length = p, this.convert13b(u.words, u.length, E, p), this.convert13b(h.words, h.length, x, p), this.transform(E, w, m, f, p, y), this.transform(x, w, F, K, p, y);
            for (var V = 0; V < p; V++) {
                var rt = m[V] * F[V] - f[V] * K[V];
                f[V] = m[V] * K[V] + f[V] * F[V], m[V] = rt
            }
            return this.conjugate(m, f, p), this.transform(m, f, q, w, p, y), this.conjugate(q, w, p), this.normalize13b(q, p), l.negative = u.negative ^ h.negative, l.length = u.length + h.length, l._strip()
        }, i.prototype.mul = function(u) {
            var h = new i(null);
            return h.words = new Array(this.length + u.length), this.mulTo(u, h)
        }, i.prototype.mulf = function(u) {
            var h = new i(null);
            return h.words = new Array(this.length + u.length), N(this, u, h)
        }, i.prototype.imul = function(u) {
            return this.clone().mulTo(u, this)
        }, i.prototype.imuln = function(u) {
            var h = u < 0;
            h && (u = -u), e(typeof u == "number"), e(u < 67108864);
            for (var l = 0, p = 0; p < this.length; p++) {
                var y = (this.words[p] | 0) * u,
                    w = (y & 67108863) + (l & 67108863);
                l >>= 26, l += y / 67108864 | 0, l += w >>> 26, this.words[p] = w & 67108863
            }
            return l !== 0 && (this.words[p] = l, this.length++), h ? this.ineg() : this
        }, i.prototype.muln = function(u) {
            return this.clone().imuln(u)
        }, i.prototype.sqr = function() {
            return this.mul(this)
        }, i.prototype.isqr = function() {
            return this.imul(this.clone())
        }, i.prototype.pow = function(u) {
            var h = v(u);
            if (h.length === 0) return new i(1);
            for (var l = this, p = 0; p < h.length && h[p] === 0; p++, l = l.sqr());
            if (++p < h.length)
                for (var y = l.sqr(); p < h.length; p++, y = y.sqr()) h[p] !== 0 && (l = l.mul(y));
            return l
        }, i.prototype.iushln = function(u) {
            e(typeof u == "number" && u >= 0);
            var h = u % 26,
                l = (u - h) / 26,
                p = 67108863 >>> 26 - h << 26 - h,
                y;
            if (h !== 0) {
                var w = 0;
                for (y = 0; y < this.length; y++) {
                    var E = this.words[y] & p,
                        m = (this.words[y] | 0) - E << h;
                    this.words[y] = m | w, w = E >>> 26 - h
                }
                w && (this.words[y] = w, this.length++)
            }
            if (l !== 0) {
                for (y = this.length - 1; y >= 0; y--) this.words[y + l] = this.words[y];
                for (y = 0; y < l; y++) this.words[y] = 0;
                this.length += l
            }
            return this._strip()
        }, i.prototype.ishln = function(u) {
            return e(this.negative === 0), this.iushln(u)
        }, i.prototype.iushrn = function(u, h, l) {
            e(typeof u == "number" && u >= 0);
            var p;
            h ? p = (h - h % 26) / 26 : p = 0;
            var y = u % 26,
                w = Math.min((u - y) / 26, this.length),
                E = 67108863 ^ 67108863 >>> y << y,
                m = l;
            if (p -= w, p = Math.max(0, p), m) {
                for (var f = 0; f < w; f++) m.words[f] = this.words[f];
                m.length = w
            }
            if (w !== 0)
                if (this.length > w)
                    for (this.length -= w, f = 0; f < this.length; f++) this.words[f] = this.words[f + w];
                else this.words[0] = 0, this.length = 1;
            var x = 0;
            for (f = this.length - 1; f >= 0 && (x !== 0 || f >= p); f--) {
                var F = this.words[f] | 0;
                this.words[f] = x << 26 - y | F >>> y, x = F & E
            }
            return m && x !== 0 && (m.words[m.length++] = x), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip()
        }, i.prototype.ishrn = function(u, h, l) {
            return e(this.negative === 0), this.iushrn(u, h, l)
        }, i.prototype.shln = function(u) {
            return this.clone().ishln(u)
        }, i.prototype.ushln = function(u) {
            return this.clone().iushln(u)
        }, i.prototype.shrn = function(u) {
            return this.clone().ishrn(u)
        }, i.prototype.ushrn = function(u) {
            return this.clone().iushrn(u)
        }, i.prototype.testn = function(u) {
            e(typeof u == "number" && u >= 0);
            var h = u % 26,
                l = (u - h) / 26,
                p = 1 << h;
            if (this.length <= l) return !1;
            var y = this.words[l];
            return !!(y & p)
        }, i.prototype.imaskn = function(u) {
            e(typeof u == "number" && u >= 0);
            var h = u % 26,
                l = (u - h) / 26;
            if (e(this.negative === 0, "imaskn works only with positive numbers"), this.length <= l) return this;
            if (h !== 0 && l++, this.length = Math.min(l, this.length), h !== 0) {
                var p = 67108863 ^ 67108863 >>> h << h;
                this.words[this.length - 1] &= p
            }
            return this._strip()
        }, i.prototype.maskn = function(u) {
            return this.clone().imaskn(u)
        }, i.prototype.iaddn = function(u) {
            return e(typeof u == "number"), e(u < 67108864), u < 0 ? this.isubn(-u) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= u ? (this.words[0] = u - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(u), this.negative = 1, this) : this._iaddn(u)
        }, i.prototype._iaddn = function(u) {
            this.words[0] += u;
            for (var h = 0; h < this.length && this.words[h] >= 67108864; h++) this.words[h] -= 67108864, h === this.length - 1 ? this.words[h + 1] = 1 : this.words[h + 1]++;
            return this.length = Math.max(this.length, h + 1), this
        }, i.prototype.isubn = function(u) {
            if (e(typeof u == "number"), e(u < 67108864), u < 0) return this.iaddn(-u);
            if (this.negative !== 0) return this.negative = 0, this.iaddn(u), this.negative = 1, this;
            if (this.words[0] -= u, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
            else
                for (var h = 0; h < this.length && this.words[h] < 0; h++) this.words[h] += 67108864, this.words[h + 1] -= 1;
            return this._strip()
        }, i.prototype.addn = function(u) {
            return this.clone().iaddn(u)
        }, i.prototype.subn = function(u) {
            return this.clone().isubn(u)
        }, i.prototype.iabs = function() {
            return this.negative = 0, this
        }, i.prototype.abs = function() {
            return this.clone().iabs()
        }, i.prototype._ishlnsubmul = function(u, h, l) {
            var p = u.length + l,
                y;
            this._expand(p);
            var w, E = 0;
            for (y = 0; y < u.length; y++) {
                w = (this.words[y + l] | 0) + E;
                var m = (u.words[y] | 0) * h;
                w -= m & 67108863, E = (w >> 26) - (m / 67108864 | 0), this.words[y + l] = w & 67108863
            }
            for (; y < this.length - l; y++) w = (this.words[y + l] | 0) + E, E = w >> 26, this.words[y + l] = w & 67108863;
            if (E === 0) return this._strip();
            for (e(E === -1), E = 0, y = 0; y < this.length; y++) w = -(this.words[y] | 0) + E, E = w >> 26, this.words[y] = w & 67108863;
            return this.negative = 1, this._strip()
        }, i.prototype._wordDiv = function(u, h) {
            var l = this.length - u.length,
                p = this.clone(),
                y = u,
                w = y.words[y.length - 1] | 0,
                E = this._countBits(w);
            l = 26 - E, l !== 0 && (y = y.ushln(l), p.iushln(l), w = y.words[y.length - 1] | 0);
            var m = p.length - y.length,
                f;
            if (h !== "mod") {
                f = new i(null), f.length = m + 1, f.words = new Array(f.length);
                for (var x = 0; x < f.length; x++) f.words[x] = 0
            }
            var F = p.clone()._ishlnsubmul(y, 1, m);
            F.negative === 0 && (p = F, f && (f.words[m] = 1));
            for (var K = m - 1; K >= 0; K--) {
                var q = (p.words[y.length + K] | 0) * 67108864 + (p.words[y.length + K - 1] | 0);
                for (q = Math.min(q / w | 0, 67108863), p._ishlnsubmul(y, q, K); p.negative !== 0;) q--, p.negative = 0, p._ishlnsubmul(y, 1, K), p.isZero() || (p.negative ^= 1);
                f && (f.words[K] = q)
            }
            return f && f._strip(), p._strip(), h !== "div" && l !== 0 && p.iushrn(l), {
                div: f || null,
                mod: p
            }
        }, i.prototype.divmod = function(u, h, l) {
            if (e(!u.isZero()), this.isZero()) return {
                div: new i(0),
                mod: new i(0)
            };
            var p, y, w;
            return this.negative !== 0 && u.negative === 0 ? (w = this.neg().divmod(u, h), h !== "mod" && (p = w.div.neg()), h !== "div" && (y = w.mod.neg(), l && y.negative !== 0 && y.iadd(u)), {
                div: p,
                mod: y
            }) : this.negative === 0 && u.negative !== 0 ? (w = this.divmod(u.neg(), h), h !== "mod" && (p = w.div.neg()), {
                div: p,
                mod: w.mod
            }) : this.negative & u.negative ? (w = this.neg().divmod(u.neg(), h), h !== "div" && (y = w.mod.neg(), l && y.negative !== 0 && y.isub(u)), {
                div: w.div,
                mod: y
            }) : u.length > this.length || this.cmp(u) < 0 ? {
                div: new i(0),
                mod: this
            } : u.length === 1 ? h === "div" ? {
                div: this.divn(u.words[0]),
                mod: null
            } : h === "mod" ? {
                div: null,
                mod: new i(this.modrn(u.words[0]))
            } : {
                div: this.divn(u.words[0]),
                mod: new i(this.modrn(u.words[0]))
            } : this._wordDiv(u, h)
        }, i.prototype.div = function(u) {
            return this.divmod(u, "div", !1).div
        }, i.prototype.mod = function(u) {
            return this.divmod(u, "mod", !1).mod
        }, i.prototype.umod = function(u) {
            return this.divmod(u, "mod", !0).mod
        }, i.prototype.divRound = function(u) {
            var h = this.divmod(u);
            if (h.mod.isZero()) return h.div;
            var l = h.div.negative !== 0 ? h.mod.isub(u) : h.mod,
                p = u.ushrn(1),
                y = u.andln(1),
                w = l.cmp(p);
            return w < 0 || y === 1 && w === 0 ? h.div : h.div.negative !== 0 ? h.div.isubn(1) : h.div.iaddn(1)
        }, i.prototype.modrn = function(u) {
            var h = u < 0;
            h && (u = -u), e(u <= 67108863);
            for (var l = (1 << 26) % u, p = 0, y = this.length - 1; y >= 0; y--) p = (l * p + (this.words[y] | 0)) % u;
            return h ? -p : p
        }, i.prototype.modn = function(u) {
            return this.modrn(u)
        }, i.prototype.idivn = function(u) {
            var h = u < 0;
            h && (u = -u), e(u <= 67108863);
            for (var l = 0, p = this.length - 1; p >= 0; p--) {
                var y = (this.words[p] | 0) + l * 67108864;
                this.words[p] = y / u | 0, l = y % u
            }
            return this._strip(), h ? this.ineg() : this
        }, i.prototype.divn = function(u) {
            return this.clone().idivn(u)
        }, i.prototype.egcd = function(u) {
            e(u.negative === 0), e(!u.isZero());
            var h = this,
                l = u.clone();
            h.negative !== 0 ? h = h.umod(u) : h = h.clone();
            for (var p = new i(1), y = new i(0), w = new i(0), E = new i(1), m = 0; h.isEven() && l.isEven();) h.iushrn(1), l.iushrn(1), ++m;
            for (var f = l.clone(), x = h.clone(); !h.isZero();) {
                for (var F = 0, K = 1; !(h.words[0] & K) && F < 26; ++F, K <<= 1);
                if (F > 0)
                    for (h.iushrn(F); F-- > 0;)(p.isOdd() || y.isOdd()) && (p.iadd(f), y.isub(x)), p.iushrn(1), y.iushrn(1);
                for (var q = 0, V = 1; !(l.words[0] & V) && q < 26; ++q, V <<= 1);
                if (q > 0)
                    for (l.iushrn(q); q-- > 0;)(w.isOdd() || E.isOdd()) && (w.iadd(f), E.isub(x)), w.iushrn(1), E.iushrn(1);
                h.cmp(l) >= 0 ? (h.isub(l), p.isub(w), y.isub(E)) : (l.isub(h), w.isub(p), E.isub(y))
            }
            return {
                a: w,
                b: E,
                gcd: l.iushln(m)
            }
        }, i.prototype._invmp = function(u) {
            e(u.negative === 0), e(!u.isZero());
            var h = this,
                l = u.clone();
            h.negative !== 0 ? h = h.umod(u) : h = h.clone();
            for (var p = new i(1), y = new i(0), w = l.clone(); h.cmpn(1) > 0 && l.cmpn(1) > 0;) {
                for (var E = 0, m = 1; !(h.words[0] & m) && E < 26; ++E, m <<= 1);
                if (E > 0)
                    for (h.iushrn(E); E-- > 0;) p.isOdd() && p.iadd(w), p.iushrn(1);
                for (var f = 0, x = 1; !(l.words[0] & x) && f < 26; ++f, x <<= 1);
                if (f > 0)
                    for (l.iushrn(f); f-- > 0;) y.isOdd() && y.iadd(w), y.iushrn(1);
                h.cmp(l) >= 0 ? (h.isub(l), p.isub(y)) : (l.isub(h), y.isub(p))
            }
            var F;
            return h.cmpn(1) === 0 ? F = p : F = y, F.cmpn(0) < 0 && F.iadd(u), F
        }, i.prototype.gcd = function(u) {
            if (this.isZero()) return u.abs();
            if (u.isZero()) return this.abs();
            var h = this.clone(),
                l = u.clone();
            h.negative = 0, l.negative = 0;
            for (var p = 0; h.isEven() && l.isEven(); p++) h.iushrn(1), l.iushrn(1);
            do {
                for (; h.isEven();) h.iushrn(1);
                for (; l.isEven();) l.iushrn(1);
                var y = h.cmp(l);
                if (y < 0) {
                    var w = h;
                    h = l, l = w
                } else if (y === 0 || l.cmpn(1) === 0) break;
                h.isub(l)
            } while (!0);
            return l.iushln(p)
        }, i.prototype.invm = function(u) {
            return this.egcd(u).a.umod(u)
        }, i.prototype.isEven = function() {
            return (this.words[0] & 1) === 0
        }, i.prototype.isOdd = function() {
            return (this.words[0] & 1) === 1
        }, i.prototype.andln = function(u) {
            return this.words[0] & u
        }, i.prototype.bincn = function(u) {
            e(typeof u == "number");
            var h = u % 26,
                l = (u - h) / 26,
                p = 1 << h;
            if (this.length <= l) return this._expand(l + 1), this.words[l] |= p, this;
            for (var y = p, w = l; y !== 0 && w < this.length; w++) {
                var E = this.words[w] | 0;
                E += y, y = E >>> 26, E &= 67108863, this.words[w] = E
            }
            return y !== 0 && (this.words[w] = y, this.length++), this
        }, i.prototype.isZero = function() {
            return this.length === 1 && this.words[0] === 0
        }, i.prototype.cmpn = function(u) {
            var h = u < 0;
            if (this.negative !== 0 && !h) return -1;
            if (this.negative === 0 && h) return 1;
            this._strip();
            var l;
            if (this.length > 1) l = 1;
            else {
                h && (u = -u), e(u <= 67108863, "Number is too big");
                var p = this.words[0] | 0;
                l = p === u ? 0 : p < u ? -1 : 1
            }
            return this.negative !== 0 ? -l | 0 : l
        }, i.prototype.cmp = function(u) {
            if (this.negative !== 0 && u.negative === 0) return -1;
            if (this.negative === 0 && u.negative !== 0) return 1;
            var h = this.ucmp(u);
            return this.negative !== 0 ? -h | 0 : h
        }, i.prototype.ucmp = function(u) {
            if (this.length > u.length) return 1;
            if (this.length < u.length) return -1;
            for (var h = 0, l = this.length - 1; l >= 0; l--) {
                var p = this.words[l] | 0,
                    y = u.words[l] | 0;
                if (p !== y) {
                    p < y ? h = -1 : p > y && (h = 1);
                    break
                }
            }
            return h
        }, i.prototype.gtn = function(u) {
            return this.cmpn(u) === 1
        }, i.prototype.gt = function(u) {
            return this.cmp(u) === 1
        }, i.prototype.gten = function(u) {
            return this.cmpn(u) >= 0
        }, i.prototype.gte = function(u) {
            return this.cmp(u) >= 0
        }, i.prototype.ltn = function(u) {
            return this.cmpn(u) === -1
        }, i.prototype.lt = function(u) {
            return this.cmp(u) === -1
        }, i.prototype.lten = function(u) {
            return this.cmpn(u) <= 0
        }, i.prototype.lte = function(u) {
            return this.cmp(u) <= 0
        }, i.prototype.eqn = function(u) {
            return this.cmpn(u) === 0
        }, i.prototype.eq = function(u) {
            return this.cmp(u) === 0
        }, i.red = function(u) {
            return new Q(u)
        }, i.prototype.toRed = function(u) {
            return e(!this.red, "Already a number in reduction context"), e(this.negative === 0, "red works only with positives"), u.convertTo(this)._forceRed(u)
        }, i.prototype.fromRed = function() {
            return e(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
        }, i.prototype._forceRed = function(u) {
            return this.red = u, this
        }, i.prototype.forceRed = function(u) {
            return e(!this.red, "Already a number in reduction context"), this._forceRed(u)
        }, i.prototype.redAdd = function(u) {
            return e(this.red, "redAdd works only with red numbers"), this.red.add(this, u)
        }, i.prototype.redIAdd = function(u) {
            return e(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, u)
        }, i.prototype.redSub = function(u) {
            return e(this.red, "redSub works only with red numbers"), this.red.sub(this, u)
        }, i.prototype.redISub = function(u) {
            return e(this.red, "redISub works only with red numbers"), this.red.isub(this, u)
        }, i.prototype.redShl = function(u) {
            return e(this.red, "redShl works only with red numbers"), this.red.shl(this, u)
        }, i.prototype.redMul = function(u) {
            return e(this.red, "redMul works only with red numbers"), this.red._verify2(this, u), this.red.mul(this, u)
        }, i.prototype.redIMul = function(u) {
            return e(this.red, "redMul works only with red numbers"), this.red._verify2(this, u), this.red.imul(this, u)
        }, i.prototype.redSqr = function() {
            return e(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
        }, i.prototype.redISqr = function() {
            return e(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
        }, i.prototype.redSqrt = function() {
            return e(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
        }, i.prototype.redInvm = function() {
            return e(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
        }, i.prototype.redNeg = function() {
            return e(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
        }, i.prototype.redPow = function(u) {
            return e(this.red && !u.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, u)
        };
        var H = {
            k256: null,
            p224: null,
            p192: null,
            p25519: null
        };

        function W(B, u) {
            this.name = B, this.p = new i(u, 16), this.n = this.p.bitLength(), this.k = new i(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
        }
        W.prototype._tmp = function() {
            var u = new i(null);
            return u.words = new Array(Math.ceil(this.n / 13)), u
        }, W.prototype.ireduce = function(u) {
            var h = u,
                l;
            do this.split(h, this.tmp), h = this.imulK(h), h = h.iadd(this.tmp), l = h.bitLength(); while (l > this.n);
            var p = l < this.n ? -1 : h.ucmp(this.p);
            return p === 0 ? (h.words[0] = 0, h.length = 1) : p > 0 ? h.isub(this.p) : h.strip !== void 0 ? h.strip() : h._strip(), h
        }, W.prototype.split = function(u, h) {
            u.iushrn(this.n, 0, h)
        }, W.prototype.imulK = function(u) {
            return u.imul(this.k)
        };

        function J() {
            W.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
        }
        n(J, W), J.prototype.split = function(u, h) {
            for (var l = 4194303, p = Math.min(u.length, 9), y = 0; y < p; y++) h.words[y] = u.words[y];
            if (h.length = p, u.length <= 9) {
                u.words[0] = 0, u.length = 1;
                return
            }
            var w = u.words[9];
            for (h.words[h.length++] = w & l, y = 10; y < u.length; y++) {
                var E = u.words[y] | 0;
                u.words[y - 10] = (E & l) << 4 | w >>> 22, w = E
            }
            w >>>= 22, u.words[y - 10] = w, w === 0 && u.length > 10 ? u.length -= 10 : u.length -= 9
        }, J.prototype.imulK = function(u) {
            u.words[u.length] = 0, u.words[u.length + 1] = 0, u.length += 2;
            for (var h = 0, l = 0; l < u.length; l++) {
                var p = u.words[l] | 0;
                h += p * 977, u.words[l] = h & 67108863, h = p * 64 + (h / 67108864 | 0)
            }
            return u.words[u.length - 1] === 0 && (u.length--, u.words[u.length - 1] === 0 && u.length--), u
        };

        function et() {
            W.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
        }
        n(et, W);

        function mt() {
            W.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
        }
        n(mt, W);

        function dt() {
            W.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
        }
        n(dt, W), dt.prototype.imulK = function(u) {
            for (var h = 0, l = 0; l < u.length; l++) {
                var p = (u.words[l] | 0) * 19 + h,
                    y = p & 67108863;
                p >>>= 26, u.words[l] = y, h = p
            }
            return h !== 0 && (u.words[u.length++] = h), u
        }, i._prime = function(u) {
            if (H[u]) return H[u];
            var h;
            if (u === "k256") h = new J;
            else if (u === "p224") h = new et;
            else if (u === "p192") h = new mt;
            else if (u === "p25519") h = new dt;
            else throw new Error("Unknown prime " + u);
            return H[u] = h, h
        };

        function Q(B) {
            if (typeof B == "string") {
                var u = i._prime(B);
                this.m = u.p, this.prime = u
            } else e(B.gtn(1), "modulus must be greater than 1"), this.m = B, this.prime = null
        }
        Q.prototype._verify1 = function(u) {
            e(u.negative === 0, "red works only with positives"), e(u.red, "red works only with red numbers")
        }, Q.prototype._verify2 = function(u, h) {
            e((u.negative | h.negative) === 0, "red works only with positives"), e(u.red && u.red === h.red, "red works only with red numbers")
        }, Q.prototype.imod = function(u) {
            return this.prime ? this.prime.ireduce(u)._forceRed(this) : (d(u, u.umod(this.m)._forceRed(this)), u)
        }, Q.prototype.neg = function(u) {
            return u.isZero() ? u.clone() : this.m.sub(u)._forceRed(this)
        }, Q.prototype.add = function(u, h) {
            this._verify2(u, h);
            var l = u.add(h);
            return l.cmp(this.m) >= 0 && l.isub(this.m), l._forceRed(this)
        }, Q.prototype.iadd = function(u, h) {
            this._verify2(u, h);
            var l = u.iadd(h);
            return l.cmp(this.m) >= 0 && l.isub(this.m), l
        }, Q.prototype.sub = function(u, h) {
            this._verify2(u, h);
            var l = u.sub(h);
            return l.cmpn(0) < 0 && l.iadd(this.m), l._forceRed(this)
        }, Q.prototype.isub = function(u, h) {
            this._verify2(u, h);
            var l = u.isub(h);
            return l.cmpn(0) < 0 && l.iadd(this.m), l
        }, Q.prototype.shl = function(u, h) {
            return this._verify1(u), this.imod(u.ushln(h))
        }, Q.prototype.imul = function(u, h) {
            return this._verify2(u, h), this.imod(u.imul(h))
        }, Q.prototype.mul = function(u, h) {
            return this._verify2(u, h), this.imod(u.mul(h))
        }, Q.prototype.isqr = function(u) {
            return this.imul(u, u.clone())
        }, Q.prototype.sqr = function(u) {
            return this.mul(u, u)
        }, Q.prototype.sqrt = function(u) {
            if (u.isZero()) return u.clone();
            var h = this.m.andln(3);
            if (e(h % 2 === 1), h === 3) {
                var l = this.m.add(new i(1)).iushrn(2);
                return this.pow(u, l)
            }
            for (var p = this.m.subn(1), y = 0; !p.isZero() && p.andln(1) === 0;) y++, p.iushrn(1);
            e(!p.isZero());
            var w = new i(1).toRed(this),
                E = w.redNeg(),
                m = this.m.subn(1).iushrn(1),
                f = this.m.bitLength();
            for (f = new i(2 * f * f).toRed(this); this.pow(f, m).cmp(E) !== 0;) f.redIAdd(E);
            for (var x = this.pow(f, p), F = this.pow(u, p.addn(1).iushrn(1)), K = this.pow(u, p), q = y; K.cmp(w) !== 0;) {
                for (var V = K, rt = 0; V.cmp(w) !== 0; rt++) V = V.redSqr();
                e(rt < q);
                var ot = this.pow(x, new i(1).iushln(q - rt - 1));
                F = F.redMul(ot), x = ot.redSqr(), K = K.redMul(x), q = rt
            }
            return F
        }, Q.prototype.invm = function(u) {
            var h = u._invmp(this.m);
            return h.negative !== 0 ? (h.negative = 0, this.imod(h).redNeg()) : this.imod(h)
        }, Q.prototype.pow = function(u, h) {
            if (h.isZero()) return new i(1).toRed(this);
            if (h.cmpn(1) === 0) return u.clone();
            var l = 4,
                p = new Array(1 << l);
            p[0] = new i(1).toRed(this), p[1] = u;
            for (var y = 2; y < p.length; y++) p[y] = this.mul(p[y - 1], u);
            var w = p[0],
                E = 0,
                m = 0,
                f = h.bitLength() % 26;
            for (f === 0 && (f = 26), y = h.length - 1; y >= 0; y--) {
                for (var x = h.words[y], F = f - 1; F >= 0; F--) {
                    var K = x >> F & 1;
                    if (w !== p[0] && (w = this.sqr(w)), K === 0 && E === 0) {
                        m = 0;
                        continue
                    }
                    E <<= 1, E |= K, m++, !(m !== l && (y !== 0 || F !== 0)) && (w = this.mul(w, p[E]), m = 0, E = 0)
                }
                f = 26
            }
            return w
        }, Q.prototype.convertTo = function(u) {
            var h = u.umod(this.m);
            return h === u ? h.clone() : h
        }, Q.prototype.convertFrom = function(u) {
            var h = u.clone();
            return h.red = null, h
        }, i.mont = function(u) {
            return new Bt(u)
        };

        function Bt(B) {
            Q.call(this, B), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new i(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
        }
        n(Bt, Q), Bt.prototype.convertTo = function(u) {
            return this.imod(u.ushln(this.shift))
        }, Bt.prototype.convertFrom = function(u) {
            var h = this.imod(u.mul(this.rinv));
            return h.red = null, h
        }, Bt.prototype.imul = function(u, h) {
            if (u.isZero() || h.isZero()) return u.words[0] = 0, u.length = 1, u;
            var l = u.imul(h),
                p = l.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                y = l.isub(p).iushrn(this.shift),
                w = y;
            return y.cmp(this.m) >= 0 ? w = y.isub(this.m) : y.cmpn(0) < 0 && (w = y.iadd(this.m)), w._forceRed(this)
        }, Bt.prototype.mul = function(u, h) {
            if (u.isZero() || h.isZero()) return new i(0)._forceRed(this);
            var l = u.mul(h),
                p = l.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                y = l.isub(p).iushrn(this.shift),
                w = y;
            return y.cmp(this.m) >= 0 ? w = y.isub(this.m) : y.cmpn(0) < 0 && (w = y.iadd(this.m)), w._forceRed(this)
        }, Bt.prototype.invm = function(u) {
            var h = this.imod(u._invmp(this.m).mul(this.r2));
            return h._forceRed(this)
        }
    })(typeof Wa > "u" || Wa, Ff)
});
var Yf = wt(Nn => {
    "use strict";
    var $a = ui(),
        On = ci(),
        Of = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    Nn.Buffer = C;
    Nn.SlowBuffer = Fp;
    Nn.INSPECT_MAX_BYTES = 50;
    var vo = 2147483647;
    Nn.kMaxLength = vo;
    C.TYPED_ARRAY_SUPPORT = Tp();
    !C.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

    function Tp() {
        try {
            var r = new Uint8Array(1),
                t = {
                    foo: function() {
                        return 42
                    }
                };
            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(r, t), r.foo() === 42
        } catch {
            return !1
        }
    }
    Object.defineProperty(C.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (C.isBuffer(this)) return this.buffer
        }
    });
    Object.defineProperty(C.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (C.isBuffer(this)) return this.byteOffset
        }
    });

    function Br(r) {
        if (r > vo) throw new RangeError('The value "' + r + '" is invalid for option "size"');
        var t = new Uint8Array(r);
        return Object.setPrototypeOf(t, C.prototype), t
    }

    function C(r, t, e) {
        if (typeof r == "number") {
            if (typeof t == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
            return Ya(r)
        }
        return qf(r, t, e)
    }
    C.poolSize = 8192;

    function qf(r, t, e) {
        if (typeof r == "string") return Up(r, t);
        if (ArrayBuffer.isView(r)) return Pp(r);
        if (r == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
        if (ir(r, ArrayBuffer) || r && ir(r.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (ir(r, SharedArrayBuffer) || r && ir(r.buffer, SharedArrayBuffer))) return Ga(r, t, e);
        if (typeof r == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        var n = r.valueOf && r.valueOf();
        if (n != null && n !== r) return C.from(n, t, e);
        var i = Cp(r);
        if (i) return i;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof r[Symbol.toPrimitive] == "function") return C.from(r[Symbol.toPrimitive]("string"), t, e);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r)
    }
    C.from = function(r, t, e) {
        return qf(r, t, e)
    };
    Object.setPrototypeOf(C.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(C, Uint8Array);

    function zf(r) {
        if (typeof r != "number") throw new TypeError('"size" argument must be of type number');
        if (r < 0) throw new RangeError('The value "' + r + '" is invalid for option "size"')
    }

    function Mp(r, t, e) {
        return zf(r), r <= 0 ? Br(r) : t !== void 0 ? typeof e == "string" ? Br(r).fill(t, e) : Br(r).fill(t) : Br(r)
    }
    C.alloc = function(r, t, e) {
        return Mp(r, t, e)
    };

    function Ya(r) {
        return zf(r), Br(r < 0 ? 0 : Za(r) | 0)
    }
    C.allocUnsafe = function(r) {
        return Ya(r)
    };
    C.allocUnsafeSlow = function(r) {
        return Ya(r)
    };

    function Up(r, t) {
        if ((typeof t != "string" || t === "") && (t = "utf8"), !C.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
        var e = Kf(r, t) | 0,
            n = Br(e),
            i = n.write(r, t);
        return i !== e && (n = n.slice(0, i)), n
    }

    function Va(r) {
        for (var t = r.length < 0 ? 0 : Za(r.length) | 0, e = Br(t), n = 0; n < t; n += 1) e[n] = r[n] & 255;
        return e
    }

    function Pp(r) {
        if (ir(r, Uint8Array)) {
            var t = new Uint8Array(r);
            return Ga(t.buffer, t.byteOffset, t.byteLength)
        }
        return Va(r)
    }

    function Ga(r, t, e) {
        if (t < 0 || r.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
        if (r.byteLength < t + (e || 0)) throw new RangeError('"length" is outside of buffer bounds');
        var n;
        return t === void 0 && e === void 0 ? n = new Uint8Array(r) : e === void 0 ? n = new Uint8Array(r, t) : n = new Uint8Array(r, t, e), Object.setPrototypeOf(n, C.prototype), n
    }

    function Cp(r) {
        if (C.isBuffer(r)) {
            var t = Za(r.length) | 0,
                e = Br(t);
            return e.length === 0 || r.copy(e, 0, 0, t), e
        }
        if (r.length !== void 0) return typeof r.length != "number" || Xa(r.length) ? Br(0) : Va(r);
        if (r.type === "Buffer" && Array.isArray(r.data)) return Va(r.data)
    }

    function Za(r) {
        if (r >= vo) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + vo.toString(16) + " bytes");
        return r | 0
    }

    function Fp(r) {
        return +r != r && (r = 0), C.alloc(+r)
    }
    C.isBuffer = function(t) {
        return t != null && t._isBuffer === !0 && t !== C.prototype
    };
    C.compare = function(t, e) {
        if (ir(t, Uint8Array) && (t = C.from(t, t.offset, t.byteLength)), ir(e, Uint8Array) && (e = C.from(e, e.offset, e.byteLength)), !C.isBuffer(t) || !C.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (t === e) return 0;
        for (var n = t.length, i = e.length, o = 0, s = Math.min(n, i); o < s; ++o)
            if (t[o] !== e[o]) {
                n = t[o], i = e[o];
                break
            }
        return n < i ? -1 : i < n ? 1 : 0
    };
    C.isEncoding = function(t) {
        switch (String(t).toLowerCase()) {
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
    C.concat = function(t, e) {
        if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (t.length === 0) return C.alloc(0);
        var n;
        if (e === void 0)
            for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
        var i = C.allocUnsafe(e),
            o = 0;
        for (n = 0; n < t.length; ++n) {
            var s = t[n];
            if (ir(s, Uint8Array)) o + s.length > i.length ? C.from(s).copy(i, o) : Uint8Array.prototype.set.call(i, s, o);
            else if (C.isBuffer(s)) s.copy(i, o);
            else throw new TypeError('"list" argument must be an Array of Buffers');
            o += s.length
        }
        return i
    };

    function Kf(r, t) {
        if (C.isBuffer(r)) return r.length;
        if (ArrayBuffer.isView(r) || ir(r, ArrayBuffer)) return r.byteLength;
        if (typeof r != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof r);
        var e = r.length,
            n = arguments.length > 2 && arguments[2] === !0;
        if (!n && e === 0) return 0;
        for (var i = !1;;) switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
                return e;
            case "utf8":
            case "utf-8":
                return ja(r).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return e * 2;
            case "hex":
                return e >>> 1;
            case "base64":
                return jf(r).length;
            default:
                if (i) return n ? -1 : ja(r).length;
                t = ("" + t).toLowerCase(), i = !0
        }
    }
    C.byteLength = Kf;

    function Op(r, t, e) {
        var n = !1;
        if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((e === void 0 || e > this.length) && (e = this.length), e <= 0) || (e >>>= 0, t >>>= 0, e <= t)) return "";
        for (r || (r = "utf8");;) switch (r) {
            case "hex":
                return Gp(this, t, e);
            case "utf8":
            case "utf-8":
                return Hf(this, t, e);
            case "ascii":
                return $p(this, t, e);
            case "latin1":
            case "binary":
                return Vp(this, t, e);
            case "base64":
                return Wp(this, t, e);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return jp(this, t, e);
            default:
                if (n) throw new TypeError("Unknown encoding: " + r);
                r = (r + "").toLowerCase(), n = !0
        }
    }
    C.prototype._isBuffer = !0;

    function pn(r, t, e) {
        var n = r[t];
        r[t] = r[e], r[e] = n
    }
    C.prototype.swap16 = function() {
        var t = this.length;
        if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var e = 0; e < t; e += 2) pn(this, e, e + 1);
        return this
    };
    C.prototype.swap32 = function() {
        var t = this.length;
        if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var e = 0; e < t; e += 4) pn(this, e, e + 3), pn(this, e + 1, e + 2);
        return this
    };
    C.prototype.swap64 = function() {
        var t = this.length;
        if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var e = 0; e < t; e += 8) pn(this, e, e + 7), pn(this, e + 1, e + 6), pn(this, e + 2, e + 5), pn(this, e + 3, e + 4);
        return this
    };
    C.prototype.toString = function() {
        var t = this.length;
        return t === 0 ? "" : arguments.length === 0 ? Hf(this, 0, t) : Op.apply(this, arguments)
    };
    C.prototype.toLocaleString = C.prototype.toString;
    C.prototype.equals = function(t) {
        if (!C.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
        return this === t ? !0 : C.compare(this, t) === 0
    };
    C.prototype.inspect = function() {
        var t = "",
            e = Nn.INSPECT_MAX_BYTES;
        return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t += " ... "), "<Buffer " + t + ">"
    };
    Of && (C.prototype[Of] = C.prototype.inspect);
    C.prototype.compare = function(t, e, n, i, o) {
        if (ir(t, Uint8Array) && (t = C.from(t, t.offset, t.byteLength)), !C.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
        if (e === void 0 && (e = 0), n === void 0 && (n = t ? t.length : 0), i === void 0 && (i = 0), o === void 0 && (o = this.length), e < 0 || n > t.length || i < 0 || o > this.length) throw new RangeError("out of range index");
        if (i >= o && e >= n) return 0;
        if (i >= o) return -1;
        if (e >= n) return 1;
        if (e >>>= 0, n >>>= 0, i >>>= 0, o >>>= 0, this === t) return 0;
        for (var s = o - i, a = n - e, c = Math.min(s, a), d = this.slice(i, o), g = t.slice(e, n), b = 0; b < c; ++b)
            if (d[b] !== g[b]) {
                s = d[b], a = g[b];
                break
            }
        return s < a ? -1 : a < s ? 1 : 0
    };

    function Wf(r, t, e, n, i) {
        if (r.length === 0) return -1;
        if (typeof e == "string" ? (n = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), e = +e, Xa(e) && (e = i ? 0 : r.length - 1), e < 0 && (e = r.length + e), e >= r.length) {
            if (i) return -1;
            e = r.length - 1
        } else if (e < 0)
            if (i) e = 0;
            else return -1;
        if (typeof t == "string" && (t = C.from(t, n)), C.isBuffer(t)) return t.length === 0 ? -1 : Nf(r, t, e, n, i);
        if (typeof t == "number") return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(r, t, e) : Uint8Array.prototype.lastIndexOf.call(r, t, e) : Nf(r, [t], e, n, i);
        throw new TypeError("val must be string, number or Buffer")
    }

    function Nf(r, t, e, n, i) {
        var o = 1,
            s = r.length,
            a = t.length;
        if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
            if (r.length < 2 || t.length < 2) return -1;
            o = 2, s /= 2, a /= 2, e /= 2
        }

        function c(I, S) {
            return o === 1 ? I[S] : I.readUInt16BE(S * o)
        }
        var d;
        if (i) {
            var g = -1;
            for (d = e; d < s; d++)
                if (c(r, d) === c(t, g === -1 ? 0 : d - g)) {
                    if (g === -1 && (g = d), d - g + 1 === a) return g * o
                } else g !== -1 && (d -= d - g), g = -1
        } else
            for (e + a > s && (e = s - a), d = e; d >= 0; d--) {
                for (var b = !0, _ = 0; _ < a; _++)
                    if (c(r, d + _) !== c(t, _)) {
                        b = !1;
                        break
                    }
                if (b) return d
            }
        return -1
    }
    C.prototype.includes = function(t, e, n) {
        return this.indexOf(t, e, n) !== -1
    };
    C.prototype.indexOf = function(t, e, n) {
        return Wf(this, t, e, n, !0)
    };
    C.prototype.lastIndexOf = function(t, e, n) {
        return Wf(this, t, e, n, !1)
    };

    function Np(r, t, e, n) {
        e = Number(e) || 0;
        var i = r.length - e;
        n ? (n = Number(n), n > i && (n = i)) : n = i;
        var o = t.length;
        n > o / 2 && (n = o / 2);
        for (var s = 0; s < n; ++s) {
            var a = parseInt(t.substr(s * 2, 2), 16);
            if (Xa(a)) return s;
            r[e + s] = a
        }
        return s
    }

    function Dp(r, t, e, n) {
        return Io(ja(t, r.length - e), r, e, n)
    }

    function qp(r, t, e, n) {
        return Io(Xp(t), r, e, n)
    }

    function zp(r, t, e, n) {
        return Io(jf(t), r, e, n)
    }

    function Kp(r, t, e, n) {
        return Io(Jp(t, r.length - e), r, e, n)
    }
    C.prototype.write = function(t, e, n, i) {
        if (e === void 0) i = "utf8", n = this.length, e = 0;
        else if (n === void 0 && typeof e == "string") i = e, n = this.length, e = 0;
        else if (isFinite(e)) e = e >>> 0, isFinite(n) ? (n = n >>> 0, i === void 0 && (i = "utf8")) : (i = n, n = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        var o = this.length - e;
        if ((n === void 0 || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        i || (i = "utf8");
        for (var s = !1;;) switch (i) {
            case "hex":
                return Np(this, t, e, n);
            case "utf8":
            case "utf-8":
                return Dp(this, t, e, n);
            case "ascii":
            case "latin1":
            case "binary":
                return qp(this, t, e, n);
            case "base64":
                return zp(this, t, e, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Kp(this, t, e, n);
            default:
                if (s) throw new TypeError("Unknown encoding: " + i);
                i = ("" + i).toLowerCase(), s = !0
        }
    };
    C.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    };

    function Wp(r, t, e) {
        return t === 0 && e === r.length ? $a.fromByteArray(r) : $a.fromByteArray(r.slice(t, e))
    }

    function Hf(r, t, e) {
        e = Math.min(r.length, e);
        for (var n = [], i = t; i < e;) {
            var o = r[i],
                s = null,
                a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
            if (i + a <= e) {
                var c, d, g, b;
                switch (a) {
                    case 1:
                        o < 128 && (s = o);
                        break;
                    case 2:
                        c = r[i + 1], (c & 192) === 128 && (b = (o & 31) << 6 | c & 63, b > 127 && (s = b));
                        break;
                    case 3:
                        c = r[i + 1], d = r[i + 2], (c & 192) === 128 && (d & 192) === 128 && (b = (o & 15) << 12 | (c & 63) << 6 | d & 63, b > 2047 && (b < 55296 || b > 57343) && (s = b));
                        break;
                    case 4:
                        c = r[i + 1], d = r[i + 2], g = r[i + 3], (c & 192) === 128 && (d & 192) === 128 && (g & 192) === 128 && (b = (o & 15) << 18 | (c & 63) << 12 | (d & 63) << 6 | g & 63, b > 65535 && b < 1114112 && (s = b))
                }
            }
            s === null ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023), n.push(s), i += a
        }
        return Hp(n)
    }
    var Df = 4096;

    function Hp(r) {
        var t = r.length;
        if (t <= Df) return String.fromCharCode.apply(String, r);
        for (var e = "", n = 0; n < t;) e += String.fromCharCode.apply(String, r.slice(n, n += Df));
        return e
    }

    function $p(r, t, e) {
        var n = "";
        e = Math.min(r.length, e);
        for (var i = t; i < e; ++i) n += String.fromCharCode(r[i] & 127);
        return n
    }

    function Vp(r, t, e) {
        var n = "";
        e = Math.min(r.length, e);
        for (var i = t; i < e; ++i) n += String.fromCharCode(r[i]);
        return n
    }

    function Gp(r, t, e) {
        var n = r.length;
        (!t || t < 0) && (t = 0), (!e || e < 0 || e > n) && (e = n);
        for (var i = "", o = t; o < e; ++o) i += Qp[r[o]];
        return i
    }

    function jp(r, t, e) {
        for (var n = r.slice(t, e), i = "", o = 0; o < n.length - 1; o += 2) i += String.fromCharCode(n[o] + n[o + 1] * 256);
        return i
    }
    C.prototype.slice = function(t, e) {
        var n = this.length;
        t = ~~t, e = e === void 0 ? n : ~~e, t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), e < t && (e = t);
        var i = this.subarray(t, e);
        return Object.setPrototypeOf(i, C.prototype), i
    };

    function Ee(r, t, e) {
        if (r % 1 !== 0 || r < 0) throw new RangeError("offset is not uint");
        if (r + t > e) throw new RangeError("Trying to access beyond buffer length")
    }
    C.prototype.readUintLE = C.prototype.readUIntLE = function(t, e, n) {
        t = t >>> 0, e = e >>> 0, n || Ee(t, e, this.length);
        for (var i = this[t], o = 1, s = 0; ++s < e && (o *= 256);) i += this[t + s] * o;
        return i
    };
    C.prototype.readUintBE = C.prototype.readUIntBE = function(t, e, n) {
        t = t >>> 0, e = e >>> 0, n || Ee(t, e, this.length);
        for (var i = this[t + --e], o = 1; e > 0 && (o *= 256);) i += this[t + --e] * o;
        return i
    };
    C.prototype.readUint8 = C.prototype.readUInt8 = function(t, e) {
        return t = t >>> 0, e || Ee(t, 1, this.length), this[t]
    };
    C.prototype.readUint16LE = C.prototype.readUInt16LE = function(t, e) {
        return t = t >>> 0, e || Ee(t, 2, this.length), this[t] | this[t + 1] << 8
    };
    C.prototype.readUint16BE = C.prototype.readUInt16BE = function(t, e) {
        return t = t >>> 0, e || Ee(t, 2, this.length), this[t] << 8 | this[t + 1]
    };
    C.prototype.readUint32LE = C.prototype.readUInt32LE = function(t, e) {
        return t = t >>> 0, e || Ee(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216
    };
    C.prototype.readUint32BE = C.prototype.readUInt32BE = function(t, e) {
        return t = t >>> 0, e || Ee(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
    };
    C.prototype.readIntLE = function(t, e, n) {
        t = t >>> 0, e = e >>> 0, n || Ee(t, e, this.length);
        for (var i = this[t], o = 1, s = 0; ++s < e && (o *= 256);) i += this[t + s] * o;
        return o *= 128, i >= o && (i -= Math.pow(2, 8 * e)), i
    };
    C.prototype.readIntBE = function(t, e, n) {
        t = t >>> 0, e = e >>> 0, n || Ee(t, e, this.length);
        for (var i = e, o = 1, s = this[t + --i]; i > 0 && (o *= 256);) s += this[t + --i] * o;
        return o *= 128, s >= o && (s -= Math.pow(2, 8 * e)), s
    };
    C.prototype.readInt8 = function(t, e) {
        return t = t >>> 0, e || Ee(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t]
    };
    C.prototype.readInt16LE = function(t, e) {
        t = t >>> 0, e || Ee(t, 2, this.length);
        var n = this[t] | this[t + 1] << 8;
        return n & 32768 ? n | 4294901760 : n
    };
    C.prototype.readInt16BE = function(t, e) {
        t = t >>> 0, e || Ee(t, 2, this.length);
        var n = this[t + 1] | this[t] << 8;
        return n & 32768 ? n | 4294901760 : n
    };
    C.prototype.readInt32LE = function(t, e) {
        return t = t >>> 0, e || Ee(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
    };
    C.prototype.readInt32BE = function(t, e) {
        return t = t >>> 0, e || Ee(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
    };
    C.prototype.readFloatLE = function(t, e) {
        return t = t >>> 0, e || Ee(t, 4, this.length), On.read(this, t, !0, 23, 4)
    };
    C.prototype.readFloatBE = function(t, e) {
        return t = t >>> 0, e || Ee(t, 4, this.length), On.read(this, t, !1, 23, 4)
    };
    C.prototype.readDoubleLE = function(t, e) {
        return t = t >>> 0, e || Ee(t, 8, this.length), On.read(this, t, !0, 52, 8)
    };
    C.prototype.readDoubleBE = function(t, e) {
        return t = t >>> 0, e || Ee(t, 8, this.length), On.read(this, t, !1, 52, 8)
    };

    function De(r, t, e, n, i, o) {
        if (!C.isBuffer(r)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
        if (e + n > r.length) throw new RangeError("Index out of range")
    }
    C.prototype.writeUintLE = C.prototype.writeUIntLE = function(t, e, n, i) {
        if (t = +t, e = e >>> 0, n = n >>> 0, !i) {
            var o = Math.pow(2, 8 * n) - 1;
            De(this, t, e, n, o, 0)
        }
        var s = 1,
            a = 0;
        for (this[e] = t & 255; ++a < n && (s *= 256);) this[e + a] = t / s & 255;
        return e + n
    };
    C.prototype.writeUintBE = C.prototype.writeUIntBE = function(t, e, n, i) {
        if (t = +t, e = e >>> 0, n = n >>> 0, !i) {
            var o = Math.pow(2, 8 * n) - 1;
            De(this, t, e, n, o, 0)
        }
        var s = n - 1,
            a = 1;
        for (this[e + s] = t & 255; --s >= 0 && (a *= 256);) this[e + s] = t / a & 255;
        return e + n
    };
    C.prototype.writeUint8 = C.prototype.writeUInt8 = function(t, e, n) {
        return t = +t, e = e >>> 0, n || De(this, t, e, 1, 255, 0), this[e] = t & 255, e + 1
    };
    C.prototype.writeUint16LE = C.prototype.writeUInt16LE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || De(this, t, e, 2, 65535, 0), this[e] = t & 255, this[e + 1] = t >>> 8, e + 2
    };
    C.prototype.writeUint16BE = C.prototype.writeUInt16BE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || De(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = t & 255, e + 2
    };
    C.prototype.writeUint32LE = C.prototype.writeUInt32LE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || De(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = t & 255, e + 4
    };
    C.prototype.writeUint32BE = C.prototype.writeUInt32BE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || De(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = t & 255, e + 4
    };
    C.prototype.writeIntLE = function(t, e, n, i) {
        if (t = +t, e = e >>> 0, !i) {
            var o = Math.pow(2, 8 * n - 1);
            De(this, t, e, n, o - 1, -o)
        }
        var s = 0,
            a = 1,
            c = 0;
        for (this[e] = t & 255; ++s < n && (a *= 256);) t < 0 && c === 0 && this[e + s - 1] !== 0 && (c = 1), this[e + s] = (t / a >> 0) - c & 255;
        return e + n
    };
    C.prototype.writeIntBE = function(t, e, n, i) {
        if (t = +t, e = e >>> 0, !i) {
            var o = Math.pow(2, 8 * n - 1);
            De(this, t, e, n, o - 1, -o)
        }
        var s = n - 1,
            a = 1,
            c = 0;
        for (this[e + s] = t & 255; --s >= 0 && (a *= 256);) t < 0 && c === 0 && this[e + s + 1] !== 0 && (c = 1), this[e + s] = (t / a >> 0) - c & 255;
        return e + n
    };
    C.prototype.writeInt8 = function(t, e, n) {
        return t = +t, e = e >>> 0, n || De(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = t & 255, e + 1
    };
    C.prototype.writeInt16LE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || De(this, t, e, 2, 32767, -32768), this[e] = t & 255, this[e + 1] = t >>> 8, e + 2
    };
    C.prototype.writeInt16BE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || De(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = t & 255, e + 2
    };
    C.prototype.writeInt32LE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || De(this, t, e, 4, 2147483647, -2147483648), this[e] = t & 255, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
    };
    C.prototype.writeInt32BE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || De(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = t & 255, e + 4
    };

    function $f(r, t, e, n, i, o) {
        if (e + n > r.length) throw new RangeError("Index out of range");
        if (e < 0) throw new RangeError("Index out of range")
    }

    function Vf(r, t, e, n, i) {
        return t = +t, e = e >>> 0, i || $f(r, t, e, 4, 34028234663852886e22, -34028234663852886e22), On.write(r, t, e, n, 23, 4), e + 4
    }
    C.prototype.writeFloatLE = function(t, e, n) {
        return Vf(this, t, e, !0, n)
    };
    C.prototype.writeFloatBE = function(t, e, n) {
        return Vf(this, t, e, !1, n)
    };

    function Gf(r, t, e, n, i) {
        return t = +t, e = e >>> 0, i || $f(r, t, e, 8, 17976931348623157e292, -17976931348623157e292), On.write(r, t, e, n, 52, 8), e + 8
    }
    C.prototype.writeDoubleLE = function(t, e, n) {
        return Gf(this, t, e, !0, n)
    };
    C.prototype.writeDoubleBE = function(t, e, n) {
        return Gf(this, t, e, !1, n)
    };
    C.prototype.copy = function(t, e, n, i) {
        if (!C.isBuffer(t)) throw new TypeError("argument should be a Buffer");
        if (n || (n = 0), !i && i !== 0 && (i = this.length), e >= t.length && (e = t.length), e || (e = 0), i > 0 && i < n && (i = n), i === n || t.length === 0 || this.length === 0) return 0;
        if (e < 0) throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
        if (i < 0) throw new RangeError("sourceEnd out of bounds");
        i > this.length && (i = this.length), t.length - e < i - n && (i = t.length - e + n);
        var o = i - n;
        return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(e, n, i) : Uint8Array.prototype.set.call(t, this.subarray(n, i), e), o
    };
    C.prototype.fill = function(t, e, n, i) {
        if (typeof t == "string") {
            if (typeof e == "string" ? (i = e, e = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), i !== void 0 && typeof i != "string") throw new TypeError("encoding must be a string");
            if (typeof i == "string" && !C.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
            if (t.length === 1) {
                var o = t.charCodeAt(0);
                (i === "utf8" && o < 128 || i === "latin1") && (t = o)
            }
        } else typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
        if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
        if (n <= e) return this;
        e = e >>> 0, n = n === void 0 ? this.length : n >>> 0, t || (t = 0);
        var s;
        if (typeof t == "number")
            for (s = e; s < n; ++s) this[s] = t;
        else {
            var a = C.isBuffer(t) ? t : C.from(t, i),
                c = a.length;
            if (c === 0) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
            for (s = 0; s < n - e; ++s) this[s + e] = a[s % c]
        }
        return this
    };
    var Yp = /[^+/0-9A-Za-z-_]/g;

    function Zp(r) {
        if (r = r.split("=")[0], r = r.trim().replace(Yp, ""), r.length < 2) return "";
        for (; r.length % 4 !== 0;) r = r + "=";
        return r
    }

    function ja(r, t) {
        t = t || 1 / 0;
        for (var e, n = r.length, i = null, o = [], s = 0; s < n; ++s) {
            if (e = r.charCodeAt(s), e > 55295 && e < 57344) {
                if (!i) {
                    if (e > 56319) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue
                    } else if (s + 1 === n) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue
                    }
                    i = e;
                    continue
                }
                if (e < 56320) {
                    (t -= 3) > -1 && o.push(239, 191, 189), i = e;
                    continue
                }
                e = (i - 55296 << 10 | e - 56320) + 65536
            } else i && (t -= 3) > -1 && o.push(239, 191, 189);
            if (i = null, e < 128) {
                if ((t -= 1) < 0) break;
                o.push(e)
            } else if (e < 2048) {
                if ((t -= 2) < 0) break;
                o.push(e >> 6 | 192, e & 63 | 128)
            } else if (e < 65536) {
                if ((t -= 3) < 0) break;
                o.push(e >> 12 | 224, e >> 6 & 63 | 128, e & 63 | 128)
            } else if (e < 1114112) {
                if ((t -= 4) < 0) break;
                o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, e & 63 | 128)
            } else throw new Error("Invalid code point")
        }
        return o
    }

    function Xp(r) {
        for (var t = [], e = 0; e < r.length; ++e) t.push(r.charCodeAt(e) & 255);
        return t
    }

    function Jp(r, t) {
        for (var e, n, i, o = [], s = 0; s < r.length && !((t -= 2) < 0); ++s) e = r.charCodeAt(s), n = e >> 8, i = e % 256, o.push(i), o.push(n);
        return o
    }

    function jf(r) {
        return $a.toByteArray(Zp(r))
    }

    function Io(r, t, e, n) {
        for (var i = 0; i < n && !(i + e >= t.length || i >= r.length); ++i) t[i + e] = r[i];
        return i
    }

    function ir(r, t) {
        return r instanceof t || r != null && r.constructor != null && r.constructor.name != null && r.constructor.name === t.name
    }

    function Xa(r) {
        return r !== r
    }
    var Qp = function() {
        for (var r = "0123456789abcdef", t = new Array(256), e = 0; e < 16; ++e)
            for (var n = e * 16, i = 0; i < 16; ++i) t[n + i] = r[e] + r[i];
        return t
    }()
});
var Jf = wt((Ja, Xf) => {
    "use strict";
    var So = Yf(),
        or = So.Buffer;

    function Zf(r, t) {
        for (var e in r) t[e] = r[e]
    }
    or.from && or.alloc && or.allocUnsafe && or.allocUnsafeSlow ? Xf.exports = So : (Zf(So, Ja), Ja.Buffer = yn);

    function yn(r, t, e) {
        return or(r, t, e)
    }
    yn.prototype = Object.create(or.prototype);
    Zf(or, yn);
    yn.from = function(r, t, e) {
        if (typeof r == "number") throw new TypeError("Argument must not be a number");
        return or(r, t, e)
    };
    yn.alloc = function(r, t, e) {
        if (typeof r != "number") throw new TypeError("Argument must be a number");
        var n = or(r);
        return t !== void 0 ? typeof e == "string" ? n.fill(t, e) : n.fill(t) : n.fill(0), n
    };
    yn.allocUnsafe = function(r) {
        if (typeof r != "number") throw new TypeError("Argument must be a number");
        return or(r)
    };
    yn.allocUnsafeSlow = function(r) {
        if (typeof r != "number") throw new TypeError("Argument must be a number");
        return So.SlowBuffer(r)
    }
});
var th = wt((Ob, Qf) => {
    "use strict";
    var Ao = Jf().Buffer;

    function ty(r) {
        if (r.length >= 255) throw new TypeError("Alphabet too long");
        for (var t = new Uint8Array(256), e = 0; e < t.length; e++) t[e] = 255;
        for (var n = 0; n < r.length; n++) {
            var i = r.charAt(n),
                o = i.charCodeAt(0);
            if (t[o] !== 255) throw new TypeError(i + " is ambiguous");
            t[o] = n
        }
        var s = r.length,
            a = r.charAt(0),
            c = Math.log(s) / Math.log(256),
            d = Math.log(256) / Math.log(s);

        function g(I) {
            if ((Array.isArray(I) || I instanceof Uint8Array) && (I = Ao.from(I)), !Ao.isBuffer(I)) throw new TypeError("Expected Buffer");
            if (I.length === 0) return "";
            for (var S = 0, v = 0, A = 0, T = I.length; A !== T && I[A] === 0;) A++, S++;
            for (var z = (T - A) * d + 1 >>> 0, N = new Uint8Array(z); A !== T;) {
                for (var G = I[A], H = 0, W = z - 1;
                    (G !== 0 || H < v) && W !== -1; W--, H++) G += 256 * N[W] >>> 0, N[W] = G % s >>> 0, G = G / s >>> 0;
                if (G !== 0) throw new Error("Non-zero carry");
                v = H, A++
            }
            for (var J = z - v; J !== z && N[J] === 0;) J++;
            for (var et = a.repeat(S); J < z; ++J) et += r.charAt(N[J]);
            return et
        }

        function b(I) {
            if (typeof I != "string") throw new TypeError("Expected String");
            if (I.length === 0) return Ao.alloc(0);
            for (var S = 0, v = 0, A = 0; I[S] === a;) v++, S++;
            for (var T = (I.length - S) * c + 1 >>> 0, z = new Uint8Array(T); I[S];) {
                var N = t[I.charCodeAt(S)];
                if (N === 255) return;
                for (var G = 0, H = T - 1;
                    (N !== 0 || G < A) && H !== -1; H--, G++) N += s * z[H] >>> 0, z[H] = N % 256 >>> 0, N = N / 256 >>> 0;
                if (N !== 0) throw new Error("Non-zero carry");
                A = G, S++
            }
            for (var W = T - A; W !== T && z[W] === 0;) W++;
            var J = Ao.allocUnsafe(v + (T - W));
            J.fill(0, 0, v);
            for (var et = v; W !== T;) J[et++] = z[W++];
            return J
        }

        function _(I) {
            var S = b(I);
            if (S) return S;
            throw new Error("Non-base" + s + " character")
        }
        return {
            encode: g,
            decodeUnsafe: b,
            decode: _
        }
    }
    Qf.exports = ty
});
var Qa = wt((Nb, eh) => {
    "use strict";
    var ey = th(),
        ry = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    eh.exports = ey(ry)
});
var ny, Hr, $r, tu, yi, eu = yt(() => {
    "use strict";
    pa();
    Nr();
    ny = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), Hr = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]), $r = new Uint32Array(64), tu = class extends Mn {
        constructor() {
            super(64, 32, 8, !1), this.A = Hr[0] | 0, this.B = Hr[1] | 0, this.C = Hr[2] | 0, this.D = Hr[3] | 0, this.E = Hr[4] | 0, this.F = Hr[5] | 0, this.G = Hr[6] | 0, this.H = Hr[7] | 0
        }
        get() {
            let {
                A: t,
                B: e,
                C: n,
                D: i,
                E: o,
                F: s,
                G: a,
                H: c
            } = this;
            return [t, e, n, i, o, s, a, c]
        }
        set(t, e, n, i, o, s, a, c) {
            this.A = t | 0, this.B = e | 0, this.C = n | 0, this.D = i | 0, this.E = o | 0, this.F = s | 0, this.G = a | 0, this.H = c | 0
        }
        process(t, e) {
            for (let b = 0; b < 16; b++, e += 4) $r[b] = t.getUint32(e, !1);
            for (let b = 16; b < 64; b++) {
                let _ = $r[b - 15],
                    I = $r[b - 2],
                    S = Ye(_, 7) ^ Ye(_, 18) ^ _ >>> 3,
                    v = Ye(I, 17) ^ Ye(I, 19) ^ I >>> 10;
                $r[b] = v + $r[b - 7] + S + $r[b - 16] | 0
            }
            let {
                A: n,
                B: i,
                C: o,
                D: s,
                E: a,
                F: c,
                G: d,
                H: g
            } = this;
            for (let b = 0; b < 64; b++) {
                let _ = Ye(a, 6) ^ Ye(a, 11) ^ Ye(a, 25),
                    I = g + _ + rf(a, c, d) + ny[b] + $r[b] | 0,
                    v = (Ye(n, 2) ^ Ye(n, 13) ^ Ye(n, 22)) + nf(n, i, o) | 0;
                g = d, d = c, c = a, a = s + I | 0, s = o, o = i, i = n, n = I + v | 0
            }
            n = n + this.A | 0, i = i + this.B | 0, o = o + this.C | 0, s = s + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, d = d + this.G | 0, g = g + this.H | 0, this.set(n, i, o, s, a, c, d, g)
        }
        roundClean() {
            $r.fill(0)
        }
        destroy() {
            this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
        }
    }, yi = Tn(() => new tu)
});
var rh = {};
io(rh, {
    TextDecoder: () => Lo,
    TextEncoder: () => To
});

function kr(r, t, e) {
    return t <= r && r <= e
}

function Mo(r) {
    if (r === void 0) return {};
    if (r === Object(r)) return r;
    throw TypeError("Could not convert argument to dictionary")
}

function iy(r) {
    for (var t = String(r), e = t.length, n = 0, i = []; n < e;) {
        var o = t.charCodeAt(n);
        if (o < 55296 || o > 57343) i.push(o);
        else if (56320 <= o && o <= 57343) i.push(65533);
        else if (55296 <= o && o <= 56319)
            if (n === e - 1) i.push(65533);
            else {
                var s = r.charCodeAt(n + 1);
                if (56320 <= s && s <= 57343) {
                    var a = o & 1023,
                        c = s & 1023;
                    i.push(65536 + (a << 10) + c), n += 1
                } else i.push(65533)
            }
        n += 1
    }
    return i
}

function oy(r) {
    for (var t = "", e = 0; e < r.length; ++e) {
        var n = r[e];
        n <= 65535 ? t += String.fromCharCode(n) : (n -= 65536, t += String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320))
    }
    return t
}

function nu(r) {
    this.tokens = [].slice.call(r)
}

function ru(r, t) {
    if (r) throw TypeError("Decoder error");
    return t || 65533
}

function sy() {}

function ay() {}

function Lo(r, t) {
    if (!(this instanceof Lo)) return new Lo(r, t);
    if (r = r !== void 0 ? String(r).toLowerCase() : Ro, r !== Ro) throw new Error("Encoding not supported. Only utf-8 is supported");
    t = Mo(t), this._streaming = !1, this._BOMseen = !1, this._decoder = null, this._fatal = !!t.fatal, this._ignoreBOM = !!t.ignoreBOM, Object.defineProperty(this, "encoding", {
        value: "utf-8"
    }), Object.defineProperty(this, "fatal", {
        value: this._fatal
    }), Object.defineProperty(this, "ignoreBOM", {
        value: this._ignoreBOM
    })
}

function To(r, t) {
    if (!(this instanceof To)) return new To(r, t);
    if (r = r !== void 0 ? String(r).toLowerCase() : Ro, r !== Ro) throw new Error("Encoding not supported. Only utf-8 is supported");
    t = Mo(t), this._streaming = !1, this._encoder = null, this._options = {
        fatal: !!t.fatal
    }, Object.defineProperty(this, "encoding", {
        value: "utf-8"
    })
}

function uy(r) {
    var t = r.fatal,
        e = 0,
        n = 0,
        i = 0,
        o = 128,
        s = 191;
    this.handler = function(a, c) {
        if (c === _o && i !== 0) return i = 0, ru(t);
        if (c === _o) return Dn;
        if (i === 0) {
            if (kr(c, 0, 127)) return c;
            if (kr(c, 194, 223)) i = 1, e = c - 192;
            else if (kr(c, 224, 239)) c === 224 && (o = 160), c === 237 && (s = 159), i = 2, e = c - 224;
            else if (kr(c, 240, 244)) c === 240 && (o = 144), c === 244 && (s = 143), i = 3, e = c - 240;
            else return ru(t);
            return e = e << 6 * i, null
        }
        if (!kr(c, o, s)) return e = i = n = 0, o = 128, s = 191, a.prepend(c), ru(t);
        if (o = 128, s = 191, n += 1, e += c - 128 << 6 * (i - n), n !== i) return null;
        var d = e;
        return e = i = n = 0, d
    }
}

function cy(r) {
    var t = r.fatal;
    this.handler = function(e, n) {
        if (n === _o) return Dn;
        if (kr(n, 0, 127)) return n;
        var i, o;
        kr(n, 128, 2047) ? (i = 1, o = 192) : kr(n, 2048, 65535) ? (i = 2, o = 224) : kr(n, 65536, 1114111) && (i = 3, o = 240);
        for (var s = [(n >> 6 * i) + o]; i > 0;) {
            var a = n >> 6 * (i - 1);
            s.push(128 | a & 63), i -= 1
        }
        return s
    }
}
var _o, Dn, Ro, nh = yt(() => {
    "use strict";
    _o = -1;
    nu.prototype = {
        endOfStream: function() {
            return !this.tokens.length
        },
        read: function() {
            return this.tokens.length ? this.tokens.shift() : _o
        },
        prepend: function(r) {
            if (Array.isArray(r))
                for (var t = r; t.length;) this.tokens.unshift(t.pop());
            else this.tokens.unshift(r)
        },
        push: function(r) {
            if (Array.isArray(r))
                for (var t = r; t.length;) this.tokens.push(t.shift());
            else this.tokens.push(r)
        }
    };
    Dn = -1;
    sy.prototype = {
        handler: function(r, t) {}
    };
    ay.prototype = {
        handler: function(r, t) {}
    };
    Ro = "utf-8";
    Lo.prototype = {
        decode: function(t, e) {
            var n;
            typeof t == "object" && t instanceof ArrayBuffer ? n = new Uint8Array(t) : typeof t == "object" && "buffer" in t && t.buffer instanceof ArrayBuffer ? n = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : n = new Uint8Array(0), e = Mo(e), this._streaming || (this._decoder = new uy({
                fatal: this._fatal
            }), this._BOMseen = !1), this._streaming = !!e.stream;
            for (var i = new nu(n), o = [], s; !i.endOfStream() && (s = this._decoder.handler(i, i.read()), s !== Dn);) s !== null && (Array.isArray(s) ? o.push.apply(o, s) : o.push(s));
            if (!this._streaming) {
                do {
                    if (s = this._decoder.handler(i, i.read()), s === Dn) break;
                    s !== null && (Array.isArray(s) ? o.push.apply(o, s) : o.push(s))
                } while (!i.endOfStream());
                this._decoder = null
            }
            return o.length && ["utf-8"].indexOf(this.encoding) !== -1 && !this._ignoreBOM && !this._BOMseen && (o[0] === 65279 ? (this._BOMseen = !0, o.shift()) : this._BOMseen = !0), oy(o)
        }
    };
    To.prototype = {
        encode: function(t, e) {
            t = t ? String(t) : "", e = Mo(e), this._streaming || (this._encoder = new cy(this._options)), this._streaming = !!e.stream;
            for (var n = [], i = new nu(iy(t)), o; !i.endOfStream() && (o = this._encoder.handler(i, i.read()), o !== Dn);) Array.isArray(o) ? n.push.apply(n, o) : n.push(o);
            if (!this._streaming) {
                for (; o = this._encoder.handler(i, i.read()), o !== Dn;) Array.isArray(o) ? n.push.apply(n, o) : n.push(o);
                this._encoder = null
            }
            return new Uint8Array(n)
        }
    }
});
var uh = wt(Rt => {
    "use strict";
    var fy = Rt && Rt.__createBinding || (Object.create ? function(r, t, e, n) {
            n === void 0 && (n = e), Object.defineProperty(r, n, {
                enumerable: !0,
                get: function() {
                    return t[e]
                }
            })
        } : function(r, t, e, n) {
            n === void 0 && (n = e), r[n] = t[e]
        }),
        hy = Rt && Rt.__setModuleDefault || (Object.create ? function(r, t) {
            Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            })
        } : function(r, t) {
            r.default = t
        }),
        sr = Rt && Rt.__decorate || function(r, t, e, n) {
            var i = arguments.length,
                o = i < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, e) : n,
                s;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(r, t, e, n);
            else
                for (var a = r.length - 1; a >= 0; a--)(s = r[a]) && (o = (i < 3 ? s(o) : i > 3 ? s(t, e, o) : s(t, e)) || o);
            return i > 3 && o && Object.defineProperty(t, e, o), o
        },
        ly = Rt && Rt.__importStar || function(r) {
            if (r && r.__esModule) return r;
            var t = {};
            if (r != null)
                for (var e in r) e !== "default" && Object.hasOwnProperty.call(r, e) && fy(t, r, e);
            return hy(t, r), t
        },
        ih = Rt && Rt.__importDefault || function(r) {
            return r && r.__esModule ? r : {
                default: r
            }
        };
    Object.defineProperty(Rt, "__esModule", {
        value: !0
    });
    Rt.deserializeUnchecked = Rt.deserialize = Rt.serialize = Rt.BinaryReader = Rt.BinaryWriter = Rt.BorshError = Rt.baseDecode = Rt.baseEncode = void 0;
    var Vr = ih(Ha()),
        oh = ih(Qa()),
        dy = ly((nh(), ta(rh))),
        py = typeof TextDecoder != "function" ? dy.TextDecoder : TextDecoder,
        yy = new py("utf-8", {
            fatal: !0
        });

    function gy(r) {
        return typeof r == "string" && (r = Buffer.from(r, "utf8")), oh.default.encode(Buffer.from(r))
    }
    Rt.baseEncode = gy;

    function my(r) {
        return Buffer.from(oh.default.decode(r))
    }
    Rt.baseDecode = my;
    var iu = 1024,
        Ie = class extends Error {
            constructor(t) {
                super(t), this.fieldPath = [], this.originalMessage = t
            }
            addToFieldPath(t) {
                this.fieldPath.splice(0, 0, t), this.message = this.originalMessage + ": " + this.fieldPath.join(".")
            }
        };
    Rt.BorshError = Ie;
    var Uo = class {
        constructor() {
            this.buf = Buffer.alloc(iu), this.length = 0
        }
        maybeResize() {
            this.buf.length < 16 + this.length && (this.buf = Buffer.concat([this.buf, Buffer.alloc(iu)]))
        }
        writeU8(t) {
            this.maybeResize(), this.buf.writeUInt8(t, this.length), this.length += 1
        }
        writeU16(t) {
            this.maybeResize(), this.buf.writeUInt16LE(t, this.length), this.length += 2
        }
        writeU32(t) {
            this.maybeResize(), this.buf.writeUInt32LE(t, this.length), this.length += 4
        }
        writeU64(t) {
            this.maybeResize(), this.writeBuffer(Buffer.from(new Vr.default(t).toArray("le", 8)))
        }
        writeU128(t) {
            this.maybeResize(), this.writeBuffer(Buffer.from(new Vr.default(t).toArray("le", 16)))
        }
        writeU256(t) {
            this.maybeResize(), this.writeBuffer(Buffer.from(new Vr.default(t).toArray("le", 32)))
        }
        writeU512(t) {
            this.maybeResize(), this.writeBuffer(Buffer.from(new Vr.default(t).toArray("le", 64)))
        }
        writeBuffer(t) {
            this.buf = Buffer.concat([Buffer.from(this.buf.subarray(0, this.length)), t, Buffer.alloc(iu)]), this.length += t.length
        }
        writeString(t) {
            this.maybeResize();
            let e = Buffer.from(t, "utf8");
            this.writeU32(e.length), this.writeBuffer(e)
        }
        writeFixedArray(t) {
            this.writeBuffer(Buffer.from(t))
        }
        writeArray(t, e) {
            this.maybeResize(), this.writeU32(t.length);
            for (let n of t) this.maybeResize(), e(n)
        }
        toArray() {
            return this.buf.subarray(0, this.length)
        }
    };
    Rt.BinaryWriter = Uo;

    function ar(r, t, e) {
        let n = e.value;
        e.value = function(...i) {
            try {
                return n.apply(this, i)
            } catch (o) {
                if (o instanceof RangeError) {
                    let s = o.code;
                    if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(s) >= 0) throw new Ie("Reached the end of buffer when deserializing")
                }
                throw o
            }
        }
    }
    var Pe = class {
        constructor(t) {
            this.buf = t, this.offset = 0
        }
        readU8() {
            let t = this.buf.readUInt8(this.offset);
            return this.offset += 1, t
        }
        readU16() {
            let t = this.buf.readUInt16LE(this.offset);
            return this.offset += 2, t
        }
        readU32() {
            let t = this.buf.readUInt32LE(this.offset);
            return this.offset += 4, t
        }
        readU64() {
            let t = this.readBuffer(8);
            return new Vr.default(t, "le")
        }
        readU128() {
            let t = this.readBuffer(16);
            return new Vr.default(t, "le")
        }
        readU256() {
            let t = this.readBuffer(32);
            return new Vr.default(t, "le")
        }
        readU512() {
            let t = this.readBuffer(64);
            return new Vr.default(t, "le")
        }
        readBuffer(t) {
            if (this.offset + t > this.buf.length) throw new Ie(`Expected buffer length ${t} isn't within bounds`);
            let e = this.buf.slice(this.offset, this.offset + t);
            return this.offset += t, e
        }
        readString() {
            let t = this.readU32(),
                e = this.readBuffer(t);
            try {
                return yy.decode(e)
            } catch (n) {
                throw new Ie(`Error decoding UTF-8 string: ${n}`)
            }
        }
        readFixedArray(t) {
            return new Uint8Array(this.readBuffer(t))
        }
        readArray(t) {
            let e = this.readU32(),
                n = Array();
            for (let i = 0; i < e; ++i) n.push(t());
            return n
        }
    };
    sr([ar], Pe.prototype, "readU8", null);
    sr([ar], Pe.prototype, "readU16", null);
    sr([ar], Pe.prototype, "readU32", null);
    sr([ar], Pe.prototype, "readU64", null);
    sr([ar], Pe.prototype, "readU128", null);
    sr([ar], Pe.prototype, "readU256", null);
    sr([ar], Pe.prototype, "readU512", null);
    sr([ar], Pe.prototype, "readString", null);
    sr([ar], Pe.prototype, "readFixedArray", null);
    sr([ar], Pe.prototype, "readArray", null);
    Rt.BinaryReader = Pe;

    function sh(r) {
        return r.charAt(0).toUpperCase() + r.slice(1)
    }

    function gn(r, t, e, n, i) {
        try {
            if (typeof n == "string") i[`write${sh(n)}`](e);
            else if (n instanceof Array)
                if (typeof n[0] == "number") {
                    if (e.length !== n[0]) throw new Ie(`Expecting byte array of length ${n[0]}, but got ${e.length} bytes`);
                    i.writeFixedArray(e)
                } else if (n.length === 2 && typeof n[1] == "number") {
                if (e.length !== n[1]) throw new Ie(`Expecting byte array of length ${n[1]}, but got ${e.length} bytes`);
                for (let o = 0; o < n[1]; o++) gn(r, null, e[o], n[0], i)
            } else i.writeArray(e, o => {
                gn(r, t, o, n[0], i)
            });
            else if (n.kind !== void 0) switch (n.kind) {
                case "option":
                    {
                        e == null ? i.writeU8(0) : (i.writeU8(1), gn(r, t, e, n.type, i));
                        break
                    }
                case "map":
                    {
                        i.writeU32(e.size),
                        e.forEach((o, s) => {
                            gn(r, t, s, n.key, i), gn(r, t, o, n.value, i)
                        });
                        break
                    }
                default:
                    throw new Ie(`FieldType ${n} unrecognized`)
            } else ah(r, e, i)
        } catch (o) {
            throw o instanceof Ie && o.addToFieldPath(t), o
        }
    }

    function ah(r, t, e) {
        if (typeof t.borshSerialize == "function") {
            t.borshSerialize(e);
            return
        }
        let n = r.get(t.constructor);
        if (!n) throw new Ie(`Class ${t.constructor.name} is missing in schema`);
        if (n.kind === "struct") n.fields.map(([i, o]) => {
            gn(r, i, t[i], o, e)
        });
        else if (n.kind === "enum") {
            let i = t[n.field];
            for (let o = 0; o < n.values.length; ++o) {
                let [s, a] = n.values[o];
                if (s === i) {
                    e.writeU8(o), gn(r, s, t[s], a, e);
                    break
                }
            }
        } else throw new Ie(`Unexpected schema kind: ${n.kind} for ${t.constructor.name}`)
    }

    function wy(r, t, e = Uo) {
        let n = new e;
        return ah(r, t, n), n.toArray()
    }
    Rt.serialize = wy;

    function mn(r, t, e, n) {
        try {
            if (typeof e == "string") return n[`read${sh(e)}`]();
            if (e instanceof Array) {
                if (typeof e[0] == "number") return n.readFixedArray(e[0]);
                if (typeof e[1] == "number") {
                    let i = [];
                    for (let o = 0; o < e[1]; o++) i.push(mn(r, null, e[0], n));
                    return i
                } else return n.readArray(() => mn(r, t, e[0], n))
            }
            if (e.kind === "option") return n.readU8() ? mn(r, t, e.type, n) : void 0;
            if (e.kind === "map") {
                let i = new Map,
                    o = n.readU32();
                for (let s = 0; s < o; s++) {
                    let a = mn(r, t, e.key, n),
                        c = mn(r, t, e.value, n);
                    i.set(a, c)
                }
                return i
            }
            return ou(r, e, n)
        } catch (i) {
            throw i instanceof Ie && i.addToFieldPath(t), i
        }
    }

    function ou(r, t, e) {
        if (typeof t.borshDeserialize == "function") return t.borshDeserialize(e);
        let n = r.get(t);
        if (!n) throw new Ie(`Class ${t.name} is missing in schema`);
        if (n.kind === "struct") {
            let i = {};
            for (let [o, s] of r.get(t).fields) i[o] = mn(r, o, s, e);
            return new t(i)
        }
        if (n.kind === "enum") {
            let i = e.readU8();
            if (i >= n.values.length) throw new Ie(`Enum index: ${i} is out of range`);
            let [o, s] = n.values[i], a = mn(r, o, s, e);
            return new t({
                [o]: a
            })
        }
        throw new Ie(`Unexpected schema kind: ${n.kind} for ${t.constructor.name}`)
    }

    function by(r, t, e, n = Pe) {
        let i = new n(e),
            o = ou(r, t, i);
        if (i.offset < e.length) throw new Ie(`Unexpected ${e.length-i.offset} bytes after deserialized data`);
        return o
    }
    Rt.deserialize = by;

    function xy(r, t, e, n = Pe) {
        let i = new n(e);
        return ou(r, t, i)
    }
    Rt.deserializeUnchecked = xy
});
var Ih = wt(Wn => {
    "use strict";
    var su = ui(),
        zn = ci(),
        ch = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    Wn.Buffer = U;
    Wn.SlowBuffer = Sy;
    Wn.INSPECT_MAX_BYTES = 50;
    var Po = 2147483647;
    Wn.kMaxLength = Po;
    U.TYPED_ARRAY_SUPPORT = Ey();
    !U.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

    function Ey() {
        try {
            let r = new Uint8Array(1),
                t = {
                    foo: function() {
                        return 42
                    }
                };
            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(r, t), r.foo() === 42
        } catch {
            return !1
        }
    }
    Object.defineProperty(U.prototype, "parent", {
        enumerable: !0,
        get: function() {
            if (U.isBuffer(this)) return this.buffer
        }
    });
    Object.defineProperty(U.prototype, "offset", {
        enumerable: !0,
        get: function() {
            if (U.isBuffer(this)) return this.byteOffset
        }
    });

    function vr(r) {
        if (r > Po) throw new RangeError('The value "' + r + '" is invalid for option "size"');
        let t = new Uint8Array(r);
        return Object.setPrototypeOf(t, U.prototype), t
    }

    function U(r, t, e) {
        if (typeof r == "number") {
            if (typeof t == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
            return fu(r)
        }
        return dh(r, t, e)
    }
    U.poolSize = 8192;

    function dh(r, t, e) {
        if (typeof r == "string") return ky(r, t);
        if (ArrayBuffer.isView(r)) return vy(r);
        if (r == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r);
        if (ur(r, ArrayBuffer) || r && ur(r.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (ur(r, SharedArrayBuffer) || r && ur(r.buffer, SharedArrayBuffer))) return uu(r, t, e);
        if (typeof r == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        let n = r.valueOf && r.valueOf();
        if (n != null && n !== r) return U.from(n, t, e);
        let i = Iy(r);
        if (i) return i;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof r[Symbol.toPrimitive] == "function") return U.from(r[Symbol.toPrimitive]("string"), t, e);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r)
    }
    U.from = function(r, t, e) {
        return dh(r, t, e)
    };
    Object.setPrototypeOf(U.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(U, Uint8Array);

    function ph(r) {
        if (typeof r != "number") throw new TypeError('"size" argument must be of type number');
        if (r < 0) throw new RangeError('The value "' + r + '" is invalid for option "size"')
    }

    function By(r, t, e) {
        return ph(r), r <= 0 ? vr(r) : t !== void 0 ? typeof e == "string" ? vr(r).fill(t, e) : vr(r).fill(t) : vr(r)
    }
    U.alloc = function(r, t, e) {
        return By(r, t, e)
    };

    function fu(r) {
        return ph(r), vr(r < 0 ? 0 : hu(r) | 0)
    }
    U.allocUnsafe = function(r) {
        return fu(r)
    };
    U.allocUnsafeSlow = function(r) {
        return fu(r)
    };

    function ky(r, t) {
        if ((typeof t != "string" || t === "") && (t = "utf8"), !U.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
        let e = yh(r, t) | 0,
            n = vr(e),
            i = n.write(r, t);
        return i !== e && (n = n.slice(0, i)), n
    }

    function au(r) {
        let t = r.length < 0 ? 0 : hu(r.length) | 0,
            e = vr(t);
        for (let n = 0; n < t; n += 1) e[n] = r[n] & 255;
        return e
    }

    function vy(r) {
        if (ur(r, Uint8Array)) {
            let t = new Uint8Array(r);
            return uu(t.buffer, t.byteOffset, t.byteLength)
        }
        return au(r)
    }

    function uu(r, t, e) {
        if (t < 0 || r.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
        if (r.byteLength < t + (e || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return t === void 0 && e === void 0 ? n = new Uint8Array(r) : e === void 0 ? n = new Uint8Array(r, t) : n = new Uint8Array(r, t, e), Object.setPrototypeOf(n, U.prototype), n
    }

    function Iy(r) {
        if (U.isBuffer(r)) {
            let t = hu(r.length) | 0,
                e = vr(t);
            return e.length === 0 || r.copy(e, 0, 0, t), e
        }
        if (r.length !== void 0) return typeof r.length != "number" || du(r.length) ? vr(0) : au(r);
        if (r.type === "Buffer" && Array.isArray(r.data)) return au(r.data)
    }

    function hu(r) {
        if (r >= Po) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Po.toString(16) + " bytes");
        return r | 0
    }

    function Sy(r) {
        return +r != r && (r = 0), U.alloc(+r)
    }
    U.isBuffer = function(t) {
        return t != null && t._isBuffer === !0 && t !== U.prototype
    };
    U.compare = function(t, e) {
        if (ur(t, Uint8Array) && (t = U.from(t, t.offset, t.byteLength)), ur(e, Uint8Array) && (e = U.from(e, e.offset, e.byteLength)), !U.isBuffer(t) || !U.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (t === e) return 0;
        let n = t.length,
            i = e.length;
        for (let o = 0, s = Math.min(n, i); o < s; ++o)
            if (t[o] !== e[o]) {
                n = t[o], i = e[o];
                break
            }
        return n < i ? -1 : i < n ? 1 : 0
    };
    U.isEncoding = function(t) {
        switch (String(t).toLowerCase()) {
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
    U.concat = function(t, e) {
        if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (t.length === 0) return U.alloc(0);
        let n;
        if (e === void 0)
            for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
        let i = U.allocUnsafe(e),
            o = 0;
        for (n = 0; n < t.length; ++n) {
            let s = t[n];
            if (ur(s, Uint8Array)) o + s.length > i.length ? (U.isBuffer(s) || (s = U.from(s)), s.copy(i, o)) : Uint8Array.prototype.set.call(i, s, o);
            else if (U.isBuffer(s)) s.copy(i, o);
            else throw new TypeError('"list" argument must be an Array of Buffers');
            o += s.length
        }
        return i
    };

    function yh(r, t) {
        if (U.isBuffer(r)) return r.length;
        if (ArrayBuffer.isView(r) || ur(r, ArrayBuffer)) return r.byteLength;
        if (typeof r != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof r);
        let e = r.length,
            n = arguments.length > 2 && arguments[2] === !0;
        if (!n && e === 0) return 0;
        let i = !1;
        for (;;) switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
                return e;
            case "utf8":
            case "utf-8":
                return cu(r).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return e * 2;
            case "hex":
                return e >>> 1;
            case "base64":
                return vh(r).length;
            default:
                if (i) return n ? -1 : cu(r).length;
                t = ("" + t).toLowerCase(), i = !0
        }
    }
    U.byteLength = yh;

    function Ay(r, t, e) {
        let n = !1;
        if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((e === void 0 || e > this.length) && (e = this.length), e <= 0) || (e >>>= 0, t >>>= 0, e <= t)) return "";
        for (r || (r = "utf8");;) switch (r) {
            case "hex":
                return Oy(this, t, e);
            case "utf8":
            case "utf-8":
                return mh(this, t, e);
            case "ascii":
                return Cy(this, t, e);
            case "latin1":
            case "binary":
                return Fy(this, t, e);
            case "base64":
                return Uy(this, t, e);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return Ny(this, t, e);
            default:
                if (n) throw new TypeError("Unknown encoding: " + r);
                r = (r + "").toLowerCase(), n = !0
        }
    }
    U.prototype._isBuffer = !0;

    function wn(r, t, e) {
        let n = r[t];
        r[t] = r[e], r[e] = n
    }
    U.prototype.swap16 = function() {
        let t = this.length;
        if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let e = 0; e < t; e += 2) wn(this, e, e + 1);
        return this
    };
    U.prototype.swap32 = function() {
        let t = this.length;
        if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let e = 0; e < t; e += 4) wn(this, e, e + 3), wn(this, e + 1, e + 2);
        return this
    };
    U.prototype.swap64 = function() {
        let t = this.length;
        if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let e = 0; e < t; e += 8) wn(this, e, e + 7), wn(this, e + 1, e + 6), wn(this, e + 2, e + 5), wn(this, e + 3, e + 4);
        return this
    };
    U.prototype.toString = function() {
        let t = this.length;
        return t === 0 ? "" : arguments.length === 0 ? mh(this, 0, t) : Ay.apply(this, arguments)
    };
    U.prototype.toLocaleString = U.prototype.toString;
    U.prototype.equals = function(t) {
        if (!U.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
        return this === t ? !0 : U.compare(this, t) === 0
    };
    U.prototype.inspect = function() {
        let t = "",
            e = Wn.INSPECT_MAX_BYTES;
        return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t += " ... "), "<Buffer " + t + ">"
    };
    ch && (U.prototype[ch] = U.prototype.inspect);
    U.prototype.compare = function(t, e, n, i, o) {
        if (ur(t, Uint8Array) && (t = U.from(t, t.offset, t.byteLength)), !U.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
        if (e === void 0 && (e = 0), n === void 0 && (n = t ? t.length : 0), i === void 0 && (i = 0), o === void 0 && (o = this.length), e < 0 || n > t.length || i < 0 || o > this.length) throw new RangeError("out of range index");
        if (i >= o && e >= n) return 0;
        if (i >= o) return -1;
        if (e >= n) return 1;
        if (e >>>= 0, n >>>= 0, i >>>= 0, o >>>= 0, this === t) return 0;
        let s = o - i,
            a = n - e,
            c = Math.min(s, a),
            d = this.slice(i, o),
            g = t.slice(e, n);
        for (let b = 0; b < c; ++b)
            if (d[b] !== g[b]) {
                s = d[b], a = g[b];
                break
            }
        return s < a ? -1 : a < s ? 1 : 0
    };

    function gh(r, t, e, n, i) {
        if (r.length === 0) return -1;
        if (typeof e == "string" ? (n = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), e = +e, du(e) && (e = i ? 0 : r.length - 1), e < 0 && (e = r.length + e), e >= r.length) {
            if (i) return -1;
            e = r.length - 1
        } else if (e < 0)
            if (i) e = 0;
            else return -1;
        if (typeof t == "string" && (t = U.from(t, n)), U.isBuffer(t)) return t.length === 0 ? -1 : fh(r, t, e, n, i);
        if (typeof t == "number") return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(r, t, e) : Uint8Array.prototype.lastIndexOf.call(r, t, e) : fh(r, [t], e, n, i);
        throw new TypeError("val must be string, number or Buffer")
    }

    function fh(r, t, e, n, i) {
        let o = 1,
            s = r.length,
            a = t.length;
        if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
            if (r.length < 2 || t.length < 2) return -1;
            o = 2, s /= 2, a /= 2, e /= 2
        }

        function c(g, b) {
            return o === 1 ? g[b] : g.readUInt16BE(b * o)
        }
        let d;
        if (i) {
            let g = -1;
            for (d = e; d < s; d++)
                if (c(r, d) === c(t, g === -1 ? 0 : d - g)) {
                    if (g === -1 && (g = d), d - g + 1 === a) return g * o
                } else g !== -1 && (d -= d - g), g = -1
        } else
            for (e + a > s && (e = s - a), d = e; d >= 0; d--) {
                let g = !0;
                for (let b = 0; b < a; b++)
                    if (c(r, d + b) !== c(t, b)) {
                        g = !1;
                        break
                    }
                if (g) return d
            }
        return -1
    }
    U.prototype.includes = function(t, e, n) {
        return this.indexOf(t, e, n) !== -1
    };
    U.prototype.indexOf = function(t, e, n) {
        return gh(this, t, e, n, !0)
    };
    U.prototype.lastIndexOf = function(t, e, n) {
        return gh(this, t, e, n, !1)
    };

    function _y(r, t, e, n) {
        e = Number(e) || 0;
        let i = r.length - e;
        n ? (n = Number(n), n > i && (n = i)) : n = i;
        let o = t.length;
        n > o / 2 && (n = o / 2);
        let s;
        for (s = 0; s < n; ++s) {
            let a = parseInt(t.substr(s * 2, 2), 16);
            if (du(a)) return s;
            r[e + s] = a
        }
        return s
    }

    function Ry(r, t, e, n) {
        return Co(cu(t, r.length - e), r, e, n)
    }

    function Ly(r, t, e, n) {
        return Co(Ky(t), r, e, n)
    }

    function Ty(r, t, e, n) {
        return Co(vh(t), r, e, n)
    }

    function My(r, t, e, n) {
        return Co(Wy(t, r.length - e), r, e, n)
    }
    U.prototype.write = function(t, e, n, i) {
        if (e === void 0) i = "utf8", n = this.length, e = 0;
        else if (n === void 0 && typeof e == "string") i = e, n = this.length, e = 0;
        else if (isFinite(e)) e = e >>> 0, isFinite(n) ? (n = n >>> 0, i === void 0 && (i = "utf8")) : (i = n, n = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        let o = this.length - e;
        if ((n === void 0 || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        i || (i = "utf8");
        let s = !1;
        for (;;) switch (i) {
            case "hex":
                return _y(this, t, e, n);
            case "utf8":
            case "utf-8":
                return Ry(this, t, e, n);
            case "ascii":
            case "latin1":
            case "binary":
                return Ly(this, t, e, n);
            case "base64":
                return Ty(this, t, e, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return My(this, t, e, n);
            default:
                if (s) throw new TypeError("Unknown encoding: " + i);
                i = ("" + i).toLowerCase(), s = !0
        }
    };
    U.prototype.toJSON = function() {
        return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
        }
    };

    function Uy(r, t, e) {
        return t === 0 && e === r.length ? su.fromByteArray(r) : su.fromByteArray(r.slice(t, e))
    }

    function mh(r, t, e) {
        e = Math.min(r.length, e);
        let n = [],
            i = t;
        for (; i < e;) {
            let o = r[i],
                s = null,
                a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
            if (i + a <= e) {
                let c, d, g, b;
                switch (a) {
                    case 1:
                        o < 128 && (s = o);
                        break;
                    case 2:
                        c = r[i + 1], (c & 192) === 128 && (b = (o & 31) << 6 | c & 63, b > 127 && (s = b));
                        break;
                    case 3:
                        c = r[i + 1], d = r[i + 2], (c & 192) === 128 && (d & 192) === 128 && (b = (o & 15) << 12 | (c & 63) << 6 | d & 63, b > 2047 && (b < 55296 || b > 57343) && (s = b));
                        break;
                    case 4:
                        c = r[i + 1], d = r[i + 2], g = r[i + 3], (c & 192) === 128 && (d & 192) === 128 && (g & 192) === 128 && (b = (o & 15) << 18 | (c & 63) << 12 | (d & 63) << 6 | g & 63, b > 65535 && b < 1114112 && (s = b))
                }
            }
            s === null ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023), n.push(s), i += a
        }
        return Py(n)
    }
    var hh = 4096;

    function Py(r) {
        let t = r.length;
        if (t <= hh) return String.fromCharCode.apply(String, r);
        let e = "",
            n = 0;
        for (; n < t;) e += String.fromCharCode.apply(String, r.slice(n, n += hh));
        return e
    }

    function Cy(r, t, e) {
        let n = "";
        e = Math.min(r.length, e);
        for (let i = t; i < e; ++i) n += String.fromCharCode(r[i] & 127);
        return n
    }

    function Fy(r, t, e) {
        let n = "";
        e = Math.min(r.length, e);
        for (let i = t; i < e; ++i) n += String.fromCharCode(r[i]);
        return n
    }

    function Oy(r, t, e) {
        let n = r.length;
        (!t || t < 0) && (t = 0), (!e || e < 0 || e > n) && (e = n);
        let i = "";
        for (let o = t; o < e; ++o) i += Hy[r[o]];
        return i
    }

    function Ny(r, t, e) {
        let n = r.slice(t, e),
            i = "";
        for (let o = 0; o < n.length - 1; o += 2) i += String.fromCharCode(n[o] + n[o + 1] * 256);
        return i
    }
    U.prototype.slice = function(t, e) {
        let n = this.length;
        t = ~~t, e = e === void 0 ? n : ~~e, t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), e < t && (e = t);
        let i = this.subarray(t, e);
        return Object.setPrototypeOf(i, U.prototype), i
    };

    function Be(r, t, e) {
        if (r % 1 !== 0 || r < 0) throw new RangeError("offset is not uint");
        if (r + t > e) throw new RangeError("Trying to access beyond buffer length")
    }
    U.prototype.readUintLE = U.prototype.readUIntLE = function(t, e, n) {
        t = t >>> 0, e = e >>> 0, n || Be(t, e, this.length);
        let i = this[t],
            o = 1,
            s = 0;
        for (; ++s < e && (o *= 256);) i += this[t + s] * o;
        return i
    };
    U.prototype.readUintBE = U.prototype.readUIntBE = function(t, e, n) {
        t = t >>> 0, e = e >>> 0, n || Be(t, e, this.length);
        let i = this[t + --e],
            o = 1;
        for (; e > 0 && (o *= 256);) i += this[t + --e] * o;
        return i
    };
    U.prototype.readUint8 = U.prototype.readUInt8 = function(t, e) {
        return t = t >>> 0, e || Be(t, 1, this.length), this[t]
    };
    U.prototype.readUint16LE = U.prototype.readUInt16LE = function(t, e) {
        return t = t >>> 0, e || Be(t, 2, this.length), this[t] | this[t + 1] << 8
    };
    U.prototype.readUint16BE = U.prototype.readUInt16BE = function(t, e) {
        return t = t >>> 0, e || Be(t, 2, this.length), this[t] << 8 | this[t + 1]
    };
    U.prototype.readUint32LE = U.prototype.readUInt32LE = function(t, e) {
        return t = t >>> 0, e || Be(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216
    };
    U.prototype.readUint32BE = U.prototype.readUInt32BE = function(t, e) {
        return t = t >>> 0, e || Be(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
    };
    U.prototype.readBigUInt64LE = Gr(function(t) {
        t = t >>> 0, Kn(t, "offset");
        let e = this[t],
            n = this[t + 7];
        (e === void 0 || n === void 0) && gi(t, this.length - 8);
        let i = e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24,
            o = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + n * 2 ** 24;
        return BigInt(i) + (BigInt(o) << BigInt(32))
    });
    U.prototype.readBigUInt64BE = Gr(function(t) {
        t = t >>> 0, Kn(t, "offset");
        let e = this[t],
            n = this[t + 7];
        (e === void 0 || n === void 0) && gi(t, this.length - 8);
        let i = e * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t],
            o = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n;
        return (BigInt(i) << BigInt(32)) + BigInt(o)
    });
    U.prototype.readIntLE = function(t, e, n) {
        t = t >>> 0, e = e >>> 0, n || Be(t, e, this.length);
        let i = this[t],
            o = 1,
            s = 0;
        for (; ++s < e && (o *= 256);) i += this[t + s] * o;
        return o *= 128, i >= o && (i -= Math.pow(2, 8 * e)), i
    };
    U.prototype.readIntBE = function(t, e, n) {
        t = t >>> 0, e = e >>> 0, n || Be(t, e, this.length);
        let i = e,
            o = 1,
            s = this[t + --i];
        for (; i > 0 && (o *= 256);) s += this[t + --i] * o;
        return o *= 128, s >= o && (s -= Math.pow(2, 8 * e)), s
    };
    U.prototype.readInt8 = function(t, e) {
        return t = t >>> 0, e || Be(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t]
    };
    U.prototype.readInt16LE = function(t, e) {
        t = t >>> 0, e || Be(t, 2, this.length);
        let n = this[t] | this[t + 1] << 8;
        return n & 32768 ? n | 4294901760 : n
    };
    U.prototype.readInt16BE = function(t, e) {
        t = t >>> 0, e || Be(t, 2, this.length);
        let n = this[t + 1] | this[t] << 8;
        return n & 32768 ? n | 4294901760 : n
    };
    U.prototype.readInt32LE = function(t, e) {
        return t = t >>> 0, e || Be(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
    };
    U.prototype.readInt32BE = function(t, e) {
        return t = t >>> 0, e || Be(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
    };
    U.prototype.readBigInt64LE = Gr(function(t) {
        t = t >>> 0, Kn(t, "offset");
        let e = this[t],
            n = this[t + 7];
        (e === void 0 || n === void 0) && gi(t, this.length - 8);
        let i = this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (n << 24);
        return (BigInt(i) << BigInt(32)) + BigInt(e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24)
    });
    U.prototype.readBigInt64BE = Gr(function(t) {
        t = t >>> 0, Kn(t, "offset");
        let e = this[t],
            n = this[t + 7];
        (e === void 0 || n === void 0) && gi(t, this.length - 8);
        let i = (e << 24) + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
        return (BigInt(i) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n)
    });
    U.prototype.readFloatLE = function(t, e) {
        return t = t >>> 0, e || Be(t, 4, this.length), zn.read(this, t, !0, 23, 4)
    };
    U.prototype.readFloatBE = function(t, e) {
        return t = t >>> 0, e || Be(t, 4, this.length), zn.read(this, t, !1, 23, 4)
    };
    U.prototype.readDoubleLE = function(t, e) {
        return t = t >>> 0, e || Be(t, 8, this.length), zn.read(this, t, !0, 52, 8)
    };
    U.prototype.readDoubleBE = function(t, e) {
        return t = t >>> 0, e || Be(t, 8, this.length), zn.read(this, t, !1, 52, 8)
    };

    function qe(r, t, e, n, i, o) {
        if (!U.isBuffer(r)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
        if (e + n > r.length) throw new RangeError("Index out of range")
    }
    U.prototype.writeUintLE = U.prototype.writeUIntLE = function(t, e, n, i) {
        if (t = +t, e = e >>> 0, n = n >>> 0, !i) {
            let a = Math.pow(2, 8 * n) - 1;
            qe(this, t, e, n, a, 0)
        }
        let o = 1,
            s = 0;
        for (this[e] = t & 255; ++s < n && (o *= 256);) this[e + s] = t / o & 255;
        return e + n
    };
    U.prototype.writeUintBE = U.prototype.writeUIntBE = function(t, e, n, i) {
        if (t = +t, e = e >>> 0, n = n >>> 0, !i) {
            let a = Math.pow(2, 8 * n) - 1;
            qe(this, t, e, n, a, 0)
        }
        let o = n - 1,
            s = 1;
        for (this[e + o] = t & 255; --o >= 0 && (s *= 256);) this[e + o] = t / s & 255;
        return e + n
    };
    U.prototype.writeUint8 = U.prototype.writeUInt8 = function(t, e, n) {
        return t = +t, e = e >>> 0, n || qe(this, t, e, 1, 255, 0), this[e] = t & 255, e + 1
    };
    U.prototype.writeUint16LE = U.prototype.writeUInt16LE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || qe(this, t, e, 2, 65535, 0), this[e] = t & 255, this[e + 1] = t >>> 8, e + 2
    };
    U.prototype.writeUint16BE = U.prototype.writeUInt16BE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || qe(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = t & 255, e + 2
    };
    U.prototype.writeUint32LE = U.prototype.writeUInt32LE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || qe(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = t & 255, e + 4
    };
    U.prototype.writeUint32BE = U.prototype.writeUInt32BE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || qe(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = t & 255, e + 4
    };

    function wh(r, t, e, n, i) {
        kh(t, n, i, r, e, 7);
        let o = Number(t & BigInt(4294967295));
        r[e++] = o, o = o >> 8, r[e++] = o, o = o >> 8, r[e++] = o, o = o >> 8, r[e++] = o;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return r[e++] = s, s = s >> 8, r[e++] = s, s = s >> 8, r[e++] = s, s = s >> 8, r[e++] = s, e
    }

    function bh(r, t, e, n, i) {
        kh(t, n, i, r, e, 7);
        let o = Number(t & BigInt(4294967295));
        r[e + 7] = o, o = o >> 8, r[e + 6] = o, o = o >> 8, r[e + 5] = o, o = o >> 8, r[e + 4] = o;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return r[e + 3] = s, s = s >> 8, r[e + 2] = s, s = s >> 8, r[e + 1] = s, s = s >> 8, r[e] = s, e + 8
    }
    U.prototype.writeBigUInt64LE = Gr(function(t, e = 0) {
        return wh(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
    });
    U.prototype.writeBigUInt64BE = Gr(function(t, e = 0) {
        return bh(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
    });
    U.prototype.writeIntLE = function(t, e, n, i) {
        if (t = +t, e = e >>> 0, !i) {
            let c = Math.pow(2, 8 * n - 1);
            qe(this, t, e, n, c - 1, -c)
        }
        let o = 0,
            s = 1,
            a = 0;
        for (this[e] = t & 255; ++o < n && (s *= 256);) t < 0 && a === 0 && this[e + o - 1] !== 0 && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
        return e + n
    };
    U.prototype.writeIntBE = function(t, e, n, i) {
        if (t = +t, e = e >>> 0, !i) {
            let c = Math.pow(2, 8 * n - 1);
            qe(this, t, e, n, c - 1, -c)
        }
        let o = n - 1,
            s = 1,
            a = 0;
        for (this[e + o] = t & 255; --o >= 0 && (s *= 256);) t < 0 && a === 0 && this[e + o + 1] !== 0 && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
        return e + n
    };
    U.prototype.writeInt8 = function(t, e, n) {
        return t = +t, e = e >>> 0, n || qe(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = t & 255, e + 1
    };
    U.prototype.writeInt16LE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || qe(this, t, e, 2, 32767, -32768), this[e] = t & 255, this[e + 1] = t >>> 8, e + 2
    };
    U.prototype.writeInt16BE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || qe(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = t & 255, e + 2
    };
    U.prototype.writeInt32LE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || qe(this, t, e, 4, 2147483647, -2147483648), this[e] = t & 255, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
    };
    U.prototype.writeInt32BE = function(t, e, n) {
        return t = +t, e = e >>> 0, n || qe(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = t & 255, e + 4
    };
    U.prototype.writeBigInt64LE = Gr(function(t, e = 0) {
        return wh(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });
    U.prototype.writeBigInt64BE = Gr(function(t, e = 0) {
        return bh(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });

    function xh(r, t, e, n, i, o) {
        if (e + n > r.length) throw new RangeError("Index out of range");
        if (e < 0) throw new RangeError("Index out of range")
    }

    function Eh(r, t, e, n, i) {
        return t = +t, e = e >>> 0, i || xh(r, t, e, 4, 34028234663852886e22, -34028234663852886e22), zn.write(r, t, e, n, 23, 4), e + 4
    }
    U.prototype.writeFloatLE = function(t, e, n) {
        return Eh(this, t, e, !0, n)
    };
    U.prototype.writeFloatBE = function(t, e, n) {
        return Eh(this, t, e, !1, n)
    };

    function Bh(r, t, e, n, i) {
        return t = +t, e = e >>> 0, i || xh(r, t, e, 8, 17976931348623157e292, -17976931348623157e292), zn.write(r, t, e, n, 52, 8), e + 8
    }
    U.prototype.writeDoubleLE = function(t, e, n) {
        return Bh(this, t, e, !0, n)
    };
    U.prototype.writeDoubleBE = function(t, e, n) {
        return Bh(this, t, e, !1, n)
    };
    U.prototype.copy = function(t, e, n, i) {
        if (!U.isBuffer(t)) throw new TypeError("argument should be a Buffer");
        if (n || (n = 0), !i && i !== 0 && (i = this.length), e >= t.length && (e = t.length), e || (e = 0), i > 0 && i < n && (i = n), i === n || t.length === 0 || this.length === 0) return 0;
        if (e < 0) throw new RangeError("targetStart out of bounds");
        if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
        if (i < 0) throw new RangeError("sourceEnd out of bounds");
        i > this.length && (i = this.length), t.length - e < i - n && (i = t.length - e + n);
        let o = i - n;
        return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(e, n, i) : Uint8Array.prototype.set.call(t, this.subarray(n, i), e), o
    };
    U.prototype.fill = function(t, e, n, i) {
        if (typeof t == "string") {
            if (typeof e == "string" ? (i = e, e = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), i !== void 0 && typeof i != "string") throw new TypeError("encoding must be a string");
            if (typeof i == "string" && !U.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
            if (t.length === 1) {
                let s = t.charCodeAt(0);
                (i === "utf8" && s < 128 || i === "latin1") && (t = s)
            }
        } else typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
        if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
        if (n <= e) return this;
        e = e >>> 0, n = n === void 0 ? this.length : n >>> 0, t || (t = 0);
        let o;
        if (typeof t == "number")
            for (o = e; o < n; ++o) this[o] = t;
        else {
            let s = U.isBuffer(t) ? t : U.from(t, i),
                a = s.length;
            if (a === 0) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
            for (o = 0; o < n - e; ++o) this[o + e] = s[o % a]
        }
        return this
    };
    var qn = {};

    function lu(r, t, e) {
        qn[r] = class extends e {
            constructor() {
                super(), Object.defineProperty(this, "message", {
                    value: t.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }), this.name = `${this.name} [${r}]`, this.stack, delete this.name
            }
            get code() {
                return r
            }
            set code(i) {
                Object.defineProperty(this, "code", {
                    configurable: !0,
                    enumerable: !0,
                    value: i,
                    writable: !0
                })
            }
            toString() {
                return `${this.name} [${r}]: ${this.message}`
            }
        }
    }
    lu("ERR_BUFFER_OUT_OF_BOUNDS", function(r) {
        return r ? `${r} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
    }, RangeError);
    lu("ERR_INVALID_ARG_TYPE", function(r, t) {
        return `The "${r}" argument must be of type number. Received type ${typeof t}`
    }, TypeError);
    lu("ERR_OUT_OF_RANGE", function(r, t, e) {
        let n = `The value of "${r}" is out of range.`,
            i = e;
        return Number.isInteger(e) && Math.abs(e) > 2 ** 32 ? i = lh(String(e)) : typeof e == "bigint" && (i = String(e), (e > BigInt(2) ** BigInt(32) || e < -(BigInt(2) ** BigInt(32))) && (i = lh(i)), i += "n"), n += ` It must be ${t}. Received ${i}`, n
    }, RangeError);

    function lh(r) {
        let t = "",
            e = r.length,
            n = r[0] === "-" ? 1 : 0;
        for (; e >= n + 4; e -= 3) t = `_${r.slice(e-3,e)}${t}`;
        return `${r.slice(0,e)}${t}`
    }

    function Dy(r, t, e) {
        Kn(t, "offset"), (r[t] === void 0 || r[t + e] === void 0) && gi(t, r.length - (e + 1))
    }

    function kh(r, t, e, n, i, o) {
        if (r > e || r < t) {
            let s = typeof t == "bigint" ? "n" : "",
                a;
            throw o > 3 ? t === 0 || t === BigInt(0) ? a = `>= 0${s} and < 2${s} ** ${(o+1)*8}${s}` : a = `>= -(2${s} ** ${(o+1)*8-1}${s}) and < 2 ** ${(o+1)*8-1}${s}` : a = `>= ${t}${s} and <= ${e}${s}`, new qn.ERR_OUT_OF_RANGE("value", a, r)
        }
        Dy(n, i, o)
    }

    function Kn(r, t) {
        if (typeof r != "number") throw new qn.ERR_INVALID_ARG_TYPE(t, "number", r)
    }

    function gi(r, t, e) {
        throw Math.floor(r) !== r ? (Kn(r, e), new qn.ERR_OUT_OF_RANGE(e || "offset", "an integer", r)) : t < 0 ? new qn.ERR_BUFFER_OUT_OF_BOUNDS : new qn.ERR_OUT_OF_RANGE(e || "offset", `>= ${e?1:0} and <= ${t}`, r)
    }
    var qy = /[^+/0-9A-Za-z-_]/g;

    function zy(r) {
        if (r = r.split("=")[0], r = r.trim().replace(qy, ""), r.length < 2) return "";
        for (; r.length % 4 !== 0;) r = r + "=";
        return r
    }

    function cu(r, t) {
        t = t || 1 / 0;
        let e, n = r.length,
            i = null,
            o = [];
        for (let s = 0; s < n; ++s) {
            if (e = r.charCodeAt(s), e > 55295 && e < 57344) {
                if (!i) {
                    if (e > 56319) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue
                    } else if (s + 1 === n) {
                        (t -= 3) > -1 && o.push(239, 191, 189);
                        continue
                    }
                    i = e;
                    continue
                }
                if (e < 56320) {
                    (t -= 3) > -1 && o.push(239, 191, 189), i = e;
                    continue
                }
                e = (i - 55296 << 10 | e - 56320) + 65536
            } else i && (t -= 3) > -1 && o.push(239, 191, 189);
            if (i = null, e < 128) {
                if ((t -= 1) < 0) break;
                o.push(e)
            } else if (e < 2048) {
                if ((t -= 2) < 0) break;
                o.push(e >> 6 | 192, e & 63 | 128)
            } else if (e < 65536) {
                if ((t -= 3) < 0) break;
                o.push(e >> 12 | 224, e >> 6 & 63 | 128, e & 63 | 128)
            } else if (e < 1114112) {
                if ((t -= 4) < 0) break;
                o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, e & 63 | 128)
            } else throw new Error("Invalid code point")
        }
        return o
    }

    function Ky(r) {
        let t = [];
        for (let e = 0; e < r.length; ++e) t.push(r.charCodeAt(e) & 255);
        return t
    }

    function Wy(r, t) {
        let e, n, i, o = [];
        for (let s = 0; s < r.length && !((t -= 2) < 0); ++s) e = r.charCodeAt(s), n = e >> 8, i = e % 256, o.push(i), o.push(n);
        return o
    }

    function vh(r) {
        return su.toByteArray(zy(r))
    }

    function Co(r, t, e, n) {
        let i;
        for (i = 0; i < n && !(i + e >= t.length || i >= r.length); ++i) t[i + e] = r[i];
        return i
    }

    function ur(r, t) {
        return r instanceof t || r != null && r.constructor != null && r.constructor.name != null && r.constructor.name === t.name
    }

    function du(r) {
        return r !== r
    }
    var Hy = function() {
        let r = "0123456789abcdef",
            t = new Array(256);
        for (let e = 0; e < 16; ++e) {
            let n = e * 16;
            for (let i = 0; i < 16; ++i) t[n + i] = r[e] + r[i]
        }
        return t
    }();

    function Gr(r) {
        return typeof BigInt > "u" ? $y : r
    }

    function $y() {
        throw new Error("BigInt not supported")
    }
});
var mu = wt(L => {
    "use strict";
    Object.defineProperty(L, "__esModule", {
        value: !0
    });
    L.s16 = L.s8 = L.nu64be = L.u48be = L.u40be = L.u32be = L.u24be = L.u16be = L.nu64 = L.u48 = L.u40 = L.u32 = L.u24 = L.u16 = L.u8 = L.offset = L.greedy = L.Constant = L.UTF8 = L.CString = L.Blob = L.Boolean = L.BitField = L.BitStructure = L.VariantLayout = L.Union = L.UnionLayoutDiscriminator = L.UnionDiscriminator = L.Structure = L.Sequence = L.DoubleBE = L.Double = L.FloatBE = L.Float = L.NearInt64BE = L.NearInt64 = L.NearUInt64BE = L.NearUInt64 = L.IntBE = L.Int = L.UIntBE = L.UInt = L.OffsetLayout = L.GreedyCount = L.ExternalLayout = L.bindConstructorLayout = L.nameWithProperty = L.Layout = L.uint8ArrayToBuffer = L.checkUint8Array = void 0;
    L.constant = L.utf8 = L.cstr = L.blob = L.unionLayoutDiscriminator = L.union = L.seq = L.bits = L.struct = L.f64be = L.f64 = L.f32be = L.f32 = L.ns64be = L.s48be = L.s40be = L.s32be = L.s24be = L.s16be = L.ns64 = L.s48 = L.s40 = L.s32 = L.s24 = void 0;
    var yu = Ih();

    function Vn(r) {
        if (!(r instanceof Uint8Array)) throw new TypeError("b must be a Uint8Array")
    }
    L.checkUint8Array = Vn;

    function bt(r) {
        return Vn(r), yu.Buffer.from(r.buffer, r.byteOffset, r.length)
    }
    L.uint8ArrayToBuffer = bt;
    var Et = class {
        constructor(t, e) {
            if (!Number.isInteger(t)) throw new TypeError("span must be an integer");
            this.span = t, this.property = e
        }
        makeDestinationObject() {
            return {}
        }
        getSpan(t, e) {
            if (0 > this.span) throw new RangeError("indeterminate span");
            return this.span
        }
        replicate(t) {
            let e = Object.create(this.constructor.prototype);
            return Object.assign(e, this), e.property = t, e
        }
        fromArray(t) {}
    };
    L.Layout = Et;

    function gu(r, t) {
        return t.property ? r + "[" + t.property + "]" : r
    }
    L.nameWithProperty = gu;

    function Vy(r, t) {
        if (typeof r != "function") throw new TypeError("Class must be constructor");
        if (Object.prototype.hasOwnProperty.call(r, "layout_")) throw new Error("Class is already bound to a layout");
        if (!(t && t instanceof Et)) throw new TypeError("layout must be a Layout");
        if (Object.prototype.hasOwnProperty.call(t, "boundConstructor_")) throw new Error("layout is already bound to a constructor");
        r.layout_ = t, t.boundConstructor_ = r, t.makeDestinationObject = () => new r, Object.defineProperty(r.prototype, "encode", {
            value(e, n) {
                return t.encode(this, e, n)
            },
            writable: !0
        }), Object.defineProperty(r, "decode", {
            value(e, n) {
                return t.decode(e, n)
            },
            writable: !0
        })
    }
    L.bindConstructorLayout = Vy;
    var _e = class extends Et {
        isCount() {
            throw new Error("ExternalLayout is abstract")
        }
    };
    L.ExternalLayout = _e;
    var Fo = class extends _e {
        constructor(t = 1, e) {
            if (!Number.isInteger(t) || 0 >= t) throw new TypeError("elementSpan must be a (positive) integer");
            super(-1, e), this.elementSpan = t
        }
        isCount() {
            return !0
        }
        decode(t, e = 0) {
            Vn(t);
            let n = t.length - e;
            return Math.floor(n / this.elementSpan)
        }
        encode(t, e, n) {
            return 0
        }
    };
    L.GreedyCount = Fo;
    var mi = class extends _e {
        constructor(t, e = 0, n) {
            if (!(t instanceof Et)) throw new TypeError("layout must be a Layout");
            if (!Number.isInteger(e)) throw new TypeError("offset must be integer or undefined");
            super(t.span, n || t.property), this.layout = t, this.offset = e
        }
        isCount() {
            return this.layout instanceof ze || this.layout instanceof He
        }
        decode(t, e = 0) {
            return this.layout.decode(t, e + this.offset)
        }
        encode(t, e, n = 0) {
            return this.layout.encode(t, e, n + this.offset)
        }
    };
    L.OffsetLayout = mi;
    var ze = class extends Et {
        constructor(t, e) {
            if (super(t, e), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
        }
        decode(t, e = 0) {
            return bt(t).readUIntLE(e, this.span)
        }
        encode(t, e, n = 0) {
            return bt(e).writeUIntLE(t, n, this.span), this.span
        }
    };
    L.UInt = ze;
    var He = class extends Et {
        constructor(t, e) {
            if (super(t, e), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
        }
        decode(t, e = 0) {
            return bt(t).readUIntBE(e, this.span)
        }
        encode(t, e, n = 0) {
            return bt(e).writeUIntBE(t, n, this.span), this.span
        }
    };
    L.UIntBE = He;
    var Ir = class extends Et {
        constructor(t, e) {
            if (super(t, e), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
        }
        decode(t, e = 0) {
            return bt(t).readIntLE(e, this.span)
        }
        encode(t, e, n = 0) {
            return bt(e).writeIntLE(t, n, this.span), this.span
        }
    };
    L.Int = Ir;
    var jr = class extends Et {
        constructor(t, e) {
            if (super(t, e), 6 < this.span) throw new RangeError("span must not exceed 6 bytes")
        }
        decode(t, e = 0) {
            return bt(t).readIntBE(e, this.span)
        }
        encode(t, e, n = 0) {
            return bt(e).writeIntBE(t, n, this.span), this.span
        }
    };
    L.IntBE = jr;
    var pu = Math.pow(2, 32);

    function Qo(r) {
        let t = Math.floor(r / pu),
            e = r - t * pu;
        return {
            hi32: t,
            lo32: e
        }
    }

    function ts(r, t) {
        return r * pu + t
    }
    var Oo = class extends Et {
        constructor(t) {
            super(8, t)
        }
        decode(t, e = 0) {
            let n = bt(t),
                i = n.readUInt32LE(e),
                o = n.readUInt32LE(e + 4);
            return ts(o, i)
        }
        encode(t, e, n = 0) {
            let i = Qo(t),
                o = bt(e);
            return o.writeUInt32LE(i.lo32, n), o.writeUInt32LE(i.hi32, n + 4), 8
        }
    };
    L.NearUInt64 = Oo;
    var No = class extends Et {
        constructor(t) {
            super(8, t)
        }
        decode(t, e = 0) {
            let n = bt(t),
                i = n.readUInt32BE(e),
                o = n.readUInt32BE(e + 4);
            return ts(i, o)
        }
        encode(t, e, n = 0) {
            let i = Qo(t),
                o = bt(e);
            return o.writeUInt32BE(i.hi32, n), o.writeUInt32BE(i.lo32, n + 4), 8
        }
    };
    L.NearUInt64BE = No;
    var Do = class extends Et {
        constructor(t) {
            super(8, t)
        }
        decode(t, e = 0) {
            let n = bt(t),
                i = n.readUInt32LE(e),
                o = n.readInt32LE(e + 4);
            return ts(o, i)
        }
        encode(t, e, n = 0) {
            let i = Qo(t),
                o = bt(e);
            return o.writeUInt32LE(i.lo32, n), o.writeInt32LE(i.hi32, n + 4), 8
        }
    };
    L.NearInt64 = Do;
    var qo = class extends Et {
        constructor(t) {
            super(8, t)
        }
        decode(t, e = 0) {
            let n = bt(t),
                i = n.readInt32BE(e),
                o = n.readUInt32BE(e + 4);
            return ts(i, o)
        }
        encode(t, e, n = 0) {
            let i = Qo(t),
                o = bt(e);
            return o.writeInt32BE(i.hi32, n), o.writeUInt32BE(i.lo32, n + 4), 8
        }
    };
    L.NearInt64BE = qo;
    var zo = class extends Et {
        constructor(t) {
            super(4, t)
        }
        decode(t, e = 0) {
            return bt(t).readFloatLE(e)
        }
        encode(t, e, n = 0) {
            return bt(e).writeFloatLE(t, n), 4
        }
    };
    L.Float = zo;
    var Ko = class extends Et {
        constructor(t) {
            super(4, t)
        }
        decode(t, e = 0) {
            return bt(t).readFloatBE(e)
        }
        encode(t, e, n = 0) {
            return bt(e).writeFloatBE(t, n), 4
        }
    };
    L.FloatBE = Ko;
    var Wo = class extends Et {
        constructor(t) {
            super(8, t)
        }
        decode(t, e = 0) {
            return bt(t).readDoubleLE(e)
        }
        encode(t, e, n = 0) {
            return bt(e).writeDoubleLE(t, n), 8
        }
    };
    L.Double = Wo;
    var Ho = class extends Et {
        constructor(t) {
            super(8, t)
        }
        decode(t, e = 0) {
            return bt(t).readDoubleBE(e)
        }
        encode(t, e, n = 0) {
            return bt(e).writeDoubleBE(t, n), 8
        }
    };
    L.DoubleBE = Ho;
    var $o = class extends Et {
        constructor(t, e, n) {
            if (!(t instanceof Et)) throw new TypeError("elementLayout must be a Layout");
            if (!(e instanceof _e && e.isCount() || Number.isInteger(e) && 0 <= e)) throw new TypeError("count must be non-negative integer or an unsigned integer ExternalLayout");
            let i = -1;
            !(e instanceof _e) && 0 < t.span && (i = e * t.span), super(i, n), this.elementLayout = t, this.count = e
        }
        getSpan(t, e = 0) {
            if (0 <= this.span) return this.span;
            let n = 0,
                i = this.count;
            if (i instanceof _e && (i = i.decode(t, e)), 0 < this.elementLayout.span) n = i * this.elementLayout.span;
            else {
                let o = 0;
                for (; o < i;) n += this.elementLayout.getSpan(t, e + n), ++o
            }
            return n
        }
        decode(t, e = 0) {
            let n = [],
                i = 0,
                o = this.count;
            for (o instanceof _e && (o = o.decode(t, e)); i < o;) n.push(this.elementLayout.decode(t, e)), e += this.elementLayout.getSpan(t, e), i += 1;
            return n
        }
        encode(t, e, n = 0) {
            let i = this.elementLayout,
                o = t.reduce((s, a) => s + i.encode(a, e, n + s), 0);
            return this.count instanceof _e && this.count.encode(t.length, e, n), o
        }
    };
    L.Sequence = $o;
    var Vo = class extends Et {
        constructor(t, e, n) {
            if (!(Array.isArray(t) && t.reduce((o, s) => o && s instanceof Et, !0))) throw new TypeError("fields must be array of Layout instances");
            typeof e == "boolean" && n === void 0 && (n = e, e = void 0);
            for (let o of t)
                if (0 > o.span && o.property === void 0) throw new Error("fields cannot contain unnamed variable-length layout");
            let i = -1;
            try {
                i = t.reduce((o, s) => o + s.getSpan(), 0)
            } catch {}
            super(i, e), this.fields = t, this.decodePrefixes = !!n
        }
        getSpan(t, e = 0) {
            if (0 <= this.span) return this.span;
            let n = 0;
            try {
                n = this.fields.reduce((i, o) => {
                    let s = o.getSpan(t, e);
                    return e += s, i + s
                }, 0)
            } catch {
                throw new RangeError("indeterminate span")
            }
            return n
        }
        decode(t, e = 0) {
            Vn(t);
            let n = this.makeDestinationObject();
            for (let i of this.fields)
                if (i.property !== void 0 && (n[i.property] = i.decode(t, e)), e += i.getSpan(t, e), this.decodePrefixes && t.length === e) break;
            return n
        }
        encode(t, e, n = 0) {
            let i = n,
                o = 0,
                s = 0;
            for (let a of this.fields) {
                let c = a.span;
                if (s = 0 < c ? c : 0, a.property !== void 0) {
                    let d = t[a.property];
                    d !== void 0 && (s = a.encode(d, e, n), 0 > c && (c = a.getSpan(e, n)))
                }
                o = n, n += c
            }
            return o + s - i
        }
        fromArray(t) {
            let e = this.makeDestinationObject();
            for (let n of this.fields) n.property !== void 0 && 0 < t.length && (e[n.property] = t.shift());
            return e
        }
        layoutFor(t) {
            if (typeof t != "string") throw new TypeError("property must be string");
            for (let e of this.fields)
                if (e.property === t) return e
        }
        offsetOf(t) {
            if (typeof t != "string") throw new TypeError("property must be string");
            let e = 0;
            for (let n of this.fields) {
                if (n.property === t) return e;
                0 > n.span ? e = -1 : 0 <= e && (e += n.span)
            }
        }
    };
    L.Structure = Vo;
    var wi = class {
        constructor(t) {
            this.property = t
        }
        decode(t, e) {
            throw new Error("UnionDiscriminator is abstract")
        }
        encode(t, e, n) {
            throw new Error("UnionDiscriminator is abstract")
        }
    };
    L.UnionDiscriminator = wi;
    var $n = class extends wi {
        constructor(t, e) {
            if (!(t instanceof _e && t.isCount())) throw new TypeError("layout must be an unsigned integer ExternalLayout");
            super(e || t.property || "variant"), this.layout = t
        }
        decode(t, e) {
            return this.layout.decode(t, e)
        }
        encode(t, e, n) {
            return this.layout.encode(t, e, n)
        }
    };
    L.UnionLayoutDiscriminator = $n;
    var bi = class extends Et {
        constructor(t, e, n) {
            let i;
            if (t instanceof ze || t instanceof He) i = new $n(new mi(t));
            else if (t instanceof _e && t.isCount()) i = new $n(t);
            else if (t instanceof wi) i = t;
            else throw new TypeError("discr must be a UnionDiscriminator or an unsigned integer layout");
            if (e === void 0 && (e = null), !(e === null || e instanceof Et)) throw new TypeError("defaultLayout must be null or a Layout");
            if (e !== null) {
                if (0 > e.span) throw new Error("defaultLayout must have constant span");
                e.property === void 0 && (e = e.replicate("content"))
            }
            let o = -1;
            e && (o = e.span, 0 <= o && (t instanceof ze || t instanceof He) && (o += i.layout.span)), super(o, n), this.discriminator = i, this.usesPrefixDiscriminator = t instanceof ze || t instanceof He, this.defaultLayout = e, this.registry = {};
            let s = this.defaultGetSourceVariant.bind(this);
            this.getSourceVariant = function(a) {
                return s(a)
            }, this.configGetSourceVariant = function(a) {
                s = a.bind(this)
            }
        }
        getSpan(t, e = 0) {
            if (0 <= this.span) return this.span;
            let n = this.getVariant(t, e);
            if (!n) throw new Error("unable to determine span for unrecognized variant");
            return n.getSpan(t, e)
        }
        defaultGetSourceVariant(t) {
            if (Object.prototype.hasOwnProperty.call(t, this.discriminator.property)) {
                if (this.defaultLayout && this.defaultLayout.property && Object.prototype.hasOwnProperty.call(t, this.defaultLayout.property)) return;
                let e = this.registry[t[this.discriminator.property]];
                if (e && (!e.layout || e.property && Object.prototype.hasOwnProperty.call(t, e.property))) return e
            } else
                for (let e in this.registry) {
                    let n = this.registry[e];
                    if (n.property && Object.prototype.hasOwnProperty.call(t, n.property)) return n
                }
            throw new Error("unable to infer src variant")
        }
        decode(t, e = 0) {
            let n, i = this.discriminator,
                o = i.decode(t, e),
                s = this.registry[o];
            if (s === void 0) {
                let a = this.defaultLayout,
                    c = 0;
                this.usesPrefixDiscriminator && (c = i.layout.span), n = this.makeDestinationObject(), n[i.property] = o, n[a.property] = a.decode(t, e + c)
            } else n = s.decode(t, e);
            return n
        }
        encode(t, e, n = 0) {
            let i = this.getSourceVariant(t);
            if (i === void 0) {
                let o = this.discriminator,
                    s = this.defaultLayout,
                    a = 0;
                return this.usesPrefixDiscriminator && (a = o.layout.span), o.encode(t[o.property], e, n), a + s.encode(t[s.property], e, n + a)
            }
            return i.encode(t, e, n)
        }
        addVariant(t, e, n) {
            let i = new Go(this, t, e, n);
            return this.registry[t] = i, i
        }
        getVariant(t, e = 0) {
            let n;
            return t instanceof Uint8Array ? n = this.discriminator.decode(t, e) : n = t, this.registry[n]
        }
    };
    L.Union = bi;
    var Go = class extends Et {
        constructor(t, e, n, i) {
            if (!(t instanceof bi)) throw new TypeError("union must be a Union");
            if (!Number.isInteger(e) || 0 > e) throw new TypeError("variant must be a (non-negative) integer");
            if (typeof n == "string" && i === void 0 && (i = n, n = null), n) {
                if (!(n instanceof Et)) throw new TypeError("layout must be a Layout");
                if (t.defaultLayout !== null && 0 <= n.span && n.span > t.defaultLayout.span) throw new Error("variant span exceeds span of containing union");
                if (typeof i != "string") throw new TypeError("variant must have a String property")
            }
            let o = t.span;
            0 > t.span && (o = n ? n.span : 0, 0 <= o && t.usesPrefixDiscriminator && (o += t.discriminator.layout.span)), super(o, i), this.union = t, this.variant = e, this.layout = n || null
        }
        getSpan(t, e = 0) {
            if (0 <= this.span) return this.span;
            let n = 0;
            this.union.usesPrefixDiscriminator && (n = this.union.discriminator.layout.span);
            let i = 0;
            return this.layout && (i = this.layout.getSpan(t, e + n)), n + i
        }
        decode(t, e = 0) {
            let n = this.makeDestinationObject();
            if (this !== this.union.getVariant(t, e)) throw new Error("variant mismatch");
            let i = 0;
            return this.union.usesPrefixDiscriminator && (i = this.union.discriminator.layout.span), this.layout ? n[this.property] = this.layout.decode(t, e + i) : this.property ? n[this.property] = !0 : this.union.usesPrefixDiscriminator && (n[this.union.discriminator.property] = this.variant), n
        }
        encode(t, e, n = 0) {
            let i = 0;
            if (this.union.usesPrefixDiscriminator && (i = this.union.discriminator.layout.span), this.layout && !Object.prototype.hasOwnProperty.call(t, this.property)) throw new TypeError("variant lacks property " + this.property);
            this.union.discriminator.encode(this.variant, e, n);
            let o = i;
            if (this.layout && (this.layout.encode(t[this.property], e, n + i), o += this.layout.getSpan(e, n + i), 0 <= this.union.span && o > this.union.span)) throw new Error("encoded variant overruns containing union");
            return o
        }
        fromArray(t) {
            if (this.layout) return this.layout.fromArray(t)
        }
    };
    L.VariantLayout = Go;

    function Hn(r) {
        return 0 > r && (r += 4294967296), r
    }
    var xi = class extends Et {
        constructor(t, e, n) {
            if (!(t instanceof ze || t instanceof He)) throw new TypeError("word must be a UInt or UIntBE layout");
            if (typeof e == "string" && n === void 0 && (n = e, e = !1), 4 < t.span) throw new RangeError("word cannot exceed 32 bits");
            super(t.span, n), this.word = t, this.msb = !!e, this.fields = [];
            let i = 0;
            this._packedSetValue = function(o) {
                return i = Hn(o), this
            }, this._packedGetValue = function() {
                return i
            }
        }
        decode(t, e = 0) {
            let n = this.makeDestinationObject(),
                i = this.word.decode(t, e);
            this._packedSetValue(i);
            for (let o of this.fields) o.property !== void 0 && (n[o.property] = o.decode(t));
            return n
        }
        encode(t, e, n = 0) {
            let i = this.word.decode(e, n);
            this._packedSetValue(i);
            for (let o of this.fields)
                if (o.property !== void 0) {
                    let s = t[o.property];
                    s !== void 0 && o.encode(s)
                }
            return this.word.encode(this._packedGetValue(), e, n)
        }
        addField(t, e) {
            let n = new Ei(this, t, e);
            return this.fields.push(n), n
        }
        addBoolean(t) {
            let e = new jo(this, t);
            return this.fields.push(e), e
        }
        fieldFor(t) {
            if (typeof t != "string") throw new TypeError("property must be string");
            for (let e of this.fields)
                if (e.property === t) return e
        }
    };
    L.BitStructure = xi;
    var Ei = class {
        constructor(t, e, n) {
            if (!(t instanceof xi)) throw new TypeError("container must be a BitStructure");
            if (!Number.isInteger(e) || 0 >= e) throw new TypeError("bits must be positive integer");
            let i = 8 * t.span,
                o = t.fields.reduce((s, a) => s + a.bits, 0);
            if (e + o > i) throw new Error("bits too long for span remainder (" + (i - o) + " of " + i + " remain)");
            this.container = t, this.bits = e, this.valueMask = (1 << e) - 1, e === 32 && (this.valueMask = 4294967295), this.start = o, this.container.msb && (this.start = i - o - e), this.wordMask = Hn(this.valueMask << this.start), this.property = n
        }
        decode(t, e) {
            let n = this.container._packedGetValue();
            return Hn(n & this.wordMask) >>> this.start
        }
        encode(t) {
            if (typeof t != "number" || !Number.isInteger(t) || t !== Hn(t & this.valueMask)) throw new TypeError(gu("BitField.encode", this) + " value must be integer not exceeding " + this.valueMask);
            let e = this.container._packedGetValue(),
                n = Hn(t << this.start);
            this.container._packedSetValue(Hn(e & ~this.wordMask) | n)
        }
    };
    L.BitField = Ei;
    var jo = class extends Ei {
        constructor(t, e) {
            super(t, 1, e)
        }
        decode(t, e) {
            return !!super.decode(t, e)
        }
        encode(t) {
            typeof t == "boolean" && (t = +t), super.encode(t)
        }
    };
    L.Boolean = jo;
    var Yo = class extends Et {
        constructor(t, e) {
            if (!(t instanceof _e && t.isCount() || Number.isInteger(t) && 0 <= t)) throw new TypeError("length must be positive integer or an unsigned integer ExternalLayout");
            let n = -1;
            t instanceof _e || (n = t), super(n, e), this.length = t
        }
        getSpan(t, e) {
            let n = this.span;
            return 0 > n && (n = this.length.decode(t, e)), n
        }
        decode(t, e = 0) {
            let n = this.span;
            return 0 > n && (n = this.length.decode(t, e)), bt(t).slice(e, e + n)
        }
        encode(t, e, n) {
            let i = this.length;
            if (this.length instanceof _e && (i = t.length), !(t instanceof Uint8Array && i === t.length)) throw new TypeError(gu("Blob.encode", this) + " requires (length " + i + ") Uint8Array as src");
            if (n + i > e.length) throw new RangeError("encoding overruns Uint8Array");
            let o = bt(t);
            return bt(e).write(o.toString("hex"), n, i, "hex"), this.length instanceof _e && this.length.encode(i, e, n), i
        }
    };
    L.Blob = Yo;
    var Zo = class extends Et {
        constructor(t) {
            super(-1, t)
        }
        getSpan(t, e = 0) {
            Vn(t);
            let n = e;
            for (; n < t.length && t[n] !== 0;) n += 1;
            return 1 + n - e
        }
        decode(t, e = 0) {
            let n = this.getSpan(t, e);
            return bt(t).slice(e, e + n - 1).toString("utf-8")
        }
        encode(t, e, n = 0) {
            typeof t != "string" && (t = String(t));
            let i = yu.Buffer.from(t, "utf8"),
                o = i.length;
            if (n + o > e.length) throw new RangeError("encoding overruns Buffer");
            let s = bt(e);
            return i.copy(s, n), s[n + o] = 0, o + 1
        }
    };
    L.CString = Zo;
    var Xo = class extends Et {
        constructor(t, e) {
            if (typeof t == "string" && e === void 0 && (e = t, t = void 0), t === void 0) t = -1;
            else if (!Number.isInteger(t)) throw new TypeError("maxSpan must be an integer");
            super(-1, e), this.maxSpan = t
        }
        getSpan(t, e = 0) {
            return Vn(t), t.length - e
        }
        decode(t, e = 0) {
            let n = this.getSpan(t, e);
            if (0 <= this.maxSpan && this.maxSpan < n) throw new RangeError("text length exceeds maxSpan");
            return bt(t).slice(e, e + n).toString("utf-8")
        }
        encode(t, e, n = 0) {
            typeof t != "string" && (t = String(t));
            let i = yu.Buffer.from(t, "utf8"),
                o = i.length;
            if (0 <= this.maxSpan && this.maxSpan < o) throw new RangeError("text length exceeds maxSpan");
            if (n + o > e.length) throw new RangeError("encoding overruns Buffer");
            return i.copy(bt(e), n), o
        }
    };
    L.UTF8 = Xo;
    var Jo = class extends Et {
        constructor(t, e) {
            super(0, e), this.value = t
        }
        decode(t, e) {
            return this.value
        }
        encode(t, e, n) {
            return 0
        }
    };
    L.Constant = Jo;
    L.greedy = (r, t) => new Fo(r, t);
    L.offset = (r, t, e) => new mi(r, t, e);
    L.u8 = r => new ze(1, r);
    L.u16 = r => new ze(2, r);
    L.u24 = r => new ze(3, r);
    L.u32 = r => new ze(4, r);
    L.u40 = r => new ze(5, r);
    L.u48 = r => new ze(6, r);
    L.nu64 = r => new Oo(r);
    L.u16be = r => new He(2, r);
    L.u24be = r => new He(3, r);
    L.u32be = r => new He(4, r);
    L.u40be = r => new He(5, r);
    L.u48be = r => new He(6, r);
    L.nu64be = r => new No(r);
    L.s8 = r => new Ir(1, r);
    L.s16 = r => new Ir(2, r);
    L.s24 = r => new Ir(3, r);
    L.s32 = r => new Ir(4, r);
    L.s40 = r => new Ir(5, r);
    L.s48 = r => new Ir(6, r);
    L.ns64 = r => new Do(r);
    L.s16be = r => new jr(2, r);
    L.s24be = r => new jr(3, r);
    L.s32be = r => new jr(4, r);
    L.s40be = r => new jr(5, r);
    L.s48be = r => new jr(6, r);
    L.ns64be = r => new qo(r);
    L.f32 = r => new zo(r);
    L.f32be = r => new Ko(r);
    L.f64 = r => new Wo(r);
    L.f64be = r => new Ho(r);
    L.struct = (r, t, e) => new Vo(r, t, e);
    L.bits = (r, t, e) => new xi(r, t, e);
    L.seq = (r, t, e) => new $o(r, t, e);
    L.union = (r, t, e) => new bi(r, t, e);
    L.unionLayoutDiscriminator = (r, t) => new $n(r, t);
    L.blob = (r, t) => new Yo(r, t);
    L.cstr = r => new Zo(r);
    L.utf8 = (r, t) => new Xo(r, t);
    L.constant = (r, t) => new Jo(r, t)
});
var Sh = wt(Gn => {
    "use strict";
    Object.defineProperty(Gn, "__esModule", {
        value: !0
    });
    var es;

    function Gy(r) {
        {
            let t = Buffer.from(r);
            t.reverse();
            let e = t.toString("hex");
            return e.length === 0 ? BigInt(0) : BigInt(`0x${e}`)
        }
        return es.toBigInt(r, !1)
    }
    Gn.toBigIntLE = Gy;

    function jy(r) {
        {
            let t = r.toString("hex");
            return t.length === 0 ? BigInt(0) : BigInt(`0x${t}`)
        }
        return es.toBigInt(r, !0)
    }
    Gn.toBigIntBE = jy;

    function Yy(r, t) {
        {
            let e = r.toString(16),
                n = Buffer.from(e.padStart(t * 2, "0").slice(0, t * 2), "hex");
            return n.reverse(), n
        }
        return es.fromBigInt(r, Buffer.allocUnsafe(t), !1)
    }
    Gn.toBufferLE = Yy;

    function Zy(r, t) {
        {
            let e = r.toString(16);
            return Buffer.from(e.padStart(t * 2, "0").slice(0, t * 2), "hex")
        }
        return es.fromBigInt(r, Buffer.allocUnsafe(t), !0)
    }
    Gn.toBufferBE = Zy
});

function Xy(r) {
    return Yr(r) && typeof r[Symbol.iterator] == "function"
}

function Yr(r) {
    return typeof r == "object" && r != null
}

function Xe(r) {
    return typeof r == "string" ? JSON.stringify(r) : "" + r
}

function Jy(r) {
    let {
        done: t,
        value: e
    } = r.next();
    return t ? void 0 : e
}

function Qy(r, t, e, n) {
    if (r === !0) return;
    r === !1 ? r = {} : typeof r == "string" && (r = {
        message: r
    });
    let {
        path: i,
        branch: o
    } = t, {
        type: s
    } = e, {
        refinement: a,
        message: c = "Expected a value of type `" + s + "`" + (a ? " with refinement `" + a + "`" : "") + ", but received: `" + Xe(n) + "`"
    } = r;
    return ft(st({
        value: n,
        type: s,
        refinement: a,
        key: i[i.length - 1],
        path: i,
        branch: o
    }, r), {
        message: c
    })
}

function* Ah(r, t, e, n) {
    Xy(r) || (r = [r]);
    for (let i of r) {
        let o = Qy(i, t, e, n);
        o && (yield o)
    }
}

function* bu(r, t, e = {}) {
    let {
        path: n = [],
        branch: i = [r],
        coerce: o = !1,
        mask: s = !1
    } = e, a = {
        path: n,
        branch: i
    };
    if (o && (r = t.coercer(r, a), s && t.type !== "type" && Yr(t.schema) && Yr(r) && !Array.isArray(r)))
        for (let d in r) t.schema[d] === void 0 && delete r[d];
    let c = !0;
    for (let d of t.validator(r, a)) c = !1, yield [d, void 0];
    for (let [d, g, b] of t.entries(r, a)) {
        let _ = bu(g, b, {
            path: d === void 0 ? n : [...n, d],
            branch: d === void 0 ? i : [...i, g],
            coerce: o,
            mask: s
        });
        for (let I of _) I[0] ? (c = !1, yield [I[0], void 0]) : o && (g = I[1], d === void 0 ? r = g : r instanceof Map ? r.set(d, g) : r instanceof Set ? r.add(g) : Yr(r) && (r[d] = g))
    }
    if (c)
        for (let d of t.refiner(r, a)) c = !1, yield [d, void 0];
    c && (yield [void 0, r])
}

function xu(r, t) {
    let e = Bi(r, t);
    if (e[0]) throw e[0]
}

function j(r, t) {
    let e = Bi(r, t, {
        coerce: !0
    });
    if (e[0]) throw e[0];
    return e[1]
}

function tg(r, t) {
    let e = Bi(r, t, {
        coerce: !0,
        mask: !0
    });
    if (e[0]) throw e[0];
    return e[1]
}

function _h(r, t) {
    return !Bi(r, t)[0]
}

function Bi(r, t, e = {}) {
    let n = bu(r, t, e),
        i = Jy(n);
    return i[0] ? [new wu(i[0], function*() {
        for (let s of n) s[0] && (yield s[0])
    }), void 0] : [void 0, i[1]]
}

function bn(r, t) {
    return new Ge({
        type: r,
        schema: null,
        validator: t
    })
}

function Rh() {
    return bn("any", () => !0)
}

function X(r) {
    return new Ge({
        type: "array",
        schema: r,
        * entries(t) {
            if (r && Array.isArray(t))
                for (let [e, n] of t.entries()) yield [e, n, r]
        },
        coercer(t) {
            return Array.isArray(t) ? t.slice() : t
        },
        validator(t) {
            return Array.isArray(t) || "Expected an array value, but received: " + Xe(t)
        }
    })
}

function Je() {
    return bn("boolean", r => typeof r == "boolean")
}

function rs(r) {
    return bn("instance", t => t instanceof r || "Expected a `" + r.name + "` instance, but received: " + Xe(t))
}

function Ct(r) {
    let t = Xe(r),
        e = typeof r;
    return new Ge({
        type: "literal",
        schema: e === "string" || e === "number" || e === "boolean" ? r : null,
        validator(n) {
            return n === r || "Expected the literal `" + t + "`, but received: " + Xe(n)
        }
    })
}

function eg() {
    return bn("never", () => !1)
}

function Z(r) {
    return new Ge(ft(st({}, r), {
        validator: (t, e) => t === null || r.validator(t, e),
        refiner: (t, e) => t === null || r.refiner(t, e)
    }))
}

function R() {
    return bn("number", r => typeof r == "number" && !isNaN(r) || "Expected a number, but received: " + Xe(r))
}

function it(r) {
    return new Ge(ft(st({}, r), {
        validator: (t, e) => t === void 0 || r.validator(t, e),
        refiner: (t, e) => t === void 0 || r.refiner(t, e)
    }))
}

function Eu(r, t) {
    return new Ge({
        type: "record",
        schema: null,
        * entries(e) {
            if (Yr(e))
                for (let n in e) {
                    let i = e[n];
                    yield [n, n, r], yield [n, i, t]
                }
        },
        validator(e) {
            return Yr(e) || "Expected an object, but received: " + Xe(e)
        }
    })
}

function $() {
    return bn("string", r => typeof r == "string" || "Expected a string, but received: " + Xe(r))
}

function ns(r) {
    let t = eg();
    return new Ge({
        type: "tuple",
        schema: null,
        * entries(e) {
            if (Array.isArray(e)) {
                let n = Math.max(r.length, e.length);
                for (let i = 0; i < n; i++) yield [i, e[i], r[i] || t]
            }
        },
        validator(e) {
            return Array.isArray(e) || "Expected an array, but received: " + Xe(e)
        }
    })
}

function D(r) {
    let t = Object.keys(r);
    return new Ge({
        type: "type",
        schema: r,
        * entries(e) {
            if (Yr(e))
                for (let n of t) yield [n, e[n], r[n]]
        },
        validator(e) {
            return Yr(e) || "Expected an object, but received: " + Xe(e)
        }
    })
}

function Ce(r) {
    let t = r.map(e => e.type).join(" | ");
    return new Ge({
        type: "union",
        schema: null,
        validator(e, n) {
            let i = [];
            for (let o of r) {
                let [...s] = bu(e, o, n), [a] = s;
                if (a[0])
                    for (let [c] of s) c && i.push(c);
                else return []
            }
            return ["Expected the value to satisfy a union of `" + t + "`, but received: " + Xe(e), ...i]
        }
    })
}

function jn() {
    return bn("unknown", () => !0)
}

function Yn(r, t, e) {
    return new Ge(ft(st({}, r), {
        coercer: (n, i) => _h(n, t) ? r.coercer(e(n, i), i) : r.coercer(n, i)
    }))
}
var wu, Ge, Lh = yt(() => {
    "use strict";
    wu = class extends TypeError {
        constructor(t, e) {
            let n, c = t,
                {
                    message: i
                } = c,
                o = on(c, ["message"]),
                {
                    path: s
                } = t,
                a = s.length === 0 ? i : "At path: " + s.join(".") + " -- " + i;
            super(a), Object.assign(this, o), this.name = this.constructor.name, this.failures = () => {
                var d;
                return (d = n) != null ? d : n = [t, ...e()]
            }
        }
    };
    Ge = class {
        constructor(t) {
            let {
                type: e,
                schema: n,
                validator: i,
                refiner: o,
                coercer: s = c => c,
                entries: a = function*() {}
            } = t;
            this.type = e, this.schema = n, this.entries = a, this.coercer = s, i ? this.validator = (c, d) => {
                let g = i(c, d);
                return Ah(g, d, this, c)
            } : this.validator = () => [], o ? this.refiner = (c, d) => {
                let g = o(c, d);
                return Ah(g, d, this, c)
            } : this.refiner = () => []
        }
        assert(t) {
            return xu(t, this)
        }
        create(t) {
            return j(t, this)
        }
        is(t) {
            return _h(t, this)
        }
        mask(t) {
            return tg(t, this)
        }
        validate(t, e = {}) {
            return Bi(t, this, e)
        }
    }
});

function ki() {
    if (!is && (is = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !is)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return is(rg)
}
var is, rg, Bu = yt(() => {
    "use strict";
    rg = new Uint8Array(16)
});
var Th, Mh = yt(() => {
    "use strict";
    Th = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
});

function ng(r) {
    return typeof r == "string" && Th.test(r)
}
var Zr, vi = yt(() => {
    "use strict";
    Mh();
    Zr = ng
});

function ig(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        e = (Se[r[t + 0]] + Se[r[t + 1]] + Se[r[t + 2]] + Se[r[t + 3]] + "-" + Se[r[t + 4]] + Se[r[t + 5]] + "-" + Se[r[t + 6]] + Se[r[t + 7]] + "-" + Se[r[t + 8]] + Se[r[t + 9]] + "-" + Se[r[t + 10]] + Se[r[t + 11]] + Se[r[t + 12]] + Se[r[t + 13]] + Se[r[t + 14]] + Se[r[t + 15]]).toLowerCase();
    if (!Zr(e)) throw TypeError("Stringified UUID is invalid");
    return e
}
var Se, os, Xr, Ii = yt(() => {
    "use strict";
    vi();
    Se = [];
    for (os = 0; os < 256; ++os) Se.push((os + 256).toString(16).substr(1));
    Xr = ig
});

function og(r, t, e) {
    var n = t && e || 0,
        i = t || new Array(16);
    r = r || {};
    var o = r.node || Uh,
        s = r.clockseq !== void 0 ? r.clockseq : ku;
    if (o == null || s == null) {
        var a = r.random || (r.rng || ki)();
        o == null && (o = Uh = [a[0] | 1, a[1], a[2], a[3], a[4], a[5]]), s == null && (s = ku = (a[6] << 8 | a[7]) & 16383)
    }
    var c = r.msecs !== void 0 ? r.msecs : Date.now(),
        d = r.nsecs !== void 0 ? r.nsecs : Iu + 1,
        g = c - vu + (d - Iu) / 1e4;
    if (g < 0 && r.clockseq === void 0 && (s = s + 1 & 16383), (g < 0 || c > vu) && r.nsecs === void 0 && (d = 0), d >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    vu = c, Iu = d, ku = s, c += 122192928e5;
    var b = ((c & 268435455) * 1e4 + d) % 4294967296;
    i[n++] = b >>> 24 & 255, i[n++] = b >>> 16 & 255, i[n++] = b >>> 8 & 255, i[n++] = b & 255;
    var _ = c / 4294967296 * 1e4 & 268435455;
    i[n++] = _ >>> 8 & 255, i[n++] = _ & 255, i[n++] = _ >>> 24 & 15 | 16, i[n++] = _ >>> 16 & 255, i[n++] = s >>> 8 | 128, i[n++] = s & 255;
    for (var I = 0; I < 6; ++I) i[n + I] = o[I];
    return t || Xr(i)
}
var Uh, ku, vu, Iu, Ph, Ch = yt(() => {
    "use strict";
    Bu();
    Ii();
    vu = 0, Iu = 0;
    Ph = og
});

function sg(r) {
    if (!Zr(r)) throw TypeError("Invalid UUID");
    var t, e = new Uint8Array(16);
    return e[0] = (t = parseInt(r.slice(0, 8), 16)) >>> 24, e[1] = t >>> 16 & 255, e[2] = t >>> 8 & 255, e[3] = t & 255, e[4] = (t = parseInt(r.slice(9, 13), 16)) >>> 8, e[5] = t & 255, e[6] = (t = parseInt(r.slice(14, 18), 16)) >>> 8, e[7] = t & 255, e[8] = (t = parseInt(r.slice(19, 23), 16)) >>> 8, e[9] = t & 255, e[10] = (t = parseInt(r.slice(24, 36), 16)) / 1099511627776 & 255, e[11] = t / 4294967296 & 255, e[12] = t >>> 24 & 255, e[13] = t >>> 16 & 255, e[14] = t >>> 8 & 255, e[15] = t & 255, e
}
var ss, Su = yt(() => {
    "use strict";
    vi();
    ss = sg
});

function ag(r) {
    r = unescape(encodeURIComponent(r));
    for (var t = [], e = 0; e < r.length; ++e) t.push(r.charCodeAt(e));
    return t
}

function as(r, t, e) {
    function n(i, o, s, a) {
        if (typeof i == "string" && (i = ag(i)), typeof o == "string" && (o = ss(o)), o.length !== 16) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var c = new Uint8Array(16 + i.length);
        if (c.set(o), c.set(i, o.length), c = e(c), c[6] = c[6] & 15 | t, c[8] = c[8] & 63 | 128, s) {
            a = a || 0;
            for (var d = 0; d < 16; ++d) s[a + d] = c[d];
            return s
        }
        return Xr(c)
    }
    try {
        n.name = r
    } catch {}
    return n.DNS = ug, n.URL = cg, n
}
var ug, cg, Au = yt(() => {
    "use strict";
    Ii();
    Su();
    ug = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", cg = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"
});

function fg(r) {
    if (typeof r == "string") {
        var t = unescape(encodeURIComponent(r));
        r = new Uint8Array(t.length);
        for (var e = 0; e < t.length; ++e) r[e] = t.charCodeAt(e)
    }
    return hg(lg(dg(r), r.length * 8))
}

function hg(r) {
    for (var t = [], e = r.length * 32, n = "0123456789abcdef", i = 0; i < e; i += 8) {
        var o = r[i >> 5] >>> i % 32 & 255,
            s = parseInt(n.charAt(o >>> 4 & 15) + n.charAt(o & 15), 16);
        t.push(s)
    }
    return t
}

function Fh(r) {
    return (r + 64 >>> 9 << 4) + 14 + 1
}

function lg(r, t) {
    r[t >> 5] |= 128 << t % 32, r[Fh(t) - 1] = t;
    for (var e = 1732584193, n = -271733879, i = -1732584194, o = 271733878, s = 0; s < r.length; s += 16) {
        var a = e,
            c = n,
            d = i,
            g = o;
        e = Re(e, n, i, o, r[s], 7, -680876936), o = Re(o, e, n, i, r[s + 1], 12, -389564586), i = Re(i, o, e, n, r[s + 2], 17, 606105819), n = Re(n, i, o, e, r[s + 3], 22, -1044525330), e = Re(e, n, i, o, r[s + 4], 7, -176418897), o = Re(o, e, n, i, r[s + 5], 12, 1200080426), i = Re(i, o, e, n, r[s + 6], 17, -1473231341), n = Re(n, i, o, e, r[s + 7], 22, -45705983), e = Re(e, n, i, o, r[s + 8], 7, 1770035416), o = Re(o, e, n, i, r[s + 9], 12, -1958414417), i = Re(i, o, e, n, r[s + 10], 17, -42063), n = Re(n, i, o, e, r[s + 11], 22, -1990404162), e = Re(e, n, i, o, r[s + 12], 7, 1804603682), o = Re(o, e, n, i, r[s + 13], 12, -40341101), i = Re(i, o, e, n, r[s + 14], 17, -1502002290), n = Re(n, i, o, e, r[s + 15], 22, 1236535329), e = Le(e, n, i, o, r[s + 1], 5, -165796510), o = Le(o, e, n, i, r[s + 6], 9, -1069501632), i = Le(i, o, e, n, r[s + 11], 14, 643717713), n = Le(n, i, o, e, r[s], 20, -373897302), e = Le(e, n, i, o, r[s + 5], 5, -701558691), o = Le(o, e, n, i, r[s + 10], 9, 38016083), i = Le(i, o, e, n, r[s + 15], 14, -660478335), n = Le(n, i, o, e, r[s + 4], 20, -405537848), e = Le(e, n, i, o, r[s + 9], 5, 568446438), o = Le(o, e, n, i, r[s + 14], 9, -1019803690), i = Le(i, o, e, n, r[s + 3], 14, -187363961), n = Le(n, i, o, e, r[s + 8], 20, 1163531501), e = Le(e, n, i, o, r[s + 13], 5, -1444681467), o = Le(o, e, n, i, r[s + 2], 9, -51403784), i = Le(i, o, e, n, r[s + 7], 14, 1735328473), n = Le(n, i, o, e, r[s + 12], 20, -1926607734), e = Te(e, n, i, o, r[s + 5], 4, -378558), o = Te(o, e, n, i, r[s + 8], 11, -2022574463), i = Te(i, o, e, n, r[s + 11], 16, 1839030562), n = Te(n, i, o, e, r[s + 14], 23, -35309556), e = Te(e, n, i, o, r[s + 1], 4, -1530992060), o = Te(o, e, n, i, r[s + 4], 11, 1272893353), i = Te(i, o, e, n, r[s + 7], 16, -155497632), n = Te(n, i, o, e, r[s + 10], 23, -1094730640), e = Te(e, n, i, o, r[s + 13], 4, 681279174), o = Te(o, e, n, i, r[s], 11, -358537222), i = Te(i, o, e, n, r[s + 3], 16, -722521979), n = Te(n, i, o, e, r[s + 6], 23, 76029189), e = Te(e, n, i, o, r[s + 9], 4, -640364487), o = Te(o, e, n, i, r[s + 12], 11, -421815835), i = Te(i, o, e, n, r[s + 15], 16, 530742520), n = Te(n, i, o, e, r[s + 2], 23, -995338651), e = Me(e, n, i, o, r[s], 6, -198630844), o = Me(o, e, n, i, r[s + 7], 10, 1126891415), i = Me(i, o, e, n, r[s + 14], 15, -1416354905), n = Me(n, i, o, e, r[s + 5], 21, -57434055), e = Me(e, n, i, o, r[s + 12], 6, 1700485571), o = Me(o, e, n, i, r[s + 3], 10, -1894986606), i = Me(i, o, e, n, r[s + 10], 15, -1051523), n = Me(n, i, o, e, r[s + 1], 21, -2054922799), e = Me(e, n, i, o, r[s + 8], 6, 1873313359), o = Me(o, e, n, i, r[s + 15], 10, -30611744), i = Me(i, o, e, n, r[s + 6], 15, -1560198380), n = Me(n, i, o, e, r[s + 13], 21, 1309151649), e = Me(e, n, i, o, r[s + 4], 6, -145523070), o = Me(o, e, n, i, r[s + 11], 10, -1120210379), i = Me(i, o, e, n, r[s + 2], 15, 718787259), n = Me(n, i, o, e, r[s + 9], 21, -343485551), e = Jr(e, a), n = Jr(n, c), i = Jr(i, d), o = Jr(o, g)
    }
    return [e, n, i, o]
}

function dg(r) {
    if (r.length === 0) return [];
    for (var t = r.length * 8, e = new Uint32Array(Fh(t)), n = 0; n < t; n += 8) e[n >> 5] |= (r[n / 8] & 255) << n % 32;
    return e
}

function Jr(r, t) {
    var e = (r & 65535) + (t & 65535),
        n = (r >> 16) + (t >> 16) + (e >> 16);
    return n << 16 | e & 65535
}

function pg(r, t) {
    return r << t | r >>> 32 - t
}

function us(r, t, e, n, i, o) {
    return Jr(pg(Jr(Jr(t, r), Jr(n, o)), i), e)
}

function Re(r, t, e, n, i, o, s) {
    return us(t & e | ~t & n, r, t, i, o, s)
}

function Le(r, t, e, n, i, o, s) {
    return us(t & n | e & ~n, r, t, i, o, s)
}

function Te(r, t, e, n, i, o, s) {
    return us(t ^ e ^ n, r, t, i, o, s)
}

function Me(r, t, e, n, i, o, s) {
    return us(e ^ (t | ~n), r, t, i, o, s)
}
var Oh, Nh = yt(() => {
    "use strict";
    Oh = fg
});
var yg, Dh, qh = yt(() => {
    "use strict";
    Au();
    Nh();
    yg = as("v3", 48, Oh), Dh = yg
});

function gg(r, t, e) {
    r = r || {};
    var n = r.random || (r.rng || ki)();
    if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, t) {
        e = e || 0;
        for (var i = 0; i < 16; ++i) t[e + i] = n[i];
        return t
    }
    return Xr(n)
}
var zh, Kh = yt(() => {
    "use strict";
    Bu();
    Ii();
    zh = gg
});

function mg(r, t, e, n) {
    switch (r) {
        case 0:
            return t & e ^ ~t & n;
        case 1:
            return t ^ e ^ n;
        case 2:
            return t & e ^ t & n ^ e & n;
        case 3:
            return t ^ e ^ n
    }
}

function _u(r, t) {
    return r << t | r >>> 32 - t
}

function wg(r) {
    var t = [1518500249, 1859775393, 2400959708, 3395469782],
        e = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if (typeof r == "string") {
        var n = unescape(encodeURIComponent(r));
        r = [];
        for (var i = 0; i < n.length; ++i) r.push(n.charCodeAt(i))
    } else Array.isArray(r) || (r = Array.prototype.slice.call(r));
    r.push(128);
    for (var o = r.length / 4 + 2, s = Math.ceil(o / 16), a = new Array(s), c = 0; c < s; ++c) {
        for (var d = new Uint32Array(16), g = 0; g < 16; ++g) d[g] = r[c * 64 + g * 4] << 24 | r[c * 64 + g * 4 + 1] << 16 | r[c * 64 + g * 4 + 2] << 8 | r[c * 64 + g * 4 + 3];
        a[c] = d
    }
    a[s - 1][14] = (r.length - 1) * 8 / Math.pow(2, 32), a[s - 1][14] = Math.floor(a[s - 1][14]), a[s - 1][15] = (r.length - 1) * 8 & 4294967295;
    for (var b = 0; b < s; ++b) {
        for (var _ = new Uint32Array(80), I = 0; I < 16; ++I) _[I] = a[b][I];
        for (var S = 16; S < 80; ++S) _[S] = _u(_[S - 3] ^ _[S - 8] ^ _[S - 14] ^ _[S - 16], 1);
        for (var v = e[0], A = e[1], T = e[2], z = e[3], N = e[4], G = 0; G < 80; ++G) {
            var H = Math.floor(G / 20),
                W = _u(v, 5) + mg(H, A, T, z) + N + t[H] + _[G] >>> 0;
            N = z, z = T, T = _u(A, 30) >>> 0, A = v, v = W
        }
        e[0] = e[0] + v >>> 0, e[1] = e[1] + A >>> 0, e[2] = e[2] + T >>> 0, e[3] = e[3] + z >>> 0, e[4] = e[4] + N >>> 0
    }
    return [e[0] >> 24 & 255, e[0] >> 16 & 255, e[0] >> 8 & 255, e[0] & 255, e[1] >> 24 & 255, e[1] >> 16 & 255, e[1] >> 8 & 255, e[1] & 255, e[2] >> 24 & 255, e[2] >> 16 & 255, e[2] >> 8 & 255, e[2] & 255, e[3] >> 24 & 255, e[3] >> 16 & 255, e[3] >> 8 & 255, e[3] & 255, e[4] >> 24 & 255, e[4] >> 16 & 255, e[4] >> 8 & 255, e[4] & 255]
}
var Wh, Hh = yt(() => {
    "use strict";
    Wh = wg
});
var bg, $h, Vh = yt(() => {
    "use strict";
    Au();
    Hh();
    bg = as("v5", 80, Wh), $h = bg
});
var Gh, jh = yt(() => {
    "use strict";
    Gh = "00000000-0000-0000-0000-000000000000"
});

function xg(r) {
    if (!Zr(r)) throw TypeError("Invalid UUID");
    return parseInt(r.substr(14, 1), 16)
}
var Yh, Zh = yt(() => {
    "use strict";
    vi();
    Yh = xg
});
var Ru = {};
io(Ru, {
    NIL: () => Gh,
    parse: () => ss,
    stringify: () => Xr,
    v1: () => Ph,
    v3: () => Dh,
    v4: () => zh,
    v5: () => $h,
    validate: () => Zr,
    version: () => Yh
});
var Lu = yt(() => {
    "use strict";
    Ch();
    qh();
    Kh();
    Vh();
    jh();
    Zh();
    vi();
    Ii();
    Su()
});
var Jh = wt((Ux, Xh) => {
    "use strict";
    var Eg = (Lu(), ta(Ru)).v4,
        Bg = function(r, t, e, n) {
            if (typeof r != "string") throw new TypeError(r + " must be a string");
            n = n || {};
            let i = typeof n.version == "number" ? n.version : 2;
            if (i !== 1 && i !== 2) throw new TypeError(i + " must be 1 or 2");
            let o = {
                method: r
            };
            if (i === 2 && (o.jsonrpc = "2.0"), t) {
                if (typeof t != "object" && !Array.isArray(t)) throw new TypeError(t + " must be an object, array or omitted");
                o.params = t
            }
            if (typeof e > "u") {
                let s = typeof n.generator == "function" ? n.generator : function() {
                    return Eg()
                };
                o.id = s(o, n)
            } else i === 2 && e === null ? n.notificationIdNull && (o.id = null) : o.id = e;
            return o
        };
    Xh.exports = Bg
});
var tl = wt((Px, Qh) => {
    "use strict";
    var kg = (Lu(), ta(Ru)).v4,
        vg = Jh(),
        Si = function(r, t) {
            if (!(this instanceof Si)) return new Si(r, t);
            t || (t = {}), this.options = {
                reviver: typeof t.reviver < "u" ? t.reviver : null,
                replacer: typeof t.replacer < "u" ? t.replacer : null,
                generator: typeof t.generator < "u" ? t.generator : function() {
                    return kg()
                },
                version: typeof t.version < "u" ? t.version : 2,
                notificationIdNull: typeof t.notificationIdNull == "boolean" ? t.notificationIdNull : !1
            }, this.callServer = r
        };
    Qh.exports = Si;
    Si.prototype.request = function(r, t, e, n) {
        let i = this,
            o = null,
            s = Array.isArray(r) && typeof t == "function";
        if (this.options.version === 1 && s) throw new TypeError("JSON-RPC 1.0 does not support batching");
        if (s || !s && r && typeof r == "object" && typeof t == "function") n = t, o = r;
        else {
            typeof e == "function" && (n = e, e = void 0);
            let d = typeof n == "function";
            try {
                o = vg(r, t, e, {
                    generator: this.options.generator,
                    version: this.options.version,
                    notificationIdNull: this.options.notificationIdNull
                })
            } catch (g) {
                if (d) return n(g);
                throw g
            }
            if (!d) return o
        }
        let c;
        try {
            c = JSON.stringify(o, this.options.replacer)
        } catch (d) {
            return n(d)
        }
        return this.callServer(c, function(d, g) {
            i._parseResponse(d, g, n)
        }), o
    };
    Si.prototype._parseResponse = function(r, t, e) {
        if (r) {
            e(r);
            return
        }
        if (!t) return e();
        let n;
        try {
            n = JSON.parse(t, this.options.reviver)
        } catch (i) {
            return e(i)
        }
        if (e.length === 3)
            if (Array.isArray(n)) {
                let i = function(s) {
                        return typeof s.error < "u"
                    },
                    o = function(s) {
                        return !i(s)
                    };
                return e(null, n.filter(i), n.filter(o))
            } else return e(null, n.error, n.result);
        e(null, n)
    }
});
var cs = wt((Cx, Ai) => {
    "use strict";

    function Ig(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    }
    Ai.exports = Ig, Ai.exports.__esModule = !0, Ai.exports.default = Ai.exports
});
var Zn = wt((Fx, Sr) => {
    "use strict";

    function Tu(r) {
        "@babel/helpers - typeof";
        return Sr.exports = Tu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
            return typeof t
        } : function(t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, Sr.exports.__esModule = !0, Sr.exports.default = Sr.exports, Tu(r)
    }
    Sr.exports = Tu, Sr.exports.__esModule = !0, Sr.exports.default = Sr.exports
});
var nl = wt((Ox, Ar) => {
    "use strict";
    var el = Zn().default;

    function rl() {
        "use strict";
        Ar.exports = rl = function() {
            return t
        }, Ar.exports.__esModule = !0, Ar.exports.default = Ar.exports;
        var r, t = {},
            e = Object.prototype,
            n = e.hasOwnProperty,
            i = Object.defineProperty || function(l, p, y) {
                l[p] = y.value
            },
            o = typeof Symbol == "function" ? Symbol : {},
            s = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag";

        function d(l, p, y) {
            return Object.defineProperty(l, p, {
                value: y,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), l[p]
        }
        try {
            d({}, "")
        } catch {
            d = function(y, w, E) {
                return y[w] = E
            }
        }

        function g(l, p, y, w) {
            var E = p && p.prototype instanceof T ? p : T,
                m = Object.create(E.prototype),
                f = new u(w || []);
            return i(m, "_invoke", {
                value: dt(l, y, f)
            }), m
        }

        function b(l, p, y) {
            try {
                return {
                    type: "normal",
                    arg: l.call(p, y)
                }
            } catch (w) {
                return {
                    type: "throw",
                    arg: w
                }
            }
        }
        t.wrap = g;
        var _ = "suspendedStart",
            I = "suspendedYield",
            S = "executing",
            v = "completed",
            A = {};

        function T() {}

        function z() {}

        function N() {}
        var G = {};
        d(G, s, function() {
            return this
        });
        var H = Object.getPrototypeOf,
            W = H && H(H(h([])));
        W && W !== e && n.call(W, s) && (G = W);
        var J = N.prototype = T.prototype = Object.create(G);

        function et(l) {
            ["next", "throw", "return"].forEach(function(p) {
                d(l, p, function(y) {
                    return this._invoke(p, y)
                })
            })
        }

        function mt(l, p) {
            function y(E, m, f, x) {
                var F = b(l[E], l, m);
                if (F.type !== "throw") {
                    var K = F.arg,
                        q = K.value;
                    return q && el(q) == "object" && n.call(q, "__await") ? p.resolve(q.__await).then(function(V) {
                        y("next", V, f, x)
                    }, function(V) {
                        y("throw", V, f, x)
                    }) : p.resolve(q).then(function(V) {
                        K.value = V, f(K)
                    }, function(V) {
                        return y("throw", V, f, x)
                    })
                }
                x(F.arg)
            }
            var w;
            i(this, "_invoke", {
                value: function(m, f) {
                    function x() {
                        return new p(function(F, K) {
                            y(m, f, F, K)
                        })
                    }
                    return w = w ? w.then(x, x) : x()
                }
            })
        }

        function dt(l, p, y) {
            var w = _;
            return function(E, m) {
                if (w === S) throw new Error("Generator is already running");
                if (w === v) {
                    if (E === "throw") throw m;
                    return {
                        value: r,
                        done: !0
                    }
                }
                for (y.method = E, y.arg = m;;) {
                    var f = y.delegate;
                    if (f) {
                        var x = Q(f, y);
                        if (x) {
                            if (x === A) continue;
                            return x
                        }
                    }
                    if (y.method === "next") y.sent = y._sent = y.arg;
                    else if (y.method === "throw") {
                        if (w === _) throw w = v, y.arg;
                        y.dispatchException(y.arg)
                    } else y.method === "return" && y.abrupt("return", y.arg);
                    w = S;
                    var F = b(l, p, y);
                    if (F.type === "normal") {
                        if (w = y.done ? v : I, F.arg === A) continue;
                        return {
                            value: F.arg,
                            done: y.done
                        }
                    }
                    F.type === "throw" && (w = v, y.method = "throw", y.arg = F.arg)
                }
            }
        }

        function Q(l, p) {
            var y = p.method,
                w = l.iterator[y];
            if (w === r) return p.delegate = null, y === "throw" && l.iterator.return && (p.method = "return", p.arg = r, Q(l, p), p.method === "throw") || y !== "return" && (p.method = "throw", p.arg = new TypeError("The iterator does not provide a '" + y + "' method")), A;
            var E = b(w, l.iterator, p.arg);
            if (E.type === "throw") return p.method = "throw", p.arg = E.arg, p.delegate = null, A;
            var m = E.arg;
            return m ? m.done ? (p[l.resultName] = m.value, p.next = l.nextLoc, p.method !== "return" && (p.method = "next", p.arg = r), p.delegate = null, A) : m : (p.method = "throw", p.arg = new TypeError("iterator result is not an object"), p.delegate = null, A)
        }

        function Bt(l) {
            var p = {
                tryLoc: l[0]
            };
            1 in l && (p.catchLoc = l[1]), 2 in l && (p.finallyLoc = l[2], p.afterLoc = l[3]), this.tryEntries.push(p)
        }

        function B(l) {
            var p = l.completion || {};
            p.type = "normal", delete p.arg, l.completion = p
        }

        function u(l) {
            this.tryEntries = [{
                tryLoc: "root"
            }], l.forEach(Bt, this), this.reset(!0)
        }

        function h(l) {
            if (l || l === "") {
                var p = l[s];
                if (p) return p.call(l);
                if (typeof l.next == "function") return l;
                if (!isNaN(l.length)) {
                    var y = -1,
                        w = function E() {
                            for (; ++y < l.length;)
                                if (n.call(l, y)) return E.value = l[y], E.done = !1, E;
                            return E.value = r, E.done = !0, E
                        };
                    return w.next = w
                }
            }
            throw new TypeError(el(l) + " is not iterable")
        }
        return z.prototype = N, i(J, "constructor", {
            value: N,
            configurable: !0
        }), i(N, "constructor", {
            value: z,
            configurable: !0
        }), z.displayName = d(N, c, "GeneratorFunction"), t.isGeneratorFunction = function(l) {
            var p = typeof l == "function" && l.constructor;
            return !!p && (p === z || (p.displayName || p.name) === "GeneratorFunction")
        }, t.mark = function(l) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(l, N) : (l.__proto__ = N, d(l, c, "GeneratorFunction")), l.prototype = Object.create(J), l
        }, t.awrap = function(l) {
            return {
                __await: l
            }
        }, et(mt.prototype), d(mt.prototype, a, function() {
            return this
        }), t.AsyncIterator = mt, t.async = function(l, p, y, w, E) {
            E === void 0 && (E = Promise);
            var m = new mt(g(l, p, y, w), E);
            return t.isGeneratorFunction(p) ? m : m.next().then(function(f) {
                return f.done ? f.value : m.next()
            })
        }, et(J), d(J, c, "Generator"), d(J, s, function() {
            return this
        }), d(J, "toString", function() {
            return "[object Generator]"
        }), t.keys = function(l) {
            var p = Object(l),
                y = [];
            for (var w in p) y.push(w);
            return y.reverse(),
                function E() {
                    for (; y.length;) {
                        var m = y.pop();
                        if (m in p) return E.value = m, E.done = !1, E
                    }
                    return E.done = !0, E
                }
        }, t.values = h, u.prototype = {
            constructor: u,
            reset: function(p) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(B), !p)
                    for (var y in this) y.charAt(0) === "t" && n.call(this, y) && !isNaN(+y.slice(1)) && (this[y] = r)
            },
            stop: function() {
                this.done = !0;
                var p = this.tryEntries[0].completion;
                if (p.type === "throw") throw p.arg;
                return this.rval
            },
            dispatchException: function(p) {
                if (this.done) throw p;
                var y = this;

                function w(K, q) {
                    return f.type = "throw", f.arg = p, y.next = K, q && (y.method = "next", y.arg = r), !!q
                }
                for (var E = this.tryEntries.length - 1; E >= 0; --E) {
                    var m = this.tryEntries[E],
                        f = m.completion;
                    if (m.tryLoc === "root") return w("end");
                    if (m.tryLoc <= this.prev) {
                        var x = n.call(m, "catchLoc"),
                            F = n.call(m, "finallyLoc");
                        if (x && F) {
                            if (this.prev < m.catchLoc) return w(m.catchLoc, !0);
                            if (this.prev < m.finallyLoc) return w(m.finallyLoc)
                        } else if (x) {
                            if (this.prev < m.catchLoc) return w(m.catchLoc, !0)
                        } else {
                            if (!F) throw new Error("try statement without catch or finally");
                            if (this.prev < m.finallyLoc) return w(m.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(p, y) {
                for (var w = this.tryEntries.length - 1; w >= 0; --w) {
                    var E = this.tryEntries[w];
                    if (E.tryLoc <= this.prev && n.call(E, "finallyLoc") && this.prev < E.finallyLoc) {
                        var m = E;
                        break
                    }
                }
                m && (p === "break" || p === "continue") && m.tryLoc <= y && y <= m.finallyLoc && (m = null);
                var f = m ? m.completion : {};
                return f.type = p, f.arg = y, m ? (this.method = "next", this.next = m.finallyLoc, A) : this.complete(f)
            },
            complete: function(p, y) {
                if (p.type === "throw") throw p.arg;
                return p.type === "break" || p.type === "continue" ? this.next = p.arg : p.type === "return" ? (this.rval = this.arg = p.arg, this.method = "return", this.next = "end") : p.type === "normal" && y && (this.next = y), A
            },
            finish: function(p) {
                for (var y = this.tryEntries.length - 1; y >= 0; --y) {
                    var w = this.tryEntries[y];
                    if (w.finallyLoc === p) return this.complete(w.completion, w.afterLoc), B(w), A
                }
            },
            catch: function(p) {
                for (var y = this.tryEntries.length - 1; y >= 0; --y) {
                    var w = this.tryEntries[y];
                    if (w.tryLoc === p) {
                        var E = w.completion;
                        if (E.type === "throw") {
                            var m = E.arg;
                            B(w)
                        }
                        return m
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(p, y, w) {
                return this.delegate = {
                    iterator: h(p),
                    resultName: y,
                    nextLoc: w
                }, this.method === "next" && (this.arg = r), A
            }
        }, t
    }
    Ar.exports = rl, Ar.exports.__esModule = !0, Ar.exports.default = Ar.exports
});
var ol = wt((Nx, il) => {
    "use strict";
    var fs = nl()();
    il.exports = fs;
    try {
        regeneratorRuntime = fs
    } catch {
        typeof globalThis == "object" ? globalThis.regeneratorRuntime = fs : Function("r", "regeneratorRuntime = r")(fs)
    }
});
var al = wt((Dx, _i) => {
    "use strict";

    function sl(r, t, e, n, i, o, s) {
        try {
            var a = r[o](s),
                c = a.value
        } catch (d) {
            e(d);
            return
        }
        a.done ? t(c) : Promise.resolve(c).then(n, i)
    }

    function Sg(r) {
        return function() {
            var t = this,
                e = arguments;
            return new Promise(function(n, i) {
                var o = r.apply(t, e);

                function s(c) {
                    sl(o, n, i, s, a, "next", c)
                }

                function a(c) {
                    sl(o, n, i, s, a, "throw", c)
                }
                s(void 0)
            })
        }
    }
    _i.exports = Sg, _i.exports.__esModule = !0, _i.exports.default = _i.exports
});
var hs = wt((qx, Ri) => {
    "use strict";

    function Ag(r, t) {
        if (!(r instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Ri.exports = Ag, Ri.exports.__esModule = !0, Ri.exports.default = Ri.exports
});
var cl = wt((zx, Li) => {
    "use strict";
    var ul = Zn().default;

    function _g(r, t) {
        if (ul(r) != "object" || !r) return r;
        var e = r[Symbol.toPrimitive];
        if (e !== void 0) {
            var n = e.call(r, t || "default");
            if (ul(n) != "object") return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (t === "string" ? String : Number)(r)
    }
    Li.exports = _g, Li.exports.__esModule = !0, Li.exports.default = Li.exports
});
var fl = wt((Kx, Ti) => {
    "use strict";
    var Rg = Zn().default,
        Lg = cl();

    function Tg(r) {
        var t = Lg(r, "string");
        return Rg(t) == "symbol" ? t : String(t)
    }
    Ti.exports = Tg, Ti.exports.__esModule = !0, Ti.exports.default = Ti.exports
});
var ls = wt((Wx, Mi) => {
    "use strict";
    var Mg = fl();

    function hl(r, t) {
        for (var e = 0; e < t.length; e++) {
            var n = t[e];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, Mg(n.key), n)
        }
    }

    function Ug(r, t, e) {
        return t && hl(r.prototype, t), e && hl(r, e), Object.defineProperty(r, "prototype", {
            writable: !1
        }), r
    }
    Mi.exports = Ug, Mi.exports.__esModule = !0, Mi.exports.default = Mi.exports
});
var ll = wt((Hx, _r) => {
    "use strict";

    function Mu(r, t) {
        return _r.exports = Mu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i, n
        }, _r.exports.__esModule = !0, _r.exports.default = _r.exports, Mu(r, t)
    }
    _r.exports = Mu, _r.exports.__esModule = !0, _r.exports.default = _r.exports
});
var Uu = wt(($x, Ui) => {
    "use strict";
    var Pg = ll();

    function Cg(r, t) {
        if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
        r.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: r,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(r, "prototype", {
            writable: !1
        }), t && Pg(r, t)
    }
    Ui.exports = Cg, Ui.exports.__esModule = !0, Ui.exports.default = Ui.exports
});
var dl = wt((Vx, Pi) => {
    "use strict";

    function Fg(r) {
        if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return r
    }
    Pi.exports = Fg, Pi.exports.__esModule = !0, Pi.exports.default = Pi.exports
});
var Pu = wt((Gx, Ci) => {
    "use strict";
    var Og = Zn().default,
        Ng = dl();

    function Dg(r, t) {
        if (t && (Og(t) === "object" || typeof t == "function")) return t;
        if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
        return Ng(r)
    }
    Ci.exports = Dg, Ci.exports.__esModule = !0, Ci.exports.default = Ci.exports
});
var Fu = wt((jx, Rr) => {
    "use strict";

    function Cu(r) {
        return Rr.exports = Cu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, Rr.exports.__esModule = !0, Rr.exports.default = Rr.exports, Cu(r)
    }
    Rr.exports = Cu, Rr.exports.__esModule = !0, Rr.exports.default = Rr.exports
});
var Nu = wt((Yx, Ou) => {
    "use strict";
    var qg = Object.prototype.hasOwnProperty,
        Fe = "~";

    function Fi() {}
    Object.create && (Fi.prototype = Object.create(null), new Fi().__proto__ || (Fe = !1));

    function zg(r, t, e) {
        this.fn = r, this.context = t, this.once = e || !1
    }

    function pl(r, t, e, n, i) {
        if (typeof e != "function") throw new TypeError("The listener must be a function");
        var o = new zg(e, n || r, i),
            s = Fe ? Fe + t : t;
        return r._events[s] ? r._events[s].fn ? r._events[s] = [r._events[s], o] : r._events[s].push(o) : (r._events[s] = o, r._eventsCount++), r
    }

    function ds(r, t) {
        --r._eventsCount === 0 ? r._events = new Fi : delete r._events[t]
    }

    function Ue() {
        this._events = new Fi, this._eventsCount = 0
    }
    Ue.prototype.eventNames = function() {
        var t = [],
            e, n;
        if (this._eventsCount === 0) return t;
        for (n in e = this._events) qg.call(e, n) && t.push(Fe ? n.slice(1) : n);
        return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
    };
    Ue.prototype.listeners = function(t) {
        var e = Fe ? Fe + t : t,
            n = this._events[e];
        if (!n) return [];
        if (n.fn) return [n.fn];
        for (var i = 0, o = n.length, s = new Array(o); i < o; i++) s[i] = n[i].fn;
        return s
    };
    Ue.prototype.listenerCount = function(t) {
        var e = Fe ? Fe + t : t,
            n = this._events[e];
        return n ? n.fn ? 1 : n.length : 0
    };
    Ue.prototype.emit = function(t, e, n, i, o, s) {
        var a = Fe ? Fe + t : t;
        if (!this._events[a]) return !1;
        var c = this._events[a],
            d = arguments.length,
            g, b;
        if (c.fn) {
            switch (c.once && this.removeListener(t, c.fn, void 0, !0), d) {
                case 1:
                    return c.fn.call(c.context), !0;
                case 2:
                    return c.fn.call(c.context, e), !0;
                case 3:
                    return c.fn.call(c.context, e, n), !0;
                case 4:
                    return c.fn.call(c.context, e, n, i), !0;
                case 5:
                    return c.fn.call(c.context, e, n, i, o), !0;
                case 6:
                    return c.fn.call(c.context, e, n, i, o, s), !0
            }
            for (b = 1, g = new Array(d - 1); b < d; b++) g[b - 1] = arguments[b];
            c.fn.apply(c.context, g)
        } else {
            var _ = c.length,
                I;
            for (b = 0; b < _; b++) switch (c[b].once && this.removeListener(t, c[b].fn, void 0, !0), d) {
                case 1:
                    c[b].fn.call(c[b].context);
                    break;
                case 2:
                    c[b].fn.call(c[b].context, e);
                    break;
                case 3:
                    c[b].fn.call(c[b].context, e, n);
                    break;
                case 4:
                    c[b].fn.call(c[b].context, e, n, i);
                    break;
                default:
                    if (!g)
                        for (I = 1, g = new Array(d - 1); I < d; I++) g[I - 1] = arguments[I];
                    c[b].fn.apply(c[b].context, g)
            }
        }
        return !0
    };
    Ue.prototype.on = function(t, e, n) {
        return pl(this, t, e, n, !1)
    };
    Ue.prototype.once = function(t, e, n) {
        return pl(this, t, e, n, !0)
    };
    Ue.prototype.removeListener = function(t, e, n, i) {
        var o = Fe ? Fe + t : t;
        if (!this._events[o]) return this;
        if (!e) return ds(this, o), this;
        var s = this._events[o];
        if (s.fn) s.fn === e && (!i || s.once) && (!n || s.context === n) && ds(this, o);
        else {
            for (var a = 0, c = [], d = s.length; a < d; a++)(s[a].fn !== e || i && !s[a].once || n && s[a].context !== n) && c.push(s[a]);
            c.length ? this._events[o] = c.length === 1 ? c[0] : c : ds(this, o)
        }
        return this
    };
    Ue.prototype.removeAllListeners = function(t) {
        var e;
        return t ? (e = Fe ? Fe + t : t, this._events[e] && ds(this, e)) : (this._events = new Fi, this._eventsCount = 0), this
    };
    Ue.prototype.off = Ue.prototype.removeListener;
    Ue.prototype.addListener = Ue.prototype.on;
    Ue.prefixed = Fe;
    Ue.EventEmitter = Ue;
    typeof Ou < "u" && (Ou.exports = Ue)
});
var gl = wt(Oi => {
    "use strict";
    var yl = cs();
    Object.defineProperty(Oi, "__esModule", {
        value: !0
    });
    Oi.DefaultDataPack = void 0;
    Oi.createError = Vg;
    var Kg = yl(hs()),
        Wg = yl(ls()),
        Hg = new Map([
            [-32e3, "Event not provided"],
            [-32600, "Invalid Request"],
            [-32601, "Method not found"],
            [-32602, "Invalid params"],
            [-32603, "Internal error"],
            [-32604, "Params not found"],
            [-32605, "Method forbidden"],
            [-32606, "Event forbidden"],
            [-32700, "Parse error"]
        ]),
        $g = function() {
            function r() {
                (0, Kg.default)(this, r)
            }
            return (0, Wg.default)(r, [{
                key: "encode",
                value: function(e) {
                    return JSON.stringify(e)
                }
            }, {
                key: "decode",
                value: function(e) {
                    return JSON.parse(e)
                }
            }]), r
        }();
    Oi.DefaultDataPack = $g;

    function Vg(r, t) {
        var e = {
            code: r,
            message: Hg.get(r) || "Internal Server Error"
        };
        return t && (e.data = t), e
    }
});
var wl = wt(ys => {
    "use strict";
    var tn = cs();
    Object.defineProperty(ys, "__esModule", {
        value: !0
    });
    ys.default = void 0;
    var Qr = tn(ol()),
        ps = tn(al()),
        Gg = tn(Zn()),
        jg = tn(hs()),
        Yg = tn(ls()),
        Zg = tn(Uu()),
        Xg = tn(Pu()),
        ml = tn(Fu()),
        Jg = Nu(),
        Qg = gl();

    function tm(r) {
        var t = em();
        return function() {
            var n = (0, ml.default)(r),
                i;
            if (t) {
                var o = (0, ml.default)(this).constructor;
                i = Reflect.construct(n, arguments, o)
            } else i = n.apply(this, arguments);
            return (0, Xg.default)(this, i)
        }
    }

    function em() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }
    var rm = function(r, t) {
            var e = {};
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && t.indexOf(n) < 0 && (e[n] = r[n]);
            if (r != null && typeof Object.getOwnPropertySymbols == "function")
                for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (e[n[i]] = r[n[i]]);
            return e
        },
        nm = function(r) {
            (0, Zg.default)(e, r);
            var t = tm(e);

            function e(n) {
                var i, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "ws://localhost:8080",
                    s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                    a = arguments.length > 3 ? arguments[3] : void 0,
                    c = arguments.length > 4 ? arguments[4] : void 0;
                (0, jg.default)(this, e);
                var d = s.autoconnect,
                    g = d === void 0 ? !0 : d,
                    b = s.reconnect,
                    _ = b === void 0 ? !0 : b,
                    I = s.reconnect_interval,
                    S = I === void 0 ? 1e3 : I,
                    v = s.max_reconnects,
                    A = v === void 0 ? 5 : v,
                    T = rm(s, ["autoconnect", "reconnect", "reconnect_interval", "max_reconnects"]);
                return i = t.call(this), i.webSocketFactory = n, i.queue = {}, i.rpc_id = 0, i.address = o, i.autoconnect = g, i.ready = !1, i.reconnect = _, i.reconnect_timer_id = void 0, i.reconnect_interval = S, i.max_reconnects = A, i.rest_options = T, i.current_reconnects = 0, i.generate_request_id = a || function() {
                    return ++i.rpc_id
                }, c ? i.dataPack = c : i.dataPack = new Qg.DefaultDataPack, i.autoconnect && i._connect(i.address, Object.assign({
                    autoconnect: i.autoconnect,
                    reconnect: i.reconnect,
                    reconnect_interval: i.reconnect_interval,
                    max_reconnects: i.max_reconnects
                }, i.rest_options)), i
            }
            return (0, Yg.default)(e, [{
                key: "connect",
                value: function() {
                    this.socket || this._connect(this.address, Object.assign({
                        autoconnect: this.autoconnect,
                        reconnect: this.reconnect,
                        reconnect_interval: this.reconnect_interval,
                        max_reconnects: this.max_reconnects
                    }, this.rest_options))
                }
            }, {
                key: "call",
                value: function(i, o, s, a) {
                    var c = this;
                    return !a && (0, Gg.default)(s) === "object" && (a = s, s = null), new Promise(function(d, g) {
                        if (!c.ready) return g(new Error("socket not ready"));
                        var b = c.generate_request_id(i, o),
                            _ = {
                                jsonrpc: "2.0",
                                method: i,
                                params: o || void 0,
                                id: b
                            };
                        c.socket.send(c.dataPack.encode(_), a, function(I) {
                            if (I) return g(I);
                            c.queue[b] = {
                                promise: [d, g]
                            }, s && (c.queue[b].timeout = setTimeout(function() {
                                delete c.queue[b], g(new Error("reply timeout"))
                            }, s))
                        })
                    })
                }
            }, {
                key: "login",
                value: function() {
                    var n = (0, ps.default)(Qr.default.mark(function o(s) {
                        var a;
                        return Qr.default.wrap(function(d) {
                            for (;;) switch (d.prev = d.next) {
                                case 0:
                                    return d.next = 2, this.call("rpc.login", s);
                                case 2:
                                    if (a = d.sent, a) {
                                        d.next = 5;
                                        break
                                    }
                                    throw new Error("authentication failed");
                                case 5:
                                    return d.abrupt("return", a);
                                case 6:
                                case "end":
                                    return d.stop()
                            }
                        }, o, this)
                    }));

                    function i(o) {
                        return n.apply(this, arguments)
                    }
                    return i
                }()
            }, {
                key: "listMethods",
                value: function() {
                    var n = (0, ps.default)(Qr.default.mark(function o() {
                        return Qr.default.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return a.next = 2, this.call("__listMethods");
                                case 2:
                                    return a.abrupt("return", a.sent);
                                case 3:
                                case "end":
                                    return a.stop()
                            }
                        }, o, this)
                    }));

                    function i() {
                        return n.apply(this, arguments)
                    }
                    return i
                }()
            }, {
                key: "notify",
                value: function(i, o) {
                    var s = this;
                    return new Promise(function(a, c) {
                        if (!s.ready) return c(new Error("socket not ready"));
                        var d = {
                            jsonrpc: "2.0",
                            method: i,
                            params: o
                        };
                        s.socket.send(s.dataPack.encode(d), function(g) {
                            if (g) return c(g);
                            a()
                        })
                    })
                }
            }, {
                key: "subscribe",
                value: function() {
                    var n = (0, ps.default)(Qr.default.mark(function o(s) {
                        var a;
                        return Qr.default.wrap(function(d) {
                            for (;;) switch (d.prev = d.next) {
                                case 0:
                                    return typeof s == "string" && (s = [s]), d.next = 3, this.call("rpc.on", s);
                                case 3:
                                    if (a = d.sent, !(typeof s == "string" && a[s] !== "ok")) {
                                        d.next = 6;
                                        break
                                    }
                                    throw new Error("Failed subscribing to an event '" + s + "' with: " + a[s]);
                                case 6:
                                    return d.abrupt("return", a);
                                case 7:
                                case "end":
                                    return d.stop()
                            }
                        }, o, this)
                    }));

                    function i(o) {
                        return n.apply(this, arguments)
                    }
                    return i
                }()
            }, {
                key: "unsubscribe",
                value: function() {
                    var n = (0, ps.default)(Qr.default.mark(function o(s) {
                        var a;
                        return Qr.default.wrap(function(d) {
                            for (;;) switch (d.prev = d.next) {
                                case 0:
                                    return typeof s == "string" && (s = [s]), d.next = 3, this.call("rpc.off", s);
                                case 3:
                                    if (a = d.sent, !(typeof s == "string" && a[s] !== "ok")) {
                                        d.next = 6;
                                        break
                                    }
                                    throw new Error("Failed unsubscribing from an event with: " + a);
                                case 6:
                                    return d.abrupt("return", a);
                                case 7:
                                case "end":
                                    return d.stop()
                            }
                        }, o, this)
                    }));

                    function i(o) {
                        return n.apply(this, arguments)
                    }
                    return i
                }()
            }, {
                key: "close",
                value: function(i, o) {
                    this.socket.close(i || 1e3, o)
                }
            }, {
                key: "_connect",
                value: function(i, o) {
                    var s = this;
                    clearTimeout(this.reconnect_timer_id), this.socket = this.webSocketFactory(i, o), this.socket.addEventListener("open", function() {
                        s.ready = !0, s.emit("open"), s.current_reconnects = 0
                    }), this.socket.addEventListener("message", function(a) {
                        var c = a.data;
                        c instanceof ArrayBuffer && (c = Buffer.from(c).toString());
                        try {
                            c = s.dataPack.decode(c)
                        } catch {
                            return
                        }
                        if (c.notification && s.listeners(c.notification).length) {
                            if (!Object.keys(c.params).length) return s.emit(c.notification);
                            var d = [c.notification];
                            if (c.params.constructor === Object) d.push(c.params);
                            else
                                for (var g = 0; g < c.params.length; g++) d.push(c.params[g]);
                            return Promise.resolve().then(function() {
                                s.emit.apply(s, d)
                            })
                        }
                        if (!s.queue[c.id]) return c.method ? Promise.resolve().then(function() {
                            s.emit(c.method, c ? .params)
                        }) : void 0;
                        "error" in c == "result" in c && s.queue[c.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.')), s.queue[c.id].timeout && clearTimeout(s.queue[c.id].timeout), c.error ? s.queue[c.id].promise[1](c.error) : s.queue[c.id].promise[0](c.result), delete s.queue[c.id]
                    }), this.socket.addEventListener("error", function(a) {
                        return s.emit("error", a)
                    }), this.socket.addEventListener("close", function(a) {
                        var c = a.code,
                            d = a.reason;
                        s.ready && setTimeout(function() {
                            return s.emit("close", c, d)
                        }, 0), s.ready = !1, s.socket = void 0, c !== 1e3 && (s.current_reconnects++, s.reconnect && (s.max_reconnects > s.current_reconnects || s.max_reconnects === 0) && (s.reconnect_timer_id = setTimeout(function() {
                            return s._connect(i, o)
                        }, s.reconnect_interval)))
                    })
                }
            }]), e
        }(Jg.EventEmitter);
    ys.default = nm
});
var xl = wt(Du => {
    "use strict";
    var Ni = cs();
    Object.defineProperty(Du, "__esModule", {
        value: !0
    });
    Du.default = lm;
    var im = Ni(hs()),
        om = Ni(ls()),
        sm = Ni(Uu()),
        am = Ni(Pu()),
        bl = Ni(Fu()),
        um = Nu();

    function cm(r) {
        var t = fm();
        return function() {
            var n = (0, bl.default)(r),
                i;
            if (t) {
                var o = (0, bl.default)(this).constructor;
                i = Reflect.construct(n, arguments, o)
            } else i = n.apply(this, arguments);
            return (0, am.default)(this, i)
        }
    }

    function fm() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
        if (typeof Proxy == "function") return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
        } catch {
            return !1
        }
    }
    var hm = function(r) {
        (0, sm.default)(e, r);
        var t = cm(e);

        function e(n, i, o) {
            var s;
            return (0, im.default)(this, e), s = t.call(this), s.socket = new window.WebSocket(n, o), s.socket.onopen = function() {
                return s.emit("open")
            }, s.socket.onmessage = function(a) {
                return s.emit("message", a.data)
            }, s.socket.onerror = function(a) {
                return s.emit("error", a)
            }, s.socket.onclose = function(a) {
                s.emit("close", a.code, a.reason)
            }, s
        }
        return (0, om.default)(e, [{
            key: "send",
            value: function(i, o, s) {
                var a = s || o;
                try {
                    this.socket.send(i), a()
                } catch (c) {
                    a(c)
                }
            }
        }, {
            key: "close",
            value: function(i, o) {
                this.socket.close(i, o)
            }
        }, {
            key: "addEventListener",
            value: function(i, o, s) {
                this.socket.addEventListener(i, o, s)
            }
        }]), e
    }(um.EventEmitter);

    function lm(r, t) {
        return new hm(r, t)
    }
});

function xm(r, t = 24) {
    let e = new Uint32Array(10);
    for (let n = 24 - t; n < 24; n++) {
        for (let s = 0; s < 10; s++) e[s] = r[s] ^ r[s + 10] ^ r[s + 20] ^ r[s + 30] ^ r[s + 40];
        for (let s = 0; s < 10; s += 2) {
            let a = (s + 8) % 10,
                c = (s + 2) % 10,
                d = e[c],
                g = e[c + 1],
                b = El(d, g, 1) ^ e[a],
                _ = Bl(d, g, 1) ^ e[a + 1];
            for (let I = 0; I < 50; I += 10) r[s + I] ^= b, r[s + I + 1] ^= _
        }
        let i = r[2],
            o = r[3];
        for (let s = 0; s < 24; s++) {
            let a = vl[s],
                c = El(i, o, a),
                d = Bl(i, o, a),
                g = kl[s];
            i = r[g], o = r[g + 1], r[g] = c, r[g + 1] = d
        }
        for (let s = 0; s < 50; s += 10) {
            for (let a = 0; a < 10; a++) e[a] = r[s + a];
            for (let a = 0; a < 10; a++) r[s + a] ^= ~e[(a + 2) % 10] & e[(a + 4) % 10]
        }
        r[0] ^= wm[n], r[1] ^= bm[n]
    }
    e.fill(0)
}
var kl, vl, Il, dm, Di, pm, ym, gm, mm, wm, bm, El, Bl, gs, en, r2, n2, i2, o2, s2, qu, a2, u2, Sl, c2, f2, Al = yt(() => {
    "use strict";
    li();
    Ea();
    Nr();
    kl = [], vl = [], Il = [], dm = BigInt(0), Di = BigInt(1), pm = BigInt(2), ym = BigInt(7), gm = BigInt(256), mm = BigInt(113);
    for (let r = 0, t = Di, e = 1, n = 0; r < 24; r++) {
        [e, n] = [n, (2 * e + 3 * n) % 5], kl.push(2 * (5 * n + e)), vl.push((r + 1) * (r + 2) / 2 % 64);
        let i = dm;
        for (let o = 0; o < 7; o++) t = (t << Di ^ (t >> ym) * mm) % gm, t & pm && (i ^= Di << (Di << BigInt(o)) - Di);
        Il.push(i)
    }[wm, bm] = ga(Il, !0), El = (r, t, e) => e > 32 ? ba(r, t, e) : ma(r, t, e), Bl = (r, t, e) => e > 32 ? xa(r, t, e) : wa(r, t, e);
    gs = class r extends Fr {
        constructor(t, e, n, i = !1, o = 24) {
            if (super(), this.blockLen = t, this.suffix = e, this.outputLen = n, this.enableXOF = i, this.rounds = o, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, hi(n), 0 >= this.blockLen || this.blockLen >= 200) throw new Error("Sha3 supports only keccak-f1600 function");
            this.state = new Uint8Array(200), this.state32 = tf(this.state)
        }
        keccak() {
            ha || la(this.state32), xm(this.state32, this.rounds), ha || la(this.state32), this.posOut = 0, this.pos = 0
        }
        update(t) {
            yr(this);
            let {
                blockLen: e,
                state: n
            } = this;
            t = Or(t);
            let i = t.length;
            for (let o = 0; o < i;) {
                let s = Math.min(e - this.pos, i - o);
                for (let a = 0; a < s; a++) n[this.pos++] ^= t[o++];
                this.pos === e && this.keccak()
            }
            return this
        }
        finish() {
            if (this.finished) return;
            this.finished = !0;
            let {
                state: t,
                suffix: e,
                pos: n,
                blockLen: i
            } = this;
            t[n] ^= e, e & 128 && n === i - 1 && this.keccak(), t[i - 1] ^= 128, this.keccak()
        }
        writeInto(t) {
            yr(this, !1), Cr(t), this.finish();
            let e = this.state,
                {
                    blockLen: n
                } = this;
            for (let i = 0, o = t.length; i < o;) {
                this.posOut >= n && this.keccak();
                let s = Math.min(n - this.posOut, o - i);
                t.set(e.subarray(this.posOut, this.posOut + s), i), this.posOut += s, i += s
            }
            return t
        }
        xofInto(t) {
            if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
            return this.writeInto(t)
        }
        xof(t) {
            return hi(t), this.xofInto(new Uint8Array(t))
        }
        digestInto(t) {
            if (uo(t, this), this.finished) throw new Error("digest() was already called");
            return this.writeInto(t), this.destroy(), t
        }
        digest() {
            return this.digestInto(new Uint8Array(this.outputLen))
        }
        destroy() {
            this.destroyed = !0, this.state.fill(0)
        }
        _cloneInto(t) {
            let {
                blockLen: e,
                suffix: n,
                outputLen: i,
                rounds: o,
                enableXOF: s
            } = this;
            return t || (t = new r(e, n, i, s, o)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = o, t.suffix = n, t.outputLen = i, t.enableXOF = s, t.destroyed = this.destroyed, t
        }
    }, en = (r, t, e) => Tn(() => new gs(t, r, e)), r2 = en(6, 144, 224 / 8), n2 = en(6, 136, 256 / 8), i2 = en(6, 104, 384 / 8), o2 = en(6, 72, 512 / 8), s2 = en(1, 144, 224 / 8), qu = en(1, 136, 256 / 8), a2 = en(1, 104, 384 / 8), u2 = en(1, 72, 512 / 8), Sl = (r, t, e) => ef((n = {}) => new gs(t, r, n.dkLen === void 0 ? e : n.dkLen, !0)), c2 = Sl(31, 168, 128 / 8), f2 = Sl(31, 136, 256 / 8)
});

function Em(r) {
    let t = pi(r);
    rr(t, {
        a: "field",
        b: "field"
    }, {
        allowedPrivateKeyLengths: "array",
        wrapPrivateKey: "boolean",
        isTorsionFree: "function",
        clearCofactor: "function",
        allowInfinityPoint: "boolean",
        fromBytes: "function",
        toBytes: "function"
    });
    let {
        endo: e,
        Fp: n,
        a: i
    } = t;
    if (e) {
        if (!n.eql(i, n.ZERO)) throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
        if (typeof e != "object" || typeof e.beta != "bigint" || typeof e.splitScalar != "function") throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")
    }
    return Object.freeze(st({}, t))
}

function vm(r) {
    let t = Em(r),
        {
            Fp: e
        } = t,
        n = t.toBytes || ((S, v, A) => {
            let T = v.toAffine();
            return br(Uint8Array.from([4]), e.toBytes(T.x), e.toBytes(T.y))
        }),
        i = t.fromBytes || (S => {
            let v = S.subarray(1),
                A = e.fromBytes(v.subarray(0, e.BYTES)),
                T = e.fromBytes(v.subarray(e.BYTES, 2 * e.BYTES));
            return {
                x: A,
                y: T
            }
        });

    function o(S) {
        let {
            a: v,
            b: A
        } = t, T = e.sqr(S), z = e.mul(T, S);
        return e.add(e.add(z, e.mul(S, v)), A)
    }
    if (!e.eql(e.sqr(t.Gy), o(t.Gx))) throw new Error("bad generator point: equation left != right");

    function s(S) {
        return typeof S == "bigint" && Lr < S && S < t.n
    }

    function a(S) {
        if (!s(S)) throw new Error("Expected valid bigint: 0 < bigint < curve.n")
    }

    function c(S) {
        let {
            allowedPrivateKeyLengths: v,
            nByteLength: A,
            wrapPrivateKey: T,
            n: z
        } = t;
        if (v && typeof S != "bigint") {
            if (zr(S) && (S = mr(S)), typeof S != "string" || !v.includes(S.length)) throw new Error("Invalid key");
            S = S.padStart(A * 2, "0")
        }
        let N;
        try {
            N = typeof S == "bigint" ? S : wr(jt("private key", S, A))
        } catch {
            throw new Error(`private key must be ${A} bytes, hex or bigint, not ${typeof S}`)
        }
        return T && (N = _t(N, z)), a(N), N
    }
    let d = new Map;

    function g(S) {
        if (!(S instanceof b)) throw new Error("ProjectivePoint expected")
    }
    class b {
        constructor(v, A, T) {
            if (this.px = v, this.py = A, this.pz = T, v == null || !e.isValid(v)) throw new Error("x required");
            if (A == null || !e.isValid(A)) throw new Error("y required");
            if (T == null || !e.isValid(T)) throw new Error("z required")
        }
        static fromAffine(v) {
            let {
                x: A,
                y: T
            } = v || {};
            if (!v || !e.isValid(A) || !e.isValid(T)) throw new Error("invalid affine point");
            if (v instanceof b) throw new Error("projective point not allowed");
            let z = N => e.eql(N, e.ZERO);
            return z(A) && z(T) ? b.ZERO : new b(A, T, e.ONE)
        }
        get x() {
            return this.toAffine().x
        }
        get y() {
            return this.toAffine().y
        }
        static normalizeZ(v) {
            let A = e.invertBatch(v.map(T => T.pz));
            return v.map((T, z) => T.toAffine(A[z])).map(b.fromAffine)
        }
        static fromHex(v) {
            let A = b.fromAffine(i(jt("pointHex", v)));
            return A.assertValidity(), A
        }
        static fromPrivateKey(v) {
            return b.BASE.multiply(c(v))
        }
        _setWindowSize(v) {
            this._WINDOW_SIZE = v, d.delete(this)
        }
        assertValidity() {
            if (this.is0()) {
                if (t.allowInfinityPoint && !e.is0(this.py)) return;
                throw new Error("bad point: ZERO")
            }
            let {
                x: v,
                y: A
            } = this.toAffine();
            if (!e.isValid(v) || !e.isValid(A)) throw new Error("bad point: x or y not FE");
            let T = e.sqr(A),
                z = o(v);
            if (!e.eql(T, z)) throw new Error("bad point: equation left != right");
            if (!this.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup")
        }
        hasEvenY() {
            let {
                y: v
            } = this.toAffine();
            if (e.isOdd) return !e.isOdd(v);
            throw new Error("Field doesn't support isOdd")
        }
        equals(v) {
            g(v);
            let {
                px: A,
                py: T,
                pz: z
            } = this, {
                px: N,
                py: G,
                pz: H
            } = v, W = e.eql(e.mul(A, H), e.mul(N, z)), J = e.eql(e.mul(T, H), e.mul(G, z));
            return W && J
        }
        negate() {
            return new b(this.px, e.neg(this.py), this.pz)
        }
        double() {
            let {
                a: v,
                b: A
            } = t, T = e.mul(A, _l), {
                px: z,
                py: N,
                pz: G
            } = this, H = e.ZERO, W = e.ZERO, J = e.ZERO, et = e.mul(z, z), mt = e.mul(N, N), dt = e.mul(G, G), Q = e.mul(z, N);
            return Q = e.add(Q, Q), J = e.mul(z, G), J = e.add(J, J), H = e.mul(v, J), W = e.mul(T, dt), W = e.add(H, W), H = e.sub(mt, W), W = e.add(mt, W), W = e.mul(H, W), H = e.mul(Q, H), J = e.mul(T, J), dt = e.mul(v, dt), Q = e.sub(et, dt), Q = e.mul(v, Q), Q = e.add(Q, J), J = e.add(et, et), et = e.add(J, et), et = e.add(et, dt), et = e.mul(et, Q), W = e.add(W, et), dt = e.mul(N, G), dt = e.add(dt, dt), et = e.mul(dt, Q), H = e.sub(H, et), J = e.mul(dt, mt), J = e.add(J, J), J = e.add(J, J), new b(H, W, J)
        }
        add(v) {
            g(v);
            let {
                px: A,
                py: T,
                pz: z
            } = this, {
                px: N,
                py: G,
                pz: H
            } = v, W = e.ZERO, J = e.ZERO, et = e.ZERO, mt = t.a, dt = e.mul(t.b, _l), Q = e.mul(A, N), Bt = e.mul(T, G), B = e.mul(z, H), u = e.add(A, T), h = e.add(N, G);
            u = e.mul(u, h), h = e.add(Q, Bt), u = e.sub(u, h), h = e.add(A, z);
            let l = e.add(N, H);
            return h = e.mul(h, l), l = e.add(Q, B), h = e.sub(h, l), l = e.add(T, z), W = e.add(G, H), l = e.mul(l, W), W = e.add(Bt, B), l = e.sub(l, W), et = e.mul(mt, h), W = e.mul(dt, B), et = e.add(W, et), W = e.sub(Bt, et), et = e.add(Bt, et), J = e.mul(W, et), Bt = e.add(Q, Q), Bt = e.add(Bt, Q), B = e.mul(mt, B), h = e.mul(dt, h), Bt = e.add(Bt, B), B = e.sub(Q, B), B = e.mul(mt, B), h = e.add(h, B), Q = e.mul(Bt, h), J = e.add(J, Q), Q = e.mul(l, h), W = e.mul(u, W), W = e.sub(W, Q), Q = e.mul(u, Bt), et = e.mul(l, et), et = e.add(et, Q), new b(W, J, et)
        }
        subtract(v) {
            return this.add(v.negate())
        }
        is0() {
            return this.equals(b.ZERO)
        }
        wNAF(v) {
            return I.wNAFCached(this, d, v, A => {
                let T = e.invertBatch(A.map(z => z.pz));
                return A.map((z, N) => z.toAffine(T[N])).map(b.fromAffine)
            })
        }
        multiplyUnsafe(v) {
            let A = b.ZERO;
            if (v === Lr) return A;
            if (a(v), v === je) return this;
            let {
                endo: T
            } = t;
            if (!T) return I.unsafeLadder(this, v);
            let {
                k1neg: z,
                k1: N,
                k2neg: G,
                k2: H
            } = T.splitScalar(v), W = A, J = A, et = this;
            for (; N > Lr || H > Lr;) N & je && (W = W.add(et)), H & je && (J = J.add(et)), et = et.double(), N >>= je, H >>= je;
            return z && (W = W.negate()), G && (J = J.negate()), J = new b(e.mul(J.px, T.beta), J.py, J.pz), W.add(J)
        }
        multiply(v) {
            a(v);
            let A = v,
                T, z, {
                    endo: N
                } = t;
            if (N) {
                let {
                    k1neg: G,
                    k1: H,
                    k2neg: W,
                    k2: J
                } = N.splitScalar(A), {
                    p: et,
                    f: mt
                } = this.wNAF(H), {
                    p: dt,
                    f: Q
                } = this.wNAF(J);
                et = I.constTimeNegate(G, et), dt = I.constTimeNegate(W, dt), dt = new b(e.mul(dt.px, N.beta), dt.py, dt.pz), T = et.add(dt), z = mt.add(Q)
            } else {
                let {
                    p: G,
                    f: H
                } = this.wNAF(A);
                T = G, z = H
            }
            return b.normalizeZ([T, z])[0]
        }
        multiplyAndAddUnsafe(v, A, T) {
            let z = b.BASE,
                N = (H, W) => W === Lr || W === je || !H.equals(z) ? H.multiplyUnsafe(W) : H.multiply(W),
                G = N(this, A).add(N(v, T));
            return G.is0() ? void 0 : G
        }
        toAffine(v) {
            let {
                px: A,
                py: T,
                pz: z
            } = this, N = this.is0();
            v == null && (v = N ? e.ONE : e.inv(z));
            let G = e.mul(A, v),
                H = e.mul(T, v),
                W = e.mul(z, v);
            if (N) return {
                x: e.ZERO,
                y: e.ZERO
            };
            if (!e.eql(W, e.ONE)) throw new Error("invZ was invalid");
            return {
                x: G,
                y: H
            }
        }
        isTorsionFree() {
            let {
                h: v,
                isTorsionFree: A
            } = t;
            if (v === je) return !0;
            if (A) return A(b, this);
            throw new Error("isTorsionFree() has not been declared for the elliptic curve")
        }
        clearCofactor() {
            let {
                h: v,
                clearCofactor: A
            } = t;
            return v === je ? this : A ? A(b, this) : this.multiplyUnsafe(t.h)
        }
        toRawBytes(v = !0) {
            return this.assertValidity(), n(b, this, v)
        }
        toHex(v = !0) {
            return mr(this.toRawBytes(v))
        }
    }
    b.BASE = new b(t.Gx, t.Gy, e.ONE), b.ZERO = new b(e.ZERO, e.ONE, e.ZERO);
    let _ = t.nBitLength,
        I = bo(b, t.endo ? Math.ceil(_ / 2) : _);
    return {
        CURVE: t,
        ProjectivePoint: b,
        normPrivateKeyToScalar: c,
        weierstrassEquation: o,
        isWithinCurveOrder: s
    }
}

function Im(r) {
    let t = pi(r);
    return rr(t, {
        hash: "hash",
        hmac: "function",
        randomBytes: "function"
    }, {
        bits2int: "function",
        bits2int_modN: "function",
        lowS: "boolean"
    }), Object.freeze(st({
        lowS: !0
    }, t))
}

function Rl(r) {
    let t = Im(r),
        {
            Fp: e,
            n
        } = t,
        i = e.BYTES + 1,
        o = 2 * e.BYTES + 1;

    function s(h) {
        return Lr < h && h < e.ORDER
    }

    function a(h) {
        return _t(h, n)
    }

    function c(h) {
        return mo(h, n)
    }
    let {
        ProjectivePoint: d,
        normPrivateKeyToScalar: g,
        weierstrassEquation: b,
        isWithinCurveOrder: _
    } = vm(ft(st({}, t), {
        toBytes(h, l, p) {
            let y = l.toAffine(),
                w = e.toBytes(y.x),
                E = br;
            return p ? E(Uint8Array.from([l.hasEvenY() ? 2 : 3]), w) : E(Uint8Array.from([4]), w, e.toBytes(y.y))
        },
        fromBytes(h) {
            let l = h.length,
                p = h[0],
                y = h.subarray(1);
            if (l === i && (p === 2 || p === 3)) {
                let w = wr(y);
                if (!s(w)) throw new Error("Point is not on curve");
                let E = b(w),
                    m;
                try {
                    m = e.sqrt(E)
                } catch (F) {
                    let K = F instanceof Error ? ": " + F.message : "";
                    throw new Error("Point is not on curve" + K)
                }
                let f = (m & je) === je;
                return (p & 1) === 1 !== f && (m = e.neg(m)), {
                    x: w,
                    y: m
                }
            } else if (l === o && p === 4) {
                let w = e.fromBytes(y.subarray(0, e.BYTES)),
                    E = e.fromBytes(y.subarray(e.BYTES, 2 * e.BYTES));
                return {
                    x: w,
                    y: E
                }
            } else throw new Error(`Point of length ${l} was invalid. Expected ${i} compressed bytes or ${o} uncompressed bytes`)
        }
    })), I = h => mr(Wr(h, t.nByteLength));

    function S(h) {
        let l = n >> je;
        return h > l
    }

    function v(h) {
        return S(h) ? a(-h) : h
    }
    let A = (h, l, p) => wr(h.slice(l, p));
    class T {
        constructor(l, p, y) {
            this.r = l, this.s = p, this.recovery = y, this.assertValidity()
        }
        static fromCompact(l) {
            let p = t.nByteLength;
            return l = jt("compactSignature", l, p * 2), new T(A(l, 0, p), A(l, p, 2 * p))
        }
        static fromDER(l) {
            let {
                r: p,
                s: y
            } = xn.toSig(jt("DER", l));
            return new T(p, y)
        }
        assertValidity() {
            if (!_(this.r)) throw new Error("r must be 0 < r < CURVE.n");
            if (!_(this.s)) throw new Error("s must be 0 < s < CURVE.n")
        }
        addRecoveryBit(l) {
            return new T(this.r, this.s, l)
        }
        recoverPublicKey(l) {
            let {
                r: p,
                s: y,
                recovery: w
            } = this, E = J(jt("msgHash", l));
            if (w == null || ![0, 1, 2, 3].includes(w)) throw new Error("recovery id invalid");
            let m = w === 2 || w === 3 ? p + t.n : p;
            if (m >= e.ORDER) throw new Error("recovery id 2 or 3 invalid");
            let f = w & 1 ? "03" : "02",
                x = d.fromHex(f + I(m)),
                F = c(m),
                K = a(-E * F),
                q = a(y * F),
                V = d.BASE.multiplyAndAddUnsafe(x, K, q);
            if (!V) throw new Error("point at infinify");
            return V.assertValidity(), V
        }
        hasHighS() {
            return S(this.s)
        }
        normalizeS() {
            return this.hasHighS() ? new T(this.r, a(-this.s), this.recovery) : this
        }
        toDERRawBytes() {
            return un(this.toDERHex())
        }
        toDERHex() {
            return xn.hexFromSig({
                r: this.r,
                s: this.s
            })
        }
        toCompactRawBytes() {
            return un(this.toCompactHex())
        }
        toCompactHex() {
            return I(this.r) + I(this.s)
        }
    }
    let z = {
        isValidPrivateKey(h) {
            try {
                return g(h), !0
            } catch {
                return !1
            }
        },
        normPrivateKeyToScalar: g,
        randomPrivateKey: () => {
            let h = La(t.n);
            return gf(t.randomBytes(h), t.n)
        },
        precompute(h = 8, l = d.BASE) {
            return l._setWindowSize(h), l.multiply(BigInt(3)), l
        }
    };

    function N(h, l = !0) {
        return d.fromPrivateKey(h).toRawBytes(l)
    }

    function G(h) {
        let l = zr(h),
            p = typeof h == "string",
            y = (l || p) && h.length;
        return l ? y === i || y === o : p ? y === 2 * i || y === 2 * o : h instanceof d
    }

    function H(h, l, p = !0) {
        if (G(h)) throw new Error("first arg must be private key");
        if (!G(l)) throw new Error("second arg must be public key");
        return d.fromHex(l).multiply(g(h)).toRawBytes(p)
    }
    let W = t.bits2int || function(h) {
            let l = wr(h),
                p = h.length * 8 - t.nBitLength;
            return p > 0 ? l >> BigInt(p) : l
        },
        J = t.bits2int_modN || function(h) {
            return a(W(h))
        },
        et = di(t.nBitLength);

    function mt(h) {
        if (typeof h != "bigint") throw new Error("bigint expected");
        if (!(Lr <= h && h < et)) throw new Error(`bigint expected < 2^${t.nBitLength}`);
        return Wr(h, t.nByteLength)
    }

    function dt(h, l, p = Q) {
        if (["recovered", "canonical"].some(ot => ot in p)) throw new Error("sign() legacy options not supported");
        let {
            hash: y,
            randomBytes: w
        } = t, {
            lowS: E,
            prehash: m,
            extraEntropy: f
        } = p;
        E == null && (E = !0), h = jt("msgHash", h), m && (h = jt("prehashed msgHash", y(h)));
        let x = J(h),
            F = g(l),
            K = [mt(F), mt(x)];
        if (f != null && f !== !1) {
            let ot = f === !0 ? w(e.BYTES) : f;
            K.push(jt("extraEntropy", ot))
        }
        let q = br(...K),
            V = x;

        function rt(ot) {
            let Lt = W(ot);
            if (!_(Lt)) return;
            let at = c(Lt),
                ut = d.BASE.multiply(Lt).toAffine(),
                me = a(ut.x);
            if (me === Lr) return;
            let kt = a(at * a(V + me * F));
            if (kt === Lr) return;
            let At = (ut.x === me ? 0 : 2) | Number(ut.y & je),
                Ur = kt;
            return E && S(kt) && (Ur = v(kt), At ^= 1), new T(me, Ur, At)
        }
        return {
            seed: q,
            k2sig: rt
        }
    }
    let Q = {
            lowS: t.lowS,
            prehash: !1
        },
        Bt = {
            lowS: t.lowS,
            prehash: !1
        };

    function B(h, l, p = Q) {
        let {
            seed: y,
            k2sig: w
        } = dt(h, l, p), E = t;
        return Sa(E.hash.outputLen, E.nByteLength, E.hmac)(y, w)
    }
    d.BASE._setWindowSize(8);

    function u(h, l, p, y = Bt) {
        let w = h;
        if (l = jt("msgHash", l), p = jt("publicKey", p), "strict" in y) throw new Error("options.strict was renamed to lowS");
        let {
            lowS: E,
            prehash: m
        } = y, f, x;
        try {
            if (typeof w == "string" || zr(w)) try {
                f = T.fromDER(w)
            } catch (ut) {
                if (!(ut instanceof xn.Err)) throw ut;
                f = T.fromCompact(w)
            } else if (typeof w == "object" && typeof w.r == "bigint" && typeof w.s == "bigint") {
                let {
                    r: ut,
                    s: me
                } = w;
                f = new T(ut, me)
            } else throw new Error("PARSE");
            x = d.fromHex(p)
        } catch (ut) {
            if (ut.message === "PARSE") throw new Error("signature must be Signature instance, Uint8Array or hex string");
            return !1
        }
        if (E && f.hasHighS()) return !1;
        m && (l = t.hash(l));
        let {
            r: F,
            s: K
        } = f, q = J(l), V = c(K), rt = a(q * V), ot = a(F * V), Lt = d.BASE.multiplyAndAddUnsafe(x, rt, ot) ? .toAffine();
        return Lt ? a(Lt.x) === F : !1
    }
    return {
        CURVE: t,
        getPublicKey: N,
        getSharedSecret: H,
        sign: B,
        verify: u,
        ProjectivePoint: d,
        Signature: T,
        utils: z
    }
}
var Bm, km, xn, Lr, je, y2, _l, g2, Ll = yt(() => {
    "use strict";
    Pn();
    fn();
    fn();
    Ma();
    ({
        bytesToNumberBE: Bm,
        hexToBytes: km
    } = go), xn = {
        Err: class extends Error {
            constructor(t = "") {
                super(t)
            }
        },
        _parseInt(r) {
            let {
                Err: t
            } = xn;
            if (r.length < 2 || r[0] !== 2) throw new t("Invalid signature integer tag");
            let e = r[1],
                n = r.subarray(2, e + 2);
            if (!e || n.length !== e) throw new t("Invalid signature integer: wrong length");
            if (n[0] & 128) throw new t("Invalid signature integer: negative");
            if (n[0] === 0 && !(n[1] & 128)) throw new t("Invalid signature integer: unnecessary leading zero");
            return {
                d: Bm(n),
                l: r.subarray(e + 2)
            }
        },
        toSig(r) {
            let {
                Err: t
            } = xn, e = typeof r == "string" ? km(r) : r;
            Un(e);
            let n = e.length;
            if (n < 2 || e[0] != 48) throw new t("Invalid signature tag");
            if (e[1] !== n - 2) throw new t("Invalid signature: incorrect length");
            let {
                d: i,
                l: o
            } = xn._parseInt(e.subarray(2)), {
                d: s,
                l: a
            } = xn._parseInt(o);
            if (a.length) throw new t("Invalid signature: left bytes after parsing");
            return {
                r: i,
                s
            }
        },
        hexFromSig(r) {
            let t = d => Number.parseInt(d[0], 16) & 8 ? "00" + d : d,
                e = d => {
                    let g = d.toString(16);
                    return g.length & 1 ? `0${g}` : g
                },
                n = t(e(r.s)),
                i = t(e(r.r)),
                o = n.length / 2,
                s = i.length / 2,
                a = e(o),
                c = e(s);
            return `30${e(s+o+4)}02${c}${i}02${a}${n}`
        }
    }, Lr = BigInt(0), je = BigInt(1), y2 = BigInt(2), _l = BigInt(3), g2 = BigInt(4)
});
var ms, zu, Tl = yt(() => {
    "use strict";
    li();
    Nr();
    ms = class extends Fr {
        constructor(t, e) {
            super(), this.finished = !1, this.destroyed = !1, Jc(t);
            let n = Or(e);
            if (this.iHash = t.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
            this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
            let i = this.blockLen,
                o = new Uint8Array(i);
            o.set(n.length > i ? t.create().update(n).digest() : n);
            for (let s = 0; s < o.length; s++) o[s] ^= 54;
            this.iHash.update(o), this.oHash = t.create();
            for (let s = 0; s < o.length; s++) o[s] ^= 106;
            this.oHash.update(o), o.fill(0)
        }
        update(t) {
            return yr(this), this.iHash.update(t), this
        }
        digestInto(t) {
            yr(this), Cr(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy()
        }
        digest() {
            let t = new Uint8Array(this.oHash.outputLen);
            return this.digestInto(t), t
        }
        _cloneInto(t) {
            t || (t = Object.create(Object.getPrototypeOf(this), {}));
            let {
                oHash: e,
                iHash: n,
                finished: i,
                destroyed: o,
                blockLen: s,
                outputLen: a
            } = this;
            return t = t, t.finished = i, t.destroyed = o, t.blockLen = s, t.outputLen = a, t.oHash = e._cloneInto(t.oHash), t.iHash = n._cloneInto(t.iHash), t
        }
        destroy() {
            this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
        }
    }, zu = (r, t, e) => new ms(r, t).update(e).digest();
    zu.create = (r, t) => new ms(r, t)
});

function Sm(r) {
    return {
        hash: r,
        hmac: (t, ...e) => zu(r, t, ho(...e)),
        randomBytes: lo
    }
}

function Ml(r, t) {
    let e = n => Rl(st(st({}, r), Sm(n)));
    return Object.freeze(ft(st({}, e(t)), {
        create: e
    }))
}
var Ul = yt(() => {
    "use strict";
    Tl();
    Nr();
    Ll();
});

function _m(r) {
    let t = Fl,
        e = BigInt(3),
        n = BigInt(6),
        i = BigInt(11),
        o = BigInt(22),
        s = BigInt(23),
        a = BigInt(44),
        c = BigInt(88),
        d = r * r * r % t,
        g = d * d * r % t,
        b = Pt(g, e, t) * g % t,
        _ = Pt(b, e, t) * g % t,
        I = Pt(_, Ku, t) * d % t,
        S = Pt(I, i, t) * I % t,
        v = Pt(S, o, t) * S % t,
        A = Pt(v, a, t) * v % t,
        T = Pt(A, c, t) * A % t,
        z = Pt(T, a, t) * v % t,
        N = Pt(z, e, t) * g % t,
        G = Pt(N, s, t) * S % t,
        H = Pt(G, n, t) * d % t,
        W = Pt(H, Ku, t);
    if (!Wu.eql(Wu.sqr(W), r)) throw new Error("Cannot find square root");
    return W
}
var Fl, Pl, Am, Ku, Cl, Wu, qi, L2, T2, Ol = yt(() => {
    "use strict";
    eu();
    Pn();
    Ul();
    Fl = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), Pl = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), Am = BigInt(1), Ku = BigInt(2), Cl = (r, t) => (r + t / Ku) / t;
    Wu = wo(Fl, void 0, void 0, {
        sqrt: _m
    }), qi = Ml({
        a: BigInt(0),
        b: BigInt(7),
        Fp: Wu,
        n: Pl,
        Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
        Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
        h: BigInt(1),
        lowS: !0,
        endo: {
            beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
            splitScalar: r => {
                let t = Pl,
                    e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                    n = -Am * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                    i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                    o = e,
                    s = BigInt("0x100000000000000000000000000000000"),
                    a = Cl(o * r, t),
                    c = Cl(-n * r, t),
                    d = _t(r - a * e - c * i, t),
                    g = _t(-a * n - c * o, t),
                    b = d > s,
                    _ = g > s;
                if (b && (d = t - d), _ && (g = t - g), d > s || g > s) throw new Error("splitScalar: Endomorphism failed, k=" + r);
                return {
                    k1neg: b,
                    k1: d,
                    k2neg: _,
                    k2: g
                }
            }
        }
    }, yi), L2 = BigInt(0), T2 = qi.ProjectivePoint
});
var Fw = {};
io(Fw, {
    Account: () => Xu,
    AddressLookupTableAccount: () => Yi,
    AddressLookupTableInstruction: () => fc,
    AddressLookupTableProgram: () => Xi,
    Authorized: () => Rs,
    BLOCKHASH_CACHE_TIMEOUT_MS: () => l0,
    BPF_LOADER_DEPRECATED_PROGRAM_ID: () => Mm,
    BPF_LOADER_PROGRAM_ID: () => Zm,
    BpfLoader: () => ic,
    COMPUTE_BUDGET_INSTRUCTION_LAYOUTS: () => fr,
    ComputeBudgetInstruction: () => hc,
    ComputeBudgetProgram: () => Ji,
    Connection: () => cc,
    Ed25519Program: () => As,
    Enum: () => Zu,
    EpochSchedule: () => vs,
    FeeCalculatorLayout: () => c0,
    Keypair: () => Ss,
    LAMPORTS_PER_SOL: () => Cw,
    LOOKUP_TABLE_INSTRUCTION_LAYOUTS: () => Mr,
    Loader: () => nc,
    Lockup: () => vn,
    MAX_SEED_LENGTH: () => s0,
    Message: () => dr,
    MessageAccountKeys: () => kn,
    MessageV0: () => Xn,
    NONCE_ACCOUNT_LENGTH: () => ec,
    NonceAccount: () => ks,
    PACKET_DATA_SIZE: () => nn,
    PUBLIC_KEY_LENGTH: () => lr,
    PublicKey: () => Y,
    SIGNATURE_LENGTH_IN_BYTES: () => $i,
    SOLANA_SCHEMA: () => Wi,
    STAKE_CONFIG_ID: () => k0,
    STAKE_INSTRUCTION_LAYOUTS: () => ke,
    SYSTEM_INSTRUCTION_LAYOUTS: () => Tt,
    SYSVAR_CLOCK_PUBKEY: () => cr,
    SYSVAR_EPOCH_SCHEDULE_PUBKEY: () => Km,
    SYSVAR_INSTRUCTIONS_PUBKEY: () => Wm,
    SYSVAR_RECENT_BLOCKHASHES_PUBKEY: () => bs,
    SYSVAR_RENT_PUBKEY: () => Jn,
    SYSVAR_REWARDS_PUBKEY: () => Hm,
    SYSVAR_SLOT_HASHES_PUBKEY: () => $m,
    SYSVAR_SLOT_HISTORY_PUBKEY: () => Vm,
    SYSVAR_STAKE_HISTORY_PUBKEY: () => xs,
    Secp256k1Program: () => _s,
    SendTransactionError: () => ji,
    SolanaJSONRPCError: () => tt,
    SolanaJSONRPCErrorCode: () => r1,
    StakeAuthorizationLayout: () => Sw,
    StakeInstruction: () => lc,
    StakeProgram: () => ti,
    Struct: () => Hi,
    SystemInstruction: () => rc,
    SystemProgram: () => Ae,
    Transaction: () => It,
    TransactionExpiredBlockheightExceededError: () => Vi,
    TransactionExpiredNonceInvalidError: () => rn,
    TransactionExpiredTimeoutError: () => Gi,
    TransactionInstruction: () => St,
    TransactionMessage: () => Ju,
    TransactionStatus: () => Tr,
    VALIDATOR_INFO_KEY: () => v0,
    VERSION_PREFIX_MASK: () => Ts,
    VOTE_PROGRAM_ID: () => Rw,
    ValidatorInfo: () => pc,
    VersionedMessage: () => mc,
    VersionedTransaction: () => Qu,
    VoteAccount: () => yc,
    VoteAuthorizationLayout: () => Aw,
    VoteInit: () => Ls,
    VoteInstruction: () => dc,
    VoteProgram: () => ei,
    clusterApiUrl: () => Uw,
    sendAndConfirmRawTransaction: () => Pw,
    sendAndConfirmTransaction: () => tc
});

function Dl(r) {
    try {
        return ln.ExtendedPoint.fromHex(r), !0
    } catch {
        return !1
    }
}

function Tm(r) {
    return r._bn !== void 0
}

function a0(r, t) {
    let e = i => {
            if (i.span >= 0) return i.span;
            if (typeof i.alloc == "function") return i.alloc(t[i.property]);
            if ("count" in i && "elementLayout" in i) {
                let o = t[i.property];
                if (Array.isArray(o)) return o.length * e(i.elementLayout)
            } else if ("fields" in i) return a0({
                layout: i
            }, t[i.property]);
            return 0
        },
        n = 0;
    return r.layout.fields.forEach(i => {
        n += e(i)
    }), n
}

function Ke(r) {
    let t = 0,
        e = 0;
    for (;;) {
        let n = r.shift();
        if (t |= (n & 127) << e * 7, e += 1, !(n & 128)) break
    }
    return t
}

function $e(r, t) {
    let e = t;
    for (;;) {
        let n = e & 127;
        if (e >>= 7, e == 0) {
            r.push(n);
            break
        } else n |= 128, r.push(n)
    }
}

function xt(r, t) {
    if (!r) throw new Error(t || "Assertion failed")
}

function tc(r, t, e, n) {
    return O(this, null, function*() {
        let i = n && {
                skipPreflight: n.skipPreflight,
                preflightCommitment: n.preflightCommitment || n.commitment,
                maxRetries: n.maxRetries,
                minContextSlot: n.minContextSlot
            },
            o = yield r.sendTransaction(t, e, i), s;
        if (t.recentBlockhash != null && t.lastValidBlockHeight != null) s = (yield r.confirmTransaction({
            abortSignal: n ? .abortSignal,
            signature: o,
            blockhash: t.recentBlockhash,
            lastValidBlockHeight: t.lastValidBlockHeight
        }, n && n.commitment)).value;
        else if (t.minNonceContextSlot != null && t.nonceInfo != null) {
            let {
                nonceInstruction: a
            } = t.nonceInfo, c = a.keys[0].pubkey;
            s = (yield r.confirmTransaction({
                abortSignal: n ? .abortSignal,
                minContextSlot: t.minNonceContextSlot,
                nonceAccountPubkey: c,
                nonceValue: t.nonceInfo.nonce,
                signature: o
            }, n && n.commitment)).value
        } else n ? .abortSignal != null && console.warn("sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."), s = (yield r.confirmTransaction(o, n && n.commitment)).value;
        if (s.err) throw new Error(`Transaction ${o} failed (${JSON.stringify(s)})`);
        return o
    })
}

function En(r) {
    return new Promise(t => setTimeout(t, r))
}

function gt(r, t) {
    let e = r.layout.span >= 0 ? r.layout.span : a0(r, t),
        n = nt.Buffer.alloc(e),
        i = Object.assign({
            instruction: r.index
        }, t);
    return r.layout.encode(i, n), n
}

function vt(r, t) {
    let e;
    try {
        e = r.layout.decode(t)
    } catch (n) {
        throw new Error("invalid instruction; " + n)
    }
    if (e.instruction !== r.index) throw new Error(`invalid instruction; instruction index mismatch ${e.instruction} != ${r.index}`);
    return e
}

function Xm(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}

function Ki(r, t) {
    var e, n, i, o, s, a, c;
    if (r === !0) return "true";
    if (r === !1) return "false";
    switch (typeof r) {
        case "object":
            if (r === null) return null;
            if (r.toJSON && typeof r.toJSON == "function") return Ki(r.toJSON(), t);
            if (c = Jm.call(r), c === "[object Array]") {
                for (i = "[", n = r.length - 1, e = 0; e < n; e++) i += Ki(r[e], !0) + ",";
                return n > -1 && (i += Ki(r[e], !0)), i + "]"
            } else if (c === "[object Object]") {
                for (o = Qm(r).sort(), n = o.length, i = "", e = 0; e < n;) s = o[e], a = Ki(r[s], !1), a !== void 0 && (i && (i += ","), i += JSON.stringify(s) + ":" + a), e++;
                return "{" + i + "}"
            } else return JSON.stringify(r);
        case "function":
        case "undefined":
            return t ? null : void 0;
        case "string":
            return JSON.stringify(r);
        default:
            return isFinite(r) ? r : null
    }
}

function Hu(r) {
    let t = 0;
    for (; r > 1;) r /= 2, t++;
    return t
}

function e1(r) {
    return r === 0 ? 1 : (r--, r |= r >> 1, r |= r >> 2, r |= r >> 4, r |= r >> 8, r |= r >> 16, r |= r >> 32, r + 1)
}

function i1(r, t) {
    let e;
    try {
        e = r.layout.decode(t)
    } catch (n) {
        throw new Error("invalid instruction; " + n)
    }
    if (e.typeIndex !== r.index) throw new Error(`invalid account data; account type mismatch ${e.typeIndex} != ${r.index}`);
    return e
}

function a1(r) {
    let t = r.match(s1);
    if (t == null) throw TypeError(`Failed to validate endpoint URL \`${r}\``);
    let [e, n, i, o] = t, s = r.startsWith("https:") ? "wss:" : "ws:", a = i == null ? null : parseInt(i.slice(1), 10), c = a == null ? "" : `:${a+1}`;
    return `${s}//${n}${c}${o}`
}

function u1(r) {
    if (/^https?:/.test(r) === !1) throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
    return r
}

function Ft(r) {
    let t, e;
    if (typeof r == "string") t = r;
    else if (r) {
        let n = r,
            {
                commitment: i
            } = n,
            o = on(n, ["commitment"]);
        t = i, e = o
    }
    return {
        commitment: t,
        config: e
    }
}

function d0(r) {
    return Ce([D({
        jsonrpc: Ct("2.0"),
        id: $(),
        result: r
    }), D({
        jsonrpc: Ct("2.0"),
        id: $(),
        error: D({
            code: jn(),
            message: $(),
            data: it(Rh())
        })
    })])
}

function ht(r) {
    return Yn(d0(r), c1, t => "error" in t ? t : ft(st({}, t), {
        result: j(t.result, r)
    }))
}

function Yt(r) {
    return ht(D({
        context: D({
            slot: R()
        }),
        value: r
    }))
}

function Ms(r) {
    return D({
        context: D({
            slot: R()
        }),
        value: r
    })
}

function $u(r, t) {
    return r === 0 ? new Xn({
        header: t.header,
        staticAccountKeys: t.accountKeys.map(e => new Y(e)),
        recentBlockhash: t.recentBlockhash,
        compiledInstructions: t.instructions.map(e => ({
            programIdIndex: e.programIdIndex,
            accountKeyIndexes: e.accounts,
            data: ve.default.decode(e.data)
        })),
        addressTableLookups: t.addressTableLookups
    }) : new dr(t)
}

function E1(r, t, e, n, i, o) {
    let s = e || n1,
        a;
    o != null && console.warn("You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments.");
    let c;
    return n && (c = (g, b) => O(this, null, function*() {
        let _ = yield new Promise((I, S) => {
            try {
                n(g, b, (v, A) => I([v, A]))
            } catch (v) {
                S(v)
            }
        });
        return yield s(..._)
    })), new e0.default((g, b) => O(this, null, function*() {
        let _ = {
            method: "POST",
            body: g,
            agent: a,
            headers: Object.assign({
                "Content-Type": "application/json"
            }, t || {}, Bw)
        };
        try {
            let I = 5,
                S, v = 500;
            for (; c ? S = yield c(r, _): S = yield s(r, _), !(S.status !== 429 || i === !0 || (I -= 1, I === 0));) console.error(`Server responded with ${S.status} ${S.statusText}.  Retrying after ${v}ms delay...`), yield En(v), v *= 2;
            let A = yield S.text();
            S.ok ? b(null, A) : b(new Error(`${S.status} ${S.statusText}: ${A}`))
        } catch (I) {
            I instanceof Error && b(I)
        }
    }), {})
}

function B1(r) {
    return (t, e) => new Promise((n, i) => {
        r.request(t, e, (o, s) => {
            if (o) {
                i(o);
                return
            }
            n(s)
        })
    })
}

function k1(r) {
    return t => new Promise((e, n) => {
        t.length === 0 && e([]);
        let i = t.map(o => r.request(o.methodName, o.args));
        r.request(i, (o, s) => {
            if (o) {
                n(o);
                return
            }
            e(s)
        })
    })
}

function Tw({
    authorizedVoter: r,
    epoch: t
}) {
    return {
        epoch: t,
        authorizedVoter: new Y(r)
    }
}

function Jl({
    authorizedPubkey: r,
    epochOfLastAuthorizedSwitch: t,
    targetEpoch: e
}) {
    return {
        authorizedPubkey: new Y(r),
        epochOfLastAuthorizedSwitch: t,
        targetEpoch: e
    }
}

function Mw({
    buf: r,
    idx: t,
    isEmpty: e
}) {
    return e ? [] : [...r.slice(t + 1).map(Jl), ...r.slice(0, t).map(Jl)]
}

function Uw(r, t) {
    let e = t === !1 ? "http" : "https";
    if (!r) return Ql[e].devnet;
    let n = Ql[e][r];
    if (!n) throw new Error(`Unknown ${e} cluster: ${r}`);
    return n
}

function Pw(r, t, e, n) {
    return O(this, null, function*() {
        let i, o;
        e && Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight") || e && Object.prototype.hasOwnProperty.call(e, "nonceValue") ? (i = e, o = n) : o = e;
        let s = o && {
                skipPreflight: o.skipPreflight,
                preflightCommitment: o.preflightCommitment || o.commitment,
                minContextSlot: o.minContextSlot
            },
            a = yield r.sendRawTransaction(t, s), c = o && o.commitment, g = (yield i ? r.confirmTransaction(i, c) : r.confirmTransaction(a, c)).value;
        if (g.err) throw new Error(`Raw transaction ${a} failed (${JSON.stringify(g)})`);
        return a
    })
}
var nt, Yu, ve, ri, k, t0, Qi, e0, r0, n0, Rm, Nl, Es, gc, Lm, lt, Hi, Zu, Wi, i0, o0, s0, lr, ql, Y, Xu, Mm, nn, Ts, $i, Vi, Gi, rn, kn, pt, Um, Bn, Pm, Cm, Fm, Om, Bs, dr, Xn, mc, Tr, Nm, St, It, Ju, Qu, Dm, qm, zm, u0, cr, Km, Wm, bs, Jn, Hm, $m, Vm, xs, c0, f0, ec, ks, Gm, jm, Qn, rc, Tt, Ae, Ym, nc, Zm, ic, Jm, Qm, t1, zl, zi, vs, ji, r1, tt, n1, oc, Kl, Yi, o1, s1, ge, h0, wc, l0, c1, f1, h1, l1, d1, p1, y1, g1, In, m1, w1, b1, Wl, x1, v1, I1, S1, A1, _1, R1, L1, T1, sc, M1, U1, ac, P1, C1, Zi, F1, O1, uc, N1, D1, q1, z1, K1, W1, H1, $1, V1, G1, j1, Y1, Z1, X1, Hl, J1, Q1, tw, ew, rw, p0, bc, y0, g0, m0, w0, nw, iw, b0, x0, Is, E0, Us, xc, ni, Sn, ow, sw, aw, uw, cw, fw, hw, $l, Vu, ws, lw, dw, pw, yw, gw, mw, ww, bw, xw, Ew, Bw, cc, Ss, Mr, fc, Xi, hc, fr, Ji, Vl, Gl, jl, Yl, As, kw, vw, Zl, Gu, Xl, Iw, ju, _s, B0, k0, Rs, vn, lc, ke, Sw, ti, Ls, dc, hr, Aw, ei, v0, _w, pc, Rw, Lw, yc, Ql, Cw, Ow = yt(() => {
    "use strict";
    nt = Qe(Xc());
    Bf();
    Yu = Qe(Ha()), ve = Qe(Qa());
    eu();
    ri = Qe(uh()), k = Qe(mu()), t0 = Qe(mu()), Qi = Qe(Sh());
    Lh();
    e0 = Qe(tl()), r0 = Qe(wl()), n0 = Qe(xl());
    Al();
    Ol();
    Rm = ln.utils.randomPrivateKey, Nl = () => {
        let r = ln.utils.randomPrivateKey(),
            t = Es(r),
            e = new Uint8Array(64);
        return e.set(r), e.set(t, 32), {
            publicKey: t,
            secretKey: e
        }
    }, Es = ln.getPublicKey;
    gc = (r, t) => ln.sign(r, t.slice(0, 32)), Lm = ln.verify, lt = r => nt.Buffer.isBuffer(r) ? r : r instanceof Uint8Array ? nt.Buffer.from(r.buffer, r.byteOffset, r.byteLength) : nt.Buffer.from(r), Hi = class {
        constructor(t) {
            Object.assign(this, t)
        }
        encode() {
            return nt.Buffer.from((0, ri.serialize)(Wi, this))
        }
        static decode(t) {
            return (0, ri.deserialize)(Wi, this, t)
        }
        static decodeUnchecked(t) {
            return (0, ri.deserializeUnchecked)(Wi, this, t)
        }
    }, Zu = class extends Hi {
        constructor(t) {
            if (super(t), this.enum = "", Object.keys(t).length !== 1) throw new Error("Enum can only take single value");
            Object.keys(t).map(e => {
                this.enum = e
            })
        }
    }, Wi = new Map, s0 = 32, lr = 32;
    ql = 1;
    o0 = Symbol.toStringTag;
    Y = class r extends Hi {
        constructor(t) {
            if (super({}), this._bn = void 0, Tm(t)) this._bn = t._bn;
            else {
                if (typeof t == "string") {
                    let e = ve.default.decode(t);
                    if (e.length != lr) throw new Error("Invalid public key input");
                    this._bn = new Yu.default(e)
                } else this._bn = new Yu.default(t);
                if (this._bn.byteLength() > lr) throw new Error("Invalid public key input")
            }
        }
        static unique() {
            let t = new r(ql);
            return ql += 1, new r(t.toBuffer())
        }
        equals(t) {
            return this._bn.eq(t._bn)
        }
        toBase58() {
            return ve.default.encode(this.toBytes())
        }
        toJSON() {
            return this.toBase58()
        }
        toBytes() {
            let t = this.toBuffer();
            return new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
        }
        toBuffer() {
            let t = this._bn.toArrayLike(nt.Buffer);
            if (t.length === lr) return t;
            let e = nt.Buffer.alloc(32);
            return t.copy(e, 32 - t.length), e
        }
        get[o0]() {
            return `PublicKey(${this.toString()})`
        }
        toString() {
            return this.toBase58()
        }
        static createWithSeed(t, e, n) {
            return O(this, null, function*() {
                let i = nt.Buffer.concat([t.toBuffer(), nt.Buffer.from(e), n.toBuffer()]),
                    o = yi(i);
                return new r(o)
            })
        }
        static createProgramAddressSync(t, e) {
            let n = nt.Buffer.alloc(0);
            t.forEach(function(o) {
                if (o.length > s0) throw new TypeError("Max seed length exceeded");
                n = nt.Buffer.concat([n, lt(o)])
            }), n = nt.Buffer.concat([n, e.toBuffer(), nt.Buffer.from("ProgramDerivedAddress")]);
            let i = yi(n);
            if (Dl(i)) throw new Error("Invalid seeds, address must fall off the curve");
            return new r(i)
        }
        static createProgramAddress(t, e) {
            return O(this, null, function*() {
                return this.createProgramAddressSync(t, e)
            })
        }
        static findProgramAddressSync(t, e) {
            let n = 255,
                i;
            for (; n != 0;) {
                try {
                    let o = t.concat(nt.Buffer.from([n]));
                    i = this.createProgramAddressSync(o, e)
                } catch (o) {
                    if (o instanceof TypeError) throw o;
                    n--;
                    continue
                }
                return [i, n]
            }
            throw new Error("Unable to find a viable program address nonce")
        }
        static findProgramAddress(t, e) {
            return O(this, null, function*() {
                return this.findProgramAddressSync(t, e)
            })
        }
        static isOnCurve(t) {
            let e = new r(t);
            return Dl(e.toBytes())
        }
    };
    i0 = Y;
    Y.default = new i0("11111111111111111111111111111111");
    Wi.set(Y, {
        kind: "struct",
        fields: [
            ["_bn", "u256"]
        ]
    });
    Xu = class {
        constructor(t) {
            if (this._publicKey = void 0, this._secretKey = void 0, t) {
                let e = lt(t);
                if (t.length !== 64) throw new Error("bad secret key size");
                this._publicKey = e.slice(32, 64), this._secretKey = e.slice(0, 32)
            } else this._secretKey = lt(Rm()), this._publicKey = lt(Es(this._secretKey))
        }
        get publicKey() {
            return new Y(this._publicKey)
        }
        get secretKey() {
            return nt.Buffer.concat([this._secretKey, this._publicKey], 64)
        }
    }, Mm = new Y("BPFLoader1111111111111111111111111111111111"), nn = 1232, Ts = 127, $i = 64, Vi = class extends Error {
        constructor(t) {
            super(`Signature ${t} has expired: block height exceeded.`), this.signature = void 0, this.signature = t
        }
    };
    Object.defineProperty(Vi.prototype, "name", {
        value: "TransactionExpiredBlockheightExceededError"
    });
    Gi = class extends Error {
        constructor(t, e) {
            super(`Transaction was not confirmed in ${e.toFixed(2)} seconds. It is unknown if it succeeded or failed. Check signature ${t} using the Solana Explorer or CLI tools.`), this.signature = void 0, this.signature = t
        }
    };
    Object.defineProperty(Gi.prototype, "name", {
        value: "TransactionExpiredTimeoutError"
    });
    rn = class extends Error {
        constructor(t) {
            super(`Signature ${t} has expired: the nonce is no longer valid.`), this.signature = void 0, this.signature = t
        }
    };
    Object.defineProperty(rn.prototype, "name", {
        value: "TransactionExpiredNonceInvalidError"
    });
    kn = class {
        constructor(t, e) {
            this.staticAccountKeys = void 0, this.accountKeysFromLookups = void 0, this.staticAccountKeys = t, this.accountKeysFromLookups = e
        }
        keySegments() {
            let t = [this.staticAccountKeys];
            return this.accountKeysFromLookups && (t.push(this.accountKeysFromLookups.writable), t.push(this.accountKeysFromLookups.readonly)), t
        }
        get(t) {
            for (let e of this.keySegments()) {
                if (t < e.length) return e[t];
                t -= e.length
            }
        }
        get length() {
            return this.keySegments().flat().length
        }
        compileInstructions(t) {
            if (this.length > 256) throw new Error("Account index overflow encountered during compilation");
            let n = new Map;
            this.keySegments().flat().forEach((o, s) => {
                n.set(o.toBase58(), s)
            });
            let i = o => {
                let s = n.get(o.toBase58());
                if (s === void 0) throw new Error("Encountered an unknown instruction account key during compilation");
                return s
            };
            return t.map(o => ({
                programIdIndex: i(o.programId),
                accountKeyIndexes: o.keys.map(s => i(s.pubkey)),
                data: o.data
            }))
        }
    }, pt = (r = "publicKey") => k.blob(32, r), Um = (r = "signature") => k.blob(64, r), Bn = (r = "string") => {
        let t = k.struct([k.u32("length"), k.u32("lengthPadding"), k.blob(k.offset(k.u32(), -8), "chars")], r),
            e = t.decode.bind(t),
            n = t.encode.bind(t),
            i = t;
        return i.decode = (o, s) => e(o, s).chars.toString(), i.encode = (o, s, a) => {
            let c = {
                chars: nt.Buffer.from(o, "utf8")
            };
            return n(c, s, a)
        }, i.alloc = o => k.u32().span + k.u32().span + nt.Buffer.from(o, "utf8").length, i
    }, Pm = (r = "authorized") => k.struct([pt("staker"), pt("withdrawer")], r), Cm = (r = "lockup") => k.struct([k.ns64("unixTimestamp"), k.ns64("epoch"), pt("custodian")], r), Fm = (r = "voteInit") => k.struct([pt("nodePubkey"), pt("authorizedVoter"), pt("authorizedWithdrawer"), k.u8("commission")], r), Om = (r = "voteAuthorizeWithSeedArgs") => k.struct([k.u32("voteAuthorizationType"), pt("currentAuthorityDerivedKeyOwnerPubkey"), Bn("currentAuthorityDerivedKeySeed"), pt("newAuthorized")], r);
    Bs = class r {
        constructor(t, e) {
            this.payer = void 0, this.keyMetaMap = void 0, this.payer = t, this.keyMetaMap = e
        }
        static compile(t, e) {
            let n = new Map,
                i = s => {
                    let a = s.toBase58(),
                        c = n.get(a);
                    return c === void 0 && (c = {
                        isSigner: !1,
                        isWritable: !1,
                        isInvoked: !1
                    }, n.set(a, c)), c
                },
                o = i(e);
            o.isSigner = !0, o.isWritable = !0;
            for (let s of t) {
                i(s.programId).isInvoked = !0;
                for (let a of s.keys) {
                    let c = i(a.pubkey);
                    c.isSigner || = a.isSigner, c.isWritable || = a.isWritable
                }
            }
            return new r(e, n)
        }
        getMessageComponents() {
            let t = [...this.keyMetaMap.entries()];
            xt(t.length <= 256, "Max static account keys length exceeded");
            let e = t.filter(([, c]) => c.isSigner && c.isWritable),
                n = t.filter(([, c]) => c.isSigner && !c.isWritable),
                i = t.filter(([, c]) => !c.isSigner && c.isWritable),
                o = t.filter(([, c]) => !c.isSigner && !c.isWritable),
                s = {
                    numRequiredSignatures: e.length + n.length,
                    numReadonlySignedAccounts: n.length,
                    numReadonlyUnsignedAccounts: o.length
                }; {
                xt(e.length > 0, "Expected at least one writable signer key");
                let [c] = e[0];
                xt(c === this.payer.toBase58(), "Expected first writable signer key to be the fee payer")
            }
            let a = [...e.map(([c]) => new Y(c)), ...n.map(([c]) => new Y(c)), ...i.map(([c]) => new Y(c)), ...o.map(([c]) => new Y(c))];
            return [s, a]
        }
        extractTableLookup(t) {
            let [e, n] = this.drainKeysFoundInLookupTable(t.state.addresses, s => !s.isSigner && !s.isInvoked && s.isWritable), [i, o] = this.drainKeysFoundInLookupTable(t.state.addresses, s => !s.isSigner && !s.isInvoked && !s.isWritable);
            if (!(e.length === 0 && i.length === 0)) return [{
                accountKey: t.key,
                writableIndexes: e,
                readonlyIndexes: i
            }, {
                writable: n,
                readonly: o
            }]
        }
        drainKeysFoundInLookupTable(t, e) {
            let n = new Array,
                i = new Array;
            for (let [o, s] of this.keyMetaMap.entries())
                if (e(s)) {
                    let a = new Y(o),
                        c = t.findIndex(d => d.equals(a));
                    c >= 0 && (xt(c < 256, "Max lookup table index exceeded"), n.push(c), i.push(a), this.keyMetaMap.delete(o))
                }
            return [n, i]
        }
    }, dr = class r {
        constructor(t) {
            this.header = void 0, this.accountKeys = void 0, this.recentBlockhash = void 0, this.instructions = void 0, this.indexToProgramIds = new Map, this.header = t.header, this.accountKeys = t.accountKeys.map(e => new Y(e)), this.recentBlockhash = t.recentBlockhash, this.instructions = t.instructions, this.instructions.forEach(e => this.indexToProgramIds.set(e.programIdIndex, this.accountKeys[e.programIdIndex]))
        }
        get version() {
            return "legacy"
        }
        get staticAccountKeys() {
            return this.accountKeys
        }
        get compiledInstructions() {
            return this.instructions.map(t => ({
                programIdIndex: t.programIdIndex,
                accountKeyIndexes: t.accounts,
                data: ve.default.decode(t.data)
            }))
        }
        get addressTableLookups() {
            return []
        }
        getAccountKeys() {
            return new kn(this.staticAccountKeys)
        }
        static compile(t) {
            let e = Bs.compile(t.instructions, t.payerKey),
                [n, i] = e.getMessageComponents(),
                s = new kn(i).compileInstructions(t.instructions).map(a => ({
                    programIdIndex: a.programIdIndex,
                    accounts: a.accountKeyIndexes,
                    data: ve.default.encode(a.data)
                }));
            return new r({
                header: n,
                accountKeys: i,
                recentBlockhash: t.recentBlockhash,
                instructions: s
            })
        }
        isAccountSigner(t) {
            return t < this.header.numRequiredSignatures
        }
        isAccountWritable(t) {
            let e = this.header.numRequiredSignatures;
            if (t >= this.header.numRequiredSignatures) {
                let n = t - e,
                    o = this.accountKeys.length - e - this.header.numReadonlyUnsignedAccounts;
                return n < o
            } else {
                let n = e - this.header.numReadonlySignedAccounts;
                return t < n
            }
        }
        isProgramId(t) {
            return this.indexToProgramIds.has(t)
        }
        programIds() {
            return [...this.indexToProgramIds.values()]
        }
        nonProgramIds() {
            return this.accountKeys.filter((t, e) => !this.isProgramId(e))
        }
        serialize() {
            let t = this.accountKeys.length,
                e = [];
            $e(e, t);
            let n = this.instructions.map(b => {
                    let {
                        accounts: _,
                        programIdIndex: I
                    } = b, S = Array.from(ve.default.decode(b.data)), v = [];
                    $e(v, _.length);
                    let A = [];
                    return $e(A, S.length), {
                        programIdIndex: I,
                        keyIndicesCount: nt.Buffer.from(v),
                        keyIndices: _,
                        dataLength: nt.Buffer.from(A),
                        data: S
                    }
                }),
                i = [];
            $e(i, n.length);
            let o = nt.Buffer.alloc(nn);
            nt.Buffer.from(i).copy(o);
            let s = i.length;
            n.forEach(b => {
                let I = k.struct([k.u8("programIdIndex"), k.blob(b.keyIndicesCount.length, "keyIndicesCount"), k.seq(k.u8("keyIndex"), b.keyIndices.length, "keyIndices"), k.blob(b.dataLength.length, "dataLength"), k.seq(k.u8("userdatum"), b.data.length, "data")]).encode(b, o, s);
                s += I
            }), o = o.slice(0, s);
            let a = k.struct([k.blob(1, "numRequiredSignatures"), k.blob(1, "numReadonlySignedAccounts"), k.blob(1, "numReadonlyUnsignedAccounts"), k.blob(e.length, "keyCount"), k.seq(pt("key"), t, "keys"), pt("recentBlockhash")]),
                c = {
                    numRequiredSignatures: nt.Buffer.from([this.header.numRequiredSignatures]),
                    numReadonlySignedAccounts: nt.Buffer.from([this.header.numReadonlySignedAccounts]),
                    numReadonlyUnsignedAccounts: nt.Buffer.from([this.header.numReadonlyUnsignedAccounts]),
                    keyCount: nt.Buffer.from(e),
                    keys: this.accountKeys.map(b => lt(b.toBytes())),
                    recentBlockhash: ve.default.decode(this.recentBlockhash)
                },
                d = nt.Buffer.alloc(2048),
                g = a.encode(c, d);
            return o.copy(d, g), d.slice(0, g + o.length)
        }
        static from(t) {
            let e = [...t],
                n = e.shift();
            if (n !== (n & Ts)) throw new Error("Versioned messages must be deserialized with VersionedMessage.deserialize()");
            let i = e.shift(),
                o = e.shift(),
                s = Ke(e),
                a = [];
            for (let _ = 0; _ < s; _++) {
                let I = e.splice(0, lr);
                a.push(new Y(nt.Buffer.from(I)))
            }
            let c = e.splice(0, lr),
                d = Ke(e),
                g = [];
            for (let _ = 0; _ < d; _++) {
                let I = e.shift(),
                    S = Ke(e),
                    v = e.splice(0, S),
                    A = Ke(e),
                    T = e.splice(0, A),
                    z = ve.default.encode(nt.Buffer.from(T));
                g.push({
                    programIdIndex: I,
                    accounts: v,
                    data: z
                })
            }
            let b = {
                header: {
                    numRequiredSignatures: n,
                    numReadonlySignedAccounts: i,
                    numReadonlyUnsignedAccounts: o
                },
                recentBlockhash: ve.default.encode(nt.Buffer.from(c)),
                accountKeys: a,
                instructions: g
            };
            return new r(b)
        }
    }, Xn = class r {
        constructor(t) {
            this.header = void 0, this.staticAccountKeys = void 0, this.recentBlockhash = void 0, this.compiledInstructions = void 0, this.addressTableLookups = void 0, this.header = t.header, this.staticAccountKeys = t.staticAccountKeys, this.recentBlockhash = t.recentBlockhash, this.compiledInstructions = t.compiledInstructions, this.addressTableLookups = t.addressTableLookups
        }
        get version() {
            return 0
        }
        get numAccountKeysFromLookups() {
            let t = 0;
            for (let e of this.addressTableLookups) t += e.readonlyIndexes.length + e.writableIndexes.length;
            return t
        }
        getAccountKeys(t) {
            let e;
            if (t && "accountKeysFromLookups" in t && t.accountKeysFromLookups) {
                if (this.numAccountKeysFromLookups != t.accountKeysFromLookups.writable.length + t.accountKeysFromLookups.readonly.length) throw new Error("Failed to get account keys because of a mismatch in the number of account keys from lookups");
                e = t.accountKeysFromLookups
            } else if (t && "addressLookupTableAccounts" in t && t.addressLookupTableAccounts) e = this.resolveAddressTableLookups(t.addressLookupTableAccounts);
            else if (this.addressTableLookups.length > 0) throw new Error("Failed to get account keys because address table lookups were not resolved");
            return new kn(this.staticAccountKeys, e)
        }
        isAccountSigner(t) {
            return t < this.header.numRequiredSignatures
        }
        isAccountWritable(t) {
            let e = this.header.numRequiredSignatures,
                n = this.staticAccountKeys.length;
            if (t >= n) {
                let i = t - n,
                    o = this.addressTableLookups.reduce((s, a) => s + a.writableIndexes.length, 0);
                return i < o
            } else if (t >= this.header.numRequiredSignatures) {
                let i = t - e,
                    s = n - e - this.header.numReadonlyUnsignedAccounts;
                return i < s
            } else {
                let i = e - this.header.numReadonlySignedAccounts;
                return t < i
            }
        }
        resolveAddressTableLookups(t) {
            let e = {
                writable: [],
                readonly: []
            };
            for (let n of this.addressTableLookups) {
                let i = t.find(o => o.key.equals(n.accountKey));
                if (!i) throw new Error(`Failed to find address lookup table account for table key ${n.accountKey.toBase58()}`);
                for (let o of n.writableIndexes)
                    if (o < i.state.addresses.length) e.writable.push(i.state.addresses[o]);
                    else throw new Error(`Failed to find address for index ${o} in address lookup table ${n.accountKey.toBase58()}`);
                for (let o of n.readonlyIndexes)
                    if (o < i.state.addresses.length) e.readonly.push(i.state.addresses[o]);
                    else throw new Error(`Failed to find address for index ${o} in address lookup table ${n.accountKey.toBase58()}`)
            }
            return e
        }
        static compile(t) {
            let e = Bs.compile(t.instructions, t.payerKey),
                n = new Array,
                i = {
                    writable: new Array,
                    readonly: new Array
                },
                o = t.addressLookupTableAccounts || [];
            for (let g of o) {
                let b = e.extractTableLookup(g);
                if (b !== void 0) {
                    let [_, {
                        writable: I,
                        readonly: S
                    }] = b;
                    n.push(_), i.writable.push(...I), i.readonly.push(...S)
                }
            }
            let [s, a] = e.getMessageComponents(), d = new kn(a, i).compileInstructions(t.instructions);
            return new r({
                header: s,
                staticAccountKeys: a,
                recentBlockhash: t.recentBlockhash,
                compiledInstructions: d,
                addressTableLookups: n
            })
        }
        serialize() {
            let t = Array();
            $e(t, this.staticAccountKeys.length);
            let e = this.serializeInstructions(),
                n = Array();
            $e(n, this.compiledInstructions.length);
            let i = this.serializeAddressTableLookups(),
                o = Array();
            $e(o, this.addressTableLookups.length);
            let s = k.struct([k.u8("prefix"), k.struct([k.u8("numRequiredSignatures"), k.u8("numReadonlySignedAccounts"), k.u8("numReadonlyUnsignedAccounts")], "header"), k.blob(t.length, "staticAccountKeysLength"), k.seq(pt(), this.staticAccountKeys.length, "staticAccountKeys"), pt("recentBlockhash"), k.blob(n.length, "instructionsLength"), k.blob(e.length, "serializedInstructions"), k.blob(o.length, "addressTableLookupsLength"), k.blob(i.length, "serializedAddressTableLookups")]),
                a = new Uint8Array(nn),
                d = s.encode({
                    prefix: 128,
                    header: this.header,
                    staticAccountKeysLength: new Uint8Array(t),
                    staticAccountKeys: this.staticAccountKeys.map(g => g.toBytes()),
                    recentBlockhash: ve.default.decode(this.recentBlockhash),
                    instructionsLength: new Uint8Array(n),
                    serializedInstructions: e,
                    addressTableLookupsLength: new Uint8Array(o),
                    serializedAddressTableLookups: i
                }, a);
            return a.slice(0, d)
        }
        serializeInstructions() {
            let t = 0,
                e = new Uint8Array(nn);
            for (let n of this.compiledInstructions) {
                let i = Array();
                $e(i, n.accountKeyIndexes.length);
                let o = Array();
                $e(o, n.data.length);
                let s = k.struct([k.u8("programIdIndex"), k.blob(i.length, "encodedAccountKeyIndexesLength"), k.seq(k.u8(), n.accountKeyIndexes.length, "accountKeyIndexes"), k.blob(o.length, "encodedDataLength"), k.blob(n.data.length, "data")]);
                t += s.encode({
                    programIdIndex: n.programIdIndex,
                    encodedAccountKeyIndexesLength: new Uint8Array(i),
                    accountKeyIndexes: n.accountKeyIndexes,
                    encodedDataLength: new Uint8Array(o),
                    data: n.data
                }, e, t)
            }
            return e.slice(0, t)
        }
        serializeAddressTableLookups() {
            let t = 0,
                e = new Uint8Array(nn);
            for (let n of this.addressTableLookups) {
                let i = Array();
                $e(i, n.writableIndexes.length);
                let o = Array();
                $e(o, n.readonlyIndexes.length);
                let s = k.struct([pt("accountKey"), k.blob(i.length, "encodedWritableIndexesLength"), k.seq(k.u8(), n.writableIndexes.length, "writableIndexes"), k.blob(o.length, "encodedReadonlyIndexesLength"), k.seq(k.u8(), n.readonlyIndexes.length, "readonlyIndexes")]);
                t += s.encode({
                    accountKey: n.accountKey.toBytes(),
                    encodedWritableIndexesLength: new Uint8Array(i),
                    writableIndexes: n.writableIndexes,
                    encodedReadonlyIndexesLength: new Uint8Array(o),
                    readonlyIndexes: n.readonlyIndexes
                }, e, t)
            }
            return e.slice(0, t)
        }
        static deserialize(t) {
            let e = [...t],
                n = e.shift(),
                i = n & Ts;
            xt(n !== i, "Expected versioned message but received legacy message");
            let o = i;
            xt(o === 0, `Expected versioned message with version 0 but found version ${o}`);
            let s = {
                    numRequiredSignatures: e.shift(),
                    numReadonlySignedAccounts: e.shift(),
                    numReadonlyUnsignedAccounts: e.shift()
                },
                a = [],
                c = Ke(e);
            for (let S = 0; S < c; S++) a.push(new Y(e.splice(0, lr)));
            let d = ve.default.encode(e.splice(0, lr)),
                g = Ke(e),
                b = [];
            for (let S = 0; S < g; S++) {
                let v = e.shift(),
                    A = Ke(e),
                    T = e.splice(0, A),
                    z = Ke(e),
                    N = new Uint8Array(e.splice(0, z));
                b.push({
                    programIdIndex: v,
                    accountKeyIndexes: T,
                    data: N
                })
            }
            let _ = Ke(e),
                I = [];
            for (let S = 0; S < _; S++) {
                let v = new Y(e.splice(0, lr)),
                    A = Ke(e),
                    T = e.splice(0, A),
                    z = Ke(e),
                    N = e.splice(0, z);
                I.push({
                    accountKey: v,
                    writableIndexes: T,
                    readonlyIndexes: N
                })
            }
            return new r({
                header: s,
                staticAccountKeys: a,
                recentBlockhash: d,
                compiledInstructions: b,
                addressTableLookups: I
            })
        }
    }, mc = {
        deserializeMessageVersion(r) {
            let t = r[0],
                e = t & Ts;
            return e === t ? "legacy" : e
        },
        deserialize: r => {
            let t = mc.deserializeMessageVersion(r);
            if (t === "legacy") return dr.from(r);
            if (t === 0) return Xn.deserialize(r);
            throw new Error(`Transaction message version ${t} deserialization is not supported`)
        }
    }, Tr = function(r) {
        return r[r.BLOCKHEIGHT_EXCEEDED = 0] = "BLOCKHEIGHT_EXCEEDED", r[r.PROCESSED = 1] = "PROCESSED", r[r.TIMED_OUT = 2] = "TIMED_OUT", r[r.NONCE_INVALID = 3] = "NONCE_INVALID", r
    }({}), Nm = nt.Buffer.alloc($i).fill(0), St = class {
        constructor(t) {
            this.keys = void 0, this.programId = void 0, this.data = nt.Buffer.alloc(0), this.programId = t.programId, this.keys = t.keys, t.data && (this.data = t.data)
        }
        toJSON() {
            return {
                keys: this.keys.map(({
                    pubkey: t,
                    isSigner: e,
                    isWritable: n
                }) => ({
                    pubkey: t.toJSON(),
                    isSigner: e,
                    isWritable: n
                })),
                programId: this.programId.toJSON(),
                data: [...this.data]
            }
        }
    }, It = class r {
        get signature() {
            return this.signatures.length > 0 ? this.signatures[0].signature : null
        }
        constructor(t) {
            if (this.signatures = [], this.feePayer = void 0, this.instructions = [], this.recentBlockhash = void 0, this.lastValidBlockHeight = void 0, this.nonceInfo = void 0, this.minNonceContextSlot = void 0, this._message = void 0, this._json = void 0, !!t)
                if (t.feePayer && (this.feePayer = t.feePayer), t.signatures && (this.signatures = t.signatures), Object.prototype.hasOwnProperty.call(t, "nonceInfo")) {
                    let {
                        minContextSlot: e,
                        nonceInfo: n
                    } = t;
                    this.minNonceContextSlot = e, this.nonceInfo = n
                } else if (Object.prototype.hasOwnProperty.call(t, "lastValidBlockHeight")) {
                let {
                    blockhash: e,
                    lastValidBlockHeight: n
                } = t;
                this.recentBlockhash = e, this.lastValidBlockHeight = n
            } else {
                let {
                    recentBlockhash: e,
                    nonceInfo: n
                } = t;
                n && (this.nonceInfo = n), this.recentBlockhash = e
            }
        }
        toJSON() {
            return {
                recentBlockhash: this.recentBlockhash || null,
                feePayer: this.feePayer ? this.feePayer.toJSON() : null,
                nonceInfo: this.nonceInfo ? {
                    nonce: this.nonceInfo.nonce,
                    nonceInstruction: this.nonceInfo.nonceInstruction.toJSON()
                } : null,
                instructions: this.instructions.map(t => t.toJSON()),
                signers: this.signatures.map(({
                    publicKey: t
                }) => t.toJSON())
            }
        }
        add(...t) {
            if (t.length === 0) throw new Error("No instructions");
            return t.forEach(e => {
                "instructions" in e ? this.instructions = this.instructions.concat(e.instructions) : "data" in e && "programId" in e && "keys" in e ? this.instructions.push(e) : this.instructions.push(new St(e))
            }), this
        }
        compileMessage() {
            if (this._message && JSON.stringify(this.toJSON()) === JSON.stringify(this._json)) return this._message;
            let t, e;
            if (this.nonceInfo ? (t = this.nonceInfo.nonce, this.instructions[0] != this.nonceInfo.nonceInstruction ? e = [this.nonceInfo.nonceInstruction, ...this.instructions] : e = this.instructions) : (t = this.recentBlockhash, e = this.instructions), !t) throw new Error("Transaction recentBlockhash required");
            e.length < 1 && console.warn("No instructions provided");
            let n;
            if (this.feePayer) n = this.feePayer;
            else if (this.signatures.length > 0 && this.signatures[0].publicKey) n = this.signatures[0].publicKey;
            else throw new Error("Transaction fee payer required");
            for (let v = 0; v < e.length; v++)
                if (e[v].programId === void 0) throw new Error(`Transaction instruction index ${v} has undefined program id`);
            let i = [],
                o = [];
            e.forEach(v => {
                v.keys.forEach(T => {
                    o.push(st({}, T))
                });
                let A = v.programId.toString();
                i.includes(A) || i.push(A)
            }), i.forEach(v => {
                o.push({
                    pubkey: new Y(v),
                    isSigner: !1,
                    isWritable: !1
                })
            });
            let s = [];
            o.forEach(v => {
                let A = v.pubkey.toString(),
                    T = s.findIndex(z => z.pubkey.toString() === A);
                T > -1 ? (s[T].isWritable = s[T].isWritable || v.isWritable, s[T].isSigner = s[T].isSigner || v.isSigner) : s.push(v)
            }), s.sort(function(v, A) {
                if (v.isSigner !== A.isSigner) return v.isSigner ? -1 : 1;
                if (v.isWritable !== A.isWritable) return v.isWritable ? -1 : 1;
                let T = {
                    localeMatcher: "best fit",
                    usage: "sort",
                    sensitivity: "variant",
                    ignorePunctuation: !1,
                    numeric: !1,
                    caseFirst: "lower"
                };
                return v.pubkey.toBase58().localeCompare(A.pubkey.toBase58(), "en", T)
            });
            let a = s.findIndex(v => v.pubkey.equals(n));
            if (a > -1) {
                let [v] = s.splice(a, 1);
                v.isSigner = !0, v.isWritable = !0, s.unshift(v)
            } else s.unshift({
                pubkey: n,
                isSigner: !0,
                isWritable: !0
            });
            for (let v of this.signatures) {
                let A = s.findIndex(T => T.pubkey.equals(v.publicKey));
                if (A > -1) s[A].isSigner || (s[A].isSigner = !0, console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."));
                else throw new Error(`unknown signer: ${v.publicKey.toString()}`)
            }
            let c = 0,
                d = 0,
                g = 0,
                b = [],
                _ = [];
            s.forEach(({
                pubkey: v,
                isSigner: A,
                isWritable: T
            }) => {
                A ? (b.push(v.toString()), c += 1, T || (d += 1)) : (_.push(v.toString()), T || (g += 1))
            });
            let I = b.concat(_),
                S = e.map(v => {
                    let {
                        data: A,
                        programId: T
                    } = v;
                    return {
                        programIdIndex: I.indexOf(T.toString()),
                        accounts: v.keys.map(z => I.indexOf(z.pubkey.toString())),
                        data: ve.default.encode(A)
                    }
                });
            return S.forEach(v => {
                xt(v.programIdIndex >= 0), v.accounts.forEach(A => xt(A >= 0))
            }), new dr({
                header: {
                    numRequiredSignatures: c,
                    numReadonlySignedAccounts: d,
                    numReadonlyUnsignedAccounts: g
                },
                accountKeys: I,
                recentBlockhash: t,
                instructions: S
            })
        }
        _compile() {
            let t = this.compileMessage(),
                e = t.accountKeys.slice(0, t.header.numRequiredSignatures);
            return this.signatures.length === e.length && this.signatures.every((i, o) => e[o].equals(i.publicKey)) || (this.signatures = e.map(n => ({
                signature: null,
                publicKey: n
            }))), t
        }
        serializeMessage() {
            return this._compile().serialize()
        }
        getEstimatedFee(t) {
            return O(this, null, function*() {
                return (yield t.getFeeForMessage(this.compileMessage())).value
            })
        }
        setSigners(...t) {
            if (t.length === 0) throw new Error("No signers");
            let e = new Set;
            this.signatures = t.filter(n => {
                let i = n.toString();
                return e.has(i) ? !1 : (e.add(i), !0)
            }).map(n => ({
                signature: null,
                publicKey: n
            }))
        }
        sign(...t) {
            if (t.length === 0) throw new Error("No signers");
            let e = new Set,
                n = [];
            for (let o of t) {
                let s = o.publicKey.toString();
                e.has(s) || (e.add(s), n.push(o))
            }
            this.signatures = n.map(o => ({
                signature: null,
                publicKey: o.publicKey
            }));
            let i = this._compile();
            this._partialSign(i, ...n)
        }
        partialSign(...t) {
            if (t.length === 0) throw new Error("No signers");
            let e = new Set,
                n = [];
            for (let o of t) {
                let s = o.publicKey.toString();
                e.has(s) || (e.add(s), n.push(o))
            }
            let i = this._compile();
            this._partialSign(i, ...n)
        }
        _partialSign(t, ...e) {
            let n = t.serialize();
            e.forEach(i => {
                let o = gc(n, i.secretKey);
                this._addSignature(i.publicKey, lt(o))
            })
        }
        addSignature(t, e) {
            this._compile(), this._addSignature(t, e)
        }
        _addSignature(t, e) {
            xt(e.length === 64);
            let n = this.signatures.findIndex(i => t.equals(i.publicKey));
            if (n < 0) throw new Error(`unknown signer: ${t.toString()}`);
            this.signatures[n].signature = nt.Buffer.from(e)
        }
        verifySignatures(t = !0) {
            return !this._getMessageSignednessErrors(this.serializeMessage(), t)
        }
        _getMessageSignednessErrors(t, e) {
            let n = {};
            for (let {
                    signature: i,
                    publicKey: o
                } of this.signatures) i === null ? e && (n.missing || = []).push(o) : Lm(i, t, o.toBytes()) || (n.invalid || = []).push(o);
            return n.invalid || n.missing ? n : void 0
        }
        serialize(t) {
            let {
                requireAllSignatures: e,
                verifySignatures: n
            } = Object.assign({
                requireAllSignatures: !0,
                verifySignatures: !0
            }, t), i = this.serializeMessage();
            if (n) {
                let o = this._getMessageSignednessErrors(i, e);
                if (o) {
                    let s = "Signature verification failed.";
                    throw o.invalid && (s += `
Invalid signature for public key${o.invalid.length===1?"":"(s)"} [\`${o.invalid.map(a=>a.toBase58()).join("`, `")}\`].`), o.missing && (s += `
Missing signature for public key${o.missing.length===1?"":"(s)"} [\`${o.missing.map(a=>a.toBase58()).join("`, `")}\`].`), new Error(s)
                }
            }
            return this._serialize(i)
        }
        _serialize(t) {
            let {
                signatures: e
            } = this, n = [];
            $e(n, e.length);
            let i = n.length + e.length * 64 + t.length,
                o = nt.Buffer.alloc(i);
            return xt(e.length < 256), nt.Buffer.from(n).copy(o, 0), e.forEach(({
                signature: s
            }, a) => {
                s !== null && (xt(s.length === 64, "signature has invalid length"), nt.Buffer.from(s).copy(o, n.length + a * 64))
            }), t.copy(o, n.length + e.length * 64), xt(o.length <= nn, `Transaction too large: ${o.length} > ${nn}`), o
        }
        get keys() {
            return xt(this.instructions.length === 1), this.instructions[0].keys.map(t => t.pubkey)
        }
        get programId() {
            return xt(this.instructions.length === 1), this.instructions[0].programId
        }
        get data() {
            return xt(this.instructions.length === 1), this.instructions[0].data
        }
        static from(t) {
            let e = [...t],
                n = Ke(e),
                i = [];
            for (let o = 0; o < n; o++) {
                let s = e.splice(0, $i);
                i.push(ve.default.encode(nt.Buffer.from(s)))
            }
            return r.populate(dr.from(e), i)
        }
        static populate(t, e = []) {
            let n = new r;
            return n.recentBlockhash = t.recentBlockhash, t.header.numRequiredSignatures > 0 && (n.feePayer = t.accountKeys[0]), e.forEach((i, o) => {
                let s = {
                    signature: i == ve.default.encode(Nm) ? null : ve.default.decode(i),
                    publicKey: t.accountKeys[o]
                };
                n.signatures.push(s)
            }), t.instructions.forEach(i => {
                let o = i.accounts.map(s => {
                    let a = t.accountKeys[s];
                    return {
                        pubkey: a,
                        isSigner: n.signatures.some(c => c.publicKey.toString() === a.toString()) || t.isAccountSigner(s),
                        isWritable: t.isAccountWritable(s)
                    }
                });
                n.instructions.push(new St({
                    keys: o,
                    programId: t.accountKeys[i.programIdIndex],
                    data: ve.default.decode(i.data)
                }))
            }), n._message = t, n._json = n.toJSON(), n
        }
    }, Ju = class r {
        constructor(t) {
            this.payerKey = void 0, this.instructions = void 0, this.recentBlockhash = void 0, this.payerKey = t.payerKey, this.instructions = t.instructions, this.recentBlockhash = t.recentBlockhash
        }
        static decompile(t, e) {
            let {
                header: n,
                compiledInstructions: i,
                recentBlockhash: o
            } = t, {
                numRequiredSignatures: s,
                numReadonlySignedAccounts: a,
                numReadonlyUnsignedAccounts: c
            } = n, d = s - a;
            xt(d > 0, "Message header is invalid");
            let g = t.staticAccountKeys.length - s - c;
            xt(g >= 0, "Message header is invalid");
            let b = t.getAccountKeys(e),
                _ = b.get(0);
            if (_ === void 0) throw new Error("Failed to decompile message because no account keys were found");
            let I = [];
            for (let S of i) {
                let v = [];
                for (let T of S.accountKeyIndexes) {
                    let z = b.get(T);
                    if (z === void 0) throw new Error(`Failed to find key for account key index ${T}`);
                    let N = T < s,
                        G;
                    N ? G = T < d : T < b.staticAccountKeys.length ? G = T - s < g : G = T - b.staticAccountKeys.length < b.accountKeysFromLookups.writable.length, v.push({
                        pubkey: z,
                        isSigner: T < n.numRequiredSignatures,
                        isWritable: G
                    })
                }
                let A = b.get(S.programIdIndex);
                if (A === void 0) throw new Error(`Failed to find program id for program id index ${S.programIdIndex}`);
                I.push(new St({
                    programId: A,
                    data: lt(S.data),
                    keys: v
                }))
            }
            return new r({
                payerKey: _,
                instructions: I,
                recentBlockhash: o
            })
        }
        compileToLegacyMessage() {
            return dr.compile({
                payerKey: this.payerKey,
                recentBlockhash: this.recentBlockhash,
                instructions: this.instructions
            })
        }
        compileToV0Message(t) {
            return Xn.compile({
                payerKey: this.payerKey,
                recentBlockhash: this.recentBlockhash,
                instructions: this.instructions,
                addressLookupTableAccounts: t
            })
        }
    }, Qu = class r {
        get version() {
            return this.message.version
        }
        constructor(t, e) {
            if (this.signatures = void 0, this.message = void 0, e !== void 0) xt(e.length === t.header.numRequiredSignatures, "Expected signatures length to be equal to the number of required signatures"), this.signatures = e;
            else {
                let n = [];
                for (let i = 0; i < t.header.numRequiredSignatures; i++) n.push(new Uint8Array($i));
                this.signatures = n
            }
            this.message = t
        }
        serialize() {
            let t = this.message.serialize(),
                e = Array();
            $e(e, this.signatures.length);
            let n = k.struct([k.blob(e.length, "encodedSignaturesLength"), k.seq(Um(), this.signatures.length, "signatures"), k.blob(t.length, "serializedMessage")]),
                i = new Uint8Array(2048),
                o = n.encode({
                    encodedSignaturesLength: new Uint8Array(e),
                    signatures: this.signatures,
                    serializedMessage: t
                }, i);
            return i.slice(0, o)
        }
        static deserialize(t) {
            let e = [...t],
                n = [],
                i = Ke(e);
            for (let s = 0; s < i; s++) n.push(new Uint8Array(e.splice(0, $i)));
            let o = mc.deserialize(new Uint8Array(e));
            return new r(o, n)
        }
        sign(t) {
            let e = this.message.serialize(),
                n = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures);
            for (let i of t) {
                let o = n.findIndex(s => s.equals(i.publicKey));
                xt(o >= 0, `Cannot sign with non signer key ${i.publicKey.toBase58()}`), this.signatures[o] = gc(e, i.secretKey)
            }
        }
        addSignature(t, e) {
            xt(e.byteLength === 64, "Signature must be 64 bytes long");
            let i = this.message.staticAccountKeys.slice(0, this.message.header.numRequiredSignatures).findIndex(o => o.equals(t));
            xt(i >= 0, `Can not add signature; \`${t.toBase58()}\` is not required to sign this transaction`), this.signatures[i] = e
        }
    }, Dm = 160, qm = 64, zm = Dm / qm, u0 = 1e3 / zm, cr = new Y("SysvarC1ock11111111111111111111111111111111"), Km = new Y("SysvarEpochSchedu1e111111111111111111111111"), Wm = new Y("Sysvar1nstructions1111111111111111111111111"), bs = new Y("SysvarRecentB1ockHashes11111111111111111111"), Jn = new Y("SysvarRent111111111111111111111111111111111"), Hm = new Y("SysvarRewards111111111111111111111111111111"), $m = new Y("SysvarS1otHashes111111111111111111111111111"), Vm = new Y("SysvarS1otHistory11111111111111111111111111"), xs = new Y("SysvarStakeHistory1111111111111111111111111");
    c0 = k.nu64("lamportsPerSignature"), f0 = k.struct([k.u32("version"), k.u32("state"), pt("authorizedPubkey"), pt("nonce"), k.struct([c0], "feeCalculator")]), ec = f0.span, ks = class r {
        constructor(t) {
            this.authorizedPubkey = void 0, this.nonce = void 0, this.feeCalculator = void 0, this.authorizedPubkey = t.authorizedPubkey, this.nonce = t.nonce, this.feeCalculator = t.feeCalculator
        }
        static fromAccountData(t) {
            let e = f0.decode(lt(t), 0);
            return new r({
                authorizedPubkey: new Y(e.authorizedPubkey),
                nonce: new Y(e.nonce).toString(),
                feeCalculator: e.feeCalculator
            })
        }
    }, Gm = r => {
        let t = r.decode.bind(r),
            e = r.encode.bind(r);
        return {
            decode: t,
            encode: e
        }
    }, jm = r => t => {
        let e = (0, t0.blob)(r, t),
            {
                encode: n,
                decode: i
            } = Gm(e),
            o = e;
        return o.decode = (s, a) => {
            let c = i(s, a);
            return (0, Qi.toBigIntLE)(nt.Buffer.from(c))
        }, o.encode = (s, a, c) => {
            let d = (0, Qi.toBufferLE)(s, r);
            return n(d, a, c)
        }, o
    }, Qn = jm(8), rc = class {
        constructor() {}
        static decodeInstructionType(t) {
            this.checkProgramId(t.programId);
            let n = k.u32("instruction").decode(t.data),
                i;
            for (let [o, s] of Object.entries(Tt))
                if (s.index == n) {
                    i = o;
                    break
                }
            if (!i) throw new Error("Instruction type incorrect; not a SystemInstruction");
            return i
        }
        static decodeCreateAccount(t) {
            this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
            let {
                lamports: e,
                space: n,
                programId: i
            } = vt(Tt.Create, t.data);
            return {
                fromPubkey: t.keys[0].pubkey,
                newAccountPubkey: t.keys[1].pubkey,
                lamports: e,
                space: n,
                programId: new Y(i)
            }
        }
        static decodeTransfer(t) {
            this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
            let {
                lamports: e
            } = vt(Tt.Transfer, t.data);
            return {
                fromPubkey: t.keys[0].pubkey,
                toPubkey: t.keys[1].pubkey,
                lamports: e
            }
        }
        static decodeTransferWithSeed(t) {
            this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
            let {
                lamports: e,
                seed: n,
                programId: i
            } = vt(Tt.TransferWithSeed, t.data);
            return {
                fromPubkey: t.keys[0].pubkey,
                basePubkey: t.keys[1].pubkey,
                toPubkey: t.keys[2].pubkey,
                lamports: e,
                seed: n,
                programId: new Y(i)
            }
        }
        static decodeAllocate(t) {
            this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1);
            let {
                space: e
            } = vt(Tt.Allocate, t.data);
            return {
                accountPubkey: t.keys[0].pubkey,
                space: e
            }
        }
        static decodeAllocateWithSeed(t) {
            this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1);
            let {
                base: e,
                seed: n,
                space: i,
                programId: o
            } = vt(Tt.AllocateWithSeed, t.data);
            return {
                accountPubkey: t.keys[0].pubkey,
                basePubkey: new Y(e),
                seed: n,
                space: i,
                programId: new Y(o)
            }
        }
        static decodeAssign(t) {
            this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1);
            let {
                programId: e
            } = vt(Tt.Assign, t.data);
            return {
                accountPubkey: t.keys[0].pubkey,
                programId: new Y(e)
            }
        }
        static decodeAssignWithSeed(t) {
            this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 1);
            let {
                base: e,
                seed: n,
                programId: i
            } = vt(Tt.AssignWithSeed, t.data);
            return {
                accountPubkey: t.keys[0].pubkey,
                basePubkey: new Y(e),
                seed: n,
                programId: new Y(i)
            }
        }
        static decodeCreateWithSeed(t) {
            this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
            let {
                base: e,
                seed: n,
                lamports: i,
                space: o,
                programId: s
            } = vt(Tt.CreateWithSeed, t.data);
            return {
                fromPubkey: t.keys[0].pubkey,
                newAccountPubkey: t.keys[1].pubkey,
                basePubkey: new Y(e),
                seed: n,
                lamports: i,
                space: o,
                programId: new Y(s)
            }
        }
        static decodeNonceInitialize(t) {
            this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
            let {
                authorized: e
            } = vt(Tt.InitializeNonceAccount, t.data);
            return {
                noncePubkey: t.keys[0].pubkey,
                authorizedPubkey: new Y(e)
            }
        }
        static decodeNonceAdvance(t) {
            return this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3), vt(Tt.AdvanceNonceAccount, t.data), {
                noncePubkey: t.keys[0].pubkey,
                authorizedPubkey: t.keys[2].pubkey
            }
        }
        static decodeNonceWithdraw(t) {
            this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 5);
            let {
                lamports: e
            } = vt(Tt.WithdrawNonceAccount, t.data);
            return {
                noncePubkey: t.keys[0].pubkey,
                toPubkey: t.keys[1].pubkey,
                authorizedPubkey: t.keys[4].pubkey,
                lamports: e
            }
        }
        static decodeNonceAuthorize(t) {
            this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
            let {
                authorized: e
            } = vt(Tt.AuthorizeNonceAccount, t.data);
            return {
                noncePubkey: t.keys[0].pubkey,
                authorizedPubkey: t.keys[1].pubkey,
                newAuthorizedPubkey: new Y(e)
            }
        }
        static checkProgramId(t) {
            if (!t.equals(Ae.programId)) throw new Error("invalid instruction; programId is not SystemProgram")
        }
        static checkKeyLength(t, e) {
            if (t.length < e) throw new Error(`invalid instruction; found ${t.length} keys, expected at least ${e}`)
        }
    }, Tt = Object.freeze({
        Create: {
            index: 0,
            layout: k.struct([k.u32("instruction"), k.ns64("lamports"), k.ns64("space"), pt("programId")])
        },
        Assign: {
            index: 1,
            layout: k.struct([k.u32("instruction"), pt("programId")])
        },
        Transfer: {
            index: 2,
            layout: k.struct([k.u32("instruction"), Qn("lamports")])
        },
        CreateWithSeed: {
            index: 3,
            layout: k.struct([k.u32("instruction"), pt("base"), Bn("seed"), k.ns64("lamports"), k.ns64("space"), pt("programId")])
        },
        AdvanceNonceAccount: {
            index: 4,
            layout: k.struct([k.u32("instruction")])
        },
        WithdrawNonceAccount: {
            index: 5,
            layout: k.struct([k.u32("instruction"), k.ns64("lamports")])
        },
        InitializeNonceAccount: {
            index: 6,
            layout: k.struct([k.u32("instruction"), pt("authorized")])
        },
        AuthorizeNonceAccount: {
            index: 7,
            layout: k.struct([k.u32("instruction"), pt("authorized")])
        },
        Allocate: {
            index: 8,
            layout: k.struct([k.u32("instruction"), k.ns64("space")])
        },
        AllocateWithSeed: {
            index: 9,
            layout: k.struct([k.u32("instruction"), pt("base"), Bn("seed"), k.ns64("space"), pt("programId")])
        },
        AssignWithSeed: {
            index: 10,
            layout: k.struct([k.u32("instruction"), pt("base"), Bn("seed"), pt("programId")])
        },
        TransferWithSeed: {
            index: 11,
            layout: k.struct([k.u32("instruction"), Qn("lamports"), Bn("seed"), pt("programId")])
        },
        UpgradeNonceAccount: {
            index: 12,
            layout: k.struct([k.u32("instruction")])
        }
    }), Ae = class r {
        constructor() {}
        static createAccount(t) {
            let e = Tt.Create,
                n = gt(e, {
                    lamports: t.lamports,
                    space: t.space,
                    programId: lt(t.programId.toBuffer())
                });
            return new St({
                keys: [{
                    pubkey: t.fromPubkey,
                    isSigner: !0,
                    isWritable: !0
                }, {
                    pubkey: t.newAccountPubkey,
                    isSigner: !0,
                    isWritable: !0
                }],
                programId: this.programId,
                data: n
            })
        }
        static transfer(t) {
            let e, n;
            if ("basePubkey" in t) {
                let i = Tt.TransferWithSeed;
                e = gt(i, {
                    lamports: BigInt(t.lamports),
                    seed: t.seed,
                    programId: lt(t.programId.toBuffer())
                }), n = [{
                    pubkey: t.fromPubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: t.basePubkey,
                    isSigner: !0,
                    isWritable: !1
                }, {
                    pubkey: t.toPubkey,
                    isSigner: !1,
                    isWritable: !0
                }]
            } else {
                let i = Tt.Transfer;
                e = gt(i, {
                    lamports: BigInt(t.lamports)
                }), n = [{
                    pubkey: t.fromPubkey,
                    isSigner: !0,
                    isWritable: !0
                }, {
                    pubkey: t.toPubkey,
                    isSigner: !1,
                    isWritable: !0
                }]
            }
            return new St({
                keys: n,
                programId: this.programId,
                data: e
            })
        }
        static assign(t) {
            let e, n;
            if ("basePubkey" in t) {
                let i = Tt.AssignWithSeed;
                e = gt(i, {
                    base: lt(t.basePubkey.toBuffer()),
                    seed: t.seed,
                    programId: lt(t.programId.toBuffer())
                }), n = [{
                    pubkey: t.accountPubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: t.basePubkey,
                    isSigner: !0,
                    isWritable: !1
                }]
            } else {
                let i = Tt.Assign;
                e = gt(i, {
                    programId: lt(t.programId.toBuffer())
                }), n = [{
                    pubkey: t.accountPubkey,
                    isSigner: !0,
                    isWritable: !0
                }]
            }
            return new St({
                keys: n,
                programId: this.programId,
                data: e
            })
        }
        static createAccountWithSeed(t) {
            let e = Tt.CreateWithSeed,
                n = gt(e, {
                    base: lt(t.basePubkey.toBuffer()),
                    seed: t.seed,
                    lamports: t.lamports,
                    space: t.space,
                    programId: lt(t.programId.toBuffer())
                }),
                i = [{
                    pubkey: t.fromPubkey,
                    isSigner: !0,
                    isWritable: !0
                }, {
                    pubkey: t.newAccountPubkey,
                    isSigner: !1,
                    isWritable: !0
                }];
            return t.basePubkey != t.fromPubkey && i.push({
                pubkey: t.basePubkey,
                isSigner: !0,
                isWritable: !1
            }), new St({
                keys: i,
                programId: this.programId,
                data: n
            })
        }
        static createNonceAccount(t) {
            let e = new It;
            "basePubkey" in t && "seed" in t ? e.add(r.createAccountWithSeed({
                fromPubkey: t.fromPubkey,
                newAccountPubkey: t.noncePubkey,
                basePubkey: t.basePubkey,
                seed: t.seed,
                lamports: t.lamports,
                space: ec,
                programId: this.programId
            })) : e.add(r.createAccount({
                fromPubkey: t.fromPubkey,
                newAccountPubkey: t.noncePubkey,
                lamports: t.lamports,
                space: ec,
                programId: this.programId
            }));
            let n = {
                noncePubkey: t.noncePubkey,
                authorizedPubkey: t.authorizedPubkey
            };
            return e.add(this.nonceInitialize(n)), e
        }
        static nonceInitialize(t) {
            let e = Tt.InitializeNonceAccount,
                n = gt(e, {
                    authorized: lt(t.authorizedPubkey.toBuffer())
                }),
                i = {
                    keys: [{
                        pubkey: t.noncePubkey,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: bs,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: Jn,
                        isSigner: !1,
                        isWritable: !1
                    }],
                    programId: this.programId,
                    data: n
                };
            return new St(i)
        }
        static nonceAdvance(t) {
            let e = Tt.AdvanceNonceAccount,
                n = gt(e),
                i = {
                    keys: [{
                        pubkey: t.noncePubkey,
                        isSigner: !1,
                        isWritable: !0
                    }, {
                        pubkey: bs,
                        isSigner: !1,
                        isWritable: !1
                    }, {
                        pubkey: t.authorizedPubkey,
                        isSigner: !0,
                        isWritable: !1
                    }],
                    programId: this.programId,
                    data: n
                };
            return new St(i)
        }
        static nonceWithdraw(t) {
            let e = Tt.WithdrawNonceAccount,
                n = gt(e, {
                    lamports: t.lamports
                });
            return new St({
                keys: [{
                    pubkey: t.noncePubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: t.toPubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: bs,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: Jn,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: t.authorizedPubkey,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: n
            })
        }
        static nonceAuthorize(t) {
            let e = Tt.AuthorizeNonceAccount,
                n = gt(e, {
                    authorized: lt(t.newAuthorizedPubkey.toBuffer())
                });
            return new St({
                keys: [{
                    pubkey: t.noncePubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: t.authorizedPubkey,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: n
            })
        }
        static allocate(t) {
            let e, n;
            if ("basePubkey" in t) {
                let i = Tt.AllocateWithSeed;
                e = gt(i, {
                    base: lt(t.basePubkey.toBuffer()),
                    seed: t.seed,
                    space: t.space,
                    programId: lt(t.programId.toBuffer())
                }), n = [{
                    pubkey: t.accountPubkey,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: t.basePubkey,
                    isSigner: !0,
                    isWritable: !1
                }]
            } else {
                let i = Tt.Allocate;
                e = gt(i, {
                    space: t.space
                }), n = [{
                    pubkey: t.accountPubkey,
                    isSigner: !0,
                    isWritable: !0
                }]
            }
            return new St({
                keys: n,
                programId: this.programId,
                data: e
            })
        }
    };
    Ae.programId = new Y("11111111111111111111111111111111");
    Ym = nn - 300, nc = (() => {
        class r {
            constructor() {}
            static getMinNumSignatures(e) {
                return 2 * (Math.ceil(e / r.chunkSize) + 1 + 1)
            }
            static load(e, n, i, o, s) {
                return O(this, null, function*() {
                    {
                        let _ = yield e.getMinimumBalanceForRentExemption(s.length), I = yield e.getAccountInfo(i.publicKey, "confirmed"), S = null;
                        if (I !== null) {
                            if (I.executable) return console.error("Program load failed, account is already executable"), !1;
                            I.data.length !== s.length && (S = S || new It, S.add(Ae.allocate({
                                accountPubkey: i.publicKey,
                                space: s.length
                            }))), I.owner.equals(o) || (S = S || new It, S.add(Ae.assign({
                                accountPubkey: i.publicKey,
                                programId: o
                            }))), I.lamports < _ && (S = S || new It, S.add(Ae.transfer({
                                fromPubkey: n.publicKey,
                                toPubkey: i.publicKey,
                                lamports: _ - I.lamports
                            })))
                        } else S = new It().add(Ae.createAccount({
                            fromPubkey: n.publicKey,
                            newAccountPubkey: i.publicKey,
                            lamports: _ > 0 ? _ : 1,
                            space: s.length,
                            programId: o
                        }));
                        S !== null && (yield tc(e, S, [n, i], {
                            commitment: "confirmed"
                        }))
                    }
                    let a = k.struct([k.u32("instruction"), k.u32("offset"), k.u32("bytesLength"), k.u32("bytesLengthPadding"), k.seq(k.u8("byte"), k.offset(k.u32(), -8), "bytes")]),
                        c = r.chunkSize,
                        d = 0,
                        g = s,
                        b = [];
                    for (; g.length > 0;) {
                        let _ = g.slice(0, c),
                            I = nt.Buffer.alloc(c + 16);
                        a.encode({
                            instruction: 0,
                            offset: d,
                            bytes: _,
                            bytesLength: 0,
                            bytesLengthPadding: 0
                        }, I);
                        let S = new It().add({
                            keys: [{
                                pubkey: i.publicKey,
                                isSigner: !0,
                                isWritable: !0
                            }],
                            programId: o,
                            data: I
                        });
                        b.push(tc(e, S, [n, i], {
                            commitment: "confirmed"
                        })), e._rpcEndpoint.includes("solana.com") && (yield En(1e3 / 4)), d += c, g = g.slice(c)
                    }
                    yield Promise.all(b); {
                        let _ = k.struct([k.u32("instruction")]),
                            I = nt.Buffer.alloc(_.span);
                        _.encode({
                            instruction: 1
                        }, I);
                        let S = new It().add({
                                keys: [{
                                    pubkey: i.publicKey,
                                    isSigner: !0,
                                    isWritable: !0
                                }, {
                                    pubkey: Jn,
                                    isSigner: !1,
                                    isWritable: !1
                                }],
                                programId: o,
                                data: I
                            }),
                            v = "processed",
                            A = yield e.sendTransaction(S, [n, i], {
                                preflightCommitment: v
                            }), {
                                context: T,
                                value: z
                            } = yield e.confirmTransaction({
                                signature: A,
                                lastValidBlockHeight: S.lastValidBlockHeight,
                                blockhash: S.recentBlockhash
                            }, v);
                        if (z.err) throw new Error(`Transaction ${A} failed (${JSON.stringify(z)})`);
                        for (;;) {
                            try {
                                if ((yield e.getSlot({
                                        commitment: v
                                    })) > T.slot) break
                            } catch {}
                            yield new Promise(N => setTimeout(N, Math.round(u0 / 2)))
                        }
                    }
                    return !0
                })
            }
        }
        return r.chunkSize = Ym, r
    })(), Zm = new Y("BPFLoader2111111111111111111111111111111111"), ic = class {
        static getMinNumSignatures(t) {
            return nc.getMinNumSignatures(t)
        }
        static load(t, e, n, i, o) {
            return nc.load(t, e, n, o, i)
        }
    };
    Jm = Object.prototype.toString, Qm = Object.keys || function(r) {
        var t = [];
        for (var e in r) t.push(e);
        return t
    };
    t1 = function(r) {
        var t = Ki(r, !1);
        if (t !== void 0) return "" + t
    }, zl = Xm(t1), zi = 32;
    vs = class {
        constructor(t, e, n, i, o) {
            this.slotsPerEpoch = void 0, this.leaderScheduleSlotOffset = void 0, this.warmup = void 0, this.firstNormalEpoch = void 0, this.firstNormalSlot = void 0, this.slotsPerEpoch = t, this.leaderScheduleSlotOffset = e, this.warmup = n, this.firstNormalEpoch = i, this.firstNormalSlot = o
        }
        getEpoch(t) {
            return this.getEpochAndSlotIndex(t)[0]
        }
        getEpochAndSlotIndex(t) {
            if (t < this.firstNormalSlot) {
                let e = Hu(e1(t + zi + 1)) - Hu(zi) - 1,
                    n = this.getSlotsInEpoch(e),
                    i = t - (n - zi);
                return [e, i]
            } else {
                let e = t - this.firstNormalSlot,
                    n = Math.floor(e / this.slotsPerEpoch),
                    i = this.firstNormalEpoch + n,
                    o = e % this.slotsPerEpoch;
                return [i, o]
            }
        }
        getFirstSlotInEpoch(t) {
            return t <= this.firstNormalEpoch ? (Math.pow(2, t) - 1) * zi : (t - this.firstNormalEpoch) * this.slotsPerEpoch + this.firstNormalSlot
        }
        getLastSlotInEpoch(t) {
            return this.getFirstSlotInEpoch(t) + this.getSlotsInEpoch(t) - 1
        }
        getSlotsInEpoch(t) {
            return t < this.firstNormalEpoch ? Math.pow(2, t + Hu(zi)) : this.slotsPerEpoch
        }
    }, ji = class extends Error {
        constructor(t, e) {
            super(t), this.logs = void 0, this.logs = e
        }
    }, r1 = {
        JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
        JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
        JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE: -32003,
        JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
        JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
        JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE: -32006,
        JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
        JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
        JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
        JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
        JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
        JSON_RPC_SCAN_ERROR: -32012,
        JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
        JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
        JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
        JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016
    }, tt = class extends Error {
        constructor({
            code: t,
            message: e,
            data: n
        }, i) {
            super(i != null ? `${i}: ${e}` : e), this.code = void 0, this.data = void 0, this.code = t, this.data = n, this.name = "SolanaJSONRPCError"
        }
    }, n1 = globalThis.fetch, oc = class extends r0.default {
        constructor(t, e, n) {
            let i = o => {
                let s = (0, n0.default)(o, st({
                    autoconnect: !0,
                    max_reconnects: 5,
                    reconnect: !0,
                    reconnect_interval: 1e3
                }, e));
                return "socket" in s ? this.underlyingSocket = s.socket : this.underlyingSocket = s, s
            };
            super(i, t, e, n), this.underlyingSocket = void 0
        }
        call(...t) {
            let e = this.underlyingSocket ? .readyState;
            return e === 1 ? super.call(...t) : Promise.reject(new Error("Tried to call a JSON-RPC method `" + t[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + e + ")"))
        }
        notify(...t) {
            let e = this.underlyingSocket ? .readyState;
            return e === 1 ? super.notify(...t) : Promise.reject(new Error("Tried to send a JSON-RPC notification `" + t[0] + "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " + e + ")"))
        }
    };
    Kl = 56, Yi = class {
        constructor(t) {
            this.key = void 0, this.state = void 0, this.key = t.key, this.state = t.state
        }
        isActive() {
            let t = BigInt("0xffffffffffffffff");
            return this.state.deactivationSlot === t
        }
        static deserialize(t) {
            let e = i1(o1, t),
                n = t.length - Kl;
            xt(n >= 0, "lookup table is invalid"), xt(n % 32 === 0, "lookup table is invalid");
            let i = n / 32,
                {
                    addresses: o
                } = k.struct([k.seq(pt(), i, "addresses")]).decode(t.slice(Kl));
            return {
                deactivationSlot: e.deactivationSlot,
                lastExtendedSlot: e.lastExtendedSlot,
                lastExtendedSlotStartIndex: e.lastExtendedStartIndex,
                authority: e.authority.length !== 0 ? new Y(e.authority[0]) : void 0,
                addresses: o.map(s => new Y(s))
            }
        }
    }, o1 = {
        index: 1,
        layout: k.struct([k.u32("typeIndex"), Qn("deactivationSlot"), k.nu64("lastExtendedSlot"), k.u8("lastExtendedStartIndex"), k.u8(), k.seq(pt(), k.offset(k.u8(), -1), "authority")])
    }, s1 = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i;
    ge = Yn(rs(Y), $(), r => new Y(r)), h0 = ns([$(), Ct("base64")]), wc = Yn(rs(nt.Buffer), h0, r => nt.Buffer.from(r[0], "base64")), l0 = 30 * 1e3;
    c1 = d0(jn());
    f1 = D({
        foundation: R(),
        foundationTerm: R(),
        initial: R(),
        taper: R(),
        terminal: R()
    }), h1 = ht(X(Z(D({
        epoch: R(),
        effectiveSlot: R(),
        amount: R(),
        postBalance: R(),
        commission: it(Z(R()))
    })))), l1 = X(D({
        slot: R(),
        prioritizationFee: R()
    })), d1 = D({
        total: R(),
        validator: R(),
        foundation: R(),
        epoch: R()
    }), p1 = D({
        epoch: R(),
        slotIndex: R(),
        slotsInEpoch: R(),
        absoluteSlot: R(),
        blockHeight: it(R()),
        transactionCount: it(R())
    }), y1 = D({
        slotsPerEpoch: R(),
        leaderScheduleSlotOffset: R(),
        warmup: Je(),
        firstNormalEpoch: R(),
        firstNormalSlot: R()
    }), g1 = Eu($(), X(R())), In = Z(Ce([D({}), $()])), m1 = D({
        err: In
    }), w1 = Ct("receivedSignature"), b1 = D({
        "solana-core": $(),
        "feature-set": it(R())
    }), Wl = Yt(D({
        err: Z(Ce([D({}), $()])),
        logs: Z(X($())),
        accounts: it(Z(X(Z(D({
            executable: Je(),
            owner: $(),
            lamports: R(),
            data: X($()),
            rentEpoch: it(R())
        }))))),
        unitsConsumed: it(R()),
        returnData: it(Z(D({
            programId: $(),
            data: ns([$(), Ct("base64")])
        })))
    })), x1 = Yt(D({
        byIdentity: Eu($(), X(R())),
        range: D({
            firstSlot: R(),
            lastSlot: R()
        })
    }));
    v1 = ht(f1), I1 = ht(d1), S1 = ht(l1), A1 = ht(p1), _1 = ht(y1), R1 = ht(g1), L1 = ht(R()), T1 = Yt(D({
        total: R(),
        circulating: R(),
        nonCirculating: R(),
        nonCirculatingAccounts: X(ge)
    })), sc = D({
        amount: $(),
        uiAmount: Z(R()),
        decimals: R(),
        uiAmountString: it($())
    }), M1 = Yt(X(D({
        address: ge,
        amount: $(),
        uiAmount: Z(R()),
        decimals: R(),
        uiAmountString: it($())
    }))), U1 = Yt(X(D({
        pubkey: ge,
        account: D({
            executable: Je(),
            owner: ge,
            lamports: R(),
            data: wc,
            rentEpoch: R()
        })
    }))), ac = D({
        program: $(),
        parsed: jn(),
        space: R()
    }), P1 = Yt(X(D({
        pubkey: ge,
        account: D({
            executable: Je(),
            owner: ge,
            lamports: R(),
            data: ac,
            rentEpoch: R()
        })
    }))), C1 = Yt(X(D({
        lamports: R(),
        address: ge
    }))), Zi = D({
        executable: Je(),
        owner: ge,
        lamports: R(),
        data: wc,
        rentEpoch: R()
    }), F1 = D({
        pubkey: ge,
        account: Zi
    }), O1 = Yn(Ce([rs(nt.Buffer), ac]), Ce([h0, ac]), r => Array.isArray(r) ? j(r, wc) : r), uc = D({
        executable: Je(),
        owner: ge,
        lamports: R(),
        data: O1,
        rentEpoch: R()
    }), N1 = D({
        pubkey: ge,
        account: uc
    }), D1 = D({
        state: Ce([Ct("active"), Ct("inactive"), Ct("activating"), Ct("deactivating")]),
        active: R(),
        inactive: R()
    }), q1 = ht(X(D({
        signature: $(),
        slot: R(),
        err: In,
        memo: Z($()),
        blockTime: it(Z(R()))
    }))), z1 = ht(X(D({
        signature: $(),
        slot: R(),
        err: In,
        memo: Z($()),
        blockTime: it(Z(R()))
    }))), K1 = D({
        subscription: R(),
        result: Ms(Zi)
    }), W1 = D({
        pubkey: ge,
        account: Zi
    }), H1 = D({
        subscription: R(),
        result: Ms(W1)
    }), $1 = D({
        parent: R(),
        slot: R(),
        root: R()
    }), V1 = D({
        subscription: R(),
        result: $1
    }), G1 = Ce([D({
        type: Ce([Ct("firstShredReceived"), Ct("completed"), Ct("optimisticConfirmation"), Ct("root")]),
        slot: R(),
        timestamp: R()
    }), D({
        type: Ct("createdBank"),
        parent: R(),
        slot: R(),
        timestamp: R()
    }), D({
        type: Ct("frozen"),
        slot: R(),
        timestamp: R(),
        stats: D({
            numTransactionEntries: R(),
            numSuccessfulTransactions: R(),
            numFailedTransactions: R(),
            maxTransactionsPerEntry: R()
        })
    }), D({
        type: Ct("dead"),
        slot: R(),
        timestamp: R(),
        err: $()
    })]), j1 = D({
        subscription: R(),
        result: G1
    }), Y1 = D({
        subscription: R(),
        result: Ms(Ce([m1, w1]))
    }), Z1 = D({
        subscription: R(),
        result: R()
    }), X1 = D({
        pubkey: $(),
        gossip: Z($()),
        tpu: Z($()),
        rpc: Z($()),
        version: Z($())
    }), Hl = D({
        votePubkey: $(),
        nodePubkey: $(),
        activatedStake: R(),
        epochVoteAccount: Je(),
        epochCredits: X(ns([R(), R(), R()])),
        commission: R(),
        lastVote: R(),
        rootSlot: Z(R())
    }), J1 = ht(D({
        current: X(Hl),
        delinquent: X(Hl)
    })), Q1 = Ce([Ct("processed"), Ct("confirmed"), Ct("finalized")]), tw = D({
        slot: R(),
        confirmations: Z(R()),
        err: In,
        confirmationStatus: it(Q1)
    }), ew = Yt(X(Z(tw))), rw = ht(R()), p0 = D({
        accountKey: ge,
        writableIndexes: X(R()),
        readonlyIndexes: X(R())
    }), bc = D({
        signatures: X($()),
        message: D({
            accountKeys: X($()),
            header: D({
                numRequiredSignatures: R(),
                numReadonlySignedAccounts: R(),
                numReadonlyUnsignedAccounts: R()
            }),
            instructions: X(D({
                accounts: X(R()),
                data: $(),
                programIdIndex: R()
            })),
            recentBlockhash: $(),
            addressTableLookups: it(X(p0))
        })
    }), y0 = D({
        pubkey: ge,
        signer: Je(),
        writable: Je(),
        source: it(Ce([Ct("transaction"), Ct("lookupTable")]))
    }), g0 = D({
        accountKeys: X(y0),
        signatures: X($())
    }), m0 = D({
        parsed: jn(),
        program: $(),
        programId: ge
    }), w0 = D({
        accounts: X(ge),
        data: $(),
        programId: ge
    }), nw = Ce([w0, m0]), iw = Ce([D({
        parsed: jn(),
        program: $(),
        programId: $()
    }), D({
        accounts: X($()),
        data: $(),
        programId: $()
    })]), b0 = Yn(nw, iw, r => "accounts" in r ? j(r, w0) : j(r, m0)), x0 = D({
        signatures: X($()),
        message: D({
            accountKeys: X(y0),
            instructions: X(b0),
            recentBlockhash: $(),
            addressTableLookups: it(Z(X(p0)))
        })
    }), Is = D({
        accountIndex: R(),
        mint: $(),
        owner: it($()),
        uiTokenAmount: sc
    }), E0 = D({
        writable: X(ge),
        readonly: X(ge)
    }), Us = D({
        err: In,
        fee: R(),
        innerInstructions: it(Z(X(D({
            index: R(),
            instructions: X(D({
                accounts: X(R()),
                data: $(),
                programIdIndex: R()
            }))
        })))),
        preBalances: X(R()),
        postBalances: X(R()),
        logMessages: it(Z(X($()))),
        preTokenBalances: it(Z(X(Is))),
        postTokenBalances: it(Z(X(Is))),
        loadedAddresses: it(E0),
        computeUnitsConsumed: it(R())
    }), xc = D({
        err: In,
        fee: R(),
        innerInstructions: it(Z(X(D({
            index: R(),
            instructions: X(b0)
        })))),
        preBalances: X(R()),
        postBalances: X(R()),
        logMessages: it(Z(X($()))),
        preTokenBalances: it(Z(X(Is))),
        postTokenBalances: it(Z(X(Is))),
        loadedAddresses: it(E0),
        computeUnitsConsumed: it(R())
    }), ni = Ce([Ct(0), Ct("legacy")]), Sn = D({
        pubkey: $(),
        lamports: R(),
        postBalance: Z(R()),
        rewardType: Z($()),
        commission: it(Z(R()))
    }), ow = ht(Z(D({
        blockhash: $(),
        previousBlockhash: $(),
        parentSlot: R(),
        transactions: X(D({
            transaction: bc,
            meta: Z(Us),
            version: it(ni)
        })),
        rewards: it(X(Sn)),
        blockTime: Z(R()),
        blockHeight: Z(R())
    }))), sw = ht(Z(D({
        blockhash: $(),
        previousBlockhash: $(),
        parentSlot: R(),
        rewards: it(X(Sn)),
        blockTime: Z(R()),
        blockHeight: Z(R())
    }))), aw = ht(Z(D({
        blockhash: $(),
        previousBlockhash: $(),
        parentSlot: R(),
        transactions: X(D({
            transaction: g0,
            meta: Z(Us),
            version: it(ni)
        })),
        rewards: it(X(Sn)),
        blockTime: Z(R()),
        blockHeight: Z(R())
    }))), uw = ht(Z(D({
        blockhash: $(),
        previousBlockhash: $(),
        parentSlot: R(),
        transactions: X(D({
            transaction: x0,
            meta: Z(xc),
            version: it(ni)
        })),
        rewards: it(X(Sn)),
        blockTime: Z(R()),
        blockHeight: Z(R())
    }))), cw = ht(Z(D({
        blockhash: $(),
        previousBlockhash: $(),
        parentSlot: R(),
        transactions: X(D({
            transaction: g0,
            meta: Z(xc),
            version: it(ni)
        })),
        rewards: it(X(Sn)),
        blockTime: Z(R()),
        blockHeight: Z(R())
    }))), fw = ht(Z(D({
        blockhash: $(),
        previousBlockhash: $(),
        parentSlot: R(),
        rewards: it(X(Sn)),
        blockTime: Z(R()),
        blockHeight: Z(R())
    }))), hw = ht(Z(D({
        blockhash: $(),
        previousBlockhash: $(),
        parentSlot: R(),
        transactions: X(D({
            transaction: bc,
            meta: Z(Us)
        })),
        rewards: it(X(Sn)),
        blockTime: Z(R())
    }))), $l = ht(Z(D({
        blockhash: $(),
        previousBlockhash: $(),
        parentSlot: R(),
        signatures: X($()),
        blockTime: Z(R())
    }))), Vu = ht(Z(D({
        slot: R(),
        meta: Z(Us),
        blockTime: it(Z(R())),
        transaction: bc,
        version: it(ni)
    }))), ws = ht(Z(D({
        slot: R(),
        transaction: x0,
        meta: Z(xc),
        blockTime: it(Z(R())),
        version: it(ni)
    }))), lw = Yt(D({
        blockhash: $(),
        feeCalculator: D({
            lamportsPerSignature: R()
        })
    })), dw = Yt(D({
        blockhash: $(),
        lastValidBlockHeight: R()
    })), pw = Yt(Je()), yw = D({
        slot: R(),
        numTransactions: R(),
        numSlots: R(),
        samplePeriodSecs: R()
    }), gw = ht(X(yw)), mw = Yt(Z(D({
        feeCalculator: D({
            lamportsPerSignature: R()
        })
    }))), ww = ht($()), bw = ht($()), xw = D({
        err: In,
        logs: X($()),
        signature: $()
    }), Ew = D({
        result: Ms(xw),
        subscription: R()
    }), Bw = {
        "solana-client": "js/0.0.0-development"
    }, cc = class {
        constructor(t, e) {
            this._commitment = void 0, this._confirmTransactionInitialTimeout = void 0, this._rpcEndpoint = void 0, this._rpcWsEndpoint = void 0, this._rpcClient = void 0, this._rpcRequest = void 0, this._rpcBatchRequest = void 0, this._rpcWebSocket = void 0, this._rpcWebSocketConnected = !1, this._rpcWebSocketHeartbeat = null, this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketGeneration = 0, this._disableBlockhashCaching = !1, this._pollingBlockhash = !1, this._blockhashInfo = {
                latestBlockhash: null,
                lastFetch: 0,
                transactionSignatures: [],
                simulatedSignatures: []
            }, this._nextClientSubscriptionId = 0, this._subscriptionDisposeFunctionsByClientSubscriptionId = {}, this._subscriptionHashByClientSubscriptionId = {}, this._subscriptionStateChangeCallbacksByHash = {}, this._subscriptionCallbacksByServerSubscriptionId = {}, this._subscriptionsByHash = {}, this._subscriptionsAutoDisposedByRpc = new Set, this.getBlockHeight = (() => {
                let d = {};
                return g => O(this, null, function*() {
                    let {
                        commitment: b,
                        config: _
                    } = Ft(g), I = this._buildArgs([], b, void 0, _), S = zl(I);
                    return d[S] = d[S] ? ? O(this, null, function*() {
                        try {
                            let v = yield this._rpcRequest("getBlockHeight", I), A = j(v, ht(R()));
                            if ("error" in A) throw new tt(A.error, "failed to get block height information");
                            return A.result
                        } finally {
                            delete d[S]
                        }
                    }), yield d[S]
                })
            })();
            let n, i, o, s, a, c;
            e && typeof e == "string" ? this._commitment = e : e && (this._commitment = e.commitment, this._confirmTransactionInitialTimeout = e.confirmTransactionInitialTimeout, n = e.wsEndpoint, i = e.httpHeaders, o = e.fetch, s = e.fetchMiddleware, a = e.disableRetryOnRateLimit, c = e.httpAgent), this._rpcEndpoint = u1(t), this._rpcWsEndpoint = n || a1(t), this._rpcClient = E1(t, i, o, s, a, c), this._rpcRequest = B1(this._rpcClient), this._rpcBatchRequest = k1(this._rpcClient), this._rpcWebSocket = new oc(this._rpcWsEndpoint, {
                autoconnect: !1,
                max_reconnects: 1 / 0
            }), this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)), this._rpcWebSocket.on("error", this._wsOnError.bind(this)), this._rpcWebSocket.on("close", this._wsOnClose.bind(this)), this._rpcWebSocket.on("accountNotification", this._wsOnAccountNotification.bind(this)), this._rpcWebSocket.on("programNotification", this._wsOnProgramAccountNotification.bind(this)), this._rpcWebSocket.on("slotNotification", this._wsOnSlotNotification.bind(this)), this._rpcWebSocket.on("slotsUpdatesNotification", this._wsOnSlotUpdatesNotification.bind(this)), this._rpcWebSocket.on("signatureNotification", this._wsOnSignatureNotification.bind(this)), this._rpcWebSocket.on("rootNotification", this._wsOnRootNotification.bind(this)), this._rpcWebSocket.on("logsNotification", this._wsOnLogsNotification.bind(this))
        }
        get commitment() {
            return this._commitment
        }
        get rpcEndpoint() {
            return this._rpcEndpoint
        }
        getBalanceAndContext(t, e) {
            return O(this, null, function*() {
                let {
                    commitment: n,
                    config: i
                } = Ft(e), o = this._buildArgs([t.toBase58()], n, void 0, i), s = yield this._rpcRequest("getBalance", o), a = j(s, Yt(R()));
                if ("error" in a) throw new tt(a.error, `failed to get balance for ${t.toBase58()}`);
                return a.result
            })
        }
        getBalance(t, e) {
            return O(this, null, function*() {
                return yield this.getBalanceAndContext(t, e).then(n => n.value).catch(n => {
                    throw new Error("failed to get balance of account " + t.toBase58() + ": " + n)
                })
            })
        }
        getBlockTime(t) {
            return O(this, null, function*() {
                let e = yield this._rpcRequest("getBlockTime", [t]), n = j(e, ht(Z(R())));
                if ("error" in n) throw new tt(n.error, `failed to get block time for slot ${t}`);
                return n.result
            })
        }
        getMinimumLedgerSlot() {
            return O(this, null, function*() {
                let t = yield this._rpcRequest("minimumLedgerSlot", []), e = j(t, ht(R()));
                if ("error" in e) throw new tt(e.error, "failed to get minimum ledger slot");
                return e.result
            })
        }
        getFirstAvailableBlock() {
            return O(this, null, function*() {
                let t = yield this._rpcRequest("getFirstAvailableBlock", []), e = j(t, L1);
                if ("error" in e) throw new tt(e.error, "failed to get first available block");
                return e.result
            })
        }
        getSupply(t) {
            return O(this, null, function*() {
                let e = {};
                typeof t == "string" ? e = {
                    commitment: t
                } : t ? e = ft(st({}, t), {
                    commitment: t && t.commitment || this.commitment
                }) : e = {
                    commitment: this.commitment
                };
                let n = yield this._rpcRequest("getSupply", [e]), i = j(n, T1);
                if ("error" in i) throw new tt(i.error, "failed to get supply");
                return i.result
            })
        }
        getTokenSupply(t, e) {
            return O(this, null, function*() {
                let n = this._buildArgs([t.toBase58()], e),
                    i = yield this._rpcRequest("getTokenSupply", n), o = j(i, Yt(sc));
                if ("error" in o) throw new tt(o.error, "failed to get token supply");
                return o.result
            })
        }
        getTokenAccountBalance(t, e) {
            return O(this, null, function*() {
                let n = this._buildArgs([t.toBase58()], e),
                    i = yield this._rpcRequest("getTokenAccountBalance", n), o = j(i, Yt(sc));
                if ("error" in o) throw new tt(o.error, "failed to get token account balance");
                return o.result
            })
        }
        getTokenAccountsByOwner(t, e, n) {
            return O(this, null, function*() {
                let {
                    commitment: i,
                    config: o
                } = Ft(n), s = [t.toBase58()];
                "mint" in e ? s.push({
                    mint: e.mint.toBase58()
                }) : s.push({
                    programId: e.programId.toBase58()
                });
                let a = this._buildArgs(s, i, "base64", o),
                    c = yield this._rpcRequest("getTokenAccountsByOwner", a), d = j(c, U1);
                if ("error" in d) throw new tt(d.error, `failed to get token accounts owned by account ${t.toBase58()}`);
                return d.result
            })
        }
        getParsedTokenAccountsByOwner(t, e, n) {
            return O(this, null, function*() {
                let i = [t.toBase58()];
                "mint" in e ? i.push({
                    mint: e.mint.toBase58()
                }) : i.push({
                    programId: e.programId.toBase58()
                });
                let o = this._buildArgs(i, n, "jsonParsed"),
                    s = yield this._rpcRequest("getTokenAccountsByOwner", o), a = j(s, P1);
                if ("error" in a) throw new tt(a.error, `failed to get token accounts owned by account ${t.toBase58()}`);
                return a.result
            })
        }
        getLargestAccounts(t) {
            return O(this, null, function*() {
                let e = ft(st({}, t), {
                        commitment: t && t.commitment || this.commitment
                    }),
                    n = e.filter || e.commitment ? [e] : [],
                    i = yield this._rpcRequest("getLargestAccounts", n), o = j(i, C1);
                if ("error" in o) throw new tt(o.error, "failed to get largest accounts");
                return o.result
            })
        }
        getTokenLargestAccounts(t, e) {
            return O(this, null, function*() {
                let n = this._buildArgs([t.toBase58()], e),
                    i = yield this._rpcRequest("getTokenLargestAccounts", n), o = j(i, M1);
                if ("error" in o) throw new tt(o.error, "failed to get token largest accounts");
                return o.result
            })
        }
        getAccountInfoAndContext(t, e) {
            return O(this, null, function*() {
                let {
                    commitment: n,
                    config: i
                } = Ft(e), o = this._buildArgs([t.toBase58()], n, "base64", i), s = yield this._rpcRequest("getAccountInfo", o), a = j(s, Yt(Z(Zi)));
                if ("error" in a) throw new tt(a.error, `failed to get info about account ${t.toBase58()}`);
                return a.result
            })
        }
        getParsedAccountInfo(t, e) {
            return O(this, null, function*() {
                let {
                    commitment: n,
                    config: i
                } = Ft(e), o = this._buildArgs([t.toBase58()], n, "jsonParsed", i), s = yield this._rpcRequest("getAccountInfo", o), a = j(s, Yt(Z(uc)));
                if ("error" in a) throw new tt(a.error, `failed to get info about account ${t.toBase58()}`);
                return a.result
            })
        }
        getAccountInfo(t, e) {
            return O(this, null, function*() {
                try {
                    return (yield this.getAccountInfoAndContext(t, e)).value
                } catch (n) {
                    throw new Error("failed to get info about account " + t.toBase58() + ": " + n)
                }
            })
        }
        getMultipleParsedAccounts(t, e) {
            return O(this, null, function*() {
                let {
                    commitment: n,
                    config: i
                } = Ft(e), o = t.map(d => d.toBase58()), s = this._buildArgs([o], n, "jsonParsed", i), a = yield this._rpcRequest("getMultipleAccounts", s), c = j(a, Yt(X(Z(uc))));
                if ("error" in c) throw new tt(c.error, `failed to get info for accounts ${o}`);
                return c.result
            })
        }
        getMultipleAccountsInfoAndContext(t, e) {
            return O(this, null, function*() {
                let {
                    commitment: n,
                    config: i
                } = Ft(e), o = t.map(d => d.toBase58()), s = this._buildArgs([o], n, "base64", i), a = yield this._rpcRequest("getMultipleAccounts", s), c = j(a, Yt(X(Z(Zi))));
                if ("error" in c) throw new tt(c.error, `failed to get info for accounts ${o}`);
                return c.result
            })
        }
        getMultipleAccountsInfo(t, e) {
            return O(this, null, function*() {
                return (yield this.getMultipleAccountsInfoAndContext(t, e)).value
            })
        }
        getStakeActivation(t, e, n) {
            return O(this, null, function*() {
                let {
                    commitment: i,
                    config: o
                } = Ft(e), s = this._buildArgs([t.toBase58()], i, void 0, ft(st({}, o), {
                    epoch: n ? ? o ? .epoch
                })), a = yield this._rpcRequest("getStakeActivation", s), c = j(a, ht(D1));
                if ("error" in c) throw new tt(c.error, `failed to get Stake Activation ${t.toBase58()}`);
                return c.result
            })
        }
        getProgramAccounts(t, e) {
            return O(this, null, function*() {
                let {
                    commitment: n,
                    config: i
                } = Ft(e), b = i || {}, {
                    encoding: o
                } = b, s = on(b, ["encoding"]), a = this._buildArgs([t.toBase58()], n, o || "base64", s), c = yield this._rpcRequest("getProgramAccounts", a), d = X(F1), g = s.withContext === !0 ? j(c, Yt(d)) : j(c, ht(d));
                if ("error" in g) throw new tt(g.error, `failed to get accounts owned by program ${t.toBase58()}`);
                return g.result
            })
        }
        getParsedProgramAccounts(t, e) {
            return O(this, null, function*() {
                let {
                    commitment: n,
                    config: i
                } = Ft(e), o = this._buildArgs([t.toBase58()], n, "jsonParsed", i), s = yield this._rpcRequest("getProgramAccounts", o), a = j(s, ht(X(N1)));
                if ("error" in a) throw new tt(a.error, `failed to get accounts owned by program ${t.toBase58()}`);
                return a.result
            })
        }
        confirmTransaction(t, e) {
            return O(this, null, function*() {
                let n;
                if (typeof t == "string") n = t;
                else {
                    let o = t;
                    if (o.abortSignal ? .aborted) return Promise.reject(o.abortSignal.reason);
                    n = o.signature
                }
                let i;
                try {
                    i = ve.default.decode(n)
                } catch {
                    throw new Error("signature must be base58 encoded: " + n)
                }
                return xt(i.length === 64, "signature has invalid length"), typeof t == "string" ? yield this.confirmTransactionUsingLegacyTimeoutStrategy({
                    commitment: e || this.commitment,
                    signature: n
                }): "lastValidBlockHeight" in t ? yield this.confirmTransactionUsingBlockHeightExceedanceStrategy({
                    commitment: e || this.commitment,
                    strategy: t
                }): yield this.confirmTransactionUsingDurableNonceStrategy({
                    commitment: e || this.commitment,
                    strategy: t
                })
            })
        }
        getCancellationPromise(t) {
            return new Promise((e, n) => {
                t != null && (t.aborted ? n(t.reason) : t.addEventListener("abort", () => {
                    n(t.reason)
                }))
            })
        }
        getTransactionConfirmationPromise({
            commitment: t,
            signature: e
        }) {
            let n, i, o = !1,
                s = new Promise((c, d) => {
                    try {
                        n = this.onSignature(e, (b, _) => {
                            n = void 0;
                            let I = {
                                context: _,
                                value: b
                            };
                            c({
                                __type: Tr.PROCESSED,
                                response: I
                            })
                        }, t);
                        let g = new Promise(b => {
                            n == null ? b() : i = this._onSubscriptionStateChange(n, _ => {
                                _ === "subscribed" && b()
                            })
                        });
                        O(this, null, function*() {
                            if (yield g, o) return;
                            let b = yield this.getSignatureStatus(e);
                            if (o || b == null) return;
                            let {
                                context: _,
                                value: I
                            } = b;
                            if (I != null)
                                if (I ? .err) d(I.err);
                                else {
                                    switch (t) {
                                        case "confirmed":
                                        case "single":
                                        case "singleGossip":
                                            {
                                                if (I.confirmationStatus === "processed") return;
                                                break
                                            }
                                        case "finalized":
                                        case "max":
                                        case "root":
                                            {
                                                if (I.confirmationStatus === "processed" || I.confirmationStatus === "confirmed") return;
                                                break
                                            }
                                        case "processed":
                                        case "recent":
                                    }
                                    o = !0, c({
                                        __type: Tr.PROCESSED,
                                        response: {
                                            context: _,
                                            value: I
                                        }
                                    })
                                }
                        })
                    } catch (g) {
                        d(g)
                    }
                });
            return {
                abortConfirmation: () => {
                    i && (i(), i = void 0), n != null && (this.removeSignatureListener(n), n = void 0)
                },
                confirmationPromise: s
            }
        }
        confirmTransactionUsingBlockHeightExceedanceStrategy(o) {
            return O(this, arguments, function*({
                commitment: t,
                strategy: {
                    abortSignal: e,
                    lastValidBlockHeight: n,
                    signature: i
                }
            }) {
                let s = !1,
                    a = new Promise(_ => {
                        let I = () => O(this, null, function*() {
                            try {
                                return yield this.getBlockHeight(t)
                            } catch {
                                return -1
                            }
                        });
                        O(this, null, function*() {
                            let S = yield I();
                            if (!s) {
                                for (; S <= n;)
                                    if (yield En(1e3), s || (S = yield I(), s)) return;
                                _({
                                    __type: Tr.BLOCKHEIGHT_EXCEEDED
                                })
                            }
                        })
                    }),
                    {
                        abortConfirmation: c,
                        confirmationPromise: d
                    } = this.getTransactionConfirmationPromise({
                        commitment: t,
                        signature: i
                    }),
                    g = this.getCancellationPromise(e),
                    b;
                try {
                    let _ = yield Promise.race([g, d, a]);
                    if (_.__type === Tr.PROCESSED) b = _.response;
                    else throw new Vi(i)
                } finally {
                    s = !0, c()
                }
                return b
            })
        }
        confirmTransactionUsingDurableNonceStrategy(a) {
            return O(this, arguments, function*({
                commitment: t,
                strategy: {
                    abortSignal: e,
                    minContextSlot: n,
                    nonceAccountPubkey: i,
                    nonceValue: o,
                    signature: s
                }
            }) {
                let c = !1,
                    d = new Promise(S => {
                        let v = o,
                            A = null,
                            T = () => O(this, null, function*() {
                                try {
                                    let {
                                        context: z,
                                        value: N
                                    } = yield this.getNonceAndContext(i, {
                                        commitment: t,
                                        minContextSlot: n
                                    });
                                    return A = z.slot, N ? .nonce
                                } catch {
                                    return v
                                }
                            });
                        O(this, null, function*() {
                            if (v = yield T(), !c)
                                for (;;) {
                                    if (o !== v) {
                                        S({
                                            __type: Tr.NONCE_INVALID,
                                            slotInWhichNonceDidAdvance: A
                                        });
                                        return
                                    }
                                    if (yield En(2e3), c || (v = yield T(), c)) return
                                }
                        })
                    }),
                    {
                        abortConfirmation: g,
                        confirmationPromise: b
                    } = this.getTransactionConfirmationPromise({
                        commitment: t,
                        signature: s
                    }),
                    _ = this.getCancellationPromise(e),
                    I;
                try {
                    let S = yield Promise.race([_, b, d]);
                    if (S.__type === Tr.PROCESSED) I = S.response;
                    else {
                        let v;
                        for (;;) {
                            let A = yield this.getSignatureStatus(s);
                            if (A == null) break;
                            if (A.context.slot < (S.slotInWhichNonceDidAdvance ? ? n)) {
                                yield En(400);
                                continue
                            }
                            v = A;
                            break
                        }
                        if (v ? .value) {
                            let A = t || "finalized",
                                {
                                    confirmationStatus: T
                                } = v.value;
                            switch (A) {
                                case "processed":
                                case "recent":
                                    if (T !== "processed" && T !== "confirmed" && T !== "finalized") throw new rn(s);
                                    break;
                                case "confirmed":
                                case "single":
                                case "singleGossip":
                                    if (T !== "confirmed" && T !== "finalized") throw new rn(s);
                                    break;
                                case "finalized":
                                case "max":
                                case "root":
                                    if (T !== "finalized") throw new rn(s);
                                    break;
                                default:
                            }
                            I = {
                                context: v.context,
                                value: {
                                    err: v.value.err
                                }
                            }
                        } else throw new rn(s)
                    }
                } finally {
                    c = !0, g()
                }
                return I
            })
        }
        confirmTransactionUsingLegacyTimeoutStrategy(n) {
            return O(this, arguments, function*({
                commitment: t,
                signature: e
            }) {
                let i, o = new Promise(d => {
                        let g = this._confirmTransactionInitialTimeout || 6e4;
                        switch (t) {
                            case "processed":
                            case "recent":
                            case "single":
                            case "confirmed":
                            case "singleGossip":
                                {
                                    g = this._confirmTransactionInitialTimeout || 3e4;
                                    break
                                }
                        }
                        i = setTimeout(() => d({
                            __type: Tr.TIMED_OUT,
                            timeoutMs: g
                        }), g)
                    }),
                    {
                        abortConfirmation: s,
                        confirmationPromise: a
                    } = this.getTransactionConfirmationPromise({
                        commitment: t,
                        signature: e
                    }),
                    c;
                try {
                    let d = yield Promise.race([a, o]);
                    if (d.__type === Tr.PROCESSED) c = d.response;
                    else throw new Gi(e, d.timeoutMs / 1e3)
                } finally {
                    clearTimeout(i), s()
                }
                return c
            })
        }
        getClusterNodes() {
            return O(this, null, function*() {
                let t = yield this._rpcRequest("getClusterNodes", []), e = j(t, ht(X(X1)));
                if ("error" in e) throw new tt(e.error, "failed to get cluster nodes");
                return e.result
            })
        }
        getVoteAccounts(t) {
            return O(this, null, function*() {
                let e = this._buildArgs([], t),
                    n = yield this._rpcRequest("getVoteAccounts", e), i = j(n, J1);
                if ("error" in i) throw new tt(i.error, "failed to get vote accounts");
                return i.result
            })
        }
        getSlot(t) {
            return O(this, null, function*() {
                let {
                    commitment: e,
                    config: n
                } = Ft(t), i = this._buildArgs([], e, void 0, n), o = yield this._rpcRequest("getSlot", i), s = j(o, ht(R()));
                if ("error" in s) throw new tt(s.error, "failed to get slot");
                return s.result
            })
        }
        getSlotLeader(t) {
            return O(this, null, function*() {
                let {
                    commitment: e,
                    config: n
                } = Ft(t), i = this._buildArgs([], e, void 0, n), o = yield this._rpcRequest("getSlotLeader", i), s = j(o, ht($()));
                if ("error" in s) throw new tt(s.error, "failed to get slot leader");
                return s.result
            })
        }
        getSlotLeaders(t, e) {
            return O(this, null, function*() {
                let n = [t, e],
                    i = yield this._rpcRequest("getSlotLeaders", n), o = j(i, ht(X(ge)));
                if ("error" in o) throw new tt(o.error, "failed to get slot leaders");
                return o.result
            })
        }
        getSignatureStatus(t, e) {
            return O(this, null, function*() {
                let {
                    context: n,
                    value: i
                } = yield this.getSignatureStatuses([t], e);
                xt(i.length === 1);
                let o = i[0];
                return {
                    context: n,
                    value: o
                }
            })
        }
        getSignatureStatuses(t, e) {
            return O(this, null, function*() {
                let n = [t];
                e && n.push(e);
                let i = yield this._rpcRequest("getSignatureStatuses", n), o = j(i, ew);
                if ("error" in o) throw new tt(o.error, "failed to get signature status");
                return o.result
            })
        }
        getTransactionCount(t) {
            return O(this, null, function*() {
                let {
                    commitment: e,
                    config: n
                } = Ft(t), i = this._buildArgs([], e, void 0, n), o = yield this._rpcRequest("getTransactionCount", i), s = j(o, ht(R()));
                if ("error" in s) throw new tt(s.error, "failed to get transaction count");
                return s.result
            })
        }
        getTotalSupply(t) {
            return O(this, null, function*() {
                return (yield this.getSupply({
                    commitment: t,
                    excludeNonCirculatingAccountsList: !0
                })).value.total
            })
        }
        getInflationGovernor(t) {
            return O(this, null, function*() {
                let e = this._buildArgs([], t),
                    n = yield this._rpcRequest("getInflationGovernor", e), i = j(n, v1);
                if ("error" in i) throw new tt(i.error, "failed to get inflation");
                return i.result
            })
        }
        getInflationReward(t, e, n) {
            return O(this, null, function*() {
                let {
                    commitment: i,
                    config: o
                } = Ft(n), s = this._buildArgs([t.map(d => d.toBase58())], i, void 0, ft(st({}, o), {
                    epoch: e ? ? o ? .epoch
                })), a = yield this._rpcRequest("getInflationReward", s), c = j(a, h1);
                if ("error" in c) throw new tt(c.error, "failed to get inflation reward");
                return c.result
            })
        }
        getInflationRate() {
            return O(this, null, function*() {
                let t = yield this._rpcRequest("getInflationRate", []), e = j(t, I1);
                if ("error" in e) throw new tt(e.error, "failed to get inflation rate");
                return e.result
            })
        }
        getEpochInfo(t) {
            return O(this, null, function*() {
                let {
                    commitment: e,
                    config: n
                } = Ft(t), i = this._buildArgs([], e, void 0, n), o = yield this._rpcRequest("getEpochInfo", i), s = j(o, A1);
                if ("error" in s) throw new tt(s.error, "failed to get epoch info");
                return s.result
            })
        }
        getEpochSchedule() {
            return O(this, null, function*() {
                let t = yield this._rpcRequest("getEpochSchedule", []), e = j(t, _1);
                if ("error" in e) throw new tt(e.error, "failed to get epoch schedule");
                let n = e.result;
                return new vs(n.slotsPerEpoch, n.leaderScheduleSlotOffset, n.warmup, n.firstNormalEpoch, n.firstNormalSlot)
            })
        }
        getLeaderSchedule() {
            return O(this, null, function*() {
                let t = yield this._rpcRequest("getLeaderSchedule", []), e = j(t, R1);
                if ("error" in e) throw new tt(e.error, "failed to get leader schedule");
                return e.result
            })
        }
        getMinimumBalanceForRentExemption(t, e) {
            return O(this, null, function*() {
                let n = this._buildArgs([t], e),
                    i = yield this._rpcRequest("getMinimumBalanceForRentExemption", n), o = j(i, rw);
                return "error" in o ? (console.warn("Unable to fetch minimum balance for rent exemption"), 0) : o.result
            })
        }
        getRecentBlockhashAndContext(t) {
            return O(this, null, function*() {
                let e = this._buildArgs([], t),
                    n = yield this._rpcRequest("getRecentBlockhash", e), i = j(n, lw);
                if ("error" in i) throw new tt(i.error, "failed to get recent blockhash");
                return i.result
            })
        }
        getRecentPerformanceSamples(t) {
            return O(this, null, function*() {
                let e = yield this._rpcRequest("getRecentPerformanceSamples", t ? [t] : []), n = j(e, gw);
                if ("error" in n) throw new tt(n.error, "failed to get recent performance samples");
                return n.result
            })
        }
        getFeeCalculatorForBlockhash(t, e) {
            return O(this, null, function*() {
                let n = this._buildArgs([t], e),
                    i = yield this._rpcRequest("getFeeCalculatorForBlockhash", n), o = j(i, mw);
                if ("error" in o) throw new tt(o.error, "failed to get fee calculator");
                let {
                    context: s,
                    value: a
                } = o.result;
                return {
                    context: s,
                    value: a !== null ? a.feeCalculator : null
                }
            })
        }
        getFeeForMessage(t, e) {
            return O(this, null, function*() {
                let n = lt(t.serialize()).toString("base64"),
                    i = this._buildArgs([n], e),
                    o = yield this._rpcRequest("getFeeForMessage", i), s = j(o, Yt(Z(R())));
                if ("error" in s) throw new tt(s.error, "failed to get fee for message");
                if (s.result === null) throw new Error("invalid blockhash");
                return s.result
            })
        }
        getRecentPrioritizationFees(t) {
            return O(this, null, function*() {
                let e = t ? .lockedWritableAccounts ? .map(s => s.toBase58()),
                    n = e ? .length ? [e] : [],
                    i = yield this._rpcRequest("getRecentPrioritizationFees", n), o = j(i, S1);
                if ("error" in o) throw new tt(o.error, "failed to get recent prioritization fees");
                return o.result
            })
        }
        getRecentBlockhash(t) {
            return O(this, null, function*() {
                try {
                    return (yield this.getRecentBlockhashAndContext(t)).value
                } catch (e) {
                    throw new Error("failed to get recent blockhash: " + e)
                }
            })
        }
        getLatestBlockhash(t) {
            return O(this, null, function*() {
                try {
                    return (yield this.getLatestBlockhashAndContext(t)).value
                } catch (e) {
                    throw new Error("failed to get recent blockhash: " + e)
                }
            })
        }
        getLatestBlockhashAndContext(t) {
            return O(this, null, function*() {
                let {
                    commitment: e,
                    config: n
                } = Ft(t), i = this._buildArgs([], e, void 0, n), o = yield this._rpcRequest("getLatestBlockhash", i), s = j(o, dw);
                if ("error" in s) throw new tt(s.error, "failed to get latest blockhash");
                return s.result
            })
        }
        isBlockhashValid(t, e) {
            return O(this, null, function*() {
                let {
                    commitment: n,
                    config: i
                } = Ft(e), o = this._buildArgs([t], n, void 0, i), s = yield this._rpcRequest("isBlockhashValid", o), a = j(s, pw);
                if ("error" in a) throw new tt(a.error, "failed to determine if the blockhash `" + t + "`is valid");
                return a.result
            })
        }
        getVersion() {
            return O(this, null, function*() {
                let t = yield this._rpcRequest("getVersion", []), e = j(t, ht(b1));
                if ("error" in e) throw new tt(e.error, "failed to get version");
                return e.result
            })
        }
        getGenesisHash() {
            return O(this, null, function*() {
                let t = yield this._rpcRequest("getGenesisHash", []), e = j(t, ht($()));
                if ("error" in e) throw new tt(e.error, "failed to get genesis hash");
                return e.result
            })
        }
        getBlock(t, e) {
            return O(this, null, function*() {
                let {
                    commitment: n,
                    config: i
                } = Ft(e), o = this._buildArgsAtLeastConfirmed([t], n, void 0, i), s = yield this._rpcRequest("getBlock", o);
                try {
                    switch (i ? .transactionDetails) {
                        case "accounts":
                            {
                                let a = j(s, aw);
                                if ("error" in a) throw a.error;
                                return a.result
                            }
                        case "none":
                            {
                                let a = j(s, sw);
                                if ("error" in a) throw a.error;
                                return a.result
                            }
                        default:
                            {
                                let a = j(s, ow);
                                if ("error" in a) throw a.error;
                                let {
                                    result: c
                                } = a;
                                return c ? ft(st({}, c), {
                                    transactions: c.transactions.map(({
                                        transaction: d,
                                        meta: g,
                                        version: b
                                    }) => ({
                                        meta: g,
                                        transaction: ft(st({}, d), {
                                            message: $u(b, d.message)
                                        }),
                                        version: b
                                    }))
                                }) : null
                            }
                    }
                } catch (a) {
                    throw new tt(a, "failed to get confirmed block")
                }
            })
        }
        getParsedBlock(t, e) {
            return O(this, null, function*() {
                let {
                    commitment: n,
                    config: i
                } = Ft(e), o = this._buildArgsAtLeastConfirmed([t], n, "jsonParsed", i), s = yield this._rpcRequest("getBlock", o);
                try {
                    switch (i ? .transactionDetails) {
                        case "accounts":
                            {
                                let a = j(s, cw);
                                if ("error" in a) throw a.error;
                                return a.result
                            }
                        case "none":
                            {
                                let a = j(s, fw);
                                if ("error" in a) throw a.error;
                                return a.result
                            }
                        default:
                            {
                                let a = j(s, uw);
                                if ("error" in a) throw a.error;
                                return a.result
                            }
                    }
                } catch (a) {
                    throw new tt(a, "failed to get block")
                }
            })
        }
        getBlockProduction(t) {
            return O(this, null, function*() {
                let e, n;
                if (typeof t == "string") n = t;
                else if (t) {
                    let a = t,
                        {
                            commitment: c
                        } = a,
                        d = on(a, ["commitment"]);
                    n = c, e = d
                }
                let i = this._buildArgs([], n, "base64", e),
                    o = yield this._rpcRequest("getBlockProduction", i), s = j(o, x1);
                if ("error" in s) throw new tt(s.error, "failed to get block production information");
                return s.result
            })
        }
        getTransaction(t, e) {
            return O(this, null, function*() {
                let {
                    commitment: n,
                    config: i
                } = Ft(e), o = this._buildArgsAtLeastConfirmed([t], n, void 0, i), s = yield this._rpcRequest("getTransaction", o), a = j(s, Vu);
                if ("error" in a) throw new tt(a.error, "failed to get transaction");
                let c = a.result;
                return c && ft(st({}, c), {
                    transaction: ft(st({}, c.transaction), {
                        message: $u(c.version, c.transaction.message)
                    })
                })
            })
        }
        getParsedTransaction(t, e) {
            return O(this, null, function*() {
                let {
                    commitment: n,
                    config: i
                } = Ft(e), o = this._buildArgsAtLeastConfirmed([t], n, "jsonParsed", i), s = yield this._rpcRequest("getTransaction", o), a = j(s, ws);
                if ("error" in a) throw new tt(a.error, "failed to get transaction");
                return a.result
            })
        }
        getParsedTransactions(t, e) {
            return O(this, null, function*() {
                let {
                    commitment: n,
                    config: i
                } = Ft(e), o = t.map(c => ({
                    methodName: "getTransaction",
                    args: this._buildArgsAtLeastConfirmed([c], n, "jsonParsed", i)
                }));
                return (yield this._rpcBatchRequest(o)).map(c => {
                    let d = j(c, ws);
                    if ("error" in d) throw new tt(d.error, "failed to get transactions");
                    return d.result
                })
            })
        }
        getTransactions(t, e) {
            return O(this, null, function*() {
                let {
                    commitment: n,
                    config: i
                } = Ft(e), o = t.map(c => ({
                    methodName: "getTransaction",
                    args: this._buildArgsAtLeastConfirmed([c], n, void 0, i)
                }));
                return (yield this._rpcBatchRequest(o)).map(c => {
                    let d = j(c, Vu);
                    if ("error" in d) throw new tt(d.error, "failed to get transactions");
                    let g = d.result;
                    return g && ft(st({}, g), {
                        transaction: ft(st({}, g.transaction), {
                            message: $u(g.version, g.transaction.message)
                        })
                    })
                })
            })
        }
        getConfirmedBlock(t, e) {
            return O(this, null, function*() {
                let n = this._buildArgsAtLeastConfirmed([t], e),
                    i = yield this._rpcRequest("getConfirmedBlock", n), o = j(i, hw);
                if ("error" in o) throw new tt(o.error, "failed to get confirmed block");
                let s = o.result;
                if (!s) throw new Error("Confirmed block " + t + " not found");
                let a = ft(st({}, s), {
                    transactions: s.transactions.map(({
                        transaction: c,
                        meta: d
                    }) => {
                        let g = new dr(c.message);
                        return {
                            meta: d,
                            transaction: ft(st({}, c), {
                                message: g
                            })
                        }
                    })
                });
                return ft(st({}, a), {
                    transactions: a.transactions.map(({
                        transaction: c,
                        meta: d
                    }) => ({
                        meta: d,
                        transaction: It.populate(c.message, c.signatures)
                    }))
                })
            })
        }
        getBlocks(t, e, n) {
            return O(this, null, function*() {
                let i = this._buildArgsAtLeastConfirmed(e !== void 0 ? [t, e] : [t], n),
                    o = yield this._rpcRequest("getBlocks", i), s = j(o, ht(X(R())));
                if ("error" in s) throw new tt(s.error, "failed to get blocks");
                return s.result
            })
        }
        getBlockSignatures(t, e) {
            return O(this, null, function*() {
                let n = this._buildArgsAtLeastConfirmed([t], e, void 0, {
                        transactionDetails: "signatures",
                        rewards: !1
                    }),
                    i = yield this._rpcRequest("getBlock", n), o = j(i, $l);
                if ("error" in o) throw new tt(o.error, "failed to get block");
                let s = o.result;
                if (!s) throw new Error("Block " + t + " not found");
                return s
            })
        }
        getConfirmedBlockSignatures(t, e) {
            return O(this, null, function*() {
                let n = this._buildArgsAtLeastConfirmed([t], e, void 0, {
                        transactionDetails: "signatures",
                        rewards: !1
                    }),
                    i = yield this._rpcRequest("getConfirmedBlock", n), o = j(i, $l);
                if ("error" in o) throw new tt(o.error, "failed to get confirmed block");
                let s = o.result;
                if (!s) throw new Error("Confirmed block " + t + " not found");
                return s
            })
        }
        getConfirmedTransaction(t, e) {
            return O(this, null, function*() {
                let n = this._buildArgsAtLeastConfirmed([t], e),
                    i = yield this._rpcRequest("getConfirmedTransaction", n), o = j(i, Vu);
                if ("error" in o) throw new tt(o.error, "failed to get transaction");
                let s = o.result;
                if (!s) return s;
                let a = new dr(s.transaction.message),
                    c = s.transaction.signatures;
                return ft(st({}, s), {
                    transaction: It.populate(a, c)
                })
            })
        }
        getParsedConfirmedTransaction(t, e) {
            return O(this, null, function*() {
                let n = this._buildArgsAtLeastConfirmed([t], e, "jsonParsed"),
                    i = yield this._rpcRequest("getConfirmedTransaction", n), o = j(i, ws);
                if ("error" in o) throw new tt(o.error, "failed to get confirmed transaction");
                return o.result
            })
        }
        getParsedConfirmedTransactions(t, e) {
            return O(this, null, function*() {
                let n = t.map(s => ({
                    methodName: "getConfirmedTransaction",
                    args: this._buildArgsAtLeastConfirmed([s], e, "jsonParsed")
                }));
                return (yield this._rpcBatchRequest(n)).map(s => {
                    let a = j(s, ws);
                    if ("error" in a) throw new tt(a.error, "failed to get confirmed transactions");
                    return a.result
                })
            })
        }
        getConfirmedSignaturesForAddress(t, e, n) {
            return O(this, null, function*() {
                let i = {},
                    o = yield this.getFirstAvailableBlock();
                for (; !("until" in i) && (e--, !(e <= 0 || e < o));) try {
                    let c = yield this.getConfirmedBlockSignatures(e, "finalized");
                    c.signatures.length > 0 && (i.until = c.signatures[c.signatures.length - 1].toString())
                } catch (c) {
                    if (c instanceof Error && c.message.includes("skipped")) continue;
                    throw c
                }
                let s = yield this.getSlot("finalized");
                for (; !("before" in i) && (n++, !(n > s));) try {
                    let c = yield this.getConfirmedBlockSignatures(n);
                    c.signatures.length > 0 && (i.before = c.signatures[c.signatures.length - 1].toString())
                } catch (c) {
                    if (c instanceof Error && c.message.includes("skipped")) continue;
                    throw c
                }
                return (yield this.getConfirmedSignaturesForAddress2(t, i)).map(c => c.signature)
            })
        }
        getConfirmedSignaturesForAddress2(t, e, n) {
            return O(this, null, function*() {
                let i = this._buildArgsAtLeastConfirmed([t.toBase58()], n, void 0, e),
                    o = yield this._rpcRequest("getConfirmedSignaturesForAddress2", i), s = j(o, q1);
                if ("error" in s) throw new tt(s.error, "failed to get confirmed signatures for address");
                return s.result
            })
        }
        getSignaturesForAddress(t, e, n) {
            return O(this, null, function*() {
                let i = this._buildArgsAtLeastConfirmed([t.toBase58()], n, void 0, e),
                    o = yield this._rpcRequest("getSignaturesForAddress", i), s = j(o, z1);
                if ("error" in s) throw new tt(s.error, "failed to get signatures for address");
                return s.result
            })
        }
        getAddressLookupTable(t, e) {
            return O(this, null, function*() {
                let {
                    context: n,
                    value: i
                } = yield this.getAccountInfoAndContext(t, e), o = null;
                return i !== null && (o = new Yi({
                    key: t,
                    state: Yi.deserialize(i.data)
                })), {
                    context: n,
                    value: o
                }
            })
        }
        getNonceAndContext(t, e) {
            return O(this, null, function*() {
                let {
                    context: n,
                    value: i
                } = yield this.getAccountInfoAndContext(t, e), o = null;
                return i !== null && (o = ks.fromAccountData(i.data)), {
                    context: n,
                    value: o
                }
            })
        }
        getNonce(t, e) {
            return O(this, null, function*() {
                return yield this.getNonceAndContext(t, e).then(n => n.value).catch(n => {
                    throw new Error("failed to get nonce for account " + t.toBase58() + ": " + n)
                })
            })
        }
        requestAirdrop(t, e) {
            return O(this, null, function*() {
                let n = yield this._rpcRequest("requestAirdrop", [t.toBase58(), e]), i = j(n, ww);
                if ("error" in i) throw new tt(i.error, `airdrop to ${t.toBase58()} failed`);
                return i.result
            })
        }
        _blockhashWithExpiryBlockHeight(t) {
            return O(this, null, function*() {
                if (!t) {
                    for (; this._pollingBlockhash;) yield En(100);
                    let n = Date.now() - this._blockhashInfo.lastFetch >= l0;
                    if (this._blockhashInfo.latestBlockhash !== null && !n) return this._blockhashInfo.latestBlockhash
                }
                return yield this._pollNewBlockhash()
            })
        }
        _pollNewBlockhash() {
            return O(this, null, function*() {
                this._pollingBlockhash = !0;
                try {
                    let t = Date.now(),
                        e = this._blockhashInfo.latestBlockhash,
                        n = e ? e.blockhash : null;
                    for (let i = 0; i < 50; i++) {
                        let o = yield this.getLatestBlockhash("finalized");
                        if (n !== o.blockhash) return this._blockhashInfo = {
                            latestBlockhash: o,
                            lastFetch: Date.now(),
                            transactionSignatures: [],
                            simulatedSignatures: []
                        }, o;
                        yield En(u0 / 2)
                    }
                    throw new Error(`Unable to obtain a new blockhash after ${Date.now()-t}ms`)
                } finally {
                    this._pollingBlockhash = !1
                }
            })
        }
        getStakeMinimumDelegation(t) {
            return O(this, null, function*() {
                let {
                    commitment: e,
                    config: n
                } = Ft(t), i = this._buildArgs([], e, "base64", n), o = yield this._rpcRequest("getStakeMinimumDelegation", i), s = j(o, Yt(R()));
                if ("error" in s) throw new tt(s.error, "failed to get stake minimum delegation");
                return s.result
            })
        }
        simulateTransaction(t, e, n) {
            return O(this, null, function*() {
                if ("message" in t) {
                    let v = t.serialize(),
                        A = nt.Buffer.from(v).toString("base64");
                    if (Array.isArray(e) || n !== void 0) throw new Error("Invalid arguments");
                    let T = e || {};
                    T.encoding = "base64", "commitment" in T || (T.commitment = this.commitment);
                    let z = [A, T],
                        N = yield this._rpcRequest("simulateTransaction", z), G = j(N, Wl);
                    if ("error" in G) throw new Error("failed to simulate transaction: " + G.error.message);
                    return G.result
                }
                let i;
                if (t instanceof It) {
                    let S = t;
                    i = new It, i.feePayer = S.feePayer, i.instructions = t.instructions, i.nonceInfo = S.nonceInfo, i.signatures = S.signatures
                } else i = It.populate(t), i._message = i._json = void 0;
                if (e !== void 0 && !Array.isArray(e)) throw new Error("Invalid arguments");
                let o = e;
                if (i.nonceInfo && o) i.sign(...o);
                else {
                    let S = this._disableBlockhashCaching;
                    for (;;) {
                        let v = yield this._blockhashWithExpiryBlockHeight(S);
                        if (i.lastValidBlockHeight = v.lastValidBlockHeight, i.recentBlockhash = v.blockhash, !o) break;
                        if (i.sign(...o), !i.signature) throw new Error("!signature");
                        let A = i.signature.toString("base64");
                        if (!this._blockhashInfo.simulatedSignatures.includes(A) && !this._blockhashInfo.transactionSignatures.includes(A)) {
                            this._blockhashInfo.simulatedSignatures.push(A);
                            break
                        } else S = !0
                    }
                }
                let s = i._compile(),
                    a = s.serialize(),
                    d = i._serialize(a).toString("base64"),
                    g = {
                        encoding: "base64",
                        commitment: this.commitment
                    };
                if (n) {
                    let S = (Array.isArray(n) ? n : s.nonProgramIds()).map(v => v.toBase58());
                    g.accounts = {
                        encoding: "base64",
                        addresses: S
                    }
                }
                o && (g.sigVerify = !0);
                let b = [d, g],
                    _ = yield this._rpcRequest("simulateTransaction", b), I = j(_, Wl);
                if ("error" in I) {
                    let S;
                    if ("data" in I.error && (S = I.error.data.logs, S && Array.isArray(S))) {
                        let v = `
    `,
                            A = v + S.join(v);
                        console.error(I.error.message, A)
                    }
                    throw new ji("failed to simulate transaction: " + I.error.message, S)
                }
                return I.result
            })
        }
        sendTransaction(t, e, n) {
            return O(this, null, function*() {
                if ("version" in t) {
                    if (e && Array.isArray(e)) throw new Error("Invalid arguments");
                    let s = t.serialize();
                    return yield this.sendRawTransaction(s, e)
                }
                if (e === void 0 || !Array.isArray(e)) throw new Error("Invalid arguments");
                let i = e;
                if (t.nonceInfo) t.sign(...i);
                else {
                    let s = this._disableBlockhashCaching;
                    for (;;) {
                        let a = yield this._blockhashWithExpiryBlockHeight(s);
                        if (t.lastValidBlockHeight = a.lastValidBlockHeight, t.recentBlockhash = a.blockhash, t.sign(...i), !t.signature) throw new Error("!signature");
                        let c = t.signature.toString("base64");
                        if (this._blockhashInfo.transactionSignatures.includes(c)) s = !0;
                        else {
                            this._blockhashInfo.transactionSignatures.push(c);
                            break
                        }
                    }
                }
                let o = t.serialize();
                return yield this.sendRawTransaction(o, n)
            })
        }
        sendRawTransaction(t, e) {
            return O(this, null, function*() {
                let n = lt(t).toString("base64");
                return yield this.sendEncodedTransaction(n, e)
            })
        }
        sendEncodedTransaction(t, e) {
            return O(this, null, function*() {
                let n = {
                        encoding: "base64"
                    },
                    i = e && e.skipPreflight,
                    o = e && e.preflightCommitment || this.commitment;
                e && e.maxRetries != null && (n.maxRetries = e.maxRetries), e && e.minContextSlot != null && (n.minContextSlot = e.minContextSlot), i && (n.skipPreflight = i), o && (n.preflightCommitment = o);
                let s = [t, n],
                    a = yield this._rpcRequest("sendTransaction", s), c = j(a, bw);
                if ("error" in c) {
                    let d;
                    throw "data" in c.error && (d = c.error.data.logs), new ji("failed to send transaction: " + c.error.message, d)
                }
                return c.result
            })
        }
        _wsOnOpen() {
            this._rpcWebSocketConnected = !0, this._rpcWebSocketHeartbeat = setInterval(() => {
                O(this, null, function*() {
                    try {
                        yield this._rpcWebSocket.notify("ping")
                    } catch {}
                })
            }, 5e3), this._updateSubscriptions()
        }
        _wsOnError(t) {
            this._rpcWebSocketConnected = !1, console.error("ws error:", t.message)
        }
        _wsOnClose(t) {
            if (this._rpcWebSocketConnected = !1, this._rpcWebSocketGeneration = (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER, this._rpcWebSocketIdleTimeout && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null), this._rpcWebSocketHeartbeat && (clearInterval(this._rpcWebSocketHeartbeat), this._rpcWebSocketHeartbeat = null), t === 1e3) {
                this._updateSubscriptions();
                return
            }
            this._subscriptionCallbacksByServerSubscriptionId = {}, Object.entries(this._subscriptionsByHash).forEach(([e, n]) => {
                this._setSubscription(e, ft(st({}, n), {
                    state: "pending"
                }))
            })
        }
        _setSubscription(t, e) {
            let n = this._subscriptionsByHash[t] ? .state;
            if (this._subscriptionsByHash[t] = e, n !== e.state) {
                let i = this._subscriptionStateChangeCallbacksByHash[t];
                i && i.forEach(o => {
                    try {
                        o(e.state)
                    } catch {}
                })
            }
        }
        _onSubscriptionStateChange(t, e) {
            let n = this._subscriptionHashByClientSubscriptionId[t];
            if (n == null) return () => {};
            let i = this._subscriptionStateChangeCallbacksByHash[n] || = new Set;
            return i.add(e), () => {
                i.delete(e), i.size === 0 && delete this._subscriptionStateChangeCallbacksByHash[n]
            }
        }
        _updateSubscriptions() {
            return O(this, null, function*() {
                if (Object.keys(this._subscriptionsByHash).length === 0) {
                    this._rpcWebSocketConnected && (this._rpcWebSocketConnected = !1, this._rpcWebSocketIdleTimeout = setTimeout(() => {
                        this._rpcWebSocketIdleTimeout = null;
                        try {
                            this._rpcWebSocket.close()
                        } catch (n) {
                            n instanceof Error && console.log(`Error when closing socket connection: ${n.message}`)
                        }
                    }, 500));
                    return
                }
                if (this._rpcWebSocketIdleTimeout !== null && (clearTimeout(this._rpcWebSocketIdleTimeout), this._rpcWebSocketIdleTimeout = null, this._rpcWebSocketConnected = !0), !this._rpcWebSocketConnected) {
                    this._rpcWebSocket.connect();
                    return
                }
                let t = this._rpcWebSocketGeneration,
                    e = () => t === this._rpcWebSocketGeneration;
                yield Promise.all(Object.keys(this._subscriptionsByHash).map(n => O(this, null, function*() {
                    let i = this._subscriptionsByHash[n];
                    if (i !== void 0) switch (i.state) {
                        case "pending":
                        case "unsubscribed":
                            if (i.callbacks.size === 0) {
                                delete this._subscriptionsByHash[n], i.state === "unsubscribed" && delete this._subscriptionCallbacksByServerSubscriptionId[i.serverSubscriptionId], yield this._updateSubscriptions();
                                return
                            }
                            yield O(this, null, function*() {
                                let {
                                    args: o,
                                    method: s
                                } = i;
                                try {
                                    this._setSubscription(n, ft(st({}, i), {
                                        state: "subscribing"
                                    }));
                                    let a = yield this._rpcWebSocket.call(s, o);
                                    this._setSubscription(n, ft(st({}, i), {
                                        serverSubscriptionId: a,
                                        state: "subscribed"
                                    })), this._subscriptionCallbacksByServerSubscriptionId[a] = i.callbacks, yield this._updateSubscriptions()
                                } catch (a) {
                                    if (a instanceof Error && console.error(`${s} error for argument`, o, a.message), !e()) return;
                                    this._setSubscription(n, ft(st({}, i), {
                                        state: "pending"
                                    })), yield this._updateSubscriptions()
                                }
                            });
                            break;
                        case "subscribed":
                            i.callbacks.size === 0 && (yield O(this, null, function*() {
                                let {
                                    serverSubscriptionId: o,
                                    unsubscribeMethod: s
                                } = i;
                                if (this._subscriptionsAutoDisposedByRpc.has(o)) this._subscriptionsAutoDisposedByRpc.delete(o);
                                else {
                                    this._setSubscription(n, ft(st({}, i), {
                                        state: "unsubscribing"
                                    })), this._setSubscription(n, ft(st({}, i), {
                                        state: "unsubscribing"
                                    }));
                                    try {
                                        yield this._rpcWebSocket.call(s, [o])
                                    } catch (a) {
                                        if (a instanceof Error && console.error(`${s} error:`, a.message), !e()) return;
                                        this._setSubscription(n, ft(st({}, i), {
                                            state: "subscribed"
                                        })), yield this._updateSubscriptions();
                                        return
                                    }
                                }
                                this._setSubscription(n, ft(st({}, i), {
                                    state: "unsubscribed"
                                })), yield this._updateSubscriptions()
                            }));
                            break
                    }
                })))
            })
        }
        _handleServerNotification(t, e) {
            let n = this._subscriptionCallbacksByServerSubscriptionId[t];
            n !== void 0 && n.forEach(i => {
                try {
                    i(...e)
                } catch (o) {
                    console.error(o)
                }
            })
        }
        _wsOnAccountNotification(t) {
            let {
                result: e,
                subscription: n
            } = j(t, K1);
            this._handleServerNotification(n, [e.value, e.context])
        }
        _makeSubscription(t, e) {
            let n = this._nextClientSubscriptionId++,
                i = zl([t.method, e], !0),
                o = this._subscriptionsByHash[i];
            return o === void 0 ? this._subscriptionsByHash[i] = ft(st({}, t), {
                args: e,
                callbacks: new Set([t.callback]),
                state: "pending"
            }) : o.callbacks.add(t.callback), this._subscriptionHashByClientSubscriptionId[n] = i, this._subscriptionDisposeFunctionsByClientSubscriptionId[n] = () => O(this, null, function*() {
                delete this._subscriptionDisposeFunctionsByClientSubscriptionId[n], delete this._subscriptionHashByClientSubscriptionId[n];
                let s = this._subscriptionsByHash[i];
                xt(s !== void 0, `Could not find a \`Subscription\` when tearing down client subscription #${n}`), s.callbacks.delete(t.callback), yield this._updateSubscriptions()
            }), this._updateSubscriptions(), n
        }
        onAccountChange(t, e, n) {
            let i = this._buildArgs([t.toBase58()], n || this._commitment || "finalized", "base64");
            return this._makeSubscription({
                callback: e,
                method: "accountSubscribe",
                unsubscribeMethod: "accountUnsubscribe"
            }, i)
        }
        removeAccountChangeListener(t) {
            return O(this, null, function*() {
                yield this._unsubscribeClientSubscription(t, "account change")
            })
        }
        _wsOnProgramAccountNotification(t) {
            let {
                result: e,
                subscription: n
            } = j(t, H1);
            this._handleServerNotification(n, [{
                accountId: e.value.pubkey,
                accountInfo: e.value.account
            }, e.context])
        }
        onProgramAccountChange(t, e, n, i) {
            let o = this._buildArgs([t.toBase58()], n || this._commitment || "finalized", "base64", i ? {
                filters: i
            } : void 0);
            return this._makeSubscription({
                callback: e,
                method: "programSubscribe",
                unsubscribeMethod: "programUnsubscribe"
            }, o)
        }
        removeProgramAccountChangeListener(t) {
            return O(this, null, function*() {
                yield this._unsubscribeClientSubscription(t, "program account change")
            })
        }
        onLogs(t, e, n) {
            let i = this._buildArgs([typeof t == "object" ? {
                mentions: [t.toString()]
            } : t], n || this._commitment || "finalized");
            return this._makeSubscription({
                callback: e,
                method: "logsSubscribe",
                unsubscribeMethod: "logsUnsubscribe"
            }, i)
        }
        removeOnLogsListener(t) {
            return O(this, null, function*() {
                yield this._unsubscribeClientSubscription(t, "logs")
            })
        }
        _wsOnLogsNotification(t) {
            let {
                result: e,
                subscription: n
            } = j(t, Ew);
            this._handleServerNotification(n, [e.value, e.context])
        }
        _wsOnSlotNotification(t) {
            let {
                result: e,
                subscription: n
            } = j(t, V1);
            this._handleServerNotification(n, [e])
        }
        onSlotChange(t) {
            return this._makeSubscription({
                callback: t,
                method: "slotSubscribe",
                unsubscribeMethod: "slotUnsubscribe"
            }, [])
        }
        removeSlotChangeListener(t) {
            return O(this, null, function*() {
                yield this._unsubscribeClientSubscription(t, "slot change")
            })
        }
        _wsOnSlotUpdatesNotification(t) {
            let {
                result: e,
                subscription: n
            } = j(t, j1);
            this._handleServerNotification(n, [e])
        }
        onSlotUpdate(t) {
            return this._makeSubscription({
                callback: t,
                method: "slotsUpdatesSubscribe",
                unsubscribeMethod: "slotsUpdatesUnsubscribe"
            }, [])
        }
        removeSlotUpdateListener(t) {
            return O(this, null, function*() {
                yield this._unsubscribeClientSubscription(t, "slot update")
            })
        }
        _unsubscribeClientSubscription(t, e) {
            return O(this, null, function*() {
                let n = this._subscriptionDisposeFunctionsByClientSubscriptionId[t];
                n ? yield n(): console.warn(`Ignored unsubscribe request because an active subscription with id \`${t}\` for '${e}' events could not be found.`)
            })
        }
        _buildArgs(t, e, n, i) {
            let o = e || this._commitment;
            if (o || n || i) {
                let s = {};
                n && (s.encoding = n), o && (s.commitment = o), i && (s = Object.assign(s, i)), t.push(s)
            }
            return t
        }
        _buildArgsAtLeastConfirmed(t, e, n, i) {
            let o = e || this._commitment;
            if (o && !["confirmed", "finalized"].includes(o)) throw new Error("Using Connection with default commitment: `" + this._commitment + "`, but method requires at least `confirmed`");
            return this._buildArgs(t, e, n, i)
        }
        _wsOnSignatureNotification(t) {
            let {
                result: e,
                subscription: n
            } = j(t, Y1);
            e.value !== "receivedSignature" && this._subscriptionsAutoDisposedByRpc.add(n), this._handleServerNotification(n, e.value === "receivedSignature" ? [{
                type: "received"
            }, e.context] : [{
                type: "status",
                result: e.value
            }, e.context])
        }
        onSignature(t, e, n) {
            let i = this._buildArgs([t], n || this._commitment || "finalized"),
                o = this._makeSubscription({
                    callback: (s, a) => {
                        if (s.type === "status") {
                            e(s.result, a);
                            try {
                                this.removeSignatureListener(o)
                            } catch {}
                        }
                    },
                    method: "signatureSubscribe",
                    unsubscribeMethod: "signatureUnsubscribe"
                }, i);
            return o
        }
        onSignatureWithOptions(t, e, n) {
            let c = ft(st({}, n), {
                    commitment: n && n.commitment || this._commitment || "finalized"
                }),
                {
                    commitment: i
                } = c,
                o = on(c, ["commitment"]),
                s = this._buildArgs([t], i, void 0, o),
                a = this._makeSubscription({
                    callback: (d, g) => {
                        e(d, g);
                        try {
                            this.removeSignatureListener(a)
                        } catch {}
                    },
                    method: "signatureSubscribe",
                    unsubscribeMethod: "signatureUnsubscribe"
                }, s);
            return a
        }
        removeSignatureListener(t) {
            return O(this, null, function*() {
                yield this._unsubscribeClientSubscription(t, "signature result")
            })
        }
        _wsOnRootNotification(t) {
            let {
                result: e,
                subscription: n
            } = j(t, Z1);
            this._handleServerNotification(n, [e])
        }
        onRootChange(t) {
            return this._makeSubscription({
                callback: t,
                method: "rootSubscribe",
                unsubscribeMethod: "rootUnsubscribe"
            }, [])
        }
        removeRootChangeListener(t) {
            return O(this, null, function*() {
                yield this._unsubscribeClientSubscription(t, "root change")
            })
        }
    }, Ss = class r {
        constructor(t) {
            this._keypair = void 0, this._keypair = t ? ? Nl()
        }
        static generate() {
            return new r(Nl())
        }
        static fromSecretKey(t, e) {
            if (t.byteLength !== 64) throw new Error("bad secret key size");
            let n = t.slice(32, 64);
            if (!e || !e.skipValidation) {
                let i = t.slice(0, 32),
                    o = Es(i);
                for (let s = 0; s < 32; s++)
                    if (n[s] !== o[s]) throw new Error("provided secretKey is invalid")
            }
            return new r({
                publicKey: n,
                secretKey: t
            })
        }
        static fromSeed(t) {
            let e = Es(t),
                n = new Uint8Array(64);
            return n.set(t), n.set(e, 32), new r({
                publicKey: e,
                secretKey: n
            })
        }
        get publicKey() {
            return new Y(this._keypair.publicKey)
        }
        get secretKey() {
            return new Uint8Array(this._keypair.secretKey)
        }
    }, Mr = Object.freeze({
        CreateLookupTable: {
            index: 0,
            layout: k.struct([k.u32("instruction"), Qn("recentSlot"), k.u8("bumpSeed")])
        },
        FreezeLookupTable: {
            index: 1,
            layout: k.struct([k.u32("instruction")])
        },
        ExtendLookupTable: {
            index: 2,
            layout: k.struct([k.u32("instruction"), Qn(), k.seq(pt(), k.offset(k.u32(), -8), "addresses")])
        },
        DeactivateLookupTable: {
            index: 3,
            layout: k.struct([k.u32("instruction")])
        },
        CloseLookupTable: {
            index: 4,
            layout: k.struct([k.u32("instruction")])
        }
    }), fc = class {
        constructor() {}
        static decodeInstructionType(t) {
            this.checkProgramId(t.programId);
            let n = k.u32("instruction").decode(t.data),
                i;
            for (let [o, s] of Object.entries(Mr))
                if (s.index == n) {
                    i = o;
                    break
                }
            if (!i) throw new Error("Invalid Instruction. Should be a LookupTable Instruction");
            return i
        }
        static decodeCreateLookupTable(t) {
            this.checkProgramId(t.programId), this.checkKeysLength(t.keys, 4);
            let {
                recentSlot: e
            } = vt(Mr.CreateLookupTable, t.data);
            return {
                authority: t.keys[1].pubkey,
                payer: t.keys[2].pubkey,
                recentSlot: Number(e)
            }
        }
        static decodeExtendLookupTable(t) {
            if (this.checkProgramId(t.programId), t.keys.length < 2) throw new Error(`invalid instruction; found ${t.keys.length} keys, expected at least 2`);
            let {
                addresses: e
            } = vt(Mr.ExtendLookupTable, t.data);
            return {
                lookupTable: t.keys[0].pubkey,
                authority: t.keys[1].pubkey,
                payer: t.keys.length > 2 ? t.keys[2].pubkey : void 0,
                addresses: e.map(n => new Y(n))
            }
        }
        static decodeCloseLookupTable(t) {
            return this.checkProgramId(t.programId), this.checkKeysLength(t.keys, 3), {
                lookupTable: t.keys[0].pubkey,
                authority: t.keys[1].pubkey,
                recipient: t.keys[2].pubkey
            }
        }
        static decodeFreezeLookupTable(t) {
            return this.checkProgramId(t.programId), this.checkKeysLength(t.keys, 2), {
                lookupTable: t.keys[0].pubkey,
                authority: t.keys[1].pubkey
            }
        }
        static decodeDeactivateLookupTable(t) {
            return this.checkProgramId(t.programId), this.checkKeysLength(t.keys, 2), {
                lookupTable: t.keys[0].pubkey,
                authority: t.keys[1].pubkey
            }
        }
        static checkProgramId(t) {
            if (!t.equals(Xi.programId)) throw new Error("invalid instruction; programId is not AddressLookupTable Program")
        }
        static checkKeysLength(t, e) {
            if (t.length < e) throw new Error(`invalid instruction; found ${t.length} keys, expected at least ${e}`)
        }
    }, Xi = class {
        constructor() {}
        static createLookupTable(t) {
            let [e, n] = Y.findProgramAddressSync([t.authority.toBuffer(), (0, Qi.toBufferLE)(BigInt(t.recentSlot), 8)], this.programId), i = Mr.CreateLookupTable, o = gt(i, {
                recentSlot: BigInt(t.recentSlot),
                bumpSeed: n
            }), s = [{
                pubkey: e,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: t.authority,
                isSigner: !0,
                isWritable: !1
            }, {
                pubkey: t.payer,
                isSigner: !0,
                isWritable: !0
            }, {
                pubkey: Ae.programId,
                isSigner: !1,
                isWritable: !1
            }];
            return [new St({
                programId: this.programId,
                keys: s,
                data: o
            }), e]
        }
        static freezeLookupTable(t) {
            let e = Mr.FreezeLookupTable,
                n = gt(e),
                i = [{
                    pubkey: t.lookupTable,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: t.authority,
                    isSigner: !0,
                    isWritable: !1
                }];
            return new St({
                programId: this.programId,
                keys: i,
                data: n
            })
        }
        static extendLookupTable(t) {
            let e = Mr.ExtendLookupTable,
                n = gt(e, {
                    addresses: t.addresses.map(o => o.toBytes())
                }),
                i = [{
                    pubkey: t.lookupTable,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: t.authority,
                    isSigner: !0,
                    isWritable: !1
                }];
            return t.payer && i.push({
                pubkey: t.payer,
                isSigner: !0,
                isWritable: !0
            }, {
                pubkey: Ae.programId,
                isSigner: !1,
                isWritable: !1
            }), new St({
                programId: this.programId,
                keys: i,
                data: n
            })
        }
        static deactivateLookupTable(t) {
            let e = Mr.DeactivateLookupTable,
                n = gt(e),
                i = [{
                    pubkey: t.lookupTable,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: t.authority,
                    isSigner: !0,
                    isWritable: !1
                }];
            return new St({
                programId: this.programId,
                keys: i,
                data: n
            })
        }
        static closeLookupTable(t) {
            let e = Mr.CloseLookupTable,
                n = gt(e),
                i = [{
                    pubkey: t.lookupTable,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: t.authority,
                    isSigner: !0,
                    isWritable: !1
                }, {
                    pubkey: t.recipient,
                    isSigner: !1,
                    isWritable: !0
                }];
            return new St({
                programId: this.programId,
                keys: i,
                data: n
            })
        }
    };
    Xi.programId = new Y("AddressLookupTab1e1111111111111111111111111");
    hc = class {
        constructor() {}
        static decodeInstructionType(t) {
            this.checkProgramId(t.programId);
            let n = k.u8("instruction").decode(t.data),
                i;
            for (let [o, s] of Object.entries(fr))
                if (s.index == n) {
                    i = o;
                    break
                }
            if (!i) throw new Error("Instruction type incorrect; not a ComputeBudgetInstruction");
            return i
        }
        static decodeRequestUnits(t) {
            this.checkProgramId(t.programId);
            let {
                units: e,
                additionalFee: n
            } = vt(fr.RequestUnits, t.data);
            return {
                units: e,
                additionalFee: n
            }
        }
        static decodeRequestHeapFrame(t) {
            this.checkProgramId(t.programId);
            let {
                bytes: e
            } = vt(fr.RequestHeapFrame, t.data);
            return {
                bytes: e
            }
        }
        static decodeSetComputeUnitLimit(t) {
            this.checkProgramId(t.programId);
            let {
                units: e
            } = vt(fr.SetComputeUnitLimit, t.data);
            return {
                units: e
            }
        }
        static decodeSetComputeUnitPrice(t) {
            this.checkProgramId(t.programId);
            let {
                microLamports: e
            } = vt(fr.SetComputeUnitPrice, t.data);
            return {
                microLamports: e
            }
        }
        static checkProgramId(t) {
            if (!t.equals(Ji.programId)) throw new Error("invalid instruction; programId is not ComputeBudgetProgram")
        }
    }, fr = Object.freeze({
        RequestUnits: {
            index: 0,
            layout: k.struct([k.u8("instruction"), k.u32("units"), k.u32("additionalFee")])
        },
        RequestHeapFrame: {
            index: 1,
            layout: k.struct([k.u8("instruction"), k.u32("bytes")])
        },
        SetComputeUnitLimit: {
            index: 2,
            layout: k.struct([k.u8("instruction"), k.u32("units")])
        },
        SetComputeUnitPrice: {
            index: 3,
            layout: k.struct([k.u8("instruction"), Qn("microLamports")])
        }
    }), Ji = class {
        constructor() {}
        static requestUnits(t) {
            let e = fr.RequestUnits,
                n = gt(e, t);
            return new St({
                keys: [],
                programId: this.programId,
                data: n
            })
        }
        static requestHeapFrame(t) {
            let e = fr.RequestHeapFrame,
                n = gt(e, t);
            return new St({
                keys: [],
                programId: this.programId,
                data: n
            })
        }
        static setComputeUnitLimit(t) {
            let e = fr.SetComputeUnitLimit,
                n = gt(e, t);
            return new St({
                keys: [],
                programId: this.programId,
                data: n
            })
        }
        static setComputeUnitPrice(t) {
            let e = fr.SetComputeUnitPrice,
                n = gt(e, {
                    microLamports: BigInt(t.microLamports)
                });
            return new St({
                keys: [],
                programId: this.programId,
                data: n
            })
        }
    };
    Ji.programId = new Y("ComputeBudget111111111111111111111111111111");
    Vl = 64, Gl = 32, jl = 64, Yl = k.struct([k.u8("numSignatures"), k.u8("padding"), k.u16("signatureOffset"), k.u16("signatureInstructionIndex"), k.u16("publicKeyOffset"), k.u16("publicKeyInstructionIndex"), k.u16("messageDataOffset"), k.u16("messageDataSize"), k.u16("messageInstructionIndex")]), As = class r {
        constructor() {}
        static createInstructionWithPublicKey(t) {
            let {
                publicKey: e,
                message: n,
                signature: i,
                instructionIndex: o
            } = t;
            xt(e.length === Gl, `Public Key must be ${Gl} bytes but received ${e.length} bytes`), xt(i.length === jl, `Signature must be ${jl} bytes but received ${i.length} bytes`);
            let s = Yl.span,
                a = s + e.length,
                c = a + i.length,
                d = 1,
                g = nt.Buffer.alloc(c + n.length),
                b = o ? ? 65535;
            return Yl.encode({
                numSignatures: d,
                padding: 0,
                signatureOffset: a,
                signatureInstructionIndex: b,
                publicKeyOffset: s,
                publicKeyInstructionIndex: b,
                messageDataOffset: c,
                messageDataSize: n.length,
                messageInstructionIndex: b
            }, g), g.fill(e, s), g.fill(i, a), g.fill(n, c), new St({
                keys: [],
                programId: r.programId,
                data: g
            })
        }
        static createInstructionWithPrivateKey(t) {
            let {
                privateKey: e,
                message: n,
                instructionIndex: i
            } = t;
            xt(e.length === Vl, `Private key must be ${Vl} bytes but received ${e.length} bytes`);
            try {
                let o = Ss.fromSecretKey(e),
                    s = o.publicKey.toBytes(),
                    a = gc(n, o.secretKey);
                return this.createInstructionWithPublicKey({
                    publicKey: s,
                    message: n,
                    signature: a,
                    instructionIndex: i
                })
            } catch (o) {
                throw new Error(`Error creating instruction; ${o}`)
            }
        }
    };
    As.programId = new Y("Ed25519SigVerify111111111111111111111111111");
    kw = (r, t) => {
        let e = qi.sign(r, t);
        return [e.toCompactRawBytes(), e.recovery]
    };
    qi.utils.isValidPrivateKey;
    vw = qi.getPublicKey, Zl = 32, Gu = 20, Xl = 64, Iw = 11, ju = k.struct([k.u8("numSignatures"), k.u16("signatureOffset"), k.u8("signatureInstructionIndex"), k.u16("ethAddressOffset"), k.u8("ethAddressInstructionIndex"), k.u16("messageDataOffset"), k.u16("messageDataSize"), k.u8("messageInstructionIndex"), k.blob(20, "ethAddress"), k.blob(64, "signature"), k.u8("recoveryId")]), _s = class r {
        constructor() {}
        static publicKeyToEthAddress(t) {
            xt(t.length === Xl, `Public key must be ${Xl} bytes but received ${t.length} bytes`);
            try {
                return nt.Buffer.from(qu(lt(t))).slice(-Gu)
            } catch (e) {
                throw new Error(`Error constructing Ethereum address: ${e}`)
            }
        }
        static createInstructionWithPublicKey(t) {
            let {
                publicKey: e,
                message: n,
                signature: i,
                recoveryId: o,
                instructionIndex: s
            } = t;
            return r.createInstructionWithEthAddress({
                ethAddress: r.publicKeyToEthAddress(e),
                message: n,
                signature: i,
                recoveryId: o,
                instructionIndex: s
            })
        }
        static createInstructionWithEthAddress(t) {
            let {
                ethAddress: e,
                message: n,
                signature: i,
                recoveryId: o,
                instructionIndex: s = 0
            } = t, a;
            typeof e == "string" ? e.startsWith("0x") ? a = nt.Buffer.from(e.substr(2), "hex") : a = nt.Buffer.from(e, "hex") : a = e, xt(a.length === Gu, `Address must be ${Gu} bytes but received ${a.length} bytes`);
            let c = 1 + Iw,
                d = c,
                g = c + a.length,
                b = g + i.length + 1,
                _ = 1,
                I = nt.Buffer.alloc(ju.span + n.length);
            return ju.encode({
                numSignatures: _,
                signatureOffset: g,
                signatureInstructionIndex: s,
                ethAddressOffset: d,
                ethAddressInstructionIndex: s,
                messageDataOffset: b,
                messageDataSize: n.length,
                messageInstructionIndex: s,
                signature: lt(i),
                ethAddress: lt(a),
                recoveryId: o
            }, I), I.fill(lt(n), ju.span), new St({
                keys: [],
                programId: r.programId,
                data: I
            })
        }
        static createInstructionWithPrivateKey(t) {
            let {
                privateKey: e,
                message: n,
                instructionIndex: i
            } = t;
            xt(e.length === Zl, `Private key must be ${Zl} bytes but received ${e.length} bytes`);
            try {
                let o = lt(e),
                    s = vw(o, !1).slice(1),
                    a = nt.Buffer.from(qu(lt(n))),
                    [c, d] = kw(a, o);
                return this.createInstructionWithPublicKey({
                    publicKey: s,
                    message: n,
                    signature: c,
                    recoveryId: d,
                    instructionIndex: i
                })
            } catch (o) {
                throw new Error(`Error creating instruction; ${o}`)
            }
        }
    };
    _s.programId = new Y("KeccakSecp256k11111111111111111111111111111");
    k0 = new Y("StakeConfig11111111111111111111111111111111"), Rs = class {
        constructor(t, e) {
            this.staker = void 0, this.withdrawer = void 0, this.staker = t, this.withdrawer = e
        }
    }, vn = class {
        constructor(t, e, n) {
            this.unixTimestamp = void 0, this.epoch = void 0, this.custodian = void 0, this.unixTimestamp = t, this.epoch = e, this.custodian = n
        }
    };
    B0 = vn;
    vn.default = new B0(0, 0, Y.default);
    lc = class {
        constructor() {}
        static decodeInstructionType(t) {
            this.checkProgramId(t.programId);
            let n = k.u32("instruction").decode(t.data),
                i;
            for (let [o, s] of Object.entries(ke))
                if (s.index == n) {
                    i = o;
                    break
                }
            if (!i) throw new Error("Instruction type incorrect; not a StakeInstruction");
            return i
        }
        static decodeInitialize(t) {
            this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
            let {
                authorized: e,
                lockup: n
            } = vt(ke.Initialize, t.data);
            return {
                stakePubkey: t.keys[0].pubkey,
                authorized: new Rs(new Y(e.staker), new Y(e.withdrawer)),
                lockup: new vn(n.unixTimestamp, n.epoch, new Y(n.custodian))
            }
        }
        static decodeDelegate(t) {
            return this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 6), vt(ke.Delegate, t.data), {
                stakePubkey: t.keys[0].pubkey,
                votePubkey: t.keys[1].pubkey,
                authorizedPubkey: t.keys[5].pubkey
            }
        }
        static decodeAuthorize(t) {
            this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
            let {
                newAuthorized: e,
                stakeAuthorizationType: n
            } = vt(ke.Authorize, t.data), i = {
                stakePubkey: t.keys[0].pubkey,
                authorizedPubkey: t.keys[2].pubkey,
                newAuthorizedPubkey: new Y(e),
                stakeAuthorizationType: {
                    index: n
                }
            };
            return t.keys.length > 3 && (i.custodianPubkey = t.keys[3].pubkey), i
        }
        static decodeAuthorizeWithSeed(t) {
            this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 2);
            let {
                newAuthorized: e,
                stakeAuthorizationType: n,
                authoritySeed: i,
                authorityOwner: o
            } = vt(ke.AuthorizeWithSeed, t.data), s = {
                stakePubkey: t.keys[0].pubkey,
                authorityBase: t.keys[1].pubkey,
                authoritySeed: i,
                authorityOwner: new Y(o),
                newAuthorizedPubkey: new Y(e),
                stakeAuthorizationType: {
                    index: n
                }
            };
            return t.keys.length > 3 && (s.custodianPubkey = t.keys[3].pubkey), s
        }
        static decodeSplit(t) {
            this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
            let {
                lamports: e
            } = vt(ke.Split, t.data);
            return {
                stakePubkey: t.keys[0].pubkey,
                splitStakePubkey: t.keys[1].pubkey,
                authorizedPubkey: t.keys[2].pubkey,
                lamports: e
            }
        }
        static decodeMerge(t) {
            return this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3), vt(ke.Merge, t.data), {
                stakePubkey: t.keys[0].pubkey,
                sourceStakePubKey: t.keys[1].pubkey,
                authorizedPubkey: t.keys[4].pubkey
            }
        }
        static decodeWithdraw(t) {
            this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 5);
            let {
                lamports: e
            } = vt(ke.Withdraw, t.data), n = {
                stakePubkey: t.keys[0].pubkey,
                toPubkey: t.keys[1].pubkey,
                authorizedPubkey: t.keys[4].pubkey,
                lamports: e
            };
            return t.keys.length > 5 && (n.custodianPubkey = t.keys[5].pubkey), n
        }
        static decodeDeactivate(t) {
            return this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3), vt(ke.Deactivate, t.data), {
                stakePubkey: t.keys[0].pubkey,
                authorizedPubkey: t.keys[2].pubkey
            }
        }
        static checkProgramId(t) {
            if (!t.equals(ti.programId)) throw new Error("invalid instruction; programId is not StakeProgram")
        }
        static checkKeyLength(t, e) {
            if (t.length < e) throw new Error(`invalid instruction; found ${t.length} keys, expected at least ${e}`)
        }
    }, ke = Object.freeze({
        Initialize: {
            index: 0,
            layout: k.struct([k.u32("instruction"), Pm(), Cm()])
        },
        Authorize: {
            index: 1,
            layout: k.struct([k.u32("instruction"), pt("newAuthorized"), k.u32("stakeAuthorizationType")])
        },
        Delegate: {
            index: 2,
            layout: k.struct([k.u32("instruction")])
        },
        Split: {
            index: 3,
            layout: k.struct([k.u32("instruction"), k.ns64("lamports")])
        },
        Withdraw: {
            index: 4,
            layout: k.struct([k.u32("instruction"), k.ns64("lamports")])
        },
        Deactivate: {
            index: 5,
            layout: k.struct([k.u32("instruction")])
        },
        Merge: {
            index: 7,
            layout: k.struct([k.u32("instruction")])
        },
        AuthorizeWithSeed: {
            index: 8,
            layout: k.struct([k.u32("instruction"), pt("newAuthorized"), k.u32("stakeAuthorizationType"), Bn("authoritySeed"), pt("authorityOwner")])
        }
    }), Sw = Object.freeze({
        Staker: {
            index: 0
        },
        Withdrawer: {
            index: 1
        }
    }), ti = class {
        constructor() {}
        static initialize(t) {
            let {
                stakePubkey: e,
                authorized: n,
                lockup: i
            } = t, o = i || vn.default, s = ke.Initialize, a = gt(s, {
                authorized: {
                    staker: lt(n.staker.toBuffer()),
                    withdrawer: lt(n.withdrawer.toBuffer())
                },
                lockup: {
                    unixTimestamp: o.unixTimestamp,
                    epoch: o.epoch,
                    custodian: lt(o.custodian.toBuffer())
                }
            }), c = {
                keys: [{
                    pubkey: e,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: Jn,
                    isSigner: !1,
                    isWritable: !1
                }],
                programId: this.programId,
                data: a
            };
            return new St(c)
        }
        static createAccountWithSeed(t) {
            let e = new It;
            e.add(Ae.createAccountWithSeed({
                fromPubkey: t.fromPubkey,
                newAccountPubkey: t.stakePubkey,
                basePubkey: t.basePubkey,
                seed: t.seed,
                lamports: t.lamports,
                space: this.space,
                programId: this.programId
            }));
            let {
                stakePubkey: n,
                authorized: i,
                lockup: o
            } = t;
            return e.add(this.initialize({
                stakePubkey: n,
                authorized: i,
                lockup: o
            }))
        }
        static createAccount(t) {
            let e = new It;
            e.add(Ae.createAccount({
                fromPubkey: t.fromPubkey,
                newAccountPubkey: t.stakePubkey,
                lamports: t.lamports,
                space: this.space,
                programId: this.programId
            }));
            let {
                stakePubkey: n,
                authorized: i,
                lockup: o
            } = t;
            return e.add(this.initialize({
                stakePubkey: n,
                authorized: i,
                lockup: o
            }))
        }
        static delegate(t) {
            let {
                stakePubkey: e,
                authorizedPubkey: n,
                votePubkey: i
            } = t, o = ke.Delegate, s = gt(o);
            return new It().add({
                keys: [{
                    pubkey: e,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: i,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: cr,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: xs,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: k0,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: n,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: s
            })
        }
        static authorize(t) {
            let {
                stakePubkey: e,
                authorizedPubkey: n,
                newAuthorizedPubkey: i,
                stakeAuthorizationType: o,
                custodianPubkey: s
            } = t, a = ke.Authorize, c = gt(a, {
                newAuthorized: lt(i.toBuffer()),
                stakeAuthorizationType: o.index
            }), d = [{
                pubkey: e,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: cr,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: n,
                isSigner: !0,
                isWritable: !1
            }];
            return s && d.push({
                pubkey: s,
                isSigner: !0,
                isWritable: !1
            }), new It().add({
                keys: d,
                programId: this.programId,
                data: c
            })
        }
        static authorizeWithSeed(t) {
            let {
                stakePubkey: e,
                authorityBase: n,
                authoritySeed: i,
                authorityOwner: o,
                newAuthorizedPubkey: s,
                stakeAuthorizationType: a,
                custodianPubkey: c
            } = t, d = ke.AuthorizeWithSeed, g = gt(d, {
                newAuthorized: lt(s.toBuffer()),
                stakeAuthorizationType: a.index,
                authoritySeed: i,
                authorityOwner: lt(o.toBuffer())
            }), b = [{
                pubkey: e,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: n,
                isSigner: !0,
                isWritable: !1
            }, {
                pubkey: cr,
                isSigner: !1,
                isWritable: !1
            }];
            return c && b.push({
                pubkey: c,
                isSigner: !0,
                isWritable: !1
            }), new It().add({
                keys: b,
                programId: this.programId,
                data: g
            })
        }
        static splitInstruction(t) {
            let {
                stakePubkey: e,
                authorizedPubkey: n,
                splitStakePubkey: i,
                lamports: o
            } = t, s = ke.Split, a = gt(s, {
                lamports: o
            });
            return new St({
                keys: [{
                    pubkey: e,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: i,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: n,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: a
            })
        }
        static split(t, e) {
            let n = new It;
            return n.add(Ae.createAccount({
                fromPubkey: t.authorizedPubkey,
                newAccountPubkey: t.splitStakePubkey,
                lamports: e,
                space: this.space,
                programId: this.programId
            })), n.add(this.splitInstruction(t))
        }
        static splitWithSeed(t, e) {
            let {
                stakePubkey: n,
                authorizedPubkey: i,
                splitStakePubkey: o,
                basePubkey: s,
                seed: a,
                lamports: c
            } = t, d = new It;
            return d.add(Ae.allocate({
                accountPubkey: o,
                basePubkey: s,
                seed: a,
                space: this.space,
                programId: this.programId
            })), e && e > 0 && d.add(Ae.transfer({
                fromPubkey: t.authorizedPubkey,
                toPubkey: o,
                lamports: e
            })), d.add(this.splitInstruction({
                stakePubkey: n,
                authorizedPubkey: i,
                splitStakePubkey: o,
                lamports: c
            }))
        }
        static merge(t) {
            let {
                stakePubkey: e,
                sourceStakePubKey: n,
                authorizedPubkey: i
            } = t, o = ke.Merge, s = gt(o);
            return new It().add({
                keys: [{
                    pubkey: e,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: n,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: cr,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: xs,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: i,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: s
            })
        }
        static withdraw(t) {
            let {
                stakePubkey: e,
                authorizedPubkey: n,
                toPubkey: i,
                lamports: o,
                custodianPubkey: s
            } = t, a = ke.Withdraw, c = gt(a, {
                lamports: o
            }), d = [{
                pubkey: e,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: i,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: cr,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: xs,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: n,
                isSigner: !0,
                isWritable: !1
            }];
            return s && d.push({
                pubkey: s,
                isSigner: !0,
                isWritable: !1
            }), new It().add({
                keys: d,
                programId: this.programId,
                data: c
            })
        }
        static deactivate(t) {
            let {
                stakePubkey: e,
                authorizedPubkey: n
            } = t, i = ke.Deactivate, o = gt(i);
            return new It().add({
                keys: [{
                    pubkey: e,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: cr,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: n,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: o
            })
        }
    };
    ti.programId = new Y("Stake11111111111111111111111111111111111111");
    ti.space = 200;
    Ls = class {
        constructor(t, e, n, i) {
            this.nodePubkey = void 0, this.authorizedVoter = void 0, this.authorizedWithdrawer = void 0, this.commission = void 0, this.nodePubkey = t, this.authorizedVoter = e, this.authorizedWithdrawer = n, this.commission = i
        }
    }, dc = class {
        constructor() {}
        static decodeInstructionType(t) {
            this.checkProgramId(t.programId);
            let n = k.u32("instruction").decode(t.data),
                i;
            for (let [o, s] of Object.entries(hr))
                if (s.index == n) {
                    i = o;
                    break
                }
            if (!i) throw new Error("Instruction type incorrect; not a VoteInstruction");
            return i
        }
        static decodeInitializeAccount(t) {
            this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 4);
            let {
                voteInit: e
            } = vt(hr.InitializeAccount, t.data);
            return {
                votePubkey: t.keys[0].pubkey,
                nodePubkey: t.keys[3].pubkey,
                voteInit: new Ls(new Y(e.nodePubkey), new Y(e.authorizedVoter), new Y(e.authorizedWithdrawer), e.commission)
            }
        }
        static decodeAuthorize(t) {
            this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
            let {
                newAuthorized: e,
                voteAuthorizationType: n
            } = vt(hr.Authorize, t.data);
            return {
                votePubkey: t.keys[0].pubkey,
                authorizedPubkey: t.keys[2].pubkey,
                newAuthorizedPubkey: new Y(e),
                voteAuthorizationType: {
                    index: n
                }
            }
        }
        static decodeAuthorizeWithSeed(t) {
            this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
            let {
                voteAuthorizeWithSeedArgs: {
                    currentAuthorityDerivedKeyOwnerPubkey: e,
                    currentAuthorityDerivedKeySeed: n,
                    newAuthorized: i,
                    voteAuthorizationType: o
                }
            } = vt(hr.AuthorizeWithSeed, t.data);
            return {
                currentAuthorityDerivedKeyBasePubkey: t.keys[2].pubkey,
                currentAuthorityDerivedKeyOwnerPubkey: new Y(e),
                currentAuthorityDerivedKeySeed: n,
                newAuthorizedPubkey: new Y(i),
                voteAuthorizationType: {
                    index: o
                },
                votePubkey: t.keys[0].pubkey
            }
        }
        static decodeWithdraw(t) {
            this.checkProgramId(t.programId), this.checkKeyLength(t.keys, 3);
            let {
                lamports: e
            } = vt(hr.Withdraw, t.data);
            return {
                votePubkey: t.keys[0].pubkey,
                authorizedWithdrawerPubkey: t.keys[2].pubkey,
                lamports: e,
                toPubkey: t.keys[1].pubkey
            }
        }
        static checkProgramId(t) {
            if (!t.equals(ei.programId)) throw new Error("invalid instruction; programId is not VoteProgram")
        }
        static checkKeyLength(t, e) {
            if (t.length < e) throw new Error(`invalid instruction; found ${t.length} keys, expected at least ${e}`)
        }
    }, hr = Object.freeze({
        InitializeAccount: {
            index: 0,
            layout: k.struct([k.u32("instruction"), Fm()])
        },
        Authorize: {
            index: 1,
            layout: k.struct([k.u32("instruction"), pt("newAuthorized"), k.u32("voteAuthorizationType")])
        },
        Withdraw: {
            index: 3,
            layout: k.struct([k.u32("instruction"), k.ns64("lamports")])
        },
        UpdateValidatorIdentity: {
            index: 4,
            layout: k.struct([k.u32("instruction")])
        },
        AuthorizeWithSeed: {
            index: 10,
            layout: k.struct([k.u32("instruction"), Om()])
        }
    }), Aw = Object.freeze({
        Voter: {
            index: 0
        },
        Withdrawer: {
            index: 1
        }
    }), ei = class r {
        constructor() {}
        static initializeAccount(t) {
            let {
                votePubkey: e,
                nodePubkey: n,
                voteInit: i
            } = t, o = hr.InitializeAccount, s = gt(o, {
                voteInit: {
                    nodePubkey: lt(i.nodePubkey.toBuffer()),
                    authorizedVoter: lt(i.authorizedVoter.toBuffer()),
                    authorizedWithdrawer: lt(i.authorizedWithdrawer.toBuffer()),
                    commission: i.commission
                }
            }), a = {
                keys: [{
                    pubkey: e,
                    isSigner: !1,
                    isWritable: !0
                }, {
                    pubkey: Jn,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: cr,
                    isSigner: !1,
                    isWritable: !1
                }, {
                    pubkey: n,
                    isSigner: !0,
                    isWritable: !1
                }],
                programId: this.programId,
                data: s
            };
            return new St(a)
        }
        static createAccount(t) {
            let e = new It;
            return e.add(Ae.createAccount({
                fromPubkey: t.fromPubkey,
                newAccountPubkey: t.votePubkey,
                lamports: t.lamports,
                space: this.space,
                programId: this.programId
            })), e.add(this.initializeAccount({
                votePubkey: t.votePubkey,
                nodePubkey: t.voteInit.nodePubkey,
                voteInit: t.voteInit
            }))
        }
        static authorize(t) {
            let {
                votePubkey: e,
                authorizedPubkey: n,
                newAuthorizedPubkey: i,
                voteAuthorizationType: o
            } = t, s = hr.Authorize, a = gt(s, {
                newAuthorized: lt(i.toBuffer()),
                voteAuthorizationType: o.index
            }), c = [{
                pubkey: e,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: cr,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: n,
                isSigner: !0,
                isWritable: !1
            }];
            return new It().add({
                keys: c,
                programId: this.programId,
                data: a
            })
        }
        static authorizeWithSeed(t) {
            let {
                currentAuthorityDerivedKeyBasePubkey: e,
                currentAuthorityDerivedKeyOwnerPubkey: n,
                currentAuthorityDerivedKeySeed: i,
                newAuthorizedPubkey: o,
                voteAuthorizationType: s,
                votePubkey: a
            } = t, c = hr.AuthorizeWithSeed, d = gt(c, {
                voteAuthorizeWithSeedArgs: {
                    currentAuthorityDerivedKeyOwnerPubkey: lt(n.toBuffer()),
                    currentAuthorityDerivedKeySeed: i,
                    newAuthorized: lt(o.toBuffer()),
                    voteAuthorizationType: s.index
                }
            }), g = [{
                pubkey: a,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: cr,
                isSigner: !1,
                isWritable: !1
            }, {
                pubkey: e,
                isSigner: !0,
                isWritable: !1
            }];
            return new It().add({
                keys: g,
                programId: this.programId,
                data: d
            })
        }
        static withdraw(t) {
            let {
                votePubkey: e,
                authorizedWithdrawerPubkey: n,
                lamports: i,
                toPubkey: o
            } = t, s = hr.Withdraw, a = gt(s, {
                lamports: i
            }), c = [{
                pubkey: e,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: o,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: n,
                isSigner: !0,
                isWritable: !1
            }];
            return new It().add({
                keys: c,
                programId: this.programId,
                data: a
            })
        }
        static safeWithdraw(t, e, n) {
            if (t.lamports > e - n) throw new Error("Withdraw will leave vote account with insufficient funds.");
            return r.withdraw(t)
        }
        static updateValidatorIdentity(t) {
            let {
                votePubkey: e,
                authorizedWithdrawerPubkey: n,
                nodePubkey: i
            } = t, o = hr.UpdateValidatorIdentity, s = gt(o), a = [{
                pubkey: e,
                isSigner: !1,
                isWritable: !0
            }, {
                pubkey: i,
                isSigner: !0,
                isWritable: !1
            }, {
                pubkey: n,
                isSigner: !0,
                isWritable: !1
            }];
            return new It().add({
                keys: a,
                programId: this.programId,
                data: s
            })
        }
    };
    ei.programId = new Y("Vote111111111111111111111111111111111111111");
    ei.space = 3762;
    v0 = new Y("Va1idator1nfo111111111111111111111111111111"), _w = D({
        name: $(),
        website: it($()),
        details: it($()),
        keybaseUsername: it($())
    }), pc = class r {
        constructor(t, e) {
            this.key = void 0, this.info = void 0, this.key = t, this.info = e
        }
        static fromConfigData(t) {
            let e = [...t];
            if (Ke(e) !== 2) return null;
            let i = [];
            for (let o = 0; o < 2; o++) {
                let s = new Y(e.splice(0, lr)),
                    a = e.splice(0, 1)[0] === 1;
                i.push({
                    publicKey: s,
                    isSigner: a
                })
            }
            if (i[0].publicKey.equals(v0) && i[1].isSigner) {
                let o = Bn().decode(nt.Buffer.from(e)),
                    s = JSON.parse(o);
                return xu(s, _w), new r(i[1].publicKey, s)
            }
            return null
        }
    }, Rw = new Y("Vote111111111111111111111111111111111111111"), Lw = k.struct([pt("nodePubkey"), pt("authorizedWithdrawer"), k.u8("commission"), k.nu64(), k.seq(k.struct([k.nu64("slot"), k.u32("confirmationCount")]), k.offset(k.u32(), -8), "votes"), k.u8("rootSlotValid"), k.nu64("rootSlot"), k.nu64(), k.seq(k.struct([k.nu64("epoch"), pt("authorizedVoter")]), k.offset(k.u32(), -8), "authorizedVoters"), k.struct([k.seq(k.struct([pt("authorizedPubkey"), k.nu64("epochOfLastAuthorizedSwitch"), k.nu64("targetEpoch")]), 32, "buf"), k.nu64("idx"), k.u8("isEmpty")], "priorVoters"), k.nu64(), k.seq(k.struct([k.nu64("epoch"), k.nu64("credits"), k.nu64("prevCredits")]), k.offset(k.u32(), -8), "epochCredits"), k.struct([k.nu64("slot"), k.nu64("timestamp")], "lastTimestamp")]), yc = class r {
        constructor(t) {
            this.nodePubkey = void 0, this.authorizedWithdrawer = void 0, this.commission = void 0, this.rootSlot = void 0, this.votes = void 0, this.authorizedVoters = void 0, this.priorVoters = void 0, this.epochCredits = void 0, this.lastTimestamp = void 0, this.nodePubkey = t.nodePubkey, this.authorizedWithdrawer = t.authorizedWithdrawer, this.commission = t.commission, this.rootSlot = t.rootSlot, this.votes = t.votes, this.authorizedVoters = t.authorizedVoters, this.priorVoters = t.priorVoters, this.epochCredits = t.epochCredits, this.lastTimestamp = t.lastTimestamp
        }
        static fromAccountData(t) {
            let n = Lw.decode(lt(t), 4),
                i = n.rootSlot;
            return n.rootSlotValid || (i = null), new r({
                nodePubkey: new Y(n.nodePubkey),
                authorizedWithdrawer: new Y(n.authorizedWithdrawer),
                commission: n.commission,
                votes: n.votes,
                rootSlot: i,
                authorizedVoters: n.authorizedVoters.map(Tw),
                priorVoters: Mw(n.priorVoters),
                epochCredits: n.epochCredits,
                lastTimestamp: n.lastTimestamp
            })
        }
    };
    Ql = {
        http: {
            devnet: "http://api.devnet.solana.com",
            testnet: "http://api.testnet.solana.com",
            "mainnet-beta": "http://api.mainnet-beta.solana.com/"
        },
        https: {
            devnet: "https://api.devnet.solana.com",
            testnet: "https://api.testnet.solana.com",
            "mainnet-beta": "https://api.mainnet-beta.solana.com/"
        }
    };
    Cw = 1e9
});
export {
    st as a, ft as b, Nw as c, on as d, yt as e, wt as f, io as g, Dw as h, Qe as i, ta as j, O as k, Ha as l, Yf as m, Qa as n, yi as o, eu as p, Nu as q, Y as r, $i as s, mc as t, St as u, It as v, Qu as w, cr as x, Jn as y, Ae as z, ji as A, cc as B, Cw as C, Fw as D, Ow as E
};
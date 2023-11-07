import {r as b_, E as ur} from "./__polyfill-node.events-e75a050f.js";
import {g as Jn, c as cr, b as se, d as w_, w as Kl, r as Gl, f as Ac, t as fo, e as E_, a as Wl, I as _i, A as x_, U as I_, h as Q, i as S_, j as ac, k as P_, _ as O_, P as A_, V as qh, l as C_, D as R_, C as T_, Z as zh, $ as $_, m as D_, n as co, q as N_, o as Jl, p as Nr, y as F_, s as j_, X as an, u as Nt, v as er, x as vi, z as ar, B as L_, E as cn, F as Yl, G as M_, H as q_, J as z_, K as Xl, L as U_, M as Zl, Y as Ql, N as hn, O as cc, Q as so, R as ln, S as B_, T as oo, W as H_, a0 as k_, a1 as V_, a2 as K_, a3 as G_, a4 as Va, a5 as Uh, a6 as W_, a7 as J_, a8 as Y_, a9 as Bh, aa as X_, ab as Z_, ac as Q_, ad as e1, ae as t1, af as r1, ag as i1, ah as ao, ai as ef, aj as Ka, ak as n1} from "./bundle-b2289479.js";
var po = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var uc = function(a, r) {
    return uc = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, n) {
        t.__proto__ = n
    }
    || function(t, n) {
        for (var o in n)
            n.hasOwnProperty(o) && (t[o] = n[o])
    }
    ,
    uc(a, r)
};
function s1(a, r) {
    uc(a, r);
    function t() {
        this.constructor = a
    }
    a.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var hc = function() {
    return hc = Object.assign || function(r) {
        for (var t, n = 1, o = arguments.length; n < o; n++) {
            t = arguments[n];
            for (var c in t)
                Object.prototype.hasOwnProperty.call(t, c) && (r[c] = t[c])
        }
        return r
    }
    ,
    hc.apply(this, arguments)
};
function o1(a, r) {
    var t = {};
    for (var n in a)
        Object.prototype.hasOwnProperty.call(a, n) && r.indexOf(n) < 0 && (t[n] = a[n]);
    if (a != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(a); o < n.length; o++)
            r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(a, n[o]) && (t[n[o]] = a[n[o]]);
    return t
}
function a1(a, r, t, n) {
    var o = arguments.length, c = o < 3 ? r : n === null ? n = Object.getOwnPropertyDescriptor(r, t) : n, l;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        c = Reflect.decorate(a, r, t, n);
    else
        for (var d = a.length - 1; d >= 0; d--)
            (l = a[d]) && (c = (o < 3 ? l(c) : o > 3 ? l(r, t, c) : l(r, t)) || c);
    return o > 3 && c && Object.defineProperty(r, t, c),
    c
}
function c1(a, r) {
    return function(t, n) {
        r(t, n, a)
    }
}
function u1(a, r) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(a, r)
}
function h1(a, r, t, n) {
    function o(c) {
        return c instanceof t ? c : new t(function(l) {
            l(c)
        }
        )
    }
    return new (t || (t = Promise))(function(c, l) {
        function d(O) {
            try {
                y(n.next(O))
            } catch (q) {
                l(q)
            }
        }
        function b(O) {
            try {
                y(n.throw(O))
            } catch (q) {
                l(q)
            }
        }
        function y(O) {
            O.done ? c(O.value) : o(O.value).then(d, b)
        }
        y((n = n.apply(a, r || [])).next())
    }
    )
}
function l1(a, r) {
    var t = {
        label: 0,
        sent: function() {
            if (c[0] & 1)
                throw c[1];
            return c[1]
        },
        trys: [],
        ops: []
    }, n, o, c, l;
    return l = {
        next: d(0),
        throw: d(1),
        return: d(2)
    },
    typeof Symbol == "function" && (l[Symbol.iterator] = function() {
        return this
    }
    ),
    l;
    function d(y) {
        return function(O) {
            return b([y, O])
        }
    }
    function b(y) {
        if (n)
            throw new TypeError("Generator is already executing.");
        for (; t; )
            try {
                if (n = 1,
                o && (c = y[0] & 2 ? o.return : y[0] ? o.throw || ((c = o.return) && c.call(o),
                0) : o.next) && !(c = c.call(o, y[1])).done)
                    return c;
                switch (o = 0,
                c && (y = [y[0] & 2, c.value]),
                y[0]) {
                case 0:
                case 1:
                    c = y;
                    break;
                case 4:
                    return t.label++,
                    {
                        value: y[1],
                        done: !1
                    };
                case 5:
                    t.label++,
                    o = y[1],
                    y = [0];
                    continue;
                case 7:
                    y = t.ops.pop(),
                    t.trys.pop();
                    continue;
                default:
                    if (c = t.trys,
                    !(c = c.length > 0 && c[c.length - 1]) && (y[0] === 6 || y[0] === 2)) {
                        t = 0;
                        continue
                    }
                    if (y[0] === 3 && (!c || y[1] > c[0] && y[1] < c[3])) {
                        t.label = y[1];
                        break
                    }
                    if (y[0] === 6 && t.label < c[1]) {
                        t.label = c[1],
                        c = y;
                        break
                    }
                    if (c && t.label < c[2]) {
                        t.label = c[2],
                        t.ops.push(y);
                        break
                    }
                    c[2] && t.ops.pop(),
                    t.trys.pop();
                    continue
                }
                y = r.call(a, t)
            } catch (O) {
                y = [6, O],
                o = 0
            } finally {
                n = c = 0
            }
        if (y[0] & 5)
            throw y[1];
        return {
            value: y[0] ? y[1] : void 0,
            done: !0
        }
    }
}
function f1(a, r, t, n) {
    n === void 0 && (n = t),
    a[n] = r[t]
}
function p1(a, r) {
    for (var t in a)
        t !== "default" && !r.hasOwnProperty(t) && (r[t] = a[t])
}
function lc(a) {
    var r = typeof Symbol == "function" && Symbol.iterator
      , t = r && a[r]
      , n = 0;
    if (t)
        return t.call(a);
    if (a && typeof a.length == "number")
        return {
            next: function() {
                return a && n >= a.length && (a = void 0),
                {
                    value: a && a[n++],
                    done: !a
                }
            }
        };
    throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function tf(a, r) {
    var t = typeof Symbol == "function" && a[Symbol.iterator];
    if (!t)
        return a;
    var n = t.call(a), o, c = [], l;
    try {
        for (; (r === void 0 || r-- > 0) && !(o = n.next()).done; )
            c.push(o.value)
    } catch (d) {
        l = {
            error: d
        }
    } finally {
        try {
            o && !o.done && (t = n.return) && t.call(n)
        } finally {
            if (l)
                throw l.error
        }
    }
    return c
}
function d1() {
    for (var a = [], r = 0; r < arguments.length; r++)
        a = a.concat(tf(arguments[r]));
    return a
}
function g1() {
    for (var a = 0, r = 0, t = arguments.length; r < t; r++)
        a += arguments[r].length;
    for (var n = Array(a), o = 0, r = 0; r < t; r++)
        for (var c = arguments[r], l = 0, d = c.length; l < d; l++,
        o++)
            n[o] = c[l];
    return n
}
function kn(a) {
    return this instanceof kn ? (this.v = a,
    this) : new kn(a)
}
function y1(a, r, t) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = t.apply(a, r || []), o, c = [];
    return o = {},
    l("next"),
    l("throw"),
    l("return"),
    o[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    o;
    function l(C) {
        n[C] && (o[C] = function(z) {
            return new Promise(function(F, K) {
                c.push([C, z, F, K]) > 1 || d(C, z)
            }
            )
        }
        )
    }
    function d(C, z) {
        try {
            b(n[C](z))
        } catch (F) {
            q(c[0][3], F)
        }
    }
    function b(C) {
        C.value instanceof kn ? Promise.resolve(C.value.v).then(y, O) : q(c[0][2], C)
    }
    function y(C) {
        d("next", C)
    }
    function O(C) {
        d("throw", C)
    }
    function q(C, z) {
        C(z),
        c.shift(),
        c.length && d(c[0][0], c[0][1])
    }
}
function v1(a) {
    var r, t;
    return r = {},
    n("next"),
    n("throw", function(o) {
        throw o
    }),
    n("return"),
    r[Symbol.iterator] = function() {
        return this
    }
    ,
    r;
    function n(o, c) {
        r[o] = a[o] ? function(l) {
            return (t = !t) ? {
                value: kn(a[o](l)),
                done: o === "return"
            } : c ? c(l) : l
        }
        : c
    }
}
function _1(a) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = a[Symbol.asyncIterator], t;
    return r ? r.call(a) : (a = typeof lc == "function" ? lc(a) : a[Symbol.iterator](),
    t = {},
    n("next"),
    n("throw"),
    n("return"),
    t[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    t);
    function n(c) {
        t[c] = a[c] && function(l) {
            return new Promise(function(d, b) {
                l = a[c](l),
                o(d, b, l.done, l.value)
            }
            )
        }
    }
    function o(c, l, d, b) {
        Promise.resolve(b).then(function(y) {
            c({
                value: y,
                done: d
            })
        }, l)
    }
}
function m1(a, r) {
    return Object.defineProperty ? Object.defineProperty(a, "raw", {
        value: r
    }) : a.raw = r,
    a
}
function b1(a) {
    if (a && a.__esModule)
        return a;
    var r = {};
    if (a != null)
        for (var t in a)
            Object.hasOwnProperty.call(a, t) && (r[t] = a[t]);
    return r.default = a,
    r
}
function w1(a) {
    return a && a.__esModule ? a : {
        default: a
    }
}
function E1(a, r) {
    if (!r.has(a))
        throw new TypeError("attempted to get private field on non-instance");
    return r.get(a)
}
function x1(a, r, t) {
    if (!r.has(a))
        throw new TypeError("attempted to set private field on non-instance");
    return r.set(a, t),
    t
}
var I1 = Object.freeze({
    __proto__: null,
    get __assign() {
        return hc
    },
    __asyncDelegator: v1,
    __asyncGenerator: y1,
    __asyncValues: _1,
    __await: kn,
    __awaiter: h1,
    __classPrivateFieldGet: E1,
    __classPrivateFieldSet: x1,
    __createBinding: f1,
    __decorate: a1,
    __exportStar: p1,
    __extends: s1,
    __generator: l1,
    __importDefault: w1,
    __importStar: b1,
    __makeTemplateObject: m1,
    __metadata: u1,
    __param: c1,
    __read: tf,
    __rest: o1,
    __spread: d1,
    __spreadArrays: g1,
    __values: lc
})
  , rf = Jn(I1)
  , Yn = {};
Object.defineProperty(Yn, "__esModule", {
    value: !0
});
function S1(a) {
    if (typeof a != "string")
        throw new Error(`Cannot safe json parse value of type ${typeof a}`);
    try {
        return JSON.parse(a)
    } catch {
        return a
    }
}
Yn.safeJsonParse = S1;
function P1(a) {
    return typeof a == "string" ? a : JSON.stringify(a, (r,t)=>typeof t > "u" ? null : t)
}
Yn.safeJsonStringify = P1;
var $n = {
    exports: {}
}, Hh;
function O1() {
    return Hh || (Hh = 1,
    function() {
        let a;
        function r() {}
        a = r,
        a.prototype.getItem = function(t) {
            return this.hasOwnProperty(t) ? String(this[t]) : null
        }
        ,
        a.prototype.setItem = function(t, n) {
            this[t] = String(n)
        }
        ,
        a.prototype.removeItem = function(t) {
            delete this[t]
        }
        ,
        a.prototype.clear = function() {
            const t = this;
            Object.keys(t).forEach(function(n) {
                t[n] = void 0,
                delete t[n]
            })
        }
        ,
        a.prototype.key = function(t) {
            return t = t || 0,
            Object.keys(this)[t]
        }
        ,
        a.prototype.__defineGetter__("length", function() {
            return Object.keys(this).length
        }),
        typeof cr < "u" && cr.localStorage ? $n.exports = cr.localStorage : typeof window < "u" && window.localStorage ? $n.exports = window.localStorage : $n.exports = new r
    }()),
    $n.exports
}
var Ga = {}, Dn = {}, kh;
function A1() {
    if (kh)
        return Dn;
    kh = 1,
    Object.defineProperty(Dn, "__esModule", {
        value: !0
    }),
    Dn.IKeyValueStorage = void 0;
    class a {
    }
    return Dn.IKeyValueStorage = a,
    Dn
}
var Nn = {}, Vh;
function C1() {
    if (Vh)
        return Nn;
    Vh = 1,
    Object.defineProperty(Nn, "__esModule", {
        value: !0
    }),
    Nn.parseEntry = void 0;
    const a = Yn;
    function r(t) {
        var n;
        return [t[0], a.safeJsonParse((n = t[1]) !== null && n !== void 0 ? n : "")]
    }
    return Nn.parseEntry = r,
    Nn
}
var Kh;
function R1() {
    return Kh || (Kh = 1,
    function(a) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        const r = rf;
        r.__exportStar(A1(), a),
        r.__exportStar(C1(), a)
    }(Ga)),
    Ga
}
Object.defineProperty(po, "__esModule", {
    value: !0
});
po.KeyValueStorage = void 0;
const un = rf
  , Gh = Yn
  , T1 = un.__importDefault(O1())
  , $1 = R1();
class nf {
    constructor() {
        this.localStorage = T1.default
    }
    getKeys() {
        return un.__awaiter(this, void 0, void 0, function*() {
            return Object.keys(this.localStorage)
        })
    }
    getEntries() {
        return un.__awaiter(this, void 0, void 0, function*() {
            return Object.entries(this.localStorage).map($1.parseEntry)
        })
    }
    getItem(r) {
        return un.__awaiter(this, void 0, void 0, function*() {
            const t = this.localStorage.getItem(r);
            if (t !== null)
                return Gh.safeJsonParse(t)
        })
    }
    setItem(r, t) {
        return un.__awaiter(this, void 0, void 0, function*() {
            this.localStorage.setItem(r, Gh.safeJsonStringify(t))
        })
    }
    removeItem(r) {
        return un.__awaiter(this, void 0, void 0, function*() {
            this.localStorage.removeItem(r)
        })
    }
}
po.KeyValueStorage = nf;
var D1 = po.default = nf
  , fn = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var fc = function(a, r) {
    return fc = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, n) {
        t.__proto__ = n
    }
    || function(t, n) {
        for (var o in n)
            n.hasOwnProperty(o) && (t[o] = n[o])
    }
    ,
    fc(a, r)
};
function N1(a, r) {
    fc(a, r);
    function t() {
        this.constructor = a
    }
    a.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var pc = function() {
    return pc = Object.assign || function(r) {
        for (var t, n = 1, o = arguments.length; n < o; n++) {
            t = arguments[n];
            for (var c in t)
                Object.prototype.hasOwnProperty.call(t, c) && (r[c] = t[c])
        }
        return r
    }
    ,
    pc.apply(this, arguments)
};
function F1(a, r) {
    var t = {};
    for (var n in a)
        Object.prototype.hasOwnProperty.call(a, n) && r.indexOf(n) < 0 && (t[n] = a[n]);
    if (a != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(a); o < n.length; o++)
            r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(a, n[o]) && (t[n[o]] = a[n[o]]);
    return t
}
function j1(a, r, t, n) {
    var o = arguments.length, c = o < 3 ? r : n === null ? n = Object.getOwnPropertyDescriptor(r, t) : n, l;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        c = Reflect.decorate(a, r, t, n);
    else
        for (var d = a.length - 1; d >= 0; d--)
            (l = a[d]) && (c = (o < 3 ? l(c) : o > 3 ? l(r, t, c) : l(r, t)) || c);
    return o > 3 && c && Object.defineProperty(r, t, c),
    c
}
function L1(a, r) {
    return function(t, n) {
        r(t, n, a)
    }
}
function M1(a, r) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(a, r)
}
function q1(a, r, t, n) {
    function o(c) {
        return c instanceof t ? c : new t(function(l) {
            l(c)
        }
        )
    }
    return new (t || (t = Promise))(function(c, l) {
        function d(O) {
            try {
                y(n.next(O))
            } catch (q) {
                l(q)
            }
        }
        function b(O) {
            try {
                y(n.throw(O))
            } catch (q) {
                l(q)
            }
        }
        function y(O) {
            O.done ? c(O.value) : o(O.value).then(d, b)
        }
        y((n = n.apply(a, r || [])).next())
    }
    )
}
function z1(a, r) {
    var t = {
        label: 0,
        sent: function() {
            if (c[0] & 1)
                throw c[1];
            return c[1]
        },
        trys: [],
        ops: []
    }, n, o, c, l;
    return l = {
        next: d(0),
        throw: d(1),
        return: d(2)
    },
    typeof Symbol == "function" && (l[Symbol.iterator] = function() {
        return this
    }
    ),
    l;
    function d(y) {
        return function(O) {
            return b([y, O])
        }
    }
    function b(y) {
        if (n)
            throw new TypeError("Generator is already executing.");
        for (; t; )
            try {
                if (n = 1,
                o && (c = y[0] & 2 ? o.return : y[0] ? o.throw || ((c = o.return) && c.call(o),
                0) : o.next) && !(c = c.call(o, y[1])).done)
                    return c;
                switch (o = 0,
                c && (y = [y[0] & 2, c.value]),
                y[0]) {
                case 0:
                case 1:
                    c = y;
                    break;
                case 4:
                    return t.label++,
                    {
                        value: y[1],
                        done: !1
                    };
                case 5:
                    t.label++,
                    o = y[1],
                    y = [0];
                    continue;
                case 7:
                    y = t.ops.pop(),
                    t.trys.pop();
                    continue;
                default:
                    if (c = t.trys,
                    !(c = c.length > 0 && c[c.length - 1]) && (y[0] === 6 || y[0] === 2)) {
                        t = 0;
                        continue
                    }
                    if (y[0] === 3 && (!c || y[1] > c[0] && y[1] < c[3])) {
                        t.label = y[1];
                        break
                    }
                    if (y[0] === 6 && t.label < c[1]) {
                        t.label = c[1],
                        c = y;
                        break
                    }
                    if (c && t.label < c[2]) {
                        t.label = c[2],
                        t.ops.push(y);
                        break
                    }
                    c[2] && t.ops.pop(),
                    t.trys.pop();
                    continue
                }
                y = r.call(a, t)
            } catch (O) {
                y = [6, O],
                o = 0
            } finally {
                n = c = 0
            }
        if (y[0] & 5)
            throw y[1];
        return {
            value: y[0] ? y[1] : void 0,
            done: !0
        }
    }
}
function U1(a, r, t, n) {
    n === void 0 && (n = t),
    a[n] = r[t]
}
function B1(a, r) {
    for (var t in a)
        t !== "default" && !r.hasOwnProperty(t) && (r[t] = a[t])
}
function dc(a) {
    var r = typeof Symbol == "function" && Symbol.iterator
      , t = r && a[r]
      , n = 0;
    if (t)
        return t.call(a);
    if (a && typeof a.length == "number")
        return {
            next: function() {
                return a && n >= a.length && (a = void 0),
                {
                    value: a && a[n++],
                    done: !a
                }
            }
        };
    throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function sf(a, r) {
    var t = typeof Symbol == "function" && a[Symbol.iterator];
    if (!t)
        return a;
    var n = t.call(a), o, c = [], l;
    try {
        for (; (r === void 0 || r-- > 0) && !(o = n.next()).done; )
            c.push(o.value)
    } catch (d) {
        l = {
            error: d
        }
    } finally {
        try {
            o && !o.done && (t = n.return) && t.call(n)
        } finally {
            if (l)
                throw l.error
        }
    }
    return c
}
function H1() {
    for (var a = [], r = 0; r < arguments.length; r++)
        a = a.concat(sf(arguments[r]));
    return a
}
function k1() {
    for (var a = 0, r = 0, t = arguments.length; r < t; r++)
        a += arguments[r].length;
    for (var n = Array(a), o = 0, r = 0; r < t; r++)
        for (var c = arguments[r], l = 0, d = c.length; l < d; l++,
        o++)
            n[o] = c[l];
    return n
}
function Vn(a) {
    return this instanceof Vn ? (this.v = a,
    this) : new Vn(a)
}
function V1(a, r, t) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = t.apply(a, r || []), o, c = [];
    return o = {},
    l("next"),
    l("throw"),
    l("return"),
    o[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    o;
    function l(C) {
        n[C] && (o[C] = function(z) {
            return new Promise(function(F, K) {
                c.push([C, z, F, K]) > 1 || d(C, z)
            }
            )
        }
        )
    }
    function d(C, z) {
        try {
            b(n[C](z))
        } catch (F) {
            q(c[0][3], F)
        }
    }
    function b(C) {
        C.value instanceof Vn ? Promise.resolve(C.value.v).then(y, O) : q(c[0][2], C)
    }
    function y(C) {
        d("next", C)
    }
    function O(C) {
        d("throw", C)
    }
    function q(C, z) {
        C(z),
        c.shift(),
        c.length && d(c[0][0], c[0][1])
    }
}
function K1(a) {
    var r, t;
    return r = {},
    n("next"),
    n("throw", function(o) {
        throw o
    }),
    n("return"),
    r[Symbol.iterator] = function() {
        return this
    }
    ,
    r;
    function n(o, c) {
        r[o] = a[o] ? function(l) {
            return (t = !t) ? {
                value: Vn(a[o](l)),
                done: o === "return"
            } : c ? c(l) : l
        }
        : c
    }
}
function G1(a) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = a[Symbol.asyncIterator], t;
    return r ? r.call(a) : (a = typeof dc == "function" ? dc(a) : a[Symbol.iterator](),
    t = {},
    n("next"),
    n("throw"),
    n("return"),
    t[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    t);
    function n(c) {
        t[c] = a[c] && function(l) {
            return new Promise(function(d, b) {
                l = a[c](l),
                o(d, b, l.done, l.value)
            }
            )
        }
    }
    function o(c, l, d, b) {
        Promise.resolve(b).then(function(y) {
            c({
                value: y,
                done: d
            })
        }, l)
    }
}
function W1(a, r) {
    return Object.defineProperty ? Object.defineProperty(a, "raw", {
        value: r
    }) : a.raw = r,
    a
}
function J1(a) {
    if (a && a.__esModule)
        return a;
    var r = {};
    if (a != null)
        for (var t in a)
            Object.hasOwnProperty.call(a, t) && (r[t] = a[t]);
    return r.default = a,
    r
}
function Y1(a) {
    return a && a.__esModule ? a : {
        default: a
    }
}
function X1(a, r) {
    if (!r.has(a))
        throw new TypeError("attempted to get private field on non-instance");
    return r.get(a)
}
function Z1(a, r, t) {
    if (!r.has(a))
        throw new TypeError("attempted to set private field on non-instance");
    return r.set(a, t),
    t
}
var Q1 = Object.freeze({
    __proto__: null,
    get __assign() {
        return pc
    },
    __asyncDelegator: K1,
    __asyncGenerator: V1,
    __asyncValues: G1,
    __await: Vn,
    __awaiter: q1,
    __classPrivateFieldGet: X1,
    __classPrivateFieldSet: Z1,
    __createBinding: U1,
    __decorate: j1,
    __exportStar: B1,
    __extends: N1,
    __generator: z1,
    __importDefault: Y1,
    __importStar: J1,
    __makeTemplateObject: W1,
    __metadata: M1,
    __param: L1,
    __read: sf,
    __rest: F1,
    __spread: H1,
    __spreadArrays: k1,
    __values: dc
})
  , go = Jn(Q1)
  , Fn = {}
  , Wa = {}
  , jn = {};
let Mi = class {
}
;
var em = Object.freeze({
    __proto__: null,
    IEvents: Mi
}), tm = Jn(em), Wh;
function rm() {
    if (Wh)
        return jn;
    Wh = 1,
    Object.defineProperty(jn, "__esModule", {
        value: !0
    }),
    jn.IHeartBeat = void 0;
    const a = tm;
    class r extends a.IEvents {
        constructor(n) {
            super()
        }
    }
    return jn.IHeartBeat = r,
    jn
}
var Jh;
function of() {
    return Jh || (Jh = 1,
    function(a) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        go.__exportStar(rm(), a)
    }(Wa)),
    Wa
}
var Ja = {}, ji = {}, Yh;
function im() {
    if (Yh)
        return ji;
    Yh = 1,
    Object.defineProperty(ji, "__esModule", {
        value: !0
    }),
    ji.HEARTBEAT_EVENTS = ji.HEARTBEAT_INTERVAL = void 0;
    const a = se;
    return ji.HEARTBEAT_INTERVAL = a.FIVE_SECONDS,
    ji.HEARTBEAT_EVENTS = {
        pulse: "heartbeat_pulse"
    },
    ji
}
var Xh;
function af() {
    return Xh || (Xh = 1,
    function(a) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        go.__exportStar(im(), a)
    }(Ja)),
    Ja
}
var Zh;
function nm() {
    if (Zh)
        return Fn;
    Zh = 1,
    Object.defineProperty(Fn, "__esModule", {
        value: !0
    }),
    Fn.HeartBeat = void 0;
    const a = go
      , r = b_
      , t = se
      , n = of()
      , o = af();
    class c extends n.IHeartBeat {
        constructor(d) {
            super(d),
            this.events = new r.EventEmitter,
            this.interval = o.HEARTBEAT_INTERVAL,
            this.interval = d?.interval || o.HEARTBEAT_INTERVAL
        }
        static init(d) {
            return a.__awaiter(this, void 0, void 0, function*() {
                const b = new c(d);
                return yield b.init(),
                b
            })
        }
        init() {
            return a.__awaiter(this, void 0, void 0, function*() {
                yield this.initialize()
            })
        }
        stop() {
            clearInterval(this.intervalRef)
        }
        on(d, b) {
            this.events.on(d, b)
        }
        once(d, b) {
            this.events.once(d, b)
        }
        off(d, b) {
            this.events.off(d, b)
        }
        removeListener(d, b) {
            this.events.removeListener(d, b)
        }
        initialize() {
            return a.__awaiter(this, void 0, void 0, function*() {
                this.intervalRef = setInterval(()=>this.pulse(), t.toMiliseconds(this.interval))
            })
        }
        pulse() {
            this.events.emit(o.HEARTBEAT_EVENTS.pulse)
        }
    }
    return Fn.HeartBeat = c,
    Fn
}
(function(a) {
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    const r = go;
    r.__exportStar(nm(), a),
    r.__exportStar(of(), a),
    r.__exportStar(af(), a)
}
)(fn);
var Re = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var gc = function(a, r) {
    return gc = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, n) {
        t.__proto__ = n
    }
    || function(t, n) {
        for (var o in n)
            n.hasOwnProperty(o) && (t[o] = n[o])
    }
    ,
    gc(a, r)
};
function sm(a, r) {
    gc(a, r);
    function t() {
        this.constructor = a
    }
    a.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var yc = function() {
    return yc = Object.assign || function(r) {
        for (var t, n = 1, o = arguments.length; n < o; n++) {
            t = arguments[n];
            for (var c in t)
                Object.prototype.hasOwnProperty.call(t, c) && (r[c] = t[c])
        }
        return r
    }
    ,
    yc.apply(this, arguments)
};
function om(a, r) {
    var t = {};
    for (var n in a)
        Object.prototype.hasOwnProperty.call(a, n) && r.indexOf(n) < 0 && (t[n] = a[n]);
    if (a != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(a); o < n.length; o++)
            r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(a, n[o]) && (t[n[o]] = a[n[o]]);
    return t
}
function am(a, r, t, n) {
    var o = arguments.length, c = o < 3 ? r : n === null ? n = Object.getOwnPropertyDescriptor(r, t) : n, l;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        c = Reflect.decorate(a, r, t, n);
    else
        for (var d = a.length - 1; d >= 0; d--)
            (l = a[d]) && (c = (o < 3 ? l(c) : o > 3 ? l(r, t, c) : l(r, t)) || c);
    return o > 3 && c && Object.defineProperty(r, t, c),
    c
}
function cm(a, r) {
    return function(t, n) {
        r(t, n, a)
    }
}
function um(a, r) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(a, r)
}
function hm(a, r, t, n) {
    function o(c) {
        return c instanceof t ? c : new t(function(l) {
            l(c)
        }
        )
    }
    return new (t || (t = Promise))(function(c, l) {
        function d(O) {
            try {
                y(n.next(O))
            } catch (q) {
                l(q)
            }
        }
        function b(O) {
            try {
                y(n.throw(O))
            } catch (q) {
                l(q)
            }
        }
        function y(O) {
            O.done ? c(O.value) : o(O.value).then(d, b)
        }
        y((n = n.apply(a, r || [])).next())
    }
    )
}
function lm(a, r) {
    var t = {
        label: 0,
        sent: function() {
            if (c[0] & 1)
                throw c[1];
            return c[1]
        },
        trys: [],
        ops: []
    }, n, o, c, l;
    return l = {
        next: d(0),
        throw: d(1),
        return: d(2)
    },
    typeof Symbol == "function" && (l[Symbol.iterator] = function() {
        return this
    }
    ),
    l;
    function d(y) {
        return function(O) {
            return b([y, O])
        }
    }
    function b(y) {
        if (n)
            throw new TypeError("Generator is already executing.");
        for (; t; )
            try {
                if (n = 1,
                o && (c = y[0] & 2 ? o.return : y[0] ? o.throw || ((c = o.return) && c.call(o),
                0) : o.next) && !(c = c.call(o, y[1])).done)
                    return c;
                switch (o = 0,
                c && (y = [y[0] & 2, c.value]),
                y[0]) {
                case 0:
                case 1:
                    c = y;
                    break;
                case 4:
                    return t.label++,
                    {
                        value: y[1],
                        done: !1
                    };
                case 5:
                    t.label++,
                    o = y[1],
                    y = [0];
                    continue;
                case 7:
                    y = t.ops.pop(),
                    t.trys.pop();
                    continue;
                default:
                    if (c = t.trys,
                    !(c = c.length > 0 && c[c.length - 1]) && (y[0] === 6 || y[0] === 2)) {
                        t = 0;
                        continue
                    }
                    if (y[0] === 3 && (!c || y[1] > c[0] && y[1] < c[3])) {
                        t.label = y[1];
                        break
                    }
                    if (y[0] === 6 && t.label < c[1]) {
                        t.label = c[1],
                        c = y;
                        break
                    }
                    if (c && t.label < c[2]) {
                        t.label = c[2],
                        t.ops.push(y);
                        break
                    }
                    c[2] && t.ops.pop(),
                    t.trys.pop();
                    continue
                }
                y = r.call(a, t)
            } catch (O) {
                y = [6, O],
                o = 0
            } finally {
                n = c = 0
            }
        if (y[0] & 5)
            throw y[1];
        return {
            value: y[0] ? y[1] : void 0,
            done: !0
        }
    }
}
function fm(a, r, t, n) {
    n === void 0 && (n = t),
    a[n] = r[t]
}
function pm(a, r) {
    for (var t in a)
        t !== "default" && !r.hasOwnProperty(t) && (r[t] = a[t])
}
function vc(a) {
    var r = typeof Symbol == "function" && Symbol.iterator
      , t = r && a[r]
      , n = 0;
    if (t)
        return t.call(a);
    if (a && typeof a.length == "number")
        return {
            next: function() {
                return a && n >= a.length && (a = void 0),
                {
                    value: a && a[n++],
                    done: !a
                }
            }
        };
    throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function cf(a, r) {
    var t = typeof Symbol == "function" && a[Symbol.iterator];
    if (!t)
        return a;
    var n = t.call(a), o, c = [], l;
    try {
        for (; (r === void 0 || r-- > 0) && !(o = n.next()).done; )
            c.push(o.value)
    } catch (d) {
        l = {
            error: d
        }
    } finally {
        try {
            o && !o.done && (t = n.return) && t.call(n)
        } finally {
            if (l)
                throw l.error
        }
    }
    return c
}
function dm() {
    for (var a = [], r = 0; r < arguments.length; r++)
        a = a.concat(cf(arguments[r]));
    return a
}
function gm() {
    for (var a = 0, r = 0, t = arguments.length; r < t; r++)
        a += arguments[r].length;
    for (var n = Array(a), o = 0, r = 0; r < t; r++)
        for (var c = arguments[r], l = 0, d = c.length; l < d; l++,
        o++)
            n[o] = c[l];
    return n
}
function Kn(a) {
    return this instanceof Kn ? (this.v = a,
    this) : new Kn(a)
}
function ym(a, r, t) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = t.apply(a, r || []), o, c = [];
    return o = {},
    l("next"),
    l("throw"),
    l("return"),
    o[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    o;
    function l(C) {
        n[C] && (o[C] = function(z) {
            return new Promise(function(F, K) {
                c.push([C, z, F, K]) > 1 || d(C, z)
            }
            )
        }
        )
    }
    function d(C, z) {
        try {
            b(n[C](z))
        } catch (F) {
            q(c[0][3], F)
        }
    }
    function b(C) {
        C.value instanceof Kn ? Promise.resolve(C.value.v).then(y, O) : q(c[0][2], C)
    }
    function y(C) {
        d("next", C)
    }
    function O(C) {
        d("throw", C)
    }
    function q(C, z) {
        C(z),
        c.shift(),
        c.length && d(c[0][0], c[0][1])
    }
}
function vm(a) {
    var r, t;
    return r = {},
    n("next"),
    n("throw", function(o) {
        throw o
    }),
    n("return"),
    r[Symbol.iterator] = function() {
        return this
    }
    ,
    r;
    function n(o, c) {
        r[o] = a[o] ? function(l) {
            return (t = !t) ? {
                value: Kn(a[o](l)),
                done: o === "return"
            } : c ? c(l) : l
        }
        : c
    }
}
function _m(a) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = a[Symbol.asyncIterator], t;
    return r ? r.call(a) : (a = typeof vc == "function" ? vc(a) : a[Symbol.iterator](),
    t = {},
    n("next"),
    n("throw"),
    n("return"),
    t[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    t);
    function n(c) {
        t[c] = a[c] && function(l) {
            return new Promise(function(d, b) {
                l = a[c](l),
                o(d, b, l.done, l.value)
            }
            )
        }
    }
    function o(c, l, d, b) {
        Promise.resolve(b).then(function(y) {
            c({
                value: y,
                done: d
            })
        }, l)
    }
}
function mm(a, r) {
    return Object.defineProperty ? Object.defineProperty(a, "raw", {
        value: r
    }) : a.raw = r,
    a
}
function bm(a) {
    if (a && a.__esModule)
        return a;
    var r = {};
    if (a != null)
        for (var t in a)
            Object.hasOwnProperty.call(a, t) && (r[t] = a[t]);
    return r.default = a,
    r
}
function wm(a) {
    return a && a.__esModule ? a : {
        default: a
    }
}
function Em(a, r) {
    if (!r.has(a))
        throw new TypeError("attempted to get private field on non-instance");
    return r.get(a)
}
function xm(a, r, t) {
    if (!r.has(a))
        throw new TypeError("attempted to set private field on non-instance");
    return r.set(a, t),
    t
}
var Im = Object.freeze({
    __proto__: null,
    get __assign() {
        return yc
    },
    __asyncDelegator: vm,
    __asyncGenerator: ym,
    __asyncValues: _m,
    __await: Kn,
    __awaiter: hm,
    __classPrivateFieldGet: Em,
    __classPrivateFieldSet: xm,
    __createBinding: fm,
    __decorate: am,
    __exportStar: pm,
    __extends: sm,
    __generator: lm,
    __importDefault: wm,
    __importStar: bm,
    __makeTemplateObject: mm,
    __metadata: um,
    __param: cm,
    __read: cf,
    __rest: om,
    __spread: dm,
    __spreadArrays: gm,
    __values: vc
}), Sm = Jn(Im), Ya, Qh;
function Pm() {
    if (Qh)
        return Ya;
    Qh = 1;
    function a(t) {
        try {
            return JSON.stringify(t)
        } catch {
            return '"[Circular]"'
        }
    }
    Ya = r;
    function r(t, n, o) {
        var c = o && o.stringify || a
          , l = 1;
        if (typeof t == "object" && t !== null) {
            var d = n.length + l;
            if (d === 1)
                return t;
            var b = new Array(d);
            b[0] = c(t);
            for (var y = 1; y < d; y++)
                b[y] = c(n[y]);
            return b.join(" ")
        }
        if (typeof t != "string")
            return t;
        var O = n.length;
        if (O === 0)
            return t;
        for (var q = "", C = 1 - l, z = -1, F = t && t.length || 0, K = 0; K < F; ) {
            if (t.charCodeAt(K) === 37 && K + 1 < F) {
                switch (z = z > -1 ? z : 0,
                t.charCodeAt(K + 1)) {
                case 100:
                case 102:
                    if (C >= O || n[C] == null)
                        break;
                    z < K && (q += t.slice(z, K)),
                    q += Number(n[C]),
                    z = K + 2,
                    K++;
                    break;
                case 105:
                    if (C >= O || n[C] == null)
                        break;
                    z < K && (q += t.slice(z, K)),
                    q += Math.floor(Number(n[C])),
                    z = K + 2,
                    K++;
                    break;
                case 79:
                case 111:
                case 106:
                    if (C >= O || n[C] === void 0)
                        break;
                    z < K && (q += t.slice(z, K));
                    var ie = typeof n[C];
                    if (ie === "string") {
                        q += "'" + n[C] + "'",
                        z = K + 2,
                        K++;
                        break
                    }
                    if (ie === "function") {
                        q += n[C].name || "<anonymous>",
                        z = K + 2,
                        K++;
                        break
                    }
                    q += c(n[C]),
                    z = K + 2,
                    K++;
                    break;
                case 115:
                    if (C >= O)
                        break;
                    z < K && (q += t.slice(z, K)),
                    q += String(n[C]),
                    z = K + 2,
                    K++;
                    break;
                case 37:
                    z < K && (q += t.slice(z, K)),
                    q += "%",
                    z = K + 2,
                    K++,
                    C--;
                    break
                }
                ++C
            }
            ++K
        }
        return z === -1 ? t : (z < F && (q += t.slice(z)),
        q)
    }
    return Ya
}
var Xa, el;
function Om() {
    if (el)
        return Xa;
    el = 1;
    const a = Pm();
    Xa = o;
    const r = le().console || {}
      , t = {
        mapHttpRequest: F,
        mapHttpResponse: F,
        wrapRequestSerializer: K,
        wrapResponseSerializer: K,
        wrapErrorSerializer: K,
        req: F,
        res: F,
        err: C
    };
    function n(D, U) {
        return Array.isArray(D) ? D.filter(function(ye) {
            return ye !== "!stdSerializers.err"
        }) : D === !0 ? Object.keys(U) : !1
    }
    function o(D) {
        D = D || {},
        D.browser = D.browser || {};
        const U = D.browser.transmit;
        if (U && typeof U.send != "function")
            throw Error("pino: transmit option must have a send function");
        const W = D.browser.write || r;
        D.browser.write && (D.browser.asObject = !0);
        const ye = D.serializers || {}
          , re = n(D.browser.serialize, ye);
        let ue = D.browser.serialize;
        Array.isArray(D.browser.serialize) && D.browser.serialize.indexOf("!stdSerializers.err") > -1 && (ue = !1);
        const Te = ["error", "fatal", "warn", "info", "debug", "trace"];
        typeof W == "function" && (W.error = W.fatal = W.warn = W.info = W.debug = W.trace = W),
        D.enabled === !1 && (D.level = "silent");
        const ze = D.level || "info"
          , _ = Object.create(W);
        _.log || (_.log = ie),
        Object.defineProperty(_, "levelVal", {
            get: X
        }),
        Object.defineProperty(_, "level", {
            get: ce,
            set: V
        });
        const x = {
            transmit: U,
            serialize: re,
            asObject: D.browser.asObject,
            levels: Te,
            timestamp: z(D)
        };
        _.levels = o.levels,
        _.level = ze,
        _.setMaxListeners = _.getMaxListeners = _.emit = _.addListener = _.on = _.prependListener = _.once = _.prependOnceListener = _.removeListener = _.removeAllListeners = _.listeners = _.listenerCount = _.eventNames = _.write = _.flush = ie,
        _.serializers = ye,
        _._serialize = re,
        _._stdErrSerialize = ue,
        _.child = B,
        U && (_._logEvent = q());
        function X() {
            return this.level === "silent" ? 1 / 0 : this.levels.values[this.level]
        }
        function ce() {
            return this._level
        }
        function V(k) {
            if (k !== "silent" && !this.levels.values[k])
                throw Error("unknown level " + k);
            this._level = k,
            c(x, _, "error", "log"),
            c(x, _, "fatal", "error"),
            c(x, _, "warn", "error"),
            c(x, _, "info", "log"),
            c(x, _, "debug", "log"),
            c(x, _, "trace", "log")
        }
        function B(k, G) {
            if (!k)
                throw new Error("missing bindings for child Pino");
            G = G || {},
            re && k.serializers && (G.serializers = k.serializers);
            const Je = G.serializers;
            if (re && Je) {
                var He = Object.assign({}, ye, Je)
                  , jr = D.browser.serialize === !0 ? Object.keys(He) : re;
                delete k.serializers,
                b([k], jr, He, this._stdErrSerialize)
            }
            function xe(It) {
                this._childLevel = (It._childLevel | 0) + 1,
                this.error = y(It, k, "error"),
                this.fatal = y(It, k, "fatal"),
                this.warn = y(It, k, "warn"),
                this.info = y(It, k, "info"),
                this.debug = y(It, k, "debug"),
                this.trace = y(It, k, "trace"),
                He && (this.serializers = He,
                this._serialize = jr),
                U && (this._logEvent = q([].concat(It._logEvent.bindings, k)))
            }
            return xe.prototype = this,
            new xe(this)
        }
        return _
    }
    o.levels = {
        values: {
            fatal: 60,
            error: 50,
            warn: 40,
            info: 30,
            debug: 20,
            trace: 10
        },
        labels: {
            10: "trace",
            20: "debug",
            30: "info",
            40: "warn",
            50: "error",
            60: "fatal"
        }
    },
    o.stdSerializers = t,
    o.stdTimeFunctions = Object.assign({}, {
        nullTime: Ee,
        epochTime: ge,
        unixTime: pe,
        isoTime: he
    });
    function c(D, U, W, ye) {
        const re = Object.getPrototypeOf(U);
        U[W] = U.levelVal > U.levels.values[W] ? ie : re[W] ? re[W] : r[W] || r[ye] || ie,
        l(D, U, W)
    }
    function l(D, U, W) {
        !D.transmit && U[W] === ie || (U[W] = function(ye) {
            return function() {
                const ue = D.timestamp()
                  , Te = new Array(arguments.length)
                  , ze = Object.getPrototypeOf && Object.getPrototypeOf(this) === r ? r : this;
                for (var _ = 0; _ < Te.length; _++)
                    Te[_] = arguments[_];
                if (D.serialize && !D.asObject && b(Te, this._serialize, this.serializers, this._stdErrSerialize),
                D.asObject ? ye.call(ze, d(this, W, Te, ue)) : ye.apply(ze, Te),
                D.transmit) {
                    const x = D.transmit.level || U.level
                      , X = o.levels.values[x]
                      , ce = o.levels.values[W];
                    if (ce < X)
                        return;
                    O(this, {
                        ts: ue,
                        methodLevel: W,
                        methodValue: ce,
                        transmitLevel: x,
                        transmitValue: o.levels.values[D.transmit.level || U.level],
                        send: D.transmit.send,
                        val: U.levelVal
                    }, Te)
                }
            }
        }(U[W]))
    }
    function d(D, U, W, ye) {
        D._serialize && b(W, D._serialize, D.serializers, D._stdErrSerialize);
        const re = W.slice();
        let ue = re[0];
        const Te = {};
        ye && (Te.time = ye),
        Te.level = o.levels.values[U];
        let ze = (D._childLevel | 0) + 1;
        if (ze < 1 && (ze = 1),
        ue !== null && typeof ue == "object") {
            for (; ze-- && typeof re[0] == "object"; )
                Object.assign(Te, re.shift());
            ue = re.length ? a(re.shift(), re) : void 0
        } else
            typeof ue == "string" && (ue = a(re.shift(), re));
        return ue !== void 0 && (Te.msg = ue),
        Te
    }
    function b(D, U, W, ye) {
        for (const re in D)
            if (ye && D[re]instanceof Error)
                D[re] = o.stdSerializers.err(D[re]);
            else if (typeof D[re] == "object" && !Array.isArray(D[re]))
                for (const ue in D[re])
                    U && U.indexOf(ue) > -1 && ue in W && (D[re][ue] = W[ue](D[re][ue]))
    }
    function y(D, U, W) {
        return function() {
            const ye = new Array(1 + arguments.length);
            ye[0] = U;
            for (var re = 1; re < ye.length; re++)
                ye[re] = arguments[re - 1];
            return D[W].apply(this, ye)
        }
    }
    function O(D, U, W) {
        const ye = U.send
          , re = U.ts
          , ue = U.methodLevel
          , Te = U.methodValue
          , ze = U.val
          , _ = D._logEvent.bindings;
        b(W, D._serialize || Object.keys(D.serializers), D.serializers, D._stdErrSerialize === void 0 ? !0 : D._stdErrSerialize),
        D._logEvent.ts = re,
        D._logEvent.messages = W.filter(function(x) {
            return _.indexOf(x) === -1
        }),
        D._logEvent.level.label = ue,
        D._logEvent.level.value = Te,
        ye(ue, D._logEvent, ze),
        D._logEvent = q(_)
    }
    function q(D) {
        return {
            ts: 0,
            messages: [],
            bindings: D || [],
            level: {
                label: "",
                value: 0
            }
        }
    }
    function C(D) {
        const U = {
            type: D.constructor.name,
            msg: D.message,
            stack: D.stack
        };
        for (const W in D)
            U[W] === void 0 && (U[W] = D[W]);
        return U
    }
    function z(D) {
        return typeof D.timestamp == "function" ? D.timestamp : D.timestamp === !1 ? Ee : ge
    }
    function F() {
        return {}
    }
    function K(D) {
        return D
    }
    function ie() {}
    function Ee() {
        return !1
    }
    function ge() {
        return Date.now()
    }
    function pe() {
        return Math.round(Date.now() / 1e3)
    }
    function he() {
        return new Date(Date.now()).toISOString()
    }
    function le() {
        function D(U) {
            return typeof U < "u" && U
        }
        try {
            return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
                get: function() {
                    return delete Object.prototype.globalThis,
                    this.globalThis = this
                },
                configurable: !0
            }),
            globalThis
        } catch {
            return D(self) || D(window) || D(this) || {}
        }
    }
    return Xa
}
var Li = {}, tl;
function uf() {
    return tl || (tl = 1,
    Object.defineProperty(Li, "__esModule", {
        value: !0
    }),
    Li.PINO_CUSTOM_CONTEXT_KEY = Li.PINO_LOGGER_DEFAULTS = void 0,
    Li.PINO_LOGGER_DEFAULTS = {
        level: "info"
    },
    Li.PINO_CUSTOM_CONTEXT_KEY = "custom_context"),
    Li
}
var Qt = {}, rl;
function Am() {
    if (rl)
        return Qt;
    rl = 1,
    Object.defineProperty(Qt, "__esModule", {
        value: !0
    }),
    Qt.generateChildLogger = Qt.formatChildLoggerContext = Qt.getLoggerContext = Qt.setBrowserLoggerContext = Qt.getBrowserLoggerContext = Qt.getDefaultLoggerOptions = void 0;
    const a = uf();
    function r(d) {
        return Object.assign(Object.assign({}, d), {
            level: d?.level || a.PINO_LOGGER_DEFAULTS.level
        })
    }
    Qt.getDefaultLoggerOptions = r;
    function t(d, b=a.PINO_CUSTOM_CONTEXT_KEY) {
        return d[b] || ""
    }
    Qt.getBrowserLoggerContext = t;
    function n(d, b, y=a.PINO_CUSTOM_CONTEXT_KEY) {
        return d[y] = b,
        d
    }
    Qt.setBrowserLoggerContext = n;
    function o(d, b=a.PINO_CUSTOM_CONTEXT_KEY) {
        let y = "";
        return typeof d.bindings > "u" ? y = t(d, b) : y = d.bindings().context || "",
        y
    }
    Qt.getLoggerContext = o;
    function c(d, b, y=a.PINO_CUSTOM_CONTEXT_KEY) {
        const O = o(d, y);
        return O.trim() ? `${O}/${b}` : b
    }
    Qt.formatChildLoggerContext = c;
    function l(d, b, y=a.PINO_CUSTOM_CONTEXT_KEY) {
        const O = c(d, b, y)
          , q = d.child({
            context: O
        });
        return n(q, O, y)
    }
    return Qt.generateChildLogger = l,
    Qt
}
(function(a) {
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.pino = void 0;
    const r = Sm
      , t = r.__importDefault(Om());
    Object.defineProperty(a, "pino", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    }),
    r.__exportStar(uf(), a),
    r.__exportStar(Am(), a)
}
)(Re);
class Cm extends Mi {
    constructor(r) {
        super(),
        this.opts = r,
        this.protocol = "wc",
        this.version = 2
    }
}
class Rm extends Mi {
    constructor(r, t) {
        super(),
        this.core = r,
        this.logger = t,
        this.records = new Map
    }
}
class Tm {
    constructor(r, t) {
        this.logger = r,
        this.core = t
    }
}
let $m = class extends Mi {
    constructor(r, t) {
        super(),
        this.relayer = r,
        this.logger = t
    }
}
  , Dm = class extends Mi {
    constructor(r) {
        super()
    }
}
  , Nm = class {
    constructor(r, t, n, o) {
        this.core = r,
        this.logger = t,
        this.name = n
    }
}
;
class Fm extends Mi {
    constructor(r, t) {
        super(),
        this.relayer = r,
        this.logger = t
    }
}
let jm = class extends Mi {
    constructor(r, t) {
        super(),
        this.core = r,
        this.logger = t
    }
}
  , Lm = class {
    constructor(r, t) {
        this.projectId = r,
        this.logger = t
    }
}
  , Mm = class {
    constructor(r) {
        this.opts = r,
        this.protocol = "wc",
        this.version = 2
    }
}
  , qm = class {
    constructor(r) {
        this.client = r
    }
}
;
const zm = a=>JSON.stringify(a, (r,t)=>typeof t == "bigint" ? t.toString() + "n" : t)
  , Um = a=>{
    const r = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g
      , t = a.replace(r, '$1"$2n"$3');
    return JSON.parse(t, (n,o)=>typeof o == "string" && o.match(/^\d+n$/) ? BigInt(o.substring(0, o.length - 1)) : o)
}
;
function Cc(a) {
    if (typeof a != "string")
        throw new Error(`Cannot safe json parse value of type ${typeof a}`);
    try {
        return Um(a)
    } catch {
        return a
    }
}
function Gn(a) {
    return typeof a == "string" ? a : zm(a) || ""
}
var Rc = {}
  , hf = {};
(function(a) {
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var r = w_
      , t = Kl;
    a.DIGEST_LENGTH = 64,
    a.BLOCK_SIZE = 128;
    var n = function() {
        function d() {
            this.digestLength = a.DIGEST_LENGTH,
            this.blockSize = a.BLOCK_SIZE,
            this._stateHi = new Int32Array(8),
            this._stateLo = new Int32Array(8),
            this._tempHi = new Int32Array(16),
            this._tempLo = new Int32Array(16),
            this._buffer = new Uint8Array(256),
            this._bufferLength = 0,
            this._bytesHashed = 0,
            this._finished = !1,
            this.reset()
        }
        return d.prototype._initState = function() {
            this._stateHi[0] = 1779033703,
            this._stateHi[1] = 3144134277,
            this._stateHi[2] = 1013904242,
            this._stateHi[3] = 2773480762,
            this._stateHi[4] = 1359893119,
            this._stateHi[5] = 2600822924,
            this._stateHi[6] = 528734635,
            this._stateHi[7] = 1541459225,
            this._stateLo[0] = 4089235720,
            this._stateLo[1] = 2227873595,
            this._stateLo[2] = 4271175723,
            this._stateLo[3] = 1595750129,
            this._stateLo[4] = 2917565137,
            this._stateLo[5] = 725511199,
            this._stateLo[6] = 4215389547,
            this._stateLo[7] = 327033209
        }
        ,
        d.prototype.reset = function() {
            return this._initState(),
            this._bufferLength = 0,
            this._bytesHashed = 0,
            this._finished = !1,
            this
        }
        ,
        d.prototype.clean = function() {
            t.wipe(this._buffer),
            t.wipe(this._tempHi),
            t.wipe(this._tempLo),
            this.reset()
        }
        ,
        d.prototype.update = function(b, y) {
            if (y === void 0 && (y = b.length),
            this._finished)
                throw new Error("SHA512: can't update because hash was finished.");
            var O = 0;
            if (this._bytesHashed += y,
            this._bufferLength > 0) {
                for (; this._bufferLength < a.BLOCK_SIZE && y > 0; )
                    this._buffer[this._bufferLength++] = b[O++],
                    y--;
                this._bufferLength === this.blockSize && (c(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize),
                this._bufferLength = 0)
            }
            for (y >= this.blockSize && (O = c(this._tempHi, this._tempLo, this._stateHi, this._stateLo, b, O, y),
            y %= this.blockSize); y > 0; )
                this._buffer[this._bufferLength++] = b[O++],
                y--;
            return this
        }
        ,
        d.prototype.finish = function(b) {
            if (!this._finished) {
                var y = this._bytesHashed
                  , O = this._bufferLength
                  , q = y / 536870912 | 0
                  , C = y << 3
                  , z = y % 128 < 112 ? 128 : 256;
                this._buffer[O] = 128;
                for (var F = O + 1; F < z - 8; F++)
                    this._buffer[F] = 0;
                r.writeUint32BE(q, this._buffer, z - 8),
                r.writeUint32BE(C, this._buffer, z - 4),
                c(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, z),
                this._finished = !0
            }
            for (var F = 0; F < this.digestLength / 8; F++)
                r.writeUint32BE(this._stateHi[F], b, F * 8),
                r.writeUint32BE(this._stateLo[F], b, F * 8 + 4);
            return this
        }
        ,
        d.prototype.digest = function() {
            var b = new Uint8Array(this.digestLength);
            return this.finish(b),
            b
        }
        ,
        d.prototype.saveState = function() {
            if (this._finished)
                throw new Error("SHA256: cannot save finished state");
            return {
                stateHi: new Int32Array(this._stateHi),
                stateLo: new Int32Array(this._stateLo),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
            }
        }
        ,
        d.prototype.restoreState = function(b) {
            return this._stateHi.set(b.stateHi),
            this._stateLo.set(b.stateLo),
            this._bufferLength = b.bufferLength,
            b.buffer && this._buffer.set(b.buffer),
            this._bytesHashed = b.bytesHashed,
            this._finished = !1,
            this
        }
        ,
        d.prototype.cleanSavedState = function(b) {
            t.wipe(b.stateHi),
            t.wipe(b.stateLo),
            b.buffer && t.wipe(b.buffer),
            b.bufferLength = 0,
            b.bytesHashed = 0
        }
        ,
        d
    }();
    a.SHA512 = n;
    var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);
    function c(d, b, y, O, q, C, z) {
        for (var F = y[0], K = y[1], ie = y[2], Ee = y[3], ge = y[4], pe = y[5], he = y[6], le = y[7], D = O[0], U = O[1], W = O[2], ye = O[3], re = O[4], ue = O[5], Te = O[6], ze = O[7], _, x, X, ce, V, B, k, G; z >= 128; ) {
            for (var Je = 0; Je < 16; Je++) {
                var He = 8 * Je + C;
                d[Je] = r.readUint32BE(q, He),
                b[Je] = r.readUint32BE(q, He + 4)
            }
            for (var Je = 0; Je < 80; Je++) {
                var jr = F
                  , xe = K
                  , It = ie
                  , $ = Ee
                  , T = ge
                  , A = pe
                  , h = he
                  , E = le
                  , ee = D
                  , fe = U
                  , be = W
                  , $e = ye
                  , Ne = re
                  , Pe = ue
                  , St = Te
                  , _t = ze;
                if (_ = le,
                x = ze,
                V = x & 65535,
                B = x >>> 16,
                k = _ & 65535,
                G = _ >>> 16,
                _ = (ge >>> 14 | re << 32 - 14) ^ (ge >>> 18 | re << 32 - 18) ^ (re >>> 41 - 32 | ge << 32 - (41 - 32)),
                x = (re >>> 14 | ge << 32 - 14) ^ (re >>> 18 | ge << 32 - 18) ^ (ge >>> 41 - 32 | re << 32 - (41 - 32)),
                V += x & 65535,
                B += x >>> 16,
                k += _ & 65535,
                G += _ >>> 16,
                _ = ge & pe ^ ~ge & he,
                x = re & ue ^ ~re & Te,
                V += x & 65535,
                B += x >>> 16,
                k += _ & 65535,
                G += _ >>> 16,
                _ = o[Je * 2],
                x = o[Je * 2 + 1],
                V += x & 65535,
                B += x >>> 16,
                k += _ & 65535,
                G += _ >>> 16,
                _ = d[Je % 16],
                x = b[Je % 16],
                V += x & 65535,
                B += x >>> 16,
                k += _ & 65535,
                G += _ >>> 16,
                B += V >>> 16,
                k += B >>> 16,
                G += k >>> 16,
                X = k & 65535 | G << 16,
                ce = V & 65535 | B << 16,
                _ = X,
                x = ce,
                V = x & 65535,
                B = x >>> 16,
                k = _ & 65535,
                G = _ >>> 16,
                _ = (F >>> 28 | D << 32 - 28) ^ (D >>> 34 - 32 | F << 32 - (34 - 32)) ^ (D >>> 39 - 32 | F << 32 - (39 - 32)),
                x = (D >>> 28 | F << 32 - 28) ^ (F >>> 34 - 32 | D << 32 - (34 - 32)) ^ (F >>> 39 - 32 | D << 32 - (39 - 32)),
                V += x & 65535,
                B += x >>> 16,
                k += _ & 65535,
                G += _ >>> 16,
                _ = F & K ^ F & ie ^ K & ie,
                x = D & U ^ D & W ^ U & W,
                V += x & 65535,
                B += x >>> 16,
                k += _ & 65535,
                G += _ >>> 16,
                B += V >>> 16,
                k += B >>> 16,
                G += k >>> 16,
                E = k & 65535 | G << 16,
                _t = V & 65535 | B << 16,
                _ = $,
                x = $e,
                V = x & 65535,
                B = x >>> 16,
                k = _ & 65535,
                G = _ >>> 16,
                _ = X,
                x = ce,
                V += x & 65535,
                B += x >>> 16,
                k += _ & 65535,
                G += _ >>> 16,
                B += V >>> 16,
                k += B >>> 16,
                G += k >>> 16,
                $ = k & 65535 | G << 16,
                $e = V & 65535 | B << 16,
                K = jr,
                ie = xe,
                Ee = It,
                ge = $,
                pe = T,
                he = A,
                le = h,
                F = E,
                U = ee,
                W = fe,
                ye = be,
                re = $e,
                ue = Ne,
                Te = Pe,
                ze = St,
                D = _t,
                Je % 16 === 15)
                    for (var He = 0; He < 16; He++)
                        _ = d[He],
                        x = b[He],
                        V = x & 65535,
                        B = x >>> 16,
                        k = _ & 65535,
                        G = _ >>> 16,
                        _ = d[(He + 9) % 16],
                        x = b[(He + 9) % 16],
                        V += x & 65535,
                        B += x >>> 16,
                        k += _ & 65535,
                        G += _ >>> 16,
                        X = d[(He + 1) % 16],
                        ce = b[(He + 1) % 16],
                        _ = (X >>> 1 | ce << 32 - 1) ^ (X >>> 8 | ce << 32 - 8) ^ X >>> 7,
                        x = (ce >>> 1 | X << 32 - 1) ^ (ce >>> 8 | X << 32 - 8) ^ (ce >>> 7 | X << 32 - 7),
                        V += x & 65535,
                        B += x >>> 16,
                        k += _ & 65535,
                        G += _ >>> 16,
                        X = d[(He + 14) % 16],
                        ce = b[(He + 14) % 16],
                        _ = (X >>> 19 | ce << 32 - 19) ^ (ce >>> 61 - 32 | X << 32 - (61 - 32)) ^ X >>> 6,
                        x = (ce >>> 19 | X << 32 - 19) ^ (X >>> 61 - 32 | ce << 32 - (61 - 32)) ^ (ce >>> 6 | X << 32 - 6),
                        V += x & 65535,
                        B += x >>> 16,
                        k += _ & 65535,
                        G += _ >>> 16,
                        B += V >>> 16,
                        k += B >>> 16,
                        G += k >>> 16,
                        d[He] = k & 65535 | G << 16,
                        b[He] = V & 65535 | B << 16
            }
            _ = F,
            x = D,
            V = x & 65535,
            B = x >>> 16,
            k = _ & 65535,
            G = _ >>> 16,
            _ = y[0],
            x = O[0],
            V += x & 65535,
            B += x >>> 16,
            k += _ & 65535,
            G += _ >>> 16,
            B += V >>> 16,
            k += B >>> 16,
            G += k >>> 16,
            y[0] = F = k & 65535 | G << 16,
            O[0] = D = V & 65535 | B << 16,
            _ = K,
            x = U,
            V = x & 65535,
            B = x >>> 16,
            k = _ & 65535,
            G = _ >>> 16,
            _ = y[1],
            x = O[1],
            V += x & 65535,
            B += x >>> 16,
            k += _ & 65535,
            G += _ >>> 16,
            B += V >>> 16,
            k += B >>> 16,
            G += k >>> 16,
            y[1] = K = k & 65535 | G << 16,
            O[1] = U = V & 65535 | B << 16,
            _ = ie,
            x = W,
            V = x & 65535,
            B = x >>> 16,
            k = _ & 65535,
            G = _ >>> 16,
            _ = y[2],
            x = O[2],
            V += x & 65535,
            B += x >>> 16,
            k += _ & 65535,
            G += _ >>> 16,
            B += V >>> 16,
            k += B >>> 16,
            G += k >>> 16,
            y[2] = ie = k & 65535 | G << 16,
            O[2] = W = V & 65535 | B << 16,
            _ = Ee,
            x = ye,
            V = x & 65535,
            B = x >>> 16,
            k = _ & 65535,
            G = _ >>> 16,
            _ = y[3],
            x = O[3],
            V += x & 65535,
            B += x >>> 16,
            k += _ & 65535,
            G += _ >>> 16,
            B += V >>> 16,
            k += B >>> 16,
            G += k >>> 16,
            y[3] = Ee = k & 65535 | G << 16,
            O[3] = ye = V & 65535 | B << 16,
            _ = ge,
            x = re,
            V = x & 65535,
            B = x >>> 16,
            k = _ & 65535,
            G = _ >>> 16,
            _ = y[4],
            x = O[4],
            V += x & 65535,
            B += x >>> 16,
            k += _ & 65535,
            G += _ >>> 16,
            B += V >>> 16,
            k += B >>> 16,
            G += k >>> 16,
            y[4] = ge = k & 65535 | G << 16,
            O[4] = re = V & 65535 | B << 16,
            _ = pe,
            x = ue,
            V = x & 65535,
            B = x >>> 16,
            k = _ & 65535,
            G = _ >>> 16,
            _ = y[5],
            x = O[5],
            V += x & 65535,
            B += x >>> 16,
            k += _ & 65535,
            G += _ >>> 16,
            B += V >>> 16,
            k += B >>> 16,
            G += k >>> 16,
            y[5] = pe = k & 65535 | G << 16,
            O[5] = ue = V & 65535 | B << 16,
            _ = he,
            x = Te,
            V = x & 65535,
            B = x >>> 16,
            k = _ & 65535,
            G = _ >>> 16,
            _ = y[6],
            x = O[6],
            V += x & 65535,
            B += x >>> 16,
            k += _ & 65535,
            G += _ >>> 16,
            B += V >>> 16,
            k += B >>> 16,
            G += k >>> 16,
            y[6] = he = k & 65535 | G << 16,
            O[6] = Te = V & 65535 | B << 16,
            _ = le,
            x = ze,
            V = x & 65535,
            B = x >>> 16,
            k = _ & 65535,
            G = _ >>> 16,
            _ = y[7],
            x = O[7],
            V += x & 65535,
            B += x >>> 16,
            k += _ & 65535,
            G += _ >>> 16,
            B += V >>> 16,
            k += B >>> 16,
            G += k >>> 16,
            y[7] = le = k & 65535 | G << 16,
            O[7] = ze = V & 65535 | B << 16,
            C += 128,
            z -= 128
        }
        return C
    }
    function l(d) {
        var b = new n;
        b.update(d);
        var y = b.digest();
        return b.clean(),
        y
    }
    a.hash = l
}
)(hf);
(function(a) {
    Object.defineProperty(a, "__esModule", {
        value: !0
    }),
    a.convertSecretKeyToX25519 = a.convertPublicKeyToX25519 = a.verify = a.sign = a.extractPublicKeyFromSecretKey = a.generateKeyPair = a.generateKeyPairFromSeed = a.SEED_LENGTH = a.SECRET_KEY_LENGTH = a.PUBLIC_KEY_LENGTH = a.SIGNATURE_LENGTH = void 0;
    const r = Gl
      , t = hf
      , n = Kl;
    a.SIGNATURE_LENGTH = 64,
    a.PUBLIC_KEY_LENGTH = 32,
    a.SECRET_KEY_LENGTH = 64,
    a.SEED_LENGTH = 32;
    function o($) {
        const T = new Float64Array(16);
        if ($)
            for (let A = 0; A < $.length; A++)
                T[A] = $[A];
        return T
    }
    const c = new Uint8Array(32);
    c[0] = 9;
    const l = o()
      , d = o([1])
      , b = o([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995])
      , y = o([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])
      , O = o([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553])
      , q = o([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214])
      , C = o([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
    function z($, T) {
        for (let A = 0; A < 16; A++)
            $[A] = T[A] | 0
    }
    function F($) {
        let T = 1;
        for (let A = 0; A < 16; A++) {
            let h = $[A] + T + 65535;
            T = Math.floor(h / 65536),
            $[A] = h - T * 65536
        }
        $[0] += T - 1 + 37 * (T - 1)
    }
    function K($, T, A) {
        const h = ~(A - 1);
        for (let E = 0; E < 16; E++) {
            const ee = h & ($[E] ^ T[E]);
            $[E] ^= ee,
            T[E] ^= ee
        }
    }
    function ie($, T) {
        const A = o()
          , h = o();
        for (let E = 0; E < 16; E++)
            h[E] = T[E];
        F(h),
        F(h),
        F(h);
        for (let E = 0; E < 2; E++) {
            A[0] = h[0] - 65517;
            for (let fe = 1; fe < 15; fe++)
                A[fe] = h[fe] - 65535 - (A[fe - 1] >> 16 & 1),
                A[fe - 1] &= 65535;
            A[15] = h[15] - 32767 - (A[14] >> 16 & 1);
            const ee = A[15] >> 16 & 1;
            A[14] &= 65535,
            K(h, A, 1 - ee)
        }
        for (let E = 0; E < 16; E++)
            $[2 * E] = h[E] & 255,
            $[2 * E + 1] = h[E] >> 8
    }
    function Ee($, T) {
        let A = 0;
        for (let h = 0; h < 32; h++)
            A |= $[h] ^ T[h];
        return (1 & A - 1 >>> 8) - 1
    }
    function ge($, T) {
        const A = new Uint8Array(32)
          , h = new Uint8Array(32);
        return ie(A, $),
        ie(h, T),
        Ee(A, h)
    }
    function pe($) {
        const T = new Uint8Array(32);
        return ie(T, $),
        T[0] & 1
    }
    function he($, T) {
        for (let A = 0; A < 16; A++)
            $[A] = T[2 * A] + (T[2 * A + 1] << 8);
        $[15] &= 32767
    }
    function le($, T, A) {
        for (let h = 0; h < 16; h++)
            $[h] = T[h] + A[h]
    }
    function D($, T, A) {
        for (let h = 0; h < 16; h++)
            $[h] = T[h] - A[h]
    }
    function U($, T, A) {
        let h, E, ee = 0, fe = 0, be = 0, $e = 0, Ne = 0, Pe = 0, St = 0, _t = 0, st = 0, je = 0, Xe = 0, Ze = 0, ot = 0, Ue = 0, Qe = 0, De = 0, ke = 0, ut = 0, Me = 0, Pt = 0, Ft = 0, Ut = 0, Bt = 0, Mt = 0, Gt = 0, tr = 0, Lr = 0, Wt = 0, Vr = 0, oi = 0, Ei = 0, ht = A[0], rt = A[1], lt = A[2], ft = A[3], at = A[4], it = A[5], Ot = A[6], At = A[7], pt = A[8], Ct = A[9], dt = A[10], mt = A[11], gt = A[12], Ye = A[13], Rt = A[14], Tt = A[15];
        h = T[0],
        ee += h * ht,
        fe += h * rt,
        be += h * lt,
        $e += h * ft,
        Ne += h * at,
        Pe += h * it,
        St += h * Ot,
        _t += h * At,
        st += h * pt,
        je += h * Ct,
        Xe += h * dt,
        Ze += h * mt,
        ot += h * gt,
        Ue += h * Ye,
        Qe += h * Rt,
        De += h * Tt,
        h = T[1],
        fe += h * ht,
        be += h * rt,
        $e += h * lt,
        Ne += h * ft,
        Pe += h * at,
        St += h * it,
        _t += h * Ot,
        st += h * At,
        je += h * pt,
        Xe += h * Ct,
        Ze += h * dt,
        ot += h * mt,
        Ue += h * gt,
        Qe += h * Ye,
        De += h * Rt,
        ke += h * Tt,
        h = T[2],
        be += h * ht,
        $e += h * rt,
        Ne += h * lt,
        Pe += h * ft,
        St += h * at,
        _t += h * it,
        st += h * Ot,
        je += h * At,
        Xe += h * pt,
        Ze += h * Ct,
        ot += h * dt,
        Ue += h * mt,
        Qe += h * gt,
        De += h * Ye,
        ke += h * Rt,
        ut += h * Tt,
        h = T[3],
        $e += h * ht,
        Ne += h * rt,
        Pe += h * lt,
        St += h * ft,
        _t += h * at,
        st += h * it,
        je += h * Ot,
        Xe += h * At,
        Ze += h * pt,
        ot += h * Ct,
        Ue += h * dt,
        Qe += h * mt,
        De += h * gt,
        ke += h * Ye,
        ut += h * Rt,
        Me += h * Tt,
        h = T[4],
        Ne += h * ht,
        Pe += h * rt,
        St += h * lt,
        _t += h * ft,
        st += h * at,
        je += h * it,
        Xe += h * Ot,
        Ze += h * At,
        ot += h * pt,
        Ue += h * Ct,
        Qe += h * dt,
        De += h * mt,
        ke += h * gt,
        ut += h * Ye,
        Me += h * Rt,
        Pt += h * Tt,
        h = T[5],
        Pe += h * ht,
        St += h * rt,
        _t += h * lt,
        st += h * ft,
        je += h * at,
        Xe += h * it,
        Ze += h * Ot,
        ot += h * At,
        Ue += h * pt,
        Qe += h * Ct,
        De += h * dt,
        ke += h * mt,
        ut += h * gt,
        Me += h * Ye,
        Pt += h * Rt,
        Ft += h * Tt,
        h = T[6],
        St += h * ht,
        _t += h * rt,
        st += h * lt,
        je += h * ft,
        Xe += h * at,
        Ze += h * it,
        ot += h * Ot,
        Ue += h * At,
        Qe += h * pt,
        De += h * Ct,
        ke += h * dt,
        ut += h * mt,
        Me += h * gt,
        Pt += h * Ye,
        Ft += h * Rt,
        Ut += h * Tt,
        h = T[7],
        _t += h * ht,
        st += h * rt,
        je += h * lt,
        Xe += h * ft,
        Ze += h * at,
        ot += h * it,
        Ue += h * Ot,
        Qe += h * At,
        De += h * pt,
        ke += h * Ct,
        ut += h * dt,
        Me += h * mt,
        Pt += h * gt,
        Ft += h * Ye,
        Ut += h * Rt,
        Bt += h * Tt,
        h = T[8],
        st += h * ht,
        je += h * rt,
        Xe += h * lt,
        Ze += h * ft,
        ot += h * at,
        Ue += h * it,
        Qe += h * Ot,
        De += h * At,
        ke += h * pt,
        ut += h * Ct,
        Me += h * dt,
        Pt += h * mt,
        Ft += h * gt,
        Ut += h * Ye,
        Bt += h * Rt,
        Mt += h * Tt,
        h = T[9],
        je += h * ht,
        Xe += h * rt,
        Ze += h * lt,
        ot += h * ft,
        Ue += h * at,
        Qe += h * it,
        De += h * Ot,
        ke += h * At,
        ut += h * pt,
        Me += h * Ct,
        Pt += h * dt,
        Ft += h * mt,
        Ut += h * gt,
        Bt += h * Ye,
        Mt += h * Rt,
        Gt += h * Tt,
        h = T[10],
        Xe += h * ht,
        Ze += h * rt,
        ot += h * lt,
        Ue += h * ft,
        Qe += h * at,
        De += h * it,
        ke += h * Ot,
        ut += h * At,
        Me += h * pt,
        Pt += h * Ct,
        Ft += h * dt,
        Ut += h * mt,
        Bt += h * gt,
        Mt += h * Ye,
        Gt += h * Rt,
        tr += h * Tt,
        h = T[11],
        Ze += h * ht,
        ot += h * rt,
        Ue += h * lt,
        Qe += h * ft,
        De += h * at,
        ke += h * it,
        ut += h * Ot,
        Me += h * At,
        Pt += h * pt,
        Ft += h * Ct,
        Ut += h * dt,
        Bt += h * mt,
        Mt += h * gt,
        Gt += h * Ye,
        tr += h * Rt,
        Lr += h * Tt,
        h = T[12],
        ot += h * ht,
        Ue += h * rt,
        Qe += h * lt,
        De += h * ft,
        ke += h * at,
        ut += h * it,
        Me += h * Ot,
        Pt += h * At,
        Ft += h * pt,
        Ut += h * Ct,
        Bt += h * dt,
        Mt += h * mt,
        Gt += h * gt,
        tr += h * Ye,
        Lr += h * Rt,
        Wt += h * Tt,
        h = T[13],
        Ue += h * ht,
        Qe += h * rt,
        De += h * lt,
        ke += h * ft,
        ut += h * at,
        Me += h * it,
        Pt += h * Ot,
        Ft += h * At,
        Ut += h * pt,
        Bt += h * Ct,
        Mt += h * dt,
        Gt += h * mt,
        tr += h * gt,
        Lr += h * Ye,
        Wt += h * Rt,
        Vr += h * Tt,
        h = T[14],
        Qe += h * ht,
        De += h * rt,
        ke += h * lt,
        ut += h * ft,
        Me += h * at,
        Pt += h * it,
        Ft += h * Ot,
        Ut += h * At,
        Bt += h * pt,
        Mt += h * Ct,
        Gt += h * dt,
        tr += h * mt,
        Lr += h * gt,
        Wt += h * Ye,
        Vr += h * Rt,
        oi += h * Tt,
        h = T[15],
        De += h * ht,
        ke += h * rt,
        ut += h * lt,
        Me += h * ft,
        Pt += h * at,
        Ft += h * it,
        Ut += h * Ot,
        Bt += h * At,
        Mt += h * pt,
        Gt += h * Ct,
        tr += h * dt,
        Lr += h * mt,
        Wt += h * gt,
        Vr += h * Ye,
        oi += h * Rt,
        Ei += h * Tt,
        ee += 38 * ke,
        fe += 38 * ut,
        be += 38 * Me,
        $e += 38 * Pt,
        Ne += 38 * Ft,
        Pe += 38 * Ut,
        St += 38 * Bt,
        _t += 38 * Mt,
        st += 38 * Gt,
        je += 38 * tr,
        Xe += 38 * Lr,
        Ze += 38 * Wt,
        ot += 38 * Vr,
        Ue += 38 * oi,
        Qe += 38 * Ei,
        E = 1,
        h = ee + E + 65535,
        E = Math.floor(h / 65536),
        ee = h - E * 65536,
        h = fe + E + 65535,
        E = Math.floor(h / 65536),
        fe = h - E * 65536,
        h = be + E + 65535,
        E = Math.floor(h / 65536),
        be = h - E * 65536,
        h = $e + E + 65535,
        E = Math.floor(h / 65536),
        $e = h - E * 65536,
        h = Ne + E + 65535,
        E = Math.floor(h / 65536),
        Ne = h - E * 65536,
        h = Pe + E + 65535,
        E = Math.floor(h / 65536),
        Pe = h - E * 65536,
        h = St + E + 65535,
        E = Math.floor(h / 65536),
        St = h - E * 65536,
        h = _t + E + 65535,
        E = Math.floor(h / 65536),
        _t = h - E * 65536,
        h = st + E + 65535,
        E = Math.floor(h / 65536),
        st = h - E * 65536,
        h = je + E + 65535,
        E = Math.floor(h / 65536),
        je = h - E * 65536,
        h = Xe + E + 65535,
        E = Math.floor(h / 65536),
        Xe = h - E * 65536,
        h = Ze + E + 65535,
        E = Math.floor(h / 65536),
        Ze = h - E * 65536,
        h = ot + E + 65535,
        E = Math.floor(h / 65536),
        ot = h - E * 65536,
        h = Ue + E + 65535,
        E = Math.floor(h / 65536),
        Ue = h - E * 65536,
        h = Qe + E + 65535,
        E = Math.floor(h / 65536),
        Qe = h - E * 65536,
        h = De + E + 65535,
        E = Math.floor(h / 65536),
        De = h - E * 65536,
        ee += E - 1 + 37 * (E - 1),
        E = 1,
        h = ee + E + 65535,
        E = Math.floor(h / 65536),
        ee = h - E * 65536,
        h = fe + E + 65535,
        E = Math.floor(h / 65536),
        fe = h - E * 65536,
        h = be + E + 65535,
        E = Math.floor(h / 65536),
        be = h - E * 65536,
        h = $e + E + 65535,
        E = Math.floor(h / 65536),
        $e = h - E * 65536,
        h = Ne + E + 65535,
        E = Math.floor(h / 65536),
        Ne = h - E * 65536,
        h = Pe + E + 65535,
        E = Math.floor(h / 65536),
        Pe = h - E * 65536,
        h = St + E + 65535,
        E = Math.floor(h / 65536),
        St = h - E * 65536,
        h = _t + E + 65535,
        E = Math.floor(h / 65536),
        _t = h - E * 65536,
        h = st + E + 65535,
        E = Math.floor(h / 65536),
        st = h - E * 65536,
        h = je + E + 65535,
        E = Math.floor(h / 65536),
        je = h - E * 65536,
        h = Xe + E + 65535,
        E = Math.floor(h / 65536),
        Xe = h - E * 65536,
        h = Ze + E + 65535,
        E = Math.floor(h / 65536),
        Ze = h - E * 65536,
        h = ot + E + 65535,
        E = Math.floor(h / 65536),
        ot = h - E * 65536,
        h = Ue + E + 65535,
        E = Math.floor(h / 65536),
        Ue = h - E * 65536,
        h = Qe + E + 65535,
        E = Math.floor(h / 65536),
        Qe = h - E * 65536,
        h = De + E + 65535,
        E = Math.floor(h / 65536),
        De = h - E * 65536,
        ee += E - 1 + 37 * (E - 1),
        $[0] = ee,
        $[1] = fe,
        $[2] = be,
        $[3] = $e,
        $[4] = Ne,
        $[5] = Pe,
        $[6] = St,
        $[7] = _t,
        $[8] = st,
        $[9] = je,
        $[10] = Xe,
        $[11] = Ze,
        $[12] = ot,
        $[13] = Ue,
        $[14] = Qe,
        $[15] = De
    }
    function W($, T) {
        U($, T, T)
    }
    function ye($, T) {
        const A = o();
        let h;
        for (h = 0; h < 16; h++)
            A[h] = T[h];
        for (h = 253; h >= 0; h--)
            W(A, A),
            h !== 2 && h !== 4 && U(A, A, T);
        for (h = 0; h < 16; h++)
            $[h] = A[h]
    }
    function re($, T) {
        const A = o();
        let h;
        for (h = 0; h < 16; h++)
            A[h] = T[h];
        for (h = 250; h >= 0; h--)
            W(A, A),
            h !== 1 && U(A, A, T);
        for (h = 0; h < 16; h++)
            $[h] = A[h]
    }
    function ue($, T) {
        const A = o()
          , h = o()
          , E = o()
          , ee = o()
          , fe = o()
          , be = o()
          , $e = o()
          , Ne = o()
          , Pe = o();
        D(A, $[1], $[0]),
        D(Pe, T[1], T[0]),
        U(A, A, Pe),
        le(h, $[0], $[1]),
        le(Pe, T[0], T[1]),
        U(h, h, Pe),
        U(E, $[3], T[3]),
        U(E, E, y),
        U(ee, $[2], T[2]),
        le(ee, ee, ee),
        D(fe, h, A),
        D(be, ee, E),
        le($e, ee, E),
        le(Ne, h, A),
        U($[0], fe, be),
        U($[1], Ne, $e),
        U($[2], $e, be),
        U($[3], fe, Ne)
    }
    function Te($, T, A) {
        for (let h = 0; h < 4; h++)
            K($[h], T[h], A)
    }
    function ze($, T) {
        const A = o()
          , h = o()
          , E = o();
        ye(E, T[2]),
        U(A, T[0], E),
        U(h, T[1], E),
        ie($, h),
        $[31] ^= pe(A) << 7
    }
    function _($, T, A) {
        z($[0], l),
        z($[1], d),
        z($[2], d),
        z($[3], l);
        for (let h = 255; h >= 0; --h) {
            const E = A[h / 8 | 0] >> (h & 7) & 1;
            Te($, T, E),
            ue(T, $),
            ue($, $),
            Te($, T, E)
        }
    }
    function x($, T) {
        const A = [o(), o(), o(), o()];
        z(A[0], O),
        z(A[1], q),
        z(A[2], d),
        U(A[3], O, q),
        _($, A, T)
    }
    function X($) {
        if ($.length !== a.SEED_LENGTH)
            throw new Error(`ed25519: seed must be ${a.SEED_LENGTH} bytes`);
        const T = (0,
        t.hash)($);
        T[0] &= 248,
        T[31] &= 127,
        T[31] |= 64;
        const A = new Uint8Array(32)
          , h = [o(), o(), o(), o()];
        x(h, T),
        ze(A, h);
        const E = new Uint8Array(64);
        return E.set($),
        E.set(A, 32),
        {
            publicKey: A,
            secretKey: E
        }
    }
    a.generateKeyPairFromSeed = X;
    function ce($) {
        const T = (0,
        r.randomBytes)(32, $)
          , A = X(T);
        return (0,
        n.wipe)(T),
        A
    }
    a.generateKeyPair = ce;
    function V($) {
        if ($.length !== a.SECRET_KEY_LENGTH)
            throw new Error(`ed25519: secret key must be ${a.SECRET_KEY_LENGTH} bytes`);
        return new Uint8Array($.subarray(32))
    }
    a.extractPublicKeyFromSecretKey = V;
    const B = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
    function k($, T) {
        let A, h, E, ee;
        for (h = 63; h >= 32; --h) {
            for (A = 0,
            E = h - 32,
            ee = h - 12; E < ee; ++E)
                T[E] += A - 16 * T[h] * B[E - (h - 32)],
                A = Math.floor((T[E] + 128) / 256),
                T[E] -= A * 256;
            T[E] += A,
            T[h] = 0
        }
        for (A = 0,
        E = 0; E < 32; E++)
            T[E] += A - (T[31] >> 4) * B[E],
            A = T[E] >> 8,
            T[E] &= 255;
        for (E = 0; E < 32; E++)
            T[E] -= A * B[E];
        for (h = 0; h < 32; h++)
            T[h + 1] += T[h] >> 8,
            $[h] = T[h] & 255
    }
    function G($) {
        const T = new Float64Array(64);
        for (let A = 0; A < 64; A++)
            T[A] = $[A];
        for (let A = 0; A < 64; A++)
            $[A] = 0;
        k($, T)
    }
    function Je($, T) {
        const A = new Float64Array(64)
          , h = [o(), o(), o(), o()]
          , E = (0,
        t.hash)($.subarray(0, 32));
        E[0] &= 248,
        E[31] &= 127,
        E[31] |= 64;
        const ee = new Uint8Array(64);
        ee.set(E.subarray(32), 32);
        const fe = new t.SHA512;
        fe.update(ee.subarray(32)),
        fe.update(T);
        const be = fe.digest();
        fe.clean(),
        G(be),
        x(h, be),
        ze(ee, h),
        fe.reset(),
        fe.update(ee.subarray(0, 32)),
        fe.update($.subarray(32)),
        fe.update(T);
        const $e = fe.digest();
        G($e);
        for (let Ne = 0; Ne < 32; Ne++)
            A[Ne] = be[Ne];
        for (let Ne = 0; Ne < 32; Ne++)
            for (let Pe = 0; Pe < 32; Pe++)
                A[Ne + Pe] += $e[Ne] * E[Pe];
        return k(ee.subarray(32), A),
        ee
    }
    a.sign = Je;
    function He($, T) {
        const A = o()
          , h = o()
          , E = o()
          , ee = o()
          , fe = o()
          , be = o()
          , $e = o();
        return z($[2], d),
        he($[1], T),
        W(E, $[1]),
        U(ee, E, b),
        D(E, E, $[2]),
        le(ee, $[2], ee),
        W(fe, ee),
        W(be, fe),
        U($e, be, fe),
        U(A, $e, E),
        U(A, A, ee),
        re(A, A),
        U(A, A, E),
        U(A, A, ee),
        U(A, A, ee),
        U($[0], A, ee),
        W(h, $[0]),
        U(h, h, ee),
        ge(h, E) && U($[0], $[0], C),
        W(h, $[0]),
        U(h, h, ee),
        ge(h, E) ? -1 : (pe($[0]) === T[31] >> 7 && D($[0], l, $[0]),
        U($[3], $[0], $[1]),
        0)
    }
    function jr($, T, A) {
        const h = new Uint8Array(32)
          , E = [o(), o(), o(), o()]
          , ee = [o(), o(), o(), o()];
        if (A.length !== a.SIGNATURE_LENGTH)
            throw new Error(`ed25519: signature must be ${a.SIGNATURE_LENGTH} bytes`);
        if (He(ee, $))
            return !1;
        const fe = new t.SHA512;
        fe.update(A.subarray(0, 32)),
        fe.update($),
        fe.update(T);
        const be = fe.digest();
        return G(be),
        _(E, ee, be),
        x(ee, A.subarray(32)),
        ue(E, ee),
        ze(h, E),
        !Ee(A, h)
    }
    a.verify = jr;
    function xe($) {
        let T = [o(), o(), o(), o()];
        if (He(T, $))
            throw new Error("Ed25519: invalid public key");
        let A = o()
          , h = o()
          , E = T[1];
        le(A, d, E),
        D(h, d, E),
        ye(h, h),
        U(A, A, h);
        let ee = new Uint8Array(32);
        return ie(ee, A),
        ee
    }
    a.convertPublicKeyToX25519 = xe;
    function It($) {
        const T = (0,
        t.hash)($.subarray(0, 32));
        T[0] &= 248,
        T[31] &= 127,
        T[31] |= 64;
        const A = new Uint8Array(T.subarray(0, 32));
        return (0,
        n.wipe)(T),
        A
    }
    a.convertSecretKeyToX25519 = It
}
)(Rc);
const Bm = "EdDSA"
  , Hm = "JWT"
  , lf = "."
  , ff = "base64url"
  , km = "utf8"
  , Vm = "utf8"
  , Km = ":"
  , Gm = "did"
  , Wm = "key"
  , il = "base58btc"
  , Jm = "z"
  , Ym = "K36"
  , Xm = 32;
function uo(a) {
    return fo(Ac(Gn(a), km), ff)
}
function pf(a) {
    const r = Ac(Ym, il)
      , t = Jm + fo(E_([r, a]), il);
    return [Gm, Wm, t].join(Km)
}
function Zm(a) {
    return fo(a, ff)
}
function Qm(a) {
    return Ac([uo(a.header), uo(a.payload)].join(lf), Vm)
}
function eb(a) {
    return [uo(a.header), uo(a.payload), Zm(a.signature)].join(lf)
}
function nl(a=Gl.randomBytes(Xm)) {
    return Rc.generateKeyPairFromSeed(a)
}
async function tb(a, r, t, n, o=se.fromMiliseconds(Date.now())) {
    const c = {
        alg: Bm,
        typ: Hm
    }
      , l = pf(n.publicKey)
      , d = o + t
      , b = {
        iss: l,
        sub: a,
        aud: r,
        iat: o,
        exp: d
    }
      , y = Qm({
        header: c,
        payload: b
    })
      , O = Rc.sign(n.secretKey, y);
    return eb({
        header: c,
        payload: b,
        signature: O
    })
}
const rb = "PARSE_ERROR"
  , ib = "INVALID_REQUEST"
  , nb = "METHOD_NOT_FOUND"
  , sb = "INVALID_PARAMS"
  , df = "INTERNAL_ERROR"
  , Tc = "SERVER_ERROR"
  , ob = [-32700, -32600, -32601, -32602, -32603]
  , Hn = {
    [rb]: {
        code: -32700,
        message: "Parse error"
    },
    [ib]: {
        code: -32600,
        message: "Invalid Request"
    },
    [nb]: {
        code: -32601,
        message: "Method not found"
    },
    [sb]: {
        code: -32602,
        message: "Invalid params"
    },
    [df]: {
        code: -32603,
        message: "Internal error"
    },
    [Tc]: {
        code: -32e3,
        message: "Server error"
    }
}
  , gf = Tc;
function ab(a) {
    return ob.includes(a)
}
function sl(a) {
    return Object.keys(Hn).includes(a) ? Hn[a] : Hn[gf]
}
function cb(a) {
    const r = Object.values(Hn).find(t=>t.code === a);
    return r || Hn[gf]
}
function yf(a, r, t) {
    return a.message.includes("getaddrinfo ENOTFOUND") || a.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${t} RPC url at ${r}`) : a
}
var vf = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var _c = function(a, r) {
    return _c = Object.setPrototypeOf || {
        __proto__: []
    }instanceof Array && function(t, n) {
        t.__proto__ = n
    }
    || function(t, n) {
        for (var o in n)
            n.hasOwnProperty(o) && (t[o] = n[o])
    }
    ,
    _c(a, r)
};
function ub(a, r) {
    _c(a, r);
    function t() {
        this.constructor = a
    }
    a.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype,
    new t)
}
var mc = function() {
    return mc = Object.assign || function(r) {
        for (var t, n = 1, o = arguments.length; n < o; n++) {
            t = arguments[n];
            for (var c in t)
                Object.prototype.hasOwnProperty.call(t, c) && (r[c] = t[c])
        }
        return r
    }
    ,
    mc.apply(this, arguments)
};
function hb(a, r) {
    var t = {};
    for (var n in a)
        Object.prototype.hasOwnProperty.call(a, n) && r.indexOf(n) < 0 && (t[n] = a[n]);
    if (a != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, n = Object.getOwnPropertySymbols(a); o < n.length; o++)
            r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(a, n[o]) && (t[n[o]] = a[n[o]]);
    return t
}
function lb(a, r, t, n) {
    var o = arguments.length, c = o < 3 ? r : n === null ? n = Object.getOwnPropertyDescriptor(r, t) : n, l;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
        c = Reflect.decorate(a, r, t, n);
    else
        for (var d = a.length - 1; d >= 0; d--)
            (l = a[d]) && (c = (o < 3 ? l(c) : o > 3 ? l(r, t, c) : l(r, t)) || c);
    return o > 3 && c && Object.defineProperty(r, t, c),
    c
}
function fb(a, r) {
    return function(t, n) {
        r(t, n, a)
    }
}
function pb(a, r) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
        return Reflect.metadata(a, r)
}
function db(a, r, t, n) {
    function o(c) {
        return c instanceof t ? c : new t(function(l) {
            l(c)
        }
        )
    }
    return new (t || (t = Promise))(function(c, l) {
        function d(O) {
            try {
                y(n.next(O))
            } catch (q) {
                l(q)
            }
        }
        function b(O) {
            try {
                y(n.throw(O))
            } catch (q) {
                l(q)
            }
        }
        function y(O) {
            O.done ? c(O.value) : o(O.value).then(d, b)
        }
        y((n = n.apply(a, r || [])).next())
    }
    )
}
function gb(a, r) {
    var t = {
        label: 0,
        sent: function() {
            if (c[0] & 1)
                throw c[1];
            return c[1]
        },
        trys: [],
        ops: []
    }, n, o, c, l;
    return l = {
        next: d(0),
        throw: d(1),
        return: d(2)
    },
    typeof Symbol == "function" && (l[Symbol.iterator] = function() {
        return this
    }
    ),
    l;
    function d(y) {
        return function(O) {
            return b([y, O])
        }
    }
    function b(y) {
        if (n)
            throw new TypeError("Generator is already executing.");
        for (; t; )
            try {
                if (n = 1,
                o && (c = y[0] & 2 ? o.return : y[0] ? o.throw || ((c = o.return) && c.call(o),
                0) : o.next) && !(c = c.call(o, y[1])).done)
                    return c;
                switch (o = 0,
                c && (y = [y[0] & 2, c.value]),
                y[0]) {
                case 0:
                case 1:
                    c = y;
                    break;
                case 4:
                    return t.label++,
                    {
                        value: y[1],
                        done: !1
                    };
                case 5:
                    t.label++,
                    o = y[1],
                    y = [0];
                    continue;
                case 7:
                    y = t.ops.pop(),
                    t.trys.pop();
                    continue;
                default:
                    if (c = t.trys,
                    !(c = c.length > 0 && c[c.length - 1]) && (y[0] === 6 || y[0] === 2)) {
                        t = 0;
                        continue
                    }
                    if (y[0] === 3 && (!c || y[1] > c[0] && y[1] < c[3])) {
                        t.label = y[1];
                        break
                    }
                    if (y[0] === 6 && t.label < c[1]) {
                        t.label = c[1],
                        c = y;
                        break
                    }
                    if (c && t.label < c[2]) {
                        t.label = c[2],
                        t.ops.push(y);
                        break
                    }
                    c[2] && t.ops.pop(),
                    t.trys.pop();
                    continue
                }
                y = r.call(a, t)
            } catch (O) {
                y = [6, O],
                o = 0
            } finally {
                n = c = 0
            }
        if (y[0] & 5)
            throw y[1];
        return {
            value: y[0] ? y[1] : void 0,
            done: !0
        }
    }
}
function yb(a, r, t, n) {
    n === void 0 && (n = t),
    a[n] = r[t]
}
function vb(a, r) {
    for (var t in a)
        t !== "default" && !r.hasOwnProperty(t) && (r[t] = a[t])
}
function bc(a) {
    var r = typeof Symbol == "function" && Symbol.iterator
      , t = r && a[r]
      , n = 0;
    if (t)
        return t.call(a);
    if (a && typeof a.length == "number")
        return {
            next: function() {
                return a && n >= a.length && (a = void 0),
                {
                    value: a && a[n++],
                    done: !a
                }
            }
        };
    throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
}
function _f(a, r) {
    var t = typeof Symbol == "function" && a[Symbol.iterator];
    if (!t)
        return a;
    var n = t.call(a), o, c = [], l;
    try {
        for (; (r === void 0 || r-- > 0) && !(o = n.next()).done; )
            c.push(o.value)
    } catch (d) {
        l = {
            error: d
        }
    } finally {
        try {
            o && !o.done && (t = n.return) && t.call(n)
        } finally {
            if (l)
                throw l.error
        }
    }
    return c
}
function _b() {
    for (var a = [], r = 0; r < arguments.length; r++)
        a = a.concat(_f(arguments[r]));
    return a
}
function mb() {
    for (var a = 0, r = 0, t = arguments.length; r < t; r++)
        a += arguments[r].length;
    for (var n = Array(a), o = 0, r = 0; r < t; r++)
        for (var c = arguments[r], l = 0, d = c.length; l < d; l++,
        o++)
            n[o] = c[l];
    return n
}
function Wn(a) {
    return this instanceof Wn ? (this.v = a,
    this) : new Wn(a)
}
function bb(a, r, t) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = t.apply(a, r || []), o, c = [];
    return o = {},
    l("next"),
    l("throw"),
    l("return"),
    o[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    o;
    function l(C) {
        n[C] && (o[C] = function(z) {
            return new Promise(function(F, K) {
                c.push([C, z, F, K]) > 1 || d(C, z)
            }
            )
        }
        )
    }
    function d(C, z) {
        try {
            b(n[C](z))
        } catch (F) {
            q(c[0][3], F)
        }
    }
    function b(C) {
        C.value instanceof Wn ? Promise.resolve(C.value.v).then(y, O) : q(c[0][2], C)
    }
    function y(C) {
        d("next", C)
    }
    function O(C) {
        d("throw", C)
    }
    function q(C, z) {
        C(z),
        c.shift(),
        c.length && d(c[0][0], c[0][1])
    }
}
function wb(a) {
    var r, t;
    return r = {},
    n("next"),
    n("throw", function(o) {
        throw o
    }),
    n("return"),
    r[Symbol.iterator] = function() {
        return this
    }
    ,
    r;
    function n(o, c) {
        r[o] = a[o] ? function(l) {
            return (t = !t) ? {
                value: Wn(a[o](l)),
                done: o === "return"
            } : c ? c(l) : l
        }
        : c
    }
}
function Eb(a) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = a[Symbol.asyncIterator], t;
    return r ? r.call(a) : (a = typeof bc == "function" ? bc(a) : a[Symbol.iterator](),
    t = {},
    n("next"),
    n("throw"),
    n("return"),
    t[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    t);
    function n(c) {
        t[c] = a[c] && function(l) {
            return new Promise(function(d, b) {
                l = a[c](l),
                o(d, b, l.done, l.value)
            }
            )
        }
    }
    function o(c, l, d, b) {
        Promise.resolve(b).then(function(y) {
            c({
                value: y,
                done: d
            })
        }, l)
    }
}
function xb(a, r) {
    return Object.defineProperty ? Object.defineProperty(a, "raw", {
        value: r
    }) : a.raw = r,
    a
}
function Ib(a) {
    if (a && a.__esModule)
        return a;
    var r = {};
    if (a != null)
        for (var t in a)
            Object.hasOwnProperty.call(a, t) && (r[t] = a[t]);
    return r.default = a,
    r
}
function Sb(a) {
    return a && a.__esModule ? a : {
        default: a
    }
}
function Pb(a, r) {
    if (!r.has(a))
        throw new TypeError("attempted to get private field on non-instance");
    return r.get(a)
}
function Ob(a, r, t) {
    if (!r.has(a))
        throw new TypeError("attempted to set private field on non-instance");
    return r.set(a, t),
    t
}
var Ab = Object.freeze({
    __proto__: null,
    get __assign() {
        return mc
    },
    __asyncDelegator: wb,
    __asyncGenerator: bb,
    __asyncValues: Eb,
    __await: Wn,
    __awaiter: db,
    __classPrivateFieldGet: Pb,
    __classPrivateFieldSet: Ob,
    __createBinding: yb,
    __decorate: lb,
    __exportStar: vb,
    __extends: ub,
    __generator: gb,
    __importDefault: Sb,
    __importStar: Ib,
    __makeTemplateObject: xb,
    __metadata: pb,
    __param: fb,
    __read: _f,
    __rest: hb,
    __spread: _b,
    __spreadArrays: mb,
    __values: bc
}), Cb = Jn(Ab), ii = {}, ol;
function Rb() {
    if (ol)
        return ii;
    ol = 1,
    Object.defineProperty(ii, "__esModule", {
        value: !0
    }),
    ii.isBrowserCryptoAvailable = ii.getSubtleCrypto = ii.getBrowerCrypto = void 0;
    function a() {
        return (cr === null || cr === void 0 ? void 0 : cr.crypto) || (cr === null || cr === void 0 ? void 0 : cr.msCrypto) || {}
    }
    ii.getBrowerCrypto = a;
    function r() {
        const n = a();
        return n.subtle || n.webkitSubtle
    }
    ii.getSubtleCrypto = r;
    function t() {
        return !!a() && !!r()
    }
    return ii.isBrowserCryptoAvailable = t,
    ii
}
var ni = {}, al;
function Tb() {
    if (al)
        return ni;
    al = 1,
    Object.defineProperty(ni, "__esModule", {
        value: !0
    }),
    ni.isBrowser = ni.isNode = ni.isReactNative = void 0;
    function a() {
        return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative"
    }
    ni.isReactNative = a;
    function r() {
        return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
    }
    ni.isNode = r;
    function t() {
        return !a() && !r()
    }
    return ni.isBrowser = t,
    ni
}
(function(a) {
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    const r = Cb;
    r.__exportStar(Rb(), a),
    r.__exportStar(Tb(), a)
}
)(vf);
function mf(a=3) {
    const r = Date.now() * Math.pow(10, a)
      , t = Math.floor(Math.random() * Math.pow(10, a));
    return r + t
}
function $c(a=6) {
    return BigInt(mf(a))
}
function yo(a, r, t) {
    return {
        id: t || mf(),
        jsonrpc: "2.0",
        method: a,
        params: r
    }
}
function Dc(a, r) {
    return {
        id: a,
        jsonrpc: "2.0",
        result: r
    }
}
function vo(a, r, t) {
    return {
        id: a,
        jsonrpc: "2.0",
        error: $b(r, t)
    }
}
function $b(a, r) {
    return typeof a > "u" ? sl(df) : (typeof a == "string" && (a = Object.assign(Object.assign({}, sl(Tc)), {
        message: a
    })),
    typeof r < "u" && (a.data = r),
    ab(a.code) && (a = cb(a.code)),
    a)
}
class Db {
}
class Nb extends Db {
    constructor() {
        super()
    }
}
class Fb extends Nb {
    constructor(r) {
        super()
    }
}
const jb = "^https?:"
  , Lb = "^wss?:";
function Mb(a) {
    const r = a.match(new RegExp(/^\w+:/,"gi"));
    if (!(!r || !r.length))
        return r[0]
}
function bf(a, r) {
    const t = Mb(a);
    return typeof t > "u" ? !1 : new RegExp(r).test(t)
}
function cl(a) {
    return bf(a, jb)
}
function ul(a) {
    return bf(a, Lb)
}
function qb(a) {
    return new RegExp("wss?://localhost(:d{2,5})?").test(a)
}
function wf(a) {
    return typeof a == "object" && "id"in a && "jsonrpc"in a && a.jsonrpc === "2.0"
}
function Nc(a) {
    return wf(a) && "method"in a
}
function _o(a) {
    return wf(a) && (si(a) || Fr(a))
}
function si(a) {
    return "result"in a
}
function Fr(a) {
    return "error"in a
}
class bi extends Fb {
    constructor(r) {
        super(r),
        this.events = new ur,
        this.hasRegisteredEventListeners = !1,
        this.connection = this.setConnection(r),
        this.connection.connected && this.registerEventListeners()
    }
    async connect(r=this.connection) {
        await this.open(r)
    }
    async disconnect() {
        await this.close()
    }
    on(r, t) {
        this.events.on(r, t)
    }
    once(r, t) {
        this.events.once(r, t)
    }
    off(r, t) {
        this.events.off(r, t)
    }
    removeListener(r, t) {
        this.events.removeListener(r, t)
    }
    async request(r, t) {
        return this.requestStrict(yo(r.method, r.params || [], r.id || $c().toString()), t)
    }
    async requestStrict(r, t) {
        return new Promise(async(n,o)=>{
            if (!this.connection.connected)
                try {
                    await this.open()
                } catch (c) {
                    o(c)
                }
            this.events.on(`${r.id}`, c=>{
                Fr(c) ? o(c.error) : n(c.result)
            }
            );
            try {
                await this.connection.send(r, t)
            } catch (c) {
                o(c)
            }
        }
        )
    }
    setConnection(r=this.connection) {
        return r
    }
    onPayload(r) {
        this.events.emit("payload", r),
        _o(r) ? this.events.emit(`${r.id}`, r) : this.events.emit("message", {
            type: r.method,
            data: r.params
        })
    }
    onClose(r) {
        r && r.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${r.code} ${r.reason ? `(${r.reason})` : ""}`)),
        this.events.emit("disconnect")
    }
    async open(r=this.connection) {
        this.connection === r && this.connection.connected || (this.connection.connected && this.close(),
        typeof r == "string" && (await this.connection.open(r),
        r = this.connection),
        this.connection = this.setConnection(r),
        await this.connection.open(),
        this.registerEventListeners(),
        this.events.emit("connect"))
    }
    async close() {
        await this.connection.close()
    }
    registerEventListeners() {
        this.hasRegisteredEventListeners || (this.connection.on("payload", r=>this.onPayload(r)),
        this.connection.on("close", r=>this.onClose(r)),
        this.connection.on("error", r=>this.events.emit("error", r)),
        this.connection.on("register_error", r=>this.onClose()),
        this.hasRegisteredEventListeners = !0)
    }
}
const zb = ()=>typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : require("ws")
  , Ub = ()=>typeof window < "u"
  , hl = a=>a.split("?")[0]
  , ll = 10
  , Bb = zb();
class Hb {
    constructor(r) {
        if (this.url = r,
        this.events = new ur,
        this.registering = !1,
        !ul(r))
            throw new Error(`Provided URL is not compatible with WebSocket connection: ${r}`);
        this.url = r
    }
    get connected() {
        return typeof this.socket < "u"
    }
    get connecting() {
        return this.registering
    }
    on(r, t) {
        this.events.on(r, t)
    }
    once(r, t) {
        this.events.once(r, t)
    }
    off(r, t) {
        this.events.off(r, t)
    }
    removeListener(r, t) {
        this.events.removeListener(r, t)
    }
    async open(r=this.url) {
        await this.register(r)
    }
    async close() {
        return new Promise((r,t)=>{
            if (typeof this.socket > "u") {
                t(new Error("Connection already closed"));
                return
            }
            this.socket.onclose = n=>{
                this.onClose(n),
                r()
            }
            ,
            this.socket.close()
        }
        )
    }
    async send(r, t) {
        typeof this.socket > "u" && (this.socket = await this.register());
        try {
            this.socket.send(Gn(r))
        } catch (n) {
            this.onError(r.id, n)
        }
    }
    register(r=this.url) {
        if (!ul(r))
            throw new Error(`Provided URL is not compatible with WebSocket connection: ${r}`);
        if (this.registering) {
            const t = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1),
            new Promise((n,o)=>{
                this.events.once("register_error", c=>{
                    this.resetMaxListeners(),
                    o(c)
                }
                ),
                this.events.once("open", ()=>{
                    if (this.resetMaxListeners(),
                    typeof this.socket > "u")
                        return o(new Error("WebSocket connection is missing or invalid"));
                    n(this.socket)
                }
                )
            }
            )
        }
        return this.url = r,
        this.registering = !0,
        new Promise((t,n)=>{
            const o = vf.isReactNative() ? void 0 : {
                rejectUnauthorized: !qb(r)
            }
              , c = new Bb(r,[],o);
            Ub() ? c.onerror = l=>{
                const d = l;
                n(this.emitError(d.error))
            }
            : c.on("error", l=>{
                n(this.emitError(l))
            }
            ),
            c.onopen = ()=>{
                this.onOpen(c),
                t(c)
            }
        }
        )
    }
    onOpen(r) {
        r.onmessage = t=>this.onPayload(t),
        r.onclose = t=>this.onClose(t),
        this.socket = r,
        this.registering = !1,
        this.events.emit("open")
    }
    onClose(r) {
        this.socket = void 0,
        this.registering = !1,
        this.events.emit("close", r)
    }
    onPayload(r) {
        if (typeof r.data > "u")
            return;
        const t = typeof r.data == "string" ? Cc(r.data) : r.data;
        this.events.emit("payload", t)
    }
    onError(r, t) {
        const n = this.parseError(t)
          , o = n.message || n.toString()
          , c = vo(r, o);
        this.events.emit("payload", c)
    }
    parseError(r, t=this.url) {
        return yf(r, hl(t), "WS")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > ll && this.events.setMaxListeners(ll)
    }
    emitError(r) {
        const t = this.parseError(new Error(r?.message || `WebSocket connection failed for host: ${hl(this.url)}`));
        return this.events.emit("register_error", t),
        t
    }
}
var ho = {
    exports: {}
};
ho.exports;
(function(a, r) {
    var t = 200
      , n = "__lodash_hash_undefined__"
      , o = 1
      , c = 2
      , l = 9007199254740991
      , d = "[object Arguments]"
      , b = "[object Array]"
      , y = "[object AsyncFunction]"
      , O = "[object Boolean]"
      , q = "[object Date]"
      , C = "[object Error]"
      , z = "[object Function]"
      , F = "[object GeneratorFunction]"
      , K = "[object Map]"
      , ie = "[object Number]"
      , Ee = "[object Null]"
      , ge = "[object Object]"
      , pe = "[object Promise]"
      , he = "[object Proxy]"
      , le = "[object RegExp]"
      , D = "[object Set]"
      , U = "[object String]"
      , W = "[object Symbol]"
      , ye = "[object Undefined]"
      , re = "[object WeakMap]"
      , ue = "[object ArrayBuffer]"
      , Te = "[object DataView]"
      , ze = "[object Float32Array]"
      , _ = "[object Float64Array]"
      , x = "[object Int8Array]"
      , X = "[object Int16Array]"
      , ce = "[object Int32Array]"
      , V = "[object Uint8Array]"
      , B = "[object Uint8ClampedArray]"
      , k = "[object Uint16Array]"
      , G = "[object Uint32Array]"
      , Je = /[\\^$.*+?()[\]{}|]/g
      , He = /^\[object .+?Constructor\]$/
      , jr = /^(?:0|[1-9]\d*)$/
      , xe = {};
    xe[ze] = xe[_] = xe[x] = xe[X] = xe[ce] = xe[V] = xe[B] = xe[k] = xe[G] = !0,
    xe[d] = xe[b] = xe[ue] = xe[O] = xe[Te] = xe[q] = xe[C] = xe[z] = xe[K] = xe[ie] = xe[ge] = xe[le] = xe[D] = xe[U] = xe[re] = !1;
    var It = typeof cr == "object" && cr && cr.Object === Object && cr
      , $ = typeof self == "object" && self && self.Object === Object && self
      , T = It || $ || Function("return this")()
      , A = r && !r.nodeType && r
      , h = A && !0 && a && !a.nodeType && a
      , E = h && h.exports === A
      , ee = E && It.process
      , fe = function() {
        try {
            return ee && ee.binding && ee.binding("util")
        } catch {}
    }()
      , be = fe && fe.isTypedArray;
    function $e(v, I) {
        for (var M = -1, Y = v == null ? 0 : v.length, Ke = 0, ve = []; ++M < Y; ) {
            var et = v[M];
            I(et, M, v) && (ve[Ke++] = et)
        }
        return ve
    }
    function Ne(v, I) {
        for (var M = -1, Y = I.length, Ke = v.length; ++M < Y; )
            v[Ke + M] = I[M];
        return v
    }
    function Pe(v, I) {
        for (var M = -1, Y = v == null ? 0 : v.length; ++M < Y; )
            if (I(v[M], M, v))
                return !0;
        return !1
    }
    function St(v, I) {
        for (var M = -1, Y = Array(v); ++M < v; )
            Y[M] = I(M);
        return Y
    }
    function _t(v) {
        return function(I) {
            return v(I)
        }
    }
    function st(v, I) {
        return v.has(I)
    }
    function je(v, I) {
        return v?.[I]
    }
    function Xe(v) {
        var I = -1
          , M = Array(v.size);
        return v.forEach(function(Y, Ke) {
            M[++I] = [Ke, Y]
        }),
        M
    }
    function Ze(v, I) {
        return function(M) {
            return v(I(M))
        }
    }
    function ot(v) {
        var I = -1
          , M = Array(v.size);
        return v.forEach(function(Y) {
            M[++I] = Y
        }),
        M
    }
    var Ue = Array.prototype
      , Qe = Function.prototype
      , De = Object.prototype
      , ke = T["__core-js_shared__"]
      , ut = Qe.toString
      , Me = De.hasOwnProperty
      , Pt = function() {
        var v = /[^.]+$/.exec(ke && ke.keys && ke.keys.IE_PROTO || "");
        return v ? "Symbol(src)_1." + v : ""
    }()
      , Ft = De.toString
      , Ut = RegExp("^" + ut.call(Me).replace(Je, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
      , Bt = E ? T.Buffer : void 0
      , Mt = T.Symbol
      , Gt = T.Uint8Array
      , tr = De.propertyIsEnumerable
      , Lr = Ue.splice
      , Wt = Mt ? Mt.toStringTag : void 0
      , Vr = Object.getOwnPropertySymbols
      , oi = Bt ? Bt.isBuffer : void 0
      , Ei = Ze(Object.keys, Object)
      , ht = hr(T, "DataView")
      , rt = hr(T, "Map")
      , lt = hr(T, "Promise")
      , ft = hr(T, "Set")
      , at = hr(T, "WeakMap")
      , it = hr(Object, "create")
      , Ot = Gr(ht)
      , At = Gr(rt)
      , pt = Gr(lt)
      , Ct = Gr(ft)
      , dt = Gr(at)
      , mt = Mt ? Mt.prototype : void 0
      , gt = mt ? mt.valueOf : void 0;
    function Ye(v) {
        var I = -1
          , M = v == null ? 0 : v.length;
        for (this.clear(); ++I < M; ) {
            var Y = v[I];
            this.set(Y[0], Y[1])
        }
    }
    function Rt() {
        this.__data__ = it ? it(null) : {},
        this.size = 0
    }
    function Tt(v) {
        var I = this.has(v) && delete this.__data__[v];
        return this.size -= I ? 1 : 0,
        I
    }
    function wo(v) {
        var I = this.__data__;
        if (it) {
            var M = I[v];
            return M === n ? void 0 : M
        }
        return Me.call(I, v) ? I[v] : void 0
    }
    function Eo(v) {
        var I = this.__data__;
        return it ? I[v] !== void 0 : Me.call(I, v)
    }
    function xo(v, I) {
        var M = this.__data__;
        return this.size += this.has(v) ? 0 : 1,
        M[v] = it && I === void 0 ? n : I,
        this
    }
    Ye.prototype.clear = Rt,
    Ye.prototype.delete = Tt,
    Ye.prototype.get = wo,
    Ye.prototype.has = Eo,
    Ye.prototype.set = xo;
    function yr(v) {
        var I = -1
          , M = v == null ? 0 : v.length;
        for (this.clear(); ++I < M; ) {
            var Y = v[I];
            this.set(Y[0], Y[1])
        }
    }
    function Io() {
        this.__data__ = [],
        this.size = 0
    }
    function So(v) {
        var I = this.__data__
          , M = xi(I, v);
        if (M < 0)
            return !1;
        var Y = I.length - 1;
        return M == Y ? I.pop() : Lr.call(I, M, 1),
        --this.size,
        !0
    }
    function Po(v) {
        var I = this.__data__
          , M = xi(I, v);
        return M < 0 ? void 0 : I[M][1]
    }
    function Oo(v) {
        return xi(this.__data__, v) > -1
    }
    function Ao(v, I) {
        var M = this.__data__
          , Y = xi(M, v);
        return Y < 0 ? (++this.size,
        M.push([v, I])) : M[Y][1] = I,
        this
    }
    yr.prototype.clear = Io,
    yr.prototype.delete = So,
    yr.prototype.get = Po,
    yr.prototype.has = Oo,
    yr.prototype.set = Ao;
    function Kr(v) {
        var I = -1
          , M = v == null ? 0 : v.length;
        for (this.clear(); ++I < M; ) {
            var Y = v[I];
            this.set(Y[0], Y[1])
        }
    }
    function zi() {
        this.size = 0,
        this.__data__ = {
            hash: new Ye,
            map: new (rt || yr),
            string: new Ye
        }
    }
    function Co(v) {
        var I = ai(this, v).delete(v);
        return this.size -= I ? 1 : 0,
        I
    }
    function Ui(v) {
        return ai(this, v).get(v)
    }
    function Ro(v) {
        return ai(this, v).has(v)
    }
    function To(v, I) {
        var M = ai(this, v)
          , Y = M.size;
        return M.set(v, I),
        this.size += M.size == Y ? 0 : 1,
        this
    }
    Kr.prototype.clear = zi,
    Kr.prototype.delete = Co,
    Kr.prototype.get = Ui,
    Kr.prototype.has = Ro,
    Kr.prototype.set = To;
    function Bi(v) {
        var I = -1
          , M = v == null ? 0 : v.length;
        for (this.__data__ = new Kr; ++I < M; )
            this.add(v[I])
    }
    function Zn(v) {
        return this.__data__.set(v, n),
        this
    }
    function Qn(v) {
        return this.__data__.has(v)
    }
    Bi.prototype.add = Bi.prototype.push = Zn,
    Bi.prototype.has = Qn;
    function Ar(v) {
        var I = this.__data__ = new yr(v);
        this.size = I.size
    }
    function $o() {
        this.__data__ = new yr,
        this.size = 0
    }
    function Do(v) {
        var I = this.__data__
          , M = I.delete(v);
        return this.size = I.size,
        M
    }
    function No(v) {
        return this.__data__.get(v)
    }
    function Fo(v) {
        return this.__data__.has(v)
    }
    function es(v, I) {
        var M = this.__data__;
        if (M instanceof yr) {
            var Y = M.__data__;
            if (!rt || Y.length < t - 1)
                return Y.push([v, I]),
                this.size = ++M.size,
                this;
            M = this.__data__ = new Kr(Y)
        }
        return M.set(v, I),
        this.size = M.size,
        this
    }
    Ar.prototype.clear = $o,
    Ar.prototype.delete = Do,
    Ar.prototype.get = No,
    Ar.prototype.has = Fo,
    Ar.prototype.set = es;
    function ts(v, I) {
        var M = Vi(v)
          , Y = !M && ps(v)
          , Ke = !M && !Y && gn(v)
          , ve = !M && !Y && !Ke && ys(v)
          , et = M || Y || Ke || ve
          , $t = et ? St(v.length, String) : []
          , Ae = $t.length;
        for (var Ge in v)
            (I || Me.call(v, Ge)) && !(et && (Ge == "length" || Ke && (Ge == "offset" || Ge == "parent") || ve && (Ge == "buffer" || Ge == "byteLength" || Ge == "byteOffset") || cs(Ge, Ae))) && $t.push(Ge);
        return $t
    }
    function xi(v, I) {
        for (var M = v.length; M--; )
            if (fs(v[M][0], I))
                return M;
        return -1
    }
    function pn(v, I, M) {
        var Y = I(v);
        return Vi(v) ? Y : Ne(Y, M(v))
    }
    function Ii(v) {
        return v == null ? v === void 0 ? ye : Ee : Wt && Wt in Object(v) ? os(v) : Mo(v)
    }
    function dn(v) {
        return Pi(v) && Ii(v) == d
    }
    function Si(v, I, M, Y, Ke) {
        return v === I ? !0 : v == null || I == null || !Pi(v) && !Pi(I) ? v !== v && I !== I : rs(v, I, M, Y, Si, Ke)
    }
    function rs(v, I, M, Y, Ke, ve) {
        var et = Vi(v)
          , $t = Vi(I)
          , Ae = et ? b : Mr(v)
          , Ge = $t ? b : Mr(I);
        Ae = Ae == d ? ge : Ae,
        Ge = Ge == d ? ge : Ge;
        var bt = Ae == ge
          , rr = Ge == ge
          , Dt = Ae == Ge;
        if (Dt && gn(v)) {
            if (!gn(I))
                return !1;
            et = !0,
            bt = !1
        }
        if (Dt && !bt)
            return ve || (ve = new Ar),
            et || ys(v) ? Hi(v, I, M, Y, Ke, ve) : Lo(v, I, Ae, M, Y, Ke, ve);
        if (!(M & o)) {
            var tt = bt && Me.call(v, "__wrapped__")
              , Jt = rr && Me.call(I, "__wrapped__");
            if (tt || Jt) {
                var Cr = tt ? v.value() : v
                  , vr = Jt ? I.value() : I;
                return ve || (ve = new Ar),
                Ke(Cr, vr, M, Y, ve)
            }
        }
        return Dt ? (ve || (ve = new Ar),
        ss(v, I, M, Y, Ke, ve)) : !1
    }
    function jo(v) {
        if (!gs(v) || hs(v))
            return !1;
        var I = Ki(v) ? Ut : He;
        return I.test(Gr(v))
    }
    function is(v) {
        return Pi(v) && ds(v.length) && !!xe[Ii(v)]
    }
    function ns(v) {
        if (!ls(v))
            return Ei(v);
        var I = [];
        for (var M in Object(v))
            Me.call(v, M) && M != "constructor" && I.push(M);
        return I
    }
    function Hi(v, I, M, Y, Ke, ve) {
        var et = M & o
          , $t = v.length
          , Ae = I.length;
        if ($t != Ae && !(et && Ae > $t))
            return !1;
        var Ge = ve.get(v);
        if (Ge && ve.get(I))
            return Ge == I;
        var bt = -1
          , rr = !0
          , Dt = M & c ? new Bi : void 0;
        for (ve.set(v, I),
        ve.set(I, v); ++bt < $t; ) {
            var tt = v[bt]
              , Jt = I[bt];
            if (Y)
                var Cr = et ? Y(Jt, tt, bt, I, v, ve) : Y(tt, Jt, bt, v, I, ve);
            if (Cr !== void 0) {
                if (Cr)
                    continue;
                rr = !1;
                break
            }
            if (Dt) {
                if (!Pe(I, function(vr, qr) {
                    if (!st(Dt, qr) && (tt === vr || Ke(tt, vr, M, Y, ve)))
                        return Dt.push(qr)
                })) {
                    rr = !1;
                    break
                }
            } else if (!(tt === Jt || Ke(tt, Jt, M, Y, ve))) {
                rr = !1;
                break
            }
        }
        return ve.delete(v),
        ve.delete(I),
        rr
    }
    function Lo(v, I, M, Y, Ke, ve, et) {
        switch (M) {
        case Te:
            if (v.byteLength != I.byteLength || v.byteOffset != I.byteOffset)
                return !1;
            v = v.buffer,
            I = I.buffer;
        case ue:
            return !(v.byteLength != I.byteLength || !ve(new Gt(v), new Gt(I)));
        case O:
        case q:
        case ie:
            return fs(+v, +I);
        case C:
            return v.name == I.name && v.message == I.message;
        case le:
        case U:
            return v == I + "";
        case K:
            var $t = Xe;
        case D:
            var Ae = Y & o;
            if ($t || ($t = ot),
            v.size != I.size && !Ae)
                return !1;
            var Ge = et.get(v);
            if (Ge)
                return Ge == I;
            Y |= c,
            et.set(v, I);
            var bt = Hi($t(v), $t(I), Y, Ke, ve, et);
            return et.delete(v),
            bt;
        case W:
            if (gt)
                return gt.call(v) == gt.call(I)
        }
        return !1
    }
    function ss(v, I, M, Y, Ke, ve) {
        var et = M & o
          , $t = ki(v)
          , Ae = $t.length
          , Ge = ki(I)
          , bt = Ge.length;
        if (Ae != bt && !et)
            return !1;
        for (var rr = Ae; rr--; ) {
            var Dt = $t[rr];
            if (!(et ? Dt in I : Me.call(I, Dt)))
                return !1
        }
        var tt = ve.get(v);
        if (tt && ve.get(I))
            return tt == I;
        var Jt = !0;
        ve.set(v, I),
        ve.set(I, v);
        for (var Cr = et; ++rr < Ae; ) {
            Dt = $t[rr];
            var vr = v[Dt]
              , qr = I[Dt];
            if (Y)
                var yn = et ? Y(qr, vr, Dt, I, v, ve) : Y(vr, qr, Dt, v, I, ve);
            if (!(yn === void 0 ? vr === qr || Ke(vr, qr, M, Y, ve) : yn)) {
                Jt = !1;
                break
            }
            Cr || (Cr = Dt == "constructor")
        }
        if (Jt && !Cr) {
            var Oi = v.constructor
              , qt = I.constructor;
            Oi != qt && "constructor"in v && "constructor"in I && !(typeof Oi == "function" && Oi instanceof Oi && typeof qt == "function" && qt instanceof qt) && (Jt = !1)
        }
        return ve.delete(v),
        ve.delete(I),
        Jt
    }
    function ki(v) {
        return pn(v, Uo, as)
    }
    function ai(v, I) {
        var M = v.__data__;
        return us(I) ? M[typeof I == "string" ? "string" : "hash"] : M.map
    }
    function hr(v, I) {
        var M = je(v, I);
        return jo(M) ? M : void 0
    }
    function os(v) {
        var I = Me.call(v, Wt)
          , M = v[Wt];
        try {
            v[Wt] = void 0;
            var Y = !0
        } catch {}
        var Ke = Ft.call(v);
        return Y && (I ? v[Wt] = M : delete v[Wt]),
        Ke
    }
    var as = Vr ? function(v) {
        return v == null ? [] : (v = Object(v),
        $e(Vr(v), function(I) {
            return tr.call(v, I)
        }))
    }
    : Ve
      , Mr = Ii;
    (ht && Mr(new ht(new ArrayBuffer(1))) != Te || rt && Mr(new rt) != K || lt && Mr(lt.resolve()) != pe || ft && Mr(new ft) != D || at && Mr(new at) != re) && (Mr = function(v) {
        var I = Ii(v)
          , M = I == ge ? v.constructor : void 0
          , Y = M ? Gr(M) : "";
        if (Y)
            switch (Y) {
            case Ot:
                return Te;
            case At:
                return K;
            case pt:
                return pe;
            case Ct:
                return D;
            case dt:
                return re
            }
        return I
    }
    );
    function cs(v, I) {
        return I = I ?? l,
        !!I && (typeof v == "number" || jr.test(v)) && v > -1 && v % 1 == 0 && v < I
    }
    function us(v) {
        var I = typeof v;
        return I == "string" || I == "number" || I == "symbol" || I == "boolean" ? v !== "__proto__" : v === null
    }
    function hs(v) {
        return !!Pt && Pt in v
    }
    function ls(v) {
        var I = v && v.constructor
          , M = typeof I == "function" && I.prototype || De;
        return v === M
    }
    function Mo(v) {
        return Ft.call(v)
    }
    function Gr(v) {
        if (v != null) {
            try {
                return ut.call(v)
            } catch {}
            try {
                return v + ""
            } catch {}
        }
        return ""
    }
    function fs(v, I) {
        return v === I || v !== v && I !== I
    }
    var ps = dn(function() {
        return arguments
    }()) ? dn : function(v) {
        return Pi(v) && Me.call(v, "callee") && !tr.call(v, "callee")
    }
      , Vi = Array.isArray;
    function qo(v) {
        return v != null && ds(v.length) && !Ki(v)
    }
    var gn = oi || Be;
    function zo(v, I) {
        return Si(v, I)
    }
    function Ki(v) {
        if (!gs(v))
            return !1;
        var I = Ii(v);
        return I == z || I == F || I == y || I == he
    }
    function ds(v) {
        return typeof v == "number" && v > -1 && v % 1 == 0 && v <= l
    }
    function gs(v) {
        var I = typeof v;
        return v != null && (I == "object" || I == "function")
    }
    function Pi(v) {
        return v != null && typeof v == "object"
    }
    var ys = be ? _t(be) : is;
    function Uo(v) {
        return qo(v) ? ts(v) : ns(v)
    }
    function Ve() {
        return []
    }
    function Be() {
        return !1
    }
    a.exports = zo
}
)(ho, ho.exports);
var kb = ho.exports
  , Vb = Wl(kb);
function Kb(a, r) {
    if (a.length >= 255)
        throw new TypeError("Alphabet too long");
    for (var t = new Uint8Array(256), n = 0; n < t.length; n++)
        t[n] = 255;
    for (var o = 0; o < a.length; o++) {
        var c = a.charAt(o)
          , l = c.charCodeAt(0);
        if (t[l] !== 255)
            throw new TypeError(c + " is ambiguous");
        t[l] = o
    }
    var d = a.length
      , b = a.charAt(0)
      , y = Math.log(d) / Math.log(256)
      , O = Math.log(256) / Math.log(d);
    function q(F) {
        if (F instanceof Uint8Array || (ArrayBuffer.isView(F) ? F = new Uint8Array(F.buffer,F.byteOffset,F.byteLength) : Array.isArray(F) && (F = Uint8Array.from(F))),
        !(F instanceof Uint8Array))
            throw new TypeError("Expected Uint8Array");
        if (F.length === 0)
            return "";
        for (var K = 0, ie = 0, Ee = 0, ge = F.length; Ee !== ge && F[Ee] === 0; )
            Ee++,
            K++;
        for (var pe = (ge - Ee) * O + 1 >>> 0, he = new Uint8Array(pe); Ee !== ge; ) {
            for (var le = F[Ee], D = 0, U = pe - 1; (le !== 0 || D < ie) && U !== -1; U--,
            D++)
                le += 256 * he[U] >>> 0,
                he[U] = le % d >>> 0,
                le = le / d >>> 0;
            if (le !== 0)
                throw new Error("Non-zero carry");
            ie = D,
            Ee++
        }
        for (var W = pe - ie; W !== pe && he[W] === 0; )
            W++;
        for (var ye = b.repeat(K); W < pe; ++W)
            ye += a.charAt(he[W]);
        return ye
    }
    function C(F) {
        if (typeof F != "string")
            throw new TypeError("Expected String");
        if (F.length === 0)
            return new Uint8Array;
        var K = 0;
        if (F[K] !== " ") {
            for (var ie = 0, Ee = 0; F[K] === b; )
                ie++,
                K++;
            for (var ge = (F.length - K) * y + 1 >>> 0, pe = new Uint8Array(ge); F[K]; ) {
                var he = t[F.charCodeAt(K)];
                if (he === 255)
                    return;
                for (var le = 0, D = ge - 1; (he !== 0 || le < Ee) && D !== -1; D--,
                le++)
                    he += d * pe[D] >>> 0,
                    pe[D] = he % 256 >>> 0,
                    he = he / 256 >>> 0;
                if (he !== 0)
                    throw new Error("Non-zero carry");
                Ee = le,
                K++
            }
            if (F[K] !== " ") {
                for (var U = ge - Ee; U !== ge && pe[U] === 0; )
                    U++;
                for (var W = new Uint8Array(ie + (ge - U)), ye = ie; U !== ge; )
                    W[ye++] = pe[U++];
                return W
            }
        }
    }
    function z(F) {
        var K = C(F);
        if (K)
            return K;
        throw new Error(`Non-${r} character`)
    }
    return {
        encode: q,
        decodeUnsafe: C,
        decode: z
    }
}
var Gb = Kb
  , Wb = Gb;
const Ef = a=>{
    if (a instanceof Uint8Array && a.constructor.name === "Uint8Array")
        return a;
    if (a instanceof ArrayBuffer)
        return new Uint8Array(a);
    if (ArrayBuffer.isView(a))
        return new Uint8Array(a.buffer,a.byteOffset,a.byteLength);
    throw new Error("Unknown type, must be binary type")
}
  , Jb = a=>new TextEncoder().encode(a)
  , Yb = a=>new TextDecoder().decode(a);
class Xb {
    constructor(r, t, n) {
        this.name = r,
        this.prefix = t,
        this.baseEncode = n
    }
    encode(r) {
        if (r instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(r)}`;
        throw Error("Unknown type, must be binary type")
    }
}
class Zb {
    constructor(r, t, n) {
        if (this.name = r,
        this.prefix = t,
        t.codePointAt(0) === void 0)
            throw new Error("Invalid prefix character");
        this.prefixCodePoint = t.codePointAt(0),
        this.baseDecode = n
    }
    decode(r) {
        if (typeof r == "string") {
            if (r.codePointAt(0) !== this.prefixCodePoint)
                throw Error(`Unable to decode multibase string ${JSON.stringify(r)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(r.slice(this.prefix.length))
        } else
            throw Error("Can only multibase decode strings")
    }
    or(r) {
        return xf(this, r)
    }
}
class Qb {
    constructor(r) {
        this.decoders = r
    }
    or(r) {
        return xf(this, r)
    }
    decode(r) {
        const t = r[0]
          , n = this.decoders[t];
        if (n)
            return n.decode(r);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(r)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
const xf = (a,r)=>new Qb({
    ...a.decoders || {
        [a.prefix]: a
    },
    ...r.decoders || {
        [r.prefix]: r
    }
});
class ew {
    constructor(r, t, n, o) {
        this.name = r,
        this.prefix = t,
        this.baseEncode = n,
        this.baseDecode = o,
        this.encoder = new Xb(r,t,n),
        this.decoder = new Zb(r,t,o)
    }
    encode(r) {
        return this.encoder.encode(r)
    }
    decode(r) {
        return this.decoder.decode(r)
    }
}
const mo = ({name: a, prefix: r, encode: t, decode: n})=>new ew(a,r,t,n)
  , Xn = ({prefix: a, name: r, alphabet: t})=>{
    const {encode: n, decode: o} = Wb(t, r);
    return mo({
        prefix: a,
        name: r,
        encode: n,
        decode: c=>Ef(o(c))
    })
}
  , tw = (a,r,t,n)=>{
    const o = {};
    for (let O = 0; O < r.length; ++O)
        o[r[O]] = O;
    let c = a.length;
    for (; a[c - 1] === "="; )
        --c;
    const l = new Uint8Array(c * t / 8 | 0);
    let d = 0
      , b = 0
      , y = 0;
    for (let O = 0; O < c; ++O) {
        const q = o[a[O]];
        if (q === void 0)
            throw new SyntaxError(`Non-${n} character`);
        b = b << t | q,
        d += t,
        d >= 8 && (d -= 8,
        l[y++] = 255 & b >> d)
    }
    if (d >= t || 255 & b << 8 - d)
        throw new SyntaxError("Unexpected end of data");
    return l
}
  , rw = (a,r,t)=>{
    const n = r[r.length - 1] === "="
      , o = (1 << t) - 1;
    let c = ""
      , l = 0
      , d = 0;
    for (let b = 0; b < a.length; ++b)
        for (d = d << 8 | a[b],
        l += 8; l > t; )
            l -= t,
            c += r[o & d >> l];
    if (l && (c += r[o & d << t - l]),
    n)
        for (; c.length * t & 7; )
            c += "=";
    return c
}
  , kt = ({name: a, prefix: r, bitsPerChar: t, alphabet: n})=>mo({
    prefix: r,
    name: a,
    encode(o) {
        return rw(o, n, t)
    },
    decode(o) {
        return tw(o, n, t, a)
    }
})
  , iw = mo({
    prefix: "\0",
    name: "identity",
    encode: a=>Yb(a),
    decode: a=>Jb(a)
});
var nw = Object.freeze({
    __proto__: null,
    identity: iw
});
const sw = kt({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var ow = Object.freeze({
    __proto__: null,
    base2: sw
});
const aw = kt({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var cw = Object.freeze({
    __proto__: null,
    base8: aw
});
const uw = Xn({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var hw = Object.freeze({
    __proto__: null,
    base10: uw
});
const lw = kt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4
})
  , fw = kt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4
});
var pw = Object.freeze({
    __proto__: null,
    base16: lw,
    base16upper: fw
});
const dw = kt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5
})
  , gw = kt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5
})
  , yw = kt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5
})
  , vw = kt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5
})
  , _w = kt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5
})
  , mw = kt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5
})
  , bw = kt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5
})
  , ww = kt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5
})
  , Ew = kt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5
});
var xw = Object.freeze({
    __proto__: null,
    base32: dw,
    base32upper: gw,
    base32pad: yw,
    base32padupper: vw,
    base32hex: _w,
    base32hexupper: mw,
    base32hexpad: bw,
    base32hexpadupper: ww,
    base32z: Ew
});
const Iw = Xn({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
})
  , Sw = Xn({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});
var Pw = Object.freeze({
    __proto__: null,
    base36: Iw,
    base36upper: Sw
});
const Ow = Xn({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
})
  , Aw = Xn({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});
var Cw = Object.freeze({
    __proto__: null,
    base58btc: Ow,
    base58flickr: Aw
});
const Rw = kt({
    prefix: "m",
    name: "base64",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6
})
  , Tw = kt({
    prefix: "M",
    name: "base64pad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6
})
  , $w = kt({
    prefix: "u",
    name: "base64url",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6
})
  , Dw = kt({
    prefix: "U",
    name: "base64urlpad",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6
});
var Nw = Object.freeze({
    __proto__: null,
    base64: Rw,
    base64pad: Tw,
    base64url: $w,
    base64urlpad: Dw
});
const If = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}")
  , Fw = If.reduce((a,r,t)=>(a[t] = r,
a), [])
  , jw = If.reduce((a,r,t)=>(a[r.codePointAt(0)] = t,
a), []);
function Lw(a) {
    return a.reduce((r,t)=>(r += Fw[t],
    r), "")
}
function Mw(a) {
    const r = [];
    for (const t of a) {
        const n = jw[t.codePointAt(0)];
        if (n === void 0)
            throw new Error(`Non-base256emoji character: ${t}`);
        r.push(n)
    }
    return new Uint8Array(r)
}
const qw = mo({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: Lw,
    decode: Mw
});
var zw = Object.freeze({
    __proto__: null,
    base256emoji: qw
})
  , Uw = Sf
  , fl = 128
  , Bw = 127
  , Hw = ~Bw
  , kw = Math.pow(2, 31);
function Sf(a, r, t) {
    r = r || [],
    t = t || 0;
    for (var n = t; a >= kw; )
        r[t++] = a & 255 | fl,
        a /= 128;
    for (; a & Hw; )
        r[t++] = a & 255 | fl,
        a >>>= 7;
    return r[t] = a | 0,
    Sf.bytes = t - n + 1,
    r
}
var Vw = wc
  , Kw = 128
  , pl = 127;
function wc(a, n) {
    var t = 0, n = n || 0, o = 0, c = n, l, d = a.length;
    do {
        if (c >= d)
            throw wc.bytes = 0,
            new RangeError("Could not decode varint");
        l = a[c++],
        t += o < 28 ? (l & pl) << o : (l & pl) * Math.pow(2, o),
        o += 7
    } while (l >= Kw);
    return wc.bytes = c - n,
    t
}
var Gw = Math.pow(2, 7)
  , Ww = Math.pow(2, 14)
  , Jw = Math.pow(2, 21)
  , Yw = Math.pow(2, 28)
  , Xw = Math.pow(2, 35)
  , Zw = Math.pow(2, 42)
  , Qw = Math.pow(2, 49)
  , eE = Math.pow(2, 56)
  , tE = Math.pow(2, 63)
  , rE = function(a) {
    return a < Gw ? 1 : a < Ww ? 2 : a < Jw ? 3 : a < Yw ? 4 : a < Xw ? 5 : a < Zw ? 6 : a < Qw ? 7 : a < eE ? 8 : a < tE ? 9 : 10
}
  , iE = {
    encode: Uw,
    decode: Vw,
    encodingLength: rE
}
  , Pf = iE;
const dl = (a,r,t=0)=>(Pf.encode(a, r, t),
r)
  , gl = a=>Pf.encodingLength(a)
  , Ec = (a,r)=>{
    const t = r.byteLength
      , n = gl(a)
      , o = n + gl(t)
      , c = new Uint8Array(o + t);
    return dl(a, c, 0),
    dl(t, c, n),
    c.set(r, o),
    new nE(a,t,r,c)
}
;
class nE {
    constructor(r, t, n, o) {
        this.code = r,
        this.size = t,
        this.digest = n,
        this.bytes = o
    }
}
const Of = ({name: a, code: r, encode: t})=>new sE(a,r,t);
class sE {
    constructor(r, t, n) {
        this.name = r,
        this.code = t,
        this.encode = n
    }
    digest(r) {
        if (r instanceof Uint8Array) {
            const t = this.encode(r);
            return t instanceof Uint8Array ? Ec(this.code, t) : t.then(n=>Ec(this.code, n))
        } else
            throw Error("Unknown type, must be binary type")
    }
}
const Af = a=>async r=>new Uint8Array(await crypto.subtle.digest(a, r))
  , oE = Of({
    name: "sha2-256",
    code: 18,
    encode: Af("SHA-256")
})
  , aE = Of({
    name: "sha2-512",
    code: 19,
    encode: Af("SHA-512")
});
var cE = Object.freeze({
    __proto__: null,
    sha256: oE,
    sha512: aE
});
const Cf = 0
  , uE = "identity"
  , Rf = Ef
  , hE = a=>Ec(Cf, Rf(a))
  , lE = {
    code: Cf,
    name: uE,
    encode: Rf,
    digest: hE
};
var fE = Object.freeze({
    __proto__: null,
    identity: lE
});
new TextEncoder,
new TextDecoder;
const yl = {
    ...nw,
    ...ow,
    ...cw,
    ...hw,
    ...pw,
    ...xw,
    ...Pw,
    ...Cw,
    ...Nw,
    ...zw
};
({
    ...cE,
    ...fE
});
function Tf(a) {
    return globalThis.Buffer != null ? new Uint8Array(a.buffer,a.byteOffset,a.byteLength) : a
}
function pE(a=0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Tf(globalThis.Buffer.allocUnsafe(a)) : new Uint8Array(a)
}
function $f(a, r, t, n) {
    return {
        name: a,
        prefix: r,
        encoder: {
            name: a,
            prefix: r,
            encode: t
        },
        decoder: {
            decode: n
        }
    }
}
const vl = $f("utf8", "u", a=>"u" + new TextDecoder("utf8").decode(a), a=>new TextEncoder().encode(a.substring(1)))
  , Za = $f("ascii", "a", a=>{
    let r = "a";
    for (let t = 0; t < a.length; t++)
        r += String.fromCharCode(a[t]);
    return r
}
, a=>{
    a = a.substring(1);
    const r = pE(a.length);
    for (let t = 0; t < a.length; t++)
        r[t] = a.charCodeAt(t);
    return r
}
)
  , dE = {
    utf8: vl,
    "utf-8": vl,
    hex: yl.base16,
    latin1: Za,
    ascii: Za,
    binary: Za,
    ...yl
};
function gE(a, r="utf8") {
    const t = dE[r];
    if (!t)
        throw new Error(`Unsupported encoding "${r}"`);
    return (r === "utf8" || r === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Tf(globalThis.Buffer.from(a, "utf-8")) : t.decoder.decode(`${t.prefix}${a}`)
}
const Df = "wc"
  , yE = 2
  , Fc = "core"
  , mi = `${Df}@2:${Fc}:`
  , vE = {
    name: Fc,
    logger: "error"
}
  , _E = {
    database: ":memory:"
}
  , mE = "crypto"
  , _l = "client_ed25519_seed"
  , bE = se.ONE_DAY
  , wE = "keychain"
  , EE = "0.3"
  , xE = "messages"
  , IE = "0.3"
  , SE = se.SIX_HOURS
  , PE = "publisher"
  , Nf = "irn"
  , OE = "error"
  , Ff = "wss://relay.walletconnect.com"
  , ml = "wss://relay.walletconnect.org"
  , AE = "relayer"
  , vt = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish"
}
  , CE = "_subscription"
  , Ln = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error"
}
  , RE = se.ONE_SECOND / 2
  , TE = "2.9.0"
  , $E = 1e4
  , DE = "0.3"
  , NE = "WALLETCONNECT_CLIENT_ID"
  , kr = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed"
}
  , FE = "subscription"
  , jE = "0.3"
  , LE = se.FIVE_SECONDS * 1e3
  , ME = "pairing"
  , qE = "0.3"
  , Mn = {
    wc_pairingDelete: {
        req: {
            ttl: se.ONE_DAY,
            prompt: !1,
            tag: 1e3
        },
        res: {
            ttl: se.ONE_DAY,
            prompt: !1,
            tag: 1001
        }
    },
    wc_pairingPing: {
        req: {
            ttl: se.THIRTY_SECONDS,
            prompt: !1,
            tag: 1002
        },
        res: {
            ttl: se.THIRTY_SECONDS,
            prompt: !1,
            tag: 1003
        }
    },
    unregistered_method: {
        req: {
            ttl: se.ONE_DAY,
            prompt: !1,
            tag: 0
        },
        res: {
            ttl: se.ONE_DAY,
            prompt: !1,
            tag: 0
        }
    }
}
  , Hr = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync"
}
  , zE = "history"
  , UE = "0.3"
  , BE = "expirer"
  , Pr = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync"
}
  , HE = "0.3"
  , Qa = "verify-api"
  , bl = "https://bitcase.claims";
class kE {
    constructor(r, t) {
        this.core = r,
        this.logger = t,
        this.keychain = new Map,
        this.name = wE,
        this.version = EE,
        this.initialized = !1,
        this.storagePrefix = mi,
        this.init = async()=>{
            if (!this.initialized) {
                const n = await this.getKeyChain();
                typeof n < "u" && (this.keychain = n),
                this.initialized = !0
            }
        }
        ,
        this.has = n=>(this.isInitialized(),
        this.keychain.has(n)),
        this.set = async(n,o)=>{
            this.isInitialized(),
            this.keychain.set(n, o),
            await this.persist()
        }
        ,
        this.get = n=>{
            this.isInitialized();
            const o = this.keychain.get(n);
            if (typeof o > "u") {
                const {message: c} = Q("NO_MATCHING_KEY", `${this.name}: ${n}`);
                throw new Error(c)
            }
            return o
        }
        ,
        this.del = async n=>{
            this.isInitialized(),
            this.keychain.delete(n),
            await this.persist()
        }
        ,
        this.core = r,
        this.logger = Re.generateChildLogger(t, this.name)
    }
    get context() {
        return Re.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name
    }
    async setKeyChain(r) {
        await this.core.storage.setItem(this.storageKey, Zl(r))
    }
    async getKeyChain() {
        const r = await this.core.storage.getItem(this.storageKey);
        return typeof r < "u" ? Ql(r) : void 0
    }
    async persist() {
        await this.setKeyChain(this.keychain)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: r} = Q("NOT_INITIALIZED", this.name);
            throw new Error(r)
        }
    }
}
class VE {
    constructor(r, t, n) {
        this.core = r,
        this.logger = t,
        this.name = mE,
        this.initialized = !1,
        this.init = async()=>{
            this.initialized || (await this.keychain.init(),
            this.initialized = !0)
        }
        ,
        this.hasKeys = o=>(this.isInitialized(),
        this.keychain.has(o)),
        this.getClientId = async()=>{
            this.isInitialized();
            const o = await this.getClientSeed()
              , c = nl(o);
            return pf(c.publicKey)
        }
        ,
        this.generateKeyPair = ()=>{
            this.isInitialized();
            const o = S_();
            return this.setPrivateKey(o.publicKey, o.privateKey)
        }
        ,
        this.signJWT = async o=>{
            this.isInitialized();
            const c = await this.getClientSeed()
              , l = nl(c)
              , d = ac();
            return await tb(d, o, bE, l)
        }
        ,
        this.generateSharedKey = (o,c,l)=>{
            this.isInitialized();
            const d = this.getPrivateKey(o)
              , b = P_(d, c);
            return this.setSymKey(b, l)
        }
        ,
        this.setSymKey = async(o,c)=>{
            this.isInitialized();
            const l = c || O_(o);
            return await this.keychain.set(l, o),
            l
        }
        ,
        this.deleteKeyPair = async o=>{
            this.isInitialized(),
            await this.keychain.del(o)
        }
        ,
        this.deleteSymKey = async o=>{
            this.isInitialized(),
            await this.keychain.del(o)
        }
        ,
        this.encode = async(o,c,l)=>{
            this.isInitialized();
            const d = A_(l)
              , b = Gn(c);
            if (qh(d)) {
                const C = d.senderPublicKey
                  , z = d.receiverPublicKey;
                o = await this.generateSharedKey(C, z)
            }
            const y = this.getSymKey(o)
              , {type: O, senderPublicKey: q} = d;
            return C_({
                type: O,
                symKey: y,
                message: b,
                senderPublicKey: q
            })
        }
        ,
        this.decode = async(o,c,l)=>{
            this.isInitialized();
            const d = R_(c, l);
            if (qh(d)) {
                const O = d.receiverPublicKey
                  , q = d.senderPublicKey;
                o = await this.generateSharedKey(O, q)
            }
            const b = this.getSymKey(o)
              , y = T_({
                symKey: b,
                encoded: c
            });
            return Cc(y)
        }
        ,
        this.getPayloadType = o=>{
            const c = zh(o);
            return $_(c.type)
        }
        ,
        this.getPayloadSenderPublicKey = o=>{
            const c = zh(o);
            return c.senderPublicKey ? fo(c.senderPublicKey, D_) : void 0
        }
        ,
        this.core = r,
        this.logger = Re.generateChildLogger(t, this.name),
        this.keychain = n || new kE(this.core,this.logger)
    }
    get context() {
        return Re.getLoggerContext(this.logger)
    }
    async setPrivateKey(r, t) {
        return await this.keychain.set(r, t),
        r
    }
    getPrivateKey(r) {
        return this.keychain.get(r)
    }
    async getClientSeed() {
        let r = "";
        try {
            r = this.keychain.get(_l)
        } catch {
            r = ac(),
            await this.keychain.set(_l, r)
        }
        return gE(r, "base16")
    }
    getSymKey(r) {
        return this.keychain.get(r)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: r} = Q("NOT_INITIALIZED", this.name);
            throw new Error(r)
        }
    }
}
class KE extends Tm {
    constructor(r, t) {
        super(r, t),
        this.logger = r,
        this.core = t,
        this.messages = new Map,
        this.name = xE,
        this.version = IE,
        this.initialized = !1,
        this.storagePrefix = mi,
        this.init = async()=>{
            if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                    const n = await this.getRelayerMessages();
                    typeof n < "u" && (this.messages = n),
                    this.logger.debug(`Successfully Restored records for ${this.name}`),
                    this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size
                    })
                } catch (n) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`),
                    this.logger.error(n)
                } finally {
                    this.initialized = !0
                }
            }
        }
        ,
        this.set = async(n,o)=>{
            this.isInitialized();
            const c = hn(o);
            let l = this.messages.get(n);
            return typeof l > "u" && (l = {}),
            typeof l[c] < "u" || (l[c] = o,
            this.messages.set(n, l),
            await this.persist()),
            c
        }
        ,
        this.get = n=>{
            this.isInitialized();
            let o = this.messages.get(n);
            return typeof o > "u" && (o = {}),
            o
        }
        ,
        this.has = (n,o)=>{
            this.isInitialized();
            const c = this.get(n)
              , l = hn(o);
            return typeof c[l] < "u"
        }
        ,
        this.del = async n=>{
            this.isInitialized(),
            this.messages.delete(n),
            await this.persist()
        }
        ,
        this.logger = Re.generateChildLogger(r, this.name),
        this.core = t
    }
    get context() {
        return Re.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name
    }
    async setRelayerMessages(r) {
        await this.core.storage.setItem(this.storageKey, Zl(r))
    }
    async getRelayerMessages() {
        const r = await this.core.storage.getItem(this.storageKey);
        return typeof r < "u" ? Ql(r) : void 0
    }
    async persist() {
        await this.setRelayerMessages(this.messages)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: r} = Q("NOT_INITIALIZED", this.name);
            throw new Error(r)
        }
    }
}
class GE extends $m {
    constructor(r, t) {
        super(r, t),
        this.relayer = r,
        this.logger = t,
        this.events = new ur,
        this.name = PE,
        this.queue = new Map,
        this.publishTimeout = se.toMiliseconds(se.TEN_SECONDS),
        this.queueTimeout = se.toMiliseconds(se.FIVE_SECONDS),
        this.needsTransportRestart = !1,
        this.publish = async(n,o,c)=>{
            this.logger.debug("Publishing Payload"),
            this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                    topic: n,
                    message: o,
                    opts: c
                }
            });
            try {
                const l = c?.ttl || SE
                  , d = cc(c)
                  , b = c?.prompt || !1
                  , y = c?.tag || 0
                  , O = c?.id || $c().toString()
                  , q = {
                    topic: n,
                    message: o,
                    opts: {
                        ttl: l,
                        relay: d,
                        prompt: b,
                        tag: y,
                        id: O
                    }
                }
                  , C = setTimeout(()=>this.queue.set(O, q), this.queueTimeout);
                try {
                    await await co(this.rpcPublish(n, o, l, d, b, y, O), this.publishTimeout),
                    clearTimeout(C),
                    this.relayer.events.emit(vt.publish, q)
                } catch {
                    this.logger.debug("Publishing Payload stalled"),
                    this.needsTransportRestart = !0;
                    return
                }
                this.logger.debug("Successfully Published Payload"),
                this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        topic: n,
                        message: o,
                        opts: c
                    }
                })
            } catch (l) {
                throw this.logger.debug("Failed to Publish Payload"),
                this.logger.error(l),
                l
            }
        }
        ,
        this.on = (n,o)=>{
            this.events.on(n, o)
        }
        ,
        this.once = (n,o)=>{
            this.events.once(n, o)
        }
        ,
        this.off = (n,o)=>{
            this.events.off(n, o)
        }
        ,
        this.removeListener = (n,o)=>{
            this.events.removeListener(n, o)
        }
        ,
        this.relayer = r,
        this.logger = Re.generateChildLogger(t, this.name),
        this.registerEventListeners()
    }
    get context() {
        return Re.getLoggerContext(this.logger)
    }
    rpcPublish(r, t, n, o, c, l, d) {
        var b, y, O, q;
        const C = {
            method: so(o.protocol).publish,
            params: {
                topic: r,
                message: t,
                ttl: n,
                prompt: c,
                tag: l
            },
            id: d
        };
        return _i((b = C.params) == null ? void 0 : b.prompt) && ((y = C.params) == null || delete y.prompt),
        _i((O = C.params) == null ? void 0 : O.tag) && ((q = C.params) == null || delete q.tag),
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: C
        }),
        this.relayer.request(C)
    }
    onPublish(r) {
        this.queue.delete(r)
    }
    checkQueue() {
        this.queue.forEach(async r=>{
            const {topic: t, message: n, opts: o} = r;
            await this.publish(t, n, o)
        }
        )
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(fn.HEARTBEAT_EVENTS.pulse, ()=>{
            if (this.needsTransportRestart) {
                this.needsTransportRestart = !1,
                this.relayer.events.emit(vt.connection_stalled);
                return
            }
            this.checkQueue()
        }
        ),
        this.relayer.on(vt.message_ack, r=>{
            this.onPublish(r.id.toString())
        }
        )
    }
}
class WE {
    constructor() {
        this.map = new Map,
        this.set = (r,t)=>{
            const n = this.get(r);
            this.exists(r, t) || this.map.set(r, [...n, t])
        }
        ,
        this.get = r=>this.map.get(r) || [],
        this.exists = (r,t)=>this.get(r).includes(t),
        this.delete = (r,t)=>{
            if (typeof t > "u") {
                this.map.delete(r);
                return
            }
            if (!this.map.has(r))
                return;
            const n = this.get(r);
            if (!this.exists(r, t))
                return;
            const o = n.filter(c=>c !== t);
            if (!o.length) {
                this.map.delete(r);
                return
            }
            this.map.set(r, o)
        }
        ,
        this.clear = ()=>{
            this.map.clear()
        }
    }
    get topics() {
        return Array.from(this.map.keys())
    }
}
var JE = Object.defineProperty
  , YE = Object.defineProperties
  , XE = Object.getOwnPropertyDescriptors
  , wl = Object.getOwnPropertySymbols
  , ZE = Object.prototype.hasOwnProperty
  , QE = Object.prototype.propertyIsEnumerable
  , El = (a,r,t)=>r in a ? JE(a, r, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : a[r] = t
  , qn = (a,r)=>{
    for (var t in r || (r = {}))
        ZE.call(r, t) && El(a, t, r[t]);
    if (wl)
        for (var t of wl(r))
            QE.call(r, t) && El(a, t, r[t]);
    return a
}
  , ec = (a,r)=>YE(a, XE(r));
class ex extends Fm {
    constructor(r, t) {
        super(r, t),
        this.relayer = r,
        this.logger = t,
        this.subscriptions = new Map,
        this.topicMap = new WE,
        this.events = new ur,
        this.name = FE,
        this.version = jE,
        this.pending = new Map,
        this.cached = [],
        this.initialized = !1,
        this.pendingSubscriptionWatchLabel = "pending_sub_watch_label",
        this.pollingInterval = 20,
        this.storagePrefix = mi,
        this.subscribeTimeout = 1e4,
        this.restartInProgress = !1,
        this.batchSubscribeTopicsLimit = 500,
        this.init = async()=>{
            this.initialized || (this.logger.trace("Initialized"),
            await this.restart(),
            this.registerEventListeners(),
            this.onEnable(),
            this.clientId = await this.relayer.core.crypto.getClientId())
        }
        ,
        this.subscribe = async(n,o)=>{
            await this.restartToComplete(),
            this.isInitialized(),
            this.logger.debug("Subscribing Topic"),
            this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                    topic: n,
                    opts: o
                }
            });
            try {
                const c = cc(o)
                  , l = {
                    topic: n,
                    relay: c
                };
                this.pending.set(n, l);
                const d = await this.rpcSubscribe(n, c);
                return this.onSubscribe(d, l),
                this.logger.debug("Successfully Subscribed Topic"),
                this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: n,
                        opts: o
                    }
                }),
                d
            } catch (c) {
                throw this.logger.debug("Failed to Subscribe Topic"),
                this.logger.error(c),
                c
            }
        }
        ,
        this.unsubscribe = async(n,o)=>{
            await this.restartToComplete(),
            this.isInitialized(),
            typeof o?.id < "u" ? await this.unsubscribeById(n, o.id, o) : await this.unsubscribeByTopic(n, o)
        }
        ,
        this.isSubscribed = async n=>this.topics.includes(n) ? !0 : await new Promise((o,c)=>{
            const l = new se.Watch;
            l.start(this.pendingSubscriptionWatchLabel);
            const d = setInterval(()=>{
                !this.pending.has(n) && this.topics.includes(n) && (clearInterval(d),
                l.stop(this.pendingSubscriptionWatchLabel),
                o(!0)),
                l.elapsed(this.pendingSubscriptionWatchLabel) >= LE && (clearInterval(d),
                l.stop(this.pendingSubscriptionWatchLabel),
                c(new Error("Subscription resolution timeout")))
            }
            , this.pollingInterval)
        }
        ).catch(()=>!1),
        this.on = (n,o)=>{
            this.events.on(n, o)
        }
        ,
        this.once = (n,o)=>{
            this.events.once(n, o)
        }
        ,
        this.off = (n,o)=>{
            this.events.off(n, o)
        }
        ,
        this.removeListener = (n,o)=>{
            this.events.removeListener(n, o)
        }
        ,
        this.restart = async()=>{
            this.restartInProgress = !0,
            await this.restore(),
            await this.reset(),
            this.restartInProgress = !1
        }
        ,
        this.relayer = r,
        this.logger = Re.generateChildLogger(t, this.name),
        this.clientId = ""
    }
    get context() {
        return Re.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name
    }
    get length() {
        return this.subscriptions.size
    }
    get ids() {
        return Array.from(this.subscriptions.keys())
    }
    get values() {
        return Array.from(this.subscriptions.values())
    }
    get topics() {
        return this.topicMap.topics
    }
    hasSubscription(r, t) {
        let n = !1;
        try {
            n = this.getSubscription(r).topic === t
        } catch {}
        return n
    }
    onEnable() {
        this.cached = [],
        this.initialized = !0
    }
    onDisable() {
        this.cached = this.values,
        this.subscriptions.clear(),
        this.topicMap.clear()
    }
    async unsubscribeByTopic(r, t) {
        const n = this.topicMap.get(r);
        await Promise.all(n.map(async o=>await this.unsubscribeById(r, o, t)))
    }
    async unsubscribeById(r, t, n) {
        this.logger.debug("Unsubscribing Topic"),
        this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
                topic: r,
                id: t,
                opts: n
            }
        });
        try {
            const o = cc(n);
            await this.rpcUnsubscribe(r, t, o);
            const c = er("USER_DISCONNECTED", `${this.name}, ${r}`);
            await this.onUnsubscribe(r, t, c),
            this.logger.debug("Successfully Unsubscribed Topic"),
            this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: r,
                    id: t,
                    opts: n
                }
            })
        } catch (o) {
            throw this.logger.debug("Failed to Unsubscribe Topic"),
            this.logger.error(o),
            o
        }
    }
    async rpcSubscribe(r, t) {
        const n = {
            method: so(t.protocol).subscribe,
            params: {
                topic: r
            }
        };
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: n
        });
        try {
            await await co(this.relayer.request(n), this.subscribeTimeout)
        } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
            this.relayer.events.emit(vt.connection_stalled)
        }
        return hn(r + this.clientId)
    }
    async rpcBatchSubscribe(r) {
        if (!r.length)
            return;
        const t = r[0].relay
          , n = {
            method: so(t.protocol).batchSubscribe,
            params: {
                topics: r.map(o=>o.topic)
            }
        };
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: n
        });
        try {
            return await await co(this.relayer.request(n), this.subscribeTimeout)
        } catch {
            this.logger.debug("Outgoing Relay Payload stalled"),
            this.relayer.events.emit(vt.connection_stalled)
        }
    }
    rpcUnsubscribe(r, t, n) {
        const o = {
            method: so(n.protocol).unsubscribe,
            params: {
                topic: r,
                id: t
            }
        };
        return this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: o
        }),
        this.relayer.request(o)
    }
    onSubscribe(r, t) {
        this.setSubscription(r, ec(qn({}, t), {
            id: r
        })),
        this.pending.delete(t.topic)
    }
    onBatchSubscribe(r) {
        r.length && r.forEach(t=>{
            this.setSubscription(t.id, qn({}, t)),
            this.pending.delete(t.topic)
        }
        )
    }
    async onUnsubscribe(r, t, n) {
        this.events.removeAllListeners(t),
        this.hasSubscription(t, r) && this.deleteSubscription(t, n),
        await this.relayer.messages.del(r)
    }
    async setRelayerSubscriptions(r) {
        await this.relayer.core.storage.setItem(this.storageKey, r)
    }
    async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey)
    }
    setSubscription(r, t) {
        this.subscriptions.has(r) || (this.logger.debug("Setting subscription"),
        this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: r,
            subscription: t
        }),
        this.addSubscription(r, t))
    }
    addSubscription(r, t) {
        this.subscriptions.set(r, qn({}, t)),
        this.topicMap.set(t.topic, r),
        this.events.emit(kr.created, t)
    }
    getSubscription(r) {
        this.logger.debug("Getting subscription"),
        this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: r
        });
        const t = this.subscriptions.get(r);
        if (!t) {
            const {message: n} = Q("NO_MATCHING_KEY", `${this.name}: ${r}`);
            throw new Error(n)
        }
        return t
    }
    deleteSubscription(r, t) {
        this.logger.debug("Deleting subscription"),
        this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: r,
            reason: t
        });
        const n = this.getSubscription(r);
        this.subscriptions.delete(r),
        this.topicMap.delete(n.topic, r),
        this.events.emit(kr.deleted, ec(qn({}, n), {
            reason: t
        }))
    }
    async persist() {
        await this.setRelayerSubscriptions(this.values),
        this.events.emit(kr.sync)
    }
    async reset() {
        if (this.cached.length) {
            const r = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for (let t = 0; t < r; t++) {
                const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                await this.batchSubscribe(n)
            }
        }
        this.events.emit(kr.resubscribed)
    }
    async restore() {
        try {
            const r = await this.getRelayerSubscriptions();
            if (typeof r > "u" || !r.length)
                return;
            if (this.subscriptions.size) {
                const {message: t} = Q("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t),
                this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
                new Error(t)
            }
            this.cached = r,
            this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values
            })
        } catch (r) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
            this.logger.error(r)
        }
    }
    async batchSubscribe(r) {
        if (!r.length)
            return;
        const t = await this.rpcBatchSubscribe(r);
        ln(t) && this.onBatchSubscribe(t.map((n,o)=>ec(qn({}, r[o]), {
            id: n
        })))
    }
    async onConnect() {
        this.restartInProgress || (await this.restart(),
        this.onEnable())
    }
    onDisconnect() {
        this.onDisable()
    }
    async checkPending() {
        if (this.relayer.transportExplicitlyClosed)
            return;
        const r = [];
        this.pending.forEach(t=>{
            r.push(t)
        }
        ),
        await this.batchSubscribe(r)
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(fn.HEARTBEAT_EVENTS.pulse, async()=>{
            await this.checkPending()
        }
        ),
        this.relayer.on(vt.connect, async()=>{
            await this.onConnect()
        }
        ),
        this.relayer.on(vt.disconnect, ()=>{
            this.onDisconnect()
        }
        ),
        this.events.on(kr.created, async r=>{
            const t = kr.created;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: r
            }),
            await this.persist()
        }
        ),
        this.events.on(kr.deleted, async r=>{
            const t = kr.deleted;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: r
            }),
            await this.persist()
        }
        )
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: r} = Q("NOT_INITIALIZED", this.name);
            throw new Error(r)
        }
    }
    async restartToComplete() {
        this.restartInProgress && await new Promise(r=>{
            const t = setInterval(()=>{
                this.restartInProgress || (clearInterval(t),
                r())
            }
            , this.pollingInterval)
        }
        )
    }
}
var tx = Object.defineProperty
  , xl = Object.getOwnPropertySymbols
  , rx = Object.prototype.hasOwnProperty
  , ix = Object.prototype.propertyIsEnumerable
  , Il = (a,r,t)=>r in a ? tx(a, r, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : a[r] = t
  , nx = (a,r)=>{
    for (var t in r || (r = {}))
        rx.call(r, t) && Il(a, t, r[t]);
    if (xl)
        for (var t of xl(r))
            ix.call(r, t) && Il(a, t, r[t]);
    return a
}
;
class sx extends Dm {
    constructor(r) {
        super(r),
        this.protocol = "wc",
        this.version = 2,
        this.events = new ur,
        this.name = AE,
        this.transportExplicitlyClosed = !1,
        this.initialized = !1,
        this.reconnecting = !1,
        this.connectionStatusPollingInterval = 20,
        this.staleConnectionErrors = ["socket hang up", "socket stalled"],
        this.request = async t=>{
            this.logger.debug("Publishing Request Payload");
            try {
                return await this.toEstablishConnection(),
                await this.provider.request(t)
            } catch (n) {
                throw this.logger.debug("Failed to Publish Request"),
                this.logger.error(n),
                n
            }
        }
        ,
        this.core = r.core,
        this.logger = typeof r.logger < "u" && typeof r.logger != "string" ? Re.generateChildLogger(r.logger, this.name) : Re.pino(Re.getDefaultLoggerOptions({
            level: r.logger || OE
        })),
        this.messages = new KE(this.logger,r.core),
        this.subscriber = new ex(this,this.logger),
        this.publisher = new GE(this,this.logger),
        this.relayUrl = r?.relayUrl || Ff,
        this.projectId = r.projectId,
        this.provider = {}
    }
    async init() {
        this.logger.trace("Initialized"),
        await this.createProvider(),
        await Promise.all([this.messages.init(), this.subscriber.init()]);
        try {
            await this.transportOpen()
        } catch {
            this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${ml}...`),
            await this.restartTransport(ml)
        }
        this.registerEventListeners(),
        this.initialized = !0,
        setTimeout(async()=>{
            this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"),
            await this.transportClose(),
            this.transportExplicitlyClosed = !1)
        }
        , $E)
    }
    get context() {
        return Re.getLoggerContext(this.logger)
    }
    get connected() {
        return this.provider.connection.connected
    }
    get connecting() {
        return this.provider.connection.connecting
    }
    async publish(r, t, n) {
        this.isInitialized(),
        await this.publisher.publish(r, t, n),
        await this.recordMessageEvent({
            topic: r,
            message: t,
            publishedAt: Date.now()
        })
    }
    async subscribe(r, t) {
        var n;
        this.isInitialized();
        let o = ((n = this.subscriber.topicMap.get(r)) == null ? void 0 : n[0]) || "";
        return o || (await Promise.all([new Promise(c=>{
            this.subscriber.once(kr.created, l=>{
                l.topic === r && c()
            }
            )
        }
        ), new Promise(async c=>{
            o = await this.subscriber.subscribe(r, t),
            c()
        }
        )]),
        o)
    }
    async unsubscribe(r, t) {
        this.isInitialized(),
        await this.subscriber.unsubscribe(r, t)
    }
    on(r, t) {
        this.events.on(r, t)
    }
    once(r, t) {
        this.events.once(r, t)
    }
    off(r, t) {
        this.events.off(r, t)
    }
    removeListener(r, t) {
        this.events.removeListener(r, t)
    }
    async transportClose() {
        this.transportExplicitlyClosed = !0,
        this.connected && (await this.provider.disconnect(),
        this.events.emit(vt.transport_closed))
    }
    async transportOpen(r) {
        if (this.transportExplicitlyClosed = !1,
        !this.reconnecting) {
            this.relayUrl = r || this.relayUrl,
            this.reconnecting = !0;
            try {
                await Promise.all([new Promise(t=>{
                    this.initialized || t(),
                    this.subscriber.once(kr.resubscribed, ()=>{
                        t()
                    }
                    )
                }
                ), await Promise.race([new Promise(async(t,n)=>{
                    await co(this.provider.connect(), 5e3, `Socket stalled when trying to connect to ${this.relayUrl}`).catch(o=>n(o)).then(()=>t()).finally(()=>this.removeListener(vt.transport_closed, this.rejectTransportOpen))
                }
                ), new Promise(t=>this.once(vt.transport_closed, this.rejectTransportOpen))])])
            } catch (t) {
                this.logger.error(t);
                const n = t;
                if (!this.isConnectionStalled(n.message))
                    throw t;
                this.events.emit(vt.transport_closed)
            } finally {
                this.reconnecting = !1
            }
        }
    }
    async restartTransport(r) {
        this.transportExplicitlyClosed || this.reconnecting || (this.relayUrl = r || this.relayUrl,
        this.connected && await Promise.all([new Promise(t=>{
            this.provider.once(Ln.disconnect, ()=>{
                t()
            }
            )
        }
        ), this.transportClose()]),
        await this.createProvider(),
        await this.transportOpen())
    }
    isConnectionStalled(r) {
        return this.staleConnectionErrors.some(t=>r.includes(t))
    }
    rejectTransportOpen() {
        throw new Error("Attempt to connect to relay via `transportOpen` has stalled. Retrying...")
    }
    async createProvider() {
        const r = await this.core.crypto.signJWT(this.relayUrl);
        this.provider = new bi(new Hb(N_({
            sdkVersion: TE,
            protocol: this.protocol,
            version: this.version,
            relayUrl: this.relayUrl,
            projectId: this.projectId,
            auth: r,
            useOnCloseEvent: !0
        }))),
        this.registerProviderListeners()
    }
    async recordMessageEvent(r) {
        const {topic: t, message: n} = r;
        await this.messages.set(t, n)
    }
    async shouldIgnoreMessageEvent(r) {
        const {topic: t, message: n} = r;
        return await this.subscriber.isSubscribed(t) ? this.messages.has(t, n) : !0
    }
    async onProviderPayload(r) {
        if (this.logger.debug("Incoming Relay Payload"),
        this.logger.trace({
            type: "payload",
            direction: "incoming",
            payload: r
        }),
        Nc(r)) {
            if (!r.method.endsWith(CE))
                return;
            const t = r.params
              , {topic: n, message: o, publishedAt: c} = t.data
              , l = {
                topic: n,
                message: o,
                publishedAt: c
            };
            this.logger.debug("Emitting Relayer Payload"),
            this.logger.trace(nx({
                type: "event",
                event: t.id
            }, l)),
            this.events.emit(t.id, l),
            await this.acknowledgePayload(r),
            await this.onMessageEvent(l)
        } else
            _o(r) && this.events.emit(vt.message_ack, r)
    }
    async onMessageEvent(r) {
        await this.shouldIgnoreMessageEvent(r) || (this.events.emit(vt.message, r),
        await this.recordMessageEvent(r))
    }
    async acknowledgePayload(r) {
        const t = Dc(r.id, !0);
        await this.provider.connection.send(t)
    }
    registerProviderListeners() {
        this.provider.on(Ln.payload, r=>this.onProviderPayload(r)),
        this.provider.on(Ln.connect, ()=>{
            this.events.emit(vt.connect)
        }
        ),
        this.provider.on(Ln.disconnect, ()=>{
            this.onProviderDisconnect()
        }
        ),
        this.provider.on(Ln.error, r=>{
            this.logger.error(r),
            this.events.emit(vt.error, r)
        }
        )
    }
    registerEventListeners() {
        this.events.on(vt.connection_stalled, async()=>{
            await this.restartTransport()
        }
        )
    }
    onProviderDisconnect() {
        this.events.emit(vt.disconnect),
        this.attemptToReconnect()
    }
    attemptToReconnect() {
        this.transportExplicitlyClosed || setTimeout(async()=>{
            await this.restartTransport()
        }
        , se.toMiliseconds(RE))
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: r} = Q("NOT_INITIALIZED", this.name);
            throw new Error(r)
        }
    }
    async toEstablishConnection() {
        if (!this.connected) {
            if (this.connecting)
                return await new Promise(r=>{
                    const t = setInterval(()=>{
                        this.connected && (clearInterval(t),
                        r())
                    }
                    , this.connectionStatusPollingInterval)
                }
                );
            await this.restartTransport()
        }
    }
}
var ox = Object.defineProperty
  , Sl = Object.getOwnPropertySymbols
  , ax = Object.prototype.hasOwnProperty
  , cx = Object.prototype.propertyIsEnumerable
  , Pl = (a,r,t)=>r in a ? ox(a, r, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : a[r] = t
  , Ol = (a,r)=>{
    for (var t in r || (r = {}))
        ax.call(r, t) && Pl(a, t, r[t]);
    if (Sl)
        for (var t of Sl(r))
            cx.call(r, t) && Pl(a, t, r[t]);
    return a
}
;
class bo extends Nm {
    constructor(r, t, n, o=mi, c=void 0) {
        super(r, t, n, o),
        this.core = r,
        this.logger = t,
        this.name = n,
        this.map = new Map,
        this.version = DE,
        this.cached = [],
        this.initialized = !1,
        this.storagePrefix = mi,
        this.init = async()=>{
            this.initialized || (this.logger.trace("Initialized"),
            await this.restore(),
            this.cached.forEach(l=>{
                this.getKey && l !== null && !_i(l) ? this.map.set(this.getKey(l), l) : x_(l) ? this.map.set(l.id, l) : I_(l) && this.map.set(l.topic, l)
            }
            ),
            this.cached = [],
            this.initialized = !0)
        }
        ,
        this.set = async(l,d)=>{
            this.isInitialized(),
            this.map.has(l) ? await this.update(l, d) : (this.logger.debug("Setting value"),
            this.logger.trace({
                type: "method",
                method: "set",
                key: l,
                value: d
            }),
            this.map.set(l, d),
            await this.persist())
        }
        ,
        this.get = l=>(this.isInitialized(),
        this.logger.debug("Getting value"),
        this.logger.trace({
            type: "method",
            method: "get",
            key: l
        }),
        this.getData(l)),
        this.getAll = l=>(this.isInitialized(),
        l ? this.values.filter(d=>Object.keys(l).every(b=>Vb(d[b], l[b]))) : this.values),
        this.update = async(l,d)=>{
            this.isInitialized(),
            this.logger.debug("Updating value"),
            this.logger.trace({
                type: "method",
                method: "update",
                key: l,
                update: d
            });
            const b = Ol(Ol({}, this.getData(l)), d);
            this.map.set(l, b),
            await this.persist()
        }
        ,
        this.delete = async(l,d)=>{
            this.isInitialized(),
            this.map.has(l) && (this.logger.debug("Deleting value"),
            this.logger.trace({
                type: "method",
                method: "delete",
                key: l,
                reason: d
            }),
            this.map.delete(l),
            await this.persist())
        }
        ,
        this.logger = Re.generateChildLogger(t, this.name),
        this.storagePrefix = o,
        this.getKey = c
    }
    get context() {
        return Re.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name
    }
    get length() {
        return this.map.size
    }
    get keys() {
        return Array.from(this.map.keys())
    }
    get values() {
        return Array.from(this.map.values())
    }
    async setDataStore(r) {
        await this.core.storage.setItem(this.storageKey, r)
    }
    async getDataStore() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getData(r) {
        const t = this.map.get(r);
        if (!t) {
            const {message: n} = Q("NO_MATCHING_KEY", `${this.name}: ${r}`);
            throw this.logger.error(n),
            new Error(n)
        }
        return t
    }
    async persist() {
        await this.setDataStore(this.values)
    }
    async restore() {
        try {
            const r = await this.getDataStore();
            if (typeof r > "u" || !r.length)
                return;
            if (this.map.size) {
                const {message: t} = Q("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t),
                new Error(t)
            }
            this.cached = r,
            this.logger.debug(`Successfully Restored value for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values
            })
        } catch (r) {
            this.logger.debug(`Failed to Restore value for ${this.name}`),
            this.logger.error(r)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: r} = Q("NOT_INITIALIZED", this.name);
            throw new Error(r)
        }
    }
}
class ux {
    constructor(r, t) {
        this.core = r,
        this.logger = t,
        this.name = ME,
        this.version = qE,
        this.events = new ur,
        this.initialized = !1,
        this.storagePrefix = mi,
        this.ignoredPayloadTypes = [Jl],
        this.registeredMethods = [],
        this.init = async()=>{
            this.initialized || (await this.pairings.init(),
            await this.cleanup(),
            this.registerRelayerEvents(),
            this.registerExpirerEvents(),
            this.initialized = !0,
            this.logger.trace("Initialized"))
        }
        ,
        this.register = ({methods: n})=>{
            this.isInitialized(),
            this.registeredMethods = [...new Set([...this.registeredMethods, ...n])]
        }
        ,
        this.create = async()=>{
            this.isInitialized();
            const n = ac()
              , o = await this.core.crypto.setSymKey(n)
              , c = Nr(se.FIVE_MINUTES)
              , l = {
                protocol: Nf
            }
              , d = {
                topic: o,
                expiry: c,
                relay: l,
                active: !1
            }
              , b = F_({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: o,
                symKey: n,
                relay: l
            });
            return await this.pairings.set(o, d),
            await this.core.relayer.subscribe(o),
            this.core.expirer.set(o, c),
            {
                topic: o,
                uri: b
            }
        }
        ,
        this.pair = async n=>{
            this.isInitialized(),
            this.isValidPair(n);
            const {topic: o, symKey: c, relay: l} = j_(n.uri);
            if (this.pairings.keys.includes(o))
                throw new Error(`Pairing already exists: ${o}`);
            if (this.core.crypto.hasKeys(o))
                throw new Error(`Keychain already exists: ${o}`);
            const d = Nr(se.FIVE_MINUTES)
              , b = {
                topic: o,
                relay: l,
                expiry: d,
                active: !1
            };
            return await this.pairings.set(o, b),
            await this.core.crypto.setSymKey(c, o),
            await this.core.relayer.subscribe(o, {
                relay: l
            }),
            this.core.expirer.set(o, d),
            n.activatePairing && await this.activate({
                topic: o
            }),
            b
        }
        ,
        this.activate = async({topic: n})=>{
            this.isInitialized();
            const o = Nr(se.THIRTY_DAYS);
            await this.pairings.update(n, {
                active: !0,
                expiry: o
            }),
            this.core.expirer.set(n, o)
        }
        ,
        this.ping = async n=>{
            this.isInitialized(),
            await this.isValidPing(n);
            const {topic: o} = n;
            if (this.pairings.keys.includes(o)) {
                const c = await this.sendRequest(o, "wc_pairingPing", {})
                  , {done: l, resolve: d, reject: b} = an();
                this.events.once(Nt("pairing_ping", c), ({error: y})=>{
                    y ? b(y) : d()
                }
                ),
                await l()
            }
        }
        ,
        this.updateExpiry = async({topic: n, expiry: o})=>{
            this.isInitialized(),
            await this.pairings.update(n, {
                expiry: o
            })
        }
        ,
        this.updateMetadata = async({topic: n, metadata: o})=>{
            this.isInitialized(),
            await this.pairings.update(n, {
                peerMetadata: o
            })
        }
        ,
        this.getPairings = ()=>(this.isInitialized(),
        this.pairings.values),
        this.disconnect = async n=>{
            this.isInitialized(),
            await this.isValidDisconnect(n);
            const {topic: o} = n;
            this.pairings.keys.includes(o) && (await this.sendRequest(o, "wc_pairingDelete", er("USER_DISCONNECTED")),
            await this.deletePairing(o))
        }
        ,
        this.sendRequest = async(n,o,c)=>{
            const l = yo(o, c)
              , d = await this.core.crypto.encode(n, l)
              , b = Mn[o].req;
            return this.core.history.set(n, l),
            this.core.relayer.publish(n, d, b),
            l.id
        }
        ,
        this.sendResult = async(n,o,c)=>{
            const l = Dc(n, c)
              , d = await this.core.crypto.encode(o, l)
              , b = await this.core.history.get(o, n)
              , y = Mn[b.request.method].res;
            await this.core.relayer.publish(o, d, y),
            await this.core.history.resolve(l)
        }
        ,
        this.sendError = async(n,o,c)=>{
            const l = vo(n, c)
              , d = await this.core.crypto.encode(o, l)
              , b = await this.core.history.get(o, n)
              , y = Mn[b.request.method] ? Mn[b.request.method].res : Mn.unregistered_method.res;
            await this.core.relayer.publish(o, d, y),
            await this.core.history.resolve(l)
        }
        ,
        this.deletePairing = async(n,o)=>{
            await this.core.relayer.unsubscribe(n),
            await Promise.all([this.pairings.delete(n, er("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), o ? Promise.resolve() : this.core.expirer.del(n)])
        }
        ,
        this.cleanup = async()=>{
            const n = this.pairings.getAll().filter(o=>vi(o.expiry));
            await Promise.all(n.map(o=>this.deletePairing(o.topic)))
        }
        ,
        this.onRelayEventRequest = n=>{
            const {topic: o, payload: c} = n
              , l = c.method;
            if (this.pairings.keys.includes(o))
                switch (l) {
                case "wc_pairingPing":
                    return this.onPairingPingRequest(o, c);
                case "wc_pairingDelete":
                    return this.onPairingDeleteRequest(o, c);
                default:
                    return this.onUnknownRpcMethodRequest(o, c)
                }
        }
        ,
        this.onRelayEventResponse = async n=>{
            const {topic: o, payload: c} = n
              , l = (await this.core.history.get(o, c.id)).request.method;
            if (this.pairings.keys.includes(o))
                switch (l) {
                case "wc_pairingPing":
                    return this.onPairingPingResponse(o, c);
                default:
                    return this.onUnknownRpcMethodResponse(l)
                }
        }
        ,
        this.onPairingPingRequest = async(n,o)=>{
            const {id: c} = o;
            try {
                this.isValidPing({
                    topic: n
                }),
                await this.sendResult(c, n, !0),
                this.events.emit("pairing_ping", {
                    id: c,
                    topic: n
                })
            } catch (l) {
                await this.sendError(c, n, l),
                this.logger.error(l)
            }
        }
        ,
        this.onPairingPingResponse = (n,o)=>{
            const {id: c} = o;
            setTimeout(()=>{
                si(o) ? this.events.emit(Nt("pairing_ping", c), {}) : Fr(o) && this.events.emit(Nt("pairing_ping", c), {
                    error: o.error
                })
            }
            , 500)
        }
        ,
        this.onPairingDeleteRequest = async(n,o)=>{
            const {id: c} = o;
            try {
                this.isValidDisconnect({
                    topic: n
                }),
                await this.deletePairing(n),
                this.events.emit("pairing_delete", {
                    id: c,
                    topic: n
                })
            } catch (l) {
                await this.sendError(c, n, l),
                this.logger.error(l)
            }
        }
        ,
        this.onUnknownRpcMethodRequest = async(n,o)=>{
            const {id: c, method: l} = o;
            try {
                if (this.registeredMethods.includes(l))
                    return;
                const d = er("WC_METHOD_UNSUPPORTED", l);
                await this.sendError(c, n, d),
                this.logger.error(d)
            } catch (d) {
                await this.sendError(c, n, d),
                this.logger.error(d)
            }
        }
        ,
        this.onUnknownRpcMethodResponse = n=>{
            this.registeredMethods.includes(n) || this.logger.error(er("WC_METHOD_UNSUPPORTED", n))
        }
        ,
        this.isValidPair = n=>{
            if (!ar(n)) {
                const {message: o} = Q("MISSING_OR_INVALID", `pair() params: ${n}`);
                throw new Error(o)
            }
            if (!L_(n.uri)) {
                const {message: o} = Q("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
                throw new Error(o)
            }
        }
        ,
        this.isValidPing = async n=>{
            if (!ar(n)) {
                const {message: c} = Q("MISSING_OR_INVALID", `ping() params: ${n}`);
                throw new Error(c)
            }
            const {topic: o} = n;
            await this.isValidPairingTopic(o)
        }
        ,
        this.isValidDisconnect = async n=>{
            if (!ar(n)) {
                const {message: c} = Q("MISSING_OR_INVALID", `disconnect() params: ${n}`);
                throw new Error(c)
            }
            const {topic: o} = n;
            await this.isValidPairingTopic(o)
        }
        ,
        this.isValidPairingTopic = async n=>{
            if (!cn(n, !1)) {
                const {message: o} = Q("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
                throw new Error(o)
            }
            if (!this.pairings.keys.includes(n)) {
                const {message: o} = Q("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
                throw new Error(o)
            }
            if (vi(this.pairings.get(n).expiry)) {
                await this.deletePairing(n);
                const {message: o} = Q("EXPIRED", `pairing topic: ${n}`);
                throw new Error(o)
            }
        }
        ,
        this.core = r,
        this.logger = Re.generateChildLogger(t, this.name),
        this.pairings = new bo(this.core,this.logger,this.name,this.storagePrefix)
    }
    get context() {
        return Re.getLoggerContext(this.logger)
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: r} = Q("NOT_INITIALIZED", this.name);
            throw new Error(r)
        }
    }
    registerRelayerEvents() {
        this.core.relayer.on(vt.message, async r=>{
            const {topic: t, message: n} = r;
            if (this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))
                return;
            const o = await this.core.crypto.decode(t, n);
            Nc(o) ? (this.core.history.set(t, o),
            this.onRelayEventRequest({
                topic: t,
                payload: o
            })) : _o(o) && (await this.core.history.resolve(o),
            await this.onRelayEventResponse({
                topic: t,
                payload: o
            }),
            this.core.history.delete(t, o.id))
        }
        )
    }
    registerExpirerEvents() {
        this.core.expirer.on(Pr.expired, async r=>{
            const {topic: t} = Yl(r.target);
            t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0),
            this.events.emit("pairing_expire", {
                topic: t
            }))
        }
        )
    }
}
class hx extends Rm {
    constructor(r, t) {
        super(r, t),
        this.core = r,
        this.logger = t,
        this.records = new Map,
        this.events = new ur,
        this.name = zE,
        this.version = UE,
        this.cached = [],
        this.initialized = !1,
        this.storagePrefix = mi,
        this.init = async()=>{
            this.initialized || (this.logger.trace("Initialized"),
            await this.restore(),
            this.cached.forEach(n=>this.records.set(n.id, n)),
            this.cached = [],
            this.registerEventListeners(),
            this.initialized = !0)
        }
        ,
        this.set = (n,o,c)=>{
            if (this.isInitialized(),
            this.logger.debug("Setting JSON-RPC request history record"),
            this.logger.trace({
                type: "method",
                method: "set",
                topic: n,
                request: o,
                chainId: c
            }),
            this.records.has(o.id))
                return;
            const l = {
                id: o.id,
                topic: n,
                request: {
                    method: o.method,
                    params: o.params || null
                },
                chainId: c,
                expiry: Nr(se.THIRTY_DAYS)
            };
            this.records.set(l.id, l),
            this.events.emit(Hr.created, l)
        }
        ,
        this.resolve = async n=>{
            if (this.isInitialized(),
            this.logger.debug("Updating JSON-RPC response history record"),
            this.logger.trace({
                type: "method",
                method: "update",
                response: n
            }),
            !this.records.has(n.id))
                return;
            const o = await this.getRecord(n.id);
            typeof o.response > "u" && (o.response = Fr(n) ? {
                error: n.error
            } : {
                result: n.result
            },
            this.records.set(o.id, o),
            this.events.emit(Hr.updated, o))
        }
        ,
        this.get = async(n,o)=>(this.isInitialized(),
        this.logger.debug("Getting record"),
        this.logger.trace({
            type: "method",
            method: "get",
            topic: n,
            id: o
        }),
        await this.getRecord(o)),
        this.delete = (n,o)=>{
            this.isInitialized(),
            this.logger.debug("Deleting record"),
            this.logger.trace({
                type: "method",
                method: "delete",
                id: o
            }),
            this.values.forEach(c=>{
                if (c.topic === n) {
                    if (typeof o < "u" && c.id !== o)
                        return;
                    this.records.delete(c.id),
                    this.events.emit(Hr.deleted, c)
                }
            }
            )
        }
        ,
        this.exists = async(n,o)=>(this.isInitialized(),
        this.records.has(o) ? (await this.getRecord(o)).topic === n : !1),
        this.on = (n,o)=>{
            this.events.on(n, o)
        }
        ,
        this.once = (n,o)=>{
            this.events.once(n, o)
        }
        ,
        this.off = (n,o)=>{
            this.events.off(n, o)
        }
        ,
        this.removeListener = (n,o)=>{
            this.events.removeListener(n, o)
        }
        ,
        this.logger = Re.generateChildLogger(t, this.name)
    }
    get context() {
        return Re.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name
    }
    get size() {
        return this.records.size
    }
    get keys() {
        return Array.from(this.records.keys())
    }
    get values() {
        return Array.from(this.records.values())
    }
    get pending() {
        const r = [];
        return this.values.forEach(t=>{
            if (typeof t.response < "u")
                return;
            const n = {
                topic: t.topic,
                request: yo(t.request.method, t.request.params, t.id),
                chainId: t.chainId
            };
            return r.push(n)
        }
        ),
        r
    }
    async setJsonRpcRecords(r) {
        await this.core.storage.setItem(this.storageKey, r)
    }
    async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getRecord(r) {
        this.isInitialized();
        const t = this.records.get(r);
        if (!t) {
            const {message: n} = Q("NO_MATCHING_KEY", `${this.name}: ${r}`);
            throw new Error(n)
        }
        return t
    }
    async persist() {
        await this.setJsonRpcRecords(this.values),
        this.events.emit(Hr.sync)
    }
    async restore() {
        try {
            const r = await this.getJsonRpcRecords();
            if (typeof r > "u" || !r.length)
                return;
            if (this.records.size) {
                const {message: t} = Q("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t),
                new Error(t)
            }
            this.cached = r,
            this.logger.debug(`Successfully Restored records for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values
            })
        } catch (r) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
            this.logger.error(r)
        }
    }
    registerEventListeners() {
        this.events.on(Hr.created, r=>{
            const t = Hr.created;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                record: r
            }),
            this.persist()
        }
        ),
        this.events.on(Hr.updated, r=>{
            const t = Hr.updated;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                record: r
            }),
            this.persist()
        }
        ),
        this.events.on(Hr.deleted, r=>{
            const t = Hr.deleted;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                record: r
            }),
            this.persist()
        }
        ),
        this.core.heartbeat.on(fn.HEARTBEAT_EVENTS.pulse, ()=>{
            this.cleanup()
        }
        )
    }
    cleanup() {
        try {
            this.records.forEach(r=>{
                se.toMiliseconds(r.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${r.id}`),
                this.delete(r.topic, r.id))
            }
            )
        } catch (r) {
            this.logger.warn(r)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: r} = Q("NOT_INITIALIZED", this.name);
            throw new Error(r)
        }
    }
}
class lx extends jm {
    constructor(r, t) {
        super(r, t),
        this.core = r,
        this.logger = t,
        this.expirations = new Map,
        this.events = new ur,
        this.name = BE,
        this.version = HE,
        this.cached = [],
        this.initialized = !1,
        this.storagePrefix = mi,
        this.init = async()=>{
            this.initialized || (this.logger.trace("Initialized"),
            await this.restore(),
            this.cached.forEach(n=>this.expirations.set(n.target, n)),
            this.cached = [],
            this.registerEventListeners(),
            this.initialized = !0)
        }
        ,
        this.has = n=>{
            try {
                const o = this.formatTarget(n);
                return typeof this.getExpiration(o) < "u"
            } catch {
                return !1
            }
        }
        ,
        this.set = (n,o)=>{
            this.isInitialized();
            const c = this.formatTarget(n)
              , l = {
                target: c,
                expiry: o
            };
            this.expirations.set(c, l),
            this.checkExpiry(c, l),
            this.events.emit(Pr.created, {
                target: c,
                expiration: l
            })
        }
        ,
        this.get = n=>{
            this.isInitialized();
            const o = this.formatTarget(n);
            return this.getExpiration(o)
        }
        ,
        this.del = n=>{
            if (this.isInitialized(),
            this.has(n)) {
                const o = this.formatTarget(n)
                  , c = this.getExpiration(o);
                this.expirations.delete(o),
                this.events.emit(Pr.deleted, {
                    target: o,
                    expiration: c
                })
            }
        }
        ,
        this.on = (n,o)=>{
            this.events.on(n, o)
        }
        ,
        this.once = (n,o)=>{
            this.events.once(n, o)
        }
        ,
        this.off = (n,o)=>{
            this.events.off(n, o)
        }
        ,
        this.removeListener = (n,o)=>{
            this.events.removeListener(n, o)
        }
        ,
        this.logger = Re.generateChildLogger(t, this.name)
    }
    get context() {
        return Re.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + "//" + this.name
    }
    get length() {
        return this.expirations.size
    }
    get keys() {
        return Array.from(this.expirations.keys())
    }
    get values() {
        return Array.from(this.expirations.values())
    }
    formatTarget(r) {
        if (typeof r == "string")
            return M_(r);
        if (typeof r == "number")
            return q_(r);
        const {message: t} = Q("UNKNOWN_TYPE", `Target type: ${typeof r}`);
        throw new Error(t)
    }
    async setExpirations(r) {
        await this.core.storage.setItem(this.storageKey, r)
    }
    async getExpirations() {
        return await this.core.storage.getItem(this.storageKey)
    }
    async persist() {
        await this.setExpirations(this.values),
        this.events.emit(Pr.sync)
    }
    async restore() {
        try {
            const r = await this.getExpirations();
            if (typeof r > "u" || !r.length)
                return;
            if (this.expirations.size) {
                const {message: t} = Q("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t),
                new Error(t)
            }
            this.cached = r,
            this.logger.debug(`Successfully Restored expirations for ${this.name}`),
            this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values
            })
        } catch (r) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`),
            this.logger.error(r)
        }
    }
    getExpiration(r) {
        const t = this.expirations.get(r);
        if (!t) {
            const {message: n} = Q("NO_MATCHING_KEY", `${this.name}: ${r}`);
            throw this.logger.error(n),
            new Error(n)
        }
        return t
    }
    checkExpiry(r, t) {
        const {expiry: n} = t;
        se.toMiliseconds(n) - Date.now() <= 0 && this.expire(r, t)
    }
    expire(r, t) {
        this.expirations.delete(r),
        this.events.emit(Pr.expired, {
            target: r,
            expiration: t
        })
    }
    checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach((r,t)=>this.checkExpiry(t, r))
    }
    registerEventListeners() {
        this.core.heartbeat.on(fn.HEARTBEAT_EVENTS.pulse, ()=>this.checkExpirations()),
        this.events.on(Pr.created, r=>{
            const t = Pr.created;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: r
            }),
            this.persist()
        }
        ),
        this.events.on(Pr.expired, r=>{
            const t = Pr.expired;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: r
            }),
            this.persist()
        }
        ),
        this.events.on(Pr.deleted, r=>{
            const t = Pr.deleted;
            this.logger.info(`Emitting ${t}`),
            this.logger.debug({
                type: "event",
                event: t,
                data: r
            }),
            this.persist()
        }
        )
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: r} = Q("NOT_INITIALIZED", this.name);
            throw new Error(r)
        }
    }
}
class fx extends Lm {
    constructor(r, t) {
        super(r, t),
        this.projectId = r,
        this.logger = t,
        this.name = Qa,
        this.initialized = !1,
        this.init = async n=>{
            z_() || !Xl() || (this.verifyUrl = n?.verifyUrl || bl,
            await this.createIframe())
        }
        ,
        this.register = async n=>{
            var o;
            if (this.initialized || await this.init(),
            !!this.iframe)
                try {
                    (o = this.iframe.contentWindow) == null || o.postMessage(n.attestationId, this.verifyUrl),
                    this.logger.info(`postMessage sent: ${n.attestationId} ${this.verifyUrl}`)
                } catch {}
        }
        ,
        this.resolve = async n=>{
            var o;
            if (this.isDevEnv)
                return "";
            this.logger.info(`resolving attestation: ${n.attestationId}`);
            const c = this.startAbortTimer(se.FIVE_SECONDS)
              , l = await fetch(`${this.verifyUrl}/attestation/${n.attestationId}`, {
                signal: this.abortController.signal
            });
            return clearTimeout(c),
            l.status === 200 ? (o = await l.json()) == null ? void 0 : o.origin : ""
        }
        ,
        this.createIframe = async()=>{
            try {
                await Promise.race([new Promise((n,o)=>{
                    if (document.getElementById(Qa))
                        return n();
                    const c = document.createElement("iframe");
                    c.setAttribute("id", Qa),
                    c.setAttribute("src", `${this.verifyUrl}/${this.projectId}`),
                    c.style.display = "none",
                    c.addEventListener("load", ()=>{
                        this.initialized = !0,
                        n()
                    }
                    ),
                    c.addEventListener("error", l=>{
                        o(l)
                    }
                    ),
                    document.body.append(c),
                    this.iframe = c
                }
                ), new Promise(n=>{
                    setTimeout(()=>n("iframe load timeout"), se.toMiliseconds(se.ONE_SECOND / 2))
                }
                )])
            } catch (n) {
                this.logger.error(`Verify iframe failed to load: ${this.verifyUrl}`),
                this.logger.error(n)
            }
        }
        ,
        this.logger = Re.generateChildLogger(t, this.name),
        this.verifyUrl = bl,
        this.abortController = new AbortController,
        this.isDevEnv = U_() && process.env.IS_VITEST
    }
    get context() {
        return Re.getLoggerContext(this.logger)
    }
    startAbortTimer(r) {
        return setTimeout(()=>this.abortController.abort(), se.toMiliseconds(r))
    }
}
var px = Object.defineProperty
  , Al = Object.getOwnPropertySymbols
  , dx = Object.prototype.hasOwnProperty
  , gx = Object.prototype.propertyIsEnumerable
  , Cl = (a,r,t)=>r in a ? px(a, r, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : a[r] = t
  , Rl = (a,r)=>{
    for (var t in r || (r = {}))
        dx.call(r, t) && Cl(a, t, r[t]);
    if (Al)
        for (var t of Al(r))
            gx.call(r, t) && Cl(a, t, r[t]);
    return a
}
;
class jc extends Cm {
    constructor(r) {
        super(r),
        this.protocol = Df,
        this.version = yE,
        this.name = Fc,
        this.events = new ur,
        this.initialized = !1,
        this.on = (n,o)=>this.events.on(n, o),
        this.once = (n,o)=>this.events.once(n, o),
        this.off = (n,o)=>this.events.off(n, o),
        this.removeListener = (n,o)=>this.events.removeListener(n, o),
        this.projectId = r?.projectId,
        this.relayUrl = r?.relayUrl || Ff;
        const t = typeof r?.logger < "u" && typeof r?.logger != "string" ? r.logger : Re.pino(Re.getDefaultLoggerOptions({
            level: r?.logger || vE.logger
        }));
        this.logger = Re.generateChildLogger(t, this.name),
        this.heartbeat = new fn.HeartBeat,
        this.crypto = new VE(this,this.logger,r?.keychain),
        this.history = new hx(this,this.logger),
        this.expirer = new lx(this,this.logger),
        this.storage = r != null && r.storage ? r.storage : new D1(Rl(Rl({}, _E), r?.storageOptions)),
        this.relayer = new sx({
            core: this,
            logger: this.logger,
            relayUrl: this.relayUrl,
            projectId: this.projectId
        }),
        this.pairing = new ux(this,this.logger),
        this.verify = new fx(this.projectId || "",this.logger)
    }
    static async init(r) {
        const t = new jc(r);
        await t.initialize();
        const n = await t.crypto.getClientId();
        return await t.storage.setItem(NE, n),
        t
    }
    get context() {
        return Re.getLoggerContext(this.logger)
    }
    async start() {
        this.initialized || await this.initialize()
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.crypto.init(),
            await this.history.init(),
            await this.expirer.init(),
            await this.relayer.init(),
            await this.heartbeat.init(),
            await this.pairing.init(),
            this.initialized = !0,
            this.logger.info("Core Initialization Success")
        } catch (r) {
            throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, r),
            this.logger.error(r.message),
            r
        }
    }
}
const yx = jc
  , jf = "wc"
  , Lf = 2
  , Mf = "client"
  , Lc = `${jf}@${Lf}:${Mf}:`
  , tc = {
    name: Mf,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.com"
}
  , vx = "WALLETCONNECT_DEEPLINK_CHOICE"
  , _x = "proposal"
  , qf = "Proposal expired"
  , mx = "session"
  , ro = se.SEVEN_DAYS
  , bx = "engine"
  , zn = {
    wc_sessionPropose: {
        req: {
            ttl: se.FIVE_MINUTES,
            prompt: !0,
            tag: 1100
        },
        res: {
            ttl: se.FIVE_MINUTES,
            prompt: !1,
            tag: 1101
        }
    },
    wc_sessionSettle: {
        req: {
            ttl: se.FIVE_MINUTES,
            prompt: !1,
            tag: 1102
        },
        res: {
            ttl: se.FIVE_MINUTES,
            prompt: !1,
            tag: 1103
        }
    },
    wc_sessionUpdate: {
        req: {
            ttl: se.ONE_DAY,
            prompt: !1,
            tag: 1104
        },
        res: {
            ttl: se.ONE_DAY,
            prompt: !1,
            tag: 1105
        }
    },
    wc_sessionExtend: {
        req: {
            ttl: se.ONE_DAY,
            prompt: !1,
            tag: 1106
        },
        res: {
            ttl: se.ONE_DAY,
            prompt: !1,
            tag: 1107
        }
    },
    wc_sessionRequest: {
        req: {
            ttl: se.FIVE_MINUTES,
            prompt: !0,
            tag: 1108
        },
        res: {
            ttl: se.FIVE_MINUTES,
            prompt: !1,
            tag: 1109
        }
    },
    wc_sessionEvent: {
        req: {
            ttl: se.FIVE_MINUTES,
            prompt: !0,
            tag: 1110
        },
        res: {
            ttl: se.FIVE_MINUTES,
            prompt: !1,
            tag: 1111
        }
    },
    wc_sessionDelete: {
        req: {
            ttl: se.ONE_DAY,
            prompt: !1,
            tag: 1112
        },
        res: {
            ttl: se.ONE_DAY,
            prompt: !1,
            tag: 1113
        }
    },
    wc_sessionPing: {
        req: {
            ttl: se.THIRTY_SECONDS,
            prompt: !1,
            tag: 1114
        },
        res: {
            ttl: se.THIRTY_SECONDS,
            prompt: !1,
            tag: 1115
        }
    }
}
  , rc = {
    min: se.FIVE_MINUTES,
    max: se.SEVEN_DAYS
}
  , wx = "request"
  , Ex = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var xx = Object.defineProperty
  , Ix = Object.defineProperties
  , Sx = Object.getOwnPropertyDescriptors
  , Tl = Object.getOwnPropertySymbols
  , Px = Object.prototype.hasOwnProperty
  , Ox = Object.prototype.propertyIsEnumerable
  , $l = (a,r,t)=>r in a ? xx(a, r, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : a[r] = t
  , Sr = (a,r)=>{
    for (var t in r || (r = {}))
        Px.call(r, t) && $l(a, t, r[t]);
    if (Tl)
        for (var t of Tl(r))
            Ox.call(r, t) && $l(a, t, r[t]);
    return a
}
  , ic = (a,r)=>Ix(a, Sx(r));
class Ax extends qm {
    constructor(r) {
        super(r),
        this.name = bx,
        this.events = new ur,
        this.initialized = !1,
        this.ignoredPayloadTypes = [Jl],
        this.init = async()=>{
            this.initialized || (await this.cleanup(),
            this.registerRelayerEvents(),
            this.registerExpirerEvents(),
            this.client.core.pairing.register({
                methods: Object.keys(zn)
            }),
            this.initialized = !0)
        }
        ,
        this.connect = async t=>{
            this.isInitialized();
            const n = ic(Sr({}, t), {
                requiredNamespaces: t.requiredNamespaces || {},
                optionalNamespaces: t.optionalNamespaces || {}
            });
            await this.isValidConnect(n);
            const {pairingTopic: o, requiredNamespaces: c, optionalNamespaces: l, sessionProperties: d, relays: b} = n;
            let y = o, O, q = !1;
            if (y && (q = this.client.core.pairing.pairings.get(y).active),
            !y || !q) {
                const {topic: pe, uri: he} = await this.client.core.pairing.create();
                y = pe,
                O = he
            }
            const C = await this.client.core.crypto.generateKeyPair()
              , z = Sr({
                requiredNamespaces: c,
                optionalNamespaces: l,
                relays: b ?? [{
                    protocol: Nf
                }],
                proposer: {
                    publicKey: C,
                    metadata: this.client.metadata
                }
            }, d && {
                sessionProperties: d
            })
              , {reject: F, resolve: K, done: ie} = an(se.FIVE_MINUTES, qf);
            if (this.events.once(Nt("session_connect"), async({error: pe, session: he})=>{
                if (pe)
                    F(pe);
                else if (he) {
                    he.self.publicKey = C;
                    const le = ic(Sr({}, he), {
                        requiredNamespaces: he.requiredNamespaces,
                        optionalNamespaces: he.optionalNamespaces
                    });
                    await this.client.session.set(he.topic, le),
                    await this.setExpiry(he.topic, he.expiry),
                    y && await this.client.core.pairing.updateMetadata({
                        topic: y,
                        metadata: he.peer.metadata
                    }),
                    K(le)
                }
            }
            ),
            !y) {
                const {message: pe} = Q("NO_MATCHING_KEY", `connect() pairing topic: ${y}`);
                throw new Error(pe)
            }
            const Ee = await this.sendRequest(y, "wc_sessionPropose", z)
              , ge = Nr(se.FIVE_MINUTES);
            return await this.setProposal(Ee, Sr({
                id: Ee,
                expiry: ge
            }, z)),
            {
                uri: O,
                approval: ie
            }
        }
        ,
        this.pair = async t=>(this.isInitialized(),
        await this.client.core.pairing.pair(t)),
        this.approve = async t=>{
            this.isInitialized(),
            await this.isValidApprove(t);
            const {id: n, relayProtocol: o, namespaces: c, sessionProperties: l} = t
              , d = this.client.proposal.get(n);
            let {pairingTopic: b, proposer: y, requiredNamespaces: O, optionalNamespaces: q} = d;
            b = b || "",
            oo(O) || (O = H_(c, "approve()"));
            const C = await this.client.core.crypto.generateKeyPair()
              , z = y.publicKey
              , F = await this.client.core.crypto.generateSharedKey(C, z);
            b && n && (await this.client.core.pairing.updateMetadata({
                topic: b,
                metadata: y.metadata
            }),
            await this.sendResult(n, b, {
                relay: {
                    protocol: o ?? "irn"
                },
                responderPublicKey: C
            }),
            await this.client.proposal.delete(n, er("USER_DISCONNECTED")),
            await this.client.core.pairing.activate({
                topic: b
            }));
            const K = Sr({
                relay: {
                    protocol: o ?? "irn"
                },
                namespaces: c,
                requiredNamespaces: O,
                optionalNamespaces: q,
                pairingTopic: b,
                controller: {
                    publicKey: C,
                    metadata: this.client.metadata
                },
                expiry: Nr(ro)
            }, l && {
                sessionProperties: l
            });
            await this.client.core.relayer.subscribe(F),
            await this.sendRequest(F, "wc_sessionSettle", K);
            const ie = ic(Sr({}, K), {
                topic: F,
                pairingTopic: b,
                acknowledged: !1,
                self: K.controller,
                peer: {
                    publicKey: y.publicKey,
                    metadata: y.metadata
                },
                controller: C
            });
            return await this.client.session.set(F, ie),
            await this.setExpiry(F, Nr(ro)),
            {
                topic: F,
                acknowledged: ()=>new Promise(Ee=>setTimeout(()=>Ee(this.client.session.get(F)), 500))
            }
        }
        ,
        this.reject = async t=>{
            this.isInitialized(),
            await this.isValidReject(t);
            const {id: n, reason: o} = t
              , {pairingTopic: c} = this.client.proposal.get(n);
            c && (await this.sendError(n, c, o),
            await this.client.proposal.delete(n, er("USER_DISCONNECTED")))
        }
        ,
        this.update = async t=>{
            this.isInitialized(),
            await this.isValidUpdate(t);
            const {topic: n, namespaces: o} = t
              , c = await this.sendRequest(n, "wc_sessionUpdate", {
                namespaces: o
            })
              , {done: l, resolve: d, reject: b} = an();
            return this.events.once(Nt("session_update", c), ({error: y})=>{
                y ? b(y) : d()
            }
            ),
            await this.client.session.update(n, {
                namespaces: o
            }),
            {
                acknowledged: l
            }
        }
        ,
        this.extend = async t=>{
            this.isInitialized(),
            await this.isValidExtend(t);
            const {topic: n} = t
              , o = await this.sendRequest(n, "wc_sessionExtend", {})
              , {done: c, resolve: l, reject: d} = an();
            return this.events.once(Nt("session_extend", o), ({error: b})=>{
                b ? d(b) : l()
            }
            ),
            await this.setExpiry(n, Nr(ro)),
            {
                acknowledged: c
            }
        }
        ,
        this.request = async t=>{
            this.isInitialized(),
            await this.isValidRequest(t);
            const {chainId: n, request: o, topic: c, expiry: l} = t
              , d = await this.sendRequest(c, "wc_sessionRequest", {
                request: o,
                chainId: n
            }, l)
              , {done: b, resolve: y, reject: O} = an(l);
            this.events.once(Nt("session_request", d), ({error: C, result: z})=>{
                C ? O(C) : y(z)
            }
            ),
            this.client.events.emit("session_request_sent", {
                topic: c,
                request: o,
                chainId: n,
                id: d
            });
            const q = await this.client.core.storage.getItem(vx);
            return k_({
                id: d,
                topic: c,
                wcDeepLink: q
            }),
            await b()
        }
        ,
        this.respond = async t=>{
            this.isInitialized(),
            await this.isValidRespond(t);
            const {topic: n, response: o} = t
              , {id: c} = o;
            si(o) ? await this.sendResult(c, n, o.result) : Fr(o) && await this.sendError(c, n, o.error),
            this.deletePendingSessionRequest(t.response.id, {
                message: "fulfilled",
                code: 0
            })
        }
        ,
        this.ping = async t=>{
            this.isInitialized(),
            await this.isValidPing(t);
            const {topic: n} = t;
            if (this.client.session.keys.includes(n)) {
                const o = await this.sendRequest(n, "wc_sessionPing", {})
                  , {done: c, resolve: l, reject: d} = an();
                this.events.once(Nt("session_ping", o), ({error: b})=>{
                    b ? d(b) : l()
                }
                ),
                await c()
            } else
                this.client.core.pairing.pairings.keys.includes(n) && await this.client.core.pairing.ping({
                    topic: n
                })
        }
        ,
        this.emit = async t=>{
            this.isInitialized(),
            await this.isValidEmit(t);
            const {topic: n, event: o, chainId: c} = t;
            await this.sendRequest(n, "wc_sessionEvent", {
                event: o,
                chainId: c
            })
        }
        ,
        this.disconnect = async t=>{
            this.isInitialized(),
            await this.isValidDisconnect(t);
            const {topic: n} = t;
            if (this.client.session.keys.includes(n)) {
                const o = $c().toString();
                let c;
                const l = d=>{
                    d?.id.toString() === o && (this.client.core.relayer.events.removeListener(vt.message_ack, l),
                    c())
                }
                ;
                await Promise.all([new Promise(d=>{
                    c = d,
                    this.client.core.relayer.on(vt.message_ack, l)
                }
                ), this.sendRequest(n, "wc_sessionDelete", er("USER_DISCONNECTED"), void 0, o)]),
                await this.deleteSession(n)
            } else
                await this.client.core.pairing.disconnect({
                    topic: n
                })
        }
        ,
        this.find = t=>(this.isInitialized(),
        this.client.session.getAll().filter(n=>V_(n, t))),
        this.getPendingSessionRequests = ()=>(this.isInitialized(),
        this.client.pendingRequest.getAll()),
        this.cleanupDuplicatePairings = async t=>{
            if (t.pairingTopic)
                try {
                    const n = this.client.core.pairing.pairings.get(t.pairingTopic)
                      , o = this.client.core.pairing.pairings.getAll().filter(c=>{
                        var l, d;
                        return ((l = c.peerMetadata) == null ? void 0 : l.url) && ((d = c.peerMetadata) == null ? void 0 : d.url) === t.peer.metadata.url && c.topic && c.topic !== n.topic
                    }
                    );
                    if (o.length === 0)
                        return;
                    this.client.logger.info(`Cleaning up ${o.length} duplicate pairing(s)`),
                    await Promise.all(o.map(c=>this.client.core.pairing.disconnect({
                        topic: c.topic
                    }))),
                    this.client.logger.info("Duplicate pairings clean up finished")
                } catch (n) {
                    this.client.logger.error(n)
                }
        }
        ,
        this.deleteSession = async(t,n)=>{
            const {self: o} = this.client.session.get(t);
            await this.client.core.relayer.unsubscribe(t),
            this.client.session.delete(t, er("USER_DISCONNECTED")),
            this.client.core.crypto.keychain.has(o.publicKey) && await this.client.core.crypto.deleteKeyPair(o.publicKey),
            this.client.core.crypto.keychain.has(t) && await this.client.core.crypto.deleteSymKey(t),
            n || this.client.core.expirer.del(t)
        }
        ,
        this.deleteProposal = async(t,n)=>{
            await Promise.all([this.client.proposal.delete(t, er("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(t)])
        }
        ,
        this.deletePendingSessionRequest = async(t,n,o=!1)=>{
            await Promise.all([this.client.pendingRequest.delete(t, n), o ? Promise.resolve() : this.client.core.expirer.del(t)])
        }
        ,
        this.setExpiry = async(t,n)=>{
            this.client.session.keys.includes(t) && await this.client.session.update(t, {
                expiry: n
            }),
            this.client.core.expirer.set(t, n)
        }
        ,
        this.setProposal = async(t,n)=>{
            await this.client.proposal.set(t, n),
            this.client.core.expirer.set(t, n.expiry)
        }
        ,
        this.setPendingSessionRequest = async t=>{
            const n = zn.wc_sessionRequest.req.ttl
              , {id: o, topic: c, params: l} = t;
            await this.client.pendingRequest.set(o, {
                id: o,
                topic: c,
                params: l
            }),
            n && this.client.core.expirer.set(o, Nr(n))
        }
        ,
        this.sendRequest = async(t,n,o,c,l)=>{
            const d = yo(n, o);
            if (Xl() && Ex.includes(n)) {
                const O = hn(JSON.stringify(d));
                await this.client.core.verify.register({
                    attestationId: O
                })
            }
            const b = await this.client.core.crypto.encode(t, d)
              , y = zn[n].req;
            return c && (y.ttl = c),
            l && (y.id = l),
            this.client.core.history.set(t, d),
            this.client.core.relayer.publish(t, b, y),
            d.id
        }
        ,
        this.sendResult = async(t,n,o)=>{
            const c = Dc(t, o)
              , l = await this.client.core.crypto.encode(n, c)
              , d = await this.client.core.history.get(n, t)
              , b = zn[d.request.method].res;
            this.client.core.relayer.publish(n, l, b),
            await this.client.core.history.resolve(c)
        }
        ,
        this.sendError = async(t,n,o)=>{
            const c = vo(t, o)
              , l = await this.client.core.crypto.encode(n, c)
              , d = await this.client.core.history.get(n, t)
              , b = zn[d.request.method].res;
            this.client.core.relayer.publish(n, l, b),
            await this.client.core.history.resolve(c)
        }
        ,
        this.cleanup = async()=>{
            const t = []
              , n = [];
            this.client.session.getAll().forEach(o=>{
                vi(o.expiry) && t.push(o.topic)
            }
            ),
            this.client.proposal.getAll().forEach(o=>{
                vi(o.expiry) && n.push(o.id)
            }
            ),
            await Promise.all([...t.map(o=>this.deleteSession(o)), ...n.map(o=>this.deleteProposal(o))])
        }
        ,
        this.onRelayEventRequest = t=>{
            const {topic: n, payload: o} = t
              , c = o.method;
            switch (c) {
            case "wc_sessionPropose":
                return this.onSessionProposeRequest(n, o);
            case "wc_sessionSettle":
                return this.onSessionSettleRequest(n, o);
            case "wc_sessionUpdate":
                return this.onSessionUpdateRequest(n, o);
            case "wc_sessionExtend":
                return this.onSessionExtendRequest(n, o);
            case "wc_sessionPing":
                return this.onSessionPingRequest(n, o);
            case "wc_sessionDelete":
                return this.onSessionDeleteRequest(n, o);
            case "wc_sessionRequest":
                return this.onSessionRequest(n, o);
            case "wc_sessionEvent":
                return this.onSessionEventRequest(n, o);
            default:
                return this.client.logger.info(`Unsupported request method ${c}`)
            }
        }
        ,
        this.onRelayEventResponse = async t=>{
            const {topic: n, payload: o} = t
              , c = (await this.client.core.history.get(n, o.id)).request.method;
            switch (c) {
            case "wc_sessionPropose":
                return this.onSessionProposeResponse(n, o);
            case "wc_sessionSettle":
                return this.onSessionSettleResponse(n, o);
            case "wc_sessionUpdate":
                return this.onSessionUpdateResponse(n, o);
            case "wc_sessionExtend":
                return this.onSessionExtendResponse(n, o);
            case "wc_sessionPing":
                return this.onSessionPingResponse(n, o);
            case "wc_sessionRequest":
                return this.onSessionRequestResponse(n, o);
            default:
                return this.client.logger.info(`Unsupported response method ${c}`)
            }
        }
        ,
        this.onRelayEventUnknownPayload = t=>{
            const {topic: n} = t
              , {message: o} = Q("MISSING_OR_INVALID", `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`);
            throw new Error(o)
        }
        ,
        this.onSessionProposeRequest = async(t,n)=>{
            const {params: o, id: c} = n;
            try {
                this.isValidConnect(Sr({}, n.params));
                const l = Nr(se.FIVE_MINUTES)
                  , d = Sr({
                    id: c,
                    pairingTopic: t,
                    expiry: l
                }, o);
                await this.setProposal(c, d);
                const b = hn(JSON.stringify(n))
                  , y = await this.getVerifyContext(b, d.proposer.metadata);
                this.client.events.emit("session_proposal", {
                    id: c,
                    params: d,
                    verifyContext: y
                })
            } catch (l) {
                await this.sendError(c, t, l),
                this.client.logger.error(l)
            }
        }
        ,
        this.onSessionProposeResponse = async(t,n)=>{
            const {id: o} = n;
            if (si(n)) {
                const {result: c} = n;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    result: c
                });
                const l = this.client.proposal.get(o);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    proposal: l
                });
                const d = l.proposer.publicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    selfPublicKey: d
                });
                const b = c.responderPublicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    peerPublicKey: b
                });
                const y = await this.client.core.crypto.generateSharedKey(d, b);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    sessionTopic: y
                });
                const O = await this.client.core.relayer.subscribe(y);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    subscriptionId: O
                }),
                await this.client.core.pairing.activate({
                    topic: t
                })
            } else
                Fr(n) && (await this.client.proposal.delete(o, er("USER_DISCONNECTED")),
                this.events.emit(Nt("session_connect"), {
                    error: n.error
                }))
        }
        ,
        this.onSessionSettleRequest = async(t,n)=>{
            const {id: o, params: c} = n;
            try {
                this.isValidSessionSettleRequest(c);
                const {relay: l, controller: d, expiry: b, namespaces: y, requiredNamespaces: O, optionalNamespaces: q, sessionProperties: C, pairingTopic: z} = n.params
                  , F = Sr({
                    topic: t,
                    relay: l,
                    expiry: b,
                    namespaces: y,
                    acknowledged: !0,
                    pairingTopic: z,
                    requiredNamespaces: O,
                    optionalNamespaces: q,
                    controller: d.publicKey,
                    self: {
                        publicKey: "",
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: d.publicKey,
                        metadata: d.metadata
                    }
                }, C && {
                    sessionProperties: C
                });
                await this.sendResult(n.id, t, !0),
                this.events.emit(Nt("session_connect"), {
                    session: F
                }),
                this.cleanupDuplicatePairings(F)
            } catch (l) {
                await this.sendError(o, t, l),
                this.client.logger.error(l)
            }
        }
        ,
        this.onSessionSettleResponse = async(t,n)=>{
            const {id: o} = n;
            si(n) ? (await this.client.session.update(t, {
                acknowledged: !0
            }),
            this.events.emit(Nt("session_approve", o), {})) : Fr(n) && (await this.client.session.delete(t, er("USER_DISCONNECTED")),
            this.events.emit(Nt("session_approve", o), {
                error: n.error
            }))
        }
        ,
        this.onSessionUpdateRequest = async(t,n)=>{
            const {params: o, id: c} = n;
            try {
                this.isValidUpdate(Sr({
                    topic: t
                }, o)),
                await this.client.session.update(t, {
                    namespaces: o.namespaces
                }),
                await this.sendResult(c, t, !0),
                this.client.events.emit("session_update", {
                    id: c,
                    topic: t,
                    params: o
                })
            } catch (l) {
                await this.sendError(c, t, l),
                this.client.logger.error(l)
            }
        }
        ,
        this.onSessionUpdateResponse = (t,n)=>{
            const {id: o} = n;
            si(n) ? this.events.emit(Nt("session_update", o), {}) : Fr(n) && this.events.emit(Nt("session_update", o), {
                error: n.error
            })
        }
        ,
        this.onSessionExtendRequest = async(t,n)=>{
            const {id: o} = n;
            try {
                this.isValidExtend({
                    topic: t
                }),
                await this.setExpiry(t, Nr(ro)),
                await this.sendResult(o, t, !0),
                this.client.events.emit("session_extend", {
                    id: o,
                    topic: t
                })
            } catch (c) {
                await this.sendError(o, t, c),
                this.client.logger.error(c)
            }
        }
        ,
        this.onSessionExtendResponse = (t,n)=>{
            const {id: o} = n;
            si(n) ? this.events.emit(Nt("session_extend", o), {}) : Fr(n) && this.events.emit(Nt("session_extend", o), {
                error: n.error
            })
        }
        ,
        this.onSessionPingRequest = async(t,n)=>{
            const {id: o} = n;
            try {
                this.isValidPing({
                    topic: t
                }),
                await this.sendResult(o, t, !0),
                this.client.events.emit("session_ping", {
                    id: o,
                    topic: t
                })
            } catch (c) {
                await this.sendError(o, t, c),
                this.client.logger.error(c)
            }
        }
        ,
        this.onSessionPingResponse = (t,n)=>{
            const {id: o} = n;
            setTimeout(()=>{
                si(n) ? this.events.emit(Nt("session_ping", o), {}) : Fr(n) && this.events.emit(Nt("session_ping", o), {
                    error: n.error
                })
            }
            , 500)
        }
        ,
        this.onSessionDeleteRequest = async(t,n)=>{
            const {id: o} = n;
            try {
                this.isValidDisconnect({
                    topic: t,
                    reason: n.params
                }),
                await Promise.all([new Promise(c=>{
                    this.client.core.relayer.once(vt.publish, async()=>{
                        c(await this.deleteSession(t))
                    }
                    )
                }
                ), this.sendResult(o, t, !0)]),
                this.client.events.emit("session_delete", {
                    id: o,
                    topic: t
                })
            } catch (c) {
                this.client.logger.error(c)
            }
        }
        ,
        this.onSessionRequest = async(t,n)=>{
            const {id: o, params: c} = n;
            try {
                this.isValidRequest(Sr({
                    topic: t
                }, c)),
                await this.setPendingSessionRequest({
                    id: o,
                    topic: t,
                    params: c
                });
                const l = hn(JSON.stringify(n))
                  , d = this.client.session.get(t)
                  , b = await this.getVerifyContext(l, d.peer.metadata);
                this.client.events.emit("session_request", {
                    id: o,
                    topic: t,
                    params: c,
                    verifyContext: b
                })
            } catch (l) {
                await this.sendError(o, t, l),
                this.client.logger.error(l)
            }
        }
        ,
        this.onSessionRequestResponse = (t,n)=>{
            const {id: o} = n;
            si(n) ? this.events.emit(Nt("session_request", o), {
                result: n.result
            }) : Fr(n) && this.events.emit(Nt("session_request", o), {
                error: n.error
            })
        }
        ,
        this.onSessionEventRequest = async(t,n)=>{
            const {id: o, params: c} = n;
            try {
                this.isValidEmit(Sr({
                    topic: t
                }, c)),
                this.client.events.emit("session_event", {
                    id: o,
                    topic: t,
                    params: c
                })
            } catch (l) {
                await this.sendError(o, t, l),
                this.client.logger.error(l)
            }
        }
        ,
        this.isValidConnect = async t=>{
            if (!ar(t)) {
                const {message: b} = Q("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
                throw new Error(b)
            }
            const {pairingTopic: n, requiredNamespaces: o, optionalNamespaces: c, sessionProperties: l, relays: d} = t;
            if (_i(n) || await this.isValidPairingTopic(n),
            !K_(d, !0)) {
                const {message: b} = Q("MISSING_OR_INVALID", `connect() relays: ${d}`);
                throw new Error(b)
            }
            !_i(o) && oo(o) !== 0 && this.validateNamespaces(o, "requiredNamespaces"),
            !_i(c) && oo(c) !== 0 && this.validateNamespaces(c, "optionalNamespaces"),
            _i(l) || this.validateSessionProps(l, "sessionProperties")
        }
        ,
        this.validateNamespaces = (t,n)=>{
            const o = G_(t, "connect()", n);
            if (o)
                throw new Error(o.message)
        }
        ,
        this.isValidApprove = async t=>{
            if (!ar(t))
                throw new Error(Q("MISSING_OR_INVALID", `approve() params: ${t}`).message);
            const {id: n, namespaces: o, relayProtocol: c, sessionProperties: l} = t;
            await this.isValidProposalId(n);
            const d = this.client.proposal.get(n)
              , b = Va(o, "approve()");
            if (b)
                throw new Error(b.message);
            const y = Uh(d.requiredNamespaces, o, "approve()");
            if (y)
                throw new Error(y.message);
            if (!cn(c, !0)) {
                const {message: O} = Q("MISSING_OR_INVALID", `approve() relayProtocol: ${c}`);
                throw new Error(O)
            }
            _i(l) || this.validateSessionProps(l, "sessionProperties")
        }
        ,
        this.isValidReject = async t=>{
            if (!ar(t)) {
                const {message: c} = Q("MISSING_OR_INVALID", `reject() params: ${t}`);
                throw new Error(c)
            }
            const {id: n, reason: o} = t;
            if (await this.isValidProposalId(n),
            !W_(o)) {
                const {message: c} = Q("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(o)}`);
                throw new Error(c)
            }
        }
        ,
        this.isValidSessionSettleRequest = t=>{
            if (!ar(t)) {
                const {message: y} = Q("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
                throw new Error(y)
            }
            const {relay: n, controller: o, namespaces: c, expiry: l} = t;
            if (!J_(n)) {
                const {message: y} = Q("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                throw new Error(y)
            }
            const d = Y_(o, "onSessionSettleRequest()");
            if (d)
                throw new Error(d.message);
            const b = Va(c, "onSessionSettleRequest()");
            if (b)
                throw new Error(b.message);
            if (vi(l)) {
                const {message: y} = Q("EXPIRED", "onSessionSettleRequest()");
                throw new Error(y)
            }
        }
        ,
        this.isValidUpdate = async t=>{
            if (!ar(t)) {
                const {message: b} = Q("MISSING_OR_INVALID", `update() params: ${t}`);
                throw new Error(b)
            }
            const {topic: n, namespaces: o} = t;
            await this.isValidSessionTopic(n);
            const c = this.client.session.get(n)
              , l = Va(o, "update()");
            if (l)
                throw new Error(l.message);
            const d = Uh(c.requiredNamespaces, o, "update()");
            if (d)
                throw new Error(d.message)
        }
        ,
        this.isValidExtend = async t=>{
            if (!ar(t)) {
                const {message: o} = Q("MISSING_OR_INVALID", `extend() params: ${t}`);
                throw new Error(o)
            }
            const {topic: n} = t;
            await this.isValidSessionTopic(n)
        }
        ,
        this.isValidRequest = async t=>{
            if (!ar(t)) {
                const {message: b} = Q("MISSING_OR_INVALID", `request() params: ${t}`);
                throw new Error(b)
            }
            const {topic: n, request: o, chainId: c, expiry: l} = t;
            await this.isValidSessionTopic(n);
            const {namespaces: d} = this.client.session.get(n);
            if (!Bh(d, c)) {
                const {message: b} = Q("MISSING_OR_INVALID", `request() chainId: ${c}`);
                throw new Error(b)
            }
            if (!X_(o)) {
                const {message: b} = Q("MISSING_OR_INVALID", `request() ${JSON.stringify(o)}`);
                throw new Error(b)
            }
            if (!Z_(d, c, o.method)) {
                const {message: b} = Q("MISSING_OR_INVALID", `request() method: ${o.method}`);
                throw new Error(b)
            }
            if (l && !Q_(l, rc)) {
                const {message: b} = Q("MISSING_OR_INVALID", `request() expiry: ${l}. Expiry must be a number (in seconds) between ${rc.min} and ${rc.max}`);
                throw new Error(b)
            }
        }
        ,
        this.isValidRespond = async t=>{
            if (!ar(t)) {
                const {message: c} = Q("MISSING_OR_INVALID", `respond() params: ${t}`);
                throw new Error(c)
            }
            const {topic: n, response: o} = t;
            if (await this.isValidSessionTopic(n),
            !e1(o)) {
                const {message: c} = Q("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(o)}`);
                throw new Error(c)
            }
        }
        ,
        this.isValidPing = async t=>{
            if (!ar(t)) {
                const {message: o} = Q("MISSING_OR_INVALID", `ping() params: ${t}`);
                throw new Error(o)
            }
            const {topic: n} = t;
            await this.isValidSessionOrPairingTopic(n)
        }
        ,
        this.isValidEmit = async t=>{
            if (!ar(t)) {
                const {message: d} = Q("MISSING_OR_INVALID", `emit() params: ${t}`);
                throw new Error(d)
            }
            const {topic: n, event: o, chainId: c} = t;
            await this.isValidSessionTopic(n);
            const {namespaces: l} = this.client.session.get(n);
            if (!Bh(l, c)) {
                const {message: d} = Q("MISSING_OR_INVALID", `emit() chainId: ${c}`);
                throw new Error(d)
            }
            if (!t1(o)) {
                const {message: d} = Q("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(o)}`);
                throw new Error(d)
            }
            if (!r1(l, c, o.name)) {
                const {message: d} = Q("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(o)}`);
                throw new Error(d)
            }
        }
        ,
        this.isValidDisconnect = async t=>{
            if (!ar(t)) {
                const {message: o} = Q("MISSING_OR_INVALID", `disconnect() params: ${t}`);
                throw new Error(o)
            }
            const {topic: n} = t;
            await this.isValidSessionOrPairingTopic(n)
        }
        ,
        this.getVerifyContext = async(t,n)=>{
            const o = {
                verified: {
                    verifyUrl: n.verifyUrl || "",
                    validation: "UNKNOWN",
                    origin: n.url || ""
                }
            };
            try {
                const c = await this.client.core.verify.resolve({
                    attestationId: t,
                    verifyUrl: n.verifyUrl
                });
                c && (o.verified.origin = c,
                o.verified.validation = c === n.url ? "VALID" : "INVALID")
            } catch (c) {
                this.client.logger.error(c)
            }
            return this.client.logger.info(`Verify context: ${JSON.stringify(o)}`),
            o
        }
        ,
        this.validateSessionProps = (t,n)=>{
            Object.values(t).forEach(o=>{
                if (!cn(o, !1)) {
                    const {message: c} = Q("MISSING_OR_INVALID", `${n} must be in Record<string, string> format. Received: ${JSON.stringify(o)}`);
                    throw new Error(c)
                }
            }
            )
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {message: r} = Q("NOT_INITIALIZED", this.name);
            throw new Error(r)
        }
    }
    registerRelayerEvents() {
        this.client.core.relayer.on(vt.message, async r=>{
            const {topic: t, message: n} = r;
            if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n)))
                return;
            const o = await this.client.core.crypto.decode(t, n);
            Nc(o) ? (this.client.core.history.set(t, o),
            this.onRelayEventRequest({
                topic: t,
                payload: o
            })) : _o(o) ? (await this.client.core.history.resolve(o),
            await this.onRelayEventResponse({
                topic: t,
                payload: o
            }),
            this.client.core.history.delete(t, o.id)) : this.onRelayEventUnknownPayload({
                topic: t,
                payload: o
            })
        }
        )
    }
    registerExpirerEvents() {
        this.client.core.expirer.on(Pr.expired, async r=>{
            const {topic: t, id: n} = Yl(r.target);
            if (n && this.client.pendingRequest.keys.includes(n))
                return await this.deletePendingSessionRequest(n, Q("EXPIRED"), !0);
            t ? this.client.session.keys.includes(t) && (await this.deleteSession(t, !0),
            this.client.events.emit("session_expire", {
                topic: t
            })) : n && (await this.deleteProposal(n, !0),
            this.client.events.emit("proposal_expire", {
                id: n
            }))
        }
        )
    }
    isValidPairingTopic(r) {
        if (!cn(r, !1)) {
            const {message: t} = Q("MISSING_OR_INVALID", `pairing topic should be a string: ${r}`);
            throw new Error(t)
        }
        if (!this.client.core.pairing.pairings.keys.includes(r)) {
            const {message: t} = Q("NO_MATCHING_KEY", `pairing topic doesn't exist: ${r}`);
            throw new Error(t)
        }
        if (vi(this.client.core.pairing.pairings.get(r).expiry)) {
            const {message: t} = Q("EXPIRED", `pairing topic: ${r}`);
            throw new Error(t)
        }
    }
    async isValidSessionTopic(r) {
        if (!cn(r, !1)) {
            const {message: t} = Q("MISSING_OR_INVALID", `session topic should be a string: ${r}`);
            throw new Error(t)
        }
        if (!this.client.session.keys.includes(r)) {
            const {message: t} = Q("NO_MATCHING_KEY", `session topic doesn't exist: ${r}`);
            throw new Error(t)
        }
        if (vi(this.client.session.get(r).expiry)) {
            await this.deleteSession(r);
            const {message: t} = Q("EXPIRED", `session topic: ${r}`);
            throw new Error(t)
        }
    }
    async isValidSessionOrPairingTopic(r) {
        if (this.client.session.keys.includes(r))
            await this.isValidSessionTopic(r);
        else if (this.client.core.pairing.pairings.keys.includes(r))
            this.isValidPairingTopic(r);
        else if (cn(r, !1)) {
            const {message: t} = Q("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${r}`);
            throw new Error(t)
        } else {
            const {message: t} = Q("MISSING_OR_INVALID", `session or pairing topic should be a string: ${r}`);
            throw new Error(t)
        }
    }
    async isValidProposalId(r) {
        if (!i1(r)) {
            const {message: t} = Q("MISSING_OR_INVALID", `proposal id should be a number: ${r}`);
            throw new Error(t)
        }
        if (!this.client.proposal.keys.includes(r)) {
            const {message: t} = Q("NO_MATCHING_KEY", `proposal id doesn't exist: ${r}`);
            throw new Error(t)
        }
        if (vi(this.client.proposal.get(r).expiry)) {
            await this.deleteProposal(r);
            const {message: t} = Q("EXPIRED", `proposal id: ${r}`);
            throw new Error(t)
        }
    }
}
class Cx extends bo {
    constructor(r, t) {
        super(r, t, _x, Lc),
        this.core = r,
        this.logger = t
    }
}
class Rx extends bo {
    constructor(r, t) {
        super(r, t, mx, Lc),
        this.core = r,
        this.logger = t
    }
}
class Tx extends bo {
    constructor(r, t) {
        super(r, t, wx, Lc, n=>n.id),
        this.core = r,
        this.logger = t
    }
}
let $x = class zf extends Mm {
    constructor(r) {
        super(r),
        this.protocol = jf,
        this.version = Lf,
        this.name = tc.name,
        this.events = new ur,
        this.on = (n,o)=>this.events.on(n, o),
        this.once = (n,o)=>this.events.once(n, o),
        this.off = (n,o)=>this.events.off(n, o),
        this.removeListener = (n,o)=>this.events.removeListener(n, o),
        this.removeAllListeners = n=>this.events.removeAllListeners(n),
        this.connect = async n=>{
            try {
                return await this.engine.connect(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.pair = async n=>{
            try {
                return await this.engine.pair(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.approve = async n=>{
            try {
                return await this.engine.approve(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.reject = async n=>{
            try {
                return await this.engine.reject(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.update = async n=>{
            try {
                return await this.engine.update(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.extend = async n=>{
            try {
                return await this.engine.extend(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.request = async n=>{
            try {
                return await this.engine.request(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.respond = async n=>{
            try {
                return await this.engine.respond(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.ping = async n=>{
            try {
                return await this.engine.ping(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.emit = async n=>{
            try {
                return await this.engine.emit(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.disconnect = async n=>{
            try {
                return await this.engine.disconnect(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.find = n=>{
            try {
                return this.engine.find(n)
            } catch (o) {
                throw this.logger.error(o.message),
                o
            }
        }
        ,
        this.getPendingSessionRequests = ()=>{
            try {
                return this.engine.getPendingSessionRequests()
            } catch (n) {
                throw this.logger.error(n.message),
                n
            }
        }
        ,
        this.name = r?.name || tc.name,
        this.metadata = r?.metadata || B_();
        const t = typeof r?.logger < "u" && typeof r?.logger != "string" ? r.logger : Re.pino(Re.getDefaultLoggerOptions({
            level: r?.logger || tc.logger
        }));
        this.core = r?.core || new yx(r),
        this.logger = Re.generateChildLogger(t, this.name),
        this.session = new Rx(this.core,this.logger),
        this.proposal = new Cx(this.core,this.logger),
        this.pendingRequest = new Tx(this.core,this.logger),
        this.engine = new Ax(this)
    }
    static async init(r) {
        const t = new zf(r);
        return await t.initialize(),
        t
    }
    get context() {
        return Re.getLoggerContext(this.logger)
    }
    get pairing() {
        return this.core.pairing.pairings
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.core.start(),
            await this.session.init(),
            await this.proposal.init(),
            await this.pendingRequest.init(),
            await this.engine.init(),
            this.core.verify.init({
                verifyUrl: this.metadata.verifyUrl
            }),
            this.logger.info("SignClient Initialization Success")
        } catch (r) {
            throw this.logger.info("SignClient Initialization Failure"),
            this.logger.error(r.message),
            r
        }
    }
}
;
var xc = {
    exports: {}
};
(function(a, r) {
    var t = typeof self < "u" ? self : cr
      , n = function() {
        function c() {
            this.fetch = !1,
            this.DOMException = t.DOMException
        }
        return c.prototype = t,
        new c
    }();
    (function(c) {
        (function(l) {
            var d = {
                searchParams: "URLSearchParams"in c,
                iterable: "Symbol"in c && "iterator"in Symbol,
                blob: "FileReader"in c && "Blob"in c && function() {
                    try {
                        return new Blob,
                        !0
                    } catch {
                        return !1
                    }
                }(),
                formData: "FormData"in c,
                arrayBuffer: "ArrayBuffer"in c
            };
            function b(_) {
                return _ && DataView.prototype.isPrototypeOf(_)
            }
            if (d.arrayBuffer)
                var y = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                  , O = ArrayBuffer.isView || function(_) {
                    return _ && y.indexOf(Object.prototype.toString.call(_)) > -1
                }
                ;
            function q(_) {
                if (typeof _ != "string" && (_ = String(_)),
                /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(_))
                    throw new TypeError("Invalid character in header field name");
                return _.toLowerCase()
            }
            function C(_) {
                return typeof _ != "string" && (_ = String(_)),
                _
            }
            function z(_) {
                var x = {
                    next: function() {
                        var X = _.shift();
                        return {
                            done: X === void 0,
                            value: X
                        }
                    }
                };
                return d.iterable && (x[Symbol.iterator] = function() {
                    return x
                }
                ),
                x
            }
            function F(_) {
                this.map = {},
                _ instanceof F ? _.forEach(function(x, X) {
                    this.append(X, x)
                }, this) : Array.isArray(_) ? _.forEach(function(x) {
                    this.append(x[0], x[1])
                }, this) : _ && Object.getOwnPropertyNames(_).forEach(function(x) {
                    this.append(x, _[x])
                }, this)
            }
            F.prototype.append = function(_, x) {
                _ = q(_),
                x = C(x);
                var X = this.map[_];
                this.map[_] = X ? X + ", " + x : x
            }
            ,
            F.prototype.delete = function(_) {
                delete this.map[q(_)]
            }
            ,
            F.prototype.get = function(_) {
                return _ = q(_),
                this.has(_) ? this.map[_] : null
            }
            ,
            F.prototype.has = function(_) {
                return this.map.hasOwnProperty(q(_))
            }
            ,
            F.prototype.set = function(_, x) {
                this.map[q(_)] = C(x)
            }
            ,
            F.prototype.forEach = function(_, x) {
                for (var X in this.map)
                    this.map.hasOwnProperty(X) && _.call(x, this.map[X], X, this)
            }
            ,
            F.prototype.keys = function() {
                var _ = [];
                return this.forEach(function(x, X) {
                    _.push(X)
                }),
                z(_)
            }
            ,
            F.prototype.values = function() {
                var _ = [];
                return this.forEach(function(x) {
                    _.push(x)
                }),
                z(_)
            }
            ,
            F.prototype.entries = function() {
                var _ = [];
                return this.forEach(function(x, X) {
                    _.push([X, x])
                }),
                z(_)
            }
            ,
            d.iterable && (F.prototype[Symbol.iterator] = F.prototype.entries);
            function K(_) {
                if (_.bodyUsed)
                    return Promise.reject(new TypeError("Already read"));
                _.bodyUsed = !0
            }
            function ie(_) {
                return new Promise(function(x, X) {
                    _.onload = function() {
                        x(_.result)
                    }
                    ,
                    _.onerror = function() {
                        X(_.error)
                    }
                }
                )
            }
            function Ee(_) {
                var x = new FileReader
                  , X = ie(x);
                return x.readAsArrayBuffer(_),
                X
            }
            function ge(_) {
                var x = new FileReader
                  , X = ie(x);
                return x.readAsText(_),
                X
            }
            function pe(_) {
                for (var x = new Uint8Array(_), X = new Array(x.length), ce = 0; ce < x.length; ce++)
                    X[ce] = String.fromCharCode(x[ce]);
                return X.join("")
            }
            function he(_) {
                if (_.slice)
                    return _.slice(0);
                var x = new Uint8Array(_.byteLength);
                return x.set(new Uint8Array(_)),
                x.buffer
            }
            function le() {
                return this.bodyUsed = !1,
                this._initBody = function(_) {
                    this._bodyInit = _,
                    _ ? typeof _ == "string" ? this._bodyText = _ : d.blob && Blob.prototype.isPrototypeOf(_) ? this._bodyBlob = _ : d.formData && FormData.prototype.isPrototypeOf(_) ? this._bodyFormData = _ : d.searchParams && URLSearchParams.prototype.isPrototypeOf(_) ? this._bodyText = _.toString() : d.arrayBuffer && d.blob && b(_) ? (this._bodyArrayBuffer = he(_.buffer),
                    this._bodyInit = new Blob([this._bodyArrayBuffer])) : d.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(_) || O(_)) ? this._bodyArrayBuffer = he(_) : this._bodyText = _ = Object.prototype.toString.call(_) : this._bodyText = "",
                    this.headers.get("content-type") || (typeof _ == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : d.searchParams && URLSearchParams.prototype.isPrototypeOf(_) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }
                ,
                d.blob && (this.blob = function() {
                    var _ = K(this);
                    if (_)
                        return _;
                    if (this._bodyBlob)
                        return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }
                ,
                this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? K(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(Ee)
                }
                ),
                this.text = function() {
                    var _ = K(this);
                    if (_)
                        return _;
                    if (this._bodyBlob)
                        return ge(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(pe(this._bodyArrayBuffer));
                    if (this._bodyFormData)
                        throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }
                ,
                d.formData && (this.formData = function() {
                    return this.text().then(ye)
                }
                ),
                this.json = function() {
                    return this.text().then(JSON.parse)
                }
                ,
                this
            }
            var D = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            function U(_) {
                var x = _.toUpperCase();
                return D.indexOf(x) > -1 ? x : _
            }
            function W(_, x) {
                x = x || {};
                var X = x.body;
                if (_ instanceof W) {
                    if (_.bodyUsed)
                        throw new TypeError("Already read");
                    this.url = _.url,
                    this.credentials = _.credentials,
                    x.headers || (this.headers = new F(_.headers)),
                    this.method = _.method,
                    this.mode = _.mode,
                    this.signal = _.signal,
                    !X && _._bodyInit != null && (X = _._bodyInit,
                    _.bodyUsed = !0)
                } else
                    this.url = String(_);
                if (this.credentials = x.credentials || this.credentials || "same-origin",
                (x.headers || !this.headers) && (this.headers = new F(x.headers)),
                this.method = U(x.method || this.method || "GET"),
                this.mode = x.mode || this.mode || null,
                this.signal = x.signal || this.signal,
                this.referrer = null,
                (this.method === "GET" || this.method === "HEAD") && X)
                    throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(X)
            }
            W.prototype.clone = function() {
                return new W(this,{
                    body: this._bodyInit
                })
            }
            ;
            function ye(_) {
                var x = new FormData;
                return _.trim().split("&").forEach(function(X) {
                    if (X) {
                        var ce = X.split("=")
                          , V = ce.shift().replace(/\+/g, " ")
                          , B = ce.join("=").replace(/\+/g, " ");
                        x.append(decodeURIComponent(V), decodeURIComponent(B))
                    }
                }),
                x
            }
            function re(_) {
                var x = new F
                  , X = _.replace(/\r?\n[\t ]+/g, " ");
                return X.split(/\r?\n/).forEach(function(ce) {
                    var V = ce.split(":")
                      , B = V.shift().trim();
                    if (B) {
                        var k = V.join(":").trim();
                        x.append(B, k)
                    }
                }),
                x
            }
            le.call(W.prototype);
            function ue(_, x) {
                x || (x = {}),
                this.type = "default",
                this.status = x.status === void 0 ? 200 : x.status,
                this.ok = this.status >= 200 && this.status < 300,
                this.statusText = "statusText"in x ? x.statusText : "OK",
                this.headers = new F(x.headers),
                this.url = x.url || "",
                this._initBody(_)
            }
            le.call(ue.prototype),
            ue.prototype.clone = function() {
                return new ue(this._bodyInit,{
                    status: this.status,
                    statusText: this.statusText,
                    headers: new F(this.headers),
                    url: this.url
                })
            }
            ,
            ue.error = function() {
                var _ = new ue(null,{
                    status: 0,
                    statusText: ""
                });
                return _.type = "error",
                _
            }
            ;
            var Te = [301, 302, 303, 307, 308];
            ue.redirect = function(_, x) {
                if (Te.indexOf(x) === -1)
                    throw new RangeError("Invalid status code");
                return new ue(null,{
                    status: x,
                    headers: {
                        location: _
                    }
                })
            }
            ,
            l.DOMException = c.DOMException;
            try {
                new l.DOMException
            } catch {
                l.DOMException = function(x, X) {
                    this.message = x,
                    this.name = X;
                    var ce = Error(x);
                    this.stack = ce.stack
                }
                ,
                l.DOMException.prototype = Object.create(Error.prototype),
                l.DOMException.prototype.constructor = l.DOMException
            }
            function ze(_, x) {
                return new Promise(function(X, ce) {
                    var V = new W(_,x);
                    if (V.signal && V.signal.aborted)
                        return ce(new l.DOMException("Aborted","AbortError"));
                    var B = new XMLHttpRequest;
                    function k() {
                        B.abort()
                    }
                    B.onload = function() {
                        var G = {
                            status: B.status,
                            statusText: B.statusText,
                            headers: re(B.getAllResponseHeaders() || "")
                        };
                        G.url = "responseURL"in B ? B.responseURL : G.headers.get("X-Request-URL");
                        var Je = "response"in B ? B.response : B.responseText;
                        X(new ue(Je,G))
                    }
                    ,
                    B.onerror = function() {
                        ce(new TypeError("Network request failed"))
                    }
                    ,
                    B.ontimeout = function() {
                        ce(new TypeError("Network request failed"))
                    }
                    ,
                    B.onabort = function() {
                        ce(new l.DOMException("Aborted","AbortError"))
                    }
                    ,
                    B.open(V.method, V.url, !0),
                    V.credentials === "include" ? B.withCredentials = !0 : V.credentials === "omit" && (B.withCredentials = !1),
                    "responseType"in B && d.blob && (B.responseType = "blob"),
                    V.headers.forEach(function(G, Je) {
                        B.setRequestHeader(Je, G)
                    }),
                    V.signal && (V.signal.addEventListener("abort", k),
                    B.onreadystatechange = function() {
                        B.readyState === 4 && V.signal.removeEventListener("abort", k)
                    }
                    ),
                    B.send(typeof V._bodyInit > "u" ? null : V._bodyInit)
                }
                )
            }
            return ze.polyfill = !0,
            c.fetch || (c.fetch = ze,
            c.Headers = F,
            c.Request = W,
            c.Response = ue),
            l.Headers = F,
            l.Request = W,
            l.Response = ue,
            l.fetch = ze,
            Object.defineProperty(l, "__esModule", {
                value: !0
            }),
            l
        }
        )({})
    }
    )(n),
    n.fetch.ponyfill = !0,
    delete n.fetch.polyfill;
    var o = n;
    r = o.fetch,
    r.default = o.fetch,
    r.fetch = o.fetch,
    r.Headers = o.Headers,
    r.Request = o.Request,
    r.Response = o.Response,
    a.exports = r
}
)(xc, xc.exports);
var Dx = xc.exports
  , Dl = Wl(Dx);
const Nx = {
    Accept: "application/json",
    "Content-Type": "application/json"
}
  , Fx = "POST"
  , Nl = {
    headers: Nx,
    method: Fx
}
  , Fl = 10;
class qi {
    constructor(r, t=!1) {
        if (this.url = r,
        this.disableProviderPing = t,
        this.events = new ur,
        this.isAvailable = !1,
        this.registering = !1,
        !cl(r))
            throw new Error(`Provided URL is not compatible with HTTP connection: ${r}`);
        this.url = r,
        this.disableProviderPing = t
    }
    get connected() {
        return this.isAvailable
    }
    get connecting() {
        return this.registering
    }
    on(r, t) {
        this.events.on(r, t)
    }
    once(r, t) {
        this.events.once(r, t)
    }
    off(r, t) {
        this.events.off(r, t)
    }
    removeListener(r, t) {
        this.events.removeListener(r, t)
    }
    async open(r=this.url) {
        await this.register(r)
    }
    async close() {
        if (!this.isAvailable)
            throw new Error("Connection already closed");
        this.onClose()
    }
    async send(r, t) {
        this.isAvailable || await this.register();
        try {
            const n = Gn(r)
              , c = await (await Dl(this.url, Object.assign(Object.assign({}, Nl), {
                body: n
            }))).json();
            this.onPayload({
                data: c
            })
        } catch (n) {
            this.onError(r.id, n)
        }
    }
    async register(r=this.url) {
        if (!cl(r))
            throw new Error(`Provided URL is not compatible with HTTP connection: ${r}`);
        if (this.registering) {
            const t = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1),
            new Promise((n,o)=>{
                this.events.once("register_error", c=>{
                    this.resetMaxListeners(),
                    o(c)
                }
                ),
                this.events.once("open", ()=>{
                    if (this.resetMaxListeners(),
                    typeof this.isAvailable > "u")
                        return o(new Error("HTTP connection is missing or invalid"));
                    n()
                }
                )
            }
            )
        }
        this.url = r,
        this.registering = !0;
        try {
            if (!this.disableProviderPing) {
                const t = Gn({
                    id: 1,
                    jsonrpc: "2.0",
                    method: "test",
                    params: []
                });
                await Dl(r, Object.assign(Object.assign({}, Nl), {
                    body: t
                }))
            }
            this.onOpen()
        } catch (t) {
            const n = this.parseError(t);
            throw this.events.emit("register_error", n),
            this.onClose(),
            n
        }
    }
    onOpen() {
        this.isAvailable = !0,
        this.registering = !1,
        this.events.emit("open")
    }
    onClose() {
        this.isAvailable = !1,
        this.registering = !1,
        this.events.emit("close")
    }
    onPayload(r) {
        if (typeof r.data > "u")
            return;
        const t = typeof r.data == "string" ? Cc(r.data) : r.data;
        this.events.emit("payload", t)
    }
    onError(r, t) {
        const n = this.parseError(t)
          , o = n.message || n.toString()
          , c = vo(r, o);
        this.events.emit("payload", c)
    }
    parseError(r, t=this.url) {
        return yf(r, t, "HTTP")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > Fl && this.events.setMaxListeners(Fl)
    }
}
const jl = "error"
  , jx = "wss://relay.walletconnect.com"
  , Lx = "wc"
  , Mx = "universal_provider"
  , Ll = `${Lx}@2:${Mx}:`
  , qx = "https://rpc.walletconnect.com/v1"
  , wi = {
    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
};
var Un = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , Ic = {
    exports: {}
};
/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
(function(a, r) {
    (function() {
        var t, n = "4.17.21", o = 200, c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", d = "Invalid `variable` option passed into `_.template`", b = "__lodash_hash_undefined__", y = 500, O = "__lodash_placeholder__", q = 1, C = 2, z = 4, F = 1, K = 2, ie = 1, Ee = 2, ge = 4, pe = 8, he = 16, le = 32, D = 64, U = 128, W = 256, ye = 512, re = 30, ue = "...", Te = 800, ze = 16, _ = 1, x = 2, X = 3, ce = 1 / 0, V = 9007199254740991, B = 17976931348623157e292, k = 0 / 0, G = 4294967295, Je = G - 1, He = G >>> 1, jr = [["ary", U], ["bind", ie], ["bindKey", Ee], ["curry", pe], ["curryRight", he], ["flip", ye], ["partial", le], ["partialRight", D], ["rearg", W]], xe = "[object Arguments]", It = "[object Array]", $ = "[object AsyncFunction]", T = "[object Boolean]", A = "[object Date]", h = "[object DOMException]", E = "[object Error]", ee = "[object Function]", fe = "[object GeneratorFunction]", be = "[object Map]", $e = "[object Number]", Ne = "[object Null]", Pe = "[object Object]", St = "[object Promise]", _t = "[object Proxy]", st = "[object RegExp]", je = "[object Set]", Xe = "[object String]", Ze = "[object Symbol]", ot = "[object Undefined]", Ue = "[object WeakMap]", Qe = "[object WeakSet]", De = "[object ArrayBuffer]", ke = "[object DataView]", ut = "[object Float32Array]", Me = "[object Float64Array]", Pt = "[object Int8Array]", Ft = "[object Int16Array]", Ut = "[object Int32Array]", Bt = "[object Uint8Array]", Mt = "[object Uint8ClampedArray]", Gt = "[object Uint16Array]", tr = "[object Uint32Array]", Lr = /\b__p \+= '';/g, Wt = /\b(__p \+=) '' \+/g, Vr = /(__e\(.*?\)|\b__t\)) \+\n'';/g, oi = /&(?:amp|lt|gt|quot|#39);/g, Ei = /[&<>"']/g, ht = RegExp(oi.source), rt = RegExp(Ei.source), lt = /<%-([\s\S]+?)%>/g, ft = /<%([\s\S]+?)%>/g, at = /<%=([\s\S]+?)%>/g, it = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ot = /^\w*$/, At = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, pt = /[\\^$.*+?()[\]{}|]/g, Ct = RegExp(pt.source), dt = /^\s+/, mt = /\s/, gt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ye = /\{\n\/\* \[wrapped with (.+)\] \*/, Rt = /,? & /, Tt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, wo = /[()=,{}\[\]\/\s]/, Eo = /\\(\\)?/g, xo = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, yr = /\w*$/, Io = /^[-+]0x[0-9a-f]+$/i, So = /^0b[01]+$/i, Po = /^\[object .+?Constructor\]$/, Oo = /^0o[0-7]+$/i, Ao = /^(?:0|[1-9]\d*)$/, Kr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, zi = /($^)/, Co = /['\n\r\u2028\u2029\\]/g, Ui = "\\ud800-\\udfff", Ro = "\\u0300-\\u036f", To = "\\ufe20-\\ufe2f", Bi = "\\u20d0-\\u20ff", Zn = Ro + To + Bi, Qn = "\\u2700-\\u27bf", Ar = "a-z\\xdf-\\xf6\\xf8-\\xff", $o = "\\xac\\xb1\\xd7\\xf7", Do = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", No = "\\u2000-\\u206f", Fo = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", es = "A-Z\\xc0-\\xd6\\xd8-\\xde", ts = "\\ufe0e\\ufe0f", xi = $o + Do + No + Fo, pn = "['\u2019]", Ii = "[" + Ui + "]", dn = "[" + xi + "]", Si = "[" + Zn + "]", rs = "\\d+", jo = "[" + Qn + "]", is = "[" + Ar + "]", ns = "[^" + Ui + xi + rs + Qn + Ar + es + "]", Hi = "\\ud83c[\\udffb-\\udfff]", Lo = "(?:" + Si + "|" + Hi + ")", ss = "[^" + Ui + "]", ki = "(?:\\ud83c[\\udde6-\\uddff]){2}", ai = "[\\ud800-\\udbff][\\udc00-\\udfff]", hr = "[" + es + "]", os = "\\u200d", as = "(?:" + is + "|" + ns + ")", Mr = "(?:" + hr + "|" + ns + ")", cs = "(?:" + pn + "(?:d|ll|m|re|s|t|ve))?", us = "(?:" + pn + "(?:D|LL|M|RE|S|T|VE))?", hs = Lo + "?", ls = "[" + ts + "]?", Mo = "(?:" + os + "(?:" + [ss, ki, ai].join("|") + ")" + ls + hs + ")*", Gr = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", fs = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ps = ls + hs + Mo, Vi = "(?:" + [jo, ki, ai].join("|") + ")" + ps, qo = "(?:" + [ss + Si + "?", Si, ki, ai, Ii].join("|") + ")", gn = RegExp(pn, "g"), zo = RegExp(Si, "g"), Ki = RegExp(Hi + "(?=" + Hi + ")|" + qo + ps, "g"), ds = RegExp([hr + "?" + is + "+" + cs + "(?=" + [dn, hr, "$"].join("|") + ")", Mr + "+" + us + "(?=" + [dn, hr + as, "$"].join("|") + ")", hr + "?" + as + "+" + cs, hr + "+" + us, fs, Gr, rs, Vi].join("|"), "g"), gs = RegExp("[" + os + Ui + Zn + ts + "]"), Pi = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, ys = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Uo = -1, Ve = {};
        Ve[ut] = Ve[Me] = Ve[Pt] = Ve[Ft] = Ve[Ut] = Ve[Bt] = Ve[Mt] = Ve[Gt] = Ve[tr] = !0,
        Ve[xe] = Ve[It] = Ve[De] = Ve[T] = Ve[ke] = Ve[A] = Ve[E] = Ve[ee] = Ve[be] = Ve[$e] = Ve[Pe] = Ve[st] = Ve[je] = Ve[Xe] = Ve[Ue] = !1;
        var Be = {};
        Be[xe] = Be[It] = Be[De] = Be[ke] = Be[T] = Be[A] = Be[ut] = Be[Me] = Be[Pt] = Be[Ft] = Be[Ut] = Be[be] = Be[$e] = Be[Pe] = Be[st] = Be[je] = Be[Xe] = Be[Ze] = Be[Bt] = Be[Mt] = Be[Gt] = Be[tr] = !0,
        Be[E] = Be[ee] = Be[Ue] = !1;
        var v = {
            \u00C0: "A",
            \u00C1: "A",
            \u00C2: "A",
            \u00C3: "A",
            \u00C4: "A",
            \u00C5: "A",
            \u00E0: "a",
            \u00E1: "a",
            \u00E2: "a",
            \u00E3: "a",
            \u00E4: "a",
            \u00E5: "a",
            \u00C7: "C",
            \u00E7: "c",
            \u00D0: "D",
            \u00F0: "d",
            \u00C8: "E",
            \u00C9: "E",
            \u00CA: "E",
            \u00CB: "E",
            \u00E8: "e",
            \u00E9: "e",
            \u00EA: "e",
            \u00EB: "e",
            \u00CC: "I",
            \u00CD: "I",
            \u00CE: "I",
            \u00CF: "I",
            \u00EC: "i",
            \u00ED: "i",
            \u00EE: "i",
            \u00EF: "i",
            \u00D1: "N",
            \u00F1: "n",
            \u00D2: "O",
            \u00D3: "O",
            \u00D4: "O",
            \u00D5: "O",
            \u00D6: "O",
            \u00D8: "O",
            \u00F2: "o",
            \u00F3: "o",
            \u00F4: "o",
            \u00F5: "o",
            \u00F6: "o",
            \u00F8: "o",
            \u00D9: "U",
            \u00DA: "U",
            \u00DB: "U",
            \u00DC: "U",
            \u00F9: "u",
            \u00FA: "u",
            \u00FB: "u",
            \u00FC: "u",
            \u00DD: "Y",
            \u00FD: "y",
            \u00FF: "y",
            \u00C6: "Ae",
            \u00E6: "ae",
            \u00DE: "Th",
            \u00FE: "th",
            \u00DF: "ss",
            \u0100: "A",
            \u0102: "A",
            \u0104: "A",
            \u0101: "a",
            \u0103: "a",
            \u0105: "a",
            \u0106: "C",
            \u0108: "C",
            \u010A: "C",
            \u010C: "C",
            \u0107: "c",
            \u0109: "c",
            \u010B: "c",
            \u010D: "c",
            \u010E: "D",
            \u0110: "D",
            \u010F: "d",
            \u0111: "d",
            \u0112: "E",
            \u0114: "E",
            \u0116: "E",
            \u0118: "E",
            \u011A: "E",
            \u0113: "e",
            \u0115: "e",
            \u0117: "e",
            \u0119: "e",
            \u011B: "e",
            \u011C: "G",
            \u011E: "G",
            \u0120: "G",
            \u0122: "G",
            \u011D: "g",
            \u011F: "g",
            \u0121: "g",
            \u0123: "g",
            \u0124: "H",
            \u0126: "H",
            \u0125: "h",
            \u0127: "h",
            \u0128: "I",
            \u012A: "I",
            \u012C: "I",
            \u012E: "I",
            \u0130: "I",
            \u0129: "i",
            \u012B: "i",
            \u012D: "i",
            \u012F: "i",
            \u0131: "i",
            \u0134: "J",
            \u0135: "j",
            \u0136: "K",
            \u0137: "k",
            \u0138: "k",
            \u0139: "L",
            \u013B: "L",
            \u013D: "L",
            \u013F: "L",
            \u0141: "L",
            \u013A: "l",
            \u013C: "l",
            \u013E: "l",
            \u0140: "l",
            \u0142: "l",
            \u0143: "N",
            \u0145: "N",
            \u0147: "N",
            \u014A: "N",
            \u0144: "n",
            \u0146: "n",
            \u0148: "n",
            \u014B: "n",
            \u014C: "O",
            \u014E: "O",
            \u0150: "O",
            \u014D: "o",
            \u014F: "o",
            \u0151: "o",
            \u0154: "R",
            \u0156: "R",
            \u0158: "R",
            \u0155: "r",
            \u0157: "r",
            \u0159: "r",
            \u015A: "S",
            \u015C: "S",
            \u015E: "S",
            \u0160: "S",
            \u015B: "s",
            \u015D: "s",
            \u015F: "s",
            \u0161: "s",
            \u0162: "T",
            \u0164: "T",
            \u0166: "T",
            \u0163: "t",
            \u0165: "t",
            \u0167: "t",
            \u0168: "U",
            \u016A: "U",
            \u016C: "U",
            \u016E: "U",
            \u0170: "U",
            \u0172: "U",
            \u0169: "u",
            \u016B: "u",
            \u016D: "u",
            \u016F: "u",
            \u0171: "u",
            \u0173: "u",
            \u0174: "W",
            \u0175: "w",
            \u0176: "Y",
            \u0177: "y",
            \u0178: "Y",
            \u0179: "Z",
            \u017B: "Z",
            \u017D: "Z",
            \u017A: "z",
            \u017C: "z",
            \u017E: "z",
            \u0132: "IJ",
            \u0133: "ij",
            \u0152: "Oe",
            \u0153: "oe",
            \u0149: "'n",
            \u017F: "s"
        }
          , I = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }
          , M = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'"
        }
          , Y = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }
          , Ke = parseFloat
          , ve = parseInt
          , et = typeof Un == "object" && Un && Un.Object === Object && Un
          , $t = typeof self == "object" && self && self.Object === Object && self
          , Ae = et || $t || Function("return this")()
          , Ge = r && !r.nodeType && r
          , bt = Ge && !0 && a && !a.nodeType && a
          , rr = bt && bt.exports === Ge
          , Dt = rr && et.process
          , tt = function() {
            try {
                var S = bt && bt.require && bt.require("util").types;
                return S || Dt && Dt.binding && Dt.binding("util")
            } catch {}
        }()
          , Jt = tt && tt.isArrayBuffer
          , Cr = tt && tt.isDate
          , vr = tt && tt.isMap
          , qr = tt && tt.isRegExp
          , yn = tt && tt.isSet
          , Oi = tt && tt.isTypedArray;
        function qt(S, N, R) {
            switch (R.length) {
            case 0:
                return S.call(N);
            case 1:
                return S.call(N, R[0]);
            case 2:
                return S.call(N, R[0], R[1]);
            case 3:
                return S.call(N, R[0], R[1], R[2])
            }
            return S.apply(N, R)
        }
        function Hf(S, N, R, Z) {
            for (var de = -1, Fe = S == null ? 0 : S.length; ++de < Fe; ) {
                var jt = S[de];
                N(Z, jt, R(jt), S)
            }
            return Z
        }
        function _r(S, N) {
            for (var R = -1, Z = S == null ? 0 : S.length; ++R < Z && N(S[R], R, S) !== !1; )
                ;
            return S
        }
        function kf(S, N) {
            for (var R = S == null ? 0 : S.length; R-- && N(S[R], R, S) !== !1; )
                ;
            return S
        }
        function zc(S, N) {
            for (var R = -1, Z = S == null ? 0 : S.length; ++R < Z; )
                if (!N(S[R], R, S))
                    return !1;
            return !0
        }
        function ci(S, N) {
            for (var R = -1, Z = S == null ? 0 : S.length, de = 0, Fe = []; ++R < Z; ) {
                var jt = S[R];
                N(jt, R, S) && (Fe[de++] = jt)
            }
            return Fe
        }
        function vs(S, N) {
            var R = S == null ? 0 : S.length;
            return !!R && Gi(S, N, 0) > -1
        }
        function Bo(S, N, R) {
            for (var Z = -1, de = S == null ? 0 : S.length; ++Z < de; )
                if (R(N, S[Z]))
                    return !0;
            return !1
        }
        function nt(S, N) {
            for (var R = -1, Z = S == null ? 0 : S.length, de = Array(Z); ++R < Z; )
                de[R] = N(S[R], R, S);
            return de
        }
        function ui(S, N) {
            for (var R = -1, Z = N.length, de = S.length; ++R < Z; )
                S[de + R] = N[R];
            return S
        }
        function Ho(S, N, R, Z) {
            var de = -1
              , Fe = S == null ? 0 : S.length;
            for (Z && Fe && (R = S[++de]); ++de < Fe; )
                R = N(R, S[de], de, S);
            return R
        }
        function Vf(S, N, R, Z) {
            var de = S == null ? 0 : S.length;
            for (Z && de && (R = S[--de]); de--; )
                R = N(R, S[de], de, S);
            return R
        }
        function ko(S, N) {
            for (var R = -1, Z = S == null ? 0 : S.length; ++R < Z; )
                if (N(S[R], R, S))
                    return !0;
            return !1
        }
        var Kf = Vo("length");
        function Gf(S) {
            return S.split("")
        }
        function Wf(S) {
            return S.match(Tt) || []
        }
        function Uc(S, N, R) {
            var Z;
            return R(S, function(de, Fe, jt) {
                if (N(de, Fe, jt))
                    return Z = Fe,
                    !1
            }),
            Z
        }
        function _s(S, N, R, Z) {
            for (var de = S.length, Fe = R + (Z ? 1 : -1); Z ? Fe-- : ++Fe < de; )
                if (N(S[Fe], Fe, S))
                    return Fe;
            return -1
        }
        function Gi(S, N, R) {
            return N === N ? op(S, N, R) : _s(S, Bc, R)
        }
        function Jf(S, N, R, Z) {
            for (var de = R - 1, Fe = S.length; ++de < Fe; )
                if (Z(S[de], N))
                    return de;
            return -1
        }
        function Bc(S) {
            return S !== S
        }
        function Hc(S, N) {
            var R = S == null ? 0 : S.length;
            return R ? Go(S, N) / R : k
        }
        function Vo(S) {
            return function(N) {
                return N == null ? t : N[S]
            }
        }
        function Ko(S) {
            return function(N) {
                return S == null ? t : S[N]
            }
        }
        function kc(S, N, R, Z, de) {
            return de(S, function(Fe, jt, We) {
                R = Z ? (Z = !1,
                Fe) : N(R, Fe, jt, We)
            }),
            R
        }
        function Yf(S, N) {
            var R = S.length;
            for (S.sort(N); R--; )
                S[R] = S[R].value;
            return S
        }
        function Go(S, N) {
            for (var R, Z = -1, de = S.length; ++Z < de; ) {
                var Fe = N(S[Z]);
                Fe !== t && (R = R === t ? Fe : R + Fe)
            }
            return R
        }
        function Wo(S, N) {
            for (var R = -1, Z = Array(S); ++R < S; )
                Z[R] = N(R);
            return Z
        }
        function Xf(S, N) {
            return nt(N, function(R) {
                return [R, S[R]]
            })
        }
        function Vc(S) {
            return S && S.slice(0, Jc(S) + 1).replace(dt, "")
        }
        function lr(S) {
            return function(N) {
                return S(N)
            }
        }
        function Jo(S, N) {
            return nt(N, function(R) {
                return S[R]
            })
        }
        function vn(S, N) {
            return S.has(N)
        }
        function Kc(S, N) {
            for (var R = -1, Z = S.length; ++R < Z && Gi(N, S[R], 0) > -1; )
                ;
            return R
        }
        function Gc(S, N) {
            for (var R = S.length; R-- && Gi(N, S[R], 0) > -1; )
                ;
            return R
        }
        function Zf(S, N) {
            for (var R = S.length, Z = 0; R--; )
                S[R] === N && ++Z;
            return Z
        }
        var Qf = Ko(v)
          , ep = Ko(I);
        function tp(S) {
            return "\\" + Y[S]
        }
        function rp(S, N) {
            return S == null ? t : S[N]
        }
        function Wi(S) {
            return gs.test(S)
        }
        function ip(S) {
            return Pi.test(S)
        }
        function np(S) {
            for (var N, R = []; !(N = S.next()).done; )
                R.push(N.value);
            return R
        }
        function Yo(S) {
            var N = -1
              , R = Array(S.size);
            return S.forEach(function(Z, de) {
                R[++N] = [de, Z]
            }),
            R
        }
        function Wc(S, N) {
            return function(R) {
                return S(N(R))
            }
        }
        function hi(S, N) {
            for (var R = -1, Z = S.length, de = 0, Fe = []; ++R < Z; ) {
                var jt = S[R];
                (jt === N || jt === O) && (S[R] = O,
                Fe[de++] = R)
            }
            return Fe
        }
        function ms(S) {
            var N = -1
              , R = Array(S.size);
            return S.forEach(function(Z) {
                R[++N] = Z
            }),
            R
        }
        function sp(S) {
            var N = -1
              , R = Array(S.size);
            return S.forEach(function(Z) {
                R[++N] = [Z, Z]
            }),
            R
        }
        function op(S, N, R) {
            for (var Z = R - 1, de = S.length; ++Z < de; )
                if (S[Z] === N)
                    return Z;
            return -1
        }
        function ap(S, N, R) {
            for (var Z = R + 1; Z--; )
                if (S[Z] === N)
                    return Z;
            return Z
        }
        function Ji(S) {
            return Wi(S) ? up(S) : Kf(S)
        }
        function Rr(S) {
            return Wi(S) ? hp(S) : Gf(S)
        }
        function Jc(S) {
            for (var N = S.length; N-- && mt.test(S.charAt(N)); )
                ;
            return N
        }
        var cp = Ko(M);
        function up(S) {
            for (var N = Ki.lastIndex = 0; Ki.test(S); )
                ++N;
            return N
        }
        function hp(S) {
            return S.match(Ki) || []
        }
        function lp(S) {
            return S.match(ds) || []
        }
        var fp = function S(N) {
            N = N == null ? Ae : Yi.defaults(Ae.Object(), N, Yi.pick(Ae, ys));
            var R = N.Array
              , Z = N.Date
              , de = N.Error
              , Fe = N.Function
              , jt = N.Math
              , We = N.Object
              , Xo = N.RegExp
              , pp = N.String
              , mr = N.TypeError
              , bs = R.prototype
              , dp = Fe.prototype
              , Xi = We.prototype
              , ws = N["__core-js_shared__"]
              , Es = dp.toString
              , qe = Xi.hasOwnProperty
              , gp = 0
              , Yc = function() {
                var e = /[^.]+$/.exec(ws && ws.keys && ws.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }()
              , xs = Xi.toString
              , yp = Es.call(We)
              , vp = Ae._
              , _p = Xo("^" + Es.call(qe).replace(pt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
              , Is = rr ? N.Buffer : t
              , li = N.Symbol
              , Ss = N.Uint8Array
              , Xc = Is ? Is.allocUnsafe : t
              , Ps = Wc(We.getPrototypeOf, We)
              , Zc = We.create
              , Qc = Xi.propertyIsEnumerable
              , Os = bs.splice
              , eu = li ? li.isConcatSpreadable : t
              , _n = li ? li.iterator : t
              , Ai = li ? li.toStringTag : t
              , As = function() {
                try {
                    var e = Di(We, "defineProperty");
                    return e({}, "", {}),
                    e
                } catch {}
            }()
              , mp = N.clearTimeout !== Ae.clearTimeout && N.clearTimeout
              , bp = Z && Z.now !== Ae.Date.now && Z.now
              , wp = N.setTimeout !== Ae.setTimeout && N.setTimeout
              , Cs = jt.ceil
              , Rs = jt.floor
              , Zo = We.getOwnPropertySymbols
              , Ep = Is ? Is.isBuffer : t
              , tu = N.isFinite
              , xp = bs.join
              , Ip = Wc(We.keys, We)
              , Lt = jt.max
              , Vt = jt.min
              , Sp = Z.now
              , Pp = N.parseInt
              , ru = jt.random
              , Op = bs.reverse
              , Qo = Di(N, "DataView")
              , mn = Di(N, "Map")
              , ea = Di(N, "Promise")
              , Zi = Di(N, "Set")
              , bn = Di(N, "WeakMap")
              , wn = Di(We, "create")
              , Ts = bn && new bn
              , Qi = {}
              , Ap = Ni(Qo)
              , Cp = Ni(mn)
              , Rp = Ni(ea)
              , Tp = Ni(Zi)
              , $p = Ni(bn)
              , $s = li ? li.prototype : t
              , En = $s ? $s.valueOf : t
              , iu = $s ? $s.toString : t;
            function p(e) {
                if (yt(e) && !_e(e) && !(e instanceof Oe)) {
                    if (e instanceof br)
                        return e;
                    if (qe.call(e, "__wrapped__"))
                        return nh(e)
                }
                return new br(e)
            }
            var en = function() {
                function e() {}
                return function(i) {
                    if (!ct(i))
                        return {};
                    if (Zc)
                        return Zc(i);
                    e.prototype = i;
                    var s = new e;
                    return e.prototype = t,
                    s
                }
            }();
            function Ds() {}
            function br(e, i) {
                this.__wrapped__ = e,
                this.__actions__ = [],
                this.__chain__ = !!i,
                this.__index__ = 0,
                this.__values__ = t
            }
            p.templateSettings = {
                escape: lt,
                evaluate: ft,
                interpolate: at,
                variable: "",
                imports: {
                    _: p
                }
            },
            p.prototype = Ds.prototype,
            p.prototype.constructor = p,
            br.prototype = en(Ds.prototype),
            br.prototype.constructor = br;
            function Oe(e) {
                this.__wrapped__ = e,
                this.__actions__ = [],
                this.__dir__ = 1,
                this.__filtered__ = !1,
                this.__iteratees__ = [],
                this.__takeCount__ = G,
                this.__views__ = []
            }
            function Dp() {
                var e = new Oe(this.__wrapped__);
                return e.__actions__ = ir(this.__actions__),
                e.__dir__ = this.__dir__,
                e.__filtered__ = this.__filtered__,
                e.__iteratees__ = ir(this.__iteratees__),
                e.__takeCount__ = this.__takeCount__,
                e.__views__ = ir(this.__views__),
                e
            }
            function Np() {
                if (this.__filtered__) {
                    var e = new Oe(this);
                    e.__dir__ = -1,
                    e.__filtered__ = !0
                } else
                    e = this.clone(),
                    e.__dir__ *= -1;
                return e
            }
            function Fp() {
                var e = this.__wrapped__.value()
                  , i = this.__dir__
                  , s = _e(e)
                  , u = i < 0
                  , f = s ? e.length : 0
                  , g = Gd(0, f, this.__views__)
                  , m = g.start
                  , w = g.end
                  , P = w - m
                  , j = u ? w : m - 1
                  , L = this.__iteratees__
                  , H = L.length
                  , J = 0
                  , te = Vt(P, this.__takeCount__);
                if (!s || !u && f == P && te == P)
                    return Ou(e, this.__actions__);
                var oe = [];
                e: for (; P-- && J < te; ) {
                    j += i;
                    for (var we = -1, ae = e[j]; ++we < H; ) {
                        var Se = L[we]
                          , Ce = Se.iteratee
                          , dr = Se.type
                          , Zt = Ce(ae);
                        if (dr == x)
                            ae = Zt;
                        else if (!Zt) {
                            if (dr == _)
                                continue e;
                            break e
                        }
                    }
                    oe[J++] = ae
                }
                return oe
            }
            Oe.prototype = en(Ds.prototype),
            Oe.prototype.constructor = Oe;
            function Ci(e) {
                var i = -1
                  , s = e == null ? 0 : e.length;
                for (this.clear(); ++i < s; ) {
                    var u = e[i];
                    this.set(u[0], u[1])
                }
            }
            function jp() {
                this.__data__ = wn ? wn(null) : {},
                this.size = 0
            }
            function Lp(e) {
                var i = this.has(e) && delete this.__data__[e];
                return this.size -= i ? 1 : 0,
                i
            }
            function Mp(e) {
                var i = this.__data__;
                if (wn) {
                    var s = i[e];
                    return s === b ? t : s
                }
                return qe.call(i, e) ? i[e] : t
            }
            function qp(e) {
                var i = this.__data__;
                return wn ? i[e] !== t : qe.call(i, e)
            }
            function zp(e, i) {
                var s = this.__data__;
                return this.size += this.has(e) ? 0 : 1,
                s[e] = wn && i === t ? b : i,
                this
            }
            Ci.prototype.clear = jp,
            Ci.prototype.delete = Lp,
            Ci.prototype.get = Mp,
            Ci.prototype.has = qp,
            Ci.prototype.set = zp;
            function Wr(e) {
                var i = -1
                  , s = e == null ? 0 : e.length;
                for (this.clear(); ++i < s; ) {
                    var u = e[i];
                    this.set(u[0], u[1])
                }
            }
            function Up() {
                this.__data__ = [],
                this.size = 0
            }
            function Bp(e) {
                var i = this.__data__
                  , s = Ns(i, e);
                if (s < 0)
                    return !1;
                var u = i.length - 1;
                return s == u ? i.pop() : Os.call(i, s, 1),
                --this.size,
                !0
            }
            function Hp(e) {
                var i = this.__data__
                  , s = Ns(i, e);
                return s < 0 ? t : i[s][1]
            }
            function kp(e) {
                return Ns(this.__data__, e) > -1
            }
            function Vp(e, i) {
                var s = this.__data__
                  , u = Ns(s, e);
                return u < 0 ? (++this.size,
                s.push([e, i])) : s[u][1] = i,
                this
            }
            Wr.prototype.clear = Up,
            Wr.prototype.delete = Bp,
            Wr.prototype.get = Hp,
            Wr.prototype.has = kp,
            Wr.prototype.set = Vp;
            function Jr(e) {
                var i = -1
                  , s = e == null ? 0 : e.length;
                for (this.clear(); ++i < s; ) {
                    var u = e[i];
                    this.set(u[0], u[1])
                }
            }
            function Kp() {
                this.size = 0,
                this.__data__ = {
                    hash: new Ci,
                    map: new (mn || Wr),
                    string: new Ci
                }
            }
            function Gp(e) {
                var i = Ks(this, e).delete(e);
                return this.size -= i ? 1 : 0,
                i
            }
            function Wp(e) {
                return Ks(this, e).get(e)
            }
            function Jp(e) {
                return Ks(this, e).has(e)
            }
            function Yp(e, i) {
                var s = Ks(this, e)
                  , u = s.size;
                return s.set(e, i),
                this.size += s.size == u ? 0 : 1,
                this
            }
            Jr.prototype.clear = Kp,
            Jr.prototype.delete = Gp,
            Jr.prototype.get = Wp,
            Jr.prototype.has = Jp,
            Jr.prototype.set = Yp;
            function Ri(e) {
                var i = -1
                  , s = e == null ? 0 : e.length;
                for (this.__data__ = new Jr; ++i < s; )
                    this.add(e[i])
            }
            function Xp(e) {
                return this.__data__.set(e, b),
                this
            }
            function Zp(e) {
                return this.__data__.has(e)
            }
            Ri.prototype.add = Ri.prototype.push = Xp,
            Ri.prototype.has = Zp;
            function Tr(e) {
                var i = this.__data__ = new Wr(e);
                this.size = i.size
            }
            function Qp() {
                this.__data__ = new Wr,
                this.size = 0
            }
            function ed(e) {
                var i = this.__data__
                  , s = i.delete(e);
                return this.size = i.size,
                s
            }
            function td(e) {
                return this.__data__.get(e)
            }
            function rd(e) {
                return this.__data__.has(e)
            }
            function id(e, i) {
                var s = this.__data__;
                if (s instanceof Wr) {
                    var u = s.__data__;
                    if (!mn || u.length < o - 1)
                        return u.push([e, i]),
                        this.size = ++s.size,
                        this;
                    s = this.__data__ = new Jr(u)
                }
                return s.set(e, i),
                this.size = s.size,
                this
            }
            Tr.prototype.clear = Qp,
            Tr.prototype.delete = ed,
            Tr.prototype.get = td,
            Tr.prototype.has = rd,
            Tr.prototype.set = id;
            function nu(e, i) {
                var s = _e(e)
                  , u = !s && Fi(e)
                  , f = !s && !u && yi(e)
                  , g = !s && !u && !f && sn(e)
                  , m = s || u || f || g
                  , w = m ? Wo(e.length, pp) : []
                  , P = w.length;
                for (var j in e)
                    (i || qe.call(e, j)) && !(m && (j == "length" || f && (j == "offset" || j == "parent") || g && (j == "buffer" || j == "byteLength" || j == "byteOffset") || Qr(j, P))) && w.push(j);
                return w
            }
            function su(e) {
                var i = e.length;
                return i ? e[la(0, i - 1)] : t
            }
            function nd(e, i) {
                return Gs(ir(e), Ti(i, 0, e.length))
            }
            function sd(e) {
                return Gs(ir(e))
            }
            function ta(e, i, s) {
                (s !== t && !$r(e[i], s) || s === t && !(i in e)) && Yr(e, i, s)
            }
            function xn(e, i, s) {
                var u = e[i];
                (!(qe.call(e, i) && $r(u, s)) || s === t && !(i in e)) && Yr(e, i, s)
            }
            function Ns(e, i) {
                for (var s = e.length; s--; )
                    if ($r(e[s][0], i))
                        return s;
                return -1
            }
            function od(e, i, s, u) {
                return fi(e, function(f, g, m) {
                    i(u, f, s(f), m)
                }),
                u
            }
            function ou(e, i) {
                return e && Ur(i, zt(i), e)
            }
            function ad(e, i) {
                return e && Ur(i, sr(i), e)
            }
            function Yr(e, i, s) {
                i == "__proto__" && As ? As(e, i, {
                    configurable: !0,
                    enumerable: !0,
                    value: s,
                    writable: !0
                }) : e[i] = s
            }
            function ra(e, i) {
                for (var s = -1, u = i.length, f = R(u), g = e == null; ++s < u; )
                    f[s] = g ? t : ja(e, i[s]);
                return f
            }
            function Ti(e, i, s) {
                return e === e && (s !== t && (e = e <= s ? e : s),
                i !== t && (e = e >= i ? e : i)),
                e
            }
            function wr(e, i, s, u, f, g) {
                var m, w = i & q, P = i & C, j = i & z;
                if (s && (m = f ? s(e, u, f, g) : s(e)),
                m !== t)
                    return m;
                if (!ct(e))
                    return e;
                var L = _e(e);
                if (L) {
                    if (m = Jd(e),
                    !w)
                        return ir(e, m)
                } else {
                    var H = Kt(e)
                      , J = H == ee || H == fe;
                    if (yi(e))
                        return Ru(e, w);
                    if (H == Pe || H == xe || J && !f) {
                        if (m = P || J ? {} : Ju(e),
                        !w)
                            return P ? Md(e, ad(m, e)) : Ld(e, ou(m, e))
                    } else {
                        if (!Be[H])
                            return f ? e : {};
                        m = Yd(e, H, w)
                    }
                }
                g || (g = new Tr);
                var te = g.get(e);
                if (te)
                    return te;
                g.set(e, m),
                Ih(e) ? e.forEach(function(ae) {
                    m.add(wr(ae, i, s, ae, e, g))
                }) : Eh(e) && e.forEach(function(ae, Se) {
                    m.set(Se, wr(ae, i, s, Se, e, g))
                });
                var oe = j ? P ? Ea : wa : P ? sr : zt
                  , we = L ? t : oe(e);
                return _r(we || e, function(ae, Se) {
                    we && (Se = ae,
                    ae = e[Se]),
                    xn(m, Se, wr(ae, i, s, Se, e, g))
                }),
                m
            }
            function cd(e) {
                var i = zt(e);
                return function(s) {
                    return au(s, e, i)
                }
            }
            function au(e, i, s) {
                var u = s.length;
                if (e == null)
                    return !u;
                for (e = We(e); u--; ) {
                    var f = s[u]
                      , g = i[f]
                      , m = e[f];
                    if (m === t && !(f in e) || !g(m))
                        return !1
                }
                return !0
            }
            function cu(e, i, s) {
                if (typeof e != "function")
                    throw new mr(l);
                return Rn(function() {
                    e.apply(t, s)
                }, i)
            }
            function In(e, i, s, u) {
                var f = -1
                  , g = vs
                  , m = !0
                  , w = e.length
                  , P = []
                  , j = i.length;
                if (!w)
                    return P;
                s && (i = nt(i, lr(s))),
                u ? (g = Bo,
                m = !1) : i.length >= o && (g = vn,
                m = !1,
                i = new Ri(i));
                e: for (; ++f < w; ) {
                    var L = e[f]
                      , H = s == null ? L : s(L);
                    if (L = u || L !== 0 ? L : 0,
                    m && H === H) {
                        for (var J = j; J--; )
                            if (i[J] === H)
                                continue e;
                        P.push(L)
                    } else
                        g(i, H, u) || P.push(L)
                }
                return P
            }
            var fi = Fu(zr)
              , uu = Fu(na, !0);
            function ud(e, i) {
                var s = !0;
                return fi(e, function(u, f, g) {
                    return s = !!i(u, f, g),
                    s
                }),
                s
            }
            function Fs(e, i, s) {
                for (var u = -1, f = e.length; ++u < f; ) {
                    var g = e[u]
                      , m = i(g);
                    if (m != null && (w === t ? m === m && !pr(m) : s(m, w)))
                        var w = m
                          , P = g
                }
                return P
            }
            function hd(e, i, s, u) {
                var f = e.length;
                for (s = me(s),
                s < 0 && (s = -s > f ? 0 : f + s),
                u = u === t || u > f ? f : me(u),
                u < 0 && (u += f),
                u = s > u ? 0 : Ph(u); s < u; )
                    e[s++] = i;
                return e
            }
            function hu(e, i) {
                var s = [];
                return fi(e, function(u, f, g) {
                    i(u, f, g) && s.push(u)
                }),
                s
            }
            function Ht(e, i, s, u, f) {
                var g = -1
                  , m = e.length;
                for (s || (s = Zd),
                f || (f = []); ++g < m; ) {
                    var w = e[g];
                    i > 0 && s(w) ? i > 1 ? Ht(w, i - 1, s, u, f) : ui(f, w) : u || (f[f.length] = w)
                }
                return f
            }
            var ia = ju()
              , lu = ju(!0);
            function zr(e, i) {
                return e && ia(e, i, zt)
            }
            function na(e, i) {
                return e && lu(e, i, zt)
            }
            function js(e, i) {
                return ci(i, function(s) {
                    return ei(e[s])
                })
            }
            function $i(e, i) {
                i = di(i, e);
                for (var s = 0, u = i.length; e != null && s < u; )
                    e = e[Br(i[s++])];
                return s && s == u ? e : t
            }
            function fu(e, i, s) {
                var u = i(e);
                return _e(e) ? u : ui(u, s(e))
            }
            function Yt(e) {
                return e == null ? e === t ? ot : Ne : Ai && Ai in We(e) ? Kd(e) : sg(e)
            }
            function sa(e, i) {
                return e > i
            }
            function ld(e, i) {
                return e != null && qe.call(e, i)
            }
            function fd(e, i) {
                return e != null && i in We(e)
            }
            function pd(e, i, s) {
                return e >= Vt(i, s) && e < Lt(i, s)
            }
            function oa(e, i, s) {
                for (var u = s ? Bo : vs, f = e[0].length, g = e.length, m = g, w = R(g), P = 1 / 0, j = []; m--; ) {
                    var L = e[m];
                    m && i && (L = nt(L, lr(i))),
                    P = Vt(L.length, P),
                    w[m] = !s && (i || f >= 120 && L.length >= 120) ? new Ri(m && L) : t
                }
                L = e[0];
                var H = -1
                  , J = w[0];
                e: for (; ++H < f && j.length < P; ) {
                    var te = L[H]
                      , oe = i ? i(te) : te;
                    if (te = s || te !== 0 ? te : 0,
                    !(J ? vn(J, oe) : u(j, oe, s))) {
                        for (m = g; --m; ) {
                            var we = w[m];
                            if (!(we ? vn(we, oe) : u(e[m], oe, s)))
                                continue e
                        }
                        J && J.push(oe),
                        j.push(te)
                    }
                }
                return j
            }
            function dd(e, i, s, u) {
                return zr(e, function(f, g, m) {
                    i(u, s(f), g, m)
                }),
                u
            }
            function Sn(e, i, s) {
                i = di(i, e),
                e = Qu(e, i);
                var u = e == null ? e : e[Br(xr(i))];
                return u == null ? t : qt(u, e, s)
            }
            function pu(e) {
                return yt(e) && Yt(e) == xe
            }
            function gd(e) {
                return yt(e) && Yt(e) == De
            }
            function yd(e) {
                return yt(e) && Yt(e) == A
            }
            function Pn(e, i, s, u, f) {
                return e === i ? !0 : e == null || i == null || !yt(e) && !yt(i) ? e !== e && i !== i : vd(e, i, s, u, Pn, f)
            }
            function vd(e, i, s, u, f, g) {
                var m = _e(e)
                  , w = _e(i)
                  , P = m ? It : Kt(e)
                  , j = w ? It : Kt(i);
                P = P == xe ? Pe : P,
                j = j == xe ? Pe : j;
                var L = P == Pe
                  , H = j == Pe
                  , J = P == j;
                if (J && yi(e)) {
                    if (!yi(i))
                        return !1;
                    m = !0,
                    L = !1
                }
                if (J && !L)
                    return g || (g = new Tr),
                    m || sn(e) ? Ku(e, i, s, u, f, g) : kd(e, i, P, s, u, f, g);
                if (!(s & F)) {
                    var te = L && qe.call(e, "__wrapped__")
                      , oe = H && qe.call(i, "__wrapped__");
                    if (te || oe) {
                        var we = te ? e.value() : e
                          , ae = oe ? i.value() : i;
                        return g || (g = new Tr),
                        f(we, ae, s, u, g)
                    }
                }
                return J ? (g || (g = new Tr),
                Vd(e, i, s, u, f, g)) : !1
            }
            function _d(e) {
                return yt(e) && Kt(e) == be
            }
            function aa(e, i, s, u) {
                var f = s.length
                  , g = f
                  , m = !u;
                if (e == null)
                    return !g;
                for (e = We(e); f--; ) {
                    var w = s[f];
                    if (m && w[2] ? w[1] !== e[w[0]] : !(w[0]in e))
                        return !1
                }
                for (; ++f < g; ) {
                    w = s[f];
                    var P = w[0]
                      , j = e[P]
                      , L = w[1];
                    if (m && w[2]) {
                        if (j === t && !(P in e))
                            return !1
                    } else {
                        var H = new Tr;
                        if (u)
                            var J = u(j, L, P, e, i, H);
                        if (!(J === t ? Pn(L, j, F | K, u, H) : J))
                            return !1
                    }
                }
                return !0
            }
            function du(e) {
                if (!ct(e) || eg(e))
                    return !1;
                var i = ei(e) ? _p : Po;
                return i.test(Ni(e))
            }
            function md(e) {
                return yt(e) && Yt(e) == st
            }
            function bd(e) {
                return yt(e) && Kt(e) == je
            }
            function wd(e) {
                return yt(e) && Qs(e.length) && !!Ve[Yt(e)]
            }
            function gu(e) {
                return typeof e == "function" ? e : e == null ? or : typeof e == "object" ? _e(e) ? _u(e[0], e[1]) : vu(e) : Lh(e)
            }
            function ca(e) {
                if (!Cn(e))
                    return Ip(e);
                var i = [];
                for (var s in We(e))
                    qe.call(e, s) && s != "constructor" && i.push(s);
                return i
            }
            function Ed(e) {
                if (!ct(e))
                    return ng(e);
                var i = Cn(e)
                  , s = [];
                for (var u in e)
                    u == "constructor" && (i || !qe.call(e, u)) || s.push(u);
                return s
            }
            function ua(e, i) {
                return e < i
            }
            function yu(e, i) {
                var s = -1
                  , u = nr(e) ? R(e.length) : [];
                return fi(e, function(f, g, m) {
                    u[++s] = i(f, g, m)
                }),
                u
            }
            function vu(e) {
                var i = Ia(e);
                return i.length == 1 && i[0][2] ? Xu(i[0][0], i[0][1]) : function(s) {
                    return s === e || aa(s, e, i)
                }
            }
            function _u(e, i) {
                return Pa(e) && Yu(i) ? Xu(Br(e), i) : function(s) {
                    var u = ja(s, e);
                    return u === t && u === i ? La(s, e) : Pn(i, u, F | K)
                }
            }
            function Ls(e, i, s, u, f) {
                e !== i && ia(i, function(g, m) {
                    if (f || (f = new Tr),
                    ct(g))
                        xd(e, i, m, s, Ls, u, f);
                    else {
                        var w = u ? u(Aa(e, m), g, m + "", e, i, f) : t;
                        w === t && (w = g),
                        ta(e, m, w)
                    }
                }, sr)
            }
            function xd(e, i, s, u, f, g, m) {
                var w = Aa(e, s)
                  , P = Aa(i, s)
                  , j = m.get(P);
                if (j) {
                    ta(e, s, j);
                    return
                }
                var L = g ? g(w, P, s + "", e, i, m) : t
                  , H = L === t;
                if (H) {
                    var J = _e(P)
                      , te = !J && yi(P)
                      , oe = !J && !te && sn(P);
                    L = P,
                    J || te || oe ? _e(w) ? L = w : wt(w) ? L = ir(w) : te ? (H = !1,
                    L = Ru(P, !0)) : oe ? (H = !1,
                    L = Tu(P, !0)) : L = [] : Tn(P) || Fi(P) ? (L = w,
                    Fi(w) ? L = Oh(w) : (!ct(w) || ei(w)) && (L = Ju(P))) : H = !1
                }
                H && (m.set(P, L),
                f(L, P, u, g, m),
                m.delete(P)),
                ta(e, s, L)
            }
            function mu(e, i) {
                var s = e.length;
                if (s)
                    return i += i < 0 ? s : 0,
                    Qr(i, s) ? e[i] : t
            }
            function bu(e, i, s) {
                i.length ? i = nt(i, function(g) {
                    return _e(g) ? function(m) {
                        return $i(m, g.length === 1 ? g[0] : g)
                    }
                    : g
                }) : i = [or];
                var u = -1;
                i = nt(i, lr(ne()));
                var f = yu(e, function(g, m, w) {
                    var P = nt(i, function(j) {
                        return j(g)
                    });
                    return {
                        criteria: P,
                        index: ++u,
                        value: g
                    }
                });
                return Yf(f, function(g, m) {
                    return jd(g, m, s)
                })
            }
            function Id(e, i) {
                return wu(e, i, function(s, u) {
                    return La(e, u)
                })
            }
            function wu(e, i, s) {
                for (var u = -1, f = i.length, g = {}; ++u < f; ) {
                    var m = i[u]
                      , w = $i(e, m);
                    s(w, m) && On(g, di(m, e), w)
                }
                return g
            }
            function Sd(e) {
                return function(i) {
                    return $i(i, e)
                }
            }
            function ha(e, i, s, u) {
                var f = u ? Jf : Gi
                  , g = -1
                  , m = i.length
                  , w = e;
                for (e === i && (i = ir(i)),
                s && (w = nt(e, lr(s))); ++g < m; )
                    for (var P = 0, j = i[g], L = s ? s(j) : j; (P = f(w, L, P, u)) > -1; )
                        w !== e && Os.call(w, P, 1),
                        Os.call(e, P, 1);
                return e
            }
            function Eu(e, i) {
                for (var s = e ? i.length : 0, u = s - 1; s--; ) {
                    var f = i[s];
                    if (s == u || f !== g) {
                        var g = f;
                        Qr(f) ? Os.call(e, f, 1) : da(e, f)
                    }
                }
                return e
            }
            function la(e, i) {
                return e + Rs(ru() * (i - e + 1))
            }
            function Pd(e, i, s, u) {
                for (var f = -1, g = Lt(Cs((i - e) / (s || 1)), 0), m = R(g); g--; )
                    m[u ? g : ++f] = e,
                    e += s;
                return m
            }
            function fa(e, i) {
                var s = "";
                if (!e || i < 1 || i > V)
                    return s;
                do
                    i % 2 && (s += e),
                    i = Rs(i / 2),
                    i && (e += e);
                while (i);
                return s
            }
            function Ie(e, i) {
                return Ca(Zu(e, i, or), e + "")
            }
            function Od(e) {
                return su(on(e))
            }
            function Ad(e, i) {
                var s = on(e);
                return Gs(s, Ti(i, 0, s.length))
            }
            function On(e, i, s, u) {
                if (!ct(e))
                    return e;
                i = di(i, e);
                for (var f = -1, g = i.length, m = g - 1, w = e; w != null && ++f < g; ) {
                    var P = Br(i[f])
                      , j = s;
                    if (P === "__proto__" || P === "constructor" || P === "prototype")
                        return e;
                    if (f != m) {
                        var L = w[P];
                        j = u ? u(L, P, w) : t,
                        j === t && (j = ct(L) ? L : Qr(i[f + 1]) ? [] : {})
                    }
                    xn(w, P, j),
                    w = w[P]
                }
                return e
            }
            var xu = Ts ? function(e, i) {
                return Ts.set(e, i),
                e
            }
            : or
              , Cd = As ? function(e, i) {
                return As(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: qa(i),
                    writable: !0
                })
            }
            : or;
            function Rd(e) {
                return Gs(on(e))
            }
            function Er(e, i, s) {
                var u = -1
                  , f = e.length;
                i < 0 && (i = -i > f ? 0 : f + i),
                s = s > f ? f : s,
                s < 0 && (s += f),
                f = i > s ? 0 : s - i >>> 0,
                i >>>= 0;
                for (var g = R(f); ++u < f; )
                    g[u] = e[u + i];
                return g
            }
            function Td(e, i) {
                var s;
                return fi(e, function(u, f, g) {
                    return s = i(u, f, g),
                    !s
                }),
                !!s
            }
            function Ms(e, i, s) {
                var u = 0
                  , f = e == null ? u : e.length;
                if (typeof i == "number" && i === i && f <= He) {
                    for (; u < f; ) {
                        var g = u + f >>> 1
                          , m = e[g];
                        m !== null && !pr(m) && (s ? m <= i : m < i) ? u = g + 1 : f = g
                    }
                    return f
                }
                return pa(e, i, or, s)
            }
            function pa(e, i, s, u) {
                var f = 0
                  , g = e == null ? 0 : e.length;
                if (g === 0)
                    return 0;
                i = s(i);
                for (var m = i !== i, w = i === null, P = pr(i), j = i === t; f < g; ) {
                    var L = Rs((f + g) / 2)
                      , H = s(e[L])
                      , J = H !== t
                      , te = H === null
                      , oe = H === H
                      , we = pr(H);
                    if (m)
                        var ae = u || oe;
                    else
                        j ? ae = oe && (u || J) : w ? ae = oe && J && (u || !te) : P ? ae = oe && J && !te && (u || !we) : te || we ? ae = !1 : ae = u ? H <= i : H < i;
                    ae ? f = L + 1 : g = L
                }
                return Vt(g, Je)
            }
            function Iu(e, i) {
                for (var s = -1, u = e.length, f = 0, g = []; ++s < u; ) {
                    var m = e[s]
                      , w = i ? i(m) : m;
                    if (!s || !$r(w, P)) {
                        var P = w;
                        g[f++] = m === 0 ? 0 : m
                    }
                }
                return g
            }
            function Su(e) {
                return typeof e == "number" ? e : pr(e) ? k : +e
            }
            function fr(e) {
                if (typeof e == "string")
                    return e;
                if (_e(e))
                    return nt(e, fr) + "";
                if (pr(e))
                    return iu ? iu.call(e) : "";
                var i = e + "";
                return i == "0" && 1 / e == -ce ? "-0" : i
            }
            function pi(e, i, s) {
                var u = -1
                  , f = vs
                  , g = e.length
                  , m = !0
                  , w = []
                  , P = w;
                if (s)
                    m = !1,
                    f = Bo;
                else if (g >= o) {
                    var j = i ? null : Bd(e);
                    if (j)
                        return ms(j);
                    m = !1,
                    f = vn,
                    P = new Ri
                } else
                    P = i ? [] : w;
                e: for (; ++u < g; ) {
                    var L = e[u]
                      , H = i ? i(L) : L;
                    if (L = s || L !== 0 ? L : 0,
                    m && H === H) {
                        for (var J = P.length; J--; )
                            if (P[J] === H)
                                continue e;
                        i && P.push(H),
                        w.push(L)
                    } else
                        f(P, H, s) || (P !== w && P.push(H),
                        w.push(L))
                }
                return w
            }
            function da(e, i) {
                return i = di(i, e),
                e = Qu(e, i),
                e == null || delete e[Br(xr(i))]
            }
            function Pu(e, i, s, u) {
                return On(e, i, s($i(e, i)), u)
            }
            function qs(e, i, s, u) {
                for (var f = e.length, g = u ? f : -1; (u ? g-- : ++g < f) && i(e[g], g, e); )
                    ;
                return s ? Er(e, u ? 0 : g, u ? g + 1 : f) : Er(e, u ? g + 1 : 0, u ? f : g)
            }
            function Ou(e, i) {
                var s = e;
                return s instanceof Oe && (s = s.value()),
                Ho(i, function(u, f) {
                    return f.func.apply(f.thisArg, ui([u], f.args))
                }, s)
            }
            function ga(e, i, s) {
                var u = e.length;
                if (u < 2)
                    return u ? pi(e[0]) : [];
                for (var f = -1, g = R(u); ++f < u; )
                    for (var m = e[f], w = -1; ++w < u; )
                        w != f && (g[f] = In(g[f] || m, e[w], i, s));
                return pi(Ht(g, 1), i, s)
            }
            function Au(e, i, s) {
                for (var u = -1, f = e.length, g = i.length, m = {}; ++u < f; ) {
                    var w = u < g ? i[u] : t;
                    s(m, e[u], w)
                }
                return m
            }
            function ya(e) {
                return wt(e) ? e : []
            }
            function va(e) {
                return typeof e == "function" ? e : or
            }
            function di(e, i) {
                return _e(e) ? e : Pa(e, i) ? [e] : ih(Le(e))
            }
            var $d = Ie;
            function gi(e, i, s) {
                var u = e.length;
                return s = s === t ? u : s,
                !i && s >= u ? e : Er(e, i, s)
            }
            var Cu = mp || function(e) {
                return Ae.clearTimeout(e)
            }
            ;
            function Ru(e, i) {
                if (i)
                    return e.slice();
                var s = e.length
                  , u = Xc ? Xc(s) : new e.constructor(s);
                return e.copy(u),
                u
            }
            function _a(e) {
                var i = new e.constructor(e.byteLength);
                return new Ss(i).set(new Ss(e)),
                i
            }
            function Dd(e, i) {
                var s = i ? _a(e.buffer) : e.buffer;
                return new e.constructor(s,e.byteOffset,e.byteLength)
            }
            function Nd(e) {
                var i = new e.constructor(e.source,yr.exec(e));
                return i.lastIndex = e.lastIndex,
                i
            }
            function Fd(e) {
                return En ? We(En.call(e)) : {}
            }
            function Tu(e, i) {
                var s = i ? _a(e.buffer) : e.buffer;
                return new e.constructor(s,e.byteOffset,e.length)
            }
            function $u(e, i) {
                if (e !== i) {
                    var s = e !== t
                      , u = e === null
                      , f = e === e
                      , g = pr(e)
                      , m = i !== t
                      , w = i === null
                      , P = i === i
                      , j = pr(i);
                    if (!w && !j && !g && e > i || g && m && P && !w && !j || u && m && P || !s && P || !f)
                        return 1;
                    if (!u && !g && !j && e < i || j && s && f && !u && !g || w && s && f || !m && f || !P)
                        return -1
                }
                return 0
            }
            function jd(e, i, s) {
                for (var u = -1, f = e.criteria, g = i.criteria, m = f.length, w = s.length; ++u < m; ) {
                    var P = $u(f[u], g[u]);
                    if (P) {
                        if (u >= w)
                            return P;
                        var j = s[u];
                        return P * (j == "desc" ? -1 : 1)
                    }
                }
                return e.index - i.index
            }
            function Du(e, i, s, u) {
                for (var f = -1, g = e.length, m = s.length, w = -1, P = i.length, j = Lt(g - m, 0), L = R(P + j), H = !u; ++w < P; )
                    L[w] = i[w];
                for (; ++f < m; )
                    (H || f < g) && (L[s[f]] = e[f]);
                for (; j--; )
                    L[w++] = e[f++];
                return L
            }
            function Nu(e, i, s, u) {
                for (var f = -1, g = e.length, m = -1, w = s.length, P = -1, j = i.length, L = Lt(g - w, 0), H = R(L + j), J = !u; ++f < L; )
                    H[f] = e[f];
                for (var te = f; ++P < j; )
                    H[te + P] = i[P];
                for (; ++m < w; )
                    (J || f < g) && (H[te + s[m]] = e[f++]);
                return H
            }
            function ir(e, i) {
                var s = -1
                  , u = e.length;
                for (i || (i = R(u)); ++s < u; )
                    i[s] = e[s];
                return i
            }
            function Ur(e, i, s, u) {
                var f = !s;
                s || (s = {});
                for (var g = -1, m = i.length; ++g < m; ) {
                    var w = i[g]
                      , P = u ? u(s[w], e[w], w, s, e) : t;
                    P === t && (P = e[w]),
                    f ? Yr(s, w, P) : xn(s, w, P)
                }
                return s
            }
            function Ld(e, i) {
                return Ur(e, Sa(e), i)
            }
            function Md(e, i) {
                return Ur(e, Gu(e), i)
            }
            function zs(e, i) {
                return function(s, u) {
                    var f = _e(s) ? Hf : od
                      , g = i ? i() : {};
                    return f(s, e, ne(u, 2), g)
                }
            }
            function tn(e) {
                return Ie(function(i, s) {
                    var u = -1
                      , f = s.length
                      , g = f > 1 ? s[f - 1] : t
                      , m = f > 2 ? s[2] : t;
                    for (g = e.length > 3 && typeof g == "function" ? (f--,
                    g) : t,
                    m && Xt(s[0], s[1], m) && (g = f < 3 ? t : g,
                    f = 1),
                    i = We(i); ++u < f; ) {
                        var w = s[u];
                        w && e(i, w, u, g)
                    }
                    return i
                })
            }
            function Fu(e, i) {
                return function(s, u) {
                    if (s == null)
                        return s;
                    if (!nr(s))
                        return e(s, u);
                    for (var f = s.length, g = i ? f : -1, m = We(s); (i ? g-- : ++g < f) && u(m[g], g, m) !== !1; )
                        ;
                    return s
                }
            }
            function ju(e) {
                return function(i, s, u) {
                    for (var f = -1, g = We(i), m = u(i), w = m.length; w--; ) {
                        var P = m[e ? w : ++f];
                        if (s(g[P], P, g) === !1)
                            break
                    }
                    return i
                }
            }
            function qd(e, i, s) {
                var u = i & ie
                  , f = An(e);
                function g() {
                    var m = this && this !== Ae && this instanceof g ? f : e;
                    return m.apply(u ? s : this, arguments)
                }
                return g
            }
            function Lu(e) {
                return function(i) {
                    i = Le(i);
                    var s = Wi(i) ? Rr(i) : t
                      , u = s ? s[0] : i.charAt(0)
                      , f = s ? gi(s, 1).join("") : i.slice(1);
                    return u[e]() + f
                }
            }
            function rn(e) {
                return function(i) {
                    return Ho(Fh(Nh(i).replace(gn, "")), e, "")
                }
            }
            function An(e) {
                return function() {
                    var i = arguments;
                    switch (i.length) {
                    case 0:
                        return new e;
                    case 1:
                        return new e(i[0]);
                    case 2:
                        return new e(i[0],i[1]);
                    case 3:
                        return new e(i[0],i[1],i[2]);
                    case 4:
                        return new e(i[0],i[1],i[2],i[3]);
                    case 5:
                        return new e(i[0],i[1],i[2],i[3],i[4]);
                    case 6:
                        return new e(i[0],i[1],i[2],i[3],i[4],i[5]);
                    case 7:
                        return new e(i[0],i[1],i[2],i[3],i[4],i[5],i[6])
                    }
                    var s = en(e.prototype)
                      , u = e.apply(s, i);
                    return ct(u) ? u : s
                }
            }
            function zd(e, i, s) {
                var u = An(e);
                function f() {
                    for (var g = arguments.length, m = R(g), w = g, P = nn(f); w--; )
                        m[w] = arguments[w];
                    var j = g < 3 && m[0] !== P && m[g - 1] !== P ? [] : hi(m, P);
                    if (g -= j.length,
                    g < s)
                        return Bu(e, i, Us, f.placeholder, t, m, j, t, t, s - g);
                    var L = this && this !== Ae && this instanceof f ? u : e;
                    return qt(L, this, m)
                }
                return f
            }
            function Mu(e) {
                return function(i, s, u) {
                    var f = We(i);
                    if (!nr(i)) {
                        var g = ne(s, 3);
                        i = zt(i),
                        s = function(w) {
                            return g(f[w], w, f)
                        }
                    }
                    var m = e(i, s, u);
                    return m > -1 ? f[g ? i[m] : m] : t
                }
            }
            function qu(e) {
                return Zr(function(i) {
                    var s = i.length
                      , u = s
                      , f = br.prototype.thru;
                    for (e && i.reverse(); u--; ) {
                        var g = i[u];
                        if (typeof g != "function")
                            throw new mr(l);
                        if (f && !m && Vs(g) == "wrapper")
                            var m = new br([],!0)
                    }
                    for (u = m ? u : s; ++u < s; ) {
                        g = i[u];
                        var w = Vs(g)
                          , P = w == "wrapper" ? xa(g) : t;
                        P && Oa(P[0]) && P[1] == (U | pe | le | W) && !P[4].length && P[9] == 1 ? m = m[Vs(P[0])].apply(m, P[3]) : m = g.length == 1 && Oa(g) ? m[w]() : m.thru(g)
                    }
                    return function() {
                        var j = arguments
                          , L = j[0];
                        if (m && j.length == 1 && _e(L))
                            return m.plant(L).value();
                        for (var H = 0, J = s ? i[H].apply(this, j) : L; ++H < s; )
                            J = i[H].call(this, J);
                        return J
                    }
                })
            }
            function Us(e, i, s, u, f, g, m, w, P, j) {
                var L = i & U
                  , H = i & ie
                  , J = i & Ee
                  , te = i & (pe | he)
                  , oe = i & ye
                  , we = J ? t : An(e);
                function ae() {
                    for (var Se = arguments.length, Ce = R(Se), dr = Se; dr--; )
                        Ce[dr] = arguments[dr];
                    if (te)
                        var Zt = nn(ae)
                          , gr = Zf(Ce, Zt);
                    if (u && (Ce = Du(Ce, u, f, te)),
                    g && (Ce = Nu(Ce, g, m, te)),
                    Se -= gr,
                    te && Se < j) {
                        var Et = hi(Ce, Zt);
                        return Bu(e, i, Us, ae.placeholder, s, Ce, Et, w, P, j - Se)
                    }
                    var Dr = H ? s : this
                      , ri = J ? Dr[e] : e;
                    return Se = Ce.length,
                    w ? Ce = og(Ce, w) : oe && Se > 1 && Ce.reverse(),
                    L && P < Se && (Ce.length = P),
                    this && this !== Ae && this instanceof ae && (ri = we || An(ri)),
                    ri.apply(Dr, Ce)
                }
                return ae
            }
            function zu(e, i) {
                return function(s, u) {
                    return dd(s, e, i(u), {})
                }
            }
            function Bs(e, i) {
                return function(s, u) {
                    var f;
                    if (s === t && u === t)
                        return i;
                    if (s !== t && (f = s),
                    u !== t) {
                        if (f === t)
                            return u;
                        typeof s == "string" || typeof u == "string" ? (s = fr(s),
                        u = fr(u)) : (s = Su(s),
                        u = Su(u)),
                        f = e(s, u)
                    }
                    return f
                }
            }
            function ma(e) {
                return Zr(function(i) {
                    return i = nt(i, lr(ne())),
                    Ie(function(s) {
                        var u = this;
                        return e(i, function(f) {
                            return qt(f, u, s)
                        })
                    })
                })
            }
            function Hs(e, i) {
                i = i === t ? " " : fr(i);
                var s = i.length;
                if (s < 2)
                    return s ? fa(i, e) : i;
                var u = fa(i, Cs(e / Ji(i)));
                return Wi(i) ? gi(Rr(u), 0, e).join("") : u.slice(0, e)
            }
            function Ud(e, i, s, u) {
                var f = i & ie
                  , g = An(e);
                function m() {
                    for (var w = -1, P = arguments.length, j = -1, L = u.length, H = R(L + P), J = this && this !== Ae && this instanceof m ? g : e; ++j < L; )
                        H[j] = u[j];
                    for (; P--; )
                        H[j++] = arguments[++w];
                    return qt(J, f ? s : this, H)
                }
                return m
            }
            function Uu(e) {
                return function(i, s, u) {
                    return u && typeof u != "number" && Xt(i, s, u) && (s = u = t),
                    i = ti(i),
                    s === t ? (s = i,
                    i = 0) : s = ti(s),
                    u = u === t ? i < s ? 1 : -1 : ti(u),
                    Pd(i, s, u, e)
                }
            }
            function ks(e) {
                return function(i, s) {
                    return typeof i == "string" && typeof s == "string" || (i = Ir(i),
                    s = Ir(s)),
                    e(i, s)
                }
            }
            function Bu(e, i, s, u, f, g, m, w, P, j) {
                var L = i & pe
                  , H = L ? m : t
                  , J = L ? t : m
                  , te = L ? g : t
                  , oe = L ? t : g;
                i |= L ? le : D,
                i &= ~(L ? D : le),
                i & ge || (i &= ~(ie | Ee));
                var we = [e, i, f, te, H, oe, J, w, P, j]
                  , ae = s.apply(t, we);
                return Oa(e) && eh(ae, we),
                ae.placeholder = u,
                th(ae, e, i)
            }
            function ba(e) {
                var i = jt[e];
                return function(s, u) {
                    if (s = Ir(s),
                    u = u == null ? 0 : Vt(me(u), 292),
                    u && tu(s)) {
                        var f = (Le(s) + "e").split("e")
                          , g = i(f[0] + "e" + (+f[1] + u));
                        return f = (Le(g) + "e").split("e"),
                        +(f[0] + "e" + (+f[1] - u))
                    }
                    return i(s)
                }
            }
            var Bd = Zi && 1 / ms(new Zi([, -0]))[1] == ce ? function(e) {
                return new Zi(e)
            }
            : Ba;
            function Hu(e) {
                return function(i) {
                    var s = Kt(i);
                    return s == be ? Yo(i) : s == je ? sp(i) : Xf(i, e(i))
                }
            }
            function Xr(e, i, s, u, f, g, m, w) {
                var P = i & Ee;
                if (!P && typeof e != "function")
                    throw new mr(l);
                var j = u ? u.length : 0;
                if (j || (i &= ~(le | D),
                u = f = t),
                m = m === t ? m : Lt(me(m), 0),
                w = w === t ? w : me(w),
                j -= f ? f.length : 0,
                i & D) {
                    var L = u
                      , H = f;
                    u = f = t
                }
                var J = P ? t : xa(e)
                  , te = [e, i, s, u, f, L, H, g, m, w];
                if (J && ig(te, J),
                e = te[0],
                i = te[1],
                s = te[2],
                u = te[3],
                f = te[4],
                w = te[9] = te[9] === t ? P ? 0 : e.length : Lt(te[9] - j, 0),
                !w && i & (pe | he) && (i &= ~(pe | he)),
                !i || i == ie)
                    var oe = qd(e, i, s);
                else
                    i == pe || i == he ? oe = zd(e, i, w) : (i == le || i == (ie | le)) && !f.length ? oe = Ud(e, i, s, u) : oe = Us.apply(t, te);
                var we = J ? xu : eh;
                return th(we(oe, te), e, i)
            }
            function ku(e, i, s, u) {
                return e === t || $r(e, Xi[s]) && !qe.call(u, s) ? i : e
            }
            function Vu(e, i, s, u, f, g) {
                return ct(e) && ct(i) && (g.set(i, e),
                Ls(e, i, t, Vu, g),
                g.delete(i)),
                e
            }
            function Hd(e) {
                return Tn(e) ? t : e
            }
            function Ku(e, i, s, u, f, g) {
                var m = s & F
                  , w = e.length
                  , P = i.length;
                if (w != P && !(m && P > w))
                    return !1;
                var j = g.get(e)
                  , L = g.get(i);
                if (j && L)
                    return j == i && L == e;
                var H = -1
                  , J = !0
                  , te = s & K ? new Ri : t;
                for (g.set(e, i),
                g.set(i, e); ++H < w; ) {
                    var oe = e[H]
                      , we = i[H];
                    if (u)
                        var ae = m ? u(we, oe, H, i, e, g) : u(oe, we, H, e, i, g);
                    if (ae !== t) {
                        if (ae)
                            continue;
                        J = !1;
                        break
                    }
                    if (te) {
                        if (!ko(i, function(Se, Ce) {
                            if (!vn(te, Ce) && (oe === Se || f(oe, Se, s, u, g)))
                                return te.push(Ce)
                        })) {
                            J = !1;
                            break
                        }
                    } else if (!(oe === we || f(oe, we, s, u, g))) {
                        J = !1;
                        break
                    }
                }
                return g.delete(e),
                g.delete(i),
                J
            }
            function kd(e, i, s, u, f, g, m) {
                switch (s) {
                case ke:
                    if (e.byteLength != i.byteLength || e.byteOffset != i.byteOffset)
                        return !1;
                    e = e.buffer,
                    i = i.buffer;
                case De:
                    return !(e.byteLength != i.byteLength || !g(new Ss(e), new Ss(i)));
                case T:
                case A:
                case $e:
                    return $r(+e, +i);
                case E:
                    return e.name == i.name && e.message == i.message;
                case st:
                case Xe:
                    return e == i + "";
                case be:
                    var w = Yo;
                case je:
                    var P = u & F;
                    if (w || (w = ms),
                    e.size != i.size && !P)
                        return !1;
                    var j = m.get(e);
                    if (j)
                        return j == i;
                    u |= K,
                    m.set(e, i);
                    var L = Ku(w(e), w(i), u, f, g, m);
                    return m.delete(e),
                    L;
                case Ze:
                    if (En)
                        return En.call(e) == En.call(i)
                }
                return !1
            }
            function Vd(e, i, s, u, f, g) {
                var m = s & F
                  , w = wa(e)
                  , P = w.length
                  , j = wa(i)
                  , L = j.length;
                if (P != L && !m)
                    return !1;
                for (var H = P; H--; ) {
                    var J = w[H];
                    if (!(m ? J in i : qe.call(i, J)))
                        return !1
                }
                var te = g.get(e)
                  , oe = g.get(i);
                if (te && oe)
                    return te == i && oe == e;
                var we = !0;
                g.set(e, i),
                g.set(i, e);
                for (var ae = m; ++H < P; ) {
                    J = w[H];
                    var Se = e[J]
                      , Ce = i[J];
                    if (u)
                        var dr = m ? u(Ce, Se, J, i, e, g) : u(Se, Ce, J, e, i, g);
                    if (!(dr === t ? Se === Ce || f(Se, Ce, s, u, g) : dr)) {
                        we = !1;
                        break
                    }
                    ae || (ae = J == "constructor")
                }
                if (we && !ae) {
                    var Zt = e.constructor
                      , gr = i.constructor;
                    Zt != gr && "constructor"in e && "constructor"in i && !(typeof Zt == "function" && Zt instanceof Zt && typeof gr == "function" && gr instanceof gr) && (we = !1)
                }
                return g.delete(e),
                g.delete(i),
                we
            }
            function Zr(e) {
                return Ca(Zu(e, t, ah), e + "")
            }
            function wa(e) {
                return fu(e, zt, Sa)
            }
            function Ea(e) {
                return fu(e, sr, Gu)
            }
            var xa = Ts ? function(e) {
                return Ts.get(e)
            }
            : Ba;
            function Vs(e) {
                for (var i = e.name + "", s = Qi[i], u = qe.call(Qi, i) ? s.length : 0; u--; ) {
                    var f = s[u]
                      , g = f.func;
                    if (g == null || g == e)
                        return f.name
                }
                return i
            }
            function nn(e) {
                var i = qe.call(p, "placeholder") ? p : e;
                return i.placeholder
            }
            function ne() {
                var e = p.iteratee || za;
                return e = e === za ? gu : e,
                arguments.length ? e(arguments[0], arguments[1]) : e
            }
            function Ks(e, i) {
                var s = e.__data__;
                return Qd(i) ? s[typeof i == "string" ? "string" : "hash"] : s.map
            }
            function Ia(e) {
                for (var i = zt(e), s = i.length; s--; ) {
                    var u = i[s]
                      , f = e[u];
                    i[s] = [u, f, Yu(f)]
                }
                return i
            }
            function Di(e, i) {
                var s = rp(e, i);
                return du(s) ? s : t
            }
            function Kd(e) {
                var i = qe.call(e, Ai)
                  , s = e[Ai];
                try {
                    e[Ai] = t;
                    var u = !0
                } catch {}
                var f = xs.call(e);
                return u && (i ? e[Ai] = s : delete e[Ai]),
                f
            }
            var Sa = Zo ? function(e) {
                return e == null ? [] : (e = We(e),
                ci(Zo(e), function(i) {
                    return Qc.call(e, i)
                }))
            }
            : Ha
              , Gu = Zo ? function(e) {
                for (var i = []; e; )
                    ui(i, Sa(e)),
                    e = Ps(e);
                return i
            }
            : Ha
              , Kt = Yt;
            (Qo && Kt(new Qo(new ArrayBuffer(1))) != ke || mn && Kt(new mn) != be || ea && Kt(ea.resolve()) != St || Zi && Kt(new Zi) != je || bn && Kt(new bn) != Ue) && (Kt = function(e) {
                var i = Yt(e)
                  , s = i == Pe ? e.constructor : t
                  , u = s ? Ni(s) : "";
                if (u)
                    switch (u) {
                    case Ap:
                        return ke;
                    case Cp:
                        return be;
                    case Rp:
                        return St;
                    case Tp:
                        return je;
                    case $p:
                        return Ue
                    }
                return i
            }
            );
            function Gd(e, i, s) {
                for (var u = -1, f = s.length; ++u < f; ) {
                    var g = s[u]
                      , m = g.size;
                    switch (g.type) {
                    case "drop":
                        e += m;
                        break;
                    case "dropRight":
                        i -= m;
                        break;
                    case "take":
                        i = Vt(i, e + m);
                        break;
                    case "takeRight":
                        e = Lt(e, i - m);
                        break
                    }
                }
                return {
                    start: e,
                    end: i
                }
            }
            function Wd(e) {
                var i = e.match(Ye);
                return i ? i[1].split(Rt) : []
            }
            function Wu(e, i, s) {
                i = di(i, e);
                for (var u = -1, f = i.length, g = !1; ++u < f; ) {
                    var m = Br(i[u]);
                    if (!(g = e != null && s(e, m)))
                        break;
                    e = e[m]
                }
                return g || ++u != f ? g : (f = e == null ? 0 : e.length,
                !!f && Qs(f) && Qr(m, f) && (_e(e) || Fi(e)))
            }
            function Jd(e) {
                var i = e.length
                  , s = new e.constructor(i);
                return i && typeof e[0] == "string" && qe.call(e, "index") && (s.index = e.index,
                s.input = e.input),
                s
            }
            function Ju(e) {
                return typeof e.constructor == "function" && !Cn(e) ? en(Ps(e)) : {}
            }
            function Yd(e, i, s) {
                var u = e.constructor;
                switch (i) {
                case De:
                    return _a(e);
                case T:
                case A:
                    return new u(+e);
                case ke:
                    return Dd(e, s);
                case ut:
                case Me:
                case Pt:
                case Ft:
                case Ut:
                case Bt:
                case Mt:
                case Gt:
                case tr:
                    return Tu(e, s);
                case be:
                    return new u;
                case $e:
                case Xe:
                    return new u(e);
                case st:
                    return Nd(e);
                case je:
                    return new u;
                case Ze:
                    return Fd(e)
                }
            }
            function Xd(e, i) {
                var s = i.length;
                if (!s)
                    return e;
                var u = s - 1;
                return i[u] = (s > 1 ? "& " : "") + i[u],
                i = i.join(s > 2 ? ", " : " "),
                e.replace(gt, `{
/* [wrapped with ` + i + `] */
`)
            }
            function Zd(e) {
                return _e(e) || Fi(e) || !!(eu && e && e[eu])
            }
            function Qr(e, i) {
                var s = typeof e;
                return i = i ?? V,
                !!i && (s == "number" || s != "symbol" && Ao.test(e)) && e > -1 && e % 1 == 0 && e < i
            }
            function Xt(e, i, s) {
                if (!ct(s))
                    return !1;
                var u = typeof i;
                return (u == "number" ? nr(s) && Qr(i, s.length) : u == "string" && i in s) ? $r(s[i], e) : !1
            }
            function Pa(e, i) {
                if (_e(e))
                    return !1;
                var s = typeof e;
                return s == "number" || s == "symbol" || s == "boolean" || e == null || pr(e) ? !0 : Ot.test(e) || !it.test(e) || i != null && e in We(i)
            }
            function Qd(e) {
                var i = typeof e;
                return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? e !== "__proto__" : e === null
            }
            function Oa(e) {
                var i = Vs(e)
                  , s = p[i];
                if (typeof s != "function" || !(i in Oe.prototype))
                    return !1;
                if (e === s)
                    return !0;
                var u = xa(s);
                return !!u && e === u[0]
            }
            function eg(e) {
                return !!Yc && Yc in e
            }
            var tg = ws ? ei : ka;
            function Cn(e) {
                var i = e && e.constructor
                  , s = typeof i == "function" && i.prototype || Xi;
                return e === s
            }
            function Yu(e) {
                return e === e && !ct(e)
            }
            function Xu(e, i) {
                return function(s) {
                    return s == null ? !1 : s[e] === i && (i !== t || e in We(s))
                }
            }
            function rg(e) {
                var i = Xs(e, function(u) {
                    return s.size === y && s.clear(),
                    u
                })
                  , s = i.cache;
                return i
            }
            function ig(e, i) {
                var s = e[1]
                  , u = i[1]
                  , f = s | u
                  , g = f < (ie | Ee | U)
                  , m = u == U && s == pe || u == U && s == W && e[7].length <= i[8] || u == (U | W) && i[7].length <= i[8] && s == pe;
                if (!(g || m))
                    return e;
                u & ie && (e[2] = i[2],
                f |= s & ie ? 0 : ge);
                var w = i[3];
                if (w) {
                    var P = e[3];
                    e[3] = P ? Du(P, w, i[4]) : w,
                    e[4] = P ? hi(e[3], O) : i[4]
                }
                return w = i[5],
                w && (P = e[5],
                e[5] = P ? Nu(P, w, i[6]) : w,
                e[6] = P ? hi(e[5], O) : i[6]),
                w = i[7],
                w && (e[7] = w),
                u & U && (e[8] = e[8] == null ? i[8] : Vt(e[8], i[8])),
                e[9] == null && (e[9] = i[9]),
                e[0] = i[0],
                e[1] = f,
                e
            }
            function ng(e) {
                var i = [];
                if (e != null)
                    for (var s in We(e))
                        i.push(s);
                return i
            }
            function sg(e) {
                return xs.call(e)
            }
            function Zu(e, i, s) {
                return i = Lt(i === t ? e.length - 1 : i, 0),
                function() {
                    for (var u = arguments, f = -1, g = Lt(u.length - i, 0), m = R(g); ++f < g; )
                        m[f] = u[i + f];
                    f = -1;
                    for (var w = R(i + 1); ++f < i; )
                        w[f] = u[f];
                    return w[i] = s(m),
                    qt(e, this, w)
                }
            }
            function Qu(e, i) {
                return i.length < 2 ? e : $i(e, Er(i, 0, -1))
            }
            function og(e, i) {
                for (var s = e.length, u = Vt(i.length, s), f = ir(e); u--; ) {
                    var g = i[u];
                    e[u] = Qr(g, s) ? f[g] : t
                }
                return e
            }
            function Aa(e, i) {
                if (!(i === "constructor" && typeof e[i] == "function") && i != "__proto__")
                    return e[i]
            }
            var eh = rh(xu)
              , Rn = wp || function(e, i) {
                return Ae.setTimeout(e, i)
            }
              , Ca = rh(Cd);
            function th(e, i, s) {
                var u = i + "";
                return Ca(e, Xd(u, ag(Wd(u), s)))
            }
            function rh(e) {
                var i = 0
                  , s = 0;
                return function() {
                    var u = Sp()
                      , f = ze - (u - s);
                    if (s = u,
                    f > 0) {
                        if (++i >= Te)
                            return arguments[0]
                    } else
                        i = 0;
                    return e.apply(t, arguments)
                }
            }
            function Gs(e, i) {
                var s = -1
                  , u = e.length
                  , f = u - 1;
                for (i = i === t ? u : i; ++s < i; ) {
                    var g = la(s, f)
                      , m = e[g];
                    e[g] = e[s],
                    e[s] = m
                }
                return e.length = i,
                e
            }
            var ih = rg(function(e) {
                var i = [];
                return e.charCodeAt(0) === 46 && i.push(""),
                e.replace(At, function(s, u, f, g) {
                    i.push(f ? g.replace(Eo, "$1") : u || s)
                }),
                i
            });
            function Br(e) {
                if (typeof e == "string" || pr(e))
                    return e;
                var i = e + "";
                return i == "0" && 1 / e == -ce ? "-0" : i
            }
            function Ni(e) {
                if (e != null) {
                    try {
                        return Es.call(e)
                    } catch {}
                    try {
                        return e + ""
                    } catch {}
                }
                return ""
            }
            function ag(e, i) {
                return _r(jr, function(s) {
                    var u = "_." + s[0];
                    i & s[1] && !vs(e, u) && e.push(u)
                }),
                e.sort()
            }
            function nh(e) {
                if (e instanceof Oe)
                    return e.clone();
                var i = new br(e.__wrapped__,e.__chain__);
                return i.__actions__ = ir(e.__actions__),
                i.__index__ = e.__index__,
                i.__values__ = e.__values__,
                i
            }
            function cg(e, i, s) {
                (s ? Xt(e, i, s) : i === t) ? i = 1 : i = Lt(me(i), 0);
                var u = e == null ? 0 : e.length;
                if (!u || i < 1)
                    return [];
                for (var f = 0, g = 0, m = R(Cs(u / i)); f < u; )
                    m[g++] = Er(e, f, f += i);
                return m
            }
            function ug(e) {
                for (var i = -1, s = e == null ? 0 : e.length, u = 0, f = []; ++i < s; ) {
                    var g = e[i];
                    g && (f[u++] = g)
                }
                return f
            }
            function hg() {
                var e = arguments.length;
                if (!e)
                    return [];
                for (var i = R(e - 1), s = arguments[0], u = e; u--; )
                    i[u - 1] = arguments[u];
                return ui(_e(s) ? ir(s) : [s], Ht(i, 1))
            }
            var lg = Ie(function(e, i) {
                return wt(e) ? In(e, Ht(i, 1, wt, !0)) : []
            })
              , fg = Ie(function(e, i) {
                var s = xr(i);
                return wt(s) && (s = t),
                wt(e) ? In(e, Ht(i, 1, wt, !0), ne(s, 2)) : []
            })
              , pg = Ie(function(e, i) {
                var s = xr(i);
                return wt(s) && (s = t),
                wt(e) ? In(e, Ht(i, 1, wt, !0), t, s) : []
            });
            function dg(e, i, s) {
                var u = e == null ? 0 : e.length;
                return u ? (i = s || i === t ? 1 : me(i),
                Er(e, i < 0 ? 0 : i, u)) : []
            }
            function gg(e, i, s) {
                var u = e == null ? 0 : e.length;
                return u ? (i = s || i === t ? 1 : me(i),
                i = u - i,
                Er(e, 0, i < 0 ? 0 : i)) : []
            }
            function yg(e, i) {
                return e && e.length ? qs(e, ne(i, 3), !0, !0) : []
            }
            function vg(e, i) {
                return e && e.length ? qs(e, ne(i, 3), !0) : []
            }
            function _g(e, i, s, u) {
                var f = e == null ? 0 : e.length;
                return f ? (s && typeof s != "number" && Xt(e, i, s) && (s = 0,
                u = f),
                hd(e, i, s, u)) : []
            }
            function sh(e, i, s) {
                var u = e == null ? 0 : e.length;
                if (!u)
                    return -1;
                var f = s == null ? 0 : me(s);
                return f < 0 && (f = Lt(u + f, 0)),
                _s(e, ne(i, 3), f)
            }
            function oh(e, i, s) {
                var u = e == null ? 0 : e.length;
                if (!u)
                    return -1;
                var f = u - 1;
                return s !== t && (f = me(s),
                f = s < 0 ? Lt(u + f, 0) : Vt(f, u - 1)),
                _s(e, ne(i, 3), f, !0)
            }
            function ah(e) {
                var i = e == null ? 0 : e.length;
                return i ? Ht(e, 1) : []
            }
            function mg(e) {
                var i = e == null ? 0 : e.length;
                return i ? Ht(e, ce) : []
            }
            function bg(e, i) {
                var s = e == null ? 0 : e.length;
                return s ? (i = i === t ? 1 : me(i),
                Ht(e, i)) : []
            }
            function wg(e) {
                for (var i = -1, s = e == null ? 0 : e.length, u = {}; ++i < s; ) {
                    var f = e[i];
                    u[f[0]] = f[1]
                }
                return u
            }
            function ch(e) {
                return e && e.length ? e[0] : t
            }
            function Eg(e, i, s) {
                var u = e == null ? 0 : e.length;
                if (!u)
                    return -1;
                var f = s == null ? 0 : me(s);
                return f < 0 && (f = Lt(u + f, 0)),
                Gi(e, i, f)
            }
            function xg(e) {
                var i = e == null ? 0 : e.length;
                return i ? Er(e, 0, -1) : []
            }
            var Ig = Ie(function(e) {
                var i = nt(e, ya);
                return i.length && i[0] === e[0] ? oa(i) : []
            })
              , Sg = Ie(function(e) {
                var i = xr(e)
                  , s = nt(e, ya);
                return i === xr(s) ? i = t : s.pop(),
                s.length && s[0] === e[0] ? oa(s, ne(i, 2)) : []
            })
              , Pg = Ie(function(e) {
                var i = xr(e)
                  , s = nt(e, ya);
                return i = typeof i == "function" ? i : t,
                i && s.pop(),
                s.length && s[0] === e[0] ? oa(s, t, i) : []
            });
            function Og(e, i) {
                return e == null ? "" : xp.call(e, i)
            }
            function xr(e) {
                var i = e == null ? 0 : e.length;
                return i ? e[i - 1] : t
            }
            function Ag(e, i, s) {
                var u = e == null ? 0 : e.length;
                if (!u)
                    return -1;
                var f = u;
                return s !== t && (f = me(s),
                f = f < 0 ? Lt(u + f, 0) : Vt(f, u - 1)),
                i === i ? ap(e, i, f) : _s(e, Bc, f, !0)
            }
            function Cg(e, i) {
                return e && e.length ? mu(e, me(i)) : t
            }
            var Rg = Ie(uh);
            function uh(e, i) {
                return e && e.length && i && i.length ? ha(e, i) : e
            }
            function Tg(e, i, s) {
                return e && e.length && i && i.length ? ha(e, i, ne(s, 2)) : e
            }
            function $g(e, i, s) {
                return e && e.length && i && i.length ? ha(e, i, t, s) : e
            }
            var Dg = Zr(function(e, i) {
                var s = e == null ? 0 : e.length
                  , u = ra(e, i);
                return Eu(e, nt(i, function(f) {
                    return Qr(f, s) ? +f : f
                }).sort($u)),
                u
            });
            function Ng(e, i) {
                var s = [];
                if (!(e && e.length))
                    return s;
                var u = -1
                  , f = []
                  , g = e.length;
                for (i = ne(i, 3); ++u < g; ) {
                    var m = e[u];
                    i(m, u, e) && (s.push(m),
                    f.push(u))
                }
                return Eu(e, f),
                s
            }
            function Ra(e) {
                return e == null ? e : Op.call(e)
            }
            function Fg(e, i, s) {
                var u = e == null ? 0 : e.length;
                return u ? (s && typeof s != "number" && Xt(e, i, s) ? (i = 0,
                s = u) : (i = i == null ? 0 : me(i),
                s = s === t ? u : me(s)),
                Er(e, i, s)) : []
            }
            function jg(e, i) {
                return Ms(e, i)
            }
            function Lg(e, i, s) {
                return pa(e, i, ne(s, 2))
            }
            function Mg(e, i) {
                var s = e == null ? 0 : e.length;
                if (s) {
                    var u = Ms(e, i);
                    if (u < s && $r(e[u], i))
                        return u
                }
                return -1
            }
            function qg(e, i) {
                return Ms(e, i, !0)
            }
            function zg(e, i, s) {
                return pa(e, i, ne(s, 2), !0)
            }
            function Ug(e, i) {
                var s = e == null ? 0 : e.length;
                if (s) {
                    var u = Ms(e, i, !0) - 1;
                    if ($r(e[u], i))
                        return u
                }
                return -1
            }
            function Bg(e) {
                return e && e.length ? Iu(e) : []
            }
            function Hg(e, i) {
                return e && e.length ? Iu(e, ne(i, 2)) : []
            }
            function kg(e) {
                var i = e == null ? 0 : e.length;
                return i ? Er(e, 1, i) : []
            }
            function Vg(e, i, s) {
                return e && e.length ? (i = s || i === t ? 1 : me(i),
                Er(e, 0, i < 0 ? 0 : i)) : []
            }
            function Kg(e, i, s) {
                var u = e == null ? 0 : e.length;
                return u ? (i = s || i === t ? 1 : me(i),
                i = u - i,
                Er(e, i < 0 ? 0 : i, u)) : []
            }
            function Gg(e, i) {
                return e && e.length ? qs(e, ne(i, 3), !1, !0) : []
            }
            function Wg(e, i) {
                return e && e.length ? qs(e, ne(i, 3)) : []
            }
            var Jg = Ie(function(e) {
                return pi(Ht(e, 1, wt, !0))
            })
              , Yg = Ie(function(e) {
                var i = xr(e);
                return wt(i) && (i = t),
                pi(Ht(e, 1, wt, !0), ne(i, 2))
            })
              , Xg = Ie(function(e) {
                var i = xr(e);
                return i = typeof i == "function" ? i : t,
                pi(Ht(e, 1, wt, !0), t, i)
            });
            function Zg(e) {
                return e && e.length ? pi(e) : []
            }
            function Qg(e, i) {
                return e && e.length ? pi(e, ne(i, 2)) : []
            }
            function ey(e, i) {
                return i = typeof i == "function" ? i : t,
                e && e.length ? pi(e, t, i) : []
            }
            function Ta(e) {
                if (!(e && e.length))
                    return [];
                var i = 0;
                return e = ci(e, function(s) {
                    if (wt(s))
                        return i = Lt(s.length, i),
                        !0
                }),
                Wo(i, function(s) {
                    return nt(e, Vo(s))
                })
            }
            function hh(e, i) {
                if (!(e && e.length))
                    return [];
                var s = Ta(e);
                return i == null ? s : nt(s, function(u) {
                    return qt(i, t, u)
                })
            }
            var ty = Ie(function(e, i) {
                return wt(e) ? In(e, i) : []
            })
              , ry = Ie(function(e) {
                return ga(ci(e, wt))
            })
              , iy = Ie(function(e) {
                var i = xr(e);
                return wt(i) && (i = t),
                ga(ci(e, wt), ne(i, 2))
            })
              , ny = Ie(function(e) {
                var i = xr(e);
                return i = typeof i == "function" ? i : t,
                ga(ci(e, wt), t, i)
            })
              , sy = Ie(Ta);
            function oy(e, i) {
                return Au(e || [], i || [], xn)
            }
            function ay(e, i) {
                return Au(e || [], i || [], On)
            }
            var cy = Ie(function(e) {
                var i = e.length
                  , s = i > 1 ? e[i - 1] : t;
                return s = typeof s == "function" ? (e.pop(),
                s) : t,
                hh(e, s)
            });
            function lh(e) {
                var i = p(e);
                return i.__chain__ = !0,
                i
            }
            function uy(e, i) {
                return i(e),
                e
            }
            function Ws(e, i) {
                return i(e)
            }
            var hy = Zr(function(e) {
                var i = e.length
                  , s = i ? e[0] : 0
                  , u = this.__wrapped__
                  , f = function(g) {
                    return ra(g, e)
                };
                return i > 1 || this.__actions__.length || !(u instanceof Oe) || !Qr(s) ? this.thru(f) : (u = u.slice(s, +s + (i ? 1 : 0)),
                u.__actions__.push({
                    func: Ws,
                    args: [f],
                    thisArg: t
                }),
                new br(u,this.__chain__).thru(function(g) {
                    return i && !g.length && g.push(t),
                    g
                }))
            });
            function ly() {
                return lh(this)
            }
            function fy() {
                return new br(this.value(),this.__chain__)
            }
            function py() {
                this.__values__ === t && (this.__values__ = Sh(this.value()));
                var e = this.__index__ >= this.__values__.length
                  , i = e ? t : this.__values__[this.__index__++];
                return {
                    done: e,
                    value: i
                }
            }
            function dy() {
                return this
            }
            function gy(e) {
                for (var i, s = this; s instanceof Ds; ) {
                    var u = nh(s);
                    u.__index__ = 0,
                    u.__values__ = t,
                    i ? f.__wrapped__ = u : i = u;
                    var f = u;
                    s = s.__wrapped__
                }
                return f.__wrapped__ = e,
                i
            }
            function yy() {
                var e = this.__wrapped__;
                if (e instanceof Oe) {
                    var i = e;
                    return this.__actions__.length && (i = new Oe(this)),
                    i = i.reverse(),
                    i.__actions__.push({
                        func: Ws,
                        args: [Ra],
                        thisArg: t
                    }),
                    new br(i,this.__chain__)
                }
                return this.thru(Ra)
            }
            function vy() {
                return Ou(this.__wrapped__, this.__actions__)
            }
            var _y = zs(function(e, i, s) {
                qe.call(e, s) ? ++e[s] : Yr(e, s, 1)
            });
            function my(e, i, s) {
                var u = _e(e) ? zc : ud;
                return s && Xt(e, i, s) && (i = t),
                u(e, ne(i, 3))
            }
            function by(e, i) {
                var s = _e(e) ? ci : hu;
                return s(e, ne(i, 3))
            }
            var wy = Mu(sh)
              , Ey = Mu(oh);
            function xy(e, i) {
                return Ht(Js(e, i), 1)
            }
            function Iy(e, i) {
                return Ht(Js(e, i), ce)
            }
            function Sy(e, i, s) {
                return s = s === t ? 1 : me(s),
                Ht(Js(e, i), s)
            }
            function fh(e, i) {
                var s = _e(e) ? _r : fi;
                return s(e, ne(i, 3))
            }
            function ph(e, i) {
                var s = _e(e) ? kf : uu;
                return s(e, ne(i, 3))
            }
            var Py = zs(function(e, i, s) {
                qe.call(e, s) ? e[s].push(i) : Yr(e, s, [i])
            });
            function Oy(e, i, s, u) {
                e = nr(e) ? e : on(e),
                s = s && !u ? me(s) : 0;
                var f = e.length;
                return s < 0 && (s = Lt(f + s, 0)),
                eo(e) ? s <= f && e.indexOf(i, s) > -1 : !!f && Gi(e, i, s) > -1
            }
            var Ay = Ie(function(e, i, s) {
                var u = -1
                  , f = typeof i == "function"
                  , g = nr(e) ? R(e.length) : [];
                return fi(e, function(m) {
                    g[++u] = f ? qt(i, m, s) : Sn(m, i, s)
                }),
                g
            })
              , Cy = zs(function(e, i, s) {
                Yr(e, s, i)
            });
            function Js(e, i) {
                var s = _e(e) ? nt : yu;
                return s(e, ne(i, 3))
            }
            function Ry(e, i, s, u) {
                return e == null ? [] : (_e(i) || (i = i == null ? [] : [i]),
                s = u ? t : s,
                _e(s) || (s = s == null ? [] : [s]),
                bu(e, i, s))
            }
            var Ty = zs(function(e, i, s) {
                e[s ? 0 : 1].push(i)
            }, function() {
                return [[], []]
            });
            function $y(e, i, s) {
                var u = _e(e) ? Ho : kc
                  , f = arguments.length < 3;
                return u(e, ne(i, 4), s, f, fi)
            }
            function Dy(e, i, s) {
                var u = _e(e) ? Vf : kc
                  , f = arguments.length < 3;
                return u(e, ne(i, 4), s, f, uu)
            }
            function Ny(e, i) {
                var s = _e(e) ? ci : hu;
                return s(e, Zs(ne(i, 3)))
            }
            function Fy(e) {
                var i = _e(e) ? su : Od;
                return i(e)
            }
            function jy(e, i, s) {
                (s ? Xt(e, i, s) : i === t) ? i = 1 : i = me(i);
                var u = _e(e) ? nd : Ad;
                return u(e, i)
            }
            function Ly(e) {
                var i = _e(e) ? sd : Rd;
                return i(e)
            }
            function My(e) {
                if (e == null)
                    return 0;
                if (nr(e))
                    return eo(e) ? Ji(e) : e.length;
                var i = Kt(e);
                return i == be || i == je ? e.size : ca(e).length
            }
            function qy(e, i, s) {
                var u = _e(e) ? ko : Td;
                return s && Xt(e, i, s) && (i = t),
                u(e, ne(i, 3))
            }
            var zy = Ie(function(e, i) {
                if (e == null)
                    return [];
                var s = i.length;
                return s > 1 && Xt(e, i[0], i[1]) ? i = [] : s > 2 && Xt(i[0], i[1], i[2]) && (i = [i[0]]),
                bu(e, Ht(i, 1), [])
            })
              , Ys = bp || function() {
                return Ae.Date.now()
            }
            ;
            function Uy(e, i) {
                if (typeof i != "function")
                    throw new mr(l);
                return e = me(e),
                function() {
                    if (--e < 1)
                        return i.apply(this, arguments)
                }
            }
            function dh(e, i, s) {
                return i = s ? t : i,
                i = e && i == null ? e.length : i,
                Xr(e, U, t, t, t, t, i)
            }
            function gh(e, i) {
                var s;
                if (typeof i != "function")
                    throw new mr(l);
                return e = me(e),
                function() {
                    return --e > 0 && (s = i.apply(this, arguments)),
                    e <= 1 && (i = t),
                    s
                }
            }
            var $a = Ie(function(e, i, s) {
                var u = ie;
                if (s.length) {
                    var f = hi(s, nn($a));
                    u |= le
                }
                return Xr(e, u, i, s, f)
            })
              , yh = Ie(function(e, i, s) {
                var u = ie | Ee;
                if (s.length) {
                    var f = hi(s, nn(yh));
                    u |= le
                }
                return Xr(i, u, e, s, f)
            });
            function vh(e, i, s) {
                i = s ? t : i;
                var u = Xr(e, pe, t, t, t, t, t, i);
                return u.placeholder = vh.placeholder,
                u
            }
            function _h(e, i, s) {
                i = s ? t : i;
                var u = Xr(e, he, t, t, t, t, t, i);
                return u.placeholder = _h.placeholder,
                u
            }
            function mh(e, i, s) {
                var u, f, g, m, w, P, j = 0, L = !1, H = !1, J = !0;
                if (typeof e != "function")
                    throw new mr(l);
                i = Ir(i) || 0,
                ct(s) && (L = !!s.leading,
                H = "maxWait"in s,
                g = H ? Lt(Ir(s.maxWait) || 0, i) : g,
                J = "trailing"in s ? !!s.trailing : J);
                function te(Et) {
                    var Dr = u
                      , ri = f;
                    return u = f = t,
                    j = Et,
                    m = e.apply(ri, Dr),
                    m
                }
                function oe(Et) {
                    return j = Et,
                    w = Rn(Se, i),
                    L ? te(Et) : m
                }
                function we(Et) {
                    var Dr = Et - P
                      , ri = Et - j
                      , Mh = i - Dr;
                    return H ? Vt(Mh, g - ri) : Mh
                }
                function ae(Et) {
                    var Dr = Et - P
                      , ri = Et - j;
                    return P === t || Dr >= i || Dr < 0 || H && ri >= g
                }
                function Se() {
                    var Et = Ys();
                    if (ae(Et))
                        return Ce(Et);
                    w = Rn(Se, we(Et))
                }
                function Ce(Et) {
                    return w = t,
                    J && u ? te(Et) : (u = f = t,
                    m)
                }
                function dr() {
                    w !== t && Cu(w),
                    j = 0,
                    u = P = f = w = t
                }
                function Zt() {
                    return w === t ? m : Ce(Ys())
                }
                function gr() {
                    var Et = Ys()
                      , Dr = ae(Et);
                    if (u = arguments,
                    f = this,
                    P = Et,
                    Dr) {
                        if (w === t)
                            return oe(P);
                        if (H)
                            return Cu(w),
                            w = Rn(Se, i),
                            te(P)
                    }
                    return w === t && (w = Rn(Se, i)),
                    m
                }
                return gr.cancel = dr,
                gr.flush = Zt,
                gr
            }
            var By = Ie(function(e, i) {
                return cu(e, 1, i)
            })
              , Hy = Ie(function(e, i, s) {
                return cu(e, Ir(i) || 0, s)
            });
            function ky(e) {
                return Xr(e, ye)
            }
            function Xs(e, i) {
                if (typeof e != "function" || i != null && typeof i != "function")
                    throw new mr(l);
                var s = function() {
                    var u = arguments
                      , f = i ? i.apply(this, u) : u[0]
                      , g = s.cache;
                    if (g.has(f))
                        return g.get(f);
                    var m = e.apply(this, u);
                    return s.cache = g.set(f, m) || g,
                    m
                };
                return s.cache = new (Xs.Cache || Jr),
                s
            }
            Xs.Cache = Jr;
            function Zs(e) {
                if (typeof e != "function")
                    throw new mr(l);
                return function() {
                    var i = arguments;
                    switch (i.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, i[0]);
                    case 2:
                        return !e.call(this, i[0], i[1]);
                    case 3:
                        return !e.call(this, i[0], i[1], i[2])
                    }
                    return !e.apply(this, i)
                }
            }
            function Vy(e) {
                return gh(2, e)
            }
            var Ky = $d(function(e, i) {
                i = i.length == 1 && _e(i[0]) ? nt(i[0], lr(ne())) : nt(Ht(i, 1), lr(ne()));
                var s = i.length;
                return Ie(function(u) {
                    for (var f = -1, g = Vt(u.length, s); ++f < g; )
                        u[f] = i[f].call(this, u[f]);
                    return qt(e, this, u)
                })
            })
              , Da = Ie(function(e, i) {
                var s = hi(i, nn(Da));
                return Xr(e, le, t, i, s)
            })
              , bh = Ie(function(e, i) {
                var s = hi(i, nn(bh));
                return Xr(e, D, t, i, s)
            })
              , Gy = Zr(function(e, i) {
                return Xr(e, W, t, t, t, i)
            });
            function Wy(e, i) {
                if (typeof e != "function")
                    throw new mr(l);
                return i = i === t ? i : me(i),
                Ie(e, i)
            }
            function Jy(e, i) {
                if (typeof e != "function")
                    throw new mr(l);
                return i = i == null ? 0 : Lt(me(i), 0),
                Ie(function(s) {
                    var u = s[i]
                      , f = gi(s, 0, i);
                    return u && ui(f, u),
                    qt(e, this, f)
                })
            }
            function Yy(e, i, s) {
                var u = !0
                  , f = !0;
                if (typeof e != "function")
                    throw new mr(l);
                return ct(s) && (u = "leading"in s ? !!s.leading : u,
                f = "trailing"in s ? !!s.trailing : f),
                mh(e, i, {
                    leading: u,
                    maxWait: i,
                    trailing: f
                })
            }
            function Xy(e) {
                return dh(e, 1)
            }
            function Zy(e, i) {
                return Da(va(i), e)
            }
            function Qy() {
                if (!arguments.length)
                    return [];
                var e = arguments[0];
                return _e(e) ? e : [e]
            }
            function e0(e) {
                return wr(e, z)
            }
            function t0(e, i) {
                return i = typeof i == "function" ? i : t,
                wr(e, z, i)
            }
            function r0(e) {
                return wr(e, q | z)
            }
            function i0(e, i) {
                return i = typeof i == "function" ? i : t,
                wr(e, q | z, i)
            }
            function n0(e, i) {
                return i == null || au(e, i, zt(i))
            }
            function $r(e, i) {
                return e === i || e !== e && i !== i
            }
            var s0 = ks(sa)
              , o0 = ks(function(e, i) {
                return e >= i
            })
              , Fi = pu(function() {
                return arguments
            }()) ? pu : function(e) {
                return yt(e) && qe.call(e, "callee") && !Qc.call(e, "callee")
            }
              , _e = R.isArray
              , a0 = Jt ? lr(Jt) : gd;
            function nr(e) {
                return e != null && Qs(e.length) && !ei(e)
            }
            function wt(e) {
                return yt(e) && nr(e)
            }
            function c0(e) {
                return e === !0 || e === !1 || yt(e) && Yt(e) == T
            }
            var yi = Ep || ka
              , u0 = Cr ? lr(Cr) : yd;
            function h0(e) {
                return yt(e) && e.nodeType === 1 && !Tn(e)
            }
            function l0(e) {
                if (e == null)
                    return !0;
                if (nr(e) && (_e(e) || typeof e == "string" || typeof e.splice == "function" || yi(e) || sn(e) || Fi(e)))
                    return !e.length;
                var i = Kt(e);
                if (i == be || i == je)
                    return !e.size;
                if (Cn(e))
                    return !ca(e).length;
                for (var s in e)
                    if (qe.call(e, s))
                        return !1;
                return !0
            }
            function f0(e, i) {
                return Pn(e, i)
            }
            function p0(e, i, s) {
                s = typeof s == "function" ? s : t;
                var u = s ? s(e, i) : t;
                return u === t ? Pn(e, i, t, s) : !!u
            }
            function Na(e) {
                if (!yt(e))
                    return !1;
                var i = Yt(e);
                return i == E || i == h || typeof e.message == "string" && typeof e.name == "string" && !Tn(e)
            }
            function d0(e) {
                return typeof e == "number" && tu(e)
            }
            function ei(e) {
                if (!ct(e))
                    return !1;
                var i = Yt(e);
                return i == ee || i == fe || i == $ || i == _t
            }
            function wh(e) {
                return typeof e == "number" && e == me(e)
            }
            function Qs(e) {
                return typeof e == "number" && e > -1 && e % 1 == 0 && e <= V
            }
            function ct(e) {
                var i = typeof e;
                return e != null && (i == "object" || i == "function")
            }
            function yt(e) {
                return e != null && typeof e == "object"
            }
            var Eh = vr ? lr(vr) : _d;
            function g0(e, i) {
                return e === i || aa(e, i, Ia(i))
            }
            function y0(e, i, s) {
                return s = typeof s == "function" ? s : t,
                aa(e, i, Ia(i), s)
            }
            function v0(e) {
                return xh(e) && e != +e
            }
            function _0(e) {
                if (tg(e))
                    throw new de(c);
                return du(e)
            }
            function m0(e) {
                return e === null
            }
            function b0(e) {
                return e == null
            }
            function xh(e) {
                return typeof e == "number" || yt(e) && Yt(e) == $e
            }
            function Tn(e) {
                if (!yt(e) || Yt(e) != Pe)
                    return !1;
                var i = Ps(e);
                if (i === null)
                    return !0;
                var s = qe.call(i, "constructor") && i.constructor;
                return typeof s == "function" && s instanceof s && Es.call(s) == yp
            }
            var Fa = qr ? lr(qr) : md;
            function w0(e) {
                return wh(e) && e >= -V && e <= V
            }
            var Ih = yn ? lr(yn) : bd;
            function eo(e) {
                return typeof e == "string" || !_e(e) && yt(e) && Yt(e) == Xe
            }
            function pr(e) {
                return typeof e == "symbol" || yt(e) && Yt(e) == Ze
            }
            var sn = Oi ? lr(Oi) : wd;
            function E0(e) {
                return e === t
            }
            function x0(e) {
                return yt(e) && Kt(e) == Ue
            }
            function I0(e) {
                return yt(e) && Yt(e) == Qe
            }
            var S0 = ks(ua)
              , P0 = ks(function(e, i) {
                return e <= i
            });
            function Sh(e) {
                if (!e)
                    return [];
                if (nr(e))
                    return eo(e) ? Rr(e) : ir(e);
                if (_n && e[_n])
                    return np(e[_n]());
                var i = Kt(e)
                  , s = i == be ? Yo : i == je ? ms : on;
                return s(e)
            }
            function ti(e) {
                if (!e)
                    return e === 0 ? e : 0;
                if (e = Ir(e),
                e === ce || e === -ce) {
                    var i = e < 0 ? -1 : 1;
                    return i * B
                }
                return e === e ? e : 0
            }
            function me(e) {
                var i = ti(e)
                  , s = i % 1;
                return i === i ? s ? i - s : i : 0
            }
            function Ph(e) {
                return e ? Ti(me(e), 0, G) : 0
            }
            function Ir(e) {
                if (typeof e == "number")
                    return e;
                if (pr(e))
                    return k;
                if (ct(e)) {
                    var i = typeof e.valueOf == "function" ? e.valueOf() : e;
                    e = ct(i) ? i + "" : i
                }
                if (typeof e != "string")
                    return e === 0 ? e : +e;
                e = Vc(e);
                var s = So.test(e);
                return s || Oo.test(e) ? ve(e.slice(2), s ? 2 : 8) : Io.test(e) ? k : +e
            }
            function Oh(e) {
                return Ur(e, sr(e))
            }
            function O0(e) {
                return e ? Ti(me(e), -V, V) : e === 0 ? e : 0
            }
            function Le(e) {
                return e == null ? "" : fr(e)
            }
            var A0 = tn(function(e, i) {
                if (Cn(i) || nr(i)) {
                    Ur(i, zt(i), e);
                    return
                }
                for (var s in i)
                    qe.call(i, s) && xn(e, s, i[s])
            })
              , Ah = tn(function(e, i) {
                Ur(i, sr(i), e)
            })
              , to = tn(function(e, i, s, u) {
                Ur(i, sr(i), e, u)
            })
              , C0 = tn(function(e, i, s, u) {
                Ur(i, zt(i), e, u)
            })
              , R0 = Zr(ra);
            function T0(e, i) {
                var s = en(e);
                return i == null ? s : ou(s, i)
            }
            var $0 = Ie(function(e, i) {
                e = We(e);
                var s = -1
                  , u = i.length
                  , f = u > 2 ? i[2] : t;
                for (f && Xt(i[0], i[1], f) && (u = 1); ++s < u; )
                    for (var g = i[s], m = sr(g), w = -1, P = m.length; ++w < P; ) {
                        var j = m[w]
                          , L = e[j];
                        (L === t || $r(L, Xi[j]) && !qe.call(e, j)) && (e[j] = g[j])
                    }
                return e
            })
              , D0 = Ie(function(e) {
                return e.push(t, Vu),
                qt(Ch, t, e)
            });
            function N0(e, i) {
                return Uc(e, ne(i, 3), zr)
            }
            function F0(e, i) {
                return Uc(e, ne(i, 3), na)
            }
            function j0(e, i) {
                return e == null ? e : ia(e, ne(i, 3), sr)
            }
            function L0(e, i) {
                return e == null ? e : lu(e, ne(i, 3), sr)
            }
            function M0(e, i) {
                return e && zr(e, ne(i, 3))
            }
            function q0(e, i) {
                return e && na(e, ne(i, 3))
            }
            function z0(e) {
                return e == null ? [] : js(e, zt(e))
            }
            function U0(e) {
                return e == null ? [] : js(e, sr(e))
            }
            function ja(e, i, s) {
                var u = e == null ? t : $i(e, i);
                return u === t ? s : u
            }
            function B0(e, i) {
                return e != null && Wu(e, i, ld)
            }
            function La(e, i) {
                return e != null && Wu(e, i, fd)
            }
            var H0 = zu(function(e, i, s) {
                i != null && typeof i.toString != "function" && (i = xs.call(i)),
                e[i] = s
            }, qa(or))
              , k0 = zu(function(e, i, s) {
                i != null && typeof i.toString != "function" && (i = xs.call(i)),
                qe.call(e, i) ? e[i].push(s) : e[i] = [s]
            }, ne)
              , V0 = Ie(Sn);
            function zt(e) {
                return nr(e) ? nu(e) : ca(e)
            }
            function sr(e) {
                return nr(e) ? nu(e, !0) : Ed(e)
            }
            function K0(e, i) {
                var s = {};
                return i = ne(i, 3),
                zr(e, function(u, f, g) {
                    Yr(s, i(u, f, g), u)
                }),
                s
            }
            function G0(e, i) {
                var s = {};
                return i = ne(i, 3),
                zr(e, function(u, f, g) {
                    Yr(s, f, i(u, f, g))
                }),
                s
            }
            var W0 = tn(function(e, i, s) {
                Ls(e, i, s)
            })
              , Ch = tn(function(e, i, s, u) {
                Ls(e, i, s, u)
            })
              , J0 = Zr(function(e, i) {
                var s = {};
                if (e == null)
                    return s;
                var u = !1;
                i = nt(i, function(g) {
                    return g = di(g, e),
                    u || (u = g.length > 1),
                    g
                }),
                Ur(e, Ea(e), s),
                u && (s = wr(s, q | C | z, Hd));
                for (var f = i.length; f--; )
                    da(s, i[f]);
                return s
            });
            function Y0(e, i) {
                return Rh(e, Zs(ne(i)))
            }
            var X0 = Zr(function(e, i) {
                return e == null ? {} : Id(e, i)
            });
            function Rh(e, i) {
                if (e == null)
                    return {};
                var s = nt(Ea(e), function(u) {
                    return [u]
                });
                return i = ne(i),
                wu(e, s, function(u, f) {
                    return i(u, f[0])
                })
            }
            function Z0(e, i, s) {
                i = di(i, e);
                var u = -1
                  , f = i.length;
                for (f || (f = 1,
                e = t); ++u < f; ) {
                    var g = e == null ? t : e[Br(i[u])];
                    g === t && (u = f,
                    g = s),
                    e = ei(g) ? g.call(e) : g
                }
                return e
            }
            function Q0(e, i, s) {
                return e == null ? e : On(e, i, s)
            }
            function ev(e, i, s, u) {
                return u = typeof u == "function" ? u : t,
                e == null ? e : On(e, i, s, u)
            }
            var Th = Hu(zt)
              , $h = Hu(sr);
            function tv(e, i, s) {
                var u = _e(e)
                  , f = u || yi(e) || sn(e);
                if (i = ne(i, 4),
                s == null) {
                    var g = e && e.constructor;
                    f ? s = u ? new g : [] : ct(e) ? s = ei(g) ? en(Ps(e)) : {} : s = {}
                }
                return (f ? _r : zr)(e, function(m, w, P) {
                    return i(s, m, w, P)
                }),
                s
            }
            function rv(e, i) {
                return e == null ? !0 : da(e, i)
            }
            function iv(e, i, s) {
                return e == null ? e : Pu(e, i, va(s))
            }
            function nv(e, i, s, u) {
                return u = typeof u == "function" ? u : t,
                e == null ? e : Pu(e, i, va(s), u)
            }
            function on(e) {
                return e == null ? [] : Jo(e, zt(e))
            }
            function sv(e) {
                return e == null ? [] : Jo(e, sr(e))
            }
            function ov(e, i, s) {
                return s === t && (s = i,
                i = t),
                s !== t && (s = Ir(s),
                s = s === s ? s : 0),
                i !== t && (i = Ir(i),
                i = i === i ? i : 0),
                Ti(Ir(e), i, s)
            }
            function av(e, i, s) {
                return i = ti(i),
                s === t ? (s = i,
                i = 0) : s = ti(s),
                e = Ir(e),
                pd(e, i, s)
            }
            function cv(e, i, s) {
                if (s && typeof s != "boolean" && Xt(e, i, s) && (i = s = t),
                s === t && (typeof i == "boolean" ? (s = i,
                i = t) : typeof e == "boolean" && (s = e,
                e = t)),
                e === t && i === t ? (e = 0,
                i = 1) : (e = ti(e),
                i === t ? (i = e,
                e = 0) : i = ti(i)),
                e > i) {
                    var u = e;
                    e = i,
                    i = u
                }
                if (s || e % 1 || i % 1) {
                    var f = ru();
                    return Vt(e + f * (i - e + Ke("1e-" + ((f + "").length - 1))), i)
                }
                return la(e, i)
            }
            var uv = rn(function(e, i, s) {
                return i = i.toLowerCase(),
                e + (s ? Dh(i) : i)
            });
            function Dh(e) {
                return Ma(Le(e).toLowerCase())
            }
            function Nh(e) {
                return e = Le(e),
                e && e.replace(Kr, Qf).replace(zo, "")
            }
            function hv(e, i, s) {
                e = Le(e),
                i = fr(i);
                var u = e.length;
                s = s === t ? u : Ti(me(s), 0, u);
                var f = s;
                return s -= i.length,
                s >= 0 && e.slice(s, f) == i
            }
            function lv(e) {
                return e = Le(e),
                e && rt.test(e) ? e.replace(Ei, ep) : e
            }
            function fv(e) {
                return e = Le(e),
                e && Ct.test(e) ? e.replace(pt, "\\$&") : e
            }
            var pv = rn(function(e, i, s) {
                return e + (s ? "-" : "") + i.toLowerCase()
            })
              , dv = rn(function(e, i, s) {
                return e + (s ? " " : "") + i.toLowerCase()
            })
              , gv = Lu("toLowerCase");
            function yv(e, i, s) {
                e = Le(e),
                i = me(i);
                var u = i ? Ji(e) : 0;
                if (!i || u >= i)
                    return e;
                var f = (i - u) / 2;
                return Hs(Rs(f), s) + e + Hs(Cs(f), s)
            }
            function vv(e, i, s) {
                e = Le(e),
                i = me(i);
                var u = i ? Ji(e) : 0;
                return i && u < i ? e + Hs(i - u, s) : e
            }
            function _v(e, i, s) {
                e = Le(e),
                i = me(i);
                var u = i ? Ji(e) : 0;
                return i && u < i ? Hs(i - u, s) + e : e
            }
            function mv(e, i, s) {
                return s || i == null ? i = 0 : i && (i = +i),
                Pp(Le(e).replace(dt, ""), i || 0)
            }
            function bv(e, i, s) {
                return (s ? Xt(e, i, s) : i === t) ? i = 1 : i = me(i),
                fa(Le(e), i)
            }
            function wv() {
                var e = arguments
                  , i = Le(e[0]);
                return e.length < 3 ? i : i.replace(e[1], e[2])
            }
            var Ev = rn(function(e, i, s) {
                return e + (s ? "_" : "") + i.toLowerCase()
            });
            function xv(e, i, s) {
                return s && typeof s != "number" && Xt(e, i, s) && (i = s = t),
                s = s === t ? G : s >>> 0,
                s ? (e = Le(e),
                e && (typeof i == "string" || i != null && !Fa(i)) && (i = fr(i),
                !i && Wi(e)) ? gi(Rr(e), 0, s) : e.split(i, s)) : []
            }
            var Iv = rn(function(e, i, s) {
                return e + (s ? " " : "") + Ma(i)
            });
            function Sv(e, i, s) {
                return e = Le(e),
                s = s == null ? 0 : Ti(me(s), 0, e.length),
                i = fr(i),
                e.slice(s, s + i.length) == i
            }
            function Pv(e, i, s) {
                var u = p.templateSettings;
                s && Xt(e, i, s) && (i = t),
                e = Le(e),
                i = to({}, i, u, ku);
                var f = to({}, i.imports, u.imports, ku), g = zt(f), m = Jo(f, g), w, P, j = 0, L = i.interpolate || zi, H = "__p += '", J = Xo((i.escape || zi).source + "|" + L.source + "|" + (L === at ? xo : zi).source + "|" + (i.evaluate || zi).source + "|$", "g"), te = "//# sourceURL=" + (qe.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Uo + "]") + `
`;
                e.replace(J, function(ae, Se, Ce, dr, Zt, gr) {
                    return Ce || (Ce = dr),
                    H += e.slice(j, gr).replace(Co, tp),
                    Se && (w = !0,
                    H += `' +
__e(` + Se + `) +
'`),
                    Zt && (P = !0,
                    H += `';
` + Zt + `;
__p += '`),
                    Ce && (H += `' +
((__t = (` + Ce + `)) == null ? '' : __t) +
'`),
                    j = gr + ae.length,
                    ae
                }),
                H += `';
`;
                var oe = qe.call(i, "variable") && i.variable;
                if (!oe)
                    H = `with (obj) {
` + H + `
}
`;
                else if (wo.test(oe))
                    throw new de(d);
                H = (P ? H.replace(Lr, "") : H).replace(Wt, "$1").replace(Vr, "$1;"),
                H = "function(" + (oe || "obj") + `) {
` + (oe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (w ? ", __e = _.escape" : "") + (P ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + H + `return __p
}`;
                var we = jh(function() {
                    return Fe(g, te + "return " + H).apply(t, m)
                });
                if (we.source = H,
                Na(we))
                    throw we;
                return we
            }
            function Ov(e) {
                return Le(e).toLowerCase()
            }
            function Av(e) {
                return Le(e).toUpperCase()
            }
            function Cv(e, i, s) {
                if (e = Le(e),
                e && (s || i === t))
                    return Vc(e);
                if (!e || !(i = fr(i)))
                    return e;
                var u = Rr(e)
                  , f = Rr(i)
                  , g = Kc(u, f)
                  , m = Gc(u, f) + 1;
                return gi(u, g, m).join("")
            }
            function Rv(e, i, s) {
                if (e = Le(e),
                e && (s || i === t))
                    return e.slice(0, Jc(e) + 1);
                if (!e || !(i = fr(i)))
                    return e;
                var u = Rr(e)
                  , f = Gc(u, Rr(i)) + 1;
                return gi(u, 0, f).join("")
            }
            function Tv(e, i, s) {
                if (e = Le(e),
                e && (s || i === t))
                    return e.replace(dt, "");
                if (!e || !(i = fr(i)))
                    return e;
                var u = Rr(e)
                  , f = Kc(u, Rr(i));
                return gi(u, f).join("")
            }
            function $v(e, i) {
                var s = re
                  , u = ue;
                if (ct(i)) {
                    var f = "separator"in i ? i.separator : f;
                    s = "length"in i ? me(i.length) : s,
                    u = "omission"in i ? fr(i.omission) : u
                }
                e = Le(e);
                var g = e.length;
                if (Wi(e)) {
                    var m = Rr(e);
                    g = m.length
                }
                if (s >= g)
                    return e;
                var w = s - Ji(u);
                if (w < 1)
                    return u;
                var P = m ? gi(m, 0, w).join("") : e.slice(0, w);
                if (f === t)
                    return P + u;
                if (m && (w += P.length - w),
                Fa(f)) {
                    if (e.slice(w).search(f)) {
                        var j, L = P;
                        for (f.global || (f = Xo(f.source, Le(yr.exec(f)) + "g")),
                        f.lastIndex = 0; j = f.exec(L); )
                            var H = j.index;
                        P = P.slice(0, H === t ? w : H)
                    }
                } else if (e.indexOf(fr(f), w) != w) {
                    var J = P.lastIndexOf(f);
                    J > -1 && (P = P.slice(0, J))
                }
                return P + u
            }
            function Dv(e) {
                return e = Le(e),
                e && ht.test(e) ? e.replace(oi, cp) : e
            }
            var Nv = rn(function(e, i, s) {
                return e + (s ? " " : "") + i.toUpperCase()
            })
              , Ma = Lu("toUpperCase");
            function Fh(e, i, s) {
                return e = Le(e),
                i = s ? t : i,
                i === t ? ip(e) ? lp(e) : Wf(e) : e.match(i) || []
            }
            var jh = Ie(function(e, i) {
                try {
                    return qt(e, t, i)
                } catch (s) {
                    return Na(s) ? s : new de(s)
                }
            })
              , Fv = Zr(function(e, i) {
                return _r(i, function(s) {
                    s = Br(s),
                    Yr(e, s, $a(e[s], e))
                }),
                e
            });
            function jv(e) {
                var i = e == null ? 0 : e.length
                  , s = ne();
                return e = i ? nt(e, function(u) {
                    if (typeof u[1] != "function")
                        throw new mr(l);
                    return [s(u[0]), u[1]]
                }) : [],
                Ie(function(u) {
                    for (var f = -1; ++f < i; ) {
                        var g = e[f];
                        if (qt(g[0], this, u))
                            return qt(g[1], this, u)
                    }
                })
            }
            function Lv(e) {
                return cd(wr(e, q))
            }
            function qa(e) {
                return function() {
                    return e
                }
            }
            function Mv(e, i) {
                return e == null || e !== e ? i : e
            }
            var qv = qu()
              , zv = qu(!0);
            function or(e) {
                return e
            }
            function za(e) {
                return gu(typeof e == "function" ? e : wr(e, q))
            }
            function Uv(e) {
                return vu(wr(e, q))
            }
            function Bv(e, i) {
                return _u(e, wr(i, q))
            }
            var Hv = Ie(function(e, i) {
                return function(s) {
                    return Sn(s, e, i)
                }
            })
              , kv = Ie(function(e, i) {
                return function(s) {
                    return Sn(e, s, i)
                }
            });
            function Ua(e, i, s) {
                var u = zt(i)
                  , f = js(i, u);
                s == null && !(ct(i) && (f.length || !u.length)) && (s = i,
                i = e,
                e = this,
                f = js(i, zt(i)));
                var g = !(ct(s) && "chain"in s) || !!s.chain
                  , m = ei(e);
                return _r(f, function(w) {
                    var P = i[w];
                    e[w] = P,
                    m && (e.prototype[w] = function() {
                        var j = this.__chain__;
                        if (g || j) {
                            var L = e(this.__wrapped__)
                              , H = L.__actions__ = ir(this.__actions__);
                            return H.push({
                                func: P,
                                args: arguments,
                                thisArg: e
                            }),
                            L.__chain__ = j,
                            L
                        }
                        return P.apply(e, ui([this.value()], arguments))
                    }
                    )
                }),
                e
            }
            function Vv() {
                return Ae._ === this && (Ae._ = vp),
                this
            }
            function Ba() {}
            function Kv(e) {
                return e = me(e),
                Ie(function(i) {
                    return mu(i, e)
                })
            }
            var Gv = ma(nt)
              , Wv = ma(zc)
              , Jv = ma(ko);
            function Lh(e) {
                return Pa(e) ? Vo(Br(e)) : Sd(e)
            }
            function Yv(e) {
                return function(i) {
                    return e == null ? t : $i(e, i)
                }
            }
            var Xv = Uu()
              , Zv = Uu(!0);
            function Ha() {
                return []
            }
            function ka() {
                return !1
            }
            function Qv() {
                return {}
            }
            function e_() {
                return ""
            }
            function t_() {
                return !0
            }
            function r_(e, i) {
                if (e = me(e),
                e < 1 || e > V)
                    return [];
                var s = G
                  , u = Vt(e, G);
                i = ne(i),
                e -= G;
                for (var f = Wo(u, i); ++s < e; )
                    i(s);
                return f
            }
            function i_(e) {
                return _e(e) ? nt(e, Br) : pr(e) ? [e] : ir(ih(Le(e)))
            }
            function n_(e) {
                var i = ++gp;
                return Le(e) + i
            }
            var s_ = Bs(function(e, i) {
                return e + i
            }, 0)
              , o_ = ba("ceil")
              , a_ = Bs(function(e, i) {
                return e / i
            }, 1)
              , c_ = ba("floor");
            function u_(e) {
                return e && e.length ? Fs(e, or, sa) : t
            }
            function h_(e, i) {
                return e && e.length ? Fs(e, ne(i, 2), sa) : t
            }
            function l_(e) {
                return Hc(e, or)
            }
            function f_(e, i) {
                return Hc(e, ne(i, 2))
            }
            function p_(e) {
                return e && e.length ? Fs(e, or, ua) : t
            }
            function d_(e, i) {
                return e && e.length ? Fs(e, ne(i, 2), ua) : t
            }
            var g_ = Bs(function(e, i) {
                return e * i
            }, 1)
              , y_ = ba("round")
              , v_ = Bs(function(e, i) {
                return e - i
            }, 0);
            function __(e) {
                return e && e.length ? Go(e, or) : 0
            }
            function m_(e, i) {
                return e && e.length ? Go(e, ne(i, 2)) : 0
            }
            return p.after = Uy,
            p.ary = dh,
            p.assign = A0,
            p.assignIn = Ah,
            p.assignInWith = to,
            p.assignWith = C0,
            p.at = R0,
            p.before = gh,
            p.bind = $a,
            p.bindAll = Fv,
            p.bindKey = yh,
            p.castArray = Qy,
            p.chain = lh,
            p.chunk = cg,
            p.compact = ug,
            p.concat = hg,
            p.cond = jv,
            p.conforms = Lv,
            p.constant = qa,
            p.countBy = _y,
            p.create = T0,
            p.curry = vh,
            p.curryRight = _h,
            p.debounce = mh,
            p.defaults = $0,
            p.defaultsDeep = D0,
            p.defer = By,
            p.delay = Hy,
            p.difference = lg,
            p.differenceBy = fg,
            p.differenceWith = pg,
            p.drop = dg,
            p.dropRight = gg,
            p.dropRightWhile = yg,
            p.dropWhile = vg,
            p.fill = _g,
            p.filter = by,
            p.flatMap = xy,
            p.flatMapDeep = Iy,
            p.flatMapDepth = Sy,
            p.flatten = ah,
            p.flattenDeep = mg,
            p.flattenDepth = bg,
            p.flip = ky,
            p.flow = qv,
            p.flowRight = zv,
            p.fromPairs = wg,
            p.functions = z0,
            p.functionsIn = U0,
            p.groupBy = Py,
            p.initial = xg,
            p.intersection = Ig,
            p.intersectionBy = Sg,
            p.intersectionWith = Pg,
            p.invert = H0,
            p.invertBy = k0,
            p.invokeMap = Ay,
            p.iteratee = za,
            p.keyBy = Cy,
            p.keys = zt,
            p.keysIn = sr,
            p.map = Js,
            p.mapKeys = K0,
            p.mapValues = G0,
            p.matches = Uv,
            p.matchesProperty = Bv,
            p.memoize = Xs,
            p.merge = W0,
            p.mergeWith = Ch,
            p.method = Hv,
            p.methodOf = kv,
            p.mixin = Ua,
            p.negate = Zs,
            p.nthArg = Kv,
            p.omit = J0,
            p.omitBy = Y0,
            p.once = Vy,
            p.orderBy = Ry,
            p.over = Gv,
            p.overArgs = Ky,
            p.overEvery = Wv,
            p.overSome = Jv,
            p.partial = Da,
            p.partialRight = bh,
            p.partition = Ty,
            p.pick = X0,
            p.pickBy = Rh,
            p.property = Lh,
            p.propertyOf = Yv,
            p.pull = Rg,
            p.pullAll = uh,
            p.pullAllBy = Tg,
            p.pullAllWith = $g,
            p.pullAt = Dg,
            p.range = Xv,
            p.rangeRight = Zv,
            p.rearg = Gy,
            p.reject = Ny,
            p.remove = Ng,
            p.rest = Wy,
            p.reverse = Ra,
            p.sampleSize = jy,
            p.set = Q0,
            p.setWith = ev,
            p.shuffle = Ly,
            p.slice = Fg,
            p.sortBy = zy,
            p.sortedUniq = Bg,
            p.sortedUniqBy = Hg,
            p.split = xv,
            p.spread = Jy,
            p.tail = kg,
            p.take = Vg,
            p.takeRight = Kg,
            p.takeRightWhile = Gg,
            p.takeWhile = Wg,
            p.tap = uy,
            p.throttle = Yy,
            p.thru = Ws,
            p.toArray = Sh,
            p.toPairs = Th,
            p.toPairsIn = $h,
            p.toPath = i_,
            p.toPlainObject = Oh,
            p.transform = tv,
            p.unary = Xy,
            p.union = Jg,
            p.unionBy = Yg,
            p.unionWith = Xg,
            p.uniq = Zg,
            p.uniqBy = Qg,
            p.uniqWith = ey,
            p.unset = rv,
            p.unzip = Ta,
            p.unzipWith = hh,
            p.update = iv,
            p.updateWith = nv,
            p.values = on,
            p.valuesIn = sv,
            p.without = ty,
            p.words = Fh,
            p.wrap = Zy,
            p.xor = ry,
            p.xorBy = iy,
            p.xorWith = ny,
            p.zip = sy,
            p.zipObject = oy,
            p.zipObjectDeep = ay,
            p.zipWith = cy,
            p.entries = Th,
            p.entriesIn = $h,
            p.extend = Ah,
            p.extendWith = to,
            Ua(p, p),
            p.add = s_,
            p.attempt = jh,
            p.camelCase = uv,
            p.capitalize = Dh,
            p.ceil = o_,
            p.clamp = ov,
            p.clone = e0,
            p.cloneDeep = r0,
            p.cloneDeepWith = i0,
            p.cloneWith = t0,
            p.conformsTo = n0,
            p.deburr = Nh,
            p.defaultTo = Mv,
            p.divide = a_,
            p.endsWith = hv,
            p.eq = $r,
            p.escape = lv,
            p.escapeRegExp = fv,
            p.every = my,
            p.find = wy,
            p.findIndex = sh,
            p.findKey = N0,
            p.findLast = Ey,
            p.findLastIndex = oh,
            p.findLastKey = F0,
            p.floor = c_,
            p.forEach = fh,
            p.forEachRight = ph,
            p.forIn = j0,
            p.forInRight = L0,
            p.forOwn = M0,
            p.forOwnRight = q0,
            p.get = ja,
            p.gt = s0,
            p.gte = o0,
            p.has = B0,
            p.hasIn = La,
            p.head = ch,
            p.identity = or,
            p.includes = Oy,
            p.indexOf = Eg,
            p.inRange = av,
            p.invoke = V0,
            p.isArguments = Fi,
            p.isArray = _e,
            p.isArrayBuffer = a0,
            p.isArrayLike = nr,
            p.isArrayLikeObject = wt,
            p.isBoolean = c0,
            p.isBuffer = yi,
            p.isDate = u0,
            p.isElement = h0,
            p.isEmpty = l0,
            p.isEqual = f0,
            p.isEqualWith = p0,
            p.isError = Na,
            p.isFinite = d0,
            p.isFunction = ei,
            p.isInteger = wh,
            p.isLength = Qs,
            p.isMap = Eh,
            p.isMatch = g0,
            p.isMatchWith = y0,
            p.isNaN = v0,
            p.isNative = _0,
            p.isNil = b0,
            p.isNull = m0,
            p.isNumber = xh,
            p.isObject = ct,
            p.isObjectLike = yt,
            p.isPlainObject = Tn,
            p.isRegExp = Fa,
            p.isSafeInteger = w0,
            p.isSet = Ih,
            p.isString = eo,
            p.isSymbol = pr,
            p.isTypedArray = sn,
            p.isUndefined = E0,
            p.isWeakMap = x0,
            p.isWeakSet = I0,
            p.join = Og,
            p.kebabCase = pv,
            p.last = xr,
            p.lastIndexOf = Ag,
            p.lowerCase = dv,
            p.lowerFirst = gv,
            p.lt = S0,
            p.lte = P0,
            p.max = u_,
            p.maxBy = h_,
            p.mean = l_,
            p.meanBy = f_,
            p.min = p_,
            p.minBy = d_,
            p.stubArray = Ha,
            p.stubFalse = ka,
            p.stubObject = Qv,
            p.stubString = e_,
            p.stubTrue = t_,
            p.multiply = g_,
            p.nth = Cg,
            p.noConflict = Vv,
            p.noop = Ba,
            p.now = Ys,
            p.pad = yv,
            p.padEnd = vv,
            p.padStart = _v,
            p.parseInt = mv,
            p.random = cv,
            p.reduce = $y,
            p.reduceRight = Dy,
            p.repeat = bv,
            p.replace = wv,
            p.result = Z0,
            p.round = y_,
            p.runInContext = S,
            p.sample = Fy,
            p.size = My,
            p.snakeCase = Ev,
            p.some = qy,
            p.sortedIndex = jg,
            p.sortedIndexBy = Lg,
            p.sortedIndexOf = Mg,
            p.sortedLastIndex = qg,
            p.sortedLastIndexBy = zg,
            p.sortedLastIndexOf = Ug,
            p.startCase = Iv,
            p.startsWith = Sv,
            p.subtract = v_,
            p.sum = __,
            p.sumBy = m_,
            p.template = Pv,
            p.times = r_,
            p.toFinite = ti,
            p.toInteger = me,
            p.toLength = Ph,
            p.toLower = Ov,
            p.toNumber = Ir,
            p.toSafeInteger = O0,
            p.toString = Le,
            p.toUpper = Av,
            p.trim = Cv,
            p.trimEnd = Rv,
            p.trimStart = Tv,
            p.truncate = $v,
            p.unescape = Dv,
            p.uniqueId = n_,
            p.upperCase = Nv,
            p.upperFirst = Ma,
            p.each = fh,
            p.eachRight = ph,
            p.first = ch,
            Ua(p, function() {
                var e = {};
                return zr(p, function(i, s) {
                    qe.call(p.prototype, s) || (e[s] = i)
                }),
                e
            }(), {
                chain: !1
            }),
            p.VERSION = n,
            _r(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                p[e].placeholder = p
            }),
            _r(["drop", "take"], function(e, i) {
                Oe.prototype[e] = function(s) {
                    s = s === t ? 1 : Lt(me(s), 0);
                    var u = this.__filtered__ && !i ? new Oe(this) : this.clone();
                    return u.__filtered__ ? u.__takeCount__ = Vt(s, u.__takeCount__) : u.__views__.push({
                        size: Vt(s, G),
                        type: e + (u.__dir__ < 0 ? "Right" : "")
                    }),
                    u
                }
                ,
                Oe.prototype[e + "Right"] = function(s) {
                    return this.reverse()[e](s).reverse()
                }
            }),
            _r(["filter", "map", "takeWhile"], function(e, i) {
                var s = i + 1
                  , u = s == _ || s == X;
                Oe.prototype[e] = function(f) {
                    var g = this.clone();
                    return g.__iteratees__.push({
                        iteratee: ne(f, 3),
                        type: s
                    }),
                    g.__filtered__ = g.__filtered__ || u,
                    g
                }
            }),
            _r(["head", "last"], function(e, i) {
                var s = "take" + (i ? "Right" : "");
                Oe.prototype[e] = function() {
                    return this[s](1).value()[0]
                }
            }),
            _r(["initial", "tail"], function(e, i) {
                var s = "drop" + (i ? "" : "Right");
                Oe.prototype[e] = function() {
                    return this.__filtered__ ? new Oe(this) : this[s](1)
                }
            }),
            Oe.prototype.compact = function() {
                return this.filter(or)
            }
            ,
            Oe.prototype.find = function(e) {
                return this.filter(e).head()
            }
            ,
            Oe.prototype.findLast = function(e) {
                return this.reverse().find(e)
            }
            ,
            Oe.prototype.invokeMap = Ie(function(e, i) {
                return typeof e == "function" ? new Oe(this) : this.map(function(s) {
                    return Sn(s, e, i)
                })
            }),
            Oe.prototype.reject = function(e) {
                return this.filter(Zs(ne(e)))
            }
            ,
            Oe.prototype.slice = function(e, i) {
                e = me(e);
                var s = this;
                return s.__filtered__ && (e > 0 || i < 0) ? new Oe(s) : (e < 0 ? s = s.takeRight(-e) : e && (s = s.drop(e)),
                i !== t && (i = me(i),
                s = i < 0 ? s.dropRight(-i) : s.take(i - e)),
                s)
            }
            ,
            Oe.prototype.takeRightWhile = function(e) {
                return this.reverse().takeWhile(e).reverse()
            }
            ,
            Oe.prototype.toArray = function() {
                return this.take(G)
            }
            ,
            zr(Oe.prototype, function(e, i) {
                var s = /^(?:filter|find|map|reject)|While$/.test(i)
                  , u = /^(?:head|last)$/.test(i)
                  , f = p[u ? "take" + (i == "last" ? "Right" : "") : i]
                  , g = u || /^find/.test(i);
                f && (p.prototype[i] = function() {
                    var m = this.__wrapped__
                      , w = u ? [1] : arguments
                      , P = m instanceof Oe
                      , j = w[0]
                      , L = P || _e(m)
                      , H = function(Se) {
                        var Ce = f.apply(p, ui([Se], w));
                        return u && J ? Ce[0] : Ce
                    };
                    L && s && typeof j == "function" && j.length != 1 && (P = L = !1);
                    var J = this.__chain__
                      , te = !!this.__actions__.length
                      , oe = g && !J
                      , we = P && !te;
                    if (!g && L) {
                        m = we ? m : new Oe(this);
                        var ae = e.apply(m, w);
                        return ae.__actions__.push({
                            func: Ws,
                            args: [H],
                            thisArg: t
                        }),
                        new br(ae,J)
                    }
                    return oe && we ? e.apply(this, w) : (ae = this.thru(H),
                    oe ? u ? ae.value()[0] : ae.value() : ae)
                }
                )
            }),
            _r(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                var i = bs[e]
                  , s = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru"
                  , u = /^(?:pop|shift)$/.test(e);
                p.prototype[e] = function() {
                    var f = arguments;
                    if (u && !this.__chain__) {
                        var g = this.value();
                        return i.apply(_e(g) ? g : [], f)
                    }
                    return this[s](function(m) {
                        return i.apply(_e(m) ? m : [], f)
                    })
                }
            }),
            zr(Oe.prototype, function(e, i) {
                var s = p[i];
                if (s) {
                    var u = s.name + "";
                    qe.call(Qi, u) || (Qi[u] = []),
                    Qi[u].push({
                        name: i,
                        func: s
                    })
                }
            }),
            Qi[Us(t, Ee).name] = [{
                name: "wrapper",
                func: t
            }],
            Oe.prototype.clone = Dp,
            Oe.prototype.reverse = Np,
            Oe.prototype.value = Fp,
            p.prototype.at = hy,
            p.prototype.chain = ly,
            p.prototype.commit = fy,
            p.prototype.next = py,
            p.prototype.plant = gy,
            p.prototype.reverse = yy,
            p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = vy,
            p.prototype.first = p.prototype.head,
            _n && (p.prototype[_n] = dy),
            p
        }
          , Yi = fp();
        bt ? ((bt.exports = Yi)._ = Yi,
        Ge._ = Yi) : Ae._ = Yi
    }
    ).call(Un)
}
)(Ic, Ic.exports);
var zx = Object.defineProperty
  , Ux = Object.defineProperties
  , Bx = Object.getOwnPropertyDescriptors
  , Ml = Object.getOwnPropertySymbols
  , Hx = Object.prototype.hasOwnProperty
  , kx = Object.prototype.propertyIsEnumerable
  , ql = (a,r,t)=>r in a ? zx(a, r, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : a[r] = t
  , io = (a,r)=>{
    for (var t in r || (r = {}))
        Hx.call(r, t) && ql(a, t, r[t]);
    if (Ml)
        for (var t of Ml(r))
            kx.call(r, t) && ql(a, t, r[t]);
    return a
}
  , Vx = (a,r)=>Ux(a, Bx(r));
function Or(a, r, t) {
    let n;
    const o = Sc(a);
    return r.rpcMap && (n = r.rpcMap[o]),
    n || (n = `${qx}?chainId=eip155:${o}&projectId=${t}`),
    n
}
function Sc(a) {
    return a.includes("eip155") ? Number(a.split(":")[1]) : Number(a)
}
function Uf(a) {
    return a.map(r=>`${r.split(":")[0]}:${r.split(":")[1]}`)
}
function Kx(a, r) {
    const t = Object.keys(r.namespaces).filter(o=>o.includes(a));
    if (!t.length)
        return [];
    const n = [];
    return t.forEach(o=>{
        const c = r.namespaces[o].accounts;
        n.push(...c)
    }
    ),
    n
}
function Gx(a={}, r={}) {
    const t = zl(a)
      , n = zl(r);
    return Ic.exports.merge(t, n)
}
function zl(a) {
    var r, t, n, o;
    const c = {};
    if (!oo(a))
        return c;
    for (const [l,d] of Object.entries(a)) {
        const b = ef(l) ? [l] : d.chains
          , y = d.methods || []
          , O = d.events || []
          , q = d.rpcMap || {}
          , C = ao(l);
        c[C] = Vx(io(io({}, c[C]), d), {
            chains: Ka(b, (r = c[C]) == null ? void 0 : r.chains),
            methods: Ka(y, (t = c[C]) == null ? void 0 : t.methods),
            events: Ka(O, (n = c[C]) == null ? void 0 : n.events),
            rpcMap: io(io({}, q), (o = c[C]) == null ? void 0 : o.rpcMap)
        })
    }
    return c
}
function Wx(a) {
    return a.includes(":") ? a.split(":")[2] : a
}
function Jx(a) {
    const r = {};
    for (const [t,n] of Object.entries(a)) {
        const o = n.methods || []
          , c = n.events || []
          , l = n.accounts || []
          , d = ef(t) ? [t] : n.chains ? n.chains : Uf(n.accounts);
        r[t] = {
            chains: d,
            methods: o,
            events: c,
            accounts: l
        }
    }
    return r
}
const Bf = {}
  , xt = a=>Bf[a]
  , nc = (a,r)=>{
    Bf[a] = r
}
;
class Yx {
    constructor(r) {
        this.name = "polkadot",
        this.namespace = r.namespace,
        this.events = xt("events"),
        this.client = xt("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(r) {
        this.namespace = Object.assign(this.namespace, r)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const r = this.namespace.chains[0];
        if (!r)
            throw new Error("ChainId not found");
        return r.split(":")[1]
    }
    request(r) {
        return this.namespace.methods.includes(r.request.method) ? this.client.request(r) : this.getHttpProvider().request(r.request)
    }
    setDefaultChain(r, t) {
        if (this.chainId = r,
        !this.httpProviders[r]) {
            const n = t || Or(`${this.name}:${r}`, this.namespace);
            if (!n)
                throw new Error(`No RPC url provided for chainId: ${r}`);
            this.setHttpProvider(r, n)
        }
        this.events.emit(wi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const r = this.namespace.accounts;
        return r ? r.filter(t=>t.split(":")[1] === this.chainId.toString()).map(t=>t.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        const r = {};
        return this.namespace.chains.forEach(t=>{
            var n;
            r[t] = this.createHttpProvider(t, (n = this.namespace.rpcMap) == null ? void 0 : n[t])
        }
        ),
        r
    }
    getHttpProvider() {
        const r = `${this.name}:${this.chainId}`
          , t = this.httpProviders[r];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${r} not found`);
        return t
    }
    setHttpProvider(r, t) {
        const n = this.createHttpProvider(r, t);
        n && (this.httpProviders[r] = n)
    }
    createHttpProvider(r, t) {
        const n = t || Or(r, this.namespace);
        return typeof n > "u" ? void 0 : new bi(new qi(n,xt("disableProviderPing")))
    }
}
class Xx {
    constructor(r) {
        this.name = "eip155",
        this.namespace = r.namespace,
        this.events = xt("events"),
        this.client = xt("client"),
        this.httpProviders = this.createHttpProviders(),
        this.chainId = parseInt(this.getDefaultChain())
    }
    async request(r) {
        switch (r.request.method) {
        case "eth_requestAccounts":
            return this.getAccounts();
        case "eth_accounts":
            return this.getAccounts();
        case "wallet_switchEthereumChain":
            return await this.handleSwitchChain(r);
        case "eth_chainId":
            return parseInt(this.getDefaultChain())
        }
        return this.namespace.methods.includes(r.request.method) ? await this.client.request(r) : this.getHttpProvider().request(r.request)
    }
    updateNamespace(r) {
        this.namespace = Object.assign(this.namespace, r)
    }
    setDefaultChain(r, t) {
        const n = Sc(r);
        if (!this.httpProviders[n]) {
            const o = t || Or(`${this.name}:${n}`, this.namespace, this.client.core.projectId);
            if (!o)
                throw new Error(`No RPC url provided for chainId: ${n}`);
            this.setHttpProvider(n, o)
        }
        this.chainId = n,
        this.events.emit(wi.DEFAULT_CHAIN_CHANGED, `${this.name}:${n}`)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId.toString();
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const r = this.namespace.chains[0];
        if (!r)
            throw new Error("ChainId not found");
        return r.split(":")[1]
    }
    createHttpProvider(r, t) {
        const n = t || Or(`${this.name}:${r}`, this.namespace, this.client.core.projectId);
        return typeof n > "u" ? void 0 : new bi(new qi(n,xt("disableProviderPing")))
    }
    setHttpProvider(r, t) {
        const n = this.createHttpProvider(r, t);
        n && (this.httpProviders[r] = n)
    }
    createHttpProviders() {
        const r = {};
        return this.namespace.chains.forEach(t=>{
            var n;
            const o = Sc(t);
            r[o] = this.createHttpProvider(o, (n = this.namespace.rpcMap) == null ? void 0 : n[t])
        }
        ),
        r
    }
    getAccounts() {
        const r = this.namespace.accounts;
        return r ? [...new Set(r.filter(t=>t.split(":")[1] === this.chainId.toString()).map(t=>t.split(":")[2]))] : []
    }
    getHttpProvider() {
        const r = this.chainId
          , t = this.httpProviders[r];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${r} not found`);
        return t
    }
    async handleSwitchChain(r) {
        var t, n;
        let o = r.request.params ? (t = r.request.params[0]) == null ? void 0 : t.chainId : "0x0";
        o = o.startsWith("0x") ? o : `0x ${o}`;
        const c = parseInt(o, 16);
        if (this.isChainApproved(c))
            this.setDefaultChain(`${c}`);
        else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
            await this.client.request({
                topic: r.topic,
                request: {
                    method: r.request.method,
                    params: [{
                        chainId: o
                    }]
                },
                chainId: (n = this.namespace.chains) == null ? void 0 : n[0]
            }),
            this.setDefaultChain(`${c}`);
        else
            throw new Error(`Failed to switch to chain 'eip155:${c}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
        return null
    }
    isChainApproved(r) {
        return this.namespace.chains.includes(`${this.name}:${r}`)
    }
}
class Zx {
    constructor(r) {
        this.name = "solana",
        this.namespace = r.namespace,
        this.events = xt("events"),
        this.client = xt("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(r) {
        this.namespace = Object.assign(this.namespace, r)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(r) {
        return this.namespace.methods.includes(r.request.method) ? this.client.request(r) : this.getHttpProvider().request(r.request)
    }
    setDefaultChain(r, t) {
        if (!this.httpProviders[r]) {
            const n = t || Or(`${this.name}:${r}`, this.namespace, this.client.core.projectId);
            if (!n)
                throw new Error(`No RPC url provided for chainId: ${r}`);
            this.setHttpProvider(r, n)
        }
        this.chainId = r,
        this.events.emit(wi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const r = this.namespace.chains[0];
        if (!r)
            throw new Error("ChainId not found");
        return r.split(":")[1]
    }
    getAccounts() {
        const r = this.namespace.accounts;
        return r ? [...new Set(r.filter(t=>t.split(":")[1] === this.chainId.toString()).map(t=>t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const r = {};
        return this.namespace.chains.forEach(t=>{
            var n;
            r[t] = this.createHttpProvider(t, (n = this.namespace.rpcMap) == null ? void 0 : n[t])
        }
        ),
        r
    }
    getHttpProvider() {
        const r = `${this.name}:${this.chainId}`
          , t = this.httpProviders[r];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${r} not found`);
        return t
    }
    setHttpProvider(r, t) {
        const n = this.createHttpProvider(r, t);
        n && (this.httpProviders[r] = n)
    }
    createHttpProvider(r, t) {
        const n = t || Or(r, this.namespace, this.client.core.projectId);
        return typeof n > "u" ? void 0 : new bi(new qi(n,xt("disableProviderPing")))
    }
}
class Qx {
    constructor(r) {
        this.name = "cosmos",
        this.namespace = r.namespace,
        this.events = xt("events"),
        this.client = xt("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(r) {
        this.namespace = Object.assign(this.namespace, r)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const r = this.namespace.chains[0];
        if (!r)
            throw new Error("ChainId not found");
        return r.split(":")[1]
    }
    request(r) {
        return this.namespace.methods.includes(r.request.method) ? this.client.request(r) : this.getHttpProvider().request(r.request)
    }
    setDefaultChain(r, t) {
        if (this.chainId = r,
        !this.httpProviders[r]) {
            const n = t || Or(`${this.name}:${r}`, this.namespace, this.client.core.projectId);
            if (!n)
                throw new Error(`No RPC url provided for chainId: ${r}`);
            this.setHttpProvider(r, n)
        }
        this.events.emit(wi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const r = this.namespace.accounts;
        return r ? [...new Set(r.filter(t=>t.split(":")[1] === this.chainId.toString()).map(t=>t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const r = {};
        return this.namespace.chains.forEach(t=>{
            var n;
            r[t] = this.createHttpProvider(t, (n = this.namespace.rpcMap) == null ? void 0 : n[t])
        }
        ),
        r
    }
    getHttpProvider() {
        const r = `${this.name}:${this.chainId}`
          , t = this.httpProviders[r];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${r} not found`);
        return t
    }
    setHttpProvider(r, t) {
        const n = this.createHttpProvider(r, t);
        n && (this.httpProviders[r] = n)
    }
    createHttpProvider(r, t) {
        const n = t || Or(r, this.namespace, this.client.core.projectId);
        return typeof n > "u" ? void 0 : new bi(new qi(n,xt("disableProviderPing")))
    }
}
class eI {
    constructor(r) {
        this.name = "cip34",
        this.namespace = r.namespace,
        this.events = xt("events"),
        this.client = xt("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(r) {
        this.namespace = Object.assign(this.namespace, r)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const r = this.namespace.chains[0];
        if (!r)
            throw new Error("ChainId not found");
        return r.split(":")[1]
    }
    request(r) {
        return this.namespace.methods.includes(r.request.method) ? this.client.request(r) : this.getHttpProvider().request(r.request)
    }
    setDefaultChain(r, t) {
        if (this.chainId = r,
        !this.httpProviders[r]) {
            const n = t || this.getCardanoRPCUrl(r);
            if (!n)
                throw new Error(`No RPC url provided for chainId: ${r}`);
            this.setHttpProvider(r, n)
        }
        this.events.emit(wi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const r = this.namespace.accounts;
        return r ? [...new Set(r.filter(t=>t.split(":")[1] === this.chainId.toString()).map(t=>t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const r = {};
        return this.namespace.chains.forEach(t=>{
            const n = this.getCardanoRPCUrl(t);
            r[t] = this.createHttpProvider(t, n)
        }
        ),
        r
    }
    getHttpProvider() {
        const r = `${this.name}:${this.chainId}`
          , t = this.httpProviders[r];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${r} not found`);
        return t
    }
    getCardanoRPCUrl(r) {
        const t = this.namespace.rpcMap;
        if (t)
            return t[r]
    }
    setHttpProvider(r, t) {
        const n = this.createHttpProvider(r, t);
        n && (this.httpProviders[r] = n)
    }
    createHttpProvider(r, t) {
        const n = t || this.getCardanoRPCUrl(r);
        return typeof n > "u" ? void 0 : new bi(new qi(n,xt("disableProviderPing")))
    }
}
class tI {
    constructor(r) {
        this.name = "elrond",
        this.namespace = r.namespace,
        this.events = xt("events"),
        this.client = xt("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(r) {
        this.namespace = Object.assign(this.namespace, r)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(r) {
        return this.namespace.methods.includes(r.request.method) ? this.client.request(r) : this.getHttpProvider().request(r.request)
    }
    setDefaultChain(r, t) {
        if (!this.httpProviders[r]) {
            const n = t || Or(`${this.name}:${r}`, this.namespace, this.client.core.projectId);
            if (!n)
                throw new Error(`No RPC url provided for chainId: ${r}`);
            this.setHttpProvider(r, n)
        }
        this.chainId = r,
        this.events.emit(wi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const r = this.namespace.chains[0];
        if (!r)
            throw new Error("ChainId not found");
        return r.split(":")[1]
    }
    getAccounts() {
        const r = this.namespace.accounts;
        return r ? [...new Set(r.filter(t=>t.split(":")[1] === this.chainId.toString()).map(t=>t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const r = {};
        return this.namespace.chains.forEach(t=>{
            var n;
            r[t] = this.createHttpProvider(t, (n = this.namespace.rpcMap) == null ? void 0 : n[t])
        }
        ),
        r
    }
    getHttpProvider() {
        const r = `${this.name}:${this.chainId}`
          , t = this.httpProviders[r];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${r} not found`);
        return t
    }
    setHttpProvider(r, t) {
        const n = this.createHttpProvider(r, t);
        n && (this.httpProviders[r] = n)
    }
    createHttpProvider(r, t) {
        const n = t || Or(r, this.namespace, this.client.core.projectId);
        return typeof n > "u" ? void 0 : new bi(new qi(n,xt("disableProviderPing")))
    }
}
class rI {
    constructor(r) {
        this.name = "multiversx",
        this.namespace = r.namespace,
        this.events = xt("events"),
        this.client = xt("client"),
        this.chainId = this.getDefaultChain(),
        this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(r) {
        this.namespace = Object.assign(this.namespace, r)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(r) {
        return this.namespace.methods.includes(r.request.method) ? this.client.request(r) : this.getHttpProvider().request(r.request)
    }
    setDefaultChain(r, t) {
        if (!this.httpProviders[r]) {
            const n = t || Or(`${this.name}:${r}`, this.namespace, this.client.core.projectId);
            if (!n)
                throw new Error(`No RPC url provided for chainId: ${r}`);
            this.setHttpProvider(r, n)
        }
        this.chainId = r,
        this.events.emit(wi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getDefaultChain() {
        if (this.chainId)
            return this.chainId;
        if (this.namespace.defaultChain)
            return this.namespace.defaultChain;
        const r = this.namespace.chains[0];
        if (!r)
            throw new Error("ChainId not found");
        return r.split(":")[1]
    }
    getAccounts() {
        const r = this.namespace.accounts;
        return r ? [...new Set(r.filter(t=>t.split(":")[1] === this.chainId.toString()).map(t=>t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const r = {};
        return this.namespace.chains.forEach(t=>{
            var n;
            r[t] = this.createHttpProvider(t, (n = this.namespace.rpcMap) == null ? void 0 : n[t])
        }
        ),
        r
    }
    getHttpProvider() {
        const r = `${this.name}:${this.chainId}`
          , t = this.httpProviders[r];
        if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${r} not found`);
        return t
    }
    setHttpProvider(r, t) {
        const n = this.createHttpProvider(r, t);
        n && (this.httpProviders[r] = n)
    }
    createHttpProvider(r, t) {
        const n = t || Or(r, this.namespace, this.client.core.projectId);
        return typeof n > "u" ? void 0 : new bi(new qi(n,xt("disableProviderPing")))
    }
}
var iI = Object.defineProperty
  , nI = Object.defineProperties
  , sI = Object.getOwnPropertyDescriptors
  , Ul = Object.getOwnPropertySymbols
  , oI = Object.prototype.hasOwnProperty
  , aI = Object.prototype.propertyIsEnumerable
  , Bl = (a,r,t)=>r in a ? iI(a, r, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : a[r] = t
  , no = (a,r)=>{
    for (var t in r || (r = {}))
        oI.call(r, t) && Bl(a, t, r[t]);
    if (Ul)
        for (var t of Ul(r))
            aI.call(r, t) && Bl(a, t, r[t]);
    return a
}
  , sc = (a,r)=>nI(a, sI(r));
class Mc {
    constructor(r) {
        this.events = new ur,
        this.rpcProviders = {},
        this.shouldAbortPairingAttempt = !1,
        this.maxPairingAttempts = 10,
        this.disableProviderPing = !1,
        this.providerOpts = r,
        this.logger = typeof r?.logger < "u" && typeof r?.logger != "string" ? r.logger : Re.pino(Re.getDefaultLoggerOptions({
            level: r?.logger || jl
        })),
        this.disableProviderPing = r?.disableProviderPing || !1
    }
    static async init(r) {
        const t = new Mc(r);
        return await t.initialize(),
        t
    }
    async request(r, t) {
        const [n,o] = this.validateChain(t);
        if (!this.session)
            throw new Error("Please call connect() before request()");
        return await this.getProvider(n).request({
            request: no({}, r),
            chainId: `${n}:${o}`,
            topic: this.session.topic
        })
    }
    sendAsync(r, t, n) {
        this.request(r, n).then(o=>t(null, o)).catch(o=>t(o, void 0))
    }
    async enable() {
        if (!this.client)
            throw new Error("Sign Client not initialized");
        return this.session || await this.connect({
            namespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties
        }),
        await this.requestAccounts()
    }
    async disconnect() {
        var r;
        if (!this.session)
            throw new Error("Please call connect() before enable()");
        await this.client.disconnect({
            topic: (r = this.session) == null ? void 0 : r.topic,
            reason: er("USER_DISCONNECTED")
        }),
        await this.cleanup()
    }
    async connect(r) {
        if (!this.client)
            throw new Error("Sign Client not initialized");
        if (this.setNamespaces(r),
        await this.cleanupPendingPairings(),
        !r.skipPairing)
            return await this.pair(r.pairingTopic)
    }
    on(r, t) {
        this.events.on(r, t)
    }
    once(r, t) {
        this.events.once(r, t)
    }
    removeListener(r, t) {
        this.events.removeListener(r, t)
    }
    off(r, t) {
        this.events.off(r, t)
    }
    get isWalletConnect() {
        return !0
    }
    async pair(r) {
        this.shouldAbortPairingAttempt = !1;
        let t = 0;
        do {
            if (this.shouldAbortPairingAttempt)
                throw new Error("Pairing aborted");
            if (t >= this.maxPairingAttempts)
                throw new Error("Max auto pairing attempts reached");
            const {uri: n, approval: o} = await this.client.connect({
                pairingTopic: r,
                requiredNamespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties
            });
            n && (this.uri = n,
            this.events.emit("display_uri", n)),
            await o().then(c=>{
                this.session = c,
                this.namespaces || (this.namespaces = Jx(c.namespaces),
                this.persist("namespaces", this.namespaces))
            }
            ).catch(c=>{
                if (c.message !== qf)
                    throw c;
                t++
            }
            )
        } while (!this.session);
        return this.onConnect(),
        this.session
    }
    setDefaultChain(r, t) {
        try {
            if (!this.session)
                return;
            const [n,o] = this.validateChain(r);
            this.getProvider(n).setDefaultChain(o, t)
        } catch (n) {
            if (!/Please call connect/.test(n.message))
                throw n
        }
    }
    async cleanupPendingPairings(r={}) {
        this.logger.info("Cleaning up inactive pairings...");
        const t = this.client.pairing.getAll();
        if (ln(t)) {
            for (const n of t)
                r.deletePairings ? this.client.core.expirer.set(n.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(n.topic);
            this.logger.info(`Inactive pairings cleared: ${t.length}`)
        }
    }
    abortPairingAttempt() {
        this.shouldAbortPairingAttempt = !0
    }
    async checkStorage() {
        if (this.namespaces = await this.getFromStore("namespaces"),
        this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {},
        this.client.session.length) {
            const r = this.client.session.keys.length - 1;
            this.session = this.client.session.get(this.client.session.keys[r]),
            this.createProviders()
        }
    }
    async initialize() {
        this.logger.trace("Initialized"),
        await this.createClient(),
        await this.checkStorage(),
        this.registerEventListeners()
    }
    async createClient() {
        this.client = this.providerOpts.client || await $x.init({
            logger: this.providerOpts.logger || jl,
            relayUrl: this.providerOpts.relayUrl || jx,
            projectId: this.providerOpts.projectId,
            metadata: this.providerOpts.metadata,
            storageOptions: this.providerOpts.storageOptions,
            name: this.providerOpts.name
        }),
        this.logger.trace("SignClient Initialized")
    }
    createProviders() {
        if (!this.client)
            throw new Error("Sign Client not initialized");
        if (!this.session)
            throw new Error("Session not initialized. Please call connect() before enable()");
        const r = [...new Set(Object.keys(this.session.namespaces).map(t=>ao(t)))];
        nc("client", this.client),
        nc("events", this.events),
        nc("disableProviderPing", this.disableProviderPing),
        r.forEach(t=>{
            if (!this.session)
                return;
            const n = Kx(t, this.session)
              , o = Uf(n)
              , c = Gx(this.namespaces, this.optionalNamespaces)
              , l = sc(no({}, c[t]), {
                accounts: n,
                chains: o
            });
            switch (t) {
            case "eip155":
                this.rpcProviders[t] = new Xx({
                    namespace: l
                });
                break;
            case "solana":
                this.rpcProviders[t] = new Zx({
                    namespace: l
                });
                break;
            case "cosmos":
                this.rpcProviders[t] = new Qx({
                    namespace: l
                });
                break;
            case "polkadot":
                this.rpcProviders[t] = new Yx({
                    namespace: l
                });
                break;
            case "cip34":
                this.rpcProviders[t] = new eI({
                    namespace: l
                });
                break;
            case "elrond":
                this.rpcProviders[t] = new tI({
                    namespace: l
                });
                break;
            case "multiversx":
                this.rpcProviders[t] = new rI({
                    namespace: l
                });
                break
            }
        }
        )
    }
    registerEventListeners() {
        if (typeof this.client > "u")
            throw new Error("Sign Client is not initialized");
        this.client.on("session_ping", r=>{
            this.events.emit("session_ping", r)
        }
        ),
        this.client.on("session_event", r=>{
            const {params: t} = r
              , {event: n} = t;
            if (n.name === "accountsChanged") {
                const o = n.data;
                o && ln(o) && this.events.emit("accountsChanged", o.map(Wx))
            } else
                n.name === "chainChanged" ? this.onChainChanged(t.chainId) : this.events.emit(n.name, n.data);
            this.events.emit("session_event", r)
        }
        ),
        this.client.on("session_update", ({topic: r, params: t})=>{
            var n;
            const {namespaces: o} = t
              , c = (n = this.client) == null ? void 0 : n.session.get(r);
            this.session = sc(no({}, c), {
                namespaces: o
            }),
            this.onSessionUpdate(),
            this.events.emit("session_update", {
                topic: r,
                params: t
            })
        }
        ),
        this.client.on("session_delete", async r=>{
            await this.cleanup(),
            this.events.emit("session_delete", r),
            this.events.emit("disconnect", sc(no({}, er("USER_DISCONNECTED")), {
                data: r.topic
            }))
        }
        ),
        this.on(wi.DEFAULT_CHAIN_CHANGED, r=>{
            this.onChainChanged(r, !0)
        }
        )
    }
    getProvider(r) {
        if (!this.rpcProviders[r])
            throw new Error(`Provider not found: ${r}`);
        return this.rpcProviders[r]
    }
    onSessionUpdate() {
        Object.keys(this.rpcProviders).forEach(r=>{
            var t;
            this.getProvider(r).updateNamespace((t = this.session) == null ? void 0 : t.namespaces[r])
        }
        )
    }
    setNamespaces(r) {
        const {namespaces: t, optionalNamespaces: n, sessionProperties: o} = r;
        t && Object.keys(t).length && (this.namespaces = t),
        n && Object.keys(n).length && (this.optionalNamespaces = n),
        this.sessionProperties = o,
        this.persist("namespaces", t),
        this.persist("optionalNamespaces", n)
    }
    validateChain(r) {
        const [t,n] = r?.split(":") || ["", ""];
        if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [t, n];
        if (t && !Object.keys(this.namespaces || {}).map(l=>ao(l)).includes(t))
            throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
        if (t && n)
            return [t, n];
        const o = ao(Object.keys(this.namespaces)[0])
          , c = this.rpcProviders[o].getDefaultChain();
        return [o, c]
    }
    async requestAccounts() {
        const [r] = this.validateChain();
        return await this.getProvider(r).requestAccounts()
    }
    onChainChanged(r, t=!1) {
        var n;
        if (!this.namespaces)
            return;
        const [o,c] = this.validateChain(r);
        t || this.getProvider(o).setDefaultChain(c),
        ((n = this.namespaces[o]) != null ? n : this.namespaces[`${o}:${c}`]).defaultChain = c,
        this.persist("namespaces", this.namespaces),
        this.events.emit("chainChanged", c)
    }
    onConnect() {
        this.createProviders(),
        this.events.emit("connect", {
            session: this.session
        })
    }
    async cleanup() {
        this.session = void 0,
        this.namespaces = void 0,
        this.optionalNamespaces = void 0,
        this.sessionProperties = void 0,
        this.persist("namespaces", void 0),
        this.persist("optionalNamespaces", void 0),
        this.persist("sessionProperties", void 0),
        await this.cleanupPendingPairings({
            deletePairings: !0
        })
    }
    persist(r, t) {
        this.client.core.storage.setItem(`${Ll}/${r}`, t)
    }
    async getFromStore(r) {
        return await this.client.core.storage.getItem(`${Ll}/${r}`)
    }
}
const cI = Mc
  , uI = "wc"
  , hI = "ethereum_provider"
  , lI = `${uI}@2:${hI}:`
  , fI = "https://rpc.walletconnect.com/v1/"
  , Pc = ["eth_sendTransaction", "personal_sign"]
  , pI = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"]
  , Oc = ["chainChanged", "accountsChanged"]
  , dI = ["message", "disconnect", "connect"];
var gI = Object.defineProperty
  , yI = Object.defineProperties
  , vI = Object.getOwnPropertyDescriptors
  , Hl = Object.getOwnPropertySymbols
  , _I = Object.prototype.hasOwnProperty
  , mI = Object.prototype.propertyIsEnumerable
  , kl = (a,r,t)=>r in a ? gI(a, r, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : a[r] = t
  , Bn = (a,r)=>{
    for (var t in r || (r = {}))
        _I.call(r, t) && kl(a, t, r[t]);
    if (Hl)
        for (var t of Hl(r))
            mI.call(r, t) && kl(a, t, r[t]);
    return a
}
  , Vl = (a,r)=>yI(a, vI(r));
function lo(a) {
    return Number(a[0].split(":")[1])
}
function oc(a) {
    return `0x ${a.toString(16)}`
}
function bI(a) {
    const {chains: r, optionalChains: t, methods: n, optionalMethods: o, events: c, optionalEvents: l, rpcMap: d} = a;
    if (!ln(r))
        throw new Error("Invalid chains");
    const b = {
        chains: r,
        methods: n || Pc,
        events: c || Oc,
        rpcMap: Bn({}, r.length ? {
            [lo(r)]: d[lo(r)]
        } : {})
    }
      , y = c?.filter(z=>!Oc.includes(z))
      , O = n?.filter(z=>!Pc.includes(z));
    if (!t && !l && !o && !(y != null && y.length) && !(O != null && O.length))
        return {
            required: r.length ? b : void 0
        };
    const q = y?.length && O?.length || !t
      , C = {
        chains: [...new Set(q ? b.chains.concat(t || []) : t)],
        methods: [...new Set(b.methods.concat(o != null && o.length ? o : pI))],
        events: [...new Set(b.events.concat(l || dI))],
        rpcMap: d
    };
    return {
        required: r.length ? b : void 0,
        optional: t.length ? C : void 0
    }
}
class qc {
    constructor() {
        this.events = new ur,
        this.namespace = "eip155",
        this.accounts = [],
        this.chainId = 1,
        this.STORAGE_KEY = lI,
        this.on = (r,t)=>(this.events.on(r, t),
        this),
        this.once = (r,t)=>(this.events.once(r, t),
        this),
        this.removeListener = (r,t)=>(this.events.removeListener(r, t),
        this),
        this.off = (r,t)=>(this.events.off(r, t),
        this),
        this.parseAccount = r=>this.isCompatibleChainId(r) ? this.parseAccountId(r).address : r,
        this.signer = {},
        this.rpc = {}
    }
    static async init(r) {
        const t = new qc;
        return await t.initialize(r),
        t
    }
    async request(r) {
        return await this.signer.request(r, this.formatChainId(this.chainId))
    }
    sendAsync(r, t) {
        this.signer.sendAsync(r, t, this.formatChainId(this.chainId))
    }
    get connected() {
        return this.signer.client ? this.signer.client.core.relayer.connected : !1
    }
    get connecting() {
        return this.signer.client ? this.signer.client.core.relayer.connecting : !1
    }
    async enable() {
        return this.session || await this.connect(),
        await this.request({
            method: "eth_requestAccounts"
        })
    }
    async connect(r) {
        if (!this.signer.client)
            throw new Error("Provider not initialized. Call init() first");
        this.loadConnectOpts(r);
        const {required: t, optional: n} = bI(this.rpc);
        try {
            const o = await new Promise(async(l,d)=>{
                var b;
                this.rpc.showQrModal && ((b = this.modal) == null || b.subscribeModal(y=>{
                    !y.open && !this.signer.session && (this.signer.abortPairingAttempt(),
                    d(new Error("Connection request reset. Please try again.")))
                }
                )),
                await this.signer.connect(Vl(Bn({
                    namespaces: Bn({}, t && {
                        [this.namespace]: t
                    })
                }, n && {
                    optionalNamespaces: {
                        [this.namespace]: n
                    }
                }), {
                    pairingTopic: r?.pairingTopic
                })).then(y=>{
                    l(y)
                }
                ).catch(y=>{
                    d(new Error(y.message))
                }
                )
            }
            );
            if (!o)
                return;
            this.setChainIds(this.rpc.chains);
            const c = n1(o.namespaces, [this.namespace]);
            this.setAccounts(c),
            this.events.emit("connect", {
                chainId: oc(this.chainId)
            })
        } catch (o) {
            throw this.signer.logger.error(o),
            o
        } finally {
            this.modal && this.modal.closeModal()
        }
    }
    async disconnect() {
        this.session && await this.signer.disconnect(),
        this.reset()
    }
    get isWalletConnect() {
        return !0
    }
    get session() {
        return this.signer.session
    }
    registerEventListeners() {
        this.signer.on("session_event", r=>{
            const {params: t} = r
              , {event: n} = t;
            n.name === "accountsChanged" ? (this.accounts = this.parseAccounts(n.data),
            this.events.emit("accountsChanged", this.accounts)) : n.name === "chainChanged" ? this.setChainId(this.formatChainId(n.data)) : this.events.emit(n.name, n.data),
            this.events.emit("session_event", r)
        }
        ),
        this.signer.on("chainChanged", r=>{
            const t = parseInt(r);
            this.chainId = t,
            this.events.emit("chainChanged", oc(this.chainId)),
            this.persist()
        }
        ),
        this.signer.on("session_update", r=>{
            this.events.emit("session_update", r)
        }
        ),
        this.signer.on("session_delete", r=>{
            this.reset(),
            this.events.emit("session_delete", r),
            this.events.emit("disconnect", Vl(Bn({}, er("USER_DISCONNECTED")), {
                data: r.topic,
                name: "USER_DISCONNECTED"
            }))
        }
        ),
        this.signer.on("display_uri", r=>{
            var t, n;
            this.rpc.showQrModal && ((t = this.modal) == null || t.closeModal(),
            (n = this.modal) == null || n.openModal({
                uri: r
            })),
            this.events.emit("display_uri", r)
        }
        )
    }
    switchEthereumChain(r) {
        this.request({
            method: "wallet_switchEthereumChain",
            params: [{
                chainId: r.toString(16)
            }]
        })
    }
    isCompatibleChainId(r) {
        return typeof r == "string" ? r.startsWith(`${this.namespace}:`) : !1
    }
    formatChainId(r) {
        return `${this.namespace}:${r}`
    }
    parseChainId(r) {
        return Number(r.split(":")[1])
    }
    setChainIds(r) {
        const t = r.filter(n=>this.isCompatibleChainId(n)).map(n=>this.parseChainId(n));
        t.length && (this.chainId = t[0],
        this.events.emit("chainChanged", oc(this.chainId)),
        this.persist())
    }
    setChainId(r) {
        if (this.isCompatibleChainId(r)) {
            const t = this.parseChainId(r);
            this.chainId = t,
            this.switchEthereumChain(t)
        }
    }
    parseAccountId(r) {
        const [t,n,o] = r.split(":");
        return {
            chainId: `${t}:${n}`,
            address: o
        }
    }
    setAccounts(r) {
        this.accounts = r.filter(t=>this.parseChainId(this.parseAccountId(t).chainId) === this.chainId).map(t=>this.parseAccountId(t).address),
        this.events.emit("accountsChanged", this.accounts)
    }
    getRpcConfig(r) {
        var t, n;
        const o = (t = r?.chains) != null ? t : []
          , c = (n = r?.optionalChains) != null ? n : []
          , l = o.concat(c);
        if (!l.length)
            throw new Error("No chains specified in either `chains` or `optionalChains`");
        const d = o.length ? r?.methods || Pc : []
          , b = o.length ? r?.events || Oc : []
          , y = r?.optionalMethods || []
          , O = r?.optionalEvents || []
          , q = r?.rpcMap || this.buildRpcMap(l, r.projectId)
          , C = r?.qrModalOptions || void 0;
        return {
            chains: o?.map(z=>this.formatChainId(z)),
            optionalChains: c.map(z=>this.formatChainId(z)),
            methods: d,
            events: b,
            optionalMethods: y,
            optionalEvents: O,
            rpcMap: q,
            showQrModal: !!(r != null && r.showQrModal),
            qrModalOptions: C,
            projectId: r.projectId,
            metadata: r.metadata
        }
    }
    buildRpcMap(r, t) {
        const n = {};
        return r.forEach(o=>{
            n[o] = this.getRpcUrl(o, t)
        }
        ),
        n
    }
    async initialize(r) {
        if (this.rpc = this.getRpcConfig(r),
        this.chainId = this.rpc.chains.length ? lo(this.rpc.chains) : lo(this.rpc.optionalChains),
        this.signer = await cI.init({
            projectId: this.rpc.projectId,
            metadata: this.rpc.metadata,
            disableProviderPing: r.disableProviderPing,
            relayUrl: r.relayUrl,
            storageOptions: r.storageOptions
        }),
        this.registerEventListeners(),
        await this.loadPersistedSession(),
        this.rpc.showQrModal) {
            let t;
            try {
                const {WalletConnectModal: n} = await import("./index-f78552e1.js").then(function(o) {
                    return o.a
                });
                t = n
            } catch {
                throw new Error("To use QR modal, please install @walletconnect/modal package")
            }
            if (t)
                try {
                    this.modal = new t(Bn({
                        walletConnectVersion: 2,
                        projectId: this.rpc.projectId,
                        standaloneChains: this.rpc.chains
                    }, this.rpc.qrModalOptions))
                } catch (n) {
                    throw this.signer.logger.error(n),
                    new Error("Could not generate WalletConnectModal Instance")
                }
        }
    }
    loadConnectOpts(r) {
        if (!r)
            return;
        const {chains: t, optionalChains: n, rpcMap: o} = r;
        t && ln(t) && (this.rpc.chains = t.map(c=>this.formatChainId(c)),
        t.forEach(c=>{
            this.rpc.rpcMap[c] = o?.[c] || this.getRpcUrl(c)
        }
        )),
        n && ln(n) && (this.rpc.optionalChains = [],
        this.rpc.optionalChains = n?.map(c=>this.formatChainId(c)),
        n.forEach(c=>{
            this.rpc.rpcMap[c] = o?.[c] || this.getRpcUrl(c)
        }
        ))
    }
    getRpcUrl(r, t) {
        var n;
        return ((n = this.rpc.rpcMap) == null ? void 0 : n[r]) || `${fI}?chainId=eip155:${r}&projectId=${t || this.rpc.projectId}`
    }
    async loadPersistedSession() {
        if (!this.session)
            return;
        const r = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`)
          , t = this.session.namespaces[`${this.namespace}:${r}`] ? this.session.namespaces[`${this.namespace}:${r}`] : this.session.namespaces[this.namespace];
        this.setChainIds(r ? [this.formatChainId(r)] : t?.accounts),
        this.setAccounts(t?.accounts)
    }
    reset() {
        this.chainId = 1,
        this.accounts = []
    }
    persist() {
        this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
    }
    parseAccounts(r) {
        return typeof r == "string" || r instanceof String ? [this.parseAccount(r)] : r.map(t=>this.parseAccount(t))
    }
}
const TI = qc;
export {TI as EthereumProvider, dI as OPTIONAL_EVENTS, pI as OPTIONAL_METHODS, Oc as REQUIRED_EVENTS, Pc as REQUIRED_METHODS, qc as default};
//# sourceMappingURL=index.es-73b49c04.js.map
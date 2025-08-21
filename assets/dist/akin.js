var Is = Object.defineProperty;
var vn = (e) => {
  throw TypeError(e);
};
var Ps = (e, r, t) => r in e ? Is(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var ve = (e, r, t) => Ps(e, typeof r != "symbol" ? r + "" : r, t), hn = (e, r, t) => r.has(e) || vn("Cannot " + t);
var he = (e, r, t) => (hn(e, r, "read from private field"), t ? t.call(e) : r.get(e)), A0 = (e, r, t) => r.has(e) ? vn("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), M0 = (e, r, t, n) => (hn(e, r, "write to private field"), n ? n.call(e, t) : r.set(e, t), t);
const Ts = "5";
var Yn;
typeof window < "u" && ((Yn = window.__svelte ?? (window.__svelte = {})).v ?? (Yn.v = /* @__PURE__ */ new Set())).add(Ts);
const A1 = 1, S1 = 2, to = 4, Rs = 8, Ms = 16, Ns = 1, Os = 2, ro = 4, Ds = 8, Ws = 16, Us = 4, Bs = 1, Zs = 2, $1 = "[", q1 = "[!", j1 = "]", $t = {}, u0 = Symbol(), Fs = "http://www.w3.org/1999/xhtml", Hs = "@attach", gn = !1;
var Rt = Array.isArray, Ks = Array.prototype.indexOf, I1 = Array.from, Lr = Object.keys, Xt = Object.defineProperty, K0 = Object.getOwnPropertyDescriptor, no = Object.getOwnPropertyDescriptors, Ys = Object.prototype, Vs = Array.prototype, P1 = Object.getPrototypeOf, pn = Object.isExtensible;
function At(e) {
  return typeof e == "function";
}
const p0 = () => {
};
function Gs(e) {
  return e();
}
function Jt(e) {
  for (var r = 0; r < e.length; r++)
    e[r]();
}
function Xs(e, r) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const t = [];
  for (const n of e)
    if (t.push(n), t.length === r) break;
  return t;
}
const P0 = 2, oo = 4, Pr = 8, Tr = 16, X0 = 32, yt = 64, T1 = 128, m0 = 256, Er = 512, y0 = 1024, V0 = 2048, ct = 4096, Y0 = 8192, R1 = 16384, M1 = 32768, hr = 65536, Js = 1 << 17, Qs = 1 << 19, io = 1 << 20, c1 = 1 << 21, N0 = Symbol("$state"), N1 = Symbol("legacy props"), ea = Symbol("");
function so(e) {
  return e === this.v;
}
function ao(e, r) {
  return e != e ? r == r : e !== r || e !== null && typeof e == "object" || typeof e == "function";
}
function O1(e) {
  return !ao(e, this.v);
}
function ta(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ra() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function na(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function oa() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function ia() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function sa(e) {
  throw new Error("https://svelte.dev/e/lifecycle_legacy_only");
}
function aa(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function la() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ca() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ua() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Mt = !1, da = !1;
function fa() {
  Mt = !0;
}
function Rr(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Me = null;
function mn(e) {
  Me = e;
}
function V(e, r = !1, t) {
  var n = Me = {
    p: Me,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Mt && !r && (Me.l = {
    s: null,
    u: null,
    r1: [],
    r2: gt(!1)
  }), W1(() => {
    n.d = !0;
  });
}
function G(e) {
  const r = Me;
  if (r !== null) {
    e !== void 0 && (r.x = e);
    const s = r.e;
    if (s !== null) {
      var t = je, n = Se;
      r.e = null;
      try {
        for (var o = 0; o < s.length; o++) {
          var i = s[o];
          W0(i.effect), L0(i.reaction), Q0(i.fn);
        }
      } finally {
        W0(t), L0(n);
      }
    }
    Me = r.p, r.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function gr() {
  return !Mt || Me !== null && Me.l === null;
}
function We(e) {
  if (typeof e != "object" || e === null || N0 in e)
    return e;
  const r = P1(e);
  if (r !== Ys && r !== Vs)
    return e;
  var t = /* @__PURE__ */ new Map(), n = Rt(e), o = /* @__PURE__ */ te(0), i = Se, s = (a) => {
    var l = Se;
    L0(i);
    var v = a();
    return L0(l), v;
  };
  return n && t.set("length", /* @__PURE__ */ te(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && la();
        var p = t.get(l);
        return p === void 0 ? p = s(() => {
          var h = /* @__PURE__ */ te(v.value);
          return t.set(l, h), h;
        }) : I(p, v.value, !0), !0;
      },
      deleteProperty(a, l) {
        var v = t.get(l);
        if (v === void 0) {
          if (l in a) {
            const g = s(() => /* @__PURE__ */ te(u0));
            t.set(l, g), Jr(o);
          }
        } else {
          if (n && typeof l == "string") {
            var p = (
              /** @type {Source<number>} */
              t.get("length")
            ), h = Number(l);
            Number.isInteger(h) && h < p.v && I(p, h);
          }
          I(v, u0), Jr(o);
        }
        return !0;
      },
      get(a, l, v) {
        var y;
        if (l === N0)
          return e;
        var p = t.get(l), h = l in a;
        if (p === void 0 && (!h || (y = K0(a, l)) != null && y.writable) && (p = s(() => {
          var f = We(h ? a[l] : u0), w = /* @__PURE__ */ te(f);
          return w;
        }), t.set(l, p)), p !== void 0) {
          var g = c(p);
          return g === u0 ? void 0 : g;
        }
        return Reflect.get(a, l, v);
      },
      getOwnPropertyDescriptor(a, l) {
        var v = Reflect.getOwnPropertyDescriptor(a, l);
        if (v && "value" in v) {
          var p = t.get(l);
          p && (v.value = c(p));
        } else if (v === void 0) {
          var h = t.get(l), g = h == null ? void 0 : h.v;
          if (h !== void 0 && g !== u0)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return v;
      },
      has(a, l) {
        var g;
        if (l === N0)
          return !0;
        var v = t.get(l), p = v !== void 0 && v.v !== u0 || Reflect.has(a, l);
        if (v !== void 0 || je !== null && (!p || (g = K0(a, l)) != null && g.writable)) {
          v === void 0 && (v = s(() => {
            var y = p ? We(a[l]) : u0, f = /* @__PURE__ */ te(y);
            return f;
          }), t.set(l, v));
          var h = c(v);
          if (h === u0)
            return !1;
        }
        return p;
      },
      set(a, l, v, p) {
        var S;
        var h = t.get(l), g = l in a;
        if (n && l === "length")
          for (var y = v; y < /** @type {Source<number>} */
          h.v; y += 1) {
            var f = t.get(y + "");
            f !== void 0 ? I(f, u0) : y in a && (f = s(() => /* @__PURE__ */ te(u0)), t.set(y + "", f));
          }
        if (h === void 0)
          (!g || (S = K0(a, l)) != null && S.writable) && (h = s(() => /* @__PURE__ */ te(void 0)), I(h, We(v)), t.set(l, h));
        else {
          g = h.v !== u0;
          var w = s(() => We(v));
          I(h, w);
        }
        var z = Reflect.getOwnPropertyDescriptor(a, l);
        if (z != null && z.set && z.set.call(p, v), !g) {
          if (n && typeof l == "string") {
            var L = (
              /** @type {Source<number>} */
              t.get("length")
            ), U = Number(l);
            Number.isInteger(U) && U >= L.v && I(L, U + 1);
          }
          Jr(o);
        }
        return !0;
      },
      ownKeys(a) {
        c(o);
        var l = Reflect.ownKeys(a).filter((h) => {
          var g = t.get(h);
          return g === void 0 || g.v !== u0;
        });
        for (var [v, p] of t)
          p.v !== u0 && !(v in a) && l.push(v);
        return l;
      },
      setPrototypeOf() {
        ca();
      }
    }
  );
}
function Jr(e, r = 1) {
  I(e, e.v + r);
}
function yn(e) {
  try {
    if (e !== null && typeof e == "object" && N0 in e)
      return e[N0];
  } catch {
  }
  return e;
}
function va(e, r) {
  return Object.is(yn(e), yn(r));
}
// @__NO_SIDE_EFFECTS__
function ht(e) {
  var r = P0 | V0, t = Se !== null && (Se.f & P0) !== 0 ? (
    /** @type {Derived} */
    Se
  ) : null;
  return je === null || t !== null && (t.f & m0) !== 0 ? r |= m0 : je.f |= io, {
    ctx: Me,
    deps: null,
    effects: null,
    equals: so,
    f: r,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: t ?? je
  };
}
// @__NO_SIDE_EFFECTS__
function Ae(e) {
  const r = /* @__PURE__ */ ht(e);
  return Ao(r), r;
}
// @__NO_SIDE_EFFECTS__
function x0(e) {
  const r = /* @__PURE__ */ ht(e);
  return r.equals = O1, r;
}
function lo(e) {
  var r = e.effects;
  if (r !== null) {
    e.effects = null;
    for (var t = 0; t < r.length; t += 1)
      k0(
        /** @type {Effect} */
        r[t]
      );
  }
}
function ha(e) {
  for (var r = e.parent; r !== null; ) {
    if ((r.f & P0) === 0)
      return (
        /** @type {Effect} */
        r
      );
    r = r.parent;
  }
  return null;
}
function co(e) {
  var r, t = je;
  W0(ha(e));
  try {
    lo(e), r = jo(e);
  } finally {
    W0(t);
  }
  return r;
}
function uo(e) {
  var r = co(e);
  if (e.equals(r) || (e.v = r, e.wv = $o()), !Wt) {
    var t = (ot || (e.f & m0) !== 0) && e.deps !== null ? ct : y0;
    T0(e, t);
  }
}
const Qt = /* @__PURE__ */ new Map();
function gt(e, r) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: so,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function te(e, r) {
  const t = gt(e);
  return Ao(t), t;
}
// @__NO_SIDE_EFFECTS__
function a0(e, r = !1, t = !0) {
  var o;
  const n = gt(e);
  return r || (n.equals = O1), Mt && t && Me !== null && Me.l !== null && ((o = Me.l).s ?? (o.s = [])).push(n), n;
}
function bn(e, r) {
  return I(
    e,
    Q(() => c(e))
  ), r;
}
function I(e, r, t = !1) {
  Se !== null && !$0 && gr() && (Se.f & (P0 | Tr)) !== 0 && !(Ge != null && Ge[1].includes(e) && Ge[0] === Se) && ua();
  let n = t ? We(r) : r;
  return u1(e, n);
}
function u1(e, r) {
  if (!e.equals(r)) {
    var t = e.v;
    Wt ? Qt.set(e, r) : Qt.set(e, t), e.v = r, (e.f & P0) !== 0 && ((e.f & V0) !== 0 && co(
      /** @type {Derived} */
      e
    ), T0(e, (e.f & m0) === 0 ? y0 : ct)), e.wv = $o(), fo(e, V0), gr() && je !== null && (je.f & y0) !== 0 && (je.f & (X0 | yt)) === 0 && (w0 === null ? ka([e]) : w0.push(e));
  }
  return r;
}
function wn(e, r = 1) {
  var t = c(e), n = r === 1 ? t++ : t--;
  return I(e, t), n;
}
function fo(e, r) {
  var t = e.reactions;
  if (t !== null)
    for (var n = gr(), o = t.length, i = 0; i < o; i++) {
      var s = t[i], a = s.f;
      (a & V0) === 0 && (!n && s === je || (T0(s, r), (a & (y0 | m0)) !== 0 && ((a & P0) !== 0 ? fo(
        /** @type {Derived} */
        s,
        ct
      ) : B1(
        /** @type {Effect} */
        s
      ))));
    }
}
function Mr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function ga() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let xe = !1;
function q0(e) {
  xe = e;
}
let Pe;
function z0(e) {
  if (e === null)
    throw Mr(), $t;
  return Pe = e;
}
function Nt() {
  return z0(
    /** @type {TemplateNode} */
    /* @__PURE__ */ J0(Pe)
  );
}
function u(e) {
  if (xe) {
    if (/* @__PURE__ */ J0(Pe) !== null)
      throw Mr(), $t;
    Pe = e;
  }
}
function qe(e = 1) {
  if (xe) {
    for (var r = e, t = Pe; r--; )
      t = /** @type {TemplateNode} */
      /* @__PURE__ */ J0(t);
    Pe = t;
  }
}
function d1() {
  for (var e = 0, r = Pe; ; ) {
    if (r.nodeType === 8) {
      var t = (
        /** @type {Comment} */
        r.data
      );
      if (t === j1) {
        if (e === 0) return r;
        e -= 1;
      } else (t === $1 || t === q1) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ J0(r)
    );
    r.remove(), r = n;
  }
}
function vo(e) {
  if (!e || e.nodeType !== 8)
    throw Mr(), $t;
  return (
    /** @type {Comment} */
    e.data
  );
}
var _n, ho, go, po;
function f1() {
  if (_n === void 0) {
    _n = window, ho = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, r = Node.prototype, t = Text.prototype;
    go = K0(r, "firstChild").get, po = K0(r, "nextSibling").get, pn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), pn(t) && (t.__t = void 0);
  }
}
function st(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function D0(e) {
  return go.call(e);
}
// @__NO_SIDE_EFFECTS__
function J0(e) {
  return po.call(e);
}
function d(e, r) {
  if (!xe)
    return /* @__PURE__ */ D0(e);
  var t = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ D0(Pe)
  );
  if (t === null)
    t = Pe.appendChild(st());
  else if (r && t.nodeType !== 3) {
    var n = st();
    return t == null || t.before(n), z0(n), n;
  }
  return z0(t), t;
}
function ae(e, r) {
  if (!xe) {
    var t = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ D0(
        /** @type {Node} */
        e
      )
    );
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ J0(t) : t;
  }
  return Pe;
}
function _(e, r = 1, t = !1) {
  let n = xe ? Pe : e;
  for (var o; r--; )
    o = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ J0(n);
  if (!xe)
    return n;
  var i = n == null ? void 0 : n.nodeType;
  if (t && i !== 3) {
    var s = st();
    return n === null ? o == null || o.after(s) : n.before(s), z0(s), s;
  }
  return z0(n), /** @type {TemplateNode} */
  n;
}
function D1(e) {
  e.textContent = "";
}
function mo(e) {
  je === null && Se === null && na(), Se !== null && (Se.f & m0) !== 0 && je === null && ra(), Wt && ta();
}
function pa(e, r) {
  var t = r.last;
  t === null ? r.last = r.first = e : (t.next = e, e.prev = t, r.last = e);
}
function bt(e, r, t, n = !0) {
  var o = je, i = {
    ctx: Me,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | V0,
    first: null,
    fn: r,
    last: null,
    next: null,
    parent: o,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (t)
    try {
      Or(i), i.f |= M1;
    } catch (l) {
      throw k0(i), l;
    }
  else r !== null && B1(i);
  var s = t && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (io | T1)) === 0;
  if (!s && n && (o !== null && pa(i, o), Se !== null && (Se.f & P0) !== 0)) {
    var a = (
      /** @type {Derived} */
      Se
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return i;
}
function yo() {
  return Se !== null && !$0;
}
function W1(e) {
  const r = bt(Pr, null, !1);
  return T0(r, y0), r.teardown = e, r;
}
function De(e) {
  mo();
  var r = je !== null && (je.f & X0) !== 0 && Me !== null && !Me.m;
  if (r) {
    var t = (
      /** @type {ComponentContext} */
      Me
    );
    (t.e ?? (t.e = [])).push({
      fn: e,
      effect: je,
      reaction: Se
    });
  } else {
    var n = Q0(e);
    return n;
  }
}
function bo(e) {
  return mo(), wt(e);
}
function ma(e) {
  const r = bt(yt, e, !0);
  return () => {
    k0(r);
  };
}
function ya(e) {
  const r = bt(yt, e, !0);
  return (t = {}) => new Promise((n) => {
    t.outro ? er(r, () => {
      k0(r), n(void 0);
    }) : (k0(r), n(void 0));
  });
}
function Q0(e) {
  return bt(oo, e, !1);
}
function Pt(e, r) {
  var t = (
    /** @type {ComponentContextLegacy} */
    Me
  ), n = { effect: null, ran: !1 };
  t.l.r1.push(n), n.effect = wt(() => {
    e(), !n.ran && (n.ran = !0, I(t.l.r2, !0), Q(r));
  });
}
function Nr() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Me
  );
  wt(() => {
    if (c(e.l.r2)) {
      for (var r of e.l.r1) {
        var t = r.effect;
        (t.f & y0) !== 0 && T0(t, ct), pr(t) && Or(t), r.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function wt(e) {
  return bt(Pr, e, !0);
}
function B(e, r = [], t = ht) {
  const n = r.map(t);
  return Ot(() => e(...n.map(c)));
}
function Ot(e, r = 0) {
  return bt(Pr | Tr | r, e, !0);
}
function at(e, r = !0) {
  return bt(Pr | X0, e, !0, r);
}
function wo(e) {
  var r = e.teardown;
  if (r !== null) {
    const t = Wt, n = Se;
    xn(!0), L0(null);
    try {
      r.call(null);
    } finally {
      xn(t), L0(n);
    }
  }
}
function _o(e, r = !1) {
  var t = e.first;
  for (e.first = e.last = null; t !== null; ) {
    var n = t.next;
    (t.f & yt) !== 0 ? t.parent = null : k0(t, r), t = n;
  }
}
function ba(e) {
  for (var r = e.first; r !== null; ) {
    var t = r.next;
    (r.f & X0) === 0 && k0(r), r = t;
  }
}
function k0(e, r = !0) {
  var t = !1;
  (r || (e.f & Qs) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (wa(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), t = !0), _o(e, r && !t), $r(e, 0), T0(e, R1);
  var n = e.transitions;
  if (n !== null)
    for (const i of n)
      i.stop();
  wo(e);
  var o = e.parent;
  o !== null && o.first !== null && xo(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function wa(e, r) {
  for (; e !== null; ) {
    var t = e === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ J0(e)
    );
    e.remove(), e = t;
  }
}
function xo(e) {
  var r = e.parent, t = e.prev, n = e.next;
  t !== null && (t.next = n), n !== null && (n.prev = t), r !== null && (r.first === e && (r.first = n), r.last === e && (r.last = t));
}
function er(e, r) {
  var t = [];
  U1(e, t, !0), Co(t, () => {
    k0(e), r && r();
  });
}
function Co(e, r) {
  var t = e.length;
  if (t > 0) {
    var n = () => --t || r();
    for (var o of e)
      o.out(n);
  } else
    r();
}
function U1(e, r, t) {
  if ((e.f & Y0) === 0) {
    if (e.f ^= Y0, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || t) && r.push(s);
    for (var n = e.first; n !== null; ) {
      var o = n.next, i = (n.f & hr) !== 0 || (n.f & X0) !== 0;
      U1(n, r, i ? t : !1), n = o;
    }
  }
}
function Ar(e) {
  zo(e, !0);
}
function zo(e, r) {
  if ((e.f & Y0) !== 0) {
    e.f ^= Y0;
    for (var t = e.first; t !== null; ) {
      var n = t.next, o = (t.f & hr) !== 0 || (t.f & X0) !== 0;
      zo(t, o ? r : !1), t = n;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || r) && i.in();
  }
}
const _a = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let tr = [], rr = [];
function ko() {
  var e = tr;
  tr = [], Jt(e);
}
function Lo() {
  var e = rr;
  rr = [], Jt(e);
}
function Dt(e) {
  tr.length === 0 && queueMicrotask(ko), tr.push(e);
}
function xa(e) {
  rr.length === 0 && _a(Lo), rr.push(e);
}
function Ca() {
  tr.length > 0 && ko(), rr.length > 0 && Lo();
}
function za(e) {
  var r = (
    /** @type {Effect} */
    je
  );
  if ((r.f & M1) === 0) {
    if ((r.f & T1) === 0)
      throw e;
    r.fn(e);
  } else
    Eo(e, r);
}
function Eo(e, r) {
  for (; r !== null; ) {
    if ((r.f & T1) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
      }
    r = r.parent;
  }
  throw e;
}
let nr = !1, or = null, vt = !1, Wt = !1;
function xn(e) {
  Wt = e;
}
let Gt = [];
let Se = null, $0 = !1;
function L0(e) {
  Se = e;
}
let je = null;
function W0(e) {
  je = e;
}
let Ge = null;
function Ao(e) {
  Se !== null && Se.f & c1 && (Ge === null ? Ge = [Se, [e]] : Ge[1].push(e));
}
let s0 = null, g0 = 0, w0 = null;
function ka(e) {
  w0 = e;
}
let So = 1, Sr = 0, ot = !1;
function $o() {
  return ++So;
}
function pr(e) {
  var h;
  var r = e.f;
  if ((r & V0) !== 0)
    return !0;
  if ((r & ct) !== 0) {
    var t = e.deps, n = (r & m0) !== 0;
    if (t !== null) {
      var o, i, s = (r & Er) !== 0, a = n && je !== null && !ot, l = t.length;
      if (s || a) {
        var v = (
          /** @type {Derived} */
          e
        ), p = v.parent;
        for (o = 0; o < l; o++)
          i = t[o], (s || !((h = i == null ? void 0 : i.reactions) != null && h.includes(v))) && (i.reactions ?? (i.reactions = [])).push(v);
        s && (v.f ^= Er), a && p !== null && (p.f & m0) === 0 && (v.f ^= m0);
      }
      for (o = 0; o < l; o++)
        if (i = t[o], pr(
          /** @type {Derived} */
          i
        ) && uo(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!n || je !== null && !ot) && T0(e, y0);
  }
  return !1;
}
function qo(e, r, t = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var o = 0; o < n.length; o++) {
      var i = n[o];
      Ge != null && Ge[1].includes(e) && Ge[0] === Se || ((i.f & P0) !== 0 ? qo(
        /** @type {Derived} */
        i,
        r,
        !1
      ) : r === i && (t ? T0(i, V0) : (i.f & y0) !== 0 && T0(i, ct), B1(
        /** @type {Effect} */
        i
      )));
    }
}
function jo(e) {
  var y;
  var r = s0, t = g0, n = w0, o = Se, i = ot, s = Ge, a = Me, l = $0, v = e.f;
  s0 = /** @type {null | Value[]} */
  null, g0 = 0, w0 = null, ot = (v & m0) !== 0 && ($0 || !vt || Se === null), Se = (v & (X0 | yt)) === 0 ? e : null, Ge = null, mn(e.ctx), $0 = !1, Sr++, e.f |= c1;
  try {
    var p = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (s0 !== null) {
      var g;
      if ($r(e, g0), h !== null && g0 > 0)
        for (h.length = g0 + s0.length, g = 0; g < s0.length; g++)
          h[g0 + g] = s0[g];
      else
        e.deps = h = s0;
      if (!ot)
        for (g = g0; g < h.length; g++)
          ((y = h[g]).reactions ?? (y.reactions = [])).push(e);
    } else h !== null && g0 < h.length && ($r(e, g0), h.length = g0);
    if (gr() && w0 !== null && !$0 && h !== null && (e.f & (P0 | ct | V0)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      w0.length; g++)
        qo(
          w0[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (Sr++, w0 !== null && (n === null ? n = w0 : n.push(.../** @type {Source[]} */
    w0))), p;
  } catch (f) {
    za(f);
  } finally {
    s0 = r, g0 = t, w0 = n, Se = o, ot = i, Ge = s, mn(a), $0 = l, e.f ^= c1;
  }
}
function La(e, r) {
  let t = r.reactions;
  if (t !== null) {
    var n = Ks.call(t, e);
    if (n !== -1) {
      var o = t.length - 1;
      o === 0 ? t = r.reactions = null : (t[n] = t[o], t.pop());
    }
  }
  t === null && (r.f & P0) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (s0 === null || !s0.includes(r)) && (T0(r, ct), (r.f & (m0 | Er)) === 0 && (r.f ^= Er), lo(
    /** @type {Derived} **/
    r
  ), $r(
    /** @type {Derived} **/
    r,
    0
  ));
}
function $r(e, r) {
  var t = e.deps;
  if (t !== null)
    for (var n = r; n < t.length; n++)
      La(e, t[n]);
}
function Or(e) {
  var r = e.f;
  if ((r & R1) === 0) {
    T0(e, y0);
    var t = je, n = vt;
    je = e, vt = !0;
    try {
      (r & Tr) !== 0 ? ba(e) : _o(e), wo(e);
      var o = jo(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = So;
      var i;
      gn && da && (e.f & V0) !== 0 && e.deps;
    } finally {
      vt = n, je = t;
    }
  }
}
function Ea() {
  try {
    oa();
  } catch (e) {
    if (or !== null)
      Eo(e, or);
    else
      throw e;
  }
}
function Io() {
  var e = vt;
  try {
    var r = 0;
    for (vt = !0; Gt.length > 0; ) {
      r++ > 1e3 && Ea();
      var t = Gt, n = t.length;
      Gt = [];
      for (var o = 0; o < n; o++) {
        var i = Sa(t[o]);
        Aa(i);
      }
      Qt.clear();
    }
  } finally {
    nr = !1, vt = e, or = null;
  }
}
function Aa(e) {
  var r = e.length;
  if (r !== 0)
    for (var t = 0; t < r; t++) {
      var n = e[t];
      (n.f & (R1 | Y0)) === 0 && pr(n) && (Or(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? xo(n) : n.fn = null));
    }
}
function B1(e) {
  nr || (nr = !0, queueMicrotask(Io));
  for (var r = or = e; r.parent !== null; ) {
    r = r.parent;
    var t = r.f;
    if ((t & (yt | X0)) !== 0) {
      if ((t & y0) === 0) return;
      r.f ^= y0;
    }
  }
  Gt.push(r);
}
function Sa(e) {
  for (var r = [], t = e; t !== null; ) {
    var n = t.f, o = (n & (X0 | yt)) !== 0, i = o && (n & y0) !== 0;
    if (!i && (n & Y0) === 0) {
      (n & oo) !== 0 ? r.push(t) : o ? t.f ^= y0 : pr(t) && Or(t);
      var s = t.first;
      if (s !== null) {
        t = s;
        continue;
      }
    }
    var a = t.parent;
    for (t = t.next; t === null && a !== null; )
      t = a.next, a = a.parent;
  }
  return r;
}
function $(e) {
  for (var r; ; ) {
    if (Ca(), Gt.length === 0)
      return nr = !1, or = null, /** @type {T} */
      r;
    nr = !0, Io();
  }
}
async function Dr() {
  await Promise.resolve(), $();
}
function c(e) {
  var r = e.f, t = (r & P0) !== 0;
  if (Se !== null && !$0) {
    if (!(Ge != null && Ge[1].includes(e)) || Ge[0] !== Se) {
      var n = Se.deps;
      e.rv < Sr && (e.rv = Sr, s0 === null && n !== null && n[g0] === e ? g0++ : s0 === null ? s0 = [e] : (!ot || !s0.includes(e)) && s0.push(e));
    }
  } else if (t && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && (i.f & m0) === 0 && (o.f ^= m0);
  }
  return t && (o = /** @type {Derived} */
  e, pr(o) && uo(o)), Wt && Qt.has(e) ? Qt.get(e) : e.v;
}
function Q(e) {
  var r = $0;
  try {
    return $0 = !0, e();
  } finally {
    $0 = r;
  }
}
const $a = -7169;
function T0(e, r) {
  e.f = e.f & $a | r;
}
function se(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (N0 in e)
      v1(e);
    else if (!Array.isArray(e))
      for (let r in e) {
        const t = e[r];
        typeof t == "object" && t && N0 in t && v1(t);
      }
  }
}
function v1(e, r = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !r.has(e)) {
    r.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        v1(e[n], r);
      } catch {
      }
    const t = P1(e);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const n = no(t);
      for (let o in n) {
        const i = n[o].get;
        if (i)
          try {
            i.call(e);
          } catch {
          }
      }
    }
  }
}
function qa(e, r) {
  if (r) {
    const t = document.body;
    e.autofocus = !0, Dt(() => {
      document.activeElement === t && e.focus();
    });
  }
}
function Wr(e) {
  xe && /* @__PURE__ */ D0(e) !== null && D1(e);
}
let Cn = !1;
function Po() {
  Cn || (Cn = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var r;
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (r = t.__on_r) == null || r.call(t);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Z1(e) {
  var r = Se, t = je;
  L0(null), W0(null);
  try {
    return e();
  } finally {
    L0(r), W0(t);
  }
}
function ja(e, r, t, n = t) {
  e.addEventListener(r, () => Z1(t));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), n(!0);
  } : e.__on_r = () => n(!0), Po();
}
const To = /* @__PURE__ */ new Set(), h1 = /* @__PURE__ */ new Set();
function F1(e, r, t, n = {}) {
  function o(i) {
    if (n.capture || Ft.call(r, i), !i.cancelBubble)
      return Z1(() => t == null ? void 0 : t.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Dt(() => {
    r.addEventListener(e, o, n);
  }) : r.addEventListener(e, o, n), o;
}
function St(e, r, t, n = {}) {
  var o = F1(r, e, t, n);
  return () => {
    e.removeEventListener(r, o, n);
  };
}
function _e(e, r, t, n, o) {
  var i = { capture: n, passive: o }, s = F1(e, r, t, i);
  (r === document.body || // @ts-ignore
  r === window || // @ts-ignore
  r === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  r instanceof HTMLMediaElement) && W1(() => {
    r.removeEventListener(e, s, i);
  });
}
function Je(e) {
  for (var r = 0; r < e.length; r++)
    To.add(e[r]);
  for (var t of h1)
    t(e);
}
function Ft(e) {
  var U;
  var r = this, t = (
    /** @type {Node} */
    r.ownerDocument
  ), n = e.type, o = ((U = e.composedPath) == null ? void 0 : U.call(e)) || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  ), s = 0, a = e.__root;
  if (a) {
    var l = o.indexOf(a);
    if (l !== -1 && (r === document || r === /** @type {any} */
    window)) {
      e.__root = r;
      return;
    }
    var v = o.indexOf(r);
    if (v === -1)
      return;
    l <= v && (s = l);
  }
  if (i = /** @type {Element} */
  o[s] || e.target, i !== r) {
    Xt(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || t;
      }
    });
    var p = Se, h = je;
    L0(null), W0(null);
    try {
      for (var g, y = []; i !== null; ) {
        var f = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var w = i["__" + n];
          if (w != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Rt(w)) {
              var [z, ...L] = w;
              z.apply(i, [e, ...L]);
            } else
              w.call(i, e);
        } catch (S) {
          g ? y.push(S) : g = S;
        }
        if (e.cancelBubble || f === r || f === null)
          break;
        i = f;
      }
      if (g) {
        for (let S of y)
          queueMicrotask(() => {
            throw S;
          });
        throw g;
      }
    } finally {
      e.__root = r, delete e.currentTarget, L0(p), W0(h);
    }
  }
}
function Ro(e) {
  var r = document.createElement("template");
  return r.innerHTML = e.replaceAll("<!>", "<!---->"), r.content;
}
function O0(e, r) {
  var t = (
    /** @type {Effect} */
    je
  );
  t.nodes_start === null && (t.nodes_start = e, t.nodes_end = r);
}
// @__NO_SIDE_EFFECTS__
function P(e, r) {
  var t = (r & Bs) !== 0, n = (r & Zs) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (xe)
      return O0(Pe, null), Pe;
    o === void 0 && (o = Ro(i ? e : "<!>" + e), t || (o = /** @type {Node} */
    /* @__PURE__ */ D0(o)));
    var s = (
      /** @type {TemplateNode} */
      n || ho ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (t) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ D0(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      O0(a, l);
    } else
      O0(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Ia(e, r, t = "svg") {
  var n = !e.startsWith("<!>"), o = `<${t}>${n ? e : "<!>" + e}</${t}>`, i;
  return () => {
    if (xe)
      return O0(Pe, null), Pe;
    if (!i) {
      var s = (
        /** @type {DocumentFragment} */
        Ro(o)
      ), a = (
        /** @type {Element} */
        /* @__PURE__ */ D0(s)
      );
      i = /** @type {Element} */
      /* @__PURE__ */ D0(a);
    }
    var l = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    return O0(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function we(e, r) {
  return /* @__PURE__ */ Ia(e, r, "svg");
}
function ze(e = "") {
  if (!xe) {
    var r = st(e + "");
    return O0(r, r), r;
  }
  var t = Pe;
  return t.nodeType !== 3 && (t.before(t = st()), z0(t)), O0(t, t), t;
}
function Ue() {
  if (xe)
    return O0(Pe, null), Pe;
  var e = document.createDocumentFragment(), r = document.createComment(""), t = st();
  return e.append(r, t), O0(r, t), e;
}
function m(e, r) {
  if (xe) {
    je.nodes_end = Pe, Nt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    r
  );
}
function Pa(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Ta = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function Ra(e) {
  return Ta.includes(e);
}
const Ma = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function Na(e) {
  return e = e.toLowerCase(), Ma[e] ?? e;
}
const Oa = ["touchstart", "touchmove"];
function Da(e) {
  return Oa.includes(e);
}
let g1 = !0;
function J(e, r) {
  var t = r == null ? "" : typeof r == "object" ? r + "" : r;
  t !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = t, e.nodeValue = t + "");
}
function Mo(e, r) {
  return No(e, r);
}
function Wa(e, r) {
  f1(), r.intro = r.intro ?? !1;
  const t = r.target, n = xe, o = Pe;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ D0(t)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== $1); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ J0(i);
    if (!i)
      throw $t;
    q0(!0), z0(
      /** @type {Comment} */
      i
    ), Nt();
    const s = No(e, { ...r, anchor: i });
    if (Pe === null || Pe.nodeType !== 8 || /** @type {Comment} */
    Pe.data !== j1)
      throw Mr(), $t;
    return q0(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === $t)
      return r.recover === !1 && ia(), f1(), D1(t), q0(!1), Mo(e, r);
    throw s;
  } finally {
    q0(n), z0(o);
  }
}
const kt = /* @__PURE__ */ new Map();
function No(e, { target: r, anchor: t, props: n = {}, events: o, context: i, intro: s = !0 }) {
  f1();
  var a = /* @__PURE__ */ new Set(), l = (h) => {
    for (var g = 0; g < h.length; g++) {
      var y = h[g];
      if (!a.has(y)) {
        a.add(y);
        var f = Da(y);
        r.addEventListener(y, Ft, { passive: f });
        var w = kt.get(y);
        w === void 0 ? (document.addEventListener(y, Ft, { passive: f }), kt.set(y, 1)) : kt.set(y, w + 1);
      }
    }
  };
  l(I1(To)), h1.add(l);
  var v = void 0, p = ya(() => {
    var h = t ?? r.appendChild(st());
    return at(() => {
      if (i) {
        V({});
        var g = (
          /** @type {ComponentContext} */
          Me
        );
        g.c = i;
      }
      o && (n.$$events = o), xe && O0(
        /** @type {TemplateNode} */
        h,
        null
      ), g1 = s, v = e(h, n) || {}, g1 = !0, xe && (je.nodes_end = Pe), i && G();
    }), () => {
      var f;
      for (var g of a) {
        r.removeEventListener(g, Ft);
        var y = (
          /** @type {number} */
          kt.get(g)
        );
        --y === 0 ? (document.removeEventListener(g, Ft), kt.delete(g)) : kt.set(g, y);
      }
      h1.delete(l), h !== t && ((f = h.parentNode) == null || f.removeChild(h));
    };
  });
  return p1.set(v, p), v;
}
let p1 = /* @__PURE__ */ new WeakMap();
function Ua(e, r) {
  const t = p1.get(e);
  return t ? (p1.delete(e), t(r)) : Promise.resolve();
}
function f0(e) {
  Me === null && Rr(), Mt && Me.l !== null ? Oo(Me).m.push(e) : De(() => {
    const r = Q(e);
    if (typeof r == "function") return (
      /** @type {() => void} */
      r
    );
  });
}
function ut(e) {
  Me === null && Rr(), f0(() => () => Q(e));
}
function Ba(e, r, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(e, { detail: r, bubbles: t, cancelable: n });
}
function H1() {
  const e = Me;
  return e === null && Rr(), (r, t, n) => {
    var i;
    const o = (
      /** @type {Record<string, Function | Function[]>} */
      (i = e.s.$$events) == null ? void 0 : i[
        /** @type {any} */
        r
      ]
    );
    if (o) {
      const s = Rt(o) ? o.slice() : [o], a = Ba(
        /** @type {string} */
        r,
        t,
        n
      );
      for (const l of s)
        l.call(e.x, a);
      return !a.defaultPrevented;
    }
    return !0;
  };
}
function Za(e) {
  Me === null && Rr(), Me.l === null && sa(), Oo(Me).a.push(e);
}
function Oo(e) {
  var r = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return r.u ?? (r.u = { a: [], b: [], m: [] });
}
function Z(e, r, [t, n] = [0, 0]) {
  xe && t === 0 && Nt();
  var o = e, i = null, s = null, a = u0, l = t > 0 ? hr : 0, v = !1;
  const p = (g, y = !0) => {
    v = !0, h(y, g);
  }, h = (g, y) => {
    if (a === (a = g)) return;
    let f = !1;
    if (xe && n !== -1) {
      if (t === 0) {
        const z = vo(o);
        z === $1 ? n = 0 : z === q1 ? n = 1 / 0 : (n = parseInt(z.substring(1)), n !== n && (n = a ? 1 / 0 : -1));
      }
      const w = n > t;
      !!a === w && (o = d1(), z0(o), q0(!1), f = !0, n = -1);
    }
    a ? (i ? Ar(i) : y && (i = at(() => y(o))), s && er(s, () => {
      s = null;
    })) : (s ? Ar(s) : y && (s = at(() => y(o, [t + 1, n]))), i && er(i, () => {
      i = null;
    })), f && q0(!0);
  };
  Ot(() => {
    v = !1, r(p), v || h(null, null);
  }, l), xe && (o = Pe);
}
function it(e, r) {
  return r;
}
function Fa(e, r, t, n) {
  for (var o = [], i = r.length, s = 0; s < i; s++)
    U1(r[s].e, o, !0);
  var a = i > 0 && o.length === 0 && t !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      t.parentNode
    );
    D1(l), l.append(
      /** @type {Element} */
      t
    ), n.clear(), rt(e, r[0].prev, r[i - 1].next);
  }
  Co(o, () => {
    for (var v = 0; v < i; v++) {
      var p = r[v];
      a || (n.delete(p.k), rt(e, p.prev, p.next)), k0(p.e, !a);
    }
  });
}
function j0(e, r, t, n, o, i = null) {
  var s = e, a = { flags: r, items: /* @__PURE__ */ new Map(), first: null }, l = (r & to) !== 0;
  if (l) {
    var v = (
      /** @type {Element} */
      e
    );
    s = xe ? z0(
      /** @type {Comment | Text} */
      /* @__PURE__ */ D0(v)
    ) : v.appendChild(st());
  }
  xe && Nt();
  var p = null, h = !1, g = /* @__PURE__ */ x0(() => {
    var y = t();
    return Rt(y) ? y : y == null ? [] : I1(y);
  });
  Ot(() => {
    var y = c(g), f = y.length;
    if (h && f === 0)
      return;
    h = f === 0;
    let w = !1;
    if (xe) {
      var z = vo(s) === q1;
      z !== (f === 0) && (s = d1(), z0(s), q0(!1), w = !0);
    }
    if (xe) {
      for (var L = null, U, S = 0; S < f; S++) {
        if (Pe.nodeType === 8 && /** @type {Comment} */
        Pe.data === j1) {
          s = /** @type {Comment} */
          Pe, w = !0, q0(!1);
          break;
        }
        var E = y[S], x = n(E, S);
        U = Do(
          Pe,
          a,
          L,
          null,
          E,
          x,
          S,
          o,
          r,
          t
        ), a.items.set(x, U), L = U;
      }
      f > 0 && z0(d1());
    }
    xe || Ha(y, a, s, o, r, n, t), i !== null && (f === 0 ? p ? Ar(p) : p = at(() => i(s)) : p !== null && er(p, () => {
      p = null;
    })), w && q0(!0), c(g);
  }), xe && (s = Pe);
}
function Ha(e, r, t, n, o, i, s) {
  var H, X, ne, T;
  var a = (o & Rs) !== 0, l = (o & (A1 | S1)) !== 0, v = e.length, p = r.items, h = r.first, g = h, y, f = null, w, z = [], L = [], U, S, E, x;
  if (a)
    for (x = 0; x < v; x += 1)
      U = e[x], S = i(U, x), E = p.get(S), E !== void 0 && ((H = E.a) == null || H.measure(), (w ?? (w = /* @__PURE__ */ new Set())).add(E));
  for (x = 0; x < v; x += 1) {
    if (U = e[x], S = i(U, x), E = p.get(S), E === void 0) {
      var b = g ? (
        /** @type {TemplateNode} */
        g.e.nodes_start
      ) : t;
      f = Do(
        b,
        r,
        f,
        f === null ? r.first : f.next,
        U,
        S,
        x,
        n,
        o,
        s
      ), p.set(S, f), z = [], L = [], g = f.next;
      continue;
    }
    if (l && Ka(E, U, x, o), (E.e.f & Y0) !== 0 && (Ar(E.e), a && ((X = E.a) == null || X.unfix(), (w ?? (w = /* @__PURE__ */ new Set())).delete(E))), E !== g) {
      if (y !== void 0 && y.has(E)) {
        if (z.length < L.length) {
          var C = L[0], k;
          f = C.prev;
          var A = z[0], R = z[z.length - 1];
          for (k = 0; k < z.length; k += 1)
            zn(z[k], C, t);
          for (k = 0; k < L.length; k += 1)
            y.delete(L[k]);
          rt(r, A.prev, R.next), rt(r, f, A), rt(r, R, C), g = C, f = R, x -= 1, z = [], L = [];
        } else
          y.delete(E), zn(E, g, t), rt(r, E.prev, E.next), rt(r, E, f === null ? r.first : f.next), rt(r, f, E), f = E;
        continue;
      }
      for (z = [], L = []; g !== null && g.k !== S; )
        (g.e.f & Y0) === 0 && (y ?? (y = /* @__PURE__ */ new Set())).add(g), L.push(g), g = g.next;
      if (g === null)
        continue;
      E = g;
    }
    z.push(E), f = E, g = E.next;
  }
  if (g !== null || y !== void 0) {
    for (var W = y === void 0 ? [] : I1(y); g !== null; )
      (g.e.f & Y0) === 0 && W.push(g), g = g.next;
    var D = W.length;
    if (D > 0) {
      var O = (o & to) !== 0 && v === 0 ? t : null;
      if (a) {
        for (x = 0; x < D; x += 1)
          (ne = W[x].a) == null || ne.measure();
        for (x = 0; x < D; x += 1)
          (T = W[x].a) == null || T.fix();
      }
      Fa(r, W, O, p);
    }
  }
  a && Dt(() => {
    var M;
    if (w !== void 0)
      for (E of w)
        (M = E.a) == null || M.apply();
  }), je.first = r.first && r.first.e, je.last = f && f.e;
}
function Ka(e, r, t, n) {
  (n & A1) !== 0 && u1(e.v, r), (n & S1) !== 0 ? u1(
    /** @type {Value<number>} */
    e.i,
    t
  ) : e.i = t;
}
function Do(e, r, t, n, o, i, s, a, l, v) {
  var p = (l & A1) !== 0, h = (l & Ms) === 0, g = p ? h ? /* @__PURE__ */ a0(o, !1, !1) : gt(o) : o, y = (l & S1) === 0 ? s : gt(s), f = {
    i: y,
    v: g,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: t,
    next: n
  };
  try {
    return f.e = at(() => a(e, g, y, v), xe), f.e.prev = t && t.e, f.e.next = n && n.e, t === null ? r.first = f : (t.next = f, t.e.next = f.e), n !== null && (n.prev = f, n.e.prev = f.e), f;
  } finally {
  }
}
function zn(e, r, t) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : t, o = r ? (
    /** @type {TemplateNode} */
    r.e.nodes_start
  ) : t, i = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); i !== n; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ J0(i)
    );
    o.before(i), i = s;
  }
}
function rt(e, r, t) {
  r === null ? e.first = t : (r.next = t, r.e.next = t && t.e), t !== null && (t.prev = r, t.e.prev = r && r.e);
}
function pt(e, r, t, n, o) {
  var a;
  xe && Nt();
  var i = (a = r.$$slots) == null ? void 0 : a[t], s = !1;
  i === !0 && (i = r[t === "default" ? "children" : t], s = !0), i === void 0 || i(e, s ? () => n : n);
}
function m1(e, r, t) {
  xe && Nt();
  var n = e, o, i;
  Ot(() => {
    o !== (o = r()) && (i && (er(i), i = null), o && (i = at(() => t(n, o))));
  }, hr), xe && (n = Pe);
}
function de(e, r) {
  Dt(() => {
    var t = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      t.host ? (
        /** @type {ShadowRoot} */
        t
      ) : (
        /** @type {Document} */
        t.head ?? /** @type {Document} */
        t.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + r.hash)) {
      const o = document.createElement("style");
      o.id = r.hash, o.textContent = r.code, n.appendChild(o);
    }
  });
}
function ir(e, r, t) {
  Q0(() => {
    var n = Q(() => r(e, t == null ? void 0 : t()) || {});
    if (n != null && n.destroy)
      return () => (
        /** @type {Function} */
        n.destroy()
      );
  });
}
function Ya(e, r) {
  var t = void 0, n;
  Ot(() => {
    t !== (t = r()) && (n && (k0(n), n = null), t && (n = at(() => {
      Q0(() => (
        /** @type {(node: Element) => void} */
        t(e)
      ));
    })));
  });
}
function Wo(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (r = 0; r < o; r++) e[r] && (t = Wo(e[r])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function Va() {
  for (var e, r, t = 0, n = "", o = arguments.length; t < o; t++) (e = arguments[t]) && (r = Wo(e)) && (n && (n += " "), n += r);
  return n;
}
function et(e) {
  return typeof e == "object" ? Va(e) : e ?? "";
}
const kn = [...` 	
\r\f \v\uFEFF`];
function Ga(e, r, t) {
  var n = e == null ? "" : "" + e;
  if (r && (n = n ? n + " " + r : r), t) {
    for (var o in t)
      if (t[o])
        n = n ? n + " " + o : o;
      else if (n.length)
        for (var i = o.length, s = 0; (s = n.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || kn.includes(n[s - 1])) && (a === n.length || kn.includes(n[a])) ? n = (s === 0 ? "" : n.substring(0, s)) + n.substring(a + 1) : s = a;
        }
  }
  return n === "" ? null : n;
}
function Ln(e, r = !1) {
  var t = r ? " !important;" : ";", n = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (n += " " + o + ": " + i + t);
  }
  return n;
}
function Qr(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Xa(e, r) {
  if (r) {
    var t = "", n, o;
    if (Array.isArray(r) ? (n = r[0], o = r[1]) : n = r, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      n && l.push(...Object.keys(n).map(Qr)), o && l.push(...Object.keys(o).map(Qr));
      var v = 0, p = -1;
      const w = e.length;
      for (var h = 0; h < w; h++) {
        var g = e[h];
        if (a ? g === "/" && e[h - 1] === "*" && (a = !1) : i ? i === g && (i = !1) : g === "/" && e[h + 1] === "*" ? a = !0 : g === '"' || g === "'" ? i = g : g === "(" ? s++ : g === ")" && s--, !a && i === !1 && s === 0) {
          if (g === ":" && p === -1)
            p = h;
          else if (g === ";" || h === w - 1) {
            if (p !== -1) {
              var y = Qr(e.substring(v, p).trim());
              if (!l.includes(y)) {
                g !== ";" && h++;
                var f = e.substring(v, h).trim();
                t += " " + f + ";";
              }
            }
            v = h + 1, p = -1;
          }
        }
      }
    }
    return n && (t += Ln(n)), o && (t += Ln(o, !0)), t = t.trim(), t === "" ? null : t;
  }
  return e == null ? null : String(e);
}
function ke(e, r, t, n, o, i) {
  var s = e.__className;
  if (xe || s !== t || s === void 0) {
    var a = Ga(t, n, i);
    (!xe || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : r ? e.className = a : e.setAttribute("class", a)), e.__className = t;
  } else if (i && o !== i)
    for (var l in i) {
      var v = !!i[l];
      (o == null || v !== !!o[l]) && e.classList.toggle(l, v);
    }
  return i;
}
function e1(e, r = {}, t, n) {
  for (var o in t) {
    var i = t[o];
    r[o] !== i && (t[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, n));
  }
}
function Ze(e, r, t, n) {
  var o = e.__style;
  if (xe || o !== r) {
    var i = Xa(r, n);
    (!xe || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = r;
  } else n && (Array.isArray(n) ? (e1(e, t == null ? void 0 : t[0], n[0]), e1(e, t == null ? void 0 : t[1], n[1], "important")) : e1(e, t, n));
  return n;
}
function y1(e, r, t) {
  if (e.multiple) {
    if (r == null)
      return;
    if (!Rt(r))
      return ga();
    for (var n of e.options)
      n.selected = r.includes(En(n));
    return;
  }
  for (n of e.options) {
    var o = En(n);
    if (va(o, r)) {
      n.selected = !0;
      return;
    }
  }
  (!t || r !== void 0) && (e.selectedIndex = -1);
}
function Ja(e, r) {
  let t = !0;
  Q0(() => {
    r && y1(e, Q(r), t), t = !1;
    var n = new MutationObserver(() => {
      var o = e.__value;
      y1(e, o);
    });
    return n.observe(e, {
      // Listen to option element changes
      childList: !0,
      subtree: !0,
      // because of <optgroup>
      // Listen to option element value attribute changes
      // (doesn't get notified of select value changes,
      // because that property is not reflected as an attribute)
      attributes: !0,
      attributeFilter: ["value"]
    }), () => {
      n.disconnect();
    };
  });
}
function En(e) {
  return "__value" in e ? e.__value : e.value;
}
const Bt = Symbol("class"), Zt = Symbol("style"), Uo = Symbol("is custom element"), Bo = Symbol("is html");
function Ht(e) {
  if (xe) {
    var r = !1, t = () => {
      if (!r) {
        if (r = !0, e.hasAttribute("value")) {
          var n = e.value;
          j(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          j(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = t, xa(t), Po();
  }
}
function t1(e, r) {
  var t = Ur(e);
  t.value === (t.value = // treat null and undefined the same for the initial value
  r ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === r && (r !== 0 || e.nodeName !== "PROGRESS") || (e.value = r ?? "");
}
function Qa(e, r) {
  var t = Ur(e);
  t.checked !== (t.checked = // treat null and undefined the same for the initial value
  r ?? void 0) && (e.checked = r);
}
function e2(e, r) {
  r ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function j(e, r, t, n) {
  var o = Ur(e);
  xe && (o[r] = e.getAttribute(r), r === "src" || r === "srcset" || r === "href" && e.nodeName === "LINK") || o[r] !== (o[r] = t) && (r === "loading" && (e[ea] = t), t == null ? e.removeAttribute(r) : typeof t != "string" && Fo(e).includes(r) ? e[r] = t : e.setAttribute(r, t));
}
function t2(e, r, t, n, o = !1) {
  var i = Ur(e), s = i[Uo], a = !i[Bo];
  let l = xe && s;
  l && q0(!1);
  var v = r || {}, p = e.tagName === "OPTION";
  for (var h in r)
    h in t || (t[h] = null);
  t.class ? t.class = et(t.class) : (n || t[Bt]) && (t.class = null), t[Zt] && (t.style ?? (t.style = null));
  var g = Fo(e);
  for (const E in t) {
    let x = t[E];
    if (p && E === "value" && x == null) {
      e.value = e.__value = "", v[E] = x;
      continue;
    }
    if (E === "class") {
      var y = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      ke(e, y, x, n, r == null ? void 0 : r[Bt], t[Bt]), v[E] = x, v[Bt] = t[Bt];
      continue;
    }
    if (E === "style") {
      Ze(e, x, r == null ? void 0 : r[Zt], t[Zt]), v[E] = x, v[Zt] = t[Zt];
      continue;
    }
    var f = v[E];
    if (!(x === f && !(x === void 0 && e.hasAttribute(E)))) {
      v[E] = x;
      var w = E[0] + E[1];
      if (w !== "$$")
        if (w === "on") {
          const b = {}, C = "$$" + E;
          let k = E.slice(2);
          var z = Ra(k);
          if (Pa(k) && (k = k.slice(0, -7), b.capture = !0), !z && f) {
            if (x != null) continue;
            e.removeEventListener(k, v[C], b), v[C] = null;
          }
          if (x != null)
            if (z)
              e[`__${k}`] = x, Je([k]);
            else {
              let A = function(R) {
                v[E].call(this, R);
              };
              var S = A;
              v[C] = F1(k, e, A, b);
            }
          else z && (e[`__${k}`] = void 0);
        } else if (E === "style")
          j(e, E, x);
        else if (E === "autofocus")
          qa(
            /** @type {HTMLElement} */
            e,
            !!x
          );
        else if (!s && (E === "__value" || E === "value" && x != null))
          e.value = e.__value = x;
        else if (E === "selected" && p)
          e2(
            /** @type {HTMLOptionElement} */
            e,
            x
          );
        else {
          var L = E;
          a || (L = Na(L));
          var U = L === "defaultValue" || L === "defaultChecked";
          if (x == null && !s && !U)
            if (i[E] = null, L === "value" || L === "checked") {
              let b = (
                /** @type {HTMLInputElement} */
                e
              );
              const C = r === void 0;
              if (L === "value") {
                let k = b.defaultValue;
                b.removeAttribute(L), b.defaultValue = k, b.value = b.__value = C ? k : null;
              } else {
                let k = b.defaultChecked;
                b.removeAttribute(L), b.defaultChecked = k, b.checked = C ? k : !1;
              }
            } else
              e.removeAttribute(E);
          else U || g.includes(L) && (s || typeof x != "string") ? e[L] = x : typeof x != "function" && j(e, L, x);
        }
    }
  }
  return l && q0(!0), v;
}
function Zo(e, r, t = [], n, o = !1, i = ht) {
  const s = t.map(i);
  var a = void 0, l = {}, v = e.nodeName === "SELECT", p = !1;
  Ot(() => {
    var h = r(...s.map(c)), g = t2(e, a, h, n, o);
    p && v && "value" in h && y1(
      /** @type {HTMLSelectElement} */
      e,
      h.value,
      !1
    );
    for (let f of Object.getOwnPropertySymbols(l))
      h[f] || k0(l[f]);
    for (let f of Object.getOwnPropertySymbols(h)) {
      var y = h[f];
      f.description === Hs && (!a || y !== a[f]) && (l[f] && k0(l[f]), l[f] = at(() => Ya(e, () => y))), g[f] = y;
    }
    a = g;
  }), v && Ja(
    /** @type {HTMLSelectElement} */
    e,
    () => (
      /** @type {Record<string | symbol, any>} */
      a.value
    )
  ), p = !0;
}
function Ur(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Uo]: e.nodeName.includes("-"),
      [Bo]: e.namespaceURI === Fs
    })
  );
}
var An = /* @__PURE__ */ new Map();
function Fo(e) {
  var r = An.get(e.nodeName);
  if (r) return r;
  An.set(e.nodeName, r = []);
  for (var t, n = e, o = Element.prototype; o !== n; ) {
    t = no(n);
    for (var i in t)
      t[i].set && r.push(i);
    n = P1(n);
  }
  return r;
}
const r2 = () => performance.now(), Z0 = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (e) => requestAnimationFrame(e)
  ),
  now: () => r2(),
  tasks: /* @__PURE__ */ new Set()
};
function Ho() {
  const e = Z0.now();
  Z0.tasks.forEach((r) => {
    r.c(e) || (Z0.tasks.delete(r), r.f());
  }), Z0.tasks.size !== 0 && Z0.tick(Ho);
}
function n2(e) {
  let r;
  return Z0.tasks.size === 0 && Z0.tick(Ho), {
    promise: new Promise((t) => {
      Z0.tasks.add(r = { c: e, f: t });
    }),
    abort() {
      Z0.tasks.delete(r);
    }
  };
}
function Cr(e, r) {
  Z1(() => {
    e.dispatchEvent(new CustomEvent(r));
  });
}
function o2(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const r = e.split("-");
  return r.length === 1 ? r[0] : r[0] + r.slice(1).map(
    /** @param {any} word */
    (t) => t[0].toUpperCase() + t.slice(1)
  ).join("");
}
function Sn(e) {
  const r = {}, t = e.split(";");
  for (const n of t) {
    const [o, i] = n.split(":");
    if (!o || i === void 0) break;
    const s = o2(o.trim());
    r[s] = i.trim();
  }
  return r;
}
const i2 = (e) => e;
function s2(e, r, t, n) {
  var o = (e & Us) !== 0, i = "both", s, a = r.inert, l = r.style.overflow, v, p;
  function h() {
    var z = Se, L = je;
    L0(null), W0(null);
    try {
      return s ?? (s = t()(r, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: i
      }));
    } finally {
      L0(z), W0(L);
    }
  }
  var g = {
    is_global: o,
    in() {
      r.inert = a, Cr(r, "introstart"), v = b1(r, h(), p, 1, () => {
        Cr(r, "introend"), v == null || v.abort(), v = s = void 0, r.style.overflow = l;
      });
    },
    out(z) {
      r.inert = !0, Cr(r, "outrostart"), p = b1(r, h(), v, 0, () => {
        Cr(r, "outroend"), z == null || z();
      });
    },
    stop: () => {
      v == null || v.abort(), p == null || p.abort();
    }
  }, y = (
    /** @type {Effect} */
    je
  );
  if ((y.transitions ?? (y.transitions = [])).push(g), g1) {
    var f = o;
    if (!f) {
      for (var w = (
        /** @type {Effect | null} */
        y.parent
      ); w && (w.f & hr) !== 0; )
        for (; (w = w.parent) && (w.f & Tr) === 0; )
          ;
      f = !w || (w.f & M1) !== 0;
    }
    f && Q0(() => {
      Q(() => g.in());
    });
  }
}
function b1(e, r, t, n, o) {
  var i = n === 1;
  if (At(r)) {
    var s, a = !1;
    return Dt(() => {
      if (!a) {
        var z = r({ direction: i ? "in" : "out" });
        s = b1(e, z, t, n, o);
      }
    }), {
      abort: () => {
        a = !0, s == null || s.abort();
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    };
  }
  if (t == null || t.deactivate(), !(r != null && r.duration))
    return o(), {
      abort: p0,
      deactivate: p0,
      reset: p0,
      t: () => n
    };
  const { delay: l = 0, css: v, tick: p, easing: h = i2 } = r;
  var g = [];
  if (i && t === void 0 && (p && p(0, 1), v)) {
    var y = Sn(v(0, 1));
    g.push(y, y);
  }
  var f = () => 1 - n, w = e.animate(g, { duration: l, fill: "forwards" });
  return w.onfinish = () => {
    w.cancel();
    var z = (t == null ? void 0 : t.t()) ?? 1 - n;
    t == null || t.abort();
    var L = n - z, U = (
      /** @type {number} */
      r.duration * Math.abs(L)
    ), S = [];
    if (U > 0) {
      var E = !1;
      if (v)
        for (var x = Math.ceil(U / 16.666666666666668), b = 0; b <= x; b += 1) {
          var C = z + L * h(b / x), k = Sn(v(C, 1 - C));
          S.push(k), E || (E = k.overflow === "hidden");
        }
      E && (e.style.overflow = "hidden"), f = () => {
        var A = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          w.currentTime
        );
        return z + L * h(A / U);
      }, p && n2(() => {
        if (w.playState !== "running") return !1;
        var A = f();
        return p(A, 1 - A), !0;
      });
    }
    w = e.animate(S, { duration: U, fill: "forwards" }), w.onfinish = () => {
      f = () => n, p == null || p(n, 1 - n), o();
    };
  }, {
    abort: () => {
      w && (w.cancel(), w.effect = null, w.onfinish = p0);
    },
    deactivate: () => {
      o = p0;
    },
    reset: () => {
      n === 0 && (p == null || p(1, 0));
    },
    t: () => f()
  };
}
function mr(e, r, t = r) {
  var n = gr();
  ja(e, "input", (o) => {
    var i = o ? e.defaultValue : e.value;
    if (i = r1(e) ? n1(i) : i, t(i), n && i !== (i = r())) {
      var s = e.selectionStart, a = e.selectionEnd;
      e.value = i ?? "", a !== null && (e.selectionStart = s, e.selectionEnd = Math.min(a, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (xe && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Q(r) == null && e.value) && t(r1(e) ? n1(e.value) : e.value), wt(() => {
    var o = r();
    r1(e) && o === n1(e.value) || e.type === "date" && !o && !e.value || o !== e.value && (e.value = o ?? "");
  });
}
function r1(e) {
  var r = e.type;
  return r === "number" || r === "range";
}
function n1(e) {
  return e === "" ? null : +e;
}
function $n(e, r) {
  return e === r || (e == null ? void 0 : e[N0]) === r;
}
function lt(e = {}, r, t, n) {
  return Q0(() => {
    var o, i;
    return wt(() => {
      o = i, i = [], Q(() => {
        e !== t(...i) && (r(e, ...i), o && $n(t(...o), e) && r(null, ...o));
      });
    }), () => {
      Dt(() => {
        i && $n(t(...i), e) && r(null, ...i);
      });
    };
  }), e;
}
function qn(e) {
  return function(...r) {
    var t = (
      /** @type {Event} */
      r[0]
    );
    return t.stopPropagation(), e == null ? void 0 : e.apply(this, r);
  };
}
function c0(e = !1) {
  const r = (
    /** @type {ComponentContextLegacy} */
    Me
  ), t = r.l.u;
  if (!t) return;
  let n = () => se(r.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ ht(() => {
      let a = !1;
      const l = r.s;
      for (const v in l)
        l[v] !== i[v] && (i[v] = l[v], a = !0);
      return a && o++, o;
    });
    n = () => c(s);
  }
  t.b.length && bo(() => {
    jn(r, n), Jt(t.b);
  }), De(() => {
    const o = Q(() => t.m.map(Gs));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), t.a.length && De(() => {
    jn(r, n), Jt(t.a);
  });
}
function jn(e, r) {
  if (e.l.s)
    for (const t of e.l.s) c(t);
  r();
}
function Te(e, r) {
  var i;
  var t = (
    /** @type {Record<string, Function[] | Function>} */
    (i = e.$$events) == null ? void 0 : i[r.type]
  ), n = Rt(t) ? t.slice() : t == null ? [] : [t];
  for (var o of n)
    o.call(this, r);
}
function K1(e, r, t) {
  if (e == null)
    return r(void 0), t && t(void 0), p0;
  const n = Q(
    () => e.subscribe(
      r,
      // @ts-expect-error
      t
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const Lt = [];
function Ko(e, r) {
  return {
    subscribe: Yo(e, r).subscribe
  };
}
function Yo(e, r = p0) {
  let t = null;
  const n = /* @__PURE__ */ new Set();
  function o(a) {
    if (ao(e, a) && (e = a, t)) {
      const l = !Lt.length;
      for (const v of n)
        v[1](), Lt.push(v, e);
      if (l) {
        for (let v = 0; v < Lt.length; v += 2)
          Lt[v][0](Lt[v + 1]);
        Lt.length = 0;
      }
    }
  }
  function i(a) {
    o(a(
      /** @type {T} */
      e
    ));
  }
  function s(a, l = p0) {
    const v = [a, l];
    return n.add(v), n.size === 1 && (t = r(o, i) || p0), a(
      /** @type {T} */
      e
    ), () => {
      n.delete(v), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
function Vo(e, r, t) {
  const n = !Array.isArray(e), o = n ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = r.length < 2;
  return Ko(t, (s, a) => {
    let l = !1;
    const v = [];
    let p = 0, h = p0;
    const g = () => {
      if (p)
        return;
      h();
      const f = r(n ? v[0] : v, s, a);
      i ? s(f) : h = typeof f == "function" ? f : p0;
    }, y = o.map(
      (f, w) => K1(
        f,
        (z) => {
          v[w] = z, p &= ~(1 << w), l && g();
        },
        () => {
          p |= 1 << w;
        }
      )
    );
    return l = !0, g(), function() {
      Jt(y), h(), l = !1;
    };
  });
}
function a2(e) {
  let r;
  return K1(e, (t) => r = t)(), r;
}
let zr = !1, w1 = Symbol();
function l2(e, r, t) {
  const n = t[r] ?? (t[r] = {
    store: null,
    source: /* @__PURE__ */ a0(void 0),
    unsubscribe: p0
  });
  if (n.store !== e && !(w1 in t))
    if (n.unsubscribe(), n.store = e ?? null, e == null)
      n.source.v = void 0, n.unsubscribe = p0;
    else {
      var o = !0;
      n.unsubscribe = K1(e, (i) => {
        o ? n.source.v = i : I(n.source, i);
      }), o = !1;
    }
  return e && w1 in t ? a2(e) : c(n.source);
}
function c2() {
  const e = {};
  function r() {
    W1(() => {
      for (var t in e)
        e[t].unsubscribe();
      Xt(e, w1, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, r];
}
function u2(e) {
  var r = zr;
  try {
    return zr = !1, [e(), zr];
  } finally {
    zr = r;
  }
}
const d2 = {
  get(e, r) {
    if (!e.exclude.includes(r))
      return c(e.version), r in e.special ? e.special[r]() : e.props[r];
  },
  set(e, r, t) {
    return r in e.special || (e.special[r] = q(
      {
        get [r]() {
          return e.props[r];
        }
      },
      /** @type {string} */
      r,
      ro
    )), e.special[r](t), wn(e.version), !0;
  },
  getOwnPropertyDescriptor(e, r) {
    if (!e.exclude.includes(r) && r in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[r]
      };
  },
  deleteProperty(e, r) {
    return e.exclude.includes(r) || (e.exclude.push(r), wn(e.version)), !0;
  },
  has(e, r) {
    return e.exclude.includes(r) ? !1 : r in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((r) => !e.exclude.includes(r));
  }
};
function qr(e, r) {
  return new Proxy({ props: e, exclude: r, special: {}, version: gt(0) }, d2);
}
const f2 = {
  get(e, r) {
    let t = e.props.length;
    for (; t--; ) {
      let n = e.props[t];
      if (At(n) && (n = n()), typeof n == "object" && n !== null && r in n) return n[r];
    }
  },
  set(e, r, t) {
    let n = e.props.length;
    for (; n--; ) {
      let o = e.props[n];
      At(o) && (o = o());
      const i = K0(o, r);
      if (i && i.set)
        return i.set(t), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, r) {
    let t = e.props.length;
    for (; t--; ) {
      let n = e.props[t];
      if (At(n) && (n = n()), typeof n == "object" && n !== null && r in n) {
        const o = K0(n, r);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, r) {
    if (r === N0 || r === N1) return !1;
    for (let t of e.props)
      if (At(t) && (t = t()), t != null && r in t) return !0;
    return !1;
  },
  ownKeys(e) {
    const r = [];
    for (let t of e.props)
      if (At(t) && (t = t()), !!t) {
        for (const n in t)
          r.includes(n) || r.push(n);
        for (const n of Object.getOwnPropertySymbols(t))
          r.includes(n) || r.push(n);
      }
    return r;
  }
};
function In(...e) {
  return new Proxy({ props: e }, f2);
}
function Pn(e) {
  var r;
  return ((r = e.ctx) == null ? void 0 : r.d) ?? !1;
}
function q(e, r, t, n) {
  var b;
  var o = (t & Ns) !== 0, i = !Mt || (t & Os) !== 0, s = (t & Ds) !== 0, a = (t & Ws) !== 0, l = !1, v;
  s ? [v, l] = u2(() => (
    /** @type {V} */
    e[r]
  )) : v = /** @type {V} */
  e[r];
  var p = N0 in e || N1 in e, h = s && (((b = K0(e, r)) == null ? void 0 : b.set) ?? (p && r in e && ((C) => e[r] = C))) || void 0, g = (
    /** @type {V} */
    n
  ), y = !0, f = !1, w = () => (f = !0, y && (y = !1, a ? g = Q(
    /** @type {() => V} */
    n
  ) : g = /** @type {V} */
  n), g);
  v === void 0 && n !== void 0 && (h && i && aa(), v = w(), h && h(v));
  var z;
  if (i)
    z = () => {
      var C = (
        /** @type {V} */
        e[r]
      );
      return C === void 0 ? w() : (y = !0, f = !1, C);
    };
  else {
    var L = (o ? ht : x0)(
      () => (
        /** @type {V} */
        e[r]
      )
    );
    L.f |= Js, z = () => {
      var C = c(L);
      return C !== void 0 && (g = /** @type {V} */
      void 0), C === void 0 ? g : C;
    };
  }
  if ((t & ro) === 0 && i)
    return z;
  if (h) {
    var U = e.$$legacy;
    return function(C, k) {
      return arguments.length > 0 ? ((!i || !k || U || l) && h(k ? z() : C), C) : z();
    };
  }
  var S = !1, E = /* @__PURE__ */ a0(v), x = /* @__PURE__ */ ht(() => {
    var C = z(), k = c(E);
    return S ? (S = !1, k) : E.v = C;
  });
  return s && c(x), o || (x.equals = O1), function(C, k) {
    if (arguments.length > 0) {
      const A = k ? c(x) : i && s ? We(C) : C;
      if (!x.equals(A)) {
        if (S = !0, I(E, A), f && g !== void 0 && (g = A), Pn(x))
          return C;
        Q(() => c(x));
      }
      return C;
    }
    return Pn(x) ? x.v : c(x);
  };
}
function v2(e) {
  return new h2(e);
}
var B0, _0;
class h2 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(r) {
    /** @type {any} */
    A0(this, B0);
    /** @type {Record<string, any>} */
    A0(this, _0);
    var i;
    var t = /* @__PURE__ */ new Map(), n = (s, a) => {
      var l = /* @__PURE__ */ a0(a, !1, !1);
      return t.set(s, l), l;
    };
    const o = new Proxy(
      { ...r.props || {}, $$events: {} },
      {
        get(s, a) {
          return c(t.get(a) ?? n(a, Reflect.get(s, a)));
        },
        has(s, a) {
          return a === N1 ? !0 : (c(t.get(a) ?? n(a, Reflect.get(s, a))), Reflect.has(s, a));
        },
        set(s, a, l) {
          return I(t.get(a) ?? n(a, l), l), Reflect.set(s, a, l);
        }
      }
    );
    M0(this, _0, (r.hydrate ? Wa : Mo)(r.component, {
      target: r.target,
      anchor: r.anchor,
      props: o,
      context: r.context,
      intro: r.intro ?? !1,
      recover: r.recover
    })), (!((i = r == null ? void 0 : r.props) != null && i.$$host) || r.sync === !1) && $(), M0(this, B0, o.$$events);
    for (const s of Object.keys(he(this, _0)))
      s === "$set" || s === "$destroy" || s === "$on" || Xt(this, s, {
        get() {
          return he(this, _0)[s];
        },
        /** @param {any} value */
        set(a) {
          he(this, _0)[s] = a;
        },
        enumerable: !0
      });
    he(this, _0).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(o, s);
    }, he(this, _0).$destroy = () => {
      Ua(he(this, _0));
    };
  }
  /** @param {Record<string, any>} props */
  $set(r) {
    he(this, _0).$set(r);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(r, t) {
    he(this, B0)[r] = he(this, B0)[r] || [];
    const n = (...o) => t.call(this, ...o);
    return he(this, B0)[r].push(n), () => {
      he(this, B0)[r] = he(this, B0)[r].filter(
        /** @param {any} fn */
        (o) => o !== n
      );
    };
  }
  $destroy() {
    he(this, _0).$destroy();
  }
}
B0 = new WeakMap(), _0 = new WeakMap();
let Go;
typeof HTMLElement == "function" && (Go = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(r, t, n) {
    super();
    /** The Svelte component constructor */
    ve(this, "$$ctor");
    /** Slots */
    ve(this, "$$s");
    /** @type {any} The Svelte component instance */
    ve(this, "$$c");
    /** Whether or not the custom element is connected */
    ve(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ve(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ve(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ve(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ve(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ve(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ve(this, "$$me");
    this.$$ctor = r, this.$$s = t, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(r, t, n) {
    if (this.$$l[r] = this.$$l[r] || [], this.$$l[r].push(t), this.$$c) {
      const o = this.$$c.$on(r, t);
      this.$$l_u.set(t, o);
    }
    super.addEventListener(r, t, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(r, t, n) {
    if (super.removeEventListener(r, t, n), this.$$c) {
      const o = this.$$l_u.get(t);
      o && (o(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(i) {
        return (s) => {
          const a = document.createElement("slot");
          i !== "default" && (a.name = i), m(s, a);
        };
      };
      var r = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, o = g2(this);
      for (const i of this.$$s)
        i in o && (i === "default" && !this.$$d.children ? (this.$$d.children = t(i), n.default = !0) : n[i] = t(i));
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = kr(s, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = v2({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = ma(() => {
        wt(() => {
          var i;
          this.$$r = !0;
          for (const s of Lr(this.$$c)) {
            if (!((i = this.$$p_d[s]) != null && i.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const a = kr(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, a);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const s of this.$$l[i]) {
          const a = this.$$c.$on(i, s);
          this.$$l_u.set(s, a);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(r, t, n) {
    var o;
    this.$$r || (r = this.$$g_p(r), this.$$d[r] = kr(r, n, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [r]: this.$$d[r] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(r) {
    return Lr(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === r || !this.$$p_d[t].attribute && t.toLowerCase() === r
    ) || r;
  }
});
function kr(e, r, t, n) {
  var i;
  const o = (i = t[e]) == null ? void 0 : i.type;
  if (r = o === "Boolean" && typeof r != "boolean" ? r != null : r, !n || !t[e])
    return r;
  if (n === "toAttribute")
    switch (o) {
      case "Object":
      case "Array":
        return r == null ? null : JSON.stringify(r);
      case "Boolean":
        return r ? "" : null;
      case "Number":
        return r ?? null;
      default:
        return r;
    }
  else
    switch (o) {
      case "Object":
      case "Array":
        return r && JSON.parse(r);
      case "Boolean":
        return r;
      // conversion already handled above
      case "Number":
        return r != null ? +r : r;
      default:
        return r;
    }
}
function g2(e) {
  const r = {};
  return e.childNodes.forEach((t) => {
    r[
      /** @type {Element} node */
      t.slot || "default"
    ] = !0;
  }), r;
}
function K(e, r, t, n, o, i) {
  let s = class extends Go {
    constructor() {
      super(e, t, o), this.$$p_d = r;
    }
    static get observedAttributes() {
      return Lr(r).map(
        (a) => (r[a].attribute || a).toLowerCase()
      );
    }
  };
  return Lr(r).forEach((a) => {
    Xt(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        var h;
        l = kr(a, l, r), this.$$d[a] = l;
        var v = this.$$c;
        if (v) {
          var p = (h = K0(v, a)) == null ? void 0 : h.get;
          p ? v[a] = l : v.$set({ [a]: l });
        }
      }
    });
  }), n.forEach((a) => {
    Xt(s.prototype, a, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function Xo(e, r) {
  let t = 0;
  const n = [];
  for (; t !== -1; )
    t = e.indexOf(r, t), t !== -1 && (n.push({
      start: t,
      end: t + r.length,
      errors: 0
    }), t += 1);
  return n;
}
function Tn(e, r) {
  return r.length === 0 || e.length === 0 || Xo(e, r).length === 0 ? 0 : 1;
}
function p2(e, r, t = {}) {
  if (r.length === 0)
    return null;
  const n = Xo(e, r);
  if (n.length === 0)
    return null;
  const o = (s) => {
    const g = t.prefix ? Tn(
      e.slice(
        Math.max(0, s.start - (t.prefix.length || 0)),
        s.start
      ),
      t.prefix
    ) : 1, y = t.suffix ? Tn(
      e.slice(s.end, s.end + (t.suffix.length || 0)),
      t.suffix
    ) : 1;
    let f = 1;
    if (typeof t.hint == "number") {
      const L = Math.abs(s.start - t.hint);
      f = 1 - Math.min(L / e.length, 1);
    }
    return (50 * 1 + 20 * g + 20 * y + 2 * f) / 92;
  }, i = n.map((s) => ({
    start: s.start,
    end: s.end,
    score: o(s)
  }));
  return i.sort((s, a) => a.score - s.score), i[0];
}
function Jo(e) {
  var r;
  switch (e.nodeType) {
    case Node.ELEMENT_NODE:
    case Node.TEXT_NODE:
      return ((r = e.textContent) == null ? void 0 : r.length) ?? 0;
    default:
      return 0;
  }
}
function Rn(e) {
  let r = e.previousSibling, t = 0;
  for (; r; )
    t += Jo(r), r = r.previousSibling;
  return t;
}
function m2(e, ...r) {
  let t = r.shift();
  const n = e.ownerDocument.createNodeIterator(
    e,
    NodeFilter.SHOW_TEXT
  ), o = [];
  let i = n.nextNode(), s, a = 0;
  for (; t !== void 0 && i; )
    s = i, a + s.data.length > t ? (o.push({ node: s, offset: t - a }), t = r.shift()) : (i = n.nextNode(), a += s.data.length);
  for (; t !== void 0 && s && a === t; )
    o.push({ node: s, offset: s.data.length }), t = r.shift();
  if (t !== void 0)
    throw new RangeError("Offset exceeds text length");
  return o;
}
class C0 {
  constructor(r, t) {
    ve(this, "element");
    ve(this, "offset");
    if (t < 0)
      throw new Error("Offset is invalid");
    this.element = r, this.offset = t;
  }
  /**
   * Return a copy of this position relative to a given ancestor element.
   */
  relativeTo(r) {
    if (!r.contains(this.element))
      throw new Error("Parent is not an ancestor of current element");
    let t = this.element, n = this.offset;
    for (; t !== r; )
      n += Rn(t), t = t.parentElement;
    return new C0(t, n);
  }
  /**
   * Resolve the position to a specific text node and offset within that node.
   */
  resolve(r = {}) {
    try {
      return m2(this.element, this.offset)[0];
    } catch (t) {
      if (this.offset === 0 && r.direction !== void 0) {
        const n = document.createTreeWalker(
          this.element.getRootNode(),
          NodeFilter.SHOW_TEXT
        );
        n.currentNode = this.element;
        const o = r.direction === 1, i = o ? n.nextNode() : n.previousNode();
        if (!i)
          throw t;
        return { node: i, offset: o ? 0 : i.data.length };
      } else
        throw t;
    }
  }
  /**
   * Create a TextPosition from a character offset within a node.
   */
  static fromCharOffset(r, t) {
    switch (r.nodeType) {
      case Node.TEXT_NODE:
        return C0.fromPoint(r, t);
      case Node.ELEMENT_NODE:
        return new C0(r, t);
      default:
        throw new Error("Node is not an element or text node");
    }
  }
  /**
   * Create a TextPosition from a (node, offset) pair.
   */
  static fromPoint(r, t) {
    switch (r.nodeType) {
      case Node.TEXT_NODE: {
        if (t < 0 || t > r.data.length)
          throw new Error("Offset outside text node boundaries");
        const n = r.parentElement;
        return new C0(
          n,
          t + Rn(r)
        );
      }
      case Node.ELEMENT_NODE: {
        if (t < 0 || t > r.childNodes.length)
          throw new Error("Offset outside element boundaries");
        let n = 0;
        for (let o = 0; o < t; o++)
          n += Jo(r.childNodes[o]);
        return new C0(r, n);
      }
      default:
        throw new Error("Point is not in an element or text node");
    }
  }
}
class I0 {
  constructor(r, t) {
    ve(this, "start");
    ve(this, "end");
    this.start = r, this.end = t;
  }
  /**
   * Return a new TextRange with start and end positions relative to `element`.
   */
  relativeTo(r) {
    return new I0(
      this.start.relativeTo(r),
      this.end.relativeTo(r)
    );
  }
  /**
   * Convert this TextRange to a DOM Range object.
   */
  toRange() {
    const r = new Range(), t = this.start.resolve({
      direction: 1
      /* FORWARDS */
    }), n = this.end.resolve({
      direction: 2
      /* BACKWARDS */
    });
    return r.setStart(t.node, t.offset), r.setEnd(n.node, n.offset), r;
  }
  /**
   * Create a TextRange from a DOM Range.
   */
  static fromRange(r) {
    const t = C0.fromPoint(r.startContainer, r.startOffset), n = C0.fromPoint(r.endContainer, r.endOffset);
    return new I0(t, n);
  }
  /**
   * Create a TextRange from character offsets within a root element.
   */
  static fromOffsets(r, t, n) {
    return new I0(
      new C0(r, t),
      new C0(r, n)
    );
  }
  /**
   * Return a DOM Range with whitespace trimmed from start and end.
   */
  static trimmedRange(r) {
    const t = r.cloneRange(), n = t.startContainer, o = t.endContainer;
    if (n.nodeType === Node.TEXT_NODE) {
      const i = n.data;
      let s = t.startOffset;
      for (; s < i.length && /\s/.test(i[s]); )
        s++;
      t.setStart(n, s);
    }
    if (o.nodeType === Node.TEXT_NODE) {
      const i = o.data;
      let s = t.endOffset;
      for (; s > 0 && /\s/.test(i[s - 1]); )
        s--;
      t.setEnd(o, s);
    }
    return t;
  }
}
function Mn(e, r) {
  const t = [];
  let n = e;
  for (; n && n !== r; ) {
    if (n.parentNode) {
      const o = Array.prototype.indexOf.call(n.parentNode.childNodes, n) + 1, i = n.nodeType === Node.ELEMENT_NODE ? n.tagName.toLowerCase() : "text()";
      t.unshift(`${i}[${o}]`);
    }
    n = n.parentNode;
  }
  return t.length === 0 ? "/" : "/" + t.join("/");
}
function Nn(e, r) {
  try {
    return document.evaluate(
      e,
      r,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
  } catch (t) {
    return console.error("XPath evaluation failed:", t), null;
  }
}
class sr {
  constructor(r, t) {
    ve(this, "root");
    ve(this, "range");
    this.root = r, this.range = t;
  }
  static fromRange(r, t) {
    return new sr(r, t);
  }
  static fromSelector(r, t) {
    const n = Nn(t.startContainer, r);
    if (!n)
      throw new Error("Failed to resolve startContainer XPath");
    const o = Nn(t.endContainer, r);
    if (!o)
      throw new Error("Failed to resolve endContainer XPath");
    const i = C0.fromCharOffset(
      n,
      t.startOffset
    ), s = C0.fromCharOffset(
      o,
      t.endOffset
    ), a = new I0(i, s).toRange();
    return new sr(r, a);
  }
  toRange() {
    return this.range;
  }
  toSelector() {
    const r = I0.fromRange(this.range).toRange(), t = I0.fromRange(r), n = Mn(t.start.element, this.root), o = Mn(t.end.element, this.root);
    return {
      type: "RangeSelector",
      startContainer: n,
      startOffset: t.start.offset,
      endContainer: o,
      endOffset: t.end.offset
    };
  }
}
class ar {
  constructor(r, t, n) {
    ve(this, "root");
    ve(this, "start");
    ve(this, "end");
    this.root = r, this.start = t, this.end = n;
  }
  static fromRange(r, t) {
    const n = I0.fromRange(t).relativeTo(r);
    return new ar(
      r,
      n.start.offset,
      n.end.offset
    );
  }
  static fromSelector(r, t) {
    return new ar(r, t.start, t.end);
  }
  toSelector() {
    return {
      type: "TextPositionSelector",
      start: this.start,
      end: this.end
    };
  }
  toRange() {
    return I0.fromOffsets(this.root, this.start, this.end).toRange();
  }
}
class lr {
  constructor(r, t, n = {}) {
    ve(this, "root");
    ve(this, "exact");
    ve(this, "context");
    this.root = r, this.exact = t, this.context = n;
  }
  static fromRange(r, t) {
    const n = r.textContent, o = I0.fromRange(t).relativeTo(r), i = o.start.offset, s = o.end.offset, a = 32;
    return new lr(r, n.slice(i, s), {
      prefix: n.slice(Math.max(0, i - a), i),
      suffix: n.slice(s, Math.min(n.length, s + a))
    });
  }
  static fromSelector(r, t) {
    return new lr(r, t.exact, {
      prefix: t.prefix,
      suffix: t.suffix
    });
  }
  toSelector() {
    return {
      type: "TextQuoteSelector",
      exact: this.exact,
      prefix: this.context.prefix,
      suffix: this.context.suffix
    };
  }
  toRange(r = {}) {
    const t = this.root.textContent, n = p2(t, this.exact, {
      ...this.context,
      hint: r.hint
    });
    if (!n)
      throw new Error("Quote not found");
    return I0.fromOffsets(this.root, n.start, n.end).toRange();
  }
}
async function y2(e, r, t = {}) {
  let n = null, o = null, i = null;
  for (const l of r)
    switch (l.type) {
      case "TextPositionSelector":
        n = l, t.hint = n.start;
        break;
      case "TextQuoteSelector":
        o = l;
        break;
      case "RangeSelector":
        i = l;
        break;
    }
  const s = (l) => {
    if (o != null && o.exact && l.toString() !== o.exact)
      throw new Error("quote mismatch");
    return l;
  };
  let a = Promise.reject("unable to anchor");
  return i && (a = a.catch(() => {
    try {
      const l = sr.fromSelector(e, i);
      return Promise.resolve(s(l.toRange()));
    } catch (l) {
      return Promise.reject(l);
    }
  })), n && (a = a.catch(() => {
    try {
      const l = ar.fromSelector(e, n);
      return Promise.resolve(s(l.toRange()));
    } catch (l) {
      return Promise.reject(l);
    }
  })), o && (a = a.catch(() => {
    try {
      const l = lr.fromSelector(e, o);
      return Promise.resolve(l.toRange(t));
    } catch (l) {
      return Promise.reject(l);
    }
  })), a;
}
function b2(e, r) {
  const t = [];
  try {
    const n = sr.fromRange(e, r);
    t.push(n.toSelector());
  } catch (n) {
    console.warn("Failed to create RangeSelector:", n);
  }
  try {
    const n = ar.fromRange(e, r);
    t.push(n.toSelector());
  } catch (n) {
    console.warn("Failed to create TextPositionSelector:", n);
  }
  try {
    const n = lr.fromRange(e, r);
    t.push(n.toSelector());
  } catch (n) {
    console.warn("Failed to create TextQuoteSelector:", n);
  }
  return t;
}
function w2(e, r = "akin-highlight") {
  if (e.collapsed)
    return [];
  const t = x2(e);
  let n = [], o = null, i = null;
  t.forEach((a) => {
    o && o.nextSibling === a ? i == null || i.push(a) : (i = [a], n.push(i)), o = a;
  });
  const s = [];
  return n.forEach((a) => {
    const l = document.createElement("span");
    l.className = r, a[0].parentNode.replaceChild(l, a[0]), a.forEach((p) => l.appendChild(p)), s.push(l);
  }), s;
}
function _2(e, r) {
  var t;
  try {
    const n = ((t = r.nodeValue) == null ? void 0 : t.length) ?? r.childNodes.length;
    return (
      // Check start of node is before end of range.
      e.comparePoint(r, 0) <= 0 && // Check end of node is after start of range.
      e.comparePoint(r, n) >= 0
    );
  } catch {
    return !1;
  }
}
function x2(e) {
  if (e.collapsed)
    return [];
  let r = e.commonAncestorContainer;
  if (r && r.nodeType !== Node.ELEMENT_NODE && (r = r.parentElement), !r)
    return [];
  const t = [], n = r.ownerDocument.createNodeIterator(
    r,
    NodeFilter.SHOW_TEXT
    // Only return `Text` nodes.
  );
  let o;
  for (; o = n.nextNode(); ) {
    if (!_2(e, o))
      continue;
    const i = o;
    if (i === e.startContainer && e.startOffset > 0) {
      i.splitText(e.startOffset);
      continue;
    }
    i === e.endContainer && e.endOffset < i.data.length && i.splitText(e.endOffset), t.push(i);
  }
  return t;
}
function On(e, r = "akin-highlight") {
  e.querySelectorAll(`.${r}`).forEach((n) => {
    const o = n.parentNode;
    if (o) {
      for (; n.firstChild; )
        o.insertBefore(n.firstChild, n);
      o.removeChild(n);
    }
  });
}
function C2(e, r) {
  e.sort((s, a) => {
    const l = s.getBoundingClientRect(), v = a.getBoundingClientRect();
    return l.top - v.top;
  });
  const n = e[0].getBoundingClientRect(), o = r.getBoundingClientRect();
  return n.top - o.top;
}
function z2(e) {
  return e.map((r) => {
    switch (r.type) {
      case "RangeSelector":
        return {
          type: "RangeSelector",
          startContainer: r.startContainer || "",
          endContainer: r.endContainer || "",
          startOffset: r.startOffset || 0,
          endOffset: r.endOffset || 0
        };
      case "TextPositionSelector":
        return {
          type: "TextPositionSelector",
          start: r.start || 0,
          end: r.end || 0
        };
      case "TextQuoteSelector":
        return {
          type: "TextQuoteSelector",
          exact: r.exact || "",
          prefix: r.prefix,
          suffix: r.suffix
        };
      default:
        throw new Error(`Unknown selector type: ${r.type}`);
    }
  });
}
function k2(e, r) {
  return e.commonAncestorContainer !== r.commonAncestorContainer && !e.commonAncestorContainer.contains(r.commonAncestorContainer) && !r.commonAncestorContainer.contains(e.commonAncestorContainer) ? !1 : !(e.compareBoundaryPoints(Range.END_TO_START, r) > 0 || e.compareBoundaryPoints(Range.START_TO_END, r) < 0);
}
function L2(e, r, t = 9) {
  const n = r.filter(
    (i) => k2(e, i.range)
  );
  if (n.length === 0)
    return 0;
  const o = /* @__PURE__ */ new Set();
  n.forEach((i) => {
    i.colorIndex !== void 0 && o.add(i.colorIndex);
  });
  for (let i = 0; i < t; i++)
    if (!o.has(i))
      return i;
  return 0;
}
class E2 {
  constructor(r = 9) {
    ve(this, "colorAllocations", {});
    ve(this, "rangeRegistry", /* @__PURE__ */ new Map());
    ve(this, "maxColors");
    this.maxColors = r;
  }
  /**
   * Registers a range and gets its color index
   * @param annotationId The annotation ID
   * @param range The DOM range
   * @returns Color index to use
   */
  getColorForAnnotation(r, t) {
    if (this.colorAllocations[r] !== void 0)
      return this.colorAllocations[r];
    const n = Array.from(this.rangeRegistry.values()), o = L2(t, n, this.maxColors);
    return this.colorAllocations[r] = o, this.rangeRegistry.set(r, {
      id: r,
      range: t,
      colorIndex: o
    }), o;
  }
  /**
   * Clears all registered ranges but keeps color allocations
   * Useful when refreshing highlights
   */
  clearRanges() {
    this.rangeRegistry.clear();
  }
  /**
   * Gets all current color allocations
   */
  getAllocations() {
    return { ...this.colorAllocations };
  }
  /**
   * Resets all color allocations
   */
  reset() {
    this.colorAllocations = {}, this.rangeRegistry.clear();
  }
}
const o1 = new E2();
fa();
function qt(e) {
  const t = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), n = Math.floor(t / 1e3), o = Math.floor(n / 60), i = Math.floor(o / 60), s = Math.floor(i / 24), a = Math.floor(s / 30), l = Math.floor(a / 12);
  return l > 0 ? `${l} years ago` : a > 0 ? `${a} months ago` : s > 0 ? `${s} days ago` : i > 0 ? `${i} hours ago` : o > 0 ? `${o} minutes ago` : "just now";
}
var A2 = /* @__PURE__ */ P('<div class="context-menu svelte-1ej85oe" role="button" tabindex="0" aria-label="Annotation details"><div class="menu-content svelte-1ej85oe"><button aria-label="Open sidebar with replies" class="svelte-1ej85oe"><span class="author"><!></span> <span class="time"> </span></button></div> <div></div></div>');
const S2 = {
  hash: "svelte-1ej85oe",
  code: `.context-menu.svelte-1ej85oe {position:fixed;font-size:0.825rem;background-color:var(--color-grey-400);border-radius:0.25rem;width:18rem;max-width:90vw;padding:0;opacity:0;transform:translateY(-0.5rem);
    animation: svelte-1ej85oe-fade-in 0.2s ease forwards;pointer-events:auto;}

  @keyframes svelte-1ej85oe-fade-in {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }.menu-arrow.svelte-1ej85oe {position:absolute;width:1rem;height:1rem;background-color:inherit;transform:rotate(45deg);left:calc(50% - 0.5rem);}.menu-arrow.above.svelte-1ej85oe {bottom:-0.5rem;}.menu-arrow.below.svelte-1ej85oe {top:-0.5rem;transform:rotate(-135deg);}.menu-content.svelte-1ej85oe {padding:0.5rem;border-radius:0.5rem;background-color:inherit;position:relative;z-index:2;display:flex;gap:0.25rem;align-items:center;justify-content:center;}.context-menu.svelte-1ej85oe:hover {background-color:var(--color-grey-300);}button.svelte-1ej85oe {background:transparent;border:none;cursor:pointer;padding:0;margin:0;font-size:0.825rem;font-family:var(--font-sans);color:var(--text-color);}

  @media (prefers-color-scheme: dark) {
  }`
};
function Qo(e, r) {
  V(r, !1), de(e, S2);
  let t = q(r, "annotation", 12, null), n = q(r, "anchorElement", 12, null), o = q(r, "visible", 12, !1), i = q(r, "onSidebarOpen", 12, () => {
  }), s = q(r, "onClose", 12, () => {
  }), a = /* @__PURE__ */ a0(), l = /* @__PURE__ */ a0(""), v = /* @__PURE__ */ a0("above"), p;
  function h() {
    if (!n() || !c(a) || !o()) return;
    const E = n().getBoundingClientRect(), x = c(a).getBoundingClientRect();
    let b = E.top - x.height - 10;
    const C = E.left + E.width / 2 - x.width / 2;
    b < 10 ? (b = E.bottom + 10, I(v, "below")) : I(v, "above"), bn(a, c(a).style.left = `${Math.max(10, C)}px`), bn(a, c(a).style.top = `${Math.max(10, b)}px`);
  }
  function g() {
    o() && window.addEventListener("click", y);
  }
  function y(E) {
    c(a) && !c(a).contains(E.target) && n() && !n().contains(E.target) && (s()(), window.removeEventListener("click", y));
  }
  f0(() => {
    p = window.setInterval(
      () => {
        t() && t().created_at && I(l, qt(new Date(t().created_at)));
      },
      6e4
    ), window.addEventListener("resize", h), window.addEventListener("scroll", f, !0);
  }), ut(() => {
    p && clearInterval(p), window.removeEventListener("resize", h), window.removeEventListener("click", y), window.removeEventListener("scroll", f, !0);
  });
  function f() {
    o() && s()();
  }
  function w(E) {
    E.stopPropagation(), i()();
  }
  function z(E) {
    (E.key === "Enter" || E.key === " ") && i()();
  }
  Pt(
    () => (se(t()), qt),
    () => {
      t() && t().created_at && I(l, qt(new Date(t().created_at)));
    }
  ), Pt(
    () => (se(o()), se(n())),
    () => {
      o() && n() && (setTimeout(h, 0), setTimeout(g, 0));
    }
  ), Nr(), c0();
  var L = Ue(), U = ae(L);
  {
    var S = (E) => {
      var x = A2(), b = d(x), C = d(b), k = d(C), A = d(k);
      {
        var R = (X) => {
          var ne = ze();
          B(
            (T) => J(ne, `${T ?? ""} responded`),
            [
              () => (se(t()), Q(() => {
                var T;
                return ((T = t().replies) == null ? void 0 : T.map((M) => {
                  var F;
                  return (F = M.profile) == null ? void 0 : F.full_name;
                }).join(", ")) || "Anonymous";
              }))
            ],
            x0
          ), m(X, ne);
        }, W = (X) => {
          var ne = ze();
          B(() => J(ne, `${se(t()), Q(() => {
            var T;
            return ((T = t().profile) == null ? void 0 : T.full_name) || "Anonymous";
          }) ?? ""} marked this`)), m(X, ne);
        };
        Z(A, (X) => {
          se(t()), Q(() => t().replies) ? X(R) : X(W, !1);
        });
      }
      u(k);
      var D = _(k, 2), O = d(D, !0);
      u(D), u(C), u(b);
      var H = _(b, 2);
      u(x), lt(x, (X) => I(a, X), () => c(a)), B(() => {
        J(O, c(l)), ke(H, 1, `menu-arrow ${c(v)}`, "svelte-1ej85oe");
      }), _e("click", C, qn(w)), _e("click", x, qn(function(X) {
        Te.call(this, r, X);
      })), _e("keydown", x, z), m(E, x);
    };
    Z(U, (E) => {
      o() && t() && E(S);
    });
  }
  return m(e, L), G({
    get annotation() {
      return t();
    },
    set annotation(E) {
      t(E), $();
    },
    get anchorElement() {
      return n();
    },
    set anchorElement(E) {
      n(E), $();
    },
    get visible() {
      return o();
    },
    set visible(E) {
      o(E), $();
    },
    get onSidebarOpen() {
      return i();
    },
    set onSidebarOpen(E) {
      i(E), $();
    },
    get onClose() {
      return s();
    },
    set onClose(E) {
      s(E), $();
    }
  });
}
K(
  Qo,
  {
    annotation: {},
    anchorElement: {},
    visible: {},
    onSidebarOpen: {},
    onClose: {}
  },
  [],
  [],
  !0
);
function ei(e) {
  try {
    const r = new URL(e);
    r.username = "", r.password = "", r.hash = "";
    const t = new URLSearchParams(r.search), n = new URLSearchParams(), o = [
      "page",
      "p",
      "entry",
      "id",
      "post_id",
      "category",
      "cat",
      "tag",
      "q",
      "s",
      "search",
      "query",
      "filter",
      "sort",
      "order",
      "limit",
      "offset",
      "per_page",
      "view",
      "type",
      "format",
      "lang",
      "language"
    ], i = [
      "auth",
      "token",
      "key",
      "api",
      "jwt",
      "access",
      "refresh",
      "secret",
      "pass",
      "session",
      "oauth",
      "login",
      "user",
      "uid"
    ];
    return t.forEach((s, a) => {
      if (o.includes(a.toLowerCase())) {
        n.append(a, s);
        return;
      }
      const l = a.toLowerCase();
      !i.some(
        (p) => l === p || l.startsWith(p + "_") || l.endsWith("_" + p)
      ) && a !== "PHPSESSID" && n.append(a, s);
    }), r.search = n.toString(), r.toString();
  } catch (r) {
    return console.warn("Failed to sanitize URL:", r), e;
  }
}
const Tt = {
  serverUrl: void 0,
  apiBaseUrl: "/api/v1"
  // fallback to version 1
}, Re = We({
  pageUrl: "",
  publicKey: "",
  serverUrl: Tt.serverUrl,
  selector: "",
  debug: !1
});
function ti(e) {
  Re.pageUrl = ei(e);
}
function Y1(e) {
  Re.publicKey = e;
}
function V1(e) {
  Re.serverUrl = e;
}
function ri(e) {
  Re.selector = e;
}
function ni(e) {
  Re.debug = e;
}
var $2 = async (e, r) => {
  let t = typeof r == "function" ? await r(e) : r;
  if (t) return e.scheme === "bearer" ? `Bearer ${t}` : e.scheme === "basic" ? `Basic ${btoa(t)}` : t;
}, q2 = { bodySerializer: (e) => JSON.stringify(e, (r, t) => typeof t == "bigint" ? t.toString() : t) }, j2 = (e) => {
  switch (e) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, I2 = (e) => {
  switch (e) {
    case "form":
      return ",";
    case "pipeDelimited":
      return "|";
    case "spaceDelimited":
      return "%20";
    default:
      return ",";
  }
}, P2 = (e) => {
  switch (e) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, oi = ({ allowReserved: e, explode: r, name: t, style: n, value: o }) => {
  if (!r) {
    let a = (e ? o : o.map((l) => encodeURIComponent(l))).join(I2(n));
    switch (n) {
      case "label":
        return `.${a}`;
      case "matrix":
        return `;${t}=${a}`;
      case "simple":
        return a;
      default:
        return `${t}=${a}`;
    }
  }
  let i = j2(n), s = o.map((a) => n === "label" || n === "simple" ? e ? a : encodeURIComponent(a) : Br({ allowReserved: e, name: t, value: a })).join(i);
  return n === "label" || n === "matrix" ? i + s : s;
}, Br = ({ allowReserved: e, name: r, value: t }) => {
  if (t == null) return "";
  if (typeof t == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${r}=${e ? t : encodeURIComponent(t)}`;
}, ii = ({ allowReserved: e, explode: r, name: t, style: n, value: o }) => {
  if (o instanceof Date) return `${t}=${o.toISOString()}`;
  if (n !== "deepObject" && !r) {
    let a = [];
    Object.entries(o).forEach(([v, p]) => {
      a = [...a, v, e ? p : encodeURIComponent(p)];
    });
    let l = a.join(",");
    switch (n) {
      case "form":
        return `${t}=${l}`;
      case "label":
        return `.${l}`;
      case "matrix":
        return `;${t}=${l}`;
      default:
        return l;
    }
  }
  let i = P2(n), s = Object.entries(o).map(([a, l]) => Br({ allowReserved: e, name: n === "deepObject" ? `${t}[${a}]` : a, value: l })).join(i);
  return n === "label" || n === "matrix" ? i + s : s;
}, T2 = /\{[^{}]+\}/g, R2 = ({ path: e, url: r }) => {
  let t = r, n = r.match(T2);
  if (n) for (let o of n) {
    let i = !1, s = o.substring(1, o.length - 1), a = "simple";
    s.endsWith("*") && (i = !0, s = s.substring(0, s.length - 1)), s.startsWith(".") ? (s = s.substring(1), a = "label") : s.startsWith(";") && (s = s.substring(1), a = "matrix");
    let l = e[s];
    if (l == null) continue;
    if (Array.isArray(l)) {
      t = t.replace(o, oi({ explode: i, name: s, style: a, value: l }));
      continue;
    }
    if (typeof l == "object") {
      t = t.replace(o, ii({ explode: i, name: s, style: a, value: l }));
      continue;
    }
    if (a === "matrix") {
      t = t.replace(o, `;${Br({ name: s, value: l })}`);
      continue;
    }
    let v = encodeURIComponent(a === "label" ? `.${l}` : l);
    t = t.replace(o, v);
  }
  return t;
}, si = ({ allowReserved: e, array: r, object: t } = {}) => (n) => {
  let o = [];
  if (n && typeof n == "object") for (let i in n) {
    let s = n[i];
    if (s != null) if (Array.isArray(s)) {
      let a = oi({ allowReserved: e, explode: !0, name: i, style: "form", value: s, ...r });
      a && o.push(a);
    } else if (typeof s == "object") {
      let a = ii({ allowReserved: e, explode: !0, name: i, style: "deepObject", value: s, ...t });
      a && o.push(a);
    } else {
      let a = Br({ allowReserved: e, name: i, value: s });
      a && o.push(a);
    }
  }
  return o.join("&");
}, M2 = (e) => {
  var t;
  if (!e) return "stream";
  let r = (t = e.split(";")[0]) == null ? void 0 : t.trim();
  if (r) {
    if (r.startsWith("application/json") || r.endsWith("+json")) return "json";
    if (r === "multipart/form-data") return "formData";
    if (["application/", "audio/", "image/", "video/"].some((n) => r.startsWith(n))) return "blob";
    if (r.startsWith("text/")) return "text";
  }
}, N2 = async ({ security: e, ...r }) => {
  for (let t of e) {
    let n = await $2(t, r.auth);
    if (!n) continue;
    let o = t.name ?? "Authorization";
    switch (t.in) {
      case "query":
        r.query || (r.query = {}), r.query[o] = n;
        break;
      case "cookie":
        r.headers.append("Cookie", `${o}=${n}`);
        break;
      case "header":
      default:
        r.headers.set(o, n);
        break;
    }
    return;
  }
}, Dn = (e) => O2({ baseUrl: e.baseUrl, path: e.path, query: e.query, querySerializer: typeof e.querySerializer == "function" ? e.querySerializer : si(e.querySerializer), url: e.url }), O2 = ({ baseUrl: e, path: r, query: t, querySerializer: n, url: o }) => {
  let i = o.startsWith("/") ? o : `/${o}`, s = (e ?? "") + i;
  r && (s = R2({ path: r, url: s }));
  let a = t ? n(t) : "";
  return a.startsWith("?") && (a = a.substring(1)), a && (s += `?${a}`), s;
}, Wn = (e, r) => {
  var n;
  let t = { ...e, ...r };
  return (n = t.baseUrl) != null && n.endsWith("/") && (t.baseUrl = t.baseUrl.substring(0, t.baseUrl.length - 1)), t.headers = ai(e.headers, r.headers), t;
}, ai = (...e) => {
  let r = new Headers();
  for (let t of e) {
    if (!t || typeof t != "object") continue;
    let n = t instanceof Headers ? t.entries() : Object.entries(t);
    for (let [o, i] of n) if (i === null) r.delete(o);
    else if (Array.isArray(i)) for (let s of i) r.append(o, s);
    else i !== void 0 && r.set(o, typeof i == "object" ? JSON.stringify(i) : i);
  }
  return r;
}, i1 = class {
  constructor() {
    ve(this, "_fns");
    this._fns = [];
  }
  clear() {
    this._fns = [];
  }
  getInterceptorIndex(e) {
    return typeof e == "number" ? this._fns[e] ? e : -1 : this._fns.indexOf(e);
  }
  exists(e) {
    let r = this.getInterceptorIndex(e);
    return !!this._fns[r];
  }
  eject(e) {
    let r = this.getInterceptorIndex(e);
    this._fns[r] && (this._fns[r] = null);
  }
  update(e, r) {
    let t = this.getInterceptorIndex(e);
    return this._fns[t] ? (this._fns[t] = r, e) : !1;
  }
  use(e) {
    return this._fns = [...this._fns, e], this._fns.length - 1;
  }
}, D2 = () => ({ error: new i1(), request: new i1(), response: new i1() }), W2 = si({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), U2 = { "Content-Type": "application/json" }, Zr = (e = {}) => ({ ...q2, headers: U2, parseAs: "auto", querySerializer: W2, ...e }), B2 = (e = {}) => {
  let r = Wn(Zr(), e), t = () => ({ ...r }), n = (s) => (r = Wn(r, s), t()), o = D2(), i = async (s) => {
    let a = { ...r, ...s, fetch: s.fetch ?? r.fetch ?? globalThis.fetch, headers: ai(r.headers, s.headers) };
    a.security && await N2({ ...a, security: a.security }), a.body && a.bodySerializer && (a.body = a.bodySerializer(a.body)), (a.body === void 0 || a.body === "") && a.headers.delete("Content-Type");
    let l = Dn(a), v = { redirect: "follow", ...a }, p = new Request(l, v);
    for (let z of o.request._fns) z && (p = await z(p, a));
    let h = a.fetch, g = await h(p);
    for (let z of o.response._fns) z && (g = await z(g, p, a));
    let y = { request: p, response: g };
    if (g.ok) {
      if (g.status === 204 || g.headers.get("Content-Length") === "0") return a.responseStyle === "data" ? {} : { data: {}, ...y };
      let z = (a.parseAs === "auto" ? M2(g.headers.get("Content-Type")) : a.parseAs) ?? "json";
      if (z === "stream") return a.responseStyle === "data" ? g.body : { data: g.body, ...y };
      let L = await g[z]();
      return z === "json" && (a.responseValidator && await a.responseValidator(L), a.responseTransformer && (L = await a.responseTransformer(L))), a.responseStyle === "data" ? L : { data: L, ...y };
    }
    let f = await g.text();
    try {
      f = JSON.parse(f);
    } catch {
    }
    let w = f;
    for (let z of o.error._fns) z && (w = await z(f, g, p, a));
    if (w = w || {}, a.throwOnError) throw w;
    return a.responseStyle === "data" ? void 0 : { error: w, ...y };
  };
  return { buildUrl: Dn, connect: (s) => i({ ...s, method: "CONNECT" }), delete: (s) => i({ ...s, method: "DELETE" }), get: (s) => i({ ...s, method: "GET" }), getConfig: t, head: (s) => i({ ...s, method: "HEAD" }), interceptors: o, options: (s) => i({ ...s, method: "OPTIONS" }), patch: (s) => i({ ...s, method: "PATCH" }), post: (s) => i({ ...s, method: "POST" }), put: (s) => i({ ...s, method: "PUT" }), request: i, setConfig: n, trace: (s) => i({ ...s, method: "TRACE" }) };
};
const Ke = B2(Zr({
  baseUrl: "https://www.akin.pub/api/v1"
})), Z2 = (e) => (e.client ?? Ke).delete({
  security: [
    {
      scheme: "bearer",
      type: "http"
    }
  ],
  url: "/annotations",
  ...e
}), F2 = (e) => ((e == null ? void 0 : e.client) ?? Ke).get({
  security: [
    {
      scheme: "bearer",
      type: "http"
    }
  ],
  url: "/annotations",
  ...e
}), H2 = (e) => (e.client ?? Ke).patch({
  security: [
    {
      scheme: "bearer",
      type: "http"
    }
  ],
  url: "/annotations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e.headers
  }
}), K2 = (e) => (e.client ?? Ke).put({
  security: [
    {
      scheme: "bearer",
      type: "http"
    }
  ],
  url: "/annotations",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e.headers
  }
}), Y2 = (e) => (e.client ?? Ke).delete({
  security: [
    {
      scheme: "bearer",
      type: "http"
    }
  ],
  url: "/replies",
  ...e
}), V2 = (e) => ((e == null ? void 0 : e.client) ?? Ke).get({
  security: [
    {
      scheme: "bearer",
      type: "http"
    }
  ],
  url: "/replies",
  ...e
}), G2 = (e) => (e.client ?? Ke).patch({
  security: [
    {
      scheme: "bearer",
      type: "http"
    }
  ],
  url: "/replies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e.headers
  }
}), X2 = (e) => (e.client ?? Ke).put({
  security: [
    {
      scheme: "bearer",
      type: "http"
    }
  ],
  url: "/replies",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e.headers
  }
}), J2 = (e) => ((e == null ? void 0 : e.client) ?? Ke).get({
  security: [
    {
      scheme: "bearer",
      type: "http"
    }
  ],
  url: "/documents",
  ...e
}), Q2 = (e) => (e.client ?? Ke).put({
  security: [
    {
      scheme: "bearer",
      type: "http"
    }
  ],
  url: "/documents",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e.headers
  }
}), el = (e) => (e.client ?? Ke).get({
  security: [
    {
      scheme: "bearer",
      type: "http"
    }
  ],
  url: "/instances",
  ...e
}), tl = (e) => (e.client ?? Ke).delete({
  security: [
    {
      scheme: "bearer",
      type: "http"
    }
  ],
  url: "/subscribers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e.headers
  }
}), rl = (e) => (e.client ?? Ke).get({
  security: [
    {
      scheme: "bearer",
      type: "http"
    }
  ],
  url: "/subscribers",
  ...e
}), nl = (e) => (e.client ?? Ke).put({
  security: [
    {
      scheme: "bearer",
      type: "http"
    }
  ],
  url: "/subscribers",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e.headers
  }
}), ol = (e) => (e.client ?? Ke).post({
  security: [
    {
      scheme: "bearer",
      type: "http"
    }
  ],
  url: "/auth/signup",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e.headers
  }
}), il = (e) => (e.client ?? Ke).post({
  security: [
    {
      scheme: "bearer",
      type: "http"
    }
  ],
  url: "/auth/confirm",
  ...e,
  headers: {
    "Content-Type": "application/json",
    ...e.headers
  }
}), sl = (e) => ((e == null ? void 0 : e.client) ?? Ke).post({
  security: [
    {
      scheme: "bearer",
      type: "http"
    }
  ],
  url: "/auth/logout",
  ...e
}), li = async (e) => fetch(e, {
  credentials: "include",
  headers: {
    ...Object.fromEntries(e.headers.entries()),
    "Content-Type": "application/json"
  }
});
if (Re.serverUrl) {
  const e = `${Re.serverUrl || Tt.serverUrl}${Tt.apiBaseUrl}`;
  Ke.setConfig(Zr({
    baseUrl: e,
    // Use custom fetch function that includes credentials
    fetch: li
  }));
} else
  console.warn("Server URL is not set. The first api call has to set it to either config or settingsState");
const G1 = {
  setServerUrl(e) {
    Ke.setConfig(Zr({
      baseUrl: `${e}${Tt.apiBaseUrl}`,
      // Use custom fetch function that includes credentials
      fetch: li
    }));
  }
}, al = {
  general: "0",
  api: "1",
  database: "2",
  server: "3",
  client: "4"
}, ll = {
  general: "0",
  instance: "1",
  document: "2",
  annotation: "3",
  reply: "4",
  subscriber: "5",
  auth: "6"
}, s1 = [
  // PGRST Errors
  {
    code: "PGRST116",
    message: "The requested resource was not found",
    hint: "Try again, now or later!",
    level: "error"
  },
  // RLS Errors
  {
    code: "42501",
    message: "No permission to create this content type",
    hint: "Subscribe to Akin to create annotations.",
    level: "error"
  },
  {
    code: "23505",
    message: "Duplicate entry",
    hint: "The entry already exists.",
    level: "error"
  },
  {
    code: "otp_expired",
    message: "One time password expired",
    hint: "Try again, now or later!",
    level: "error"
  },
  // Akin Errors
  {
    code: "AKIN000",
    message: "An unexpected error occurred",
    hint: "Try again, now or later!"
  },
  // Instance Errors AKIN 41xxx
  {
    code: "AKIN41001",
    message: "No instance ID available",
    hint: "Try again, now or later!",
    level: "fatal"
  },
  // Document Errors AKIN 42xxx
  {
    code: "AKIN42001",
    message: "No document ID available",
    hint: "Try again, now or later!"
  },
  {
    code: "AKIN42002",
    refCode: "PGRST116",
    message: "Document not found",
    hint: "It will be created once the first highlight or annotation is made."
  },
  // Subscriber Errors AKIN 45xxx
  {
    code: "AKIN45001",
    refCode: "23505",
    message: "Subscription already exists",
    hint: "Unsubscribe first to create a new subscription.",
    level: "error"
  },
  {
    code: "AKIN45002",
    refCode: "PGRST116",
    message: "Failed to find a valid subscription",
    hint: "Subscribe first to this instance.",
    level: "error"
  },
  // Auth Errors AKIN 46xxx
  //signup
  {
    code: "AKIN46001",
    message: "User may not subscribe",
    hint: "Subscribe first to this instance.",
    level: "error"
  },
  {
    code: "AKIN46002",
    message: "Failed to find a valid subscription",
    hint: "Subscribe first to this instance.",
    level: "error"
  },
  {
    code: "AKIN46003",
    message: "Input validation failed",
    hint: "Check your input and try again.",
    level: "error"
  },
  {
    code: "AKIN46006",
    message: "Username is required",
    hint: "Don't know your wordpress username? [Add link to publisher recovery page]",
    level: "error"
  },
  // confirm
  {
    code: "AKIN46004",
    message: "Profile not found",
    hint: "Try another username or email.",
    level: "error"
  },
  {
    code: "AKIN46005",
    message: "Instance not found",
    hint: "Check with an admin or try again later.",
    level: "fatal"
  },
  {
    code: "AKIN46007",
    refCode: "otp_expired",
    message: "Email confirmation failed. Your magic link expired.",
    hint: "Try again, now or later.",
    level: "error"
  },
  {
    code: "AKIN46008",
    message: "Failed to confirm user",
    hint: "Check with an admin or try again later.",
    level: "error"
  },
  // session
  {
    code: "AKIN46009",
    message: "Session expired",
    hint: "You have been signed out for security reasons.",
    level: "error"
  }
];
function Un(e) {
  return l0(e).message || "An unexpected error occurred";
}
function cl(e) {
  return `AKIN${al[e.scope]}${ll[e.table]}`;
}
function l0(e, r) {
  if (r) {
    const t = cl(r), n = s1.filter((o) => o.code.startsWith(t));
    if (n.length > 0)
      return n.find((o) => o.refCode === e) || n[0];
  }
  return s1.find((t) => t.code === e) || s1[0];
}
let Fe = We({ document: null, error: null, loading: !1 });
async function ci(e, r) {
  Fe.loading = !0;
  try {
    const { data: t, error: n } = await J2({
      query: {
        instance_id: e,
        url: encodeURIComponent(r)
      }
    });
    if (n)
      throw n.error;
    if (!t || !Array.isArray(t) || t.length === 0)
      throw new TypeError("No document found");
    Fe.document = t[0];
  } catch (t) {
    Fe.error = l0(t.code, { scope: "client", table: "document" });
  } finally {
    Fe.loading = !1;
  }
}
async function X1(e) {
  Fe.loading = !0;
  try {
    const { data: r, error: t } = await Q2({ body: e });
    if (t)
      throw t;
    if (!r)
      throw new Error("No document created");
    return Fe.document = r, r;
  } catch (r) {
    return Fe.error = l0(r.code, { scope: "client", table: "document" }), null;
  } finally {
    Fe.loading = !1;
  }
}
let Y = We({
  annotations: [],
  draft: null,
  pagination: { page: 1, pageSize: 100, total: 0 },
  currentAnnotationId: null,
  hoveredAnnotationId: null,
  highlightedAnnotationId: null,
  editingAnnotationId: null,
  loading: !1,
  error: null
});
async function J1(e) {
  var r, t, n;
  Y.loading = !0, Y.error = null;
  try {
    const o = (e == null ? void 0 : e.documentId) || ((r = Fe.document) == null ? void 0 : r.id);
    if (!o) {
      Y.loading = !1, Y.error = l0("AKIN12001");
      return;
    }
    const i = e != null && e.page ? e.page : 1, s = (e == null ? void 0 : e.pageSize) || 100, a = (e == null ? void 0 : e.includeReplies) || !1, l = await F2({
      query: {
        document_id: o,
        page: i,
        page_size: s,
        includeReplies: a
      }
    });
    if (l.error)
      throw l.error;
    Y.annotations = ((t = l.data) == null ? void 0 : t.annotations) || [], Y.pagination = ((n = l.data) == null ? void 0 : n.pagination) || null;
  } catch (o) {
    Y.error = l0(o.code), Y.annotations = [];
  } finally {
    Y.loading = !1;
  }
}
async function Q1(e) {
  var r;
  Y.loading = !0, Y.error = null;
  try {
    const t = await K2({ body: e });
    if (t.error)
      throw t.error;
    const n = (r = t.data) == null ? void 0 : r.annotation;
    return n && (Y.annotations = [
      ...Y.annotations,
      n
    ], Y.currentAnnotationId = n.id), n;
  } catch (t) {
    return Y.error = l0(t.code), null;
  } finally {
    Y.loading = !1;
  }
}
async function en(e, r) {
  var t;
  Y.loading = !0, Y.error = null;
  try {
    const n = await H2({ body: { ...r, id: e }, query: { id: e } });
    if (n.error)
      throw n.error;
    const o = (t = n.data) == null ? void 0 : t.annotation;
    if (console.log("annotation updated", { annotation: o }), o) {
      const i = Y.annotations.findIndex((s) => s.id === o.id);
      if (i !== -1) {
        const s = [...Y.annotations];
        s[i] = o, Y.annotations = s;
      }
    }
    return o || null;
  } catch (n) {
    return Y.error = l0(n.code), null;
  } finally {
    Y.loading = !1;
  }
}
async function ui(e) {
  Y.loading = !0, Y.error = null;
  try {
    const r = await Z2({ query: { id: e } });
    if (r.error)
      throw r.error;
    console.log("annotation deleted", { id: e }), Y.annotations = Y.annotations.filter((t) => t.id !== e);
  } catch (r) {
    Y.error = l0(r.code);
  } finally {
    Y.loading = !1;
  }
}
function di(e) {
  Y.draft = e, Y.editingAnnotationId = null;
}
function G0(e) {
  Y.currentAnnotationId = e, Y.draft = null, Y.editingAnnotationId = null;
}
function _1(e) {
  Y.hoveredAnnotationId = e;
}
function jr(e) {
  Y.editingAnnotationId = e, Y.draft = null;
}
function x1(e) {
  Y.highlightedAnnotationId = e;
}
function ul() {
  return Y.annotations;
}
let be = We({
  replies: [],
  pagination: { page: 1, pageSize: 100, total: 0 },
  loading: !1,
  error: null,
  editingReplyId: null
});
async function fi(e, r) {
  var t, n;
  be.loading = !0, be.error = null;
  try {
    const o = e || Y.currentAnnotationId;
    if (!o) {
      be.loading = !1, be.error = "No annotation ID available";
      return;
    }
    const i = r != null && r.page ? parseInt(r.page) : 1, s = (r == null ? void 0 : r.pageSize) || 100, a = await V2({
      query: {
        annotation_id: o,
        page: i,
        page_size: s
      }
    });
    if (a.error)
      throw a.error;
    console.log("replies state updated", { data: a.data.replies }), be.replies = ((t = a.data) == null ? void 0 : t.replies) || [], be.pagination = ((n = a.data) == null ? void 0 : n.pagination) || null, be.loading = !1;
    return;
  } catch (o) {
    console.error("Error loading replies:", o), be.loading = !1, be.error = o instanceof Error ? o.message : "Failed to load replies", be.replies = [];
    return;
  }
}
async function vi(e) {
  var r;
  be.loading = !0, be.error = null;
  try {
    const t = await X2({ body: e });
    if (be.loading = !1, t.error)
      throw t.error;
    const n = (r = t.data) == null ? void 0 : r.reply;
    return console.log("reply created", { reply: n }), n && (be.replies = [...be.replies, n]), n;
  } catch (t) {
    return console.error("Error creating reply:", t), be.loading = !1, be.error = t instanceof Error ? t.message : "Failed to create reply", null;
  }
}
async function hi(e, r) {
  var t;
  be.loading = !0, be.error = null;
  try {
    const n = await G2({ body: { ...r, id: e }, query: { id: e } });
    if (be.loading = !1, n.error)
      throw n.error;
    const o = (t = n.data) == null ? void 0 : t.reply;
    if (console.log("reply updated", { reply: o }), o) {
      const i = be.replies.findIndex((s) => s.id === o.id);
      if (i !== -1) {
        const s = [...be.replies];
        s[i] = o, be.replies = s;
      }
    }
    return o || null;
  } catch (n) {
    return console.error("Error updating reply:", n), be.loading = !1, be.error = n instanceof Error ? n.message : "Failed to update reply", null;
  }
}
async function gi(e) {
  be.loading = !0, be.error = null;
  try {
    const r = await Y2({ query: { id: e } });
    if (r.error)
      throw r.error;
    return be.replies = be.replies.filter((t) => t.id !== e), be.loading = !1, !0;
  } catch (r) {
    return console.error("Error deleting reply:", r), be.loading = !1, be.error = r instanceof Error ? r.message : "Failed to delete reply", !1;
  }
}
function cr(e) {
  be.editingReplyId = e;
}
let me = We({ instance: null, instanceError: null });
async function pi(e) {
  try {
    const r = await el({ query: { public_key: e } });
    r.data ? (console.log("Instance loaded:", r.data), me.instance = r.data, me.instanceError = null) : (me.instance = null, me.instanceError = new Error("Instance not found"));
  } catch (r) {
    me.instance = null, me.instanceError = r instanceof Error ? r : new Error("Unknown error");
  }
  return !!me.instance;
}
function dl() {
  me.instance = null, me.instanceError = null;
}
const jt = {
  indicators: {
    minWidth: 2,
    maxWidth: 50,
    // Will be clamped to half screen
    skipRange: { from: 2.1, to: 14.9 },
    // Skip from 2.1rem to 14.9rem
    defaultWidth: 2
  },
  indicator: {
    minWidth: 2,
    maxWidth: 50,
    // Will be clamped to half screen
    skipRange: { from: 2.1, to: 14.9 },
    // Skip from 2.1rem to 14.9rem
    defaultWidth: 2
  },
  annotation: {
    minWidth: 15,
    maxWidth: 50,
    // Will be clamped to half screen
    defaultWidth: 25
  },
  annotations: {
    minWidth: 15,
    maxWidth: 50,
    // Will be clamped to half screen
    defaultWidth: 25
  },
  account: {
    minWidth: 25,
    maxWidth: 40,
    // Smaller max width for account page
    defaultWidth: 30
  },
  other: {
    minWidth: 15,
    maxWidth: 50,
    // Will be clamped to half screen
    defaultWidth: 20
  }
};
function tn(e) {
  return e === "/" || e.startsWith("/?") ? "indicators" : e.startsWith("/indicator/") ? "indicator" : e.startsWith("/annotation/") ? "annotation" : e.startsWith("/annotations") ? "annotations" : e.startsWith("/account") ? "account" : "other";
}
let pe = We({
  sidebarOpen: !0,
  sidebarWidth: 20,
  // in rem
  sidebarMinWidth: 15,
  // Will be dynamically set based on route
  sidebarMaxWidth: 30,
  // Will be dynamically calculated as half screen
  isMobile: typeof window < "u" ? window.innerWidth < 768 : !1,
  indicators: [],
  currentIndicatorY: null
  // activeModals: [] as string[],
});
function rn() {
  if (typeof window > "u") return 50;
  const e = window.innerWidth / 2 / 16;
  return Math.max(e, 20);
}
function mi(e, r) {
  const t = jt[r];
  if (!t.skipRange) return e;
  const { from: n, to: o } = t.skipRange;
  if (e > n && e < o) {
    const i = Math.abs(e - n), s = Math.abs(e - o), a = i < s ? n : o;
    return console.log(`Skip range applied: ${e} -> ${a} (route: ${r}, range: ${n}-${o})`), a;
  }
  return e;
}
function nn(e) {
  const r = tn(e), t = jt[r], n = rn();
  pe.sidebarMinWidth = t.minWidth, pe.sidebarMaxWidth = Math.min(t.maxWidth, n);
  let o = pe.sidebarWidth;
  o = mi(o, r), o = Math.max(t.minWidth, Math.min(pe.sidebarMaxWidth, o)), (Math.abs(o - pe.sidebarWidth) > 0.1 || (r === "indicators" || r === "indicator") && pe.sidebarWidth > 14.9) && (pe.sidebarWidth = o);
}
function yi(e, r) {
  const t = rn();
  let n;
  r ? (n = tn(r), console.log(`Route detected from location '${r}': ${n}`)) : (pe.sidebarMinWidth === 2 ? n = "indicators" : pe.sidebarMinWidth === 25 ? n = "account" : (pe.sidebarMinWidth, n = "other"), console.log(`Route detected from fallback (minWidth: ${pe.sidebarMinWidth}): ${n}`));
  const o = jt[n];
  pe.sidebarMaxWidth = Math.min(o.maxWidth, t);
  let i = mi(e, n);
  i = Math.max(pe.sidebarMinWidth, Math.min(pe.sidebarMaxWidth, i)), pe.sidebarWidth = i;
}
function C1(e) {
  const r = rn();
  if (e)
    nn(e);
  else {
    const t = Object.keys(jt).find((o) => jt[o].minWidth === pe.sidebarMinWidth) || "other", n = jt[t];
    pe.sidebarMaxWidth = Math.min(n.maxWidth, r), pe.sidebarWidth > pe.sidebarMaxWidth && (pe.sidebarWidth = pe.sidebarMaxWidth);
  }
}
function bi(e, r) {
  const t = Math.round(r), n = pe.indicators.find((o) => o.y === t);
  if (n) {
    if (n.annotations.some((i) => i.id === e.id))
      return;
    const o = {
      ...n,
      annotations: [...n.annotations, e]
    };
    pe.indicators = pe.indicators.map((i) => i.y === t ? o : i);
    return;
  }
  pe.indicators = [
    ...pe.indicators,
    { y: t, annotations: [e] }
  ];
}
function wi(e) {
  pe.currentIndicatorY = e;
}
function _i() {
  pe.indicators = [];
}
function mt(e) {
  pe.sidebarOpen = e;
}
function fl() {
  pe.sidebarOpen = !pe.sidebarOpen;
}
function xi(e) {
  pe.isMobile = e;
}
function vl(e) {
  pe.sidebarMinWidth = e;
}
function hl(e) {
  pe.sidebarMaxWidth = e;
}
var nt, S0, ft, dr, d0, fr;
class gl {
  constructor(r, t, n = "localStorage") {
    A0(this, nt);
    A0(this, S0, /* @__PURE__ */ te(0));
    A0(this, ft, 0);
    A0(this, dr);
    A0(this, d0);
    A0(this, fr, (r) => {
      r.storageArea === he(this, d0) && r.key === he(this, nt) && I(he(this, S0), c(he(this, S0)) + 1);
    });
    M0(this, nt, r), M0(this, dr, t), M0(this, d0, n === "localStorage" ? localStorage : sessionStorage), typeof he(this, d0) < "u" && he(this, d0).getItem(r) === null && he(this, d0).setItem(r, JSON.stringify(t));
  }
  get current() {
    c(he(this, S0));
    const r = typeof he(this, d0) < "u" ? JSON.parse(he(this, d0).getItem(he(this, nt))) : he(this, dr), t = /* @__PURE__ */ new WeakMap(), n = (o) => {
      if (typeof o != "object" || o === null)
        return o;
      let i = t.get(o);
      return i || (i = new Proxy(o, {
        get: (s, a) => (c(he(this, S0)), n(Reflect.get(s, a))),
        set: (s, a, l) => (I(he(this, S0), c(he(this, S0)) + 1), Reflect.set(s, a, l), typeof he(this, d0) < "u" && he(this, d0).setItem(he(this, nt), JSON.stringify(r)), !0)
      }), t.set(o, i)), i;
    };
    return yo() && De(() => (he(this, ft) === 0 && window.addEventListener("storage", he(this, fr)), M0(this, ft, he(this, ft) + 1), () => {
      Dr().then(() => {
        M0(this, ft, he(this, ft) - 1), he(this, ft) === 0 && window.removeEventListener("storage", he(this, fr));
      });
    })), n(r);
  }
  set current(r) {
    typeof he(this, d0) < "u" && he(this, d0).setItem(he(this, nt), JSON.stringify(r)), I(he(this, S0), c(he(this, S0)) + 1);
  }
}
nt = new WeakMap(), S0 = new WeakMap(), ft = new WeakMap(), dr = new WeakMap(), d0 = new WeakMap(), fr = new WeakMap();
G1.setServerUrl(`${Re.serverUrl}/api/v1`);
const pl = "akin_auth_state", ml = 24 * 60 * 60 * 1e3, yl = new gl(pl, {
  user: null,
  isAuthenticated: !1,
  error: void 0,
  isLoading: !1,
  lastLogin: null
}), N = yl.current;
async function z1(e, r, t, n, o) {
  N.isLoading = !0, N.error = void 0;
  try {
    console.log("Login ", n, e, r, t, o);
    const { data: i, error: s } = await ol({
      body: {
        email: e,
        wp_id: t,
        username: n,
        public_key: r,
        redirect_url: o
      }
    });
    if (N.isLoading = !1, s)
      throw s.error;
    return !0;
  } catch (i) {
    return N.error = i, console.log(N.error), N.isLoading = !1, !1;
  }
}
async function Ci(e, r) {
  N.isLoading = !0, N.error = null;
  try {
    console.log("Confirm ", e, r);
    const { data: t, error: n } = await il({
      body: { token_hash: e, public_key: r }
    });
    if (N.isLoading = !1, !n && (t != null && t.success) && (N.user = t == null ? void 0 : t.profile, N.isAuthenticated = !0, N.error = null, N.lastLogin = /* @__PURE__ */ new Date()), n)
      throw n;
    return t == null ? void 0 : t.success;
  } catch (t) {
    return N.error = t, N.isLoading = !1, !1;
  }
}
async function zi() {
  try {
    const { error: e } = await sl();
    if (e)
      throw e;
    return N.user = null, N.isAuthenticated = !1, N.error = null, N.lastLogin = null, !0;
  } catch (e) {
    return N.error = e, !1;
  }
}
function bl(e) {
  N.user = e;
}
function ki() {
  if (!N.lastLogin || !N.isAuthenticated) return !1;
  const e = /* @__PURE__ */ new Date(), r = new Date(N.lastLogin), n = e.getTime() - r.getTime() > ml;
  return n && (console.log("Session expired, signing out"), N.user = null, N.isAuthenticated = !1, N.error = l0("AKIN46009", { scope: "client", table: "auth" }), N.lastLogin = null, Xe({
    message: "Session expired",
    type: "error",
    dismissible: !0,
    timeout: 3e3
  }), !0);
}
function Li() {
  N.isLoading = !1, N.error = void 0, ki();
}
typeof window < "u" && (Li(), N.isAuthenticated && N.user && console.log("User is already authenticated"));
function wl() {
  if (!N.isAuthenticated)
    throw new Error("Authentication required");
}
function _l() {
  return N.isAuthenticated && N.user !== null;
}
let Ye = We({ currentSelection: null, isSelecting: !1 });
function Ir(e) {
  Ye.currentSelection = e;
}
function xl() {
  Ye.currentSelection = null, Ye.isSelecting = !1;
}
function Cl() {
  return Ye.currentSelection !== null;
}
let ie = We({
  subscription: null,
  error: null,
  isLoading: !1
});
async function Ei() {
  var e, r;
  ie.isLoading = !0, ie.error = null;
  try {
    console.log("Load Subscription");
    const { data: t, error: n } = await rl({
      query: {
        instance_id: (e = me.instance) == null ? void 0 : e.id,
        profile_id: (r = N.user) == null ? void 0 : r.id
      }
    });
    if (n)
      throw n;
    const { subscribers: o } = t || {};
    ie.isLoading = !1;
    const i = (o == null ? void 0 : o[0]) || null;
    return i && (ie.subscription = i), i;
  } catch (t) {
    return ie.error = l0(t.code, { scope: "client", table: "subscriber" }), ie.isLoading = !1, null;
  }
}
async function Ai() {
  var e, r;
  ie.isLoading = !0, ie.error = null;
  try {
    console.log("Subscribe");
    const { data: t, error: n } = await nl({
      body: {
        instance_id: (e = me.instance) == null ? void 0 : e.id,
        profile_id: (r = N.user) == null ? void 0 : r.id
      }
    });
    return ie.isLoading = !1, t ? (ie.subscription = t, t) : (n && (ie.error = l0(n.code)), null);
  } catch (t) {
    return ie.error = l0(t.code), ie.isLoading = !1, null;
  }
}
async function Si() {
  var e, r;
  ie.isLoading = !0, ie.error = null;
  try {
    console.log("Unsubscribe");
    const { error: t } = await tl({
      body: {
        instance_id: (e = me.instance) == null ? void 0 : e.id,
        profile_id: (r = N.user) == null ? void 0 : r.id
      }
    });
    if (ie.isLoading = !1, t) throw t;
    return ie.subscription = null, !0;
  } catch (t) {
    return ie.error = l0(t.code), ie.isLoading = !1, !1;
  }
}
let F0 = We({ toasts: [] });
function Xe({
  message: e,
  type: r = "info",
  dismissible: t = !0,
  timeout: n = 3e3
}) {
  if (!e)
    return -1;
  const o = {
    id: Math.floor(Math.random() * 1e4),
    type: r,
    message: e,
    dismissible: t,
    timeout: n
  };
  return F0.toasts = [...F0.toasts, o], o.timeout && setTimeout(() => Fr(o.id), o.timeout), o.id;
}
function Fr(e) {
  F0.toasts = F0.toasts.filter((r) => r.id !== e);
}
const zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addAnnotation: Q1,
  addAnnotationToIndicator: bi,
  addDocument: X1,
  addReply: vi,
  addToast: Xe,
  annotationsState: Y,
  applyRouteConstraints: nn,
  authState: N,
  clearInstance: dl,
  clearSelection: xl,
  confirm: Ci,
  dismissToast: Fr,
  documentState: Fe,
  editAnnotation: en,
  editReply: hi,
  getAnnotationsInView: ul,
  getRouteTypeFromLocation: tn,
  hasActiveSelection: Cl,
  instanceState: me,
  isLoggedIn: _l,
  isSessionExpired: ki,
  loadAnnotations: J1,
  loadDocumentByUrl: ci,
  loadInstanceByPublicKey: pi,
  loadReplies: fi,
  loadSubscription: Ei,
  login: z1,
  removeAnnotation: ui,
  removeReply: gi,
  repliesState: be,
  requireAuth: wl,
  resetIndicators: _i,
  resetOnInit: Li,
  selectionState: Ye,
  setCurrentAnnotationId: G0,
  setCurrentIndicatorY: wi,
  setCurrentSelection: Ir,
  setDebug: ni,
  setDraftAnnotation: di,
  setEditingAnnotationId: jr,
  setEditingReplyId: cr,
  setHighlightedAnnotationId: x1,
  setHoveredAnnotationId: _1,
  setIsMobile: xi,
  setPageUrl: ti,
  setPublicKey: Y1,
  setSelector: ri,
  setServerUrl: V1,
  setSidebarMaxWidth: hl,
  setSidebarMinWidth: vl,
  setSidebarOpen: mt,
  setSidebarWidth: yi,
  setUser: bl,
  settingsState: Re,
  signout: zi,
  subscribe: Ai,
  subscriptionState: ie,
  toastsState: F0,
  toggleSidebar: fl,
  uiState: pe,
  unsubscribe: Si,
  updateMaxWidth: C1
}, Symbol.toStringTag, { value: "Module" }));
function kl(e) {
  I(e, e.v + 1);
}
function Ll(e) {
  let r = 0, t = gt(0), n;
  return () => {
    yo() && (c(t), wt(() => (r === 0 && (n = Q(() => e(() => kl(t)))), r += 1, () => {
      Dr().then(() => {
        r -= 1, r === 0 && (n == null || n(), n = void 0);
      });
    })));
  };
}
function El(e, r) {
  if (e instanceof RegExp) return { keys: !1, pattern: e };
  var t, n, o, i, s = [], a = "", l = e.split("/");
  for (l[0] || l.shift(); o = l.shift(); )
    t = o[0], t === "*" ? (s.push("wild"), a += "/(.*)") : t === ":" ? (n = o.indexOf("?", 1), i = o.indexOf(".", 1), s.push(o.substring(1, ~n ? n : ~i ? i : o.length)), a += ~n && !~i ? "(?:/([^/]+?))?" : "/([^/]+?)", ~i && (a += (~n ? "?" : "") + "\\" + o.substring(i))) : a += "/" + o;
  return {
    keys: s,
    pattern: new RegExp("^" + a + "/?$", "i")
  };
}
function Bn() {
  const e = window.location.href.indexOf("#/");
  let r = e > -1 ? window.location.href.substr(e + 1) : "/";
  const t = r.indexOf("?");
  let n = "";
  return t > -1 && (n = r.substr(t + 1), r = r.substr(0, t)), { location: r, querystring: n };
}
const on = Ko(
  null,
  // eslint-disable-next-line prefer-arrow-callback
  function(r) {
    r(Bn());
    const t = () => {
      r(Bn());
    };
    return window.addEventListener("hashchange", t, !1), function() {
      window.removeEventListener("hashchange", t, !1);
    };
  }
), Al = Vo(on, (e) => e.location);
Vo(on, (e) => e.querystring);
const Zn = Yo(void 0);
async function n0(e) {
  if (!e || e.length < 1 || e.charAt(0) != "/" && e.indexOf("#/") !== 0)
    throw Error("Invalid parameter location");
  await Dr(), history.replaceState(
    {
      ...history.state,
      __svelte_spa_router_scrollX: window.scrollX,
      __svelte_spa_router_scrollY: window.scrollY
    },
    void 0
  ), window.location.hash = (e.charAt(0) == "#" ? "" : "#") + e;
}
function Et(e, r) {
  if (r = Hn(r), !e || !e.tagName || e.tagName.toLowerCase() != "a")
    throw Error('Action "link" can only be used with <a> tags');
  return Fn(e, r), {
    update(t) {
      t = Hn(t), Fn(e, t);
    }
  };
}
function Sl(e) {
  e ? window.scrollTo(e.__svelte_spa_router_scrollX, e.__svelte_spa_router_scrollY) : window.scrollTo(0, 0);
}
function Fn(e, r) {
  let t = r.href || e.getAttribute("href");
  if (t && t.charAt(0) == "/")
    t = "#" + t;
  else if (!t || t.length < 2 || t.slice(0, 2) != "#/")
    throw Error('Invalid value for "href" attribute: ' + t);
  e.setAttribute("href", t), e.addEventListener("click", (n) => {
    n.preventDefault(), r.disabled || $l(n.currentTarget.getAttribute("href"));
  });
}
function Hn(e) {
  return e && typeof e == "string" ? { href: e } : e || {};
}
function $l(e) {
  history.replaceState(
    {
      ...history.state,
      __svelte_spa_router_scrollX: window.scrollX,
      __svelte_spa_router_scrollY: window.scrollY
    },
    void 0
  ), window.location.hash = e;
}
function $i(e, r) {
  V(r, !1);
  let t = q(r, "routes", 28, () => ({})), n = q(r, "prefix", 12, ""), o = q(r, "restoreScrollState", 12, !1);
  class i {
    /**
     * Initializes the object and creates a regular expression from the path, using regexparam.
     *
     * @param {string} path - Path to the route (must start with '/' or '*')
     * @param {SvelteComponent|WrappedComponent} component - Svelte component for the route, optionally wrapped
     */
    constructor(b, C) {
      if (!C || typeof C != "function" && (typeof C != "object" || C._sveltesparouter !== !0))
        throw Error("Invalid component object");
      if (!b || typeof b == "string" && (b.length < 1 || b.charAt(0) != "/" && b.charAt(0) != "*") || typeof b == "object" && !(b instanceof RegExp))
        throw Error('Invalid value for "path" argument - strings must start with / or *');
      const { pattern: k, keys: A } = El(b);
      this.path = b, typeof C == "object" && C._sveltesparouter === !0 ? (this.component = C.component, this.conditions = C.conditions || [], this.userData = C.userData, this.props = C.props || {}) : (this.component = () => Promise.resolve(C), this.conditions = [], this.props = {}), this._pattern = k, this._keys = A;
    }
    /**
     * Checks if `path` matches the current route.
     * If there's a match, will return the list of parameters from the URL (if any).
     * In case of no match, the method will return `null`.
     *
     * @param {string} path - Path to test
     * @returns {null|Object.<string, string>} List of paramters from the URL if there's a match, or `null` otherwise.
     */
    match(b) {
      if (n()) {
        if (typeof n() == "string")
          if (b.startsWith(n()))
            b = b.substr(n().length) || "/";
          else
            return null;
        else if (n() instanceof RegExp) {
          const R = b.match(n());
          if (R && R[0])
            b = b.substr(R[0].length) || "/";
          else
            return null;
        }
      }
      const C = this._pattern.exec(b);
      if (C === null)
        return null;
      if (this._keys === !1)
        return C;
      const k = {};
      let A = 0;
      for (; A < this._keys.length; ) {
        try {
          k[this._keys[A]] = decodeURIComponent(C[A + 1] || "") || null;
        } catch {
          k[this._keys[A]] = null;
        }
        A++;
      }
      return k;
    }
    /**
     * Dictionary with route details passed to the pre-conditions functions, as well as the `routeLoading`, `routeLoaded` and `conditionsFailed` events
     * @typedef {Object} RouteDetail
     * @property {string|RegExp} route - Route matched as defined in the route definition (could be a string or a reguar expression object)
     * @property {string} location - Location path
     * @property {string} querystring - Querystring from the hash
     * @property {object} [userData] - Custom data passed by the user
     * @property {SvelteComponent} [component] - Svelte component (only in `routeLoaded` events)
     * @property {string} [name] - Name of the Svelte component (only in `routeLoaded` events)
     */
    /**
     * Executes all conditions (if any) to control whether the route can be shown. Conditions are executed in the order they are defined, and if a condition fails, the following ones aren't executed.
     * 
     * @param {RouteDetail} detail - Route detail
     * @returns {boolean} Returns true if all the conditions succeeded
     */
    async checkConditions(b) {
      for (let C = 0; C < this.conditions.length; C++)
        if (!await this.conditions[C](b))
          return !1;
      return !0;
    }
  }
  const s = [];
  t() instanceof Map ? t().forEach((x, b) => {
    s.push(new i(b, x));
  }) : Object.keys(t()).forEach((x) => {
    s.push(new i(x, t()[x]));
  });
  let a = /* @__PURE__ */ a0(null), l = /* @__PURE__ */ a0(null), v = /* @__PURE__ */ a0({});
  const p = H1();
  async function h(x, b) {
    await Dr(), p(x, b);
  }
  let g = null, y = null;
  o() && (y = (x) => {
    x.state && (x.state.__svelte_spa_router_scrollY || x.state.__svelte_spa_router_scrollX) ? g = x.state : g = null;
  }, window.addEventListener("popstate", y), Za(() => {
    Sl(g);
  }));
  let f = null, w = null;
  const z = on.subscribe(async (x) => {
    f = x;
    let b = 0;
    for (; b < s.length; ) {
      const C = s[b].match(x.location);
      if (!C) {
        b++;
        continue;
      }
      const k = {
        route: s[b].path,
        location: x.location,
        querystring: x.querystring,
        userData: s[b].userData,
        params: C && typeof C == "object" && Object.keys(C).length ? C : null
      };
      if (!await s[b].checkConditions(k)) {
        I(a, null), w = null, h("conditionsFailed", k);
        return;
      }
      h("routeLoading", Object.assign({}, k));
      const A = s[b].component;
      if (w != A) {
        A.loading ? (I(a, A.loading), w = A, I(l, A.loadingParams), I(v, {}), h("routeLoaded", Object.assign({}, k, {
          component: c(a),
          name: c(a).name,
          params: c(l)
        }))) : (I(a, null), w = null);
        const R = await A();
        if (x != f)
          return;
        I(a, R && R.default || R), w = A;
      }
      C && typeof C == "object" && Object.keys(C).length ? I(l, C) : I(l, null), I(v, s[b].props), h("routeLoaded", Object.assign({}, k, {
        component: c(a),
        name: c(a).name,
        params: c(l)
      })).then(() => {
        Zn.set(c(l));
      });
      return;
    }
    I(a, null), w = null, Zn.set(void 0);
  });
  ut(() => {
    z(), y && window.removeEventListener("popstate", y);
  }), Pt(
    () => se(o()),
    () => {
      history.scrollRestoration = o() ? "manual" : "auto";
    }
  ), Nr(), c0();
  var L = Ue(), U = ae(L);
  {
    var S = (x) => {
      var b = Ue(), C = ae(b);
      m1(C, () => c(a), (k, A) => {
        A(k, In(
          {
            get params() {
              return c(l);
            }
          },
          () => c(v),
          {
            $$events: {
              routeEvent(R) {
                Te.call(this, r, R);
              }
            }
          }
        ));
      }), m(x, b);
    }, E = (x) => {
      var b = Ue(), C = ae(b);
      m1(C, () => c(a), (k, A) => {
        A(k, In(() => c(v), {
          $$events: {
            routeEvent(R) {
              Te.call(this, r, R);
            }
          }
        }));
      }), m(x, b);
    };
    Z(U, (x) => {
      c(l) ? x(S) : x(E, !1);
    });
  }
  return m(e, L), G({
    get routes() {
      return t();
    },
    set routes(x) {
      t(x), $();
    },
    get prefix() {
      return n();
    },
    set prefix(x) {
      n(x), $();
    },
    get restoreScrollState() {
      return o();
    },
    set restoreScrollState(x) {
      o(x), $();
    }
  });
}
K(
  $i,
  {
    routes: {},
    prefix: {},
    restoreScrollState: {}
  },
  [],
  [],
  !0
);
const ql = {
  hash: "svelte-bmf18g",
  code: ":host {display:contents;}"
};
function qi(e, r) {
  V(r, !0), de(e, ql);
  let t = q(r, "rootElement", 15, null), n = q(r, "highlightClass", 7, "akin-highlight"), o = /* @__PURE__ */ te(We({})), i = /* @__PURE__ */ te(!1), s = /* @__PURE__ */ te(We({})), a = /* @__PURE__ */ te(null), l = /* @__PURE__ */ te(null), v = /* @__PURE__ */ te(!1);
  function p(x, b) {
    I(a, x, !0), I(l, b, !0), I(v, !0);
  }
  function h() {
    I(v, !1), I(a, null), I(l, null);
  }
  async function g() {
    if (!t()) return;
    On(t(), n()), _i(), I(o, {}, !0), o1.clearRanges();
    const x = [];
    for (const b of Y.annotations) {
      const C = b.selectors;
      if (C)
        try {
          const k = z2(C), A = await y2(t(), k);
          x.push({ annotation: b, range: A });
        } catch (k) {
          console.error(`Failed to create range for annotation ${b.id}:`, k);
        }
    }
    for (const { annotation: b, range: C } of x)
      try {
        const k = o1.getColorForAnnotation(b.id, C);
        c(s)[b.id] = k;
        const A = `${n()}-${b.id}`, R = `${n()}-c${k}`, W = w2(C, `${n()} ${A} ${R}`);
        c(o)[b.id] = W, W.forEach((O) => {
          O.dataset.annotationId = b.id, O.dataset.colorIndex = k.toString(), O.addEventListener("click", (H) => {
            H.stopPropagation(), h(), n0(`#/annotation/${b.id}`), mt(!0);
          });
        });
        const D = C2(W, t());
        bi(b, D);
      } catch (k) {
        console.error(`Failed to highlight annotation ${b.id}:`, k);
      }
  }
  function y() {
    c(a) && (h(), mt(!0), G0(c(a).id));
  }
  let f = /* @__PURE__ */ te(""), w = /* @__PURE__ */ te(!1);
  De(() => {
    const x = JSON.stringify(Y.annotations.map((b) => b.id));
    c(i) && t() && x !== c(f) && !c(w) && (I(w, !0), I(f, x, !0), g().finally(() => {
      I(w, !1);
    }));
  });
  function z(x, b) {
    const C = document.elementsFromPoint(x, b);
    for (const k of C)
      if (k instanceof HTMLElement && k.classList.contains(n()))
        return k;
    return null;
  }
  function L(x) {
    const b = x;
    if (!t()) return;
    const C = z(b.clientX, b.clientY);
    if (C) {
      const k = C.dataset.annotationId;
      if (k) {
        const A = Y.annotations.find((R) => R.id === k);
        if (A) {
          const R = c(o)[k];
          R && R.length > 0 && (p(A, R[0]), _1(A.id));
        }
      }
    } else c(v) && h();
  }
  function U(x) {
    var A, R;
    const C = x.relatedTarget;
    (!C || !((A = t()) != null && A.contains(C)) || !((R = C == null ? void 0 : C.classList) != null && R.contains(n()))) && (h(), _1(null));
  }
  f0(() => {
    t() || t(document.body), I(i, !0), t() && (t().addEventListener("mouseover", L), t().addEventListener("mouseout", U));
  }), ut(() => {
    t() && (t().removeEventListener("mouseover", L), t().removeEventListener("mouseout", U), On(t(), n()), o1.reset());
  });
  function S() {
    g();
  }
  function E() {
    return c(s);
  }
  return Qo(e, {
    get annotation() {
      return c(a);
    },
    get anchorElement() {
      return c(l);
    },
    get visible() {
      return c(v);
    },
    onSidebarOpen: y,
    onClose: h
  }), G({
    refresh: S,
    getColorAssignments: E,
    get rootElement() {
      return t();
    },
    set rootElement(x = null) {
      t(x), $();
    },
    get highlightClass() {
      return n();
    },
    set highlightClass(x = "akin-highlight") {
      n(x), $();
    }
  });
}
K(qi, { rootElement: {}, highlightClass: {} }, [], ["refresh", "getColorAssignments"], !0);
var jl = /* @__PURE__ */ we('<svg class="ad svelte-13yojpf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 128" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"><g rx="0" ry="0"><g><g class="fills"><rect rx="0" ry="0" x="0" y="-1.1368683772161603e-13" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)" width="480" height="128" style="fill: rgb(236, 67, 153); fill-opacity: 1;"></rect></g></g><g height="1237" width="2500" rx="0" ry="0" style="fill: rgb(0, 0, 0);"><g style="display: none;"><g class="fills"><rect width="188" height="98" x="146" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)" style="fill: none;" ry="0" fill="none" rx="0" y="15.999999999999886"></rect></g></g><g><g class="fills"><path d="M293.279,61.357C295.163,62.262,295.163,61.782,295.653,61.041C296.142,60.297,298.935,58.157,298.935,58.157C298.935,58.157,301.536,56.612,304.206,52.899C306.759,49.340,304.531,47.001,302.422,44.980C300.312,42.958,295.456,45.699,291.778,51.265C288.098,56.828,291.398,60.452,293.279,61.357ZM309.959,67.983C310.501,67.616,311.190,68.152,310.766,69.228C310.613,69.614,307.635,77.559,298.910,83.459C298.910,83.459,299.807,74.857,309.959,67.983ZM276.808,38.827C278.368,37.369,277.948,38.967,277.781,39.453C277.781,39.453,270.791,58.804,255.770,76.153C255.770,76.153,263.706,51.083,276.808,38.827ZM187.244,88.961C187.244,88.961,177.597,76.223,161.180,91.207L166.610,72.528C166.610,72.528,172.358,73.062,180.383,69.348C180.383,69.348,197.731,69.896,187.244,88.961ZM182.543,95.717C182.543,95.717,171.963,106.121,168.403,102.095C165.029,98.278,171.108,93.140,173.487,91.873C176.569,90.234,185.899,88.521,182.543,95.717ZM172.987,31.687C172.987,31.687,190.820,23.177,198.508,27.475C206.198,31.772,203.856,39.465,192.142,52.232C192.142,52.232,183.185,60.230,177.841,62.484C177.841,62.484,171.102,63.522,169.168,64.477C169.168,64.477,170.768,59.211,172.689,53.186C175.073,45.728,178.169,37.484,176.452,35.301C174.365,32.638,172.987,31.687,172.987,31.687ZM332.586,80.918C332.521,80.438,330.417,74.249,328.616,76.233C326.817,78.219,322.204,85.740,307.397,93.771C300.110,97.721,299.543,92.757,299.181,90.750C299.181,90.750,309.247,83.725,314.385,74.420C317.876,68.096,315.626,66.655,314.198,65.223C312.900,63.926,309.656,60.993,305.440,64.063C301.226,67.135,291.120,77.038,292.216,87.895C290.576,89.551,285.796,93.454,282.703,92.757C279.611,92.058,282.873,85.427,285.184,80.900C287.487,76.392,292.003,72.776,293.392,70.728C294.781,68.681,294.008,68.026,293.730,67.701C293.453,67.375,292.810,66.925,291.815,65.125C290.820,63.327,289.388,64.579,289.388,64.579C282.728,68.933,278.045,80.423,278.045,80.423C276.706,81.915,274.702,81.330,274.317,81.182C273.731,80.952,273.288,79.518,273.171,78.782C273.073,78.191,272.671,75.761,272.348,75.098C272.028,74.436,271.679,74.106,269.955,74.631C267.946,75.244,266.505,76.471,265.921,77.144C265.333,77.818,265.606,77.973,265.751,80.110C265.820,81.162,265.915,81.192,265.173,83.035C264.057,85.821,262.118,89.377,261.504,90.570C260.977,91.601,257.161,96.652,255.614,96.771C254.236,96.878,253.728,94.678,253.728,94.678C253.728,94.678,252.937,89.594,253.506,87.081C280.258,57.083,286.956,35.912,286.956,35.912C287.077,35.553,287.701,34.315,285.793,31.494C283.320,27.838,280.739,27.995,280.739,27.995C280.739,27.995,278.937,27.765,274.939,31.882C249.482,58.101,246.956,85.632,246.956,85.632C246.702,86.146,246.605,86.239,245.505,87.451C244.349,88.724,242.664,89.633,242.664,89.633C242.664,89.633,241.048,90.050,240.703,88.689C240.481,87.812,240.631,87.138,240.750,85.960C240.860,84.869,242.427,81.265,242.427,81.265C242.427,81.265,244.788,76.174,245.310,74.665C245.832,73.154,245.710,71.481,245.226,70.299C244.742,69.118,242.569,67.905,241.872,67.432C241.194,66.973,240.469,66.270,240.564,65.266C240.597,64.936,240.286,64.661,241.591,61.791C242.898,58.918,240.489,58.221,239.788,58.102C239.089,57.982,237.153,57.394,235.382,58.938C232.245,61.677,232.151,66.475,232.151,66.475C232.142,67.107,232.373,67.731,232.064,68.445C231.887,68.855,231.452,69.638,230.324,71.931C229.177,74.257,226.763,78.923,225.271,81.520C224.016,83.706,222.283,86.218,221.162,87.470C220.404,88.315,219.392,88.998,219.392,88.998C219.392,88.998,218.270,89.840,218.241,87.760C218.212,85.590,221.215,78.967,221.215,78.967C221.215,78.967,223.320,73.788,223.592,73.163C223.976,72.277,224.228,71.110,223.636,70.388C222.764,69.336,220.510,68.794,219.516,69.288C218.525,69.784,216.746,72.780,215.690,74.489C214.352,76.654,212.185,80.869,209.696,85.043C207.285,89.081,204.598,90.547,204.598,90.547C204.598,90.547,203.151,91.423,202.030,90.406C201.393,89.827,196.159,85.231,208.632,71.402C213.770,65.706,216.456,64.751,219.128,66.621C220.163,67.345,221.181,68.582,222.506,68.617C224.757,68.680,225.494,65.918,225.494,65.918C225.570,65.440,227.540,60.172,219.126,60.079C205.470,59.929,197.655,75.274,197.655,75.274C195.048,65.486,187.660,64.749,187.660,64.749C196.163,58.800,201.013,54.999,207.182,44.383C213.352,33.765,204.368,25.382,204.368,25.382C200.554,20.791,191.218,16.000,175.481,20.784C159.040,25.782,157.678,29.765,156.040,34.640C154.399,39.518,157.615,38.260,159.591,37.308C161.565,36.354,169.312,33.206,169.312,33.206C169.312,33.206,149.688,93.459,149.108,96.388C148.586,99.020,146.000,106.168,153.855,107.135C153.855,107.135,155.070,107.317,156.179,106.915C157.289,106.515,157.316,105.796,157.316,105.796C157.777,104.079,158.522,101.375,158.725,101.106C163.026,114.000,176.945,110.245,185.559,102.687C191.816,97.199,195.517,89.706,195.517,89.706C200.821,101.215,207.219,95.136,207.219,95.136C209.823,93.051,213.164,88.268,213.164,88.268C215.175,97.657,222.188,93.742,222.188,93.742C225.484,91.788,228.795,85.882,229.446,84.808C233.180,78.664,236.696,71.213,236.696,71.213C236.696,71.213,237.167,71.240,238.228,72.159C239.173,72.976,238.709,74.315,238.315,75.551C237.922,76.785,236.397,79.939,235.602,82.634C234.789,85.394,234.634,88.057,235.722,90.465C236.787,92.820,239.911,94.823,242.049,95.062C244.776,95.371,247.315,93.202,247.315,93.202C247.704,100.042,253.070,102.462,253.070,102.462C260.068,106.093,266.599,94.562,266.599,94.562C271.053,87.311,270.684,85.488,271.067,84.378C271.579,85.041,272.852,85.763,275.524,86.282C274.807,88.832,275.563,91.319,275.563,91.319C275.563,91.319,277.598,96.431,282.197,97.669C287.126,98.998,293.625,94.044,293.625,94.044C293.625,94.044,300.999,106.668,317.499,95.702C334.000,84.737,332.651,81.401,332.586,80.918Z" style="fill: rgb(255, 255, 255); fill-opacity: 1;"></path></g></g></g></g></svg>');
const Il = {
  hash: "svelte-13yojpf",
  code: "svg.svelte-13yojpf {width:100%;height:auto;}"
};
function ji(e, r) {
  V(r, !1), de(e, Il);
  let t = q(r, "width", 12, "480"), n = q(r, "height", 12, "128");
  var o = jl();
  return B(() => {
    j(o, "width", t()), j(o, "height", n());
  }), m(e, o), G({
    get width() {
      return t();
    },
    set width(i) {
      t(i), $();
    },
    get height() {
      return n();
    },
    set height(i) {
      n(i), $();
    }
  });
}
K(ji, { width: {}, height: {} }, [], [], !0);
var Pl = /* @__PURE__ */ we(`<svg class="ad svelte-1uviscp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 176" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"><g><g class="frame-container-wrapper"><g class="frame-container-blur"><g class="frame-container-shadows"><g fill="none"><g class="fills"><rect rx="0" ry="0" x="0" y="0" width="448" height="176" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)" class="frame-background"></rect></g><g class="frame-children"><g><defs><radialGradient id="fill-color-gradient" cx="0.0006987866318993953" cy="0.8873181401829768" r="1.23280428222053" gradientTransform="matrix(-2.082854, 0.431893, -0.203037, -0.979171, 0.182313, 1.755853)"><stop offset="0" stop-color="#ffeb89" stop-opacity="1"></stop><stop offset="1" stop-color="#f58515" stop-opacity="1"></stop></radialGradient></defs><g class="fills"><rect rx="16" ry="16" x="0" y="0" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)" width="448" height="176" style="fill: url('#fill-color-gradient')"></rect></g></g><g><g transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)" class="text-container" x="29.86666666666656" y="32" width="388.2666666666662" height="128" rx="0" ry="0"><defs><linearGradient id="text-gradient" x1="0.6884160756501174" y1="0.06896551724137931" x2="0.6884160756501174" y2="0.9517241379310345"><stop offset="0" stop-color="#ffee00" stop-opacity="1"></stop><stop offset="1" stop-color="#e99313" stop-opacity="1"></stop></linearGradient></defs><g class="fills"><text x="29.86666666666656" y="119" dominant-baseline="ideographic" textLength="250.1666717529297" lengthAdjust="spacingAndGlyphs" style="fill: url('#text-gradient'); text-transform: none; font-family: 'Stick No Bills', sans-serif; letter-spacing: normal; font-style: normal; font-weight: 400; white-space: pre; font-size: 78px;">Goldcard</text></g><g class="fills"><text x="29.86666666666656" y="167" dominant-baseline="ideographic" textLength="282" lengthAdjust="spacingAndGlyphs" style="fill: url('#text-gradient'); text-transform: none; font-family: 'Stick No Bills', sans-serif; letter-spacing: normal; font-style: normal; font-weight: 400; white-space: pre; font-size: 51px;">$ 1.000.000,00</text></g></g></g><g width="2500" height="335" rx="0" ry="0" style="fill: rgb(0, 0, 0);"><g><g class="fills"><path d="M51.678,22.925L51.678,22.925ZC51.173,23.610,50.690,24.000,49.912,24.000C48.934,24.000,48.242,23.387,48.242,22.264C48.242,20.258,50.240,20.104,51.563,20.104L52.056,20.104C52.099,19.941,52.099,19.763,52.099,19.586C52.099,18.973,51.511,18.796,51.015,18.796C50.396,18.796,49.795,18.973,49.238,19.269L49.439,18.006C50.039,17.770,50.647,17.641,51.279,17.641C52.360,17.641,53.382,18.090,53.382,19.516C53.382,20.330,52.846,22.716,52.719,23.860L51.532,23.860L51.678,22.925ZM50.300,22.845C51.350,22.845,51.676,22.031,51.898,21.050L51.403,21.050C50.719,21.050,49.585,21.179,49.585,22.208C49.585,22.633,49.943,22.845,50.300,22.845ZZM15.153,17.773L16.173,17.773L16.417,16.523L17.929,15.967L17.582,17.773L18.843,17.773L18.623,18.930L17.362,18.930L16.848,21.587C16.805,21.781,16.783,21.980,16.783,22.179C16.783,22.544,17.003,22.770,17.319,22.770C17.573,22.770,17.824,22.710,18.003,22.627L17.762,23.855C17.520,23.914,17.247,23.997,17.006,23.997C16.048,23.997,15.376,23.573,15.376,22.404C15.376,21.931,15.460,21.472,15.555,20.986L15.955,18.933L14.933,18.933L15.153,17.773ZZM19.425,17.773L20.834,17.773L19.678,23.852L18.269,23.852L19.425,17.773ZZM19.939,15.153L21.349,15.153L21.054,16.666L19.645,16.666L19.939,15.153ZZM25.086,19.167C24.811,18.965,24.445,18.861,24.055,18.861C22.930,18.861,22.299,20.040,22.299,21.187C22.299,21.977,22.531,22.770,23.497,22.770C23.844,22.770,24.275,22.662,24.644,22.463L24.486,23.715C24.055,23.952,23.591,23.997,23.129,23.997C21.731,23.997,20.827,22.947,20.827,21.378C20.827,19.253,22.078,17.636,24.024,17.636C24.550,17.636,25.055,17.743,25.433,17.872L25.086,19.167ZZM26.632,15.000L28.042,15.000L27.106,19.981L27.127,19.981L29.094,17.773L30.923,17.773L28.324,20.548L29.953,23.852L28.367,23.852L26.969,20.628L26.948,20.628L26.338,23.852L24.962,23.852L26.632,15.000ZZM36.000,17.773L37.020,17.773L37.261,16.523L38.776,15.967L38.429,17.773L39.690,17.773L39.470,18.930L38.209,18.930L37.694,21.587C37.654,21.781,37.632,21.980,37.632,22.179C37.632,22.544,37.852,22.770,38.168,22.770C38.422,22.770,38.673,22.710,38.853,22.627L38.611,23.855C38.369,23.914,38.096,23.997,37.855,23.997C36.898,23.997,36.225,23.573,36.225,22.404C36.225,21.931,36.309,21.472,36.405,20.986L36.804,18.933L35.785,18.933L36.000,17.773ZZ" class="st0"></path></g></g><g><g class="fills"><path d="M35.529,19.946C35.529,18.399,34.646,17.633,33.311,17.633C31.533,17.633,30.231,19.452,30.231,21.340C30.231,23.146,31.281,23.997,32.839,23.997C33.418,23.997,34.017,23.844,34.562,23.656L34.742,22.404C34.215,22.676,33.658,22.839,33.081,22.839C32.179,22.839,31.652,22.479,31.585,21.523C31.583,21.467,31.578,21.413,31.578,21.356L31.578,21.303C31.585,20.889,31.664,20.478,31.808,20.096C32.078,19.323,32.461,18.788,33.291,18.788C33.880,18.788,34.186,19.153,34.186,19.804C34.186,19.946,34.174,20.075,34.155,20.217L32.227,20.217C32.102,20.696,32.081,21.015,32.076,21.303L35.392,21.303C35.476,20.854,35.529,20.405,35.529,19.946ZZM40.300,18.447C40.341,18.210,40.384,17.963,40.415,17.773L41.729,17.773L41.602,18.587L41.623,18.587C42.002,17.961,42.621,17.630,43.284,17.630C43.925,17.630,44.588,18.055,44.662,18.785L44.684,18.785C45.043,17.996,45.830,17.630,46.586,17.630C47.395,17.630,48.091,18.374,48.091,19.296C48.091,19.839,47.965,20.454,47.850,20.948L47.283,23.852L45.873,23.852L46.440,20.889C46.512,20.524,46.617,19.957,46.617,19.591C46.617,19.143,46.313,18.861,45.955,18.861C44.976,18.861,44.734,20.137,44.557,20.961L44.000,23.855L42.590,23.855L43.157,20.892C43.231,20.526,43.337,19.959,43.337,19.594C43.337,19.145,43.033,18.863,42.674,18.863C41.717,18.863,41.454,20.150,41.276,20.964L40.719,23.858L39.310,23.858L40.300,18.447ZZM57.565,19.011C57.414,18.920,57.024,18.788,56.624,18.788C56.203,18.788,55.679,18.920,55.679,19.401C55.679,20.169,57.507,20.451,57.507,21.939C57.507,23.522,56.277,23.992,55.067,23.992C54.500,23.992,53.932,23.898,53.416,23.627L53.719,22.364C54.119,22.611,54.519,22.837,55.064,22.837C55.538,22.837,56.031,22.659,56.031,22.165C56.031,21.184,54.203,21.090,54.203,19.567C54.203,18.138,55.433,17.630,56.548,17.630C57.062,17.630,57.589,17.738,57.866,17.818L57.565,19.011ZZM58.465,17.773L59.484,17.773L59.726,16.523L61.240,15.967L60.893,17.773L62.154,17.773L61.932,18.930L60.671,18.930L60.156,21.587C60.113,21.781,60.094,21.980,60.092,22.179C60.092,22.544,60.312,22.770,60.628,22.770C60.881,22.770,61.133,22.710,61.310,22.627L61.068,23.855C60.826,23.914,60.553,23.997,60.312,23.997C59.355,23.997,58.682,23.573,58.682,22.404C58.682,21.931,58.766,21.472,58.862,20.986L59.261,18.933L58.244,18.933L58.465,17.773ZZM68.017,18.589C68.060,18.329,68.101,18.057,68.144,17.775L69.488,17.775L69.299,18.920L69.321,18.920C69.575,18.259,70.269,17.633,70.919,17.633C71.099,17.633,71.288,17.644,71.455,17.692L71.161,19.239C71.003,19.180,70.805,19.145,70.625,19.145C69.625,19.145,69.142,20.150,68.964,21.128L68.460,23.855L67.050,23.855L68.017,18.589ZZM67.041,19.946C67.041,18.399,66.158,17.633,64.822,17.633C63.044,17.633,61.740,19.452,61.740,21.340C61.740,23.146,62.791,23.997,64.349,23.997C64.925,23.997,65.526,23.844,66.074,23.656L66.253,22.404C65.727,22.676,65.172,22.839,64.593,22.839C63.691,22.839,63.164,22.479,63.097,21.523C63.095,21.467,63.090,21.413,63.090,21.356C63.090,21.346,63.092,21.335,63.092,21.321L63.092,21.303L63.095,21.303C63.100,20.886,63.181,20.475,63.324,20.096C63.595,19.323,63.978,18.788,64.808,18.788C65.397,18.788,65.703,19.153,65.703,19.804C65.703,19.946,65.691,20.075,65.672,20.217L63.743,20.217C63.619,20.696,63.597,21.015,63.592,21.303L66.911,21.303C66.988,20.854,67.041,20.405,67.041,19.946ZZM73.449,17.410C74.119,17.410,74.667,18.022,74.667,18.777C74.667,19.530,74.119,20.145,73.449,20.145C72.779,20.145,72.231,19.532,72.231,18.777C72.231,18.025,72.779,17.410,73.449,17.410ZZM73.451,19.941C74.011,19.941,74.432,19.433,74.432,18.777C74.432,18.122,74.009,17.614,73.451,17.614C72.884,17.614,72.463,18.122,72.463,18.777C72.463,19.433,72.886,19.941,73.451,19.941ZZM72.984,17.974L73.530,17.974C73.858,17.974,74.018,18.122,74.018,18.425C74.018,18.683,73.875,18.869,73.650,18.869L74.056,19.578L73.810,19.578L73.410,18.869L73.214,18.869L73.214,19.578L72.982,19.578L72.984,17.974ZZM73.217,18.664L73.492,18.664C73.671,18.664,73.786,18.624,73.786,18.415C73.786,18.232,73.640,18.178,73.492,18.178L73.217,18.178L73.217,18.664ZZ" class="st0"></path></g></g></g></g></g></g></g></g></g></svg>`);
const Tl = {
  hash: "svelte-1uviscp",
  code: ".ad.svelte-1uviscp {width:100%;height:auto;margin:0;}"
};
function Ii(e, r) {
  V(r, !1), de(e, Tl);
  let t = q(r, "width", 12, "448"), n = q(r, "height", 12, "176");
  var o = Pl();
  return B(() => {
    j(o, "width", t()), j(o, "height", n());
  }), m(e, o), G({
    get width() {
      return t();
    },
    set width(i) {
      t(i), $();
    },
    get height() {
      return n();
    },
    set height(i) {
      n(i), $();
    }
  });
}
K(Ii, { width: {}, height: {} }, [], [], !0);
var Rl = /* @__PURE__ */ we(`<svg class="ad svelte-1uviscp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 128" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"><g rx="0" ry="0"><g><g class="fills"><rect rx="0" ry="0" x="0" y="0" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)" width="480.0000000000002" height="128" style="fill: rgb(255, 161, 0); fill-opacity: 1;"></rect></g></g><g><g transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)" class="text-container" x="17" y="32" width="240" height="74" rx="0" ry="0"><g class="fills"><text x="17" y="108.89999389648438" dominant-baseline="ideographic" textLength="231.23333740234375" lengthAdjust="spacingAndGlyphs" style="text-transform: none; font-family: 'Arial', sans-serif; letter-spacing: normal; font-style: normal; font-weight: 900; white-space: pre; font-size: 59px; direction: ltr; fill: rgb(12, 4, 255); fill-opacity: 1;">RYANAIR</text></g></g></g><g><g transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)" class="text-container" x="256" y="43" width="208.00000000000023" height="68" rx="0" ry="0"><g class="fills"><text x="295.3000030517578" y="68" dominant-baseline="ideographic" textLength="168.6999969482422" lengthAdjust="spacingAndGlyphs" style="text-transform: none; font-family: 'Arial', sans-serif; letter-spacing: normal; font-style: italic; font-weight: 400; white-space: pre; font-size: 22px; direction: ltr; fill: rgb(12, 4, 255); fill-opacity: 1;">SUSTAINABILITY IN</text></g><g class="fills"><text x="340.1999969482422" y="90" dominant-baseline="ideographic" textLength="123.80000305175781" lengthAdjust="spacingAndGlyphs" style="text-transform: none; font-family: 'Arial', sans-serif; letter-spacing: normal; font-style: italic; font-weight: 400; white-space: pre; font-size: 22px; direction: ltr; fill: rgb(12, 4, 255); fill-opacity: 1;">YOUR WALLET</text></g></g></g></g></svg>`);
const Ml = {
  hash: "svelte-1uviscp",
  code: ".ad.svelte-1uviscp {width:100%;height:auto;margin:0;}"
};
function Pi(e, r) {
  V(r, !1), de(e, Ml);
  let t = q(r, "width", 12, "480"), n = q(r, "height", 12, "128");
  var o = Rl();
  return B(() => {
    j(o, "width", t()), j(o, "height", n());
  }), m(e, o), G({
    get width() {
      return t();
    },
    set width(i) {
      t(i), $();
    },
    get height() {
      return n();
    },
    set height(i) {
      n(i), $();
    }
  });
}
K(Pi, { width: {}, height: {} }, [], [], !0);
var Nl = /* @__PURE__ */ we(`<svg class="ad svelte-148cl36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 128" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"><g rx="0" ry="0"><g><g class="fills"><rect rx="0" ry="0" x="0" y="0" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)" width="480" height="128" style="fill: rgb(48, 21, 6); fill-opacity: 1;"></rect></g></g><g><g transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)" class="text-container" x="16" y="16" width="448" height="96" rx="0" ry="0"><g class="fills"><text x="160.640625" y="132.609375" dominant-baseline="ideographic" textLength="158.703125" lengthAdjust="spacingAndGlyphs" style="text-transform: none; font-family: 'Arial Black', sans-serif; letter-spacing: normal; font-style: normal; font-weight: 900; white-space: pre; font-size: 99px; text-decoration: none; direction: ltr; fill: rgb(252, 185, 0); fill-opacity: 1;">ups</text></g></g></g></g></svg>`);
const Ol = {
  hash: "svelte-148cl36",
  code: ".ad.svelte-148cl36 {width:100%;height:auto;}"
};
function Ti(e, r) {
  V(r, !1), de(e, Ol);
  let t = q(r, "width", 12, "480"), n = q(r, "height", 12, "128");
  var o = Nl();
  return B(() => {
    j(o, "width", t()), j(o, "height", n());
  }), m(e, o), G({
    get width() {
      return t();
    },
    set width(i) {
      t(i), $();
    },
    get height() {
      return n();
    },
    set height(i) {
      n(i), $();
    }
  });
}
K(Ti, { width: {}, height: {} }, [], [], !0);
var Dl = /* @__PURE__ */ P('<div class="ad svelte-1irpgj8"><!></div>');
const Wl = {
  hash: "svelte-1irpgj8",
  code: ".ad.svelte-1irpgj8 {box-shadow:0 1px 1px 1px rgba(0, 0, 0, 0.1);border-radius:1rem;overflow:hidden;}"
};
function Ul(e, r) {
  V(r, !1), de(e, Wl);
  let t = q(r, "id", 12, "");
  const n = ["barbie", "goldcard", "ryanair", "ups"], o = {
    barbie: ji,
    goldcard: Ii,
    ryanair: Pi,
    ups: Ti
  };
  let i = /* @__PURE__ */ a0("ryanair");
  f0(() => {
    if (!t()) {
      const l = Math.floor(Math.random() * n.length);
      I(i, n[l]);
    }
  }), Pt(
    () => (c(i), se(t())),
    () => {
      I(i, t() ? t().toLowerCase() : c(i));
    }
  ), Nr(), c0();
  var s = Dl(), a = d(s);
  return m1(a, () => o[c(i)], (l, v) => {
    v(l, {});
  }), u(s), m(e, s), G({
    get id() {
      return t();
    },
    set id(l) {
      t(l), $();
    }
  });
}
K(Ul, { id: {} }, [], [], !0);
function Bl(e, r, t, n, o, i) {
  I(r, !0), I(t, e.clientX, !0), I(n, pe.sidebarWidth, !0), document.addEventListener("mousemove", o), document.addEventListener("mouseup", i), document.body.style.cursor = "ew-resize", document.body.style.userSelect = "none";
}
var Zl = /* @__PURE__ */ P('<aside><div class="resize-handle svelte-4sa6qz" role="button" aria-label="Resize sidebar" tabindex="0"></div> <div class="sidebar-content svelte-4sa6qz"><!></div></aside>');
const Fl = {
  hash: "svelte-4sa6qz",
  code: `aside.svelte-4sa6qz {display:block;align-self:stretch;transition:transform 0.3s ease,
      opacity 0.3s ease;z-index:999;min-height:100vh;background-color:transparent;position:relative; /* For positioning the resize handle */container:sidebar / inline-size;}.position-right.svelte-4sa6qz {
    /* top: 0;
    right: 0; */display:none;
    /* height: 100vh; */
    /* transform: translateX(100%); */
    /* opacity: 0; */}.position-right.open.svelte-4sa6qz {transform:translateX(0);display:block;}.sidebar-content.svelte-4sa6qz {padding:0 1rem 0 0;margin:0;}.resize-handle.svelte-4sa6qz {position:absolute;top:0;left:0;width:6px;height:100%;cursor:ew-resize;z-index:0;background-color:transparent;transform:translateX(-3px);border-radius:3px;}.resize-handle.svelte-4sa6qz:hover {background-color:rgba(0, 0, 0, 0.1);}`
};
function Ri(e, r) {
  V(r, !0), de(e, Fl);
  const [t, n] = c2(), o = () => l2(Al, "$location", t), i = 16;
  let s = /* @__PURE__ */ te(!1), a = /* @__PURE__ */ te(0), l = /* @__PURE__ */ te(0), v = /* @__PURE__ */ te(null);
  function p(L) {
    if (!c(s)) return;
    const S = (c(a) - L.clientX) / i, E = c(l) + S;
    yi(E, o());
  }
  function h() {
    I(s, !1), document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", h), document.body.style.cursor = "", document.body.style.userSelect = "";
  }
  De(() => {
    o() && nn(o());
  });
  function g() {
    C1(o());
  }
  f0(() => {
    C1(o()), window.addEventListener("resize", g);
  }), ut(() => {
    document.removeEventListener("mousemove", p), document.removeEventListener("mouseup", h), window.removeEventListener("resize", g);
  });
  var y = Zl(), f = d(y);
  f.__mousedown = [
    Bl,
    s,
    a,
    l,
    p,
    h
  ];
  var w = _(f, 2), z = d(w);
  pt(z, r, "default", {}), u(w), u(y), lt(y, (L) => I(v, L), () => c(v)), B(() => {
    ke(y, 1, `${pe.sidebarOpen ? "open" : ""} position-right`, "svelte-4sa6qz"), Ze(y, `width: ${pe.sidebarWidth}rem;`);
  }), m(e, y), G(), n();
}
Je(["mousedown"]);
K(Ri, {}, ["default"], [], !0);
const Mi = () => {
  const e = document.querySelector("h1");
  if (e)
    return e.textContent;
  const r = document.querySelector("title");
  return r ? r.textContent : "Untitled";
};
function Hl(e) {
  e.stopPropagation(), e.preventDefault(), console.log("[not implemented] Share action triggered"), alert("Share action triggered");
}
function Kl(e) {
  e.stopPropagation(), e.preventDefault(), mt(!0), n0("/login");
}
function a1(e) {
  e.stopPropagation(), e.preventDefault(), mt(!0), n0("/subscription");
}
function Yl(e, r) {
  (e.key === "Enter" || e.key === " ") && r(e);
}
var Vl = /* @__PURE__ */ P('<button aria-label="Highlight selection" class="svelte-lxyapj">Highlight</button> <button aria-label="Annotate selection" class="svelte-lxyapj">Annotate</button> <button aria-label="Share selection" class="svelte-lxyapj">Share</button>', 1), Gl = /* @__PURE__ */ P('<button aria-label="Annotate selection" class="svelte-lxyapj">Pending subscription to highlight & annotate</button>'), Xl = /* @__PURE__ */ P('<button aria-label="Annotate selection" class="svelte-lxyapj">Your subscription request was rejected</button>'), Jl = /* @__PURE__ */ P('<button aria-label="Annotate selection" class="svelte-lxyapj">Subscribe to highlight & annotate</button>'), Ql = /* @__PURE__ */ P('<button aria-label="Annotate selection" class="svelte-lxyapj">Login to highlight & annotate</button>'), e3 = /* @__PURE__ */ P('<div class="context-menu svelte-lxyapj" role="button" tabindex="0" aria-label="Annotate selection"><div class="menu-content svelte-lxyapj"><!></div> <div></div></div>');
const t3 = {
  hash: "svelte-lxyapj",
  code: `.context-menu.svelte-lxyapj {position:fixed;font-size:0.825rem;background-color:var(--color-grey-400);border-radius:0.25rem;max-width:90vw;padding:0 1rem;z-index:1000;opacity:1; /* Start visible */transform:translateY(-0.5rem); /* No initial offset */transition:opacity 0.2s ease,
      transform 0.2s ease;pointer-events:auto;}

  @keyframes svelte-lxyapj-fade-in {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }.menu-arrow.svelte-lxyapj {position:absolute;width:1rem;height:1rem;background-color:inherit;transform:rotate(45deg);left:calc(50% - 0.5rem);}.menu-arrow.above.svelte-lxyapj {bottom:-0.5rem;}.menu-arrow.below.svelte-lxyapj {top:-0.5rem;transform:rotate(-135deg);}.menu-content.svelte-lxyapj {border-radius:0.5rem;background-color:inherit;position:relative;z-index:2;display:flex;gap:0.25rem;align-items:center;justify-content:center;}button.svelte-lxyapj {padding:0.5rem;background:transparent;border:none;cursor:pointer;border-radius:0.25rem;margin:0;font-size:0.825rem;font-family:var(--font-sans);color:var(--text-color);}button.svelte-lxyapj:hover {text-decoration:underline;}`
};
function Ni(e, r) {
  V(r, !0), de(e, t3);
  let t = /* @__PURE__ */ te(null), n = /* @__PURE__ */ te(null), o = /* @__PURE__ */ te(!1), i = /* @__PURE__ */ te("above"), s = 0;
  function a(b) {
    l();
    const C = document.createElement("div"), k = b.getBoundingClientRect();
    C.style.position = "fixed", C.style.width = "1px", C.style.height = "1px", C.style.pointerEvents = "none", C.style.opacity = "0";
    const A = k.left + k.width / 2;
    return C.style.left = `${A}px`, C.style.top = `${k.top}px`, document.body.appendChild(C), C;
  }
  function l() {
    c(t) && c(t).parentNode && (c(t).parentNode.removeChild(c(t)), I(t, null));
  }
  function v(b) {
    return b * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }
  function p() {
    var ne, T;
    if (!c(n) || !c(t)) return;
    const b = c(n).getBoundingClientRect(), C = ((T = (ne = Ye.currentSelection) == null ? void 0 : ne.range) == null ? void 0 : T.getBoundingClientRect()) || new DOMRect(), k = c(t).getBoundingClientRect(), A = v(0.5), R = v(0), W = v(1);
    let D = k.left - b.width / 2, O;
    const H = C.top - (R + b.height + A), X = window.innerHeight - (C.bottom + R + b.height + A);
    H >= 0 || X < 0 ? (I(i, "above"), O = C.top - R - b.height - A) : (I(i, "below"), O = C.bottom + R + A), D = Math.max(W, D), D = Math.min(D, window.innerWidth - b.width - W), O < W ? O = W : O + b.height > window.innerHeight - W && (O = window.innerHeight - b.height - W), c(n).style.left = `${D}px`, c(n).style.top = `${O}px`;
  }
  let h = /* @__PURE__ */ te(null), g = /* @__PURE__ */ te(We({ hasSelection: !1, isSelecting: !1 }));
  De(() => {
    const b = Ye.currentSelection, C = Ye.isSelecting, k = { hasSelection: !!(b != null && b.range), isSelecting: C };
    c(g).hasSelection === k.hasSelection && c(g).isSelecting === k.isSelecting || (I(g, k, !0), b != null && b.range && !C ? (b.quote !== c(h) && (I(h, b.quote, !0), l(), I(t, a(b.range), !0)), I(o, !0), setTimeout(
      () => {
        c(o) && p();
      },
      0
    )) : (I(o, !1), l(), I(h, null)));
  });
  function y(b) {
    Date.now() - s < 300 || c(o) && c(n) && !c(n).contains(b.target) && c(t) && !c(t).contains(b.target) && I(o, !1);
  }
  function f() {
    s = Date.now();
  }
  let w = !1;
  function z() {
    w || (w = !0, requestAnimationFrame(() => {
      var b;
      w = !1, c(o) && ((b = Ye.currentSelection) != null && b.range) && (I(t, a(Ye.currentSelection.range), !0), p());
    }));
  }
  async function L(b) {
    var k, A, R, W, D;
    if (b.stopPropagation(), b.preventDefault(), !Fe.document) {
      console.log("Document is not available. We try to create the document now.");
      const O = await X1({
        url: Re.pageUrl ?? "",
        instance_id: ((k = me.instance) == null ? void 0 : k.id) ?? "",
        title: Mi()
      });
      if (!O) throw new Error("Failed to create document");
      Fe.document = O;
    }
    if (!((A = N.user) != null && A.id)) throw new Error("User is not authenticated");
    if (!((R = Ye.currentSelection) != null && R.quote)) throw new Error("Selection is not available");
    if (!((W = Ye.currentSelection) != null && W.selectors)) throw new Error("Selectors are not available");
    const C = {
      quote: Ye.currentSelection.quote,
      document_id: (D = Fe.document) == null ? void 0 : D.id,
      selectors: Ye.currentSelection.selectors,
      profile_id: N.user.id
    };
    try {
      const O = await Q1(C);
      if (!O) throw new Error("Failed to create annotation");
      Ir(null), G0(O.id), n0(`/annotation/${O.id}`);
    } catch (O) {
      console.error("Error creating annotation:", O);
    }
  }
  function U(b) {
    var k, A, R, W;
    b.stopPropagation(), b.preventDefault();
    const C = (k = Fe.document) == null ? void 0 : k.id;
    di({
      quote: ((A = Ye.currentSelection) == null ? void 0 : A.quote) ?? "",
      document_id: C || "",
      selectors: ((R = Ye.currentSelection) == null ? void 0 : R.selectors) ?? [],
      profile_id: ((W = N.user) == null ? void 0 : W.id) ?? "",
      attribute_to: Re.pageUrl
    }), mt(!0), n0("/draft");
  }
  f0(() => {
    window.addEventListener("click", y), window.addEventListener("scroll", z), document.addEventListener("mouseup", f), document.addEventListener("touchend", f);
  }), ut(() => {
    window.removeEventListener("click", y), window.removeEventListener("scroll", z), document.removeEventListener("mouseup", f), document.removeEventListener("touchend", f), l();
  });
  var S = Ue(), E = ae(S);
  {
    var x = (b) => {
      var C = e3();
      C.__keydown = [Yl, L];
      var k = d(C), A = d(k);
      {
        var R = (O) => {
          var H = Vl(), X = ae(H);
          X.__click = L;
          var ne = _(X, 2);
          ne.__click = U;
          var T = _(ne, 2);
          T.__click = [Hl], B(() => {
            X.disabled = Y.loading, ne.disabled = Y.loading;
          }), m(O, H);
        }, W = (O, H) => {
          {
            var X = (T) => {
              var M = Gl();
              M.__click = [a1], m(T, M);
            }, ne = (T, M) => {
              {
                var F = (oe) => {
                  var ue = Xl();
                  ue.__click = [a1], m(oe, ue);
                }, re = (oe, ue) => {
                  {
                    var le = (ee) => {
                      var fe = Jl();
                      fe.__click = [a1], m(ee, fe);
                    }, Le = (ee) => {
                      var fe = Ql();
                      fe.__click = [Kl], m(ee, fe);
                    };
                    Z(
                      oe,
                      (ee) => {
                        N.isAuthenticated && !ie.subscription ? ee(le) : ee(Le, !1);
                      },
                      ue
                    );
                  }
                };
                Z(
                  T,
                  (oe) => {
                    var ue;
                    N.isAuthenticated && ((ue = ie.subscription) == null ? void 0 : ue.moderation) === "rejected" ? oe(F) : oe(re, !1);
                  },
                  M
                );
              }
            };
            Z(
              O,
              (T) => {
                var M;
                N.isAuthenticated && ((M = ie.subscription) == null ? void 0 : M.moderation) === "pending" ? T(X) : T(ne, !1);
              },
              H
            );
          }
        };
        Z(A, (O) => {
          var H;
          N.isAuthenticated && ((H = ie.subscription) == null ? void 0 : H.moderation) === "approved" ? O(R) : O(W, !1);
        });
      }
      u(k);
      var D = _(k, 2);
      u(C), lt(C, (O) => I(n, O), () => c(n)), B(() => ke(D, 1, `menu-arrow ${c(i)}`, "svelte-lxyapj")), m(b, C);
    };
    Z(E, (b) => {
      c(o) && b(x);
    });
  }
  m(e, S), G();
}
Je(["keydown", "click"]);
K(Ni, {}, [], [], !0);
function Oi(e, r) {
  V(r, !0);
  let t = q(r, "rootElement", 7);
  function n(s) {
    if (s.target.closest(".context-menu")) {
      s.stopPropagation();
      return;
    }
    Ye.isSelecting = !1, i();
  }
  function o() {
    Ye.isSelecting = !0, i();
  }
  function i() {
    const s = window.getSelection();
    if (!s || s.isCollapsed || !t()) {
      Ir(null);
      return;
    }
    const a = s.getRangeAt(0);
    if (!t().contains(a.commonAncestorContainer))
      return;
    const l = a.toString().trim();
    if (!l) return;
    const v = b2(t(), a);
    Ir({
      quote: l,
      range: a.cloneRange(),
      selectors: v
    });
  }
  return f0(() => {
    t() || t(document.body), document.addEventListener("selectionchange", o), document.addEventListener("mouseup", n), document.addEventListener("touchend", n);
  }), ut(() => {
    document.removeEventListener("selectionchange", o), document.removeEventListener("mouseup", n), document.removeEventListener("touchend", n);
  }), Ni(e, {}), G({
    get rootElement() {
      return t();
    },
    set rootElement(s) {
      t(s), $();
    }
  });
}
K(Oi, { rootElement: {} }, [], [], !0);
var r3 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"><g rx="0" ry="0"><g><g class="fills"><path d="M2.323,11.329L2.323,13.161C2.323,14.728,3.595,16.000,5.161,16.000L13.161,16.000C14.728,16.000,16.000,14.728,16.000,13.161L16.000,2.839C16.000,1.272,14.728,0.000,13.161,0.000L5.161,0.000C3.595,0.000,2.323,1.272,2.323,2.839L2.323,4.671L0.712,6.281C0.253,6.741,0.000,7.350,0.000,8.000C0.000,8.650,0.253,9.259,0.712,9.719L2.323,11.329ZZM1.806,7.378L3.494,5.690C3.737,5.448,3.871,5.123,3.871,4.779L3.871,2.839C3.871,2.126,4.449,1.548,5.161,1.548L13.161,1.548C13.874,1.548,14.452,2.126,14.452,2.839L14.452,13.161C14.452,13.874,13.874,14.452,13.161,14.452L5.161,14.452C4.449,14.452,3.871,13.874,3.871,13.161L3.871,11.221C3.871,10.875,3.737,10.552,3.494,10.310L1.806,8.622C1.641,8.457,1.548,8.235,1.548,8.000C1.548,7.765,1.641,7.543,1.806,7.378ZZ"></path></g></g><g><g class="fills"><path d="M7.484,6.710L10.839,6.710C11.265,6.710,11.613,6.361,11.613,5.935C11.613,5.510,11.265,5.161,10.839,5.161L7.484,5.161C7.058,5.161,6.710,5.510,6.710,5.935C6.710,6.361,7.058,6.710,7.484,6.710ZZ"></path></g></g><g><g class="fills"><path d="M7.484,10.839L10.839,10.839C11.265,10.839,11.613,10.490,11.613,10.065C11.613,9.639,11.265,9.290,10.839,9.290L7.484,9.290C7.058,9.290,6.710,9.639,6.710,10.065C6.710,10.490,7.058,10.839,7.484,10.839ZZ"></path></g></g></g></svg>');
function Hr(e, r) {
  V(r, !0);
  let t = q(r, "size", 7, "16"), n = q(r, "color", 7, "currentColor");
  var o = r3(), i = d(o), s = d(i), a = d(s), l = d(a);
  u(a), u(s);
  var v = _(s), p = d(v), h = d(p);
  u(p), u(v);
  var g = _(v), y = d(g), f = d(y);
  return u(y), u(g), u(i), u(o), B(() => {
    j(o, "width", t()), j(o, "height", t()), Ze(l, `fill: ${n() ?? ""}; fill-opacity: 1;`), Ze(h, `fill: ${n() ?? ""}; fill-opacity: 1;`), Ze(f, `fill: ${n() ?? ""}; fill-opacity: 1;`);
  }), m(e, o), G({
    get size() {
      return t();
    },
    set size(w = "16") {
      t(w), $();
    },
    get color() {
      return n();
    },
    set color(w = "currentColor") {
      n(w), $();
    }
  });
}
K(Hr, { size: {}, color: {} }, [], [], !0);
var n3 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"><g rx="0" ry="0"><g rx="0" ry="0"><g rx="0" ry="0"><g rx="0" ry="0"><path d="M3.458,10.663L3.458,12.129C3.458,13.382,4.476,14.400,5.729,14.400L12.129,14.400C13.382,14.400,14.400,13.382,14.400,12.129L14.400,3.871C14.400,2.618,13.382,1.600,12.129,1.600L5.729,1.600C4.476,1.600,3.458,2.618,3.458,3.871L3.458,5.337L2.170,6.625C1.802,6.993,1.600,7.480,1.600,8.000C1.600,8.520,1.802,9.007,2.170,9.375L3.458,10.663ZZM3.045,7.502L4.395,6.152C4.589,5.958,4.697,5.698,4.697,5.423L4.697,3.871C4.697,3.301,5.159,2.839,5.729,2.839L12.129,2.839C12.699,2.839,13.161,3.301,13.161,3.871L13.161,12.129C13.161,12.699,12.699,13.161,12.129,13.161L5.729,13.161C5.159,13.161,4.697,12.699,4.697,12.129L4.697,10.577C4.697,10.300,4.589,10.042,4.395,9.848L3.045,8.498C2.913,8.365,2.839,8.188,2.839,8.000C2.839,7.812,2.913,7.635,3.045,7.502ZZ" class="cls-1"></path></g></g><g><g class="fills"><path d="M7.587,6.968L10.271,6.968C10.612,6.968,10.890,6.689,10.890,6.348C10.890,6.008,10.612,5.729,10.271,5.729L7.587,5.729C7.246,5.729,6.968,6.008,6.968,6.348C6.968,6.689,7.246,6.968,7.587,6.968ZZ" class="cls-1"></path></g></g><g><g class="fills"><path d="M7.587,10.271L10.271,10.271C10.612,10.271,10.890,9.992,10.890,9.652C10.890,9.311,10.612,9.032,10.271,9.032L7.587,9.032C7.246,9.032,6.968,9.311,6.968,9.652C6.968,9.992,7.246,10.271,7.587,10.271ZZ" class="cls-1"></path></g></g></g><g rx="0" ry="0"><g rx="0" ry="0"><g rx="0" ry="0"><path d="M5.058,12.263L5.058,13.729C5.058,14.982,6.076,16.000,7.329,16.000L13.729,16.000C14.982,16.000,16.000,14.982,16.000,13.729L16.000,5.471C16.000,4.218,14.982,3.200,13.729,3.200L7.329,3.200C6.076,3.200,5.058,4.218,5.058,5.471L5.058,6.937L3.770,8.225C3.402,8.593,3.200,9.080,3.200,9.600C3.200,10.120,3.402,10.607,3.770,10.975L5.058,12.263ZZM4.645,9.102L5.995,7.752C6.189,7.558,6.297,7.298,6.297,7.023L6.297,5.471C6.297,4.901,6.759,4.439,7.329,4.439L13.729,4.439C14.299,4.439,14.761,4.901,14.761,5.471L14.761,13.729C14.761,14.299,14.299,14.761,13.729,14.761L7.329,14.761C6.759,14.761,6.297,14.299,6.297,13.729L6.297,12.177C6.297,11.900,6.189,11.642,5.995,11.448L4.645,10.098C4.513,9.965,4.439,9.788,4.439,9.600C4.439,9.412,4.513,9.235,4.645,9.102ZZ" class="cls-1"></path></g></g><g><g class="fills"><path d="M9.187,8.568L11.871,8.568C12.212,8.568,12.490,8.289,12.490,7.948C12.490,7.608,12.212,7.329,11.871,7.329L9.187,7.329C8.846,7.329,8.568,7.608,8.568,7.948C8.568,8.289,8.846,8.568,9.187,8.568ZZ" class="cls-1"></path></g></g><g><g class="fills"><path d="M9.187,11.871L11.871,11.871C12.212,11.871,12.490,11.592,12.490,11.252C12.490,10.911,12.212,10.632,11.871,10.632L9.187,10.632C8.846,10.632,8.568,10.911,8.568,11.252C8.568,11.592,8.846,11.871,9.187,11.871ZZ" class="cls-1"></path></g></g></g><g rx="0" ry="0"><g rx="0" ry="0"><g class="fills"><path d="M2.800,1.200L11.200,0.800L12.000,4.800L11.600,11.600L6.000,12.400L3.200,12.000L2.400,8.400L0.400,6.400L2.400,3.600L2.800,1.200Z"></path></g></g><g><g class="fills"><path d="M1.858,9.063L1.858,10.529C1.858,11.782,2.876,12.800,4.129,12.800L10.529,12.800C11.782,12.800,12.800,11.782,12.800,10.529L12.800,2.271C12.800,1.018,11.782,0.000,10.529,0.000L4.129,0.000C2.876,0.000,1.858,1.018,1.858,2.271L1.858,3.737L0.570,5.025C0.202,5.393,0.000,5.880,0.000,6.400C0.000,6.920,0.202,7.407,0.570,7.775L1.858,9.063ZZM1.445,5.902L2.795,4.552C2.989,4.358,3.097,4.098,3.097,3.823L3.097,2.271C3.097,1.701,3.559,1.239,4.129,1.239L10.529,1.239C11.099,1.239,11.561,1.701,11.561,2.271L11.561,10.529C11.561,11.099,11.099,11.561,10.529,11.561L4.129,11.561C3.559,11.561,3.097,11.099,3.097,10.529L3.097,8.977C3.097,8.700,2.989,8.442,2.795,8.248L1.445,6.898C1.313,6.765,1.239,6.588,1.239,6.400C1.239,6.212,1.313,6.035,1.445,5.902ZZ" class="cls-1"></path></g></g><g><g class="fills"><path d="M5.987,5.368L8.671,5.368C9.012,5.368,9.290,5.089,9.290,4.748C9.290,4.408,9.012,4.129,8.671,4.129L5.987,4.129C5.646,4.129,5.368,4.408,5.368,4.748C5.368,5.089,5.646,5.368,5.987,5.368ZZ" class="cls-1"></path></g></g><g><g class="fills"><path d="M5.987,8.671L8.671,8.671C9.012,8.671,9.290,8.392,9.290,8.052C9.290,7.711,9.012,7.432,8.671,7.432L5.987,7.432C5.646,7.432,5.368,7.711,5.368,8.052C5.368,8.392,5.646,8.671,5.987,8.671ZZ" class="cls-1"></path></g></g></g></g></svg>');
function sn(e, r) {
  V(r, !0);
  let t = q(r, "size", 7, "16"), n = q(r, "color", 7, "currentColor");
  var o = n3(), i = d(o), s = d(i), a = d(s), l = d(a), v = d(l);
  u(l), u(a);
  var p = _(a), h = d(p), g = d(h);
  u(h), u(p);
  var y = _(p), f = d(y), w = d(f);
  u(f), u(y), u(s);
  var z = _(s), L = d(z), U = d(L), S = d(U);
  u(U), u(L);
  var E = _(L), x = d(E), b = d(x);
  u(x), u(E);
  var C = _(E), k = d(C), A = d(k);
  u(k), u(C), u(z);
  var R = _(z), W = d(R), D = d(W), O = d(D);
  u(D), u(W);
  var H = _(W), X = d(H), ne = d(X);
  u(X), u(H);
  var T = _(H), M = d(T), F = d(M);
  u(M), u(T);
  var re = _(T), oe = d(re), ue = d(oe);
  return u(oe), u(re), u(R), u(i), u(o), B(() => {
    j(o, "width", t()), j(o, "height", t()), Ze(v, `fill: ${n() ?? ""} fill-opacity: 1;`), Ze(g, `fill: ${n() ?? ""}; fill-opacity: 1;`), Ze(w, `fill: ${n() ?? ""}; fill-opacity: 1;`), Ze(S, `fill: ${n() ?? ""}; fill-opacity: 1;`), Ze(b, `fill: ${n() ?? ""}; fill-opacity: 1;`), Ze(A, `fill: ${n() ?? ""}; fill-opacity: 1;`), Ze(O, `fill: ${n() ?? ""}; fill-opacity: 1;`), Ze(ne, `fill: ${n() ?? ""}; fill-opacity: 1;`), Ze(F, `fill: ${n() ?? ""}; fill-opacity: 1;`), Ze(ue, `fill: ${n() ?? ""}; fill-opacity: 1;`);
  }), m(e, o), G({
    get size() {
      return t();
    },
    set size(le = "16") {
      t(le), $();
    },
    get color() {
      return n();
    },
    set color(le = "currentColor") {
      n(le), $();
    }
  });
}
K(sn, { size: {}, color: {} }, [], [], !0);
var o3 = /* @__PURE__ */ P("<button><!></button>");
const i3 = {
  hash: "svelte-wg3dg7",
  code: `.text-button.svelte-wg3dg7 {font-family:var(--font-sans);font-size:inherit;color:inherit;background:none;border:none;cursor:pointer;padding:0;margin:0;text-align:left;display:inline-flex;align-items:center;line-height:inherit;appearance:none;white-space:nowrap;}.text-button.svelte-wg3dg7:hover:not(:disabled),
  .text-button.svelte-wg3dg7:focus:not(:disabled) {text-decoration:underline;outline:none;}.text-button.svelte-wg3dg7:disabled {cursor:not-allowed;opacity:0.7;}.primary.svelte-wg3dg7 {color:var(--clr-accent-a0);font-weight:500;}.secondary.svelte-wg3dg7 {color:var(--color-primary);font-weight:500;}.md.svelte-wg3dg7 {font-size:1rem;}.lg.svelte-wg3dg7 {font-size:1.25rem;}.xs.svelte-wg3dg7 {font-size:0.825rem;}`
};
function Ve(e, r) {
  const t = qr(r, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), n = qr(t, ["variant", "size"]);
  V(r, !1), de(e, i3);
  let o = q(r, "variant", 12, "default"), i = q(r, "size", 12, "md");
  var s = o3();
  Zo(
    s,
    () => ({
      class: `text-button ${o() ?? ""} ${i() ?? ""}`,
      ...n
    }),
    void 0,
    "svelte-wg3dg7"
  );
  var a = d(s);
  return pt(a, r, "default", {}), u(s), _e("click", s, function(l) {
    Te.call(this, r, l);
  }), _e("keydown", s, function(l) {
    Te.call(this, r, l);
  }), _e("keyup", s, function(l) {
    Te.call(this, r, l);
  }), _e("keypress", s, function(l) {
    Te.call(this, r, l);
  }), _e("submit", s, function(l) {
    Te.call(this, r, l);
  }), _e("reset", s, function(l) {
    Te.call(this, r, l);
  }), _e("blur", s, function(l) {
    Te.call(this, r, l);
  }), _e("focus", s, function(l) {
    Te.call(this, r, l);
  }), _e("change", s, function(l) {
    Te.call(this, r, l);
  }), _e("mouseenter", s, function(l) {
    Te.call(this, r, l);
  }), _e("mouseleave", s, function(l) {
    Te.call(this, r, l);
  }), _e("mouseout", s, function(l) {
    Te.call(this, r, l);
  }), _e("mouseover", s, function(l) {
    Te.call(this, r, l);
  }), m(e, s), G({
    get variant() {
      return o();
    },
    set variant(l) {
      o(l), $();
    },
    get size() {
      return i();
    },
    set size(l) {
      i(l), $();
    }
  });
}
K(Ve, { variant: {}, size: {} }, ["default"], [], !0);
var s3 = /* @__PURE__ */ P('<!> <span class="label svelte-15leh0c"> </span>', 1), a3 = /* @__PURE__ */ P('<!> <span class="label svelte-15leh0c"><!></span>', 1), l3 = /* @__PURE__ */ P("<div><!></div>");
const c3 = {
  hash: "svelte-15leh0c",
  code: `.item.svelte-15leh0c {margin-bottom:1rem;border-radius:1rem;z-index:10;position:absolute;color:var(--color-grey-900);}.item.svelte-15leh0c:hover,
  .item.hovered.svelte-15leh0c {color:var(--color-grey-800);}.label.svelte-15leh0c {margin-left:0.5rem;transition:color 0.2s ease-in-out;
    @container sidebar (max-width: 2rem){display:none;
    }}`
};
function Di(e, r) {
  V(r, !0), de(e, c3);
  const t = q(r, "indicator", 7);
  function n() {
    t().annotations.length > 1 ? n0(`/indicator/${t().y}`) : n0(`/annotation/${t().annotations[0].id}`);
  }
  function o() {
  }
  const i = /* @__PURE__ */ Ae(() => t().annotations.some((l) => l.id === Y.hoveredAnnotationId));
  var s = l3(), a = d(s);
  return Ve(a, {
    size: "xs",
    tabindex: "0",
    onclick: n,
    onmouseover: o,
    onkeydown: (l) => l.key === "Enter" && n(),
    children: (l, v) => {
      var p = Ue(), h = ae(p);
      {
        var g = (f) => {
          var w = s3(), z = ae(w);
          sn(z, {});
          var L = _(z, 2), U = d(L);
          u(L), B(() => J(U, `Show ${t().annotations.length ?? ""} annotations`)), m(f, w);
        }, y = (f) => {
          var w = a3(), z = ae(w);
          Hr(z, {});
          var L = _(z, 2), U = d(L);
          {
            var S = (x) => {
              var b = ze();
              B(() => J(b, `Show ${(t().annotations[0].repliesCount || 0) ?? ""} repl${t().annotations[0].repliesCount === 1 ? "y" : "ies"}`)), m(x, b);
            }, E = (x, b) => {
              {
                var C = (A) => {
                  var R = ze("Highlighted by yourself");
                  m(A, R);
                }, k = (A) => {
                  var R = ze();
                  B(() => {
                    var W;
                    return J(R, `Highlighted by ${((W = t().annotations[0].profile) == null ? void 0 : W.full_name) || "Anonymous"}`);
                  }), m(A, R);
                };
                Z(
                  x,
                  (A) => {
                    var R;
                    t().annotations[0].profile_id === ((R = N.user) == null ? void 0 : R.id) ? A(C) : A(k, !1);
                  },
                  b
                );
              }
            };
            Z(U, (x) => {
              t().annotations[0].repliesCount ? x(S) : x(E, !1);
            });
          }
          u(L), m(f, w);
        };
        Z(h, (f) => {
          t().annotations.length > 1 ? f(g) : f(y, !1);
        });
      }
      m(l, p);
    },
    $$slots: { default: !0 }
  }), u(s), B(() => {
    var l;
    ke(s, 1, `item ${c(i) ? "hovered" : ""}`, "svelte-15leh0c"), Ze(s, `top: ${t().y}px;left: 0;`), j(s, "aria-label", `Annotation by ${((l = t().annotations[0].profile) == null ? void 0 : l.full_name) || "Anonymous"}`);
  }), m(e, s), G({
    get indicator() {
      return t();
    },
    set indicator(l) {
      t(l), $();
    }
  });
}
K(Di, { indicator: {} }, [], [], !0);
var u3 = /* @__PURE__ */ P('<div class="list"></div>');
const d3 = {
  hash: "svelte-1vurtzw",
  code: ":host {display:block;position:relative;width:100%;height:100%;}"
};
function Wi(e, r) {
  V(r, !1), de(e, d3), c0();
  var t = Ue(), n = ae(t);
  {
    var o = (i) => {
      var s = u3();
      j0(
        s,
        5,
        () => (se(pe), Q(() => pe.indicators)),
        it,
        (a, l) => {
          Di(a, {
            get indicator() {
              return c(l);
            }
          });
        }
      ), u(s), m(i, s);
    };
    Z(n, (i) => {
      se(pe), Q(() => pe.indicators.length > 0) && i(o);
    });
  }
  m(e, t), G();
}
K(Wi, {}, [], [], !0);
var f3 = /* @__PURE__ */ P('<div class="container svelte-9qwc1q"><!></div>');
const v3 = {
  hash: "svelte-9qwc1q",
  code: ".container.svelte-9qwc1q {position:relative;}"
};
function Ui(e, r) {
  V(r, !1), de(e, v3), f0(() => {
    G0(null);
  }), c0();
  var t = f3(), n = d(t);
  Wi(n, {}), u(t), m(e, t), G();
}
K(Ui, {}, [], [], !0);
var h3 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 4" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"><g><g class="frame-container-wrapper"><g class="frame-container-blur"><g class="frame-container-shadows"><g fill="none"><g class="frame-children"><g rx="0" ry="0"><g><g class="fills"><ellipse cx="2" cy="2" rx="2" ry="2"></ellipse></g></g><g><g class="fills"><ellipse cx="8" cy="2" rx="2" ry="2"></ellipse></g></g><g><g class="fills"><ellipse cx="14" cy="2" rx="2" ry="2"></ellipse></g></g></g></g></g></g></g></g></g></svg>');
function Bi(e, r) {
  V(r, !1);
  let t = q(r, "width", 12, "16"), n = q(r, "height", 12, "4"), o = q(r, "fill", 12, "currentColor");
  var i = h3(), s = d(i), a = d(s), l = d(a), v = d(l), p = d(v), h = d(p), g = d(h), y = d(g), f = d(y), w = d(f);
  u(f), u(y);
  var z = _(y), L = d(z), U = d(L);
  u(L), u(z);
  var S = _(z), E = d(S), x = d(E);
  return u(E), u(S), u(g), u(h), u(p), u(v), u(l), u(a), u(s), u(i), B(() => {
    j(i, "width", t()), j(i, "height", n()), Ze(w, `fill: ${o() ?? ""}; fill-opacity: 1;`), Ze(U, `fill: ${o() ?? ""}; fill-opacity: 1;`), Ze(x, `fill: ${o() ?? ""}; fill-opacity: 1;`);
  }), m(e, i), G({
    get width() {
      return t();
    },
    set width(b) {
      t(b), $();
    },
    get height() {
      return n();
    },
    set height(b) {
      n(b), $();
    },
    get fill() {
      return o();
    },
    set fill(b) {
      o(b), $();
    }
  });
}
K(Bi, { width: {}, height: {}, fill: {} }, [], [], !0);
const Zi = typeof window < "u" ? window : void 0, g3 = typeof window < "u" ? window.document : void 0;
function Fi(e) {
  let r = e.activeElement;
  for (; r != null && r.shadowRoot; ) {
    const t = r.shadowRoot.activeElement;
    if (t === r)
      break;
    r = t;
  }
  return r;
}
function Hi(e, r = g3) {
  return (e == null ? void 0 : e.ownerDocument) ?? r;
}
function Ki(e, r) {
  return e === r || e.contains(r);
}
var It, vr;
class p3 {
  constructor(r = {}) {
    A0(this, It);
    A0(this, vr);
    const {
      window: t = Zi,
      document: n = t == null ? void 0 : t.document
    } = r;
    t !== void 0 && (M0(this, It, n), M0(this, vr, Ll((o) => {
      const i = St(t, "focusin", o), s = St(t, "focusout", o);
      return () => {
        i(), s();
      };
    })));
  }
  get current() {
    var r;
    return (r = he(this, vr)) == null || r.call(this), he(this, It) ? Fi(he(this, It)) : null;
  }
}
It = new WeakMap(), vr = new WeakMap();
new p3();
function m3(e) {
  return typeof e == "function";
}
function y3(e) {
  return e instanceof Element;
}
function Yi(e, r) {
  if (m3(e)) {
    const n = e();
    return n === void 0 ? r : n;
  }
  return e === void 0 ? r : e;
}
function b3(e, r) {
  let t = /* @__PURE__ */ te(null);
  const n = /* @__PURE__ */ Ae(() => Yi(r, 250));
  function o(...i) {
    if (c(t))
      c(t).timeout && clearTimeout(c(t).timeout);
    else {
      let s, a;
      const l = new Promise((v, p) => {
        s = v, a = p;
      });
      I(
        t,
        {
          timeout: null,
          runner: null,
          promise: l,
          resolve: s,
          reject: a
        },
        !0
      );
    }
    return c(t).runner = async () => {
      if (!c(t)) return;
      const s = c(t);
      I(t, null);
      try {
        s.resolve(await e.apply(this, i));
      } catch (a) {
        s.reject(a);
      }
    }, c(t).timeout = setTimeout(c(t).runner, c(n)), c(t).promise;
  }
  return o.cancel = async () => {
    (!c(t) || c(t).timeout === null) && (await new Promise((i) => setTimeout(i, 0)), !c(t) || c(t).timeout === null) || (clearTimeout(c(t).timeout), c(t).reject("Cancelled"), I(t, null));
  }, o.runScheduledNow = async () => {
    var i, s;
    (!c(t) || !c(t).timeout) && (await new Promise((a) => setTimeout(a, 0)), !c(t) || !c(t).timeout) || (clearTimeout(c(t).timeout), c(t).timeout = null, await ((s = (i = c(t)).runner) == null ? void 0 : s.call(i)));
  }, Object.defineProperty(o, "pending", {
    enumerable: !0,
    get() {
      var i;
      return !!((i = c(t)) != null && i.timeout);
    }
  }), o;
}
function w3(e, r) {
  switch (e) {
    case "post":
      De(r);
      break;
    case "pre":
      bo(r);
      break;
  }
}
function Vi(e, r, t, n = {}) {
  const { lazy: o = !1 } = n;
  let i = !o, s = Array.isArray(e) ? [] : void 0;
  w3(r, () => {
    const a = Array.isArray(e) ? e.map((v) => v()) : e();
    if (!i) {
      i = !0, s = a;
      return;
    }
    const l = Q(() => t(a, s));
    return s = a, l;
  });
}
function Gi(e, r, t) {
  Vi(e, "post", r, t);
}
function _3(e, r, t) {
  Vi(e, "pre", r, t);
}
Gi.pre = _3;
function l1() {
}
async function x3(e = 0) {
  return new Promise((r) => setTimeout(r, e));
}
function C3(e, r, t = {}) {
  const {
    window: n = Zi,
    immediate: o = !0,
    detectIframe: i = !1
  } = t, s = t.document ?? (n == null ? void 0 : n.document), a = /* @__PURE__ */ Ae(() => Yi(e)), l = /* @__PURE__ */ Ae(() => Hi(c(a), s));
  let v = /* @__PURE__ */ te(We(o)), p = !1, h = l1, g = l1;
  const y = b3(
    (z) => {
      if (!c(a) || !c(l)) {
        h();
        return;
      }
      if (p === !0 || !Kn(z, c(a), c(l))) {
        h();
        return;
      }
      z.pointerType === "touch" ? (h(), h = St(c(l), "click", () => r(z), { once: !0 })) : r(z);
    },
    10
  );
  function f() {
    if (!c(l) || !n || !c(a)) return l1;
    const z = [
      /**
       * CAPTURE INTERACTION START
       * Mark the pointerdown event as intercepted to indicate that an interaction
       * has started. This helps in distinguishing between valid and invalid events.
       */
      St(
        c(l),
        "pointerdown",
        (L) => {
          Kn(L, c(a), c(l)) && (p = !0);
        },
        { capture: !0 }
      ),
      /**
       * BUBBLE INTERACTION START
       * Mark the pointerdown event as non-intercepted. Debounce `handleClickOutside` to
       * avoid prematurely checking if other events were intercepted.
       */
      St(c(l), "pointerdown", (L) => {
        p = !1, y(L);
      })
    ];
    return i && z.push(
      /**
      * DETECT IFRAME INTERACTIONS
      *
      * We add a blur event listener to the window to detect when the user
      * interacts with an iframe. If the active element is an iframe and it
      * is not a descendant of the container, we call the callback function.
      */
      St(n, "blur", async (L) => {
        await x3();
        const U = Fi(c(l));
        (U == null ? void 0 : U.tagName) === "IFRAME" && !Ki(c(a), U) && r(L);
      })
    ), () => {
      for (const L of z)
        L();
    };
  }
  function w() {
    p = !1, y.cancel(), h(), g();
  }
  return Gi(
    [
      () => c(v),
      () => c(a)
    ],
    ([z, L]) => {
      z && L ? (g(), g = f()) : w();
    }
  ), De(() => () => {
    w();
  }), {
    /** Stop listening for click events outside the container. */
    stop: () => I(v, !1),
    /** Start listening for click events outside the container. */
    start: () => I(v, !0),
    get enabled() {
      return c(v);
    }
  };
}
function Kn(e, r, t) {
  if ("button" in e && e.button > 0) return !1;
  const n = e.target;
  if (!y3(n)) return !1;
  const o = Hi(n, t);
  if (!o) return !1;
  if (n === r) {
    const i = r.getBoundingClientRect();
    return !(i.top <= e.clientY && e.clientY <= i.top + i.height && i.left <= e.clientX && e.clientX <= i.left + i.width);
  }
  return o.documentElement.contains(n) && !Ki(r, n);
}
function z3(e, r, t, n) {
  e.stopPropagation(), c(r) ? t() : n();
}
var k3 = /* @__PURE__ */ P('<div><button class="menu-toggle svelte-10ueiix" aria-haspopup="true"><!></button> <div class="dropdown-menu svelte-10ueiix"><!></div></div>');
const L3 = {
  hash: "svelte-10ueiix",
  code: `.dropdown-container.svelte-10ueiix {position:relative;}.dropdown-menu.svelte-10ueiix {position:absolute;right:0;top:100%;margin-top:0.25rem;background-color:var(--background-color);border-radius:0.5rem;box-shadow:0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);padding:1rem;border:1px solid var(--color-grey-700);z-index:10;display:flex;flex-direction:column;gap:0.5rem;min-width:6rem;
    animation: svelte-10ueiix-fade-in 0.2s ease forwards;opacity:0;visibility:hidden;pointer-events:none;transform:translateY(-0.25rem);transition:opacity 0.2s ease;}.open.svelte-10ueiix .dropdown-menu:where(.svelte-10ueiix) {opacity:1;visibility:visible;pointer-events:auto;transform:translateY(0);}.menu-toggle.svelte-10ueiix {background-color:transparent;padding:0;line-height:1.2rem;border:0;border-radius:.25rem;height:1.5rem;width:1.5rem;cursor:pointer;display:flex;align-items:center;justify-content:center;}.menu-toggle.svelte-10ueiix svg {width:1rem;height:1rem;}.menu-toggle.svelte-10ueiix:hover {background:var(--color-grey-100);}

  @keyframes svelte-10ueiix-fade-in {
    from {
      opacity: 0;
      transform: translateY(-0.25rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }`
};
function Kr(e, r) {
  V(r, !0), de(e, L3);
  let t = q(r, "label", 7, "More options"), n = /* @__PURE__ */ te(!1);
  const o = H1();
  let i = /* @__PURE__ */ te(void 0);
  const s = C3(
    () => c(i),
    () => {
      I(n, !1), s.stop();
    },
    { immediate: !1 }
  );
  function a() {
    I(n, !0);
  }
  function l() {
    I(n, !1);
  }
  De(() => {
    o("toggle", { open: c(n) });
  });
  var v = k3(), p = d(v);
  p.__click = [
    z3,
    n,
    l,
    a
  ];
  var h = d(p);
  Bi(h, {}), u(p);
  var g = _(p, 2), y = d(g);
  return pt(y, r, "default", {}), u(g), lt(g, (f) => I(i, f), () => c(i)), u(v), B(() => {
    ke(v, 1, `dropdown-container ${c(n) ? "open" : ""}`, "svelte-10ueiix"), j(p, "aria-label", t()), j(p, "aria-expanded", c(n));
  }), m(e, v), G({
    get label() {
      return t();
    },
    set label(f = "More options") {
      t(f), $();
    }
  });
}
Je(["click"]);
K(Kr, { label: {} }, ["default"], [], !0);
var E3 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="3113 322 22 22" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"><g><g class="fills"><path d="M3116.000,325.000L3124.002,333.004L3132.000,325.004M3116.000,341.000L3124.002,333.004L3131.996,341.000"></path></g><g class="strokes"><g class="stroke-shape"><path d="M3116.000,325.000L3124.002,333.004L3132.000,325.004M3116.000,341.000L3124.002,333.004L3131.996,341.000"></path></g></g></g></svg>');
function an(e, r) {
  V(r, !0);
  const t = q(r, "width", 7, "22"), n = q(r, "height", 7, "22"), o = q(r, "color", 7, "currentColor");
  var i = E3(), s = d(i), a = _(d(s)), l = d(a), v = d(l);
  return u(l), u(a), u(s), u(i), B(() => {
    j(i, "width", t()), j(i, "height", n()), Ze(v, `fill: none; stroke-width: 1; stroke: ${o() ?? ""}; stroke-opacity: 1;`);
  }), m(e, i), G({
    get width() {
      return t();
    },
    set width(p = "22") {
      t(p), $();
    },
    get height() {
      return n();
    },
    set height(p = "22") {
      n(p), $();
    },
    get color() {
      return o();
    },
    set color(p = "currentColor") {
      o(p), $();
    }
  });
}
K(an, { width: {}, height: {}, color: {} }, [], [], !0);
var A3 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" viewBox="-5.0 -10.0 110.0 110.0"><path d="m50 12.582c-9.75 0-17.688 7.9375-17.688 17.688s7.9375 17.688 17.688 17.688 17.688-7.9375 17.688-17.688-7.9375-17.688-17.688-17.688zm0 31.211c-7.457 0-13.52-6.0625-13.52-13.52 0-7.4609 6.0625-13.523 13.52-13.523s13.52 6.0625 13.52 13.52c0 7.4609-6.0625 13.523-13.52 13.523z"></path><path d="m52.207 55.5h-4.4375c-16.457 0-29.832 13.375-29.832 29.832 0 1.1445 0.9375 2.082 2.082 2.082h59.918c1.1445 0 2.082-0.9375 2.082-2.082 0.023438-16.438-13.352-29.832-29.812-29.832zm-30 27.75c1.0625-13.188 12.125-23.582 25.582-23.582h4.4375c13.457 0 24.52 10.395 25.582 23.582z"></path></svg>');
function Xi(e, r) {
  V(r, !0);
  /**
   * User icon component
   * @copyright Rahmat Sigit Prasetyo
   * @author https://thenounproject.com/browse/icons/term/user
   * @license https://creativecommons.org/licenses/by/3.0/
   */
  let t = q(r, "size", 7, "16"), n = q(r, "color", 7, "currentColor");
  var o = A3(), i = d(o), s = _(i);
  return u(o), B(() => {
    j(o, "width", t()), j(o, "height", t()), j(i, "fill", n()), j(s, "fill", n());
  }), m(e, o), G({
    get size() {
      return t();
    },
    set size(a = "16") {
      t(a), $();
    },
    get color() {
      return n();
    },
    set color(a = "currentColor") {
      n(a), $();
    }
  });
}
K(Xi, { size: {}, color: {} }, [], [], !0);
function S3() {
  n0("#/");
}
var $3 = /* @__PURE__ */ P('<a href="#/account" class="svelte-w5yacc"> <!></a>'), q3 = /* @__PURE__ */ P('<a href="#/login" class="svelte-w5yacc">Login</a>'), j3 = /* @__PURE__ */ P('<header class="svelte-w5yacc"><nav class="navigation svelte-w5yacc"><div class="close svelte-w5yacc"><button class="svelte-w5yacc"><!></button></div> <div class="controls svelte-w5yacc"><!></div></nav></header>');
const I3 = {
  hash: "svelte-w5yacc",
  code: "header.svelte-w5yacc {display:flex;align-items:center;flex-direction:column;position:relative;font-family:var(--font-sans);background:var(--background-color);z-index:1;border-radius:3rem;margin-top:1rem;padding:1rem;border:1px solid var(--color-grey-400);}.navigation.svelte-w5yacc {width:100%;display:flex;justify-content:space-between;align-items:center;}.close.svelte-w5yacc {display:flex;flex-direction:row;justify-content:flex-end;}.close.svelte-w5yacc button:where(.svelte-w5yacc) {font-size:0.875rem;background:transparent;line-height:1.2rem;border:0;border-radius:3rem;height:3rem;width:3rem;cursor:pointer;display:flex;align-items:center;justify-content:center;}.close.svelte-w5yacc button:where(.svelte-w5yacc):hover {background:var(--color-grey-100);}.controls.svelte-w5yacc {display:flex;flex-direction:row;justify-content:space-between;gap:1rem;}.controls.svelte-w5yacc a:where(.svelte-w5yacc) {font-size:1rem;text-decoration:none;color:var(--text-color);background:transparent;line-height:1.2rem;border:0;gap:0.5rem;border-radius:3rem;height:3rem;padding:0 1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;}.controls.svelte-w5yacc a:where(.svelte-w5yacc):hover {background:var(--color-grey-100);}"
};
function _t(e, r) {
  V(r, !1), de(e, I3), c0();
  var t = j3(), n = d(t), o = d(n), i = d(o);
  i.__click = [S3];
  var s = d(i);
  sn(s, { size: "32" }), u(i), u(o);
  var a = _(o, 2), l = d(a);
  {
    var v = (h) => {
      var g = $3(), y = d(g), f = _(y);
      Xi(f, { size: "32" }), u(g), ir(g, (w) => Et == null ? void 0 : Et(w)), B(() => J(y, `${se(N), Q(() => N.user.full_name) ?? ""} `)), m(h, g);
    }, p = (h) => {
      var g = q3();
      ir(g, (y) => Et == null ? void 0 : Et(y)), m(h, g);
    };
    Z(l, (h) => {
      se(N), Q(() => N == null ? void 0 : N.user) ? h(v) : h(p, !1);
    });
  }
  u(a), u(n), u(t), m(e, t), G();
}
Je(["click"]);
K(_t, {}, [], [], !0);
var Ji = /* @__PURE__ */ ((e) => (e.Public = "public", e.Private = "private", e))(Ji || {}), k1 = /* @__PURE__ */ ((e) => (e.Draft = "draft", e.Active = "active", e.Archived = "archived", e.Deleted = "deleted", e))(k1 || {});
class P3 {
  constructor(r = {}) {
    ve(this, "baseUrl", "http://localhost:5173/api/v1");
    ve(this, "securityData", null);
    ve(this, "securityWorker");
    ve(this, "abortControllers", /* @__PURE__ */ new Map());
    ve(this, "customFetch", (...r) => fetch(...r));
    ve(this, "baseApiParams", {
      credentials: "same-origin",
      headers: {},
      redirect: "follow",
      referrerPolicy: "no-referrer"
    });
    ve(this, "setSecurityData", (r) => {
      this.securityData = r;
    });
    ve(this, "contentFormatters", {
      "application/json": (r) => r !== null && (typeof r == "object" || typeof r == "string") ? JSON.stringify(r) : r,
      "text/plain": (r) => r !== null && typeof r != "string" ? JSON.stringify(r) : r,
      "multipart/form-data": (r) => Object.keys(r || {}).reduce((t, n) => {
        const o = r[n];
        return t.append(
          n,
          o instanceof Blob ? o : typeof o == "object" && o !== null ? JSON.stringify(o) : `${o}`
        ), t;
      }, new FormData()),
      "application/x-www-form-urlencoded": (r) => this.toQueryString(r)
    });
    ve(this, "createAbortSignal", (r) => {
      if (this.abortControllers.has(r)) {
        const n = this.abortControllers.get(r);
        return n ? n.signal : void 0;
      }
      const t = new AbortController();
      return this.abortControllers.set(r, t), t.signal;
    });
    ve(this, "abortRequest", (r) => {
      const t = this.abortControllers.get(r);
      t && (t.abort(), this.abortControllers.delete(r));
    });
    ve(this, "request", async ({
      body: r,
      secure: t,
      path: n,
      type: o,
      query: i,
      format: s,
      baseUrl: a,
      cancelToken: l,
      ...v
    }) => {
      const p = (typeof t == "boolean" ? t : this.baseApiParams.secure) && this.securityWorker && await this.securityWorker(this.securityData) || {}, h = this.mergeRequestParams(v, p), g = i && this.toQueryString(i), y = this.contentFormatters[
        o || "application/json"
        /* Json */
      ], f = s || h.format;
      return this.customFetch(
        `${a || this.baseUrl || ""}${n}${g ? `?${g}` : ""}`,
        {
          ...h,
          headers: {
            ...h.headers || {},
            ...o && o !== "multipart/form-data" ? { "Content-Type": o } : {}
          },
          signal: (l ? this.createAbortSignal(l) : h.signal) || null,
          body: typeof r > "u" || r === null ? null : y(r)
        }
      ).then(async (w) => {
        const z = w.clone();
        z.data = null, z.error = null;
        const L = f ? await w[f]().then((U) => (z.ok ? z.data = U : z.error = U, z)).catch((U) => (z.error = U, z)) : z;
        if (l && this.abortControllers.delete(l), !w.ok) throw L;
        return L;
      });
    });
    Object.assign(this, r);
  }
  encodeQueryParam(r, t) {
    return `${encodeURIComponent(r)}=${encodeURIComponent(typeof t == "number" ? t : `${t}`)}`;
  }
  addQueryParam(r, t) {
    return this.encodeQueryParam(t, r[t]);
  }
  addArrayQueryParam(r, t) {
    return r[t].map((o) => this.encodeQueryParam(t, o)).join("&");
  }
  toQueryString(r) {
    const t = r || {};
    return Object.keys(t).filter(
      (o) => typeof t[o] < "u"
    ).map(
      (o) => Array.isArray(t[o]) ? this.addArrayQueryParam(t, o) : this.addQueryParam(t, o)
    ).join("&");
  }
  addQueryParams(r) {
    const t = this.toQueryString(r);
    return t ? `?${t}` : "";
  }
  mergeRequestParams(r, t) {
    return {
      ...this.baseApiParams,
      ...r,
      ...t || {},
      headers: {
        ...this.baseApiParams.headers || {},
        ...r.headers || {},
        ...t && t.headers || {}
      }
    };
  }
}
class T3 extends P3 {
  constructor() {
    super(...arguments);
    ve(this, "annotations", {
      /**
       * @description Retrieve all annotations for the authenticated user
       *
       * @name GetAnnotations
       * @summary Get Annotations
       * @request GET:/annotations
       * @secure
       */
      getAnnotations: (t, n = {}) => this.request({
        path: "/annotations",
        method: "GET",
        query: t,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * @description Create a new annotation
       *
       * @name CreateAnnotation
       * @summary Create Annotation
       * @request PUT:/annotations
       * @secure
       */
      createAnnotation: (t, n = {}) => this.request({
        path: "/annotations",
        method: "PUT",
        body: t,
        secure: !0,
        type: "application/json",
        format: "json",
        ...n
      }),
      /**
       * @description Update an existing annotation
       *
       * @name UpdateAnnotation
       * @summary Update Annotation
       * @request PATCH:/annotations
       * @secure
       */
      updateAnnotation: (t, n, o = {}) => this.request({
        path: "/annotations",
        method: "PATCH",
        query: t,
        body: n,
        secure: !0,
        type: "application/json",
        format: "json",
        ...o
      }),
      /**
       * @description Delete an annotation
       *
       * @name DeleteAnnotation
       * @summary Delete Annotation
       * @request DELETE:/annotations
       * @secure
       */
      deleteAnnotation: (t, n = {}) => this.request({
        path: "/annotations",
        method: "DELETE",
        query: t,
        secure: !0,
        ...n
      })
    });
    ve(this, "documents", {
      /**
       * @description Retrieve all documents or a specific document
       *
       * @name GetDocuments
       * @summary Get Documents
       * @request GET:/documents
       * @secure
       */
      getDocuments: (t, n = {}) => this.request({
        path: "/documents",
        method: "GET",
        query: t,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * @description Create a new document
       *
       * @name CreateDocument
       * @summary Create Document
       * @request PUT:/documents
       * @secure
       */
      createDocument: (t, n = {}) => this.request({
        path: "/documents",
        method: "PUT",
        body: t,
        secure: !0,
        type: "application/json",
        format: "json",
        ...n
      }),
      /**
       * @description Update an existing document
       *
       * @name UpdateDocument
       * @summary Update Document
       * @request PATCH:/documents
       * @secure
       */
      updateDocument: (t, n = {}) => this.request({
        path: "/documents",
        method: "PATCH",
        body: t,
        secure: !0,
        type: "application/json",
        format: "json",
        ...n
      }),
      /**
       * @description Delete a document
       *
       * @name DeleteDocument
       * @summary Delete Document
       * @request DELETE:/documents
       * @secure
       */
      deleteDocument: (t, n = {}) => this.request({
        path: "/documents",
        method: "DELETE",
        query: t,
        secure: !0,
        ...n
      })
    });
    ve(this, "instances", {
      /**
       * @description Retrieve a specific instance by public_key
       *
       * @name GetInstance
       * @summary Get Instances
       * @request GET:/instances
       * @secure
       */
      getInstance: (t, n = {}) => this.request({
        path: "/instances",
        method: "GET",
        query: t,
        secure: !0,
        format: "json",
        ...n
      })
    });
    ve(this, "subscribers", {
      /**
       * @description Retrieve subscribers for an instance
       *
       * @name GetSubscribers
       * @summary Get Subscribers
       * @request GET:/subscribers
       * @secure
       */
      getSubscribers: (t, n = {}) => this.request({
        path: "/subscribers",
        method: "GET",
        query: t,
        secure: !0,
        format: "json",
        ...n
      }),
      /**
       * @description Create a new subscriber
       *
       * @name CreateSubscriber
       * @summary Create Subscriber
       * @request PUT:/subscribers
       * @secure
       */
      createSubscriber: (t, n = {}) => this.request({
        path: "/subscribers",
        method: "PUT",
        body: t,
        secure: !0,
        type: "application/json",
        format: "json",
        ...n
      }),
      /**
       * @description Update an existing subscriber
       *
       * @name UpdateSubscriber
       * @summary Update Subscriber
       * @request PATCH:/subscribers
       * @secure
       */
      updateSubscriber: (t, n = {}) => this.request({
        path: "/subscribers",
        method: "PATCH",
        body: t,
        secure: !0,
        type: "application/json",
        format: "json",
        ...n
      }),
      /**
       * @description Delete a subscription
       *
       * @name DeleteSubscription
       * @summary Delete Subscription
       * @request DELETE:/subscribers
       * @secure
       */
      deleteSubscription: (t, n = {}) => this.request({
        path: "/subscribers",
        method: "DELETE",
        body: t,
        secure: !0,
        type: "application/json",
        ...n
      })
    });
    ve(this, "auth", {
      /**
       * @description Sign up a new user with WordPress username and email to an instance
       *
       * @tags Auth
       * @name Signup
       * @summary Signup
       * @request POST:/auth/signup
       * @secure
       */
      signup: (t, n = {}) => this.request({
        path: "/auth/signup",
        method: "POST",
        body: t,
        secure: !0,
        type: "application/json",
        format: "json",
        ...n
      }),
      /**
       * @description Confirm user signup with token hash and instance public key
       *
       * @tags Auth
       * @name ConfirmSignup
       * @summary Confirm Signup
       * @request POST:/auth/confirm
       * @secure
       */
      confirmSignup: (t, n = {}) => this.request({
        path: "/auth/confirm",
        method: "POST",
        body: t,
        secure: !0,
        type: "application/json",
        format: "json",
        ...n
      }),
      /**
       * @description Log out the current user
       *
       * @tags Auth
       * @name Logout
       * @summary Logout
       * @request POST:/auth/logout
       * @secure
       */
      logout: (t = {}) => this.request({
        path: "/auth/logout",
        method: "POST",
        secure: !0,
        format: "json",
        ...t
      })
    });
  }
}
const dt = class dt {
  constructor(r, t) {
    ve(this, "api");
    r || (r = `${Tt.serverUrl}/api/v1`), this.api = new T3({
      baseUrl: r,
      securityWorker: (n) => ({
        headers: {
          Authorization: `Bearer ${n}`
        }
      })
    }), console.log(this.api), t && this.setToken(t);
  }
  /**
   * Get the AkinClient singleton instance
   */
  static getInstance(r, t) {
    return r || (r = `${Tt.serverUrl}/api/v1`), dt.instance || (dt.instance = new dt(r, t)), dt.instance;
  }
  /**
   * Set the authentication token for API requests
   */
  setToken(r) {
    this.api.setSecurityData(r);
  }
  /**
   * Clear the authentication token
   */
  clearToken() {
    this.api.setSecurityData("");
  }
};
ve(dt, "instance");
let L1 = dt;
L1.getInstance();
var R3 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>');
function M3(e, r) {
  V(r, !1);
  let t = q(r, "size", 12, 24), n = q(r, "color", 12, "currentColor");
  var o = R3();
  return B(() => {
    j(o, "width", t()), j(o, "height", t()), j(o, "stroke", n());
  }), m(e, o), G({
    get size() {
      return t();
    },
    set size(i) {
      t(i), $();
    },
    get color() {
      return n();
    },
    set color(i) {
      n(i), $();
    }
  });
}
K(M3, { size: {}, color: {} }, [], [], !0);
var N3 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 110.0"><path d="m97.816 47.039c-0.03125-0.085937-0.011718-0.17969-0.066406-0.25391l-14.973-19.375h2.0938c7.625-0.14453 7.6172-11.457 0-11.598l-27.363-0.003906c-0.48828-0.67188-1.043-1.2969-1.7266-1.8203-0.12109-3.1953 0.89453-9.8008-1.6836-11.809-3.3789-3.6445-10.062-0.9375-9.8984 4.0977v7.7266c-0.67578 0.51953-1.2266 1.1367-1.7109 1.8047h-27.363c-7.6211 0.14844-7.6133 11.449 0 11.598h2.0977l-14.973 19.379c-0.066406 0.082032-0.035156 0.16406-0.066406 0.24609-0.039063 0.097656-0.12109 0.17578-0.12109 0.28906 0 0.039063 0.011719 0.070313 0.011719 0.10938 0.003906 0.015624 0 0.027343 0.003906 0.042968 0.72266 22.137 33.176 22.137 33.863-0.035156v-0.011719c0-0.035156 0.011719-0.066406 0.011719-0.10547 0-0.10937-0.078125-0.18359-0.11719-0.28125-0.03125-0.085937-0.011719-0.17969-0.070313-0.25391l-14.973-19.375h21.691c0.48438 0.66797 1.0352 1.2891 1.7109 1.8047v36.332c-0.92578 0.003906-1.7695 0.38281-2.3789 0.99219-0.61328 0.61328-0.99609 1.4609-0.99609 2.3906v11.965h-7.3906c-2.6211 0-4.7852 2.1562-4.7812 4.7812v3.0234h-7.5859c-2.9727 0-5.3984 2.4336-5.3984 5.3984 0.039063 1.832-0.58203 5.4062 2.2305 5.4023h64.199c2.8477-0.003906 2.1641-3.5625 2.2305-5.4023 0-2.9648-2.4336-5.4023-5.3984-5.3984h-7.5859v-3.0234c0.003906-2.6328-2.1562-4.7812-4.7812-4.7812h-7.3906v-11.965c0-0.92969-0.38281-1.7812-0.99609-2.3906-0.61719-0.60937-1.4531-0.98828-2.3789-0.99219l0.007812-36.336c0.67578-0.51953 1.2266-1.1367 1.7109-1.8047h21.695l-14.973 19.375c-0.066406 0.082031-0.035156 0.16406-0.066406 0.25-0.039063 0.097656-0.11719 0.17578-0.11719 0.28516 0 0.039063 0.011719 0.078125 0.011719 0.11719 0.003906 0.011718 0 0.019531 0.003906 0.03125 0.082032 9.2891 7.6211 16.797 16.93 16.797 9.3203 0 16.871-7.5273 16.934-16.832v-0.003907c0-0.039062 0.011718-0.074219 0.011718-0.10938-0.007812-0.10547-0.085937-0.18359-0.125-0.27734zm-50.668-43.621c2.3555-2.5352 7.0078-0.65234 6.8945 2.8555l-0.003907 6.6797c-1.1602-0.51562-2.5039-0.82422-4.0391-0.85156-1.5234 0.027344-2.8555 0.33594-4.0078 0.83984-0.039063-3.293-0.55078-8.2734 1.1562-9.5234zm-43.301 44.781h30.32c-1.4297 18.871-28.879 18.879-30.32 0zm29.438-1.7617h-28.551l14.277-18.477zm8.1992-20.789h-26.359c-5.2852-0.027344-5.2773-8.0508 0-8.0781h26.363c-1.0977 2.543-1.0977 5.5312-0.003906 8.0781zm28.98 64.809h8.4648c3.9492 0.1875 3.7461 3.8633 3.6406 6.8125 0 0.25781-0.21094 0.46875-0.46875 0.46875l-64.203 0.003907c-0.25781 0-0.46875-0.21094-0.46875-0.46875v-3.1719c0-2.0039 1.6367-3.6367 3.6406-3.6406h8.4648c10.969-0.003907 29.965-0.003907 40.93-0.003907zm-12.172-7.8047h8.2695c3.4648 0.16016 3.0586 3.5469 3.0234 6.0469h-39.172c-0.0625-2.4688-0.39453-5.9258 3.0234-6.0469zm-0.87891-13.723v11.965h-14.828c0.1875-0.58594-0.48438-13.156 0.48047-13.113 0.29297-0.29297 0.70312-0.48047 1.1484-0.48047h11.57c0.89844 0 1.625 0.73438 1.6289 1.6289zm-11.453-3.3867v-35.281c1.1602 0.51562 2.5039 0.82422 4.0391 0.85156 1.5391-0.027343 2.8828-0.33594 4.0391-0.85156v35.281zm-1.4414-38.457c-7.0781-7.3164 3.6406-18.035 10.957-10.957 7.0781 7.3164-3.6406 18.035-10.957 10.957zm13.992-1.4375c1.0938-2.543 1.0938-5.5352 0-8.0781h26.363c5.2852 0.035157 5.2773 8.0469 0 8.0781zm22.48 2.3125 14.277 18.477h-28.559zm-15.164 20.238h30.32c-1.4297 18.867-28.879 18.883-30.32 0z" fill-rule="evenodd"></path></svg>');
function O3(e, r) {
  V(r, !0);
  const t = q(r, "size", 7, 32), n = q(r, "color", 7, "currentColor");
  var o = N3(), i = d(o);
  return u(o), B(() => {
    j(o, "width", t()), j(o, "height", t()), j(i, "fill", n());
  }), m(e, o), G({
    get size() {
      return t();
    },
    set size(s = 32) {
      t(s), $();
    },
    get color() {
      return n();
    },
    set color(s = "currentColor") {
      n(s), $();
    }
  });
}
K(O3, { size: {}, color: {} }, [], [], !0);
var D3 = /* @__PURE__ */ we('<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="dot-top-right" cx="12" cy="4" r="2" fill="currentColor"></circle><circle class="dot-bottom-right" cx="12" cy="12" r="2" fill="currentColor"></circle><circle class="dot-top-left" cx="4" cy="4" r="2" fill="currentColor"></circle><circle class="dot-bottom-left" cx="4" cy="12" r="2" fill="currentColor"></circle></svg>');
const W3 = {
  hash: "svelte-pthxzt",
  code: "svg.svelte-pthxzt {transition:transform 0.4s ease;}.active.svelte-pthxzt {transform:rotate(135deg) scale(1.1);}"
};
function U3(e, r) {
  V(r, !1), de(e, W3);
  let t = q(r, "active", 12, !1), n = q(r, "size", 12, 1);
  var o = D3();
  return B(() => {
    ke(o, 0, et(t() ? "active" : ""), "svelte-pthxzt"), j(o, "width", `${n()}rem`), j(o, "height", `${n()}rem`);
  }), m(e, o), G({
    get active() {
      return t();
    },
    set active(i) {
      t(i), $();
    },
    get size() {
      return n();
    },
    set size(i) {
      n(i), $();
    }
  });
}
K(U3, { active: {}, size: {} }, [], [], !0);
var B3 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 110.0"><path d="m39.66 5.3594h20.676c0.79687 0 1.4414 0.64453 1.4414 1.4414v7.5742c4.8789 1.6133 9.3633 4.2188 13.18 7.6211l6.5703-3.793c0.6875-0.39453 1.5625-0.15625 1.957 0.52734l10.34 17.906c0.39453 0.68359 0.15625 1.5586-0.52344 1.9531v0.003906l-6.5625 3.7891c1.0352 5.0117 1.0352 10.219 0 15.23l6.5625 3.7891c0.70312 0.40625 0.93359 1.2969 0.47656 2.0391l-10.293 17.828c-0.39453 0.6875-1.2695 0.92188-1.957 0.52734l-6.5703-3.793c-3.8164 3.4023-8.3047 6.0078-13.18 7.6211v7.5742c0 0.79688-0.64453 1.4414-1.4414 1.4414h-20.676c-0.79688 0-1.4414-0.64453-1.4414-1.4414v-7.5742c-4.8789-1.6133-9.3633-4.2188-13.18-7.6211l-6.5703 3.793c-0.6875 0.39453-1.5625 0.15625-1.957-0.52734l-10.336-17.91c-0.39453-0.68359-0.15625-1.5586 0.52344-1.9531v-0.003906l6.5625-3.7891c-1.0352-5.0117-1.0352-10.219 0-15.23l-6.5625-3.7891c-0.70312-0.40625-0.93359-1.2969-0.47656-2.0391l10.293-17.824c0.39453-0.6875 1.2695-0.92188 1.957-0.52734l6.5703 3.793c3.8164-3.4023 8.3047-6.0078 13.18-7.6211v-7.5742c0-0.79688 0.64453-1.4414 1.4375-1.4414zm10.34 26.039c-10.273 0-18.602 8.3281-18.602 18.602 0 16.52 20.066 24.848 31.758 13.152 11.691-11.691 3.3633-31.754-13.156-31.754zm11.117 7.4844c-9.8789-9.8789-26.84-2.8477-26.84 11.117s16.961 20.996 26.84 11.117c6.1406-6.1367 6.1406-16.098 0-22.234zm-2.2188-30.645h-17.797v7.1875h-0.003906c0 0.62109-0.40234 1.1914-1.0273 1.3789-5.1953 1.5469-9.9336 4.3086-13.852 8.0039l-0.003906-0.003906c-0.44922 0.42187-1.1367 0.51953-1.6953 0.19922l-6.2422-3.6016-8.8984 15.422c9.0312 5.2148 6.9336 2.9531 6.2148 9.1367-0.46875 4.0195-0.23047 8.1172 0.69922 12.043 0.14062 0.59766-0.11719 1.2461-0.67969 1.5703l-6.2344 3.5977 8.9023 15.422c10.449-6.0312 4.6484-4.2227 14.41 1.418 9.6992 5.6055 8.4102-0.36328 8.4102 11.746h17.797v-7.1875h0.003906c0-0.62109 0.40234-1.1914 1.0273-1.3789 5.1953-1.5469 9.9336-4.3086 13.852-8.0039l0.003906 0.003906c0.44922-0.42188 1.1367-0.51953 1.6953-0.19922l6.2422 3.6016 8.9023-15.422c-9.0312-5.2148-6.9336-2.9531-6.2148-9.1367 0.46875-4.0195 0.23047-8.1172-0.69922-12.043-0.14063-0.59766 0.11719-1.2461 0.67969-1.5703l6.2305-3.5977-8.9023-15.422c-10.449 6.0312-4.6484 4.2227-14.41-1.418-9.6992-5.6016-8.4102 0.36719-8.4102-11.746z" fill-rule="evenodd"></path></svg>');
function Z3(e, r) {
  V(r, !0);
  const t = q(r, "size", 7, 32), n = q(r, "color", 7, "currentColor");
  var o = B3(), i = d(o);
  return u(o), B(() => {
    j(o, "width", t()), j(o, "height", t()), j(i, "fill", n());
  }), m(e, o), G({
    get size() {
      return t();
    },
    set size(s = 32) {
      t(s), $();
    },
    get color() {
      return n();
    },
    set color(s = "currentColor") {
      n(s), $();
    }
  });
}
K(Z3, { size: {}, color: {} }, [], [], !0);
var F3 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 110.0"><path d="m88.07 26.82c-0.51953-0.91016-1.3711-1.5586-2.3789-1.8281l-19.09-5.1133v-11.957c0-2.1602-1.7617-3.9219-3.9219-3.9219h-38.91c-0.25 0-0.48828 0.10156-0.66016 0.26953l-11.43 11.43c-0.17969 0.17969-0.28125 0.41016-0.28125 0.66016v57.09c0 2.1602 1.7617 3.9219 3.9219 3.9219h3.25l-0.37891 1.4297c-0.26953 1.0117-0.12891 2.0586 0.39062 2.9688 0.51953 0.91016 1.3711 1.5586 2.3789 1.8281l45.738 12.262c0.33984 0.089844 0.67969 0.12891 1.0195 0.12891 0.67969 0 1.3516-0.17969 1.9609-0.53125 0.91016-0.51953 1.5586-1.3711 1.8281-2.3789l16.961-63.301c0.26172-0.99609 0.12109-2.0469-0.39844-2.957zm-65.242-19.609v6.1797c0 1.1211-0.92188 2.0391-2.0391 2.0391h-6.1797zm-9.5469 66.25v-56.16h7.5117c2.1602 0 3.9219-1.7617 3.9219-3.9219l-0.003906-7.5h37.98c1.1211 0 2.0391 0.92188 2.0391 2.0391v65.539c0 1.1211-0.92188 2.0391-2.0391 2.0391l-47.371 0.003906c-1.1289 0-2.0391-0.92188-2.0391-2.0391zm73.367-44.16-16.961 63.301c-0.14062 0.51953-0.48047 0.96094-0.94922 1.2383-0.46875 0.26953-1.0195 0.35156-1.5508 0.21094l-45.746-12.262c-0.51953-0.14062-0.96094-0.48047-1.2383-0.94922-0.26953-0.46875-0.35156-1.0195-0.21094-1.5508l0.51172-1.9219h42.172c2.1602 0 3.9219-1.7617 3.9219-3.9219l-0.007812-51.625 18.609 4.9883c0.51953 0.14062 0.96094 0.48047 1.2383 0.94922 0.28125 0.47266 0.35156 1.0234 0.21094 1.543zm-28.059-9.2305c0 0.51953-0.42188 0.94141-0.94141 0.94141h-18.16c-0.51953 0-0.94141-0.42188-0.94141-0.94141 0-0.51953 0.42188-0.94141 0.94141-0.94141h18.16c0.52344 0 0.94141 0.42188 0.94141 0.94141zm0 13.738c0 0.51953-0.42188 0.94141-0.94141 0.94141h-37.301c-0.51953 0-0.94141-0.42188-0.94141-0.94141 0-0.51953 0.42188-0.94141 0.94141-0.94141h37.301c0.52344 0.003906 0.94141 0.43359 0.94141 0.94141zm0 6.8828c0 0.51953-0.42188 0.94141-0.94141 0.94141h-37.301c-0.51953 0-0.94141-0.42187-0.94141-0.94141 0-0.51953 0.42188-0.94141 0.94141-0.94141h37.301c0.52344 0 0.94141 0.42188 0.94141 0.94141zm0 6.8672c0 0.51953-0.42188 0.94141-0.94141 0.94141h-37.301c-0.51953 0-0.94141-0.42188-0.94141-0.94141 0-0.51953 0.42188-0.94141 0.94141-0.94141h37.301c0.52344 0.003906 0.94141 0.42187 0.94141 0.94141zm0 6.8711c0 0.51953-0.42188 0.94141-0.94141 0.94141h-37.301c-0.51953 0-0.94141-0.42188-0.94141-0.94141 0-0.51953 0.42188-0.94141 0.94141-0.94141h37.301c0.52344 0.011719 0.94141 0.43359 0.94141 0.94141zm0 6.8789c0 0.51953-0.42188 0.94141-0.94141 0.94141h-37.301c-0.51953 0-0.94141-0.42188-0.94141-0.94141 0-0.51953 0.42188-0.94141 0.94141-0.94141h37.301c0.52344 0.003906 0.94141 0.42187 0.94141 0.94141zm0-34.367c0 0.51953-0.42188 0.94141-0.94141 0.94141h-37.301c-0.51953 0-0.94141-0.42187-0.94141-0.94141 0-0.51953 0.42188-0.94141 0.94141-0.94141h37.301c0.52344 0 0.94141 0.42188 0.94141 0.94141z"></path></svg>');
function H3(e, r) {
  V(r, !0);
  const t = q(r, "size", 7, 32), n = q(r, "color", 7, "currentColor");
  var o = F3(), i = d(o);
  return u(o), B(() => {
    j(o, "width", t()), j(o, "height", t()), j(i, "fill", n());
  }), m(e, o), G({
    get size() {
      return t();
    },
    set size(s = 32) {
      t(s), $();
    },
    get color() {
      return n();
    },
    set color(s = "currentColor") {
      n(s), $();
    }
  });
}
K(H3, { size: {}, color: {} }, [], [], !0);
var K3 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 110.0"><path d="m50 80c16.539 0 30-13.461 30-30s-13.461-30-30-30-30 13.461-30 30 13.461 30 30 30zm2-55.922c10.789 0.82812 19.762 8.2617 22.852 18.262-1.8398-1.0312-4.1484-1.8906-6.9609-2.5508-5.1016-1.1992-10.73-1.5898-13.641-1.7109l-2.0781-0.089844h-0.17188zm0 17.922 2.0781 0.089844c5.1406 0.21875 21.922 1.4219 21.922 7.9102s-16.77 7.6992-21.922 7.9102l-2.0781 0.089844zm0 20h0.17188l2.0781-0.089844c2.8984-0.12109 8.5391-0.51172 13.641-1.7109 2.8086-0.66016 5.1289-1.5195 6.9609-2.5508-3.0898 10-12.059 17.441-22.852 18.262zm-4-37.922v13.91h-0.17188l-2.0781 0.089844c-2.8984 0.12109-8.5391 0.51172-13.641 1.7109-2.8086 0.66016-5.1289 1.5195-6.9609 2.5508 3.0898-10 12.059-17.441 22.852-18.262zm-24 25.922c0-6.4883 16.77-7.6992 21.922-7.9102l2.0781-0.089844v16l-2.0781-0.089844c-5.1406-0.21875-21.922-1.4219-21.922-7.9102zm8.1094 10.199c5.1016 1.1992 10.73 1.5898 13.641 1.7109l2.0781 0.089844h0.17188v13.91c-10.789-0.82812-19.762-8.2617-22.852-18.262 1.8398 1.0312 4.1484 1.8906 6.9609 2.5508z"></path></svg>');
function Y3(e, r) {
  V(r, !0);
  const t = q(r, "size", 7, 32), n = q(r, "color", 7, "currentColor");
  var o = K3(), i = d(o);
  return u(o), B(() => {
    j(o, "width", t()), j(o, "height", t()), j(i, "fill", n());
  }), m(e, o), G({
    get size() {
      return t();
    },
    set size(s = 32) {
      t(s), $();
    },
    get color() {
      return n();
    },
    set color(s = "currentColor") {
      n(s), $();
    }
  });
}
K(Y3, { size: {}, color: {} }, [], [], !0);
var V3 = /* @__PURE__ */ we('<svg viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" aria-label="GitHub Logo"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"></path></svg>');
function G3(e, r) {
  V(r, !1);
  let t = q(r, "size", 12, 16), n = q(r, "color", 12, "currentColor"), o = q(r, "className", 12, "");
  var i = V3(), s = d(i);
  return u(i), B(() => {
    j(i, "width", t()), j(i, "height", t() * 0.98), ke(i, 0, et(o())), j(s, "fill", n());
  }), m(e, i), G({
    get size() {
      return t();
    },
    set size(a) {
      t(a), $();
    },
    get color() {
      return n();
    },
    set color(a) {
      n(a), $();
    },
    get className() {
      return o();
    },
    set className(a) {
      o(a), $();
    }
  });
}
K(G3, { size: {}, color: {}, className: {} }, [], [], !0);
var X3 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 110.0"><g><path d="m54.195 29.223h6.25c0.42969 0 0.78125-0.35156 0.78125-0.78125 0-0.43359-0.35156-0.78125-0.78125-0.78125h-6.25c-0.43359 0-0.78125 0.34766-0.78125 0.78125 0 0.42969 0.34766 0.78125 0.78125 0.78125z"></path><path d="m15.992 29.223h33.637c0.42969 0 0.78125-0.35156 0.78125-0.78125 0-0.43359-0.35156-0.78125-0.78125-0.78125h-33.637c-0.42969 0-0.78125 0.34766-0.78125 0.78125 0 0.42969 0.35156 0.78125 0.78125 0.78125z"></path><path d="m25.102 39c0 0.20703 0.085938 0.40625 0.23047 0.55078 0.14844 0.14844 0.34375 0.23047 0.55078 0.23047h25.219c0.43359 0 0.78125-0.35156 0.78125-0.78125s-0.34766-0.78125-0.78125-0.78125h-25.219c-0.42969 0-0.78125 0.35156-0.78125 0.78125z"></path><path d="m14.004 39.781h7.6367c0.42969 0 0.78125-0.35156 0.78125-0.78125s-0.35156-0.78125-0.78125-0.78125h-7.6367c-0.42969 0-0.78125 0.35156-0.78125 0.78125s0.35156 0.78125 0.78125 0.78125z"></path><path d="m14.004 50.344h28.824c0.42969 0 0.78125-0.35156 0.78125-0.78125s-0.35156-0.78125-0.78125-0.78125h-28.824c-0.42969 0-0.78125 0.35156-0.78125 0.78125s0.35156 0.78125 0.78125 0.78125z"></path><path d="m14.004 60.906h7.9297c0.42969 0 0.78125-0.35156 0.78125-0.78125s-0.35156-0.78125-0.78125-0.78125h-7.9297c-0.42969 0-0.78125 0.35156-0.78125 0.78125s0.35156 0.78125 0.78125 0.78125z"></path><path d="m39.324 70.688c0-0.20703-0.082031-0.40625-0.23047-0.55078-0.14453-0.14844-0.34375-0.23047-0.55078-0.23047h-4.4727c-0.43359 0-0.78125 0.35156-0.78125 0.78125s0.34766 0.78125 0.78125 0.78125h4.4766-0.003906c0.20703 0 0.40625-0.082031 0.55078-0.23047 0.14844-0.14453 0.23047-0.34375 0.23047-0.55078z"></path><path d="m29.672 69.906h-15.668c-0.42969 0-0.78125 0.35156-0.78125 0.78125s0.35156 0.78125 0.78125 0.78125h15.672-0.003906c0.43359 0 0.78125-0.35156 0.78125-0.78125s-0.34766-0.78125-0.78125-0.78125z"></path><path d="m58.727 68.422c-0.20312-0.046875-0.41797-0.011719-0.59375 0.097656-0.17578 0.10938-0.30078 0.28516-0.34375 0.48828-0.67578 3.0352-1.5234 6.0273-2.5391 8.9688-0.066406 0.17969-0.23828 0.30078-0.42969 0.29688l-17.176 0.003906c-0.42969 0-0.78125 0.34766-0.78125 0.78125 0 0.42969 0.35156 0.78125 0.78125 0.78125h17.176c0.85156-0.003906 1.6133-0.53906 1.8984-1.3438 1.0352-2.9961 1.9023-6.0469 2.5938-9.1406 0.09375-0.41797-0.16797-0.83594-0.58594-0.93359z"></path><path d="m59.234 66.004c0.050781 0.007813 0.10156 0.015625 0.14844 0.011719 0.375 0 0.69531-0.26172 0.76563-0.62891 0.16016-0.82031 0.32031-1.6719 0.46875-2.5312l0.003906 0.003906c0.058594-0.41797-0.22266-0.80469-0.63672-0.87891-0.41406-0.070313-0.80859 0.19531-0.89844 0.60547-0.14844 0.84766-0.30859 1.6914-0.46875 2.5-0.039063 0.20312 0.003906 0.41406 0.11719 0.58594 0.11719 0.17188 0.29688 0.29297 0.5 0.33203z"></path><path d="m67.398 78.801c-0.42969 0-0.78125 0.35156-0.78125 0.78125v2.5234-0.003907c0 0.43359 0.35156 0.78125 0.78125 0.78125 0.43359 0 0.78125-0.34766 0.78125-0.78125v-2.5195c0-0.20703-0.082032-0.40625-0.22656-0.55078-0.14844-0.14844-0.34375-0.23047-0.55469-0.23047z"></path><path d="m67.398 64.844c-0.42969 0-0.78125 0.35156-0.78125 0.78125v10.398c0 0.42969 0.35156 0.78125 0.78125 0.78125 0.43359 0 0.78125-0.35156 0.78125-0.78125v-10.398c0-0.20703-0.082032-0.40625-0.22656-0.55078-0.14844-0.14844-0.34375-0.23047-0.55469-0.23047z"></path><path d="m97.852 21.047-7.8359-7.832c-1.1055-1.1133-2.8906-1.1602-4.0508-0.10547l-14.492 13.008v-8.2031l-0.003906 0.003907c0.003906-0.51562-0.19922-1.0117-0.56641-1.375-0.36328-0.36328-0.85547-0.57031-1.3711-0.56641h-1.8555v-1.5625c0-0.53516-0.21094-1.0508-0.58984-1.4297-0.375-0.37891-0.89063-0.58984-1.4219-0.58984h-22.98v-4.6602c-0.003906-1.4805-1.2031-2.6797-2.6836-2.6836h-3.4062c-1.4844 0.003907-2.6836 1.2031-2.6875 2.6836v4.6562h-22.996c-1.1055 0-2.0039 0.89453-2.0117 2-0.16797 28.816-2.8438 52.953-7.3359 66.223-0.20703 0.61328-0.10938 1.293 0.26953 1.8203 0.37891 0.52734 0.98828 0.83984 1.6367 0.83984h9.2266v1.6523c0.003907 1.0703 0.86719 1.9336 1.9375 1.9336h54.898c1.0703 0 1.9336-0.86328 1.9375-1.9336v-30.422c0.14844-0.097656 0.28516-0.21875 0.40625-0.35156l26.078-29.051c1.0586-1.1602 1.0117-2.9453-0.10156-4.0547zm-28.32-3.5156c0.20703 0.003906 0.375 0.17188 0.375 0.375v9.5312 0.070312l-2.5391 2.2734c0.14844-3.9844 0.24609-8.0938 0.28125-12.254zm-34.062-9.7969c0-0.61719 0.50391-1.1211 1.125-1.1211h3.4062c0.61719 0 1.1211 0.50391 1.1211 1.1211v10.281c0 0.29688-0.11719 0.58203-0.32812 0.79297-0.21094 0.21094-0.49609 0.33203-0.79297 0.33203h-3.4062c-0.62109 0-1.125-0.50391-1.125-1.125zm-32.375 73.789c-0.085938-0.11719-0.10547-0.26953-0.058594-0.40625 4.5508-13.422 7.2578-37.742 7.4219-66.715 0-0.25 0.20312-0.44922 0.44922-0.44922h23v4.0625c0 1.4805 1.2031 2.6836 2.6875 2.6875h3.4062c1.4805-0.003906 2.6797-1.2031 2.6836-2.6875v-4.0625h22.988c0.11719-0.003906 0.23438 0.042969 0.31641 0.12891 0.085938 0.085938 0.13281 0.19922 0.13281 0.32031-0.015625 5.75-0.13281 11.414-0.35938 16.844l-8.7305 7.832c-0.77734 0.69531-0.92969 1.8594-0.35938 2.7344 1.6953 2.5625 1.2266 5.3711-1.4805 8.8438l0.003906-0.003906c-0.18359 0.23828-0.21484 0.55469-0.082031 0.82422l-7.8984 7.8594h-20.219c-0.42969 0-0.78125 0.35156-0.78125 0.78125 0 0.42969 0.35156 0.78125 0.78125 0.78125h30.535c0.42969 0 0.78125-0.35156 0.78125-0.78125 0-0.42969-0.35156-0.78125-0.78125-0.78125h-1.3398l3.3984-3.3984-0.003906 0.003906c0.29297 0.14062 0.64453 0.089844 0.875-0.13672 1.1719-1.1133 2.3672-1.8125 3.625-2.1016-1.3125 11.605-3.1953 20.922-5.5938 27.699l0.003906 0.003906c-0.066406 0.17969-0.23438 0.29688-0.42578 0.29688l-54.609 0.003906c-0.14453 0-0.28125-0.066406-0.36719-0.17969zm53.098-28.906 2.2578 2.2656-4.4688 4.4688h-4.543zm13.34 32.68h-54.906c-0.20312 0-0.36719-0.16797-0.36719-0.37109v-1.6484l43.812-0.003906c0.84766-0.003907 1.6055-0.53906 1.8906-1.3398 2.4609-6.9492 4.3828-16.492 5.7109-28.367 1.1562 0.039063 2.3672 0.39062 3.6641 1.0586h-0.003907c0.17969 0.089844 0.37109 0.15625 0.56641 0.19531l0.003906 30.105c-0.003906 0.20312-0.16797 0.37109-0.37109 0.37109zm1.1719-32.188c-0.16797 0.1875-0.4375 0.23828-0.65625 0.125-3.7656-1.9297-7.0781-1.625-10.102 0.9375l-3.1016-3.1016c2.7578-3.7891 3.125-7.1016 1.1328-10.109v-0.003907c-0.15234-0.22656-0.10937-0.53125 0.09375-0.71484l2.2305-2 12.516 12.516zm26.09-29.055-22.926 25.539-12.398-12.398 25.539-22.926c0.54688-0.49219 1.3828-0.47266 1.9023 0.046875l7.8359 7.8359c0.51953 0.51953 0.54297 1.3594 0.046875 1.9023z"></path><path d="m83.172 23.602-13.191 13.191c-0.58984 0.56641-0.92969 1.3438-0.9375 2.1602-0.007813 0.82031 0.3125 1.6055 0.89062 2.1836s1.3633 0.89844 2.1836 0.89062c0.81641-0.007813 1.5938-0.34766 2.1602-0.9375l13.25-13.25h-0.003906c0.57812-0.57422 0.89844-1.3594 0.89062-2.1719-0.003906-0.8125-0.33594-1.5898-0.92187-2.1602-1.2266-1.1445-3.1445-1.1055-4.3203 0.089844zm3.25 3.1367-13.25 13.25v-0.003906c-0.27344 0.29297-0.65234 0.46094-1.0547 0.46484-0.39844 0.007812-0.78516-0.15234-1.0664-0.43359-0.28125-0.28516-0.4375-0.67188-0.42969-1.0742 0.007812-0.39844 0.17969-0.77734 0.47266-1.0508l13.191-13.191c0.29688-0.30078 0.70312-0.46875 1.1289-0.47266 0.37109-0.003906 0.73047 0.13672 1 0.39063 0.28516 0.27734 0.44531 0.65625 0.44922 1.0508 0.003907 0.39453-0.15234 0.77734-0.43359 1.0586z"></path><path d="m1.9531 10.625c2.0664 0.28906 3.1641 1.3828 3.4531 3.4375 0.054688 0.38281 0.38281 0.66797 0.76953 0.67188 0.39062 0.003906 0.72266-0.27734 0.78125-0.66406 0.3125-2.0469 1.4102-3.1445 3.457-3.457 0.38281-0.058593 0.66406-0.38672 0.66406-0.77344 0-0.38672-0.28125-0.71484-0.66406-0.77344-2.0664-0.28906-3.1602-1.3867-3.4609-3.4414-0.054687-0.38672-0.39062-0.67578-0.78125-0.67188-0.38672 0.003906-0.71484 0.28516-0.77344 0.66797-0.29688 2.0508-1.3984 3.1484-3.4453 3.457-0.38672 0.054687-0.67188 0.38281-0.67188 0.77344 0 0.38672 0.28516 0.71484 0.67188 0.77344zm4.2227-2.4805c0.41406 0.71094 1.0039 1.3008 1.7148 1.7148-0.69922 0.41016-1.2812 0.99219-1.6953 1.6914-0.41016-0.70703-0.99609-1.2969-1.7031-1.7109 0.69531-0.41406 1.2734-0.99609 1.6836-1.6953z"></path><path d="m83.156 79.516c-2.0508-0.30469-3.1484-1.4062-3.457-3.457v0.003906c-0.058594-0.38672-0.39062-0.67188-0.78125-0.66797-0.39062-0.003906-0.72656 0.28125-0.78125 0.66797-0.29688 2.0547-1.3984 3.1523-3.4531 3.4531h0.003906c-0.38281 0.058594-0.66797 0.38672-0.66797 0.77344 0 0.38672 0.28516 0.71484 0.66797 0.77344 2.0469 0.3125 3.1445 1.4141 3.457 3.457l-0.003906-0.003906c0.058594 0.38672 0.39453 0.67188 0.78125 0.66406 0.39062 0 0.71484-0.28516 0.76953-0.67188 0.29297-2.0625 1.3906-3.1562 3.4492-3.4453 0.38672-0.054688 0.67188-0.38281 0.67188-0.77344 0-0.39062-0.28516-0.71875-0.67188-0.77344zm-4.25 2.4766c-0.41406-0.69922-1-1.2812-1.6953-1.6953 0.70703-0.41406 1.2969-1.0039 1.7109-1.7109 0.41406 0.69531 0.99609 1.2812 1.6953 1.6953-0.71094 0.41016-1.3008 1-1.7109 1.7109z"></path><path d="m79.02 89.379c-2.0508-0.30469-3.1484-1.4062-3.457-3.457-0.054688-0.38281-0.39062-0.66797-0.78125-0.66406-0.38281 0.007813-0.70703 0.29688-0.75781 0.67969-0.29688 2.0547-1.3945 3.1523-3.4531 3.4531-0.37891 0.054687-0.66406 0.38281-0.66406 0.76953 0 0.38672 0.28516 0.71484 0.66406 0.77344 2.0469 0.3125 3.1484 1.4102 3.4609 3.457 0.058594 0.38281 0.38672 0.66406 0.77344 0.66406h-0.003907c0.39062-0.003907 0.71875-0.28906 0.76953-0.67188 0.28906-2.0625 1.3867-3.1562 3.4453-3.4453h0.003906c0.38672-0.058594 0.67188-0.38672 0.67188-0.77344 0-0.39062-0.28516-0.71875-0.67188-0.77344zm-4.2422 2.4766v-0.003907c-0.41406-0.69531-0.99609-1.2773-1.6953-1.6914 0.71094-0.41406 1.3008-1.0039 1.7148-1.7148 0.41016 0.69922 0.99219 1.2812 1.6914 1.6953-0.70703 0.41406-1.2969 1.0039-1.7109 1.7148z"></path></g></svg>');
function J3(e, r) {
  V(r, !0);
  const t = q(r, "size", 7, 32), n = q(r, "color", 7, "currentColor");
  var o = X3(), i = d(o);
  return u(o), B(() => {
    j(o, "width", t()), j(o, "height", t()), j(i, "fill", n());
  }), m(e, o), G({
    get size() {
      return t();
    },
    set size(s = 32) {
      t(s), $();
    },
    get color() {
      return n();
    },
    set color(s = "currentColor") {
      n(s), $();
    }
  });
}
K(J3, { size: {}, color: {} }, [], [], !0);
var Q3 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0" aria-label="Highlighter Icon"><path d="m12.418 56.605 1.1367 1.1328-4.7695 4.7695c-1.2188 1.2188-1.2188 3.1992 0 4.418l4.4023 4.3984-9.1172 9.7227c-0.97266 0.99219-1.2227 2.5-0.62109 3.7578l4.8516 10.215c0.42578 0.89844 1.1797 1.4883 2.0234 1.7305 0.1875 0.082031 0.39453 0.125 0.61328 0.125h84.375c0.86328 0 1.5625-0.69922 1.5625-1.5625s-0.69922-1.5625-1.5625-1.5625h-79.762l9.8047-10.254 4.5938 4.5938c1.2188 1.2188 3.1992 1.2188 4.418 0l4.7695-4.7695 1.1328 1.1367c1.2773 1.2734 3.3633 1.2109 4.5547-0.14062l48.184-54.609c1.0898-1.2344 1.0312-3.1094-0.13281-4.2773l-21.43-21.43c-1.168-1.1641-3.043-1.2227-4.2773-0.13281l-54.609 48.184c-1.3516 1.1914-1.4141 3.2773-0.14062 4.5547zm2.2109-2.2109 1.1328 1.1367 0.003906-0.003906 25.582 25.582-0.003906 0.003906 1.1367 1.1328 48.184-54.605-21.43-21.43zm-3.6328 10.32 4.7656-4.7656 21.164 21.164-4.7656 4.7656-8.7383-8.7383-8.0742-8.1211-0.023437 0.027344zm4.4023 8.8203-9.0742 9.6758-0.023438 0.027343c-0.019531 0.019531-0.039062 0.050781-0.046875 0.097657-0.007812 0.046874 0 0.089843 0.015625 0.12891l4.8555 10.215c0.011719 0.023437 0.019531 0.035156 0.027344 0.042968 0.003906 0.007813 0.007812 0.011719 0.011718 0.011719 0.007813 0.007813 0.019532 0.011719 0.03125 0.015625h0.023438s0.003906 0 0.003906-0.003906c0.003906 0 0.011719-0.003906 0.023438-0.015625l11.895-12.438-1.9336-1.9453z" fill-rule="evenodd"></path></svg>');
function e6(e, r) {
  V(r, !1);
  let t = q(r, "size", 12, 24), n = q(r, "color", 12, "currentColor"), o = q(r, "className", 12, "");
  var i = Q3(), s = d(i);
  return u(i), B(() => {
    j(i, "width", t()), j(i, "height", t() * 1.35), ke(i, 0, et(o())), j(s, "fill", n());
  }), m(e, i), G({
    get size() {
      return t();
    },
    set size(a) {
      t(a), $();
    },
    get color() {
      return n();
    },
    set color(a) {
      n(a), $();
    },
    get className() {
      return o();
    },
    set className(a) {
      o(a), $();
    }
  });
}
K(e6, { size: {}, color: {}, className: {} }, [], [], !0);
var t6 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 110.0"><path d="m37.23 21.223c-0.074219-0.17578 0.011719-0.38281 0.1875-0.45703 1.1875-0.5 2.418-0.93359 3.6523-1.293 0.18359-0.054687 0.37891 0.050782 0.43359 0.23828 0.054688 0.18359-0.050781 0.37891-0.23828 0.43359-1.2109 0.35156-2.4141 0.77734-3.5781 1.2656-0.046875 0.015625-0.089844 0.027344-0.13672 0.027344-0.13281 0-0.26172-0.078125-0.32031-0.21484zm-6.3477 3.9766c0.074219 0 0.14063-0.023438 0.20313-0.066407 1.0195-0.74219 2.0938-1.4336 3.1914-2.0508 0.16797-0.09375 0.22656-0.30859 0.13281-0.47656s-0.30859-0.22656-0.47656-0.13281c-1.1211 0.63281-2.2188 1.3359-3.2617 2.0938-0.15625 0.11328-0.19141 0.33203-0.078125 0.48828 0.074219 0.09375 0.17969 0.14453 0.28906 0.14453zm-5.6406 5.1797c0.097656 0 0.19531-0.039062 0.26562-0.12109 0.82422-0.95312 1.7148-1.8711 2.6445-2.7227 0.14062-0.12891 0.15234-0.35156 0.019531-0.49609-0.12891-0.14062-0.35156-0.15234-0.49609-0.019531-0.94922 0.87109-1.8594 1.8086-2.6992 2.7812-0.12891 0.14453-0.10937 0.36719 0.035157 0.49219 0.066406 0.058593 0.14844 0.085937 0.23047 0.085937zm22.156 54.352c-1.2617-0.11719-2.5234-0.30859-3.7539-0.56641-0.1875-0.039062-0.375 0.082032-0.41406 0.26953-0.039063 0.19141 0.078125 0.375 0.26953 0.41406 1.2578 0.26562 2.5469 0.46094 3.832 0.57812 0.011719 0 0.023438 0.003907 0.03125 0.003907 0.17578 0 0.33203-0.13672 0.34766-0.31641 0.023437-0.19531-0.12109-0.36719-0.3125-0.38281zm7.5781-0.16406c-1.2461 0.17188-2.5195 0.26953-3.7852 0.29688-0.19141 0.003907-0.34766 0.16406-0.34375 0.35938 0.003906 0.19141 0.16016 0.34375 0.35156 0.34375h0.007812c1.2891-0.027344 2.5898-0.12891 3.8633-0.30078 0.19141-0.023437 0.32422-0.20312 0.30078-0.39453-0.027344-0.19531-0.20703-0.33203-0.39453-0.30469zm-14.996-1.3984c-1.1953-0.39844-2.3789-0.875-3.5234-1.4141-0.17578-0.082031-0.38281-0.007812-0.46484 0.16797-0.082032 0.17578-0.007813 0.38281 0.16797 0.46484 1.168 0.54688 2.3789 1.0312 3.5977 1.4414 0.039063 0.011719 0.074219 0.015625 0.10938 0.015625 0.14844 0 0.28125-0.09375 0.33203-0.23828 0.0625-0.17969-0.035157-0.37891-0.21875-0.4375zm-6.8594-3.2227c-1.0742-0.66406-2.1172-1.3984-3.1094-2.1797-0.15234-0.12109-0.37109-0.09375-0.49219 0.058594-0.12109 0.15234-0.09375 0.37109 0.058594 0.49219 1.0117 0.80078 2.0781 1.5469 3.1719 2.2266 0.058594 0.035156 0.12109 0.050781 0.18359 0.050781 0.11719 0 0.23438-0.058594 0.29688-0.16406 0.10547-0.16797 0.058593-0.38281-0.10938-0.48438zm-8.4727-7.5273c-0.12109-0.14844-0.33984-0.17578-0.49219-0.054688-0.15234 0.12109-0.17578 0.33984-0.054688 0.49219 0.80078 1.0078 1.6719 1.9766 2.5859 2.8867 0.066406 0.066406 0.15625 0.10156 0.24609 0.10156s0.17969-0.035156 0.24609-0.10156c0.13672-0.13672 0.13672-0.35938 0-0.49609-0.89453-0.89062-1.7461-1.8398-2.5312-2.8281zm54.254-37.367c0.066406 0.10938 0.18359 0.17188 0.30078 0.17188 0.058594 0 0.12109-0.015625 0.17578-0.050781 0.16797-0.097656 0.22266-0.3125 0.12109-0.48047-0.65625-1.1094-1.3867-2.1914-2.1641-3.2148-0.11719-0.15625-0.33594-0.18359-0.48828-0.066406-0.15625 0.11719-0.18359 0.33594-0.066406 0.48828 0.76562 1.0078 1.4766 2.0703 2.1211 3.1523zm4.9258 17.82c-0.19141-0.007813-0.35547 0.14062-0.36328 0.33594-0.050782 1.2656-0.17578 2.5352-0.37109 3.7773-0.03125 0.19141 0.10156 0.37109 0.29297 0.39844 0.015625 0.003907 0.039062 0.003907 0.054687 0.003907 0.17188 0 0.31641-0.12109 0.34375-0.29688 0.19922-1.2656 0.32422-2.5664 0.37891-3.8594 0.007813-0.18359-0.14062-0.35156-0.33594-0.35938zm-1.1016 7.582c-0.1875-0.050781-0.37891 0.058594-0.42969 0.24609-0.33594 1.2148-0.75 2.4258-1.2266 3.5938-0.074218 0.17969 0.011719 0.38281 0.19141 0.45312 0.042969 0.015625 0.085937 0.023437 0.13281 0.023437 0.13672 0 0.26953-0.082031 0.32422-0.21875 0.48438-1.1914 0.90625-2.4258 1.25-3.6719 0.054688-0.17969-0.054688-0.375-0.24219-0.42578zm-0.73828-18.484c0.046875 0.14844 0.18359 0.24609 0.33594 0.24609 0.035156 0 0.070312-0.003906 0.10547-0.015625 0.18359-0.058594 0.28906-0.25391 0.23047-0.4375-0.38672-1.2305-0.84766-2.4492-1.3711-3.625-0.078124-0.17578-0.28516-0.25391-0.46094-0.17578-0.17578 0.078124-0.25391 0.28516-0.17578 0.46094 0.50391 1.1523 0.95703 2.3438 1.3359 3.5469zm1.4141 7.4453c0.011718 0.18359 0.16797 0.32422 0.34766 0.32422h0.023438c0.19141-0.015625 0.33594-0.18359 0.32422-0.375-0.09375-1.2891-0.26172-2.5781-0.50391-3.8438-0.035156-0.19141-0.21875-0.31641-0.41016-0.27734-0.19141 0.035156-0.31641 0.21875-0.27734 0.41016 0.23828 1.2344 0.40234 2.5 0.49609 3.7617zm-40.414-16.164-0.015625-4.7188-0.015625-5.7773c-0.003906-1.7617 1.4219-3.1992 3.1836-3.2031l2.7344-0.007812-0.011719-3.9492c-0.003906-0.46094 0.23438-0.87109 0.63281-1.1016 0.39844-0.23047 0.87109-0.23438 1.2695-0.003907 0.019531 0.011719 0.039063 0.023438 0.058594 0.039063l5.6836 4.9883 7.4531-0.023437h0.011718c0.85156 0 1.6484 0.32812 2.2539 0.92969 0.60547 0.60156 0.94141 1.4023 0.94141 2.2578l0.015625 5.8438h5.7031c1.7617 0 3.1953 1.4336 3.1953 3.1953v10.496c0 1.3516-0.84375 2.5039-2.0273 2.9727-0.36328 0.14062-0.75391 0.22266-1.168 0.22266h-2.7344v3.9492c0 0.46094-0.23828 0.87109-0.63672 1.1016-0.19922 0.11328-0.41797 0.17187-0.63672 0.17187s-0.4375-0.058593-0.63672-0.17187c-0.019532-0.011719-0.039063-0.023438-0.058594-0.039063l-5.6602-5.0117h-7.4531c-1.7617 0-3.1953-1.4336-3.1953-3.1953v-1.9492l-5.3633 5.3711c-0.52344 0.52344-1.2109 0.78516-1.8984 0.78516s-1.375-0.26172-1.8984-0.78516c-1.0469-1.0469-1.0469-2.75 0-3.7969l5.4141-5.4102-1.9258 0.003906h-0.011719c-0.85156 0-1.6484-0.32812-2.2539-0.92969-0.60938-0.59766-0.94531-1.4023-0.94922-2.2539zm0.70312-0.003906c0.003906 0.66797 0.26172 1.293 0.73828 1.7617 0.46875 0.46875 1.0938 0.72656 1.7578 0.72656h0.007812l2.0859-0.007813c-1.0664-2.8164-0.46875-6.125 1.7969-8.3867 3.0781-3.0781 8.0859-3.0781 11.168 0 0.37109 0.37109 0.69141 0.76562 0.97266 1.1836h4.2656l-0.015625-5.8438c-0.003906-1.3711-1.1211-2.4883-2.4961-2.4883h-0.007812l-7.5859 0.023438c-0.078125-0.007813-0.16797-0.03125-0.23438-0.085938l-5.7539-5.0508c-0.17188-0.085937-0.37109-0.082031-0.54297 0.015625-0.17578 0.10156-0.28516 0.28906-0.28125 0.49609l0.011719 3.9453 2.9297-0.011718c0.19141 0 0.35156 0.15625 0.35156 0.35156 0 0.19141-0.15625 0.35156-0.35156 0.35156l-3.2773 0.011719h-0.003907-0.003906l-3.0781 0.011719c-1.375 0.003906-2.4922 1.1289-2.4883 2.5039zm29.195-4.0195h-10.25c0.066406 0.12109 0.125 0.24609 0.18359 0.36719 0.003907 0.003906 0.003907 0.011719 0.007813 0.015625 0.050781 0.10938 0.09375 0.21484 0.14062 0.32422 0.007812 0.015625 0.011719 0.03125 0.019531 0.046875 0.039063 0.097656 0.074219 0.19922 0.10938 0.29688 0.007813 0.023437 0.015625 0.046875 0.023438 0.066406 0.03125 0.09375 0.058594 0.18359 0.089844 0.27734 0.007812 0.03125 0.015624 0.058594 0.023437 0.085937 0.023437 0.085938 0.046875 0.17188 0.066406 0.25391 0.011719 0.039062 0.019531 0.074218 0.027344 0.10937 0.015625 0.074219 0.03125 0.14063 0.046875 0.21484 0.44141 2.0938 0.027344 4.3281-1.2383 6.1445-0.011719 0.015624-0.019531 0.03125-0.03125 0.046874-0.050781 0.074219-0.10156 0.14453-0.15625 0.21484-0.023438 0.035156-0.050781 0.066406-0.078125 0.10156-0.046875 0.058593-0.089844 0.11328-0.13672 0.17188-0.042969 0.050781-0.085937 0.10156-0.12891 0.15234-0.035157 0.039062-0.070313 0.082031-0.10547 0.12109-0.082031 0.09375-0.17188 0.18359-0.25781 0.27344-0.09375 0.09375-0.19531 0.19141-0.29297 0.28125-0.011719 0.007812-0.015625 0.015625-0.027344 0.023437-1.4766 1.3242-3.3555 2.0156-5.2617 2.0156-1.043 0-2.0898-0.21094-3.0859-0.63281v2.0234c0 1.375 1.1211 2.4961 2.4961 2.4961h7.5859c0.085938 0 0.16797 0.03125 0.23438 0.085938l5.7383 5.0664c0.17188 0.085937 0.37109 0.082031 0.54297-0.015625 0.17578-0.10156 0.28516-0.28906 0.28516-0.49219v-3.9492h-2.9297c-0.19141 0-0.35156-0.15625-0.35156-0.35156 0-0.19141 0.15625-0.35156 0.35156-0.35156h6.3633c1.375 0 2.4961-1.1211 2.4961-2.4961v-10.488c-0.003907-1.3828-1.1211-2.5-2.5-2.5zm-26.871 15.914 5.4961-5.5039c-0.51172-0.31641-0.99609-0.69141-1.4375-1.1367-0.52734-0.52734-0.96094-1.1133-1.3086-1.7344l-5.5625 5.5586c-0.77344 0.77344-0.77344 2.0352 0 2.8086 0.77734 0.78125 2.0352 0.78516 2.8125 0.007813zm4.5547-7.1289c0.39844 0.39844 0.83203 0.73828 1.293 1.0234v-7.0391c0-1.9492 1.5859-3.5352 3.5352-3.5352h5.9062c-0.17188-0.21875-0.35547-0.42578-0.55469-0.62891-1.4023-1.4023-3.2461-2.1055-5.0859-2.1055-1.8438 0-3.6836 0.70313-5.0859 2.1055-2.8125 2.8086-2.8125 7.3711-0.007813 10.18zm11.227-8.8477h-6.3984c-1.5625 0-2.8359 1.2734-2.8359 2.8359l0.003906 7.4258c2.75 1.3125 6.0156 0.75781 8.1836-1.4102 2.3438-2.3516 2.7734-6.043 1.0469-8.8516zm18.938 37.582 0.14062 4.3594c0.027344 0.81641-0.61328 1.5039-1.4336 1.5312l-2.3359 0.078125c-0.10938 0.003906-0.20312 0.078125-0.23438 0.19141-0.19531 0.69141-0.44922 1.3672-0.75781 2.0117-0.050781 0.10547-0.03125 0.22656 0.050781 0.30078l1.7031 1.5977c0.28906 0.26953 0.45312 0.63672 0.46875 1.0312 0.011718 0.39453-0.12891 0.77344-0.39844 1.0625l-2.9805 3.1836c-0.55859 0.59766-1.4961 0.62891-2.0938 0.070312l-1.7031-1.5977c-0.078125-0.074218-0.20312-0.085937-0.30078-0.03125-0.625 0.35156-1.2812 0.64844-1.957 0.88672-0.10938 0.039063-0.17969 0.13672-0.17578 0.24609l0.078126 2.3359c0.027343 0.81641-0.61328 1.5039-1.4336 1.5312l-4.3594 0.14062h-0.050781c-0.37891 0-0.73438-0.14062-1.0117-0.39844-0.28906-0.26953-0.45312-0.63672-0.46875-1.0312l-0.078125-2.3359c0-0.003906-0.003906-0.074218-0.015625-0.19141-0.21094 0.21875-0.47656 0.38672-0.78125 0.46875l-5.4062 1.4492c-0.03125 0.007812-0.058594 0.011719-0.089844 0.011719-0.09375 0-0.17969-0.035157-0.24609-0.10156l-0.066406-0.066406c-0.13672-0.13672-0.13672-0.35938 0-0.49609l3.3633-3.3633c0.18359-0.18359 0.28906-0.43359 0.28906-0.69922s-0.10156-0.51562-0.28906-0.69922l-2.4648-2.4648c-0.18359-0.18359-0.43359-0.28906-0.69922-0.28906s-0.51562 0.10156-0.69922 0.28906l-3.3672 3.3672c-0.066407 0.066406-0.15625 0.10156-0.24609 0.10156-0.09375 0-0.18359-0.039062-0.24609-0.10156l-0.066406-0.066406c-0.085938-0.085938-0.12109-0.21875-0.089844-0.33594l0.63281-2.3633 0.75-2.7969-1.5469 0.050781c-0.39844 0.011719-0.77344-0.12891-1.0625-0.39844-0.28906-0.26953-0.45313-0.63672-0.46875-1.0312l-0.14453-4.3594c-0.027344-0.81641 0.61328-1.5039 1.4336-1.5312l2.3359-0.078125c0.10937-0.003906 0.20312-0.078125 0.23437-0.19141 0.19531-0.69141 0.44922-1.3672 0.75781-2.0117 0.050781-0.10547 0.03125-0.22656-0.050781-0.30078l-1.7031-1.5977c-0.28906-0.26953-0.45312-0.63672-0.46875-1.0312-0.011719-0.39453 0.12891-0.77344 0.39844-1.0625l2.9805-3.1836c0.26953-0.28906 0.63672-0.45313 1.0312-0.46875 0.39844-0.011719 0.77344 0.12891 1.0625 0.39844l1.7031 1.5977c0.078125 0.074219 0.20312 0.085938 0.30078 0.03125 0.625-0.35156 1.2812-0.64844 1.957-0.88672 0.10938-0.039062 0.17969-0.13672 0.17578-0.24609l-0.078125-2.3359c-0.027344-0.81641 0.61328-1.5039 1.4336-1.5312l4.3594-0.14062c0.82422-0.023437 1.5039 0.61328 1.5312 1.4336l0.070312 2.1406c0.20312-0.20703 0.46484-0.36328 0.75391-0.44141l5.4062-1.4492c0.12109-0.03125 0.25 0.003906 0.33594 0.089844l0.066406 0.066406c0.066406 0.066406 0.10156 0.15625 0.10156 0.24609 0 0.09375-0.039062 0.18359-0.10156 0.24609l-3.3633 3.3633c-0.38672 0.38672-0.38672 1.0156 0 1.3984l2.4688 2.4688c0.38672 0.38672 1.0156 0.38672 1.4023 0l3.3633-3.3633c0.066406-0.066406 0.15625-0.10156 0.24609-0.10156 0.09375 0 0.18359 0.039063 0.24609 0.10156l0.066407 0.066406c0.085937 0.085938 0.12109 0.21875 0.089843 0.33594l-1.4492 5.4062c-0.011718 0.039062-0.027343 0.078125-0.039062 0.12109l1.7031-0.054687c0.82031-0.039063 1.5039 0.60547 1.5312 1.418zm-0.55859 4.3828-0.14062-4.3594c-0.015625-0.42969-0.375-0.76953-0.80859-0.75391l-2.2188 0.074219c-0.18359 0.15625-0.40625 0.28125-0.64844 0.34375l-5.2109 1.3945c0.11328 0.45312 0.18359 0.92578 0.19922 1.4102 0.058594 1.7891-0.58203 3.4922-1.8047 4.8008-1.2227 1.3086-2.8828 2.0586-4.6719 2.1172-0.074219 0.003906-0.14844 0.003906-0.22656 0.003906-0.52344 0-1.0312-0.0625-1.5195-0.17578l-1.2383 4.625c0.17969 0.76562 0.20703 1.2695 0.20703 1.2812l0.078125 2.3359c0.007813 0.21094 0.09375 0.40234 0.24609 0.54688 0.15234 0.14062 0.35156 0.21875 0.55859 0.21094l4.3594-0.14062c0.42969-0.015625 0.76953-0.37891 0.75391-0.80859l-0.078125-2.3359c-0.011719-0.41406 0.24609-0.78906 0.64062-0.92969 0.63672-0.22656 1.2617-0.50781 1.8516-0.83984 0.36719-0.20703 0.82031-0.15625 1.1211 0.12891l1.7031 1.5977c0.31641 0.29688 0.80859 0.27734 1.1055-0.039062l2.9805-3.1836c0.14063-0.15234 0.21875-0.35156 0.21094-0.55859s-0.09375-0.40234-0.24609-0.54688l-1.7031-1.5977c-0.30469-0.28516-0.38672-0.73438-0.20312-1.1133 0.28906-0.60938 0.53125-1.25 0.71484-1.8984 0.11328-0.40625 0.46875-0.69141 0.88672-0.70312l2.3359-0.078125c0.44141-0.015625 0.78125-0.37891 0.76562-0.80859zm-19.75 10.383c0.33594-0.089844 0.59766-0.35156 0.68359-0.68359l1.3984-5.2109-4.2109-4.2109-5.2109 1.3984c-0.33203 0.089843-0.59766 0.35156-0.68359 0.68359l-1.1602 4.3281 2.5586-2.5586c0.31641-0.31641 0.74219-0.49219 1.1953-0.49219s0.87891 0.17578 1.1953 0.49219l2.4648 2.4648c0.31641 0.31641 0.49609 0.74219 0.49609 1.1953s-0.17578 0.87891-0.49609 1.1953l-2.5586 2.5586zm-10.34-8.6055 1.8438-0.0625c0.22266-0.34766 0.56641-0.60938 0.97266-0.71875l5.1758-1.3867c-0.066406-0.34375-0.10938-0.69531-0.12109-1.0586-0.058593-1.7891 0.58203-3.4922 1.8047-4.8008 1.2227-1.3086 2.8828-2.0586 4.6719-2.1172 0.074218-0.003907 0.14844-0.003907 0.22656-0.003907 0.47656 0 0.9375 0.050782 1.3828 0.14453l1.3867-5.1836c-0.14453-0.39453-0.21875-0.65234-0.22266-0.69531l-0.078125-2.3359c-0.015625-0.42969-0.38281-0.76953-0.80859-0.75391l-4.3594 0.14062c-0.42969 0.015625-0.76953 0.375-0.75391 0.80859l0.078125 2.3359c0.011719 0.41406-0.24609 0.78906-0.64062 0.92969-0.63672 0.22656-1.2617 0.50781-1.8516 0.83984-0.36719 0.20703-0.82031 0.15625-1.1211-0.12891l-1.7031-1.5977c-0.15234-0.14062-0.34766-0.21875-0.55859-0.21094-0.21094 0.007813-0.40234 0.09375-0.54688 0.24609l-2.9805 3.1836c-0.14062 0.15234-0.21875 0.35156-0.21094 0.55859 0.007813 0.20703 0.09375 0.40234 0.24609 0.54688l1.7031 1.5977c0.30078 0.28516 0.38672 0.73438 0.20312 1.1133-0.28906 0.60938-0.53125 1.25-0.71484 1.8984-0.11328 0.40625-0.46875 0.69141-0.88672 0.70313l-2.3359 0.078124c-0.42969 0.015626-0.76953 0.375-0.75391 0.80859l0.14453 4.3594c0.007812 0.21094 0.09375 0.40234 0.24609 0.54688 0.15625 0.14453 0.35547 0.21875 0.5625 0.21484zm18.754-15.859c-0.33594 0.089844-0.59766 0.35156-0.68359 0.68359l-1.3984 5.2109 4.2109 4.2109 5.2109-1.3984c0.33203-0.089844 0.59766-0.35156 0.68359-0.68359l1.1602-4.3281-2.5547 2.5586c-0.66016 0.66016-1.7344 0.66016-2.3906 0l-2.4648-2.4648c-0.66016-0.66016-0.66016-1.7344 0-2.3906l2.5586-2.5586zm1.7031 11.25-7.0508 7.0508c0.44141 0.085938 0.89453 0.12891 1.3633 0.11328 1.6016-0.050782 3.0859-0.72656 4.1836-1.8945 1.0938-1.1719 1.6719-2.6953 1.6172-4.2969-0.015625-0.33594-0.054688-0.66016-0.11328-0.97266zm-11.832 1.9766 6.7578-6.7578c-0.26562-0.039063-0.53906-0.058594-0.8125-0.058594-0.066406 0-0.13281 0-0.19922 0.003907-1.6016 0.050781-3.0859 0.72656-4.1836 1.8945-1.0938 1.1719-1.6719 2.6953-1.6172 4.2969 0.011719 0.21484 0.027344 0.42188 0.054688 0.62109zm7.6914-6.6992-7.4727 7.4727 3.9336 3.9336 7.4727-7.4727zm-33.297 4.8203c-0.089844 0.15234-0.19531 0.28906-0.30469 0.41797-0.51172 0.59375-1.2383 0.94141-2.0391 0.94141h-12.191c-0.96875 0-1.8438-0.50781-2.3438-1.3594-0.51562-0.87891-0.52344-1.9375-0.023437-2.8281l6.0977-10.836c0.1875-0.33203 0.42969-0.61328 0.71094-0.83594-0.21875-0.52734-0.38281-0.94141-0.48828-1.2109-0.050782 0.011718-0.10938 0.019531-0.16016 0.019531-0.085937 0-0.17188-0.011719-0.25391-0.039063-0.22656-0.066406-0.41016-0.21875-0.51953-0.42578-1.0391-1.9336-1.2617-4.1523-0.62891-6.2461 0.38281-1.2656 1.0508-2.3945 1.9414-3.3164l-1.8477-3.4414c-0.27344-0.51172-0.11328-1.1406 0.35156-1.4688l-2.5859-4.1562c-0.10156-0.16406-0.050781-0.37891 0.11328-0.48438 0.16406-0.10156 0.37891-0.050781 0.48438 0.11328l0.035156 0.058594 2.5664 4.125 2.4062-1.2891-2.4453-3.7266c-0.015625-0.023438-0.023438-0.046875-0.035157-0.066406-0.058593-0.14844-0.003906-0.32422 0.13672-0.41797 0.16406-0.10547 0.37891-0.058594 0.48438 0.10156l2.4844 3.7852c0.53906-0.23828 1.1797-0.027344 1.4609 0.5l1.8477 3.4453c0.29297-0.050781 0.58594-0.089844 0.87891-0.10938 3.1211-0.21875 6.2383 1.3633 7.8125 4.2969 0.20312 0.37891 0.10547 0.83594-0.21094 1.0977 0.76172 1.1172 3.4648 5.0547 5.2812 7.3203 1.6367 2.043 5.4062 3.3633 6.9492 3.8398 0.26563 0.082031 0.47656 0.27734 0.57422 0.53906 0.097657 0.26172 0.070313 0.54688-0.078125 0.78125-0.23438 0.37891-0.625 0.97656-1.1719 1.6875-0.17969 0.23438-0.46094 0.36328-0.75391 0.34375-2.4609-0.14062-4.8984-0.99609-7.4062-2.6055 1.4141 1.6406 3.5156 2.7695 5.2812 3.7188 0.25781 0.13672 0.43359 0.39453 0.46484 0.68359 0.03125 0.28906-0.078125 0.57812-0.30078 0.76953-1.5312 1.3359-2.8789 2.3516-4.0078 3.0234-0.21484 0.12891-0.47656 0.15625-0.71875 0.082031-0.84375-0.26562-2.2383-0.75391-3.4492-1.4102 0.39062 0.63672 0.86719 1.1445 1.3047 1.6133l0.035156 0.039063c0.20312 0.21875 0.28516 0.52734 0.21094 0.81641-0.074219 0.29688-0.28906 0.53125-0.57813 0.63281-0.82422 0.28906-1.7188 0.50391-2.5859 0.71484-0.19141 0.046875-0.38672 0.09375-0.57422 0.14062-0.027344 0.007813-0.054687 0.011719-0.085937 0.011719-0.015625 0-0.03125 0-0.042969-0.003906-0.64062-0.078125-1.2188-0.17969-1.7461-0.30078-0.058594 0.32031-0.16797 0.62891-0.33594 0.91797zm-0.60547-0.35547c0.13672-0.23437 0.22266-0.48047 0.26562-0.73437-2.3633-0.66797-3.4531-1.7344-4.2031-2.7383-0.84375-1.1367-1.6836-2.5586-2.4609-4.0234v2.5391c0 0.79297-0.64453 1.4375-1.4375 1.4375-0.79297 0-1.4375-0.64453-1.4375-1.4375v-5.1367c0-0.62109 0.39844-1.1523 0.95313-1.3516-0.33203-0.73828-0.62891-1.4219-0.88281-2.0156-0.14844 0.14062-0.28125 0.30469-0.39062 0.49609l-6.0977 10.836c-0.37891 0.67188-0.37109 1.4688 0.015625 2.1289 0.37109 0.63281 1.0195 1.0117 1.7383 1.0117h12.191c0.72656 0 1.375-0.375 1.7461-1.0117zm-9.3359-15.645c0.57422 1.4531 3.3008 8.1641 5.9609 11.754 0.87109 1.1758 2.2773 2.4414 6.0859 2.9258 0.17187-0.042969 0.34375-0.085938 0.51562-0.125 0.85156-0.20703 1.7305-0.42188 2.5195-0.69922 0.09375-0.03125 0.12109-0.10938 0.12891-0.14062 0.011719-0.039063 0.015625-0.10938-0.046875-0.17188l-0.035156-0.039062c-0.66406-0.71094-1.4961-1.6016-1.9609-2.9062-0.050781-0.14453-0.003906-0.30859 0.12109-0.39844 0.12109-0.09375 0.29297-0.09375 0.41797-0.003906 1.2695 0.92969 3.2344 1.6289 4.2969 1.9609 0.050781 0.015625 0.10547 0.011719 0.14844-0.015625 1.0781-0.64062 2.4258-1.6641 3.9062-2.9492 0.066406-0.058594 0.066406-0.12891 0.0625-0.16406-0.003906-0.03125-0.019531-0.10547-0.10156-0.14844-2.3477-1.2617-5.2656-2.832-6.582-5.5312-0.070312-0.14453-0.03125-0.32031 0.09375-0.42188 0.125-0.10156 0.30469-0.10937 0.43359-0.011718 2.9336 2.2148 5.7344 3.3711 8.5508 3.5312 0.058593 0.003906 0.12109-0.023438 0.16016-0.074219 0.53125-0.6875 0.90625-1.2656 1.1328-1.6289 0.042969-0.070313 0.03125-0.13672 0.015625-0.16797-0.011719-0.03125-0.046875-0.089844-0.12109-0.11328-1.6055-0.49219-5.5312-1.8789-7.2891-4.0703-1.8555-2.3164-4.6211-6.3516-5.3438-7.4102l-9.8867 5.3008c-0.17188 0.09375-0.38281 0.027344-0.47656-0.14062-0.09375-0.17188-0.027344-0.38281 0.14062-0.47656l10.352-5.5508c0.085938-0.046874 0.12109-0.15625 0.074219-0.23828-1.957-3.6484-6.5078-5.0234-10.148-3.0664l-1.0195 0.54688c-1.7656 0.94922-3.0547 2.5234-3.6328 4.4414-0.57812 1.918-0.375 3.9453 0.57031 5.707 0.03125 0.0625 0.082031 0.085937 0.10938 0.09375 0.023438 0.007812 0.078125 0.015624 0.13672-0.011719l1.9062-1.0234c0.17188-0.09375 0.38281-0.027343 0.47656 0.14062 0.09375 0.17188 0.027343 0.38281-0.14063 0.47656zm2.1328-15.938-3.4414 1.8438c-0.21484 0.11328-0.29688 0.38672-0.17969 0.60156l1.7578 3.2734c0.45703-0.39453 0.95703-0.74609 1.5039-1.0391l1.0195-0.54688c0.55078-0.29688 1.1172-0.51562 1.6992-0.67578l-1.7578-3.2773c-0.12109-0.21094-0.39063-0.29297-0.60156-0.17969zm-0.82031 20.781c-0.31641 0.085938-0.54687 0.37109-0.54687 0.71094v5.1367c0 0.40625 0.32812 0.73828 0.73828 0.73828 0.40625 0 0.73828-0.32812 0.73828-0.73828v-3.9062c-0.33203-0.66406-0.64062-1.3164-0.92969-1.9414zm1.5938 9.3984c0 0.78906-0.62891 1.4297-1.4023 1.4297-0.77344 0-1.4023-0.64062-1.4023-1.4297 0-0.78906 0.62891-1.4297 1.4023-1.4297 0.77344-0.003906 1.4023 0.63672 1.4023 1.4297zm-0.69922 0c0-0.40234-0.31641-0.73047-0.70312-0.73047s-0.70312 0.32812-0.70312 0.73047c0 0.40234 0.31641 0.73047 0.70312 0.73047 0.38672-0.003907 0.70312-0.32813 0.70312-0.73047zm11.445-13.242c0.066406 0.097657 0.17578 0.14844 0.28906 0.14844 0.070312 0 0.13672-0.019531 0.19922-0.0625 0.16016-0.10938 0.19922-0.32812 0.085937-0.48828l-2.2266-3.2109c-0.10937-0.16016-0.32812-0.19922-0.48828-0.085938-0.16016 0.10938-0.19922 0.32813-0.085937 0.48828zm-1.9766 7.9609c0.066406 0.058593 0.14844 0.089843 0.23438 0.089843 0.09375 0 0.19141-0.039062 0.26172-0.11328 0.12891-0.14062 0.11719-0.36328-0.023438-0.49609-0.035156-0.03125-3.5234-3.2188-5.5469-8.3086-0.074219-0.17969-0.27344-0.26562-0.45312-0.19531-0.17969 0.074219-0.26562 0.27344-0.19531 0.45312 2.0781 5.2461 5.5742 8.4336 5.7227 8.5703z"></path></svg>');
function r6(e, r) {
  V(r, !0);
  const t = q(r, "size", 7, 32), n = q(r, "color", 7, "currentColor");
  var o = t6(), i = d(o);
  return u(o), B(() => {
    j(o, "width", t()), j(o, "height", t()), j(i, "fill", n());
  }), m(e, o), G({
    get size() {
      return t();
    },
    set size(s = 32) {
      t(s), $();
    },
    get color() {
      return n();
    },
    set color(s = "currentColor") {
      n(s), $();
    }
  });
}
K(r6, { size: {}, color: {} }, [], [], !0);
var n6 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 110.0"><path d="m81.617 21.961c-0.015626-1.0508 1.6367-1.0547 1.625 0-0.14453 0.72266 0.5 3.2773-0.8125 3.2344-1.3125 0.046876-0.67188-2.5117-0.8125-3.2344zm13.043 40.664h-24.535c-0.43359 1.0234-1 1.9375-1.6641 2.5742-0.58203 0.65234-1.8477 1.4023-2.8398 1.5078-1.3398 4.8555-4.5 8.1719-8.375 9.9766v3.2227c3.9297 0.054688 10.668-0.88672 13.152 2.3086 1.5703 1.5664 2.6094 3.7852 3.0898 6.1758 0.58984 3.5039 2.8047 8.6094-1.582 10.648-0.63281 0.30078-1.332 0.45313-2.0703 0.45313h-39.668c-2.9609 0.085937-5.4023-2.8906-4.7305-5.7812l1.0742-5.3164c0.48438-2.3906 1.5234-4.6094 3.0898-6.1758 2.457-3.168 9.0703-2.2617 12.977-2.3086v-3.2188c-3.8984-1.8164-7.082-5.1562-8.4062-10.062-2.0781-0.14844-3.6094-1.8438-4.4648-4l-24.367-0.003906c-2.9609 0.085938-5.4023-2.8945-4.7305-5.7812l1.0742-5.3203c0.89844-4.4609 3.7695-8.4766 8.6367-8.5h7.3945c0-1.1484 0.035156-2.2461 0.03125-3.207-3.9023-1.8164-7.0859-5.1602-8.4102-10.074-6.2422-0.53906-7.4648-14.77-0.67969-12.957 0.089844-8.9648 7.4453-16.281 16.426-16.281 8.9648 0 16.281 7.2695 16.414 16.199 0.5625-0.15625 1.1445-0.21094 1.7305-0.058594 4.4609 1.5781 3.2266 8.9688 0.41016 11.688-0.58203 0.65234-1.8477 1.4023-2.8398 1.5078-1.3398 4.8555-4.5039 8.1719-8.3789 9.9766v3.207h5.2109c3.0195-3.4336 7.3906-5.6562 12.289-5.6562 4.8984 0 9.2695 2.2227 12.289 5.6562h5.207v-3.207c-3.8984-1.8164-7.082-5.1562-8.4062-10.062-6.1719-0.44531-7.5352-14.711-0.68359-12.949 0.0625-8.9688 7.4297-16.301 16.414-16.301 8.9531-0.003906 16.285 7.2812 16.41 16.203 0.5625-0.15625 1.1445-0.21484 1.7305-0.058593 4.4648 1.5781 3.2266 8.9766 0.40625 11.688-0.58203 0.65234-1.8477 1.4023-2.8398 1.5078-1.3398 4.8555-4.5 8.1719-8.375 9.9766v3.2227c3.957 0.058593 10.641-0.89453 13.152 2.3086 1.5664 1.5664 2.6094 3.7852 3.0898 6.1797l1.0742 5.3125c0.67969 2.8867-1.7656 5.8672-4.7266 5.7812zm-3.8242-34.594c0.44141-0.15625 0.88281-0.40625 1.2969-0.83203 2.3281-1.6875 3.3516-10.324-0.96094-8.7383l0.003906 6.7773c-0.03125 0.99219-0.1875 1.8906-0.33984 2.793zm-32.195 0c-0.15234-0.90234-0.3125-1.8008-0.33984-2.793v-6.8164c-0.41406-0.19922-0.83984-0.32422-1.2891-0.20703-3.0078 1.4375-1.6602 7.0586 0.32812 8.9883 0.42188 0.42188 0.86328 0.67578 1.3008 0.82812zm-17.461 0c0.44141-0.15625 0.88281-0.40625 1.2969-0.83203 2.4141-1.7734 3.2344-10.395-0.96094-8.7461l0.003906 6.7852c-0.027343 0.99219-0.1875 1.8906-0.33984 2.793zm-32.191 0c-0.15234-0.90234-0.3125-1.8008-0.33984-2.793v-6.8164c-0.41016-0.20312-0.83594-0.32422-1.2852-0.20703-3.0078 1.4375-1.6602 7.0547 0.32812 8.9883 0.41406 0.42188 0.85547 0.67188 1.2969 0.82812zm80.117 0.88281c0-0.007812-0.003907-0.011718-0.007813-0.019531 0-0.011719 0.015625-0.019531 0.019532-0.03125 0.28125-1.1484 0.46094-2.3477 0.43359-3.625 0.066407-6.168 0.76562-14.355-4.3516-18.762-8.8203-9.3047-25.547-2.4961-25.273 10.465-0.003906 0.26562-0.011719 0.55469-0.015625 0.83203v0.011718c-0.10547 6.0547-0.52344 13.707 4.3633 17.914 7.9375 8.3789 22.238 3.6797 24.832-6.7852zm-20.074 11.613v4.5742c0.14062 7.5 11.277 7.4961 11.414 0v-4.5742c-3.6641 1.2539-7.75 1.2539-11.414 0zm-29.137-15.289v-8.3008c0-8.1445-6.6641-14.809-14.809-14.809-8.1523 0-14.812 6.6602-14.812 14.809v8.3008c0.53906 19.52 29.09 19.523 29.621 0zm-20.52 15.289v4.5742c0.14453 7.4961 11.273 7.4961 11.414 0v-4.5742c-3.6641 1.2539-7.7461 1.2539-11.414 0zm14.441 24.371c-0.15234-0.90234-0.3125-1.8008-0.33984-2.793v-6.8164c-0.41406-0.19922-0.83984-0.32422-1.2891-0.20703-3.0078 1.4375-1.6602 7.0586 0.32812 8.9883 0.41797 0.42188 0.85938 0.67188 1.3008 0.82813zm2.4688-20.25h-3.8711v0.45312c0.20703 6.3711-8.2266 9.7773-12.508 5.1758-1.5469-1.2578-2.0117-3.4102-2.1367-5.6289h-7.4414c-6.3672 0.015624-7.1953 7.6836-8.1289 12.512-0.44922 1.918 1.168 3.9102 3.1445 3.8398h23.863c-0.89844-3.9688 0.30469-8.3477 4.2852-7.3281 0.023437-3.3281 1.0469-6.4336 2.793-9.0234zm20.957 36.867v0.45312c-0.19141 9.6328-14.477 9.625-14.664 0v-0.45312h-7.4258c-4.0586 0.039063-6.2852 3.4766-7.0547 7.1914-0.26172 2.75-2.6875 7.2305 0.6875 8.8633 0.41016 0.19531 0.875 0.29688 1.3828 0.29688h39.664c1.9727 0.066406 3.5938-1.9219 3.1445-3.8398l-1.0742-5.3203c-0.76562-3.7109-2.9961-7.1562-7.0547-7.1914zm-1.625 0.45312v-4.5742c-3.6641 1.2539-7.75 1.2539-11.414 0v4.5742c0.14062 7.5 11.277 7.4961 11.414 0zm5.7266-37.562-0.023438-0.023438c-0.30859-0.35156-0.58203-0.72266-0.94922-1.0391-8.8203-9.3047-25.547-2.4961-25.273 10.465-0.003906 0.26562-0.011718 0.55469-0.015625 0.83203v0.011719c-0.10547 6.0547-0.52344 13.707 4.3633 17.914 7.9375 8.3789 22.238 3.6797 24.828-6.7852 0-0.007812-0.003907-0.011719-0.007813-0.019531 0-0.011719 0.015625-0.019531 0.019531-0.03125 0.28125-1.1484 0.46094-2.3477 0.43359-3.625 0.066406-5.7188 0.60938-13.133-3.375-17.699zm5.0039 10.922v6.7773c-0.027344 0.99219-0.1875 1.8906-0.33984 2.793 0.4375-0.15625 0.88281-0.40625 1.2969-0.83203 2.332-1.6875 3.3555-10.324-0.95703-8.7383zm31.453 1.8359c-0.73047-3.2188-1.1797-8.4141-3.7227-10.668-2.2461-2.7461-8.3828-1.7344-12.008-1.8203v0.42578c-0.19141 9.6328-14.477 9.625-14.664 0v-0.45312h-3.8711c1.7305 2.5586 2.7383 5.6328 2.7852 8.9219 0.5625-0.15625 1.1445-0.21484 1.7305-0.058593 2.8789 1.0156 3.3672 4.4492 2.6094 7.4883h24c1.9727 0.070312 3.5938-1.918 3.1406-3.8359zm-79.594-35.203c0.015625-1.0547-1.6367-1.0508-1.625 0 0.14062 0.71875-0.5 3.2812 0.8125 3.2344 1.3125 0.042969 0.67188-2.5078 0.8125-3.2344zm48.031 0v2.4219c-0.015625 1.0547 1.6367 1.0508 1.625 0v-2.4219c0.011719-1.0508-1.6406-1.0508-1.625 0zm-24.828 36.867v2.4219c-0.015625 1.0547 1.6367 1.0508 1.625 0v-2.4219c0.011719-1.0508-1.6406-1.0508-1.625 0zm-8.6367-33.633c1.3125 0.042969 0.66797-2.5078 0.8125-3.2344 0.015624-1.0547-1.6367-1.0547-1.625 0 0.14453 0.71875-0.49609 3.2812 0.8125 3.2344zm24.016 33.633v2.4219c-0.015624 1.0547 1.6367 1.0508 1.625 0v-2.4219c0.015626-1.0508-1.6367-1.0508-1.625 0z"></path></svg>');
function o6(e, r) {
  V(r, !0);
  const t = q(r, "size", 7, 32), n = q(r, "color", 7, "currentColor");
  var o = n6(), i = d(o);
  return u(o), B(() => {
    j(o, "width", t()), j(o, "height", t()), j(i, "fill", n());
  }), m(e, o), G({
    get size() {
      return t();
    },
    set size(s = 32) {
      t(s), $();
    },
    get color() {
      return n();
    },
    set color(s = "currentColor") {
      n(s), $();
    }
  });
}
K(o6, { size: {}, color: {} }, [], [], !0);
var i6 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 110.0"><path d="m99.312 51.867-8.8008-32.836c-0.78125-2.9219-3.8203-4.6758-6.7422-3.8945l-6.5703 1.7617c-3.2891 0.52734-2.7266-2.4961-3.2109-4.6172-1.6445-7.0234-11.852-8.2148-15.176-1.9727-1.2578 2.1406-1.4961 4.9844-0.44922 7.3945 0.46094 1.0039 1.2305 1.9688 0.69141 3.0977-0.28906 0.71094-0.8125 1.1758-1.5508 1.3711-2.5664 0.91016-8.6641 1.4219-9.9062 4.332-1.8945 2.5508 0.71094 8.0508 1.2031 10.742 0.32422 1.2344 1.1914 2.1953 2.3789 2.6523 1.8867 0.89453 3.4492-0.48047 5.1797-1.0234 5.5586-1.7031 10.527 4.9297 7.5039 9.7734-0.49609 0.85937-1.2031 1.5859-2.043 2.1562-0.25-2.6562-1.7734-5.1992-4.0312-6.4453-2.1289-1.2617-4.9961-1.5-7.3945-0.44922-1.0039 0.46094-1.9688 1.2227-3.0977 0.6875-1.7344-0.33984-2.1797-5.3672-3.1328-8.125-0.32031-1.1914-1.0234-2.1719-1.9297-2.8828v-5.418c0.03125-3.7539-2.5586-8.9102-2.8711-12.789 1.9531-0.35156 3.4688-1.9883 3.4688-4.0352l-0.003906-6.668c0-2.3008-1.8789-4.1797-4.1836-4.1797h-18.035c-2.3008 0-4.1797 1.8867-4.1836 4.1797v6.6758c0 2.0664 1.5508 3.7188 3.5312 4.0469v4.2617c-0.99219 2.1016-4.3203 3.9102-6.8086 5.2617-3.9102 2.3594-9.1055 6.1367-9.168 11.25v5.4453c-2.5508 1.0195-4.0195 3.793-3.293 6.5117l8.7969 32.836c0.78125 2.9258 3.8203 4.6758 6.7422 3.8945l6.5703-1.7578c2.4766-0.58203 3.7422-3.707 2.3555-5.8398-4.7812-8.8398 9.1055-14.754 12.152-5.1719 0.39062 1.793-0.003907 3.8555 1.7422 5.0352 2.1602 2.0391 7.1797-0.58203 10.016-1.0625 2.9258-0.78125 4.6758-3.8203 3.8945-6.7422 0 0-1.7578-6.5703-1.7578-6.5703-0.55469-2.1602 1.5039-3.1523 3.3555-2.9727 0.085937-0.011719 0.17969-0.035156 0.26953-0.046875l1.0156 3.7852c0.32031 1.1914 1.0234 2.1758 1.9336 2.8828v5.418c-0.03125 3.7539 2.5586 8.9102 2.8711 12.789-0.85547 0.15234-1.6523 0.49219-2.2422 1.082-2.0273 1.582-0.99219 7.4336-1.2266 9.6289-0.003906 2.293 1.8828 4.1797 4.1758 4.1797h18.039c2.2969 0 4.1836-1.8789 4.1797-4.1797v-6.6758c0-2.0664-1.5508-3.7227-3.5312-4.0469v-4.2578c1.2461-2.5508 5.5039-4.4844 8.2734-6.0742 2.5039-1.7969 5.7539-4.5156 7.1406-7.4453 0.60547-1.1367 0.64062-4.9453 0.59766-8.4453 2.5312-1.0352 3.9805-3.8086 3.2617-6.5078zm-81.258-40.512v-6.6758c0-1.4102 1.1523-2.5547 2.5586-2.5547h18.035c0.70312 0 1.3438 0.28906 1.8047 0.75 0.46484 0.46484 0.75391 1.1016 0.75391 1.8047-0.19141 1.6406 0.58594 7.6484-0.75391 8.4805-0.46484 0.46484-1.1016 0.75-1.8047 0.75h-0.16016l-17.719 0.003906h-0.16016c-1.4062 0-2.5547-1.1523-2.5547-2.5586zm-12.008 22.43c1.2734-2.5547 4.2383-5.0156 6.4062-6.6211 3.1172-1.7852 7.5898-3.7656 9.0352-6.9531 0.17969-0.019532 0.074219-4.4922 0.09375-4.6719h16.129c0.28125 3.8086 2.8555 8.9375 2.8945 12.645v4.5156c-0.027344-0.007813-0.058594-0.007813-0.089844-0.015625-0.41797-0.13672-0.85547-0.20703-1.3008-0.23828-0.11719-0.007812-0.23047-0.015624-0.34766-0.015624-0.46875-0.003907-0.94141 0.03125-1.4141 0.15625l-0.027344 0.007812h-0.003906l-23.27 6.2344c-0.003906 0-0.007813 0.003906-0.011719 0.003906l-0.011719 0.003907c-0.003906 0-0.003906 0.003906-0.007812 0.003906-0.54297 0.25781-1.5312 0.5625-1.3984 1.3281 0.19141 2.3438 0.019532 5.1758 0.019532 7.5742-0.042969 4.6602-7.0977 4.6641-7.1328 0 0.14844-1.7695-0.41797-12.508 0.4375-13.957zm48.031 23.16 0.30469 1.1328c-2.9414 0.26172-5.4492 1.4961-4.7461 5.0898 0.29688 2.0312 2.8555 7.6172 1.3711 9.5195-0.89844 2.2148-6.9648 2.8047-8.9258 3.5703-1.4375 0.44141-3-0.78125-2.9219-2.2812-0.92969-14.223-21.688-8.6836-15.387 4.1211 0.82031 1.2617 0.078124 3.0977-1.3867 3.4375l-6.5703 1.7578c-2.0664 0.55469-4.2031-0.67578-4.7578-2.7461l-8.8086-32.859c-0.4375-1.6758 0.33203-3.3477 1.7305-4.2266v4.2773c-0.16406 5.1484 7.2148 7.1211 9.6602 2.6211 1.2578-1.6289 0.55078-7.9258 0.71875-9.8477l0.26172-0.14062 23.219-6.2227c0.53125-0.14063 1.0664-0.16016 1.5859-0.082032 0.14062 0.023438 0.26172 0.10156 0.39453 0.13672 0.36328 0.097656 0.72266 0.21094 1.0547 0.41406 0.80078 0.49609 1.4336 1.2578 1.707 2.2266l1.7734 6.6211c0.4375 1.8125 2.2891 3.0742 4.1211 2.918 1.2461-0.046874 2.2266-1.0352 3.4375-1.293 3.9531-1.1016 8.0391 1.7734 8.3711 5.8516 0.027344 0.18359 0.023438 0.39844 0.015625 0.62109-0.16406 0.058594-0.31641 0.14062-0.49219 0.1875-1.1836 0.38281-2.5234 0.027344-3.6211 0.60156-1.6641 0.78125-2.6367 2.8047-2.1094 4.5938zm27.871 31.699v6.6758c0 1.4062-1.1484 2.5547-2.5586 2.5547h-18.039c-0.70312 0-1.3438-0.28906-1.8086-0.75-0.46094-0.46094-0.75-1.1055-0.75-1.8047 0.1875-1.4453-0.5625-7.6289 0.71484-8.4453 0.47266-0.48438 1.1211-0.78906 1.8438-0.78516h18.035c1.4102-0.003906 2.5625 1.1445 2.5625 2.5547zm12.008-22.43c-1.6641 3.0391-4.9375 5.8555-7.8789 7.4336-2.8086 1.582-6.7695 3.5586-7.6602 6.5195v4.293l-16.125 0.003906c-0.28125-3.8086-2.8594-8.9375-2.8984-12.645v-4.5156c0.023438 0.007812 0.046875 0.003906 0.070313 0.011718 0.42578 0.13672 0.86719 0.21094 1.3203 0.24219 0.11719 0.007812 0.23047 0.015625 0.34766 0.015625 0.48047 0.003906 0.96094-0.035157 1.4453-0.16406l8.4922-2.2734 14.777-3.957h0.003906l0.023438-0.007813c0.007812-0.003906 0.007812-0.007813 0.011719-0.011719 0.52344-0.25 1.4727-0.53906 1.3984-1.2656-0.30469-1.9883-0.023437-5.4844-0.023437-7.6367 0.023437-4.6641 7.1016-4.6562 7.1328 0-0.15234 1.7656 0.41797 12.508-0.4375 13.957zm2.0742-9.6836c-0.035156-1.8828-0.066406-3.5156-0.011719-4.2734 0.15625-5.1133-7.1133-7.1172-9.6211-2.6914-1.3203 1.6562-0.58203 7.9453-0.75781 9.9102l-0.26953 0.14453-19.625 5.2578-3.5859 0.96094c-0.53125 0.14062-1.0625 0.16016-1.5781 0.082031-0.15625-0.023437-0.29297-0.10938-0.44141-0.15234-0.35156-0.097656-0.69922-0.20312-1.0195-0.39844-0.80859-0.50391-1.4492-1.2812-1.7148-2.2734-0.058594-0.44531-0.71484-2.5703-1.2266-4.4766v-0.003906c-0.39844-1.4766-0.71094-2.8203-0.58203-3.1289 0.41797-2.3203 2.9531-1.6875 4.6367-2.1641 0.33203-0.10547 0.59375-0.25781 0.89453-0.38281 0.21094-0.007812 0.39062-0.085937 0.53125-0.22656 9.7734-4.6914 2.6641-20.172-7.8516-14.5-1.2617 0.82031-3.1016 0.078125-3.4375-1.3867l-1.7578-6.5703c-1.4844-7.168 10.066-4.0273 11.949-8.8516 0.69531-1.5273 0.066406-2.9961-0.70312-4.3398-0.83203-1.9258-0.65625-4.2422 0.35938-5.9453 2.6758-5.043 10.914-4.0547 12.215 1.6094 0.38281 1.1797 0.027344 2.5195 0.60156 3.6211 0.77734 1.668 2.7969 2.6406 4.5859 2.1133 3.5156-0.58594 9.668-4.2852 11.328 0.98438l8.7969 32.836c0.44531 1.6836-0.31641 3.3633-1.7148 4.2461z" fill-rule="evenodd"></path></svg>');
function s6(e, r) {
  V(r, !0);
  const t = q(r, "size", 7, 32), n = q(r, "color", 7, "currentColor");
  var o = i6(), i = d(o);
  return u(o), B(() => {
    j(o, "width", t()), j(o, "height", t()), j(i, "fill", n());
  }), m(e, o), G({
    get size() {
      return t();
    },
    set size(s = 32) {
      t(s), $();
    },
    get color() {
      return n();
    },
    set color(s = "currentColor") {
      n(s), $();
    }
  });
}
K(s6, { size: {}, color: {} }, [], [], !0);
var a6 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 110.0"><path d="m37.68 76.391h-25.695c-1.0469 0.015625-1.0586-1.6406 0-1.625h25.695c1.043-0.011719 1.0586 1.6406 0 1.625zm-25.695-26.824h30.25c1.0586 0.015625 1.043-1.6406 0-1.625h-30.25c-1.0625-0.011718-1.0469 1.6406 0 1.625zm30.25-17.883c0.44922 0 0.8125-0.36328 0.8125-0.8125 0-0.44531-0.36328-0.8125-0.8125-0.8125h-7.9844c-1.0547-0.015625-1.0508 1.6367 0 1.625zm-30.25 8.9414h30.25c1.0586 0.015625 1.043-1.6406 0-1.625h-30.25c-1.0625-0.011719-1.0469 1.6406 0 1.625zm30.25 25.199h-30.25c-1.0586-0.015625-1.043 1.6406 0 1.625h30.25c1.0586 0.015625 1.043-1.6367 0-1.625zm4.3828-8.9414h-34.633c-1.0625-0.015624-1.043 1.6406 0 1.625h34.633c1.0586 0.015626 1.043-1.6367 0-1.625zm40.945-15.855c-1.3242 5.3945-7.418 9.1055-12.648 9.2266-5.2305-0.11719-11.328-3.8359-12.652-9.2227 1.3242-5.3945 7.4219-9.1055 12.652-9.2266 5.2266 0.11328 11.324 3.832 12.648 9.2227zm-1.625 0c-0.61719-2.6641-3.4375-4.6445-5.3477-5.9727-3.4844-2.1562-7.875-2.1562-11.359 0-1.9102 1.3242-4.7266 3.3086-5.3477 5.9727 0.61719 2.6641 3.4375 4.6406 5.3477 5.9688 5.8438 3.8086 14.297 0.39453 16.707-5.9688zm-6.1445 18.227c-24.285 5.7148-33.648-29.273-9.7656-36.453 24.191-5.8438 33.633 29.418 9.7656 36.453zm3.7383-33.168c-20.098-10.785-36.633 17.871-17.246 29.879 19.992 10.871 36.66-18.004 17.246-29.879zm-8.6211 19.883c-6.4648-0.03125-6.4648-9.8594 0-9.8867 6.4961 0.11719 6.5 9.7734 0 9.8867zm2.3477-7.293c-3.0742-3.0547-7.7539 1.6211-4.6953 4.6992 3.1406 3.0352 7.7266-1.5625 4.6953-4.6992zm-30.07-17.559h-12.941c-1.0547-0.015626-1.0508 1.6406 0 1.625h12.941c1.0547 0.015624 1.0508-1.6367 0-1.625zm34.125 43.805c-3.1211 0.73438-6.043 0.94141-8.7656 0.73438v12.723c-0.003906 4.8633-3.9727 8.8398-8.8359 8.8398h-5.5039c-0.75781 1.5898-1.5117 3.0547-2.2383 4.2109-3.8867 6.6406-13.785 4.3594-15.922-2.3672-0.19141-0.58594-0.29297-1.207-0.34375-1.8438h-30.246c-4.8594-0.007812-8.8281-3.9727-8.832-8.8281 0.43359-3.9414-1.1289-44.781 1.1406-47.379 0.10938-0.39062 0.38281-0.88672 0.71875-1.4258 0.88281-1.4648 2.707-3.5742 4.9414-5.9258 2.7812-2.9297 6.1055-6.1445 8.9414-8.8789 0.52734-0.50781 1.0312-0.99609 1.5156-1.4648 1.9102-1.8516 3.4453-3.3633 4.1758-4.2188 0.039062-0.039062 0.085937-0.0625 0.125-0.10156 0.035156-0.042969 0.097656-0.10547 0.125-0.14062 0.65234-0.625 1.3477-1.1797 2.0781-1.6758 0.16016-0.10938 0.33594-0.17969 0.5-0.28125 0.54297-0.33984 1.0859-0.67969 1.6797-0.94922 0.042969-0.023438 0.089844-0.011719 0.13672-0.023438 1.9297-0.85938 4.0273-1.3281 6.2891-1.3281h30.719c4.8594 0.007813 8.832 3.9727 8.8281 8.8398l0.003907 3.0469c28.781-2.8867 38.719 39.43 8.7695 48.438zm-77.203-34.859 14.785-0.003906c1.9805 0 3.7773-0.80859 5.0781-2.1133 1.3047-1.3047 2.1172-3.1055 2.1172-5.082l0.003906-14.785c-0.23828 0.13672-0.49219 0.23438-0.72266 0.38672-0.070313 0.054687-0.14844 0.11719-0.23047 0.17969-0.16406 0.12109-0.32031 0.27734-0.48438 0.40234-0.88672 0.76172-2.0859 1.8828-3.4805 3.2266l-10.188 10.191c-2.2969 2.332-4.0859 4.1445-4.7344 4.7461-0.22656 0.22656-0.39062 0.48047-0.59766 0.71484-0.50391 0.57812-0.97266 1.1719-1.375 1.8125-0.0625 0.10938-0.10938 0.21875-0.17188 0.32422zm36.648 52.52c3.0664-4.9453 7.1484-10.148 10.559-14.961 0.89844-1.3359 2.3828-1.9883 3.8906-1.9648l3.4375-5.957c-12.598-11.492-12.082-35.973 9.8633-42.574 0.82031-0.19141 1.6211-0.32812 2.4141-0.45312v-3.2422c0.007813-3.957-3.25-7.2188-7.2109-7.2188l-30.719 0.003906c-1.9023 0-3.6602 0.33203-5.2812 0.99609l0.003906 15.648c-0.011719 4.8633-3.9688 8.8281-8.832 8.8164l-15.633 0.003907c-0.66406 1.6211-0.99609 3.3828-1 5.2852v41.418c0.003906 3.9688 3.2383 7.2109 7.2031 7.2148l30.293-0.003906c0.12891-0.99219 0.42969-2.0039 1.0117-3.0117zm16.113-16.566c0.17969 0.074219 0.36719 0.085937 0.53906 0.1875 1.1172 0.79297 3.3438 1.7227 4.8867 2.9336l2.9922-5.1836c-1.9766-0.82031-3.7812-1.8906-5.3984-3.1719zm5.3398 8.0508c0.65234-1.418 0.20703-3.1133-1.1641-3.8945-2.2812-1.0586-6.2188-4.8984-8.3867-1.6445-3.293 4.1914-7.6328 10.324-10.5 14.859-1.0352 1.7891-1.0742 3.6094-0.56641 5.1719 1.7812 5.6953 10.453 7.4766 13.262 1.5273zm8.7188 4.3125v-12.906c-1.4336-0.20312-2.7969-0.53516-4.0977-0.96875l-3.3672 5.832c0.22266 0.32812 0.39453 0.66797 0.45703 1.0352 0.32422 1.0742 0.25781 2.2695-0.24219 3.3633-1.3594 2.957-3.0195 7.1289-4.707 10.848 3.3203 0.058594 7.8047 0.39844 9.832-2.1094 1.3125-1.3047 2.125-3.1133 2.125-5.0938zm15.496-57.402c-5.0195-2.6797-9.8711-3.5234-14.273-3.0273-0.18359 0.10156-0.375 0.12891-0.58203 0.089843-18.875 2.6719-29.133 30.125-8.168 43.031 26.965 14.402 49.043-24.062 23.023-40.094z"></path></svg>');
function l6(e, r) {
  V(r, !0);
  const t = q(r, "size", 7, 32), n = q(r, "color", 7, "currentColor");
  var o = a6(), i = d(o);
  return u(o), B(() => {
    j(o, "width", t()), j(o, "height", t()), j(i, "fill", n());
  }), m(e, o), G({
    get size() {
      return t();
    },
    set size(s = 32) {
      t(s), $();
    },
    get color() {
      return n();
    },
    set color(s = "currentColor") {
      n(s), $();
    }
  });
}
K(l6, { size: {}, color: {} }, [], [], !0);
var c6 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 110.0"><path d="m98.168 21.203-18.938-18.938c-0.53906-0.53516-1.4062-0.53516-1.9453 0l-8.668 8.6719c-0.25781 0.25781-0.40234 0.60938-0.40234 0.97656 0 0.36328 0.14453 0.71484 0.40234 0.97266l0.73047 0.73047h-38.691l0.73047-0.73047c0.25781-0.25781 0.40625-0.60938 0.40625-0.97266 0-0.36719-0.14844-0.71875-0.40625-0.97656l-8.668-8.6719h0.003906c-0.53906-0.53516-1.4102-0.53516-1.9492 0l-18.941 18.938c-0.53516 0.53516-0.53516 1.4062 0 1.9453l8.6719 8.6719c0.25781 0.25781 0.60938 0.40625 0.97656 0.40625 0.36328 0 0.71484-0.14844 0.97266-0.40625l2.8633-2.8633-0.003906 63.715c0.003906 3.0156 2.4492 5.4609 5.4648 5.4648h58.086c3.0195 0 5.4688-2.4453 5.4688-5.4648v-64.07l3.2227 3.2227c0.25781 0.25781 0.60937 0.40234 0.97266 0.40234 0.36719 0 0.71875-0.14453 0.97656-0.40234l8.6719-8.668c0.25781-0.25781 0.40234-0.61328 0.40234-0.97656 0-0.36719-0.14844-0.71875-0.41016-0.97656zm-86.688 7.6992-6.7266-6.7266 16.988-16.988 6.7266 6.7266zm70.094 63.77c0 1.4961-1.2148 2.7109-2.7109 2.7109h-58.086c-1.4961 0-2.7109-1.2148-2.7109-2.7109v-66.465l9.8359-9.8359 44.191-0.003906 9.4805 9.4805zm6.9453-63.77-16.988-16.988 6.7266-6.7266 16.988 16.988zm-19.434 50.48c0 0.76172-0.61719 1.3789-1.3789 1.3789h-35.777c-0.76172 0-1.375-0.61719-1.375-1.3789 0-0.75781 0.61328-1.375 1.375-1.375h35.777c0.76172 0 1.3789 0.61719 1.3789 1.375zm-17.887 6.9492c-0.003907 0.76172-0.61719 1.375-1.3789 1.375h-17.891 0.003906c-0.375 0.011719-0.73438-0.12891-1-0.38672-0.26562-0.25781-0.41797-0.61719-0.41797-0.98828 0-0.37109 0.15234-0.72656 0.41797-0.98828 0.26562-0.25781 0.625-0.39844 1-0.38672h17.891-0.003907c0.36719 0 0.71484 0.14453 0.97266 0.40234 0.26172 0.25781 0.40625 0.60938 0.40625 0.97266zm19.332-54.711c-0.10156-0.39844-0.37891-0.73438-0.75391-0.90625l-3.8008-1.7578-1.8672-7.3047c-0.59766-2.3281-2.8672-3.8164-5.2422-3.4336-2.375 0.37891-4.0664 2.5078-3.9023 4.9062l-15.777 15.371-5.6367 1.4453c-3.1367 0.80078-5.2812 3.6953-5.1367 6.9297 0.14453 3.2344 2.5391 5.9219 5.7344 6.4414-1.3398 1.1367-2.5078 2.4609-3.4727 3.9336-0.64453-0.19141-1.3359-0.16406-1.9648 0.070312l-2.4766 0.92578-0.003906-0.003907c-0.71094 0.26562-1.0703 1.0586-0.80859 1.7734l4.7109 12.625c0.12891 0.34375 0.38672 0.62109 0.71875 0.77344 0.33203 0.15234 0.71094 0.16406 1.0508 0.035156l2.4766-0.92187h0.003906c0.69141-0.25781 1.2695-0.75391 1.6328-1.3945 2.418-0.054687 5.9414-1.1211 10.707-3.2461 0.054688-0.023437 0.10547-0.050781 0.15234-0.082031 1.2617-0.625 2.207-1.75 2.6133-3.0977 0.15625-0.72266 0.078125-1.4766-0.22656-2.1523 0.4375-1.1406 0.3125-2.4258-0.33594-3.4609 0.35547-1.207 0.050781-2.5078-0.79688-3.4336 0.24219-1.1289-0.12891-2.3008-0.97656-3.0781-0.17578-0.14453-0.36719-0.26172-0.57422-0.35547 9.2305 1.1797 14.77 1.8906 16.613 2.125h0.015625v-0.003906c0.875 1.2031 2.2695 1.9141 3.7539 1.918 1.4375-0.003907 2.793-0.66797 3.6719-1.8047 0.87891-1.1328 1.1875-2.6094 0.83594-4l-1.793-7.0156 2.4648-3.6484c0.21875-0.32812 0.28906-0.73047 0.19531-1.1133zm-29.484 22.578-1.8477 0.72266-0.82422-2.1055 1.9375-0.49609zm2.6484-5.125-2.2773-8.9023 14.266-13.906 6.4258 25.164zm-12.406-1.5c-0.55078-2.1836 0.76563-4.4023 2.9414-4.9688l4.6602-1.1914 2.0234 7.9141-4.6602 1.1914h-0.003906c-2.1836 0.55078-4.4023-0.76562-4.9609-2.9453zm2.3516 22.164c-0.046875 0.09375-0.125 0.16797-0.22266 0.20312l-1.1875 0.44531-3.7461-10.055 1.1875-0.44531v0.003906c0.20312-0.074219 0.42969 0.027344 0.50781 0.23047l3.4727 9.3125c0.035156 0.097656 0.03125 0.20703-0.011719 0.30469zm12.906-6.4258c0.32422 0.48047 0.27344 0.72266 0.25391 0.80078-0.039062 0.17578-0.23828 0.64844-1.2773 1.293-4.9844 2.2148-7.7773 2.8906-9.332 2.9688l-3.4336-9.2109c-0.007812-0.019531-0.015624-0.035156-0.023437-0.050781l-0.003906-0.003906c0.94531-1.5352 2.1562-2.8906 3.5781-4l0.82031 2.0938v0.003906c0.27734 0.70703 1.0742 1.0547 1.7773 0.77734l4.4258-1.7227c0.33984-0.13281 0.61328-0.39453 0.76172-0.73047 0.046875-0.10547 0.078125-0.21875 0.09375-0.33203l0.56641-0.28906c0.19531-0.11719 0.41406-0.18359 0.64062-0.19922 0.070313 0.30078 0.046875 0.61719-0.066406 0.90625-0.13672 0.46094-0.023437 0.96484 0.30078 1.3203 0.33984 0.375 0.87891 1.0547 0.62891 1.3789v0.003906c-0.35937 0.47656-0.37109 1.1328-0.027343 1.6211 0.82422 1.1719 0.50781 1.582 0.37109 1.7539-0.36719 0.47266-0.38672 1.1211-0.054687 1.6172zm-3.043-10.852-0.15234 0.078124-0.30078-0.76953 1.8203 0.23438v-0.003906c-0.47656 0.078125-0.9375 0.23438-1.3672 0.45703zm25.09 0.10937c-0.39062 0.66016-1.1406 1.0234-1.9023 0.91406-0.76172-0.10938-1.3828-0.66797-1.5703-1.4102l-7.3594-28.797c-0.25781-1.0195 0.35547-2.0508 1.3711-2.3125 1.0156-0.25781 2.0469 0.35547 2.3125 1.3672l7.3555 28.801c0.125 0.48828 0.050781 1.0039-0.20703 1.4375zm-1.7383-20.172 1.1719 0.54297 1.4883 5.8203-0.75 1.1094zm5.8125-2.793 3.6797-2.5078v0.003906c0.30078-0.23047 0.68359-0.32812 1.0547-0.26562 0.375 0.058593 0.70703 0.27344 0.91797 0.58594 0.21484 0.3125 0.28906 0.69922 0.20703 1.0703-0.082032 0.37109-0.3125 0.6875-0.63672 0.88281l-3.6797 2.5039-0.003907 0.003906c-0.30078 0.22266-0.67969 0.31641-1.0508 0.25391s-0.69922-0.27344-0.91016-0.58594c-0.21094-0.30859-0.28516-0.69531-0.20703-1.0625 0.078126-0.36719 0.30469-0.68359 0.62891-0.88281zm7.1016 3.2227c0.11719 0.34375 0.097657 0.72266-0.0625 1.0547-0.15625 0.32813-0.4375 0.57813-0.78516 0.69922l-3.9648 1.3906c-0.14453 0.050782-0.29688 0.078125-0.45312 0.078125-0.67188 0-1.2422-0.48438-1.3555-1.1484-0.11328-0.66016 0.26953-1.3047 0.90234-1.5273l3.9648-1.3906h-0.003906c0.71875-0.24609 1.5039 0.13281 1.7539 0.84766zm-0.64453 4.5547h-0.003906c0.76172 0.007813 1.3711 0.62891 1.3633 1.3906-0.003906 0.76172-0.62891 1.3711-1.3867 1.3633h-0.027344l-4.7773-0.09375c-0.74609-0.027344-1.3359-0.64062-1.3281-1.3867 0.007812-0.74609 0.60547-1.3516 1.3516-1.3633h0.015625zm-43.996-10.453c0.49609-0.57422 1.3633-0.64063 1.9414-0.14453l4.7188 4.0664c0.57422 0.49609 0.64063 1.3672 0.14453 1.9414-0.49609 0.57812-1.3633 0.64062-1.9414 0.14453l-4.7188-4.0664c-0.27734-0.23828-0.44922-0.57422-0.47656-0.94141-0.023437-0.36328 0.09375-0.72266 0.33203-1zm5.1211-2.0352c-0.42969-0.62891-0.26562-1.4844 0.35938-1.9141 0.62891-0.42969 1.4883-0.26953 1.918 0.35938l3.3125 4.8555c0.42969 0.62891 0.26953 1.4844-0.35938 1.9141-0.62891 0.42969-1.4883 0.26953-1.918-0.35938zm5.332-3.9414 0.003907-0.003906c-0.097657-0.35547-0.046876-0.73828 0.14062-1.0586s0.49609-0.55078 0.85547-0.63672c0.35938-0.089844 0.74219-0.03125 1.0547 0.16406 0.31641 0.19531 0.53906 0.51172 0.62109 0.875l1.6055 6.4961c0.085938 0.35156 0.03125 0.72656-0.15625 1.0391-0.19141 0.3125-0.49609 0.53906-0.85156 0.625-0.10938 0.027344-0.21875 0.042969-0.33203 0.042969-0.63281-0.003906-1.1797-0.43359-1.332-1.0469zm14.148 36.512c-0.55469-0.5-0.60938-1.3555-0.12109-1.9219 0.48828-0.57031 1.3438-0.64062 1.918-0.16406l4.7188 4.0664c0.55859 0.5 0.61328 1.3555 0.125 1.9219-0.48828 0.56641-1.3438 0.64062-1.9219 0.16406zm-1.7773 1.1016 3.3125 4.8555h0.003906c0.42969 0.62891 0.26562 1.4844-0.35938 1.9141-0.62891 0.42969-1.4883 0.26953-1.918-0.35938l-3.3125-4.8555c-0.42969-0.625-0.26953-1.4844 0.35937-1.9141 0.62891-0.42969 1.4844-0.26953 1.9141 0.35938zm-3.6211 2.3008 1.6055 6.4961 0.003906 0.003907c0.16406 0.73047-0.28516 1.457-1.0117 1.6406-0.73047 0.17969-1.4688-0.25781-1.6602-0.98047l-1.6055-6.4961h-0.003906c-0.085937-0.35547-0.03125-0.73047 0.15625-1.043s0.49219-0.53906 0.84766-0.62891c0.73828-0.18359 1.4844 0.26562 1.668 1.0039z"></path></svg>');
function u6(e, r) {
  V(r, !0);
  const t = q(r, "size", 7, 32), n = q(r, "color", 7, "currentColor");
  var o = c6(), i = d(o);
  return u(o), B(() => {
    j(o, "width", t()), j(o, "height", t()), j(i, "fill", n());
  }), m(e, o), G({
    get size() {
      return t();
    },
    set size(s = 32) {
      t(s), $();
    },
    get color() {
      return n();
    },
    set color(s = "currentColor") {
      n(s), $();
    }
  });
}
K(u6, { size: {}, color: {} }, [], [], !0);
var d6 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 110.0"><path d="m44.953 10.266-30.965 26.648c-1.2656 1.0898-1.7578 1.5234-2.1094 2.0352-0.32422 0.47266-0.56641 1-0.71484 1.5547-0.15625 0.59766-0.16406 1.2539-0.16406 2.9258v41.527c0 1.6992 0 2.9102 0.078125 3.8594 0.078125 0.94141 0.22266 1.5352 0.46875 2.0117 0.47656 0.94141 1.2422 1.707 2.1836 2.1836 0.47656 0.24609 1.0703 0.39062 2.0117 0.46875 0.94922 0.078125 2.1602 0.078125 3.8594 0.078125h60.797c1.6992 0 2.9102 0 3.8594-0.078125 0.94141-0.078125 1.5352-0.22266 2.0117-0.46875 0.94141-0.47656 1.707-1.2422 2.1836-2.1836 0.24609-0.47656 0.39062-1.0703 0.46875-2.0117 0.078125-0.94922 0.078125-2.1602 0.078125-3.8594v-41.621c0-1.6367-0.007812-2.2812-0.16016-2.8672-0.14062-0.54688-0.37109-1.0664-0.6875-1.5312-0.33594-0.50391-0.8125-0.9375-2.0352-2.0273l-29.84-26.551c-1.1211-1-1.9219-1.7109-2.5977-2.2266-0.66797-0.50391-1.1523-0.77344-1.6211-0.91406-0.92188-0.28125-1.9102-0.29297-2.8359-0.023438-0.47266 0.13281-0.96094 0.39453-1.6367 0.88672-0.68359 0.50391-1.4961 1.2031-2.6328 2.1836zm-34.754 29.984c-0.19922 0.75-0.19922 1.5625-0.19922 3.1797v41.527c0 3.3633 0 5.043 0.65234 6.3242 0.57812 1.1289 1.4961 2.0469 2.625 2.6211 1.2812 0.65625 2.9609 0.65625 6.3242 0.65625h60.797c3.3633 0 5.043 0 6.3242-0.65625 1.1289-0.57422 2.0469-1.4922 2.625-2.6211 0.65234-1.2812 0.65234-2.9609 0.65234-6.3242v-41.621c0-1.5859 0-2.3789-0.19141-3.1172-0.16797-0.65625-0.44922-1.2773-0.82422-1.8398-0.42578-0.63281-1.0195-1.1602-2.2031-2.2148l-29.84-26.551c-2.2227-1.9805-3.3359-2.9688-4.5898-3.3516-1.1094-0.33984-2.293-0.34766-3.4062-0.027344-1.2617 0.35938-2.3906 1.332-4.6445 3.2734l-30.965 26.648c-1.2266 1.0547-1.8398 1.582-2.2812 2.2266-0.39063 0.56641-0.67969 1.1992-0.85547 1.8672z" fill-rule="evenodd"></path></svg>');
function f6(e, r) {
  V(r, !0);
  const t = q(r, "size", 7, 32), n = q(r, "color", 7, "currentColor");
  var o = d6(), i = d(o);
  return u(o), B(() => {
    j(o, "width", t()), j(o, "height", t()), j(i, "fill", n());
  }), m(e, o), G({
    get size() {
      return t();
    },
    set size(s = 32) {
      t(s), $();
    },
    get color() {
      return n();
    },
    set color(s = "currentColor") {
      n(s), $();
    }
  });
}
K(f6, { size: {}, color: {} }, [], [], !0);
var v6 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 110.0"><path d="m75.125 31.984v-19.934c0-0.42969-0.22656-0.82812-0.59375-1.0508-0.37109-0.22266-0.82812-0.23438-1.207-0.03125-11.492 6.125-23.871 10.047-36.793 11.66l-18.891 2.3633c-4.1445 0.003906-7.8359 1.5039-10.68 4.3359-3.1992 3.1875-4.9609 7.6914-4.9609 12.684 0 4.9922 1.7617 9.4961 4.9609 12.684 2.5781 2.5703 5.8555 4.0352 9.5312 4.293v28.961c0 0.67578 0.55078 1.2266 1.2266 1.2266h9.625c0.62109 0 1.1445-0.46484 1.2188-1.082 0.019531-0.14844 1.8398-14.605 10.293-26.383 12.082 1.7773 23.664 5.5898 34.465 11.344 0.17969 0.097656 0.37891 0.14453 0.57813 0.14453 0.21875 0 0.4375-0.058594 0.63281-0.17578 0.37109-0.22266 0.59375-0.62109 0.59375-1.0508v-19.934c4.0195-1.6836 6.6602-5.6055 6.6602-10.027s-2.6406-8.3438-6.6602-10.027zm-70.672 10.027c0-4.2734 1.543-8.2617 4.2383-10.945 2.1094-2.1016 4.7891-3.3242 7.8008-3.5703v29.035c-3.0117-0.25-5.6914-1.4688-7.8008-3.5703-2.6953-2.6875-4.2383-6.6758-4.2383-10.949zm21.828 44.707h-7.3359v-27.523l17.176 2.1484c-6.9844 10.277-9.2695 21.82-9.8398 25.375zm46.391-16.77c-11.246-5.7266-23.289-9.4219-35.836-10.988l-17.891-2.2383v-29.422l17.891-2.2383c12.547-1.5664 24.59-5.2617 35.836-10.988zm2.4531-20.645v-14.586c2.5703 1.4805 4.207 4.2305 4.207 7.293s-1.6367 5.8125-4.207 7.293zm22.875-7.293c0 0.67578-0.55078 1.2266-1.2266 1.2266h-6.4336c-0.67578 0-1.2266-0.55078-1.2266-1.2266s0.55078-1.2266 1.2266-1.2266h6.4336c0.67578 0 1.2266 0.54688 1.2266 1.2266zm-9.2266-10.406c-0.27344-0.61719 0.003906-1.3438 0.62109-1.6172l5.8789-2.6133c0.61719-0.27734 1.3438 0.003906 1.6172 0.62109 0.27344 0.61719-0.003906 1.3438-0.62109 1.6172l-5.8789 2.6133c-0.16016 0.070313-0.33203 0.10547-0.49609 0.10547-0.46875 0.003907-0.91797-0.26953-1.1211-0.72656zm8.1211 24.422c-0.20312 0.45703-0.65234 0.72656-1.1211 0.72656-0.16797 0-0.33594-0.035156-0.49609-0.10547l-5.8789-2.6133c-0.61719-0.27344-0.89844-1-0.62109-1.6172 0.27344-0.61719 1-0.89844 1.6172-0.62109l5.8789 2.6133c0.61719 0.27344 0.89453 1 0.62109 1.6172z"></path></svg>');
function h6(e, r) {
  V(r, !0);
  const t = q(r, "size", 7, 32), n = q(r, "color", 7, "currentColor");
  var o = v6(), i = d(o);
  return u(o), B(() => {
    j(o, "width", t()), j(o, "height", t()), j(i, "fill", n());
  }), m(e, o), G({
    get size() {
      return t();
    },
    set size(s = 32) {
      t(s), $();
    },
    get color() {
      return n();
    },
    set color(s = "currentColor") {
      n(s), $();
    }
  });
}
K(h6, { size: {}, color: {} }, [], [], !0);
var g6 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M17,60H43a7.009,7.009,0,0,0,7-7V27a7.006,7.006,0,0,0-6-6.92V14a14,14,0,0,0-28,0v6.08A7.006,7.006,0,0,0,10,27V53A7.009,7.009,0,0,0,17,60ZM30,2A12.008,12.008,0,0,1,42,14v6H40V14a10,10,0,0,0-20,0v6H18V14A12.013,12.013,0,0,1,30,2Zm8,18H22V14a8,8,0,0,1,16,0ZM12,27a5.006,5.006,0,0,1,5-5H43a5.006,5.006,0,0,1,5,5V53a5.006,5.006,0,0,1-5,5H17a5.006,5.006,0,0,1-5-5Z"></path><path d="M25.074,44.359A2.987,2.987,0,0,0,27.99,48h4.02a2.987,2.987,0,0,0,2.916-3.638l-.693-3.109a6,6,0,1,0-8.466,0ZM30,33a4,4,0,0,1,2.5,7.122,1,1,0,0,0-.348,1l.821,3.68v0a.973.973,0,0,1-.192.826A.984.984,0,0,1,32.01,46H27.99a.989.989,0,0,1-.965-1.2l.821-3.68a1,1,0,0,0-.348-1A4,4,0,0,1,30,33Z"></path></svg>');
function xt(e, r) {
  V(r, !0);
  const t = q(r, "size", 7, 32), n = q(r, "color", 7, "currentColor");
  var o = g6(), i = d(o), s = _(i);
  return u(o), B(() => {
    j(o, "width", t()), j(o, "height", t()), j(i, "fill", n()), j(s, "fill", n());
  }), m(e, o), G({
    get size() {
      return t();
    },
    set size(a = 32) {
      t(a), $();
    },
    get color() {
      return n();
    },
    set color(a = "currentColor") {
      n(a), $();
    }
  });
}
K(xt, { size: {}, color: {} }, [], [], !0);
var p6 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M17,60H43a7.009,7.009,0,0,0,7-7V27a7.008,7.008,0,0,0-7-7H22V14a8,8,0,0,1,16,0,3,3,0,0,0,6,0,14,14,0,0,0-28,0v6.08A7.006,7.006,0,0,0,10,27V53A7.009,7.009,0,0,0,17,60ZM30,2A12.008,12.008,0,0,1,42,14a1,1,0,0,1-2,0,10,10,0,0,0-20,0v6H18V14A12.013,12.013,0,0,1,30,2ZM12,27a5.006,5.006,0,0,1,5-5H43a5.006,5.006,0,0,1,5,5V53a5.006,5.006,0,0,1-5,5H17a5.006,5.006,0,0,1-5-5Z"></path><path d="M25.074,44.359A2.987,2.987,0,0,0,27.99,48h4.02a2.987,2.987,0,0,0,2.916-3.638l-.693-3.109a6,6,0,1,0-8.466,0ZM30,33a4,4,0,0,1,2.5,7.122,1,1,0,0,0-.348,1l.821,3.68v0a.973.973,0,0,1-.192.826A.984.984,0,0,1,32.01,46H27.99a.989.989,0,0,1-.965-1.2l.821-3.68a1,1,0,0,0-.348-1A4,4,0,0,1,30,33Z"></path></svg>');
function m6(e, r) {
  V(r, !0);
  const t = q(r, "size", 7, 32), n = q(r, "color", 7, "currentColor");
  var o = p6(), i = d(o), s = _(i);
  return u(o), B(() => {
    j(o, "width", t()), j(o, "height", t()), j(i, "fill", n()), j(s, "fill", n());
  }), m(e, o), G({
    get size() {
      return t();
    },
    set size(a = 32) {
      t(a), $();
    },
    get color() {
      return n();
    },
    set color(a = "currentColor") {
      n(a), $();
    }
  });
}
K(m6, { size: {}, color: {} }, [], [], !0);
var y6 = /* @__PURE__ */ we('<svg viewBox="0 -191.5 512 512" aria-label="Mollie Logo" preserveAspectRatio="xMidYMid"><g><path d="M165.324756,50.3575405 C165.324756,41.1728319 156.393418,31.4180379 140.937771,31.4180379 C123.581838,31.4180379 104.51565,44.1499443 101.60188,69.5504145 C98.624768,95.2042558 114.587158,106.605963 130.676234,106.605963 C146.76531,106.605963 155.189905,100.335024 163.804528,91.9737721 C156.393418,82.6623778 146.828653,86.9696895 144.991711,87.9198317 C142.964741,88.9333168 140.367685,90.3268588 135.046889,90.3268588 C128.839292,90.3268588 122.505011,87.5397748 122.505011,75.9480391 C162.2843,72.0207844 165.324756,59.5422492 165.324756,50.3575405 Z M145.625139,51.8777682 C145.371768,54.728195 144.231597,59.605592 124.088581,62.3293332 C128.33255,47.2537424 136.440431,46.1135717 140.177657,46.1135717 C143.661512,46.1135717 145.87851,48.8373129 145.625139,51.8777682 Z M78.2283806,54.3481381 C78.2283806,54.3481381 69.6771001,81.205493 68.9803291,83.4224916 C68.7269578,81.1421502 62.4560188,32.9382655 62.4560188,32.9382655 C47.8871706,32.9382655 40.096004,43.3264877 35.9787208,54.2847952 C35.9787208,54.2847952 25.5904986,81.205493 24.7036991,83.4858345 C24.6403563,81.3955215 23.1201287,54.6015093 23.1201287,54.6015093 C22.2333292,41.1728319 9.94482247,33.0016083 0,33.0016083 L12.0351355,106.035878 C27.3007547,105.972535 35.535321,95.6476556 39.8426327,84.689348 C39.8426327,84.689348 49.0273413,60.9357912 49.4073982,59.8589633 C49.4707411,60.8724483 55.9950513,106.035878 55.9950513,106.035878 C71.3240134,106.035878 79.5585797,96.3444266 83.992577,85.7661759 L105.465792,33.0016083 C90.3268588,33.0016083 82.3456637,43.3264877 78.2283806,54.3481381 Z M221.573178,31.2913522 C212.135098,31.2913522 204.914017,36.4221205 198.833107,43.9599159 L198.833107,43.8965731 L204.280589,0 C191.738711,0 181.540517,10.8949647 179.57689,27.1107262 L170.075467,105.465792 C177.296548,105.465792 184.961029,103.375479 189.078313,98.0546827 C192.752196,102.805394 198.263021,106.605963 206.434245,106.605963 C227.590746,106.605963 242.096251,82.0289496 242.096251,58.9721638 C241.969566,37.9423481 231.771372,31.2913522 221.573178,31.2913522 Z M219.609551,68.9803291 C217.392552,81.8389212 210.234814,90.5802301 203.330447,90.5802301 C196.362737,90.5802301 193.385624,87.476432 193.385624,87.476432 C194.715823,76.2014104 195.53928,69.2970432 198.072993,63.3428183 C200.606705,57.3885933 206.624273,47.8871706 212.895212,47.8871706 C219.039466,47.8871706 221.82655,56.0583942 219.609551,68.9803291 Z M294.924162,33.0016083 L280.165285,33.0016083 L280.228628,32.2414945 C281.242113,22.6133861 283.522455,17.5459607 291.06025,16.722504 C296.191018,16.2157615 298.47136,13.5553631 299.041445,10.6415935 C299.484845,8.36125201 300.878387,0.443399728 300.878387,0.443399728 C271.233948,0.253371273 261.922554,13.0486206 259.515526,32.5582086 L259.452184,33.0016083 L259.13547,33.0016083 C254.321415,33.0016083 249.000619,38.4490907 248.113819,45.3534579 L247.797105,47.8871706 L257.678585,47.8871706 L249.380675,116.4241 L246.846963,128.712607 C247.163677,128.712607 247.543734,128.77595 247.860448,128.77595 C261.732525,128.269207 270.60052,117.310899 272.564147,101.411852 L279.025114,47.8871706 L283.64914,47.8871706 C288.209823,47.8871706 293.53062,43.3264877 294.480762,35.7253495 L294.924162,33.0016083 Z M371.695658,31.7347519 C354.656439,31.7347519 338.567364,44.27663 333.626624,63.9762464 C328.685884,83.6758629 336.160337,106.98602 361.244093,106.98602 C386.264506,106.98602 400.706668,82.7257206 400.706668,62.5193616 C400.706668,42.4396882 387.087962,31.7347519 371.695658,31.7347519 Z M378.600025,68.3469009 C377.713225,77.2782383 373.785971,90.8336014 363.017691,90.8336014 C352.18607,90.8336014 353.706297,74.9978968 354.783125,67.4601014 C355.923296,59.4155635 360.420636,47.9505134 370.112087,47.9505134 C378.790053,47.9505134 379.61351,58.2753928 378.600025,68.3469009 Z M484.889274,54.3481381 C484.889274,54.3481381 476.337993,81.205493 475.641222,83.4224916 C475.387851,81.1421502 469.116912,32.9382655 469.116912,32.9382655 C454.548064,32.9382655 446.756897,43.3264877 442.639614,54.2847952 C442.639614,54.2847952 432.251392,81.205493 431.364592,83.4858345 C431.30125,81.3955215 429.781022,54.6015093 429.781022,54.6015093 C428.894222,41.1728319 416.605716,33.0016083 406.660893,33.0016083 L418.632686,106.035878 C433.898305,105.972535 442.132871,95.6476556 446.440183,84.689348 C446.440183,84.689348 455.624892,60.9357912 455.941606,59.8589633 C456.004949,60.8724483 462.529259,106.035878 462.529259,106.035878 C477.858221,106.035878 486.092787,96.3444266 490.526785,85.7661759 L512,33.0016083 C496.924409,33.0016083 488.943214,43.3264877 484.889274,54.3481381 Z M308.859582,0.443399728 L296.444389,100.588395 L296.444389,100.588395 L293.910677,112.940245 C294.227391,112.940245 294.607448,113.003588 294.924162,113.003588 L294.924162,113.003588 C308.289496,112.813559 317.790919,101.095138 319.564518,86.3362613 L326.722257,28.8843251 C328.875912,11.3383645 318.424347,0.443399728 308.859582,0.443399728 Z" fill-rule="nonzero"></path></g></svg>');
function b6(e, r) {
  V(r, !1);
  let t = q(r, "size", 12, 100), n = q(r, "color", 12, "var(--text-color)"), o = q(r, "className", 12, "");
  var i = y6(), s = d(i), a = d(s);
  return u(s), u(i), B(() => {
    j(i, "width", t()), j(i, "height", t()), ke(i, 0, et(o())), j(a, "fill", n());
  }), m(e, i), G({
    get size() {
      return t();
    },
    set size(l) {
      t(l), $();
    },
    get color() {
      return n();
    },
    set color(l) {
      n(l), $();
    },
    get className() {
      return o();
    },
    set className(l) {
      o(l), $();
    }
  });
}
K(b6, { size: {}, color: {}, className: {} }, [], [], !0);
var w6 = /* @__PURE__ */ we('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Yandex Logo"><path d="m3.438 13.605c.073-.281.149-.56.222-.842.284-1.083.565-2.17.855-3.254.105-.442.259-.831.459-1.19l-.012.024c.215-.371.583-.632 1.016-.699l.008-.001c.101-.023.218-.036.338-.036.467 0 .887.198 1.182.515l.001.001c.136.156.243.341.31.544l.003.011c.185.492.377 1.125.535 1.772l.025.124q.391 1.482.786 2.966c.006.023 0 .05.033.07.056-.222.116-.442.172-.661q.51-1.987 1.018-3.97c.062-.248.126-.495.191-.743.049-.185.124-.346.222-.491l-.004.006c.149-.221.38-.376.649-.422l.006-.001c.313-.065.674-.103 1.044-.104h.001c.073 0 .086.017.07.086q-.466 1.779-.928 3.558-.684 2.631-1.371 5.259c-.046.172-.089.347-.135.518-.01.033-.014.062-.059.066-.07.007-.151.011-.234.011-.263 0-.517-.039-.756-.111l.018.005c-.122-.043-.225-.11-.31-.195-.12-.112-.231-.229-.335-.351l-.005-.006c-.113-.169-.212-.363-.287-.569l-.006-.019c-.265-.639-.505-1.403-.679-2.192l-.017-.094c-.281-1.12-.568-2.24-.852-3.36-.018-.07-.047-.132-.087-.186l.001.001c-.043-.077-.125-.129-.218-.129-.002 0-.003 0-.005 0-.113.011-.205.087-.239.189l-.001.002c-.096.304-.165.614-.248.922-.334 1.288-.658 2.58-1.001 3.865-.102.383-.271.743-.4 1.12-.138.361-.369.66-.665.876l-.005.004c-.135.104-.3.174-.481.195h-.005c-.154.021-.333.032-.514.032-.054 0-.107-.001-.161-.003h.008c-.059 0-.08-.023-.099-.08q-.48-1.823-.968-3.643-.631-2.384-1.27-4.777l-.238-.902c-.006-.03-.032-.073.03-.079.105-.015.226-.023.349-.023.399 0 .778.089 1.117.248l-.016-.007c.234.122.41.33.487.581l.002.007c.172.56.301 1.126.446 1.691q.495 1.913.984 3.826c.003.017.008.033.014.048l-.001-.001z"></path><path d="m15.343 16.739c.099-.149.188-.281.278-.416q1.44-2.146 2.88-4.288c.011-.014.018-.032.018-.051 0-.023-.009-.043-.025-.058q-1.194-1.774-2.385-3.548l-.72-1.083c-.01-.017-.033-.033-.026-.066l.489.03c.304.02.602.04.902.056.244.03.461.129.636.276l-.002-.002c.158.12.291.264.396.426l.004.007c.518.786 1.03 1.576 1.569 2.346.24.34.343.307.598.056.126-.149.242-.316.342-.493l.008-.016c.446-.664.886-1.334 1.341-1.992.253-.354.642-.596 1.089-.65l.007-.001c.275-.031.594-.048.916-.048.104 0 .208.002.311.005h-.015c.08 0 .03.043.014.066-.222.33-.442.661-.667.991q-1.22 1.822-2.438 3.633c-.014.017-.023.04-.023.064 0 .028.011.053.029.071q1.546 2.299 3.089 4.598c.014.023.046.046.036.07s-.056.014-.08.014c-.089.003-.193.005-.298.005-.293 0-.583-.014-.869-.04l.037.003c-.424-.053-.794-.25-1.066-.541l-.001-.001c-.133-.16-.257-.338-.364-.527l-.01-.018c-.433-.647-.862-1.295-1.295-1.946-.068-.106-.154-.194-.254-.262l-.003-.002c-.033-.03-.077-.048-.126-.048s-.093.018-.126.049c-.073.051-.134.114-.183.186l-.002.003c-.545.779-1.05 1.586-1.579 2.378-.251.37-.639.631-1.09.709l-.01.001c-.214.037-.461.057-.713.057-.071 0-.142-.002-.212-.005h.01z"></path><path d="m14.639 8.758v.129q0 3.29.006 6.58c0 .012.001.025.001.039 0 .45-.248.843-.615 1.048l-.006.003c-.128.082-.281.138-.445.155h-.005c-.152.017-.327.026-.505.026-.01 0-.021 0-.031 0h.002c-.109 0-.109 0-.109-.106 0-1.186 0-2.372-.006-3.558 0-.998-.01-1.992 0-2.99.009-.189.115-.35.269-.438l.003-.001c.146-.096.307-.16.459-.245.304-.147.563-.301.807-.474l-.017.012c.056-.053.115-.112.194-.182z"></path><path d="m12.912 9.182c0-.012 0-.026 0-.04 0-.282.036-.555.104-.815l-.005.022c.09-.326.276-.6.526-.798l.003-.002c.231-.161.51-.27.811-.303l.008-.001c.089-.017.178-.023.267-.036.073-.014.093.026.096.089 0 .014.001.032.001.049 0 .119-.011.236-.032.35l.002-.012c-.066.403-.25.755-.516 1.028-.152.143-.335.255-.538.324l-.01.003c-.232.085-.433.193-.615.325l.007-.005c-.026.02-.056.059-.093.04s-.017-.066-.02-.099.003-.082.003-.118z"></path></svg>');
function _6(e, r) {
  V(r, !1);
  let t = q(r, "size", 12, 50), n = q(r, "color", 12, "var(--text-color)"), o = q(r, "className", 12, "");
  var i = w6();
  return B(() => {
    j(i, "fill", n()), j(i, "width", t()), j(i, "height", t()), ke(i, 0, et(o()));
  }), m(e, i), G({
    get size() {
      return t();
    },
    set size(s) {
      t(s), $();
    },
    get color() {
      return n();
    },
    set color(s) {
      n(s), $();
    },
    get className() {
      return o();
    },
    set className(s) {
      o(s), $();
    }
  });
}
K(_6, { size: {}, color: {}, className: {} }, [], [], !0);
var x6 = /* @__PURE__ */ we(`<svg viewBox="0 0 96.24 96.24" aria-label="WordPress Logo"><g class="svelte-5ki6bu"><path d="M48.122,0C21.587,0,0.001,21.585,0.001,48.118c0,26.535,21.587,48.122,48.12,48.122c26.532,0,48.117-21.587,48.117-48.122
        C96.239,21.586,74.654,0,48.122,0z M4.857,48.118c0-6.271,1.345-12.227,3.746-17.606l20.638,56.544
        C14.81,80.042,4.857,65.243,4.857,48.118z M48.122,91.385c-4.247,0-8.346-0.623-12.222-1.763L48.88,51.903l13.301,36.433
        c0.086,0.215,0.191,0.411,0.308,0.596C57.992,90.514,53.16,91.385,48.122,91.385z M54.083,27.834
        c2.604-0.137,4.953-0.412,4.953-0.412c2.33-0.276,2.057-3.701-0.277-3.564c0,0-7.007,0.549-11.532,0.549
        c-4.25,0-11.396-0.549-11.396-0.549c-2.332-0.137-2.604,3.427-0.273,3.564c0,0,2.208,0.275,4.537,0.412l6.74,18.469l-9.468,28.395
        L21.615,27.835c2.608-0.136,4.952-0.412,4.952-0.412c2.33-0.275,2.055-3.702-0.278-3.562c0,0-7.004,0.549-11.53,0.549
        c-0.813,0-1.77-0.021-2.784-0.052C19.709,12.611,33.008,4.856,48.122,4.856c11.265,0,21.519,4.306,29.215,11.357
        c-0.187-0.01-0.368-0.035-0.562-0.035c-4.248,0-7.264,3.702-7.264,7.679c0,3.564,2.055,6.582,4.248,10.146
        c1.647,2.882,3.567,6.585,3.567,11.932c0,3.704-1.422,8-3.293,13.986l-4.315,14.421L54.083,27.834z M69.871,85.516l13.215-38.208
        c2.471-6.171,3.29-11.106,3.29-15.497c0-1.591-0.104-3.07-0.292-4.449c3.38,6.163,5.303,13.236,5.301,20.758
        C91.384,64.08,82.732,78.016,69.871,85.516z" class="svelte-5ki6bu"></path></g></svg>`);
const C6 = {
  hash: "svelte-5ki6bu",
  code: `.pulse.svelte-5ki6bu {
    animation: svelte-5ki6bu-pulse 1.5s ease-in-out infinite;}

  @keyframes svelte-5ki6bu-pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }`
};
function Yr(e, r) {
  V(r, !0), de(e, C6);
  const t = q(r, "size", 7, "1rem"), n = q(r, "color", 7, "currentColor"), o = q(r, "loading", 7, !1);
  var i = x6();
  let s;
  return B(
    (a) => {
      j(i, "fill", n()), j(i, "width", t()), j(i, "height", t()), s = ke(i, 0, "svelte-5ki6bu", null, s, a);
    },
    [() => ({ pulse: o() })]
  ), m(e, i), G({
    get size() {
      return t();
    },
    set size(a = "1rem") {
      t(a), $();
    },
    get color() {
      return n();
    },
    set color(a = "currentColor") {
      n(a), $();
    },
    get loading() {
      return o();
    },
    set loading(a = !1) {
      o(a), $();
    }
  });
}
K(Yr, { size: {}, color: {}, loading: {} }, [], [], !0);
var z6 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 110.0"><polyline points="20,40 50,65 80,40" fill="none" stroke-linecap="round" stroke-linejoin="round"></polyline></svg>');
function Kt(e, r) {
  V(r, !0);
  const t = q(r, "size", 7, "1rem"), n = q(r, "color", 7, "currentColor"), o = q(r, "strokeWidth", 7, 5);
  var i = z6(), s = d(i);
  return u(i), B(() => {
    j(i, "width", t()), j(i, "height", t()), j(s, "stroke", n()), j(s, "stroke-width", o());
  }), m(e, i), G({
    get size() {
      return t();
    },
    set size(a = "1rem") {
      t(a), $();
    },
    get color() {
      return n();
    },
    set color(a = "currentColor") {
      n(a), $();
    },
    get strokeWidth() {
      return o();
    },
    set strokeWidth(a = 5) {
      o(a), $();
    }
  });
}
K(Kt, { size: {}, color: {}, strokeWidth: {} }, [], [], !0);
var k6 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 110.0"><polyline points="60,20 35,50 60,80" fill="none" stroke-linecap="round" stroke-linejoin="round"></polyline></svg>');
function L6(e, r) {
  V(r, !0);
  const t = q(r, "size", 7, 32), n = q(r, "color", 7, "currentColor"), o = q(r, "strokeWidth", 7, 5);
  var i = k6(), s = d(i);
  return u(i), B(() => {
    j(i, "width", t()), j(i, "height", t()), j(s, "stroke", n()), j(s, "stroke-width", o());
  }), m(e, i), G({
    get size() {
      return t();
    },
    set size(a = 32) {
      t(a), $();
    },
    get color() {
      return n();
    },
    set color(a = "currentColor") {
      n(a), $();
    },
    get strokeWidth() {
      return o();
    },
    set strokeWidth(a = 5) {
      o(a), $();
    }
  });
}
K(L6, { size: {}, color: {}, strokeWidth: {} }, [], [], !0);
var E6 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 110.0"><polyline points="40,20 65,50 40,80" fill="none" stroke-linecap="round" stroke-linejoin="round"></polyline></svg>');
function A6(e, r) {
  V(r, !0);
  const t = q(r, "size", 7, 32), n = q(r, "color", 7, "currentColor"), o = q(r, "strokeWidth", 7, 5);
  var i = E6(), s = d(i);
  return u(i), B(() => {
    j(i, "width", t()), j(i, "height", t()), j(s, "stroke", n()), j(s, "stroke-width", o());
  }), m(e, i), G({
    get size() {
      return t();
    },
    set size(a = 32) {
      t(a), $();
    },
    get color() {
      return n();
    },
    set color(a = "currentColor") {
      n(a), $();
    },
    get strokeWidth() {
      return o();
    },
    set strokeWidth(a = 5) {
      o(a), $();
    }
  });
}
K(A6, { size: {}, color: {}, strokeWidth: {} }, [], [], !0);
var S6 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 110.0"><polyline points="20,60 50,35 80,60" fill="none" stroke-linecap="round" stroke-linejoin="round"></polyline></svg>');
function Yt(e, r) {
  V(r, !0);
  const t = q(r, "size", 7, "1rem"), n = q(r, "color", 7, "currentColor"), o = q(r, "strokeWidth", 7, 5);
  var i = S6(), s = d(i);
  return u(i), B(() => {
    j(i, "width", t()), j(i, "height", t()), j(s, "stroke", n()), j(s, "stroke-width", o());
  }), m(e, i), G({
    get size() {
      return t();
    },
    set size(a = "1rem") {
      t(a), $();
    },
    get color() {
      return n();
    },
    set color(a = "currentColor") {
      n(a), $();
    },
    get strokeWidth() {
      return o();
    },
    set strokeWidth(a = 5) {
      o(a), $();
    }
  });
}
K(Yt, { size: {}, color: {}, strokeWidth: {} }, [], [], !0);
var $6 = /* @__PURE__ */ P("<!> <!> <!>", 1), q6 = /* @__PURE__ */ P("<!> <!>", 1), j6 = /* @__PURE__ */ P('<div class="annotation-controls svelte-siqis5" role="button" tabindex="0"><!> <!> <!></div>');
const I6 = {
  hash: "svelte-siqis5",
  code: ".annotation-controls.svelte-siqis5 {display:inline-flex;gap:0.5rem;font-size:0.8em;align-items:center;}"
};
function Qi(e, r) {
  V(r, !0), de(e, I6);
  const t = q(r, "annotation", 7);
  function n(f) {
    var w;
    f.stopPropagation(), n0(`/annotation/${(w = t()) == null ? void 0 : w.id}`);
  }
  function o(f) {
    f.stopPropagation(), jr(t().id);
  }
  function i(f) {
    var w;
    f.stopPropagation(), confirm("Are you sure you want to delete this annotation?") && (ui((w = t()) == null ? void 0 : w.id), G0(null));
  }
  function s(f) {
    var w;
    f.stopPropagation(), console.log("[not implemented] Share annotation:", (w = t()) == null ? void 0 : w.id), Xe({
      message: "[Beta] Sharing not implemented, yet.",
      type: "warning",
      dismissible: !0,
      timeout: 5e3
    });
  }
  async function a(f) {
    var w;
    f.stopPropagation(), await en((w = t()) == null ? void 0 : w.id, { history: k1.Archived });
  }
  var l = j6(), v = d(l);
  {
    var p = (f) => {
      Ve(f, {
        size: "xs",
        $$events: { click: n },
        children: (w, z) => {
          qe();
          var L = ze("Reply");
          m(w, L);
        },
        $$slots: { default: !0 }
      });
    };
    Z(v, (f) => {
      Y.currentAnnotationId !== t().id && f(p);
    });
  }
  var h = _(v, 2);
  {
    var g = (f) => {
      xt(f, { size: 16 });
    };
    Z(h, (f) => {
      var w;
      ((w = t()) == null ? void 0 : w.privacy) === Ji.Private && f(g);
    });
  }
  var y = _(h, 2);
  return Kr(y, {
    label: "Annotation options",
    children: (f, w) => {
      var z = q6(), L = ae(z);
      {
        var U = (E) => {
          var x = $6(), b = ae(x);
          Ve(b, {
            onclick: o,
            size: "xs",
            children: (R, W) => {
              qe();
              var D = ze("Edit");
              m(R, D);
            },
            $$slots: { default: !0 }
          });
          var C = _(b, 2);
          Ve(C, {
            onclick: i,
            size: "xs",
            children: (R, W) => {
              qe();
              var D = ze("Delete");
              m(R, D);
            },
            $$slots: { default: !0 }
          });
          var k = _(C, 2);
          {
            var A = (R) => {
              Ve(R, {
                onclick: a,
                size: "xs",
                children: (W, D) => {
                  qe();
                  var O = ze("Archive");
                  m(W, O);
                },
                $$slots: { default: !0 }
              });
            };
            Z(k, (R) => {
              var W;
              ((W = t()) == null ? void 0 : W.history) !== k1.Archived && R(A);
            });
          }
          m(E, x);
        };
        Z(L, (E) => {
          var x, b, C;
          ((b = (x = t()) == null ? void 0 : x.profile) == null ? void 0 : b.id) === ((C = N.user) == null ? void 0 : C.id) && E(U);
        });
      }
      var S = _(L, 2);
      Ve(S, {
        onclick: s,
        size: "xs",
        children: (E, x) => {
          qe();
          var b = ze("Share");
          m(E, b);
        },
        $$slots: { default: !0 }
      }), m(f, z);
    },
    $$slots: { default: !0 }
  }), u(l), m(e, l), G({
    get annotation() {
      return t();
    },
    set annotation(f) {
      t(f), $();
    }
  });
}
K(Qi, { annotation: {} }, [], [], !0);
function P6(e, r, t, n) {
  r() || (I(t, !c(t)), n("change", { checked: c(t) }));
}
var T6 = /* @__PURE__ */ P('<span class="field-hint svelte-ttnzjh"> </span>'), R6 = /* @__PURE__ */ P('<div class="toggle-label-wrapper svelte-ttnzjh"><label> </label> <!></div>'), M6 = /* @__PURE__ */ P('<div><!> <div class="toggle-wrapper svelte-ttnzjh"><input type="checkbox" hidden/> <button type="button" class="toggle svelte-ttnzjh" aria-label="Toggle switch" role="switch"><div class="toggle-control svelte-ttnzjh"><div class="toggle-thumb svelte-ttnzjh"></div></div></button></div></div>');
const N6 = {
  hash: "svelte-ttnzjh",
  code: `
  /* Toggle component styles */.toggle-field.svelte-ttnzjh {display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;}.toggle-label-wrapper.svelte-ttnzjh {display:flex;flex-direction:column;}.toggle-wrapper.svelte-ttnzjh {display:flex;align-items:center;}.toggle.svelte-ttnzjh {display:inline-flex;align-items:center;background-color:transparent;border:none;padding:0;cursor:pointer;}.toggle-control.svelte-ttnzjh {position:relative;width:3rem;height:1.5rem;border:1px solid var(--clr-neutral-a20);border-radius:1rem;transition:background-color 0.2s ease;}.toggle-thumb.svelte-ttnzjh {position:absolute;left:0.2rem;width:1.1rem;height:1.1rem;border-radius:50%;border:1px solid var(--clr-neutral-a20);transition:transform 0.2s ease;transform:translateY(-50%);top:50%;}.toggle-thumb[data-checked="true"].svelte-ttnzjh {transform:translateX(1.5rem) translateY(-50%);background-color:var(--clr-primary-a0);}.field-hint.svelte-ttnzjh {display:block;font-size:0.8rem;color:var(--clr-neutral-a20);margin-top:0.25rem;padding:0;}`
};
function yr(e, r) {
  V(r, !0), de(e, N6);
  const t = H1();
  let n = q(r, "id", 7), o = q(r, "name", 7), i = q(r, "label", 7), s = q(r, "hint", 7), a = q(r, "checked", 7, !1), l = q(r, "disabled", 7, !1), v = /* @__PURE__ */ te(We(a())), p;
  De(() => {
    I(v, a());
  });
  var h = M6(), g = d(h);
  {
    var y = (S) => {
      var E = R6(), x = d(E), b = d(x, !0);
      u(x);
      var C = _(x, 2);
      {
        var k = (A) => {
          var R = T6(), W = d(R, !0);
          u(R), B(() => J(W, s())), m(A, R);
        };
        Z(C, (A) => {
          s() && A(k);
        });
      }
      u(E), B(() => {
        j(x, "for", n()), J(b, i());
      }), m(S, E);
    };
    Z(g, (S) => {
      i() && S(y);
    });
  }
  var f = _(g, 2), w = d(f);
  Ht(w);
  var z = _(w, 2);
  z.__click = [P6, l, v, t];
  var L = d(z), U = d(L);
  return u(L), u(z), lt(z, (S) => p = S, () => p), u(f), u(h), B(() => {
    ke(h, 1, `toggle-field ${l() ? "disabled" : ""}`, "svelte-ttnzjh"), j(w, "id", n()), j(w, "name", o()), Qa(w, c(v)), w.disabled = l(), j(z, "aria-checked", c(v)), j(z, "data-checked", c(v)), j(L, "data-checked", c(v)), j(U, "data-checked", c(v));
  }), m(e, h), G({
    get id() {
      return n();
    },
    set id(S) {
      n(S), $();
    },
    get name() {
      return o();
    },
    set name(S) {
      o(S), $();
    },
    get label() {
      return i();
    },
    set label(S) {
      i(S), $();
    },
    get hint() {
      return s();
    },
    set hint(S) {
      s(S), $();
    },
    get checked() {
      return a();
    },
    set checked(S = !1) {
      a(S), $();
    },
    get disabled() {
      return l();
    },
    set disabled(S = !1) {
      l(S), $();
    }
  });
}
Je(["click"]);
K(
  yr,
  {
    id: {},
    name: {},
    label: {},
    hint: {},
    checked: {},
    disabled: {}
  },
  [],
  [],
  !0
);
var O6 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 110.0"><path d="m93.066 45.434c-3.6523-5.8867-8.5703-10.59-14.246-14.113-8.4727-5.2617-18.637-7.8906-28.816-7.8906-10.184 0-20.348 2.6289-28.816 7.8906-5.6758 3.5234-10.594 8.2305-14.246 14.113-0.89062 1.4375-1.3398 3.0078-1.3398 4.5664 0 1.5625 0.44531 3.1289 1.3398 4.5664 3.6523 5.8867 8.5703 10.59 14.246 14.113 8.4805 5.2656 18.645 7.8984 28.816 7.8984v-0.007813c10.184 0 20.348-2.6328 28.816-7.8906 5.6758-3.5234 10.594-8.2305 14.246-14.113 0.89062-1.4375 1.3398-3.0078 1.3398-4.5664 0-1.5625-0.44531-3.1289-1.3398-4.5664zm-43.066-16.988c5.9531 0 11.34 2.4102 15.238 6.3164 3.8984 3.8984 6.3125 9.2891 6.3125 15.238 0 5.9531-2.4102 11.34-6.3125 15.238-3.8984 3.8984-9.2891 6.3125-15.238 6.3125-5.9531 0-11.34-2.4102-15.238-6.3125-3.8984-3.8984-6.3125-9.2891-6.3125-15.238 0-5.9531 2.4102-11.34 6.3125-15.238 3.8984-3.8984 9.2891-6.3164 15.238-6.3164zm11.992 9.5625c-3.0703-3.0703-7.3125-4.9688-11.992-4.9688-4.6836 0-8.9258 1.8984-11.992 4.9688-3.0703 3.0703-4.9688 7.3125-4.9688 11.992 0 4.6836 1.8984 8.9258 4.9688 11.992 3.0703 3.0703 7.3086 4.9688 11.992 4.9688s8.9258-1.8984 11.992-4.9688c3.0703-3.0703 4.9688-7.3086 4.9688-11.992s-1.8984-8.9258-4.9688-11.992zm19.25-10.582c6.2539 3.8828 11.68 9.0742 15.719 15.586 1.3594 2.1914 2.0391 4.5859 2.0391 6.9883s-0.67969 4.8008-2.0391 6.9883c-4.043 6.5078-9.4688 11.703-15.719 15.582-9.2227 5.7266-20.242 8.5898-31.238 8.5898v-0.007812c-11.012 0-22.027-2.8594-31.238-8.582-6.2539-3.8828-11.68-9.0781-15.719-15.586-1.3594-2.1914-2.0391-4.5859-2.0391-6.9883s0.67969-4.8008 2.0391-6.9883c4.043-6.5078 9.4688-11.703 15.719-15.582 9.2227-5.7266 20.242-8.5898 31.238-8.5898 11 0 22.016 2.8633 31.238 8.5898z"></path></svg>');
function Vr(e, r) {
  V(r, !0);
  const t = q(r, "size", 7, 24), n = q(r, "color", 7, "currentColor");
  var o = O6(), i = d(o);
  return u(o), B(() => {
    j(o, "width", t()), j(o, "height", t()), j(i, "fill", n());
  }), m(e, o), G({
    get size() {
      return t();
    },
    set size(s = 24) {
      t(s), $();
    },
    get color() {
      return n();
    },
    set color(s = "currentColor") {
      n(s), $();
    }
  });
}
K(Vr, { size: {}, color: {} }, [], [], !0);
var D6 = /* @__PURE__ */ P("<button><!></button>");
const W6 = {
  hash: "svelte-yeqcrn",
  code: ".btn.svelte-yeqcrn {display:flex;justify-content:center;align-items:center;flex-direction:row;font-family:var(--font-sans);font-size:1rem;font-weight:400;border:none;height:2rem;padding:0 2rem;border-radius:1rem;cursor:pointer;}.btn.svelte-yeqcrn:disabled {cursor:not-allowed;opacity:0.7;}.btn-default.svelte-yeqcrn {background-color:var(--clr-neutral-a0);color:var(--clr-neutral-a40);}.btn-default.svelte-yeqcrn:hover:not(:disabled) {background-color:var(--clr-neutral-a10);color:var(--clr-neutral-a40);}.btn-primary.svelte-yeqcrn {background-color:var(--clr-primary-a0);color:var(--clr-primary-a40);}.btn-primary.svelte-yeqcrn:hover:not(:disabled) {background-color:var(--clr-primary-a10);color:var(--clr-primary-a40);}.btn-accent.svelte-yeqcrn {background-color:var(--clr-accent-a0);color:var(--clr-accent-a40);}.btn-accent.svelte-yeqcrn:hover:not(:disabled) {background-color:var(--clr-accent-a10);color:var(--clr-accent-a40);}.btn-highlight.svelte-yeqcrn {background-color:var(--clr-highlight-a0);color:var(--clr-neutral-a0);}.btn-highlight.svelte-yeqcrn:hover:not(:disabled) {background-color:var(--clr-highlight-a10);color:var(--clr-neutral-a0);}.btn-danger.svelte-yeqcrn {background-color:var(--clr-danger-a0);color:var(--clr-neutral-a0);}.btn-danger.svelte-yeqcrn:hover:not(:disabled) {background-color:var(--clr-danger-a10);color:var(--clr-neutral-a0);}.btn-success.svelte-yeqcrn {background-color:var(--clr-success-a0);color:var(--clr-neutral-a0);}.btn-success.svelte-yeqcrn:hover:not(:disabled) {background-color:var(--clr-success-a10);color:var(--clr-neutral-a0);}.btn-warning.svelte-yeqcrn {background-color:var(--clr-warning-a0);color:var(--clr-warning-a40);}.btn-warning.svelte-yeqcrn:hover:not(:disabled) {background-color:var(--clr-warning-a10);color:var(--clr-warning-a40);}.btn-info.svelte-yeqcrn {background-color:var(--clr-info-a0);color:var(--clr-neutral-a0);}.btn-info.svelte-yeqcrn:hover:not(:disabled) {background-color:var(--clr-info-a10);color:var(--clr-neutral-a0);}"
};
function r0(e, r) {
  const t = qr(r, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), n = qr(t, ["variant"]);
  V(r, !1), de(e, W6);
  let o = q(r, "variant", 12, "default");
  var i = D6();
  Zo(
    i,
    () => ({
      class: `btn btn-${o() ?? ""}`,
      ...n
    }),
    void 0,
    "svelte-yeqcrn"
  );
  var s = d(i);
  return pt(s, r, "default", {}), u(i), _e("click", i, function(a) {
    Te.call(this, r, a);
  }), _e("keydown", i, function(a) {
    Te.call(this, r, a);
  }), _e("keyup", i, function(a) {
    Te.call(this, r, a);
  }), _e("keypress", i, function(a) {
    Te.call(this, r, a);
  }), _e("submit", i, function(a) {
    Te.call(this, r, a);
  }), _e("reset", i, function(a) {
    Te.call(this, r, a);
  }), _e("blur", i, function(a) {
    Te.call(this, r, a);
  }), _e("focus", i, function(a) {
    Te.call(this, r, a);
  }), _e("change", i, function(a) {
    Te.call(this, r, a);
  }), _e("mouseenter", i, function(a) {
    Te.call(this, r, a);
  }), _e("mouseleave", i, function(a) {
    Te.call(this, r, a);
  }), _e("mouseout", i, function(a) {
    Te.call(this, r, a);
  }), _e("mouseover", i, function(a) {
    Te.call(this, r, a);
  }), m(e, i), G({
    get variant() {
      return o();
    },
    set variant(a) {
      o(a), $();
    }
  });
}
K(r0, { variant: {} }, ["default"], [], !0);
function U6(e, r, t) {
  e.key === "Escape" ? r() : e.key === "Enter" && (e.ctrlKey || e.metaKey) && (e.preventDefault(), t());
}
var B6 = /* @__PURE__ */ P("<span>Cancel</span>"), Z6 = /* @__PURE__ */ P("<span> </span>"), F6 = /* @__PURE__ */ P('<div><div class="edit-form svelte-1m246yr"><textarea class="textarea svelte-1m246yr" placeholder="Edit your annotation..." rows="3"></textarea> <div class="controls svelte-1m246yr"><div class="actions svelte-1m246yr"><div class="attributes svelte-1m246yr"><div class="privacy-toggle svelte-1m246yr"><div class="icon-label svelte-1m246yr" title="Private"><!></div> <!> <div class="icon-label svelte-1m246yr" title="Public"><!></div></div></div> <!> <!></div></div></div> <div class="keyboard-hint svelte-1m246yr">Press <kbd class="svelte-1m246yr">Ctrl+Enter</kbd> to save, <kbd class="svelte-1m246yr">Esc</kbd> to cancel</div></div>');
const H6 = {
  hash: "svelte-1m246yr",
  code: `.annotation-edit.svelte-1m246yr {background:var(--clr-neutral-a0);border-radius:2rem;padding:1rem;margin:1rem 0;}.annotation-edit.private.svelte-1m246yr {background:var(--clr-warning-b0);}.annotation-edit.public.svelte-1m246yr {background:var(--clr-neutral-a0);}.edit-form.svelte-1m246yr {display:flex;flex-direction:column;gap:12px;}.textarea.svelte-1m246yr {padding:1rem;width:100%;box-sizing:border-box;margin-bottom:0.5rem;font-family:var(--font-serif);font-size:1rem;line-height:1.3;border-radius:1rem;border:none;outline:none;resize:none;background-color:var(--color-primary-100);color:var(--text-color);}.textarea.svelte-1m246yr:focus {background-color:var(--color-primary-200);}.controls.svelte-1m246yr {display:flex;justify-content:space-between;align-items:center;gap:1rem;}.actions.svelte-1m246yr {display:flex;gap:0.5rem;margin-top:1rem;justify-content:flex-end;}.attributes.svelte-1m246yr {display:flex;width:100%;gap:0.5rem;}.privacy-toggle.svelte-1m246yr {display:flex;align-items:center;gap:0.25rem;border-radius:1rem;}.privacy-toggle.svelte-1m246yr .toggle-field {margin:0;}.icon-label.svelte-1m246yr {display:flex;align-items:center;gap:4px;font-size:12px;color:var(--color-text-secondary, #666);transition:color 0.2s ease;}.keyboard-hint.svelte-1m246yr {font-size:0.875rem;color:var(--clr-neutral-a20);margin-top:8px;}kbd.svelte-1m246yr {padding:0.125rem 0.25rem;background:var(--clr-neutral-a10);border:1px solid var(--clr-neutral-a20);border-radius:0.25rem;font-size:0.75rem;font-family:monospace;}

  @media (max-width: 640px) {.form-controls.svelte-1m246yr {flex-direction:column;align-items:stretch;}.privacy-control.svelte-1m246yr {justify-content:space-between;}
  }`
};
function es(e, r) {
  V(r, !0), de(e, H6);
  const t = q(r, "annotation", 7), n = q(r, "onCancel", 7), o = q(r, "onSaved", 7);
  let i = /* @__PURE__ */ te(!1), s = /* @__PURE__ */ te(We(t().text || "")), a = /* @__PURE__ */ te(We(t().privacy)), l = /* @__PURE__ */ te(t().privacy === "public");
  const v = (D) => {
    I(l, D, !0), I(a, D ? "public" : "private", !0);
  };
  async function p() {
    var D;
    if (!c(s).trim()) {
      Xe({
        message: "Annotation text cannot be empty",
        type: "error",
        dismissible: !0,
        timeout: 3e3
      });
      return;
    }
    I(i, !0);
    try {
      if (await en(t().id, {
        text: c(s).trim(),
        privacy: c(a)
      }))
        Xe({
          message: "Annotation updated successfully",
          type: "success",
          dismissible: !0,
          timeout: 3e3
        }), (D = o()) == null || D();
      else
        throw new Error("Failed to update annotation");
    } catch (O) {
      console.error("Error updating annotation:", O), Xe({
        message: "Failed to update annotation",
        type: "error",
        dismissible: !0,
        timeout: 5e3
      });
    } finally {
      I(i, !1);
    }
  }
  function h() {
    var D;
    I(s, t().text || "", !0), I(l, t().privacy === "public"), (D = n()) == null || D();
  }
  function g(D) {
    return D.focus(), { destroy() {
    } };
  }
  var y = F6(), f = d(y), w = d(f);
  Wr(w), w.__keydown = [U6, h, p], Q0(() => mr(w, () => c(s), (D) => I(s, D))), ir(w, (D) => g == null ? void 0 : g(D));
  var z = _(w, 2), L = d(z), U = d(L), S = d(U), E = d(S), x = d(E);
  xt(x, { size: 24 }), u(E);
  var b = _(E, 2);
  yr(b, {
    id: "reply-privacy-toggle",
    name: "privacy",
    get checked() {
      return c(l);
    },
    $$events: {
      change: (D) => v(D.detail.checked)
    }
  });
  var C = _(b, 2), k = d(C);
  Vr(k, { size: 24 }), u(C), u(S), u(U);
  var A = _(U, 2);
  r0(A, {
    type: "button",
    onclick: h,
    get disabled() {
      return c(i);
    },
    children: (D, O) => {
      var H = B6();
      m(D, H);
    },
    $$slots: { default: !0 }
  });
  var R = _(A, 2);
  const W = /* @__PURE__ */ Ae(() => c(i) || !c(s).trim());
  return r0(R, {
    type: "button",
    variant: "primary",
    onclick: p,
    get disabled() {
      return c(W);
    },
    children: (D, O) => {
      var H = Z6(), X = d(H, !0);
      u(H), B(() => J(X, c(i) ? "Saving..." : "Save")), m(D, H);
    },
    $$slots: { default: !0 }
  }), u(L), u(z), u(f), qe(2), u(y), B(() => {
    ke(y, 1, `annotation-edit ${c(a) ?? ""}`, "svelte-1m246yr"), w.disabled = c(i);
  }), m(e, y), G({
    get annotation() {
      return t();
    },
    set annotation(D) {
      t(D), $();
    },
    get onCancel() {
      return n();
    },
    set onCancel(D) {
      n(D), $();
    },
    get onSaved() {
      return o();
    },
    set onSaved(D) {
      o(D), $();
    }
  });
}
Je(["keydown"]);
K(es, { annotation: {}, onCancel: {}, onSaved: {} }, [], [], !0);
var K6 = /* @__PURE__ */ P('<h4 class="svelte-1nuq5l3"> </h4>'), Y6 = /* @__PURE__ */ P('<div><!> <!> <div class="actions svelte-1nuq5l3"><!></div></div>');
const V6 = {
  hash: "svelte-1nuq5l3",
  code: "h4.svelte-1nuq5l3 {font-size:1rem;font-weight:500;margin:0 0 0 0.5rem;}.notification.svelte-1nuq5l3 {border-radius:1rem;background-color:var(--clr-neutral-a0);border:1px solid var(--clr-neutral-a10);padding:0.5rem;color:var(--clr-neutral-a40);font-size:0.825rem;text-align:center;}.notification-error.svelte-1nuq5l3 {background-color:var(--clr-danger-b0);border-color:var(--clr-danger-a0);color:var(--clr-danger-a0);}.notification-info.svelte-1nuq5l3 {background-color:var(--clr-info-b0);border-color:var(--clr-info-a0);color:var(--clr-info-a0);}.notification-success.svelte-1nuq5l3 {background-color:var(--clr-success-b0);border-color:var(--clr-success-a0);color:var(--clr-success-a0);}.notification-warning.svelte-1nuq5l3 {background-color:var(--clr-warning-b0);border-color:var(--clr-warning-a0);color:var(--clr-warning-a40);}.actions.svelte-1nuq5l3 {display:flex;justify-content:flex-end;margin-top:0.5rem;}"
};
function H0(e, r) {
  V(r, !0), de(e, V6);
  const t = q(r, "title", 7), n = q(r, "type", 7);
  var o = Y6(), i = d(o);
  {
    var s = (p) => {
      var h = K6(), g = d(h, !0);
      u(h), B(() => J(g, t())), m(p, h);
    };
    Z(i, (p) => {
      t() && p(s);
    });
  }
  var a = _(i, 2);
  pt(a, r, "content", {});
  var l = _(a, 2), v = d(l);
  return pt(v, r, "actions", {}), u(l), u(o), B(() => ke(o, 1, `notification notification-${n() ?? ""}`, "svelte-1nuq5l3")), m(e, o), G({
    get title() {
      return t();
    },
    set title(p) {
      t(p), $();
    },
    get type() {
      return n();
    },
    set type(p) {
      n(p), $();
    }
  });
}
K(H0, { title: {}, type: {} }, ["content", "actions"], [], !0);
var G6 = /* @__PURE__ */ P("<div><!> <!></div>");
function Gr(e, r) {
  V(r, !1);
  const t = () => {
    Ai();
  }, n = () => {
    Si();
  };
  c0();
  var o = G6(), i = d(o);
  {
    var s = (p) => {
      r0(p, {
        type: "button",
        variant: "primary",
        onclick: n,
        children: (h, g) => {
          qe();
          var y = ze();
          B(() => J(y, (se(ie), Q(() => ie.isLoading ? "Unsubscribing..." : "Cancel Subscription")))), m(h, y);
        },
        $$slots: { default: !0 }
      });
    }, a = (p, h) => {
      {
        var g = (f) => {
          r0(f, {
            type: "button",
            variant: "primary",
            onclick: t,
            children: (w, z) => {
              qe();
              var L = ze();
              B(() => J(L, (se(ie), Q(() => ie.isLoading ? "Cancelling..." : "Cancel Request")))), m(w, L);
            },
            $$slots: { default: !0 }
          });
        }, y = (f) => {
          r0(f, {
            type: "button",
            variant: "default",
            onclick: t,
            children: (w, z) => {
              qe();
              var L = ze();
              B(() => J(L, (se(ie), Q(() => ie.isLoading ? "Subscribing..." : "Subscribe")))), m(w, L);
            },
            $$slots: { default: !0 }
          });
        };
        Z(
          p,
          (f) => {
            se(ie), Q(() => {
              var w;
              return ie.subscription && ((w = ie.subscription) == null ? void 0 : w.moderation) === "pending";
            }) ? f(g) : f(y, !1);
          },
          h
        );
      }
    };
    Z(i, (p) => {
      se(ie), Q(() => {
        var h;
        return ie.subscription && ((h = ie.subscription) == null ? void 0 : h.moderation) === "approved";
      }) ? p(s) : p(a, !1);
    });
  }
  var l = _(i, 2);
  {
    var v = (p) => {
      H0(p, {
        type: "error",
        title: "Subscription error",
        $$slots: {
          content: (h, g) => {
            var y = ze();
            B(() => J(y, (se(ie), Q(() => ie.error.message)))), m(h, y);
          }
        }
      });
    };
    Z(l, (p) => {
      se(ie), Q(() => ie.error) && p(v);
    });
  }
  u(o), m(e, o), G();
}
K(Gr, {}, [], [], !0);
const X6 = (e, r) => {
  r(), n0("/");
};
var J6 = /* @__PURE__ */ P('<div class="actions svelte-1ey9qqe"><div class="attributes svelte-1ey9qqe"><div class="privacy-toggle svelte-1ey9qqe"><div class="icon-label svelte-1ey9qqe" title="Private"><!></div> <!> <div class="icon-label svelte-1ey9qqe" title="Public"><!></div></div></div> <button type="button" class="button block svelte-1ey9qqe" aria-live="polite"><span>Cancel</span></button> <button type="submit" class="button block svelte-1ey9qqe" aria-live="polite"><span> </span></button></div>'), Q6 = /* @__PURE__ */ P('<div class="field"><textarea id="annotation" class="textarea svelte-1ey9qqe" name="text" placeholder="What do you think?"></textarea></div> <!>', 1), e5 = /* @__PURE__ */ P('<div class="loading"><span>Loading...</span></div>'), t5 = /* @__PURE__ */ P('<div class="not-authenticated svelte-1ey9qqe"><span>Please log in to respond</span> <!></div>'), r5 = /* @__PURE__ */ P('<div class="not-authenticated svelte-1ey9qqe"><span>Subscription required to respond</span> <!></div>'), n5 = /* @__PURE__ */ P("<form><!></form>");
const o5 = {
  hash: "svelte-1ey9qqe",
  code: "form.svelte-1ey9qqe {margin-top:1rem;margin-bottom:1rem;border-radius:2rem;background-color:var(--color-primary-100);transition:background-color 0.7s ease;cursor:pointer;padding:1rem;}form.private.svelte-1ey9qqe {background-color:var(--clr-warning-b0);}form.public.svelte-1ey9qqe {background-color:var(--clr-neutral-a0);}.textarea.svelte-1ey9qqe {padding:1rem;}.textarea.svelte-1ey9qqe {padding:1rem;width:100%;box-sizing:border-box;margin:0;font-family:var(--font-serif);font-size:1rem;line-height:1.3;border-radius:0.75rem;border:none;outline:none;resize:none;background-color:var(--color-primary-100);color:var(--text-color);}.textarea.svelte-1ey9qqe:focus {background-color:var(--color-primary-200);}.actions.svelte-1ey9qqe {display:flex;gap:0.5rem;margin-top:1rem;justify-content:flex-end;}.attributes.svelte-1ey9qqe {display:flex;width:100%;gap:0.5rem;}.privacy-toggle.svelte-1ey9qqe {display:flex;align-items:center;gap:.25rem;border-radius:1rem;}.privacy-toggle.svelte-1ey9qqe .toggle-field {margin:0;}.icon-label.svelte-1ey9qqe {display:flex;align-items:center;gap:4px;font-size:12px;color:var(--color-text-secondary, #666);transition:color 0.2s ease;}.not-authenticated.svelte-1ey9qqe {display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;}button.svelte-1ey9qqe {padding:0.5rem 1rem;border-radius:1rem;border:none;outline:none;cursor:pointer;transition:background-color 0.7s ease;background-color:var(--color-grey-500);color:var(--color-grey-900);}button.svelte-1ey9qqe:hover {background-color:var(--color-grey-600);}button.svelte-1ey9qqe:disabled {background-color:var(--color-grey-400);cursor:not-allowed;color:var(--color-grey-600);}"
};
function ts(e, r) {
  V(r, !0), de(e, o5);
  const t = q(r, "annotationId", 7);
  let n = /* @__PURE__ */ te(""), o = /* @__PURE__ */ te(!1), i = /* @__PURE__ */ te("public"), s = /* @__PURE__ */ te(!0), a = /* @__PURE__ */ te(null);
  De(() => {
    c(n).length > 0 ? I(o, !0) : I(o, !1);
  });
  const l = (f) => {
    I(s, f, !0), I(i, f ? "public" : "private", !0);
  };
  De(() => {
    Y.currentAnnotationId && Y.currentAnnotationId === t() && !c(o) && setTimeout(
      () => {
        c(a) && c(a).focus();
      },
      100
    );
  });
  const v = () => {
    I(n, ""), I(o, !1), I(i, "public"), I(s, !0);
  };
  async function p(f) {
    var w;
    f.preventDefault(), await vi({
      annotation_id: t(),
      text: c(n),
      profile_id: ((w = N.user) == null ? void 0 : w.id) ?? "",
      privacy: c(i)
    }), v();
  }
  var h = Ue(), g = ae(h);
  {
    var y = (f) => {
      var w = n5(), z = d(w);
      {
        var L = (S) => {
          var E = Q6(), x = ae(E), b = d(x);
          Wr(b), lt(b, (A) => I(a, A), () => c(a)), u(x);
          var C = _(x, 2);
          {
            var k = (A) => {
              var R = J6(), W = d(R), D = d(W), O = d(D), H = d(O);
              xt(H, { size: 24 }), u(O);
              var X = _(O, 2);
              yr(X, {
                id: "reply-privacy-toggle",
                name: "privacy",
                get checked() {
                  return c(s);
                },
                $$events: {
                  change: (ue) => l(ue.detail.checked)
                }
              });
              var ne = _(X, 2), T = d(ne);
              Vr(T, { size: 24 }), u(ne), u(D), u(W);
              var M = _(W, 2);
              M.__click = [X6, v];
              var F = _(M, 2), re = d(F), oe = d(re, !0);
              u(re), u(F), u(R), B(() => {
                F.disabled = be.loading || !c(o), J(oe, be.loading ? "Loading" : "Respond");
              }), m(A, R);
            };
            Z(C, (A) => {
              c(o) && A(k);
            });
          }
          mr(b, () => c(n), (A) => I(n, A)), m(S, E);
        }, U = (S) => {
          var E = Ue(), x = ae(E);
          {
            var b = (k) => {
              var A = e5();
              m(k, A);
            }, C = (k, A) => {
              {
                var R = (D) => {
                  var O = t5(), H = _(d(O), 2);
                  r0(H, {
                    type: "button",
                    variant: "primary",
                    onclick: () => n0("/login"),
                    children: (X, ne) => {
                      qe();
                      var T = ze("Log in");
                      m(X, T);
                    },
                    $$slots: { default: !0 }
                  }), u(O), m(D, O);
                }, W = (D, O) => {
                  {
                    var H = (X) => {
                      var ne = r5(), T = _(d(ne), 2);
                      Gr(T, {}), u(ne), m(X, ne);
                    };
                    Z(
                      D,
                      (X) => {
                        var ne;
                        N.isAuthenticated && ((ne = ie.subscription) == null ? void 0 : ne.moderation) === "approved" && X(H);
                      },
                      O
                    );
                  }
                };
                Z(
                  k,
                  (D) => {
                    N.isAuthenticated ? D(W, !1) : D(R);
                  },
                  A
                );
              }
            };
            Z(x, (k) => {
              N.isLoading ? k(b) : k(C, !1);
            });
          }
          m(S, E);
        };
        Z(z, (S) => {
          N.isAuthenticated ? S(L) : S(U, !1);
        });
      }
      u(w), B(() => ke(w, 1, et(c(i)), "svelte-1ey9qqe")), _e("submit", w, p), m(f, w);
    };
    Z(g, (f) => {
      t() && Y.currentAnnotationId === t() && !Y.editingAnnotationId && f(y);
    });
  }
  return m(e, h), G({
    get annotationId() {
      return t();
    },
    set annotationId(f) {
      t(f), $();
    }
  });
}
Je(["click"]);
K(ts, { annotationId: {} }, [], [], !0);
function i5(e) {
  const t = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), n = Math.floor(t / 1e3), o = Math.floor(n / 60), i = Math.floor(o / 60), s = Math.floor(i / 24), a = Math.floor(s / 30), l = Math.floor(a / 12);
  return l > 0 ? `${l} years ago` : a > 0 ? `${a} months ago` : s > 0 ? `${s} days ago` : i > 0 ? `${i} hours ago` : o > 0 ? `${o} minutes ago` : "just now";
}
var s5 = /* @__PURE__ */ P("<!> <!>", 1), a5 = /* @__PURE__ */ P('<div class="reply-controls svelte-193a07k"><!> <!></div>');
const l5 = {
  hash: "svelte-193a07k",
  code: ".reply-controls.svelte-193a07k {margin-top:0.25rem;display:flex;justify-content:flex-end;}"
};
function rs(e, r) {
  V(r, !0), de(e, l5);
  const t = q(r, "reply", 7);
  function n(p) {
    p.stopPropagation(), cr(t().id);
  }
  async function o(p) {
    if (p.stopPropagation(), confirm("Are you sure you want to delete this reply?")) {
      const h = await gi(t().id);
      Xe(h ? {
        message: "Reply deleted successfully",
        type: "success",
        dismissible: !0,
        timeout: 3e3
      } : {
        message: "Failed to delete reply",
        type: "error",
        dismissible: !0,
        timeout: 5e3
      });
    }
  }
  function i() {
    console.log("Mention author:");
  }
  var s = a5(), a = d(s);
  {
    var l = (p) => {
      xt(p, { size: 16 });
    };
    Z(a, (p) => {
      var h;
      ((h = t()) == null ? void 0 : h.privacy) === "private" && p(l);
    });
  }
  var v = _(a, 2);
  return Kr(v, {
    children: (p, h) => {
      var g = Ue(), y = ae(g);
      {
        var f = (z) => {
          var L = s5(), U = ae(L);
          Ve(U, {
            stopPropagation: !0,
            onclick: n,
            ariaLabel: "Edit reply",
            size: "xs",
            children: (E, x) => {
              qe();
              var b = ze("Edit");
              m(E, b);
            },
            $$slots: { default: !0 }
          });
          var S = _(U, 2);
          Ve(S, {
            stopPropagation: !0,
            onclick: o,
            ariaLabel: "Delete reply",
            size: "xs",
            children: (E, x) => {
              qe();
              var b = ze("Delete");
              m(E, b);
            },
            $$slots: { default: !0 }
          }), m(z, L);
        }, w = (z) => {
          Ve(z, {
            stopPropagation: !0,
            onclick: i,
            ariaLabel: "Mention author",
            size: "xs",
            children: (L, U) => {
              qe();
              var S = ze("Mention author");
              m(L, S);
            },
            $$slots: { default: !0 }
          });
        };
        Z(y, (z) => {
          var L, U, S;
          ((U = (L = t()) == null ? void 0 : L.profile) == null ? void 0 : U.id) === ((S = N.user) == null ? void 0 : S.id) ? z(f) : z(w, !1);
        });
      }
      m(p, g);
    },
    $$slots: { default: !0 }
  }), u(s), m(e, s), G({
    get reply() {
      return t();
    },
    set reply(p) {
      t(p), $();
    }
  });
}
K(rs, { reply: {} }, [], [], !0);
function c5(e, r, t) {
  e.key === "Escape" ? r() : e.key === "Enter" && (e.ctrlKey || e.metaKey) && (e.preventDefault(), t());
}
var u5 = /* @__PURE__ */ P('<div><div class="edit-form"><div class="field svelte-1ite45k"><textarea class="textarea svelte-1ite45k" placeholder="Edit your reply..." rows="3"></textarea></div> <div class="controls"><div class="actions svelte-1ite45k"><div class="attributes svelte-1ite45k"><div class="privacy-toggle svelte-1ite45k"><div class="icon-label svelte-1ite45k" title="Private"><!></div> <!> <div class="icon-label svelte-1ite45k" title="Public"><!></div></div></div> <!> <!></div></div> <div class="keyboard-shortcuts svelte-1ite45k"><small>Press <kbd class="svelte-1ite45k">Ctrl+Enter</kbd> to save, <kbd class="svelte-1ite45k">Esc</kbd> to cancel</small></div></div></div>');
const d5 = {
  hash: "svelte-1ite45k",
  code: ".reply-edit.svelte-1ite45k {background:var(--clr-neutral-a0);border-radius:1rem;padding:1rem;margin:0.5rem 0;}.reply-edit.private.svelte-1ite45k {background:var(--clr-warning-b0);}.reply-edit.public.svelte-1ite45k {background:var(--clr-neutral-a0);}.field.svelte-1ite45k {margin-bottom:1rem;}.textarea.svelte-1ite45k {padding:1rem;}.textarea.svelte-1ite45k {padding:1rem;width:100%;box-sizing:border-box;margin:0;font-family:var(--font-serif);font-size:1rem;line-height:1.3;border-radius:0.75rem;border:none;outline:none;resize:none;background-color:var(--color-primary-100);color:var(--text-color);}.textarea.svelte-1ite45k:focus {background-color:var(--color-primary-200);}.actions.svelte-1ite45k {display:flex;gap:0.5rem;margin-top:1rem;justify-content:flex-end;}.attributes.svelte-1ite45k {display:flex;width:100%;gap:0.5rem;}.privacy-toggle.svelte-1ite45k {display:flex;align-items:center;gap:0.25rem;border-radius:1rem;}.privacy-toggle.svelte-1ite45k .toggle-field {margin:0;}.icon-label.svelte-1ite45k {display:flex;align-items:center;gap:4px;font-size:12px;color:var(--color-text-secondary, #666);transition:color 0.2s ease;}.keyboard-shortcuts.svelte-1ite45k {text-align:center;color:var(--clr-neutral-500);}kbd.svelte-1ite45k {padding:0.125rem 0.25rem;background:var(--clr-neutral-200);border:1px solid var(--clr-neutral-300);border-radius:0.25rem;font-size:0.75rem;font-family:monospace;}"
};
function ns(e, r) {
  V(r, !0), de(e, d5);
  const t = q(r, "reply", 7), n = q(r, "onCancel", 7), o = q(r, "onSaved", 7);
  let i = /* @__PURE__ */ te(!1), s = /* @__PURE__ */ te(We(t().text || "")), a = /* @__PURE__ */ te(We(t().privacy)), l = /* @__PURE__ */ te(t().privacy === "public");
  const v = (O) => {
    I(l, O, !0), I(a, O ? "public" : "private", !0);
  };
  async function p() {
    var O;
    if (!c(s).trim()) {
      Xe({
        message: "Reply text cannot be empty",
        type: "error",
        dismissible: !0,
        timeout: 3e3
      });
      return;
    }
    I(i, !0);
    try {
      if (await hi(t().id, {
        text: c(s).trim(),
        privacy: c(a)
      }))
        Xe({
          message: "Reply updated successfully",
          type: "success",
          dismissible: !0,
          timeout: 3e3
        }), (O = o()) == null || O();
      else
        throw new Error("Failed to update reply");
    } catch (H) {
      console.error("Error updating reply:", H), Xe({
        message: "Failed to update reply",
        type: "error",
        dismissible: !0,
        timeout: 5e3
      });
    } finally {
      I(i, !1);
    }
  }
  function h() {
    var O;
    I(s, t().text || "", !0), I(l, t().privacy === "public"), cr(null), (O = n()) == null || O();
  }
  function g(O) {
    return O.focus(), { destroy() {
    } };
  }
  var y = u5(), f = d(y), w = d(f), z = d(w);
  Wr(z), z.__keydown = [c5, h, p], Q0(() => mr(z, () => c(s), (O) => I(s, O))), ir(z, (O) => g == null ? void 0 : g(O)), u(w);
  var L = _(w, 2), U = d(L), S = d(U), E = d(S), x = d(E), b = d(x);
  xt(b, { size: 24 }), u(x);
  var C = _(x, 2);
  yr(C, {
    id: "reply-privacy-toggle",
    name: "privacy",
    get checked() {
      return c(l);
    },
    $$events: {
      change: (O) => v(O.detail.checked)
    }
  });
  var k = _(C, 2), A = d(k);
  Vr(A, { size: 24 }), u(k), u(E), u(S);
  var R = _(S, 2);
  r0(R, {
    type: "button",
    onclick: h,
    get disabled() {
      return c(i);
    },
    class: "button block",
    children: (O, H) => {
      qe();
      var X = ze("Cancel");
      m(O, X);
    },
    $$slots: { default: !0 }
  });
  var W = _(R, 2);
  const D = /* @__PURE__ */ Ae(() => c(i) || !c(s).trim());
  return r0(W, {
    type: "button",
    onclick: p,
    "aria-live": "polite",
    get disabled() {
      return c(D);
    },
    class: "button block",
    children: (O, H) => {
      qe();
      var X = ze();
      B(() => J(X, c(i) ? "Saving..." : "Save")), m(O, X);
    },
    $$slots: { default: !0 }
  }), u(U), u(L), qe(2), u(f), u(y), B(() => {
    ke(y, 1, `reply-edit ${c(a) ?? ""}`, "svelte-1ite45k"), z.disabled = c(i);
  }), m(e, y), G({
    get reply() {
      return t();
    },
    set reply(O) {
      t(O), $();
    },
    get onCancel() {
      return n();
    },
    set onCancel(O) {
      n(O), $();
    },
    get onSaved() {
      return o();
    },
    set onSaved(O) {
      o(O), $();
    }
  });
}
Je(["keydown"]);
K(ns, { reply: {}, onCancel: {}, onSaved: {} }, [], [], !0);
var f5 = /* @__PURE__ */ P('<div class="reply-text svelte-1sy8vfs"> </div>'), v5 = /* @__PURE__ */ P('<div><div class="reply-meta svelte-1sy8vfs"><div class="left svelte-1sy8vfs"><div class="info svelte-1sy8vfs"><a class="svelte-1sy8vfs"><span class="name svelte-1sy8vfs"> </span></a> <span class="time svelte-1sy8vfs"> </span></div></div> <div class="right"><!></div></div> <!></div>'), h5 = /* @__PURE__ */ P('<div class="reply-item svelte-1sy8vfs"><div class="reply-text svelte-1sy8vfs">Reply missing</div></div>');
const g5 = {
  hash: "svelte-1sy8vfs",
  code: ".reply-item.svelte-1sy8vfs {font-size:1.1em;padding:0.375rem 0;margin-bottom:0.75rem;}.reply-item.private.svelte-1sy8vfs .reply-text:where(.svelte-1sy8vfs) {background-color:var(--clr-warning-b0);}.reply-meta.svelte-1sy8vfs {font-size:1rem;margin-bottom:0.25rem;display:flex;justify-content:space-between;}.reply-text.svelte-1sy8vfs {margin-top:0.5rem;padding:1rem;border-radius:2rem;}.left.svelte-1sy8vfs {display:flex;gap:0.5rem;}.info.svelte-1sy8vfs {display:flex;flex-direction:column;font-family:var(--font-sans);}.info.svelte-1sy8vfs a:where(.svelte-1sy8vfs) {text-decoration:none;color:var(--color-grey-900);}.info.svelte-1sy8vfs .name:where(.svelte-1sy8vfs) {margin:0;line-height:1;font-weight:600;font-size:1rem;text-decoration:none;color:var(--color-grey-900);}.info.svelte-1sy8vfs .time:where(.svelte-1sy8vfs) {margin:0;font-size:0.8rem;color:var(--color-grey-600);}"
};
function os(e, r) {
  V(r, !0), de(e, g5);
  const t = q(r, "reply", 7);
  let n = /* @__PURE__ */ Ae(() => t().created_at ? i5(new Date(t().created_at)) : ""), o = /* @__PURE__ */ Ae(() => be.editingReplyId === t().id);
  var i = Ue(), s = ae(i);
  {
    var a = (v) => {
      var p = v5(), h = d(p), g = d(h), y = d(g), f = d(y), w = d(f), z = d(w, !0);
      u(w), u(f);
      var L = _(f, 2), U = d(L, !0);
      u(L), u(y), u(g);
      var S = _(g, 2), E = d(S);
      rs(E, {
        get reply() {
          return t();
        }
      }), u(S), u(h);
      var x = _(h, 2);
      {
        var b = (k) => {
          ns(k, {
            get reply() {
              return t();
            },
            onCancel: () => cr(null),
            onSaved: () => cr(null)
          });
        }, C = (k) => {
          var A = f5(), R = d(A, !0);
          u(A), B(() => J(R, t().text)), m(k, A);
        };
        Z(x, (k) => {
          c(o) ? k(b) : k(C, !1);
        });
      }
      u(p), B(() => {
        var k, A;
        ke(p, 1, `reply-item ${t().privacy ?? ""}`, "svelte-1sy8vfs"), j(f, "href", `${Re.serverUrl ?? ""}/p/${((k = t().profile) == null ? void 0 : k.username) ?? ""}`), J(z, ((A = t().profile) == null ? void 0 : A.full_name) || "Anonymous"), J(U, c(n));
      }), m(v, p);
    }, l = (v) => {
      var p = h5();
      m(v, p);
    };
    Z(s, (v) => {
      t() ? v(a) : v(l, !1);
    });
  }
  return m(e, i), G({
    get reply() {
      return t();
    },
    set reply(v) {
      t(v), $();
    }
  });
}
K(os, { reply: {} }, [], [], !0);
var p5 = /* @__PURE__ */ P('<div class="no-replies svelte-195hqyl"><p>Loading replies...</p></div>'), m5 = /* @__PURE__ */ P('<div class="no-replies svelte-195hqyl"><p>No replies yet</p></div>'), y5 = /* @__PURE__ */ P('<div class="replies svelte-195hqyl"><!></div>');
const b5 = {
  hash: "svelte-195hqyl",
  code: '.replies.svelte-195hqyl {margin-top:0.5rem;padding-left:2rem;position:relative;}.replies.svelte-195hqyl::before {content:"";position:absolute;left:.9rem;top:1rem;bottom:2rem;width:.2rem;background-color:var(--color-grey-300);border-radius:.25rem;}.no-replies.svelte-195hqyl {font-size:0.8rem;color:var(--color-grey-500);font-style:italic;padding:0.25rem 0;}'
};
function is(e, r) {
  V(r, !0), de(e, b5);
  const t = q(r, "annotationId", 7);
  De(() => {
    t() === Y.currentAnnotationId && fi();
  });
  var n = Ue(), o = ae(n);
  {
    var i = (s) => {
      var a = y5(), l = d(a);
      {
        var v = (h) => {
          var g = Ue(), y = ae(g);
          j0(y, 17, () => be.replies, (f) => f.id, (f, w) => {
            os(f, {
              get reply() {
                return c(w);
              }
            });
          }), m(h, g);
        }, p = (h, g) => {
          {
            var y = (w) => {
              var z = p5();
              m(w, z);
            }, f = (w) => {
              var z = m5();
              m(w, z);
            };
            Z(
              h,
              (w) => {
                be.loading ? w(y) : w(f, !1);
              },
              g
            );
          }
        };
        Z(l, (h) => {
          be.replies.length > 0 ? h(v) : h(p, !1);
        });
      }
      u(a), m(s, a);
    };
    Z(o, (s) => {
      t() === Y.currentAnnotationId && s(i);
    });
  }
  return m(e, n), G({
    get annotationId() {
      return t();
    },
    set annotationId(s) {
      t(s), $();
    }
  });
}
K(is, { annotationId: {} }, [], [], !0);
var w5 = /* @__PURE__ */ P('<div class="privacy svelte-o5rn27"><!></div>'), _5 = /* @__PURE__ */ P('<button class="quote svelte-o5rn27" tabindex="0" aria-label="Highlight annotation"><!> <span class="svelte-o5rn27"> </span></button>'), x5 = /* @__PURE__ */ P('<div class="text svelte-o5rn27"> </div>'), C5 = /* @__PURE__ */ P("<!> ", 1), z5 = /* @__PURE__ */ P('<div><!> <div class="meta svelte-o5rn27"><div class="left svelte-o5rn27"><div class="info svelte-o5rn27"><a class="svelte-o5rn27"><span class="name svelte-o5rn27"> </span></a> <span class="time svelte-o5rn27"> </span></div></div> <div class="right"><!></div></div> <!> <div class="actions svelte-o5rn27"><!></div> <!> <!></div>');
const k5 = {
  hash: "svelte-o5rn27",
  code: `.item.svelte-o5rn27 {margin-bottom:1rem;border-radius:1rem;width:100%;box-sizing:border-box;}.selected.svelte-o5rn27 {position:absolute;}.meta.svelte-o5rn27 {font-size:1rem;margin-bottom:0.25rem;display:flex;padding:0;justify-content:space-between;}.quote.svelte-o5rn27 {padding:1rem;border:0;border-radius:2rem;display:block;width:100%;box-sizing:border-box;text-align:left;cursor:pointer;font-family:var(--font-serif);font-size:1.25rem;line-height:1.3;margin-bottom:1rem;background-color:var(--color-primary-100);transition:transform 0.2s ease,
      box-shadow 0.2s ease;box-shadow:1px 1px 1px rgba(0, 0, 0, 0.1);}.quote.svelte-o5rn27:hover {transform:translateY(-1px);box-shadow:1px 1.5px 1px rgba(0, 0, 0, 0.15);}.quote.svelte-o5rn27 span:where(.svelte-o5rn27) {background-color:rgb(239, 158, 255);border-left:.2rem solid rgb(239, 158, 255);border-right:.2rem solid rgb(239, 158, 255);}.hovered.svelte-o5rn27 .quote:where(.svelte-o5rn27) span:where(.svelte-o5rn27) {background-color:rgba(212, 0, 255);border-color:rgba(212, 0, 255);}.privacy.svelte-o5rn27 {display:inline;}.item.private.svelte-o5rn27 .quote:where(.svelte-o5rn27) {background:var(--clr-warning-b0);}.item.public.svelte-o5rn27 .quote:where(.svelte-o5rn27) {background:var(--clr-neutral-a0);}.text.svelte-o5rn27 {padding:0 1rem 1rem 1rem;margin-bottom:0.5rem;}.left.svelte-o5rn27 {display:flex;gap:0.5rem;}.info.svelte-o5rn27 {display:flex;flex-direction:column;font-family:var(--font-sans);}.info.svelte-o5rn27 a:where(.svelte-o5rn27) {text-decoration:none;color:var(--color-grey-900);}.info.svelte-o5rn27 .name:where(.svelte-o5rn27) {margin:0;line-height:1;font-weight:600;}.info.svelte-o5rn27 .time:where(.svelte-o5rn27) {margin:0;font-size:0.825rem;color:var(--color-grey-600);}.actions.svelte-o5rn27 {font-size:0.8em;display:flex;justify-content:flex-end;}`
};
function ln(e, r) {
  V(r, !0), de(e, k5);
  const t = q(r, "annotation", 7);
  let n = /* @__PURE__ */ Ae(() => Y.editingAnnotationId === t().id);
  function o() {
    Y.currentAnnotationId === t().id || n0(`/annotation/${t().id}`);
  }
  function i() {
    x1(t().id);
  }
  function s() {
    x1(null);
  }
  function a() {
    jr(null);
  }
  function l() {
    jr(null);
  }
  let v = /* @__PURE__ */ Ae(() => t().created_at ? qt(new Date(t().created_at)) : ""), p = /* @__PURE__ */ Ae(() => pe.indicators.find((T) => T.annotations.some((M) => M.id === t().id))), h = /* @__PURE__ */ Ae(() => c(p) ? c(p).y : 0);
  var g = z5(), y = d(g);
  {
    var f = (T) => {
      var M = _5();
      M.__click = o;
      var F = d(M);
      {
        var re = (le) => {
          var Le = w5(), ee = d(Le);
          xt(ee, { size: 16 }), u(Le), m(le, Le);
        };
        Z(F, (le) => {
          t().privacy === "private" && le(re);
        });
      }
      var oe = _(F, 2), ue = d(oe, !0);
      u(oe), u(M), B(() => J(ue, t().quote)), m(T, M);
    };
    Z(y, (T) => {
      t().quote && T(f);
    });
  }
  var w = _(y, 2), z = d(w), L = d(z), U = d(L), S = d(U), E = d(S, !0);
  u(S), u(U);
  var x = _(U, 2), b = d(x, !0);
  u(x), u(L), u(z);
  var C = _(z, 2), k = d(C);
  Qi(k, {
    get annotation() {
      return t();
    }
  }), u(C), u(w);
  var A = _(w, 2);
  {
    var R = (T) => {
      es(T, {
        get annotation() {
          return t();
        },
        onCancel: a,
        onSaved: l
      });
    }, W = (T) => {
      var M = x5(), F = d(M, !0);
      u(M), B(() => J(F, t().text)), m(T, M);
    };
    Z(A, (T) => {
      c(n) ? T(R) : T(W, !1);
    });
  }
  var D = _(A, 2), O = d(D);
  {
    var H = (T) => {
      Ve(T, {
        size: "xs",
        tabindex: "0",
        onclick: o,
        onmouseover: i,
        onmouseout: s,
        onkeydown: (M) => M.key === "Enter" && o(),
        children: (M, F) => {
          var re = C5(), oe = ae(re);
          Hr(oe, { color: "var(--text-color)" });
          var ue = _(oe);
          B(() => J(ue, `   Show ${(t().repliesCount || 0) ?? ""} repl${t().repliesCount === 1 ? "y" : "ies"}`)), m(M, re);
        },
        $$slots: { default: !0 }
      });
    };
    Z(O, (T) => {
      t().repliesCount && Y.currentAnnotationId !== t().id && T(H);
    });
  }
  u(D);
  var X = _(D, 2);
  ts(X, {
    get annotationId() {
      return t().id;
    }
  });
  var ne = _(X, 2);
  return is(ne, {
    get annotationId() {
      return t().id;
    }
  }), u(g), B(() => {
    var T, M, F;
    ke(g, 1, `item ${Y.hoveredAnnotationId === t().id ? "hovered" : ""} ${Y.currentAnnotationId === t().id ? "selected" : ""} ${t().privacy === "private" ? "private" : "public"}`, "svelte-o5rn27"), Ze(g, `top: ${c(h)}px; left: 0;`), j(g, "aria-label", `Annotation by ${((T = t().profile) == null ? void 0 : T.full_name) || "Anonymous"}`), j(U, "href", Re.serverUrl + "/p/" + ((M = t().profile) == null ? void 0 : M.username)), J(E, ((F = t().profile) == null ? void 0 : F.full_name) || "Anonymous"), J(b, c(v));
  }), m(e, g), G({
    get annotation() {
      return t();
    },
    set annotation(T) {
      t(T), $();
    }
  });
}
Je(["click"]);
K(ln, { annotation: {} }, [], [], !0);
function L5() {
  var e, r;
  J1({
    page: ((e = Y.pagination) == null ? void 0 : e.page) || 2,
    pageSize: ((r = Y.pagination) == null ? void 0 : r.pageSize) || 100
  });
}
var E5 = /* @__PURE__ */ P('<div class="no-annotations svelte-1b3s641"><p>No annotations found</p></div>'), A5 = /* @__PURE__ */ P('<div class="filter-section svelte-1b3s641"><h4 class="svelte-1b3s641">Privacy</h4> <div class="filter-options svelte-1b3s641"><!> <!> <!></div></div> <div class="filter-section svelte-1b3s641"><h4 class="svelte-1b3s641">Content Type</h4> <div class="filter-options svelte-1b3s641"><!> <!> <!></div></div>', 1), S5 = /* @__PURE__ */ P('<div class="no-results svelte-1b3s641"><p>No annotations match the current filters</p></div>'), $5 = /* @__PURE__ */ P('<button class="svelte-1b3s641">load more</button>'), q5 = /* @__PURE__ */ P('<header class="svelte-1b3s641"><div class="header-content svelte-1b3s641"><div class="title svelte-1b3s641"><!> <small class="svelte-1b3s641"> </small></div> <div class="filters svelte-1b3s641"><!></div></div></header> <!> <!> <!>', 1), j5 = /* @__PURE__ */ P('<div class="list svelte-1b3s641"><!></div>');
const I5 = {
  hash: "svelte-1b3s641",
  code: `:host {display:block;}.list.svelte-1b3s641 {display:flex;flex-direction:column;gap:0.5rem;}header.svelte-1b3s641 {margin-bottom:1rem;}.header-content.svelte-1b3s641 {display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0;}.title.svelte-1b3s641 {font-weight:600;display:flex;flex-direction:column;gap:0.25rem;}.title.svelte-1b3s641 small:where(.svelte-1b3s641) {font-weight:400;color:var(--color-grey-600);font-size:0.875rem;}.filters.svelte-1b3s641 {position:relative;}.filter-section.svelte-1b3s641 {margin-bottom:1rem;}.filter-section.svelte-1b3s641:last-child {margin-bottom:0;}.filter-section.svelte-1b3s641 h4:where(.svelte-1b3s641) {margin:0 0 0.5rem 0;font-size:0.875rem;font-weight:600;color:var(--color-grey-700);}.filter-options.svelte-1b3s641 {display:flex;gap:0.25rem;flex-wrap:wrap;}.no-annotations.svelte-1b3s641,
  .no-results.svelte-1b3s641 {text-align:center;color:var(--color-grey-600);padding:2rem;}button.svelte-1b3s641 {padding:0.5rem 1rem;background:var(--color-primary-500);color:white;border:none;border-radius:0.375rem;cursor:pointer;font-size:0.875rem;}button.svelte-1b3s641:hover {background:var(--color-primary-600);}`
};
function ss(e, r) {
  V(r, !0), de(e, I5);
  let t = /* @__PURE__ */ te("all"), n = /* @__PURE__ */ te("all");
  const o = /* @__PURE__ */ Ae(() => {
    let h = Y.annotations;
    if (console.log("=== FILTER DEBUG ==="), console.log("Total annotations:", h.length), console.log("Privacy filter:", c(t)), console.log("Content filter:", c(n)), h.length > 0 && console.log("Sample annotation:", {
      id: h[0].id,
      privacy: h[0].privacy,
      text: h[0].text,
      hasText: !!h[0].text
    }), c(t) !== "all") {
      const g = h.length;
      h = h.filter((y) => y.privacy === c(t)), console.log(`Privacy filter (${c(t)}): ${g} → ${h.length}`);
    }
    if (c(n) === "highlights") {
      const g = h.length;
      h = h.filter((y) => !y.text || y.text === null || y.text.trim() === ""), console.log(`Highlights filter: ${g} → ${h.length}`);
    } else if (c(n) === "annotations") {
      const g = h.length;
      h = h.filter((y) => y.text && y.text !== null && y.text.trim() !== ""), console.log(`Annotations filter: ${g} → ${h.length}`);
    }
    return console.log("Final filtered count:", h.length), h;
  }), i = /* @__PURE__ */ Ae(() => {
    var h, g;
    return Math.ceil((((h = Y.pagination) == null ? void 0 : h.total) || 0) / (((g = Y.pagination) == null ? void 0 : g.pageSize) || 100));
  });
  function s(h) {
    I(t, h, !0);
  }
  function a(h) {
    I(n, h, !0);
  }
  var l = Ue(), v = ae(l);
  {
    var p = (h) => {
      var g = j5(), y = d(g);
      {
        var f = (z) => {
          var L = E5();
          m(z, L);
        }, w = (z) => {
          var L = q5(), U = ae(L), S = d(U), E = d(S), x = d(E);
          {
            var b = (T) => {
              var M = ze();
              B(() => J(M, `Annotations (${c(o).length ?? ""})`)), m(T, M);
            }, C = (T) => {
              var M = Ue(), F = ae(M);
              {
                var re = (ue) => {
                  var le = ze();
                  B((Le, ee) => J(le, `${Le ?? ""} ${ee ?? ""} (${c(o).length ?? ""})`), [
                    () => c(t).charAt(0).toUpperCase() + c(t).slice(1),
                    () => c(n).charAt(0).toUpperCase() + c(n).slice(1)
                  ]), m(ue, le);
                }, oe = (ue, le) => {
                  {
                    var Le = (fe) => {
                      var ye = ze();
                      B((Ce) => J(ye, `${Ce ?? ""} Annotations (${c(o).length ?? ""})`), [
                        () => c(t).charAt(0).toUpperCase() + c(t).slice(1)
                      ]), m(fe, ye);
                    }, ee = (fe) => {
                      var ye = ze();
                      B((Ce) => J(ye, `${Ce ?? ""} (${c(o).length ?? ""})`), [
                        () => c(n).charAt(0).toUpperCase() + c(n).slice(1)
                      ]), m(fe, ye);
                    };
                    Z(
                      ue,
                      (fe) => {
                        c(t) !== "all" ? fe(Le) : fe(ee, !1);
                      },
                      le
                    );
                  }
                };
                Z(F, (ue) => {
                  c(t) !== "all" && c(n) !== "all" ? ue(re) : ue(oe, !1);
                });
              }
              m(T, M);
            };
            Z(x, (T) => {
              c(t) === "all" && c(n) === "all" ? T(b) : T(C, !1);
            });
          }
          var k = _(x, 2), A = d(k);
          u(k), u(E);
          var R = _(E, 2), W = d(R);
          Kr(W, {
            label: "Filter annotations",
            children: (T, M) => {
              var F = A5(), re = ae(F), oe = _(d(re), 2), ue = d(oe);
              const le = /* @__PURE__ */ Ae(() => c(t) === "all" ? "primary" : "ghost");
              Ve(ue, {
                onclick: () => s("all"),
                size: "xs",
                get variant() {
                  return c(le);
                },
                children: (Qe, U0) => {
                  qe();
                  var e0 = ze("All");
                  m(Qe, e0);
                },
                $$slots: { default: !0 }
              });
              var Le = _(ue, 2);
              const ee = /* @__PURE__ */ Ae(() => c(t) === "public" ? "primary" : "ghost");
              Ve(Le, {
                onclick: () => s("public"),
                size: "xs",
                get variant() {
                  return c(ee);
                },
                children: (Qe, U0) => {
                  qe();
                  var e0 = ze("Public");
                  m(Qe, e0);
                },
                $$slots: { default: !0 }
              });
              var fe = _(Le, 2);
              const ye = /* @__PURE__ */ Ae(() => c(t) === "private" ? "primary" : "ghost");
              Ve(fe, {
                onclick: () => s("private"),
                size: "xs",
                get variant() {
                  return c(ye);
                },
                children: (Qe, U0) => {
                  qe();
                  var e0 = ze("Private");
                  m(Qe, e0);
                },
                $$slots: { default: !0 }
              }), u(oe), u(re);
              var Ce = _(re, 2), Ee = _(d(Ce), 2), $e = d(Ee);
              const Be = /* @__PURE__ */ Ae(() => c(n) === "all" ? "primary" : "ghost");
              Ve($e, {
                onclick: () => a("all"),
                size: "xs",
                get variant() {
                  return c(Be);
                },
                children: (Qe, U0) => {
                  qe();
                  var e0 = ze("All");
                  m(Qe, e0);
                },
                $$slots: { default: !0 }
              });
              var He = _($e, 2);
              const Oe = /* @__PURE__ */ Ae(() => c(n) === "annotations" ? "primary" : "ghost");
              Ve(He, {
                onclick: () => a("annotations"),
                size: "xs",
                get variant() {
                  return c(Oe);
                },
                children: (Qe, U0) => {
                  qe();
                  var e0 = ze("Annotations");
                  m(Qe, e0);
                },
                $$slots: { default: !0 }
              });
              var E0 = _(He, 2);
              const R0 = /* @__PURE__ */ Ae(() => c(n) === "highlights" ? "primary" : "ghost");
              Ve(E0, {
                onclick: () => a("highlights"),
                size: "xs",
                get variant() {
                  return c(R0);
                },
                children: (Qe, U0) => {
                  qe();
                  var e0 = ze("Highlights");
                  m(Qe, e0);
                },
                $$slots: { default: !0 }
              }), u(Ee), u(Ce), m(T, F);
            },
            $$slots: { default: !0 }
          }), u(R), u(S), u(U);
          var D = _(U, 2);
          j0(D, 17, () => c(o), (T) => T.id, (T, M) => {
            ln(T, {
              get annotation() {
                return c(M);
              }
            });
          });
          var O = _(D, 2);
          {
            var H = (T) => {
              var M = S5();
              m(T, M);
            };
            Z(O, (T) => {
              c(o).length === 0 && T(H);
            });
          }
          var X = _(O, 2);
          {
            var ne = (T) => {
              var M = $5();
              M.__click = [L5], m(T, M);
            };
            Z(X, (T) => {
              c(i) > 1 && T(ne);
            });
          }
          B(() => {
            var T;
            return J(A, `Page ${(((T = Y.pagination) == null ? void 0 : T.page) || 0) ?? ""} of ${c(i) ?? ""}`);
          }), m(z, L);
        };
        Z(y, (z) => {
          Y.annotations.length === 0 ? z(f) : z(w, !1);
        });
      }
      u(g), m(h, g);
    };
    Z(v, (h) => {
      Y.currentAnnotationId || h(p);
    });
  }
  m(e, l), G();
}
Je(["click"]);
K(ss, {}, [], [], !0);
var P5 = /* @__PURE__ */ P("<!> <!>", 1);
function as(e, r) {
  V(r, !1), f0(() => {
    G0(null);
  }), c0();
  var t = P5(), n = ae(t);
  _t(n, {});
  var o = _(n, 2);
  ss(o, {}), m(e, t), G();
}
K(as, {}, [], [], !0);
var T5 = /* @__PURE__ */ P('<div class="list svelte-14xibxk"><!></div>');
const R5 = {
  hash: "svelte-14xibxk",
  code: ":host {display:block;position:relative;width:100%;height:100%;}.list.svelte-14xibxk {margin:1rem;}"
};
function ls(e, r) {
  V(r, !0), de(e, R5);
  const t = /* @__PURE__ */ Ae(() => Y.annotations.find((s) => s.id === Y.currentAnnotationId));
  var n = Ue(), o = ae(n);
  {
    var i = (s) => {
      var a = T5(), l = d(a);
      {
        var v = (p) => {
          ln(p, {
            get annotation() {
              return c(t);
            }
          });
        };
        Z(l, (p) => {
          c(t) && p(v);
        });
      }
      u(a), m(s, a);
    };
    Z(o, (s) => {
      Y.currentAnnotationId && s(i);
    });
  }
  m(e, n), G();
}
K(ls, {}, [], [], !0);
var M5 = /* @__PURE__ */ P('<div class="quote svelte-oa8zdz"><span class="svelte-oa8zdz"> </span></div>'), N5 = /* @__PURE__ */ P("<span>Cancel</span>"), O5 = /* @__PURE__ */ P("<span> </span>"), D5 = /* @__PURE__ */ P("<span>OK</span>"), W5 = /* @__PURE__ */ P('<div class="reminder svelte-oa8zdz"><!></div>'), U5 = /* @__PURE__ */ P("<span>OK</span>"), B5 = /* @__PURE__ */ P('<div class="error svelte-oa8zdz"><!></div>'), Z5 = /* @__PURE__ */ P('<form class="svelte-oa8zdz"><!> <div class="meta svelte-oa8zdz"><div class="left svelte-oa8zdz"><div class="image svelte-oa8zdz"><img alt="User Avatar" class="svelte-oa8zdz"/></div> <div class="info svelte-oa8zdz"><span class="name svelte-oa8zdz"> </span></div></div></div> <div class="field"><textarea id="annotation" class="textarea svelte-oa8zdz" name="text" placeholder="What do you think?"></textarea></div> <div class="actions svelte-oa8zdz"><!> <!></div> <!> <!></form>');
const F5 = {
  hash: "svelte-oa8zdz",
  code: `form.svelte-oa8zdz {margin-top:1rem;margin-bottom:1rem;border-radius:1rem;background-color:var(--color-primary-100);transition:background-color 0.7s ease;padding:1rem;}.meta.svelte-oa8zdz {font-size:1rem;margin-bottom:0.25rem;display:flex;padding:0 1rem;justify-content:space-between;}.quote.svelte-oa8zdz {padding:1rem;font-family:var(--font-serif);font-size:1.25rem;line-height:1.3;margin-bottom:1rem;}.quote.svelte-oa8zdz span:where(.svelte-oa8zdz) {background-color:rgb(239, 158, 255);}.textarea.svelte-oa8zdz {padding:1rem;width:100%;box-sizing:border-box;margin-bottom:0.5rem;font-family:var(--font-serif);font-size:1rem;line-height:1.3;border-radius:1rem;border:none;outline:none;resize:none;background-color:var(--color-primary-100);color:var(--text-color);}.textarea.svelte-oa8zdz:focus {background-color:var(--color-primary-200);}.actions.svelte-oa8zdz {display:flex;gap:0.5rem;justify-content:flex-end;}.left.svelte-oa8zdz {display:flex;gap:0.5rem;}.info.svelte-oa8zdz {display:flex;flex-direction:column;font-family:var(--font-sans);}.image.svelte-oa8zdz img:where(.svelte-oa8zdz) {width:32px;height:32px;border-radius:50%;}.info.svelte-oa8zdz .name:where(.svelte-oa8zdz) {margin:0;line-height:1;font-weight:600;}.reminder.svelte-oa8zdz,
  .error.svelte-oa8zdz {margin-top:1rem;}`
};
function cn(e, r) {
  V(r, !0), de(e, F5);
  let t = /* @__PURE__ */ te(""), n = /* @__PURE__ */ te(!1);
  const o = /* @__PURE__ */ Ae(() => Y.loading || Fe.loading);
  De(() => {
    c(t).length > 0 ? I(n, !0) : I(n, !1);
  });
  const i = () => {
    s(), n0("/");
  }, s = () => {
    I(t, ""), I(n, !1);
  };
  async function a(y) {
    var w, z, L;
    if (y.preventDefault(), !((w = Y.draft) != null && w.document_id)) {
      if (!((z = me.instance) != null && z.id)) {
        console.error("No instance id");
        return;
      }
      const U = await X1({
        url: Re.pageUrl,
        instance_id: (L = me.instance) == null ? void 0 : L.id,
        title: Mi()
      });
      if (!U) {
        console.error("No document added");
        return;
      }
      Y.draft.document_id = U.id;
    }
    const f = await Q1({
      ...Y.draft,
      text: c(t)
    });
    G0(f == null ? void 0 : f.id), s();
  }
  function l() {
    Fe.error = null;
  }
  function v() {
    Y.error = null;
  }
  var p = Ue(), h = ae(p);
  {
    var g = (y) => {
      var f = Z5(), w = d(f);
      {
        var z = (M) => {
          var F = M5(), re = d(F), oe = d(re, !0);
          u(re), u(F), B(() => J(oe, Y.draft.quote)), m(M, F);
        };
        Z(w, (M) => {
          Y.draft.quote && M(z);
        });
      }
      var L = _(w, 2), U = d(L), S = d(U), E = d(S);
      u(S);
      var x = _(S, 2), b = d(x), C = d(b, !0);
      u(b), u(x), u(U), u(L);
      var k = _(L, 2), A = d(k);
      Wr(A), u(k);
      var R = _(k, 2), W = d(R);
      r0(W, {
        type: "button",
        onclick: i,
        "aria-live": "polite",
        children: (M, F) => {
          var re = N5();
          m(M, re);
        },
        $$slots: { default: !0 }
      });
      var D = _(W, 2);
      const O = /* @__PURE__ */ Ae(() => c(o) || !c(n));
      r0(D, {
        type: "submit",
        variant: "primary",
        "aria-live": "polite",
        get disabled() {
          return c(O);
        },
        children: (M, F) => {
          var re = O5(), oe = d(re, !0);
          u(re), B(() => J(oe, c(o) ? "Loading" : "Respond")), m(M, re);
        },
        $$slots: { default: !0 }
      }), u(R);
      var H = _(R, 2);
      {
        var X = (M) => {
          var F = W5(), re = d(F);
          H0(re, {
            get title() {
              return Fe.error.code;
            },
            $$slots: {
              content: (oe, ue) => {
                var le = ze();
                B((Le) => J(le, Le), [
                  () => Un(Fe.error.code)
                ]), m(oe, le);
              },
              actions: (oe, ue) => {
                r0(oe, {
                  type: "button",
                  onclick: l,
                  "aria-live": "polite",
                  children: (le, Le) => {
                    var ee = D5();
                    m(le, ee);
                  },
                  $$slots: { default: !0 }
                });
              }
            }
          }), u(F), m(M, F);
        };
        Z(H, (M) => {
          Fe.error && Re.debug && M(X);
        });
      }
      var ne = _(H, 2);
      {
        var T = (M) => {
          var F = B5(), re = d(F);
          H0(re, {
            type: "error",
            get title() {
              return Y.error.code;
            },
            $$slots: {
              content: (oe, ue) => {
                var le = ze();
                B((Le) => J(le, Le), [
                  () => Un(Y.error.code)
                ]), m(oe, le);
              },
              actions: (oe, ue) => {
                r0(oe, {
                  type: "button",
                  onclick: v,
                  "aria-live": "polite",
                  children: (le, Le) => {
                    var ee = U5();
                    m(le, ee);
                  },
                  $$slots: { default: !0 }
                });
              }
            }
          }), u(F), m(M, F);
        };
        Z(ne, (M) => {
          Y.error && M(T);
        });
      }
      u(f), B(() => {
        var M, F;
        j(E, "src", `https://i.pravatar.cc/32?u=${((M = N.user) == null ? void 0 : M.full_name) ?? ""}`), J(C, ((F = N.user) == null ? void 0 : F.full_name) || "Anonymous");
      }), _e("submit", f, a), mr(A, () => c(t), (M) => I(t, M)), m(y, f);
    };
    Z(h, (y) => {
      Y.draft && y(g);
    });
  }
  m(e, p), G();
}
K(cn, {}, [], [], !0);
var H5 = /* @__PURE__ */ P("<!> <!> <!>", 1);
function cs(e, r) {
  V(r, !0);
  const t = q(r, "params", 23, () => ({}));
  De(() => {
    t() && t().id ? (console.log("Setting current annotation ID from URL parameter:", t().id), G0(t().id)) : (console.log("No annotation ID in URL, clearing current annotation"), G0(null));
  });
  var n = H5(), o = ae(n);
  _t(o, {});
  var i = _(o, 2);
  ls(i, {});
  var s = _(i, 2);
  return cn(s, {}), m(e, n), G({
    get params() {
      return t();
    },
    set params(a = {}) {
      t(a), $();
    }
  });
}
K(cs, { params: {} }, [], [], !0);
class K5 {
  constructor(r) {
    ve(this, "api_url");
    this.api_url = r + "/wp-json/akin/v1";
  }
  /**
   * Get all users
   * @returns {Promise<{ users?: WPAkinUser[] | null; error?: unknown }>}
   * 
   * @deprecated not used yet. and not tested
   */
  async getUsers() {
    try {
      const r = await fetch(`${this.api_url}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // WordPress nonce for CSRF protection (optional but recommended)
          "X-WP-Nonce": this.getWPNonce()
        },
        credentials: "include"
        // Important: includes WordPress session cookies
      });
      if (!r.ok)
        throw new Error(`HTTP error! status: ${r.status}`);
      return { users: await r.json() };
    } catch (r) {
      return { error: r };
    }
  }
  async getAuthStatus() {
    try {
      const r = await fetch(`${this.api_url}/auth`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-WP-Nonce": this.getWPNonce()
        },
        credentials: "include"
      });
      if (!r.ok)
        throw new Error(`HTTP error! status: ${r.status}`);
      return { auth: await r.json() };
    } catch (r) {
      return { error: r };
    }
  }
  /**
   * Get the WordPress nonce from the window object
   * @returns string
   * @deprecated is currently turned off in version 0.0.17 of wp plugin and should be accessed the config.ts file   */
  getWPNonce() {
    var r;
    return ((r = window.akinConfig) == null ? void 0 : r.nonce) || "";
  }
}
const Y5 = "akin_wp_state";
let E1, ce = We({
  wpUser: null,
  wpIsLoggedIn: !1,
  wpUserId: null,
  wpError: null,
  wpIsLoading: !1,
  wpLastCheck: null
});
function us(e) {
  E1 = new K5(e), console.log(window.akinConfig), ds();
}
function V5() {
  if (typeof window > "u") return;
  const e = {
    wpUser: ce.wpUser,
    wpIsLoggedIn: ce.wpIsLoggedIn,
    wpUserId: ce.wpUserId,
    wpError: ce.wpError,
    wpIsLoading: ce.wpIsLoading,
    wpLastCheck: ce.wpLastCheck
  };
  localStorage.setItem(Y5, JSON.stringify(e));
}
async function ds() {
  if (!E1)
    return console.error("WPService not initialized. Call initWPService first."), !1;
  ce.wpIsLoading = !0, ce.wpError = null;
  try {
    const { auth: e, error: r } = await E1.getAuthStatus();
    if (ce.wpIsLoggedIn = (e == null ? void 0 : e.isLoggedIn) || !1, ce.wpUserId = (e == null ? void 0 : e.userId) || null, ce.wpLastCheck = /* @__PURE__ */ new Date(), ce.wpUser = (e == null ? void 0 : e.user) || null, r)
      throw r;
    return V5(), ce.wpIsLoading = !1, ce.wpIsLoggedIn;
  } catch (e) {
    return ce.wpError = e instanceof Error ? e : new Error("Auth check failed"), ce.wpIsLoading = !1, !1;
  }
}
var G5 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" viewBox="0 0 32 32" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M20.87,19.614c-0.171,0.096 -0.33,0.215 -0.471,0.356c-0.407,0.408 -0.636,0.96 -0.636,1.536c0,1.759 0,5.064 0,6.823c0,0.575 0.229,1.128 0.636,1.535c0.408,0.407 0.96,0.636 1.536,0.636c1.759,-0 5.063,-0 6.823,-0c0.575,0 1.128,-0.229 1.535,-0.636c0.407,-0.407 0.636,-0.96 0.636,-1.535l-0,-6.823c-0,-0.576 -0.229,-1.128 -0.636,-1.536c-0.141,-0.141 -0.3,-0.26 -0.47,-0.356l-0,-1.176c-0,-2.472 -2.004,-4.476 -4.476,-4.476l-0.001,-0c-2.472,-0 -4.476,2.004 -4.476,4.476l-0,1.176Zm1.065,1.72l6.823,0c0.045,0 0.089,0.019 0.121,0.051c0.032,0.032 0.05,0.075 0.05,0.121l-0,6.823c-0,0.045 -0.018,0.089 -0.05,0.121c-0.032,0.032 -0.076,0.05 -0.121,0.05l-6.823,-0c-0.046,0 -0.089,-0.018 -0.121,-0.05c-0.033,-0.032 -0.051,-0.076 -0.051,-0.121l0,-6.823c0,-0.046 0.018,-0.089 0.051,-0.121c0.032,-0.032 0.075,-0.051 0.121,-0.051Zm-2.67,7.089l-17.194,0c-0.552,0 -1,-0.448 -1,-1c0,-6.447 5.234,-11.681 11.681,-11.681c3.161,-0 6.029,1.257 8.11,3.318c-0.302,0.132 -0.579,0.32 -0.816,0.557c-0.252,0.252 -0.449,0.55 -0.582,0.873c-1.72,-1.708 -4.095,-2.748 -6.712,-2.748c-5.005,-0 -9.129,3.807 -9.63,8.681l16.141,0l0,1.906c0,0.031 0.001,0.063 0.002,0.094Zm6.081,-5.041c-0.847,-0 -1.536,0.688 -1.536,1.535c0,0.848 0.689,1.536 1.536,1.536c0.848,-0 1.536,-0.688 1.536,-1.536c-0,-0.847 -0.688,-1.535 -1.536,-1.535Zm2.477,-4.944l-0,0.896c-0,0 -4.953,0 -4.953,0c-0,0 -0,-0.896 -0,-0.896c-0,-1.368 1.108,-2.476 2.476,-2.476c-0,-0 0.001,-0 0.001,-0c1.367,-0 2.476,1.108 2.476,2.476Zm-15.071,-16.938c-3.83,-0 -6.94,3.11 -6.94,6.94c0,3.83 3.11,6.94 6.94,6.94c3.831,-0 6.94,-3.11 6.94,-6.94c0,-3.83 -3.109,-6.94 -6.94,-6.94Zm0,2c2.727,-0 4.94,2.214 4.94,4.94c0,2.726 -2.213,4.94 -4.94,4.94c-2.726,-0 -4.94,-2.214 -4.94,-4.94c0,-2.726 2.214,-4.94 4.94,-4.94Z" class="svelte-5ki6bu"></path></svg>');
const X5 = {
  hash: "svelte-5ki6bu",
  code: `.pulse.svelte-5ki6bu {\r
    animation: svelte-5ki6bu-pulse 1.5s ease-in-out infinite;}\r
\r
  @keyframes svelte-5ki6bu-pulse {\r
    0% {\r
      opacity: 1;\r
    }\r
    50% {\r
      opacity: 0.1;\r
    }\r
    100% {\r
      opacity: 1;\r
    }\r
  }`
};
function fs(e, r) {
  V(r, !0), de(e, X5);
  /**
   * Comment icon component
   * @copyright metami septiana
   * @license https://creativecommons.org/licenses/by/4.0/
   */
  let t = q(r, "size", 7, "16"), n = q(r, "color", 7, "currentColor"), o = q(r, "loading", 7, !1);
  var i = G5();
  let s;
  var a = d(i);
  return u(i), B(
    (l) => {
      j(i, "width", t()), j(i, "height", t()), s = ke(i, 0, "svelte-5ki6bu", null, s, l), j(a, "fill", n());
    },
    [() => ({ pulse: o() })]
  ), m(e, i), G({
    get size() {
      return t();
    },
    set size(l = "16") {
      t(l), $();
    },
    get color() {
      return n();
    },
    set color(l = "currentColor") {
      n(l), $();
    },
    get loading() {
      return o();
    },
    set loading(l = !1) {
      o(l), $();
    }
  });
}
K(fs, { size: {}, color: {}, loading: {} }, [], [], !0);
var J5 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" viewBox="-5.0 -10.0 110.0 110.0"><path d="m29.605 81.465h0.007812c5.2383 0 10.164-2.043 13.867-5.7461l2.6016-2.6016c2.4062 0.99609 4.9414 1.4805 7.4609 1.4805 5.0938 0 10.125-1.9844 13.883-5.7422l16.836-16.836c7.6484-7.6484 7.6484-20.094 0-27.742-3.7031-3.7031-8.6289-5.7422-13.871-5.7422-5.2461 0-10.172 2.0391-13.871 5.7422l-2.6133 2.6094c-7.2695-3.0039-15.719-1.3633-21.336 4.2539l-16.836 16.836c-7.6484 7.6484-7.6484 20.094 0 27.742 3.7031 3.7031 8.6289 5.7422 13.871 5.7422zm29.035-55.066c3.1328-3.1328 7.3086-4.8594 11.75-4.8594s8.6172 1.7266 11.75 4.8594c6.4805 6.4805 6.4805 17.023 0 23.5l-16.836 16.836c-4.9766 4.9766-12.574 6.2773-18.914 3.2383-1.6875-0.79688-3.2305-1.8828-4.5859-3.2383-1.3516-1.3516-2.4414-2.8945-3.2422-4.5938-3.0352-6.332-1.7344-13.93 3.2422-18.906l1.4297-1.4297c1.7695-1.7695 4.6523-1.7695 6.418 0 0.85938 0.85937 1.332 2 1.332 3.2109s-0.47266 2.3516-1.332 3.2109l-1.4297 1.4297c-1.4258 1.4258-2.2109 3.3203-2.2109 5.332s0.78516 3.9062 2.2109 5.332c1.4688 1.4688 3.3984 2.2031 5.332 2.2031 1.9297 0 3.8594-0.73438 5.332-2.2031l16.836-16.836c1.418-1.418 2.2031-3.3086 2.2031-5.3125 0.011719-2.0195-0.76953-3.918-2.2031-5.3516-1.4219-1.4219-3.3125-2.207-5.3281-2.207h-0.007812c-2.0156 0-3.9062 0.78516-5.3242 2.207l-1.918 1.918c-0.79297-1.293-1.7305-2.5-2.8242-3.5938s-2.3047-2.0312-3.5938-2.8242l1.918-1.918zm5.9297 11.148 2.6094-2.6094c0.85547-0.85547 1.9922-1.3242 3.207-1.3281h0.003906c1.2148 0 2.3516 0.46875 3.207 1.3281 0.85938 0.85938 1.332 2 1.3242 3.2188 0 1.2109-0.46875 2.3477-1.3242 3.1992l-8.0508 8.0508c0.89453-3.8945 0.60156-8.0391-0.98047-11.859zm-46.711 12.551 16.836-16.836c4.9766-4.9766 12.574-6.2773 18.918-3.2383 1.6875 0.79687 3.2305 1.8828 4.5859 3.2383 1.3516 1.3516 2.4414 2.8945 3.2422 4.5938 3.0352 6.332 1.7344 13.93-3.2422 18.906l-1.4297 1.4297c-1.7695 1.7695-4.6523 1.7695-6.418 0-0.85937-0.85938-1.332-2-1.332-3.2109 0-1.2109 0.47266-2.3516 1.332-3.2109l1.4297-1.4297c1.4258-1.4258 2.2109-3.3203 2.2109-5.332 0-2.0117-0.78516-3.9062-2.2109-5.332-2.9375-2.9375-7.7227-2.9414-10.664 0l-16.836 16.836c-1.4141 1.4141-2.1992 3.3008-2.2109 5.332 0 2.0117 0.78516 3.9062 2.2109 5.332s3.3164 2.2109 5.332 2.2109 3.9062-0.78516 5.332-2.207l1.918-1.918c0.79297 1.293 1.7305 2.5 2.8242 3.5938 1.0977 1.0938 2.3047 2.0312 3.5938 2.8242l-1.918 1.918c-3.1367 3.1367-7.3086 4.8633-11.746 4.8672h-0.003907c-4.4375 0-8.6133-1.7266-11.75-4.8672-6.4805-6.4805-6.4805-17.023 0-23.5zm17.57 12.348-2.6094 2.6094c-0.85937 0.85937-1.9961 1.3281-3.2109 1.3281-1.2109 0-2.3516-0.47266-3.2109-1.3281-0.85938-0.85938-1.332-2-1.332-3.1992 0.007813-1.2266 0.48047-2.3711 1.332-3.2188l8.0508-8.0508c-0.89453 3.8945-0.60156 8.0391 0.98047 11.859z" class="svelte-17lv5l6"></path></svg>');
const Q5 = {
  hash: "svelte-17lv5l6",
  code: `.pulse.svelte-17lv5l6 {\r
    animation: svelte-17lv5l6-pulse 1.5s ease-in-out infinite;}\r
\r
  @keyframes svelte-17lv5l6-pulse {\r
    0% {\r
      opacity: 1;\r
    }\r
    50% {\r
      opacity: 0.1;\r
    }\r
    100% {\r
      opacity: 1;\r
    }\r
  }`
};
function un(e, r) {
  V(r, !0), de(e, Q5);
  /**
   * Comment icon component
   * @copyright metami septiana
   * @license https://creativecommons.org/licenses/by/4.0/
   */
  let t = q(r, "size", 7, "16"), n = q(r, "color", 7, "currentColor"), o = q(r, "loading", 7, !1);
  var i = J5();
  let s;
  var a = d(i);
  return u(i), B(
    (l) => {
      j(i, "width", t()), j(i, "height", t()), s = ke(i, 0, "svelte-17lv5l6", null, s, l), j(a, "fill", n());
    },
    [() => ({ pulse: o() })]
  ), m(e, i), G({
    get size() {
      return t();
    },
    set size(l = "16") {
      t(l), $();
    },
    get color() {
      return n();
    },
    set color(l = "currentColor") {
      n(l), $();
    },
    get loading() {
      return o();
    },
    set loading(l = !1) {
      o(l), $();
    }
  });
}
K(un, { size: {}, color: {}, loading: {} }, [], [], !0);
var e4 = (e, r) => I(r, !c(r)), t4 = /* @__PURE__ */ P('<div class="status-indicator svelte-qf94sa"><!></div>'), r4 = /* @__PURE__ */ P('<p class="svelte-qf94sa">NaN</p>'), n4 = /* @__PURE__ */ P('<p class="svelte-qf94sa">Logged in to this wordpress.</p>'), o4 = /* @__PURE__ */ P('<p class="svelte-qf94sa">Not logged in to this wordpress.</p>'), i4 = /* @__PURE__ */ P('<div class="wp-status svelte-qf94sa"><!></div>'), s4 = /* @__PURE__ */ P('<div class="wp-status svelte-qf94sa">Login not required.</div>'), a4 = /* @__PURE__ */ P('<tr class="svelte-qf94sa"><td class="svelte-qf94sa">Capabilities</td><td class="role svelte-qf94sa"></td></tr>'), l4 = /* @__PURE__ */ P('<div><button class="identity-header svelte-qf94sa" type="button"><header class="svelte-qf94sa"><!> <div class="identity-info svelte-qf94sa"><h4 class="svelte-qf94sa"> </h4> <p class="svelte-qf94sa"> </p></div> <div class="identity-status svelte-qf94sa"><!> <div class="status-indicator svelte-qf94sa"><!></div> 1</div></header></button> <div><!> <table class="svelte-qf94sa"><tbody><tr class="svelte-qf94sa"><td class="svelte-qf94sa">Username</td><td class="svelte-qf94sa"> </td></tr><tr class="svelte-qf94sa"><td class="svelte-qf94sa">Display Name</td><td class="svelte-qf94sa"> </td></tr><tr class="svelte-qf94sa"><td class="svelte-qf94sa">First Name</td><td class="svelte-qf94sa"> </td></tr><tr class="svelte-qf94sa"><td class="svelte-qf94sa">Last Name</td><td class="svelte-qf94sa"> </td></tr><tr class="svelte-qf94sa"><td class="svelte-qf94sa">Email</td><td class="svelte-qf94sa"> </td></tr><tr class="svelte-qf94sa"><td class="svelte-qf94sa">Roles</td><td class="role svelte-qf94sa"> </td></tr><!><tr class="svelte-qf94sa"><td class="svelte-qf94sa">Avatar</td><td class="svelte-qf94sa"><img alt="Avatar"/></td></tr></tbody></table></div></div>'), c4 = /* @__PURE__ */ P('<div class="identity svelte-qf94sa"><p class="svelte-qf94sa">Unknown identity</p> </div>');
const u4 = {
  hash: "svelte-qf94sa",
  code: ".identity.svelte-qf94sa {border:1px solid var(--color-grey-400);border-radius:0.5rem;background-color:var(--color-grey-100);transition:background-color 0.7s ease;}.identity-header.svelte-qf94sa {margin-bottom:1rem;display:block;cursor:pointer;background:none;border:none;padding:1rem;background:none;margin:0;font-family:var(--font-sans);font-size:1rem;font-weight:400;color:var(--color-grey-900);text-align:left;width:100%;}.identity.svelte-qf94sa:hover {background-color:var(--clr-neutral-a0);}.identity.active.svelte-qf94sa {border-color:var(--color-primary-400);background-color:var(--color-primary-100);}header.svelte-qf94sa {display:flex;justify-content:space-between;gap:1rem;align-items:center;}.identity-info.svelte-qf94sa {flex:1;}.content.svelte-qf94sa {margin-bottom:1rem;padding:0 1rem;}.content.collapsed.svelte-qf94sa {display:none;}h4.svelte-qf94sa {font-size:1rem;margin:0;}p.svelte-qf94sa {margin:0;font-size:0.9rem;}.wp-status.svelte-qf94sa {margin:1rem 0;font-size:0.7rem;color:var(--color-grey-600);font-weight:600;text-align:center;}.wp-status.svelte-qf94sa p:where(.svelte-qf94sa) {margin:0rem;}.identity-status.svelte-qf94sa {display:flex;gap:0.5rem;}.status-indicator.svelte-qf94sa {display:flex;align-items:center;justify-content:center;width:1rem;height:1rem;}table.svelte-qf94sa {width:100%;border-collapse:collapse;}table.svelte-qf94sa tr:where(.svelte-qf94sa) {border-bottom:1px solid var(--color-grey-400);}table.svelte-qf94sa tr:where(.svelte-qf94sa) td:where(.svelte-qf94sa) {padding:0.5rem 0;font-size:0.9rem;}table.svelte-qf94sa tr:where(.svelte-qf94sa) td:where(.svelte-qf94sa):first-child {font-weight:600;width:6rem;}table.svelte-qf94sa tr:where(.svelte-qf94sa):last-child {border-bottom:0;}.role.svelte-qf94sa {text-transform:capitalize;}"
};
function dn(e, r) {
  V(r, !0), de(e, u4);
  const t = q(r, "identity", 7), n = ["wp-akin", "email"], o = (y) => {
    switch (y) {
      case "wp-akin":
        return "WordPress";
      case "email":
        return "Email";
      default:
        return "Unknown";
    }
  }, i = (y) => {
    switch (y.provider) {
      case "wp-akin":
        return y.data;
      default:
        return y.data;
    }
  }, s = /* @__PURE__ */ Ae(() => i(t()));
  let a = /* @__PURE__ */ te(!0);
  const l = (y) => new URL(y).hostname;
  var v = Ue(), p = ae(v);
  {
    var h = (y) => {
      var f = l4(), w = d(f);
      w.__click = [e4, a];
      var z = d(w), L = d(z);
      Yr(L, { size: "3rem" });
      var U = _(L, 2), S = d(U), E = d(S, !0);
      u(S);
      var x = _(S, 2), b = d(x, !0);
      u(x), u(U);
      var C = _(U, 2), k = d(C);
      {
        var A = (Ne) => {
          var Ie = t4(), t0 = d(Ie);
          const v0 = /* @__PURE__ */ Ae(() => ce.wpIsLoggedIn ? "var(--clr-accent-a0)" : "var(--clr-neutral-a0)");
          fs(t0, {
            get loading() {
              return ce.wpIsLoading;
            },
            get color() {
              return c(v0);
            },
            size: "1rem"
          }), u(Ie), m(Ne, Ie);
        }, R = (Ne) => {
          var Ie = r4();
          m(Ne, Ie);
        };
        Z(k, (Ne) => {
          var Ie, t0;
          (Ie = me.instance) != null && Ie.require_wp_user && ((t0 = me.instance) == null ? void 0 : t0.root_url) === t().host ? Ne(A) : Ne(R, !1);
        });
      }
      var W = _(k, 2), D = d(W);
      const O = /* @__PURE__ */ Ae(() => {
        var Ne;
        return ((Ne = ie.subscription) == null ? void 0 : Ne.moderation) === "approved" ? "var(--clr-accent-a0)" : "var(--clr-neutral-a0)";
      });
      un(D, {
        get loading() {
          return ie.isLoading;
        },
        get color() {
          return c(O);
        },
        size: "1rem"
      }), u(W), qe(), u(C), u(z), u(w);
      var H = _(w, 2), X = d(H);
      {
        var ne = (Ne) => {
          var Ie = i4(), t0 = d(Ie);
          {
            var v0 = (o0) => {
              var h0 = n4();
              m(o0, h0);
            }, b0 = (o0) => {
              var h0 = o4();
              m(o0, h0);
            };
            Z(t0, (o0) => {
              ce.wpIsLoggedIn ? o0(v0) : o0(b0, !1);
            });
          }
          u(Ie), m(Ne, Ie);
        }, T = (Ne) => {
          var Ie = s4();
          m(Ne, Ie);
        };
        Z(X, (Ne) => {
          var Ie, t0;
          (Ie = me.instance) != null && Ie.require_wp_user && ((t0 = me.instance) == null ? void 0 : t0.root_url) === t().host ? Ne(ne) : Ne(T, !1);
        });
      }
      var M = _(X, 2), F = d(M), re = d(F), oe = _(d(re)), ue = d(oe, !0);
      u(oe), u(re);
      var le = _(re), Le = _(d(le)), ee = d(Le, !0);
      u(Le), u(le);
      var fe = _(le), ye = _(d(fe)), Ce = d(ye, !0);
      u(ye), u(fe);
      var Ee = _(fe), $e = _(d(Ee)), Be = d($e, !0);
      u($e), u(Ee);
      var He = _(Ee), Oe = _(d(He)), E0 = d(Oe, !0);
      u(Oe), u(He);
      var R0 = _(He), Qe = _(d(R0)), U0 = d(Qe, !0);
      u(Qe), u(R0);
      var e0 = _(R0);
      {
        var Ut = (Ne) => {
          var Ie = a4(), t0 = _(d(Ie));
          j0(t0, 21, () => {
            var v0;
            return Object.keys((v0 = c(s)) == null ? void 0 : v0.capabilities);
          }, it, (v0, b0) => {
            const o0 = /* @__PURE__ */ Ae(() => {
              var h0;
              return (h0 = c(s)) == null ? void 0 : h0.capabilities[c(b0)];
            });
            yr(v0, {
              get id() {
                return c(b0);
              },
              get label() {
                return c(b0);
              },
              get name() {
                return c(b0);
              },
              get checked() {
                return c(o0);
              },
              disabled: !0
            });
          }), u(t0), u(Ie), m(Ne, Ie);
        };
        Z(e0, (Ne) => {
          var Ie;
          (Ie = c(s)) != null && Ie.capabilities && Ne(Ut);
        });
      }
      var Ct = _(e0), zt = _(d(Ct)), Xr = d(zt);
      u(zt), u(Ct), u(F), u(M), u(H), u(f), B(
        (Ne, Ie, t0) => {
          var v0, b0, o0, h0, br, wr, _r, xr;
          ke(f, 1, `identity ${(v0 = me.instance) != null && v0.require_wp_user && ((b0 = me.instance) == null ? void 0 : b0.root_url) === t().host ? "active" : "inactive"}`, "svelte-qf94sa"), J(E, Ne), J(b, Ie), ke(H, 1, `content ${c(a) ? "collapsed" : ""}`, "svelte-qf94sa"), J(ue, (o0 = c(s)) == null ? void 0 : o0.username), J(ee, (h0 = c(s)) == null ? void 0 : h0.displayName), J(Ce, (br = c(s)) == null ? void 0 : br.firstName), J(Be, (wr = c(s)) == null ? void 0 : wr.lastName), J(E0, (_r = c(s)) == null ? void 0 : _r.email), J(U0, t0), j(Xr, "src", (xr = c(s)) == null ? void 0 : xr.avatar);
        },
        [
          () => o(t().provider),
          () => l(t().host),
          () => {
            var Ne, Ie;
            return (Ie = (Ne = c(s)) == null ? void 0 : Ne.roles) == null ? void 0 : Ie.join(", ");
          }
        ]
      ), m(y, f);
    }, g = (y, f) => {
      {
        var w = (z) => {
          var L = c4(), U = _(d(L));
          u(L), B((S) => J(U, ` ${S ?? ""}`), [() => JSON.stringify(t().data)]), m(z, L);
        };
        Z(
          y,
          (z) => {
            n.includes(t().provider) || z(w);
          },
          f
        );
      }
    };
    Z(p, (y) => {
      t().provider === "wp-akin" ? y(h) : y(g, !1);
    });
  }
  return m(e, v), G({
    get identity() {
      return t();
    },
    set identity(y) {
      t(y), $();
    }
  });
}
Je(["click"]);
K(dn, { identity: {} }, [], [], !0);
var d4 = /* @__PURE__ */ P("<p><!> Great! We linked your wordpress account with akin.</p>"), f4 = /* @__PURE__ */ P(
  `Please sign in to your wordpress account as well to use all features of
          akin. We are working on automatic signing you into to both services, atm. <a>Login to wordpress</a>`,
  1
), v4 = /* @__PURE__ */ P('<p class="svelte-u9ttwt">You are subscribed to <a> </a> <span class="role svelte-u9ttwt"> </span></p>'), h4 = /* @__PURE__ */ P("<span>Logout</span>"), g4 = /* @__PURE__ */ P(`<div class="account-details svelte-u9ttwt"><!> <h2 class="svelte-u9ttwt">Account & Subscription</h2> <section class="account-meta svelte-u9ttwt"><table class="svelte-u9ttwt"><tbody><tr class="svelte-u9ttwt"><td class="svelte-u9ttwt">Full Name</td><td class="svelte-u9ttwt"> </td></tr><tr class="svelte-u9ttwt"><td class="svelte-u9ttwt">Username</td><td class="svelte-u9ttwt"> </td></tr><tr class="svelte-u9ttwt"><td class="svelte-u9ttwt">Website</td><td class="svelte-u9ttwt"> </td></tr><tr class="svelte-u9ttwt"><td class="svelte-u9ttwt">Avatar</td><td class="svelte-u9ttwt"> </td></tr></tbody></table></section> <section class="account-bio svelte-u9ttwt"><h3 class="account-bio-title svelte-u9ttwt">Bio</h3> </section> <section class="subscription svelte-u9ttwt"><h3 class="svelte-u9ttwt">Subscription</h3> <!> <!></section> <section class="permissions svelte-u9ttwt"><h3 class="svelte-u9ttwt">Permissions</h3> <p class="svelte-u9ttwt">Manage and view the permissions for your subscription</p> <table class="svelte-u9ttwt"><tbody><tr class="svelte-u9ttwt"><td class="svelte-u9ttwt">Moderation</td><td class="svelte-u9ttwt"> </td></tr><tr class="svelte-u9ttwt"><td class="svelte-u9ttwt">Profile Visibility</td><td class="svelte-u9ttwt"> </td></tr></tbody></table></section> <section class="identities svelte-u9ttwt"><h3 class="svelte-u9ttwt">Linked Identities</h3> <p class="svelte-u9ttwt">You can link multiple identities to your account. To edit details, visit
      the linked service.</p> <!></section> <section class="actions svelte-u9ttwt"><h3 class="svelte-u9ttwt">Actions</h3> <!></section></div>`);
const p4 = {
  hash: "svelte-u9ttwt",
  code: ".account-details.svelte-u9ttwt {margin-top:1rem;display:flex;flex-direction:column;padding:0;position:sticky;top:4rem;font-family:var(--font-sans);background:var(--background-color);z-index:1;border-radius:3rem;padding:1.5rem;border:1px solid var(--color-grey-400);}.account-details.svelte-u9ttwt h2:where(.svelte-u9ttwt) {font-size:1.4rem;margin:1rem 0 2rem 0;}section.svelte-u9ttwt {margin-bottom:2rem;}section.svelte-u9ttwt h3:where(.svelte-u9ttwt) {margin-bottom:0.5rem;}section.svelte-u9ttwt p:where(.svelte-u9ttwt) {margin-top:0rem;font-size:0.9rem;}table.svelte-u9ttwt {width:100%;border-collapse:collapse;}table.svelte-u9ttwt tr:where(.svelte-u9ttwt) {border-bottom:1px solid var(--color-grey-400);}table.svelte-u9ttwt tr:where(.svelte-u9ttwt) td:where(.svelte-u9ttwt) {padding:0.5rem 0;font-size:0.9rem;}table.svelte-u9ttwt tr:where(.svelte-u9ttwt) td:where(.svelte-u9ttwt):first-child {font-weight:600;width:6rem;}table.svelte-u9ttwt tr:where(.svelte-u9ttwt):last-child {border-bottom:0;}.role.svelte-u9ttwt {text-transform:capitalize;font-weight:600;}"
};
function vs(e, r) {
  V(r, !1), de(e, p4);
  const t = async () => {
    await zi() && Xe({
      message: N.error.message,
      type: "error",
      dismissible: !0,
      timeout: 3e3
    });
  };
  c0();
  var n = g4(), o = d(n);
  {
    var i = (ee) => {
      var fe = Ue(), ye = ae(fe);
      {
        var Ce = ($e) => {
          var Be = d4(), He = d(Be);
          un(He, {}), qe(), u(Be), m($e, Be);
        }, Ee = ($e) => {
          H0($e, {
            type: "warning",
            title: "Beta test notice",
            $$slots: {
              content: (Be, He) => {
                var Oe = f4(), E0 = _(ae(Oe));
                B(() => j(E0, "href", (se(me), Q(() => {
                  var R0;
                  return ((R0 = me.instance) == null ? void 0 : R0.root_url) + "/login";
                })))), m(Be, Oe);
              }
            }
          });
        };
        Z(ye, ($e) => {
          se(N), se(ce), Q(() => N.isAuthenticated && ce.wpIsLoggedIn) ? $e(Ce) : $e(Ee, !1);
        });
      }
      m(ee, fe);
    };
    Z(o, (ee) => {
      se(me), Q(() => {
        var fe;
        return (fe = me.instance) == null ? void 0 : fe.require_wp_user;
      }) && ee(i);
    });
  }
  var s = _(o, 4), a = d(s), l = d(a), v = d(l), p = _(d(v)), h = d(p, !0);
  u(p), u(v);
  var g = _(v), y = _(d(g)), f = d(y, !0);
  u(y), u(g);
  var w = _(g), z = _(d(w)), L = d(z, !0);
  u(z), u(w);
  var U = _(w), S = _(d(U)), E = d(S, !0);
  u(S), u(U), u(l), u(a), u(s);
  var x = _(s, 2), b = _(d(x));
  u(x);
  var C = _(x, 2), k = _(d(C), 2);
  {
    var A = (ee) => {
      var fe = v4(), ye = _(d(fe)), Ce = d(ye, !0);
      u(ye);
      var Ee = _(ye), $e = _(Ee), Be = d($e, !0);
      u($e), u(fe), B(
        (He) => {
          j(ye, "href", (se(Re), se(me), Q(() => {
            var Oe;
            return Re.serverUrl + "/" + ((Oe = me.instance) == null ? void 0 : Oe.id);
          }))), J(Ce, (se(me), Q(() => {
            var Oe;
            return (Oe = me.instance) == null ? void 0 : Oe.name;
          }))), J(Ee, ` since ${He ?? ""} as `), J(Be, (se(ie), Q(() => {
            var Oe;
            return (Oe = ie == null ? void 0 : ie.subscription) == null ? void 0 : Oe.role;
          })));
        },
        [
          () => (se(qt), se(ie), Q(() => {
            var He;
            return qt(new Date((He = ie == null ? void 0 : ie.subscription) == null ? void 0 : He.created_at));
          }))
        ],
        x0
      ), m(ee, fe);
    };
    Z(k, (ee) => {
      se(ie), Q(() => ie == null ? void 0 : ie.subscription) && ee(A);
    });
  }
  var R = _(k, 2);
  Gr(R, {}), u(C);
  var W = _(C, 2), D = _(d(W), 4), O = d(D), H = d(O), X = _(d(H)), ne = d(X, !0);
  u(X), u(H);
  var T = _(H), M = _(d(T)), F = d(M, !0);
  u(M), u(T), u(O), u(D), u(W);
  var re = _(W, 2), oe = _(d(re), 4);
  {
    var ue = (ee) => {
      var fe = Ue(), ye = ae(fe);
      j0(
        ye,
        1,
        () => (se(N), Q(() => {
          var Ce;
          return Object.keys(((Ce = N == null ? void 0 : N.user) == null ? void 0 : Ce.identities) || {});
        })),
        it,
        (Ce, Ee) => {
          const $e = /* @__PURE__ */ x0(() => (se(N), c(Ee), Q(() => {
            var Be, He;
            return (He = (Be = N == null ? void 0 : N.user) == null ? void 0 : Be.identities) == null ? void 0 : He[c(Ee)];
          })));
          dn(Ce, {
            get identity() {
              return c($e);
            }
          });
        }
      ), m(ee, fe);
    };
    Z(oe, (ee) => {
      se(N), Q(() => {
        var fe;
        return (fe = N == null ? void 0 : N.user) == null ? void 0 : fe.identities;
      }) && ee(ue);
    });
  }
  u(re);
  var le = _(re, 2), Le = _(d(le), 2);
  r0(Le, {
    onclick: t,
    "aria-live": "polite",
    children: (ee, fe) => {
      var ye = h4();
      m(ee, ye);
    },
    $$slots: { default: !0 }
  }), u(le), u(n), B(() => {
    J(h, (se(N), Q(() => {
      var ee;
      return (ee = N == null ? void 0 : N.user) == null ? void 0 : ee.full_name;
    }))), J(f, (se(N), Q(() => {
      var ee;
      return (ee = N == null ? void 0 : N.user) == null ? void 0 : ee.username;
    }))), J(L, (se(N), Q(() => {
      var ee;
      return (ee = N == null ? void 0 : N.user) == null ? void 0 : ee.website;
    }))), J(E, (se(N), Q(() => {
      var ee;
      return ((ee = N == null ? void 0 : N.user) == null ? void 0 : ee.avatar_url) || "https://placehold.co/64x64";
    }))), J(b, ` ${se(N), Q(() => {
      var ee;
      return ((ee = N == null ? void 0 : N.user) == null ? void 0 : ee.bio) || "No bio";
    }) ?? ""}`), J(ne, (se(N), Q(() => {
      var ee;
      return (ee = N == null ? void 0 : N.user) == null ? void 0 : ee.moderation;
    }))), J(F, (se(N), Q(() => {
      var ee;
      return (ee = N == null ? void 0 : N.user) == null ? void 0 : ee.privacy;
    })));
  }), m(e, n), G();
}
K(vs, {}, [], [], !0);
var m4 = /* @__PURE__ */ P("<!> <!>", 1);
function hs(e, r) {
  V(r, !1), c0();
  var t = m4(), n = ae(t);
  _t(n, {});
  var o = _(n, 2);
  {
    var i = (s) => {
      vs(s, {});
    };
    Z(o, (s) => {
      se(N), Q(() => N.isAuthenticated) && s(i);
    });
  }
  m(e, t), G();
}
K(hs, {}, [], [], !0);
var y4 = /* @__PURE__ */ P('<div class="notification-checking svelte-14mlabx"><!> <p class="svelte-14mlabx">Checking your priviliges...</p></div>'), b4 = /* @__PURE__ */ P("<p> </p>"), w4 = /* @__PURE__ */ P("<span> </span>"), _4 = /* @__PURE__ */ P('<input id="wp_id" class="inputField svelte-14mlabx" type="hidden"/> <input id="username" class="inputField svelte-14mlabx" type="hidden"/> <input id="email" class="inputField svelte-14mlabx" type="hidden"/> <h3> </h3> <p class="description svelte-14mlabx"> </p> <!> <div class="auth-form-widget-actions svelte-14mlabx"><!></div>', 1), x4 = /* @__PURE__ */ P('<div class="field-error-message svelte-14mlabx"> </div>'), C4 = /* @__PURE__ */ P("<span> </span>"), z4 = /* @__PURE__ */ P(`<p class="description svelte-14mlabx">We need you to sign-in to use our annotation service.</p> <div><label for="email" class="svelte-14mlabx">Email</label> <input id="email" class="inputField svelte-14mlabx" type="email" autocomplete="on" placeholder="Your email"/> <!></div> <div class="auth-form-widget-actions svelte-14mlabx"><!></div> <p class="hint svelte-14mlabx">If you don't have an account, yet it will be created for you.</p>`, 1), k4 = /* @__PURE__ */ P('<li class="svelte-14mlabx"><strong> </strong> </li>'), L4 = /* @__PURE__ */ P('<ul class="field-errors svelte-14mlabx"></ul>'), E4 = /* @__PURE__ */ P('<li class="svelte-14mlabx"> </li>'), A4 = /* @__PURE__ */ P('<ul class="form-errors svelte-14mlabx"></ul>'), S4 = /* @__PURE__ */ P("<p> </p> <!> <!>", 1), $4 = /* @__PURE__ */ P("<p> </p>"), q4 = /* @__PURE__ */ P('<div class="auth-form-widget svelte-14mlabx" aria-live="polite"><h2 class="header svelte-14mlabx">Login</h2> <!> <form class="auth-form" autocomplete="on"><!> <!> <!></form></div>');
const j4 = {
  hash: "svelte-14mlabx",
  code: `.auth-form-widget.svelte-14mlabx {margin-top:1rem;display:flex;flex-direction:column;padding:0;position:sticky;top:4rem;font-family:var(--font-sans);background:var(--background-color);z-index:1;border-radius:3rem;padding:1.5rem;border:1px solid var(--color-grey-400);}.auth-form-widget.svelte-14mlabx h2:where(.svelte-14mlabx) {font-size:1.4rem;margin:1rem 0 2rem 0;}.notification-checking.svelte-14mlabx {display:flex;align-items:center;flex-direction:column;gap:0.5rem;padding:1rem;}.notification-checking.svelte-14mlabx p:where(.svelte-14mlabx) {margin:0;}.auth-form-widget.svelte-14mlabx .auth-form-widget-actions:where(.svelte-14mlabx) {display:flex;align-items:center;flex-direction:column;gap:1rem;margin-bottom:1rem;margin-top:1rem;}.description.svelte-14mlabx {color:var(--color-grey-700);font-size:1.1rem;margin-top:0.5rem;margin-bottom:1.55rem;}.hint.svelte-14mlabx {color:var(--color-grey-800);font-size:0.9rem;margin-top:0.5rem;margin-bottom:1.55rem;text-align:center;}.field.has-error.svelte-14mlabx input:where(.svelte-14mlabx) {border-color:var(--clr-danger-a0);}.field-error-message.svelte-14mlabx {color:var(--clr-danger-a0);font-size:0.75rem;margin:0.25rem 0 0 .5rem;}.field-errors.svelte-14mlabx,
  .form-errors.svelte-14mlabx {list-style-type:none;padding-left:0.5rem;margin:0.5rem 0;text-align:left;}.field-errors.svelte-14mlabx li:where(.svelte-14mlabx),
  .form-errors.svelte-14mlabx li:where(.svelte-14mlabx) {font-size:0.75rem;margin-bottom:0.25rem;}label.svelte-14mlabx {font-family:var(--font-sans);font-weight:400;color:var(--text-color);font-size:0.7rem;display:none;}input.svelte-14mlabx {font-family:var(--font-sans);font-weight:400;color:var(--text-color);background-color:var(--color-grey-100);border:1px solid var(--color-grey-600);border-radius:1rem;font-size:0.825rem;line-height:2rem;padding:0 0.5rem;max-width:16rem;width:100%;box-sizing:border-box;}`
};
function gs(e, r) {
  V(r, !0), de(e, j4);
  let t = /* @__PURE__ */ te(!1), n = /* @__PURE__ */ te(""), o = /* @__PURE__ */ te(""), i = /* @__PURE__ */ te(""), s = /* @__PURE__ */ te(null), a = /* @__PURE__ */ te(null), l = /* @__PURE__ */ te(!1), v = /* @__PURE__ */ Ae(() => {
    var b;
    return ((b = me.instance) == null ? void 0 : b.require_wp_user) ?? !1;
  });
  f0(async () => {
    var b, C;
    try {
      c(v) && ((b = me.instance) != null && b.root_url) && (us((C = me.instance) == null ? void 0 : C.root_url), I(l, !0), await ds() && ce.wpUser && (I(o, ce.wpUser.username, !0), ce.wpUser.email && I(n, ce.wpUser.email, !0), console.log("WordPress user authenticated:", ce.wpUser)));
    } catch (k) {
      console.error("Error initializing WordPress integration:", k), I(l, !1);
    }
  });
  const p = async (b) => {
    var C, k, A, R, W, D, O;
    b.preventDefault(), I(a, null), I(t, !0);
    try {
      console.log("implement login through auth state"), I(i, `${window.location.href}`);
      let H = !1;
      c(v) && ((C = ce.wpUser) != null && C.id) && ((k = ce.wpUser) != null && k.username) && ((A = ce.wpUser) != null && A.email) ? H = await z1((R = ce.wpUser) == null ? void 0 : R.email, Re.publicKey, (W = ce.wpUser) == null ? void 0 : W.id, (D = ce.wpUser) == null ? void 0 : D.username, c(i)) : H = await z1(c(n), Re.publicKey, void 0, void 0, c(i)), H ? (I(s, "Check your email for login link!"), Xe({
        message: "Check your email for login link!",
        type: "success",
        dismissible: !0,
        timeout: 3e3
      })) : (I(a, "Signup failed"), Xe({
        message: l0((O = N.error) == null ? void 0 : O.code, { scope: "auth", table: "subscriber" }).message || "Login failed",
        type: "error",
        dismissible: !0,
        timeout: 1e4
      }));
    } catch (H) {
      H = H instanceof Error ? H.message : "An unknown error occurred";
    } finally {
      I(t, !1);
    }
  };
  var h = q4(), g = _(d(h), 2);
  {
    var y = (b) => {
      var C = Ue(), k = ae(C);
      {
        var A = (W) => {
          H0(W, {
            $$slots: {
              content: (D, O) => {
                var H = y4(), X = d(H);
                Yr(X, { size: "3rem", loading: !0 }), qe(2), u(H), m(D, H);
              }
            }
          });
        }, R = (W, D) => {
          {
            var O = (H) => {
              H0(H, {
                type: "warning",
                $$slots: {
                  content: (X, ne) => {
                    var T = b4(), M = d(T);
                    u(T), B(() => {
                      var F;
                      return J(M, `Login to ${((F = me.instance) == null ? void 0 : F.name) ?? ""} WordPress first.`);
                    }), m(X, T);
                  }
                }
              });
            };
            Z(
              W,
              (H) => {
                ce.wpIsLoggedIn || H(O);
              },
              D
            );
          }
        };
        Z(k, (W) => {
          ce.wpIsLoading ? W(A) : W(R, !1);
        });
      }
      m(b, C);
    };
    Z(g, (b) => {
      c(v) && c(l) && b(y);
    });
  }
  var f = _(g, 2), w = d(f);
  {
    var z = (b) => {
      var C = Ue(), k = ae(C);
      {
        var A = (R) => {
          var W = _4(), D = ae(W);
          Ht(D);
          var O = _(D, 2);
          Ht(O);
          var H = _(O, 2);
          Ht(H);
          var X = _(H, 2), ne = d(X);
          u(X);
          var T = _(X, 2), M = d(T);
          u(T);
          var F = _(T, 2);
          const re = /* @__PURE__ */ Ae(() => {
            var le;
            return {
              provider: "wp-akin",
              data: ce.wpUser,
              host: ((le = me.instance) == null ? void 0 : le.root_url) || ""
            };
          });
          dn(F, {
            get identity() {
              return c(re);
            }
          });
          var oe = _(F, 2), ue = d(oe);
          r0(ue, {
            variant: "accent",
            type: "submit",
            "aria-live": "polite",
            get disabled() {
              return c(t);
            },
            children: (le, Le) => {
              var ee = w4(), fe = d(ee, !0);
              u(ee), B(() => J(fe, c(t) ? "Loading..." : "Sign in")), m(le, ee);
            },
            $$slots: { default: !0 }
          }), u(oe), B(() => {
            var le, Le, ee, fe, ye, Ce, Ee, $e;
            t1(D, (le = ce.wpUser) == null ? void 0 : le.id), t1(O, (Le = ce.wpUser) == null ? void 0 : Le.username), t1(H, (ee = ce.wpUser) == null ? void 0 : ee.email), J(ne, `Welcome ${(((fe = ce.wpUser) == null ? void 0 : fe.displayName) || ((ye = ce.wpUser) == null ? void 0 : ye.firstName) || ((Ce = ce.wpUser) == null ? void 0 : Ce.lastName) || ((Ee = ce.wpUser) == null ? void 0 : Ee.username)) ?? ""},`), J(M, `To use the akin annotation service, you need to opt-in to use it.
          Please confirm your are sharing the following data with ${(($e = me.instance) == null ? void 0 : $e.name) ?? ""}.`);
          }), m(R, W);
        };
        Z(k, (R) => {
          var W, D;
          ce.wpIsLoggedIn && ((W = ce.wpUser) != null && W.username) && ((D = ce.wpUser) != null && D.email) && R(A);
        });
      }
      m(b, C);
    }, L = (b, C) => {
      {
        var k = (A) => {
          var R = z4(), W = _(ae(R), 2), D = _(d(W), 2);
          Ht(D);
          var O = _(D, 2);
          {
            var H = (T) => {
              var M = x4(), F = d(M, !0);
              u(M), B(() => {
                var re, oe, ue;
                return J(F, (ue = (oe = (re = N.error) == null ? void 0 : re.validationErrors) == null ? void 0 : oe.fieldErrors) == null ? void 0 : ue.email[0]);
              }), m(T, M);
            };
            Z(O, (T) => {
              var M, F, re;
              (re = (F = (M = N.error) == null ? void 0 : M.validationErrors) == null ? void 0 : F.fieldErrors) != null && re.email && T(H);
            });
          }
          u(W);
          var X = _(W, 2), ne = d(X);
          r0(ne, {
            variant: "accent",
            type: "submit",
            "aria-live": "polite",
            get disabled() {
              return c(t);
            },
            children: (T, M) => {
              var F = C4(), re = d(F, !0);
              u(F), B(() => J(re, c(t) ? "Loading..." : "Sign in")), m(T, F);
            },
            $$slots: { default: !0 }
          }), u(X), qe(2), B(() => {
            var T, M, F;
            return ke(W, 1, `field ${(F = (M = (T = N.error) == null ? void 0 : T.validationErrors) == null ? void 0 : M.fieldErrors) != null && F.email ? "has-error" : ""}`, "svelte-14mlabx");
          }), mr(D, () => c(n), (T) => I(n, T)), m(A, R);
        };
        Z(
          b,
          (A) => {
            !c(v) && !ce.wpIsLoading && !ce.wpIsLoggedIn && A(k);
          },
          C
        );
      }
    };
    Z(w, (b) => {
      c(v) && c(l) && !ce.wpIsLoading && ce.wpIsLoggedIn ? b(z) : b(L, !1);
    });
  }
  var U = _(w, 2);
  {
    var S = (b) => {
      H0(b, {
        title: "Authentication Error",
        type: "error",
        $$slots: {
          content: (C, k) => {
            var A = S4(), R = ae(A), W = d(R, !0);
            u(R);
            var D = _(R, 2);
            {
              var O = (ne) => {
                var T = L4();
                j0(T, 21, () => {
                  var M, F;
                  return Object.entries((F = (M = N.error) == null ? void 0 : M.validationErrors) == null ? void 0 : F.fieldErrors);
                }, it, (M, F) => {
                  var re = /* @__PURE__ */ Ae(() => Xs(c(F), 2));
                  let oe = () => c(re)[0], ue = () => c(re)[1];
                  var le = Ue(), Le = ae(le);
                  j0(Le, 17, ue, it, (ee, fe) => {
                    var ye = k4(), Ce = d(ye), Ee = d(Ce);
                    u(Ce);
                    var $e = _(Ce);
                    u(ye), B(() => {
                      J(Ee, `${oe() ?? ""}:`), J($e, ` ${c(fe) ?? ""}`);
                    }), m(ee, ye);
                  }), m(M, le);
                }), u(T), m(ne, T);
              };
              Z(D, (ne) => {
                var T, M;
                (M = (T = N.error) == null ? void 0 : T.validationErrors) != null && M.fieldErrors && ne(O);
              });
            }
            var H = _(D, 2);
            {
              var X = (ne) => {
                var T = A4();
                j0(T, 21, () => {
                  var M, F;
                  return (F = (M = N.error) == null ? void 0 : M.validationErrors) == null ? void 0 : F.formErrors;
                }, it, (M, F) => {
                  var re = E4(), oe = d(re, !0);
                  u(re), B(() => J(oe, c(F))), m(M, re);
                }), u(T), m(ne, T);
              };
              Z(H, (ne) => {
                var T, M, F, re;
                (M = (T = N.error) == null ? void 0 : T.validationErrors) != null && M.formErrors && ((re = (F = N.error) == null ? void 0 : F.validationErrors) == null ? void 0 : re.formErrors.length) > 0 && ne(X);
              });
            }
            B(() => {
              var ne, T, M;
              return J(W, ((T = (ne = N.error) == null ? void 0 : ne.validationErrors) == null ? void 0 : T.message) || ((M = N.error) == null ? void 0 : M.message));
            }), m(C, A);
          }
        }
      });
    };
    Z(U, (b) => {
      N.error && Re.debug && b(S);
    });
  }
  var E = _(U, 2);
  {
    var x = (b) => {
      H0(b, {
        title: "Success",
        type: "success",
        $$slots: {
          content: (C, k) => {
            var A = $4(), R = d(A, !0);
            u(A), B(() => J(R, c(s))), m(C, A);
          }
        }
      });
    };
    Z(E, (b) => {
      c(s) && b(x);
    });
  }
  u(f), u(h), _e("submit", f, p), m(e, h), G();
}
K(gs, {}, [], [], !0);
var I4 = /* @__PURE__ */ P("<!> <!>", 1);
function ps(e, r) {
  V(r, !1), c0();
  var t = I4(), n = ae(t);
  _t(n, {});
  var o = _(n, 2);
  {
    var i = (s) => {
      gs(s, {});
    };
    Z(o, (s) => {
      se(N), Q(() => !N.isAuthenticated) && s(i);
    });
  }
  m(e, t), G();
}
K(ps, {}, [], [], !0);
var P4 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" viewBox="0 0 64 64"><path d="M49.43827,35.39013l1.57359,1.57359a1.001,1.001,0,0,0,.70762.29321h5.07409a1.001,1.001,0,0,0-.00006-2.00168H52.13389l-2.69562-2.69562V28.14186A17.39234,17.39234,0,0,0,38.71205,12.16515l1.86038-1.80678a.99986.99986,0,0,0,.30347-.71789V5.00084a1.00084,1.00084,0,1,0-2.00168,0V9.21727l-2.307,2.24059a16.92168,16.92168,0,0,0-8.80653,0L25.45329,9.21727V5.00084a1.001,1.001,0,0,0-2.00168.00006V9.64048a.99987.99987,0,0,0,.30348.71789l1.8607,1.80681a17.38716,17.38716,0,0,0-10.726,15.9767l0,4.10242-3.03136,3.01095H7.22167a1.00084,1.00084,0,0,0,0,2.00168h5.04916a1,1,0,0,0,.70518-.29077l1.91372-1.90083v7.70746a17.17426,17.17426,0,0,0,1.32673,6.6277l-3.26537,3.26538H8.31634a1.001,1.001,0,0,0,.00006,2.00166l5.0491,0a1.00093,1.00093,0,0,0,.70762-.29322l3.08224-3.08224a17.28875,17.28875,0,0,0,30.03077-.02238l3.10442,3.10462a1.001,1.001,0,0,0,.70762.29322h5.04917a1.00084,1.00084,0,1,0,0-2.00168H51.41259l-3.29147-3.29146C49.95147,45.77169,49.34639,39.37152,49.43827,35.39013ZM32.164,12.86926a15.28967,15.28967,0,0,1,15.16569,13.5309H16.99831A15.28966,15.28966,0,0,1,32.164,12.86926ZM18.34777,49.23873a15.1519,15.1519,0,0,1-1.45636-6.46594V32.71161a.95876.95876,0,0,0,0-.12058V28.40184H31.16853V57.995A15.27658,15.27658,0,0,1,18.34777,49.23873Zm14.82245,8.75571V28.40184H47.43659v4.56322c.01-.00342-.00722,9.80515,0,9.80771A15.30654,15.30654,0,0,1,33.17022,57.99444Z"></path></svg>');
function ms(e, r) {
  V(r, !0);
  /**
   * Comment icon component
   * @copyright metami septiana
   * @license https://creativecommons.org/licenses/by/4.0/
   */
  let t = q(r, "size", 7, "16"), n = q(r, "color", 7, "currentColor");
  var o = P4(), i = d(o);
  return u(o), B(() => {
    j(o, "width", t()), j(o, "height", t()), j(i, "fill", n());
  }), m(e, o), G({
    get size() {
      return t();
    },
    set size(s = "16") {
      t(s), $();
    },
    get color() {
      return n();
    },
    set color(s = "currentColor") {
      n(s), $();
    }
  });
}
K(ms, { size: {}, color: {} }, [], [], !0);
var T4 = /* @__PURE__ */ P('<span class="_jsonSep svelte-6z96o6">,</span>'), R4 = /* @__PURE__ */ P("<span> </span><!>", 1), M4 = /* @__PURE__ */ P('<span class="_jsonSep svelte-6z96o6">,</span>'), N4 = /* @__PURE__ */ P('<span role="button" tabindex="0"> </span><!>', 1), O4 = /* @__PURE__ */ P('<span class="_jsonKey svelte-6z96o6"> </span><span class="_jsonSep svelte-6z96o6">:</span>', 1), D4 = /* @__PURE__ */ P('<span class="_jsonSep svelte-6z96o6">,</span>'), W4 = /* @__PURE__ */ P("<span> </span><!>", 1), U4 = /* @__PURE__ */ P("<li><!> <!></li>"), B4 = /* @__PURE__ */ P('<span class="_jsonSep svelte-6z96o6">,</span>'), Z4 = /* @__PURE__ */ P('<span role="button" tabindex="0"> </span> <ul class="_jsonList svelte-6z96o6"></ul> <span role="button" tabindex="0"> </span><!>', 1);
const F4 = {
  hash: "svelte-6z96o6",
  code: ":where(._jsonList.svelte-6z96o6) {list-style:none;margin:0;padding:0;padding-left:var(--jsonPaddingLeft, 1rem);border-left:var(--jsonBorderLeft, 1px dotted);}:where(._jsonBkt.svelte-6z96o6) {color:var(--jsonBracketColor, currentcolor);}.svelte-6z96o6:where(._jsonBkt:where(.svelte-6z96o6)):not(.empty):hover {cursor:pointer;background:var(--jsonBracketHoverBackground, #e5e7eb);}:where(._jsonSep.svelte-6z96o6) {color:var(--jsonSeparatorColor, currentcolor);}:where(._jsonKey.svelte-6z96o6) {color:var(--jsonKeyColor, currentcolor);}:where(._jsonVal.svelte-6z96o6) {color:var(--jsonValColor, #9ca3af);}:where(._jsonVal:where(.svelte-6z96o6)).string.svelte-6z96o6 {color:var(--jsonValStringColor, #059669);}:where(._jsonVal:where(.svelte-6z96o6)).number.svelte-6z96o6 {color:var(--jsonValNumberColor, #d97706);}:where(._jsonVal:where(.svelte-6z96o6)).boolean.svelte-6z96o6 {color:var(--jsonValBooleanColor, #2563eb);}"
};
function ur(e, r) {
  V(r, !1), de(e, F4);
  let t = q(r, "json", 12), n = q(r, "depth", 12, 1 / 0), o = q(r, "_cur", 12, 0), i = q(r, "_last", 12, !0), s = /* @__PURE__ */ a0([]), a = /* @__PURE__ */ a0(!1), l = /* @__PURE__ */ a0(["", ""]), v = /* @__PURE__ */ a0(!1);
  function p(S) {
    return S === null ? "null" : typeof S;
  }
  function h(S) {
    return JSON.stringify(S);
  }
  function g(S) {
    switch (p(S)) {
      case "function":
        return "f () {...}";
      case "symbol":
        return S.toString();
      default:
        return h(S);
    }
  }
  function y() {
    I(v, !c(v));
  }
  function f(S) {
    S instanceof KeyboardEvent && ["Enter", " "].includes(S.key) && y();
  }
  Pt(
    () => (se(t()), c(a)),
    () => {
      I(s, p(t()) === "object" ? Object.keys(t()) : []), I(a, Array.isArray(t())), I(l, c(a) ? ["[", "]"] : ["{", "}"]);
    }
  ), Pt(
    () => (se(n()), se(o())),
    () => {
      I(v, n() < o());
    }
  ), Nr(), c0();
  var w = Ue(), z = ae(w);
  {
    var L = (S) => {
      var E = R4(), x = ae(E);
      let b;
      var C = d(x);
      u(x);
      var k = _(x);
      {
        var A = (R) => {
          var W = T4();
          m(R, W);
        };
        Z(k, (R) => {
          i() || R(A);
        });
      }
      B(
        (R) => {
          b = ke(x, 1, "_jsonBkt empty svelte-6z96o6", null, b, R), J(C, `${c(l), Q(() => c(l)[0]) ?? ""}${c(l), Q(() => c(l)[1]) ?? ""}`);
        },
        [() => ({ isArray: c(a) })],
        x0
      ), m(S, E);
    }, U = (S, E) => {
      {
        var x = (C) => {
          var k = N4(), A = ae(k);
          let R;
          var W = d(A);
          u(A);
          var D = _(A);
          {
            var O = (H) => {
              var X = M4();
              m(H, X);
            };
            Z(D, (H) => {
              !i() && c(v) && H(O);
            });
          }
          B(
            (H) => {
              R = ke(A, 1, "_jsonBkt svelte-6z96o6", null, R, H), J(W, `${c(l), Q(() => c(l)[0]) ?? ""}...${c(l), Q(() => c(l)[1]) ?? ""}`);
            },
            [() => ({ isArray: c(a) })],
            x0
          ), _e("click", A, y), _e("keydown", A, f), m(C, k);
        }, b = (C) => {
          var k = Z4(), A = ae(k);
          let R;
          var W = d(A, !0);
          u(A);
          var D = _(A, 2);
          j0(D, 5, () => c(s), it, (M, F, re) => {
            var oe = U4(), ue = d(oe);
            {
              var le = (ye) => {
                var Ce = O4(), Ee = ae(Ce), $e = d(Ee, !0);
                u(Ee), qe(), B(
                  (Be) => J($e, Be),
                  [
                    () => (c(F), Q(() => h(c(F))))
                  ],
                  x0
                ), m(ye, Ce);
              };
              Z(ue, (ye) => {
                c(a) || ye(le);
              });
            }
            var Le = _(ue, 2);
            {
              var ee = (ye) => {
                var Ce = Ue(), Ee = ae(Ce);
                const $e = /* @__PURE__ */ x0(() => o() + 1), Be = /* @__PURE__ */ x0(() => (c(s), Q(() => re === c(s).length - 1)));
                ur(Ee, {
                  get json() {
                    return se(t()), c(F), Q(() => t()[c(F)]);
                  },
                  get depth() {
                    return n();
                  },
                  get _cur() {
                    return c($e);
                  },
                  get _last() {
                    return c(Be);
                  }
                }), m(ye, Ce);
              }, fe = (ye) => {
                var Ce = W4(), Ee = ae(Ce), $e = d(Ee, !0);
                u(Ee);
                var Be = _(Ee);
                {
                  var He = (Oe) => {
                    var E0 = D4();
                    m(Oe, E0);
                  };
                  Z(Be, (Oe) => {
                    c(s), Q(() => re < c(s).length - 1) && Oe(He);
                  });
                }
                B(
                  (Oe, E0) => {
                    ke(Ee, 1, `_jsonVal ${Oe ?? ""}`, "svelte-6z96o6"), J($e, E0);
                  },
                  [
                    () => (se(t()), c(F), Q(() => p(t()[c(F)]))),
                    () => (se(t()), c(F), Q(() => g(t()[c(F)])))
                  ],
                  x0
                ), m(ye, Ce);
              };
              Z(Le, (ye) => {
                se(t()), c(F), Q(() => p(t()[c(F)]) === "object") ? ye(ee) : ye(fe, !1);
              });
            }
            u(oe), m(M, oe);
          }), u(D);
          var O = _(D, 2);
          let H;
          var X = d(O, !0);
          u(O);
          var ne = _(O);
          {
            var T = (M) => {
              var F = B4();
              m(M, F);
            };
            Z(ne, (M) => {
              i() || M(T);
            });
          }
          B(
            (M, F) => {
              R = ke(A, 1, "_jsonBkt svelte-6z96o6", null, R, M), J(W, (c(l), Q(() => c(l)[0]))), H = ke(O, 1, "_jsonBkt svelte-6z96o6", null, H, F), J(X, (c(l), Q(() => c(l)[1])));
            },
            [
              () => ({ isArray: c(a) }),
              () => ({ isArray: c(a) })
            ],
            x0
          ), _e("click", A, y), _e("keydown", A, f), _e("click", O, y), _e("keydown", O, f), m(C, k);
        };
        Z(
          S,
          (C) => {
            c(v) ? C(x) : C(b, !1);
          },
          E
        );
      }
    };
    Z(z, (S) => {
      c(s), Q(() => !c(s).length) ? S(L) : S(U, !1);
    });
  }
  return m(e, w), G({
    get json() {
      return t();
    },
    set json(S) {
      t(S), $();
    },
    get depth() {
      return n();
    },
    set depth(S) {
      n(S), $();
    },
    get _cur() {
      return o();
    },
    set _cur(S) {
      o(S), $();
    },
    get _last() {
      return i();
    },
    set _last(S) {
      i(S), $();
    }
  });
}
K(ur, { json: {}, depth: {}, _cur: {}, _last: {} }, [], [], !0);
var Vn;
const H4 = (Vn = window.akinConfig) == null ? void 0 : Vn.serverUrl;
var Gn;
const K4 = (Gn = window.akinConfig) == null ? void 0 : Gn.pluginApiUrl;
var Xn;
const Y4 = ((Xn = window.akinConfig) == null ? void 0 : Xn.publicKey) || null;
var Jn;
const V4 = ((Jn = window.akinConfig) == null ? void 0 : Jn.loggedIn) || "0";
var Qn;
const G4 = ((Qn = window.akinConfig) == null ? void 0 : Qn.userId) || "0";
var eo;
const X4 = ((eo = window.akinConfig) == null ? void 0 : eo.nonce) || null, Vt = {
  serverUrl: H4,
  pluginApiUrl: K4,
  publicKey: Y4,
  loggedIn: V4,
  userId: G4,
  nonce: X4
};
typeof window < "u" && window.location.hostname === "localhost" && (!Vt.serverUrl || !Vt.pluginApiUrl || !Vt.publicKey ? console.warn("Akin wordpress configuration is not set. Assuming plugin is used on non-wordpress site and manually configured") : console.log("Akin wordpress configuration:", Vt));
var J4 = /* @__PURE__ */ P('<div class="wp-debug"><h4>config</h4> <div class="config"><!></div> <h4>state</h4> <div class="json"><!></div></div>');
function ys(e) {
  var r = J4(), t = _(d(r), 2), n = d(t);
  ur(n, {
    get json() {
      return Vt;
    },
    depth: 0
  }), u(t);
  var o = _(t, 4), i = d(o);
  ur(i, {
    get json() {
      return ce;
    },
    depth: 0
  }), u(o), u(r), m(e, r);
}
K(ys, {}, [], [], !0);
async function Q4() {
  try {
    const e = await Ke.get({ url: "/auth/test" });
    console.log("Auth test response:", e), e.data && console.log("Auth test data:", e.data), e.error && console.error("Auth test error in response:", e.error);
  } catch (e) {
    console.error("Auth test error:", e);
  }
}
var ec = /* @__PURE__ */ P('<div id="cors-debug" class="svelte-iishlc"><h2>Authentication Test</h2> <button class="svelte-iishlc">Test Auth</button> <p>Check the browser console for results</p></div>');
const tc = {
  hash: "svelte-iishlc",
  code: "#cors-debug.svelte-iishlc > button:where(.svelte-iishlc) {background-color:var(--color-grey-100);}#cors-debug.svelte-iishlc > button:where(.svelte-iishlc):hover {color:var(--clr-info-a0);background-color:var(--color-grey-200);}"
};
function bs(e, r) {
  V(r, !1), de(e, tc), c0();
  var t = ec(), n = _(d(t), 2);
  n.__click = [Q4], qe(2), u(t), m(e, t), G();
}
Je(["click"]);
K(bs, {}, [], [], !0);
var rc = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" viewBox="0 0 100 100" x="0px" y="0px"><polygon points="15.14 15.14 38.26 80.58 54.08 64.76 74.18 84.86 84.86 74.18 64.76 54.08 80.58 38.26 15.14 15.14" class="svelte-5ki6bu"></polygon></svg>');
const nc = {
  hash: "svelte-5ki6bu",
  code: `.pulse.svelte-5ki6bu {\r
    animation: svelte-5ki6bu-pulse 1.5s ease-in-out infinite;}\r
\r
  @keyframes svelte-5ki6bu-pulse {\r
    0% {\r
      opacity: 1;\r
    }\r
    50% {\r
      opacity: 0.1;\r
    }\r
    100% {\r
      opacity: 1;\r
    }\r
  }`
};
function ws(e, r) {
  V(r, !0), de(e, nc);
  let t = q(r, "size", 7, "16"), n = q(r, "color", 7, "currentColor"), o = q(r, "loading", 7, !1);
  var i = rc();
  let s;
  var a = d(i);
  return u(i), B(
    (l) => {
      j(i, "width", t()), j(i, "height", t()), s = ke(i, 0, "svelte-5ki6bu", null, s, l), j(a, "fill", n());
    },
    [() => ({ pulse: o() })]
  ), m(e, i), G({
    get size() {
      return t();
    },
    set size(l = "16") {
      t(l), $();
    },
    get color() {
      return n();
    },
    set color(l = "currentColor") {
      n(l), $();
    },
    get loading() {
      return o();
    },
    set loading(l = !1) {
      o(l), $();
    }
  });
}
K(ws, { size: {}, color: {}, loading: {} }, [], [], !0);
function oc(e, r) {
  I(r, !c(r));
}
var ic = /* @__PURE__ */ P('<div class="mouse-coordinates svelte-j9esyq"><div class="coordinate svelte-j9esyq"> </div> <div class="coordinate svelte-j9esyq"> </div></div>'), sc = /* @__PURE__ */ P('<button title="Toggle mouse position debugger"><!></button> <!>', 1);
const ac = {
  hash: "svelte-j9esyq",
  code: "button.svelte-j9esyq {background-color:transparent;border:none;border-radius:0.5rem;height:1.5rem;cursor:pointer;display:flex;justify-content:center;align-items:center;}button.svelte-j9esyq:hover {background-color:var(--color-grey-200);}.active.svelte-j9esyq {color:var(--clr-info-a0);background-color:var(--color-grey-200);}.mouse-coordinates.svelte-j9esyq {position:fixed;z-index:9998;background:rgba(0, 0, 0, 0.8);color:white;padding:4px 8px;border-radius:4px;font-family:monospace;font-size:12px;pointer-events:none;white-space:nowrap;backdrop-filter:blur(4px);}.coordinate.svelte-j9esyq {line-height:1.2;}"
};
function _s(e, r) {
  V(r, !0), de(e, ac);
  let t = /* @__PURE__ */ te(!1), n = /* @__PURE__ */ te(0), o = /* @__PURE__ */ te(0);
  function i(g) {
    c(t) && (I(n, g.clientX, !0), I(o, g.clientY, !0));
  }
  f0(() => {
    window.addEventListener("mousemove", i);
  }), ut(() => {
    window.removeEventListener("mousemove", i);
  });
  var s = sc(), a = ae(s);
  let l;
  a.__click = [oc, t];
  var v = d(a);
  ws(v, { size: "16" }), u(a);
  var p = _(a, 2);
  {
    var h = (g) => {
      var y = ic(), f = d(y), w = d(f);
      u(f);
      var z = _(f, 2), L = d(z);
      u(z), u(y), B(() => {
        Ze(y, `left: ${c(n) + 10}px; top: ${c(o) + 10}px;`), J(w, `x: ${c(n) ?? ""}`), J(L, `y: ${c(o) ?? ""}`);
      }), m(g, y);
    };
    Z(p, (g) => {
      c(t) && g(h);
    });
  }
  B((g) => l = ke(a, 1, "debug-toggle svelte-j9esyq", null, l, g), [() => ({ active: c(t) })]), m(e, s), G();
}
Je(["click"]);
K(_s, {}, [], [], !0);
function lc(e, r) {
  I(r, !0);
}
var cc = (e, r) => c(r).core = !c(r).core, uc = /* @__PURE__ */ P('<div class="module-content"><div class="json"><!></div></div>'), dc = (e, r) => c(r).wp = !c(r).wp, fc = /* @__PURE__ */ P('<div class="module-content"><!></div>'), vc = (e, r) => c(r).cors = !c(r).cors, hc = /* @__PURE__ */ P('<div class="module-content"><!></div>'), gc = (e, r) => c(r).layout = !c(r).layout, pc = /* @__PURE__ */ P('<div class="module-content"><!></div>'), mc = /* @__PURE__ */ P('<div class="debug"><div class="resize-handle" role="button" aria-label="Resize debug panel" tabindex="0"></div> <header class="debug-header"><h3>Akin Debug</h3> <button type="button" aria-label="Toggle debug state" tabindex="0"><!></button> <button type="button" aria-label="Hide debug panel"><!></button></header> <div class="content"><div class="modules"><section class="module"><header class="module-header" data-module="core"><h4>core</h4> <button type="button" aria-label="Collapse module"><!></button></header> <!></section> <section class="module"><header class="module-header" data-module="wp"><h4><!> wp-akin</h4> <button type="button" aria-label="Collapse module"><!></button></header> <!></section> <section class="module"><header class="module-header" data-module="cors"><h4>CORS tests</h4> <button type="button" aria-label="Collapse module"><!></button></header> <!></section> <section class="module"><header class="module-header" data-module="cors"><h4>Layout</h4> <button type="button" aria-label="Collapse module"><!></button></header> <!></section></div></div></div>'), yc = /* @__PURE__ */ P('<div style="display: flex; align-self: stretch; align-items: stretch;"><!></div>');
const bc = {
  hash: "svelte-187sj38",
  code: `
  /* These styles are for reference only - actual styles are injected via JavaScript */`
};
function fn(e, r) {
  V(r, !0), de(e, bc);
  let t = /* @__PURE__ */ te(!0), n = /* @__PURE__ */ te(15);
  const o = 15, i = 50, s = 16;
  let a = /* @__PURE__ */ te(!1), l = 0, v = 0, p, h = null, g = null, y = /* @__PURE__ */ te(null), f = /* @__PURE__ */ te(We({
    core: !1,
    wp: !1,
    cors: !1,
    layout: !1
  }));
  function w() {
    I(t, !1);
  }
  function z() {
    Re.debug = !Re.debug;
  }
  function L(W) {
    I(a, !0), l = W.clientX, v = c(n), document.addEventListener("mousemove", U), document.addEventListener("mouseup", S), document.body.style.cursor = "ew-resize", document.body.style.userSelect = "none";
  }
  function U(W) {
    if (!c(a)) return;
    const O = (W.clientX - l) / s, H = c(y).getBoundingClientRect(), ne = c(y).parentElement.clientWidth || document.documentElement.clientWidth, T = v + O, M = (ne - H.left + H.width) / s;
    I(n, Math.max(o, Math.min(i, T, M)), !0);
  }
  function S() {
    I(a, !1), document.removeEventListener("mousemove", U), document.removeEventListener("mouseup", S), document.body.style.cursor = "", document.body.style.userSelect = "";
  }
  function E(W) {
    W.ctrlKey && W.shiftKey && W.code === "Period" && w(), W.ctrlKey && W.shiftKey && (W.key === "." || W.keyCode === 190) && w();
  }
  function x() {
    typeof document > "u" || g || (g = document.createElement("style"), g.id = "akin-debug-styles", document.head.appendChild(g), g.textContent = `
        /** body is needed when the web component is not injected into the body */
        body {
          display: flex;
          flex-direction: row;
          align-items: start; 
        }
          
        #akin-debug-portal {
          display: flex;
          align-self: stretch;
        }
        #akin-debug-portal .debug {
          position: relative;
          font-size: 0.75rem;
          margin: 0rem;
          color: black;
          min-height: 100vh;
          background-color: white;
          border-radius: 0;
          border-right: 1px solid var(--color-grey-300);
          font-family: var(--font-mono);
          overflow-y: hidden;
          transition: width 0.05s ease;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        #akin-debug-portal .resize-handle {
          position: absolute;
          top: 0;
          right: 0;
          width: 6px;
          height: 100%;
          cursor: ew-resize;
          z-index: 1001;
        }
        #akin-debug-portal .bug-button {
          display: none;
        }
        #akin-debug-portal button {
          background-color: transparent;
          border: none;
          border-radius: 0.5rem;
          height: 1.5rem;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        #akin-debug-portal button:hover {
          background-color: var(--color-grey-200);
        }
        #akin-debug-portal .active {
          color: var(--clr-info-a0);
          background-color: var(--color-grey-200);
        }
        #akin-debug-portal header.debug-header {
          display: flex;
          justify-content: space-between;
          gap: 0.2rem;
          align-items: center;
          padding: 0.5rem;
          border-bottom: 1px solid var(--color-grey-300);
        }
        #akin-debug-portal h3 {
          font-size: 0.75rem;
          flex: 1;
          margin: 0;
          font-weight: 400;
        }
        #akin-debug-portal .content {
          overflow-y: auto;
        }
        
        /** Module */
        #akin-debug-portal .module {
        }
        #akin-debug-portal .module-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem;
          border-bottom: 1px solid var(--color-grey-300);
        }
        #akin-debug-portal .module-header h4 {
          font-size: 0.75rem;
          flex: 1;
          margin: 0;
          font-weight: 400;
          display: flex;
          gap: 0.5rem;
        }

        #akin-debug-portal .module-content {
          padding: 0.5rem 1rem;
          overflow-y: auto;
          align-items: center;
          border-bottom: 1px solid var(--color-grey-300);
        }
      `);
  }
  f0(() => {
    window.addEventListener("keydown", E), h = document.createElement("aside"), h.id = "akin-debug-portal", document.body.prepend(h), x(), p && h && h.prepend(p);
  }), ut(() => {
    window.removeEventListener("keydown", E), h && document.body.contains(h) && document.body.removeChild(h), g && document.head.contains(g) && document.head.removeChild(g);
  });
  const b = /* @__PURE__ */ Ae(() => Object.entries(zl).filter(([W, D]) => typeof D == "object" && D !== null && !Array.isArray(D) && W.endsWith("State"))), C = /* @__PURE__ */ Ae(() => c(b).reduce(
    (W, [D, O]) => (W[D.replace("State", "")] = O, W),
    {}
  ));
  var k = yc(), A = d(k);
  {
    var R = (W) => {
      var D = mc(), O = d(D);
      O.__mousedown = L;
      var H = _(O, 2), X = _(d(H), 2);
      X.__click = z;
      var ne = d(X);
      ms(ne, { size: "1rem" }), u(X);
      var T = _(X, 2);
      T.__click = [lc, t];
      var M = d(T);
      an(M, { width: "1rem", height: "1rem" }), u(T), u(H);
      var F = _(H, 2), re = d(F), oe = d(re), ue = d(oe), le = _(d(ue), 2);
      le.__click = [cc, f];
      var Le = d(le);
      {
        var ee = (ge) => {
          Kt(ge, { size: "1rem" });
        }, fe = (ge) => {
          Yt(ge, { size: "1rem" });
        };
        Z(Le, (ge) => {
          c(f).core ? ge(ee) : ge(fe, !1);
        });
      }
      u(le), u(ue);
      var ye = _(ue, 2);
      {
        var Ce = (ge) => {
          var i0 = uc(), tt = d(i0), js = d(tt);
          ur(js, {
            get json() {
              return c(C);
            },
            depth: 0
          }), u(tt), u(i0), m(ge, i0);
        };
        Z(ye, (ge) => {
          c(f).core || ge(Ce);
        });
      }
      u(oe);
      var Ee = _(oe, 2), $e = d(Ee), Be = d($e), He = d(Be);
      Yr(He, { size: "1rem" }), qe(), u(Be);
      var Oe = _(Be, 2);
      Oe.__click = [dc, f];
      var E0 = d(Oe);
      {
        var R0 = (ge) => {
          Kt(ge, { size: "1rem" });
        }, Qe = (ge) => {
          Yt(ge, { size: "1rem" });
        };
        Z(E0, (ge) => {
          c(f).wp ? ge(R0) : ge(Qe, !1);
        });
      }
      u(Oe), u($e);
      var U0 = _($e, 2);
      {
        var e0 = (ge) => {
          var i0 = fc(), tt = d(i0);
          ys(tt), u(i0), m(ge, i0);
        };
        Z(U0, (ge) => {
          c(f).wp || ge(e0);
        });
      }
      u(Ee);
      var Ut = _(Ee, 2), Ct = d(Ut), zt = _(d(Ct), 2);
      zt.__click = [vc, f];
      var Xr = d(zt);
      {
        var Ne = (ge) => {
          Kt(ge, { size: "1rem" });
        }, Ie = (ge) => {
          Yt(ge, { size: "1rem" });
        };
        Z(Xr, (ge) => {
          c(f).cors ? ge(Ne) : ge(Ie, !1);
        });
      }
      u(zt), u(Ct);
      var t0 = _(Ct, 2);
      {
        var v0 = (ge) => {
          var i0 = hc(), tt = d(i0);
          bs(tt, {}), u(i0), m(ge, i0);
        };
        Z(t0, (ge) => {
          c(f).cors || ge(v0);
        });
      }
      u(Ut);
      var b0 = _(Ut, 2), o0 = d(b0), h0 = _(d(o0), 2);
      h0.__click = [gc, f];
      var br = d(h0);
      {
        var wr = (ge) => {
          Kt(ge, { size: "1rem" });
        }, _r = (ge) => {
          Yt(ge, { size: "1rem" });
        };
        Z(br, (ge) => {
          c(f).layout ? ge(wr) : ge(_r, !1);
        });
      }
      u(h0), u(o0);
      var xr = _(o0, 2);
      {
        var qs = (ge) => {
          var i0 = pc(), tt = d(i0);
          _s(tt, {}), u(i0), m(ge, i0);
        };
        Z(xr, (ge) => {
          c(f).layout || ge(qs);
        });
      }
      u(b0), u(re), u(F), u(D), lt(D, (ge) => I(y, ge), () => c(y)), B(() => {
        Ze(D, `width: ${c(n) ?? ""}rem;`), ke(X, 1, et(Re.debug ? "active" : ""));
      }), m(W, D);
    };
    Z(A, (W) => {
      c(t) || W(R);
    });
  }
  u(k), lt(k, (W) => p = W, () => p), m(e, k), G();
}
Je(["mousedown", "click"]);
K(fn, {}, [], [], !0);
var wc = /* @__PURE__ */ P("<!> <!>", 1);
function xs(e) {
  var r = wc(), t = ae(r);
  _t(t, {});
  var n = _(t, 2);
  fn(n, {}), m(e, r);
}
K(xs, {}, [], [], !0);
var _c = /* @__PURE__ */ P("<!> <!>", 1);
function Cs(e) {
  var r = _c(), t = ae(r);
  _t(t, {});
  var n = _(t, 2);
  cn(n, {}), m(e, r);
}
K(Cs, {}, [], [], !0);
var xc = (e, r) => I(r, !c(r)), Cc = /* @__PURE__ */ P('<div class="svelte-9q5w70"><button class="svelte-9q5w70"><h2 class="svelte-9q5w70">Terms of Service</h2> <p class="svelte-9q5w70">By subscribing to this instance, you agree to our terms of service. Click to read.</p></button> <div><ol class="svelte-9q5w70"><li class="svelte-9q5w70"><strong>Acceptable Use:</strong> You agree to use the annotation service responsibly and not to create annotations that contain unlawful, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable content.</li> <li class="svelte-9q5w70"><strong>User Content:</strong> You retain ownership of the content you create through annotations, but grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display your annotations in connection with the service.</li> <li class="svelte-9q5w70"><strong>Moderation:</strong> All annotations may be subject to moderation. We reserve the right to remove any annotation that violates these terms or is otherwise deemed inappropriate.</li> <li class="svelte-9q5w70"><strong>Privacy:</strong> Your annotations may be set to public or private according to your preferences. Public annotations may be visible to other users of the service.</li> <li class="svelte-9q5w70"><strong>Termination:</strong> We reserve the right to suspend or terminate your access to the annotation service if you violate these terms.</li> <li class="svelte-9q5w70"><strong>Changes to Terms:</strong> We may modify these terms at any time. Continued use of the service after changes constitutes acceptance of the modified terms.</li> <li class="svelte-9q5w70"><strong>Disclaimer:</strong> The annotation service is provided "as is" without warranties of any kind, either express or implied.</li> <li class="svelte-9q5w70"><strong>Limitation of Liability:</strong> We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.</li></ol> <p class="terms-footer svelte-9q5w70">Last updated: June 2025</p></div></div>');
const zc = {
  hash: "svelte-9q5w70",
  code: "h2.svelte-9q5w70 {font-size:1rem;font-weight:400;margin:0;}p.svelte-9q5w70 {font-size:0.875rem;color:var(--text-color);}div.svelte-9q5w70 {background:var(--color-grey-100);border-radius:2rem;}button.svelte-9q5w70 {display:flex;justify-content:space-between;align-items:center;flex-direction:column;border:1px solid var(--color-grey-200);border-radius:2rem;padding:1rem;background:transparent;}button.svelte-9q5w70:hover {background:var(--color-grey-200);}.content.svelte-9q5w70 {display:flex;flex-direction:column;max-height:0;overflow:hidden;transition:max-height 0.3s ease;}.content.expanded.svelte-9q5w70 {max-height:100vh;overflow-y:auto;}ol.svelte-9q5w70 {list-style-type:decimal;margin-left:0rem;padding:0;}li.svelte-9q5w70 {padding:1rem;}.terms-footer.svelte-9q5w70 {padding:1rem;}"
};
function zs(e) {
  de(e, zc);
  let r = /* @__PURE__ */ te(!1);
  var t = Cc(), n = d(t);
  n.__click = [xc, r];
  var o = _(n, 2);
  u(t), B(() => ke(o, 1, `content ${c(r) ? "expanded" : ""}`, "svelte-9q5w70")), m(e, t);
}
Je(["click"]);
K(zs, {}, [], [], !0);
var kc = /* @__PURE__ */ P('<div><div class="container svelte-7ynw2j"><h1>Subscription</h1> <p>Publishers can leave a small welcome text here. You need to opt-in to highlight and annotate.</p> <!></div> <!></div>');
const Lc = {
  hash: "svelte-7ynw2j",
  code: ".container.svelte-7ynw2j {margin-bottom:2rem;}"
};
function ks(e) {
  de(e, Lc);
  var r = kc(), t = d(r), n = _(d(t), 4);
  Gr(n, {}), u(t);
  var o = _(t, 2);
  zs(o), u(r), m(e, r);
}
K(ks, {}, [], [], !0);
var Ec = /* @__PURE__ */ P('<div class="annotation-preview svelte-vcajht"><!> <span class="label"> </span></div>'), Ac = /* @__PURE__ */ P('<div class="container svelte-vcajht"><div class="cluster svelte-vcajht"></div></div>');
const Sc = {
  hash: "svelte-vcajht",
  code: ".container.svelte-vcajht {position:relative;}.cluster.svelte-vcajht {position:absolute;}.annotation-preview.svelte-vcajht {margin-bottom:1rem;}"
};
function Ls(e, r) {
  V(r, !0), de(e, Sc);
  const t = /* @__PURE__ */ Ae(() => {
    var s;
    return ((s = pe.indicators.find((a) => a.y === parseInt(n().y))) == null ? void 0 : s.annotations) || [];
  }), n = q(r, "params", 23, () => ({}));
  De(() => {
    n() && n().y && console.log("Current indicator Y from URL parameter:", n().y);
  }), De(() => {
    const s = pe.indicators.find((a) => a.y === parseInt(n().y));
    s && wi(s.y), console.log("Current indicator Y:", n().y);
  });
  var o = Ac(), i = d(o);
  return j0(i, 21, () => c(t), it, (s, a) => {
    var l = Ec(), v = d(l);
    Ve(v, {
      size: "xs",
      tabindex: "0",
      onclick: () => n0(`/annotation/${c(a).id}`),
      children: (g, y) => {
        qe();
        var f = ze();
        B(() => J(f, c(a).quote)), m(g, f);
      },
      $$slots: { default: !0 }
    });
    var p = _(v, 2), h = d(p, !0);
    u(p), u(l), B(() => {
      var g;
      return J(h, ((g = c(a).profile) == null ? void 0 : g.full_name) || "Anonymous");
    }), m(s, l);
  }), u(i), u(o), B(() => Ze(i, `top: ${n().y}px; left: 0;`)), m(e, o), G({
    get params() {
      return n();
    },
    set params(s = {}) {
      n(s), $();
    }
  });
}
K(Ls, { params: {} }, [], [], !0);
const $c = {
  "/": Ui,
  "/indicator/:y": Ls,
  "/annotations": as,
  "/annotation/:id": cs,
  "/draft": Cs,
  "/account": hs,
  "/login": ps,
  "/info": xs,
  "/subscription": ks
};
function qc() {
  mt(!0), n0("/annotations");
}
var jc = /* @__PURE__ */ P('<span class="svelte-1fh5lk4"> </span>'), Ic = /* @__PURE__ */ P('<button class="fab svelte-1fh5lk4" aria-label="Open annotations"><!> <!></button>');
const Pc = {
  hash: "svelte-1fh5lk4",
  code: ".fab.svelte-1fh5lk4 {font-family:var(--font-sans);font-weight:400;width:3rem;height:3rem;color:var(--text-color);background-color:var(--clr-accent-a0);border:none;border-radius:2rem;display:flex;align-items:center;justify-content:center;gap:0.25rem;font-size:0.825rem;line-height:2rem;padding:0;cursor:pointer;white-space:nowrap;transition:transform 0.1s ease, background-color 0.1s ease;position:fixed;bottom:2rem;right:2rem;z-index:10000;box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.2);}.fab.svelte-1fh5lk4:hover {background-color:var(--clr-accent-a10);}.fab.svelte-1fh5lk4:active {transform:translateY(2px);background-color:var(--clr-accent-a20);}span.svelte-1fh5lk4 {font-size:0.75rem;color:var(--color-primary-900);position:absolute;top:-0.5rem;right:-0.5rem;background-color:var(--color-primary-500);border-radius:50%;width:1.5rem;height:1.5rem;font-weight:600;display:flex;align-items:center;justify-content:center;font-size:0.75rem;}"
};
function Es(e, r) {
  V(r, !1), de(e, Pc), c0();
  var t = Ic();
  t.__click = [qc];
  var n = d(t);
  Hr(n, { size: "24" });
  var o = _(n, 2);
  {
    var i = (s) => {
      var a = jc(), l = d(a, !0);
      u(a), B(() => J(l, (se(Y), Q(() => Y.annotations.length)))), m(s, a);
    };
    Z(o, (s) => {
      se(Y), Q(() => Y.annotations.length > 0) && s(i);
    });
  }
  u(t), m(e, t), G();
}
Je(["click"]);
K(Es, {}, [], [], !0);
function As(e, r) {
  V(r, !0), f0(() => {
    typeof window < "u" && window.akinConfig && (console.log("WordPress configuration found:", window.akinConfig), window.akinConfig.serverUrl && !Re.serverUrl && (console.log("Setting server URL from WordPress config:", window.akinConfig.serverUrl), V1(window.akinConfig.serverUrl), G1.setServerUrl(window.akinConfig.serverUrl)), window.akinConfig.publicKey && !Re.publicKey && (console.log("Setting public key from WordPress config:", window.akinConfig.publicKey), Y1(window.akinConfig.publicKey)));
  }), De(() => {
    var t, n;
    (t = me.instance) != null && t.require_wp_user ? (console.log("Instance requires WordPress user"), (n = me.instance) != null && n.root_url ? (console.log("Initializing WordPress service with URL:", me.instance.root_url), us(me.instance.root_url)) : console.warn("No instance URL found")) : console.log("Instance does not require WordPress user");
  }), G();
}
K(As, {}, [], [], !0);
const Tc = (e) => e;
function Rc(e, { delay: r = 0, duration: t = 400, easing: n = Tc } = {}) {
  const o = +getComputedStyle(e).opacity;
  return {
    delay: r,
    duration: t,
    easing: n,
    css: (i) => `opacity: ${i * o}`
  };
}
var Mc = (e, r) => Fr(r()), Nc = /* @__PURE__ */ P('<button class="close svelte-17mquyi"><!></button>'), Oc = /* @__PURE__ */ P('<article role="alert"><div class="text svelte-17mquyi"><!></div> <!></article>');
const Dc = {
  hash: "svelte-17mquyi",
  code: `article.svelte-17mquyi {background:var(--color-grey-100);padding:0.5rem 1rem;border-radius:2rem;\r
      /* border: 1px solid var(--border-color); */display:flex;max-width:16rem;align-items:center;margin:0 auto 0.5rem auto;box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.2);}.error.svelte-17mquyi {background:var(--clr-danger-b0);\r
      /* border-color: var(--clr-danger-a0); */color:var(--clr-danger-a0);}.success.svelte-17mquyi {background:var(--clr-success-b0);\r
      /* border-color: var(--clr-success-a0); */color:var(--clr-success-a0);}.info.svelte-17mquyi {background:var(--clr-info-b0);\r
      /* border-color: var(--clr-info-a0); */color:var(--clr-info-a0);}.text.svelte-17mquyi {margin-left:.5rem;}button.svelte-17mquyi {background:transparent;color:inherit;border:0 none;padding:0;line-height:1;margin:0 0 0 1rem;font-size:1rem;cursor:pointer;}`
};
function Ss(e, r) {
  V(r, !0), de(e, Dc);
  const t = q(r, "id", 7), n = q(r, "type", 7), o = q(r, "dismissible", 7);
  var i = Oc(), s = d(i), a = d(s);
  pt(a, r, "default", {}), u(s);
  var l = _(s, 2);
  {
    var v = (p) => {
      var h = Nc();
      h.__click = [Mc, t];
      var g = d(h);
      an(g, { color: "currentColor" }), u(h), m(p, h);
    };
    Z(l, (p) => {
      o() && p(v);
    });
  }
  return u(i), B(() => ke(i, 1, et(n()), "svelte-17mquyi")), s2(3, i, () => Rc), m(e, i), G({
    get id() {
      return t();
    },
    set id(p) {
      t(p), $();
    },
    get type() {
      return n();
    },
    set type(p) {
      n(p), $();
    },
    get dismissible() {
      return o();
    },
    set dismissible(p) {
      o(p), $();
    }
  });
}
Je(["click"]);
K(Ss, { id: {}, type: {}, dismissible: {} }, ["default"], [], !0);
var Wc = /* @__PURE__ */ P('<section class="svelte-pw2uyc"></section>'), Uc = /* @__PURE__ */ P('<div id="toasts-outlet"></div> <!>', 1);
const Bc = {
  hash: "svelte-pw2uyc",
  code: "section.svelte-pw2uyc {position:fixed;bottom:6rem;right:2rem;display:flex;justify-content:center;flex-direction:column;z-index:1000;}"
};
function $s(e, r) {
  V(r, !1), de(e, Bc);
  function t(a) {
    return {
      destroy() {
      }
    };
  }
  c0();
  var n = Uc(), o = ae(n);
  ir(o, (a) => t == null ? void 0 : t());
  var i = _(o, 2);
  {
    var s = (a) => {
      var l = Wc();
      j0(
        l,
        5,
        () => (se(F0), Q(() => F0.toasts)),
        (v) => v.id,
        (v, p) => {
          Ss(v, {
            get type() {
              return c(p), Q(() => c(p).type);
            },
            get dismissible() {
              return c(p), Q(() => c(p).dismissible);
            },
            get id() {
              return c(p), Q(() => c(p).id);
            },
            children: (h, g) => {
              qe();
              var y = ze();
              B(() => J(y, (c(p), Q(() => c(p).message)))), m(h, y);
            },
            $$slots: { default: !0 }
          });
        }
      ), u(l), m(a, l);
    };
    Z(i, (a) => {
      se(F0), Q(() => F0.toasts.length > 0) && a(s);
    });
  }
  m(e, n), G();
}
K($s, {}, [], [], !0);
var Zc = /* @__PURE__ */ P(
  `<div class="akin"><!> <!> <!> <!></div> <style>.akin {
      /** Assuming the parent is flex */
      width: 100%;
      align-self: stretch;
      display: flex;
    }</style>`,
  1
), Fc = /* @__PURE__ */ P("<!> <!> <!> <!>", 1);
function Hc(e, r) {
  V(r, !0);
  const t = q(r, "selector", 7), n = q(r, "pageurl", 7), o = q(r, "publickey", 7), i = q(r, "serverurl", 7), s = q(r, "debug", 7);
  De(() => {
    i() && (V1(i()), G1.setServerUrl(i())), t() && (console.log("Loading instance by selector:", t()), ri(t()), I(a, t() ? document.querySelector(t()) : document.body, !0)), s() && ni(s());
  }), De(() => {
    o() && Y1(o()), Re.publicKey && (console.log("Loading instance by public key:", Re.publicKey), pi(Re.publicKey).then((f) => {
      console.log("Instance loaded:", f), f || Xe({
        message: "Akin server is down",
        type: "error",
        dismissible: !0,
        timeout: 1e4
      });
    }));
  }), De(() => {
    var w;
    if (!((w = me.instance) != null && w.id)) return;
    const f = n() || (typeof window < "u" ? window.location.origin + window.location.pathname : null);
    f && (ti(f), ci(me.instance.id, f));
  }), De(() => {
    me.instance && Ei();
  }), De(() => {
    var f;
    (f = Fe.document) != null && f.id ? J1({ documentId: Fe.document.id }) : Y.annotations = [];
  }), De(() => {
    Fe.error && console.warn("Failed to load document:", Fe.error);
  }), De(() => {
    if (typeof window > "u") return;
    function f() {
      xi(window.innerWidth < 768);
    }
    return window.addEventListener("resize", f), () => {
      window.removeEventListener("resize", f);
    };
  });
  let a = /* @__PURE__ */ te(null);
  f0(async () => {
    var z;
    console.log("Mounting Akin component with: ", {
      publickey: o(),
      pageurl: n(),
      serverurl: i(),
      selector: t()
    });
    let f = null;
    if (f = new URLSearchParams(window.location.search).get("token_hash"), !f && window.location.hash) {
      const L = window.location.hash.substring(1).split("&");
      for (const U of L) {
        const [S, E] = U.split("=");
        if (S === "token_hash") {
          f = E;
          break;
        }
      }
    }
    if (f) {
      const L = Xe({
        message: "Confirming login...",
        type: "info",
        dismissible: !1,
        timeout: 0
      }), U = await Ci(f, Re.publicKey);
      Fr(L), Xe(U ? {
        message: "Login confirmed!",
        type: "success",
        dismissible: !0,
        timeout: 3e3
      } : {
        message: l0((z = N.error) == null ? void 0 : z.code, { scope: "auth", table: "subscriber" }).message || "Login failed",
        type: "error",
        dismissible: !0,
        timeout: 1e4
      });
    }
    n0("/");
  });
  var l = Fc(), v = ae(l);
  {
    var p = (f) => {
      var w = Zc(), z = ae(w), L = d(z);
      Oi(L, {
        get rootElement() {
          return c(a);
        }
      });
      var U = _(L, 2);
      qi(U, {
        get rootElement() {
          return c(a);
        }
      });
      var S = _(U, 2);
      Es(S, {});
      var E = _(S, 2);
      Ri(E, {
        children: (x, b) => {
          $i(x, {
            get routes() {
              return $c;
            }
          });
        },
        $$slots: { default: !0 }
      }), u(z), qe(2), m(f, w);
    };
    Z(v, (f) => {
      me.instance && f(p);
    });
  }
  var h = _(v, 2);
  $s(h, {});
  var g = _(h, 2);
  fn(g, {});
  var y = _(g, 2);
  return As(y, {}), m(e, l), G({
    get selector() {
      return t();
    },
    set selector(f) {
      t(f), $();
    },
    get pageurl() {
      return n();
    },
    set pageurl(f) {
      n(f), $();
    },
    get publickey() {
      return o();
    },
    set publickey(f) {
      o(f), $();
    },
    get serverurl() {
      return i();
    },
    set serverurl(f) {
      i(f), $();
    },
    get debug() {
      return s();
    },
    set debug(f) {
      s(f), $();
    }
  });
}
customElements.define("ak-in", K(
  Hc,
  {
    selector: {},
    pageurl: {},
    publickey: {},
    serverurl: {},
    debug: {}
  },
  [],
  [],
  !1
));
const Kc = document.querySelector("ak-in");
if (Kc)
  console.log("Akin web component found, trying to use it");
else {
  console.log("Akin web component not found, building it");
  const e = document.createElement("ak-in");
  e.setAttribute("pageurl", ei(window.location.href));
  const r = Array.from(document.body.children), t = document.createElement("div");
  t.className = "akin-body-wrapper", r.forEach((n) => {
    t.appendChild(n);
  }), document.body.appendChild(t), document.body.appendChild(e), document.body.style.display = "flex", document.body.style.flexDirection = "row", document.body.style.justifyContent = "space-between", document.body.style.alignItems = "stretch";
}
//# sourceMappingURL=akin.js.map

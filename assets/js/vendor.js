!(function (e, t) {
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error('jQuery requires a window with a document')
            return t(e)
          })
    : t(e)
})('undefined' != typeof window ? window : this, function (T, e) {
  var t = [],
    C = T.document,
    u = t.slice,
    g = t.concat,
    a = t.push,
    o = t.indexOf,
    i = {},
    n = i.toString,
    f = i.hasOwnProperty,
    v = {},
    s = '2.2.4',
    k = function (e, t) {
      return new k.fn.init(e, t)
    },
    r = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    l = /^-ms-/,
    c = /-([\da-z])/gi,
    d = function (e, t) {
      return t.toUpperCase()
    }
  function p(e) {
    var t = !!e && 'length' in e && e.length,
      i = k.type(e)
    return (
      'function' !== i &&
      !k.isWindow(e) &&
      ('array' === i ||
        0 === t ||
        ('number' == typeof t && 0 < t && t - 1 in e))
    )
  }
  ;(k.fn = k.prototype =
    {
      jquery: s,
      constructor: k,
      selector: '',
      length: 0,
      toArray: function () {
        return u.call(this)
      },
      get: function (e) {
        return null != e
          ? e < 0
            ? this[e + this.length]
            : this[e]
          : u.call(this)
      },
      pushStack: function (e) {
        var t = k.merge(this.constructor(), e)
        return (t.prevObject = this), (t.context = this.context), t
      },
      each: function (e) {
        return k.each(this, e)
      },
      map: function (i) {
        return this.pushStack(
          k.map(this, function (e, t) {
            return i.call(e, t, e)
          })
        )
      },
      slice: function () {
        return this.pushStack(u.apply(this, arguments))
      },
      first: function () {
        return this.eq(0)
      },
      last: function () {
        return this.eq(-1)
      },
      eq: function (e) {
        var t = this.length,
          i = +e + (e < 0 ? t : 0)
        return this.pushStack(0 <= i && i < t ? [this[i]] : [])
      },
      end: function () {
        return this.prevObject || this.constructor()
      },
      push: a,
      sort: t.sort,
      splice: t.splice,
    }),
    (k.extend = k.fn.extend =
      function () {
        var e,
          t,
          i,
          n,
          o,
          s,
          r = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1
        for (
          'boolean' == typeof r && ((c = r), (r = arguments[a] || {}), a++),
            'object' == typeof r || k.isFunction(r) || (r = {}),
            a === l && ((r = this), a--);
          a < l;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (i = r[t]),
                r !== (n = e[t]) &&
                  (c && n && (k.isPlainObject(n) || (o = k.isArray(n)))
                    ? ((s = o
                        ? ((o = !1), i && k.isArray(i) ? i : [])
                        : i && k.isPlainObject(i)
                        ? i
                        : {}),
                      (r[t] = k.extend(c, s, n)))
                    : void 0 !== n && (r[t] = n))
        return r
      }),
    k.extend({
      expando: 'jQuery' + (s + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e)
      },
      noop: function () {},
      isFunction: function (e) {
        return 'function' === k.type(e)
      },
      isArray: Array.isArray,
      isWindow: function (e) {
        return null != e && e === e.window
      },
      isNumeric: function (e) {
        var t = e && e.toString()
        return !k.isArray(e) && 0 <= t - parseFloat(t) + 1
      },
      isPlainObject: function (e) {
        var t
        if ('object' !== k.type(e) || e.nodeType || k.isWindow(e)) return !1
        if (
          e.constructor &&
          !f.call(e, 'constructor') &&
          !f.call(e.constructor.prototype || {}, 'isPrototypeOf')
        )
          return !1
        for (t in e);
        return void 0 === t || f.call(e, t)
      },
      isEmptyObject: function (e) {
        var t
        for (t in e) return !1
        return !0
      },
      type: function (e) {
        return null == e
          ? e + ''
          : 'object' == typeof e || 'function' == typeof e
          ? i[n.call(e)] || 'object'
          : typeof e
      },
      globalEval: function (e) {
        var t,
          i = eval
        ;(e = k.trim(e)) &&
          (1 === e.indexOf('use strict')
            ? (((t = C.createElement('script')).text = e),
              C.head.appendChild(t).parentNode.removeChild(t))
            : i(e))
      },
      camelCase: function (e) {
        return e.replace(l, 'ms-').replace(c, d)
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function (e, t) {
        var i,
          n = 0
        if (p(e))
          for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
        else for (n in e) if (!1 === t.call(e[n], n, e[n])) break
        return e
      },
      trim: function (e) {
        return null == e ? '' : (e + '').replace(r, '')
      },
      makeArray: function (e, t) {
        var i = t || []
        return (
          null != e &&
            (p(Object(e))
              ? k.merge(i, 'string' == typeof e ? [e] : e)
              : a.call(i, e)),
          i
        )
      },
      inArray: function (e, t, i) {
        return null == t ? -1 : o.call(t, e, i)
      },
      merge: function (e, t) {
        for (var i = +t.length, n = 0, o = e.length; n < i; n++) e[o++] = t[n]
        return (e.length = o), e
      },
      grep: function (e, t, i) {
        for (var n = [], o = 0, s = e.length, r = !i; o < s; o++)
          !t(e[o], o) !== r && n.push(e[o])
        return n
      },
      map: function (e, t, i) {
        var n,
          o,
          s = 0,
          r = []
        if (p(e))
          for (n = e.length; s < n; s++)
            null != (o = t(e[s], s, i)) && r.push(o)
        else for (s in e) null != (o = t(e[s], s, i)) && r.push(o)
        return g.apply([], r)
      },
      guid: 1,
      proxy: function (e, t) {
        var i, n, o
        return (
          'string' == typeof t && ((i = e[t]), (t = e), (e = i)),
          k.isFunction(e)
            ? ((n = u.call(arguments, 2)),
              ((o = function () {
                return e.apply(t || this, n.concat(u.call(arguments)))
              }).guid = e.guid =
                e.guid || k.guid++),
              o)
            : void 0
        )
      },
      now: Date.now,
      support: v,
    }),
    'function' == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
    k.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' '
      ),
      function (e, t) {
        i['[object ' + t + ']'] = t.toLowerCase()
      }
    )
  var h = (function (i) {
    var e,
      f,
      w,
      s,
      o,
      g,
      d,
      v,
      b,
      l,
      c,
      x,
      T,
      r,
      C,
      m,
      a,
      u,
      _,
      k = 'sizzle' + 1 * new Date(),
      y = i.document,
      S = 0,
      n = 0,
      p = oe(),
      h = oe(),
      $ = oe(),
      E = function (e, t) {
        return e === t && (c = !0), 0
      },
      O = {}.hasOwnProperty,
      t = [],
      A = t.pop,
      D = t.push,
      M = t.push,
      P = t.slice,
      I = function (e, t) {
        for (var i = 0, n = e.length; i < n; i++) if (e[i] === t) return i
        return -1
      },
      N =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      j = '[\\x20\\t\\r\\n\\f]',
      z = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
      L =
        '\\[' +
        j +
        '*(' +
        z +
        ')(?:' +
        j +
        '*([*^$|!~]?=)' +
        j +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        z +
        '))|)' +
        j +
        '*\\]',
      H =
        ':(' +
        z +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        L +
        ')*)|.*)\\)|)',
      q = new RegExp(j + '+', 'g'),
      F = new RegExp('^' + j + '+|((?:^|[^\\\\])(?:\\\\.)*)' + j + '+$', 'g'),
      W = new RegExp('^' + j + '*,' + j + '*'),
      R = new RegExp('^' + j + '*([>+~]|' + j + ')' + j + '*'),
      B = new RegExp('=' + j + '*([^\\]\'"]*?)' + j + '*\\]', 'g'),
      U = new RegExp(H),
      V = new RegExp('^' + z + '$'),
      X = {
        ID: new RegExp('^#(' + z + ')'),
        CLASS: new RegExp('^\\.(' + z + ')'),
        TAG: new RegExp('^(' + z + '|[*])'),
        ATTR: new RegExp('^' + L),
        PSEUDO: new RegExp('^' + H),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            j +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            j +
            '*(?:([+-]|)' +
            j +
            '*(\\d+)|))' +
            j +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + N + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            j +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            j +
            '*((?:-\\d)?\\d*)' +
            j +
            '*\\)|)(?=[^-]|$)',
          'i'
        ),
      },
      G = /^(?:input|select|textarea|button)$/i,
      Y = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      J = /[+~]/,
      Z = /'|\\/g,
      ee = new RegExp('\\\\([\\da-f]{1,6}' + j + '?|(' + j + ')|.)', 'ig'),
      te = function (e, t, i) {
        var n = '0x' + t - 65536
        return n != n || i
          ? t
          : n < 0
          ? String.fromCharCode(n + 65536)
          : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320)
      },
      ie = function () {
        x()
      }
    try {
      M.apply((t = P.call(y.childNodes)), y.childNodes),
        t[y.childNodes.length].nodeType
    } catch (e) {
      M = {
        apply: t.length
          ? function (e, t) {
              D.apply(e, P.call(t))
            }
          : function (e, t) {
              for (var i = e.length, n = 0; (e[i++] = t[n++]); );
              e.length = i - 1
            },
      }
    }
    function ne(e, t, i, n) {
      var o,
        s,
        r,
        a,
        l,
        c,
        u,
        d,
        p = t && t.ownerDocument,
        h = t ? t.nodeType : 9
      if (
        ((i = i || []),
        'string' != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
      )
        return i
      if (
        !n &&
        ((t ? t.ownerDocument || t : y) !== T && x(t), (t = t || T), C)
      ) {
        if (11 !== h && (c = K.exec(e)))
          if ((o = c[1])) {
            if (9 === h) {
              if (!(r = t.getElementById(o))) return i
              if (r.id === o) return i.push(r), i
            } else if (p && (r = p.getElementById(o)) && _(t, r) && r.id === o)
              return i.push(r), i
          } else {
            if (c[2]) return M.apply(i, t.getElementsByTagName(e)), i
            if (
              (o = c[3]) &&
              f.getElementsByClassName &&
              t.getElementsByClassName
            )
              return M.apply(i, t.getElementsByClassName(o)), i
          }
        if (f.qsa && !$[e + ' '] && (!m || !m.test(e))) {
          if (1 !== h) (p = t), (d = e)
          else if ('object' !== t.nodeName.toLowerCase()) {
            for (
              (a = t.getAttribute('id'))
                ? (a = a.replace(Z, '\\$&'))
                : t.setAttribute('id', (a = k)),
                s = (u = g(e)).length,
                l = V.test(a) ? '#' + a : "[id='" + a + "']";
              s--;

            )
              u[s] = l + ' ' + fe(u[s])
            ;(d = u.join(',')), (p = (J.test(e) && pe(t.parentNode)) || t)
          }
          if (d)
            try {
              return M.apply(i, p.querySelectorAll(d)), i
            } catch (e) {
            } finally {
              a === k && t.removeAttribute('id')
            }
        }
      }
      return v(e.replace(F, '$1'), t, i, n)
    }
    function oe() {
      var n = []
      return function e(t, i) {
        return (
          n.push(t + ' ') > w.cacheLength && delete e[n.shift()],
          (e[t + ' '] = i)
        )
      }
    }
    function se(e) {
      return (e[k] = !0), e
    }
    function re(e) {
      var t = T.createElement('div')
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null)
      }
    }
    function ae(e, t) {
      for (var i = e.split('|'), n = i.length; n--; ) w.attrHandle[i[n]] = t
    }
    function le(e, t) {
      var i = t && e,
        n =
          i &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31)
      if (n) return n
      if (i) for (; (i = i.nextSibling); ) if (i === t) return -1
      return e ? 1 : -1
    }
    function ce(t) {
      return function (e) {
        return 'input' === e.nodeName.toLowerCase() && e.type === t
      }
    }
    function ue(i) {
      return function (e) {
        var t = e.nodeName.toLowerCase()
        return ('input' === t || 'button' === t) && e.type === i
      }
    }
    function de(r) {
      return se(function (s) {
        return (
          (s = +s),
          se(function (e, t) {
            for (var i, n = r([], e.length, s), o = n.length; o--; )
              e[(i = n[o])] && (e[i] = !(t[i] = e[i]))
          })
        )
      })
    }
    function pe(e) {
      return e && void 0 !== e.getElementsByTagName && e
    }
    for (e in ((f = ne.support = {}),
    (o = ne.isXML =
      function (e) {
        var t = e && (e.ownerDocument || e).documentElement
        return !!t && 'HTML' !== t.nodeName
      }),
    (x = ne.setDocument =
      function (e) {
        var t,
          i,
          n = e ? e.ownerDocument || e : y
        return (
          n !== T &&
            9 === n.nodeType &&
            n.documentElement &&
            ((r = (T = n).documentElement),
            (C = !o(T)),
            (i = T.defaultView) &&
              i.top !== i &&
              (i.addEventListener
                ? i.addEventListener('unload', ie, !1)
                : i.attachEvent && i.attachEvent('onunload', ie)),
            (f.attributes = re(function (e) {
              return (e.className = 'i'), !e.getAttribute('className')
            })),
            (f.getElementsByTagName = re(function (e) {
              return (
                e.appendChild(T.createComment('')),
                !e.getElementsByTagName('*').length
              )
            })),
            (f.getElementsByClassName = Q.test(T.getElementsByClassName)),
            (f.getById = re(function (e) {
              return (
                (r.appendChild(e).id = k),
                !T.getElementsByName || !T.getElementsByName(k).length
              )
            })),
            f.getById
              ? ((w.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && C) {
                    var i = t.getElementById(e)
                    return i ? [i] : []
                  }
                }),
                (w.filter.ID = function (e) {
                  var t = e.replace(ee, te)
                  return function (e) {
                    return e.getAttribute('id') === t
                  }
                }))
              : (delete w.find.ID,
                (w.filter.ID = function (e) {
                  var i = e.replace(ee, te)
                  return function (e) {
                    var t =
                      void 0 !== e.getAttributeNode && e.getAttributeNode('id')
                    return t && t.value === i
                  }
                })),
            (w.find.TAG = f.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : f.qsa
                    ? t.querySelectorAll(e)
                    : void 0
                }
              : function (e, t) {
                  var i,
                    n = [],
                    o = 0,
                    s = t.getElementsByTagName(e)
                  if ('*' !== e) return s
                  for (; (i = s[o++]); ) 1 === i.nodeType && n.push(i)
                  return n
                }),
            (w.find.CLASS =
              f.getElementsByClassName &&
              function (e, t) {
                return void 0 !== t.getElementsByClassName && C
                  ? t.getElementsByClassName(e)
                  : void 0
              }),
            (a = []),
            (m = []),
            (f.qsa = Q.test(T.querySelectorAll)) &&
              (re(function (e) {
                ;(r.appendChild(e).innerHTML =
                  "<a id='" +
                  k +
                  "'></a><select id='" +
                  k +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    m.push('[*^$]=' + j + '*(?:\'\'|"")'),
                  e.querySelectorAll('[selected]').length ||
                    m.push('\\[' + j + '*(?:value|' + N + ')'),
                  e.querySelectorAll('[id~=' + k + '-]').length || m.push('~='),
                  e.querySelectorAll(':checked').length || m.push(':checked'),
                  e.querySelectorAll('a#' + k + '+*').length ||
                    m.push('.#.+[+~]')
              }),
              re(function (e) {
                var t = T.createElement('input')
                t.setAttribute('type', 'hidden'),
                  e.appendChild(t).setAttribute('name', 'D'),
                  e.querySelectorAll('[name=d]').length &&
                    m.push('name' + j + '*[*^$|!~]?='),
                  e.querySelectorAll(':enabled').length ||
                    m.push(':enabled', ':disabled'),
                  e.querySelectorAll('*,:x'),
                  m.push(',.*:')
              })),
            (f.matchesSelector = Q.test(
              (u =
                r.matches ||
                r.webkitMatchesSelector ||
                r.mozMatchesSelector ||
                r.oMatchesSelector ||
                r.msMatchesSelector)
            )) &&
              re(function (e) {
                ;(f.disconnectedMatch = u.call(e, 'div')),
                  u.call(e, "[s!='']:x"),
                  a.push('!=', H)
              }),
            (m = m.length && new RegExp(m.join('|'))),
            (a = a.length && new RegExp(a.join('|'))),
            (t = Q.test(r.compareDocumentPosition)),
            (_ =
              t || Q.test(r.contains)
                ? function (e, t) {
                    var i = 9 === e.nodeType ? e.documentElement : e,
                      n = t && t.parentNode
                    return (
                      e === n ||
                      !(
                        !n ||
                        1 !== n.nodeType ||
                        !(i.contains
                          ? i.contains(n)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(n))
                      )
                    )
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0
                    return !1
                  }),
            (E = t
              ? function (e, t) {
                  if (e === t) return (c = !0), 0
                  var i =
                    !e.compareDocumentPosition - !t.compareDocumentPosition
                  return (
                    i ||
                    (1 &
                      (i =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!f.sortDetached && t.compareDocumentPosition(e) === i)
                      ? e === T || (e.ownerDocument === y && _(y, e))
                        ? -1
                        : t === T || (t.ownerDocument === y && _(y, t))
                        ? 1
                        : l
                        ? I(l, e) - I(l, t)
                        : 0
                      : 4 & i
                      ? -1
                      : 1)
                  )
                }
              : function (e, t) {
                  if (e === t) return (c = !0), 0
                  var i,
                    n = 0,
                    o = e.parentNode,
                    s = t.parentNode,
                    r = [e],
                    a = [t]
                  if (!o || !s)
                    return e === T
                      ? -1
                      : t === T
                      ? 1
                      : o
                      ? -1
                      : s
                      ? 1
                      : l
                      ? I(l, e) - I(l, t)
                      : 0
                  if (o === s) return le(e, t)
                  for (i = e; (i = i.parentNode); ) r.unshift(i)
                  for (i = t; (i = i.parentNode); ) a.unshift(i)
                  for (; r[n] === a[n]; ) n++
                  return n
                    ? le(r[n], a[n])
                    : r[n] === y
                    ? -1
                    : a[n] === y
                    ? 1
                    : 0
                })),
          T
        )
      }),
    (ne.matches = function (e, t) {
      return ne(e, null, null, t)
    }),
    (ne.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== T && x(e),
        (t = t.replace(B, "='$1']")),
        f.matchesSelector &&
          C &&
          !$[t + ' '] &&
          (!a || !a.test(t)) &&
          (!m || !m.test(t)))
      )
        try {
          var i = u.call(e, t)
          if (
            i ||
            f.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return i
        } catch (e) {}
      return 0 < ne(t, T, null, [e]).length
    }),
    (ne.contains = function (e, t) {
      return (e.ownerDocument || e) !== T && x(e), _(e, t)
    }),
    (ne.attr = function (e, t) {
      ;(e.ownerDocument || e) !== T && x(e)
      var i = w.attrHandle[t.toLowerCase()],
        n = i && O.call(w.attrHandle, t.toLowerCase()) ? i(e, t, !C) : void 0
      return void 0 !== n
        ? n
        : f.attributes || !C
        ? e.getAttribute(t)
        : (n = e.getAttributeNode(t)) && n.specified
        ? n.value
        : null
    }),
    (ne.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e)
    }),
    (ne.uniqueSort = function (e) {
      var t,
        i = [],
        n = 0,
        o = 0
      if (
        ((c = !f.detectDuplicates),
        (l = !f.sortStable && e.slice(0)),
        e.sort(E),
        c)
      ) {
        for (; (t = e[o++]); ) t === e[o] && (n = i.push(o))
        for (; n--; ) e.splice(i[n], 1)
      }
      return (l = null), e
    }),
    (s = ne.getText =
      function (e) {
        var t,
          i = '',
          n = 0,
          o = e.nodeType
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ('string' == typeof e.textContent) return e.textContent
            for (e = e.firstChild; e; e = e.nextSibling) i += s(e)
          } else if (3 === o || 4 === o) return e.nodeValue
        } else for (; (t = e[n++]); ) i += s(t)
        return i
      }),
    ((w = ne.selectors =
      {
        cacheLength: 50,
        createPseudo: se,
        match: X,
        attrHandle: {},
        find: {},
        relative: {
          '>': { dir: 'parentNode', first: !0 },
          ' ': { dir: 'parentNode' },
          '+': { dir: 'previousSibling', first: !0 },
          '~': { dir: 'previousSibling' },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(ee, te)),
              (e[3] = (e[3] || e[4] || e[5] || '').replace(ee, te)),
              '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
              e.slice(0, 4)
            )
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              'nth' === e[1].slice(0, 3)
                ? (e[3] || ne.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ('even' === e[3] || 'odd' === e[3]))),
                  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                : e[3] && ne.error(e[0]),
              e
            )
          },
          PSEUDO: function (e) {
            var t,
              i = !e[6] && e[2]
            return X.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || '')
                  : i &&
                    U.test(i) &&
                    (t = g(i, !0)) &&
                    (t = i.indexOf(')', i.length - t) - i.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = i.slice(0, t))),
                e.slice(0, 3))
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(ee, te).toLowerCase()
            return '*' === e
              ? function () {
                  return !0
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t
                }
          },
          CLASS: function (e) {
            var t = p[e + ' ']
            return (
              t ||
              ((t = new RegExp('(^|' + j + ')' + e + '(' + j + '|$)')) &&
                p(e, function (e) {
                  return t.test(
                    ('string' == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                      ''
                  )
                }))
            )
          },
          ATTR: function (i, n, o) {
            return function (e) {
              var t = ne.attr(e, i)
              return null == t
                ? '!=' === n
                : !n ||
                    ((t += ''),
                    '=' === n
                      ? t === o
                      : '!=' === n
                      ? t !== o
                      : '^=' === n
                      ? o && 0 === t.indexOf(o)
                      : '*=' === n
                      ? o && -1 < t.indexOf(o)
                      : '$=' === n
                      ? o && t.slice(-o.length) === o
                      : '~=' === n
                      ? -1 < (' ' + t.replace(q, ' ') + ' ').indexOf(o)
                      : '|=' === n &&
                        (t === o || t.slice(0, o.length + 1) === o + '-'))
            }
          },
          CHILD: function (f, e, t, g, v) {
            var m = 'nth' !== f.slice(0, 3),
              _ = 'last' !== f.slice(-4),
              y = 'of-type' === e
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode
                }
              : function (e, t, i) {
                  var n,
                    o,
                    s,
                    r,
                    a,
                    l,
                    c = m !== _ ? 'nextSibling' : 'previousSibling',
                    u = e.parentNode,
                    d = y && e.nodeName.toLowerCase(),
                    p = !i && !y,
                    h = !1
                  if (u) {
                    if (m) {
                      for (; c; ) {
                        for (r = e; (r = r[c]); )
                          if (
                            y
                              ? r.nodeName.toLowerCase() === d
                              : 1 === r.nodeType
                          )
                            return !1
                        l = c = 'only' === f && !l && 'nextSibling'
                      }
                      return !0
                    }
                    if (((l = [_ ? u.firstChild : u.lastChild]), _ && p)) {
                      for (
                        h =
                          (a =
                            (n =
                              (o =
                                (s = (r = u)[k] || (r[k] = {}))[r.uniqueID] ||
                                (s[r.uniqueID] = {}))[f] || [])[0] === S &&
                            n[1]) && n[2],
                          r = a && u.childNodes[a];
                        (r = (++a && r && r[c]) || (h = a = 0) || l.pop());

                      )
                        if (1 === r.nodeType && ++h && r === e) {
                          o[f] = [S, a, h]
                          break
                        }
                    } else if (
                      (p &&
                        (h = a =
                          (n =
                            (o =
                              (s = (r = e)[k] || (r[k] = {}))[r.uniqueID] ||
                              (s[r.uniqueID] = {}))[f] || [])[0] === S && n[1]),
                      !1 === h)
                    )
                      for (
                        ;
                        (r = (++a && r && r[c]) || (h = a = 0) || l.pop()) &&
                        ((y
                          ? r.nodeName.toLowerCase() !== d
                          : 1 !== r.nodeType) ||
                          !++h ||
                          (p &&
                            ((o =
                              (s = r[k] || (r[k] = {}))[r.uniqueID] ||
                              (s[r.uniqueID] = {}))[f] = [S, h]),
                          r !== e));

                      );
                    return (h -= v) === g || (h % g == 0 && 0 <= h / g)
                  }
                }
          },
          PSEUDO: function (e, s) {
            var t,
              r =
                w.pseudos[e] ||
                w.setFilters[e.toLowerCase()] ||
                ne.error('unsupported pseudo: ' + e)
            return r[k]
              ? r(s)
              : 1 < r.length
              ? ((t = [e, e, '', s]),
                w.setFilters.hasOwnProperty(e.toLowerCase())
                  ? se(function (e, t) {
                      for (var i, n = r(e, s), o = n.length; o--; )
                        e[(i = I(e, n[o]))] = !(t[i] = n[o])
                    })
                  : function (e) {
                      return r(e, 0, t)
                    })
              : r
          },
        },
        pseudos: {
          not: se(function (e) {
            var n = [],
              o = [],
              a = d(e.replace(F, '$1'))
            return a[k]
              ? se(function (e, t, i, n) {
                  for (var o, s = a(e, null, n, []), r = e.length; r--; )
                    (o = s[r]) && (e[r] = !(t[r] = o))
                })
              : function (e, t, i) {
                  return (n[0] = e), a(n, null, i, o), (n[0] = null), !o.pop()
                }
          }),
          has: se(function (t) {
            return function (e) {
              return 0 < ne(t, e).length
            }
          }),
          contains: se(function (t) {
            return (
              (t = t.replace(ee, te)),
              function (e) {
                return -1 < (e.textContent || e.innerText || s(e)).indexOf(t)
              }
            )
          }),
          lang: se(function (i) {
            return (
              V.test(i || '') || ne.error('unsupported lang: ' + i),
              (i = i.replace(ee, te).toLowerCase()),
              function (e) {
                var t
                do {
                  if (
                    (t = C
                      ? e.lang
                      : e.getAttribute('xml:lang') || e.getAttribute('lang'))
                  )
                    return (
                      (t = t.toLowerCase()) === i || 0 === t.indexOf(i + '-')
                    )
                } while ((e = e.parentNode) && 1 === e.nodeType)
                return !1
              }
            )
          }),
          target: function (e) {
            var t = i.location && i.location.hash
            return t && t.slice(1) === e.id
          },
          root: function (e) {
            return e === r
          },
          focus: function (e) {
            return (
              e === T.activeElement &&
              (!T.hasFocus || T.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            )
          },
          enabled: function (e) {
            return !1 === e.disabled
          },
          disabled: function (e) {
            return !0 === e.disabled
          },
          checked: function (e) {
            var t = e.nodeName.toLowerCase()
            return (
              ('input' === t && !!e.checked) || ('option' === t && !!e.selected)
            )
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1
            return !0
          },
          parent: function (e) {
            return !w.pseudos.empty(e)
          },
          header: function (e) {
            return Y.test(e.nodeName)
          },
          input: function (e) {
            return G.test(e.nodeName)
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase()
            return ('input' === t && 'button' === e.type) || 'button' === t
          },
          text: function (e) {
            var t
            return (
              'input' === e.nodeName.toLowerCase() &&
              'text' === e.type &&
              (null == (t = e.getAttribute('type')) ||
                'text' === t.toLowerCase())
            )
          },
          first: de(function () {
            return [0]
          }),
          last: de(function (e, t) {
            return [t - 1]
          }),
          eq: de(function (e, t, i) {
            return [i < 0 ? i + t : i]
          }),
          even: de(function (e, t) {
            for (var i = 0; i < t; i += 2) e.push(i)
            return e
          }),
          odd: de(function (e, t) {
            for (var i = 1; i < t; i += 2) e.push(i)
            return e
          }),
          lt: de(function (e, t, i) {
            for (var n = i < 0 ? i + t : i; 0 <= --n; ) e.push(n)
            return e
          }),
          gt: de(function (e, t, i) {
            for (var n = i < 0 ? i + t : i; ++n < t; ) e.push(n)
            return e
          }),
        },
      }).pseudos.nth = w.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      w.pseudos[e] = ce(e)
    for (e in { submit: !0, reset: !0 }) w.pseudos[e] = ue(e)
    function he() {}
    function fe(e) {
      for (var t = 0, i = e.length, n = ''; t < i; t++) n += e[t].value
      return n
    }
    function ge(a, e, t) {
      var l = e.dir,
        c = t && 'parentNode' === l,
        u = n++
      return e.first
        ? function (e, t, i) {
            for (; (e = e[l]); ) if (1 === e.nodeType || c) return a(e, t, i)
          }
        : function (e, t, i) {
            var n,
              o,
              s,
              r = [S, u]
            if (i) {
              for (; (e = e[l]); )
                if ((1 === e.nodeType || c) && a(e, t, i)) return !0
            } else
              for (; (e = e[l]); )
                if (1 === e.nodeType || c) {
                  if (
                    (n = (o =
                      (s = e[k] || (e[k] = {}))[e.uniqueID] ||
                      (s[e.uniqueID] = {}))[l]) &&
                    n[0] === S &&
                    n[1] === u
                  )
                    return (r[2] = n[2])
                  if (((o[l] = r)[2] = a(e, t, i))) return !0
                }
          }
    }
    function ve(o) {
      return 1 < o.length
        ? function (e, t, i) {
            for (var n = o.length; n--; ) if (!o[n](e, t, i)) return !1
            return !0
          }
        : o[0]
    }
    function me(e, t, i, n, o) {
      for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++)
        (s = e[a]) && ((i && !i(s, n, o)) || (r.push(s), c && t.push(a)))
      return r
    }
    function _e(h, f, g, v, m, e) {
      return (
        v && !v[k] && (v = _e(v)),
        m && !m[k] && (m = _e(m, e)),
        se(function (e, t, i, n) {
          var o,
            s,
            r,
            a = [],
            l = [],
            c = t.length,
            u =
              e ||
              (function (e, t, i) {
                for (var n = 0, o = t.length; n < o; n++) ne(e, t[n], i)
                return i
              })(f || '*', i.nodeType ? [i] : i, []),
            d = !h || (!e && f) ? u : me(u, a, h, i, n),
            p = g ? (m || (e ? h : c || v) ? [] : t) : d
          if ((g && g(d, p, i, n), v))
            for (o = me(p, l), v(o, [], i, n), s = o.length; s--; )
              (r = o[s]) && (p[l[s]] = !(d[l[s]] = r))
          if (e) {
            if (m || h) {
              if (m) {
                for (o = [], s = p.length; s--; )
                  (r = p[s]) && o.push((d[s] = r))
                m(null, (p = []), o, n)
              }
              for (s = p.length; s--; )
                (r = p[s]) &&
                  -1 < (o = m ? I(e, r) : a[s]) &&
                  (e[o] = !(t[o] = r))
            }
          } else (p = me(p === t ? p.splice(c, p.length) : p)), m ? m(null, t, p, n) : M.apply(t, p)
        })
      )
    }
    function ye(e) {
      for (
        var o,
          t,
          i,
          n = e.length,
          s = w.relative[e[0].type],
          r = s || w.relative[' '],
          a = s ? 1 : 0,
          l = ge(
            function (e) {
              return e === o
            },
            r,
            !0
          ),
          c = ge(
            function (e) {
              return -1 < I(o, e)
            },
            r,
            !0
          ),
          u = [
            function (e, t, i) {
              var n =
                (!s && (i || t !== b)) ||
                ((o = t).nodeType ? l(e, t, i) : c(e, t, i))
              return (o = null), n
            },
          ];
        a < n;
        a++
      )
        if ((t = w.relative[e[a].type])) u = [ge(ve(u), t)]
        else {
          if ((t = w.filter[e[a].type].apply(null, e[a].matches))[k]) {
            for (i = ++a; i < n && !w.relative[e[i].type]; i++);
            return _e(
              1 < a && ve(u),
              1 < a &&
                fe(
                  e
                    .slice(0, a - 1)
                    .concat({ value: ' ' === e[a - 2].type ? '*' : '' })
                ).replace(F, '$1'),
              t,
              a < i && ye(e.slice(a, i)),
              i < n && ye((e = e.slice(i))),
              i < n && fe(e)
            )
          }
          u.push(t)
        }
      return ve(u)
    }
    return (
      (he.prototype = w.filters = w.pseudos),
      (w.setFilters = new he()),
      (g = ne.tokenize =
        function (e, t) {
          var i,
            n,
            o,
            s,
            r,
            a,
            l,
            c = h[e + ' ']
          if (c) return t ? 0 : c.slice(0)
          for (r = e, a = [], l = w.preFilter; r; ) {
            for (s in ((i && !(n = W.exec(r))) ||
              (n && (r = r.slice(n[0].length) || r), a.push((o = []))),
            (i = !1),
            (n = R.exec(r)) &&
              ((i = n.shift()),
              o.push({ value: i, type: n[0].replace(F, ' ') }),
              (r = r.slice(i.length))),
            w.filter))
              !(n = X[s].exec(r)) ||
                (l[s] && !(n = l[s](n))) ||
                ((i = n.shift()),
                o.push({ value: i, type: s, matches: n }),
                (r = r.slice(i.length)))
            if (!i) break
          }
          return t ? r.length : r ? ne.error(e) : h(e, a).slice(0)
        }),
      (d = ne.compile =
        function (e, t) {
          var i,
            v,
            m,
            _,
            y,
            n,
            o = [],
            s = [],
            r = $[e + ' ']
          if (!r) {
            for (t || (t = g(e)), i = t.length; i--; )
              (r = ye(t[i]))[k] ? o.push(r) : s.push(r)
            ;(r = $(
              e,
              ((v = s),
              (_ = 0 < (m = o).length),
              (y = 0 < v.length),
              (n = function (e, t, i, n, o) {
                var s,
                  r,
                  a,
                  l = 0,
                  c = '0',
                  u = e && [],
                  d = [],
                  p = b,
                  h = e || (y && w.find.TAG('*', o)),
                  f = (S += null == p ? 1 : Math.random() || 0.1),
                  g = h.length
                for (
                  o && (b = t === T || t || o);
                  c !== g && null != (s = h[c]);
                  c++
                ) {
                  if (y && s) {
                    for (
                      r = 0, t || s.ownerDocument === T || (x(s), (i = !C));
                      (a = v[r++]);

                    )
                      if (a(s, t || T, i)) {
                        n.push(s)
                        break
                      }
                    o && (S = f)
                  }
                  _ && ((s = !a && s) && l--, e && u.push(s))
                }
                if (((l += c), _ && c !== l)) {
                  for (r = 0; (a = m[r++]); ) a(u, d, t, i)
                  if (e) {
                    if (0 < l) for (; c--; ) u[c] || d[c] || (d[c] = A.call(n))
                    d = me(d)
                  }
                  M.apply(n, d),
                    o &&
                      !e &&
                      0 < d.length &&
                      1 < l + m.length &&
                      ne.uniqueSort(n)
                }
                return o && ((S = f), (b = p)), u
              }),
              _ ? se(n) : n)
            )).selector = e
          }
          return r
        }),
      (v = ne.select =
        function (e, t, i, n) {
          var o,
            s,
            r,
            a,
            l,
            c = 'function' == typeof e && e,
            u = !n && g((e = c.selector || e))
          if (((i = i || []), 1 === u.length)) {
            if (
              2 < (s = u[0] = u[0].slice(0)).length &&
              'ID' === (r = s[0]).type &&
              f.getById &&
              9 === t.nodeType &&
              C &&
              w.relative[s[1].type]
            ) {
              if (!(t = (w.find.ID(r.matches[0].replace(ee, te), t) || [])[0]))
                return i
              c && (t = t.parentNode), (e = e.slice(s.shift().value.length))
            }
            for (
              o = X.needsContext.test(e) ? 0 : s.length;
              o-- && ((r = s[o]), !w.relative[(a = r.type)]);

            )
              if (
                (l = w.find[a]) &&
                (n = l(
                  r.matches[0].replace(ee, te),
                  (J.test(s[0].type) && pe(t.parentNode)) || t
                ))
              ) {
                if ((s.splice(o, 1), !(e = n.length && fe(s))))
                  return M.apply(i, n), i
                break
              }
          }
          return (
            (c || d(e, u))(
              n,
              t,
              !C,
              i,
              !t || (J.test(e) && pe(t.parentNode)) || t
            ),
            i
          )
        }),
      (f.sortStable = k.split('').sort(E).join('') === k),
      (f.detectDuplicates = !!c),
      x(),
      (f.sortDetached = re(function (e) {
        return 1 & e.compareDocumentPosition(T.createElement('div'))
      })),
      re(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          '#' === e.firstChild.getAttribute('href')
        )
      }) ||
        ae('type|href|height|width', function (e, t, i) {
          return i
            ? void 0
            : e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2)
        }),
      (f.attributes &&
        re(function (e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          )
        })) ||
        ae('value', function (e, t, i) {
          return i || 'input' !== e.nodeName.toLowerCase()
            ? void 0
            : e.defaultValue
        }),
      re(function (e) {
        return null == e.getAttribute('disabled')
      }) ||
        ae(N, function (e, t, i) {
          var n
          return i
            ? void 0
            : !0 === e[t]
            ? t.toLowerCase()
            : (n = e.getAttributeNode(t)) && n.specified
            ? n.value
            : null
        }),
      ne
    )
  })(T)
  ;(k.find = h),
    (k.expr = h.selectors),
    (k.expr[':'] = k.expr.pseudos),
    (k.uniqueSort = k.unique = h.uniqueSort),
    (k.text = h.getText),
    (k.isXMLDoc = h.isXML),
    (k.contains = h.contains)
  var m = function (e, t, i) {
      for (var n = [], o = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (o && k(e).is(i)) break
          n.push(e)
        }
      return n
    },
    _ = function (e, t) {
      for (var i = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && i.push(e)
      return i
    },
    y = k.expr.match.needsContext,
    w = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    b = /^.[^:#\[\.,]*$/
  function x(e, i, n) {
    if (k.isFunction(i))
      return k.grep(e, function (e, t) {
        return !!i.call(e, t, e) !== n
      })
    if (i.nodeType)
      return k.grep(e, function (e) {
        return (e === i) !== n
      })
    if ('string' == typeof i) {
      if (b.test(i)) return k.filter(i, e, n)
      i = k.filter(i, e)
    }
    return k.grep(e, function (e) {
      return -1 < o.call(i, e) !== n
    })
  }
  ;(k.filter = function (e, t, i) {
    var n = t[0]
    return (
      i && (e = ':not(' + e + ')'),
      1 === t.length && 1 === n.nodeType
        ? k.find.matchesSelector(n, e)
          ? [n]
          : []
        : k.find.matches(
            e,
            k.grep(t, function (e) {
              return 1 === e.nodeType
            })
          )
    )
  }),
    k.fn.extend({
      find: function (e) {
        var t,
          i = this.length,
          n = [],
          o = this
        if ('string' != typeof e)
          return this.pushStack(
            k(e).filter(function () {
              for (t = 0; t < i; t++) if (k.contains(o[t], this)) return !0
            })
          )
        for (t = 0; t < i; t++) k.find(e, o[t], n)
        return (
          ((n = this.pushStack(1 < i ? k.unique(n) : n)).selector = this
            .selector
            ? this.selector + ' ' + e
            : e),
          n
        )
      },
      filter: function (e) {
        return this.pushStack(x(this, e || [], !1))
      },
      not: function (e) {
        return this.pushStack(x(this, e || [], !0))
      },
      is: function (e) {
        return !!x(this, 'string' == typeof e && y.test(e) ? k(e) : e || [], !1)
          .length
      },
    })
  var S,
    $ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/
  ;((k.fn.init = function (e, t, i) {
    var n, o
    if (!e) return this
    if (((i = i || S), 'string' != typeof e))
      return e.nodeType
        ? ((this.context = this[0] = e), (this.length = 1), this)
        : k.isFunction(e)
        ? void 0 !== i.ready
          ? i.ready(e)
          : e(k)
        : (void 0 !== e.selector &&
            ((this.selector = e.selector), (this.context = e.context)),
          k.makeArray(e, this))
    if (
      !(n =
        '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
          ? [null, e, null]
          : $.exec(e)) ||
      (!n[1] && t)
    )
      return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e)
    if (n[1]) {
      if (
        ((t = t instanceof k ? t[0] : t),
        k.merge(
          this,
          k.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : C, !0)
        ),
        w.test(n[1]) && k.isPlainObject(t))
      )
        for (n in t) k.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n])
      return this
    }
    return (
      (o = C.getElementById(n[2])) &&
        o.parentNode &&
        ((this.length = 1), (this[0] = o)),
      (this.context = C),
      (this.selector = e),
      this
    )
  }).prototype = k.fn),
    (S = k(C))
  var E = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 }
  function A(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e
  }
  k.fn.extend({
    has: function (e) {
      var t = k(e, this),
        i = t.length
      return this.filter(function () {
        for (var e = 0; e < i; e++) if (k.contains(this, t[e])) return !0
      })
    },
    closest: function (e, t) {
      for (
        var i,
          n = 0,
          o = this.length,
          s = [],
          r = y.test(e) || 'string' != typeof e ? k(e, t || this.context) : 0;
        n < o;
        n++
      )
        for (i = this[n]; i && i !== t; i = i.parentNode)
          if (
            i.nodeType < 11 &&
            (r
              ? -1 < r.index(i)
              : 1 === i.nodeType && k.find.matchesSelector(i, e))
          ) {
            s.push(i)
            break
          }
      return this.pushStack(1 < s.length ? k.uniqueSort(s) : s)
    },
    index: function (e) {
      return e
        ? 'string' == typeof e
          ? o.call(k(e), this[0])
          : o.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1
    },
    add: function (e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    },
  }),
    k.each(
      {
        parent: function (e) {
          var t = e.parentNode
          return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
          return m(e, 'parentNode')
        },
        parentsUntil: function (e, t, i) {
          return m(e, 'parentNode', i)
        },
        next: function (e) {
          return A(e, 'nextSibling')
        },
        prev: function (e) {
          return A(e, 'previousSibling')
        },
        nextAll: function (e) {
          return m(e, 'nextSibling')
        },
        prevAll: function (e) {
          return m(e, 'previousSibling')
        },
        nextUntil: function (e, t, i) {
          return m(e, 'nextSibling', i)
        },
        prevUntil: function (e, t, i) {
          return m(e, 'previousSibling', i)
        },
        siblings: function (e) {
          return _((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
          return _(e.firstChild)
        },
        contents: function (e) {
          return e.contentDocument || k.merge([], e.childNodes)
        },
      },
      function (n, o) {
        k.fn[n] = function (e, t) {
          var i = k.map(this, o, e)
          return (
            'Until' !== n.slice(-5) && (t = e),
            t && 'string' == typeof t && (i = k.filter(t, i)),
            1 < this.length &&
              (O[n] || k.uniqueSort(i), E.test(n) && i.reverse()),
            this.pushStack(i)
          )
        }
      }
    )
  var D,
    M = /\S+/g
  function P() {
    C.removeEventListener('DOMContentLoaded', P),
      T.removeEventListener('load', P),
      k.ready()
  }
  ;(k.Callbacks = function (n) {
    var e, i
    n =
      'string' == typeof n
        ? ((e = n),
          (i = {}),
          k.each(e.match(M) || [], function (e, t) {
            i[t] = !0
          }),
          i)
        : k.extend({}, n)
    var o,
      t,
      s,
      r,
      a = [],
      l = [],
      c = -1,
      u = function () {
        for (r = n.once, s = o = !0; l.length; c = -1)
          for (t = l.shift(); ++c < a.length; )
            !1 === a[c].apply(t[0], t[1]) &&
              n.stopOnFalse &&
              ((c = a.length), (t = !1))
        n.memory || (t = !1), (o = !1), r && (a = t ? [] : '')
      },
      d = {
        add: function () {
          return (
            a &&
              (t && !o && ((c = a.length - 1), l.push(t)),
              (function i(e) {
                k.each(e, function (e, t) {
                  k.isFunction(t)
                    ? (n.unique && d.has(t)) || a.push(t)
                    : t && t.length && 'string' !== k.type(t) && i(t)
                })
              })(arguments),
              t && !o && u()),
            this
          )
        },
        remove: function () {
          return (
            k.each(arguments, function (e, t) {
              for (var i; -1 < (i = k.inArray(t, a, i)); )
                a.splice(i, 1), i <= c && c--
            }),
            this
          )
        },
        has: function (e) {
          return e ? -1 < k.inArray(e, a) : 0 < a.length
        },
        empty: function () {
          return a && (a = []), this
        },
        disable: function () {
          return (r = l = []), (a = t = ''), this
        },
        disabled: function () {
          return !a
        },
        lock: function () {
          return (r = l = []), t || (a = t = ''), this
        },
        locked: function () {
          return !!r
        },
        fireWith: function (e, t) {
          return (
            r ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              l.push(t),
              o || u()),
            this
          )
        },
        fire: function () {
          return d.fireWith(this, arguments), this
        },
        fired: function () {
          return !!s
        },
      }
    return d
  }),
    k.extend({
      Deferred: function (e) {
        var s = [
            ['resolve', 'done', k.Callbacks('once memory'), 'resolved'],
            ['reject', 'fail', k.Callbacks('once memory'), 'rejected'],
            ['notify', 'progress', k.Callbacks('memory')],
          ],
          o = 'pending',
          r = {
            state: function () {
              return o
            },
            always: function () {
              return a.done(arguments).fail(arguments), this
            },
            then: function () {
              var o = arguments
              return k
                .Deferred(function (n) {
                  k.each(s, function (e, t) {
                    var i = k.isFunction(o[e]) && o[e]
                    a[t[1]](function () {
                      var e = i && i.apply(this, arguments)
                      e && k.isFunction(e.promise)
                        ? e
                            .promise()
                            .progress(n.notify)
                            .done(n.resolve)
                            .fail(n.reject)
                        : n[t[0] + 'With'](
                            this === r ? n.promise() : this,
                            i ? [e] : arguments
                          )
                    })
                  }),
                    (o = null)
                })
                .promise()
            },
            promise: function (e) {
              return null != e ? k.extend(e, r) : r
            },
          },
          a = {}
        return (
          (r.pipe = r.then),
          k.each(s, function (e, t) {
            var i = t[2],
              n = t[3]
            ;(r[t[1]] = i.add),
              n &&
                i.add(
                  function () {
                    o = n
                  },
                  s[1 ^ e][2].disable,
                  s[2][2].lock
                ),
              (a[t[0]] = function () {
                return a[t[0] + 'With'](this === a ? r : this, arguments), this
              }),
              (a[t[0] + 'With'] = i.fireWith)
          }),
          r.promise(a),
          e && e.call(a, a),
          a
        )
      },
      when: function (e) {
        var o,
          t,
          i,
          n = 0,
          s = u.call(arguments),
          r = s.length,
          a = 1 !== r || (e && k.isFunction(e.promise)) ? r : 0,
          l = 1 === a ? e : k.Deferred(),
          c = function (t, i, n) {
            return function (e) {
              ;(i[t] = this),
                (n[t] = 1 < arguments.length ? u.call(arguments) : e),
                n === o ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
            }
          }
        if (1 < r)
          for (o = new Array(r), t = new Array(r), i = new Array(r); n < r; n++)
            s[n] && k.isFunction(s[n].promise)
              ? s[n]
                  .promise()
                  .progress(c(n, t, o))
                  .done(c(n, i, s))
                  .fail(l.reject)
              : --a
        return a || l.resolveWith(i, s), l.promise()
      },
    }),
    (k.fn.ready = function (e) {
      return k.ready.promise().done(e), this
    }),
    k.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? k.readyWait++ : k.ready(!0)
      },
      ready: function (e) {
        ;(!0 === e ? --k.readyWait : k.isReady) ||
          ((k.isReady = !0) !== e && 0 < --k.readyWait) ||
          (D.resolveWith(C, [k]),
          k.fn.triggerHandler &&
            (k(C).triggerHandler('ready'), k(C).off('ready')))
      },
    }),
    (k.ready.promise = function (e) {
      return (
        D ||
          ((D = k.Deferred()),
          'complete' === C.readyState ||
          ('loading' !== C.readyState && !C.documentElement.doScroll)
            ? T.setTimeout(k.ready)
            : (C.addEventListener('DOMContentLoaded', P),
              T.addEventListener('load', P))),
        D.promise(e)
      )
    }),
    k.ready.promise()
  var I = function (e, t, i, n, o, s, r) {
      var a = 0,
        l = e.length,
        c = null == i
      if ('object' === k.type(i))
        for (a in ((o = !0), i)) I(e, t, a, i[a], !0, s, r)
      else if (
        void 0 !== n &&
        ((o = !0),
        k.isFunction(n) || (r = !0),
        c &&
          (t = r
            ? (t.call(e, n), null)
            : ((c = t),
              function (e, t, i) {
                return c.call(k(e), i)
              })),
        t)
      )
        for (; a < l; a++) t(e[a], i, r ? n : n.call(e[a], a, t(e[a], i)))
      return o ? e : c ? t.call(e) : l ? t(e[0], i) : s
    },
    N = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
  function j() {
    this.expando = k.expando + j.uid++
  }
  ;(j.uid = 1),
    (j.prototype = {
      register: function (e, t) {
        var i = t || {}
        return (
          e.nodeType
            ? (e[this.expando] = i)
            : Object.defineProperty(e, this.expando, {
                value: i,
                writable: !0,
                configurable: !0,
              }),
          e[this.expando]
        )
      },
      cache: function (e) {
        if (!N(e)) return {}
        var t = e[this.expando]
        return (
          t ||
            ((t = {}),
            N(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        )
      },
      set: function (e, t, i) {
        var n,
          o = this.cache(e)
        if ('string' == typeof t) o[t] = i
        else for (n in t) o[n] = t[n]
        return o
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][t]
      },
      access: function (e, t, i) {
        var n
        return void 0 === t || (t && 'string' == typeof t && void 0 === i)
          ? void 0 !== (n = this.get(e, t))
            ? n
            : this.get(e, k.camelCase(t))
          : (this.set(e, t, i), void 0 !== i ? i : t)
      },
      remove: function (e, t) {
        var i,
          n,
          o,
          s = e[this.expando]
        if (void 0 !== s) {
          if (void 0 === t) this.register(e)
          else {
            i = (n = k.isArray(t)
              ? t.concat(t.map(k.camelCase))
              : ((o = k.camelCase(t)),
                t in s ? [t, o] : (n = o) in s ? [n] : n.match(M) || [])).length
            for (; i--; ) delete s[n[i]]
          }
          ;(void 0 === t || k.isEmptyObject(s)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando])
        }
      },
      hasData: function (e) {
        var t = e[this.expando]
        return void 0 !== t && !k.isEmptyObject(t)
      },
    })
  var z = new j(),
    L = new j(),
    H = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    q = /[A-Z]/g
  function F(e, t, i) {
    var n
    if (void 0 === i && 1 === e.nodeType)
      if (
        ((n = 'data-' + t.replace(q, '-$&').toLowerCase()),
        'string' == typeof (i = e.getAttribute(n)))
      ) {
        try {
          i =
            'true' === i ||
            ('false' !== i &&
              ('null' === i
                ? null
                : +i + '' === i
                ? +i
                : H.test(i)
                ? k.parseJSON(i)
                : i))
        } catch (e) {}
        L.set(e, t, i)
      } else i = void 0
    return i
  }
  k.extend({
    hasData: function (e) {
      return L.hasData(e) || z.hasData(e)
    },
    data: function (e, t, i) {
      return L.access(e, t, i)
    },
    removeData: function (e, t) {
      L.remove(e, t)
    },
    _data: function (e, t, i) {
      return z.access(e, t, i)
    },
    _removeData: function (e, t) {
      z.remove(e, t)
    },
  }),
    k.fn.extend({
      data: function (n, e) {
        var t,
          i,
          o,
          s = this[0],
          r = s && s.attributes
        if (void 0 !== n)
          return 'object' == typeof n
            ? this.each(function () {
                L.set(this, n)
              })
            : I(
                this,
                function (t) {
                  var e, i
                  if (s && void 0 === t) {
                    if (
                      void 0 !==
                      (e =
                        L.get(s, n) ||
                        L.get(s, n.replace(q, '-$&').toLowerCase()))
                    )
                      return e
                    if (((i = k.camelCase(n)), void 0 !== (e = L.get(s, i))))
                      return e
                    if (void 0 !== (e = F(s, i, void 0))) return e
                  } else
                    (i = k.camelCase(n)),
                      this.each(function () {
                        var e = L.get(this, i)
                        L.set(this, i, t),
                          -1 < n.indexOf('-') &&
                            void 0 !== e &&
                            L.set(this, n, t)
                      })
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              )
        if (
          this.length &&
          ((o = L.get(s)), 1 === s.nodeType && !z.get(s, 'hasDataAttrs'))
        ) {
          for (t = r.length; t--; )
            r[t] &&
              0 === (i = r[t].name).indexOf('data-') &&
              ((i = k.camelCase(i.slice(5))), F(s, i, o[i]))
          z.set(s, 'hasDataAttrs', !0)
        }
        return o
      },
      removeData: function (e) {
        return this.each(function () {
          L.remove(this, e)
        })
      },
    }),
    k.extend({
      queue: function (e, t, i) {
        var n
        return e
          ? ((t = (t || 'fx') + 'queue'),
            (n = z.get(e, t)),
            i &&
              (!n || k.isArray(i)
                ? (n = z.access(e, t, k.makeArray(i)))
                : n.push(i)),
            n || [])
          : void 0
      },
      dequeue: function (e, t) {
        t = t || 'fx'
        var i = k.queue(e, t),
          n = i.length,
          o = i.shift(),
          s = k._queueHooks(e, t)
        'inprogress' === o && ((o = i.shift()), n--),
          o &&
            ('fx' === t && i.unshift('inprogress'),
            delete s.stop,
            o.call(
              e,
              function () {
                k.dequeue(e, t)
              },
              s
            )),
          !n && s && s.empty.fire()
      },
      _queueHooks: function (e, t) {
        var i = t + 'queueHooks'
        return (
          z.get(e, i) ||
          z.access(e, i, {
            empty: k.Callbacks('once memory').add(function () {
              z.remove(e, [t + 'queue', i])
            }),
          })
        )
      },
    }),
    k.fn.extend({
      queue: function (t, i) {
        var e = 2
        return (
          'string' != typeof t && ((i = t), (t = 'fx'), e--),
          arguments.length < e
            ? k.queue(this[0], t)
            : void 0 === i
            ? this
            : this.each(function () {
                var e = k.queue(this, t, i)
                k._queueHooks(this, t),
                  'fx' === t && 'inprogress' !== e[0] && k.dequeue(this, t)
              })
        )
      },
      dequeue: function (e) {
        return this.each(function () {
          k.dequeue(this, e)
        })
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', [])
      },
      promise: function (e, t) {
        var i,
          n = 1,
          o = k.Deferred(),
          s = this,
          r = this.length,
          a = function () {
            --n || o.resolveWith(s, [s])
          }
        for (
          'string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx';
          r--;

        )
          (i = z.get(s[r], e + 'queueHooks')) &&
            i.empty &&
            (n++, i.empty.add(a))
        return a(), o.promise(t)
      },
    })
  var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    R = new RegExp('^(?:([+-])=|)(' + W + ')([a-z%]*)$', 'i'),
    B = ['Top', 'Right', 'Bottom', 'Left'],
    U = function (e, t) {
      return (
        (e = t || e),
        'none' === k.css(e, 'display') || !k.contains(e.ownerDocument, e)
      )
    }
  function V(e, t, i, n) {
    var o,
      s = 1,
      r = 20,
      a = n
        ? function () {
            return n.cur()
          }
        : function () {
            return k.css(e, t, '')
          },
      l = a(),
      c = (i && i[3]) || (k.cssNumber[t] ? '' : 'px'),
      u = (k.cssNumber[t] || ('px' !== c && +l)) && R.exec(k.css(e, t))
    if (u && u[3] !== c)
      for (
        c = c || u[3], i = i || [], u = +l || 1;
        (u /= s = s || '.5'),
          k.style(e, t, u + c),
          s !== (s = a() / l) && 1 !== s && --r;

      );
    return (
      i &&
        ((u = +u || +l || 0),
        (o = i[1] ? u + (i[1] + 1) * i[2] : +i[2]),
        n && ((n.unit = c), (n.start = u), (n.end = o))),
      o
    )
  }
  var X = /^(?:checkbox|radio)$/i,
    G = /<([\w:-]+)/,
    Y = /^$|\/(?:java|ecma)script/i,
    Q = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', ''],
    }
  function K(e, t) {
    var i =
      void 0 !== e.getElementsByTagName
        ? e.getElementsByTagName(t || '*')
        : void 0 !== e.querySelectorAll
        ? e.querySelectorAll(t || '*')
        : []
    return void 0 === t || (t && k.nodeName(e, t)) ? k.merge([e], i) : i
  }
  function J(e, t) {
    for (var i = 0, n = e.length; i < n; i++)
      z.set(e[i], 'globalEval', !t || z.get(t[i], 'globalEval'))
  }
  ;(Q.optgroup = Q.option),
    (Q.tbody = Q.tfoot = Q.colgroup = Q.caption = Q.thead),
    (Q.th = Q.td)
  var Z,
    ee,
    te = /<|&#?\w+;/
  function ie(e, t, i, n, o) {
    for (
      var s,
        r,
        a,
        l,
        c,
        u,
        d = t.createDocumentFragment(),
        p = [],
        h = 0,
        f = e.length;
      h < f;
      h++
    )
      if ((s = e[h]) || 0 === s)
        if ('object' === k.type(s)) k.merge(p, s.nodeType ? [s] : s)
        else if (te.test(s)) {
          for (
            r = r || d.appendChild(t.createElement('div')),
              a = (G.exec(s) || ['', ''])[1].toLowerCase(),
              l = Q[a] || Q._default,
              r.innerHTML = l[1] + k.htmlPrefilter(s) + l[2],
              u = l[0];
            u--;

          )
            r = r.lastChild
          k.merge(p, r.childNodes), ((r = d.firstChild).textContent = '')
        } else p.push(t.createTextNode(s))
    for (d.textContent = '', h = 0; (s = p[h++]); )
      if (n && -1 < k.inArray(s, n)) o && o.push(s)
      else if (
        ((c = k.contains(s.ownerDocument, s)),
        (r = K(d.appendChild(s), 'script')),
        c && J(r),
        i)
      )
        for (u = 0; (s = r[u++]); ) Y.test(s.type || '') && i.push(s)
    return d
  }
  ;(Z = C.createDocumentFragment().appendChild(C.createElement('div'))),
    (ee = C.createElement('input')).setAttribute('type', 'radio'),
    ee.setAttribute('checked', 'checked'),
    ee.setAttribute('name', 't'),
    Z.appendChild(ee),
    (v.checkClone = Z.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (Z.innerHTML = '<textarea>x</textarea>'),
    (v.noCloneChecked = !!Z.cloneNode(!0).lastChild.defaultValue)
  var ne = /^key/,
    oe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    se = /^([^.]*)(?:\.(.+)|)/
  function re() {
    return !0
  }
  function ae() {
    return !1
  }
  function le() {
    try {
      return C.activeElement
    } catch (e) {}
  }
  function ce(e, t, i, n, o, s) {
    var r, a
    if ('object' == typeof t) {
      for (a in ('string' != typeof i && ((n = n || i), (i = void 0)), t))
        ce(e, a, i, n, t[a], s)
      return e
    }
    if (
      (null == n && null == o
        ? ((o = i), (n = i = void 0))
        : null == o &&
          ('string' == typeof i
            ? ((o = n), (n = void 0))
            : ((o = n), (n = i), (i = void 0))),
      !1 === o)
    )
      o = ae
    else if (!o) return e
    return (
      1 === s &&
        ((r = o),
        ((o = function (e) {
          return k().off(e), r.apply(this, arguments)
        }).guid = r.guid || (r.guid = k.guid++))),
      e.each(function () {
        k.event.add(this, t, o, n, i)
      })
    )
  }
  ;(k.event = {
    global: {},
    add: function (t, e, i, n, o) {
      var s,
        r,
        a,
        l,
        c,
        u,
        d,
        p,
        h,
        f,
        g,
        v = z.get(t)
      if (v)
        for (
          i.handler && ((i = (s = i).handler), (o = s.selector)),
            i.guid || (i.guid = k.guid++),
            (l = v.events) || (l = v.events = {}),
            (r = v.handle) ||
              (r = v.handle =
                function (e) {
                  return void 0 !== k && k.event.triggered !== e.type
                    ? k.event.dispatch.apply(t, arguments)
                    : void 0
                }),
            c = (e = (e || '').match(M) || ['']).length;
          c--;

        )
          (h = g = (a = se.exec(e[c]) || [])[1]),
            (f = (a[2] || '').split('.').sort()),
            h &&
              ((d = k.event.special[h] || {}),
              (h = (o ? d.delegateType : d.bindType) || h),
              (d = k.event.special[h] || {}),
              (u = k.extend(
                {
                  type: h,
                  origType: g,
                  data: n,
                  handler: i,
                  guid: i.guid,
                  selector: o,
                  needsContext: o && k.expr.match.needsContext.test(o),
                  namespace: f.join('.'),
                },
                s
              )),
              (p = l[h]) ||
                (((p = l[h] = []).delegateCount = 0),
                (d.setup && !1 !== d.setup.call(t, n, f, r)) ||
                  (t.addEventListener && t.addEventListener(h, r))),
              d.add &&
                (d.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)),
              o ? p.splice(p.delegateCount++, 0, u) : p.push(u),
              (k.event.global[h] = !0))
    },
    remove: function (e, t, i, n, o) {
      var s,
        r,
        a,
        l,
        c,
        u,
        d,
        p,
        h,
        f,
        g,
        v = z.hasData(e) && z.get(e)
      if (v && (l = v.events)) {
        for (c = (t = (t || '').match(M) || ['']).length; c--; )
          if (
            ((h = g = (a = se.exec(t[c]) || [])[1]),
            (f = (a[2] || '').split('.').sort()),
            h)
          ) {
            for (
              d = k.event.special[h] || {},
                p = l[(h = (n ? d.delegateType : d.bindType) || h)] || [],
                a =
                  a[2] &&
                  new RegExp('(^|\\.)' + f.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                r = s = p.length;
              s--;

            )
              (u = p[s]),
                (!o && g !== u.origType) ||
                  (i && i.guid !== u.guid) ||
                  (a && !a.test(u.namespace)) ||
                  (n && n !== u.selector && ('**' !== n || !u.selector)) ||
                  (p.splice(s, 1),
                  u.selector && p.delegateCount--,
                  d.remove && d.remove.call(e, u))
            r &&
              !p.length &&
              ((d.teardown && !1 !== d.teardown.call(e, f, v.handle)) ||
                k.removeEvent(e, h, v.handle),
              delete l[h])
          } else for (h in l) k.event.remove(e, h + t[c], i, n, !0)
        k.isEmptyObject(l) && z.remove(e, 'handle events')
      }
    },
    dispatch: function (e) {
      e = k.event.fix(e)
      var t,
        i,
        n,
        o,
        s,
        r = [],
        a = u.call(arguments),
        l = (z.get(this, 'events') || {})[e.type] || [],
        c = k.event.special[e.type] || {}
      if (
        (((a[0] = e).delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, e))
      ) {
        for (
          r = k.event.handlers.call(this, e, l), t = 0;
          (o = r[t++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = o.elem, i = 0;
            (s = o.handlers[i++]) && !e.isImmediatePropagationStopped();

          )
            (e.rnamespace && !e.rnamespace.test(s.namespace)) ||
              ((e.handleObj = s),
              (e.data = s.data),
              void 0 !==
                (n = (
                  (k.event.special[s.origType] || {}).handle || s.handler
                ).apply(o.elem, a)) &&
                !1 === (e.result = n) &&
                (e.preventDefault(), e.stopPropagation()))
        return c.postDispatch && c.postDispatch.call(this, e), e.result
      }
    },
    handlers: function (e, t) {
      var i,
        n,
        o,
        s,
        r = [],
        a = t.delegateCount,
        l = e.target
      if (
        a &&
        l.nodeType &&
        ('click' !== e.type || isNaN(e.button) || e.button < 1)
      )
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && (!0 !== l.disabled || 'click' !== e.type)) {
            for (n = [], i = 0; i < a; i++)
              void 0 === n[(o = (s = t[i]).selector + ' ')] &&
                (n[o] = s.needsContext
                  ? -1 < k(o, this).index(l)
                  : k.find(o, this, null, [l]).length),
                n[o] && n.push(s)
            n.length && r.push({ elem: l, handlers: n })
          }
      return a < t.length && r.push({ elem: this, handlers: t.slice(a) }), r
    },
    props:
      'altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
        ' '
      ),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        )
      },
    },
    mouseHooks: {
      props:
        'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(
          ' '
        ),
      filter: function (e, t) {
        var i,
          n,
          o,
          s = t.button
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((n = (i = e.target.ownerDocument || C).documentElement),
            (o = i.body),
            (e.pageX =
              t.clientX +
              ((n && n.scrollLeft) || (o && o.scrollLeft) || 0) -
              ((n && n.clientLeft) || (o && o.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((n && n.scrollTop) || (o && o.scrollTop) || 0) -
              ((n && n.clientTop) || (o && o.clientTop) || 0))),
          e.which ||
            void 0 === s ||
            (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
          e
        )
      },
    },
    fix: function (e) {
      if (e[k.expando]) return e
      var t,
        i,
        n,
        o = e.type,
        s = e,
        r = this.fixHooks[o]
      for (
        r ||
          (this.fixHooks[o] = r =
            oe.test(o) ? this.mouseHooks : ne.test(o) ? this.keyHooks : {}),
          n = r.props ? this.props.concat(r.props) : this.props,
          e = new k.Event(s),
          t = n.length;
        t--;

      )
        e[(i = n[t])] = s[i]
      return (
        e.target || (e.target = C),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        r.filter ? r.filter(e, s) : e
      )
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== le() && this.focus ? (this.focus(), !1) : void 0
        },
        delegateType: 'focusin',
      },
      blur: {
        trigger: function () {
          return this === le() && this.blur ? (this.blur(), !1) : void 0
        },
        delegateType: 'focusout',
      },
      click: {
        trigger: function () {
          return 'checkbox' === this.type &&
            this.click &&
            k.nodeName(this, 'input')
            ? (this.click(), !1)
            : void 0
        },
        _default: function (e) {
          return k.nodeName(e.target, 'a')
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result)
        },
      },
    },
  }),
    (k.removeEvent = function (e, t, i) {
      e.removeEventListener && e.removeEventListener(t, i)
    }),
    (k.Event = function (e, t) {
      return this instanceof k.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? re
                  : ae))
            : (this.type = e),
          t && k.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || k.now()),
          void (this[k.expando] = !0))
        : new k.Event(e, t)
    }),
    (k.Event.prototype = {
      constructor: k.Event,
      isDefaultPrevented: ae,
      isPropagationStopped: ae,
      isImmediatePropagationStopped: ae,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent
        ;(this.isDefaultPrevented = re),
          e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function () {
        var e = this.originalEvent
        ;(this.isPropagationStopped = re),
          e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent
        ;(this.isImmediatePropagationStopped = re),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation()
      },
    }),
    k.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      function (e, o) {
        k.event.special[e] = {
          delegateType: o,
          bindType: o,
          handle: function (e) {
            var t,
              i = e.relatedTarget,
              n = e.handleObj
            return (
              (i && (i === this || k.contains(this, i))) ||
                ((e.type = n.origType),
                (t = n.handler.apply(this, arguments)),
                (e.type = o)),
              t
            )
          },
        }
      }
    ),
    k.fn.extend({
      on: function (e, t, i, n) {
        return ce(this, e, t, i, n)
      },
      one: function (e, t, i, n) {
        return ce(this, e, t, i, n, 1)
      },
      off: function (e, t, i) {
        var n, o
        if (e && e.preventDefault && e.handleObj)
          return (
            (n = e.handleObj),
            k(e.delegateTarget).off(
              n.namespace ? n.origType + '.' + n.namespace : n.origType,
              n.selector,
              n.handler
            ),
            this
          )
        if ('object' != typeof e)
          return (
            (!1 !== t && 'function' != typeof t) || ((i = t), (t = void 0)),
            !1 === i && (i = ae),
            this.each(function () {
              k.event.remove(this, e, i, t)
            })
          )
        for (o in e) this.off(o, t, e[o])
        return this
      },
    })
  var ue =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    de = /<script|<style|<link/i,
    pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    he = /^true\/(.*)/,
    fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
  function ge(e, t) {
    return k.nodeName(e, 'table') &&
      k.nodeName(11 !== t.nodeType ? t : t.firstChild, 'tr')
      ? e.getElementsByTagName('tbody')[0] ||
          e.appendChild(e.ownerDocument.createElement('tbody'))
      : e
  }
  function ve(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e
  }
  function me(e) {
    var t = he.exec(e.type)
    return t ? (e.type = t[1]) : e.removeAttribute('type'), e
  }
  function _e(e, t) {
    var i, n, o, s, r, a, l, c
    if (1 === t.nodeType) {
      if (
        z.hasData(e) &&
        ((s = z.access(e)), (r = z.set(t, s)), (c = s.events))
      )
        for (o in (delete r.handle, (r.events = {}), c))
          for (i = 0, n = c[o].length; i < n; i++) k.event.add(t, o, c[o][i])
      L.hasData(e) && ((a = L.access(e)), (l = k.extend({}, a)), L.set(t, l))
    }
  }
  function ye(i, n, o, s) {
    n = g.apply([], n)
    var e,
      t,
      r,
      a,
      l,
      c,
      u = 0,
      d = i.length,
      p = d - 1,
      h = n[0],
      f = k.isFunction(h)
    if (f || (1 < d && 'string' == typeof h && !v.checkClone && pe.test(h)))
      return i.each(function (e) {
        var t = i.eq(e)
        f && (n[0] = h.call(this, e, t.html())), ye(t, n, o, s)
      })
    if (
      d &&
      ((t = (e = ie(n, i[0].ownerDocument, !1, i, s)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || s)
    ) {
      for (a = (r = k.map(K(e, 'script'), ve)).length; u < d; u++)
        (l = e),
          u !== p &&
            ((l = k.clone(l, !0, !0)), a && k.merge(r, K(l, 'script'))),
          o.call(i[u], l, u)
      if (a)
        for (c = r[r.length - 1].ownerDocument, k.map(r, me), u = 0; u < a; u++)
          (l = r[u]),
            Y.test(l.type || '') &&
              !z.access(l, 'globalEval') &&
              k.contains(c, l) &&
              (l.src
                ? k._evalUrl && k._evalUrl(l.src)
                : k.globalEval(l.textContent.replace(fe, '')))
    }
    return i
  }
  function we(e, t, i) {
    for (var n, o = t ? k.filter(t, e) : e, s = 0; null != (n = o[s]); s++)
      i || 1 !== n.nodeType || k.cleanData(K(n)),
        n.parentNode &&
          (i && k.contains(n.ownerDocument, n) && J(K(n, 'script')),
          n.parentNode.removeChild(n))
    return e
  }
  k.extend({
    htmlPrefilter: function (e) {
      return e.replace(ue, '<$1></$2>')
    },
    clone: function (e, t, i) {
      var n,
        o,
        s,
        r,
        a,
        l,
        c,
        u = e.cloneNode(!0),
        d = k.contains(e.ownerDocument, e)
      if (
        !(
          v.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          k.isXMLDoc(e)
        )
      )
        for (r = K(u), n = 0, o = (s = K(e)).length; n < o; n++)
          (a = s[n]),
            (l = r[n]),
            void 0,
            'input' === (c = l.nodeName.toLowerCase()) && X.test(a.type)
              ? (l.checked = a.checked)
              : ('input' !== c && 'textarea' !== c) ||
                (l.defaultValue = a.defaultValue)
      if (t)
        if (i)
          for (s = s || K(e), r = r || K(u), n = 0, o = s.length; n < o; n++)
            _e(s[n], r[n])
        else _e(e, u)
      return 0 < (r = K(u, 'script')).length && J(r, !d && K(e, 'script')), u
    },
    cleanData: function (e) {
      for (var t, i, n, o = k.event.special, s = 0; void 0 !== (i = e[s]); s++)
        if (N(i)) {
          if ((t = i[z.expando])) {
            if (t.events)
              for (n in t.events)
                o[n] ? k.event.remove(i, n) : k.removeEvent(i, n, t.handle)
            i[z.expando] = void 0
          }
          i[L.expando] && (i[L.expando] = void 0)
        }
    },
  }),
    k.fn.extend({
      domManip: ye,
      detach: function (e) {
        return we(this, e, !0)
      },
      remove: function (e) {
        return we(this, e)
      },
      text: function (e) {
        return I(
          this,
          function (e) {
            return void 0 === e
              ? k.text(this)
              : this.empty().each(function () {
                  ;(1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e)
                })
          },
          null,
          e,
          arguments.length
        )
      },
      append: function () {
        return ye(this, arguments, function (e) {
          ;(1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            ge(this, e).appendChild(e)
        })
      },
      prepend: function () {
        return ye(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = ge(this, e)
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function () {
        return ye(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function () {
        return ye(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (k.cleanData(K(e, !1)), (e.textContent = ''))
        return this
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return k.clone(this, e, t)
          })
        )
      },
      html: function (e) {
        return I(
          this,
          function (e) {
            var t = this[0] || {},
              i = 0,
              n = this.length
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML
            if (
              'string' == typeof e &&
              !de.test(e) &&
              !Q[(G.exec(e) || ['', ''])[1].toLowerCase()]
            ) {
              e = k.htmlPrefilter(e)
              try {
                for (; i < n; i++)
                  1 === (t = this[i] || {}).nodeType &&
                    (k.cleanData(K(t, !1)), (t.innerHTML = e))
                t = 0
              } catch (e) {}
            }
            t && this.empty().append(e)
          },
          null,
          e,
          arguments.length
        )
      },
      replaceWith: function () {
        var i = []
        return ye(
          this,
          arguments,
          function (e) {
            var t = this.parentNode
            k.inArray(this, i) < 0 &&
              (k.cleanData(K(this)), t && t.replaceChild(e, this))
          },
          i
        )
      },
    }),
    k.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, r) {
        k.fn[e] = function (e) {
          for (var t, i = [], n = k(e), o = n.length - 1, s = 0; s <= o; s++)
            (t = s === o ? this : this.clone(!0)),
              k(n[s])[r](t),
              a.apply(i, t.get())
          return this.pushStack(i)
        }
      }
    )
  var be,
    xe = { HTML: 'block', BODY: 'block' }
  function Te(e, t) {
    var i = k(t.createElement(e)).appendTo(t.body),
      n = k.css(i[0], 'display')
    return i.detach(), n
  }
  function Ce(e) {
    var t = C,
      i = xe[e]
    return (
      i ||
        (('none' !== (i = Te(e, t)) && i) ||
          ((t = (be = (
            be || k("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(t.documentElement))[0].contentDocument).write(),
          t.close(),
          (i = Te(e, t)),
          be.detach()),
        (xe[e] = i)),
      i
    )
  }
  var ke = /^margin/,
    Se = new RegExp('^(' + W + ')(?!px)[a-z%]+$', 'i'),
    $e = function (e) {
      var t = e.ownerDocument.defaultView
      return (t && t.opener) || (t = T), t.getComputedStyle(e)
    },
    Ee = function (e, t, i, n) {
      var o,
        s,
        r = {}
      for (s in t) (r[s] = e.style[s]), (e.style[s] = t[s])
      for (s in ((o = i.apply(e, n || [])), t)) e.style[s] = r[s]
      return o
    },
    Oe = C.documentElement
  function Ae(e, t, i) {
    var n,
      o,
      s,
      r,
      a = e.style
    return (
      ('' !== (r = (i = i || $e(e)) ? i.getPropertyValue(t) || i[t] : void 0) &&
        void 0 !== r) ||
        k.contains(e.ownerDocument, e) ||
        (r = k.style(e, t)),
      i &&
        !v.pixelMarginRight() &&
        Se.test(r) &&
        ke.test(t) &&
        ((n = a.width),
        (o = a.minWidth),
        (s = a.maxWidth),
        (a.minWidth = a.maxWidth = a.width = r),
        (r = i.width),
        (a.width = n),
        (a.minWidth = o),
        (a.maxWidth = s)),
      void 0 !== r ? r + '' : r
    )
  }
  function De(e, t) {
    return {
      get: function () {
        return e()
          ? void delete this.get
          : (this.get = t).apply(this, arguments)
      },
    }
  }
  !(function () {
    var t,
      i,
      n,
      o,
      s = C.createElement('div'),
      r = C.createElement('div')
    if (r.style) {
      function e() {
        ;(r.style.cssText =
          '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%'),
          (r.innerHTML = ''),
          Oe.appendChild(s)
        var e = T.getComputedStyle(r)
        ;(t = '1%' !== e.top),
          (o = '2px' === e.marginLeft),
          (i = '4px' === e.width),
          (r.style.marginRight = '50%'),
          (n = '4px' === e.marginRight),
          Oe.removeChild(s)
      }
      ;(r.style.backgroundClip = 'content-box'),
        (r.cloneNode(!0).style.backgroundClip = ''),
        (v.clearCloneStyle = 'content-box' === r.style.backgroundClip),
        (s.style.cssText =
          'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute'),
        s.appendChild(r),
        k.extend(v, {
          pixelPosition: function () {
            return e(), t
          },
          boxSizingReliable: function () {
            return null == i && e(), i
          },
          pixelMarginRight: function () {
            return null == i && e(), n
          },
          reliableMarginLeft: function () {
            return null == i && e(), o
          },
          reliableMarginRight: function () {
            var e,
              t = r.appendChild(C.createElement('div'))
            return (
              (t.style.cssText = r.style.cssText =
                '-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0'),
              (t.style.marginRight = t.style.width = '0'),
              (r.style.width = '1px'),
              Oe.appendChild(s),
              (e = !parseFloat(T.getComputedStyle(t).marginRight)),
              Oe.removeChild(s),
              r.removeChild(t),
              e
            )
          },
        })
    }
  })()
  var Me = /^(none|table(?!-c[ea]).+)/,
    Pe = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Ie = { letterSpacing: '0', fontWeight: '400' },
    Ne = ['Webkit', 'O', 'Moz', 'ms'],
    je = C.createElement('div').style
  function ze(e) {
    if (e in je) return e
    for (var t = e[0].toUpperCase() + e.slice(1), i = Ne.length; i--; )
      if ((e = Ne[i] + t) in je) return e
  }
  function Le(e, t, i) {
    var n = R.exec(t)
    return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || 'px') : t
  }
  function He(e, t, i, n, o) {
    for (
      var s = i === (n ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0,
        r = 0;
      s < 4;
      s += 2
    )
      'margin' === i && (r += k.css(e, i + B[s], !0, o)),
        n
          ? ('content' === i && (r -= k.css(e, 'padding' + B[s], !0, o)),
            'margin' !== i && (r -= k.css(e, 'border' + B[s] + 'Width', !0, o)))
          : ((r += k.css(e, 'padding' + B[s], !0, o)),
            'padding' !== i &&
              (r += k.css(e, 'border' + B[s] + 'Width', !0, o)))
    return r
  }
  function qe(e, t, i) {
    var n = !0,
      o = 'width' === t ? e.offsetWidth : e.offsetHeight,
      s = $e(e),
      r = 'border-box' === k.css(e, 'boxSizing', !1, s)
    if (o <= 0 || null == o) {
      if (
        (((o = Ae(e, t, s)) < 0 || null == o) && (o = e.style[t]), Se.test(o))
      )
        return o
      ;(n = r && (v.boxSizingReliable() || o === e.style[t])),
        (o = parseFloat(o) || 0)
    }
    return o + He(e, t, i || (r ? 'border' : 'content'), n, s) + 'px'
  }
  function Fe(e, t) {
    for (var i, n, o, s = [], r = 0, a = e.length; r < a; r++)
      (n = e[r]).style &&
        ((s[r] = z.get(n, 'olddisplay')),
        (i = n.style.display),
        t
          ? (s[r] || 'none' !== i || (n.style.display = ''),
            '' === n.style.display &&
              U(n) &&
              (s[r] = z.access(n, 'olddisplay', Ce(n.nodeName))))
          : ((o = U(n)),
            ('none' === i && o) ||
              z.set(n, 'olddisplay', o ? i : k.css(n, 'display'))))
    for (r = 0; r < a; r++)
      (n = e[r]).style &&
        ((t && 'none' !== n.style.display && '' !== n.style.display) ||
          (n.style.display = t ? s[r] || '' : 'none'))
    return e
  }
  function We(e, t, i, n, o) {
    return new We.prototype.init(e, t, i, n, o)
  }
  k.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var i = Ae(e, 'opacity')
            return '' === i ? '1' : i
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: 'cssFloat' },
    style: function (e, t, i, n) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          s,
          r,
          a = k.camelCase(t),
          l = e.style
        return (
          (t = k.cssProps[a] || (k.cssProps[a] = ze(a) || a)),
          (r = k.cssHooks[t] || k.cssHooks[a]),
          void 0 === i
            ? r && 'get' in r && void 0 !== (o = r.get(e, !1, n))
              ? o
              : l[t]
            : ('string' === (s = typeof i) &&
                (o = R.exec(i)) &&
                o[1] &&
                ((i = V(e, t, o)), (s = 'number')),
              void (
                null != i &&
                i == i &&
                ('number' === s &&
                  (i += (o && o[3]) || (k.cssNumber[a] ? '' : 'px')),
                v.clearCloneStyle ||
                  '' !== i ||
                  0 !== t.indexOf('background') ||
                  (l[t] = 'inherit'),
                (r && 'set' in r && void 0 === (i = r.set(e, i, n))) ||
                  (l[t] = i))
              ))
        )
      }
    },
    css: function (e, t, i, n) {
      var o,
        s,
        r,
        a = k.camelCase(t)
      return (
        (t = k.cssProps[a] || (k.cssProps[a] = ze(a) || a)),
        (r = k.cssHooks[t] || k.cssHooks[a]) &&
          'get' in r &&
          (o = r.get(e, !0, i)),
        void 0 === o && (o = Ae(e, t, n)),
        'normal' === o && t in Ie && (o = Ie[t]),
        '' === i || i
          ? ((s = parseFloat(o)), !0 === i || isFinite(s) ? s || 0 : o)
          : o
      )
    },
  }),
    k.each(['height', 'width'], function (e, r) {
      k.cssHooks[r] = {
        get: function (e, t, i) {
          return t
            ? Me.test(k.css(e, 'display')) && 0 === e.offsetWidth
              ? Ee(e, Pe, function () {
                  return qe(e, r, i)
                })
              : qe(e, r, i)
            : void 0
        },
        set: function (e, t, i) {
          var n,
            o = i && $e(e),
            s =
              i && He(e, r, i, 'border-box' === k.css(e, 'boxSizing', !1, o), o)
          return (
            s &&
              (n = R.exec(t)) &&
              'px' !== (n[3] || 'px') &&
              ((e.style[r] = t), (t = k.css(e, r))),
            Le(0, t, s)
          )
        },
      }
    }),
    (k.cssHooks.marginLeft = De(v.reliableMarginLeft, function (e, t) {
      return t
        ? (parseFloat(Ae(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              Ee(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left
              })) + 'px'
        : void 0
    })),
    (k.cssHooks.marginRight = De(v.reliableMarginRight, function (e, t) {
      return t
        ? Ee(e, { display: 'inline-block' }, Ae, [e, 'marginRight'])
        : void 0
    })),
    k.each({ margin: '', padding: '', border: 'Width' }, function (o, s) {
      ;(k.cssHooks[o + s] = {
        expand: function (e) {
          for (
            var t = 0, i = {}, n = 'string' == typeof e ? e.split(' ') : [e];
            t < 4;
            t++
          )
            i[o + B[t] + s] = n[t] || n[t - 2] || n[0]
          return i
        },
      }),
        ke.test(o) || (k.cssHooks[o + s].set = Le)
    }),
    k.fn.extend({
      css: function (e, t) {
        return I(
          this,
          function (e, t, i) {
            var n,
              o,
              s = {},
              r = 0
            if (k.isArray(t)) {
              for (n = $e(e), o = t.length; r < o; r++)
                s[t[r]] = k.css(e, t[r], !1, n)
              return s
            }
            return void 0 !== i ? k.style(e, t, i) : k.css(e, t)
          },
          e,
          t,
          1 < arguments.length
        )
      },
      show: function () {
        return Fe(this, !0)
      },
      hide: function () {
        return Fe(this)
      },
      toggle: function (e) {
        return 'boolean' == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              U(this) ? k(this).show() : k(this).hide()
            })
      },
    }),
    (((k.Tween = We).prototype = {
      constructor: We,
      init: function (e, t, i, n, o, s) {
        ;(this.elem = e),
          (this.prop = i),
          (this.easing = o || k.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = n),
          (this.unit = s || (k.cssNumber[i] ? '' : 'px'))
      },
      cur: function () {
        var e = We.propHooks[this.prop]
        return e && e.get ? e.get(this) : We.propHooks._default.get(this)
      },
      run: function (e) {
        var t,
          i = We.propHooks[this.prop]
        return (
          this.options.duration
            ? (this.pos = t =
                k.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          i && i.set ? i.set(this) : We.propHooks._default.set(this),
          this
        )
      },
    }).init.prototype = We.prototype),
    ((We.propHooks = {
      _default: {
        get: function (e) {
          var t
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = k.css(e.elem, e.prop, '')) && 'auto' !== t
            ? t
            : 0
        },
        set: function (e) {
          k.fx.step[e.prop]
            ? k.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[k.cssProps[e.prop]] && !k.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : k.style(e.elem, e.prop, e.now + e.unit)
        },
      },
    }).scrollTop = We.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        },
      }),
    (k.easing = {
      linear: function (e) {
        return e
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2
      },
      _default: 'swing',
    }),
    (k.fx = We.prototype.init),
    (k.fx.step = {})
  var Re,
    Be,
    Ue,
    Ve,
    Xe,
    Ge = /^(?:toggle|show|hide)$/,
    Ye = /queueHooks$/
  function Qe() {
    return (
      T.setTimeout(function () {
        Re = void 0
      }),
      (Re = k.now())
    )
  }
  function Ke(e, t) {
    var i,
      n = 0,
      o = { height: e }
    for (t = t ? 1 : 0; n < 4; n += 2 - t)
      o['margin' + (i = B[n])] = o['padding' + i] = e
    return t && (o.opacity = o.width = e), o
  }
  function Je(e, t, i) {
    for (
      var n,
        o = (Ze.tweeners[t] || []).concat(Ze.tweeners['*']),
        s = 0,
        r = o.length;
      s < r;
      s++
    )
      if ((n = o[s].call(i, t, e))) return n
  }
  function Ze(s, e, t) {
    var i,
      r,
      n = 0,
      o = Ze.prefilters.length,
      a = k.Deferred().always(function () {
        delete l.elem
      }),
      l = function () {
        if (r) return !1
        for (
          var e = Re || Qe(),
            t = Math.max(0, c.startTime + c.duration - e),
            i = 1 - (t / c.duration || 0),
            n = 0,
            o = c.tweens.length;
          n < o;
          n++
        )
          c.tweens[n].run(i)
        return (
          a.notifyWith(s, [c, i, t]),
          i < 1 && o ? t : (a.resolveWith(s, [c]), !1)
        )
      },
      c = a.promise({
        elem: s,
        props: k.extend({}, e),
        opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Re || Qe(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var i = k.Tween(
            s,
            c.opts,
            e,
            t,
            c.opts.specialEasing[e] || c.opts.easing
          )
          return c.tweens.push(i), i
        },
        stop: function (e) {
          var t = 0,
            i = e ? c.tweens.length : 0
          if (r) return this
          for (r = !0; t < i; t++) c.tweens[t].run(1)
          return (
            e
              ? (a.notifyWith(s, [c, 1, 0]), a.resolveWith(s, [c, e]))
              : a.rejectWith(s, [c, e]),
            this
          )
        },
      }),
      u = c.props
    for (
      (function (e, t) {
        var i, n, o, s, r
        for (i in e)
          if (
            ((o = t[(n = k.camelCase(i))]),
            (s = e[i]),
            k.isArray(s) && ((o = s[1]), (s = e[i] = s[0])),
            i !== n && ((e[n] = s), delete e[i]),
            (r = k.cssHooks[n]) && ('expand' in r))
          )
            for (i in ((s = r.expand(s)), delete e[n], s))
              (i in e) || ((e[i] = s[i]), (t[i] = o))
          else t[n] = o
      })(u, c.opts.specialEasing);
      n < o;
      n++
    )
      if ((i = Ze.prefilters[n].call(c, s, u, c.opts)))
        return (
          k.isFunction(i.stop) &&
            (k._queueHooks(c.elem, c.opts.queue).stop = k.proxy(i.stop, i)),
          i
        )
    return (
      k.map(u, Je, c),
      k.isFunction(c.opts.start) && c.opts.start.call(s, c),
      k.fx.timer(k.extend(l, { elem: s, anim: c, queue: c.opts.queue })),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always)
    )
  }
  ;(k.Animation = k.extend(Ze, {
    tweeners: {
      '*': [
        function (e, t) {
          var i = this.createTween(e, t)
          return V(i.elem, e, R.exec(t), i), i
        },
      ],
    },
    tweener: function (e, t) {
      for (
        var i,
          n = 0,
          o = (e = k.isFunction(e) ? ((t = e), ['*']) : e.match(M)).length;
        n < o;
        n++
      )
        (i = e[n]),
          (Ze.tweeners[i] = Ze.tweeners[i] || []),
          Ze.tweeners[i].unshift(t)
    },
    prefilters: [
      function (t, e, i) {
        var n,
          o,
          s,
          r,
          a,
          l,
          c,
          u = this,
          d = {},
          p = t.style,
          h = t.nodeType && U(t),
          f = z.get(t, 'fxshow')
        for (n in (i.queue ||
          (null == (a = k._queueHooks(t, 'fx')).unqueued &&
            ((a.unqueued = 0),
            (l = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || l()
            })),
          a.unqueued++,
          u.always(function () {
            u.always(function () {
              a.unqueued--, k.queue(t, 'fx').length || a.empty.fire()
            })
          })),
        1 === t.nodeType &&
          ('height' in e || 'width' in e) &&
          ((i.overflow = [p.overflow, p.overflowX, p.overflowY]),
          'inline' ===
            ('none' === (c = k.css(t, 'display'))
              ? z.get(t, 'olddisplay') || Ce(t.nodeName)
              : c) &&
            'none' === k.css(t, 'float') &&
            (p.display = 'inline-block')),
        i.overflow &&
          ((p.overflow = 'hidden'),
          u.always(function () {
            ;(p.overflow = i.overflow[0]),
              (p.overflowX = i.overflow[1]),
              (p.overflowY = i.overflow[2])
          })),
        e))
          if (((o = e[n]), Ge.exec(o))) {
            if (
              (delete e[n],
              (s = s || 'toggle' === o),
              o === (h ? 'hide' : 'show'))
            ) {
              if ('show' !== o || !f || void 0 === f[n]) continue
              h = !0
            }
            d[n] = (f && f[n]) || k.style(t, n)
          } else c = void 0
        if (k.isEmptyObject(d))
          'inline' === ('none' === c ? Ce(t.nodeName) : c) && (p.display = c)
        else
          for (n in (f
            ? 'hidden' in f && (h = f.hidden)
            : (f = z.access(t, 'fxshow', {})),
          s && (f.hidden = !h),
          h
            ? k(t).show()
            : u.done(function () {
                k(t).hide()
              }),
          u.done(function () {
            var e
            for (e in (z.remove(t, 'fxshow'), d)) k.style(t, e, d[e])
          }),
          d))
            (r = Je(h ? f[n] : 0, n, u)),
              n in f ||
                ((f[n] = r.start),
                h &&
                  ((r.end = r.start),
                  (r.start = 'width' === n || 'height' === n ? 1 : 0)))
      },
    ],
    prefilter: function (e, t) {
      t ? Ze.prefilters.unshift(e) : Ze.prefilters.push(e)
    },
  })),
    (k.speed = function (e, t, i) {
      var n =
        e && 'object' == typeof e
          ? k.extend({}, e)
          : {
              complete: i || (!i && t) || (k.isFunction(e) && e),
              duration: e,
              easing: (i && t) || (t && !k.isFunction(t) && t),
            }
      return (
        (n.duration = k.fx.off
          ? 0
          : 'number' == typeof n.duration
          ? n.duration
          : n.duration in k.fx.speeds
          ? k.fx.speeds[n.duration]
          : k.fx.speeds._default),
        (null != n.queue && !0 !== n.queue) || (n.queue = 'fx'),
        (n.old = n.complete),
        (n.complete = function () {
          k.isFunction(n.old) && n.old.call(this),
            n.queue && k.dequeue(this, n.queue)
        }),
        n
      )
    }),
    k.fn.extend({
      fadeTo: function (e, t, i, n) {
        return this.filter(U)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: t }, e, i, n)
      },
      animate: function (t, e, i, n) {
        var o = k.isEmptyObject(t),
          s = k.speed(e, i, n),
          r = function () {
            var e = Ze(this, k.extend({}, t), s)
            ;(o || z.get(this, 'finish')) && e.stop(!0)
          }
        return (
          (r.finish = r),
          o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        )
      },
      stop: function (o, e, s) {
        var r = function (e) {
          var t = e.stop
          delete e.stop, t(s)
        }
        return (
          'string' != typeof o && ((s = e), (e = o), (o = void 0)),
          e && !1 !== o && this.queue(o || 'fx', []),
          this.each(function () {
            var e = !0,
              t = null != o && o + 'queueHooks',
              i = k.timers,
              n = z.get(this)
            if (t) n[t] && n[t].stop && r(n[t])
            else for (t in n) n[t] && n[t].stop && Ye.test(t) && r(n[t])
            for (t = i.length; t--; )
              i[t].elem !== this ||
                (null != o && i[t].queue !== o) ||
                (i[t].anim.stop(s), (e = !1), i.splice(t, 1))
            ;(!e && s) || k.dequeue(this, o)
          })
        )
      },
      finish: function (r) {
        return (
          !1 !== r && (r = r || 'fx'),
          this.each(function () {
            var e,
              t = z.get(this),
              i = t[r + 'queue'],
              n = t[r + 'queueHooks'],
              o = k.timers,
              s = i ? i.length : 0
            for (
              t.finish = !0,
                k.queue(this, r, []),
                n && n.stop && n.stop.call(this, !0),
                e = o.length;
              e--;

            )
              o[e].elem === this &&
                o[e].queue === r &&
                (o[e].anim.stop(!0), o.splice(e, 1))
            for (e = 0; e < s; e++)
              i[e] && i[e].finish && i[e].finish.call(this)
            delete t.finish
          })
        )
      },
    }),
    k.each(['toggle', 'show', 'hide'], function (e, n) {
      var o = k.fn[n]
      k.fn[n] = function (e, t, i) {
        return null == e || 'boolean' == typeof e
          ? o.apply(this, arguments)
          : this.animate(Ke(n, !0), e, t, i)
      }
    }),
    k.each(
      {
        slideDown: Ke('show'),
        slideUp: Ke('hide'),
        slideToggle: Ke('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (e, n) {
        k.fn[e] = function (e, t, i) {
          return this.animate(n, e, t, i)
        }
      }
    ),
    (k.timers = []),
    (k.fx.tick = function () {
      var e,
        t = 0,
        i = k.timers
      for (Re = k.now(); t < i.length; t++)
        (e = i[t])() || i[t] !== e || i.splice(t--, 1)
      i.length || k.fx.stop(), (Re = void 0)
    }),
    (k.fx.timer = function (e) {
      k.timers.push(e), e() ? k.fx.start() : k.timers.pop()
    }),
    (k.fx.interval = 13),
    (k.fx.start = function () {
      Be || (Be = T.setInterval(k.fx.tick, k.fx.interval))
    }),
    (k.fx.stop = function () {
      T.clearInterval(Be), (Be = null)
    }),
    (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (k.fn.delay = function (n, e) {
      return (
        (n = (k.fx && k.fx.speeds[n]) || n),
        (e = e || 'fx'),
        this.queue(e, function (e, t) {
          var i = T.setTimeout(e, n)
          t.stop = function () {
            T.clearTimeout(i)
          }
        })
      )
    }),
    (Ue = C.createElement('input')),
    (Ve = C.createElement('select')),
    (Xe = Ve.appendChild(C.createElement('option'))),
    (Ue.type = 'checkbox'),
    (v.checkOn = '' !== Ue.value),
    (v.optSelected = Xe.selected),
    (Ve.disabled = !0),
    (v.optDisabled = !Xe.disabled),
    ((Ue = C.createElement('input')).value = 't'),
    (Ue.type = 'radio'),
    (v.radioValue = 't' === Ue.value)
  var et,
    tt = k.expr.attrHandle
  k.fn.extend({
    attr: function (e, t) {
      return I(this, k.attr, e, t, 1 < arguments.length)
    },
    removeAttr: function (e) {
      return this.each(function () {
        k.removeAttr(this, e)
      })
    },
  }),
    k.extend({
      attr: function (e, t, i) {
        var n,
          o,
          s = e.nodeType
        if (3 !== s && 8 !== s && 2 !== s)
          return void 0 === e.getAttribute
            ? k.prop(e, t, i)
            : ((1 === s && k.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (o =
                  k.attrHooks[t] || (k.expr.match.bool.test(t) ? et : void 0))),
              void 0 !== i
                ? null === i
                  ? void k.removeAttr(e, t)
                  : o && 'set' in o && void 0 !== (n = o.set(e, i, t))
                  ? n
                  : (e.setAttribute(t, i + ''), i)
                : o && 'get' in o && null !== (n = o.get(e, t))
                ? n
                : null == (n = k.find.attr(e, t))
                ? void 0
                : n)
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!v.radioValue && 'radio' === t && k.nodeName(e, 'input')) {
              var i = e.value
              return e.setAttribute('type', t), i && (e.value = i), t
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var i,
          n,
          o = 0,
          s = t && t.match(M)
        if (s && 1 === e.nodeType)
          for (; (i = s[o++]); )
            (n = k.propFix[i] || i),
              k.expr.match.bool.test(i) && (e[n] = !1),
              e.removeAttribute(i)
      },
    }),
    (et = {
      set: function (e, t, i) {
        return !1 === t ? k.removeAttr(e, i) : e.setAttribute(i, i), i
      },
    }),
    k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var s = tt[t] || k.find.attr
      tt[t] = function (e, t, i) {
        var n, o
        return (
          i ||
            ((o = tt[t]),
            (tt[t] = n),
            (n = null != s(e, t, i) ? t.toLowerCase() : null),
            (tt[t] = o)),
          n
        )
      }
    })
  var it = /^(?:input|select|textarea|button)$/i,
    nt = /^(?:a|area)$/i
  k.fn.extend({
    prop: function (e, t) {
      return I(this, k.prop, e, t, 1 < arguments.length)
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[k.propFix[e] || e]
      })
    },
  }),
    k.extend({
      prop: function (e, t, i) {
        var n,
          o,
          s = e.nodeType
        if (3 !== s && 8 !== s && 2 !== s)
          return (
            (1 === s && k.isXMLDoc(e)) ||
              ((t = k.propFix[t] || t), (o = k.propHooks[t])),
            void 0 !== i
              ? o && 'set' in o && void 0 !== (n = o.set(e, i, t))
                ? n
                : (e[t] = i)
              : o && 'get' in o && null !== (n = o.get(e, t))
              ? n
              : e[t]
          )
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = k.find.attr(e, 'tabindex')
            return t
              ? parseInt(t, 10)
              : it.test(e.nodeName) || (nt.test(e.nodeName) && e.href)
              ? 0
              : -1
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    v.optSelected ||
      (k.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode
          return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
          var t = e.parentNode
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        },
      }),
    k.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        k.propFix[this.toLowerCase()] = this
      }
    )
  var ot = /[\t\r\n\f]/g
  function st(e) {
    return (e.getAttribute && e.getAttribute('class')) || ''
  }
  k.fn.extend({
    addClass: function (t) {
      var e,
        i,
        n,
        o,
        s,
        r,
        a,
        l = 0
      if (k.isFunction(t))
        return this.each(function (e) {
          k(this).addClass(t.call(this, e, st(this)))
        })
      if ('string' == typeof t && t)
        for (e = t.match(M) || []; (i = this[l++]); )
          if (
            ((o = st(i)),
            (n = 1 === i.nodeType && (' ' + o + ' ').replace(ot, ' ')))
          ) {
            for (r = 0; (s = e[r++]); )
              n.indexOf(' ' + s + ' ') < 0 && (n += s + ' ')
            o !== (a = k.trim(n)) && i.setAttribute('class', a)
          }
      return this
    },
    removeClass: function (t) {
      var e,
        i,
        n,
        o,
        s,
        r,
        a,
        l = 0
      if (k.isFunction(t))
        return this.each(function (e) {
          k(this).removeClass(t.call(this, e, st(this)))
        })
      if (!arguments.length) return this.attr('class', '')
      if ('string' == typeof t && t)
        for (e = t.match(M) || []; (i = this[l++]); )
          if (
            ((o = st(i)),
            (n = 1 === i.nodeType && (' ' + o + ' ').replace(ot, ' ')))
          ) {
            for (r = 0; (s = e[r++]); )
              for (; -1 < n.indexOf(' ' + s + ' '); )
                n = n.replace(' ' + s + ' ', ' ')
            o !== (a = k.trim(n)) && i.setAttribute('class', a)
          }
      return this
    },
    toggleClass: function (o, t) {
      var s = typeof o
      return 'boolean' == typeof t && 'string' === s
        ? t
          ? this.addClass(o)
          : this.removeClass(o)
        : k.isFunction(o)
        ? this.each(function (e) {
            k(this).toggleClass(o.call(this, e, st(this), t), t)
          })
        : this.each(function () {
            var e, t, i, n
            if ('string' === s)
              for (t = 0, i = k(this), n = o.match(M) || []; (e = n[t++]); )
                i.hasClass(e) ? i.removeClass(e) : i.addClass(e)
            else
              (void 0 !== o && 'boolean' !== s) ||
                ((e = st(this)) && z.set(this, '__className__', e),
                this.setAttribute &&
                  this.setAttribute(
                    'class',
                    e || !1 === o ? '' : z.get(this, '__className__') || ''
                  ))
          })
    },
    hasClass: function (e) {
      var t,
        i,
        n = 0
      for (t = ' ' + e + ' '; (i = this[n++]); )
        if (
          1 === i.nodeType &&
          -1 < (' ' + st(i) + ' ').replace(ot, ' ').indexOf(t)
        )
          return !0
      return !1
    },
  })
  var rt = /\r/g,
    at = /[\x20\t\r\n\f]+/g
  k.fn.extend({
    val: function (i) {
      var n,
        e,
        o,
        t = this[0]
      return arguments.length
        ? ((o = k.isFunction(i)),
          this.each(function (e) {
            var t
            1 === this.nodeType &&
              (null == (t = o ? i.call(this, e, k(this).val()) : i)
                ? (t = '')
                : 'number' == typeof t
                ? (t += '')
                : k.isArray(t) &&
                  (t = k.map(t, function (e) {
                    return null == e ? '' : e + ''
                  })),
              ((n =
                k.valHooks[this.type] ||
                k.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in n &&
                void 0 !== n.set(this, t, 'value')) ||
                (this.value = t))
          }))
        : t
        ? (n = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) &&
          'get' in n &&
          void 0 !== (e = n.get(t, 'value'))
          ? e
          : 'string' == typeof (e = t.value)
          ? e.replace(rt, '')
          : null == e
          ? ''
          : e
        : void 0
    },
  }),
    k.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = k.find.attr(e, 'value')
            return null != t ? t : k.trim(k.text(e)).replace(at, ' ')
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                i,
                n = e.options,
                o = e.selectedIndex,
                s = 'select-one' === e.type || o < 0,
                r = s ? null : [],
                a = s ? o + 1 : n.length,
                l = o < 0 ? a : s ? o : 0;
              l < a;
              l++
            )
              if (
                ((i = n[l]).selected || l === o) &&
                (v.optDisabled
                  ? !i.disabled
                  : null === i.getAttribute('disabled')) &&
                (!i.parentNode.disabled ||
                  !k.nodeName(i.parentNode, 'optgroup'))
              ) {
                if (((t = k(i).val()), s)) return t
                r.push(t)
              }
            return r
          },
          set: function (e, t) {
            for (
              var i, n, o = e.options, s = k.makeArray(t), r = o.length;
              r--;

            )
              ((n = o[r]).selected =
                -1 < k.inArray(k.valHooks.option.get(n), s)) && (i = !0)
            return i || (e.selectedIndex = -1), s
          },
        },
      },
    }),
    k.each(['radio', 'checkbox'], function () {
      ;(k.valHooks[this] = {
        set: function (e, t) {
          return k.isArray(t)
            ? (e.checked = -1 < k.inArray(k(e).val(), t))
            : void 0
        },
      }),
        v.checkOn ||
          (k.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value
          })
    })
  var lt = /^(?:focusinfocus|focusoutblur)$/
  k.extend(k.event, {
    trigger: function (e, t, i, n) {
      var o,
        s,
        r,
        a,
        l,
        c,
        u,
        d = [i || C],
        p = f.call(e, 'type') ? e.type : e,
        h = f.call(e, 'namespace') ? e.namespace.split('.') : []
      if (
        ((s = r = i = i || C),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !lt.test(p + k.event.triggered) &&
          (-1 < p.indexOf('.') && ((p = (h = p.split('.')).shift()), h.sort()),
          (l = p.indexOf(':') < 0 && 'on' + p),
          ((e = e[k.expando]
            ? e
            : new k.Event(p, 'object' == typeof e && e)).isTrigger = n ? 2 : 3),
          (e.namespace = h.join('.')),
          (e.rnamespace = e.namespace
            ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (e.result = void 0),
          e.target || (e.target = i),
          (t = null == t ? [e] : k.makeArray(t, [e])),
          (u = k.event.special[p] || {}),
          n || !u.trigger || !1 !== u.trigger.apply(i, t)))
      ) {
        if (!n && !u.noBubble && !k.isWindow(i)) {
          for (
            a = u.delegateType || p, lt.test(a + p) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            d.push(s), (r = s)
          r === (i.ownerDocument || C) &&
            d.push(r.defaultView || r.parentWindow || T)
        }
        for (o = 0; (s = d[o++]) && !e.isPropagationStopped(); )
          (e.type = 1 < o ? a : u.bindType || p),
            (c = (z.get(s, 'events') || {})[e.type] && z.get(s, 'handle')) &&
              c.apply(s, t),
            (c = l && s[l]) &&
              c.apply &&
              N(s) &&
              ((e.result = c.apply(s, t)),
              !1 === e.result && e.preventDefault())
        return (
          (e.type = p),
          n ||
            e.isDefaultPrevented() ||
            (u._default && !1 !== u._default.apply(d.pop(), t)) ||
            !N(i) ||
            (l &&
              k.isFunction(i[p]) &&
              !k.isWindow(i) &&
              ((r = i[l]) && (i[l] = null),
              i[(k.event.triggered = p)](),
              (k.event.triggered = void 0),
              r && (i[l] = r))),
          e.result
        )
      }
    },
    simulate: function (e, t, i) {
      var n = k.extend(new k.Event(), i, { type: e, isSimulated: !0 })
      k.event.trigger(n, null, t)
    },
  }),
    k.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          k.event.trigger(e, t, this)
        })
      },
      triggerHandler: function (e, t) {
        var i = this[0]
        return i ? k.event.trigger(e, t, i, !0) : void 0
      },
    }),
    k.each(
      'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
        ' '
      ),
      function (e, i) {
        k.fn[i] = function (e, t) {
          return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i)
        }
      }
    ),
    k.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      },
    }),
    (v.focusin = 'onfocusin' in T),
    v.focusin ||
      k.each({ focus: 'focusin', blur: 'focusout' }, function (i, n) {
        var o = function (e) {
          k.event.simulate(n, e.target, k.event.fix(e))
        }
        k.event.special[n] = {
          setup: function () {
            var e = this.ownerDocument || this,
              t = z.access(e, n)
            t || e.addEventListener(i, o, !0), z.access(e, n, (t || 0) + 1)
          },
          teardown: function () {
            var e = this.ownerDocument || this,
              t = z.access(e, n) - 1
            t
              ? z.access(e, n, t)
              : (e.removeEventListener(i, o, !0), z.remove(e, n))
          },
        }
      })
  var ct = T.location,
    ut = k.now(),
    dt = /\?/
  ;(k.parseJSON = function (e) {
    return JSON.parse(e + '')
  }),
    (k.parseXML = function (e) {
      var t
      if (!e || 'string' != typeof e) return null
      try {
        t = new T.DOMParser().parseFromString(e, 'text/xml')
      } catch (e) {
        t = void 0
      }
      return (
        (t && !t.getElementsByTagName('parsererror').length) ||
          k.error('Invalid XML: ' + e),
        t
      )
    })
  var pt = /#.*$/,
    ht = /([?&])_=[^&]*/,
    ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    gt = /^(?:GET|HEAD)$/,
    vt = /^\/\//,
    mt = {},
    _t = {},
    yt = '*/'.concat('*'),
    wt = C.createElement('a')
  function bt(s) {
    return function (e, t) {
      'string' != typeof e && ((t = e), (e = '*'))
      var i,
        n = 0,
        o = e.toLowerCase().match(M) || []
      if (k.isFunction(t))
        for (; (i = o[n++]); )
          '+' === i[0]
            ? ((i = i.slice(1) || '*'), (s[i] = s[i] || []).unshift(t))
            : (s[i] = s[i] || []).push(t)
    }
  }
  function xt(t, o, s, r) {
    var a = {},
      l = t === _t
    function c(e) {
      var n
      return (
        (a[e] = !0),
        k.each(t[e] || [], function (e, t) {
          var i = t(o, s, r)
          return 'string' != typeof i || l || a[i]
            ? l
              ? !(n = i)
              : void 0
            : (o.dataTypes.unshift(i), c(i), !1)
        }),
        n
      )
    }
    return c(o.dataTypes[0]) || (!a['*'] && c('*'))
  }
  function Tt(e, t) {
    var i,
      n,
      o = k.ajaxSettings.flatOptions || {}
    for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i])
    return n && k.extend(!0, e, n), e
  }
  ;(wt.href = ct.href),
    k.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ct.href,
        type: 'GET',
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            ct.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': yt,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript',
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON',
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': k.parseJSON,
          'text xml': k.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Tt(Tt(e, k.ajaxSettings), t) : Tt(k.ajaxSettings, e)
      },
      ajaxPrefilter: bt(mt),
      ajaxTransport: bt(_t),
      ajax: function (e, t) {
        'object' == typeof e && ((t = e), (e = void 0)), (t = t || {})
        var u,
          d,
          p,
          i,
          h,
          n,
          f,
          o,
          g = k.ajaxSetup({}, t),
          v = g.context || g,
          m = g.context && (v.nodeType || v.jquery) ? k(v) : k.event,
          _ = k.Deferred(),
          y = k.Callbacks('once memory'),
          w = g.statusCode || {},
          s = {},
          r = {},
          b = 0,
          a = 'canceled',
          x = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t
              if (2 === b) {
                if (!i)
                  for (i = {}; (t = ft.exec(p)); ) i[t[1].toLowerCase()] = t[2]
                t = i[e.toLowerCase()]
              }
              return null == t ? null : t
            },
            getAllResponseHeaders: function () {
              return 2 === b ? p : null
            },
            setRequestHeader: function (e, t) {
              var i = e.toLowerCase()
              return b || ((e = r[i] = r[i] || e), (s[e] = t)), this
            },
            overrideMimeType: function (e) {
              return b || (g.mimeType = e), this
            },
            statusCode: function (e) {
              var t
              if (e)
                if (b < 2) for (t in e) w[t] = [w[t], e[t]]
                else x.always(e[x.status])
              return this
            },
            abort: function (e) {
              var t = e || a
              return u && u.abort(t), l(0, t), this
            },
          }
        if (
          ((_.promise(x).complete = y.add),
          (x.success = x.done),
          (x.error = x.fail),
          (g.url = ((e || g.url || ct.href) + '')
            .replace(pt, '')
            .replace(vt, ct.protocol + '//')),
          (g.type = t.method || t.type || g.method || g.type),
          (g.dataTypes = k
            .trim(g.dataType || '*')
            .toLowerCase()
            .match(M) || ['']),
          null == g.crossDomain)
        ) {
          n = C.createElement('a')
          try {
            ;(n.href = g.url),
              (n.href = n.href),
              (g.crossDomain =
                wt.protocol + '//' + wt.host != n.protocol + '//' + n.host)
          } catch (e) {
            g.crossDomain = !0
          }
        }
        if (
          (g.data &&
            g.processData &&
            'string' != typeof g.data &&
            (g.data = k.param(g.data, g.traditional)),
          xt(mt, g, t, x),
          2 === b)
        )
          return x
        for (o in ((f = k.event && g.global) &&
          0 == k.active++ &&
          k.event.trigger('ajaxStart'),
        (g.type = g.type.toUpperCase()),
        (g.hasContent = !gt.test(g.type)),
        (d = g.url),
        g.hasContent ||
          (g.data &&
            ((d = g.url += (dt.test(d) ? '&' : '?') + g.data), delete g.data),
          !1 === g.cache &&
            (g.url = ht.test(d)
              ? d.replace(ht, '$1_=' + ut++)
              : d + (dt.test(d) ? '&' : '?') + '_=' + ut++)),
        g.ifModified &&
          (k.lastModified[d] &&
            x.setRequestHeader('If-Modified-Since', k.lastModified[d]),
          k.etag[d] && x.setRequestHeader('If-None-Match', k.etag[d])),
        ((g.data && g.hasContent && !1 !== g.contentType) || t.contentType) &&
          x.setRequestHeader('Content-Type', g.contentType),
        x.setRequestHeader(
          'Accept',
          g.dataTypes[0] && g.accepts[g.dataTypes[0]]
            ? g.accepts[g.dataTypes[0]] +
                ('*' !== g.dataTypes[0] ? ', ' + yt + '; q=0.01' : '')
            : g.accepts['*']
        ),
        g.headers))
          x.setRequestHeader(o, g.headers[o])
        if (g.beforeSend && (!1 === g.beforeSend.call(v, x, g) || 2 === b))
          return x.abort()
        for (o in ((a = 'abort'), { success: 1, error: 1, complete: 1 }))
          x[o](g[o])
        if ((u = xt(_t, g, t, x))) {
          if (((x.readyState = 1), f && m.trigger('ajaxSend', [x, g]), 2 === b))
            return x
          g.async &&
            0 < g.timeout &&
            (h = T.setTimeout(function () {
              x.abort('timeout')
            }, g.timeout))
          try {
            ;(b = 1), u.send(s, l)
          } catch (e) {
            if (!(b < 2)) throw e
            l(-1, e)
          }
        } else l(-1, 'No Transport')
        function l(e, t, i, n) {
          var o,
            s,
            r,
            a,
            l,
            c = t
          2 !== b &&
            ((b = 2),
            h && T.clearTimeout(h),
            (u = void 0),
            (p = n || ''),
            (x.readyState = 0 < e ? 4 : 0),
            (o = (200 <= e && e < 300) || 304 === e),
            i &&
              (a = (function (e, t, i) {
                for (
                  var n, o, s, r, a = e.contents, l = e.dataTypes;
                  '*' === l[0];

                )
                  l.shift(),
                    void 0 === n &&
                      (n = e.mimeType || t.getResponseHeader('Content-Type'))
                if (n)
                  for (o in a)
                    if (a[o] && a[o].test(n)) {
                      l.unshift(o)
                      break
                    }
                if (l[0] in i) s = l[0]
                else {
                  for (o in i) {
                    if (!l[0] || e.converters[o + ' ' + l[0]]) {
                      s = o
                      break
                    }
                    r || (r = o)
                  }
                  s = s || r
                }
                return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
              })(g, x, i)),
            (a = (function (e, t, i, n) {
              var o,
                s,
                r,
                a,
                l,
                c = {},
                u = e.dataTypes.slice()
              if (u[1])
                for (r in e.converters) c[r.toLowerCase()] = e.converters[r]
              for (s = u.shift(); s; )
                if (
                  (e.responseFields[s] && (i[e.responseFields[s]] = t),
                  !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = s),
                  (s = u.shift()))
                )
                  if ('*' === s) s = l
                  else if ('*' !== l && l !== s) {
                    if (!(r = c[l + ' ' + s] || c['* ' + s]))
                      for (o in c)
                        if (
                          (a = o.split(' '))[1] === s &&
                          (r = c[l + ' ' + a[0]] || c['* ' + a[0]])
                        ) {
                          !0 === r
                            ? (r = c[o])
                            : !0 !== c[o] && ((s = a[0]), u.unshift(a[1]))
                          break
                        }
                    if (!0 !== r)
                      if (r && e.throws) t = r(t)
                      else
                        try {
                          t = r(t)
                        } catch (e) {
                          return {
                            state: 'parsererror',
                            error: r
                              ? e
                              : 'No conversion from ' + l + ' to ' + s,
                          }
                        }
                  }
              return { state: 'success', data: t }
            })(g, a, x, o)),
            o
              ? (g.ifModified &&
                  ((l = x.getResponseHeader('Last-Modified')) &&
                    (k.lastModified[d] = l),
                  (l = x.getResponseHeader('etag')) && (k.etag[d] = l)),
                204 === e || 'HEAD' === g.type
                  ? (c = 'nocontent')
                  : 304 === e
                  ? (c = 'notmodified')
                  : ((c = a.state), (s = a.data), (o = !(r = a.error))))
              : ((r = c), (!e && c) || ((c = 'error'), e < 0 && (e = 0))),
            (x.status = e),
            (x.statusText = (t || c) + ''),
            o ? _.resolveWith(v, [s, c, x]) : _.rejectWith(v, [x, c, r]),
            x.statusCode(w),
            (w = void 0),
            f && m.trigger(o ? 'ajaxSuccess' : 'ajaxError', [x, g, o ? s : r]),
            y.fireWith(v, [x, c]),
            f &&
              (m.trigger('ajaxComplete', [x, g]),
              --k.active || k.event.trigger('ajaxStop')))
        }
        return x
      },
      getJSON: function (e, t, i) {
        return k.get(e, t, i, 'json')
      },
      getScript: function (e, t) {
        return k.get(e, void 0, t, 'script')
      },
    }),
    k.each(['get', 'post'], function (e, o) {
      k[o] = function (e, t, i, n) {
        return (
          k.isFunction(t) && ((n = n || i), (i = t), (t = void 0)),
          k.ajax(
            k.extend(
              { url: e, type: o, dataType: n, data: t, success: i },
              k.isPlainObject(e) && e
            )
          )
        )
      }
    }),
    (k._evalUrl = function (e) {
      return k.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        async: !1,
        global: !1,
        throws: !0,
      })
    }),
    k.fn.extend({
      wrapAll: function (t) {
        var e
        return k.isFunction(t)
          ? this.each(function (e) {
              k(this).wrapAll(t.call(this, e))
            })
          : (this[0] &&
              ((e = k(t, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && e.insertBefore(this[0]),
              e
                .map(function () {
                  for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild
                  return e
                })
                .append(this)),
            this)
      },
      wrapInner: function (i) {
        return k.isFunction(i)
          ? this.each(function (e) {
              k(this).wrapInner(i.call(this, e))
            })
          : this.each(function () {
              var e = k(this),
                t = e.contents()
              t.length ? t.wrapAll(i) : e.append(i)
            })
      },
      wrap: function (t) {
        var i = k.isFunction(t)
        return this.each(function (e) {
          k(this).wrapAll(i ? t.call(this, e) : t)
        })
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            k.nodeName(this, 'body') || k(this).replaceWith(this.childNodes)
          })
          .end()
      },
    }),
    (k.expr.filters.hidden = function (e) {
      return !k.expr.filters.visible(e)
    }),
    (k.expr.filters.visible = function (e) {
      return (
        0 < e.offsetWidth || 0 < e.offsetHeight || 0 < e.getClientRects().length
      )
    })
  var Ct = /%20/g,
    kt = /\[\]$/,
    St = /\r?\n/g,
    $t = /^(?:submit|button|image|reset|file)$/i,
    Et = /^(?:input|select|textarea|keygen)/i
  function Ot(i, e, n, o) {
    var t
    if (k.isArray(e))
      k.each(e, function (e, t) {
        n || kt.test(i)
          ? o(i, t)
          : Ot(
              i + '[' + ('object' == typeof t && null != t ? e : '') + ']',
              t,
              n,
              o
            )
      })
    else if (n || 'object' !== k.type(e)) o(i, e)
    else for (t in e) Ot(i + '[' + t + ']', e[t], n, o)
  }
  ;(k.param = function (e, t) {
    var i,
      n = [],
      o = function (e, t) {
        ;(t = k.isFunction(t) ? t() : null == t ? '' : t),
          (n[n.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t))
      }
    if (
      (void 0 === t && (t = k.ajaxSettings && k.ajaxSettings.traditional),
      k.isArray(e) || (e.jquery && !k.isPlainObject(e)))
    )
      k.each(e, function () {
        o(this.name, this.value)
      })
    else for (i in e) Ot(i, e[i], t, o)
    return n.join('&').replace(Ct, '+')
  }),
    k.fn.extend({
      serialize: function () {
        return k.param(this.serializeArray())
      },
      serializeArray: function () {
        return this.map(function () {
          var e = k.prop(this, 'elements')
          return e ? k.makeArray(e) : this
        })
          .filter(function () {
            var e = this.type
            return (
              this.name &&
              !k(this).is(':disabled') &&
              Et.test(this.nodeName) &&
              !$t.test(e) &&
              (this.checked || !X.test(e))
            )
          })
          .map(function (e, t) {
            var i = k(this).val()
            return null == i
              ? null
              : k.isArray(i)
              ? k.map(i, function (e) {
                  return { name: t.name, value: e.replace(St, '\r\n') }
                })
              : { name: t.name, value: i.replace(St, '\r\n') }
          })
          .get()
      },
    }),
    (k.ajaxSettings.xhr = function () {
      try {
        return new T.XMLHttpRequest()
      } catch (e) {}
    })
  var At = { 0: 200, 1223: 204 },
    Dt = k.ajaxSettings.xhr()
  ;(v.cors = !!Dt && 'withCredentials' in Dt),
    (v.ajax = Dt = !!Dt),
    k.ajaxTransport(function (o) {
      var s, r
      return v.cors || (Dt && !o.crossDomain)
        ? {
            send: function (e, t) {
              var i,
                n = o.xhr()
              if (
                (n.open(o.type, o.url, o.async, o.username, o.password),
                o.xhrFields)
              )
                for (i in o.xhrFields) n[i] = o.xhrFields[i]
              for (i in (o.mimeType &&
                n.overrideMimeType &&
                n.overrideMimeType(o.mimeType),
              o.crossDomain ||
                e['X-Requested-With'] ||
                (e['X-Requested-With'] = 'XMLHttpRequest'),
              e))
                n.setRequestHeader(i, e[i])
              ;(s = function (e) {
                return function () {
                  s &&
                    ((s =
                      r =
                      n.onload =
                      n.onerror =
                      n.onabort =
                      n.onreadystatechange =
                        null),
                    'abort' === e
                      ? n.abort()
                      : 'error' === e
                      ? 'number' != typeof n.status
                        ? t(0, 'error')
                        : t(n.status, n.statusText)
                      : t(
                          At[n.status] || n.status,
                          n.statusText,
                          'text' !== (n.responseType || 'text') ||
                            'string' != typeof n.responseText
                            ? { binary: n.response }
                            : { text: n.responseText },
                          n.getAllResponseHeaders()
                        ))
                }
              }),
                (n.onload = s()),
                (r = n.onerror = s('error')),
                void 0 !== n.onabort
                  ? (n.onabort = r)
                  : (n.onreadystatechange = function () {
                      4 === n.readyState &&
                        T.setTimeout(function () {
                          s && r()
                        })
                    }),
                (s = s('abort'))
              try {
                n.send((o.hasContent && o.data) || null)
              } catch (e) {
                if (s) throw e
              }
            },
            abort: function () {
              s && s()
            },
          }
        : void 0
    }),
    k.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return k.globalEval(e), e
        },
      },
    }),
    k.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET')
    }),
    k.ajaxTransport('script', function (i) {
      var n, o
      if (i.crossDomain)
        return {
          send: function (e, t) {
            ;(n = k('<script>')
              .prop({ charset: i.scriptCharset, src: i.url })
              .on(
                'load error',
                (o = function (e) {
                  n.remove(),
                    (o = null),
                    e && t('error' === e.type ? 404 : 200, e.type)
                })
              )),
              C.head.appendChild(n[0])
          },
          abort: function () {
            o && o()
          },
        }
    })
  var Mt = [],
    Pt = /(=)\?(?=&|$)|\?\?/
  k.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = Mt.pop() || k.expando + '_' + ut++
      return (this[e] = !0), e
    },
  }),
    k.ajaxPrefilter('json jsonp', function (e, t, i) {
      var n,
        o,
        s,
        r =
          !1 !== e.jsonp &&
          (Pt.test(e.url)
            ? 'url'
            : 'string' == typeof e.data &&
              0 ===
                (e.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) &&
              Pt.test(e.data) &&
              'data')
      return r || 'jsonp' === e.dataTypes[0]
        ? ((n = e.jsonpCallback =
            k.isFunction(e.jsonpCallback)
              ? e.jsonpCallback()
              : e.jsonpCallback),
          r
            ? (e[r] = e[r].replace(Pt, '$1' + n))
            : !1 !== e.jsonp &&
              (e.url += (dt.test(e.url) ? '&' : '?') + e.jsonp + '=' + n),
          (e.converters['script json'] = function () {
            return s || k.error(n + ' was not called'), s[0]
          }),
          (e.dataTypes[0] = 'json'),
          (o = T[n]),
          (T[n] = function () {
            s = arguments
          }),
          i.always(function () {
            void 0 === o ? k(T).removeProp(n) : (T[n] = o),
              e[n] && ((e.jsonpCallback = t.jsonpCallback), Mt.push(n)),
              s && k.isFunction(o) && o(s[0]),
              (s = o = void 0)
          }),
          'script')
        : void 0
    }),
    (k.parseHTML = function (e, t, i) {
      if (!e || 'string' != typeof e) return null
      'boolean' == typeof t && ((i = t), (t = !1)), (t = t || C)
      var n = w.exec(e),
        o = !i && []
      return n
        ? [t.createElement(n[1])]
        : ((n = ie([e], t, o)),
          o && o.length && k(o).remove(),
          k.merge([], n.childNodes))
    })
  var It = k.fn.load
  function Nt(e) {
    return k.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
  }
  ;(k.fn.load = function (e, t, i) {
    if ('string' != typeof e && It) return It.apply(this, arguments)
    var n,
      o,
      s,
      r = this,
      a = e.indexOf(' ')
    return (
      -1 < a && ((n = k.trim(e.slice(a))), (e = e.slice(0, a))),
      k.isFunction(t)
        ? ((i = t), (t = void 0))
        : t && 'object' == typeof t && (o = 'POST'),
      0 < r.length &&
        k
          .ajax({ url: e, type: o || 'GET', dataType: 'html', data: t })
          .done(function (e) {
            ;(s = arguments),
              r.html(n ? k('<div>').append(k.parseHTML(e)).find(n) : e)
          })
          .always(
            i &&
              function (e, t) {
                r.each(function () {
                  i.apply(this, s || [e.responseText, t, e])
                })
              }
          ),
      this
    )
  }),
    k.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend',
      ],
      function (e, t) {
        k.fn[t] = function (e) {
          return this.on(t, e)
        }
      }
    ),
    (k.expr.filters.animated = function (t) {
      return k.grep(k.timers, function (e) {
        return t === e.elem
      }).length
    }),
    (k.offset = {
      setOffset: function (e, t, i) {
        var n,
          o,
          s,
          r,
          a,
          l,
          c = k.css(e, 'position'),
          u = k(e),
          d = {}
        'static' === c && (e.style.position = 'relative'),
          (a = u.offset()),
          (s = k.css(e, 'top')),
          (l = k.css(e, 'left')),
          (o =
            ('absolute' === c || 'fixed' === c) && -1 < (s + l).indexOf('auto')
              ? ((r = (n = u.position()).top), n.left)
              : ((r = parseFloat(s) || 0), parseFloat(l) || 0)),
          k.isFunction(t) && (t = t.call(e, i, k.extend({}, a))),
          null != t.top && (d.top = t.top - a.top + r),
          null != t.left && (d.left = t.left - a.left + o),
          'using' in t ? t.using.call(e, d) : u.css(d)
      },
    }),
    k.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                k.offset.setOffset(this, t, e)
              })
        var e,
          i,
          n = this[0],
          o = { top: 0, left: 0 },
          s = n && n.ownerDocument
        return s
          ? ((e = s.documentElement),
            k.contains(e, n)
              ? ((o = n.getBoundingClientRect()),
                (i = Nt(s)),
                {
                  top: o.top + i.pageYOffset - e.clientTop,
                  left: o.left + i.pageXOffset - e.clientLeft,
                })
              : o)
          : void 0
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            i = this[0],
            n = { top: 0, left: 0 }
          return (
            'fixed' === k.css(i, 'position')
              ? (t = i.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                k.nodeName(e[0], 'html') || (n = e.offset()),
                (n.top += k.css(e[0], 'borderTopWidth', !0)),
                (n.left += k.css(e[0], 'borderLeftWidth', !0))),
            {
              top: t.top - n.top - k.css(i, 'marginTop', !0),
              left: t.left - n.left - k.css(i, 'marginLeft', !0),
            }
          )
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && 'static' === k.css(e, 'position');

          )
            e = e.offsetParent
          return e || Oe
        })
      },
    }),
    k.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function (t, o) {
        var s = 'pageYOffset' === o
        k.fn[t] = function (e) {
          return I(
            this,
            function (e, t, i) {
              var n = Nt(e)
              return void 0 === i
                ? n
                  ? n[o]
                  : e[t]
                : void (n
                    ? n.scrollTo(s ? n.pageXOffset : i, s ? i : n.pageYOffset)
                    : (e[t] = i))
            },
            t,
            e,
            arguments.length
          )
        }
      }
    ),
    k.each(['top', 'left'], function (e, i) {
      k.cssHooks[i] = De(v.pixelPosition, function (e, t) {
        return t
          ? ((t = Ae(e, i)), Se.test(t) ? k(e).position()[i] + 'px' : t)
          : void 0
      })
    }),
    k.each({ Height: 'height', Width: 'width' }, function (s, r) {
      k.each(
        { padding: 'inner' + s, content: r, '': 'outer' + s },
        function (n, e) {
          k.fn[e] = function (e, t) {
            var i = arguments.length && (n || 'boolean' != typeof e),
              o = n || (!0 === e || !0 === t ? 'margin' : 'border')
            return I(
              this,
              function (e, t, i) {
                var n
                return k.isWindow(e)
                  ? e.document.documentElement['client' + s]
                  : 9 === e.nodeType
                  ? ((n = e.documentElement),
                    Math.max(
                      e.body['scroll' + s],
                      n['scroll' + s],
                      e.body['offset' + s],
                      n['offset' + s],
                      n['client' + s]
                    ))
                  : void 0 === i
                  ? k.css(e, t, o)
                  : k.style(e, t, i, o)
              },
              r,
              i ? e : void 0,
              i,
              null
            )
          }
        }
      )
    }),
    k.fn.extend({
      bind: function (e, t, i) {
        return this.on(e, null, t, i)
      },
      unbind: function (e, t) {
        return this.off(e, null, t)
      },
      delegate: function (e, t, i, n) {
        return this.on(t, e, i, n)
      },
      undelegate: function (e, t, i) {
        return 1 === arguments.length
          ? this.off(e, '**')
          : this.off(t, e || '**', i)
      },
      size: function () {
        return this.length
      },
    }),
    (k.fn.andSelf = k.fn.addBack),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return k
      })
  var jt = T.jQuery,
    zt = T.$
  return (
    (k.noConflict = function (e) {
      return T.$ === k && (T.$ = zt), e && T.jQuery === k && (T.jQuery = jt), k
    }),
    e || (T.jQuery = T.$ = k),
    k
  )
}),
  (function (u) {
    'use strict'
    if (void 0 !== u)
      if (u.fn.jquery.match(/-ajax/))
        'console' in window &&
          window.console.info(
            'Featherlight needs regular jQuery, not the slim version.'
          )
      else {
        var n = [],
          o = function (t) {
            return (n = u.grep(n, function (e) {
              return e !== t && 0 < e.$instance.closest('body').length
            }))
          },
          s = {
            allow: 1,
            allowfullscreen: 1,
            frameborder: 1,
            height: 1,
            longdesc: 1,
            marginheight: 1,
            marginwidth: 1,
            mozallowfullscreen: 1,
            name: 1,
            referrerpolicy: 1,
            sandbox: 1,
            scrolling: 1,
            src: 1,
            srcdoc: 1,
            style: 1,
            webkitallowfullscreen: 1,
            width: 1,
          },
          i = { keyup: 'onKeyUp', resize: 'onResize' },
          r = function (e) {
            u.each(l.opened().reverse(), function () {
              if (!e.isDefaultPrevented() && !1 === this[i[e.type]](e))
                return e.preventDefault(), e.stopPropagation(), !1
            })
          },
          a = function (e) {
            if (e !== l._globalHandlerInstalled) {
              l._globalHandlerInstalled = e
              var t = u
                .map(i, function (e, t) {
                  return t + '.' + l.prototype.namespace
                })
                .join(' ')
              u(window)[e ? 'on' : 'off'](t, r)
            }
          }
        ;(l.prototype = {
          constructor: l,
          namespace: 'featherlight',
          targetAttr: 'data-featherlight',
          variant: null,
          resetCss: !1,
          background: null,
          openTrigger: 'click',
          closeTrigger: 'click',
          filter: null,
          root: 'body',
          openSpeed: 250,
          closeSpeed: 250,
          closeOnClick: 'background',
          closeOnEsc: !0,
          closeIcon: '&#10005;',
          loading: '',
          persist: !1,
          otherClose: null,
          beforeOpen: u.noop,
          beforeContent: u.noop,
          beforeClose: u.noop,
          afterOpen: u.noop,
          afterContent: u.noop,
          afterClose: u.noop,
          onKeyUp: u.noop,
          onResize: u.noop,
          type: null,
          contentFilters: ['jquery', 'image', 'html', 'ajax', 'iframe', 'text'],
          setup: function (e, t) {
            'object' != typeof e ||
              e instanceof u != !1 ||
              t ||
              ((t = e), (e = void 0))
            var i = u.extend(this, t, { target: e }),
              n = i.resetCss ? i.namespace + '-reset' : i.namespace,
              o = u(
                i.background ||
                  [
                    '<div class="' + n + '-loading ' + n + '">',
                    '<div class="' + n + '-content">',
                    '<button class="' +
                      n +
                      '-close-icon ' +
                      i.namespace +
                      '-close" aria-label="Close">',
                    i.closeIcon,
                    '</button>',
                    '<div class="' +
                      i.namespace +
                      '-inner">' +
                      i.loading +
                      '</div>',
                    '</div>',
                    '</div>',
                  ].join('')
              ),
              s =
                '.' +
                i.namespace +
                '-close' +
                (i.otherClose ? ',' + i.otherClose : '')
            return (
              (i.$instance = o.clone().addClass(i.variant)),
              i.$instance.on(i.closeTrigger + '.' + i.namespace, function (e) {
                if (!e.isDefaultPrevented()) {
                  var t = u(e.target)
                  ;(('background' === i.closeOnClick &&
                    t.is('.' + i.namespace)) ||
                    'anywhere' === i.closeOnClick ||
                    t.closest(s).length) &&
                    (i.close(e), e.preventDefault())
                }
              }),
              this
            )
          },
          getContent: function () {
            if (!1 !== this.persist && this.$content) return this.$content
            var t = this,
              e = this.constructor.contentFilters,
              i = function (e) {
                return t.$currentTarget && t.$currentTarget.attr(e)
              },
              n = i(t.targetAttr),
              o = t.target || n || '',
              s = e[t.type]
            if (
              (!s && o in e && ((s = e[o]), (o = t.target && n)),
              (o = o || i('href') || ''),
              !s)
            )
              for (var r in e) t[r] && ((s = e[r]), (o = t[r]))
            if (!s) {
              var a = o
              if (
                ((o = null),
                u.each(t.contentFilters, function () {
                  return (
                    (s = e[this]).test && (o = s.test(a)),
                    !o && s.regex && a.match && a.match(s.regex) && (o = a),
                    !o
                  )
                }),
                !o)
              )
                return (
                  'console' in window &&
                    window.console.error(
                      'Featherlight: no content filter found ' +
                        (a ? ' for "' + a + '"' : ' (no target specified)')
                    ),
                  !1
                )
            }
            return s.process.call(t, o)
          },
          setContent: function (e) {
            return (
              this.$instance.removeClass(this.namespace + '-loading'),
              this.$instance.toggleClass(
                this.namespace + '-iframe',
                e.is('iframe')
              ),
              this.$instance
                .find('.' + this.namespace + '-inner')
                .not(e)
                .slice(1)
                .remove()
                .end()
                .replaceWith(u.contains(this.$instance[0], e[0]) ? '' : e),
              (this.$content = e.addClass(this.namespace + '-inner')),
              this
            )
          },
          open: function (t) {
            var i = this
            if (
              (i.$instance.hide().appendTo(i.root),
              !((t && t.isDefaultPrevented()) || !1 === i.beforeOpen(t)))
            ) {
              t && t.preventDefault()
              var e = i.getContent()
              if (e)
                return (
                  n.push(i),
                  a(!0),
                  i.$instance.fadeIn(i.openSpeed),
                  i.beforeContent(t),
                  u
                    .when(e)
                    .always(function (e) {
                      i.setContent(e), i.afterContent(t)
                    })
                    .then(i.$instance.promise())
                    .done(function () {
                      i.afterOpen(t)
                    })
                )
            }
            return i.$instance.detach(), u.Deferred().reject().promise()
          },
          close: function (e) {
            var t = this,
              i = u.Deferred()
            return (
              !1 === t.beforeClose(e)
                ? i.reject()
                : (0 === o(t).length && a(!1),
                  t.$instance.fadeOut(t.closeSpeed, function () {
                    t.$instance.detach(), t.afterClose(e), i.resolve()
                  })),
              i.promise()
            )
          },
          resize: function (e, t) {
            if (e && t) {
              this.$content.css('width', '').css('height', '')
              var i = Math.max(
                e / (this.$content.parent().width() - 1),
                t / (this.$content.parent().height() - 1)
              )
              1 < i &&
                ((i = t / Math.floor(t / i)),
                this.$content
                  .css('width', e / i + 'px')
                  .css('height', t / i + 'px'))
            }
          },
          chainCallbacks: function (e) {
            for (var t in e)
              this[t] = u.proxy(e[t], this, u.proxy(this[t], this))
          },
        }),
          u.extend(l, {
            id: 0,
            autoBind: '[data-featherlight]',
            defaults: l.prototype,
            contentFilters: {
              jquery: {
                regex: /^[#.]\w/,
                test: function (e) {
                  return e instanceof u && e
                },
                process: function (e) {
                  return !1 !== this.persist ? u(e) : u(e).clone(!0)
                },
              },
              image: {
                regex: /\.(png|jpg|jpeg|gif|tiff?|bmp|svg)(\?\S*)?$/i,
                process: function (e) {
                  var t = u.Deferred(),
                    i = new Image(),
                    n = u(
                      '<img src="' +
                        e +
                        '" alt="" class="' +
                        this.namespace +
                        '-image" />'
                    )
                  return (
                    (i.onload = function () {
                      ;(n.naturalWidth = i.width),
                        (n.naturalHeight = i.height),
                        t.resolve(n)
                    }),
                    (i.onerror = function () {
                      t.reject(n)
                    }),
                    (i.src = e),
                    t.promise()
                  )
                },
              },
              html: {
                regex: /^\s*<[\w!][^<]*>/,
                process: function (e) {
                  return u(e)
                },
              },
              ajax: {
                regex: /./,
                process: function (e) {
                  var i = u.Deferred(),
                    n = u('<div></div>').load(e, function (e, t) {
                      'error' !== t && i.resolve(n.contents()), i.fail()
                    })
                  return i.promise()
                },
              },
              iframe: {
                process: function (e) {
                  var t = new u.Deferred(),
                    i = u('<iframe/>'),
                    n = (function (e, t) {
                      var i = {},
                        n = new RegExp('^' + t + '([A-Z])(.*)')
                      for (var o in e) {
                        var s = o.match(n)
                        s &&
                          (i[
                            (
                              s[1] + s[2].replace(/([A-Z])/g, '-$1')
                            ).toLowerCase()
                          ] = e[o])
                      }
                      return i
                    })(this, 'iframe'),
                    o = (function (e, t) {
                      var i = {}
                      for (var n in e) n in t && ((i[n] = e[n]), delete e[n])
                      return i
                    })(n, s)
                  return (
                    i
                      .hide()
                      .attr('src', e)
                      .attr(o)
                      .css(n)
                      .on('load', function () {
                        t.resolve(i.show())
                      })
                      .appendTo(
                        this.$instance.find('.' + this.namespace + '-content')
                      ),
                    t.promise()
                  )
                },
              },
              text: {
                process: function (e) {
                  return u('<div>', { text: e })
                },
              },
            },
            functionAttributes: [
              'beforeOpen',
              'afterOpen',
              'beforeContent',
              'afterContent',
              'beforeClose',
              'afterClose',
            ],
            readElementConfig: function (e, t) {
              var n = this,
                o = new RegExp('^data-' + t + '-(.*)'),
                s = {}
              return (
                e &&
                  e.attributes &&
                  u.each(e.attributes, function () {
                    var e = this.name.match(o)
                    if (e) {
                      var t = this.value,
                        i = u.camelCase(e[1])
                      if (0 <= u.inArray(i, n.functionAttributes))
                        t = new Function(t)
                      else
                        try {
                          t = JSON.parse(t)
                        } catch (e) {}
                      s[i] = t
                    }
                  }),
                s
              )
            },
            extend: function (e, t) {
              var i = function () {
                this.constructor = e
              }
              return (
                (i.prototype = this.prototype),
                (e.prototype = new i()),
                (e.__super__ = this.prototype),
                u.extend(e, this, t),
                (e.defaults = e.prototype),
                e
              )
            },
            attach: function (o, s, r) {
              var a = this
              'object' != typeof s ||
                s instanceof u != !1 ||
                r ||
                ((r = s), (s = void 0))
              var l,
                e = (r = u.extend({}, r)).namespace || a.defaults.namespace,
                c = u.extend({}, a.defaults, a.readElementConfig(o[0], e), r),
                t = function (e) {
                  var t = u(e.currentTarget),
                    i = u.extend(
                      { $source: o, $currentTarget: t },
                      a.readElementConfig(o[0], c.namespace),
                      a.readElementConfig(e.currentTarget, c.namespace),
                      r
                    ),
                    n = l || t.data('featherlight-persisted') || new a(s, i)
                  'shared' === n.persist
                    ? (l = n)
                    : !1 !== n.persist && t.data('featherlight-persisted', n),
                    i.$currentTarget.blur && i.$currentTarget.blur(),
                    n.open(e)
                }
              return (
                o.on(c.openTrigger + '.' + c.namespace, c.filter, t),
                { filter: c.filter, handler: t }
              )
            },
            current: function () {
              var e = this.opened()
              return e[e.length - 1] || null
            },
            opened: function () {
              var t = this
              return (
                o(),
                u.grep(n, function (e) {
                  return e instanceof t
                })
              )
            },
            close: function (e) {
              var t = this.current()
              if (t) return t.close(e)
            },
            _onReady: function () {
              var n = this
              if (n.autoBind) {
                var o = u(n.autoBind)
                o.each(function () {
                  n.attach(u(this))
                }),
                  u(document).on('click', n.autoBind, function (e) {
                    if (!e.isDefaultPrevented()) {
                      var t = u(e.currentTarget)
                      if (o.length !== (o = o.add(t)).length) {
                        var i = n.attach(t)
                        ;(!i.filter ||
                          0 < u(e.target).parentsUntil(t, i.filter).length) &&
                          i.handler(e)
                      }
                    }
                  })
              }
            },
            _callbackChain: {
              onKeyUp: function (e, t) {
                return 27 === t.keyCode
                  ? (this.closeOnEsc && u.featherlight.close(t), !1)
                  : e(t)
              },
              beforeOpen: function (e, t) {
                return (
                  u(document.documentElement).addClass('with-featherlight'),
                  (this._previouslyActive = document.activeElement),
                  (this._$previouslyTabbable = u(
                    'a, input, select, textarea, iframe, button, iframe, [contentEditable=true]'
                  )
                    .not('[tabindex]')
                    .not(this.$instance.find('button'))),
                  (this._$previouslyWithTabIndex =
                    u('[tabindex]').not('[tabindex="-1"]')),
                  (this._previousWithTabIndices =
                    this._$previouslyWithTabIndex.map(function (e, t) {
                      return u(t).attr('tabindex')
                    })),
                  this._$previouslyWithTabIndex
                    .add(this._$previouslyTabbable)
                    .attr('tabindex', -1),
                  document.activeElement.blur && document.activeElement.blur(),
                  e(t)
                )
              },
              afterClose: function (e, t) {
                var i = e(t),
                  n = this
                return (
                  this._$previouslyTabbable.removeAttr('tabindex'),
                  this._$previouslyWithTabIndex.each(function (e, t) {
                    u(t).attr('tabindex', n._previousWithTabIndices[e])
                  }),
                  this._previouslyActive.focus(),
                  0 === l.opened().length &&
                    u(document.documentElement).removeClass(
                      'with-featherlight'
                    ),
                  i
                )
              },
              onResize: function (e, t) {
                return (
                  this.resize(
                    this.$content.naturalWidth,
                    this.$content.naturalHeight
                  ),
                  e(t)
                )
              },
              afterContent: function (e, t) {
                var i = e(t)
                return (
                  this.$instance.find('[autofocus]:not([disabled])').focus(),
                  this.onResize(t),
                  i
                )
              },
            },
          }),
          (u.featherlight = l),
          (u.fn.featherlight = function (e, t) {
            return l.attach(this, e, t), this
          }),
          u(document).ready(function () {
            l._onReady()
          })
      }
    else
      'console' in window &&
        window.console.info('Too much lightness, Featherlight needs jQuery.')
    function l(e, t) {
      if (!(this instanceof l)) {
        var i = new l(e, t)
        return i.open(), i
      }
      ;(this.id = l.id++),
        this.setup(e, t),
        this.chainCallbacks(l._callbackChain)
    }
  })(jQuery),
  (function (s) {
    'use strict'
    var e = function (e) {
      window.console &&
        window.console.warn &&
        window.console.warn('FeatherlightGallery: ' + e)
    }
    if (void 0 === s) return e('Too much lightness, Featherlight needs jQuery.')
    if (!s.featherlight)
      return e('Load the featherlight plugin before the gallery plugin')
    var t =
        'ontouchstart' in window ||
        (window.DocumentTouch && document instanceof DocumentTouch),
      i = s.event && s.event.special.swipeleft && s,
      n =
        window.Hammer &&
        function (e) {
          var t = new window.Hammer.Manager(e[0])
          return t.add(new window.Hammer.Swipe()), t
        },
      o = t && (i || n)
    t &&
      !o &&
      e(
        'No compatible swipe library detected; one must be included before featherlightGallery for swipe motions to navigate the galleries.'
      )
    var r = {
      afterClose: function (e, t) {
        var i = this
        return (
          i.$instance.off('next.' + i.namespace + ' previous.' + i.namespace),
          i._swiper &&
            (i._swiper
              .off('swipeleft', i._swipeleft)
              .off('swiperight', i._swiperight),
            (i._swiper = null)),
          e(t)
        )
      },
      beforeOpen: function (e, t) {
        var i = this
        return (
          i.$instance.on(
            'next.' + i.namespace + ' previous.' + i.namespace,
            function (e) {
              var t = 'next' === e.type ? 1 : -1
              i.navigateTo(i.currentNavigation() + t)
            }
          ),
          o &&
            ((i._swiper = o(i.$instance)
              .on(
                'swipeleft',
                (i._swipeleft = function () {
                  i.$instance.trigger('next')
                })
              )
              .on(
                'swiperight',
                (i._swiperight = function () {
                  i.$instance.trigger('previous')
                })
              )),
            i.$instance.addClass(this.namespace + '-swipe-aware', o)),
          i.$instance
            .find('.' + i.namespace + '-content')
            .append(i.createNavigation('previous'))
            .append(i.createNavigation('next')),
          e(t)
        )
      },
      beforeContent: function (e, t) {
        var i = this.currentNavigation(),
          n = this.slides().length
        return (
          this.$instance
            .toggleClass(this.namespace + '-first-slide', 0 === i)
            .toggleClass(this.namespace + '-last-slide', i === n - 1),
          e(t)
        )
      },
      onKeyUp: function (e, t) {
        var i = { 37: 'previous', 39: 'next' }[t.keyCode]
        return i ? (this.$instance.trigger(i), !1) : e(t)
      },
    }
    function a(e, t) {
      if (!(this instanceof a)) {
        var i = new a(s.extend({ $source: e, $currentTarget: e.first() }, t))
        return i.open(), i
      }
      s.featherlight.apply(this, arguments), this.chainCallbacks(r)
    }
    s.featherlight.extend(a, { autoBind: '[data-featherlight-gallery]' }),
      s.extend(a.prototype, {
        previousIcon: '&#9664;',
        nextIcon: '&#9654;',
        galleryFadeIn: 100,
        galleryFadeOut: 300,
        slides: function () {
          return this.filter ? this.$source.find(this.filter) : this.$source
        },
        images: function () {
          return (
            e('images is deprecated, please use slides instead'), this.slides()
          )
        },
        currentNavigation: function () {
          return this.slides().index(this.$currentTarget)
        },
        navigateTo: function (e) {
          var t = this,
            i = t.slides(),
            n = i.length,
            o = t.$instance.find('.' + t.namespace + '-inner')
          return (
            (e = ((e % n) + n) % n),
            (t.$currentTarget = i.eq(e)),
            t.beforeContent(),
            s
              .when(t.getContent(), o.fadeTo(t.galleryFadeOut, 0.2))
              .always(function (e) {
                t.setContent(e), t.afterContent(), e.fadeTo(t.galleryFadeIn, 1)
              })
          )
        },
        createNavigation: function (t) {
          var i = this
          return s(
            '<button title="' +
              t +
              '" class="' +
              this.namespace +
              '-' +
              t +
              '"><span>' +
              this[t + 'Icon'] +
              '</span></button>'
          ).click(function (e) {
            s(this).trigger(t + '.' + i.namespace), e.preventDefault()
          })
        },
      }),
      (s.featherlightGallery = a),
      (s.fn.featherlightGallery = function (e) {
        return a.attach(this, e), this
      }),
      s(document).ready(function () {
        a._onReady()
      })
  })(jQuery),
  (function (s) {
    ;(s.easing.jswing = s.easing.swing),
      s.extend(s.easing, {
        def: 'easeOutQuad',
        swing: function (e, t, i, n, o) {
          return s.easing[s.easing.def](e, t, i, n, o)
        },
        easeInQuad: function (e, t, i, n, o) {
          return n * (t /= o) * t + i
        },
        easeOutQuad: function (e, t, i, n, o) {
          return -n * (t /= o) * (t - 2) + i
        },
        easeInOutQuad: function (e, t, i, n, o) {
          return (t /= o / 2) < 1
            ? (n / 2) * t * t + i
            : (-n / 2) * (--t * (t - 2) - 1) + i
        },
        easeInCubic: function (e, t, i, n, o) {
          return n * (t /= o) * t * t + i
        },
        easeOutCubic: function (e, t, i, n, o) {
          return n * ((t = t / o - 1) * t * t + 1) + i
        },
        easeInOutCubic: function (e, t, i, n, o) {
          return (t /= o / 2) < 1
            ? (n / 2) * t * t * t + i
            : (n / 2) * ((t -= 2) * t * t + 2) + i
        },
        easeInQuart: function (e, t, i, n, o) {
          return n * (t /= o) * t * t * t + i
        },
        easeOutQuart: function (e, t, i, n, o) {
          return -n * ((t = t / o - 1) * t * t * t - 1) + i
        },
        easeInOutQuart: function (e, t, i, n, o) {
          return (t /= o / 2) < 1
            ? (n / 2) * t * t * t * t + i
            : (-n / 2) * ((t -= 2) * t * t * t - 2) + i
        },
        easeInQuint: function (e, t, i, n, o) {
          return n * (t /= o) * t * t * t * t + i
        },
        easeOutQuint: function (e, t, i, n, o) {
          return n * ((t = t / o - 1) * t * t * t * t + 1) + i
        },
        easeInOutQuint: function (e, t, i, n, o) {
          return (t /= o / 2) < 1
            ? (n / 2) * t * t * t * t * t + i
            : (n / 2) * ((t -= 2) * t * t * t * t + 2) + i
        },
        easeInSine: function (e, t, i, n, o) {
          return -n * Math.cos((t / o) * (Math.PI / 2)) + n + i
        },
        easeOutSine: function (e, t, i, n, o) {
          return n * Math.sin((t / o) * (Math.PI / 2)) + i
        },
        easeInOutSine: function (e, t, i, n, o) {
          return (-n / 2) * (Math.cos((Math.PI * t) / o) - 1) + i
        },
        easeInExpo: function (e, t, i, n, o) {
          return 0 == t ? i : n * Math.pow(2, 10 * (t / o - 1)) + i
        },
        easeOutExpo: function (e, t, i, n, o) {
          return t == o ? i + n : n * (1 - Math.pow(2, (-10 * t) / o)) + i
        },
        easeInOutExpo: function (e, t, i, n, o) {
          return 0 == t
            ? i
            : t == o
            ? i + n
            : (t /= o / 2) < 1
            ? (n / 2) * Math.pow(2, 10 * (t - 1)) + i
            : (n / 2) * (2 - Math.pow(2, -10 * --t)) + i
        },
        easeInCirc: function (e, t, i, n, o) {
          return -n * (Math.sqrt(1 - (t /= o) * t) - 1) + i
        },
        easeOutCirc: function (e, t, i, n, o) {
          return n * Math.sqrt(1 - (t = t / o - 1) * t) + i
        },
        easeInOutCirc: function (e, t, i, n, o) {
          return (t /= o / 2) < 1
            ? (-n / 2) * (Math.sqrt(1 - t * t) - 1) + i
            : (n / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
        },
        easeInElastic: function (e, t, i, n, o) {
          var s = 1.70158,
            r = 0,
            a = n
          if (0 == t) return i
          if (1 == (t /= o)) return i + n
          if ((r || (r = 0.3 * o), a < Math.abs(n))) {
            a = n
            s = r / 4
          } else s = (r / (2 * Math.PI)) * Math.asin(n / a)
          return (
            -a *
              Math.pow(2, 10 * (t -= 1)) *
              Math.sin(((t * o - s) * (2 * Math.PI)) / r) +
            i
          )
        },
        easeOutElastic: function (e, t, i, n, o) {
          var s = 1.70158,
            r = 0,
            a = n
          if (0 == t) return i
          if (1 == (t /= o)) return i + n
          if ((r || (r = 0.3 * o), a < Math.abs(n))) {
            a = n
            s = r / 4
          } else s = (r / (2 * Math.PI)) * Math.asin(n / a)
          return (
            a *
              Math.pow(2, -10 * t) *
              Math.sin(((t * o - s) * (2 * Math.PI)) / r) +
            n +
            i
          )
        },
        easeInOutElastic: function (e, t, i, n, o) {
          var s = 1.70158,
            r = 0,
            a = n
          if (0 == t) return i
          if (2 == (t /= o / 2)) return i + n
          if ((r || (r = o * (0.3 * 1.5)), a < Math.abs(n))) {
            a = n
            s = r / 4
          } else s = (r / (2 * Math.PI)) * Math.asin(n / a)
          return t < 1
            ? a *
                Math.pow(2, 10 * (t -= 1)) *
                Math.sin(((t * o - s) * (2 * Math.PI)) / r) *
                -0.5 +
                i
            : a *
                Math.pow(2, -10 * (t -= 1)) *
                Math.sin(((t * o - s) * (2 * Math.PI)) / r) *
                0.5 +
                n +
                i
        },
        easeInBack: function (e, t, i, n, o, s) {
          return (
            null == s && (s = 1.70158), n * (t /= o) * t * ((s + 1) * t - s) + i
          )
        },
        easeOutBack: function (e, t, i, n, o, s) {
          return (
            null == s && (s = 1.70158),
            n * ((t = t / o - 1) * t * ((s + 1) * t + s) + 1) + i
          )
        },
        easeInOutBack: function (e, t, i, n, o, s) {
          return (
            null == s && (s = 1.70158),
            (t /= o / 2) < 1
              ? (n / 2) * (t * t * ((1 + (s *= 1.525)) * t - s)) + i
              : (n / 2) * ((t -= 2) * t * ((1 + (s *= 1.525)) * t + s) + 2) + i
          )
        },
        easeInBounce: function (e, t, i, n, o) {
          return n - s.easing.easeOutBounce(e, o - t, 0, n, o) + i
        },
        easeOutBounce: function (e, t, i, n, o) {
          return (t /= o) < 1 / 2.75
            ? n * (7.5625 * t * t) + i
            : t < 2 / 2.75
            ? n * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + i
            : t < 2.5 / 2.75
            ? n * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + i
            : n * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + i
        },
        easeInOutBounce: function (e, t, i, n, o) {
          return t < o / 2
            ? 0.5 * s.easing.easeInBounce(e, 2 * t, 0, n, o) + i
            : 0.5 * s.easing.easeOutBounce(e, 2 * t - o, 0, n, o) + 0.5 * n + i
        },
      }),
      (s.fn.animatescroll = function (e) {
        var t = s.extend({}, s.fn.animatescroll.defaults, e)
        if (
          ('function' == typeof t.onScrollStart && t.onScrollStart.call(this),
          'html,body' == t.element)
        ) {
          var i = this.offset().top
          s(t.element)
            .stop()
            .animate({ scrollTop: i - t.padding }, t.scrollSpeed, t.easing)
        } else
          s(t.element)
            .stop()
            .animate(
              {
                scrollTop:
                  this.offset().top -
                  this.parent().offset().top +
                  this.parent().scrollTop() -
                  t.padding,
              },
              t.scrollSpeed,
              t.easing
            )
        setTimeout(function () {
          'function' == typeof t.onScrollEnd && t.onScrollEnd.call(this)
        }, t.scrollSpeed)
      }),
      (s.fn.animatescroll.defaults = {
        easing: 'swing',
        scrollSpeed: 800,
        padding: 0,
        element: 'html,body',
      })
  })(jQuery),
  (function (e, t) {
    if ('function' == typeof define && define.amd) define(['exports'], t)
    else if ('undefined' != typeof exports) t(exports)
    else {
      var i = {}
      t(i), (e.bodyScrollLock = i)
    }
  })(this, function (e) {
    'use strict'
    function o(e) {
      if (Array.isArray(e)) {
        for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t]
        return i
      }
      return Array.from(e)
    }
    Object.defineProperty(e, '__esModule', { value: !0 })
    var r = !1
    if ('undefined' != typeof window) {
      var t = {
        get passive() {
          r = !0
        },
      }
      window.addEventListener('testPassive', null, t),
        window.removeEventListener('testPassive', null, t)
    }
    var a =
        'undefined' != typeof window &&
        window.navigator &&
        window.navigator.platform &&
        /iP(ad|hone|od)/.test(window.navigator.platform),
      l = [],
      c = !1,
      u = -1,
      d = void 0,
      p = void 0,
      h = function (t) {
        return l.some(function (e) {
          return !(!e.options.allowTouchMove || !e.options.allowTouchMove(t))
        })
      },
      f = function (e) {
        var t = e || window.event
        return (
          !!h(t.target) ||
          1 < t.touches.length ||
          (t.preventDefault && t.preventDefault(), !1)
        )
      },
      i = function () {
        setTimeout(function () {
          void 0 !== p &&
            ((document.body.style.paddingRight = p), (p = void 0)),
            void 0 !== d && ((document.body.style.overflow = d), (d = void 0))
        })
      }
    ;(e.disableBodyScroll = function (s, e) {
      if (a) {
        if (!s)
          return void console.error(
            'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.'
          )
        if (
          s &&
          !l.some(function (e) {
            return e.targetElement === s
          })
        ) {
          var t = { targetElement: s, options: e || {} }
          ;(l = [].concat(o(l), [t])),
            (s.ontouchstart = function (e) {
              1 === e.targetTouches.length && (u = e.targetTouches[0].clientY)
            }),
            (s.ontouchmove = function (e) {
              var t, i, n, o
              1 === e.targetTouches.length &&
                ((i = s),
                (o = (t = e).targetTouches[0].clientY - u),
                !h(t.target) &&
                  (i && 0 === i.scrollTop && 0 < o
                    ? f(t)
                    : (n = i) &&
                      n.scrollHeight - n.scrollTop <= n.clientHeight &&
                      o < 0
                    ? f(t)
                    : t.stopPropagation()))
            }),
            c ||
              (document.addEventListener(
                'touchmove',
                f,
                r ? { passive: !1 } : void 0
              ),
              (c = !0))
        }
      } else {
        ;(n = e),
          setTimeout(function () {
            if (void 0 === p) {
              var e = !!n && !0 === n.reserveScrollBarGap,
                t = window.innerWidth - document.documentElement.clientWidth
              e &&
                0 < t &&
                ((p = document.body.style.paddingRight),
                (document.body.style.paddingRight = t + 'px'))
            }
            void 0 === d &&
              ((d = document.body.style.overflow),
              (document.body.style.overflow = 'hidden'))
          })
        var i = { targetElement: s, options: e || {} }
        l = [].concat(o(l), [i])
      }
      var n
    }),
      (e.clearAllBodyScrollLocks = function () {
        a
          ? (l.forEach(function (e) {
              ;(e.targetElement.ontouchstart = null),
                (e.targetElement.ontouchmove = null)
            }),
            c &&
              (document.removeEventListener(
                'touchmove',
                f,
                r ? { passive: !1 } : void 0
              ),
              (c = !1)),
            (l = []),
            (u = -1))
          : (i(), (l = []))
      }),
      (e.enableBodyScroll = function (t) {
        if (a) {
          if (!t)
            return void console.error(
              'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.'
            )
          ;(t.ontouchstart = null),
            (t.ontouchmove = null),
            (l = l.filter(function (e) {
              return e.targetElement !== t
            })),
            c &&
              0 === l.length &&
              (document.removeEventListener(
                'touchmove',
                f,
                r ? { passive: !1 } : void 0
              ),
              (c = !1))
        } else
          l =
            1 === l.length && l[0].targetElement === t
              ? (i(), [])
              : l.filter(function (e) {
                  return e.targetElement !== t
                })
      })
  }),
  (function (e) {
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = e())
      : 'function' == typeof define && define.amd
      ? define([], e)
      : (('undefined' != typeof window
          ? window
          : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof self
          ? self
          : this
        ).iosInnerHeight = e())
  })(function () {
    return (function s(r, a, l) {
      function c(t, e) {
        if (!a[t]) {
          if (!r[t]) {
            var i = 'function' == typeof require && require
            if (!e && i) return i(t, !0)
            if (u) return u(t, !0)
            var n = new Error("Cannot find module '" + t + "'")
            throw ((n.code = 'MODULE_NOT_FOUND'), n)
          }
          var o = (a[t] = { exports: {} })
          r[t][0].call(
            o.exports,
            function (e) {
              return c(r[t][1][e] || e)
            },
            o,
            o.exports,
            s,
            r,
            a,
            l
          )
        }
        return a[t].exports
      }
      for (
        var u = 'function' == typeof require && require, e = 0;
        e < l.length;
        e++
      )
        c(l[e])
      return c
    })(
      {
        1: [
          function (e, t, i) {
            'use strict'
            t.exports = (function () {
              if (
                'undefined' == typeof window ||
                'undefined' == typeof navigator
              )
                return function () {
                  return 0
                }
              if (!navigator.userAgent.match(/iphone|ipod|ipad/i))
                return function () {
                  return window.innerHeight
                }
              var e,
                t = Math.abs(window.orientation),
                i = { w: 0, h: 0 }
              return (
                ((e = document.createElement('div')).style.position = 'fixed'),
                (e.style.height = '100vh'),
                (e.style.width = 0),
                (e.style.top = 0),
                document.documentElement.appendChild(e),
                (i.w = 90 === t ? e.offsetHeight : window.innerWidth),
                (i.h = 90 === t ? window.innerWidth : e.offsetHeight),
                document.documentElement.removeChild(e),
                (e = null),
                function () {
                  return 90 !== Math.abs(window.orientation) ? i.h : i.w
                }
              )
            })()
          },
          {},
        ],
      },
      {},
      [1]
    )(1)
  }),
  (function (e) {
    'function' == typeof define && define.amd
      ? define(['jquery'], e)
      : e(jQuery)
  })(function (u) {
    ;(u.ui = u.ui || {}), (u.ui.version = '1.12.1')
    var o,
      i = 0,
      a = Array.prototype.slice
    ;(u.cleanData =
      ((o = u.cleanData),
      function (e) {
        var t, i, n
        for (n = 0; null != (i = e[n]); n++)
          try {
            ;(t = u._data(i, 'events')) &&
              t.remove &&
              u(i).triggerHandler('remove')
          } catch (e) {}
        o(e)
      })),
      (u.widget = function (e, i, t) {
        var n,
          o,
          s,
          r = {},
          a = e.split('.')[0],
          l = a + '-' + (e = e.split('.')[1])
        return (
          t || ((t = i), (i = u.Widget)),
          u.isArray(t) && (t = u.extend.apply(null, [{}].concat(t))),
          (u.expr[':'][l.toLowerCase()] = function (e) {
            return !!u.data(e, l)
          }),
          (u[a] = u[a] || {}),
          (n = u[a][e]),
          (o = u[a][e] =
            function (e, t) {
              return this._createWidget
                ? void (arguments.length && this._createWidget(e, t))
                : new o(e, t)
            }),
          u.extend(o, n, {
            version: t.version,
            _proto: u.extend({}, t),
            _childConstructors: [],
          }),
          ((s = new i()).options = u.widget.extend({}, s.options)),
          u.each(t, function (t, s) {
            return u.isFunction(s)
              ? void (r[t] = (function () {
                  function n() {
                    return i.prototype[t].apply(this, arguments)
                  }
                  function o(e) {
                    return i.prototype[t].apply(this, e)
                  }
                  return function () {
                    var e,
                      t = this._super,
                      i = this._superApply
                    return (
                      (this._super = n),
                      (this._superApply = o),
                      (e = s.apply(this, arguments)),
                      (this._super = t),
                      (this._superApply = i),
                      e
                    )
                  }
                })())
              : void (r[t] = s)
          }),
          (o.prototype = u.widget.extend(
            s,
            { widgetEventPrefix: (n && s.widgetEventPrefix) || e },
            r,
            { constructor: o, namespace: a, widgetName: e, widgetFullName: l }
          )),
          n
            ? (u.each(n._childConstructors, function (e, t) {
                var i = t.prototype
                u.widget(i.namespace + '.' + i.widgetName, o, t._proto)
              }),
              delete n._childConstructors)
            : i._childConstructors.push(o),
          u.widget.bridge(e, o),
          o
        )
      }),
      (u.widget.extend = function (e) {
        for (
          var t, i, n = a.call(arguments, 1), o = 0, s = n.length;
          o < s;
          o++
        )
          for (t in n[o])
            (i = n[o][t]),
              n[o].hasOwnProperty(t) &&
                void 0 !== i &&
                (e[t] = u.isPlainObject(i)
                  ? u.isPlainObject(e[t])
                    ? u.widget.extend({}, e[t], i)
                    : u.widget.extend({}, i)
                  : i)
        return e
      }),
      (u.widget.bridge = function (s, t) {
        var r = t.prototype.widgetFullName || s
        u.fn[s] = function (i) {
          var e = 'string' == typeof i,
            n = a.call(arguments, 1),
            o = this
          return (
            e
              ? this.length || 'instance' !== i
                ? this.each(function () {
                    var e,
                      t = u.data(this, r)
                    return 'instance' === i
                      ? ((o = t), !1)
                      : t
                      ? u.isFunction(t[i]) && '_' !== i.charAt(0)
                        ? (e = t[i].apply(t, n)) !== t && void 0 !== e
                          ? ((o = e && e.jquery ? o.pushStack(e.get()) : e), !1)
                          : void 0
                        : u.error(
                            "no such method '" +
                              i +
                              "' for " +
                              s +
                              ' widget instance'
                          )
                      : u.error(
                          'cannot call methods on ' +
                            s +
                            " prior to initialization; attempted to call method '" +
                            i +
                            "'"
                        )
                  })
                : (o = void 0)
              : (n.length && (i = u.widget.extend.apply(null, [i].concat(n))),
                this.each(function () {
                  var e = u.data(this, r)
                  e
                    ? (e.option(i || {}), e._init && e._init())
                    : u.data(this, r, new t(i, this))
                })),
            o
          )
        }
      }),
      (u.Widget = function () {}),
      (u.Widget._childConstructors = []),
      (u.Widget.prototype = {
        widgetName: 'widget',
        widgetEventPrefix: '',
        defaultElement: '<div>',
        options: { classes: {}, disabled: !1, create: null },
        _createWidget: function (e, t) {
          ;(t = u(t || this.defaultElement || this)[0]),
            (this.element = u(t)),
            (this.uuid = i++),
            (this.eventNamespace = '.' + this.widgetName + this.uuid),
            (this.bindings = u()),
            (this.hoverable = u()),
            (this.focusable = u()),
            (this.classesElementLookup = {}),
            t !== this &&
              (u.data(t, this.widgetFullName, this),
              this._on(!0, this.element, {
                remove: function (e) {
                  e.target === t && this.destroy()
                },
              }),
              (this.document = u(t.style ? t.ownerDocument : t.document || t)),
              (this.window = u(
                this.document[0].defaultView || this.document[0].parentWindow
              ))),
            (this.options = u.widget.extend(
              {},
              this.options,
              this._getCreateOptions(),
              e
            )),
            this._create(),
            this.options.disabled &&
              this._setOptionDisabled(this.options.disabled),
            this._trigger('create', null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: function () {
          return {}
        },
        _getCreateEventData: u.noop,
        _create: u.noop,
        _init: u.noop,
        destroy: function () {
          var i = this
          this._destroy(),
            u.each(this.classesElementLookup, function (e, t) {
              i._removeClass(t, e)
            }),
            this.element
              .off(this.eventNamespace)
              .removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr('aria-disabled'),
            this.bindings.off(this.eventNamespace)
        },
        _destroy: u.noop,
        widget: function () {
          return this.element
        },
        option: function (e, t) {
          var i,
            n,
            o,
            s = e
          if (0 === arguments.length) return u.widget.extend({}, this.options)
          if ('string' == typeof e)
            if (((s = {}), (e = (i = e.split('.')).shift()), i.length)) {
              for (
                n = s[e] = u.widget.extend({}, this.options[e]), o = 0;
                i.length - 1 > o;
                o++
              )
                (n[i[o]] = n[i[o]] || {}), (n = n[i[o]])
              if (((e = i.pop()), 1 === arguments.length))
                return void 0 === n[e] ? null : n[e]
              n[e] = t
            } else {
              if (1 === arguments.length)
                return void 0 === this.options[e] ? null : this.options[e]
              s[e] = t
            }
          return this._setOptions(s), this
        },
        _setOptions: function (e) {
          var t
          for (t in e) this._setOption(t, e[t])
          return this
        },
        _setOption: function (e, t) {
          return (
            'classes' === e && this._setOptionClasses(t),
            (this.options[e] = t),
            'disabled' === e && this._setOptionDisabled(t),
            this
          )
        },
        _setOptionClasses: function (e) {
          var t, i, n
          for (t in e)
            (n = this.classesElementLookup[t]),
              e[t] !== this.options.classes[t] &&
                n &&
                n.length &&
                ((i = u(n.get())),
                this._removeClass(n, t),
                i.addClass(
                  this._classes({ element: i, keys: t, classes: e, add: !0 })
                ))
        },
        _setOptionDisabled: function (e) {
          this._toggleClass(
            this.widget(),
            this.widgetFullName + '-disabled',
            null,
            !!e
          ),
            e &&
              (this._removeClass(this.hoverable, null, 'ui-state-hover'),
              this._removeClass(this.focusable, null, 'ui-state-focus'))
        },
        enable: function () {
          return this._setOptions({ disabled: !1 })
        },
        disable: function () {
          return this._setOptions({ disabled: !0 })
        },
        _classes: function (o) {
          function e(e, t) {
            var i, n
            for (n = 0; e.length > n; n++)
              (i = r.classesElementLookup[e[n]] || u()),
                (i = o.add
                  ? u(u.unique(i.get().concat(o.element.get())))
                  : u(i.not(o.element).get())),
                (r.classesElementLookup[e[n]] = i),
                s.push(e[n]),
                t && o.classes[e[n]] && s.push(o.classes[e[n]])
          }
          var s = [],
            r = this
          return (
            (o = u.extend(
              { element: this.element, classes: this.options.classes || {} },
              o
            )),
            this._on(o.element, { remove: '_untrackClassesElement' }),
            o.keys && e(o.keys.match(/\S+/g) || [], !0),
            o.extra && e(o.extra.match(/\S+/g) || []),
            s.join(' ')
          )
        },
        _untrackClassesElement: function (i) {
          var n = this
          u.each(n.classesElementLookup, function (e, t) {
            ;-1 !== u.inArray(i.target, t) &&
              (n.classesElementLookup[e] = u(t.not(i.target).get()))
          })
        },
        _removeClass: function (e, t, i) {
          return this._toggleClass(e, t, i, !1)
        },
        _addClass: function (e, t, i) {
          return this._toggleClass(e, t, i, !0)
        },
        _toggleClass: function (e, t, i, n) {
          n = 'boolean' == typeof n ? n : i
          var o = 'string' == typeof e || null === e,
            s = {
              extra: o ? t : i,
              keys: o ? e : t,
              element: o ? this.element : e,
              add: n,
            }
          return s.element.toggleClass(this._classes(s), n), this
        },
        _on: function (r, a, e) {
          var l,
            c = this
          'boolean' != typeof r && ((e = a), (a = r), (r = !1)),
            e
              ? ((a = l = u(a)), (this.bindings = this.bindings.add(a)))
              : ((e = a), (a = this.element), (l = this.widget())),
            u.each(e, function (e, t) {
              function i() {
                return r ||
                  (!0 !== c.options.disabled &&
                    !u(this).hasClass('ui-state-disabled'))
                  ? ('string' == typeof t ? c[t] : t).apply(c, arguments)
                  : void 0
              }
              'string' != typeof t &&
                (i.guid = t.guid = t.guid || i.guid || u.guid++)
              var n = e.match(/^([\w:-]*)\s*(.*)$/),
                o = n[1] + c.eventNamespace,
                s = n[2]
              s ? l.on(o, s, i) : a.on(o, i)
            })
        },
        _off: function (e, t) {
          ;(t =
            (t || '').split(' ').join(this.eventNamespace + ' ') +
            this.eventNamespace),
            e.off(t).off(t),
            (this.bindings = u(this.bindings.not(e).get())),
            (this.focusable = u(this.focusable.not(e).get())),
            (this.hoverable = u(this.hoverable.not(e).get()))
        },
        _delay: function (e, t) {
          var i = this
          return setTimeout(function () {
            return ('string' == typeof e ? i[e] : e).apply(i, arguments)
          }, t || 0)
        },
        _hoverable: function (e) {
          ;(this.hoverable = this.hoverable.add(e)),
            this._on(e, {
              mouseenter: function (e) {
                this._addClass(u(e.currentTarget), null, 'ui-state-hover')
              },
              mouseleave: function (e) {
                this._removeClass(u(e.currentTarget), null, 'ui-state-hover')
              },
            })
        },
        _focusable: function (e) {
          ;(this.focusable = this.focusable.add(e)),
            this._on(e, {
              focusin: function (e) {
                this._addClass(u(e.currentTarget), null, 'ui-state-focus')
              },
              focusout: function (e) {
                this._removeClass(u(e.currentTarget), null, 'ui-state-focus')
              },
            })
        },
        _trigger: function (e, t, i) {
          var n,
            o,
            s = this.options[e]
          if (
            ((i = i || {}),
            ((t = u.Event(t)).type = (
              e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
            ).toLowerCase()),
            (t.target = this.element[0]),
            (o = t.originalEvent))
          )
            for (n in o) n in t || (t[n] = o[n])
          return (
            this.element.trigger(t, i),
            !(
              (u.isFunction(s) &&
                !1 === s.apply(this.element[0], [t].concat(i))) ||
              t.isDefaultPrevented()
            )
          )
        },
      }),
      u.each({ show: 'fadeIn', hide: 'fadeOut' }, function (s, r) {
        u.Widget.prototype['_' + s] = function (t, e, i) {
          'string' == typeof e && (e = { effect: e })
          var n,
            o = e ? (!0 === e || 'number' == typeof e ? r : e.effect || r) : s
          'number' == typeof (e = e || {}) && (e = { duration: e }),
            (n = !u.isEmptyObject(e)),
            (e.complete = i),
            e.delay && t.delay(e.delay),
            n && u.effects && u.effects.effect[o]
              ? t[s](e)
              : o !== s && t[o]
              ? t[o](e.duration, e.easing, i)
              : t.queue(function (e) {
                  u(this)[s](), i && i.call(t[0]), e()
                })
        }
      }),
      u.widget,
      (u.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38,
      }),
      (u.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()))
    var s = !1
    u(document).on('mouseup', function () {
      s = !1
    }),
      u.widget('ui.mouse', {
        version: '1.12.1',
        options: {
          cancel: 'input, textarea, button, select, option',
          distance: 1,
          delay: 0,
        },
        _mouseInit: function () {
          var t = this
          this.element
            .on('mousedown.' + this.widgetName, function (e) {
              return t._mouseDown(e)
            })
            .on('click.' + this.widgetName, function (e) {
              return !0 ===
                u.data(e.target, t.widgetName + '.preventClickEvent')
                ? (u.removeData(e.target, t.widgetName + '.preventClickEvent'),
                  e.stopImmediatePropagation(),
                  !1)
                : void 0
            }),
            (this.started = !1)
        },
        _mouseDestroy: function () {
          this.element.off('.' + this.widgetName),
            this._mouseMoveDelegate &&
              this.document
                .off('mousemove.' + this.widgetName, this._mouseMoveDelegate)
                .off('mouseup.' + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (e) {
          if (!s) {
            ;(this._mouseMoved = !1),
              this._mouseStarted && this._mouseUp(e),
              (this._mouseDownEvent = e)
            var t = this,
              i = 1 === e.which,
              n =
                !(
                  'string' != typeof this.options.cancel || !e.target.nodeName
                ) && u(e.target).closest(this.options.cancel).length
            return (
              i &&
                !n &&
                this._mouseCapture(e) &&
                ((this.mouseDelayMet = !this.options.delay),
                this.mouseDelayMet ||
                  (this._mouseDelayTimer = setTimeout(function () {
                    t.mouseDelayMet = !0
                  }, this.options.delay)),
                this._mouseDistanceMet(e) &&
                this._mouseDelayMet(e) &&
                ((this._mouseStarted = !1 !== this._mouseStart(e)),
                !this._mouseStarted)
                  ? e.preventDefault()
                  : (!0 ===
                      u.data(
                        e.target,
                        this.widgetName + '.preventClickEvent'
                      ) &&
                      u.removeData(
                        e.target,
                        this.widgetName + '.preventClickEvent'
                      ),
                    (this._mouseMoveDelegate = function (e) {
                      return t._mouseMove(e)
                    }),
                    (this._mouseUpDelegate = function (e) {
                      return t._mouseUp(e)
                    }),
                    this.document
                      .on(
                        'mousemove.' + this.widgetName,
                        this._mouseMoveDelegate
                      )
                      .on('mouseup.' + this.widgetName, this._mouseUpDelegate),
                    e.preventDefault(),
                    (s = !0))),
              !0
            )
          }
        },
        _mouseMove: function (e) {
          if (this._mouseMoved) {
            if (
              u.ui.ie &&
              (!document.documentMode || document.documentMode < 9) &&
              !e.button
            )
              return this._mouseUp(e)
            if (!e.which)
              if (
                e.originalEvent.altKey ||
                e.originalEvent.ctrlKey ||
                e.originalEvent.metaKey ||
                e.originalEvent.shiftKey
              )
                this.ignoreMissingWhich = !0
              else if (!this.ignoreMissingWhich) return this._mouseUp(e)
          }
          return (
            (e.which || e.button) && (this._mouseMoved = !0),
            this._mouseStarted
              ? (this._mouseDrag(e), e.preventDefault())
              : (this._mouseDistanceMet(e) &&
                  this._mouseDelayMet(e) &&
                  ((this._mouseStarted =
                    !1 !== this._mouseStart(this._mouseDownEvent, e)),
                  this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
                !this._mouseStarted)
          )
        },
        _mouseUp: function (e) {
          this.document
            .off('mousemove.' + this.widgetName, this._mouseMoveDelegate)
            .off('mouseup.' + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted &&
              ((this._mouseStarted = !1),
              e.target === this._mouseDownEvent.target &&
                u.data(e.target, this.widgetName + '.preventClickEvent', !0),
              this._mouseStop(e)),
            this._mouseDelayTimer &&
              (clearTimeout(this._mouseDelayTimer),
              delete this._mouseDelayTimer),
            (this.ignoreMissingWhich = !1),
            (s = !1),
            e.preventDefault()
        },
        _mouseDistanceMet: function (e) {
          return (
            Math.max(
              Math.abs(this._mouseDownEvent.pageX - e.pageX),
              Math.abs(this._mouseDownEvent.pageY - e.pageY)
            ) >= this.options.distance
          )
        },
        _mouseDelayMet: function () {
          return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
          return !0
        },
      }),
      u.widget('ui.slider', u.ui.mouse, {
        version: '1.12.1',
        widgetEventPrefix: 'slide',
        options: {
          animate: !1,
          classes: {
            'ui-slider': 'ui-corner-all',
            'ui-slider-handle': 'ui-corner-all',
            'ui-slider-range': 'ui-corner-all ui-widget-header',
          },
          distance: 0,
          max: 100,
          min: 0,
          orientation: 'horizontal',
          range: !1,
          step: 1,
          value: 0,
          values: null,
          change: null,
          slide: null,
          start: null,
          stop: null,
        },
        numPages: 5,
        _create: function () {
          ;(this._keySliding = !1),
            (this._mouseSliding = !1),
            (this._animateOff = !0),
            (this._handleIndex = null),
            this._detectOrientation(),
            this._mouseInit(),
            this._calculateNewMax(),
            this._addClass(
              'ui-slider ui-slider-' + this.orientation,
              'ui-widget ui-widget-content'
            ),
            this._refresh(),
            (this._animateOff = !1)
        },
        _refresh: function () {
          this._createRange(),
            this._createHandles(),
            this._setupEvents(),
            this._refreshValue()
        },
        _createHandles: function () {
          var e,
            t,
            i = this.options,
            n = this.element.find('.ui-slider-handle'),
            o = []
          for (
            t = (i.values && i.values.length) || 1,
              n.length > t && (n.slice(t).remove(), (n = n.slice(0, t))),
              e = n.length;
            e < t;
            e++
          )
            o.push("<span tabindex='0'></span>")
          ;(this.handles = n.add(u(o.join('')).appendTo(this.element))),
            this._addClass(
              this.handles,
              'ui-slider-handle',
              'ui-state-default'
            ),
            (this.handle = this.handles.eq(0)),
            this.handles.each(function (e) {
              u(this).data('ui-slider-handle-index', e).attr('tabIndex', 0)
            })
        },
        _createRange: function () {
          var e = this.options
          e.range
            ? (!0 === e.range &&
                (e.values
                  ? e.values.length && 2 !== e.values.length
                    ? (e.values = [e.values[0], e.values[0]])
                    : u.isArray(e.values) && (e.values = e.values.slice(0))
                  : (e.values = [this._valueMin(), this._valueMin()])),
              this.range && this.range.length
                ? (this._removeClass(
                    this.range,
                    'ui-slider-range-min ui-slider-range-max'
                  ),
                  this.range.css({ left: '', bottom: '' }))
                : ((this.range = u('<div>').appendTo(this.element)),
                  this._addClass(this.range, 'ui-slider-range')),
              ('min' === e.range || 'max' === e.range) &&
                this._addClass(this.range, 'ui-slider-range-' + e.range))
            : (this.range && this.range.remove(), (this.range = null))
        },
        _setupEvents: function () {
          this._off(this.handles),
            this._on(this.handles, this._handleEvents),
            this._hoverable(this.handles),
            this._focusable(this.handles)
        },
        _destroy: function () {
          this.handles.remove(),
            this.range && this.range.remove(),
            this._mouseDestroy()
        },
        _mouseCapture: function (e) {
          var t,
            i,
            n,
            o,
            s,
            r,
            a,
            l = this,
            c = this.options
          return (
            !c.disabled &&
            ((this.elementSize = {
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
            }),
            (this.elementOffset = this.element.offset()),
            (t = { x: e.pageX, y: e.pageY }),
            (i = this._normValueFromMouse(t)),
            (n = this._valueMax() - this._valueMin() + 1),
            this.handles.each(function (e) {
              var t = Math.abs(i - l.values(e))
              ;(t < n ||
                (n === t &&
                  (e === l._lastChangedValue || l.values(e) === c.min))) &&
                ((n = t), (o = u(this)), (s = e))
            }),
            !1 !== this._start(e, s) &&
              ((this._mouseSliding = !0),
              (this._handleIndex = s),
              this._addClass(o, null, 'ui-state-active'),
              o.trigger('focus'),
              (r = o.offset()),
              (a = !u(e.target).parents().addBack().is('.ui-slider-handle')),
              (this._clickOffset = a
                ? { left: 0, top: 0 }
                : {
                    left: e.pageX - r.left - o.width() / 2,
                    top:
                      e.pageY -
                      r.top -
                      o.height() / 2 -
                      (parseInt(o.css('borderTopWidth'), 10) || 0) -
                      (parseInt(o.css('borderBottomWidth'), 10) || 0) +
                      (parseInt(o.css('marginTop'), 10) || 0),
                  }),
              this.handles.hasClass('ui-state-hover') || this._slide(e, s, i),
              (this._animateOff = !0)))
          )
        },
        _mouseStart: function () {
          return !0
        },
        _mouseDrag: function (e) {
          var t = { x: e.pageX, y: e.pageY },
            i = this._normValueFromMouse(t)
          return this._slide(e, this._handleIndex, i), !1
        },
        _mouseStop: function (e) {
          return (
            this._removeClass(this.handles, null, 'ui-state-active'),
            (this._mouseSliding = !1),
            this._stop(e, this._handleIndex),
            this._change(e, this._handleIndex),
            (this._handleIndex = null),
            (this._clickOffset = null),
            (this._animateOff = !1)
          )
        },
        _detectOrientation: function () {
          this.orientation =
            'vertical' === this.options.orientation ? 'vertical' : 'horizontal'
        },
        _normValueFromMouse: function (e) {
          var t, i, n, o
          return (
            1 <
              (i =
                ('horizontal' === this.orientation
                  ? ((t = this.elementSize.width),
                    e.x -
                      this.elementOffset.left -
                      (this._clickOffset ? this._clickOffset.left : 0))
                  : ((t = this.elementSize.height),
                    e.y -
                      this.elementOffset.top -
                      (this._clickOffset ? this._clickOffset.top : 0))) / t) &&
              (i = 1),
            i < 0 && (i = 0),
            'vertical' === this.orientation && (i = 1 - i),
            (n = this._valueMax() - this._valueMin()),
            (o = this._valueMin() + i * n),
            this._trimAlignValue(o)
          )
        },
        _uiHash: function (e, t, i) {
          var n = {
            handle: this.handles[e],
            handleIndex: e,
            value: void 0 !== t ? t : this.value(),
          }
          return (
            this._hasMultipleValues() &&
              ((n.value = void 0 !== t ? t : this.values(e)),
              (n.values = i || this.values())),
            n
          )
        },
        _hasMultipleValues: function () {
          return this.options.values && this.options.values.length
        },
        _start: function (e, t) {
          return this._trigger('start', e, this._uiHash(t))
        },
        _slide: function (e, t, i) {
          var n,
            o = this.value(),
            s = this.values()
          this._hasMultipleValues() &&
            ((n = this.values(t ? 0 : 1)),
            (o = this.values(t)),
            2 === this.options.values.length &&
              !0 === this.options.range &&
              (i = 0 === t ? Math.min(n, i) : Math.max(n, i)),
            (s[t] = i)),
            i !== o &&
              !1 !== this._trigger('slide', e, this._uiHash(t, i, s)) &&
              (this._hasMultipleValues() ? this.values(t, i) : this.value(i))
        },
        _stop: function (e, t) {
          this._trigger('stop', e, this._uiHash(t))
        },
        _change: function (e, t) {
          this._keySliding ||
            this._mouseSliding ||
            ((this._lastChangedValue = t),
            this._trigger('change', e, this._uiHash(t)))
        },
        value: function (e) {
          return arguments.length
            ? ((this.options.value = this._trimAlignValue(e)),
              this._refreshValue(),
              void this._change(null, 0))
            : this._value()
        },
        values: function (e, t) {
          var i, n, o
          if (1 < arguments.length)
            return (
              (this.options.values[e] = this._trimAlignValue(t)),
              this._refreshValue(),
              void this._change(null, e)
            )
          if (!arguments.length) return this._values()
          if (!u.isArray(e))
            return this._hasMultipleValues() ? this._values(e) : this.value()
          for (i = this.options.values, n = e, o = 0; i.length > o; o += 1)
            (i[o] = this._trimAlignValue(n[o])), this._change(null, o)
          this._refreshValue()
        },
        _setOption: function (e, t) {
          var i,
            n = 0
          switch (
            ('range' === e &&
              !0 === this.options.range &&
              ('min' === t
                ? ((this.options.value = this._values(0)),
                  (this.options.values = null))
                : 'max' === t &&
                  ((this.options.value = this._values(
                    this.options.values.length - 1
                  )),
                  (this.options.values = null))),
            u.isArray(this.options.values) && (n = this.options.values.length),
            this._super(e, t),
            e)
          ) {
            case 'orientation':
              this._detectOrientation(),
                this._removeClass(
                  'ui-slider-horizontal ui-slider-vertical'
                )._addClass('ui-slider-' + this.orientation),
                this._refreshValue(),
                this.options.range && this._refreshRange(t),
                this.handles.css('horizontal' === t ? 'bottom' : 'left', '')
              break
            case 'value':
              ;(this._animateOff = !0),
                this._refreshValue(),
                this._change(null, 0),
                (this._animateOff = !1)
              break
            case 'values':
              for (
                this._animateOff = !0, this._refreshValue(), i = n - 1;
                0 <= i;
                i--
              )
                this._change(null, i)
              this._animateOff = !1
              break
            case 'step':
            case 'min':
            case 'max':
              ;(this._animateOff = !0),
                this._calculateNewMax(),
                this._refreshValue(),
                (this._animateOff = !1)
              break
            case 'range':
              ;(this._animateOff = !0), this._refresh(), (this._animateOff = !1)
          }
        },
        _setOptionDisabled: function (e) {
          this._super(e), this._toggleClass(null, 'ui-state-disabled', !!e)
        },
        _value: function () {
          var e = this.options.value
          return this._trimAlignValue(e)
        },
        _values: function (e) {
          var t, i, n
          if (arguments.length)
            return (t = this.options.values[e]), this._trimAlignValue(t)
          if (this._hasMultipleValues()) {
            for (i = this.options.values.slice(), n = 0; i.length > n; n += 1)
              i[n] = this._trimAlignValue(i[n])
            return i
          }
          return []
        },
        _trimAlignValue: function (e) {
          if (this._valueMin() >= e) return this._valueMin()
          if (e >= this._valueMax()) return this._valueMax()
          var t = 0 < this.options.step ? this.options.step : 1,
            i = (e - this._valueMin()) % t,
            n = e - i
          return (
            2 * Math.abs(i) >= t && (n += 0 < i ? t : -t),
            parseFloat(n.toFixed(5))
          )
        },
        _calculateNewMax: function () {
          var e = this.options.max,
            t = this._valueMin(),
            i = this.options.step
          ;(e = Math.round((e - t) / i) * i + t) > this.options.max && (e -= i),
            (this.max = parseFloat(e.toFixed(this._precision())))
        },
        _precision: function () {
          var e = this._precisionOf(this.options.step)
          return (
            null !== this.options.min &&
              (e = Math.max(e, this._precisionOf(this.options.min))),
            e
          )
        },
        _precisionOf: function (e) {
          var t = '' + e,
            i = t.indexOf('.')
          return -1 === i ? 0 : t.length - i - 1
        },
        _valueMin: function () {
          return this.options.min
        },
        _valueMax: function () {
          return this.max
        },
        _refreshRange: function (e) {
          'vertical' === e && this.range.css({ width: '', left: '' }),
            'horizontal' === e && this.range.css({ height: '', bottom: '' })
        },
        _refreshValue: function () {
          var t,
            i,
            e,
            n,
            o,
            s = this.options.range,
            r = this.options,
            a = this,
            l = !this._animateOff && r.animate,
            c = {}
          this._hasMultipleValues()
            ? this.handles.each(function (e) {
                ;(i =
                  ((a.values(e) - a._valueMin()) /
                    (a._valueMax() - a._valueMin())) *
                  100),
                  (c['horizontal' === a.orientation ? 'left' : 'bottom'] =
                    i + '%'),
                  u(this).stop(1, 1)[l ? 'animate' : 'css'](c, r.animate),
                  !0 === a.options.range &&
                    ('horizontal' === a.orientation
                      ? (0 === e &&
                          a.range
                            .stop(1, 1)
                            [l ? 'animate' : 'css'](
                              { left: i + '%' },
                              r.animate
                            ),
                        1 === e &&
                          a.range[l ? 'animate' : 'css'](
                            { width: i - t + '%' },
                            { queue: !1, duration: r.animate }
                          ))
                      : (0 === e &&
                          a.range
                            .stop(1, 1)
                            [l ? 'animate' : 'css'](
                              { bottom: i + '%' },
                              r.animate
                            ),
                        1 === e &&
                          a.range[l ? 'animate' : 'css'](
                            { height: i - t + '%' },
                            { queue: !1, duration: r.animate }
                          ))),
                  (t = i)
              })
            : ((e = this.value()),
              (n = this._valueMin()),
              (o = this._valueMax()),
              (i = o !== n ? ((e - n) / (o - n)) * 100 : 0),
              (c['horizontal' === this.orientation ? 'left' : 'bottom'] =
                i + '%'),
              this.handle.stop(1, 1)[l ? 'animate' : 'css'](c, r.animate),
              'min' === s &&
                'horizontal' === this.orientation &&
                this.range
                  .stop(1, 1)
                  [l ? 'animate' : 'css']({ width: i + '%' }, r.animate),
              'max' === s &&
                'horizontal' === this.orientation &&
                this.range
                  .stop(1, 1)
                  [l ? 'animate' : 'css']({ width: 100 - i + '%' }, r.animate),
              'min' === s &&
                'vertical' === this.orientation &&
                this.range
                  .stop(1, 1)
                  [l ? 'animate' : 'css']({ height: i + '%' }, r.animate),
              'max' === s &&
                'vertical' === this.orientation &&
                this.range
                  .stop(1, 1)
                  [l ? 'animate' : 'css']({ height: 100 - i + '%' }, r.animate))
        },
        _handleEvents: {
          keydown: function (e) {
            var t,
              i,
              n,
              o = u(e.target).data('ui-slider-handle-index')
            switch (e.keyCode) {
              case u.ui.keyCode.HOME:
              case u.ui.keyCode.END:
              case u.ui.keyCode.PAGE_UP:
              case u.ui.keyCode.PAGE_DOWN:
              case u.ui.keyCode.UP:
              case u.ui.keyCode.RIGHT:
              case u.ui.keyCode.DOWN:
              case u.ui.keyCode.LEFT:
                if (
                  (e.preventDefault(),
                  !this._keySliding &&
                    ((this._keySliding = !0),
                    this._addClass(u(e.target), null, 'ui-state-active'),
                    !1 === this._start(e, o)))
                )
                  return
            }
            switch (
              ((n = this.options.step),
              (t = i =
                this._hasMultipleValues() ? this.values(o) : this.value()),
              e.keyCode)
            ) {
              case u.ui.keyCode.HOME:
                i = this._valueMin()
                break
              case u.ui.keyCode.END:
                i = this._valueMax()
                break
              case u.ui.keyCode.PAGE_UP:
                i = this._trimAlignValue(
                  t + (this._valueMax() - this._valueMin()) / this.numPages
                )
                break
              case u.ui.keyCode.PAGE_DOWN:
                i = this._trimAlignValue(
                  t - (this._valueMax() - this._valueMin()) / this.numPages
                )
                break
              case u.ui.keyCode.UP:
              case u.ui.keyCode.RIGHT:
                if (t === this._valueMax()) return
                i = this._trimAlignValue(t + n)
                break
              case u.ui.keyCode.DOWN:
              case u.ui.keyCode.LEFT:
                if (t === this._valueMin()) return
                i = this._trimAlignValue(t - n)
            }
            this._slide(e, o, i)
          },
          keyup: function (e) {
            var t = u(e.target).data('ui-slider-handle-index')
            this._keySliding &&
              ((this._keySliding = !1),
              this._stop(e, t),
              this._change(e, t),
              this._removeClass(u(e.target), null, 'ui-state-active'))
          },
        },
      })
  }),
  (function (e) {
    'use strict'
    'function' == typeof define && define.amd
      ? define(['jquery'], e)
      : 'undefined' != typeof exports
      ? (module.exports = e(require('jquery')))
      : e(jQuery)
  })(function (c) {
    'use strict'
    var o,
      r = window.Slick || {}
    ;(((o = 0),
    (r = function (e, t) {
      var i,
        n = this
      ;(n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: c(e),
        appendDots: c(e),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function (e, t) {
          return c('<button type="button" />').text(t + 1)
        },
        dots: !1,
        dotsClass: 'slick-dots',
        draggable: !0,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        c.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = 'hidden'),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = c(e)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = 'visibilitychange'),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (i = c(e).data('slick') || {}),
        (n.options = c.extend({}, n.defaults, t, i)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = 'mozHidden'),
            (n.visibilityChange = 'mozvisibilitychange'))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = 'webkitHidden'),
            (n.visibilityChange = 'webkitvisibilitychange')),
        (n.autoPlay = c.proxy(n.autoPlay, n)),
        (n.autoPlayClear = c.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = c.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = c.proxy(n.changeSlide, n)),
        (n.clickHandler = c.proxy(n.clickHandler, n)),
        (n.selectHandler = c.proxy(n.selectHandler, n)),
        (n.setPosition = c.proxy(n.setPosition, n)),
        (n.swipeHandler = c.proxy(n.swipeHandler, n)),
        (n.dragHandler = c.proxy(n.dragHandler, n)),
        (n.keyHandler = c.proxy(n.keyHandler, n)),
        (n.instanceUid = o++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0)
    })).prototype.activateADA = function () {
      this.$slideTrack
        .find('.slick-active')
        .attr({ 'aria-hidden': 'false' })
        .find('a, input, button, select')
        .attr({ tabindex: '0' })
    }),
      (r.prototype.addSlide = r.prototype.slickAdd =
        function (e, t, i) {
          var n = this
          if ('boolean' == typeof t) (i = t), (t = null)
          else if (t < 0 || t >= n.slideCount) return !1
          n.unload(),
            'number' == typeof t
              ? 0 === t && 0 === n.$slides.length
                ? c(e).appendTo(n.$slideTrack)
                : i
                ? c(e).insertBefore(n.$slides.eq(t))
                : c(e).insertAfter(n.$slides.eq(t))
              : !0 === i
              ? c(e).prependTo(n.$slideTrack)
              : c(e).appendTo(n.$slideTrack),
            (n.$slides = n.$slideTrack.children(this.options.slide)),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.append(n.$slides),
            n.$slides.each(function (e, t) {
              c(t).attr('data-slick-index', e)
            }),
            (n.$slidesCache = n.$slides),
            n.reinit()
        }),
      (r.prototype.animateHeight = function () {
        var e = this
        if (
          1 === e.options.slidesToShow &&
          !0 === e.options.adaptiveHeight &&
          !1 === e.options.vertical
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0)
          e.$list.animate({ height: t }, e.options.speed)
        }
      }),
      (r.prototype.animateSlide = function (e, t) {
        var i = {},
          n = this
        n.animateHeight(),
          !0 === n.options.rtl && !1 === n.options.vertical && (e = -e),
          !1 === n.transformsEnabled
            ? !1 === n.options.vertical
              ? n.$slideTrack.animate(
                  { left: e },
                  n.options.speed,
                  n.options.easing,
                  t
                )
              : n.$slideTrack.animate(
                  { top: e },
                  n.options.speed,
                  n.options.easing,
                  t
                )
            : !1 === n.cssTransitions
            ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft),
              c({ animStart: n.currentLeft }).animate(
                { animStart: e },
                {
                  duration: n.options.speed,
                  easing: n.options.easing,
                  step: function (e) {
                    ;(e = Math.ceil(e)),
                      !1 === n.options.vertical
                        ? (i[n.animType] = 'translate(' + e + 'px, 0px)')
                        : (i[n.animType] = 'translate(0px,' + e + 'px)'),
                      n.$slideTrack.css(i)
                  },
                  complete: function () {
                    t && t.call()
                  },
                }
              ))
            : (n.applyTransition(),
              (e = Math.ceil(e)),
              !1 === n.options.vertical
                ? (i[n.animType] = 'translate3d(' + e + 'px, 0px, 0px)')
                : (i[n.animType] = 'translate3d(0px,' + e + 'px, 0px)'),
              n.$slideTrack.css(i),
              t &&
                setTimeout(function () {
                  n.disableTransition(), t.call()
                }, n.options.speed))
      }),
      (r.prototype.getNavTarget = function () {
        var e = this.options.asNavFor
        return e && null !== e && (e = c(e).not(this.$slider)), e
      }),
      (r.prototype.asNavFor = function (t) {
        var e = this.getNavTarget()
        null !== e &&
          'object' == typeof e &&
          e.each(function () {
            var e = c(this).slick('getSlick')
            e.unslicked || e.slideHandler(t, !0)
          })
      }),
      (r.prototype.applyTransition = function (e) {
        var t = this,
          i = {}
        !1 === t.options.fade
          ? (i[t.transitionType] =
              t.transformType +
              ' ' +
              t.options.speed +
              'ms ' +
              t.options.cssEase)
          : (i[t.transitionType] =
              'opacity ' + t.options.speed + 'ms ' + t.options.cssEase),
          !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
      }),
      (r.prototype.autoPlay = function () {
        var e = this
        e.autoPlayClear(),
          e.slideCount > e.options.slidesToShow &&
            (e.autoPlayTimer = setInterval(
              e.autoPlayIterator,
              e.options.autoplaySpeed
            ))
      }),
      (r.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
      }),
      (r.prototype.autoPlayIterator = function () {
        var e = this,
          t = e.currentSlide + e.options.slidesToScroll
        e.paused ||
          e.interrupted ||
          e.focussed ||
          (!1 === e.options.infinite &&
            (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
              ? (e.direction = 0)
              : 0 === e.direction &&
                ((t = e.currentSlide - e.options.slidesToScroll),
                e.currentSlide - 1 == 0 && (e.direction = 1))),
          e.slideHandler(t))
      }),
      (r.prototype.buildArrows = function () {
        var e = this
        !0 === e.options.arrows &&
          ((e.$prevArrow = c(e.options.prevArrow).addClass('slick-arrow')),
          (e.$nextArrow = c(e.options.nextArrow).addClass('slick-arrow')),
          e.slideCount > e.options.slidesToShow
            ? (e.$prevArrow
                .removeClass('slick-hidden')
                .removeAttr('aria-hidden tabindex'),
              e.$nextArrow
                .removeClass('slick-hidden')
                .removeAttr('aria-hidden tabindex'),
              e.htmlExpr.test(e.options.prevArrow) &&
                e.$prevArrow.prependTo(e.options.appendArrows),
              e.htmlExpr.test(e.options.nextArrow) &&
                e.$nextArrow.appendTo(e.options.appendArrows),
              !0 !== e.options.infinite &&
                e.$prevArrow
                  .addClass('slick-disabled')
                  .attr('aria-disabled', 'true'))
            : e.$prevArrow
                .add(e.$nextArrow)
                .addClass('slick-hidden')
                .attr({ 'aria-disabled': 'true', tabindex: '-1' }))
      }),
      (r.prototype.buildDots = function () {
        var e,
          t,
          i = this
        if (!0 === i.options.dots) {
          for (
            i.$slider.addClass('slick-dotted'),
              t = c('<ul />').addClass(i.options.dotsClass),
              e = 0;
            e <= i.getDotCount();
            e += 1
          )
            t.append(
              c('<li />').append(i.options.customPaging.call(this, i, e))
            )
          ;(i.$dots = t.appendTo(i.options.appendDots)),
            i.$dots.find('li').first().addClass('slick-active')
        }
      }),
      (r.prototype.buildOut = function () {
        var e = this
        ;(e.$slides = e.$slider
          .children(e.options.slide + ':not(.slick-cloned)')
          .addClass('slick-slide')),
          (e.slideCount = e.$slides.length),
          e.$slides.each(function (e, t) {
            c(t)
              .attr('data-slick-index', e)
              .data('originalStyling', c(t).attr('style') || '')
          }),
          e.$slider.addClass('slick-slider'),
          (e.$slideTrack =
            0 === e.slideCount
              ? c('<div class="slick-track"/>').appendTo(e.$slider)
              : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          e.$slideTrack.css('opacity', 0),
          (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
            (e.options.slidesToScroll = 1),
          c('img[data-lazy]', e.$slider).not('[src]').addClass('slick-loading'),
          e.setupInfinite(),
          e.buildArrows(),
          e.buildDots(),
          e.updateDots(),
          e.setSlideClasses(
            'number' == typeof e.currentSlide ? e.currentSlide : 0
          ),
          !0 === e.options.draggable && e.$list.addClass('draggable')
      }),
      (r.prototype.buildRows = function () {
        var e,
          t,
          i,
          n,
          o,
          s,
          r,
          a = this
        if (
          ((n = document.createDocumentFragment()),
          (s = a.$slider.children()),
          1 < a.options.rows)
        ) {
          for (
            r = a.options.slidesPerRow * a.options.rows,
              o = Math.ceil(s.length / r),
              e = 0;
            e < o;
            e++
          ) {
            var l = document.createElement('div')
            for (t = 0; t < a.options.rows; t++) {
              var c = document.createElement('div')
              for (i = 0; i < a.options.slidesPerRow; i++) {
                var u = e * r + (t * a.options.slidesPerRow + i)
                s.get(u) && c.appendChild(s.get(u))
              }
              l.appendChild(c)
            }
            n.appendChild(l)
          }
          a.$slider.empty().append(n),
            a.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / a.options.slidesPerRow + '%',
                display: 'inline-block',
              })
        }
      }),
      (r.prototype.checkResponsive = function (e, t) {
        var i,
          n,
          o,
          s = this,
          r = !1,
          a = s.$slider.width(),
          l = window.innerWidth || c(window).width()
        if (
          ('window' === s.respondTo
            ? (o = l)
            : 'slider' === s.respondTo
            ? (o = a)
            : 'min' === s.respondTo && (o = Math.min(l, a)),
          s.options.responsive &&
            s.options.responsive.length &&
            null !== s.options.responsive)
        ) {
          for (i in ((n = null), s.breakpoints))
            s.breakpoints.hasOwnProperty(i) &&
              (!1 === s.originalSettings.mobileFirst
                ? o < s.breakpoints[i] && (n = s.breakpoints[i])
                : o > s.breakpoints[i] && (n = s.breakpoints[i]))
          null !== n
            ? null !== s.activeBreakpoint
              ? (n !== s.activeBreakpoint || t) &&
                ((s.activeBreakpoint = n),
                'unslick' === s.breakpointSettings[n]
                  ? s.unslick(n)
                  : ((s.options = c.extend(
                      {},
                      s.originalSettings,
                      s.breakpointSettings[n]
                    )),
                    !0 === e && (s.currentSlide = s.options.initialSlide),
                    s.refresh(e)),
                (r = n))
              : ((s.activeBreakpoint = n),
                'unslick' === s.breakpointSettings[n]
                  ? s.unslick(n)
                  : ((s.options = c.extend(
                      {},
                      s.originalSettings,
                      s.breakpointSettings[n]
                    )),
                    !0 === e && (s.currentSlide = s.options.initialSlide),
                    s.refresh(e)),
                (r = n))
            : null !== s.activeBreakpoint &&
              ((s.activeBreakpoint = null),
              (s.options = s.originalSettings),
              !0 === e && (s.currentSlide = s.options.initialSlide),
              s.refresh(e),
              (r = n)),
            e || !1 === r || s.$slider.trigger('breakpoint', [s, r])
        }
      }),
      (r.prototype.changeSlide = function (e, t) {
        var i,
          n,
          o = this,
          s = c(e.currentTarget)
        switch (
          (s.is('a') && e.preventDefault(),
          s.is('li') || (s = s.closest('li')),
          (i =
            o.slideCount % o.options.slidesToScroll != 0
              ? 0
              : (o.slideCount - o.currentSlide) % o.options.slidesToScroll),
          e.data.message)
        ) {
          case 'previous':
            ;(n =
              0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i),
              o.slideCount > o.options.slidesToShow &&
                o.slideHandler(o.currentSlide - n, !1, t)
            break
          case 'next':
            ;(n = 0 === i ? o.options.slidesToScroll : i),
              o.slideCount > o.options.slidesToShow &&
                o.slideHandler(o.currentSlide + n, !1, t)
            break
          case 'index':
            var r =
              0 === e.data.index
                ? 0
                : e.data.index || s.index() * o.options.slidesToScroll
            o.slideHandler(o.checkNavigable(r), !1, t),
              s.children().trigger('focus')
            break
          default:
            return
        }
      }),
      (r.prototype.checkNavigable = function (e) {
        var t, i
        if (((i = 0), e > (t = this.getNavigableIndexes())[t.length - 1]))
          e = t[t.length - 1]
        else
          for (var n in t) {
            if (e < t[n]) {
              e = i
              break
            }
            i = t[n]
          }
        return e
      }),
      (r.prototype.cleanUpEvents = function () {
        var e = this
        e.options.dots &&
          null !== e.$dots &&
          (c('li', e.$dots)
            .off('click.slick', e.changeSlide)
            .off('mouseenter.slick', c.proxy(e.interrupt, e, !0))
            .off('mouseleave.slick', c.proxy(e.interrupt, e, !1)),
          !0 === e.options.accessibility &&
            e.$dots.off('keydown.slick', e.keyHandler)),
          e.$slider.off('focus.slick blur.slick'),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            (e.$prevArrow && e.$prevArrow.off('click.slick', e.changeSlide),
            e.$nextArrow && e.$nextArrow.off('click.slick', e.changeSlide),
            !0 === e.options.accessibility &&
              (e.$prevArrow.off('keydown.slick', e.keyHandler),
              e.$nextArrow.off('keydown.slick', e.keyHandler))),
          e.$list.off('touchstart.slick mousedown.slick', e.swipeHandler),
          e.$list.off('touchmove.slick mousemove.slick', e.swipeHandler),
          e.$list.off('touchend.slick mouseup.slick', e.swipeHandler),
          e.$list.off('touchcancel.slick mouseleave.slick', e.swipeHandler),
          e.$list.off('click.slick', e.clickHandler),
          c(document).off(e.visibilityChange, e.visibility),
          e.cleanUpSlideEvents(),
          !0 === e.options.accessibility &&
            e.$list.off('keydown.slick', e.keyHandler),
          !0 === e.options.focusOnSelect &&
            c(e.$slideTrack).children().off('click.slick', e.selectHandler),
          c(window).off(
            'orientationchange.slick.slick-' + e.instanceUid,
            e.orientationChange
          ),
          c(window).off('resize.slick.slick-' + e.instanceUid, e.resize),
          c('[draggable!=true]', e.$slideTrack).off(
            'dragstart',
            e.preventDefault
          ),
          c(window).off('load.slick.slick-' + e.instanceUid, e.setPosition)
      }),
      (r.prototype.cleanUpSlideEvents = function () {
        var e = this
        e.$list.off('mouseenter.slick', c.proxy(e.interrupt, e, !0)),
          e.$list.off('mouseleave.slick', c.proxy(e.interrupt, e, !1))
      }),
      (r.prototype.cleanUpRows = function () {
        var e
        1 < this.options.rows &&
          ((e = this.$slides.children().children()).removeAttr('style'),
          this.$slider.empty().append(e))
      }),
      (r.prototype.clickHandler = function (e) {
        !1 === this.shouldClick &&
          (e.stopImmediatePropagation(),
          e.stopPropagation(),
          e.preventDefault())
      }),
      (r.prototype.destroy = function (e) {
        var t = this
        t.autoPlayClear(),
          (t.touchObject = {}),
          t.cleanUpEvents(),
          c('.slick-cloned', t.$slider).detach(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow &&
            t.$prevArrow.length &&
            (t.$prevArrow
              .removeClass('slick-disabled slick-arrow slick-hidden')
              .removeAttr('aria-hidden aria-disabled tabindex')
              .css('display', ''),
            t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
          t.$nextArrow &&
            t.$nextArrow.length &&
            (t.$nextArrow
              .removeClass('slick-disabled slick-arrow slick-hidden')
              .removeAttr('aria-hidden aria-disabled tabindex')
              .css('display', ''),
            t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
          t.$slides &&
            (t.$slides
              .removeClass(
                'slick-slide slick-active slick-center slick-visible slick-current'
              )
              .removeAttr('aria-hidden')
              .removeAttr('data-slick-index')
              .each(function () {
                c(this).attr('style', c(this).data('originalStyling'))
              }),
            t.$slideTrack.children(this.options.slide).detach(),
            t.$slideTrack.detach(),
            t.$list.detach(),
            t.$slider.append(t.$slides)),
          t.cleanUpRows(),
          t.$slider.removeClass('slick-slider'),
          t.$slider.removeClass('slick-initialized'),
          t.$slider.removeClass('slick-dotted'),
          (t.unslicked = !0),
          e || t.$slider.trigger('destroy', [t])
      }),
      (r.prototype.disableTransition = function (e) {
        var t = {}
        ;(t[this.transitionType] = ''),
          !1 === this.options.fade
            ? this.$slideTrack.css(t)
            : this.$slides.eq(e).css(t)
      }),
      (r.prototype.fadeSlide = function (e, t) {
        var i = this
        !1 === i.cssTransitions
          ? (i.$slides.eq(e).css({ zIndex: i.options.zIndex }),
            i.$slides
              .eq(e)
              .animate({ opacity: 1 }, i.options.speed, i.options.easing, t))
          : (i.applyTransition(e),
            i.$slides.eq(e).css({ opacity: 1, zIndex: i.options.zIndex }),
            t &&
              setTimeout(function () {
                i.disableTransition(e), t.call()
              }, i.options.speed))
      }),
      (r.prototype.fadeSlideOut = function (e) {
        var t = this
        !1 === t.cssTransitions
          ? t.$slides
              .eq(e)
              .animate(
                { opacity: 0, zIndex: t.options.zIndex - 2 },
                t.options.speed,
                t.options.easing
              )
          : (t.applyTransition(e),
            t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }))
      }),
      (r.prototype.filterSlides = r.prototype.slickFilter =
        function (e) {
          var t = this
          null !== e &&
            ((t.$slidesCache = t.$slides),
            t.unload(),
            t.$slideTrack.children(this.options.slide).detach(),
            t.$slidesCache.filter(e).appendTo(t.$slideTrack),
            t.reinit())
        }),
      (r.prototype.focusHandler = function () {
        var i = this
        i.$slider
          .off('focus.slick blur.slick')
          .on('focus.slick blur.slick', '*', function (e) {
            e.stopImmediatePropagation()
            var t = c(this)
            setTimeout(function () {
              i.options.pauseOnFocus &&
                ((i.focussed = t.is(':focus')), i.autoPlay())
            }, 0)
          })
      }),
      (r.prototype.getCurrent = r.prototype.slickCurrentSlide =
        function () {
          return this.currentSlide
        }),
      (r.prototype.getDotCount = function () {
        var e = this,
          t = 0,
          i = 0,
          n = 0
        if (!0 === e.options.infinite)
          if (e.slideCount <= e.options.slidesToShow) ++n
          else
            for (; t < e.slideCount; )
              ++n,
                (t = i + e.options.slidesToScroll),
                (i +=
                  e.options.slidesToScroll <= e.options.slidesToShow
                    ? e.options.slidesToScroll
                    : e.options.slidesToShow)
        else if (!0 === e.options.centerMode) n = e.slideCount
        else if (e.options.asNavFor)
          for (; t < e.slideCount; )
            ++n,
              (t = i + e.options.slidesToScroll),
              (i +=
                e.options.slidesToScroll <= e.options.slidesToShow
                  ? e.options.slidesToScroll
                  : e.options.slidesToShow)
        else
          n =
            1 +
            Math.ceil(
              (e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll
            )
        return n - 1
      }),
      (r.prototype.getLeft = function (e) {
        var t,
          i,
          n,
          o = this,
          s = 0
        return (
          (o.slideOffset = 0),
          (i = o.$slides.first().outerHeight(!0)),
          !0 === o.options.infinite
            ? (o.slideCount > o.options.slidesToShow &&
                ((o.slideOffset = o.slideWidth * o.options.slidesToShow * -1),
                (s = i * o.options.slidesToShow * -1)),
              o.slideCount % o.options.slidesToScroll != 0 &&
                e + o.options.slidesToScroll > o.slideCount &&
                o.slideCount > o.options.slidesToShow &&
                (s =
                  e > o.slideCount
                    ? ((o.slideOffset =
                        (o.options.slidesToShow - (e - o.slideCount)) *
                        o.slideWidth *
                        -1),
                      (o.options.slidesToShow - (e - o.slideCount)) * i * -1)
                    : ((o.slideOffset =
                        (o.slideCount % o.options.slidesToScroll) *
                        o.slideWidth *
                        -1),
                      (o.slideCount % o.options.slidesToScroll) * i * -1)))
            : e + o.options.slidesToShow > o.slideCount &&
              ((o.slideOffset =
                (e + o.options.slidesToShow - o.slideCount) * o.slideWidth),
              (s = (e + o.options.slidesToShow - o.slideCount) * i)),
          o.slideCount <= o.options.slidesToShow && (s = o.slideOffset = 0),
          !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow
            ? (o.slideOffset =
                (o.slideWidth * Math.floor(o.options.slidesToShow)) / 2 -
                (o.slideWidth * o.slideCount) / 2)
            : !0 === o.options.centerMode && !0 === o.options.infinite
            ? (o.slideOffset +=
                o.slideWidth * Math.floor(o.options.slidesToShow / 2) -
                o.slideWidth)
            : !0 === o.options.centerMode &&
              ((o.slideOffset = 0),
              (o.slideOffset +=
                o.slideWidth * Math.floor(o.options.slidesToShow / 2))),
          (t =
            !1 === o.options.vertical
              ? e * o.slideWidth * -1 + o.slideOffset
              : e * i * -1 + s),
          !0 === o.options.variableWidth &&
            ((n =
              o.slideCount <= o.options.slidesToShow ||
              !1 === o.options.infinite
                ? o.$slideTrack.children('.slick-slide').eq(e)
                : o.$slideTrack
                    .children('.slick-slide')
                    .eq(e + o.options.slidesToShow)),
            (t =
              !0 === o.options.rtl
                ? n[0]
                  ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width())
                  : 0
                : n[0]
                ? -1 * n[0].offsetLeft
                : 0),
            !0 === o.options.centerMode &&
              ((n =
                o.slideCount <= o.options.slidesToShow ||
                !1 === o.options.infinite
                  ? o.$slideTrack.children('.slick-slide').eq(e)
                  : o.$slideTrack
                      .children('.slick-slide')
                      .eq(e + o.options.slidesToShow + 1)),
              (t =
                !0 === o.options.rtl
                  ? n[0]
                    ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width())
                    : 0
                  : n[0]
                  ? -1 * n[0].offsetLeft
                  : 0),
              (t += (o.$list.width() - n.outerWidth()) / 2))),
          t
        )
      }),
      (r.prototype.getOption = r.prototype.slickGetOption =
        function (e) {
          return this.options[e]
        }),
      (r.prototype.getNavigableIndexes = function () {
        var e,
          t = this,
          i = 0,
          n = 0,
          o = []
        for (
          e =
            !1 === t.options.infinite
              ? t.slideCount
              : ((i = -1 * t.options.slidesToScroll),
                (n = -1 * t.options.slidesToScroll),
                2 * t.slideCount);
          i < e;

        )
          o.push(i),
            (i = n + t.options.slidesToScroll),
            (n +=
              t.options.slidesToScroll <= t.options.slidesToShow
                ? t.options.slidesToScroll
                : t.options.slidesToShow)
        return o
      }),
      (r.prototype.getSlick = function () {
        return this
      }),
      (r.prototype.getSlideCount = function () {
        var i,
          n,
          o = this
        return (
          (n =
            !0 === o.options.centerMode
              ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
              : 0),
          !0 === o.options.swipeToSlide
            ? (o.$slideTrack.find('.slick-slide').each(function (e, t) {
                if (t.offsetLeft - n + c(t).outerWidth() / 2 > -1 * o.swipeLeft)
                  return (i = t), !1
              }),
              Math.abs(c(i).attr('data-slick-index') - o.currentSlide) || 1)
            : o.options.slidesToScroll
        )
      }),
      (r.prototype.goTo = r.prototype.slickGoTo =
        function (e, t) {
          this.changeSlide(
            { data: { message: 'index', index: parseInt(e) } },
            t
          )
        }),
      (r.prototype.init = function (e) {
        var t = this
        c(t.$slider).hasClass('slick-initialized') ||
          (c(t.$slider).addClass('slick-initialized'),
          t.buildRows(),
          t.buildOut(),
          t.setProps(),
          t.startLoad(),
          t.loadSlider(),
          t.initializeEvents(),
          t.updateArrows(),
          t.updateDots(),
          t.checkResponsive(!0),
          t.focusHandler()),
          e && t.$slider.trigger('init', [t]),
          !0 === t.options.accessibility && t.initADA(),
          t.options.autoplay && ((t.paused = !1), t.autoPlay())
      }),
      (r.prototype.initADA = function () {
        var i = this,
          n = Math.ceil(i.slideCount / i.options.slidesToShow),
          o = i.getNavigableIndexes().filter(function (e) {
            return 0 <= e && e < i.slideCount
          })
        i.$slides
          .add(i.$slideTrack.find('.slick-cloned'))
          .attr({ 'aria-hidden': 'true', tabindex: '-1' })
          .find('a, input, button, select')
          .attr({ tabindex: '-1' }),
          null !== i.$dots &&
            (i.$slides
              .not(i.$slideTrack.find('.slick-cloned'))
              .each(function (e) {
                var t = o.indexOf(e)
                c(this).attr({
                  role: 'tabpanel',
                  id: 'slick-slide' + i.instanceUid + e,
                  tabindex: -1,
                }),
                  -1 !== t &&
                    c(this).attr({
                      'aria-describedby':
                        'slick-slide-control' + i.instanceUid + t,
                    })
              }),
            i.$dots
              .attr('role', 'tablist')
              .find('li')
              .each(function (e) {
                var t = o[e]
                c(this).attr({ role: 'presentation' }),
                  c(this)
                    .find('button')
                    .first()
                    .attr({
                      role: 'tab',
                      id: 'slick-slide-control' + i.instanceUid + e,
                      'aria-controls': 'slick-slide' + i.instanceUid + t,
                      'aria-label': e + 1 + ' of ' + n,
                      'aria-selected': null,
                      tabindex: '-1',
                    })
              })
              .eq(i.currentSlide)
              .find('button')
              .attr({ 'aria-selected': 'true', tabindex: '0' })
              .end())
        for (var e = i.currentSlide, t = e + i.options.slidesToShow; e < t; e++)
          i.$slides.eq(e).attr('tabindex', 0)
        i.activateADA()
      }),
      (r.prototype.initArrowEvents = function () {
        var e = this
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow
            .off('click.slick')
            .on('click.slick', { message: 'previous' }, e.changeSlide),
          e.$nextArrow
            .off('click.slick')
            .on('click.slick', { message: 'next' }, e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow.on('keydown.slick', e.keyHandler),
            e.$nextArrow.on('keydown.slick', e.keyHandler)))
      }),
      (r.prototype.initDotEvents = function () {
        var e = this
        !0 === e.options.dots &&
          (c('li', e.$dots).on(
            'click.slick',
            { message: 'index' },
            e.changeSlide
          ),
          !0 === e.options.accessibility &&
            e.$dots.on('keydown.slick', e.keyHandler)),
          !0 === e.options.dots &&
            !0 === e.options.pauseOnDotsHover &&
            c('li', e.$dots)
              .on('mouseenter.slick', c.proxy(e.interrupt, e, !0))
              .on('mouseleave.slick', c.proxy(e.interrupt, e, !1))
      }),
      (r.prototype.initSlideEvents = function () {
        var e = this
        e.options.pauseOnHover &&
          (e.$list.on('mouseenter.slick', c.proxy(e.interrupt, e, !0)),
          e.$list.on('mouseleave.slick', c.proxy(e.interrupt, e, !1)))
      }),
      (r.prototype.initializeEvents = function () {
        var e = this
        e.initArrowEvents(),
          e.initDotEvents(),
          e.initSlideEvents(),
          e.$list.on(
            'touchstart.slick mousedown.slick',
            { action: 'start' },
            e.swipeHandler
          ),
          e.$list.on(
            'touchmove.slick mousemove.slick',
            { action: 'move' },
            e.swipeHandler
          ),
          e.$list.on(
            'touchend.slick mouseup.slick',
            { action: 'end' },
            e.swipeHandler
          ),
          e.$list.on(
            'touchcancel.slick mouseleave.slick',
            { action: 'end' },
            e.swipeHandler
          ),
          e.$list.on('click.slick', e.clickHandler),
          c(document).on(e.visibilityChange, c.proxy(e.visibility, e)),
          !0 === e.options.accessibility &&
            e.$list.on('keydown.slick', e.keyHandler),
          !0 === e.options.focusOnSelect &&
            c(e.$slideTrack).children().on('click.slick', e.selectHandler),
          c(window).on(
            'orientationchange.slick.slick-' + e.instanceUid,
            c.proxy(e.orientationChange, e)
          ),
          c(window).on(
            'resize.slick.slick-' + e.instanceUid,
            c.proxy(e.resize, e)
          ),
          c('[draggable!=true]', e.$slideTrack).on(
            'dragstart',
            e.preventDefault
          ),
          c(window).on('load.slick.slick-' + e.instanceUid, e.setPosition),
          c(e.setPosition)
      }),
      (r.prototype.initUI = function () {
        var e = this
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.show(), e.$nextArrow.show()),
          !0 === e.options.dots &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.show()
      }),
      (r.prototype.keyHandler = function (e) {
        var t = this
        e.target.tagName.match('TEXTAREA|INPUT|SELECT') ||
          (37 === e.keyCode && !0 === t.options.accessibility
            ? t.changeSlide({
                data: { message: !0 === t.options.rtl ? 'next' : 'previous' },
              })
            : 39 === e.keyCode &&
              !0 === t.options.accessibility &&
              t.changeSlide({
                data: { message: !0 === t.options.rtl ? 'previous' : 'next' },
              }))
      }),
      (r.prototype.lazyLoad = function () {
        function e(e) {
          c('img[data-lazy]', e).each(function () {
            var e = c(this),
              t = c(this).attr('data-lazy'),
              i = c(this).attr('data-srcset'),
              n = c(this).attr('data-sizes') || s.$slider.attr('data-sizes'),
              o = document.createElement('img')
            ;(o.onload = function () {
              e.animate({ opacity: 0 }, 100, function () {
                i && (e.attr('srcset', i), n && e.attr('sizes', n)),
                  e.attr('src', t).animate({ opacity: 1 }, 200, function () {
                    e.removeAttr(
                      'data-lazy data-srcset data-sizes'
                    ).removeClass('slick-loading')
                  }),
                  s.$slider.trigger('lazyLoaded', [s, e, t])
              })
            }),
              (o.onerror = function () {
                e
                  .removeAttr('data-lazy')
                  .removeClass('slick-loading')
                  .addClass('slick-lazyload-error'),
                  s.$slider.trigger('lazyLoadError', [s, e, t])
              }),
              (o.src = t)
          })
        }
        var t,
          i,
          n,
          s = this
        if (
          (!0 === s.options.centerMode
            ? (n =
                !0 === s.options.infinite
                  ? (i = s.currentSlide + (s.options.slidesToShow / 2 + 1)) +
                    s.options.slidesToShow +
                    2
                  : ((i = Math.max(
                      0,
                      s.currentSlide - (s.options.slidesToShow / 2 + 1)
                    )),
                    s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide))
            : ((i = s.options.infinite
                ? s.options.slidesToShow + s.currentSlide
                : s.currentSlide),
              (n = Math.ceil(i + s.options.slidesToShow)),
              !0 === s.options.fade &&
                (0 < i && i--, n <= s.slideCount && n++)),
          (t = s.$slider.find('.slick-slide').slice(i, n)),
          'anticipated' === s.options.lazyLoad)
        )
          for (
            var o = i - 1, r = n, a = s.$slider.find('.slick-slide'), l = 0;
            l < s.options.slidesToScroll;
            l++
          )
            o < 0 && (o = s.slideCount - 1),
              (t = (t = t.add(a.eq(o))).add(a.eq(r))),
              o--,
              r++
        e(t),
          s.slideCount <= s.options.slidesToShow
            ? e(s.$slider.find('.slick-slide'))
            : s.currentSlide >= s.slideCount - s.options.slidesToShow
            ? e(
                s.$slider.find('.slick-cloned').slice(0, s.options.slidesToShow)
              )
            : 0 === s.currentSlide &&
              e(
                s.$slider
                  .find('.slick-cloned')
                  .slice(-1 * s.options.slidesToShow)
              )
      }),
      (r.prototype.loadSlider = function () {
        var e = this
        e.setPosition(),
          e.$slideTrack.css({ opacity: 1 }),
          e.$slider.removeClass('slick-loading'),
          e.initUI(),
          'progressive' === e.options.lazyLoad && e.progressiveLazyLoad()
      }),
      (r.prototype.next = r.prototype.slickNext =
        function () {
          this.changeSlide({ data: { message: 'next' } })
        }),
      (r.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition()
      }),
      (r.prototype.pause = r.prototype.slickPause =
        function () {
          this.autoPlayClear(), (this.paused = !0)
        }),
      (r.prototype.play = r.prototype.slickPlay =
        function () {
          var e = this
          e.autoPlay(),
            (e.options.autoplay = !0),
            (e.paused = !1),
            (e.focussed = !1),
            (e.interrupted = !1)
        }),
      (r.prototype.postSlide = function (e) {
        var t = this
        t.unslicked ||
          (t.$slider.trigger('afterChange', [t, e]),
          (t.animating = !1),
          t.slideCount > t.options.slidesToShow && t.setPosition(),
          (t.swipeLeft = null),
          t.options.autoplay && t.autoPlay(),
          !0 === t.options.accessibility &&
            (t.initADA(),
            t.options.autoplay ||
              c(t.$slides.get(t.currentSlide)).attr('tabindex', 0).focus()))
      }),
      (r.prototype.prev = r.prototype.slickPrev =
        function () {
          this.changeSlide({ data: { message: 'previous' } })
        }),
      (r.prototype.preventDefault = function (e) {
        e.preventDefault()
      }),
      (r.prototype.progressiveLazyLoad = function (e) {
        e = e || 1
        var t,
          i,
          n,
          o,
          s,
          r = this,
          a = c('img[data-lazy]', r.$slider)
        a.length
          ? ((t = a.first()),
            (i = t.attr('data-lazy')),
            (n = t.attr('data-srcset')),
            (o = t.attr('data-sizes') || r.$slider.attr('data-sizes')),
            ((s = document.createElement('img')).onload = function () {
              n && (t.attr('srcset', n), o && t.attr('sizes', o)),
                t
                  .attr('src', i)
                  .removeAttr('data-lazy data-srcset data-sizes')
                  .removeClass('slick-loading'),
                !0 === r.options.adaptiveHeight && r.setPosition(),
                r.$slider.trigger('lazyLoaded', [r, t, i]),
                r.progressiveLazyLoad()
            }),
            (s.onerror = function () {
              e < 3
                ? setTimeout(function () {
                    r.progressiveLazyLoad(e + 1)
                  }, 500)
                : (t
                    .removeAttr('data-lazy')
                    .removeClass('slick-loading')
                    .addClass('slick-lazyload-error'),
                  r.$slider.trigger('lazyLoadError', [r, t, i]),
                  r.progressiveLazyLoad())
            }),
            (s.src = i))
          : r.$slider.trigger('allImagesLoaded', [r])
      }),
      (r.prototype.refresh = function (e) {
        var t,
          i,
          n = this
        ;(i = n.slideCount - n.options.slidesToShow),
          !n.options.infinite && n.currentSlide > i && (n.currentSlide = i),
          n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0),
          (t = n.currentSlide),
          n.destroy(!0),
          c.extend(n, n.initials, { currentSlide: t }),
          n.init(),
          e || n.changeSlide({ data: { message: 'index', index: t } }, !1)
      }),
      (r.prototype.registerBreakpoints = function () {
        var e,
          t,
          i,
          n = this,
          o = n.options.responsive || null
        if ('array' === c.type(o) && o.length) {
          for (e in ((n.respondTo = n.options.respondTo || 'window'), o))
            if (((i = n.breakpoints.length - 1), o.hasOwnProperty(e))) {
              for (t = o[e].breakpoint; 0 <= i; )
                n.breakpoints[i] &&
                  n.breakpoints[i] === t &&
                  n.breakpoints.splice(i, 1),
                  i--
              n.breakpoints.push(t), (n.breakpointSettings[t] = o[e].settings)
            }
          n.breakpoints.sort(function (e, t) {
            return n.options.mobileFirst ? e - t : t - e
          })
        }
      }),
      (r.prototype.reinit = function () {
        var e = this
        ;(e.$slides = e.$slideTrack
          .children(e.options.slide)
          .addClass('slick-slide')),
          (e.slideCount = e.$slides.length),
          e.currentSlide >= e.slideCount &&
            0 !== e.currentSlide &&
            (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
          e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
          e.registerBreakpoints(),
          e.setProps(),
          e.setupInfinite(),
          e.buildArrows(),
          e.updateArrows(),
          e.initArrowEvents(),
          e.buildDots(),
          e.updateDots(),
          e.initDotEvents(),
          e.cleanUpSlideEvents(),
          e.initSlideEvents(),
          e.checkResponsive(!1, !0),
          !0 === e.options.focusOnSelect &&
            c(e.$slideTrack).children().on('click.slick', e.selectHandler),
          e.setSlideClasses(
            'number' == typeof e.currentSlide ? e.currentSlide : 0
          ),
          e.setPosition(),
          e.focusHandler(),
          (e.paused = !e.options.autoplay),
          e.autoPlay(),
          e.$slider.trigger('reInit', [e])
      }),
      (r.prototype.resize = function () {
        var e = this
        c(window).width() !== e.windowWidth &&
          (clearTimeout(e.windowDelay),
          (e.windowDelay = window.setTimeout(function () {
            ;(e.windowWidth = c(window).width()),
              e.checkResponsive(),
              e.unslicked || e.setPosition()
          }, 50)))
      }),
      (r.prototype.removeSlide = r.prototype.slickRemove =
        function (e, t, i) {
          var n = this
          if (
            ((e =
              'boolean' == typeof e
                ? !0 === (t = e)
                  ? 0
                  : n.slideCount - 1
                : !0 === t
                ? --e
                : e),
            n.slideCount < 1 || e < 0 || e > n.slideCount - 1)
          )
            return !1
          n.unload(),
            !0 === i
              ? n.$slideTrack.children().remove()
              : n.$slideTrack.children(this.options.slide).eq(e).remove(),
            (n.$slides = n.$slideTrack.children(this.options.slide)),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.append(n.$slides),
            (n.$slidesCache = n.$slides),
            n.reinit()
        }),
      (r.prototype.setCSS = function (e) {
        var t,
          i,
          n = this,
          o = {}
        !0 === n.options.rtl && (e = -e),
          (t = 'left' == n.positionProp ? Math.ceil(e) + 'px' : '0px'),
          (i = 'top' == n.positionProp ? Math.ceil(e) + 'px' : '0px'),
          (o[n.positionProp] = e),
          !1 === n.transformsEnabled ||
            (!(o = {}) === n.cssTransitions
              ? (o[n.animType] = 'translate(' + t + ', ' + i + ')')
              : (o[n.animType] = 'translate3d(' + t + ', ' + i + ', 0px)')),
          n.$slideTrack.css(o)
      }),
      (r.prototype.setDimensions = function () {
        var e = this
        !1 === e.options.vertical
          ? !0 === e.options.centerMode &&
            e.$list.css({ padding: '0px ' + e.options.centerPadding })
          : (e.$list.height(
              e.$slides.first().outerHeight(!0) * e.options.slidesToShow
            ),
            !0 === e.options.centerMode &&
              e.$list.css({ padding: e.options.centerPadding + ' 0px' })),
          (e.listWidth = e.$list.width()),
          (e.listHeight = e.$list.height()),
          !1 === e.options.vertical && !1 === e.options.variableWidth
            ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)),
              e.$slideTrack.width(
                Math.ceil(
                  e.slideWidth * e.$slideTrack.children('.slick-slide').length
                )
              ))
            : !0 === e.options.variableWidth
            ? e.$slideTrack.width(5e3 * e.slideCount)
            : ((e.slideWidth = Math.ceil(e.listWidth)),
              e.$slideTrack.height(
                Math.ceil(
                  e.$slides.first().outerHeight(!0) *
                    e.$slideTrack.children('.slick-slide').length
                )
              ))
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width()
        !1 === e.options.variableWidth &&
          e.$slideTrack.children('.slick-slide').width(e.slideWidth - t)
      }),
      (r.prototype.setFade = function () {
        var i,
          n = this
        n.$slides.each(function (e, t) {
          ;(i = n.slideWidth * e * -1),
            !0 === n.options.rtl
              ? c(t).css({
                  position: 'relative',
                  right: i,
                  top: 0,
                  zIndex: n.options.zIndex - 2,
                  opacity: 0,
                })
              : c(t).css({
                  position: 'relative',
                  left: i,
                  top: 0,
                  zIndex: n.options.zIndex - 2,
                  opacity: 0,
                })
        }),
          n.$slides
            .eq(n.currentSlide)
            .css({ zIndex: n.options.zIndex - 1, opacity: 1 })
      }),
      (r.prototype.setHeight = function () {
        var e = this
        if (
          1 === e.options.slidesToShow &&
          !0 === e.options.adaptiveHeight &&
          !1 === e.options.vertical
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0)
          e.$list.css('height', t)
        }
      }),
      (r.prototype.setOption = r.prototype.slickSetOption =
        function () {
          var e,
            t,
            i,
            n,
            o,
            s = this,
            r = !1
          if (
            ('object' === c.type(arguments[0])
              ? ((i = arguments[0]), (r = arguments[1]), (o = 'multiple'))
              : 'string' === c.type(arguments[0]) &&
                ((i = arguments[0]),
                (n = arguments[1]),
                (r = arguments[2]),
                'responsive' === arguments[0] &&
                'array' === c.type(arguments[1])
                  ? (o = 'responsive')
                  : void 0 !== arguments[1] && (o = 'single')),
            'single' === o)
          )
            s.options[i] = n
          else if ('multiple' === o)
            c.each(i, function (e, t) {
              s.options[e] = t
            })
          else if ('responsive' === o)
            for (t in n)
              if ('array' !== c.type(s.options.responsive))
                s.options.responsive = [n[t]]
              else {
                for (e = s.options.responsive.length - 1; 0 <= e; )
                  s.options.responsive[e].breakpoint === n[t].breakpoint &&
                    s.options.responsive.splice(e, 1),
                    e--
                s.options.responsive.push(n[t])
              }
          r && (s.unload(), s.reinit())
        }),
      (r.prototype.setPosition = function () {
        var e = this
        e.setDimensions(),
          e.setHeight(),
          !1 === e.options.fade
            ? e.setCSS(e.getLeft(e.currentSlide))
            : e.setFade(),
          e.$slider.trigger('setPosition', [e])
      }),
      (r.prototype.setProps = function () {
        var e = this,
          t = document.body.style
        ;(e.positionProp = !0 === e.options.vertical ? 'top' : 'left'),
          'top' === e.positionProp
            ? e.$slider.addClass('slick-vertical')
            : e.$slider.removeClass('slick-vertical'),
          (void 0 === t.WebkitTransition &&
            void 0 === t.MozTransition &&
            void 0 === t.msTransition) ||
            (!0 === e.options.useCSS && (e.cssTransitions = !0)),
          e.options.fade &&
            ('number' == typeof e.options.zIndex
              ? e.options.zIndex < 3 && (e.options.zIndex = 3)
              : (e.options.zIndex = e.defaults.zIndex)),
          void 0 !== t.OTransform &&
            ((e.animType = 'OTransform'),
            (e.transformType = '-o-transform'),
            (e.transitionType = 'OTransition'),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.MozTransform &&
            ((e.animType = 'MozTransform'),
            (e.transformType = '-moz-transform'),
            (e.transitionType = 'MozTransition'),
            void 0 === t.perspectiveProperty &&
              void 0 === t.MozPerspective &&
              (e.animType = !1)),
          void 0 !== t.webkitTransform &&
            ((e.animType = 'webkitTransform'),
            (e.transformType = '-webkit-transform'),
            (e.transitionType = 'webkitTransition'),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.msTransform &&
            ((e.animType = 'msTransform'),
            (e.transformType = '-ms-transform'),
            (e.transitionType = 'msTransition'),
            void 0 === t.msTransform && (e.animType = !1)),
          void 0 !== t.transform &&
            !1 !== e.animType &&
            ((e.animType = 'transform'),
            (e.transformType = 'transform'),
            (e.transitionType = 'transition')),
          (e.transformsEnabled =
            e.options.useTransform && null !== e.animType && !1 !== e.animType)
      }),
      (r.prototype.setSlideClasses = function (e) {
        var t,
          i,
          n,
          o,
          s = this
        ;(i = s.$slider
          .find('.slick-slide')
          .removeClass('slick-active slick-center slick-current')
          .attr('aria-hidden', 'true')),
          s.$slides.eq(e).addClass('slick-current'),
          !0 === s.options.centerMode
            ? ((t = Math.floor(s.options.slidesToShow / 2)),
              !0 === s.options.infinite &&
                (t <= e && e <= s.slideCount - 1 - t
                  ? s.$slides
                      .slice(e - t, e + t + 1)
                      .addClass('slick-active')
                      .attr('aria-hidden', 'false')
                  : ((n = s.options.slidesToShow + e),
                    i
                      .slice(n - t + 1, n + t + 2)
                      .addClass('slick-active')
                      .attr('aria-hidden', 'false')),
                0 === e
                  ? i
                      .eq(i.length - 1 - s.options.slidesToShow)
                      .addClass('slick-center')
                  : e === s.slideCount - 1 &&
                    i.eq(s.options.slidesToShow).addClass('slick-center')),
              s.$slides.eq(e).addClass('slick-center'))
            : 0 <= e && e <= s.slideCount - s.options.slidesToShow
            ? s.$slides
                .slice(e, e + s.options.slidesToShow)
                .addClass('slick-active')
                .attr('aria-hidden', 'false')
            : i.length <= s.options.slidesToShow
            ? i.addClass('slick-active').attr('aria-hidden', 'false')
            : ((o = s.slideCount % s.options.slidesToShow),
              (n = !0 === s.options.infinite ? s.options.slidesToShow + e : e),
              s.options.slidesToShow == s.options.slidesToScroll &&
              s.slideCount - e < s.options.slidesToShow
                ? i
                    .slice(n - (s.options.slidesToShow - o), n + o)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false')
                : i
                    .slice(n, n + s.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false')),
          ('ondemand' !== s.options.lazyLoad &&
            'anticipated' !== s.options.lazyLoad) ||
            s.lazyLoad()
      }),
      (r.prototype.setupInfinite = function () {
        var e,
          t,
          i,
          n = this
        if (
          (!0 === n.options.fade && (n.options.centerMode = !1),
          !0 === n.options.infinite &&
            !1 === n.options.fade &&
            ((t = null), n.slideCount > n.options.slidesToShow))
        ) {
          for (
            i =
              !0 === n.options.centerMode
                ? n.options.slidesToShow + 1
                : n.options.slidesToShow,
              e = n.slideCount;
            e > n.slideCount - i;
            e -= 1
          )
            (t = e - 1),
              c(n.$slides[t])
                .clone(!0)
                .attr('id', '')
                .attr('data-slick-index', t - n.slideCount)
                .prependTo(n.$slideTrack)
                .addClass('slick-cloned')
          for (e = 0; e < i + n.slideCount; e += 1)
            (t = e),
              c(n.$slides[t])
                .clone(!0)
                .attr('id', '')
                .attr('data-slick-index', t + n.slideCount)
                .appendTo(n.$slideTrack)
                .addClass('slick-cloned')
          n.$slideTrack
            .find('.slick-cloned')
            .find('[id]')
            .each(function () {
              c(this).attr('id', '')
            })
        }
      }),
      (r.prototype.interrupt = function (e) {
        e || this.autoPlay(), (this.interrupted = e)
      }),
      (r.prototype.selectHandler = function (e) {
        var t = c(e.target).is('.slick-slide')
            ? c(e.target)
            : c(e.target).parents('.slick-slide'),
          i = parseInt(t.attr('data-slick-index'))
        i || (i = 0),
          this.slideCount <= this.options.slidesToShow
            ? this.slideHandler(i, !1, !0)
            : this.slideHandler(i)
      }),
      (r.prototype.slideHandler = function (e, t, i) {
        var n,
          o,
          s,
          r,
          a,
          l = null,
          c = this
        if (
          ((t = t || !1),
          !(
            (!0 === c.animating && !0 === c.options.waitForAnimate) ||
            (!0 === c.options.fade && c.currentSlide === e)
          ))
        )
          if (
            (!1 === t && c.asNavFor(e),
            (n = e),
            (l = c.getLeft(n)),
            (r = c.getLeft(c.currentSlide)),
            (c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft),
            !1 === c.options.infinite &&
              !1 === c.options.centerMode &&
              (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
          )
            !1 === c.options.fade &&
              ((n = c.currentSlide),
              !0 !== i
                ? c.animateSlide(r, function () {
                    c.postSlide(n)
                  })
                : c.postSlide(n))
          else if (
            !1 === c.options.infinite &&
            !0 === c.options.centerMode &&
            (e < 0 || e > c.slideCount - c.options.slidesToScroll)
          )
            !1 === c.options.fade &&
              ((n = c.currentSlide),
              !0 !== i
                ? c.animateSlide(r, function () {
                    c.postSlide(n)
                  })
                : c.postSlide(n))
          else {
            if (
              (c.options.autoplay && clearInterval(c.autoPlayTimer),
              (o =
                n < 0
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                    : c.slideCount + n
                  : n >= c.slideCount
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? 0
                    : n - c.slideCount
                  : n),
              (c.animating = !0),
              c.$slider.trigger('beforeChange', [c, c.currentSlide, o]),
              (s = c.currentSlide),
              (c.currentSlide = o),
              c.setSlideClasses(c.currentSlide),
              c.options.asNavFor &&
                (a = (a = c.getNavTarget()).slick('getSlick')).slideCount <=
                  a.options.slidesToShow &&
                a.setSlideClasses(c.currentSlide),
              c.updateDots(),
              c.updateArrows(),
              !0 === c.options.fade)
            )
              return (
                !0 !== i
                  ? (c.fadeSlideOut(s),
                    c.fadeSlide(o, function () {
                      c.postSlide(o)
                    }))
                  : c.postSlide(o),
                void c.animateHeight()
              )
            !0 !== i
              ? c.animateSlide(l, function () {
                  c.postSlide(o)
                })
              : c.postSlide(o)
          }
      }),
      (r.prototype.startLoad = function () {
        var e = this
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.hide(), e.$nextArrow.hide()),
          !0 === e.options.dots &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.hide(),
          e.$slider.addClass('slick-loading')
      }),
      (r.prototype.swipeDirection = function () {
        var e,
          t,
          i,
          n,
          o = this
        return (
          (e = o.touchObject.startX - o.touchObject.curX),
          (t = o.touchObject.startY - o.touchObject.curY),
          (i = Math.atan2(t, e)),
          (n = Math.round((180 * i) / Math.PI)) < 0 && (n = 360 - Math.abs(n)),
          n <= 45 && 0 <= n
            ? !1 === o.options.rtl
              ? 'left'
              : 'right'
            : n <= 360 && 315 <= n
            ? !1 === o.options.rtl
              ? 'left'
              : 'right'
            : 135 <= n && n <= 225
            ? !1 === o.options.rtl
              ? 'right'
              : 'left'
            : !0 === o.options.verticalSwiping
            ? 35 <= n && n <= 135
              ? 'down'
              : 'up'
            : 'vertical'
        )
      }),
      (r.prototype.swipeEnd = function (e) {
        var t,
          i,
          n = this
        if (((n.dragging = !1), (n.swiping = !1), n.scrolling))
          return (n.scrolling = !1)
        if (
          ((n.interrupted = !1),
          (n.shouldClick = !(10 < n.touchObject.swipeLength)),
          void 0 === n.touchObject.curX)
        )
          return !1
        if (
          (!0 === n.touchObject.edgeHit &&
            n.$slider.trigger('edge', [n, n.swipeDirection()]),
          n.touchObject.swipeLength >= n.touchObject.minSwipe)
        ) {
          switch ((i = n.swipeDirection())) {
            case 'left':
            case 'down':
              ;(t = n.options.swipeToSlide
                ? n.checkNavigable(n.currentSlide + n.getSlideCount())
                : n.currentSlide + n.getSlideCount()),
                (n.currentDirection = 0)
              break
            case 'right':
            case 'up':
              ;(t = n.options.swipeToSlide
                ? n.checkNavigable(n.currentSlide - n.getSlideCount())
                : n.currentSlide - n.getSlideCount()),
                (n.currentDirection = 1)
          }
          'vertical' != i &&
            (n.slideHandler(t),
            (n.touchObject = {}),
            n.$slider.trigger('swipe', [n, i]))
        } else
          n.touchObject.startX !== n.touchObject.curX &&
            (n.slideHandler(n.currentSlide), (n.touchObject = {}))
      }),
      (r.prototype.swipeHandler = function (e) {
        var t = this
        if (
          !(
            !1 === t.options.swipe ||
            ('ontouchend' in document && !1 === t.options.swipe) ||
            (!1 === t.options.draggable && -1 !== e.type.indexOf('mouse'))
          )
        )
          switch (
            ((t.touchObject.fingerCount =
              e.originalEvent && void 0 !== e.originalEvent.touches
                ? e.originalEvent.touches.length
                : 1),
            (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
            !0 === t.options.verticalSwiping &&
              (t.touchObject.minSwipe =
                t.listHeight / t.options.touchThreshold),
            e.data.action)
          ) {
            case 'start':
              t.swipeStart(e)
              break
            case 'move':
              t.swipeMove(e)
              break
            case 'end':
              t.swipeEnd(e)
          }
      }),
      (r.prototype.swipeMove = function (e) {
        var t,
          i,
          n,
          o,
          s,
          r,
          a = this
        return (
          (s = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
          !(!a.dragging || a.scrolling || (s && 1 !== s.length)) &&
            ((t = a.getLeft(a.currentSlide)),
            (a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX),
            (a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY),
            (a.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))
            )),
            (r = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))
            )),
            !a.options.verticalSwiping && !a.swiping && 4 < r
              ? !(a.scrolling = !0)
              : (!0 === a.options.verticalSwiping &&
                  (a.touchObject.swipeLength = r),
                (i = a.swipeDirection()),
                void 0 !== e.originalEvent &&
                  4 < a.touchObject.swipeLength &&
                  ((a.swiping = !0), e.preventDefault()),
                (o =
                  (!1 === a.options.rtl ? 1 : -1) *
                  (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                !0 === a.options.verticalSwiping &&
                  (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                (n = a.touchObject.swipeLength),
                (a.touchObject.edgeHit = !1) === a.options.infinite &&
                  ((0 === a.currentSlide && 'right' === i) ||
                    (a.currentSlide >= a.getDotCount() && 'left' === i)) &&
                  ((n = a.touchObject.swipeLength * a.options.edgeFriction),
                  (a.touchObject.edgeHit = !0)),
                !1 === a.options.vertical
                  ? (a.swipeLeft = t + n * o)
                  : (a.swipeLeft =
                      t + n * (a.$list.height() / a.listWidth) * o),
                !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * o),
                !0 !== a.options.fade &&
                  !1 !== a.options.touchMove &&
                  (!0 === a.animating
                    ? ((a.swipeLeft = null), !1)
                    : void a.setCSS(a.swipeLeft))))
        )
      }),
      (r.prototype.swipeStart = function (e) {
        var t,
          i = this
        if (
          ((i.interrupted = !0),
          1 !== i.touchObject.fingerCount ||
            i.slideCount <= i.options.slidesToShow)
        )
          return !(i.touchObject = {})
        void 0 !== e.originalEvent &&
          void 0 !== e.originalEvent.touches &&
          (t = e.originalEvent.touches[0]),
          (i.touchObject.startX = i.touchObject.curX =
            void 0 !== t ? t.pageX : e.clientX),
          (i.touchObject.startY = i.touchObject.curY =
            void 0 !== t ? t.pageY : e.clientY),
          (i.dragging = !0)
      }),
      (r.prototype.unfilterSlides = r.prototype.slickUnfilter =
        function () {
          var e = this
          null !== e.$slidesCache &&
            (e.unload(),
            e.$slideTrack.children(this.options.slide).detach(),
            e.$slidesCache.appendTo(e.$slideTrack),
            e.reinit())
        }),
      (r.prototype.unload = function () {
        var e = this
        c('.slick-cloned', e.$slider).remove(),
          e.$dots && e.$dots.remove(),
          e.$prevArrow &&
            e.htmlExpr.test(e.options.prevArrow) &&
            e.$prevArrow.remove(),
          e.$nextArrow &&
            e.htmlExpr.test(e.options.nextArrow) &&
            e.$nextArrow.remove(),
          e.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '')
      }),
      (r.prototype.unslick = function (e) {
        this.$slider.trigger('unslick', [this, e]), this.destroy()
      }),
      (r.prototype.updateArrows = function () {
        var e = this
        Math.floor(e.options.slidesToShow / 2),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            !e.options.infinite &&
            (e.$prevArrow
              .removeClass('slick-disabled')
              .attr('aria-disabled', 'false'),
            e.$nextArrow
              .removeClass('slick-disabled')
              .attr('aria-disabled', 'false'),
            0 === e.currentSlide
              ? (e.$prevArrow
                  .addClass('slick-disabled')
                  .attr('aria-disabled', 'true'),
                e.$nextArrow
                  .removeClass('slick-disabled')
                  .attr('aria-disabled', 'false'))
              : e.currentSlide >= e.slideCount - e.options.slidesToShow &&
                !1 === e.options.centerMode
              ? (e.$nextArrow
                  .addClass('slick-disabled')
                  .attr('aria-disabled', 'true'),
                e.$prevArrow
                  .removeClass('slick-disabled')
                  .attr('aria-disabled', 'false'))
              : e.currentSlide >= e.slideCount - 1 &&
                !0 === e.options.centerMode &&
                (e.$nextArrow
                  .addClass('slick-disabled')
                  .attr('aria-disabled', 'true'),
                e.$prevArrow
                  .removeClass('slick-disabled')
                  .attr('aria-disabled', 'false')))
      }),
      (r.prototype.updateDots = function () {
        var e = this
        null !== e.$dots &&
          (e.$dots.find('li').removeClass('slick-active').end(),
          e.$dots
            .find('li')
            .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
            .addClass('slick-active'))
      }),
      (r.prototype.visibility = function () {
        this.options.autoplay &&
          (document[this.hidden]
            ? (this.interrupted = !0)
            : (this.interrupted = !1))
      }),
      (c.fn.slick = function () {
        var e,
          t,
          i = this,
          n = arguments[0],
          o = Array.prototype.slice.call(arguments, 1),
          s = i.length
        for (e = 0; e < s; e++)
          if (
            ('object' == typeof n || void 0 === n
              ? (i[e].slick = new r(i[e], n))
              : (t = i[e].slick[n].apply(i[e].slick, o)),
            void 0 !== t)
          )
            return t
        return i
      })
  }),
  (function (e, t) {
    'function' == typeof define && define.amd
      ? define(['jquery'], function (e) {
          return t(e)
        })
      : 'object' == typeof exports
      ? (module.exports = t(require('jquery')))
      : t(jQuery)
  })(0, function ($) {
    function t(e) {
      this.$container,
        (this.constraints = null),
        this.__$tooltip,
        this.__init(e)
    }
    function s(i, n) {
      var o = !0
      return (
        $.each(i, function (e, t) {
          return void 0 === n[e] || i[e] !== n[e] ? (o = !1) : void 0
        }),
        o
      )
    }
    function u(e) {
      var t = e.attr('id'),
        i = t ? E.window.document.getElementById(t) : null
      return i ? i === e[0] : $.contains(E.window.document.body, e[0])
    }
    var d = {
        animation: 'fade',
        animationDuration: 350,
        content: null,
        contentAsHTML: !1,
        contentCloning: !1,
        debug: !0,
        delay: 300,
        delayTouch: [300, 500],
        functionInit: null,
        functionBefore: null,
        functionReady: null,
        functionAfter: null,
        functionFormat: null,
        IEmin: 6,
        interactive: !1,
        multiple: !1,
        parent: null,
        plugins: ['sideTip'],
        repositionOnScroll: !1,
        restoration: 'none',
        selfDestruction: !0,
        theme: [],
        timer: 0,
        trackerInterval: 500,
        trackOrigin: !1,
        trackTooltip: !1,
        trigger: 'hover',
        triggerClose: {
          click: !1,
          mouseleave: !1,
          originClick: !1,
          scroll: !1,
          tap: !1,
          touchleave: !1,
        },
        triggerOpen: { click: !1, mouseenter: !1, tap: !1, touchstart: !1 },
        updateAnimation: 'rotate',
        zIndex: 9999999,
      },
      o = 'undefined' != typeof window ? window : null,
      E = {
        hasTouchCapability: !(
          !o ||
          !(
            'ontouchstart' in o ||
            (o.DocumentTouch && o.document instanceof o.DocumentTouch) ||
            o.navigator.maxTouchPoints
          )
        ),
        hasTransitions: (function () {
          if (!o) return !1
          var e = (o.document.body || o.document.documentElement).style,
            t = 'transition',
            i = ['Moz', 'Webkit', 'Khtml', 'O', 'ms']
          if ('string' == typeof e[t]) return !0
          t = t.charAt(0).toUpperCase() + t.substr(1)
          for (var n = 0; n < i.length; n++)
            if ('string' == typeof e[i[n] + t]) return !0
          return !1
        })(),
        IE: !1,
        semVer: '4.2.6',
        window: o,
      },
      e = function () {
        ;(this.__$emitterPrivate = $({})),
          (this.__$emitterPublic = $({})),
          (this.__instancesLatestArr = []),
          (this.__plugins = {}),
          (this._env = E)
      }
    ;(e.prototype = {
      __bridge: function (e, i, n) {
        if (!i[n]) {
          var t = function () {}
          t.prototype = e
          var o = new t()
          o.__init && o.__init(i),
            $.each(e, function (e, t) {
              0 != e.indexOf('__') &&
                (i[e]
                  ? d.debug &&
                    console.log(
                      'The ' +
                        e +
                        ' method of the ' +
                        n +
                        ' plugin conflicts with another plugin or native methods'
                    )
                  : ((i[e] = function () {
                      return o[e].apply(
                        o,
                        Array.prototype.slice.apply(arguments)
                      )
                    }),
                    (i[e].bridged = o)))
            }),
            (i[n] = o)
        }
        return this
      },
      __setWindow: function (e) {
        return (E.window = e), this
      },
      _getRuler: function (e) {
        return new t(e)
      },
      _off: function () {
        return (
          this.__$emitterPrivate.off.apply(
            this.__$emitterPrivate,
            Array.prototype.slice.apply(arguments)
          ),
          this
        )
      },
      _on: function () {
        return (
          this.__$emitterPrivate.on.apply(
            this.__$emitterPrivate,
            Array.prototype.slice.apply(arguments)
          ),
          this
        )
      },
      _one: function () {
        return (
          this.__$emitterPrivate.one.apply(
            this.__$emitterPrivate,
            Array.prototype.slice.apply(arguments)
          ),
          this
        )
      },
      _plugin: function (e) {
        var t = this
        if ('string' == typeof e) {
          var i = e,
            n = null
          return (
            0 < i.indexOf('.')
              ? (n = t.__plugins[i])
              : $.each(t.__plugins, function (e, t) {
                  return t.name.substring(t.name.length - i.length - 1) ==
                    '.' + i
                    ? ((n = t), !1)
                    : void 0
                }),
            n
          )
        }
        if (e.name.indexOf('.') < 0)
          throw new Error('Plugins must be namespaced')
        return (
          (t.__plugins[e.name] = e).core && t.__bridge(e.core, t, e.name), this
        )
      },
      _trigger: function () {
        var e = Array.prototype.slice.apply(arguments)
        return (
          'string' == typeof e[0] && (e[0] = { type: e[0] }),
          this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, e),
          this.__$emitterPublic.trigger.apply(this.__$emitterPublic, e),
          this
        )
      },
      instances: function (e) {
        var n = []
        return (
          $(e || '.tooltipstered').each(function () {
            var i = $(this),
              e = i.data('tooltipster-ns')
            e &&
              $.each(e, function (e, t) {
                n.push(i.data(t))
              })
          }),
          n
        )
      },
      instancesLatest: function () {
        return this.__instancesLatestArr
      },
      off: function () {
        return (
          this.__$emitterPublic.off.apply(
            this.__$emitterPublic,
            Array.prototype.slice.apply(arguments)
          ),
          this
        )
      },
      on: function () {
        return (
          this.__$emitterPublic.on.apply(
            this.__$emitterPublic,
            Array.prototype.slice.apply(arguments)
          ),
          this
        )
      },
      one: function () {
        return (
          this.__$emitterPublic.one.apply(
            this.__$emitterPublic,
            Array.prototype.slice.apply(arguments)
          ),
          this
        )
      },
      origins: function (e) {
        return $((e ? e + ' ' : '') + '.tooltipstered').toArray()
      },
      setDefaults: function (e) {
        return $.extend(d, e), this
      },
      triggerHandler: function () {
        return (
          this.__$emitterPublic.triggerHandler.apply(
            this.__$emitterPublic,
            Array.prototype.slice.apply(arguments)
          ),
          this
        )
      },
    }),
      ($.tooltipster = new e()),
      ($.Tooltipster = function (e, t) {
        ;(this.__callbacks = { close: [], open: [] }),
          this.__closingTime,
          this.__Content,
          this.__contentBcr,
          (this.__destroyed = !1),
          (this.__$emitterPrivate = $({})),
          (this.__$emitterPublic = $({})),
          (this.__enabled = !0),
          this.__garbageCollector,
          this.__Geometry,
          this.__lastPosition,
          (this.__namespace = 'tooltipster-' + Math.round(1e6 * Math.random())),
          this.__options,
          this.__$originParents,
          (this.__pointerIsOverOrigin = !1),
          (this.__previousThemes = []),
          (this.__state = 'closed'),
          (this.__timeouts = { close: [], open: null }),
          (this.__touchEvents = []),
          (this.__tracker = null),
          this._$origin,
          this._$tooltip,
          this.__init(e, t)
      }),
      ($.Tooltipster.prototype = {
        __init: function (e, t) {
          var i = this
          if (
            ((i._$origin = $(e)),
            (i.__options = $.extend(!0, {}, d, t)),
            i.__optionsFormat(),
            !E.IE || E.IE >= i.__options.IEmin)
          ) {
            var n = null
            if (
              (void 0 === i._$origin.data('tooltipster-initialTitle') &&
                (void 0 === (n = i._$origin.attr('title')) && (n = null),
                i._$origin.data('tooltipster-initialTitle', n)),
              null !== i.__options.content)
            )
              i.__contentSet(i.__options.content)
            else {
              var o,
                s = i._$origin.attr('data-tooltip-content')
              s && (o = $(s)),
                o && o[0] ? i.__contentSet(o.first()) : i.__contentSet(n)
            }
            i._$origin.removeAttr('title').addClass('tooltipstered'),
              i.__prepareOrigin(),
              i.__prepareGC(),
              $.each(i.__options.plugins, function (e, t) {
                i._plug(t)
              }),
              E.hasTouchCapability &&
                $(E.window.document.body).on(
                  'touchmove.' + i.__namespace + '-triggerOpen',
                  function (e) {
                    i._touchRecordEvent(e)
                  }
                ),
              i
                ._on('created', function () {
                  i.__prepareTooltip()
                })
                ._on('repositioned', function (e) {
                  i.__lastPosition = e.position
                })
          } else i.__options.disabled = !0
        },
        __contentInsert: function () {
          var e = this,
            t = e._$tooltip.find('.tooltipster-content'),
            i = e.__Content
          return (
            e._trigger({
              type: 'format',
              content: e.__Content,
              format: function (e) {
                i = e
              },
            }),
            e.__options.functionFormat &&
              (i = e.__options.functionFormat.call(
                e,
                e,
                { origin: e._$origin[0] },
                e.__Content
              )),
            'string' != typeof i || e.__options.contentAsHTML
              ? t.empty().append(i)
              : t.text(i),
            e
          )
        },
        __contentSet: function (e) {
          return (
            e instanceof $ &&
              this.__options.contentCloning &&
              (e = e.clone(!0)),
            (this.__Content = e),
            this._trigger({ type: 'updated', content: e }),
            this
          )
        },
        __destroyError: function () {
          throw new Error(
            'This tooltip has been destroyed and cannot execute your method call.'
          )
        },
        __geometry: function () {
          var e = this,
            t = e._$origin,
            i = e._$origin.is('area')
          if (i) {
            var n = e._$origin.parent().attr('name')
            t = $('img[usemap="#' + n + '"]')
          }
          var o = t[0].getBoundingClientRect(),
            s = $(E.window.document),
            r = $(E.window),
            a = t,
            l = {
              available: { document: null, window: null },
              document: { size: { height: s.height(), width: s.width() } },
              window: {
                scroll: {
                  left:
                    E.window.scrollX ||
                    E.window.document.documentElement.scrollLeft,
                  top:
                    E.window.scrollY ||
                    E.window.document.documentElement.scrollTop,
                },
                size: { height: r.height(), width: r.width() },
              },
              origin: {
                fixedLineage: !1,
                offset: {},
                size: { height: o.bottom - o.top, width: o.right - o.left },
                usemapImage: i ? t[0] : null,
                windowOffset: {
                  bottom: o.bottom,
                  left: o.left,
                  right: o.right,
                  top: o.top,
                },
              },
            }
          if (i) {
            var c = e._$origin.attr('shape'),
              u = e._$origin.attr('coords')
            if (
              (u &&
                ((u = u.split(',')),
                $.map(u, function (e, t) {
                  u[t] = parseInt(e)
                })),
              'default' != c)
            )
              switch (c) {
                case 'circle':
                  var d = u[0],
                    p = u[1],
                    h = u[2],
                    f = p - h,
                    g = d - h
                  ;(l.origin.size.height = 2 * h),
                    (l.origin.size.width = l.origin.size.height),
                    (l.origin.windowOffset.left += g),
                    (l.origin.windowOffset.top += f)
                  break
                case 'rect':
                  var v = u[0],
                    m = u[1],
                    _ = u[2],
                    y = u[3]
                  ;(l.origin.size.height = y - m),
                    (l.origin.size.width = _ - v),
                    (l.origin.windowOffset.left += v),
                    (l.origin.windowOffset.top += m)
                  break
                case 'poly':
                  for (
                    var w = 0, b = 0, x = 0, T = 0, C = 'even', k = 0;
                    k < u.length;
                    k++
                  ) {
                    var S = u[k]
                    C =
                      'even' == C
                        ? (x < S && ((x = S), 0 === k && (w = x)),
                          S < w && (w = S),
                          'odd')
                        : (T < S && ((T = S), 1 == k && (b = T)),
                          S < b && (b = S),
                          'even')
                  }
                  ;(l.origin.size.height = T - b),
                    (l.origin.size.width = x - w),
                    (l.origin.windowOffset.left += w),
                    (l.origin.windowOffset.top += b)
              }
          }
          for (
            e._trigger({
              type: 'geometry',
              edit: function (e) {
                ;(l.origin.size.height = e.height),
                  (l.origin.windowOffset.left = e.left),
                  (l.origin.windowOffset.top = e.top),
                  (l.origin.size.width = e.width)
              },
              geometry: {
                height: l.origin.size.height,
                left: l.origin.windowOffset.left,
                top: l.origin.windowOffset.top,
                width: l.origin.size.width,
              },
            }),
              l.origin.windowOffset.right =
                l.origin.windowOffset.left + l.origin.size.width,
              l.origin.windowOffset.bottom =
                l.origin.windowOffset.top + l.origin.size.height,
              l.origin.offset.left =
                l.origin.windowOffset.left + l.window.scroll.left,
              l.origin.offset.top =
                l.origin.windowOffset.top + l.window.scroll.top,
              l.origin.offset.bottom =
                l.origin.offset.top + l.origin.size.height,
              l.origin.offset.right =
                l.origin.offset.left + l.origin.size.width,
              l.available.document = {
                bottom: {
                  height: l.document.size.height - l.origin.offset.bottom,
                  width: l.document.size.width,
                },
                left: {
                  height: l.document.size.height,
                  width: l.origin.offset.left,
                },
                right: {
                  height: l.document.size.height,
                  width: l.document.size.width - l.origin.offset.right,
                },
                top: {
                  height: l.origin.offset.top,
                  width: l.document.size.width,
                },
              },
              l.available.window = {
                bottom: {
                  height: Math.max(
                    l.window.size.height -
                      Math.max(l.origin.windowOffset.bottom, 0),
                    0
                  ),
                  width: l.window.size.width,
                },
                left: {
                  height: l.window.size.height,
                  width: Math.max(l.origin.windowOffset.left, 0),
                },
                right: {
                  height: l.window.size.height,
                  width: Math.max(
                    l.window.size.width -
                      Math.max(l.origin.windowOffset.right, 0),
                    0
                  ),
                },
                top: {
                  height: Math.max(l.origin.windowOffset.top, 0),
                  width: l.window.size.width,
                },
              };
            'html' != a[0].tagName.toLowerCase();

          ) {
            if ('fixed' == a.css('position')) {
              l.origin.fixedLineage = !0
              break
            }
            a = a.parent()
          }
          return l
        },
        __optionsFormat: function () {
          return (
            'number' == typeof this.__options.animationDuration &&
              (this.__options.animationDuration = [
                this.__options.animationDuration,
                this.__options.animationDuration,
              ]),
            'number' == typeof this.__options.delay &&
              (this.__options.delay = [
                this.__options.delay,
                this.__options.delay,
              ]),
            'number' == typeof this.__options.delayTouch &&
              (this.__options.delayTouch = [
                this.__options.delayTouch,
                this.__options.delayTouch,
              ]),
            'string' == typeof this.__options.theme &&
              (this.__options.theme = [this.__options.theme]),
            null === this.__options.parent
              ? (this.__options.parent = $(E.window.document.body))
              : 'string' == typeof this.__options.parent &&
                (this.__options.parent = $(this.__options.parent)),
            'hover' == this.__options.trigger
              ? ((this.__options.triggerOpen = {
                  mouseenter: !0,
                  touchstart: !0,
                }),
                (this.__options.triggerClose = {
                  mouseleave: !0,
                  originClick: !0,
                  touchleave: !0,
                }))
              : 'click' == this.__options.trigger &&
                ((this.__options.triggerOpen = { click: !0, tap: !0 }),
                (this.__options.triggerClose = { click: !0, tap: !0 })),
            this._trigger('options'),
            this
          )
        },
        __prepareGC: function () {
          var e = this
          return (
            e.__options.selfDestruction
              ? (e.__garbageCollector = setInterval(function () {
                  var i = new Date().getTime()
                  ;(e.__touchEvents = $.grep(e.__touchEvents, function (e, t) {
                    return 6e4 < i - e.time
                  })),
                    u(e._$origin) ||
                      e.close(function () {
                        e.destroy()
                      })
                }, 2e4))
              : clearInterval(e.__garbageCollector),
            e
          )
        },
        __prepareOrigin: function () {
          var t = this
          if (
            (t._$origin.off('.' + t.__namespace + '-triggerOpen'),
            E.hasTouchCapability &&
              t._$origin.on(
                'touchstart.' +
                  t.__namespace +
                  '-triggerOpen touchend.' +
                  t.__namespace +
                  '-triggerOpen touchcancel.' +
                  t.__namespace +
                  '-triggerOpen',
                function (e) {
                  t._touchRecordEvent(e)
                }
              ),
            t.__options.triggerOpen.click ||
              (t.__options.triggerOpen.tap && E.hasTouchCapability))
          ) {
            var e = ''
            t.__options.triggerOpen.click &&
              (e += 'click.' + t.__namespace + '-triggerOpen '),
              t.__options.triggerOpen.tap &&
                E.hasTouchCapability &&
                (e += 'touchend.' + t.__namespace + '-triggerOpen'),
              t._$origin.on(e, function (e) {
                t._touchIsMeaningfulEvent(e) && t._open(e)
              })
          }
          if (
            t.__options.triggerOpen.mouseenter ||
            (t.__options.triggerOpen.touchstart && E.hasTouchCapability)
          ) {
            e = ''
            t.__options.triggerOpen.mouseenter &&
              (e += 'mouseenter.' + t.__namespace + '-triggerOpen '),
              t.__options.triggerOpen.touchstart &&
                E.hasTouchCapability &&
                (e += 'touchstart.' + t.__namespace + '-triggerOpen'),
              t._$origin.on(e, function (e) {
                ;(!t._touchIsTouchEvent(e) && t._touchIsEmulatedEvent(e)) ||
                  ((t.__pointerIsOverOrigin = !0), t._openShortly(e))
              })
          }
          if (
            t.__options.triggerClose.mouseleave ||
            (t.__options.triggerClose.touchleave && E.hasTouchCapability)
          ) {
            e = ''
            t.__options.triggerClose.mouseleave &&
              (e += 'mouseleave.' + t.__namespace + '-triggerOpen '),
              t.__options.triggerClose.touchleave &&
                E.hasTouchCapability &&
                (e +=
                  'touchend.' +
                  t.__namespace +
                  '-triggerOpen touchcancel.' +
                  t.__namespace +
                  '-triggerOpen'),
              t._$origin.on(e, function (e) {
                t._touchIsMeaningfulEvent(e) && (t.__pointerIsOverOrigin = !1)
              })
          }
          return t
        },
        __prepareTooltip: function () {
          var i = this,
            e = i.__options.interactive ? 'auto' : ''
          return (
            i._$tooltip
              .attr('id', i.__namespace)
              .css({ 'pointer-events': e, zIndex: i.__options.zIndex }),
            $.each(i.__previousThemes, function (e, t) {
              i._$tooltip.removeClass(t)
            }),
            $.each(i.__options.theme, function (e, t) {
              i._$tooltip.addClass(t)
            }),
            (i.__previousThemes = $.merge([], i.__options.theme)),
            i
          )
        },
        __scrollHandler: function (e) {
          var t = this
          if (t.__options.triggerClose.scroll) t._close(e)
          else if (u(t._$origin) && u(t._$tooltip)) {
            var r = null
            if (e.target === E.window.document)
              t.__Geometry.origin.fixedLineage ||
                (t.__options.repositionOnScroll && t.reposition(e))
            else {
              r = t.__geometry()
              var a = !1
              if (
                ('fixed' != t._$origin.css('position') &&
                  t.__$originParents.each(function (e, t) {
                    var i = $(t),
                      n = i.css('overflow-x'),
                      o = i.css('overflow-y')
                    if ('visible' != n || 'visible' != o) {
                      var s = t.getBoundingClientRect()
                      if (
                        'visible' != n &&
                        (r.origin.windowOffset.left < s.left ||
                          r.origin.windowOffset.right > s.right)
                      )
                        return !(a = !0)
                      if (
                        'visible' != o &&
                        (r.origin.windowOffset.top < s.top ||
                          r.origin.windowOffset.bottom > s.bottom)
                      )
                        return !(a = !0)
                    }
                    return 'fixed' != i.css('position') && void 0
                  }),
                a)
              )
                t._$tooltip.css('visibility', 'hidden')
              else if (
                (t._$tooltip.css('visibility', 'visible'),
                t.__options.repositionOnScroll)
              )
                t.reposition(e)
              else {
                var i = r.origin.offset.left - t.__Geometry.origin.offset.left,
                  n = r.origin.offset.top - t.__Geometry.origin.offset.top
                t._$tooltip.css({
                  left: t.__lastPosition.coord.left + i,
                  top: t.__lastPosition.coord.top + n,
                })
              }
            }
            t._trigger({ type: 'scroll', event: e, geo: r })
          }
          return t
        },
        __stateSet: function (e) {
          return (
            (this.__state = e), this._trigger({ type: 'state', state: e }), this
          )
        },
        __timeoutsClear: function () {
          return (
            clearTimeout(this.__timeouts.open),
            (this.__timeouts.open = null),
            $.each(this.__timeouts.close, function (e, t) {
              clearTimeout(t)
            }),
            (this.__timeouts.close = []),
            this
          )
        },
        __trackerStart: function () {
          var n = this,
            o = n._$tooltip.find('.tooltipster-content')
          return (
            n.__options.trackTooltip &&
              (n.__contentBcr = o[0].getBoundingClientRect()),
            (n.__tracker = setInterval(function () {
              if (u(n._$origin) && u(n._$tooltip)) {
                if (n.__options.trackOrigin) {
                  var e = n.__geometry(),
                    t = !1
                  s(e.origin.size, n.__Geometry.origin.size) &&
                    (n.__Geometry.origin.fixedLineage
                      ? s(
                          e.origin.windowOffset,
                          n.__Geometry.origin.windowOffset
                        ) && (t = !0)
                      : s(e.origin.offset, n.__Geometry.origin.offset) &&
                        (t = !0)),
                    t ||
                      (n.__options.triggerClose.mouseleave
                        ? n._close()
                        : n.reposition())
                }
                if (n.__options.trackTooltip) {
                  var i = o[0].getBoundingClientRect()
                  ;(i.height === n.__contentBcr.height &&
                    i.width === n.__contentBcr.width) ||
                    (n.reposition(), (n.__contentBcr = i))
                }
              } else n._close()
            }, n.__options.trackerInterval)),
            n
          )
        },
        _close: function (i, e, t) {
          var n = this,
            o = !0
          if (
            (n._trigger({
              type: 'close',
              event: i,
              stop: function () {
                o = !1
              },
            }),
            o || t)
          ) {
            e && n.__callbacks.close.push(e),
              (n.__callbacks.open = []),
              n.__timeoutsClear()
            var s = function () {
              $.each(n.__callbacks.close, function (e, t) {
                t.call(n, n, { event: i, origin: n._$origin[0] })
              }),
                (n.__callbacks.close = [])
            }
            if ('closed' != n.__state) {
              var r = !0,
                a = new Date().getTime() + n.__options.animationDuration[1]
              if (
                ('disappearing' == n.__state &&
                  a > n.__closingTime &&
                  0 < n.__options.animationDuration[1] &&
                  (r = !1),
                r)
              ) {
                ;(n.__closingTime = a),
                  'disappearing' != n.__state && n.__stateSet('disappearing')
                var l = function () {
                  clearInterval(n.__tracker),
                    n._trigger({ type: 'closing', event: i }),
                    n._$tooltip
                      .off('.' + n.__namespace + '-triggerClose')
                      .removeClass('tooltipster-dying'),
                    $(E.window).off('.' + n.__namespace + '-triggerClose'),
                    n.__$originParents.each(function (e, t) {
                      $(t).off('scroll.' + n.__namespace + '-triggerClose')
                    }),
                    (n.__$originParents = null),
                    $(E.window.document.body).off(
                      '.' + n.__namespace + '-triggerClose'
                    ),
                    n._$origin.off('.' + n.__namespace + '-triggerClose'),
                    n._off('dismissable'),
                    n.__stateSet('closed'),
                    n._trigger({ type: 'after', event: i }),
                    n.__options.functionAfter &&
                      n.__options.functionAfter.call(n, n, {
                        event: i,
                        origin: n._$origin[0],
                      }),
                    s()
                }
                E.hasTransitions
                  ? (n._$tooltip.css({
                      '-moz-animation-duration':
                        n.__options.animationDuration[1] + 'ms',
                      '-ms-animation-duration':
                        n.__options.animationDuration[1] + 'ms',
                      '-o-animation-duration':
                        n.__options.animationDuration[1] + 'ms',
                      '-webkit-animation-duration':
                        n.__options.animationDuration[1] + 'ms',
                      'animation-duration':
                        n.__options.animationDuration[1] + 'ms',
                      'transition-duration':
                        n.__options.animationDuration[1] + 'ms',
                    }),
                    n._$tooltip
                      .clearQueue()
                      .removeClass('tooltipster-show')
                      .addClass('tooltipster-dying'),
                    0 < n.__options.animationDuration[1] &&
                      n._$tooltip.delay(n.__options.animationDuration[1]),
                    n._$tooltip.queue(l))
                  : n._$tooltip
                      .stop()
                      .fadeOut(n.__options.animationDuration[1], l)
              }
            } else s()
          }
          return n
        },
        _off: function () {
          return (
            this.__$emitterPrivate.off.apply(
              this.__$emitterPrivate,
              Array.prototype.slice.apply(arguments)
            ),
            this
          )
        },
        _on: function () {
          return (
            this.__$emitterPrivate.on.apply(
              this.__$emitterPrivate,
              Array.prototype.slice.apply(arguments)
            ),
            this
          )
        },
        _one: function () {
          return (
            this.__$emitterPrivate.one.apply(
              this.__$emitterPrivate,
              Array.prototype.slice.apply(arguments)
            ),
            this
          )
        },
        _open: function (e, t) {
          var i = this
          if (!i.__destroying && u(i._$origin) && i.__enabled) {
            var n = !0
            if (
              ('closed' == i.__state &&
                (i._trigger({
                  type: 'before',
                  event: e,
                  stop: function () {
                    n = !1
                  },
                }),
                n &&
                  i.__options.functionBefore &&
                  (n = i.__options.functionBefore.call(i, i, {
                    event: e,
                    origin: i._$origin[0],
                  }))),
              !1 !== n && null !== i.__Content)
            ) {
              t && i.__callbacks.open.push(t),
                (i.__callbacks.close = []),
                i.__timeoutsClear()
              var o,
                s = function () {
                  'stable' != i.__state && i.__stateSet('stable'),
                    $.each(i.__callbacks.open, function (e, t) {
                      t.call(i, i, {
                        origin: i._$origin[0],
                        tooltip: i._$tooltip[0],
                      })
                    }),
                    (i.__callbacks.open = [])
                }
              if ('closed' !== i.__state)
                (o = 0),
                  'disappearing' === i.__state
                    ? (i.__stateSet('appearing'),
                      E.hasTransitions
                        ? (i._$tooltip
                            .clearQueue()
                            .removeClass('tooltipster-dying')
                            .addClass('tooltipster-show'),
                          0 < i.__options.animationDuration[0] &&
                            i._$tooltip.delay(i.__options.animationDuration[0]),
                          i._$tooltip.queue(s))
                        : i._$tooltip.stop().fadeIn(s))
                    : 'stable' == i.__state && s()
              else {
                if (
                  (i.__stateSet('appearing'),
                  (o = i.__options.animationDuration[0]),
                  i.__contentInsert(),
                  i.reposition(e, !0),
                  E.hasTransitions
                    ? (i._$tooltip
                        .addClass('tooltipster-' + i.__options.animation)
                        .addClass('tooltipster-initial')
                        .css({
                          '-moz-animation-duration':
                            i.__options.animationDuration[0] + 'ms',
                          '-ms-animation-duration':
                            i.__options.animationDuration[0] + 'ms',
                          '-o-animation-duration':
                            i.__options.animationDuration[0] + 'ms',
                          '-webkit-animation-duration':
                            i.__options.animationDuration[0] + 'ms',
                          'animation-duration':
                            i.__options.animationDuration[0] + 'ms',
                          'transition-duration':
                            i.__options.animationDuration[0] + 'ms',
                        }),
                      setTimeout(function () {
                        'closed' != i.__state &&
                          (i._$tooltip
                            .addClass('tooltipster-show')
                            .removeClass('tooltipster-initial'),
                          0 < i.__options.animationDuration[0] &&
                            i._$tooltip.delay(i.__options.animationDuration[0]),
                          i._$tooltip.queue(s))
                      }, 0))
                    : i._$tooltip
                        .css('display', 'none')
                        .fadeIn(i.__options.animationDuration[0], s),
                  i.__trackerStart(),
                  $(E.window)
                    .on(
                      'resize.' + i.__namespace + '-triggerClose',
                      function (e) {
                        var t = $(document.activeElement)
                        ;((t.is('input') || t.is('textarea')) &&
                          $.contains(i._$tooltip[0], t[0])) ||
                          i.reposition(e)
                      }
                    )
                    .on(
                      'scroll.' + i.__namespace + '-triggerClose',
                      function (e) {
                        i.__scrollHandler(e)
                      }
                    ),
                  (i.__$originParents = i._$origin.parents()),
                  i.__$originParents.each(function (e, t) {
                    $(t).on(
                      'scroll.' + i.__namespace + '-triggerClose',
                      function (e) {
                        i.__scrollHandler(e)
                      }
                    )
                  }),
                  i.__options.triggerClose.mouseleave ||
                    (i.__options.triggerClose.touchleave &&
                      E.hasTouchCapability))
                ) {
                  i._on('dismissable', function (e) {
                    e.dismissable
                      ? e.delay
                        ? ((c = setTimeout(function () {
                            i._close(e.event)
                          }, e.delay)),
                          i.__timeouts.close.push(c))
                        : i._close(e)
                      : clearTimeout(c)
                  })
                  var r = i._$origin,
                    a = '',
                    l = '',
                    c = null
                  i.__options.interactive && (r = r.add(i._$tooltip)),
                    i.__options.triggerClose.mouseleave &&
                      ((a += 'mouseenter.' + i.__namespace + '-triggerClose '),
                      (l += 'mouseleave.' + i.__namespace + '-triggerClose ')),
                    i.__options.triggerClose.touchleave &&
                      E.hasTouchCapability &&
                      ((a += 'touchstart.' + i.__namespace + '-triggerClose'),
                      (l +=
                        'touchend.' +
                        i.__namespace +
                        '-triggerClose touchcancel.' +
                        i.__namespace +
                        '-triggerClose')),
                    r
                      .on(l, function (e) {
                        if (
                          i._touchIsTouchEvent(e) ||
                          !i._touchIsEmulatedEvent(e)
                        ) {
                          var t =
                            'mouseleave' == e.type
                              ? i.__options.delay
                              : i.__options.delayTouch
                          i._trigger({
                            delay: t[1],
                            dismissable: !0,
                            event: e,
                            type: 'dismissable',
                          })
                        }
                      })
                      .on(a, function (e) {
                        ;(!i._touchIsTouchEvent(e) &&
                          i._touchIsEmulatedEvent(e)) ||
                          i._trigger({
                            dismissable: !1,
                            event: e,
                            type: 'dismissable',
                          })
                      })
                }
                i.__options.triggerClose.originClick &&
                  i._$origin.on(
                    'click.' + i.__namespace + '-triggerClose',
                    function (e) {
                      i._touchIsTouchEvent(e) ||
                        i._touchIsEmulatedEvent(e) ||
                        i._close(e)
                    }
                  ),
                  (i.__options.triggerClose.click ||
                    (i.__options.triggerClose.tap && E.hasTouchCapability)) &&
                    setTimeout(function () {
                      if ('closed' != i.__state) {
                        var e = '',
                          t = $(E.window.document.body)
                        i.__options.triggerClose.click &&
                          (e += 'click.' + i.__namespace + '-triggerClose '),
                          i.__options.triggerClose.tap &&
                            E.hasTouchCapability &&
                            (e +=
                              'touchend.' + i.__namespace + '-triggerClose'),
                          t.on(e, function (e) {
                            i._touchIsMeaningfulEvent(e) &&
                              (i._touchRecordEvent(e),
                              (i.__options.interactive &&
                                $.contains(i._$tooltip[0], e.target)) ||
                                i._close(e))
                          }),
                          i.__options.triggerClose.tap &&
                            E.hasTouchCapability &&
                            t.on(
                              'touchstart.' + i.__namespace + '-triggerClose',
                              function (e) {
                                i._touchRecordEvent(e)
                              }
                            )
                      }
                    }, 0),
                  i._trigger('ready'),
                  i.__options.functionReady &&
                    i.__options.functionReady.call(i, i, {
                      origin: i._$origin[0],
                      tooltip: i._$tooltip[0],
                    })
              }
              if (0 < i.__options.timer) {
                c = setTimeout(function () {
                  i._close()
                }, i.__options.timer + o)
                i.__timeouts.close.push(c)
              }
            }
          }
          return i
        },
        _openShortly: function (e) {
          var t = this,
            i = !0
          if (
            'stable' != t.__state &&
            'appearing' != t.__state &&
            !t.__timeouts.open &&
            (t._trigger({
              type: 'start',
              event: e,
              stop: function () {
                i = !1
              },
            }),
            i)
          ) {
            var n =
              0 == e.type.indexOf('touch')
                ? t.__options.delayTouch
                : t.__options.delay
            n[0]
              ? (t.__timeouts.open = setTimeout(function () {
                  ;(t.__timeouts.open = null),
                    t.__pointerIsOverOrigin && t._touchIsMeaningfulEvent(e)
                      ? (t._trigger('startend'), t._open(e))
                      : t._trigger('startcancel')
                }, n[0]))
              : (t._trigger('startend'), t._open(e))
          }
          return t
        },
        _optionsExtract: function (e, t) {
          var n = this,
            i = $.extend(!0, {}, t),
            o = n.__options[e]
          return (
            o ||
              ((o = {}),
              $.each(t, function (e, t) {
                var i = n.__options[e]
                void 0 !== i && (o[e] = i)
              })),
            $.each(i, function (e, t) {
              void 0 !== o[e] &&
                ('object' != typeof t ||
                t instanceof Array ||
                null == t ||
                'object' != typeof o[e] ||
                o[e] instanceof Array ||
                null == o[e]
                  ? (i[e] = o[e])
                  : $.extend(i[e], o[e]))
            }),
            i
          )
        },
        _plug: function (e) {
          var t = $.tooltipster._plugin(e)
          if (!t) throw new Error('The "' + e + '" plugin is not defined')
          return (
            t.instance && $.tooltipster.__bridge(t.instance, this, t.name), this
          )
        },
        _touchIsEmulatedEvent: function (e) {
          for (
            var t = !1,
              i = new Date().getTime(),
              n = this.__touchEvents.length - 1;
            0 <= n;
            n--
          ) {
            var o = this.__touchEvents[n]
            if (!(i - o.time < 500)) break
            o.target === e.target && (t = !0)
          }
          return t
        },
        _touchIsMeaningfulEvent: function (e) {
          return (
            (this._touchIsTouchEvent(e) && !this._touchSwiped(e.target)) ||
            (!this._touchIsTouchEvent(e) && !this._touchIsEmulatedEvent(e))
          )
        },
        _touchIsTouchEvent: function (e) {
          return 0 == e.type.indexOf('touch')
        },
        _touchRecordEvent: function (e) {
          return (
            this._touchIsTouchEvent(e) &&
              ((e.time = new Date().getTime()), this.__touchEvents.push(e)),
            this
          )
        },
        _touchSwiped: function (e) {
          for (var t = !1, i = this.__touchEvents.length - 1; 0 <= i; i--) {
            var n = this.__touchEvents[i]
            if ('touchmove' == n.type) {
              t = !0
              break
            }
            if ('touchstart' == n.type && e === n.target) break
          }
          return t
        },
        _trigger: function () {
          var e = Array.prototype.slice.apply(arguments)
          return (
            'string' == typeof e[0] && (e[0] = { type: e[0] }),
            (e[0].instance = this),
            (e[0].origin = this._$origin ? this._$origin[0] : null),
            (e[0].tooltip = this._$tooltip ? this._$tooltip[0] : null),
            this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, e),
            $.tooltipster._trigger.apply($.tooltipster, e),
            this.__$emitterPublic.trigger.apply(this.__$emitterPublic, e),
            this
          )
        },
        _unplug: function (i) {
          var n = this
          if (n[i]) {
            var e = $.tooltipster._plugin(i)
            e.instance &&
              $.each(e.instance, function (e, t) {
                n[e] && n[e].bridged === n[i] && delete n[e]
              }),
              n[i].__destroy && n[i].__destroy(),
              delete n[i]
          }
          return n
        },
        close: function (e) {
          return (
            this.__destroyed ? this.__destroyError() : this._close(null, e),
            this
          )
        },
        content: function (e) {
          var t = this
          if (void 0 === e) return t.__Content
          if (t.__destroyed) t.__destroyError()
          else if ((t.__contentSet(e), null !== t.__Content)) {
            if (
              'closed' !== t.__state &&
              (t.__contentInsert(), t.reposition(), t.__options.updateAnimation)
            )
              if (E.hasTransitions) {
                var i = t.__options.updateAnimation
                t._$tooltip.addClass('tooltipster-update-' + i),
                  setTimeout(function () {
                    'closed' != t.__state &&
                      t._$tooltip.removeClass('tooltipster-update-' + i)
                  }, 1e3)
              } else
                t._$tooltip.fadeTo(200, 0.5, function () {
                  'closed' != t.__state && t._$tooltip.fadeTo(200, 1)
                })
          } else t._close()
          return t
        },
        destroy: function () {
          var i = this
          if (i.__destroyed) i.__destroyError()
          else {
            'closed' != i.__state
              ? i.option('animationDuration', 0)._close(null, null, !0)
              : i.__timeoutsClear(),
              i._trigger('destroy'),
              (i.__destroyed = !0),
              i._$origin
                .removeData(i.__namespace)
                .off('.' + i.__namespace + '-triggerOpen'),
              $(E.window.document.body).off(
                '.' + i.__namespace + '-triggerOpen'
              )
            var e = i._$origin.data('tooltipster-ns')
            if (e)
              if (1 === e.length) {
                var t = null
                'previous' == i.__options.restoration
                  ? (t = i._$origin.data('tooltipster-initialTitle'))
                  : 'current' == i.__options.restoration &&
                    (t =
                      'string' == typeof i.__Content
                        ? i.__Content
                        : $('<div></div>').append(i.__Content).html()),
                  t && i._$origin.attr('title', t),
                  i._$origin.removeClass('tooltipstered'),
                  i._$origin
                    .removeData('tooltipster-ns')
                    .removeData('tooltipster-initialTitle')
              } else
                (e = $.grep(e, function (e, t) {
                  return e !== i.__namespace
                })),
                  i._$origin.data('tooltipster-ns', e)
            i._trigger('destroyed'),
              i._off(),
              i.off(),
              (i.__Content = null),
              (i.__$emitterPrivate = null),
              (i.__$emitterPublic = null),
              (i.__options.parent = null),
              (i._$origin = null),
              (i._$tooltip = null),
              ($.tooltipster.__instancesLatestArr = $.grep(
                $.tooltipster.__instancesLatestArr,
                function (e, t) {
                  return i !== e
                }
              )),
              clearInterval(i.__garbageCollector)
          }
          return i
        },
        disable: function () {
          return (
            this.__destroyed
              ? this.__destroyError()
              : (this._close(), (this.__enabled = !1)),
            this
          )
        },
        elementOrigin: function () {
          return this.__destroyed
            ? void this.__destroyError()
            : this._$origin[0]
        },
        elementTooltip: function () {
          return this._$tooltip ? this._$tooltip[0] : null
        },
        enable: function () {
          return (this.__enabled = !0), this
        },
        hide: function (e) {
          return this.close(e)
        },
        instance: function () {
          return this
        },
        off: function () {
          return (
            this.__destroyed ||
              this.__$emitterPublic.off.apply(
                this.__$emitterPublic,
                Array.prototype.slice.apply(arguments)
              ),
            this
          )
        },
        on: function () {
          return (
            this.__destroyed
              ? this.__destroyError()
              : this.__$emitterPublic.on.apply(
                  this.__$emitterPublic,
                  Array.prototype.slice.apply(arguments)
                ),
            this
          )
        },
        one: function () {
          return (
            this.__destroyed
              ? this.__destroyError()
              : this.__$emitterPublic.one.apply(
                  this.__$emitterPublic,
                  Array.prototype.slice.apply(arguments)
                ),
            this
          )
        },
        open: function (e) {
          return (
            this.__destroyed ? this.__destroyError() : this._open(null, e), this
          )
        },
        option: function (e, t) {
          return void 0 === t
            ? this.__options[e]
            : (this.__destroyed
                ? this.__destroyError()
                : ((this.__options[e] = t),
                  this.__optionsFormat(),
                  0 <=
                    $.inArray(e, ['trigger', 'triggerClose', 'triggerOpen']) &&
                    this.__prepareOrigin(),
                  'selfDestruction' === e && this.__prepareGC()),
              this)
        },
        reposition: function (e, t) {
          var i = this
          return (
            i.__destroyed
              ? i.__destroyError()
              : 'closed' != i.__state &&
                u(i._$origin) &&
                (t || u(i._$tooltip)) &&
                (t || i._$tooltip.detach(),
                (i.__Geometry = i.__geometry()),
                i._trigger({
                  type: 'reposition',
                  event: e,
                  helper: { geo: i.__Geometry },
                })),
            i
          )
        },
        show: function (e) {
          return this.open(e)
        },
        status: function () {
          return {
            destroyed: this.__destroyed,
            enabled: this.__enabled,
            open: 'closed' !== this.__state,
            state: this.__state,
          }
        },
        triggerHandler: function () {
          return (
            this.__destroyed
              ? this.__destroyError()
              : this.__$emitterPublic.triggerHandler.apply(
                  this.__$emitterPublic,
                  Array.prototype.slice.apply(arguments)
                ),
            this
          )
        },
      }),
      ($.fn.tooltipster = function () {
        var o = Array.prototype.slice.apply(arguments),
          n =
            'You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.'
        if (0 === this.length) return this
        if ('string' == typeof o[0]) {
          var s = '#*$~&'
          return (
            this.each(function () {
              var e = $(this).data('tooltipster-ns'),
                t = e ? $(this).data(e[0]) : null
              if (!t)
                throw new Error(
                  'You called Tooltipster\'s "' +
                    o[0] +
                    '" method on an uninitialized element'
                )
              if ('function' != typeof t[o[0]])
                throw new Error('Unknown method "' + o[0] + '"')
              1 < this.length &&
                'content' == o[0] &&
                (o[1] instanceof $ ||
                  ('object' == typeof o[1] && null != o[1] && o[1].tagName)) &&
                !t.__options.contentCloning &&
                t.__options.debug &&
                console.log(n)
              var i = t[o[0]](o[1], o[2])
              return i !== t || 'instance' === o[0] ? ((s = i), !1) : void 0
            }),
            '#*$~&' !== s ? s : this
          )
        }
        $.tooltipster.__instancesLatestArr = []
        var e = o[0] && void 0 !== o[0].multiple,
          r = (e && o[0].multiple) || (!e && d.multiple),
          t = o[0] && void 0 !== o[0].content,
          i = (t && o[0].content) || (!t && d.content),
          a = o[0] && void 0 !== o[0].contentCloning,
          l = (a && o[0].contentCloning) || (!a && d.contentCloning),
          c = o[0] && void 0 !== o[0].debug,
          u = (c && o[0].debug) || (!c && d.debug)
        return (
          1 < this.length &&
            (i instanceof $ ||
              ('object' == typeof i && null != i && i.tagName)) &&
            !l &&
            u &&
            console.log(n),
          this.each(function () {
            var e = !1,
              t = $(this),
              i = t.data('tooltipster-ns'),
              n = null
            i
              ? r
                ? (e = !0)
                : u &&
                  (console.log(
                    'Tooltipster: one or more tooltips are already attached to the element below. Ignoring.'
                  ),
                  console.log(this))
              : (e = !0),
              e &&
                ((n = new $.Tooltipster(this, o[0])),
                i || (i = []),
                i.push(n.__namespace),
                t.data('tooltipster-ns', i),
                t.data(n.__namespace, n),
                n.__options.functionInit &&
                  n.__options.functionInit.call(n, n, { origin: this }),
                n._trigger('init')),
              $.tooltipster.__instancesLatestArr.push(n)
          }),
          this
        )
      }),
      (t.prototype = {
        __init: function (e) {
          ;(this.__$tooltip = e),
            this.__$tooltip
              .css({
                left: 0,
                overflow: 'hidden',
                position: 'absolute',
                top: 0,
              })
              .find('.tooltipster-content')
              .css('overflow', 'auto'),
            (this.$container = $('<div class="tooltipster-ruler"></div>')
              .append(this.__$tooltip)
              .appendTo(E.window.document.body))
        },
        __forceRedraw: function () {
          var e = this.__$tooltip.parent()
          this.__$tooltip.detach(), this.__$tooltip.appendTo(e)
        },
        constrain: function (e, t) {
          return (
            (this.constraints = { width: e, height: t }),
            this.__$tooltip.css({
              display: 'block',
              height: '',
              overflow: 'auto',
              width: e,
            }),
            this
          )
        },
        destroy: function () {
          this.__$tooltip
            .detach()
            .find('.tooltipster-content')
            .css({ display: '', overflow: '' }),
            this.$container.remove()
        },
        free: function () {
          return (
            (this.constraints = null),
            this.__$tooltip.css({
              display: '',
              height: '',
              overflow: 'visible',
              width: '',
            }),
            this
          )
        },
        measure: function () {
          this.__forceRedraw()
          var e = this.__$tooltip[0].getBoundingClientRect(),
            t = {
              size: {
                height: e.height || e.bottom - e.top,
                width: e.width || e.right - e.left,
              },
            }
          if (this.constraints) {
            var i = this.__$tooltip.find('.tooltipster-content'),
              n = this.__$tooltip.outerHeight(),
              o = i[0].getBoundingClientRect(),
              s = {
                height: n <= this.constraints.height,
                width:
                  e.width <= this.constraints.width &&
                  o.width >= i[0].scrollWidth - 1,
              }
            t.fits = s.height && s.width
          }
          return (
            E.IE &&
              E.IE <= 11 &&
              t.size.width !== E.window.document.documentElement.clientWidth &&
              (t.size.width = Math.ceil(t.size.width) + 1),
            t
          )
        },
      })
    var i = navigator.userAgent.toLowerCase()
    ;-1 != i.indexOf('msie')
      ? (E.IE = parseInt(i.split('msie')[1]))
      : -1 !== i.toLowerCase().indexOf('trident') && -1 !== i.indexOf(' rv:11')
      ? (E.IE = 11)
      : -1 != i.toLowerCase().indexOf('edge/') &&
        (E.IE = parseInt(i.toLowerCase().split('edge/')[1]))
    var n = 'tooltipster.sideTip'
    return (
      $.tooltipster._plugin({
        name: n,
        instance: {
          __defaults: function () {
            return {
              arrow: !0,
              distance: 6,
              functionPosition: null,
              maxWidth: null,
              minIntersection: 16,
              minWidth: 0,
              position: null,
              side: 'top',
              viewportAware: !0,
            }
          },
          __init: function (e) {
            var t = this
            ;(t.__instance = e),
              (t.__namespace =
                'tooltipster-sideTip-' + Math.round(1e6 * Math.random())),
              (t.__previousState = 'closed'),
              t.__options,
              t.__optionsFormat(),
              t.__instance._on('state.' + t.__namespace, function (e) {
                'closed' == e.state
                  ? t.__close()
                  : 'appearing' == e.state &&
                    'closed' == t.__previousState &&
                    t.__create(),
                  (t.__previousState = e.state)
              }),
              t.__instance._on('options.' + t.__namespace, function () {
                t.__optionsFormat()
              }),
              t.__instance._on('reposition.' + t.__namespace, function (e) {
                t.__reposition(e.event, e.helper)
              })
          },
          __close: function () {
            this.__instance.content() instanceof $ &&
              this.__instance.content().detach(),
              this.__instance._$tooltip.remove(),
              (this.__instance._$tooltip = null)
          },
          __create: function () {
            var e = $(
              '<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>'
            )
            this.__options.arrow ||
              e
                .find('.tooltipster-box')
                .css('margin', 0)
                .end()
                .find('.tooltipster-arrow')
                .hide(),
              this.__options.minWidth &&
                e.css('min-width', this.__options.minWidth + 'px'),
              this.__options.maxWidth &&
                e.css('max-width', this.__options.maxWidth + 'px'),
              (this.__instance._$tooltip = e),
              this.__instance._trigger('created')
          },
          __destroy: function () {
            this.__instance._off('.' + self.__namespace)
          },
          __optionsFormat: function () {
            var e = this
            if (
              ((e.__options = e.__instance._optionsExtract(n, e.__defaults())),
              e.__options.position && (e.__options.side = e.__options.position),
              'object' != typeof e.__options.distance &&
                (e.__options.distance = [e.__options.distance]),
              e.__options.distance.length < 4 &&
                (void 0 === e.__options.distance[1] &&
                  (e.__options.distance[1] = e.__options.distance[0]),
                void 0 === e.__options.distance[2] &&
                  (e.__options.distance[2] = e.__options.distance[0]),
                void 0 === e.__options.distance[3] &&
                  (e.__options.distance[3] = e.__options.distance[1]),
                (e.__options.distance = {
                  top: e.__options.distance[0],
                  right: e.__options.distance[1],
                  bottom: e.__options.distance[2],
                  left: e.__options.distance[3],
                })),
              'string' == typeof e.__options.side)
            ) {
              ;(e.__options.side = [
                e.__options.side,
                { top: 'bottom', right: 'left', bottom: 'top', left: 'right' }[
                  e.__options.side
                ],
              ]),
                'left' == e.__options.side[0] || 'right' == e.__options.side[0]
                  ? e.__options.side.push('top', 'bottom')
                  : e.__options.side.push('right', 'left')
            }
            6 === $.tooltipster._env.IE &&
              !0 !== e.__options.arrow &&
              (e.__options.arrow = !1)
          },
          __reposition: function (l, c) {
            var t,
              u = this,
              d = u.__targetFind(c),
              p = []
            u.__instance._$tooltip.detach()
            var i = u.__instance._$tooltip.clone(),
              h = $.tooltipster._getRuler(i),
              f = !1,
              e = u.__instance.option('animation')
            switch (
              (e && i.removeClass('tooltipster-' + e),
              $.each(['window', 'document'], function (e, o) {
                var s = null
                if (
                  (u.__instance._trigger({
                    container: o,
                    helper: c,
                    satisfied: f,
                    takeTest: function (e) {
                      s = e
                    },
                    results: p,
                    type: 'positionTest',
                  }),
                  1 == s ||
                    (0 != s &&
                      0 == f &&
                      ('window' != o || u.__options.viewportAware)))
                )
                  for (e = 0; e < u.__options.side.length; e++) {
                    var r = { horizontal: 0, vertical: 0 },
                      a = u.__options.side[e]
                    'top' == a || 'bottom' == a
                      ? (r.vertical = u.__options.distance[a])
                      : (r.horizontal = u.__options.distance[a]),
                      u.__sideChange(i, a),
                      $.each(['natural', 'constrained'], function (e, t) {
                        if (
                          ((s = null),
                          u.__instance._trigger({
                            container: o,
                            event: l,
                            helper: c,
                            mode: t,
                            results: p,
                            satisfied: f,
                            side: a,
                            takeTest: function (e) {
                              s = e
                            },
                            type: 'positionTest',
                          }),
                          1 == s || (0 != s && 0 == f))
                        ) {
                          var i = {
                              container: o,
                              distance: r,
                              fits: null,
                              mode: t,
                              outerSize: null,
                              side: a,
                              size: null,
                              target: d[a],
                              whole: null,
                            },
                            n = (
                              'natural' == t
                                ? h.free()
                                : h.constrain(
                                    c.geo.available[o][a].width - r.horizontal,
                                    c.geo.available[o][a].height - r.vertical
                                  )
                            ).measure()
                          if (
                            ((i.size = n.size),
                            (i.outerSize = {
                              height: n.size.height + r.vertical,
                              width: n.size.width + r.horizontal,
                            }),
                            'natural' == t
                              ? c.geo.available[o][a].width >=
                                  i.outerSize.width &&
                                c.geo.available[o][a].height >=
                                  i.outerSize.height
                                ? (i.fits = !0)
                                : (i.fits = !1)
                              : (i.fits = n.fits),
                            'window' == o &&
                              (i.fits
                                ? (i.whole =
                                    'top' == a || 'bottom' == a
                                      ? c.geo.origin.windowOffset.right >=
                                          u.__options.minIntersection &&
                                        c.geo.window.size.width -
                                          c.geo.origin.windowOffset.left >=
                                          u.__options.minIntersection
                                      : c.geo.origin.windowOffset.bottom >=
                                          u.__options.minIntersection &&
                                        c.geo.window.size.height -
                                          c.geo.origin.windowOffset.top >=
                                          u.__options.minIntersection)
                                : (i.whole = !1)),
                            p.push(i),
                            i.whole)
                          )
                            f = !0
                          else if (
                            'natural' == i.mode &&
                            (i.fits ||
                              i.size.width <= c.geo.available[o][a].width)
                          )
                            return !1
                        }
                      })
                  }
              }),
              u.__instance._trigger({
                edit: function (e) {
                  p = e
                },
                event: l,
                helper: c,
                results: p,
                type: 'positionTested',
              }),
              p.sort(function (e, t) {
                return e.whole && !t.whole
                  ? -1
                  : !e.whole && t.whole
                  ? 1
                  : e.whole && t.whole
                  ? (i = u.__options.side.indexOf(e.side)) <
                    (n = u.__options.side.indexOf(t.side))
                    ? -1
                    : n < i
                    ? 1
                    : 'natural' == e.mode
                    ? -1
                    : 1
                  : e.fits && !t.fits
                  ? -1
                  : !e.fits && t.fits
                  ? 1
                  : e.fits && t.fits
                  ? (i = u.__options.side.indexOf(e.side)) <
                    (n = u.__options.side.indexOf(t.side))
                    ? -1
                    : n < i
                    ? 1
                    : 'natural' == e.mode
                    ? -1
                    : 1
                  : 'document' == e.container &&
                    'bottom' == e.side &&
                    'natural' == e.mode
                  ? -1
                  : 1
                var i, n
              }),
              ((t = p[0]).coord = {}),
              t.side)
            ) {
              case 'left':
              case 'right':
                t.coord.top = Math.floor(t.target - t.size.height / 2)
                break
              case 'bottom':
              case 'top':
                t.coord.left = Math.floor(t.target - t.size.width / 2)
            }
            switch (t.side) {
              case 'left':
                t.coord.left =
                  c.geo.origin.windowOffset.left - t.outerSize.width
                break
              case 'right':
                t.coord.left =
                  c.geo.origin.windowOffset.right + t.distance.horizontal
                break
              case 'top':
                t.coord.top = c.geo.origin.windowOffset.top - t.outerSize.height
                break
              case 'bottom':
                t.coord.top =
                  c.geo.origin.windowOffset.bottom + t.distance.vertical
            }
            'window' == t.container
              ? 'top' == t.side || 'bottom' == t.side
                ? t.coord.left < 0
                  ? 0 <=
                    c.geo.origin.windowOffset.right -
                      this.__options.minIntersection
                    ? (t.coord.left = 0)
                    : (t.coord.left =
                        c.geo.origin.windowOffset.right -
                        this.__options.minIntersection -
                        1)
                  : t.coord.left > c.geo.window.size.width - t.size.width &&
                    (c.geo.origin.windowOffset.left +
                      this.__options.minIntersection <=
                    c.geo.window.size.width
                      ? (t.coord.left = c.geo.window.size.width - t.size.width)
                      : (t.coord.left =
                          c.geo.origin.windowOffset.left +
                          this.__options.minIntersection +
                          1 -
                          t.size.width))
                : t.coord.top < 0
                ? 0 <=
                  c.geo.origin.windowOffset.bottom -
                    this.__options.minIntersection
                  ? (t.coord.top = 0)
                  : (t.coord.top =
                      c.geo.origin.windowOffset.bottom -
                      this.__options.minIntersection -
                      1)
                : t.coord.top > c.geo.window.size.height - t.size.height &&
                  (c.geo.origin.windowOffset.top +
                    this.__options.minIntersection <=
                  c.geo.window.size.height
                    ? (t.coord.top = c.geo.window.size.height - t.size.height)
                    : (t.coord.top =
                        c.geo.origin.windowOffset.top +
                        this.__options.minIntersection +
                        1 -
                        t.size.height))
              : (t.coord.left > c.geo.window.size.width - t.size.width &&
                  (t.coord.left = c.geo.window.size.width - t.size.width),
                t.coord.left < 0 && (t.coord.left = 0)),
              u.__sideChange(i, t.side),
              (c.tooltipClone = i[0]),
              (c.tooltipParent = u.__instance.option('parent').parent[0]),
              (c.mode = t.mode),
              (c.whole = t.whole),
              (c.origin = u.__instance._$origin[0]),
              (c.tooltip = u.__instance._$tooltip[0]),
              delete t.container,
              delete t.fits,
              delete t.mode,
              delete t.outerSize,
              delete t.whole,
              (t.distance = t.distance.horizontal || t.distance.vertical)
            var n,
              o,
              s,
              r = $.extend(!0, {}, t)
            if (
              (u.__instance._trigger({
                edit: function (e) {
                  t = e
                },
                event: l,
                helper: c,
                position: r,
                type: 'position',
              }),
              u.__options.functionPosition)
            ) {
              var a = u.__options.functionPosition.call(u, u.__instance, c, r)
              a && (t = a)
            }
            h.destroy(),
              (o =
                'top' == t.side || 'bottom' == t.side
                  ? ((n = { prop: 'left', val: t.target - t.coord.left }),
                    t.size.width - this.__options.minIntersection)
                  : ((n = { prop: 'top', val: t.target - t.coord.top }),
                    t.size.height - this.__options.minIntersection)),
              n.val < this.__options.minIntersection
                ? (n.val = this.__options.minIntersection)
                : n.val > o && (n.val = o),
              (s = c.geo.origin.fixedLineage
                ? c.geo.origin.windowOffset
                : {
                    left:
                      c.geo.origin.windowOffset.left + c.geo.window.scroll.left,
                    top:
                      c.geo.origin.windowOffset.top + c.geo.window.scroll.top,
                  }),
              (t.coord = {
                left: s.left + (t.coord.left - c.geo.origin.windowOffset.left),
                top: s.top + (t.coord.top - c.geo.origin.windowOffset.top),
              }),
              u.__sideChange(u.__instance._$tooltip, t.side),
              c.geo.origin.fixedLineage
                ? u.__instance._$tooltip.css('position', 'fixed')
                : u.__instance._$tooltip.css('position', ''),
              u.__instance._$tooltip
                .css({
                  left: t.coord.left,
                  top: t.coord.top,
                  height: t.size.height,
                  width: t.size.width,
                })
                .find('.tooltipster-arrow')
                .css({ left: '', top: '' })
                .css(n.prop, n.val),
              u.__instance._$tooltip.appendTo(u.__instance.option('parent')),
              u.__instance._trigger({
                type: 'repositioned',
                event: l,
                position: t,
              })
          },
          __sideChange: function (e, t) {
            e.removeClass('tooltipster-bottom')
              .removeClass('tooltipster-left')
              .removeClass('tooltipster-right')
              .removeClass('tooltipster-top')
              .addClass('tooltipster-' + t)
          },
          __targetFind: function (e) {
            var t = {},
              i = this.__instance._$origin[0].getClientRects()
            1 < i.length &&
              1 == this.__instance._$origin.css('opacity') &&
              (this.__instance._$origin.css('opacity', 0.99),
              (i = this.__instance._$origin[0].getClientRects()),
              this.__instance._$origin.css('opacity', 1))
            if (i.length < 2)
              (t.top = Math.floor(
                e.geo.origin.windowOffset.left + e.geo.origin.size.width / 2
              )),
                (t.bottom = t.top),
                (t.left = Math.floor(
                  e.geo.origin.windowOffset.top + e.geo.origin.size.height / 2
                )),
                (t.right = t.left)
            else {
              var n = i[0]
              ;(t.top = Math.floor(n.left + (n.right - n.left) / 2)),
                (n = 2 < i.length ? i[Math.ceil(i.length / 2) - 1] : i[0]),
                (t.right = Math.floor(n.top + (n.bottom - n.top) / 2)),
                (n = i[i.length - 1]),
                (t.bottom = Math.floor(n.left + (n.right - n.left) / 2)),
                (n =
                  2 < i.length
                    ? i[Math.ceil((i.length + 1) / 2) - 1]
                    : i[i.length - 1]),
                (t.left = Math.floor(n.top + (n.bottom - n.top) / 2))
            }
            return t
          },
        },
      }),
      $
    )
  })
//# sourceMappingURL=maps/vendor.js.map

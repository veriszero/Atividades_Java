/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
/*na pagina principal o stackoverflow e utilizado essa api
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>*/

/* como ainda nao tenho familiaridade com a javascript, mas reconheci algumas funcoes e variaveis 
visto que a sintaxe parace em alguns aspectos com c e java. Utilizalção e criação de objetos e operadores ternários
*/

/*!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = []
      , d = a.document
      , e = c.slice
      , f = c.concat
      , g = c.push
      , h = c.indexOf
      , i = {}
      , j = i.toString
      , k = i.hasOwnProperty
      , l = {}
      , m = "1.12.4"
      , n = function(a, b) {
        return new n.fn.init(a,b)
    }
      , o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , p = /^-ms-/
      , q = /-([\da-z])/gi
      , r = function(a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    },
    n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || n.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e)
                    a = g[d],
                    c = e[d],
                    g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1,
                    f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {},
                    g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }
    ,
    n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        }
        ,
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a))
                return !1;
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (c) {
                return !1
            }
            if (!l.ownFirst)
                for (b in a)
                    return k.call(a, b);
            for (b in a)
                ;
            return void 0 === b || k.call(a, b)
        },
*/
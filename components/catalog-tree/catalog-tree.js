(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/catalog-tree/catalog-tree"], {
    "549a": function(t, n, e) {},
    "66dc": function(t, n, e) {
      "use strict";
      var a = e("549a"),
        c = e.n(a);
      c.a
    },
    "9f9e": function(t, n, e) {
      "use strict";
      e.d(n, "b", (function() {
        return a
      })), e.d(n, "c", (function() {
        return c
      })), e.d(n, "a", (function() {}));
      var a = function() {
          var t = this.$createElement;
          this._self._c
        },
        c = []
    },
    b1bb: function(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("d0dd"),
        c = e.n(a);
      for (var i in a)["default"].indexOf(i) < 0 && function(t) {
        e.d(n, t, (function() {
          return a[t]
        }))
      }(i);
      n["default"] = c.a
    },
    c0f2: function(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("9f9e"),
        c = e("b1bb");
      for (var i in c)["default"].indexOf(i) < 0 && function(t) {
        e.d(n, t, (function() {
          return c[t]
        }))
      }(i);
      e("66dc");
      var o = e("828b"),
        u = Object(o["a"])(c["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], void 0);
      n["default"] = u.exports
    },
    d0dd: function(t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = {
        name: "catalog-tree",
        props: {
          catalogList: {
            type: Array,
            default: []
          }
        },
        watch: {
          catalogList: function(t) {
            this.list = t
          }
        },
        data: function() {
          return {
            list: []
          }
        },
        mounted: function() {
          this.list = this.catalogList
        },
        methods: {
          handleToggle: function(t) {
            t.children.length > 0 && (t.toggle = !t.toggle)
          },
          handleSelectItem: function(t) {
            t.children.length < 1 && this.$emit("returnCatalogItem", t)
          }
        }
      };
      n.default = a
    }
  }
]);;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  'components/catalog-tree/catalog-tree-create-component',
  {
    'components/catalog-tree/catalog-tree-create-component': (function(module, exports, __webpack_require__) {
      __webpack_require__('df3c')['createComponent'](__webpack_require__("c0f2"))
    })
  },
  [
    ['components/catalog-tree/catalog-tree-create-component']
  ]
]);
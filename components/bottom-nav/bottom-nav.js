(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/bottom-nav/bottom-nav"], {
    "07e6": function(n, t, e) {
      "use strict";
      e.r(t);
      var a = e("68aa"),
        u = e.n(a);
      for (var o in a)["default"].indexOf(o) < 0 && function(n) {
        e.d(t, n, (function() {
          return a[n]
        }))
      }(o);
      t["default"] = u.a
    },
    "089e": function(n, t, e) {},
    "24a9": function(n, t, e) {
      "use strict";
      e.r(t);
      var a = e("2a3f"),
        u = e("07e6");
      for (var o in u)["default"].indexOf(o) < 0 && function(n) {
        e.d(t, n, (function() {
          return u[n]
        }))
      }(o);
      e("f89c");
      var r = e("828b"),
        i = Object(r["a"])(u["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], void 0);
      t["default"] = i.exports
    },
    "2a3f": function(n, t, e) {
      "use strict";
      e.d(t, "b", (function() {
        return a
      })), e.d(t, "c", (function() {
        return u
      })), e.d(t, "a", (function() {}));
      var a = function() {
          var n = this.$createElement;
          this._self._c
        },
        u = []
    },
    "68aa": function(n, t, e) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = {
        name: "bottom-nav",
        data: function() {
          return {}
        },
        methods: {
          openCatalog: function() {
            this.$emit("returnOpenCatalog")
          },
          openSearch: function() {
            this.$emit("returnOpenSearch")
          },
          openShare: function() {
            this.$emit("returnOpenShare")
          }
        }
      }
    },
    f89c: function(n, t, e) {
      "use strict";
      var a = e("089e"),
        u = e.n(a);
      u.a
    }
  }
]);;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  'components/bottom-nav/bottom-nav-create-component',
  {
    'components/bottom-nav/bottom-nav-create-component': (function(module, exports, __webpack_require__) {
      __webpack_require__('df3c')['createComponent'](__webpack_require__("24a9"))
    })
  },
  [
    ['components/bottom-nav/bottom-nav-create-component']
  ]
]);
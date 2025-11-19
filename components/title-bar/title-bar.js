(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/title-bar/title-bar"], {
    "01a4": function(t, n, e) {
      "use strict";
      e.d(n, "b", (function() {
        return a
      })), e.d(n, "c", (function() {
        return u
      })), e.d(n, "a", (function() {}));
      var a = function() {
          var t = this.$createElement;
          this._self._c
        },
        u = []
    },
    4161: function(t, n, e) {
      "use strict";
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var e = {
          name: "title-bar",
          props: {
            showBack: {
              type: Boolean,
              default: !0
            },
            showHome: {
              type: Boolean,
              default: !0
            }
          },
          data: function() {
            return {}
          },
          methods: {
            handleBack: function() {
              t.navigateBack({})
            },
            handleBackHome: function() {
              t.switchTab({
                url: "/pages/index/index"
              })
            }
          }
        };
        n.default = e
      }).call(this, e("df3c")["default"])
    },
    "43c4": function(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("01a4"),
        u = e("5b6c");
      for (var c in u)["default"].indexOf(c) < 0 && function(t) {
        e.d(n, t, (function() {
          return u[t]
        }))
      }(c);
      e("687a");
      var o = e("828b"),
        i = Object(o["a"])(u["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], void 0);
      n["default"] = i.exports
    },
    "5b6c": function(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("4161"),
        u = e.n(a);
      for (var c in a)["default"].indexOf(c) < 0 && function(t) {
        e.d(n, t, (function() {
          return a[t]
        }))
      }(c);
      n["default"] = u.a
    },
    "687a": function(t, n, e) {
      "use strict";
      var a = e("9ead"),
        u = e.n(a);
      u.a
    },
    "9ead": function(t, n, e) {}
  }
]);;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  'components/title-bar/title-bar-create-component',
  {
    'components/title-bar/title-bar-create-component': (function(module, exports, __webpack_require__) {
      __webpack_require__('df3c')['createComponent'](__webpack_require__("43c4"))
    })
  },
  [
    ['components/title-bar/title-bar-create-component']
  ]
]);
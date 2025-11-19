(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/toolbar/toolbar"], {
    1918: function(t, n, e) {
      "use strict";
      e.r(n);
      var o = e("729e"),
        i = e.n(o);
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        e.d(n, t, (function() {
          return o[t]
        }))
      }(a);
      n["default"] = i.a
    },
    "55c6": function(t, n, e) {},
    "729e": function(t, n, e) {
      "use strict";
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var e = {
          name: "toolbar",
          props: {
            isCollected: {
              type: Boolean,
              default: !1
            },
            showBackTop: {
              type: Boolean,
              default: !1
            },
            pages: {
              type: String,
              default: ""
            }
          },
          data: function() {
            return {}
          },
          methods: {
            backToHome: function() {
              t.switchTab({
                url: "/pages/index/index"
              })
            },
            openTextPanel: function() {
              this.$emit("returnTextPanel")
            },
            copyLink: function() {
              this.$emit("returnCopyLink")
            },
            playVideo: function() {
              this.$emit("returnPlayVideo")
            },
            openCollectPanel: function() {
              this.$emit("returnCollectPanel")
            },
            backToTop: function() {
              this.$emit("returnBackToTop")
            }
          }
        };
        n.default = e
      }).call(this, e("df3c")["default"])
    },
    "7c73": function(t, n, e) {
      "use strict";
      var o = e("55c6"),
        i = e.n(o);
      i.a
    },
    adb2: function(t, n, e) {
      "use strict";
      e.d(n, "b", (function() {
        return o
      })), e.d(n, "c", (function() {
        return i
      })), e.d(n, "a", (function() {}));
      var o = function() {
          var t = this.$createElement;
          this._self._c
        },
        i = []
    },
    cd12: function(t, n, e) {
      "use strict";
      e.r(n);
      var o = e("adb2"),
        i = e("1918");
      for (var a in i)["default"].indexOf(a) < 0 && function(t) {
        e.d(n, t, (function() {
          return i[t]
        }))
      }(a);
      e("7c73");
      var u = e("828b"),
        c = Object(u["a"])(i["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], void 0);
      n["default"] = c.exports
    }
  }
]);;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  'components/toolbar/toolbar-create-component',
  {
    'components/toolbar/toolbar-create-component': (function(module, exports, __webpack_require__) {
      __webpack_require__('df3c')['createComponent'](__webpack_require__("cd12"))
    })
  },
  [
    ['components/toolbar/toolbar-create-component']
  ]
]);
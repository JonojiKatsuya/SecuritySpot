(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/popup-share/popup-share"], {
    "0298": function(t, n, e) {
      "use strict";
      e.d(n, "b", (function() {
        return i
      })), e.d(n, "c", (function() {
        return a
      })), e.d(n, "a", (function() {}));
      var i = function() {
          var t = this.$createElement;
          this._self._c
        },
        a = []
    },
    "0894": function(t, n, e) {
      "use strict";
      var i = e("f58d"),
        a = e.n(i);
      a.a
    },
    "828c": function(t, n, e) {
      "use strict";
      e.r(n);
      var i = e("a7d3"),
        a = e.n(i);
      for (var u in i)["default"].indexOf(u) < 0 && function(t) {
        e.d(n, t, (function() {
          return i[t]
        }))
      }(u);
      n["default"] = a.a
    },
    "9a01": function(t, n, e) {
      "use strict";
      e.r(n);
      var i = e("0298"),
        a = e("828c");
      for (var u in a)["default"].indexOf(u) < 0 && function(t) {
        e.d(n, t, (function() {
          return a[t]
        }))
      }(u);
      e("0894");
      var o = e("828b"),
        r = Object(o["a"])(a["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], void 0);
      n["default"] = r.exports
    },
    a7d3: function(t, n, e) {
      "use strict";
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var e = {
          name: "popup-share",
          data: function() {
            return {}
          },
          props: {
            gid: {
              type: String,
              default: ""
            },
            detailsTitle: {
              type: String,
              default: ""
            }
          },
          methods: {
            handleCancel: function() {
              this.$emit("returnCancel")
            },
            renderPoster: function() {
              t.navigateTo({
                url: "../poster/poster?gid=" + this.gid + "&&detailsTitle=" + this.detailsTitle
              })
            },
            copeLink: function() {
              t.setClipboardData({
                data: "https://icases.pkulaw.com/detail/" + this.$store.state.params.index + "/" + this.gid,
                success: function() {
                  t.showToast({
                    title: "链接已复制",
                    icon: "none"
                  })
                }
              })
            }
          }
        };
        n.default = e
      }).call(this, e("df3c")["default"])
    },
    f58d: function(t, n, e) {}
  }
]);;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  'components/popup-share/popup-share-create-component',
  {
    'components/popup-share/popup-share-create-component': (function(module, exports, __webpack_require__) {
      __webpack_require__('df3c')['createComponent'](__webpack_require__("9a01"))
    })
  },
  [
    ['components/popup-share/popup-share-create-component']
  ]
]);
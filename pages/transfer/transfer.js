(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/transfer/transfer"], {
    "127f": function(t, n, e) {
      "use strict";
      e.d(n, "b", (function() {
        return o
      })), e.d(n, "c", (function() {
        return i
      })), e.d(n, "a", (function() {
        return a
      }));
      var a = {
          titleBar: function() {
            return e.e("components/title-bar/title-bar").then(e.bind(null, "43c4"))
          }
        },
        o = function() {
          var t = this.$createElement;
          this._self._c
        },
        i = []
    },
    "3cd7": function(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("127f"),
        o = e("9865");
      for (var i in o)["default"].indexOf(i) < 0 && function(t) {
        e.d(n, t, (function() {
          return o[t]
        }))
      }(i);
      e("722b");
      var c = e("828b"),
        u = Object(c["a"])(o["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], void 0);
      n["default"] = u.exports
    },
    "4e30": function(t, n, e) {
      "use strict";
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var e = {
          data: function() {
            return {
              gid: ""
            }
          },
          onLoad: function(t) {
            console.log(t), this.gid = t.gid
          },
          mounted: function() {},
          methods: {
            handleCancel: function() {
              t.switchTab({
                url: "../index/index"
              })
            },
            checkHasToken: function() {
              this.$store.state.hasToken ? this.runApp() : this.getToken()
            },
            runApp: function(n) {
              n && n.url ? t.navigateTo({
                url: n.url
              }) : t.navigateTo({
                url: "../details/details?gid=" + this.gid
              })
            },
            getToken: function(n) {
              var e = this;
              t.getUserProfile({
                desc: "登录",
                success: function(a) {
                  t.setStorage({
                    key: "wxInfo",
                    data: a
                  }), e.$store.commit("SET_WXINFO", a), t.login({
                    success: function(a) {
                      t.setStorage({
                        key: "code",
                        data: a
                      }), e.$store.commit("SET_CODE", a), e.getServerData(n)
                    }
                  })
                },
                fail: function(n) {
                  t.showToast({
                    title: "登录授权失败",
                    icon: "none"
                  })
                }
              })
            },
            getServerData: function(n) {
              var e = this;
              this.$request("/auth/applet_user/login", "POST", {
                appId: this.$config.configs.appId,
                code: this.$store.state.code.code
              }).then((function(a) {
                t.setStorage({
                  key: "unionInfo",
                  data: a.data.data
                }), e.$store.commit("SET_UNIONINFO", a.data.data), t.setStorage({
                  key: "userInfo",
                  data: a.data.data
                }), e.$store.commit("SET_USERINFO", a.data.data), a.data.data.access_token && e.$store.commit("SET_HASTOKEN", !0), e.checkLoginStatus(n)
              })).catch((function(t) {
                console.log(t)
              }))
            },
            checkLoginStatus: function(n) {
              1 == this.$store.state.unionInfo.loginStatus ? t.navigateTo({
                url: "../login/login"
              }) : this.runApp(n)
            }
          }
        };
        n.default = e
      }).call(this, e("df3c")["default"])
    },
    "573f": function(t, n, e) {
      "use strict";
      (function(t, n) {
        var a = e("47a9");
        e("3288");
        a(e("3240"));
        var o = a(e("3cd7"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, n(o.default)
      }).call(this, e("3223")["default"], e("df3c")["createPage"])
    },
    "722b": function(t, n, e) {
      "use strict";
      var a = e("bf7c"),
        o = e.n(a);
      o.a
    },
    9865: function(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("4e30"),
        o = e.n(a);
      for (var i in a)["default"].indexOf(i) < 0 && function(t) {
        e.d(n, t, (function() {
          return a[t]
        }))
      }(i);
      n["default"] = o.a
    },
    bf7c: function(t, n, e) {}
  },
  [
    ["573f", "common/runtime", "common/vendor"]
  ]
]);
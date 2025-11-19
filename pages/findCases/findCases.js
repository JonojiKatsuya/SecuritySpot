(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/findCases/findCases"], {
    "17a6": function(t, n, e) {},
    "19fc": function(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("5a85"),
        o = e("650c");
      for (var c in o)["default"].indexOf(c) < 0 && function(t) {
        e.d(n, t, (function() {
          return o[t]
        }))
      }(c);
      e("ed18");
      var i = e("828b"),
        r = Object(i["a"])(o["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], void 0);
      n["default"] = r.exports
    },
    "2b25": function(t, n, e) {
      "use strict";
      (function(t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var a = {
          components: {
            TitleBar: function() {
              e.e("components/title-bar/title-bar").then(function() {
                return resolve(e("43c4"))
              }.bind(null, e)).catch(e.oe)
            },
            SearchBar: function() {
              e.e("components/search-bar/search-bar").then(function() {
                return resolve(e("8789"))
              }.bind(null, e)).catch(e.oe)
            },
            CategoryTab: function() {
              e.e("components/category-tab/category-tab").then(function() {
                return resolve(e("27d1"))
              }.bind(null, e)).catch(e.oe)
            }
          },
          data: function() {
            return {
              total: 105983987,
              recommendArr: [{
                label: "北大法宝",
                icon: "../../static/search/icon_nav1.png",
                url: "",
                external: !0
              }, {
                label: "民法典",
                icon: "../../static/search/icon_nav2.png",
                url: "../mfd/mfd",
                external: !1
              }]
            }
          },
          onLoad: function() {
            this.checkToken()
          },
          onShow: function() {},
          mounted: function() {},
          onTabItemTap: function(n) {
            "pages/findCases/findCases" === n.pagePath && t.showModal({
              title: "提示",
              content: "系统维护中，暂不可用",
              showCancel: !1,
              confirmText: "我知道了",
              success: function(n) {
                n.confirm && t.switchTab({
                  url: "/pages/index/index"
                })
              }
            })
          },
          methods: {
            checkToken: function() {
              var n = this;
              t.getStorage({
                key: "userInfo",
                success: function(t) {
                  t.data.access_token && n.$store.commit("SET_HASTOKEN", !0)
                },
                fail: function(t) {
                  n.$store.commit("SET_HASTOKEN", !1)
                }
              })
            },
            linkToSearch: function() {
              this.$store.state.hasToken ? this.runApp() : this.getToken()
            },
            linkTo: function(n) {
              n.external ? t.navigateToMiniProgram({
                appId: this.$config.configs.fabaoAppId
              }) : this.$store.state.hasToken ? this.runApp(n) : this.getToken(n)
            },
            runApp: function(n) {
              n && n.url ? t.navigateTo({
                url: n.url
              }) : t.navigateTo({
                url: "../search/search"
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
        n.default = a
      }).call(this, e("df3c")["default"])
    },
    "522a": function(t, n, e) {
      "use strict";
      (function(t, n) {
        var a = e("47a9");
        e("3288");
        a(e("3240"));
        var o = a(e("19fc"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, n(o.default)
      }).call(this, e("3223")["default"], e("df3c")["createPage"])
    },
    "5a85": function(t, n, e) {
      "use strict";
      e.d(n, "b", (function() {
        return o
      })), e.d(n, "c", (function() {
        return c
      })), e.d(n, "a", (function() {
        return a
      }));
      var a = {
          titleBar: function() {
            return e.e("components/title-bar/title-bar").then(e.bind(null, "43c4"))
          },
          searchBar: function() {
            return e.e("components/search-bar/search-bar").then(e.bind(null, "8789"))
          }
        },
        o = function() {
          var t = this.$createElement;
          this._self._c
        },
        c = []
    },
    "650c": function(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("2b25"),
        o = e.n(a);
      for (var c in a)["default"].indexOf(c) < 0 && function(t) {
        e.d(n, t, (function() {
          return a[t]
        }))
      }(c);
      n["default"] = o.a
    },
    ed18: function(t, n, e) {
      "use strict";
      var a = e("17a6"),
        o = e.n(a);
      o.a
    }
  },
  [
    ["522a", "common/runtime", "common/vendor"]
  ]
]);
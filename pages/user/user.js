(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/user/user"], {
    "0b0a": function(t, e, a) {
      "use strict";
      a.r(e);
      var n = a("600b"),
        o = a.n(n);
      for (var s in n)["default"].indexOf(s) < 0 && function(t) {
        a.d(e, t, (function() {
          return n[t]
        }))
      }(s);
      e["default"] = o.a
    },
    "285e": function(t, e, a) {
      "use strict";
      a.d(e, "b", (function() {
        return n
      })), a.d(e, "c", (function() {
        return o
      })), a.d(e, "a", (function() {}));
      var n = function() {
          var t = this.$createElement;
          this._self._c
        },
        o = []
    },
    "600b": function(t, e, a) {
      "use strict";
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n = {
          data: function() {
            return {
              formData: {
                name: "LiMing",
                email: "dcloud@email.com"
              },
              listData: [{
                label: "我的收藏",
                url: "../user/collection",
                icon: a("a744")
              }, {
                label: "我的条件",
                url: "../user/condition",
                icon: a("7546")
              }, {
                label: "我的文书",
                url: "../index/causeHistory",
                icon: a("11ad")
              }, {
                label: "联系客服",
                url: "",
                icon: a("558a")
              }, {
                label: "关于我们",
                url: "../user/about",
                icon: a("7f67")
              }],
              rules: {
                name: {
                  rules: [{
                    required: !0,
                    errorMessage: "请输入姓名"
                  }, {
                    minLength: 3,
                    maxLength: 5,
                    errorMessage: "姓名长度在 {minLength} 到 {maxLength} 个字符"
                  }]
                },
                email: {
                  rules: [{
                    format: "email",
                    errorMessage: "请输入正确的邮箱地址"
                  }]
                }
              },
              userInfo: "",
              avatarUrl: "",
              nickName: "请登录"
            }
          },
          onTabItemTap: function() {
            var e = this;
            t.getStorage({
              key: "userInfo",
              success: function(a) {
                var n = a.data.access_token;
                t.getStorage({
                  key: "wxInfo",
                  success: function(t) {
                    n && (e.avatarUrl = t.data.userInfo.avatarUrl, e.nickName = t.data.userInfo.nickName, e.getUserInfoData())
                  }
                })
              }
            })
          },
          onLoad: function() {},
          mounted: function() {
            var e = this;
            t.getStorage({
              key: "causeUnionId",
              success: function(t) {
                t.data && (e.nickName = "已登录", e.$store.commit("SET_CAUSE_UNION_ID", t.data))
              }
            })
          },
          methods: {
            submit: function() {
              this.$refs.form.submit().then((function(t) {
                console.log("表单数据信息：", t)
              })).catch((function(t) {
                console.log("表单错误信息：", t)
              }))
            },
            getUserInfoData: function() {
              var t = this;
              this.userInfo || this.$request("/applet/applet_user/info", "GET", {}).then((function(e) {
                t.userInfo = e.data.data
              })).catch((function(t) {
                console.log(t)
              }))
            },
            handleSelect: function(e) {
              e.url && ("../index/causeHistory" == e.url && (this.$store.state.causeUnionId ? t.navigateTo({
                url: e.url
              }) : t.showModal({
                title: "提示",
                content: "请先登录后再进行操作",
                showCancel: !1,
                confirmText: "我知道了"
              })), ("../user/about" == e.url || this.$store.state.hasToken) && t.navigateTo({
                url: e.url
              }))
            },
            handleCheck: function() {
              this.$store.state.hasToken ? (this.avatarUrl = this.$store.state.userInfo.avatarUrl, this.nickName = this.$store.state.userInfo.nickName, this.getUserInfoData()) : this.$store.state.causeUnionId || this.getToken()
            },
            checkHasToken: function(e) {
              var a = this;
              t.getStorage({
                key: "userInfo",
                success: function(n) {
                  t.getStorage({
                    key: "wxInfo",
                    success: function(n) {
                      e ? t.navigateTo({
                        url: e.url
                      }) : (a.avatarUrl = n.data.userInfo.avatarUrl, a.nickName = n.data.userInfo.nickName, a.getUserInfoData())
                    }
                  })
                },
                fail: function(t) {
                  a.getToken()
                }
              })
            },
            getToken: function() {
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
                      }), e.$store.commit("SET_CODE", a), e.causeLogin()
                    }
                  })
                },
                fail: function(e) {
                  t.showToast({
                    title: "登录授权失败",
                    icon: "none"
                  })
                }
              })
            },
            causeLogin: function() {
              var e = this;
              t.showLoading({
                title: "加载中"
              }), this.$causeRequest("/applet/applet_user/weChatlogin", "POST", {
                appId: this.$config.configs.appId,
                code: this.$store.state.code.code
              }).then((function(a) {
                t.hideLoading(), 200 === a.data.code && (t.setStorage({
                  key: "causeUnionId",
                  data: a.data.data.unionId
                }), e.$store.commit("SET_CAUSE_UNION_ID", a.data.data.unionId), e.nickName = "已登录", e.avatarUrl = "/static/login/login-avatar.png")
              })).catch((function(e) {
                t.hideLoading(), t.showToast({
                  title: "服务器异常，请联系管理员！"
                })
              }))
            },
            getServerData: function(e) {
              var a = this;
              this.$request("/auth/applet_user/login", "POST", {
                appId: this.$config.configs.appId,
                code: this.$store.state.code.code
              }).then((function(e) {
                t.setStorage({
                  key: "unionInfo",
                  data: e.data.data
                }), a.$store.commit("SET_UNIONINFO", e.data.data), t.setStorage({
                  key: "userInfo",
                  data: e.data.data
                }), a.$store.commit("SET_USERINFO", e.data.data), e.data.data.access_token && a.$store.commit("SET_HASTOKEN", !0), a.checkLoginStatus()
              })).catch((function(t) {
                console.log(t)
              }))
            },
            checkLoginStatus: function() {
              1 == this.$store.state.unionInfo.loginStatus ? t.navigateTo({
                url: "../login/login"
              }) : (this.avatarUrl = this.$store.state.wxInfo.userInfo.avatarUrl, this.nickName = this.$store.state.wxInfo.userInfo.nickName, this.getUserInfoData())
            }
          }
        };
        e.default = n
      }).call(this, a("df3c")["default"])
    },
    "62b1": function(t, e, a) {
      "use strict";
      (function(t, e) {
        var n = a("47a9");
        a("3288");
        n(a("3240"));
        var o = n(a("9a69"));
        t.__webpack_require_UNI_MP_PLUGIN__ = a, e(o.default)
      }).call(this, a("3223")["default"], a("df3c")["createPage"])
    },
    "6d64": function(t, e, a) {
      "use strict";
      var n = a("fe10"),
        o = a.n(n);
      o.a
    },
    "9a69": function(t, e, a) {
      "use strict";
      a.r(e);
      var n = a("285e"),
        o = a("0b0a");
      for (var s in o)["default"].indexOf(s) < 0 && function(t) {
        a.d(e, t, (function() {
          return o[t]
        }))
      }(s);
      a("6d64");
      var i = a("828b"),
        r = Object(i["a"])(o["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], void 0);
      e["default"] = r.exports
    },
    fe10: function(t, e, a) {}
  },
  [
    ["62b1", "common/runtime", "common/vendor"]
  ]
]);
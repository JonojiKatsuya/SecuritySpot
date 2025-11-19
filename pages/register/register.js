(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/register/register"], {
    "35cb": function(e, t, r) {
      "use strict";
      r.d(t, "b", (function() {
        return o
      })), r.d(t, "c", (function() {
        return a
      })), r.d(t, "a", (function() {
        return n
      }));
      var n = {
          titleBar: function() {
            return r.e("components/title-bar/title-bar").then(r.bind(null, "43c4"))
          },
          uniForms: function() {
            return Promise.all([r.e("common/vendor"), r.e("components/uni-forms/uni-forms")]).then(r.bind(null, "31da"))
          },
          uniFormsItem: function() {
            return Promise.all([r.e("common/vendor"), r.e("components/uni-forms-item/uni-forms-item")]).then(r.bind(null, "89e8"))
          }
        },
        o = function() {
          var e = this.$createElement;
          this._self._c
        },
        a = []
    },
    "7d12": function(e, t, r) {
      "use strict";
      r.r(t);
      var n = r("da30"),
        o = r.n(n);
      for (var a in n)["default"].indexOf(a) < 0 && function(e) {
        r.d(t, e, (function() {
          return n[e]
        }))
      }(a);
      t["default"] = o.a
    },
    a539: function(e, t, r) {
      "use strict";
      r.r(t);
      var n = r("35cb"),
        o = r("7d12");
      for (var a in o)["default"].indexOf(a) < 0 && function(e) {
        r.d(t, e, (function() {
          return o[e]
        }))
      }(a);
      r("caf2");
      var i = r("828b"),
        s = Object(i["a"])(o["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], void 0);
      t["default"] = s.exports
    },
    caf2: function(e, t, r) {
      "use strict";
      var n = r("eb55"),
        o = r.n(n);
      o.a
    },
    da30: function(e, t, r) {
      "use strict";
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          components: {
            TitleBar: function() {
              r.e("components/title-bar/title-bar").then(function() {
                return resolve(r("43c4"))
              }.bind(null, r)).catch(r.oe)
            }
          },
          onLoad: function(e) {
            this.registerForm.appId = this.$config.configs.appId, this.registerForm.unionId = this.$store.state.unionInfo.unionId, this.registerForm.mobile = e.mobile, this.registerForm.captcha = e.captcha, this.registerForm.nickname = this.$store.state.wxInfo.userInfo.nickName, this.registerForm.avatarUrl = this.$store.state.wxInfo.userInfo.avatarUrl
          },
          onReady: function() {
            this.$refs.registerForm.setRules(this.registerRules)
          },
          data: function() {
            return {
              registerForm: {
                appId: "",
                unionId: "",
                mobile: "",
                captcha: "",
                password: "",
                confirm: "",
                name: "",
                email: "",
                employer: "",
                agreement: !1,
                nickname: "",
                avatarUrl: ""
              },
              registerRules: {
                password: {
                  rules: [{
                    required: !0,
                    errorMessage: "请输入密码"
                  }, {
                    minLength: 6,
                    maxLength: 18,
                    errorMessage: "密码长度在 {minLength} 到 {maxLength} 个字符"
                  }]
                },
                confirm: {
                  rules: [{
                    required: !0,
                    errorMessage: "请确认密码"
                  }, {
                    minLength: 6,
                    maxLength: 12,
                    errorMessage: "密码长度在 {minLength} 到 {maxLength} 个字符"
                  }, {
                    validateFunction: function(e, t, r, n) {
                      return t !== r.password && n("两次密码不一致，请重新输入"), !0
                    }
                  }]
                },
                name: {
                  rules: [{
                    required: !0,
                    errorMessage: "请输入姓名"
                  }, {
                    minLength: 2,
                    maxLength: 5,
                    errorMessage: "请输入正确的姓名"
                  }]
                },
                email: {
                  rules: [{
                    required: !0,
                    errorMessage: "请输入邮箱地址"
                  }, {
                    format: "email",
                    errorMessage: "请输入正确的邮箱地址"
                  }]
                },
                employer: {
                  rules: [{
                    required: !0,
                    errorMessage: "请输入工作单位"
                  }]
                }
              }
            }
          },
          methods: {
            submitForm: function(t) {
              var r = this;
              this.$refs.registerForm.submit().then((function(t) {
                r.$request("/auth/applet_user/register", "POST", r.registerForm).then((function(t) {
                  t.data.data ? (e.setStorage({
                    key: "userInfo",
                    data: t.data.data
                  }), r.$store.commit("SET_USERINFO", t.data.data), t.data.data.access_token && (console.log(t.data.data.access_token), r.$store.commit("SET_HASTOKEN", !0)), e.switchTab({
                    url: "../index/index"
                  })) : e.showToast({
                    title: "注册失败",
                    icon: "none"
                  })
                })).catch((function(e) {
                  console.log(e)
                }))
              })).catch((function(t) {
                console.log(t), e.showToast({
                  title: "异常错误",
                  icon: "none"
                })
              }))
            },
            handleRadio: function() {
              this.registerForm.agreement = !this.registerForm.agreement
            }
          }
        };
        t.default = n
      }).call(this, r("df3c")["default"])
    },
    eb55: function(e, t, r) {},
    fb8b: function(e, t, r) {
      "use strict";
      (function(e, t) {
        var n = r("47a9");
        r("3288");
        n(r("3240"));
        var o = n(r("a539"));
        e.__webpack_require_UNI_MP_PLUGIN__ = r, t(o.default)
      }).call(this, r("3223")["default"], r("df3c")["createPage"])
    }
  },
  [
    ["fb8b", "common/runtime", "common/vendor"]
  ]
]);
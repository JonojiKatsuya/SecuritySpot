(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/user/about"], {
    "1d5d": function(t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var r = {
        components: {
          TitleBar: function() {
            e.e("components/title-bar/title-bar").then(function() {
              return resolve(e("43c4"))
            }.bind(null, e)).catch(e.oe)
          }
        },
        data: function() {
          return {
            Abstract: "法宝类案以基本事实、争议焦点、法律适用为基本要素，覆盖刑事、民事、行政、执行四大案件领域，由专业团队对指导性案例、典型案例、参阅案例等具有较强指导性意义的司法案例进行要素化和结构化处理，实现司法案例、法律法规、裁判规则、专家精释、学说观点的深度关联融合，为司法人员提供专业化类案检索服务，助力实现法律适用统一。",
            info: "“北大法宝”是有北京大学法制信息中心与北大英华科技有限公司联合推出的智能型法律信息一站式检索平台。1985年诞生于北京大学法律系，经过20多年不断地改进与完善，是最成熟、专业、先进的法律信息全方位检索系统。“北大法宝”在全国率先进行法律信息的数据挖掘和知识发现，独创了法规条文和相关案例等信息之间的“法宝联想”功能。不仅能直接印证法规案例中引用的法律法规和司法解释及其条款，还可链接与本法规或某一条相关所有法律、法规、司法解释、条文释义、法学期刊、案例和裁判文书；不仅让用户方便地查到法条，更能进一步帮助用户理解、研究、利用法条，创造了全新的信息呈现体系。"
          }
        },
        methods: {}
      };
      n.default = r
    },
    "54f3": function(t, n, e) {
      "use strict";
      e.r(n);
      var r = e("83df"),
        u = e("e3a7");
      for (var a in u)["default"].indexOf(a) < 0 && function(t) {
        e.d(n, t, (function() {
          return u[t]
        }))
      }(a);
      e("766e");
      var c = e("828b"),
        i = Object(c["a"])(u["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], void 0);
      n["default"] = i.exports
    },
    "766e": function(t, n, e) {
      "use strict";
      var r = e("b7a2"),
        u = e.n(r);
      u.a
    },
    "83df": function(t, n, e) {
      "use strict";
      e.d(n, "b", (function() {
        return u
      })), e.d(n, "c", (function() {
        return a
      })), e.d(n, "a", (function() {
        return r
      }));
      var r = {
          titleBar: function() {
            return e.e("components/title-bar/title-bar").then(e.bind(null, "43c4"))
          }
        },
        u = function() {
          var t = this.$createElement;
          this._self._c
        },
        a = []
    },
    b7a2: function(t, n, e) {},
    ba3e: function(t, n, e) {
      "use strict";
      (function(t, n) {
        var r = e("47a9");
        e("3288");
        r(e("3240"));
        var u = r(e("54f3"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, n(u.default)
      }).call(this, e("3223")["default"], e("df3c")["createPage"])
    },
    e3a7: function(t, n, e) {
      "use strict";
      e.r(n);
      var r = e("1d5d"),
        u = e.n(r);
      for (var a in r)["default"].indexOf(a) < 0 && function(t) {
        e.d(n, t, (function() {
          return r[t]
        }))
      }(a);
      n["default"] = u.a
    }
  },
  [
    ["ba3e", "common/runtime", "common/vendor"]
  ]
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/index/causeTemplate"], {
    1386: function(e, t, c) {
      "use strict";
      var n = c("a497"),
        i = c.n(n);
      i.a
    },
    "8d34": function(e, t, c) {
      "use strict";
      c.r(t);
      var n = c("d7f5"),
        i = c("8e44");
      for (var a in i)["default"].indexOf(a) < 0 && function(e) {
        c.d(t, e, (function() {
          return i[e]
        }))
      }(a);
      c("1386");
      var s = c("828b"),
        o = Object(s["a"])(i["default"], n["b"], n["c"], !1, null, "36a009f6", null, !1, n["a"], void 0);
      t["default"] = o.exports
    },
    "8e44": function(e, t, c) {
      "use strict";
      c.r(t);
      var n = c("e41a"),
        i = c.n(n);
      for (var a in n)["default"].indexOf(a) < 0 && function(e) {
        c.d(t, e, (function() {
          return n[e]
        }))
      }(a);
      t["default"] = i.a
    },
    a497: function(e, t, c) {},
    d7f5: function(e, t, c) {
      "use strict";
      c.d(t, "b", (function() {
        return n
      })), c.d(t, "c", (function() {
        return i
      })), c.d(t, "a", (function() {}));
      var n = function() {
          var e = this.$createElement;
          this._self._c
        },
        i = []
    },
    dbd5: function(e, t, c) {
      "use strict";
      (function(e, t) {
        var n = c("47a9");
        c("3288");
        n(c("3240"));
        var i = n(c("8d34"));
        e.__webpack_require_UNI_MP_PLUGIN__ = c, t(i.default)
      }).call(this, c("3223")["default"], c("df3c")["createPage"])
    },
    e41a: function(e, t, c) {
      "use strict";
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var c = {
          data: function() {
            return {
              listData: [{
                icon: "/static/cause/icon_loan@2x.png",
                text: "民间借贷纠纷",
                url: "/pages/index/cause-selection"
              }, {
                icon: "/static/cause/icon_divorce@2x.png",
                text: "离婚纠纷",
                url: "/pages/index/cause-selection"
              }, {
                icon: "/static/cause/icon_labor@2x.png",
                text: "劳动争议纠纷",
                url: "/pages/index/cause-selection"
              }, {
                icon: "/static/cause/icon_sales@2x.png",
                text: "买卖合同纠纷",
                url: "/pages/index/cause-selection"
              }, {
                icon: "/static/cause/icon_finance@2x.png",
                text: "金融借款合同",
                url: "/pages/index/cause-selection"
              }, {
                icon: "/static/cause/icon_property@2x.png",
                text: "物业服务纠纷",
                url: "/pages/index/cause-selection"
              }, {
                text: "银行信用卡纠纷",
                icon: "/static/cause/icon_creditCard@2x.png",
                url: "/pages/index/cause-selection"
              }, {
                icon: "/static/cause/icon_traffic@2x.png",
                text: "机动车交通事故责任纠纷",
                url: "/pages/index/cause-selection"
              }, {
                icon: "/static/cause/icon_lease@2x.png",
                text: "融资租赁合同纠纷",
                url: "/pages/index/cause-selection"
              }, {
                icon: "/static/cause/icon_insurance@2x.png",
                text: "保证保险合同纠纷",
                url: "/pages/index/cause-selection"
              }, {
                icon: "/static/cause/icon_security@2x.png",
                text: "证券虚假陈述责任纠纷",
                url: "/pages/index/cause-selection"
              }, {
                icon: "/static/cause/icon_common@2x.png",
                text: "通用纠纷",
                url: "/pages/index/cause-selection"
              }]
            }
          },
          methods: {
            onGotoCauseSelection: function(t, c) {
              this.$store.commit("SET_CAUSE", c), this.$store.commit("SET_CAUSE_BASE_FORMDATA", {}), this.$store.commit("SET_PARTY_FORMDATA", {}), this.$store.commit("SET_CLAIMS_FORMDATA", {}), this.$store.commit("SET_JURISDICTION_FORMDATA", {}), this.$store.commit("SET_FACTS_FORMDATA", {}), this.$store.commit("SET_COMPLAINT_ID", null), this.$store.commit("SET_PARSE_MODEL_FORMDATA", {}), e.navigateTo({
                url: "/pages/index/causeSelection"
              })
            }
          }
        };
        t.default = c
      }).call(this, c("df3c")["default"])
    }
  },
  [
    ["dbd5", "common/runtime", "common/vendor"]
  ]
]);
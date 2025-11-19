(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/category-tab/category-tab"], {
    "19e0": function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var a = {
        name: "category-tab",
        data: function() {
          return {
            currentTab: ""
          }
        },
        props: {
          tabList: {
            type: Array,
            default: []
          },
          activeTab: {
            type: String,
            default: ""
          }
        },
        watch: {
          activeTab: function(t) {
            this.currentTab = t
          }
        },
        mounted: function() {
          this.currentTab = this.activeTab
        },
        methods: {
          handleTab: function(t) {
            this.currentTab = t.value, this.$emit("returnCategoryTabValue", t.value)
          },
          resetTab: function() {
            this.currentTab = this.tabList[0].value, this.$store.state.params.index = this.currentTab
          }
        }
      };
      e.default = a
    },
    "27d1": function(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("e14b"),
        r = n("93d1");
      for (var u in r)["default"].indexOf(u) < 0 && function(t) {
        n.d(e, t, (function() {
          return r[t]
        }))
      }(u);
      n("31ba");
      var i = n("828b"),
        c = Object(i["a"])(r["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], void 0);
      e["default"] = c.exports
    },
    "31ba": function(t, e, n) {
      "use strict";
      var a = n("de67"),
        r = n.n(a);
      r.a
    },
    "93d1": function(t, e, n) {
      "use strict";
      n.r(e);
      var a = n("19e0"),
        r = n.n(a);
      for (var u in a)["default"].indexOf(u) < 0 && function(t) {
        n.d(e, t, (function() {
          return a[t]
        }))
      }(u);
      e["default"] = r.a
    },
    de67: function(t, e, n) {},
    e14b: function(t, e, n) {
      "use strict";
      n.d(e, "b", (function() {
        return a
      })), n.d(e, "c", (function() {
        return r
      })), n.d(e, "a", (function() {}));
      var a = function() {
          var t = this.$createElement;
          this._self._c
        },
        r = []
    }
  }
]);;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  'components/category-tab/category-tab-create-component',
  {
    'components/category-tab/category-tab-create-component': (function(module, exports, __webpack_require__) {
      __webpack_require__('df3c')['createComponent'](__webpack_require__("27d1"))
    })
  },
  [
    ['components/category-tab/category-tab-create-component']
  ]
]);
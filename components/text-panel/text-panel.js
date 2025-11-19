(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/text-panel/text-panel"], {
    "07dc": function(t, e, n) {
      "use strict";
      n.d(e, "b", (function() {
        return u
      })), n.d(e, "c", (function() {
        return a
      })), n.d(e, "a", (function() {}));
      var u = function() {
          var t = this.$createElement;
          this._self._c
        },
        a = []
    },
    "14b0": function(t, e, n) {
      "use strict";
      n.r(e);
      var u = n("9ddd"),
        a = n.n(u);
      for (var r in u)["default"].indexOf(r) < 0 && function(t) {
        n.d(e, t, (function() {
          return u[t]
        }))
      }(r);
      e["default"] = a.a
    },
    3884: function(t, e, n) {
      "use strict";
      n.r(e);
      var u = n("07dc"),
        a = n("14b0");
      for (var r in a)["default"].indexOf(r) < 0 && function(t) {
        n.d(e, t, (function() {
          return a[t]
        }))
      }(r);
      n("aae1");
      var i = n("828b"),
        c = Object(i["a"])(a["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], void 0);
      e["default"] = c.exports
    },
    "4f18": function(t, e, n) {},
    "9ddd": function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var u = {
        name: "text-panel",
        props: {
          value: {
            type: Number,
            default: 0
          }
        },
        data: function() {
          return {}
        },
        methods: {
          handleSlideChange: function(t) {
            this.$emit("returnSlideValue", t.target.value)
          }
        }
      };
      e.default = u
    },
    aae1: function(t, e, n) {
      "use strict";
      var u = n("4f18"),
        a = n.n(u);
      a.a
    }
  }
]);;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  'components/text-panel/text-panel-create-component',
  {
    'components/text-panel/text-panel-create-component': (function(module, exports, __webpack_require__) {
      __webpack_require__('df3c')['createComponent'](__webpack_require__("3884"))
    })
  },
  [
    ['components/text-panel/text-panel-create-component']
  ]
]);
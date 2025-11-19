(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/pleadings-tab-nav/pleadings-tab-nav"], {
    4803: function(t, n, e) {
      "use strict";
      var a = e("8994"),
        u = e.n(a);
      u.a
    },
    "4c37": function(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("957a"),
        u = e("d554");
      for (var r in u)["default"].indexOf(r) < 0 && function(t) {
        e.d(n, t, (function() {
          return u[t]
        }))
      }(r);
      e("4803");
      var i = e("828b"),
        c = Object(i["a"])(u["default"], a["b"], a["c"], !1, null, "2a23d308", null, !1, a["a"], void 0);
      n["default"] = c.exports
    },
    8994: function(t, n, e) {},
    "957a": function(t, n, e) {
      "use strict";
      e.d(n, "b", (function() {
        return a
      })), e.d(n, "c", (function() {
        return u
      })), e.d(n, "a", (function() {}));
      var a = function() {
          var t = this.$createElement;
          this._self._c
        },
        u = []
    },
    c626: function(t, n, e) {
      "use strict";
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = {
        model: {
          prop: "current",
          event: "change"
        },
        props: {
          tabs: {
            type: Array,
            required: !0
          },
          value: {
            type: Number,
            default: 0
          },
          customClass: {
            type: String,
            default: ""
          }
        },
        data: function() {
          return {
            currentIndex: this.value
          }
        },
        watch: {
          value: function(t) {
            this.currentIndex = t
          }
        },
        methods: {
          handleTabClick: function(t) {
            this.tabs[t].disabled || (this.currentIndex = t, this.$emit("change", t), this.$emit("tab-click", t))
          }
        }
      };
      n.default = a
    },
    d554: function(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("c626"),
        u = e.n(a);
      for (var r in a)["default"].indexOf(r) < 0 && function(t) {
        e.d(n, t, (function() {
          return a[t]
        }))
      }(r);
      n["default"] = u.a
    }
  }
]);;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  'components/pleadings-tab-nav/pleadings-tab-nav-create-component',
  {
    'components/pleadings-tab-nav/pleadings-tab-nav-create-component': (function(module, exports, __webpack_require__) {
      __webpack_require__('df3c')['createComponent'](__webpack_require__("4c37"))
    })
  },
  [
    ['components/pleadings-tab-nav/pleadings-tab-nav-create-component']
  ]
]);
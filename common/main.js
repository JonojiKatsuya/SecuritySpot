(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["common/main"], {
    "209e": function(e, t, o) {
      "use strict";
      var n = o("dfcd"),
        r = o.n(n);
      r.a
    },
    "26bd": function(e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = {
        onLaunch: function() {
          console.log("App Launch")
        },
        onShow: function() {
          console.log("App Show")
        },
        onHide: function() {
          console.log("App Hide")
        }
      };
      t.default = n
    },
    3828: function(e, t, o) {
      "use strict";
      o.r(t);
      var n = o("26bd"),
        r = o.n(n);
      for (var u in n)["default"].indexOf(u) < 0 && function(e) {
        o.d(t, e, (function() {
          return n[e]
        }))
      }(u);
      t["default"] = r.a
    },
    "7d45": function(e, t, o) {
      "use strict";
      o.r(t);
      var n = o("3828");
      for (var r in n)["default"].indexOf(r) < 0 && function(e) {
        o.d(t, e, (function() {
          return n[e]
        }))
      }(r);
      o("209e");
      var u = o("828b"),
        c = Object(u["a"])(n["default"], void 0, void 0, !1, null, null, null, !1, void 0, void 0);
      t["default"] = c.exports
    },
    dbc5: function(e, t, o) {
      "use strict";
      (function(e, t, n) {
        var r = o("47a9"),
          u = r(o("7ca3"));
        o("3288");
        var c = r(o("3240")),
          a = r(o("7d45")),
          f = r(o("16d6")),
          i = o("6a3f"),
          d = o("fd02"),
          l = r(o("be21"));

        function p(e, t) {
          var o = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), o.push.apply(o, n)
          }
          return o
        }
        e.__webpack_require_UNI_MP_PLUGIN__ = o;
        t.getProvider({
          service: ["oauth", "share", "payment", "push"][0],
          success: function(e) {
            console.log(e), c.default.prototype.$provider = e["provider"][0]
          }
        }), c.default.prototype.$store = f.default, c.default.prototype.$request = i.request, c.default.prototype.$causeRequest = d.causeRequest, c.default.prototype.$config = l.default, c.default.config.productionTip = !1, a.default.mpType = "app";
        var s = new c.default(function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var o = null != arguments[t] ? arguments[t] : {};
            t % 2 ? p(Object(o), !0).forEach((function(t) {
              (0, u.default)(e, t, o[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : p(Object(o)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
            }))
          }
          return e
        }({}, a.default));
        n(s).$mount()
      }).call(this, o("3223")["default"], o("df3c")["default"], o("df3c")["createApp"])
    },
    dfcd: function(e, t, o) {}
  },
  [
    ["dbc5", "common/runtime", "common/vendor"]
  ]
]);
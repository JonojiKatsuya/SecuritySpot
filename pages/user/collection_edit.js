(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/user/collection_edit"], {
    "3c1a": function(e, t, n) {
      "use strict";
      var a = n("862d"),
        r = n.n(a);
      r.a
    },
    "3c23": function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("c46f"),
        r = n.n(a);
      for (var c in a)["default"].indexOf(c) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(c);
      t["default"] = r.a
    },
    "6bc6": function(e, t, n) {
      "use strict";
      n.d(t, "b", (function() {
        return r
      })), n.d(t, "c", (function() {
        return c
      })), n.d(t, "a", (function() {
        return a
      }));
      var a = {
          titleBar: function() {
            return n.e("components/title-bar/title-bar").then(n.bind(null, "43c4"))
          }
        },
        r = function() {
          var e = this.$createElement;
          this._self._c
        },
        c = []
    },
    "82d1": function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("6bc6"),
        r = n("3c23");
      for (var c in r)["default"].indexOf(c) < 0 && function(e) {
        n.d(t, e, (function() {
          return r[e]
        }))
      }(c);
      n("3c1a");
      var o = n("828b"),
        i = Object(o["a"])(r["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], void 0);
      t["default"] = i.exports
    },
    "862d": function(e, t, n) {},
    c46f: function(e, t, n) {
      "use strict";
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = {
          components: {
            TitleBar: function() {
              n.e("components/title-bar/title-bar").then(function() {
                return resolve(n("43c4"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              folderName: "",
              folderId: ""
            }
          },
          onLoad: function(e) {
            this.folderId = e.collectFolderId, this.folderName = e.folderName
          },
          methods: {
            handleSave: function() {
              this.folderId ? this.renameFolderData() : this.createFolderData()
            },
            createFolderData: function() {
              this.$request("/applet/personal/createFolder", "POST", {
                folderName: this.folderName
              }).then((function(t) {
                t.data.data && e.navigateBack({
                  delta: 1
                })
              })).catch((function(e) {}))
            },
            renameFolderData: function() {
              this.$request("/applet/personal/renameFolder", "PUT", {
                folderId: this.folderId,
                folderName: this.folderName
              }).then((function(t) {
                t.data.data && e.navigateBack({
                  delta: 1
                })
              })).catch((function(e) {}))
            }
          }
        };
        t.default = a
      }).call(this, n("df3c")["default"])
    },
    d73c: function(e, t, n) {
      "use strict";
      (function(e, t) {
        var a = n("47a9");
        n("3288");
        a(n("3240"));
        var r = a(n("82d1"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(r.default)
      }).call(this, n("3223")["default"], n("df3c")["createPage"])
    }
  },
  [
    ["d73c", "common/runtime", "common/vendor"]
  ]
]);
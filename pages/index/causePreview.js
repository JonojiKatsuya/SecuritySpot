(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/index/causePreview"], {
    "040f": function(e, t, n) {
      "use strict";
      (function(e, t) {
        var a = n("47a9");
        n("3288");
        a(n("3240"));
        var o = a(n("63aa"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default)
      }).call(this, n("3223")["default"], n("df3c")["createPage"])
    },
    "41b2": function(e, t, n) {
      "use strict";
      var a = n("6017"),
        o = n.n(a);
      o.a
    },
    "44af": function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("b0d4"),
        o = n.n(a);
      for (var c in a)["default"].indexOf(c) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(c);
      t["default"] = o.a
    },
    6017: function(e, t, n) {},
    "63aa": function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("68ed"),
        o = n("44af");
      for (var c in o)["default"].indexOf(c) < 0 && function(e) {
        n.d(t, e, (function() {
          return o[e]
        }))
      }(c);
      n("41b2");
      var i = n("828b"),
        u = Object(i["a"])(o["default"], a["b"], a["c"], !1, null, "4c57e13c", null, !1, a["a"], void 0);
      t["default"] = u.exports
    },
    "68ed": function(e, t, n) {
      "use strict";
      n.d(t, "b", (function() {
        return a
      })), n.d(t, "c", (function() {
        return o
      })), n.d(t, "a", (function() {}));
      var a = function() {
          var e = this.$createElement;
          this._self._c
        },
        o = []
    },
    b0d4: function(e, t, n) {
      "use strict";
      (function(e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var a = n("fd02"),
          o = {
            data: function() {
              return {}
            },
            methods: {
              backToEdit: function() {
                e.redirectTo({
                  url: "/pages/index/causeSelection"
                })
              },
              exportCause: function() {
                var t = this;
                e.showLoading({
                  title: "加载中"
                }), e.request({
                  url: "".concat(a.baseUrl, "/applet/complaint/downloadByUUID"),
                  method: "POST",
                  data: {
                    complaintId: this.$store.state.complaintId
                  },
                  responseType: "arraybuffer",
                  success: function(n) {
                    e.hideLoading();
                    var a = n.data,
                      o = e.arrayBufferToBase64(a),
                      c = "".concat(e.env.USER_DATA_PATH, "/").concat(t.$store.state.causeFileName.replace(/^.*\//, "").trim());
                    e.getFileSystemManager().writeFile({
                      filePath: c,
                      data: o,
                      encoding: "base64",
                      success: function() {
                        console.log("文件下载成功，路径:", c), e.openDocument({
                          filePath: c,
                          fileType: "docx",
                          showMenu: !0,
                          success: function() {
                            console.log("文件打开成功")
                          },
                          fail: function(e) {
                            console.log("文件打开失败", e)
                          }
                        })
                      },
                      fail: function(e) {
                        console.log("文件写入失败", e)
                      }
                    })
                  },
                  fail: function() {
                    e.hideLoading(), e.showToast({
                      title: "服务器异常，请联系管理员！"
                    })
                  }
                })
              }
            }
          };
        t.default = o
      }).call(this, n("df3c")["default"])
    }
  },
  [
    ["040f", "common/runtime", "common/vendor"]
  ]
]);
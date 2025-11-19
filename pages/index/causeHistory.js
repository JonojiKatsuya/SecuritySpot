(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/index/causeHistory"], {
    "09ca": function(t, e, n) {
      "use strict";
      n.r(e);
      var o = n("72b8"),
        a = n("75f5");
      for (var i in a)["default"].indexOf(i) < 0 && function(t) {
        n.d(e, t, (function() {
          return a[t]
        }))
      }(i);
      n("efc6");
      var c = n("828b"),
        r = Object(c["a"])(a["default"], o["b"], o["c"], !1, null, "3167e443", null, !1, o["a"], void 0);
      e["default"] = r.exports
    },
    6519: function(t, e, n) {
      "use strict";
      (function(t) {
        var o = n("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = o(n("7ca3")),
          i = n("fd02");

        function c(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e && (o = o.filter((function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, o)
          }
          return n
        }

        function r(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? c(Object(n), !0).forEach((function(e) {
              (0, a.default)(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
          }
          return t
        }
        var s = {
          data: function() {
            return {
              inputValue: "",
              list: [],
              rightOptions: [{
                text: "导出",
                style: {
                  backgroundColor: "#1967DD"
                },
                action: "export"
              }, {
                text: "删除",
                style: {
                  backgroundColor: "#FC3745"
                },
                action: "delete"
              }]
            }
          },
          methods: {
            onSearch: function(t) {
              console.log(this.inputValue)
            },
            handleClick: function(e, n) {
              var o = this;
              console.log("======", e, n), "export" === n.content.action ? this.exportCause(e) : "delete" === n.content.action && t.showModal({
                title: "确认删除？",
                content: '确定要删除 "'.concat(e.complaintName, '" 吗？'),
                confirmText: "删除",
                cancelText: "取消",
                confirmColor: "#dd524d",
                success: function(t) {
                  t.confirm && o.deleteCause(e)
                }
              })
            },
            exportCause: function(e) {
              var n = this;
              t.showLoading({
                title: "加载中"
              }), t.request({
                url: "".concat(i.baseUrl, "/applet/complaint/downloadByUUID"),
                method: "POST",
                data: {
                  complaintId: e.complaintId
                },
                responseType: "arraybuffer",
                success: function(e) {
                  t.hideLoading();
                  var o = e.data,
                    a = t.arrayBufferToBase64(o),
                    i = "".concat(t.env.USER_DATA_PATH, "/").concat(n.$store.state.causeFileName.replace(/^.*\//, "").trim());
                  t.getFileSystemManager().writeFile({
                    filePath: i,
                    data: a,
                    encoding: "base64",
                    success: function() {
                      console.log("文件下载成功，路径:", i), t.openDocument({
                        filePath: i,
                        fileType: "docx",
                        showMenu: !0,
                        success: function() {
                          console.log("文件打开成功")
                        },
                        fail: function(t) {
                          console.log("文件打开失败", t)
                        }
                      })
                    },
                    fail: function(t) {
                      console.log("文件写入失败", t)
                    }
                  })
                },
                fail: function() {
                  t.hideLoading(), t.showToast({
                    title: "服务器异常，请联系管理员！"
                  })
                }
              })
            },
            deleteCause: function(e) {
              var n = this;
              t.showLoading({
                title: "加载中"
              }), console.log(e, "deldeldel"), this.$causeRequest("/applet/complaint/del", "POST", {
                complaintId: e.complaintId
              }).then((function(e) {
                t.hideLoading(), 200 === e.data.code && (t.showToast({
                  title: "删除成功",
                  icon: "none"
                }), n.initList())
              })).catch((function(e) {
                t.hideLoading(), t.showToast({
                  title: "服务器异常，请联系管理员！"
                })
              }))
            },
            initList: function() {
              t.showLoading({
                title: "加载中"
              });
              var e = this;
              t.getStorage({
                key: "causeUnionId",
                success: function(n) {
                  e.$causeRequest("/applet/complaint/list", "POST", {
                    userId: n.data,
                    pageNum: 1,
                    pageSize: 100
                  }).then((function(n) {
                    t.hideLoading(), 200 === n.data.code && (e.list = n.data.data.map((function(t) {
                      return r(r({}, t), {}, {
                        createUpdateTime: new Date(t.createUpdateTime).toISOString().split("T")[0]
                      })
                    })))
                  })).catch((function(e) {
                    t.hideLoading(), t.showToast({
                      title: "服务器异常，请联系管理员！"
                    })
                  }))
                }
              })
            },
            linkToDetail: function(e) {
              var n = this;
              console.log(e, "item"), this.$store.commit("SET_COMPLAINT_ID", e.complaintId), t.showLoading({
                title: "加载中"
              }), this.$causeRequest("/applet/complaint/info", "POST", {
                complaintId: e.complaintId
              }).then((function(e) {
                t.hideLoading(), 200 === e.data.code && (n.$store.commit("SET_PARSE_MODEL_FORMDATA", {}), n.$store.commit("SET_CAUSE", e.data.data.cause), n.$store.commit("SET_CAUSE_BASE_FORMDATA", JSON.parse(e.data.data.causeBaseFormData)), n.$store.commit("SET_PARTY_FORMDATA", JSON.parse(e.data.data.partyFormData)), n.$store.commit("SET_CLAIMS_FORMDATA", JSON.parse(e.data.data.claimsFormData)), n.$store.commit("SET_JURISDICTION_FORMDATA", JSON.parse(e.data.data.jurisdictionFormData)), n.$store.commit("SET_FACTS_FORMDATA", JSON.parse(e.data.data.factsFormData)), t.navigateTo({
                  url: "/pages/index/causeSelection"
                }))
              })).catch((function(e) {
                t.hideLoading(), t.showToast({
                  title: "服务器异常，请联系管理员！"
                })
              }))
            }
          },
          mounted: function() {
            this.initList()
          }
        };
        e.default = s
      }).call(this, n("df3c")["default"])
    },
    "72b8": function(t, e, n) {
      "use strict";
      n.d(e, "b", (function() {
        return a
      })), n.d(e, "c", (function() {
        return i
      })), n.d(e, "a", (function() {
        return o
      }));
      var o = {
          uniSwipeAction: function() {
            return n.e("components/uni-swipe-action/uni-swipe-action").then(n.bind(null, "f99e"))
          },
          uniSwipeActionItem: function() {
            return Promise.all([n.e("common/vendor"), n.e("components/uni-swipe-action-item/uni-swipe-action-item")]).then(n.bind(null, "369c"))
          }
        },
        a = function() {
          var t = this.$createElement;
          this._self._c
        },
        i = []
    },
    "751f": function(t, e, n) {},
    "75f5": function(t, e, n) {
      "use strict";
      n.r(e);
      var o = n("6519"),
        a = n.n(o);
      for (var i in o)["default"].indexOf(i) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(i);
      e["default"] = a.a
    },
    9817: function(t, e, n) {
      "use strict";
      (function(t, e) {
        var o = n("47a9");
        n("3288");
        o(n("3240"));
        var a = o(n("09ca"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(a.default)
      }).call(this, n("3223")["default"], n("df3c")["createPage"])
    },
    efc6: function(t, e, n) {
      "use strict";
      var o = n("751f"),
        a = n.n(o);
      a.a
    }
  },
  [
    ["9817", "common/runtime", "common/vendor"]
  ]
]);
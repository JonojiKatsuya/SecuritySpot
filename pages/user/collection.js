(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/user/collection"], {
    4621: function(e, t, i) {
      "use strict";
      (function(e, t) {
        var n = i("47a9");
        i("3288");
        n(i("3240"));
        var l = n(i("baca"));
        e.__webpack_require_UNI_MP_PLUGIN__ = i, t(l.default)
      }).call(this, i("3223")["default"], i("df3c")["createPage"])
    },
    "79ea": function(e, t, i) {
      "use strict";
      var n = i("ab93"),
        l = i.n(n);
      l.a
    },
    ab93: function(e, t, i) {},
    b5e0: function(e, t, i) {
      "use strict";
      i.r(t);
      var n = i("e397"),
        l = i.n(n);
      for (var s in n)["default"].indexOf(s) < 0 && function(e) {
        i.d(t, e, (function() {
          return n[e]
        }))
      }(s);
      t["default"] = l.a
    },
    baca: function(e, t, i) {
      "use strict";
      i.r(t);
      var n = i("fa83"),
        l = i("b5e0");
      for (var s in l)["default"].indexOf(s) < 0 && function(e) {
        i.d(t, e, (function() {
          return l[e]
        }))
      }(s);
      i("79ea");
      var o = i("828b"),
        a = Object(o["a"])(l["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], void 0);
      t["default"] = a.exports
    },
    e397: function(e, t, i) {
      "use strict";
      (function(e) {
        var n = i("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var l = n(i("af34")),
          s = {
            components: {
              TitleBar: function() {
                i.e("components/title-bar/title-bar").then(function() {
                  return resolve(i("43c4"))
                }.bind(null, i)).catch(i.oe)
              }
            },
            data: function() {
              return {
                fileName: "",
                status: "loading",
                files: [],
                queryParams: {
                  searchText: "",
                  pageNo: 1,
                  pageSize: 10
                },
                contentText: {
                  contentdown: "下拉加载更多",
                  contentrefresh: "加载中...",
                  contentnomore: "没有更多了"
                },
                activeId: "",
                selection: [],
                selectArr: [],
                isEdit: !1,
                isDisabled: !1,
                isSelectAll: !1,
                collectArr: []
              }
            },
            onLoad: function(e) {
              this.collectArr.push({
                gid: e.Gid,
                indexName: e.indexName
              })
            },
            onShow: function() {
              this.selection = [], this.selectArr = [], this.isEdit = !1, this.isDisabled = !1, this.init()
            },
            methods: {
              handleSelectAll: function() {
                var e = this;
                this.isSelectAll = !this.isSelectAll, this.isSelectAll ? this.files.forEach((function(t) {
                  e.selectArr.push(t.collectFolderId), e.selection.push(t)
                })) : (this.selectArr = [], this.selection = []), this.isDisabled = this.selectArr.length > 1
              },
              handleCancel: function() {
                this.selection = [], this.selectArr = [], this.isEdit = !1, this.isDisabled = !1, this.isSelectAll = !1
              },
              handleRename: function() {
                this.isDisabled || e.navigateTo({
                  url: "../user/collection_edit?collectFolderId=" + this.selectArr[0] + "&folderName=" + this.selection[0].folderName
                })
              },
              handleRemove: function() {
                var t = this;
                0 != this.selectArr.length ? this.$request("/applet/personal/batchRemoveFolder", "DELETE", {
                  folderIdList: this.selectArr
                }).then((function(e) {
                  t.selection = [], t.selectArr = [], t.isEdit = !1, t.isDisabled = !1, t.init()
                })).catch((function(e) {})) : e.showToast({
                  title: "请选择至少一条案例!"
                })
              },
              handleSelect: function(t) {
                if (this.isEdit) {
                  var i = this.selectArr.indexOf(t.collectFolderId); - 1 != i ? (this.selectArr.splice(i, 1), this.selection.splice(i, 1)) : (this.selectArr.push(t.collectFolderId), this.selection.push(t)), this.isDisabled = this.selectArr.length > 1
                } else e.navigateTo({
                  url: "../user/collection_list?collectFolderId=" + t.collectFolderId
                })
              },
              handleEdit: function() {
                this.isEdit = !0
              },
              onReachBottom: function() {
                "noMore" != this.status && (this.queryParams.pageNo += 1, this.init())
              },
              onPullDownRefresh: function() {
                e.stopPullDownRefresh()
              },
              init: function() {
                var e = this;
                this.status = "loading", this.$request("/applet/personal/collectFolderPageList", "GET", this.queryParams).then((function(t) {
                  var i;
                  1 == e.queryParams.pageNo ? e.files = (0, l.default)(t.data.data.list) : (i = e.files).push.apply(i, (0, l.default)(t.data.data.list));
                  if (e.files.length < t.data.data.total) return e.status = "more", !1;
                  e.status = "noMore"
                }))
              },
              openCreateCollFile: function() {
                e.navigateTo({
                  url: "../user/collection_edit"
                })
              },
              CreateCollFile: function() {
                var e = this;
                this.$refs.popup.close(), this.fileName.trim() && this.$request("/applet/personal/createFolder", "POST", {
                  folderName: this.fileName
                }).then((function(t) {
                  e.fileName = "", e.init()
                }))
              }
            }
          };
        t.default = s
      }).call(this, i("df3c")["default"])
    },
    fa83: function(e, t, i) {
      "use strict";
      i.d(t, "b", (function() {
        return l
      })), i.d(t, "c", (function() {
        return s
      })), i.d(t, "a", (function() {
        return n
      }));
      var n = {
          titleBar: function() {
            return i.e("components/title-bar/title-bar").then(i.bind(null, "43c4"))
          },
          uniPopup: function() {
            return Promise.all([i.e("common/vendor"), i.e("components/uni-popup/uni-popup")]).then(i.bind(null, "1ab0"))
          }
        },
        l = function() {
          var e = this,
            t = e.$createElement,
            i = (e._self._c, e.__map(e.files, (function(t, i) {
              var n = e.__get_orig(t),
                l = e.isEdit ? e.selectArr.indexOf(t.collectFolderId) : null;
              return {
                $orig: n,
                g0: l
              }
            })));
          e.$mp.data = Object.assign({}, {
            $root: {
              l0: i
            }
          })
        },
        s = []
    }
  },
  [
    ["4621", "common/runtime", "common/vendor"]
  ]
]);
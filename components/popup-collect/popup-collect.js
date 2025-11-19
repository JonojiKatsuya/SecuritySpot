(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/popup-collect/popup-collect"], {
    1094: function(t, e, a) {},
    "3fa4": function(t, e, a) {
      "use strict";
      a.r(e);
      var c = a("acb0"),
        l = a("6b9a");
      for (var n in l)["default"].indexOf(n) < 0 && function(t) {
        a.d(e, t, (function() {
          return l[t]
        }))
      }(n);
      a("e4a5");
      var i = a("828b"),
        o = Object(i["a"])(l["default"], c["b"], c["c"], !1, null, null, null, !1, c["a"], void 0);
      e["default"] = o.exports
    },
    "55ca": function(t, e, a) {
      "use strict";
      (function(t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var a = {
          name: "popup-collect",
          data: function() {
            return {
              collectList: [],
              activeCollect: ""
            }
          },
          props: {
            collectGid: {
              type: String,
              default: ""
            },
            detailParams: {
              type: Object,
              default: {
                gid: "",
                index: ""
              }
            }
          },
          mounted: function() {},
          methods: {
            linkToCollect: function() {
              t.navigateTo({
                url: "../user/collection_edit"
              })
            },
            saveCollect: function() {
              var e = this,
                a = [{
                  gid: this.collectGid,
                  indexName: this.$store.state.params.index
                }];
              this.$request("/applet/personal/batchAddCollect", "POST", {
                folderId: this.activeCollect,
                gidList: a,
                detailParams: this.detailParams
              }).then((function(a) {
                1 == a.data.data ? (t.showToast({
                  title: "收藏成功!"
                }), e.$emit("returnAddSucc"), e.activeCollect = "") : t.showToast({
                  title: "收藏失败!"
                })
              })).catch((function(t) {
                console.log(t)
              }))
            },
            handleCollect: function(t) {
              this.activeCollect = t.collectFolderId
            },
            getCollectListData: function() {
              var t = this;
              this.$request("/applet/personal/collectFolderPageList", "GET", {
                searchText: "",
                pageNo: 1,
                pageSize: 10
              }).then((function(e) {
                e.data.data.list && e.data.data.list.length > 0 && (t.collectList = e.data.data.list)
              }))
            }
          }
        };
        e.default = a
      }).call(this, a("df3c")["default"])
    },
    "6b9a": function(t, e, a) {
      "use strict";
      a.r(e);
      var c = a("55ca"),
        l = a.n(c);
      for (var n in c)["default"].indexOf(n) < 0 && function(t) {
        a.d(e, t, (function() {
          return c[t]
        }))
      }(n);
      e["default"] = l.a
    },
    acb0: function(t, e, a) {
      "use strict";
      a.d(e, "b", (function() {
        return c
      })), a.d(e, "c", (function() {
        return l
      })), a.d(e, "a", (function() {}));
      var c = function() {
          var t = this.$createElement;
          this._self._c
        },
        l = []
    },
    e4a5: function(t, e, a) {
      "use strict";
      var c = a("1094"),
        l = a.n(c);
      l.a
    }
  }
]);;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  'components/popup-collect/popup-collect-create-component',
  {
    'components/popup-collect/popup-collect-create-component': (function(module, exports, __webpack_require__) {
      __webpack_require__('df3c')['createComponent'](__webpack_require__("3fa4"))
    })
  },
  [
    ['components/popup-collect/popup-collect-create-component']
  ]
]);
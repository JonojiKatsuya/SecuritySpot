(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/user/collection_list"], {
    "00bf": function(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("5f9d"),
        o = e("d789");
      for (var i in o)["default"].indexOf(i) < 0 && function(t) {
        e.d(n, t, (function() {
          return o[t]
        }))
      }(i);
      e("6bf7");
      var r = e("828b"),
        u = Object(r["a"])(o["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], void 0);
      n["default"] = u.exports
    },
    "51f0": function(t, n, e) {
      "use strict";
      (function(t) {
        var a = e("47a9");
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var o = a(e("af34")),
          i = {
            components: {
              TitleBar: function() {
                e.e("components/title-bar/title-bar").then(function() {
                  return resolve(e("43c4"))
                }.bind(null, e)).catch(e.oe)
              }
            },
            data: function() {
              return {
                status: "loading",
                dataList: [],
                queryParams: {
                  folderId: "",
                  pageNo: 1,
                  pageSize: 15
                },
                contentText: {
                  contentdown: "下拉加载更多",
                  contentrefresh: "加载中...",
                  contentnomore: "没有更多了"
                }
              }
            },
            onLoad: function(t) {
              console.log(t), this.queryParams.folderId = t.collectFolderId
            },
            mounted: function() {
              this.init()
            },
            methods: {
              onReachBottom: function() {
                "noMore" != this.status && (this.queryParams.pageNo += 1, this.init())
              },
              onPullDownRefresh: function() {
                t.stopPullDownRefresh()
              },
              linkToDetails: function(n) {
                t.navigateTo({
                  url: "../details/details?gid=" + n.gid
                })
              },
              init: function() {
                var t = this;
                this.status = "loading", this.$request("/applet/personal/collectCasePageList", "GET", this.queryParams).then((function(n) {
                  var e;
                  if ((e = t.dataList).push.apply(e, (0, o.default)(n.data.data.collectCaseList.list)), t.dataList.length < n.data.data.total) return t.status = "more", !1;
                  t.status = "noMore"
                }))
              }
            }
          };
        n.default = i
      }).call(this, e("df3c")["default"])
    },
    "5f9d": function(t, n, e) {
      "use strict";
      e.d(n, "b", (function() {
        return o
      })), e.d(n, "c", (function() {
        return i
      })), e.d(n, "a", (function() {
        return a
      }));
      var a = {
          titleBar: function() {
            return e.e("components/title-bar/title-bar").then(e.bind(null, "43c4"))
          },
          uniLoadMore: function() {
            return e.e("components/uni-load-more/uni-load-more").then(e.bind(null, "f955"))
          }
        },
        o = function() {
          var t = this,
            n = t.$createElement,
            e = (t._self._c, t.__map(t.dataList, (function(n, e) {
              var a = t.__get_orig(n),
                o = n.lastInstanceCourt && n.lastInstanceCourt.length > 0,
                i = o ? n.lastInstanceCourt.length : null;
              return {
                $orig: a,
                g0: o,
                g1: i
              }
            })));
          t.$mp.data = Object.assign({}, {
            $root: {
              l0: e
            }
          })
        },
        i = []
    },
    "6bf7": function(t, n, e) {
      "use strict";
      var a = e("e01a"),
        o = e.n(a);
      o.a
    },
    cf8c: function(t, n, e) {
      "use strict";
      (function(t, n) {
        var a = e("47a9");
        e("3288");
        a(e("3240"));
        var o = a(e("00bf"));
        t.__webpack_require_UNI_MP_PLUGIN__ = e, n(o.default)
      }).call(this, e("3223")["default"], e("df3c")["createPage"])
    },
    d789: function(t, n, e) {
      "use strict";
      e.r(n);
      var a = e("51f0"),
        o = e.n(a);
      for (var i in a)["default"].indexOf(i) < 0 && function(t) {
        e.d(n, t, (function() {
          return a[t]
        }))
      }(i);
      n["default"] = o.a
    },
    e01a: function(t, n, e) {}
  },
  [
    ["cf8c", "common/runtime", "common/vendor"]
  ]
]);
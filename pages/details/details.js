(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/details/details"], {
    1669: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("4d44"),
        r = n.n(a);
      for (var o in a)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return a[e]
        }))
      }(o);
      t["default"] = r.a
    },
    "17b3": function(e, t, n) {},
    "4d44": function(e, t, n) {
      "use strict";
      (function(e) {
        var a = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var r = a(n("af34")),
          o = a(n("3b2d")),
          i = n("20f5"),
          l = n("cec6"),
          s = 0,
          u = {
            components: {
              TitleBar: function() {
                n.e("components/title-bar/title-bar").then(function() {
                  return resolve(n("43c4"))
                }.bind(null, n)).catch(n.oe)
              },
              PopupCollect: function() {
                n.e("components/popup-collect/popup-collect").then(function() {
                  return resolve(n("3fa4"))
                }.bind(null, n)).catch(n.oe)
              },
              PopupShare: function() {
                n.e("components/popup-share/popup-share").then(function() {
                  return resolve(n("9a01"))
                }.bind(null, n)).catch(n.oe)
              },
              BottomNav: function() {
                n.e("components/bottom-nav/bottom-nav").then(function() {
                  return resolve(n("24a9"))
                }.bind(null, n)).catch(n.oe)
              },
              Toolbar: function() {
                n.e("components/toolbar/toolbar").then(function() {
                  return resolve(n("cd12"))
                }.bind(null, n)).catch(n.oe)
              },
              TextPanel: function() {
                n.e("components/text-panel/text-panel").then(function() {
                  return resolve(n("3884"))
                }.bind(null, n)).catch(n.oe)
              },
              KeywordPanel: function() {
                n.e("components/keyword-panel/keyword-panel").then(function() {
                  return resolve(n("2037"))
                }.bind(null, n)).catch(n.oe)
              }
            },
            data: function() {
              return {
                structured: 1,
                show: !1,
                lock: !0,
                value: 0,
                showSize: !1,
                systemHeight: 0,
                toView: "",
                isMembers: !0,
                resultData: {},
                fieldData: [],
                catalogueList: [],
                files: [],
                queryParams: {
                  pageNo: 1,
                  pageSize: 15
                },
                styleTop: {},
                fu: ">",
                showFooter: !1,
                scorllNum: 0,
                gid: "",
                isCollected: !1,
                detailParams: {
                  gid: "",
                  index: ""
                },
                titleStr: "",
                marginTop: 160,
                showTextPanel: !1,
                showBackTop: !1,
                showToolbar: !0,
                showKeywordPanel: !1,
                matchKeyword: ""
              }
            },
            onShow: function() {
              var e = getCurrentPages(),
                t = e[e.length - 1];
              this.gid = t.options.gid, this.$refs.popupCollect.getCollectListData()
            },
            mounted: function() {
              var t = this;
              e.getSystemInfo({
                success: function(e) {
                  t.styleTop = {
                    height: e.windowHeight
                  }
                }
              }), this.init()
            },
            methods: {
              renderKeywordByObj: function(e) {
                var t = "",
                  n = e.name + "";
                e.list && e.list.length > 0 && e.list.forEach((function(e, t) {
                  n += e.value
                }));
                var a = new RegExp(this.matchKeyword, "g");
                return t = n && this.matchKeyword ? n.replace(a, (function(e) {
                  return s++, '<span class="match-keyword">' + e + "</span>"
                })) : n, t
              },
              renderKeywordByArr: function(e) {
                console.log("arr ", e);
                return ""
              },
              renderKeywordByStr: function(e) {
                var t = "",
                  n = e.name + e.value,
                  a = new RegExp(this.matchKeyword, "g");
                return t = n && this.matchKeyword ? n.replace(a, (function(e) {
                  return s++, '<span class="match-keyword">' + e + "</span>"
                })) : n, t
              },
              renderKeywordByArrObj: function(e) {
                var t = this,
                  n = "",
                  a = e.name + "";
                e.list && e.list.length > 0 && e.list.forEach((function(n, r) {
                  0 != r && e.children ? a += '<span style="padding-right:6px">' + t.fu + "</span>" : a += '<span style="padding-right:6px">' + n.value + "</span>"
                }));
                var r = new RegExp(this.matchKeyword, "g");
                return n = a && this.matchKeyword ? a.replace(r, (function(e) {
                  return s++, '<span class="match-keyword">' + e + "</span>"
                })) : a, n
              },
              renderKeyword: function(e) {
                var t = "",
                  n = new RegExp(this.matchKeyword, "g");
                return t = e && this.matchKeyword ? e.replace(n, (function(e) {
                  return s++, '<span class="match-keyword">' + e + "</span>"
                })) : e, t
              },
              returnHandleSearch: function(t) {
                var n = "";
                s = 0, this.matchKeyword = t, setTimeout((function() {
                  n = s > 0 ? "共匹配到 " + s + " 条数据!" : "没有匹配到相关内容", e.showToast({
                    title: n,
                    icon: "none"
                  })
                }), 500)
              },
              returnHandleCancel: function() {
                this.showKeywordPanel = !1
              },
              handleTouchStart: function(e) {
                this.showToolbar = !1
              },
              handleTouchEnd: function(e) {
                this.showToolbar = !0
              },
              returnSlideValue: function(e) {
                this.lock = !1, this.value = e, this.renderMarginTop(this.titleStr)
              },
              returnTextPanel: function(e) {
                this.showTextPanel = !this.showTextPanel
              },
              returnCopyLink: function() {
                e.setClipboardData({
                  data: "https://icases.pkulaw.com/detail/" + this.$store.state.params.index + "/" + this.gid,
                  success: function() {
                    e.showToast({
                      title: "链接已复制",
                      icon: "none"
                    })
                  }
                })
              },
              returnCollectPanel: function() {
                this.isCollected ? this.cancelCollectData() : this.$refs.popup.open()
              },
              returnBackToTop: function() {
                this.showBackTop = !1, this.toView = "base01__info__"
              },
              renderMarginTop: function(e) {
                var t = this,
                  n = "",
                  a = "";
                0 == this.value && (a = 16), 50 == this.value && (a = 14), 100 == this.value && (a = 13);
                var r = Math.ceil(e.length / a).toFixed(0);
                r > 4 && (r = 4);
                [{
                  value: 0,
                  top: [140, 140, 200, 230, 280]
                }, {
                  value: 50,
                  top: [150, 150, 210, 250, 300]
                }, {
                  value: 100,
                  top: [160, 160, 220, 280, 320]
                }].forEach((function(e) {
                  e.value == t.value && (n = e.top[r])
                })), this.marginTop = n
              },
              returnAddSucc: function() {
                this.isCollected = !0, this.$refs.popup.close()
              },
              openCollect: function(e) {
                this.isCollected ? this.cancelCollectData() : this.$refs.popup.open()
              },
              isKinds: function(e, t) {
                return (0, o.default)(e) == t
              },
              handleMagnifyFont: function() {
                this.lock = !1, this.value < 100 && (this.value += 50)
              },
              handleScaleFont: function() {
                this.lock = !1, this.value > 0 && (this.value -= 50)
              },
              handleShowSize: function() {
                this.showSize = !this.showSize
              },
              pageScrollGo: function(e) {
                this.toView = "", this.showBackTop = e.detail.scrollTop > 200
              },
              handleCreateColl: function(t) {
                this.$request("/applet/personal/batchAddCollect", "POST", {
                  folderId: t,
                  gidList: [{
                    gid: this.gid,
                    indexName: this.$store.state.params.index
                  }]
                }).then((function(t) {
                  e.showToast({
                    icon: "success",
                    title: t.data.message
                  })
                }))
              },
              open: function() {
                this.getCollList(), this.$refs.popup.open()
              },
              returnOpenCatalog: function() {
                this.$refs.drawer.open()
              },
              returnOpenSearch: function() {
                this.showKeywordPanel = !this.showKeywordPanel
              },
              returnOpenShare: function() {
                this.$refs.popup1.open()
              },
              returnCancel: function() {
                this.$refs.popup1.close()
              },
              handleClose: function() {
                this.$refs.members.close()
              },
              handleJump: function() {
                this.$refs.members.close(), e.navigateTo({
                  url: "/pages/user/service"
                })
              },
              handleOpenMembers: function() {
                "ios" == e.getSystemInfoSync().platform ? this.$refs.members.open() : e.showToast({
                  icon: "none",
                  title: "暂未开放"
                })
              },
              cancelCollectData: function() {
                var t = this;
                this.$request("/user/collect/cancel", "PUT", {
                  gid: this.gid,
                  detailParams: this.detailParams
                }).then((function(n) {
                  n.data.data && (e.showToast({
                    title: "取消收藏!"
                  }), t.isCollected = !1)
                })).catch((function(e) {
                  console.log(e)
                }))
              },
              getCollList: function() {
                var e = this;
                this.$request("/applet/personal/collectFolderPageList", "GET", this.queryParams).then((function(t) {
                  var n;
                  if ((n = e.files).push.apply(n, (0, r.default)(t.data.data.list)), e.files.length < t.data.data.total) return e.status = "more", !1;
                  e.status = "noMore"
                }))
              },
              init: function() {
                var e = this;
                this.detailParams.gid = this.gid, this.detailParams.index = this.$store.state.params.index, this.$request("/applet/detail/detail", "POST", this.detailParams).then((function(t) {
                  e.filterJoinCatalogue(t.data.data), t.data.data.structured || e.structured || (t.data.data.FullText = ""), e.titleStr = t.data.data.Title, e.renderMarginTop(e.titleStr), e.isCollected = t.data.data.collectStatus, e.show = !0, e.resultData = t.data.data, e.resultData["count"] = 23, e.resultData["readCount"] = 10, e.fieldData = (0, i.geTable)(t.data.data, "base")
                })).catch((function(e) {
                  console.log(e)
                }))
              },
              scrollGo: function(e) {
                this.$refs.drawer.close(), this.toView = e.name
              },
              joinHtml: function(e) {
                var t = '<a name="all">'.concat(e.title, "</a>"),
                  n = "",
                  a = [];
                if ("0" !== e.mu && a.unshift(l.encodeS(e.mu) + "目"), "0" !== e.xiang && a.unshift("第" + l.encodeS(e.xiang) + "项"), "0" !== e.kuan && a.unshift("第" + l.encodeS(e.kuan) + "款"), "0" !== e.tiao) {
                  var r = ("第" + l.encodeS(e.tiao) + "条").replace(/点/gi, "之");
                  a.unshift(r);
                  var o = a.join("");
                  n = '<a name="tiao">'.concat(o, "</a>")
                }
                var i = t + "&nbsp;&nbsp;" + n,
                  u = "",
                  c = new RegExp(this.matchKeyword, "g");
                return u = i && this.matchKeyword ? i.replace(c, (function(e) {
                  return s++, '<span class="match-keyword">' + e + "</span>"
                })) : i, u
              },
              filterJoinCatalogue: function(e) {
                var t, n, a, i = [];
                (i.push({
                  title: "基本信息",
                  tier: "5",
                  active: !1,
                  name: "base01__info__"
                }), e.HisDocuments && e.HisDocuments.length > 0 && i.push({
                  title: "历审文书",
                  tier: "5",
                  active: !1,
                  name: "base11__info__"
                }), e.AjysName && i.push({
                  title: "案件要素",
                  tier: "5",
                  active: !1,
                  name: "base02__info__"
                }), e.PartyAll && i.push({
                  title: "当事人信息",
                  tier: "5",
                  active: !1,
                  name: "base03__info__"
                }), e.TrialAfter && i.push({
                  title: "审理经过",
                  tier: "5",
                  active: !1,
                  name: "base04__info__"
                }), e.Ascertain && i.push({
                  title: "基本案情",
                  tier: "5",
                  active: !1,
                  name: "base05__info__"
                }), e.Identified && i.push({
                  title: "本院认为",
                  tier: "5",
                  active: !1,
                  name: "base06__info__"
                }), e.AccordingLaw && e.AccordingLaw.length > 0 && i.push({
                  title: "法律适用",
                  tier: "5",
                  active: !1,
                  name: "base07__info__"
                }), e.RefereeResult && i.push({
                  title: "裁判结果",
                  tier: "5",
                  active: !1,
                  name: "base08__info__"
                }), ("string" == typeof e.Judge && e.Judge || e.Judge && "object" == (0, o.default)(e.Judge) && e.Judge.length > 0) && i.push({
                  title: "裁判人员",
                  tier: "5",
                  active: !1,
                  name: "base09__info__"
                }), e.LastInstanceDate && i.push({
                  title: "审结日期",
                  tier: "5",
                  active: !1,
                  name: "base10__info__"
                }), i.length > 0) ? 1 === e.structured ? (i = [], e.NavCatalog && (n = i).push.apply(n, (0, r.default)(e.NavCatalog))) : this.structured = 0: (i = [], e.NavCatalog && (a = i).push.apply(a, (0, r.default)(e.NavCatalog)));
                (t = this.catalogueList).push.apply(t, (0, r.default)(i))
              }
            }
          };
        t.default = u
      }).call(this, n("df3c")["default"])
    },
    5882: function(e, t, n) {
      "use strict";
      var a = n("17b3"),
        r = n.n(a);
      r.a
    },
    a038: function(e, t, n) {
      "use strict";
      n.d(t, "b", (function() {
        return r
      })), n.d(t, "c", (function() {
        return o
      })), n.d(t, "a", (function() {
        return a
      }));
      var a = {
          titleBar: function() {
            return n.e("components/title-bar/title-bar").then(n.bind(null, "43c4"))
          },
          keywordPanel: function() {
            return n.e("components/keyword-panel/keyword-panel").then(n.bind(null, "2037"))
          },
          uniPopup: function() {
            return Promise.all([n.e("common/vendor"), n.e("components/uni-popup/uni-popup")]).then(n.bind(null, "1ab0"))
          },
          uniList: function() {
            return n.e("components/uni-list/uni-list").then(n.bind(null, "6c14"))
          },
          uniListItem: function() {
            return n.e("components/uni-list-item/uni-list-item").then(n.bind(null, "e358"))
          },
          bottomNav: function() {
            return n.e("components/bottom-nav/bottom-nav").then(n.bind(null, "24a9"))
          },
          toolbar: function() {
            return n.e("components/toolbar/toolbar").then(n.bind(null, "cd12"))
          },
          textPanel: function() {
            return n.e("components/text-panel/text-panel").then(n.bind(null, "3884"))
          },
          uniDrawer: function() {
            return n.e("components/uni-drawer/uni-drawer").then(n.bind(null, "c0bd"))
          },
          popupCollect: function() {
            return n.e("components/popup-collect/popup-collect").then(n.bind(null, "3fa4"))
          },
          popupShare: function() {
            return n.e("components/popup-share/popup-share").then(n.bind(null, "9a01"))
          }
        },
        r = function() {
          var e = this,
            t = e.$createElement,
            n = (e._self._c, e.show ? e.__map(e.fieldData, (function(t, n) {
              var a = e.__get_orig(t),
                r = "arr_arrObj" == t.type ? e.__map(t.list, (function(t, n) {
                  var a = e.__get_orig(t),
                    r = e.__map(t.twoArr, (function(t, n) {
                      var a = e.__get_orig(t),
                        r = e.renderKeyword(t.value);
                      return {
                        $orig: a,
                        m0: r
                      }
                    }));
                  return {
                    $orig: a,
                    l0: r
                  }
                })) : null,
                o = "arr_arrObj" != t.type ? "arrObj" == t.type && t.list && 0 != t.list.length : null,
                i = "arr_arrObj" != t.type && o ? e.renderKeywordByArrObj(t) : null,
                l = "arr_arrObj" == t.type || o || "obj" != t.type ? null : e.renderKeywordByObj(t),
                s = "arr_arrObj" == t.type || o || "obj" == t.type || "arr" != t.type ? null : e.renderKeywordByArr(t),
                u = "arr_arrObj" == t.type || o || "obj" == t.type || "arr" == t.type || "string" != t.type && "htmlString" != t.type || !t.link ? null : e.renderKeywordByStr(t);
              return {
                $orig: a,
                l1: r,
                g0: o,
                m1: i,
                m2: l,
                m3: s,
                m4: u
              }
            })) : null),
            a = e.show && e.isMembers && e.resultData.FullText ? e.renderKeyword(e.resultData.FullText) : null,
            r = e.show && e.isMembers && e.resultData.AjysName && !e.resultData.FullText ? e.renderKeyword(e.resultData.AjysName) : null,
            o = e.show && e.isMembers && e.resultData.PartyAll && !e.resultData.FullText ? e.renderKeyword(e.resultData.PartyAll) : null,
            i = e.show && e.isMembers && e.resultData.TrialAfter && !e.resultData.FullText ? e.renderKeyword(e.resultData.TrialAfter) : null,
            l = e.show && e.isMembers && e.resultData.Ascertain && !e.resultData.FullText ? e.renderKeyword(e.resultData.Ascertain) : null,
            s = e.show && e.isMembers && e.resultData.Identified && !e.resultData.FullText ? e.renderKeyword(e.resultData.Identified) : null,
            u = e.show && e.isMembers ? e.resultData.AccordingLaw && e.resultData.AccordingLaw.length > 0 && !e.resultData.FullText : null,
            c = e.show && e.isMembers && u ? e.__map(e.resultData.AccordingLaw, (function(t, n) {
              var a = e.__get_orig(t),
                r = e.joinHtml(t);
              return {
                $orig: a,
                m11: r
              }
            })) : null,
            d = e.show && e.isMembers && e.resultData.RefereeResult && !e.resultData.FullText ? e.renderKeyword(e.resultData.RefereeResult) : null,
            h = e.show && e.isMembers && e.resultData.Judge && !e.resultData.FullText ? e.isKinds(e.resultData.Judge, "string") : null,
            p = e.show && e.isMembers && e.resultData.Judge && !e.resultData.FullText && h ? e.renderKeyword(e.resultData.Judge) : null,
            f = e.show && e.isMembers && e.resultData.Judge && !e.resultData.FullText ? e.isKinds(e.resultData.Judge, "object") && e.resultData.Judge.length > 0 : null,
            m = e.show && e.isMembers && e.resultData.Judge && !e.resultData.FullText && f ? e.renderKeyword(e.resultData.Judge.join(",")) : null,
            g = e.show && e.isMembers && e.resultData.LastInstanceDate && !e.resultData.FullText ? e.renderKeyword(e.resultData.LastInstanceDate) : null;
          e.$mp.data = Object.assign({}, {
            $root: {
              l2: n,
              m5: a,
              m6: r,
              m7: o,
              m8: i,
              m9: l,
              m10: s,
              g1: u,
              l3: c,
              m12: d,
              m13: h,
              m14: p,
              m15: f,
              m16: m,
              m17: g
            }
          })
        },
        o = []
    },
    ae33: function(e, t, n) {
      "use strict";
      (function(e, t) {
        var a = n("47a9");
        n("3288");
        a(n("3240"));
        var r = a(n("b2e2"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(r.default)
      }).call(this, n("3223")["default"], n("df3c")["createPage"])
    },
    b2e2: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n("a038"),
        r = n("1669");
      for (var o in r)["default"].indexOf(o) < 0 && function(e) {
        n.d(t, e, (function() {
          return r[e]
        }))
      }(o);
      n("5882");
      var i = n("828b"),
        l = Object(i["a"])(r["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], void 0);
      t["default"] = l.exports
    }
  },
  [
    ["ae33", "common/runtime", "common/vendor"]
  ]
]);
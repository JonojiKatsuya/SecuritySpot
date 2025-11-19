(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/list/list"], {
    "15e9": function(t, e, a) {
      "use strict";
      var i = a("be4e"),
        n = a.n(i);
      n.a
    },
    1724: function(t, e, a) {
      "use strict";
      a.r(e);
      var i = a("a88a"),
        n = a("e78e");
      for (var s in n)["default"].indexOf(s) < 0 && function(t) {
        a.d(e, t, (function() {
          return n[t]
        }))
      }(s);
      a("15e9");
      var o = a("828b"),
        r = Object(o["a"])(n["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], void 0);
      e["default"] = r.exports
    },
    "4db3": function(t, e, a) {
      "use strict";
      (function(t) {
        var i = a("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n, s = i(a("af34")),
          o = i(a("7ca3")),
          r = function() {
            a.e("components/category-tab/category-tab").then(function() {
              return resolve(a("27d1"))
            }.bind(null, a)).catch(a.oe)
          },
          c = {
            components: (n = {
              TitleBar: function() {
                a.e("components/title-bar/title-bar").then(function() {
                  return resolve(a("43c4"))
                }.bind(null, a)).catch(a.oe)
              },
              SearchBar: function() {
                a.e("components/search-bar/search-bar").then(function() {
                  return resolve(a("8789"))
                }.bind(null, a)).catch(a.oe)
              },
              CategoryTab: r,
              SearchCondition: function() {
                a.e("components/search-condition/search-condition").then(function() {
                  return resolve(a("c318"))
                }.bind(null, a)).catch(a.oe)
              }
            }, (0, o.default)(n, "CategoryTab", r), (0, o.default)(n, "CaseTab", (function() {
              Promise.all([a.e("common/vendor"), a.e("components/case-tab/case-tab")]).then(function() {
                return resolve(a("d188"))
              }.bind(null, a)).catch(a.oe)
            })), (0, o.default)(n, "Toolbar", (function() {
              a.e("components/toolbar/toolbar").then(function() {
                return resolve(a("cd12"))
              }.bind(null, a)).catch(a.oe)
            })), (0, o.default)(n, "PopupCollect", (function() {
              a.e("components/popup-collect/popup-collect").then(function() {
                return resolve(a("3fa4"))
              }.bind(null, a)).catch(a.oe)
            })), n),
            data: function() {
              return {
                isActive: !1,
                activeTab: "",
                tabList: [{
                  label: "刑事",
                  value: "pfnl_leian_001"
                }, {
                  label: "民事",
                  value: "pfnl_leian_002"
                }, {
                  label: "执行",
                  value: "pfnl_leian_004"
                }, {
                  label: "行政",
                  value: "pfnl_leian_005"
                }],
                activeMenu: "",
                activeNav: "07",
                navData: [{
                  value: "07",
                  label: "普通案例"
                }, {
                  value: "01",
                  label: "指导案例"
                }],
                listData: [],
                pickerTreeData: [],
                pickerName: "审理法院地区",
                pickerIndex: 0,
                pickerData: [],
                multiPickerName: "审理法院",
                multiPickerIndex: [0, 0],
                multiPickerData: [
                  [],
                  []
                ],
                docType: "文书类型",
                docTypeIndex: 0,
                docTypeData: [{
                  itemkey: "001",
                  itemname: "判决书"
                }, {
                  itemkey: "002",
                  itemname: "裁定书"
                }, {
                  itemkey: "003",
                  itemname: "决定书"
                }, {
                  itemkey: "004",
                  itemname: "调解书"
                }, {
                  itemkey: "005",
                  itemname: "其他文书"
                }],
                classCodekeys: [],
                caseGrades: {
                  key: "CaseGrade",
                  value: "07",
                  label: "普通案例"
                },
                conditionData: "",
                collectGid: "",
                isQueryMFD: !1,
                tabArr: ["Cpgz", "Ascertain", "Identified", "AccordingLaw", "HisDocuments"],
                reg: /[市|盟|县|地区|自治州]/g,
                isShowTips: !1,
                isShowNoMore: !1,
                searchKeyword: "",
                hideMask: !1,
                tagJson: [],
                showBackTop: !1,
                toView: "",
                total: ""
              }
            },
            onLoad: function(t) {
              t.params && (this.isQueryMFD = !0, this.$store.state.params.index = "pfnl_leian_002", this.$store.state.params.scope = "LawidChinese", this.$store.state.params.keyword = "中华人民共和国民法典" + t.params)
            },
            onShow: function() {
              this.isQueryMFD || (this.$store.state.params.scope = "FullText"), this.activeTab = this.$store.state.params.index, this.activeMenu = this.$store.state.params.scope, this.searchKeyword = this.$store.state.params.keyword, this.$refs.popupCollect.getCollectListData()
            },
            onReachBottom: function() {
              this.listData.length < this.$store.state.params.page * this.$store.state.params.size ? this.isShowNoMore = !0 : (this.$store.state.params.page += 1, this.getListData(!0))
            },
            mounted: function() {
              this.getListData(), this.getDictData()
            },
            methods: {
              returnBackToTop: function() {
                this.showBackTop = !1, this.toView = "title-bar", console.log(this.toView)
              },
              pageScrollGo: function(t) {
                this.toView = "", this.showBackTop = t.detail.scrollTop > 400
              },
              handleTapPicker: function() {
                t.showToast({
                  title: "请先选择审理法院地区",
                  icon: "none"
                })
              },
              returnSaveHistory: function() {
                this.$store.state.params.tagJson = this.tagJson, this.$store.state.params.classCodeKeys = this.classCodekeys, this.getListData()
              },
              returnSaveCondition: function() {
                this.$store.state.params.tagJson = this.tagJson, this.$store.state.params.classCodeKeys = this.classCodekeys
              },
              returnAddSucc: function() {
                this.$refs.popup.close()
              },
              returnCategoryTabValue: function(t) {
                this.$store.state.params.index = t
              },
              linkToDetails: function(e) {
                t.navigateTo({
                  url: "../details/details?gid=" + e.Gid
                })
              },
              returnClear: function(e) {
                e && "searchValue" != e || (this.$store.state.params.keyword = "", this.$refs.searchBar.searchValue = this.$store.state.params.keyword), e && "searchCourt" != e || (this.classCodekeys = [], this.$store.state.params.classCodeKeys = this.classCodekeys, this.pickerName = "审理法院地区", this.pickerIndex = 0, this.multiPickerName = "审理法院", this.multiPickerIndex = [0, 0], this.hideMask = "审理法院地区" != this.pickerName), e && "searchDocType" != e || (this.tagJson = [], this.$store.state.params.tagJson = this.tagJson, this.docType = "文书类型", this.docTypeIndex = 0);
                var a = this.$store.state.params.keyword,
                  i = this.$store.state.params.classCodeKeys.length,
                  n = this.$store.state.params.tagJson.length;
                "" == a && 0 == i && 0 == n ? t.navigateTo({
                  url: "../../pages/search/search"
                }) : this.getListData()
              },
              handlePicker: function(t) {
                this.pickerName = this.pickerData[t.target.value].itemname, this.pickerIndex = t.target.value, this.multiPickerName = "审理法院", this.multiPickerIndex = [0, 0], this.multiPickerData = [this.pickerTreeData[this.pickerIndex].children, this.pickerTreeData[this.pickerIndex].children[0].children], this.classCodekeys = [{
                  key: "LastInstanceCourt",
                  value: this.pickerData[t.target.value].itemkey,
                  label: this.pickerData[t.target.value].itemname
                }], this.hideMask = "审理法院地区" != this.pickerName
              },
              handleColPicker: function(t) {
                0 === t.target.column && (this.multiPickerIndex = [t.target.value, 0], this.multiPickerData[1] = this.pickerTreeData[this.pickerIndex].children[this.multiPickerIndex[0]].children)
              },
              handleMultiPicker: function(t) {
                this.multiPickerData[1].length > 0 ? (this.multiPickerName = this.multiPickerData[1][t.target.value[1]].itemname, this.classCodekeys = [{
                  key: "LastInstanceCourt",
                  value: this.multiPickerData[1][t.target.value[1]].itemkey,
                  label: this.multiPickerData[1][t.target.value[1]].itemname
                }]) : (this.multiPickerName = this.multiPickerData[0][t.target.value[0]].itemname, this.classCodekeys = [{
                  key: "LastInstanceCourt",
                  value: this.multiPickerData[0][t.target.value[0]].itemkey,
                  label: this.multiPickerData[0][t.target.value[0]].itemname
                }])
              },
              handlePickerDocType: function(t) {
                this.docType = this.docTypeData[t.target.value].itemname, this.docTypeIndex = t.target.value, this.tagJson = [{
                  type: "box",
                  fieldInquiryMode: 0,
                  name: "文书类型",
                  itemlist: [this.docTypeData[t.target.value].itemkey],
                  namelist: [this.docTypeData[t.target.value].itemname],
                  fieldName: "DocumentAttr"
                }]
              },
              toggleNav: function(t) {
                this.activeNav = t.value, this.total = "", this.caseGrades.value = t.value, this.caseGrades.label = t.label, this.$store.state.params.caseGrade = t.value, this.getListData()
              },
              getListData: function(t) {
                var e = this;
                this.isShowNoMore = !1, t || (this.$store.state.params.page = 1), this.$request("/applet/search/maincontent", "POST", this.$store.state.params).then((function(a) {
                  if (a.data.data.maincontent[0].data.length > 0) {
                    e.isShowTips = !1;
                    var i = a.data.data.maincontent[0].data;
                    e.total = "（".concat(a.data.data.maincontent[0].total, "）"), i.forEach((function(t) {
                      var a = e.getDataKey(t);
                      if (a) {
                        if ("Cpgz" == a) {
                          var i = t[a].replace(/\n/g, "@"),
                            n = i.split("@");
                          t.toggle = n.length > 1
                        } else t.toggle = t[a].length > 140;
                        t.showCaseTab = !0
                      } else t.showCaseTab = !1
                    })), e.conditionData = e.$store.state.params, t ? e.listData = [].concat((0, s.default)(e.listData), (0, s.default)(a.data.data.maincontent[0].data)) : (e.listData = [], e.listData = a.data.data.maincontent[0].data)
                  } else t || (e.listData = [], e.total = "", e.isShowTips = !0)
                })).catch((function(t) {
                  console.log(t)
                }))
              },
              getDataKey: function(t) {
                var e = [];
                return this.tabArr.forEach((function(a, i) {
                  -1 != Object.keys(t).indexOf(a) && e.push(a)
                })), e[0]
              },
              getDictData: function() {
                var t = this,
                  e = {
                    index: this.$store.state.params.index
                  };
                this.$request("/applet/dict/infoLastInstanceCourt", "GET", e).then((function(e) {
                  var a = [],
                    i = [],
                    n = ["01", "33", "34", "35", "36", "37", "38"];
                  e.data.data.forEach((function(t) {
                    t.children = [], t.haschild && 2 == t.itemkey.length && -1 == n.indexOf(t.itemkey) && a.push(t), t.haschild && 4 == t.itemkey.length && i.push(t)
                  })), i.forEach((function(t) {
                    a.forEach((function(e) {
                      e.id === t.pid && (t.itemname = t.itemname.replace(e.itemname, ""), t.replace = e.itemname, e.children.push(t))
                    }))
                  })), e.data.data.forEach((function(e, a) {
                    e.haschild || i.forEach((function(a) {
                      if (a.id === e.pid) {
                        var i = a.itemname.search(t.reg);
                        if (-1 != i) {
                          var n = a.replace + a.itemname.substring(0, i + 1); - 1 != e.itemname.indexOf(n) ? e.itemname = e.itemname.replace(n, "") : e.itemname = e.itemname.replace(a.replace, "")
                        } else e.itemname = e.itemname.replace(a.replace, "");
                        a.children.push(e)
                      }
                    }))
                  }));
                  var s = [{
                    children: [{
                      children: [],
                      haschild: 0,
                      id: "pfnl_leian_001_LastInstanceCourt01",
                      itemkey: "01",
                      itemname: "最高人民法院",
                      pid: "pfnl_leian_001_LastInstanceCourt"
                    }],
                    haschild: 1,
                    id: "pfnl_leian_001_LastInstanceCourt00",
                    itemkey: "00",
                    itemname: "全国",
                    pid: "pfnl_leian_001_LastInstanceCourt"
                  }];
                  t.pickerTreeData = s.concat(a), t.pickerData = s.concat(a), t.multiPickerData = [t.pickerTreeData[t.pickerIndex].children, t.pickerTreeData[t.pickerIndex].children[0].children]
                })).catch((function(t) {
                  console.log(t)
                }))
              }
            }
          };
        e.default = c
      }).call(this, a("df3c")["default"])
    },
    "7de6": function(t, e, a) {
      "use strict";
      (function(t, e) {
        var i = a("47a9");
        a("3288");
        i(a("3240"));
        var n = i(a("1724"));
        t.__webpack_require_UNI_MP_PLUGIN__ = a, e(n.default)
      }).call(this, a("3223")["default"], a("df3c")["createPage"])
    },
    a88a: function(t, e, a) {
      "use strict";
      a.d(e, "b", (function() {
        return n
      })), a.d(e, "c", (function() {
        return s
      })), a.d(e, "a", (function() {
        return i
      }));
      var i = {
          titleBar: function() {
            return a.e("components/title-bar/title-bar").then(a.bind(null, "43c4"))
          },
          searchBar: function() {
            return a.e("components/search-bar/search-bar").then(a.bind(null, "8789"))
          },
          categoryTab: function() {
            return a.e("components/category-tab/category-tab").then(a.bind(null, "27d1"))
          },
          searchCondition: function() {
            return a.e("components/search-condition/search-condition").then(a.bind(null, "c318"))
          },
          caseTab: function() {
            return Promise.all([a.e("common/vendor"), a.e("components/case-tab/case-tab")]).then(a.bind(null, "d188"))
          },
          toolbar: function() {
            return a.e("components/toolbar/toolbar").then(a.bind(null, "cd12"))
          },
          uniPopup: function() {
            return Promise.all([a.e("common/vendor"), a.e("components/uni-popup/uni-popup")]).then(a.bind(null, "1ab0"))
          },
          popupCollect: function() {
            return a.e("components/popup-collect/popup-collect").then(a.bind(null, "3fa4"))
          }
        },
        n = function() {
          var t = this,
            e = t.$createElement,
            a = (t._self._c, t.__map(t.listData, (function(e, a) {
              var i = t.__get_orig(e),
                n = e.hitInfo && e.hitInfo.allCountList.length > 0,
                s = n ? t.__map(e.hitInfo.allCountList, (function(a, i) {
                  var n = t.__get_orig(a),
                    s = e.hitInfo.allCountList.length;
                  return {
                    $orig: n,
                    g1: s
                  }
                })) : null;
              return {
                $orig: i,
                g0: n,
                l0: s
              }
            })));
          t.$mp.data = Object.assign({}, {
            $root: {
              l1: a
            }
          })
        },
        s = []
    },
    be4e: function(t, e, a) {},
    e78e: function(t, e, a) {
      "use strict";
      a.r(e);
      var i = a("4db3"),
        n = a.n(i);
      for (var s in i)["default"].indexOf(s) < 0 && function(t) {
        a.d(e, t, (function() {
          return i[t]
        }))
      }(s);
      e["default"] = n.a
    }
  },
  [
    ["7de6", "common/runtime", "common/vendor"]
  ]
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/poster/poster"], {
    3698: function(t, e, n) {
      "use strict";
      (function(t, e) {
        var i = n("47a9");
        n("3288");
        i(n("3240"));
        var o = i(n("bf30"));
        t.__webpack_require_UNI_MP_PLUGIN__ = n, e(o.default)
      }).call(this, n("3223")["default"], n("df3c")["createPage"])
    },
    "58e0": function(t, e, n) {},
    b645: function(t, e, n) {
      "use strict";
      n.d(e, "b", (function() {
        return o
      })), n.d(e, "c", (function() {
        return a
      })), n.d(e, "a", (function() {
        return i
      }));
      var i = {
          titleBar: function() {
            return n.e("components/title-bar/title-bar").then(n.bind(null, "43c4"))
          },
          uniPopup: function() {
            return Promise.all([n.e("common/vendor"), n.e("components/uni-popup/uni-popup")]).then(n.bind(null, "1ab0"))
          }
        },
        o = function() {
          var t = this.$createElement;
          this._self._c
        },
        a = []
    },
    bf30: function(t, e, n) {
      "use strict";
      n.r(e);
      var i = n("b645"),
        o = n("d809");
      for (var a in o)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return o[t]
        }))
      }(a);
      n("e681");
      var s = n("828b"),
        c = Object(s["a"])(o["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], void 0);
      e["default"] = c.exports
    },
    d074: function(t, e, n) {
      "use strict";
      (function(t, i) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var o = {
          components: {
            TitleBar: function() {
              n.e("components/title-bar/title-bar").then(function() {
                return resolve(n("43c4"))
              }.bind(null, n)).catch(n.oe)
            }
          },
          data: function() {
            return {
              sysInfo: {
                wid: 0,
                hei: 0
              },
              gid: "",
              bgList: [],
              nickName: "",
              detailsTitle: "",
              bgUrl: "https://zhfz.pkulaw.com/poster/background-1.png",
              avatarUrl: "",
              qrCodeUrl: "",
              bgLocalPath: "",
              avatarLocalPath: "",
              qrCodeLocalPath: "",
              showExportBtn: !1
            }
          },
          onLoad: function(t) {
            this.gid = t.gid, this.detailsTitle = t.detailsTitle ? t.detailsTitle : "标题"
          },
          mounted: function() {
            t.authorize({
              scope: "scope.writePhotosAlbum",
              success: function(t) {
                console.log("res ", t)
              },
              fail: function(t) {
                console.log("err ", t)
              }
            });
            var e = i.getFileSystemManager();
            e.readdir({
              dirPath: i.env.USER_DATA_PATH,
              success: function(t) {
                t.files.forEach((function(t) {
                  "miniprogramLog" !== t && e.unlink({
                    filePath: "".concat(i.env.USER_DATA_PATH, "/").concat(t),
                    fail: function(t) {
                      console.log("readdir文件删除失败：", t)
                    }
                  })
                }))
              }
            }), this.getPosterData()
          },
          methods: {
            handleSet: function() {
              this.$refs.popupAuth.close()
            },
            handleClose: function() {
              this.$refs.popupAuth.close()
            },
            handleSelectBg: function(t) {
              this.bgUrl = t.backgroundPath
            },
            getPosterData: function() {
              var e = this;
              t.showLoading({
                title: "加载中"
              });
              var n = new Promise((function(t, n) {
                  e.$request("/applet/poster/QRCodeGenerate", "POST", {
                    path: "pages/transfer/transfer?gid=" + e.gid
                  }).then((function(e) {
                    t(e.data.data)
                  })).catch((function(t) {
                    n(t)
                  }))
                })),
                i = new Promise((function(t, n) {
                  e.$request("/applet/poster/backgroundImgList", "GET").then((function(e) {
                    t(e.data.data)
                  })).catch((function(t) {
                    n(t)
                  }))
                })),
                o = new Promise((function(e, n) {
                  t.getStorage({
                    key: "wxInfo",
                    success: function(t) {
                      e(t.data)
                    },
                    fail: function(t) {
                      n(t)
                    }
                  })
                })),
                a = new Promise((function(e, n) {
                  t.getSystemInfo({
                    success: function(t) {
                      e(t)
                    },
                    fail: function(t) {
                      n(t)
                    }
                  })
                }));
              Promise.all([n, i, o, a]).then((function(t) {
                e.qrCodeUrl = t[0].imgBase64, e.bgList = t[1], e.nickName = t[2].userInfo.nickName, e.avatarUrl = t[2].userInfo.avatarUrl, e.sysInfo.wid = t[3].windowWidth, e.sysInfo.hei = t[3].windowHeight, console.log(e.sysInfo), e.showExportBtn = !0
              }))
            },
            renderBase64ToUrl: function() {
              t.showLoading({
                title: "正在生成海报!"
              });
              var e = this,
                n = i.getFileSystemManager(),
                o = e.qrCodeUrl.split(",")[1].replace(/[\r\n]/g, ""),
                a = (new Date).getTime(),
                s = i.base64ToArrayBuffer(o),
                c = "".concat(i.env.USER_DATA_PATH, "/").concat(a, "share.").concat("png");
              n.writeFile({
                filePath: c,
                data: s,
                encoding: "binary",
                success: function(t) {
                  e.getImgLocalPath(c)
                }
              })
            },
            getImgLocalPath: function(e) {
              var n = this,
                i = new Promise((function(e, i) {
                  t.getImageInfo({
                    src: n.bgUrl,
                    success: function(t) {
                      e(t)
                    },
                    fail: function(t) {
                      i(t)
                    }
                  })
                })),
                o = new Promise((function(e, i) {
                  t.getImageInfo({
                    src: n.avatarUrl,
                    success: function(t) {
                      e(t)
                    },
                    fail: function(t) {
                      i(t)
                    }
                  })
                })),
                a = new Promise((function(n, i) {
                  t.getImageInfo({
                    src: e,
                    success: function(t) {
                      n(t)
                    },
                    fail: function(t) {
                      i(t)
                    }
                  })
                }));
              Promise.all([i, o, a]).then((function(t) {
                n.bgLocalPath = t[0].path, n.avatarLocalPath = t[1].path, n.qrCodeLocalPath = t[2].path, n.renderPoster()
              })).catch((function(t) {}))
            },
            circleImg: function(t, e, n, i, o) {
              t.save();
              var a = 2 * o,
                s = n + o,
                c = i + o;
              t.arc(s, c, o, 0, 2 * Math.PI), t.clip(), t.drawImage(e, n, i, a, a), t.restore()
            },
            renderPoster: function() {
              var e = this,
                n = t.createCanvasContext("cvs");
              n.setFillStyle("#ffffff"), n.fillRect(0, 0, this.sysInfo.wid, this.sysInfo.hei), n.drawImage(this.bgLocalPath, 0, 88, this.sysInfo.wid, this.sysInfo.hei - 224 - 88), n.drawImage(this.qrCodeLocalPath, 266, 674, 80, 80), n.setTextAlign("center"), n.setFillStyle("#333333"), n.font = "normal bold 20px Micosoft Yahei";
              var i = "",
                o = "";
              this.detailsTitle.length > 10 ? (o = this.detailsTitle.slice(10, this.detailsTitle.length), i = this.detailsTitle.slice(0, 10)) : i = this.detailsTitle, o.length > 8 && (o = o.slice(0, 8) + " ..."), n.fillText(i, 116, 708), n.fillText(o, 116, 738), n.setFillStyle("#999"), n.font = "12px Micosoft Yahei", n.fillText(this.nickName, 187.5, 674), n.setFillStyle("#9B0000"), n.font = "14px Micosoft Yahei", n.fillText("扫码查看详情", 187.5, 788), n.beginPath(), n.arc(this.sysInfo.wid / 2, 620, 36, 0, 2 * Math.PI), n.clip(), n.drawImage(this.avatarLocalPath, this.sysInfo.wid / 2 - 36, 584, 72, 72), n.draw(), setTimeout((function() {
                t.canvasToTempFilePath({
                  canvasId: "cvs",
                  success: function(t) {
                    var n = t.tempFilePath;
                    e.exportPoster(n)
                  },
                  fail: function(t) {
                    console.log(t)
                  }
                })
              }), 500)
            },
            exportPoster: function(e) {
              var n = this;
              t.getImageInfo({
                src: e,
                success: function(e) {
                  t.getSetting({
                    success: function(i) {
                      i.authSetting["scope.writePhotosAlbum"] ? t.saveImageToPhotosAlbum({
                        filePath: e.path,
                        success: function(e) {
                          t.showToast({
                            title: "已保存到相册",
                            icon: "success"
                          })
                        },
                        fail: function(e) {
                          t.showToast({
                            title: "保存失败",
                            icon: "fail"
                          })
                        }
                      }) : (t.hideLoading(), n.$refs.popupAuth.open())
                    },
                    fail: function(t) {
                      console.log("err ", t)
                    }
                  })
                },
                fail: function(e) {
                  t.showToast({
                    title: "失败",
                    icon: "fail"
                  })
                }
              })
            }
          }
        };
        e.default = o
      }).call(this, n("df3c")["default"], n("3223")["default"])
    },
    d809: function(t, e, n) {
      "use strict";
      n.r(e);
      var i = n("d074"),
        o = n.n(i);
      for (var a in i)["default"].indexOf(a) < 0 && function(t) {
        n.d(e, t, (function() {
          return i[t]
        }))
      }(a);
      e["default"] = o.a
    },
    e681: function(t, e, n) {
      "use strict";
      var i = n("58e0"),
        o = n.n(i);
      o.a
    }
  },
  [
    ["3698", "common/runtime", "common/vendor"]
  ]
]);
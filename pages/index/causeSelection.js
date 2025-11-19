(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/index/causeSelection"], {
    1217: function(e, a, t) {
      "use strict";
      (function(e) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        }), a.default = void 0;
        var t = {
          data: function() {
            return {
              cause: -1,
              causeList: [{
                name: "民间借贷纠纷"
              }, {
                name: "离婚纠纷"
              }, {
                name: "劳动争议纠纷"
              }, {
                name: "买卖合同纠纷"
              }, {
                name: "金融借款合同纠纷"
              }, {
                name: "物业服务合同纠纷"
              }, {
                name: "银行信用卡纠纷"
              }, {
                name: "机动车交通事故责任纠纷"
              }, {
                name: "融资租赁合同纠纷"
              }, {
                name: "保证保险合同纠纷"
              }, {
                name: "证券虚假陈述责任纠纷"
              }, {
                name: "通用纠纷"
              }],
              disabled: !0,
              formData: {},
              formItems: []
            }
          },
          methods: {
            initForm: function() {
              switch (this.cause) {
                case 0:
                  this.formData = {
                    plaintiff: "",
                    defendant: "",
                    thirdParty: "",
                    contract: "",
                    electronicDelivery: ""
                  }, this.formItems = [{
                    name: "plaintiff",
                    label: "1、您是为自己还是代表公司起诉？",
                    localdata: [{
                      text: "自己",
                      value: "1"
                    }, {
                      text: "个人委托代理",
                      value: "2"
                    }, {
                      text: "公司",
                      value: "3"
                    }, {
                      text: "公司委托代理",
                      value: "4"
                    }]
                  }, {
                    name: "defendant",
                    label: "2、对方是个人还是公司/非法人组织？",
                    localdata: [{
                      text: "个人",
                      value: "1"
                    }, {
                      text: "公司",
                      value: "2"
                    }]
                  }, {
                    name: "thirdParty",
                    label: "3、此次借贷是否有第三人参与(例如担保人保证人)？",
                    localdata: [{
                      text: "没有",
                      value: "1"
                    }, {
                      text: "有（个人担保）",
                      value: "2"
                    }, {
                      text: "有（公司担保）",
                      value: "3"
                    }]
                  }, {
                    name: "contract",
                    label: "4、借款时是否签订合同或者借据等凭证？",
                    localdata: [{
                      text: "签订合同",
                      value: "1"
                    }, {
                      text: "写了借据",
                      value: "2"
                    }, {
                      text: "口头约定",
                      value: "3"
                    }]
                  }, {
                    name: "electronicDelivery",
                    label: "5、是否接受短信、微信、邮箱等方式的电子送达？",
                    localdata: [{
                      text: "接受",
                      value: "1"
                    }, {
                      text: "不接受",
                      value: "2"
                    }]
                  }];
                  break;
                case 1:
                  this.formData = {
                    haveChildren: "",
                    visitChildren: "",
                    compensation: "",
                    electronicDelivery: ""
                  }, this.formItems = [{
                    name: "haveChildren",
                    label: "1、你们是否有子女？",
                    localdata: [{
                      text: "有",
                      value: "1"
                    }, {
                      text: "没有",
                      value: "2"
                    }]
                  }, {
                    name: "visitChildren",
                    label: "2、是否允许对方探望子女？",
                    localdata: [{
                      text: "允许",
                      value: "1"
                    }, {
                      text: "不允许",
                      value: "2"
                    }]
                  }, {
                    name: "compensation",
                    label: "3、是否要求对方进行离婚损害赔偿/经济补偿/经济帮助？",
                    localdata: [{
                      text: "是",
                      value: "1"
                    }, {
                      text: "否",
                      value: "2"
                    }]
                  }, {
                    name: "electronicDelivery",
                    label: "4、是否接受短信、微信、邮箱等方式的电子送达？",
                    localdata: [{
                      text: "接受",
                      value: "1"
                    }, {
                      text: "不接受",
                      value: "2"
                    }]
                  }];
                  break;
                case 2:
                  this.formData = {
                    plaintiff: "",
                    arbitration: "",
                    contract: "",
                    workInjury: "",
                    electronicDelivery: ""
                  }, this.formItems = [{
                    name: "plaintiff",
                    label: "1、您是为自己还是代表公司起诉？",
                    localdata: [{
                      text: "自己",
                      value: "1"
                    }, {
                      text: "个人委托代理",
                      value: "2"
                    }]
                  }, {
                    name: "arbitration",
                    label: "2、在此之前是否进行过劳动仲裁？",
                    localdata: [{
                      text: "有过劳动仲裁",
                      value: "1"
                    }, {
                      text: "没有",
                      value: "2"
                    }]
                  }, {
                    name: "contract",
                    label: "3、是否签订书面劳动合同/协议？",
                    localdata: [{
                      text: "签订了",
                      value: "1"
                    }, {
                      text: "没有",
                      value: "2"
                    }]
                  }, {
                    name: "workInjury",
                    label: "4、是否存在工伤情况？",
                    localdata: [{
                      text: "没有工伤",
                      value: "1"
                    }, {
                      text: "有工伤",
                      value: "2"
                    }]
                  }, {
                    name: "electronicDelivery",
                    label: "5、是否接受短信、微信、邮箱等方式的电子送达？",
                    localdata: [{
                      text: "接受",
                      value: "1"
                    }, {
                      text: "不接受",
                      value: "2"
                    }]
                  }];
                  break;
                case 3:
                  this.formData = {
                    plaintiff: "",
                    buyerOrSeller: "",
                    defendant: "",
                    thirdParty: "",
                    electronicDelivery: ""
                  }, this.formItems = [{
                    name: "plaintiff",
                    label: "1、您是为自己还是代表公司起诉？",
                    localdata: [{
                      text: "自己",
                      value: "1"
                    }, {
                      text: "个人委托代理",
                      value: "2"
                    }, {
                      text: "公司",
                      value: "3"
                    }, {
                      text: "公司委托代理",
                      value: "4"
                    }]
                  }, {
                    name: "buyerOrSeller",
                    label: "2、您是买方还是卖方？",
                    localdata: [{
                      text: "买方",
                      value: "1"
                    }, {
                      text: "卖方",
                      value: "2"
                    }]
                  }, {
                    name: "defendant",
                    label: "3、对方是个人还是公司/非法人组织？",
                    localdata: [{
                      text: "个人",
                      value: "1"
                    }, {
                      text: "公司",
                      value: "2"
                    }]
                  }, {
                    name: "thirdParty",
                    label: "4、此次合同是否有第三人参与(例如担保人保证人)？",
                    localdata: [{
                      text: "没有",
                      value: "1"
                    }, {
                      text: "有（个人担保）",
                      value: "2"
                    }, {
                      text: "有（公司担保）",
                      value: "3"
                    }]
                  }, {
                    name: "electronicDelivery",
                    label: "5、是否接受短信、微信、邮箱等方式的电子送达？",
                    localdata: [{
                      text: "接受",
                      value: "1"
                    }, {
                      text: "不接受",
                      value: "2"
                    }]
                  }];
                  break;
                case 4:
                  this.formData = {
                    plaintiff: "",
                    defendant: "",
                    thirdParty: "",
                    electronicDelivery: ""
                  }, this.formItems = [{
                    name: "plaintiff",
                    label: "1、您是为自己还是代表公司起诉？",
                    localdata: [{
                      text: "自己",
                      value: "1"
                    }, {
                      text: "个人委托代理",
                      value: "2"
                    }, {
                      text: "公司",
                      value: "3"
                    }, {
                      text: "公司委托代理",
                      value: "4"
                    }]
                  }, {
                    name: "defendant",
                    label: "2、对方是个人还是公司/非法人组织？",
                    localdata: [{
                      text: "个人",
                      value: "1"
                    }, {
                      text: "公司",
                      value: "2"
                    }]
                  }, {
                    name: "thirdParty",
                    label: "3、此次借贷是否有第三人参与(例如担保人保证人)？",
                    localdata: [{
                      text: "没有",
                      value: "1"
                    }, {
                      text: "有（个人担保）",
                      value: "2"
                    }, {
                      text: "有（公司担保）",
                      value: "3"
                    }]
                  }, {
                    name: "electronicDelivery",
                    label: "4、是否接受短信、微信、邮箱等方式的电子送达？",
                    localdata: [{
                      text: "接受",
                      value: "1"
                    }, {
                      text: "不接受",
                      value: "2"
                    }]
                  }];
                  break;
                case 5:
                  this.formData = {
                    plaintiff: "",
                    defendant: "",
                    thirdParty: "",
                    electronicDelivery: ""
                  }, this.formItems = [{
                    name: "plaintiff",
                    label: "1、您是为自己还是代表公司起诉？",
                    localdata: [{
                      text: "自己",
                      value: "1"
                    }, {
                      text: "个人委托代理",
                      value: "2"
                    }, {
                      text: "公司",
                      value: "3"
                    }, {
                      text: "公司委托代理",
                      value: "4"
                    }]
                  }, {
                    name: "defendant",
                    label: "2、对方是个人还是公司/非法人组织？",
                    localdata: [{
                      text: "个人",
                      value: "1"
                    }, {
                      text: "公司",
                      value: "2"
                    }]
                  }, {
                    name: "thirdParty",
                    label: "3、此次合同是否有第三人参与(例如担保人保证人)？",
                    localdata: [{
                      text: "没有",
                      value: "1"
                    }, {
                      text: "有（个人担保）",
                      value: "2"
                    }, {
                      text: "有（公司担保）",
                      value: "3"
                    }]
                  }, {
                    name: "electronicDelivery",
                    label: "4、是否接受短信、微信、邮箱等方式的电子送达？",
                    localdata: [{
                      text: "接受",
                      value: "1"
                    }, {
                      text: "不接受",
                      value: "2"
                    }]
                  }];
                  break;
                case 6:
                  this.formData = {
                    plaintiff: "",
                    defendant: "",
                    thirdParty: "",
                    electronicDelivery: ""
                  }, this.formItems = [{
                    name: "plaintiff",
                    label: "1、您是为自己还是代表公司起诉？",
                    localdata: [{
                      text: "自己",
                      value: "1"
                    }, {
                      text: "个人委托代理",
                      value: "2"
                    }, {
                      text: "公司",
                      value: "3"
                    }, {
                      text: "公司委托代理",
                      value: "4"
                    }]
                  }, {
                    name: "defendant",
                    label: "2、对方是个人还是公司/非法人组织？",
                    localdata: [{
                      text: "个人",
                      value: "1"
                    }, {
                      text: "公司",
                      value: "2"
                    }]
                  }, {
                    name: "thirdParty",
                    label: "3、此次借贷是否有第三人参与(例如担保人保证人)？",
                    localdata: [{
                      text: "没有",
                      value: "1"
                    }, {
                      text: "有（个人担保）",
                      value: "2"
                    }, {
                      text: "有（公司担保）",
                      value: "3"
                    }]
                  }, {
                    name: "electronicDelivery",
                    label: "4、是否接受短信、微信、邮箱等方式的电子送达？",
                    localdata: [{
                      text: "接受",
                      value: "1"
                    }, {
                      text: "不接受",
                      value: "2"
                    }]
                  }];
                  break;
                case 7:
                  this.formData = {
                    plaintiff: "",
                    defendant: "",
                    thirdParty: "",
                    electronicDelivery: ""
                  }, this.formItems = [{
                    name: "plaintiff",
                    label: "1、您是为自己还是代表公司起诉？",
                    localdata: [{
                      text: "自己",
                      value: "1"
                    }, {
                      text: "个人委托代理",
                      value: "2"
                    }, {
                      text: "公司",
                      value: "3"
                    }, {
                      text: "公司委托代理",
                      value: "4"
                    }]
                  }, {
                    name: "defendant",
                    label: "2、对方是个人还是公司/非法人组织？",
                    localdata: [{
                      text: "个人",
                      value: "1"
                    }, {
                      text: "公司",
                      value: "2"
                    }]
                  }, {
                    name: "thirdParty",
                    label: "3、是否有第三人参与(例如担保人保证人)？",
                    localdata: [{
                      text: "没有",
                      value: "1"
                    }, {
                      text: "有（个人担保）",
                      value: "2"
                    }, {
                      text: "有（公司担保）",
                      value: "3"
                    }]
                  }, {
                    name: "electronicDelivery",
                    label: "4、是否接受短信、微信、邮箱等方式的电子送达？",
                    localdata: [{
                      text: "接受",
                      value: "1"
                    }, {
                      text: "不接受",
                      value: "2"
                    }]
                  }];
                  break;
                case 8:
                  this.formData = {
                    plaintiff: "",
                    defendant: "",
                    thirdParty: "",
                    electronicDelivery: ""
                  }, this.formItems = [{
                    name: "plaintiff",
                    label: "1、您是为自己还是代表公司起诉？",
                    localdata: [{
                      text: "自己",
                      value: "1"
                    }, {
                      text: "个人委托代理",
                      value: "2"
                    }, {
                      text: "公司",
                      value: "3"
                    }, {
                      text: "公司委托代理",
                      value: "4"
                    }]
                  }, {
                    name: "defendant",
                    label: "2、对方是个人还是公司/非法人组织？",
                    localdata: [{
                      text: "个人",
                      value: "1"
                    }, {
                      text: "公司",
                      value: "2"
                    }]
                  }, {
                    name: "thirdParty",
                    label: "3、此次合同是否有第三人参与(例如担保人保证人)？",
                    localdata: [{
                      text: "没有",
                      value: "1"
                    }, {
                      text: "有（个人担保）",
                      value: "2"
                    }, {
                      text: "有（公司担保）",
                      value: "3"
                    }]
                  }, {
                    name: "electronicDelivery",
                    label: "4、是否接受短信、微信、邮箱等方式的电子送达？",
                    localdata: [{
                      text: "接受",
                      value: "1"
                    }, {
                      text: "不接受",
                      value: "2"
                    }]
                  }];
                  break;
                case 9:
                  this.formData = {
                    plaintiff: "",
                    defendant: "",
                    thirdParty: "",
                    electronicDelivery: ""
                  }, this.formItems = [{
                    name: "plaintiff",
                    label: "1、您是为自己还是代表公司起诉？",
                    localdata: [{
                      text: "自己",
                      value: "1"
                    }, {
                      text: "个人委托代理",
                      value: "2"
                    }, {
                      text: "公司",
                      value: "3"
                    }, {
                      text: "公司委托代理",
                      value: "4"
                    }]
                  }, {
                    name: "defendant",
                    label: "2、对方是个人还是公司/非法人组织？",
                    localdata: [{
                      text: "个人",
                      value: "1"
                    }, {
                      text: "公司",
                      value: "2"
                    }]
                  }, {
                    name: "thirdParty",
                    label: "3、此次合同是否有第三人参与(例如担保人保证人)？",
                    localdata: [{
                      text: "没有",
                      value: "1"
                    }, {
                      text: "有（个人担保）",
                      value: "2"
                    }, {
                      text: "有（公司担保）",
                      value: "3"
                    }]
                  }, {
                    name: "electronicDelivery",
                    label: "4、是否接受短信、微信、邮箱等方式的电子送达？",
                    localdata: [{
                      text: "接受",
                      value: "1"
                    }, {
                      text: "不接受",
                      value: "2"
                    }]
                  }];
                  break;
                case 10:
                  this.formData = {
                    plaintiff: "",
                    defendant: "",
                    thirdParty: "",
                    electronicDelivery: "",
                    jointLiability: ""
                  }, this.formItems = [{
                    name: "plaintiff",
                    label: "1、您是为自己还是代表公司起诉？",
                    localdata: [{
                      text: "自己",
                      value: "1"
                    }, {
                      text: "个人委托代理",
                      value: "2"
                    }, {
                      text: "公司",
                      value: "3"
                    }, {
                      text: "公司委托代理",
                      value: "4"
                    }]
                  }, {
                    name: "defendant",
                    label: "2、对方是个人还是公司/非法人组织？",
                    localdata: [{
                      text: "个人",
                      value: "1"
                    }, {
                      text: "公司",
                      value: "2"
                    }]
                  }, {
                    name: "thirdParty",
                    label: "3、此次合同是否有第三人参与(例如担保人保证人)？",
                    localdata: [{
                      text: "没有",
                      value: "1"
                    }, {
                      text: "有（个人担保）",
                      value: "2"
                    }, {
                      text: "有（公司担保）",
                      value: "3"
                    }]
                  }, {
                    name: "electronicDelivery",
                    label: "4、是否接受短信、微信、邮箱等方式的电子送达？",
                    localdata: [{
                      text: "接受",
                      value: "1"
                    }, {
                      text: "不接受",
                      value: "2"
                    }]
                  }, {
                    name: "jointLiability",
                    label: "5、是否主张连带责任？",
                    localdata: [{
                      text: "是",
                      value: "1"
                    }, {
                      text: "否",
                      value: "2"
                    }]
                  }];
                  break;
                case 11:
                  this.formData = {
                    plaintiff: "",
                    defendant: "",
                    thirdParty: "",
                    electronicDelivery: ""
                  }, this.formItems = [{
                    name: "plaintiff",
                    label: "1、您是为自己还是代表公司起诉？",
                    localdata: [{
                      text: "自己",
                      value: "1"
                    }, {
                      text: "个人委托代理",
                      value: "2"
                    }, {
                      text: "公司",
                      value: "3"
                    }, {
                      text: "公司委托代理",
                      value: "4"
                    }]
                  }, {
                    name: "defendant",
                    label: "2、对方是个人还是公司/非法人组织？",
                    localdata: [{
                      text: "个人",
                      value: "1"
                    }, {
                      text: "公司",
                      value: "2"
                    }]
                  }, {
                    name: "thirdParty",
                    label: "3、是否有第三人参与(例如担保人保证人)？",
                    localdata: [{
                      text: "没有",
                      value: "1"
                    }, {
                      text: "有（个人担保）",
                      value: "2"
                    }, {
                      text: "有（公司担保）",
                      value: "3"
                    }]
                  }, {
                    name: "electronicDelivery",
                    label: "4、是否接受短信、微信、邮箱等方式的电子送达？",
                    localdata: [{
                      text: "接受",
                      value: "1"
                    }, {
                      text: "不接受",
                      value: "2"
                    }]
                  }];
                  break
              }
            },
            bindPickerChange: function(e) {
              this.disabled = !0, this.cause = Number(e.detail.value), console.log(e.detail.value, "e.detail.value"), this.$store.commit("SET_CAUSE", e.detail.value), this.initForm(), this.$store.commit("SET_PARTY_FORMDATA", {}), this.$store.commit("SET_CLAIMS_FORMDATA", {}), this.$store.commit("SET_JURISDICTION_FORMDATA", {}), this.$store.commit("SET_FACTS_FORMDATA", {}), this.$store.commit("SET_COMPLAINT_ID", null), this.$store.commit("SET_PARSE_MODEL_FORMDATA", {})
            },
            linkToCauseForm: function() {
              var a = "";
              switch (this.cause) {
                case 0:
                  a = "/pages/index/causeForm/causeFormLoan";
                  break;
                case 1:
                  a = "/pages/index/causeForm/causeFormDivorce";
                  break;
                case 2:
                  a = "/pages/index/causeForm/causeFormLabor";
                  break;
                case 3:
                  a = "/pages/index/causeForm/causeFormSales";
                  break;
                case 4:
                  a = "/pages/index/causeForm/causeFormFinance";
                  break;
                case 5:
                  a = "/pages/index/causeForm/causeFormProperty";
                  break;
                case 6:
                  a = "/pages/index/causeForm/causeFormCreditCard";
                  break;
                case 7:
                  a = "/pages/index/causeForm/causeFormTraffic";
                  break;
                case 8:
                  a = "/pages/index/causeForm/causeFormLease";
                  break;
                case 9:
                  a = "/pages/index/causeForm/causeFormInsurance";
                  break;
                case 10:
                  a = "/pages/index/causeForm/causeFormSecurity";
                  break;
                case 11:
                  a = "/pages/index/causeForm/causeFormCommon";
                  break
              }
              e.redirectTo({
                url: a
              })
            },
            submitForm: function() {
              var e = this; - 1 !== this.cause && this.$refs.form.validate().then((function(a) {
                e.$store.commit("SET_CAUSE_BASE_FORMDATA", e.formData), console.log("表单数据信息：", e.formData), e.linkToCauseForm()
              })).catch((function(e) {
                console.log("表单错误信息：", e)
              }))
            },
            checkFormCompletion: function() {
              var e = Object.values(this.formData).every((function(e) {
                return null !== e && "" !== e
              }));
              this.disabled = !e
            },
            setCauseType: function() {
              var e = this,
                a = this.$store.state.parseModelFormData;
              this.causeList.forEach((function(t, l) {
                t.name === a.plotCase && (e.cause = l, e.disabled = !0, e.$store.commit("SET_CAUSE", l), e.initForm())
              }))
            }
          },
          watch: {
            formData: {
              handler: function() {
                this.checkFormCompletion()
              },
              deep: !0
            }
          },
          mounted: function() {
            -1 !== this.$store.state.cause ? (this.cause = this.$store.state.cause, this.initForm(), Object.keys(this.$store.state.causeBaseFormData).length > 0 && (this.formData = this.$store.state.causeBaseFormData)) : this.setCauseType()
          }
        };
        a.default = t
      }).call(this, t("df3c")["default"])
    },
    "28d9": function(e, a, t) {
      "use strict";
      t.r(a);
      var l = t("1217"),
        n = t.n(l);
      for (var i in l)["default"].indexOf(i) < 0 && function(e) {
        t.d(a, e, (function() {
          return l[e]
        }))
      }(i);
      a["default"] = n.a
    },
    "2cdf": function(e, a, t) {
      "use strict";
      var l = t("b469"),
        n = t.n(l);
      n.a
    },
    "5bfd": function(e, a, t) {
      "use strict";
      (function(e, a) {
        var l = t("47a9");
        t("3288");
        l(t("3240"));
        var n = l(t("beda"));
        e.__webpack_require_UNI_MP_PLUGIN__ = t, a(n.default)
      }).call(this, t("3223")["default"], t("df3c")["createPage"])
    },
    "9398e": function(e, a, t) {
      "use strict";
      t.d(a, "b", (function() {
        return n
      })), t.d(a, "c", (function() {
        return i
      })), t.d(a, "a", (function() {
        return l
      }));
      var l = {
          uniForms: function() {
            return Promise.all([t.e("common/vendor"), t.e("components/uni-forms/uni-forms")]).then(t.bind(null, "31da"))
          },
          uniFormsItem: function() {
            return Promise.all([t.e("common/vendor"), t.e("components/uni-forms-item/uni-forms-item")]).then(t.bind(null, "89e8"))
          },
          uniDataCheckbox: function() {
            return Promise.all([t.e("common/vendor"), t.e("components/uni-data-checkbox/uni-data-checkbox")]).then(t.bind(null, "5e6c"))
          }
        },
        n = function() {
          var e = this.$createElement;
          this._self._c
        },
        i = []
    },
    b469: function(e, a, t) {},
    beda: function(e, a, t) {
      "use strict";
      t.r(a);
      var l = t("9398e"),
        n = t("28d9");
      for (var i in n)["default"].indexOf(i) < 0 && function(e) {
        t.d(a, e, (function() {
          return n[e]
        }))
      }(i);
      t("2cdf");
      var r = t("828b"),
        o = Object(r["a"])(n["default"], l["b"], l["c"], !1, null, "61cf25bc", null, !1, l["a"], void 0);
      a["default"] = o.exports
    }
  },
  [
    ["5bfd", "common/runtime", "common/vendor"]
  ]
]);
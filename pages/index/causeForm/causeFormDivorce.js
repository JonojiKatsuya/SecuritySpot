(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/index/causeForm/causeFormDivorce"], {
    "0ee7": function(e, t, a) {
      "use strict";
      a.r(t);
      var i = a("88f6"),
        n = a.n(i);
      for (var o in i)["default"].indexOf(o) < 0 && function(e) {
        a.d(t, e, (function() {
          return i[e]
        }))
      }(o);
      t["default"] = n.a
    },
    "523a": function(e, t, a) {
      "use strict";
      var i = a("f9bd"),
        n = a.n(i);
      n.a
    },
    "64c9": function(e, t, a) {
      "use strict";
      a.r(t);
      var i = a("c591"),
        n = a("0ee7");
      for (var o in n)["default"].indexOf(o) < 0 && function(e) {
        a.d(t, e, (function() {
          return n[e]
        }))
      }(o);
      a("523a");
      var r = a("828b"),
        s = Object(r["a"])(n["default"], i["b"], i["c"], !1, null, "0e828afc", null, !1, i["a"], void 0);
      t["default"] = s.exports
    },
    "88f6": function(e, t, a) {
      "use strict";
      (function(e) {
        var i = a("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = i(a("34cf")),
          o = i(a("7ca3")),
          r = a("8f59");

        function s(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), a.push.apply(a, i)
          }
          return a
        }

        function l(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(a), !0).forEach((function(t) {
              (0, o.default)(e, t, a[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : s(Object(a)).forEach((function(t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
            }))
          }
          return e
        }
        var c = {
          components: {
            PickerSelect: function() {
              a.e("components/picker-select/picker-select").then(function() {
                return resolve(a("2c8c"))
              }.bind(null, a)).catch(a.oe)
            },
            PickerDate: function() {
              a.e("components/picker-date/picker-date").then(function() {
                return resolve(a("d0cc"))
              }.bind(null, a)).catch(a.oe)
            },
            pleadingsTabNav: function() {
              a.e("components/pleadings-tab-nav/pleadings-tab-nav").then(function() {
                return resolve(a("4c37"))
              }.bind(null, a)).catch(a.oe)
            }
          },
          data: function() {
            return {
              currentTab: 0,
              partyFormSection: [],
              claimsFormSection: [],
              jurisdictionFormSection: [],
              factsFormSection: [],
              tabList: [{
                title: "当事人信息",
                disabled: !1
              }, {
                title: "诉讼请求和依据",
                disabled: !0
              }, {
                title: "约定管辖和诉讼保全",
                disabled: !0
              }, {
                title: "事实和理由",
                disabled: !0
              }],
              genderOptions: [{
                text: "男",
                value: "1"
              }, {
                text: "女",
                value: "2"
              }],
              certificateOptions: [{
                text: "居民身份证",
                value: "1"
              }, {
                text: "户口簿",
                value: "2"
              }, {
                text: "护照",
                value: "3"
              }, {
                text: "军官证",
                value: "4"
              }, {
                text: "港澳通行证",
                value: "5"
              }, {
                text: "外国人居留证",
                value: "6"
              }],
              paymentOptions: [{
                text: "支付至实际清偿之日",
                value: "1"
              }, {
                text: "否",
                value: "2"
              }],
              prePaymentOptions: [{
                text: "提前还款",
                value: "1"
              }, {
                text: "解除合同",
                value: "2"
              }, {
                text: "否",
                value: "3"
              }],
              debtChargeOptions: [{
                text: "是",
                value: "1"
              }, {
                text: "否",
                value: "2"
              }],
              arbitrationOptions: [{
                text: "有仲裁、法院管辖约定",
                value: "1"
              }, {
                text: "否",
                value: "2"
              }],
              assetPreservationOptions: [{
                text: "已申请保全",
                value: "1"
              }, {
                text: "是",
                value: "2"
              }, {
                text: "否",
                value: "3"
              }],
              interestTypeOptions: [{
                text: "按月计息",
                value: "1"
              }, {
                text: "按季计息",
                value: "2"
              }, {
                text: "按年计息",
                value: "3"
              }],
              paymentTypeOptions: [{
                text: "等额本息",
                value: "1"
              }, {
                text: "等额本金",
                value: "2"
              }, {
                text: "到期一次性还本付息",
                value: "3"
              }, {
                text: "按月计息、到期一次性还本",
                value: "4"
              }, {
                text: "按季计息、到期一次性还本",
                value: "5"
              }, {
                text: "按年计息、到期一次性还本",
                value: "6"
              }, {
                text: "其他",
                value: "7"
              }],
              overdueRepaymentOptions: [{
                text: "逾期",
                value: "1"
              }, {
                text: "未逾期",
                value: "2"
              }],
              guaranteeOptions: [{
                text: "签订(抵押、质押)合同",
                value: "1"
              }, {
                text: "否",
                value: "2"
              }],
              registTypeOptions: [{
                text: "正式登记",
                value: "1"
              }, {
                text: "预告登记",
                value: "2"
              }, {
                text: "否",
                value: "3"
              }],
              guaranteeContractOptions: [{
                text: "是",
                value: "1"
              }, {
                text: "否",
                value: "2"
              }],
              guaranteeTypeOptions: [{
                text: "一般保证",
                value: "1"
              }, {
                text: "连带责任保证",
                value: "2"
              }],
              orgTypeOptions: [{
                text: "有限责任公司",
                value: "1"
              }, {
                text: "股份有限公司",
                value: "2"
              }, {
                text: "上市公司",
                value: "3"
              }, {
                text: "其他企业法人",
                value: "4"
              }, {
                text: "事业单位",
                value: "5"
              }, {
                text: "社会团体",
                value: "6"
              }, {
                text: "基金会",
                value: "7"
              }, {
                text: "社会服务机构",
                value: "8"
              }, {
                text: "机关法人",
                value: "9"
              }, {
                text: "农村集体经济组织法人",
                value: "10"
              }, {
                text: "城镇农村的合作经济组织法人",
                value: "11"
              }, {
                text: "基层群众性自治组织法人",
                value: "12"
              }, {
                text: "个人独资企业",
                value: "13"
              }, {
                text: "合伙企业",
                value: "14"
              }, {
                text: "不具有法人资格的专业服务机构",
                value: "15"
              }, {
                text: "国有控股",
                value: "16"
              }, {
                text: "国有参股",
                value: "17"
              }, {
                text: "民营",
                value: "18"
              }],
              agentAuthOptions: [{
                text: "一般授权",
                value: "1"
              }, {
                text: "特别授权",
                value: "2"
              }],
              divorceLitigationOptions: [{
                text: "提起诉讼",
                value: "1"
              }, {
                text: "否",
                value: "2"
              }],
              ownershipOptions: [{
                text: "原告",
                value: "1"
              }, {
                text: "被告",
                value: "2"
              }, {
                text: "其他",
                value: "3"
              }],
              PropertyOptions: [{
                text: "有共同财产",
                value: "1"
              }, {
                text: "无共同财产",
                value: "2"
              }],
              debtOptions: [{
                text: "有共同债务",
                value: "1"
              }, {
                text: "无共同债务",
                value: "2"
              }],
              childSupportAffiliationOptions: [{
                text: "由原告承担",
                value: "1"
              }, {
                text: "由被告承担",
                value: "2"
              }],
              visitationMainOptions: [{
                text: "原告可探望",
                value: "1"
              }, {
                text: "被告可探望",
                value: "2"
              }],
              divorceCompensationTypeOptions: [{
                text: "损害赔偿",
                value: "1"
              }, {
                text: "经济补偿",
                value: "2"
              }, {
                text: "经济帮助",
                value: "3"
              }],
              disabled: !0,
              partyFormData: {},
              claimsFormData: {},
              jurisdictionFormData: {},
              factsFormData: {}
            }
          },
          methods: {
            handleTabClick: function(e) {
              switch (this.currentTab = e, this.currentTab) {
                case 0:
                  this.checkPartyFormCompletion();
                  break;
                case 1:
                  this.checkClaimsFormCompletion();
                  break;
                case 2:
                  this.checkJurisdictionFormCompletion();
                  break;
                case 3:
                  this.checkFactsFormCompletion();
                  break
              }
            },
            isEmptyEntrustedLitigationAgent: function() {
              var e = {
                  entrustedLitigationAgentName: this.partyFormData.entrustedLitigationAgentName,
                  entrustedLitigationAgentOrg: this.partyFormData.entrustedLitigationAgentOrg,
                  entrustedLitigationAgentPhone: this.partyFormData.entrustedLitigationAgentPhone,
                  entrustedLitigationAgentAuth: this.partyFormData.entrustedLitigationAgentAuth
                },
                t = Object.values(e).some((function(e) {
                  return void 0 !== e && null !== e && "" !== e
                }));
              return !!t
            },
            saveForm: function(t) {
              var a = this;
              e.showLoading({
                title: "加载中"
              }), e.getStorage({
                key: "causeUnionId",
                success: function(i) {
                  var n = a.$store.state.causeBaseFormData,
                    o = a.$store.state.cause;
                  a.$causeRequest("/applet/complaint/save", "POST", {
                    userId: i.data,
                    createStatus: t,
                    cateGory: Number(o) + 1,
                    divorceDispute: l(l(l(l(l({}, a.partyFormData), a.claimsFormData), a.jurisdictionFormData), a.factsFormData), {}, {
                      electronicDelivery: a.$store.state.causeBaseFormData.electronicDelivery ? a.$store.state.causeBaseFormData.electronicDelivery : "",
                      plaintiffLitigationAgent: a.isEmptyEntrustedLitigationAgent() ? 1 : 2
                    }),
                    complaintId: a.$store.state.complaintId,
                    cause: Number(o),
                    causeBaseFormData: JSON.stringify(n),
                    partyFormData: JSON.stringify(a.partyFormData),
                    claimsFormData: JSON.stringify(a.claimsFormData),
                    jurisdictionFormData: JSON.stringify(a.jurisdictionFormData),
                    factsFormData: JSON.stringify(a.factsFormData)
                  }).then((function(i) {
                    e.hideLoading(), 200 === i.data.code && (1 === t ? (a.$store.commit("SET_COMPLAINT_ID", i.data.data.complaintId), e.showToast({
                      title: "暂存成功"
                    })) : (a.$store.commit("SET_PARTY_FORMDATA", a.partyFormData), a.$store.commit("SET_CLAIMS_FORMDATA", a.claimsFormData), a.$store.commit("SET_JURISDICTION_FORMDATA", a.jurisdictionFormData), a.$store.commit("SET_FACTS_FORMDATA", a.factsFormData), a.$store.commit("SET_CAUSE_FILENAME", i.data.data.complaintName), a.$store.commit("SET_COMPLAINT_ID", i.data.data.complaintId), e.redirectTo({
                      url: "/pages/index/causePreview"
                    })))
                  })).catch((function(t) {
                    e.hideLoading(), e.showToast({
                      title: "服务器异常，请联系管理员！"
                    })
                  }))
                }
              })
            },
            submitForm: function() {
              switch (this.currentTab) {
                case 0:
                  this.disabled = !0, this.tabList[1].disabled = !1, this.handleTabClick(1), console.log("这是香蕉");
                  break;
                case 1:
                  this.disabled = !0, this.tabList[2].disabled = !1, this.handleTabClick(2), console.log("这是苹果");
                  break;
                case 2:
                  this.disabled = !0, this.tabList[3].disabled = !1, this.handleTabClick(3), console.log("这是橙子");
                  break;
                case 3:
                  this.disabled = !0, this.saveForm(2), console.log("这是橙子22");
                  break
              }
              console.log("表单数据信息partyFormData：", this.partyFormData)
            },
            initPartyFormData: function() {
              var e = this.$store.state.causeBaseFormData;
              this.partyFormData = l(l({}, this.partyFormData), {}, {
                plaintiffPersionName: "",
                plaintiffGender: "",
                plaintiffBirthdayDate: "",
                plaintiffPersionPhone: "",
                plaintiffResidenceAddress: "",
                plaintiffIdType: "",
                plaintiffIdNumber: "",
                entrustedLitigationAgentName: "",
                entrustedLitigationAgentOrg: "",
                entrustedLitigationAgentPhone: "",
                entrustedLitigationAgentAuth: ""
              }), this.partyFormSection = [{
                sectionTitle: "原告（自然人）",
                sectionFormItems: [{
                  type: "input",
                  name: "plaintiffPersionName",
                  label: "姓名",
                  placeholder: "请输入姓名"
                }, {
                  type: "select",
                  name: "plaintiffGender",
                  label: "性别",
                  placeholder: "请选择性别",
                  options: this.genderOptions
                }, {
                  type: "date",
                  name: "plaintiffBirthdayDate",
                  label: "出生日期",
                  placeholder: "请选择出生日期",
                  isDisableFuture: !0
                }, {
                  type: "inputNumber",
                  name: "plaintiffPersionPhone",
                  label: "联系电话",
                  placeholder: "请输入联系电话"
                }, {
                  type: "input",
                  name: "plaintiffResidenceAddress",
                  label: "经常居住地",
                  placeholder: "请输入经常居住地"
                }, {
                  type: "select",
                  name: "plaintiffIdType",
                  label: "证件类型",
                  placeholder: "请选择证件类型",
                  options: this.certificateOptions
                }, {
                  type: "input",
                  name: "plaintiffIdNumber",
                  label: "证件号码",
                  placeholder: "请输入证件号码",
                  class: "border-bottom-none"
                }]
              }, {
                sectionTitle: "委托诉讼代理人",
                sectionFormItems: [{
                  type: "input",
                  name: "entrustedLitigationAgentName",
                  label: "姓名",
                  placeholder: "请输入姓名"
                }, {
                  type: "input",
                  name: "entrustedLitigationAgentOrg",
                  label: "工作单位",
                  placeholder: "请输入工作单位名称"
                }, {
                  type: "inputNumber",
                  name: "entrustedLitigationAgentPhone",
                  label: "联系电话",
                  placeholder: "请输入联系电话"
                }, {
                  type: "select",
                  name: "entrustedLitigationAgentAuth",
                  label: "代理权限",
                  placeholder: "请选择代理权限",
                  options: this.agentAuthOptions,
                  class: "border-bottom-none"
                }]
              }], "1" === e.electronicDelivery ? (this.partyFormData = l(l({}, this.partyFormData), {}, {
                deliveryMessage: "",
                deliveryWechat: "",
                deliveryFax: "",
                deliveryEmail: ""
              }), this.partyFormSection.push({
                sectionTitle: "送达方式（至少选择一种填写）",
                sectionFormItems: [{
                  type: "inputNumber",
                  name: "deliveryMessage",
                  label: "短信",
                  placeholder: "请输入手机号码"
                }, {
                  type: "input",
                  name: "deliveryWechat",
                  label: "微信",
                  placeholder: "请输入微信ID"
                }, {
                  type: "input",
                  name: "deliveryFax",
                  label: "传真",
                  placeholder: "请输入传真号码"
                }, {
                  type: "input",
                  name: "deliveryEmail",
                  label: "邮箱",
                  placeholder: "请输入电子邮箱",
                  class: "border-bottom-none"
                }]
              })) : (this.partyFormData = l(l({}, this.partyFormData), {}, {
                serviceAdress: "",
                servicePersion: "",
                servicePhone: ""
              }), this.partyFormSection.push({
                sectionTitle: "送达地址",
                sectionFormItems: [{
                  type: "input",
                  name: "serviceAdress",
                  label: "地址",
                  placeholder: "请输入送达地址"
                }, {
                  type: "input",
                  name: "servicePersion",
                  label: "收件人",
                  placeholder: "请输入收件人姓名"
                }, {
                  type: "inputNumber",
                  name: "servicePhone",
                  label: "联系电话",
                  placeholder: "请输入收件人联系电话",
                  class: "border-bottom-none"
                }]
              })), this.partyFormData = l(l({}, this.partyFormData), {}, {
                defendantPersionName: "",
                defendantGender: "",
                defendantBirthdayDate: "",
                defendantPersionPhone: "",
                defendantResidenceAddress: "",
                defendantIdType: "",
                defendantIdNumber: ""
              }), this.partyFormSection.push({
                sectionTitle: "被告（自然人）",
                sectionFormItems: [{
                  type: "input",
                  name: "defendantPersionName",
                  label: "姓名",
                  placeholder: "请输入姓名"
                }, {
                  type: "select",
                  name: "defendantGender",
                  label: "性别",
                  placeholder: "请选择性别",
                  options: this.genderOptions
                }, {
                  type: "date",
                  name: "defendantBirthdayDate",
                  label: "出生日期",
                  placeholder: "请选择出生日期",
                  isDisableFuture: !0
                }, {
                  type: "inputNumber",
                  name: "defendantPersionPhone",
                  label: "联系电话",
                  placeholder: "请输入联系电话"
                }, {
                  type: "input",
                  name: "defendantResidenceAddress",
                  label: "经常居住地",
                  placeholder: "请输入经常居住地"
                }, {
                  type: "select",
                  name: "defendantIdType",
                  label: "证件类型",
                  placeholder: "请选择证件类型",
                  options: this.certificateOptions
                }, {
                  type: "input",
                  name: "defendantIdNumber",
                  label: "证件号码",
                  placeholder: "请输入证件号码",
                  class: "border-bottom-none"
                }]
              })
            },
            initClaimsFormData: function() {
              var e = this.$store.state.causeBaseFormData;
              this.claimsFormData = {
                property: "",
                houseDetail: "",
                houseOwnership: "",
                carDetail: "",
                carOwnership: "",
                depositDetail: "",
                depositOwnership: "",
                debt: "",
                debtDetail: ""
              }, this.claimsFormSection = [{
                sectionTitle: "夫妻共同财产",
                sectionFormItems: [{
                  type: "checkbox",
                  name: "property",
                  label: "夫妻共同财产",
                  options: this.PropertyOptions,
                  labelPosition: "top"
                }, {
                  type: "inputAndSelect",
                  name: {
                    inputName: "houseDetail",
                    selectName: "houseOwnership"
                  },
                  label: "房屋明细",
                  options: this.ownershipOptions,
                  placeholder: {
                    inputPlaceholder: "请输入房屋地址信息",
                    selectPlaceholder: "归属"
                  },
                  class: "input-select-item"
                }, {
                  type: "inputAndSelect",
                  name: {
                    inputName: "carDetail",
                    selectName: "carOwnership"
                  },
                  label: "汽车明细",
                  options: this.ownershipOptions,
                  placeholder: {
                    inputPlaceholder: "请输入汽车品牌型号",
                    selectPlaceholder: "归属"
                  },
                  class: "input-select-item"
                }, {
                  type: "inputAndSelect",
                  name: {
                    inputName: "depositDetail",
                    selectName: "depositOwnership"
                  },
                  label: "存款明细",
                  options: this.ownershipOptions,
                  placeholder: {
                    inputPlaceholder: "请输入存款金额",
                    selectPlaceholder: "归属"
                  },
                  class: "input-select-item border-bottom-none"
                }]
              }, {
                sectionTitle: "夫妻共同债务",
                sectionFormItems: [{
                  type: "checkbox",
                  name: "debt",
                  label: "夫妻共同债务",
                  options: this.debtOptions,
                  labelPosition: "top"
                }, {
                  type: "input",
                  name: "debtDetail",
                  label: "债务情况",
                  placeholder: "例：欠银行贷款15万，由被告承担",
                  class: "border-bottom-none"
                }]
              }], "1" === e.haveChildren && (this.claimsFormData = l(l({}, this.claimsFormData), {}, {
                childCustodyIssueDetail: "",
                childSupportAffiliation: "",
                childSupportAmount: "",
                childSupportPayWay: ""
              }), this.claimsFormSection.push({
                sectionTitle: "子女抚养",
                sectionFormItems: [{
                  type: "input",
                  name: "childCustodyIssueDetail",
                  label: "子女情况",
                  placeholder: "请输入子女姓名、性别、年龄"
                }, {
                  type: "checkbox",
                  name: "childSupportAffiliation",
                  label: "承担抚养费",
                  options: this.childSupportAffiliationOptions,
                  labelPosition: "top"
                }, {
                  type: "input",
                  name: "childSupportAmount",
                  label: "金额及明细",
                  placeholder: "请输入具体金额及明细"
                }, {
                  type: "input",
                  name: "childSupportPayWay",
                  label: "支付方式",
                  placeholder: "例：每月银行转账支付1500元抚养费",
                  class: "border-bottom-none"
                }]
              })), "1" === e.visitChildren && (this.claimsFormData = l(l({}, this.claimsFormData), {}, {
                visitationMain: "",
                visitationWay: ""
              }), this.claimsFormSection.push({
                sectionTitle: "探望权",
                sectionFormItems: [{
                  type: "checkbox",
                  name: "visitationMain",
                  label: "探望权",
                  options: this.visitationMainOptions,
                  labelPosition: "top"
                }, {
                  type: "input",
                  name: "visitationWay",
                  label: "如何探望",
                  placeholder: "请输入探望方式，例如：每周1天",
                  class: "border-bottom-none"
                }]
              })), "1" === e.compensation && (this.claimsFormData = l(l({}, this.claimsFormData), {}, {
                divorceCompensationType: "",
                divorceCompensationAmount1: "",
                divorceCompensationAmount2: "",
                divorceCompensationAmount3: ""
              }), this.claimsFormSection.push({
                sectionTitle: "赔偿与补偿",
                sectionFormItems: [{
                  type: "checkbox",
                  name: "divorceCompensationType",
                  label: "赔偿/补偿类型",
                  options: this.divorceCompensationTypeOptions,
                  labelPosition: "top"
                }, {
                  type: "input",
                  name: "divorceCompensationAmount1",
                  label: "离婚损害赔偿",
                  placeholder: "请输入损害赔偿金额"
                }, {
                  type: "input",
                  name: "divorceCompensationAmount2",
                  label: "离婚经济赔偿",
                  placeholder: "请输入经济补偿金额"
                }, {
                  type: "input",
                  name: "divorceCompensationAmount3",
                  label: "离婚经济帮助",
                  placeholder: "请输入经济帮助金额",
                  class: "border-bottom-none"
                }]
              }))
            },
            initJurisdictionFormData: function() {
              this.jurisdictionFormData = {
                arbitrationExistence: "",
                arbitrationDetail: "",
                assetPreservation: "",
                assetPreservationApplication: "",
                assetPreservationCourt: "",
                assetPreservationDate: ""
              }, this.jurisdictionFormSection = [{
                sectionTitle: "仲裁与法院管辖",
                sectionFormItems: [{
                  type: "checkbox",
                  name: "arbitrationExistence",
                  label: "管辖约定",
                  options: this.arbitrationOptions,
                  labelPosition: "top"
                }, {
                  type: "input",
                  name: "arbitrationDetail",
                  label: "合同条款及内容",
                  placeholder: "请输入以上诉讼依据的合同内容条款",
                  class: "border-bottom-none"
                }]
              }, {
                sectionTitle: "财产保全措施",
                sectionFormItems: [{
                  type: "checkbox",
                  name: "assetPreservation",
                  label: "已经诉前保全",
                  options: this.debtChargeOptions
                }, {
                  type: "input",
                  name: "assetPreservationCourt",
                  label: "保全法院",
                  placeholder: "请输入保全法院全称"
                }, {
                  type: "date",
                  name: "assetPreservationDate",
                  label: "保全时间",
                  placeholder: "请选择保全时间"
                }, {
                  type: "checkbox",
                  name: "assetPreservationApplication",
                  label: "申请诉前保全",
                  options: this.debtChargeOptions,
                  class: "border-bottom-none"
                }]
              }]
            },
            initFactsFormData: function() {
              this.factsFormData = l(l({}, this.factsFormData), {}, {
                marriageTime: "",
                marriageChild: "",
                marriageLife: "",
                divorceGrounds: "",
                divorceLitigation: "",
                childVisitationSituation: "",
                compensationHelpSituation: ""
              }), this.factsFormSection = [{
                sectionTitle: "婚姻关系情况",
                sectionFormItems: [{
                  type: "date",
                  name: "marriageTime",
                  label: "结婚日期",
                  placeholder: "请选择结婚日期"
                }, {
                  type: "input",
                  name: "marriageChild",
                  label: "子女情况",
                  placeholder: "请输入子女情况"
                }, {
                  type: "input",
                  name: "marriageLife",
                  label: "生活情况",
                  placeholder: "请输入生活情况"
                }, {
                  type: "input",
                  name: "divorceGrounds",
                  label: "离婚事由",
                  placeholder: "请输入离婚原因与理由"
                }, {
                  type: "checkbox",
                  name: "divorceLitigation",
                  label: "在此之前",
                  options: this.divorceLitigationOptions,
                  class: "border-bottom-none"
                }]
              }, {
                sectionTitle: "其他生活情况",
                sectionFormItems: [{
                  type: "input",
                  name: "childVisitationSituation",
                  label: "对方探望理由",
                  placeholder: "请输入对方是否享有探望权以及探望方式的事由"
                }, {
                  type: "input",
                  name: "compensationHelpSituation",
                  label: "赔偿/补偿理由",
                  placeholder: "请输入符合离婚损害赔偿/经济补偿或帮助的事实",
                  class: "border-bottom-none"
                }]
              }]
            },
            setTabFormData: function() {
              var e = this,
                t = this.$store.state.parseModelFormData,
                a = function(a) {
                  if (console.log(a, t[a]), a.includes("Birthday") || a.includes("Date")) {
                    var i = t[a].replace(/年|月|日/g, "-").replace(/-$/, "");
                    t[a] = i || ""
                  }
                  if (a.includes("Gender")) {
                    var n = e.genderOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = n ? n.value : ""
                  }
                  if (a.includes("IdType")) {
                    var o = e.certificateOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = o ? o.value : ""
                  }
                  if ("interestDischarge" === a) {
                    var r = e.paymentOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = r ? r.value : ""
                  }
                  if ("prePaymentType" === a) {
                    var s = e.prePaymentOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = s ? s.value : ""
                  }
                  if ("claim" === a) {
                    var l = e.debtChargeOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = l ? l.value : ""
                  }
                  if ("arbitrationExistence" === a) {
                    var c = e.arbitrationOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = c ? c.value : ""
                  }
                  if ("assetPreservationApplication" === a) {
                    var u = e.assetPreservationOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = u ? u.value : ""
                  }
                  if ("interestType" === a) {
                    var p = e.interestTypeOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = p ? p.value : ""
                  }
                  if ("paymentType" === a) {
                    var m = e.paymentTypeOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = m ? m.value : ""
                  }
                  if ("overdueRepayment" === a) {
                    var d = e.overdueRepaymentOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = d ? d.value : ""
                  }
                  if ("guarantee" === a) {
                    var h = e.guaranteeOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = h ? h.value : ""
                  }
                  if ("registType" === a) {
                    var f = e.registTypeOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = f ? f.value : ""
                  }
                  if ("guaranteeContract" === a) {
                    var v = e.guaranteeContractOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = v ? v.value : ""
                  }
                  if ("guaranteeType" === a) {
                    var b = e.guaranteeTypeOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = b ? b.value : ""
                  }
                  if (a.includes("OrgType")) {
                    var y = e.orgTypeOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = y ? y.value : ""
                  }
                  if ("entrustedLitigationAgentAuth" === a) {
                    var F = e.agentAuthOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = F ? F.value : ""
                  }
                  if ("loanRate" === a) {
                    var D = t[a].replace(/%/, "");
                    t[a] = D || ""
                  }
                  Object.keys(e.partyFormData).includes(a) && (e.partyFormData[a] = t[a]), Object.keys(e.claimsFormData).includes(a) && (e.claimsFormData[a] = t[a]), Object.keys(e.jurisdictionFormData).includes(a) && (e.jurisdictionFormData[a] = t[a]), Object.keys(e.factsFormData).includes(a) && (e.factsFormData[a] = t[a])
                };
              for (var i in t) a(i)
            },
            checkPartyFormCompletion: function() {
              var e = Object.entries(this.partyFormData),
                t = ["deliveryMessage", "deliveryWechat", "deliveryFax", "deliveryEmail"],
                a = e.filter((function(e) {
                  var a = (0, n.default)(e, 1),
                    i = a[0];
                  return !t.includes(i)
                })).map((function(e) {
                  var t = (0, n.default)(e, 2),
                    a = t[1];
                  return a
                })),
                i = e.filter((function(e) {
                  var a = (0, n.default)(e, 1),
                    i = a[0];
                  return t.includes(i)
                })).map((function(e) {
                  var t = (0, n.default)(e, 2),
                    a = t[1];
                  return a
                })),
                o = a.every((function(e) {
                  return null !== e && "" !== e
                })),
                r = "1" !== this.causeBaseFormData.electronicDelivery || i.some((function(e) {
                  return null !== e && "" !== e
                }));
              this.disabled = !(o && r)
            },
            checkClaimsFormCompletion: function() {
              var e = Object.values(this.claimsFormData).every((function(e) {
                return null !== e && "" !== e
              }));
              this.disabled = !e
            },
            checkJurisdictionFormCompletion: function() {
              var e = Object.values(this.jurisdictionFormData).every((function(e) {
                return null !== e && "" !== e
              }));
              this.disabled = !e
            },
            checkFactsFormCompletion: function() {
              var e = Object.values(this.factsFormData).every((function(e) {
                return null !== e && "" !== e
              }));
              this.disabled = !e
            }
          },
          computed: l({}, (0, r.mapState)(["cause", "causeBaseFormData"])),
          watch: {
            partyFormData: {
              handler: function() {
                console.log("表单数据：", this.partyFormData), this.checkPartyFormCompletion()
              },
              deep: !0
            },
            claimsFormData: {
              handler: function() {
                console.log("表单数据：", this.claimsFormData), this.checkClaimsFormCompletion()
              },
              deep: !0
            },
            jurisdictionFormData: {
              handler: function() {
                console.log("表单数据：", this.jurisdictionFormData), this.checkJurisdictionFormCompletion()
              },
              deep: !0
            },
            factsFormData: {
              handler: function() {
                console.log("表单数据：", this.factsFormData), this.checkFactsFormCompletion()
              },
              deep: !0
            },
            currentTab: function(e) {
              console.log("当前选中的 Tab 变为：", e)
            }
          },
          mounted: function() {
            this.initPartyFormData(), this.initClaimsFormData(), this.initJurisdictionFormData(), this.initFactsFormData(), this.setTabFormData();
            var e = function(e, t) {
              Object.keys(e).forEach((function(a) {
                t.hasOwnProperty(a) && (e[a] = t[a])
              }))
            };
            e(this.partyFormData, this.$store.state.partyFormData), e(this.claimsFormData, this.$store.state.claimsFormData), e(this.jurisdictionFormData, this.$store.state.jurisdictionFormData), e(this.factsFormData, this.$store.state.factsFormData), console.log(this.partyFormData, "this.partyFormData"), console.log(this.claimsFormData, "this.claimsFormData"), console.log(this.jurisdictionFormData, "this.jurisdictionFormData"), console.log(this.factsFormData, "this.factsFormData"), console.log(this.$store.state.cause, "111"), console.log(this.$store.state.causeBaseFormData, "222")
          }
        };
        t.default = c
      }).call(this, a("df3c")["default"])
    },
    "9c3f": function(e, t, a) {
      "use strict";
      (function(e, t) {
        var i = a("47a9");
        a("3288");
        i(a("3240"));
        var n = i(a("64c9"));
        e.__webpack_require_UNI_MP_PLUGIN__ = a, t(n.default)
      }).call(this, a("3223")["default"], a("df3c")["createPage"])
    },
    c591: function(e, t, a) {
      "use strict";
      a.d(t, "b", (function() {
        return n
      })), a.d(t, "c", (function() {
        return o
      })), a.d(t, "a", (function() {
        return i
      }));
      var i = {
          pleadingsTabNav: function() {
            return a.e("components/pleadings-tab-nav/pleadings-tab-nav").then(a.bind(null, "4c37"))
          },
          uniForms: function() {
            return Promise.all([a.e("common/vendor"), a.e("components/uni-forms/uni-forms")]).then(a.bind(null, "31da"))
          },
          uniFormsItem: function() {
            return Promise.all([a.e("common/vendor"), a.e("components/uni-forms-item/uni-forms-item")]).then(a.bind(null, "89e8"))
          },
          uniEasyinput: function() {
            return Promise.all([a.e("common/vendor"), a.e("components/uni-easyinput/uni-easyinput")]).then(a.bind(null, "a2ee"))
          },
          pickerSelect: function() {
            return a.e("components/picker-select/picker-select").then(a.bind(null, "2c8c"))
          },
          pickerDate: function() {
            return a.e("components/picker-date/picker-date").then(a.bind(null, "d0cc"))
          },
          uniDataCheckbox: function() {
            return Promise.all([a.e("common/vendor"), a.e("components/uni-data-checkbox/uni-data-checkbox")]).then(a.bind(null, "5e6c"))
          }
        },
        n = function() {
          var e = this.$createElement;
          this._self._c
        },
        o = []
    },
    f9bd: function(e, t, a) {}
  },
  [
    ["9c3f", "common/runtime", "common/vendor"]
  ]
]);
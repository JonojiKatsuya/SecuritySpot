(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/index/causeForm/causeFormSales"], {
    "0ced": function(e, t, a) {
      "use strict";
      (function(e, t) {
        var n = a("47a9");
        a("3288");
        n(a("3240"));
        var i = n(a("28a8"));
        e.__webpack_require_UNI_MP_PLUGIN__ = a, t(i.default)
      }).call(this, a("3223")["default"], a("df3c")["createPage"])
    },
    "16bc": function(e, t, a) {
      "use strict";
      var n = a("80c0"),
        i = a.n(n);
      i.a
    },
    "28a8": function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("f8dd"),
        i = a("9915");
      for (var r in i)["default"].indexOf(r) < 0 && function(e) {
        a.d(t, e, (function() {
          return i[e]
        }))
      }(r);
      a("16bc");
      var o = a("828b"),
        l = Object(o["a"])(i["default"], n["b"], n["c"], !1, null, "4fc63547", null, !1, n["a"], void 0);
      t["default"] = l.exports
    },
    "80c0": function(e, t, a) {},
    9915: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("ad65"),
        i = a.n(n);
      for (var r in n)["default"].indexOf(r) < 0 && function(e) {
        a.d(t, e, (function() {
          return n[e]
        }))
      }(r);
      t["default"] = i.a
    },
    ad65: function(e, t, a) {
      "use strict";
      (function(e) {
        var n = a("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = n(a("34cf")),
          r = n(a("7ca3")),
          o = a("8f59");

        function l(e, t) {
          var a = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), a.push.apply(a, n)
          }
          return a
        }

        function s(e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = null != arguments[t] ? arguments[t] : {};
            t % 2 ? l(Object(a), !0).forEach((function(t) {
              (0, r.default)(e, t, a[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : l(Object(a)).forEach((function(t) {
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
            DateRangePicker: function() {
              a.e("components/date-range-picker/date-range-picker").then(function() {
                return resolve(a("6693"))
              }.bind(null, a)).catch(a.oe)
            },
            pleadingsTabNav: function() {
              a.e("components/pleadings-tab-nav/pleadings-tab-nav").then(function() {
                return resolve(a("4c37"))
              }.bind(null, a)).catch(a.oe)
            }
          },
          data: function() {
            var e;
            return e = {
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
              breachTypeOptions: [{
                text: "延迟履行",
                value: "1"
              }, {
                text: "不履行",
                value: "2"
              }, {
                text: "其他",
                value: "3"
              }],
              bearResponsibilityTypeOptions: [{
                text: "修理",
                value: "1"
              }, {
                text: "重做",
                value: "2"
              }, {
                text: "更换",
                value: "3"
              }, {
                text: "退货",
                value: "4"
              }, {
                text: "减少价款或者报酬",
                value: "5"
              }, {
                text: "其他",
                value: "6"
              }, {
                text: "无需承担",
                value: "7"
              }],
              continueOrTerminateOptions: [{
                text: "继续履行",
                value: "1"
              }, {
                text: "解除合同",
                value: "2"
              }, {
                text: "确认解除",
                value: "3"
              }],
              priceAndPaymentMethodOptions: [{
                text: "现金",
                value: "1"
              }, {
                text: "转账",
                value: "2"
              }, {
                text: "票据",
                value: "3"
              }, {
                text: "其他",
                value: "4"
              }],
              installmentPaymentOptions: [{
                text: "一次性付款",
                value: "1"
              }, {
                text: "分期",
                value: "2"
              }],
              penaltyOptions: [{
                text: "违约金",
                value: "1"
              }, {
                text: "定金",
                value: "2"
              }, {
                text: "延迟履行违约金",
                value: "3"
              }],
              performanceModeOptions: [{
                text: "逾期付款",
                value: "1"
              }, {
                text: "逾期交货",
                value: "2"
              }]
            }, (0, r.default)(e, "paymentTypeOptions", [{
              text: "利息",
              value: "1"
            }, {
              text: "违约金",
              value: "2"
            }, {
              text: "赔偿金",
              value: "3"
            }]), (0, r.default)(e, "registrationTypeOptions", [{
              text: "正式登记",
              value: "1"
            }, {
              text: "预告登记",
              value: "2"
            }]), (0, r.default)(e, "continuePerformObligationOptions", [{
              text: "付款",
              value: "1"
            }, {
              text: "供货",
              value: "2"
            }]), (0, r.default)(e, "disabled", !0), (0, r.default)(e, "partyFormData", {}), (0, r.default)(e, "claimsFormData", {}), (0, r.default)(e, "jurisdictionFormData", {}), (0, r.default)(e, "factsFormData", {}), e
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
                success: function(n) {
                  var i = a.$store.state.causeBaseFormData,
                    r = a.$store.state.cause;
                  a.$causeRequest("/applet/complaint/save", "POST", {
                    userId: n.data,
                    createStatus: t,
                    cateGory: Number(r) + 1,
                    contractDispute: s(s(s(s(s({}, a.partyFormData), a.claimsFormData), a.jurisdictionFormData), a.factsFormData), {}, {
                      electronicDelivery: a.$store.state.causeBaseFormData.electronicDelivery ? a.$store.state.causeBaseFormData.electronicDelivery : "",
                      plaintiffLitigationAgent: a.isEmptyEntrustedLitigationAgent() ? 1 : 2
                    }),
                    complaintId: a.$store.state.complaintId,
                    cause: Number(r),
                    causeBaseFormData: JSON.stringify(i),
                    partyFormData: JSON.stringify(a.partyFormData),
                    claimsFormData: JSON.stringify(a.claimsFormData),
                    jurisdictionFormData: JSON.stringify(a.jurisdictionFormData),
                    factsFormData: JSON.stringify(a.factsFormData)
                  }).then((function(n) {
                    e.hideLoading(), 200 === n.data.code && (1 === t ? (a.$store.commit("SET_COMPLAINT_ID", n.data.data.complaintId), e.showToast({
                      title: "暂存成功"
                    })) : (a.$store.commit("SET_PARTY_FORMDATA", a.partyFormData), a.$store.commit("SET_CLAIMS_FORMDATA", a.claimsFormData), a.$store.commit("SET_JURISDICTION_FORMDATA", a.jurisdictionFormData), a.$store.commit("SET_FACTS_FORMDATA", a.factsFormData), a.$store.commit("SET_CAUSE_FILENAME", n.data.data.complaintName), a.$store.commit("SET_COMPLAINT_ID", n.data.data.complaintId), e.redirectTo({
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
              "1" === e.plaintiff || "2" === e.plaintiff ? (this.partyFormData = s(s({}, this.partyFormData), {}, {
                plaintiffPersionName: "",
                plaintiffGender: "",
                plaintiffBirthday: "",
                plaintiffPersionPhone: "",
                plaintiffResidenceAddress: "",
                plaintiffIdType: "",
                plaintiffIdNumber: ""
              }), this.partyFormSection.push({
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
                  name: "plaintiffBirthday",
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
              })) : (this.partyFormData = s(s({}, this.partyFormData), {}, {
                plaintiffOrgName: "",
                plaintiffOrgRegisteredAdress: "",
                plaintiffOrgResidenceAdress: "",
                plaintiffCorporation: "",
                plaintiffOrgPhone: "",
                plaintiffCreditCode: "",
                plaintiffOrgType: ""
              }), this.partyFormSection.push({
                sectionTitle: "原告(法人、非法人组织)",
                sectionFormItems: [{
                  type: "input",
                  name: "plaintiffOrgName",
                  label: "名称",
                  placeholder: "请输入单位名称"
                }, {
                  type: "input",
                  name: "plaintiffOrgRegisteredAdress",
                  label: "注册所在地",
                  placeholder: "请输入单位注册所在地"
                }, {
                  type: "input",
                  name: "plaintiffOrgResidenceAdress",
                  label: "住所地",
                  placeholder: "请输入单位住所地"
                }, {
                  type: "input",
                  name: "plaintiffCorporation",
                  label: "法定代表人",
                  placeholder: "请输入法定代表人"
                }, {
                  type: "inputNumber",
                  name: "plaintiffOrgPhone",
                  label: "联系电话",
                  placeholder: "请输入联系电话"
                }, {
                  type: "input",
                  name: "plaintiffCreditCode",
                  label: "统一代码",
                  placeholder: "请输入统一社会信用代码"
                }, {
                  type: "select",
                  name: "plaintiffOrgType",
                  label: "单位类型",
                  placeholder: "请选择单位类型",
                  options: this.orgTypeOptions,
                  class: "border-bottom-none"
                }]
              })), "2" !== e.plaintiff && "4" !== e.plaintiff || (this.partyFormData = s(s({}, this.partyFormData), {}, {
                entrustedLitigationAgentName: "",
                entrustedLitigationAgentOrg: "",
                entrustedLitigationAgentPhone: "",
                entrustedLitigationAgentAuth: ""
              }), this.partyFormSection.push({
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
              })), "1" === e.electronicDelivery ? (this.partyFormData = s(s({}, this.partyFormData), {}, {
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
              })) : (this.partyFormData = s(s({}, this.partyFormData), {}, {
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
              })), "1" === e.defendant ? (this.partyFormData = s(s({}, this.partyFormData), {}, {
                defendantPersionName: "",
                defendantGender: "",
                defendantBirthday: "",
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
                  name: "defendantBirthday",
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
              })) : (this.partyFormData = s(s({}, this.partyFormData), {}, {
                defendantOrgName: "",
                defendantOrgRegisteredAdress: "",
                defendantOrgResidenceAdress: "",
                defendantCorporation: "",
                defendantCreditCode: "",
                defendantOrgType: ""
              }), this.partyFormSection.push({
                sectionTitle: "被告(法人、非法人组织)",
                sectionFormItems: [{
                  type: "input",
                  name: "defendantOrgName",
                  label: "名称",
                  placeholder: "请输入单位名称"
                }, {
                  type: "input",
                  name: "defendantOrgRegisteredAdress",
                  label: "注册所在地",
                  placeholder: "请输入单位注册所在地"
                }, {
                  type: "input",
                  name: "defendantOrgResidenceAdress",
                  label: "住所地",
                  placeholder: "请输入单位住所地"
                }, {
                  type: "input",
                  name: "defendantCorporation",
                  label: "法定代表人",
                  placeholder: "请输入法定代表人"
                }, {
                  type: "input",
                  name: "defendantCreditCode",
                  label: "统一代码",
                  placeholder: "请输入统一社会信用代码"
                }, {
                  type: "select",
                  name: "defendantOrgType",
                  label: "单位类型",
                  placeholder: "请选择单位类型",
                  options: this.orgTypeOptions,
                  class: "border-bottom-none"
                }]
              })), "2" === e.thirdParty && (this.partyFormData = s(s({}, this.partyFormData), {}, {
                thirdPersionName: "",
                thirdGender: "",
                thirdBirthday: "",
                thirdPersionPhone: "",
                thirdRegisteredAdress: "",
                thirdResidenceAddress: "",
                thirdIdType: "",
                thirdIdNumber: ""
              }), this.partyFormSection.push({
                sectionTitle: "第三人(自然人)",
                sectionFormItems: [{
                  type: "input",
                  name: "thirdPersionName",
                  label: "姓名",
                  placeholder: "请输入姓名"
                }, {
                  type: "select",
                  name: "thirdGender",
                  label: "性别",
                  placeholder: "请选择性别",
                  options: this.genderOptions
                }, {
                  type: "date",
                  name: "thirdBirthday",
                  label: "出生日期",
                  placeholder: "请选择出生日期",
                  isDisableFuture: !0
                }, {
                  type: "inputNumber",
                  name: "thirdPersionPhone",
                  label: "联系电话",
                  placeholder: "请输入联系电话"
                }, {
                  type: "input",
                  name: "thirdRegisteredAdress",
                  label: "户籍所在地",
                  placeholder: "请输入户籍所在地"
                }, {
                  type: "input",
                  name: "thirdResidenceAddress",
                  label: "经常居住地",
                  placeholder: "请输入经常居住地"
                }, {
                  type: "select",
                  name: "thirdIdType",
                  label: "证件类型",
                  placeholder: "请选择证件类型",
                  options: this.certificateOptions
                }, {
                  type: "input",
                  name: "thirdIdNumber",
                  label: "证件号码",
                  placeholder: "请输入证件号码",
                  class: "border-bottom-none"
                }]
              })), "3" === e.thirdParty && (this.partyFormData = s(s({}, this.partyFormData), {}, {
                thirdOrgName: "",
                thirdOrgResidenceAdress: "",
                thirdOrgRegisteredAdress: "",
                thirdCorporation: "",
                thirdCreditCode: "",
                thirdOrgType: ""
              }), this.partyFormSection.push({
                sectionTitle: "第三人(法人、非法人组织)",
                sectionFormItems: [{
                  type: "input",
                  name: "thirdOrgName",
                  label: "名称",
                  placeholder: "请输入单位名称"
                }, {
                  type: "input",
                  name: "thirdOrgResidenceAdress",
                  label: "住所地",
                  placeholder: "请输入单位住所地"
                }, {
                  type: "input",
                  name: "thirdOrgRegisteredAdress",
                  label: "注册所在地",
                  placeholder: "请输入单位注册所在地"
                }, {
                  type: "input",
                  name: "thirdCorporation",
                  label: "法定代表人",
                  placeholder: "请输入法定代表人"
                }, {
                  type: "input",
                  name: "thirdCreditCode",
                  label: "统一代码",
                  placeholder: "请输入统一社会信用代码"
                }, {
                  type: "select",
                  name: "thirdOrgType",
                  label: "单位类型",
                  placeholder: "请选择单位类型",
                  options: this.orgTypeOptions,
                  class: "border-bottom-none"
                }]
              }))
            },
            initClaimsFormData: function() {
              var e = this.$store.state.causeBaseFormData;
              "2" === e.buyerOrSeller && (this.claimsFormData = s(s({}, this.claimsFormData), {}, {
                compensationAmount: "",
                paymentAmount: "",
                interestDate: "",
                delayedInterest: "",
                overdueStartDate: "",
                overdueInterestBase: "",
                interestPayment: "",
                interestDischarge: ""
              }), this.claimsFormSection.push({
                sectionTitle: "具体诉讼请求（卖方）",
                sectionFormItems: [{
                  type: "input",
                  name: "compensationAmount",
                  label: "支付违约金",
                  placeholder: "请输入金额，如外币需在此注明"
                }, {
                  type: "input",
                  name: "paymentAmount",
                  label: "给付价款",
                  placeholder: "请输入金额，如外币需在此注明"
                }, {
                  type: "date",
                  name: "interestDate",
                  label: "给付截止日期",
                  placeholder: "请选择截止日期"
                }, {
                  type: "input",
                  name: "delayedInterest",
                  label: "延迟给付利息",
                  placeholder: "请输入截止至给付截止日期延迟给付的利息"
                }, {
                  type: "date",
                  name: "overdueStartDate",
                  label: "逾期开始日期",
                  placeholder: "请选择开始日期"
                }, {
                  type: "input",
                  name: "overdueInterestBase",
                  label: "逾期利息基数",
                  placeholder: "请输入自逾期开始日期的逾期利息计算基数"
                }, {
                  type: "input",
                  name: "interestPayment",
                  label: "逾期利息公式",
                  placeholder: "请输入逾期利息计算公式"
                }, {
                  type: "checkbox",
                  name: "interestDischarge",
                  label: "是否请求清偿",
                  options: this.debtChargeOptions,
                  class: "border-bottom-none"
                }]
              })), "1" === e.buyerOrSeller && (this.claimsFormData = s(s({}, this.claimsFormData), {}, {
                compensationAmount2: "",
                typesBreach: "",
                breachDetail: "",
                lossCalculationBasis: "",
                bearResponsibility: "",
                bearResponsibilityType: "",
                continueOrTerminate: ""
              }), this.claimsFormSection.push({
                sectionTitle: "具体诉讼请求（买方）",
                sectionFormItems: [{
                  type: "input",
                  name: "compensationAmount2",
                  label: "支付赔偿金",
                  placeholder: "请输入金额，如外币需在此注明"
                }, {
                  type: "select",
                  name: "typesBreach",
                  label: "违约类型",
                  placeholder: "请选择违约类型",
                  options: this.breachTypeOptions
                }, {
                  type: "input",
                  name: "breachDetail",
                  label: "损失具体情形",
                  placeholder: "请输入损失具体情形"
                }, {
                  type: "input",
                  name: "lossCalculationBasis",
                  label: "损失计算依据",
                  placeholder: "请输入损失计算依据"
                }, {
                  type: "checkbox",
                  name: "bearResponsibility",
                  label: "是否承担责任",
                  options: this.debtChargeOptions
                }, {
                  type: "select",
                  name: "bearResponsibilityType",
                  label: "具体承担责任",
                  placeholder: "请选择对方需承担责任",
                  options: this.bearResponsibilityTypeOptions
                }, {
                  type: "select",
                  name: "continueOrTerminate",
                  label: "合同要求",
                  placeholder: "请选择合同要求",
                  options: this.continueOrTerminateOptions,
                  class: "border-bottom-none"
                }]
              }))
            },
            claimsDynamicForm: function() {
              "1" === this.claimsFormData.continueOrTerminate && (this.claimsFormData = s(s({}, this.claimsFormData), {}, {
                continuePerformObligation: "",
                continueOrTerminateDate: ""
              }), this.claimsFormSection.push({
                sectionTitle: "具体诉讼请求（买方）",
                sectionFormItems: [{
                  type: "checkbox",
                  name: "continuePerformObligation",
                  label: "继续履行义务",
                  options: this.continuePerformObligationOptions
                }, {
                  type: "date",
                  name: "continueOrTerminateDate",
                  label: "履行完毕时间",
                  placeholder: "请选择履行完毕时间",
                  class: "border-bottom-none"
                }]
              })), "3" === this.claimsFormData.continueOrTerminate && (this.claimsFormData = s(s({}, this.claimsFormData), {}, {
                contractTerminationDate: ""
              }), this.claimsFormSection.push({
                sectionTitle: "具体诉讼请求（买方）",
                sectionFormItems: [{
                  type: "date",
                  name: "contractTerminationDate",
                  label: "合同解除日期",
                  placeholder: "请选择合同解除日期",
                  class: "border-bottom-none"
                }]
              }))
            },
            initJurisdictionFormData: function() {
              this.jurisdictionFormData = {
                arbitration: "",
                arbitrationContract: "",
                assetPreservation: "",
                assetPreservationApplication: "",
                assetPreservationCourt: "",
                assetPreservationDate: ""
              }, this.jurisdictionFormSection = [{
                sectionTitle: "仲裁与法院管辖",
                sectionFormItems: [{
                  type: "checkbox",
                  name: "arbitration",
                  label: "管辖约定",
                  options: this.arbitrationOptions,
                  labelPosition: "top"
                }, {
                  type: "input",
                  name: "arbitrationContract",
                  label: "合同条款及内容",
                  placeholder: "请输入以上诉情依据的合同条款及内容",
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
              var e = this.$store.state.causeBaseFormData;
              this.factsFormData = s(s({}, this.factsFormData), {}, {
                contractSigning: "",
                seller: "",
                buyer: "",
                goodsDetails: "",
                unitPrice: "",
                totalPrice: "",
                priceAndPaymentMethod: "",
                installmentPayment: "",
                installmentPlan: "",
                deliveryInfo: "",
                qualityStandard: "",
                penalty: "",
                paymentDeliveryStatus: "",
                delayedPerformance: "",
                delayedDate: "",
                performanceMode: "",
                urgePerformance: "",
                urgeDate: "",
                urgeMode: "",
                qualityDispute: "",
                qualityStatus: "",
                nonCompliance: "",
                nonComplianceStatus: "",
                qualityNegotiation: "",
                qualityNegotiationStatus: "",
                paymentType: "",
                payInterest: "",
                payLiquidatedDamages: "",
                payCompensation: "",
                calculationMethod: ""
              }), this.factsFormSection.push({
                sectionTitle: "合同签订情况",
                sectionFormItems: [{
                  type: "input",
                  name: "contractSigning",
                  label: "合同名称",
                  placeholder: "请输入合同名称、编号、签订时间、地点等"
                }, {
                  type: "input",
                  name: "seller",
                  label: "出卖人(卖方)",
                  placeholder: "请输入出卖人名称"
                }, {
                  type: "input",
                  name: "buyer",
                  label: "买受人(买方)",
                  placeholder: "请输入买受人名称"
                }, {
                  type: "input",
                  name: "goodsDetails",
                  label: "买卖货物情况",
                  placeholder: "请输入买卖货物的名称、规格、质量、数量等"
                }, {
                  type: "inputUnit",
                  name: "unitPrice",
                  label: "约定货物单价",
                  placeholder: "请输入约定货物单价"
                }, {
                  type: "inputUnit",
                  name: "totalPrice",
                  label: "实际货物总价",
                  placeholder: "请输入实际货物总价"
                }, {
                  type: "select",
                  name: "priceAndPaymentMethod",
                  label: "付款方式",
                  placeholder: "请选择付款方式",
                  options: this.priceAndPaymentMethodOptions
                }, {
                  type: "select",
                  name: "installmentPayment",
                  label: "是否分期",
                  placeholder: "请选择是否分期",
                  options: this.installmentPaymentOptions
                }, {
                  type: "input",
                  name: "installmentPlan",
                  label: "分期方式",
                  placeholder: "请输入分期方式"
                }, {
                  type: "input",
                  name: "deliveryInfo",
                  label: "合同约定内容",
                  placeholder: "请输入合同约定的交货时间、地点、方式、风险承担"
                }, {
                  type: "input",
                  name: "qualityStandard",
                  label: "合同验收标准",
                  placeholder: "请输入合同约定的质量标准及检验方式、质量异议"
                }, {
                  type: "select",
                  name: "penalty",
                  label: "约定违约金",
                  placeholder: "请选择约定违约金",
                  options: this.penaltyOptions,
                  class: "border-bottom-none"
                }]
              }, {
                sectionTitle: "合同履行情况",
                sectionFormItems: [{
                  type: "input",
                  name: "paymentDeliveryStatus",
                  label: "交付情况",
                  placeholder: "请输入价款支付及标的物交付情况"
                }, {
                  type: "checkbox",
                  name: "delayedPerformance",
                  label: "是否延迟履行",
                  options: this.debtChargeOptions
                }, {
                  type: "date",
                  name: "delayedDate",
                  label: "延迟履行时间",
                  placeholder: "请选择延迟履行时间"
                }, {
                  type: "select",
                  name: "performanceMode",
                  label: "延迟履行情况",
                  placeholder: "请选择延迟履行情况",
                  options: this.performanceModeOptions
                }, {
                  type: "checkbox",
                  name: "urgePerformance",
                  label: "是否催促履行",
                  options: this.debtChargeOptions
                }, {
                  type: "date",
                  name: "urgeDate",
                  label: "催促日期",
                  placeholder: "请选择催促日期"
                }, {
                  type: "input",
                  name: "urgeMode",
                  label: "催促方式",
                  placeholder: "请输入催促方式，例如：传真、电话、微信等"
                }, {
                  type: "checkbox",
                  name: "qualityDispute",
                  label: "有无质量争议",
                  options: this.debtChargeOptions
                }, {
                  type: "input",
                  name: "qualityStatus",
                  label: "货物质量情况",
                  placeholder: "请输入货物质量情况，例如：到货时有严重损坏"
                }, {
                  type: "checkbox",
                  name: "nonCompliance",
                  label: "有无不符约定",
                  options: this.debtChargeOptions
                }, {
                  type: "input",
                  name: "nonComplianceStatus",
                  label: "不符约定情况",
                  placeholder: "请输入标的物质量规格或履行方式，是否存在不符合约定的情况"
                }, {
                  type: "checkbox",
                  name: "qualityNegotiation",
                  label: "有无问题协商",
                  options: this.debtChargeOptions
                }, {
                  type: "input",
                  name: "qualityNegotiationStatus",
                  label: "问题协商情况",
                  placeholder: "请输入是否就标的物的质量问题进行协商"
                }, {
                  type: "select",
                  name: "paymentType",
                  label: "支付利息情况",
                  placeholder: "请选择支付利息情况",
                  options: this.paymentTypeOptions
                }, {
                  type: "inputUnit",
                  name: "payInterest",
                  label: "应支付利息",
                  placeholder: "请输入应支付利息"
                }, {
                  type: "inputUnit",
                  name: "payLiquidatedDamages",
                  label: "应支付违约金",
                  placeholder: "请输入应支付违约金"
                }, {
                  type: "inputUnit",
                  name: "payCompensation",
                  label: "应支付赔偿金",
                  placeholder: "请输入应支付赔偿金"
                }, {
                  type: "input",
                  name: "calculationMethod",
                  label: "计算方式",
                  placeholder: "请输入计算方式",
                  class: "border-bottom-none"
                }]
              }), "2" !== e.thirdParty && "3" !== e.thirdParty || (this.factsFormData = s(s({}, this.factsFormData), {}, {
                guaranteeContract: "",
                executionDate: "",
                guarantor: "",
                collateral: "",
                maxGuarantee: "",
                determinationSecuredDate: "",
                securedAmount: "",
                registration: "",
                registrationType: "",
                signGuaranteeContract: ""
              }), this.factsFormSection.push({
                sectionTitle: "担保与保证",
                sectionFormItems: [{
                  type: "guaranteeContract",
                  name: "guaranteeContract",
                  label: "担保合同",
                  labelPosition: "top",
                  class: "overdue-repay-item guarantee-item"
                }, {
                  type: "input",
                  name: "guarantor",
                  label: "担保人",
                  placeholder: "请输入担保人名称"
                }, {
                  type: "input",
                  name: "collateral",
                  label: "担保物",
                  placeholder: "请输入担保物名称"
                }, {
                  type: "checkbox",
                  name: "maxGuarantee",
                  label: "最高额担保",
                  options: this.debtChargeOptions
                }, {
                  type: "date",
                  name: "determinationSecuredDate",
                  label: "担保确定时间",
                  placeholder: "请选择担保确定时间"
                }, {
                  type: "input",
                  name: "securedAmount",
                  label: "担保额度",
                  placeholder: "请输入担保额度"
                }, {
                  type: "checkbox",
                  name: "registration",
                  label: "抵押、质押登记",
                  options: this.debtChargeOptions
                }, {
                  type: "select",
                  name: "registrationType",
                  label: "登记类型",
                  placeholder: "请选择登记类型",
                  options: this.registrationTypeOptions
                }, {
                  type: "checkbox",
                  name: "signGuaranteeContract",
                  label: "签订保证合同",
                  options: this.debtChargeOptions,
                  class: "border-bottom-none"
                }]
              }))
            },
            factsDynamicForm: function() {
              "1" === this.factsFormData.signGuaranteeContract && (this.factsFormData = s(s({}, this.factsFormData), {}, {
                guaranteeExecutionDate: "",
                definitionGuarantor: "",
                guaranteeConclusion: "",
                guaranteeType: ""
              }), this.factsFormSection.push({
                sectionTitle: "担保与保证",
                sectionFormItems: [{
                  type: "date",
                  name: "guaranteeExecutionDate",
                  label: "合同签订时间",
                  placeholder: "请选择合同签订时间"
                }, {
                  type: "input",
                  name: "definitionGuarantor",
                  label: "保证人",
                  placeholder: "请输入保证人名称"
                }, {
                  type: "input",
                  name: "guaranteeConclusion",
                  label: "保证内容",
                  placeholder: "请输入保证内容"
                }, {
                  type: "checkbox",
                  name: "guaranteeType",
                  label: "保证方式",
                  options: this.guaranteeTypeOptions,
                  labelPosition: "top",
                  class: "border-bottom-none"
                }]
              }))
            },
            setTabFormData: function() {
              var e = this,
                t = this.$store.state.parseModelFormData,
                a = function(a) {
                  if (console.log(a, t[a]), a.includes("Birthday") || a.includes("Date")) {
                    var n = t[a].replace(/年|月|日/g, "-").replace(/-$/, "");
                    t[a] = n || ""
                  }
                  if (a.includes("Gender")) {
                    var i = e.genderOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = i ? i.value : ""
                  }
                  if (a.includes("IdType")) {
                    var r = e.certificateOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = r ? r.value : ""
                  }
                  if ("interestDischarge" === a) {
                    var o = e.paymentOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = o ? o.value : ""
                  }
                  if ("prePaymentType" === a) {
                    var l = e.prePaymentOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = l ? l.value : ""
                  }
                  if ("claim" === a) {
                    var s = e.debtChargeOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = s ? s.value : ""
                  }
                  if ("arbitration" === a) {
                    var c = e.arbitrationOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = c ? c.value : ""
                  }
                  if ("assetPreservation" === a) {
                    var p = e.assetPreservationOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = p ? p.value : ""
                  }
                  if ("interestType" === a) {
                    var u = e.interestTypeOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = u ? u.value : ""
                  }
                  if ("paymentType" === a) {
                    var d = e.paymentTypeOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = d ? d.value : ""
                  }
                  if ("overdueRepayment" === a) {
                    var m = e.overdueRepaymentOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = m ? m.value : ""
                  }
                  if ("guarantee" === a) {
                    var h = e.guaranteeOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = h ? h.value : ""
                  }
                  if ("registType" === a) {
                    var y = e.registTypeOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = y ? y.value : ""
                  }
                  if ("guaranteeContract" === a) {
                    var b = e.guaranteeContractOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = b ? b.value : ""
                  }
                  if ("guaranteeType" === a) {
                    var f = e.guaranteeTypeOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = f ? f.value : ""
                  }
                  if (a.includes("OrgType")) {
                    var v = e.orgTypeOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = v ? v.value : ""
                  }
                  if ("entrustedLitigationAgentAuth" === a) {
                    var g = e.agentAuthOptions.find((function(e) {
                      return e.text === t[a]
                    }));
                    t[a] = g ? g.value : ""
                  }
                  if ("loanRate" === a) {
                    var F = t[a].replace(/%/, "");
                    t[a] = F || ""
                  }
                  Object.keys(e.partyFormData).includes(a) && (e.partyFormData[a] = t[a]), Object.keys(e.claimsFormData).includes(a) && (e.claimsFormData[a] = t[a]), Object.keys(e.jurisdictionFormData).includes(a) && (e.jurisdictionFormData[a] = t[a]), Object.keys(e.factsFormData).includes(a) && (e.factsFormData[a] = t[a])
                };
              for (var n in t) a(n)
            },
            checkPartyFormCompletion: function() {
              var e = Object.entries(this.partyFormData),
                t = ["deliveryMessage", "deliveryWechat", "deliveryFax", "deliveryEmail"],
                a = e.filter((function(e) {
                  var a = (0, i.default)(e, 1),
                    n = a[0];
                  return !t.includes(n)
                })).map((function(e) {
                  var t = (0, i.default)(e, 2),
                    a = t[1];
                  return a
                })),
                n = e.filter((function(e) {
                  var a = (0, i.default)(e, 1),
                    n = a[0];
                  return t.includes(n)
                })).map((function(e) {
                  var t = (0, i.default)(e, 2),
                    a = t[1];
                  return a
                })),
                r = a.every((function(e) {
                  return null !== e && "" !== e
                })),
                o = "1" !== this.causeBaseFormData.electronicDelivery || n.some((function(e) {
                  return null !== e && "" !== e
                }));
              this.disabled = !(r && o)
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
          computed: s({}, (0, o.mapState)(["cause", "causeBaseFormData"])),
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
    f8dd: function(e, t, a) {
      "use strict";
      a.d(t, "b", (function() {
        return i
      })), a.d(t, "c", (function() {
        return r
      })), a.d(t, "a", (function() {
        return n
      }));
      var n = {
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
          },
          dateRangePicker: function() {
            return a.e("components/date-range-picker/date-range-picker").then(a.bind(null, "6693"))
          }
        },
        i = function() {
          var e = this,
            t = e.$createElement;
          e._self._c;
          e._isMounted || (e.e0 = function(t, a) {
            var n = [],
              i = arguments.length - 2;
            while (i-- > 0) n[i] = arguments[i + 2];
            var r = n[n.length - 1].currentTarget.dataset,
              o = r.eventParams || r["event-params"];
            a = o.item;
            return e.factsFormData[a.name.startTime] = t
          }, e.e1 = function(t, a) {
            var n = [],
              i = arguments.length - 2;
            while (i-- > 0) n[i] = arguments[i + 2];
            var r = n[n.length - 1].currentTarget.dataset,
              o = r.eventParams || r["event-params"];
            a = o.item;
            return e.factsFormData[a.name.endTime] = t
          })
        },
        r = []
    }
  },
  [
    ["0ced", "common/runtime", "common/vendor"]
  ]
]);
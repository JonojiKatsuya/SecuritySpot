(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/index/causeForm/causeFormLabor"], {
    2153: function(t, e, a) {},
    "30a1": function(t, e, a) {
      "use strict";
      a.r(e);
      var n = a("fd3a"),
        i = a("9f29");
      for (var o in i)["default"].indexOf(o) < 0 && function(t) {
        a.d(e, t, (function() {
          return i[t]
        }))
      }(o);
      a("4569");
      var r = a("828b"),
        s = Object(r["a"])(i["default"], n["b"], n["c"], !1, null, "7b689f70", null, !1, n["a"], void 0);
      e["default"] = s.exports
    },
    4569: function(t, e, a) {
      "use strict";
      var n = a("2153"),
        i = a.n(n);
      i.a
    },
    "606e": function(t, e, a) {
      "use strict";
      (function(t) {
        var n = a("47a9");
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var i = n(a("34cf")),
          o = n(a("7ca3")),
          r = a("8f59");

        function s(t, e) {
          var a = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), a.push.apply(a, n)
          }
          return a
        }

        function l(t) {
          for (var e = 1; e < arguments.length; e++) {
            var a = null != arguments[e] ? arguments[e] : {};
            e % 2 ? s(Object(a), !0).forEach((function(e) {
              (0, o.default)(t, e, a[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : s(Object(a)).forEach((function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
            }))
          }
          return t
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
              disabled: !0,
              partyFormData: {},
              claimsFormData: {},
              jurisdictionFormData: {},
              factsFormData: {}
            }
          },
          methods: {
            handleTabClick: function(t) {
              switch (this.currentTab = t, this.currentTab) {
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
              var t = {
                  entrustedLitigationAgentName: this.partyFormData.entrustedLitigationAgentName,
                  entrustedLitigationAgentOrg: this.partyFormData.entrustedLitigationAgentOrg,
                  entrustedLitigationAgentPhone: this.partyFormData.entrustedLitigationAgentPhone,
                  entrustedLitigationAgentAuth: this.partyFormData.entrustedLitigationAgentAuth
                },
                e = Object.values(t).some((function(t) {
                  return void 0 !== t && null !== t && "" !== t
                }));
              return !!e
            },
            saveForm: function(e) {
              var a = this;
              t.showLoading({
                title: "加载中"
              }), t.getStorage({
                key: "causeUnionId",
                success: function(n) {
                  var i = a.$store.state.causeBaseFormData,
                    o = a.$store.state.cause;
                  a.$causeRequest("/applet/complaint/save", "POST", {
                    userId: n.data,
                    createStatus: e,
                    cateGory: Number(o) + 1,
                    laborDispute: l(l(l(l(l({}, a.partyFormData), a.claimsFormData), a.jurisdictionFormData), a.factsFormData), {}, {
                      electronicDelivery: a.$store.state.causeBaseFormData.electronicDelivery ? a.$store.state.causeBaseFormData.electronicDelivery : "",
                      plaintiffLitigationAgent: a.isEmptyEntrustedLitigationAgent() ? 1 : 2
                    }),
                    complaintId: a.$store.state.complaintId,
                    cause: Number(o),
                    causeBaseFormData: JSON.stringify(i),
                    partyFormData: JSON.stringify(a.partyFormData),
                    claimsFormData: JSON.stringify(a.claimsFormData),
                    jurisdictionFormData: JSON.stringify(a.jurisdictionFormData),
                    factsFormData: JSON.stringify(a.factsFormData)
                  }).then((function(n) {
                    t.hideLoading(), 200 === n.data.code && (1 === e ? (a.$store.commit("SET_COMPLAINT_ID", n.data.data.complaintId), t.showToast({
                      title: "暂存成功"
                    })) : (a.$store.commit("SET_PARTY_FORMDATA", a.partyFormData), a.$store.commit("SET_CLAIMS_FORMDATA", a.claimsFormData), a.$store.commit("SET_JURISDICTION_FORMDATA", a.jurisdictionFormData), a.$store.commit("SET_FACTS_FORMDATA", a.factsFormData), a.$store.commit("SET_CAUSE_FILENAME", n.data.data.complaintName), a.$store.commit("SET_COMPLAINT_ID", n.data.data.complaintId), t.redirectTo({
                      url: "/pages/index/causePreview"
                    })))
                  })).catch((function(e) {
                    t.hideLoading(), t.showToast({
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
              var t = this.$store.state.causeBaseFormData;
              this.partyFormData = l(l({}, this.partyFormData), {}, {
                plaintiffPersionName: "",
                plaintiffGender: "",
                plaintiffBirthdayDate: "",
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
              }), "2" !== t.plaintiff && "4" !== t.plaintiff || (this.partyFormData = l(l({}, this.partyFormData), {}, {
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
              })), "1" === t.electronicDelivery ? (this.partyFormData = l(l({}, this.partyFormData), {}, {
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
              })
            },
            initClaimsFormData: function() {
              this.claimsFormData = {
                claimWagePayment: "",
                salaryDetail: "",
                claimDoubleWage: "",
                doubleSalaryDetail: "",
                claimOvertimePay: "",
                overtimeDetail: "",
                claimUnusedAnnualLeave: "",
                annualLeavePayDetail: "",
                claimContractTerminationCompensation: "",
                compensationDetail: "",
                claimIllegalTerminationCompensation: "",
                compensationDetail2: "",
                assetPreservation: "",
                assetPreservationApplication: "",
                assetPreservationCourt: "",
                preservationOrder: ""
              }, this.claimsFormSection = [{
                sectionTitle: "诉求主张",
                sectionFormItems: [{
                  type: "checkbox",
                  name: "claimWagePayment",
                  label: "支付工资",
                  options: this.debtChargeOptions
                }, {
                  type: "input",
                  name: "salaryDetail",
                  label: "明细",
                  placeholder: "请输入明细"
                }, {
                  type: "checkbox",
                  name: "claimDoubleWage",
                  label: "支付双倍工资",
                  options: this.debtChargeOptions
                }, {
                  type: "input",
                  name: "doubleSalaryDetail",
                  label: "明细",
                  placeholder: "请输入明细"
                }, {
                  type: "checkbox",
                  name: "claimOvertimePay",
                  label: "支付加班费",
                  options: this.debtChargeOptions
                }, {
                  type: "input",
                  name: "overtimeDetail",
                  label: "明细",
                  placeholder: "请输入明细"
                }, {
                  type: "checkbox",
                  name: "claimUnusedAnnualLeave",
                  label: "未休年假工资",
                  options: this.debtChargeOptions
                }, {
                  type: "input",
                  name: "annualLeavePayDetail",
                  label: "明细",
                  placeholder: "请输入明细"
                }, {
                  type: "checkbox",
                  name: "claimContractTerminationCompensation",
                  label: "解除合同补偿",
                  options: this.debtChargeOptions
                }, {
                  type: "input",
                  name: "compensationDetail",
                  label: "明细",
                  placeholder: "请输入明细"
                }, {
                  type: "checkbox",
                  name: "claimIllegalTerminationCompensation",
                  label: "违法解除赔偿",
                  options: this.debtChargeOptions
                }, {
                  type: "input",
                  name: "compensationDetail2",
                  label: "明细",
                  placeholder: "请输入明细",
                  class: "border-bottom-none"
                }]
              }, {
                sectionTitle: "诉前保全",
                sectionFormItems: [{
                  type: "checkbox",
                  name: "assetPreservation",
                  label: "已经诉前保全",
                  options: this.debtChargeOptions
                }, {
                  type: "input",
                  name: "assetPreservationCourt",
                  label: "保全法院",
                  placeholder: "请填写保全法院全称"
                }, {
                  type: "input",
                  name: "preservationOrder",
                  label: "保全文书",
                  placeholder: "请填写保全文书编号"
                }, {
                  type: "checkbox",
                  name: "assetPreservationApplication",
                  label: "申请诉前保全",
                  options: this.debtChargeOptions,
                  class: "border-bottom-none"
                }]
              }]
            },
            initJurisdictionFormData: function() {},
            initFactsFormData: function() {
              var t = this.$store.state.causeBaseFormData;
              "1" === t.contract && (this.factsFormData = l(l({}, this.factsFormData), {}, {
                contractSigningCondition: "",
                contractPerformanceCondition: "",
                terminationCondition: ""
              }), this.factsFormSection.push({
                sectionTitle: "劳动合同情况",
                sectionFormItems: [{
                  type: "input",
                  name: "contractSigningCondition",
                  label: "合同签订情况",
                  placeholder: "请输入合同签订情况"
                }, {
                  type: "input",
                  name: "contractPerformanceCondition",
                  label: "合同履行情况",
                  placeholder: "请输入合同履行情况",
                  class: "border-bottom-none"
                }]
              }, {
                sectionTitle: "解除/终止劳动关系情况",
                sectionFormItems: [{
                  type: "input",
                  name: "terminationCondition",
                  label: "具体情况",
                  placeholder: "请输入解除/终止劳动关系情况原因",
                  class: "border-bottom-none"
                }]
              })), "2" === t.workInjury && (this.factsFormData = l(l({}, this.factsFormData), {}, {
                workInjuryCondition: ""
              }), this.factsFormSection.push({
                sectionTitle: "工伤情况",
                sectionFormItems: [{
                  type: "input",
                  name: "workInjuryCondition",
                  label: "具体情况",
                  placeholder: "请输入发生时间、认定情况、伤残等级、费用明细",
                  class: "border-bottom-none"
                }]
              })), "1" === t.arbitration && (this.factsFormData = l(l({}, this.factsFormData), {}, {
                arbitrationCondition: ""
              }), this.factsFormSection.push({
                sectionTitle: "劳动仲裁情况",
                sectionFormItems: [{
                  type: "input",
                  name: "arbitrationCondition",
                  label: "具体情况",
                  placeholder: "请输入劳动仲裁请求、仲裁时间、仲裁结果",
                  class: "border-bottom-none"
                }]
              }))
            },
            setTabFormData: function() {
              var t = this,
                e = this.$store.state.parseModelFormData,
                a = function(a) {
                  if (console.log(a, e[a]), a.includes("Birthday") || a.includes("Date")) {
                    var n = e[a].replace(/年|月|日/g, "-").replace(/-$/, "");
                    e[a] = n || ""
                  }
                  if (a.includes("Gender")) {
                    var i = t.genderOptions.find((function(t) {
                      return t.text === e[a]
                    }));
                    e[a] = i ? i.value : ""
                  }
                  if (a.includes("IdType")) {
                    var o = t.certificateOptions.find((function(t) {
                      return t.text === e[a]
                    }));
                    e[a] = o ? o.value : ""
                  }
                  if ("interestDischarge" === a) {
                    var r = t.paymentOptions.find((function(t) {
                      return t.text === e[a]
                    }));
                    e[a] = r ? r.value : ""
                  }
                  if ("prePaymentType" === a) {
                    var s = t.prePaymentOptions.find((function(t) {
                      return t.text === e[a]
                    }));
                    e[a] = s ? s.value : ""
                  }
                  if ("claim" === a) {
                    var l = t.debtChargeOptions.find((function(t) {
                      return t.text === e[a]
                    }));
                    e[a] = l ? l.value : ""
                  }
                  if ("arbitration" === a) {
                    var c = t.arbitrationOptions.find((function(t) {
                      return t.text === e[a]
                    }));
                    e[a] = c ? c.value : ""
                  }
                  if ("assetPreservation" === a) {
                    var u = t.assetPreservationOptions.find((function(t) {
                      return t.text === e[a]
                    }));
                    e[a] = u ? u.value : ""
                  }
                  if ("interestType" === a) {
                    var m = t.interestTypeOptions.find((function(t) {
                      return t.text === e[a]
                    }));
                    e[a] = m ? m.value : ""
                  }
                  if ("paymentType" === a) {
                    var p = t.paymentTypeOptions.find((function(t) {
                      return t.text === e[a]
                    }));
                    e[a] = p ? p.value : ""
                  }
                  if ("overdueRepayment" === a) {
                    var d = t.overdueRepaymentOptions.find((function(t) {
                      return t.text === e[a]
                    }));
                    e[a] = d ? d.value : ""
                  }
                  if ("guarantee" === a) {
                    var h = t.guaranteeOptions.find((function(t) {
                      return t.text === e[a]
                    }));
                    e[a] = h ? h.value : ""
                  }
                  if ("registType" === a) {
                    var f = t.registTypeOptions.find((function(t) {
                      return t.text === e[a]
                    }));
                    e[a] = f ? f.value : ""
                  }
                  if ("guaranteeContract" === a) {
                    var v = t.guaranteeContractOptions.find((function(t) {
                      return t.text === e[a]
                    }));
                    e[a] = v ? v.value : ""
                  }
                  if ("guaranteeType" === a) {
                    var b = t.guaranteeTypeOptions.find((function(t) {
                      return t.text === e[a]
                    }));
                    e[a] = b ? b.value : ""
                  }
                  if (a.includes("OrgType")) {
                    var y = t.orgTypeOptions.find((function(t) {
                      return t.text === e[a]
                    }));
                    e[a] = y ? y.value : ""
                  }
                  if ("entrustedLitigationAgentAuth" === a) {
                    var g = t.agentAuthOptions.find((function(t) {
                      return t.text === e[a]
                    }));
                    e[a] = g ? g.value : ""
                  }
                  if ("loanRate" === a) {
                    var F = e[a].replace(/%/, "");
                    e[a] = F || ""
                  }
                  Object.keys(t.partyFormData).includes(a) && (t.partyFormData[a] = e[a]), Object.keys(t.claimsFormData).includes(a) && (t.claimsFormData[a] = e[a]), Object.keys(t.jurisdictionFormData).includes(a) && (t.jurisdictionFormData[a] = e[a]), Object.keys(t.factsFormData).includes(a) && (t.factsFormData[a] = e[a])
                };
              for (var n in e) a(n)
            },
            checkPartyFormCompletion: function() {
              var t = Object.entries(this.partyFormData),
                e = ["deliveryMessage", "deliveryWechat", "deliveryFax", "deliveryEmail"],
                a = t.filter((function(t) {
                  var a = (0, i.default)(t, 1),
                    n = a[0];
                  return !e.includes(n)
                })).map((function(t) {
                  var e = (0, i.default)(t, 2),
                    a = e[1];
                  return a
                })),
                n = t.filter((function(t) {
                  var a = (0, i.default)(t, 1),
                    n = a[0];
                  return e.includes(n)
                })).map((function(t) {
                  var e = (0, i.default)(t, 2),
                    a = e[1];
                  return a
                })),
                o = a.every((function(t) {
                  return null !== t && "" !== t
                })),
                r = "1" !== this.causeBaseFormData.electronicDelivery || n.some((function(t) {
                  return null !== t && "" !== t
                }));
              this.disabled = !(o && r)
            },
            checkClaimsFormCompletion: function() {
              var t = Object.values(this.claimsFormData).every((function(t) {
                return null !== t && "" !== t
              }));
              this.disabled = !t
            },
            checkJurisdictionFormCompletion: function() {
              var t = Object.values(this.jurisdictionFormData).every((function(t) {
                return null !== t && "" !== t
              }));
              this.disabled = !t
            },
            checkFactsFormCompletion: function() {
              var t = Object.values(this.factsFormData).every((function(t) {
                return null !== t && "" !== t
              }));
              this.disabled = !t
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
            currentTab: function(t) {
              console.log("当前选中的 Tab 变为：", t)
            }
          },
          mounted: function() {
            this.initPartyFormData(), this.initClaimsFormData(), this.initJurisdictionFormData(), this.initFactsFormData(), this.setTabFormData();
            var t = function(t, e) {
              Object.keys(t).forEach((function(a) {
                e.hasOwnProperty(a) && (t[a] = e[a])
              }))
            };
            t(this.partyFormData, this.$store.state.partyFormData), t(this.claimsFormData, this.$store.state.claimsFormData), t(this.jurisdictionFormData, this.$store.state.jurisdictionFormData), t(this.factsFormData, this.$store.state.factsFormData), console.log(this.partyFormData, "this.partyFormData"), console.log(this.claimsFormData, "this.claimsFormData"), console.log(this.jurisdictionFormData, "this.jurisdictionFormData"), console.log(this.factsFormData, "this.factsFormData"), console.log(this.$store.state.cause, "111"), console.log(this.$store.state.causeBaseFormData, "222")
          }
        };
        e.default = c
      }).call(this, a("df3c")["default"])
    },
    "997f": function(t, e, a) {
      "use strict";
      (function(t, e) {
        var n = a("47a9");
        a("3288");
        n(a("3240"));
        var i = n(a("30a1"));
        t.__webpack_require_UNI_MP_PLUGIN__ = a, e(i.default)
      }).call(this, a("3223")["default"], a("df3c")["createPage"])
    },
    "9f29": function(t, e, a) {
      "use strict";
      a.r(e);
      var n = a("606e"),
        i = a.n(n);
      for (var o in n)["default"].indexOf(o) < 0 && function(t) {
        a.d(e, t, (function() {
          return n[t]
        }))
      }(o);
      e["default"] = i.a
    },
    fd3a: function(t, e, a) {
      "use strict";
      a.d(e, "b", (function() {
        return i
      })), a.d(e, "c", (function() {
        return o
      })), a.d(e, "a", (function() {
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
          var t = this,
            e = t.$createElement,
            a = (t._self._c, Object.keys(t.jurisdictionFormData).length);
          t._isMounted || (t.e0 = function(e, a) {
            var n = [],
              i = arguments.length - 2;
            while (i-- > 0) n[i] = arguments[i + 2];
            var o = n[n.length - 1].currentTarget.dataset,
              r = o.eventParams || o["event-params"];
            a = r.item;
            return t.factsFormData[a.name.startTime] = e
          }, t.e1 = function(e, a) {
            var n = [],
              i = arguments.length - 2;
            while (i-- > 0) n[i] = arguments[i + 2];
            var o = n[n.length - 1].currentTarget.dataset,
              r = o.eventParams || o["event-params"];
            a = r.item;
            return t.factsFormData[a.name.endTime] = e
          }), t.$mp.data = Object.assign({}, {
            $root: {
              g0: a
            }
          })
        },
        o = []
    }
  },
  [
    ["997f", "common/runtime", "common/vendor"]
  ]
]);
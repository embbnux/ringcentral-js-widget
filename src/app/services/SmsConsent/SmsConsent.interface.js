"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmsOptSource = exports.SmsCoverageCampaignType = exports.SmsConsentCoverage = exports.SmsCampaignType = exports.SMSOptStatus = exports.ConsentControlLevel = void 0;
var SMSOptStatus = exports.SMSOptStatus = /*#__PURE__*/function (SMSOptStatus) {
  SMSOptStatus["OptOut"] = "OptOut";
  SMSOptStatus["OptIn"] = "OptIn";
  return SMSOptStatus;
}({});
var SmsConsentCoverage = exports.SmsConsentCoverage = /*#__PURE__*/function (SmsConsentCoverage) {
  SmsConsentCoverage["PhoneNumber"] = "PhoneNumber";
  SmsConsentCoverage["Account"] = "Account";
  SmsConsentCoverage["CampaignType"] = "CampaignType";
  return SmsConsentCoverage;
}({});
var SmsOptSource = exports.SmsOptSource = /*#__PURE__*/function (SmsOptSource) {
  SmsOptSource["Recipient"] = "Recipient";
  SmsOptSource["Api"] = "Api";
  SmsOptSource["Upstream"] = "Upstream";
  SmsOptSource["Carrier"] = "Carrier";
  return SmsOptSource;
}({});
var SmsCampaignType = exports.SmsCampaignType = /*#__PURE__*/function (SmsCampaignType) {
  SmsCampaignType["Conversational"] = "Conversational";
  SmsCampaignType["Informational"] = "Informational";
  SmsCampaignType["Promotional"] = "Promotional";
  return SmsCampaignType;
}({});
var SmsCoverageCampaignType = exports.SmsCoverageCampaignType = /*#__PURE__*/function (SmsCoverageCampaignType) {
  SmsCoverageCampaignType["PhoneNumber"] = "PhoneNumber";
  SmsCoverageCampaignType["Account"] = "Account";
  SmsCoverageCampaignType["Conversational"] = "Conversational";
  SmsCoverageCampaignType["Informational"] = "Informational";
  SmsCoverageCampaignType["Promotional"] = "Promotional";
  return SmsCoverageCampaignType;
}({});
var ConsentControlLevel = exports.ConsentControlLevel = /*#__PURE__*/function (ConsentControlLevel) {
  ConsentControlLevel["Edit"] = "Edit";
  ConsentControlLevel["View"] = "View";
  ConsentControlLevel["None"] = "None";
  return ConsentControlLevel;
}({});
//# sourceMappingURL=SmsConsent.interface.js.map

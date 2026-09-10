"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSmsCampaignTypeLabel = getSmsCampaignTypeLabel;
exports.getSmsConsentCoverageLabel = getSmsConsentCoverageLabel;
exports.getSmsConsentRecordTrackProperties = getSmsConsentRecordTrackProperties;
exports.getSmsConsentSourceLabel = getSmsConsentSourceLabel;
exports.getSmsConsentStatusLabel = getSmsConsentStatusLabel;
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.number.constructor.js");
var _services = require("../../services");
var _i18n = require("./i18n");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SMS_CONSENT_COVERAGE_TYPES = _defineProperty(_defineProperty(_defineProperty({}, _services.SmsConsentCoverage.PhoneNumber, 'Number'), _services.SmsConsentCoverage.Account, 'Company'), _services.SmsConsentCoverage.CampaignType, 'Campaign');
var SMS_CONSENT_STATUSES = _defineProperty(_defineProperty({}, _services.SMSOptStatus.OptIn, 'Opt-in'), _services.SMSOptStatus.OptOut, 'Opt-out');
function getSmsConsentRecordTrackProperties(record, consentEntry) {
  var coverageType = SMS_CONSENT_COVERAGE_TYPES[record.coverage];
  var consentStatus = SMS_CONSENT_STATUSES[record.optStatus];
  var campaignType = record.coverage === _services.SmsConsentCoverage.CampaignType && record.campaignType ? "Campaign-".concat(record.campaignType) : undefined;
  return _objectSpread(_objectSpread({
    coverageType: coverageType
  }, campaignType ? {
    campaignType: campaignType
  } : {}), {}, {
    consentEntry: consentEntry,
    consentStatus: consentStatus
  });
}
function getSmsConsentSourceLabel(source) {
  switch (source) {
    case _services.SmsOptSource.Recipient:
    case 'RECIPIENT':
      return (0, _i18n.t)('sourceRecipient');
    case _services.SmsOptSource.Api:
    case 'API':
      return (0, _i18n.t)('sourceApi');
    case _services.SmsOptSource.Upstream:
    case _services.SmsOptSource.Carrier:
    case 'UPSTREAM':
    case 'CARRIER':
    case 'DLR':
      return (0, _i18n.t)('sourceCarrier');
    case 'ACCOUNT':
      return (0, _i18n.t)('sourceAccount');
    default:
      return source !== null && source !== void 0 ? source : '';
  }
}
function getSmsConsentCoverageLabel(coverage) {
  switch (coverage) {
    case _services.SmsConsentCoverage.PhoneNumber:
      return (0, _i18n.t)('coverageNumber');
    case _services.SmsConsentCoverage.Account:
      return (0, _i18n.t)('coverageCompany');
    case _services.SmsConsentCoverage.CampaignType:
      return (0, _i18n.t)('coverageSmsRegistration');
    default:
      return coverage !== null && coverage !== void 0 ? coverage : '';
  }
}
function getSmsConsentStatusLabel(status) {
  switch (status) {
    case _services.SMSOptStatus.OptIn:
      return (0, _i18n.t)('optIn');
    case _services.SMSOptStatus.OptOut:
      return (0, _i18n.t)('optOut');
    default:
      return status !== null && status !== void 0 ? status : '';
  }
}
function getSmsCampaignTypeLabel(campaignType) {
  switch (campaignType) {
    case _services.SmsCampaignType.Conversational:
      return (0, _i18n.t)('conversational');
    case _services.SmsCampaignType.Informational:
      return (0, _i18n.t)('informational');
    case _services.SmsCampaignType.Promotional:
      return (0, _i18n.t)('promotional');
    default:
      return campaignType;
  }
}
//# sourceMappingURL=SmsConsentDialog.helper.js.map

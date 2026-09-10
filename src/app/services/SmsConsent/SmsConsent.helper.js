"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CAMPAIGN_TYPE_OPTIONS = exports.CAMPAIGN_LEVEL = void 0;
exports.getConversationNumbers = getConversationNumbers;
exports.getDefaultSmsConsentRecordScope = getDefaultSmsConsentRecordScope;
exports.getEffectiveConsentNumbersFromKey = getEffectiveConsentNumbersFromKey;
exports.getSmsConsentRecipientStatus = getSmsConsentRecipientStatus;
exports.getSmsConsentRecordScopeFromCoverage = getSmsConsentRecordScopeFromCoverage;
exports.hasOptInCoverageForCampaignType = hasOptInCoverageForCampaignType;
exports.hasOptOutCoverageForCampaignType = hasOptOutCoverageForCampaignType;
exports.hasValidSmsOptInConsent = hasValidSmsOptInConsent;
exports.hasValidSmsOptOutConsent = hasValidSmsOptOutConsent;
exports.isSmsConsentConversationEligible = isSmsConsentConversationEligible;
exports.selectLatestSmsConsentRecord = selectLatestSmsConsentRecord;
exports.shouldRequireSmsOptInConsent = shouldRequireSmsOptInConsent;
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.array.some.js");
require("core-js/modules/es.array.sort.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.number.is-nan.js");
require("core-js/modules/es.object.to-string.js");
var _messageTypes = require("@ringcentral-integration/commons/enums/messageTypes");
var _SmsConsent = require("./SmsConsent.interface");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var CAMPAIGN_LEVEL = exports.CAMPAIGN_LEVEL = _defineProperty(_defineProperty(_defineProperty({}, _SmsConsent.SmsCampaignType.Conversational, 1), _SmsConsent.SmsCampaignType.Informational, 2), _SmsConsent.SmsCampaignType.Promotional, 3);
var CAMPAIGN_TYPE_OPTIONS = exports.CAMPAIGN_TYPE_OPTIONS = [_SmsConsent.SmsCampaignType.Conversational, _SmsConsent.SmsCampaignType.Informational, _SmsConsent.SmsCampaignType.Promotional];
var campaignCoverageMap = _defineProperty(_defineProperty(_defineProperty({}, _SmsConsent.SmsCoverageCampaignType.Conversational, _SmsConsent.SmsCampaignType.Conversational), _SmsConsent.SmsCoverageCampaignType.Informational, _SmsConsent.SmsCampaignType.Informational), _SmsConsent.SmsCoverageCampaignType.Promotional, _SmsConsent.SmsCampaignType.Promotional);
function getPartyNumber(party) {
  return (party === null || party === void 0 ? void 0 : party.phoneNumber) || (party === null || party === void 0 ? void 0 : party.extensionNumber) || '';
}
function getRecordTimestamp(record) {
  var timestamp = record.lastModifiedTime || '';
  var value = Date.parse(timestamp);
  return Number.isNaN(value) ? 0 : value;
}
function getCampaignTypeFromCoverage(coverage) {
  return coverage ? campaignCoverageMap[coverage] : undefined;
}
function isSmsConsentConversationEligible(conversation) {
  var _ref, _conversation$corresp;
  if (!(conversation !== null && conversation !== void 0 && conversation.conversationId)) {
    return false;
  }
  if (conversation.type && conversation.type !== _messageTypes.messageTypes.sms && conversation.type !== _messageTypes.messageTypes.text) {
    return false;
  }
  var correspondents = (_ref = (_conversation$corresp = conversation.correspondents) !== null && _conversation$corresp !== void 0 ? _conversation$corresp : conversation.to) !== null && _ref !== void 0 ? _ref : [];
  // skip group sms
  return correspondents.length === 1;
}
function getConversationNumbers(conversation) {
  var _correspondents$, _correspondents, _to, _self, _to2;
  if (!isSmsConsentConversationEligible(conversation)) {
    return null;
  }
  var externalParty = (_correspondents$ = (_correspondents = conversation.correspondents) === null || _correspondents === void 0 ? void 0 : _correspondents[0]) !== null && _correspondents$ !== void 0 ? _correspondents$ : conversation.direction === 'Outbound' ? (_to = conversation.to) === null || _to === void 0 ? void 0 : _to[0] : conversation.from;
  var rcParty = (_self = conversation.self) !== null && _self !== void 0 ? _self : conversation.direction === 'Outbound' ? conversation.from : (_to2 = conversation.to) === null || _to2 === void 0 ? void 0 : _to2[0];
  var from = getPartyNumber(rcParty);
  var to = getPartyNumber(externalParty);
  if (!from || !to) {
    return null;
  }
  return {
    from: from,
    to: to
  };
}
function getEffectiveConsentNumbersFromKey(key) {
  var _key$split = key.split('_'),
    _key$split2 = _toArray(_key$split),
    from = _key$split2[0],
    to = _key$split2[1],
    rest = _arrayLikeToArray(_key$split2).slice(2);
  if (!from || !to || rest.length) {
    return;
  }
  return {
    from: from,
    to: to
  };
}
function selectLatestSmsConsentRecord() {
  var records = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  if (records.length === 0) {
    return null;
  }
  return _toConsumableArray(records).sort(function (a, b) {
    return getRecordTimestamp(b) - getRecordTimestamp(a);
  })[0];
}
function isAccountOrPhoneNumberConsent(consent) {
  return consent.coverage === _SmsConsent.SmsConsentCoverage.Account || consent.coverage === _SmsConsent.SmsConsentCoverage.PhoneNumber;
}
function getCampaignLevel(campaignType) {
  if (!campaignType) {
    return undefined;
  }
  return CAMPAIGN_LEVEL[campaignType];
}
function hasOptInCoverageForCampaignType(consent, campaignType) {
  if (consent.optStatus !== _SmsConsent.SMSOptStatus.OptIn) {
    return false;
  }
  if (isAccountOrPhoneNumberConsent(consent)) {
    return true;
  }
  if (consent.coverage === _SmsConsent.SmsConsentCoverage.CampaignType) {
    var consentCampaignLevel = getCampaignLevel(consent.campaignType);
    var senderCampaignLevel = getCampaignLevel(campaignType);

    // fail-open if fetching enforcement status fails RCINT-47836
    if (!consentCampaignLevel || !senderCampaignLevel) {
      return true;
    }
    return consentCampaignLevel >= senderCampaignLevel;
  }
  return false;
}
function hasOptOutCoverageForCampaignType(consent, campaignType) {
  if (consent.optStatus !== _SmsConsent.SMSOptStatus.OptOut) {
    return false;
  }
  if (isAccountOrPhoneNumberConsent(consent)) {
    return true;
  }
  if (consent.coverage === _SmsConsent.SmsConsentCoverage.CampaignType) {
    var consentCampaignLevel = getCampaignLevel(consent.campaignType);
    var senderCampaignLevel = getCampaignLevel(campaignType);
    if (consentCampaignLevel && senderCampaignLevel) {
      return consentCampaignLevel <= senderCampaignLevel;
    }
  }
  return false;
}
function hasValidSmsOptInConsent(consents, campaignType) {
  return Boolean(consents === null || consents === void 0 ? void 0 : consents.some(function (consent) {
    return hasOptInCoverageForCampaignType(consent, campaignType);
  }));
}
function hasValidSmsOptOutConsent(consents, campaignType) {
  return Boolean(consents === null || consents === void 0 ? void 0 : consents.some(function (consent) {
    return hasOptOutCoverageForCampaignType(consent, campaignType);
  }));
}
function shouldRequireSmsOptInConsent(consents, configuration) {
  var _configuration$smsCam, _configuration$smsCam2, _configuration$smsCam3;
  if (!consents) {
    return false;
  }
  return Boolean((configuration === null || configuration === void 0 ? void 0 : (_configuration$smsCam = configuration.smsCampaignInfo) === null || _configuration$smsCam === void 0 ? void 0 : (_configuration$smsCam2 = _configuration$smsCam.consentSettings) === null || _configuration$smsCam2 === void 0 ? void 0 : _configuration$smsCam2.optInRequired) && !hasValidSmsOptInConsent(consents, configuration === null || configuration === void 0 ? void 0 : (_configuration$smsCam3 = configuration.smsCampaignInfo) === null || _configuration$smsCam3 === void 0 ? void 0 : _configuration$smsCam3.coverageType));
}
function getSmsConsentRecipientStatus(_ref2) {
  var _configuration$smsCam4;
  var consents = _ref2.consents,
    configuration = _ref2.configuration;
  var campaignType = configuration === null || configuration === void 0 ? void 0 : (_configuration$smsCam4 = configuration.smsCampaignInfo) === null || _configuration$smsCam4 === void 0 ? void 0 : _configuration$smsCam4.coverageType;
  return {
    isOptOut: hasValidSmsOptOutConsent(consents, campaignType),
    requiredOptInLoss: shouldRequireSmsOptInConsent(consents, configuration)
  };
}
function getSmsConsentRecordScopeFromCoverage(coverage) {
  if (coverage === _SmsConsent.SmsCoverageCampaignType.Account) {
    return {
      coverage: _SmsConsent.SmsConsentCoverage.Account
    };
  }
  var campaignType = getCampaignTypeFromCoverage(coverage);
  if (campaignType) {
    return {
      coverage: _SmsConsent.SmsConsentCoverage.CampaignType,
      campaignType: campaignType
    };
  }
  return {
    coverage: _SmsConsent.SmsConsentCoverage.PhoneNumber
  };
}
function getDefaultSmsConsentRecordScope(_ref3) {
  var _smsCampaignInfo$cons, _smsCampaignInfo$cons2, _smsCampaignInfo$cons3, _smsCampaignInfo$cons4;
  var configuration = _ref3.configuration,
    optStatus = _ref3.optStatus;
  var smsCampaignInfo = configuration === null || configuration === void 0 ? void 0 : configuration.smsCampaignInfo;
  var coverage = optStatus === _SmsConsent.SMSOptStatus.OptOut ? smsCampaignInfo === null || smsCampaignInfo === void 0 ? void 0 : (_smsCampaignInfo$cons = smsCampaignInfo.consentSettings) === null || _smsCampaignInfo$cons === void 0 ? void 0 : (_smsCampaignInfo$cons2 = _smsCampaignInfo$cons.coverage) === null || _smsCampaignInfo$cons2 === void 0 ? void 0 : _smsCampaignInfo$cons2.optOut : smsCampaignInfo === null || smsCampaignInfo === void 0 ? void 0 : (_smsCampaignInfo$cons3 = smsCampaignInfo.consentSettings) === null || _smsCampaignInfo$cons3 === void 0 ? void 0 : (_smsCampaignInfo$cons4 = _smsCampaignInfo$cons3.coverage) === null || _smsCampaignInfo$cons4 === void 0 ? void 0 : _smsCampaignInfo$cons4.optIn;
  return getSmsConsentRecordScopeFromCoverage(coverage);
}
//# sourceMappingURL=SmsConsent.helper.js.map

"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DetailsPanel = void 0;
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.object.values.js");
var _components = require("@ringcentral-integration/micro-contacts/src/app/components");
var _components2 = require("@ringcentral-integration/next-widgets/components");
var _springIcon = require("@ringcentral/spring-icon");
var _springUi = require("@ringcentral/spring-ui");
var _react = _interopRequireDefault(require("react"));
var _services = require("../../services");
var _SmsConsentDialog = require("./SmsConsentDialog.helper");
var _i18n = require("./i18n");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var DetailsPanel = exports.DetailsPanel = function DetailsPanel(_ref) {
  var record = _ref.record,
    phoneNumber = _ref.phoneNumber,
    contactName = _ref.contactName,
    canAddConsent = _ref.canAddConsent,
    formatNumber = _ref.formatNumber,
    formatDate = _ref.formatDate,
    onClose = _ref.onClose,
    onAddConsent = _ref.onAddConsent;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_springUi.DialogTitle, null, /*#__PURE__*/_react["default"].createElement(_components2.PageHeaderBackButton, {
    "data-sign": "viewConsentDetailsBackButton",
    onClick: onClose
  })), /*#__PURE__*/_react["default"].createElement(_springUi.DialogContent, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col gap-4"
  }, /*#__PURE__*/_react["default"].createElement(ContactHeader, {
    phoneNumber: phoneNumber,
    contactName: contactName
  }), /*#__PURE__*/_react["default"].createElement(_springUi.Block, {
    className: "flex flex-col gap-4 p-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/_react["default"].createElement(_springUi.Icon, {
    symbol: _springIcon.ConsentMd,
    size: "small",
    className: "text-neutral-b2"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "typography-subtitle"
  }, (0, _i18n.t)('consentTitle'))), !record ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "typography-mainText text-neutral-b0"
  }, (0, _i18n.t)('noConsentRecord')) : /*#__PURE__*/_react["default"].createElement(ConsentDetails, {
    record: record,
    formatNumber: formatNumber,
    formatDate: formatDate
  }), canAddConsent ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_springUi.Button, {
    variant: "contained",
    color: "primary",
    "data-sign": "smsConsentDetailsAddButton",
    onClick: onAddConsent
  }, (0, _i18n.t)('addConsent'))) : null))));
};
var ContactHeader = function ContactHeader(_ref2) {
  var phoneNumber = _ref2.phoneNumber,
    contactName = _ref2.contactName;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col items-center gap-3 pb-1"
  }, /*#__PURE__*/_react["default"].createElement(_components.ContactAvatar, {
    size: "large",
    phoneNumber: phoneNumber,
    contactName: contactName
  }), /*#__PURE__*/_react["default"].createElement("div", null, contactName && /*#__PURE__*/_react["default"].createElement("div", {
    className: "typography-title text-center text-neutral-b0"
  }, contactName), /*#__PURE__*/_react["default"].createElement("div", {
    className: "typography-mainText text-center text-neutral-b1"
  }, phoneNumber)));
};
var ConsentDetails = function ConsentDetails(_ref3) {
  var record = _ref3.record,
    formatNumber = _ref3.formatNumber,
    formatDate = _ref3.formatDate;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "typography-mainText text-neutral-b0"
  }, getConsentSummary(record, formatNumber)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex w-full flex-col gap-3"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex w-full justify-between gap-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/_react["default"].createElement(DetailField, {
    label: (0, _i18n.t)('consentStatus')
  }, /*#__PURE__*/_react["default"].createElement(ConsentStatusPill, {
    status: record.optStatus
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/_react["default"].createElement(DetailField, {
    label: (0, _i18n.t)('dateCreated'),
    align: "right"
  }, formatDate(record.lastModifiedTime)))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex w-full justify-between gap-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/_react["default"].createElement(DetailField, {
    label: (0, _i18n.t)('source')
  }, (0, _SmsConsentDialog.getSmsConsentSourceLabel)(record.source))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/_react["default"].createElement(DetailField, {
    label: (0, _i18n.t)('coverage'),
    align: "right"
  }, (0, _SmsConsentDialog.getSmsConsentCoverageLabel)(record.coverage))))), /*#__PURE__*/_react["default"].createElement(DetailField, {
    label: (0, _i18n.t)('notes')
  }, record.notes), record.coverage === _services.SmsConsentCoverage.CampaignType && record.campaignType ? /*#__PURE__*/_react["default"].createElement(CampaignCoverageList, {
    campaignType: record.campaignType
  }) : null);
};
function getConsentSummary(record, formatNumber) {
  var hasOptedIn = record.optStatus === _services.SMSOptStatus.OptIn;
  if (record.coverage === _services.SmsConsentCoverage.PhoneNumber && record.from) {
    return (0, _i18n.t)(hasOptedIn ? 'optInNumberSummary' : 'optOutNumberSummary', {
      rcNumber: formatNumber(record.from)
    });
  }
  return (0, _i18n.t)(hasOptedIn ? 'contactGaveConsent' : 'contactOptedOut');
}
var ConsentStatusPill = function ConsentStatusPill(_ref4) {
  var status = _ref4.status;
  var hasOptedIn = status === _services.SMSOptStatus.OptIn;
  return /*#__PURE__*/_react["default"].createElement(_springUi.Badge, {
    count: (0, _SmsConsentDialog.getSmsConsentStatusLabel)(status),
    color: hasOptedIn ? 'success' : 'danger',
    variant: "contained",
    size: "medium",
    classes: {
      content: 'p-3'
    },
    "data-sign": "smsConsentStatusPill"
  });
};
var CampaignCoverageList = function CampaignCoverageList(_ref5) {
  var campaignType = _ref5.campaignType;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-4 w-full"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-1 typography-descriptor text-neutral-b2"
  }, (0, _i18n.t)('registrationType')), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-wrap gap-1"
  }, Object.values(_services.SmsCampaignType).map(function (item) {
    var included = _services.CAMPAIGN_LEVEL[item] <= _services.CAMPAIGN_LEVEL[campaignType];
    var label = (0, _SmsConsentDialog.getSmsCampaignTypeLabel)(item);
    return /*#__PURE__*/_react["default"].createElement(_springUi.Block, {
      key: item,
      bordered: true,
      borderRadius: "small",
      className: "inline-flex flex-row items-center gap-1 overflow-hidden px-1.5 py-1"
    }, /*#__PURE__*/_react["default"].createElement(_springUi.Icon, {
      symbol: included ? _springIcon.CircleCheckFilledSm : _springIcon.CircleXFilledSm,
      size: "xsmall",
      className: included ? 'text-success' : 'text-danger',
      tabIndex: -1
    }), /*#__PURE__*/_react["default"].createElement("span", {
      className: "typography-mainText text-neutral-b0"
    }, label));
  })));
};
var DetailField = function DetailField(_ref6) {
  var label = _ref6.label,
    children = _ref6.children,
    _ref6$align = _ref6.align,
    align = _ref6$align === void 0 ? 'left' : _ref6$align;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: align === 'right' ? 'text-right' : ''
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "typography-descriptor text-neutral-b2 mb-1"
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "typography-mainText text-neutral-b0 whitespace-pre-line break-words"
  }, children));
};
//# sourceMappingURL=DetailsPanel.js.map

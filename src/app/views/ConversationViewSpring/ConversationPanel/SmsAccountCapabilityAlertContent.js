"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmsAccountCapabilityAlertContent = void 0;
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.set.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _springIcon = require("@ringcentral/spring-icon");
var _springUi = require("@ringcentral/spring-ui");
var _react = _interopRequireDefault(require("react"));
var _i18n = require("./i18n");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var TCR_LEARN_MORE_URL = 'https://support.ringcentral.com/article-v2/Setting-up-TCR-registration-assigning-numbers-to-SMS-campaigns.html?brand=RingCentral&product=MVP&language=en_US';
var smsPermissionReasonMap = {
  noComposePermission: 'smsNotEnabledAlert',
  noNumberAvailable: 'smsNoNumberAvailableAlert',
  receiveOnlyNumber: 'smsReceiveOnlyNumberAlert'
};
var showLearnMoreReasonSet = new Set(['noNumberAvailable', 'receiveOnlyNumber']);
var SmsAccountCapabilityAlertContent = exports.SmsAccountCapabilityAlertContent = function SmsAccountCapabilityAlertContent(_ref) {
  var reason = _ref.reason,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$showIcon = _ref.showIcon,
    showIcon = _ref$showIcon === void 0 ? false : _ref$showIcon;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center gap-1",
    "data-sign": "smsAccountCapabilityAlert"
  }, showIcon && /*#__PURE__*/_react["default"].createElement(_springUi.Icon, {
    symbol: _springIcon.HelpMd,
    size: "small"
  }), /*#__PURE__*/_react["default"].createElement("span", null, readOnly ? "".concat((0, _i18n.t)('readOnlyConversationPrefix'), " ") : null, (0, _i18n.t)(smsPermissionReasonMap[reason]), showLearnMoreReasonSet.has(reason) ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "pl-0.5"
  }, /*#__PURE__*/_react["default"].createElement(_springUi.Link, {
    href: TCR_LEARN_MORE_URL,
    target: "_blank",
    variant: "primary"
  }, (0, _i18n.t)('learnMore'))) : null));
};
//# sourceMappingURL=SmsAccountCapabilityAlertContent.js.map

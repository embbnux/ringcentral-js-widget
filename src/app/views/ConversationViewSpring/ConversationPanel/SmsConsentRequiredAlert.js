"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmsConsentRequiredAlert = void 0;
var _springIcon = require("@ringcentral/spring-icon");
var _springUi = require("@ringcentral/spring-ui");
var _react = _interopRequireDefault(require("react"));
var _i18n = require("./i18n");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var SmsConsentRequiredAlert = exports.SmsConsentRequiredAlert = function SmsConsentRequiredAlert(_ref) {
  var _ref$canAddConsent = _ref.canAddConsent,
    canAddConsent = _ref$canAddConsent === void 0 ? false : _ref$canAddConsent,
    onAddConsentClick = _ref.onAddConsentClick,
    _ref$multiple = _ref.multiple,
    multiple = _ref$multiple === void 0 ? false : _ref$multiple;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-row items-center gap-1"
  }, /*#__PURE__*/_react["default"].createElement(_springUi.Icon, {
    symbol: _springIcon.HelpMd,
    size: "small"
  }), /*#__PURE__*/_react["default"].createElement("div", null, (0, _i18n.t)(multiple ? 'smsConsentRequiredMultiple' : 'smsConsentRequired'), canAddConsent && !multiple ? /*#__PURE__*/_react["default"].createElement(_springUi.Link, {
    variant: "primary",
    className: "block",
    onClick: onAddConsentClick,
    "data-sign": "smsConsentRequiredAddConsent"
  }, (0, _i18n.t)('addConsent')) : null));
};
//# sourceMappingURL=SmsConsentRequiredAlert.js.map

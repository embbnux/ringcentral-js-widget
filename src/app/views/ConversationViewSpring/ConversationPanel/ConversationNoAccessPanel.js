"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConversationNoAccessPanel = void 0;
var _components = require("@ringcentral-integration/micro-core/src/app/components");
var _hooks = require("@ringcentral-integration/micro-core/src/app/hooks");
var _components2 = require("@ringcentral-integration/next-widgets/components");
var _no_text = _interopRequireDefault(require("@ringcentral-integration/next-core/assets/no_text.svg"));
var _react = _interopRequireDefault(require("react"));
var _i18n = _interopRequireDefault(require("./i18n"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ConversationNoAccessPanel = exports.ConversationNoAccessPanel = function ConversationNoAccessPanel(_ref) {
  var goBack = _ref.goBack;
  var _useLocale = (0, _hooks.useLocale)(_i18n["default"]),
    t = _useLocale.t;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_components.AppHeaderNav, {
    override: true
  }, /*#__PURE__*/_react["default"].createElement(_components2.PageHeader, {
    onBackClick: function onBackClick() {
      return goBack();
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    "data-sign": "conversationNoAccessPanel",
    className: "flex-auto flex justify-center items-center h-full overflow-y-auto overflow-x-hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-col flex justify-center items-center px-6"
  }, /*#__PURE__*/_react["default"].createElement(_no_text["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
    "data-sign": "conversationNoAccessMessage",
    className: "text-center text-14 text-gray-500 mt-4"
  }, t('noAccessToSendFromNumber')))));
};
ConversationNoAccessPanel.displayName = 'ConversationNoAccessPanel';
//# sourceMappingURL=ConversationNoAccessPanel.js.map

"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MovedToSharedTabAlert = void 0;
var _hooks = require("@ringcentral-integration/micro-core/src/app/hooks");
var _components = require("@ringcentral-integration/next-widgets/components");
var _springUi = require("@ringcentral/spring-ui");
var _react = _interopRequireDefault(require("react"));
var _i18n = _interopRequireDefault(require("./i18n"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var MovedToSharedTabAlert = exports.MovedToSharedTabAlert = function MovedToSharedTabAlert(_ref) {
  var phoneNumber = _ref.phoneNumber,
    onReplyInSharedTab = _ref.onReplyInSharedTab;
  var _useLocale = (0, _hooks.useLocale)(_i18n["default"]),
    t = _useLocale.t;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col gap-2"
  }, /*#__PURE__*/_react["default"].createElement(_components.FormattedMessage, {
    message: t('movedToSharedTabAlert'),
    values: {
      phoneNumber: phoneNumber
    }
  }, ' ', /*#__PURE__*/_react["default"].createElement(_springUi.Link, {
    onClick: function onClick() {
      void onReplyInSharedTab();
    },
    variant: "primary"
  }, t('replyInSharedTab'))));
};
//# sourceMappingURL=MovedToSharedTabAlert.js.map

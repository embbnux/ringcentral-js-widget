"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.array.index-of.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CallControlActionButtons = void 0;
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.object.to-string.js");
var _react = _interopRequireDefault(require("react"));
var _CallCtrlButton = require("./CallCtrlButton");
var _excluded = ["actionType", "iconSize", "size"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var CallControlActionButtons = exports.CallControlActionButtons = function CallControlActionButtons(_ref) {
  var actionButtons = _ref.actionButtons,
    actionDataSign = _ref.actionDataSign,
    _ref$dataSign = _ref.dataSign,
    dataSign = _ref$dataSign === void 0 ? 'actionButtons' : _ref$dataSign,
    getButtonProps = _ref.getButtonProps;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-wrap gap-4 justify-center px-10",
    "data-sign": dataSign
  }, actionButtons.map(function (_ref2) {
    var actionType = _ref2.actionType,
      iconSize = _ref2.iconSize,
      size = _ref2.size,
      rest = _objectWithoutProperties(_ref2, _excluded);
    var buttonProps = getButtonProps === null || getButtonProps === void 0 ? void 0 : getButtonProps(actionType);
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: actionType,
      className: "flex-[0_0_calc(33.333%-0.67rem)] min-w-0 basis-[calc(33.333%-0.67rem)]"
    }, /*#__PURE__*/_react["default"].createElement(_CallCtrlButton.CallCtrlButton, _extends({
      "data-sign": (actionDataSign === null || actionDataSign === void 0 ? void 0 : actionDataSign(actionType)) || actionType,
      menuPlacement: buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.menuPlacement,
      menuList: buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.menuList
    }, rest, {
      value: ""
    })));
  }), process.env.NODE_ENV === 'test' && /*#__PURE__*/_react["default"].createElement("span", {
    "data-sign": "actionTypes"
  }, actionButtons.map(function (button) {
    return button.actionType;
  }).join(',')));
};
//# sourceMappingURL=CallControlActionButtons.js.map

"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TCRNumberModalPanel = void 0;
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.object.to-string.js");
var _views = require("@ringcentral-integration/micro-core/src/app/views");
var _springUi = require("@ringcentral/spring-ui");
var _react = _interopRequireDefault(require("react"));
var _i18n = require("../i18n");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var REGISTER_TCR_URL = 'https://login.ringcentral.com/';
var NumberGroup = function NumberGroup(_ref) {
  var label = _ref.label,
    description = _ref.description,
    numbers = _ref.numbers,
    dataSign = _ref.dataSign;
  if (!numbers || numbers.length === 0) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    "data-sign": dataSign,
    className: "mt-3"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("strong", null, label), " (", description, "):"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-0.5"
  }, numbers.map(function (number) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      "data-sign": "tcrNumberPermissionNumber",
      key: number
    }, number);
  })));
};
var ReceiveOnlyDescription = function ReceiveOnlyDescription(_ref2) {
  var isAdminUser = _ref2.isAdminUser;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, (0, _i18n.t)('tcrReceiveOnlyDescription')), /*#__PURE__*/_react["default"].createElement("div", null, isAdminUser ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (0, _i18n.t)('tcrReceiveOnlyAdminAction'), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_springUi.Link, {
    href: REGISTER_TCR_URL,
    target: "_blank",
    variant: "primary"
  }, (0, _i18n.t)('registerNow'))) : (0, _i18n.t)('tcrReceiveOnlyNonAdminAction')));
};
var TCRNumberModalPanel = exports.TCRNumberModalPanel = function TCRNumberModalPanel() {
  var _useModalItemView = (0, _views.useModalItemView)(),
    payload = _useModalItemView.props.payload;
  if (!payload) {
    return null;
  }
  var showNumberList = payload.type === 'mixed';
  var description = payload.type === 'receiveOnlyNumber' ? /*#__PURE__*/_react["default"].createElement(ReceiveOnlyDescription, {
    isAdminUser: payload.isAdminUser
  }) : (0, _i18n.t)('tcrImportantChangesDescription');
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "typography-mainText text-neutral-b1 overflow-auto"
  }, /*#__PURE__*/_react["default"].createElement("div", null, description), showNumberList ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-4",
    "data-sign": "tcrNumberPermissionList"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "font-bold"
  }, (0, _i18n.t)('tcrPermissionListTitle')), /*#__PURE__*/_react["default"].createElement(NumberGroup, {
    dataSign: "tcrFullyRegisteredNumbers",
    label: (0, _i18n.t)('tcrFullyRegistered'),
    description: (0, _i18n.t)('tcrSendReceive'),
    numbers: payload.fullyRegisteredNumbers
  }), /*#__PURE__*/_react["default"].createElement(NumberGroup, {
    dataSign: "tcrInboundOnlyNumbers",
    label: (0, _i18n.t)('tcrInboundOnly'),
    description: (0, _i18n.t)('tcrReceiveOnly'),
    numbers: payload.inboundOnlyNumbers
  }), /*#__PURE__*/_react["default"].createElement(NumberGroup, {
    dataSign: "tcrNotRegisteredNumbers",
    label: (0, _i18n.t)('tcrNotRegistered'),
    description: (0, _i18n.t)('tcrTextingUnavailable'),
    numbers: payload.notRegisteredNumbers
  })) : null);
};
//# sourceMappingURL=TCRNumberModalPanel.js.map

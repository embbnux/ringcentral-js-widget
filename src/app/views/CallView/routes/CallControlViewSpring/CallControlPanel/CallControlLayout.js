"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CallControlLayout = exports.CallControlInformation = void 0;
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var CallControlLayout = exports.CallControlLayout = function CallControlLayout(_ref) {
  var aiNoteTip = _ref.aiNoteTip,
    callInformation = _ref.callInformation,
    className = _ref.className,
    contentDataSign = _ref.contentDataSign,
    footer = _ref.footer,
    header = _ref.header,
    isConferenceCall = _ref.isConferenceCall,
    main = _ref.main,
    status = _ref.status,
    statusEnd = _ref.statusEnd;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-5 flex items-center ml-4 mr-3 mt-3"
  }, status, /*#__PURE__*/_react["default"].createElement("i", {
    className: "flex-auto"
  }), statusEnd), /*#__PURE__*/_react["default"].createElement("div", {
    "data-sign": contentDataSign,
    className: (0, _clsx["default"])('flex-auto flex flex-col', className)
  }, callInformation, header, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('flex-auto flex flex-col h-0 overflow-auto pb-4', isConferenceCall ? 'gap-7 pt-7' : 'gap-8 pt-8')
  }, main && /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col items-center"
  }, main), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center items-center relative -mt-2"
  }, footer), aiNoteTip && /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative mx-3 mb-3"
  }, aiNoteTip))));
};
var CallControlInformation = exports.CallControlInformation = function CallControlInformation(_ref2) {
  var avatar = _ref2.avatar,
    children = _ref2.children,
    className = _ref2.className,
    contentClassName = _ref2.contentClassName,
    _ref2$dataSign = _ref2.dataSign,
    dataSign = _ref2$dataSign === void 0 ? 'call-information' : _ref2$dataSign,
    startAdornment = _ref2.startAdornment;
  return /*#__PURE__*/_react["default"].createElement("div", {
    "data-sign": dataSign,
    className: (0, _clsx["default"])('w-full py-2 pl-2 pr-4 flex', className)
  }, startAdornment, avatar, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('flex-auto ml-2 w-1', contentClassName)
  }, children));
};
//# sourceMappingURL=CallControlLayout.js.map

"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _clsx = _interopRequireDefault(require("clsx"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _CloseIcon = _interopRequireDefault(require("../../assets/images/CloseIcon.svg"));
var _Button = require("../Button");
var _i18n = _interopRequireDefault(require("./i18n"));
var _styles = _interopRequireDefault(require("./styles.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var FlatButton = function FlatButton(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? undefined : _ref$className,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? undefined : _ref$onClick,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? undefined : _ref$children,
    _ref$dataSign = _ref.dataSign,
    dataSign = _ref$dataSign === void 0 ? '' : _ref$dataSign;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(className, _styles["default"].flatBtn, _styles["default"].text, disabled && _styles["default"].disabled),
    "data-sign": dataSign,
    onClick: !disabled && onClick
  }, children);
};
FlatButton.propTypes = {
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  children: _propTypes["default"].node,
  dataSign: _propTypes["default"].string
};
var Dialog = function Dialog(_ref2) {
  var _ref2$children = _ref2.children,
    children = _ref2$children === void 0 ? undefined : _ref2$children,
    _ref2$title = _ref2.title,
    title = _ref2$title === void 0 ? '' : _ref2$title,
    _ref2$onConfirm = _ref2.onConfirm,
    onConfirm = _ref2$onConfirm === void 0 ? undefined : _ref2$onConfirm,
    _ref2$onCancel = _ref2.onCancel,
    onCancel = _ref2$onCancel === void 0 ? undefined : _ref2$onCancel,
    _ref2$textConfirm = _ref2.textConfirm,
    textConfirm = _ref2$textConfirm === void 0 ? '' : _ref2$textConfirm,
    _ref2$textCancel = _ref2.textCancel,
    textCancel = _ref2$textCancel === void 0 ? '' : _ref2$textCancel,
    _ref2$currentLocale = _ref2.currentLocale,
    currentLocale = _ref2$currentLocale === void 0 ? '' : _ref2$currentLocale,
    _ref2$className = _ref2.className,
    className = _ref2$className === void 0 ? '' : _ref2$className,
    _ref2$cancelBtnClassN = _ref2.cancelBtnClassName,
    cancelBtnClassName = _ref2$cancelBtnClassN === void 0 ? '' : _ref2$cancelBtnClassN,
    _ref2$confirmBtnClass = _ref2.confirmBtnClassName,
    confirmBtnClassName = _ref2$confirmBtnClass === void 0 ? '' : _ref2$confirmBtnClass,
    _ref2$showTitle = _ref2.showTitle,
    showTitle = _ref2$showTitle === void 0 ? true : _ref2$showTitle,
    _ref2$showCloseBtn = _ref2.showCloseBtn,
    showCloseBtn = _ref2$showCloseBtn === void 0 ? true : _ref2$showCloseBtn,
    _ref2$headerClassName = _ref2.headerClassName,
    headerClassName = _ref2$headerClassName === void 0 ? undefined : _ref2$headerClassName,
    _ref2$contentClassNam = _ref2.contentClassName,
    contentClassName = _ref2$contentClassNam === void 0 ? undefined : _ref2$contentClassNam,
    _ref2$footerClassName = _ref2.footerClassName,
    footerClassName = _ref2$footerClassName === void 0 ? undefined : _ref2$footerClassName;
  var footer = !currentLocale || !onCancel && !onConfirm ? null : /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_styles["default"].footer, footerClassName)
  }, onCancel ? /*#__PURE__*/_react["default"].createElement(FlatButton, {
    className: (0, _clsx["default"])(_styles["default"].btn, _styles["default"].cancelBtn, cancelBtnClassName),
    dataSign: "cancel",
    onClick: onCancel
  }, textCancel || _i18n["default"].getString('cancel', currentLocale)) : null, onConfirm ? /*#__PURE__*/_react["default"].createElement(FlatButton, {
    className: (0, _clsx["default"])(_styles["default"].btn, _styles["default"].confirmBtn, confirmBtnClassName),
    dataSign: "confirm",
    onClick: onConfirm
  }, textConfirm || _i18n["default"].getString('confirm', currentLocale)) : null);
  var headText = "".concat(title) || null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_styles["default"].dialog, className)
  }, showTitle ? /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_styles["default"].header, headerClassName)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: _styles["default"].headerText,
    title: headText
  }, headText)) : null, showCloseBtn ? /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    dataSign: "closeButton",
    className: _styles["default"].closeBtn,
    onClick: onCancel
  }, /*#__PURE__*/_react["default"].createElement(_CloseIcon["default"], null)) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])(_styles["default"].content, contentClassName)
  }, children), footer);
};
Dialog.propTypes = {
  className: _propTypes["default"].string,
  cancelBtnClassName: _propTypes["default"].string,
  confirmBtnClassName: _propTypes["default"].string,
  children: _propTypes["default"].node,
  onConfirm: _propTypes["default"].func,
  onCancel: _propTypes["default"].func,
  title: _propTypes["default"].string,
  currentLocale: _propTypes["default"].string,
  textConfirm: _propTypes["default"].string,
  textCancel: _propTypes["default"].string,
  showCloseBtn: _propTypes["default"].bool,
  showTitle: _propTypes["default"].bool,
  headerClassName: _propTypes["default"].string,
  contentClassName: _propTypes["default"].string,
  footerClassName: _propTypes["default"].string
};
var _default = exports["default"] = Dialog;
//# sourceMappingURL=index.js.map

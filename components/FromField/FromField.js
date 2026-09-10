"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FromField = void 0;
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.find.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.set.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _components = require("@ringcentral-integration/micro-auth/src/app/components");
var _springIcon = require("@ringcentral/spring-icon");
var _springUi = require("@ringcentral/spring-ui");
var _react = _interopRequireWildcard(require("react"));
var _i18n = require("./i18n");
var _styles = _interopRequireDefault(require("./styles.scss"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var PhoneNumber = function PhoneNumber(props) {
  var label = props.label,
    phoneNumber = props.phoneNumber;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: _styles["default"].phoneNumber
  }, label ? /*#__PURE__*/_react["default"].createElement("span", {
    className: _styles["default"].usageType
  }, label) : null, /*#__PURE__*/_react["default"].createElement("span", {
    "data-sign": "phoneNumber"
  }, /*#__PURE__*/_react["default"].createElement(_components.FormattedPhoneNumber, {
    phoneNumber: phoneNumber || ''
  })));
};
var NumberFeatureOption = function NumberFeatureOption(props) {
  var label = props.label,
    phoneNumber = props.phoneNumber,
    statusLabel = props.statusLabel;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: "flex w-full items-center justify-between gap-2 py-0.5"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "flex shrink-0 flex-col items-start whitespace-nowrap"
  }, label ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "typography-subtitleMini text-neutral-b0"
  }, label) : null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "typography-descriptor text-neutral-b2",
    "data-sign": "phoneNumber"
  }, /*#__PURE__*/_react["default"].createElement(_components.FormattedPhoneNumber, {
    phoneNumber: phoneNumber || ''
  }))), statusLabel ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "ml-auto flex min-w-0 flex-1 items-center justify-end gap-1 text-right"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "min-w-0 whitespace-normal break-words text-right typography-descriptorMini text-neutral-b2"
  }, statusLabel), /*#__PURE__*/_react["default"].createElement(_springUi.Tooltip, {
    title: (0, _i18n.t)('numberRegistrationTooltip'),
    classes: {
      content: 'text-left'
    },
    placement: "left",
    triggerWhenDisabled: true,
    triggerWrapperProps: {
      className: 'inline-flex shrink-0 cursor-pointer pointer-events-auto',
      onClick: function onClick(event) {
        return event.stopPropagation();
      },
      onMouseDown: function onMouseDown(event) {
        return event.stopPropagation();
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_springUi.Icon, {
    size: "small",
    "data-sign": "numberFeatureStatusHint",
    symbol: _springIcon.InfoMd,
    className: "text-neutral-b0"
  }))) : null);
};
// phone number formatting becomes expensive when there are lots of numbers
// memo makes this a pure component to reduce rendering cost
var FromField = exports.FromField = /*#__PURE__*/(0, _react.memo)(function FromField(_ref) {
  var className = _ref.className,
    _ref$fromNumber = _ref.fromNumber,
    fromNumber = _ref$fromNumber === void 0 ? null : _ref$fromNumber,
    fromNumbers = _ref.fromNumbers,
    fromPlaceholder = _ref.fromPlaceholder,
    _onChange = _ref.onChange,
    hidden = _ref.hidden,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$showAnonymous = _ref.showAnonymous,
    showAnonymous = _ref$showAnonymous === void 0 ? true : _ref$showAnonymous;
  if (hidden) {
    return null;
  }
  var options = _toConsumableArray(fromNumbers);
  if (showAnonymous) {
    options.push({
      phoneNumber: 'anonymous'
    });
  }
  var disabledPhoneNumberSet = new Set(options.filter(function (_ref2) {
    var disabled = _ref2.disabled;
    return disabled;
  }).map(function (_ref3) {
    var phoneNumber = _ref3.phoneNumber;
    return phoneNumber;
  }));
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, /*#__PURE__*/_react["default"].createElement(_springUi.Select, {
    className: "w-full",
    "data-sign": "dropdownSelect",
    variant: "outlined",
    size: "large",
    label: fromPlaceholder || (0, _i18n.t)('from'),
    value: fromNumber,
    disabled: disabled,
    renderValue: function renderValue(value) {
      if (value === 'anonymous') {
        return /*#__PURE__*/_react["default"].createElement("span", null, (0, _i18n.t)('Blocked'));
      }
      var selectedOption = options.find(function (_ref4) {
        var phoneNumber = _ref4.phoneNumber;
        return phoneNumber === value;
      });
      var usageTypeLabel = selectedOption && getDisplayLabel(selectedOption.extension, selectedOption.usageType, selectedOption.displayLabel);
      return /*#__PURE__*/_react["default"].createElement(PhoneNumber, {
        phoneNumber: value,
        label: usageTypeLabel
      });
    },
    onChange: function onChange(e) {
      var phoneNumber = e.target.value;
      if (disabledPhoneNumberSet.has(phoneNumber)) {
        return;
      }
      _onChange({
        phoneNumber: phoneNumber
      });
    }
  }, options.map(function (option) {
    var phoneNumber = option.phoneNumber,
      usageType = option.usageType,
      displayLabel = option.displayLabel,
      disabled = option.disabled,
      statusLabel = option.statusLabel,
      extension = option.extension;
    var usageTypeLabel = getDisplayLabel(extension, usageType, displayLabel);
    return /*#__PURE__*/_react["default"].createElement(_springUi.Option, {
      "data-sign": "selectMenuItem",
      key: phoneNumber,
      value: phoneNumber,
      disabled: disabled
    }, phoneNumber === 'anonymous' ? /*#__PURE__*/_react["default"].createElement("span", null, (0, _i18n.t)('Blocked')) : /*#__PURE__*/_react["default"].createElement(NumberFeatureOption, {
      phoneNumber: phoneNumber,
      label: usageTypeLabel,
      statusLabel: statusLabel
    }));
  })));
});
function getDisplayLabel(extension, usageType, displayLabel) {
  return displayLabel ? displayLabel : (extension === null || extension === void 0 ? void 0 : extension.type) === 'Site' ? extension.name : usageType ? (0, _i18n.t)(usageType) : undefined;
}
//# sourceMappingURL=FromField.js.map

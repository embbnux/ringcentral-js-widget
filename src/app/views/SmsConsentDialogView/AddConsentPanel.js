"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddConsentPanel = void 0;
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.reverse.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.object.to-string.js");
var _springIcon = require("@ringcentral/spring-icon");
var _springUi = require("@ringcentral/spring-ui");
var _react = _interopRequireWildcard(require("react"));
var _services = require("../../services");
var _SmsConsentDialog = require("./SmsConsentDialog.helper");
var _i18n = require("./i18n");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var statusOptions = [_services.SMSOptStatus.OptIn, _services.SMSOptStatus.OptOut];
var REGISTRATION_TYPE_LEARN_MORE_URL = 'https://support.ringcentral.com/article-v2/SMS-consent-requirements-and-examples.html?brand=RingCentral&product=RingEX&language=en_US';
var RegistrationTypeTooltip = function RegistrationTypeTooltip() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  return /*#__PURE__*/_react["default"].createElement(_springUi.Tooltip, {
    open: open,
    placement: "bottom",
    title: /*#__PURE__*/_react["default"].createElement(_springUi.ClickAwayListener, {
      onClickAway: function onClickAway() {
        setOpen(false);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", null, (0, _i18n.t)('registrationTypeTooltip'), /*#__PURE__*/_react["default"].createElement("span", {
      className: "pl-1"
    }, /*#__PURE__*/_react["default"].createElement(_springUi.Link, {
      href: REGISTRATION_TYPE_LEARN_MORE_URL,
      target: "_blank",
      className: "text-neutral-w0 hover:text-neutral-w0"
    }, (0, _i18n.t)('learnMore')))))
  }, /*#__PURE__*/_react["default"].createElement(_springUi.IconButton, {
    size: "xsmall",
    color: "secondary",
    variant: "icon",
    "data-sign": "smsConsentRegistrationTypeTooltip",
    symbol: _springIcon.InfoMd,
    onClick: function onClick(e) {
      e.preventDefault();
      setOpen(function (previous) {
        return !previous;
      });
    }
  }));
};
var AddConsentPanel = exports.AddConsentPanel = function AddConsentPanel(_ref) {
  var optStatus = _ref.optStatus,
    externalNumber = _ref.externalNumber,
    registeredNumber = _ref.registeredNumber,
    campaignType = _ref.campaignType,
    showRegisteredNumber = _ref.showRegisteredNumber,
    showRegistrationType = _ref.showRegistrationType,
    notes = _ref.notes,
    saving = _ref.saving,
    disabled = _ref.disabled,
    _ref$editableExternal = _ref.editableExternalNumber,
    editableExternalNumber = _ref$editableExternal === void 0 ? false : _ref$editableExternal,
    _ref$externalNumberEr = _ref.externalNumberError,
    externalNumberError = _ref$externalNumberEr === void 0 ? false : _ref$externalNumberEr,
    onClose = _ref.onClose,
    onOptStatusChange = _ref.onOptStatusChange,
    onExternalNumberChange = _ref.onExternalNumberChange,
    onExternalNumberBlur = _ref.onExternalNumberBlur,
    onCampaignTypeChange = _ref.onCampaignTypeChange,
    onNotesChange = _ref.onNotesChange,
    onSave = _ref.onSave;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col overflow-hidden",
    style: {
      maxHeight: '75vh'
    }
  }, /*#__PURE__*/_react["default"].createElement(_springUi.DialogTitle, {
    className: "relative flex min-h-[48px] items-center justify-center px-12 py-3"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "typography-subtitleBold truncate text-neutral-b0",
    "data-sign": "smsConsentAddDialogTitle"
  }, (0, _i18n.t)('addConsentTitle')), /*#__PURE__*/_react["default"].createElement(_springUi.IconButton, {
    symbol: _springIcon.Xmd,
    size: "small",
    variant: "icon",
    color: "secondary",
    className: "absolute right-2 top-2",
    "data-sign": "smsConsentDialogCloseButton",
    disabled: saving,
    TooltipProps: {
      title: (0, _i18n.t)('closeDialog')
    },
    onClick: onClose
  })), /*#__PURE__*/_react["default"].createElement(_springUi.DialogContent, {
    className: "flex flex-col gap-3 pb-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "typography-mainText text-neutral-b0"
  }, (0, _i18n.t)('addConsentSubtitle')), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "typography-descriptorMini text-neutral-b0 mb-1"
  }, (0, _i18n.t)('consentStatus')), /*#__PURE__*/_react["default"].createElement(_springUi.RadioGroup, {
    name: "sms-consent-status",
    value: optStatus,
    onChange: function onChange(event) {
      onOptStatusChange(event.target.value);
    },
    row: true,
    className: "gap-4"
  }, statusOptions.map(function (status) {
    return /*#__PURE__*/_react["default"].createElement(_springUi.FormLabel, {
      key: status,
      className: "flex items-center typography-descriptorMini text-neutral-f06",
      label: status === _services.SMSOptStatus.OptIn ? (0, _i18n.t)('optIn') : (0, _i18n.t)('optOut'),
      value: status
    }, /*#__PURE__*/_react["default"].createElement(_springUi.Radio, {
      name: "sms-consent-status"
    }));
  }))), /*#__PURE__*/_react["default"].createElement(_springUi.TextField, {
    label: (0, _i18n.t)('externalNumber'),
    size: "medium",
    value: externalNumber,
    fullWidth: true,
    disabled: !editableExternalNumber,
    error: editableExternalNumber && externalNumberError,
    placeholder: editableExternalNumber ? (0, _i18n.t)('enterNumber') : undefined,
    onChange: editableExternalNumber ? function (event) {
      return onExternalNumberChange === null || onExternalNumberChange === void 0 ? void 0 : onExternalNumberChange(event.target.value);
    } : undefined,
    onBlur: editableExternalNumber ? function () {
      return onExternalNumberBlur === null || onExternalNumberBlur === void 0 ? void 0 : onExternalNumberBlur();
    } : undefined,
    inputProps: {
      'data-sign': 'smsConsentExternalNumber'
    }
  }), showRegisteredNumber ? /*#__PURE__*/_react["default"].createElement(_springUi.TextField, {
    label: (0, _i18n.t)('smsRegisteredNumber'),
    size: "medium",
    value: registeredNumber,
    fullWidth: true,
    disabled: true,
    inputProps: {
      'data-sign': 'smsConsentRegisteredNumber'
    }
  }) : null, showRegistrationType ? /*#__PURE__*/_react["default"].createElement(_springUi.Select, {
    label: /*#__PURE__*/_react["default"].createElement("span", {
      className: "inline-flex items-center gap-1"
    }, /*#__PURE__*/_react["default"].createElement("span", null, (0, _i18n.t)('registrationType')), /*#__PURE__*/_react["default"].createElement(RegistrationTypeTooltip, null)),
    value: campaignType,
    onChange: function onChange(_ref2) {
      var value = _ref2.target.value;
      onCampaignTypeChange(value);
    },
    variant: "outlined",
    size: "medium",
    className: "w-full",
    "data-sign": "smsConsentRegistrationTypeSelect"
  }, _services.CAMPAIGN_TYPE_OPTIONS.slice().reverse().map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_springUi.Option, {
      key: item,
      value: item
    }, (0, _SmsConsentDialog.getSmsCampaignTypeLabel)(item));
  })) : null, /*#__PURE__*/_react["default"].createElement(_springUi.Textarea, {
    label: (0, _i18n.t)('notes'),
    placeholder: (0, _i18n.t)('notesPlaceholder'),
    value: notes,
    fullWidth: true,
    maxRows: 2,
    inputProps: {
      'data-sign': 'smsConsentNotesInput'
    },
    showCharacterCount: true,
    onChange: function onChange(event) {
      onNotesChange(event.target.value);
    }
  })), /*#__PURE__*/_react["default"].createElement(_springUi.Divider, {
    orientation: "horizontal",
    flexItem: true
  }), /*#__PURE__*/_react["default"].createElement(_springUi.DialogActions, null, /*#__PURE__*/_react["default"].createElement(_springUi.Button, {
    variant: "contained",
    color: "primary",
    "data-sign": "smsConsentSaveButton",
    loading: saving,
    disabled: disabled,
    onClick: onSave,
    fullWidth: true,
    className: "mb-3"
  }, (0, _i18n.t)('save'))));
};
//# sourceMappingURL=AddConsentPanel.js.map

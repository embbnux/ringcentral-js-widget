"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.slice.js");
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
exports.GeneralMeetingSettings = void 0;
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.object.to-string.js");
var _hooks = require("@ringcentral-integration/micro-core/src/app/hooks");
var _springIcon = require("@ringcentral/spring-icon");
var _springUi = require("@ringcentral/spring-ui");
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireWildcard(require("react"));
var _meetingUtils = require("../../shared/meeting-utils");
var _i18n = _interopRequireDefault(require("../i18n"));
var _PasswordEditDialog = require("./PasswordEditDialog");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var variantConfig = {
  compact: {
    blockBorderRadius: 'small',
    blockPadding: 'p-3',
    mainContainerGap: 'gap-2',
    titleLockIconGap: 'gap-1',
    dropdownStyle: {
      variant: 'outlined',
      size: 'medium',
      className: '',
      classes: undefined
    },
    requirePasswordSection: {
      contentSwitchGap: 'gap-3',
      leftContentGap: 'gap-1',
      descriptionGap: 'gap-1',
      passwordDescription: '',
      passwordRowGap: 'gap-2'
    },
    manageWhoCanJoinSection: {
      outerSpacing: 'gap-1'
    },
    useWaitingRoomSection: {
      contentSwitchGap: 'gap-3',
      outerSpacing: 'gap-2'
    },
    startMeetingAfterJoinSection: {
      contentSwitchGap: 'gap-3'
    }
  },
  spacious: {
    blockBorderRadius: 'xsmall',
    blockPadding: 'px-3 py-4',
    mainContainerGap: 'gap-2',
    titleLockIconGap: 'gap-1',
    dropdownStyle: {
      variant: 'contained',
      size: 'large',
      className: '',
      classes: {
        content: 'sui-block-border-radius-xsmall'
      }
    },
    requirePasswordSection: {
      contentSwitchGap: 'gap-3',
      leftContentGap: '',
      descriptionGap: '',
      passwordDescription: 'mb-1',
      passwordRowGap: 'mt-1 gap-2.5'
    },
    manageWhoCanJoinSection: {
      outerSpacing: 'gap-1 py-1'
    },
    useWaitingRoomSection: {
      contentSwitchGap: 'gap-2',
      outerSpacing: 'gap-4 py-1'
    },
    startMeetingAfterJoinSection: {
      contentSwitchGap: 'gap-3 pt-1'
    }
  }
};
var GeneralMeetingSettings = exports.GeneralMeetingSettings = function GeneralMeetingSettings(_ref) {
  var requirePassword = _ref.requirePassword,
    meetingPassword = _ref.meetingPassword,
    whoCanJoin = _ref.whoCanJoin,
    useWaitingRoom = _ref.useWaitingRoom,
    waitingRoomParticipants = _ref.waitingRoomParticipants,
    startMeetingAfterJoin = _ref.startMeetingAfterJoin,
    whoCanJoinOptions = _ref.whoCanJoinOptions,
    waitingRoomOptions = _ref.waitingRoomOptions,
    disabled = _ref.disabled,
    isJoinBeforeHostDisabled = _ref.isJoinBeforeHostDisabled,
    isWaitingRoomDisabled = _ref.isWaitingRoomDisabled,
    isWaitingRoomTypeDisabled = _ref.isWaitingRoomTypeDisabled,
    isAuthenticatedCanJoinDisabled = _ref.isAuthenticatedCanJoinDisabled,
    isAuthUserTypeDisabled = _ref.isAuthUserTypeDisabled,
    isRequirePasswordDisabled = _ref.isRequirePasswordDisabled,
    isEditPasswordDisabled = _ref.isEditPasswordDisabled,
    _ref$isRequirePasswor = _ref.isRequirePasswordLocked,
    isRequirePasswordLocked = _ref$isRequirePasswor === void 0 ? false : _ref$isRequirePasswor,
    _ref$isJoinBeforeHost = _ref.isJoinBeforeHostLocked,
    isJoinBeforeHostLocked = _ref$isJoinBeforeHost === void 0 ? false : _ref$isJoinBeforeHost,
    _ref$isWaitingRoomLoc = _ref.isWaitingRoomLocked,
    isWaitingRoomLocked = _ref$isWaitingRoomLoc === void 0 ? false : _ref$isWaitingRoomLoc,
    _ref$isAuthUserTypeLo = _ref.isAuthUserTypeLocked,
    isAuthUserTypeLocked = _ref$isAuthUserTypeLo === void 0 ? false : _ref$isAuthUserTypeLo,
    onRequirePasswordChange = _ref.onRequirePasswordChange,
    onPasswordChange = _ref.onPasswordChange,
    onWhoCanJoinChange = _ref.onWhoCanJoinChange,
    onUseWaitingRoomChange = _ref.onUseWaitingRoomChange,
    onWaitingRoomParticipantsChange = _ref.onWaitingRoomParticipantsChange,
    onStartMeetingAfterJoinChange = _ref.onStartMeetingAfterJoinChange,
    className = _ref.className,
    brandConfig = _ref.brandConfig,
    _ref$isCompact = _ref.isCompact,
    isCompact = _ref$isCompact === void 0 ? false : _ref$isCompact,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'compact' : _ref$variant;
  var _useLocale = (0, _hooks.useLocale)(_i18n["default"]),
    t = _useLocale.t;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isPasswordDialogOpen = _useState2[0],
    setIsPasswordDialogOpen = _useState2[1];
  var styles = variantConfig[variant];
  var handleEditPassword = function handleEditPassword() {
    setIsPasswordDialogOpen(true);
  };
  var handlePasswordUpdate = function handlePasswordUpdate(newPassword) {
    onPasswordChange(newPassword);
  };
  var handlePasswordDialogClose = function handlePasswordDialogClose() {
    setIsPasswordDialogOpen(false);
  };
  var renderLockIcon = function renderLockIcon(isLocked) {
    if (!isLocked) return null;
    return /*#__PURE__*/_react["default"].createElement(_springUi.Tooltip, {
      title: t('adminLockedSetting')
    }, /*#__PURE__*/_react["default"].createElement(_springUi.Icon, {
      size: "small",
      symbol: _springIcon.LockMd,
      "data-sign": "lockIcon"
    }));
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_springUi.Block, {
    bordered: true,
    borderRadius: styles.blockBorderRadius,
    padding: false,
    className: (0, _clsx["default"])('w-full mx-auto', className),
    classes: {
      root: (0, _clsx["default"])('overflow-visible', styles.blockPadding)
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('flex flex-col w-full', styles.mainContainerGap)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('flex', styles.requirePasswordSection.contentSwitchGap),
    "data-sign": "requirePasswordSection"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('flex flex-col flex-1', styles.requirePasswordSection.leftContentGap)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('typography-subtitleMini text-neutral-b0 flex items-center', styles.titleLockIconGap)
  }, t('requirePassword'), renderLockIcon(isRequirePasswordLocked)), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('flex flex-col', styles.requirePasswordSection.descriptionGap)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('typography-descriptor text-neutral-b2', styles.requirePasswordSection.passwordDescription)
  }, t('requirePasswordDescription')), requirePassword && !isEditPasswordDisabled && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('flex items-center', styles.requirePasswordSection.passwordRowGap)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "typography-descriptorMini text-neutral-b2",
    "data-sign": "password"
  }, t('password'), ": ", meetingPassword), !disabled && /*#__PURE__*/_react["default"].createElement(_springUi.Link, {
    "data-sign": "editPassword",
    onClick: handleEditPassword,
    className: "typography-descriptorMini"
  }, t('edit'))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement(_springUi.Switch, {
    checked: requirePassword,
    onChange: function onChange(e) {
      return onRequirePasswordChange(e.target.checked);
    },
    disabled: disabled || isRequirePasswordDisabled || isRequirePasswordLocked,
    "data-sign": "requirePassword"
  }))), /*#__PURE__*/_react["default"].createElement(_springUi.Divider, null), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('flex flex-col', styles.manageWhoCanJoinSection.outerSpacing),
    "data-sign": "manageWhoCanJoinSection"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('typography-subtitleMini text-neutral-b0 flex items-center', styles.titleLockIconGap)
  }, t('manageWhoCanJoin'), renderLockIcon(isAuthUserTypeLocked))), /*#__PURE__*/_react["default"].createElement(_springUi.Select, {
    variant: styles.dropdownStyle.variant,
    size: styles.dropdownStyle.size,
    "data-sign": "manageWhoCanJoinField",
    value: (0, _meetingUtils.getWhoCanJoinDisplayText)(whoCanJoin, brandConfig),
    onChange: function onChange(e) {
      return onWhoCanJoinChange(e.target.value);
    },
    className: (0, _clsx["default"])('w-full', styles.dropdownStyle.className),
    classes: styles.dropdownStyle.classes,
    disabled: disabled || isAuthUserTypeDisabled || isAuthUserTypeLocked
  }, whoCanJoinOptions.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement(_springUi.Option, {
      key: option.value,
      value: option.value
    }, t(option.label));
  }))), /*#__PURE__*/_react["default"].createElement(_springUi.Divider, null), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('flex flex-col', styles.useWaitingRoomSection.outerSpacing),
    "data-sign": "useWaitingRoomSection"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('flex', styles.useWaitingRoomSection.contentSwitchGap)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col flex-1"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('typography-subtitleMini text-neutral-b0 flex items-center', styles.titleLockIconGap)
  }, t('useWaitingRoom'), renderLockIcon(isWaitingRoomLocked)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "typography-descriptor text-neutral-b2"
  }, t('useWaitingRoomDescription'))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement(_springUi.Switch, {
    checked: useWaitingRoom,
    onChange: function onChange(e) {
      return onUseWaitingRoomChange(e.target.checked);
    },
    disabled: disabled || isWaitingRoomDisabled || isWaitingRoomLocked,
    "data-sign": "enableWaitingRoom"
  }))), useWaitingRoom && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_springUi.Select, {
    variant: styles.dropdownStyle.variant,
    size: styles.dropdownStyle.size,
    "data-sign": "waitingRoomField",
    value: t(waitingRoomParticipants),
    className: (0, _clsx["default"])('w-full', styles.dropdownStyle.className),
    classes: styles.dropdownStyle.classes,
    onChange: function onChange(e) {
      return onWaitingRoomParticipantsChange(e.target.value);
    },
    disabled: disabled || isWaitingRoomTypeDisabled || isWaitingRoomLocked
  }, waitingRoomOptions.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement(_springUi.Option, {
      key: option.value,
      value: option.value
    }, t(option.label));
  })))), /*#__PURE__*/_react["default"].createElement(_springUi.Divider, null), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('flex', styles.startMeetingAfterJoinSection.contentSwitchGap)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col flex-1",
    "data-sign": "startMeetingAfterJoinSection"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('typography-subtitleMini text-neutral-b0 flex items-center', styles.titleLockIconGap)
  }, t('startMeetingAfterJoin'), renderLockIcon(isJoinBeforeHostLocked)), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _clsx["default"])('flex flex-col')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "typography-descriptor text-neutral-b2"
  }, t('startMeetingAfterJoinDescription')))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement(_springUi.Switch, {
    checked: startMeetingAfterJoin,
    onChange: function onChange(e) {
      return onStartMeetingAfterJoinChange(e.target.checked);
    },
    disabled: disabled || isJoinBeforeHostDisabled || isJoinBeforeHostLocked,
    "data-sign": "startMeetingAfterJoin"
  }))))), /*#__PURE__*/_react["default"].createElement(_PasswordEditDialog.PasswordEditDialog, {
    open: isPasswordDialogOpen,
    currentPassword: meetingPassword,
    onClose: handlePasswordDialogClose,
    onUpdate: handlePasswordUpdate,
    isCompact: isCompact
  }));
};
//# sourceMappingURL=GeneralMeetingSettings.js.map

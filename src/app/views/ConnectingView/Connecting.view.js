"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.index-of.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.array.reverse.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.for-each.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnectingView = void 0;
require("core-js/modules/es.array.find.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.now.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.set.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _services = require("@ringcentral-integration/micro-contacts/src/app/services");
var _components = require("@ringcentral-integration/micro-core/src/app/components");
var _hooks = require("@ringcentral-integration/micro-core/src/app/hooks");
var _nextCore = require("@ringcentral-integration/next-core");
var _springUi = require("@ringcentral/spring-ui");
var _react = _interopRequireWildcard(require("react"));
var _rxjs = require("rxjs");
var _useCallActionButtons = require("../../hooks/useCallActionButtons");
var _useContactRenderInfo2 = require("../../hooks/useContactRenderInfo");
var _i18n = _interopRequireDefault(require("../../hooks/useContactRenderInfo/i18n"));
var _services2 = require("../../services");
var _isPreinsertCall = require("../../services/PreinsertCall/utils/isPreinsertCall");
var _CallControlViewSpring = require("../CallView/routes/CallControlViewSpring");
var _CallControlPanel = require("../CallView/routes/CallControlViewSpring/CallControlPanel");
var _i18n2 = _interopRequireDefault(require("../CallView/routes/CallControlViewSpring/CallControlPanel/i18n"));
var _services3 = require("../CallView/services");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec0, _dec1, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
var _excluded = ["actionType", "label", "tooltip"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var telephonySessionEventRegExp = /\/(telephony\/sessions|start-ring|stop-ring)$/;
var PreinsertConnectingOverlay = function PreinsertConnectingOverlay(_ref) {
  var _call$from;
  var actions = _ref.actions,
    call = _ref.call,
    onAction = _ref.onAction,
    onHangUp = _ref.onHangUp;
  var _useLocale = (0, _hooks.useLocale)(_i18n2["default"], _i18n["default"]),
    t = _useLocale.t;
  var _useContactRenderInfo = (0, _useContactRenderInfo2.useContactRenderInfoFromCall)(call, {
      phoneNumberDisplayMode: 'unknown',
      hideBlockedFromInfo: true
    }),
    DisplayName = _useContactRenderInfo.DisplayName,
    displayPhoneNumber = _useContactRenderInfo.displayPhoneNumber,
    Avatar = _useContactRenderInfo.Avatar,
    myCallerId = _useContactRenderInfo.myCallerId;
  var callActions = (0, _useCallActionButtons.useCallActionButtons)(actions, function (actionType) {
    if (actionType === 'hangUp') {
      onHangUp();
      return;
    }
    onAction === null || onAction === void 0 ? void 0 : onAction(actionType);
  }, {
    isConferenceCall: false
  });
  var actionButtons = (0, _react.useMemo)(function () {
    return callActions.slice(0, -1);
  }, [callActions]);
  var hangUpActionProps = (0, _react.useMemo)(function () {
    return callActions[callActions.length - 1];
  }, [callActions]);
  var _ref2 = hangUpActionProps !== null && hangUpActionProps !== void 0 ? hangUpActionProps : {},
    hangUpActionType = _ref2.actionType,
    label = _ref2.label,
    tooltip = _ref2.tooltip,
    hangUpButtonProps = _objectWithoutProperties(_ref2, _excluded);
  var hangUpLabel = tooltip || label || t('Hang up');
  return /*#__PURE__*/_react["default"].createElement(_components.AppMainContent, null, /*#__PURE__*/_react["default"].createElement("div", {
    "aria-live": "polite",
    "aria-busy": "true",
    className: "absolute inset-0 z-drawer flex flex-col bg-neutral-base",
    "data-sign": "preinsertConnectingOverlay"
  }, /*#__PURE__*/_react["default"].createElement(_CallControlPanel.CallControlLayout, {
    callInformation: /*#__PURE__*/_react["default"].createElement(_CallControlPanel.CallControlInformation, {
      avatar: /*#__PURE__*/_react["default"].createElement(Avatar, {
        size: "large"
      }),
      dataSign: "preinsertConnectingCallInformation",
      startAdornment: /*#__PURE__*/_react["default"].createElement("div", {
        "aria-hidden": true,
        className: "size-8 flex-none"
      })
    }, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "typography-title text-neutral-b0 truncate w-full flex flex-col",
      "data-sign": "preinsertConnectingDisplayName"
    }, /*#__PURE__*/_react["default"].createElement(DisplayName, {
      displayControl: {
        maybe: true,
        viewable: true,
        matchCounts: true
      }
    })), displayPhoneNumber ? /*#__PURE__*/_react["default"].createElement("p", {
      className: "typography-descriptorMini text-neutral-b0",
      "data-sign": "preinsertConnectingPhoneNumber"
    }, displayPhoneNumber) : null, (_call$from = call.from) !== null && _call$from !== void 0 && _call$from.phoneNumber && myCallerId ? /*#__PURE__*/_react["default"].createElement("p", {
      className: "typography-descriptorMini text-neutral-b2",
      "data-sign": "preinsertConnectingCallerId"
    }, t('myCallerId'), ": ", myCallerId) : null),
    contentDataSign: "preinsertConnectingPanel",
    footer: /*#__PURE__*/_react["default"].createElement(_springUi.CallButton, _extends({}, hangUpButtonProps, {
      "aria-label": hangUpLabel,
      "data-sign": "preinsertConnectingHangUp",
      size: "medium",
      TooltipProps: {
        title: hangUpLabel
      },
      variant: "end"
    })),
    main: /*#__PURE__*/_react["default"].createElement(_CallControlPanel.CallControlActionButtons, {
      actionButtons: actionButtons,
      actionDataSign: function actionDataSign(actionType) {
        return "preinsertConnecting_".concat(actionType);
      },
      dataSign: "preinsertConnectingActionButtons"
    }),
    status: /*#__PURE__*/_react["default"].createElement("span", {
      className: "typography-body1 text-neutral-b2"
    }, t('connecting'))
  })));
};
var ConnectingView = exports.ConnectingView = (_dec = (0, _nextCore.injectable)({
  name: 'ConnectingView'
}), _dec2 = function _dec2(target, key) {
  return (0, _nextCore.inject)('Subscription')(target, undefined, 8);
}, _dec3 = function _dec3(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 9);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _CallControlViewSpring.CallControlView === "undefined" ? Object : _CallControlViewSpring.CallControlView, typeof _services2.Call === "undefined" ? Object : _services2.Call, typeof _services2.CallAction === "undefined" ? Object : _services2.CallAction, typeof _services3.CallViewState === "undefined" ? Object : _services3.CallViewState, typeof _services2.CallingSettings === "undefined" ? Object : _services2.CallingSettings, typeof _services2.PreinsertCall === "undefined" ? Object : _services2.PreinsertCall, typeof _nextCore.PortManager === "undefined" ? Object : _nextCore.PortManager, typeof _nextCore.RouterPlugin === "undefined" ? Object : _nextCore.RouterPlugin, typeof Subscription === "undefined" ? Object : Subscription, typeof _services.ContactMatcher === "undefined" ? Object : _services.ContactMatcher]), _dec6 = Reflect.metadata("design:type", typeof PreinsertConnectingDisplayInfo === "undefined" ? Object : PreinsertConnectingDisplayInfo), _dec7 = Reflect.metadata("design:type", Function), _dec8 = Reflect.metadata("design:paramtypes", [Boolean, void 0, typeof PreinsertConnectingDisplayInfo === "undefined" ? Object : PreinsertConnectingDisplayInfo]), _dec9 = Reflect.metadata("design:type", Function), _dec0 = Reflect.metadata("design:paramtypes", [Number, String]), _dec1 = Reflect.metadata("design:type", Function), _dec10 = Reflect.metadata("design:paramtypes", []), _dec11 = (0, _nextCore.delegate)('server'), _dec12 = Reflect.metadata("design:type", Function), _dec13 = Reflect.metadata("design:paramtypes", [Boolean, void 0]), _dec14 = (0, _nextCore.delegate)('server'), _dec15 = Reflect.metadata("design:type", Function), _dec16 = Reflect.metadata("design:paramtypes", [Number, String]), _dec17 = (0, _nextCore.delegate)('server'), _dec18 = Reflect.metadata("design:type", Function), _dec19 = Reflect.metadata("design:paramtypes", []), _dec20 = Reflect.metadata("design:type", Function), _dec21 = Reflect.metadata("design:paramtypes", []), _dec22 = Reflect.metadata("design:type", Function), _dec23 = Reflect.metadata("design:paramtypes", []), _dec24 = Reflect.metadata("design:type", Function), _dec25 = Reflect.metadata("design:paramtypes", [typeof PreinsertConnectingOverlayViewProps === "undefined" ? Object : PreinsertConnectingOverlayViewProps]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (_class2 = /*#__PURE__*/function (_RcViewModule) {
  function ConnectingView(_callControlView, _call, _callAction, _callViewState, _callingSettings, _preInsertCall, _portManager, _router, _subscription, _contactMatcher) {
    var _this;
    _classCallCheck(this, ConnectingView);
    _this = _callSuper(this, ConnectingView);
    _this._callControlView = _callControlView;
    _this._call = _call;
    _this._callAction = _callAction;
    _this._callViewState = _callViewState;
    _this._callingSettings = _callingSettings;
    _this._preInsertCall = _preInsertCall;
    _this._portManager = _portManager;
    _this._router = _router;
    _this._subscription = _subscription;
    _this._contactMatcher = _contactMatcher;
    _this._preinsertConnectingToken = 0;
    _this._cancelledPreinsertConnectingTokens = new Set();
    _initializerDefineProperty(_this, "connecting", _descriptor, _this);
    _initializerDefineProperty(_this, "preinsertConnectingToken", _descriptor2, _this);
    _initializerDefineProperty(_this, "preinsertConnectingWebphoneSessionId", _descriptor3, _this);
    _initializerDefineProperty(_this, "preinsertConnectingDisplayInfo", _descriptor4, _this);
    return _this;
  }
  _inherits(ConnectingView, _RcViewModule);
  return _createClass(ConnectingView, [{
    key: "enabled",
    get: function get() {
      return this._callingSettings.isWebphoneMode;
    }
  }, {
    key: "isConnecting",
    get: function get() {
      return this.enabled && this.connecting;
    }
  }, {
    key: "_setPreinsertConnecting",
    value: function _setPreinsertConnecting(value) {
      var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var displayInfo = arguments.length > 2 ? arguments[2] : undefined;
      this.connecting = value;
      this.preinsertConnectingToken = token;
      if (displayInfo) {
        this.preinsertConnectingDisplayInfo = displayInfo;
      }
    }
  }, {
    key: "_setPreinsertConnectingWebphoneSessionId",
    value: function _setPreinsertConnectingWebphoneSessionId(token, webphoneSessionId) {
      if (!this.connecting || this.preinsertConnectingToken !== token) {
        return;
      }
      this.preinsertConnectingWebphoneSessionId = webphoneSessionId;
    }
  }, {
    key: "_clearPreinsertConnectingWebphoneSessionId",
    value: function _clearPreinsertConnectingWebphoneSessionId() {
      this.preinsertConnectingWebphoneSessionId = '';
    }
  }, {
    key: "preparePreinsertConnecting",
    value: function preparePreinsertConnecting(_ref3) {
      var callerId = _ref3.callerId,
        recipient = _ref3.recipient,
        toNumberField = _ref3.toNumberField;
      if (!this.enabled) {
        return 0;
      }
      var preinsertConnectingToken = this.nextPreinsertConnectingToken();
      var toNumber = toNumberField || (recipient === null || recipient === void 0 ? void 0 : recipient.phoneNumber) || (recipient === null || recipient === void 0 ? void 0 : recipient.extension) || '';
      this._setPreinsertConnecting(true, preinsertConnectingToken, {
        callerId: callerId,
        phoneNumber: toNumber
      });
      this._clearPreinsertConnectingWebphoneSessionId();
      return preinsertConnectingToken;
    }
  }, {
    key: "resetPreinsertConnecting",
    value: function resetPreinsertConnecting() {
      this._setPreinsertConnecting(false, 0, {
        callerId: '',
        phoneNumber: ''
      });
      this._clearPreinsertConnectingWebphoneSessionId();
      this._cancelledPreinsertConnectingTokens.clear();
    }
  }, {
    key: "setPreinsertConnectingOnServer",
    value: function () {
      var _setPreinsertConnectingOnServer = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(value) {
        var token,
          _args = arguments;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              token = _args.length > 1 && _args[1] !== undefined ? _args[1] : 0;
              if (!(value && !this.enabled)) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              this._setPreinsertConnecting(value, token);
            case 2:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function setPreinsertConnectingOnServer(_x) {
        return _setPreinsertConnectingOnServer.apply(this, arguments);
      }
      return setPreinsertConnectingOnServer;
    }()
  }, {
    key: "setPreinsertConnectingWebphoneSessionIdOnServer",
    value: function () {
      var _setPreinsertConnectingWebphoneSessionIdOnServer = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(token, webphoneSessionId) {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              if (!(!this.enabled || !webphoneSessionId)) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              this._setPreinsertConnectingWebphoneSessionId(token, webphoneSessionId);
            case 2:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function setPreinsertConnectingWebphoneSessionIdOnServer(_x2, _x3) {
        return _setPreinsertConnectingWebphoneSessionIdOnServer.apply(this, arguments);
      }
      return setPreinsertConnectingWebphoneSessionIdOnServer;
    }()
  }, {
    key: "hangUpPreinsertConnecting",
    value: function () {
      var _hangUpPreinsertConnecting = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var token;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              token = this.preinsertConnectingToken;
              this._cancelledPreinsertConnectingTokens.add(token);
              this._setPreinsertConnecting(false, token);
              _context3.n = 1;
              return this._call.connectErrorOnServer();
            case 1:
              _context3.n = 2;
              return this.cancelPreinsertConnectingCall(this.preinsertConnectingWebphoneSessionId);
            case 2:
              return _context3.a(2);
          }
        }, _callee3, this);
      }));
      function hangUpPreinsertConnecting() {
        return _hangUpPreinsertConnecting.apply(this, arguments);
      }
      return hangUpPreinsertConnecting;
    }()
  }, {
    key: "cancelPreinsertConnectingCall",
    value: function cancelPreinsertConnectingCall(webphoneSessionId) {
      return this._preInsertCall.cancelPreinsertConnectingCall(webphoneSessionId);
    }
  }, {
    key: "onInitOnce",
    value: function onInitOnce() {
      var _this2 = this;
      if (this._portManager.shared) {
        this._portManager.onServer(function () {
          _this2._bindListeners();
        });
        return;
      }
      this._bindListeners();
    }
  }, {
    key: "_bindListeners",
    value: function _bindListeners() {
      var _this3 = this;
      (0, _nextCore.fromWatchValue)(this, function () {
        return _this3._callingSettings.isWebphoneMode;
      }).pipe((0, _rxjs.switchMap)(function (isWebphoneMode) {
        if (isWebphoneMode) {
          return (0, _rxjs.combineLatest)([_this3._subscription.fromMessage$(telephonySessionEventRegExp), (0, _nextCore.fromWatchValue)(_this3, function () {
            return [_this3.preinsertConnectingWebphoneSessionId, _this3._callViewState.view, _this3._callAction.activeCallInfo, _this3._router.currentPath];
          }, {
            multiple: true
          })]).pipe((0, _rxjs.map)(function (_ref4) {
            var _ref5 = _slicedToArray(_ref4, 2),
              message = _ref5[0],
              _ref5$ = _slicedToArray(_ref5[1], 1),
              preinsertConnectingWebphoneSessionId = _ref5$[0];
            if (
            // when connecting webphone session change, we also check if we need end the connecting state
            preinsertConnectingWebphoneSessionId && _this3.connecting && _this3._isCurrentPreinsertConnectingCallMessage(preinsertConnectingWebphoneSessionId, message) &&
            // must wait the connecting call be ready to display, otherwise will see the previous screen flash before the connecting call be ready to display
            _this3._isPreinsertConnectingCallReadyToDisplay(message)) {
              return true;
            }
            return false;
          }), (0, _rxjs.filter)(Boolean), (0, _rxjs.tap)(function () {
            _this3._setPreinsertConnecting(false);
          }));
        }
        if (_this3.connecting) {
          _this3.resetPreinsertConnecting();
        }
        return _rxjs.EMPTY;
      }), _nextCore.takeUntilAppDestroy).subscribe();
    }
  }, {
    key: "_isCurrentPreinsertConnectingCallMessage",
    value: function _isCurrentPreinsertConnectingCallMessage(preinsertConnectingWebphoneSessionId, message) {
      var telephonySessionId = message.telephonySessionId;
      var sessionId = message.sessionId;
      if (sessionId === preinsertConnectingWebphoneSessionId) {
        return true;
      }
      if (!telephonySessionId) {
        return false;
      }
      return this._preInsertCall.isCurrentDeviceWebphoneSession(telephonySessionId, preinsertConnectingWebphoneSessionId);
    }
  }, {
    key: "_isPreinsertConnectingCallReadyToDisplay",
    value: function _isPreinsertConnectingCallReadyToDisplay(message) {
      var _activeCallInfo$meta, _activeCall$webphoneS;
      var activeCallInfo = this._callAction.activeCallInfo;
      var activeCall = activeCallInfo === null || activeCallInfo === void 0 ? void 0 : activeCallInfo.call;
      if (this._callViewState.view !== 'activeCall' || this._router.currentPath !== _services2.CALLING_ROUTE_PATH || !(activeCallInfo !== null && activeCallInfo !== void 0 && (_activeCallInfo$meta = activeCallInfo.meta) !== null && _activeCallInfo$meta !== void 0 && _activeCallInfo$meta.open) || !activeCall || (0, _services2.isRingingCall)(activeCall)) {
        return false;
      }
      var telephonySessionId = message.telephonySessionId;
      var sessionId = message.sessionId;
      return Boolean(telephonySessionId && activeCall.telephonySessionId === telephonySessionId || sessionId && ((_activeCall$webphoneS = activeCall.webphoneSession) === null || _activeCall$webphoneS === void 0 ? void 0 : _activeCall$webphoneS.id) === sessionId);
    }
  }, {
    key: "nextPreinsertConnectingToken",
    value: function nextPreinsertConnectingToken() {
      this._preinsertConnectingToken += 1;
      return this._preinsertConnectingToken;
    }
  }, {
    key: "isPreinsertConnectingCancelled",
    value: function isPreinsertConnectingCancelled(token) {
      return this._cancelledPreinsertConnectingTokens.has(token);
    }
  }, {
    key: "clearPreinsertConnectingCancel",
    value: function clearPreinsertConnectingCancel(token) {
      this._cancelledPreinsertConnectingTokens["delete"](token);
    }
  }, {
    key: "toMatches",
    get: function get() {
      var _this$_contactMatcher;
      var phoneNumber = this.preinsertConnectingDisplayInfo.phoneNumber;
      return (_this$_contactMatcher = this._contactMatcher) === null || _this$_contactMatcher === void 0 ? void 0 : _this$_contactMatcher.findMatchesFromNumber(phoneNumber, undefined);
    }
  }, {
    key: "call",
    get: function get() {
      var _toMatches$find;
      var _this$preinsertConnec = this.preinsertConnectingDisplayInfo,
        callerId = _this$preinsertConnec.callerId,
        phoneNumber = _this$preinsertConnec.phoneNumber;
      var toMatches = this.toMatches;
      var sessionId = (0, _isPreinsertCall.getPreinsertFakeId)("".concat(this.preinsertConnectingToken));
      return {
        direction: 'Outbound',
        from: {
          phoneNumber: callerId === 'anonymous' ? '' : callerId
        },
        fromMatches: [],
        sessionId: sessionId,
        startTime: Date.now(),
        telephonySessionId: sessionId,
        to: {
          phoneNumber: phoneNumber,
          // when have have matches and the extension number be same as current phone number, we assume that be extension number
          extensionNumber: toMatches === null || toMatches === void 0 ? void 0 : (_toMatches$find = toMatches.find(function (match) {
            var _match$phoneNumbers;
            return (_match$phoneNumbers = match.phoneNumbers) === null || _match$phoneNumbers === void 0 ? void 0 : _match$phoneNumbers.find(function (pn) {
              return pn.phoneNumber === phoneNumber && pn.phoneType === 'extension';
            });
          })) === null || _toMatches$find === void 0 ? void 0 : _toMatches$find.extensionNumber
        },
        toMatches: toMatches
      };
    }
  }, {
    key: "Connecting",
    value: function Connecting(props) {
      var _this4 = this;
      var call = (0, _nextCore.useConnector)(function () {
        return _this4.call;
      });
      var actions = this._callControlView.useCallActions({
        call: call,
        actionsDisabled: true
      });
      return /*#__PURE__*/_react["default"].createElement(PreinsertConnectingOverlay, _extends({}, props, {
        actions: actions,
        call: call,
        onHangUp: function onHangUp() {
          void _this4.hangUpPreinsertConnecting();
        }
      }));
    }
  }, {
    key: "component",
    value: function component(props) {
      var _this5 = this;
      var isConnecting = (0, _nextCore.useConnector)(function () {
        return _this5.isConnecting;
      });
      return isConnecting ? /*#__PURE__*/_react["default"].createElement(this.Connecting, props) : null;
    }
  }]);
}(_nextCore.RcViewModule), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "connecting", [_nextCore.state], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "preinsertConnectingToken", [_nextCore.state], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "preinsertConnectingWebphoneSessionId", [_nextCore.state], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "preinsertConnectingDisplayInfo", [_nextCore.state, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {
      callerId: '',
      phoneNumber: ''
    };
  }
}), _applyDecoratedDescriptor(_class2.prototype, "_setPreinsertConnecting", [_nextCore.action, _dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "_setPreinsertConnecting"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setPreinsertConnectingWebphoneSessionId", [_nextCore.action, _dec9, _dec0], Object.getOwnPropertyDescriptor(_class2.prototype, "_setPreinsertConnectingWebphoneSessionId"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_clearPreinsertConnectingWebphoneSessionId", [_nextCore.action, _dec1, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "_clearPreinsertConnectingWebphoneSessionId"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "setPreinsertConnectingOnServer", [_dec11, _dec12, _dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "setPreinsertConnectingOnServer"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "setPreinsertConnectingWebphoneSessionIdOnServer", [_dec14, _dec15, _dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "setPreinsertConnectingWebphoneSessionIdOnServer"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "hangUpPreinsertConnecting", [_dec17, _dec18, _dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "hangUpPreinsertConnecting"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "toMatches", [_nextCore.computed, _dec20, _dec21], Object.getOwnPropertyDescriptor(_class2.prototype, "toMatches"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "call", [_nextCore.computed, _dec22, _dec23], Object.getOwnPropertyDescriptor(_class2.prototype, "call"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "Connecting", [_nextCore.autobind, _dec24, _dec25], Object.getOwnPropertyDescriptor(_class2.prototype, "Connecting"), _class2.prototype), _class2)) || _class) || _class) || _class) || _class) || _class);
//# sourceMappingURL=Connecting.view.js.map

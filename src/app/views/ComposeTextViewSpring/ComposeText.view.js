"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.array.reverse.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComposeTextViewSpring = exports.COMPOSE_TEXT_BACK_PATH = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.find.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.trim.js");
var _services = require("@ringcentral-integration/micro-auth/src/app/services");
var _services2 = require("@ringcentral-integration/micro-contacts/src/app/services");
var _views = require("@ringcentral-integration/micro-core/src/app/views");
var _services3 = require("@ringcentral-integration/micro-phone/src/app/services");
var _nextCore = require("@ringcentral-integration/next-core");
var _react = _interopRequireWildcard(require("react"));
var _services4 = require("../../services");
var _SmsConsentDialogView = require("../SmsConsentDialogView");
var _SmsOptOutView = require("../SmsOptOutView");
var _SmsTemplateView = require("../SmsTemplateView");
var _ComposeTextPanel = require("./ComposeTextPanel");
var _i18n = require("./ComposeTextPanel/i18n");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec0, _dec1, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
var COMPOSE_TEXT_BACK_PATH = exports.COMPOSE_TEXT_BACK_PATH = 'composeTextBackPath';
var ComposeTextViewSpring = exports.ComposeTextViewSpring = (_dec = (0, _nextCore.injectable)({
  name: 'ComposeTextViewSpring'
}), _dec2 = function _dec2(target, key) {
  return (0, _nextCore.optional)('ComposeTextViewSpringOptions')(target, undefined, 14);
}, _dec3 = function _dec3(target, key) {
  return (0, _nextCore.optional)('SmsConversationsOptions')(target, undefined, 15);
}, _dec4 = function _dec4(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 16);
}, _dec5 = function _dec5(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 17);
}, _dec6 = function _dec6(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 18);
}, _dec7 = function _dec7(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 19);
}, _dec8 = function _dec8(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 20);
}, _dec9 = Reflect.metadata("design:type", Function), _dec0 = Reflect.metadata("design:paramtypes", [typeof _views.SyncTabView === "undefined" ? Object : _views.SyncTabView, typeof _services4.ComposeText === "undefined" ? Object : _services4.ComposeText, typeof _services.ConnectivityMonitor === "undefined" ? Object : _services.ConnectivityMonitor, typeof _services2.ContactSearch === "undefined" ? Object : _services2.ContactSearch, typeof _services4.Conversations === "undefined" ? Object : _services4.Conversations, typeof _services4.MessageSender === "undefined" ? Object : _services4.MessageSender, typeof _services4.MessageStore === "undefined" ? Object : _services4.MessageStore, typeof _services4.QueueMessageStore === "undefined" ? Object : _services4.QueueMessageStore, typeof _services.RateLimiter === "undefined" ? Object : _services.RateLimiter, typeof _services.AppFeatures === "undefined" ? Object : _services.AppFeatures, typeof _nextCore.RouterPlugin === "undefined" ? Object : _nextCore.RouterPlugin, typeof _services.NumberFormatter === "undefined" ? Object : _services.NumberFormatter, typeof _SmsTemplateView.SmsTemplateView === "undefined" ? Object : _SmsTemplateView.SmsTemplateView, typeof _services3.CallQueues === "undefined" ? Object : _services3.CallQueues, typeof ComposeTextViewSpringOptions === "undefined" ? Object : ComposeTextViewSpringOptions, typeof SmsConversationsOptions === "undefined" ? Object : SmsConversationsOptions, typeof _SmsOptOutView.SmsOptOutView === "undefined" ? Object : _SmsOptOutView.SmsOptOutView, typeof _services2.ContactMatcher === "undefined" ? Object : _services2.ContactMatcher, typeof _services4.SmsConsent === "undefined" ? Object : _services4.SmsConsent, typeof _SmsConsentDialogView.SmsConsentDialogView === "undefined" ? Object : _SmsConsentDialogView.SmsConsentDialogView, typeof _nextCore.PortManager === "undefined" ? Object : _nextCore.PortManager]), _dec1 = (0, _nextCore.dynamic)('ContactSearchView'), _dec10 = Reflect.metadata("design:type", typeof ContactSearchView === "undefined" ? Object : ContactSearchView), _dec11 = Reflect.metadata("design:type", Function), _dec12 = Reflect.metadata("design:paramtypes", []), _dec13 = (0, _nextCore.delegate)('server'), _dec14 = Reflect.metadata("design:type", Function), _dec15 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = _dec0(_class = (_class2 = /*#__PURE__*/function (_RcViewModule) {
  function ComposeTextViewSpring(_syncTabView, _composeText, _connectivityMonitor, _contactSearch, _conversations, _messageSender, _messageStore, _queueMessageStore, _rateLimiter, _appFeatures, _router, _numberFormatter, _smsTemplateView, _callQueues, _composeTextViewOptions, _smsConversationsOptions, _smsOptOutView, _contactMatcher, _smsConsent, _smsConsentDialogView, _portManager) {
    var _this;
    _classCallCheck(this, ComposeTextViewSpring);
    _this = _callSuper(this, ComposeTextViewSpring);
    _this._syncTabView = _syncTabView;
    _this._composeText = _composeText;
    _this._connectivityMonitor = _connectivityMonitor;
    _this._contactSearch = _contactSearch;
    _this._conversations = _conversations;
    _this._messageSender = _messageSender;
    _this._messageStore = _messageStore;
    _this._queueMessageStore = _queueMessageStore;
    _this._rateLimiter = _rateLimiter;
    _this._appFeatures = _appFeatures;
    _this._router = _router;
    _this._numberFormatter = _numberFormatter;
    _this._smsTemplateView = _smsTemplateView;
    _this._callQueues = _callQueues;
    _this._composeTextViewOptions = _composeTextViewOptions;
    _this._smsConversationsOptions = _smsConversationsOptions;
    _this._smsOptOutView = _smsOptOutView;
    _this._contactMatcher = _contactMatcher;
    _this._smsConsent = _smsConsent;
    _this._smsConsentDialogView = _smsConsentDialogView;
    _this._portManager = _portManager;
    _initializerDefineProperty(_this, "_contactSearchView", _descriptor, _this);
    return _this;
  }
  _inherits(ComposeTextViewSpring, _RcViewModule);
  return _createClass(ComposeTextViewSpring, [{
    key: "showSpinner",
    get: function get() {
      return !(this._composeText.ready && this._messageSender.ready && this._appFeatures.ready && this._contactSearch.ready);
    }
  }, {
    key: "getUIProps",
    value: function getUIProps(_) {
      var _this$_smsConsent;
      var isContentEmpty = this._composeText.messageText.length === 0 && (!this._composeText.attachments || this._composeText.attachments.length === 0);
      var requiredOptInCount = this._composeText.requiredOptInToNumbers.length;
      return {
        sendButtonDisabled: !(this._composeText.ready && this._messageSender.idle) || isContentEmpty || this._composeText.hasInvalidToNumbers || this._composeText.toNumbers.length === 0 && this._composeText.typingToNumber.length === 0 || !this._messageSender.hasSmsPermission || !this._connectivityMonitor.connectivity || this._rateLimiter.restricted,
        senderNumbers: this.senderNumbers,
        senderNumber: this._composeText.senderNumber,
        typingToNumber: this._composeText.typingToNumber,
        toNumbers: this._composeText.toNumbers,
        messageText: this._composeText.messageText,
        showSpinner: this.showSpinner,
        sending: this._messageSender.sendStatus === _services4.messageSenderStatus.sending,
        attachments: this._composeText.attachments,
        supportAttachment: this._appFeatures.hasSendMMSPermission,
        allowedCreateGroupText: this._appFeatures.hasSendMMSPermission && this._composeText.toNumbers.length > 1 && !this._composeText.disabledGroupMessage,
        createGroupChecked: this._composeText.createGroupChecked,
        maxRecipients: this._composeText.maxRecipients,
        acceptFileTypes: this._conversations.acceptFileTypes,
        disabledGroupMessage: this._composeText.disabledGroupMessage,
        requiredOptInCount: requiredOptInCount,
        canAddSmsConsent: (_this$_smsConsent = this._smsConsent) === null || _this$_smsConsent === void 0 ? void 0 : _this$_smsConsent.canAddConsent
      };
    }
  }, {
    key: "senderNumbers",
    get: function get() {
      var _this2 = this;
      var senderNumbers = [].concat(_toConsumableArray(this._messageSender.senderNumbersList.map(function (number) {
        return _objectSpread(_objectSpread({}, number), {}, {
          displayLabel: _this2._getCallQueueName(number)
        });
      })), _toConsumableArray(this._messageSender.receiveOnlyNumbers.map(function (number) {
        return _objectSpread(_objectSpread({}, number), {}, {
          disabled: true,
          displayLabel: _this2._getCallQueueName(number),
          statusLabel: (0, _i18n.t)('incomingTextsOnly')
        });
      })), _toConsumableArray(this._messageSender.registerableNumbers.map(function (number) {
        return _objectSpread(_objectSpread({}, number), {}, {
          disabled: true,
          displayLabel: _this2._getCallQueueName(number),
          statusLabel: (0, _i18n.t)('notSetUpForTexting')
        });
      })));
      return senderNumbers;
    }
  }, {
    key: "_getCallQueue",
    value: function _getCallQueue(number) {
      var _this$_callQueues;
      var extension = number.extension;
      if ((extension === null || extension === void 0 ? void 0 : extension.type) !== 'Department' || !extension.id) {
        return undefined;
      }
      return (_this$_callQueues = this._callQueues) === null || _this$_callQueues === void 0 ? void 0 : _this$_callQueues.getQueue(String(extension.id));
    }
  }, {
    key: "_getCallQueueName",
    value: function _getCallQueueName(number) {
      var _this$_getCallQueue;
      return (_this$_getCallQueue = this._getCallQueue(number)) === null || _this$_getCallQueue === void 0 ? void 0 : _this$_getCallQueue.name;
    }
  }, {
    key: "handleAddSmsConsentClick",
    value: function () {
      var _handleAddSmsConsentClick = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _this$_smsConsentDial;
        var toNumber, from;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              toNumber = this._composeText.requiredOptInToNumbers[0];
              this.logger.info('Opening add consent dialog for number', toNumber);
              from = this._composeText.senderNumber;
              if (!(!from || !(toNumber !== null && toNumber !== void 0 && toNumber.phoneNumber))) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              (_this$_smsConsentDial = this._smsConsentDialogView) === null || _this$_smsConsentDial === void 0 ? void 0 : _this$_smsConsentDial.openAddConsentDialog({
                numbers: {
                  from: from,
                  to: toNumber.phoneNumber
                },
                consentEntry: 'Text input box'
              });
            case 2:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function handleAddSmsConsentClick() {
        return _handleAddSmsConsentClick.apply(this, arguments);
      }
      return handleAddSmsConsentClick;
    }()
  }, {
    key: "getUIFunctions",
    value: function getUIFunctions(_) {
      var _this3 = this;
      return {
        send: function () {
          var _send = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(text, attachments) {
            var _this3$_composeTextVi, _responses$, _responses$$conversat, _typingToNumber$trim, _this3$_composeTextVi2, toNumbers, typingToNumber, trimmedTypingToNumber, effectiveToNumbers, _send2, responses, isSmsResponses, res, isPager, isQueue, _res$, _res$$conversation, conversationId, _this3$_smsConversati, _this3$_smsConversati2, _this3$_smsConversati3, _this3$_smsConversati4, logTaskPromise, _res$2, _res, threadId, _t;
            return _regenerator().w(function (_context2) {
              while (1) switch (_context2.p = _context2.n) {
                case 0:
                  _context2.p = 0;
                  if (!((_this3$_composeTextVi = _this3._composeTextViewOptions) !== null && _this3$_composeTextVi !== void 0 && _this3$_composeTextVi.onDncVerify)) {
                    _context2.n = 2;
                    break;
                  }
                  toNumbers = _this3._composeText.toNumbers;
                  typingToNumber = _this3._composeText.typingToNumber;
                  trimmedTypingToNumber = typingToNumber === null || typingToNumber === void 0 ? void 0 : (_typingToNumber$trim = typingToNumber.trim) === null || _typingToNumber$trim === void 0 ? void 0 : _typingToNumber$trim.call(typingToNumber);
                  effectiveToNumbers = trimmedTypingToNumber ? [].concat(_toConsumableArray(toNumbers), [{
                    phoneNumber: trimmedTypingToNumber,
                    freeSolo: true
                  }]) : toNumbers;
                  _context2.n = 1;
                  return (_this3$_composeTextVi2 = _this3._composeTextViewOptions) === null || _this3$_composeTextVi2 === void 0 ? void 0 : _this3$_composeTextVi2.onDncVerify(effectiveToNumbers);
                case 1:
                  _send2 = _context2.v;
                  if (_send2) {
                    _context2.n = 2;
                    break;
                  }
                  return _context2.a(2);
                case 2:
                  _context2.n = 3;
                  return _this3._composeText.send(text, attachments);
                case 3:
                  responses = _context2.v;
                  if (!(!responses || responses.length === 0)) {
                    _context2.n = 4;
                    break;
                  }
                  return _context2.a(2);
                case 4:
                  isSmsResponses = !!(responses[0] && (_responses$ = responses[0]) !== null && _responses$ !== void 0 && (_responses$$conversat = _responses$.conversation) !== null && _responses$$conversat !== void 0 && _responses$$conversat.id);
                  if (!isSmsResponses) {
                    _context2.n = 10;
                    break;
                  }
                  // when be queue message should push into queueMessageStore instead
                  res = responses;
                  isPager = res[0].type === 'Pager';
                  isQueue = _this3.preInsertNewMessage(res, isPager);
                  if (!(res.length === 1)) {
                    _context2.n = 8;
                    break;
                  }
                  conversationId = (_res$ = res[0]) === null || _res$ === void 0 ? void 0 : (_res$$conversation = _res$.conversation) === null || _res$$conversation === void 0 ? void 0 : _res$$conversation.id;
                  if (!isQueue) {
                    _context2.n = 5;
                    break;
                  }
                  _this3.logger.log('Queue message sent, still not support check DNC status or auto-log');
                  _context2.n = 7;
                  break;
                case 5:
                  _this3.logger.log('Personal message sent, Checking DNC status and auto-log after send');
                  _context2.n = 6;
                  return (_this3$_smsConversati = _this3._smsConversationsOptions) === null || _this3$_smsConversati === void 0 ? void 0 : (_this3$_smsConversati2 = _this3$_smsConversati.checkDncStatusOfConversation) === null || _this3$_smsConversati2 === void 0 ? void 0 : _this3$_smsConversati2.call(_this3$_smsConversati, conversationId);
                case 6:
                  // Log conversation in background so navigation is not blocked
                  logTaskPromise = (_this3$_smsConversati3 = _this3._smsConversationsOptions) === null || _this3$_smsConversati3 === void 0 ? void 0 : (_this3$_smsConversati4 = _this3$_smsConversati3.autoLogTaskIfEnabled) === null || _this3$_smsConversati4 === void 0 ? void 0 : _this3$_smsConversati4.call(_this3$_smsConversati3, conversationId);
                  if (logTaskPromise) {
                    void logTaskPromise["catch"](function (error) {
                      var _this3$logger, _this3$logger$error;
                      (_this3$logger = _this3.logger) === null || _this3$logger === void 0 ? void 0 : (_this3$logger$error = _this3$logger.error) === null || _this3$logger$error === void 0 ? void 0 : _this3$logger$error.call(_this3$logger, 'Auto-log after send failed', error);
                    });
                  }
                case 7:
                  _this3._syncTabView.setActive(_views.SyncTabId.CONVERSATIONS, isQueue ? _views.ConversationsSyncTabId.QUEUE : _views.ConversationsSyncTabId.PERSONAL, {
                    currentPath: "/conversations/".concat(conversationId)
                  });
                  _context2.n = 9;
                  break;
                case 8:
                  _this3._router.push('/messages', _defineProperty({}, _views.SyncTabId.CONVERSATIONS, _views.ConversationsSyncTabId.PERSONAL));
                case 9:
                  _this3._conversations.relateCorrespondentEntity(res);
                  _context2.n = 11;
                  break;
                case 10:
                  _res = responses;
                  threadId = (_res$2 = _res[0]) === null || _res$2 === void 0 ? void 0 : _res$2.threadId;
                  if (_res.length === 1 && threadId) {
                    _this3._syncTabView.setActive(_views.SyncTabId.CONVERSATIONS, _views.ConversationsSyncTabId.SHARED, {
                      currentPath: "/conversations/".concat(threadId)
                    });
                  } else {
                    _this3._router.push('/messages', _defineProperty({}, _views.SyncTabId.CONVERSATIONS, _views.ConversationsSyncTabId.SHARED));
                  }
                case 11:
                  _this3._composeText.clean();
                  return _context2.a(2);
                case 12:
                  _context2.p = 12;
                  _t = _context2.v;
                  _this3.logger.error('Send message failed', _t);
                case 13:
                  return _context2.a(2);
              }
            }, _callee2, null, [[0, 12]]);
          }));
          function send(_x, _x2) {
            return _send.apply(this, arguments);
          }
          return send;
        }(),
        updateSenderNumber: function updateSenderNumber(phoneNumber) {
          return _this3._composeText.updateSenderNumber(phoneNumber);
        },
        updateTypingToNumber: function updateTypingToNumber(toNumber) {
          _this3._composeText.updateTypingToNumber(toNumber);
        },
        cleanTypingToNumber: function cleanTypingToNumber() {
          return _this3._composeText.cleanTypingToNumber();
        },
        addToNumbers: function addToNumbers(toNumbers) {
          return _this3._composeText.addToNumbers(toNumbers);
        },
        removeToNumber: function removeToNumber(toNumber) {
          return _this3._composeText.removeToNumber(toNumber);
        },
        onAddSmsConsentClick: function onAddSmsConsentClick() {
          return _this3.handleAddSmsConsentClick();
        },
        updateMessageText: function updateMessageText() {
          var _this3$_composeText;
          return (_this3$_composeText = _this3._composeText).updateMessageText.apply(_this3$_composeText, arguments);
        },
        addAttachments: function addAttachments() {
          var _this3$_composeText2;
          return (_this3$_composeText2 = _this3._composeText).addAttachments.apply(_this3$_composeText2, arguments);
        },
        removeAttachment: function removeAttachment() {
          var _this3$_composeText3;
          return (_this3$_composeText3 = _this3._composeText).removeAttachment.apply(_this3$_composeText3, arguments);
        },
        onCreateGroupTextOptionChanged: function onCreateGroupTextOptionChanged(checked) {
          _this3._composeText.setCreateGroupChecked(checked);
        },
        onBackClick: function onBackClick() {
          var _this3$_router$router;
          var locationState = (_this3$_router$router = _this3._router.router) === null || _this3$_router$router === void 0 ? void 0 : _this3$_router$router.location.state;
          var backPath = locationState === null || locationState === void 0 ? void 0 : locationState[COMPOSE_TEXT_BACK_PATH];
          _this3._router.push(typeof backPath === 'string' ? backPath : '/messages');
        }
      };
    }
  }, {
    key: "preInsertNewMessage",
    value: function preInsertNewMessage(res, isPager) {
      var _this4 = this;
      if (this._queueMessageStore._hasPermission && !isPager) {
        var sender = this.senderNumbers.find(function (n) {
          return n.phoneNumber === _this4._composeText.senderNumber;
        });
        var queue = sender && this._getCallQueue(sender);
        if (queue) {
          this._queueMessageStore.pushMessages(res);
          return Boolean(queue);
        }
      }
      this._messageStore.pushMessages(res);
    }
  }, {
    key: "component",
    value: function component(props) {
      var _this5 = this,
        _this$_composeTextVie,
        _this$_contactSearchV;
      var _useRef = (0, _react.useRef)(this.getUIFunctions(props)),
        uiFunctions = _useRef.current;
      var inputRef = (0, _react.useRef)(null);
      var _props = (0, _nextCore.useConnector)(function () {
        var uiProps = _this5.getUIProps(props);
        return _objectSpread(_objectSpread({}, props), uiProps);
      });
      var Component = ((_this$_composeTextVie = this._composeTextViewOptions) === null || _this$_composeTextVie === void 0 ? void 0 : _this$_composeTextVie.component) || _ComposeTextPanel.ComposeTextPanel;
      var toNumbers = _props.toNumbers;
      var senderNumber = _props.senderNumber;
      var toNumbersKey = (0, _react.useMemo)(function () {
        return toNumbers.map(function (_ref) {
          var phoneNumber = _ref.phoneNumber;
          return phoneNumber;
        }).join('\n');
      }, [toNumbers]);
      (0, _react.useEffect)(function () {
        var _this5$_portManager, _this5$_portManager2;
        if (!((_this5$_portManager = _this5._portManager) !== null && _this5$_portManager !== void 0 && _this5$_portManager.shared) || (_this5$_portManager2 = _this5._portManager) !== null && _this5$_portManager2 !== void 0 && _this5$_portManager2.isMainTab) {
          _this5._composeText.loadRecipientConsentData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [senderNumber, toNumbersKey]);
      var contactMapping = (0, _nextCore.useConnector)(function () {
        var _this5$_contactMatche;
        return (_this5$_contactMatche = _this5._contactMatcher) === null || _this5$_contactMatche === void 0 ? void 0 : _this5$_contactMatche.dataMapping;
      });

      // find a way to add data to dataMapping
      var conversation = (0, _react.useMemo)(function () {
        return _this5._smsOptOutView ? _objectSpread(_objectSpread({}, _services4.COMPOSE_TEXT_CONVERSATION), {}, {
          correspondentMatchesList: toNumbers.map(function (toNumber) {
            // normalize number to ensure the number is matcher mapping with same key
            var normalizedNumber = _this5._numberFormatter.normalizeNumber(toNumber.phoneNumber);
            return (contactMapping === null || contactMapping === void 0 ? void 0 : contactMapping[normalizedNumber]) || [];
          })
        }) : undefined;
      }, [contactMapping, toNumbers]);
      return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, _props, uiFunctions, {
        ContactSearch: (_this$_contactSearchV = this._contactSearchView) === null || _this$_contactSearchV === void 0 ? void 0 : _this$_contactSearchV.component,
        inputRef: inputRef,
        toolbar: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(this._smsTemplateView.component, {
          targetInputRef: inputRef
        }), conversation && this._smsOptOutView && /*#__PURE__*/_react["default"].createElement(this._smsOptOutView.component, {
          conversation: conversation
        })),
        endAdornment: conversation && this._smsOptOutView ? /*#__PURE__*/_react["default"].createElement(this._smsOptOutView.Chip, {
          conversation: conversation
        }) : undefined
      }));
    }
  }]);
}(_nextCore.RcViewModule), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_contactSearchView", [_dec1, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, "senderNumbers", [_nextCore.computed, _dec11, _dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "senderNumbers"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "handleAddSmsConsentClick", [_dec13, _dec14, _dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "handleAddSmsConsentClick"), _class2.prototype), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
//# sourceMappingURL=ComposeText.view.js.map

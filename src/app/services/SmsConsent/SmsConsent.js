"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.index-of.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.reverse.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmsConsent = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.find.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.array.some.js");
require("core-js/modules/es.map.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _subscriptionFilters = require("@ringcentral-integration/commons/enums/subscriptionFilters");
var _services = require("@ringcentral-integration/micro-auth/src/app/services");
var _nextCore = require("@ringcentral-integration/next-core");
var _rxjs = require("rxjs");
var _SmsConsent2 = require("./SmsConsent.helper");
var _SmsConsent3 = require("./SmsConsent.interface");
var _excluded = ["from", "to", "perPage"];
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec0, _dec1, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _class, _class2, _descriptor, _descriptor2, _descriptor3;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
var smsConsentChangeEventRegExp = /\/restapi\/v2\/accounts\/.*\/sms\/consents$/;
var DEFAULT_CONSENT_RECORDS_PER_PAGE = 20;
var SmsConsent = exports.SmsConsent = (_dec = (0, _nextCore.injectable)({
  name: 'SmsConsent'
}), _dec2 = function _dec2(target, key) {
  return (0, _nextCore.optional)('Subscription')(target, undefined, 5);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _services.Auth === "undefined" ? Object : _services.Auth, typeof _services.Client === "undefined" ? Object : _services.Client, typeof _services.AppFeatures === "undefined" ? Object : _services.AppFeatures, typeof _services.ExtensionPhoneNumber === "undefined" ? Object : _services.ExtensionPhoneNumber, typeof _services.NumberFormatter === "undefined" ? Object : _services.NumberFormatter, typeof Subscription === "undefined" ? Object : Subscription]), _dec5 = Reflect.metadata("design:type", typeof Record === "undefined" ? Object : Record), _dec6 = Reflect.metadata("design:type", typeof Record === "undefined" ? Object : Record), _dec7 = Reflect.metadata("design:type", typeof SearchSmsConsentRecordsResponse === "undefined" ? Object : SearchSmsConsentRecordsResponse), _dec8 = Reflect.metadata("design:type", Function), _dec9 = Reflect.metadata("design:paramtypes", []), _dec0 = Reflect.metadata("design:type", Function), _dec1 = Reflect.metadata("design:paramtypes", []), _dec10 = Reflect.metadata("design:type", Function), _dec11 = Reflect.metadata("design:paramtypes", []), _dec12 = (0, _nextCore.delegate)('server'), _dec13 = Reflect.metadata("design:type", Function), _dec14 = Reflect.metadata("design:paramtypes", [String]), _dec15 = (0, _nextCore.delegate)('server'), _dec16 = Reflect.metadata("design:type", Function), _dec17 = Reflect.metadata("design:paramtypes", [typeof SmsConsentConversation === "undefined" ? Object : SmsConsentConversation]), _dec18 = (0, _nextCore.delegate)('server'), _dec19 = Reflect.metadata("design:type", Function), _dec20 = Reflect.metadata("design:paramtypes", [typeof PhoneNumberPair === "undefined" ? Object : PhoneNumberPair]), _dec21 = (0, _nextCore.delegate)('server'), _dec22 = Reflect.metadata("design:type", Function), _dec23 = Reflect.metadata("design:paramtypes", [Array]), _dec24 = (0, _nextCore.delegate)('server'), _dec25 = Reflect.metadata("design:type", Function), _dec26 = Reflect.metadata("design:paramtypes", [Array]), _dec27 = (0, _nextCore.delegate)('server'), _dec28 = Reflect.metadata("design:type", Function), _dec29 = Reflect.metadata("design:paramtypes", [String]), _dec30 = (0, _nextCore.delegate)('server'), _dec31 = Reflect.metadata("design:type", Function), _dec32 = Reflect.metadata("design:paramtypes", [String]), _dec33 = Reflect.metadata("design:type", Function), _dec34 = Reflect.metadata("design:paramtypes", []), _dec35 = (0, _nextCore.delegate)('server'), _dec36 = Reflect.metadata("design:type", Function), _dec37 = Reflect.metadata("design:paramtypes", [void 0]), _dec38 = (0, _nextCore.delegate)('server'), _dec39 = Reflect.metadata("design:type", Function), _dec40 = Reflect.metadata("design:paramtypes", [typeof SaveSmsConsentRecordOptions === "undefined" ? Object : SaveSmsConsentRecordOptions]), _dec41 = (0, _nextCore.delegate)('server'), _dec42 = Reflect.metadata("design:type", Function), _dec43 = Reflect.metadata("design:paramtypes", []), _dec44 = Reflect.metadata("design:type", Function), _dec45 = Reflect.metadata("design:paramtypes", [String, typeof SmsConsentState === "undefined" ? Object : SmsConsentState]), _dec46 = Reflect.metadata("design:type", Function), _dec47 = Reflect.metadata("design:paramtypes", [String, typeof SmsConsentState === "undefined" ? Object : SmsConsentState]), _dec48 = Reflect.metadata("design:type", Function), _dec49 = Reflect.metadata("design:paramtypes", [typeof SearchSmsConsentRecordsResponse === "undefined" ? Object : SearchSmsConsentRecordsResponse, Boolean]), _dec50 = Reflect.metadata("design:type", Function), _dec51 = Reflect.metadata("design:paramtypes", []), _dec52 = Reflect.metadata("design:type", Function), _dec53 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = /*#__PURE__*/function (_RcModule) {
  function SmsConsent(_auth, _client, _appFeatures, _extensionPhoneNumber, _numberFormatter, _subscription) {
    var _this$_subscription;
    var _this;
    _classCallCheck(this, SmsConsent);
    _this = _callSuper(this, SmsConsent);
    _this._auth = _auth;
    _this._client = _client;
    _this._appFeatures = _appFeatures;
    _this._extensionPhoneNumber = _extensionPhoneNumber;
    _this._numberFormatter = _numberFormatter;
    _this._subscription = _subscription;
    _initializerDefineProperty(_this, "effectiveConsentStateMap", _descriptor, _this);
    _initializerDefineProperty(_this, "smsConfigurationStateMap", _descriptor2, _this);
    _initializerDefineProperty(_this, "consentsData", _descriptor3, _this);
    (_this$_subscription = _this._subscription) === null || _this$_subscription === void 0 ? void 0 : _this$_subscription.register(_this, {
      filters: [_subscriptionFilters.subscriptionFilters.smsConsents]
    });
    return _this;
  }
  _inherits(SmsConsent, _RcModule);
  return _createClass(SmsConsent, [{
    key: "onInitOnce",
    value: function onInitOnce() {
      var _this$_subscription2,
        _this2 = this;
      (_this$_subscription2 = this._subscription) === null || _this$_subscription2 === void 0 ? void 0 : _this$_subscription2.fromMessage$(smsConsentChangeEventRegExp).pipe((0, _rxjs.tap)(/*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event) {
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                _context.n = 1;
                return _this2._handleSmsConsentChangeEvent(event);
              case 1:
                return _context.a(2);
            }
          }, _callee);
        }));
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()), _nextCore.takeUntilAppDestroy).subscribe();
    }
  }, {
    key: "controlLevel",
    get: function get() {
      if (this._appFeatures.hasConsentManagementPermission) {
        return _SmsConsent3.ConsentControlLevel.Edit;
      }
      if (this._appFeatures.hasReadConsentsPermission) {
        return _SmsConsent3.ConsentControlLevel.View;
      }
      return _SmsConsent3.ConsentControlLevel.None;
    }
  }, {
    key: "canReadConsent",
    get: function get() {
      return this._auth.loggedIn && this.controlLevel !== _SmsConsent3.ConsentControlLevel.None;
    }
  }, {
    key: "canAddConsent",
    get: function get() {
      return this._auth.loggedIn && this.controlLevel === _SmsConsent3.ConsentControlLevel.Edit;
    }
  }, {
    key: "getEffectiveConsent",
    value: function getEffectiveConsent(numbers) {
      var key = this._getEffectiveConsentKey(numbers);
      if (key) {
        var _this$effectiveConsen;
        return (_this$effectiveConsen = this.effectiveConsentStateMap[key]) === null || _this$effectiveConsen === void 0 ? void 0 : _this$effectiveConsen.data;
      }
    }
  }, {
    key: "getEffectiveConsentState",
    value: function getEffectiveConsentState(numbers) {
      var key = this._getEffectiveConsentKey(numbers);
      if (key) {
        return this.effectiveConsentStateMap[key];
      }
    }
  }, {
    key: "getSmsConfiguration",
    value: function getSmsConfiguration(from) {
      var key = this._getSenderKey(from);
      if (key) {
        var _this$smsConfiguratio;
        return (_this$smsConfiguratio = this.smsConfigurationStateMap[key]) === null || _this$smsConfiguratio === void 0 ? void 0 : _this$smsConfiguratio.data;
      }
    }
  }, {
    key: "getConsentStatus",
    value: function getConsentStatus(numbers) {
      var _this$getEffectiveCon;
      var consents = (_this$getEffectiveCon = this.getEffectiveConsent(numbers)) === null || _this$getEffectiveCon === void 0 ? void 0 : _this$getEffectiveCon.explicitConsents;

      // fail-open if no consent data available
      if (!consents) {
        return {};
      }
      return (0, _SmsConsent2.getSmsConsentRecipientStatus)({
        consents: consents,
        configuration: this.getSmsConfiguration(numbers.from)
      });
    }
  }, {
    key: "ensureSmsConfigurationState",
    value: function () {
      var _ensureSmsConfigurationState = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(from) {
        var key, config;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              key = this._getSenderKey(from);
              if (!key) {
                _context2.n = 2;
                break;
              }
              config = this.smsConfigurationStateMap[key];
              if (!((config === null || config === void 0 ? void 0 : config.status) !== 'success')) {
                _context2.n = 1;
                break;
              }
              _context2.n = 1;
              return this.loadSmsConfigurationForSender(from);
            case 1:
              return _context2.a(2, this.smsConfigurationStateMap[key]);
            case 2:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function ensureSmsConfigurationState(_x2) {
        return _ensureSmsConfigurationState.apply(this, arguments);
      }
      return ensureSmsConfigurationState;
    }()
  }, {
    key: "getConsentStatusForConversation",
    value: function getConsentStatusForConversation(conversation) {
      var numbers = (0, _SmsConsent2.getConversationNumbers)(conversation);
      if (!numbers) {
        return {};
      }
      return this.getConsentStatus(numbers);
    }
  }, {
    key: "loadConversationConsentData",
    value: function () {
      var _loadConversationConsentData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(conversation) {
        var numbers;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (this.canReadConsent) {
                _context3.n = 1;
                break;
              }
              return _context3.a(2);
            case 1:
              numbers = (0, _SmsConsent2.getConversationNumbers)(conversation);
              if (numbers) {
                _context3.n = 2;
                break;
              }
              return _context3.a(2);
            case 2:
              _context3.n = 3;
              return Promise.all([this.loadEffectiveConsentForNumbers(numbers), this.loadSmsConfigurationForSender(numbers.from)]);
            case 3:
              return _context3.a(2);
          }
        }, _callee3, this);
      }));
      function loadConversationConsentData(_x3) {
        return _loadConversationConsentData.apply(this, arguments);
      }
      return loadConversationConsentData;
    }()
  }, {
    key: "loadEffectiveConsentForNumbers",
    value: function () {
      var _loadEffectiveConsentForNumbers = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(numbers) {
        var key, data, _t;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              key = this._getEffectiveConsentKey(numbers);
              if (!(!this.canReadConsent || !key)) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2);
            case 1:
              this._setEffectiveConsentState(key, {
                status: 'fetching',
                data: this.getEffectiveConsent(numbers)
              });
              _context4.p = 2;
              _context4.n = 3;
              return this.fetchEffectiveConsent(numbers);
            case 3:
              data = _context4.v;
              this._setEffectiveConsentState(key, {
                status: 'success',
                data: data
              });
              _context4.n = 5;
              break;
            case 4:
              _context4.p = 4;
              _t = _context4.v;
              this.logger.error('load sms effective consent error', _t);
              this._setEffectiveConsentState(key, {
                status: 'error',
                error: _t instanceof Error ? _t.message : String(_t)
              });
            case 5:
              return _context4.a(2);
          }
        }, _callee4, this, [[2, 4]]);
      }));
      function loadEffectiveConsentForNumbers(_x4) {
        return _loadEffectiveConsentForNumbers.apply(this, arguments);
      }
      return loadEffectiveConsentForNumbers;
    }()
  }, {
    key: "loadEffectiveConsentForNumberPairs",
    value: function () {
      var _loadEffectiveConsentForNumberPairs = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(numberPairs) {
        var _this3 = this;
        var uniqueNumberPairs;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              uniqueNumberPairs = new Map();
              numberPairs.forEach(function (numbers) {
                var key = _this3._getEffectiveConsentKey(numbers);
                if (key && !uniqueNumberPairs.has(key)) {
                  uniqueNumberPairs.set(key, numbers);
                }
              });
              _context5.n = 1;
              return Promise.all(_toConsumableArray(uniqueNumberPairs.values()).map(function (numbers) {
                return _this3.loadEffectiveConsentForNumbers(numbers);
              }));
            case 1:
              return _context5.a(2);
          }
        }, _callee5);
      }));
      function loadEffectiveConsentForNumberPairs(_x5) {
        return _loadEffectiveConsentForNumberPairs.apply(this, arguments);
      }
      return loadEffectiveConsentForNumberPairs;
    }()
  }, {
    key: "ensureEffectiveConsentForNumberPairs",
    value: function () {
      var _ensureEffectiveConsentForNumberPairs = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(numberPairs) {
        var _this4 = this;
        var numberPairsToLoad;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              numberPairsToLoad = numberPairs.filter(function (numbers) {
                var state = _this4.getEffectiveConsentState(numbers);
                return (state === null || state === void 0 ? void 0 : state.status) !== 'success';
              });
              _context6.n = 1;
              return this.loadEffectiveConsentForNumberPairs(numberPairsToLoad);
            case 1:
              return _context6.a(2);
          }
        }, _callee6, this);
      }));
      function ensureEffectiveConsentForNumberPairs(_x6) {
        return _ensureEffectiveConsentForNumberPairs.apply(this, arguments);
      }
      return ensureEffectiveConsentForNumberPairs;
    }()
  }, {
    key: "_handleSmsConsentChangeEvent",
    value: function () {
      var _handleSmsConsentChangeEvent2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var _ref2,
          _ref2$records,
          records,
          numberPairs,
          _args7 = arguments;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _ref2 = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {}, _ref2$records = _ref2.records, records = _ref2$records === void 0 ? [] : _ref2$records;
              numberPairs = this._getEffectiveConsentNumberPairsToReload(records);
              if (numberPairs.length) {
                _context7.n = 1;
                break;
              }
              return _context7.a(2);
            case 1:
              _context7.n = 2;
              return this.loadEffectiveConsentForNumberPairs(numberPairs);
            case 2:
              return _context7.a(2);
          }
        }, _callee7, this);
      }));
      function _handleSmsConsentChangeEvent() {
        return _handleSmsConsentChangeEvent2.apply(this, arguments);
      }
      return _handleSmsConsentChangeEvent;
    }()
  }, {
    key: "loadSmsConfigurationForSender",
    value: function () {
      var _loadSmsConfigurationForSender = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(from) {
        var senderKey, data, _t2;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              senderKey = this._getSenderKey(from);
              if (!(!this.canReadConsent || !senderKey)) {
                _context8.n = 1;
                break;
              }
              return _context8.a(2);
            case 1:
              this._setSmsConfigurationState(senderKey, {
                status: 'fetching',
                data: this.getSmsConfiguration(from)
              });
              _context8.p = 2;
              _context8.n = 3;
              return this.fetchSmsConfigurationForSender(from);
            case 3:
              data = _context8.v;
              this._setSmsConfigurationState(senderKey, {
                status: 'success',
                data: data
              });
              _context8.n = 5;
              break;
            case 4:
              _context8.p = 4;
              _t2 = _context8.v;
              this.logger.error('load sms configuration error', _t2);
              this._setSmsConfigurationState(senderKey, {
                status: 'error',
                error: _t2 instanceof Error ? _t2.message : String(_t2)
              });
            case 5:
              return _context8.a(2);
          }
        }, _callee8, this, [[2, 4]]);
      }));
      function loadSmsConfigurationForSender(_x7) {
        return _loadSmsConfigurationForSender.apply(this, arguments);
      }
      return loadSmsConfigurationForSender;
    }()
  }, {
    key: "fetchEffectiveConsent",
    value: function () {
      var _fetchEffectiveConsent = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(_ref3) {
        var from, to, response;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              from = _ref3.from, to = _ref3.to;
              _context9.n = 1;
              return this._client.service.platform().get('/restapi/v2/accounts/~/sms/consents/effective-consent', {
                from: this._normalizeNumber(from),
                to: this._normalizeNumber(to)
              });
            case 1:
              response = _context9.v;
              return _context9.a(2, response.json());
          }
        }, _callee9, this);
      }));
      function fetchEffectiveConsent(_x8) {
        return _fetchEffectiveConsent.apply(this, arguments);
      }
      return fetchEffectiveConsent;
    }()
  }, {
    key: "fetchSmsConfigurationForSender",
    value: function () {
      var _fetchSmsConfigurationForSender = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(from) {
        var phoneNumberId, response;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              phoneNumberId = this._getSenderPhoneNumberId(from);
              if (phoneNumberId) {
                _context0.n = 1;
                break;
              }
              throw new Error('SMS sender phone number id is unavailable.');
            case 1:
              _context0.n = 2;
              return this._client.service.platform().get("/restapi/v1.0/account/~/extension/~/phone-number/".concat(encodeURIComponent(String(phoneNumberId)), "/sms-configuration"));
            case 2:
              response = _context0.v;
              return _context0.a(2, response.json());
          }
        }, _callee0, this);
      }));
      function fetchSmsConfigurationForSender(_x9) {
        return _fetchSmsConfigurationForSender.apply(this, arguments);
      }
      return fetchSmsConfigurationForSender;
    }()
  }, {
    key: "registeredSmsNumbers",
    get: function get() {
      return this._extensionPhoneNumber.smsSenderNumbers.map(function (_ref4) {
        var phoneNumber = _ref4.phoneNumber;
        return phoneNumber;
      }).filter(function (phoneNumber) {
        return !!phoneNumber;
      });
    }
  }, {
    key: "normalizeNumber",
    value: function normalizeNumber() {
      var phoneNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return this._normalizeNumber(phoneNumber);
    }
  }, {
    key: "formatNumber",
    value: function formatNumber() {
      var phoneNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return this._numberFormatter.formatNumber(phoneNumber) || phoneNumber;
    }
  }, {
    key: "searchConsentRecords$",
    value: function searchConsentRecords$() {
      var _this5 = this;
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref5$append = _ref5.append,
        append = _ref5$append === void 0 ? false : _ref5$append;
      if (!this.canReadConsent) {
        return (0, _rxjs.of)(this.consentsData);
      }
      return (0, _rxjs.defer)(function () {
        return _this5.fetchConsentRecords(params);
      }).pipe((0, _rxjs.tap)(function (data) {
        _this5._setConsentsData(data, append);
      }));
    }
  }, {
    key: "fetchConsentRecords",
    value: function () {
      var _fetchConsentRecords = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
        var _this6 = this;
        var _ref6,
          from,
          to,
          _ref6$perPage,
          perPage,
          params,
          request,
          response,
          _args1 = arguments;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              _ref6 = _args1.length > 0 && _args1[0] !== undefined ? _args1[0] : {};
              from = _ref6.from, to = _ref6.to, _ref6$perPage = _ref6.perPage, perPage = _ref6$perPage === void 0 ? DEFAULT_CONSENT_RECORDS_PER_PAGE : _ref6$perPage, params = _objectWithoutProperties(_ref6, _excluded);
              request = _objectSpread(_objectSpread(_objectSpread({}, params), {}, {
                perPage: perPage
              }, from !== null && from !== void 0 && from.length ? {
                from: from.map(function (phoneNumber) {
                  return _this6._normalizeNumber(phoneNumber);
                })
              } : {}), to !== null && to !== void 0 && to.length ? {
                to: to.map(function (phoneNumber) {
                  return _this6._normalizeNumber(phoneNumber);
                })
              } : {});
              _context1.n = 1;
              return this._client.service.platform().post('/restapi/v2/accounts/~/sms/consents/search', request);
            case 1:
              response = _context1.v;
              return _context1.a(2, response.json());
          }
        }, _callee1, this);
      }));
      function fetchConsentRecords() {
        return _fetchConsentRecords.apply(this, arguments);
      }
      return fetchConsentRecords;
    }()
  }, {
    key: "saveConsentRecord",
    value: function () {
      var _saveConsentRecord = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(_ref7) {
        var _data$failedRecords;
        var from, to, optStatus, coverage, campaignType, notes, record, response, data, _data$failedRecords$, _data$failedRecords$$, error;
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.n) {
            case 0:
              from = _ref7.from, to = _ref7.to, optStatus = _ref7.optStatus, coverage = _ref7.coverage, campaignType = _ref7.campaignType, notes = _ref7.notes;
              record = _objectSpread(_objectSpread(_objectSpread({}, coverage === _SmsConsent3.SmsConsentCoverage.PhoneNumber ? {
                from: this._normalizeNumber(from)
              } : {}), {}, {
                to: this._normalizeNumber(to),
                optStatus: optStatus,
                coverage: coverage
              }, coverage === _SmsConsent3.SmsConsentCoverage.CampaignType && campaignType ? {
                campaignType: campaignType
              } : {}), {}, {
                source: 'Api',
                notes: notes
              });
              _context10.n = 1;
              return this._client.service.platform().patch('/restapi/v2/accounts/~/sms/consents', {
                records: [record]
              });
            case 1:
              response = _context10.v;
              _context10.n = 2;
              return response.json();
            case 2:
              data = _context10.v;
              if (!((_data$failedRecords = data.failedRecords) !== null && _data$failedRecords !== void 0 && _data$failedRecords.length)) {
                _context10.n = 3;
                break;
              }
              error = ((_data$failedRecords$ = data.failedRecords[0]) === null || _data$failedRecords$ === void 0 ? void 0 : (_data$failedRecords$$ = _data$failedRecords$.error) === null || _data$failedRecords$$ === void 0 ? void 0 : _data$failedRecords$$.message) || 'Save SMS consent failed.';
              this.logger.error('save sms consent error', error);
              throw new Error(error);
            case 3:
              return _context10.a(2, data);
          }
        }, _callee10, this);
      }));
      function saveConsentRecord(_x0) {
        return _saveConsentRecord.apply(this, arguments);
      }
      return saveConsentRecord;
    }()
  }, {
    key: "resetConsentsData",
    value: function () {
      var _resetConsentsData2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
        return _regenerator().w(function (_context11) {
          while (1) switch (_context11.n) {
            case 0:
              this._resetConsentsData();
            case 1:
              return _context11.a(2);
          }
        }, _callee11, this);
      }));
      function resetConsentsData() {
        return _resetConsentsData2.apply(this, arguments);
      }
      return resetConsentsData;
    }()
  }, {
    key: "_setEffectiveConsentState",
    value: function _setEffectiveConsentState(stateKey, state) {
      this.effectiveConsentStateMap[stateKey] = state;
    }
  }, {
    key: "_setSmsConfigurationState",
    value: function _setSmsConfigurationState(senderKey, state) {
      this.smsConfigurationStateMap[senderKey] = state;
    }
  }, {
    key: "_setConsentsData",
    value: function _setConsentsData(data, append) {
      this.consentsData = append && this.consentsData ? _objectSpread(_objectSpread({}, data), {}, {
        records: [].concat(_toConsumableArray(this.consentsData.records), _toConsumableArray(data.records))
      }) : data;
    }
  }, {
    key: "_resetConsentsData",
    value: function _resetConsentsData() {
      this.consentsData = null;
    }
  }, {
    key: "_reset",
    value: function _reset() {
      this.effectiveConsentStateMap = {};
      this.smsConfigurationStateMap = {};
      this.consentsData = null;
    }
  }, {
    key: "onReset",
    value: function onReset() {
      this._reset();
    }
  }, {
    key: "_normalizeNumber",
    value: function _normalizeNumber() {
      var phoneNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return this._numberFormatter.normalizeNumber(phoneNumber, true);
    }
  }, {
    key: "_getSenderKey",
    value: function _getSenderKey(phoneNumber) {
      return this._normalizeNumber(phoneNumber);
    }
  }, {
    key: "_getEffectiveConsentKey",
    value: function _getEffectiveConsentKey(numbers) {
      var from = this._normalizeNumber(numbers === null || numbers === void 0 ? void 0 : numbers.from);
      var to = this._normalizeNumber(numbers === null || numbers === void 0 ? void 0 : numbers.to);
      return from && to ? "".concat(from, "_").concat(to) : '';
    }
  }, {
    key: "_getEffectiveConsentNumberPairsToReload",
    value: function _getEffectiveConsentNumberPairsToReload(records) {
      var _this7 = this;
      return Object.keys(this.effectiveConsentStateMap).reduce(function (acc, key) {
        var numbers = (0, _SmsConsent2.getEffectiveConsentNumbersFromKey)(key);
        if (numbers && records.some(function (_ref8) {
          var from = _ref8.from,
            to = _ref8.to;
          return (!from || from.trim() === '*' || _this7._normalizeNumber(from) === _this7._normalizeNumber(numbers.from)) && _this7._normalizeNumber(to) === _this7._normalizeNumber(numbers.to);
        })) {
          acc.push(numbers);
        }
        return acc;
      }, []);
    }
  }, {
    key: "_getSenderPhoneNumberId",
    value: function _getSenderPhoneNumberId(from) {
      var _this8 = this;
      var senderKey = this._getSenderKey(from);
      var senderNumber = this._extensionPhoneNumber.numbers.find(function (_ref9) {
        var phoneNumber = _ref9.phoneNumber;
        return _this8._getSenderKey(phoneNumber) === senderKey;
      });
      return senderNumber === null || senderNumber === void 0 ? void 0 : senderNumber.id;
    }
  }]);
}(_nextCore.RcModule), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "effectiveConsentStateMap", [_nextCore.state, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "smsConfigurationStateMap", [_nextCore.state, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "consentsData", [_nextCore.state, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _applyDecoratedDescriptor(_class2.prototype, "controlLevel", [_nextCore.computed, _dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "controlLevel"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "canReadConsent", [_nextCore.computed, _dec0, _dec1], Object.getOwnPropertyDescriptor(_class2.prototype, "canReadConsent"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "canAddConsent", [_nextCore.computed, _dec10, _dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "canAddConsent"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "ensureSmsConfigurationState", [_dec12, _dec13, _dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "ensureSmsConfigurationState"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "loadConversationConsentData", [_dec15, _dec16, _dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "loadConversationConsentData"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "loadEffectiveConsentForNumbers", [_dec18, _dec19, _dec20], Object.getOwnPropertyDescriptor(_class2.prototype, "loadEffectiveConsentForNumbers"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "loadEffectiveConsentForNumberPairs", [_dec21, _dec22, _dec23], Object.getOwnPropertyDescriptor(_class2.prototype, "loadEffectiveConsentForNumberPairs"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "ensureEffectiveConsentForNumberPairs", [_dec24, _dec25, _dec26], Object.getOwnPropertyDescriptor(_class2.prototype, "ensureEffectiveConsentForNumberPairs"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "loadSmsConfigurationForSender", [_dec27, _dec28, _dec29], Object.getOwnPropertyDescriptor(_class2.prototype, "loadSmsConfigurationForSender"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fetchSmsConfigurationForSender", [_dec30, _dec31, _dec32], Object.getOwnPropertyDescriptor(_class2.prototype, "fetchSmsConfigurationForSender"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "registeredSmsNumbers", [_nextCore.computed, _dec33, _dec34], Object.getOwnPropertyDescriptor(_class2.prototype, "registeredSmsNumbers"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "fetchConsentRecords", [_dec35, _dec36, _dec37], Object.getOwnPropertyDescriptor(_class2.prototype, "fetchConsentRecords"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "saveConsentRecord", [_dec38, _dec39, _dec40], Object.getOwnPropertyDescriptor(_class2.prototype, "saveConsentRecord"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "resetConsentsData", [_dec41, _dec42, _dec43], Object.getOwnPropertyDescriptor(_class2.prototype, "resetConsentsData"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setEffectiveConsentState", [_nextCore.action, _dec44, _dec45], Object.getOwnPropertyDescriptor(_class2.prototype, "_setEffectiveConsentState"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setSmsConfigurationState", [_nextCore.action, _dec46, _dec47], Object.getOwnPropertyDescriptor(_class2.prototype, "_setSmsConfigurationState"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setConsentsData", [_nextCore.action, _dec48, _dec49], Object.getOwnPropertyDescriptor(_class2.prototype, "_setConsentsData"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_resetConsentsData", [_nextCore.action, _dec50, _dec51], Object.getOwnPropertyDescriptor(_class2.prototype, "_resetConsentsData"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_reset", [_nextCore.action, _dec52, _dec53], Object.getOwnPropertyDescriptor(_class2.prototype, "_reset"), _class2.prototype), _class2)) || _class) || _class) || _class) || _class);
//# sourceMappingURL=SmsConsent.js.map

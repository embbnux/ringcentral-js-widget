"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.reverse.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.reflect.get.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComposeText = exports.COMPOSE_TEXT_CONVERSATION = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.find.js");
require("core-js/modules/es.array.find-index.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.array.some.js");
require("core-js/modules/es.array.splice.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _isBlank = require("@ringcentral-integration/commons/lib/isBlank");
var _services = require("@ringcentral-integration/micro-auth/src/app/services");
var _services2 = require("@ringcentral-integration/micro-contacts/src/app/services");
var _services3 = require("@ringcentral-integration/micro-core/src/app/services");
var _nextCore = require("@ringcentral-integration/next-core");
var _rxjs = require("rxjs");
var _MessageSender = require("../MessageSender");
var _i18n = require("../MessageSender/i18n");
var _SmsConsent = require("../SmsConsent");
var _SmsOptOut = require("../SmsOptOut");
var _i18n2 = require("./i18n");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec0, _dec1, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _dec59, _dec60, _dec61, _dec62, _dec63, _dec64, _dec65, _dec66, _dec67, _dec68, _dec69, _dec70, _dec71, _dec72, _dec73, _dec74, _dec75, _dec76, _dec77, _dec78, _dec79, _dec80, _dec81, _dec82, _dec83, _dec84, _dec85, _dec86, _dec87, _dec88, _dec89, _dec90, _dec91, _dec92, _dec93, _dec94, _dec95, _dec96, _dec97, _dec98, _dec99, _dec100, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
var DEFAULT_MAX_RECIPIENTS = 10;
var COMPOSE_TEXT_CONVERSATION = exports.COMPOSE_TEXT_CONVERSATION = {
  conversationId: 'create'
};
var ComposeText = exports.ComposeText = (_dec = (0, _nextCore.injectable)({
  name: 'ComposeText'
}), _dec2 = function _dec2(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 6);
}, _dec3 = function _dec3(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 7);
}, _dec4 = function _dec4(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 8);
}, _dec5 = function _dec5(target, key) {
  return (0, _nextCore.optional)('ComposeTextOptions')(target, undefined, 9);
}, _dec6 = function _dec6(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 10);
}, _dec7 = function _dec7(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 11);
}, _dec8 = Reflect.metadata("design:type", Function), _dec9 = Reflect.metadata("design:paramtypes", [typeof _services3.Toast === "undefined" ? Object : _services3.Toast, typeof _services.Auth === "undefined" ? Object : _services.Auth, typeof _nextCore.StoragePlugin === "undefined" ? Object : _nextCore.StoragePlugin, typeof _MessageSender.MessageSender === "undefined" ? Object : _MessageSender.MessageSender, typeof _services2.NumberValidate === "undefined" ? Object : _services2.NumberValidate, typeof _services.AppFeatures === "undefined" ? Object : _services.AppFeatures, typeof _services2.ContactMatcher === "undefined" ? Object : _services2.ContactMatcher, typeof _SmsOptOut.SmsOptOut === "undefined" ? Object : _SmsOptOut.SmsOptOut, typeof _services2.ContactSearch === "undefined" ? Object : _services2.ContactSearch, typeof ComposeTextOptions === "undefined" ? Object : ComposeTextOptions, typeof _nextCore.RouterPlugin === "undefined" ? Object : _nextCore.RouterPlugin, typeof _SmsConsent.SmsConsent === "undefined" ? Object : _SmsConsent.SmsConsent]), _dec0 = Reflect.metadata("design:type", Array), _dec1 = Reflect.metadata("design:type", Function), _dec10 = Reflect.metadata("design:paramtypes", []), _dec11 = Reflect.metadata("design:type", Function), _dec12 = Reflect.metadata("design:paramtypes", []), _dec13 = Reflect.metadata("design:type", Function), _dec14 = Reflect.metadata("design:paramtypes", []), _dec15 = (0, _nextCore.delegate)('server'), _dec16 = Reflect.metadata("design:type", Function), _dec17 = Reflect.metadata("design:paramtypes", []), _dec18 = Reflect.metadata("design:type", Function), _dec19 = Reflect.metadata("design:paramtypes", []), _dec20 = Reflect.metadata("design:type", Function), _dec21 = Reflect.metadata("design:paramtypes", []), _dec22 = Reflect.metadata("design:type", Array), _dec23 = Reflect.metadata("design:type", Function), _dec24 = Reflect.metadata("design:paramtypes", [Boolean]), _dec25 = (0, _nextCore.delegate)('server'), _dec26 = Reflect.metadata("design:type", Function), _dec27 = Reflect.metadata("design:paramtypes", [Boolean]), _dec28 = Reflect.metadata("design:type", Function), _dec29 = Reflect.metadata("design:paramtypes", [void 0]), _dec30 = Reflect.metadata("design:type", Function), _dec31 = Reflect.metadata("design:paramtypes", [void 0]), _dec32 = Reflect.metadata("design:type", Function), _dec33 = Reflect.metadata("design:paramtypes", [String]), _dec34 = Reflect.metadata("design:type", Function), _dec35 = Reflect.metadata("design:paramtypes", [typeof ToNumber === "undefined" ? Object : ToNumber]), _dec36 = Reflect.metadata("design:type", Function), _dec37 = Reflect.metadata("design:paramtypes", [typeof ToNumber === "undefined" ? Object : ToNumber]), _dec38 = Reflect.metadata("design:type", Function), _dec39 = Reflect.metadata("design:paramtypes", [String]), _dec40 = Reflect.metadata("design:type", Function), _dec41 = Reflect.metadata("design:paramtypes", [typeof Attachment === "undefined" ? Object : Attachment]), _dec42 = Reflect.metadata("design:type", Function), _dec43 = Reflect.metadata("design:paramtypes", [typeof Attachment === "undefined" ? Object : Attachment]), _dec44 = Reflect.metadata("design:type", Function), _dec45 = Reflect.metadata("design:paramtypes", []), _dec46 = (0, _nextCore.delegate)('server'), _dec47 = Reflect.metadata("design:type", Function), _dec48 = Reflect.metadata("design:paramtypes", []), _dec49 = (0, _nextCore.delegate)('server'), _dec50 = Reflect.metadata("design:type", Function), _dec51 = Reflect.metadata("design:paramtypes", [String]), _dec52 = (0, _nextCore.delegate)('server'), _dec53 = Reflect.metadata("design:type", Function), _dec54 = Reflect.metadata("design:paramtypes", [String, Array]), _dec55 = (0, _nextCore.delegate)('server'), _dec56 = Reflect.metadata("design:type", Function), _dec57 = Reflect.metadata("design:paramtypes", [String, Array, Array]), _dec58 = (0, _nextCore.delegate)('server'), _dec59 = Reflect.metadata("design:type", Function), _dec60 = Reflect.metadata("design:paramtypes", [String]), _dec61 = (0, _nextCore.delegate)('server'), _dec62 = Reflect.metadata("design:type", Function), _dec63 = Reflect.metadata("design:paramtypes", [String]), _dec64 = (0, _nextCore.delegate)('server'), _dec65 = Reflect.metadata("design:type", Function), _dec66 = Reflect.metadata("design:paramtypes", [Object]), _dec67 = (0, _nextCore.delegate)('server'), _dec68 = Reflect.metadata("design:type", Function), _dec69 = Reflect.metadata("design:paramtypes", [typeof ToNumber === "undefined" ? Object : ToNumber, void 0]), _dec70 = (0, _nextCore.delegate)('server'), _dec71 = Reflect.metadata("design:type", Function), _dec72 = Reflect.metadata("design:paramtypes", []), _dec73 = (0, _nextCore.delegate)('server'), _dec74 = Reflect.metadata("design:type", Function), _dec75 = Reflect.metadata("design:paramtypes", [typeof ToNumber === "undefined" ? Object : ToNumber]), _dec76 = (0, _nextCore.delegate)('server'), _dec77 = Reflect.metadata("design:type", Function), _dec78 = Reflect.metadata("design:paramtypes", [Array]), _dec79 = Reflect.metadata("design:type", Function), _dec80 = Reflect.metadata("design:paramtypes", [Array]), _dec81 = Reflect.metadata("design:type", Function), _dec82 = Reflect.metadata("design:paramtypes", [typeof ToNumber === "undefined" ? Object : ToNumber]), _dec83 = (0, _nextCore.delegate)('server'), _dec84 = Reflect.metadata("design:type", Function), _dec85 = Reflect.metadata("design:paramtypes", [typeof ToNumber === "undefined" ? Object : ToNumber]), _dec86 = (0, _nextCore.delegate)('server'), _dec87 = Reflect.metadata("design:type", Function), _dec88 = Reflect.metadata("design:paramtypes", [String]), _dec89 = (0, _nextCore.delegate)('server'), _dec90 = Reflect.metadata("design:type", Function), _dec91 = Reflect.metadata("design:paramtypes", [Array]), _dec92 = (0, _nextCore.delegate)('server'), _dec93 = Reflect.metadata("design:type", Function), _dec94 = Reflect.metadata("design:paramtypes", [typeof Attachment === "undefined" ? Object : Attachment]), _dec95 = (0, _nextCore.delegate)('server'), _dec96 = Reflect.metadata("design:type", Function), _dec97 = Reflect.metadata("design:paramtypes", [typeof Attachment === "undefined" ? Object : Attachment]), _dec98 = (0, _nextCore.delegate)('server'), _dec99 = Reflect.metadata("design:type", Function), _dec100 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = (_class2 = /*#__PURE__*/function (_RcModule) {
  function ComposeText(_toast, _auth, _storage, _messageSender, _numberValidate, _appFeatures, _contactMatcher, _smsOptOut, _contactSearch, _composeTextOptions, _router, _smsConsent) {
    var _this$_contactMatcher;
    var _this;
    _classCallCheck(this, ComposeText);
    _this = _callSuper(this, ComposeText);
    _this._toast = _toast;
    _this._auth = _auth;
    _this._storage = _storage;
    _this._messageSender = _messageSender;
    _this._numberValidate = _numberValidate;
    _this._appFeatures = _appFeatures;
    _this._contactMatcher = _contactMatcher;
    _this._smsOptOut = _smsOptOut;
    _this._contactSearch = _contactSearch;
    _this._composeTextOptions = _composeTextOptions;
    _this._router = _router;
    _this._smsConsent = _smsConsent;
    _this.smsVerify = void 0;
    // SMS hooks
    _this._smsHooks = [];
    _initializerDefineProperty(_this, "senderNumber", _descriptor, _this);
    _initializerDefineProperty(_this, "typingToNumber", _descriptor2, _this);
    _initializerDefineProperty(_this, "_toNumbers", _descriptor3, _this);
    _initializerDefineProperty(_this, "messageText", _descriptor4, _this);
    _initializerDefineProperty(_this, "toNumberEntity", _descriptor5, _this);
    _initializerDefineProperty(_this, "attachments", _descriptor6, _this);
    _initializerDefineProperty(_this, "createGroupChecked", _descriptor7, _this);
    _this._storage.enable(_this, {
      migrations: [['senderNumber', 'composeText-senderNumber']]
    });
    (_this$_contactMatcher = _this._contactMatcher) === null || _this$_contactMatcher === void 0 ? void 0 : _this$_contactMatcher.addQuerySource({
      getQueriesFn: function getQueriesFn() {
        return _this.toNumbersQuery;
      },
      readyCheckFn: function readyCheckFn() {
        return true;
      }
    });
    return _this;
  }
  _inherits(ComposeText, _RcModule);
  return _createClass(ComposeText, [{
    key: "toNumbersQuery",
    get: function get() {
      return this._toNumbers.map(function (number) {
        return number.phoneNumber;
      });
    }
  }, {
    key: "requiredOptInToNumbers",
    get: function get() {
      return this.toNumbers.filter(function (toNumber) {
        return toNumber.errorReason === 'requiredOptIn';
      });
    }
  }, {
    key: "recipientConsentNumberPairs",
    get: function get() {
      var _this2 = this;
      return this._toNumbers.map(function (number) {
        return number.phoneNumber;
      }).filter(function (to) {
        return !(0, _isBlank.isBlank)(to);
      }).map(function (to) {
        return {
          from: _this2.senderNumber,
          to: to
        };
      });
    }
  }, {
    key: "loadRecipientConsentData",
    value: function () {
      var _loadRecipientConsentData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _this$_smsConsent, _this$_smsConsent2;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return Promise.all([(_this$_smsConsent = this._smsConsent) === null || _this$_smsConsent === void 0 ? void 0 : _this$_smsConsent.ensureSmsConfigurationState(this.senderNumber), (_this$_smsConsent2 = this._smsConsent) === null || _this$_smsConsent2 === void 0 ? void 0 : _this$_smsConsent2.ensureEffectiveConsentForNumberPairs(this.recipientConsentNumberPairs)]);
            case 1:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function loadRecipientConsentData() {
        return _loadRecipientConsentData.apply(this, arguments);
      }
      return loadRecipientConsentData;
    }()
  }, {
    key: "getConsentStatus",
    value: function getConsentStatus(toNumber) {
      var _this$_smsConsent$get, _this$_smsConsent3;
      return (_this$_smsConsent$get = (_this$_smsConsent3 = this._smsConsent) === null || _this$_smsConsent3 === void 0 ? void 0 : _this$_smsConsent3.getConsentStatus({
        from: this.senderNumber,
        to: toNumber
      })) !== null && _this$_smsConsent$get !== void 0 ? _this$_smsConsent$get : {};
    }
  }, {
    key: "toNumbers",
    get: function get() {
      var _this3 = this;
      return this._toNumbers.map(function (number) {
        var _this3$_smsOptOut, _this3$_composeTextOp, _this3$_composeTextOp2, _this3$_composeTextOp3;
        var _this3$getConsentStat = _this3.getConsentStatus(number.phoneNumber),
          consentOptOut = _this3$getConsentStat.isOptOut,
          requiredOptInLoss = _this3$getConsentStat.requiredOptInLoss;
        var isOptOut = Boolean(consentOptOut || ((_this3$_smsOptOut = _this3._smsOptOut) === null || _this3$_smsOptOut === void 0 ? void 0 : _this3$_smsOptOut.isOptOut(number.phoneNumber, _this3.senderNumber)));
        var error = number.error || isOptOut || requiredOptInLoss;
        var value = _objectSpread(_objectSpread({}, number), {}, {
          error: error,
          errorReason: error ? isOptOut ? 'optOut' : requiredOptInLoss ? 'requiredOptIn' : 'invalidPhoneNumber' : undefined
        });
        return (_this3$_composeTextOp = (_this3$_composeTextOp2 = _this3._composeTextOptions) === null || _this3$_composeTextOp2 === void 0 ? void 0 : (_this3$_composeTextOp3 = _this3$_composeTextOp2.toNumbersProcessor) === null || _this3$_composeTextOp3 === void 0 ? void 0 : _this3$_composeTextOp3.call(_this3$_composeTextOp2, value)) !== null && _this3$_composeTextOp !== void 0 ? _this3$_composeTextOp : value;
      });
    }
  }, {
    key: "hasInvalidToNumbers",
    get: function get() {
      return this.toNumbers.some(function (toNumber) {
        return toNumber.error;
      });
    }
  }, {
    key: "_setCreateGroupChecked",
    value: function _setCreateGroupChecked(checked) {
      this.createGroupChecked = checked;
    }
  }, {
    key: "setCreateGroupChecked",
    value: function () {
      var _setCreateGroupChecked2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(checked) {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              this._setCreateGroupChecked(checked);
            case 1:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function setCreateGroupChecked(_x) {
        return _setCreateGroupChecked2.apply(this, arguments);
      }
      return setCreateGroupChecked;
    }()
  }, {
    key: "_setSenderNumber",
    value: function _setSenderNumber() {
      var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.senderNumber = number;
    }
  }, {
    key: "_setTypingToNumber",
    value: function _setTypingToNumber() {
      var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.typingToNumber = number;
    }
  }, {
    key: "_setToNumberEntity",
    value: function _setToNumberEntity(entityId) {
      this.toNumberEntity = entityId;
    }
  }, {
    key: "_addToNumber",
    value: function _addToNumber(number) {
      if (number.id) {
        var idx = this._toNumbers.findIndex(function (item) {
          return number.id === item.id || number.phoneNumber === item.phoneNumber;
        });
        if (idx > -1) {
          // replace old one if found
          this._toNumbers[idx] = number;
          return;
        }
      } else {
        var oldNumber = this._toNumbers.find(function (item) {
          return number.phoneNumber === item.phoneNumber;
        });
        if (oldNumber) {
          return;
        }
      }
      this._toNumbers.push(number);
    }
  }, {
    key: "_removeToNumber",
    value: function _removeToNumber(number) {
      var index = this._toNumbers.findIndex(function (item) {
        return item.phoneNumber === number.phoneNumber;
      });
      if (index !== -1) {
        this._toNumbers.splice(index, 1);
      }
    }
  }, {
    key: "_setMessageText",
    value: function _setMessageText(text) {
      this.messageText = text;
    }
  }, {
    key: "_addAttachment",
    value: function _addAttachment(attachment) {
      var newAttachments = this.attachments.filter(function (f) {
        return f.name !== attachment.name;
      });
      newAttachments.push(attachment);
      this.attachments = newAttachments;
    }
  }, {
    key: "_removeAttachment",
    value: function _removeAttachment(attachment) {
      this.attachments = this.attachments.filter(function (f) {
        return f.name !== attachment.name;
      });
    }
  }, {
    key: "_clean",
    value: function _clean() {
      this.typingToNumber = '';
      this._toNumbers = [];
      this.messageText = '';
      this.attachments = [];
      this.toNumberEntity = '';
    }
  }, {
    key: "_shouldInit",
    value: function _shouldInit() {
      return !!(_superPropGet(ComposeText, "_shouldInit", this, 3)([]) && this._auth.loggedIn);
    }
  }, {
    key: "_shouldReset",
    value: function _shouldReset() {
      return !!(_superPropGet(ComposeText, "_shouldReset", this, 3)([]) || this.ready && !this._auth.loggedIn);
    }
  }, {
    key: "onInit",
    value: function () {
      var _onInit = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (!this._auth.isFreshLogin) {
                _context3.n = 1;
                break;
              }
              _context3.n = 1;
              return this.clean();
            case 1:
              this._initSenderNumber();
            case 2:
              return _context3.a(2);
          }
        }, _callee3, this);
      }));
      function onInit() {
        return _onInit.apply(this, arguments);
      }
      return onInit;
    }()
  }, {
    key: "onReset",
    value: function () {
      var _onReset = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return this.clean();
            case 1:
              return _context4.a(2);
          }
        }, _callee4, this);
      }));
      function onReset() {
        return _onReset.apply(this, arguments);
      }
      return onReset;
    }()
  }, {
    key: "onInitOnce",
    value: function onInitOnce() {
      var _this4 = this;
      (0, _nextCore.watch)(this, function () {
        return _this4._messageSender.senderNumbersList;
      }, function () {
        if (_this4.ready) {
          _this4._initSenderNumber();
        }
      });
      (0, _nextCore.watch)(this, function () {
        var _this4$_contactSearch;
        return (_this4$_contactSearch = _this4._contactSearch) === null || _this4$_contactSearch === void 0 ? void 0 : _this4$_contactSearch.searchResult;
      }, function (searchResult) {
        var _this4$_contactSearch2;
        if (_this4.ready && (_this4$_contactSearch2 = _this4._contactSearch) !== null && _this4$_contactSearch2 !== void 0 && _this4$_contactSearch2.ready && (searchResult === null || searchResult === void 0 ? void 0 : searchResult.length) > 0) {
          _this4._handleRecipient();
        }
      });
      var _contactMatcher = this._contactMatcher;
      if (_contactMatcher) {
        (0, _nextCore.watch)(this, function () {
          return [_this4.toNumbersQuery, _this4.ready];
        }, function () {
          if (_this4.ready && _contactMatcher.ready && _this4.toNumbersQuery.length > 0) {
            _contactMatcher.triggerMatch();
          }
        }, {
          multiple: true
        });
      }
    }
  }, {
    key: "_initSenderNumber",
    value: function _initSenderNumber() {
      var cachedPhoneNumber = this.senderNumber;
      if (cachedPhoneNumber && this._messageSender.senderNumbersList.find(function (info) {
        return info.phoneNumber === cachedPhoneNumber;
      })) {
        return;
      }
      var userPhoneNumberInfo = this._messageSender.senderNumbersList[0];
      if (!userPhoneNumberInfo) {
        _nextCore.logger.warn('No sender number found');
        return;
      }
      this.updateSenderNumber(userPhoneNumberInfo === null || userPhoneNumberInfo === void 0 ? void 0 : userPhoneNumberInfo.phoneNumber);
    }
  }, {
    key: "_handleRecipient",
    value: function _handleRecipient() {
      var dummy = this._toNumbers.find(function (toNumber) {
        return !toNumber.entityType;
      });
      if (dummy) {
        var _this$_contactSearch;
        var recipient = (_this$_contactSearch = this._contactSearch) === null || _this$_contactSearch === void 0 ? void 0 : _this$_contactSearch.searchResult.find(function (item) {
          return item.id === dummy.id;
        });
        if (recipient) {
          this.addToNumber(recipient);
        }
      }
    }
  }, {
    key: "_alertWarning",
    value: function _alertWarning(message, ttl) {
      this._toast.warning({
        message: message,
        allowDuplicates: false,
        ttl: ttl
      });
    }
  }, {
    key: "_alertDanger",
    value: function _alertDanger(message) {
      this._toast.danger({
        message: message,
        allowDuplicates: false,
        ttl: 5000
      });
    }
  }, {
    key: "_validatePhoneNumber",
    value: function () {
      var _validatePhoneNumber2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(phoneNumbers) {
        var _this$_appFeatures;
        var isList, phoneNumberArray, isOnlyPagerResults, isOnlyPagerArray, isEDPEnabled, validateResult, results;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              isList = Array.isArray(phoneNumbers);
              phoneNumberArray = isList ? phoneNumbers : [phoneNumbers];
              _context5.n = 1;
              return this._validateIsOnlyPager(phoneNumberArray);
            case 1:
              isOnlyPagerResults = _context5.v;
              isOnlyPagerArray = Array.isArray(isOnlyPagerResults) ? isOnlyPagerResults : [isOnlyPagerResults];
              isEDPEnabled = (_this$_appFeatures = this._appFeatures) === null || _this$_appFeatures === void 0 ? void 0 : _this$_appFeatures.isEDPEnabled;
              validateResult = isEDPEnabled ? this._numberValidate.validate(phoneNumberArray) : this._numberValidate.validateFormat(phoneNumberArray);
              this._numberValidate.handleValidateToasts(validateResult);
              results = phoneNumberArray.map(function (_, index) {
                if (isOnlyPagerArray[index]) {
                  return false;
                }
                return !!validateResult.result;
              });
              return _context5.a(2, isList ? results : results[0]);
          }
        }, _callee5, this);
      }));
      function _validatePhoneNumber(_x2) {
        return _validatePhoneNumber2.apply(this, arguments);
      }
      return _validatePhoneNumber;
    }()
  }, {
    key: "_validateIsOnlyPager",
    value: function () {
      var _validateIsOnlyPager2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(phoneNumbers) {
        var _this5 = this;
        var phoneNumberArray, validate, parsedNumbers, results, _t;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              phoneNumberArray = Array.isArray(phoneNumbers) ? phoneNumbers : [phoneNumbers];
              validate = this._numberValidate.validate(phoneNumberArray);
              if (validate.result) {
                _context6.n = 1;
                break;
              }
              return _context6.a(2, Array.isArray(phoneNumbers) ? phoneNumberArray.map(function () {
                return false;
              }) : false);
            case 1:
              _context6.n = 2;
              return this._numberValidate.parseNumbers(phoneNumberArray);
            case 2:
              _t = _context6.v;
              if (_t) {
                _context6.n = 3;
                break;
              }
              _t = [];
            case 3:
              parsedNumbers = _t;
              results = phoneNumberArray.map(function (phoneNumber, index) {
                var _ref = parsedNumbers[index] || {},
                  isAnExtension = _ref.isAnExtension;
                if (phoneNumber.length >= 7 && !isAnExtension && !_this5._appFeatures.hasOutboundSMSPermission) {
                  _this5._alertWarning((0, _i18n2.t)('noSMSPermission'));
                  return true;
                }
                return false;
              });
              return _context6.a(2, Array.isArray(phoneNumbers) ? results : results[0]);
          }
        }, _callee6, this);
      }));
      function _validateIsOnlyPager(_x3) {
        return _validateIsOnlyPager2.apply(this, arguments);
      }
      return _validateIsOnlyPager;
    }()
  }, {
    key: "resetCreateGroupChecked",
    value: function () {
      var _resetCreateGroupChecked = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var recipients;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              if (!this.disabledGroupMessage) {
                _context7.n = 1;
                break;
              }
              return _context7.a(2);
            case 1:
              recipients = this._toNumbers; // Reset createGroupChecked to default value if there're less than 1 recipients
              if (recipients.length <= 1) {
                this.setCreateGroupChecked(true);
              }
              if (!this._appFeatures.hasSendMMSPermission && recipients.length > 1) {
                // when can not create group, direct switch to individual message
                this.setCreateGroupChecked(false);
              }
            case 2:
              return _context7.a(2);
          }
        }, _callee7, this);
      }));
      function resetCreateGroupChecked() {
        return _resetCreateGroupChecked.apply(this, arguments);
      }
      return resetCreateGroupChecked;
    }()
  }, {
    key: "validatePhoneNumber",
    value: function () {
      var _validatePhoneNumber3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(phoneNumber) {
        var validateResult;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              _context8.n = 1;
              return this._validateIsOnlyPager(phoneNumber);
            case 1:
              if (!_context8.v) {
                _context8.n = 2;
                break;
              }
              return _context8.a(2, false);
            case 2:
              validateResult = this._numberValidate.validateFormat([phoneNumber]);
              return _context8.a(2, !!validateResult.result);
          }
        }, _callee8, this);
      }));
      function validatePhoneNumber(_x4) {
        return _validatePhoneNumber3.apply(this, arguments);
      }
      return validatePhoneNumber;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(text) {
        var _this6 = this;
        var attachments,
          toNumbers,
          typingToNumber,
          _this$_smsConsent4,
          _this$_smsOptOut,
          _this$getConsentStatu,
          typingToConsentOptOut,
          typingToRequiredOptInLoss,
          typingToOptOut,
          continueSend,
          _iterator,
          _step,
          hook,
          toastPortalInstance,
          responses,
          _args9 = arguments,
          _t2,
          _t3,
          _t4,
          _t5;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              attachments = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : [];
              _context9.n = 1;
              return this.loadRecipientConsentData();
            case 1:
              if (!this.hasInvalidToNumbers) {
                _context9.n = 2;
                break;
              }
              return _context9.a(2, null);
            case 2:
              toNumbers = this._toNumbers.map(function (number) {
                return number.phoneNumber;
              });
              typingToNumber = this.typingToNumber;
              if ((0, _isBlank.isBlank)(typingToNumber)) {
                _context9.n = 8;
                break;
              }
              _context9.n = 3;
              return (_this$_smsConsent4 = this._smsConsent) === null || _this$_smsConsent4 === void 0 ? void 0 : _this$_smsConsent4.loadEffectiveConsentForNumbers({
                from: this.senderNumber,
                to: typingToNumber
              });
            case 3:
              _this$getConsentStatu = this.getConsentStatus(typingToNumber), typingToConsentOptOut = _this$getConsentStatu.isOptOut, typingToRequiredOptInLoss = _this$getConsentStatu.requiredOptInLoss;
              typingToOptOut = Boolean(typingToConsentOptOut || ((_this$_smsOptOut = this._smsOptOut) === null || _this$_smsOptOut === void 0 ? void 0 : _this$_smsOptOut.isOptOut(typingToNumber, this.senderNumber)));
              _context9.n = 4;
              return this._validatePhoneNumber(typingToNumber);
            case 4:
              _t3 = _context9.v;
              if (!_t3) {
                _context9.n = 5;
                break;
              }
              _t3 = !typingToOptOut;
            case 5:
              _t2 = _t3;
              if (!_t2) {
                _context9.n = 6;
                break;
              }
              _t2 = !typingToRequiredOptInLoss;
            case 6:
              if (!_t2) {
                _context9.n = 7;
                break;
              }
              toNumbers.push(typingToNumber);
              _context9.n = 8;
              break;
            case 7:
              if (process.env.THEME_SYSTEM === 'spring-ui') {
                // addToNumber to reflect error state in UI
                this.cleanTypingToNumber();
                this._addToNumber({
                  name: typingToNumber,
                  phoneNumber: typingToNumber,
                  freeSolo: true
                });
              }
              return _context9.a(2, null);
            case 8:
              if (!this.smsVerify) {
                _context9.n = 10;
                break;
              }
              _context9.n = 9;
              return this.smsVerify({
                toNumbers: this._toNumbers,
                typingToNumber: typingToNumber
              });
            case 9:
              _t4 = _context9.v;
              _context9.n = 11;
              break;
            case 10:
              _t4 = true;
            case 11:
              continueSend = _t4;
              if (continueSend) {
                _context9.n = 12;
                break;
              }
              return _context9.a(2, null);
            case 12:
              // Call SMS hooks to preserve context
              _iterator = _createForOfIteratorHelper(this._smsHooks);
              _context9.p = 13;
              _iterator.s();
            case 14:
              if ((_step = _iterator.n()).done) {
                _context9.n = 16;
                break;
              }
              hook = _step.value;
              _context9.n = 15;
              return hook({
                recipients: this._toNumbers
              });
            case 15:
              _context9.n = 14;
              break;
            case 16:
              _context9.n = 18;
              break;
            case 17:
              _context9.p = 17;
              _t5 = _context9.v;
              _iterator.e(_t5);
            case 18:
              _context9.p = 18;
              _iterator.f();
              return _context9.f(18);
            case 19:
              _context9.n = 20;
              return (0, _rxjs.firstValueFrom)((0, _rxjs.merge)(
              // when sending takes too long, show a toast
              (0, _rxjs.timer)(10000).pipe((0, _rxjs.switchMap)(function () {
                var _this6$_router;
                if (((_this6$_router = _this6._router) === null || _this6$_router === void 0 ? void 0 : _this6$_router.currentPath) === '/composeText') {
                  toastPortalInstance = _this6._toast.warning({
                    message: (0, _i18n2.t)('sending'),
                    ttl: 0
                  });
                }
                return _rxjs.NEVER;
              }), (0, _rxjs.finalize)(function () {
                var _toastPortalInstance;
                (_toastPortalInstance = toastPortalInstance) === null || _toastPortalInstance === void 0 ? void 0 : _toastPortalInstance.close();
              })), this.sendMessages(text, attachments, toNumbers)));
            case 20:
              responses = _context9.v;
              return _context9.a(2, responses);
          }
        }, _callee9, this, [[13, 17, 18, 19]]);
      }));
      function send(_x5) {
        return _send.apply(this, arguments);
      }
      return send;
    }()
  }, {
    key: "sendMessages",
    value: function () {
      var _sendMessages = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(text) {
        var _this$_smsOptOut$atta, _this$_smsOptOut2;
        var attachments,
          toNumbers,
          grouped,
          messageText,
          result,
          _this$_smsOptOut3,
          _args0 = arguments;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              attachments = _args0.length > 1 && _args0[1] !== undefined ? _args0[1] : [];
              toNumbers = _args0.length > 2 ? _args0[2] : undefined;
              this.logger.log('sendMessages', {
                disabledGroupMessage: this.disabledGroupMessage,
                createGroupChecked: this.createGroupChecked,
                toNumbersCount: toNumbers.length
              });
              grouped =
              // When disabledGroupMessage is true, always send individual messages, and only spring-ui support group sending
              process.env.THEME_SYSTEM === 'spring-ui' && !this.disabledGroupMessage && this.createGroupChecked;
              messageText = (_this$_smsOptOut$atta = (_this$_smsOptOut2 = this._smsOptOut) === null || _this$_smsOptOut2 === void 0 ? void 0 : _this$_smsOptOut2.attachOptOutHint(COMPOSE_TEXT_CONVERSATION.conversationId, text)) !== null && _this$_smsOptOut$atta !== void 0 ? _this$_smsOptOut$atta : text;
              _context0.n = 1;
              return this._messageSender.send({
                fromNumber: this.senderNumber,
                toNumbers: toNumbers,
                text: messageText,
                attachments: attachments,
                grouped: grouped
              });
            case 1:
              result = _context0.v;
              if (result) {
                (_this$_smsOptOut3 = this._smsOptOut) === null || _this$_smsOptOut3 === void 0 ? void 0 : _this$_smsOptOut3.resetOptOut(COMPOSE_TEXT_CONVERSATION.conversationId);
              }
              return _context0.a(2, result);
          }
        }, _callee0, this);
      }));
      function sendMessages(_x6) {
        return _sendMessages.apply(this, arguments);
      }
      return sendMessages;
    }()
  }, {
    key: "updateSenderNumber",
    value: function () {
      var _updateSenderNumber = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(number) {
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              this._setSenderNumber(number);
            case 1:
              return _context1.a(2);
          }
        }, _callee1, this);
      }));
      function updateSenderNumber(_x7) {
        return _updateSenderNumber.apply(this, arguments);
      }
      return updateSenderNumber;
    }()
  }, {
    key: "updateTypingToNumber",
    value: function () {
      var _updateTypingToNumber = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(number) {
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.n) {
            case 0:
              if (!(number.length > 30)) {
                _context10.n = 1;
                break;
              }
              this._alertWarning((0, _i18n.t)('recipientNumberInvalids'));
              return _context10.a(2);
            case 1:
              this._setTypingToNumber(number);
            case 2:
              return _context10.a(2);
          }
        }, _callee10, this);
      }));
      function updateTypingToNumber(_x8) {
        return _updateTypingToNumber.apply(this, arguments);
      }
      return updateTypingToNumber;
    }()
  }, {
    key: "onToNumberMatch",
    value: function () {
      var _onToNumberMatch = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(_ref2) {
        var entityId;
        return _regenerator().w(function (_context11) {
          while (1) switch (_context11.n) {
            case 0:
              entityId = _ref2.entityId;
              this._setToNumberEntity(entityId);
            case 1:
              return _context11.a(2);
          }
        }, _callee11, this);
      }));
      function onToNumberMatch(_x9) {
        return _onToNumberMatch.apply(this, arguments);
      }
      return onToNumberMatch;
    }()
  }, {
    key: "addToRecipients",
    value: function () {
      var _addToRecipients = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(recipient) {
        var shouldClean,
          isAdded,
          _args12 = arguments;
        return _regenerator().w(function (_context12) {
          while (1) switch (_context12.n) {
            case 0:
              shouldClean = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : true;
              _context12.n = 1;
              return this.addToNumber(recipient);
            case 1:
              isAdded = _context12.v;
              if (isAdded && shouldClean) {
                this._setTypingToNumber('');
              }
            case 2:
              return _context12.a(2);
          }
        }, _callee12, this);
      }));
      function addToRecipients(_x0) {
        return _addToRecipients.apply(this, arguments);
      }
      return addToRecipients;
    }()
  }, {
    key: "cleanTypingToNumber",
    value: function () {
      var _cleanTypingToNumber = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
        return _regenerator().w(function (_context13) {
          while (1) switch (_context13.n) {
            case 0:
              this._setTypingToNumber('');
            case 1:
              return _context13.a(2);
          }
        }, _callee13, this);
      }));
      function cleanTypingToNumber() {
        return _cleanTypingToNumber.apply(this, arguments);
      }
      return cleanTypingToNumber;
    }()
  }, {
    key: "addToNumber",
    value: function () {
      var _addToNumber2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(number) {
        var isValid;
        return _regenerator().w(function (_context14) {
          while (1) switch (_context14.n) {
            case 0:
              if (!(0, _isBlank.isBlank)(number.phoneNumber)) {
                _context14.n = 1;
                break;
              }
              return _context14.a(2, false);
            case 1:
              _context14.n = 2;
              return this._validatePhoneNumber(number.phoneNumber);
            case 2:
              isValid = _context14.v;
              if (isValid) {
                _context14.n = 3;
                break;
              }
              return _context14.a(2, false);
            case 3:
              this._processAddToNumber(number);
              return _context14.a(2, true);
          }
        }, _callee14, this);
      }));
      function addToNumber(_x1) {
        return _addToNumber2.apply(this, arguments);
      }
      return addToNumber;
    }()
  }, {
    key: "addToNumbers",
    value: function () {
      var _addToNumbers = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(numbers) {
        var phoneNumbers, validationResults, validNumbers;
        return _regenerator().w(function (_context15) {
          while (1) switch (_context15.n) {
            case 0:
              if (!(!numbers || numbers.length === 0)) {
                _context15.n = 1;
                break;
              }
              return _context15.a(2, false);
            case 1:
              phoneNumbers = numbers.map(function (number) {
                return number.phoneNumber;
              });
              _context15.n = 2;
              return this._validatePhoneNumber(phoneNumbers);
            case 2:
              validationResults = _context15.v;
              // only add valid numbers
              validNumbers = numbers.filter(function (number, index) {
                return validationResults[index] === true;
              });
              if (!(validNumbers.length === 0)) {
                _context15.n = 3;
                break;
              }
              return _context15.a(2, false);
            case 3:
              // batch add valid numbers
              this._processAddToNumbers(validNumbers);
              return _context15.a(2, true);
          }
        }, _callee15, this);
      }));
      function addToNumbers(_x10) {
        return _addToNumbers.apply(this, arguments);
      }
      return addToNumbers;
    }()
  }, {
    key: "_processAddToNumbers",
    value: function _processAddToNumbers(validNumbers) {
      var _this7 = this;
      validNumbers.forEach(function (number) {
        _this7._processAddToNumber(number);
      });
    }
  }, {
    key: "_processAddToNumber",
    value: function _processAddToNumber(number) {
      this._addToNumber(number);
      if (process.env.THEME_SYSTEM === 'spring-ui') {
        var hasSenderNumbers = this._messageSender.senderNumbersList.length > 0;
        if (!hasSenderNumbers && this._appFeatures.hasOutboundSMSPermission && this._toNumbers.some(function (x) {
          return x && x.type !== 'company';
        })) {
          this._alertWarning((0, _i18n.t)('senderNumberInvalid'), 0);
        }
        this.resetCreateGroupChecked();
      }
    }
  }, {
    key: "removeToNumber",
    value: function () {
      var _removeToNumber2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(number) {
        return _regenerator().w(function (_context16) {
          while (1) switch (_context16.n) {
            case 0:
              this._removeToNumber(number);
              if (process.env.THEME_SYSTEM === 'spring-ui') {
                this.resetCreateGroupChecked();
              }
            case 1:
              return _context16.a(2);
          }
        }, _callee16, this);
      }));
      function removeToNumber(_x11) {
        return _removeToNumber2.apply(this, arguments);
      }
      return removeToNumber;
    }()
  }, {
    key: "checkAttachmentOverLimit",
    value: function checkAttachmentOverLimit(attachments) {
      var oldAttachments = this.attachments;
      if (attachments.length + oldAttachments.length > 10) {
        this._alertDanger((0, _i18n2.t)('attachmentCountLimitation'));
        return false;
      }
      var size = [].concat(_toConsumableArray(oldAttachments), _toConsumableArray(attachments)).reduce(function (prev, curr) {
        return prev + curr.size;
      }, 0);
      if (size > _MessageSender.ATTACHMENT_SIZE_LIMITATION) {
        this._alertDanger((0, _i18n2.t)('attachmentSizeLimitation'));
        return false;
      }
      return true;
    }
  }, {
    key: "updateMessageText",
    value: function () {
      var _updateMessageText = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(text) {
        return _regenerator().w(function (_context17) {
          while (1) switch (_context17.n) {
            case 0:
              if (!(text.length > 1000)) {
                _context17.n = 1;
                break;
              }
              this._alertWarning((0, _i18n.t)('textTooLong'));
              return _context17.a(2);
            case 1:
              this._setMessageText(text);
            case 2:
              return _context17.a(2);
          }
        }, _callee17, this);
      }));
      function updateMessageText(_x12) {
        return _updateMessageText.apply(this, arguments);
      }
      return updateMessageText;
    }()
  }, {
    key: "addAttachments",
    value: function () {
      var _addAttachments = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(attachments) {
        var isValid, _iterator2, _step2, attachment;
        return _regenerator().w(function (_context18) {
          while (1) switch (_context18.n) {
            case 0:
              isValid = this.checkAttachmentOverLimit(attachments);
              if (isValid) {
                _context18.n = 1;
                break;
              }
              return _context18.a(2);
            case 1:
              _iterator2 = _createForOfIteratorHelper(attachments);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  attachment = _step2.value;
                  this.addAttachment(attachment);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            case 2:
              return _context18.a(2);
          }
        }, _callee18, this);
      }));
      function addAttachments(_x13) {
        return _addAttachments.apply(this, arguments);
      }
      return addAttachments;
    }()
  }, {
    key: "addAttachment",
    value: function () {
      var _addAttachment2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19(attachment) {
        return _regenerator().w(function (_context19) {
          while (1) switch (_context19.n) {
            case 0:
              this._addAttachment(attachment);
            case 1:
              return _context19.a(2);
          }
        }, _callee19, this);
      }));
      function addAttachment(_x14) {
        return _addAttachment2.apply(this, arguments);
      }
      return addAttachment;
    }()
  }, {
    key: "removeAttachment",
    value: function () {
      var _removeAttachment2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20(attachment) {
        return _regenerator().w(function (_context20) {
          while (1) switch (_context20.n) {
            case 0:
              this._removeAttachment(attachment);
            case 1:
              return _context20.a(2);
          }
        }, _callee20, this);
      }));
      function removeAttachment(_x15) {
        return _removeAttachment2.apply(this, arguments);
      }
      return removeAttachment;
    }()
  }, {
    key: "clean",
    value: function () {
      var _clean2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21() {
        return _regenerator().w(function (_context21) {
          while (1) switch (_context21.n) {
            case 0:
              this._clean();
              if (process.env.THEME_SYSTEM === 'spring-ui') {
                this.resetCreateGroupChecked();
              }
            case 1:
              return _context21.a(2);
          }
        }, _callee21, this);
      }));
      function clean() {
        return _clean2.apply(this, arguments);
      }
      return clean;
    }()
  }, {
    key: "senderNumbersList",
    get: function get() {
      return this._messageSender.senderNumbersList;
    }
  }, {
    key: "maxRecipients",
    get: function get() {
      var _this$_composeTextOpt, _this$_composeTextOpt2;
      return (_this$_composeTextOpt = (_this$_composeTextOpt2 = this._composeTextOptions) === null || _this$_composeTextOpt2 === void 0 ? void 0 : _this$_composeTextOpt2.maxRecipients) !== null && _this$_composeTextOpt !== void 0 ? _this$_composeTextOpt : DEFAULT_MAX_RECIPIENTS;
    }
  }, {
    key: "disabledGroupMessage",
    get: function get() {
      var _this$_composeTextOpt3, _this$_composeTextOpt4;
      return (_this$_composeTextOpt3 = (_this$_composeTextOpt4 = this._composeTextOptions) === null || _this$_composeTextOpt4 === void 0 ? void 0 : _this$_composeTextOpt4.disabledGroupMessage) !== null && _this$_composeTextOpt3 !== void 0 ? _this$_composeTextOpt3 : false;
    }
  }]);
}(_nextCore.RcModule), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "senderNumber", [_nextCore.userStorage, _nextCore.state], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "typingToNumber", [_nextCore.state], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_toNumbers", [_nextCore.state, _dec0], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _applyDecoratedDescriptor(_class2.prototype, "toNumbersQuery", [_nextCore.computed, _dec1, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "toNumbersQuery"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "requiredOptInToNumbers", [_nextCore.computed, _dec11, _dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "requiredOptInToNumbers"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "recipientConsentNumberPairs", [_nextCore.computed, _dec13, _dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "recipientConsentNumberPairs"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "loadRecipientConsentData", [_dec15, _dec16, _dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "loadRecipientConsentData"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "toNumbers", [_nextCore.computed, _dec18, _dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "toNumbers"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "hasInvalidToNumbers", [_nextCore.computed, _dec20, _dec21], Object.getOwnPropertyDescriptor(_class2.prototype, "hasInvalidToNumbers"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "messageText", [_nextCore.state], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "toNumberEntity", [_nextCore.state], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "attachments", [_nextCore.state, _dec22], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "createGroupChecked", [_nextCore.state], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return true;
  }
}), _applyDecoratedDescriptor(_class2.prototype, "_setCreateGroupChecked", [_nextCore.action, _dec23, _dec24], Object.getOwnPropertyDescriptor(_class2.prototype, "_setCreateGroupChecked"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "setCreateGroupChecked", [_dec25, _dec26, _dec27], Object.getOwnPropertyDescriptor(_class2.prototype, "setCreateGroupChecked"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setSenderNumber", [_nextCore.action, _dec28, _dec29], Object.getOwnPropertyDescriptor(_class2.prototype, "_setSenderNumber"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setTypingToNumber", [_nextCore.action, _dec30, _dec31], Object.getOwnPropertyDescriptor(_class2.prototype, "_setTypingToNumber"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setToNumberEntity", [_nextCore.action, _dec32, _dec33], Object.getOwnPropertyDescriptor(_class2.prototype, "_setToNumberEntity"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_addToNumber", [_nextCore.action, _dec34, _dec35], Object.getOwnPropertyDescriptor(_class2.prototype, "_addToNumber"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_removeToNumber", [_nextCore.action, _dec36, _dec37], Object.getOwnPropertyDescriptor(_class2.prototype, "_removeToNumber"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setMessageText", [_nextCore.action, _dec38, _dec39], Object.getOwnPropertyDescriptor(_class2.prototype, "_setMessageText"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_addAttachment", [_nextCore.action, _dec40, _dec41], Object.getOwnPropertyDescriptor(_class2.prototype, "_addAttachment"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_removeAttachment", [_nextCore.action, _dec42, _dec43], Object.getOwnPropertyDescriptor(_class2.prototype, "_removeAttachment"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_clean", [_nextCore.action, _dec44, _dec45], Object.getOwnPropertyDescriptor(_class2.prototype, "_clean"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "resetCreateGroupChecked", [_dec46, _dec47, _dec48], Object.getOwnPropertyDescriptor(_class2.prototype, "resetCreateGroupChecked"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "validatePhoneNumber", [_dec49, _dec50, _dec51], Object.getOwnPropertyDescriptor(_class2.prototype, "validatePhoneNumber"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "send", [_dec52, _dec53, _dec54], Object.getOwnPropertyDescriptor(_class2.prototype, "send"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "sendMessages", [_dec55, _dec56, _dec57], Object.getOwnPropertyDescriptor(_class2.prototype, "sendMessages"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "updateSenderNumber", [_dec58, _dec59, _dec60], Object.getOwnPropertyDescriptor(_class2.prototype, "updateSenderNumber"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "updateTypingToNumber", [_dec61, _dec62, _dec63], Object.getOwnPropertyDescriptor(_class2.prototype, "updateTypingToNumber"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onToNumberMatch", [_dec64, _dec65, _dec66], Object.getOwnPropertyDescriptor(_class2.prototype, "onToNumberMatch"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "addToRecipients", [_dec67, _dec68, _dec69], Object.getOwnPropertyDescriptor(_class2.prototype, "addToRecipients"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "cleanTypingToNumber", [_dec70, _dec71, _dec72], Object.getOwnPropertyDescriptor(_class2.prototype, "cleanTypingToNumber"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "addToNumber", [_dec73, _dec74, _dec75], Object.getOwnPropertyDescriptor(_class2.prototype, "addToNumber"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "addToNumbers", [_dec76, _dec77, _dec78], Object.getOwnPropertyDescriptor(_class2.prototype, "addToNumbers"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_processAddToNumbers", [_nextCore.action, _dec79, _dec80], Object.getOwnPropertyDescriptor(_class2.prototype, "_processAddToNumbers"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_processAddToNumber", [_nextCore.action, _dec81, _dec82], Object.getOwnPropertyDescriptor(_class2.prototype, "_processAddToNumber"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "removeToNumber", [_dec83, _dec84, _dec85], Object.getOwnPropertyDescriptor(_class2.prototype, "removeToNumber"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "updateMessageText", [_dec86, _dec87, _dec88], Object.getOwnPropertyDescriptor(_class2.prototype, "updateMessageText"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "addAttachments", [_dec89, _dec90, _dec91], Object.getOwnPropertyDescriptor(_class2.prototype, "addAttachments"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "addAttachment", [_dec92, _dec93, _dec94], Object.getOwnPropertyDescriptor(_class2.prototype, "addAttachment"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "removeAttachment", [_dec95, _dec96, _dec97], Object.getOwnPropertyDescriptor(_class2.prototype, "removeAttachment"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "clean", [_dec98, _dec99, _dec100], Object.getOwnPropertyDescriptor(_class2.prototype, "clean"), _class2.prototype), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
//# sourceMappingURL=ComposeText.js.map

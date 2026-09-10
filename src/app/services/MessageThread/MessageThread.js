"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.reverse.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.regexp.exec.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageThread = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.flat.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.array.some.js");
require("core-js/modules/es.array.sort.js");
require("core-js/modules/es.array.unscopables.flat.js");
require("core-js/modules/es.date.to-iso-string.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.map.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.object.values.js");
require("core-js/modules/es.parse-int.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.set.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/web.url-search-params.js");
var _subscriptionFilters = require("@ringcentral-integration/commons/enums/subscriptionFilters");
var _messageHelper = require("@ringcentral-integration/commons/lib/messageHelper");
var _services = require("@ringcentral-integration/micro-auth/src/app/services");
var _services2 = require("@ringcentral-integration/micro-contacts/src/app/services");
var _services3 = require("@ringcentral-integration/micro-core/src/app/services");
var _services4 = require("@ringcentral-integration/micro-phone/src/app/services");
var _nextCore = require("@ringcentral-integration/next-core");
var _utils = require("@ringcentral-integration/utils");
var _isEqual = _interopRequireDefault(require("lodash/isEqual"));
var _ramda = require("ramda");
var _rxjs = require("rxjs");
var _ConversationLogger = require("../ConversationLogger");
var _Conversations = require("../Conversations");
var _MessageSender = require("../MessageSender");
var _SmsOptOut = require("../SmsOptOut");
var _i18n = require("./i18n");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec0, _dec1, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _dec59, _dec60, _dec61, _dec62, _dec63, _dec64, _dec65, _dec66, _dec67, _dec68, _dec69, _dec70, _dec71, _dec72, _dec73, _dec74, _dec75, _dec76, _dec77, _dec78, _dec79, _dec80, _dec81, _dec82, _dec83, _dec84, _dec85, _dec86, _dec87, _dec88, _dec89, _dec90, _dec91, _dec92, _dec93, _dec94, _dec95, _dec96, _dec97, _dec98, _dec99, _dec100, _dec101, _dec102, _dec103, _dec104, _dec105, _dec106, _dec107, _dec108, _dec109, _dec110, _dec111, _dec112, _dec113, _dec114, _dec115, _dec116, _dec117, _dec118, _dec119, _dec120, _dec121, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
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
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
var DEFAULT_TTL = 5 * 60 * 1000; // 5 min
var RECORD_COUNT = 250;
var THREADS_PER_PAGE = 100;
var MESSAGES_PER_PAGE = 300;
var MessageThread = exports.MessageThread = (_dec = (0, _nextCore.injectable)({
  name: 'MessageThread'
}), _dec2 = function _dec2(target, key) {
  return (0, _nextCore.optional)('Subscription')(target, undefined, 10);
}, _dec3 = function _dec3(target, key) {
  return (0, _nextCore.optional)('MessageThreadOptions')(target, undefined, 11);
}, _dec4 = function _dec4(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 12);
}, _dec5 = function _dec5(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 13);
}, _dec6 = function _dec6(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 14);
}, _dec7 = function _dec7(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 15);
}, _dec8 = Reflect.metadata("design:type", Function), _dec9 = Reflect.metadata("design:paramtypes", [typeof _services3.Toast === "undefined" ? Object : _services3.Toast, typeof _services.Auth === "undefined" ? Object : _services.Auth, typeof _services.Client === "undefined" ? Object : _services.Client, typeof _services.AppFeatures === "undefined" ? Object : _services.AppFeatures, typeof _nextCore.StoragePlugin === "undefined" ? Object : _nextCore.StoragePlugin, typeof _nextCore.RouterPlugin === "undefined" ? Object : _nextCore.RouterPlugin, typeof _services4.CallQueues === "undefined" ? Object : _services4.CallQueues, typeof _services4.Grant === "undefined" ? Object : _services4.Grant, typeof _MessageSender.MessageSender === "undefined" ? Object : _MessageSender.MessageSender, typeof _nextCore.PortManager === "undefined" ? Object : _nextCore.PortManager, typeof Subscription === "undefined" ? Object : Subscription, typeof MessageThreadOptions === "undefined" ? Object : MessageThreadOptions, typeof _SmsOptOut.SmsOptOut === "undefined" ? Object : _SmsOptOut.SmsOptOut, typeof _services.ExtensionInfo === "undefined" ? Object : _services.ExtensionInfo, typeof _services2.ContactMatcher === "undefined" ? Object : _services2.ContactMatcher, typeof _ConversationLogger.ConversationLogger === "undefined" ? Object : _ConversationLogger.ConversationLogger]), _dec0 = Reflect.metadata("design:type", Function), _dec1 = Reflect.metadata("design:paramtypes", []), _dec10 = Reflect.metadata("design:type", Function), _dec11 = Reflect.metadata("design:paramtypes", []), _dec12 = Reflect.metadata("design:type", Function), _dec13 = Reflect.metadata("design:paramtypes", []), _dec14 = Reflect.metadata("design:type", Function), _dec15 = Reflect.metadata("design:paramtypes", []), _dec16 = Reflect.metadata("design:type", Function), _dec17 = Reflect.metadata("design:paramtypes", [Boolean]), _dec18 = Reflect.metadata("design:type", Function), _dec19 = Reflect.metadata("design:paramtypes", [Number]), _dec20 = Reflect.metadata("design:type", Function), _dec21 = Reflect.metadata("design:paramtypes", [Number]), _dec22 = Reflect.metadata("design:type", Function), _dec23 = Reflect.metadata("design:paramtypes", [Number]), _dec24 = Reflect.metadata("design:type", Function), _dec25 = Reflect.metadata("design:paramtypes", [Number]), _dec26 = Reflect.metadata("design:type", Function), _dec27 = Reflect.metadata("design:paramtypes", []), _dec28 = (0, _nextCore.dynamic)('NumberFormatter'), _dec29 = Reflect.metadata("design:type", typeof NumberFormatter === "undefined" ? Object : NumberFormatter), _dec30 = Reflect.metadata("design:type", typeof MessageThreadData === "undefined" ? Object : MessageThreadData), _dec31 = Reflect.metadata("design:type", typeof Record === "undefined" ? Object : Record), _dec32 = Reflect.metadata("design:type", typeof Record === "undefined" ? Object : Record), _dec33 = Reflect.metadata("design:type", typeof Record === "undefined" ? Object : Record), _dec34 = Reflect.metadata("design:type", Function), _dec35 = Reflect.metadata("design:paramtypes", [String, String]), _dec36 = Reflect.metadata("design:type", Function), _dec37 = Reflect.metadata("design:paramtypes", [String, typeof Attachment === "undefined" ? Object : Attachment]), _dec38 = Reflect.metadata("design:type", Function), _dec39 = Reflect.metadata("design:paramtypes", [String, typeof Attachment === "undefined" ? Object : Attachment]), _dec40 = (0, _nextCore.delegate)('server'), _dec41 = Reflect.metadata("design:type", Function), _dec42 = Reflect.metadata("design:paramtypes", [String, String]), _dec43 = (0, _nextCore.delegate)('server'), _dec44 = Reflect.metadata("design:type", Function), _dec45 = Reflect.metadata("design:paramtypes", [String, Array]), _dec46 = (0, _nextCore.delegate)('server'), _dec47 = Reflect.metadata("design:type", Function), _dec48 = Reflect.metadata("design:paramtypes", [String, typeof Attachment === "undefined" ? Object : Attachment]), _dec49 = Reflect.metadata("design:type", Function), _dec50 = Reflect.metadata("design:paramtypes", [String]), _dec51 = Reflect.metadata("design:type", Function), _dec52 = Reflect.metadata("design:paramtypes", [String]), _dec53 = Reflect.metadata("design:type", Function), _dec54 = Reflect.metadata("design:paramtypes", []), _dec55 = Reflect.metadata("design:type", Function), _dec56 = Reflect.metadata("design:paramtypes", [String, void 0]), _dec57 = Reflect.metadata("design:type", Function), _dec58 = Reflect.metadata("design:paramtypes", [String, typeof ThreadMetaData === "undefined" ? Object : ThreadMetaData]), _dec59 = (0, _nextCore.delegate)('server'), _dec60 = Reflect.metadata("design:type", Function), _dec61 = Reflect.metadata("design:paramtypes", [String]), _dec62 = Reflect.metadata("design:type", Function), _dec63 = Reflect.metadata("design:paramtypes", [String, Boolean]), _dec64 = Reflect.metadata("design:type", Function), _dec65 = Reflect.metadata("design:paramtypes", [typeof SyncSuccessOptions === "undefined" ? Object : SyncSuccessOptions, void 0]), _dec66 = Reflect.metadata("design:type", Function), _dec67 = Reflect.metadata("design:paramtypes", [typeof ThreadSyncSuccessOptions === "undefined" ? Object : ThreadSyncSuccessOptions]), _dec68 = Reflect.metadata("design:type", Function), _dec69 = Reflect.metadata("design:paramtypes", []), _dec70 = Reflect.metadata("design:type", Function), _dec71 = Reflect.metadata("design:paramtypes", []), _dec72 = Reflect.metadata("design:type", Function), _dec73 = Reflect.metadata("design:paramtypes", []), _dec74 = (0, _nextCore.delegate)('server'), _dec75 = Reflect.metadata("design:type", Function), _dec76 = Reflect.metadata("design:paramtypes", []), _dec77 = (0, _nextCore.delegate)('server'), _dec78 = Reflect.metadata("design:type", Function), _dec79 = Reflect.metadata("design:paramtypes", []), _dec80 = (0, _nextCore.delegate)('server'), _dec81 = Reflect.metadata("design:type", Function), _dec82 = Reflect.metadata("design:paramtypes", []), _dec83 = (0, _nextCore.delegate)('server'), _dec84 = Reflect.metadata("design:type", Function), _dec85 = Reflect.metadata("design:paramtypes", []), _dec86 = (0, _nextCore.delegate)('server'), _dec87 = Reflect.metadata("design:type", Function), _dec88 = Reflect.metadata("design:paramtypes", []), _dec89 = (0, _nextCore.delegate)('server'), _dec90 = Reflect.metadata("design:type", Function), _dec91 = Reflect.metadata("design:paramtypes", [String]), _dec92 = (0, _nextCore.delegate)('server'), _dec93 = Reflect.metadata("design:type", Function), _dec94 = Reflect.metadata("design:paramtypes", [String, String]), _dec95 = (0, _nextCore.delegate)('server'), _dec96 = Reflect.metadata("design:type", Function), _dec97 = Reflect.metadata("design:paramtypes", [typeof ListThreadsOptions === "undefined" ? Object : ListThreadsOptions, Boolean]), _dec98 = (0, _nextCore.delegate)('server'), _dec99 = Reflect.metadata("design:type", Function), _dec100 = Reflect.metadata("design:paramtypes", [typeof ListThreadMessagesOptions === "undefined" ? Object : ListThreadMessagesOptions, Boolean]), _dec101 = (0, _nextCore.delegate)('server'), _dec102 = Reflect.metadata("design:type", Function), _dec103 = Reflect.metadata("design:paramtypes", []), _dec104 = (0, _nextCore.delegate)('server'), _dec105 = Reflect.metadata("design:type", Function), _dec106 = Reflect.metadata("design:paramtypes", [typeof ListThreadNotesOptions === "undefined" ? Object : ListThreadNotesOptions]), _dec107 = (0, _nextCore.delegate)('server'), _dec108 = Reflect.metadata("design:type", Function), _dec109 = Reflect.metadata("design:paramtypes", [typeof ThreadNoteCreateRequest === "undefined" ? Object : ThreadNoteCreateRequest]), _dec110 = (0, _nextCore.delegate)('server'), _dec111 = Reflect.metadata("design:type", Function), _dec112 = Reflect.metadata("design:paramtypes", [String, typeof ThreadNoteUpdateRequest === "undefined" ? Object : ThreadNoteUpdateRequest]), _dec113 = (0, _nextCore.delegate)('server'), _dec114 = Reflect.metadata("design:type", Function), _dec115 = Reflect.metadata("design:paramtypes", [typeof ThreadNotesDeleteRequest === "undefined" ? Object : ThreadNotesDeleteRequest]), _dec116 = (0, _nextCore.delegate)('server'), _dec117 = Reflect.metadata("design:type", Function), _dec118 = Reflect.metadata("design:paramtypes", [typeof SendNewThreadMessagePayload === "undefined" ? Object : SendNewThreadMessagePayload]), _dec119 = (0, _nextCore.delegate)('server'), _dec120 = Reflect.metadata("design:type", Function), _dec121 = Reflect.metadata("design:paramtypes", [String, String, Boolean, Array]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = (_class2 = /*#__PURE__*/function (_RcModule) {
  function MessageThread(_toast, _auth, _client, _appFeatures, _storage, _router, _callQueues, _grant, _messageSender, _portManager, _subscription, _messageThreadOptions, _smsOptOut, _extensionInfo, _contactMatcher, _conversationLogger) {
    var _this$_subscription, _this$_contactMatcher;
    var _this;
    _classCallCheck(this, MessageThread);
    _this = _callSuper(this, MessageThread);
    _this._toast = _toast;
    _this._auth = _auth;
    _this._client = _client;
    _this._appFeatures = _appFeatures;
    _this._storage = _storage;
    _this._router = _router;
    _this._callQueues = _callQueues;
    _this._grant = _grant;
    _this._messageSender = _messageSender;
    _this._portManager = _portManager;
    _this._subscription = _subscription;
    _this._messageThreadOptions = _messageThreadOptions;
    _this._smsOptOut = _smsOptOut;
    _this._extensionInfo = _extensionInfo;
    _this._contactMatcher = _contactMatcher;
    _this._conversationLogger = _conversationLogger;
    _this.message$ = new _rxjs.Subject();
    _this._incomingRecord$ = new _rxjs.Subject();
    _this.manualSync$ = new _rxjs.Subject();
    _this.syncDone$ = new _rxjs.Subject();
    _this.hasPermission$ = (0, _nextCore.fromWatchValue)(_this, function () {
      return _this.hasPermission;
    });
    _initializerDefineProperty(_this, "historyLoaded", _descriptor, _this);
    _initializerDefineProperty(_this, "historyLoading", _descriptor2, _this);
    _initializerDefineProperty(_this, "_numberFormatter", _descriptor3, _this);
    _initializerDefineProperty(_this, "data", _descriptor4, _this);
    _initializerDefineProperty(_this, "threadMetadataMap", _descriptor5, _this);
    _initializerDefineProperty(_this, "inputValueMap", _descriptor6, _this);
    _initializerDefineProperty(_this, "attachmentMap", _descriptor7, _this);
    _this._storage.enable(_this);
    (_this$_subscription = _this._subscription) === null || _this$_subscription === void 0 ? void 0 : _this$_subscription.register(_this, {
      filters: [_subscriptionFilters.subscriptionFilters.messageThreadsSync, _subscriptionFilters.subscriptionFilters.messageThreadsEntriesSync]
    });
    (_this$_contactMatcher = _this._contactMatcher) === null || _this$_contactMatcher === void 0 ? void 0 : _this$_contactMatcher.addQuerySource({
      getQueriesFn: function getQueriesFn() {
        return _this.uniqueNumbers;
      },
      readyCheckFn: function readyCheckFn() {
        return true;
      }
    });
    if (_this._portManager.shared) {
      _this._portManager.onServer(function () {
        _this.initListener();
        _this.listenMessageUpdate$();
      });
    } else {
      _this.initListener();
      _this.listenMessageUpdate$();
    }
    return _this;
  }
  _inherits(MessageThread, _RcModule);
  return _createClass(MessageThread, [{
    key: "_enable",
    get: function get() {
      var _this$_messageThreadO, _this$_messageThreadO2;
      return (_this$_messageThreadO = (_this$_messageThreadO2 = this._messageThreadOptions) === null || _this$_messageThreadO2 === void 0 ? void 0 : _this$_messageThreadO2.enable) !== null && _this$_messageThreadO !== void 0 ? _this$_messageThreadO : false;
    }
  }, {
    key: "_ttl",
    get: function get() {
      var _this$_messageThreadO3, _this$_messageThreadO4;
      return (_this$_messageThreadO3 = (_this$_messageThreadO4 = this._messageThreadOptions) === null || _this$_messageThreadO4 === void 0 ? void 0 : _this$_messageThreadO4.ttl) !== null && _this$_messageThreadO3 !== void 0 ? _this$_messageThreadO3 : DEFAULT_TTL;
    }
  }, {
    key: "_recordCount",
    get: function get() {
      var _this$_messageThreadO5, _this$_messageThreadO6;
      return (_this$_messageThreadO5 = (_this$_messageThreadO6 = this._messageThreadOptions) === null || _this$_messageThreadO6 === void 0 ? void 0 : _this$_messageThreadO6.recordCount) !== null && _this$_messageThreadO5 !== void 0 ? _this$_messageThreadO5 : RECORD_COUNT;
    }
  }, {
    key: "hasCompanySiteSupport",
    get: function get() {
      var _this2 = this;
      // when have site support, also show the message thread
      return this._appFeatures.hasMessageThreadSiteSupported && this._messageSender.senderNumbersList.some(function (x) {
        return x.phoneNumber && _this2.isSharedSmsSenderNumber(x.phoneNumber);
      });
    }
  }, {
    key: "hasPermission",
    get: function get() {
      return Boolean(this._enable && this._appFeatures.hasReadMessagesPermission && this._appFeatures.hasMessageThreadsPermission && (this.smsRecipientCallQueues.length > 0 || this.hasCompanySiteSupport));
    }
  }, {
    key: "uniqueNumbers",
    get: function get() {
      return this.threadConversationsInfo.conversations.map(function (conversation) {
        var _conversation$corresp;
        return (_conversation$corresp = conversation.correspondents) === null || _conversation$corresp === void 0 ? void 0 : _conversation$corresp.map(function (correspondent) {
          return correspondent.phoneNumber;
        });
      }).flat().filter(Boolean);
    }
  }, {
    key: "conversationLogIds",
    get: function get() {
      var threadConversations = this.threadConversationsInfo.conversations;
      var threadLogIds = threadConversations !== null && threadConversations !== void 0 && threadConversations.length ? threadConversations.map(function (c) {
        return c.conversationLogId;
      }).filter(function (id) {
        return !!id;
      }) : [];
      return threadLogIds;
    }
  }, {
    key: "_setLoadingHistory",
    value: function _setLoadingHistory(loading) {
      this.historyLoading = loading;
    }
  }, {
    key: "_setHistoryLoadedThreadsPageNumber",
    value: function _setHistoryLoadedThreadsPageNumber(pageNumber) {
      this.historyLoaded.threadsPageNumber = pageNumber;
    }
  }, {
    key: "_setHistoryLoadedMessagesPageNumber",
    value: function _setHistoryLoadedMessagesPageNumber(pageNumber) {
      this.historyLoaded.messagesPageNumber = pageNumber;
    }
  }, {
    key: "_setHistoryLoadedThreadsTotalPages",
    value: function _setHistoryLoadedThreadsTotalPages(totalPages) {
      this.historyLoaded.threadsTotalPages = totalPages;
    }
  }, {
    key: "_setHistoryLoadedMessagesTotalPages",
    value: function _setHistoryLoadedMessagesTotalPages(totalPages) {
      this.historyLoaded.messagesTotalPages = totalPages;
    }
  }, {
    key: "smsRecipientCallQueues",
    get: function get() {
      var _this3 = this;
      if (!this._appFeatures.hasMessageThreadCallQueueSupported) {
        return [];
      }
      return this._grant.grants.reduce(function (acc, grant) {
        var queueInfo = _this3._callQueues.getQueue(grant.extension.id);
        if (queueInfo && _this3._isDepartmentGrant(grant) && _this3._isSmsRecipientGrant(grant)) {
          acc.push(queueInfo);
        }
        return acc;
      }, []);
    }
  }, {
    key: "isSharedSmsSenderNumber",
    value: function isSharedSmsSenderNumber(fromNumber) {
      var _this$_numberFormatte, _senderNumber$extensi;
      var formattedPhoneNumber = (_this$_numberFormatte = this._numberFormatter) === null || _this$_numberFormatte === void 0 ? void 0 : _this$_numberFormatte.formatNumber(fromNumber);
      var senderNumber = formattedPhoneNumber && this._messageSender.senderNumberMap.get(formattedPhoneNumber);
      if (!senderNumber) {
        return false;
      }
      var isMainCompanyGrant = !!senderNumber.usageType && (senderNumber.usageType === 'MainCompanyNumber' || senderNumber.usageType === 'CompanyNumber') &&
      // must have CompanyExtension mens able to send shared sms
      this._grant.hasCompanyExtensionGrant;
      var id = (_senderNumber$extensi = senderNumber.extension) === null || _senderNumber$extensi === void 0 ? void 0 : _senderNumber$extensi.id;
      return Boolean(
      // when be main company grant should have MessageThreadSiteSupported permission
      isMainCompanyGrant && this._appFeatures.hasMessageThreadSiteSupported ||
      // when be normal shared SMS recipient grant, should have hasMessageThreadCallQueueSupported
      id && this._grant.isSharedSmsRecipientGrant(id.toString()) && this._appFeatures.hasMessageThreadCallQueueSupported);
    }
  }, {
    key: "_isSmsRecipientGrant",
    value: function _isSmsRecipientGrant(grant) {
      return !!(grant.smsRecipient || grant.callQueueSmsRecipient);
    }
  }, {
    key: "_isDepartmentGrant",
    value: function _isDepartmentGrant(grant) {
      var extensionType = grant.extension.type;
      return !!(extensionType === 'Department');
    }
  }, {
    key: "listenMessageUpdate$",
    value: function listenMessageUpdate$() {
      var _this4 = this;
      var data$ = (0, _nextCore.fromWatchValue)(this, function () {
        return _this4.data.threads;
      });
      this._incomingRecord$.pipe((0, _rxjs.mergeMap)(function (record) {
        var threadId = record.threadId;
        return data$.pipe((0, _rxjs.filter)(function (threads) {
          var _threads$threadId;
          return Boolean((_threads$threadId = threads[threadId]) === null || _threads$threadId === void 0 ? void 0 : _threads$threadId.threadInfo);
        }), (0, _rxjs.take)(1), (0, _rxjs.map)(function () {
          return record;
        }),
        // if the thread info is not back in 10 seconds, we just emit the message
        (0, _rxjs.timeout)({
          first: 10000,
          "with": function _with() {
            _this4.logger.log('the record message not able to wait the info back more than 10s, skip this record', record);
            return _rxjs.EMPTY;
          }
        }));
      }), (0, _rxjs.tap)(function (record) {
        _this4.message$.next(_this4.convertThreadRecordToMessage(record));
      }), _nextCore.takeUntilAppDestroy).subscribe();
    }
  }, {
    key: "_setInputValue",
    value: function _setInputValue(threadId, value) {
      this.inputValueMap[threadId] = value;
    }
  }, {
    key: "_setAttachment",
    value: function _setAttachment(threadId, attachment) {
      var existedAttachments = this.attachmentMap[threadId];
      if (existedAttachments) {
        var attachments = existedAttachments.filter(function (file) {
          return file.name !== attachment.name;
        });
        attachments.push(attachment);
        this.attachmentMap[threadId] = attachments;
      } else {
        this.attachmentMap[threadId] = [attachment];
      }
    }
  }, {
    key: "_removeAttachment",
    value: function _removeAttachment(threadId, attachment) {
      var existedAttachments = this.attachmentMap[threadId];
      if (existedAttachments) {
        this.attachmentMap[threadId] = existedAttachments.filter(function (file) {
          return file.name !== attachment.name;
        });
      }
    }
  }, {
    key: "getConversationHashId",
    value: function getConversationHashId(threadId) {
      var _thread$threadInfo, _thread$threadInfo$gu, _thread$threadInfo2, _thread$threadInfo2$o;
      var thread = this.getThread(threadId);
      var guestPhone = thread === null || thread === void 0 ? void 0 : (_thread$threadInfo = thread.threadInfo) === null || _thread$threadInfo === void 0 ? void 0 : (_thread$threadInfo$gu = _thread$threadInfo.guestParty) === null || _thread$threadInfo$gu === void 0 ? void 0 : _thread$threadInfo$gu.phoneNumber;
      var ownerPhone = thread === null || thread === void 0 ? void 0 : (_thread$threadInfo2 = thread.threadInfo) === null || _thread$threadInfo2 === void 0 ? void 0 : (_thread$threadInfo2$o = _thread$threadInfo2.ownerParty) === null || _thread$threadInfo2$o === void 0 ? void 0 : _thread$threadInfo2$o.phoneNumber;
      if (!guestPhone || !ownerPhone) {
        return '';
      }
      return (0, _Conversations.buildConversationId)([guestPhone], ownerPhone);
    }
  }, {
    key: "setInputValue",
    value: function () {
      var _setInputValue2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(threadId, value) {
        var hashId;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              hashId = this.getConversationHashId(threadId);
              this._setInputValue(hashId, value);
            case 1:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function setInputValue(_x, _x2) {
        return _setInputValue2.apply(this, arguments);
      }
      return setInputValue;
    }()
  }, {
    key: "getInputValue",
    value: function getInputValue(threadId) {
      var hashId = this.getConversationHashId(threadId);

      // use hash as the input to ensure the input value can use same cache between threads
      return this.inputValueMap[hashId] || '';
    }
  }, {
    key: "getAttachments",
    value: function getAttachments(threadId) {
      var hashId = this.getConversationHashId(threadId);

      // use hash as the attachments cache to ensure the attachments can use same cache between threads
      return this.attachmentMap[hashId] || [];
    }
  }, {
    key: "addAttachments",
    value: function () {
      var _addAttachments = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(threadId, attachments) {
        var hashId, existedAttachments, totalAttachments, size, _iterator, _step, attachment;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              hashId = this.getConversationHashId(threadId);
              existedAttachments = this.attachmentMap[hashId] || [];
              totalAttachments = [].concat(_toConsumableArray(existedAttachments), _toConsumableArray(attachments));
              if (!(totalAttachments.length > 10)) {
                _context2.n = 1;
                break;
              }
              this._toast.danger({
                message: (0, _i18n.t)('attachmentCountLimitation'),
                ttl: 5000
              });
              return _context2.a(2);
            case 1:
              size = totalAttachments.reduce(function (prev, curr) {
                return prev + curr.size;
              }, 0);
              if (!(size > _MessageSender.ATTACHMENT_SIZE_LIMITATION)) {
                _context2.n = 2;
                break;
              }
              this._toast.danger({
                message: (0, _i18n.t)('attachmentSizeLimitation'),
                ttl: 5000
              });
              return _context2.a(2);
            case 2:
              _iterator = _createForOfIteratorHelper(attachments);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  attachment = _step.value;
                  this._setAttachment(hashId, attachment);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            case 3:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function addAttachments(_x3, _x4) {
        return _addAttachments.apply(this, arguments);
      }
      return addAttachments;
    }()
  }, {
    key: "removeAttachment",
    value: function () {
      var _removeAttachment2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(threadId, attachment) {
        var hashId;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              hashId = this.getConversationHashId(threadId);
              this._removeAttachment(hashId, attachment);
            case 1:
              return _context3.a(2);
          }
        }, _callee3, this);
      }));
      function removeAttachment(_x5, _x6) {
        return _removeAttachment2.apply(this, arguments);
      }
      return removeAttachment;
    }()
  }, {
    key: "resetInputValue",
    value: function resetInputValue(threadId) {
      var hashId = this.getConversationHashId(threadId);
      delete this.inputValueMap[hashId];
    }
  }, {
    key: "resetAttachments",
    value: function resetAttachments(threadId) {
      var hashId = this.getConversationHashId(threadId);
      delete this.attachmentMap[hashId];
    }
  }, {
    key: "resetData",
    value: function resetData() {
      this.data = {
        threads: {},
        messages: {},
        token: null,
        entriesToken: null
      };
      this.threadMetadataMap = {};
      this.inputValueMap = {};
      this.attachmentMap = {};
      this.historyLoaded = {
        threadsPageNumber: 1,
        messagesPageNumber: 1,
        threadsTotalPages: 0,
        messagesTotalPages: 0
      };
      this.historyLoading = false;
    }
  }, {
    key: "setUnreadCount",
    value: function setUnreadCount(threadId) {
      var _this5 = this;
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var group = this.getThreadGroup(threadId);
      group === null || group === void 0 ? void 0 : group.threads.forEach(function (_ref) {
        var threadId = _ref.threadId;
        var thread = _this5.getThread(threadId);
        if (thread) {
          thread.unreadCount = count;
        }
      });
    }
  }, {
    key: "getThreadMetadata",
    value: function getThreadMetadata(threadId) {
      return this.threadMetadataMap[threadId] || {};
    }
  }, {
    key: "updateThreadMetaData",
    value: function updateThreadMetaData(threadId, metadata) {
      var thread = this.getThread(threadId);
      if (thread) {
        this.threadMetadataMap[threadId] = _objectSpread(_objectSpread({}, this.threadMetadataMap[threadId]), metadata);
      }
    }
  }, {
    key: "reopenResolvedThread",
    value: function () {
      var _reopenResolvedThread = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(threadId) {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              this.updateThreadMetaData(threadId, {
                reopen: true
              });
            case 1:
              return _context4.a(2);
          }
        }, _callee4, this);
      }));
      function reopenResolvedThread(_x7) {
        return _reopenResolvedThread.apply(this, arguments);
      }
      return reopenResolvedThread;
    }()
  }, {
    key: "setThreadLoading",
    value: function setThreadLoading(threadId, loading) {
      this.updateThreadMetaData(threadId, {
        loading: loading
      });
    }
  }, {
    key: "syncEntriesSuccess",
    value: function syncEntriesSuccess(_ref2) {
      var _this6 = this;
      var syncToken = _ref2.syncToken,
        _ref2$records = _ref2.records,
        records = _ref2$records === void 0 ? [] : _ref2$records;
      var fromSync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (syncToken) {
        this.data.entriesToken = syncToken;
      }
      var needToSortThreads = new Set();

      // Add/update messages
      records.forEach(function (record) {
        if (!record.id) return;

        // Add message to its thread first to check if it's new
        var threadId = record.threadId;
        if (!threadId) return;
        if (!_this6.data.threads[threadId]) {
          _this6.data.threads[threadId] = {
            threadId: threadId,
            messages: [],
            unreadCount: 0
          };
        }
        var thread = _this6.data.threads[threadId];
        var isNewMessage = !_this6.data.messages[record.id];
        needToSortThreads.add(thread);

        // Add message to messages map
        _this6.data.messages[record.id] = record;

        // Add message id to thread if not already present
        if (isNewMessage) {
          thread.messages.push(record.id);

          // if not from sync, means that is history data, don't emit to message$
          if (!fromSync) return;

          // only new message will emit to message$
          _this6._incomingRecord$.next(record);
          var group = _this6.getThreadGroup(thread.threadId);
          if (group &&
          // when the user is on the thread page, ignore the unread count
          _this6._router.currentPath.includes("/conversations/".concat(group.latestThread.threadId))) {
            return;
          }
          var currentExtensionId = _this6._auth.ownerId;
          // Handle different record types for unread count management
          switch (record.recordType) {
            case 'AliveMessage':
              {
                var _threadInfo$assignee, _record$author;
                var threadInfo = thread.threadInfo;
                var assigneeExtensionId = threadInfo === null || threadInfo === void 0 ? void 0 : (_threadInfo$assignee = threadInfo.assignee) === null || _threadInfo$assignee === void 0 ? void 0 : _threadInfo$assignee.extensionId;

                // Increment unreadCount if thread is not assigned or assigned to current user
                if ((!assigneeExtensionId || assigneeExtensionId === currentExtensionId) &&
                // only non self message will increment unread count
                record.direction !== 'Outbound' && ((_record$author = record.author) === null || _record$author === void 0 ? void 0 : _record$author.extensionId) !== currentExtensionId) {
                  thread.unreadCount = (thread.unreadCount || 0) + 1;
                }
                break;
              }
            case 'ThreadAssignedHint':
              // when thread is assigned to other user, set unread count to 0, because the thread is not assigned to current user anymore
              if (record.assignee) {
                if (record.assignee.extensionId !== currentExtensionId) {
                  thread.unreadCount = 0;
                } else {
                  // when thread is assign to me and the user is not on the thread page, increment unread count
                  thread.unreadCount = (thread.unreadCount || 0) + 1;
                }
              }
              break;
            case 'ThreadResolvedHint':
              thread.unreadCount = 0;
              break;
            default:
              break;
          }
        }
      });

      // after save sync data success, sort the messages by lastModifiedTime to ensure the messages are in the correct order
      needToSortThreads.forEach(function (thread) {
        thread.messages.sort(function (a, b) {
          return _this6.convertTimestamp(_this6.data.messages[a].lastModifiedTime) - _this6.convertTimestamp(_this6.data.messages[b].lastModifiedTime);
        });
      });
    }
  }, {
    key: "syncThreadSuccess",
    value: function syncThreadSuccess(_ref3) {
      var _this7 = this;
      var syncToken = _ref3.syncToken,
        _ref3$records = _ref3.records,
        records = _ref3$records === void 0 ? [] : _ref3$records;
      if (syncToken) {
        this.data.token = syncToken;
      }

      // Update thread metadata
      records.forEach(function (record) {
        if (!record.id) return;
        var threadId = record.id;

        // Ensure thread exists
        if (!_this7.data.threads[threadId]) {
          _this7.data.threads[threadId] = {
            threadId: threadId,
            messages: [],
            unreadCount: 0
          };
        }

        // Update thread info metadata
        _this7.data.threads[threadId].threadInfo = record;
      });
    }

    /**
     * Convert timestamp from ISO string to number
     */
  }, {
    key: "convertTimestamp",
    value: function convertTimestamp(timestamp) {
      if (!timestamp) {
        return undefined;
      }
      var date = new Date(timestamp).getTime();
      return isNaN(date) ? undefined : date;
    }

    /**
     * Get subject text based on recordType using i18n
     */
  }, {
    key: "getSubjectByRecordType",
    value: function getSubjectByRecordType(record) {
      var _record$initiator;
      var recordType = record.recordType;
      switch (recordType) {
        case 'AliveMessage':
          return record.text || '';
        case 'ThreadCreatedHint':
          return (0, _i18n.t)('threadCreatedHint', {
            name: ((_record$initiator = record.initiator) === null || _record$initiator === void 0 ? void 0 : _record$initiator.name) || ''
          });
        case 'ThreadResolvedHint':
          {
            var _record$initiator2;
            // when not have initiator name, it means the thread is expired, resolved by server automatically
            if (!((_record$initiator2 = record.initiator) !== null && _record$initiator2 !== void 0 && _record$initiator2.name)) {
              return (0, _i18n.t)('threadExpiredHint');
            }
            return (0, _i18n.t)('threadResolvedHint', {
              name: record.initiator.name
            });
          }
        case 'ThreadAssignedHint':
          if (record.assignee) {
            var isOwner = record.assignee.extensionId === this._auth.ownerId;
            return isOwner ? (0, _i18n.t)('threadAssignedToOwnerHint') : (0, _i18n.t)('threadAssignedHint', {
              name: record.assignee.name
            });
          } else if (record.previousAssignee) {
            return (0, _i18n.t)('threadUnassignedHint');
          }
          return '';
        default:
          return '';
      }
    }

    /**
     * Convert MessageThreadRecord to Message format
     */
  }, {
    key: "convertThreadRecordToMessage",
    value: function convertThreadRecordToMessage(record) {
      var _threadInfo$ownerPart, _threadInfo$guestPart, _threadInfo$guestPart2, _threadInfo$ownerPart2;
      var creationTime = this.convertTimestamp(record.creationTime);
      var lastModifiedTime = this.convertTimestamp(record.lastModifiedTime);
      var isMessage = record.recordType === 'AliveMessage';
      var subject = this.getSubjectByRecordType(record);
      var thread = this.getThread(record.threadId);
      var threadInfo = thread === null || thread === void 0 ? void 0 : thread.threadInfo;
      var threadOwner = threadInfo === null || threadInfo === void 0 ? void 0 : threadInfo.owner;
      var threadAuthor = record.author;
      var direction = record.direction || 'Inbound';
      var isOutbound = direction === 'Outbound';

      // Convert attachments for message display
      var accessToken = this._auth.accessToken;
      var mmsAttachments = isMessage && record.attachments ? record.attachments.map(function (att) {
        return {
          id: parseInt(att.id, 10),
          uri: (0, _messageHelper.buildAttachmentUri)(att.contentUri, accessToken),
          contentType: att.contentType,
          fileName: att.filename,
          size: att.size,
          width: att.width,
          height: att.height
        };
      }) : [];
      return {
        id: record.id,
        conversationId: record.threadId,
        type: 'Text',
        // always set direction to outbound, because the thread ownerParty will be us
        direction: direction,
        readStatus: 'Read',
        creationTime: creationTime,
        lastModifiedTime: lastModifiedTime,
        subject: subject,
        messageType: isMessage ? 'message' : 'info',
        messageStatus: record.messageStatus || 'Received',
        availability: record.availability || 'Alive',
        uri: '',
        attachments: [],
        mmsAttachments: mmsAttachments,
        from: {
          phoneNumber: isOutbound ? threadInfo === null || threadInfo === void 0 ? void 0 : (_threadInfo$ownerPart = threadInfo.ownerParty) === null || _threadInfo$ownerPart === void 0 ? void 0 : _threadInfo$ownerPart.phoneNumber : threadInfo === null || threadInfo === void 0 ? void 0 : (_threadInfo$guestPart = threadInfo.guestParty) === null || _threadInfo$guestPart === void 0 ? void 0 : _threadInfo$guestPart.phoneNumber
        },
        to: [{
          phoneNumber: isOutbound ? threadInfo === null || threadInfo === void 0 ? void 0 : (_threadInfo$guestPart2 = threadInfo.guestParty) === null || _threadInfo$guestPart2 === void 0 ? void 0 : _threadInfo$guestPart2.phoneNumber : threadInfo === null || threadInfo === void 0 ? void 0 : (_threadInfo$ownerPart2 = threadInfo.ownerParty) === null || _threadInfo$ownerPart2 === void 0 ? void 0 : _threadInfo$ownerPart2.phoneNumber
        }],
        extensionId: '',
        priority: 'Normal',
        threadOwner: threadOwner,
        threadAuthor: threadAuthor
      };
    }

    /**
     * Convert a thread to FilteredConversation
     */
  }, {
    key: "convertThreadToConversation",
    value: function convertThreadToConversation(thread, messages, unreadCount) {
      var _this$_extensionInfo, _this$_contactMatcher2, _this$_conversationLo;
      var latestMessage = messages[messages.length - 1];
      var threadInfo = thread.threadInfo;

      // Use getNumbersFromMessage to get self and correspondents, same as ConversationsBase
      // Create a minimal Message-like object for getNumbersFromMessage
      var extensionNumber = (_this$_extensionInfo = this._extensionInfo) === null || _this$_extensionInfo === void 0 ? void 0 : _this$_extensionInfo.extensionNumber;

      // if the latest message is a deleted hint, don't show the conversation, that means the conversation is deleted
      if (!latestMessage || latestMessage.recordType === 'ThreadDeletedHint' || !threadInfo || !extensionNumber) {
        return null;
      }

      // Use threadId as conversationId since threads represent shared conversations
      var conversationId = thread.threadId;
      var creationTime = this.convertTimestamp(latestMessage.lastModifiedTime || latestMessage.creationTime);
      var lastModifiedTime = this.convertTimestamp(latestMessage.lastModifiedTime);
      var latestTextMessage = latestMessage.recordType === 'AliveMessage' ? latestMessage : (0, _ramda.findLast)(function (msg) {
        return (msg === null || msg === void 0 ? void 0 : msg.recordType) === 'AliveMessage';
      }, messages) || latestMessage;
      if (!latestMessage) return null;
      var correspondents = [];
      var self = undefined;
      var threadOwner = threadInfo === null || threadInfo === void 0 ? void 0 : threadInfo.owner;
      var from = threadInfo.ownerParty;
      var to = threadInfo.guestParty;
      correspondents = [{
        phoneNumber: to === null || to === void 0 ? void 0 : to.phoneNumber
      }];
      self = from;

      // Get matches using the same approach as ConversationsBase
      var contactMapping = ((_this$_contactMatcher2 = this._contactMatcher) === null || _this$_contactMatcher2 === void 0 ? void 0 : _this$_contactMatcher2.dataMapping) || {};
      var loggingMap = ((_this$_conversationLo = this._conversationLogger) === null || _this$_conversationLo === void 0 ? void 0 : _this$_conversationLo.loggingMap) || {};
      var selfNumber = self && (self.phoneNumber || self.extensionNumber);
      var selfMatches = selfNumber && contactMapping[selfNumber] || [];
      var correspondentMatchesList = [];
      var correspondentMatches = correspondents.reduce(function (acc, curr) {
        var phoneNumber = curr.phoneNumber || curr.extensionNumber;
        if (phoneNumber) {
          correspondentMatchesList.push(contactMapping[phoneNumber] || []);
        }
        return phoneNumber && contactMapping[phoneNumber] && contactMapping[phoneNumber].length ? acc.concat(contactMapping[phoneNumber]) : acc;
      }, []);

      // TODO: log still not supported for thread
      var conversationLogId = conversationId;
      // this._conversationLogger && messageLike
      //   ? this._conversationLogger.getConversationLogId(messageLike)
      //   : null;
      var isLogging = !!(conversationLogId && loggingMap[conversationLogId]);
      var conversationMatches = correspondentMatchesList[0] || [];
      // const conversationLogMapping = this._conversationLogger?.dataMapping || {};
      // conversationLogMapping[conversationLogId!] || [];

      // Convert attachments from latest message
      var accessToken = this._auth.accessToken;
      var mmsAttachments = latestTextMessage.recordType === 'AliveMessage' && latestTextMessage.attachments ? latestTextMessage.attachments.map(function (att) {
        return {
          id: parseInt(att.id, 10),
          uri: (0, _messageHelper.buildAttachmentUri)(att.contentUri, accessToken),
          contentType: att.contentType,
          fileName: att.filename,
          size: att.size,
          width: att.width,
          height: att.height
        };
      }) : [];

      // Build the conversation object matching FilteredConversation interface
      var conversation = {
        // Basic Message fields
        id: latestMessage.id,
        conversationId: conversationId,
        type: 'Text',
        // always set direction to outbound, because the thread ownerParty will be us
        direction: 'Outbound',
        readStatus: 'Read',
        creationTime: creationTime,
        lastModifiedTime: lastModifiedTime,
        subject: latestTextMessage.text || '',
        messageStatus: latestMessage.messageStatus || 'Received',
        availability: latestMessage.availability || 'Alive',
        uri: '',
        attachments: [],
        from: from,
        to: [to],
        extensionId: '',
        priority: 'Normal',
        // FormattedConversation fields
        unreadCounts: unreadCount !== null && unreadCount !== void 0 ? unreadCount : 0,
        self: self,
        correspondents: correspondents,
        mmsAttachments: mmsAttachments,
        conversationLogId: conversationLogId,
        isLogging: isLogging,
        correspondentMatches: correspondentMatches,
        correspondentMatchesList: correspondentMatchesList,
        conversationMatches: conversationMatches,
        selfMatches: selfMatches,
        threadOwner: threadOwner
      };
      return conversation;
    }

    /**
     * Get threadConversations as FilteredConversation[]
     */
  }, {
    key: "threadConversationsInfo",
    get: function get() {
      var _this8 = this;
      var map = new Map();
      var threads = Array.from(this.groupedThreadsMap.values()).map(function (group) {
        var conversation = _this8.convertThreadToConversation(group.latestThread, group.threadRecords, group.unreadCount);
        if (conversation) {
          // set each thread to the map let the target thread can find the belong conversation
          group.threads.forEach(function (thread) {
            map.set(thread.threadId, conversation);
          });
        }
        return conversation;
      });
      var conversations = threads.filter(function (con) {
        return con !== null;
      }).sort(function (a, b) {
        if (!a.lastModifiedTime || !b.lastModifiedTime) return 0;
        return b.lastModifiedTime - a.lastModifiedTime;
      });
      return {
        conversations: conversations,
        map: map
      };
    }
  }, {
    key: "getThread",
    value: function getThread(threadId) {
      return this.data.threads[threadId];
    }

    /**
     * Get threads grouped by phone number hash (ownerParty + guestParty)
     */
  }, {
    key: "groupedThreadsMap",
    get: function get() {
      var _this9 = this;
      var groupsMap = new Map();
      Object.values(this.data.threads).forEach(function (thread) {
        var _thread$threadInfo3, _item$latestThread$th, _thread$unreadCount2;
        var threadInfo = thread.threadInfo;
        var hashId = _this9.getConversationHashId(thread.threadId);
        if (!hashId) {
          // Skip threads without valid phone numbers
          return;
        }
        if (!groupsMap.has(hashId)) {
          var _thread$unreadCount;
          groupsMap.set(hashId, {
            id: hashId,
            threads: [],
            threadRecords: [],
            messages: [],
            latestThread: thread,
            unreadCount: (_thread$unreadCount = thread.unreadCount) !== null && _thread$unreadCount !== void 0 ? _thread$unreadCount : 0
          });
        }
        var item = groupsMap.get(hashId);
        item.threads.push(thread);
        var records = thread.messages.map(function (msgId) {
          return _this9.data.messages[msgId];
        }).filter(function (record) {
          return !!record;
        });
        if (records.length > 0) {
          var _item$threadRecords;
          var firstRecord = records[0];

          // when this is history data, which means already resolved, add a fake ThreadCreatedHint to the beginning, if there is no ThreadCreatedHint
          if ((threadInfo === null || threadInfo === void 0 ? void 0 : threadInfo.status) === 'Resolved' && firstRecord.recordType !== 'ThreadCreatedHint') {
            var startTime = new Date(new Date(firstRecord.lastModifiedTime).getTime() - 1).toISOString();
            // Add fake AliveMessage as anchor at the beginning
            var startAnchor = {
              id: "anchor-start-".concat(thread.threadId),
              threadId: thread.threadId,
              recordType: 'ThreadCreatedHint',
              lastModifiedTime: startTime,
              creationTime: startTime,
              availability: 'Alive'
            };
            item.threadRecords.push(startAnchor);
          }
          (_item$threadRecords = item.threadRecords).push.apply(_item$threadRecords, _toConsumableArray(records));
          var lastRecord = records[records.length - 1];

          // when this is history data, which means already resolved, add a fake ThreadResolvedHint to the end, if there is no ThreadResolvedHint or ThreadDeletedHint
          if ((threadInfo === null || threadInfo === void 0 ? void 0 : threadInfo.status) === 'Resolved' && lastRecord.recordType !== 'ThreadResolvedHint' && lastRecord.recordType !== 'ThreadDeletedHint') {
            var endTime = new Date(new Date(lastRecord.lastModifiedTime).getTime() + 1).toISOString();
            // Add fake AliveMessage as anchor at the end
            var endAnchor = {
              id: "anchor-end-".concat(thread.threadId),
              threadId: thread.threadId,
              recordType: 'ThreadResolvedHint',
              initiator:
              // when be expired, not set initiator to make that show as expired hint
              threadInfo.statusReason === 'ThreadExpired' ? undefined : {
                extensionId: 'unknown',
                name: (0, _i18n.t)('someone')
              },
              lastModifiedTime: endTime,
              creationTime: endTime,
              availability: 'Alive'
            };
            item.threadRecords.push(endAnchor);
          }
        }
        var lastModifiedTime = (_thread$threadInfo3 = thread.threadInfo) === null || _thread$threadInfo3 === void 0 ? void 0 : _thread$threadInfo3.lastModifiedTime;
        if (lastModifiedTime && _this9.convertTimestamp(lastModifiedTime) > _this9.convertTimestamp((_item$latestThread$th = item.latestThread.threadInfo) === null || _item$latestThread$th === void 0 ? void 0 : _item$latestThread$th.lastModifiedTime)) {
          item.latestThread = thread;
        }
        item.unreadCount += (_thread$unreadCount2 = thread.unreadCount) !== null && _thread$unreadCount2 !== void 0 ? _thread$unreadCount2 : 0;
      });
      groupsMap.forEach(function (item) {
        var _item$messages;
        item.threadRecords.sort(function (a, b) {
          return _this9.convertTimestamp(a.lastModifiedTime) - _this9.convertTimestamp(b.lastModifiedTime);
        });

        // push the same order of threadRecords
        (_item$messages = item.messages).push.apply(_item$messages, _toConsumableArray(item.threadRecords.map(function (record) {
          return _this9.convertThreadRecordToMessage(record);
        })));
      });
      return groupsMap;
    }

    // Local unread count including thread messages
  }, {
    key: "threadUnreadCount",
    get: function get() {
      return Object.values(this.data.threads).reduce(function (total, thread) {
        var _thread$unreadCount3;
        return total + ((_thread$unreadCount3 = thread === null || thread === void 0 ? void 0 : thread.unreadCount) !== null && _thread$unreadCount3 !== void 0 ? _thread$unreadCount3 : 0);
      }, 0);
    }
    /**
     * Get conversation by threadId
     */
  }, {
    key: "getThreadConversation",
    value: function getThreadConversation(threadId) {
      return this.threadConversationsInfo.map.get(threadId);
    }

    /**
     * Get messages for a thread by threadId
     */
  }, {
    key: "getThreadMessages",
    value: function getThreadMessages(threadId) {
      var thread = this.getThread(threadId);
      if (!thread) {
        return [];
      }
      var group = this.getThreadGroup(threadId);
      return (group === null || group === void 0 ? void 0 : group.messages) || [];
    }
  }, {
    key: "getThreadGroup",
    value: function getThreadGroup(threadId) {
      var hashId = this.getConversationHashId(threadId);
      var groupedMessages = this.groupedThreadsMap.get(hashId);
      return groupedMessages;
    }
  }, {
    key: "getLatestThreadByParties",
    value: function getLatestThreadByParties(fromNumber, toNumber) {
      var _this$groupedThreadsM;
      if (!fromNumber || !toNumber) {
        return undefined;
      }
      var hashId = (0, _Conversations.buildConversationId)([toNumber], fromNumber);
      return (_this$groupedThreadsM = this.groupedThreadsMap.get(hashId)) === null || _this$groupedThreadsM === void 0 ? void 0 : _this$groupedThreadsM.latestThread;
    }
  }, {
    key: "getLatestThreadIdByParties",
    value: function getLatestThreadIdByParties(fromNumber, toNumber) {
      var _this$getLatestThread;
      return (_this$getLatestThread = this.getLatestThreadByParties(fromNumber, toNumber)) === null || _this$getLatestThread === void 0 ? void 0 : _this$getLatestThread.threadId;
    }
  }, {
    key: "getThreadLogMessages",
    value: function getThreadLogMessages(threadId) {
      var messages = this.getThreadMessages(threadId);
      if (!messages) {
        return [];
      }
      return messages === null || messages === void 0 ? void 0 : messages.filter(function (message) {
        return message.conversationId === threadId && message.messageType === 'message';
      });
    }
    /**
     * Check if a conversationId is a threadId
     */
  }, {
    key: "isThreadId",
    value: function isThreadId(conversationId) {
      return !!this.data.threads[conversationId];
    }
  }, {
    key: "token",
    get: function get() {
      return this.data.token;
    }
  }, {
    key: "entriesToken",
    get: function get() {
      return this.data.entriesToken;
    }
  }, {
    key: "initListener",
    value: function initListener() {
      var _this0 = this;
      var _subscription = this._subscription;
      if (!_subscription) return;
      var messageThreadSyncEvent$ = _subscription.fromMessage$(/\/message-threads\/sync/).pipe((0, _rxjs.tap)(function () {
        _this0.logger.log('thread sync event detected');
      }));
      var messageThreadEntriesSyncEvent$ = _subscription.fromMessage$(/\/message-threads\/entries\/sync/).pipe((0, _rxjs.tap)(function () {
        _this0.logger.log('entries sync event detected');
      }));
      var messageThreadChanges$ = (0, _rxjs.merge)(messageThreadSyncEvent$, messageThreadEntriesSyncEvent$, this.manualSync$,
      // a polling to avoid some miss server side push event
      (0, _rxjs.interval)(this._ttl)).pipe(
      // share one interval to trigger both polling together
      (0, _rxjs.share)(),
      // to avoid too many sync events, because the events may trigger together in a short time, use debounce to avoid too many sync events
      (0, _rxjs.debounceTime)(500), (0, _rxjs.startWith)(null));
      var messageThreadEvent$ = messageThreadChanges$.pipe((0, _rxjs.map)(function () {
        return _this0.token;
      }),
      // use concatMap to ensure the sync api called one by one
      (0, _rxjs.concatMap)(function (token) {
        return (0, _rxjs.defer)(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
          return _regenerator().w(function (_context5) {
            while (1) switch (_context5.n) {
              case 0:
                if (token) {
                  _context5.n = 2;
                  break;
                }
                _this0.logger.log('thread info fsync start');
                _context5.n = 1;
                return _this0._threadFSync();
              case 1:
                _this0.logger.log('thread info fsync done');
                _context5.n = 4;
                break;
              case 2:
                _this0.logger.log('thread info isync start');
                _context5.n = 3;
                return _this0._threadISync();
              case 3:
                _this0.logger.log('thread info isync done');
              case 4:
                return _context5.a(2);
            }
          }, _callee5);
        }))).pipe((0, _rxjs.retry)({
          count: 3,
          delay: function delay(err) {
            _this0.logger.error('thread sync error, retry after 1s', err);
            // error: ApiError

            //     const errResp = error.response;
            //     let errorJson: SendErrorResponse;
            return (0, _rxjs.timer)(1000);
          }
        }), (0, _rxjs.catchError)(function (error) {
          _this0.logger.error('thread sync error', error);
          return _rxjs.EMPTY;
        }));
      }), (0, _rxjs.tap)(function () {
        _this0.syncDone$.next('thread');
      }));
      var messageThreadEntriesEvent$ = messageThreadChanges$.pipe((0, _rxjs.map)(function () {
        return _this0.entriesToken;
      }),
      // use concatMap to ensure the sync api called one by one
      (0, _rxjs.concatMap)(function (token) {
        return (0, _rxjs.defer)(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
          return _regenerator().w(function (_context6) {
            while (1) switch (_context6.n) {
              case 0:
                if (token) {
                  _context6.n = 2;
                  break;
                }
                _this0.logger.log('entries fsync start');
                _context6.n = 1;
                return _this0._entriesFSync();
              case 1:
                _this0.logger.log('entries fsync done');
                _context6.n = 4;
                break;
              case 2:
                _this0.logger.log('entries isync start');
                _context6.n = 3;
                return _this0._entriesISync();
              case 3:
                _this0.logger.log('entries isync done');
              case 4:
                return _context6.a(2);
            }
          }, _callee6);
        }))).pipe((0, _rxjs.retry)({
          count: 3,
          delay: function delay(err) {
            _this0.logger.error('entries sync error, retry after 1s', err);
            return (0, _rxjs.timer)(1000);
          }
        }), (0, _rxjs.catchError)(function (error) {
          _this0.logger.error('entries sync error', error);
          return _rxjs.EMPTY;
        }));
      }), (0, _rxjs.tap)(function () {
        _this0.syncDone$.next('entries');
      }));
      var smsRecipientCallQueuesIdChange$ = (0, _nextCore.fromWatchValue)(this, function () {
        return _this0.smsRecipientCallQueues;
      }).pipe((0, _rxjs.map)(function (queues) {
        return queues.map(function (queue) {
          return queue.id;
        }).join('_');
      }), (0, _rxjs.distinctUntilChanged)(),
      // skip the first value, only trigger when change
      (0, _rxjs.skip)(1));
      var uniqueNumbers$ = (0, _nextCore.fromWatchValue)(this, function () {
        return _this0.uniqueNumbers;
      }).pipe((0, _rxjs.filter)(function (numbers) {
        return numbers.length > 0;
      }), (0, _rxjs.distinctUntilChanged)(function (a, b) {
        return (0, _isEqual["default"])(a, b);
      }), (0, _rxjs.tap)(function () {
        var _this0$_contactMatche;
        (_this0$_contactMatche = _this0._contactMatcher) === null || _this0$_contactMatche === void 0 ? void 0 : _this0$_contactMatche.triggerMatch();
      }));
      this.rehydrated$.pipe((0, _rxjs.switchMap)(function () {
        return _subscription.readyState$;
      }), (0, _rxjs.switchMap)(function (ready) {
        return ready ? _this0.hasPermission$.pipe((0, _rxjs.startWith)(false), (0, _rxjs.pairwise)(), (0, _rxjs.tap)(function (_ref6) {
          var _ref7 = _slicedToArray(_ref6, 2),
            prev = _ref7[0],
            current = _ref7[1];
          if (prev && !current) {
            _this0.logger.log('from permission become no permission, reset data');
            _this0.resetData();
          }
        }), (0, _rxjs.map)(function (_ref8) {
          var _ref9 = _slicedToArray(_ref8, 2),
            current = _ref9[1];
          return current;
        })) : _rxjs.EMPTY;
      }), (0, _rxjs.switchMap)(function (hasPermission) {
        return hasPermission ? (0, _rxjs.merge)(smsRecipientCallQueuesIdChange$.pipe((0, _rxjs.tap)(function (smsRecipientCallQueuesIdChange) {
          _this0.logger.log('queue ids changed, reset data to ensure the user have correct data', smsRecipientCallQueuesIdChange);
          _this0.resetData();
        }), (0, _rxjs.startWith)(null), (0, _rxjs.switchMap)(function () {
          return (0, _rxjs.merge)(messageThreadEvent$, messageThreadEntriesEvent$, (0, _rxjs.defer)(function () {
            return _this0._loadInitialHistory();
          }));
        }), (0, _rxjs.takeUntil)(_this0._auth.beforeLogout$)), uniqueNumbers$) : _rxjs.EMPTY;
      }), _nextCore.takeUntilAppDestroy).subscribe();
    }

    /**
     * Load initial historical data using listThreads and listThreadMessages
     * Loads the first page (which contains the latest data) with perPage: 100
     */
  }, {
    key: "_loadInitialHistory",
    value: (function () {
      var _loadInitialHistory2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var firstThreadPage, totalThreadPages, firstMessagePage, totalMessagePages, _t;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              if (!(this.historyLoaded.threadsTotalPages > 0)) {
                _context7.n = 1;
                break;
              }
              this.logger.log('Initial history data already fetched, skipping');
              return _context7.a(2);
            case 1:
              this._setLoadingHistory(true);
              _context7.p = 2;
              this.logger.log('Loading initial history data');

              // Load the first page of threads; paging info includes totalPages directly
              _context7.n = 3;
              return this.listThreads({
                perPage: THREADS_PER_PAGE,
                pageNumber: 1
              });
            case 3:
              firstThreadPage = _context7.v;
              totalThreadPages = firstThreadPage.paging.totalPages || 0;
              if (!(totalThreadPages === 0 || firstThreadPage.paging.totalElements === 0)) {
                _context7.n = 4;
                break;
              }
              this.logger.log('No threads found, skipping history load');
              return _context7.a(2);
            case 4:
              this._setHistoryLoadedThreadsPageNumber(1);
              this._setHistoryLoadedThreadsTotalPages(totalThreadPages);
              this.logger.log("Loaded ".concat(firstThreadPage.records.length, " threads from page 1 (total pages: ").concat(totalThreadPages, ")"));

              // Load the first page of messages; paging info includes totalPages directly
              _context7.n = 5;
              return this.listThreadMessages({
                perPage: MESSAGES_PER_PAGE,
                pageNumber: 1
              });
            case 5:
              firstMessagePage = _context7.v;
              totalMessagePages = firstMessagePage.paging.totalPages || 0;
              if (!(totalMessagePages === 0 || firstMessagePage.paging.totalElements === 0)) {
                _context7.n = 6;
                break;
              }
              this.logger.log('No messages found, skipping message load');
              return _context7.a(2);
            case 6:
              this._setHistoryLoadedMessagesPageNumber(1);
              this._setHistoryLoadedMessagesTotalPages(totalMessagePages);
              this.logger.log("Loaded ".concat(firstMessagePage.records.length, " messages from page 1 (total pages: ").concat(totalMessagePages, ")"));
              this.logger.log('Initial history data loaded successfully');
              _context7.n = 8;
              break;
            case 7:
              _context7.p = 7;
              _t = _context7.v;
              this.logger.error('Failed to load initial history', _t);
              // Don't throw - allow app to continue with sync mechanism
            case 8:
              _context7.p = 8;
              this._setLoadingHistory(false);
              return _context7.f(8);
            case 9:
              return _context7.a(2);
          }
        }, _callee7, this, [[2, 7, 8, 9]]);
      }));
      function _loadInitialHistory() {
        return _loadInitialHistory2.apply(this, arguments);
      }
      return _loadInitialHistory;
    }())
  }, {
    key: "_entriesFSync",
    value: function () {
      var _entriesFSync2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var _data$syncInfo, params, queryString, res, data, _t2;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              _context8.p = 0;
              params = new URLSearchParams();
              params.append('syncType', 'FSync');
              params.append('recordCount', this._recordCount.toString());
              params.append('messageType', 'SMS');
              params.append('scope', 'Accessible');
              queryString = params.toString();
              _context8.n = 1;
              return this._client.service.platform().get("/restapi/v1.0/account/~/message-threads/entries/sync?".concat(queryString));
            case 1:
              res = _context8.v;
              _context8.n = 2;
              return res.json();
            case 2:
              data = _context8.v;
              this.syncEntriesSuccess({
                records: data.records,
                syncToken: (_data$syncInfo = data.syncInfo) === null || _data$syncInfo === void 0 ? void 0 : _data$syncInfo.syncToken
              });
              _context8.n = 4;
              break;
            case 3:
              _context8.p = 3;
              _t2 = _context8.v;
              this.logger.error('_entriesFSync error', _t2);
              throw _t2;
            case 4:
              return _context8.a(2);
          }
        }, _callee8, this, [[0, 3]]);
      }));
      function _entriesFSync() {
        return _entriesFSync2.apply(this, arguments);
      }
      return _entriesFSync;
    }()
  }, {
    key: "_entriesISync",
    value: function () {
      var _entriesISync2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var _data$syncInfo2, params, queryString, res, data, _error$response, _errorData$errors, _errorData$errors$, errorData, errorCode, _t3, _t4, _t5;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              _context9.p = 0;
              params = new URLSearchParams();
              params.append('syncType', 'ISync');
              params.append('syncToken', this.entriesToken);
              queryString = params.toString();
              _context9.n = 1;
              return this._client.service.platform().get("/restapi/v1.0/account/~/message-threads/entries/sync?".concat(queryString));
            case 1:
              res = _context9.v;
              _context9.n = 2;
              return res.json();
            case 2:
              data = _context9.v;
              this.syncEntriesSuccess({
                records: data.records,
                syncToken: (_data$syncInfo2 = data.syncInfo) === null || _data$syncInfo2 === void 0 ? void 0 : _data$syncInfo2.syncToken
              });
              _context9.n = 12;
              break;
            case 3:
              _context9.p = 3;
              _t3 = _context9.v;
              this.logger.error('_entriesISync error', _t3);
              _context9.p = 4;
              if (!(((_error$response = _t3.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 400)) {
                _context9.n = 9;
                break;
              }
              _context9.n = 5;
              return _t3.response.clone().json();
            case 5:
              errorData = _context9.v;
              errorCode = (_errorData$errors = errorData.errors) === null || _errorData$errors === void 0 ? void 0 : (_errorData$errors$ = _errorData$errors[0]) === null || _errorData$errors$ === void 0 ? void 0 : _errorData$errors$.errorCode;
              _t4 = errorCode;
              _context9.n = _t4 === 'MSG-411' ? 6 : _t4 === 'CMN-101' ? 6 : 8;
              break;
            case 6:
              this.logger.error("entriesISync ".concat(errorCode, " error"), errorData);
              _context9.n = 7;
              return this._entriesFSync();
            case 7:
              return _context9.a(3, 9);
            case 8:
              return _context9.a(3, 9);
            case 9:
              _context9.n = 11;
              break;
            case 10:
              _context9.p = 10;
              _t5 = _context9.v;
              this.logger.error('full sync error', _t5);
            case 11:
              throw _t3;
            case 12:
              return _context9.a(2);
          }
        }, _callee9, this, [[4, 10], [0, 3]]);
      }));
      function _entriesISync() {
        return _entriesISync2.apply(this, arguments);
      }
      return _entriesISync;
    }()
  }, {
    key: "_threadFSync",
    value: function () {
      var _threadFSync2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
        var _data$syncInfo3, params, queryString, res, data, _t6;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.p = _context0.n) {
            case 0:
              _context0.p = 0;
              params = new URLSearchParams();
              params.append('syncType', 'FSync');
              params.append('recordCount', this._recordCount.toString());
              queryString = params.toString();
              _context0.n = 1;
              return this._client.service.platform().get("/restapi/v1.0/account/~/message-threads/sync?".concat(queryString));
            case 1:
              res = _context0.v;
              _context0.n = 2;
              return res.json();
            case 2:
              data = _context0.v;
              this.syncThreadSuccess({
                records: data.records,
                syncToken: (_data$syncInfo3 = data.syncInfo) === null || _data$syncInfo3 === void 0 ? void 0 : _data$syncInfo3.syncToken
              });
              _context0.n = 4;
              break;
            case 3:
              _context0.p = 3;
              _t6 = _context0.v;
              this.logger.error('_threadFSync error', _t6);
              throw _t6;
            case 4:
              return _context0.a(2);
          }
        }, _callee0, this, [[0, 3]]);
      }));
      function _threadFSync() {
        return _threadFSync2.apply(this, arguments);
      }
      return _threadFSync;
    }()
  }, {
    key: "_threadISync",
    value: function () {
      var _threadISync2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
        var _data$syncInfo4, params, queryString, res, data, _error$response2, _errorData$errors2, _errorData$errors2$, errorData, errorCode, _t7, _t8, _t9;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.p = _context1.n) {
            case 0:
              _context1.p = 0;
              params = new URLSearchParams();
              params.append('syncType', 'ISync');
              params.append('syncToken', this.token);
              queryString = params.toString();
              _context1.n = 1;
              return this._client.service.platform().get("/restapi/v1.0/account/~/message-threads/sync?".concat(queryString));
            case 1:
              res = _context1.v;
              _context1.n = 2;
              return res.json();
            case 2:
              data = _context1.v;
              this.syncThreadSuccess({
                records: data.records,
                syncToken: (_data$syncInfo4 = data.syncInfo) === null || _data$syncInfo4 === void 0 ? void 0 : _data$syncInfo4.syncToken
              });
              _context1.n = 12;
              break;
            case 3:
              _context1.p = 3;
              _t7 = _context1.v;
              this.logger.error('_threadISync error', _t7);
              _context1.p = 4;
              if (!(((_error$response2 = _t7.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.status) === 400)) {
                _context1.n = 9;
                break;
              }
              _context1.n = 5;
              return _t7.response.clone().json();
            case 5:
              errorData = _context1.v;
              errorCode = (_errorData$errors2 = errorData.errors) === null || _errorData$errors2 === void 0 ? void 0 : (_errorData$errors2$ = _errorData$errors2[0]) === null || _errorData$errors2$ === void 0 ? void 0 : _errorData$errors2$.errorCode;
              _t8 = errorCode;
              _context1.n = _t8 === 'MSG-411' ? 6 : _t8 === 'CMN-101' ? 6 : 8;
              break;
            case 6:
              this.logger.error("threadISync ".concat(errorCode, " error"), errorData);
              _context1.n = 7;
              return this._threadFSync();
            case 7:
              return _context1.a(3, 9);
            case 8:
              this.logger.error('threadISync non expect', _t7);
              return _context1.a(3, 9);
            case 9:
              _context1.n = 11;
              break;
            case 10:
              _context1.p = 10;
              _t9 = _context1.v;
            case 11:
              throw _t7;
            case 12:
              return _context1.a(2);
          }
        }, _callee1, this, [[4, 10], [0, 3]]);
      }));
      function _threadISync() {
        return _threadISync2.apply(this, arguments);
      }
      return _threadISync;
    }()
    /**
     * Resolve a thread (set status to Resolved)
     */
  }, {
    key: "resolveThread",
    value: (function () {
      var _resolveThread = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(threadId) {
        var res, _t0;
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.p = _context10.n) {
            case 0:
              this.setThreadLoading(threadId, true);
              _context10.p = 1;
              _context10.n = 2;
              return this._client.service.platform().post("/restapi/v1.0/account/~/message-threads/".concat(threadId, "/resolve"));
            case 2:
              res = _context10.v;
              _context10.n = 3;
              return this.emitUpdateAndWaitSyncDone();
            case 3:
              _context10.n = 4;
              return res.json();
            case 4:
              return _context10.a(2, _context10.v);
            case 5:
              _context10.p = 5;
              _t0 = _context10.v;
              this.logger.error('resolveThread error', _t0);
              throw _t0;
            case 6:
              _context10.p = 6;
              this.setThreadLoading(threadId, false);
              return _context10.f(6);
            case 7:
              return _context10.a(2);
          }
        }, _callee10, this, [[1, 5, 6, 7]]);
      }));
      function resolveThread(_x8) {
        return _resolveThread.apply(this, arguments);
      }
      return resolveThread;
    }()
    /**
     * Assign or unassign a thread
     */
    )
  }, {
    key: "assignThread",
    value: (function () {
      var _assignThread = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(threadId, assigneeExtensionId) {
        var body, res, _t1;
        return _regenerator().w(function (_context11) {
          while (1) switch (_context11.p = _context11.n) {
            case 0:
              this.setThreadLoading(threadId, true);
              _context11.p = 1;
              body = {
                assignee: assigneeExtensionId ? {
                  extensionId: assigneeExtensionId
                } : null
              };
              _context11.n = 2;
              return this._client.service.platform().post("/restapi/v1.0/account/~/message-threads/".concat(threadId, "/assign"), body);
            case 2:
              res = _context11.v;
              _context11.n = 3;
              return this.emitUpdateAndWaitSyncDone();
            case 3:
              _context11.n = 4;
              return res.json();
            case 4:
              return _context11.a(2, _context11.v);
            case 5:
              _context11.p = 5;
              _t1 = _context11.v;
              this.logger.error('assignThread error', _t1);
              throw _t1;
            case 6:
              _context11.p = 6;
              this.setThreadLoading(threadId, false);
              return _context11.f(6);
            case 7:
              return _context11.a(2);
          }
        }, _callee11, this, [[1, 5, 6, 7]]);
      }));
      function assignThread(_x9, _x0) {
        return _assignThread.apply(this, arguments);
      }
      return assignThread;
    }()
    /**
     * Unassign a thread (set assignee to null)
     */
    )
  }, {
    key: "unassignThread",
    value: (function () {
      var _unassignThread = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(threadId) {
        return _regenerator().w(function (_context12) {
          while (1) switch (_context12.n) {
            case 0:
              return _context12.a(2, this.assignThread(threadId, null));
          }
        }, _callee12, this);
      }));
      function unassignThread(_x1) {
        return _unassignThread.apply(this, arguments);
      }
      return unassignThread;
    }()
    /**
     * List message threads
     */
    )
  }, {
    key: "listThreads",
    value: (function () {
      var _listThreads = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
        var options,
          saveSync,
          _options$ownerExtensi,
          _options$availability,
          params,
          queryString,
          res,
          data,
          _args13 = arguments,
          _t10;
        return _regenerator().w(function (_context13) {
          while (1) switch (_context13.p = _context13.n) {
            case 0:
              options = _args13.length > 0 && _args13[0] !== undefined ? _args13[0] : {};
              saveSync = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : true;
              _context13.p = 1;
              params = new URLSearchParams();
              if (options.threadStatus) {
                params.append('threadStatus', options.threadStatus);
              }
              if ((_options$ownerExtensi = options.ownerExtensionIds) !== null && _options$ownerExtensi !== void 0 && _options$ownerExtensi.length) {
                options.ownerExtensionIds.forEach(function (id) {
                  params.append('ownerExtensionIds', id);
                });
              }
              if (options.ownerPhoneNumber) {
                params.append('ownerPhoneNumber', options.ownerPhoneNumber);
              }
              if (options.guestPhoneNumber) {
                params.append('guestPhoneNumber', options.guestPhoneNumber);
              }
              if ((_options$availability = options.availability) !== null && _options$availability !== void 0 && _options$availability.length) {
                options.availability.forEach(function (avail) {
                  params.append('availability', avail);
                });
              }
              if (options.perPage) {
                params.append('perPage', options.perPage.toString());
              }
              if (options.pageNumber) {
                params.append('pageNumber', options.pageNumber.toString());
              }
              queryString = params.toString();
              _context13.n = 2;
              return this._client.service.platform().get("/restapi/v1.0/account/~/message-threads".concat(queryString ? "?".concat(queryString) : ''));
            case 2:
              res = _context13.v;
              _context13.n = 3;
              return res.json();
            case 3:
              data = _context13.v;
              if (saveSync) {
                this.syncThreadSuccess({
                  records: data.records
                });
              }
              return _context13.a(2, data);
            case 4:
              _context13.p = 4;
              _t10 = _context13.v;
              this.logger.error('listThreads error', _t10);
              throw _t10;
            case 5:
              return _context13.a(2);
          }
        }, _callee13, this, [[1, 4]]);
      }));
      function listThreads() {
        return _listThreads.apply(this, arguments);
      }
      return listThreads;
    }()
    /**
     * List messages across one or more threads
     */
    )
  }, {
    key: "listThreadMessages",
    value: (function () {
      var _listThreadMessages = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14() {
        var _this1 = this;
        var options,
          saveSync,
          _options$ownerExtensi2,
          _options$availability2,
          _options$messageIds,
          params,
          queryString,
          res,
          data,
          notExistThreadDataIds,
          recordsWithType,
          currentPage,
          totalPages,
          nextPage,
          response,
          _i,
          _Array$from,
          threadId,
          _args14 = arguments,
          _t11;
        return _regenerator().w(function (_context14) {
          while (1) switch (_context14.p = _context14.n) {
            case 0:
              options = _args14.length > 0 && _args14[0] !== undefined ? _args14[0] : {};
              saveSync = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : true;
              _context14.p = 1;
              params = new URLSearchParams();
              if (options.threadStatus) {
                params.append('threadStatus', options.threadStatus);
              }
              if ((_options$ownerExtensi2 = options.ownerExtensionIds) !== null && _options$ownerExtensi2 !== void 0 && _options$ownerExtensi2.length) {
                options.ownerExtensionIds.forEach(function (id) {
                  params.append('ownerExtensionIds', id);
                });
              }
              if ((_options$availability2 = options.availability) !== null && _options$availability2 !== void 0 && _options$availability2.length) {
                options.availability.forEach(function (avail) {
                  params.append('availability', avail);
                });
              }
              if ((_options$messageIds = options.messageIds) !== null && _options$messageIds !== void 0 && _options$messageIds.length) {
                options.messageIds.forEach(function (id) {
                  params.append('messageIds', id);
                });
              }
              if (options.perPage) {
                params.append('perPage', options.perPage.toString());
              }
              if (options.pageNumber) {
                params.append('pageNumber', options.pageNumber.toString());
              }
              queryString = params.toString();
              _context14.n = 2;
              return this._client.service.platform().get("/restapi/v1.0/account/~/message-threads/messages".concat(queryString ? "?".concat(queryString) : ''));
            case 2:
              res = _context14.v;
              _context14.n = 3;
              return res.json();
            case 3:
              data = _context14.v;
              if (!saveSync) {
                _context14.n = 8;
                break;
              }
              notExistThreadDataIds = new Set(); // Add recordType to records since API response doesn't include it
              recordsWithType = data.records.map(function (record) {
                // when found some record belong thread is not exist, accumulate them and sync later
                var thread = _this1.getThread(record.threadId);
                if (!thread) {
                  notExistThreadDataIds.add(record.threadId);
                }
                return _objectSpread(_objectSpread({}, record), {}, {
                  recordType: 'AliveMessage'
                });
              });
              if (!(notExistThreadDataIds.size > 0)) {
                _context14.n = 7;
                break;
              }
            case 4:
              if (!(notExistThreadDataIds.size > 0)) {
                _context14.n = 7;
                break;
              }
              currentPage = this.historyLoaded.threadsPageNumber;
              totalPages = this.historyLoaded.threadsTotalPages; // Check if there's more data to fetch
              if (!(totalPages > 0 && currentPage >= totalPages)) {
                _context14.n = 5;
                break;
              }
              this.logger.warn("Cannot find ".concat(notExistThreadDataIds.size, " thread(s) after fetching all available pages"));
              return _context14.a(3, 7);
            case 5:
              // Increment page number and fetch
              nextPage = currentPage + 1;
              _context14.n = 6;
              return this.listThreads({
                perPage: THREADS_PER_PAGE,
                pageNumber: nextPage
              });
            case 6:
              response = _context14.v;
              this._setHistoryLoadedThreadsPageNumber(nextPage);

              // Update total pages if available
              if (response.paging.totalPages) {
                this._setHistoryLoadedThreadsTotalPages(response.paging.totalPages);
              }

              // Check which thread IDs now exist and remove them from notExistThreadDataIds
              for (_i = 0, _Array$from = Array.from(notExistThreadDataIds); _i < _Array$from.length; _i++) {
                threadId = _Array$from[_i];
                if (this.getThread(threadId)) {
                  notExistThreadDataIds["delete"](threadId);
                }
              }
              _context14.n = 4;
              break;
            case 7:
              this.syncEntriesSuccess({
                records: recordsWithType
              }, false);
            case 8:
              return _context14.a(2, data);
            case 9:
              _context14.p = 9;
              _t11 = _context14.v;
              this.logger.error('listThreadMessages error', _t11);
              throw _t11;
            case 10:
              return _context14.a(2);
          }
        }, _callee14, this, [[1, 9]]);
      }));
      function listThreadMessages() {
        return _listThreadMessages.apply(this, arguments);
      }
      return listThreadMessages;
    }())
  }, {
    key: "loadMoreMessages",
    value: function () {
      var _loadMoreMessages = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15() {
        var currentPage, totalPages, nextPage, response;
        return _regenerator().w(function (_context15) {
          while (1) switch (_context15.p = _context15.n) {
            case 0:
              if (!this.historyLoading) {
                _context15.n = 1;
                break;
              }
              this.logger.log('Already loading history, skipping');
              return _context15.a(2);
            case 1:
              this.logger.log('load more messages');
              _context15.p = 2;
              currentPage = this.historyLoaded.messagesPageNumber;
              totalPages = this.historyLoaded.messagesTotalPages; // Check if there are more pages to load
              if (!(totalPages > 0 && currentPage >= totalPages)) {
                _context15.n = 3;
                break;
              }
              this.logger.log('No more messages needed to load');
              return _context15.a(2);
            case 3:
              this._setLoadingHistory(true);
              nextPage = currentPage + 1;
              _context15.n = 4;
              return this.listThreadMessages({
                perPage: MESSAGES_PER_PAGE,
                pageNumber: nextPage
              });
            case 4:
              response = _context15.v;
              this._setHistoryLoadedMessagesPageNumber(nextPage);

              // Update total pages if available
              if (response.paging.totalPages) {
                this._setHistoryLoadedMessagesTotalPages(response.paging.totalPages);
              }
            case 5:
              _context15.p = 5;
              this._setLoadingHistory(false);
              return _context15.f(5);
            case 6:
              return _context15.a(2);
          }
        }, _callee15, this, [[2,, 5, 6]]);
      }));
      function loadMoreMessages() {
        return _loadMoreMessages.apply(this, arguments);
      }
      return loadMoreMessages;
    }()
    /**
     * List notes across one or more threads
     */
  }, {
    key: "listThreadNotes",
    value: (function () {
      var _listThreadNotes = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16() {
        var options,
          _options$ownerExtensi3,
          _options$availability3,
          _options$threadIds,
          _options$noteIds,
          params,
          queryString,
          res,
          data,
          _args16 = arguments,
          _t12;
        return _regenerator().w(function (_context16) {
          while (1) switch (_context16.p = _context16.n) {
            case 0:
              options = _args16.length > 0 && _args16[0] !== undefined ? _args16[0] : {};
              _context16.p = 1;
              params = new URLSearchParams();
              if ((_options$ownerExtensi3 = options.ownerExtensionIds) !== null && _options$ownerExtensi3 !== void 0 && _options$ownerExtensi3.length) {
                options.ownerExtensionIds.forEach(function (id) {
                  params.append('ownerExtensionIds', id);
                });
              }
              if ((_options$availability3 = options.availability) !== null && _options$availability3 !== void 0 && _options$availability3.length) {
                options.availability.forEach(function (avail) {
                  params.append('availability', avail);
                });
              }
              if ((_options$threadIds = options.threadIds) !== null && _options$threadIds !== void 0 && _options$threadIds.length) {
                options.threadIds.forEach(function (id) {
                  params.append('threadIds', id);
                });
              }
              if ((_options$noteIds = options.noteIds) !== null && _options$noteIds !== void 0 && _options$noteIds.length) {
                options.noteIds.forEach(function (id) {
                  params.append('noteIds', id);
                });
              }
              if (options.perPage) {
                params.append('perPage', options.perPage.toString());
              }
              if (options.pageNumber) {
                params.append('pageNumber', options.pageNumber.toString());
              }
              queryString = params.toString();
              _context16.n = 2;
              return this._client.service.platform().get("/restapi/v1.0/account/~/message-threads/notes".concat(queryString ? "?".concat(queryString) : ''));
            case 2:
              res = _context16.v;
              _context16.n = 3;
              return res.json();
            case 3:
              data = _context16.v;
              return _context16.a(2, data);
            case 4:
              _context16.p = 4;
              _t12 = _context16.v;
              this.logger.error('listThreadNotes error', _t12);
              throw _t12;
            case 5:
              return _context16.a(2);
          }
        }, _callee16, this, [[1, 4]]);
      }));
      function listThreadNotes() {
        return _listThreadNotes.apply(this, arguments);
      }
      return listThreadNotes;
    }()
    /**
     * Create a new note in a thread
     */
    )
  }, {
    key: "createThreadNote",
    value: (function () {
      var _createThreadNote = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(request) {
        var res, data, _t13;
        return _regenerator().w(function (_context17) {
          while (1) switch (_context17.p = _context17.n) {
            case 0:
              _context17.p = 0;
              _context17.n = 1;
              return this._client.service.platform().post("/restapi/v1.0/account/~/message-threads/notes", request);
            case 1:
              res = _context17.v;
              _context17.n = 2;
              return res.json();
            case 2:
              data = _context17.v;
              return _context17.a(2, data);
            case 3:
              _context17.p = 3;
              _t13 = _context17.v;
              this.logger.error('createThreadNote error', _t13);
              throw _t13;
            case 4:
              return _context17.a(2);
          }
        }, _callee17, this, [[0, 3]]);
      }));
      function createThreadNote(_x10) {
        return _createThreadNote.apply(this, arguments);
      }
      return createThreadNote;
    }()
    /**
     * Update a note
     */
    )
  }, {
    key: "updateThreadNote",
    value: (function () {
      var _updateThreadNote = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(noteId, request) {
        var res, data, _t14;
        return _regenerator().w(function (_context18) {
          while (1) switch (_context18.p = _context18.n) {
            case 0:
              _context18.p = 0;
              _context18.n = 1;
              return this._client.service.platform().patch("/restapi/v1.0/account/~/message-threads/notes/".concat(noteId), request);
            case 1:
              res = _context18.v;
              _context18.n = 2;
              return res.json();
            case 2:
              data = _context18.v;
              return _context18.a(2, data);
            case 3:
              _context18.p = 3;
              _t14 = _context18.v;
              this.logger.error('updateThreadNote error', _t14);
              throw _t14;
            case 4:
              return _context18.a(2);
          }
        }, _callee18, this, [[0, 3]]);
      }));
      function updateThreadNote(_x11, _x12) {
        return _updateThreadNote.apply(this, arguments);
      }
      return updateThreadNote;
    }()
    /**
     * Delete thread notes
     */
    )
  }, {
    key: "deleteThreadNotes",
    value: (function () {
      var _deleteThreadNotes = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19(request) {
        var _t15;
        return _regenerator().w(function (_context19) {
          while (1) switch (_context19.p = _context19.n) {
            case 0:
              _context19.p = 0;
              _context19.n = 1;
              return this._client.service.platform()["delete"]("/restapi/v1.0/account/~/message-threads/notes", request);
            case 1:
              _context19.n = 3;
              break;
            case 2:
              _context19.p = 2;
              _t15 = _context19.v;
              this.logger.error('deleteThreadNotes error', _t15);
              throw _t15;
            case 3:
              return _context19.a(2);
          }
        }, _callee19, this, [[0, 2]]);
      }));
      function deleteThreadNotes(_x13) {
        return _deleteThreadNotes.apply(this, arguments);
      }
      return deleteThreadNotes;
    }()
    /**
     * Send a new message thread with explicit from/to parties.
     */
    )
  }, {
    key: "sendNewThreadMessage",
    value: (function () {
      var _sendNewThreadMessage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20(_ref0) {
        var _existingThread$threa, _existingThread$threa2, _existingThread$threa3;
        var fromNumber, toNumbers, text, _ref0$attachments, attachments, existingThread, isOpen, existingThreadId, threadId, currentUserId;
        return _regenerator().w(function (_context20) {
          while (1) switch (_context20.n) {
            case 0:
              fromNumber = _ref0.fromNumber, toNumbers = _ref0.toNumbers, text = _ref0.text, _ref0$attachments = _ref0.attachments, attachments = _ref0$attachments === void 0 ? [] : _ref0$attachments;
              _context20.n = 1;
              return this._messageSender.uniqueManager.dismissAll();
            case 1:
              if (this._messageSender.validateContent(text, attachments, false)) {
                _context20.n = 2;
                break;
              }
              return _context20.a(2);
            case 2:
              // find does there have exist thread between fromNumber and toNumbers, if yes, send message in that thread, otherwise create a new thread
              existingThread = this.getLatestThreadByParties(fromNumber, toNumbers[0]);
              isOpen = (existingThread === null || existingThread === void 0 ? void 0 : (_existingThread$threa = existingThread.threadInfo) === null || _existingThread$threa === void 0 ? void 0 : _existingThread$threa.status) === 'Open';
              existingThreadId = existingThread === null || existingThread === void 0 ? void 0 : existingThread.threadId;
              threadId = isOpen && existingThreadId ? existingThreadId : null;
              currentUserId = this._auth.ownerId; // when thread exist and be open, assign to me then send message in that thread, otherwise backend api will throw error
              if (!(threadId && currentUserId && (existingThread === null || existingThread === void 0 ? void 0 : (_existingThread$threa2 = existingThread.threadInfo) === null || _existingThread$threa2 === void 0 ? void 0 : (_existingThread$threa3 = _existingThread$threa2.assignee) === null || _existingThread$threa3 === void 0 ? void 0 : _existingThread$threa3.extensionId) !== this._auth.ownerId)) {
                _context20.n = 3;
                break;
              }
              _context20.n = 3;
              return this.assignThread(threadId, currentUserId);
            case 3:
              return _context20.a(2, this._sendThreadMessage({
                threadId: threadId,
                text: text,
                from: {
                  phoneNumber: fromNumber
                },
                to: toNumbers.map(function (phoneNumber) {
                  return {
                    phoneNumber: phoneNumber
                  };
                }),
                attachments: attachments
              }));
          }
        }, _callee20, this);
      }));
      function sendNewThreadMessage(_x14) {
        return _sendNewThreadMessage.apply(this, arguments);
      }
      return sendNewThreadMessage;
    }()
    /**
     * Send a message in a thread
     */
    )
  }, {
    key: "sendThreadMessage",
    value: (function () {
      var _sendThreadMessage2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21(threadId, text) {
        var newThread,
          attachments,
          _threadInfo$ownerPart3,
          _threadInfo$guestPart3,
          _this$_smsOptOut$atta,
          _this$_smsOptOut,
          _this$_smsOptOut2,
          thread,
          threadInfo,
          from,
          to,
          messageText,
          response,
          _args21 = arguments,
          _t16;
        return _regenerator().w(function (_context21) {
          while (1) switch (_context21.p = _context21.n) {
            case 0:
              newThread = _args21.length > 2 && _args21[2] !== undefined ? _args21[2] : false;
              attachments = _args21.length > 3 && _args21[3] !== undefined ? _args21[3] : [];
              _context21.n = 1;
              return this._messageSender.uniqueManager.dismissAll();
            case 1:
              _context21.p = 1;
              thread = this.getThread(threadId);
              threadInfo = thread === null || thread === void 0 ? void 0 : thread.threadInfo;
              if (!(!(threadInfo !== null && threadInfo !== void 0 && (_threadInfo$ownerPart3 = threadInfo.ownerParty) !== null && _threadInfo$ownerPart3 !== void 0 && _threadInfo$ownerPart3.phoneNumber) || !((_threadInfo$guestPart3 = threadInfo.guestParty) !== null && _threadInfo$guestPart3 !== void 0 && _threadInfo$guestPart3.phoneNumber))) {
                _context21.n = 2;
                break;
              }
              throw new Error('Cannot get thread info');
            case 2:
              from = {
                phoneNumber: threadInfo.ownerParty.phoneNumber
              };
              to = [{
                phoneNumber: threadInfo.guestParty.phoneNumber
              }];
              messageText = (_this$_smsOptOut$atta = (_this$_smsOptOut = this._smsOptOut) === null || _this$_smsOptOut === void 0 ? void 0 : _this$_smsOptOut.attachOptOutHint(threadId, text)) !== null && _this$_smsOptOut$atta !== void 0 ? _this$_smsOptOut$atta : text;
              if (this._messageSender.validateContent(messageText, attachments, false)) {
                _context21.n = 3;
                break;
              }
              return _context21.a(2);
            case 3:
              _context21.n = 4;
              return this._sendThreadMessage({
                threadId: newThread ? null : threadId,
                text: messageText,
                from: from,
                to: to,
                attachments: attachments
              });
            case 4:
              response = _context21.v;
              // when be new thread, revert the reopen state to false
              if (newThread) {
                this.showAssignedToYouToast();
                this.updateThreadMetaData(threadId, {
                  reopen: false
                });
              }
              this.resetInputValue(threadId);
              this.resetAttachments(threadId);
              (_this$_smsOptOut2 = this._smsOptOut) === null || _this$_smsOptOut2 === void 0 ? void 0 : _this$_smsOptOut2.resetOptOut(threadId);
              return _context21.a(2, response);
            case 5:
              _context21.p = 5;
              _t16 = _context21.v;
              this.logger.error('sendThreadMessage error', _t16);
              _context21.n = 6;
              return this._messageSender._onSendError(_t16);
            case 6:
              return _context21.a(2);
          }
        }, _callee21, this, [[1, 5]]);
      }));
      function sendThreadMessage(_x15, _x16) {
        return _sendThreadMessage2.apply(this, arguments);
      }
      return sendThreadMessage;
    }())
  }, {
    key: "_sendThreadMessage",
    value: function () {
      var _sendThreadMessage3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22(_ref1) {
        var threadId, text, from, to, _ref1$attachments, attachments, body, endpoint, response, httpResponse, _t17, _t18;
        return _regenerator().w(function (_context22) {
          while (1) switch (_context22.p = _context22.n) {
            case 0:
              threadId = _ref1.threadId, text = _ref1.text, from = _ref1.from, to = _ref1.to, _ref1$attachments = _ref1.attachments, attachments = _ref1$attachments === void 0 ? [] : _ref1$attachments;
              if (threadId) {
                this.setThreadLoading(threadId, true);
              }
              _context22.p = 1;
              body = threadId ? {
                threadId: threadId,
                from: from,
                to: to,
                text: text
              } : {
                from: from,
                to: to,
                text: text
              };
              endpoint = "/restapi/v1.0/account/~/message-threads/messages";
              if (!(attachments.length > 0)) {
                _context22.n = 3;
                break;
              }
              _context22.n = 2;
              return this._client.multipart.post(endpoint, {
                fields: {
                  metadata: body
                },
                files: {
                  attachments: attachments.map(function (attachment) {
                    return attachment.base64Url ? (0, _utils.base64ToFile)(attachment.base64Url, attachment.name) : attachment.file;
                  })
                }
              });
            case 2:
              _t17 = _context22.v;
              _context22.n = 5;
              break;
            case 3:
              _context22.n = 4;
              return this._client.service.platform().post(endpoint, body);
            case 4:
              _t17 = _context22.v;
            case 5:
              response = _t17;
              _context22.n = 6;
              return this.emitUpdateAndWaitSyncDone();
            case 6:
              if (!(attachments.length > 0)) {
                _context22.n = 7;
                break;
              }
              return _context22.a(2, response);
            case 7:
              httpResponse = response;
              _context22.n = 8;
              return httpResponse.json();
            case 8:
              return _context22.a(2, _context22.v);
            case 9:
              _context22.p = 9;
              _t18 = _context22.v;
              this.logger.error('sendThreadMessage error', _t18);
              throw _t18;
            case 10:
              _context22.p = 10;
              if (threadId) {
                this.setThreadLoading(threadId, false);
              }
              return _context22.f(10);
            case 11:
              return _context22.a(2);
          }
        }, _callee22, this, [[1, 9, 10, 11]]);
      }));
      function _sendThreadMessage(_x17) {
        return _sendThreadMessage3.apply(this, arguments);
      }
      return _sendThreadMessage;
    }()
  }, {
    key: "emitUpdateAndWaitSyncDone",
    value: function emitUpdateAndWaitSyncDone() {
      this.manualSync$.next();
      return Promise.all([this.waitSyncDone('thread'), this.waitSyncDone('entries')]);
    }
  }, {
    key: "waitSyncDone",
    value: function () {
      var _waitSyncDone = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23(type) {
        var _this10 = this;
        return _regenerator().w(function (_context23) {
          while (1) switch (_context23.n) {
            case 0:
              _context23.n = 1;
              return (0, _rxjs.firstValueFrom)(this.syncDone$.pipe((0, _rxjs.filter)(function (done) {
                return done === type;
              }), (0, _rxjs.timeout)({
                each: 10000,
                "with": function _with() {
                  _this10.logger.error("wait ".concat(type, " sync done timeout after 10 seconds"));
                  return (0, _rxjs.of)(false);
                }
              })));
            case 1:
              return _context23.a(2);
          }
        }, _callee23, this);
      }));
      function waitSyncDone(_x18) {
        return _waitSyncDone.apply(this, arguments);
      }
      return waitSyncDone;
    }()
  }, {
    key: "showAssignedToYouToast",
    value: function showAssignedToYouToast() {
      this._toast.success({
        message: (0, _i18n.t)('assignedToYouTooltip')
      });
    }
  }]);
}(_nextCore.RcModule), _applyDecoratedDescriptor(_class2.prototype, "hasCompanySiteSupport", [_nextCore.computed, _dec0, _dec1], Object.getOwnPropertyDescriptor(_class2.prototype, "hasCompanySiteSupport"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "hasPermission", [_nextCore.computed, _dec10, _dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "hasPermission"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "uniqueNumbers", [_nextCore.computed, _dec12, _dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "uniqueNumbers"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "conversationLogIds", [_nextCore.computed, _dec14, _dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "conversationLogIds"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "historyLoaded", [_nextCore.storage, _nextCore.state], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {
      threadsPageNumber: 1,
      messagesPageNumber: 1,
      threadsTotalPages: 0,
      messagesTotalPages: 0
    };
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "historyLoading", [_nextCore.state], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _applyDecoratedDescriptor(_class2.prototype, "_setLoadingHistory", [_nextCore.action, _dec16, _dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "_setLoadingHistory"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setHistoryLoadedThreadsPageNumber", [_nextCore.action, _dec18, _dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "_setHistoryLoadedThreadsPageNumber"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setHistoryLoadedMessagesPageNumber", [_nextCore.action, _dec20, _dec21], Object.getOwnPropertyDescriptor(_class2.prototype, "_setHistoryLoadedMessagesPageNumber"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setHistoryLoadedThreadsTotalPages", [_nextCore.action, _dec22, _dec23], Object.getOwnPropertyDescriptor(_class2.prototype, "_setHistoryLoadedThreadsTotalPages"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setHistoryLoadedMessagesTotalPages", [_nextCore.action, _dec24, _dec25], Object.getOwnPropertyDescriptor(_class2.prototype, "_setHistoryLoadedMessagesTotalPages"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "smsRecipientCallQueues", [_nextCore.computed, _dec26, _dec27], Object.getOwnPropertyDescriptor(_class2.prototype, "smsRecipientCallQueues"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_numberFormatter", [_dec28, _dec29], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "data", [_nextCore.storage, _nextCore.state, _dec30], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {
      threads: {},
      messages: {},
      token: null,
      entriesToken: null
    };
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "threadMetadataMap", [_nextCore.state, _dec31], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "inputValueMap", [_nextCore.state, _dec32], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "attachmentMap", [_nextCore.state, _dec33], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _applyDecoratedDescriptor(_class2.prototype, "_setInputValue", [_nextCore.action, _dec34, _dec35], Object.getOwnPropertyDescriptor(_class2.prototype, "_setInputValue"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setAttachment", [_nextCore.action, _dec36, _dec37], Object.getOwnPropertyDescriptor(_class2.prototype, "_setAttachment"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_removeAttachment", [_nextCore.action, _dec38, _dec39], Object.getOwnPropertyDescriptor(_class2.prototype, "_removeAttachment"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "setInputValue", [_dec40, _dec41, _dec42], Object.getOwnPropertyDescriptor(_class2.prototype, "setInputValue"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "addAttachments", [_dec43, _dec44, _dec45], Object.getOwnPropertyDescriptor(_class2.prototype, "addAttachments"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "removeAttachment", [_dec46, _dec47, _dec48], Object.getOwnPropertyDescriptor(_class2.prototype, "removeAttachment"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "resetInputValue", [_nextCore.action, _dec49, _dec50], Object.getOwnPropertyDescriptor(_class2.prototype, "resetInputValue"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "resetAttachments", [_nextCore.action, _dec51, _dec52], Object.getOwnPropertyDescriptor(_class2.prototype, "resetAttachments"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "resetData", [_nextCore.action, _dec53, _dec54], Object.getOwnPropertyDescriptor(_class2.prototype, "resetData"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "setUnreadCount", [_nextCore.action, _dec55, _dec56], Object.getOwnPropertyDescriptor(_class2.prototype, "setUnreadCount"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "updateThreadMetaData", [_nextCore.action, _dec57, _dec58], Object.getOwnPropertyDescriptor(_class2.prototype, "updateThreadMetaData"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "reopenResolvedThread", [_dec59, _dec60, _dec61], Object.getOwnPropertyDescriptor(_class2.prototype, "reopenResolvedThread"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "setThreadLoading", [_nextCore.action, _dec62, _dec63], Object.getOwnPropertyDescriptor(_class2.prototype, "setThreadLoading"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "syncEntriesSuccess", [_nextCore.action, _dec64, _dec65], Object.getOwnPropertyDescriptor(_class2.prototype, "syncEntriesSuccess"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "syncThreadSuccess", [_nextCore.action, _dec66, _dec67], Object.getOwnPropertyDescriptor(_class2.prototype, "syncThreadSuccess"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "threadConversationsInfo", [_nextCore.computed, _dec68, _dec69], Object.getOwnPropertyDescriptor(_class2.prototype, "threadConversationsInfo"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "groupedThreadsMap", [_nextCore.computed, _dec70, _dec71], Object.getOwnPropertyDescriptor(_class2.prototype, "groupedThreadsMap"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "threadUnreadCount", [_nextCore.computed, _dec72, _dec73], Object.getOwnPropertyDescriptor(_class2.prototype, "threadUnreadCount"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_loadInitialHistory", [_dec74, _dec75, _dec76], Object.getOwnPropertyDescriptor(_class2.prototype, "_loadInitialHistory"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_entriesFSync", [_dec77, _dec78, _dec79], Object.getOwnPropertyDescriptor(_class2.prototype, "_entriesFSync"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_entriesISync", [_dec80, _dec81, _dec82], Object.getOwnPropertyDescriptor(_class2.prototype, "_entriesISync"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_threadFSync", [_dec83, _dec84, _dec85], Object.getOwnPropertyDescriptor(_class2.prototype, "_threadFSync"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_threadISync", [_dec86, _dec87, _dec88], Object.getOwnPropertyDescriptor(_class2.prototype, "_threadISync"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "resolveThread", [_dec89, _dec90, _dec91], Object.getOwnPropertyDescriptor(_class2.prototype, "resolveThread"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "assignThread", [_dec92, _dec93, _dec94], Object.getOwnPropertyDescriptor(_class2.prototype, "assignThread"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "listThreads", [_dec95, _dec96, _dec97], Object.getOwnPropertyDescriptor(_class2.prototype, "listThreads"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "listThreadMessages", [_dec98, _dec99, _dec100], Object.getOwnPropertyDescriptor(_class2.prototype, "listThreadMessages"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "loadMoreMessages", [_dec101, _dec102, _dec103], Object.getOwnPropertyDescriptor(_class2.prototype, "loadMoreMessages"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "listThreadNotes", [_dec104, _dec105, _dec106], Object.getOwnPropertyDescriptor(_class2.prototype, "listThreadNotes"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "createThreadNote", [_dec107, _dec108, _dec109], Object.getOwnPropertyDescriptor(_class2.prototype, "createThreadNote"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "updateThreadNote", [_dec110, _dec111, _dec112], Object.getOwnPropertyDescriptor(_class2.prototype, "updateThreadNote"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "deleteThreadNotes", [_dec113, _dec114, _dec115], Object.getOwnPropertyDescriptor(_class2.prototype, "deleteThreadNotes"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "sendNewThreadMessage", [_dec116, _dec117, _dec118], Object.getOwnPropertyDescriptor(_class2.prototype, "sendNewThreadMessage"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "sendThreadMessage", [_dec119, _dec120, _dec121], Object.getOwnPropertyDescriptor(_class2.prototype, "sendThreadMessage"), _class2.prototype), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
//# sourceMappingURL=MessageThread.js.map

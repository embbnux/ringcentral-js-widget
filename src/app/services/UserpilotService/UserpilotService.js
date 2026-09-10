"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.array.reverse.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserpilotService = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-iso-string.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.entries.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.set.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.string.starts-with.js");
require("core-js/modules/esnext.global-this.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _nextCore = require("@ringcentral-integration/next-core");
var _rxjs = require("rxjs");
var _userpilot = require("userpilot");
var _AccountInfo = require("../AccountInfo");
var _Auth = require("../Auth");
var _ExtensionInfo = require("../ExtensionInfo");
var _TrackPropsService = require("../TrackPropsService");
var _utils = require("./utils");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec0, _class, _class2, _descriptor, _descriptor2, _descriptor3;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// Userpilot type definition

var USERPILOT_COMMON_USER_PROPERTIES = new Set(['rcExtensionId', 'rcAccountId', 'Phoenix', 'superAdmin', 'acctBrand', 'acctEdition', 'brandId', 'uBrandId']);
var MAX_RECENT_TRACKED_EVENT_NAMES = 10;
var isGuideDataPayload = function isGuideDataPayload(payload) {
  return typeof payload === 'string' || !!payload && _typeof(payload) === 'object' && !Array.isArray(payload);
};
var UserpilotService = exports.UserpilotService = (_dec = (0, _nextCore.injectable)({
  name: 'UserpilotService'
}), _dec2 = function _dec2(target, key) {
  return (0, _nextCore.inject)('UserpilotServiceOptions')(target, undefined, 2);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _Auth.Auth === "undefined" ? Object : _Auth.Auth, typeof _TrackPropsService.TrackPropsService === "undefined" ? Object : _TrackPropsService.TrackPropsService, typeof UserpilotServiceOptions === "undefined" ? Object : UserpilotServiceOptions]), _dec5 = (0, _nextCore.dynamic)('Brand'), _dec6 = Reflect.metadata("design:type", typeof Brand === "undefined" ? Object : Brand), _dec7 = (0, _nextCore.dynamic)('AccountInfo'), _dec8 = Reflect.metadata("design:type", typeof _AccountInfo.AccountInfo === "undefined" ? Object : _AccountInfo.AccountInfo), _dec9 = (0, _nextCore.dynamic)('ExtensionInfo'), _dec0 = Reflect.metadata("design:type", typeof _ExtensionInfo.ExtensionInfo === "undefined" ? Object : _ExtensionInfo.ExtensionInfo), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = /*#__PURE__*/function (_RcModule) {
  function UserpilotService(_auth, _trackPropsService, _userpilotServiceOptions) {
    var _this;
    _classCallCheck(this, UserpilotService);
    _this = _callSuper(this, UserpilotService);
    _this._auth = _auth;
    _this._trackPropsService = _trackPropsService;
    _this._userpilotServiceOptions = _userpilotServiceOptions;
    _this._userpilot$ = new _rxjs.BehaviorSubject(null);
    _this._appToken = _this._userpilotServiceOptions.appToken;
    _this._isInitialized = false;
    _this._recentTrackedEventNames = [];
    _this.userpilotReady$ = _this._userpilot$.pipe((0, _rxjs.filter)(Boolean), (0, _rxjs.take)(1), (0, _rxjs.switchMap)(function (userpilot) {
      _this.logger.log('userpilot ready');
      return _this._auth.ownerId$.pipe((0, _rxjs.switchMap)(function (ownerId) {
        // when owner become null and userpilot already initialized, means logout, clean the userpilot session
        if (!ownerId) {
          _this.logger.log('userpilot clean session');
          userpilot.clean();
          return _rxjs.EMPTY;
        }
        return (0, _rxjs.of)(ownerId);
      }), (0, _rxjs.map)(function (ownerId) {
        return {
          ownerId: ownerId,
          userpilot: userpilot
        };
      })) || _rxjs.EMPTY;
    }), (0, _rxjs.switchMap)(/*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {
        var userpilot, ownerId, userProperties;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              userpilot = _ref.userpilot, ownerId = _ref.ownerId;
              _this._isInitialized = false;

              // must wait the account have id data then able to exec identify
              _context.n = 1;
              return _this.getUserpilotUserProperties(ownerId);
            case 1:
              userProperties = _context.v;
              _this.logger.log('userpilot identify', userProperties);
              userpilot.identify(ownerId, userProperties);
              userpilot.reload();
              _this._isInitialized = true;
              return _context.a(2, userpilot);
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()), (0, _rxjs.shareReplay)(1));
    _initializerDefineProperty(_this, "_brand", _descriptor, _this);
    _initializerDefineProperty(_this, "_accountInfo", _descriptor2, _this);
    _initializerDefineProperty(_this, "_extensionInfo", _descriptor3, _this);
    _this._sendGuideData$ = new _rxjs.Subject();
    _this._guideDataListener$ =
    // only register guide data listener when document is available
    globalThis.document ? (0, _utils.registerGuideDataListener)().pipe((0, _rxjs.shareReplay)({
      bufferSize: 1,
      refCount: true
    })) : _rxjs.EMPTY;
    _this.guideData$ = _this._guideDataListener$.pipe((0, _rxjs.map)(function (_ref3) {
      var payload = _ref3.payload;
      return payload;
    }), (0, _rxjs.filter)(isGuideDataPayload));
    if (_this.enable && globalThis.document) {
      (0, _rxjs.combineLatest)([_this._guideDataListener$, _this._sendGuideData$]).pipe((0, _rxjs.tap)(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2),
          _ref5$ = _ref5[0],
          send = _ref5$.send,
          payload = _ref5$.payload,
          pendingGuideDataEvent = _ref5[1];
        if (send && pendingGuideDataEvent && _this._isGuideDataPayloadMatched(payload, pendingGuideDataEvent.matcher)) {
          send(pendingGuideDataEvent.data);
          // clear to prepare next event
          _this._sendGuideData$.next(null);
        }
      }), _nextCore.takeUntilAppDestroy).subscribe();
      _this.initializeUserpilot();
      _this.userpilotReady$.pipe(_nextCore.takeUntilAppDestroy).subscribe();
    }
    return _this;
  }
  _inherits(UserpilotService, _RcModule);
  return _createClass(UserpilotService, [{
    key: "enable",
    get: function get() {
      return global.document && this._appToken;
    }
  }, {
    key: "userpilot",
    get: function get() {
      return this._userpilot$.value;
    }
  }, {
    key: "isReady",
    get: function get() {
      return this._isInitialized && this.userpilot !== null;
    }

    /**
     * Gets a snapshot of the recent raw event names passed to `track`.
     */
  }, {
    key: "recentTrackedEventNames",
    get: function get() {
      return _toConsumableArray(this._recentTrackedEventNames);
    }

    /**
     * Checks whether the recent local tracking history contains the event name.
     */
  }, {
    key: "hasRecentTrackedEvent",
    value: function hasRecentTrackedEvent(eventName) {
      return this._recentTrackedEventNames.includes(eventName);
    }

    /**
     * Checks whether any target event was tracked recently, and removes all
     * matching target events when a match is found.
     */
  }, {
    key: "consumeRecentTrackedEvent",
    value: function consumeRecentTrackedEvent(eventName) {
      var result = this._recentTrackedEventNames.filter(function (name) {
        return name !== eventName;
      });
      if (result.length !== this._recentTrackedEventNames.length) {
        this._recentTrackedEventNames = result;
        return true;
      }
      return false;
    }
  }, {
    key: "sendGuideData",
    value: function sendGuideData(data, matcher) {
      this._sendGuideData$.next({
        data: data,
        matcher: matcher
      });
    }
  }, {
    key: "_isGuideDataPayloadMatched",
    value: function _isGuideDataPayloadMatched(payload, matcher) {
      if (!matcher) {
        return true;
      }
      try {
        return !!matcher(payload);
      } catch (error) {
        this.logger.warn('Failed to match guide data payload', error);
        return false;
      }
    }
  }, {
    key: "initializeUserpilot",
    value: function initializeUserpilot() {
      // Use npm package directly
      try {
        _userpilot.Userpilot.initialize(this._appToken, {
          auto_capture: {
            enabled: false
          }
        });
        this._userpilot$.next(_userpilot.Userpilot);
        this.logger.log('userpilot SDK is loaded!', {
          token: this._appToken
        });
      } catch (error) {
        this.logger.error('Failed to initialize Userpilot', error);
      }
    }
  }, {
    key: "_recordTrackedEvent",
    value: function _recordTrackedEvent(eventName) {
      this._recentTrackedEventNames = [].concat(_toConsumableArray(this._recentTrackedEventNames), [eventName]).slice(-MAX_RECENT_TRACKED_EVENT_NAMES);
    }
  }, {
    key: "track",
    value: function track(event) {
      var _this$_brand, _this$_auth;
      var trackProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this._recordTrackedEvent(event);
      var userpilot = this.userpilot;
      var appName = trackProps.appName || ((_this$_brand = this._brand) === null || _this$_brand === void 0 ? void 0 : _this$_brand.defaultConfig.appName);
      var eventName = "".concat(appName, "-").concat(event);
      this.logger.log('userpilot track', eventName, trackProps);
      // userpilot only use after login, if we need to use it before login, we need to change the logic
      if (this.isReady && (_this$_auth = this._auth) !== null && _this$_auth !== void 0 && _this$_auth.ownerId && userpilot) {
        userpilot.track(eventName, trackProps);
      }
    }
  }, {
    key: "refreshContent",
    value: function () {
      var _refreshContent = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _this$_auth2;
        var ownerId, userpilot;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              ownerId = (_this$_auth2 = this._auth) === null || _this$_auth2 === void 0 ? void 0 : _this$_auth2.ownerId;
              userpilot = this.userpilot;
              if (ownerId && this.isReady && userpilot) {
                // reload to get the latest userpilot content
                userpilot.reload();
              }
            case 1:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function refreshContent() {
        return _refreshContent.apply(this, arguments);
      }
      return refreshContent;
    }()
  }, {
    key: "getUserpilotUserProperties",
    value: function () {
      var _getUserpilotUserProperties = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(ownerId) {
        var _this$_brand2;
        var profileProperties, additionalProps, userProperties;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return this._trackPropsService.getTrackProps();
            case 1:
              profileProperties = _context3.v;
              additionalProps = this._userpilotServiceOptions.additionalUserProps;
              userProperties = _objectSpread(_objectSpread({
                name: this.userName,
                // ISO8601 Date
                created_at: new Date().toISOString()
              }, this.toUserpilotProperties(_objectSpread({
                env: process.env.BUILD_ENVIRONMENT,
                appName: profileProperties.appName,
                appVersion: profileProperties.appVersion,
                appBrand: (_this$_brand2 = this._brand) === null || _this$_brand2 === void 0 ? void 0 : _this$_brand2.defaultConfig.code
              }, additionalProps))), {}, {
                rcExtensionId: ownerId,
                rcAccountId: "".concat(profileProperties.accountId),
                Phoenix: this.isPhoenix,
                superAdmin: this.isSuperAdmin,
                acctBrand: this.acctBrand,
                acctEdition: this.acctEdition,
                brandId: this.brandId,
                uBrandId: this.uBrandId
              });
              return _context3.a(2, userProperties);
          }
        }, _callee3, this);
      }));
      function getUserpilotUserProperties(_x2) {
        return _getUserpilotUserProperties.apply(this, arguments);
      }
      return getUserpilotUserProperties;
    }()
  }, {
    key: "toUserpilotProperties",
    value: function toUserpilotProperties(properties) {
      var _this2 = this;
      var normalizedProperties = {};
      Object.entries(properties).forEach(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
          key = _ref7[0],
          value = _ref7[1];
        var normalizedKey = _this2.normalizeUserpilotPropertyName(key);
        normalizedProperties[normalizedKey] = _this2.normalizeUserpilotPropertyValue(value);
      });
      return normalizedProperties;
    }
  }, {
    key: "normalizeUserpilotPropertyName",
    value: function normalizeUserpilotPropertyName(propertyName) {
      if (USERPILOT_COMMON_USER_PROPERTIES.has(propertyName) || propertyName.startsWith('int_')) {
        return propertyName;
      }
      return "int_".concat(propertyName);
    }
  }, {
    key: "normalizeUserpilotPropertyValue",
    value: function normalizeUserpilotPropertyValue(value) {
      if (value === undefined || value === null) {
        return _TrackPropsService.DEFAULT_UNKNOWN_VALUE;
      }
      return value;
    }
  }, {
    key: "isPhoenix",
    get: function get() {
      var _this$_accountInfo, _this$_accountInfo$se, _this$_accountInfo$se2;
      return ((_this$_accountInfo = this._accountInfo) === null || _this$_accountInfo === void 0 ? void 0 : (_this$_accountInfo$se = _this$_accountInfo.serviceInfo) === null || _this$_accountInfo$se === void 0 ? void 0 : (_this$_accountInfo$se2 = _this$_accountInfo$se.servicePlan) === null || _this$_accountInfo$se2 === void 0 ? void 0 : _this$_accountInfo$se2.freemiumProductType) === 'Phoenix';
    }
  }, {
    key: "userName",
    get: function get() {
      var _this$_extensionInfo;
      return (_this$_extensionInfo = this._extensionInfo) === null || _this$_extensionInfo === void 0 ? void 0 : _this$_extensionInfo.info.name;
    }
  }, {
    key: "isSuperAdmin",
    get: function get() {
      var _this$_extensionInfo2, _this$_extensionInfo3, _this$_extensionInfo4;
      return !!((_this$_extensionInfo2 = this._extensionInfo) !== null && _this$_extensionInfo2 !== void 0 && (_this$_extensionInfo3 = _this$_extensionInfo2.info.permissions) !== null && _this$_extensionInfo3 !== void 0 && (_this$_extensionInfo4 = _this$_extensionInfo3.admin) !== null && _this$_extensionInfo4 !== void 0 && _this$_extensionInfo4.enabled);
    }
  }, {
    key: "acctBrand",
    get: function get() {
      var _this$_accountInfo2, _this$_accountInfo2$s, _this$_accountInfo2$s2;
      return (_this$_accountInfo2 = this._accountInfo) === null || _this$_accountInfo2 === void 0 ? void 0 : (_this$_accountInfo2$s = _this$_accountInfo2.serviceInfo) === null || _this$_accountInfo2$s === void 0 ? void 0 : (_this$_accountInfo2$s2 = _this$_accountInfo2$s.brand) === null || _this$_accountInfo2$s2 === void 0 ? void 0 : _this$_accountInfo2$s2.name;
    }
  }, {
    key: "acctEdition",
    get: function get() {
      var _this$_accountInfo3, _this$_accountInfo3$s;
      return (_this$_accountInfo3 = this._accountInfo) === null || _this$_accountInfo3 === void 0 ? void 0 : (_this$_accountInfo3$s = _this$_accountInfo3.servicePlan) === null || _this$_accountInfo3$s === void 0 ? void 0 : _this$_accountInfo3$s.edition;
    }
  }, {
    key: "brandId",
    get: function get() {
      var _this$_accountInfo4;
      return (_this$_accountInfo4 = this._accountInfo) === null || _this$_accountInfo4 === void 0 ? void 0 : _this$_accountInfo4.brandId;
    }
  }, {
    key: "uBrandId",
    get: function get() {
      var _this$_accountInfo5;
      return (_this$_accountInfo5 = this._accountInfo) === null || _this$_accountInfo5 === void 0 ? void 0 : _this$_accountInfo5.uBrandId;
    }
  }]);
}(_nextCore.RcModule), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_brand", [_dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_accountInfo", [_dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_extensionInfo", [_dec9, _dec0], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _class2)) || _class) || _class) || _class) || _class); // Extend window type for userpilot
//# sourceMappingURL=UserpilotService.js.map

"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.reduce.js");
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
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.for-each.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmsConsentManagementView = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.set.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.string.match.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/web.timers.js");
var _services = require("@ringcentral-integration/micro-contacts/src/app/services");
var _nextCore = require("@ringcentral-integration/next-core");
var _phoneNumber = require("@ringcentral-integration/phone-number");
var _react = _interopRequireWildcard(require("react"));
var _rxjs = require("rxjs");
var _services2 = require("../../services");
var _SmsConsentDialogView = require("../SmsConsentDialogView");
var _SmsConsentManagementPanel = require("./SmsConsentManagementPanel");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec0, _dec1, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
var SETTINGS_ROUTE = '/settings';
var SEARCH_DEBOUNCE = 300;
var EMPTY_FILTERS = {
  coverage: [],
  campaignType: [],
  from: []
};
var SmsConsentManagementView = exports.SmsConsentManagementView = (_dec = (0, _nextCore.injectable)({
  name: 'SmsConsentManagementView'
}), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", [typeof _services2.SmsConsent === "undefined" ? Object : _services2.SmsConsent, typeof _nextCore.RouterPlugin === "undefined" ? Object : _nextCore.RouterPlugin, typeof _services.ContactMatcher === "undefined" ? Object : _services.ContactMatcher, typeof _nextCore.PortManager === "undefined" ? Object : _nextCore.PortManager]), _dec4 = (0, _nextCore.dynamic)('SmsConsentDialogView'), _dec5 = Reflect.metadata("design:type", typeof _SmsConsentDialogView.SmsConsentDialogView === "undefined" ? Object : _SmsConsentDialogView.SmsConsentDialogView), _dec6 = Reflect.metadata("design:type", typeof ConsentRecordsLoadingType === "undefined" ? Object : ConsentRecordsLoadingType), _dec7 = Reflect.metadata("design:type", typeof SmsConsentManagementFilters === "undefined" ? Object : SmsConsentManagementFilters), _dec8 = Reflect.metadata("design:type", Function), _dec9 = Reflect.metadata("design:paramtypes", [String]), _dec0 = Reflect.metadata("design:type", Function), _dec1 = Reflect.metadata("design:paramtypes", [Boolean]), _dec10 = Reflect.metadata("design:type", Function), _dec11 = Reflect.metadata("design:paramtypes", [typeof ConsentRecordsLoadingType === "undefined" ? Object : ConsentRecordsLoadingType]), _dec12 = Reflect.metadata("design:type", Function), _dec13 = Reflect.metadata("design:paramtypes", [Boolean]), _dec14 = Reflect.metadata("design:type", Function), _dec15 = Reflect.metadata("design:paramtypes", [Boolean]), _dec16 = Reflect.metadata("design:type", Function), _dec17 = Reflect.metadata("design:paramtypes", [typeof SmsConsentManagementFilters === "undefined" ? Object : SmsConsentManagementFilters]), _dec18 = Reflect.metadata("design:type", Function), _dec19 = Reflect.metadata("design:paramtypes", []), _dec20 = (0, _nextCore.delegate)('server'), _dec21 = Reflect.metadata("design:type", Function), _dec22 = Reflect.metadata("design:paramtypes", []), _dec23 = (0, _nextCore.delegate)('server'), _dec24 = Reflect.metadata("design:type", Function), _dec25 = Reflect.metadata("design:paramtypes", []), _dec26 = (0, _nextCore.delegate)('server'), _dec27 = Reflect.metadata("design:type", Function), _dec28 = Reflect.metadata("design:paramtypes", [String]), _dec29 = (0, _nextCore.delegate)('server'), _dec30 = Reflect.metadata("design:type", Function), _dec31 = Reflect.metadata("design:paramtypes", [typeof SmsConsentManagementFilters === "undefined" ? Object : SmsConsentManagementFilters]), _dec32 = (0, _nextCore.delegate)('server'), _dec33 = Reflect.metadata("design:type", Function), _dec34 = Reflect.metadata("design:paramtypes", []), _dec35 = (0, _nextCore.delegate)('server'), _dec36 = Reflect.metadata("design:type", Function), _dec37 = Reflect.metadata("design:paramtypes", []), _dec38 = (0, _nextCore.delegate)('server'), _dec39 = Reflect.metadata("design:type", Function), _dec40 = Reflect.metadata("design:paramtypes", [void 0]), _dec41 = (0, _nextCore.delegate)('server'), _dec42 = Reflect.metadata("design:type", Function), _dec43 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_RcViewModule) {
  function SmsConsentManagementView(_smsConsent, _router, _contactMatcher, _portManager) {
    var _this;
    _classCallCheck(this, SmsConsentManagementView);
    _this = _callSuper(this, SmsConsentManagementView);
    _this._smsConsent = _smsConsent;
    _this._router = _router;
    _this._contactMatcher = _contactMatcher;
    _this._portManager = _portManager;
    _initializerDefineProperty(_this, "_smsConsentDialogView", _descriptor, _this);
    _this._loadConsentRecordsRequest$ = new _rxjs.Subject();
    _this._activeQueryParams = void 0;
    _initializerDefineProperty(_this, "searchValue", _descriptor2, _this);
    _initializerDefineProperty(_this, "searchError", _descriptor3, _this);
    _initializerDefineProperty(_this, "loadingType", _descriptor4, _this);
    _initializerDefineProperty(_this, "requestError", _descriptor5, _this);
    _initializerDefineProperty(_this, "filterOpen", _descriptor6, _this);
    _initializerDefineProperty(_this, "filters", _descriptor7, _this);
    if (_this._portManager.shared) {
      _this._portManager.onServer(function () {
        _this._bindLoadConsentRecordsRequest();
      });
    } else {
      _this._bindLoadConsentRecordsRequest();
    }
    return _this;
  }
  _inherits(SmsConsentManagementView, _RcViewModule);
  return _createClass(SmsConsentManagementView, [{
    key: "_bindLoadConsentRecordsRequest",
    value: function _bindLoadConsentRecordsRequest() {
      var _this2 = this;
      this._loadConsentRecordsRequest$.pipe((0, _rxjs.switchMap)(function (task) {
        if (task.type === 'invalid') {
          _this2._activeQueryParams = undefined;
          _this2._setSearchError(true);
          _this2._setLoadingType('idle');
          task.resolve();
          return _rxjs.EMPTY;
        }
        if (task.type === 'reset') {
          var _settled = false;
          _this2._activeQueryParams = undefined;
          _this2._resetViewState();
          return (0, _rxjs.defer)(function () {
            return _this2._smsConsent.resetConsentsData();
          }).pipe((0, _rxjs.tap)(function () {
            _settled = true;
            task.resolve();
          }), (0, _rxjs.catchError)(function (error) {
            _settled = true;
            task.reject(error);
            return _rxjs.EMPTY;
          }), (0, _rxjs.finalize)(function () {
            if (!_settled) {
              task.resolve();
            }
          }));
        }
        var settled = false;
        _this2._setSearchError(false);
        _this2._setRequestError(false);
        _this2._setLoadingType(task.append ? 'append' : 'replace');
        if (!task.append) {
          _this2._activeQueryParams = undefined;
        }
        var search$ = _this2._smsConsent.searchConsentRecords$(task.params, {
          append: task.append
        });
        var request$ = task.append ? search$ : (0, _rxjs.defer)(function () {
          return _this2._smsConsent.resetConsentsData();
        }).pipe((0, _rxjs.concatMap)(function () {
          return search$;
        }));
        return request$.pipe((0, _rxjs.concatMap)(function (data) {
          if (!data) {
            return (0, _rxjs.of)(data);
          }
          return (0, _rxjs.defer)(function () {
            return _this2._matchContacts(data.records);
          }).pipe((0, _rxjs.map)(function () {
            return data;
          }));
        }), (0, _rxjs.tap)(function (data) {
          if (!task.append) {
            _this2._activeQueryParams = task.params;
          }
          settled = true;
          task.resolve(data);
        }), (0, _rxjs.catchError)(function (error) {
          _this2.logger.error('load sms consent records error', error);
          _this2._setRequestError(true);
          settled = true;
          task.resolve(undefined);
          return _rxjs.EMPTY;
        }), (0, _rxjs.finalize)(function () {
          _this2._setLoadingType('idle');
          if (!settled) {
            task.resolve(undefined);
          }
        }));
      }), _nextCore.takeUntilAppDestroy).subscribe();
    }
  }, {
    key: "_setSearchValue",
    value: function _setSearchValue(value) {
      this.searchValue = value;
      this.searchError = false;
      this.requestError = false;
    }
  }, {
    key: "_setSearchError",
    value: function _setSearchError(value) {
      this.searchError = value;
    }
  }, {
    key: "_setLoadingType",
    value: function _setLoadingType(value) {
      this.loadingType = value;
    }
  }, {
    key: "_setRequestError",
    value: function _setRequestError(value) {
      this.requestError = value;
    }
  }, {
    key: "_setFilterOpen",
    value: function _setFilterOpen(value) {
      this.filterOpen = value;
    }
  }, {
    key: "_setFilters",
    value: function _setFilters(filters) {
      this.filters = filters;
    }
  }, {
    key: "_resetViewState",
    value: function _resetViewState() {
      this.searchValue = '';
      this.searchError = false;
      this.loadingType = 'idle';
      this.requestError = false;
      this.filterOpen = false;
      this.filters = EMPTY_FILTERS;
    }
  }, {
    key: "showSetting",
    get: function get() {
      return !!this._smsConsent.canReadConsent;
    }
  }, {
    key: "loading",
    get: function get() {
      return this.loadingType === 'replace';
    }
  }, {
    key: "loadingMore",
    get: function get() {
      return this.loadingType === 'append';
    }
  }, {
    key: "openFilters",
    value: function () {
      var _openFilters = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              this._setFilterOpen(true);
            case 1:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function openFilters() {
        return _openFilters.apply(this, arguments);
      }
      return openFilters;
    }()
  }, {
    key: "closeFilters",
    value: function () {
      var _closeFilters = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              this._setFilterOpen(false);
            case 1:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function closeFilters() {
        return _closeFilters.apply(this, arguments);
      }
      return closeFilters;
    }()
  }, {
    key: "updateSearchValue",
    value: function () {
      var _updateSearchValue = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(value) {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              this._activeQueryParams = undefined;
              this._setSearchValue(value);
            case 1:
              return _context3.a(2);
          }
        }, _callee3, this);
      }));
      function updateSearchValue(_x) {
        return _updateSearchValue.apply(this, arguments);
      }
      return updateSearchValue;
    }()
  }, {
    key: "applyFilters",
    value: function () {
      var _applyFilters = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(filters) {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              this._setFilters(filters);
              this._setFilterOpen(false);
              _context4.n = 1;
              return this.loadConsentRecords();
            case 1:
              return _context4.a(2);
          }
        }, _callee4, this);
      }));
      function applyFilters(_x2) {
        return _applyFilters.apply(this, arguments);
      }
      return applyFilters;
    }()
  }, {
    key: "goToSettings",
    value: function () {
      var _goToSettings = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              this._router.push(SETTINGS_ROUTE);
            case 1:
              return _context5.a(2);
          }
        }, _callee5, this);
      }));
      function goToSettings() {
        return _goToSettings.apply(this, arguments);
      }
      return goToSettings;
    }()
  }, {
    key: "openAddConsent",
    value: function () {
      var _openAddConsent = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _this$_smsConsentDial;
        var saved;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _context6.n = 1;
              return (_this$_smsConsentDial = this._smsConsentDialogView) === null || _this$_smsConsentDial === void 0 ? void 0 : _this$_smsConsentDial.openAddConsentFromSettings();
            case 1:
              saved = _context6.v;
              if (!saved) {
                _context6.n = 2;
                break;
              }
              _context6.n = 2;
              return this.loadConsentRecords();
            case 2:
              return _context6.a(2);
          }
        }, _callee6, this);
      }));
      function openAddConsent() {
        return _openAddConsent.apply(this, arguments);
      }
      return openAddConsent;
    }()
  }, {
    key: "loadConsentRecords",
    value: function () {
      var _loadConsentRecords = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var _this3 = this;
        var _ref,
          _ref$append,
          append,
          _ref$searchValue,
          searchValue,
          _this$_smsConsent$con,
          nextPageToken,
          rawSearchValue,
          normalizedSearchValue,
          params,
          _args7 = arguments;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _ref = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {}, _ref$append = _ref.append, append = _ref$append === void 0 ? false : _ref$append, _ref$searchValue = _ref.searchValue, searchValue = _ref$searchValue === void 0 ? this.searchValue : _ref$searchValue;
              if (this._smsConsent.canReadConsent) {
                _context7.n = 1;
                break;
              }
              return _context7.a(2);
            case 1:
              if (!append) {
                _context7.n = 4;
                break;
              }
              if (!(this.loadingType !== 'idle')) {
                _context7.n = 2;
                break;
              }
              return _context7.a(2);
            case 2:
              nextPageToken = (_this$_smsConsent$con = this._smsConsent.consentsData) === null || _this$_smsConsent$con === void 0 ? void 0 : _this$_smsConsent$con.paging.nextPageToken;
              if (!(!nextPageToken || !this._activeQueryParams)) {
                _context7.n = 3;
                break;
              }
              return _context7.a(2);
            case 3:
              return _context7.a(2, new Promise(function (resolve) {
                _this3._loadConsentRecordsRequest$.next({
                  type: 'load',
                  params: _objectSpread(_objectSpread({}, _this3._activeQueryParams), {}, {
                    pageToken: nextPageToken
                  }),
                  append: true,
                  resolve: resolve
                });
              }));
            case 4:
              rawSearchValue = searchValue.trim();
              normalizedSearchValue = rawSearchValue ? this._smsConsent.normalizeNumber(rawSearchValue) : '';
              if (!(rawSearchValue && (!(0, _phoneNumber.isE164)(normalizedSearchValue) || !(0, _phoneNumber.isValidNumber)(normalizedSearchValue)))) {
                _context7.n = 5;
                break;
              }
              return _context7.a(2, new Promise(function (resolve) {
                _this3._loadConsentRecordsRequest$.next({
                  type: 'invalid',
                  resolve: resolve
                });
              }));
            case 5:
              params = {};
              if (normalizedSearchValue) {
                params.to = [normalizedSearchValue];
              }
              if (this.filters.coverage.length || this.filters.campaignType.length || this.filters.from.length) {
                // adjust coverage
                params.coverage = [].concat(_toConsumableArray(this.filters.coverage), _toConsumableArray(this.filters.campaignType.length ? [_services2.SmsConsentCoverage.CampaignType] : []), _toConsumableArray(this.filters.from.length ? [_services2.SmsConsentCoverage.PhoneNumber] : []));
              }
              if (this.filters.campaignType.length) {
                params.campaignType = this.filters.campaignType;
              }
              if (this.filters.from.length) {
                params.from = this.filters.from;
              }
              return _context7.a(2, new Promise(function (resolve) {
                _this3._loadConsentRecordsRequest$.next({
                  type: 'load',
                  params: params,
                  append: false,
                  resolve: resolve
                });
              }));
          }
        }, _callee7, this);
      }));
      function loadConsentRecords() {
        return _loadConsentRecords.apply(this, arguments);
      }
      return loadConsentRecords;
    }()
  }, {
    key: "resetConsentManagementView",
    value: function () {
      var _resetConsentManagementView = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var _this4 = this;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              return _context8.a(2, new Promise(function (resolve, reject) {
                _this4._loadConsentRecordsRequest$.next({
                  type: 'reset',
                  resolve: resolve,
                  reject: reject
                });
              }));
          }
        }, _callee8);
      }));
      function resetConsentManagementView() {
        return _resetConsentManagementView.apply(this, arguments);
      }
      return resetConsentManagementView;
    }()
  }, {
    key: "_matchContacts",
    value: function () {
      var _matchContacts2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(records) {
        var phoneNumbers;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              phoneNumbers = _toConsumableArray(new Set(records.map(function (_ref2) {
                var to = _ref2.to;
                return to;
              }).filter(Boolean)));
              if (!phoneNumbers.length) {
                _context9.n = 1;
                break;
              }
              _context9.n = 1;
              return this._contactMatcher.match({
                queries: phoneNumbers
              });
            case 1:
              return _context9.a(2);
          }
        }, _callee9, this);
      }));
      function _matchContacts(_x3) {
        return _matchContacts2.apply(this, arguments);
      }
      return _matchContacts;
    }()
  }, {
    key: "getContactName",
    value: function getContactName(phoneNumber) {
      var _this$_contactMatcher, _this$_contactMatcher2;
      return (_this$_contactMatcher = (_this$_contactMatcher2 = this._contactMatcher.findMatchesFromNumber(phoneNumber, undefined)[0]) === null || _this$_contactMatcher2 === void 0 ? void 0 : _this$_contactMatcher2.name) !== null && _this$_contactMatcher !== void 0 ? _this$_contactMatcher : '';
    }
  }, {
    key: "component",
    value: function component() {
      var _this$_portManager,
        _this5 = this;
      var didMountRef = (0, _react.useRef)(false);
      var shouldHandleLifecycle = !((_this$_portManager = this._portManager) !== null && _this$_portManager !== void 0 && _this$_portManager.shared) || this._portManager.isMainTab;
      var _useConnector = (0, _nextCore.useConnector)(function () {
          var _this5$_smsConsent$co, _this5$_smsConsent$co2;
          return {
            records: (_this5$_smsConsent$co = (_this5$_smsConsent$co2 = _this5._smsConsent.consentsData) === null || _this5$_smsConsent$co2 === void 0 ? void 0 : _this5$_smsConsent$co2.records) !== null && _this5$_smsConsent$co !== void 0 ? _this5$_smsConsent$co : [],
            registeredNumbers: _this5._smsConsent.registeredSmsNumbers,
            canAddConsent: _this5._smsConsent.canAddConsent,
            searchValue: _this5.searchValue,
            searchError: _this5.searchError,
            loading: _this5.loading,
            loadingMore: _this5.loadingMore,
            requestError: _this5.requestError,
            filterOpen: _this5.filterOpen,
            filters: _this5.filters
          };
        }),
        records = _useConnector.records,
        registeredNumbers = _useConnector.registeredNumbers,
        canAddConsent = _useConnector.canAddConsent,
        searchValue = _useConnector.searchValue,
        searchError = _useConnector.searchError,
        loading = _useConnector.loading,
        loadingMore = _useConnector.loadingMore,
        requestError = _useConnector.requestError,
        filterOpen = _useConnector.filterOpen,
        filters = _useConnector.filters;
      (0, _react.useEffect)(function () {
        if (!shouldHandleLifecycle) {
          return;
        }
        if (!didMountRef.current) {
          didMountRef.current = true;
          _this5.loadConsentRecords({
            searchValue: searchValue
          });
          return;
        }
        var timer = window.setTimeout(function () {
          _this5.loadConsentRecords({
            searchValue: searchValue
          });
        }, SEARCH_DEBOUNCE);
        return function () {
          return window.clearTimeout(timer);
        };
      }, [searchValue, shouldHandleLifecycle]);
      (0, _react.useEffect)(function () {
        if (!shouldHandleLifecycle) {
          return;
        }
        return function () {
          _this5.resetConsentManagementView();
        };
      }, [shouldHandleLifecycle]);
      return /*#__PURE__*/_react["default"].createElement(_SmsConsentManagementPanel.SmsConsentManagementPanel, {
        records: records,
        registeredNumbers: registeredNumbers,
        canAddConsent: canAddConsent,
        searchValue: searchValue,
        searchError: searchError,
        loading: loading,
        loadingMore: loadingMore,
        requestError: requestError,
        filterOpen: filterOpen,
        filters: filters,
        formatNumber: function formatNumber(phoneNumber) {
          return _this5._smsConsent.formatNumber(phoneNumber);
        },
        getContactName: function getContactName(phoneNumber) {
          return _this5.getContactName(phoneNumber);
        },
        onBackClick: function onBackClick() {
          return _this5.goToSettings();
        },
        onAddConsent: function onAddConsent() {
          return _this5.openAddConsent();
        },
        onSearchChange: function onSearchChange(value) {
          return _this5.updateSearchValue(value);
        },
        onFilterOpen: function onFilterOpen() {
          return _this5.openFilters();
        },
        onFilterClose: function onFilterClose() {
          return _this5.closeFilters();
        },
        onFiltersApply: function onFiltersApply(filters) {
          return _this5.applyFilters(filters);
        },
        onEndReached: function onEndReached() {
          return _this5.loadConsentRecords({
            append: true
          });
        }
      });
    }
  }]);
}(_nextCore.RcViewModule), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_smsConsentDialogView", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "searchValue", [_nextCore.state], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "searchError", [_nextCore.state], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "loadingType", [_nextCore.state, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 'idle';
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "requestError", [_nextCore.state], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "filterOpen", [_nextCore.state], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "filters", [_nextCore.state, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return EMPTY_FILTERS;
  }
}), _applyDecoratedDescriptor(_class2.prototype, "_setSearchValue", [_nextCore.action, _dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "_setSearchValue"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setSearchError", [_nextCore.action, _dec0, _dec1], Object.getOwnPropertyDescriptor(_class2.prototype, "_setSearchError"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setLoadingType", [_nextCore.action, _dec10, _dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "_setLoadingType"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setRequestError", [_nextCore.action, _dec12, _dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "_setRequestError"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setFilterOpen", [_nextCore.action, _dec14, _dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "_setFilterOpen"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setFilters", [_nextCore.action, _dec16, _dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "_setFilters"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_resetViewState", [_nextCore.action, _dec18, _dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "_resetViewState"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "openFilters", [_dec20, _dec21, _dec22], Object.getOwnPropertyDescriptor(_class2.prototype, "openFilters"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "closeFilters", [_dec23, _dec24, _dec25], Object.getOwnPropertyDescriptor(_class2.prototype, "closeFilters"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "updateSearchValue", [_dec26, _dec27, _dec28], Object.getOwnPropertyDescriptor(_class2.prototype, "updateSearchValue"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "applyFilters", [_dec29, _dec30, _dec31], Object.getOwnPropertyDescriptor(_class2.prototype, "applyFilters"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "goToSettings", [_dec32, _dec33, _dec34], Object.getOwnPropertyDescriptor(_class2.prototype, "goToSettings"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "openAddConsent", [_dec35, _dec36, _dec37], Object.getOwnPropertyDescriptor(_class2.prototype, "openAddConsent"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "loadConsentRecords", [_dec38, _dec39, _dec40], Object.getOwnPropertyDescriptor(_class2.prototype, "loadConsentRecords"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "resetConsentManagementView", [_dec41, _dec42, _dec43], Object.getOwnPropertyDescriptor(_class2.prototype, "resetConsentManagementView"), _class2.prototype), _class2)) || _class) || _class) || _class);
//# sourceMappingURL=SmsConsentManagement.view.js.map

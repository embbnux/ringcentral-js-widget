"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
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
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.reflect.get.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grant = void 0;
require("core-js/modules/es.array.some.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.to-string.js");
var _subscriptionFilters = require("@ringcentral-integration/commons/enums/subscriptionFilters");
var _fetchList = _interopRequireDefault(require("@ringcentral-integration/commons/lib/fetchList"));
var _services = require("@ringcentral-integration/micro-auth/src/app/services");
var _nextCore = require("@ringcentral-integration/next-core");
var _rxjs = require("rxjs");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
var DEFAULT_TTL = 5 * 60 * 1000; // 5 min
var Grant = exports.Grant = (_dec = (0, _nextCore.injectable)({
  name: 'Grant'
}), _dec2 = function _dec2(target, key) {
  return (0, _nextCore.optional)('Subscription')(target, undefined, 3);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _services.Client === "undefined" ? Object : _services.Client, typeof _services.ExtensionFeatures === "undefined" ? Object : _services.ExtensionFeatures, typeof _services.DataFetcher === "undefined" ? Object : _services.DataFetcher, typeof Subscription === "undefined" ? Object : Subscription]), _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", []), _dec7 = Reflect.metadata("design:type", Function), _dec8 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = /*#__PURE__*/function (_DataFetcherConsumer) {
  function Grant(_client, _extensionFeatures, _dataFetcher, _subscription) {
    var _this$_subscription;
    var _this;
    _classCallCheck(this, Grant);
    _this = _callSuper(this, Grant, [_dataFetcher]);
    _this._client = _client;
    _this._extensionFeatures = _extensionFeatures;
    _this._dataFetcher = _dataFetcher;
    _this._subscription = _subscription;
    _this._source = new _services.DataSource({
      key: 'extensionGrants',
      polling: false,
      disableCache: false,
      cleanOnReset: true,
      ttl: DEFAULT_TTL,
      fetchFunction: function () {
        var _fetchFunction = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
          var data;
          return _regenerator().w(function (_context2) {
            while (1) switch (_context2.n) {
              case 0:
                _context2.n = 1;
                return (0, _fetchList["default"])(/*#__PURE__*/function () {
                  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(params) {
                    var response;
                    return _regenerator().w(function (_context) {
                      while (1) switch (_context.n) {
                        case 0:
                          _context.n = 1;
                          return _this._client.service.platform().get('/restapi/v1.0/account/~/extension/~/grant', params);
                        case 1:
                          response = _context.v;
                          return _context.a(2, response.json());
                      }
                    }, _callee);
                  }));
                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());
              case 1:
                data = _context2.v;
                return _context2.a(2, data);
            }
          }, _callee2);
        }));
        function fetchFunction() {
          return _fetchFunction.apply(this, arguments);
        }
        return fetchFunction;
      }(),
      readyCheckFunction: function readyCheckFunction() {
        return _this.readyCheckFunction();
      },
      permissionCheckFunction: function permissionCheckFunction() {
        return _this.permissionCheckFunction();
      }
    });
    _this._dataFetcher.register(_this._source);
    (_this$_subscription = _this._subscription) === null || _this$_subscription === void 0 ? void 0 : _this$_subscription.register(_this, {
      filters: [_subscriptionFilters.subscriptionFilters.extensionGrants]
    });
    return _this;
  }
  _inherits(Grant, _DataFetcherConsumer);
  return _createClass(Grant, [{
    key: "onInitOnce",
    value: function onInitOnce() {
      var _this$_subscription2,
        _this2 = this;
      _superPropGet(Grant, "onInitOnce", this, 3)([]);
      (_this$_subscription2 = this._subscription) === null || _this$_subscription2 === void 0 ? void 0 : _this$_subscription2.fromMessage$(/\/extension\/.*.\/grant/).pipe((0, _rxjs.tap)(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _t;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return _this2.refetchGrants();
            case 1:
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t = _context3.v;
              _this2.logger.error('grant update error', _t);
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }))), _nextCore.takeUntilAppDestroy).subscribe();
    }
  }, {
    key: "grants",
    get: function get() {
      return this.data || [];
    }
  }, {
    key: "grantsMap",
    get: function get() {
      var result = {};
      var _iterator = _createForOfIteratorHelper(this.grants),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var grant = _step.value;
          result[grant.extension.id] = grant;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return result;
    }
  }, {
    key: "hasCompanyExtensionGrant",
    get: function get() {
      return this.grants.some(function (grant) {
        return grant.extension.type === 'CompanyExtension' && grant.smsRecipient;
      });
    }
  }, {
    key: "isSharedSmsRecipientGrant",
    value: function isSharedSmsRecipientGrant(extensionId) {
      var grant = this.grantsMap[extensionId];
      return !!(grant && (
      // be site number
      grant.extension.type === 'Site' || grant.extension.type === 'Department') &&
      // have recipient permission
      grant.smsRecipient);
    }
  }, {
    key: "isCallQueueExtensionById",
    value: function isCallQueueExtensionById(extensionId) {
      var grant = this.grantsMap[extensionId];
      return !!(grant && grant.extension.type === 'Department' && grant.callQueueSmsRecipient);
    }

    /**
     * Fetch function for DataSource
     */
  }, {
    key: "refetchGrants",
    value: function refetchGrants() {
      return this.fetchData();
    }
  }, {
    key: "readyCheckFunction",
    value: function readyCheckFunction() {
      return this._extensionFeatures.ready;
    }
  }, {
    key: "permissionCheckFunction",
    value: function permissionCheckFunction() {
      var _this$_extensionFeatu, _this$_extensionFeatu2, _this$_extensionFeatu3, _this$_extensionFeatu4, _this$_extensionFeatu5, _this$_extensionFeatu6;
      return !!((_this$_extensionFeatu = this._extensionFeatures.features) !== null && _this$_extensionFeatu !== void 0 && (_this$_extensionFeatu2 = _this$_extensionFeatu.CallQueuePickup) !== null && _this$_extensionFeatu2 !== void 0 && _this$_extensionFeatu2.available || (_this$_extensionFeatu3 = this._extensionFeatures.features) !== null && _this$_extensionFeatu3 !== void 0 && (_this$_extensionFeatu4 = _this$_extensionFeatu3.CallQueueSmsRecipient) !== null && _this$_extensionFeatu4 !== void 0 && _this$_extensionFeatu4.available || (_this$_extensionFeatu5 = this._extensionFeatures.features) !== null && _this$_extensionFeatu5 !== void 0 && (_this$_extensionFeatu6 = _this$_extensionFeatu5.MessageThreads) !== null && _this$_extensionFeatu6 !== void 0 && _this$_extensionFeatu6.available);
    }
  }]);
}(_services.DataFetcherConsumer), _applyDecoratedDescriptor(_class2.prototype, "grantsMap", [_nextCore.computed, _dec5, _dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "grantsMap"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "hasCompanyExtensionGrant", [_nextCore.computed, _dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "hasCompanyExtensionGrant"), _class2.prototype), _class2)) || _class) || _class) || _class) || _class);
//# sourceMappingURL=Grant.js.map

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
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
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
exports.QueueMessageStore = void 0;
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.sort.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.to-string.js");
var _subscriptionFilters = require("@ringcentral-integration/commons/enums/subscriptionFilters");
var _messageHelper = require("@ringcentral-integration/commons/lib/messageHelper");
var _services = require("@ringcentral-integration/micro-auth/src/app/services");
var _services2 = require("@ringcentral-integration/micro-core/src/app/services");
var _services3 = require("@ringcentral-integration/micro-phone/src/app/services");
var _nextCore = require("@ringcentral-integration/next-core");
var _rxjs = require("rxjs");
var _MessageStoreBase2 = require("../MessageStore/MessageStoreBase");
var _MessageStoreEventSubscriber = require("../MessageStoreEventSubscriber");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec0, _dec1, _dec10, _dec11, _dec12, _class, _class2;
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
var QueueMessageStore = exports.QueueMessageStore = (_dec = (0, _nextCore.injectable)({
  name: 'QueueMessageStore'
}), _dec2 = function _dec2(target, key) {
  return (0, _nextCore.optional)('Subscription')(target, undefined, 10);
}, _dec3 = function _dec3(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 11);
}, _dec4 = function _dec4(target, key) {
  return (0, _nextCore.optional)('TabManager')(target, undefined, 12);
}, _dec5 = function _dec5(target, key) {
  return (0, _nextCore.optional)('QueueMessageStoreOptions')(target, undefined, 13);
}, _dec6 = Reflect.metadata("design:type", Function), _dec7 = Reflect.metadata("design:paramtypes", [typeof _services2.Toast === "undefined" ? Object : _services2.Toast, typeof _services.Auth === "undefined" ? Object : _services.Auth, typeof _services.Client === "undefined" ? Object : _services.Client, typeof _services.DataFetcher === "undefined" ? Object : _services.DataFetcher, typeof _services.ConnectivityMonitor === "undefined" ? Object : _services.ConnectivityMonitor, typeof _MessageStoreEventSubscriber.MessageStoreEventSubscriber === "undefined" ? Object : _MessageStoreEventSubscriber.MessageStoreEventSubscriber, typeof _services.AppFeatures === "undefined" ? Object : _services.AppFeatures, typeof _services3.Grant === "undefined" ? Object : _services3.Grant, typeof _services3.CallQueues === "undefined" ? Object : _services3.CallQueues, typeof _nextCore.PortManager === "undefined" ? Object : _nextCore.PortManager, typeof Subscription === "undefined" ? Object : Subscription, typeof _services.AvailabilityMonitor === "undefined" ? Object : _services.AvailabilityMonitor, Object, typeof QueueMessageStoreOptions === "undefined" ? Object : QueueMessageStoreOptions]), _dec8 = Reflect.metadata("design:type", Function), _dec9 = Reflect.metadata("design:paramtypes", []), _dec0 = Reflect.metadata("design:type", Function), _dec1 = Reflect.metadata("design:paramtypes", []), _dec10 = (0, _nextCore.delegate)('server'), _dec11 = Reflect.metadata("design:type", Function), _dec12 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = (_class2 = /*#__PURE__*/function (_MessageStoreBase) {
  function QueueMessageStore(_toast, _auth, _client, _dataFetcher, _connectivityMonitor, _messageEventSubscriber, _appFeatures, _grant, _callQueues, _portManager, _subscription, _availabilityMonitor, _tabManager, _messageStoreOptions) {
    var _this$_subscription;
    var _this;
    _classCallCheck(this, QueueMessageStore);
    _this = _callSuper(this, QueueMessageStore, [_toast, _auth, _client, _dataFetcher, _connectivityMonitor, _appFeatures, _messageEventSubscriber, _availabilityMonitor, _tabManager, _objectSpread(_objectSpread({}, _messageStoreOptions), {}, {
      messageType: ['SMS'],
      messageStoreKey: 'queueMessageStore',
      limitDateFrom: false,
      fSyncRequestParams: {
        owner: 'Shared',
        messageType: 'SMS'
      }
    })]);
    _this._toast = _toast;
    _this._auth = _auth;
    _this._client = _client;
    _this._dataFetcher = _dataFetcher;
    _this._connectivityMonitor = _connectivityMonitor;
    _this._messageEventSubscriber = _messageEventSubscriber;
    _this._appFeatures = _appFeatures;
    _this._grant = _grant;
    _this._callQueues = _callQueues;
    _this._portManager = _portManager;
    _this._subscription = _subscription;
    _this._availabilityMonitor = _availabilityMonitor;
    _this._tabManager = _tabManager;
    _this._messageStoreOptions = _messageStoreOptions;
    _this._messageIsUnreadFunc = _messageHelper.directionlessMessageIsUnread;
    (_this$_subscription = _this._subscription) === null || _this$_subscription === void 0 ? void 0 : _this$_subscription.register(_this, {
      filters: [_subscriptionFilters.subscriptionFilters.sharedSms]
    });
    if (_this._portManager.shared) {
      _this._portManager.onServer(function () {
        _this.initListener();
      });
    } else {
      _this.initListener();
    }
    return _this;
  }
  _inherits(QueueMessageStore, _MessageStoreBase);
  return _createClass(QueueMessageStore, [{
    key: "_readyCheck",
    get: function get() {
      return _superPropGet(QueueMessageStore, "_readyCheck", this, 1) && this._grant.ready && this._callQueues.ready;
    }
  }, {
    key: "_shouldHandleInstantMessageEvent",
    get: function get() {
      // Instant-message payloads do not carry the scoped Message Sync token.
      return false;
    }
  }, {
    key: "_shouldHandleMessageStoreEvent",
    get: function get() {
      return false;
    }
  }, {
    key: "_hasPermission",
    get: function get() {
      return Boolean(this._appFeatures.hasReadTextPermission && this.eligibleGrantIds.length > 0);
    }
  }, {
    key: "eligibleGrantIds",
    get: function get() {
      return this._grant.grants.filter(function (_ref) {
        var extension = _ref.extension,
          callQueueSmsRecipient = _ref.callQueueSmsRecipient;
        return extension.type === 'Department' && callQueueSmsRecipient;
      }).map(function (_ref2) {
        var extension = _ref2.extension;
        return extension.id;
      }).sort();
    }
  }, {
    key: "_eligibilitySignature",
    get: function get() {
      return "".concat(this.eligibleGrantIds.join(','));
    }
  }, {
    key: "initListener",
    value: function initListener() {
      var _this2 = this;
      var subscription = this._subscription;
      if (!subscription) return;
      var permission$ = (0, _nextCore.fromWatchValue)(this, function () {
        return _this2._hasPermission;
      }).pipe((0, _rxjs.startWith)(false), (0, _rxjs.pairwise)(), (0, _rxjs.tap)(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          prev = _ref4[0],
          current = _ref4[1];
        if (prev && !current) {
          _this2.logger.log('from permission become no permission, reset queue message data');
          void _this2._updateData(null);
        }
      }), (0, _rxjs.distinctUntilChanged)(), (0, _rxjs.map)(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
          current = _ref6[1];
        _this2.logger.log('current permission:', current);
        return current;
      }));

      // when eligibleGrantIds change, need to reset the data and fetch new data
      var eligibleGrantIdsChange$ = (0, _nextCore.fromWatch)(this, function () {
        return _this2._eligibilitySignature;
      }).pipe((0, _rxjs.switchMap)(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _this2.logger.log('eligibleGrantIds changed, reset queue message data');
              _context.n = 1;
              return _this2._resetForEligibleGrantChange();
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }))));
      var sharedSmsEvent$ = subscription.fromMessage$(/\/shared-sms$/).pipe((0, _rxjs.switchMap)(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return _this2.fetchData({
                passive: true
              });
            case 1:
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t = _context2.v;
              _this2.logger.error('Shared SMS incremental sync failed', _t);
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))));
      this.rehydrated$.pipe((0, _rxjs.switchMap)(function () {
        return subscription.readyState$;
      }), (0, _rxjs.switchMap)(function (ready) {
        return ready ? permission$ : _rxjs.EMPTY;
      }), (0, _rxjs.switchMap)(function (hasPermission) {
        return hasPermission ? (0, _rxjs.merge)(sharedSmsEvent$, eligibleGrantIdsChange$) : _rxjs.EMPTY;
      }), _nextCore.takeUntilAppDestroy).subscribe();
    }
  }, {
    key: "_resetForEligibleGrantChange",
    value: function () {
      var _resetForEligibleGrantChange2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (!(this.data !== null)) {
                _context3.n = 1;
                break;
              }
              _context3.n = 1;
              return this._updateData(null);
            case 1:
              if (!this._hasPermission) {
                _context3.n = 2;
                break;
              }
              this.logger.log('eligibleGrantIds changed, fetch new queue message data');
              _context3.n = 2;
              return this.fetchData({
                passive: true
              });
            case 2:
              return _context3.a(2);
          }
        }, _callee3, this);
      }));
      function _resetForEligibleGrantChange() {
        return _resetForEligibleGrantChange2.apply(this, arguments);
      }
      return _resetForEligibleGrantChange;
    }()
  }]);
}(_MessageStoreBase2.MessageStoreBase), _applyDecoratedDescriptor(_class2.prototype, "eligibleGrantIds", [_nextCore.computed, _dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "eligibleGrantIds"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_eligibilitySignature", [_nextCore.computed, _dec0, _dec1], Object.getOwnPropertyDescriptor(_class2.prototype, "_eligibilitySignature"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_resetForEligibleGrantChange", [_dec10, _dec11, _dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "_resetForEligibleGrantChange"), _class2.prototype), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
//# sourceMappingURL=QueueMessageStore.js.map

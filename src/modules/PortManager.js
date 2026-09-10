"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.index-of.js");
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
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PortManager = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.find.js");
require("core-js/modules/es.array.find-index.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.date.now.js");
require("core-js/modules/es.date.to-json.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.map.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.set.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.weak-set.js");
require("core-js/modules/esnext.global-this.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/web.timers.js");
var _reactant = require("reactant");
var _reactantShare = require("reactant-share");
var _rxjs = require("rxjs");
var _constant = require("../constant");
var _applyMethod = require("../lib/applyMethod");
var _browserLocation = require("../lib/browserLocation");
var _delegate = require("../lib/decorators/delegate");
var _delegateRole = require("../lib/decorators/delegateRole");
var _parallel = require("../lib/decorators/parallel");
var _parallelClients = require("../lib/decorators/parallelClients");
var _handleMainClient = require("../lib/handleMainClient");
var _roleDelegation = require("../lib/roleDelegation");
var _excluded = ["reason"];
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec0, _dec1, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var systemRolePolicies = new Map([[_roleDelegation.systemRoles.server.role, {
  definition: _roleDelegation.systemRoles.server,
  membership: 'server',
  mutable: false,
  claimable: false,
  allowsEmpty: false
}], [_roleDelegation.systemRoles.connectedClients.role, {
  definition: _roleDelegation.systemRoles.connectedClients,
  membership: 'clients',
  mutable: false,
  claimable: false,
  allowsEmpty: true
}], [_roleDelegation.systemRoles.electedClient.role, {
  definition: _roleDelegation.systemRoles.electedClient,
  membership: 'elected',
  mutable: true,
  claimable: true,
  allowsEmpty: false
}], [_roleDelegation.systemRoles.all.role, {
  definition: _roleDelegation.systemRoles.all,
  membership: 'all',
  mutable: false,
  claimable: false,
  allowsEmpty: false
}]]);
var serverRoleOwner = '__SERVER__';
var confirmedRoleControlErrors = new WeakSet();
var delegateRoleControl = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(target, method, args) {
    var result, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.n = 1;
          return (0, _delegate.delegate)(target, '_handleRoleControl', [method, args]);
        case 1:
          result = _context.v;
          _context.p = 2;
          return _context.a(2, (0, _roleDelegation.unwrapRoleResult)(result));
        case 3:
          _context.p = 3;
          _t = _context.v;
          if (result && !result.ok && _t instanceof Error) {
            confirmedRoleControlErrors.add(_t);
          }
          throw _t;
        case 4:
          return _context.a(2);
      }
    }, _callee, null, [[2, 3]]);
  }));
  return function delegateRoleControl(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var PortManager = exports.PortManager = (_dec = (0, _reactant.injectable)({
  name: 'PortManager'
}), _dec2 = function _dec2(target, key) {
  return (0, _reactant.optional)('Prefix')(target, undefined, 1);
}, _dec3 = function _dec3(target, key) {
  return (0, _reactant.optional)('PortManagerOptions')(target, undefined, 2);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _reactantShare.PortDetector === "undefined" ? Object : _reactantShare.PortDetector, String, typeof PortManagerOptions === "undefined" ? Object : PortManagerOptions]), _dec6 = Reflect.metadata("design:type", Array), _dec7 = Reflect.metadata("design:type", String), _dec8 = Reflect.metadata("design:type", Function), _dec9 = Reflect.metadata("design:paramtypes", [String]), _dec0 = (0, _delegate.delegate)('server'), _dec1 = Reflect.metadata("design:type", Function), _dec10 = Reflect.metadata("design:paramtypes", [String]), _dec11 = Reflect.metadata("design:type", String), _dec12 = Reflect.metadata("design:type", Function), _dec13 = Reflect.metadata("design:paramtypes", [String]), _dec14 = (0, _delegate.delegate)('server'), _dec15 = Reflect.metadata("design:type", Function), _dec16 = Reflect.metadata("design:paramtypes", [String]), _dec17 = (0, _delegate.delegate)('clients'), _dec18 = Reflect.metadata("design:type", Function), _dec19 = Reflect.metadata("design:paramtypes", []), _dec20 = Reflect.metadata("design:type", Function), _dec21 = Reflect.metadata("design:paramtypes", [typeof RoleState === "undefined" ? Object : RoleState]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (_class2 = /*#__PURE__*/function () {
  function PortManager(portDetector, prefix, portManagerOptions) {
    var _this = this;
    _classCallCheck(this, PortManager);
    this.portDetector = portDetector;
    this.prefix = prefix;
    this.portManagerOptions = portManagerOptions;
    this.localRoles = new Map();
    this.localRoleRevisions = new Map();
    this.serverRoles = new Map();
    this.systemClientIds = new Set();
    this.previousLocalClientId = void 0;
    this.roleOperationQueues = new Map();
    this.transitioningRoles = new Set();
    this.roleStateSubjects = new Map();
    this.roleTransitionSubjects = new Map();
    _initializerDefineProperty(this, "roleSnapshots", _descriptor, this);
    this.localRoleSnapshots = [];
    /**
     * sync state with main client
     */
    this.portType$ = new _rxjs.BehaviorSubject(null);
    /**
     * emit when main tab change, only work in shared mode of server port
     */
    this.onMainTabChange$ = this.shared ? new _rxjs.Observable(function (subscriber) {
      _this.onMainTabChange(function () {
        subscriber.next(true);
      });
    }) : _rxjs.EMPTY;
    this.onServer = this.portDetector.onServer;
    this.onClient = this.portDetector.onClient;
    this.mainTabSyncStore = !this.shared;
    this.resolveMainTabClient = void 0;
    /**
     * Parallel load main client and server, it ensures that waiting for main client in server
     */
    this.promiseMainTabClient = void 0;
    this.checkMainTabMapping = new Map();
    this.customClientDelegateNameMapping = new Map();
    this.initMainClient$ = new _rxjs.ReplaySubject();
    this.systemRolesReady = void 0;
    this.mainClientId = null;
    this.changeClientCallbacks = new Set();
    /**
     * It will be triggered on the server port if the main client is changed to another one.
     */
    this.onMainTabChange = function (callback) {
      if (!_this.portDetector.isServer) {
        throw new Error('Only server can listen on main client change');
      }
      _this.changeClientCallbacks.add(callback);
      return function () {
        _this.changeClientCallbacks["delete"](callback);
      };
    };
    this.mainTabCallbacks = new Set();
    /**
     * It will be triggered if the current client is the main client.
     */
    this.onMainTab = function (callback) {
      _this.mainTabCallbacks.add(callback);
      return function () {
        _this.mainTabCallbacks["delete"](callback);
      };
    };
    /**
     * the active tab id means the user latest interacted tab
     *
     * ! this value possible be null, because the user may not interact with any tab
     * ! if the active tab be close and user not open another tab again, the active tab id will be null
     */
    _initializerDefineProperty(this, "activeTabId", _descriptor2, this);
    /**
     * The active non-main tab id means the user latest interacted non-main tab
     */
    _initializerDefineProperty(this, "activeNonMainTabId", _descriptor3, this);
    this._setAsVisibleTab = function () {
      // avoid setting activeTabId repeatedly which may result in forced rendering
      if (!document.hidden && !_this.isActiveTab) {
        _this.setActiveTabId(_this.clientId);
      }
      if (!document.hidden && !_this.isActiveNonMainTab && !_this.isMainTab) {
        _this.setActiveNonMainTabId(_this.clientId);
      }
    };
    var resolveSystemRoles;
    var rejectSystemRoles;
    this.systemRolesReady = new Promise(function (resolve, reject) {
      resolveSystemRoles = resolve;
      rejectSystemRoles = reject;
    });
    void this.systemRolesReady["catch"](function () {
      return undefined;
    });
    (0, _reactant.watch)(this, function () {
      return _this.roleSnapshots;
    }, function (snapshots) {
      var _iterator = _createForOfIteratorHelper(snapshots),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var snapshot = _step.value;
          _this._notifyRoleSnapshot(snapshot);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
    var _handleMainClientOnServer = (0, _handleMainClient.handleMainClientOnServer)(this);
    this.portDetector.serverHooks.mainClient = function (options) {
      return _handleMainClientOnServer(options);
    };
    var _handleParallelClientsOnServer = (0, _parallelClients.handleParallelClientsOnServer)(this);
    this.portDetector.serverHooks.clients = function (options) {
      return _handleParallelClientsOnServer(options);
    };
    var _handleAllPortsOnServer = (0, _parallel.handleAllPortsOnServer)(this.portDetector);
    this.portDetector.serverHooks.all = function (options) {
      return _handleAllPortsOnServer(options);
    };
    this.promiseMainTabClient = new Promise(function (resolve) {
      _this.resolveMainTabClient = resolve;
    });
    this.onClient(function (transport) {
      var _this$portManagerOpti;
      transport.listen(_constant.mainTabClientReload, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              (0, _browserLocation.reloadRuntimeLocation)();
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      })));
      _this.portType$.next(_constant.PortType.Client);
      // non-main tab will sync full state
      _this.mainTabSyncStore = true;
      if (!_this.isWorkerMode) return;
      var initMainClient = function initMainClient() {
        var _globalThis$__rc_shar, _globalThis$__rc_shar2, _this$prefix;
        var sharedWorkerUrl = (_globalThis$__rc_shar = (_globalThis$__rc_shar2 = globalThis.__rc_shared_worker__) === null || _globalThis$__rc_shar2 === void 0 ? void 0 : _globalThis$__rc_shar2.url) !== null && _globalThis$__rc_shar !== void 0 ? _globalThis$__rc_shar : '';
        var lockName = "".concat(_constant.mainClient, "-").concat((_this$prefix = _this.prefix) !== null && _this$prefix !== void 0 ? _this$prefix : '', "-").concat(_this.portDetector.name, "-").concat(sharedWorkerUrl);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return (0, _reactantShare.useLock)(lockName, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
          var _iterator2, _step2, callback;
          return _regenerator().w(function (_context4) {
            while (1) switch (_context4.n) {
              case 0:
                _this.mainTabSyncStore = false;
                _this.portType$.next(_constant.PortType.MainClient);
                transport.listen(_constant.mainTabClientDelegate, /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(options) {
                    var module, result;
                    return _regenerator().w(function (_context3) {
                      while (1) switch (_context3.n) {
                        case 0:
                          module = (0, _reactant.getRef)(_this).modules[options.module];
                          _context3.n = 1;
                          return (0, _applyMethod.applyMethod)(module, options);
                        case 1:
                          result = _context3.v;
                          return _context3.a(2, result);
                      }
                    }, _callee3);
                  }));
                  return function (_x4) {
                    return _ref4.apply(this, arguments);
                  };
                }());
                _iterator2 = _createForOfIteratorHelper(_this.mainTabCallbacks);
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    callback = _step2.value;
                    try {
                      callback(transport);
                    } catch (e) {
                      // eslint-disable-next-line no-console
                      console.error(e);
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
                transport.emit({
                  name: _constant.mainTabClientChange,
                  respond: false
                }, {
                  clientId: _this.clientId
                });
                return _context4.a(2, new Promise(function () {
                  // never end promise for all this client hold this lock and never release it
                  // until that client be closed or refreshed
                }));
            }
          }, _callee4);
        })));
      };
      if (!((_this$portManagerOpti = _this.portManagerOptions) !== null && _this$portManagerOpti !== void 0 && _this$portManagerOpti.disableAutoPickMainTab)) {
        return initMainClient();
      } else {
        _this.initMainClient$.pipe((0, _rxjs.filter)(Boolean), (0, _rxjs.take)(1), (0, _rxjs.tap)(function () {
          return initMainClient();
        })).subscribe();
      }
    });
    this.onServer(function (transport) {
      _this.portType$.next(_constant.PortType.Server);
      if (!_this.isWorkerMode) {
        // workaround: in safari, main tab will close and other tabs will reload
        globalThis.window.addEventListener('pagehide', function () {
          transport.emit(_constant.mainTabClientReload);
        });
        var _iterator3 = _createForOfIteratorHelper(_this.mainTabCallbacks),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var callback = _step3.value;
            try {
              callback(transport);
            } catch (e) {
              // eslint-disable-next-line no-console
              console.error(e);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        return;
      }
      return transport.listen(_constant.mainTabClientChange, /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(_ref5) {
          var _this$resolveMainTabC;
          var clientId, oldClient, _iterator4, _step4, _callback;
          return _regenerator().w(function (_context5) {
            while (1) switch (_context5.n) {
              case 0:
                clientId = _ref5.clientId;
                oldClient = _this.mainClientId;
                _this.mainClientId = clientId;
                (_this$resolveMainTabC = _this.resolveMainTabClient) === null || _this$resolveMainTabC === void 0 ? void 0 : _this$resolveMainTabC.call(_this);
                if (oldClient) {
                  _iterator4 = _createForOfIteratorHelper(_this.changeClientCallbacks);
                  try {
                    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                      _callback = _step4.value;
                      try {
                        _callback(transport);
                      } catch (e) {
                        // eslint-disable-next-line no-console
                        console.error(e);
                      }
                    }
                  } catch (err) {
                    _iterator4.e(err);
                  } finally {
                    _iterator4.f();
                  }
                }
              case 1:
                return _context5.a(2);
            }
          }, _callee5);
        }));
        return function (_x5) {
          return _ref6.apply(this, arguments);
        };
      }());
    });
    this.portDetector.onClientDestroy(function (clientId) {
      var _getRef$container$got, _getRef$container;
      var portManager = (_getRef$container$got = (_getRef$container = (0, _reactant.getRef)(_this).container) === null || _getRef$container === void 0 ? void 0 : _getRef$container.got(PortManager)) !== null && _getRef$container$got !== void 0 ? _getRef$container$got : _this;
      if (portManager.mainClientId === clientId) {
        portManager.mainClientId = null;
      }
      portManager.systemClientIds["delete"](clientId);
      portManager._publishDerivedSystemRoleStates();
      var _iterator5 = _createForOfIteratorHelper(portManager.serverRoles),
        _step5;
      try {
        var _loop = function _loop() {
          var _step5$value = _slicedToArray(_step5.value, 2),
            role = _step5$value[0],
            record = _step5$value[1];
          void portManager._enqueueRoleOperation(role, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
            var _t2, _t3;
            return _regenerator().w(function (_context6) {
              while (1) switch (_context6.n) {
                case 0:
                  record.candidates["delete"](clientId);
                  record.mismatchedCandidates["delete"](clientId);
                  if (record.owners["delete"](clientId)) {
                    _context6.n = 1;
                    break;
                  }
                  return _context6.a(2);
                case 1:
                  record.revision += 1;
                  _t2 = portManager;
                  _t3 = record;
                  _context6.n = 2;
                  return portManager._syncRoleRevisions(role, record);
                case 2:
                  _t2._removeUnsyncedOwners.call(_t2, _t3, _context6.v);
                  portManager._publishRoleState(role, record);
                  if (!record.definition.autoElect) {
                    _context6.n = 3;
                    break;
                  }
                  _context6.n = 3;
                  return portManager._electRole(role, record);
                case 3:
                  return _context6.a(2);
              }
            }, _callee6);
          })));
        };
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    });
    this.onMainTab(function () {
      if (_this.isWorkerMode) {
        _this.setAsMainClient();
      }
    });
    if (globalThis.document && this.shared) {
      this._bindVisibilityListener();
      this._bindUnloadListener();
    }
    this.onClient(function () {
      // only set active tab id when the client is visible
      _this._setAsVisibleTab();
    });
    this.onServer(function () {
      // trigger visibility check event when the server port is created
      _this.checkVisibleTabInAllClient();
    });
    var initializeSystemRoles = function initializeSystemRoles() {
      var _getRef$container$got2, _getRef$container2;
      var portManager = (_getRef$container$got2 = (_getRef$container2 = (0, _reactant.getRef)(_this).container) === null || _getRef$container2 === void 0 ? void 0 : _getRef$container2.got(PortManager)) !== null && _getRef$container$got2 !== void 0 ? _getRef$container$got2 : _this;
      void portManager._initializeSystemRoles().then(resolveSystemRoles, rejectSystemRoles);
    };
    var scheduleSystemRoleInitialization = function scheduleSystemRoleInitialization() {
      void Promise.resolve().then(initializeSystemRoles);
    };
    this.onClient(function () {
      var _this$clientId;
      _this.previousLocalClientId = (_this$clientId = _this.clientId) !== null && _this$clientId !== void 0 ? _this$clientId : undefined;
      scheduleSystemRoleInitialization();
    });
    this.onServer(scheduleSystemRoleInitialization);
    if (!this.shared) scheduleSystemRoleInitialization();
  }
  return _createClass(PortManager, [{
    key: "portType",
    get: function get() {
      return this.portType$.value;
    }
  }, {
    key: "isWorkerMode",
    get: function get() {
      return this.portDetector.isWorkerMode;
    }
  }, {
    key: "shared",
    get: function get() {
      return this.portDetector.shared;
    }
  }, {
    key: "setAsMainClient",
    value: function setAsMainClient() {
      this.portDetector.allowDisableSync = function () {
        return false;
      };
      this.portDetector.syncFullState({
        forceSync: false
      });
    }
  }, {
    key: "isServer",
    get: function get() {
      return this.portDetector.isServer;
    }
  }, {
    key: "isClient",
    get: function get() {
      return this.portDetector.isClient;
    }
  }, {
    key: "isMainTab",
    get: function get() {
      return this.isWorkerMode ? this.portType === _constant.PortType.MainClient : this.portType === _constant.PortType.Server;
    }
  }, {
    key: "_setActiveTabId",
    value: function _setActiveTabId(tabId) {
      this.activeTabId = tabId;
    }
  }, {
    key: "setActiveTabId",
    value: function () {
      var _setActiveTabId2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(tabId) {
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              this._setActiveTabId(tabId);
            case 1:
              return _context7.a(2);
          }
        }, _callee7, this);
      }));
      function setActiveTabId(_x6) {
        return _setActiveTabId2.apply(this, arguments);
      }
      return setActiveTabId;
    }()
  }, {
    key: "_setActiveNonMainTabId",
    value: function _setActiveNonMainTabId(tabId) {
      this.activeNonMainTabId = tabId;
    }
  }, {
    key: "setActiveNonMainTabId",
    value: function () {
      var _setActiveNonMainTabId2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(tabId) {
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              this._setActiveNonMainTabId(tabId);
            case 1:
              return _context8.a(2);
          }
        }, _callee8, this);
      }));
      function setActiveNonMainTabId(_x7) {
        return _setActiveNonMainTabId2.apply(this, arguments);
      }
      return setActiveNonMainTabId;
    }()
  }, {
    key: "_bindVisibilityListener",
    value: function _bindVisibilityListener() {
      globalThis.document.addEventListener('visibilitychange', this._setAsVisibleTab);
      globalThis.window.addEventListener('focus', this._setAsVisibleTab);
    }
  }, {
    key: "_bindUnloadListener",
    value: function _bindUnloadListener() {
      var _this2 = this;
      globalThis.window.addEventListener('pagehide', function () {
        if (_this2.isActiveTab) {
          _this2.setActiveTabId(null);
        }
      });
    }
  }, {
    key: "checkVisibleTabInAllClient",
    value: function () {
      var _checkVisibleTabInAllClient = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              this._setAsVisibleTab();
            case 1:
              return _context9.a(2);
          }
        }, _callee9, this);
      }));
      function checkVisibleTabInAllClient() {
        return _checkVisibleTabInAllClient.apply(this, arguments);
      }
      return checkVisibleTabInAllClient;
    }()
  }, {
    key: "isActiveTab",
    get: function get() {
      return this.activeTabId === this.clientId;
    }
  }, {
    key: "isActiveNonMainTab",
    get: function get() {
      return this.activeNonMainTabId === this.clientId;
    }
  }, {
    key: "clientId",
    get: function get() {
      return this.portDetector.clientId;
    }
  }, {
    key: "transports",
    get: function get() {
      return this.portDetector.transports;
    }
  }, {
    key: "transport",
    get: function get() {
      return this.portDetector.transport;
    }

    /** Register lifecycle callbacks locally before claiming a domain role. */
  }, {
    key: "registerRole",
    value: (function () {
      var _registerRole2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(definition) {
        var lifecycle,
          localRole,
          result,
          _args0 = arguments,
          _t4;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.p = _context0.n) {
            case 0:
              lifecycle = _args0.length > 1 && _args0[1] !== undefined ? _args0[1] : {};
              this._validateRoleDefinition(definition);
              this._validateDomainRole(definition.role);
              localRole = this.localRoles.get(definition.role);
              if (!(localRole && (!localRole.registrationUncertain || !this._definitionsMatch(localRole.definition, definition)))) {
                _context0.n = 1;
                break;
              }
              throw new Error("Role '".concat(definition.role, "' is already registered locally."));
            case 1:
              if (localRole) {
                localRole.registrationUncertain = false;
              } else {
                localRole = {
                  definition: definition,
                  lifecycle: lifecycle,
                  registrationUncertain: false
                };
                this.localRoles.set(definition.role, localRole);
              }
              _context0.p = 2;
              if (!this.isClient) {
                _context0.n = 4;
                break;
              }
              _context0.n = 3;
              return delegateRoleControl(this, 'register', [definition, this.clientId]);
            case 3:
              result = _context0.v;
              _context0.n = 6;
              break;
            case 4:
              _context0.n = 5;
              return this._registerRole(definition, serverRoleOwner);
            case 5:
              result = _context0.v;
            case 6:
              return _context0.a(2, result);
            case 7:
              _context0.p = 7;
              _t4 = _context0.v;
              if (_t4 instanceof _roleDelegation.RoleDefinitionMismatchError) {
                localRole.registrationUncertain = false;
              } else if (_t4 instanceof Error && confirmedRoleControlErrors.has(_t4)) {
                this.localRoles["delete"](definition.role);
              } else {
                localRole.registrationUncertain = true;
              }
              throw _t4;
            case 8:
              return _context0.a(2);
          }
        }, _callee0, this, [[2, 7]]);
      }));
      function registerRole(_x8) {
        return _registerRole2.apply(this, arguments);
      }
      return registerRole;
    }() /** Claim a locally available role. Repeating a claim is a no-op. */)
  }, {
    key: "claimRole",
    value: (function () {
      var _claimRole2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(role) {
        var systemPolicy;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              if (!systemRolePolicies.has(role)) {
                _context1.n = 1;
                break;
              }
              _context1.n = 1;
              return this.systemRolesReady;
            case 1:
              systemPolicy = systemRolePolicies.get(role);
              if (!(!this.localRoles.has(role) && !(systemPolicy !== null && systemPolicy !== void 0 && systemPolicy.claimable))) {
                _context1.n = 2;
                break;
              }
              throw new _roleDelegation.RoleNotRegisteredError(role);
            case 2:
              if (!this.isClient) {
                _context1.n = 3;
                break;
              }
              return _context1.a(2, delegateRoleControl(this, 'claim', [role, this.clientId]));
            case 3:
              return _context1.a(2, this._claimRole(role, serverRoleOwner));
          }
        }, _callee1, this);
      }));
      function claimRole(_x9) {
        return _claimRole2.apply(this, arguments);
      }
      return claimRole;
    }() /** Release a locally owned domain role. Repeating a release is a no-op. */)
  }, {
    key: "releaseRole",
    value: (function () {
      var _releaseRole2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(role) {
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.n) {
            case 0:
              if (this.localRoles.has(role)) {
                _context10.n = 1;
                break;
              }
              throw new _roleDelegation.RoleNotRegisteredError(role);
            case 1:
              if (!this.isClient) {
                _context10.n = 2;
                break;
              }
              return _context10.a(2, delegateRoleControl(this, 'release', [role, this.clientId]));
            case 2:
              return _context10.a(2, this._releaseRole(role, serverRoleOwner));
          }
        }, _callee10, this);
      }));
      function releaseRole(_x0) {
        return _releaseRole2.apply(this, arguments);
      }
      return releaseRole;
    }() /** Observe stable ownership snapshots for one role. */)
  }, {
    key: "getRoleStateStreams",
    value: function getRoleStateStreams(role) {
      return {
        roleState$: this._getRoleStateSubject(role),
        roleTransition$: this._getRoleTransitionSubject(role)
      };
    }
  }, {
    key: "_handleRoleControl",
    value: function () {
      var _handleRoleControl2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(method, args) {
        var _ref8, _ref9, definition, clientId, _ref0, _ref1, _clientId, _ref10, _ref11, role, _clientId2, _ref12, _ref13, _role, _clientId3, _ref14, _ref15, _role2, module, methodName, methodArgs, _options, sourceClientId, _t5, _t6, _t7, _t8, _t9, _t0, _t1;
        return _regenerator().w(function (_context11) {
          while (1) switch (_context11.p = _context11.n) {
            case 0:
              _context11.p = 0;
              _t5 = method;
              _context11.n = _t5 === 'register' ? 1 : _t5 === 'registerSystemClient' ? 3 : _t5 === 'claim' ? 5 : _t5 === 'release' ? 7 : _t5 === 'invoke' ? 9 : 11;
              break;
            case 1:
              _ref8 = args, _ref9 = _slicedToArray(_ref8, 2), definition = _ref9[0], clientId = _ref9[1];
              _context11.n = 2;
              return this._registerRole(definition, clientId);
            case 2:
              _t6 = _context11.v;
              return _context11.a(2, {
                ok: true,
                value: _t6
              });
            case 3:
              _ref0 = args, _ref1 = _slicedToArray(_ref0, 1), _clientId = _ref1[0];
              _context11.n = 4;
              return this._registerSystemClient(_clientId);
            case 4:
              _t7 = _context11.v;
              return _context11.a(2, {
                ok: true,
                value: _t7
              });
            case 5:
              _ref10 = args, _ref11 = _slicedToArray(_ref10, 2), role = _ref11[0], _clientId2 = _ref11[1];
              _context11.n = 6;
              return this._claimRole(role, _clientId2);
            case 6:
              _t8 = _context11.v;
              return _context11.a(2, {
                ok: true,
                value: _t8
              });
            case 7:
              _ref12 = args, _ref13 = _slicedToArray(_ref12, 2), _role = _ref13[0], _clientId3 = _ref13[1];
              _context11.n = 8;
              return this._releaseRole(_role, _clientId3);
            case 8:
              _t9 = _context11.v;
              return _context11.a(2, {
                ok: true,
                value: _t9
              });
            case 9:
              _ref14 = args, _ref15 = _slicedToArray(_ref14, 6), _role2 = _ref15[0], module = _ref15[1], methodName = _ref15[2], methodArgs = _ref15[3], _options = _ref15[4], sourceClientId = _ref15[5];
              _context11.n = 10;
              return this.invokeRole(_role2, module, methodName, methodArgs, _options, sourceClientId);
            case 10:
              _t0 = _context11.v;
              return _context11.a(2, {
                ok: true,
                value: _t0
              });
            case 11:
              _context11.n = 13;
              break;
            case 12:
              _context11.p = 12;
              _t1 = _context11.v;
              return _context11.a(2, {
                ok: false,
                error: this._serializeRoleError(_t1)
              });
            case 13:
              return _context11.a(2);
          }
        }, _callee11, this, [[0, 12]]);
      }));
      function _handleRoleControl(_x1, _x10) {
        return _handleRoleControl2.apply(this, arguments);
      }
      return _handleRoleControl;
    }()
  }, {
    key: "invokeRole",
    value: function () {
      var _invokeRole = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(role, module, method, args) {
        var _systemRolePolicies$g,
          _getRef$modules,
          _this3 = this;
        var options,
          sourceClientId,
          ownerIds,
          moduleInstance,
          deadline,
          revision,
          invokeOwner,
          sourceOwnerId,
          sourceInvocation,
          results,
          errors,
          _args14 = arguments;
        return _regenerator().w(function (_context14) {
          while (1) switch (_context14.n) {
            case 0:
              options = _args14.length > 4 && _args14[4] !== undefined ? _args14[4] : {};
              sourceClientId = _args14.length > 5 ? _args14[5] : undefined;
              _context14.n = 1;
              return this.systemRolesReady;
            case 1:
              if (!this.isClient) {
                _context14.n = 2;
                break;
              }
              return _context14.a(2, delegateRoleControl(this, 'invoke', [role, module, method, args, options, this.clientId]));
            case 2:
              if (!this.transitioningRoles.has(role)) {
                _context14.n = 3;
                break;
              }
              throw new _roleDelegation.RoleUnavailableError(role);
            case 3:
              _context14.n = 4;
              return this._resolveRoleOwners(role);
            case 4:
              ownerIds = _context14.v;
              if (!(!ownerIds.length && !((_systemRolePolicies$g = systemRolePolicies.get(role)) !== null && _systemRolePolicies$g !== void 0 && _systemRolePolicies$g.allowsEmpty))) {
                _context14.n = 5;
                break;
              }
              throw new _roleDelegation.RoleUnavailableError(role);
            case 5:
              if (!(options.collectResults && options.completion === 'local')) {
                _context14.n = 6;
                break;
              }
              throw new Error("collectResults requires completion: 'all'.");
            case 6:
              if (!(options.completion === 'local' && !ownerIds.includes(sourceClientId !== null && sourceClientId !== void 0 ? sourceClientId : serverRoleOwner))) {
                _context14.n = 7;
                break;
              }
              throw new _roleDelegation.RoleSourceNotOwnerError(role);
            case 7:
              moduleInstance = (_getRef$modules = (0, _reactant.getRef)(this).modules) === null || _getRef$modules === void 0 ? void 0 : _getRef$modules[module];
              if (moduleInstance) {
                _context14.n = 8;
                break;
              }
              throw new Error("Module '".concat(module, "' is not registered."));
            case 8:
              deadline = Date.now() + _roleDelegation.roleDeadline;
              revision = this._getRoleRevision(role);
              invokeOwner = /*#__PURE__*/function () {
                var _ref16 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(clientId) {
                  var value, result;
                  return _regenerator().w(function (_context12) {
                    while (1) switch (_context12.n) {
                      case 0:
                        value = clientId === serverRoleOwner ? _this3._executeRoleMethod(moduleInstance, method, args, {
                          role: role,
                          revision: revision
                        }) : (0, _reactantShare.fork)(_this3, '_executeRoleInvocationResult', [{
                          role: role,
                          module: module,
                          method: method,
                          args: args,
                          revision: revision
                        }], {
                          clientIds: [clientId]
                        });
                        _context12.n = 1;
                        return _this3._withDeadline(Promise.resolve(value), role, deadline);
                      case 1:
                        result = _context12.v;
                        return _context12.a(2, clientId === serverRoleOwner ? result : (0, _roleDelegation.unwrapRoleResult)(result));
                    }
                  }, _callee12);
                }));
                return function invokeOwner(_x15) {
                  return _ref16.apply(this, arguments);
                };
              }();
              if (!(options.completion === 'local')) {
                _context14.n = 9;
                break;
              }
              sourceOwnerId = sourceClientId !== null && sourceClientId !== void 0 ? sourceClientId : serverRoleOwner;
              sourceInvocation = invokeOwner(sourceOwnerId);
              ownerIds.forEach(function (clientId) {
                if (clientId === sourceOwnerId) return;
                void invokeOwner(clientId)["catch"](function (error) {
                  console.error('[PortManager] role peer invocation failed', {
                    role: role,
                    clientId: clientId,
                    error: error
                  });
                });
              });
              return _context14.a(2, sourceInvocation);
            case 9:
              if (!(options.firstFailure && !options.collectResults)) {
                _context14.n = 11;
                break;
              }
              _context14.n = 10;
              return Promise.all(ownerIds.map(invokeOwner));
            case 10:
              return _context14.a(2);
            case 11:
              _context14.n = 12;
              return Promise.all(ownerIds.map(/*#__PURE__*/function () {
                var _ref17 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(clientId) {
                  var _t10, _t11, _t12;
                  return _regenerator().w(function (_context13) {
                    while (1) switch (_context13.p = _context13.n) {
                      case 0:
                        _context13.p = 0;
                        _t10 = clientId;
                        _context13.n = 1;
                        return invokeOwner(clientId);
                      case 1:
                        _t11 = _context13.v;
                        return _context13.a(2, {
                          clientId: _t10,
                          status: 'fulfilled',
                          value: _t11
                        });
                      case 2:
                        _context13.p = 2;
                        _t12 = _context13.v;
                        return _context13.a(2, {
                          clientId: clientId,
                          status: 'rejected',
                          reason: _t12
                        });
                    }
                  }, _callee13, null, [[0, 2]]);
                }));
                return function (_x16) {
                  return _ref17.apply(this, arguments);
                };
              }()));
            case 12:
              results = _context14.v;
              errors = results.filter(function (result) {
                return result.status === 'rejected';
              }).map(function (result) {
                return result.reason;
              });
              if (!errors.length) {
                _context14.n = 14;
                break;
              }
              if (!(ownerIds.length === 1 && errors[0] instanceof _roleDelegation.RoleInvocationTimeoutError)) {
                _context14.n = 13;
                break;
              }
              throw errors[0];
            case 13:
              throw new _roleDelegation.RoleAggregateError(errors, results);
            case 14:
              return _context14.a(2, options.collectResults ? results : undefined);
          }
        }, _callee14, this);
      }));
      function invokeRole(_x11, _x12, _x13, _x14) {
        return _invokeRole.apply(this, arguments);
      }
      return invokeRole;
    }()
  }, {
    key: "_registerRole",
    value: function () {
      var _registerRole3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(definition, clientId) {
        var _this4 = this;
        return _regenerator().w(function (_context15) {
          while (1) switch (_context15.n) {
            case 0:
              this._validateRoleDefinition(definition);
              return _context15.a(2, this._enqueueRoleOperation(definition.role, function () {
                return _this4._registerRoleUnsafe(definition, clientId);
              }));
          }
        }, _callee15, this);
      }));
      function _registerRole(_x17, _x18) {
        return _registerRole3.apply(this, arguments);
      }
      return _registerRole;
    }()
  }, {
    key: "_registerRoleUnsafe",
    value: function () {
      var _registerRoleUnsafe2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(definition, clientId) {
        var role, record, port, wasOwner, next, _t13, _t14;
        return _regenerator().w(function (_context16) {
          while (1) switch (_context16.n) {
            case 0:
              this._validateRoleDefinition(definition);
              role = definition.role;
              this._validateDomainRole(role);
              record = this.serverRoles.get(role);
              if (!(record && !this._definitionsMatch(record.definition, definition))) {
                _context16.n = 3;
                break;
              }
              record.candidates["delete"](clientId);
              record.mismatchedCandidates.add(clientId);
              port = 'local';
              if (this.isServer) {
                port = 'server';
              } else if (this.isClient) {
                port = 'client';
              }
              // eslint-disable-next-line no-console
              console.error('[PortManager] role definition mismatch', {
                role: role,
                acceptedDefinition: record.definition,
                receivedDefinition: definition,
                participantId: clientId,
                topology: {
                  type: this.portDetector.sharedAppOptions.type,
                  port: port
                }
              });
              wasOwner = record.owners["delete"](clientId);
              if (!wasOwner) {
                _context16.n = 2;
                break;
              }
              record.revision += 1;
              _t13 = this;
              _t14 = record;
              _context16.n = 1;
              return this._syncRoleRevisions(role, record);
            case 1:
              _t13._removeUnsyncedOwners.call(_t13, _t14, _context16.v);
              this._publishRoleState(role, record);
              if (!record.definition.autoElect) {
                _context16.n = 2;
                break;
              }
              _context16.n = 2;
              return this._electRole(role, record, new Set([clientId]));
            case 2:
              throw new _roleDelegation.RoleDefinitionMismatchError(role);
            case 3:
              next = record !== null && record !== void 0 ? record : {
                definition: definition,
                candidates: new Set(),
                mismatchedCandidates: new Set(),
                owners: new Set(),
                revision: 0
              };
              next.candidates.add(clientId);
              this.serverRoles.set(role, next);
              if (!(definition.autoElect && !next.owners.size)) {
                _context16.n = 4;
                break;
              }
              _context16.n = 4;
              return this._electRole(role, next);
            case 4:
              return _context16.a(2, this._roleResult(role, next));
          }
        }, _callee16, this);
      }));
      function _registerRoleUnsafe(_x19, _x20) {
        return _registerRoleUnsafe2.apply(this, arguments);
      }
      return _registerRoleUnsafe;
    }()
  }, {
    key: "_initializeSystemRoles",
    value: function () {
      var _initializeSystemRoles2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17() {
        return _regenerator().w(function (_context17) {
          while (1) switch (_context17.n) {
            case 0:
              if (!this.isClient) {
                _context17.n = 2;
                break;
              }
              _context17.n = 1;
              return delegateRoleControl(this, 'registerSystemClient', [this.clientId]);
            case 1:
              return _context17.a(2);
            case 2:
              this._restoreSystemClientsFromSnapshot();
              if (this.portDetector.sharedAppOptions.type === 'SharedTab' && this.previousLocalClientId) {
                this.systemClientIds["delete"](this.previousLocalClientId);
              }
              this._publishDerivedSystemRoleStates();
              if (!this.isWorkerMode) {
                _context17.n = 3;
                break;
              }
              return _context17.a(2);
            case 3:
              _context17.n = 4;
              return this._ensureLocalElectedClient();
            case 4:
              return _context17.a(2);
          }
        }, _callee17, this);
      }));
      function _initializeSystemRoles() {
        return _initializeSystemRoles2.apply(this, arguments);
      }
      return _initializeSystemRoles;
    }()
  }, {
    key: "_registerSystemClient",
    value: function () {
      var _registerSystemClient2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19(clientId) {
        var _this5 = this;
        return _regenerator().w(function (_context19) {
          while (1) switch (_context19.n) {
            case 0:
              this.systemClientIds.add(clientId);
              this._publishDerivedSystemRoleStates();
              if (this.isWorkerMode) {
                _context19.n = 1;
                break;
              }
              return _context19.a(2);
            case 1:
              _context19.n = 2;
              return this._enqueueRoleOperation(_roleDelegation.systemRoles.electedClient.role, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18() {
                var record;
                return _regenerator().w(function (_context18) {
                  while (1) switch (_context18.n) {
                    case 0:
                      record = _this5._getElectedClientRole();
                      record.candidates.add(clientId);
                      if (record.owners.size) {
                        _context18.n = 1;
                        break;
                      }
                      _context18.n = 1;
                      return _this5._electRole(_roleDelegation.systemRoles.electedClient.role, record);
                    case 1:
                      return _context18.a(2);
                  }
                }, _callee18);
              })));
            case 2:
              return _context19.a(2);
          }
        }, _callee19, this);
      }));
      function _registerSystemClient(_x21) {
        return _registerSystemClient2.apply(this, arguments);
      }
      return _registerSystemClient;
    }()
  }, {
    key: "_getElectedClientRole",
    value: function _getElectedClientRole() {
      var _this$serverRoles$get, _snapshot$revision;
      var role = _roleDelegation.systemRoles.electedClient.role;
      var snapshot = this._getRoleSnapshot(role);
      var record = (_this$serverRoles$get = this.serverRoles.get(role)) !== null && _this$serverRoles$get !== void 0 ? _this$serverRoles$get : {
        definition: _roleDelegation.systemRoles.electedClient,
        candidates: new Set(),
        mismatchedCandidates: new Set(),
        owners: new Set((snapshot === null || snapshot === void 0 ? void 0 : snapshot.phase) === 'owned' ? snapshot.owners.map(function (_ref19) {
          var clientId = _ref19.clientId;
          return clientId;
        }) : []),
        revision: (_snapshot$revision = snapshot === null || snapshot === void 0 ? void 0 : snapshot.revision) !== null && _snapshot$revision !== void 0 ? _snapshot$revision : 0
      };
      this.serverRoles.set(role, record);
      return record;
    }
  }, {
    key: "_ensureLocalElectedClient",
    value: function () {
      var _ensureLocalElectedClient2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21() {
        var _this6 = this;
        var role;
        return _regenerator().w(function (_context21) {
          while (1) switch (_context21.n) {
            case 0:
              role = _roleDelegation.systemRoles.electedClient.role;
              _context21.n = 1;
              return this._enqueueRoleOperation(role, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20() {
                var record;
                return _regenerator().w(function (_context20) {
                  while (1) switch (_context20.n) {
                    case 0:
                      record = _this6._getElectedClientRole();
                      if (_this6.portDetector.sharedAppOptions.type === 'SharedTab' && _this6.previousLocalClientId) {
                        record.candidates["delete"](_this6.previousLocalClientId);
                        record.owners.clear();
                        _this6.localRoleRevisions["delete"](role);
                      }
                      record.candidates.add(serverRoleOwner);
                      if (record.owners.has(serverRoleOwner)) {
                        _context20.n = 2;
                        break;
                      }
                      _context20.n = 1;
                      return _this6._claimRoleUnsafe(role, serverRoleOwner);
                    case 1:
                      _context20.n = 3;
                      break;
                    case 2:
                      _this6.localRoleRevisions.set(role, record.revision);
                      _this6._publishRoleState(role, record);
                    case 3:
                      _this6.previousLocalClientId = undefined;
                    case 4:
                      return _context20.a(2);
                  }
                }, _callee20);
              })));
            case 1:
              return _context21.a(2);
          }
        }, _callee21, this);
      }));
      function _ensureLocalElectedClient() {
        return _ensureLocalElectedClient2.apply(this, arguments);
      }
      return _ensureLocalElectedClient;
    }()
  }, {
    key: "_claimRole",
    value: function () {
      var _claimRole3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23(role, clientId) {
        var _this7 = this;
        return _regenerator().w(function (_context23) {
          while (1) switch (_context23.n) {
            case 0:
              return _context23.a(2, this._enqueueRoleOperation(role, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22() {
                var record, _t15;
                return _regenerator().w(function (_context22) {
                  while (1) switch (_context22.p = _context22.n) {
                    case 0:
                      _context22.p = 0;
                      _context22.n = 1;
                      return _this7._claimRoleUnsafe(role, clientId);
                    case 1:
                      return _context22.a(2, _context22.v);
                    case 2:
                      _context22.p = 2;
                      _t15 = _context22.v;
                      record = _this7.serverRoles.get(role);
                      if (!(record !== null && record !== void 0 && record.definition.autoElect && !record.definition.allowMultiple && record.candidates.has(clientId) && !record.owners.size && !_this7._isRoleReleaseRejected(_t15))) {
                        _context22.n = 3;
                        break;
                      }
                      _context22.n = 3;
                      return _this7._electRole(role, record, new Set([clientId]));
                    case 3:
                      throw _t15;
                    case 4:
                      return _context22.a(2);
                  }
                }, _callee22, null, [[0, 2]]);
              }))));
          }
        }, _callee23, this);
      }));
      function _claimRole(_x22, _x23) {
        return _claimRole3.apply(this, arguments);
      }
      return _claimRole;
    }()
  }, {
    key: "_claimRoleUnsafe",
    value: function () {
      var _claimRoleUnsafe2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24(role, clientId) {
        var record, previousOwner, syncFailures, claimantFailure, _t16, _t17;
        return _regenerator().w(function (_context24) {
          while (1) switch (_context24.p = _context24.n) {
            case 0:
              record = this.serverRoles.get(role);
              if (record) {
                _context24.n = 1;
                break;
              }
              throw new _roleDelegation.RoleNotRegisteredError(role);
            case 1:
              if (!record.mismatchedCandidates.has(clientId)) {
                _context24.n = 2;
                break;
              }
              throw new _roleDelegation.RoleDefinitionMismatchError(role);
            case 2:
              if (record.candidates.has(clientId)) {
                _context24.n = 3;
                break;
              }
              throw new _roleDelegation.RoleNotRegisteredError(role);
            case 3:
              if (!record.owners.has(clientId)) {
                _context24.n = 4;
                break;
              }
              return _context24.a(2, this._roleResult(role, record));
            case 4:
              if (!(!record.definition.allowMultiple && record.owners.size)) {
                _context24.n = 9;
                break;
              }
              previousOwner = _toConsumableArray(record.owners)[0];
              this.transitioningRoles.add(role);
              this._publishTransition(role, record, 'draining', [clientId]);
              _context24.p = 5;
              _context24.n = 6;
              return this._runRoleLifecycle(previousOwner, role, 'release', record.revision + 1);
            case 6:
              _context24.n = 8;
              break;
            case 7:
              _context24.p = 7;
              _t16 = _context24.v;
              if (!this._isRoleReleaseRejected(_t16)) {
                _context24.n = 8;
                break;
              }
              this.transitioningRoles["delete"](role);
              this._publishRoleState(role, record);
              throw new _roleDelegation.RoleReleaseRejectedError(role);
            case 8:
              record.owners.clear();
            case 9:
              this.transitioningRoles.add(role);
              this._publishTransition(role, record, 'acquiring', [clientId]);
              _context24.p = 10;
              _context24.n = 11;
              return this._runRoleLifecycle(clientId, role, 'acquire', record.revision + 1);
            case 11:
              _context24.n = 13;
              break;
            case 12:
              _context24.p = 12;
              _t17 = _context24.v;
              if (!record.definition.allowMultiple) {
                record.owners.clear();
                record.revision += 1;
              }
              this.transitioningRoles["delete"](role);
              this._publishRoleState(role, record);
              throw _t17;
            case 13:
              record.owners.add(clientId);
              record.revision += 1;
              _context24.n = 14;
              return this._syncRoleRevisions(role, record);
            case 14:
              syncFailures = _context24.v;
              this._removeUnsyncedOwners(record, syncFailures);
              this.transitioningRoles["delete"](role);
              this._publishRoleState(role, record);
              claimantFailure = syncFailures.find(function (failure) {
                return failure.clientId === clientId;
              });
              if (!claimantFailure) {
                _context24.n = 15;
                break;
              }
              throw claimantFailure.error;
            case 15:
              return _context24.a(2, this._roleResult(role, record));
          }
        }, _callee24, this, [[10, 12], [5, 7]]);
      }));
      function _claimRoleUnsafe(_x24, _x25) {
        return _claimRoleUnsafe2.apply(this, arguments);
      }
      return _claimRoleUnsafe;
    }()
  }, {
    key: "_releaseRole",
    value: function () {
      var _releaseRole3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee25(role, clientId) {
        var _this8 = this;
        return _regenerator().w(function (_context25) {
          while (1) switch (_context25.n) {
            case 0:
              return _context25.a(2, this._enqueueRoleOperation(role, function () {
                return _this8._releaseRoleUnsafe(role, clientId);
              }));
          }
        }, _callee25, this);
      }));
      function _releaseRole(_x26, _x27) {
        return _releaseRole3.apply(this, arguments);
      }
      return _releaseRole;
    }()
  }, {
    key: "_releaseRoleUnsafe",
    value: function () {
      var _releaseRoleUnsafe2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee26(role, clientId) {
        var record, _t18, _t19, _t20;
        return _regenerator().w(function (_context26) {
          while (1) switch (_context26.p = _context26.n) {
            case 0:
              record = this.serverRoles.get(role);
              if (!(!record || !record.owners.has(clientId))) {
                _context26.n = 1;
                break;
              }
              return _context26.a(2, this._roleResult(role, record));
            case 1:
              this.transitioningRoles.add(role);
              this._publishTransition(role, record, 'draining', []);
              _context26.p = 2;
              _context26.n = 3;
              return this._runRoleLifecycle(clientId, role, 'release', record.revision + 1);
            case 3:
              _context26.n = 5;
              break;
            case 4:
              _context26.p = 4;
              _t18 = _context26.v;
              this.transitioningRoles["delete"](role);
              this._publishRoleState(role, record);
              throw _t18;
            case 5:
              record.owners["delete"](clientId);
              record.revision += 1;
              _t19 = this;
              _t20 = record;
              _context26.n = 6;
              return this._syncRoleRevisions(role, record);
            case 6:
              _t19._removeUnsyncedOwners.call(_t19, _t20, _context26.v);
              this.transitioningRoles["delete"](role);
              this._publishRoleState(role, record);
              return _context26.a(2, this._roleResult(role, record));
          }
        }, _callee26, this, [[2, 4]]);
      }));
      function _releaseRoleUnsafe(_x28, _x29) {
        return _releaseRoleUnsafe2.apply(this, arguments);
      }
      return _releaseRoleUnsafe;
    }()
  }, {
    key: "_electRole",
    value: function () {
      var _electRole2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee27(role, record) {
        var excludedClientIds,
          _iterator6,
          _step6,
          clientId,
          _args27 = arguments,
          _t21,
          _t22;
        return _regenerator().w(function (_context27) {
          while (1) switch (_context27.p = _context27.n) {
            case 0:
              excludedClientIds = _args27.length > 2 && _args27[2] !== undefined ? _args27[2] : new Set();
              _iterator6 = _createForOfIteratorHelper(record.candidates);
              _context27.p = 1;
              _iterator6.s();
            case 2:
              if ((_step6 = _iterator6.n()).done) {
                _context27.n = 7;
                break;
              }
              clientId = _step6.value;
              if (!excludedClientIds.has(clientId)) {
                _context27.n = 3;
                break;
              }
              return _context27.a(3, 6);
            case 3:
              _context27.p = 3;
              _context27.n = 4;
              return this._claimRoleUnsafe(role, clientId);
            case 4:
              return _context27.a(2);
            case 5:
              _context27.p = 5;
              _t21 = _context27.v;
              // eslint-disable-next-line no-console
              console.error('[PortManager] role auto-election failed', {
                role: role,
                clientId: clientId,
                revision: record.revision + 1,
                error: _t21
              });
            case 6:
              _context27.n = 2;
              break;
            case 7:
              _context27.n = 9;
              break;
            case 8:
              _context27.p = 8;
              _t22 = _context27.v;
              _iterator6.e(_t22);
            case 9:
              _context27.p = 9;
              _iterator6.f();
              return _context27.f(9);
            case 10:
              return _context27.a(2);
          }
        }, _callee27, this, [[3, 5], [1, 8, 9, 10]]);
      }));
      function _electRole(_x30, _x31) {
        return _electRole2.apply(this, arguments);
      }
      return _electRole;
    }()
  }, {
    key: "_isRoleReleaseRejected",
    value: function _isRoleReleaseRejected(error) {
      return error instanceof _roleDelegation.RoleReleaseRejectedError || _typeof(error) === 'object' && error !== null && 'name' in error && error.name === 'RoleReleaseRejectedError';
    }
  }, {
    key: "_serializeRoleError",
    value: function _serializeRoleError(error) {
      var _this9 = this;
      if (error instanceof _roleDelegation.RoleAggregateError) {
        return {
          name: error.name,
          message: error.message,
          errors: error.errors.map(function (item) {
            return _this9._serializeRoleError(item);
          }),
          results: error.results.map(function (_ref22) {
            var reason = _ref22.reason,
              result = _objectWithoutProperties(_ref22, _excluded);
            return reason === undefined ? result : _objectSpread(_objectSpread({}, result), {}, {
              reason: _this9._serializeRoleError(reason)
            });
          })
        };
      }
      if (error instanceof Error) {
        return {
          name: error.name,
          message: error.message
        };
      }
      return {
        name: 'Error',
        message: String(error)
      };
    }
  }, {
    key: "_runRoleLifecycle",
    value: function () {
      var _runRoleLifecycle2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee28(clientId, role, phase, revision) {
        var deadline, _this$localRoles$get, lifecycle, callback, result;
        return _regenerator().w(function (_context28) {
          while (1) switch (_context28.n) {
            case 0:
              deadline = Date.now() + _roleDelegation.roleDeadline;
              if (!(clientId === serverRoleOwner)) {
                _context28.n = 2;
                break;
              }
              lifecycle = (_this$localRoles$get = this.localRoles.get(role)) === null || _this$localRoles$get === void 0 ? void 0 : _this$localRoles$get.lifecycle;
              callback = phase === 'acquire' ? lifecycle === null || lifecycle === void 0 ? void 0 : lifecycle.onAcquire : lifecycle === null || lifecycle === void 0 ? void 0 : lifecycle.onRelease;
              if (callback) {
                _context28.n = 1;
                break;
              }
              return _context28.a(2, this._runLocalRoleLifecycle(role, phase, revision, deadline));
            case 1:
              return _context28.a(2, this._withDeadline(this._runLocalRoleLifecycle(role, phase, revision, deadline), role, deadline));
            case 2:
              _context28.n = 3;
              return this._withDeadline(Promise.resolve((0, _reactantShare.fork)(this, '_runLocalRoleLifecycleResult', [role, phase, revision, deadline], {
                clientIds: [clientId]
              })), role, deadline);
            case 3:
              result = _context28.v;
              return _context28.a(2, (0, _roleDelegation.unwrapRoleResult)(result));
          }
        }, _callee28, this);
      }));
      function _runRoleLifecycle(_x32, _x33, _x34, _x35) {
        return _runRoleLifecycle2.apply(this, arguments);
      }
      return _runRoleLifecycle;
    }()
  }, {
    key: "_runLocalRoleLifecycleResult",
    value: function () {
      var _runLocalRoleLifecycleResult2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee29(role, phase, revision, deadline) {
        var _t23;
        return _regenerator().w(function (_context29) {
          while (1) switch (_context29.p = _context29.n) {
            case 0:
              _context29.p = 0;
              _context29.n = 1;
              return this._runLocalRoleLifecycle(role, phase, revision, deadline);
            case 1:
              return _context29.a(2, {
                ok: true,
                value: undefined
              });
            case 2:
              _context29.p = 2;
              _t23 = _context29.v;
              return _context29.a(2, {
                ok: false,
                error: this._serializeRoleError(_t23)
              });
          }
        }, _callee29, this, [[0, 2]]);
      }));
      function _runLocalRoleLifecycleResult(_x36, _x37, _x38, _x39) {
        return _runLocalRoleLifecycleResult2.apply(this, arguments);
      }
      return _runLocalRoleLifecycleResult;
    }()
  }, {
    key: "_executeRoleInvocationResult",
    value: function () {
      var _executeRoleInvocationResult2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee30(request) {
        var _getRef$modules2, module, _t24, _t25;
        return _regenerator().w(function (_context30) {
          while (1) switch (_context30.p = _context30.n) {
            case 0:
              _context30.p = 0;
              module = (_getRef$modules2 = (0, _reactant.getRef)(this).modules) === null || _getRef$modules2 === void 0 ? void 0 : _getRef$modules2[request.module];
              if (module) {
                _context30.n = 1;
                break;
              }
              throw new Error("Module '".concat(request.module, "' is not registered."));
            case 1:
              _context30.n = 2;
              return this._executeRoleMethod(module, request.method, request.args, {
                role: request.role,
                revision: request.revision
              });
            case 2:
              _t24 = _context30.v;
              return _context30.a(2, {
                ok: true,
                value: _t24
              });
            case 3:
              _context30.p = 3;
              _t25 = _context30.v;
              return _context30.a(2, {
                ok: false,
                error: this._serializeRoleError(_t25)
              });
          }
        }, _callee30, this, [[0, 3]]);
      }));
      function _executeRoleInvocationResult(_x40) {
        return _executeRoleInvocationResult2.apply(this, arguments);
      }
      return _executeRoleInvocationResult;
    }()
  }, {
    key: "_setLocalRoleRevisionResult",
    value: function () {
      var _setLocalRoleRevisionResult2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee31(role, revision) {
        return _regenerator().w(function (_context31) {
          while (1) switch (_context31.n) {
            case 0:
              this.localRoleRevisions.set(role, revision);
              return _context31.a(2, {
                ok: true,
                value: undefined
              });
          }
        }, _callee31, this);
      }));
      function _setLocalRoleRevisionResult(_x41, _x42) {
        return _setLocalRoleRevisionResult2.apply(this, arguments);
      }
      return _setLocalRoleRevisionResult;
    }()
  }, {
    key: "_syncRoleRevisions",
    value: function () {
      var _syncRoleRevisions2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee33(role, record) {
        var _this0 = this;
        var deadline, results;
        return _regenerator().w(function (_context33) {
          while (1) switch (_context33.n) {
            case 0:
              deadline = Date.now() + _roleDelegation.roleDeadline;
              _context33.n = 1;
              return Promise.all(_toConsumableArray(record.owners).map(/*#__PURE__*/function () {
                var _ref23 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee32(clientId) {
                  var result, _t26;
                  return _regenerator().w(function (_context32) {
                    while (1) switch (_context32.p = _context32.n) {
                      case 0:
                        if (!(clientId === serverRoleOwner)) {
                          _context32.n = 1;
                          break;
                        }
                        _this0.localRoleRevisions.set(role, record.revision);
                        return _context32.a(2, undefined);
                      case 1:
                        _context32.p = 1;
                        _context32.n = 2;
                        return _this0._withDeadline(Promise.resolve((0, _reactantShare.fork)(_this0, '_setLocalRoleRevisionResult', [role, record.revision], {
                          clientIds: [clientId]
                        })), role, deadline);
                      case 2:
                        result = _context32.v;
                        (0, _roleDelegation.unwrapRoleResult)(result);
                        return _context32.a(2, undefined);
                      case 3:
                        _context32.p = 3;
                        _t26 = _context32.v;
                        return _context32.a(2, {
                          clientId: clientId,
                          error: _t26
                        });
                    }
                  }, _callee32, null, [[1, 3]]);
                }));
                return function (_x45) {
                  return _ref23.apply(this, arguments);
                };
              }()));
            case 1:
              results = _context33.v;
              return _context33.a(2, results.filter(function (result) {
                return result !== undefined;
              }));
          }
        }, _callee33);
      }));
      function _syncRoleRevisions(_x43, _x44) {
        return _syncRoleRevisions2.apply(this, arguments);
      }
      return _syncRoleRevisions;
    }()
  }, {
    key: "_removeUnsyncedOwners",
    value: function _removeUnsyncedOwners(record, failures) {
      var _iterator7 = _createForOfIteratorHelper(failures),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var clientId = _step7.value.clientId;
          record.owners["delete"](clientId);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
  }, {
    key: "_runLocalRoleLifecycle",
    value: function () {
      var _runLocalRoleLifecycle2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee34(role, phase, revision, deadline) {
        var _this$localRoles$get2, _this$localRoles$get3;
        var callback;
        return _regenerator().w(function (_context34) {
          while (1) switch (_context34.n) {
            case 0:
              callback = phase === 'acquire' ? (_this$localRoles$get2 = this.localRoles.get(role)) === null || _this$localRoles$get2 === void 0 ? void 0 : _this$localRoles$get2.lifecycle.onAcquire : (_this$localRoles$get3 = this.localRoles.get(role)) === null || _this$localRoles$get3 === void 0 ? void 0 : _this$localRoles$get3.lifecycle.onRelease;
              _context34.n = 1;
              return callback === null || callback === void 0 ? void 0 : callback({
                deadline: deadline,
                revision: revision
              });
            case 1:
              if (phase === 'acquire') {
                this.localRoleRevisions.set(role, revision);
              } else {
                this.localRoleRevisions["delete"](role);
              }
            case 2:
              return _context34.a(2);
          }
        }, _callee34, this);
      }));
      function _runLocalRoleLifecycle(_x46, _x47, _x48, _x49) {
        return _runLocalRoleLifecycle2.apply(this, arguments);
      }
      return _runLocalRoleLifecycle;
    }()
  }, {
    key: "isRoleInvocationCurrent",
    value: function isRoleInvocationCurrent(role, revision) {
      var systemPolicy = systemRolePolicies.get(role);
      return this.localRoleRevisions.get(role) === revision || systemPolicy !== undefined && !systemPolicy.mutable && revision === 0;
    }
  }, {
    key: "_resolveRoleOwners",
    value: function () {
      var _resolveRoleOwners2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee35(role) {
        var _systemRolePolicies$g2, _this$serverRoles$get2, _this$serverRoles$get3, _this$serverRoles$get4, _this$serverRoles$get5;
        var membership, _t27;
        return _regenerator().w(function (_context35) {
          while (1) switch (_context35.n) {
            case 0:
              membership = (_systemRolePolicies$g2 = systemRolePolicies.get(role)) === null || _systemRolePolicies$g2 === void 0 ? void 0 : _systemRolePolicies$g2.membership;
              _t27 = membership;
              _context35.n = _t27 === 'server' ? 1 : _t27 === 'clients' ? 2 : _t27 === 'all' ? 3 : _t27 === 'elected' ? 4 : 5;
              break;
            case 1:
              return _context35.a(2, [serverRoleOwner]);
            case 2:
              return _context35.a(2, _toConsumableArray(this.systemClientIds));
            case 3:
              return _context35.a(2, [serverRoleOwner].concat(_toConsumableArray(this.systemClientIds)));
            case 4:
              return _context35.a(2, _toConsumableArray((_this$serverRoles$get2 = (_this$serverRoles$get3 = this.serverRoles.get(role)) === null || _this$serverRoles$get3 === void 0 ? void 0 : _this$serverRoles$get3.owners) !== null && _this$serverRoles$get2 !== void 0 ? _this$serverRoles$get2 : []));
            case 5:
              return _context35.a(2, _toConsumableArray((_this$serverRoles$get4 = (_this$serverRoles$get5 = this.serverRoles.get(role)) === null || _this$serverRoles$get5 === void 0 ? void 0 : _this$serverRoles$get5.owners) !== null && _this$serverRoles$get4 !== void 0 ? _this$serverRoles$get4 : []));
            case 6:
              return _context35.a(2);
          }
        }, _callee35, this);
      }));
      function _resolveRoleOwners(_x50) {
        return _resolveRoleOwners2.apply(this, arguments);
      }
      return _resolveRoleOwners;
    }()
  }, {
    key: "_getRoleRevision",
    value: function _getRoleRevision(role) {
      var _this$serverRoles$get6, _this$serverRoles$get7;
      var systemPolicy = systemRolePolicies.get(role);
      if (systemPolicy && !systemPolicy.mutable) return 0;
      return (_this$serverRoles$get6 = (_this$serverRoles$get7 = this.serverRoles.get(role)) === null || _this$serverRoles$get7 === void 0 ? void 0 : _this$serverRoles$get7.revision) !== null && _this$serverRoles$get6 !== void 0 ? _this$serverRoles$get6 : 0;
    }
  }, {
    key: "_executeRoleMethod",
    value: function _executeRoleMethod(module, method, args, invocation) {
      if (!this.isRoleInvocationCurrent(invocation.role, invocation.revision)) {
        throw new _roleDelegation.RoleFencedError(invocation.role);
      }
      return (0, _delegateRole.executeRoleMethod)(module, method, args);
    }
  }, {
    key: "_roleResult",
    value: function _roleResult(role, record) {
      var _record$revision, _record$owners;
      return {
        role: role,
        revision: (_record$revision = record === null || record === void 0 ? void 0 : record.revision) !== null && _record$revision !== void 0 ? _record$revision : 0,
        owners: _toConsumableArray((_record$owners = record === null || record === void 0 ? void 0 : record.owners) !== null && _record$owners !== void 0 ? _record$owners : []).map(function (clientId) {
          return {
            clientId: clientId
          };
        })
      };
    }
  }, {
    key: "_validateDomainRole",
    value: function _validateDomainRole(role) {
      if (systemRolePolicies.has(role) || role === 'mainClient') throw new Error("Role '".concat(role, "' is reserved."));
    }
  }, {
    key: "_validateRoleDefinition",
    value: function _validateRoleDefinition(definition) {
      if (_typeof(definition) !== 'object' || definition === null || typeof definition.role !== 'string' || !definition.role || typeof definition.allowMultiple !== 'boolean' || typeof definition.autoElect !== 'boolean' || definition.allowMultiple && definition.autoElect) {
        throw new Error('Invalid role definition.');
      }
    }
  }, {
    key: "_definitionsMatch",
    value: function _definitionsMatch(left, right) {
      return left.role === right.role && left.allowMultiple === right.allowMultiple && left.autoElect === right.autoElect;
    }
  }, {
    key: "_restoreSystemClientsFromSnapshot",
    value: function _restoreSystemClientsFromSnapshot() {
      if (this.systemClientIds.size) return;
      var snapshot = this._getRoleSnapshot(_roleDelegation.systemRoles.connectedClients.role);
      if ((snapshot === null || snapshot === void 0 ? void 0 : snapshot.phase) !== 'owned') return;
      var _iterator8 = _createForOfIteratorHelper(snapshot.owners),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var clientId = _step8.value.clientId;
          this.systemClientIds.add(clientId);
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
    }
  }, {
    key: "_publishDerivedSystemRoleStates",
    value: function _publishDerivedSystemRoleStates() {
      var clients = _toConsumableArray(this.systemClientIds).map(function (clientId) {
        return {
          clientId: clientId
        };
      });
      this._setRoleSnapshot({
        phase: 'owned',
        role: _roleDelegation.systemRoles.server.role,
        revision: 0,
        owners: [{
          clientId: serverRoleOwner
        }]
      });
      this._setRoleSnapshot({
        phase: 'owned',
        role: _roleDelegation.systemRoles.connectedClients.role,
        revision: 0,
        owners: clients
      });
      this._setRoleSnapshot({
        phase: 'owned',
        role: _roleDelegation.systemRoles.all.role,
        revision: 0,
        owners: [{
          clientId: serverRoleOwner
        }].concat(_toConsumableArray(clients))
      });
    }
  }, {
    key: "_getRoleStateSubject",
    value: function _getRoleStateSubject(role) {
      var subject = this.roleStateSubjects.get(role);
      if (!subject) {
        var snapshot = this._getRoleSnapshot(role);
        subject = new _rxjs.BehaviorSubject((snapshot === null || snapshot === void 0 ? void 0 : snapshot.phase) === 'owned' || (snapshot === null || snapshot === void 0 ? void 0 : snapshot.phase) === 'unavailable' ? snapshot : this._unavailableRoleState(role));
        this.roleStateSubjects.set(role, subject);
      }
      return subject;
    }
  }, {
    key: "_getRoleTransitionSubject",
    value: function _getRoleTransitionSubject(role) {
      var subject = this.roleTransitionSubjects.get(role);
      if (!subject) {
        var _this$_getRoleSnapsho;
        subject = new _rxjs.BehaviorSubject((_this$_getRoleSnapsho = this._getRoleSnapshot(role)) !== null && _this$_getRoleSnapsho !== void 0 ? _this$_getRoleSnapsho : this._unavailableRoleState(role));
        this.roleTransitionSubjects.set(role, subject);
      }
      return subject;
    }
  }, {
    key: "_unavailableRoleState",
    value: function _unavailableRoleState(role) {
      return {
        phase: 'unavailable',
        role: role,
        revision: 0,
        owners: []
      };
    }
  }, {
    key: "_getRoleSnapshot",
    value: function _getRoleSnapshot(role) {
      return (this.shared ? this.roleSnapshots : this.localRoleSnapshots).find(function (snapshot) {
        return snapshot.role === role;
      });
    }
  }, {
    key: "_setRoleSnapshot",
    value: function _setRoleSnapshot(state) {
      if (this.shared) {
        this._setSharedRoleSnapshot(state);
        return;
      }
      var index = this.localRoleSnapshots.findIndex(function (_ref24) {
        var role = _ref24.role;
        return role === state.role;
      });
      if (index === -1) {
        this.localRoleSnapshots.push(state);
      } else {
        this.localRoleSnapshots[index] = state;
      }
      this._notifyRoleSnapshot(state);
    }
  }, {
    key: "_setSharedRoleSnapshot",
    value: function _setSharedRoleSnapshot(state) {
      var current = this.roleSnapshots.find(function (_ref25) {
        var role = _ref25.role;
        return role === state.role;
      });
      if (current && JSON.stringify(current) === JSON.stringify(state)) return;

      // Role membership is one topology snapshot. Replacing it atomically avoids
      // owner-index patches that cannot be applied to a structurally stale client.
      this.roleSnapshots = current ? this.roleSnapshots.map(function (snapshot) {
        return snapshot.role === state.role ? state : snapshot;
      }) : [].concat(_toConsumableArray(this.roleSnapshots), [state]);
    }
  }, {
    key: "_notifyRoleSnapshot",
    value: function _notifyRoleSnapshot(snapshot) {
      var role = snapshot.role;
      var transitionSubject = this.roleTransitionSubjects.get(role);
      if (transitionSubject && JSON.stringify(transitionSubject.value) !== JSON.stringify(snapshot)) {
        transitionSubject.next(snapshot);
      }
      var stateSubject = this.roleStateSubjects.get(role);
      if (stateSubject && (snapshot.phase === 'owned' || snapshot.phase === 'unavailable') && JSON.stringify(stateSubject.value) !== JSON.stringify(snapshot)) {
        stateSubject.next(snapshot);
      }
    }
  }, {
    key: "_publishTransition",
    value: function _publishTransition(role, record, phase, pendingOwnerIds) {
      var state = {
        phase: phase,
        role: role,
        revision: record.revision,
        owners: phase === 'acquiring' ? [] : _toConsumableArray(record.owners).map(function (clientId) {
          return {
            clientId: clientId
          };
        }),
        pendingOwnerIds: pendingOwnerIds
      };
      this._setRoleSnapshot(state);
    }
  }, {
    key: "_publishRoleState",
    value: function _publishRoleState(role, record) {
      var state = record.owners.size ? {
        phase: 'owned',
        role: role,
        revision: record.revision,
        owners: _toConsumableArray(record.owners).map(function (clientId) {
          return {
            clientId: clientId
          };
        })
      } : {
        phase: 'unavailable',
        role: role,
        revision: record.revision,
        owners: []
      };
      this._setRoleSnapshot(state);
    }
  }, {
    key: "_enqueueRoleOperation",
    value: function () {
      var _enqueueRoleOperation2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee36(role, operation) {
        var _this$roleOperationQu;
        var previous, resolveCurrent, current, queue;
        return _regenerator().w(function (_context36) {
          while (1) switch (_context36.p = _context36.n) {
            case 0:
              previous = (_this$roleOperationQu = this.roleOperationQueues.get(role)) !== null && _this$roleOperationQu !== void 0 ? _this$roleOperationQu : Promise.resolve();
              current = new Promise(function (resolve) {
                resolveCurrent = resolve;
              });
              queue = previous.then(function () {
                return current;
              });
              this.roleOperationQueues.set(role, queue);
              _context36.n = 1;
              return previous;
            case 1:
              _context36.p = 1;
              _context36.n = 2;
              return operation();
            case 2:
              return _context36.a(2, _context36.v);
            case 3:
              _context36.p = 3;
              resolveCurrent();
              if (this.roleOperationQueues.get(role) === queue) {
                this.roleOperationQueues["delete"](role);
              }
              return _context36.f(3);
            case 4:
              return _context36.a(2);
          }
        }, _callee36, this, [[1,, 3, 4]]);
      }));
      function _enqueueRoleOperation(_x51, _x52) {
        return _enqueueRoleOperation2.apply(this, arguments);
      }
      return _enqueueRoleOperation;
    }()
  }, {
    key: "_withDeadline",
    value: function _withDeadline(promise, role, deadline) {
      return new Promise(function (resolve, reject) {
        var timeout = setTimeout(function () {
          return reject(new _roleDelegation.RoleInvocationTimeoutError(role));
        }, Math.max(0, deadline - Date.now()));
        promise.then(function (value) {
          clearTimeout(timeout);
          resolve(value);
        }, function (error) {
          clearTimeout(timeout);
          reject(error);
        });
      });
    }
  }]);
}(), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "roleSnapshots", [_reactant.state, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "activeTabId", [_reactant.state, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _applyDecoratedDescriptor(_class2.prototype, "_setActiveTabId", [_reactant.action, _dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "_setActiveTabId"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "setActiveTabId", [_dec0, _dec1, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "setActiveTabId"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "activeNonMainTabId", [_reactant.state, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return null;
  }
}), _applyDecoratedDescriptor(_class2.prototype, "_setActiveNonMainTabId", [_reactant.action, _dec12, _dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "_setActiveNonMainTabId"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "setActiveNonMainTabId", [_dec14, _dec15, _dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "setActiveNonMainTabId"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "checkVisibleTabInAllClient", [_dec17, _dec18, _dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "checkVisibleTabInAllClient"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setSharedRoleSnapshot", [_reactant.action, _dec20, _dec21], Object.getOwnPropertyDescriptor(_class2.prototype, "_setSharedRoleSnapshot"), _class2.prototype), _class2)) || _class) || _class) || _class) || _class) || _class);
//# sourceMappingURL=PortManager.js.map

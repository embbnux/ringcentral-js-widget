"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.array.reverse.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-primitive.js");
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
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.regexp.exec.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PRESENCE_DATA_KEY = exports.DEFAULT_PRESENCE_TTL = exports.AccountContactsViewableManager = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.object.entries.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.string.link.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _services = require("@ringcentral-integration/micro-auth/src/app/services");
var _services2 = require("@ringcentral-integration/micro-core/src/app/services");
var _nextCore = require("@ringcentral-integration/next-core");
var _ramda = require("ramda");
var _rxjs = require("rxjs");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec0, _dec1, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2;
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
var DEFAULT_PRESENCE_TTL = exports.DEFAULT_PRESENCE_TTL =
// TODO: in spring-ui, the viewable presence refetch every 10s
process.env.THEME_SYSTEM === 'spring-ui' ? 10 * 1000 : 30 * 1000; // 30 seconds

var PRESENCE_DATA_KEY = exports.PRESENCE_DATA_KEY = ['dndStatus', 'presenceStatus', 'telephonyStatus', 'userStatus', 'meetingStatus'];
var AccountContactsViewableManager = exports.AccountContactsViewableManager = (_dec = (0, _nextCore.injectable)({
  name: 'AccountContactsViewableManager'
}), _dec2 = function _dec2(target, key) {
  return (0, _nextCore.optional)('AccountContactsOptions')(target, undefined, 4);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _nextCore.PortManager === "undefined" ? Object : _nextCore.PortManager, typeof _services.Auth === "undefined" ? Object : _services.Auth, typeof _services.Client === "undefined" ? Object : _services.Client, typeof _services.ExtensionInfo === "undefined" ? Object : _services.ExtensionInfo, typeof AccountContactsOptions === "undefined" ? Object : AccountContactsOptions]), _dec5 = (0, _nextCore.dynamic)('Presence'), _dec6 = Reflect.metadata("design:type", typeof Presence === "undefined" ? Object : Presence), _dec7 = Reflect.metadata("design:type", Function), _dec8 = Reflect.metadata("design:paramtypes", []), _dec9 = Reflect.metadata("design:type", typeof Record === "undefined" ? Object : Record), _dec0 = Reflect.metadata("design:type", Function), _dec1 = Reflect.metadata("design:paramtypes", [typeof Record === "undefined" ? Object : Record]), _dec10 = Reflect.metadata("design:type", Function), _dec11 = Reflect.metadata("design:paramtypes", []), _dec12 = (0, _nextCore.delegate)('server'), _dec13 = Reflect.metadata("design:type", Function), _dec14 = Reflect.metadata("design:paramtypes", [String]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = /*#__PURE__*/function (_ViewableManager) {
  function AccountContactsViewableManager(_portManager, _auth, _client, _extensionInfo, _accountContactsOptions) {
    var _accountContactsOptio;
    var _this;
    _classCallCheck(this, AccountContactsViewableManager);
    _this = _callSuper(this, AccountContactsViewableManager, [_portManager, {
      viewableManagerOptions: {
        ttl: (_accountContactsOptio = _accountContactsOptions === null || _accountContactsOptions === void 0 ? void 0 : _accountContactsOptions.presenceTtl) !== null && _accountContactsOptio !== void 0 ? _accountContactsOptio : DEFAULT_PRESENCE_TTL,
        groupKey: 'accountId',
        itemKey: 'extensionId',
        maxBatchRequestCount: 30,
        validate: function validate(data) {
          return +data.extensionId !== _this._extensionInfo.id;
        }
      },
      onViewable: function onViewable(distinctMap) {
        var result = _this.handlePresenceUpdate(distinctMap);
        return result;
      }
    }]);
    _this._portManager = _portManager;
    _this._auth = _auth;
    _this._client = _client;
    _this._extensionInfo = _extensionInfo;
    _this._accountContactsOptions = _accountContactsOptions;
    _initializerDefineProperty(_this, "_presence", _descriptor, _this);
    _initializerDefineProperty(_this, "_presenceMap", _descriptor2, _this);
    _this._auth.afterLogout$.pipe((0, _rxjs.tap)(function () {
      _this.clear();
    }), _nextCore.takeUntilAppDestroy).subscribe();
    return _this;
  }
  _inherits(AccountContactsViewableManager, _ViewableManager);
  return _createClass(AccountContactsViewableManager, [{
    key: "presenceMap",
    get: function get() {
      var _this$_presence;
      var data = (_this$_presence = this._presence) === null || _this$_presence === void 0 ? void 0 : _this$_presence.data;
      // own presence use the presence data from presence service
      if (this._extensionInfo.id && data) {
        return _objectSpread(_objectSpread({}, this._presenceMap), {}, _defineProperty({}, this._extensionInfo.id, (0, _ramda.pick)(PRESENCE_DATA_KEY, data)));
      }
      return this._presenceMap;
    }
  }, {
    key: "_updatePresenceMap",
    value: function _updatePresenceMap(data) {
      var _this2 = this;
      Object.entries(data).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        if (_this2._presenceMap[key]) {
          // for ensure patch the smallest data
          Object.assign(_this2._presenceMap[key], value);
        } else {
          _this2._presenceMap[key] = value;
        }
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this._presenceMap = {};
      this.viewableManager.clear();
    }
  }, {
    key: "presenceTtl",
    get: function get() {
      var _this$_accountContact, _this$_accountContact2;
      return (_this$_accountContact = (_this$_accountContact2 = this._accountContactsOptions) === null || _this$_accountContact2 === void 0 ? void 0 : _this$_accountContact2.presenceTtl) !== null && _this$_accountContact !== void 0 ? _this$_accountContact : DEFAULT_PRESENCE_TTL;
    }
  }, {
    key: "link",
    value: function link(contact) {
      this.viewableManager.link(contact);
    }
  }, {
    key: "unlink",
    value: function unlink(contact) {
      this.viewableManager.unlink(contact);
    }
  }, {
    key: "handlePresenceUpdate",
    value: function () {
      var _handlePresenceUpdate = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(distinctMap) {
        var _this3 = this;
        var responseList, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return Promise.all(distinctMap.map(/*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref3) {
                  var _ref5, accountId, extensionIdList, ids, result;
                  return _regenerator().w(function (_context) {
                    while (1) switch (_context.n) {
                      case 0:
                        _ref5 = _slicedToArray(_ref3, 2), accountId = _ref5[0], extensionIdList = _ref5[1];
                        ids = extensionIdList.join(',');
                        _context.n = 1;
                        return _this3.batchGetApi("/restapi/v1.0/account/".concat(accountId, "/extension/").concat(ids, "/presence"));
                      case 1:
                        result = _context.v;
                        return _context.a(2, result);
                    }
                  }, _callee);
                }));
                return function (_x2) {
                  return _ref4.apply(this, arguments);
                };
              }()));
            case 1:
              responseList = _context2.v;
              return _context2.a(2, this.updatePresence(responseList));
            case 2:
              _context2.p = 2;
              _t = _context2.v;
              this.logger.error('batchGetApi error', _t);
              return _context2.a(2, []);
          }
        }, _callee2, this, [[0, 2]]);
      }));
      function handlePresenceUpdate(_x) {
        return _handlePresenceUpdate.apply(this, arguments);
      }
      return handlePresenceUpdate;
    }()
  }, {
    key: "batchGetApi",
    value: function () {
      var _batchGetApi = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(url) {
        var result;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return this._client.multipart.get(url, {
                batch: true
              });
            case 1:
              result = _context3.v;
              return _context3.a(2, result);
          }
        }, _callee3, this);
      }));
      function batchGetApi(_x3) {
        return _batchGetApi.apply(this, arguments);
      }
      return batchGetApi;
    }()
  }, {
    key: "updatePresence",
    value: function updatePresence(responseList) {
      var _this4 = this;
      var successList = [];
      var _presenceMap = {};
      responseList.forEach(function (response) {
        response.forEach(function (data) {
          if (data.errorCode) {
            _this4.logger.warn(data);
          } else {
            var _ref6 = data.extension,
              id = _ref6.id;
            var presence = (0, _ramda.pick)(PRESENCE_DATA_KEY, data);
            var extensionId = id;
            _presenceMap[extensionId] = presence;
            successList.push(extensionId.toString());
          }
        });
      });
      this._updatePresenceMap(_presenceMap);
      return successList;
    }
  }]);
}(_services2.ViewableManager), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_presence", [_dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, "presenceMap", [_nextCore.computed, _dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "presenceMap"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_presenceMap", [_nextCore.state, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _applyDecoratedDescriptor(_class2.prototype, "_updatePresenceMap", [_nextCore.action, _dec0, _dec1], Object.getOwnPropertyDescriptor(_class2.prototype, "_updatePresenceMap"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "clear", [_nextCore.action, _dec10, _dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "clear"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "batchGetApi", [_dec12, _dec13, _dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "batchGetApi"), _class2.prototype), _class2)) || _class) || _class) || _class) || _class);
//# sourceMappingURL=AccountContactsViewableManager.js.map

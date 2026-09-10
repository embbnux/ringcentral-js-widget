"use strict";

require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.index-of.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.map.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/web.dom-collections.for-each.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unwrapRoleResult = exports.systemRoles = exports.roleInvocationMarker = exports.roleDeadline = exports.isRoleInvocation = exports.createRoleError = exports.RoleUnavailableError = exports.RoleSourceNotOwnerError = exports.RoleReleaseRejectedError = exports.RoleNotRegisteredError = exports.RoleInvocationTimeoutError = exports.RoleFencedError = exports.RoleDefinitionMismatchError = exports.RoleAggregateError = void 0;
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/esnext.aggregate-error.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _excluded = ["reason"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var roleInvocationMarker = exports.roleInvocationMarker = '__rc_role_invocation__';
var roleDeadline = exports.roleDeadline = 65000;
var systemRoles = exports.systemRoles = {
  server: {
    role: 'server',
    allowMultiple: false,
    autoElect: false
  },
  connectedClients: {
    role: 'connectedClients',
    allowMultiple: true,
    autoElect: false
  },
  electedClient: {
    role: 'electedClient',
    allowMultiple: false,
    autoElect: true
  },
  all: {
    role: 'all',
    allowMultiple: true,
    autoElect: false
  }
};
var isRoleInvocation = exports.isRoleInvocation = function isRoleInvocation(value) {
  return _typeof(value) === 'object' && value !== null && value.marker === roleInvocationMarker;
};
var RoleUnavailableError = exports.RoleUnavailableError = /*#__PURE__*/function (_Error) {
  function RoleUnavailableError(role) {
    var _this;
    _classCallCheck(this, RoleUnavailableError);
    _this = _callSuper(this, RoleUnavailableError, ["Role '".concat(role, "' has no available owner.")]);
    _this.name = 'RoleUnavailableError';
    return _this;
  }
  _inherits(RoleUnavailableError, _Error);
  return _createClass(RoleUnavailableError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
var RoleNotRegisteredError = exports.RoleNotRegisteredError = /*#__PURE__*/function (_Error2) {
  function RoleNotRegisteredError(role) {
    var _this2;
    _classCallCheck(this, RoleNotRegisteredError);
    _this2 = _callSuper(this, RoleNotRegisteredError, ["Role '".concat(role, "' is not registered locally.")]);
    _this2.name = 'RoleNotRegisteredError';
    return _this2;
  }
  _inherits(RoleNotRegisteredError, _Error2);
  return _createClass(RoleNotRegisteredError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
var RoleDefinitionMismatchError = exports.RoleDefinitionMismatchError = /*#__PURE__*/function (_Error3) {
  function RoleDefinitionMismatchError(role) {
    var _this3;
    _classCallCheck(this, RoleDefinitionMismatchError);
    _this3 = _callSuper(this, RoleDefinitionMismatchError, ["Role '".concat(role, "' definition does not match the coordinator.")]);
    _this3.name = 'RoleDefinitionMismatchError';
    return _this3;
  }
  _inherits(RoleDefinitionMismatchError, _Error3);
  return _createClass(RoleDefinitionMismatchError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
var RoleReleaseRejectedError = exports.RoleReleaseRejectedError = /*#__PURE__*/function (_Error4) {
  function RoleReleaseRejectedError(role) {
    var _this4;
    _classCallCheck(this, RoleReleaseRejectedError);
    _this4 = _callSuper(this, RoleReleaseRejectedError, ["Role '".concat(role, "' release was rejected by its current owner.")]);
    _this4.name = 'RoleReleaseRejectedError';
    return _this4;
  }
  _inherits(RoleReleaseRejectedError, _Error4);
  return _createClass(RoleReleaseRejectedError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
var RoleInvocationTimeoutError = exports.RoleInvocationTimeoutError = /*#__PURE__*/function (_Error5) {
  function RoleInvocationTimeoutError(role) {
    var _this5;
    _classCallCheck(this, RoleInvocationTimeoutError);
    _this5 = _callSuper(this, RoleInvocationTimeoutError, ["Role '".concat(role, "' invocation exceeded the coordinator deadline.")]);
    _this5.name = 'RoleInvocationTimeoutError';
    return _this5;
  }
  _inherits(RoleInvocationTimeoutError, _Error5);
  return _createClass(RoleInvocationTimeoutError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
var RoleFencedError = exports.RoleFencedError = /*#__PURE__*/function (_Error6) {
  function RoleFencedError(role) {
    var _this6;
    _classCallCheck(this, RoleFencedError);
    _this6 = _callSuper(this, RoleFencedError, ["Role '".concat(role, "' ownership is stale.")]);
    _this6.name = 'RoleFencedError';
    return _this6;
  }
  _inherits(RoleFencedError, _Error6);
  return _createClass(RoleFencedError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
var RoleSourceNotOwnerError = exports.RoleSourceNotOwnerError = /*#__PURE__*/function (_Error7) {
  function RoleSourceNotOwnerError(role) {
    var _this7;
    _classCallCheck(this, RoleSourceNotOwnerError);
    _this7 = _callSuper(this, RoleSourceNotOwnerError, ["The invoking client does not own role '".concat(role, "'.")]);
    _this7.name = 'RoleSourceNotOwnerError';
    return _this7;
  }
  _inherits(RoleSourceNotOwnerError, _Error7);
  return _createClass(RoleSourceNotOwnerError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
var _createRoleError = exports.createRoleError = function createRoleError(error) {
  var _exec$, _exec;
  var name = error.name,
    message = error.message;
  var role = (_exec$ = (_exec = /'([^']+)'/.exec(message)) === null || _exec === void 0 ? void 0 : _exec[1]) !== null && _exec$ !== void 0 ? _exec$ : 'unknown';
  switch (name) {
    case 'RoleUnavailableError':
      return new RoleUnavailableError(role);
    case 'RoleNotRegisteredError':
      return new RoleNotRegisteredError(role);
    case 'RoleDefinitionMismatchError':
      return new RoleDefinitionMismatchError(role);
    case 'RoleReleaseRejectedError':
      return new RoleReleaseRejectedError(role);
    case 'RoleInvocationTimeoutError':
      return new RoleInvocationTimeoutError(role);
    case 'RoleFencedError':
      return new RoleFencedError(role);
    case 'RoleSourceNotOwnerError':
      return new RoleSourceNotOwnerError(role);
    case 'RoleAggregateError':
      {
        var _error$errors = error.errors,
          errors = _error$errors === void 0 ? [] : _error$errors,
          _error$results = error.results,
          _results = _error$results === void 0 ? [] : _error$results;
        return new RoleAggregateError(errors.map(_createRoleError), _results.map(function (_ref) {
          var reason = _ref.reason,
            result = _objectWithoutProperties(_ref, _excluded);
          return reason ? _objectSpread(_objectSpread({}, result), {}, {
            reason: _createRoleError(reason)
          }) : result;
        }));
      }
    default:
      return Object.assign(new Error(message), {
        name: name
      });
  }
};
var unwrapRoleResult = exports.unwrapRoleResult = function unwrapRoleResult(result) {
  if (!result) throw new Error('Role transport returned no response.');
  if (result.ok) return result.value;
  throw _createRoleError(result.error);
};
var RoleAggregateError = exports.RoleAggregateError = /*#__PURE__*/function (_AggregateError) {
  function RoleAggregateError(errors, results) {
    var _this8;
    _classCallCheck(this, RoleAggregateError);
    _this8 = _callSuper(this, RoleAggregateError, [errors, 'One or more role invocations failed.']);
    _this8.results = results;
    _this8.name = 'RoleAggregateError';
    return _this8;
  }
  _inherits(RoleAggregateError, _AggregateError);
  return _createClass(RoleAggregateError);
}(/*#__PURE__*/_wrapNativeSuper(AggregateError));
//# sourceMappingURL=roleDelegation.js.map

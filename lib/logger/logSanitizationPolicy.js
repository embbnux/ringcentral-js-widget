"use strict";

require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/web.dom-collections.for-each.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerLogSanitizationPolicy = exports.logParamsWithSanitizationPolicy = exports.isLogParamsWithSanitizationPolicy = exports.getSerializedLogSanitizationPolicyId = exports.getLogSanitizationPolicy = exports.createSerializedLogSanitizationPolicyMarker = exports.SERIALIZED_LOG_SANITIZATION_POLICY_KEY = exports.LOG_SANITIZATION_POLICY_VERSION = void 0;
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.map.js");
require("core-js/modules/es.number.is-integer.js");
require("core-js/modules/es.object.freeze.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/esnext.global-this.js");
require("core-js/modules/web.dom-collections.iterator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LOG_SANITIZATION_POLICY_PARAMS_MARK = Symbol('rcLogSanitizationPolicyParams');
var LOG_SANITIZATION_POLICY_REGISTRY_KEY = Symbol["for"]('__RC_LOG_SANITIZATION_POLICY_REGISTRY__');
var SERIALIZED_LOG_SANITIZATION_POLICY_KEY = exports.SERIALIZED_LOG_SANITIZATION_POLICY_KEY = '__rcLogSanitizationPolicy';
var LOG_SANITIZATION_POLICY_VERSION = exports.LOG_SANITIZATION_POLICY_VERSION = 1;
var MAX_LOG_SANITIZATION_POLICY_DEPTH = 10;
var getPolicyRegistry = function getPolicyRegistry() {
  var _globalRegistry$LOG_S;
  var globalRegistry = globalThis;
  (_globalRegistry$LOG_S = globalRegistry[LOG_SANITIZATION_POLICY_REGISTRY_KEY]) !== null && _globalRegistry$LOG_S !== void 0 ? _globalRegistry$LOG_S : globalRegistry[LOG_SANITIZATION_POLICY_REGISTRY_KEY] = new Map();
  return globalRegistry[LOG_SANITIZATION_POLICY_REGISTRY_KEY];
};

/** Registers a named policy without allowing later registrations to widen it. */
var registerLogSanitizationPolicy = exports.registerLogSanitizationPolicy = function registerLogSanitizationPolicy(policy) {
  var _policy$depth, _policy$hashPaths;
  var registry = getPolicyRegistry();
  var registeredPolicy = registry.get(policy.id);
  if (registeredPolicy) return registeredPolicy;
  var immutablePolicy = Object.freeze(_objectSpread(_objectSpread({}, Number.isInteger(policy.depth) ? {
    depth: Math.min(Math.max((_policy$depth = policy.depth) !== null && _policy$depth !== void 0 ? _policy$depth : 0, 0), MAX_LOG_SANITIZATION_POLICY_DEPTH)
  } : {}), {}, {
    id: policy.id,
    hashPaths: Object.freeze(((_policy$hashPaths = policy.hashPaths) !== null && _policy$hashPaths !== void 0 ? _policy$hashPaths : []).map(function (path) {
      return Object.freeze(_toConsumableArray(path));
    })),
    metadataPaths: Object.freeze(policy.metadataPaths.map(function (path) {
      return Object.freeze(_toConsumableArray(path));
    }))
  }));
  registry.set(immutablePolicy.id, immutablePolicy);
  return immutablePolicy;
};
var getLogSanitizationPolicy = exports.getLogSanitizationPolicy = function getLogSanitizationPolicy(policyId) {
  return getPolicyRegistry().get(policyId);
};

/** Applies a registered policy to all parameters of one logger call. */
var logParamsWithSanitizationPolicy = exports.logParamsWithSanitizationPolicy = function logParamsWithSanitizationPolicy(policyId, params) {
  return _defineProperty(_defineProperty(_defineProperty({}, LOG_SANITIZATION_POLICY_PARAMS_MARK, true), "params", params), "policyId", policyId);
};
var isLogParamsWithSanitizationPolicy = exports.isLogParamsWithSanitizationPolicy = function isLogParamsWithSanitizationPolicy(value) {
  return value !== null && _typeof(value) === 'object' && LOG_SANITIZATION_POLICY_PARAMS_MARK in value;
};
var createSerializedLogSanitizationPolicyMarker = exports.createSerializedLogSanitizationPolicyMarker = function createSerializedLogSanitizationPolicyMarker(policyId) {
  return _defineProperty({}, SERIALIZED_LOG_SANITIZATION_POLICY_KEY, {
    id: policyId,
    version: LOG_SANITIZATION_POLICY_VERSION
  });
};
var isRecord = function isRecord(value) {
  return value !== null && _typeof(value) === 'object' && !Array.isArray(value);
};
var getSerializedLogSanitizationPolicyId = exports.getSerializedLogSanitizationPolicyId = function getSerializedLogSanitizationPolicyId(value) {
  if (!isRecord(value) || Object.keys(value).length !== 1) return undefined;
  var marker = value[SERIALIZED_LOG_SANITIZATION_POLICY_KEY];
  if (!isRecord(marker) || Object.keys(marker).length !== 2 || typeof marker.id !== 'string' || marker.version !== LOG_SANITIZATION_POLICY_VERSION) {
    return undefined;
  }
  return marker.id;
};
//# sourceMappingURL=logSanitizationPolicy.js.map

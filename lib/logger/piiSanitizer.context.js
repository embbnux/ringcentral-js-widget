"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.for-each.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRootContext = exports.createContext = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.weak-set.js");
require("core-js/modules/web.dom-collections.iterator.js");
var sanitizerConstants = _interopRequireWildcard(require("./piiSanitizer.constants"));
var _piiV = require("./piiV2");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var DEFAULT_LOG_HASH_SALT = sanitizerConstants.DEFAULT_LOG_HASH_SALT,
  EMPTY_WORDS = sanitizerConstants.EMPTY_WORDS,
  DEFAULT_SANITIZE_OPTIONS = sanitizerConstants.DEFAULT_SANITIZE_OPTIONS,
  DEFAULT_DEPTH = sanitizerConstants.DEFAULT_DEPTH,
  MAX_SANITIZE_NODES = sanitizerConstants.MAX_SANITIZE_NODES,
  createKeySet = sanitizerConstants.createKeySet,
  defaultSensitiveKeys = sanitizerConstants.defaultSensitiveKeys,
  defaultMaskKeys = sanitizerConstants.defaultMaskKeys;
var createSensitiveKeys = function createSensitiveKeys(excludes, options) {
  var _options$excludes$len, _options$excludes, _options$sensitiveWor, _options$sensitiveWor2, _options$excludes2, _options$sensitiveWor3;
  var hasCustomSensitiveKeys = excludes.length > 0 || ((_options$excludes$len = (_options$excludes = options.excludes) === null || _options$excludes === void 0 ? void 0 : _options$excludes.length) !== null && _options$excludes$len !== void 0 ? _options$excludes$len : 0) > 0 || ((_options$sensitiveWor = (_options$sensitiveWor2 = options.sensitiveWords) === null || _options$sensitiveWor2 === void 0 ? void 0 : _options$sensitiveWor2.length) !== null && _options$sensitiveWor !== void 0 ? _options$sensitiveWor : 0) > 0;
  if (!hasCustomSensitiveKeys) {
    return defaultSensitiveKeys;
  }
  return createKeySet([].concat(_toConsumableArray(Array.from(defaultSensitiveKeys)), _toConsumableArray(excludes), _toConsumableArray((_options$excludes2 = options.excludes) !== null && _options$excludes2 !== void 0 ? _options$excludes2 : []), _toConsumableArray((_options$sensitiveWor3 = options.sensitiveWords) !== null && _options$sensitiveWor3 !== void 0 ? _options$sensitiveWor3 : [])));
};
var createMaskKeys = function createMaskKeys(options) {
  var _options$maskWords$le, _options$maskWords, _options$maskWords2;
  if (((_options$maskWords$le = (_options$maskWords = options.maskWords) === null || _options$maskWords === void 0 ? void 0 : _options$maskWords.length) !== null && _options$maskWords$le !== void 0 ? _options$maskWords$le : 0) === 0) {
    return defaultMaskKeys;
  }
  return createKeySet([].concat(_toConsumableArray(Array.from(defaultMaskKeys)), _toConsumableArray((_options$maskWords2 = options.maskWords) !== null && _options$maskWords2 !== void 0 ? _options$maskWords2 : [])));
};
var createCustomSensitiveKeys = function createCustomSensitiveKeys(excludes, options) {
  var _options$excludes3, _options$sensitiveWor4;
  return createKeySet([].concat(_toConsumableArray(excludes), _toConsumableArray((_options$excludes3 = options.excludes) !== null && _options$excludes3 !== void 0 ? _options$excludes3 : []), _toConsumableArray((_options$sensitiveWor4 = options.sensitiveWords) !== null && _options$sensitiveWor4 !== void 0 ? _options$sensitiveWor4 : [])));
};
var createContext = exports.createContext = function createContext() {
  var _options$depth, _options$hashSalt, _options$deviceKey;
  var excludes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EMPTY_WORDS;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_SANITIZE_OPTIONS;
  return {
    depth: (_options$depth = options.depth) !== null && _options$depth !== void 0 ? _options$depth : DEFAULT_DEPTH,
    sensitiveKeys: createSensitiveKeys(excludes, options),
    customSensitiveKeys: createCustomSensitiveKeys(excludes, options),
    maskKeys: createMaskKeys(options),
    hashSalt: (_options$hashSalt = options.hashSalt) !== null && _options$hashSalt !== void 0 ? _options$hashSalt : DEFAULT_LOG_HASH_SALT,
    deviceKey: (_options$deviceKey = options.deviceKey) !== null && _options$deviceKey !== void 0 ? _options$deviceKey : (0, _piiV.ensurePiiDeviceKey)().key,
    seen: new WeakSet(),
    budget: {
      nodes: MAX_SANITIZE_NODES
    }
  };
};
var createRootContext = exports.createRootContext = function createRootContext(context) {
  return _objectSpread(_objectSpread({}, context), {}, {
    seen: new WeakSet()
  });
};
//# sourceMappingURL=piiSanitizer.context.js.map

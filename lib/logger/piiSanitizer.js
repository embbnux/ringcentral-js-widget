"use strict";

require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BINARY_MARKER_V2", {
  enumerable: true,
  get: function get() {
    return _piiV.BINARY_MARKER_V2;
  }
});
exports.CIRCULAR_VALUE = void 0;
Object.defineProperty(exports, "MASK_WORDS", {
  enumerable: true,
  get: function get() {
    return sanitizerConstants.MASK_WORDS;
  }
});
exports.OVER_DEPTH_VALUE = exports.OVER_BUDGET_VALUE = void 0;
Object.defineProperty(exports, "PII_MARKER_VERSION", {
  enumerable: true,
  get: function get() {
    return _piiV.PII_MARKER_VERSION;
  }
});
Object.defineProperty(exports, "SECRET_MARKER_V2", {
  enumerable: true,
  get: function get() {
    return _piiV.SECRET_MARKER_V2;
  }
});
Object.defineProperty(exports, "SENSITIVE_WORDS", {
  enumerable: true,
  get: function get() {
    return sanitizerConstants.SENSITIVE_WORDS;
  }
});
Object.defineProperty(exports, "UNAVAILABLE_MARKER_V2", {
  enumerable: true,
  get: function get() {
    return _piiV.UNAVAILABLE_MARKER_V2;
  }
});
Object.defineProperty(exports, "diagnosticLogValue", {
  enumerable: true,
  get: function get() {
    return _piiSanitizer4.diagnosticLogValue;
  }
});
Object.defineProperty(exports, "ensurePiiDeviceKey", {
  enumerable: true,
  get: function get() {
    return _piiV.ensurePiiDeviceKey;
  }
});
Object.defineProperty(exports, "hashLogIdentifier", {
  enumerable: true,
  get: function get() {
    return _piiSanitizer4.hashLogIdentifier;
  }
});
Object.defineProperty(exports, "isCanonicalFilenameSafePiiMarker", {
  enumerable: true,
  get: function get() {
    return _piiV.isCanonicalFilenameSafePiiMarker;
  }
});
Object.defineProperty(exports, "maskCallId", {
  enumerable: true,
  get: function get() {
    return _piiSanitizer4.maskCallId;
  }
});
Object.defineProperty(exports, "maskEmail", {
  enumerable: true,
  get: function get() {
    return _piiSanitizer4.maskEmail;
  }
});
Object.defineProperty(exports, "maskIP", {
  enumerable: true,
  get: function get() {
    return _piiSanitizer4.maskIP;
  }
});
Object.defineProperty(exports, "maskPhone", {
  enumerable: true,
  get: function get() {
    return _piiSanitizer4.maskPhone;
  }
});
Object.defineProperty(exports, "maskQuery", {
  enumerable: true,
  get: function get() {
    return _piiSanitizer4.maskQuery;
  }
});
Object.defineProperty(exports, "maskSipMessage", {
  enumerable: true,
  get: function get() {
    return _piiSanitizer4.maskSipMessage;
  }
});
Object.defineProperty(exports, "maskSipUri", {
  enumerable: true,
  get: function get() {
    return _piiSanitizer4.maskSipUri;
  }
});
Object.defineProperty(exports, "maskString", {
  enumerable: true,
  get: function get() {
    return _piiSanitizer4.maskString;
  }
});
Object.defineProperty(exports, "preserveFilenameSafeMarkers", {
  enumerable: true,
  get: function get() {
    return _piiV.preserveFilenameSafeMarkers;
  }
});
Object.defineProperty(exports, "replaceContentMarkersWithFilenameSafe", {
  enumerable: true,
  get: function get() {
    return _piiV.replaceContentMarkersWithFilenameSafe;
  }
});
Object.defineProperty(exports, "resetPiiDeviceKeyForTests", {
  enumerable: true,
  get: function get() {
    return _piiV.resetPiiDeviceKeyForTests;
  }
});
exports.sanitizeLogData = sanitizeLogData;
exports.sanitizeLogParams = sanitizeLogParams;
Object.defineProperty(exports, "sanitizeLogText", {
  enumerable: true,
  get: function get() {
    return _piiSanitizer4.sanitizeLogText;
  }
});
exports.sanitizeSerializedLogParams = void 0;
Object.defineProperty(exports, "setPiiDeviceKeyForTests", {
  enumerable: true,
  get: function get() {
    return _piiV.setPiiDeviceKeyForTests;
  }
});
Object.defineProperty(exports, "toFilenameSafePiiMarker", {
  enumerable: true,
  get: function get() {
    return _piiV.toFilenameSafePiiMarker;
  }
});
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.every.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.array.some.js");
require("core-js/modules/es.array-buffer.constructor.js");
require("core-js/modules/es.array-buffer.is-view.js");
require("core-js/modules/es.array-buffer.slice.js");
require("core-js/modules/es.data-view.js");
require("core-js/modules/es.date.to-iso-string.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.map.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.constructor.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.set.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.string.starts-with.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _logSanitizationPolicy = require("./logSanitizationPolicy");
var _piiSanitizer = require("./piiSanitizer.body");
var sanitizerConstants = _interopRequireWildcard(require("./piiSanitizer.constants"));
var _piiSanitizer3 = require("./piiSanitizer.context");
var _piiSanitizer4 = require("./piiSanitizer.text");
var _piiV = require("./piiV2");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var EMPTY_WORDS = sanitizerConstants.EMPTY_WORDS,
  DEFAULT_SANITIZE_OPTIONS = sanitizerConstants.DEFAULT_SANITIZE_OPTIONS,
  ADDRESS_SCOPED_SENSITIVE_WORDS = sanitizerConstants.ADDRESS_SCOPED_SENSITIVE_WORDS,
  URL_VALUE_KEYS = sanitizerConstants.URL_VALUE_KEYS,
  TRACK_EVENT_LOG_NAME = sanitizerConstants.TRACK_EVENT_LOG_NAME,
  TRACK_EVENT_NAME_INDEX = sanitizerConstants.TRACK_EVENT_NAME_INDEX,
  TRACK_EVENT_PROPS_INDEX = sanitizerConstants.TRACK_EVENT_PROPS_INDEX,
  TRACK_EVENT_PROPS_PARENT_KEY = sanitizerConstants.TRACK_EVENT_PROPS_PARENT_KEY,
  TRACK_EVENT_LABEL_KEYS = sanitizerConstants.TRACK_EVENT_LABEL_KEYS,
  normalizeKey = sanitizerConstants.normalizeKey,
  createKeySet = sanitizerConstants.createKeySet,
  piiContainerKeys = sanitizerConstants.piiContainerKeys,
  addressContainerKeys = sanitizerConstants.addressContainerKeys,
  secretKeys = sanitizerConstants.secretKeys,
  tokenKeys = sanitizerConstants.tokenKeys,
  emailKeys = sanitizerConstants.emailKeys,
  phoneKeys = sanitizerConstants.phoneKeys,
  personNameKeys = sanitizerConstants.personNameKeys,
  usernameKeys = sanitizerConstants.usernameKeys,
  addressLeafKeys = sanitizerConstants.addressLeafKeys,
  ssnKeys = sanitizerConstants.ssnKeys,
  creditCardKeys = sanitizerConstants.creditCardKeys,
  hashIdentifierKeys = sanitizerConstants.hashIdentifierKeys,
  diagnosticAllowedKeys = sanitizerConstants.diagnosticAllowedKeys,
  macKeys = sanitizerConstants.macKeys,
  ipKeys = sanitizerConstants.ipKeys;
var CIRCULAR_VALUE = exports.CIRCULAR_VALUE = '[Circular~]';
var OVER_DEPTH_VALUE = exports.OVER_DEPTH_VALUE = '[OverDepth]';
var OVER_BUDGET_VALUE = exports.OVER_BUDGET_VALUE = '[OverBudget]';
var maskValue = function maskValue(value, context) {
  if (typeof value === 'string') {
    return (0, _piiSanitizer4.maskString)((0, _piiSanitizer4.sanitizeLogTextWithContext)(value, context));
  }
  return (0, _piiV.redactSecret)();
};
var isTrackEventLabelKey = function isTrackEventLabelKey(parentKey, key) {
  return parentKey === TRACK_EVENT_PROPS_PARENT_KEY && TRACK_EVENT_LABEL_KEYS.has(normalizeKey(key));
};
var piiScopedSensitiveKeys = createKeySet(['id', 'name', 'from', 'to', 'text', 'title', 'subject', 'message']);
var addressScopedSensitiveKeys = createKeySet(_toConsumableArray(ADDRESS_SCOPED_SENSITIVE_WORDS));
var isObjectLike = function isObjectLike(value) {
  return value !== null && _typeof(value) === 'object';
};

// A container we recurse into to preserve shape. Errors and Dates are handled
// as their own leaf-like normalizations in sanitizeData.
var isPlainContainer = function isPlainContainer(value) {
  return isObjectLike(value) && !(value instanceof Error) && !(value instanceof Date);
};
var isPolicyPath = function isPolicyPath(paths, path) {
  var _paths$some;
  return (_paths$some = paths === null || paths === void 0 ? void 0 : paths.some(function (metadataPath) {
    return metadataPath.length === path.length && metadataPath.every(function (segment, index) {
      return segment === '*' || segment === path[index];
    });
  })) !== null && _paths$some !== void 0 ? _paths$some : false;
};
var getFieldScope = function getFieldScope(scope, key) {
  var _scope$path;
  if (!scope.policy) return scope;
  var path = [].concat(_toConsumableArray((_scope$path = scope.path) !== null && _scope$path !== void 0 ? _scope$path : []), [key]);
  return _objectSpread(_objectSpread({}, scope), {}, {
    hash: isPolicyPath(scope.policy.hashPaths, path),
    metadata: scope.metadata || isPolicyPath(scope.policy.metadataPaths, path),
    path: path
  });
};
var isMetadataUrl = function isMetadataUrl(value) {
  return /^(?:[a-z][a-z\d+.-]*:)?\/\//i.test(value) || value.startsWith('/');
};
var shouldFilterContainerArrayItem = function shouldFilterContainerArrayItem(value, scope) {
  return (scope.piiContainer || scope.addressContainer) && !isObjectLike(value);
};
var NOT_HANDLED = Symbol('not-handled');
var requestBodySanitizer = {
  normalizeKey: normalizeKey,
  sanitizeData: sanitizeData,
  sanitizeFieldValue: sanitizeFieldValue,
  sanitizeLabelText: _piiSanitizer4.sanitizeLabelText,
  sanitizeLogTextWithContext: _piiSanitizer4.sanitizeLogTextWithContext
};
function sanitizeBodyFieldValue(_ref) {
  var key = _ref.key,
    fieldValue = _ref.fieldValue,
    fieldScope = _ref.fieldScope,
    context = _ref.context,
    currentDepth = _ref.currentDepth,
    normalizedKey = _ref.normalizedKey;
  var isBodyField = normalizedKey === 'requestbody' || normalizedKey === 'responsebody';
  if (!isBodyField) {
    return NOT_HANDLED;
  }
  if (fieldScope.secret && (typeof fieldValue === 'string' || (0, _piiSanitizer.isBinaryBodyValue)(fieldValue))) {
    return (0, _piiV.redactSecret)();
  }
  if ((0, _piiSanitizer.isBinaryBodyValue)(fieldValue)) {
    return _piiV.BINARY_MARKER_V2;
  }
  if (typeof fieldValue === 'string') {
    return (0, _piiSanitizer.sanitizeRequestBodyString)({
      value: fieldValue,
      context: context,
      currentDepth: currentDepth,
      scope: fieldScope,
      bodyKey: key,
      sanitizer: requestBodySanitizer
    });
  }
  return NOT_HANDLED;
}
var sanitizeSecretScopeValue = function sanitizeSecretScopeValue(fieldValue, fieldScope, recurse, forceSecret) {
  if (!isPlainContainer(fieldValue)) {
    return (0, _piiV.redactSecret)();
  }
  var childScope = forceSecret ? _objectSpread(_objectSpread({}, fieldScope), {}, {
    secret: true
  }) : fieldScope;
  return recurse(childScope);
};
var sanitizeTokenScopeValue = function sanitizeTokenScopeValue(key, fieldValue, fieldScope, context, recurse) {
  if (isPlainContainer(fieldValue)) {
    return recurse(_objectSpread(_objectSpread({}, fieldScope), {}, {
      secret: true
    }));
  }
  return typeof fieldValue === 'string' ? (0, _piiSanitizer4.redactTokenValue)(key, fieldValue, context.deviceKey) : (0, _piiV.redactSecret)();
};
var sanitizeHashScopeValue = function sanitizeHashScopeValue(fieldValue, fieldScope, context, recurse) {
  return isPlainContainer(fieldValue) ? recurse(fieldScope) : (0, _piiV.redactUserId)(String(fieldValue), context.deviceKey);
};
var sanitizeMetadataScopeValue = function sanitizeMetadataScopeValue(key, normalizedKey, fieldValue, fieldScope, context, recurse) {
  if (typeof fieldValue === 'string' && (URL_VALUE_KEYS.has(normalizedKey) || isMetadataUrl(fieldValue))) {
    return (0, _piiSanitizer4.sanitizeUrlValue)(key, fieldValue, context);
  }
  return recurse(fieldScope);
};
function sanitizeFieldScopeValue(_ref2) {
  var key = _ref2.key,
    normalizedKey = _ref2.normalizedKey,
    fieldValue = _ref2.fieldValue,
    fieldScope = _ref2.fieldScope,
    context = _ref2.context,
    recurse = _ref2.recurse;
  if (fieldScope.secret) {
    return sanitizeSecretScopeValue(fieldValue, fieldScope, recurse, false);
  }
  if (secretKeys.has(normalizedKey)) {
    return sanitizeSecretScopeValue(fieldValue, fieldScope, recurse, true);
  }
  if (tokenKeys.has(normalizedKey)) {
    return sanitizeTokenScopeValue(key, fieldValue, fieldScope, context, recurse);
  }
  if (fieldScope.hash || hashIdentifierKeys.has(normalizedKey) || fieldScope.piiContainer && normalizedKey === 'id') {
    return sanitizeHashScopeValue(fieldValue, fieldScope, context, recurse);
  }
  if (fieldScope.metadata) {
    return sanitizeMetadataScopeValue(key, normalizedKey, fieldValue, fieldScope, context, recurse);
  }
  return NOT_HANDLED;
}
function sanitizeKnownStringValue(_ref3, redactValue) {
  var fieldValue = _ref3.fieldValue,
    fieldScope = _ref3.fieldScope,
    recurse = _ref3.recurse;
  var childScope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    secret: true
  };
  if (isPlainContainer(fieldValue)) {
    return recurse(_objectSpread(_objectSpread({}, fieldScope), childScope));
  }
  if (typeof fieldValue === 'string') {
    return redactValue(fieldValue);
  }
  return (0, _piiV.redactSecret)();
}
function sanitizeKnownRestrictedValue(_ref4, restriction) {
  var fieldValue = _ref4.fieldValue,
    fieldScope = _ref4.fieldScope,
    recurse = _ref4.recurse;
  var childScope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    secret: true
  };
  if (isPlainContainer(fieldValue)) {
    return recurse(_objectSpread(_objectSpread({}, fieldScope), childScope));
  }
  return (0, _piiV.redactRestricted)(restriction);
}
function sanitizeKnownTextValue(_ref5, sanitizeValue) {
  var fieldValue = _ref5.fieldValue,
    fieldScope = _ref5.fieldScope,
    recurse = _ref5.recurse;
  if (isPlainContainer(fieldValue)) {
    return recurse(fieldScope);
  }
  if (typeof fieldValue === 'string') {
    return sanitizeValue(fieldValue);
  }
  return (0, _piiV.redactSecret)();
}
function sanitizeKnownFieldValue(fieldContext) {
  var normalizedKey = fieldContext.normalizedKey,
    context = fieldContext.context;
  if (emailKeys.has(normalizedKey)) {
    return sanitizeKnownStringValue(fieldContext, function (value) {
      return (0, _piiV.redactEmail)(value, context.deviceKey);
    });
  }
  if (phoneKeys.has(normalizedKey)) {
    return sanitizeKnownStringValue(fieldContext, function (value) {
      return (0, _piiV.redactPhone)(value, context.deviceKey);
    }, normalizedKey === 'phonenumbers' ? {
      piiContainer: true
    } : {
      secret: true
    });
  }
  if (usernameKeys.has(normalizedKey)) {
    return sanitizeKnownStringValue(fieldContext, function (value) {
      return (0, _piiV.redactUsername)(value, context.deviceKey);
    });
  }
  if (personNameKeys.has(normalizedKey)) {
    return sanitizeKnownStringValue(fieldContext, function (value) {
      return (0, _piiV.redactPersonName)(value, context.deviceKey);
    });
  }
  if (addressLeafKeys.has(normalizedKey) && !addressContainerKeys.has(normalizedKey)) {
    return sanitizeKnownRestrictedValue(fieldContext, 'address', {
      addressContainer: true
    });
  }
  if (ssnKeys.has(normalizedKey)) {
    return sanitizeKnownRestrictedValue(fieldContext, 'ssn');
  }
  if (creditCardKeys.has(normalizedKey)) {
    return sanitizeKnownRestrictedValue(fieldContext, 'credit-card');
  }
  if (macKeys.has(normalizedKey)) {
    return sanitizeKnownTextValue(fieldContext, function (value) {
      return (0, _piiV.redactMac)(value, context.deviceKey);
    });
  }
  if (ipKeys.has(normalizedKey)) {
    return sanitizeKnownTextValue(fieldContext, function (value) {
      return (0, _piiSanitizer4.maskIP)(value, context.deviceKey);
    });
  }
  return NOT_HANDLED;
}
function sanitizeContainerFieldValue(_ref6) {
  var normalizedKey = _ref6.normalizedKey,
    fieldValue = _ref6.fieldValue,
    fieldScope = _ref6.fieldScope,
    recurse = _ref6.recurse;
  if (piiContainerKeys.has(normalizedKey)) {
    if (!isObjectLike(fieldValue)) {
      return (0, _piiV.redactSecret)();
    }
    return recurse(_objectSpread(_objectSpread({}, fieldScope), {}, {
      piiContainer: true
    }));
  }
  if (addressContainerKeys.has(normalizedKey)) {
    if (!isObjectLike(fieldValue)) {
      return (0, _piiV.redactRestricted)('address');
    }
    return recurse(_objectSpread(_objectSpread({}, fieldScope), {}, {
      addressContainer: true
    }));
  }
  return NOT_HANDLED;
}
function sanitizeAddressScopedFieldValue(_ref7) {
  var key = _ref7.key,
    normalizedKey = _ref7.normalizedKey,
    fieldValue = _ref7.fieldValue,
    fieldScope = _ref7.fieldScope,
    context = _ref7.context,
    recurse = _ref7.recurse;
  if (!fieldScope.addressContainer || !addressScopedSensitiveKeys.has(normalizedKey)) {
    return NOT_HANDLED;
  }
  if (isPlainContainer(fieldValue)) {
    return recurse(fieldScope);
  }
  if (normalizedKey === 'id') {
    return (0, _piiV.redactUserId)(String(fieldValue), context.deviceKey);
  }
  if (personNameKeys.has(normalizedKey) || normalizedKey === 'name') {
    return typeof fieldValue === 'string' ? (0, _piiV.redactPersonName)(fieldValue, context.deviceKey) : (0, _piiV.redactRestricted)('address');
  }
  if (normalizedKey === 'uri' || normalizedKey === 'url' || normalizedKey === 'href') {
    return typeof fieldValue === 'string' ? (0, _piiSanitizer4.sanitizeUrlValue)(key, fieldValue, context) : (0, _piiV.redactRestricted)('address');
  }
  return (0, _piiV.redactRestricted)('address');
}
var sanitizeUrlScopedFieldValue = function sanitizeUrlScopedFieldValue(_ref8) {
  var key = _ref8.key,
    normalizedKey = _ref8.normalizedKey,
    fieldValue = _ref8.fieldValue,
    fieldScope = _ref8.fieldScope,
    context = _ref8.context,
    recurse = _ref8.recurse;
  if (!URL_VALUE_KEYS.has(normalizedKey)) {
    return NOT_HANDLED;
  }
  if (typeof fieldValue === 'string') {
    return (0, _piiSanitizer4.sanitizeUrlValue)(key, fieldValue, context);
  }
  return isPlainContainer(fieldValue) ? recurse(fieldScope) : (0, _piiV.redactSecret)();
};
var sanitizePiiScopedFieldValue = function sanitizePiiScopedFieldValue(_ref9) {
  var normalizedKey = _ref9.normalizedKey,
    fieldValue = _ref9.fieldValue,
    fieldScope = _ref9.fieldScope,
    context = _ref9.context,
    recurse = _ref9.recurse;
  if (!fieldScope.piiContainer || !piiScopedSensitiveKeys.has(normalizedKey)) {
    return NOT_HANDLED;
  }
  if (isPlainContainer(fieldValue)) {
    return recurse(fieldScope);
  }
  if (normalizedKey === 'id') {
    return (0, _piiV.redactUserId)(String(fieldValue), context.deviceKey);
  }
  if (normalizedKey === 'name') {
    return typeof fieldValue === 'string' ? (0, _piiV.redactPersonName)(fieldValue, context.deviceKey) : (0, _piiV.redactSecret)();
  }
  return (0, _piiV.redactSecret)();
};
var sanitizeCallIdFieldValue = function sanitizeCallIdFieldValue(key, fieldValue) {
  return (key === 'callId' || key === 'sipCallId') && typeof fieldValue === 'string' ? (0, _piiSanitizer4.maskCallId)(fieldValue) : NOT_HANDLED;
};
var sanitizeDiagnosticScopedFieldValue = function sanitizeDiagnosticScopedFieldValue(_ref0) {
  var normalizedKey = _ref0.normalizedKey,
    fieldScope = _ref0.fieldScope,
    isDiagnosticValue = _ref0.isDiagnosticValue,
    recurse = _ref0.recurse;
  return (fieldScope.diagnostic || isDiagnosticValue) && diagnosticAllowedKeys.has(normalizedKey) ? recurse(_objectSpread(_objectSpread({}, fieldScope), {}, {
    diagnostic: true
  })) : NOT_HANDLED;
};
function sanitizeScopedFieldValue(fieldContext) {
  var addressValue = sanitizeAddressScopedFieldValue(fieldContext);
  if (addressValue !== NOT_HANDLED) return addressValue;
  var urlValue = sanitizeUrlScopedFieldValue(fieldContext);
  if (urlValue !== NOT_HANDLED) return urlValue;
  var piiValue = sanitizePiiScopedFieldValue(fieldContext);
  if (piiValue !== NOT_HANDLED) return piiValue;
  var callIdValue = sanitizeCallIdFieldValue(fieldContext.key, fieldContext.fieldValue);
  if (callIdValue !== NOT_HANDLED) return callIdValue;
  return sanitizeDiagnosticScopedFieldValue(fieldContext);
}
var sanitizeSensitiveFallbackValue = function sanitizeSensitiveFallbackValue(_ref1) {
  var normalizedKey = _ref1.normalizedKey,
    fieldValue = _ref1.fieldValue,
    fieldScope = _ref1.fieldScope,
    context = _ref1.context,
    recurse = _ref1.recurse;
  if (isPlainContainer(fieldValue)) {
    return recurse(context.customSensitiveKeys.has(normalizedKey) ? _objectSpread(_objectSpread({}, fieldScope), {}, {
      secret: true
    }) : fieldScope);
  }
  if (typeof fieldValue !== 'string') {
    return (0, _piiV.redactSecret)();
  }
  if (phoneKeys.has(normalizedKey)) {
    return (0, _piiV.redactPhone)(fieldValue, context.deviceKey);
  }
  if (personNameKeys.has(normalizedKey)) {
    return (0, _piiV.redactPersonName)(fieldValue, context.deviceKey);
  }
  if (usernameKeys.has(normalizedKey)) {
    return (0, _piiV.redactUsername)(fieldValue, context.deviceKey);
  }
  if (addressLeafKeys.has(normalizedKey)) {
    return (0, _piiV.redactRestricted)('address');
  }
  return (0, _piiV.redactSecret)();
};
function sanitizeFallbackFieldValue(fieldContext) {
  var value = fieldContext.value,
    normalizedKey = fieldContext.normalizedKey,
    fieldValue = fieldContext.fieldValue,
    fieldScope = fieldContext.fieldScope,
    context = fieldContext.context,
    recurse = fieldContext.recurse;
  if (context.maskKeys.has(normalizedKey)) {
    return isPlainContainer(fieldValue) ? recurse(fieldScope) : maskValue(value, context);
  }
  if (context.sensitiveKeys.has(normalizedKey)) {
    return sanitizeSensitiveFallbackValue(fieldContext);
  }
  return NOT_HANDLED;
}
function sanitizeFieldValue(_ref10) {
  var key = _ref10.key,
    value = _ref10.value,
    context = _ref10.context,
    currentDepth = _ref10.currentDepth,
    scope = _ref10.scope;
  var normalizedKey = normalizeKey(key);
  var isDiagnosticValue = (0, _piiSanitizer4.isDiagnosticLogValue)(value);
  var fieldValue = isDiagnosticValue ? value.value : value;
  var fieldScope = getFieldScope(scope, key);
  var recurse = function recurse(childScope) {
    return sanitizeData(fieldValue, context, currentDepth + 1, key, childScope);
  };
  if (key === _logSanitizationPolicy.SERIALIZED_LOG_SANITIZATION_POLICY_KEY) {
    return (0, _piiV.redactSecret)();
  }
  if (typeof fieldValue === 'string' && (0, _piiV.isCanonicalPiiMarker)(fieldValue)) {
    return fieldValue;
  }
  var fieldContext = {
    key: key,
    value: value,
    normalizedKey: normalizedKey,
    fieldValue: fieldValue,
    fieldScope: fieldScope,
    context: context,
    currentDepth: currentDepth,
    isDiagnosticValue: isDiagnosticValue,
    recurse: recurse
  };
  var bodyValue = sanitizeBodyFieldValue(fieldContext);
  if (bodyValue !== NOT_HANDLED) return bodyValue;
  var scopeValue = sanitizeFieldScopeValue(fieldContext);
  if (scopeValue !== NOT_HANDLED) return scopeValue;
  var knownValue = sanitizeKnownFieldValue(fieldContext);
  if (knownValue !== NOT_HANDLED) return knownValue;
  var containerValue = sanitizeContainerFieldValue(fieldContext);
  if (containerValue !== NOT_HANDLED) return containerValue;
  var scopedValue = sanitizeScopedFieldValue(fieldContext);
  if (scopedValue !== NOT_HANDLED) return scopedValue;
  var fallbackValue = sanitizeFallbackFieldValue(fieldContext);
  if (fallbackValue !== NOT_HANDLED) return fallbackValue;
  return recurse(fieldScope);
}

// Renames a key whose own text carries PII (e.g. an email/phone used as a map
// key), then resolves collisions deterministically with `~2`, `~3`, … so a
// renamed key never overwrites or drops an existing entry.
function resolveOutputKey(key, result, context) {
  var sanitizedKey = key && (0, _piiSanitizer4.hasTextSanitizeSignal)(key) ? (0, _piiSanitizer4.sanitizeLabelText)(key, context) : key;
  if (!Object.prototype.hasOwnProperty.call(result, sanitizedKey)) {
    return sanitizedKey;
  }
  var suffix = 2;
  var candidate = "".concat(sanitizedKey, "~").concat(suffix);
  while (Object.prototype.hasOwnProperty.call(result, candidate)) {
    suffix += 1;
    candidate = "".concat(sanitizedKey, "~").concat(suffix);
  }
  return candidate;
}
function sanitizeObject(data, context, currentDepth, parentKey) {
  var scope = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  if (context.seen.has(data)) {
    return CIRCULAR_VALUE;
  }
  context.seen.add(data);
  var result = Object.create(null);
  Object.keys(data).forEach(function (key) {
    // A throwing getter must not remove sibling fields or other logger params.
    var sanitizedValue;
    try {
      var value = data[key];
      sanitizedValue = isTrackEventLabelKey(parentKey, key) ? sanitizeData(value, context, currentDepth + 1, key, scope) : sanitizeFieldValue({
        key: key,
        value: value,
        context: context,
        currentDepth: currentDepth,
        scope: scope
      });
    } catch (_unused) {
      sanitizedValue = _piiV.UNAVAILABLE_MARKER_V2;
    }
    result[resolveOutputKey(key, result, context)] = sanitizedValue;
  });
  context.seen["delete"](data);
  return result;
}
function sanitizeError(error, context) {
  var result = {
    name: error.name,
    message: (0, _piiSanitizer4.sanitizeLogTextWithContext)(error.message, context)
  };
  if (error.stack) {
    result.stack = (0, _piiSanitizer4.sanitizeLogTextWithContext)(error.stack, context);
  }
  Object.keys(error).forEach(function (key) {
    result[key] = sanitizeFieldValue({
      key: key,
      value: error[key],
      context: context,
      currentDepth: 0,
      scope: {}
    });
  });
  return result;
}
function sanitizeArrayItem(_ref11) {
  var item = _ref11.item,
    context = _ref11.context,
    currentDepth = _ref11.currentDepth,
    parentKey = _ref11.parentKey,
    scope = _ref11.scope;
  if (shouldFilterContainerArrayItem(item, scope)) {
    if (scope.addressContainer) {
      return (0, _piiV.redactRestricted)('address');
    }
    return (0, _piiV.redactSecret)();
  }
  return sanitizeData(item, context, currentDepth + 1, parentKey, scope);
}
function sanitizeArray(data, context, currentDepth, parentKey, scope) {
  if (context.seen.has(data)) {
    return CIRCULAR_VALUE;
  }
  context.seen.add(data);
  var result = data.map(function (item) {
    return sanitizeArrayItem({
      item: item,
      context: context,
      currentDepth: currentDepth,
      parentKey: parentKey,
      scope: scope
    });
  });
  context.seen["delete"](data);
  return result;
}
function sanitizePrimitiveDataValue(data, context) {
  if (data instanceof Error) {
    return sanitizeError(data, context);
  }
  if (data instanceof Date) {
    return data.toISOString();
  }
  if (typeof data === 'string') {
    return (0, _piiSanitizer4.sanitizeLogTextWithContext)(data, context);
  }
  if (typeof data === 'bigint') {
    return data.toString();
  }
  if (typeof data === 'function') {
    return data.name ? "[Function ".concat(data.name, "]") : '[Function]';
  }
  return data === null || _typeof(data) !== 'object' ? data : NOT_HANDLED;
}
function sanitizeSpecialContainerDataValue(data, context, currentDepth, parentKey, scope) {
  if (data instanceof Map) {
    return sanitizeData(Array.from(data.entries()), context, currentDepth, parentKey, scope);
  }
  if (data instanceof Set) {
    return sanitizeData(Array.from(data.values()), context, currentDepth, parentKey, scope);
  }
  if (data instanceof RegExp) {
    return data.toString();
  }
  if (ArrayBuffer.isView(data) || data instanceof ArrayBuffer) {
    var _data$constructor$nam, _data$constructor;
    var size = 'byteLength' in data ? data.byteLength : undefined;
    return "[".concat((_data$constructor$nam = (_data$constructor = data.constructor) === null || _data$constructor === void 0 ? void 0 : _data$constructor.name) !== null && _data$constructor$nam !== void 0 ? _data$constructor$nam : 'Binary').concat(size === undefined ? '' : " byteLength=".concat(size), "]");
  }
  return NOT_HANDLED;
}
function sanitizeDataValue(data, context, currentDepth, parentKey, scope) {
  var primitiveValue = sanitizePrimitiveDataValue(data, context);
  if (primitiveValue !== NOT_HANDLED) return primitiveValue;

  // Normalize container-like values JSON.stringify would drop or throw on, so a
  // single exotic value cannot break the whole logger call.
  var specialContainerValue = sanitizeSpecialContainerDataValue(data, context, currentDepth, parentKey, scope);
  if (specialContainerValue !== NOT_HANDLED) return specialContainerValue;
  if (Array.isArray(data)) {
    return sanitizeArray(data, context, currentDepth, parentKey, scope);
  }
  return sanitizeObject(data, context, currentDepth, parentKey, scope);
}
function sanitizeData(data, context, currentDepth, parentKey) {
  var scope = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  if (context.budget.nodes <= 0) {
    return OVER_BUDGET_VALUE;
  }
  context.budget.nodes -= 1;
  if (currentDepth > context.depth) {
    return OVER_DEPTH_VALUE;
  }

  // Fully-hidden scope: recurse containers to keep shape, hide every scalar.
  if (scope.secret && !isPlainContainer(data) && !(0, _piiSanitizer4.isDiagnosticLogValue)(data)) {
    return (0, _piiV.redactSecret)();
  }
  if ((0, _piiSanitizer4.isDiagnosticLogValue)(data)) {
    return sanitizeData(data.value, context, currentDepth, parentKey, _objectSpread(_objectSpread({}, scope), {}, {
      diagnostic: true
    }));
  }
  return sanitizeDataValue(data, context, currentDepth, parentKey, scope);
}
function sanitizeLogData(data) {
  var excludes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : EMPTY_WORDS;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_SANITIZE_OPTIONS;
  return sanitizeData(data, (0, _piiSanitizer3.createContext)(excludes, options), 0);
}
function sanitizeTrackEventParams(params) {
  var context = (0, _piiSanitizer3.createContext)();
  return params.map(function (item, index) {
    if (index === TRACK_EVENT_NAME_INDEX && typeof item === 'string') {
      return (0, _piiSanitizer4.sanitizeLabelText)(item);
    }
    if (index === TRACK_EVENT_PROPS_INDEX) {
      return sanitizeData(item, context, 0, TRACK_EVENT_PROPS_PARENT_KEY);
    }
    return sanitizeData(item, context, 0);
  });
}
var isTrackEventParams = function isTrackEventParams(params) {
  return params[0] === TRACK_EVENT_LOG_NAME;
};
var sanitizeLogParamsWithPolicy = function sanitizeLogParamsWithPolicy(params, policy) {
  var sharedContext = (0, _piiSanitizer3.createContext)(EMPTY_WORDS, policy.depth === undefined ? DEFAULT_SANITIZE_OPTIONS : {
    depth: policy.depth
  });
  return params.map(function (item) {
    return sanitizeData(item, (0, _piiSanitizer3.createRootContext)(sharedContext), 0, undefined, {
      path: [],
      policy: policy
    });
  });
};

/** Re-sanitizes one serialized BrowserLogger message and removes its marker. */
var sanitizeSerializedLogParams = exports.sanitizeSerializedLogParams = function sanitizeSerializedLogParams(value) {
  if (!Array.isArray(value) || value.length < 2) return undefined;
  var policyId = (0, _logSanitizationPolicy.getSerializedLogSanitizationPolicyId)(value[value.length - 1]);
  if (!policyId) return undefined;
  var policy = (0, _logSanitizationPolicy.getLogSanitizationPolicy)(policyId);
  if (!policy) return undefined;
  return sanitizeLogParamsWithPolicy(value.slice(0, -1), policy);
};
function sanitizeLogParams(params) {
  if (typeof params === 'string') {
    return (0, _piiSanitizer4.sanitizeLogText)(params);
  }
  if (isTrackEventParams(params)) {
    return sanitizeTrackEventParams(params);
  }
  if (params.length === 1 && (0, _logSanitizationPolicy.isLogParamsWithSanitizationPolicy)(params[0])) {
    var policyParams = params[0];
    var policy = (0, _logSanitizationPolicy.getLogSanitizationPolicy)(policyParams.policyId);
    if (!policy) {
      return sanitizeLogParams(_toConsumableArray(policyParams.params));
    }
    var sanitizedParams = sanitizeLogParamsWithPolicy(policyParams.params, policy);
    return [].concat(_toConsumableArray(sanitizedParams), [(0, _logSanitizationPolicy.createSerializedLogSanitizationPolicyMarker)(policy.id)]);
  }
  var sharedContext = (0, _piiSanitizer3.createContext)();
  return params.map(function (item) {
    return sanitizeData(item, (0, _piiSanitizer3.createRootContext)(sharedContext), 0);
  });
}
//# sourceMappingURL=piiSanitizer.js.map

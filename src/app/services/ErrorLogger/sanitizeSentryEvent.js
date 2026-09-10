"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanitizeSentryEvent = sanitizeSentryEvent;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.entries.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _nextCore = require("@ringcentral-integration/next-core");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// Extra keys forced to Secret before specialized correlatable branches.
// Remaining correlatable markers are demoted in the final Sentry pass.
var SENTRY_USER_EXCLUDES = ['id', 'ip_address'];
var SENTRY_FIELD_SANITIZE_DEPTH = 20;
var SENTRY_FIELD_SANITIZE_OPTIONS = {
  depth: SENTRY_FIELD_SANITIZE_DEPTH
};

// Shared sanitizer emits correlatable v2 markers; Sentry gets no preview/ref.
var CORRELATABLE_PII_MARKER_REGEX = /\[PII:v2;[a-z0-9-]+;[^;\]]*;[A-Z2-7]{13}\]/g;
var sanitizeFieldData = function sanitizeFieldData(data) {
  return (0, _nextCore.sanitizeLogData)(data, [], SENTRY_FIELD_SANITIZE_OPTIONS);
};
var demoteCorrelatableMarkers = function demoteCorrelatableMarkers(value) {
  return value.replace(CORRELATABLE_PII_MARKER_REGEX, _nextCore.SECRET_MARKER_V2);
};
var resolveOutputKey = function resolveOutputKey(key, result) {
  if (!(key in result)) {
    return key;
  }
  var suffix = 2;
  var candidate = "".concat(key, "~").concat(suffix);
  while (candidate in result) {
    suffix += 1;
    candidate = "".concat(key, "~").concat(suffix);
  }
  return candidate;
};
var _demoteCorrelatableForSentry = function demoteCorrelatableForSentry(value) {
  if (typeof value === 'string') {
    return demoteCorrelatableMarkers(value);
  }
  if (Array.isArray(value)) {
    return value.map(function (item) {
      return _demoteCorrelatableForSentry(item);
    });
  }
  if (value !== null && _typeof(value) === 'object') {
    var result = {};
    Object.entries(value).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        entry = _ref2[1];
      var demotedKey = resolveOutputKey(demoteCorrelatableMarkers(key), result);
      result[demotedKey] = _demoteCorrelatableForSentry(entry);
    });
    return result;
  }
  return value;
};
var sanitizeRequestCookies = function sanitizeRequestCookies(cookies) {
  return Object.keys(cookies).reduce(function (result, key) {
    result[key] = _nextCore.SECRET_MARKER_V2;
    return result;
  }, {});
};
var sanitizeLogEntry = function sanitizeLogEntry(logentry) {
  var sanitized = _objectSpread({}, logentry);
  if (logentry.message) {
    sanitized.message = (0, _nextCore.sanitizeLogText)(logentry.message);
  }
  if (logentry.params) {
    sanitized.params = logentry.params.map(function (param) {
      return typeof param === 'string' ? (0, _nextCore.sanitizeLogText)(param) : sanitizeFieldData(param);
    });
  }
  return sanitized;
};
var sanitizeRequest = function sanitizeRequest(request) {
  var sanitized = _objectSpread({}, request);
  if (request.url) {
    sanitized.url = (0, _nextCore.sanitizeLogText)(request.url);
  }
  if (request.query_string) {
    sanitized.query_string = typeof request.query_string === 'string' ? (0, _nextCore.sanitizeLogText)(request.query_string) : sanitizeFieldData(request.query_string);
  }
  if (request.headers) {
    sanitized.headers = sanitizeFieldData(request.headers);
  }
  if (request.cookies) {
    sanitized.cookies = sanitizeRequestCookies(request.cookies);
  }
  if (request.env) {
    sanitized.env = sanitizeFieldData(request.env);
  }
  if (request.data !== undefined) {
    sanitized.data = sanitizeFieldData(request.data);
  }
  return sanitized;
};
var sanitizeBreadcrumb = function sanitizeBreadcrumb(breadcrumb) {
  var sanitized = _objectSpread({}, breadcrumb);
  if (breadcrumb.message) {
    sanitized.message = (0, _nextCore.sanitizeLogText)(breadcrumb.message);
  }
  if (breadcrumb.data) {
    sanitized.data = sanitizeFieldData(breadcrumb.data);
  }
  return sanitized;
};
var sanitizeStackFrame = function sanitizeStackFrame(frame) {
  var sanitized = _objectSpread({}, frame);
  if (frame.context_line) {
    sanitized.context_line = (0, _nextCore.sanitizeLogText)(frame.context_line);
  }
  if (frame.pre_context) {
    sanitized.pre_context = frame.pre_context.map(function (context) {
      return (0, _nextCore.sanitizeLogText)(context);
    });
  }
  if (frame.post_context) {
    sanitized.post_context = frame.post_context.map(function (context) {
      return (0, _nextCore.sanitizeLogText)(context);
    });
  }
  if (frame.vars) {
    sanitized.vars = sanitizeFieldData(frame.vars);
  }
  return sanitized;
};
var sanitizeStacktrace = function sanitizeStacktrace(stacktrace) {
  if (!stacktrace.frames) {
    return stacktrace;
  }
  return _objectSpread(_objectSpread({}, stacktrace), {}, {
    frames: stacktrace.frames.map(function (frame) {
      return sanitizeStackFrame(frame);
    })
  });
};
var sanitizeException = function sanitizeException(exception) {
  var sanitized = _objectSpread({}, exception);
  if (exception.type) {
    sanitized.type = (0, _nextCore.sanitizeLogText)(exception.type);
  }
  if (exception.value) {
    sanitized.value = (0, _nextCore.sanitizeLogText)(exception.value);
  }
  if (exception.stacktrace) {
    sanitized.stacktrace = sanitizeStacktrace(exception.stacktrace);
  }
  return sanitized;
};
var sanitizeThread = function sanitizeThread(thread) {
  var sanitized = _objectSpread({}, thread);
  if (thread.name) {
    sanitized.name = (0, _nextCore.sanitizeLogText)(thread.name);
  }
  if (thread.stacktrace) {
    sanitized.stacktrace = sanitizeStacktrace(thread.stacktrace);
  }
  return sanitized;
};
function sanitizeSentryEvent(event) {
  var _event$exception, _event$threads;
  var sanitized = _objectSpread({}, event);
  if (event.message) {
    sanitized.message = (0, _nextCore.sanitizeLogText)(event.message);
  }
  if (event.logentry) {
    sanitized.logentry = sanitizeLogEntry(event.logentry);
  }
  if (event.user) {
    sanitized.user = (0, _nextCore.sanitizeLogData)(event.user, SENTRY_USER_EXCLUDES);
  }
  if (event.tags) {
    // Shared sanitizer classifies PII tags; demote pass strips preview/ref.
    sanitized.tags = sanitizeFieldData(event.tags);
  }
  if (event.request) {
    sanitized.request = sanitizeRequest(event.request);
  }
  if (event.breadcrumbs) {
    sanitized.breadcrumbs = event.breadcrumbs.map(function (breadcrumb) {
      return sanitizeBreadcrumb(breadcrumb);
    });
  }
  if ((_event$exception = event.exception) !== null && _event$exception !== void 0 && _event$exception.values) {
    sanitized.exception = _objectSpread(_objectSpread({}, event.exception), {}, {
      values: event.exception.values.map(function (exception) {
        return sanitizeException(exception);
      })
    });
  }
  if ((_event$threads = event.threads) !== null && _event$threads !== void 0 && _event$threads.values) {
    sanitized.threads = _objectSpread(_objectSpread({}, event.threads), {}, {
      values: event.threads.values.map(function (thread) {
        return sanitizeThread(thread);
      })
    });
  }
  if (event.contexts) {
    sanitized.contexts = sanitizeFieldData(event.contexts);
  }
  if (event.extra) {
    sanitized.extra = sanitizeFieldData(event.extra);
  }
  if (event.transaction) {
    sanitized.transaction = (0, _nextCore.sanitizeLogText)(event.transaction);
  }

  // Sentry is not a correlation surface — drop previews/refs after shared sanitize.
  return _demoteCorrelatableForSentry(sanitized);
}
//# sourceMappingURL=sanitizeSentryEvent.js.map

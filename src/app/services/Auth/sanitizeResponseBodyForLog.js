"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/web.dom-collections.for-each.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanitizeResponseBodyForLog = void 0;
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.date.to-json.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/web.url.js");
require("core-js/modules/web.url.to-json.js");
require("core-js/modules/web.url-search-params.js");
var _nextCore = require("@ringcentral-integration/next-core");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var EXTENSION_INFO_PATH = /^\/restapi\/v1\.0\/account\/[^/]+\/extension\/[^/]+\/?$/;
var isExtensionInfoUrl = function isExtensionInfoUrl(requestUrl) {
  try {
    return EXTENSION_INFO_PATH.test(new URL(requestUrl, 'https://localhost').pathname);
  } catch (_unused) {
    return false;
  }
};

/** Removes an extension's display name before its response is logged. */
var sanitizeResponseBodyForLog = exports.sanitizeResponseBodyForLog = function sanitizeResponseBodyForLog(requestUrl, responseBody) {
  if (!requestUrl || !isExtensionInfoUrl(requestUrl)) {
    return responseBody;
  }
  if (typeof responseBody !== 'string' || responseBody.length === 0) {
    return responseBody;
  }
  try {
    var extensionInfo = JSON.parse(responseBody);
    if (extensionInfo === null || _typeof(extensionInfo) !== 'object' || Array.isArray(extensionInfo)) {
      return _nextCore.SECRET_MARKER_V2;
    }
    return JSON.stringify(_objectSpread(_objectSpread({}, extensionInfo), {}, {
      name: _nextCore.SECRET_MARKER_V2
    }));
  } catch (_unused2) {
    return _nextCore.SECRET_MARKER_V2;
  }
};
//# sourceMappingURL=sanitizeResponseBodyForLog.js.map

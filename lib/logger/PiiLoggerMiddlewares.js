"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PiiLoggerMiddlewares = void 0;
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.date.to-json.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.to-string.js");
var _piiV = require("./piiV2");
var _piiSanitizer = require("./piiSanitizer");
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Serialize each param independently so one value that JSON.stringify rejects
// cannot drop the sibling params from the log entry.
var safeStringify = function safeStringify(value) {
  try {
    return JSON.stringify(value);
  } catch (_unused) {
    if (Array.isArray(value)) {
      return JSON.stringify(value.map(function (item) {
        try {
          return JSON.parse(JSON.stringify(item));
        } catch (_unused2) {
          return _piiV.UNAVAILABLE_MARKER_V2;
        }
      }));
    }
    return JSON.stringify(_piiV.UNAVAILABLE_MARKER_V2);
  }
};
var PiiLoggerMiddlewares = exports.PiiLoggerMiddlewares = /*#__PURE__*/function () {
  function PiiLoggerMiddlewares() {
    _classCallCheck(this, PiiLoggerMiddlewares);
  }
  return _createClass(PiiLoggerMiddlewares, [{
    key: "handleContext",
    value: function handleContext(messageContext) {
      return messageContext;
    }
  }, {
    key: "handleParams",
    value: function handleParams(params) {
      try {
        var sanitized = typeof params === 'string' ? (0, _piiSanitizer.sanitizeLogText)(params) : (0, _piiSanitizer.sanitizeLogParams)(params);
        return safeStringify(sanitized);
      } catch (_unused3) {
        return safeStringify(typeof params === 'string' ? (0, _piiSanitizer.sanitizeLogText)(params) : [_piiV.UNAVAILABLE_MARKER_V2]);
      }
    }
  }]);
}();
//# sourceMappingURL=PiiLoggerMiddlewares.js.map

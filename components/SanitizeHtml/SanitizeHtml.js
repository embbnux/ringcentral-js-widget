"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.array.index-of.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SanitizeHtml = void 0;
var _clsx = _interopRequireDefault(require("clsx"));
var _linkifyHtml = _interopRequireDefault(require("linkify-html"));
var _react = _interopRequireDefault(require("react"));
var _useSanitizeHtml = require("./useSanitizeHtml");
var _excluded = ["content", "linkifyOptions", "className"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var DEFAULT_LINKIFY_OPTIONS = {
  target: '_blank',
  rel: 'noopener noreferrer'
};

/**
 * Component that safely renders text or sanitized HTML content.
 * Uses memoization internally to optimize performance.
 */
var SanitizeHtml = exports.SanitizeHtml = function SanitizeHtml(_ref) {
  var content = _ref.content,
    linkifyOptions = _ref.linkifyOptions,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var sanitizedContent = (0, _useSanitizeHtml.useSanitizeHtml)(content);
  if (!sanitizedContent) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement("span", _extends({
    className: (0, _clsx["default"])('whitespace-pre-wrap break-words [&_a]:sui-link [&_a]:sui-link-root [&_a]:sui-link-primary [&_a]:sui-link-always', className),
    dangerouslySetInnerHTML: {
      __html: (0, _linkifyHtml["default"])(sanitizedContent, linkifyOptions !== null && linkifyOptions !== void 0 ? linkifyOptions : DEFAULT_LINKIFY_OPTIONS)
    }
  }, rest));
};
//# sourceMappingURL=SanitizeHtml.js.map

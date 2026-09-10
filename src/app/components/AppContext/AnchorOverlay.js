"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.iterator.js");
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
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnchorOverlay = void 0;
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/esnext.global-this.js");
require("core-js/modules/web.dom-collections.for-each.js");
var _springUi = require("@ringcentral/spring-ui");
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireWildcard(require("react"));
var _reactDom = require("react-dom");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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
function getAnchorRect(anchorEl) {
  if (!anchorEl) return null;
  return anchorEl.getBoundingClientRect();
}

/**
 * Renders children in a layer that fully covers the anchor element with the same width and height.
 * Position is updated when the anchor moves or resizes (e.g. on tab switch, layout change, or scroll).
 */
function resolveAnchor(anchor) {
  return typeof anchor === 'function' ? anchor() : anchor;
}
var AnchorOverlay = exports.AnchorOverlay = function AnchorOverlay(_ref) {
  var anchorEl = _ref.anchorEl,
    children = _ref.children,
    className = _ref.className,
    style = _ref.style,
    _ref$layer = _ref.layer,
    layer = _ref$layer === void 0 ? 0 : _ref$layer;
  var hostRef = (0, _react.useRef)(null);
  var resolvedAnchor = resolveAnchor(anchorEl) ||
  // when anchorEl is null, use hostRef as anchor to fake not display anything on the screen
  hostRef.current;
  var _useState = (0, _react.useState)(function () {
      return getAnchorRect(resolvedAnchor);
    }),
    _useState2 = _slicedToArray(_useState, 2),
    rect = _useState2[0],
    setRect = _useState2[1];
  var bodyHideRef = (0, _react.useRef)(false);
  var updateRect = (0, _react.useCallback)(function () {
    // when body be hide, do nothing
    if (bodyHideRef.current) return;
    var newRect = getAnchorRect(resolvedAnchor);
    setRect(function (prev) {
      if (!prev && !newRect) return prev;
      if (!newRect) return null;
      if (prev && prev.top === newRect.top && prev.left === newRect.left && prev.width === newRect.width && prev.height === newRect.height) {
        return prev;
      }
      return newRect;
    });
  }, [resolvedAnchor]);
  (0, _react.useLayoutEffect)(function () {
    if (!resolvedAnchor) {
      setRect(null);
      return;
    }
    updateRect();
    // 1. Create the IntersectionObserver instance
    var observer = globalThis.IntersectionObserver ? new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var isHide = !entry.isIntersecting || entry.intersectionRatio === 0;
        // When the outer container becomes display: none,
        // entry.isIntersecting turns false and intersectionRatio drops to 0
        var shouldRefresh = !isHide && isHide !== bodyHideRef.current;
        bodyHideRef.current = isHide;
        if (shouldRefresh) {
          updateRect();
        }
      });
    }, {
      threshold: [0, 0.1] // Triggers as soon as layout visibility changes
    }) : undefined;

    // 2. Observe the iframe internal document.body
    observer === null || observer === void 0 ? void 0 : observer.observe(document.body);
    var resizeObserver = new ResizeObserver(updateRect);
    resizeObserver.observe(resolvedAnchor);
    window.addEventListener('scroll', updateRect, true);
    window.addEventListener('resize', updateRect);
    return function () {
      resizeObserver.disconnect();
      window.removeEventListener('scroll', updateRect, true);
      window.removeEventListener('resize', updateRect);
      observer === null || observer === void 0 ? void 0 : observer.disconnect();
    };
  }, [resolvedAnchor, updateRect]);
  (0, _springUi.useOnReRender)(updateRect);
  if (!resolvedAnchor || !rect) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    ref: hostRef,
    className: "sr-only"
  }), /*#__PURE__*/(0, _reactDom.createPortal)(
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  _react["default"].createElement("div", {
    className: (0, _clsx["default"])('bg-neutral-base overflow-hidden', className),
    style: _objectSpread({
      position: 'fixed',
      top: rect.top,
      left: rect.left,
      // in test env use 100% for us better debug
      width: process.env.NODE_ENV === 'test' ? '100%' : rect.width,
      height: process.env.NODE_ENV === 'test' ? '100%' : rect.height,
      // same as the drawer z-index
      zIndex: 1200 + layer
    }, style),
    onClick: function onClick(e) {
      e.stopPropagation();
    },
    onKeyDown: function onKeyDown(e) {
      e.stopPropagation();
    }
  }, children), document.body));
};
//# sourceMappingURL=AnchorOverlay.js.map

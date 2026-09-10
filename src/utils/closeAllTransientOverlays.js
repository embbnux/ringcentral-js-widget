"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeAllTransientOverlays = closeAllTransientOverlays;
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/esnext.global-this.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SPRING_UI_TRANSPARENT_BACKDROP_SELECTOR = '.sui-backdrop';
var SMS_TEMPLATE_POPOVER_BACKDROP_SELECTOR = '[data-sign="templatePopoverBackdrop"]';
var EMOJI_MENU_SELECTOR = '#emoji-menu';
var EMOJI_BUTTON_SELECTOR = '[data-sign="emojiButton"]';
var TRANSIENT_OVERLAY_DISMISS_TARGET_SELECTORS = [SMS_TEMPLATE_POPOVER_BACKDROP_SELECTOR, SPRING_UI_TRANSPARENT_BACKDROP_SELECTOR];
var getMouseEventInit = function getMouseEventInit(windowRef, buttons) {
  return {
    bubbles: true,
    cancelable: true,
    view: windowRef,
    button: 0,
    buttons: buttons
  };
};
var createPointerEvent = function createPointerEvent(windowRef, type, buttons) {
  var eventInit = _objectSpread(_objectSpread({}, getMouseEventInit(windowRef, buttons)), {}, {
    pointerType: 'mouse',
    isPrimary: true
  });
  if (typeof windowRef.PointerEvent === 'function') {
    return new windowRef.PointerEvent(type, eventInit);
  }
  return new windowRef.MouseEvent(type, eventInit);
};
var simulateMouseClick = function simulateMouseClick(element, windowRef) {
  element.dispatchEvent(createPointerEvent(windowRef, 'pointerdown', 1));
  element.dispatchEvent(new windowRef.MouseEvent('mousedown', getMouseEventInit(windowRef, 1)));
  element.dispatchEvent(createPointerEvent(windowRef, 'pointerup', 0));
  element.dispatchEvent(new windowRef.MouseEvent('mouseup', getMouseEventInit(windowRef, 0)));
  element.dispatchEvent(new windowRef.MouseEvent('click', getMouseEventInit(windowRef, 0)));
};
var getTopElementBySelector = function getTopElementBySelector(documentRef, selector) {
  var elements = documentRef.querySelectorAll(selector);
  return elements[elements.length - 1];
};
function closeAllTransientOverlays() {
  var _documentRef$body;
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$documentRef = _ref.documentRef,
    documentRef = _ref$documentRef === void 0 ? globalThis.document : _ref$documentRef,
    _ref$windowRef = _ref.windowRef,
    windowRef = _ref$windowRef === void 0 ? globalThis.window : _ref$windowRef;
  if (!documentRef || !windowRef) {
    return;
  }
  var emojiMenu = getTopElementBySelector(documentRef, EMOJI_MENU_SELECTOR);
  var emojiButton = getTopElementBySelector(documentRef, EMOJI_BUTTON_SELECTOR);
  if (emojiMenu && emojiButton) {
    simulateMouseClick(emojiButton, windowRef);
  }
  TRANSIENT_OVERLAY_DISMISS_TARGET_SELECTORS.forEach(function (selector) {
    var dismissTarget = getTopElementBySelector(documentRef, selector);
    if (dismissTarget) {
      simulateMouseClick(dismissTarget, windowRef);
    }
  });
  var body = (_documentRef$body = documentRef.body) !== null && _documentRef$body !== void 0 ? _documentRef$body : documentRef.documentElement;
  if (body) {
    simulateMouseClick(body, windowRef);
  }
}
//# sourceMappingURL=closeAllTransientOverlays.js.map

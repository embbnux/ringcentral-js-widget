"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddConsentNumberDrawerPanel = void 0;
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.trim.js");
var _springIcon = require("@ringcentral/spring-icon");
var _springUi = require("@ringcentral/spring-ui");
var _react = _interopRequireWildcard(require("react"));
var _i18n = require("./i18n");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * First-step number picker for the settings "Add consent" flow. Rendered inside
 * a bottom drawer modal so the user can pick which SMS-registered number to
 * associate before opening the Add consent form. Structure mirrors the consent
 * management ConsentFilterDrawer registered-number list.
 */
var AddConsentNumberDrawerPanel = exports.AddConsentNumberDrawerPanel = function AddConsentNumberDrawerPanel(_ref) {
  var registeredNumbers = _ref.registeredNumbers,
    defaultNumber = _ref.defaultNumber,
    formatNumber = _ref.formatNumber,
    onClose = _ref.onClose,
    onSelect = _ref.onSelect;
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    search = _useState2[0],
    setSearch = _useState2[1];
  var filteredNumbers = (0, _react.useMemo)(function () {
    var normalizedSearch = search.trim().toLowerCase();
    if (!normalizedSearch) {
      return registeredNumbers;
    }
    return registeredNumbers.filter(function (phoneNumber) {
      var formattedNumber = formatNumber(phoneNumber);
      return formattedNumber.toLowerCase().includes(normalizedSearch) || phoneNumber.toLowerCase().includes(normalizedSearch);
    });
  }, [registeredNumbers, search, formatNumber]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_springUi.DialogTitle, {
    className: "flex items-center justify-between px-4 py-3"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "typography-subtitleBold text-neutral-b0"
  }, (0, _i18n.t)('addConsentTitle')), /*#__PURE__*/_react["default"].createElement(_springUi.Button, {
    variant: "text",
    color: "neutral",
    size: "small",
    "data-sign": "addConsentNumberCloseButton",
    onClick: onClose
  }, (0, _i18n.t)('close'))), /*#__PURE__*/_react["default"].createElement(_springUi.Divider, {
    variant: "full"
  }), /*#__PURE__*/_react["default"].createElement(_springUi.DialogContent, {
    className: "flex flex-col gap-3 py-3",
    style: {
      maxHeight: '65vh'
    }
  }, /*#__PURE__*/_react["default"].createElement(_springUi.TextField, {
    clearBtn: true,
    type: "search",
    fullWidth: true,
    size: "medium",
    value: search,
    placeholder: (0, _i18n.t)('filterPhoneNumbers'),
    startAdornment: /*#__PURE__*/_react["default"].createElement(_springUi.Icon, {
      symbol: _springIcon.SearchMd,
      size: "small"
    }),
    inputProps: {
      'aria-label': (0, _i18n.t)('filterPhoneNumbers'),
      'data-sign': 'addConsentNumberSearchInput'
    },
    onChange: function onChange(event) {
      return setSearch(event.target.value);
    },
    onClear: function onClear() {
      return setSearch('');
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-h-[48vh] overflow-y-auto",
    "data-sign": "addConsentNumberOptions"
  }, filteredNumbers.length > 0 ? /*#__PURE__*/_react["default"].createElement(_springUi.List, null, filteredNumbers.map(function (phoneNumber) {
    return /*#__PURE__*/_react["default"].createElement(_springUi.ListItem, {
      divider: false,
      key: phoneNumber,
      clickable: true,
      selected: phoneNumber === defaultNumber,
      "data-sign": "addConsentNumberOption",
      onClick: function onClick() {
        return onSelect(phoneNumber);
      }
    }, formatNumber(phoneNumber));
  })) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "min-h-[80px] flex items-center justify-center typography-mainText text-neutral-b1",
    "data-sign": "addConsentNumberEmpty"
  }, (0, _i18n.t)('emptySearch')))));
};
//# sourceMappingURL=AddConsentNumberDrawer.js.map

"use strict";

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
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.for-each.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimezoneSelect = void 0;
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.find.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.array.sort.js");
require("core-js/modules/es.date.to-iso-string.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.map.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _springIcon = require("@ringcentral/spring-icon");
var _springUi = require("@ringcentral/spring-ui");
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireWildcard(require("react"));
var _StaticTimezoneService = require("../../services/StaticTimezoneService");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function isIOSBrowser() {
  var _nav$maxTouchPoints;
  if (typeof navigator === 'undefined') {
    return false;
  }
  var nav = navigator;
  var userAgent = nav.userAgent || '';
  var platform = nav.platform || '';
  return /iPad|iPhone|iPod/i.test(userAgent) || /iPad|iPhone|iPod/i.test(platform) || platform === 'MacIntel' && ((_nav$maxTouchPoints = nav.maxTouchPoints) !== null && _nav$maxTouchPoints !== void 0 ? _nav$maxTouchPoints : 0) > 1;
}
var SORTED_TIMEZONE_CACHE_LIMIT = 24;
var sortedTimezoneCache = new Map();
var getDefaultTimezoneDescription = function getDefaultTimezoneDescription(description) {
  return description;
};
var STANDARD_MENU_CLASS_NAME = 'min-w-[400px] max-h-[320px] overflow-y-auto overscroll-contain';
var MINI_MENU_CLASS_NAME = 'w-full min-w-0 max-w-full md:w-[360px] md:min-w-[360px] md:max-w-[360px] max-h-[320px] overflow-y-auto overscroll-contain';
// Spring UI 1.12 Popover sets content maxWidth to
// `availableWidth - (floating.offsetWidth - content.offsetWidth)`.
// `matchAnchorWidth` sizes the floating node first, so the first React 18
// layout can see content.offsetWidth === 0 and collapse the menu interior.
var MATCHED_ANCHOR_PAPER_CONTENT_CLASS_NAME = '!box-border !w-full !min-w-0 !max-w-full';
function isMobileOrTabletBrowser() {
  var _nav$userAgentData;
  if (typeof navigator === 'undefined') {
    return false;
  }
  var nav = navigator;
  var userAgent = nav.userAgent || '';
  var platform = nav.platform || '';
  return !!((_nav$userAgentData = nav.userAgentData) !== null && _nav$userAgentData !== void 0 && _nav$userAgentData.mobile) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet|Silk|Kindle|PlayBook|Windows Phone/i.test(userAgent) || platform === 'MacIntel' && nav.maxTouchPoints > 1;
}
function getTimezoneCacheKey(timezones, locale, referenceHour, getTimezoneDescription) {
  return [locale, referenceHour, timezones.map(function (timezone) {
    return [timezone.id, timezone.name, getTimezoneDescription(timezone.description)].join(':');
  }).join('|')].join('::');
}
var TimezoneSelect = exports.TimezoneSelect = function TimezoneSelect(_ref) {
  var currentTimezoneId = _ref.currentTimezoneId,
    onTimezoneChange = _ref.onTimezoneChange,
    timezones = _ref.timezones,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'xlarge' : _ref$size,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'outlined' : _ref$variant,
    _ref$showLabel = _ref.showLabel,
    showLabel = _ref$showLabel === void 0 ? true : _ref$showLabel,
    className = _ref.className,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? 'standard' : _ref$mode,
    _ref$locale = _ref.locale,
    locale = _ref$locale === void 0 ? 'en-US' : _ref$locale,
    label = _ref.label,
    _ref$getTimezoneDescr = _ref.getTimezoneDescription,
    getTimezoneDescription = _ref$getTimezoneDescr === void 0 ? getDefaultTimezoneDescription : _ref$getTimezoneDescr,
    menuClassName = _ref.menuClassName;
  var shouldPreventIOSMenuScrollJump = isIOSBrowser();
  var isMobileOrTablet = isMobileOrTabletBrowser();
  var sortedTimezones = (0, _react.useMemo)(function () {
    var referenceHour = new Date().toISOString().slice(0, 13);
    var referenceTime = "".concat(referenceHour, ":00:00.000Z");
    var cacheKey = getTimezoneCacheKey(timezones, locale, referenceHour, getTimezoneDescription);
    var cachedOptions = sortedTimezoneCache.get(cacheKey);
    if (cachedOptions) {
      return cachedOptions;
    }
    var sortableTimezones = timezones.map(function (tz, index) {
      var offsetMinutes = (0, _StaticTimezoneService.getTimezoneOffsetMinutes)(tz.name, referenceTime);
      return _objectSpread(_objectSpread({}, tz), {}, {
        index: index,
        offsetMinutes: offsetMinutes,
        offset: (0, _StaticTimezoneService.formatTimezoneOffsetMinutes)(offsetMinutes),
        text: getTimezoneDescription(tz.description || '')
      });
    });
    sortableTimezones.sort(function (left, right) {
      return left.offsetMinutes - right.offsetMinutes || left.index - right.index;
    });
    if (sortedTimezoneCache.size >= SORTED_TIMEZONE_CACHE_LIMIT) {
      sortedTimezoneCache.clear();
    }
    sortedTimezoneCache.set(cacheKey, sortableTimezones);
    return sortableTimezones;
  }, [getTimezoneDescription, locale, timezones]);
  var currentTimezoneDisplayInfo = sortedTimezones.find(function (timezone) {
    return timezone.id === currentTimezoneId;
  });
  var currentTimezoneDisplayText = currentTimezoneDisplayInfo ? "(".concat(currentTimezoneDisplayInfo.offset, ") ").concat(currentTimezoneDisplayInfo.text) : '';
  var timezoneOptions = (0, _react.useMemo)(function () {
    return sortedTimezones.map(function (timezone) {
      return /*#__PURE__*/_react["default"].createElement(_springUi.Option, {
        key: timezone.id,
        value: timezone.id
      }, /*#__PURE__*/_react["default"].createElement(_springUi.MenuItemText, null, "(".concat(timezone.offset, ") ").concat(timezone.text)));
    });
  }, [sortedTimezones]);
  return /*#__PURE__*/_react["default"].createElement(_springUi.Select, {
    label: showLabel ? label : undefined,
    variant: variant,
    size: size,
    selectMode: "single",
    className: (0, _clsx["default"])('min-w-0', className || 'w-full'),
    value: currentTimezoneId,
    classes: _objectSpread({
      menu: (0, _clsx["default"])(mode === 'mini' ? MINI_MENU_CLASS_NAME : STANDARD_MENU_CLASS_NAME, menuClassName)
    }, mode === 'mini' ? {
      selector: '!min-w-0',
      value: '!min-w-0'
    } : {}),
    MenuProps: _objectSpread(_objectSpread({}, shouldPreventIOSMenuScrollJump ? {
      autoFocus: false,
      disableAutoFocus: true,
      disableEnforceFocus: true,
      disableRestoreFocus: true
    } : {}), {}, {
      placement: 'bottom-start',
      PopperProps: {
        matchAnchorWidth: !isMobileOrTablet
      }
    }, !isMobileOrTablet ? {
      PopperPaperProps: {
        classes: {
          content: MATCHED_ANCHOR_PAPER_CONTENT_CLASS_NAME
        }
      }
    } : {}),
    renderValue: function renderValue() {
      if (mode === 'mini') {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "flex w-full min-w-0 flex-row items-center gap-1 overflow-hidden"
        }, /*#__PURE__*/_react["default"].createElement(_springUi.Icon, {
          symbol: _springIcon.GlobeMd,
          size: "small"
        }), /*#__PURE__*/_react["default"].createElement(_springUi.Text, {
          className: "min-w-0 truncate text-[13px] text-neutral-b1"
        }, currentTimezoneDisplayText));
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "flex flex-row items-center gap-1"
      }, /*#__PURE__*/_react["default"].createElement(_springUi.Icon, {
        symbol: _springIcon.GlobeMd
      }), /*#__PURE__*/_react["default"].createElement(_springUi.Text, null, currentTimezoneDisplayText));
    },
    onChange: function onChange(e) {
      onTimezoneChange === null || onTimezoneChange === void 0 ? void 0 : onTimezoneChange(e.target.value);
    },
    "data-sign": "timezone-select"
  }, timezoneOptions);
};
//# sourceMappingURL=TimezoneSelect.js.map

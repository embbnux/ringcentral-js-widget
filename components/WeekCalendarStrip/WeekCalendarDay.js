"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WeekCalendarDay = void 0;
require("core-js/modules/es.array.find.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.to-string.js");
var _hooks = require("@ringcentral-integration/micro-core/src/app/hooks");
var _StaticTimezoneService = require("@ringcentral-integration/micro-core/src/app/services/StaticTimezoneService");
var _clsx = _interopRequireDefault(require("clsx"));
var _dayjs = _interopRequireDefault(require("dayjs"));
var _timezone = _interopRequireDefault(require("dayjs/plugin/timezone"));
var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));
var _react = _interopRequireWildcard(require("react"));
var _i18n = _interopRequireDefault(require("./i18n"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dayjs["default"].extend(_utc["default"]);
_dayjs["default"].extend(_timezone["default"]);
var WeekCalendarDay = exports.WeekCalendarDay = function WeekCalendarDay(_ref) {
  var dayDate = _ref.dayDate,
    _ref$selected = _ref.selected,
    selected = _ref$selected === void 0 ? false : _ref$selected,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    onClick = _ref.onClick,
    timezoneId = _ref.timezoneId;
  var _useLocale = (0, _hooks.useLocale)(_i18n["default"]),
    currentLocale = _useLocale.currentLocale;
  var date = (0, _react.useMemo)(function () {
    var d = (0, _dayjs["default"])(dayDate);
    return currentLocale ? d.locale(currentLocale) : d;
  }, [dayDate, currentLocale]);
  var dateText = (0, _react.useMemo)(function () {
    return date.format('D');
  }, [date]);
  var timezoneName = (0, _react.useMemo)(function () {
    var timezoneInfo = _StaticTimezoneService.STATIC_TIMEZONE_LIST.find(function (tz) {
      return tz.id === timezoneId;
    });
    return (timezoneInfo === null || timezoneInfo === void 0 ? void 0 : timezoneInfo.name) || 'GMT';
  }, [timezoneId]);
  var isToday = (0, _react.useMemo)(function () {
    var todayInTimezone = _dayjs["default"].tz((0, _dayjs["default"])(), timezoneName).format('YYYY-MM-DD');
    return dayDate === todayInTimezone;
  }, [dayDate, timezoneName]);
  var todayNotSelected = isToday && !selected;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-1 flex items-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    role: "option",
    disabled: disabled,
    onClick: onClick,
    "data-sign": "date-button-".concat(dateText),
    "data-date": dayDate,
    "aria-selected": selected ? 'true' : 'false',
    className: (0, _clsx["default"])(
    // Base styles
    'relative flex h-10 w-full max-w-[48px] items-center justify-center rounded-[10px] transition-all',
    // Default(Enabled) state
    !disabled && !selected && 'cursor-pointer text-neutral-b0 hover:bg-neutral-b5',
    // Selected state
    selected && 'cursor-pointer bg-primary-b text-neutral-high-contrast-b0',
    // Disabled state
    disabled && 'cursor-default text-neutral-b3',
    // today(not selected) state
    todayNotSelected && 'border border-solid border-neutral-b2')
  }, dateText));
};
//# sourceMappingURL=WeekCalendarDay.js.map

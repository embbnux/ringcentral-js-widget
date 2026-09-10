"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-string.js");
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
exports.WeekCalendarStrip = void 0;
require("core-js/modules/es.array.find.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.to-string.js");
var _hooks = require("@ringcentral-integration/micro-core/src/app/hooks");
var _StaticTimezoneService = require("@ringcentral-integration/micro-core/src/app/services/StaticTimezoneService");
var _springIcon = require("@ringcentral/spring-icon");
var _springUi = require("@ringcentral/spring-ui");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _timezone = _interopRequireDefault(require("dayjs/plugin/timezone"));
var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));
var _react = _interopRequireWildcard(require("react"));
var _WeekCalendarDay = require("./WeekCalendarDay");
var _constants = require("./constants");
var _i18n = _interopRequireDefault(require("./i18n"));
var _utils = require("./utils");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
_dayjs["default"].extend(_utc["default"]);
_dayjs["default"].extend(_timezone["default"]);
var WEEK_DAY_LABELS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
var WeekCalendarStrip = exports.WeekCalendarStrip = function WeekCalendarStrip(_ref) {
  var selectedDate = _ref.selectedDate,
    onDateSelected = _ref.onDateSelected,
    availableDates = _ref.availableDates,
    onVisibleRangeChange = _ref.onVisibleRangeChange,
    onTodayNavigated = _ref.onTodayNavigated,
    timezoneId = _ref.timezoneId;
  var _useLocale = (0, _hooks.useLocale)(_i18n["default"]),
    t = _useLocale.t,
    currentLocale = _useLocale.currentLocale;
  var timezoneName = (0, _react.useMemo)(function () {
    var tz = _StaticTimezoneService.STATIC_TIMEZONE_LIST.find(function (item) {
      return item.id === timezoneId;
    });
    if ((tz === null || tz === void 0 ? void 0 : tz.name) === 'GMT') {
      return 'UTC';
    }
    return (tz === null || tz === void 0 ? void 0 : tz.name) || 'UTC';
  }, [timezoneId]);
  var parseCalendarDate = (0, _react.useCallback)(function (dateStr) {
    return (0, _dayjs["default"])(dateStr);
  }, []);
  var monthLabelFormatter = (0, _react.useMemo)(function () {
    return new Intl.DateTimeFormat(currentLocale, {
      year: 'numeric',
      month: 'long',
      timeZone: timezoneName
    });
  }, [currentLocale, timezoneName]);

  /**
   * Get current time in the specified timezone
   */
  var getNow = (0, _react.useCallback)(function () {
    return (0, _dayjs["default"])().tz(timezoneName).startOf('day');
  }, [timezoneName]);
  var getSundayOfWeek = (0, _react.useCallback)(function (date) {
    return date.startOf('day').subtract(date.day(), 'day').startOf('day');
  }, []);
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMonthlyView = _useState2[0],
    setIsMonthlyView = _useState2[1];

  // Single anchor date used by both week and month views
  var _useState3 = (0, _react.useState)(function () {
      var tz = _StaticTimezoneService.STATIC_TIMEZONE_LIST.find(function (item) {
        return item.id === timezoneId;
      });
      var initialTimezoneName = (tz === null || tz === void 0 ? void 0 : tz.name) === 'GMT' ? 'UTC' : (tz === null || tz === void 0 ? void 0 : tz.name) || 'UTC';
      var today = (0, _dayjs["default"])().tz(initialTimezoneName).format('YYYY-MM-DD');
      return selectedDate || today;
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    viewingDate = _useState4[0],
    setViewingDate = _useState4[1];
  var onVisibleRangeChangeRef = (0, _react.useRef)(onVisibleRangeChange);
  (0, _react.useEffect)(function () {
    onVisibleRangeChangeRef.current = onVisibleRangeChange;
  }, [onVisibleRangeChange]);
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    pendingSelectedDate = _useState6[0],
    setPendingSelectedDate = _useState6[1];
  var shouldDisableDateInternal = (0, _react.useCallback)(function (dayDate) {
    return !availableDates.has(dayDate);
  }, [availableDates]);
  var viewingDayjs = (0, _react.useMemo)(function () {
    return parseCalendarDate(viewingDate);
  }, [parseCalendarDate, viewingDate]);
  var weekStart = (0, _react.useMemo)(function () {
    return getSundayOfWeek(viewingDayjs);
  }, [getSundayOfWeek, viewingDayjs]);
  var weekEnd = (0, _react.useMemo)(function () {
    return weekStart.add(_constants.WEEK_DAYS - 1, 'day');
  }, [weekStart]);
  var monthStart = (0, _react.useMemo)(function () {
    return viewingDayjs.startOf('month');
  }, [viewingDayjs]);
  var monthEnd = (0, _react.useMemo)(function () {
    return viewingDayjs.endOf('month');
  }, [viewingDayjs]);

  // Month grid spans full Sun..Sat rows; leading/trailing cells fall in the
  // previous/next month and are still real, potentially-clickable dates.
  var monthGrid = (0, _react.useMemo)(function () {
    var leadingBlanks = monthStart.day();
    var daysInMonth = monthEnd.date();
    var totalCells = Math.ceil((leadingBlanks + daysInMonth) / _constants.WEEK_DAYS) * _constants.WEEK_DAYS;
    var gridStart = monthStart.subtract(leadingBlanks, 'day');
    var gridEnd = gridStart.add(totalCells - 1, 'day');
    var rows = [];
    for (var r = 0; r < totalCells; r += _constants.WEEK_DAYS) {
      var row = [];
      for (var c = 0; c < _constants.WEEK_DAYS; c += 1) {
        row.push(gridStart.add(r + c, 'day').format('YYYY-MM-DD'));
      }
      rows.push(row);
    }
    return {
      gridStart: gridStart,
      gridEnd: gridEnd,
      rows: rows
    };
  }, [monthStart, monthEnd]);

  // All day cells rendered in the strip (week row, or full month grid incl. spillover).
  // Used for selection highlight, optimistic pick, and isDateInVisibleRange.
  var visibleStart = (0, _react.useMemo)(function () {
    return isMonthlyView ? monthGrid.gridStart : weekStart;
  }, [isMonthlyView, monthGrid.gridStart, weekStart]);
  var visibleEnd = (0, _react.useMemo)(function () {
    return isMonthlyView ? monthGrid.gridEnd : weekEnd;
  }, [isMonthlyView, monthGrid.gridEnd, weekEnd]);

  // Range passed to onVisibleRangeChange: same as the strip row in week view;
  // in month view, the natural calendar month only (excludes grid spillover days).
  var notifyParentRangeStart = (0, _react.useMemo)(function () {
    return isMonthlyView ? monthStart : weekStart;
  }, [isMonthlyView, monthStart, weekStart]);
  var notifyParentRangeEnd = (0, _react.useMemo)(function () {
    return isMonthlyView ? monthEnd : weekEnd;
  }, [isMonthlyView, monthEnd, weekEnd]);
  var weekDays = (0, _react.useMemo)(function () {
    var days = [];
    for (var i = 0; i < _constants.WEEK_DAYS; i += 1) {
      days.push(weekStart.add(i, 'day').format('YYYY-MM-DD'));
    }
    return days;
  }, [weekStart]);
  var isDateInRange = (0, _react.useCallback)(function (dateStr, rangeStart, rangeEnd) {
    var date = parseCalendarDate(dateStr);
    return (date.isAfter(rangeStart, 'day') || date.isSame(rangeStart, 'day')) && (date.isBefore(rangeEnd, 'day') || date.isSame(rangeEnd, 'day'));
  }, [parseCalendarDate]);
  var isDateInVisibleRange = (0, _react.useCallback)(function (dateStr) {
    return isDateInRange(dateStr, visibleStart, visibleEnd);
  }, [isDateInRange, visibleStart, visibleEnd]);
  var findFirstAvailableDateInRange = (0, _react.useCallback)(function (rangeStart, rangeEnd) {
    var total = rangeEnd.diff(rangeStart, 'day') + 1;
    for (var i = 0; i < total; i += 1) {
      var dateStr = rangeStart.add(i, 'day').format('YYYY-MM-DD');
      if (availableDates.has(dateStr)) {
        return dateStr;
      }
    }
    return null;
  }, [availableDates]);
  var displaySelectedDate = (0, _react.useMemo)(function () {
    if (pendingSelectedDate && isDateInVisibleRange(pendingSelectedDate)) {
      return pendingSelectedDate;
    }
    if (selectedDate && isDateInVisibleRange(selectedDate)) {
      return selectedDate;
    }
    return null;
  }, [isDateInVisibleRange, pendingSelectedDate, selectedDate]);
  var goToToday = (0, _react.useCallback)(function () {
    var today = getNow();
    var todayDate = today.format('YYYY-MM-DD');
    var rangeStart = isMonthlyView ? today.startOf('month') : getSundayOfWeek(today);
    var rangeEnd = isMonthlyView ? today.endOf('month') : rangeStart.add(_constants.WEEK_DAYS - 1, 'day');
    if ((0, _utils.shouldSkipTodayNavigation)({
      selectedDate: selectedDate,
      rangeStartDate: rangeStart.format('YYYY-MM-DD'),
      rangeEndDate: rangeEnd.format('YYYY-MM-DD')
    }) && (!availableDates.has(todayDate) || selectedDate === todayDate)) {
      return;
    }
    var nextSelectedDate = availableDates.has(todayDate) ? todayDate : findFirstAvailableDateInRange(rangeStart, rangeEnd);
    setPendingSelectedDate(nextSelectedDate);
    if (nextSelectedDate) {
      onDateSelected(nextSelectedDate);
    }
    setViewingDate(todayDate);
    onTodayNavigated === null || onTodayNavigated === void 0 ? void 0 : onTodayNavigated(todayDate);
  }, [availableDates, findFirstAvailableDateInRange, getNow, getSundayOfWeek, isMonthlyView, onDateSelected, onTodayNavigated, selectedDate]);
  var canGoPrevious = (0, _react.useMemo)(function () {
    var today = (0, _dayjs["default"])(getNow().format('YYYY-MM-DD'));
    if (isMonthlyView) {
      // Allow if any day of the previous month is still within
      // [today, today + MAX_DAYS] (i.e. previous month end >= today)
      var prevMonthEnd = viewingDayjs.subtract(1, 'month').endOf('month');
      return !prevMonthEnd.isBefore(today, 'day');
    }
    return weekStart.isAfter(today, 'day');
  }, [getNow, isMonthlyView, viewingDayjs, weekStart]);
  var canGoNext = (0, _react.useMemo)(function () {
    var maxDate = (0, _dayjs["default"])(getNow().format('YYYY-MM-DD')).add(_constants.MAX_DAYS, 'day');
    if (isMonthlyView) {
      // Allow if any day of the next month is still within
      // [today, today + MAX_DAYS] (i.e. next month start <= maxDate)
      var nextMonthStart = viewingDayjs.add(1, 'month').startOf('month');
      return !nextMonthStart.isAfter(maxDate, 'day');
    }
    return weekEnd.isBefore(maxDate, 'day');
  }, [getNow, isMonthlyView, viewingDayjs, weekEnd]);
  var goToPrevious = (0, _react.useCallback)(function () {
    if (!canGoPrevious) return;
    var next = isMonthlyView ? viewingDayjs.subtract(1, 'month') : viewingDayjs.subtract(1, 'week');
    var rangeStart = isMonthlyView ? next.startOf('month') : getSundayOfWeek(next);
    var rangeEnd = isMonthlyView ? next.endOf('month') : rangeStart.add(_constants.WEEK_DAYS - 1, 'day');
    var nextSelectedDate = findFirstAvailableDateInRange(rangeStart, rangeEnd);
    setPendingSelectedDate(nextSelectedDate);
    if (nextSelectedDate) {
      onDateSelected(nextSelectedDate);
    }
    setViewingDate(next.format('YYYY-MM-DD'));
  }, [canGoPrevious, findFirstAvailableDateInRange, getSundayOfWeek, isMonthlyView, onDateSelected, viewingDayjs]);
  var goToNext = (0, _react.useCallback)(function () {
    if (!canGoNext) return;
    var next = isMonthlyView ? viewingDayjs.add(1, 'month') : viewingDayjs.add(1, 'week');
    var rangeStart = isMonthlyView ? next.startOf('month') : getSundayOfWeek(next);
    var rangeEnd = isMonthlyView ? next.endOf('month') : rangeStart.add(_constants.WEEK_DAYS - 1, 'day');
    var nextSelectedDate = findFirstAvailableDateInRange(rangeStart, rangeEnd);
    setPendingSelectedDate(nextSelectedDate);
    if (nextSelectedDate) {
      onDateSelected(nextSelectedDate);
    }
    setViewingDate(next.format('YYYY-MM-DD'));
  }, [canGoNext, findFirstAvailableDateInRange, getSundayOfWeek, isMonthlyView, onDateSelected, viewingDayjs]);

  // Sync viewingDate when selectedDate moves to a different "logical" view:
  // - month view: selectedDate's month differs from viewingDate's month
  //   (so clicking a spillover cell from an adjacent month flips the grid)
  // - week view: selectedDate falls outside the visible week
  (0, _react.useEffect)(function () {
    if (!selectedDate) return;
    var selected = parseCalendarDate(selectedDate);
    setViewingDate(function (prev) {
      var prevDate = parseCalendarDate(prev);
      if (isMonthlyView) {
        return selected.isSame(prevDate, 'month') ? prev : selectedDate;
      }
      var start = getSundayOfWeek(prevDate);
      var end = start.add(_constants.WEEK_DAYS - 1, 'day');
      var inRange = (selected.isAfter(start, 'day') || selected.isSame(start, 'day')) && (selected.isBefore(end, 'day') || selected.isSame(end, 'day'));
      return inRange ? prev : selectedDate;
    });
  }, [getSundayOfWeek, isMonthlyView, parseCalendarDate, selectedDate]);
  (0, _react.useEffect)(function () {
    if (!pendingSelectedDate) {
      return;
    }
    if (selectedDate === pendingSelectedDate || !isDateInVisibleRange(pendingSelectedDate)) {
      setPendingSelectedDate(null);
    }
  }, [isDateInVisibleRange, pendingSelectedDate, selectedDate]);
  (0, _react.useEffect)(function () {
    onVisibleRangeChangeRef.current(notifyParentRangeStart, notifyParentRangeEnd, isMonthlyView);
  }, [viewingDate, isMonthlyView, notifyParentRangeStart, notifyParentRangeEnd]);
  var handleDateClick = (0, _react.useCallback)(function (dayDate) {
    setPendingSelectedDate(dayDate);
    return onDateSelected(dayDate, {
      source: 'dateButton'
    });
  }, [onDateSelected]);

  // monthLabel priority: visible selected date first, then view-specific anchor.
  // - selectedDate present in the current view: that date's month
  // - week view: Saturday of the visible week
  // - month view: viewingDate's month
  var monthLabelDate = (0, _react.useMemo)(function () {
    if (displaySelectedDate) {
      return parseCalendarDate(displaySelectedDate);
    }
    return isMonthlyView ? viewingDayjs : weekStart.add(_constants.WEEK_DAYS - 1, 'day');
  }, [displaySelectedDate, isMonthlyView, parseCalendarDate, viewingDayjs, weekStart]);
  var monthLabel = (0, _react.useMemo)(function () {
    var parsed = _dayjs["default"].tz(monthLabelDate.format('YYYY-MM-DD'), timezoneName);
    return parsed.isValid() ? monthLabelFormatter.format(parsed.toDate()) : null;
  }, [monthLabelDate, monthLabelFormatter, timezoneName]);
  var toggleViewMode = (0, _react.useCallback)(function () {
    setIsMonthlyView(function (prev) {
      var next = !prev;
      if (next) {
        // Expanding to month view: align viewingDate with the month label so
        // the rendered month matches what the header is showing.
        setViewingDate(monthLabelDate.format('YYYY-MM-DD'));
      } else {
        // Collapsing to week view: keep the selected date only when it belongs
        // to the current natural month; otherwise anchor the week at day 1.
        var selectedDateInViewingMonth = selectedDate && parseCalendarDate(selectedDate).isSame(viewingDayjs, 'month');
        setViewingDate(selectedDateInViewingMonth ? selectedDate : monthStart.format('YYYY-MM-DD'));
      }
      return next;
    });
  }, [monthLabelDate, monthStart, parseCalendarDate, selectedDate, viewingDayjs]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex w-full flex-shrink-0 flex-col",
    "data-sign": "calendar-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex h-10 -my-2 mb-2 items-center justify-between"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "typography-subtitleBold text-neutral-b0",
    "data-sign": "month-label"
  }, monthLabel), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/_react["default"].createElement(_springUi.Button, {
    variant: "outlined",
    color: "secondary",
    size: "small",
    title: t('today'),
    className: "!typography-labelSemiBold !normal-case !rounded-full",
    "data-sign": "today-button",
    onClick: goToToday
  }, t('today')), /*#__PURE__*/_react["default"].createElement(_springUi.IconButton, {
    onClick: goToPrevious,
    disabled: !canGoPrevious,
    "data-sign": "previous-button",
    symbol: _springIcon.CaretLeftMd,
    size: "large",
    variant: "icon",
    color: "neutral",
    iconSize: "medium",
    className: "rounded-full hover:bg-neutral-b5 transition-colors text-neutral-b0"
  }), /*#__PURE__*/_react["default"].createElement(_springUi.IconButton, {
    onClick: goToNext,
    disabled: !canGoNext,
    "data-sign": "next-button",
    symbol: _springIcon.CaretRightMd,
    size: "large",
    variant: "icon",
    color: "neutral",
    iconSize: "medium",
    className: "rounded-full hover:bg-neutral-b5 transition-colors text-neutral-b0"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full flex-shrink-0 overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-2"
  }, WEEK_DAY_LABELS.map(function (label, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: "week-day-label-".concat(index),
      className: "flex h-5 min-w-0 flex-1 items-center justify-center text-neutral-b2"
    }, t(label));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col gap-2 pt-2"
  }, isMonthlyView ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, monthGrid.rows.map(function (row, rowIndex) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: "month-row-".concat(rowIndex),
      className: "flex gap-2 h-10"
    }, row.map(function (dayDate) {
      var isSelected = dayDate === displaySelectedDate;
      var isDisabled = shouldDisableDateInternal(dayDate);
      return /*#__PURE__*/_react["default"].createElement(_WeekCalendarDay.WeekCalendarDay, {
        key: dayDate,
        dayDate: dayDate,
        timezoneId: timezoneId,
        selected: isSelected,
        disabled: isDisabled,
        onClick: function onClick() {
          return handleDateClick(dayDate);
        }
      });
    }));
  })) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-2 h-10"
  }, weekDays.map(function (dayDate) {
    var isSelected = dayDate === displaySelectedDate;
    var isDisabled = shouldDisableDateInternal(dayDate);
    return /*#__PURE__*/_react["default"].createElement(_WeekCalendarDay.WeekCalendarDay, {
      key: dayDate,
      dayDate: dayDate,
      timezoneId: timezoneId,
      selected: isSelected,
      disabled: isDisabled,
      onClick: function onClick() {
        return handleDateClick(dayDate);
      }
    });
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-3 flex justify-center py-0"
  }, /*#__PURE__*/_react["default"].createElement(_springUi.IconButton, {
    onClick: toggleViewMode,
    symbol: isMonthlyView ? _springIcon.CaretUpMd : _springIcon.CaretDownMd,
    variant: "icon",
    color: "secondary",
    size: "large",
    "data-sign": "month-toggle",
    className: "rounded-full transition-colors hover:bg-neutral-b5"
  }))));
};
//# sourceMappingURL=WeekCalendarStrip.js.map

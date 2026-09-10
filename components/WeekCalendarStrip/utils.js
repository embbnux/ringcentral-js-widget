"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldSkipTodayNavigation = shouldSkipTodayNavigation;
var _dayjs = _interopRequireDefault(require("dayjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function shouldSkipTodayNavigation(_ref) {
  var selectedDate = _ref.selectedDate,
    rangeStartDate = _ref.rangeStartDate,
    rangeEndDate = _ref.rangeEndDate;
  if (!selectedDate) {
    return false;
  }
  var selected = (0, _dayjs["default"])(selectedDate);
  var rangeStart = (0, _dayjs["default"])(rangeStartDate);
  var rangeEnd = (0, _dayjs["default"])(rangeEndDate);
  return selected.isValid() && rangeStart.isValid() && rangeEnd.isValid() && (selected.isSame(rangeStart, 'day') || selected.isAfter(rangeStart, 'day')) && (selected.isSame(rangeEnd, 'day') || selected.isBefore(rangeEnd, 'day'));
}
//# sourceMappingURL=utils.js.map

"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UTC_TIMEZONE_NAME = void 0;
exports.convertUtcTimeToTimezone = convertUtcTimeToTimezone;
exports.formatTimezoneGmtOffset = formatTimezoneGmtOffset;
exports.formatTimezoneOffsetMinutes = formatTimezoneOffsetMinutes;
exports.getTimezoneOffsetMinutes = getTimezoneOffsetMinutes;
exports.normalizeTimezoneName = normalizeTimezoneName;
exports.resolveTimezoneName = resolveTimezoneName;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.date.to-iso-string.js");
require("core-js/modules/es.string.pad-start.js");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _timezone = _interopRequireDefault(require("dayjs/plugin/timezone"));
var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dayjs["default"].extend(_utc["default"]);
_dayjs["default"].extend(_timezone["default"]);
var UTC_TIMEZONE_NAME = exports.UTC_TIMEZONE_NAME = 'UTC';
function normalizeTimezoneName(timezoneName) {
  if (!timezoneName || timezoneName === 'GMT' || timezoneName === 'UTC') {
    return UTC_TIMEZONE_NAME;
  }
  return timezoneName;
}
function resolveTimezoneName(timezoneName) {
  var normalizedTimezoneName = normalizeTimezoneName(timezoneName);
  if (normalizedTimezoneName === UTC_TIMEZONE_NAME) {
    return UTC_TIMEZONE_NAME;
  }
  try {
    new Intl.DateTimeFormat('en-US', {
      timeZone: normalizedTimezoneName
    });
    return normalizedTimezoneName;
  } catch (_unused) {
    return UTC_TIMEZONE_NAME;
  }
}
function convertUtcTimeToTimezone(timeString, timezoneName) {
  return _dayjs["default"].utc(timeString).tz(resolveTimezoneName(timezoneName));
}
function formatTimezoneOffsetMinutes(offsetMinutes) {
  var offsetSign = offsetMinutes >= 0 ? '+' : '-';
  var absoluteOffsetMinutes = Math.abs(offsetMinutes);
  var offsetHours = Math.floor(absoluteOffsetMinutes / 60);
  var remainingMinutes = absoluteOffsetMinutes % 60;
  return "GMT".concat(offsetSign).concat(String(offsetHours).padStart(2, '0'), ":").concat(String(remainingMinutes).padStart(2, '0'));
}
function getTimezoneOffsetMinutes(timezoneName) {
  var referenceTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _dayjs["default"])().toISOString();
  return convertUtcTimeToTimezone(referenceTime, timezoneName).utcOffset();
}
function formatTimezoneGmtOffset(timezoneName) {
  var referenceTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _dayjs["default"])().toISOString();
  return formatTimezoneOffsetMinutes(getTimezoneOffsetMinutes(timezoneName, referenceTime));
}
//# sourceMappingURL=timezone.js.map

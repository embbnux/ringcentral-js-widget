"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDstEndDate = getDstEndDate;
exports.getDstStartDate = getDstStartDate;
exports.isInDstPeriod = isInDstPeriod;
exports.parseDstDescription = parseDstDescription;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.parse-int.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.replace.js");
var _nextCore = require("@ringcentral-integration/next-core");
var _dayjs = _interopRequireDefault(require("dayjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Parse a DST time description, e.g., "2nd Sunday of March".
 * @param description Time description in format like "2nd Sunday of March", "last Sunday of October", etc.
 * @param year Year, defaults to current year
 * @returns dayjs object in UTC representing the start of the day (00:00:00)
 */
function parseDstDescription(description) {
  var year = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _dayjs["default"])().year();
  if (!description) {
    return (0, _dayjs["default"])().utc().year(year).startOf('year');
  }
  var parts = description.toLowerCase().split(' ');
  if (parts.length < 4) {
    throw new Error("Invalid DST description format: ".concat(description));
  }
  var ordinal = parts[0];
  var dayOfWeek = parts[1];
  var month = parts[3];
  var monthMap = {
    january: 0,
    jan: 0,
    february: 1,
    feb: 1,
    march: 2,
    mar: 2,
    april: 3,
    apr: 3,
    may: 4,
    june: 5,
    jun: 5,
    july: 6,
    jul: 6,
    august: 7,
    aug: 7,
    september: 8,
    sep: 8,
    sept: 8,
    october: 9,
    oct: 9,
    november: 10,
    nov: 10,
    december: 11,
    dec: 11
  };
  var dayMap = {
    sunday: 0,
    sun: 0,
    monday: 1,
    mon: 1,
    tuesday: 2,
    tue: 2,
    tues: 2,
    wednesday: 3,
    wed: 3,
    thursday: 4,
    thu: 4,
    thurs: 4,
    friday: 5,
    fri: 5,
    saturday: 6,
    sat: 6
  };
  var monthIndex = monthMap[month];
  var dayIndex = dayMap[dayOfWeek];
  if (monthIndex === undefined) {
    throw new Error("Invalid month: ".concat(month));
  }
  if (dayIndex === undefined) {
    throw new Error("Invalid day of week: ".concat(dayOfWeek));
  }
  var firstDayOfMonth = (0, _dayjs["default"])().utc().year(year).month(monthIndex).startOf('month');
  var targetDate = firstDayOfMonth;
  if (ordinal === 'last') {
    var lastDayOfMonth = firstDayOfMonth.endOf('month');
    var currentDate = lastDayOfMonth;
    while (currentDate.day() !== dayIndex) {
      currentDate = currentDate.subtract(1, 'day');
    }
    targetDate = currentDate;
  } else {
    var ordinalNumber = parseInt(ordinal.replace(/\D/g, ''));
    if (isNaN(ordinalNumber) || ordinalNumber < 1) {
      throw new Error("Invalid ordinal: ".concat(ordinal));
    }
    var _currentDate = firstDayOfMonth;
    var count = 0;
    while (count < ordinalNumber) {
      if (_currentDate.day() === dayIndex) {
        count++;
        if (count === ordinalNumber) {
          targetDate = _currentDate;
          break;
        }
      }
      _currentDate = _currentDate.add(1, 'day');
      if (_currentDate.month() !== monthIndex) {
        throw new Error("Cannot find ".concat(ordinal, " ").concat(dayOfWeek, " in ").concat(month, " ").concat(year));
      }
    }
  }
  return targetDate;
}
function getDstStartDate(dstStart) {
  var year = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _dayjs["default"])().year();
  return parseDstDescription(dstStart, year);
}
function getDstEndDate(dstEnd) {
  var year = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _dayjs["default"])().year();
  if (dstEnd.includes('(next year)')) {
    var cleanDescription = dstEnd.replace(' (next year)', '');
    return parseDstDescription(cleanDescription, year + 1);
  }
  return parseDstDescription(dstEnd, year);
}
function isInDstPeriod(date, dstStart, dstEnd) {
  var checkDate = (0, _dayjs["default"])(date);
  var year = checkDate.year();
  try {
    var isCrossYear = dstEnd.includes('(next year)');
    var checkMs = checkDate.valueOf();
    if (isCrossYear) {
      var startDatePrev = getDstStartDate(dstStart, year - 1);
      var _endDateCurrent = getDstEndDate(dstEnd, year - 1);
      var _startDateCurrent = getDstStartDate(dstStart, year);
      var endDateNext = getDstEndDate(dstEnd, year);
      if (checkMs >= startDatePrev.valueOf() && checkMs < _endDateCurrent.valueOf()) {
        return true;
      }
      if (checkMs >= _startDateCurrent.valueOf() && checkMs < endDateNext.valueOf()) {
        return true;
      }
      return false;
    }
    var startDateCurrent = getDstStartDate(dstStart, year);
    var endDateCurrent = getDstEndDate(dstEnd, year);
    return checkMs >= startDateCurrent.valueOf() && checkMs < endDateCurrent.valueOf();
  } catch (error) {
    _nextCore.logger.error('Failed to calculate DST period', error);
    return false;
  }
}
//# sourceMappingURL=utils.js.map

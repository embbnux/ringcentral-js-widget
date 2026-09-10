"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeSlotsGrid = void 0;
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.includes.js");
var _springUi = require("@ringcentral/spring-ui");
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function TimeSlotsGridComponent(_ref, ref) {
  var displayTimeSlots = _ref.displayTimeSlots,
    selectedOriginalTimes = _ref.selectedOriginalTimes,
    selectTime = _ref.selectTime,
    isSlotDisabled = _ref.isSlotDisabled;
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: ref,
    className: "box-border grid grid-cols-3 sm:grid-cols-4 gap-3",
    "data-sign": "time-slots-grid"
  }, displayTimeSlots.map(function (_ref2, index) {
    var timeSlot = _ref2.timeSlot,
      displayTime = _ref2.displayTime;
    var isTimeSelected = selectedOriginalTimes.includes(timeSlot.originalTime);
    var disabled = Boolean(isSlotDisabled === null || isSlotDisabled === void 0 ? void 0 : isSlotDisabled(timeSlot));
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: timeSlot.originalTime,
      className: "w-full",
      "data-selected-time-slot": isTimeSelected ? 'true' : undefined
    }, /*#__PURE__*/_react["default"].createElement(_springUi.Button, {
      variant: isTimeSelected ? 'contained' : 'outlined',
      color: isTimeSelected ? 'primary' : 'secondary',
      size: "small",
      "aria-pressed": isTimeSelected,
      disabled: disabled,
      className: (0, _clsx["default"])('h-8 w-full !min-w-0 !rounded-[10px] !typography-mainText transition-colors text-[13px]', isTimeSelected ? '!border-primary-b !bg-primary-b !text-neutral-high-contrast-b0' : (0, _clsx["default"])('!border-neutral-b0-t20 !bg-neutral-base !text-neutral-b0', disabled ? 'cursor-not-allowed !bg-neutral-b5 !text-neutral-b0-t50 hover:!bg-neutral-b5' : 'hover:!bg-neutral-b5')),
      onClick: function onClick() {
        return selectTime(timeSlot);
      },
      "data-sign": "time-slot-".concat(index)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _clsx["default"])('w-full text-center text-[13px]', isTimeSelected ? 'text-neutral-high-contrast-b0' : 'text-neutral-b0')
    }, displayTime)));
  }));
}
var TimeSlotsGrid = exports.TimeSlotsGrid = /*#__PURE__*/_react["default"].forwardRef(TimeSlotsGridComponent);
TimeSlotsGrid.displayName = 'TimeSlotsGrid';
//# sourceMappingURL=TimeSlotsGrid.js.map

"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterPopperMainView = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.includes.js");
var _hooks = require("@ringcentral-integration/micro-core/src/app/hooks");
var _springIcon = require("@ringcentral/spring-icon");
var _springUi = require("@ringcentral/spring-ui");
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireDefault(require("react"));
var _i18n = _interopRequireDefault(require("../../../ConversationsViewSpring/ConversationsPage/i18n"));
var _i18n2 = _interopRequireDefault(require("../i18n"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var FilterPopperMainView = exports.FilterPopperMainView = function FilterPopperMainView(_ref) {
  var isActive = _ref.isActive,
    filter = _ref.filter,
    tempStatusFilter = _ref.tempStatusFilter,
    onSharedSearchFormUpdate = _ref.onSharedSearchFormUpdate,
    onClose = _ref.onClose,
    onStatusFilterChange = _ref.onStatusFilterChange,
    getAssignmentText = _ref.getAssignmentText,
    getSharedWithMeText = _ref.getSharedWithMeText,
    onAssignmentClick = _ref.onAssignmentClick,
    onSharedWithMeClick = _ref.onSharedWithMeClick,
    mainFilterList = _ref.mainFilterList,
    statusFilterList = _ref.statusFilterList;
  var _useLocale = (0, _hooks.useLocale)(_i18n2["default"], _i18n["default"]),
    t = _useLocale.t;
  return /*#__PURE__*/_react["default"].createElement("div", {
    "data-sign": "mainFilterListContainer",
    "data-active": isActive,
    className: (0, _clsx["default"])('transition-all duration-300 ease-in-out', isActive ? 'translate-x-0 opacity-100 relative z-10 pointer-events-auto' : '-translate-x-full opacity-0 absolute inset-0 pointer-events-none z-0 invisible')
  }, /*#__PURE__*/_react["default"].createElement(_springUi.MenuList, null, mainFilterList.map(function (_ref2) {
    var key = _ref2.key,
      label = _ref2.label,
      dataSign = _ref2.dataSign,
      updates = _ref2.updates;
    return /*#__PURE__*/_react["default"].createElement(_springUi.MenuItem, {
      key: key,
      highlighted: filter === key,
      onClick: function onClick(e) {
        e.stopPropagation();
        onSharedSearchFormUpdate === null || onSharedSearchFormUpdate === void 0 ? void 0 : onSharedSearchFormUpdate(updates);
        onClose === null || onClose === void 0 ? void 0 : onClose();
      },
      "data-sign": dataSign
    }, /*#__PURE__*/_react["default"].createElement(_springUi.MenuItemText, null, label));
  }), /*#__PURE__*/_react["default"].createElement(_springUi.MenuDivider, null), /*#__PURE__*/_react["default"].createElement(_springUi.MenuItem, {
    disabled: true
  }, /*#__PURE__*/_react["default"].createElement(_springUi.MenuItemText, {
    className: "typography-descriptor text-neutral-b2"
  }, t('status'))), statusFilterList.map(function (_ref3) {
    var key = _ref3.key,
      label = _ref3.label,
      dataSign = _ref3.dataSign;
    var isSelected = tempStatusFilter.includes(key);
    var isDisabled = tempStatusFilter.length === 1 && isSelected;
    var handleClick = function handleClick(e) {
      e.stopPropagation();
      if (isDisabled) return;
      var newStatusFilter = isSelected ? tempStatusFilter.filter(function (status) {
        return status !== key;
      }) : [].concat(_toConsumableArray(tempStatusFilter), [key]);
      onStatusFilterChange(newStatusFilter);
      onSharedSearchFormUpdate === null || onSharedSearchFormUpdate === void 0 ? void 0 : onSharedSearchFormUpdate({
        statusFilter: newStatusFilter
      });
    };
    return /*#__PURE__*/_react["default"].createElement(_springUi.MenuItem, {
      key: key,
      onClick: handleClick,
      autoClose: false,
      "data-sign": dataSign
    }, /*#__PURE__*/_react["default"].createElement(_springUi.MenuItemText, {
      "data-checked": isSelected,
      info: isSelected ? /*#__PURE__*/_react["default"].createElement(_springUi.Icon, {
        symbol: _springIcon.CheckMd,
        className: "text-neutral-b0",
        size: "small"
      }) : undefined
    }, label, /*#__PURE__*/_react["default"].createElement("input", {
      type: "checkbox",
      "aria-label": label,
      className: "hidden",
      checked: isSelected,
      onChange: function onChange(e) {
        e.stopPropagation();
        e.preventDefault();
        handleClick(e);
      }
    })));
  }), /*#__PURE__*/_react["default"].createElement(_springUi.MenuDivider, null), /*#__PURE__*/_react["default"].createElement(_springUi.MenuItem, {
    onClick: onAssignmentClick,
    "data-sign": "assignmentMenuItem",
    autoClose: false
  }, /*#__PURE__*/_react["default"].createElement(_springUi.MenuItemText, {
    info: /*#__PURE__*/_react["default"].createElement(_springUi.Icon, {
      symbol: _springIcon.CaretRightMd,
      className: "text-neutral-b0",
      size: "small"
    })
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "typography-descriptor text-neutral-b2"
  }, t('assignment')), /*#__PURE__*/_react["default"].createElement("span", null, getAssignmentText))), /*#__PURE__*/_react["default"].createElement(_springUi.MenuItem, {
    onClick: onSharedWithMeClick,
    "data-sign": "sharedWithMeMenuItem",
    autoClose: false
  }, /*#__PURE__*/_react["default"].createElement(_springUi.MenuItemText, {
    info: /*#__PURE__*/_react["default"].createElement(_springUi.Icon, {
      symbol: _springIcon.CaretRightMd,
      className: "text-neutral-b0",
      size: "small"
    })
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "typography-descriptor text-neutral-b2"
  }, t('sharedWithMe')), /*#__PURE__*/_react["default"].createElement("span", null, getSharedWithMeText)))));
};
//# sourceMappingURL=FilterPopperMainView.js.map

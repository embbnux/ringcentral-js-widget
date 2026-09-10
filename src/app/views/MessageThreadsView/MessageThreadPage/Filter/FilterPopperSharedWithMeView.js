"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterPopperSharedWithMeView = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.trim.js");
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
var footerClassName = 'px-3 pt-2 border-t border-neutral-b4 flex items-center justify-end gap-3';
var FilterPopperSharedWithMeView = exports.FilterPopperSharedWithMeView = function FilterPopperSharedWithMeView(_ref) {
  var isActive = _ref.isActive,
    searchQuery = _ref.searchQuery,
    onSearchQueryChange = _ref.onSearchQueryChange,
    filteredCallQueues = _ref.filteredCallQueues,
    tempSelectedCallQueues = _ref.tempSelectedCallQueues,
    isShowAllCallQueuesSelected = _ref.isShowAllCallQueuesSelected,
    isShowAllCallQueuesIndeterminate = _ref.isShowAllCallQueuesIndeterminate,
    onShowAllCallQueuesChange = _ref.onShowAllCallQueuesChange,
    onCallQueuesChange = _ref.onCallQueuesChange,
    onBack = _ref.onBack,
    onDone = _ref.onDone;
  var _useLocale = (0, _hooks.useLocale)(_i18n2["default"], _i18n["default"]),
    t = _useLocale.t;
  var handleShowAllClick = function handleShowAllClick(e) {
    e.stopPropagation();
    onShowAllCallQueuesChange(!isShowAllCallQueuesSelected);
  };
  var handleQueueClick = function handleQueueClick(queue) {
    return function (e) {
      e.stopPropagation();
      var isSelected = tempSelectedCallQueues.includes(queue.id);
      var newSelected = isSelected ? tempSelectedCallQueues.filter(function (id) {
        return id !== queue.id;
      }) : [].concat(_toConsumableArray(tempSelectedCallQueues), [queue.id]);
      onCallQueuesChange(newSelected);
    };
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    "data-sign": "sharedWithMeFilterListContainer",
    "data-active": isActive,
    className: (0, _clsx["default"])('transition-all duration-300 ease-in-out', isActive ? 'translate-x-0 opacity-100 relative z-10 pointer-events-auto' : '-translate-x-full opacity-0 absolute inset-0 pointer-events-none z-0 invisible')
  }, /*#__PURE__*/_react["default"].createElement(_springUi.MenuHeader, {
    start: /*#__PURE__*/_react["default"].createElement(_springUi.IconButton, {
      color: "secondary",
      variant: "icon",
      size: "small",
      symbol: _springIcon.CaretLeftMd,
      onClick: function onClick(e) {
        e.stopPropagation();
        onBack();
      },
      "data-sign": "sharedWithMeMenuBack"
    })
  }, t('sharedWithMe')), /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-4 py-2"
  }, /*#__PURE__*/_react["default"].createElement(_springUi.TextField, {
    placeholder: t('search'),
    startAdornment: /*#__PURE__*/_react["default"].createElement(_springUi.Icon, {
      symbol: _springIcon.SearchMd,
      size: "small"
    }),
    fullWidth: true,
    size: "medium",
    value: searchQuery,
    onChange: function onChange(e) {
      e.stopPropagation();
      onSearchQueryChange(e.target.value);
    },
    inputProps: {
      'data-sign': 'sharedWithMeSearch'
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  })), /*#__PURE__*/_react["default"].createElement(_springUi.MenuList
  // eslint-disable-next-line jsx-a11y/no-autofocus
  , {
    autoFocus: false,
    className: "max-h-[200px] overflow-y-auto"
  }, searchQuery.trim().length === 0 ? /*#__PURE__*/_react["default"].createElement(_springUi.MenuItem, {
    tabIndex: 0,
    onClick: handleShowAllClick
    // eslint-disable-next-line jsx-a11y/no-autofocus
    ,
    autoFocus: false,
    autoClose: false,
    "data-sign": "sharedWithMeShowAll"
  }, /*#__PURE__*/_react["default"].createElement(_springUi.MenuItemText, {
    className: "flex-1"
  }, t('selectAll')), /*#__PURE__*/_react["default"].createElement(_springUi.Checkbox, {
    inputProps: {
      tabIndex: -1,
      'aria-label': t('selectAll')
    },
    checked: isShowAllCallQueuesSelected,
    indeterminate: isShowAllCallQueuesIndeterminate,
    onChange: handleShowAllClick
  })) : null, /*#__PURE__*/_react["default"].createElement(_springUi.MenuDivider, null), searchQuery.trim().length > 0 && filteredCallQueues.length === 0 ? /*#__PURE__*/_react["default"].createElement(_springUi.MenuItem, {
    disabled: true
  }, /*#__PURE__*/_react["default"].createElement(_springUi.MenuItemText, {
    className: "typography-descriptor text-neutral-b2 text-center mb-2"
  }, t('noSearchResults'))) : null, filteredCallQueues.map(function (queue) {
    var isSelected = tempSelectedCallQueues.includes(queue.id);
    var displayName = queue.site ? "".concat(queue.name, " | ").concat(queue.site.name) : queue.name;
    return /*#__PURE__*/_react["default"].createElement(_springUi.MenuItem, {
      key: queue.id
      // eslint-disable-next-line jsx-a11y/no-autofocus
      ,
      autoFocus: false,
      onClick: handleQueueClick(queue),
      autoClose: false,
      "data-sign": "sharedWithMeQueueItem"
    }, /*#__PURE__*/_react["default"].createElement(_springUi.MenuItemText, {
      className: "flex-1"
    }, displayName), /*#__PURE__*/_react["default"].createElement(_springUi.Checkbox, {
      inputProps: {
        tabIndex: -1,
        'aria-label': displayName
      },
      checked: isSelected,
      onChange: handleQueueClick(queue)
    }));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: footerClassName
  }, /*#__PURE__*/_react["default"].createElement(_springUi.Button, {
    variant: "text",
    size: "medium",
    fullWidth: true,
    onClick: function onClick(e) {
      e.stopPropagation();
      onBack();
    },
    "data-sign": "sharedWithMeMenuBackToMain"
  }, t('cancel')), /*#__PURE__*/_react["default"].createElement(_springUi.Button, {
    variant: "contained",
    size: "medium",
    fullWidth: true,
    disabled: tempSelectedCallQueues.length === 0,
    onClick: function onClick(e) {
      e.stopPropagation();
      onDone();
    },
    "data-sign": "sharedWithMeMenuDone"
  }, t('done'))));
};
//# sourceMappingURL=FilterPopperSharedWithMeView.js.map

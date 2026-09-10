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
exports.QueueConversationsFilter = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.every.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.some.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.trim.js");
var _hooks = require("@ringcentral-integration/micro-core/src/app/hooks");
var _springIcon = require("@ringcentral/spring-icon");
var _springUi = require("@ringcentral/spring-ui");
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireWildcard(require("react"));
var _components = require("../../../components");
var _i18n = _interopRequireDefault(require("../ConversationsPage/i18n"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var filterButtonClassName = 'sui-filter-button sui-filter-button-root max-w-[120px]';
var footerClassName = 'px-3 pt-2 border-t border-neutral-b4 flex items-center justify-end gap-3';
var QUEUE_SEARCH_MINIMUM_COUNT = 7;
var QueueConversationsFilter = exports.QueueConversationsFilter = function QueueConversationsFilter(_ref) {
  var searchInput = _ref.searchInput,
    filter = _ref.filter,
    selectedCallQueueIds = _ref.selectedCallQueueIds,
    callQueues = _ref.callQueues,
    _onSearchInputChange = _ref.onSearchInputChange,
    onFilterChange = _ref.onFilterChange,
    onCallQueuesChange = _ref.onCallQueuesChange,
    onReset = _ref.onReset;
  var _useLocale = (0, _hooks.useLocale)(_i18n["default"]),
    t = _useLocale.t;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    searchExpanded = _useState2[0],
    setSearchExpanded = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    menuOpen = _useState4[0],
    setMenuOpen = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    queueSearchInput = _useState6[0],
    setQueueSearchInput = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    tempSelectedCallQueueIds = _useState8[0],
    setTempSelectedCallQueueIds = _useState8[1];
  var menuButtonRef = (0, _react.useRef)(null);
  var allCallQueueIds = (0, _react.useMemo)(function () {
    return callQueues.map(function (queue) {
      return queue.id;
    });
  }, [callQueues]);
  var filteredCallQueues = (0, _react.useMemo)(function () {
    var normalizedSearch = queueSearchInput.trim().toLowerCase();
    if (!normalizedSearch) {
      return callQueues;
    }
    return callQueues.filter(function (queue) {
      var _queue$site;
      return [queue.name, queue.extensionNumber, (_queue$site = queue.site) === null || _queue$site === void 0 ? void 0 : _queue$site.name].filter(Boolean).some(function (value) {
        return value.toLowerCase().includes(normalizedSearch);
      });
    });
  }, [callQueues, queueSearchInput]);
  var isAdvancedFilterActive = filter === 'Draft' || filter === 'Failed';
  var isUnreadFilterActive = filter === 'Unread';
  var hasQueueFilter = selectedCallQueueIds.length > 0 && selectedCallQueueIds.length < callQueues.length;
  var activeFilterCount = (isAdvancedFilterActive ? 1 : 0) + (hasQueueFilter ? selectedCallQueueIds.length : 0);
  var hasActiveFilters = activeFilterCount > 0;
  var openMenu = function openMenu() {
    setTempSelectedCallQueueIds(selectedCallQueueIds.length > 0 ? selectedCallQueueIds : allCallQueueIds);
    setMenuOpen(true);
  };
  var closeMenu = function closeMenu() {
    setMenuOpen(false);
    setQueueSearchInput('');
  };
  var handleMenuClose = function handleMenuClose() {
    closeMenu();
    setTempSelectedCallQueueIds(selectedCallQueueIds.length > 0 ? selectedCallQueueIds : allCallQueueIds);
  };
  var handleQueueClick = function handleQueueClick(queueId) {
    setTempSelectedCallQueueIds(function (current) {
      return current.includes(queueId) ? current.filter(function (id) {
        return id !== queueId;
      }) : [].concat(_toConsumableArray(current), [queueId]);
    });
  };
  var handleShowAllCallQueuesChange = function handleShowAllCallQueuesChange(checked) {
    setTempSelectedCallQueueIds(checked ? allCallQueueIds : []);
  };
  var isShowAllCallQueuesSelected = callQueues.length > 0 && tempSelectedCallQueueIds.length === callQueues.length && callQueues.every(function (queue) {
    return tempSelectedCallQueueIds.includes(queue.id);
  });
  var isShowAllCallQueuesIndeterminate = tempSelectedCallQueueIds.length > 0 && tempSelectedCallQueueIds.length < callQueues.length;
  var handleDone = function handleDone() {
    onCallQueuesChange(isShowAllCallQueuesSelected ? [] : tempSelectedCallQueueIds);
    closeMenu();
  };
  var allText = t('all');
  var allButton = /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: (0, _clsx["default"])(filterButtonClassName, !isUnreadFilterActive && 'sui-selected'),
    "aria-current": !isUnreadFilterActive,
    title: allText,
    "data-sign": "queueFilterAll",
    onClick: onReset
  }, allText);
  var unreadText = t('unread');
  var unreadButton = /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: (0, _clsx["default"])(filterButtonClassName, isUnreadFilterActive && 'sui-selected'),
    "aria-current": isUnreadFilterActive,
    title: unreadText,
    "data-sign": "queueFilterUnread",
    onClick: function onClick() {
      return onFilterChange('Unread');
    }
  }, unreadText);
  var selectedFilterButton = isUnreadFilterActive ? unreadButton : allButton;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex px-3 py-1 items-center gap-2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-auto"
  }, /*#__PURE__*/_react["default"].createElement(_components.SearchInputToggle, {
    searchInput: searchInput,
    onSearchInputChange: function onSearchInputChange(event) {
      return _onSearchInputChange(event.currentTarget.value);
    },
    placeholder: t('searchText'),
    "data-sign": "callQueueSearch",
    expanded: searchExpanded,
    onExpandedChange: setSearchExpanded
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-none flex items-center gap-1",
    "data-sign": "callQueueFilter"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "sui-single-filter sui-single-filter-root"
  }, searchExpanded ? selectedFilterButton : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, allButton, unreadButton)), callQueues.length > 1 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative flex items-center"
  }, /*#__PURE__*/_react["default"].createElement(_springUi.IconButton, {
    ref: menuButtonRef,
    variant: "icon",
    size: "small",
    className: "flex items-center flex-row",
    color: hasActiveFilters ? 'primary' : 'secondary',
    onClick: openMenu,
    "aria-expanded": menuOpen,
    "aria-label": t('byCallQueue'),
    "data-sign": "callQueueFilterMore",
    "data-highlighted": hasActiveFilters
  }, /*#__PURE__*/_react["default"].createElement(_springUi.Icon, {
    symbol: _springIcon.FilterMd,
    size: "small"
  }), hasActiveFilters && /*#__PURE__*/_react["default"].createElement("span", {
    className: "typography-descriptor"
  }, "(", activeFilterCount, ")")))), /*#__PURE__*/_react["default"].createElement(_springUi.Menu, {
    anchorEl: menuButtonRef.current,
    open: menuOpen,
    onClose: handleMenuClose,
    placement: "bottom-end",
    "data-sign": "callQueueFilterMenu",
    className: "overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative w-[268px]"
  }, /*#__PURE__*/_react["default"].createElement(_springUi.MenuItem, {
    disabled: true
  }, /*#__PURE__*/_react["default"].createElement(_springUi.MenuItemText, {
    className: "typography-descriptor text-neutral-b2"
  }, t('byCallQueue'))), callQueues.length >= QUEUE_SEARCH_MINIMUM_COUNT ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-4 py-2"
  }, /*#__PURE__*/_react["default"].createElement(_springUi.TextField, {
    fullWidth: true,
    size: "medium",
    value: queueSearchInput,
    placeholder: t('searchCallQueues'),
    inputProps: {
      'data-sign': 'callQueueFilterSearch'
    },
    onClick: function onClick(event) {
      return event.stopPropagation();
    },
    onChange: function onChange(event) {
      return setQueueSearchInput(event.target.value);
    }
  })) : null, /*#__PURE__*/_react["default"].createElement(_springUi.MenuList
  // eslint-disable-next-line jsx-a11y/no-autofocus
  , {
    autoFocus: false,
    className: "max-h-[200px] overflow-y-auto"
  }, !queueSearchInput.trim() ? /*#__PURE__*/_react["default"].createElement(_springUi.MenuItem, {
    autoClose: false,
    onClick: function onClick(event) {
      event.stopPropagation();
      handleShowAllCallQueuesChange(!isShowAllCallQueuesSelected);
    },
    "data-sign": "queueFilterAllCallQueues"
  }, /*#__PURE__*/_react["default"].createElement(_springUi.MenuItemText, {
    className: "flex-1"
  }, t('allCallQueues')), /*#__PURE__*/_react["default"].createElement(_springUi.Checkbox, {
    inputProps: {
      tabIndex: -1,
      'aria-label': t('allCallQueues')
    },
    checked: isShowAllCallQueuesSelected,
    indeterminate: isShowAllCallQueuesIndeterminate
  })) : null, /*#__PURE__*/_react["default"].createElement(_springUi.MenuDivider, null), queueSearchInput.trim() && filteredCallQueues.length === 0 ? /*#__PURE__*/_react["default"].createElement(_springUi.MenuItem, {
    disabled: true
  }, /*#__PURE__*/_react["default"].createElement(_springUi.MenuItemText, {
    className: "typography-descriptor text-neutral-b2 text-center mb-2"
  }, t('noSearchResults'))) : null, filteredCallQueues.map(function (queue) {
    var _queue$site2;
    var label = (_queue$site2 = queue.site) !== null && _queue$site2 !== void 0 && _queue$site2.name ? "".concat(queue.name, " | ").concat(queue.site.name) : queue.name;
    var isSelected = tempSelectedCallQueueIds.includes(queue.id);
    return /*#__PURE__*/_react["default"].createElement(_springUi.MenuItem, {
      key: queue.id,
      autoClose: false,
      onClick: function onClick(event) {
        event.stopPropagation();
        handleQueueClick(queue.id);
      },
      "data-sign": "queueFilterCallQueue-".concat(queue.id)
    }, /*#__PURE__*/_react["default"].createElement(_springUi.MenuItemText, {
      className: "flex-1",
      title: label
    }, label), /*#__PURE__*/_react["default"].createElement(_springUi.Checkbox, {
      inputProps: {
        tabIndex: -1,
        'aria-label': label
      },
      checked: isSelected
    }));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: footerClassName
  }, /*#__PURE__*/_react["default"].createElement(_springUi.Button, {
    variant: "text",
    size: "medium",
    fullWidth: true,
    onClick: handleMenuClose,
    "data-sign": "queueFilterCancel"
  }, t('cancel')), /*#__PURE__*/_react["default"].createElement(_springUi.Button, {
    variant: "contained",
    size: "medium",
    fullWidth: true,
    disabled: tempSelectedCallQueueIds.length === 0,
    onClick: handleDone,
    "data-sign": "queueFilterDone"
  }, t('done'))))));
};
//# sourceMappingURL=QueueConversationsFilter.js.map

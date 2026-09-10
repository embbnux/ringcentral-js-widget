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
exports.FilterPopper = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.every.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.find.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/web.dom-collections.for-each.js");
var _hooks = require("@ringcentral-integration/micro-core/src/app/hooks");
var _springUi = require("@ringcentral/spring-ui");
var _react = _interopRequireWildcard(require("react"));
var _i18n = _interopRequireDefault(require("../../../ConversationsViewSpring/ConversationsPage/i18n"));
var _constants = require("../../utils/constants");
var _i18n2 = _interopRequireDefault(require("../i18n"));
var _FilterPopperAssignmentView = require("./FilterPopperAssignmentView");
var _FilterPopperMainView = require("./FilterPopperMainView");
var _FilterPopperSharedWithMeView = require("./FilterPopperSharedWithMeView");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var FilterPopper = exports.FilterPopper = function FilterPopper(_ref) {
  var anchorEl = _ref.anchorEl,
    open = _ref.open,
    onClose = _ref.onClose,
    selectedAssignees = _ref.selectedAssignees,
    statusFilter = _ref.statusFilter,
    _ref$callQueues = _ref.callQueues,
    callQueues = _ref$callQueues === void 0 ? [] : _ref$callQueues,
    selectedCallQueues = _ref.selectedCallQueues,
    filter = _ref.filter,
    onSharedSearchFormUpdate = _ref.onSharedSearchFormUpdate;
  var _useLocale = (0, _hooks.useLocale)(_i18n2["default"], _i18n["default"]),
    t = _useLocale.t;
  var _useState = (0, _react.useState)('main'),
    _useState2 = _slicedToArray(_useState, 2),
    view = _useState2[0],
    setView = _useState2[1];
  var _useState3 = (0, _react.useState)(selectedAssignees),
    _useState4 = _slicedToArray(_useState3, 2),
    tempSelectedAssignees = _useState4[0],
    setTempSelectedAssignees = _useState4[1];
  var _useState5 = (0, _react.useState)(selectedCallQueues),
    _useState6 = _slicedToArray(_useState5, 2),
    tempSelectedCallQueues = _useState6[0],
    setTempSelectedCallQueues = _useState6[1];
  var _useState7 = (0, _react.useState)(statusFilter),
    _useState8 = _slicedToArray(_useState7, 2),
    tempStatusFilter = _useState8[0],
    setTempStatusFilter = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState0 = _slicedToArray(_useState9, 2),
    searchQuery = _useState0[0],
    setSearchQuery = _useState0[1];
  (0, _react.useEffect)(function () {
    if (open) {
      setView('main');
      setTempSelectedAssignees(selectedAssignees);
      setTempSelectedCallQueues(selectedCallQueues);
      setSearchQuery('');
    } else {
      setView('main');
    }
  }, [open, selectedAssignees, selectedCallQueues]);
  var isShowAllSelected = (0, _react.useMemo)(function () {
    return _constants.assignmentOptions.every(function (option) {
      return tempSelectedAssignees.includes(option.value);
    });
  }, [tempSelectedAssignees]);
  var isShowAllIndeterminate = (0, _react.useMemo)(function () {
    var selectedCount = _constants.assignmentOptions.filter(function (option) {
      return tempSelectedAssignees.includes(option.value);
    }).length;
    return selectedCount > 0 && selectedCount < _constants.assignmentOptions.length;
  }, [tempSelectedAssignees]);
  var handleAssignmentClick = function handleAssignmentClick(e) {
    e.stopPropagation();
    setView('assignment');
  };
  var handleBackToMainAssignment = function handleBackToMainAssignment() {
    setTempSelectedAssignees(selectedAssignees);
    setTempSelectedCallQueues(selectedCallQueues);
    setSearchQuery('');
    setView('main');
  };
  var handleShowAllChange = function handleShowAllChange(checked) {
    var allOptions = _constants.assignmentOptions.map(function (option) {
      return option.value;
    });
    setTempSelectedAssignees(checked ? allOptions : []);
  };
  var handleAssignmentDone = function handleAssignmentDone() {
    onSharedSearchFormUpdate === null || onSharedSearchFormUpdate === void 0 ? void 0 : onSharedSearchFormUpdate({
      selectedAssignees: tempSelectedAssignees
    });
    setView('main');
    onClose === null || onClose === void 0 ? void 0 : onClose();
  };
  var handleSharedWithMeClick = function handleSharedWithMeClick(e) {
    e.stopPropagation();
    setView('sharedWithMe');
  };
  var handleBackToMainFromShared = function handleBackToMainFromShared() {
    setTempSelectedCallQueues(selectedCallQueues);
    setSearchQuery('');
    setView('main');
  };
  var handleSharedWithMeDone = function handleSharedWithMeDone() {
    onSharedSearchFormUpdate === null || onSharedSearchFormUpdate === void 0 ? void 0 : onSharedSearchFormUpdate({
      selectedCallQueues: tempSelectedCallQueues
    });
    setView('main');
    onClose === null || onClose === void 0 ? void 0 : onClose();
  };
  var handleShowAllCallQueuesChange = function handleShowAllCallQueuesChange(checked) {
    if (checked) {
      var allQueueIds = callQueues.map(function (queue) {
        return queue.id;
      });
      setTempSelectedCallQueues(allQueueIds);
    } else {
      setTempSelectedCallQueues([]);
    }
  };
  var filteredCallQueues = (0, _react.useMemo)(function () {
    if (!searchQuery.trim()) {
      return callQueues;
    }
    var lowerQuery = searchQuery.toLowerCase();
    return callQueues.filter(function (queue) {
      var _queue$site;
      return queue.name.toLowerCase().includes(lowerQuery) || queue.extensionNumber.toLowerCase().includes(lowerQuery) || ((_queue$site = queue.site) === null || _queue$site === void 0 ? void 0 : _queue$site.name.toLowerCase().includes(lowerQuery));
    });
  }, [callQueues, searchQuery]);
  var isShowAllCallQueuesSelected = (0, _react.useMemo)(function () {
    if (callQueues.length === 0) return false;
    return tempSelectedCallQueues.length === callQueues.length && callQueues.every(function (queue) {
      return tempSelectedCallQueues.includes(queue.id);
    });
  }, [tempSelectedCallQueues, callQueues]);
  var isShowAllCallQueuesIndeterminate = (0, _react.useMemo)(function () {
    if (callQueues.length === 0) return false;
    var selectedCount = tempSelectedCallQueues.length;
    return selectedCount > 0 && selectedCount < callQueues.length;
  }, [tempSelectedCallQueues, callQueues]);
  var getSharedWithMeText = (0, _react.useMemo)(function () {
    if (tempSelectedCallQueues.length === 0 || callQueues.length > 0 && tempSelectedCallQueues.length === callQueues.length) {
      return t('all');
    }
    if (tempSelectedCallQueues.length === 1) {
      var queue = callQueues.find(function (q) {
        return q.id === tempSelectedCallQueues[0];
      });
      var displayName = queue ? queue.site ? "".concat(queue.name, " | ").concat(queue.site.name) : queue.name : '';
      return displayName;
    }
    var firstQueue = callQueues.find(function (q) {
      return q.id === tempSelectedCallQueues[0];
    });
    var firstDisplayName = firstQueue ? firstQueue.site ? "".concat(firstQueue.name, " | ").concat(firstQueue.site.name) : firstQueue.name : '';
    return "".concat(firstDisplayName, " + ").concat(tempSelectedCallQueues.length - 1, " ").concat(t('more'));
  }, [tempSelectedCallQueues, callQueues, t]);
  var getAssignmentText = (0, _react.useMemo)(function () {
    if (tempSelectedAssignees.length === 0 || _constants.assignmentOptions.every(function (option) {
      return tempSelectedAssignees.includes(option.value);
    })) {
      return t('all');
    }
    var filterLabels = [];
    var selectedOptions = _constants.assignmentOptions.filter(function (option) {
      return tempSelectedAssignees.includes(option.value);
    });
    selectedOptions.forEach(function (option) {
      filterLabels.push(t(option.labelKey));
    });
    if (filterLabels.length === 1) {
      return filterLabels[0];
    }
    return "".concat(filterLabels[0], " + ").concat(filterLabels.length - 1, " ").concat(t('more'));
  }, [tempSelectedAssignees, t]);
  var statusFilterList = (0, _react.useMemo)(function () {
    return [{
      key: 'Open',
      label: t('open'),
      dataSign: 'statusOpen'
    }, {
      key: 'Resolved',
      label: t('resolved'),
      dataSign: 'statusResolved'
    }];
  }, [t]);
  var mainFilterList = (0, _react.useMemo)(function () {
    return [{
      key: 'AssignedToMe',
      label: t('assignedToMe'),
      dataSign: 'filterAssignedToMe',
      updates: {
        filter: 'AssignedToMe',
        selectedAssignees: ['__CURRENT_USER__']
      }
    }, {
      key: 'Unread',
      label: t('unread'),
      dataSign: 'filterUnread',
      updates: {
        filter: 'Unread'
      }
    }];
  }, [t]);
  var handleMenuClose = function handleMenuClose() {
    setView('main');
    setTempSelectedAssignees(selectedAssignees);
    setTempSelectedCallQueues(selectedCallQueues);
    setTempStatusFilter(statusFilter);
    setSearchQuery('');
    onClose === null || onClose === void 0 ? void 0 : onClose();
  };
  return /*#__PURE__*/_react["default"].createElement(_springUi.Menu, {
    open: open,
    variant: "pointed",
    anchorEl: anchorEl,
    onClose: function onClose() {
      handleMenuClose();
    },
    placement: "bottom-end",
    onClick: function onClick(e) {
      // TODO: spring-ui issue, when click the backdrop will trigger the onClick event also UXSYS-3892
      e.stopPropagation();
    },
    "data-sign": "statusFilterMenu",
    className: "overflow-hidden"
    // eslint-disable-next-line jsx-a11y/no-autofocus
    ,
    autoFocus: false
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative w-[268px]"
  }, /*#__PURE__*/_react["default"].createElement(_FilterPopperMainView.FilterPopperMainView, {
    isActive: view === 'main',
    filter: filter,
    tempStatusFilter: tempStatusFilter,
    onSharedSearchFormUpdate: onSharedSearchFormUpdate,
    onClose: onClose,
    onStatusFilterChange: setTempStatusFilter,
    getAssignmentText: getAssignmentText,
    getSharedWithMeText: getSharedWithMeText,
    onAssignmentClick: handleAssignmentClick,
    onSharedWithMeClick: handleSharedWithMeClick,
    mainFilterList: mainFilterList,
    statusFilterList: statusFilterList
  }), /*#__PURE__*/_react["default"].createElement(_FilterPopperAssignmentView.FilterPopperAssignmentView, {
    isActive: view === 'assignment',
    tempSelectedAssignees: tempSelectedAssignees,
    assignmentOptions: _constants.assignmentOptions,
    isShowAllSelected: isShowAllSelected,
    isShowAllIndeterminate: isShowAllIndeterminate,
    onShowAllChange: handleShowAllChange,
    onAssigneesChange: setTempSelectedAssignees,
    onBack: handleBackToMainAssignment,
    onDone: handleAssignmentDone
  }), /*#__PURE__*/_react["default"].createElement(_FilterPopperSharedWithMeView.FilterPopperSharedWithMeView, {
    isActive: view === 'sharedWithMe',
    searchQuery: searchQuery,
    onSearchQueryChange: setSearchQuery,
    filteredCallQueues: filteredCallQueues,
    tempSelectedCallQueues: tempSelectedCallQueues,
    isShowAllCallQueuesSelected: isShowAllCallQueuesSelected,
    isShowAllCallQueuesIndeterminate: isShowAllCallQueuesIndeterminate,
    onShowAllCallQueuesChange: handleShowAllCallQueuesChange,
    onCallQueuesChange: setTempSelectedCallQueues,
    onBack: handleBackToMainFromShared,
    onDone: handleSharedWithMeDone
  })));
};
//# sourceMappingURL=FilterPopper.js.map

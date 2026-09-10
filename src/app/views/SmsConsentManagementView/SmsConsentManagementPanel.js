"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmsConsentManagementPanel = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.every.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.some.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.object.values.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.trim.js");
var _components = require("@ringcentral-integration/micro-core/src/app/components");
var _hooks = require("@ringcentral-integration/micro-core/src/app/hooks");
var _components2 = require("@ringcentral-integration/next-widgets/components");
var _springIcon = require("@ringcentral/spring-icon");
var _springUi = require("@ringcentral/spring-ui");
var _react = _interopRequireWildcard(require("react"));
var _services = require("../../services");
var _SmsConsentDialog = require("../SmsConsentDialogView/SmsConsentDialog.helper");
var _i18n = _interopRequireDefault(require("./i18n"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var SmsConsentManagementPanel = exports.SmsConsentManagementPanel = function SmsConsentManagementPanel(_ref) {
  var records = _ref.records,
    registeredNumbers = _ref.registeredNumbers,
    canAddConsent = _ref.canAddConsent,
    searchValue = _ref.searchValue,
    searchError = _ref.searchError,
    loading = _ref.loading,
    loadingMore = _ref.loadingMore,
    requestError = _ref.requestError,
    filterOpen = _ref.filterOpen,
    filters = _ref.filters,
    formatNumber = _ref.formatNumber,
    getContactName = _ref.getContactName,
    onBackClick = _ref.onBackClick,
    onAddConsent = _ref.onAddConsent,
    onSearchChange = _ref.onSearchChange,
    onFilterOpen = _ref.onFilterOpen,
    onFilterClose = _ref.onFilterClose,
    onFiltersApply = _ref.onFiltersApply,
    onEndReached = _ref.onEndReached;
  var _useLocale = (0, _hooks.useLocale)(_i18n["default"]),
    t = _useLocale.t;
  var hasFilters = filters.coverage.length > 0 || filters.campaignType.length > 0 || filters.from.length > 0;
  var hasQuery = searchValue.trim().length > 0 || hasFilters;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-full min-h-0 flex flex-col bg-neutral-f6"
  }, /*#__PURE__*/_react["default"].createElement(_components.AppHeaderNav, {
    override: true
  }, /*#__PURE__*/_react["default"].createElement(_components2.PageHeader, {
    onBackClick: onBackClick,
    endAdornment: canAddConsent && registeredNumbers.length > 0 ? /*#__PURE__*/_react["default"].createElement(_springUi.IconButton, {
      size: "medium",
      variant: "contained",
      color: "secondary",
      symbol: _springIcon.PlusMd,
      "data-sign": "addConsentButton",
      TooltipProps: {
        title: t('addConsent')
      },
      onClick: onAddConsent
    }) : null
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "typography-subtitle"
  }, t('title')))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-start gap-2 px-3 pb-2"
  }, /*#__PURE__*/_react["default"].createElement(_springUi.TextField, {
    fullWidth: true,
    value: searchValue,
    size: "medium",
    placeholder: t('search'),
    error: searchError,
    onChange: function onChange(event) {
      return onSearchChange(event.target.value);
    },
    inputProps: {
      'data-sign': 'consentSearchInput',
      'aria-label': t('search')
    },
    startAdornment: /*#__PURE__*/_react["default"].createElement(_springUi.Icon, {
      symbol: _springIcon.SearchMd,
      size: "small"
    })
  }), /*#__PURE__*/_react["default"].createElement(_springUi.IconButton, {
    size: "medium",
    variant: "outlined",
    color: hasFilters ? 'primary' : 'secondary',
    symbol: _springIcon.FilterMd,
    "data-sign": "consentFilterButton",
    TooltipProps: {
      title: t('filter')
    },
    onClick: onFilterOpen
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-3 pb-3 flex-1 min-h-0"
  }, /*#__PURE__*/_react["default"].createElement(_springUi.TableContainer, {
    border: "rounded",
    className: "h-full min-h-0 overflow-auto",
    onScroll: function onScroll(event) {
      var target = event.currentTarget;
      if (!loadingMore && target.scrollHeight - target.scrollTop - target.clientHeight < 80) {
        onEndReached();
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_springUi.Table, {
    stickyHeader: true
  }, /*#__PURE__*/_react["default"].createElement(_springUi.TableHead, null, /*#__PURE__*/_react["default"].createElement(_springUi.TableRow, null, /*#__PURE__*/_react["default"].createElement(_springUi.TableCell, {
    className: "typography-captionBold"
  }, t('externalNumber')), /*#__PURE__*/_react["default"].createElement(_springUi.TableCell, {
    className: "typography-captionBold"
  }, t('consentStatusAndCoverage')))), /*#__PURE__*/_react["default"].createElement(_springUi.TableBody, null, records.map(function (record, index) {
    var _record$from, _record$campaignType;
    var contactName = getContactName(record.to);
    return /*#__PURE__*/_react["default"].createElement(_springUi.TableRow, {
      key: "".concat(record.to, "-").concat((_record$from = record.from) !== null && _record$from !== void 0 ? _record$from : '', "-").concat(record.coverage, "-").concat((_record$campaignType = record.campaignType) !== null && _record$campaignType !== void 0 ? _record$campaignType : '', "-").concat(record.optStatus, "-").concat(index),
      className: "h-16",
      "data-sign": "consentRecordRow"
    }, /*#__PURE__*/_react["default"].createElement(_springUi.TableCell, {
      "data-sign": "externalNumber"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "inline-flex flex-col"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "whitespace-nowrap"
    }, formatNumber(record.to)), contactName ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "typography-caption text-neutral-b1"
    }, contactName) : null)), /*#__PURE__*/_react["default"].createElement(_springUi.TableCell, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "inline-flex flex-col items-start gap-1"
    }, /*#__PURE__*/_react["default"].createElement(ConsentStatusBadge, {
      status: record.optStatus
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "typography-caption text-neutral-b1",
      "data-sign": "coverage"
    }, (0, _SmsConsentDialog.getSmsConsentCoverageLabel)(record.coverage)))));
  }))), /*#__PURE__*/_react["default"].createElement(ConsentTableStatus, {
    requestError: requestError,
    loading: loading,
    loadingMore: loadingMore,
    recordCount: records.length,
    hasQuery: hasQuery
  }))), /*#__PURE__*/_react["default"].createElement(ConsentFilterDrawer, {
    open: filterOpen,
    filters: filters,
    registeredNumbers: registeredNumbers,
    formatNumber: formatNumber,
    onClose: onFilterClose,
    onApply: onFiltersApply
  }));
};
var TableState = function TableState(_ref2) {
  var children = _ref2.children,
    _ref2$dataSign = _ref2.dataSign,
    dataSign = _ref2$dataSign === void 0 ? 'consentManagementEmpty' : _ref2$dataSign;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "py-4 flex items-center justify-center typography-mainText text-neutral-b1",
    "data-sign": dataSign
  }, children);
};
var ConsentTableStatus = function ConsentTableStatus(_ref3) {
  var requestError = _ref3.requestError,
    loading = _ref3.loading,
    loadingMore = _ref3.loadingMore,
    recordCount = _ref3.recordCount,
    hasQuery = _ref3.hasQuery;
  var _useLocale2 = (0, _hooks.useLocale)(_i18n["default"]),
    t = _useLocale2.t;
  if (requestError) {
    return /*#__PURE__*/_react["default"].createElement(TableState, null, t('loadError'));
  }
  if (loading && recordCount === 0) {
    return /*#__PURE__*/_react["default"].createElement(TableState, {
      dataSign: "loadingConsentRecords"
    }, /*#__PURE__*/_react["default"].createElement(_springUi.CircularProgressIndicator, {
      size: "large"
    }));
  }
  if (recordCount === 0) {
    return /*#__PURE__*/_react["default"].createElement(TableState, null, hasQuery ? t('emptySearch') : t('emptyList'));
  }
  if (loadingMore) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "py-3 flex justify-center",
      "data-sign": "loadingMoreConsentRecords"
    }, /*#__PURE__*/_react["default"].createElement(_springUi.CircularProgressIndicator, {
      size: "small"
    }));
  }
  return null;
};
var ConsentStatusBadge = function ConsentStatusBadge(_ref4) {
  var status = _ref4.status;
  var hasOptedIn = status === _services.SMSOptStatus.OptIn;
  var _useLocale3 = (0, _hooks.useLocale)(_i18n["default"]),
    t = _useLocale3.t;
  return /*#__PURE__*/_react["default"].createElement(_springUi.Badge, {
    count: t(hasOptedIn ? 'optIn' : 'optOut'),
    color: hasOptedIn ? 'success' : 'danger',
    variant: "contained",
    size: "medium",
    classes: {
      content: 'whitespace-nowrap typography-descriptorMiniSemiBold px-3'
    }
  });
};
var ConsentFilterDrawer = function ConsentFilterDrawer(_ref5) {
  var open = _ref5.open,
    filters = _ref5.filters,
    registeredNumbers = _ref5.registeredNumbers,
    formatNumber = _ref5.formatNumber,
    onClose = _ref5.onClose,
    onApply = _ref5.onApply;
  var _useLocale4 = (0, _hooks.useLocale)(_i18n["default"]),
    t = _useLocale4.t;
  var _useState = (0, _react.useState)(filters),
    _useState2 = _slicedToArray(_useState, 2),
    draft = _useState2[0],
    setDraft = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    registeredNumberSearch = _useState4[0],
    setRegisteredNumberSearch = _useState4[1];
  var filteredRegisteredNumbers = (0, _react.useMemo)(function () {
    return registeredNumbers.filter(function (phoneNumber) {
      var normalizedSearch = registeredNumberSearch.trim().toLowerCase();
      var formattedNumber = formatNumber(phoneNumber);
      return !normalizedSearch || formattedNumber.toLowerCase().includes(normalizedSearch) || phoneNumber.toLowerCase().includes(normalizedSearch);
    });
  }, [registeredNumbers, registeredNumberSearch, formatNumber]);
  var allRegisteredNumbersSelected = registeredNumbers.length > 0 && registeredNumbers.every(function (phoneNumber) {
    return draft.from.includes(phoneNumber);
  });
  var someRegisteredNumbersSelected = !allRegisteredNumbersSelected && registeredNumbers.some(function (phoneNumber) {
    return draft.from.includes(phoneNumber);
  });
  var FULL_CAMPAIGN_TYPES = Object.values(_services.SmsCampaignType);
  (0, _react.useEffect)(function () {
    if (open) {
      setDraft(filters);
      setRegisteredNumberSearch('');
    }
  }, [filters, open]);
  var toggle = function toggle(values, value) {
    return values.includes(value) ? values.filter(function (item) {
      return item !== value;
    }) : [].concat(_toConsumableArray(values), [value]);
  };
  var reset = function reset() {
    setDraft({
      coverage: [],
      campaignType: [],
      from: []
    });
    setRegisteredNumberSearch('');
  };
  return (
    /*#__PURE__*/
    // @ts-ignore
    _react["default"].createElement(_springUi.Drawer, {
      open: open,
      anchor: "bottom",
      onClose: onClose,
      header: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "w-full flex items-center justify-between p-4"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "typography-subtitleBold"
      }, t('filters')), /*#__PURE__*/_react["default"].createElement(_springUi.Button, {
        variant: "text",
        color: "neutral",
        size: "small",
        onClick: reset
      }, t('reset'))), /*#__PURE__*/_react["default"].createElement(_springUi.Divider, {
        variant: "full"
      })),
      footer: /*#__PURE__*/_react["default"].createElement("div", {
        className: "grid grid-cols-2 gap-3 p-3"
      }, /*#__PURE__*/_react["default"].createElement(_springUi.Button, {
        fullWidth: true,
        variant: "outlined",
        onClick: onClose
      }, t('cancel')), /*#__PURE__*/_react["default"].createElement(_springUi.Button, {
        fullWidth: true,
        onClick: function onClick() {
          return onApply(draft);
        }
      }, t('apply')))
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "px-4 py-3"
    }, /*#__PURE__*/_react["default"].createElement(FilterGroup, {
      title: t('coverage')
    }, /*#__PURE__*/_react["default"].createElement(FilterOption, {
      label: t('company'),
      checked: draft.coverage.includes(_services.SmsConsentCoverage.Account),
      onChange: function onChange() {
        return setDraft(_objectSpread(_objectSpread({}, draft), {}, {
          coverage: toggle(draft.coverage, _services.SmsConsentCoverage.Account)
        }));
      }
    }), /*#__PURE__*/_react["default"].createElement(FilterOption, {
      label: t('registrationType'),
      checked: draft.campaignType.length === FULL_CAMPAIGN_TYPES.length,
      indeterminate: draft.campaignType.length > 0 && draft.campaignType.length < FULL_CAMPAIGN_TYPES.length,
      onChange: function onChange() {
        return setDraft(_objectSpread(_objectSpread({}, draft), {}, {
          campaignType: draft.campaignType.length === FULL_CAMPAIGN_TYPES.length ? [] : FULL_CAMPAIGN_TYPES
        }));
      }
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "pl-6 flex flex-col gap-4"
    }, FULL_CAMPAIGN_TYPES.map(function (campaignType) {
      return /*#__PURE__*/_react["default"].createElement(FilterOption, {
        key: campaignType,
        label: t(campaignType.toLowerCase()),
        checked: draft.campaignType.includes(campaignType),
        onChange: function onChange() {
          return setDraft(_objectSpread(_objectSpread({}, draft), {}, {
            campaignType: toggle(draft.campaignType, campaignType)
          }));
        }
      });
    })), registeredNumbers.length > 1 ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex flex-col gap-2"
    }, /*#__PURE__*/_react["default"].createElement(FilterOption, {
      label: t('smsRegisteredNumber'),
      checked: allRegisteredNumbersSelected,
      indeterminate: someRegisteredNumbersSelected,
      onChange: function onChange() {
        return setDraft(_objectSpread(_objectSpread({}, draft), {}, {
          from: allRegisteredNumbersSelected ? [] : _toConsumableArray(registeredNumbers)
        }));
      }
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "pl-6 flex flex-col gap-2"
    }, /*#__PURE__*/_react["default"].createElement(_springUi.TextField, {
      clearBtn: true,
      type: "search",
      size: "medium",
      fullWidth: true,
      value: registeredNumberSearch,
      placeholder: t('filterPhoneNumbers'),
      startAdornment: /*#__PURE__*/_react["default"].createElement(_springUi.Icon, {
        symbol: _springIcon.SearchMd,
        size: "small"
      }),
      inputProps: {
        'aria-label': t('filterPhoneNumbers'),
        'data-sign': 'registeredNumberSearchInput'
      },
      onChange: function onChange(event) {
        return setRegisteredNumberSearch(event.target.value);
      },
      onClear: function onClear() {
        return setRegisteredNumberSearch('');
      }
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex flex-col gap-4",
      "data-sign": "registeredNumberFilterOptions"
    }, filteredRegisteredNumbers.length > 0 ? filteredRegisteredNumbers.map(function (phoneNumber) {
      return /*#__PURE__*/_react["default"].createElement(FilterOption, {
        key: phoneNumber,
        label: formatNumber(phoneNumber),
        checked: draft.from.includes(phoneNumber),
        onChange: function onChange() {
          return setDraft(_objectSpread(_objectSpread({}, draft), {}, {
            from: toggle(draft.from, phoneNumber)
          }));
        }
      });
    }) : t('emptySearch')))) : null)))
  );
};
var FilterGroup = function FilterGroup(_ref6) {
  var title = _ref6.title,
    children = _ref6.children;
  return /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "typography-mainTextBold text-neutral-b1 uppercase mb-4"
  }, title), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col gap-4"
  }, children));
};
var FilterOption = function FilterOption(_ref7) {
  var label = _ref7.label,
    checked = _ref7.checked,
    indeterminate = _ref7.indeterminate,
    onChange = _ref7.onChange;
  return /*#__PURE__*/_react["default"].createElement(_springUi.FormLabel, {
    label: label
  }, /*#__PURE__*/_react["default"].createElement(_springUi.Checkbox, {
    checked: checked,
    indeterminate: indeterminate,
    onChange: onChange
  }));
};
//# sourceMappingURL=SmsConsentManagementPanel.js.map

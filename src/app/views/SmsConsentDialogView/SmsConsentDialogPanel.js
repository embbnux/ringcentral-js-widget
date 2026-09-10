"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmsConsentDialogPanel = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.string.trim.js");
var _services = require("@ringcentral-integration/micro-auth/src/app/services");
var _views = require("@ringcentral-integration/micro-core/src/app/views");
var _phoneNumber = require("@ringcentral-integration/phone-number");
var _react = _interopRequireWildcard(require("react"));
var _reactUse = require("react-use");
var _services2 = require("../../services");
var _AddConsentPanel = require("./AddConsentPanel");
var _SmsConsentDialog = require("./SmsConsentDialog.helper");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var SmsConsentDialogPanel = exports.SmsConsentDialogPanel = function SmsConsentDialogPanel(_ref) {
  var _numbers$to, _recordScope$campaign;
  var canAddConsent = _ref.canAddConsent,
    userNotePrefix = _ref.userNotePrefix,
    formatNumber = _ref.formatNumber,
    normalizeNumber = _ref.normalizeNumber,
    saveConsentRecord = _ref.saveConsentRecord,
    onSaveSuccess = _ref.onSaveSuccess;
  var _useModalItemView = (0, _views.useModalItemView)(),
    props = _useModalItemView.props,
    action = _useModalItemView.action;
  var mounted = (0, _reactUse.usePromise)();
  var payload = props.payload;
  var configuration = payload.configuration,
    consentEntry = payload.consentEntry,
    numbers = payload.numbers,
    _payload$editableExte = payload.editableExternalNumber,
    editableExternalNumber = _payload$editableExte === void 0 ? false : _payload$editableExte;
  var _useState = (0, _react.useState)(_services2.SMSOptStatus.OptIn),
    _useState2 = _slicedToArray(_useState, 2),
    optStatus = _useState2[0],
    setOptStatus = _useState2[1];
  var _useState3 = (0, _react.useState)(function () {
      return (0, _services2.getDefaultSmsConsentRecordScope)({
        configuration: configuration,
        optStatus: _services2.SMSOptStatus.OptIn
      });
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    recordScope = _useState4[0],
    setRecordScope = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    notes = _useState6[0],
    setNotes = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    saving = _useState8[0],
    setSaving = _useState8[1];
  var _useState9 = (0, _react.useState)((_numbers$to = numbers.to) !== null && _numbers$to !== void 0 ? _numbers$to : ''),
    _useState0 = _slicedToArray(_useState9, 2),
    externalNumberInput = _useState0[0],
    setExternalNumberInput = _useState0[1];
  var _useState1 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    externalNumberError = _useState10[0],
    setExternalNumberError = _useState10[1];
  (0, _react.useEffect)(function () {
    setRecordScope((0, _services2.getDefaultSmsConsentRecordScope)({
      configuration: configuration,
      optStatus: optStatus
    }));
  }, [configuration, optStatus]);
  var campaignType = (_recordScope$campaign = recordScope.campaignType) !== null && _recordScope$campaign !== void 0 ? _recordScope$campaign : _services2.CAMPAIGN_TYPE_OPTIONS[0];
  var normalizedFrom = normalizeNumber(numbers.from);
  var effectiveExternalNumber = editableExternalNumber ? externalNumberInput : numbers.to;
  var normalizedTo = normalizeNumber(effectiveExternalNumber);
  var showRegisteredNumber = recordScope.coverage === _services2.SmsConsentCoverage.PhoneNumber;
  var showRegistrationType = recordScope.coverage === _services2.SmsConsentCoverage.CampaignType;
  var disabled = !canAddConsent || !normalizedTo || showRegisteredNumber && !normalizedFrom || !notes.trim() || saving;

  // Validate the manually typed external number on blur / save only, so the
  // error style does not flash while the user is still typing.
  var validateExternalNumber = function validateExternalNumber() {
    if (!editableExternalNumber) {
      return true;
    }
    var valid = (0, _phoneNumber.isE164)(normalizedTo) && (0, _phoneNumber.isValidNumber)(normalizedTo);
    setExternalNumberError(externalNumberInput.trim().length > 0 && !valid);
    return valid;
  };
  var onSave = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var normalizedNumbers, success, completed;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!(editableExternalNumber && !validateExternalNumber())) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            if (!(!normalizedTo || showRegisteredNumber && !normalizedFrom)) {
              _context.n = 2;
              break;
            }
            return _context.a(2);
          case 2:
            normalizedNumbers = {
              from: normalizedFrom,
              to: normalizedTo
            };
            (0, _services.trackEvent)('Int_SMS_addConsent', (0, _SmsConsentDialog.getSmsConsentRecordTrackProperties)({
              optStatus: optStatus,
              coverage: recordScope.coverage,
              campaignType: recordScope.coverage === _services2.SmsConsentCoverage.CampaignType ? campaignType : undefined
            }, consentEntry));
            setSaving(true);
            _context.p = 3;
            _context.n = 4;
            return mounted(saveConsentRecord({
              numbers: normalizedNumbers,
              options: {
                from: normalizedFrom,
                to: normalizedTo,
                optStatus: optStatus,
                coverage: recordScope.coverage,
                campaignType: recordScope.coverage === _services2.SmsConsentCoverage.CampaignType ? campaignType : undefined,
                notes: "".concat(userNotePrefix, " ").concat(notes.trim())
              }
            }));
          case 4:
            success = _context.v;
            if (!success) {
              _context.n = 6;
              break;
            }
            _context.n = 5;
            return onSaveSuccess(normalizedNumbers);
          case 5:
            completed = _context.v;
            if (completed) {
              action === null || action === void 0 ? void 0 : action.close();
            }
          case 6:
            _context.p = 6;
            setSaving(false);
            return _context.f(6);
          case 7:
            return _context.a(2);
        }
      }, _callee, null, [[3,, 6, 7]]);
    }));
    return function onSave() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react["default"].createElement(_AddConsentPanel.AddConsentPanel, {
    optStatus: optStatus,
    externalNumber: editableExternalNumber ? externalNumberInput : formatNumber(numbers.to),
    registeredNumber: formatNumber(numbers.from),
    campaignType: campaignType,
    showRegisteredNumber: showRegisteredNumber,
    showRegistrationType: showRegistrationType,
    notes: notes,
    saving: saving,
    disabled: disabled,
    editableExternalNumber: editableExternalNumber,
    externalNumberError: externalNumberError,
    onClose: function onClose() {
      return action === null || action === void 0 ? void 0 : action.close();
    },
    onOptStatusChange: setOptStatus,
    onExternalNumberChange: function onExternalNumberChange(value) {
      setExternalNumberInput(value);
      if (externalNumberError) {
        setExternalNumberError(false);
      }
    },
    onExternalNumberBlur: validateExternalNumber,
    onCampaignTypeChange: function onCampaignTypeChange(value) {
      setRecordScope({
        coverage: _services2.SmsConsentCoverage.CampaignType,
        campaignType: value
      });
    },
    onNotesChange: setNotes,
    onSave: onSave
  });
};
//# sourceMappingURL=SmsConsentDialogPanel.js.map

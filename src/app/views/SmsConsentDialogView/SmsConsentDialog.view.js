"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.array.reverse.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmsConsentDialogView = void 0;
require("core-js/modules/es.array.find.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.number.is-nan.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.string.trim.js");
var _services = require("@ringcentral-integration/micro-auth/src/app/services");
var _plugins = require("@ringcentral-integration/micro-core/src/app/plugins");
var _services2 = require("@ringcentral-integration/micro-core/src/app/services");
var _views = require("@ringcentral-integration/micro-core/src/app/views");
var _nextCore = require("@ringcentral-integration/next-core");
var _react = _interopRequireDefault(require("react"));
var _rxjs = require("rxjs");
var _services3 = require("../../services");
var _AddConsentNumberDrawer = require("./AddConsentNumberDrawer");
var _DetailsPanel = require("./DetailsPanel");
var _SmsConsentDialog = require("./SmsConsentDialog.helper");
var _SmsConsentDialogPanel = require("./SmsConsentDialogPanel");
var _i18n = require("./i18n");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec0, _dec1, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
var SmsConsentDialogView = exports.SmsConsentDialogView = (_dec = (0, _nextCore.injectable)({
  name: 'SmsConsentDialogView'
}), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", [typeof _plugins.BlockPlugin === "undefined" ? Object : _plugins.BlockPlugin, typeof _views.ModalView === "undefined" ? Object : _views.ModalView, typeof _services3.SmsConsent === "undefined" ? Object : _services3.SmsConsent, typeof _services.NumberFormatter === "undefined" ? Object : _services.NumberFormatter, typeof _services.ExtensionInfo === "undefined" ? Object : _services.ExtensionInfo, typeof _services2.DateTimeFormat === "undefined" ? Object : _services2.DateTimeFormat, typeof _services2.Toast === "undefined" ? Object : _services2.Toast, typeof _nextCore.RouterPlugin === "undefined" ? Object : _nextCore.RouterPlugin]), _dec4 = (0, _nextCore.dynamic)('ComposeText'), _dec5 = Reflect.metadata("design:type", typeof _services3.ComposeText === "undefined" ? Object : _services3.ComposeText), _dec6 = Reflect.metadata("design:type", Function), _dec7 = Reflect.metadata("design:paramtypes", [Boolean]), _dec8 = Reflect.metadata("design:type", Function), _dec9 = Reflect.metadata("design:paramtypes", [String]), _dec0 = Reflect.metadata("design:type", Function), _dec1 = Reflect.metadata("design:paramtypes", [Boolean]), _dec10 = (0, _nextCore.delegate)('server'), _dec11 = Reflect.metadata("design:type", Function), _dec12 = Reflect.metadata("design:paramtypes", [Boolean]), _dec13 = (0, _nextCore.delegate)('server'), _dec14 = Reflect.metadata("design:type", Function), _dec15 = Reflect.metadata("design:paramtypes", [Boolean]), _dec16 = (0, _nextCore.delegate)('server'), _dec17 = Reflect.metadata("design:type", Function), _dec18 = Reflect.metadata("design:paramtypes", [typeof SmsConsentDialogOpenPayload === "undefined" ? Object : SmsConsentDialogOpenPayload]), _dec19 = (0, _nextCore.delegate)('server'), _dec20 = Reflect.metadata("design:type", Function), _dec21 = Reflect.metadata("design:paramtypes", []), _dec22 = (0, _nextCore.delegate)('server'), _dec23 = Reflect.metadata("design:type", Function), _dec24 = Reflect.metadata("design:paramtypes", [Array]), _dec25 = (0, _nextCore.delegate)('server'), _dec26 = Reflect.metadata("design:type", Function), _dec27 = Reflect.metadata("design:paramtypes", [String]), _dec28 = (0, _nextCore.delegate)('server'), _dec29 = Reflect.metadata("design:type", Function), _dec30 = Reflect.metadata("design:paramtypes", [typeof SmsConsentDialogOpenPayload === "undefined" ? Object : SmsConsentDialogOpenPayload]), _dec31 = (0, _nextCore.delegate)('server'), _dec32 = Reflect.metadata("design:type", Function), _dec33 = Reflect.metadata("design:paramtypes", [typeof SmsConsentDialogOpenPayload === "undefined" ? Object : SmsConsentDialogOpenPayload]), _dec34 = (0, _nextCore.delegate)('server'), _dec35 = Reflect.metadata("design:type", Function), _dec36 = Reflect.metadata("design:paramtypes", [typeof SaveSmsConsentRecordOptions === "undefined" ? Object : SaveSmsConsentRecordOptions]), _dec37 = (0, _nextCore.delegate)('server'), _dec38 = Reflect.metadata("design:type", Function), _dec39 = Reflect.metadata("design:paramtypes", [String]), _dec40 = (0, _nextCore.delegate)('server'), _dec41 = Reflect.metadata("design:type", Function), _dec42 = Reflect.metadata("design:paramtypes", [Object]), _dec43 = Reflect.metadata("design:type", Function), _dec44 = Reflect.metadata("design:paramtypes", []), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_RcViewModule) {
  function SmsConsentDialogView(_block, _modalView, _smsConsent, _numberFormatter, _extensionInfo, _dateTimeFormat, _toast, _router) {
    var _this;
    _classCallCheck(this, SmsConsentDialogView);
    _this = _callSuper(this, SmsConsentDialogView);
    _this._block = _block;
    _this._modalView = _modalView;
    _this._smsConsent = _smsConsent;
    _this._numberFormatter = _numberFormatter;
    _this._extensionInfo = _extensionInfo;
    _this._dateTimeFormat = _dateTimeFormat;
    _this._toast = _toast;
    _this._router = _router;
    _initializerDefineProperty(_this, "addConsentDialog", _descriptor, _this);
    _initializerDefineProperty(_this, "consentDetailsDialog", _descriptor2, _this);
    _initializerDefineProperty(_this, "numberPickerDialog", _descriptor3, _this);
    _initializerDefineProperty(_this, "_composeText", _descriptor4, _this);
    _initializerDefineProperty(_this, "detailsDialogOpen", _descriptor5, _this);
    _initializerDefineProperty(_this, "pickedNumber", _descriptor6, _this);
    _initializerDefineProperty(_this, "settingsAddConsentSaved", _descriptor7, _this);
    _this.header = null;
    _this.footer = null;
    _this.AddConsentDialogContent = function () {
      var _useModalItemView = (0, _views.useModalItemView)(),
        props = _useModalItemView.props;
      var _ref = props.payload,
        consentEntry = _ref.consentEntry,
        contactName = _ref.contactName,
        skipDetailAfterSaved = _ref.skipDetailAfterSaved;
      var _useConnector = (0, _nextCore.useConnector)(function () {
          return {
            canAddConsent: _this._smsConsent.canAddConsent
          };
        }),
        canAddConsent = _useConnector.canAddConsent;
      return /*#__PURE__*/_react["default"].createElement(_SmsConsentDialogPanel.SmsConsentDialogPanel, {
        canAddConsent: canAddConsent,
        userNotePrefix: _this.userNotePrefix,
        formatNumber: function formatNumber(phoneNumber) {
          return _this.formatNumber(phoneNumber);
        },
        normalizeNumber: function normalizeNumber(phoneNumber) {
          return _this.normalizeNumber(phoneNumber);
        },
        saveConsentRecord: function saveConsentRecord(_ref2) {
          var options = _ref2.options;
          return _this.handleSaveClick(options);
        },
        onSaveSuccess: (/*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(numbers) {
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  if (!skipDetailAfterSaved) {
                    _context.n = 2;
                    break;
                  }
                  _context.n = 1;
                  return _this.setSettingsAddConsentSaved(true);
                case 1:
                  return _context.a(2, true);
                case 2:
                  return _context.a(2, _this._ensureConsentDetails({
                    numbers: numbers,
                    contactName: contactName,
                    consentEntry: consentEntry
                  }));
              }
            }, _callee);
          }));
          return function (_x) {
            return _ref3.apply(this, arguments);
          };
        }())
      });
    };
    _this.NumberPickerDialogContent = function () {
      var _useModalItemView2 = (0, _views.useModalItemView)(),
        props = _useModalItemView2.props;
      var _ref4 = props.payload,
        registeredNumbers = _ref4.registeredNumbers,
        defaultNumber = _ref4.defaultNumber;
      return /*#__PURE__*/_react["default"].createElement(_AddConsentNumberDrawer.AddConsentNumberDrawerPanel, {
        registeredNumbers: registeredNumbers,
        defaultNumber: defaultNumber,
        formatNumber: function formatNumber(phoneNumber) {
          return _this.formatNumber(phoneNumber);
        },
        onClose: function onClose() {
          return _this._modalView.close(_this.numberPickerDialog);
        },
        onSelect: function onSelect(phoneNumber) {
          return _this.selectPickedNumber(phoneNumber);
        }
      });
    };
    _this.ConsentDetailsDialogContent = function () {
      var _useModalItemView3 = (0, _views.useModalItemView)(),
        props = _useModalItemView3.props,
        modalAction = _useModalItemView3.action;
      var _ref5 = props.payload,
        consentEntry = _ref5.consentEntry,
        contactName = _ref5.contactName,
        numbers = _ref5.numbers;
      var _useConnector2 = (0, _nextCore.useConnector)(function () {
          var _ref6 = _this._smsConsent.getEffectiveConsentState(numbers) || {},
            data = _ref6.data;
          return {
            canAddConsent: _this._smsConsent.canAddConsent,
            record: (0, _services3.selectLatestSmsConsentRecord)(data === null || data === void 0 ? void 0 : data.explicitConsents)
          };
        }),
        canAddConsent = _useConnector2.canAddConsent,
        record = _useConnector2.record;
      return /*#__PURE__*/_react["default"].createElement(_DetailsPanel.DetailsPanel, {
        record: record,
        phoneNumber: _this.formatNumber(numbers.to),
        contactName: contactName,
        canAddConsent: canAddConsent,
        formatNumber: function formatNumber(phoneNumber) {
          return _this.formatNumber(phoneNumber);
        },
        formatDate: function formatDate(value) {
          return _this.formatDate(value);
        },
        onClose: function onClose() {
          _this.setDetailsDialogOpen(false);
          modalAction === null || modalAction === void 0 ? void 0 : modalAction.close();
        },
        onAddConsent: function onAddConsent() {
          _this.openAddConsentDialog({
            numbers: numbers,
            contactName: contactName,
            consentEntry: consentEntry
          });
        }
      });
    };
    return _this;
  }
  _inherits(SmsConsentDialogView, _RcViewModule);
  return _createClass(SmsConsentDialogView, [{
    key: "_setDetailsDialogOpen",
    value: function _setDetailsDialogOpen(val) {
      this.detailsDialogOpen = val;
    }
  }, {
    key: "_setPickedNumber",
    value: function _setPickedNumber(value) {
      this.pickedNumber = value;
    }
  }, {
    key: "_setSettingsAddConsentSaved",
    value: function _setSettingsAddConsentSaved(value) {
      this.settingsAddConsentSaved = value;
    }
  }, {
    key: "setSettingsAddConsentSaved",
    value: function () {
      var _setSettingsAddConsentSaved2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(saved) {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              this._setSettingsAddConsentSaved(saved);
            case 1:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function setSettingsAddConsentSaved(_x2) {
        return _setSettingsAddConsentSaved2.apply(this, arguments);
      }
      return setSettingsAddConsentSaved;
    }()
  }, {
    key: "setDetailsDialogOpen",
    value: function () {
      var _setDetailsDialogOpen2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(open) {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              this._setDetailsDialogOpen(open);
            case 1:
              return _context3.a(2);
          }
        }, _callee3, this);
      }));
      function setDetailsDialogOpen(_x3) {
        return _setDetailsDialogOpen2.apply(this, arguments);
      }
      return setDetailsDialogOpen;
    }()
  }, {
    key: "openAddConsentDialog",
    value: function () {
      var _openAddConsentDialog = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(_ref7) {
        var _this2 = this;
        var numbers, contactName, editableExternalNumber, skipDetailAfterSaved, consentEntry, result, configuration, _t;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              numbers = _ref7.numbers, contactName = _ref7.contactName, editableExternalNumber = _ref7.editableExternalNumber, skipDetailAfterSaved = _ref7.skipDetailAfterSaved, consentEntry = _ref7.consentEntry;
              if (this._smsConsent.canAddConsent) {
                _context4.n = 1;
                break;
              }
              return _context4.a(2, false);
            case 1:
              _context4.n = 2;
              return this._runUntilRouteChange(function () {
                return (0, _rxjs.from)(_this2._block.next(function () {
                  return _this2.getSmsConfigurationForSender(numbers.from);
                }));
              });
            case 2:
              result = _context4.v;
              if (result !== null && result !== void 0 && result.success) {
                _context4.n = 3;
                break;
              }
              return _context4.a(2, false);
            case 3:
              configuration = result.configuration;
              _t = Boolean;
              _context4.n = 4;
              return this._openUntilRouteChange(function () {
                return _this2._modalView.open(_this2.addConsentDialog, {
                  numbers: numbers,
                  configuration: configuration,
                  contactName: contactName,
                  editableExternalNumber: editableExternalNumber,
                  skipDetailAfterSaved: skipDetailAfterSaved,
                  consentEntry: consentEntry
                });
              });
            case 4:
              return _context4.a(2, _t(_context4.v));
          }
        }, _callee4, this);
      }));
      function openAddConsentDialog(_x4) {
        return _openAddConsentDialog.apply(this, arguments);
      }
      return openAddConsentDialog;
    }()
    /**
     * Settings "Add consent" entry point (RCINT-47840). The external number is
     * typed manually; the RC (from) number is picked first when the user has more
     * than one SMS-registered number. Resolves `true` only when a record was
     * saved, so the caller can reload the consent list.
     */
  }, {
    key: "openAddConsentFromSettings",
    value: (function () {
      var _openAddConsentFromSettings = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var registeredNumbers, from;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              if (this._smsConsent.canAddConsent) {
                _context5.n = 1;
                break;
              }
              return _context5.a(2, false);
            case 1:
              registeredNumbers = this._smsConsent.registeredSmsNumbers;
              if (!(registeredNumbers.length === 1)) {
                _context5.n = 2;
                break;
              }
              from = registeredNumbers[0];
              _context5.n = 4;
              break;
            case 2:
              _context5.n = 3;
              return this._pickRegisteredNumber(registeredNumbers);
            case 3:
              from = _context5.v;
              if (from) {
                _context5.n = 4;
                break;
              }
              return _context5.a(2, false);
            case 4:
              this._setSettingsAddConsentSaved(false);
              _context5.n = 5;
              return this.openAddConsentDialog({
                numbers: {
                  from: from,
                  to: ''
                },
                editableExternalNumber: true,
                skipDetailAfterSaved: true,
                consentEntry: 'Settings'
              });
            case 5:
              return _context5.a(2, this.settingsAddConsentSaved);
          }
        }, _callee5, this);
      }));
      function openAddConsentFromSettings() {
        return _openAddConsentFromSettings.apply(this, arguments);
      }
      return openAddConsentFromSettings;
    }())
  }, {
    key: "_resolveDefaultRegisteredNumber",
    value: function _resolveDefaultRegisteredNumber(registeredNumbers) {
      var _this$_composeText,
        _this3 = this;
      var senderNumber = (_this$_composeText = this._composeText) === null || _this$_composeText === void 0 ? void 0 : _this$_composeText.senderNumber;
      if (senderNumber) {
        var normalizedSender = this.normalizeNumber(senderNumber);
        var match = registeredNumbers.find(function (phoneNumber) {
          return _this3.normalizeNumber(phoneNumber) === normalizedSender;
        });
        if (match) {
          return match;
        }
      }
      return registeredNumbers[0];
    }
  }, {
    key: "_pickRegisteredNumber",
    value: function () {
      var _pickRegisteredNumber2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(registeredNumbers) {
        var _this4 = this;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              this._setPickedNumber('');
              _context6.n = 1;
              return this._openUntilRouteChange(function () {
                return _this4._modalView.open(_this4.numberPickerDialog, {
                  registeredNumbers: registeredNumbers,
                  defaultNumber: _this4._resolveDefaultRegisteredNumber(registeredNumbers)
                });
              });
            case 1:
              return _context6.a(2, this.pickedNumber);
          }
        }, _callee6, this);
      }));
      function _pickRegisteredNumber(_x5) {
        return _pickRegisteredNumber2.apply(this, arguments);
      }
      return _pickRegisteredNumber;
    }()
  }, {
    key: "selectPickedNumber",
    value: function () {
      var _selectPickedNumber = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(phoneNumber) {
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              this._setPickedNumber(phoneNumber);
              _context7.n = 1;
              return this._modalView.close(this.numberPickerDialog);
            case 1:
              return _context7.a(2);
          }
        }, _callee7, this);
      }));
      function selectPickedNumber(_x6) {
        return _selectPickedNumber.apply(this, arguments);
      }
      return selectPickedNumber;
    }()
  }, {
    key: "viewConsentDetails",
    value: function () {
      var _viewConsentDetails = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(payload) {
        var success, trackProperties;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              _context8.n = 1;
              return this._ensureConsentDetails(payload);
            case 1:
              success = _context8.v;
              if (success) {
                _context8.n = 2;
                break;
              }
              return _context8.a(2, false);
            case 2:
              trackProperties = this.getViewConsentTrackProperties(payload);
              (0, _services.trackEvent)('Int_SMS_viewConsent', trackProperties);
              return _context8.a(2, trackProperties);
          }
        }, _callee8, this);
      }));
      function viewConsentDetails(_x7) {
        return _viewConsentDetails.apply(this, arguments);
      }
      return viewConsentDetails;
    }()
  }, {
    key: "_ensureConsentDetails",
    value: function () {
      var _ensureConsentDetails2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(payload) {
        var _this5 = this;
        var numbers, result;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              numbers = payload.numbers;
              if (this._smsConsent.canReadConsent) {
                _context9.n = 1;
                break;
              }
              return _context9.a(2, false);
            case 1:
              _context9.n = 2;
              return this._runUntilRouteChange(function () {
                return (0, _rxjs.from)(_this5._block.next(function () {
                  return _this5.reloadLatestConsentRecord({
                    numbers: numbers
                  });
                }));
              });
            case 2:
              result = _context9.v;
              if (result !== null && result !== void 0 && result.success) {
                _context9.n = 3;
                break;
              }
              return _context9.a(2, false);
            case 3:
              if (this.detailsDialogOpen) {
                _context9.n = 4;
                break;
              }
              _context9.n = 4;
              return this.openConsentDetailsDialog(payload);
            case 4:
              return _context9.a(2, true);
          }
        }, _callee9, this);
      }));
      function _ensureConsentDetails(_x8) {
        return _ensureConsentDetails2.apply(this, arguments);
      }
      return _ensureConsentDetails;
    }()
  }, {
    key: "openConsentDetailsDialog",
    value: function () {
      var _openConsentDetailsDialog = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(payload) {
        var _this6 = this;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              this.setDetailsDialogOpen(true);
              this._openUntilRouteChange(function () {
                return _this6._modalView.open(_this6.consentDetailsDialog, payload);
              }, function () {
                return _this6.setDetailsDialogOpen(false);
              });
            case 1:
              return _context0.a(2);
          }
        }, _callee0, this);
      }));
      function openConsentDetailsDialog(_x9) {
        return _openConsentDetailsDialog.apply(this, arguments);
      }
      return openConsentDetailsDialog;
    }()
  }, {
    key: "_openUntilRouteChange",
    value: function _openUntilRouteChange(openModal, onRouteChange) {
      return this._runUntilRouteChange(function () {
        return (0, _nextCore.fromPortal)(openModal);
      }, onRouteChange);
    }
  }, {
    key: "_runUntilRouteChange",
    value: function _runUntilRouteChange(flow, onRouteChange) {
      var _this7 = this;
      var routeChanged$ = (0, _nextCore.fromWatch)(this, function () {
        return _this7._router.currentPath;
      }).pipe((0, _rxjs.tap)(function () {
        return onRouteChange === null || onRouteChange === void 0 ? void 0 : onRouteChange();
      }));
      return (0, _rxjs.firstValueFrom)((0, _rxjs.defer)(flow).pipe((0, _rxjs.takeUntil)(routeChanged$), _nextCore.takeUntilAppDestroy, (0, _rxjs.defaultIfEmpty)(null)));
    }
  }, {
    key: "handleSaveClick",
    value: function () {
      var _handleSaveClick = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(options) {
        var _this8 = this;
        var saved;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              _context1.n = 1;
              return this._runUntilRouteChange(function () {
                return (0, _rxjs.defer)(function () {
                  return Promise.resolve(_this8._smsConsent.saveConsentRecord(options));
                }).pipe((0, _rxjs.map)(function () {
                  return true;
                }), (0, _rxjs.catchError)(function () {
                  _this8._toast.danger({
                    message: (0, _i18n.t)('saveError'),
                    ttl: 5000
                  });
                  return (0, _rxjs.of)(false);
                }));
              });
            case 1:
              saved = _context1.v;
              return _context1.a(2, Boolean(saved));
          }
        }, _callee1, this);
      }));
      function handleSaveClick(_x0) {
        return _handleSaveClick.apply(this, arguments);
      }
      return handleSaveClick;
    }()
  }, {
    key: "getSmsConfigurationForSender",
    value: function () {
      var _getSmsConfigurationForSender = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(from) {
        var configuration, _t2;
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.p = _context10.n) {
            case 0:
              _context10.p = 0;
              _context10.n = 1;
              return this._smsConsent.loadSmsConfigurationForSender(from);
            case 1:
              configuration = this._smsConsent.getSmsConfiguration(from);
              if (configuration) {
                _context10.n = 2;
                break;
              }
              this.logger.error('Failed to get SMS configuration for number', {
                from: from
              });
              throw new Error();
            case 2:
              return _context10.a(2, {
                success: true,
                configuration: configuration
              });
            case 3:
              _context10.p = 3;
              _t2 = _context10.v;
              this._toast.danger({
                message: (0, _i18n.t)('openSettingsError'),
                ttl: 5000
              });
              return _context10.a(2, {
                success: false
              });
          }
        }, _callee10, this, [[0, 3]]);
      }));
      function getSmsConfigurationForSender(_x1) {
        return _getSmsConfigurationForSender.apply(this, arguments);
      }
      return getSmsConfigurationForSender;
    }()
  }, {
    key: "reloadLatestConsentRecord",
    value: function () {
      var _reloadLatestConsentRecord = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(_ref8) {
        var numbers, _ref9, error, _t3;
        return _regenerator().w(function (_context11) {
          while (1) switch (_context11.p = _context11.n) {
            case 0:
              numbers = _ref8.numbers;
              _context11.p = 1;
              _context11.n = 2;
              return this._smsConsent.loadEffectiveConsentForNumbers(numbers);
            case 2:
              _ref9 = this._smsConsent.getEffectiveConsentState(numbers) || {}, error = _ref9.error;
              if (!error) {
                _context11.n = 3;
                break;
              }
              throw new Error(error);
            case 3:
              return _context11.a(2, {
                success: true
              });
            case 4:
              _context11.p = 4;
              _t3 = _context11.v;
              this._toast.danger({
                message: (0, _i18n.t)('openSettingsError'),
                ttl: 5000
              });
              return _context11.a(2, {
                success: false
              });
          }
        }, _callee11, this, [[1, 4]]);
      }));
      function reloadLatestConsentRecord(_x10) {
        return _reloadLatestConsentRecord.apply(this, arguments);
      }
      return reloadLatestConsentRecord;
    }()
  }, {
    key: "userNotePrefix",
    get: function get() {
      return (0, _i18n.t)('userAddedConsentNotePrefix', {
        userName: this._extensionInfo.name || (0, _i18n.t)('unknownUser')
      });
    }
  }, {
    key: "formatNumber",
    value: function formatNumber(phoneNumber) {
      if (!phoneNumber) {
        return '';
      }
      return this._numberFormatter.formatNumber(phoneNumber) || phoneNumber;
    }
  }, {
    key: "normalizeNumber",
    value: function normalizeNumber(phoneNumber) {
      return this._numberFormatter.normalizeNumber(phoneNumber, true) || phoneNumber.trim();
    }
  }, {
    key: "formatDate",
    value: function formatDate(value) {
      var _this$_dateTimeFormat;
      if (!value) {
        return '';
      }
      var utcTimestamp = Date.parse(value);
      if (Number.isNaN(utcTimestamp)) {
        return value;
      }
      return (_this$_dateTimeFormat = this._dateTimeFormat.formatDateTime({
        utcTimestamp: utcTimestamp,
        type: 'date'
      })) !== null && _this$_dateTimeFormat !== void 0 ? _this$_dateTimeFormat : value;
    }
  }, {
    key: "getViewConsentTrackProperties",
    value: function getViewConsentTrackProperties(_ref0) {
      var numbers = _ref0.numbers,
        consentEntry = _ref0.consentEntry;
      var _ref1 = this._smsConsent.getEffectiveConsentState(numbers) || {},
        data = _ref1.data;
      var record = (0, _services3.selectLatestSmsConsentRecord)(data === null || data === void 0 ? void 0 : data.explicitConsents);
      return record ? (0, _SmsConsentDialog.getSmsConsentRecordTrackProperties)(record, consentEntry) : {
        consentEntry: consentEntry
      };
    }
  }, {
    key: "component",
    value: function component() {
      return null;
    }
  }]);
}(_nextCore.RcViewModule), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "addConsentDialog", [_nextCore.portal], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this9 = this;
    return this._modalView.create({
      view: function view() {
        return /*#__PURE__*/_react["default"].createElement(_this9.AddConsentDialogContent, null);
      },
      props: function props() {
        return {
          'data-sign': 'sms-consent-add-dialog',
          type: 'drawer',
          disableBackdropClick: true,
          disableEscapeKeyDown: true,
          disableRestoreFocus: true
        };
      }
    });
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "consentDetailsDialog", [_nextCore.portal], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this0 = this;
    return this._modalView.create({
      view: function view() {
        return /*#__PURE__*/_react["default"].createElement(_this0.ConsentDetailsDialogContent, null);
      },
      props: function props() {
        return {
          'data-sign': 'sms-consent-details-dialog',
          className: 'z-drawer',
          classes: {
            root: '!px-0'
          },
          fullScreen: true,
          disableBackdropClick: true,
          disableEscapeKeyDown: true,
          disableRestoreFocus: true,
          onClose: function onClose() {
            _this0.setDetailsDialogOpen(false);
          }
        };
      }
    });
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "numberPickerDialog", [_nextCore.portal], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    var _this1 = this;
    return this._modalView.create({
      view: function view() {
        return /*#__PURE__*/_react["default"].createElement(_this1.NumberPickerDialogContent, null);
      },
      props: function props() {
        return {
          'data-sign': 'sms-consent-number-picker',
          type: 'drawer',
          disableBackdropClick: true,
          disableEscapeKeyDown: true,
          disableRestoreFocus: true
        };
      }
    });
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_composeText", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "detailsDialogOpen", [_nextCore.state], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "pickedNumber", [_nextCore.state], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "settingsAddConsentSaved", [_nextCore.state], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _applyDecoratedDescriptor(_class2.prototype, "_setDetailsDialogOpen", [_nextCore.action, _dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "_setDetailsDialogOpen"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setPickedNumber", [_nextCore.action, _dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "_setPickedNumber"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setSettingsAddConsentSaved", [_nextCore.action, _dec0, _dec1], Object.getOwnPropertyDescriptor(_class2.prototype, "_setSettingsAddConsentSaved"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "setSettingsAddConsentSaved", [_dec10, _dec11, _dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "setSettingsAddConsentSaved"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "setDetailsDialogOpen", [_dec13, _dec14, _dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "setDetailsDialogOpen"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "openAddConsentDialog", [_dec16, _dec17, _dec18], Object.getOwnPropertyDescriptor(_class2.prototype, "openAddConsentDialog"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "openAddConsentFromSettings", [_dec19, _dec20, _dec21], Object.getOwnPropertyDescriptor(_class2.prototype, "openAddConsentFromSettings"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_pickRegisteredNumber", [_dec22, _dec23, _dec24], Object.getOwnPropertyDescriptor(_class2.prototype, "_pickRegisteredNumber"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "selectPickedNumber", [_dec25, _dec26, _dec27], Object.getOwnPropertyDescriptor(_class2.prototype, "selectPickedNumber"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_ensureConsentDetails", [_dec28, _dec29, _dec30], Object.getOwnPropertyDescriptor(_class2.prototype, "_ensureConsentDetails"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "openConsentDetailsDialog", [_dec31, _dec32, _dec33], Object.getOwnPropertyDescriptor(_class2.prototype, "openConsentDetailsDialog"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "handleSaveClick", [_dec34, _dec35, _dec36], Object.getOwnPropertyDescriptor(_class2.prototype, "handleSaveClick"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getSmsConfigurationForSender", [_dec37, _dec38, _dec39], Object.getOwnPropertyDescriptor(_class2.prototype, "getSmsConfigurationForSender"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "reloadLatestConsentRecord", [_dec40, _dec41, _dec42], Object.getOwnPropertyDescriptor(_class2.prototype, "reloadLatestConsentRecord"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "userNotePrefix", [_nextCore.computed, _dec43, _dec44], Object.getOwnPropertyDescriptor(_class2.prototype, "userNotePrefix"), _class2.prototype), _class2)) || _class) || _class) || _class);
//# sourceMappingURL=SmsConsentDialog.view.js.map

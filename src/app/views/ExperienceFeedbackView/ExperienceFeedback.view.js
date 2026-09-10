"use strict";

require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.for-each.js");
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
require("core-js/modules/es.promise.js");
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/web.dom-collections.for-each.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isExperienceFeedbackShowPayload = exports.ExperienceFeedbackView = exports.EXPERIENCE_FEEDBACK_TRIGGER_EVENT = void 0;
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.number.max-safe-integer.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/esnext.global-this.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _services = require("@ringcentral-integration/micro-auth/src/app/services");
var _hooks = require("@ringcentral-integration/micro-core/src/app/hooks");
var _services2 = require("@ringcentral-integration/micro-core/src/app/services");
var _nextCore = require("@ringcentral-integration/next-core");
var _springIcon = require("@ringcentral/spring-icon");
var _springUi = require("@ringcentral/spring-ui");
var _react = _interopRequireDefault(require("react"));
var _rxjs = require("rxjs");
var _i18n = _interopRequireDefault(require("../FeedbackView/i18n"));
var _i18n2 = _interopRequireDefault(require("./i18n"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec0, _class, _class2, _descriptor;
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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var EXPERIENCE_FEEDBACK_TRIGGER_EVENT = exports.EXPERIENCE_FEEDBACK_TRIGGER_EVENT = 'Int_CRM_logCall';
var EXPERIENCE_FEEDBACK_SHOW_EVENT = 'experience-feedback-show';
var DEFAULT_TAB_ID = 'default';
var USERPILOT_EXPERIENCE_VALUE = {
  great: 'Great',
  'can-be-better': 'Can be better'
};
var isExperienceFeedbackShowPayload = exports.isExperienceFeedbackShowPayload = function isExperienceFeedbackShowPayload(payload) {
  if (!payload || _typeof(payload) !== 'object') {
    return false;
  }
  var guidePayload = payload;
  return guidePayload.eventName === EXPERIENCE_FEEDBACK_SHOW_EVENT;
};
var ExperienceFeedbackView = exports.ExperienceFeedbackView = (_dec = (0, _nextCore.injectable)({
  name: 'ExperienceFeedbackView'
}), _dec2 = function _dec2(target, key) {
  return (0, _nextCore.optional)('SettingsViewOptions')(target, undefined, 4);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _services2.Brand === "undefined" ? Object : _services2.Brand, typeof _services2.Toast === "undefined" ? Object : _services2.Toast, typeof _nextCore.PortManager === "undefined" ? Object : _nextCore.PortManager, typeof _services.UserpilotService === "undefined" ? Object : _services.UserpilotService, typeof SettingsViewOptions === "undefined" ? Object : SettingsViewOptions]), _dec5 = Reflect.metadata("design:type", typeof Record === "undefined" ? Object : Record), _dec6 = Reflect.metadata("design:type", Function), _dec7 = Reflect.metadata("design:paramtypes", [String, Boolean]), _dec8 = (0, _nextCore.delegate)('server'), _dec9 = Reflect.metadata("design:type", Function), _dec0 = Reflect.metadata("design:paramtypes", [String, Boolean]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = /*#__PURE__*/function (_RcViewModule) {
  function ExperienceFeedbackView(_brand, _toast, _portManager, _userpilotService, _settingsViewOptions) {
    var _this;
    _classCallCheck(this, ExperienceFeedbackView);
    _this = _callSuper(this, ExperienceFeedbackView);
    _this._brand = _brand;
    _this._toast = _toast;
    _this._portManager = _portManager;
    _this._userpilotService = _userpilotService;
    _this._settingsViewOptions = _settingsViewOptions;
    _initializerDefineProperty(_this, "openTabIds", _descriptor, _this);
    if (globalThis.document) {
      _this.listenFlowDisplayEventToOpenExperience();
    }
    return _this;
  }

  /**
   * we base on the userpilot event to show our in app custom ui, not use userpilot ui, only use the flow response mechanician
   *
   * 1. event trigger show flow
   * 2. flow show with non visible iframe, and send the event to the app
   * 3. show our custom ui
   * 4. user submit feedback, we use event to send to userpilot, and userpilot will send to server
   */
  _inherits(ExperienceFeedbackView, _RcViewModule);
  return _createClass(ExperienceFeedbackView, [{
    key: "listenFlowDisplayEventToOpenExperience",
    value: function listenFlowDisplayEventToOpenExperience() {
      var _this2 = this;
      this._userpilotService.guideData$.pipe((0, _rxjs.filter)(function (payload) {
        return isExperienceFeedbackShowPayload(payload);
      }), (0, _rxjs.filter)(function () {
        var _this2$_userpilotServ;
        return (_this2$_userpilotServ = _this2._userpilotService.consumeRecentTrackedEvent(EXPERIENCE_FEEDBACK_TRIGGER_EVENT)) !== null && _this2$_userpilotServ !== void 0 ? _this2$_userpilotServ : false;
      }), (0, _rxjs.tap)(function () {
        void _this2.openExperienceFeedback();
      }), _nextCore.takeUntilAppDestroy).subscribe();
    }
  }, {
    key: "currentTabId",
    get: function get() {
      return this._portManager.clientId || DEFAULT_TAB_ID;
    }
  }, {
    key: "isOpen",
    get: function get() {
      return !!this.openTabIds[this.currentTabId];
    }
  }, {
    key: "_setTabOpen",
    value: function _setTabOpen(tabId, open) {
      this.openTabIds[tabId] = open;
    }
  }, {
    key: "_setTabOpenOnServer",
    value: function () {
      var _setTabOpenOnServer2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(tabId, open) {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              this._setTabOpen(tabId, open);
            case 1:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function _setTabOpenOnServer(_x, _x2) {
        return _setTabOpenOnServer2.apply(this, arguments);
      }
      return _setTabOpenOnServer;
    }()
  }, {
    key: "openExperienceFeedback",
    value: function () {
      var _openExperienceFeedback = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var tabId;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              tabId = this.currentTabId;
              if (!this.openTabIds[tabId]) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              _context2.n = 2;
              return this._setTabOpenOnServer(tabId, true);
            case 2:
              this._userpilotService.track(EXPERIENCE_FEEDBACK_SHOW_EVENT);
            case 3:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function openExperienceFeedback() {
        return _openExperienceFeedback.apply(this, arguments);
      }
      return openExperienceFeedback;
    }()
  }, {
    key: "closeExperienceFeedback",
    value: function () {
      var _closeExperienceFeedback = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return this._setTabOpenOnServer(this.currentTabId, false);
            case 1:
              this._userpilotService.track('experience-feedback-dismiss');
              this._userpilotService.sendGuideData({
                action: 'dismiss'
              }, isExperienceFeedbackShowPayload);
            case 2:
              return _context3.a(2);
          }
        }, _callee3, this);
      }));
      function closeExperienceFeedback() {
        return _closeExperienceFeedback.apply(this, arguments);
      }
      return closeExperienceFeedback;
    }()
  }, {
    key: "submitFeedback",
    value: function () {
      var _submitFeedback = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(feedback, successMessage) {
        var experience, _this$_settingsViewOp, _this$_settingsViewOp2;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              experience = USERPILOT_EXPERIENCE_VALUE[feedback];
              _context4.n = 1;
              return this._setTabOpenOnServer(this.currentTabId, false);
            case 1:
              this._userpilotService.track("experience-feedback-submit-".concat(feedback), {
                feedback: feedback,
                showToast: true
              });
              this._userpilotService.sendGuideData({
                action: 'submit',
                feedback: feedback,
                experience: experience
              }, isExperienceFeedbackShowPayload);
              if (successMessage) {
                this._toast.success({
                  message: successMessage
                });
              }
              if (feedback === 'great') {
                (_this$_settingsViewOp = this._settingsViewOptions) === null || _this$_settingsViewOp === void 0 ? void 0 : (_this$_settingsViewOp2 = _this$_settingsViewOp.onFeedBackSettingsLink) === null || _this$_settingsViewOp2 === void 0 ? void 0 : _this$_settingsViewOp2.call(_this$_settingsViewOp, 'auto');
              }
            case 2:
              return _context4.a(2);
          }
        }, _callee4, this);
      }));
      function submitFeedback(_x3, _x4) {
        return _submitFeedback.apply(this, arguments);
      }
      return submitFeedback;
    }()
  }, {
    key: "track",
    value: function track() {
      this._userpilotService.track(EXPERIENCE_FEEDBACK_TRIGGER_EVENT);
    }
  }, {
    key: "component",
    value: function component() {
      var _this3 = this;
      var _useLocale = (0, _hooks.useLocale)(_i18n2["default"], _i18n["default"]),
        t = _useLocale.t;
      var _useConnector = (0, _nextCore.useConnector)(function () {
          return {
            brandConfig: _this3._brand.brandConfig,
            isOpen: _this3.isOpen
          };
        }),
        brandConfig = _useConnector.brandConfig,
        isOpen = _useConnector.isOpen;
      var appName = String(brandConfig === null || brandConfig === void 0 ? void 0 : brandConfig.appName);
      var close = function close() {
        void _this3.closeExperienceFeedback();
      };
      var submitFeedback = function submitFeedback(feedback) {
        void _this3.submitFeedback(feedback, feedback === 'can-be-better' ? t('submitFeedbackSuccess') : undefined);
      };
      if (!isOpen) {
        return null;
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        id: "experience-feedback-modal",
        role: "presentation",
        className: "fixed inset-0 mx-auto flex w-full max-w-md items-end justify-center pointer-events-none",
        style: {
          zIndex: Number.MAX_SAFE_INTEGER
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        role: "dialog",
        "aria-modal": true,
        "aria-labelledby": "experience-feedback-title",
        tabIndex: -1,
        className: "relative h-auto min-h-0 rounded border border-neutral-b0-t20 bg-neutral-base py-3 pointer-events-auto mb-16 mx-3 shadow-xl",
        style: {
          width: 'calc(100% - 24px)',
          maxWidth: 312
        }
      }, /*#__PURE__*/_react["default"].createElement(_springUi.Text, {
        component: "div",
        className: "typography-title relative px-3 pr-10 text-neutral-b0",
        id: "experience-feedback-title"
      }, t('ratingTitle', {
        appName: appName
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "mx-2 mt-3 flex flex-nowrap justify-between gap-1"
      }, /*#__PURE__*/_react["default"].createElement(_springUi.Button, {
        className: "flex w-full items-center gap-1",
        type: "button",
        variant: "contained",
        color: "secondary",
        size: "medium",
        startIcon: _springIcon.ThumbUpMd,
        onClick: function onClick() {
          return submitFeedback('great');
        },
        "data-feedback": "great",
        "data-sign": "experience-feedback-great"
      }, t('great')), /*#__PURE__*/_react["default"].createElement(_springUi.Button, {
        className: "flex w-full items-center gap-1",
        type: "button",
        variant: "contained",
        color: "secondary",
        size: "medium",
        startIcon: _springIcon.ThumbDownMd,
        onClick: function onClick() {
          return submitFeedback('can-be-better');
        },
        "data-feedback": "can-be-better",
        "data-sign": "experience-feedback-can-be-better"
      }, t('canBeBetter'))), /*#__PURE__*/_react["default"].createElement(_springUi.IconButton, {
        className: "absolute right-1 top-0 p-2 text-neutral-b1",
        "aria-label": t('closeFeedbackModal'),
        symbol: _springIcon.Xmd,
        variant: "icon",
        size: "medium",
        onClick: close,
        "data-sign": "experience-feedback-close"
      })));
    }
  }]);
}(_nextCore.RcViewModule), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "openTabIds", [_nextCore.state, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _applyDecoratedDescriptor(_class2.prototype, "_setTabOpen", [_nextCore.action, _dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "_setTabOpen"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setTabOpenOnServer", [_dec8, _dec9, _dec0], Object.getOwnPropertyDescriptor(_class2.prototype, "_setTabOpenOnServer"), _class2.prototype), _class2)) || _class) || _class) || _class) || _class);
//# sourceMappingURL=ExperienceFeedback.view.js.map

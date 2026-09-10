"use strict";

require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.array.reverse.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.for-each.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeedbackView = void 0;
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _services = require("@ringcentral-integration/micro-auth/src/app/services");
var _hooks = require("@ringcentral-integration/micro-core/src/app/hooks");
var _services2 = require("@ringcentral-integration/micro-core/src/app/services");
var _nextCore = require("@ringcentral-integration/next-core");
var _springUi = require("@ringcentral/spring-ui");
var _clsx = _interopRequireDefault(require("clsx"));
var _react = _interopRequireWildcard(require("react"));
var _i18n = _interopRequireDefault(require("./i18n"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec0, _dec1, _class, _class2, _descriptor;
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
var FEEDBACK_TAG_IDS = ['Call log failure', 'Poor call quality', 'Server errors', 'Very slow'];
var DEFAULT_TAB_ID = 'default';
var FEEDBACK_SHOW_EVENT = 'settings-rating-show';
var isFeedbackGuideShowPayload = function isFeedbackGuideShowPayload(payload) {
  if (!payload || _typeof(payload) !== 'object') {
    return false;
  }
  var guidePayload = payload;
  return guidePayload.eventName === FEEDBACK_SHOW_EVENT;
};
var FeedbackView = exports.FeedbackView = (_dec = (0, _nextCore.injectable)({
  name: 'FeedbackView'
}), _dec2 = function _dec2(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 1);
}, _dec3 = function _dec3(target, key) {
  return (0, _nextCore.optional)('FeedbackViewOptions')(target, undefined, 4);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _services2.Toast === "undefined" ? Object : _services2.Toast, typeof _services.UserpilotService === "undefined" ? Object : _services.UserpilotService, typeof _services2.Brand === "undefined" ? Object : _services2.Brand, typeof _nextCore.PortManager === "undefined" ? Object : _nextCore.PortManager, typeof FeedbackViewOptions === "undefined" ? Object : FeedbackViewOptions]), _dec6 = Reflect.metadata("design:type", typeof Record === "undefined" ? Object : Record), _dec7 = Reflect.metadata("design:type", Function), _dec8 = Reflect.metadata("design:paramtypes", [String, Boolean]), _dec9 = (0, _nextCore.delegate)('server'), _dec0 = Reflect.metadata("design:type", Function), _dec1 = Reflect.metadata("design:paramtypes", [String, Boolean]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (_class2 = /*#__PURE__*/function (_RcViewModule) {
  function FeedbackView(_toast, _userpilotService, _brand, _portManager, _options) {
    var _this;
    _classCallCheck(this, FeedbackView);
    _this = _callSuper(this, FeedbackView);
    _this._toast = _toast;
    _this._userpilotService = _userpilotService;
    _this._brand = _brand;
    _this._portManager = _portManager;
    _this._options = _options;
    _initializerDefineProperty(_this, "openTabIds", _descriptor, _this);
    return _this;
  }
  _inherits(FeedbackView, _RcViewModule);
  return _createClass(FeedbackView, [{
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
    key: "openFeedback",
    value: function () {
      var _openFeedback = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return this._setTabOpenOnServer(this.currentTabId, true);
            case 1:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function openFeedback() {
        return _openFeedback.apply(this, arguments);
      }
      return openFeedback;
    }()
  }, {
    key: "closeFeedback",
    value: function () {
      var _closeFeedback = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return this._setTabOpenOnServer(this.currentTabId, false);
            case 1:
              return _context3.a(2);
          }
        }, _callee3, this);
      }));
      function closeFeedback() {
        return _closeFeedback.apply(this, arguments);
      }
      return closeFeedback;
    }()
  }, {
    key: "component",
    value: function component() {
      var _this2 = this,
        _this$_options$review,
        _this$_options;
      var _useState = (0, _react.useState)('rating'),
        _useState2 = _slicedToArray(_useState, 2),
        step = _useState2[0],
        setStep = _useState2[1];
      var _useState3 = (0, _react.useState)(0),
        _useState4 = _slicedToArray(_useState3, 2),
        rating = _useState4[0],
        setRating = _useState4[1];
      var _useState5 = (0, _react.useState)(''),
        _useState6 = _slicedToArray(_useState5, 2),
        feedbackText = _useState6[0],
        setFeedbackText = _useState6[1];
      var _useState7 = (0, _react.useState)([]),
        _useState8 = _slicedToArray(_useState7, 2),
        selectedTags = _useState8[0],
        setSelectedTags = _useState8[1];
      var _useLocale = (0, _hooks.useLocale)(_i18n["default"]),
        t = _useLocale.t;
      var _useConnector = (0, _nextCore.useConnector)(function () {
          return {
            brandConfig: _this2._brand.brandConfig,
            open: _this2.isOpen
          };
        }),
        brandConfig = _useConnector.brandConfig,
        open = _useConnector.open;
      var appName = String(brandConfig === null || brandConfig === void 0 ? void 0 : brandConfig.appName);
      var application = String(brandConfig === null || brandConfig === void 0 ? void 0 : brandConfig.application);
      var reviewLink = (_this$_options$review = (_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : _this$_options.reviewLink) !== null && _this$_options$review !== void 0 ? _this$_options$review : '';
      (0, _react.useEffect)(function () {
        if (!open) {
          setStep('rating');
          setRating(0);
          setFeedbackText('');
          setSelectedTags([]);
        }
      }, [open]);
      var handleClose = function handleClose(submit) {
        if (submit) {
          var _this2$_userpilotServ;
          (_this2$_userpilotServ = _this2._userpilotService) === null || _this2$_userpilotServ === void 0 ? void 0 : _this2$_userpilotServ.sendGuideData({
            action: 'submit',
            feedbackText: feedbackText,
            selectedTags: selectedTags,
            rating: rating.toString()
          }, isFeedbackGuideShowPayload);
        } else {
          var _this2$_userpilotServ2;
          (_this2$_userpilotServ2 = _this2._userpilotService) === null || _this2$_userpilotServ2 === void 0 ? void 0 : _this2$_userpilotServ2.sendGuideData({
            action: 'dismiss'
          }, isFeedbackGuideShowPayload);
        }
        void _this2.closeFeedback();
      };
      var handleNext = function handleNext() {
        if (rating >= 1 && rating <= 3) {
          setStep('helpImprove');
        } else if (rating >= 4 && rating <= 5) {
          setStep('thankYou');
        }
      };
      var handleSubmit = function handleSubmit() {
        handleClose(true);
        _this2._toast.success({
          message: t('submitFeedbackSuccess')
        });
      };
      var handleShareReview = function handleShareReview() {
        if (reviewLink) {
          window.open(reviewLink, '_blank');
        }
        handleClose(true);
      };
      var handleCancelThankYou = function handleCancelThankYou() {
        handleClose(true);
      };
      var handleToggleTag = function handleToggleTag(tag) {
        setSelectedTags(function (prev) {
          return prev.includes(tag) ? prev.filter(function (t) {
            return t !== tag;
          }) : [].concat(_toConsumableArray(prev), [tag]);
        });
      };
      var getRatingLabelText = function getRatingLabelText(value) {
        return value === 1 ? t('starLabelOne') : value != null ? t('starLabelMany', {
          count: value
        }) : t('emptyRating');
      };
      var tagLabelMap = {
        'Call log failure': t('tagCallLogFailure'),
        'Poor call quality': t('tagPoorCallQuality'),
        'Server errors': t('tagServerErrors'),
        'Very slow': t('tagVerySlow')
      };
      if (!open) {
        return null;
      }
      var renderStep = function renderStep() {
        switch (step) {
          case 'rating':
            return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_springUi.DialogTitle, {
              className: "px-3"
            }, t('ratingTitle', {
              appName: appName
            })), /*#__PURE__*/_react["default"].createElement(_springUi.DialogContent, {
              className: "flex justify-center"
            }, /*#__PURE__*/_react["default"].createElement(_springUi.Rating, {
              name: "feedback-rating",
              value: rating || null,
              className: "gap-3",
              max: 5,
              onChange: function onChange(_event, value) {
                return setRating(value !== null && value !== void 0 ? value : 0);
              },
              getLabelText: getRatingLabelText,
              emptyLabelText: t('emptyRating')
            })), /*#__PURE__*/_react["default"].createElement(_springUi.DialogActions, {
              className: "px-2"
            }, /*#__PURE__*/_react["default"].createElement(_springUi.Button, {
              variant: "outlined",
              color: "secondary",
              size: "medium",
              onClick: function onClick() {
                return handleClose(false);
              },
              "data-sign": "cancel-btn"
            }, t('cancel')), /*#__PURE__*/_react["default"].createElement(_springUi.Button, {
              variant: "contained",
              color: "primary",
              size: "medium",
              disabled: rating === 0,
              onClick: handleNext,
              "data-sign": "next-btn"
            }, t('next'))));
          case 'helpImprove':
            return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_springUi.DialogTitle, {
              className: "px-3"
            }, t('helpImproveTitle')), /*#__PURE__*/_react["default"].createElement(_springUi.DialogContent, {
              className: "px-3 overflow-hidden"
            }, /*#__PURE__*/_react["default"].createElement(_springUi.Textarea, {
              fullWidth: true,
              variant: "outlined",
              placeholder: t('feedbackPlaceholder'),
              value: feedbackText,
              onChange: function onChange(e) {
                return setFeedbackText(e.target.value);
              },
              rows: 2,
              size: "xlarge",
              inputProps: {
                'data-sign': 'textarea-feedback'
              }
            }), /*#__PURE__*/_react["default"].createElement("div", {
              className: "flex flex-wrap gap-1 mt-2"
            }, FEEDBACK_TAG_IDS.map(function (tagId) {
              var _tagLabelMap$tagId;
              var active = selectedTags.includes(tagId);
              return /*#__PURE__*/_react["default"].createElement(_springUi.Chip, {
                key: tagId,
                label: (_tagLabelMap$tagId = tagLabelMap[tagId]) !== null && _tagLabelMap$tagId !== void 0 ? _tagLabelMap$tagId : tagId,
                clickable: true,
                onClick: function onClick() {
                  return handleToggleTag(tagId);
                },
                color: "default",
                size: "medium",
                className: (0, _clsx["default"])('typography-subtitleMini', active ? 'bg-neutral-b0' : 'bg-neutral-b4'),
                classes: {
                  label: active ? 'text-neutral-base' : ''
                },
                "data-sign": "feedback-tag",
                "data-tag": tagId
              });
            }))), /*#__PURE__*/_react["default"].createElement(_springUi.DialogActions, {
              className: "px-3"
            }, /*#__PURE__*/_react["default"].createElement(_springUi.Button, {
              variant: "outlined",
              color: "secondary",
              size: "medium",
              onClick: function onClick() {
                return handleClose(false);
              },
              "data-sign": "cancel-improve-btn"
            }, t('cancel')), /*#__PURE__*/_react["default"].createElement(_springUi.Button, {
              variant: "contained",
              color: "primary",
              size: "medium",
              onClick: handleSubmit,
              "data-sign": "submit-feedback-btn"
            }, t('submit'))));
          case 'thankYou':
            return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_springUi.DialogTitle, {
              className: "px-3"
            }, t('thankYouTitle')), /*#__PURE__*/_react["default"].createElement(_springUi.DialogContent, null, /*#__PURE__*/_react["default"].createElement(_springUi.Text, {
              component: "p",
              className: "typography-mainText text-neutral-b1",
              id: "thankyou-text"
            }, t('thankYouText', {
              application: application
            }))), /*#__PURE__*/_react["default"].createElement(_springUi.DialogActions, null, /*#__PURE__*/_react["default"].createElement(_springUi.Button, {
              variant: "outlined",
              color: "secondary",
              size: "medium",
              onClick: handleCancelThankYou,
              "data-sign": "cancel-thankyou-btn"
            }, t('cancel')), /*#__PURE__*/_react["default"].createElement(_springUi.Button, {
              variant: "contained",
              color: "primary",
              size: "medium",
              onClick: handleShareReview,
              "data-sign": "share-review-btn"
            }, t('shareReview'))));
          default:
            return null;
        }
      };
      return /*#__PURE__*/_react["default"].createElement(_springUi.Dialog, {
        open: open,
        disableBackdropClick: true,
        disableEscapeKeyDown: true,
        onClose: function onClose() {
          return handleClose(false);
        },
        size: "medium"
      }, renderStep());
    }
  }]);
}(_nextCore.RcViewModule), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "openTabIds", [_nextCore.state, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _applyDecoratedDescriptor(_class2.prototype, "_setTabOpen", [_nextCore.action, _dec7, _dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "_setTabOpen"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_setTabOpenOnServer", [_dec9, _dec0, _dec1], Object.getOwnPropertyDescriptor(_class2.prototype, "_setTabOpenOnServer"), _class2.prototype), _class2)) || _class) || _class) || _class) || _class) || _class);
//# sourceMappingURL=Feedback.view.js.map

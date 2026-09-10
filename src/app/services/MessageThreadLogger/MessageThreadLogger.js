"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.index-of.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.array.reverse.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.reflect.get.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageThreadLogger = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
var _services = require("@ringcentral-integration/micro-contacts/src/app/services");
var _services2 = require("@ringcentral-integration/micro-core/src/app/services");
var _nextCore = require("@ringcentral-integration/next-core");
var _MessageThread = require("../MessageThread");
var _excluded = ["conversationId", "correspondentEntity", "redirect"];
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec0, _dec1, _dec10, _class, _class2, _descriptor;
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
function formatThreadLogDate(creationTime) {
  var d = new Date(creationTime);
  return "".concat(d.getUTCFullYear(), "/").concat(d.getUTCMonth() + 1, "/").concat(d.getUTCDate());
}
function messageThreadLogIdentityFunction(item) {
  var _ref, _ref2, _item$conversationLog;
  return (_ref = (_ref2 = (_item$conversationLog = item.conversationLogId) !== null && _item$conversationLog !== void 0 ? _item$conversationLog : item.threadId) !== null && _ref2 !== void 0 ? _ref2 : item.id) !== null && _ref !== void 0 ? _ref : '';
}
var MessageThreadLogger = exports.MessageThreadLogger = (_dec = (0, _nextCore.injectable)({
  name: 'MessageThreadLogger'
}), _dec2 = function _dec2(target, key) {
  return (0, _nextCore.inject)('MessageThreadLoggerOptions')(target, undefined, 1);
}, _dec3 = function _dec3(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 3);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _MessageThread.MessageThread === "undefined" ? Object : _MessageThread.MessageThread, typeof MessageThreadLoggerOptions === "undefined" ? Object : MessageThreadLoggerOptions, typeof _nextCore.StoragePlugin === "undefined" ? Object : _nextCore.StoragePlugin, typeof _services.ContactMatcher === "undefined" ? Object : _services.ContactMatcher]), _dec6 = Reflect.metadata("design:type", Function), _dec7 = Reflect.metadata("design:paramtypes", []), _dec8 = Reflect.metadata("design:type", Function), _dec9 = Reflect.metadata("design:paramtypes", []), _dec0 = (0, _nextCore.delegate)('server'), _dec1 = Reflect.metadata("design:type", Function), _dec10 = Reflect.metadata("design:paramtypes", [Object]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (_class2 = /*#__PURE__*/function (_LoggerBase) {
  function MessageThreadLogger(_messageThread, _messageThreadLoggerOptions, _storage, _contactMatcher) {
    var _this$_contactMatcher;
    var _this;
    _classCallCheck(this, MessageThreadLogger);
    _this = _callSuper(this, MessageThreadLogger);
    _this._messageThread = _messageThread;
    _this._messageThreadLoggerOptions = _messageThreadLoggerOptions;
    _this._storage = _storage;
    _this._contactMatcher = _contactMatcher;
    _this._logFunction = _this._messageThreadLoggerOptions.logFunction;
    _this._readyCheckFunction = _this._messageThreadLoggerOptions.readyCheckFunction;
    _this._identityFunction = messageThreadLogIdentityFunction;
    _initializerDefineProperty(_this, "sharedSmsLogReminderDismissed", _descriptor, _this);
    _this._storage.enable(_this);
    (_this$_contactMatcher = _this._contactMatcher) === null || _this$_contactMatcher === void 0 ? void 0 : _this$_contactMatcher.addQuerySource({
      getQueriesFn: function getQueriesFn() {
        return _this.threadUniqueNumbers;
      },
      readyCheckFn: function readyCheckFn() {
        return _this._readyCheckFunction();
      }
    });
    return _this;
  }
  _inherits(MessageThreadLogger, _LoggerBase);
  return _createClass(MessageThreadLogger, [{
    key: "shouldShowSharedSmsLogReminder",
    get: function get() {
      return !this.sharedSmsLogReminderDismissed;
    }
  }, {
    key: "dismissSharedSmsLogReminder",
    value: function dismissSharedSmsLogReminder() {
      this.sharedSmsLogReminderDismissed = true;
    }
  }, {
    key: "_shouldInit",
    value: function _shouldInit() {
      return !!(_superPropGet(MessageThreadLogger, "_shouldInit", this, 3)([]) && this._readyCheckFunction());
    }
  }, {
    key: "_shouldReset",
    value: function _shouldReset() {
      return !!(_superPropGet(MessageThreadLogger, "_shouldReset", this, 3)([]) || this.ready && !this._readyCheckFunction());
    }
  }, {
    key: "threadMessageLogMap",
    get: function get() {
      var _this$_messageThread, _this$_messageThread$;
      var conversations = (_this$_messageThread = this._messageThread) === null || _this$_messageThread === void 0 ? void 0 : (_this$_messageThread$ = _this$_messageThread.threadConversationsInfo) === null || _this$_messageThread$ === void 0 ? void 0 : _this$_messageThread$.conversations;
      if (!(conversations !== null && conversations !== void 0 && conversations.length)) {
        return {};
      }
      var map = {};
      var _iterator = _createForOfIteratorHelper(conversations),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _c$creationTime, _c$conversationId, _date, _c$type;
          var c = _step.value;
          if (!c.conversationLogId) continue;
          var threadId = c.conversationLogId;
          var creationTime = (_c$creationTime = c.creationTime) !== null && _c$creationTime !== void 0 ? _c$creationTime : 0;
          var item = {
            conversationLogId: threadId,
            conversationId: (_c$conversationId = c.conversationId) !== null && _c$conversationId !== void 0 ? _c$conversationId : threadId,
            creationTime: creationTime,
            date: (_date = c.date) !== null && _date !== void 0 ? _date : formatThreadLogDate(creationTime),
            type: (_c$type = c.type) !== null && _c$type !== void 0 ? _c$type : 'Text',
            messages: this.getThreadLogMessages(threadId),
            conversationLogMatches: [],
            self: c.self,
            correspondents: c.correspondents
          };
          map[threadId] = item;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return map;
    }
  }, {
    key: "threadLogIds",
    get: function get() {
      var _this$_messageThread$2, _this$_messageThread2;
      return (_this$_messageThread$2 = (_this$_messageThread2 = this._messageThread) === null || _this$_messageThread2 === void 0 ? void 0 : _this$_messageThread2.conversationLogIds) !== null && _this$_messageThread$2 !== void 0 ? _this$_messageThread$2 : [];
    }
  }, {
    key: "threadUniqueNumbers",
    get: function get() {
      var _this$_messageThread$3, _this$_messageThread3;
      return (_this$_messageThread$3 = (_this$_messageThread3 = this._messageThread) === null || _this$_messageThread3 === void 0 ? void 0 : _this$_messageThread3.uniqueNumbers) !== null && _this$_messageThread$3 !== void 0 ? _this$_messageThread$3 : [];
    }
  }, {
    key: "getThreadLogMessages",
    value: function getThreadLogMessages(threadId) {
      var _this$_messageThread$4, _this$_messageThread4;
      return (_this$_messageThread$4 = (_this$_messageThread4 = this._messageThread) === null || _this$_messageThread4 === void 0 ? void 0 : _this$_messageThread4.getThreadLogMessages(threadId)) !== null && _this$_messageThread$4 !== void 0 ? _this$_messageThread$4 : [];
    }
  }, {
    key: "getThreadConversation",
    value: function getThreadConversation(threadId) {
      return this.threadMessageLogMap[threadId];
    }
  }, {
    key: "logConversation",
    value: function () {
      var _logConversation = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref3) {
        var conversationId, correspondentEntity, redirect, options, conversation;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              conversationId = _ref3.conversationId, correspondentEntity = _ref3.correspondentEntity, redirect = _ref3.redirect, options = _objectWithoutProperties(_ref3, _excluded);
              conversation = this.getThreadConversation(conversationId);
              if (conversation) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              _context.n = 2;
              return this.log(_objectSpread({
                item: conversation,
                correspondentEntity: correspondentEntity,
                redirect: redirect
              }, options));
            case 2:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function logConversation(_x) {
        return _logConversation.apply(this, arguments);
      }
      return logConversation;
    }()
  }]);
}(_services2.LoggerBase), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "sharedSmsLogReminderDismissed", [_nextCore.userStorage, _nextCore.state], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _applyDecoratedDescriptor(_class2.prototype, "dismissSharedSmsLogReminder", [_nextCore.action, _dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "dismissSharedSmsLogReminder"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "threadMessageLogMap", [_nextCore.computed, _dec8, _dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "threadMessageLogMap"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "logConversation", [_dec0, _dec1, _dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "logConversation"), _class2.prototype), _class2)) || _class) || _class) || _class) || _class) || _class);
//# sourceMappingURL=MessageThreadLogger.js.map

"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.reverse.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.reflect.get.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/web.dom-collections.for-each.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueueConversations = exports.ALL_CALL_QUEUES = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.array.sort.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.set.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _services = require("@ringcentral-integration/micro-auth/src/app/services");
var _services2 = require("@ringcentral-integration/micro-contacts/src/app/services");
var _services3 = require("@ringcentral-integration/micro-core/src/app/services");
var _services4 = require("@ringcentral-integration/micro-phone/src/app/services");
var _nextCore = require("@ringcentral-integration/next-core");
var _ConversationLogger = require("../ConversationLogger");
var _ConversationsBase2 = require("../Conversations/ConversationsBase");
var _MessageSender = require("../MessageSender");
var _SmsOptOut = require("../SmsOptOut");
var _QueueMessageStore = require("./QueueMessageStore");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec0, _dec1, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _class, _class2, _descriptor, _descriptor2;
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
var FAILED_MESSAGE_STATUSES = new Set(['SendingFailed', 'DeliveryFailed']);
var ALL_CALL_QUEUES = exports.ALL_CALL_QUEUES = 'all';
var QueueConversations = exports.QueueConversations = (_dec = (0, _nextCore.injectable)({
  name: 'QueueConversations'
}), _dec2 = function _dec2(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 10);
}, _dec3 = function _dec3(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 11);
}, _dec4 = function _dec4(target, key) {
  return (0, _nextCore.optional)('QueueConversationsOptions')(target, undefined, 12);
}, _dec5 = function _dec5(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 13);
}, _dec6 = Reflect.metadata("design:type", Function), _dec7 = Reflect.metadata("design:paramtypes", [typeof _services3.Toast === "undefined" ? Object : _services3.Toast, typeof _services.Auth === "undefined" ? Object : _services.Auth, typeof _services.Client === "undefined" ? Object : _services.Client, typeof _MessageSender.MessageSender === "undefined" ? Object : _MessageSender.MessageSender, typeof _services.ExtensionInfo === "undefined" ? Object : _services.ExtensionInfo, typeof _QueueMessageStore.QueueMessageStore === "undefined" ? Object : _QueueMessageStore.QueueMessageStore, typeof _services.AppFeatures === "undefined" ? Object : _services.AppFeatures, typeof _services.RegionSettings === "undefined" ? Object : _services.RegionSettings, typeof _services4.Grant === "undefined" ? Object : _services4.Grant, typeof _services4.CallQueues === "undefined" ? Object : _services4.CallQueues, typeof _services2.ContactMatcher === "undefined" ? Object : _services2.ContactMatcher, typeof _ConversationLogger.ConversationLogger === "undefined" ? Object : _ConversationLogger.ConversationLogger, typeof QueueConversationsOptions === "undefined" ? Object : QueueConversationsOptions, typeof _SmsOptOut.SmsOptOut === "undefined" ? Object : _SmsOptOut.SmsOptOut]), _dec8 = Reflect.metadata("design:type", typeof QueueConversationFilter === "undefined" ? Object : QueueConversationFilter), _dec9 = Reflect.metadata("design:type", Array), _dec0 = Reflect.metadata("design:type", Function), _dec1 = Reflect.metadata("design:paramtypes", []), _dec10 = Reflect.metadata("design:type", Function), _dec11 = Reflect.metadata("design:paramtypes", []), _dec12 = Reflect.metadata("design:type", Function), _dec13 = Reflect.metadata("design:paramtypes", []), _dec14 = Reflect.metadata("design:type", Function), _dec15 = Reflect.metadata("design:paramtypes", []), _dec16 = Reflect.metadata("design:type", Function), _dec17 = Reflect.metadata("design:paramtypes", []), _dec18 = Reflect.metadata("design:type", Function), _dec19 = Reflect.metadata("design:paramtypes", []), _dec20 = Reflect.metadata("design:type", Function), _dec21 = Reflect.metadata("design:paramtypes", []), _dec22 = Reflect.metadata("design:type", Function), _dec23 = Reflect.metadata("design:paramtypes", [typeof QueueConversationFilter === "undefined" ? Object : QueueConversationFilter]), _dec24 = Reflect.metadata("design:type", Function), _dec25 = Reflect.metadata("design:paramtypes", [Array]), _dec26 = Reflect.metadata("design:type", Function), _dec27 = Reflect.metadata("design:paramtypes", []), _dec28 = (0, _nextCore.delegate)('server'), _dec29 = Reflect.metadata("design:type", Function), _dec30 = Reflect.metadata("design:paramtypes", [typeof QueueConversationFilter === "undefined" ? Object : QueueConversationFilter]), _dec31 = (0, _nextCore.delegate)('server'), _dec32 = Reflect.metadata("design:type", Function), _dec33 = Reflect.metadata("design:paramtypes", [Array]), _dec34 = (0, _nextCore.delegate)('server'), _dec35 = Reflect.metadata("design:type", Function), _dec36 = Reflect.metadata("design:paramtypes", [String]), _dec37 = (0, _nextCore.delegate)('server'), _dec38 = Reflect.metadata("design:type", Function), _dec39 = Reflect.metadata("design:paramtypes", [typeof QueueConversationSearchFormUpdate === "undefined" ? Object : QueueConversationSearchFormUpdate]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = (_class2 = /*#__PURE__*/function (_ConversationsBase) {
  function QueueConversations(_toast, _auth, _client, _messageSender, _extensionInfo, _messageStore, _appFeatures, _regionSettings, _grant, _callQueues, _contactMatcher, _conversationLogger, _conversationsOptions, _smsOptOut) {
    var _this;
    _classCallCheck(this, QueueConversations);
    _this = _callSuper(this, QueueConversations, [_toast, _auth, _client, _messageSender, _extensionInfo, _messageStore, _appFeatures, _regionSettings, _contactMatcher, _conversationLogger, _objectSpread(_objectSpread({}, _conversationsOptions), {}, {
      enableLoadOldMessages: false
    }), _smsOptOut]);
    _this._toast = _toast;
    _this._auth = _auth;
    _this._client = _client;
    _this._messageSender = _messageSender;
    _this._extensionInfo = _extensionInfo;
    _this._messageStore = _messageStore;
    _this._appFeatures = _appFeatures;
    _this._regionSettings = _regionSettings;
    _this._grant = _grant;
    _this._callQueues = _callQueues;
    _this._contactMatcher = _contactMatcher;
    _this._conversationLogger = _conversationLogger;
    _this._conversationsOptions = _conversationsOptions;
    _this._smsOptOut = _smsOptOut;
    _initializerDefineProperty(_this, "filter", _descriptor, _this);
    _initializerDefineProperty(_this, "_selectedCallQueueIds", _descriptor2, _this);
    return _this;
  }
  _inherits(QueueConversations, _ConversationsBase);
  return _createClass(QueueConversations, [{
    key: "selectedCallQueueIds",
    get: function get() {
      var eligibleQueueIds = this.eligibleQueueIds;
      var selectedCallQueueIds = this._selectedCallQueueIds.filter(function (queueId) {
        return eligibleQueueIds.has(queueId);
      });
      if (selectedCallQueueIds.length === this.smsRecipientCallQueues.length) {
        return [];
      }
      return selectedCallQueueIds;
    }
  }, {
    key: "selectedCallQueueId",
    get: function get() {
      var _this$selectedCallQue;
      return (_this$selectedCallQue = this.selectedCallQueueIds[0]) !== null && _this$selectedCallQue !== void 0 ? _this$selectedCallQue : null;
    }
  }, {
    key: "_hasPermission",
    get: function get() {
      return Boolean(this._appFeatures.hasReadTextPermission && this.smsRecipientCallQueues.length > 0);
    }
  }, {
    key: "hasPermission",
    get: function get() {
      return this._hasPermission;
    }
  }, {
    key: "smsRecipientCallQueues",
    get: function get() {
      var _this2 = this;
      return this._grant.grants.reduce(function (queues, grant) {
        if (!grant.callQueueSmsRecipient) {
          return queues;
        }
        var extensionId = grant.extension.id;
        var queue = _this2._callQueues.getQueue(extensionId);
        if (queue && _this2._grant.isCallQueueExtensionById(extensionId)) {
          queues.push(queue);
        }
        return queues;
      }, []).sort(function (a, b) {
        return (a.name || a.extensionNumber).localeCompare(b.name || b.extensionNumber);
      });
    }
  }, {
    key: "eligibleQueueIds",
    get: function get() {
      return new Set(this.smsRecipientCallQueues.map(function (_ref) {
        var id = _ref.id;
        return id;
      }));
    }
  }, {
    key: "allConversations",
    get: function get() {
      var eligibleQueueIds = this.eligibleQueueIds;

      // must filter to ensure the conversations are from the eligible queues, because the user may have been removed from some queues, but the conversations still exist in the store
      return _superPropGet(QueueConversations, "allConversations", this, 1).filter(function (conversation) {
        var _owner;
        var ownerExtensionId = (_owner = conversation.owner) === null || _owner === void 0 ? void 0 : _owner.extensionId;
        return Boolean(ownerExtensionId && eligibleQueueIds.has(ownerExtensionId));
      });
    }
  }, {
    key: "callQueueSearchForm",
    get: function get() {
      return {
        searchInput: this.searchInput,
        filter: this.filter,
        selectedCallQueueIds: this.selectedCallQueueIds
      };
    }
  }, {
    key: "filteredConversations",
    get: function get() {
      var _this3 = this;
      var selectedCallQueueIds = this.selectedCallQueueIds;
      var filter = this.filter;
      return _superPropGet(QueueConversations, "filteredConversations", this, 1).filter(function (conversation) {
        var _owner2, _conversation$message;
        var ownerExtensionId = (_owner2 = conversation.owner) === null || _owner2 === void 0 ? void 0 : _owner2.extensionId;
        if (selectedCallQueueIds.length > 0 && (!ownerExtensionId || !selectedCallQueueIds.includes(ownerExtensionId))) {
          return false;
        }
        switch (filter) {
          case 'Unread':
            return conversation.unreadCounts > 0;
          case 'Draft':
            {
              var _inputContent$text, _inputContent$attachm;
              var inputContent = _this3.inputContents[String(conversation.conversationId)];
              return Boolean(conversation.messageStatus === 'Draft' || (inputContent === null || inputContent === void 0 ? void 0 : (_inputContent$text = inputContent.text) === null || _inputContent$text === void 0 ? void 0 : _inputContent$text.trim()) || (inputContent === null || inputContent === void 0 ? void 0 : (_inputContent$attachm = inputContent.attachments) === null || _inputContent$attachm === void 0 ? void 0 : _inputContent$attachm.length));
            }
          case 'Failed':
            return FAILED_MESSAGE_STATUSES.has((_conversation$message = conversation.messageStatus) !== null && _conversation$message !== void 0 ? _conversation$message : '');
          default:
            return true;
        }
      });
    }
  }, {
    key: "unreadCount",
    get: function get() {
      return this.formattedConversations.reduce(function (count, conversation) {
        return count + conversation.unreadCounts;
      }, 0);
    }
  }, {
    key: "getConversationQueue",
    value: function getConversationQueue(conversationId) {
      var extensionId = this.getConversationQueueExtensionId(conversationId);
      return extensionId ? this._callQueues.getQueue(extensionId) : undefined;
    }
  }, {
    key: "getConversationQueueExtensionId",
    value: function getConversationQueueExtensionId(conversationId) {
      var _owner3;
      var conversation = this.allConversationsMap.get(conversationId);
      var queueId = conversation === null || conversation === void 0 ? void 0 : (_owner3 = conversation.owner) === null || _owner3 === void 0 ? void 0 : _owner3.extensionId;
      return queueId;
    }
  }, {
    key: "_updateFilter",
    value: function _updateFilter(filter) {
      this.filter = filter;
      this.currentPage = 1;
    }
  }, {
    key: "_updateSelectedCallQueueIds",
    value: function _updateSelectedCallQueueIds(queueIds) {
      this._selectedCallQueueIds = _toConsumableArray(new Set(queueIds));
      this.currentPage = 1;
    }
  }, {
    key: "_resetCallQueueSearchForm",
    value: function _resetCallQueueSearchForm() {
      this.searchInput = '';
      this.filter = 'All';
      this._selectedCallQueueIds = [];
      this.currentPage = 1;
    }
  }, {
    key: "updateFilter",
    value: function () {
      var _updateFilter2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(filter) {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              this._updateFilter(filter);
            case 1:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function updateFilter(_x) {
        return _updateFilter2.apply(this, arguments);
      }
      return updateFilter;
    }()
  }, {
    key: "updateSelectedCallQueueIds",
    value: function () {
      var _updateSelectedCallQueueIds2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(queueIds) {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              this._updateSelectedCallQueueIds(queueIds);
            case 1:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function updateSelectedCallQueueIds(_x2) {
        return _updateSelectedCallQueueIds2.apply(this, arguments);
      }
      return updateSelectedCallQueueIds;
    }()
  }, {
    key: "updateSelectedCallQueueId",
    value: function () {
      var _updateSelectedCallQueueId = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(queueId) {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              this._updateSelectedCallQueueIds(queueId && queueId !== ALL_CALL_QUEUES ? [queueId] : []);
            case 1:
              return _context3.a(2);
          }
        }, _callee3, this);
      }));
      function updateSelectedCallQueueId(_x3) {
        return _updateSelectedCallQueueId.apply(this, arguments);
      }
      return updateSelectedCallQueueId;
    }()
  }, {
    key: "updateCallQueueSearchForm",
    value: function () {
      var _updateCallQueueSearchForm = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(updates) {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              if (!(updates === 'reset')) {
                _context4.n = 1;
                break;
              }
              this._resetCallQueueSearchForm();
              return _context4.a(2);
            case 1:
              if (updates.searchInput !== undefined) {
                this._updateSearchInput(updates.searchInput);
              }
              if (updates.filter !== undefined) {
                this._updateFilter(updates.filter);
              }
              if (updates.selectedCallQueueIds !== undefined) {
                this._updateSelectedCallQueueIds(updates.selectedCallQueueIds);
              }
            case 2:
              return _context4.a(2);
          }
        }, _callee4, this);
      }));
      function updateCallQueueSearchForm(_x4) {
        return _updateCallQueueSearchForm.apply(this, arguments);
      }
      return updateCallQueueSearchForm;
    }()
  }, {
    key: "onInitOnce",
    value: function onInitOnce() {
      var _this4 = this;
      _superPropGet(QueueConversations, "onInitOnce", this, 3)([]);
      (0, _nextCore.watch)(this, function () {
        return "".concat(_this4._selectedCallQueueIds.join(','), ":").concat(_toConsumableArray(_this4.eligibleQueueIds).join(','));
      }, function () {
        var validQueueIds = _this4._selectedCallQueueIds.filter(function (queueId) {
          return _this4.eligibleQueueIds.has(queueId);
        });
        if (validQueueIds.length !== _this4._selectedCallQueueIds.length) {
          _this4._updateSelectedCallQueueIds(validQueueIds);
        }
      });
    }
  }, {
    key: "onReset",
    value: function onReset() {
      _superPropGet(QueueConversations, "onReset", this, 3)([]);
      this._resetCallQueueSearchForm();
    }
  }]);
}(_ConversationsBase2.ConversationsBase), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "filter", [_nextCore.state, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 'All';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_selectedCallQueueIds", [_nextCore.state, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _applyDecoratedDescriptor(_class2.prototype, "selectedCallQueueIds", [_nextCore.computed, _dec0, _dec1], Object.getOwnPropertyDescriptor(_class2.prototype, "selectedCallQueueIds"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "smsRecipientCallQueues", [_nextCore.computed, _dec10, _dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "smsRecipientCallQueues"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "eligibleQueueIds", [_nextCore.computed, _dec12, _dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "eligibleQueueIds"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "allConversations", [_nextCore.computed, _dec14, _dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "allConversations"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "callQueueSearchForm", [_nextCore.computed, _dec16, _dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "callQueueSearchForm"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "filteredConversations", [_nextCore.computed, _dec18, _dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "filteredConversations"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "unreadCount", [_nextCore.computed, _dec20, _dec21], Object.getOwnPropertyDescriptor(_class2.prototype, "unreadCount"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_updateFilter", [_nextCore.action, _dec22, _dec23], Object.getOwnPropertyDescriptor(_class2.prototype, "_updateFilter"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_updateSelectedCallQueueIds", [_nextCore.action, _dec24, _dec25], Object.getOwnPropertyDescriptor(_class2.prototype, "_updateSelectedCallQueueIds"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "_resetCallQueueSearchForm", [_nextCore.action, _dec26, _dec27], Object.getOwnPropertyDescriptor(_class2.prototype, "_resetCallQueueSearchForm"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "updateFilter", [_dec28, _dec29, _dec30], Object.getOwnPropertyDescriptor(_class2.prototype, "updateFilter"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "updateSelectedCallQueueIds", [_dec31, _dec32, _dec33], Object.getOwnPropertyDescriptor(_class2.prototype, "updateSelectedCallQueueIds"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "updateSelectedCallQueueId", [_dec34, _dec35, _dec36], Object.getOwnPropertyDescriptor(_class2.prototype, "updateSelectedCallQueueId"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "updateCallQueueSearchForm", [_dec37, _dec38, _dec39], Object.getOwnPropertyDescriptor(_class2.prototype, "updateCallQueueSearchForm"), _class2.prototype), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
//# sourceMappingURL=QueueConversations.js.map

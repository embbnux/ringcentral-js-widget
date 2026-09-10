"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConversationAlert = void 0;
var _services = require("@ringcentral-integration/micro-auth/src/app/services");
var _services2 = require("@ringcentral-integration/micro-phone/src/app/services");
var _nextCore = require("@ringcentral-integration/next-core");
var _react = _interopRequireDefault(require("react"));
var _services3 = require("../../services");
var _SmsConsentDialogView = require("../SmsConsentDialogView");
var _ConversationPanel = require("./ConversationPanel");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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
var ConversationAlert = exports.ConversationAlert = (_dec = (0, _nextCore.injectable)({
  name: 'ConversationAlert'
}), _dec2 = function _dec2(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 4);
}, _dec3 = function _dec3(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 5);
}, _dec4 = function _dec4(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 6);
}, _dec5 = function _dec5(target, key) {
  return (0, _nextCore.optional)()(target, undefined, 7);
}, _dec6 = function _dec6(target, key) {
  return (0, _nextCore.optional)('ConversationViewOptions')(target, undefined, 8);
}, _dec7 = Reflect.metadata("design:type", Function), _dec8 = Reflect.metadata("design:paramtypes", [typeof _services3.MessageSender === "undefined" ? Object : _services3.MessageSender, typeof _services.NumberFormatter === "undefined" ? Object : _services.NumberFormatter, typeof _services3.QueueConversations === "undefined" ? Object : _services3.QueueConversations, typeof _services2.Grant === "undefined" ? Object : _services2.Grant, typeof _services3.SmsOptOut === "undefined" ? Object : _services3.SmsOptOut, typeof _services3.MessageThread === "undefined" ? Object : _services3.MessageThread, typeof _services3.SmsConsent === "undefined" ? Object : _services3.SmsConsent, typeof _SmsConsentDialogView.SmsConsentDialogView === "undefined" ? Object : _SmsConsentDialogView.SmsConsentDialogView, typeof ConversationViewSpringOptions === "undefined" ? Object : ConversationViewSpringOptions]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = /*#__PURE__*/function (_RcModule) {
  function ConversationAlert(_messageSender, _numberFormatter, _queueConversations, _grant, _smsOptOut, _messageThread, _smsConsent, _smsConsentDialogView, _conversationViewOptions) {
    var _this;
    _classCallCheck(this, ConversationAlert);
    _this = _callSuper(this, ConversationAlert);
    _this._messageSender = _messageSender;
    _this._numberFormatter = _numberFormatter;
    _this._queueConversations = _queueConversations;
    _this._grant = _grant;
    _this._smsOptOut = _smsOptOut;
    _this._messageThread = _messageThread;
    _this._smsConsent = _smsConsent;
    _this._smsConsentDialogView = _smsConsentDialogView;
    _this._conversationViewOptions = _conversationViewOptions;
    return _this;
  }
  _inherits(ConversationAlert, _RcModule);
  return _createClass(ConversationAlert, [{
    key: "_getConversationSenderPhoneNumber",
    value: function _getConversationSenderPhoneNumber(conversation) {
      var _conversation$from, _conversation$from2, _conversation$to, _conversation$to$, _conversation$to2, _conversation$to2$;
      if (!conversation) {
        return undefined;
      }
      return conversation.direction === 'Outbound' ? ((_conversation$from = conversation.from) === null || _conversation$from === void 0 ? void 0 : _conversation$from.phoneNumber) || ((_conversation$from2 = conversation.from) === null || _conversation$from2 === void 0 ? void 0 : _conversation$from2.extensionNumber) : ((_conversation$to = conversation.to) === null || _conversation$to === void 0 ? void 0 : (_conversation$to$ = _conversation$to[0]) === null || _conversation$to$ === void 0 ? void 0 : _conversation$to$.phoneNumber) || ((_conversation$to2 = conversation.to) === null || _conversation$to2 === void 0 ? void 0 : (_conversation$to2$ = _conversation$to2[0]) === null || _conversation$to2$ === void 0 ? void 0 : _conversation$to2$.extensionNumber);
    }
  }, {
    key: "getMovedToSharedTabInfo",
    value: function getMovedToSharedTabInfo(conversation) {
      var _this$_messageThread;
      var phoneNumber = this._getConversationSenderPhoneNumber(conversation);
      if (!this._messageThread || !phoneNumber || !((_this$_messageThread = this._messageThread) !== null && _this$_messageThread !== void 0 && _this$_messageThread.hasPermission)) {
        return null;
      }
      var shouldSendShared = this._messageThread.isSharedSmsSenderNumber(phoneNumber);
      if (!shouldSendShared) {
        return null;
      }
      var queueExtensionId = this._queueConversations.getConversationQueueExtensionId(conversation === null || conversation === void 0 ? void 0 : conversation.conversationId);
      var isQueueSiteExtension = !!queueExtensionId && this._grant.isSharedSmsRecipientGrant(queueExtensionId);

      // Queue conversations can only continue on shared numbers.
      if (isQueueSiteExtension && !shouldSendShared) {
        return null;
      }
      return {
        phoneNumber: this._numberFormatter.formatNumber(phoneNumber)
      };
    }

    /**
     * Check if the conversation's phone number has SMS capability
     */
  }, {
    key: "getSmsSentCapability",
    value: function getSmsSentCapability(conversation) {
      if (!conversation ||
      // in backend when be pager type of conversation, that not have sender permission check, that be internal, always have capability
      conversation.type === 'Pager') {
        return {
          hasCapability: true
        };
      }
      var phoneNumber = this._getConversationSenderPhoneNumber(conversation);
      if (!phoneNumber) {
        return {
          hasCapability: true
        };
      }
      var formattedPhoneNumber = this._numberFormatter.formatNumber(phoneNumber);
      var hasCapability = this._messageSender.senderNumberMap.has(formattedPhoneNumber);
      return {
        hasCapability: hasCapability,
        phoneNumber: formattedPhoneNumber
      };
    }

    /**
     * Get alert information for a conversation
     */
  }, {
    key: "getAlertInfo",
    value: function getAlertInfo(conversation) {
      var _this$_smsConsent,
        _this$_smsOptOut,
        _this2 = this,
        _this$_conversationVi3,
        _this$_conversationVi4;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _ref = ((_this$_smsConsent = this._smsConsent) === null || _this$_smsConsent === void 0 ? void 0 : _this$_smsConsent.getConsentStatusForConversation(conversation)) || {},
        consentOptOut = _ref.isOptOut,
        requiredOptInLoss = _ref.requiredOptInLoss;
      var isOptOut = Boolean(((_this$_smsOptOut = this._smsOptOut) === null || _this$_smsOptOut === void 0 ? void 0 : _this$_smsOptOut.getIsOptOutConversation(conversation)) || consentOptOut);
      var movedToSharedTabInfo = options.onReplyInSharedTab ? this.getMovedToSharedTabInfo(conversation) : null;
      var smsCapabilityCheck = this.getSmsSentCapability(conversation);
      var notHasSmsCapability = !smsCapabilityCheck.hasCapability;
      var smsPermissionReason = this._messageSender.smsPermissionReason;
      var alertProps;
      if (smsPermissionReason === 'noComposePermission') {
        alertProps = {
          children: /*#__PURE__*/_react["default"].createElement(_ConversationPanel.SmsAccountCapabilityAlertContent, {
            reason: smsPermissionReason,
            readOnly: true,
            showIcon: true
          }),
          severity: 'info'
        };
      } else if (notHasSmsCapability && smsCapabilityCheck.phoneNumber) {
        alertProps = {
          children: /*#__PURE__*/_react["default"].createElement(_ConversationPanel.SmsCapabilityAlert, {
            phoneNumber: smsCapabilityCheck.phoneNumber
          }),
          severity: 'info'
        };
      } else if (movedToSharedTabInfo) {
        alertProps = {
          children: /*#__PURE__*/_react["default"].createElement(_ConversationPanel.MovedToSharedTabAlert, {
            phoneNumber: movedToSharedTabInfo.phoneNumber,
            onReplyInSharedTab: options.onReplyInSharedTab
          }),
          severity: 'info'
        };
      } else if (isOptOut) {
        alertProps = {
          children: /*#__PURE__*/_react["default"].createElement(_ConversationPanel.OptOutAlert, null),
          severity: 'warning'
        };
      } else if (requiredOptInLoss) {
        var _this$_smsConsent2;
        alertProps = {
          children: /*#__PURE__*/_react["default"].createElement(_ConversationPanel.SmsConsentRequiredAlert, {
            canAddConsent: (_this$_smsConsent2 = this._smsConsent) === null || _this$_smsConsent2 === void 0 ? void 0 : _this$_smsConsent2.canAddConsent,
            onAddConsentClick: function onAddConsentClick() {
              var numbers = (0, _services3.getConversationNumbers)(conversation);
              if (numbers) {
                var _this2$_smsConsentDia;
                (_this2$_smsConsentDia = _this2._smsConsentDialogView) === null || _this2$_smsConsentDia === void 0 ? void 0 : _this2$_smsConsentDia.openAddConsentDialog({
                  numbers: numbers,
                  consentEntry: 'Text conversation'
                });
              }
            }
          }),
          severity: 'info'
        };
      } else {
        var _this$_conversationVi, _this$_conversationVi2;
        alertProps = (_this$_conversationVi = this._conversationViewOptions) === null || _this$_conversationVi === void 0 ? void 0 : (_this$_conversationVi2 = _this$_conversationVi.alertProps) === null || _this$_conversationVi2 === void 0 ? void 0 : _this$_conversationVi2.call(_this$_conversationVi);
      }
      return {
        showAlert: !!movedToSharedTabInfo || isOptOut || requiredOptInLoss || !!smsPermissionReason || notHasSmsCapability || ((_this$_conversationVi3 = this._conversationViewOptions) === null || _this$_conversationVi3 === void 0 ? void 0 : (_this$_conversationVi4 = _this$_conversationVi3.showAlert) === null || _this$_conversationVi4 === void 0 ? void 0 : _this$_conversationVi4.call(_this$_conversationVi3)) || false,
        alertProps: alertProps
      };
    }
  }]);
}(_nextCore.RcModule)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
//# sourceMappingURL=ConversationAlert.js.map

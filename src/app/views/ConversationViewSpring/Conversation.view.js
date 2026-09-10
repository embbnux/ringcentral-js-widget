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
require("core-js/modules/es.object.assign.js");
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
exports.ConversationViewSpring = void 0;
var _nextCore = require("@ringcentral-integration/next-core");
var _react = _interopRequireDefault(require("react"));
var _services = require("../../services");
var _PersonalConversation = require("./PersonalConversation.view");
var _QueueConversation = require("./QueueConversation.view");
var _SharedConversation = require("./SharedConversation.view");
var _dec, _dec2, _dec3, _class;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
var ConversationViewSpring = exports.ConversationViewSpring = (_dec = (0, _nextCore.injectable)({
  name: 'ConversationViewSpring'
}), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", [typeof _PersonalConversation.PersonalConversationViewSpring === "undefined" ? Object : _PersonalConversation.PersonalConversationViewSpring, typeof _QueueConversation.QueueConversationView === "undefined" ? Object : _QueueConversation.QueueConversationView, typeof _services.QueueConversations === "undefined" ? Object : _services.QueueConversations, typeof _services.MessageThread === "undefined" ? Object : _services.MessageThread, typeof _SharedConversation.SharedConversationView === "undefined" ? Object : _SharedConversation.SharedConversationView]), _dec(_class = _dec2(_class = _dec3(_class = /*#__PURE__*/function (_RcViewModule) {
  function ConversationViewSpring(_personalConversationView, _queueConversationView, _queueConversations, _messageThread, _sharedConversationView) {
    var _this;
    _classCallCheck(this, ConversationViewSpring);
    _this = _callSuper(this, ConversationViewSpring);
    _this._personalConversationView = _personalConversationView;
    _this._queueConversationView = _queueConversationView;
    _this._queueConversations = _queueConversations;
    _this._messageThread = _messageThread;
    _this._sharedConversationView = _sharedConversationView;
    return _this;
  }
  _inherits(ConversationViewSpring, _RcViewModule);
  return _createClass(ConversationViewSpring, [{
    key: "component",
    value: function component(props) {
      var _this2 = this;
      var _useParams = (0, _nextCore.useParams)(),
        conversationId = _useParams.conversationId;
      var isThread = (0, _nextCore.useConnector)(function () {
        if (!conversationId) return false;
        return _this2._messageThread.isThreadId(conversationId);
      });
      var isQueueConversation = (0, _nextCore.useConnector)(function () {
        if (!conversationId) return false;
        return _this2._queueConversations.formattedConversationsMap.has(conversationId);
      });
      if (isThread) {
        return /*#__PURE__*/_react["default"].createElement(this._sharedConversationView.component, _extends({
          conversationId: conversationId
        }, props));
      }
      if (isQueueConversation) {
        return /*#__PURE__*/_react["default"].createElement(this._queueConversationView.component, props);
      }
      return /*#__PURE__*/_react["default"].createElement(this._personalConversationView.component, props);
    }
  }]);
}(_nextCore.RcViewModule)) || _class) || _class) || _class);
//# sourceMappingURL=Conversation.view.js.map

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _formatNumber2 = require('ringcentral-integration/lib/formatNumber');

var _formatNumber3 = _interopRequireDefault(_formatNumber2);

var _ConversationPanel = require('../../components/ConversationPanel');

var _ConversationPanel2 = _interopRequireDefault(_ConversationPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConversationPage = function (_Component) {
  (0, _inherits3.default)(ConversationPage, _Component);

  function ConversationPage() {
    (0, _classCallCheck3.default)(this, ConversationPage);
    return (0, _possibleConstructorReturn3.default)(this, (ConversationPage.__proto__ || (0, _getPrototypeOf2.default)(ConversationPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(ConversationPage, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _this2 = this;

      return {
        formatPhone: this.props.formatNumber,
        changeDefaultRecipient: this.props.changeDefaultRecipient,
        changeMatchedNames: this.props.changeMatchedNames,
        getRecipientName: function getRecipientName(recipient) {
          return _this2.getRecipientName(recipient);
        },
        getMatcherContactList: this.props.getMatcherContactList,
        getMatcherContactNameList: this.props.getMatcherContactNameList
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadConversation();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.unloadConversation();
    }
  }, {
    key: 'getRecipientName',
    value: function getRecipientName(recipient) {
      var phoneNumber = recipient.phoneNumber || recipient.extensionNumber;
      if (phoneNumber && this.props.getMatcherContactName) {
        var matcherName = this.props.getMatcherContactName(phoneNumber);
        if (matcherName) {
          return matcherName;
        }
        return this.props.formatNumber(phoneNumber);
      }
      if (recipient.name) {
        return recipient.name;
      }
      return this.props.formatNumber(phoneNumber);
    }
  }, {
    key: 'loadConversation',
    value: function loadConversation() {
      var id = this.props.conversationId;
      this.props.loadConversationById(id);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_ConversationPanel2.default, {
        countryCode: this.props.countryCode,
        areaCode: this.props.areaCode,
        disableLinks: this.props.disableLinks,
        conversationId: this.props.conversationId,
        currentLocale: this.props.currentLocale,
        messages: this.props.messages,
        conversation: this.props.conversation,
        onLogConversation: this.props.onLogConversation,
        isLoggedContact: this.props.isLoggedContact,
        recipients: this.props.recipients,
        showSpinner: this.props.showSpinner,
        replyToReceivers: this.props.replyToReceivers,
        sendButtonDisabled: this.props.sendButtonDisabled,
        autoLog: this.props.autoLog,
        dateTimeFormatter: this.props.dateTimeFormatter
      });
    }
  }]);
  return ConversationPage;
}(_react.Component);

ConversationPage.propTypes = {
  conversationId: _react.PropTypes.string.isRequired,
  currentLocale: _react.PropTypes.string.isRequired,
  sendButtonDisabled: _react.PropTypes.bool.isRequired,
  showSpinner: _react.PropTypes.bool.isRequired,
  messages: _ConversationPanel2.default.propTypes.messages,
  recipients: _ConversationPanel2.default.propTypes.recipients,
  replyToReceivers: _react.PropTypes.func.isRequired,
  unloadConversation: _react.PropTypes.func.isRequired,
  loadConversationById: _react.PropTypes.func.isRequired,
  changeDefaultRecipient: _react.PropTypes.func.isRequired,
  formatNumber: _react.PropTypes.func.isRequired,
  getMatcherContactName: _react.PropTypes.func,
  getMatcherContactList: _react.PropTypes.func,
  getMatcherContactNameList: _react.PropTypes.func,
  changeMatchedNames: _react.PropTypes.func.isRequired,
  dateTimeFormatter: _react.PropTypes.func.isRequired
};

ConversationPage.defaultProps = {
  getMatcherContactName: null,
  getMatcherContactList: function getMatcherContactList() {
    return [];
  },
  getMatcherContactNameList: function getMatcherContactNameList() {
    return [];
  }
};

ConversationPage.childContextTypes = {
  formatPhone: _react.PropTypes.func.isRequired,
  getRecipientName: _react.PropTypes.func.isRequired,
  changeDefaultRecipient: _react.PropTypes.func.isRequired,
  changeMatchedNames: _react.PropTypes.func.isRequired,
  getMatcherContactList: _react.PropTypes.func.isRequired,
  getMatcherContactNameList: _react.PropTypes.func.isRequired
};

function mapToProps(_, _ref) {
  var locale = _ref.locale,
      params = _ref.params,
      conversation = _ref.conversation,
      conversationLogger = _ref.conversationLogger,
      dateTimeFormat = _ref.dateTimeFormat,
      contactMatcher = _ref.contactMatcher,
      regionSettings = _ref.regionSettings,
      messages = _ref.messages,
      rateLimiter = _ref.rateLimiter,
      connectivityMonitor = _ref.connectivityMonitor,
      _ref$enableContactFal = _ref.enableContactFallback,
      enableContactFallback = _ref$enableContactFal === undefined ? false : _ref$enableContactFal;

  return {
    enableContactFallback: enableContactFallback,
    currentLocale: locale.currentLocale,
    conversationId: params.conversationId,
    sendButtonDisabled: conversation.pushing,
    areaCode: regionSettings.areaCode,
    countryCode: regionSettings.countryCode,
    showSpinner: !(dateTimeFormat.ready && (!contactMatcher || contactMatcher.ready) && conversation.ready && regionSettings.ready && messages.ready && rateLimiter.ready && connectivityMonitor.ready && conversationLogger.ready),
    recipients: conversation.recipients,
    messages: conversation.messages,
    conversation: messages.allConversations.find(function (item) {
      return item.conversationId === params.conversationId;
    }),
    disableLinks: rateLimiter.isThrottling || !connectivityMonitor.connectivity,
    autoLog: conversationLogger.autoLog
  };
}

function mapToFunctions(_, _ref2) {
  var _this3 = this;

  var contactMatcher = _ref2.contactMatcher,
      conversation = _ref2.conversation,
      dateTimeFormat = _ref2.dateTimeFormat,
      _ref2$dateTimeFormatt = _ref2.dateTimeFormatter,
      dateTimeFormatter = _ref2$dateTimeFormatt === undefined ? function () {
    return dateTimeFormat.formatDateTime.apply(dateTimeFormat, arguments);
  } : _ref2$dateTimeFormatt,
      regionSettings = _ref2.regionSettings,
      isLoggedContact = _ref2.isLoggedContact,
      conversationLogger = _ref2.conversationLogger,
      onLogConversation = _ref2.onLogConversation;

  var getMatcherContactName = void 0;
  var getMatcherContactList = void 0;
  var getMatcherContactNameList = void 0;
  if (contactMatcher && contactMatcher.ready) {
    getMatcherContactList = function getMatcherContactList(phoneNumber) {
      var matcherNames = contactMatcher.dataMapping[phoneNumber];
      if (matcherNames && matcherNames.length > 0) {
        return matcherNames.map(function (matcher) {
          return matcher.name + ' | ' + matcher.phoneNumbers[0].phoneType;
        });
      }
      return [];
    };
    getMatcherContactNameList = function getMatcherContactNameList(phoneNumber) {
      var matcherNames = contactMatcher.dataMapping[phoneNumber];
      if (matcherNames && matcherNames.length > 0) {
        return matcherNames.map(function (matcher) {
          return matcher.name;
        });
      }
      return [];
    };
    getMatcherContactName = function getMatcherContactName(phoneNumber) {
      var matcherNames = getMatcherContactNameList(phoneNumber);
      if (matcherNames && matcherNames.length > 0) {
        return matcherNames.join('&');
      }
      return null;
    };
  }

  return {
    replyToReceivers: conversation.replyToReceivers,
    changeDefaultRecipient: conversation.changeDefaultRecipient,
    changeMatchedNames: conversation.changeMatchedNames,
    unloadConversation: function unloadConversation() {
      return conversation.unloadConversation();
    },
    loadConversationById: function loadConversationById(id) {
      return conversation.loadConversationById(id);
    },
    dateTimeFormatter: dateTimeFormatter,
    formatNumber: function formatNumber(phoneNumber) {
      return (0, _formatNumber3.default)({
        phoneNumber: phoneNumber,
        areaCode: regionSettings.areaCode,
        countryCode: regionSettings.countryCode
      });
    },
    getMatcherContactName: getMatcherContactName,
    getMatcherContactList: getMatcherContactList,
    getMatcherContactNameList: getMatcherContactNameList,
    isLoggedContact: isLoggedContact,
    onLogConversation: onLogConversation || conversationLogger && function () {
      var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref4) {
        var _ref4$redirect = _ref4.redirect,
            redirect = _ref4$redirect === undefined ? true : _ref4$redirect,
            options = (0, _objectWithoutProperties3.default)(_ref4, ['redirect']);
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return conversationLogger.logConversation((0, _extends3.default)({}, options, {
                  redirect: redirect
                }));

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this3);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }()
  };
}

exports.default = (0, _reactRedux.connect)(mapToProps, mapToFunctions)(ConversationPage);
//# sourceMappingURL=index.js.map

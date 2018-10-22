'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DynamicsFont = require('../../assets/DynamicsFont/DynamicsFont.scss');

var _DynamicsFont2 = _interopRequireDefault(_DynamicsFont);

var _Spinner = require('../Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _ConversationMessageList = require('../ConversationMessageList');

var _ConversationMessageList2 = _interopRequireDefault(_ConversationMessageList);

var _LogButton = require('../LogButton');

var _LogButton2 = _interopRequireDefault(_LogButton);

var _ContactDisplay = require('../ContactDisplay');

var _ContactDisplay2 = _interopRequireDefault(_ContactDisplay);

var _MessageInput = require('../MessageInput');

var _MessageInput2 = _interopRequireDefault(_MessageInput);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConversationPanel = function (_Component) {
  (0, _inherits3.default)(ConversationPanel, _Component);

  function ConversationPanel(props) {
    (0, _classCallCheck3.default)(this, ConversationPanel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ConversationPanel.__proto__ || (0, _getPrototypeOf2.default)(ConversationPanel)).call(this, props));

    _this.onSend = function () {
      _this.props.replyToReceivers(_this.props.messageText);
    };

    _this.onInputHeightChange = function (value) {
      _this.setState({
        inputHeight: value
      });
    };

    _this.onSelectContact = function (value, idx) {
      var selected = _this.props.showContactDisplayPlaceholder ? parseInt(idx, 10) - 1 : parseInt(idx, 10);
      _this._userSelection = true;
      _this.setState({
        selected: selected
      });
      if (_this.props.autoLog) {
        _this.logConversation({ redirect: false, selected: selected, prefill: false });
      }
    };

    _this.getSelectedContact = function () {
      var selected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.selected;

      if (!_this.props.conversation) {
        return null;
      }
      var contactMatches = _this.props.conversation.correspondentMatches;
      return selected > -1 && contactMatches[selected] || contactMatches.length === 1 && contactMatches[0] || null;
    };

    _this.logConversation = _this.logConversation.bind(_this);

    _this.state = {
      selected: _this.getInitialContactIndex(),
      isLogging: false,
      inputHeight: 63,
      loaded: false
    };
    _this._userSelection = false;
    return _this;
  }

  (0, _createClass3.default)(ConversationPanel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadConversation();
      this._mounted = true;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this._userSelection && this.props.conversation && nextProps.conversation && (nextProps.conversation.conversationMatches !== this.props.conversation.conversationMatches || nextProps.conversation.correspondentMatches !== this.props.conversation.correspondentMatches)) {
        this.setState({
          selected: this.getInitialContactIndex(nextProps)
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.messages !== this.props.messages) {
        this.props.readMessages(this.props.conversationId);
      }
      if (prevState.loaded === false && this.state.loaded === true) {
        if (this.props.messages.length < this.props.perPage) {
          this.props.loadPreviousMessages();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._mounted = false;
      this.props.unloadConversation();
    }
  }, {
    key: 'getMessageListHeight',
    value: function getMessageListHeight() {
      var headerHeight = 41;
      return 'calc(100% - ' + (this.state.inputHeight + headerHeight) + 'px)';
    }
  }, {
    key: 'getInitialContactIndex',
    value: function getInitialContactIndex() {
      var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var _nextProps$conversati = nextProps.conversation,
          correspondentMatches = _nextProps$conversati.correspondentMatches,
          lastMatchedCorrespondentEntity = _nextProps$conversati.lastMatchedCorrespondentEntity,
          conversationMatches = _nextProps$conversati.conversationMatches;

      var index = null;
      var correspondentMatchId = lastMatchedCorrespondentEntity && lastMatchedCorrespondentEntity.id || conversationMatches[0] && conversationMatches[0].id;
      if (correspondentMatchId) {
        index = correspondentMatches.findIndex(function (contact) {
          return contact.id === correspondentMatchId;
        });
        if (index > -1) return index;
      }
      return -1;
    }
  }, {
    key: 'getPhoneNumber',
    value: function getPhoneNumber() {
      var _props$conversation = this.props.conversation;
      _props$conversation = _props$conversation === undefined ? {} : _props$conversation;
      var _props$conversation$c = _props$conversation.correspondents,
          correspondents = _props$conversation$c === undefined ? [] : _props$conversation$c;

      return correspondents.length === 1 && (correspondents[0].phoneNumber || correspondents[0].extensionNumber) || undefined;
    }
  }, {
    key: 'getGroupPhoneNumbers',
    value: function getGroupPhoneNumbers() {
      var _props$conversation2 = this.props.conversation;
      _props$conversation2 = _props$conversation2 === undefined ? {} : _props$conversation2;
      var _props$conversation2$ = _props$conversation2.correspondents,
          correspondents = _props$conversation2$ === undefined ? [] : _props$conversation2$;

      var groupNumbers = correspondents.length > 1 ? correspondents.map(function (correspondent) {
        return correspondent.extensionNumber || correspondent.phoneNumber || undefined;
      }) : null;
      return groupNumbers;
    }
  }, {
    key: 'getFallbackContactName',
    value: function getFallbackContactName() {
      var _props$conversation3 = this.props.conversation;
      _props$conversation3 = _props$conversation3 === undefined ? {} : _props$conversation3;
      var _props$conversation3$ = _props$conversation3.correspondents,
          correspondents = _props$conversation3$ === undefined ? [] : _props$conversation3$;

      return correspondents.length === 1 && correspondents[0].name || undefined;
    }
  }, {
    key: 'loadConversation',
    value: function loadConversation() {
      this.props.loadConversation(this.props.conversationId);
      this.setState({ loaded: true });
    }
  }, {
    key: 'logConversation',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref2$redirect = _ref2.redirect,
            redirect = _ref2$redirect === undefined ? true : _ref2$redirect,
            selected = _ref2.selected,
            _ref2$prefill = _ref2.prefill,
            prefill = _ref2$prefill === undefined ? true : _ref2$prefill;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof this.props.onLogConversation === 'function' && this._mounted && !this.state.isLogging)) {
                  _context.next = 5;
                  break;
                }

                this.setState({
                  isLogging: true
                });
                _context.next = 4;
                return this.props.onLogConversation({
                  correspondentEntity: this.getSelectedContact(selected),
                  conversationId: this.props.conversation.conversationId,
                  redirect: redirect,
                  prefill: prefill
                });

              case 4:
                if (this._mounted) {
                  this.setState({
                    isLogging: false
                  });
                }

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function logConversation() {
        return _ref.apply(this, arguments);
      }

      return logConversation;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.state.loaded) {
        return null;
      }
      var conversationBody = null;
      var loading = this.props.showSpinner;
      var _props = this.props,
          recipients = _props.recipients,
          messageSubjectRenderer = _props.messageSubjectRenderer;

      if (loading) {
        conversationBody = _react2.default.createElement(
          'div',
          { className: _styles2.default.spinerContainer },
          _react2.default.createElement(_Spinner2.default, null)
        );
      } else {
        conversationBody = _react2.default.createElement(_ConversationMessageList2.default, {
          currentLocale: this.props.currentLocale,
          height: this.getMessageListHeight(),
          messages: this.props.messages,
          className: _styles2.default.conversationBody,
          dateTimeFormatter: this.props.dateTimeFormatter,
          showSender: recipients && recipients.length > 1,
          messageSubjectRenderer: messageSubjectRenderer,
          formatPhone: this.props.formatPhone,
          loadingNextPage: this.props.loadingNextPage,
          loadPreviousMessages: this.props.loadPreviousMessages
        });
      }
      var _props$conversation4 = this.props.conversation,
          isLogging = _props$conversation4.isLogging,
          conversationMatches = _props$conversation4.conversationMatches,
          correspondentMatches = _props$conversation4.correspondentMatches;

      var groupNumbers = this.getGroupPhoneNumbers();
      var phoneNumber = this.getPhoneNumber();
      var fallbackName = this.getFallbackContactName();
      var extraButton = this.props.renderExtraButton ? this.props.renderExtraButton(this.props.conversation, {
        logConversation: this.logConversation,
        isLogging: isLogging || this.state.isLogging
      }) : null;
      var logButton = this.props.onLogConversation && !this.props.renderExtraButton ? _react2.default.createElement(_LogButton2.default, {
        className: _styles2.default.logButton,
        onLog: this.logConversation,
        disableLinks: this.props.disableLinks,
        isLogged: conversationMatches.length > 0,
        isLogging: isLogging || this.state.isLogging,
        currentLocale: this.props.currentLocale
      }) : null;
      return _react2.default.createElement(
        'div',
        { className: _styles2.default.root },
        _react2.default.createElement(
          'div',
          { className: _styles2.default.header },
          _react2.default.createElement(_ContactDisplay2.default, {
            brand: this.props.brand,
            className: _styles2.default.contactDisplay,
            selectClassName: _styles2.default.contactDisplaySelect,
            contactMatches: correspondentMatches || [],
            selected: this.state.selected,
            onSelectContact: this.onSelectContact,
            disabled: this.props.disableLinks,
            isLogging: isLogging || this.state.isLogging,
            fallBackName: fallbackName,
            areaCode: this.props.areaCode,
            countryCode: this.props.countryCode,
            phoneNumber: phoneNumber,
            groupNumbers: groupNumbers,
            showType: false,
            currentLocale: this.props.currentLocale,
            enableContactFallback: this.props.enableContactFallback,
            showPlaceholder: this.props.showContactDisplayPlaceholder,
            sourceIcons: this.props.sourceIcons,
            showGroupNumberName: this.props.showGroupNumberName
          }),
          _react2.default.createElement(
            'a',
            {
              onClick: function onClick() {
                return _this2.props.goBack();
              },
              className: _styles2.default.backButton
            },
            _react2.default.createElement('span', { className: _DynamicsFont2.default.arrow })
          ),
          extraButton && _react2.default.createElement(
            'div',
            { className: _styles2.default.logButton },
            extraButton
          ),
          logButton
        ),
        conversationBody,
        _react2.default.createElement(_MessageInput2.default, {
          value: this.props.messageText,
          onChange: this.props.updateMessageText,
          disabled: this.props.sendButtonDisabled,
          currentLocale: this.props.currentLocale,
          onSend: this.onSend,
          onHeightChange: this.onInputHeightChange,
          inputExpandable: this.props.inputExpandable
        })
      );
    }
  }]);
  return ConversationPanel;
}(_react.Component);

ConversationPanel.propTypes = {
  brand: _propTypes2.default.string.isRequired,
  replyToReceivers: _propTypes2.default.func.isRequired,
  messages: _ConversationMessageList2.default.propTypes.messages,
  updateMessageText: _propTypes2.default.func,
  messageText: _propTypes2.default.string,
  recipients: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    phoneNumber: _propTypes2.default.string,
    extensionNumber: _propTypes2.default.string,
    name: _propTypes2.default.string
  })).isRequired,
  sendButtonDisabled: _propTypes2.default.bool.isRequired,
  currentLocale: _propTypes2.default.string.isRequired,
  showSpinner: _propTypes2.default.bool.isRequired,
  disableLinks: _propTypes2.default.bool,
  conversation: _propTypes2.default.object.isRequired,
  onLogConversation: _propTypes2.default.func,
  areaCode: _propTypes2.default.string.isRequired,
  countryCode: _propTypes2.default.string.isRequired,
  autoLog: _propTypes2.default.bool,
  enableContactFallback: _propTypes2.default.bool,
  dateTimeFormatter: _propTypes2.default.func.isRequired,
  goBack: _propTypes2.default.func.isRequired,
  showContactDisplayPlaceholder: _propTypes2.default.bool,
  sourceIcons: _propTypes2.default.object,
  showGroupNumberName: _propTypes2.default.bool,
  messageSubjectRenderer: _propTypes2.default.func,
  formatPhone: _propTypes2.default.func.isRequired,
  readMessages: _propTypes2.default.func.isRequired,
  loadPreviousMessages: _propTypes2.default.func.isRequired,
  unloadConversation: _propTypes2.default.func.isRequired,
  perPage: _propTypes2.default.number,
  conversationId: _propTypes2.default.string.isRequired,
  loadConversation: _propTypes2.default.func,
  renderExtraButton: _propTypes2.default.func,
  loadingNextPage: _propTypes2.default.bool,
  inputExpandable: _propTypes2.default.bool
};
ConversationPanel.defaultProps = {
  disableLinks: false,
  onLogConversation: undefined,
  autoLog: false,
  enableContactFallback: undefined,
  showContactDisplayPlaceholder: true,
  sourceIcons: undefined,
  showGroupNumberName: false,
  messageText: '',
  updateMessageText: function updateMessageText() {
    return null;
  },
  messageSubjectRenderer: undefined,
  perPage: undefined,
  loadConversation: function loadConversation() {
    return null;
  },
  renderExtraButton: undefined,
  loadingNextPage: false,
  inputExpandable: undefined
};

exports.default = ConversationPanel;
//# sourceMappingURL=index.js.map

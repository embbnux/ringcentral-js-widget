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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

var _RecipientsInput = require('../RecipientsInput');

var _RecipientsInput2 = _interopRequireDefault(_RecipientsInput);

var _SpinnerOverlay = require('../SpinnerOverlay');

var _SpinnerOverlay2 = _interopRequireDefault(_SpinnerOverlay);

var _NoSenderAlert = require('./NoSenderAlert');

var _NoSenderAlert2 = _interopRequireDefault(_NoSenderAlert);

var _FromField = require('../FromField');

var _FromField2 = _interopRequireDefault(_FromField);

var _MessageInput = require('../MessageInput');

var _MessageInput2 = _interopRequireDefault(_MessageInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComposeTextPanel = function (_Component) {
  (0, _inherits3.default)(ComposeTextPanel, _Component);

  function ComposeTextPanel(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, ComposeTextPanel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ComposeTextPanel.__proto__ || (0, _getPrototypeOf2.default)(ComposeTextPanel)).call(this, props));

    _this.state = {
      messageText: props.messageText
    };

    _this.onSenderChange = function (value) {
      _this.props.updateSenderNumber(value);
    };

    _this.cleanReceiverValue = function () {
      _this.props.cleanTypingToNumber();
    };

    _this.addToRecipients = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(receiver) {
        var shouldClean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var isAdded;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.props.addToNumber(receiver);

              case 2:
                isAdded = _context.sent;

                if (isAdded && shouldClean) {
                  _this.props.cleanTypingToNumber();
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.removeFromRecipients = function (phoneNumber) {
      _this.props.removeToNumber({ phoneNumber: phoneNumber });
    };
    return _this;
  }

  (0, _createClass3.default)(ComposeTextPanel, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.messageText !== this.state.messageText) {
        this.setState({
          messageText: nextProps.messageText
        });
      }
    }
  }, {
    key: 'hasSenderNumbers',
    value: function hasSenderNumbers() {
      return this.props.senderNumbers.length > 0;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(_styles2.default.root, this.props.className) },
        this.props.showSpinner ? _react2.default.createElement(_SpinnerOverlay2.default, null) : null,
        _react2.default.createElement(_NoSenderAlert2.default, {
          currentLocale: this.props.currentLocale,
          outboundSMS: this.props.outboundSMS,
          hasSenderNumbers: this.hasSenderNumbers(),
          brand: this.props.brand
        }),
        _react2.default.createElement(_RecipientsInput2.default, {
          value: this.props.typingToNumber,
          recipientsClassName: _styles2.default.recipients,
          onChange: this.props.updateTypingToNumber,
          onClean: this.cleanReceiverValue,
          recipients: this.props.toNumbers,
          addToRecipients: this.addToRecipients,
          removeFromRecipients: this.removeFromRecipients,
          searchContact: this.props.searchContact,
          searchContactList: this.props.searchContactList,
          formatContactPhone: this.props.formatContactPhone,
          currentLocale: this.props.currentLocale,
          phoneTypeRenderer: this.props.phoneTypeRenderer,
          phoneSourceNameRenderer: this.props.phoneSourceNameRenderer,
          contactInfoRenderer: this.props.recipientsContactInfoRenderer,
          contactPhoneRenderer: this.props.recipientsContactPhoneRenderer,
          titleEnabled: true,
          autoFocus: this.props.autoFocus,
          multiple: true
        }),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.senderField },
          _react2.default.createElement(_FromField2.default, {
            currentLocale: this.props.currentLocale,
            fromNumber: this.props.senderNumber,
            fromNumbers: this.props.senderNumbers,
            formatPhone: this.props.formatPhone,
            onChange: this.onSenderChange,
            hidden: !this.hasSenderNumbers(),
            showAnonymous: false
          })
        ),
        _react2.default.createElement(_MessageInput2.default, {
          value: this.props.messageText,
          onChange: this.props.updateMessageText,
          disabled: this.props.sendButtonDisabled,
          currentLocale: this.props.currentLocale,
          onSend: this.props.send,
          inputExpandable: this.props.inputExpandable
        })
      );
    }
  }]);
  return ComposeTextPanel;
}(_react.Component);

ComposeTextPanel.propTypes = {
  brand: _propTypes2.default.string,
  className: _propTypes2.default.string,
  send: _propTypes2.default.func.isRequired,
  senderNumbers: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    phoneNumber: _propTypes2.default.string.isRequired
  })).isRequired,
  sendButtonDisabled: _propTypes2.default.bool.isRequired,
  formatPhone: _propTypes2.default.func.isRequired,
  formatContactPhone: _propTypes2.default.func.isRequired,
  searchContact: _propTypes2.default.func.isRequired,
  searchContactList: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    entityType: _propTypes2.default.string.isRequired,
    phoneType: _propTypes2.default.string.isRequired,
    phoneNumber: _propTypes2.default.string.isRequired
  })).isRequired,
  currentLocale: _propTypes2.default.string.isRequired,
  updateSenderNumber: _propTypes2.default.func.isRequired,
  updateTypingToNumber: _propTypes2.default.func.isRequired,
  cleanTypingToNumber: _propTypes2.default.func.isRequired,
  addToNumber: _propTypes2.default.func.isRequired,
  removeToNumber: _propTypes2.default.func.isRequired,
  updateMessageText: _propTypes2.default.func.isRequired,
  messageText: _propTypes2.default.string,
  typingToNumber: _propTypes2.default.string,
  senderNumber: _propTypes2.default.string,
  toNumbers: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    phoneNumber: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string
  })).isRequired,
  outboundSMS: _propTypes2.default.bool,
  showSpinner: _propTypes2.default.bool,
  phoneTypeRenderer: _propTypes2.default.func,
  phoneSourceNameRenderer: _propTypes2.default.func,
  recipientsContactInfoRenderer: _propTypes2.default.func,
  recipientsContactPhoneRenderer: _propTypes2.default.func,
  autoFocus: _propTypes2.default.bool,
  inputExpandable: _propTypes2.default.bool
};

ComposeTextPanel.defaultProps = {
  brand: 'RingCentral',
  className: null,
  messageText: '',
  typingToNumber: '',
  senderNumber: '',
  outboundSMS: false,
  showSpinner: false,
  phoneTypeRenderer: undefined,
  phoneSourceNameRenderer: undefined,
  recipientsContactInfoRenderer: undefined,
  recipientsContactPhoneRenderer: undefined,
  autoFocus: false,
  inputExpandable: undefined
};

exports.default = ComposeTextPanel;
//# sourceMappingURL=index.js.map

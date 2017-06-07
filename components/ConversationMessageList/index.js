'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Message(_ref) {
  var subject = _ref.subject,
      time = _ref.time,
      direction = _ref.direction,
      sender = _ref.sender;

  return _react2.default.createElement(
    'div',
    { className: _styles2.default.message },
    time ? _react2.default.createElement(
      'div',
      { className: _styles2.default.time },
      time
    ) : null,
    sender && direction === 'Inbound' ? _react2.default.createElement(
      'div',
      { className: _styles2.default.sender },
      sender
    ) : null,
    _react2.default.createElement(
      'div',
      {
        className: (0, _classnames2.default)(_styles2.default.messageBody, direction === 'Outbound' ? _styles2.default.outbound : _styles2.default.inbound, subject && subject.length > 500 && _styles2.default.big) },
      subject
    ),
    _react2.default.createElement('div', { className: _styles2.default.clear })
  );
}

Message.propTypes = {
  direction: _react.PropTypes.string.isRequired,
  subject: _react.PropTypes.string,
  time: _react.PropTypes.string,
  sender: _react.PropTypes.string
};

Message.defaultProps = {
  subject: '',
  sender: undefined,
  time: undefined
};

var ConversationMessageList = function (_Component) {
  (0, _inherits3.default)(ConversationMessageList, _Component);

  function ConversationMessageList() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ConversationMessageList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = ConversationMessageList.__proto__ || (0, _getPrototypeOf2.default)(ConversationMessageList)).call.apply(_ref2, [this].concat(args))), _this), _this.scrollToLastMessage = function () {
      if (_this.conversationBody) {
        _this.conversationBody.scrollTop = _this.conversationBody.scrollHeight;
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ConversationMessageList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scrollToLastMessage();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(previousProps) {
      if (previousProps.messages.length !== this.props.messages.length) {
        this.scrollToLastMessage();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          dateTimeFormatter = _props.dateTimeFormatter,
          messages = _props.messages,
          showSender = _props.showSender;


      var lastDate = 0;
      var messageList = messages.map(function (message) {
        var sender = showSender ? messages.from.name || _this2.context.formatPhone(message.from.extensionNumber || message.from.phoneNumber) : null;
        var date = new Date(message.creationTime);
        var time = date - lastDate < 60 * 60 * 1000 && date.getHours() === lastDate.getHours() ? null : dateTimeFormatter({ utcTimestamp: message.creationTime, type: 'long' });
        lastDate = date;
        return _react2.default.createElement(Message, {
          key: message.id,
          sender: sender,
          time: time,
          direction: message.direction,
          subject: message.subject
        });
      });
      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(_styles2.default.root, className),
          ref: function ref(body) {
            _this2.conversationBody = body;
          }
        },
        messageList
      );
    }
  }]);
  return ConversationMessageList;
}(_react.Component);

ConversationMessageList.propTypes = {
  messages: _react2.default.PropTypes.arrayOf(_react.PropTypes.shape({
    creationTime: _react.PropTypes.string,
    id: _react.PropTypes.number,
    direction: _react.PropTypes.string,
    subject: _react.PropTypes.string
  })).isRequired,
  className: _react.PropTypes.string,
  showSender: _react.PropTypes.bool,
  dateTimeFormatter: _react.PropTypes.func.isRequired
};

ConversationMessageList.defaultProps = {
  className: null,
  showSender: false
};

ConversationMessageList.contextTypes = {
  formatPhone: _react.PropTypes.func.isRequired
};

exports.default = ConversationMessageList;
//# sourceMappingURL=index.js.map

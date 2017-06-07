'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IncomingCallPanel;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ActiveCallUserInfo = require('../ActiveCallUserInfo');

var _ActiveCallUserInfo2 = _interopRequireDefault(_ActiveCallUserInfo);

var _IncomingCallPad = require('../IncomingCallPad');

var _IncomingCallPad2 = _interopRequireDefault(_IncomingCallPad);

var _DynamicsFont = require('../../assets/DynamicsFont/DynamicsFont.scss');

var _DynamicsFont2 = _interopRequireDefault(_DynamicsFont);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IncomingCallPanel(props) {
  return _react2.default.createElement(
    'div',
    { className: _styles2.default.root },
    _react2.default.createElement(_ActiveCallUserInfo2.default, {
      name: props.userName,
      phoneNumber: props.phoneNumber,
      currentLocale: props.currentLocale,
      className: _styles2.default.userInfo,
      formatPhone: props.formatPhone,
      avatar: _react2.default.createElement(
        'div',
        { className: _styles2.default.avatarHolder },
        _react2.default.createElement('div', { className: (0, _classnames2.default)(_styles2.default.ringOutside, _styles2.default.ringing) }),
        _react2.default.createElement('div', { className: (0, _classnames2.default)(_styles2.default.ringInner, _styles2.default.ringing) }),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.avatar },
          _react2.default.createElement('i', { className: (0, _classnames2.default)(_DynamicsFont2.default.portrait, _styles2.default.icon) })
        )
      )
    }),
    _react2.default.createElement(_IncomingCallPad2.default, {
      answer: props.answer,
      reject: props.reject,
      toVoiceMail: props.toVoiceMail,
      replyWithMessage: props.replyWithMessage
    }),
    props.children
  );
}

IncomingCallPanel.propTypes = {
  userName: _react.PropTypes.string,
  currentLocale: _react.PropTypes.string.isRequired,
  phoneNumber: _react.PropTypes.string,
  answer: _react.PropTypes.func.isRequired,
  reject: _react.PropTypes.func.isRequired,
  toVoiceMail: _react.PropTypes.func.isRequired,
  replyWithMessage: _react.PropTypes.func.isRequired,
  children: _react.PropTypes.node,
  formatPhone: _react.PropTypes.func.isRequired
};

IncomingCallPanel.defaultProps = {
  userName: null,
  phoneNumber: null,
  children: undefined
};
//# sourceMappingURL=index.js.map

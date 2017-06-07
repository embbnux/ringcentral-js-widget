'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IncomingCallPad;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ActiveCallButton = require('../ActiveCallButton');

var _ActiveCallButton2 = _interopRequireDefault(_ActiveCallButton);

var _RcFont = require('../../assets/RcFont/RcFont.scss');

var _RcFont2 = _interopRequireDefault(_RcFont);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IncomingCallPad(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: _styles2.default.buttonRow },
      _react2.default.createElement(
        _ActiveCallButton2.default,
        {
          onClick: function onClick() {
            return null;
          },
          title: 'Forward'
        },
        _react2.default.createElement('i', { className: _RcFont2.default.icon_collapse })
      ),
      _react2.default.createElement(
        _ActiveCallButton2.default,
        {
          onClick: function onClick() {
            return null;
          },
          title: 'Reply'
        },
        _react2.default.createElement('i', { className: _RcFont2.default.RC_Sms_pressed })
      ),
      _react2.default.createElement(
        _ActiveCallButton2.default,
        {
          onClick: props.reject,
          title: 'Ignore'
        },
        _react2.default.createElement('i', { className: _RcFont2.default.uni43 })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _styles2.default.buttonRow },
      _react2.default.createElement(
        _ActiveCallButton2.default,
        {
          onClick: props.toVoiceMail,
          title: 'To Voicemail',
          buttonClassName: _styles2.default.rejectButton
        },
        _react2.default.createElement('i', { className: _RcFont2.default.uniA8 })
      ),
      _react2.default.createElement(
        _ActiveCallButton2.default,
        {
          onClick: props.answer,
          title: 'Answer',
          buttonClassName: _styles2.default.answerButton
        },
        _react2.default.createElement('i', { className: _RcFont2.default.icon_call })
      )
    )
  );
}

IncomingCallPad.propTypes = {
  answer: _react.PropTypes.func.isRequired,
  reject: _react.PropTypes.func.isRequired,
  toVoiceMail: _react.PropTypes.func.isRequired
};
//# sourceMappingURL=index.js.map

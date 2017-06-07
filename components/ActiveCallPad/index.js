'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ActiveCallPad;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _ActiveCallButton = require('../ActiveCallButton');

var _ActiveCallButton2 = _interopRequireDefault(_ActiveCallButton);

var _RcFont = require('../../assets/RcFont/RcFont.scss');

var _RcFont2 = _interopRequireDefault(_RcFont);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ActiveCallPad(props) {
  var muteButton = props.isOnMute ? _react2.default.createElement(
    _ActiveCallButton2.default,
    {
      onClick: props.onUnmute,
      title: 'Unmute'
    },
    _react2.default.createElement('i', { className: _RcFont2.default.uniCE })
  ) : _react2.default.createElement(
    _ActiveCallButton2.default,
    {
      onClick: props.onMute,
      title: 'Mute'
    },
    _react2.default.createElement('i', { className: _RcFont2.default.uni7B })
  );
  var onHoldClicked = props.isOnHold ? props.onUnhold : props.onHold;
  var onRecordClicked = props.isOnRecord ? props.onStopRecord : props.onRecord;
  return _react2.default.createElement(
    'div',
    { className: props.className },
    _react2.default.createElement(
      'div',
      { className: _styles2.default.buttonRow },
      muteButton,
      _react2.default.createElement(
        _ActiveCallButton2.default,
        {
          onClick: props.onShowKeyPad,
          title: 'Keypad'
        },
        _react2.default.createElement('i', { className: _RcFont2.default.uniA4 })
      ),
      _react2.default.createElement(
        _ActiveCallButton2.default,
        {
          onClick: function onClick() {
            return null;
          },
          title: 'Audio'
        },
        _react2.default.createElement('i', { className: _RcFont2.default.uni2496 })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _styles2.default.buttonRow },
      _react2.default.createElement(
        _ActiveCallButton2.default,
        {
          onClick: onHoldClicked,
          title: 'Hold',
          active: props.isOnHold
        },
        _react2.default.createElement('i', { className: _RcFont2.default.uni2474 })
      ),
      _react2.default.createElement(
        _ActiveCallButton2.default,
        {
          onClick: onRecordClicked,
          title: props.isOnRecord ? 'Stop' : 'Record',
          active: props.isOnRecord
        },
        _react2.default.createElement('i', { className: _RcFont2.default.icon_radio_off })
      ),
      _react2.default.createElement(
        _ActiveCallButton2.default,
        {
          onClick: props.onAdd,
          title: 'Add'
        },
        _react2.default.createElement('i', { className: _RcFont2.default.ActionButtons_Add })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _styles2.default.buttonRow },
      _react2.default.createElement(
        _ActiveCallButton2.default,
        {
          onClick: function onClick() {
            return null;
          },
          title: 'Transfer'
        },
        _react2.default.createElement('i', { className: _RcFont2.default['icon-transfer'] })
      ),
      _react2.default.createElement(
        _ActiveCallButton2.default,
        {
          onClick: function onClick() {
            return null;
          },
          title: 'Park'
        },
        _react2.default.createElement('i', { className: _RcFont2.default.uni2E })
      ),
      _react2.default.createElement(
        _ActiveCallButton2.default,
        {
          onClick: function onClick() {
            return null;
          },
          title: 'Flip'
        },
        _react2.default.createElement('i', { className: _RcFont2.default['icon-flip'] })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _styles2.default.buttonRow },
      _react2.default.createElement(
        _Button2.default,
        {
          className: (0, _classnames2.default)(_styles2.default.button, _styles2.default.stopButton),
          onClick: props.hangup,
          disabled: false
        },
        _react2.default.createElement('i', { className: _RcFont2.default.uni44 })
      )
    )
  );
}

ActiveCallPad.propTypes = {
  className: _react.PropTypes.string,
  isOnMute: _react.PropTypes.bool,
  isOnHold: _react.PropTypes.bool,
  isOnRecord: _react.PropTypes.bool,
  onMute: _react.PropTypes.func.isRequired,
  onUnmute: _react.PropTypes.func.isRequired,
  onHold: _react.PropTypes.func.isRequired,
  onUnhold: _react.PropTypes.func.isRequired,
  onRecord: _react.PropTypes.func.isRequired,
  onStopRecord: _react.PropTypes.func.isRequired,
  hangup: _react.PropTypes.func.isRequired,
  onShowKeyPad: _react.PropTypes.func.isRequired,
  onAdd: _react.PropTypes.func.isRequired
};

ActiveCallPad.defaultProps = {
  className: null,
  isOnMute: false,
  isOnHold: false,
  isOnRecord: false
};
//# sourceMappingURL=index.js.map

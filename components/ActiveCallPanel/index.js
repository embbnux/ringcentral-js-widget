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

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Badge = require('../Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _Draggable = require('../Draggable');

var _Draggable2 = _interopRequireDefault(_Draggable);

var _DurationCounter = require('../DurationCounter');

var _DurationCounter2 = _interopRequireDefault(_DurationCounter);

var _DynamicsFont = require('../../assets/DynamicsFont/DynamicsFont.scss');

var _DynamicsFont2 = _interopRequireDefault(_DynamicsFont);

var _RcFont = require('../../assets/RcFont/RcFont.scss');

var _RcFont2 = _interopRequireDefault(_RcFont);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

var _i18n = require('./i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ContactUser(props) {
  var name = props.name || _i18n2.default.getString('unkonw', props.currentLocale);
  return _react2.default.createElement(
    'div',
    { className: _styles2.default.user },
    _react2.default.createElement(
      'div',
      { className: _styles2.default.userAvatar },
      _react2.default.createElement('i', { className: _DynamicsFont2.default.portrait })
    ),
    _react2.default.createElement(
      'div',
      { className: _styles2.default.userPhoneNumber },
      props.phoneNumber
    ),
    _react2.default.createElement(
      'div',
      { className: _styles2.default.userName },
      name
    )
  );
}

ContactUser.propTypes = {
  name: _react.PropTypes.string,
  phoneNumber: _react.PropTypes.string.isRequired,
  currentLocale: _react.PropTypes.string.isRequired
};

ContactUser.defaultProps = {
  name: null
};

function OperationButton(props) {
  var className = (0, _classnames2.default)(_styles2.default.operationButton, props.className);
  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(
      _Button2.default,
      {
        className: _styles2.default.button,
        onClick: props.onClick,
        disabled: props.disabled
      },
      props.children
    ),
    _react2.default.createElement(
      'div',
      { className: _styles2.default.buttonTitle },
      props.title
    )
  );
}

OperationButton.propTypes = {
  className: _react.PropTypes.string,
  onClick: _react.PropTypes.func.isRequired,
  disabled: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  title: _react.PropTypes.string.isRequired
};

OperationButton.defaultProps = {
  className: undefined,
  disabled: false,
  children: undefined
};

var ActiveCallPanel = function (_Component) {
  (0, _inherits3.default)(ActiveCallPanel, _Component);

  function ActiveCallPanel(props) {
    (0, _classCallCheck3.default)(this, ActiveCallPanel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ActiveCallPanel.__proto__ || (0, _getPrototypeOf2.default)(ActiveCallPanel)).call(this, props));

    _this.state = {
      minimized: false,
      badgeOffsetX: 0,
      badgeOffsetY: 0,
      connectedAt: new Date()
    };

    _this.updatePositionOffset = function (x, y) {
      _this.setState({
        badgeOffsetX: x,
        badgeOffsetY: y
      });
    };
    return _this;
  }

  (0, _createClass3.default)(ActiveCallPanel, [{
    key: 'render',
    value: function render() {
      if (!this.props.active) {
        return null;
      }

      if (this.props.minimized) {
        return _react2.default.createElement(
          _Draggable2.default,
          {
            className: _styles2.default.draggable,
            onClick: this.props.toggleMinimized,
            positionOffsetX: this.state.badgeOffsetX,
            positionOffsetY: this.state.badgeOffsetY,
            updatePositionOffset: this.updatePositionOffset
          },
          _react2.default.createElement(
            _Badge2.default,
            {
              className: _styles2.default.phoneBage,
              name: 'active-call'
            },
            _react2.default.createElement(
              'span',
              { className: _styles2.default.activeIcon },
              _react2.default.createElement('i', { className: _DynamicsFont2.default.active })
            ),
            'Calling'
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { className: _styles2.default.root },
        _react2.default.createElement(
          _Button2.default,
          {
            className: _styles2.default.minimizeButton,
            onClick: this.props.toggleMinimized
          },
          _react2.default.createElement('i', { className: _DynamicsFont2.default.close })
        ),
        _react2.default.createElement(
          'span',
          { className: _styles2.default.connectStatus },
          _react2.default.createElement('i', { className: _RcFont2.default.uniBD })
        ),
        _react2.default.createElement(
          'span',
          { className: _styles2.default.timeCounter },
          _react2.default.createElement(_DurationCounter2.default, { startTime: this.state.connectedAt })
        ),
        _react2.default.createElement(ContactUser, {
          name: this.props.userName,
          phoneNumber: this.props.phoneNumber,
          currentLocale: this.props.currentLocale
        }),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.buttonRow },
          _react2.default.createElement(
            OperationButton,
            {
              onClick: function onClick() {
                return null;
              },
              title: 'Mute'
            },
            _react2.default.createElement('i', { className: _RcFont2.default.uni7B })
          ),
          _react2.default.createElement(
            OperationButton,
            {
              onClick: function onClick() {
                return null;
              },
              title: 'Keypad'
            },
            _react2.default.createElement('i', { className: _RcFont2.default.uniA4 })
          ),
          _react2.default.createElement(
            OperationButton,
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
            OperationButton,
            {
              onClick: function onClick() {
                return null;
              },
              title: 'Hold'
            },
            _react2.default.createElement('i', { className: _RcFont2.default.uni2474 })
          ),
          _react2.default.createElement(
            OperationButton,
            {
              onClick: function onClick() {
                return null;
              },
              title: 'Record'
            },
            _react2.default.createElement('i', { className: _RcFont2.default.icon_radio_off })
          ),
          _react2.default.createElement(
            OperationButton,
            {
              onClick: function onClick() {
                return null;
              },
              title: 'Add'
            },
            _react2.default.createElement('i', { className: _RcFont2.default.ActionButtons_Add })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.buttonRow },
          _react2.default.createElement(
            OperationButton,
            {
              onClick: function onClick() {
                return null;
              },
              title: 'Transfer'
            },
            _react2.default.createElement('i', { className: _RcFont2.default['icon-transfer'] })
          ),
          _react2.default.createElement(
            OperationButton,
            {
              onClick: function onClick() {
                return null;
              },
              title: 'Park'
            },
            _react2.default.createElement('i', { className: _RcFont2.default.uni2E })
          ),
          _react2.default.createElement(
            OperationButton,
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
              onClick: this.props.hangup,
              disabled: false
            },
            _react2.default.createElement('i', { className: _RcFont2.default.uni44 })
          )
        )
      );
    }
  }]);
  return ActiveCallPanel;
}(_react.Component);

ActiveCallPanel.propTypes = {
  active: _react.PropTypes.bool.isRequired,
  hangup: _react.PropTypes.func.isRequired,
  minimized: _react.PropTypes.bool.isRequired,
  toggleMinimized: _react.PropTypes.func.isRequired,
  phoneNumber: _react.PropTypes.string.isRequired,
  userName: _react.PropTypes.string,
  currentLocale: _react.PropTypes.string.isRequired
};

ActiveCallPanel.defaultProps = {
  userName: null
};

exports.default = ActiveCallPanel;
//# sourceMappingURL=index.js.map

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

var _BackHeader = require('../BackHeader');

var _BackHeader2 = _interopRequireDefault(_BackHeader);

var _Panel = require('../Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _DurationCounter = require('../DurationCounter');

var _DurationCounter2 = _interopRequireDefault(_DurationCounter);

var _ActiveCallUserInfo = require('../ActiveCallUserInfo');

var _ActiveCallUserInfo2 = _interopRequireDefault(_ActiveCallUserInfo);

var _ActiveCallPad = require('../ActiveCallPad');

var _ActiveCallPad2 = _interopRequireDefault(_ActiveCallPad);

var _ActiveCallDialPad = require('../ActiveCallDialPad');

var _ActiveCallDialPad2 = _interopRequireDefault(_ActiveCallDialPad);

var _DynamicsFont = require('../../assets/DynamicsFont/DynamicsFont.scss');

var _DynamicsFont2 = _interopRequireDefault(_DynamicsFont);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActiveCallPanel = function (_Component) {
  (0, _inherits3.default)(ActiveCallPanel, _Component);

  function ActiveCallPanel(props) {
    (0, _classCallCheck3.default)(this, ActiveCallPanel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ActiveCallPanel.__proto__ || (0, _getPrototypeOf2.default)(ActiveCallPanel)).call(this, props));

    _this.state = {
      isShowKeyPad: false
    };

    _this.hiddenKeyPad = function () {
      _this.setState({
        isShowKeyPad: false
      });
    };

    _this.showKeyPad = function () {
      _this.setState({
        isShowKeyPad: true
      });
    };
    return _this;
  }

  (0, _createClass3.default)(ActiveCallPanel, [{
    key: 'render',
    value: function render() {
      var timeCounter = this.props.startTime ? _react2.default.createElement(
        'span',
        { className: _styles2.default.timeCounter },
        _react2.default.createElement(_DurationCounter2.default, { startTime: this.props.startTime })
      ) : null;
      var userInfo = this.state.isShowKeyPad ? null : _react2.default.createElement(_ActiveCallUserInfo2.default, {
        name: this.props.userName,
        phoneNumber: this.props.phoneNumber,
        currentLocale: this.props.currentLocale,
        formatPhone: this.props.formatPhone,
        className: _styles2.default.userInfo,
        avatar: _react2.default.createElement(
          'div',
          { className: _styles2.default.avatar },
          _react2.default.createElement('i', { className: (0, _classnames2.default)(_DynamicsFont2.default.portrait, _styles2.default.icon) })
        )
      });
      var buttonsPad = this.state.isShowKeyPad ? null : _react2.default.createElement(_ActiveCallPad2.default, {
        isOnMute: this.props.isOnMute,
        isOnHold: this.props.isOnHold,
        isOnRecord: this.props.isOnRecord,
        onMute: this.props.onMute,
        onUnmute: this.props.onUnmute,
        onHold: this.props.onHold,
        onUnhold: this.props.onUnhold,
        onRecord: this.props.onRecord,
        onStopRecord: this.props.onStopRecord,
        onShowKeyPad: this.showKeyPad,
        hangup: this.props.hangup,
        onAdd: this.props.onAdd
      });
      var dialPad = this.state.isShowKeyPad ? _react2.default.createElement(_ActiveCallDialPad2.default, {
        onChange: this.props.onKeyPadChange,
        hiddenDialPad: this.hiddenKeyPad,
        hangup: this.props.hangup
      }) : null;
      return _react2.default.createElement(
        'div',
        { className: _styles2.default.root },
        _react2.default.createElement(_BackHeader2.default, {
          onBackClick: this.props.toggleMinimized,
          backButton: _react2.default.createElement(
            'span',
            { className: _styles2.default.backButton },
            _react2.default.createElement('i', { className: (0, _classnames2.default)(_DynamicsFont2.default.arrow, _styles2.default.backIcon) }),
            _react2.default.createElement(
              'span',
              { className: _styles2.default.backLabel },
              'Calls'
            )
          ),
          buttons: []
        }),
        _react2.default.createElement(
          _Panel2.default,
          null,
          timeCounter,
          userInfo,
          buttonsPad,
          dialPad,
          this.props.children
        )
      );
    }
  }]);
  return ActiveCallPanel;
}(_react.Component);

ActiveCallPanel.propTypes = {
  phoneNumber: _react.PropTypes.string,
  userName: _react.PropTypes.string,
  currentLocale: _react.PropTypes.string.isRequired,
  startTime: _react.PropTypes.number,
  isOnMute: _react.PropTypes.bool,
  isOnHold: _react.PropTypes.bool,
  isOnRecord: _react.PropTypes.bool,
  onMute: _react.PropTypes.func.isRequired,
  onUnmute: _react.PropTypes.func.isRequired,
  onHold: _react.PropTypes.func.isRequired,
  onUnhold: _react.PropTypes.func.isRequired,
  onRecord: _react.PropTypes.func.isRequired,
  onStopRecord: _react.PropTypes.func.isRequired,
  onAdd: _react.PropTypes.func.isRequired,
  hangup: _react.PropTypes.func.isRequired,
  toggleMinimized: _react.PropTypes.func.isRequired,
  onKeyPadChange: _react.PropTypes.func.isRequired,
  formatPhone: _react.PropTypes.func.isRequired,
  children: _react.PropTypes.node
};

ActiveCallPanel.defaultProps = {
  userName: null,
  startTime: null,
  isOnMute: false,
  isOnHold: false,
  isOnRecord: false,
  phoneNumber: null,
  children: undefined
};

exports.default = ActiveCallPanel;
//# sourceMappingURL=index.js.map

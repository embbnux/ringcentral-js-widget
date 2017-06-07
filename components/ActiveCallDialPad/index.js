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

var _DialPad = require('../DialPad');

var _DialPad2 = _interopRequireDefault(_DialPad);

var _TextInput = require('../TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _ActiveCallButton = require('../ActiveCallButton');

var _ActiveCallButton2 = _interopRequireDefault(_ActiveCallButton);

var _RcFont = require('../../assets/RcFont/RcFont.scss');

var _RcFont2 = _interopRequireDefault(_RcFont);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cleanRegex = /[^\d*#]/g;

var ActiveCallDialPad = function (_Component) {
  (0, _inherits3.default)(ActiveCallDialPad, _Component);

  function ActiveCallDialPad(props) {
    (0, _classCallCheck3.default)(this, ActiveCallDialPad);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ActiveCallDialPad.__proto__ || (0, _getPrototypeOf2.default)(ActiveCallDialPad)).call(this, props));

    _this.state = {
      value: ''
    };
    _this.onTextChange = function (e) {
      var value = e.currentTarget.value;
      var cleanValue = value.replace(cleanRegex, '');
      if (value !== cleanValue) {
        return;
      }
      _this.setState({ value: value });
      _this.props.onChange(value);
    };
    _this.onButtonOutput = function (key) {
      _this.setState(function (preState) {
        var value = preState.value + key;
        _this.props.onChange(value);
        return { value: value };
      });
    };
    return _this;
  }

  (0, _createClass3.default)(ActiveCallDialPad, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _styles2.default.root },
        _react2.default.createElement(_TextInput2.default, {
          className: _styles2.default.dialInput,
          value: this.state.value,
          onChange: this.onTextChange
        }),
        _react2.default.createElement(_DialPad2.default, {
          className: _styles2.default.dialPad,
          onButtonOutput: this.onButtonOutput
        }),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.buttonRow },
          _react2.default.createElement(
            _ActiveCallButton2.default,
            {
              onClick: this.props.hiddenDialPad,
              className: _styles2.default.button,
              title: 'Hide'
            },
            _react2.default.createElement('i', { className: _RcFont2.default.uni40 })
          ),
          _react2.default.createElement(
            _ActiveCallButton2.default,
            {
              onClick: this.props.hangup,
              className: _styles2.default.button,
              buttonClassName: _styles2.default.stopButton,
              title: 'End'
            },
            _react2.default.createElement('i', { className: _RcFont2.default.uni44 })
          )
        )
      );
    }
  }]);
  return ActiveCallDialPad;
}(_react.Component);

ActiveCallDialPad.propTypes = {
  onChange: _react.PropTypes.func.isRequired,
  hiddenDialPad: _react.PropTypes.func.isRequired,
  hangup: _react.PropTypes.func.isRequired
};

exports.default = ActiveCallDialPad;
//# sourceMappingURL=index.js.map

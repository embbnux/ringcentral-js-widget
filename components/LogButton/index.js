'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LogButton;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Spinner = require('../Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _DynamicsFont = require('../../assets/DynamicsFont/DynamicsFont.scss');

var _DynamicsFont2 = _interopRequireDefault(_DynamicsFont);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LogButton(_ref) {
  var className = _ref.className,
      currentLocale = _ref.currentLocale,
      onLog = _ref.onLog,
      isLogged = _ref.isLogged,
      disableLinks = _ref.disableLinks,
      isLogging = _ref.isLogging;

  var spinner = isLogging ? _react2.default.createElement(
    'div',
    { className: _styles2.default.spinnerContainer },
    _react2.default.createElement(_Spinner2.default, { ringWidth: 2 })
  ) : null;
  return _react2.default.createElement(
    _Button2.default,
    {
      className: (0, _classnames2.default)(_styles2.default.log, className),
      onClick: onLog,
      disabled: disableLinks || isLogging
    },
    _react2.default.createElement('span', {
      className: isLogged ? _DynamicsFont2.default.edit : _DynamicsFont2.default.callLog }),
    spinner
  );
}
LogButton.propTypes = {
  className: _react.PropTypes.string,
  onLog: _react.PropTypes.func,
  isLogged: _react.PropTypes.bool,
  disableLinks: _react.PropTypes.bool,
  isLogging: _react.PropTypes.bool,
  currentLocale: _react.PropTypes.string.isRequired
};
LogButton.defaultProps = {
  className: undefined,
  onLog: undefined,
  isLogged: false,
  disableLinks: false,
  isLogging: false
};
//# sourceMappingURL=index.js.map

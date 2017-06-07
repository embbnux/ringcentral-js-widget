'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ActiveCallUserInfo;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

var _i18n = require('./i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ActiveCallUserInfo(props) {
  var className = (0, _classnames2.default)(_styles2.default.root, props.className);
  var name = props.name || _i18n2.default.getString('unkonw', props.currentLocale);
  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(
      'div',
      { className: _styles2.default.avatarContainer },
      props.avatar
    ),
    _react2.default.createElement(
      'div',
      { className: _styles2.default.userName },
      name
    ),
    _react2.default.createElement(
      'div',
      { className: _styles2.default.userPhoneNumber },
      props.formatPhone(props.phoneNumber)
    )
  );
}

ActiveCallUserInfo.propTypes = {
  name: _react.PropTypes.string,
  className: _react.PropTypes.string,
  phoneNumber: _react.PropTypes.string,
  avatar: _react.PropTypes.node,
  currentLocale: _react.PropTypes.string.isRequired,
  formatPhone: _react.PropTypes.func.isRequired
};

ActiveCallUserInfo.defaultProps = {
  name: null,
  className: null,
  phoneNumber: null,
  isBig: false,
  avatar: undefined
};
//# sourceMappingURL=index.js.map

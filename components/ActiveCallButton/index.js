'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ActiveCallButton;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ActiveCallButton(props) {
  var className = (0, _classnames2.default)(_styles2.default.root, props.className);
  var buttonClassName = (0, _classnames2.default)(_styles2.default.button, props.buttonClassName, props.active ? _styles2.default.buttonActive : null);
  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(
      _Button2.default,
      {
        className: buttonClassName,
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

ActiveCallButton.propTypes = {
  className: _react.PropTypes.string,
  buttonClassName: _react.PropTypes.string,
  onClick: _react.PropTypes.func.isRequired,
  disabled: _react.PropTypes.bool,
  active: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  title: _react.PropTypes.string.isRequired
};

ActiveCallButton.defaultProps = {
  className: undefined,
  buttonClassName: undefined,
  disabled: false,
  active: false,
  children: undefined
};
//# sourceMappingURL=index.js.map

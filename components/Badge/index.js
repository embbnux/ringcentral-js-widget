'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Badge(_ref) {
  var className = _ref.className,
      name = _ref.name,
      children = _ref.children,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    'a',
    {
      href: '#' + name + '-badge',
      className: (0, _classnames2.default)(_styles2.default.root, className),
      onClick: onClick },
    children
  );
}

Badge.propTypes = {
  onClick: _react.PropTypes.func,
  className: _react.PropTypes.string,
  name: _react.PropTypes.string.isRequired,
  children: _react.PropTypes.node.isRequired
};

Badge.defaultProps = {
  className: null,
  name: null,
  onClick: function onClick() {
    return null;
  }
};

exports.default = Badge;
//# sourceMappingURL=index.js.map

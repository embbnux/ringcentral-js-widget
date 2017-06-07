'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ActiveCallBadge;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Badge = require('../Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _Draggable = require('../Draggable');

var _Draggable2 = _interopRequireDefault(_Draggable);

var _DynamicsFont = require('../../assets/DynamicsFont/DynamicsFont.scss');

var _DynamicsFont2 = _interopRequireDefault(_DynamicsFont);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ActiveCallBadge(props) {
  return _react2.default.createElement(
    _Draggable2.default,
    {
      className: _styles2.default.root,
      onClick: props.onClick,
      positionOffsetX: props.offsetX,
      positionOffsetY: props.offsetY,
      updatePositionOffset: props.updatePositionOffset
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

ActiveCallBadge.propTypes = {
  onClick: _react.PropTypes.func.isRequired,
  offsetX: _react.PropTypes.number.isRequired,
  offsetY: _react.PropTypes.number.isRequired,
  updatePositionOffset: _react.PropTypes.func.isRequired
};
//# sourceMappingURL=index.js.map

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

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Draggable = function (_Component) {
  (0, _inherits3.default)(Draggable, _Component);

  function Draggable(props) {
    (0, _classCallCheck3.default)(this, Draggable);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Draggable.__proto__ || (0, _getPrototypeOf2.default)(Draggable)).call(this, props));

    _this.state = {
      dragging: false,
      positionX: 0,
      positionY: 0,
      translateX: props.positionOffsetX,
      translateY: props.positionOffsetY
    };

    _this._isClick = true;

    _this._onMouseDown = function (e) {
      if (e.button !== 0) return;
      if (_this.state.dragging) {
        return;
      }
      _this.setState({
        positionX: e.clientX,
        positionY: e.clientY,
        dragging: true
      });
      _this._isClick = true;
      window.addEventListener('mousemove', _this._onMouseMove, false);
      window.addEventListener('mouseup', _this._onMouseUp, false);
      e.stopPropagation();
      e.preventDefault();
    };

    _this._onMouseMove = function (e) {
      if (!_this.state.dragging) {
        return;
      }
      if (!_this.draggableDom) {
        return;
      }
      var offsetParent = _this.draggableDom.offsetParent;
      var newPositionX = e.clientX;
      var newPositionY = e.clientY;
      var originalPositionX = _this.draggableDom.offsetLeft;
      var originalPositionY = _this.draggableDom.offsetTop;
      var child = _this.draggableDom.firstChild;
      var height = child && child.clientHeight || 0;
      var width = child && child.clientWidth || 0;
      _this._isClick = false;
      _this.setState(function (preState) {
        var newState = {
          positionX: newPositionX,
          positionY: newPositionY,
          translateX: preState.translateX + (newPositionX - preState.positionX),
          translateY: preState.translateY + (newPositionY - preState.positionY)
        };
        if (originalPositionX + newState.translateX > offsetParent.clientWidth + width || originalPositionX + newState.translateX < width / 2) {
          delete newState.translateX;
        }
        if (originalPositionY + newState.translateY > offsetParent.clientHeight - height || originalPositionY + newState.translateY < -height) {
          delete newState.translateY;
        }
        return newState;
      });
      e.stopPropagation();
      e.preventDefault();
    };

    _this._onMouseUp = function (e) {
      _this.setState({
        dragging: false
      });
      _this.props.updatePositionOffset(_this.state.translateX, _this.state.translateY);
      window.removeEventListener('mousemove', _this._onMouseMove);
      window.removeEventListener('mouseup', _this._onMouseUp);
      e.stopPropagation();
      e.preventDefault();
    };

    _this._onClick = function (e) {
      if (!_this._isClick) {
        return;
      }
      _this.props.onClick(e);
    };
    return _this;
  }

  (0, _createClass3.default)(Draggable, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('mouseup', this._onMouseUp);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          children = _props.children;

      var style = {
        msTransition: 'translate(' + this.state.translateX + 'px, ' + this.state.translateY + 'px)',
        WebkitTransition: 'translate(' + this.state.translateX + 'px, ' + this.state.translateY + 'px)',
        transform: 'translate(' + this.state.translateX + 'px, ' + this.state.translateY + 'px)'
      };
      return _react2.default.createElement(
        'div',
        {
          onMouseDown: this._onMouseDown,
          ref: function ref(draggableDom) {
            _this2.draggableDom = draggableDom;
          },
          style: style,
          className: (0, _classnames2.default)(_styles2.default.root, className),
          onClick: this._onClick
        },
        children
      );
    }
  }]);
  return Draggable;
}(_react.Component);

Draggable.propTypes = {
  className: _react.PropTypes.string,
  children: _react.PropTypes.node.isRequired,
  onClick: _react.PropTypes.func,
  positionOffsetX: _react.PropTypes.number,
  positionOffsetY: _react.PropTypes.number,
  updatePositionOffset: _react.PropTypes.func
};

Draggable.defaultProps = {
  className: null,
  onClick: function onClick() {
    return null;
  },
  positionOffsetX: 0,
  positionOffsetY: 0,
  updatePositionOffset: function updatePositionOffset() {
    return null;
  }
};

exports.default = Draggable;
//# sourceMappingURL=index.js.map

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

var _phoneTypes = require('../../lib/phoneTypes');

var _phoneTypes2 = _interopRequireDefault(_phoneTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ContactItem(props) {
  var className = (0, _classnames2.default)(_styles2.default.contactItem, props.active ? _styles2.default.active : null);
  return _react2.default.createElement(
    'li',
    { className: className, onMouseOver: props.onHover },
    _react2.default.createElement(
      'a',
      { href: '#select-contact-item', onClick: props.onClick },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          { className: _styles2.default.name },
          props.name
        ),
        _react2.default.createElement(
          'span',
          { className: _styles2.default.spliter },
          '|'
        ),
        _react2.default.createElement(
          'span',
          { className: _styles2.default.label },
          _phoneTypes2.default.getString('phoneSource.' + props.entityType)
        )
      ),
      _react2.default.createElement(
        'div',
        { className: _styles2.default.phoneNumberSection },
        _react2.default.createElement(
          'span',
          null,
          props.formatContactPhone(props.phoneNumber)
        ),
        _react2.default.createElement(
          'span',
          { className: _styles2.default.spliter },
          '|'
        ),
        _react2.default.createElement(
          'span',
          { className: _styles2.default.label },
          props.phoneType === 'unknown' ? _phoneTypes2.default.getString('phoneType.' + props.phoneType) : props.phoneType
        )
      )
    )
  );
}

ContactItem.propTypes = {
  onClick: _react.PropTypes.func.isRequired,
  formatContactPhone: _react.PropTypes.func.isRequired,
  name: _react.PropTypes.string.isRequired,
  entityType: _react.PropTypes.string.isRequired,
  phoneType: _react.PropTypes.string.isRequired,
  phoneNumber: _react.PropTypes.string.isRequired,
  active: _react.PropTypes.bool.isRequired,
  onHover: _react.PropTypes.func.isRequired
};

function ContactDropdownList(props) {
  var items = props.items;
  var listClassName = null;
  var hiddenClassName = null;
  if (items.length === 0 || !props.visibility) {
    hiddenClassName = _styles2.default.hidden;
  }
  listClassName = (0, _classnames2.default)(_styles2.default.dropdownList, props.className, hiddenClassName);
  return _react2.default.createElement(
    'ul',
    { className: listClassName },
    items.map(function (item, index) {
      return _react2.default.createElement(ContactItem, {
        active: props.selectedIndex === index,
        name: item.name,
        entityType: item.entityType,
        phoneType: item.phoneType,
        phoneNumber: item.phoneNumber,
        formatContactPhone: props.formatContactPhone,
        onHover: function onHover() {
          return props.setSelectedIndex(index);
        },
        onClick: function onClick() {
          return props.addToRecipients({
            name: item.name,
            phoneNumber: item.phoneNumber
          });
        }
        // eslint-disable-next-line react/no-array-index-key
        , key: '' + index + item.phoneNumber + item.name + item.phoneType
      });
    })
  );
}

ContactDropdownList.propTypes = {
  visibility: _react.PropTypes.bool.isRequired,
  className: _react.PropTypes.string,
  items: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    name: _react.PropTypes.string.isRequired,
    entityType: _react.PropTypes.string.isRequired,
    phoneType: _react.PropTypes.string.isRequired,
    phoneNumber: _react.PropTypes.string.isRequired
  })).isRequired,
  formatContactPhone: _react.PropTypes.func.isRequired,
  addToRecipients: _react.PropTypes.func.isRequired,
  setSelectedIndex: _react.PropTypes.func.isRequired,
  selectedIndex: _react.PropTypes.number.isRequired
};

ContactDropdownList.defaultProps = {
  className: null
};

exports.default = ContactDropdownList;
//# sourceMappingURL=index.js.map

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DropdownSelect = require('../DropdownSelect');

var _DropdownSelect2 = _interopRequireDefault(_DropdownSelect);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

var _i18n = require('./i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PhoneNumber(_ref) {
  var formatPhone = _ref.formatPhone,
      usageType = _ref.usageType,
      currentLocale = _ref.currentLocale,
      phoneNumber = _ref.phoneNumber;

  var usageTypeDom = usageType ? _react2.default.createElement(
    'span',
    { className: _styles2.default.usageType },
    _i18n2.default.getString(usageType, currentLocale)
  ) : null;
  return _react2.default.createElement(
    'span',
    { className: _styles2.default.phoneNumber },
    _react2.default.createElement(
      'span',
      null,
      formatPhone(phoneNumber)
    ),
    usageTypeDom
  );
}

PhoneNumber.propTypes = {
  formatPhone: _react.PropTypes.func.isRequired,
  phoneNumber: _react.PropTypes.string,
  usageType: _react.PropTypes.string,
  currentLocale: _react.PropTypes.string.isRequired
};

PhoneNumber.defaultProps = {
  phoneNumber: null,
  usageType: null
};

function CallIdSelect(_ref2) {
  var fromNumber = _ref2.fromNumber,
      fromNumbers = _ref2.fromNumbers,
      onChange = _ref2.onChange,
      formatPhone = _ref2.formatPhone,
      hidden = _ref2.hidden,
      currentLocale = _ref2.currentLocale;

  if (hidden) {
    return null;
  }
  var options = [].concat((0, _toConsumableArray3.default)(fromNumbers), [{
    phoneNumber: 'anonymous'
  }]);
  return _react2.default.createElement(_DropdownSelect2.default, {
    className: _styles2.default.root,
    iconClassName: _styles2.default.selectIcon,
    value: fromNumber,
    label: _i18n2.default.getString('from', currentLocale) + ':',
    onChange: onChange,
    options: options,
    renderValue: function renderValue(value) {
      if (value === 'anonymous') {
        return _react2.default.createElement(
          'span',
          null,
          _i18n2.default.getString('Blocked', currentLocale)
        );
      }
      return _react2.default.createElement(PhoneNumber, {
        formatPhone: formatPhone,
        phoneNumber: value,
        currentLocale: currentLocale
      });
    },
    valueFunction: function valueFunction(option) {
      return option.phoneNumber;
    },
    renderFunction: function renderFunction(option) {
      if (option.phoneNumber === 'anonymous') {
        return _react2.default.createElement(
          'span',
          null,
          _i18n2.default.getString('Blocked', currentLocale)
        );
      }
      return _react2.default.createElement(PhoneNumber, {
        formatPhone: formatPhone,
        phoneNumber: option.phoneNumber,
        usageType: option.usageType,
        currentLocale: currentLocale
      });
    }
  });
}

CallIdSelect.propTypes = {
  fromNumber: _react.PropTypes.string,
  formatPhone: _react.PropTypes.func.isRequired,
  fromNumbers: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    phoneNumber: _react.PropTypes.string,
    usageType: _react.PropTypes.string
  })).isRequired,
  onChange: _react.PropTypes.func.isRequired,
  currentLocale: _react.PropTypes.string.isRequired,
  hidden: _react.PropTypes.bool.isRequired
};

CallIdSelect.defaultProps = {
  fromNumber: null
};

exports.default = CallIdSelect;
//# sourceMappingURL=index.js.map

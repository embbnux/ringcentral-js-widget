'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = ContactDisplay;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _formatNumber = require('ringcentral-integration/lib/formatNumber');

var _formatNumber2 = _interopRequireDefault(_formatNumber);

var _DropdownSelect = require('../DropdownSelect');

var _DropdownSelect2 = _interopRequireDefault(_DropdownSelect);

var _i18n = require('./i18n');

var _i18n2 = _interopRequireDefault(_i18n);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var displayFomatter = function displayFomatter(_ref) {
  var entityName = _ref.entityName,
      entityType = _ref.entityType,
      phoneNumber = _ref.phoneNumber;

  if (phoneNumber && entityName && entityType) {
    return entityName + ' | ' + _i18n2.default.getString('phoneSource.' + entityType) + ' ' + phoneNumber;
  } else if (entityName && entityType) {
    return entityName + ' | ' + _i18n2.default.getString('phoneSource.' + entityType);
  } else if (phoneNumber) {
    return '' + phoneNumber;
  }
  return '';
};

function ContactDisplay(_ref2) {
  var className = _ref2.className,
      contactMatches = _ref2.contactMatches,
      selected = _ref2.selected,
      onSelectContact = _ref2.onSelectContact,
      disabled = _ref2.disabled,
      isLogging = _ref2.isLogging,
      fallBackName = _ref2.fallBackName,
      enableContactFallback = _ref2.enableContactFallback,
      areaCode = _ref2.areaCode,
      countryCode = _ref2.countryCode,
      phoneNumber = _ref2.phoneNumber,
      currentLocale = _ref2.currentLocale,
      groupNumbers = _ref2.groupNumbers;

  var contentEl = void 0;
  if (groupNumbers) {
    var display = groupNumbers.join(', ');
    contentEl = _react2.default.createElement(
      'div',
      { title: display },
      display
    );
  } else if (contactMatches.length === 0) {
    var _display = enableContactFallback && fallBackName || phoneNumber && (0, _formatNumber2.default)({
      phoneNumber: phoneNumber,
      countryCode: countryCode,
      areaCode: areaCode
    }) || _i18n2.default.getString('unknownNumber', currentLocale);
    var title = enableContactFallback && fallBackName || phoneNumber || '';
    contentEl = _react2.default.createElement(
      'div',
      { title: title },
      _display
    );
  } else if (contactMatches.length === 1) {
    var _display2 = contactMatches[0].name;
    var _title = displayFomatter({
      entityName: _display2,
      entityType: contactMatches[0].entityType,
      phoneNumber: phoneNumber
    });
    contentEl = _react2.default.createElement(
      'div',
      { title: _title },
      _display2
    );
  } else if (contactMatches.length > 1) {
    var options = [].concat((0, _toConsumableArray3.default)(contactMatches));
    contentEl = _react2.default.createElement(_DropdownSelect2.default, {
      className: _styles2.default.select,
      value: '' + selected,
      onChange: onSelectContact,
      disabled: disabled || isLogging,
      options: options,
      placeholder: _i18n2.default.getString('select', currentLocale),
      renderFunction: function renderFunction(entity) {
        return displayFomatter({
          entityName: entity.name,
          entityType: entity.entityType
        });
      },
      renderValue: function renderValue(value) {
        return displayFomatter({
          entityName: options[value].name,
          entityType: options[value].entityType
        });
      },
      renderTitle: function renderTitle(entity) {
        return entity ? displayFomatter({
          entityName: entity.name,
          entityType: entity.entityType,
          phoneNumber: phoneNumber
        }) : phoneNumber;
      },
      dropdownAlign: 'left',
      titleEnabled: true,
      stopPropagation: true,
      noPadding: true
    });
  }
  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(_styles2.default.root, className) },
    contentEl
  );
}
ContactDisplay.propTypes = {
  className: _react.PropTypes.string,
  contactMatches: _react.PropTypes.arrayOf(_react.PropTypes.any).isRequired,
  selected: _react.PropTypes.number.isRequired,
  onSelectContact: _react.PropTypes.func,
  disabled: _react.PropTypes.bool.isRequired,
  isLogging: _react.PropTypes.bool.isRequired,
  fallBackName: _react.PropTypes.string,
  enableContactFallback: _react.PropTypes.bool,
  areaCode: _react.PropTypes.string.isRequired,
  countryCode: _react.PropTypes.string.isRequired,
  phoneNumber: _react.PropTypes.string,
  currentLocale: _react.PropTypes.string.isRequired,
  groupNumbers: _react.PropTypes.arrayOf(_react.PropTypes.string)
};
ContactDisplay.defaultProps = {
  className: undefined,
  onSelectContact: undefined,
  fallBackName: '',
  phoneNumber: undefined,
  groupNumbers: undefined,
  enableContactFallback: undefined
};
//# sourceMappingURL=index.js.map

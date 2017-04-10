'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _DialPad = require('../DialPad');

var _DialPad2 = _interopRequireDefault(_DialPad);

var _DialTextInput = require('../DialTextInput');

var _DialTextInput2 = _interopRequireDefault(_DialTextInput);

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

  return _react2.default.createElement(
    'span',
    { className: _styles2.default.phoneNumber },
    _react2.default.createElement(
      'span',
      null,
      formatPhone(phoneNumber)
    ),
    _react2.default.createElement(
      'span',
      { className: _styles2.default.usageType },
      _i18n2.default.getString(usageType, currentLocale)
    )
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

function FromNumberSelect(_ref2) {
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
    className: _styles2.default.select,
    iconClassName: _styles2.default.selectIcon,
    value: fromNumber,
    label: 'From:',
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
      var valueItem = fromNumbers.find(function (item) {
        return item.phoneNumber === value;
      });
      var usageType = valueItem && valueItem.usageType;
      return _react2.default.createElement(PhoneNumber, {
        formatPhone: formatPhone,
        phoneNumber: value,
        usageType: usageType,
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

FromNumberSelect.propTypes = {
  fromNumber: _react.PropTypes.string.isRequired,
  formatPhone: _react.PropTypes.func.isRequired,
  fromNumbers: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    phoneNumber: _react.PropTypes.string,
    usageType: _react.PropTypes.string
  })).isRequired,
  onChange: _react.PropTypes.func.isRequired,
  currentLocale: _react.PropTypes.string.isRequired,
  hidden: _react.PropTypes.bool.isRequired
};

FromNumberSelect.defaultProps = {
  fromNumber: null
};

function DialerPanel(_ref3) {
  var callButtonDisabled = _ref3.callButtonDisabled,
      className = _ref3.className,
      keepToNumber = _ref3.keepToNumber,
      onCall = _ref3.onCall,
      toNumber = _ref3.toNumber,
      fromNumber = _ref3.fromNumber,
      fromNumbers = _ref3.fromNumbers,
      changeFromNumber = _ref3.changeFromNumber,
      formatPhone = _ref3.formatPhone,
      isWebphoneMode = _ref3.isWebphoneMode,
      currentLocale = _ref3.currentLocale;

  var onCallFunc = function onCallFunc() {
    if (!callButtonDisabled) {
      onCall();
    }
  };
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(_styles2.default.root, className) },
    _react2.default.createElement(FromNumberSelect, {
      fromNumber: fromNumber,
      fromNumbers: fromNumbers,
      onChange: changeFromNumber,
      formatPhone: formatPhone,
      currentLocale: currentLocale,
      hidden: !isWebphoneMode
    }),
    _react2.default.createElement(_DialTextInput2.default, {
      value: toNumber,
      onChangeEvent: function onChangeEvent(event) {
        keepToNumber(event.currentTarget.value);
      },
      onDelete: function onDelete() {
        keepToNumber('');
      }
    }),
    _react2.default.createElement(
      'div',
      { className: _styles2.default.dialButtons },
      _react2.default.createElement(_DialPad2.default, {
        className: _styles2.default.dialPad,
        onButtonOutput: function onButtonOutput(key) {
          keepToNumber(toNumber + key);
        }
      }),
      _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(_styles2.default.callBtnRow) },
        _react2.default.createElement(
          'div',
          { className: _styles2.default.callBtn },
          _react2.default.createElement(
            'svg',
            { className: _styles2.default.btnSvg, viewBox: '0 0 500 500' },
            _react2.default.createElement(
              'g',
              {
                className: (0, _classnames2.default)(_styles2.default.btnSvgGroup, callButtonDisabled && _styles2.default.disabled),
                onClick: onCallFunc
              },
              _react2.default.createElement('circle', {
                className: _styles2.default.circle,
                cx: '250',
                cy: '250',
                r: '200'
              }),
              _react2.default.createElement('text', {
                className: _styles2.default.btnValue,
                x: '0',
                dx: '167.5155',
                y: '0',
                dy: '300',
                dangerouslySetInnerHTML: {
                  __html: '&#xe953;'
                } })
            )
          )
        )
      )
    )
  );
}
DialerPanel.propTypes = {
  className: _react.PropTypes.string,
  onCall: _react.PropTypes.func.isRequired,
  callButtonDisabled: _react.PropTypes.bool,
  isWebphoneMode: _react.PropTypes.bool,
  toNumber: _react.PropTypes.string,
  keepToNumber: _react.PropTypes.func,
  fromNumber: _react.PropTypes.string,
  currentLocale: _react.PropTypes.string.isRequired,
  fromNumbers: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    phoneNumber: _react.PropTypes.string,
    usageType: _react.PropTypes.string
  })),
  changeFromNumber: _react.PropTypes.func,
  formatPhone: _react.PropTypes.func
};

DialerPanel.defaultProps = {
  className: null,
  fromNumber: null,
  callButtonDisabled: false,
  toNumber: '',
  fromNumbers: [],
  isWebphoneMode: false,
  changeFromNumber: function changeFromNumber() {
    return null;
  },
  keepToNumber: function keepToNumber() {
    return null;
  },
  formatPhone: function formatPhone(phoneNumber) {
    return phoneNumber;
  }
};

exports.default = DialerPanel;
//# sourceMappingURL=index.js.map

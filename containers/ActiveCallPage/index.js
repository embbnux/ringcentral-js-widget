'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _react = require('react');

var _ActiveCall = require('ringcentral-integration/modules/ActiveCall');

var _ActiveCall2 = _interopRequireDefault(_ActiveCall);

var _Locale = require('ringcentral-integration/modules/Locale');

var _Locale2 = _interopRequireDefault(_Locale);

var _ActiveCallPanel = require('../../components/ActiveCallPanel');

var _ActiveCallPanel2 = _interopRequireDefault(_ActiveCallPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapToProps(_, _ref) {
  var activeCall = _ref.activeCall,
      locale = _ref.locale;

  return {
    currentLocale: locale.currentLocale,
    active: activeCall.active,
    minimized: activeCall.minimized,
    userName: 'test',
    phoneNumber: '12345678'
  };
}

function mapToFunctions(_, _ref2) {
  var activeCall = _ref2.activeCall;

  return {
    hangup: activeCall.hangup,
    toggleMinimized: activeCall.toggleMinimized
  };
}

var ActiveCallPage = (0, _reactRedux.connect)(mapToProps, mapToFunctions)(_ActiveCallPanel2.default);

ActiveCallPage.propTypes = {
  activeCall: _react.PropTypes.instanceOf(_ActiveCall2.default).isRequired,
  locale: _react.PropTypes.instanceOf(_Locale2.default).isRequired
};

exports.default = ActiveCallPage;
//# sourceMappingURL=index.js.map

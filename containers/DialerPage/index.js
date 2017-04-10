'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.propTypes = exports.mapToProps = exports.mapToFunctions = undefined;

var _reactRedux = require('react-redux');

var _react = require('react');

var _formatNumber = require('ringcentral-integration/lib/formatNumber');

var _formatNumber2 = _interopRequireDefault(_formatNumber);

var _Locale = require('ringcentral-integration/modules/Locale');

var _Locale2 = _interopRequireDefault(_Locale);

var _CallingSettings = require('ringcentral-integration/modules/CallingSettings');

var _CallingSettings2 = _interopRequireDefault(_CallingSettings);

var _callingModes = require('ringcentral-integration/modules/CallingSettings/callingModes');

var _callingModes2 = _interopRequireDefault(_callingModes);

var _Call = require('ringcentral-integration/modules/Call');

var _Call2 = _interopRequireDefault(_Call);

var _ConnectivityMonitor = require('ringcentral-integration/modules/ConnectivityMonitor');

var _ConnectivityMonitor2 = _interopRequireDefault(_ConnectivityMonitor);

var _RateLimiter = require('ringcentral-integration/modules/RateLimiter');

var _RateLimiter2 = _interopRequireDefault(_RateLimiter);

var _DialerPanel = require('../../components/DialerPanel');

var _DialerPanel2 = _interopRequireDefault(_DialerPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapToProps(_, _ref) {
  var call = _ref.call,
      callingSettings = _ref.callingSettings,
      connectivityMonitor = _ref.connectivityMonitor,
      locale = _ref.locale,
      rateLimiter = _ref.rateLimiter;

  return {
    currentLocale: locale.currentLocale,
    isWebphoneMode: callingSettings.callingMode === _callingModes2.default.webphone,
    callButtonDisabled: !call.isIdle || !connectivityMonitor.connectivity || rateLimiter.throttling,
    toNumber: call.toNumber,
    fromNumbers: call.fromNumbers,
    fromNumber: call.fromNumber
  };
}

function mapToFunctions(_, _ref2) {
  var call = _ref2.call,
      regionSettings = _ref2.regionSettings;

  return {
    keepToNumber: function keepToNumber(value) {
      call.onToNumberChange(value);
    },
    onCall: function onCall() {
      call.onCall();
    },
    changeFromNumber: function changeFromNumber(number) {
      call.updateFromNumber(number);
    },
    formatPhone: function formatPhone(phoneNumber) {
      return (0, _formatNumber2.default)({
        phoneNumber: phoneNumber,
        areaCode: regionSettings.areaCode,
        countryCode: regionSettings.countryCode
      });
    }
  };
}

var DialerPage = (0, _reactRedux.connect)(mapToProps, mapToFunctions)(_DialerPanel2.default);

var propTypes = {
  call: _react.PropTypes.instanceOf(_Call2.default).isRequired,
  callingSettings: _react.PropTypes.instanceOf(_CallingSettings2.default).isRequired,
  connectivityMonitor: _react.PropTypes.instanceOf(_ConnectivityMonitor2.default).isRequired,
  locale: _react.PropTypes.instanceOf(_Locale2.default).isRequired,
  rateLimiter: _react.PropTypes.instanceOf(_RateLimiter2.default).isRequired
};

DialerPage.propTypes = propTypes;

exports.mapToFunctions = mapToFunctions;
exports.mapToProps = mapToProps;
exports.propTypes = propTypes;
exports.default = DialerPage;
//# sourceMappingURL=index.js.map

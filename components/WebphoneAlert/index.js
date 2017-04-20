'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WebphoneAlert;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _webphoneErrors = require('ringcentral-integration/modules/Webphone/webphoneErrors');

var _webphoneErrors2 = _interopRequireDefault(_webphoneErrors);

var _i18n = require('./i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WebphoneAlert(props) {
  var message = props.message.message;
  return _react2.default.createElement(
    'span',
    null,
    _i18n2.default.getString(message, props.currentLocale)
  );
}

WebphoneAlert.propTypes = {
  currentLocale: _react.PropTypes.string.isRequired,
  message: _react.PropTypes.shape({
    message: _react.PropTypes.string.isRequired
  }).isRequired
};

WebphoneAlert.handleMessage = function (_ref) {
  var message = _ref.message;
  return message === _webphoneErrors2.default.connectFailed || message === _webphoneErrors2.default.browserNotSupported || message === _webphoneErrors2.default.webphoneCountOverLimit || message === _webphoneErrors2.default.notOutboundCallWithoutDL || message === _webphoneErrors2.default.getSipProvisionError;
};
//# sourceMappingURL=index.js.map

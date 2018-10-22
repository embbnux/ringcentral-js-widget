'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MessageSenderAlert;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _messageSenderMessages = require('ringcentral-integration/modules/MessageSender/messageSenderMessages');

var _messageSenderMessages2 = _interopRequireDefault(_messageSenderMessages);

var _FormattedMessage = require('../FormattedMessage');

var _FormattedMessage2 = _interopRequireDefault(_FormattedMessage);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

var _i18n = require('./i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MessageSenderAlert(_ref) {
  var currentLocale = _ref.currentLocale,
      _ref$message = _ref.message,
      id = _ref$message.id,
      message = _ref$message.message,
      onAreaCodeLink = _ref.onAreaCodeLink,
      brand = _ref.brand;

  if (message === _messageSenderMessages2.default.noAreaCode) {
    var areaCode = _i18n2.default.getString('areaCode', currentLocale);
    var areaCodeLink = onAreaCodeLink ? _react2.default.createElement(
      'a',
      {
        className: _styles2.default.link,
        onClick: function onClick(e) {
          e.preventDefault();
          onAreaCodeLink({ alertId: id });
        } },
      areaCode
    ) : areaCode;
    return _react2.default.createElement(_FormattedMessage2.default, {
      message: _i18n2.default.getString(message, currentLocale),
      values: { areaCodeLink: areaCodeLink } });
  } else if ([_messageSenderMessages2.default.noInternalSMSPermission, _messageSenderMessages2.default.noSMSPermission].indexOf(message) !== -1) {
    return _react2.default.createElement(_FormattedMessage2.default, {
      message: _i18n2.default.getString(message, currentLocale),
      values: { brand: brand } });
  }
  return _react2.default.createElement(
    'span',
    null,
    _i18n2.default.getString(message, currentLocale)
  );
}

MessageSenderAlert.propTypes = {
  currentLocale: _propTypes2.default.string.isRequired,
  brand: _propTypes2.default.string,
  message: _propTypes2.default.shape({
    message: _propTypes2.default.string.isRequired
  }).isRequired,
  onAreaCodeLink: _propTypes2.default.func
};
MessageSenderAlert.defaultProps = {
  onAreaCodeLink: undefined,
  brand: 'RingCentral'
};

MessageSenderAlert.handleMessage = function (_ref2) {
  var message = _ref2.message;
  return message === _messageSenderMessages2.default.sendSuccess || message === _messageSenderMessages2.default.sendError || message === _messageSenderMessages2.default.numberValidateError || message === _messageSenderMessages2.default.textEmpty || message === _messageSenderMessages2.default.noPermission || message === _messageSenderMessages2.default.senderEmpty || message === _messageSenderMessages2.default.noToNumber || message === _messageSenderMessages2.default.recipientsEmpty || message === _messageSenderMessages2.default.textTooLong || message === _messageSenderMessages2.default.multipartTextTooLong || message === _messageSenderMessages2.default.recipientNumberInvalids || message === _messageSenderMessages2.default.noAreaCode || message === _messageSenderMessages2.default.specialNumber || message === _messageSenderMessages2.default.connectFailed || message === _messageSenderMessages2.default.internalError || message === _messageSenderMessages2.default.notAnExtension || message === _messageSenderMessages2.default.networkError || message === _messageSenderMessages2.default.notSmsToExtension || message === _messageSenderMessages2.default.senderNumberInvalid || message === _messageSenderMessages2.default.internationalSMSNotSupported || message === _messageSenderMessages2.default.noInternalSMSPermission || message === _messageSenderMessages2.default.noSMSPermission || message === _messageSenderMessages2.default.sending;
};
//# sourceMappingURL=index.js.map

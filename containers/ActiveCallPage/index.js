'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _react = require('react');

var _Webphone = require('ringcentral-integration/modules/Webphone');

var _Webphone2 = _interopRequireDefault(_Webphone);

var _Locale = require('ringcentral-integration/modules/Locale');

var _Locale2 = _interopRequireDefault(_Locale);

var _ActiveCallPanel = require('../../components/ActiveCallPanel');

var _ActiveCallPanel2 = _interopRequireDefault(_ActiveCallPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapToProps(_, _ref) {
  var webphone = _ref.webphone,
      locale = _ref.locale;

  var currentSession = webphone.currentSession;
  return {
    currentLocale: locale.currentLocale,
    sessionId: currentSession && currentSession.id,
    active: !!currentSession,
    minimized: webphone.minimized,
    userName: 'test',
    phoneNumber: '12345678'
  };
}

function mapToFunctions(_, _ref2) {
  var webphone = _ref2.webphone;

  return {
    hangup: function hangup() {
      webphone.hangup(webphone.activeSession);
    },
    toggleMinimized: webphone.toggleMinimized
  };
}

var ActiveCallPage = (0, _reactRedux.connect)(mapToProps, mapToFunctions)(_ActiveCallPanel2.default);

ActiveCallPage.propTypes = {
  webphone: _react.PropTypes.instanceOf(_Webphone2.default).isRequired,
  locale: _react.PropTypes.instanceOf(_Locale2.default).isRequired
};

exports.default = ActiveCallPage;
//# sourceMappingURL=index.js.map

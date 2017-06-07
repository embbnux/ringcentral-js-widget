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

var _reactRedux = require('react-redux');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formatNumber = require('ringcentral-integration/lib/formatNumber');

var _formatNumber2 = _interopRequireDefault(_formatNumber);

var _Webphone = require('ringcentral-integration/modules/Webphone');

var _Webphone2 = _interopRequireDefault(_Webphone);

var _Locale = require('ringcentral-integration/modules/Locale');

var _Locale2 = _interopRequireDefault(_Locale);

var _RegionSettings = require('ringcentral-integration/modules/RegionSettings');

var _RegionSettings2 = _interopRequireDefault(_RegionSettings);

var _callDirections = require('ringcentral-integration/enums/callDirections');

var _callDirections2 = _interopRequireDefault(_callDirections);

var _sessionStatus = require('ringcentral-integration/modules/Webphone/sessionStatus');

var _sessionStatus2 = _interopRequireDefault(_sessionStatus);

var _ActiveCallPanel = require('../../components/ActiveCallPanel');

var _ActiveCallPanel2 = _interopRequireDefault(_ActiveCallPanel);

var _IncomingCallPanel = require('../../components/IncomingCallPanel');

var _IncomingCallPanel2 = _interopRequireDefault(_IncomingCallPanel);

var _ActiveCallBadge = require('../../components/ActiveCallBadge');

var _ActiveCallBadge2 = _interopRequireDefault(_ActiveCallBadge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActiveCallPage = function (_Component) {
  (0, _inherits3.default)(ActiveCallPage, _Component);

  function ActiveCallPage(props) {
    (0, _classCallCheck3.default)(this, ActiveCallPage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ActiveCallPage.__proto__ || (0, _getPrototypeOf2.default)(ActiveCallPage)).call(this, props));

    _this.state = {
      badgeOffsetX: 0,
      badgeOffsetY: 0,
      connectedAt: new Date()
    };

    _this.updatePositionOffset = function (x, y) {
      _this.setState({
        badgeOffsetX: x,
        badgeOffsetY: y
      });
    };

    _this.answer = function () {
      return _this.props.answer(_this.props.session.id);
    };
    _this.reject = function () {
      return _this.props.reject(_this.props.session.id);
    };
    _this.onMute = function () {
      return _this.props.onMute(_this.props.session.id);
    };
    _this.onUnmute = function () {
      return _this.props.onUnmute(_this.props.session.id);
    };
    _this.onHold = function () {
      return _this.props.onHold(_this.props.session.id);
    };
    _this.onUnhold = function () {
      return _this.props.onUnhold(_this.props.session.id);
    };
    _this.onRecord = function () {
      return _this.props.onRecord(_this.props.session.id);
    };
    _this.onStopRecord = function () {
      return _this.props.onStopRecord(_this.props.session.id);
    };
    _this.hangup = function () {
      return _this.props.hangup(_this.props.session.id);
    };
    _this.onKeyPadChange = function (value) {
      return _this.props.sendDTMF(value, _this.props.session.id);
    };
    _this.toVoiceMail = function () {
      return _this.props.toVoiceMail(_this.props.session.id);
    };
    _this.replyWithMessage = function (message) {
      return _this.props.replyWithMessage(_this.props.session.id, message);
    };
    return _this;
  }

  (0, _createClass3.default)(ActiveCallPage, [{
    key: 'render',
    value: function render() {
      var session = this.props.session;
      var active = !!session.id;
      if (!active) {
        return null;
      }
      if (this.props.minimized) {
        return _react2.default.createElement(_ActiveCallBadge2.default, {
          onClick: this.props.toggleMinimized,
          offsetX: this.state.badgeOffsetX,
          offsetY: this.state.badgeOffsetY,
          updatePositionOffset: this.updatePositionOffset
        });
      }
      var isRinging = false;
      if (session.direction === _callDirections2.default.inbound && session.callStatus === _sessionStatus2.default.connecting) {
        isRinging = true;
      }
      // isRinging = true;
      var phoneNumber = session.direction === _callDirections2.default.outbound ? session.to : session.from;
      var userName = 'Unknow';
      if (isRinging) {
        return _react2.default.createElement(
          _IncomingCallPanel2.default,
          {
            currentLocale: this.props.currentLocale,
            toggleMinimized: this.props.toggleMinimized,
            userName: userName,
            phoneNumber: phoneNumber,
            answer: this.answer,
            reject: this.reject,
            replyWithMessage: this.replyWithMessage,
            toVoiceMail: this.toVoiceMail,
            formatPhone: this.props.formatPhone
          },
          this.props.children
        );
      }
      return _react2.default.createElement(
        _ActiveCallPanel2.default,
        {
          currentLocale: this.props.currentLocale,
          formatPhone: this.props.formatPhone,
          phoneNumber: phoneNumber,
          userName: userName,
          sessionId: session.id,
          callStatus: session.callStatus,
          startTime: session.startTime,
          isOnMute: session.isOnMute,
          isOnHold: session.isOnHold,
          isOnRecord: session.isOnRecord,
          toggleMinimized: this.props.toggleMinimized,
          onMute: this.onMute,
          onUnmute: this.onUnmute,
          onHold: this.onHold,
          onUnhold: this.onUnhold,
          onRecord: this.onRecord,
          onStopRecord: this.onStopRecord,
          onKeyPadChange: this.onKeyPadChange,
          hangup: this.hangup,
          onAdd: this.props.onAdd
        },
        this.props.children
      );
    }
  }]);
  return ActiveCallPage;
}(_react.Component);

ActiveCallPage.propTypes = {
  session: _react.PropTypes.shape({
    id: _react.PropTypes.string,
    direction: _react.PropTypes.string,
    startTime: _react.PropTypes.number,
    isOnMute: _react.PropTypes.bool,
    isOnHold: _react.PropTypes.bool,
    isOnRecord: _react.PropTypes.bool,
    to: _react.PropTypes.string,
    from: _react.PropTypes.string
  }).isRequired,
  currentLocale: _react.PropTypes.string.isRequired,
  minimized: _react.PropTypes.bool.isRequired,
  toggleMinimized: _react.PropTypes.func.isRequired,
  onMute: _react.PropTypes.func.isRequired,
  onUnmute: _react.PropTypes.func.isRequired,
  onHold: _react.PropTypes.func.isRequired,
  onUnhold: _react.PropTypes.func.isRequired,
  onRecord: _react.PropTypes.func.isRequired,
  onStopRecord: _react.PropTypes.func.isRequired,
  hangup: _react.PropTypes.func.isRequired,
  answer: _react.PropTypes.func.isRequired,
  reject: _react.PropTypes.func.isRequired,
  sendDTMF: _react.PropTypes.func.isRequired,
  toVoiceMail: _react.PropTypes.func.isRequired,
  replyWithMessage: _react.PropTypes.func.isRequired,
  formatPhone: _react.PropTypes.func.isRequired,
  onAdd: _react.PropTypes.func.isRequired,
  children: _react.PropTypes.node
};

ActiveCallPage.defaultProps = {
  children: undefined
};

function mapToProps(_, _ref) {
  var webphone = _ref.webphone,
      locale = _ref.locale;

  var currentSession = webphone.currentSession || {};
  return {
    currentLocale: locale.currentLocale,
    session: currentSession,
    minimized: webphone.minimized
  };
}

function mapToFunctions(_, _ref2) {
  var webphone = _ref2.webphone,
      regionSettings = _ref2.regionSettings,
      router = _ref2.router;

  return {
    formatPhone: function formatPhone(phoneNumber) {
      return (0, _formatNumber2.default)({
        phoneNumber: phoneNumber,
        areaCode: regionSettings.areaCode,
        countryCode: regionSettings.countryCode
      });
    },
    hangup: webphone.hangup,
    answer: webphone.answer,
    reject: webphone.reject,
    onMute: function onMute(sessionId) {
      return webphone.mute(sessionId);
    },
    onUnmute: function onUnmute(sessionId) {
      return webphone.unmute(sessionId);
    },
    onHold: function onHold(sessionId) {
      return webphone.hold(sessionId);
    },
    onUnhold: function onUnhold(sessionId) {
      return webphone.unhold(sessionId);
    },
    onRecord: function onRecord(sessionId) {
      return webphone.startRecord(sessionId);
    },
    onStopRecord: function onStopRecord(sessionId) {
      return webphone.stopRecord(sessionId);
    },
    onAdd: function onAdd() {
      router.history.push('/');
      webphone.toggleMinimized();
    },
    sendDTMF: function sendDTMF(value, sessionId) {
      return webphone.sendDTMF(value, sessionId);
    },
    toVoiceMail: function toVoiceMail(sessionId) {
      return webphone.toVoiceMail(sessionId);
    },
    replyWithMessage: function replyWithMessage(sessionId, message) {
      return webphone.replyWithMessage(sessionId, message);
    },
    toggleMinimized: webphone.toggleMinimized
  };
}

var ActiveCallContainer = (0, _reactRedux.connect)(mapToProps, mapToFunctions)(ActiveCallPage);

ActiveCallContainer.propTypes = {
  webphone: _react.PropTypes.instanceOf(_Webphone2.default).isRequired,
  locale: _react.PropTypes.instanceOf(_Locale2.default).isRequired,
  regionSettings: _react.PropTypes.instanceOf(_RegionSettings2.default).isRequired
};

exports.default = ActiveCallContainer;
//# sourceMappingURL=index.js.map

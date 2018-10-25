'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _sessionStatus = require('ringcentral-integration/modules/Webphone/sessionStatus');

var _sessionStatus2 = _interopRequireDefault(_sessionStatus);

var _callDirections = require('ringcentral-integration/enums/callDirections');

var _callDirections2 = _interopRequireDefault(_callDirections);

var _callLogHelpers = require('ringcentral-integration/lib/callLogHelpers');

var _parseNumber = require('ringcentral-integration/lib/parseNumber');

var _parseNumber2 = _interopRequireDefault(_parseNumber);

var _DurationCounter = require('../DurationCounter');

var _DurationCounter2 = _interopRequireDefault(_DurationCounter);

var _ContactDisplay = require('../ContactDisplay');

var _ContactDisplay2 = _interopRequireDefault(_ContactDisplay);

var _ActionMenu = require('../ActionMenu');

var _ActionMenu2 = _interopRequireDefault(_ActionMenu);

var _CircleButton = require('../CircleButton');

var _CircleButton2 = _interopRequireDefault(_CircleButton);

var _End = require('../../assets/images/End.svg');

var _End2 = _interopRequireDefault(_End);

var _Answer = require('../../assets/images/Answer.svg');

var _Answer2 = _interopRequireDefault(_Answer);

var _Voicemail = require('../../assets/images/Voicemail.svg');

var _Voicemail2 = _interopRequireDefault(_Voicemail);

var _CallIcon = require('../CallIcon');

var _CallIcon2 = _interopRequireDefault(_CallIcon);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

var _i18n = require('./i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WebphoneButtons(_ref) {
  var currentLocale = _ref.currentLocale,
      session = _ref.session,
      webphoneAnswer = _ref.webphoneAnswer,
      webphoneReject = _ref.webphoneReject,
      webphoneHangup = _ref.webphoneHangup,
      webphoneResume = _ref.webphoneResume,
      showAnswer = _ref.showAnswer;

  if (!session || !webphoneAnswer || !webphoneHangup) {
    return null;
  }
  var hangupFunc = webphoneHangup;
  var resumeFunc = webphoneResume;
  var endIcon = _End2.default;
  var rejectTitle = _i18n2.default.getString('hangup', currentLocale);
  var acceptTitle = _i18n2.default.getString('accept', currentLocale);
  if (session.direction === _callDirections2.default.inbound && session.callStatus === _sessionStatus2.default.connecting) {
    hangupFunc = webphoneReject;
    resumeFunc = webphoneAnswer;
    endIcon = _Voicemail2.default;
    rejectTitle = _i18n2.default.getString('toVoicemail', currentLocale);
  }
  return _react2.default.createElement(
    'div',
    { className: _styles2.default.webphoneButtons },
    _react2.default.createElement(
      'span',
      { title: rejectTitle, className: _styles2.default.webphoneButton },
      _react2.default.createElement(_CircleButton2.default, {
        className: _styles2.default.rejectButton,
        onClick: function onClick(e) {
          e.stopPropagation();
          hangupFunc(session.id);
        },
        iconWidth: 260,
        iconX: 120,
        icon: endIcon,
        showBorder: false
      })
    ),
    showAnswer ? _react2.default.createElement(
      'span',
      { title: acceptTitle, className: _styles2.default.webphoneButton },
      _react2.default.createElement(_CircleButton2.default, {
        className: _styles2.default.answerButton,
        onClick: function onClick(e) {
          e.stopPropagation();
          resumeFunc(session.id);
        },
        icon: _Answer2.default,
        showBorder: false
      })
    ) : null
  );
}

WebphoneButtons.propTypes = {
  currentLocale: _propTypes2.default.string.isRequired,
  session: _propTypes2.default.object,
  webphoneAnswer: _propTypes2.default.func,
  webphoneReject: _propTypes2.default.func,
  webphoneHangup: _propTypes2.default.func,
  webphoneResume: _propTypes2.default.func,
  showAnswer: _propTypes2.default.bool
};

WebphoneButtons.defaultProps = {
  session: undefined,
  webphoneAnswer: undefined,
  webphoneReject: undefined,
  webphoneHangup: undefined,
  webphoneResume: undefined,
  showAnswer: true
};

var ActiveCallItem = function (_Component) {
  (0, _inherits3.default)(ActiveCallItem, _Component);

  function ActiveCallItem(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, ActiveCallItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ActiveCallItem.__proto__ || (0, _getPrototypeOf2.default)(ActiveCallItem)).call(this, props));

    _this.onSelectContact = function (value) {
      var nameMatches = _this.getContactMatches();
      var selected = nameMatches.findIndex(function (match) {
        return match.id === value.id;
      });
      _this._userSelection = true;
      _this.setState({
        selected: selected
      });
      if (_this.props.call.activityMatches.length > 0 && _this.props.autoLog) {
        _this.logCall({ redirect: false, selected: selected });
      }
    };

    _this.getSelectedContact = function () {
      var selected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.selected;

      var contactMatches = _this.getContactMatches();
      return selected > -1 && contactMatches[selected] || contactMatches.length === 1 && contactMatches[0] || null;
    };

    _this.clickToSms = function () {
      if (_this.props.onClickToSms) {
        var phoneNumber = _this.getPhoneNumber();
        var contact = _this.getSelectedContact();
        if (contact) {
          _this.props.onClickToSms((0, _extends3.default)({}, contact, {
            phoneNumber: phoneNumber
          }));
        } else {
          var formatted = _this.props.formatPhone(phoneNumber);
          _this.props.onClickToSms({
            name: _this.props.enableContactFallback ? _this.getFallbackContactName() : formatted,
            phoneNumber: phoneNumber
          }, true);
        }
      }
    };

    _this.createSelectedContact = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(entityType) {
        var phoneNumber;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof _this.props.onCreateContact === 'function' && _this._mounted && !_this.state.isCreating)) {
                  _context.next = 6;
                  break;
                }

                _this.setState({
                  isCreating: true
                });
                // console.log('start to create: isCreating...', this.state.isCreating);
                phoneNumber = _this.getPhoneNumber();
                _context.next = 5;
                return _this.props.onCreateContact({
                  phoneNumber: phoneNumber,
                  name: _this.props.enableContactFallback ? _this.getFallbackContactName() : '',
                  entityType: entityType
                });

              case 5:

                if (_this._mounted) {
                  _this.setState({
                    isCreating: false
                  });
                  // console.log('created: isCreating...', this.state.isCreating);
                }

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.viewSelectedContact = function () {
      if (typeof _this.props.onViewContact === 'function') {
        _this.props.onViewContact({
          contact: _this.getSelectedContact()
        });
      }
    };

    _this.logCall = _this.logCall.bind(_this);

    _this.externalViewEntity = function () {
      return _this.props.externalViewEntity(_this.props.call);
    };

    _this.state = {
      selected: 0,
      isLogging: false,
      extended: false,
      isCreating: false
    };
    _this._userSelection = false;
    _this.contactDisplay = null;

    _this.toggleExtended = function (e) {
      if (_this.props.isOnConferenceCall) {
        return;
      }
      if (_this.contactDisplay && _this.contactDisplay.contains(e.target)) {
        return;
      }
      _this.setState(function (preState) {
        return {
          extended: !preState.extended
        };
      });
    };

    _this.webphoneToVoicemail = function (sessionId) {
      if (typeof _this.props.webphoneToVoicemail !== 'function') {
        return;
      }
      _this.props.webphoneToVoicemail(sessionId);
      _this.toVoicemailTimeout = setTimeout(function () {
        _this.props.webphoneReject(sessionId);
      }, 3000);
    };
    return _this;
  }

  (0, _createClass3.default)(ActiveCallItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._mounted = true;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._mounted = false;
      if (this.toVoicemailTimeout) {
        clearTimeout(this.toVoicemailTimeout);
        this.toVoicemailTimeout = null;
      }
    }
  }, {
    key: 'getFallbackContactName',
    value: function getFallbackContactName() {
      return (0, _callLogHelpers.isInbound)(this.props.call) ? this.props.call.from.name : this.props.call.to.name;
    }
  }, {
    key: 'getContactMatches',
    value: function getContactMatches() {
      var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      return (0, _callLogHelpers.isInbound)(nextProps.call) ? nextProps.call.fromMatches : nextProps.call.toMatches;
    }
  }, {
    key: 'getPhoneNumber',
    value: function getPhoneNumber() {
      return (0, _callLogHelpers.isInbound)(this.props.call) ? this.props.call.from.phoneNumber || this.props.call.from.extensionNumber : this.props.call.to.phoneNumber || this.props.call.to.extensionNumber;
    }
  }, {
    key: 'getMyPhoneNumber',
    value: function getMyPhoneNumber() {
      return (0, _callLogHelpers.isInbound)(this.props.call) ? this.props.call.to.phoneNumber || this.props.call.to.extensionNumber : this.props.call.from.phoneNumber || this.props.call.from.extensionNumber;
    }
  }, {
    key: 'getCallInfo',
    value: function getCallInfo() {
      var _props = this.props,
          _props$call = _props.call,
          telephonyStatus = _props$call.telephonyStatus,
          startTime = _props$call.startTime,
          webphoneSession = _props$call.webphoneSession,
          offset = _props$call.offset,
          disableLinks = _props.disableLinks,
          currentLocale = _props.currentLocale,
          formatPhone = _props.formatPhone,
          showCallDetail = _props.showCallDetail;


      if (!showCallDetail) {
        return null;
      }
      var myPhoneNumber = this.getMyPhoneNumber();

      if (webphoneSession) {
        return _react2.default.createElement(
          'div',
          { className: _styles2.default.callDetail },
          _react2.default.createElement(
            'span',
            { className: _styles2.default.label },
            (0, _callLogHelpers.isInbound)(this.props.call) ? _i18n2.default.getString('to', currentLocale) : _i18n2.default.getString('from', currentLocale),
            ':'
          ),
          myPhoneNumber ? formatPhone(myPhoneNumber) : _i18n2.default.getString('anonymous', currentLocale)
        );
      }
      var telephonyStatusInfo = _i18n2.default.getString(telephonyStatus, currentLocale);
      return _react2.default.createElement(
        'div',
        { className: _styles2.default.callDetail },
        disableLinks ? _i18n2.default.getString('unavailable', currentLocale) : _react2.default.createElement(_DurationCounter2.default, { startTime: startTime, offset: offset }),
        _react2.default.createElement(
          'span',
          { className: _styles2.default.split },
          '|'
        ),
        _react2.default.createElement(
          'span',
          { title: telephonyStatusInfo },
          telephonyStatusInfo
        )
      );
    }
  }, {
    key: 'logCall',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref3) {
        var _ref3$redirect = _ref3.redirect,
            redirect = _ref3$redirect === undefined ? true : _ref3$redirect,
            selected = _ref3.selected;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(typeof this.props.onLogCall === 'function' && this._mounted && !this.state.isLogging)) {
                  _context2.next = 5;
                  break;
                }

                this.setState({
                  isLogging: true
                });
                _context2.next = 4;
                return this.props.onLogCall({
                  contact: this.getSelectedContact(selected),
                  call: this.props.call,
                  redirect: redirect
                });

              case 4:
                if (this._mounted) {
                  this.setState({
                    isLogging: false
                  });
                }

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function logCall(_x4) {
        return _ref4.apply(this, arguments);
      }

      return logCall;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          _props2$call = _props2.call,
          direction = _props2$call.direction,
          activityMatches = _props2$call.activityMatches,
          webphoneSession = _props2$call.webphoneSession,
          disableLinks = _props2.disableLinks,
          currentLocale = _props2.currentLocale,
          areaCode = _props2.areaCode,
          countryCode = _props2.countryCode,
          outboundSmsPermission = _props2.outboundSmsPermission,
          internalSmsPermission = _props2.internalSmsPermission,
          enableContactFallback = _props2.enableContactFallback,
          isLogging = _props2.isLogging,
          brand = _props2.brand,
          showContactDisplayPlaceholder = _props2.showContactDisplayPlaceholder,
          onClickToSms = _props2.onClickToSms,
          onViewContact = _props2.onViewContact,
          onCreateContact = _props2.onCreateContact,
          createEntityTypes = _props2.createEntityTypes,
          onLogCall = _props2.onLogCall,
          webphoneAnswer = _props2.webphoneAnswer,
          webphoneHangup = _props2.webphoneHangup,
          webphoneResume = _props2.webphoneResume,
          sourceIcons = _props2.sourceIcons,
          phoneTypeRenderer = _props2.phoneTypeRenderer,
          phoneSourceNameRenderer = _props2.phoneSourceNameRenderer,
          renderContactName = _props2.renderContactName,
          renderExtraButton = _props2.renderExtraButton,
          contactDisplayStyle = _props2.contactDisplayStyle,
          externalViewEntity = _props2.externalViewEntity,
          externalHasEntity = _props2.externalHasEntity,
          readTextPermission = _props2.readTextPermission,
          isOnConferenceCall = _props2.isOnConferenceCall,
          hasActionMenu = _props2.hasActionMenu,
          showAnswer = _props2.showAnswer,
          avatarUrl = _props2.avatarUrl,
          showAvatar = _props2.showAvatar;

      var phoneNumber = this.getPhoneNumber();
      var parsedInfo = (0, _parseNumber2.default)({
        phoneNumber: phoneNumber,
        countryCode: countryCode,
        areaCode: areaCode
      });
      var isExtension = !parsedInfo.hasPlus && parsedInfo.number && parsedInfo.number.length <= 6;
      var disableClickToSms = !(onClickToSms && (isExtension ? internalSmsPermission : outboundSmsPermission));
      var contactMatches = this.getContactMatches();
      var fallbackContactName = this.getFallbackContactName();
      var ringing = (0, _callLogHelpers.isRinging)(this.props.call);
      var callDetail = this.getCallInfo();
      var contactName = typeof renderContactName === 'function' ? renderContactName(this.props.call) : undefined;
      var extraButton = typeof renderExtraButton === 'function' ? renderExtraButton(this.props.call) : undefined;

      return _react2.default.createElement(
        'div',
        { className: _styles2.default.root, onClick: this.toggleExtended },
        _react2.default.createElement(
          'div',
          { className: _styles2.default.wrapper },
          _react2.default.createElement(_CallIcon2.default, {
            direction: direction,
            ringing: ringing,
            active: true,
            missed: false,
            inboundTitle: _i18n2.default.getString('inboundCall', currentLocale),
            outboundTitle: _i18n2.default.getString('outboundCall', currentLocale),
            missedTitle: _i18n2.default.getString('missedCall', currentLocale),
            isOnConferenceCall: isOnConferenceCall,
            showAvatar: showAvatar,
            avatarUrl: avatarUrl
          }),
          _react2.default.createElement(
            'div',
            { className: _styles2.default.infoWrapper },
            _react2.default.createElement(_ContactDisplay2.default, {
              isOnConferenceCall: isOnConferenceCall,
              contactName: contactName,
              className: isOnConferenceCall ? (0, _classnames2.default)(_styles2.default.conferenceContactDisplay) : (0, _classnames2.default)(_styles2.default.contactDisplay, contactDisplayStyle),
              contactMatches: contactMatches,
              selected: this.state.selected,
              onSelectContact: this.onSelectContact,
              disabled: disableLinks,
              isLogging: isLogging || this.state.isLogging,
              fallBackName: fallbackContactName,
              enableContactFallback: enableContactFallback,
              areaCode: areaCode,
              countryCode: countryCode,
              phoneNumber: phoneNumber,
              currentLocale: currentLocale,
              brand: brand,
              showPlaceholder: showContactDisplayPlaceholder,
              showType: false,
              sourceIcons: sourceIcons,
              phoneTypeRenderer: phoneTypeRenderer,
              phoneSourceNameRenderer: phoneSourceNameRenderer,
              stopPropagation: true
            }),
            isOnConferenceCall ? null : callDetail
          ),
          _react2.default.createElement(WebphoneButtons, {
            session: webphoneSession,
            webphoneAnswer: webphoneAnswer,
            webphoneReject: this.webphoneToVoicemail,
            webphoneHangup: webphoneHangup,
            webphoneResume: webphoneResume,
            currentLocale: currentLocale,
            showAnswer: showAnswer
          }),
          extraButton
        ),
        hasActionMenu ? _react2.default.createElement(_ActionMenu2.default, {
          extended: this.state.extended,
          onToggle: this.toggleExtended,
          currentLocale: currentLocale,
          disableLinks: disableLinks,
          phoneNumber: phoneNumber,
          onClickToSms: readTextPermission ? function () {
            return _this3.clickToSms({ countryCode: countryCode, areaCode: areaCode });
          } : undefined,
          hasEntity: !!contactMatches.length,
          onViewEntity: onViewContact && this.viewSelectedContact,
          onCreateEntity: onCreateContact && this.createSelectedContact,
          createEntityTypes: createEntityTypes,
          textTitle: _i18n2.default.getString('text', currentLocale),
          onLog: onLogCall,
          isLogging: isLogging || this.state.isLogging,
          isLogged: activityMatches.length > 0,
          isCreating: this.state.isCreating,
          addLogTitle: _i18n2.default.getString('addLog', currentLocale),
          editLogTitle: _i18n2.default.getString('editLog', currentLocale),
          createEntityTitle: _i18n2.default.getString('addEntity', currentLocale),
          viewEntityTitle: _i18n2.default.getString('viewDetails', currentLocale),
          externalViewEntity: externalViewEntity && this.externalViewEntity,
          externalHasEntity: externalHasEntity && externalHasEntity(this.props.call),
          disableClickToSms: disableClickToSms
        }) : null
      );
    }
  }]);
  return ActiveCallItem;
}(_react.Component);

exports.default = ActiveCallItem;


ActiveCallItem.propTypes = {
  call: _propTypes2.default.shape({
    direction: _propTypes2.default.string.isRequired,
    telephonyStatus: _propTypes2.default.string,
    startTime: _propTypes2.default.number.isRequired,
    activityMatches: _propTypes2.default.array.isRequired,
    fromMatches: _propTypes2.default.array.isRequired,
    toMatches: _propTypes2.default.array.isRequired,
    from: _propTypes2.default.shape({
      phoneNumber: _propTypes2.default.string,
      extensionNumber: _propTypes2.default.string,
      name: _propTypes2.default.string
    }).isRequired,
    to: _propTypes2.default.shape({
      phoneNumber: _propTypes2.default.string,
      extensionNumber: _propTypes2.default.string,
      name: _propTypes2.default.string
    }),
    webphoneSession: _propTypes2.default.object
  }).isRequired,
  areaCode: _propTypes2.default.string.isRequired,
  countryCode: _propTypes2.default.string.isRequired,
  currentLocale: _propTypes2.default.string.isRequired,
  disableLinks: _propTypes2.default.bool,
  outboundSmsPermission: _propTypes2.default.bool,
  internalSmsPermission: _propTypes2.default.bool,
  isLogging: _propTypes2.default.bool,
  webphoneAnswer: _propTypes2.default.func,
  webphoneReject: _propTypes2.default.func,
  webphoneHangup: _propTypes2.default.func,
  webphoneResume: _propTypes2.default.func,
  webphoneToVoicemail: _propTypes2.default.func,
  enableContactFallback: _propTypes2.default.bool,
  autoLog: _propTypes2.default.bool,
  brand: _propTypes2.default.string,
  showContactDisplayPlaceholder: _propTypes2.default.bool,
  formatPhone: _propTypes2.default.func.isRequired,
  onClickToSms: _propTypes2.default.func,
  onCreateContact: _propTypes2.default.func,
  createEntityTypes: _propTypes2.default.array,
  onLogCall: _propTypes2.default.func,
  onViewContact: _propTypes2.default.func,
  sourceIcons: _propTypes2.default.object,
  phoneTypeRenderer: _propTypes2.default.func,
  phoneSourceNameRenderer: _propTypes2.default.func,
  renderContactName: _propTypes2.default.func,
  renderExtraButton: _propTypes2.default.func,
  contactDisplayStyle: _propTypes2.default.string,
  externalViewEntity: _propTypes2.default.func,
  externalHasEntity: _propTypes2.default.func,
  readTextPermission: _propTypes2.default.bool,
  isOnConferenceCall: _propTypes2.default.bool,
  hasActionMenu: _propTypes2.default.bool,
  showAnswer: _propTypes2.default.bool,
  avatarUrl: _propTypes2.default.string,
  showAvatar: _propTypes2.default.bool,
  showCallDetail: _propTypes2.default.bool
};

ActiveCallItem.defaultProps = {
  onLogCall: undefined,
  onClickToSms: undefined,
  onViewContact: undefined,
  onCreateContact: undefined,
  createEntityTypes: undefined,
  isLogging: false,
  outboundSmsPermission: false,
  internalSmsPermission: false,
  disableLinks: false,
  webphoneAnswer: undefined,
  webphoneReject: undefined,
  webphoneHangup: undefined,
  webphoneResume: undefined,
  webphoneToVoicemail: undefined,
  enableContactFallback: undefined,
  autoLog: false,
  brand: 'RingCentral',
  showContactDisplayPlaceholder: true,
  sourceIcons: undefined,
  phoneTypeRenderer: undefined,
  phoneSourceNameRenderer: undefined,
  renderContactName: undefined,
  renderExtraButton: undefined,
  contactDisplayStyle: undefined,
  externalViewEntity: undefined,
  externalHasEntity: undefined,
  readTextPermission: true,
  isOnConferenceCall: false,
  hasActionMenu: true,
  showAnswer: true,
  avatarUrl: null,
  showAvatar: false,
  showCallDetail: true
};
//# sourceMappingURL=index.js.map

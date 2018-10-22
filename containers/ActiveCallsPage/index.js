'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.mapToFunctions = exports.mapToProps = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _reactRedux = require('react-redux');

var _formatNumber = require('ringcentral-integration/lib/formatNumber');

var _formatNumber2 = _interopRequireDefault(_formatNumber);

var _callDirections = require('ringcentral-integration/enums/callDirections');

var _callDirections2 = _interopRequireDefault(_callDirections);

var _callLogHelpers = require('ringcentral-integration/lib/callLogHelpers');

var _callingModes = require('ringcentral-integration/modules/CallingSettings/callingModes');

var _callingModes2 = _interopRequireDefault(_callingModes);

var _phoneContext = require('../../lib/phoneContext');

var _ActiveCallsPanel = require('../../components/ActiveCallsPanel');

var _ActiveCallsPanel2 = _interopRequireDefault(_ActiveCallsPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapToProps(_, _ref) {
  var _ref$phone = _ref.phone,
      brand = _ref$phone.brand,
      callLogger = _ref$phone.callLogger,
      callMonitor = _ref$phone.callMonitor,
      locale = _ref$phone.locale,
      regionSettings = _ref$phone.regionSettings,
      rolesAndPermissions = _ref$phone.rolesAndPermissions,
      conferenceCall = _ref$phone.conferenceCall,
      callingSettings = _ref$phone.callingSettings,
      connectivityMonitor = _ref$phone.connectivityMonitor,
      rateLimiter = _ref$phone.rateLimiter,
      _ref$showContactDispl = _ref.showContactDisplayPlaceholder,
      showContactDisplayPlaceholder = _ref$showContactDispl === undefined ? false : _ref$showContactDispl,
      _ref$showRingoutCallC = _ref.showRingoutCallControl,
      showRingoutCallControl = _ref$showRingoutCallC === undefined ? false : _ref$showRingoutCallC,
      useV2 = _ref.useV2;

  var isWebRTC = callingSettings.callingMode === _callingModes2.default.webphone;

  return {
    currentLocale: locale.currentLocale,
    activeRingCalls: callMonitor.activeRingCalls,
    activeOnHoldCalls: callMonitor.activeOnHoldCalls,
    activeCurrentCalls: callMonitor.activeCurrentCalls,
    otherDeviceCalls: callMonitor.otherDeviceCalls,
    areaCode: regionSettings.areaCode,
    countryCode: regionSettings.countryCode,
    outboundSmsPermission: !!(rolesAndPermissions.permissions && rolesAndPermissions.permissions.OutboundSMS),
    internalSmsPermission: !!(rolesAndPermissions.permissions && rolesAndPermissions.permissions.InternalSMS),
    showSpinner: !!(conferenceCall && conferenceCall.isMerging),
    brand: brand.fullName,
    showContactDisplayPlaceholder: showContactDisplayPlaceholder,
    showRingoutCallControl: showRingoutCallControl,
    autoLog: !!(callLogger && callLogger.autoLog),
    isWebRTC: isWebRTC,
    conferenceCallParties: conferenceCall ? conferenceCall.partyProfiles : null,
    useV2: useV2,
    disableLinks: !connectivityMonitor.connectivity || rateLimiter.throttling
  };
}

function mapToFunctions(_, _ref2) {
  var _this = this;

  var _ref2$phone = _ref2.phone,
      callLogger = _ref2$phone.callLogger,
      composeText = _ref2$phone.composeText,
      contactMatcher = _ref2$phone.contactMatcher,
      contactSearch = _ref2$phone.contactSearch,
      regionSettings = _ref2$phone.regionSettings,
      routerInteraction = _ref2$phone.routerInteraction,
      webphone = _ref2$phone.webphone,
      callingSettings = _ref2$phone.callingSettings,
      conferenceCall = _ref2$phone.conferenceCall,
      callMonitor = _ref2$phone.callMonitor,
      activeCallControl = _ref2$phone.activeCallControl,
      _ref2$composeTextRout = _ref2.composeTextRoute,
      composeTextRoute = _ref2$composeTextRout === undefined ? '/composeText' : _ref2$composeTextRout,
      _ref2$callCtrlRoute = _ref2.callCtrlRoute,
      callCtrlRoute = _ref2$callCtrlRoute === undefined ? '/calls/active' : _ref2$callCtrlRoute,
      onCreateContact = _ref2.onCreateContact,
      onLogCall = _ref2.onLogCall,
      isLoggedContact = _ref2.isLoggedContact,
      onCallsEmpty = _ref2.onCallsEmpty,
      onViewContact = _ref2.onViewContact,
      _ref2$showViewContact = _ref2.showViewContact,
      showViewContact = _ref2$showViewContact === undefined ? true : _ref2$showViewContact,
      getAvatarUrl = _ref2.getAvatarUrl,
      useV2 = _ref2.useV2;

  return {
    formatPhone: function formatPhone(phoneNumber) {
      return (0, _formatNumber2.default)({
        phoneNumber: phoneNumber,
        areaCode: regionSettings.areaCode,
        countryCode: regionSettings.countryCode
      });
    },
    webphoneAnswer: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(sessionId) {
        var session;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (webphone) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                session = webphone.sessions.find(function (session) {
                  return session.id === sessionId;
                });

                if (conferenceCall && session && session.direction === _callDirections2.default.inbound) {
                  conferenceCall.closeMergingPair();
                }

                webphone.answer(sessionId);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function webphoneAnswer(_x) {
        return _ref3.apply(this, arguments);
      }

      return webphoneAnswer;
    }(),
    webphoneToVoicemail: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _args2 = arguments;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt('return', webphone && webphone.toVoiceMail.apply(webphone, _args2));

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function webphoneToVoicemail() {
        return _ref4.apply(this, arguments);
      }

      return webphoneToVoicemail;
    }(),
    webphoneReject: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var _args3 = arguments;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt('return', webphone && webphone.reject.apply(webphone, _args3));

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function webphoneReject() {
        return _ref5.apply(this, arguments);
      }

      return webphoneReject;
    }(),
    webphoneHangup: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var _args4 = arguments;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // user action track
                callMonitor.allCallsClickHangupTrack();
                return _context4.abrupt('return', webphone && webphone.hangup.apply(webphone, _args4));

              case 2:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function webphoneHangup() {
        return _ref6.apply(this, arguments);
      }

      return webphoneHangup;
    }(),
    webphoneResume: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
        var _args5 = arguments;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (webphone) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt('return');

              case 2:
                _context5.next = 4;
                return webphone.resume.apply(webphone, _args5);

              case 4:
                if (routerInteraction.currentPath !== callCtrlRoute && !useV2) {
                  routerInteraction.push(callCtrlRoute);
                }

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function webphoneResume() {
        return _ref7.apply(this, arguments);
      }

      return webphoneResume;
    }(),
    webphoneHold: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
        var _args6 = arguments;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                // user action track
                callMonitor.allCallsClickHoldTrack();
                return _context6.abrupt('return', webphone && webphone.hold.apply(webphone, _args6));

              case 2:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function webphoneHold() {
        return _ref8.apply(this, arguments);
      }

      return webphoneHold;
    }(),
    ringoutHangup: function () {
      var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
        var _args7 = arguments;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                // user action track
                callMonitor.allCallsClickHangupTrack();
                return _context7.abrupt('return', activeCallControl && activeCallControl.hangUp.apply(activeCallControl, _args7));

              case 2:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function ringoutHangup() {
        return _ref9.apply(this, arguments);
      }

      return ringoutHangup;
    }(),
    ringoutTransfer: function () {
      var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(sessionId) {
        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                routerInteraction.push('/transfer/' + sessionId);

              case 1:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function ringoutTransfer(_x2) {
        return _ref10.apply(this, arguments);
      }

      return ringoutTransfer;
    }(),
    ringoutReject: function () {
      var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(sessionId) {
        return _regenerator2.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                // user action track
                callMonitor.allCallsClickRejectTrack();
                return _context9.abrupt('return', activeCallControl && activeCallControl.reject(sessionId));

              case 2:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function ringoutReject(_x3) {
        return _ref11.apply(this, arguments);
      }

      return ringoutReject;
    }(),

    onViewContact: showViewContact ? onViewContact || function (_ref12) {
      var contact = _ref12.contact;
      var id = contact.id,
          type = contact.type;

      routerInteraction.push('/contacts/' + type + '/' + id + '?direct=true');
    } : null,
    onClickToSms: composeText ? function () {
      var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(contact) {
        var isDummyContact = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return _regenerator2.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (routerInteraction) {
                  routerInteraction.push(composeTextRoute);
                }
                composeText.clean();
                if (contact.name && contact.phoneNumber && isDummyContact) {
                  composeText.updateTypingToNumber(contact.name);
                  contactSearch.search({ searchString: contact.name });
                } else {
                  composeText.addToRecipients(contact);
                }

              case 3:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, _this);
      }));

      return function (_x5) {
        return _ref13.apply(this, arguments);
      };
    }() : undefined,
    onCreateContact: onCreateContact ? function () {
      var _ref15 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(_ref14) {
        var phoneNumber = _ref14.phoneNumber,
            name = _ref14.name,
            entityType = _ref14.entityType;
        var hasMatchNumber;
        return _regenerator2.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return contactMatcher.hasMatchNumber({
                  phoneNumber: phoneNumber,
                  ignoreCache: true
                });

              case 2:
                hasMatchNumber = _context11.sent;

                if (hasMatchNumber) {
                  _context11.next = 8;
                  break;
                }

                _context11.next = 6;
                return onCreateContact({ phoneNumber: phoneNumber, name: name, entityType: entityType });

              case 6:
                _context11.next = 8;
                return contactMatcher.forceMatchNumber({ phoneNumber: phoneNumber });

              case 8:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, _this);
      }));

      return function (_x6) {
        return _ref15.apply(this, arguments);
      };
    }() : undefined,
    isLoggedContact: isLoggedContact,
    onLogCall: onLogCall || callLogger && function () {
      var _ref17 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(_ref16) {
        var call = _ref16.call,
            contact = _ref16.contact,
            _ref16$redirect = _ref16.redirect,
            redirect = _ref16$redirect === undefined ? true : _ref16$redirect;
        return _regenerator2.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return callLogger.logCall({
                  call: call,
                  contact: contact,
                  redirect: redirect
                });

              case 2:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, _this);
      }));

      return function (_x7) {
        return _ref17.apply(this, arguments);
      };
    }(),
    onCallsEmpty: onCallsEmpty || function () {
      var isWebRTC = callingSettings.callingMode === _callingModes2.default.webphone;

      if (isWebRTC && !webphone.sessions.length) {
        routerInteraction.push('/dialer');
      }
    },
    isSessionAConferenceCall: function isSessionAConferenceCall(sessionId) {
      return !!(conferenceCall && conferenceCall.isConferenceSession(sessionId));
    },
    onCallItemClick: function onCallItemClick(call) {
      if (!call.webphoneSession) {
        // For ringout call
        if ((0, _callLogHelpers.isRingingInboundCall)(call)) {
          return;
        }

        var sessionId = call.sessionId;
        // to track the call item be clicked.

        callMonitor.callItemClickTrack();
        routerInteraction.push('/simplifycallctrl/' + sessionId);
      } else {
        // For webphone call
        // show the ring call modal when click a ringing call.
        if ((0, _callLogHelpers.isRingingInboundCall)(call)) {
          webphone.toggleMinimized(call.webphoneSession.id);
          return;
        }
        if (call.webphoneSession && call.webphoneSession.id) {
          // to track the call item be clicked.
          callMonitor.callItemClickTrack();
          routerInteraction.push(callCtrlRoute + '/' + call.webphoneSession.id);
        }
      }
    },

    getAvatarUrl: getAvatarUrl,
    updateSessionMatchedContact: function updateSessionMatchedContact(sessionId, contact) {
      return webphone.updateSessionMatchedContact(sessionId, contact);
    }
  };
}

var ActiveCallsPage = (0, _phoneContext.withPhone)((0, _reactRedux.connect)(mapToProps, mapToFunctions)(_ActiveCallsPanel2.default));

exports.mapToProps = mapToProps;
exports.mapToFunctions = mapToFunctions;
exports.default = ActiveCallsPage;
//# sourceMappingURL=index.js.map

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _desc, _value, _class2;

var _formatMessage = require('format-message');

var _formatMessage2 = _interopRequireDefault(_formatMessage);

var _RcModule2 = require('ringcentral-integration/lib/RcModule');

var _RcModule3 = _interopRequireDefault(_RcModule2);

var _di = require('ringcentral-integration/lib/di');

var _proxify = require('ringcentral-integration/lib/proxy/proxify');

var _proxify2 = _interopRequireDefault(_proxify);

var _ensureExist = require('ringcentral-integration/lib/ensureExist');

var _ensureExist2 = _interopRequireDefault(_ensureExist);

var _moduleStatuses = require('ringcentral-integration/enums/moduleStatuses');

var _moduleStatuses2 = _interopRequireDefault(_moduleStatuses);

var _callingModes = require('ringcentral-integration/modules/CallingSettings/callingModes');

var _callingModes2 = _interopRequireDefault(_callingModes);

var _Enum = require('ringcentral-integration/lib/Enum');

var _baseMessageTypes = require('../AdapterCore/baseMessageTypes');

var _baseMessageTypes2 = _interopRequireDefault(_baseMessageTypes);

var _baseActionTypes = require('./baseActionTypes');

var _baseActionTypes2 = _interopRequireDefault(_baseActionTypes);

var _getDefaultGlobalStorageReducer = require('./getDefaultGlobalStorageReducer');

var _getDefaultGlobalStorageReducer2 = _interopRequireDefault(_getDefaultGlobalStorageReducer);

var _IframeMessageTransport = require('../IframeMessageTransport');

var _IframeMessageTransport2 = _interopRequireDefault(_IframeMessageTransport);

var _i18n = require('../../components/CallMonitorBar/i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var ALL_CALL_PATH = '/calls';
var ACTIVE_CALL_PATH = '/calls/active';

var AdapterModuleCore = (_dec = (0, _di.Module)({
  deps: ['CallingSettings', 'GlobalStorage', 'Locale', 'Presence', 'RouterInteraction', 'Storage', 'Webphone', 'CallMonitor', { dep: 'UserGuide', optional: true }, { dep: 'QuickAccess', optional: true }]
}), _dec(_class = (_class2 = function (_RcModule) {
  (0, _inherits3.default)(AdapterModuleCore, _RcModule);

  function AdapterModuleCore(_ref) {
    var prefix = _ref.prefix,
        _ref$storageKey = _ref.storageKey,
        storageKey = _ref$storageKey === undefined ? 'adapterCore' : _ref$storageKey,
        _ref$messageTypes = _ref.messageTypes,
        messageTypes = _ref$messageTypes === undefined ? _baseMessageTypes2.default : _ref$messageTypes,
        _ref$actionTypes = _ref.actionTypes,
        actionTypes = _ref$actionTypes === undefined ? _baseActionTypes2.default : _ref$actionTypes,
        callingSettings = _ref.callingSettings,
        globalStorage = _ref.globalStorage,
        locale = _ref.locale,
        presence = _ref.presence,
        routerInteraction = _ref.routerInteraction,
        webphone = _ref.webphone,
        callMonitor = _ref.callMonitor,
        userGuide = _ref.userGuide,
        quickAccess = _ref.quickAccess,
        _ref$getGlobalStorage = _ref.getGlobalStorageReducer,
        getGlobalStorageReducer = _ref$getGlobalStorage === undefined ? _getDefaultGlobalStorageReducer2.default : _ref$getGlobalStorage,
        _ref$messageTransport = _ref.messageTransport,
        messageTransport = _ref$messageTransport === undefined ? new _IframeMessageTransport2.default({
      targetWindow: window.parent
    }) : _ref$messageTransport,
        options = (0, _objectWithoutProperties3.default)(_ref, ['prefix', 'storageKey', 'messageTypes', 'actionTypes', 'callingSettings', 'globalStorage', 'locale', 'presence', 'routerInteraction', 'webphone', 'callMonitor', 'userGuide', 'quickAccess', 'getGlobalStorageReducer', 'messageTransport']);
    (0, _classCallCheck3.default)(this, AdapterModuleCore);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AdapterModuleCore.__proto__ || (0, _getPrototypeOf2.default)(AdapterModuleCore)).call(this, (0, _extends3.default)({
      prefix: prefix,
      actionTypes: actionTypes
    }, options)));

    _this._messageTypes = (0, _Enum.prefixEnum)({ enumMap: messageTypes, prefix: prefix });
    _this._locale = _ensureExist2.default.call(_this, locale, 'locale');
    _this._messageTransport = _ensureExist2.default.call(_this, messageTransport, 'messageTransport');
    _this._presence = _ensureExist2.default.call(_this, presence, 'presence');
    _this._router = _ensureExist2.default.call(_this, routerInteraction, 'routerInteraction');
    _this._callingSettings = callingSettings;
    _this._webphone = webphone;
    _this._callMonitor = callMonitor;
    _this._userGuide = userGuide;
    _this._quickAccess = quickAccess;

    _this._storageKey = storageKey;
    _this._globalStorage = _ensureExist2.default.call(_this, globalStorage, 'globalStorage');

    _this._globalStorage.registerReducer({
      key: _this._storageKey,
      reducer: getGlobalStorageReducer(_this.actionTypes)
    });

    _this.addSelector('localeStrings', function () {
      return _this._locale.ready;
    }, function () {
      return _this._locale.currentLocale;
    }, function () {
      return _this._callMonitor.activeRingCalls.length;
    }, function () {
      return _this._callMonitor.activeOnHoldCalls.length;
    }, function (localeReady, currentLocale, ringingCallsLength, onHoldCallsLength) {
      var ringCallsInfo = ringingCallsLength === 1 ? (0, _formatMessage2.default)(_i18n2.default.getString('incomingCall', currentLocale), { numberOf: ringingCallsLength }) : (0, _formatMessage2.default)(_i18n2.default.getString('incomingCalls', currentLocale), { numberOf: ringingCallsLength });
      var onHoldCallsInfo = onHoldCallsLength === 1 ? (0, _formatMessage2.default)(_i18n2.default.getString('callOnHold', currentLocale), { numberOf: onHoldCallsLength }) : (0, _formatMessage2.default)(_i18n2.default.getString('callsOnHold', currentLocale), { numberOf: onHoldCallsLength });
      return {
        currentCall: _i18n2.default.getString('currentCall', currentLocale),
        viewCalls: _i18n2.default.getString('viewCalls', currentLocale),
        ringCallsInfo: ringCallsInfo,
        onHoldCallsInfo: onHoldCallsInfo
      };
    });
    return _this;
  }

  (0, _createClass3.default)(AdapterModuleCore, [{
    key: 'initialize',
    value: function initialize() {
      var _this2 = this;

      this._messageTransport.addListener(function (msg) {
        return _this2._onMessage(msg);
      });
      this.store.subscribe(function () {
        return _this2._onStateChange();
      });
    }
  }, {
    key: '_shouldInit',
    value: function _shouldInit() {
      return this.pending && this._globalStorage.ready && this._locale.ready && this._router.ready;
    }
  }, {
    key: '_onStateChange',
    value: function _onStateChange() {
      if (this._shouldInit()) {
        this.store.dispatch({
          type: this.actionTypes.init
        });
        this._pushAdapterState();
        this._pushRingState();
        this.store.dispatch({
          type: this.actionTypes.initSuccess
        });
      }
      this._pushPresence();
      this._pushLocale();
      this._pushRingState();
    }
  }, {
    key: '_onMessage',
    value: function _onMessage(msg) {
      if (msg) {
        switch (msg.type) {
          case this._messageTypes.syncClosed:
            this._syncClosed(msg.closed);
            break;
          case this._messageTypes.syncMinimized:
            this._syncMinimized(msg.minimized);
            break;
          case this._messageTypes.syncSize:
            this._syncSize(msg.size);
            break;
          case this._messageTypes.syncPosition:
            this._syncPosition(msg.position);
            break;
          case this._messageTypes.presenceClicked:
            this._onPresenceClicked();
            break;
          case this._messageTypes.navigateToCurrentCall:
            this._onNavigateToCurrentCall();
            break;
          case this._messageTypes.navigateToViewCalls:
            this._onNavigateToViewCalls();
            break;
          default:
            break;
        }
      }
    }
  }, {
    key: '_syncClosed',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(closed) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.store.dispatch({
                  type: this.actionTypes.syncClosed,
                  closed: closed
                });

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _syncClosed(_x) {
        return _ref2.apply(this, arguments);
      }

      return _syncClosed;
    }()
  }, {
    key: '_syncMinimized',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(minimized) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.store.dispatch({
                  type: this.actionTypes.syncMinimized,
                  minimized: minimized
                });

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _syncMinimized(_x2) {
        return _ref3.apply(this, arguments);
      }

      return _syncMinimized;
    }()
  }, {
    key: '_syncSize',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.store.dispatch({
                  type: this.acitonTypes.syncSize,
                  size: size
                });

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _syncSize() {
        return _ref4.apply(this, arguments);
      }

      return _syncSize;
    }()
  }, {
    key: '_syncPosition',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.store.dispatch({
                  type: this.actionTypes.syncPosition,
                  position: position
                });

              case 1:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _syncPosition() {
        return _ref5.apply(this, arguments);
      }

      return _syncPosition;
    }()
  }, {
    key: '_pushRingState',
    value: function _pushRingState() {
      if (!this.ready || !this._callingSettings) return;

      var callingMode = this._callingSettings.callingMode;

      if (callingMode === _callingModes2.default.webphone) {
        var webphone = this._webphone;
        if (!webphone) {
          throw new Error('webphone is a required dependency for monitoring WebRTC call');
        }
        if (webphone.ringSession && webphone.ringSessionId !== this._ringSessionId) {
          this._ringSessionId = webphone.ringSessionId;
          this._postMessage({
            type: this._messageTypes.pushRingState,
            ringing: true
          });
        }
        // Check if ringing is over
        if (this._ringSessionId) {
          var ringingSessions = webphone.sessions.filter(function (session) {
            return session.callStatus === 'webphone-session-connecting' && session.direction === 'Inbound';
          });
          if (ringingSessions.length <= 0) {
            this._postMessage({
              type: this._messageTypes.pushRingState,
              ringing: false
            });
            this._ringSessionId = null;
          }
        }
        var ringingCallsLength = this._callMonitor.activeRingCalls.length;
        var onHoldCallsLength = this._callMonitor.activeOnHoldCalls.length;
        var currentStartTime = this._callMonitor.activeCurrentCalls && this._callMonitor.activeCurrentCalls.length > 0 && this._callMonitor.activeCurrentCalls[0].startTime || 0;
        if (this._lastRingCallsLength !== ringingCallsLength || this._lastOnHoldCallsLength !== onHoldCallsLength || this._lastCurrentStartTime !== currentStartTime) {
          this._lastRingCallsLength = ringingCallsLength;
          this._lastOnHoldCallsLength = onHoldCallsLength;
          this._lastCurrentStartTime = currentStartTime;
          this._postMessage({
            type: this._messageTypes.pushCalls,
            ringingCallsLength: ringingCallsLength,
            onHoldCallsLength: onHoldCallsLength,
            currentStartTime: currentStartTime
          });
          this._postMessage({
            type: this._messageTypes.pushLocale,
            strings: this._localeStrings
          });
        }
        this._showIncomingCallPage = !!(this._webphone && this._webphone.ringSession && !this._webphone.ringSession.minimized);
        if (this._lastPath !== this._router.currentPath || this._lastShowIncomingCallPage !== this._showIncomingCallPage) {
          this._lastPath = this._router.currentPath;
          this._lastShowIncomingCallPage = this._showIncomingCallPage;
          var onCurrentCallPath = (this._router.currentPath === ACTIVE_CALL_PATH || this._router.currentPath === ACTIVE_CALL_PATH + '/' + this._webphone.activeSessionId) && !this._showIncomingCallPage;
          if (this.onCurrentCallPath !== onCurrentCallPath || this._lastShowIncomingCallPage !== this._showIncomingCallPage) {
            this.onCurrentCallPath = onCurrentCallPath;
            this._lastShowIncomingCallPage = this._showIncomingCallPage;
            this._postMessage({
              type: this._messageTypes.pushOnCurrentCallPath,
              onCurrentCallPath: onCurrentCallPath
            });
          }
          var onAllCallsPath = this._router.currentPath === ALL_CALL_PATH && !this._showIncomingCallPage;
          if (this.onAllCallsPath !== onAllCallsPath) {
            this.onAllCallsPath = onAllCallsPath;
            this._postMessage({
              type: this._messageTypes.pushOnAllCallsPath,
              onAllCallsPath: onAllCallsPath
            });
          }
        }
      } else {
        var status = this._presence.telephonyStatus;
        if (this._presence.telephonyStatus !== this._telephonyStatus) {
          this._postMessage({
            type: this._messageTypes.pushRingState,
            ringing: status === 'Ringing'
          });
          this._telephonyStatus = status;
        }
      }
    }
  }, {
    key: '_pushPresence',
    value: function _pushPresence() {
      if (this.ready && (this._lastDndStatus !== this._presence.dndStatus || this._lastUserStatus !== this._presence.userStatus || this._lastTelephonyStatus !== this._presence.telephonyStatus)) {
        this._lastDndStatus = this._presence.dndStatus;
        this._lastUserStatus = this._presence.userStatus;
        this._lastTelephonyStatus = this._presence.telephonyStatus;
        this._postMessage({
          type: this._messageTypes.pushPresence,
          telephonyStatus: this._presence.telephonyStatus,
          userStatus: this._presence.userStatus,
          dndStatus: this._presence.dndStatus
        });
      }
    }
  }, {
    key: '_pushLocale',
    value: function _pushLocale() {
      if (this.ready && this._locale.ready && this._lastLocale !== this._locale.currentLocale) {
        this._lastLocale = this._locale.currentLocale;
        this._postMessage({
          type: this._messageTypes.pushLocale,
          locale: this._locale.currentLocale,
          strings: this._localeStrings
        });
      }
    }
  }, {
    key: '_postMessage',
    value: function _postMessage(data) {
      this._messageTransport.postMessage(data);
    }
  }, {
    key: '_pushAdapterState',
    value: function _pushAdapterState() {
      if (this.ready && (this._lastDndStatus !== this._presence.dndStatus || this._lastUserStatus !== this._presence.userStatus || this._lastTelephonyStatus !== this._presence.telephonyStatus || this._lastClosed !== this.closed || this._lastMinimized !== this.minimized || this._lastPosition.translateX !== this.position.translateX || this._lastPosition.translateY !== this.position.translateY || this._lastPosition.minTranslateX !== this.position.minTranslateX || this._lastPosition.minTranslateY !== this.position.minTranslateY)) {
        this._lastDndStatus = this._presence.dndStatus;
        this._lastUserStatus = this._presence.userStatus;
        this._lastTelephonyStatus = this._presence.telephonyStatus;
        this._lastClosed = this.closed;
        this._lastMinimized = this.minimized;
        this._lastPosition = this.position;
        this._postMessage({
          type: this._messageTypes.pushAdapterState,
          size: this.size,
          minimized: this.minimized,
          closed: this.closed,
          position: this.position,
          telephonyStatus: this._presence.telephonyStatus,
          userStatus: this._presence.userStatus,
          dndStatus: this._presence.dndStatus
        });
      }
    }
  }, {
    key: '_onPresenceClicked',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (this.minimized) {
                  this.showAdapter();
                }
                this._router.push('/settings?showPresenceSettings=1');

              case 2:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _onPresenceClicked() {
        return _ref6.apply(this, arguments);
      }

      return _onPresenceClicked;
    }()
  }, {
    key: 'showAdapter',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.store.dispatch({
                  type: this.actionTypes.showAdapter
                });

              case 1:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function showAdapter() {
        return _ref7.apply(this, arguments);
      }

      return showAdapter;
    }()
  }, {
    key: '_onNavigateToCurrentCall',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this._router.push(ACTIVE_CALL_PATH);
                if (this._userGuide && this._userGuide.started) {
                  this._userGuide.dismiss();
                }
                if (this._quickAccess && this._quickAccess.entered) {
                  this._quickAccess.exit();
                }
                if (this._webphone && this._webphone.ringSession && !this._webphone.ringSession.minimized) {
                  this._webphone.toggleMinimized(this._webphone.ringSession.id);
                }

              case 4:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function _onNavigateToCurrentCall() {
        return _ref8.apply(this, arguments);
      }

      return _onNavigateToCurrentCall;
    }()
  }, {
    key: '_onNavigateToViewCalls',
    value: function () {
      var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8() {
        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this._router.push(ALL_CALL_PATH);
                if (this._userGuide && this._userGuide.started) {
                  this._userGuide.dismiss();
                }
                if (this._quickAccess && this._quickAccess.entered) {
                  this._quickAccess.exit();
                }
                if (this._webphone && this._webphone.ringSession && !this._webphone.ringSession.minimized) {
                  this._webphone.toggleMinimized(this._webphone.ringSession.id);
                }

              case 4:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function _onNavigateToViewCalls() {
        return _ref9.apply(this, arguments);
      }

      return _onNavigateToViewCalls;
    }()
  }, {
    key: 'localeStrings',
    get: function get() {
      return {};
    }
  }, {
    key: '_localeStrings',
    get: function get() {
      return this._selectors.localeStrings();
    }
  }, {
    key: 'status',
    get: function get() {
      return this.state.status;
    }
  }, {
    key: 'ready',
    get: function get() {
      return this.status === _moduleStatuses2.default.ready;
    }
  }, {
    key: 'pending',
    get: function get() {
      return this.status === _moduleStatuses2.default.pending;
    }
  }, {
    key: 'minimized',
    get: function get() {
      return this._globalStorage.getItem(this._storageKey).minimized;
    }
  }, {
    key: 'closed',
    get: function get() {
      return this._globalStorage.getItem(this._storageKey).closed;
    }
  }, {
    key: 'size',
    get: function get() {
      return this._globalStorage.getItem(this._storageKey).size;
    }
  }, {
    key: 'position',
    get: function get() {
      return this._globalStorage.getItem(this._storageKey).position;
    }
  }]);
  return AdapterModuleCore;
}(_RcModule3.default), (_applyDecoratedDescriptor(_class2.prototype, '_syncClosed', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, '_syncClosed'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, '_syncMinimized', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, '_syncMinimized'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, '_syncSize', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, '_syncSize'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, '_syncPosition', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, '_syncPosition'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, '_onPresenceClicked', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, '_onPresenceClicked'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'showAdapter', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'showAdapter'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, '_onNavigateToCurrentCall', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, '_onNavigateToCurrentCall'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, '_onNavigateToViewCalls', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, '_onNavigateToViewCalls'), _class2.prototype)), _class2)) || _class);
exports.default = AdapterModuleCore;
//# sourceMappingURL=index.js.map

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

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

var _dec, _class, _desc, _value, _class2, _descriptor;

var _ramda = require('ramda');

var _reselect = require('reselect');

var _ringcentralWebPhone = require('ringcentral-web-phone');

var _ringcentralWebPhone2 = _interopRequireDefault(_ringcentralWebPhone);

var _incoming = require('ringcentral-web-phone/audio/incoming.ogg');

var _incoming2 = _interopRequireDefault(_incoming);

var _outgoing = require('ringcentral-web-phone/audio/outgoing.ogg');

var _outgoing2 = _interopRequireDefault(_outgoing);

var _di = require('../../lib/di');

var _RcModule2 = require('../../lib/RcModule');

var _RcModule3 = _interopRequireDefault(_RcModule2);

var _sleep = require('../../lib/sleep');

var _sleep2 = _interopRequireDefault(_sleep);

var _moduleStatuses = require('../../enums/moduleStatuses');

var _moduleStatuses2 = _interopRequireDefault(_moduleStatuses);

var _connectionStatus = require('./connectionStatus');

var _connectionStatus2 = _interopRequireDefault(_connectionStatus);

var _sessionStatus = require('./sessionStatus');

var _sessionStatus2 = _interopRequireDefault(_sessionStatus);

var _recordStatus = require('./recordStatus');

var _recordStatus2 = _interopRequireDefault(_recordStatus);

var _actionTypes = require('./actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _callDirections = require('../../enums/callDirections');

var _callDirections2 = _interopRequireDefault(_callDirections);

var _webphoneErrors = require('./webphoneErrors');

var _webphoneErrors2 = _interopRequireDefault(_webphoneErrors);

var _callErrors = require('../Call/callErrors');

var _callErrors2 = _interopRequireDefault(_callErrors);

var _ensureExist = require('../../lib/ensureExist');

var _ensureExist2 = _interopRequireDefault(_ensureExist);

var _proxify = require('../../lib/proxy/proxify');

var _proxify2 = _interopRequireDefault(_proxify);

var _getter = require('../../lib/getter');

var _getter2 = _interopRequireDefault(_getter);

var _Enum = require('../../lib/Enum');

var _Enum2 = _interopRequireDefault(_Enum);

var _webphoneHelper = require('./webphoneHelper');

var _getWebphoneReducer = require('./getWebphoneReducer');

var _getWebphoneReducer2 = _interopRequireDefault(_getWebphoneReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  (0, _defineProperty2.default)(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

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

var FIRST_THREE_RETRIES_DELAY = 10 * 1000;
var FOURTH_RETRIES_DELAY = 30 * 1000;
var FIFTH_RETRIES_DELAY = 60 * 1000;
var MAX_RETRIES_DELAY = 2 * 60 * 1000;

var INCOMING_CALL_INVALID_STATE_ERROR_CODE = 2;

var extendedControlStatus = new _Enum2.default(['pending', 'playing', 'stopped']);

/**
 * @constructor
 * @description Web phone module to handle phone interaction with WebRTC.
 */
var Webphone = (_dec = (0, _di.Module)({
  deps: ['Auth', 'Alert', 'Client', { dep: 'ContactMatcher', optional: true }, 'NumberValidate', 'RolesAndPermissions', 'AudioSettings', { dep: 'TabManager', optional: true }, { dep: 'WebphoneOptions', optional: true }]
}), _dec(_class = (_class2 = function (_RcModule) {
  (0, _inherits3.default)(Webphone, _RcModule);

  /**
   * @constructor
   * @param {Object} params - params object
   * @param {String} params.appKey - app key
   * @param {String} params.appName - app name
   * @param {String} params.appVersion - app version
   * @param {Number} params.webphoneLogLevel - log Level
   * @param {Alert} params.alert - alert module instance
   * @param {Auth} params.auth - auth module instance
   * @param {Client} params.client - client module instance
   * @param {RolesAndPermissions} params.rolesAndPermissions - rolesAndPermissions module instance
   * @param {Storage} params.storage - storage module instance
   * @param {GlobalStorage} params.globalStorage - globalStorage module instance
   * @param {NumberValidate} params.numberValidate - numberValidate module instance
   * @param {ContactMatcher} params.contactMatcher - contactMatcher module instance, optional
   * @param {Function} params.onCallEnd - callback on a call end
   * @param {Function} params.onCallRing - callback on a call ring
   * @param {Function} params.onCallStart - callback on a call start
   * @param {Function} params.onCallResume - callback on a call resume
   * @param {Function} params.onBeforeCallResume - callback before a call resume
   * @param {Function} params.onBeforeCallEnd - callback before a call hangup
   */
  function Webphone(_ref) {
    var appKey = _ref.appKey,
        appName = _ref.appName,
        appVersion = _ref.appVersion,
        alert = _ref.alert,
        auth = _ref.auth,
        client = _ref.client,
        rolesAndPermissions = _ref.rolesAndPermissions,
        _ref$webphoneLogLevel = _ref.webphoneLogLevel,
        webphoneLogLevel = _ref$webphoneLogLevel === undefined ? 3 : _ref$webphoneLogLevel,
        contactMatcher = _ref.contactMatcher,
        numberValidate = _ref.numberValidate,
        audioSettings = _ref.audioSettings,
        tabManager = _ref.tabManager,
        onCallEnd = _ref.onCallEnd,
        onCallRing = _ref.onCallRing,
        onCallStart = _ref.onCallStart,
        onCallResume = _ref.onCallResume,
        onBeforeCallResume = _ref.onBeforeCallResume,
        onBeforeCallEnd = _ref.onBeforeCallEnd,
        options = (0, _objectWithoutProperties3.default)(_ref, ['appKey', 'appName', 'appVersion', 'alert', 'auth', 'client', 'rolesAndPermissions', 'webphoneLogLevel', 'contactMatcher', 'numberValidate', 'audioSettings', 'tabManager', 'onCallEnd', 'onCallRing', 'onCallStart', 'onCallResume', 'onBeforeCallResume', 'onBeforeCallEnd']);
    (0, _classCallCheck3.default)(this, Webphone);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Webphone.__proto__ || (0, _getPrototypeOf2.default)(Webphone)).call(this, (0, _extends3.default)({}, options, {
      actionTypes: _actionTypes2.default
    })));

    _initDefineProp(_this, 'ringingCallOnView', _descriptor, _this);

    _this._appKey = appKey;
    _this._appName = appName;
    _this._appVersion = appVersion;
    _this._alert = alert;
    _this._webphoneLogLevel = webphoneLogLevel;
    _this._auth = _ensureExist2.default.call(_this, auth, 'auth');
    _this._client = _ensureExist2.default.call(_this, client, 'client');
    _this._rolesAndPermissions = _ensureExist2.default.call(_this, rolesAndPermissions, 'rolesAndPermissions');
    _this._numberValidate = _ensureExist2.default.call(_this, numberValidate, 'numberValidate');
    _this._audioSettings = _ensureExist2.default.call(_this, audioSettings, 'audioSettings');
    _this._contactMatcher = contactMatcher;
    _this._tabManager = tabManager;

    _this._onCallEndFunctions = [];
    if (typeof onCallEnd === 'function') {
      _this._onCallEndFunctions.push(onCallEnd);
    }
    _this._onCallRingFunctions = [];
    if (typeof onCallRing === 'function') {
      _this._onCallRingFunctions.push(onCallRing);
    }
    _this._onCallStartFunctions = [];
    if (typeof onCallStart === 'function') {
      _this._onCallStartFunctions.push(onCallStart);
    }
    _this._onCallResumeFunctions = [];
    if (typeof onCallResume === 'function') {
      _this._onCallResumeFunctions.push(onCallResume);
    }
    _this._onBeforeCallResumeFunctions = [];
    if (typeof onBeforeCallResume === 'function') {
      _this._onBeforeCallResumeFunctions.push(onBeforeCallResume);
    }
    _this._onBeforeCallEndFunctions = [];
    if (typeof onBeforeCallEnd === 'function') {
      _this._onBeforeCallEndFunctions.push(onBeforeCallEnd);
    }

    _this._webphone = null;
    _this._remoteVideo = null;
    _this._localVideo = null;
    _this._sessions = new _map2.default();
    _this._reducer = (0, _getWebphoneReducer2.default)(_this.actionTypes);

    _this.addSelector('sessionPhoneNumbers', function () {
      return _this.sessions;
    }, function (sessions) {
      var outputs = [];
      sessions.forEach(function (session) {
        outputs.push(session.to);
        outputs.push(session.from);
      });
      return outputs;
    });

    _this.addSelector('ringSession', function () {
      return _this.ringSessionId;
    }, function () {
      return _this.sessions;
    }, function (ringSessionId, sessions) {
      if (!ringSessionId) {
        return null;
      }
      var ringSession = (0, _ramda.find)(function (session) {
        return session.id === ringSessionId;
      }, sessions);
      return ringSession;
    });

    _this.addSelector('cachedSessions', function () {
      return _this.sessions;
    }, function (sessions) {
      return (0, _ramda.filter)(function (session) {
        return session.cached;
      }, sessions);
    });

    _this.addSelector('activeSession', function () {
      return _this.activeSessionId;
    }, function () {
      return _this.sessions;
    }, function (activeSessionId, sessions) {
      if (!activeSessionId) {
        return null;
      }
      var activeSession = (0, _ramda.find)(function (session) {
        return session.id === activeSessionId;
      }, sessions);
      return activeSession;
    });

    _this.addSelector('ringSessions', function () {
      return _this.sessions;
    }, function (sessions) {
      return (0, _ramda.filter)(function (session) {
        return (0, _webphoneHelper.isRing)(session);
      }, sessions);
    });

    _this.addSelector('onHoldSessions', function () {
      return _this.sessions;
    }, function (sessions) {
      return (0, _ramda.filter)(function (session) {
        return (0, _webphoneHelper.isOnHold)(session);
      }, sessions);
    });

    if (_this._contactMatcher) {
      _this._contactMatcher.addQuerySource({
        getQueriesFn: _this._selectors.sessionPhoneNumbers,
        readyCheckFn: function readyCheckFn() {
          return _this.ready;
        }
      });
    }

    _this._isFirstRegister = true;
    return _this;
  }

  (0, _createClass3.default)(Webphone, [{
    key: '_prepareVideoElement',
    value: function _prepareVideoElement() {
      this._remoteVideo = document.createElement('video');
      this._remoteVideo.id = 'remoteVideo';
      this._remoteVideo.setAttribute('hidden', 'hidden');
      this._localVideo = document.createElement('video');
      this._localVideo.id = 'localVideo';
      this._localVideo.setAttribute('hidden', 'hidden');
      this._localVideo.setAttribute('muted', 'muted');
      this._localVideo.muted = true;

      document.body.appendChild(this._remoteVideo);
      document.body.appendChild(this._localVideo);

      this._remoteVideo.volume = this._audioSettings.callVolume;
      if (this._audioSettings.supportDevices) {
        this._remoteVideo.setSinkId(this._audioSettings.outputDeviceId);
      }

      this.store.dispatch({
        type: this.actionTypes.videoElementPrepared
      });
    }
  }, {
    key: 'initialize',
    value: function initialize() {
      var _this2 = this;

      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        if (document.readyState === 'loading') {
          window.addEventListener('load', function () {
            _this2._prepareVideoElement();
          });
        } else {
          this._prepareVideoElement();
        }
        window.addEventListener('unload', function () {
          _this2._disconnect();
        });
      }
      this.store.subscribe(function () {
        return _this2._onStateChange();
      });
    }
  }, {
    key: '_onStateChange',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this._shouldInit()) {
                  this.store.dispatch({
                    type: this.actionTypes.initSuccess
                  });
                } else if (this._shouldReset()) {
                  this.store.dispatch({
                    type: this.actionTypes.resetSuccess
                  });
                  this.disconnect();
                }
                if (this.ready && (this._ringtoneVolume !== this._audioSettings.ringtoneVolume || this._ringtoneMuted !== this._audioSettings.ringtoneMuted)) {
                  this._ringtoneVolume = this._audioSettings.ringtoneVolume;
                  this._ringtoneMuted = this._audioSettings.ringtoneMuted;
                  if (this._webphone && this._webphone.userAgent) {
                    this._webphone.userAgent.audioHelper.setVolume(this._ringtoneMuted ? 0 : this._audioSettings.ringtoneVolume);
                  }
                }
                if (this.ready && this._callVolume !== this._audioSettings.callVolume) {
                  this._callVolume = this._audioSettings.callVolume;
                  if (this._remoteVideo) {
                    this._remoteVideo.volume = this._audioSettings.callVolume;
                  }
                }
                if (this.ready && this._audioSettings.supportDevices && this._outputDeviceId !== this._audioSettings.outputDeviceId) {
                  this._outputDeviceId = this._audioSettings.outputDeviceId;
                  if (this._remoteVideo) {
                    this._remoteVideo.setSinkId(this._outputDeviceId);
                  }
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _onStateChange() {
        return _ref2.apply(this, arguments);
      }

      return _onStateChange;
    }()
  }, {
    key: '_shouldInit',
    value: function _shouldInit() {
      return this._auth.loggedIn && this._rolesAndPermissions.ready && this._numberValidate.ready && this._audioSettings.ready && (!this._tabManager || this._tabManager.ready) && this.pending;
    }
  }, {
    key: '_shouldReset',
    value: function _shouldReset() {
      return (!this._auth.loggedIn || !this._rolesAndPermissions.ready || !this._numberValidate.ready || !!this._tabManager && !this._tabManager.ready || !this._audioSettings.ready) && this.ready;
    }
  }, {
    key: '_sipProvision',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var response;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._client.service.platform().post('/client-info/sip-provision', {
                  sipInfo: [{ transport: 'WSS' }]
                });

              case 2:
                response = _context2.sent;
                return _context2.abrupt('return', response.json());

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _sipProvision() {
        return _ref3.apply(this, arguments);
      }

      return _sipProvision;
    }()
  }, {
    key: '_fetchDL',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var response, devices, phoneLines;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._client.account().extension().device().list();

              case 2:
                response = _context3.sent;
                devices = response.records;
                phoneLines = [];

                devices.forEach(function (device) {
                  if (!device.phoneLines || device.phoneLines.length === 0) {
                    return;
                  }
                  phoneLines = phoneLines.concat(device.phoneLines);
                });
                return _context3.abrupt('return', phoneLines);

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _fetchDL() {
        return _ref4.apply(this, arguments);
      }

      return _fetchDL;
    }()
  }, {
    key: '_removeWebphone',
    value: function _removeWebphone() {
      if (!this._webphone || !this._webphone.userAgent) {
        return;
      }
      this._webphone.userAgent.stop();
      this._webphone.userAgent.unregister();
      this._webphone.userAgent.removeAllListeners();
      this._webphone = null;
    }
  }, {
    key: '_createWebphone',
    value: function _createWebphone(provisionData) {
      var _this3 = this;

      this._removeWebphone();
      this._webphone = new _ringcentralWebPhone2.default(provisionData, {
        appKey: this._appKey,
        appName: this._appName,
        appVersion: this._appVersion,
        uuid: this._auth.endpointId,
        logLevel: this._webphoneLogLevel, // error 0, warn 1, log: 2, debug: 3
        audioHelper: {
          enabled: true // enables audio feedback when web phone is ringing or making a call
        },
        media: {
          remote: this._remoteVideo,
          local: this._localVideo
        }
      });
      this._webphone.userAgent.audioHelper.loadAudio({
        incoming: _incoming2.default, // path to audio file for incoming call
        outgoing: _outgoing2.default // path to aduotfile for outgoing call
      });
      this._isFirstRegister = true;
      var onRegistered = function onRegistered() {
        if (_this3._isFirstRegister) {
          _this3.store.dispatch({
            type: _this3.actionTypes.registered
          });
          _this3._alert.info({
            message: _webphoneErrors2.default.connected
          });
        }
        _this3._isFirstRegister = false;
      };
      var onUnregistered = function onUnregistered() {
        _this3._isFirstRegister = true;
        _this3.store.dispatch({
          type: _this3.actionTypes.unregistered
        });
      };
      var onRegistrationFailed = function onRegistrationFailed(response, cause) {
        console.error('Webphone Register Error:', response, cause);
        // For 401
        if (!response && cause === 'Connection Error') {
          return;
        }
        if (_this3.connectionStatus === _connectionStatus2.default.connectFailed) {
          return;
        }
        _this3._isFirstRegister = true;
        var errorCode = void 0;
        var needToReconnect = false;
        // limit logic:
        /*
         * Specialties of this flow are next:
         *   6th WebRTC in another browser receives 6th ‘EndpointID’ and 1st ‘InstanceID’,
         *   which has been given previously to the 1st ‘EndpointID’.
         *   It successfully registers on WSX by moving 1st ‘EndpointID’ to a blacklist state.
         *   When 1st WebRTC client re-registers on expiration timeout,
         *   WSX defines that 1st ‘EndpointID’ is blacklisted and responds with ‘SIP/2.0 403 Forbidden,
         *   instance id is intercepted by another registration’ and remove it from black list.
         *   So if 1st WebRTC will send re-register again with the same ‘InstanceID’,
         *   it will be accepted and 6th ‘EndpointID’ will be blacklisted.
         *   (But the WebRTC client must logout on receiving SIP/2.0 403 Forbidden error and in case of login -
         *   provision again via Platform API and receive new InstanceID)
         */
        var statusCode = response ? response.status_code : null;
        switch (statusCode) {
          // Webphone account overlimit
          case 503:
          case 603:
            {
              errorCode = _webphoneErrors2.default.webphoneCountOverLimit;
              needToReconnect = true;
              break;
            }
          case 403:
            {
              errorCode = _webphoneErrors2.default.webphoneForbidden;
              needToReconnect = true;
              break;
            }
          // Request Timeout
          case 408:
            {
              errorCode = _webphoneErrors2.default.requestTimeout;
              needToReconnect = true;
              break;
            }
          // Internal server error
          case 500:
            {
              errorCode = _webphoneErrors2.default.internalServerError;
              break;
            }
          // Timeout
          case 504:
            {
              errorCode = _webphoneErrors2.default.serverTimeout;
              needToReconnect = true;
              break;
            }
          default:
            {
              errorCode = _webphoneErrors2.default.unknownError;
              break;
            }
        }
        _this3._alert.danger({
          message: errorCode,
          allowDuplicates: false,
          payload: {
            statusCode: statusCode
          }
        });
        _this3.store.dispatch({
          type: _this3.actionTypes.registrationFailed,
          errorCode: errorCode,
          statusCode: statusCode
        });
        if (['Request Timeout', 'Connection Error'].indexOf(cause) !== -1) {
          needToReconnect = true;
        }
        if (needToReconnect) {
          _this3._removeWebphone();
          _this3._connect(needToReconnect);
        }
      };
      this._webphone.userAgent.audioHelper.setVolume(this._audioSettings.ringtoneMuted ? 0 : this._audioSettings.ringtoneVolume);
      this._webphone.userAgent.on('registered', onRegistered);
      this._webphone.userAgent.on('unregistered', onUnregistered);
      this._webphone.userAgent.on('registrationFailed', onRegistrationFailed);
      this._webphone.userAgent.on('invite', function (session) {
        console.log('UA invite');
        _this3._onInvite(session);
      });
    }
  }, {
    key: '_connect',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var reconnect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var sipProvision, needToReconnect, errorCode;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;

                if (!reconnect) {
                  _context4.next = 4;
                  break;
                }

                _context4.next = 4;
                return this._retrySleep();

              case 4:
                if (this._auth.loggedIn) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt('return');

              case 6:
                if (!(this.connectionStatus === _connectionStatus2.default.connecting)) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt('return');

              case 8:
                if (!(reconnect && this.connectionStatus !== _connectionStatus2.default.connectFailed)) {
                  _context4.next = 11;
                  break;
                }

                this.store.dispatch({
                  type: this.actionTypes.resetRetryCounts
                });
                return _context4.abrupt('return');

              case 11:
                if (!(this._tabManager && !this._tabManager.active)) {
                  _context4.next = 17;
                  break;
                }

                _context4.next = 14;
                return (0, _sleep2.default)(FIRST_THREE_RETRIES_DELAY);

              case 14:
                _context4.next = 16;
                return this._connect(reconnect);

              case 16:
                return _context4.abrupt('return');

              case 17:

                this.store.dispatch({
                  type: reconnect ? this.actionTypes.reconnect : this.actionTypes.connect
                });

                _context4.next = 20;
                return this._sipProvision();

              case 20:
                sipProvision = _context4.sent;

                if (!this.disconnecting) {
                  _context4.next = 23;
                  break;
                }

                return _context4.abrupt('return');

              case 23:
                this._createWebphone(sipProvision);
                _context4.next = 37;
                break;

              case 26:
                _context4.prev = 26;
                _context4.t0 = _context4['catch'](0);

                console.error(_context4.t0);
                this._alert.danger({
                  message: _webphoneErrors2.default.connectFailed,
                  ttl: 0,
                  allowDuplicates: false
                });
                needToReconnect = true;
                errorCode = void 0;

                if (_context4.t0 && _context4.t0.message && _context4.t0.message.indexOf('Feature [WebPhone] is not available') > -1) {
                  this._rolesAndPermissions.refreshServiceFeatures();
                  needToReconnect = false;
                  errorCode = _webphoneErrors2.default.notWebphonePermission;
                } else {
                  errorCode = _webphoneErrors2.default.sipProvisionError;
                }
                this.store.dispatch({
                  type: this.actionTypes.connectError,
                  errorCode: errorCode,
                  error: _context4.t0
                });

                if (!needToReconnect) {
                  _context4.next = 37;
                  break;
                }

                _context4.next = 37;
                return this._connect(needToReconnect);

              case 37:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 26]]);
      }));

      function _connect() {
        return _ref5.apply(this, arguments);
      }

      return _connect;
    }()

    /**
     * connect a web phone.
     */

  }, {
    key: 'connect',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
        var phoneLines;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(this._auth.loggedIn && this.enabled && (this.connectionStatus === _connectionStatus2.default.disconnected || this.connectionStatus === _connectionStatus2.default.connectFailed))) {
                  _context5.next = 19;
                  break;
                }

                if ((0, _webphoneHelper.isBrowserSupport)()) {
                  _context5.next = 5;
                  break;
                }

                this.store.dispatch({
                  type: this.actionTypes.connectError,
                  errorCode: _webphoneErrors2.default.browserNotSupported
                });
                this._alert.warning({
                  message: _webphoneErrors2.default.browserNotSupported,
                  ttl: 0
                });
                return _context5.abrupt('return');

              case 5:
                _context5.prev = 5;
                _context5.next = 8;
                return this._fetchDL();

              case 8:
                phoneLines = _context5.sent;

                if (phoneLines.length === 0) {
                  this.store.dispatch({
                    type: this.actionTypes.connectError,
                    errorCode: _webphoneErrors2.default.notOutboundCallWithoutDL
                  });
                  this._alert.warning({
                    message: _webphoneErrors2.default.notOutboundCallWithoutDL
                  });
                }
                _context5.next = 17;
                break;

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5['catch'](5);

                console.log(_context5.t0);
                this.store.dispatch({
                  type: this.actionTypes.connectError,
                  errorCode: _webphoneErrors2.default.checkDLError
                });
                this._alert.warning({
                  message: _webphoneErrors2.default.checkDLError
                });

              case 17:
                _context5.next = 19;
                return this._connect();

              case 19:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[5, 12]]);
      }));

      function connect() {
        return _ref6.apply(this, arguments);
      }

      return connect;
    }()
  }, {
    key: '_disconnect',
    value: function _disconnect() {
      var _this4 = this;

      if (this.connectionStatus === _connectionStatus2.default.connected || this.connectionStatus === _connectionStatus2.default.connecting || this.connectionStatus === _connectionStatus2.default.connectFailed) {
        this.store.dispatch({
          type: this.actionTypes.disconnect
        });
        if (this._webphone) {
          this._sessions.forEach(function (session) {
            _this4.hangup(session);
          });
          this._removeWebphone();
          this._sessions = new _map2.default();
          this._updateSessions();
        }
        this.store.dispatch({
          type: this.actionTypes.unregistered
        });
      }
    }
  }, {
    key: 'disconnect',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this._disconnect();

              case 1:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function disconnect() {
        return _ref7.apply(this, arguments);
      }

      return disconnect;
    }()
  }, {
    key: '_playExtendedControls',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(session) {
        var controls, i, len;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                session.__rc_extendedControlStatus = extendedControlStatus.playing;
                controls = session.__rc_extendedControls.slice();
                i = 0, len = controls.length;

              case 3:
                if (!(i < len)) {
                  _context7.next = 18;
                  break;
                }

                if (!(session.__rc_extendedControlStatus === extendedControlStatus.playing)) {
                  _context7.next = 14;
                  break;
                }

                if (!(controls[i] === ',')) {
                  _context7.next = 10;
                  break;
                }

                _context7.next = 8;
                return (0, _sleep2.default)(2000);

              case 8:
                _context7.next = 12;
                break;

              case 10:
                _context7.next = 12;
                return this._sendDTMF(controls[i], session);

              case 12:
                _context7.next = 15;
                break;

              case 14:
                return _context7.abrupt('return');

              case 15:
                i += 1;
                _context7.next = 3;
                break;

              case 18:
                session.__rc_extendedControlStatus = extendedControlStatus.stopped;

              case 19:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function _playExtendedControls(_x2) {
        return _ref8.apply(this, arguments);
      }

      return _playExtendedControls;
    }()
  }, {
    key: '_onAccepted',
    value: function _onAccepted(session) {
      var _this5 = this;

      session.on('accepted', function (incomingResponse) {
        if (session.__rc_callStatus === _sessionStatus2.default.finished) {
          return;
        }
        console.log('accepted');
        session.__rc_callStatus = _sessionStatus2.default.connected;
        (0, _webphoneHelper.extractHeadersData)(session, incomingResponse.headers);
        if (session.__rc_extendedControls && session.__rc_extendedControlStatus === extendedControlStatus.pending) {
          _this5._playExtendedControls(session);
        }
        _this5._updateSessions();
      });
      session.on('progress', function (incomingResponse) {
        console.log('progress...');
        session.__rc_callStatus = _sessionStatus2.default.connecting;
        (0, _webphoneHelper.extractHeadersData)(session, incomingResponse.headers);
        _this5._updateSessions();
      });
      session.on('rejected', function () {
        console.log('rejected');
        session.__rc_callStatus = _sessionStatus2.default.finished;
        _this5._onCallEnd(session);
      });
      session.on('failed', function (response, cause) {
        console.log('Event: Failed');
        console.log(cause);
        session.__rc_callStatus = _sessionStatus2.default.finished;
        _this5._onCallEnd(session);
      });
      session.on('terminated', function () {
        console.log('Event: Terminated');
        session.__rc_callStatus = _sessionStatus2.default.finished;
        _this5._onCallEnd(session);
      });
      session.on('cancel', function () {
        console.log('Event: Cancel');
        session.__rc_callStatus = _sessionStatus2.default.finished;
        _this5._onCallEnd(session);
      });
      session.on('refer', function () {
        console.log('Event: Refer');
      });
      session.on('replaced', function (newSession) {
        session.__rc_callStatus = _sessionStatus2.default.replaced;
        newSession.__rc_callStatus = _sessionStatus2.default.connected;
        newSession.__rc_direction = _callDirections2.default.inbound;
        _this5._addSession(newSession);
        _this5._onAccepted(newSession);
      });
      session.on('muted', function () {
        console.log('Event: Muted');
        session.__rc_isOnMute = true;
        session.__rc_callStatus = _sessionStatus2.default.onMute;
        _this5._updateSessions();
      });
      session.on('unmuted', function () {
        console.log('Event: Unmuted');
        session.__rc_isOnMute = false;
        session.__rc_callStatus = _sessionStatus2.default.connected;
        _this5._updateSessions();
      });
      // session.on('hold', () => {
      //   console.log('Event: hold');
      //   session.__rc_callStatus = sessionStatus.onHold;
      //   this._updateSessions();
      // });
      // session.on('unhold', () => {
      //   console.log('Event: unhold');
      //   session.__rc_callStatus = sessionStatus.connected;
      //   session.__rc_lastActiveTime = Date.now();
      //   this._updateSessions();
      // });
      session.on('userMediaFailed', function () {
        _this5._audioSettings.onGetUserMediaError();
      });
    }
  }, {
    key: '_onInvite',
    value: function _onInvite(session) {
      var _this6 = this;

      session.__rc_creationTime = Date.now();
      session.__rc_lastActiveTime = Date.now();
      session.__rc_direction = _callDirections2.default.inbound;
      session.__rc_callStatus = _sessionStatus2.default.connecting;
      (0, _webphoneHelper.extractHeadersData)(session, session.request.headers);
      session.on('rejected', function () {
        console.log('Event: Rejected');
        _this6._onCallEnd(session);
      });
      session.on('terminated', function () {
        console.log('Event: Terminated');
        _this6._onCallEnd(session);
      });
      this._onCallRing(session);
    }
  }, {
    key: 'answer',
    value: function () {
      var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(sessionId) {
        var sipSession, session;
        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                sipSession = this._sessions.get(sessionId);
                session = this.sessions.find(function (session) {
                  return session.id === sessionId;
                });

                if (!(!session || !(0, _webphoneHelper.isRing)(session))) {
                  _context8.next = 4;
                  break;
                }

                return _context8.abrupt('return');

              case 4:
                _context8.prev = 4;
                _context8.next = 7;
                return this._holdOtherSession(sessionId);

              case 7:
                this._onAccepted(sipSession, 'inbound');
                _context8.next = 10;
                return sipSession.accept(this.acceptOptions);

              case 10:
                this._onCallStart(sipSession);
                this.store.dispatch({ // for track
                  type: this.actionTypes.callAnswer
                });
                _context8.next = 19;
                break;

              case 14:
                _context8.prev = 14;
                _context8.t0 = _context8['catch'](4);

                console.log('Accept failed');
                console.error(_context8.t0);
                if (_context8.t0.code !== INCOMING_CALL_INVALID_STATE_ERROR_CODE) {
                  // FIXME:
                  // 2 means the call is answered
                  this._onCallEnd(sipSession);
                }

              case 19:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this, [[4, 14]]);
      }));

      function answer(_x3) {
        return _ref9.apply(this, arguments);
      }

      return answer;
    }()
  }, {
    key: 'reject',
    value: function () {
      var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(sessionId) {
        var session;
        return _regenerator2.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                session = this._sessions.get(sessionId);

                if (!(!session || session.__rc_callStatus === _sessionStatus2.default.finished)) {
                  _context9.next = 3;
                  break;
                }

                return _context9.abrupt('return');

              case 3:
                _context9.prev = 3;
                _context9.next = 6;
                return session.reject();

              case 6:
                _context9.next = 12;
                break;

              case 8:
                _context9.prev = 8;
                _context9.t0 = _context9['catch'](3);

                console.error(_context9.t0);
                this._onCallEnd(session);

              case 12:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this, [[3, 8]]);
      }));

      function reject(_x4) {
        return _ref10.apply(this, arguments);
      }

      return reject;
    }()
  }, {
    key: 'resume',
    value: function () {
      var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(sessionId) {
        return _regenerator2.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.unhold(sessionId);

              case 2:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function resume(_x5) {
        return _ref11.apply(this, arguments);
      }

      return resume;
    }()
  }, {
    key: 'forward',
    value: function () {
      var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee11(sessionId, forwardNumber) {
        var _this7 = this;

        var session, validatedResult, validPhoneNumber;
        return _regenerator2.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                session = this._sessions.get(sessionId);

                if (session) {
                  _context11.next = 3;
                  break;
                }

                return _context11.abrupt('return', false);

              case 3:
                _context11.prev = 3;
                _context11.next = 6;
                return this._numberValidate.validateNumbers([forwardNumber]);

              case 6:
                validatedResult = _context11.sent;

                if (validatedResult.result) {
                  _context11.next = 10;
                  break;
                }

                validatedResult.errors.forEach(function (error) {
                  _this7._alert.warning({
                    message: _callErrors2.default[error.type],
                    payload: {
                      phoneNumber: error.phoneNumber
                    }
                  });
                });
                return _context11.abrupt('return', false);

              case 10:
                validPhoneNumber = validatedResult.numbers[0] && validatedResult.numbers[0].e164;

                session.__rc_isForwarded = true;
                _context11.next = 14;
                return session.forward(validPhoneNumber, this.acceptOptions);

              case 14:
                console.log('Forwarded');
                this._onCallEnd(session);
                return _context11.abrupt('return', true);

              case 19:
                _context11.prev = 19;
                _context11.t0 = _context11['catch'](3);

                console.error(_context11.t0);
                this._alert.warning({
                  message: _webphoneErrors2.default.forwardError
                });
                return _context11.abrupt('return', false);

              case 24:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11, this, [[3, 19]]);
      }));

      function forward(_x6, _x7) {
        return _ref12.apply(this, arguments);
      }

      return forward;
    }()
  }, {
    key: 'mute',
    value: function () {
      var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee12(sessionId) {
        var _this8 = this;

        return _regenerator2.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;

                this._sessionHandleWithId(sessionId, function (session) {
                  session.__rc_isOnMute = true;
                  session.mute();
                  _this8._updateSessions();
                });
                return _context12.abrupt('return', true);

              case 5:
                _context12.prev = 5;
                _context12.t0 = _context12['catch'](0);

                console.error(_context12.t0);
                this._alert.warning({
                  message: _webphoneErrors2.default.muteError
                });
                return _context12.abrupt('return', false);

              case 10:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12, this, [[0, 5]]);
      }));

      function mute(_x8) {
        return _ref13.apply(this, arguments);
      }

      return mute;
    }()
  }, {
    key: 'unmute',
    value: function () {
      var _ref14 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee13(sessionId) {
        var _this9 = this;

        return _regenerator2.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                this._sessionHandleWithId(sessionId, function (session) {
                  session.__rc_isOnMute = false;
                  session.unmute();
                  _this9._updateSessions();
                });

              case 1:
              case 'end':
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function unmute(_x9) {
        return _ref14.apply(this, arguments);
      }

      return unmute;
    }()
  }, {
    key: 'hold',
    value: function () {
      var _ref15 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee14(sessionId) {
        var session;
        return _regenerator2.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                session = this._sessions.get(sessionId);

                if (session) {
                  _context14.next = 3;
                  break;
                }

                return _context14.abrupt('return', false);

              case 3:
                if (!session.onLocalHold()) {
                  _context14.next = 5;
                  break;
                }

                return _context14.abrupt('return', true);

              case 5:
                _context14.prev = 5;
                _context14.next = 8;
                return session.hold();

              case 8:
                session.__rc_callStatus = _sessionStatus2.default.onHold;
                this._updateSessions();
                return _context14.abrupt('return', true);

              case 13:
                _context14.prev = 13;
                _context14.t0 = _context14['catch'](5);

                console.error('hold error:', _context14.t0);
                this._alert.warning({
                  message: _webphoneErrors2.default.holdError
                });
                return _context14.abrupt('return', false);

              case 18:
              case 'end':
                return _context14.stop();
            }
          }
        }, _callee14, this, [[5, 13]]);
      }));

      function hold(_x10) {
        return _ref15.apply(this, arguments);
      }

      return hold;
    }()
  }, {
    key: '_holdOtherSession',
    value: function () {
      var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee16(currentSessionId) {
        var _this10 = this;

        return _regenerator2.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return _promise2.default.all((0, _from2.default)(this._sessions, function () {
                  var _ref18 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee15(_ref17) {
                    var _ref19 = (0, _slicedToArray3.default)(_ref17, 2),
                        sessionId = _ref19[0],
                        session = _ref19[1];

                    return _regenerator2.default.wrap(function _callee15$(_context15) {
                      while (1) {
                        switch (_context15.prev = _context15.next) {
                          case 0:
                            if (!(currentSessionId === sessionId)) {
                              _context15.next = 2;
                              break;
                            }

                            return _context15.abrupt('return');

                          case 2:
                            if (!session.onLocalHold()) {
                              _context15.next = 4;
                              break;
                            }

                            return _context15.abrupt('return');

                          case 4:
                            _context15.next = 6;
                            return session.hold();

                          case 6:
                            session.__rc_callStatus = _sessionStatus2.default.onHold;

                          case 7:
                          case 'end':
                            return _context15.stop();
                        }
                      }
                    }, _callee15, _this10);
                  }));

                  return function (_x12) {
                    return _ref18.apply(this, arguments);
                  };
                }()));

              case 2:
                // update cached sessions
                this.store.dispatch({
                  type: this.actionTypes.onholdCachedSession
                });

              case 3:
              case 'end':
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function _holdOtherSession(_x11) {
        return _ref16.apply(this, arguments);
      }

      return _holdOtherSession;
    }()
  }, {
    key: 'unhold',
    value: function () {
      var _ref20 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee17(sessionId) {
        var session;
        return _regenerator2.default.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                session = this._sessions.get(sessionId);

                if (session) {
                  _context17.next = 3;
                  break;
                }

                return _context17.abrupt('return');

              case 3:
                _context17.prev = 3;

                if (!session.onLocalHold()) {
                  _context17.next = 12;
                  break;
                }

                _context17.next = 7;
                return this._holdOtherSession(session.id);

              case 7:
                this._onBeforeCallResume(session);
                _context17.next = 10;
                return session.unhold();

              case 10:
                this._updateSessions();
                this._onCallResume(session);

              case 12:
                _context17.next = 17;
                break;

              case 14:
                _context17.prev = 14;
                _context17.t0 = _context17['catch'](3);

                console.log(_context17.t0);

              case 17:
              case 'end':
                return _context17.stop();
            }
          }
        }, _callee17, this, [[3, 14]]);
      }));

      function unhold(_x13) {
        return _ref20.apply(this, arguments);
      }

      return unhold;
    }()
  }, {
    key: 'startRecord',
    value: function () {
      var _ref21 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee18(sessionId) {
        var session;
        return _regenerator2.default.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                session = this._sessions.get(sessionId);

                if (session) {
                  _context18.next = 3;
                  break;
                }

                return _context18.abrupt('return');

              case 3:
                if (!(session.__rc_callStatus === _sessionStatus2.default.connecting)) {
                  _context18.next = 5;
                  break;
                }

                return _context18.abrupt('return');

              case 5:
                _context18.prev = 5;

                session.__rc_recordStatus = _recordStatus2.default.pending;
                this._updateSessions();
                _context18.next = 10;
                return session.startRecord();

              case 10:
                session.__rc_recordStatus = _recordStatus2.default.recording;
                this._updateSessions();
                _context18.next = 25;
                break;

              case 14:
                _context18.prev = 14;
                _context18.t0 = _context18['catch'](5);

                console.error(_context18.t0);
                session.__rc_recordStatus = _recordStatus2.default.idle;
                this._updateSessions();
                // Recording has been disabled

                if (!(_context18.t0 && _context18.t0.code === -5)) {
                  _context18.next = 24;
                  break;
                }

                this._alert.danger({
                  message: _webphoneErrors2.default.recordDisabled
                });
                // Disabled phone recording
                session.__rc_recordStatus = _recordStatus2.default.noAccess;
                this._updateSessions();
                return _context18.abrupt('return');

              case 24:
                this._alert.danger({
                  message: _webphoneErrors2.default.recordError,
                  payload: {
                    errorCode: _context18.t0.code
                  }
                });

              case 25:
              case 'end':
                return _context18.stop();
            }
          }
        }, _callee18, this, [[5, 14]]);
      }));

      function startRecord(_x14) {
        return _ref21.apply(this, arguments);
      }

      return startRecord;
    }()
  }, {
    key: 'stopRecord',
    value: function () {
      var _ref22 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee19(sessionId) {
        var session;
        return _regenerator2.default.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                session = this._sessions.get(sessionId);

                if (session) {
                  _context19.next = 3;
                  break;
                }

                return _context19.abrupt('return');

              case 3:
                _context19.prev = 3;

                session.__rc_recordStatus = _recordStatus2.default.pending;
                this._updateSessions();
                _context19.next = 8;
                return session.stopRecord();

              case 8:
                session.__rc_recordStatus = _recordStatus2.default.idle;
                this._updateSessions();
                _context19.next = 17;
                break;

              case 12:
                _context19.prev = 12;
                _context19.t0 = _context19['catch'](3);

                console.error(_context19.t0);
                session.__rc_recordStatus = _recordStatus2.default.recording;
                this._updateSessions();

              case 17:
              case 'end':
                return _context19.stop();
            }
          }
        }, _callee19, this, [[3, 12]]);
      }));

      function stopRecord(_x15) {
        return _ref22.apply(this, arguments);
      }

      return stopRecord;
    }()
  }, {
    key: 'park',
    value: function () {
      var _ref23 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee20(sessionId) {
        var session;
        return _regenerator2.default.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                session = this._sessions.get(sessionId);

                if (session) {
                  _context20.next = 3;
                  break;
                }

                return _context20.abrupt('return');

              case 3:
                _context20.prev = 3;
                _context20.next = 6;
                return session.park();

              case 6:
                console.log('Parked');
                _context20.next = 12;
                break;

              case 9:
                _context20.prev = 9;
                _context20.t0 = _context20['catch'](3);

                console.error(_context20.t0);

              case 12:
              case 'end':
                return _context20.stop();
            }
          }
        }, _callee20, this, [[3, 9]]);
      }));

      function park(_x16) {
        return _ref23.apply(this, arguments);
      }

      return park;
    }()
  }, {
    key: 'transfer',
    value: function () {
      var _ref24 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee21(transferNumber, sessionId) {
        var _this11 = this;

        var session, validatedResult, validPhoneNumber;
        return _regenerator2.default.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                session = this._sessions.get(sessionId);

                if (session) {
                  _context21.next = 3;
                  break;
                }

                return _context21.abrupt('return');

              case 3:
                _context21.prev = 3;

                session.__rc_isOnTransfer = true;
                this._updateSessions();
                _context21.next = 8;
                return this._numberValidate.validateNumbers([transferNumber]);

              case 8:
                validatedResult = _context21.sent;

                if (validatedResult.result) {
                  _context21.next = 14;
                  break;
                }

                validatedResult.errors.forEach(function (error) {
                  _this11._alert.warning({
                    message: _callErrors2.default[error.type],
                    payload: {
                      phoneNumber: error.phoneNumber
                    }
                  });
                });
                session.__rc_isOnTransfer = false;
                this._updateSessions();
                return _context21.abrupt('return');

              case 14:
                validPhoneNumber = validatedResult.numbers[0] && validatedResult.numbers[0].e164;
                _context21.next = 17;
                return session.transfer(validPhoneNumber);

              case 17:
                session.__rc_isOnTransfer = false;
                this._updateSessions();
                this._onCallEnd(session);
                _context21.next = 28;
                break;

              case 22:
                _context21.prev = 22;
                _context21.t0 = _context21['catch'](3);

                console.error(_context21.t0);
                session.__rc_isOnTransfer = false;
                this._updateSessions();
                this._alert.danger({
                  message: _webphoneErrors2.default.transferError
                });

              case 28:
              case 'end':
                return _context21.stop();
            }
          }
        }, _callee21, this, [[3, 22]]);
      }));

      function transfer(_x17, _x18) {
        return _ref24.apply(this, arguments);
      }

      return transfer;
    }()
  }, {
    key: 'transferWarm',
    value: function () {
      var _ref25 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee23(transferNumber, sessionId) {
        var _this12 = this;

        var session, newSession;
        return _regenerator2.default.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                session = this._sessions.get(sessionId);

                if (session) {
                  _context23.next = 3;
                  break;
                }

                return _context23.abrupt('return');

              case 3:
                _context23.prev = 3;
                _context23.next = 6;
                return session.hold();

              case 6:
                newSession = session.ua.invite(transferNumber, {
                  sessionDescriptionHandlerOptions: this.acceptOptions.sessionDescriptionHandlerOptions
                });

                newSession.once('accepted', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee22() {
                  return _regenerator2.default.wrap(function _callee22$(_context22) {
                    while (1) {
                      switch (_context22.prev = _context22.next) {
                        case 0:
                          _context22.prev = 0;
                          _context22.next = 3;
                          return session.warmTransfer(newSession);

                        case 3:
                          console.log('Transferred');
                          _this12._onCallEnd(session);
                          _context22.next = 10;
                          break;

                        case 7:
                          _context22.prev = 7;
                          _context22.t0 = _context22['catch'](0);

                          console.error(_context22.t0);

                        case 10:
                        case 'end':
                          return _context22.stop();
                      }
                    }
                  }, _callee22, _this12, [[0, 7]]);
                })));
                _context23.next = 13;
                break;

              case 10:
                _context23.prev = 10;
                _context23.t0 = _context23['catch'](3);

                console.error(_context23.t0);

              case 13:
              case 'end':
                return _context23.stop();
            }
          }
        }, _callee23, this, [[3, 10]]);
      }));

      function transferWarm(_x19, _x20) {
        return _ref25.apply(this, arguments);
      }

      return transferWarm;
    }()
  }, {
    key: 'flip',
    value: function () {
      var _ref27 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee24(flipValue, sessionId) {
        var session;
        return _regenerator2.default.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                session = this._sessions.get(sessionId);

                if (session) {
                  _context24.next = 3;
                  break;
                }

                return _context24.abrupt('return');

              case 3:
                _context24.prev = 3;
                _context24.next = 6;
                return session.flip(flipValue);

              case 6:
                // this._onCallEnd(session);
                session.__rc_isOnFlip = true;
                console.log('Flipped');
                _context24.next = 15;
                break;

              case 10:
                _context24.prev = 10;
                _context24.t0 = _context24['catch'](3);

                session.__rc_isOnFlip = false;
                this._alert.warning({
                  message: _webphoneErrors2.default.flipError
                });
                console.error(_context24.t0);

              case 15:
                this._updateSessions();

              case 16:
              case 'end':
                return _context24.stop();
            }
          }
        }, _callee24, this, [[3, 10]]);
      }));

      function flip(_x21, _x22) {
        return _ref27.apply(this, arguments);
      }

      return flip;
    }()
  }, {
    key: '_sendDTMF',
    value: function () {
      var _ref28 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee25(dtmfValue, session) {
        return _regenerator2.default.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _context25.prev = 0;
                _context25.next = 3;
                return session.dtmf(dtmfValue);

              case 3:
                _context25.next = 8;
                break;

              case 5:
                _context25.prev = 5;
                _context25.t0 = _context25['catch'](0);

                console.error(_context25.t0);

              case 8:
              case 'end':
                return _context25.stop();
            }
          }
        }, _callee25, this, [[0, 5]]);
      }));

      function _sendDTMF(_x23, _x24) {
        return _ref28.apply(this, arguments);
      }

      return _sendDTMF;
    }()
  }, {
    key: 'sendDTMF',
    value: function () {
      var _ref29 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee26(dtmfValue, sessionId) {
        var session;
        return _regenerator2.default.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                session = this._sessions.get(sessionId);

                if (!session) {
                  _context26.next = 4;
                  break;
                }

                _context26.next = 4;
                return this._sendDTMF(dtmfValue, session);

              case 4:
              case 'end':
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function sendDTMF(_x25, _x26) {
        return _ref29.apply(this, arguments);
      }

      return sendDTMF;
    }()
  }, {
    key: 'hangup',
    value: function () {
      var _ref30 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee27(sessionId) {
        var session;
        return _regenerator2.default.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                session = this._sessions.get(sessionId);

                if (session) {
                  _context27.next = 3;
                  break;
                }

                return _context27.abrupt('return');

              case 3:
                _context27.prev = 3;

                this._onBeforeCallEnd(session);
                _context27.next = 7;
                return session.terminate();

              case 7:
                _context27.next = 13;
                break;

              case 9:
                _context27.prev = 9;
                _context27.t0 = _context27['catch'](3);

                console.error(_context27.t0);
                this._onCallEnd(session);

              case 13:
              case 'end':
                return _context27.stop();
            }
          }
        }, _callee27, this, [[3, 9]]);
      }));

      function hangup(_x27) {
        return _ref30.apply(this, arguments);
      }

      return hangup;
    }()
  }, {
    key: 'toVoiceMail',
    value: function () {
      var _ref31 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee28(sessionId) {
        var session;
        return _regenerator2.default.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                session = this._sessions.get(sessionId);

                if (session) {
                  _context28.next = 3;
                  break;
                }

                return _context28.abrupt('return');

              case 3:
                _context28.prev = 3;

                session.__rc_isToVoicemail = true;
                _context28.next = 7;
                return session.toVoicemail();

              case 7:
                _context28.next = 14;
                break;

              case 9:
                _context28.prev = 9;
                _context28.t0 = _context28['catch'](3);

                console.error(_context28.t0);
                this._onCallEnd(session);
                this._alert.warning({
                  message: _webphoneErrors2.default.toVoiceMailError
                });

              case 14:
              case 'end':
                return _context28.stop();
            }
          }
        }, _callee28, this, [[3, 9]]);
      }));

      function toVoiceMail(_x28) {
        return _ref31.apply(this, arguments);
      }

      return toVoiceMail;
    }()
  }, {
    key: 'replyWithMessage',
    value: function () {
      var _ref32 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee29(sessionId, replyOptions) {
        var session;
        return _regenerator2.default.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                session = this._sessions.get(sessionId);

                if (session) {
                  _context29.next = 3;
                  break;
                }

                return _context29.abrupt('return');

              case 3:
                _context29.prev = 3;

                session.__rc_isReplied = true;
                _context29.next = 7;
                return session.replyWithMessage(replyOptions);

              case 7:
                _context29.next = 13;
                break;

              case 9:
                _context29.prev = 9;
                _context29.t0 = _context29['catch'](3);

                console.error(_context29.t0);
                this._onCallEnd(session);

              case 13:
              case 'end':
                return _context29.stop();
            }
          }
        }, _callee29, this, [[3, 9]]);
      }));

      function replyWithMessage(_x29, _x30) {
        return _ref32.apply(this, arguments);
      }

      return replyWithMessage;
    }()
  }, {
    key: '_sessionHandleWithId',
    value: function _sessionHandleWithId(sessionId, func) {
      var session = this._sessions.get(sessionId);
      if (!session) {
        return null;
      }
      return func(session);
    }

    /**
     * start an outbound call.
     * @param {toNumber} recipient number
     * @param {fromNumber} call Id
     * @param {homeCountryId} homeCountry Id
     */

  }, {
    key: 'makeCall',
    value: function () {
      var _ref34 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee30(_ref33) {
        var toNumber = _ref33.toNumber,
            fromNumber = _ref33.fromNumber,
            homeCountryId = _ref33.homeCountryId,
            extendedControls = _ref33.extendedControls;
        var phoneLines, session;
        return _regenerator2.default.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                if (this._webphone) {
                  _context30.next = 3;
                  break;
                }

                this._alert.warning({
                  message: this.errorCode
                });
                return _context30.abrupt('return', null);

              case 3:
                _context30.next = 5;
                return this._fetchDL();

              case 5:
                phoneLines = _context30.sent;

                if (!(phoneLines.length === 0)) {
                  _context30.next = 9;
                  break;
                }

                this._alert.warning({
                  message: _webphoneErrors2.default.notOutboundCallWithoutDL
                });
                return _context30.abrupt('return', null);

              case 9:
                session = this._webphone.userAgent.invite(toNumber, {
                  sessionDescriptionHandlerOptions: this.acceptOptions.sessionDescriptionHandlerOptions,
                  fromNumber: fromNumber,
                  homeCountryId: homeCountryId
                });

                session.__rc_direction = _callDirections2.default.outbound;
                session.__rc_callStatus = _sessionStatus2.default.connecting;
                session.__rc_creationTime = Date.now();
                session.__rc_lastActiveTime = Date.now();
                session.__rc_fromNumber = fromNumber;
                session.__rc_extendedControls = extendedControls;
                session.__rc_extendedControlStatus = extendedControlStatus.pending;
                this._onAccepted(session);
                _context30.next = 20;
                return this._holdOtherSession(session.id);

              case 20:
                this._onCallStart(session);
                return _context30.abrupt('return', session);

              case 22:
              case 'end':
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function makeCall(_x31) {
        return _ref34.apply(this, arguments);
      }

      return makeCall;
    }()
  }, {
    key: 'updateSessionMatchedContact',
    value: function () {
      var _ref35 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee31(sessionId, contact) {
        var _this13 = this;

        return _regenerator2.default.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                this._sessionHandleWithId(sessionId, function (session) {
                  session.__rc_contactMatch = contact;
                  _this13._updateSessions();
                });

              case 1:
              case 'end':
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function updateSessionMatchedContact(_x32, _x33) {
        return _ref35.apply(this, arguments);
      }

      return updateSessionMatchedContact;
    }()
  }, {
    key: 'setSessionCaching',
    value: function setSessionCaching(sessionIds) {
      this.store.dispatch({
        type: this.actionTypes.setSessionCaching,
        cachingSessionIds: sessionIds
      });
    }
  }, {
    key: 'clearSessionCaching',
    value: function clearSessionCaching() {
      this.store.dispatch({
        type: this.actionTypes.clearSessionCaching,
        sessions: [].concat((0, _toConsumableArray3.default)(this._sessions.values())).map(_webphoneHelper.normalizeSession)
      });
    }
  }, {
    key: '_updateSessions',
    value: function _updateSessions() {
      this.store.dispatch({
        type: this.actionTypes.updateSessions,
        sessions: [].concat((0, _toConsumableArray3.default)(this._sessions.values())).map(_webphoneHelper.normalizeSession)
      });
    }
  }, {
    key: '_addSession',
    value: function _addSession(session) {
      this._sessions.set(session.id, session);
      this._updateSessions();
    }
  }, {
    key: '_removeSession',
    value: function _removeSession(session) {
      this._sessions.delete(session.id);
      this._updateSessions();
    }
  }, {
    key: 'toggleMinimized',
    value: function () {
      var _ref36 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee32(sessionId) {
        var _this14 = this;

        return _regenerator2.default.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                this._sessionHandleWithId(sessionId, function (session) {
                  session.__rc_minimized = !session.__rc_minimized;
                  _this14._updateSessions();
                });

              case 1:
              case 'end':
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function toggleMinimized(_x34) {
        return _ref36.apply(this, arguments);
      }

      return toggleMinimized;
    }()
  }, {
    key: '_onCallStart',
    value: function _onCallStart(session) {
      var _this15 = this;

      this._addSession(session);
      var normalizedSession = (0, _ramda.find)(function (x) {
        return x.id === session.id;
      }, this.sessions);
      this.store.dispatch({
        type: this.actionTypes.callStart,
        session: normalizedSession,
        sessions: this.sessions
      });
      if (this._contactMatcher && (!this._tabManager || this._tabManager.active)) {
        this._contactMatcher.triggerMatch();
      }
      if (typeof this._onCallStartFunc === 'function') {
        this._onCallStartFunc(normalizedSession, this.activeSession);
      }
      this._onCallStartFunctions.forEach(function (handler) {
        return handler(normalizedSession, _this15.activeSession);
      });
    }
  }, {
    key: '_onCallRing',
    value: function _onCallRing(session) {
      var _this16 = this;

      this._addSession(session);
      var normalizedSession = (0, _ramda.find)(function (x) {
        return x.id === session.id;
      }, this.sessions);
      this.store.dispatch({
        type: this.actionTypes.callRing,
        session: normalizedSession,
        sessions: this.sessions
      });
      if (this._contactMatcher && (!this._tabManager || this._tabManager.active)) {
        this._contactMatcher.triggerMatch();
      }
      if (this.activeSession && !(0, _webphoneHelper.isOnHold)(this.activeSession)) {
        this._webphone.userAgent.audioHelper.playIncoming(false);
      }
      if (typeof this._onCallRingFunc === 'function') {
        this._onCallRingFunc(normalizedSession, this.ringSession);
      }
      this._onCallRingFunctions.forEach(function (handler) {
        return handler(normalizedSession, _this16.ringSession);
      });
    }
  }, {
    key: '_onBeforeCallEnd',
    value: function _onBeforeCallEnd(session) {
      var _this17 = this;

      var normalizedSession = (0, _ramda.find)(function (x) {
        return x.id === session.id;
      }, this.sessions);
      if (typeof this._onBeforeCallEndFunc === 'function') {
        this._onBeforeCallEndFunc(normalizedSession, this.activeSession);
      }
      this._onBeforeCallEndFunctions.forEach(function (handler) {
        return handler(normalizedSession, _this17.activeSession);
      });
    }
  }, {
    key: '_onCallEnd',
    value: function _onCallEnd(session) {
      var _this18 = this;

      session.__rc_extendedControlStatus = extendedControlStatus.stopped;
      var normalizedSession = (0, _ramda.find)(function (x) {
        return x.id === session.id;
      }, this.sessions);
      if (!normalizedSession) {
        return;
      }
      this._removeSession(session);
      this.store.dispatch({
        type: this.actionTypes.callEnd,
        session: normalizedSession,
        sessions: this.sessions
      });
      if (typeof this._onCallEndFunc === 'function') {
        this._onCallEndFunc(normalizedSession, this.activeSession, this.ringSession);
      }
      this._onCallEndFunctions.forEach(function (handler) {
        return handler(normalizedSession, _this18.activeSession, _this18.ringSession);
      });
    }
  }, {
    key: '_onBeforeCallResume',
    value: function _onBeforeCallResume(session) {
      var _this19 = this;

      var normalizedSession = (0, _ramda.find)(function (x) {
        return x.id === session.id;
      }, this.sessions);
      if (typeof this._onBeforeCallResumeFunc === 'function') {
        this._onBeforeCallResumeFunc(normalizedSession, this.activeSession);
      }
      this._onBeforeCallResumeFunctions.forEach(function (handler) {
        return handler(normalizedSession, _this19.activeSession);
      });
    }
  }, {
    key: '_onCallResume',
    value: function _onCallResume(session) {
      var _this20 = this;

      var normalizedSession = (0, _ramda.find)(function (x) {
        return x.id === session.id;
      }, this.sessions);
      if (typeof this._onCallResumeFunc === 'function') {
        this._onCallResumeFunc(normalizedSession, this.activeSession);
      }
      this._onCallResumeFunctions.forEach(function (handler) {
        return handler(normalizedSession, _this20.activeSession);
      });
    }
  }, {
    key: '_retrySleep',
    value: function () {
      var _ref37 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee33() {
        return _regenerator2.default.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                if (!(this.connectRetryCounts < 3)) {
                  _context33.next = 3;
                  break;
                }

                _context33.next = 3;
                return (0, _sleep2.default)(FIRST_THREE_RETRIES_DELAY);

              case 3:
                if (!(this.connectRetryCounts === 3)) {
                  _context33.next = 6;
                  break;
                }

                _context33.next = 6;
                return (0, _sleep2.default)(FOURTH_RETRIES_DELAY);

              case 6:
                if (!(this.connectRetryCounts === 4)) {
                  _context33.next = 9;
                  break;
                }

                _context33.next = 9;
                return (0, _sleep2.default)(FIFTH_RETRIES_DELAY);

              case 9:
                if (!(this.connectRetryCounts > 4)) {
                  _context33.next = 12;
                  break;
                }

                _context33.next = 12;
                return (0, _sleep2.default)(MAX_RETRIES_DELAY);

              case 12:
              case 'end':
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      function _retrySleep() {
        return _ref37.apply(this, arguments);
      }

      return _retrySleep;
    }()

    /**
     * Inform user what is happening with webphone,
     * this will be invoked when webphone itself run into error situation
     */

  }, {
    key: 'showAlert',
    value: function () {
      var _ref38 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee34() {
        return _regenerator2.default.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                if (this.errorCode) {
                  _context34.next = 2;
                  break;
                }

                return _context34.abrupt('return');

              case 2:
                this._alert.danger({
                  message: this.errorCode,
                  allowDuplicates: false,
                  payload: {
                    statusCode: this.statusCode
                  }
                });

              case 3:
              case 'end':
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      function showAlert() {
        return _ref38.apply(this, arguments);
      }

      return showAlert;
    }()
  }, {
    key: 'onCallStart',
    value: function onCallStart(handler) {
      if (typeof handler === 'function') {
        this._onCallStartFunctions.push(handler);
      }
    }
  }, {
    key: 'onCallRing',
    value: function onCallRing(handler) {
      if (typeof handler === 'function') {
        this._onCallRingFunctions.push(handler);
      }
    }
  }, {
    key: 'onCallEnd',
    value: function onCallEnd(handler) {
      if (typeof handler === 'function') {
        this._onCallEndFunctions.push(handler);
      }
    }
  }, {
    key: 'onBeforeCallResume',
    value: function onBeforeCallResume(handler) {
      if (typeof handler === 'function') {
        this._onBeforeCallResumeFunctions.push(handler);
      }
    }
  }, {
    key: 'onCallResume',
    value: function onCallResume(handler) {
      if (typeof handler === 'function') {
        this._onCallResumeFunctions.push(handler);
      }
    }
  }, {
    key: 'onBeforeCallEnd',
    value: function onBeforeCallEnd(handler) {
      if (typeof handler === 'function') {
        this._onBeforeCallEndFunctions.push(handler);
      }
    }
  }, {
    key: 'status',
    get: function get() {
      return this.state.status;
    }
  }, {
    key: 'originalSessions',
    get: function get() {
      return this._sessions;
    }
  }, {
    key: 'ready',
    get: function get() {
      return this.state.status === _moduleStatuses2.default.ready;
    }
  }, {
    key: 'pending',
    get: function get() {
      return this.state.status === _moduleStatuses2.default.pending;
    }
  }, {
    key: 'ringSessionId',
    get: function get() {
      return this.state.ringSessionId;
    }
  }, {
    key: 'activeSessionId',
    get: function get() {
      return this.state.activeSessionId;
    }

    /**
     * Current active session(Outbound and InBound that answered)
     */

  }, {
    key: 'activeSession',
    get: function get() {
      return this._selectors.activeSession();
    }

    /**
     * Current ring session(inbound)
     */

  }, {
    key: 'ringSession',
    get: function get() {
      return this._selectors.ringSession();
    }
  }, {
    key: 'sessions',
    get: function get() {
      return this.state.sessions;
    }
  }, {
    key: 'ringSessions',
    get: function get() {
      return this._selectors.ringSessions();
    }
  }, {
    key: 'onHoldSessions',
    get: function get() {
      return this._selectors.onHoldSessions();
    }
  }, {
    key: 'lastEndedSessions',
    get: function get() {
      return this.state.lastEndedSessions;
    }
  }, {
    key: 'cachedSessions',
    get: function get() {
      return this._selectors.cachedSessions();
    }
  }, {
    key: 'videoElementPrepared',
    get: function get() {
      return this.state.videoElementPrepared;
    }
  }, {
    key: 'enabled',
    get: function get() {
      return this._rolesAndPermissions.webphoneEnabled;
    }
  }, {
    key: 'connectionStatus',
    get: function get() {
      return this.state.connectionStatus;
    }
  }, {
    key: 'connectRetryCounts',
    get: function get() {
      return this.state.connectRetryCounts;
    }
  }, {
    key: 'acceptOptions',
    get: function get() {
      return {
        sessionDescriptionHandlerOptions: {
          constraints: {
            audio: {
              deviceId: this._audioSettings.inputDeviceId
            },
            video: false
          }
        }
      };
    }
  }, {
    key: 'isOnTransfer',
    get: function get() {
      return this.activeSession && this.activeSession.isOnTransfer;
    }
  }, {
    key: 'errorCode',
    get: function get() {
      return this.state.errorCode;
    }
  }, {
    key: 'statusCode',
    get: function get() {
      return this.state.statusCode;
    }
  }, {
    key: 'disconnecting',
    get: function get() {
      return this.connectionStatus === _connectionStatus2.default.disconnecting;
    }
  }, {
    key: 'connecting',
    get: function get() {
      return this.connectionStatus === _connectionStatus2.default.connecting;
    }
  }, {
    key: 'connected',
    get: function get() {
      return this.connectionStatus === _connectionStatus2.default.connected;
    }
  }, {
    key: 'connectFailed',
    get: function get() {
      return this.connectionStatus === _connectionStatus2.default.connectFailed;
    }
  }]);
  return Webphone;
}(_RcModule3.default), (_applyDecoratedDescriptor(_class2.prototype, '_sipProvision', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, '_sipProvision'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, '_connect', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, '_connect'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'connect', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'connect'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'disconnect', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'disconnect'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'answer', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'answer'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'reject', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'reject'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'resume', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'resume'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'forward', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'forward'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'mute', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'mute'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'unmute', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'unmute'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'hold', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'hold'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'unhold', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'unhold'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'startRecord', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'startRecord'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'stopRecord', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'stopRecord'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'park', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'park'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'transfer', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'transfer'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'transferWarm', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'transferWarm'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'flip', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'flip'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, '_sendDTMF', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, '_sendDTMF'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'sendDTMF', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'sendDTMF'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'hangup', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'hangup'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'toVoiceMail', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'toVoiceMail'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'replyWithMessage', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'replyWithMessage'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'makeCall', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'makeCall'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'updateSessionMatchedContact', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'updateSessionMatchedContact'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'setSessionCaching', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'setSessionCaching'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'clearSessionCaching', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'clearSessionCaching'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'toggleMinimized', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'toggleMinimized'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'showAlert', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'showAlert'), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ringingCallOnView', [_getter2.default], {
  enumerable: true,
  initializer: function initializer() {
    var _this21 = this;

    return (0, _reselect.createSelector)(function () {
      return _this21.ringSessions;
    }, function (sessions) {
      return (0, _ramda.find)(function (session) {
        return !session.minimized;
      }, sessions);
    });
  }
})), _class2)) || _class);
exports.default = Webphone;
//# sourceMappingURL=index.js.map

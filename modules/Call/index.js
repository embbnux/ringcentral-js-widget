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

var _redux = require('redux');

var _extractControls2 = require('@ringcentral-integration/phone-number/lib/extractControls');

var _extractControls3 = _interopRequireDefault(_extractControls2);

var _RcModule2 = require('../../lib/RcModule');

var _RcModule3 = _interopRequireDefault(_RcModule2);

var _di = require('../../lib/di');

var _callingModes = require('../CallingSettings/callingModes');

var _callingModes2 = _interopRequireDefault(_callingModes);

var _proxify = require('../../lib/proxy/proxify');

var _proxify2 = _interopRequireDefault(_proxify);

var _ensureExist = require('../../lib/ensureExist');

var _ensureExist2 = _interopRequireDefault(_ensureExist);

var _actionTypes = require('./actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _getCallReducer = require('./getCallReducer');

var _getCallReducer2 = _interopRequireDefault(_getCallReducer);

var _callStatus = require('./callStatus');

var _callStatus2 = _interopRequireDefault(_callStatus);

var _callErrors = require('./callErrors');

var _callErrors2 = _interopRequireDefault(_callErrors);

var _ringoutErrors = require('../Ringout/ringoutErrors');

var _ringoutErrors2 = _interopRequireDefault(_ringoutErrors);

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

/**
 * @class
 * @description Call managing module
 */
var Call = (_dec = (0, _di.Module)({
  deps: ['Alert', 'Storage', 'Softphone', 'Ringout', 'NumberValidate', 'RegionSettings', 'CallingSettings', 'RolesAndPermissions', { dep: 'Webphone', optional: true }, { dep: 'CallOptions', optional: true }]
}), _dec(_class = (_class2 = function (_RcModule) {
  (0, _inherits3.default)(Call, _RcModule);

  /**
   * @constructor
   * @param {Object} params - params object
   * @param {Alert} params.alert - alert module instance
   * @param {Client} params.client - client module instance
   * @param {Storage} params.storage - storage module instance
   * @param {CallingSettings} params.callingSettings - callingSettings module instance
   * @param {Softphone} params.softphone - softphone module instance
   * @param {Ringout} params.ringout - ringout module instance
   * @param {Webphone} params.webphone - webphone module instance
   * @param {NumberValidate} params.numberValidate - numberValidate module instance
   * @param {RegionSettings} params.regionSettings - regionSettings module instance
   */
  function Call(_ref) {
    var alert = _ref.alert,
        storage = _ref.storage,
        callingSettings = _ref.callingSettings,
        softphone = _ref.softphone,
        ringout = _ref.ringout,
        webphone = _ref.webphone,
        numberValidate = _ref.numberValidate,
        regionSettings = _ref.regionSettings,
        rolesAndPermissions = _ref.rolesAndPermissions,
        options = (0, _objectWithoutProperties3.default)(_ref, ['alert', 'storage', 'callingSettings', 'softphone', 'ringout', 'webphone', 'numberValidate', 'regionSettings', 'rolesAndPermissions']);
    (0, _classCallCheck3.default)(this, Call);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Call.__proto__ || (0, _getPrototypeOf2.default)(Call)).call(this, (0, _extends3.default)({}, options, {
      actionTypes: _actionTypes2.default
    })));

    _this._alert = _ensureExist2.default.call(_this, alert, 'alert');
    _this._storage = _ensureExist2.default.call(_this, storage, 'storage');
    _this._storageKey = 'callData';
    _this._reducer = (0, _getCallReducer2.default)(_this.actionTypes);
    _this._callingSettings = _ensureExist2.default.call(_this, callingSettings, 'callingSettings');
    _this._ringout = _ensureExist2.default.call(_this, ringout, 'ringout');
    _this._softphone = _ensureExist2.default.call(_this, softphone, 'softphone');
    _this._webphone = webphone;
    _this._numberValidate = _ensureExist2.default.call(_this, numberValidate, 'numberValidate');
    _this._regionSettings = _ensureExist2.default.call(_this, regionSettings, 'regionSettings');
    _this._rolesAndPermissions = _ensureExist2.default.call(_this, rolesAndPermissions, 'rolesAndPermissions');

    _this._callSettingMode = null;

    _this._storage.registerReducer({
      key: _this._storageKey,
      reducer: (0, _redux.combineReducers)({
        lastPhoneNumber: (0, _getCallReducer.getLastPhoneNumberReducer)(_this.actionTypes),
        lastRecipient: (0, _getCallReducer.getLastRecipientReducer)(_this.actionTypes)
      })
    });
    return _this;
  }

  (0, _createClass3.default)(Call, [{
    key: 'initialize',
    value: function initialize() {
      var _this2 = this;

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
                if (!this._shouldInit()) {
                  _context.next = 7;
                  break;
                }

                this.store.dispatch({
                  type: this.actionTypes.init
                });
                _context.next = 4;
                return this._initCallModule();

              case 4:
                this.store.dispatch({
                  type: this.actionTypes.initSuccess
                });
                _context.next = 14;
                break;

              case 7:
                if (!this._shouldReset()) {
                  _context.next = 11;
                  break;
                }

                this._resetCallModule();
                _context.next = 14;
                break;

              case 11:
                if (!this.ready) {
                  _context.next = 14;
                  break;
                }

                _context.next = 14;
                return this._processCall();

              case 14:
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
      return this._numberValidate.ready && this._callingSettings.ready && this._storage.ready && this._regionSettings.ready && (!this._webphone || this._webphone.ready) && this._ringout.ready && this._softphone.ready && this._rolesAndPermissions.ready && this.pending;
    }
  }, {
    key: '_shouldReset',
    value: function _shouldReset() {
      return (!this._numberValidate.ready || !this._callingSettings.ready || !this._regionSettings.ready || !!this._webphone && !this._webphone.ready || !this._ringout.ready || !this._softphone.ready || !this._rolesAndPermissions.ready || !this._storage.ready) && this.ready;
    }
  }, {
    key: '_initCallModule',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this._callSettingMode = this._callingSettings.callingMode;

                if (!(this._callSettingMode === _callingModes2.default.webphone && this._webphone)) {
                  _context2.next = 4;
                  break;
                }

                _context2.next = 4;
                return this._webphone.connect();

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _initCallModule() {
        return _ref3.apply(this, arguments);
      }

      return _initCallModule;
    }()
  }, {
    key: '_resetCallModule',
    value: function _resetCallModule() {
      this.store.dispatch({
        type: this.actionTypes.resetSuccess
      });
      this._callSettingMode = this._callingSettings.callingMode;
      if (this._callSettingMode === _callingModes2.default.webphone && this._webphone) {
        this._webphone.disconnect();
      }
    }
  }, {
    key: '_processCall',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var oldCallSettingMode;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                oldCallSettingMode = this._callSettingMode;

                if (!(this._callingSettings.callingMode !== oldCallSettingMode && this._webphone)) {
                  _context3.next = 10;
                  break;
                }

                this._callSettingMode = this._callingSettings.callingMode;

                if (!(oldCallSettingMode === _callingModes2.default.webphone)) {
                  _context3.next = 7;
                  break;
                }

                this._webphone.disconnect();
                _context3.next = 10;
                break;

              case 7:
                if (!(this._callSettingMode === _callingModes2.default.webphone)) {
                  _context3.next = 10;
                  break;
                }

                _context3.next = 10;
                return this._webphone.connect();

              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _processCall() {
        return _ref4.apply(this, arguments);
      }

      return _processCall;
    }()
  }, {
    key: 'onToNumberChange',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(value) {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.store.dispatch({
                  type: this.actionTypes.toNumberChanged,
                  data: value
                });

              case 1:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onToNumberChange(_x) {
        return _ref5.apply(this, arguments);
      }

      return onToNumberChange;
    }()

    // save the click to dial entity, only when call took place

  }, {
    key: 'onToNumberMatch',
    value: function onToNumberMatch(_ref6) {
      var entityId = _ref6.entityId,
          startTime = _ref6.startTime;

      if (this.isIdle) {
        this.store.dispatch({
          type: this.actionTypes.toNumberMatched,
          data: { entityId: entityId, startTime: startTime }
        });
      }
    }
  }, {
    key: 'cleanToNumberEntities',
    value: function cleanToNumberEntities() {
      this.store.dispatch({
        type: this.actionTypes.cleanToNumberEntities
      });
    }
  }, {
    key: 'call',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(_ref7) {
        var input = _ref7.phoneNumber,
            recipient = _ref7.recipient,
            fromNumber = _ref7.fromNumber,
            _ref7$isConference = _ref7.isConference,
            isConference = _ref7$isConference === undefined ? false : _ref7$isConference;

        var session, _extractControls, phoneNumber, extendedControls, toNumber, validatedNumbers;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                session = null;

                if (!this.isIdle) {
                  _context5.next = 28;
                  break;
                }

                _extractControls = (0, _extractControls3.default)(input), phoneNumber = _extractControls.phoneNumber, extendedControls = _extractControls.extendedControls;
                toNumber = recipient && (recipient.phoneNumber || recipient.extension) || phoneNumber;

                if (!(!toNumber || ('' + toNumber).trim().length === 0)) {
                  _context5.next = 8;
                  break;
                }

                this._alert.warning({
                  message: _callErrors2.default.noToNumber
                });
                _context5.next = 28;
                break;

              case 8:
                this.store.dispatch({
                  type: this.actionTypes.connect,
                  isConference: isConference,
                  phoneNumber: phoneNumber,
                  recipient: recipient,
                  callSettingMode: this._callSettingMode // for Track
                });
                _context5.prev = 9;
                _context5.next = 12;
                return this._getValidatedNumbers({
                  toNumber: toNumber,
                  fromNumber: fromNumber,
                  isConference: isConference
                });

              case 12:
                validatedNumbers = _context5.sent;

                if (!validatedNumbers) {
                  _context5.next = 20;
                  break;
                }

                _context5.next = 16;
                return this._makeCall((0, _extends3.default)({}, validatedNumbers, {
                  extendedControls: extendedControls
                }));

              case 16:
                session = _context5.sent;

                this.store.dispatch({
                  type: this.actionTypes.connectSuccess,
                  callSettingMode: this._callSettingMode // for Track
                });
                _context5.next = 21;
                break;

              case 20:
                this.store.dispatch({
                  type: this.actionTypes.connectError
                });

              case 21:
                _context5.next = 28;
                break;

              case 23:
                _context5.prev = 23;
                _context5.t0 = _context5['catch'](9);

                if (!_context5.t0.message && _context5.t0.type && _callErrors2.default[_context5.t0.type]) {
                  // validate format error
                  this._alert.warning({
                    message: _callErrors2.default[_context5.t0.type],
                    payload: {
                      phoneNumber: _context5.t0.phoneNumber
                    }
                  });
                } else if (_context5.t0.message === _ringoutErrors2.default.firstLegConnectFailed) {
                  this._alert.warning({
                    message: _callErrors2.default.connectFailed,
                    payload: _context5.t0
                  });
                } else if (_context5.t0.message === 'Failed to fetch') {
                  this._alert.danger({
                    message: _callErrors2.default.networkError,
                    payload: _context5.t0
                  });
                } else if (_context5.t0.message !== 'Refresh token has expired') {
                  this._alert.danger({
                    message: _callErrors2.default.internalError,
                    payload: _context5.t0
                  });
                }
                this.store.dispatch({
                  type: this.actionTypes.connectError
                });
                throw _context5.t0;

              case 28:
                return _context5.abrupt('return', session);

              case 29:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this, [[9, 23]]);
      }));

      function call(_x2) {
        return _ref8.apply(this, arguments);
      }

      return call;
    }()
  }, {
    key: '_getValidatedNumbers',
    value: function () {
      var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(_ref9) {
        var toNumber = _ref9.toNumber,
            fromNumber = _ref9.fromNumber,
            isConference = _ref9.isConference;
        var isWebphone, theFromNumber, waitingValidateNumbers, parsedToNumber, parsedFromNumber, numbers, validatedResult, toNumberIndex, fromNumberIndex, error, parsedFromNumberE164;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                isWebphone = this._callingSettings.callingMode === _callingModes2.default.webphone;
                theFromNumber = fromNumber || (isWebphone ? this._callingSettings.fromNumber : this._callingSettings.myLocation);

                if (!(isWebphone && (theFromNumber === null || theFromNumber === ''))) {
                  _context6.next = 4;
                  break;
                }

                return _context6.abrupt('return', null);

              case 4:
                waitingValidateNumbers = [];


                if (!isConference) {
                  waitingValidateNumbers.push({
                    type: 'toNumber',
                    number: toNumber
                  });
                }

                if (theFromNumber && theFromNumber.length > 0 && !(isWebphone && theFromNumber === 'anonymous')) {
                  waitingValidateNumbers.push({
                    type: 'fromNumber',
                    number: theFromNumber
                  });
                }

                parsedToNumber = void 0;
                parsedFromNumber = void 0;

                if (!waitingValidateNumbers.length) {
                  _context6.next = 21;
                  break;
                }

                numbers = waitingValidateNumbers.map(function (x) {
                  return x.number;
                });
                _context6.next = 13;
                return this._numberValidate.validateNumbers(numbers);

              case 13:
                validatedResult = _context6.sent;

                if (validatedResult.result) {
                  _context6.next = 17;
                  break;
                }

                validatedResult.errors.forEach(function (error) {
                  // this._alert.warning({
                  //   message: callErrors[error.type],
                  //   payload: {
                  //     phoneNumber: error.phoneNumber
                  //   }
                  // });
                  throw error;
                });
                return _context6.abrupt('return', null);

              case 17:
                toNumberIndex = waitingValidateNumbers.findIndex(function (x) {
                  return x.type === 'toNumber';
                });
                fromNumberIndex = waitingValidateNumbers.findIndex(function (x) {
                  return x.type === 'fromNumber';
                });

                parsedToNumber = validatedResult.numbers[toNumberIndex];
                parsedFromNumber = validatedResult.numbers[fromNumberIndex];

              case 21:
                if (!(parsedToNumber && parsedToNumber.international && !this._rolesAndPermissions.permissions.InternationalCalls)) {
                  _context6.next = 24;
                  break;
                }

                error = {
                  phoneNumber: parsedToNumber.originalString,
                  type: 'noInternational'
                };
                throw error;

              case 24:

                // using e164 in response to call
                parsedFromNumberE164 = void 0;

                if (parsedFromNumber) {
                  parsedFromNumberE164 = parsedFromNumber.e164;
                  // add ext back if any
                  if (parsedFromNumber.e164 && parsedFromNumber.subAddress) {
                    parsedFromNumberE164 = [parsedFromNumber.e164, parsedFromNumber.subAddress].join('*');
                  }
                }
                if (isWebphone && theFromNumber === 'anonymous') {
                  parsedFromNumberE164 = 'anonymous';
                }

                return _context6.abrupt('return', {
                  toNumber: parsedToNumber ? parsedToNumber.e164 : toNumber,
                  fromNumber: parsedFromNumberE164
                });

              case 28:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function _getValidatedNumbers(_x3) {
        return _ref10.apply(this, arguments);
      }

      return _getValidatedNumbers;
    }()
  }, {
    key: '_makeCall',
    value: function () {
      var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(_ref11) {
        var _this3 = this;

        var toNumber = _ref11.toNumber,
            fromNumber = _ref11.fromNumber,
            _ref11$callingMode = _ref11.callingMode,
            callingMode = _ref11$callingMode === undefined ? this._callingSettings.callingMode : _ref11$callingMode,
            _ref11$extendedContro = _ref11.extendedControls,
            extendedControls = _ref11$extendedContro === undefined ? [] : _ref11$extendedContro;
        var homeCountry, homeCountryId, session;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                homeCountry = this._regionSettings.availableCountries.find(function (country) {
                  return country.isoCode === _this3._regionSettings.countryCode;
                });
                homeCountryId = homeCountry && homeCountry.callingCode || '1';
                session = void 0;
                _context7.t0 = callingMode;
                _context7.next = _context7.t0 === _callingModes2.default.softphone ? 6 : _context7.t0 === _callingModes2.default.ringout ? 8 : _context7.t0 === _callingModes2.default.webphone ? 12 : 17;
                break;

              case 6:
                session = this._softphone.makeCall(toNumber);
                return _context7.abrupt('break', 18);

              case 8:
                _context7.next = 10;
                return this._ringout.makeCall({
                  fromNumber: fromNumber,
                  toNumber: toNumber,
                  prompt: this._callingSettings.ringoutPrompt
                });

              case 10:
                session = _context7.sent;
                return _context7.abrupt('break', 18);

              case 12:
                if (!this._webphone) {
                  _context7.next = 16;
                  break;
                }

                _context7.next = 15;
                return this._webphone.makeCall({
                  fromNumber: fromNumber,
                  toNumber: toNumber,
                  homeCountryId: homeCountryId,
                  extendedControls: extendedControls
                });

              case 15:
                session = _context7.sent;

              case 16:
                return _context7.abrupt('break', 18);

              case 17:
                return _context7.abrupt('break', 18);

              case 18:
                return _context7.abrupt('return', session);

              case 19:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function _makeCall(_x4) {
        return _ref12.apply(this, arguments);
      }

      return _makeCall;
    }()
  }, {
    key: 'status',
    get: function get() {
      return this.state.status;
    }
  }, {
    key: 'callStatus',
    get: function get() {
      return this.state.callStatus;
    }
  }, {
    key: 'isIdle',
    get: function get() {
      return this.state.callStatus === _callStatus2.default.idle;
    }
  }, {
    key: 'lastPhoneNumber',
    get: function get() {
      return this._storage.getItem(this._storageKey).lastPhoneNumber;
    }
  }, {
    key: 'lastRecipient',
    get: function get() {
      return this._storage.getItem(this._storageKey).lastRecipient;
    }
  }, {
    key: 'toNumber',
    get: function get() {
      return this.state.toNumber;
    }
  }, {
    key: 'toNumberEntities',
    get: function get() {
      return this.state.toNumberEntities;
    }
  }]);
  return Call;
}(_RcModule3.default), (_applyDecoratedDescriptor(_class2.prototype, 'onToNumberChange', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'onToNumberChange'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'call', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'call'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, '_getValidatedNumbers', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, '_getValidatedNumbers'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, '_makeCall', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, '_makeCall'), _class2.prototype)), _class2)) || _class);
exports.default = Call;
//# sourceMappingURL=index.js.map

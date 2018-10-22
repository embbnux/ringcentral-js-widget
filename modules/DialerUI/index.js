'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

var _RcModule2 = require('ringcentral-integration/lib/RcModule');

var _RcModule3 = _interopRequireDefault(_RcModule2);

var _di = require('ringcentral-integration/lib/di');

var _proxify = require('ringcentral-integration/lib/proxy/proxify');

var _proxify2 = _interopRequireDefault(_proxify);

var _ensureExist = require('ringcentral-integration/lib/ensureExist');

var _ensureExist2 = _interopRequireDefault(_ensureExist);

var _callErrors = require('ringcentral-integration/modules/Call/callErrors');

var _callErrors2 = _interopRequireDefault(_callErrors);

var _actionTypes = require('./actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _getReducer = require('./getReducer');

var _getReducer2 = _interopRequireDefault(_getReducer);

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

var DialerUI = (_dec = (0, _di.Module)({
  name: 'DialerUI',
  deps: ['Call', 'Alert', { dep: 'ConferenceCall', optional: true }, { dep: 'DialerUIOptions', optional: true }]
}), _dec(_class = (_class2 = function (_RcModule) {
  (0, _inherits3.default)(DialerUI, _RcModule);

  function DialerUI(_ref) {
    var call = _ref.call,
        alert = _ref.alert,
        conferenceCall = _ref.conferenceCall,
        subActionTypes = _ref.actionTypes,
        options = (0, _objectWithoutProperties3.default)(_ref, ['call', 'alert', 'conferenceCall', 'actionTypes']);
    (0, _classCallCheck3.default)(this, DialerUI);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DialerUI.__proto__ || (0, _getPrototypeOf2.default)(DialerUI)).call(this, (0, _extends3.default)({}, options, {
      actionTypes: subActionTypes || _actionTypes2.default
    })));

    _this._call = _ensureExist2.default.call(_this, call, 'call');
    _this._alert = _ensureExist2.default.call(_this, alert, 'alert');
    _this._conferenceCall = conferenceCall;
    _this._reducer = (0, _getReducer2.default)(_this.actionTypes);
    _this._callHooks = [];
    return _this;
  }

  (0, _createClass3.default)(DialerUI, [{
    key: '_onStateChange',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.pending && this._call.ready) {
                  this.store.dispatch({
                    type: this.actionTypes.init
                  });
                  this.store.dispatch({
                    type: this.actionTypes.initSuccess
                  });
                } else if (this.ready && !this._call.ready) {
                  this.store.dispatch({
                    type: this.actionTypes.reset
                  });
                  this.store.dispatch({
                    type: this.actionTypes.resetSuccess
                  });
                }

              case 1:
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
    key: 'clearToNumberField',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.store.dispatch({
                  type: this.actionTypes.clearToNumberField
                });

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function clearToNumberField() {
        return _ref3.apply(this, arguments);
      }

      return clearToNumberField;
    }()
  }, {
    key: 'setToNumberField',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(phoneNumber) {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.toNumberField !== phoneNumber) {
                  this.store.dispatch({
                    type: this.actionTypes.setToNumberField,
                    phoneNumber: phoneNumber
                  });
                }

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function setToNumberField(_x) {
        return _ref4.apply(this, arguments);
      }

      return setToNumberField;
    }()
  }, {
    key: 'setRecipient',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(recipient) {
        var shouldClean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.store.dispatch({
                  type: this.actionTypes.setRecipient,
                  recipient: recipient
                });

                if (!shouldClean) {
                  _context4.next = 4;
                  break;
                }

                _context4.next = 4;
                return this.clearToNumberField();

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function setRecipient(_x3) {
        return _ref5.apply(this, arguments);
      }

      return setRecipient;
    }()
  }, {
    key: 'clearRecipient',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.store.dispatch({
                  type: this.actionTypes.clearRecipient
                });

              case 1:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function clearRecipient() {
        return _ref6.apply(this, arguments);
      }

      return clearRecipient;
    }()
  }, {
    key: 'call',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(_ref7) {
        var _ref7$phoneNumber = _ref7.phoneNumber,
            phoneNumber = _ref7$phoneNumber === undefined ? '' : _ref7$phoneNumber,
            _ref7$recipient = _ref7.recipient,
            recipient = _ref7$recipient === undefined ? null : _ref7$recipient,
            _ref7$fromNumber = _ref7.fromNumber,
            fromNumber = _ref7$fromNumber === undefined ? null : _ref7$fromNumber;

        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, hook;

        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(phoneNumber || recipient)) {
                  _context6.next = 37;
                  break;
                }

                this.store.dispatch({
                  type: this.actionTypes.call,
                  phoneNumber: phoneNumber,
                  recipient: recipient
                });
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context6.prev = 5;
                _iterator = (0, _getIterator3.default)(this._callHooks);

              case 7:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context6.next = 14;
                  break;
                }

                hook = _step.value;
                _context6.next = 11;
                return hook({
                  phoneNumber: phoneNumber,
                  recipient: recipient,
                  fromNumber: fromNumber
                });

              case 11:
                _iteratorNormalCompletion = true;
                _context6.next = 7;
                break;

              case 14:
                _context6.next = 20;
                break;

              case 16:
                _context6.prev = 16;
                _context6.t0 = _context6['catch'](5);
                _didIteratorError = true;
                _iteratorError = _context6.t0;

              case 20:
                _context6.prev = 20;
                _context6.prev = 21;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 23:
                _context6.prev = 23;

                if (!_didIteratorError) {
                  _context6.next = 26;
                  break;
                }

                throw _iteratorError;

              case 26:
                return _context6.finish(23);

              case 27:
                return _context6.finish(20);

              case 28:
                _context6.prev = 28;
                _context6.next = 31;
                return this._call.call({
                  phoneNumber: this.toNumberField,
                  recipient: this.recipient,
                  fromNumber: fromNumber
                });

              case 31:
                this.store.dispatch({
                  type: this.actionTypes.callSuccess
                });
                _context6.next = 37;
                break;

              case 34:
                _context6.prev = 34;
                _context6.t1 = _context6['catch'](28);

                this.store.dispatch({
                  type: this.actionTypes.callError,
                  error: _context6.t1
                });

              case 37:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this, [[5, 16, 20, 28], [21,, 23, 27], [28, 34]]);
      }));

      function call(_x4) {
        return _ref8.apply(this, arguments);
      }

      return call;
    }()
  }, {
    key: '_loadLastPhoneNumber',
    value: function _loadLastPhoneNumber() {
      if (!this._call.lastRecipient && !this._call.lastPhoneNumber) {
        this._alert.warning({
          message: _callErrors2.default.noToNumber
        });
      } else {
        this.store.dispatch({
          type: this.actionTypes.loadLastCallState,
          phoneNumber: this._call.lastPhoneNumber,
          recipient: this._call.lastRecipient
        });
      }
    }
  }, {
    key: 'onCallButtonClick',
    value: function () {
      var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
        var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            fromNumber = _ref10.fromNumber,
            fromSessionId = _ref10.fromSessionId;

        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!(('' + this.toNumberField).trim().length === 0 && !this.recipient)) {
                  _context7.next = 4;
                  break;
                }

                this._loadLastPhoneNumber();
                _context7.next = 7;
                break;

              case 4:
                this._onBeforeCall(fromSessionId);
                _context7.next = 7;
                return this.call({
                  phoneNumber: this.toNumberField,
                  recipient: this.recipient,
                  fromNumber: fromNumber
                });

              case 7:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function onCallButtonClick() {
        return _ref9.apply(this, arguments);
      }

      return onCallButtonClick;
    }()
  }, {
    key: '_onBeforeCall',
    value: function _onBeforeCall() {
      if (this._conferenceCall) {
        this._conferenceCall.closeMergingPair();
      }
    }
  }, {
    key: 'toNumberField',
    get: function get() {
      return this.state.toNumberField;
    }
  }, {
    key: 'recipient',
    get: function get() {
      return this.state.recipient;
    }
  }, {
    key: 'status',
    get: function get() {
      return this.state.status;
    }
  }]);
  return DialerUI;
}(_RcModule3.default), (_applyDecoratedDescriptor(_class2.prototype, 'clearToNumberField', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'clearToNumberField'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'setToNumberField', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'setToNumberField'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'setRecipient', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'setRecipient'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'clearRecipient', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'clearRecipient'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'call', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'call'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'onCallButtonClick', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'onCallButtonClick'), _class2.prototype)), _class2)) || _class);
exports.default = DialerUI;
//# sourceMappingURL=index.js.map

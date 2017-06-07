'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _callIconMap;
// import sessionStatus from 'ringcentral-integration/modules/Webphone/sessionStatus';

// import Button from '../Button';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('core-js/fn/array/find');

var _callDirections = require('ringcentral-integration/enums/callDirections');

var _callDirections2 = _interopRequireDefault(_callDirections);

var _callLogHelpers = require('ringcentral-integration/lib/callLogHelpers');

var _parseNumber = require('ringcentral-integration/lib/parseNumber');

var _parseNumber2 = _interopRequireDefault(_parseNumber);

var _formatNumber = require('ringcentral-integration/lib/formatNumber');

var _formatNumber2 = _interopRequireDefault(_formatNumber);

var _DynamicsFont = require('../../assets/DynamicsFont/DynamicsFont.scss');

var _DynamicsFont2 = _interopRequireDefault(_DynamicsFont);

var _DurationCounter = require('../DurationCounter');

var _DurationCounter2 = _interopRequireDefault(_DurationCounter);

var _ContactDisplay = require('../ContactDisplay');

var _ContactDisplay2 = _interopRequireDefault(_ContactDisplay);

var _formatDuration = require('../../lib/formatDuration');

var _formatDuration2 = _interopRequireDefault(_formatDuration);

var _ActionMenu = require('../ActionMenu');

var _ActionMenu2 = _interopRequireDefault(_ActionMenu);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

var _i18n = require('./i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var callIconMap = (_callIconMap = {}, (0, _defineProperty3.default)(_callIconMap, _callDirections2.default.inbound, _DynamicsFont2.default.inbound), (0, _defineProperty3.default)(_callIconMap, _callDirections2.default.outbound, _DynamicsFont2.default.outbound), (0, _defineProperty3.default)(_callIconMap, 'missed', _DynamicsFont2.default.missed), _callIconMap);

function CallIcon(_ref) {
  var direction = _ref.direction,
      missed = _ref.missed,
      active = _ref.active,
      ringing = _ref.ringing;

  return _react2.default.createElement(
    'div',
    { className: _styles2.default.callIcon },
    _react2.default.createElement('span', {
      className: (0, _classnames2.default)(missed ? callIconMap.missed : callIconMap[direction], active && _styles2.default.activeCall, ringing && _styles2.default.ringing, missed && _styles2.default.missed) })
  );
}
CallIcon.propTypes = {
  direction: _react.PropTypes.string.isRequired,
  missed: _react.PropTypes.bool,
  active: _react.PropTypes.bool,
  ringing: _react.PropTypes.bool
};
CallIcon.defaultProps = {
  missed: false,
  active: false,
  ringing: false
};

var CallItem = function (_Component) {
  (0, _inherits3.default)(CallItem, _Component);

  function CallItem(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, CallItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CallItem.__proto__ || (0, _getPrototypeOf2.default)(CallItem)).call(this, props));

    _this.onSelectContact = function (value, idx) {
      var selected = parseInt(idx, 10) - 1;
      _this._userSelection = true;
      _this.setState({
        selected: selected
      });
      if (_this.props.call.activityMatches.length > 0) {
        _this.logCall({ redirect: false, selected: selected });
      }
    };

    _this.getSelectedContact = function () {
      var selected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.selected;

      var contactMatches = _this.getContactMatches();
      return selected > -1 && contactMatches[selected] || contactMatches.length === 1 && contactMatches[0] || null;
    };

    _this.logCall = function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref3) {
        var _ref3$redirect = _ref3.redirect,
            redirect = _ref3$redirect === undefined ? true : _ref3$redirect,
            selected = _ref3.selected;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof _this.props.onLogCall === 'function' && _this._mounted && !_this.state.isLogging)) {
                  _context.next = 5;
                  break;
                }

                _this.setState({
                  isLogging: true
                });
                _context.next = 4;
                return _this.props.onLogCall({
                  contact: _this.getSelectedContact(selected),
                  call: _this.props.call,
                  redirect: redirect
                });

              case 4:
                if (_this._mounted) {
                  _this.setState({
                    isLogging: false
                  });
                }

              case 5:
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
          phoneNumber: _this.getPhoneNumber(),
          contact: _this.getSelectedContact()
        });
      }
    };

    _this.createSelectedContact = function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(entityType) {
        var phoneNumber;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(typeof _this.props.onCreateContact === 'function' && _this._mounted && !_this.state.isCreating)) {
                  _context2.next = 6;
                  break;
                }

                _this.setState({
                  isCreating: true
                });
                // console.log('start to create: isCreating...', this.state.isCreating);
                phoneNumber = _this.getPhoneNumber();
                _context2.next = 5;
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
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }();

    _this.clickToSms = function (_ref5) {
      var countryCode = _ref5.countryCode,
          areaCode = _ref5.areaCode;

      if (_this.props.onClickToSms) {
        var phoneNumber = _this.getPhoneNumber();
        var contact = _this.getSelectedContact();
        if (contact) {
          _this.props.onClickToSms((0, _extends3.default)({}, contact, {
            phoneNumber: phoneNumber
          }));
        } else {
          var formatted = (0, _formatNumber2.default)({
            phoneNumber: phoneNumber,
            countryCode: countryCode,
            areaCode: areaCode
          });
          _this.props.onClickToSms({
            name: _this.props.enableContactFallback ? _this.getFallbackContactName() : formatted,
            phoneNumber: phoneNumber
          }, true);
        }
      }
    };

    _this.clickToDial = function () {
      if (_this.props.onClickToDial) {
        _this.props.onClickToDial(_this.getPhoneNumber());
      }
    };

    _this.state = {
      selected: _this.getInitialContactIndex(),
      isLogging: false,
      isCreating: false
    };
    _this._userSelection = false;
    return _this;
  }

  (0, _createClass3.default)(CallItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._mounted = true;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this._userSelection && (nextProps.call.activityMatches !== this.props.call.activityMatches || nextProps.call.fromMatches !== this.props.call.fromMatches || nextProps.call.toMatches !== this.props.call.toMatches)) {
        this.setState({
          selected: this.getInitialContactIndex(nextProps)
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._mounted = false;
    }
  }, {
    key: 'getInitialContactIndex',
    value: function getInitialContactIndex() {
      var _this3 = this;

      var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      var contactMatches = this.getContactMatches(nextProps);
      var activityMatches = nextProps.call.activityMatches;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var activity = _step.value;

          var index = contactMatches.findIndex(function (contact) {
            return (
              // TODO find a better name or mechanism...
              _this3.props.isLoggedContact(nextProps.call, activity, contact)
            );
          });
          if (index > -1) return {
              v: index
            };
        };

        for (var _iterator = (0, _getIterator3.default)(activityMatches), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _ret = _loop();

          if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return -1;
    }
  }, {
    key: 'getPhoneNumber',
    value: function getPhoneNumber() {
      return (0, _callLogHelpers.isInbound)(this.props.call) ? this.props.call.from.phoneNumber || this.props.call.from.extensionNumber : this.props.call.to.phoneNumber || this.props.call.to.extensionNumber;
    }
  }, {
    key: 'getContactMatches',
    value: function getContactMatches() {
      var nextProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      return (0, _callLogHelpers.isInbound)(nextProps.call) ? nextProps.call.fromMatches : nextProps.call.toMatches;
    }
  }, {
    key: 'getFallbackContactName',
    value: function getFallbackContactName() {
      return (0, _callLogHelpers.isInbound)(this.props.call) ? this.props.call.from.name : this.props.call.to.name;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          _props$call = _props.call,
          direction = _props$call.direction,
          telephonyStatus = _props$call.telephonyStatus,
          result = _props$call.result,
          startTime = _props$call.startTime,
          duration = _props$call.duration,
          activityMatches = _props$call.activityMatches,
          currentLocale = _props.currentLocale,
          areaCode = _props.areaCode,
          countryCode = _props.countryCode,
          disableLinks = _props.disableLinks,
          disableClickToDial = _props.disableClickToDial,
          outboundSmsPermission = _props.outboundSmsPermission,
          internalSmsPermission = _props.internalSmsPermission,
          active = _props.active,
          onViewContact = _props.onViewContact,
          onCreateContact = _props.onCreateContact,
          onLogCall = _props.onLogCall,
          onClickToDial = _props.onClickToDial,
          onClickToSms = _props.onClickToSms,
          dateTimeFormatter = _props.dateTimeFormatter,
          isLogging = _props.isLogging,
          enableContactFallback = _props.enableContactFallback;

      var phoneNumber = this.getPhoneNumber();
      var contactMatches = this.getContactMatches();
      var fallbackContactName = this.getFallbackContactName();
      var ringing = (0, _callLogHelpers.isRinging)(this.props.call);
      var missed = (0, _callLogHelpers.isInbound)(this.props.call) && (0, _callLogHelpers.isMissed)(this.props.call);
      var parsedInfo = (0, _parseNumber2.default)(phoneNumber);
      var isExtension = !parsedInfo.hasPlus && parsedInfo.number.length <= 6;
      var showClickToSms = !!(onClickToSms && (isExtension ? internalSmsPermission : outboundSmsPermission));

      var durationEl = void 0;
      if (typeof duration === 'undefined') {
        durationEl = disableLinks ? _i18n2.default.getString('unavailable', currentLocale) : _react2.default.createElement(_DurationCounter2.default, { startTime: startTime });
      } else {
        durationEl = (0, _formatDuration2.default)(duration);
      }
      var dateEl = void 0;
      if (!active) {
        dateEl = dateTimeFormatter({ utcTimestamp: startTime });
      }
      var statusEl = void 0;
      if (active) {
        statusEl = _i18n2.default.getString(result || telephonyStatus, currentLocale);
      }
      // let webphoneEl;
      // if (webphoneSession) {
      //   let hangupFunc = webphoneHangup;
      //   let resumeFunc = webphoneResume;
      //   if (
      //     webphoneSession.direction === callDirections.inbound &&
      //     webphoneSession.callStatus === sessionStatus.connecting
      //   ) {
      //     hangupFunc = webphoneReject;
      //     resumeFunc = webphoneAnswer;
      //   }
      //   webphoneEl = (
      //     <div className={styles.webphoneButtons}>
      //       <Button
      //         className={classnames(styles.webphoneButton, styles.rejectWebphoneButton)}
      //         onClick={() => hangupFunc(webphoneSession.id)}
      //       >
      //         <i className={dynamicsFont.missed} />
      //       </Button>
      //       <Button
      //         className={styles.webphoneButton}
      //         onClick={() => resumeFunc(webphoneSession.id)}
      //       >
      //         <i className={dynamicsFont.call} />
      //       </Button>
      //     </div>
      //   );
      // }
      return _react2.default.createElement(
        'div',
        { className: _styles2.default.root },
        _react2.default.createElement(CallIcon, {
          direction: direction,
          ringing: ringing,
          active: active,
          missed: missed
        }),
        _react2.default.createElement(_ContactDisplay2.default, {
          className: (0, _classnames2.default)(_styles2.default.contactDisplay, missed && _styles2.default.missed, active && _styles2.default.active),
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
          currentLocale: currentLocale
        }),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.details },
          durationEl,
          ' | ',
          dateEl,
          statusEl
        ),
        _react2.default.createElement(_ActionMenu2.default, {
          currentLocale: currentLocale,
          onLog: onLogCall && this.logCall,
          onViewEntity: onViewContact && this.viewSelectedContact,
          onCreateEntity: onCreateContact && this.createSelectedContact,
          hasEntity: !!contactMatches.length,
          onClickToDial: onClickToDial && this.clickToDial,
          onClickToSms: showClickToSms ? function () {
            return _this4.clickToSms({ countryCode: countryCode, areaCode: areaCode });
          } : undefined,
          phoneNumber: phoneNumber,
          disableLinks: disableLinks,
          disableClickToDial: disableClickToDial,
          isLogging: isLogging || this.state.isLogging,
          isLogged: activityMatches.length > 0,
          isCreating: this.state.isCreating
        })
      );
    }
  }]);
  return CallItem;
}(_react.Component);

exports.default = CallItem;


CallItem.propTypes = {
  call: _react.PropTypes.shape({
    direction: _react.PropTypes.string.isRequired,
    telephonyStatus: _react.PropTypes.string,
    startTime: _react.PropTypes.number.isRequired,
    activityMatches: _react.PropTypes.array.isRequired,
    fromMatches: _react.PropTypes.array.isRequired,
    toMatches: _react.PropTypes.array.isRequired,
    from: _react.PropTypes.shape({
      phoneNumber: _react.PropTypes.string,
      extensionNumber: _react.PropTypes.string,
      name: _react.PropTypes.string
    }).isRequired,
    to: _react.PropTypes.shape({
      phoneNumber: _react.PropTypes.string,
      extensionNumber: _react.PropTypes.string,
      name: _react.PropTypes.string
    }),
    webphoneSession: _react.PropTypes.object
  }).isRequired,
  areaCode: _react.PropTypes.string.isRequired,
  countryCode: _react.PropTypes.string.isRequired,
  currentLocale: _react.PropTypes.string.isRequired,
  onLogCall: _react.PropTypes.func,
  onViewContact: _react.PropTypes.func,
  onCreateContact: _react.PropTypes.func,
  onClickToDial: _react.PropTypes.func,
  onClickToSms: _react.PropTypes.func,
  isLoggedContact: _react.PropTypes.func,
  disableLinks: _react.PropTypes.bool,
  disableClickToDial: _react.PropTypes.bool,
  outboundSmsPermission: _react.PropTypes.bool,
  internalSmsPermission: _react.PropTypes.bool,
  active: _react.PropTypes.bool.isRequired,
  dateTimeFormatter: _react.PropTypes.func.isRequired,
  isLogging: _react.PropTypes.bool,
  // webphoneAnswer: PropTypes.func,
  // webphoneReject: PropTypes.func,
  // webphoneHangup: PropTypes.func,
  // webphoneResume: PropTypes.func,
  enableContactFallback: _react.PropTypes.bool
};

CallItem.defaultProps = {
  onLogCall: undefined,
  onClickToDial: undefined,
  onClickToSms: undefined,
  onViewContact: undefined,
  onCreateContact: undefined,
  isLoggedContact: function isLoggedContact() {
    return false;
  },
  isLogging: false,
  disableClickToDial: false,
  outboundSmsPermission: false,
  internalSmsPermission: false,
  disableLinks: false,
  // webphoneAnswer: () => null,
  // webphoneReject: () => null,
  // webphoneHangup: () => null,
  // webphoneResume: () => null,
  enableContactFallback: undefined
};
//# sourceMappingURL=index.js.map

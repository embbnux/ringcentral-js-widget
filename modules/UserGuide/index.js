'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _ramda = require('ramda');

var _RcModule2 = require('../../lib/RcModule');

var _RcModule3 = _interopRequireDefault(_RcModule2);

var _proxify = require('../../lib/proxy/proxify');

var _proxify2 = _interopRequireDefault(_proxify);

var _di = require('../../lib/di');

var _actionTypes = require('./actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _getUserGuideReducer = require('./getUserGuideReducer');

var _getUserGuideReducer2 = _interopRequireDefault(_getUserGuideReducer);

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
 * Support localization
 */
var SUPPORTED_LOCALES = {
  'en-US': 'en-US',
  'fr-CA': 'fr-CA'
};

var UserGuide = (_dec = (0, _di.Module)({
  deps: ['Auth', 'Locale', 'Storage', 'Webphone', 'RolesAndPermissions', { dep: 'UserGuideOptions', optional: true }]
}), _dec(_class = (_class2 = function (_RcModule) {
  (0, _inherits3.default)(UserGuide, _RcModule);

  function UserGuide(_ref) {
    var auth = _ref.auth,
        locale = _ref.locale,
        storage = _ref.storage,
        webphone = _ref.webphone,
        rolesAndPermissions = _ref.rolesAndPermissions,
        options = (0, _objectWithoutProperties3.default)(_ref, ['auth', 'locale', 'storage', 'webphone', 'rolesAndPermissions']);
    (0, _classCallCheck3.default)(this, UserGuide);

    var _this = (0, _possibleConstructorReturn3.default)(this, (UserGuide.__proto__ || (0, _getPrototypeOf2.default)(UserGuide)).call(this, (0, _extends3.default)({
      actionTypes: _actionTypes2.default
    }, options)));

    _this._auth = auth;
    _this._locale = locale;
    _this._storage = storage;
    _this._webphone = webphone;
    _this._rolesAndPermissions = rolesAndPermissions;
    _this._reducer = (0, _getUserGuideReducer2.default)(_this.actionTypes);

    _this._context = options.context;

    _this._storageKey = 'userGuide';
    _this._guideReducer = (0, _getUserGuideReducer.getGuidesReducer)(_this.actionTypes);
    _this._storage.registerReducer({
      key: _this._storageKey,
      reducer: _this._guideReducer
    });
    return _this;
  }

  (0, _createClass3.default)(UserGuide, [{
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
                if (!(this.pending && this._auth.ready && this._locale.ready && this._storage.ready && this._rolesAndPermissions.ready && this._auth.loggedIn)) {
                  _context.next = 8;
                  break;
                }

                this.store.dispatch({
                  type: this.actionTypes.initSuccess
                });
                _context.next = 4;
                return this.initUserGuide();

              case 4:
                _context.next = 6;
                return this.preLoadImage();

              case 6:
                _context.next = 9;
                break;

              case 8:
                if (this.ready && (!this._auth.ready || !this._locale.ready || !this._storage.ready || !this._rolesAndPermissions.ready)) {
                  this.store.dispatch({
                    type: this.actionTypes.resetSuccess
                  });
                }

              case 9:
                // When there is an incoming call,
                // the guide should be dismissed
                if (this._webphone.ready && this._webphone.ringSession && this._webphone.ringSession !== this._lastRingSession) {
                  this._lastRingSession = this._webphone.ringSession;
                  this.dismiss();
                }

              case 10:
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
    key: '_preLoadImage',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(url) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return new _promise2.default(function (resolve, reject) {
                  var img = new Image();
                  img.src = url;
                  img.onload = resolve;
                  img.onerror = resolve;
                });

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _preLoadImage(_x) {
        return _ref3.apply(this, arguments);
      }

      return _preLoadImage;
    }()
  }, {
    key: 'preLoadImage',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var url;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                url = this.guides[0];

                if (!url) {
                  _context3.next = 4;
                  break;
                }

                _context3.next = 4;
                return this._preLoadImage(url);

              case 4:
                this.store.dispatch({
                  type: this.actionTypes.preLoadImageStatus
                });

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function preLoadImage() {
        return _ref4.apply(this, arguments);
      }

      return preLoadImage;
    }()

    /**
     * Using webpack `require.context` to load guides files.
     * Image files will be ordered by file name ascendingly.
     * @return {Map<String, Array<URI>>}
     */

  }, {
    key: 'resolveGuides',
    value: function resolveGuides() {
      var _this3 = this;

      if (this._context && typeof this._context === 'function') {
        var locales = (0, _keys2.default)(SUPPORTED_LOCALES);
        return this._context.keys().sort().map(function (key) {
          return _this3._context(key);
        }).reduce(function (prev, curr) {
          locales.forEach(function (locale) {
            if (!prev[locale]) prev[locale] = [];
            if ((0, _ramda.contains)(locale, curr)) {
              prev[locale].push(curr);
            }
          });
          return prev;
        }, {});
      }
      return {};
    }
  }, {
    key: 'dismiss',
    value: function dismiss() {
      this.updateCarousel({
        curIdx: 0, entered: false, playing: false, firstLogin: false
      });
    }
  }, {
    key: 'loadGuides',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(guides) {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (guides) {
                  this.store.dispatch({
                    type: this.actionTypes.loadGuides,
                    guides: guides
                  });
                }

              case 1:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function loadGuides(_x2) {
        return _ref5.apply(this, arguments);
      }

      return loadGuides;
    }()
  }, {
    key: 'updateCarousel',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(_ref6) {
        var curIdx = _ref6.curIdx,
            entered = _ref6.entered,
            playing = _ref6.playing,
            _ref6$firstLogin = _ref6.firstLogin,
            firstLogin = _ref6$firstLogin === undefined ? this.state.firstLogin : _ref6$firstLogin;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.store.dispatch({
                  type: this.actionTypes.updateCarousel,
                  curIdx: curIdx,
                  entered: entered,
                  playing: playing,
                  firstLogin: firstLogin
                });

              case 1:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function updateCarousel(_x3) {
        return _ref7.apply(this, arguments);
      }

      return updateCarousel;
    }()
  }, {
    key: 'initUserGuide',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
        var prevGuides, guides;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (this._rolesAndPermissions.hasUserGuidePermission) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt('return');

              case 2:
                // eslint-disable-next-line
                prevGuides = this.allGuides;
                guides = this.resolveGuides();
                // Determine if it needs to be displayed when first log in,
                // the principles behind this is to use webpack's file hash,
                // i.e. if any of the guide files is changed, the file name hash
                // will be changed as well, in this case, it will be displayed.

                _context6.next = 6;
                return this.loadGuides(guides);

              case 6:
                if ((0, _stringify2.default)(guides) !== (0, _stringify2.default)(prevGuides)) {
                  this.start({ firstLogin: true });
                }

              case 7:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function initUserGuide() {
        return _ref8.apply(this, arguments);
      }

      return initUserGuide;
    }()
  }, {
    key: 'start',
    value: function () {
      var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
        var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref10$firstLogin = _ref10.firstLogin,
            firstLogin = _ref10$firstLogin === undefined ? false : _ref10$firstLogin;

        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                // Start guides only when images are ready
                this.store.dispatch({
                  type: this.actionTypes.updateCarousel,
                  curIdx: 0,
                  entered: true,
                  playing: true,
                  firstLogin: firstLogin
                });

              case 1:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function start() {
        return _ref9.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: 'guides',
    get: function get() {
      if (!this._locale.ready) return [];
      if (this.allGuides) {
        var currentGuides = this.allGuides[this._locale.currentLocale];
        if (currentGuides && currentGuides.length > 0) return currentGuides;
        return this.allGuides[SUPPORTED_LOCALES['en-US']] || [];
      }
      return [];
    }
  }, {
    key: 'allGuides',
    get: function get() {
      if (!this._storage.ready) return null;
      return this._storage.getItem(this._storageKey);
    }
  }, {
    key: 'carouselState',
    get: function get() {
      return this.state.carouselState;
    }
  }, {
    key: 'started',
    get: function get() {
      return this.carouselState.entered && this.carouselState.playing;
    }
  }, {
    key: 'status',
    get: function get() {
      return this.state.status;
    }
  }, {
    key: 'preLoadImageStatus',
    get: function get() {
      return this.state.preLoadImageStatus;
    }
  }]);
  return UserGuide;
}(_RcModule3.default), (_applyDecoratedDescriptor(_class2.prototype, '_preLoadImage', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, '_preLoadImage'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'preLoadImage', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'preLoadImage'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'dismiss', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'dismiss'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'loadGuides', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'loadGuides'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'updateCarousel', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'updateCarousel'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'initUserGuide', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'initUserGuide'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'start', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'start'), _class2.prototype)), _class2)) || _class);
exports.default = UserGuide;
//# sourceMappingURL=index.js.map

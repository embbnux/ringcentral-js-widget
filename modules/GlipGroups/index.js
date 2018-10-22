'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

var _reselect = require('reselect');

var _di = require('../../lib/di');

var _Pollable2 = require('../../lib/Pollable');

var _Pollable3 = _interopRequireDefault(_Pollable2);

var _isBlank = require('../../lib/isBlank');

var _isBlank2 = _interopRequireDefault(_isBlank);

var _sleep = require('../../lib/sleep');

var _sleep2 = _interopRequireDefault(_sleep);

var _moduleStatuses = require('../../enums/moduleStatuses');

var _moduleStatuses2 = _interopRequireDefault(_moduleStatuses);

var _ensureExist = require('../../lib/ensureExist');

var _ensureExist2 = _interopRequireDefault(_ensureExist);

var _getter = require('../../lib/getter');

var _getter2 = _interopRequireDefault(_getter);

var _proxify = require('../../lib/proxy/proxify');

var _proxify2 = _interopRequireDefault(_proxify);

var _getReducer = require('./getReducer');

var _getReducer2 = _interopRequireDefault(_getReducer);

var _actionTypes = require('./actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

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

var glipGroupRegExp = /glip\/groups$/;
var subscriptionFilter = '/glip/groups';

var DEFAULT_PER_PAGE = 20;
var DEFAULT_TTL = 30 * 60 * 1000;
var DEFAULT_RETRY = 62 * 1000;
var DEFAULT_RECORD_COUNT_PER_REQ = 250;
var DEFAULT_PRELOAD_POSTS_DELAY_TTL = 800;

function formatGroup(group, personsMap) {
  var postsMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var ownerId = arguments[3];

  if (!group || !group.id) {
    return {};
  }
  var detailMembers = [];
  if (group.members) {
    group.members.forEach(function (memberId) {
      if (personsMap[memberId]) {
        detailMembers.push((0, _extends3.default)({}, personsMap[memberId], {
          isMe: ownerId === memberId
        }));
      }
    });
  }
  var newGroup = (0, _extends3.default)({}, group, {
    detailMembers: detailMembers,
    updatedTime: new Date(group.lastModifiedTime).getTime()
  });
  var latestPost = postsMap[group.id] && postsMap[group.id][0];
  if (latestPost) {
    newGroup.latestPost = (0, _extends3.default)({}, latestPost, {
      creator: personsMap[latestPost.creatorId]
    });
    var postCreationTime = new Date(latestPost.creationTime).getTime();
    if (postCreationTime > newGroup.updatedTime) {
      newGroup.updatedTime = postCreationTime;
    }
  }
  return newGroup;
}

function getUniqueMemberIds(groups) {
  var memberIds = [];
  var memberIdsMap = {};
  groups.forEach(function (group) {
    group.members.forEach(function (memberId) {
      if (memberIdsMap[memberId]) {
        return;
      }
      memberIdsMap[memberId] = true;
      memberIds.push(memberId);
    });
  });
  return memberIds;
}

function searchPosts(searchFilter, posts) {
  var result = false;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(posts), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var post = _step.value;

      if (post.text && post.text.toLowerCase().indexOf(searchFilter) > -1) {
        result = true;
        break;
      }
      if (post.mentions && post.mentions.length > 0) {
        var mentionNames = post.mentions.map(function (m) {
          return m.name;
        }).join(' ').toLowerCase();
        if (mentionNames.indexOf(searchFilter) > -1) {
          result = true;
          break;
        }
      }
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

  return result;
}

/**
 * @class
 * @description Accound info managing module.
 */
var GlipGroups = (_dec = (0, _di.Module)({
  deps: ['Auth', 'Client', 'Subscription', 'RolesAndPermissions', { dep: 'ConnectivityMonitor', optional: true }, { dep: 'Storage', optional: true }, { dep: 'TabManager', optional: true }, { dep: 'GlipPersons', optional: true }, { dep: 'GlipPosts', optional: true }, { dep: 'GLipGroupsOptions', optional: true }]
}), _dec(_class = (_class2 = function (_Pollable) {
  (0, _inherits3.default)(GlipGroups, _Pollable);

  /**
   * @constructor
   * @param {Object} params - params object
   * @param {Client} params.client - client module instance
   * @param {Auth} params.auth - auth module instance
   * @param {RolesAndPermissions} params.rolesAndPermissions - rolesAndPermission module instance
   * @param {Subscription} params.subscription - subscription module instance
   * @param {TabManager} params.tabManager - tabManager module instance
   * @param {GlipPersons} params.glipPersons - glipPersons module instance
   * @param {GlipPosts} params.glipPosts - glipPosts module instance
   * @param {Storage} params.storage - storage module instance
   */
  function GlipGroups(_ref) {
    var auth = _ref.auth,
        subscription = _ref.subscription,
        client = _ref.client,
        tabManager = _ref.tabManager,
        glipPersons = _ref.glipPersons,
        glipPosts = _ref.glipPosts,
        storage = _ref.storage,
        rolesAndPermissions = _ref.rolesAndPermissions,
        connectivityMonitor = _ref.connectivityMonitor,
        _ref$timeToRetry = _ref.timeToRetry,
        timeToRetry = _ref$timeToRetry === undefined ? DEFAULT_RETRY : _ref$timeToRetry,
        _ref$ttl = _ref.ttl,
        ttl = _ref$ttl === undefined ? DEFAULT_TTL : _ref$ttl,
        _ref$polling = _ref.polling,
        polling = _ref$polling === undefined ? false : _ref$polling,
        _ref$disableCache = _ref.disableCache,
        disableCache = _ref$disableCache === undefined ? false : _ref$disableCache,
        _ref$perPage = _ref.perPage,
        perPage = _ref$perPage === undefined ? DEFAULT_PER_PAGE : _ref$perPage,
        _ref$recordCountPerRe = _ref.recordCountPerReq,
        recordCountPerReq = _ref$recordCountPerRe === undefined ? DEFAULT_RECORD_COUNT_PER_REQ : _ref$recordCountPerRe,
        _ref$preloadPosts = _ref.preloadPosts,
        preloadPosts = _ref$preloadPosts === undefined ? true : _ref$preloadPosts,
        _ref$preloadPostsDela = _ref.preloadPostsDelayTtl,
        preloadPostsDelayTtl = _ref$preloadPostsDela === undefined ? DEFAULT_PRELOAD_POSTS_DELAY_TTL : _ref$preloadPostsDela,
        options = (0, _objectWithoutProperties3.default)(_ref, ['auth', 'subscription', 'client', 'tabManager', 'glipPersons', 'glipPosts', 'storage', 'rolesAndPermissions', 'connectivityMonitor', 'timeToRetry', 'ttl', 'polling', 'disableCache', 'perPage', 'recordCountPerReq', 'preloadPosts', 'preloadPostsDelayTtl']);
    (0, _classCallCheck3.default)(this, GlipGroups);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GlipGroups.__proto__ || (0, _getPrototypeOf2.default)(GlipGroups)).call(this, (0, _extends3.default)({}, options, {
      actionTypes: _actionTypes2.default
    })));

    _initDefineProp(_this, 'allGroups', _descriptor, _this);

    _initDefineProp(_this, 'filteredGroups', _descriptor2, _this);

    _initDefineProp(_this, 'groups', _descriptor3, _this);

    _initDefineProp(_this, 'uniqueMemberIds', _descriptor4, _this);

    _initDefineProp(_this, 'groupMemberIds', _descriptor5, _this);

    _initDefineProp(_this, 'currentGroup', _descriptor6, _this);

    _initDefineProp(_this, 'currentGroupPosts', _descriptor7, _this);

    _initDefineProp(_this, 'groupsWithUnread', _descriptor8, _this);

    _initDefineProp(_this, 'unreadCounts', _descriptor9, _this);

    _this._auth = _ensureExist2.default.call(_this, auth, 'auth');
    _this._client = _ensureExist2.default.call(_this, client, 'client');
    _this._subscription = _ensureExist2.default.call(_this, subscription, 'subscription');
    _this._rolesAndPermissions = _ensureExist2.default.call(_this, rolesAndPermissions, 'rolesAndPermissions');
    _this._connectivityMonitor = connectivityMonitor;
    _this._glipPersons = glipPersons;
    _this._glipPosts = glipPosts;
    _this._tabManager = tabManager;

    _this._ttl = ttl;
    _this._timeToRetry = timeToRetry;
    _this._polling = polling;
    _this._perPage = perPage;
    _this._recordCountPerReq = recordCountPerReq;
    _this._preloadPosts = preloadPosts;
    _this._preloadedPosts = {};
    _this._preloadPostsDelayTtl = preloadPostsDelayTtl;

    _this._promise = null;
    _this._lastMessage = null;

    _this._subscriptionFilters = [subscriptionFilter];
    if (!disableCache) {
      _this._storage = storage;
    }

    _this._dataStorageKey = 'glipGroupsData';
    _this._timestampStorageKey = 'glipGroupsTimestamp';

    if (_this._storage) {
      _this._reducer = (0, _getReducer2.default)(_this.actionTypes);

      _this._storage.registerReducer({
        key: _this._dataStorageKey,
        reducer: (0, _getReducer.getDataReducer)(_this.actionTypes)
      });
      _this._storage.registerReducer({
        key: _this._timestampStorageKey,
        reducer: (0, _getReducer.getTimestampReducer)(_this.actionTypes)
      });
    } else {
      _this._reducer = (0, _getReducer2.default)(_this.actionTypes, {
        timestamp: (0, _getReducer.getTimestampReducer)(_this.actionTypes),
        data: (0, _getReducer.getDataReducer)(_this.actionTypes)
      });
    }

    if (_this._glipPosts) {
      _this._glipPosts.addNewPostListener(function (post) {
        return _this.onNewPost(post);
      });
    }
    return _this;
  }

  (0, _createClass3.default)(GlipGroups, [{
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
                  _context.next = 6;
                  break;
                }

                this.store.dispatch({
                  type: this.actionTypes.init
                });
                _context.next = 4;
                return this._init();

              case 4:
                _context.next = 28;
                break;

              case 6:
                if (!this._isDataReady()) {
                  _context.next = 11;
                  break;
                }

                this.store.dispatch({
                  type: this.actionTypes.initSuccess
                });
                this._onDataReady();
                _context.next = 28;
                break;

              case 11:
                if (!this._shouldReset()) {
                  _context.next = 17;
                  break;
                }

                this._clearTimeout();
                this._promise = null;
                this.store.dispatch({
                  type: this.actionTypes.resetSuccess
                });
                _context.next = 28;
                break;

              case 17:
                if (!this._shouldSubscribe()) {
                  _context.next = 21;
                  break;
                }

                this._processSubscription();
                _context.next = 28;
                break;

              case 21:
                if (!(this.ready && this._connectivityMonitor && this._connectivityMonitor.ready && this._connectivity !== this._connectivityMonitor.connectivity)) {
                  _context.next = 28;
                  break;
                }

                this._connectivity = this._connectivityMonitor.connectivity;

                if (this._connectivity) {
                  _context.next = 25;
                  break;
                }

                return _context.abrupt('return');

              case 25:
                _context.next = 27;
                return this.fetchData();

              case 27:
                if (this._preloadPosts) {
                  this._preloadedPosts = {};
                  this._preloadGroupPosts(true);
                }

              case 28:
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
      return !!(this._auth.loggedIn && this._rolesAndPermissions.ready && (!this._connectivityMonitor || this._connectivityMonitor.ready) && (!this._storage || this._storage.ready) && (!this._readyCheckFn || this._readyCheckFn()) && (!this._subscription || this._subscription.ready) && (!this._glipPosts || this._glipPosts.ready) && (!this._glipPersons || this._glipPersons.ready) && (!this._tabManager || this._tabManager.ready) && this.pending);
    }
  }, {
    key: '_shouldReset',
    value: function _shouldReset() {
      return !!((!this._auth.loggedIn || !this._rolesAndPermissions.ready || this._storage && !this._storage.ready || this._readyCheckFn && !this._readyCheckFn() || this._subscription && !this._subscription.ready || this._glipPosts && !this._glipPosts.ready || this._glipPersons && !this._glipPersons.ready || this._connectivityMonitor && !this._connectivityMonitor.ready || this._tabManager && !this._tabManager.ready) && this.ready);
    }
  }, {
    key: '_shouldSubscribe',
    value: function _shouldSubscribe() {
      return !!(this.ready && this._subscription && this._subscription.ready && this._subscription.message && this._subscription.message !== this._lastMessage);
    }
  }, {
    key: '_onDataReady',
    value: function _onDataReady() {
      if (this._glipPersons) {
        this._glipPersons.loadPersons(this.groupMemberIds);
      }
      if (this._preloadPosts) {
        this._preloadedPosts = {};
        this._preloadGroupPosts();
      }
    }
  }, {
    key: '_subscriptionHandleFn',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(message) {
        var _message$body, eventType, group;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(message && glipGroupRegExp.test(message.event) && message.body)) {
                  _context2.next = 8;
                  break;
                }

                _message$body = message.body, eventType = _message$body.eventType, group = (0, _objectWithoutProperties3.default)(_message$body, ['eventType']);

                if (!(eventType === 'GroupLeft')) {
                  _context2.next = 5;
                  break;
                }

                this.store.dispatch({
                  type: this.actionTypes.removeGroup,
                  group: group
                });
                return _context2.abrupt('return');

              case 5:
                this.store.dispatch({
                  type: this.actionTypes.updateGroup,
                  group: group
                });
                if (this._glipPersons) {
                  this._glipPersons.loadPersons(group.members);
                }
                this._glipPosts.loadPosts(group.id);

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _subscriptionHandleFn(_x2) {
        return _ref3.apply(this, arguments);
      }

      return _subscriptionHandleFn;
    }()
  }, {
    key: '_shouldFetch',
    value: function _shouldFetch() {
      return !this._tabManager || this._tabManager.active;
    }
  }, {
    key: '_isDataReady',
    value: function _isDataReady() {
      return this.status === _moduleStatuses2.default.initializing && this.timestamp !== null;
    }
  }, {
    key: '_init',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this._hasPermission) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt('return');

              case 2:
                if (!this._shouldFetch()) {
                  _context3.next = 14;
                  break;
                }

                _context3.prev = 3;
                _context3.next = 6;
                return this.fetchData();

              case 6:
                _context3.next = 12;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3['catch'](3);

                console.error('fetchData error:', _context3.t0);
                this._retry();

              case 12:
                _context3.next = 15;
                break;

              case 14:
                if (this._polling) {
                  this._startPolling();
                } else {
                  this._retry();
                }

              case 15:
                if (this._subscription && this._subscriptionFilters) {
                  this._subscription.subscribe(this._subscriptionFilters);
                }
                if (this._connectivityMonitor) {
                  this._connectivity = this._connectivityMonitor.connectivity;
                }

              case 17:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[3, 8]]);
      }));

      function _init() {
        return _ref4.apply(this, arguments);
      }

      return _init;
    }()
  }, {
    key: '_processSubscription',
    value: function _processSubscription() {
      this._lastMessage = this._subscription.message;
      this._subscriptionHandleFn(this._lastMessage);
    }
  }, {
    key: '_preloadGroupPosts',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(force) {
        var groups, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, group;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                groups = this.groups.slice(0, 20);
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                _context4.prev = 4;
                _iterator2 = (0, _getIterator3.default)(groups);

              case 6:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                  _context4.next = 23;
                  break;
                }

                group = _step2.value;

                if (this._glipPosts) {
                  _context4.next = 10;
                  break;
                }

                return _context4.abrupt('break', 23);

              case 10:
                if (!this._preloadedPosts[group.id]) {
                  _context4.next = 12;
                  break;
                }

                return _context4.abrupt('continue', 20);

              case 12:
                this._preloadedPosts[group.id] = true;

                if (!(!this._glipPosts.postsMap[group.id] || force)) {
                  _context4.next = 19;
                  break;
                }

                _context4.next = 16;
                return (0, _sleep2.default)(this._preloadPostsDelayTtl);

              case 16:
                if (!(!this._glipPosts.postsMap[group.id] || force)) {
                  _context4.next = 19;
                  break;
                }

                _context4.next = 19;
                return this._glipPosts.fetchPosts(group.id);

              case 19:
                if (!this._glipPosts.readTimeMap[group.id]) {
                  this._glipPosts.updateReadTime(group.id, Date.now() - 1000 * 3600 * 2);
                }

              case 20:
                _iteratorNormalCompletion2 = true;
                _context4.next = 6;
                break;

              case 23:
                _context4.next = 29;
                break;

              case 25:
                _context4.prev = 25;
                _context4.t0 = _context4['catch'](4);
                _didIteratorError2 = true;
                _iteratorError2 = _context4.t0;

              case 29:
                _context4.prev = 29;
                _context4.prev = 30;

                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }

              case 32:
                _context4.prev = 32;

                if (!_didIteratorError2) {
                  _context4.next = 35;
                  break;
                }

                throw _iteratorError2;

              case 35:
                return _context4.finish(32);

              case 36:
                return _context4.finish(29);

              case 37:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this, [[4, 25, 29, 37], [30,, 32, 36]]);
      }));

      function _preloadGroupPosts(_x3) {
        return _ref5.apply(this, arguments);
      }

      return _preloadGroupPosts;
    }()
  }, {
    key: 'updateFilter',
    value: function updateFilter(_ref6) {
      var searchFilter = _ref6.searchFilter,
          pageNumber = _ref6.pageNumber;

      this.store.dispatch({
        type: this.actionTypes.updateFilter,
        searchFilter: searchFilter,
        pageNumber: pageNumber
      });
      if (this._preloadPosts && this.groups.length <= this._perPage * 2) {
        this._preloadGroupPosts();
      }
    }
  }, {
    key: 'updateCurrentGroupId',
    value: function updateCurrentGroupId(groupId) {
      if (!groupId) {
        return;
      }
      var lastGroupId = this.currentGroupId;
      var lastGroupPosts = this.currentGroupPosts;
      this.store.dispatch({
        type: this.actionTypes.updateCurrentGroupId,
        groupId: groupId
      });
      if (this._glipPersons) {
        this._glipPersons.loadPersons(this.currentGroup && this.currentGroup.members);
      }
      if (!this._glipPosts) {
        return;
      }
      if (lastGroupPosts.length > 20) {
        this._glipPosts.fetchPosts(lastGroupId);
      }
      this._glipPosts.loadPosts(groupId);
      this._glipPosts.updateReadTime(groupId);
    }
  }, {
    key: '_fetchFunction',
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
        var result;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._client.glip().groups().list({
                  recordCount: this._recordCountPerReq
                });

              case 2:
                result = _context5.sent;
                return _context5.abrupt('return', result);

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _fetchFunction() {
        return _ref7.apply(this, arguments);
      }

      return _fetchFunction;
    }()
  }, {
    key: '_fetchData',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
        var ownerId, data;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.store.dispatch({
                  type: this.actionTypes.fetch
                });
                ownerId = this._auth.ownerId;
                _context6.prev = 2;
                _context6.next = 5;
                return this._fetchFunction();

              case 5:
                data = _context6.sent;

                if (this._auth.ownerId === ownerId) {
                  this.store.dispatch({
                    type: this.actionTypes.fetchSuccess,
                    data: data,
                    timestamp: Date.now()
                  });
                  if (this._polling) {
                    this._startPolling();
                  }
                  this._promise = null;
                }
                _context6.next = 16;
                break;

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6['catch'](2);

                if (!(this._auth.ownerId === ownerId)) {
                  _context6.next = 16;
                  break;
                }

                this._promise = null;
                this.store.dispatch({
                  type: this.actionTypes.fetchError,
                  error: _context6.t0
                });
                if (this._polling) {
                  this._startPolling(this.timeToRetry);
                } else {
                  this._retry();
                }
                throw _context6.t0;

              case 16:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this, [[2, 9]]);
      }));

      function _fetchData() {
        return _ref8.apply(this, arguments);
      }

      return _fetchData;
    }()
  }, {
    key: 'fetchData',
    value: function () {
      var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!this._promise) {
                  this._promise = this._fetchData();
                }
                return _context7.abrupt('return', this._promise);

              case 2:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function fetchData() {
        return _ref9.apply(this, arguments);
      }

      return fetchData;
    }()
  }, {
    key: 'startChat',
    value: function () {
      var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(personId) {
        var group;
        return _regenerator2.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return this._client.glip().groups().post({
                  type: 'PrivateChat',
                  members: [this._auth.ownerId, personId]
                });

              case 3:
                group = _context8.sent;

                group.lastModifiedTime = Date.now();
                this.store.dispatch({
                  type: this.actionTypes.updateGroup,
                  group: group
                });
                this.store.dispatch({
                  type: this.actionTypes.updateCurrentGroupId,
                  groupId: group.id
                });
                return _context8.abrupt('return', group);

              case 10:
                _context8.prev = 10;
                _context8.t0 = _context8['catch'](0);

                console.error(_context8.t0);

              case 13:
                return _context8.abrupt('return', null);

              case 14:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 10]]);
      }));

      function startChat(_x4) {
        return _ref10.apply(this, arguments);
      }

      return startChat;
    }()
  }, {
    key: 'onNewPost',
    value: function onNewPost(post) {
      if (post.groupId === this.currentGroupId && this._glipPosts) {
        this._glipPosts.updateReadTime(post.groupId);
      }
    }
  }, {
    key: 'createTeam',
    value: function () {
      var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(name, members) {
        var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Team';
        var group;
        return _regenerator2.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this._client.glip().groups().post({
                  type: type,
                  name: name,
                  members: members,
                  isPublic: true,
                  description: ''
                });

              case 2:
                group = _context9.sent;
                return _context9.abrupt('return', group.id);

              case 4:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function createTeam(_x6, _x7) {
        return _ref11.apply(this, arguments);
      }

      return createTeam;
    }()
  }, {
    key: 'searchFilter',
    get: function get() {
      return this.state.searchFilter;
    }
  }, {
    key: 'data',
    get: function get() {
      return this._storage ? this._storage.getItem(this._dataStorageKey) : this.state.data;
    }
  }, {
    key: 'timestamp',
    get: function get() {
      return this._storage ? this._storage.getItem(this._timestampStorageKey) : this.state.timestamp;
    }
  }, {
    key: 'currentGroupId',
    get: function get() {
      return this.state.currentGroupId;
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
    key: 'ttl',
    get: function get() {
      return this._ttl;
    }
  }, {
    key: 'timeToRetry',
    get: function get() {
      return this._timeToRetry;
    }
  }, {
    key: '_hasPermission',
    get: function get() {
      return !!this._rolesAndPermissions.hasGlipPermission;
    }
  }]);
  return GlipGroups;
}(_Pollable3.default), (_applyDecoratedDescriptor(_class2.prototype, 'updateFilter', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'updateFilter'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'updateCurrentGroupId', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'updateCurrentGroupId'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'fetchData', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'fetchData'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'startChat', [_proxify2.default], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'startChat'), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, 'allGroups', [_getter2.default], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return (0, _reselect.createSelector)(function () {
      return _this3.data;
    }, function () {
      return _this3._glipPersons && _this3._glipPersons.personsMap;
    }, function () {
      return _this3._glipPosts && _this3._glipPosts.postsMap;
    }, function () {
      return _this3._auth.ownerId;
    }, function (data) {
      var personsMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var postsMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var ownerId = arguments[3];
      return (data || []).map(function (group) {
        return formatGroup(group, personsMap, postsMap, ownerId);
      });
    });
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'filteredGroups', [_getter2.default], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return (0, _reselect.createSelector)(function () {
      return _this4.allGroups;
    }, function () {
      return _this4.searchFilter;
    }, function () {
      return _this4._glipPosts && _this4._glipPosts.postsMap;
    }, function (allGroups, searchFilter) {
      var postsMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if ((0, _isBlank2.default)(searchFilter)) {
        return allGroups;
      }
      var filterString = searchFilter.toLowerCase();
      return allGroups.filter(function (group) {
        var name = group.name && group.name.toLowerCase();
        if (name && name.indexOf(filterString) > -1) {
          return true;
        }
        if (!name) {
          var groupUsernames = group.detailMembers.map(function (m) {
            return m.firstName + ' ' + m.lastName;
          }).join(' ').toLowerCase();
          if (groupUsernames && groupUsernames.indexOf(filterString) > -1) {
            return true;
          }
        }
        var result = searchPosts(filterString, postsMap[group.id] || []);
        return result;
      });
    });
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'groups', [_getter2.default], {
  enumerable: true,
  initializer: function initializer() {
    var _this5 = this;

    return (0, _reselect.createSelector)(function () {
      return _this5.filteredGroups;
    }, function (filteredGroups) {
      var sortedGroups = filteredGroups.sort(function (a, b) {
        if (a.updatedTime === b.updatedTime) return 0;
        return a.updatedTime > b.updatedTime ? -1 : 1;
      });
      return sortedGroups;
    });
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'uniqueMemberIds', [_getter2.default], {
  enumerable: true,
  initializer: function initializer() {
    var _this6 = this;

    return (0, _reselect.createSelector)(function () {
      return _this6.allGroups;
    }, getUniqueMemberIds);
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'groupMemberIds', [_getter2.default], {
  enumerable: true,
  initializer: function initializer() {
    var _this7 = this;

    return (0, _reselect.createSelector)(function () {
      return _this7.allGroups;
    }, function (groups) {
      var noTeamGroups = groups.filter(function (g) {
        return g.type !== 'Team';
      });
      return getUniqueMemberIds(noTeamGroups);
    });
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'currentGroup', [_getter2.default], {
  enumerable: true,
  initializer: function initializer() {
    var _this8 = this;

    return (0, _reselect.createSelector)(function () {
      return _this8.allGroups;
    }, function () {
      return _this8.currentGroupId;
    }, function () {
      return _this8._glipPersons && _this8._glipPersons.personsMap || {};
    }, function (allGroups, currentGroupId, personsMap) {
      var group = allGroups.find(function (g) {
        return g.id === currentGroupId;
      }) || {};
      return formatGroup(group, personsMap, undefined, _this8._auth.ownerId);
    });
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'currentGroupPosts', [_getter2.default], {
  enumerable: true,
  initializer: function initializer() {
    var _this9 = this;

    return (0, _reselect.createSelector)(function () {
      var postsMap = _this9._glipPosts && _this9._glipPosts.postsMap || {};
      return postsMap[_this9.currentGroupId];
    }, function () {
      return _this9._glipPersons && _this9._glipPersons.personsMap || {};
    }, function (posts, personsMap) {
      // const posts = postsMap[currentGroupId] || [];
      var reversePosts = (posts || []).slice(0).reverse();
      return reversePosts.map(function (post) {
        var creator = personsMap[post.creatorId];
        return (0, _extends3.default)({}, post, {
          sentByMe: post.creatorId === _this9._auth.ownerId,
          creator: creator
        });
      });
    });
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'groupsWithUnread', [_getter2.default], {
  enumerable: true,
  initializer: function initializer() {
    var _this10 = this;

    return (0, _reselect.createSelector)(function () {
      return _this10.groups;
    }, function () {
      return _this10._glipPosts && _this10._glipPosts.postsMap || {};
    }, function () {
      return _this10._glipPosts && _this10._glipPosts.readTimeMap || {};
    }, function (groups, postsMap, readTimeMap) {
      return groups.map(function (group) {
        var posts = postsMap[group.id] || [];
        var readTime = readTimeMap[group.id] || Date.now();
        return (0, _extends3.default)({}, group, {
          unread: posts.filter(function (post) {
            return new Date(post.creationTime).getTime() > readTime && post.creatorId !== _this10._auth.ownerId;
          }).length
        });
      });
    });
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'unreadCounts', [_getter2.default], {
  enumerable: true,
  initializer: function initializer() {
    var _this11 = this;

    return (0, _reselect.createSelector)(function () {
      return _this11.groupsWithUnread;
    }, function (groups) {
      return groups.reduce(function (a, b) {
        return a + b.unread;
      }, 0);
    });
  }
})), _class2)) || _class);
exports.default = GlipGroups;
//# sourceMappingURL=index.js.map

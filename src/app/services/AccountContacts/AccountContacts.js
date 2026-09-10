"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.array.reverse.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PRESENCE_ENQUEUE_DELAY = exports.AccountContactsSourceName = exports.AccountContacts = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.find.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.date.now.js");
require("core-js/modules/es.map.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.string.link.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/web.timers.js");
require("core-js/modules/web.url.js");
require("core-js/modules/web.url.to-json.js");
require("core-js/modules/web.url-search-params.js");
var _phoneSources = require("@ringcentral-integration/commons/enums/phoneSources");
var _batchApiHelper = require("@ringcentral-integration/commons/lib/batchApiHelper");
var _contactHelper = require("@ringcentral-integration/commons/lib/contactHelper");
var _isBlank = require("@ringcentral-integration/commons/lib/isBlank");
var _services = require("@ringcentral-integration/micro-auth/src/app/services");
var _nextCore = require("@ringcentral-integration/next-core");
var _ramda = require("ramda");
var _CompanyContacts = require("../CompanyContacts");
var _AccountContactsViewableManager = require("./AccountContactsViewableManager");
var _helper = require("./helper");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec0, _dec1, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _class2, _descriptor;
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
// one second to ensure after ttl the presence can become expired
var PRESENCE_ENQUEUE_DELAY = exports.PRESENCE_ENQUEUE_DELAY = 1 * 1000; // 1 second
var MAXIMUM_BATCH_GET_PRESENCE = 30;
var AccountContactsSourceName = exports.AccountContactsSourceName = 'company';
var AccountContacts = exports.AccountContacts = (_dec = (0, _nextCore.injectable)({
  name: 'AccountContacts'
}), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", [typeof _services.Auth === "undefined" ? Object : _services.Auth, typeof _services.Client === "undefined" ? Object : _services.Client, typeof _AccountContactsViewableManager.AccountContactsViewableManager === "undefined" ? Object : _AccountContactsViewableManager.AccountContactsViewableManager, typeof _services.ExtensionInfo === "undefined" ? Object : _services.ExtensionInfo, typeof _services.AppFeatures === "undefined" ? Object : _services.AppFeatures, typeof _services.AccountInfo === "undefined" ? Object : _services.AccountInfo, typeof _CompanyContacts.CompanyContacts === "undefined" ? Object : _CompanyContacts.CompanyContacts]), _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", []), _dec6 = Reflect.metadata("design:type", Function), _dec7 = Reflect.metadata("design:paramtypes", []), _dec8 = (0, _nextCore.computed)(function (that) {
  return [that._companyContacts.filteredContacts];
}), _dec9 = Reflect.metadata("design:type", Function), _dec0 = Reflect.metadata("design:paramtypes", []), _dec1 = (0, _nextCore.computed)(function (that) {
  return [that.contacts];
}), _dec10 = Reflect.metadata("design:type", Function), _dec11 = Reflect.metadata("design:paramtypes", []), _dec12 = Reflect.metadata("design:type", typeof ProfileImages === "undefined" ? Object : ProfileImages), _dec13 = Reflect.metadata("design:type", Function), _dec14 = Reflect.metadata("design:paramtypes", [String, String]), _dec15 = (0, _nextCore.delegate)('server'), _dec16 = Reflect.metadata("design:type", Function), _dec17 = Reflect.metadata("design:paramtypes", [typeof IContact === "undefined" ? Object : IContact]), _dec18 = (0, _nextCore.delegate)('server'), _dec19 = Reflect.metadata("design:type", Function), _dec20 = Reflect.metadata("design:paramtypes", [typeof IContact === "undefined" ? Object : IContact, void 0]), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_RcModule) {
  function AccountContacts(_auth, _client, _accountContactsViewableManager, _extensionInfo, _appFeatures, _accountInfo, _companyContacts) {
    var _this;
    _classCallCheck(this, AccountContacts);
    _this = _callSuper(this, AccountContacts);
    _this._auth = _auth;
    _this._client = _client;
    _this._accountContactsViewableManager = _accountContactsViewableManager;
    _this._extensionInfo = _extensionInfo;
    _this._appFeatures = _appFeatures;
    _this._accountInfo = _accountInfo;
    _this._companyContacts = _companyContacts;
    /**
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     * # All Code Below is Deprecated
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     */
    /**
     * @deprecated
     */
    _this._getPresenceContexts = new Map();
    /**
     * @deprecated
     */
    _this._enqueueTimeoutId = void 0;
    /**
     * @deprecated
     *
     * TODO: spring-ui will be removed after all projects switch to spring-ui, should use presenceMap redux state instead
     */
    _this.presences = {};
    /**
     * @deprecated
     */
    _initializerDefineProperty(_this, "profileImages", _descriptor, _this);
    return _this;
  }
  _inherits(AccountContacts, _RcModule);
  return _createClass(AccountContacts, [{
    key: "getProfileImageSync",
    value: function getProfileImageSync(contact, size) {
      if (!contact.profileImage) return undefined;
      return this._auth.getProfileImageSync(contact.profileImage, size);
    }
  }, {
    key: "getPresenceSync",
    value: function getPresenceSync(contact) {
      var _contact$account, _this$_accountContact;
      if (!contact || !contact.id || contact.type !== 'company') {
        return null;
      }
      var extensionId = contact.id;
      var accountId = (_contact$account = contact.account) === null || _contact$account === void 0 ? void 0 : _contact$account.id;
      if (!accountId || !extensionId) return null;
      this._accountContactsViewableManager.link({
        accountId: accountId,
        extensionId: extensionId
      });
      return (_this$_accountContact = this._accountContactsViewableManager.presenceMap[extensionId]) !== null && _this$_accountContact !== void 0 ? _this$_accountContact : null;
    }
  }, {
    key: "unlinkPresence",
    value: function unlinkPresence(contact) {
      var _contact$account2;
      if (!contact || !contact.id || contact.type !== 'company') {
        return null;
      }
      var extensionId = contact.id;
      var accountId = (_contact$account2 = contact.account) === null || _contact$account2 === void 0 ? void 0 : _contact$account2.id;
      if (!accountId || !extensionId) return null;
      this._accountContactsViewableManager.unlink({
        accountId: accountId,
        extensionId: extensionId
      });
    }

    // URL.revokeObjectURL
  }, {
    key: "onReset",
    value: function onReset() {
      this.presences = {};
      clearTimeout(this._enqueueTimeoutId);
      this._getPresenceContexts.clear();
    }
  }, {
    key: "isCDCEnabled",
    get: function get() {
      var _this$_appFeatures;
      // TODO: default to true when cdc feature is ready for production.
      return (_this$_appFeatures = this._appFeatures) === null || _this$_appFeatures === void 0 ? void 0 : _this$_appFeatures.isCDCEnabled;
    }
  }, {
    key: "_shouldInit",
    value: function _shouldInit() {
      return this._companyContacts.ready && this.pending;
    }
  }, {
    key: "_shouldReset",
    value: function _shouldReset() {
      return !this._companyContacts.ready && this.ready;
    }

    // interface of ContactSource
  }, {
    key: "findContact",
    value: function findContact(contactId) {
      return this.contacts.find(function (x) {
        return x.id === contactId;
      });
    }

    // interface of ContactSource
  }, {
    key: "filterContacts",
    value: function filterContacts(searchFilter) {
      return (0, _contactHelper.getFilterContacts)(this.contacts, searchFilter);
    }

    // interface of ContactSource
  }, {
    key: "searchForPhoneNumbers",
    value: function searchForPhoneNumbers(searchString) {
      var _this$_extensionInfo = this._extensionInfo,
        isMultipleSiteEnabled = _this$_extensionInfo.isMultipleSiteEnabled,
        site = _this$_extensionInfo.site;
      return (0, _contactHelper.getSearchForPhoneNumbers)({
        contacts: this.contacts,
        searchString: searchString,
        entityType: _phoneSources.phoneSources.rcContact,
        options: {
          isMultipleSiteEnabled: isMultipleSiteEnabled,
          siteCode: site === null || site === void 0 ? void 0 : site.code
        }
      });
    }

    // interface of ContactSource
  }, {
    key: "matchContactsByPhoneNumber",
    value: function matchContactsByPhoneNumber(phoneNumber) {
      var _this$_extensionInfo2 = this._extensionInfo,
        isMultipleSiteEnabled = _this$_extensionInfo2.isMultipleSiteEnabled,
        site = _this$_extensionInfo2.site;
      var contacts = [].concat(process.env.THEME_SYSTEM === 'spring-ui' ? this.contacts :
      // TODO: this is old logic(wrong), should be removed after we full migrate to spring-ui in all projects
      this.directoryContacts.all, this._companyContacts.ivrContacts);
      var shouldMatchExtension = (0, _contactHelper.isAnExtension)(phoneNumber, this._accountInfo.maxExtensionNumberLength);
      return (0, _contactHelper.getMatchContactsByPhoneNumber)({
        contacts: contacts,
        phoneNumber: phoneNumber,
        entityType: _phoneSources.phoneSources.rcContact,
        findPhoneNumber: (0, _contactHelper.getFindPhoneNumber)({
          phoneNumber: phoneNumber,
          shouldMatchExtension: shouldMatchExtension,
          options: {
            isMultipleSiteEnabled: isMultipleSiteEnabled,
            siteCode: site === null || site === void 0 ? void 0 : site.code,
            maxExtensionLength: this._accountInfo.maxExtensionNumberLength
          }
        })
      });
    }

    // interface of ContactSource
  }, {
    key: "sourceName",
    get: function get() {
      return AccountContactsSourceName;
    }

    // interface of ContactSource
  }, {
    key: "directoryContacts",
    get: function get() {
      var _this2 = this;
      return (0, _ramda.reduce)(function (result, item) {
        if (!(0, _isBlank.isBlank)(item.extensionNumber)) {
          var contact = (0, _helper.produceContact)({
            item: item,
            profileImages: _this2.profileImages,
            presences: _this2.presences,
            sourceName: _this2.sourceName
          });
          // TODO: fix type in DirectoryContacts
          result.all.push(contact);
          if (!contact.hidden) {
            var _contact$phoneNumbers;
            var cdcContact = _objectSpread(_objectSpread({}, contact), {}, {
              phoneNumbers: ((_contact$phoneNumbers = contact.phoneNumbers) !== null && _contact$phoneNumbers !== void 0 ? _contact$phoneNumbers : []).filter(function (number) {
                return !number.hidden;
              })
            });
            // TODO: fix type in DirectoryContacts
            result.cdc.push(cdcContact);
          }
        }
        return result;
      }, {
        all: [],
        cdc: []
      }, this._companyContacts.filteredContacts);
    }

    // interface of ContactSource
  }, {
    key: "contacts",
    get: function get() {
      return this.isCDCEnabled ? this.directoryContacts.cdc : this.directoryContacts.all;
    }

    // interface of ContactSource
  }, {
    key: "rawContacts",
    get: function get() {
      return this._companyContacts.filteredContacts;
    }
  }, {
    key: "rcCompanyMapping",
    get: function get() {
      var rcCompanyMapping = {};
      this.contacts.forEach(function (item) {
        rcCompanyMapping[item.id] = item;
      });
      return rcCompanyMapping;
    }

    // interface of ContactSource
  }, {
    key: "sourceReady",
    get: function get() {
      return this.ready;
    }
  }, {
    key: "setProfileImages",
    value:
    /**
     * @deprecated
     */
    function setProfileImages(id, url) {
      this.profileImages[id] = {
        url: url
      };
    }
    /**
     * @deprecated
     *
     * 1. presence should not store in redux, which will make the CTI rerender once it has some changes and dispatch some action
     * 2. make sure this.presences's changes is immutable
     * 3. If the Record feature is stable, then we should use the below implementation to make sure change is immutable
     * ```
     *  data = {
     *      ...data,
     *      [key]: this.presences[key]
     *  }
     * ```
     */
  }, {
    key: "batchFetchPresenceSuccess",
    value: function batchFetchPresenceSuccess(_ref) {
      var _this3 = this;
      var _ref$presenceMap = _ref.presenceMap,
        presenceMap = _ref$presenceMap === void 0 ? {} : _ref$presenceMap,
        ttl = _ref.ttl;
      var data = {};
      var isUpdated = false;
      // TODO: refactor without side effect.
      Object.keys(this.presences).forEach(function (key) {
        var isExpired = Date.now() - _this3.presences[key].timestamp >= ttl;
        if (!isExpired) {
          // new key: use new reference: immutable
          data[key] = _this3.presences[key];
        } else {
          isUpdated = true;
        }
      });
      Object.keys(presenceMap).forEach(function (key) {
        isUpdated = true;
        data[key] = {
          presence: presenceMap[key],
          timestamp: Date.now()
        };
      });
      // need to make sure this.presences is immutable
      this.presences = isUpdated ? data : this.presences;
      // Sync _presenceMap so getPresenceSync (and UI) see presence when async getPresence completes
      // @deprecated method, so just use private way to use the method
      this._accountContactsViewableManager['_updatePresenceMap'](presenceMap);
    }

    /**
     * @deprecated should use sync way `getProfileImageSync` instead, always get url in sync way to avoid the blank image a moment
     *
     * TODO: spring-ui will be removed after all projects switch to spring-ui
     */
  }, {
    key: "getProfileImage",
    value: (function () {
      var _getProfileImage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(contact) {
        var response, value, _t, _t2;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (!(!contact || !contact.id || contact.type !== 'company' || !contact.hasProfileImage)) {
                _context.n = 1;
                break;
              }
              return _context.a(2, null);
            case 1:
              _context.p = 1;
              _context.n = 2;
              return this._client.account(contact.account.id).extension(contact.id).profileImage('195x195').get();
            case 2:
              response = _context.v;
              _t = URL;
              _context.n = 3;
              return response.blob();
            case 3:
              value = _t.createObjectURL.call(_t, _context.v);
              /**
               * due to we get the profile image with cache at top Contact service, we can set the profile image directly
               */
              this.setProfileImages(contact.id, value);
              return _context.a(2, value);
            case 4:
              _context.p = 4;
              _t2 = _context.v;
              _nextCore.logger.error("[".concat(this.identifier, "] getProfileImage fail"), _t2, contact);
              return _context.a(2, null);
          }
        }, _callee, this, [[1, 4]]);
      }));
      function getProfileImage(_x) {
        return _getProfileImage.apply(this, arguments);
      }
      return getProfileImage;
    }()
    /**
     * @deprecated
     */
    // interface of ContactSource
    )
  }, {
    key: "getPresence",
    value: function getPresence(contact) {
      var _this4 = this;
      var useCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      return new Promise(function (resolve) {
        var _contact$account3;
        if (!contact || !contact.id || contact.type !== 'company') {
          resolve(null);
          return;
        }
        var extensionId = contact.id;
        if (useCache && _this4.presences[extensionId] && Date.now() - _this4.presences[extensionId].timestamp < _this4._accountContactsViewableManager.presenceTtl) {
          var presence = _this4.presences[extensionId].presence;
          resolve(presence);
          return;
        }
        var accountId = (_contact$account3 = contact.account) === null || _contact$account3 === void 0 ? void 0 : _contact$account3.id;
        if (!accountId) {
          resolve(null);
          return;
        }
        var contextKey = "".concat(accountId, "-").concat(extensionId);
        var context = _this4._getPresenceContexts.get(contextKey);
        if (context) {
          context.callbacks.push(resolve);
        } else {
          _this4._getPresenceContexts.set(contextKey, {
            accountId: accountId,
            extensionId: extensionId,
            callbacks: [resolve]
          });
        }
        var startProcessing = function startProcessing() {
          var contexts = Array.from(_this4._getPresenceContexts.values());
          _this4._getPresenceContexts.clear();
          _this4._fetchPresences(contexts);
        };
        clearTimeout(_this4._enqueueTimeoutId);
        if (_this4._getPresenceContexts.size === MAXIMUM_BATCH_GET_PRESENCE) {
          startProcessing();
        } else {
          _this4._enqueueTimeoutId = setTimeout(startProcessing, PRESENCE_ENQUEUE_DELAY);
        }
      });
    }

    /**
     * @deprecated
     */
  }, {
    key: "_fetchPresences",
    value: (function () {
      var _fetchPresences2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(contexts) {
        var _this5 = this;
        var responses, presenceMap;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return this._batchFetchPresences(contexts);
            case 1:
              responses = _context2.v;
              // response
              presenceMap = (0, _ramda.reduce)(function (acc, _ref2) {
                var extensionId = _ref2.extensionId;
                var response = responses[extensionId];
                if (response) {
                  var dndStatus = response.dndStatus,
                    presenceStatus = response.presenceStatus,
                    telephonyStatus = response.telephonyStatus,
                    userStatus = response.userStatus,
                    meetingStatus = response.meetingStatus;
                  acc[extensionId] = {
                    dndStatus: dndStatus,
                    presenceStatus: presenceStatus,
                    telephonyStatus: telephonyStatus,
                    userStatus: userStatus,
                    meetingStatus: meetingStatus
                  };
                } else if (_this5.presences[extensionId]) {
                  // Should keep the previous state when fail to fetch
                  acc[extensionId] = _this5.presences[extensionId].presence;
                }
                return acc;
              }, {}, contexts); // update state
              this.batchFetchPresenceSuccess({
                presenceMap: presenceMap,
                ttl: this._accountContactsViewableManager.presenceTtl
              });
              // callback
              contexts.forEach(function (_ref3) {
                var extensionId = _ref3.extensionId,
                  callbacks = _ref3.callbacks;
                var presence = presenceMap[extensionId];
                var _iterator = _createForOfIteratorHelper(callbacks),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var resolve = _step.value;
                    try {
                      resolve(presence);
                    } catch (ex) {
                      console.error(ex);
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              });
            case 2:
              return _context2.a(2);
          }
        }, _callee2, this);
      }));
      function _fetchPresences(_x2) {
        return _fetchPresences2.apply(this, arguments);
      }
      return _fetchPresences;
    }()
    /**
     * @deprecated
     */
    )
  }, {
    key: "_batchFetchPresences",
    value: (function () {
      var _batchFetchPresences2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(contexts) {
        var _this6 = this;
        var presenceSet, accountExtensionMap, batchResponses, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              presenceSet = {};
              _context5.p = 1;
              accountExtensionMap = (0, _ramda.reduce)(function (acc, _ref4) {
                var _acc$accountId;
                var accountId = _ref4.accountId,
                  extensionId = _ref4.extensionId;
                var extensionIds = (_acc$accountId = acc[accountId]) !== null && _acc$accountId !== void 0 ? _acc$accountId : [];
                if (!extensionIds.includes(extensionId)) {
                  extensionIds.push(extensionId);
                }
                acc[accountId] = extensionIds;
                return acc;
              }, {}, contexts);
              _context5.n = 2;
              return Promise.all((0, _ramda.keys)(accountExtensionMap).map(/*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(accountId) {
                  var extensionIds, extensionId, _t3, _t4;
                  return _regenerator().w(function (_context4) {
                    while (1) switch (_context4.n) {
                      case 0:
                        if (!(accountExtensionMap[accountId].length > 1)) {
                          _context4.n = 2;
                          break;
                        }
                        extensionIds = (0, _ramda.join)(',', accountExtensionMap[accountId]); // extract json data now so the data appears in the same format
                        // as single requests
                        _t3 = Promise;
                        _context4.n = 1;
                        return (0, _batchApiHelper.batchGetApi)({
                          platform: _this6._client.service.platform(),
                          url: "/restapi/v1.0/account/".concat(accountId, "/extension/").concat(extensionIds, "/presence")
                        });
                      case 1:
                        return _context4.a(2, _t3.all.call(_t3, _context4.v.map(/*#__PURE__*/function () {
                          var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(resp) {
                            return _regenerator().w(function (_context3) {
                              while (1) switch (_context3.n) {
                                case 0:
                                  return _context3.a(2, resp.json());
                              }
                            }, _callee3);
                          }));
                          return function (_x5) {
                            return _ref6.apply(this, arguments);
                          };
                        }())));
                      case 2:
                        // wrap single request response data in array to keep the same
                        // format as batch requests
                        extensionId = accountExtensionMap[accountId][0];
                        _context4.n = 3;
                        return _this6._client.account(accountId).extension(extensionId).presence().get();
                      case 3:
                        _t4 = _context4.v;
                        return _context4.a(2, [_t4]);
                    }
                  }, _callee4);
                }));
                return function (_x4) {
                  return _ref5.apply(this, arguments);
                };
              }()));
            case 2:
              batchResponses = _context5.v;
              // treat all data as batch since the data is normalized
              batchResponses.forEach(function (batch) {
                return batch.forEach(function (data) {
                  if (data.errorCode) {
                    console.warn(data);
                    return;
                  }
                  var _data = data;
                  var _ref7 = _data.extension,
                    id = _ref7.id;
                  presenceSet[id] = _data;
                });
              });
              _context5.n = 4;
              break;
            case 3:
              _context5.p = 3;
              _t5 = _context5.v;
              console.error(_t5);
            case 4:
              return _context5.a(2, presenceSet);
          }
        }, _callee5, null, [[1, 3]]);
      }));
      function _batchFetchPresences(_x3) {
        return _batchFetchPresences2.apply(this, arguments);
      }
      return _batchFetchPresences;
    }())
  }]);
}(_nextCore.RcModule), _applyDecoratedDescriptor(_class2.prototype, "onReset", [_nextCore.action, _dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "onReset"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "directoryContacts", [_nextCore.computed, _dec6, _dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "directoryContacts"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "rawContacts", [_dec8, _dec9, _dec0], Object.getOwnPropertyDescriptor(_class2.prototype, "rawContacts"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "rcCompanyMapping", [_dec1, _dec10, _dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "rcCompanyMapping"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "profileImages", [_nextCore.state, _dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {};
  }
}), _applyDecoratedDescriptor(_class2.prototype, "setProfileImages", [_nextCore.action, _dec13, _dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "setProfileImages"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getProfileImage", [_dec15, _dec16, _dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "getProfileImage"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "getPresence", [_dec18, _dec19, _dec20], Object.getOwnPropertyDescriptor(_class2.prototype, "getPresence"), _class2.prototype), _class2)) || _class) || _class) || _class);
//# sourceMappingURL=AccountContacts.js.map

"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.function.bind.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.create.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-prototype-of.js");
require("core-js/modules/es.object.set-prototype-of.js");
require("core-js/modules/es.reflect.construct.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StaticTimezoneService = void 0;
require("core-js/modules/es.array.find.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.includes.js");
var _nextCore = require("@ringcentral-integration/next-core");
var _dayjs = _interopRequireDefault(require("dayjs"));
var _timezone = _interopRequireDefault(require("dayjs/plugin/timezone"));
var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));
var _timezones = require("./timezones");
var _dec, _class;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
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
_dayjs["default"].extend(_utc["default"]);
_dayjs["default"].extend(_timezone["default"]);

/**
 * StaticTimezoneService
 *
 * A standalone shared timezone service that uses static timezone data.
 * This service does not depend on Auth module and provides timezone utilities
 * based on the static timezone definitions from timezones.ts
 *
 * All timezone data is statically defined and does not require API calls or authentication.
 */
var StaticTimezoneService = exports.StaticTimezoneService = (_dec = (0, _nextCore.injectable)({
  name: 'StaticTimezoneService'
}), _dec(_class = /*#__PURE__*/function (_RcModule) {
  function StaticTimezoneService() {
    _classCallCheck(this, StaticTimezoneService);
    return _callSuper(this, StaticTimezoneService, arguments);
  }
  _inherits(StaticTimezoneService, _RcModule);
  return _createClass(StaticTimezoneService, [{
    key: "_findTimezoneByNameOrUtc",
    value: function _findTimezoneByNameOrUtc(timezoneName) {
      if (!timezoneName) {
        return undefined;
      }
      return _timezones.STATIC_TIMEZONE_LIST.find(function (tz) {
        return tz.name === timezoneName;
      }) || _timezones.STATIC_TIMEZONE_LIST.find(function (tz) {
        return tz.utc.includes(timezoneName);
      });
    }
  }, {
    key: "timezonesList",
    get: function get() {
      return _timezones.STATIC_TIMEZONE_LIST;
    }
  }, {
    key: "defaultTimezone",
    get: function get() {
      return _timezones.TIMEZONE_UTC;
    }

    /**
     * Find a supported system timezone from browser settings without applying fallback.
     *
     * @returns Matched timezone object or undefined if the browser timezone
     * is unavailable or unsupported by the static timezone list
     */
  }, {
    key: "findSystemTimezone",
    value: function findSystemTimezone() {
      try {
        var systemTimezoneName = _dayjs["default"].tz.guess();
        if (!systemTimezoneName) {
          return undefined;
        }
        return this._findTimezoneByNameOrUtc(systemTimezoneName);
      } catch (error) {
        this.logger.warn('Failed to find system timezone', error);
        return undefined;
      }
    }

    /**
     * Get system timezone from browser settings
     * Matches the system timezone name with the available static timezone list
     *
     * @param timezones - Optional timezone array to search in. Defaults to STATIC_TIMEZONE_LIST
     * @returns Matched timezone object or undefined if not found
     */
  }, {
    key: "getSystemTimezone",
    value: function getSystemTimezone() {
      return this.findSystemTimezone() || _timezones.TIMEZONE_UTC;
    }

    /**
     * Find timezone by ID from static data
     * @param id - Timezone ID
     * @returns Timezone object or undefined if not found
     */
  }, {
    key: "getTimezoneById",
    value: function getTimezoneById(id) {
      return _timezones.STATIC_TIMEZONE_LIST.find(function (tz) {
        return tz.id === id;
      });
    }

    /**
     * Find timezone by name from static data
     * @param name - Timezone name (e.g., 'America/New_York')
     * @returns Timezone object or undefined if not found
     */
  }, {
    key: "getTimezoneByName",
    value: function getTimezoneByName(name) {
      return this._findTimezoneByNameOrUtc(name);
    }
  }]);
}(_nextCore.RcModule)) || _class);
//# sourceMappingURL=StaticTimezoneService.js.map

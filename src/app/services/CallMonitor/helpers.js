"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkIsCallAnswered = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.some.js");
require("core-js/modules/es.object.to-string.js");
var _Session = require("ringcentral-call-control/lib/Session");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/** Check both local and remote parties so outbound setup is not treated as answered. */
var checkIsCallAnswered = exports.checkIsCallAnswered = function checkIsCallAnswered(session) {
  var _session$otherParties;
  if (!session) return false;
  var parties = [session.party].concat(_toConsumableArray((_session$otherParties = session.otherParties) !== null && _session$otherParties !== void 0 ? _session$otherParties : [])).filter(function (party) {
    return !!party;
  });
  var isAnswered = function isAnswered(party) {
    var _party$status;
    return ((_party$status = party.status) === null || _party$status === void 0 ? void 0 : _party$status.code) === _Session.PartyStatusCode.answered;
  };
  return (
    // when inbound leg be answered, means that call another side be answered
    parties.some(function (party) {
      return party.direction === 'Inbound' && isAnswered(party);
    })
  );
};
//# sourceMappingURL=helpers.js.map

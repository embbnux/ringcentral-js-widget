"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.regexp.exec.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildConversationId = buildConversationId;
exports.buildToNumbersFromConversation = buildToNumbersFromConversation;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.find.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.sort.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.set.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _phoneNumber = require("@ringcentral-integration/phone-number");
var _md = _interopRequireDefault(require("crypto-js/md5"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function getE164PhoneNumber(to) {
  return (0, _phoneNumber.format)({
    phoneNumber: to,
    type: 'e164'
  });
}
function buildConversationId(toNumbers, fromNumber) {
  var e164ToNumber = [].concat(_toConsumableArray(toNumbers), [fromNumber]).map(function (to) {
    return getE164PhoneNumber(to);
  }).filter(function (x) {
    return x;
  });
  var sortedNumbers = e164ToNumber.sort().join('-');

  // using - to mark that as local id
  return "-".concat((0, _md["default"])(sortedNumbers).toString());
}

/**
 * Build ToNumber[] from conversation correspondents for DNC verification.
 * Returns empty array for group conversations (skip DNC check).
 * When dncEntityTypes is not provided, all correspondents are treated as freeSolo (phone-only DNC check).
 */
function buildToNumbersFromConversation(conversation, dncEntityTypes) {
  if (!conversation || conversation.correspondents.length > 1) {
    return [];
  }
  var allowedDNCEntitySet = dncEntityTypes ? new Set(dncEntityTypes) : new Set();
  var correspondents = conversation.correspondents,
    correspondentMatchesList = conversation.correspondentMatchesList;
  var matchesList = correspondentMatchesList !== null && correspondentMatchesList !== void 0 ? correspondentMatchesList : [];
  var result = [];
  for (var i = 0; i < correspondents.length; i++) {
    var _matchesList$i;
    var correspondent = correspondents[i];
    var phoneNumber = correspondent.phoneNumber || correspondent.extensionNumber || '';
    if (!phoneNumber) continue;
    var matches = (_matchesList$i = matchesList[i]) !== null && _matchesList$i !== void 0 ? _matchesList$i : [];
    var dncMatch = allowedDNCEntitySet.size > 0 ? matches.find(function (match) {
      return match.id && match.type && allowedDNCEntitySet.has(match.type);
    }) : undefined;
    if (dncMatch !== null && dncMatch !== void 0 && dncMatch.id) {
      result.push({
        id: dncMatch.id,
        phoneNumber: phoneNumber,
        freeSolo: false
      });
    } else {
      result.push({
        phoneNumber: phoneNumber,
        freeSolo: true
      });
    }
  }
  return result;
}
//# sourceMappingURL=helper.js.map

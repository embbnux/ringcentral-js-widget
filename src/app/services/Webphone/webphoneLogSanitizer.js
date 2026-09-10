"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAX_SIP_TRANSPORT_LOG_LENGTH = void 0;
exports.formatTransportEventSummary = formatTransportEventSummary;
exports.formatWebphoneSessionSummary = formatWebphoneSessionSummary;
exports.truncateLogContent = truncateLogContent;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-json.js");
require("core-js/modules/es.object.keys.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Sanitizes and caps SIP/transport log content to avoid bloated application logs,
 * cyclic JSON serialization, and to keep message type + partial data for troubleshooting.
 */

/** Maximum length for a single log message string in application logs. */
var MAX_SIP_TRANSPORT_LOG_LENGTH = exports.MAX_SIP_TRANSPORT_LOG_LENGTH = 2000;
var TRUNCATED_SUFFIX = '… [truncated]';

/**
 * Truncates string content to a maximum length and appends a suffix when truncated.
 * Use for SIP/transport log messages (e.g. from webphone SDK connector).
 */
function truncateLogContent(content) {
  var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MAX_SIP_TRANSPORT_LOG_LENGTH;
  if (typeof content !== 'string') {
    return String(content).slice(0, maxLength - TRUNCATED_SUFFIX.length) + TRUNCATED_SUFFIX;
  }
  if (content.length <= maxLength) {
    return content;
  }
  return content.slice(0, maxLength - TRUNCATED_SUFFIX.length) + TRUNCATED_SUFFIX;
}

/**
 * Picks a small, safe subset of fields from transport/session event payloads
 * for logging (e.g. method, code, message, sessionId) to avoid huge/circular objects.
 */
function pickSafeSummary(payload) {
  if (payload === null || _typeof(payload) !== 'object') {
    return {
      value: payload
    };
  }
  var obj = payload;
  var out = {};
  var safeKeys = ['message', 'code', 'reason', 'statusCode', 'status_code', 'status', 'callStatus', 'method', 'id', 'callId', 'sessionId', 'direction', 'startTime', 'endTime', 'hasOffer', 'hasAnswer', 'localHold', 'request'];
  for (var _i = 0, _safeKeys = safeKeys; _i < _safeKeys.length; _i++) {
    var k = _safeKeys[_i];
    if (!(k in obj)) continue;
    var v = obj[k];
    if (v === null || v === undefined) continue;
    if (_typeof(v) === 'object' && v !== null && !Array.isArray(v)) {
      if (k === 'request' && typeof v.method === 'string') {
        out.request = {
          method: v.method
        };
      } else {
        out[k] = '[object]';
      }
    } else if (Array.isArray(v)) {
      out[k] = "[".concat(v.length, " items]");
    } else {
      out[k] = v;
    }
  }
  return out;
}

/**
 * Formats a transport or session event for logging: event name + safe partial payload.
 * Caps total length and avoids cyclic or huge payloads (e.g. full SDP/candidate lists).
 */
function formatTransportEventSummary(eventName, payload) {
  var maxLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : MAX_SIP_TRANSPORT_LOG_LENGTH;
  var summary = pickSafeSummary(payload);
  var hasUseful = Object.keys(summary).length > 0;
  var part;
  try {
    part = hasUseful ? JSON.stringify(summary) : (typeof payload === 'string' ? payload : '[no summary]').slice(0, 300);
  } catch (_unused) {
    part = '[Unserializable]';
  }
  var line = "".concat(eventName, " ").concat(part);
  return truncateLogContent(line, maxLength);
}

/** Formats only diagnostic fields from a live SIP/WebRTC session. */
function formatWebphoneSessionSummary(session) {
  var _source$callId;
  var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MAX_SIP_TRANSPORT_LOG_LENGTH;
  if (session === null || _typeof(session) !== 'object') {
    return formatTransportEventSummary('session', session, maxLength);
  }
  var source = session;
  var partyData = source.__rc_partyData;
  var sessionId = partyData && _typeof(partyData) === 'object' ? partyData.sessionId : undefined;
  return formatTransportEventSummary('session', {
    id: source.id,
    sessionId: sessionId,
    callId: (_source$callId = source.callId) !== null && _source$callId !== void 0 ? _source$callId : source.__rc_callId,
    status: source.status,
    callStatus: source.__rc_callStatus,
    direction: source.__rc_direction,
    startTime: source.startTime,
    endTime: source.endTime,
    hasOffer: source.hasOffer,
    hasAnswer: source.hasAnswer,
    localHold: source.localHold
  }, maxLength);
}
//# sourceMappingURL=webphoneLogSanitizer.js.map

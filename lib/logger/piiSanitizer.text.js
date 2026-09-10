"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.object.define-properties.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.get-own-property-descriptors.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diagnosticLogValue = diagnosticLogValue;
exports.hasTextSanitizeSignal = void 0;
exports.hashLogIdentifier = hashLogIdentifier;
exports.isDiagnosticLogValue = void 0;
exports.maskCallId = maskCallId;
exports.maskEmail = maskEmail;
exports.maskIP = maskIP;
exports.maskPhone = maskPhone;
exports.maskQuery = maskQuery;
exports.maskSipMessage = maskSipMessage;
exports.maskSipUri = maskSipUri;
exports.maskString = maskString;
exports.redactTokenValue = void 0;
exports.sanitizeLabelText = sanitizeLabelText;
exports.sanitizeLogText = sanitizeLogText;
exports.sanitizeLogTextWithContext = sanitizeLogTextWithContext;
exports.sanitizeUrlValue = sanitizeUrlValue;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.every.js");
require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.index-of.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.last-index-of.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.array-buffer.constructor.js");
require("core-js/modules/es.array-buffer.slice.js");
require("core-js/modules/es.data-view.js");
require("core-js/modules/es.date.now.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.number.is-safe-integer.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.set.js");
require("core-js/modules/es.string.ends-with.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.string.match.js");
require("core-js/modules/es.string.repeat.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.string.search.js");
require("core-js/modules/es.string.split.js");
require("core-js/modules/es.string.starts-with.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/es.typed-array.uint8-array.js");
require("core-js/modules/es.typed-array.copy-within.js");
require("core-js/modules/es.typed-array.every.js");
require("core-js/modules/es.typed-array.fill.js");
require("core-js/modules/es.typed-array.filter.js");
require("core-js/modules/es.typed-array.find.js");
require("core-js/modules/es.typed-array.find-index.js");
require("core-js/modules/es.typed-array.for-each.js");
require("core-js/modules/es.typed-array.includes.js");
require("core-js/modules/es.typed-array.index-of.js");
require("core-js/modules/es.typed-array.iterator.js");
require("core-js/modules/es.typed-array.join.js");
require("core-js/modules/es.typed-array.last-index-of.js");
require("core-js/modules/es.typed-array.map.js");
require("core-js/modules/es.typed-array.reduce.js");
require("core-js/modules/es.typed-array.reduce-right.js");
require("core-js/modules/es.typed-array.reverse.js");
require("core-js/modules/es.typed-array.set.js");
require("core-js/modules/es.typed-array.slice.js");
require("core-js/modules/es.typed-array.some.js");
require("core-js/modules/es.typed-array.sort.js");
require("core-js/modules/es.typed-array.subarray.js");
require("core-js/modules/es.typed-array.to-locale-string.js");
require("core-js/modules/es.typed-array.to-string.js");
require("core-js/modules/web.dom-collections.for-each.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/web.url.js");
require("core-js/modules/web.url.to-json.js");
require("core-js/modules/web.url-search-params.js");
var sanitizerConstants = _interopRequireWildcard(require("./piiSanitizer.constants"));
var _piiSanitizer2 = require("./piiSanitizer.context");
var _piiSanitizer3 = require("./piiSanitizer.interface");
var _piiV = require("./piiV2");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var URL_VALUE_KEYS = sanitizerConstants.URL_VALUE_KEYS,
  EMAIL_REGEX = sanitizerConstants.EMAIL_REGEX,
  IPV4_REGEX = sanitizerConstants.IPV4_REGEX,
  PHONE_REGEX = sanitizerConstants.PHONE_REGEX,
  QUERY_PARAM_REGEX = sanitizerConstants.QUERY_PARAM_REGEX,
  QUERY_PARAM_OPERATIONAL_KEYS = sanitizerConstants.QUERY_PARAM_OPERATIONAL_KEYS,
  QUERY_PARAM_NUMERIC_KEYS = sanitizerConstants.QUERY_PARAM_NUMERIC_KEYS,
  QUERY_PARAM_SAFE_ENUM_VALUES = sanitizerConstants.QUERY_PARAM_SAFE_ENUM_VALUES,
  COOKIE_HEADER_REGEX = sanitizerConstants.COOKIE_HEADER_REGEX,
  BEARER_TOKEN_REGEX = sanitizerConstants.BEARER_TOKEN_REGEX,
  BEARER_TOKEN_SIGNAL_REGEX = sanitizerConstants.BEARER_TOKEN_SIGNAL_REGEX,
  JWT_COMPACT_REGEX = sanitizerConstants.JWT_COMPACT_REGEX,
  JWT_COMPACT_SIGNAL_REGEX = sanitizerConstants.JWT_COMPACT_SIGNAL_REGEX,
  SSN_HYPHENATED_REGEX = sanitizerConstants.SSN_HYPHENATED_REGEX,
  CREDIT_CARD_CANDIDATE_REGEX = sanitizerConstants.CREDIT_CARD_CANDIDATE_REGEX,
  MAC_ADDRESS_REGEX = sanitizerConstants.MAC_ADDRESS_REGEX,
  IPV6_CANDIDATE_REGEX = sanitizerConstants.IPV6_CANDIDATE_REGEX,
  DIGIT_REGEX = sanitizerConstants.DIGIT_REGEX,
  PHONE_CANDIDATE_REGEX = sanitizerConstants.PHONE_CANDIDATE_REGEX,
  IPV4_CANDIDATE_REGEX = sanitizerConstants.IPV4_CANDIDATE_REGEX,
  COOKIE_HEADER_SIGNAL_REGEX = sanitizerConstants.COOKIE_HEADER_SIGNAL_REGEX,
  UUID_SEGMENT_REGEX = sanitizerConstants.UUID_SEGMENT_REGEX,
  NUMERIC_ID_SEGMENT_REGEX = sanitizerConstants.NUMERIC_ID_SEGMENT_REGEX,
  SEND_SIP_MESSAGE_FLAG = sanitizerConstants.SEND_SIP_MESSAGE_FLAG,
  RECV_SIP_MESSAGE_FLAG = sanitizerConstants.RECV_SIP_MESSAGE_FLAG,
  SIP_URI = sanitizerConstants.SIP_URI,
  SIP_VIA = sanitizerConstants.SIP_VIA,
  VIA_RECEIVED = sanitizerConstants.VIA_RECEIVED,
  SDP_CANDIDATE = sanitizerConstants.SDP_CANDIDATE,
  SDP_IPV4 = sanitizerConstants.SDP_IPV4,
  SDP_IPV6 = sanitizerConstants.SDP_IPV6,
  maskUriUserinfo = sanitizerConstants.maskUriUserinfo,
  SIP_STRING_RULES = sanitizerConstants.SIP_STRING_RULES,
  SIP_PHONE_RULES = sanitizerConstants.SIP_PHONE_RULES,
  normalizeKey = sanitizerConstants.normalizeKey,
  secretKeys = sanitizerConstants.secretKeys,
  tokenKeys = sanitizerConstants.tokenKeys,
  emailKeys = sanitizerConstants.emailKeys,
  phoneKeys = sanitizerConstants.phoneKeys,
  personNameKeys = sanitizerConstants.personNameKeys,
  usernameKeys = sanitizerConstants.usernameKeys,
  addressLeafKeys = sanitizerConstants.addressLeafKeys,
  ssnKeys = sanitizerConstants.ssnKeys,
  creditCardKeys = sanitizerConstants.creditCardKeys,
  hashIdentifierKeys = sanitizerConstants.hashIdentifierKeys,
  urlPathIdParentSegments = sanitizerConstants.urlPathIdParentSegments,
  piiScopedTextFilterKeys = sanitizerConstants.piiScopedTextFilterKeys,
  piiScopedTextHashKeys = sanitizerConstants.piiScopedTextHashKeys,
  addressScopedTextFilterKeys = sanitizerConstants.addressScopedTextFilterKeys,
  macKeys = sanitizerConstants.macKeys,
  ipKeys = sanitizerConstants.ipKeys,
  doubleQuotedTextKeyValueRegex = sanitizerConstants.doubleQuotedTextKeyValueRegex,
  singleQuotedTextKeyValueRegex = sanitizerConstants.singleQuotedTextKeyValueRegex,
  unquotedTextKeyValueRegex = sanitizerConstants.unquotedTextKeyValueRegex,
  addressContainerTextKeyValueRegex = sanitizerConstants.addressContainerTextKeyValueRegex,
  addressContextDoubleQuotedTextKeyValueRegex = sanitizerConstants.addressContextDoubleQuotedTextKeyValueRegex,
  addressContextSingleQuotedTextKeyValueRegex = sanitizerConstants.addressContextSingleQuotedTextKeyValueRegex,
  addressContextUnquotedTextKeyValueRegex = sanitizerConstants.addressContextUnquotedTextKeyValueRegex,
  isUriSchemeCharacter = sanitizerConstants.isUriSchemeCharacter;
function maskString(value) {
  var text = String(value);
  if (!text) {
    return text;
  }
  if (text.length <= 2) {
    return '*'.repeat(text.length);
  }
  if (text.length <= 4) {
    return "".concat(text[0]).concat('*'.repeat(text.length - 2)).concat(text[text.length - 1]);
  }
  return "".concat(text.slice(0, 2)).concat('*'.repeat(Math.min(8, text.length - 4))).concat(text.slice(-2));
}
function hashLogIdentifier(value, _saltOrDeviceKey, deviceKey) {
  var key = _saltOrDeviceKey instanceof Uint8Array ? _saltOrDeviceKey : deviceKey !== null && deviceKey !== void 0 ? deviceKey : (0, _piiV.ensurePiiDeviceKey)().key;
  return (0, _piiV.redactUserId)(String(value), key);
}
function diagnosticLogValue(value, reason) {
  return _objectSpread(_defineProperty(_defineProperty({}, _piiSanitizer3.DIAGNOSTIC_LOG_VALUE_MARK, true), "value", value), reason ? {
    reason: reason
  } : {});
}
function maskEmail(value, deviceKey) {
  var key = deviceKey !== null && deviceKey !== void 0 ? deviceKey : (0, _piiV.ensurePiiDeviceKey)().key;
  if (!value.includes('@')) {
    return maskString(value);
  }
  return (0, _piiV.redactEmail)(value, key);
}
var redactAuthorizationValue = function redactAuthorizationValue(value, deviceKey) {
  var basicMatch = /^Basic\s+(\S.*)$/i.exec(value.trim());
  if (basicMatch) {
    return "Basic ".concat(_piiV.SECRET_MARKER_V2);
  }
  var bearerMatch = /^Bearer\s+(\S.*)$/i.exec(value.trim());
  if (bearerMatch) {
    if ((0, _piiV.isCanonicalPiiMarker)(bearerMatch[1]) || isPreserveSlotValue(bearerMatch[1])) {
      return "Bearer ".concat(bearerMatch[1]);
    }
    return "Bearer ".concat((0, _piiV.redactAccessToken)(bearerMatch[1], deviceKey));
  }
  return (0, _piiV.redactAccessToken)(value, deviceKey);
};
var redactTokenValue = exports.redactTokenValue = function redactTokenValue(key, value, deviceKey) {
  var normalizedKey = normalizeKey(key);
  if (normalizedKey === 'authorization' || normalizedKey === 'xauthorization' || normalizedKey === 'x-authorization') {
    return redactAuthorizationValue(value, deviceKey);
  }
  if (normalizedKey.includes('refresh')) {
    return (0, _piiV.redactAccessToken)(value, deviceKey, 'refresh-token');
  }
  if (normalizedKey === 'jwt' || normalizedKey.includes('idtoken')) {
    return (0, _piiV.redactAccessToken)(value, deviceKey, 'jwt');
  }
  return (0, _piiV.redactAccessToken)(value, deviceKey);
};
var isDiagnosticLogValue = exports.isDiagnosticLogValue = function isDiagnosticLogValue(value) {
  return value !== null && _typeof(value) === 'object' && _piiSanitizer3.DIAGNOSTIC_LOG_VALUE_MARK in value && 'value' in value;
};
var isDateLikePhoneCandidate = function isDateLikePhoneCandidate(value) {
  return /^\d{4}-\d{1,2}-\d{1,2}(?:[T\s]|$)/.test(value.trim());
};

// RC product era — plain 13-digit runs outside this window still go through
// phone/ID rules (accountIds can be numeric; free text must not blanket-skip).
var EPOCH_MS_MIN = Date.UTC(2010, 0, 1);
var ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;
var isPlausibleEpochMillis = function isPlausibleEpochMillis(value) {
  if (!/^\d{13}$/.test(value)) {
    return false;
  }
  var ms = Number(value);
  if (!Number.isSafeInteger(ms)) {
    return false;
  }
  return ms >= EPOCH_MS_MIN && ms <= Date.now() + ONE_YEAR_MS;
};
var isBareJsonNumber = function isBareJsonNumber(value) {
  return /^-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/.test(value.trim());
};
var isJsonNumberContext = function isJsonNumberContext(text, offset) {
  var index = offset - 1;
  while (index >= 0 && (text[index] === ' ' || text[index] === '\t')) {
    index -= 1;
  }
  return index >= 0 && (text[index] === ':' || text[index] === ',' || text[index] === '[');
};

// Free-text JSON numbers become string markers — wrap so the blob stays
// parseable (`"expireTime":123` → `"expireTime":"[PII:…]"`). Skip `key=123`
// free-text and already-quoted string values.
var quoteIfJsonNumber = function quoteIfJsonNumber(rawValue, redacted, text, offset) {
  if (!isBareJsonNumber(rawValue) || !isJsonNumberContext(text, offset)) {
    return redacted;
  }
  return "\"".concat(redacted, "\"");
};
var VERSION_VALUE_PREFIX_REGEX = /(Chrome|Chromium|Firefox|Safari|Edge|Edg|Electron|Node|SDK|Version)\/$/i;
var isVersionValuePrefix = function isVersionValuePrefix(text, offset) {
  var prefix = text.slice(Math.max(0, offset - 24), offset);
  return VERSION_VALUE_PREFIX_REGEX.test(prefix);
};
var isIPv4LikeCandidate = function isIPv4LikeCandidate(value) {
  var parts = value.trim().split('.');
  return parts.length === 4 && parts.every(function (part) {
    return /^\d{1,3}$/.test(part) && Number(part) <= 255;
  });
};
var isLocalhostIP = function isLocalhostIP(value) {
  var text = value.trim().toLowerCase();
  return text === '0.0.0.0' || text.startsWith('127.') || text === '::1' || text === '0:0:0:0:0:0:0:1';
};
var isMacAddress = function isMacAddress(value) {
  var text = value.trim();
  return /^(?:[0-9a-fA-F]{2}[:-]){5}[0-9a-fA-F]{2}$/.test(text) || /^(?:[0-9a-fA-F]{4}\.){2}[0-9a-fA-F]{4}$/.test(text);
};
var isIpv6Address = function isIpv6Address(value) {
  var text = value.trim();
  if (!text.includes(':') || isMacAddress(text)) {
    return false;
  }
  var bare = text.split('%')[0];
  if (!/^[0-9a-fA-F:]+$/.test(bare)) {
    return false;
  }
  try {
    // URL hostname parsing validates IPv6 literal syntax.
    return new URL("http://[".concat(bare, "]")).hostname.length > 0;
  } catch (_unused) {
    return false;
  }
};
var passesLuhn = function passesLuhn(digits) {
  var sum = 0;
  var doubleDigit = false;
  for (var index = digits.length - 1; index >= 0; index -= 1) {
    var digit = Number(digits[index]);
    if (doubleDigit) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    doubleDigit = !doubleDigit;
  }
  return sum % 10 === 0;
};
var isValidCreditCardNumber = function isValidCreditCardNumber(value) {
  var digits = value.replace(/\D/g, '');
  if (digits.length < 13 || digits.length > 19) {
    return false;
  }
  // Reject runs that are all zeros / obviously non-PAN.
  if (/^0+$/.test(digits)) {
    return false;
  }
  return passesLuhn(digits);
};

// Card-length bare digit runs: leave readable when Luhn fails; do not phone-mask.
var isCardLengthNonE164DigitRun = function isCardLengthNonE164DigitRun(value, digits) {
  return !value.trim().startsWith('+') && digits.length >= 13 && digits.length <= 19 && !/[().]/.test(value);
};
var shouldMaskPhoneCandidate = function shouldMaskPhoneCandidate(value, text, offset) {
  var _value$match;
  if (isDateLikePhoneCandidate(value)) {
    return false;
  }
  var trimmed = value.trim();
  if (isPlausibleEpochMillis(trimmed)) {
    return false;
  }
  var digits = value.replace(/\D/g, '');
  var dotCount = ((_value$match = value.match(/\./g)) !== null && _value$match !== void 0 ? _value$match : []).length;
  if (!trimmed.startsWith('+') && dotCount >= 3 && (isVersionValuePrefix(text, offset) || isIPv4LikeCandidate(value))) {
    return false;
  }
  if (isCardLengthNonE164DigitRun(trimmed, digits)) {
    return false;
  }
  return trimmed.startsWith('+') ? digits.length >= 7 : digits.length >= 10;
};
var shouldMaskIPCandidate = function shouldMaskIPCandidate(value, text, offset) {
  return !isVersionValuePrefix(text, offset) && !isLocalhostIP(value);
};
var maskIpv4Text = function maskIpv4Text(text, key) {
  if (!IPV4_REGEX.test(text.trim())) {
    IPV4_REGEX.lastIndex = 0;
    return undefined;
  }
  IPV4_REGEX.lastIndex = 0;
  return text.replace(IPV4_REGEX, function (ip) {
    return isLocalhostIP(ip) ? ip : (0, _piiV.redactIpv4)(ip, key);
  });
};
var maskIpv6Candidates = function maskIpv6Candidates(text, key) {
  return text.replace(IPV6_CANDIDATE_REGEX, function (candidate) {
    var candidateEnd = candidate.length;
    while (candidateEnd > 0 && candidate[candidateEnd - 1] === '.') {
      candidateEnd -= 1;
    }
    var candidateWithoutTrailingPeriods = candidate.slice(0, candidateEnd);
    var trailingPeriods = candidate.slice(candidateEnd);
    if (!isIpv6Address(candidateWithoutTrailingPeriods) || isLocalhostIP(candidateWithoutTrailingPeriods)) {
      return candidate;
    }
    return "".concat((0, _piiV.redactIpv6)(candidateWithoutTrailingPeriods, key)).concat(trailingPeriods);
  });
};
function maskPhone(value, deviceKey) {
  var text = String(value);
  var digits = text.replace(/\D/g, '');
  var key = deviceKey !== null && deviceKey !== void 0 ? deviceKey : (0, _piiV.ensurePiiDeviceKey)().key;
  if (digits.length <= 4) {
    return (0, _piiV.redactSecret)();
  }
  return (0, _piiV.redactPhone)(text, key);
}
function maskIP(value, deviceKey) {
  var text = String(value);
  var key = deviceKey !== null && deviceKey !== void 0 ? deviceKey : (0, _piiV.ensurePiiDeviceKey)().key;
  var trimmed = text.trim();
  var maskedIpv4 = maskIpv4Text(text, key);
  if (maskedIpv4 !== undefined) return maskedIpv4;
  if (isIpv6Address(trimmed)) {
    return isLocalhostIP(trimmed) ? text : (0, _piiV.redactIpv6)(trimmed, key);
  }
  if (text.includes(':')) {
    var replaced = maskIpv6Candidates(text, key);
    if (replaced !== text) {
      return replaced;
    }
  }
  return maskString(text);
}
var decodeQueryValue = function decodeQueryValue(value) {
  try {
    return decodeURIComponent(value.replace(/\+/g, ' '));
  } catch (_unused2) {
    return value;
  }
};
function sanitizeQueryParamValue(key, rawValue, context) {
  var value = decodeQueryValue(rawValue);
  var normalizedKey = normalizeKey(key);
  if (secretKeys.has(normalizedKey) || tokenKeys.has(normalizedKey)) {
    return _piiV.SECRET_MARKER_V2;
  }
  if (QUERY_PARAM_OPERATIONAL_KEYS.has(normalizedKey)) {
    var _safeEnumValues$has;
    var isSafeNumericValue = QUERY_PARAM_NUMERIC_KEYS.has(normalizedKey) && /^\d{1,9}$/.test(value);
    var safeEnumValues = QUERY_PARAM_SAFE_ENUM_VALUES.get(normalizedKey);
    var isSafeEnumValue = (_safeEnumValues$has = safeEnumValues === null || safeEnumValues === void 0 ? void 0 : safeEnumValues.has(value.toLowerCase())) !== null && _safeEnumValues$has !== void 0 ? _safeEnumValues$has : false;
    if (!isSafeNumericValue && !isSafeEnumValue) {
      return _piiV.SECRET_MARKER_V2;
    }
    return rawValue;
  }
  return sanitizeMatchedTextValue(key, value, context);
}
function maskQuery(value) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _piiSanitizer2.createContext)();
  return value.replace(QUERY_PARAM_REGEX, function (_match, prefix, key, rawValue) {
    return "".concat(prefix).concat(key, "=").concat(sanitizeQueryParamValue(key, rawValue, context));
  });
}
function maskSipUri(uri) {
  if (!uri) {
    return uri;
  }
  var pos = uri.search('@');
  if (pos !== -1) {
    var phoneNumber = maskPhone(uri.slice(0, pos));
    var domain = uri.slice(pos);
    if (domain.length > 5) {
      domain = "".concat(domain[0], "*****").concat(domain.slice(6));
    }
    return "".concat(phoneNumber).concat(domain);
  }
  return maskPhone(uri);
}
function maskCallId(callId) {
  var parts = callId.split('@');
  if (parts.length > 1) {
    return "".concat(parts[0], "@").concat(maskIP(parts[1]));
  }
  return callId;
}
function maskSdpIPHeader(header) {
  var ip4Index = header.search(SDP_IPV4);
  if (ip4Index !== -1) {
    return header.slice(0, ip4Index + SDP_IPV4.length);
  }
  var ip6Index = header.search(SDP_IPV6);
  if (ip6Index !== -1) {
    return header.slice(0, ip6Index + SDP_IPV6.length);
  }
  var candidateIndex = header.search(SDP_CANDIDATE);
  if (candidateIndex !== -1) {
    return header.slice(0, candidateIndex + SDP_CANDIDATE.length);
  }
  if (header.includes(SIP_VIA)) {
    var receivedIndex = header.search(VIA_RECEIVED);
    if (receivedIndex !== -1) {
      return header.slice(0, receivedIndex + VIA_RECEIVED.length);
    }
  }
  return header;
}
var isSipMessage = function isSipMessage(message) {
  return SEND_SIP_MESSAGE_FLAG.test(message) || RECV_SIP_MESSAGE_FLAG.test(message);
};
var getPIIData = function getPIIData(header, regExp) {
  var _header$match$, _header$match;
  return (_header$match$ = (_header$match = header.match(regExp)) === null || _header$match === void 0 ? void 0 : _header$match[1]) !== null && _header$match$ !== void 0 ? _header$match$ : '';
};
function maskSipMessage(message) {
  if (!isSipMessage(message)) {
    return message;
  }
  var headers = message.split('\r\n');
  return headers.map(function (rawHeader) {
    var header = rawHeader;
    if (header.includes(SIP_URI) && header.includes('@')) {
      var sipUri = header.split(SIP_URI)[1];
      header = header.replace(sipUri, maskSipUri(sipUri));
    }
    SIP_STRING_RULES.forEach(function (rule) {
      var data = getPIIData(header, rule);
      if (data.length > 0) {
        header = header.replace(data, maskString(data));
      }
    });
    SIP_PHONE_RULES.forEach(function (rule) {
      var data = getPIIData(header, rule);
      if (data.length > 0) {
        header = header.replace(data, maskPhone(data));
      }
    });
    var localAddr = header.includes('LocalAddr: IP=') ? getPIIData(header, /LocalAddr: IP=([^"]+):/) : '';
    if (localAddr.length > 0) {
      header = header.replace(localAddr, maskIP(localAddr));
    }
    if (header.includes('Call') && header.includes('@')) {
      header = maskCallId(header);
    }
    return maskSdpIPHeader(header);
  }).join('\r\n');
}
function sanitizeLogText(value) {
  return sanitizeLogTextWithContext(value, (0, _piiSanitizer2.createContext)());
}
var PRESERVE_SLOT_PREFIX = "\0PII";
var PRESERVE_SLOT_SUFFIX = "\0";
var isPreserveSlotValue = function isPreserveSlotValue(value) {
  return value.startsWith(PRESERVE_SLOT_PREFIX) && value.endsWith(PRESERVE_SLOT_SUFFIX) && /^\d+\.\d+$/.test(value.slice(PRESERVE_SLOT_PREFIX.length, -PRESERVE_SLOT_SUFFIX.length));
};
function sanitizeDirectMatchedTextValue(key, normalizedKey, rawValue, context) {
  if (secretKeys.has(normalizedKey)) {
    return (0, _piiV.redactSecret)();
  }
  if (tokenKeys.has(normalizedKey)) {
    return redactTokenValue(key, rawValue, context.deviceKey);
  }
  if (emailKeys.has(normalizedKey)) {
    return (0, _piiV.redactEmail)(rawValue, context.deviceKey);
  }
  if (phoneKeys.has(normalizedKey)) {
    return (0, _piiV.redactPhone)(rawValue, context.deviceKey);
  }
  if (usernameKeys.has(normalizedKey)) {
    return (0, _piiV.redactUsername)(rawValue, context.deviceKey);
  }
  if (personNameKeys.has(normalizedKey)) {
    return (0, _piiV.redactPersonName)(rawValue, context.deviceKey);
  }
  if (addressLeafKeys.has(normalizedKey)) {
    return (0, _piiV.redactRestricted)('address');
  }
  if (ssnKeys.has(normalizedKey)) {
    return (0, _piiV.redactRestricted)('ssn');
  }
  if (creditCardKeys.has(normalizedKey)) {
    return (0, _piiV.redactRestricted)('credit-card');
  }
  if (macKeys.has(normalizedKey)) {
    return (0, _piiV.redactMac)(rawValue, context.deviceKey);
  }
  if (ipKeys.has(normalizedKey)) {
    return maskIP(rawValue, context.deviceKey);
  }
  if (hashIdentifierKeys.has(normalizedKey)) {
    return (0, _piiV.redactUserId)(rawValue, context.deviceKey);
  }
  if (piiScopedTextHashKeys.has(normalizedKey)) {
    return (0, _piiV.redactUserId)(rawValue, context.deviceKey);
  }
  return undefined;
}
function sanitizeScopedMatchedTextValue(key, normalizedKey, rawValue, context) {
  if (piiScopedTextFilterKeys.has(normalizedKey)) {
    var _normalizedKey$split$;
    var leaf = (_normalizedKey$split$ = normalizedKey.split('.').pop()) !== null && _normalizedKey$split$ !== void 0 ? _normalizedKey$split$ : '';
    if (leaf === 'name' || personNameKeys.has(leaf)) {
      return (0, _piiV.redactPersonName)(rawValue, context.deviceKey);
    }
    return (0, _piiV.redactSecret)();
  }
  if (addressScopedTextFilterKeys.has(normalizedKey)) {
    var _normalizedKey$split$2;
    var _leaf = (_normalizedKey$split$2 = normalizedKey.split('.').pop()) !== null && _normalizedKey$split$2 !== void 0 ? _normalizedKey$split$2 : '';
    if (_leaf === 'id') {
      return (0, _piiV.redactUserId)(rawValue, context.deviceKey);
    }
    if (_leaf === 'name' || personNameKeys.has(_leaf)) {
      return (0, _piiV.redactPersonName)(rawValue, context.deviceKey);
    }
    if (_leaf === 'uri' || _leaf === 'url' || _leaf === 'href') {
      return sanitizeUrlValue(key, rawValue, context);
    }
    return (0, _piiV.redactRestricted)('address');
  }
  return undefined;
}
function sanitizeMatchedTextValue(key, rawValue, context) {
  // Exact slotted/canonical values only — longer captures may still contain
  // raw PII before a later slot on the same line (e.g. `token=secret for …`).
  if ((0, _piiV.isCanonicalPiiMarker)(rawValue) || isPreserveSlotValue(rawValue)) {
    return rawValue;
  }
  var normalizedKey = normalizeKey(key);
  var directValue = sanitizeDirectMatchedTextValue(key, normalizedKey, rawValue, context);
  if (directValue !== undefined) return directValue;
  var scopedValue = sanitizeScopedMatchedTextValue(key, normalizedKey, rawValue, context);
  if (scopedValue !== undefined) return scopedValue;
  if (URL_VALUE_KEYS.has(normalizedKey)) {
    return sanitizeUrlValue(key, rawValue, context);
  }
  if (context.maskKeys.has(normalizedKey)) {
    return maskString(sanitizeLabelText(rawValue, context));
  }
  return (0, _piiV.redactSecret)();
}
function sanitizeLogTextWithContext(value, context) {
  if ((0, _piiV.isCanonicalPiiMarker)(value)) {
    return value;
  }
  if (!hasTextSanitizeSignal(value)) {
    return value;
  }
  return (0, _piiV.preserveCanonicalMarkers)(value, function (unprotected) {
    var addressContextLineIndexes = hasAddressContextSignal(unprotected) ? getAddressContextLineIndexes(unprotected) : undefined;

    // Apply field policy before generic scans can turn a sensitive value into
    // a less restrictive correlatable marker.
    var sanitizedValue = unprotected;
    sanitizedValue = (0, _piiV.preserveCanonicalMarkers)(sanitizedValue, function (text) {
      return text.replace(doubleQuotedTextKeyValueRegex, function (_match, prefix, keyQuote, key, separator, rawValue) {
        return "".concat(prefix).concat(keyQuote).concat(key).concat(keyQuote).concat(separator, "\"").concat(sanitizeMatchedTextValue(key, rawValue, context), "\"");
      });
    });
    sanitizedValue = (0, _piiV.preserveCanonicalMarkers)(sanitizedValue, function (text) {
      return text.replace(singleQuotedTextKeyValueRegex, function (_match, prefix, keyQuote, key, separator, rawValue) {
        return "".concat(prefix).concat(keyQuote).concat(key).concat(keyQuote).concat(separator, "'").concat(sanitizeMatchedTextValue(key, rawValue, context), "'");
      });
    });
    sanitizedValue = (0, _piiV.preserveCanonicalMarkers)(sanitizedValue, function (text) {
      return text.replace(unquotedTextKeyValueRegex, function (match, prefix, keyQuote, key, separator, rawValue, offset) {
        var trimmed = rawValue.trim();
        var valueOffset = offset + match.length - rawValue.length;
        var sanitized = sanitizeMatchedTextValue(key, trimmed, context);
        return "".concat(prefix).concat(keyQuote).concat(key).concat(keyQuote).concat(separator).concat(quoteIfJsonNumber(trimmed, sanitized, text, valueOffset));
      });
    });
    sanitizedValue = (0, _piiV.preserveCanonicalMarkers)(sanitizedValue, function (text) {
      return sanitizeLabelText(text, context);
    });
    return addressContextLineIndexes === undefined ? sanitizedValue : (0, _piiV.preserveCanonicalMarkers)(sanitizedValue, function (text) {
      return sanitizeAddressContextText(text, addressContextLineIndexes);
    });
  });
}
function sanitizeAddressContextLine(line) {
  return line.replace(addressContextDoubleQuotedTextKeyValueRegex, function (_match, prefix, keyQuote, key, separator) {
    return "".concat(prefix).concat(keyQuote).concat(key).concat(keyQuote).concat(separator, "\"").concat((0, _piiV.redactRestricted)('address'), "\"");
  }).replace(addressContextSingleQuotedTextKeyValueRegex, function (_match, prefix, keyQuote, key, separator) {
    return "".concat(prefix).concat(keyQuote).concat(key).concat(keyQuote).concat(separator, "'").concat((0, _piiV.redactRestricted)('address'), "'");
  }).replace(addressContextUnquotedTextKeyValueRegex, function (_match, prefix, keyQuote, key, separator) {
    return "".concat(prefix).concat(keyQuote).concat(key).concat(keyQuote).concat(separator).concat((0, _piiV.redactRestricted)('address'));
  });
}
function sanitizeAddressContextText(value, addressContextLineIndexes) {
  var lineIndex = 0;
  return value.split(/(\r\n|\r|\n)/).map(function (part) {
    if (part === '\r\n' || part === '\r' || part === '\n') {
      return part;
    }
    var shouldSanitize = addressContextLineIndexes.has(lineIndex) || addressContainerTextKeyValueRegex.test(part);
    lineIndex += 1;
    return shouldSanitize ? sanitizeAddressContextLine(part) : part;
  }).join('');
}
var getLineIndentLength = function getLineIndentLength(line) {
  return line.search(/\S|$/);
};
var getBlockDepthDelta = function getBlockDepthDelta(line) {
  var _line$match, _line$match2;
  return ((_line$match = line.match(/[{[]/g)) !== null && _line$match !== void 0 ? _line$match : []).length - ((_line$match2 = line.match(/[}\]]/g)) !== null && _line$match2 !== void 0 ? _line$match2 : []).length;
};
var isAsciiLetter = function isAsciiLetter(character) {
  var code = character.charCodeAt(0);
  return code >= 65 && code <= 90 || code >= 97 && code <= 122;
};
var hasAddressContextSuffix = function hasAddressContextSuffix(line) {
  var separatorIndex = Math.max(line.lastIndexOf(':'), line.lastIndexOf('='));
  if (separatorIndex < 0) return false;
  var suffix = line.slice(separatorIndex + 1).trim();
  return suffix === '' || suffix === '{' || suffix === '[';
};
function getAddressContextLineIndexes(value) {
  var lineIndexes = new Set();
  var blockDepth = 0;
  var contextIndent;
  value.split(/\r\n|\r|\n/).forEach(function (line, index) {
    var trimmedLine = line.trim();
    var hasContent = trimmedLine.length > 0;
    var indent = getLineIndentLength(line);
    var startsAddressContext = addressContainerTextKeyValueRegex.test(line);
    if (contextIndent !== undefined && hasContent && indent <= contextIndent && !startsAddressContext) {
      contextIndent = undefined;
    }
    var isIndentedAddressContext = contextIndent !== undefined && hasContent && indent > contextIndent;
    if (startsAddressContext || blockDepth > 0 || isIndentedAddressContext) {
      lineIndexes.add(index);
    }
    if (startsAddressContext) {
      var blockDepthDelta = getBlockDepthDelta(line);
      blockDepth = Math.max(blockDepth + blockDepthDelta, 0);
      if (blockDepthDelta <= 0 && hasAddressContextSuffix(line)) {
        contextIndent = indent;
      }
      return;
    }
    if (blockDepth > 0) {
      blockDepth = Math.max(blockDepth + getBlockDepthDelta(line), 0);
    }
  });
  return lineIndexes;
}
function decodeUrlPathSegment(segment) {
  try {
    return decodeURIComponent(segment);
  } catch (_unused3) {
    return segment;
  }
}
function shouldHashUrlPathSegment(decodedSegment, previousDecodedSegment) {
  // Already-redacted path segments must stay byte-stable across re-sanitize.
  if ((0, _piiV.isCanonicalPiiMarker)(decodedSegment)) {
    return false;
  }
  var normalizedSegment = normalizeKey(decodedSegment);
  if (!normalizedSegment) {
    return false;
  }
  var normalizedPreviousSegment = previousDecodedSegment === undefined ? '' : normalizeKey(previousDecodedSegment);
  return urlPathIdParentSegments.has(normalizedPreviousSegment) || UUID_SEGMENT_REGEX.test(decodedSegment) || NUMERIC_ID_SEGMENT_REGEX.test(decodedSegment);
}
function sanitizeUrlPath(path, context) {
  var segments = path.split('/');
  var decodedSegments = segments.map(function (segment) {
    return decodeUrlPathSegment(segment);
  });
  return segments.map(function (segment, index) {
    return shouldHashUrlPathSegment(decodedSegments[index], decodedSegments[index - 1]) ? hashLogIdentifier(decodedSegments[index], context.deviceKey) : segment;
  }).join('/');
}
function getUrlParts(value) {
  var authorityStartIndex;
  if (value.startsWith('//')) {
    authorityStartIndex = 2;
  } else {
    var schemeDelimiterIndex = value.indexOf('://');
    if (schemeDelimiterIndex <= 0 || !isAsciiLetter(value[0])) {
      return undefined;
    }
    for (var index = 1; index < schemeDelimiterIndex; index += 1) {
      if (!isUriSchemeCharacter(value[index])) return undefined;
    }
    authorityStartIndex = schemeDelimiterIndex + 3;
  }
  var authorityEndIndex = value.length;
  for (var _index = authorityStartIndex; _index < value.length; _index += 1) {
    if ('/?#'.includes(value[_index])) {
      authorityEndIndex = _index;
      break;
    }
  }
  var pathEndIndex = value.length;
  for (var _index2 = authorityEndIndex; _index2 < value.length; _index2 += 1) {
    if ('?#'.includes(value[_index2])) {
      pathEndIndex = _index2;
      break;
    }
  }
  return {
    prefix: value.slice(0, authorityEndIndex),
    path: value.slice(authorityEndIndex, pathEndIndex),
    suffix: value.slice(pathEndIndex)
  };
}
function sanitizeUrlPathIdentifiers(value, context) {
  var urlParts = getUrlParts(value);
  if (urlParts) {
    var prefix = urlParts.prefix,
      _path = urlParts.path,
      _suffix = urlParts.suffix;
    return "".concat(sanitizeUrlPrefix(prefix)).concat(sanitizeUrlPath(_path, context)).concat(_suffix);
  }
  var suffixIndex = value.search(/[?#]/);
  var path = suffixIndex === -1 ? value : value.slice(0, suffixIndex);
  var suffix = suffixIndex === -1 ? '' : value.slice(suffixIndex);
  if (!path.includes('/')) {
    return value;
  }
  return "".concat(sanitizeUrlPath(path, context)).concat(suffix);
}
function sanitizeUrlPrefix(prefix) {
  var authorityStartIndex = prefix.indexOf('//') + 2;
  if (authorityStartIndex < 2) {
    return prefix;
  }
  var credentialEndIndex = prefix.lastIndexOf('@');
  if (credentialEndIndex < authorityStartIndex) {
    return prefix;
  }
  var authorityPrefix = prefix.slice(0, authorityStartIndex);
  var host = prefix.slice(credentialEndIndex + 1);
  return "".concat(authorityPrefix).concat(_piiV.SECRET_MARKER_V2, "@").concat(host);
}
function sanitizeUrlValue(key, rawValue, context) {
  var sanitizedValue = sanitizeLabelText(rawValue, context);
  return sanitizeUrlPathIdentifiers(sanitizedValue, context);
}
var hasQueryParamSignal = function hasQueryParamSignal(value) {
  return value.includes('=') && (value.includes('?') || value.includes('&') || value.includes('#'));
};
var hasCookieHeaderSignal = function hasCookieHeaderSignal(value) {
  return value.includes(':') && COOKIE_HEADER_SIGNAL_REGEX.test(value);
};
var hasIPV4Signal = function hasIPV4Signal(value) {
  return value.includes('.') && IPV4_CANDIDATE_REGEX.test(value);
};
var hasIpv6Signal = function hasIpv6Signal(value) {
  return value.includes(':');
};
var hasMacSignal = function hasMacSignal(value) {
  return value.includes(':') || value.includes('-') || value.includes('.');
};
var hasTextSanitizeSignal = exports.hasTextSanitizeSignal = function hasTextSanitizeSignal(value) {
  return value.includes('@') || value.includes(':') || value.includes('=') || value.includes('?') || value.includes('&') || value.includes('#') || DIGIT_REGEX.test(value) || BEARER_TOKEN_SIGNAL_REGEX.test(value) || JWT_COMPACT_SIGNAL_REGEX.test(value);
};
var hasAddressContextSignal = function hasAddressContextSignal(value) {
  return value.includes('\n') || value.includes('\r') || addressContainerTextKeyValueRegex.test(value);
};
function sanitizeLabelProtocolValues(value, context, deviceKey) {
  var sanitizedValue = value;
  if (isSipMessage(sanitizedValue)) {
    sanitizedValue = maskSipMessage(sanitizedValue);
  }
  if (hasQueryParamSignal(sanitizedValue)) {
    sanitizedValue = (0, _piiV.preserveCanonicalMarkers)(sanitizedValue, function (text) {
      return maskQuery(text, context);
    });
  }
  if (hasCookieHeaderSignal(sanitizedValue)) {
    sanitizedValue = sanitizedValue.replace(COOKIE_HEADER_REGEX, function (_match, prefix, key) {
      return "".concat(prefix).concat(key).concat(_piiV.SECRET_MARKER_V2);
    });
  }

  // Strip URL userinfo before email scan so `user:pass@host` is not emailed.
  if (sanitizedValue.includes('://') && sanitizedValue.includes('@')) {
    sanitizedValue = (0, _piiV.preserveCanonicalMarkers)(sanitizedValue, function (text) {
      return maskUriUserinfo(text);
    });
  }
  if (BEARER_TOKEN_SIGNAL_REGEX.test(sanitizedValue)) {
    sanitizedValue = (0, _piiV.preserveCanonicalMarkers)(sanitizedValue, function (text) {
      return text.replace(BEARER_TOKEN_REGEX, function (_match, token) {
        return "Bearer ".concat((0, _piiV.redactAccessToken)(token, deviceKey));
      });
    });
  }
  if (JWT_COMPACT_SIGNAL_REGEX.test(sanitizedValue)) {
    sanitizedValue = (0, _piiV.preserveCanonicalMarkers)(sanitizedValue, function (text) {
      return text.replace(JWT_COMPACT_REGEX, function (jwt) {
        return (0, _piiV.redactAccessToken)(jwt, deviceKey, 'jwt');
      });
    });
  }
  if (SSN_HYPHENATED_REGEX.test(sanitizedValue)) {
    SSN_HYPHENATED_REGEX.lastIndex = 0;
    sanitizedValue = (0, _piiV.preserveCanonicalMarkers)(sanitizedValue, function (text) {
      return text.replace(SSN_HYPHENATED_REGEX, function () {
        return (0, _piiV.redactRestricted)('ssn');
      });
    });
  }
  return sanitizedValue;
}
function sanitizeLabelCardAndEmailValues(value, deviceKey) {
  var sanitizedValue = value;
  if (CREDIT_CARD_CANDIDATE_REGEX.test(sanitizedValue)) {
    CREDIT_CARD_CANDIDATE_REGEX.lastIndex = 0;
    sanitizedValue = (0, _piiV.preserveCanonicalMarkers)(sanitizedValue, function (text) {
      return text.replace(CREDIT_CARD_CANDIDATE_REGEX, function (candidate, offset, fullText) {
        if (isPlausibleEpochMillis(candidate)) {
          return candidate;
        }
        var redacted = isValidCreditCardNumber(candidate) ? (0, _piiV.redactRestricted)('credit-card') : candidate;
        return quoteIfJsonNumber(candidate, redacted, fullText, offset);
      });
    });
  }
  if (sanitizedValue.includes('@')) {
    sanitizedValue = (0, _piiV.preserveCanonicalMarkers)(sanitizedValue, function (text) {
      return text.replace(EMAIL_REGEX, function (email) {
        return (0, _piiV.redactEmail)(email, deviceKey);
      });
    });
  }
  return sanitizedValue;
}
function sanitizeLabelNetworkValues(value, deviceKey) {
  var sanitizedValue = value;
  if (hasIPV4Signal(sanitizedValue)) {
    sanitizedValue = (0, _piiV.preserveCanonicalMarkers)(sanitizedValue, function (text) {
      return text.replace(IPV4_REGEX, function (ip, offset, full) {
        return shouldMaskIPCandidate(ip, full, offset) ? (0, _piiV.redactIpv4)(ip, deviceKey) : ip;
      });
    });
  }
  if (hasIpv6Signal(sanitizedValue)) {
    IPV6_CANDIDATE_REGEX.lastIndex = 0;
    sanitizedValue = (0, _piiV.preserveCanonicalMarkers)(sanitizedValue, function (text) {
      return maskIpv6Candidates(text, deviceKey);
    });
  }
  if (hasMacSignal(sanitizedValue)) {
    MAC_ADDRESS_REGEX.lastIndex = 0;
    sanitizedValue = (0, _piiV.preserveCanonicalMarkers)(sanitizedValue, function (text) {
      return text.replace(MAC_ADDRESS_REGEX, function (mac) {
        return (0, _piiV.redactMac)(mac, deviceKey);
      });
    });
  }
  if (PHONE_CANDIDATE_REGEX.test(sanitizedValue)) {
    sanitizedValue = (0, _piiV.preserveCanonicalMarkers)(sanitizedValue, function (text) {
      return text.replace(PHONE_REGEX, function (phone, offset, full) {
        if (!shouldMaskPhoneCandidate(phone, full, offset)) {
          return phone;
        }
        return quoteIfJsonNumber(phone, (0, _piiV.redactPhone)(phone, deviceKey), full, offset);
      });
    });
  }
  return sanitizedValue;
}
function sanitizeLabelText(value, context) {
  var _context$deviceKey;
  var deviceKey = (_context$deviceKey = context === null || context === void 0 ? void 0 : context.deviceKey) !== null && _context$deviceKey !== void 0 ? _context$deviceKey : (0, _piiV.ensurePiiDeviceKey)().key;
  return (0, _piiV.preserveCanonicalMarkers)(value, function (unprotected) {
    var protocolValue = sanitizeLabelProtocolValues(unprotected, context, deviceKey);
    var cardAndEmailValue = sanitizeLabelCardAndEmailValues(protocolValue, deviceKey);
    return sanitizeLabelNetworkValues(cardAndEmailValue, deviceKey);
  });
}
//# sourceMappingURL=piiSanitizer.text.js.map

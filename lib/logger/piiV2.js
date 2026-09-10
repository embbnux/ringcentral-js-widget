"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UNAVAILABLE_MARKER_V2 = exports.SECRET_MARKER_V2 = exports.PII_MARKER_VERSION = exports.PII_DEVICE_KEY_STORAGE_KEY = exports.BINARY_MARKER_V2 = void 0;
exports.buildPiiReference = buildPiiReference;
exports.correlatableMarker = correlatableMarker;
exports.createPiiDeviceKeyBytes = createPiiDeviceKeyBytes;
exports.decodePreview = decodePreview;
exports.encodePreview = encodePreview;
exports.ensurePiiDeviceKey = ensurePiiDeviceKey;
exports.getPiiDeviceKeyHex = getPiiDeviceKeyHex;
exports.getPiiDeviceKeySource = getPiiDeviceKeySource;
exports.isCanonicalFilenameSafePiiMarker = isCanonicalFilenameSafePiiMarker;
exports.isCanonicalPiiMarker = isCanonicalPiiMarker;
exports.preserveCanonicalMarkers = preserveCanonicalMarkers;
exports.preserveFilenameSafeMarkers = preserveFilenameSafeMarkers;
exports.previewEmail = previewEmail;
exports.previewPersonName = previewPersonName;
exports.previewPhone = previewPhone;
exports.previewToken = previewToken;
exports.previewUserId = previewUserId;
exports.previewUsername = previewUsername;
exports.redactAccessToken = redactAccessToken;
exports.redactEmail = redactEmail;
exports.redactIpv4 = redactIpv4;
exports.redactIpv6 = redactIpv6;
exports.redactMac = redactMac;
exports.redactPersonName = redactPersonName;
exports.redactPhone = redactPhone;
exports.redactRestricted = redactRestricted;
exports.redactSecret = redactSecret;
exports.redactUserId = redactUserId;
exports.redactUsername = redactUsername;
exports.replaceContentMarkersWithFilenameSafe = replaceContentMarkersWithFilenameSafe;
exports.resetPiiDeviceKeyForTests = resetPiiDeviceKeyForTests;
exports.restrictedMarker = restrictedMarker;
exports.setPiiDeviceKey = setPiiDeviceKey;
exports.setPiiDeviceKeyForTests = setPiiDeviceKeyForTests;
exports.setPiiDeviceKeyFromHex = setPiiDeviceKeyFromHex;
exports.toFilenameSafePiiMarker = toFilenameSafePiiMarker;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.find.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.index-of.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.array-buffer.constructor.js");
require("core-js/modules/es.array-buffer.slice.js");
require("core-js/modules/es.data-view.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.parse-int.js");
require("core-js/modules/es.regexp.constructor.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.code-point-at.js");
require("core-js/modules/es.string.ends-with.js");
require("core-js/modules/es.string.from-code-point.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.string.pad-start.js");
require("core-js/modules/es.string.repeat.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.string.split.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/es.string.trim-end.js");
require("core-js/modules/es.typed-array.uint8-array.js");
require("core-js/modules/es.typed-array.copy-within.js");
require("core-js/modules/es.typed-array.every.js");
require("core-js/modules/es.typed-array.fill.js");
require("core-js/modules/es.typed-array.filter.js");
require("core-js/modules/es.typed-array.find.js");
require("core-js/modules/es.typed-array.find-index.js");
require("core-js/modules/es.typed-array.for-each.js");
require("core-js/modules/es.typed-array.from.js");
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
require("core-js/modules/esnext.global-this.js");
var _hmac = require("@noble/hashes/hmac");
var _sha = require("@noble/hashes/sha2");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var PII_MARKER_VERSION = exports.PII_MARKER_VERSION = 2;
var SECRET_MARKER_V2 = exports.SECRET_MARKER_V2 = '[Secret:v2]';
var BINARY_MARKER_V2 = exports.BINARY_MARKER_V2 = '[Binary:v2]';
var UNAVAILABLE_MARKER_V2 = exports.UNAVAILABLE_MARKER_V2 = '[Unavailable:v2]';
var PII_DEVICE_KEY_STORAGE_KEY = exports.PII_DEVICE_KEY_STORAGE_KEY = 'RC_MFE_PII_DEVICE_KEY';
var BASE32 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
var REF_BYTES = 8;
var REF_LENGTH = 13;
var TEXT_ENCODER = new TextEncoder();
var NUL_CHARACTER = String.fromCharCode(0);
var TYPE_PATTERN = /^[a-z0-9-]+$/;
var REF_PATTERN = /^[A-Z2-7]{13}$/;
var MARKER_CANDIDATE_REGEX = /\[(?:PII:v2;[a-z0-9-]+;[^;\]]*;[A-Z2-7]{13}|Secret:v2|Binary:v2|Restricted:v2;[a-z0-9-]+)\]/g;
var cachedDeviceKey;
var cachedDeviceKeySource;
var ephemeralDeviceKey;
var bytesToBase32 = function bytesToBase32(bytes) {
  var bits = 0;
  var value = 0;
  var output = '';
  var _iterator = _createForOfIteratorHelper(bytes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _byte = _step.value;
      value = value << 8 | _byte;
      bits += 8;
      while (bits >= 5) {
        output += BASE32[value >>> bits - 5 & 31];
        bits -= 5;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (bits > 0) {
    output += BASE32[value << 5 - bits & 31];
  }
  return output;
};
var encodeUtf8 = function encodeUtf8(value) {
  return TEXT_ENCODER.encode(value);
};
function encodePreview(value) {
  var output = '';
  for (var index = 0; index < value.length;) {
    var codePoint = value.codePointAt(index);
    var _char = String.fromCodePoint(codePoint);
    var codeUnits = codePoint > 0xffff ? 2 : 1;
    if (codePoint < 0x20 || codePoint === 0x7f || codePoint > 0x7e || _char === '%' || _char === ';' || _char === '[' || _char === ']') {
      var bytes = encodeUtf8(_char);
      var _iterator2 = _createForOfIteratorHelper(bytes),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _byte2 = _step2.value;
          output += "%".concat(_byte2.toString(16).toUpperCase().padStart(2, '0'));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } else {
      output += _char;
    }
    index += codeUnits;
  }
  return output;
}
function decodePreview(value) {
  if (value === '-') {
    return value;
  }
  var bytes = [];
  for (var index = 0; index < value.length;) {
    var _char2 = value[index];
    if (_char2 !== '%') {
      var code = _char2.charCodeAt(0);
      if (_char2 === ';' || _char2 === '[' || _char2 === ']' || code < 0x20 || code > 0x7e) {
        return undefined;
      }
      bytes.push(code);
      index += 1;
      continue;
    }
    var hex = value.slice(index + 1, index + 3);
    if (!/^[0-9A-Fa-f]{2}$/.test(hex)) {
      return undefined;
    }
    bytes.push(parseInt(hex, 16));
    index += 3;
  }
  try {
    return new TextDecoder('utf-8', {
      fatal: true
    }).decode(Uint8Array.from(bytes));
  } catch (_unused) {
    return undefined;
  }
}
function createPiiDeviceKeyBytes() {
  var _globalThis$crypto;
  var bytes = new Uint8Array(32);
  if ((_globalThis$crypto = globalThis.crypto) !== null && _globalThis$crypto !== void 0 && _globalThis$crypto.getRandomValues) {
    globalThis.crypto.getRandomValues(bytes);
    return bytes;
  }

  // ponytail: Math.random fallback only when Web Crypto missing (tests / odd hosts)
  for (var i = 0; i < bytes.length; i += 1) {
    bytes[i] = Math.floor(Math.random() * 256);
  }
  return bytes;
}
var bytesToHex = function bytesToHex(bytes) {
  return Array.from(bytes, function (_byte3) {
    return _byte3.toString(16).padStart(2, '0');
  }).join('');
};
var hexToBytes = function hexToBytes(hex) {
  if (!/^[0-9a-fA-F]+$/.test(hex) || hex.length % 2 !== 0) {
    return undefined;
  }
  var bytes = new Uint8Array(hex.length / 2);
  for (var i = 0; i < bytes.length; i += 1) {
    bytes[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
  }
  return bytes;
};
function resetPiiDeviceKeyForTests() {
  cachedDeviceKey = undefined;
  cachedDeviceKeySource = undefined;
  ephemeralDeviceKey = undefined;
}

/** Install the installation key (window → SharedWorker sync, tests). */
function setPiiDeviceKey(key) {
  if (key.length !== 32) {
    return;
  }
  cachedDeviceKey = key;
  cachedDeviceKeySource = 'persistent';
  ephemeralDeviceKey = undefined;
}
function setPiiDeviceKeyForTests(key) {
  setPiiDeviceKey(key);
}
function setPiiDeviceKeyFromHex(hex) {
  var bytes = hexToBytes(hex);
  if (!bytes || bytes.length !== 32) {
    return false;
  }
  setPiiDeviceKey(bytes);
  return true;
}

/** Hex form for same-origin SharedWorker transport. Never log this value. */
function getPiiDeviceKeyHex() {
  return bytesToHex(ensurePiiDeviceKey().key);
}
function getPiiDeviceKeySource() {
  return cachedDeviceKeySource;
}
function ensurePiiDeviceKey(options) {
  if (options !== null && options !== void 0 && options.key) {
    setPiiDeviceKey(options.key);
    return {
      key: options.key,
      source: 'persistent'
    };
  }
  if (cachedDeviceKey && cachedDeviceKeySource) {
    return {
      key: cachedDeviceKey,
      source: cachedDeviceKeySource
    };
  }
  try {
    var _globalThis$localStor;
    var storage = (options === null || options === void 0 ? void 0 : options.storage) === undefined ? (_globalThis$localStor = globalThis.localStorage) !== null && _globalThis$localStor !== void 0 ? _globalThis$localStor : null : options.storage;
    if (storage) {
      var existing = storage.getItem(PII_DEVICE_KEY_STORAGE_KEY);
      var parsed = existing ? hexToBytes(existing) : undefined;
      if (parsed && parsed.length === 32) {
        setPiiDeviceKey(parsed);
        return {
          key: parsed,
          source: 'persistent'
        };
      }
      var created = createPiiDeviceKeyBytes();
      storage.setItem(PII_DEVICE_KEY_STORAGE_KEY, bytesToHex(created));
      setPiiDeviceKey(created);
      return {
        key: created,
        source: 'persistent'
      };
    }
  } catch (_unused2) {
    // fall through to ephemeral
  }
  if (!ephemeralDeviceKey) {
    ephemeralDeviceKey = createPiiDeviceKeyBytes();
  }
  cachedDeviceKey = ephemeralDeviceKey;
  cachedDeviceKeySource = 'ephemeral';
  return {
    key: ephemeralDeviceKey,
    source: 'ephemeral'
  };
}
function buildPiiReference(type, exactLoggedValue, deviceKey) {
  var payload = encodeUtf8("".concat(type).concat(NUL_CHARACTER).concat(exactLoggedValue));
  var digest = (0, _hmac.hmac)(_sha.sha256, deviceKey, payload);
  return bytesToBase32(digest.subarray(0, REF_BYTES)).slice(0, REF_LENGTH);
}
function restrictedMarker(type) {
  return "[Restricted:v2;".concat(type, "]");
}
function correlatableMarker(type, preview, exactLoggedValue, deviceKey) {
  var encodedPreview = preview === '-' ? '-' : encodePreview(preview);
  var ref = buildPiiReference(type, exactLoggedValue, deviceKey);
  return "[PII:v2;".concat(type, ";").concat(encodedPreview, ";").concat(ref, "]");
}
var isCanonicalPreview = function isCanonicalPreview(preview) {
  if (preview === '-') {
    return true;
  }
  var decoded = decodePreview(preview);
  if (decoded === undefined) {
    return false;
  }
  return encodePreview(decoded) === preview;
};
var isValidClassPreview = function isValidClassPreview(type, encodedPreview) {
  if (!isCanonicalPreview(encodedPreview)) {
    return false;
  }
  var preview = encodedPreview === '-' ? '-' : decodePreview(encodedPreview);
  if (preview === undefined) {
    return false;
  }
  switch (type) {
    case 'ipv4':
    case 'ipv6':
    case 'mac':
      return preview === '-';
    case 'email':
      return preview === '-' || preview.includes('@') && preview.includes('*');
    case 'phone':
      return preview === '-' || preview.includes('*') && /\d/.test(preview);
    case 'person-name':
      return preview === '-' || /^[A-Z]\.(?: [A-Z]\.)*$/.test(preview);
    case 'username':
    case 'user-id':
      return preview === '-' || preview.includes('*');
    case 'access-token':
    case 'refresh-token':
    case 'authorization-code':
    case 'jwt':
      return preview === '-' || preview.includes('*');
    default:
      return false;
  }
};
function isCanonicalPiiMarker(value) {
  if (value === SECRET_MARKER_V2 || value === BINARY_MARKER_V2) {
    return true;
  }
  var restricted = /^\[Restricted:v2;([a-z0-9-]+)\]$/.exec(value);
  if (restricted) {
    return TYPE_PATTERN.test(restricted[1]);
  }
  var correlatable = /^\[PII:v2;([a-z0-9-]+);([^;]*);([A-Z2-7]{13})\]$/.exec(value);
  if (!correlatable) {
    return false;
  }
  var _correlatable = _slicedToArray(correlatable, 4),
    type = _correlatable[1],
    preview = _correlatable[2],
    ref = _correlatable[3];
  return TYPE_PATTERN.test(type) && REF_PATTERN.test(ref) && isValidClassPreview(type, preview);
}

/** Windows-safe archive path marker: letters, digits, `_` only inside token. */
var FILENAME_SAFE_MARKER_REGEX = /__PII_V2_[A-Z0-9_]+__/g;
var toFilenameType = function toFilenameType(type) {
  return type.toUpperCase().replace(/-/g, '_');
};

/**
 * Convert a canonical content marker into `__PII_V2_<TYPE>[_<REF>]__`.
 * Content markers (`:`, `*`, brackets) are illegal in Windows filenames.
 */
function toFilenameSafePiiMarker(marker) {
  if (marker === SECRET_MARKER_V2) {
    return '__PII_V2_SECRET__';
  }
  if (marker === BINARY_MARKER_V2) {
    return '__PII_V2_BINARY__';
  }
  var restricted = /^\[Restricted:v2;([a-z0-9-]+)\]$/.exec(marker);
  if (restricted && TYPE_PATTERN.test(restricted[1])) {
    return "__PII_V2_".concat(toFilenameType(restricted[1]), "__");
  }
  var correlatable = /^\[PII:v2;([a-z0-9-]+);([^;]*);([A-Z2-7]{13})\]$/.exec(marker);
  if (correlatable && TYPE_PATTERN.test(correlatable[1]) && REF_PATTERN.test(correlatable[3]) && isValidClassPreview(correlatable[1], correlatable[2])) {
    return "__PII_V2_".concat(toFilenameType(correlatable[1]), "_").concat(correlatable[3], "__");
  }
  return undefined;
}
function isCanonicalFilenameSafePiiMarker(value) {
  if (value === '__PII_V2_SECRET__') {
    return true;
  }
  var withRef = /^__PII_V2_([A-Z0-9_]+)_([A-Z2-7]{13})__$/.exec(value);
  if (withRef) {
    return REF_PATTERN.test(withRef[2]);
  }
  var typeOnly = /^__PII_V2_([A-Z0-9_]+)__$/.exec(value);
  return Boolean(typeOnly && typeOnly[1].length > 0);
}

/** Replace canonical content markers with filename-safe path markers. */
function replaceContentMarkersWithFilenameSafe(value) {
  return value.replace(MARKER_CANDIDATE_REGEX, function (candidate) {
    var _toFilenameSafePiiMar;
    if (!isCanonicalPiiMarker(candidate)) {
      return candidate;
    }
    return (_toFilenameSafePiiMar = toFilenameSafePiiMarker(candidate)) !== null && _toFilenameSafePiiMar !== void 0 ? _toFilenameSafePiiMar : candidate;
  });
}

/** Idempotent: leave existing filename-safe markers untouched. */
function preserveFilenameSafeMarkers(value, transform) {
  var slots = [];
  var protectedValue = value.replace(FILENAME_SAFE_MARKER_REGEX, function (candidate) {
    if (!isCanonicalFilenameSafePiiMarker(candidate)) {
      return candidate;
    }
    var index = slots.length;
    slots.push(candidate);
    return "".concat(NUL_CHARACTER, "FN").concat(index).concat(NUL_CHARACTER);
  });
  var transformed = transform(protectedValue);
  var slotPattern = new RegExp("".concat(NUL_CHARACTER, "FN(\\d+)").concat(NUL_CHARACTER), 'g');
  return transformed.replace(slotPattern, function (_match, index) {
    var _slots$Number;
    return (_slots$Number = slots[Number(index)]) !== null && _slots$Number !== void 0 ? _slots$Number : _match;
  });
}

// Nested preserveCanonicalMarkers calls must not share `\0PIIn\0` slots —
// an inner restore would overwrite outer placeholders (e.g. URL path markers
// becoming `[Secret:v2]` after a nested maskQuery/userinfo pass).
var preserveCanonicalMarkerCallId = 0;
function preserveCanonicalMarkers(value, transform) {
  var callId = preserveCanonicalMarkerCallId += 1;
  var slots = [];
  var protectedValue = value.replace(MARKER_CANDIDATE_REGEX, function (candidate) {
    if (!isCanonicalPiiMarker(candidate)) {
      return candidate;
    }
    var index = slots.length;
    slots.push(candidate);
    return "".concat(NUL_CHARACTER, "PII").concat(callId, ".").concat(index).concat(NUL_CHARACTER);
  });
  var transformed = transform(protectedValue);
  var slotPattern = new RegExp("".concat(NUL_CHARACTER, "PII").concat(callId, "\\.(\\d+)").concat(NUL_CHARACTER), 'g');
  return transformed.replace(slotPattern, function (_match, index) {
    var _slots$Number2;
    return (_slots$Number2 = slots[Number(index)]) !== null && _slots$Number2 !== void 0 ? _slots$Number2 : _match;
  });
}
function previewUserId(value) {
  var length = value.length;
  if (length < 6) {
    return '-';
  }
  if (length <= 7) {
    return "".concat(value[0], "***").concat(value[length - 1]);
  }
  return "".concat(value.slice(0, 3), "***").concat(value.slice(-3));
}
function previewUsername(value) {
  if (value.length < 6) {
    return '-';
  }
  return "".concat(value.slice(0, 2), "***").concat(value.slice(-2));
}
function previewEmail(value) {
  var at = value.indexOf('@');
  if (at <= 0 || at === value.length - 1) {
    return '-';
  }
  var output = '';
  for (var i = 0; i < value.length; i += 1) {
    var _char3 = value[i];
    if (_char3 === '@' || _char3 === '.') {
      output += _char3;
      continue;
    }
    if (i < 2 || i >= value.length - 2) {
      output += _char3;
    } else {
      output += '*';
    }
  }
  return output;
}
var isAsciiDigit = function isAsciiDigit(character) {
  return character >= '0' && character <= '9';
};
var splitPhoneExtension = function splitPhoneExtension(value) {
  var trimmed = value.trimEnd();
  var digitStart = trimmed.length;
  while (digitStart > 0 && isAsciiDigit(trimmed[digitStart - 1])) {
    digitStart -= 1;
  }
  if (digitStart === trimmed.length) {
    return {
      main: value,
      extension: undefined
    };
  }
  var markerEnd = digitStart;
  while (markerEnd > 0 && /\s/.test(trimmed[markerEnd - 1])) {
    markerEnd -= 1;
  }
  var lowerValue = trimmed.toLowerCase();
  var marker = ['extension', 'ext.', 'ext', 'x'].find(function (candidate) {
    return lowerValue.endsWith(candidate, markerEnd);
  });
  if (!marker) {
    return {
      main: value,
      extension: undefined
    };
  }
  var extensionStart = markerEnd - marker.length;
  while (extensionStart > 0 && /\s/.test(value[extensionStart - 1])) {
    extensionStart -= 1;
  }
  return {
    main: value.slice(0, extensionStart),
    extension: trimmed.slice(digitStart)
  };
};
function previewPhone(value) {
  var _splitPhoneExtension = splitPhoneExtension(value),
    main = _splitPhoneExtension.main,
    extension = _splitPhoneExtension.extension;
  var digitIndex = 0;
  var digits = main.replace(/\D/g, '');
  if (digits.length <= 4) {
    return '-';
  }
  var maskedMain = '';
  var _iterator3 = _createForOfIteratorHelper(main),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _char4 = _step3.value;
      if (/\d/.test(_char4)) {
        if (digitIndex < 2 || digitIndex >= digits.length - 2) {
          maskedMain += _char4;
        } else {
          maskedMain += '*';
        }
        digitIndex += 1;
      } else {
        maskedMain += _char4;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  if (!extension) {
    return maskedMain;
  }
  if (extension.length === 1) {
    return "".concat(maskedMain, " ext *");
  }
  return "".concat(maskedMain, " ext ").concat(extension[0], "*").concat(extension[extension.length - 1]);
}
function previewPersonName(value) {
  var parts = value.trim().split(/\s+/).filter(Boolean).map(function (part) {
    return part[0];
  }).filter(function (_char5) {
    return /[A-Za-z]/.test(_char5);
  });
  if (parts.length === 0) {
    return '-';
  }
  return parts.map(function (_char6) {
    return "".concat(_char6.toUpperCase(), ".");
  }).join(' ');
}
function previewToken(value) {
  if (value.length < 16) {
    return '-';
  }
  var isJwt = value.split('.').length === 3;
  if (isJwt) {
    return value.split('.').map(function (segment) {
      if (segment.length < 16) {
        return '*'.repeat(Math.min(segment.length, 8)) || '-';
      }
      if (segment.length < 32) {
        return "".concat(segment.slice(0, 4), "***").concat(segment.slice(-4));
      }
      return "".concat(segment.slice(0, 5), "***").concat(segment.slice(-5));
    }).join('.');
  }
  if (value.length < 32) {
    return "".concat(value.slice(0, 4), "***").concat(value.slice(-4));
  }
  return "".concat(value.slice(0, 5), "***").concat(value.slice(-5));
}
function redactUserId(value, deviceKey) {
  return correlatableMarker('user-id', previewUserId(value), value, deviceKey);
}
function redactEmail(value, deviceKey) {
  return correlatableMarker('email', previewEmail(value), value, deviceKey);
}
function redactPhone(value, deviceKey) {
  if (value.replace(/\D/g, '').length <= 4) {
    return SECRET_MARKER_V2;
  }
  return correlatableMarker('phone', previewPhone(value), value, deviceKey);
}
function redactUsername(value, deviceKey) {
  return correlatableMarker('username', previewUsername(value), value, deviceKey);
}
var hasNonAsciiChar = function hasNonAsciiChar(value) {
  for (var index = 0; index < value.length; index += 1) {
    if (value.charCodeAt(index) > 0x7f) {
      return true;
    }
  }
  return false;
};
function redactPersonName(value, deviceKey) {
  // Decision 34: non-ASCII names prefer reference-only over escaped initials
  var preview = hasNonAsciiChar(value) ? '-' : previewPersonName(value);
  return correlatableMarker('person-name', preview, value, deviceKey);
}
function redactIpv4(value, deviceKey) {
  return correlatableMarker('ipv4', '-', value, deviceKey);
}
function redactIpv6(value, deviceKey) {
  return correlatableMarker('ipv6', '-', value, deviceKey);
}
function redactMac(value, deviceKey) {
  return correlatableMarker('mac', '-', value, deviceKey);
}
function redactAccessToken(value, deviceKey) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'access-token';
  if (isCanonicalPiiMarker(value)) {
    return value;
  }
  return correlatableMarker(type, previewToken(value), value, deviceKey);
}
function redactSecret() {
  return SECRET_MARKER_V2;
}
function redactRestricted(type) {
  return restrictedMarker(type);
}
//# sourceMappingURL=piiV2.js.map

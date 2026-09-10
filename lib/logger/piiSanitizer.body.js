"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBinaryBodyValue = void 0;
exports.sanitizeRequestBodyString = sanitizeRequestBodyString;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.every.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.index-of.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.array-buffer.constructor.js");
require("core-js/modules/es.array-buffer.is-view.js");
require("core-js/modules/es.array-buffer.slice.js");
require("core-js/modules/es.data-view.js");
require("core-js/modules/es.date.to-json.js");
require("core-js/modules/es.map.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.ends-with.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.string.match.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.string.split.js");
require("core-js/modules/es.string.starts-with.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/web.url-search-params.js");
var _piiV = require("./piiV2");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var MAX_INLINE_BODY_LENGTH = 1024 * 1024;
var isBinaryBodyValue = exports.isBinaryBodyValue = function isBinaryBodyValue(value) {
  return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer || typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView(value) || typeof Blob !== 'undefined' && value instanceof Blob;
};
var isOpaqueBodyString = function isOpaqueBodyString(value) {
  if (value.length > MAX_INLINE_BODY_LENGTH) {
    return true;
  }
  for (var index = 0; index < value.length; index += 1) {
    var code = value.charCodeAt(index);
    if (code >= 0 && code <= 8 || code === 11 || code === 12 || code >= 14 && code <= 31 || code === 127 || code === 0xfffd) {
      return true;
    }
  }
  return false;
};
var getMultipartDelimiter = function getMultipartDelimiter(value) {
  var _exec;
  var firstLine = (_exec = /^--([^\r\n]+)/.exec(value)) === null || _exec === void 0 ? void 0 : _exec[1];
  if (!firstLine) {
    return undefined;
  }
  var boundary = firstLine.endsWith('--') ? firstLine.slice(0, -2) : firstLine;
  var delimiter = "--".concat(boundary);
  var firstDelimiterIndex = value.indexOf(delimiter);
  return firstDelimiterIndex !== -1 && value.indexOf(delimiter, firstDelimiterIndex + delimiter.length) !== -1 ? delimiter : undefined;
};
var sanitizeRFC5987Filename = function sanitizeRFC5987Filename(value, context, sanitizer) {
  return value.replace(/(\bfilename\*\s*=\s*)(?:"([^"]*)"|([^;\s]+))/gi, function (_match, prefix, quotedValue, tokenValue) {
    var encodedValue = quotedValue !== null && quotedValue !== void 0 ? quotedValue : tokenValue;
    var encodedParts = /^([^']*)'([^']*)'(.*)$/.exec(encodedValue);
    if (!encodedParts) {
      return "".concat(prefix).concat(quotedValue !== undefined ? '"' : '').concat(_piiV.SECRET_MARKER_V2).concat(quotedValue !== undefined ? '"' : '');
    }
    try {
      var filename = decodeURIComponent(encodedParts[3]);
      var sanitizedFilename = sanitizer.sanitizeLogTextWithContext(filename, context);
      var replacement = "".concat(encodedParts[1], "'").concat(encodedParts[2], "'").concat(encodeURIComponent(sanitizedFilename));
      return "".concat(prefix).concat(quotedValue !== undefined ? '"' : '').concat(replacement).concat(quotedValue !== undefined ? '"' : '');
    } catch (_unused) {
      return "".concat(prefix).concat(quotedValue !== undefined ? '"' : '').concat(_piiV.SECRET_MARKER_V2).concat(quotedValue !== undefined ? '"' : '');
    }
  });
};
var shouldRedactMultipartHeader = function shouldRedactMultipartHeader(headerName, context, sanitizer) {
  var normalizedName = sanitizer.normalizeKey(headerName);
  return context.maskKeys.has(normalizedName) || context.sensitiveKeys.has(normalizedName) || normalizedName.includes('authorization') || normalizedName.includes('apikey') || normalizedName.includes('cookie') || normalizedName.includes('token');
};
var sanitizeMultipartHeaderValue = function sanitizeMultipartHeaderValue(headerName, rawValue, context, sanitizer) {
  var _rawValue$match$, _rawValue$match;
  var leadingWhitespace = (_rawValue$match$ = (_rawValue$match = rawValue.match(/^\s*/)) === null || _rawValue$match === void 0 ? void 0 : _rawValue$match[0]) !== null && _rawValue$match$ !== void 0 ? _rawValue$match$ : '';
  var value = rawValue.slice(leadingWhitespace.length);
  if (shouldRedactMultipartHeader(headerName, context, sanitizer)) {
    return "".concat(leadingWhitespace).concat(_piiV.SECRET_MARKER_V2);
  }
  var sanitizedValue = sanitizer.sanitizeLogTextWithContext(value, context);
  return "".concat(leadingWhitespace).concat(headerName === 'content-disposition' ? sanitizeRFC5987Filename(sanitizedValue, context, sanitizer) : sanitizedValue);
};
var parseMultipartHeaders = function parseMultipartHeaders(headers, context, sanitizer) {
  var values = new Map();
  var sanitizedLines = headers.split(/(\r?\n)/).map(function (line) {
    if (/^\r?\n$/.test(line)) {
      return line;
    }
    var separatorIndex = line.indexOf(':');
    if (separatorIndex <= 0) {
      return sanitizer.sanitizeLogTextWithContext(line, context);
    }
    var name = line.slice(0, separatorIndex).trim().toLowerCase();
    var rawValue = line.slice(separatorIndex + 1);
    if (!values.has(name)) {
      values.set(name, rawValue.trim());
    }
    return "".concat(line.slice(0, separatorIndex + 1)).concat(sanitizeMultipartHeaderValue(name, rawValue, context, sanitizer));
  });
  return {
    values: values,
    sanitized: sanitizedLines.join('')
  };
};
var getMultipartFieldName = function getMultipartFieldName(contentDisposition) {
  var _match$;
  var match = /(?:^|;)\s*name\s*=\s*(?:"([^"]*)"|([^;\s]+))/i.exec(contentDisposition);
  return (_match$ = match === null || match === void 0 ? void 0 : match[1]) !== null && _match$ !== void 0 ? _match$ : match === null || match === void 0 ? void 0 : match[2];
};
var hasMultipartFilename = function hasMultipartFilename(contentDisposition) {
  return /(?:^|;)\s*filename(?:\*)?\s*=/i.test(contentDisposition);
};
var getTrailingLineBreak = function getTrailingLineBreak(value) {
  if (value.endsWith('\r\n')) return '\r\n';
  if (value.endsWith('\n')) return '\n';
  return '';
};
var isMultipartBinaryPart = function isMultipartBinaryPart(_ref) {
  var contentDisposition = _ref.contentDisposition,
    contentTransferEncoding = _ref.contentTransferEncoding,
    contentType = _ref.contentType;
  return hasMultipartFilename(contentDisposition) || /base64/i.test(contentTransferEncoding) || !contentType.startsWith('application/json') && !contentType.startsWith('application/x-www-form-urlencoded') && Boolean(contentType) && !contentType.startsWith('text/');
};
function sanitizeMultipartJsonBody(_ref2) {
  var body = _ref2.body,
    bodyKey = _ref2.bodyKey,
    fieldName = _ref2.fieldName,
    context = _ref2.context,
    currentDepth = _ref2.currentDepth,
    scope = _ref2.scope,
    sanitizer = _ref2.sanitizer;
  try {
    var parsed = JSON.parse(body);
    var key = fieldName !== null && fieldName !== void 0 ? fieldName : bodyKey;
    if (parsed !== null && _typeof(parsed) === 'object') {
      return JSON.stringify(sanitizer.sanitizeFieldValue({
        key: key,
        value: parsed,
        context: context,
        currentDepth: currentDepth,
        scope: scope
      }));
    }
    return sanitizer.sanitizeFieldValue({
      key: key,
      value: parsed,
      context: context,
      currentDepth: currentDepth + 1,
      scope: scope
    });
  } catch (_unused2) {
    return fieldName ? sanitizer.sanitizeFieldValue({
      key: fieldName,
      value: body,
      context: context,
      currentDepth: currentDepth + 1,
      scope: scope
    }) : sanitizer.sanitizeLogTextWithContext(body, context);
  }
}
function sanitizeMultipartPartBody(context) {
  var body = context.body,
    bodyKey = context.bodyKey,
    contentDisposition = context.contentDisposition,
    contentTransferEncoding = context.contentTransferEncoding,
    contentType = context.contentType,
    fieldName = context.fieldName,
    sanitizeContext = context.context,
    currentDepth = context.currentDepth,
    scope = context.scope,
    sanitizer = context.sanitizer;
  if (isMultipartBinaryPart({
    contentDisposition: contentDisposition,
    contentTransferEncoding: contentTransferEncoding,
    contentType: contentType
  })) {
    return _piiV.BINARY_MARKER_V2;
  }
  if (contentType.startsWith('application/json')) {
    return sanitizeMultipartJsonBody(context);
  }
  if (contentType.startsWith('application/x-www-form-urlencoded')) {
    return sanitizeRequestBodyString({
      value: body,
      context: sanitizeContext,
      currentDepth: currentDepth,
      scope: scope,
      bodyKey: bodyKey,
      sanitizer: sanitizer
    });
  }
  if (fieldName) {
    return sanitizer.sanitizeFieldValue({
      key: fieldName,
      value: body,
      context: sanitizeContext,
      currentDepth: currentDepth + 1,
      scope: scope
    });
  }
  return sanitizer.sanitizeLogTextWithContext(body, sanitizeContext);
}
function sanitizeMultipartPart(_ref3) {
  var _parsedHeaders$values, _parsedHeaders$values2, _parsedHeaders$values3;
  var part = _ref3.part,
    isFirstPart = _ref3.isFirstPart,
    context = _ref3.context,
    currentDepth = _ref3.currentDepth,
    scope = _ref3.scope,
    bodyKey = _ref3.bodyKey,
    sanitizer = _ref3.sanitizer;
  if (isFirstPart || part.trim() === '--') {
    return part;
  }
  var separator = /\r?\n\r?\n/.exec(part);
  if (!separator) {
    return sanitizer.sanitizeLogTextWithContext(part, context);
  }
  var headers = part.slice(0, separator.index);
  var bodyWithTrailingLineBreak = part.slice(separator.index + separator[0].length);
  var trailingLineBreak = getTrailingLineBreak(bodyWithTrailingLineBreak);
  var body = trailingLineBreak ? bodyWithTrailingLineBreak.slice(0, -trailingLineBreak.length) : bodyWithTrailingLineBreak;
  var parsedHeaders = parseMultipartHeaders(headers, context, sanitizer);
  var contentDisposition = (_parsedHeaders$values = parsedHeaders.values.get('content-disposition')) !== null && _parsedHeaders$values !== void 0 ? _parsedHeaders$values : '';
  var contentType = ((_parsedHeaders$values2 = parsedHeaders.values.get('content-type')) !== null && _parsedHeaders$values2 !== void 0 ? _parsedHeaders$values2 : '').toLowerCase();
  var fieldName = getMultipartFieldName(contentDisposition);
  var sanitizedBody = sanitizeMultipartPartBody({
    body: body,
    bodyKey: bodyKey,
    contentDisposition: contentDisposition,
    contentTransferEncoding: (_parsedHeaders$values3 = parsedHeaders.values.get('content-transfer-encoding')) !== null && _parsedHeaders$values3 !== void 0 ? _parsedHeaders$values3 : '',
    contentType: contentType,
    fieldName: fieldName,
    context: context,
    currentDepth: currentDepth,
    scope: scope,
    sanitizer: sanitizer
  });
  return "".concat(parsedHeaders.sanitized).concat(separator[0]).concat(String(sanitizedBody)).concat(trailingLineBreak);
}
function sanitizeMultipartBody(_ref4) {
  var value = _ref4.value,
    delimiter = _ref4.delimiter,
    context = _ref4.context,
    currentDepth = _ref4.currentDepth,
    scope = _ref4.scope,
    bodyKey = _ref4.bodyKey,
    sanitizer = _ref4.sanitizer;
  var sanitizedParts = value.split(delimiter).map(function (part, index) {
    return sanitizeMultipartPart({
      part: part,
      isFirstPart: index === 0,
      context: context,
      currentDepth: currentDepth,
      scope: scope,
      bodyKey: bodyKey,
      sanitizer: sanitizer
    });
  });
  return sanitizedParts.join(delimiter);
}
var isLikelyUrlEncodedBody = function isLikelyUrlEncodedBody(value) {
  var trimmed = value.trim();
  if (!trimmed || /[\r\n]/.test(trimmed)) {
    return false;
  }
  return trimmed.split('&').every(function (part) {
    return part.indexOf('=') > 0;
  });
};
var formatSanitizedFormValue = function formatSanitizedFormValue(value) {
  if (typeof value !== 'string') {
    return encodeURIComponent(String(value));
  }
  return (0, _piiV.isCanonicalPiiMarker)(value) ? value : encodeURIComponent(value);
};
function sanitizeRequestBodyString(_ref5) {
  var value = _ref5.value,
    context = _ref5.context,
    currentDepth = _ref5.currentDepth,
    scope = _ref5.scope,
    _ref5$bodyKey = _ref5.bodyKey,
    bodyKey = _ref5$bodyKey === void 0 ? 'requestBody' : _ref5$bodyKey,
    sanitizer = _ref5.sanitizer;
  if (value.length > MAX_INLINE_BODY_LENGTH) {
    return _piiV.BINARY_MARKER_V2;
  }
  var trimmed = value.trim();
  var multipartDelimiter = getMultipartDelimiter(value);
  if (multipartDelimiter) {
    return sanitizeMultipartBody({
      value: value,
      delimiter: multipartDelimiter,
      context: context,
      currentDepth: currentDepth,
      scope: scope,
      bodyKey: bodyKey,
      sanitizer: sanitizer
    });
  }
  if (isOpaqueBodyString(value)) {
    return _piiV.BINARY_MARKER_V2;
  }
  if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
    try {
      var parsed = JSON.parse(trimmed);
      if (parsed !== null && _typeof(parsed) === 'object') {
        return JSON.stringify(sanitizer.sanitizeData(parsed, context, currentDepth + 1, bodyKey, scope));
      }
    } catch (_unused3) {
      // Fall through to text sanitization for malformed JSON.
    }
  }
  if (isLikelyUrlEncodedBody(value)) {
    var params = new URLSearchParams(value);
    var sanitizedParts = [];
    params.forEach(function (fieldValue, key) {
      var sanitizedValue = sanitizer.sanitizeFieldValue({
        key: key,
        value: fieldValue,
        context: context,
        currentDepth: currentDepth + 1,
        scope: scope
      });
      sanitizedParts.push("".concat(encodeURIComponent(sanitizer.sanitizeLabelText(key, context)), "=").concat(formatSanitizedFormValue(sanitizedValue)));
    });
    return sanitizedParts.join('&');
  }
  return sanitizer.sanitizeLogTextWithContext(value, context);
}
//# sourceMappingURL=piiSanitizer.body.js.map

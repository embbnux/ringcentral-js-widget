"use strict";

require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.macKeys = exports.isUriSchemeStart = exports.isUriSchemeCharacter = exports.ipKeys = exports.hashIdentifierKeys = exports.findUriUserinfoEnd = exports.findUriSchemeStart = exports.escapeRegExp = exports.emailKeys = exports.doubleQuotedTextKeyValueRegex = exports.diagnosticSafeKeys = exports.diagnosticAllowedKeys = exports.defaultSensitiveKeys = exports.defaultMaskKeys = exports.creditCardKeys = exports.createTextFieldKeys = exports.createScopedTextFieldKeys = exports.createKeySet = exports.addressScopedTextFilterKeys = exports.addressLeafKeys = exports.addressContextUnquotedTextKeyValueRegex = exports.addressContextTextKeyPattern = exports.addressContextSingleQuotedTextKeyValueRegex = exports.addressContextDoubleQuotedTextKeyValueRegex = exports.addressContainerTextKeyValueRegex = exports.addressContainerTextKeyPattern = exports.addressContainerKeys = exports.VIA_RECEIVED = exports.UUID_SEGMENT_REGEX = exports.USERNAME_WORDS = exports.URL_VALUE_KEYS = exports.URL_PATH_ID_PARENT_WORDS = exports.URI_SCHEME_CHARACTERS = exports.TRACK_EVENT_PROPS_PARENT_KEY = exports.TRACK_EVENT_PROPS_INDEX = exports.TRACK_EVENT_NAME_INDEX = exports.TRACK_EVENT_LOG_NAME = exports.TRACK_EVENT_LABEL_KEYS = exports.TOKEN_WORDS = exports.TEXT_SANITIZE_FIELD_KEYS = exports.TEXT_FIELD_KEYS = exports.SSN_WORDS = exports.SSN_HYPHENATED_REGEX = exports.SIP_VIA = exports.SIP_URI = exports.SIP_STRING_RULES = exports.SIP_PHONE_RULES = exports.SENSITIVE_WORDS = exports.SEND_SIP_MESSAGE_FLAG = exports.SECRET_WORDS = exports.SDP_IPV6 = exports.SDP_IPV4 = exports.SDP_CANDIDATE = exports.RECV_SIP_MESSAGE_FLAG = exports.QUERY_PARAM_SAFE_ENUM_VALUES = exports.QUERY_PARAM_REGEX = exports.QUERY_PARAM_OPERATIONAL_KEYS = exports.QUERY_PARAM_NUMERIC_KEYS = exports.PII_SCOPED_TEXT_HASH_WORDS = exports.PII_SCOPED_TEXT_HASH_KEYS = exports.PII_SCOPED_TEXT_FILTER_WORDS = exports.PII_SCOPED_TEXT_FILTER_KEYS = exports.PII_CONTAINER_WORDS = exports.PHONE_WORDS = exports.PHONE_REGEX = exports.PHONE_CANDIDATE_REGEX = exports.PERSON_NAME_WORDS = exports.NUMERIC_ID_SEGMENT_REGEX = exports.NORMALIZED_KEY_CACHE_LIMIT = exports.MAX_SANITIZE_NODES = exports.MASK_WORDS = exports.MAC_ADDRESS_REGEX = exports.JWT_COMPACT_SIGNAL_REGEX = exports.JWT_COMPACT_REGEX = exports.IPV6_CANDIDATE_REGEX = exports.IPV4_REGEX = exports.IPV4_CANDIDATE_REGEX = exports.HASH_IDENTIFIER_WORDS = exports.EXTRA_SENSITIVE_WORDS = exports.EXTRA_MASK_WORDS = exports.EMPTY_WORDS = exports.EMAIL_WORDS = exports.EMAIL_REGEX = exports.DIGIT_REGEX = exports.DIAGNOSTIC_SAFE_KEYS = exports.DIAGNOSTIC_ALLOWED_WORDS = exports.DEFAULT_SANITIZE_OPTIONS = exports.DEFAULT_LOG_HASH_SALT = exports.DEFAULT_DEPTH = exports.CREDIT_CARD_WORDS = exports.CREDIT_CARD_CANDIDATE_REGEX = exports.COOKIE_HEADER_SIGNAL_REGEX = exports.COOKIE_HEADER_REGEX = exports.BEARER_TOKEN_SIGNAL_REGEX = exports.BEARER_TOKEN_REGEX = exports.ADDRESS_SCOPED_TEXT_FILTER_KEYS = exports.ADDRESS_SCOPED_SENSITIVE_WORDS = exports.ADDRESS_LEAF_WORDS = exports.ADDRESS_CONTAINER_WORDS = void 0;
exports.maskUriUserinfo = maskUriUserinfo;
exports.usernameKeys = exports.urlPathIdParentSegments = exports.unquotedTextKeyValueTerminator = exports.unquotedTextKeyValueRegex = exports.tokenKeys = exports.toSnakeKey = exports.textKeyPrefix = exports.textKeyPattern = exports.ssnKeys = exports.singleQuotedTextKeyValueRegex = exports.shouldUseAsDirectSensitiveKey = exports.secretKeys = exports.piiScopedTextHashKeys = exports.piiScopedTextFilterKeys = exports.piiContainerKeys = exports.phoneKeys = exports.personNameKeys = exports.normalizedKeyCache = exports.normalizeKey = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.flat-map.js");
require("core-js/modules/es.array.from.js");
require("core-js/modules/es.array.index-of.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.map.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.array.sort.js");
require("core-js/modules/es.array.unscopables.flat-map.js");
require("core-js/modules/es.date.now.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.map.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.constructor.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.set.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/web.dom-collections.iterator.js");
var _piiV = require("./piiV2");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var DEFAULT_LOG_HASH_SALT = exports.DEFAULT_LOG_HASH_SALT = "".concat(Date.now().toString(36), "-").concat(Math.random().toString(36).slice(2));
var NORMALIZED_KEY_CACHE_LIMIT = exports.NORMALIZED_KEY_CACHE_LIMIT = 500;
var EMPTY_WORDS = exports.EMPTY_WORDS = [];
var DEFAULT_SANITIZE_OPTIONS = exports.DEFAULT_SANITIZE_OPTIONS = {};

// original source: `@ringcentral/fiji-core-foundation`
var SENSITIVE_WORDS = exports.SENSITIVE_WORDS = ['psw', 'password', 'meetingPassword', 'meetingPasswordPSTN', 'meetingPasswordMasked', 'dialInPassword', 'first_name', 'last_name', 'hostName', 'joinUri', 'phoneNumber', 'customerName', 'street', 'city', 'street2', 'state', 'stateIsoCode', 'stateName', 'country', 'countryIsoCode', 'countryName', 'zoom_password', 'h323_password', 'firstName', 'lastName', 'name', 'formattedPhoneNumber', 'calendarIds', 'zip', 'emergencyName', 'from', 'fromName', 'to', 'toName', 'coverPageText', '__customCoverOptions', 'customCoverOptions', 'display_name', 'rc_phone_numbers', 'sanitized_rc_first_name', 'sanitized_rc_last_name', 'homepage', 'department', 'job_title', 'formattedNumber', 'location', 'locationCode', 'summary', 'userName', 'username', 'quoted_post', 'reminder_text', 'message_text', 'companyName', 'dialInNumber', 'headshotUrl', 'primaryNumber', 'displayName', 'avatarUrl', 'avatar', 'avatar_url', 'macAddress', 'fromNum', 'toNum', 'targetNumber'];
var MASK_WORDS = exports.MASK_WORDS = ['access_token', 'refresh_token', 'bearer', 'Bearer', 'Token', 'token', 't', 'tokenUrl', 'Authorization', 'authorization', 'X-RC-Access-Token-Data', 'syncToken', 'email', 'subscriberEmail', 'searchable_email', 'email_friendly_abbreviation', 'submitterEmail', 'calendarId', 'subject', 'discoveryToken', 'join_url', 'text', 'rc_access_token_data', 'X-Authorization', 'x-authorization', 'title', 'domainKey', 'clientId', 'siteKey', 'appKey', 'apiKey', 'appId'];
var EXTRA_SENSITIVE_WORDS = exports.EXTRA_SENSITIVE_WORDS = ['phone', 'phones', 'number', 'numbers', 'phoneNumbers', 'sourcePhoneNumber', 'fromNumber', 'toNumber', 'selectedFromNumber', 'fallbackFromNumber', 'availableFromNumbers', 'callerId', 'callerIdNumber', 'fromTag', 'toTag', 'callerIdName', 'businessPhone', 'mobilePhone', 'extensionNumber', 'emailAddress', 'address', 'postalCode', 'sipInfo', 'contact', 'contacts', 'matchedContact', 'zendeskContacts', 'conversation', 'message', 'originalMessage', 'body', 'notes', 'transcript', 'transcriptions', 'comment', 'comments', 'description', 'call', 'activeCall', 'callData', 'callLogData', 'callerIdByFeature', 'taskInfo', 'prevTask', 'requestBody', 'accountConfigurationResponse', 'extensionInfo', 'disabledGroupMessage', 'entity', 'entities', 'record', 'records', 'ticket', 'tickets', 'cookie', 'cookies', 'setCookie'];
var EXTRA_MASK_WORDS = exports.EXTRA_MASK_WORDS = ['accessToken', 'refreshToken', 'idToken', 'jwt', 'secret', 'clientSecret', 'xAuthorization', 'wsAccessToken', 'endpointId', 'url', 'uri', 'href', 'callbackUri', 'baseUri', 'basicURL', 'sdkUrl', 'contentUri', 'contentUrl', 'recordingUri', 'recordingUrl', 'wsUrl', 'workerUrl', 'workletUrl', 'accountId', 'rcAccountId', 'crmAccountId', 'userId', 'ownerId', 'extensionId', 'userBrandId', 'brandId', 'subscriberId', 'agentId', 'sessionId', 'telephonySessionId', 'conversationId', 'conversationLogId', 'messageId', 'requestMessageId', 'partyId', 'crmTaskId', 'whoId', 'whatId', 'latestEntityId', 'rcMappedTeamsId', 'currentHubId', 'contextId', 'connectionId', 'ticketId', 'assetId', 'deviceId', 'newDeviceId', 'previousDeviceId', 'pluginId', 'widgetId', 'widgetIds', 'tabId', 'windowId', 'currentWindowId', 'identify'];

// Raised well above the old depth of 5 so real API responses keep their shape.
// A separate node budget caps total work so a pathological payload cannot hang
// the synchronous logger pipeline.
// ponytail: scalar-length budget deferred until a measured huge-string problem;
// circular refs are already bounded by `seen` and recursion by DEFAULT_DEPTH.
var DEFAULT_DEPTH = exports.DEFAULT_DEPTH = 40;
var MAX_SANITIZE_NODES = exports.MAX_SANITIZE_NODES = 100000;
var toSnakeKey = exports.toSnakeKey = function toSnakeKey(key) {
  return key.replace(/([a-z0-9])([A-Z])/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
};
var createTextFieldKeys = exports.createTextFieldKeys = function createTextFieldKeys(keys) {
  return Array.from(new Set(keys.flatMap(function (key) {
    var snakeKey = toSnakeKey(key);
    return [key, snakeKey, snakeKey.replace(/_/g, '-')];
  }))).sort(function (left, right) {
    return right.length - left.length;
  });
};
var createScopedTextFieldKeys = exports.createScopedTextFieldKeys = function createScopedTextFieldKeys(containerWords, fieldWords) {
  return containerWords.flatMap(function (container) {
    return fieldWords.flatMap(function (field) {
      return ["".concat(container, ".").concat(field), "".concat(container, "_").concat(field)];
    });
  });
};
var TEXT_FIELD_KEYS = exports.TEXT_FIELD_KEYS = createTextFieldKeys([].concat(SENSITIVE_WORDS, MASK_WORDS, EXTRA_SENSITIVE_WORDS, EXTRA_MASK_WORDS));
var DIAGNOSTIC_SAFE_KEYS = exports.DIAGNOSTIC_SAFE_KEYS = ['name', 'state', 'country', 'countryIsoCode', 'countryName', 'from', 'to', 'location', 'locationCode', 'message', 'originalMessage', 'brandId', 'assetId', 'baseUri', 'url', 'uri', 'href'];
var PII_CONTAINER_WORDS = exports.PII_CONTAINER_WORDS = ['contact', 'contacts', 'matchedContact', 'zendeskContacts', 'user', 'users', 'owner', 'owners', 'agent', 'agents', 'extension', 'extensions', 'profile', 'profiles', 'userProfile', 'userProfiles', 'conversation', 'call', 'activeCall', 'callData', 'callLogData', 'callerIdByFeature', 'taskInfo', 'prevTask', 'accountConfigurationResponse', 'extensionInfo', 'entity', 'entities', 'record', 'records', 'ticket', 'tickets'];
var ADDRESS_CONTAINER_WORDS = exports.ADDRESS_CONTAINER_WORDS = ['address', 'addresses', 'emergencyAddress', 'homeAddress', 'businessAddress', 'billingAddress', 'serviceAddress', 'shippingAddress'];
var ADDRESS_SCOPED_SENSITIVE_WORDS = exports.ADDRESS_SCOPED_SENSITIVE_WORDS = ['id', 'street', 'street2', 'city', 'state', 'stateIsoCode', 'stateName', 'country', 'countryIsoCode', 'countryName', 'zip', 'postalCode', 'extensionNumber', 'emergencyName', 'name', 'location', 'locationCode', 'address', 'uri', 'url', 'href'];
var SECRET_WORDS = exports.SECRET_WORDS = ['psw', 'password', 'meetingPassword', 'meetingPasswordPSTN', 'meetingPasswordMasked', 'dialInPassword', 'zoom_password', 'h323_password', 'secret', 'clientSecret', 'apiKey', 'appKey', 'siteKey', 'domainKey', 'cookie', 'cookies', 'setCookie'];
var TOKEN_WORDS = exports.TOKEN_WORDS = ['access_token', 'refresh_token', 'bearer', 'Bearer', 'Token', 'token', 'tokenUrl', 'Authorization', 'authorization', 'X-RC-Access-Token-Data', 'syncToken', 'discoveryToken', 'rc_access_token_data', 'X-Authorization', 'x-authorization', 'accessToken', 'refreshToken', 'idToken', 'jwt', 'xAuthorization', 'wsAccessToken'];
var PHONE_WORDS = exports.PHONE_WORDS = ['phone', 'phones', 'phoneNumber', 'phoneNumbers', 'formattedPhoneNumber', 'formattedNumber', 'sourcePhoneNumber', 'fromNumber', 'toNumber', 'selectedFromNumber', 'fallbackFromNumber', 'availableFromNumbers', 'callerId', 'callerIdNumber', 'businessPhone', 'mobilePhone', 'primaryNumber', 'dialInNumber', 'rc_phone_numbers', 'fromNum', 'toNum', 'targetNumber'];
var PERSON_NAME_WORDS = exports.PERSON_NAME_WORDS = ['first_name', 'last_name', 'firstName', 'lastName', 'customerName', 'hostName', 'fromName', 'toName', 'callerIdName', 'emergencyName', 'display_name', 'displayName', 'sanitized_rc_first_name', 'sanitized_rc_last_name', 'companyName'];
var USERNAME_WORDS = exports.USERNAME_WORDS = ['userName', 'username'];
// Unambiguous address leaves only. state/country stay address-scoped so
// diagnostic FSM/geo labels remain readable outside address containers.
var ADDRESS_LEAF_WORDS = exports.ADDRESS_LEAF_WORDS = ['street', 'street2', 'city', 'zip', 'postalCode', 'address'];
var EMAIL_WORDS = exports.EMAIL_WORDS = ['email', 'subscriberEmail', 'searchable_email', 'email_friendly_abbreviation', 'submitterEmail', 'emailAddress'];
// Free-text SSN only matches hyphenated US form (see Phase 3 lock). Bare
// 9-digit runs stay phone/ID — apps rarely log SSNs; intl nationals collide.
var SSN_WORDS = exports.SSN_WORDS = ['ssn', 'socialSecurityNumber', 'socialSecurity'];
var CREDIT_CARD_WORDS = exports.CREDIT_CARD_WORDS = ['creditCard', 'creditCardNumber', 'cardNumber', 'ccNumber'];
var HASH_IDENTIFIER_WORDS = exports.HASH_IDENTIFIER_WORDS = ['endpointId', 'clientId', 'accountId', 'rcAccountId', 'crmAccountId', 'userId', 'ownerId', 'extensionId', 'userBrandId', 'subscriberId', 'agentId', 'sessionId', 'telephonySessionId', 'conversationId', 'conversationLogId', 'contactId', 'messageId', 'requestMessageId', 'partyId', 'crmTaskId', 'whoId', 'whatId', 'latestEntityId', 'rcMappedTeamsId', 'currentHubId', 'contextId', 'connectionId', 'groupId', 'desktopSessionId', 'ticketId', 'deviceId', 'newDeviceId', 'previousDeviceId', 'pluginId', 'widgetId', 'widgetIds', 'tabId', 'windowId', 'currentWindowId', 'identify'];
var URL_VALUE_KEYS = exports.URL_VALUE_KEYS = new Set(['url', 'uri', 'href', 'callbackUri', 'baseUri', 'basicURL', 'sdkUrl', 'contentUri', 'contentUrl', 'recordingUri', 'recordingUrl', 'wsUrl', 'workerUrl', 'workletUrl'].map(function (word) {
  return word.toLowerCase();
}));
var URL_PATH_ID_PARENT_WORDS = exports.URL_PATH_ID_PARENT_WORDS = ['account', 'accounts', 'extension', 'extensions', 'user', 'users', 'contact', 'contacts', 'device', 'devices', 'message-store', 'messageStore', 'recording', 'recordings', 'conversation', 'conversations', 'session', 'sessions', 'party', 'parties', 'ticket', 'tickets', 'address', 'addresses'];
var DIAGNOSTIC_ALLOWED_WORDS = exports.DIAGNOSTIC_ALLOWED_WORDS = [].concat(DIAGNOSTIC_SAFE_KEYS, ['notes', 'details', 'reason', 'status', 'statusCode', 'code', 'type', 'kind', 'category', 'module', 'serviceName', 'action', 'actionName', 'event', 'eventName', 'feature', 'value', 'enabled', 'isSilent', 'count', 'totalCount', 'descriptorCount', 'lazyDescriptorCount', 'lazyDescriptorDownloadedCount', 'modulesInstanceCount', 'modulesActiveCount', 'phoneContactCount', 'possibleNumberCount', 'formattedNumberCount', 'DBCnt']);
var PII_SCOPED_TEXT_FILTER_WORDS = exports.PII_SCOPED_TEXT_FILTER_WORDS = ['name', 'from', 'to', 'text', 'title', 'subject', 'message'];
var PII_SCOPED_TEXT_HASH_WORDS = exports.PII_SCOPED_TEXT_HASH_WORDS = ['id'];
var PII_SCOPED_TEXT_FILTER_KEYS = exports.PII_SCOPED_TEXT_FILTER_KEYS = createScopedTextFieldKeys(PII_CONTAINER_WORDS, PII_SCOPED_TEXT_FILTER_WORDS);
var PII_SCOPED_TEXT_HASH_KEYS = exports.PII_SCOPED_TEXT_HASH_KEYS = createScopedTextFieldKeys(PII_CONTAINER_WORDS, PII_SCOPED_TEXT_HASH_WORDS);
var ADDRESS_SCOPED_TEXT_FILTER_KEYS = exports.ADDRESS_SCOPED_TEXT_FILTER_KEYS = createScopedTextFieldKeys(ADDRESS_CONTAINER_WORDS, ADDRESS_SCOPED_SENSITIVE_WORDS);
var EMAIL_REGEX = exports.EMAIL_REGEX = /[A-Z0-9._%+-]{1,254}@[A-Z0-9.-]{1,253}\.[A-Z]{2,63}/gi;
var IPV4_REGEX = exports.IPV4_REGEX = /\b(?:(?:25[0-5]|2[0-4]\d|1?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|1?\d?\d)\b/g;
var PHONE_REGEX = exports.PHONE_REGEX = /(?:\+?\d[\d ().-]{6,}\d)/g;
var QUERY_PARAM_REGEX = exports.QUERY_PARAM_REGEX = /([?&#])([^=?&#\s"'<>]+)=([^&#\s"'<>{}]*)/g;
var QUERY_PARAM_OPERATIONAL_KEYS = exports.QUERY_PARAM_OPERATIONAL_KEYS = new Set(['status', 'page', 'perpage', 'limit', 'offset', 'sort', 'order', 'direction', 'type']);
var QUERY_PARAM_NUMERIC_KEYS = exports.QUERY_PARAM_NUMERIC_KEYS = new Set(['page', 'perpage', 'limit', 'offset']);
var QUERY_PARAM_SAFE_ENUM_VALUES = exports.QUERY_PARAM_SAFE_ENUM_VALUES = new Map([['status', new Set(['active', 'completed', 'disabled', 'enabled', 'failed', 'inactive', 'ok', 'pending', 'success'])], ['direction', new Set(['asc', 'desc', 'inbound', 'outbound'])], ['order', new Set(['asc', 'desc'])], ['sort', new Set(['asc', 'desc', 'created', 'date', 'name', 'time', 'updated'])], ['type', new Set(['all', 'audio', 'fax', 'inbound', 'outbound', 'sms', 'video', 'voice'])]]);
var COOKIE_HEADER_REGEX = exports.COOKIE_HEADER_REGEX = /(^|[\r\n])((?:set-cookie|cookie)\s*:\s*)[^\r\n]*/gi;
var BEARER_TOKEN_REGEX = exports.BEARER_TOKEN_REGEX = /Bearer\s+([-A-Z0-9._~+/=]+)/gi;
var BEARER_TOKEN_SIGNAL_REGEX = exports.BEARER_TOKEN_SIGNAL_REGEX = /Bearer\s/i;
// Compact JWT: header is base64url(`{"…`) → typically starts with eyJ.
var JWT_COMPACT_REGEX = exports.JWT_COMPACT_REGEX = /\beyJ[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\b/g;
var JWT_COMPACT_SIGNAL_REGEX = exports.JWT_COMPACT_SIGNAL_REGEX = /eyJ[A-Za-z0-9_-]+\./;
// Phase 3 lock: hyphenated US SSN only in free text (not bare 9 digits).
var SSN_HYPHENATED_REGEX = exports.SSN_HYPHENATED_REGEX = /(?<!\d)\d{3}-\d{2}-\d{4}(?!\d)/g;
var CREDIT_CARD_CANDIDATE_REGEX = exports.CREDIT_CARD_CANDIDATE_REGEX = /(?<!\d)(?:\d[ -]*?){13,19}(?!\d)/g;
var MAC_ADDRESS_REGEX = exports.MAC_ADDRESS_REGEX = /\b(?:[0-9a-fA-F]{2}[:-]){5}[0-9a-fA-F]{2}\b|\b(?:[0-9a-fA-F]{4}\.){2}[0-9a-fA-F]{4}\b/g;
// Loose IPv6 span finder; each match is validated before redaction.
var IPV6_CANDIDATE_REGEX = exports.IPV6_CANDIDATE_REGEX = /[0-9a-fA-F:.]+(?:%\w+)?/g;
var DIGIT_REGEX = exports.DIGIT_REGEX = /\d/;
var PHONE_CANDIDATE_REGEX = exports.PHONE_CANDIDATE_REGEX = /(?:\+?\d[\d ().-]{6,}\d)/;
var IPV4_CANDIDATE_REGEX = exports.IPV4_CANDIDATE_REGEX = /\d{1,3}\.\d{1,3}/;
var COOKIE_HEADER_SIGNAL_REGEX = exports.COOKIE_HEADER_SIGNAL_REGEX = /(^|[\r\n])(?:set-cookie|cookie)\s*:/i;
var UUID_SEGMENT_REGEX = exports.UUID_SEGMENT_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
var NUMERIC_ID_SEGMENT_REGEX = exports.NUMERIC_ID_SEGMENT_REGEX = /^\d{3,}$/;
var SEND_SIP_MESSAGE_FLAG = exports.SEND_SIP_MESSAGE_FLAG = /sending WebSocket | sending tcp/i;
var RECV_SIP_MESSAGE_FLAG = exports.RECV_SIP_MESSAGE_FLAG = /received WebSocket | received tcp socket/i;
var SIP_URI = exports.SIP_URI = 'sip:';
var SIP_VIA = exports.SIP_VIA = 'Via:';
var VIA_RECEIVED = exports.VIA_RECEIVED = 'received=';
var SDP_CANDIDATE = exports.SDP_CANDIDATE = 'a=candidate:';
var SDP_IPV4 = exports.SDP_IPV4 = ' IP4';
var SDP_IPV6 = exports.SDP_IPV6 = ' IP6';
var TRACK_EVENT_LOG_NAME = exports.TRACK_EVENT_LOG_NAME = 'track event';
var TRACK_EVENT_NAME_INDEX = exports.TRACK_EVENT_NAME_INDEX = 1;
var TRACK_EVENT_PROPS_INDEX = exports.TRACK_EVENT_PROPS_INDEX = 2;
var TRACK_EVENT_PROPS_PARENT_KEY = exports.TRACK_EVENT_PROPS_PARENT_KEY = 'trackProps';
var TRACK_EVENT_LABEL_KEYS = exports.TRACK_EVENT_LABEL_KEYS = new Set(['message', 'location']);
var URI_SCHEME_CHARACTERS = exports.URI_SCHEME_CHARACTERS = 'abcdefghijklmnopqrstuvwxyz0123456789+.-';
var isUriSchemeCharacter = exports.isUriSchemeCharacter = function isUriSchemeCharacter(character) {
  return URI_SCHEME_CHARACTERS.includes(character.toLowerCase());
};
var isUriSchemeStart = exports.isUriSchemeStart = function isUriSchemeStart(character) {
  return character >= 'a' && character <= 'z';
};
var findUriSchemeStart = exports.findUriSchemeStart = function findUriSchemeStart(value, separatorIndex) {
  var schemeStart = separatorIndex - 1;
  while (schemeStart >= 0 && isUriSchemeCharacter(value[schemeStart])) {
    schemeStart -= 1;
  }
  schemeStart += 1;
  while (schemeStart < separatorIndex && !isUriSchemeStart(value[schemeStart].toLowerCase())) {
    schemeStart += 1;
  }
  return schemeStart === separatorIndex ? -1 : schemeStart;
};
var findUriUserinfoEnd = exports.findUriUserinfoEnd = function findUriUserinfoEnd(value, userInfoStart) {
  var atIndex = userInfoStart;
  while (atIndex < value.length) {
    var character = value[atIndex];
    if (character === '@') return atIndex;
    if (character === '/' || /\s/.test(character) || character === '"' || character === "'" || character === '<' || character === '>') {
      return -1;
    }
    atIndex += 1;
  }
  return atIndex;
};
function maskUriUserinfo(value) {
  var result = '';
  var copyStart = 0;
  var searchStart = 0;
  var separatorIndex = value.indexOf('://', searchStart);
  while (separatorIndex >= 0) {
    var schemeStart = findUriSchemeStart(value, separatorIndex);
    if (schemeStart < 0) {
      searchStart = separatorIndex + 3;
      separatorIndex = value.indexOf('://', searchStart);
      continue;
    }
    var userInfoStart = separatorIndex + 3;
    var atIndex = findUriUserinfoEnd(value, userInfoStart);
    if (atIndex <= userInfoStart) {
      searchStart = userInfoStart;
      separatorIndex = value.indexOf('://', searchStart);
      continue;
    }
    result += value.slice(copyStart, userInfoStart) + _piiV.SECRET_MARKER_V2 + '@';
    copyStart = atIndex + 1;
    searchStart = copyStart;
    separatorIndex = value.indexOf('://', searchStart);
  }
  return copyStart === 0 ? value : result + value.slice(copyStart);
}
var SIP_STRING_RULES = exports.SIP_STRING_RULES = [/"([^"]+)" <sip:/, /"([^"]+)"<sip:/, /P-Asserted-Identity: "([^"]+)"/, /"password":{([^}]+)}/, /Phn="([^"]+)"/, /Nm="([^"]+)"/, /ToNm="([^"]+)"/, /callerIdName=([^;]+)/, /p-rc-source-ip: (.*)/];
var SIP_PHONE_RULES = exports.SIP_PHONE_RULES = [/"phoneNumber": "([^}]+)"/, /umber":"([^"]+)"/, /Phn="([^"]+)"/, /ToPhn="([^"]+)"/, /To="([^"]+)"/, /From="([^"]+)"/];
var normalizedKeyCache = exports.normalizedKeyCache = new Map();
var normalizeKey = exports.normalizeKey = function normalizeKey(key) {
  var cachedValue = normalizedKeyCache.get(key);
  if (cachedValue !== undefined) {
    return cachedValue;
  }
  var normalizedValue = key.replace(/[-_\s]/g, '').toLowerCase();
  if (normalizedKeyCache.size >= NORMALIZED_KEY_CACHE_LIMIT) {
    normalizedKeyCache.clear();
  }
  normalizedKeyCache.set(key, normalizedValue);
  return normalizedValue;
};
var createKeySet = exports.createKeySet = function createKeySet(words) {
  return new Set(words.map(function (word) {
    return normalizeKey(word);
  }));
};
var diagnosticSafeKeys = exports.diagnosticSafeKeys = createKeySet([].concat(DIAGNOSTIC_SAFE_KEYS));
var piiContainerKeys = exports.piiContainerKeys = createKeySet([].concat(PII_CONTAINER_WORDS));
var addressContainerKeys = exports.addressContainerKeys = createKeySet([].concat(ADDRESS_CONTAINER_WORDS));
var secretKeys = exports.secretKeys = createKeySet([].concat(SECRET_WORDS));
var tokenKeys = exports.tokenKeys = createKeySet([].concat(TOKEN_WORDS));
var emailKeys = exports.emailKeys = createKeySet([].concat(EMAIL_WORDS));
var phoneKeys = exports.phoneKeys = createKeySet([].concat(PHONE_WORDS));
var personNameKeys = exports.personNameKeys = createKeySet([].concat(PERSON_NAME_WORDS));
var usernameKeys = exports.usernameKeys = createKeySet([].concat(USERNAME_WORDS));
var addressLeafKeys = exports.addressLeafKeys = createKeySet([].concat(ADDRESS_LEAF_WORDS));
var ssnKeys = exports.ssnKeys = createKeySet([].concat(SSN_WORDS));
var creditCardKeys = exports.creditCardKeys = createKeySet([].concat(CREDIT_CARD_WORDS));
var hashIdentifierKeys = exports.hashIdentifierKeys = createKeySet([].concat(HASH_IDENTIFIER_WORDS));
var urlPathIdParentSegments = exports.urlPathIdParentSegments = createKeySet([].concat(URL_PATH_ID_PARENT_WORDS));
var diagnosticAllowedKeys = exports.diagnosticAllowedKeys = createKeySet(_toConsumableArray(DIAGNOSTIC_ALLOWED_WORDS));
var piiScopedTextFilterKeys = exports.piiScopedTextFilterKeys = createKeySet(_toConsumableArray(PII_SCOPED_TEXT_FILTER_KEYS));
var piiScopedTextHashKeys = exports.piiScopedTextHashKeys = createKeySet(_toConsumableArray(PII_SCOPED_TEXT_HASH_KEYS));
var addressScopedTextFilterKeys = exports.addressScopedTextFilterKeys = createKeySet(_toConsumableArray(ADDRESS_SCOPED_TEXT_FILTER_KEYS));
var macKeys = exports.macKeys = createKeySet(['macAddress', 'mac']);
var ipKeys = exports.ipKeys = createKeySet(['ip', 'ipv4', 'ipv6', 'relatedAddress']);
var shouldUseAsDirectSensitiveKey = exports.shouldUseAsDirectSensitiveKey = function shouldUseAsDirectSensitiveKey(key) {
  var normalizedKey = normalizeKey(key);
  return !diagnosticSafeKeys.has(normalizedKey) && !piiContainerKeys.has(normalizedKey);
};
var defaultSensitiveKeys = exports.defaultSensitiveKeys = createKeySet([].concat(_toConsumableArray(SENSITIVE_WORDS.filter(shouldUseAsDirectSensitiveKey)), _toConsumableArray(EXTRA_SENSITIVE_WORDS.filter(shouldUseAsDirectSensitiveKey))));
var defaultMaskKeys = exports.defaultMaskKeys = createKeySet([].concat(MASK_WORDS, EXTRA_MASK_WORDS).filter(function (key) {
  return shouldUseAsDirectSensitiveKey(key) && !hashIdentifierKeys.has(normalizeKey(key)) && !URL_VALUE_KEYS.has(normalizeKey(key));
}));
var escapeRegExp = exports.escapeRegExp = function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};
var TEXT_SANITIZE_FIELD_KEYS = exports.TEXT_SANITIZE_FIELD_KEYS = createTextFieldKeys([].concat(_toConsumableArray(TEXT_FIELD_KEYS), ADDRESS_CONTAINER_WORDS, SECRET_WORDS, TOKEN_WORDS, EMAIL_WORDS, SSN_WORDS, CREDIT_CARD_WORDS, HASH_IDENTIFIER_WORDS, ['macAddress', 'mac', 'ip', 'ipv4', 'ipv6', 'relatedAddress'], _toConsumableArray(PII_SCOPED_TEXT_FILTER_KEYS), _toConsumableArray(PII_SCOPED_TEXT_HASH_KEYS), _toConsumableArray(ADDRESS_SCOPED_TEXT_FILTER_KEYS), _toConsumableArray(Array.from(URL_VALUE_KEYS))).filter(function (key) {
  var normalizedKey = normalizeKey(key);
  return shouldUseAsDirectSensitiveKey(key) || secretKeys.has(normalizedKey) || tokenKeys.has(normalizedKey) || emailKeys.has(normalizedKey) || ssnKeys.has(normalizedKey) || creditCardKeys.has(normalizedKey) || hashIdentifierKeys.has(normalizedKey) || macKeys.has(normalizedKey) || ipKeys.has(normalizedKey) || URL_VALUE_KEYS.has(normalizedKey);
}));
var textKeyPattern = exports.textKeyPattern = TEXT_SANITIZE_FIELD_KEYS.map(escapeRegExp).join('|');
var textKeyPrefix = exports.textKeyPrefix = '(^|[^A-Za-z0-9_$-])';
var doubleQuotedTextKeyValueRegex = exports.doubleQuotedTextKeyValueRegex = new RegExp("".concat(textKeyPrefix, "([\"']?)(").concat(textKeyPattern, ")\\2(\\s*[:=]\\s*)\"((?:\\\\.|[^\"\\\\])*)\""), 'gi');
var singleQuotedTextKeyValueRegex = exports.singleQuotedTextKeyValueRegex = new RegExp("".concat(textKeyPrefix, "([\"']?)(").concat(textKeyPattern, ")\\2(\\s*[:=]\\s*)'((?:\\\\.|[^'\\\\])*)'"), 'gi');
var unquotedTextKeyValueTerminator = exports.unquotedTextKeyValueTerminator = '(?=\\s+["\']?[A-Za-z][A-Za-z0-9_$.-]*["\']?\\s*[:=]|[,;&\\r\\n}]|$)';
var unquotedTextKeyValueRegex = exports.unquotedTextKeyValueRegex = new RegExp("".concat(textKeyPrefix, "([\"']?)(").concat(textKeyPattern, ")\\2(\\s*[:=]\\s*)(?!\\s*[\"'])([^,;\\r\\n}\"'}]*?)").concat(unquotedTextKeyValueTerminator), 'gi');
var addressContextTextKeyPattern = exports.addressContextTextKeyPattern = createTextFieldKeys([].concat(ADDRESS_CONTAINER_WORDS, ADDRESS_SCOPED_SENSITIVE_WORDS)).map(escapeRegExp).join('|');
var addressContainerTextKeyPattern = exports.addressContainerTextKeyPattern = createTextFieldKeys([].concat(ADDRESS_CONTAINER_WORDS)).map(escapeRegExp).join('|');
var addressContainerTextKeyValueRegex = exports.addressContainerTextKeyValueRegex = new RegExp("".concat(textKeyPrefix, "([\"']?)(").concat(addressContainerTextKeyPattern, ")\\2\\s*[:=]"), 'i');
var addressContextDoubleQuotedTextKeyValueRegex = exports.addressContextDoubleQuotedTextKeyValueRegex = new RegExp("".concat(textKeyPrefix, "([\"']?)(").concat(addressContextTextKeyPattern, ")\\2(\\s*[:=]\\s*)\"((?:\\\\.|[^\"\\\\])*)\""), 'gi');
var addressContextSingleQuotedTextKeyValueRegex = exports.addressContextSingleQuotedTextKeyValueRegex = new RegExp("".concat(textKeyPrefix, "([\"']?)(").concat(addressContextTextKeyPattern, ")\\2(\\s*[:=]\\s*)'((?:\\\\.|[^'\\\\])*)'"), 'gi');
var addressContextUnquotedTextKeyValueRegex = exports.addressContextUnquotedTextKeyValueRegex = new RegExp("".concat(textKeyPrefix, "([\"']?)(").concat(addressContextTextKeyPattern, ")\\2(\\s*[:=]\\s*)(?!\\s*[\"'])([^,;\\r\\n}\"'}]*?)").concat(unquotedTextKeyValueTerminator), 'gi');
//# sourceMappingURL=piiSanitizer.constants.js.map

"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveMeetingOperationNotification = exports.meetingOperationMessageSource = exports.meetingOperationMessageKey = exports.meetingOperationErrorReason = exports.meetingOperationErrorHandling = exports.isMeetingOperationError = exports.getMeetingOperationLocale = exports.createMeetingOperationError = exports.MEETING_OPERATION_ERROR_KIND = void 0;
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.is-array.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var MEETING_OPERATION_ERROR_KIND = exports.MEETING_OPERATION_ERROR_KIND = 'meeting-operation-error';
var meetingOperationErrorHandling = exports.meetingOperationErrorHandling = {
  result: 'result',
  toast: 'toast'
};
var meetingOperationErrorReason = exports.meetingOperationErrorReason = {
  availability: 'availability',
  deleted: 'deleted',
  insufficientPermissions: 'insufficient-permissions',
  internal: 'internal',
  validation: 'validation'
};
var meetingOperationMessageSource = exports.meetingOperationMessageSource = {
  connectivity: 'connectivity',
  meeting: 'meeting',
  rcVideo: 'rc-video'
};
var meetingOperationMessageKey = exports.meetingOperationMessageKey = {
  durationIncorrect: 'durationIncorrect',
  emptyTopic: 'emptyTopic',
  insufficientPermissions: 'insufficientPermissions',
  internalError: 'internalError',
  invalidMeetingInfo: 'invalidMeetingInfo',
  meetingIsDeleted: 'meetingIsDeleted',
  noPassword: 'noPassword',
  offline: 'offline'
};

/** Serializable notification copy or a descriptor localized by the UI owner. */

/** Resolves both legacy raw messages and caller-localized notification descriptors. */
var resolveMeetingOperationNotification = exports.resolveMeetingOperationNotification = function resolveMeetingOperationNotification(notification, translate) {
  return 'message' in notification ? notification.message : translate(notification.messageKey, notification.messageParams);
};

/** Serializable failure returned when the initiating client owns error UI. */

/** Controls success notification behavior and ownership of operation failures. */

/** Resolves a serializable caller locale while preserving the legacy invitation option. */
var getMeetingOperationLocale = exports.getMeetingOperationLocale = function getMeetingOperationLocale(options, fallbackLocale) {
  var _ref, _options$locale;
  return (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : options === null || options === void 0 ? void 0 : options.invitationLocale) !== null && _ref !== void 0 ? _ref : fallbackLocale;
};

/** Controls lookup error notification behavior and ownership of lookup failures. */

/** Controls whether delete failures are shown by the service or returned to the caller. */

var createMeetingOperationError = exports.createMeetingOperationError = function createMeetingOperationError(reason, notifications) {
  return {
    kind: MEETING_OPERATION_ERROR_KIND,
    notifications: notifications,
    reason: reason
  };
};
var isMeetingOperationError = exports.isMeetingOperationError = function isMeetingOperationError(value) {
  return _typeof(value) === 'object' && value !== null && value.kind === MEETING_OPERATION_ERROR_KIND && Array.isArray(value.notifications);
};
//# sourceMappingURL=meetingOperationResult.js.map

"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.conversationLogIdentityFunction = conversationLogIdentityFunction;
exports.getConversationLogIdFromMessage = getConversationLogIdFromMessage;
exports.getLogId = getLogId;
require("core-js/modules/es.array.concat.js");
function getLogId(_ref) {
  var conversationId = _ref.conversationId,
    date = _ref.date;
  return "".concat(conversationId, "/").concat(date);
}
function getConversationLogIdFromMessage(message, formatDateTime) {
  if (!message) {
    return null;
  }
  var conversationId = message.conversationId,
    creationTime = message.creationTime;
  if (!conversationId || creationTime == null) {
    return null;
  }
  var date = formatDateTime({
    type: 'date',
    utcTimestamp: creationTime
  });
  if (!date) {
    return null;
  }
  return getLogId({
    conversationId: String(conversationId),
    date: date
  });
}
function conversationLogIdentityFunction(conversation) {
  return conversation.conversationLogId;
}
//# sourceMappingURL=conversationLoggerHelper.js.map

"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isQueueHistoryCall = exports.addNumbersFromCall = exports.addIfNotExist = void 0;
require("core-js/modules/es.array.some.js");
require("core-js/modules/es.object.to-string.js");
var addIfNotExist = exports.addIfNotExist = function addIfNotExist(number, output, numberMap) {
  if (!numberMap[number]) {
    output.push(number);
    numberMap[number] = true;
  }
};

// NOTE:
// business logic for commons for now
// return phone number only.
var pickPhoneNumber = function pickPhoneNumber(phoneNumber, _extensionNumber) {
  return phoneNumber;
};
var addNumbersFromCall = exports.addNumbersFromCall = function addNumbersFromCall(output, numberMap) {
  return function (call) {
    var pickNumber = pickPhoneNumber;
    if (call.from && call.from.phoneNumber) {
      var number = pickNumber(call.from.phoneNumber, call.from.extensionNumber);
      addIfNotExist(number, output, numberMap);
    } else if (call.from && call.from.extensionNumber) {
      addIfNotExist(call.from.extensionNumber, output, numberMap);
    }
    if (call.to && call.to.phoneNumber) {
      var _number = pickNumber(call.to.phoneNumber, call.to.extensionNumber);
      addIfNotExist(_number, output, numberMap);
    } else if (call.to && call.to.extensionNumber) {
      addIfNotExist(call.to.extensionNumber, output, numberMap);
    }
  };
};
var isQueueHistoryCall = exports.isQueueHistoryCall = function isQueueHistoryCall(history) {
  return (history.toMatches || []).some(function (match) {
    return !!match.isCallQueueNumber;
  });
};
//# sourceMappingURL=callHistoryHelper.js.map

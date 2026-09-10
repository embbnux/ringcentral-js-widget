"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLatestExistCall = useLatestExistCall;
var _react = require("react");
/**
 * when info is exist, means the call be connected or connecting, so need to keep the call instance to avoid the blank page render
 */
function useLatestExistCall(info) {
  var latestActiveCallRef = (0, _react.useRef)();
  if (info) {
    if (info.call) {
      latestActiveCallRef.current = info.call;
    }
  } else {
    // when info not exist, means the call be ended and be closed
    latestActiveCallRef.current = undefined;
  }
  return latestActiveCallRef.current;
}
//# sourceMappingURL=useActiveCallInfoWithPreinsert.js.map

"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reloadRuntimeLocation = exports.getRuntimeLocation = void 0;
require("core-js/modules/esnext.global-this.js");
var getRuntimeLocation = exports.getRuntimeLocation = function getRuntimeLocation() {
  if (typeof window !== 'undefined' && window.location) {
    return window.location;
  }
  return globalThis.location;
};
var reloadRuntimeLocation = exports.reloadRuntimeLocation = function reloadRuntimeLocation() {
  var _getRuntimeLocation;
  (_getRuntimeLocation = getRuntimeLocation()) === null || _getRuntimeLocation === void 0 ? void 0 : _getRuntimeLocation.reload();
};
//# sourceMappingURL=browserLocation.js.map

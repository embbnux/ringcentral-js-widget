"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSetSinkIdUserGestureError = isSetSinkIdUserGestureError;
exports.isSinkIdPermissionError = isSinkIdPermissionError;
exports.patchSafariSetSinkId = patchSafariSetSinkId;
exports.setSinkIdSafely = setSinkIdSafely;
exports.shouldSetSinkId = shouldSetSinkId;
require("core-js/modules/es.function.name.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.get-own-property-descriptor.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/esnext.global-this.js");
var _utils = require("@ringcentral-integration/utils");
var DEFAULT_AUDIO_OUTPUT_DEVICE_ID = 'default';
// Mark the wrapped method so repeated Webphone instances do not stack patches.
var PATCHED_SET_SINK_ID = Symbol["for"]('ringcentral-integration.micro-phone.safariSetSinkIdPatch');
function shouldSetSinkId(mediaElement, sinkId) {
  if (!sinkId || typeof mediaElement.setSinkId !== 'function') {
    return false;
  }
  if (mediaElement.sinkId === sinkId) {
    return false;
  }
  return !(sinkId === DEFAULT_AUDIO_OUTPUT_DEVICE_ID && !mediaElement.sinkId);
}
function setSinkIdSafely(mediaElement, sinkId, onError) {
  if (!shouldSetSinkId(mediaElement, sinkId)) {
    return;
  }
  try {
    void Promise.resolve(mediaElement.setSinkId(sinkId))["catch"](function (error) {
      onError === null || onError === void 0 ? void 0 : onError(error);
    });
  } catch (error) {
    onError === null || onError === void 0 ? void 0 : onError(error);
  }
}
function isSinkIdPermissionError(error) {
  return error instanceof DOMException && error.name === 'NotAllowedError';
}

// Safari may expose setSinkId but reject non-user-gesture calls from DialPad setup.
function isSetSinkIdUserGestureError(error) {
  var _ref = error !== null && error !== void 0 ? error : {},
    name = _ref.name,
    message = _ref.message;
  return name === 'NotAllowedError' && /user gesture/i.test(String(message !== null && message !== void 0 ? message : ''));
}

// Patch the native API because Spring UI/Juno DialPad calls setSinkId directly.
function patchSafariSetSinkId() {
  if (!globalThis.document || !globalThis.navigator || !globalThis.HTMLMediaElement || !(0, _utils.isSafari)()) {
    return false;
  }
  var mediaPrototype = globalThis.HTMLMediaElement.prototype;
  if (!mediaPrototype) {
    return false;
  }
  var nativeSetSinkId = mediaPrototype.setSinkId;
  var setSinkIdDescriptor = Object.getOwnPropertyDescriptor(mediaPrototype, 'setSinkId');
  if (typeof nativeSetSinkId !== 'function' || nativeSetSinkId[PATCHED_SET_SINK_ID] ||
  // Some test/browser shims expose setSinkId as non-configurable; leave them untouched.
  (setSinkIdDescriptor === null || setSinkIdDescriptor === void 0 ? void 0 : setSinkIdDescriptor.configurable) === false) {
    return false;
  }
  var patchedSetSinkId = function setSinkId(sinkId) {
    try {
      return Promise.resolve(nativeSetSinkId.call(this, sinkId))["catch"](function (error) {
        if (isSetSinkIdUserGestureError(error)) {
          return undefined;
        }
        throw error;
      });
    } catch (error) {
      if (isSetSinkIdUserGestureError(error)) {
        return Promise.resolve(undefined);
      }
      throw error;
    }
  };
  Object.defineProperty(patchedSetSinkId, PATCHED_SET_SINK_ID, {
    value: true
  });
  Object.defineProperty(mediaPrototype, 'setSinkId', {
    configurable: true,
    writable: true,
    value: patchedSetSinkId
  });
  return true;
}
//# sourceMappingURL=setSinkId.js.map

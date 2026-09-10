"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerGuideDataListener = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.object.keys.js");
var _nextCore = require("@ringcentral-integration/next-core");
var _rxjs = require("rxjs");
var REQUEST_GUIDE_DATA = 'rc-guide-data';
var GUIDE_IFRAME_ID = 'userpilotIframeContainer';
var registerGuideDataListener = exports.registerGuideDataListener = function registerGuideDataListener() {
  return new _rxjs.Observable(function (subscriber) {
    var listener = function listener(event) {
      try {
        var _event$data, _event$data2, _event$data3, _event$data4, _event$data5;
        if (((_event$data = event.data) === null || _event$data === void 0 ? void 0 : _event$data.type) !== REQUEST_GUIDE_DATA) return;
        if (!event.source) {
          _nextCore.logger.warn('[UserpilotService] Ignore guide data request: no source', {
            origin: event.origin
          });
          return;
        }
        _nextCore.logger.log('[UserpilotService] Guide data request received', {
          origin: event.origin,
          payload: (_event$data2 = event.data) === null || _event$data2 === void 0 ? void 0 : _event$data2.payload,
          pointerEvent: (_event$data3 = event.data) === null || _event$data3 === void 0 ? void 0 : _event$data3.pointerEvent
        });
        var eventPayload = (_event$data4 = event.data) === null || _event$data4 === void 0 ? void 0 : _event$data4.payload;
        var container = document.getElementById(GUIDE_IFRAME_ID);
        var iframe = (container === null || container === void 0 ? void 0 : container.tagName) === 'IFRAME' ? container : container === null || container === void 0 ? void 0 : container.querySelector('iframe');
        var isFromGuideIframe = iframe && iframe.contentWindow === event.source;
        if (!isFromGuideIframe) {
          _nextCore.logger.warn('[UserpilotService] Ignore guide data request: source is not guide iframe', {
            origin: event.origin,
            hasContainer: !!container,
            hasIframe: !!iframe
          });
          return;
        }

        // Keep the blank guide iframe transparent and prevent it from blocking app interactions.
        var style = document.createElement('style');
        style.textContent = "#".concat(GUIDE_IFRAME_ID, " {\nbackground: transparent !important;\nbackground-color: transparent !important;\nborder: none !important;\nbox-shadow: none !important;\noutline: none !important;\nheight: 100% !important;\nwidth: 100% !important;\n").concat(((_event$data5 = event.data) === null || _event$data5 === void 0 ? void 0 : _event$data5.pointerEvent) === false ? 'pointer-events: none !important;' : '', "\n}");
        iframe.appendChild(style);
        var targetOrigin = typeof event.origin === 'string' ? event.origin : '*';
        var source = event.source;
        var send = function send(responsePayload) {
          if (source.closed) {
            _nextCore.logger.warn('[UserpilotService] Guide data response skipped: source window is closed', {
              targetOrigin: targetOrigin
            });
            subscriber.next({
              send: null
            });
            return;
          }
          _nextCore.logger.log('[UserpilotService] Guide data response sent', {
            targetOrigin: targetOrigin,
            responseKeys: Object.keys(responsePayload)
          });
          source.postMessage({
            type: REQUEST_GUIDE_DATA,
            response: true,
            payload: responsePayload
          }, targetOrigin);
        };
        subscriber.next({
          send: send,
          payload: eventPayload
        });
      } catch (error) {
        var _event$data6;
        _nextCore.logger.error('[UserpilotService] registerGuideDataListener failed to handle message', {
          origin: event.origin,
          type: (_event$data6 = event.data) === null || _event$data6 === void 0 ? void 0 : _event$data6.type
        }, error);
      }
    };
    window.addEventListener('message', listener);
    return function () {
      window.removeEventListener('message', listener);
    };
  });
};
//# sourceMappingURL=utils.js.map

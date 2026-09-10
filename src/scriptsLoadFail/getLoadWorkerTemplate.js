"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLoadWorkerTemplate = getLoadWorkerTemplate;
require("core-js/modules/es.array.join.js");
require("core-js/modules/es.array.slice.js");
require("core-js/modules/es.date.to-json.js");
require("core-js/modules/es.date.to-string.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.replace.js");
var _constant = require("@ringcentral-integration/next-core/src/constant");
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _template = _interopRequireDefault(require("lodash/template"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * Generates a script tag containing the content of a shared worker template.
 * @param nameSpace - The namespace for the shared worker, which will put into global window.
 * @param workerUrl - The URL of the shared worker script.
 * @param options - Options for the generated shared worker loader script.
 * @returns A string representing the script tag.
 */
function getLoadWorkerTemplate() {
  var nameSpace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '__rc_shared_worker__';
  var workerUrl = arguments.length > 1 ? arguments[1] : undefined;
  var chunkName = arguments.length > 2 ? arguments[2] : undefined;
  var mfeConfig = arguments.length > 3 ? arguments[3] : undefined;
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var _options$requireBroad = options.requireBroadcastChannel,
    requireBroadcastChannel = _options$requireBroad === void 0 ? false : _options$requireBroad,
    _options$sanitizeWork = options.sanitizeWorkerErrors,
    sanitizeWorkerErrors = _options$sanitizeWork === void 0 ? false : _options$sanitizeWork,
    _options$shouldCheckU = options.shouldCheckUnsupportedWorkerUserAgent,
    shouldCheckUnsupportedWorkerUserAgent = _options$shouldCheckU === void 0 ? true : _options$shouldCheckU,
    _options$workerName = options.workerName,
    workerName = _options$workerName === void 0 ? chunkName : _options$workerName;
  var source = _fsExtra["default"].readFileSync(_path["default"].join(__dirname, './inline/loadWorker.js')).toString();
  var workerFailureDiagnostic = "'".concat(JSON.stringify("load ".concat(nameSpace, " worker fail")).slice(1, -1).replace(/'/g, "\\'"), "'");
  var workerConstructor = sanitizeWorkerErrors ? "let worker;\n    try {\n      worker = new SharedWorker(url, { name });\n    } catch (error) {\n      // eslint-disable-next-line no-console\n      console.error(".concat(workerFailureDiagnostic, ");\n      if (window.workerScriptsFail && window.workerScriptsFail.renderLoadFail) {\n        window.workerScriptsFail.renderLoadFail();\n      }\n      return;\n    }") : 'const worker = new SharedWorker(url, { name });';
  var workerErrorListener = sanitizeWorkerErrors ? "let workerLoadFailed = false;\n    worker.addEventListener('error', (event) => {\n      try {\n        event.preventDefault();\n      } catch (error) {\n        // Error-event suppression is best effort.\n      }\n      if (workerLoadFailed) return;\n      workerLoadFailed = true;\n      // eslint-disable-next-line no-console\n      console.error(".concat(workerFailureDiagnostic, ");\n\n      if (window.workerScriptsFail && window.workerScriptsFail.renderLoadFail) {\n        window.workerScriptsFail.renderLoadFail();\n      }\n    });") : "worker.addEventListener('error', (event) => {\n      // eslint-disable-next-line no-console\n      console.error(".concat(workerFailureDiagnostic, ", event);\n\n      if (window.workerScriptsFail && window.workerScriptsFail.renderLoadFail) {\n        window.workerScriptsFail.renderLoadFail();\n      }\n    });");
  var content = (0, _template["default"])(source)({
    workerUrl: workerUrl,
    nameSpace: nameSpace,
    chunkName: chunkName,
    mfeConfig: mfeConfig,
    disableRcSharedWorkerKey: _constant.disableRcSharedWorkerKey,
    shouldCheckUnsupportedWorkerUserAgent: shouldCheckUnsupportedWorkerUserAgent ? '1' : '',
    workerName: JSON.stringify(workerName).slice(1, -1).replace(/'/g, "\\'").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
  }).replace(/ {4}\/\* __BROADCAST_CHANNEL_CONDITION__ \*\/\r?\n/, requireBroadcastChannel ? '    globalThis.BroadcastChannel &&\n' : '').replace('__WORKER_CONSTRUCTOR__;', workerConstructor).replace('__WORKER_ERROR_LISTENER__;', workerErrorListener);
  if (/__(?:BROADCAST_CHANNEL_CONDITION|WORKER_CONSTRUCTOR|WORKER_ERROR_LISTENER)__/.test(content)) {
    throw new Error('Unable to resolve SharedWorker loader template markers.');
  }
  return "<script>".concat(content, "</script>");
}
//# sourceMappingURL=getLoadWorkerTemplate.js.map

"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSameWorkerUrl = exports.getWorkerUrlFilename = void 0;
require("core-js/modules/es.array.filter.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/es.string.split.js");
require("core-js/modules/esnext.global-this.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/web.url.js");
require("core-js/modules/web.url.to-json.js");
require("core-js/modules/web.url-search-params.js");
var getFilenameFromPath = function getFilenameFromPath(path) {
  var _path$split$filter$po;
  return (_path$split$filter$po = path.split('/').filter(Boolean).pop()) !== null && _path$split$filter$po !== void 0 ? _path$split$filter$po : path;
};
var getWorkerUrlFilename = exports.getWorkerUrlFilename = function getWorkerUrlFilename(workerUrl) {
  try {
    var _globalThis$location;
    return getFilenameFromPath(new URL(workerUrl, ((_globalThis$location = globalThis.location) === null || _globalThis$location === void 0 ? void 0 : _globalThis$location.href) || 'http://localhost/').pathname);
  } catch (_unused) {
    var pathWithoutQuery = workerUrl.split(/[?#]/)[0];
    return getFilenameFromPath(pathWithoutQuery);
  }
};

/**
 * compare the worker URL by filename, which is useful when the worker URL is dynamically generated with a hash or query string for cache busting.
 *
 * by default will compare the full URL, which is the most strict way to ensure the worker is the same.
 * setting `onlyComparisonWorkerFilename` to true for only comparing the filename, which is useful when the worker URL is dynamically generated with a hash or query string for cache busting.
 */
var isSameWorkerUrl = exports.isSameWorkerUrl = function isSameWorkerUrl(_ref) {
  var currentWorkerUrl = _ref.currentWorkerUrl,
    receivedWorkerUrl = _ref.receivedWorkerUrl,
    _ref$onlyComparisonWo = _ref.onlyComparisonWorkerFilename,
    onlyComparisonWorkerFilename = _ref$onlyComparisonWo === void 0 ? false : _ref$onlyComparisonWo;
  if (!onlyComparisonWorkerFilename) {
    return receivedWorkerUrl === currentWorkerUrl;
  }
  return getWorkerUrlFilename(receivedWorkerUrl) === getWorkerUrlFilename(currentWorkerUrl);
};
//# sourceMappingURL=Initiator.utils.js.map

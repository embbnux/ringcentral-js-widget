"use strict";

require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/web.dom-collections.for-each.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _TCRNumberModal = require("./TCRNumberModal.view");
Object.keys(_TCRNumberModal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TCRNumberModal[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TCRNumberModal[key];
    }
  });
});
var _TCRNumberModalView = require("./TCRNumberModal.view.interface");
Object.keys(_TCRNumberModalView).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TCRNumberModalView[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TCRNumberModalView[key];
    }
  });
});
//# sourceMappingURL=index.js.map

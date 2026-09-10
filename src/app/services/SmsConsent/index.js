"use strict";

require("core-js/modules/es.array.for-each.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.object.keys.js");
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/web.dom-collections.for-each.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _SmsConsent = require("./SmsConsent");
Object.keys(_SmsConsent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SmsConsent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SmsConsent[key];
    }
  });
});
var _SmsConsent2 = require("./SmsConsent.helper");
Object.keys(_SmsConsent2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SmsConsent2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SmsConsent2[key];
    }
  });
});
var _SmsConsent3 = require("./SmsConsent.interface");
Object.keys(_SmsConsent3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SmsConsent3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SmsConsent3[key];
    }
  });
});
//# sourceMappingURL=index.js.map

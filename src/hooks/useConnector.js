"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useConnector = void 0;
var _reactantShare = require("reactant-share");
var _reactant = require("reactant");
var useConnector = exports.useConnector = function useConnector(selector, shallowEqual) {
  return (0, _reactant.useConnector)(function (container) {
    return selector(function (moduleKey) {
      return (0, _reactant.getRef)(container.got(_reactantShare.PortDetector)).modules[moduleKey];
    });
  }, shallowEqual);
};
//# sourceMappingURL=useConnector.js.map

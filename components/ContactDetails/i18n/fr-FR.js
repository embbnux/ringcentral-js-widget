'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _emailLabel$call$text;

var _presenceStatus = require('ringcentral-integration/modules/Presence/presenceStatus');

var _presenceStatus2 = _interopRequireDefault(_presenceStatus);

var _dndStatus = require('ringcentral-integration/modules/Presence/dndStatus');

var _dndStatus2 = _interopRequireDefault(_dndStatus);

var _phoneTypes = require('../../../enums/phoneTypes');

var _phoneTypes2 = _interopRequireDefault(_phoneTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_emailLabel$call$text = {
  emailLabel: "E-mail",
  call: "Appeler",
  text: "Texte"
}, (0, _defineProperty3.default)(_emailLabel$call$text, _presenceStatus2.default.available, "Disponible"), (0, _defineProperty3.default)(_emailLabel$call$text, _presenceStatus2.default.offline, "Invisible"), (0, _defineProperty3.default)(_emailLabel$call$text, _presenceStatus2.default.busy, "Occupé(e)"), (0, _defineProperty3.default)(_emailLabel$call$text, _dndStatus2.default.doNotAcceptAnyCalls, "Ne pas déranger"), (0, _defineProperty3.default)(_emailLabel$call$text, 'notActivated', "Inactif"), _emailLabel$call$text);

// @key: @#@"emailLabel"@#@ @source: @#@"Email"@#@
// @key: @#@"call"@#@ @source: @#@"Call"@#@
// @key: @#@"text"@#@ @source: @#@"Text"@#@
// @key: @#@"[presenceStatus.available]"@#@ @source: @#@"Available"@#@
// @key: @#@"[presenceStatus.offline]"@#@ @source: @#@"Invisible"@#@
// @key: @#@"[presenceStatus.busy]"@#@ @source: @#@"Busy"@#@
// @key: @#@"[dndStatus.doNotAcceptAnyCalls]"@#@ @source: @#@"Do not Disturb"@#@
// @key: @#@"notActivated"@#@ @source: @#@"Inactive"@#@
//# sourceMappingURL=fr-FR.js.map

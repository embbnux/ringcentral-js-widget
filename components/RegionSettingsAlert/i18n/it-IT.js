'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _region$regionSetting;

var _regionSettingsMessages = require('ringcentral-integration/modules/RegionSettings/regionSettingsMessages');

var _regionSettingsMessages2 = _interopRequireDefault(_regionSettingsMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_region$regionSetting = {
  region: 'Regione'
}, (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.saveSuccess, 'Impostazioni salvate correttamente.'), (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.dialingPlansChanged, 'La regione precedente non \xE8 pi\xF9 supportata per l\'account.\n    Verifica la nuova {regionSettingsLink}.'), (0, _defineProperty3.default)(_region$regionSetting, 'regionSettings', 'impostazioni regione'), (0, _defineProperty3.default)(_region$regionSetting, _regionSettingsMessages2.default.areaCodeInvalid, 'Inserisci un prefisso valido.'), _region$regionSetting);
//# sourceMappingURL=it-IT.js.map

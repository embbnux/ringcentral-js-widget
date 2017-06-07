'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _status$acceptQueueCa;

var _presenceStatus = require('ringcentral-integration/modules/Presence/presenceStatus');

var _presenceStatus2 = _interopRequireDefault(_presenceStatus);

var _dndStatus = require('ringcentral-integration/modules/Presence/dndStatus');

var _dndStatus2 = _interopRequireDefault(_dndStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_status$acceptQueueCa = {
  status: 'Status',
  acceptQueueCalls: 'Accept call queue calls'
}, (0, _defineProperty3.default)(_status$acceptQueueCa, _presenceStatus2.default.avalible, 'Available'), (0, _defineProperty3.default)(_status$acceptQueueCa, _presenceStatus2.default.offline, 'Invisible'), (0, _defineProperty3.default)(_status$acceptQueueCa, _presenceStatus2.default.busy + _dndStatus2.default.takeAllCalls, 'Busy'), (0, _defineProperty3.default)(_status$acceptQueueCa, _presenceStatus2.default.busy + _dndStatus2.default.doNotAcceptDepartmentCalls, 'Busy'), (0, _defineProperty3.default)(_status$acceptQueueCa, _presenceStatus2.default.busy + _dndStatus2.default.doNotAcceptAnyCalls, 'Do not Disturb'), _status$acceptQueueCa);
//# sourceMappingURL=en-US.js.map

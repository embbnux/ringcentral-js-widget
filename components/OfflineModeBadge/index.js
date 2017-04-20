'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OfflineModeBadge;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Badge = require('../Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _i18n = require('./i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OfflineModeBadge(_ref) {
  var className = _ref.className,
      offline = _ref.offline,
      currentLocale = _ref.currentLocale,
      showOfflineAlert = _ref.showOfflineAlert;

  if (offline) {
    return _react2.default.createElement(
      _Badge2.default,
      {
        className: className,
        name: 'offline',
        onClick: showOfflineAlert
      },
      _i18n2.default.getString('offlineMode', currentLocale)
    );
  }
  return null;
}

OfflineModeBadge.propTypes = {
  offline: _react.PropTypes.bool.isRequired,
  showOfflineAlert: _react.PropTypes.func.isRequired,
  currentLocale: _react.PropTypes.string.isRequired,
  className: _react.PropTypes.string
};

OfflineModeBadge.defaultProps = {
  className: null
};
//# sourceMappingURL=index.js.map

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SettingsPanel;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _DynamicsFont = require('../../assets/DynamicsFont/DynamicsFont.scss');

var _DynamicsFont2 = _interopRequireDefault(_DynamicsFont);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

var _Panel = require('../Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _Line = require('../Line');

var _Line2 = _interopRequireDefault(_Line);

var _LinkLine = require('../LinkLine');

var _LinkLine2 = _interopRequireDefault(_LinkLine);

var _IconLine = require('../IconLine');

var _IconLine2 = _interopRequireDefault(_IconLine);

var _Eula = require('../Eula');

var _Eula2 = _interopRequireDefault(_Eula);

var _SpinnerOverlay = require('../SpinnerOverlay');

var _SpinnerOverlay2 = _interopRequireDefault(_SpinnerOverlay);

var _PresenceSettingSection = require('../PresenceSettingSection');

var _PresenceSettingSection2 = _interopRequireDefault(_PresenceSettingSection);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

var _Switch = require('../Switch');

var _Switch2 = _interopRequireDefault(_Switch);

var _i18n = require('./i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SettingsPanel(_ref) {
  var children = _ref.children,
      className = _ref.className,
      onLogoutButtonClick = _ref.onLogoutButtonClick,
      loginNumber = _ref.loginNumber,
      version = _ref.version,
      currentLocale = _ref.currentLocale,
      brandId = _ref.brandId,
      EulaRenderer = _ref.EulaRenderer,
      callingSettingsUrl = _ref.callingSettingsUrl,
      regionSettingsUrl = _ref.regionSettingsUrl,
      showAutoLog = _ref.showAutoLog,
      autoLogEnabled = _ref.autoLogEnabled,
      onAutoLogChange = _ref.onAutoLogChange,
      showAutoLogSMS = _ref.showAutoLogSMS,
      autoLogSMSEnabled = _ref.autoLogSMSEnabled,
      onAutoLogSMSChange = _ref.onAutoLogSMSChange,
      showClickToDial = _ref.showClickToDial,
      clickToDialEnabled = _ref.clickToDialEnabled,
      onClickToDialChange = _ref.onClickToDialChange,
      showRegion = _ref.showRegion,
      showHeader = _ref.showHeader,
      ringoutEnabled = _ref.ringoutEnabled,
      outboundSMS = _ref.outboundSMS,
      showSpinner = _ref.showSpinner,
      dndStatus = _ref.dndStatus,
      userStatus = _ref.userStatus,
      setAvailable = _ref.setAvailable,
      setBusy = _ref.setBusy,
      setDoNotDisturb = _ref.setDoNotDisturb,
      setInvisible = _ref.setInvisible,
      toggleAcceptCallQueueCalls = _ref.toggleAcceptCallQueueCalls,
      isCallQueueMember = _ref.isCallQueueMember,
      showPresenceSettings = _ref.showPresenceSettings;

  if (showSpinner) {
    return _react2.default.createElement(_SpinnerOverlay2.default, null);
  }
  var region = showRegion ? _react2.default.createElement(
    _LinkLine2.default,
    {
      to: regionSettingsUrl },
    _i18n2.default.getString('region', currentLocale)
  ) : null;
  var presenceSetting = dndStatus && userStatus ? _react2.default.createElement(_PresenceSettingSection2.default, {
    currentLocale: currentLocale,
    dndStatus: dndStatus,
    userStatus: userStatus,
    isCallQueueMember: isCallQueueMember,
    setAvailable: setAvailable,
    setBusy: setBusy,
    setDoNotDisturb: setDoNotDisturb,
    setInvisible: setInvisible,
    toggleAcceptCallQueueCalls: toggleAcceptCallQueueCalls,
    showPresenceSettings: showPresenceSettings
  }) : null;
  var clickToDialText = void 0;
  if (outboundSMS && ringoutEnabled) {
    clickToDialText = _i18n2.default.getString('clickToDialSMS', currentLocale);
  } else if (!outboundSMS && ringoutEnabled) {
    clickToDialText = _i18n2.default.getString('clickToDial', currentLocale);
  } else if (outboundSMS && !ringoutEnabled) {
    clickToDialText = _i18n2.default.getString('clickToSMS', currentLocale);
  } else {
    clickToDialText = '';
  }
  var clickToDial = showClickToDial && (outboundSMS || ringoutEnabled) ? _react2.default.createElement(
    _IconLine2.default,
    {
      icon: _react2.default.createElement(_Switch2.default, {
        checked: clickToDialEnabled,
        onChange: onClickToDialChange
      })
    },
    clickToDialText
  ) : null;
  var autoLog = showAutoLog ? _react2.default.createElement(
    _IconLine2.default,
    {
      icon: _react2.default.createElement(_Switch2.default, {
        checked: autoLogEnabled,
        onChange: onAutoLogChange
      })
    },
    _i18n2.default.getString('autoLogCalls', currentLocale)
  ) : null;
  var autoLogSMS = showAutoLogSMS ? _react2.default.createElement(
    _IconLine2.default,
    {
      icon: _react2.default.createElement(_Switch2.default, {
        checked: autoLogSMSEnabled,
        onChange: onAutoLogSMSChange
      })
    },
    _i18n2.default.getString('autoLogSMS', currentLocale)
  ) : null;
  var header = showHeader ? _react2.default.createElement(
    _Header2.default,
    null,
    _i18n2.default.getString('settings', currentLocale)
  ) : null;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(_styles2.default.root, className) },
    header,
    _react2.default.createElement(
      _Panel2.default,
      {
        className: (0, _classnames2.default)(_styles2.default.content, showHeader && _styles2.default.contentWithHeader) },
      _react2.default.createElement(
        _LinkLine2.default,
        {
          to: callingSettingsUrl },
        _i18n2.default.getString('calling', currentLocale)
      ),
      region,
      presenceSetting,
      children,
      autoLog,
      autoLogSMS,
      clickToDial,
      _react2.default.createElement(
        'section',
        { className: _styles2.default.section },
        _react2.default.createElement(
          _Line2.default,
          null,
          _react2.default.createElement(EulaRenderer, {
            className: _styles2.default.eula,
            currentLocale: currentLocale,
            brandId: brandId })
        )
      ),
      _react2.default.createElement(
        'section',
        { className: _styles2.default.section },
        _react2.default.createElement(
          _IconLine2.default,
          {
            onClick: onLogoutButtonClick,
            icon: _react2.default.createElement('span', { className: _DynamicsFont2.default.logout }) },
          _i18n2.default.getString('logout', currentLocale),
          _react2.default.createElement(
            'span',
            { className: _styles2.default.loginNumber },
            ' ' + loginNumber
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: _styles2.default.versionContainer },
        _i18n2.default.getString('version', currentLocale),
        ' ',
        version
      )
    )
  );
}

SettingsPanel.propTypes = {
  brandId: _react.PropTypes.string.isRequired,
  callingSettingsUrl: _react.PropTypes.string.isRequired,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  currentLocale: _react.PropTypes.string.isRequired,
  EulaRenderer: _react.PropTypes.func,
  loginNumber: _react.PropTypes.string.isRequired,
  onLogoutButtonClick: _react.PropTypes.func.isRequired,
  regionSettingsUrl: _react.PropTypes.string.isRequired,
  showAutoLog: _react.PropTypes.bool,
  autoLogEnabled: _react.PropTypes.bool,
  onAutoLogChange: _react.PropTypes.func,
  showAutoLogSMS: _react.PropTypes.bool,
  autoLogSMSEnabled: _react.PropTypes.bool,
  onAutoLogSMSChange: _react.PropTypes.func,
  showRegion: _react.PropTypes.bool.isRequired,
  showClickToDial: _react.PropTypes.bool,
  clickToDialEnabled: _react.PropTypes.bool,
  onClickToDialChange: _react.PropTypes.func,
  version: _react.PropTypes.string.isRequired,
  showHeader: _react.PropTypes.bool,
  ringoutEnabled: _react.PropTypes.bool,
  outboundSMS: _react.PropTypes.bool,
  showSpinner: _react.PropTypes.bool,
  dndStatus: _react.PropTypes.string,
  userStatus: _react.PropTypes.string,
  isCallQueueMember: _react.PropTypes.bool,
  setAvailable: _react.PropTypes.func,
  setBusy: _react.PropTypes.func,
  setDoNotDisturb: _react.PropTypes.func,
  setInvisible: _react.PropTypes.func,
  toggleAcceptCallQueueCalls: _react.PropTypes.func,
  showPresenceSettings: _react.PropTypes.bool
};
SettingsPanel.defaultProps = {
  className: null,
  EulaRenderer: _Eula2.default,
  children: null,
  showClickToDial: false,
  clickToDialEnabled: false,
  onClickToDialChange: undefined,
  showAutoLog: false,
  autoLogEnabled: false,
  onAutoLogChange: undefined,
  showAutoLogSMS: false,
  autoLogSMSEnabled: false,
  onAutoLogSMSChange: undefined,
  showHeader: false,
  ringoutEnabled: false,
  outboundSMS: false,
  showSpinner: false,
  dndStatus: undefined,
  userStatus: undefined,
  isCallQueueMember: false,
  setAvailable: function setAvailable() {
    return null;
  },
  setBusy: function setBusy() {
    return null;
  },
  setDoNotDisturb: function setDoNotDisturb() {
    return null;
  },
  setInvisible: function setInvisible() {
    return null;
  },
  toggleAcceptCallQueueCalls: function toggleAcceptCallQueueCalls() {
    return null;
  },
  showPresenceSettings: false
};
//# sourceMappingURL=index.js.map

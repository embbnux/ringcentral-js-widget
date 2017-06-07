'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _presenceStatus = require('ringcentral-integration/modules/Presence/presenceStatus');

var _presenceStatus2 = _interopRequireDefault(_presenceStatus);

var _dndStatus = require('ringcentral-integration/modules/Presence/dndStatus');

var _dndStatus2 = _interopRequireDefault(_dndStatus);

var _IconLine = require('../IconLine');

var _IconLine2 = _interopRequireDefault(_IconLine);

var _Line = require('../Line');

var _Line2 = _interopRequireDefault(_Line);

var _Switch = require('../Switch');

var _Switch2 = _interopRequireDefault(_Switch);

var _DynamicsFont = require('../../assets/DynamicsFont/DynamicsFont.scss');

var _DynamicsFont2 = _interopRequireDefault(_DynamicsFont);

var _styles = require('./styles.scss');

var _styles2 = _interopRequireDefault(_styles);

var _i18n = require('./i18n');

var _i18n2 = _interopRequireDefault(_i18n);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PresenceItem(props) {
  var className = (0, _classnames2.default)(_styles2.default.presenceItem, props.selected ? _styles2.default.selected : null);
  return _react2.default.createElement(
    'a',
    { className: className, onClick: props.onClick },
    props.icon,
    _react2.default.createElement(
      'span',
      { className: _styles2.default.statusName },
      props.name
    )
  );
}

PresenceItem.propTypes = {
  onClick: _react.PropTypes.func.isRequired,
  icon: _react.PropTypes.node.isRequired,
  name: _react.PropTypes.string.isRequired,
  selected: _react.PropTypes.bool.isRequired
};

var PresenceSettingSection = function (_Component) {
  (0, _inherits3.default)(PresenceSettingSection, _Component);

  function PresenceSettingSection(props) {
    (0, _classCallCheck3.default)(this, PresenceSettingSection);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PresenceSettingSection.__proto__ || (0, _getPrototypeOf2.default)(PresenceSettingSection)).call(this, props));

    _this.state = {
      showSelects: props.showPresenceSettings
    };

    _this.toggleShow = function () {
      _this.setState(function (preState) {
        return {
          showSelects: !preState.showSelects
        };
      });
    };

    _this.onCallQueueChange = function () {
      if (_this.state.dndStatus === _dndStatus2.default.doNotAcceptAnyCalls) {
        return;
      }
      _this.setState(function (preState) {
        return {
          dndStatus: preState.dndStatus === _dndStatus2.default.takeAllCalls ? _dndStatus2.default.doNotAcceptDepartmentCalls : _dndStatus2.default.takeAllCalls
        };
      });
      _this.props.toggleAcceptCallQueueCalls();
    };
    return _this;
  }

  (0, _createClass3.default)(PresenceSettingSection, [{
    key: '_getPresenceStatus',
    value: function _getPresenceStatus(currentUserStatus, currentDndStatus) {
      if (currentUserStatus !== _presenceStatus2.default.busy) {
        return _i18n2.default.getString(currentUserStatus, this.props.currentLocale);
      }
      return _i18n2.default.getString(currentUserStatus + currentDndStatus, this.props.currentLocale);
    }
  }, {
    key: '_getPresenceStatusIcon',
    value: function _getPresenceStatusIcon(currentUserStatus, currentDndStatus) {
      var iconClassName = void 0;
      if (currentUserStatus === _presenceStatus2.default.offline) {
        iconClassName = _styles2.default.invisible;
      }
      if (currentUserStatus === _presenceStatus2.default.busy) {
        if (currentDndStatus === _dndStatus2.default.doNotAcceptAnyCalls) {
          iconClassName = (0, _classnames2.default)(_styles2.default.status, _styles2.default.busy, _styles2.default.notDisturb);
        } else {
          iconClassName = (0, _classnames2.default)(_styles2.default.status, _styles2.default.busy);
        }
      }
      return _react2.default.createElement(
        'span',
        { className: (0, _classnames2.default)(_styles2.default.status, iconClassName) },
        _react2.default.createElement('i', { className: _DynamicsFont2.default.collapse })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var sectionClass = (0, _classnames2.default)(_styles2.default.section, this.state.showSelects ? _styles2.default.showDropdown : null);
      var acceptQueueCalls = this.props.isCallQueueMember ? _react2.default.createElement(
        _IconLine2.default,
        {
          icon: _react2.default.createElement(_Switch2.default, {
            checked: this.props.dndStatus === _dndStatus2.default.takeAllCalls,
            onChange: this.onCallQueueChange
          })
        },
        _i18n2.default.getString('acceptQueueCalls', this.props.currentLocale)
      ) : null;
      var currentStatus = this._getPresenceStatus(this.props.userStatus, this.props.dndStatus);
      var currentStatusIcon = this._getPresenceStatusIcon(this.props.userStatus, this.props.dndStatus);
      return _react2.default.createElement(
        'section',
        { className: sectionClass },
        _react2.default.createElement(
          _IconLine2.default,
          {
            icon: _react2.default.createElement(
              'span',
              { className: _styles2.default.dropdownIcon },
              _react2.default.createElement('i', { className: _DynamicsFont2.default.arrow })
            ),
            onClick: this.toggleShow
          },
          _react2.default.createElement(
            'div',
            { className: _styles2.default.title },
            _i18n2.default.getString('status', this.props.currentLocale)
          ),
          _react2.default.createElement(
            'div',
            { className: _styles2.default.subTitle },
            currentStatusIcon,
            _react2.default.createElement(
              'span',
              { className: _styles2.default.statusName },
              currentStatus
            )
          )
        ),
        _react2.default.createElement(
          _Line2.default,
          { className: _styles2.default.presenceList },
          _react2.default.createElement(PresenceItem, {
            icon: this._getPresenceStatusIcon(_presenceStatus2.default.available),
            name: _i18n2.default.getString(_presenceStatus2.default.available, this.props.currentLocale),
            onClick: this.props.setAvailable,
            selected: this.props.userStatus === _presenceStatus2.default.available
          }),
          _react2.default.createElement(PresenceItem, {
            icon: this._getPresenceStatusIcon(_presenceStatus2.default.busy, _dndStatus2.default.takeAllCalls),
            name: _i18n2.default.getString(_presenceStatus2.default.busy + _dndStatus2.default.takeAllCalls, this.props.currentLocale),
            onClick: this.props.setBusy,
            selected: this.props.userStatus === _presenceStatus2.default.busy && this.props.dndStatus !== _dndStatus2.default.doNotAcceptAnyCalls
          }),
          _react2.default.createElement(PresenceItem, {
            icon: this._getPresenceStatusIcon(_presenceStatus2.default.busy, _dndStatus2.default.doNotAcceptAnyCalls),
            name: _i18n2.default.getString(_presenceStatus2.default.busy + _dndStatus2.default.doNotAcceptAnyCalls, this.props.currentLocale),
            onClick: this.props.setDoNotDisturb,
            selected: this.props.userStatus === _presenceStatus2.default.busy && this.props.dndStatus === _dndStatus2.default.doNotAcceptAnyCalls
          }),
          _react2.default.createElement(PresenceItem, {
            icon: this._getPresenceStatusIcon(_presenceStatus2.default.offline),
            name: _i18n2.default.getString(_presenceStatus2.default.offline, this.props.currentLocale),
            onClick: this.props.setInvisible,
            selected: this.props.userStatus === _presenceStatus2.default.offline
          })
        ),
        acceptQueueCalls
      );
    }
  }]);
  return PresenceSettingSection;
}(_react.Component);

exports.default = PresenceSettingSection;


PresenceSettingSection.propTypes = {
  currentLocale: _react.PropTypes.string.isRequired,
  dndStatus: _react.PropTypes.string.isRequired,
  userStatus: _react.PropTypes.string.isRequired,
  isCallQueueMember: _react.PropTypes.bool.isRequired,
  setAvailable: _react.PropTypes.func.isRequired,
  setBusy: _react.PropTypes.func.isRequired,
  setDoNotDisturb: _react.PropTypes.func.isRequired,
  setInvisible: _react.PropTypes.func.isRequired,
  toggleAcceptCallQueueCalls: _react.PropTypes.func.isRequired,
  showPresenceSettings: _react.PropTypes.bool.isRequired
};
//# sourceMappingURL=index.js.map

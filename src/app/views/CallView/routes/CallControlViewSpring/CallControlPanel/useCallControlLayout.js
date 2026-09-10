"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCallControlLayout = void 0;
require("core-js/modules/es.array.concat.js");
var _hooks = require("@ringcentral-integration/micro-core/src/app/hooks");
var _components = require("@ringcentral-integration/next-widgets/components");
var _springIcon = require("@ringcentral/spring-icon");
var _springUi = require("@ringcentral/spring-ui");
var _react = _interopRequireDefault(require("react"));
var _components2 = require("../../../../../components");
var _hooks2 = require("../../../../../hooks");
var _i18n = _interopRequireDefault(require("../../../../../hooks/useContactRenderInfo/i18n"));
var _services = require("../../../../../services");
var _CallControlLayout = require("./CallControlLayout");
var _i18n2 = _interopRequireDefault(require("./i18n"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var useCallControlLayout = exports.useCallControlLayout = function useCallControlLayout(call, _ref) {
  var _call$conferenceParti;
  var main = _ref.main,
    header = _ref.header,
    expanded = _ref.expanded,
    onExpand = _ref.onExpand,
    footer = _ref.footer,
    onBack = _ref.onBack,
    onConferenceClick = _ref.onConferenceClick,
    aiNoteTip = _ref.aiNoteTip;
  var _useContactRenderInfo = (0, _hooks2.useContactRenderInfoFromCall)(call, {
      phoneNumberDisplayMode: 'unknown',
      hideBlockedFromInfo: true
    }),
    DisplayName = _useContactRenderInfo.DisplayName,
    displayPhoneNumber = _useContactRenderInfo.displayPhoneNumber,
    Avatar = _useContactRenderInfo.Avatar,
    duration = _useContactRenderInfo.duration,
    myCallerId = _useContactRenderInfo.myCallerId,
    callQueueName = _useContactRenderInfo.callQueueName,
    direction = _useContactRenderInfo.direction,
    OnOtherDevice = _useContactRenderInfo.OnOtherDevice;
  var _useLocale = (0, _hooks.useLocale)(_i18n2["default"], _i18n["default"]),
    t = _useLocale.t;
  var connecting = (0, _services.isPreinsertCall)(call);
  var conferenceParticipantsCount = (_call$conferenceParti = call.conferenceParticipants) === null || _call$conferenceParti === void 0 ? void 0 : _call$conferenceParti.length;
  var isInbound = direction === 'Inbound';
  var displayName = /*#__PURE__*/_react["default"].createElement(DisplayName, {
    displayControl: {
      maybe: true,
      viewable: true,
      matchCounts: true
    }
  });
  return /*#__PURE__*/_react["default"].createElement(_CallControlLayout.CallControlLayout, {
    aiNoteTip: aiNoteTip,
    callInformation: /*#__PURE__*/_react["default"].createElement(_CallControlLayout.CallControlInformation, {
      avatar: /*#__PURE__*/_react["default"].createElement(Avatar, {
        size: "large"
      }),
      startAdornment: /*#__PURE__*/_react["default"].createElement(_components.PageHeaderBackButton, {
        onClick: onBack
      })
    }, call.isConferenceCall ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "truncate text-neutral-b0 typography-title w-full flex flex-col",
      "data-sign": "userDisplayName"
    }, displayName), /*#__PURE__*/_react["default"].createElement("p", {
      className: "typography-descriptorMini text-neutral-b2 mt-1",
      "data-sign": "userPhoneNumber"
    }, t('conferenceCall')), OnOtherDevice && /*#__PURE__*/_react["default"].createElement(OnOtherDevice, null), /*#__PURE__*/_react["default"].createElement("div", {
      className: "mt-2"
    }, /*#__PURE__*/_react["default"].createElement(_springUi.Tooltip, {
      title: "".concat(t('participants'), " (").concat(conferenceParticipantsCount, ")")
    }, /*#__PURE__*/_react["default"].createElement(_springUi.IconButton, {
      "data-sign": "conferenceCallParticipantsIcon",
      size: "xsmall",
      color: "secondary",
      className: "flex flex-row p-1 size-auto typography-descriptor px-2 gap-1.5 h-6",
      onClick: onConferenceClick
    }, /*#__PURE__*/_react["default"].createElement(_springUi.Icon, {
      size: "xsmall",
      symbol: _springIcon.TeamMd
    }), /*#__PURE__*/_react["default"].createElement("span", null, conferenceParticipantsCount))))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "typography-title text-neutral-b0 truncate w-full flex flex-col",
      "data-sign": "userDisplayName"
    }, displayName), displayPhoneNumber && /*#__PURE__*/_react["default"].createElement("p", {
      className: "typography-descriptorMini text-neutral-b0",
      "data-sign": "userPhoneNumber"
    }, displayPhoneNumber), OnOtherDevice && /*#__PURE__*/_react["default"].createElement(OnOtherDevice, null), !callQueueName && myCallerId && /*#__PURE__*/_react["default"].createElement("p", {
      className: "typography-descriptorMini text-neutral-b2",
      "data-sign": "userCallerId"
    }, t(isInbound ? 'to' : 'myCallerId'), ": ", myCallerId))),
    contentDataSign: "activeCallPanel",
    footer: footer,
    header: header,
    isConferenceCall: call.isConferenceCall,
    main: main,
    status: connecting ? t('connecting') : duration,
    statusEnd: onExpand && typeof expanded === 'boolean' ? /*#__PURE__*/_react["default"].createElement(_components2.ExpandLogButton, {
      expanded: expanded,
      onExpand: onExpand
    }) : null
  });
};
//# sourceMappingURL=useCallControlLayout.js.map

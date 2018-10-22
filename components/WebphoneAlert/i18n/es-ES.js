"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _webphoneErrors$conne;

var _webphoneErrors = require("ringcentral-integration/modules/Webphone/webphoneErrors");

var _webphoneErrors2 = _interopRequireDefault(_webphoneErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (_webphoneErrors$conne = {}, (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.connectFailed, "Error al conectar con el servidor de telefonía web."), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.connected, "Teléfono web registrado."), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.browserNotSupported, "Las llamadas con el navegador solo se permiten en Chrome."), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.webphoneCountOverLimit, "Se han podido registrar 5 teléfonos web en total."), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.notOutboundCallWithoutDL, "En este momento, su extensión no puede realizar llamadas salientes con el navegador. Póngase en contacto con su representante de cuentas para acceder a una actualización."), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.getSipProvisionError, "No tiene permiso para enviar este mensaje."), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.toVoiceMailError, "No se puede enviar la llamada al buzón de voz debido a un error interno"), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.muteError, "No se puede silenciar la llamada en este momento."), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.holdError, "No se puede poner la llamada en espera en este momento."), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.flipError, "No se puede hacer flip en la llamada. Vuelva a intentarlo más tarde."), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.recordError, "No puede grabar la llamada en este momento. Código de error: {errorCode}"), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.recordDisabled, "Su cuenta no incluye la función para grabar llamadas. Póngase en contacto con el administrador de su cuenta."), (0, _defineProperty3.default)(_webphoneErrors$conne, _webphoneErrors2.default.transferError, "No se puede transferir la llamada. Vuelva a intentarlo más tarde."), (0, _defineProperty3.default)(_webphoneErrors$conne, "webphoneUnavailable", "{error}. Estamos volviendo a conectar con el servidor. Si el error persiste, póngase en contacto con el servicio técnico de {brandName}."), (0, _defineProperty3.default)(_webphoneErrors$conne, "errorCode", "Código de error interno: {errorCode}"), (0, _defineProperty3.default)(_webphoneErrors$conne, "occurs", "Se ha producido un error interno"), _webphoneErrors$conne);

// @key: @#@"[webphoneErrors.connectFailed]"@#@ @source: @#@"Connect with web phone server failed."@#@
// @key: @#@"[webphoneErrors.connected]"@#@ @source: @#@"Web phone registered."@#@
// @key: @#@"[webphoneErrors.browserNotSupported]"@#@ @source: @#@"Calling with browser is only supported on Chrome."@#@
// @key: @#@"[webphoneErrors.webphoneCountOverLimit]"@#@ @source: @#@"A maximum of 5 web phones could be registered."@#@
// @key: @#@"[webphoneErrors.notOutboundCallWithoutDL]"@#@ @source: @#@"Your extension is not allowed to make outbound calls with browser currently, please contact your account representative for an upgrade."@#@
// @key: @#@"[webphoneErrors.getSipProvisionError]"@#@ @source: @#@"You have no permission to send message."@#@
// @key: @#@"[webphoneErrors.toVoiceMailError]"@#@ @source: @#@"Cannot send call to voicemail due to internal error"@#@
// @key: @#@"[webphoneErrors.muteError]"@#@ @source: @#@"Call cannot be muted at the moment."@#@
// @key: @#@"[webphoneErrors.holdError]"@#@ @source: @#@"Call cannot be hold at the moment."@#@
// @key: @#@"[webphoneErrors.flipError]"@#@ @source: @#@"Cannot flip the call. Please try again later."@#@
// @key: @#@"[webphoneErrors.recordError]"@#@ @source: @#@"You cannot record the call at the moment. Error code: {errorCode}"@#@
// @key: @#@"[webphoneErrors.recordDisabled]"@#@ @source: @#@"Sorry, your account does not have the feature to record a call. Please contact your account administrator."@#@
// @key: @#@"[webphoneErrors.transferError]"@#@ @source: @#@"Cannot transfer the call. Please try again later."@#@
// @key: @#@"webphoneUnavailable"@#@ @source: @#@"{error}. We are reconnecting to server. If the error persists, please report this error to {brandName} Support."@#@
// @key: @#@"errorCode"@#@ @source: @#@"Internal error code: {errorCode}"@#@
// @key: @#@"occurs"@#@ @source: @#@"Internal error occurs"@#@
//# sourceMappingURL=es-ES.js.map

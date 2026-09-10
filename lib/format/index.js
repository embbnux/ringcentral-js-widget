"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = format;
exports.formatTypes = exports.formatSameSiteExtension = void 0;
exports.formatWithParserResult = formatWithParserResult;
exports.isUSOrCAOrPR = void 0;
require("core-js/modules/es.array.concat.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.index-of.js");
require("core-js/modules/es.regexp.constructor.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.replace.js");
var _libphonenumberJs = require("libphonenumber-js");
var _parse = _interopRequireDefault(require("../parse"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var formatTypes = exports.formatTypes = {
  local: 'local',
  international: 'international',
  e164: 'e164'
};
/**
 * Given current account is enabled the multiple site, when number is the same with current account
 * then the number needs to be formatted.
 */
var formatSameSiteExtension = exports.formatSameSiteExtension = function formatSameSiteExtension(_ref) {
  var _ref$currentSiteCode = _ref.currentSiteCode,
    currentSiteCode = _ref$currentSiteCode === void 0 ? '' : _ref$currentSiteCode,
    _ref$extension = _ref.extension,
    extension = _ref$extension === void 0 ? '' : _ref$extension;
  if (currentSiteCode === '' || !extension || extension.indexOf(currentSiteCode) !== 0) {
    return extension;
  }
  var regex = new RegExp("".concat(currentSiteCode, "0*"));
  return extension.replace(regex, '') || '0';
};
var ISOCode_US = 'US';
var ISOCode_CA = 'CA';
var ISOCode_PR = 'PR';

// US/CA/PR should be in the same phone area
var isUSOrCAOrPR = exports.isUSOrCAOrPR = function isUSOrCAOrPR(countryCode) {
  return [ISOCode_US, ISOCode_CA, ISOCode_PR].includes(countryCode);
};
/**
 * Format a phone number string based on parsing and formatting options.
 *
 * This method only returns the formatted number. If you also need the parser result,
 * use `formatWithParserResult` instead.
 */
function format(option) {
  return formatWithParserResult(option).number;
}

/**
 * Format a phone number and return both formatted output and parser result.
 *
 * Use this method when caller logic depends on parse details such as
 * `isValid`, `isExtension`, `parsedCountry`, or `extension`.
 */
function formatWithParserResult(option) {
  var phoneNumber = option.phoneNumber,
    _option$countryCode = option.countryCode,
    countryCode = _option$countryCode === void 0 ? 'US' : _option$countryCode,
    _option$maxExtensionL = option.maxExtensionLength,
    maxExtensionLength = _option$maxExtensionL === void 0 ? 6 : _option$maxExtensionL;
  var result = (0, _parse["default"])({
    input: phoneNumber,
    countryCode: countryCode,
    maxExtensionLength: maxExtensionLength
  });
  return {
    parserResult: result,
    number: getNumberResult(result, option)
  };
}
var getNumberResult = function getNumberResult(result, option) {
  var _option$countryCode2 = option.countryCode,
    countryCode = _option$countryCode2 === void 0 ? 'US' : _option$countryCode2,
    _option$areaCode = option.areaCode,
    areaCode = _option$areaCode === void 0 ? '' : _option$areaCode,
    _option$siteCode = option.siteCode,
    siteCode = _option$siteCode === void 0 ? '' : _option$siteCode,
    _option$type = option.type,
    type = _option$type === void 0 ? formatTypes.local : _option$type,
    _option$removeExtensi = option.removeExtension,
    removeExtension = _option$removeExtensi === void 0 ? false : _option$removeExtensi,
    _option$isMultipleSit = option.isMultipleSiteEnabled,
    isMultipleSiteEnabled = _option$isMultipleSit === void 0 ? false : _option$isMultipleSit,
    _option$extensionDeli = option.extensionDelimiter,
    extensionDelimiter = _option$extensionDeli === void 0 ? ' * ' : _option$extensionDeli,
    _option$isEDPEnabled = option.isEDPEnabled,
    isEDPEnabled = _option$isEDPEnabled === void 0 ? false : _option$isEDPEnabled;
  var number = result.phoneNumber,
    extension = result.extension,
    parsedCountry = result.parsedCountry,
    parsedNumber = result.parsedNumber,
    isExtension = result.isExtension,
    isServiceNumber = result.isServiceNumber,
    isValid = result.isValid,
    hasPlus = result.hasPlus,
    countryCallingCode = result.countryCallingCode;
  if (!isValid) {
    return '';
  }
  if (isServiceNumber) {
    return number;
  }
  if (isExtension) {
    if (!isMultipleSiteEnabled) {
      return number;
    }
    return formatSameSiteExtension({
      currentSiteCode: siteCode,
      extension: number
    });
  }
  var finalType;
  if (type === formatTypes.e164) {
    finalType = 'E.164';
  } else if (type === formatTypes.international) {
    finalType = 'INTERNATIONAL';
  } else {
    finalType =
    // parsedCountry is the country of phoneNumber country, countryCode is the country of caller
    isUSOrCAOrPR(countryCode) && isUSOrCAOrPR(parsedCountry) || parsedCountry === countryCode || countryCallingCode === (0, _libphonenumberJs.getCountryCallingCode)(countryCode) ? 'NATIONAL' : 'INTERNATIONAL';
  }
  var formattedNumber;
  if (!hasPlus &&
  // for projects don't support EDP, only US/PR/CA will append areaCode for 7-digits number, details in RCINT-26493
  isUSOrCAOrPR(countryCode) && !isEDPEnabled && areaCode && areaCode !== '' && (number === null || number === void 0 ? void 0 : number.length) === 7) {
    formattedNumber = (0, _libphonenumberJs.formatNumber)("".concat(areaCode).concat(number), parsedCountry || countryCode, finalType);
  } else if (parsedNumber) {
    formattedNumber = (0, _libphonenumberJs.formatNumber)(parsedNumber, parsedCountry || countryCode, finalType);
  } else if (!hasPlus) {
    formattedNumber = (0, _libphonenumberJs.formatNumber)(number, countryCode, finalType);
  } else {
    formattedNumber = number;
  }
  return extension && !removeExtension ? "".concat(formattedNumber).concat(extensionDelimiter).concat(extension) : formattedNumber;
};
//# sourceMappingURL=index.js.map

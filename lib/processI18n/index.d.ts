import { LocaleCode, type ConvertI18nToString } from './type';
export type { ConvertI18nToString } from './type';
/**
 * processI18n takes brandConfigs with I18nStrings objects and based on the locale, return brandConfig without the I18nStrings.
 * @param config BrandConfig
 * @param locale
 * @param defaultLocale
 * @param parentKey parent key of object
 * @returns BrandConfig without I18nStrings structure
 */
export declare function processI18n<T>(input: T, locale?: LocaleCode, defaultLocale?: LocaleCode, parentKey?: string): ConvertI18nToString<T>;

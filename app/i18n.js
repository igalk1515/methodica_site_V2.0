import { locales, defaultLocale } from "../lib/i18n-config";
import en from "../public/locales/en/common.json";
import he from "../public/locales/he/common.json";

const dictionaries = {
  en,
  he
};

export { locales, defaultLocale };

export function getDictionary(locale) {
  return dictionaries[locale] || dictionaries[defaultLocale];
}

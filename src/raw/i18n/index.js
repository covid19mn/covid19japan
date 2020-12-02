import { enUS } from "date-fns/locale";

// Add new languages and their emoji flag here. Make sure the array indices line up.
export const LANGUAGES = ["mn", "en"];
export const LANGUAGE_NAMES = ["Mongolian", "English"];

// Add locales for date-fns here. Make sure the keys match the languages in LANGUAGES.
export const LOCALES = {
  en: enUS,
};

const generateExport = () => {
  const resources = {};
  for (const language of LANGUAGES) {
    resources[language] = {
      translation: require(`./${language}.json`),
    };
  }
  return resources;
};

export const maybeIntlNumberFormat = (lang) => {
  if (window.Intl && window.Intl.NumberFormat) {
    return window.Intl.NumberFormat(lang).format;
  }
  return (o) => {
    return "" + o;
  };
};

export default generateExport();

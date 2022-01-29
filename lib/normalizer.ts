import { Locale } from './types/locales';

const normalizeLocales = {
  'pt-BR': 'pt',
};

export const normalizer = (locale: Locale): Locale => {
  if (normalizeLocales[locale]) {
    return normalizeLocales[locale];
  }
  return locale;
};

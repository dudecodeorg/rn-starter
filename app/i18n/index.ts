import { I18n } from 'i18n-js';
import { enLocale } from './translations/enLocale';
import * as Localize from 'expo-localization';

const userLocales = Localize.locales;
export const getUserLangCode = () => (userLocales.length ? userLocales[0] : null);

const i18n = new I18n({
  en: {
    ...enLocale,
  },
});

i18n.enableFallback = true;
i18n.locale = getUserLangCode() || '';

export const t = (scope: string, options?: any) => i18n.t(scope, options);

export const { locale } = i18n;

import { useI18n } from 'vue-i18n';

export function useI18nLocale() {
  const { t, locale } = useI18n();

  function setLocale(newLocale) {
    locale.value = newLocale;
  }

  return {
    t,
    locale,
    setLocale,
  };
}

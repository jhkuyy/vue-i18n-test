import { shallowRef, readonly } from "vue";

// dynamically fetch locales
// new Intl.Locale("en-US")

const activeLocale = shallowRef('en-US');

function setLocale(locale) {
  activeLocale.value = locale;
}

export function useI18nLocale() {
  return [readonly(activeLocale), setLocale];
}

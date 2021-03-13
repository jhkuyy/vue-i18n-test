import { createI18n } from 'vue-i18n';
import { ruRU } from './plurals';

export const i18n = createI18n({
  legacy: false,
  locale: 'ru-RU',
  fallbackLocale: 'en-US',
  pluralRules: {
    'ru-RU': ruRU,
  },
});

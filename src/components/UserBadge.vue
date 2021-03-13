<template>
  <p>{{ t('greeting', { name: 'Артем' }) }}</p>
</template>

<script>
import { useI18nLocale } from '@/hooks';

export default {
  setup() {
    const { t } = useI18nLocale();

    return { t };
  },
};
</script>

<i18n>
{
  "en-US": {
    "greeting": "Hello, {name}!"
  },
  "ru-RU": {
    "greeting": "Привет, {name}!"
  }
}
</i18n>

<template>
  <p>{{ t('greeting', { name: 'Артем' }) }}</p>

  <div>
    <p>
      {{ t('pluralization1', 0) }}
      | {{ t('pluralization1', 1) }}
      | {{ t('pluralization1', 2) }}
      | {{ t('pluralization1', 100) }}
    </p>

    <p>
      {{ t('pluralization2', 0) }}
      | {{ t('pluralization2', 1) }}
      | {{ t('pluralization2', 2) }}
      | {{ t('pluralization2', 100) }}
    </p>
  </div>
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
    "greeting": "Hello, {name}!",
    "pluralization1": "Pie | Pies",
    "pluralization2": "{n} Pie | {n} Pies"
  },
  "ru-RU": {
    "greeting": "Привет, {name}!",
    "pluralization1": "Пирог | Пирога | Пирогов",
    "pluralization2": "{n} Пирог | {n} Пирога | {n} Пирогов"
  }
}
</i18n>

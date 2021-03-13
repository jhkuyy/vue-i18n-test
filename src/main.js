import { createApp } from 'vue';
import { i18n } from '@/packages/i18n';
import App from './App.vue';

createApp(App)
  .use(i18n)
  .mount('#app');

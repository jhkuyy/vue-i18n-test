module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:@intlify/vue-i18n/recommended',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': 'off',
    '@intlify/vue-i18n/no-dynamic-keys': 'error',
    '@intlify/vue-i18n/no-unused-keys': [
      'error',
      {
        extensions: ['.js', '.vue']
      }
    ]
  },
  settings: {
    'vue-i18n': {
      // https://eslint-plugin-vue-i18n.intlify.dev/
      localeDir: './src/packages/i18n/locales/*.json',
      messageSyntaxVersion: '^9.0.0'
    }
  }
};

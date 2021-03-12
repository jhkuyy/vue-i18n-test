module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/prettier",
    "plugin:@intlify/vue-i18n/recommended"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  },
  settings: {
    'vue-i18n': {
      // https://eslint-plugin-vue-i18n.intlify.dev/
      messageSyntaxVersion: '^9.0.0'
    }
  }
};

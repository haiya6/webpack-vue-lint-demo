module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  },
  overrides: [
    {
      files: ['.eslintrc.js', 'prettier.config.js', '.stylelintrc.js', '.commitlintrc.js'],
      env: {
        node: true
      }
    }
  ]
}

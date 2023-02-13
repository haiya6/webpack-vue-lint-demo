module.exports = {
  extends: ['stylelint-config-recommended'],
  overrides: [
    {
      files: ['**/*.{html,vue}'],
      customSyntax: 'postcss-html'
    },
    {
      files: ['**/*.{css,scss}'],
      customSyntax: 'postcss-scss'
    }
  ],
  rules: {}
}

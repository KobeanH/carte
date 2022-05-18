module.exports = {
  // 環境設定
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['react'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'some-other-config-you-use',
    'prettier',
  ]
};

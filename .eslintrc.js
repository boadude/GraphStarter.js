module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['prettier', 'airbnb-base'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-underscore-dangle': 'off',
    'comma-dangle': 'off',
    'max-classes-per-file': 'off',
    'no-console': 'off',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
};

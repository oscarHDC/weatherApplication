module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'amd': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended'
  ],
  'overrides': [
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'parser': '@typescript-eslint/parser',
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'vue',
    '@typescript-eslint'
  ],
  'rules': {
    'vue/multi-word-component-names': 'off',
    'no-multiple-empty-lines': [2, {'max': 99999, 'maxEOF': 0}],
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'windows'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
  }
}

/* https://stackoverflow.com/questions/69748283/extension-eslint-is-configured-as-formatter-but-it-cannot-format-javascript */
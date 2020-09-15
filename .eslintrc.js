module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  root: true,
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', {
      args: 'after-used',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: false,
      vars: 'local',
    }],
    'no-console': 'warn',
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    // must expand out comma-dangle to get `functions` option enabled
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
      imports: 'always-multiline',
      objects: 'always-multiline',
    }],
    'comma-spacing': ['error', { before: false, after: true }],
    'eol-last': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'import/extensions': ['error', 'ignorePackages', { js: 'never', ts: 'never' }],
    'indent': ['error', 2, { SwitchCase: 1 }],
    'keyword-spacing': ['error'],
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', { code: 120, tabWidth: 2, ignoreComments: true }],
    'no-duplicate-imports': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0 }],
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-vars': ['warn', {
      vars: 'local',
      args: 'after-used',
      ignoreRestSiblings: false,
      argsIgnorePattern: '^_',
    }],
    'object-curly-newline': ['error', { multiline: true }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single'],
    'semi':['error', 'always'],
    'semi-spacing': 'error',
    'semi-style': ['error', 'last'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'spaced-comment': ['error', 'always'],
  },
};
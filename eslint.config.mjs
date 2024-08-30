import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEslint from 'typescript-eslint';

export default [
  { files: ['**/*.ts'] },
  { ignores: ['**/*.js'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/strict-boolean-expressions': 'off',
      'no-console': [
        'warn',
        {
          'allow': ['info', 'error']
        }
      ],
      'semi': [
        'error',
        'always',
        {
          'omitLastInOneLineBlock': true
        }
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      'curly': 'off',
      'max-len': [
        'error',
        {
          'code': 140,
          'tabWidth': 2
        }
      ],
      '@typescript-eslint/no-unused-vars': 'error',
      'no-empty-function': [
        'error',
        {
          'allow': ['constructors']
        }
      ],
      'no-trailing-spaces': 'error',
      'comma-dangle': 'error',
      'keyword-spacing': 'error',
      'brace-style': [
        'error',
        'stroustrup',
        {
          'allowSingleLine': false
        }
      ],
      'no-lonely-if': 'error',
      'nonblock-statement-body-position': ['error', 'below'],
      'no-multiple-empty-lines': [
        'error',
        {
          'max': 1,
          'maxEOF': 0
        }
      ],
      'quotes': ['error', 'single']
    }
  }
];
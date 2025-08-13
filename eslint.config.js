import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  {
    languageOptions: { globals: { ...globals.browser, ...globals.es2021 } },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'react/jsx-key': 'warn',
    },
  },
];

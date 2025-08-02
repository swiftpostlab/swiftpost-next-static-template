// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export const eslintBaseConfig = tseslint.config(
  eslint.configs.recommended,
  reactPlugin.configs.flat.recommended, // This is not a plugin object, but a shareable config object
  reactPlugin.configs.flat['jsx-runtime'],
  eslintPluginPrettierRecommended,
  ...tseslint.configs.strictTypeChecked,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Note: you must disable the base rule as it can report incorrect errors
      curly: ['error', 'all'],
      'no-useless-rename': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'react/prop-types': 'off',
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    ignores: ['node_modules', 'dist'],
  },
);

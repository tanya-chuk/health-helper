import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default defineConfig([
  globalIgnores(['.next/']),
  { files: ['app/**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    files: ['app/**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['app/**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'no-multiple-empty-lines': 'warn',
      'no-console': 'warn',
      'no-duplicate-imports': 'warn',
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);

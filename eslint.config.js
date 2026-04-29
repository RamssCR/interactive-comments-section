// @ts-check
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import reactDOM from 'eslint-plugin-react-dom'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import reactX from 'eslint-plugin-react-x'

export default defineConfig([
  globalIgnores(['dist', 'coverage', 'html']),
  js.configs.all,
  {
    files: ['**/*.{js,jsx}'],
    ...reactDOM.configs.strict,
  },
  reactRefresh.configs.vite,
  {
    files: ['**/*.{js,jsx}'],
    ...reactX.configs.strict,
  },
  reactHooks.configs.flat.recommended,
  {
    files: ['**/*.{js,jsx}'],
    linterOptions: {
      noInlineConfig: false,
    },
    languageOptions: {
      globals: {
        __IS_STAGING__: 'readonly',
        __APP_VERSION__: 'readonly',
        ...globals.browser,
        ...globals.vitest,
        ...globals.node,
      },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      ...reactHooks.configs.flat.recommended.rules,
      'sort-keys': 'off',
      'no-ternary': 'off',
      'one-var': 'off',
      'sort-imports': 'error',
      'no-console': 'off',
      'arrow-body-style': 'off',
      'id-length': 'off',
      'no-magic-numbers': 'off',
      'react-x/no-unstable-context-value': 'off',
    },
  },
])

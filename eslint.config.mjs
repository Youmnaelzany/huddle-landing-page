
import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Base configurations
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),

  // Global settings
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        React: 'readonly',
        JSX: 'readonly',
      },
    },
  },

  // Rules configuration
  {
    rules: {
      // Code style and formatting
      'prefer-arrow-callback': ['error'],
      'prefer-template': ['error'],
      semi: ['error', 'always'],
      quotes: ['error', 'double'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-trailing-spaces': ['error'],
      'eol-last': ['error', 'always'],

      // Best practices
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': ['error'],
      'no-alert': ['error'],
      'no-eval': ['error'],
      'no-implied-eval': ['error'],
      'no-new-func': ['error'],
      'no-script-url': ['error'],
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'prefer-const': ['error'],
      'no-var': ['error'],

      // React specific rules
      'react/jsx-uses-react': ['off'],
      'react/react-in-jsx-scope': ['off'],
      'react/prop-types': ['off'],
      'react/jsx-props-no-spreading': ['warn'],
      'react/jsx-no-useless-fragment': ['error'],
      'react/jsx-key': ['error'],
      'react/jsx-no-duplicate-props': ['error'],
      'react/jsx-no-undef': ['error'],
      'react/no-array-index-key': ['warn'],
      'react/no-danger': ['warn'],
      'react/no-deprecated': ['error'],
      'react/no-direct-mutation-state': ['error'],
      'react/no-find-dom-node': ['error'],
      'react/no-is-mounted': ['error'],
      'react/no-render-return-value': ['error'],
      'react/no-string-refs': ['error'],
      'react/no-unescaped-entities': ['error'],
      'react/no-unknown-property': ['error'],
      'react/no-unsafe': ['warn'],
      'react/self-closing-comp': ['error'],

      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': ['warn'],
      '@typescript-eslint/prefer-const': ['error'],
      '@typescript-eslint/no-var-requires': ['error'],
      '@typescript-eslint/explicit-function-return-type': ['off'],
      '@typescript-eslint/explicit-module-boundary-types': ['off'],
      '@typescript-eslint/no-non-null-assertion': ['warn'],
      '@typescript-eslint/prefer-nullish-coalescing': ['error'],
      '@typescript-eslint/prefer-optional-chain': ['error'],

      // Import rules
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-duplicates': ['error'],
      'import/no-unresolved': ['off'], // Handled by TypeScript

      // Accessibility
      'jsx-a11y/alt-text': ['error'],
      'jsx-a11y/anchor-has-content': ['error'],
      'jsx-a11y/anchor-is-valid': ['error'],
      'jsx-a11y/aria-props': ['error'],
      'jsx-a11y/aria-proptypes': ['error'],
      'jsx-a11y/aria-unsupported-elements': ['error'],
      'jsx-a11y/role-has-required-aria-props': ['error'],
      'jsx-a11y/role-supports-aria-props': ['error'],
    },
  },

  // Override for specific file types
  {
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}'],
    rules: {
      'no-console': ['off'],
      '@typescript-eslint/no-explicit-any': ['off'],
    },
  },

  // Override for configuration files
  {
    files: ['*.config.{js,mjs,ts}', '*.config.*.{js,mjs,ts}'],
    rules: {
      'no-console': ['off'],
      '@typescript-eslint/no-var-requires': ['off'],
    },
  },
];

export default eslintConfig;

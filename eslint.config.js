import js from '@eslint/js';
import globals from 'globals';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-plugin-prettier/recommended';
import svelteConfig from './svelte.config.js';

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs['flat/recommended'],
  prettier,
  ...svelte.configs['flat/prettier'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        extraFileExtensions: ['.svelte'],
      },
    },
    // TODO: Fix these rules -  We should choose which ones to use exactly for the portfolio
    rules: {
      // Svelte-specific rules from project conventions
      'svelte/require-each-key': 'error',
      'svelte/no-at-html-tags': 'warn',
      'svelte/no-at-debug-tags': 'warn',
      'svelte/no-target-blank': 'error',
      'svelte/no-navigation-without-resolve': 'off', // Disabled for now - external links use rel="external"
      'svelte/indent': 'off', // let prettier handle this
      'svelte/mustache-spacing': 'off', // let prettier handle this
      'svelte/html-self-closing': 'off', // let prettier handle this
      'svelte/max-attributes-per-line': 'off', // let prettier handle this

      // TypeScript rules
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-non-null-assertion': 'warn',
    },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        svelteConfig,
      },
    },
  },
  {
    files: [
      'src/lib/components/BackgroundEffect.svelte',
      'src/lib/components/ExperienceCard.svelte',
      'src/lib/components/ProjectCard.svelte',
      'src/lib/components/SkillList.svelte',
      'src/lib/theme.svelte.ts',
      'src/routes/journal/[slug]/+page.svelte',
    ],
    rules: {
      // Temporarily disable parsing errors for files using Svelte 5 runes
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    ignores: [
      '.svelte-kit/',
      'build/',
      'dist/',
      'node_modules/',
      '*.cjs',
      '*.mjs',
      '.DS_Store',
      'coverage/',
      '.pnpm-store/',
    ],
  },
];

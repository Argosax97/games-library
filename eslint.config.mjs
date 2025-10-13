import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.plugins(
    'simple-import-sort',
    'eslint-plugin-import',
    'eslint-plugin-prettier',
  ),
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ),
  ...compat.config({
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    overrides: [
      {
        files: ['**/*.{ts,tsx}'],
        rules: {
          'simple-import-sort/imports': [
            'error',
            {
              groups: [
                ['^react', '^@?\\w'], // Packages, React first
                ['^(@|lib|components|assets|pages|actions|app)(/.*|$)'], // Internal packages
                ['^\\u0000'], // Side effect imports
                ['^\\.\\.(?!/?$)', '^\\.\\./?$'], // Parent imports, `..` last
                ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // Other relative imports
                ['^.+\\.?(css)$'], // Style imports
              ],
            },
          ],
        },
      },
    ],
  }),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;

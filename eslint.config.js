import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import { globalIgnores } from 'eslint/config';

export default tseslint.config([
	globalIgnores(['dist', 'node_modules', 'build', '*.min.js', '*.min.css']),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs['recommended-latest'],
			reactRefresh.configs.vite,
			prettierConfig,
		],
		plugins: {
			prettier: prettier,
		},
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		rules: {
			// Prettier
			'prettier/prettier': 'error',

			// React
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',

			// TypeScript
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_' },
			],
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-var-requires': 'error',

			// General
			'no-console': 'warn',
			'no-debugger': 'error',
			'no-alert': 'warn',
			'no-var': 'error',
			'prefer-const': 'error',
			'no-unused-expressions': 'error',
			'no-duplicate-imports': 'error',
			'no-multiple-empty-lines': ['error', { max: 2 }],
			'eol-last': 'error',
			'no-trailing-spaces': 'error',
			'no-multi-spaces': 'error',
			'no-mixed-spaces-and-tabs': 'error',
			'no-irregular-whitespace': 'error',
			'linebreak-style': ['error', 'unix'],
			'max-len': [
				'warn',
				{
					code: 80,
					tabWidth: 2,
					ignoreUrls: true,
					ignoreStrings: true,
					ignoreTemplateLiterals: true,
					ignoreComments: true,
				},
			],
		},
	},
]);

// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
	{
		ignores: ['dist', 'scripts'],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh
		},
		languageOptions: {
			parser: tseslint.parser,
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				window: 'readonly',
				document: 'readonly',
			},
		},
		rules: {
			'@typescript-eslint/no-unused-expressions': "off",
			'react-refresh/only-export-components': [
				'warn',
				{
					allowConstantExport: true,
				},
			],
			'react-hooks/exhaustive-deps': [
				'warn',
				{
					additionalHooks: "(useMemoCompare|useMemoDeepCompare|useCallbackCompare|useCallbackDeepCompare|useLayoutEffectCompare|useLayoutEffectDeepCompare|useInsertionEffectCompare|useInsertionEffectDeepCompare|useEffectCompare|useEffectDeepCompare|usePromiseSuspensible)",
				},
			],
			'@typescript-eslint/no-explicit-any': 'warn',
		},
	},
];

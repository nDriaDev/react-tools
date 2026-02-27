import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
	entries: [
		{ input: './src/index',                    name: 'index' },
		{ input: './src/hooks/index',              name: 'hooks' },
		{ input: './src/hooks/state/index',        name: 'hooks/state' },
		{ input: './src/hooks/lifecycle/index',    name: 'hooks/lifecycle' },
		{ input: './src/hooks/performance/index',  name: 'hooks/performance' },
		{ input: './src/hooks/events/index',       name: 'hooks/events' },
		{ input: './src/hooks/api-dom/index',      name: 'hooks/api-dom' },
		{ input: './src/components/index',         name: 'components' },
		{ input: './src/utils/exports',            name: 'utils' },
	],
	clean: true,
	declaration: true,
	externals: ['react', 'react-dom', 'react/jsx-runtime'],
	rollup: {
		emitCJS: true,
		esbuild: {
			target: 'es2020',
			minify: true,
			minifyWhitespace: true,
			minifySyntax: true,
			minifyIdentifiers: true,
			treeShaking: true,
			legalComments: 'none' as const,
		}
	},
	sourcemap: false,
	failOnWarn: true,
	outDir: 'dist',
	replace: {
		__DEV__: "process.env.NODE_ENV !== 'production'"
	}
})

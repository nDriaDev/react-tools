import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tsConfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		tsConfigPaths(),
		dts({
			rollupTypes: true
		}),
		react()
	],
	mode: "production",
	esbuild: {
		minifyWhitespace: true,
		minifySyntax: true,
		minifyIdentifiers: true,
		treeShaking: true,
		ignoreAnnotations: true,
		legalComments: "none"
	},
	build: {
		copyPublicDir: false,
		minify: "esbuild",
		lib: {
			entry: resolve(__dirname, "src", "index.ts"),
			name: "react-tools",
			formats: ["es", "umd"],
			fileName: format => `react-tools.${format}.js`
		},
		rollupOptions: {
			treeshake: 'smallest',
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM"
				}
			}
		}
	}
})

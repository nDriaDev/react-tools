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
			entry: {
				"react-tools": resolve(__dirname, "src", "index.ts"),
				"utils": resolve(__dirname, "src", "utils", "exports.ts"),
				"hooks": resolve(__dirname, "src", "hooks", "index.ts"),
				"components": resolve(__dirname, "src", "components", "index.ts"),
			},
			formats: ["es", "cjs"],
			fileName: (format, entryName) => `${entryName}.${format === "es" ? "js" : format}`
		},
		rollupOptions: {
			treeshake: 'smallest',
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM"
				},
				noConflict: true,
				validate: true
			}
		}
	}
})

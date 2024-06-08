import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), eslint()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src/'),

			routes: `${path.resolve(__dirname, './src/routes/')}`,

			services: `${path.resolve(__dirname, './src/services/')}`,

			assets: `${path.resolve(__dirname, './src/assets/')}`,

			hook: `${path.resolve(__dirname, './src/hooks/')}`,

			context: `${path.resolve(__dirname, './src/context/')}`,

			styles: `${path.resolve(__dirname, './src/styles/')}`,

			utils: `${path.resolve(__dirname, './src/utils/')}`,

			pages: `${path.resolve(__dirname, './src/pages/')}`,
		},
	},
	build: {
		outDir: path.resolve(__dirname, 'build'),
	},
	server: {
		open: true,
		port: 8000,
		host: true,
	},
});

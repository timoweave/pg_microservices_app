import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        // Access-Control-Allow-Origin
        cors: true,
        proxy: {
            '/postgraphile': {
                secure: false,
                target: 'http://localhost:5050',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/postgraphile/, ''),
            },
        },
    },
    plugins: [react()],
});

import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react({ jsxImportSource: 'react' }), splitVendorChunkPlugin()],
  base: '/defence-academy-website/',
  esbuild: mode === 'production' ? { drop: ['console', 'debugger'] } : {},
  build: {
    sourcemap: mode === 'production',
    cssCodeSplit: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router')) return 'vendor-react-router';
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('lucide-react')) return 'vendor-icons';
            return 'vendor';
          }
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (!name) return 'assets/[name]-[hash][extname]';
          if (name.endsWith('.css')) return 'assets/css/[name]-[hash][extname]';
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp)$/i.test(name)) {
            return 'assets/img/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
}));

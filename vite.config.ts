import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

const resolvePath = (value: string) => fileURLToPath(new URL(value, import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolvePath('./src'),
      '@animations': resolvePath('./src/animations'),
      '@assets': resolvePath('./src/assets'),
      '@components': resolvePath('./src/components'),
      '@constants': resolvePath('./src/constants'),
      '@hooks': resolvePath('./src/hooks'),
      '@pages': resolvePath('./src/pages'),
      '@sections': resolvePath('./src/sections'),
      '@types': resolvePath('./src/types'),
      '@utils': resolvePath('./src/utils')
    }
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false
  }
});

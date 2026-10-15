import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    appType: 'mpa',
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(import.meta.dirname, 'index.html'),
          admin: path.resolve(import.meta.dirname, 'admin/index.html'),
          adminLogin: path.resolve(import.meta.dirname, 'admin/login.html'),
        },
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

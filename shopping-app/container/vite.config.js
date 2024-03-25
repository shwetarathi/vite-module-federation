import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from "@vitejs/plugin-basic-ssl";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(() => {
  return {
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
    plugins: [
      react(), 
      basicSsl(),
      federation({
        name: 'container',
        remotes: {
          products: 'https://localhost:3001/assets/remoteEntry.js',
          cart: 'https://localhost:3002/assets/remoteEntry.js'
        },
        shared: ['react'],
      })
    ],
    server: {
        port: 3000,
        https: true
      },
  };
});
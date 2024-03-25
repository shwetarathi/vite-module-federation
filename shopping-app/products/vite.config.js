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
        name: 'products', //name is the module name to be given to the javascript module that will be built including shared components.
        filename: 'remoteEntry.js', // is the Filename of the entry file for the javascript module. This is not required though as the default value for this will be `remoteEntry.js`.
        exposes: {
          './productList': './src/Products.jsx'  // is where we need to list down the components that we are going to expose as remote component with the remote module.
        },
        shared: ['react'],
      }),
    ],
    server: {
      port: 3001,
      https: true
    },
  };
});
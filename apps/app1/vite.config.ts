import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'
import mkcert from 'vite-plugin-mkcert'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgrPlugin({
      svgrOptions: {
        icon: true
      }
    }),
    mkcert(),
    checker({
      typescript: true
    })
  ],
  define: {
    // By default, Vite doesn't include shims for NodeJS/
    // necessary for segment analytics lib to work
    global: {}
  },
  server: {
     https: true,
     host: 'app1.local.com',
     port:3000
  },
  preview: {
    https: true,
    host: 'app1.local.com',
    port:3000
 },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser'
    }
  }
})

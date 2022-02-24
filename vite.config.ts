import vue from '@vitejs/plugin-vue'
import path from 'path'
import { AntDesignVueResolver, ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${pathSrc}/`,
    },
  },
  server: {
    host: '0.0.0.0'
  },
  build: {
    target: "esnext",
    outDir: 'dist',
    assetsInlineLimit: 1000,
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: false,
    brotliSize: false,
    rollupOptions: {
      inlineDynamicImports: true,
      output: {
        manualChunks: () => "everything.js",
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`
      },
      less: {
        additionalData: ``
      }
    },
  },
  plugins: [
    vue(),
    viteSingleFile(),
    Components({
      resolvers: [
        AntDesignVueResolver(),
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: path.resolve(pathSrc, 'components.d.ts'),
    }),
  ],
})

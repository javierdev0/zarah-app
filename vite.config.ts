import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'

  return {
    plugins: [react()],
    build: {
      minify: isDev ? false : true,
      rollupOptions: {
        output: {
          manualChunks: undefined,
          inlineDynamicImports: true,
          entryFileNames: '[name].js',
          assetFileNames: '[name].[ext]'
        }
      }
    }
  }
})

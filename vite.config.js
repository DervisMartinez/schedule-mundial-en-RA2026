import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['LOGORADIO.png'],
      manifest: {
        name: 'Mundial 2026 Radio América',
        short_name: 'Mundial 2026',
        description: 'Calendario, resultados y transmisión del Mundial 2026.',
        theme_color: '#9f1b20',
        background_color: '#fcf8f9',
        display: 'standalone',
        icons: [
          {
            src: 'LOGORADIO.png',
            sizes: '192x192 512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})

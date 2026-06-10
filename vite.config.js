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
        start_url: '/',
        description: 'Calendario, resultados y transmisión del Mundial 2026.',
        theme_color: '#9f1b20',
        background_color: '#fcf8f9',
        display: 'standalone',
        icons: [
          {
            src: '/LOGORADIO.png', // Asegúrate que este archivo esté en la carpeta `public`
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/LOGORADIO.png', // Y que tenga una resolución de al menos 512x512
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any' // o 'maskable' si el ícono está preparado para ello
          }
        ]
      }
    })
  ],
})

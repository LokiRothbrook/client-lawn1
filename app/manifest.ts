import type { MetadataRoute } from 'next'
import { companyInfo } from '@/lib/data'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: companyInfo.name,
    short_name: companyInfo.name,
    description: `${companyInfo.tagline}. Professional lawn care services.`,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2d6a2e',
    icons: [
      {
        src: '/branding/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/branding/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

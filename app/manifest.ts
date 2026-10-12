import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nemu Saya Villa',
    short_name: 'NemuSaya',
    description: 'A private luxury sanctuary on Sunset Road, Bali. Where modern architecture meets nature.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F7F3', // Your signature off-white
    theme_color: '#A7B18E',      // Your signature sage green
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      // You should add a 512x512 logo image to your public folder named icon-512.png
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
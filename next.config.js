/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'adv-webtech-hms-nestjs-production.up.railway.app',
        port: '',    
      },
    ],
  },
  nextConfig
}

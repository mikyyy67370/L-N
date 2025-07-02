/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ln-reinigung.ch',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    unoptimized: false,
  },
  reactStrictMode: true,
}

module.exports = nextConfig; 
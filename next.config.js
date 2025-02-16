/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Or specify your exact domains
      },
    ],
  },
}

module.exports = nextConfig 
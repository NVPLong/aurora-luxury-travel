/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cho phép load ảnh từ domain Unsplash (dùng cho mock data)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig

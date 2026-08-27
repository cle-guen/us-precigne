/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    // Required by Next 16+ when quality= is passed explicitly anywhere
    qualities: [75, 90, 100],
  },
  trailingSlash: true,
}

module.exports = nextConfig

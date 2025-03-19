/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false
};

module.exports = nextConfig; 
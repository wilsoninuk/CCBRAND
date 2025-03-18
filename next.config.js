/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [], // 如果需要从外部域名加载图片，请在这里添加
    unoptimized: true
  },
  // 添加生产环境优化
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
};

module.exports = nextConfig; 
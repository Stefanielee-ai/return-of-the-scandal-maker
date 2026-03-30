/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages 使用 Edge Runtime
  // 图片直接内联，不走外部 CDN
  images: {
    unoptimized: true,
  },
  // 静态导出模式适合 Cloudflare Pages
  // 如需 API Routes，保持默认（不加 output: 'export'）
};

module.exports = nextConfig;

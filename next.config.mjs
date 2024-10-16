/** @type {import('next').NextConfig} */

const nextConfig = {
  // ... other configurations ...
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

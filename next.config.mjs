/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow static image imports from src/assets
  images: {
    unoptimized: true,
  },
  // Enable Turbopack for faster dev experience
  turbopack: {},
};

export default nextConfig;

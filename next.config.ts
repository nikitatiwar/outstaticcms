import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tailwindcss.com","images.pexels.com"], // Allow images from tailwindcss.com
  },
  experimental: {
    // appDir: true, // Enable for Next.js App Router support (if applicable)
  },
  eslint : {
    ignoreDuringBuilds : true,
  },
};


module.exports = nextConfig;
// module.exports = {
//   reactStrictMode: true,
//   experimental: {
//     appDir: true,
//   },
// };
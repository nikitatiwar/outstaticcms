import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ["tailwindcss.com","images.pexels.com"], // Allow images from tailwindcss.com
  },
  swcMinify: false

};

module.exports = nextConfig;
module.exports = {
  reactStrictMode: true,
  experimental: { appDir: true },
};

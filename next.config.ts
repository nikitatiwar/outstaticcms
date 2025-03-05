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
};

module.exports = nextConfig;
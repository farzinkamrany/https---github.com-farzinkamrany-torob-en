/** @type {import('next').NextConfig} */
const nextConfig = {
     compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    // ignoreDuringBuilds: true,
  },
  
  pageExtensions: ['ts', 'tsx', 'page.jsx', 'page.js'],
  experimental: {
    appDir: true,
  },}

module.exports = nextConfig
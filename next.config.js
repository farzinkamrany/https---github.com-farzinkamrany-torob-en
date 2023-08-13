/** @type {import('next').NextConfig} */
const nextConfig = {
     compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  swcMinify: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  
  pageExtensions: ['ts', 'tsx', 'page.jsx', 'page.js'],
  experimental: {
    appDir: true,
  },}

module.exports = nextConfig
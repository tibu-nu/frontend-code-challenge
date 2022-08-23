const path = require("path");
const basePath = path.resolve(__dirname);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    basePath,
  },
};

module.exports = nextConfig;

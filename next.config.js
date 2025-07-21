/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config.js");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        "node:fs": false,
        path: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;

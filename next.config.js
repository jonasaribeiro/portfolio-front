/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  reactStrictMode: true,
  i18n,

  // Adicione este bloco de código
  webpack: (config, { isServer }) => {
    // Esta condição garante que a alteração só se aplique ao código do navegador.
    if (!isServer) {
      // Diz ao Webpack para tratar esses módulos como vazios no lado do cliente.
      config.resolve.fallback = {
        fs: false,
        'node:fs': false,
        path: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
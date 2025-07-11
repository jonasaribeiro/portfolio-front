/** @type {import('next').NextConfig} */

// Importa a configuração de i18n que você já tem
const { i18n } = require('./next-i18next.config.js');

const nextConfig = {
  reactStrictMode: true,
  // Adiciona a configuração de i18n ao Next.js
  // Esta é a parte que ativa o roteamento de idiomas
  i18n,
};

module.exports = nextConfig;
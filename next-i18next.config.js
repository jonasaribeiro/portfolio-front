const path = require("path");

module.exports = {
  // Aqui você define as configurações de internacionalização.
  i18n: {
    // Língua padrão (fallback) da sua aplicação
    defaultLocale: "en",
    // Todas as línguas que sua aplicação irá suportar
    locales: ["en", "pt"],
  },
  // O caminho onde estão os arquivos de tradução.
  // Geralmente, se você organizar os arquivos dentro da pasta public/locales,
  // essa propriedade garante que o Next-i18next encontre os arquivos corretamente.
  localePath: path.resolve("./public/locales"),

  // Outras configurações podem ser adicionadas caso precise
  // como debug: true para auxiliar no desenvolvimento
  debug: false,
};

/** @type {import('next-i18next').UserConfig} */

const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt"],
  },
  defaultNS: "common",
  localePath: path.resolve("./public/locales"),
  react: { useSuspense: false },
};

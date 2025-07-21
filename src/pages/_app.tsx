import { appWithTranslation, useTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head"; // NOVO: Importe o componente Head

import "../styles/reset.css";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleRouteChange = (locale: string) => {
      i18n.reloadResources(
        [locale],
        ["common", "header", "about", "academic", "projects", "contact"],
      );
    };

    if (router.locale) {
      handleRouteChange(router.locale);
    }
  }, [router.locale, i18n]);

  return (
    <>
      <Head>
        <title>Portfólio | Jonas Ribeiro</title>
        <meta
          name="description"
          content="Portfólio de Jonas Ribeiro, desenvolvedor web."
        />

        <link rel="icon" href="/icons/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} key={router.locale} />
    </>
  );
};

export default appWithTranslation(MyApp);

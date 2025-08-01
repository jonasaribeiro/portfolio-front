import { appWithTranslation, useTranslation } from "next-i18next";

import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

import type { AppProps } from "next/app";
import Head from "next/head";

import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";

import "../styles/reset.css";
import "../styles/global.css";
import { Toaster } from "react-hot-toast";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const { i18n } = useTranslation();
  const lenisRef = useRef<LenisRef>(null);

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

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  });

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

      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 5000,
            style: {
              background: "#0f172a",
              color: "#e2e8f0",
              border: "1px solid #334155",
            },
            success: {
              style: {
                background: "#059669",
                color: "#FFFFFF",
              },
              iconTheme: {
                primary: "#FFFFFF",
                secondary: "#059669",
              },
            },
            error: {
              style: {
                background: "#B91C1C",
                color: "#FFFFFF",
              },
              iconTheme: {
                primary: "#FFFFFF",
                secondary: "#B91C1C",
              },
            },
          }}
        />
        <Component {...pageProps} key={router.locale} />
      </ReactLenis>
    </>
  );
};

export default appWithTranslation(MyApp);

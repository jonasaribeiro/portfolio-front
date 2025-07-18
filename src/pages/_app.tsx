import { appWithTranslation, useTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import "../styles/reset.css";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleRouteChange = (locale: string) => {
      i18n.reloadResources([locale], ['common', 'header', 'about', 'projects', 'contact']);
    };

    if (router.locale) {
      handleRouteChange(router.locale);
    }
  }, [router.locale, i18n]);

  return <Component {...pageProps} key={router.locale} />;
}

export default appWithTranslation(MyApp);
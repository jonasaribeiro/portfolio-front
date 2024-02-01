import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log("Teste");

  useEffect(() => {
    if (router.pathname === "/") {
      const browserLang = navigator.language;

      if (browserLang.includes("pt")) {
        router.push("/pt");
      } else {
        router.push("/en");
      }
    }
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;

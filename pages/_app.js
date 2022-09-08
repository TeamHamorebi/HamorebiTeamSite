import "../styles/base/_index.scss";
import Head from "next/head";
import { useEffect } from "react";
import { changeViewport } from "../lib/changeViewport";
import { smoothScroll } from "../lib/smoothScroll";
import usePageView from "../hooks/usePageView";
import GoogleAnalytics from "../components/common/GoogleAnalytics";

function MyApp({ Component, pageProps }) {
  usePageView();

  useEffect(() => {
    changeViewport();
    smoothScroll();
  });

  return (
    <>
      <GoogleAnalytics />
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

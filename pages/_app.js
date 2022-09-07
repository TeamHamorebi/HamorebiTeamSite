import "../styles/base/_index.scss";
import Head from "next/head";
import { useEffect } from "react";
import { changeViewport } from "../lib/changeViewport";
import { smoothScroll } from "../lib/smoothScroll";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    changeViewport();
    smoothScroll();
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

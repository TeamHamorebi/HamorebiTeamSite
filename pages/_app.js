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
        {/* google search console */}
        <meta
          name="google-site-verification"
          content="RtZ1y7CMsyKpE_iNqTT6oieFMk2iItCJXjD9y1H46QQ"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

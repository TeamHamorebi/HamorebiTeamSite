import "../styles/base/_index.scss";
import Head from "next/head";
import { useEffect } from "react";
import { changeViewport } from "../lib/changeViewport";
import { smoothScroll } from "../lib/smoothScroll";
import Seo from "../components/common/Seo";

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
      <Seo
        pagePath={"https://hamorebi-team-site.netlify.app"}
        pageImg={
          "https://hamorebi-team-site.netlify.app/img/top/hamorebi_logo_color--big.png"
        }
        pageImgWidth={804}
        pageImgHeight={562}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

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
        <title>Web制作チーム Hamorebiーはもれびー</title>
        <meta
          name="description"
          content={
            "私達はWeb制作を承るフリーランスチームのHamorebi ーはもれびーです。Webサイト、ECサイト、ランディングページ、UIデザイン等の制作を行っております。日本各地のクリエーター達が、皆様のお悩みやお困りごとに寄り添って、解決のお手伝いをします"
          }
        />
        <meta
          property="og:url"
          content={"https://hamorebi-team-site.netlify.app"}
        />
        <meta
          property="og:title"
          content={"Web制作チーム Hamorebiーはもれびー"}
        />
        <meta
          property="og:site_name"
          content={"Web制作チーム Hamorebiーはもれびー"}
        />
        <meta
          property="og:description"
          content={
            "私達はWeb制作を承るフリーランスチームのHamorebi ーはもれびーです。Webサイト、ECサイト、ランディングページ、UIデザイン等の制作を行っております。日本各地のクリエーター達が、皆様のお悩みやお困りごとに寄り添って、解決のお手伝いをします"
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={
            "https://hamorebi-team-site.netlify.app/img/top/hamorebi_logo_color--big.png"
          }
        />
        <meta property="og:image:width" content={804} />
        <meta property="og:image:height" content={562} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={"https://hamorebi-team-site.netlify.app"} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

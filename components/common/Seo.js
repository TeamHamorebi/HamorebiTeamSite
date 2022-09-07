import Head from "next/head";

export default function Seo({
    pageTitle,
    pageDescription,
    pagePath,
    pageImg,
    pageImgWidth,
    pageImgHeight,
    twitterCard
}) {
    const defaultTitle = "Web制作チーム Hamorebiーはもれびー"
    const defaultDescription = "私達はWeb制作を承るフリーランスチームのHamorebi ーはもれびーです。Webサイト、ECサイト、ランディングページ、UIデザイン等の制作を行っております。日本各地のクリエーター達が、皆様のお悩みやお困りごとに寄り添って、解決のお手伝いをします"

    const title = pageTitle ? `【制作実績】${pageTitle} | ${defaultTitle}` : defaultTitle;
    const description = pageDescription ? pageDescription : defaultDescription;
    const url = pagePath;
    const imgUrl = pageImg;
    const imgWidth = pageImgWidth ? pageImgWidth : 1280;
    const imgHeight = pageImgHeight ? pageImgHeight : 640;
    const card = twitterCard

    return (
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imgUrl} />
        <meta property="og:image:width" content={String(imgWidth)} />
        <meta property="og:image:height" content={String(imgHeight)} />
        <meta name="twitter:card" content={card} />
        <link rel="canonical" href={url} />
      </Head>
    );
}
import styles from "../../styles/components/home/_AboutAndPromise.module.scss";

export default function AboutAndPromise() {
  const cardInfo = [
    {
      img: "/img/top/promise-1.png",
      title: [
        <span className={styles.cardTitleDecoration} key="index">
          型にとらわれない制作
        </span>,
        "をご提案いたします",
      ],
      text: "お客様が叶えたい夢や解決したいお悩みは何かを詳しく伺い、それを実現するために最適な構成のWebサイトをご提案いたします。コミュニケーションを大切にしているHamorebiは制作開始前のヒアリングを丁寧に行い、ホームページに近いLP、LPに近いショピングサイトなど一般的な構成や型にとらわれないWeb制作もお作りいたします。",
    },
    {
      img: "/img/top/promise-2.png",
      title: [
        <span className={styles.cardTitleDecoration} key="index">
          末永く継続的にサポート
        </span>,
        "いたします",
      ],
      text: [
        "Webサイトは「完成がはじまり」です。見た目が美しいもの、インパクトが強いものを作ってそれでおしまい、ではありません。",
        <br key="index" />,
        "改善を重ねアップデートをして、最新の情報を届けたい人に届けられるWebサイトを作り続けることが重要です。",
        <br key="index" />,
        "Hamorebiは納品して終わり！ではなく、お客様のサービス・事業のメンバーのひとりであるという心構えで、末永くその後の改善やサポートをご提案いたします。",
      ],
    },
    {
      img: "/img/top/promise-3.png",
      title: [
        <span className={styles.cardTitleDecoration} key="index">
          同じ目線
        </span>,
        "で寄り添います",
      ],
      text: "大きな制作会社ではなくフリーランスのクリエーター達が集まった小さな制作チームだからこそ、フレンドリーな距離感で、お客様と同じ目線で、わかりやすい言葉でご対応いたします。ITにあまり詳しくない方でも、どうぞ安心してお気軽にご相談ください。",
    },
  ];

  return (
    <section id="about" className={styles.aboutAndPromise}>
      {/* contents wrap */}
      <div className={styles.contentsWrap}>
        <p className={styles.textTop}>
          私達はWeb制作を承る
          <br />
          フリーランスチームの
          <span className={styles.textBoldface}>Hamorebi ーはもれびー</span>です
        </p>
        <p className={styles.textBottom}>
          Webサイト、ECサイト、ランディングページ
          <br />
          UIデザイン等の制作を行っております
          <br />
          日本各地のクリエーター達が
          <br />
          皆様のお悩みやお困りごとに寄り添って
          <br />
          解決のお手伝いをします
        </p>
      </div>
      {/* /contents wrap */}
      {/* promise */}
      <h2 className={styles.promiseTitle}>
        Hamorebiの
        <span className={styles.titleBoldface}>３</span>
        つのお約束
      </h2>
      <ul className={styles.promiseCardWrap}>
        {cardInfo.map((value, index) => {
          return (
            <li key={index} className={styles.promiseCard}>
              <div className={styles.cardImgWrap}>
                <img src={value.img} />
              </div>
              <p className={styles.cardTitle}>{value.title}</p>
              <p className={styles.cardText}>{value.text}</p>
            </li>
          );
        })}
      </ul>
      {/* /promise */}
    </section>
  );
}

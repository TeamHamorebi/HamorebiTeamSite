import styles from "../../styles/pages/work-details/_WorkDetails.module.scss";
import Layout from "../../components/common/Layout";
import Breadcrumb from "../../components/common/Breadcrumb";
import SectionTitle from "../../components/common/SectionTitle";

export default function WorkDetails() {
  const infoData = [
    {
      mainImg: "/img/work-details/work-details_profit.jpg",
      caseName: "プロフィットバンク様ホームページ",
      siteUrl: "https://profit-bnk.com/",
      clientName: "株式会社プロフィットバンク様",
      category: "コーポレートサイト",
      productionTimeTotal: "約5ヶ月",
      productionTimeDesign: "約2ヶ月",
      productionTimeConstruction: "約3ヶ月",
      tools: "Vue.js　Vuetify　Tailwind CSS　Figma",
      director: "ごんたく",
      engineer: "岡田智哉、まゆめろん",
      webDesigner: "杉本崇幸、ヤナギナツ",
      caseSummary:
        "株式会社プロフィットバンク様より自社ホームページの制作を承り、ディレクション、デザイン、コーディングを行いました。",
      engineerComments: [
        "SPA(Single Page Application)を採用し、WordPressによる制作よりも高速なページ遷移を実現しました。",
        <br key="br" className={styles.br} />,
        "アニメーション部分は、GSAPを採用しています。ユーザーが見やすいタイミングでコンテンツが表示されるように工夫をしました。",
      ],
      webDesignerComments:
        "大阪を中心にIT技術を活用したサービスを提供しているクライアントでしたので、クリエイティブな印象を与えられるよう、スタイリッシュなデザインを心掛けました。FVでは大きくキャッチコピーを入れ、説明テキストには選定したキーワードを盛り込みました。ナビゲーションは項目が多かったので、縦にし、お問い合わせはボタンにして目立たせています。文字だけではイメージがつきにくいのでイラストをいれてアクセントにしつつも、ポップにならすぎないよう工夫しました。",
    },
  ];

  const compData = [
    {
      pcImg: "/img/work-details/work-details_profit-2.png",
      spImg: "/img/work-details/work-details_profit-3.png",
    },
    {
      pcImg: "/img/work-details/work-details_profit-4.png",
      spImg: "/img/work-details/work-details_profit-5.png",
    },
  ];

  return (
    <Layout>
      <div className={styles.contentsWrap}>
        <Breadcrumb />
        <SectionTitle title={"制作実績"} />

        <div className={styles.workDetailsContentsWrap}>
          {infoData.map((value, index) => {
            return (
              <>
                <div key={index} className={styles.mainInfo}>
                  <div className={styles.mainImgWrap}>
                    <img src={value.mainImg} />
                  </div>
                  <div className={styles.mainInfoTextWrap}>
                    <p className={styles.caseName}>{value.caseName}</p>
                    <a className={styles.siteLink} href={value.siteUrl}>
                      {value.siteUrl}
                    </a>
                    <p
                      className={styles.infoText}
                    >{`クライアント：${value.clientName}`}</p>
                    <p className={styles.infoText}>{value.category}</p>
                    <p
                      className={styles.infoText}
                    >{`制作期間：${value.productionTimeTotal}（デザイン：${value.productionTimeDesign}、構築：${value.productionTimeConstruction}）`}</p>
                    <p className={styles.infoText}>{value.tools}</p>
                    <div className={styles.personWrap}>
                      <p
                        className={styles.personName}
                      >{`ディレクター：${value.director}`}</p>
                      <p
                        className={styles.personName}
                      >{`エンジニア：${value.engineer}`}</p>
                      <p
                        className={styles.personName}
                      >{`Webデザイナー：${value.webDesigner}`}</p>
                    </div>
                  </div>
                </div>

                <p className={styles.caseSummary}>{value.caseSummary}</p>

                <p className={styles.productionOutlineTile}>制作概要</p>
                <p className={styles.engineerComments}>
                  {value.engineerComments}
                </p>
                <p className={styles.webDesignerComments}>
                  {value.webDesignerComments}
                </p>
              </>
            );
          })}

          <ul className={styles.compImgList}>
            {compData.map((value, index) => {
              return (
                <li key={index} className={styles.compImgItem}>
                  <div className={styles.compImgWrapPc}>
                    <img src={value.pcImg} />
                  </div>
                  <div className={styles.compImgWrapSp}>
                    <img src={value.spImg} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

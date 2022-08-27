import styles from "../../styles/pages/work-details/_WorkDetails.module.scss";
import Layout from "../../components/common/Layout";
import Breadcrumb from "../../components/common/Breadcrumb";
import SectionTitle from "../../components/common/SectionTitle";
import Button from "../../components/common/Button";

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
        <br key="br" />,
        "アニメーション部分は、GSAPを採用しています。ユーザーが見やすいタイミングでコンテンツが表示されるように工夫をしました。",
      ],
      webDesignerComments:
        "大阪を中心にIT技術を活用したサービスを提供しているクライアントでしたので、クリエイティブな印象を与えられるよう、スタイリッシュなデザインを心掛けました。FVでは大きくキャッチコピーを入れ、説明テキストには選定したキーワードを盛り込みました。ナビゲーションは項目が多かったので、縦にし、お問い合わせはボタンにして目立たせています。文字だけではイメージがつきにくいのでイラストをいれてアクセントにしつつも、ポップになりすぎないよう工夫しました。",
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
      <section className={styles.workDetails}>
        <Breadcrumb />

        <div className={styles.sectionTitleWrap}>
          <SectionTitle title={"制作実績"} />
        </div>

        <div className={styles.contentsWrap}>
          {infoData.map((value, index) => {
            return (
              <>
                {/* 2カラム */}
                <div key={index} className={styles.mainInfo}>
                  {/* img */}
                  <div className={styles.mainImgWrap}>
                    <img src={value.mainImg} />
                  </div>
                  {/* /img */}

                  {/* main info */}
                  <div className={styles.mainInfoTextWrap}>
                    {/* 案件名 */}
                    <h3 className={styles.caseName}>{value.caseName}</h3>
                    {/* /案件名 */}

                    {/* サイトリンク */}
                    <a
                      className={styles.siteLink}
                      href={value.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {value.siteUrl}
                    </a>
                    {/* /サイトリンク */}

                    {/* クライアント名 */}
                    <p className={styles.infoText}>
                      <span className={styles.infoTextBoldface}>
                        クライアント：
                      </span>
                      <br className={styles.infoTextBr} />
                      {value.clientName}
                    </p>
                    {/* /クライアント名 */}

                    {/* カテゴリ */}
                    <p className={styles.infoText}>
                      <span className={styles.infoTextBoldface}>
                        カテゴリ：
                      </span>
                      <br className={styles.infoTextBr} />
                      {value.category}
                    </p>
                    {/* /カテゴリ */}

                    {/* 制作期間 */}
                    <p className={styles.infoText}>
                      <span className={styles.infoTextBoldface}>
                        制作期間：
                      </span>
                      {value.productionTimeTotal}（デザイン：
                      {value.productionTimeDesign}、構築：
                      {value.productionTimeConstruction}）
                    </p>
                    {/* /制作期間 */}

                    {/* 使用ツール */}
                    <p className={styles.infoText}>
                      <span className={styles.infoTextBoldface}>
                        使用言語・ツール：
                      </span>
                      {value.tools}
                    </p>
                    {/* /使用ツール */}

                    {/* 担当者 */}
                    <div className={styles.personWrap}>
                      <p className={styles.personName}>
                        <span className={styles.infoTextBoldface}>
                          ディレクター：
                        </span>
                        {value.director}
                      </p>
                      <p className={styles.personName}>
                        <span className={styles.infoTextBoldface}>
                          エンジニア：
                        </span>
                        {value.engineer}
                      </p>
                      <p className={styles.personName}>
                        <span className={styles.infoTextBoldface}>
                          Webデザイナー：
                        </span>
                        {value.webDesigner}
                      </p>
                    </div>
                    {/* /担当者 */}
                  </div>
                  {/* /main info */}
                </div>
                {/* /2カラム */}

                {/* 概要 */}
                <div className={styles.outlineInfo}>
                  <p className={styles.caseSummary}>{value.caseSummary}</p>

                  <h4 className={styles.productionOutlineTile}>制作概要</h4>
                  <h5 className={styles.productionOutlineSubTile}>構築</h5>
                  <p className={styles.engineerComments}>
                    {value.engineerComments}
                  </p>
                  <h5 className={styles.productionOutlineSubTile}>デザイン</h5>
                  <p className={styles.webDesignerComments}>
                    {value.webDesignerComments}
                  </p>
                </div>
                {/* /概要 */}
              </>
            );
          })}

          {/* カンプ */}
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
          {/* /カンプ */}
        </div>

        <Button
          styles={styles.btnWrap}
          text={"トップページに戻る"}
          link={"/"}
        />
      </section>
    </Layout>
  );
}

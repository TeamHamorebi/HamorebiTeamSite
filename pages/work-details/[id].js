import styles from "../../styles/pages/work-details/_WorkDetails.module.scss";
import Layout from "../../components/common/Layout";
import Breadcrumb from "../../components/common/Breadcrumb";
import SectionTitle from "../../components/common/SectionTitle";
import Button from "../../components/common/Button";
import AnimationTrigger from "../../components/common/AnimationTrigger";
// microCMSとの連携
import { client } from "../../lib/client";
// OGP
import Seo from "../../components/common/Seo";

export default function WorkDetails({ workDetailsData }) {
  return (
    <Layout>
      <Seo
        pageTitle={workDetailsData.caseName}
        pageDescription={workDetailsData.caseSummary}
        pageType={"article"}
        pagePath={`https://hamorebi-team-site.netlify.app/work-details/${workDetailsData.id}`}
        pageImg={workDetailsData.mainImg.url}
        pageImgWidth={workDetailsData.mainImg.width}
        pageImgHeight={workDetailsData.mainImg.height}
        twitterCard={"summary_large_image"}
      />

      <AnimationTrigger
        animation={styles.isFadeIn}
        rootMargin="-10%"
        triggerOnce
      >
        <section className={styles.workDetails}>
          <Breadcrumb data={workDetailsData} />

          <AnimationTrigger
            animation={styles.isFadeUp}
            rootMargin="-15%"
            triggerOnce
          >
            <div className={styles.sectionTitleWrap}>
              <SectionTitle title={"制作実績"} />
            </div>

            <div className={styles.contentsWrap}>
              {/* 2カラム */}
              <div className={styles.mainInfo}>
                {/* img */}
                <div className={styles.mainImgWrap}>
                  <img src={workDetailsData.mainImg.url} />
                </div>
                {/* /img */}

                {/* main info */}
                <div className={styles.mainInfoTextWrap}>
                  {/* 案件名 */}
                  <h3 className={styles.caseName}>
                    {workDetailsData.caseName}
                  </h3>
                  {/* /案件名 */}

                  {/* サイトリンク */}
                  <a
                    className={styles.siteLink}
                    href={workDetailsData.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {workDetailsData.siteUrl}
                  </a>
                  {/* /サイトリンク */}

                  {/* クライアント名 */}
                  <p className={styles.infoText}>
                    <span className={styles.infoTextBoldface}>
                      クライアント：
                    </span>
                    <br className={styles.infoTextBr} />
                    {workDetailsData.clientName}様
                  </p>
                  {/* /クライアント名 */}

                  {/* カテゴリ */}
                  <p className={styles.infoText}>
                    <span className={styles.infoTextBoldface}>カテゴリ：</span>
                    <br className={styles.infoTextBr} />
                    {workDetailsData.category}
                  </p>
                  {/* /カテゴリ */}

                  {/* 制作期間 */}
                  <p className={styles.infoText}>
                    <span className={styles.infoTextBoldface}>制作期間：</span>
                    {workDetailsData.productionTimeTotal}（デザイン：
                    {workDetailsData.productionTimeDesign}、構築：
                    {workDetailsData.productionTimeBuild}）
                  </p>
                  {/* /制作期間 */}

                  {/* 使用ツール */}
                  <p className={styles.infoText}>
                    <span className={styles.infoTextBoldface}>
                      使用言語・ツール：
                    </span>
                    {workDetailsData.tools}
                  </p>
                  {/* /使用ツール */}

                  {/* 担当者 */}
                  <div className={styles.personWrap}>
                    <p className={styles.personName}>
                      <span className={styles.infoTextBoldface}>
                        ディレクター：
                      </span>
                      {workDetailsData.director}
                    </p>
                    <p className={styles.personName}>
                      <span className={styles.infoTextBoldface}>
                        エンジニア：
                      </span>
                      {workDetailsData.engineer}
                    </p>
                    <p className={styles.personName}>
                      <span className={styles.infoTextBoldface}>
                        Webデザイナー：
                      </span>
                      {workDetailsData.webDesigner}
                    </p>
                  </div>
                  {/* /担当者 */}
                </div>
                {/* /main info */}
              </div>
              {/* /2カラム */}

              {/* 概要 */}
              <div className={styles.outlineInfo}>
                <p className={styles.caseSummary}>
                  {workDetailsData.caseSummary}
                </p>

                <h4 className={styles.productionOutlineTile}>制作概要</h4>
                <h5 className={styles.productionOutlineSubTile}>構築</h5>
                <div
                  className={styles.engineerComments}
                  dangerouslySetInnerHTML={{
                    __html: `${workDetailsData.engineerComments}`,
                  }}
                />
                <h5 className={styles.productionOutlineSubTile}>デザイン</h5>
                <div
                  className={styles.webDesignerComments}
                  dangerouslySetInnerHTML={{
                    __html: `${workDetailsData.webDesignerComments}`,
                  }}
                />
              </div>
              {/* /概要 */}

              {/* カンプ */}
              <ul className={styles.compImgList}>
                <li className={styles.compImgItem}>
                  <div className={styles.compImgWrapPc}>
                    <img src={workDetailsData.pcImg.url} />
                  </div>
                  <div className={styles.compImgWrapSp}>
                    <img src={workDetailsData.spImg.url} />
                  </div>
                </li>
                {/* 2枚目のPC・SPカンプがあれば表示 */}
                {workDetailsData.pcImg2 !== undefined ||
                workDetailsData.spImg2 !== undefined ? (
                  <li className={styles.compImgItem}>
                    {workDetailsData.pcImg2 !== undefined ? (
                      <div className={styles.compImgWrapPc}>
                        <img src={workDetailsData.pcImg2.url} />
                      </div>
                    ) : undefined}
                    {workDetailsData.spImg2 !== undefined ? (
                      <div className={styles.compImgWrapSp}>
                        <img src={workDetailsData.spImg2.url} />
                      </div>
                    ) : undefined}
                  </li>
                ) : undefined}
              </ul>
              {/* /カンプ */}
            </div>

            <Button
              styles={styles.btnWrap}
              text={"制作実績一覧に戻る"}
              link={"/#work"}
            />
          </AnimationTrigger>
        </section>
      </AnimationTrigger>
    </Layout>
  );
}

// path
export const getStaticPaths = async () => {
  const data = await client.get({
    endpoint: "work-details",
  });

  const paths = data.contents.map((content) => `/work-details/${content.id}`);
  return { paths, fallback: false };
};

// props
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "work-details",
    contentId: id,
  });

  return {
    props: {
      workDetailsData: data,
    },
  };
};

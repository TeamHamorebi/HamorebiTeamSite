import styles from "../../styles/components/home/_ServiceAndPrice.module.scss";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

export default function ServiceAndPrice() {
  const data = [
    {
      serviceName: "LP",
      priceAndAttention: [
        <span key="lp" className={styles.boldface}>
          21
        </span>,
        "万円〜",
      ],
      description:
        "LP(ランディングページ)は、集客・商品やサービスの購入・お問い合わせへの誘導に特化した縦に長い1枚のページです",
      img: "/img/top/service_site-lp.png",
    },
    {
      serviceName: "ECサイト",
      priceAndAttention: [
        <span key="ec" className={styles.boldface}>
          40
        </span>,
        "万円〜",
      ],
      description:
        "商品を販売するための通販サイトです。オンラインショッププラットフォーム「Shopify」で制作いたします",
      img: "/img/top/service_site-ec.png",
    },
    {
      serviceName: "UIデザイン",
      priceAndAttention: [
        <span key="ui" className={styles.boldface}>
          21
        </span>,
        "万円〜",
        <span key="attention" className={styles.attention}>
          10画面 / スマートフォンまたはパソコンのいずれか
        </span>,
      ],
      description:
        "ユーザーにとって使いやすいWebサービスやアプリのデザインを提供します",
      img: "/img/top/service_site-ui.png",
    },
  ];

  return (
    <section id="service-and-price" className={styles.serviceAndPrice}>
      <SectionTitle
        title={
          <>
            サービス<span>＆</span>料金
          </>
        }
      />
      <p className={styles.lead}>
        承る内容によって金額は変動します
        <br />
        お話を伺ってからお見積りをさせていただきます
        <br />
        まずはぜひ一度お問い合わせくださいませ
      </p>

      <ul className={styles.serviceList}>
        {/* item (site) */}
        <li className={styles.serviceItem}>
          <div className={styles.serviceNameWrap}>
            <h3 className={styles.serviceName}>サイト制作</h3>
          </div>
          <div className={styles.serviceContentsWrap}>
            <p className={styles.servicePrice}>
              <span className={styles.boldface}>33</span>万円〜
            </p>
            <div className={styles.serviceDescriptionWrap}>
              <p className={styles.serviceDescription}>
                Webサイトは商品やサービス・企業の詳細、ブランドなどユーザーに情報を提供することを目的とした複数のWebページで構成されたものです
              </p>
            </div>
            {/* example list */}
            <ul className={styles.siteExampleList}>
              {/* example item */}
              <li className={styles.siteExampleItem}>
                <p className={styles.exampleName}>【例】ホームページ</p>
                <p className={styles.examplePrice}>
                  <span className={styles.exampleBoldface}>33</span>万円〜
                </p>
                <p className={styles.configurationExample}>
                  トップページ＋下層4ページ
                  <span>
                    TOP
                    <br />
                    商品情報
                    <br />
                    店舗情報
                    <br />
                    お問い合わせ
                    <br />
                    プライバシーポリシー
                    <br />
                    （ショッピング機能は含みません）
                  </span>
                </p>
              </li>
              {/* /example item */}
              {/* example item */}
              <li className={styles.siteExampleItem}>
                <p className={styles.exampleName}>【例】コーポレートサイト</p>
                <p className={styles.examplePrice}>
                  <span className={styles.exampleBoldface}>43</span>万円〜
                </p>
                <p className={styles.configurationExample}>
                  トップページ＋下層5ページ
                  <span>
                    TOP
                    <br />
                    企業情報
                    <br />
                    会社概要
                    <br />
                    お知らせ
                    <br />
                    お問い合わせ
                    <br />
                    プライバシーポリシー
                  </span>
                </p>
              </li>
              {/* /example item */}
            </ul>
            {/* example list */}
            <div className={styles.serviceImgWrap}>
              <img src="/img/top/service_site-site.png" />
            </div>
          </div>
        </li>
        {/* /item (site) */}

        {/* item (other) */}
        {data.map((value, index) => {
          return (
            <li key={index} className={styles.serviceItem}>
              <div className={styles.serviceNameWrap}>
                <h3 className={styles.serviceName}>{value.serviceName}</h3>
              </div>
              <div className={styles.serviceContentsWrap}>
                <div className={styles.serviceTextWrap}>
                  <p className={styles.servicePrice}>
                    {value.priceAndAttention}
                  </p>
                  <div className={styles.serviceDescriptionWrap}>
                    <p className={styles.serviceDescription}>
                      {value.description}
                    </p>
                  </div>
                </div>
                <div className={styles.serviceImgWrap}>
                  <img src={value.img} />
                </div>
              </div>
            </li>
          );
        })}
        {/* /item (other) */}
      </ul>

      <Button
        styles={styles.contactBtnWrap}
        text={"お問い合わせをする"}
        link={"#contact"}
      />
    </section>
  );
}

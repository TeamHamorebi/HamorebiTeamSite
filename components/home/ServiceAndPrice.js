import styles from "../../styles/components/home/_ServiceAndPrice.module.scss";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

export default function ServiceAndPrice() {
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
      {/* list */}
      <ul className={styles.serviceList}>
        {/* item (site) */}
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceName}>サイト制作</h3>
          <p className={styles.servicePrice}>
            <span className={styles.boldface}>33</span>万円〜
          </p>
          <p className={styles.serviceDescription}>
            Webサイトは商品やサービス・企業の詳細、ブランドなどユーザーに情報を提供することを目的とした複数のWebページで構成されたものです
          </p>
          {/* example list */}
          <ul className={styles.siteExampleList}>
            {/* example item */}
            <li className={styles.siteExampleItem}>
              <p className={styles.exampleName}>【例】ホームページ</p>
              <div className={styles.examplePriceWrap}>
                <p className={styles.servicePrice}>
                  <span className={styles.boldface}>33</span>万円〜
                </p>
              </div>
              <p className={styles.configurationExample}>
                トップページ＋下層4ページ
                <br />
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
              </p>
            </li>
            {/* /example item */}
            {/* example item */}
            <li className={styles.siteExampleItem}>
              <p className={styles.exampleName}>【例】コーポレートサイト</p>
              <div className={styles.examplePriceWrap}>
                <p className={styles.servicePrice}>
                  <span className={styles.boldface}>43</span>万円〜
                </p>
              </div>
              <p className={styles.configurationExample}>
                トップページ＋下層5ページ
                <br />
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
              </p>
            </li>
            {/* /example item */}
          </ul>
          {/* example list */}
          <div className={styles.serviceImgWrap}>
            <img src="/img/top/service_site-site.png" />
          </div>
        </li>
        {/* /item (site) */}

        {/* item (other) */}
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceName}>サイト制作</h3>
          <div className={styles.serviceContentsWrap}>
            <div className={styles.serviceTextWrap}>
              <p className={styles.servicePrice}>
                <span className={styles.boldface}>33</span>万円〜
              </p>
              <p className={styles.serviceDescription}>
                Webサイトは商品やサービス・企業の詳細、ブランドなどユーザーに情報を提供することを目的とした複数のWebページで構成されたものです
              </p>
            </div>
            <div className={styles.serviceImgWrap}>
              <img src="/img/top/service_site-site.png" />
            </div>
          </div>
        </li>
        {/* /item (other) */}
      </ul>
      {/* /list */}
    </section>
  );
}

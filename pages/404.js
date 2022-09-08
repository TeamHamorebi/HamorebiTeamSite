import styles from "../styles/pages/_404.module.scss";
import Layout from "../components/common/Layout";
import Button from "../components/common/Button";

export default function Custom404() {
  return (
    <Layout>
      <div className={styles.contentsWrap}>
        <div className={styles.imgWrap}>
          <picture>
            <source media="(min-width: 640px)" srcSet="/img/404/404_pc.webp" />
            <source media="(min-width: 640px)" srcSet="/img/404/404_pc.png" />
            <source srcSet="/img/404/404_sp.webp" />
            <img src="/img/404/404_sp.png" alt="404" />
          </picture>
        </div>
        <p className={styles.imgDecorationText}>Not Found</p>
        <p className={styles.title}>お探しのページは見つかりませんでした</p>
        <p className={styles.detailsText}>
          Hamorebiチームサイトをご覧いただきましてありがとうございます
          <br />
          ご不便をおかけいたしまして申し訳ございません
          <br />
          お探しのページは一時的にアクセスできない状況にあるか
          <br className={styles.brPC} />
          ページが変更・削除された可能性がございます
          <br />
          恐れ入りますがトップページよりお探しの情報をおもとめくださいませ
          <br />
          今後もより良いサービスをご提供してまいりますので
          <br className={styles.brPC} />
          引き続きよろしくお願いいたします
        </p>

        <Button
          styles={styles.btnWrap}
          text={"トップページに戻る"}
          link={"/"}
        />
      </div>
    </Layout>
  );
}

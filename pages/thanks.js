import Layout from "../components/common/Layout";
import styles from "../styles/pages/_thanks.module.scss";
import Button from "../components/common/Button";

export default function Thanks() {
  return (
    <Layout>
      <section className={styles.thanks}>
        <h2 className={styles.title}>
          お問い合わせ内容が
          <br className={styles.titleBr} />
          送信されました
        </h2>
        <p className={styles.text}>
          この度はWeb制作チーム Hamorebi ーはもれびー に
          <br className={styles.textBrPC} />
          お問い合わせいただきまして、誠にありがとうございます。
          <br />
          内容確認後、改めてご連絡しますので今しばらくお待ちください。
        </p>
        <p className={styles.text}>
          ご入力いただいたメールアドレス宛に確認メールをお送りしました。
          <br />
          届いていない場合は、メールアドレスが誤っているか、
          <br className={styles.textBrPC} />
          迷惑メールフォルダ等に振り分けられている可能性がありますので、
          <br />
          再度ご確認をお願いいたします。
          <br />
        </p>
        <p className={styles.text}>
          万一、数日経過しても連絡がない場合は、送信トラブル等の可能性もありますので、
          <br className={styles.textBrPC} />
          大変お手数ではございますが、もう一度フォームよりお問い合わせをお願いいたします。
        </p>
        <p className={styles.text}>
          今後とも、Web制作チーム Hamorebi ーはもれびー
          をよろしくお願いいたします。
        </p>
        <Button
          styles={styles.btnWrap}
          text={"トップページに戻る"}
          link={"/"}
        />
      </section>
    </Layout>
  );
}

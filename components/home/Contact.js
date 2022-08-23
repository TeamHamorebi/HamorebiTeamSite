import styles from "../../styles/components/home/_Contact.module.scss";
import SectionTitle from "../common/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <SectionTitle title={"お問い合わせ"} />

      <p className={styles.lead}>
        この度は「Hamorebi」チームサイトをご覧いただきましてありがとうございます
        <br />
        お問い合わせはフォームへご入力ください
        <br />
        3営業日以内に担当者よりご連絡いたします
        <br />
        どうぞお気軽にお問い合わせくださいませ
      </p>

      <form action="#" method="POST" className={styles.form}>
        <dl className={styles.formList}>
          {/* 社名 */}
          <div className={styles.formItem}>
            <dt className={`${styles.formLabel} ${styles.optionalLabel}`}>
              <label htmlFor="companyName">会社名</label>
            </dt>
            <dd className={styles.formInput}>
              <input
                id="companyName"
                type="text"
                name="dummy"
                placeholder="株式会社ハモレビ"
              />
            </dd>
          </div>
          {/* /社名 */}

          {/* 名前 */}
          <div className={styles.formItem}>
            <dt className={`${styles.formLabel} ${styles.requiredLabel}`}>
              <label htmlFor="name">お名前</label>
            </dt>
            <dd className={styles.formInput}>
              <input
                id="name"
                type="text"
                name="dummy"
                required
                placeholder="山田 太郎"
              />
            </dd>
          </div>
          {/* /名前 */}

          {/* メールアドレス */}
          <div className={styles.formItem}>
            <dt className={`${styles.formLabel} ${styles.requiredLabel}`}>
              <label htmlFor="mail">メールアドレス</label>
            </dt>
            <dd className={styles.formInput}>
              <input
                id="mail"
                type="email"
                name="dummy"
                required
                placeholder="000000000@gmail.com"
              />
            </dd>
          </div>
          {/* /メールアドレス */}

          {/* お問い合わせの種類 */}
          <div className={styles.formItem}>
            <dt className={`${styles.formLabel} ${styles.optionalLabel}`}>
              <label>お問い合わせの種類</label>
            </dt>
            <dd className={styles.formRadio}>
              <label>
                <input
                  type="radio"
                  name="dummy"
                  value="Webサイト制作について"
                />
                <span>Webサイト制作について</span>
              </label>
              <label>
                <input type="radio" name="dummy" value="LPについて" />
                <span>LPについて</span>
              </label>
              <label>
                <input type="radio" name="dummy" value="ECサイトについて" />
                <span>ECサイトについて</span>
              </label>
              <label>
                <input type="radio" name="dummy" value="UIデザインについて" />
                <span>UIデザインについて</span>
              </label>
              <label>
                <input type="radio" name="dummy" value="その他" />
                <span>その他</span>
              </label>
            </dd>
          </div>
          {/* /お問い合わせの種類 */}

          {/* お問い合わせ内容 */}
          <div className={styles.formItem}>
            <dt className={`${styles.formLabel} ${styles.optionalLabel}`}>
              <label htmlFor="textarea">お問い合わせ内容</label>
            </dt>
            <dd className={styles.formTextarea}>
              <textarea id="textarea" name="dummy" placeholder="" />
              <p className={styles.placeholderText}>
                新しく飲食店をオープンするのでホームページを作りたい
                <br />
                ネットショップを開店したい
                <br />
                コーポレートサイトの詳しい料金を知りたい
              </p>
            </dd>
          </div>
          {/* /お問い合わせ内容 */}
        </dl>

        {/* 送信ボタン */}
        <div className={`${styles.contactBtnWrap} ${styles.contactBtnArrow}`}>
          <input type="submit" className={styles.contactBtn} value="この内容でお問い合わせをする" />
          <div className={styles.contactBtnDecoration}></div>
        </div>
        {/* /送信ボタン */}
      </form>
    </section>
  );
}

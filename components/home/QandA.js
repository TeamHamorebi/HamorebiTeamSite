import styles from "../../styles/components/home/_QandA.module.scss";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import QandAItem from "./QandAItem";

export default function QandA() {

  return (
    <section id="qa" className={styles.qa}>
      <SectionTitle title={"よくあるご質問"} />

      <dl className={styles.list}>
        <QandAItem
          question={"Webに関する知識があまりないのですが大丈夫でしょうか？"}
          answer={[
            "WebやITに馴染みのない方にも私達Hamorebiが丁寧に寄り添ってご説明いたします。",
            <br key="br" />,
            "どうぞお気軽にお問い合わせくださいませ。",
          ]}
        />
        <QandAItem
          question={"ホームページを作りたいけれど制作予算があまりないのですが…"}
          answer={
            "ご予算に応じて、制作する内容や工数をご提案いたします。制作物のボリュームや制作工程をご予算に合わせて調整し、お見積りさせていただきます。"
          }
        />
        <QandAItem
          question={"制作日数はどれくらいかかりますが？"}
          answer={
            "制作するものの内容や規模によっても異なりますが、一般的なホームページですと1〜3ヶ月程度でお仕上げいたします。早急仕上げにご対応できる場合もございますので、お急ぎの場合はご相談くださいませ。"
          }
        />
        <QandAItem
          question={"スマートフォンに対応したサイトもお願いできますか？"}
          answer={
            "はい、ご対応いたします。スマートフォンだけでなく、タブレットなども含めた画面サイズの異なるデバイスにご対応できるよう「レスポンシブ対応」のサイトをお作りできます。"
          }
        />
        <QandAItem
          question={"デザインのみ、コーディングのみもお願いできますか？"}
          answer={
            "はい、承ります。デザインのみを納品してコーディングは他社様、またはあらかじめご用意いただいたデザインでコーディングのみを承るなど、ご要望に応じて柔軟にご対応いたします。"
          }
        />
        <QandAItem
          question={"どの地域からでも依頼できますか？"}
          answer={
            "はい、承ります。Hamorebiは全国対応です。Zoomなどのアプリケーションを使用し、オンラインでご相談やお話し合いを行い、対面と同じようなご対応をさせていただきますので、どうぞ安心してお問い合わせくださいませ。"
          }
        />
      </dl>

      <p className={styles.contactLead}>
        その他、ご質問やご不明な点が
        <br className={styles.contactLeadBrSP} />
        ございましたら
        <br className={styles.contactLeadBrPC} />
        こちらの
        <br className={styles.contactLeadBrSP} />
        ボタンよりお気軽に
        <br className={styles.contactLeadBrSP} />
        お問い合わせくださいませ
      </p>

      <Button
        styles={styles.btnWrap}
        text={"お問い合わせをする"}
        link={"#contact"}
      />
    </section>
  );
}

import styles from "../../styles/components/home/_QandA.module.scss";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";

export default function QandA() {
  const data = [
    {
      question: "Webに関する知識があまりないのですが大丈夫でしょうか？",
      answer: [
        "WebやITに馴染みのない方にも私達Hamorebiが丁寧に寄り添ってご説明いたします。",
        <br key="br" />,
        "どうぞお気軽にお問い合わせくださいませ。",
      ],
    },
    {
      question: "ホームページを作りたいけれど制作予算があまりないのですが…",
      answer:
        "ご予算に応じて、制作する内容や工数をご提案いたします。制作物のボリュームや制作工程をご予算に合わせて調整し、お見積りさせていただきます。",
    },
    {
      question: "制作日数はどれくらいかかりますが？",
      answer:
        "制作するものの内容や規模によっても異なりますが、一般的なホームページですと1〜3ヶ月程度でお仕上げいたします。早急仕上げにご対応できる場合もございますので、お急ぎの場合はご相談くださいませ。",
    },
    {
      question: "スマートフォンに対応したサイトもお願いできますか？",
      answer:
        "はい、ご対応いたします。スマートフォンだけでなく、タブレットなども含めた画面サイズの異なるデバイスにご対応できるよう「レスポンシブ対応」のサイトをお作りできます。",
    },
    {
      question: "デザインのみ、コーディングのみもお願いできますか？",
      answer:
        "はい、承ります。デザインのみを納品してコーディングは他社様、またはあらかじめご用意いただいたデザインでコーディングのみを承るなど、ご要望に応じて柔軟にご対応いたします。",
    },
  ];

  return (
    <section id="qa" className={styles.qa}>
      <SectionTitle title={"よくあるご質問"} />

      <dl className={styles.list}>
        {data.map((value, index) => {
          return (
            <div key={index} className={styles.item}>
              <dt className={styles.itemHead}>{value.question}</dt>
              <dd className={styles.itemBody}>{value.answer}</dd>
            </div>
          );
        })}
      </dl>

      <p className={styles.contactLead}>
        その他、ご質問やご不明な点がございましたら
        <br className={styles.contactLeadBr} />
        こちらのボタンよりお気軽にお問い合わせくださいませ
      </p>

      <Button
        styles={styles.btnWrap}
        text={"お問い合わせをする"}
        link={"#contact"}
      />
    </section>
  );
}

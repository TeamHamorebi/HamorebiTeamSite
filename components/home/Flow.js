import styles from "../../styles/components/home/_Flow.module.scss";
import SectionTitle from "../common/SectionTitle";
import Link from "next/link";
import Button from "../common/Button";
import AnimationTrigger from "../common/AnimationTrigger";
import ScrollPosition from "./ScrollPosition";

export default function Flow() {
  const data = [
    {
      name: "お問合せ",
      description: [
        "下記の",
        <Link key="contactLink" href="#contact">
          <a className={styles.contactLink}>お問い合わせフォーム</a>
        </Link>,
        "よりお気軽にご連絡ください",
      ],
    },
    {
      name: "ヒアリング",
      description:
        "お客様がWebサイトを制作したい理由や目的を伺い、目標を達成するために最適な構成をご提案いたします。",
    },
    {
      name: "お見積り",
      description:
        "ヒアリングをもとに見積書や制作スケジュールをお作りいたします。",
    },
    {
      name: "ご契約",
      description: "ご納得いただける内容でしたら契約へ進み、制作が始まります。",
    },
    {
      name: "お打ち合わせ",
      description:
        "サービスや商品を届けたいターゲットやイメージするデザインなどを更に詳しく伺い、お客様おひとりおひとりに合った制作内容をご一緒に決めていきます。",
    },
    {
      name: "デザイン",
      description: [
        "デザインの細かいヒアリングを行った後、ワイヤーフレーム（線や枠などを使ったデザインの設計図です。約10日〜）を作成いたします。",
        <br key="designBr" />,
        "ご確認いただいた後に、本デザイン（約２週間〜）を仕上げます。",
      ],
    },
    {
      name: "コーディング",
      description:
        "デザインをもとに、実際にWebサイトを作り上げていきます。（約2週間〜）",
    },
    {
      name: "動作確認・修正",
      description: [
        "制作したWebサイトをお客様サーバーへアップロードします。",
        <br key="checkBr" />,
        "不具合や動作不良がないかご確認いただき、適宜修正をおこないます。",
      ],
    },
    {
      name: "公開・納品・ご請求",
      description: [
        "動作確認が完了しましたら、本公開ならびに納品とさせていただきます。",
        <br key="completeBr1" />,
        "（ファイル形式での納品も可能です）",
        <br key="completeBr2" />,
        "後日、制作費をお振り込みいただきます。",
      ],
    },
  ];

  return (
    <AnimationTrigger animation={styles.isFadeUp} rootMargin="-15%" triggerOnce>
      <ScrollPosition id={"work-flow"}>
        <section className={styles.flow}>
          <SectionTitle title={"制作の流れ"} />

          <ul className={styles.list}>
            {data.map((value, index) => {
              return (
                <li key={index} className={styles.item}>
                  <p className={styles.itemName}>{value.name}</p>
                  <p className={styles.itemDescription}>{value.description}</p>
                </li>
              );
            })}
          </ul>

          <Button
            styles={styles.btnWrap}
            text={"お問い合わせをする"}
            link={"#contact"}
          />
        </section>
      </ScrollPosition>
    </AnimationTrigger>
  );
}

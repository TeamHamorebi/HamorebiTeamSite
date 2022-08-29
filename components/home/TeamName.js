import styles from "../../styles/components/home/_TeamName.module.scss";
import AnimationTrigger from "../common/AnimationTrigger";

export default function TeamName() {
  return (
    <AnimationTrigger
      animation={styles.isFadeIn}
      rootMargin="-10%"
      triggerOnce
    >
      <section className={styles.teamName}>
        <AnimationTrigger
          animation={styles.isFadeUp}
          rootMargin="-15%"
          triggerOnce
        >
          <div className={styles.textWrap}>
            <p className={styles.text}>
              チーム名の「Hamorebi  ーはもれびー」には
              <span className={styles.textBoldface}>
                太陽のように私たちは「自ら輝き」
                <br />
                光を受けた葉は「成長する」
                <br />
                みんなで奏でよう「ハーモニー」
                <br />
                葉漏れ日のように「道を切り開く」
              </span>
              <span className={styles.textBottom}>
                というチームの思いが込められております
              </span>
            </p>
          </div>
        </AnimationTrigger>
      </section>
    </AnimationTrigger>
  );
}

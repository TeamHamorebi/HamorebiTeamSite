import styles from "../../styles/components/home/_Work.module.scss";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import WorkStatusItem from "./WorkStatusItem";
import AnimationTrigger from "../common/AnimationTrigger";

export default function Work() {
  return (
    <AnimationTrigger
      animation={styles.isFadeUp}
      rootMargin="-15%"
      triggerOnce
    >
      <section className={styles.work}>
        <div className={styles.sectionTitleWrap}>
          <SectionTitle
            title={
              <>
                Hamorebi<span>の</span>お仕事状況
              </>
            }
          />
        </div>

        <p className={styles.lead}>
          ご相談・ご依頼 お待ちしております
          <br />
          どうぞお気軽にお問い合わせください
        </p>

        {/* work status list */}
        <ul className={styles.workStatusList}>
          <WorkStatusItem date={"thisMonth"} />
          <WorkStatusItem date={"nextMonth"} />
          <WorkStatusItem date={"comeAgainMonth"} />
        </ul>
        {/* /work status list */}

        <Button
          styles={styles.workBtnWrap}
          text={"お問い合わせをする"}
          link={"/#contact"}
        />
      </section>
    </AnimationTrigger>
  );
}

import styles from "../../styles/components/home/_ProductionAchievements.module.scss";
import SectionTitle from "../common/SectionTitle";
import Link from "next/link";
import AnimationTrigger from "../common/AnimationTrigger";
import ScrollPosition from "./ScrollPosition";

export default function ProductionAchievements(props) {
  const workDetailsData = props.data;

  return (
    <AnimationTrigger animation={styles.isFadeIn} rootMargin="-10%" triggerOnce>
      <ScrollPosition id={"work"}>
        <section className={styles.productionAchievements}>
          <AnimationTrigger
            animation={styles.isFadeUp}
            rootMargin="-15%"
            triggerOnce
          >
            <SectionTitle title={"制作実績"} />

            <ul className={styles.list}>
              {workDetailsData.map((value, index) => {
                return (
                  <li className={styles.item} key={index}>
                    <Link href={`/work-details/${value.id}`}>
                      <a className={styles.link}>
                        <div className={styles.imgWrap}>
                          <img src={value.mainImg.url} />
                        </div>
                        <h3 className={styles.clientName}>{value.caseName}</h3>
                        <p className={styles.category}>{value.category}</p>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </AnimationTrigger>
        </section>
      </ScrollPosition>
    </AnimationTrigger>
  );
}

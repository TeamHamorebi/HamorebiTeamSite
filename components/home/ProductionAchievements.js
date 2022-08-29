import styles from "../../styles/components/home/_ProductionAchievements.module.scss";
import SectionTitle from "../common/SectionTitle";
import Link from "next/link";
import AnimationTrigger from "../common/AnimationTrigger";

export default function ProductionAchievements() {
  const data = [
    {
      img: "/img/work-details/works-details_dummy.jpg",
      clientName: "株式会社プロフィットバンク様",
      category: "コーポレートサイト",
    },
    {
      img: "/img/work-details/works-details_dummy.jpg",
      clientName: "プロフィットバンク様",
      category: "コーポレートサイト",
    },
    {
      img: "/img/work-details/works-details_dummy.jpg",
      clientName: "プロフィットバンク様",
      category: "コーポレートサイト",
    },
    {
      img: "/img/work-details/works-details_dummy.jpg",
      clientName: "プロフィットバンク様",
      category: "コーポレートサイト",
    },
    {
      img: "/img/work-details/works-details_dummy.jpg",
      clientName: "プロフィットバンク様",
      category: "コーポレートサイト",
    },
    {
      img: "/img/work-details/works-details_dummy.jpg",
      clientName: "プロフィットバンク様",
      category: "コーポレートサイト",
    },
  ];

  return (
    <AnimationTrigger
      animation={styles.isFadeIn}
      rootMargin="-10%"
      triggerOnce
    >
      <section id="work" className={styles.productionAchievements}>
        <AnimationTrigger
          animation={styles.isFadeUp}
          rootMargin="-15%"
          triggerOnce
        >
          <SectionTitle title={"制作実績"} />

          <ul className={styles.list}>
            {data.map((value, index) => {
              return (
                <li className={styles.item} key={index}>
                  <Link href="/">
                    <a className={styles.link}>
                      <div className={styles.imgWrap}>
                        <img src={value.img} />
                      </div>
                      <h3 className={styles.clientName}>{value.clientName}</h3>
                      <p className={styles.category}>{value.category}</p>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </AnimationTrigger>
      </section>
    </AnimationTrigger>
  );
}

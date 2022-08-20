import styles from "../../styles/components/home/_ProductionAchievements.module.scss";
import SectionTitle from "../common/SectionTitle";
import Link from "next/link";

export default function ProductionAchievements() {
  const data = [
    {
      img: "/img/works-details/works-details_dummy.jpg",
      clientName: "株式会社プロフィットバンク様",
      category: "コーポレートサイト",
    },
    {
      img: "/img/works-details/works-details_dummy.jpg",
      clientName: "プロフィットバンク様",
      category: "コーポレートサイト",
    },
    {
      img: "/img/works-details/works-details_dummy.jpg",
      clientName: "プロフィットバンク様",
      category: "コーポレートサイト",
    },
    {
      img: "/img/works-details/works-details_dummy.jpg",
      clientName: "プロフィットバンク様",
      category: "コーポレートサイト",
    },
    {
      img: "/img/works-details/works-details_dummy.jpg",
      clientName: "プロフィットバンク様",
      category: "コーポレートサイト",
    },
    {
      img: "/img/works-details/works-details_dummy.jpg",
      clientName: "プロフィットバンク様",
      category: "コーポレートサイト",
    },
  ];

  return (
    <section id="work" className={styles.productionAchievements}>
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
    </section>
  );
}

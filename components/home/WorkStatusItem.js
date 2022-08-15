import styles from "../../styles/components/home/_WorkStatusItem.module.scss";

export default function WorkStatusItem(props) {
  // fetch date
  const date = new Date();
  let year;
  let month;
  switch (props.date) {
    case "thisMonth":
      year = date.getFullYear();
      month = date.getMonth() + 1;
      break;
    case "nextMonth":
      date.setFullYear(date.getFullYear());
      date.setMonth(date.getMonth() + 1);
      year = date.getFullYear();
      month = date.getMonth() + 1;
      break;
    case "comeAgainMonth":
      date.setFullYear(date.getFullYear());
      date.setMonth(date.getMonth() + 2);
      year = date.getFullYear();
      month = date.getMonth() + 1;
      break;
  }

  // icons loop
  const icons = [];
  for (let i = 1; i <= 5; i++) {
    icons.push(
      <div className={styles.imgWrap} key={i}>
        <img src="/img/top/hamorebi_logo_monocro.png" />
      </div>
    );
  }

  return (
    <li className={styles.workStatusItem}>
      <p className={styles.date}>
        <span className={styles.dateBoldface}>{year}</span>
        <span className={styles.dateYearText}>年</span>
        <span className={styles.dateBoldface}>{month}</span>月
      </p>
      <div className={styles.contentsWrap}>
        <div className={styles.iconsWrap}>{icons}</div>
        <p className={styles.statusText}>ご相談お待ちしております</p>
      </div>
    </li>
  );
}

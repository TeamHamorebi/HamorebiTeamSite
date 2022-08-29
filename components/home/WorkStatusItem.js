import styles from "../../styles/components/home/_WorkStatusItem.module.scss";
import { useState, useEffect } from "react";

export default function WorkStatusItem({ dateText, iconNum }) {
  // fetch date
  const date = new Date();
  let year;
  let month;
  switch (dateText) {
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

  // switch icon check & text
  const [num, setNum] = useState("0");
  const [text, setText] = useState("ご相談お待ちしております");
  let checkNum = iconNum.toString();
  const switchIcons = () => {
    switch (checkNum) {
      case "0":
        if (num === "0") {
          return;
        }
        setNum("0");
        setText("ご相談お待ちしております");
        break;

      case "1":
        if (num === "1") {
          return;
        }
        setNum("1");
        setText("ご相談お待ちしております");
        break;

      case "2":
        if (num === "2") {
          return;
        }
        setNum("2");
        setText("ご相談お待ちしております");
        break;

      case "3":
        if (num === "3") {
          return;
        }
        setNum("3");
        setText("ご相談お待ちしております");
        break;

      case "4":
        if (num === "4") {
          return;
        }
        setNum("4");
        setText("ご相談お待ちしております");
        break;

      case "5":
        if (num === "5") {
          return;
        }
        setNum("5");
        setText("翌月以降、承ります");
        break;
    }
  };

  // icons loop
  const icons = [];
  for (let i = 1; i <= 5; i++) {
    icons.push(
      <div className={styles.imgWrap} key={i} check-icon={num}>
        <img src="/img/top/hamorebi_logo_monocro.png" />
      </div>
    );
  }

  useEffect(() => {
    switchIcons();
  });

  return (
    <li className={styles.workStatusItem}>
      <p className={styles.date}>
        <span className={styles.dateBoldface}>{year}</span>
        <span className={styles.dateYearText}>年</span>
        <span className={styles.dateBoldface}>{month}</span>月
      </p>
      <div className={styles.contentsWrap}>
        <div className={styles.iconsWrap}>{icons}</div>
        <p className={styles.statusText}>{text}</p>
      </div>
    </li>
  );
}

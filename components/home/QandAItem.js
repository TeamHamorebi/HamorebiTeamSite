import styles from "../../styles/components/home/_QandAItem.module.scss";
import { useState } from "react";

export default function QandAItem(props) {
  // アコーディオンの開閉
  const [openAnswer, setOpenAnswer] = useState(false);
  const answerFunction = () => {
    setOpenAnswer(!openAnswer);
  };

  return (
    <div className={styles.item}>
      <dt
        className={`${styles.itemHead} ${
          openAnswer ? styles.isActive : undefined
        }`}
        onClick={() => answerFunction()}
      >
        {props.question}
      </dt>
      <dd className={styles.itemBody}>{props.answer}</dd>
    </div>
  );
}

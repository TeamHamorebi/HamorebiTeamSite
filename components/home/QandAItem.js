import styles from "../../styles/components/home/_QandA.module.scss";
import { useState } from "react";

export default function QandAItem(props) {
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

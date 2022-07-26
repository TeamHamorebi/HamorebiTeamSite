import styles from "../../styles/components/common/_Button.module.scss";
import Link from "next/link";

export default function Button(props) {
  return (
    <div className={props.styles}>
      <Link href={props.link}>
        <a className={styles.btn}>
          <span className={styles.btnTextWrap}>{props.text}</span>
        </a>
      </Link>
    </div>
  );
}

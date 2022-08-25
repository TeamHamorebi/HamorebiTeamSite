import styles from "../../styles/components/common/_Breadcrumb.module.scss";
import Link from "next/link";

export default function Breadcrumb() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link href={"/"}>
          <a className={styles.itemLink}>TOP</a>
        </Link>
      </li>
      <li className={styles.item}>プロフィットバンク様</li>
    </ul>
  );
}

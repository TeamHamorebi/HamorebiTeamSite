import styles from "../../styles/components/common/_ToTopButton.module.scss";
import Link from "next/link";
// import { useEffect } from "react";

export default function ToTopButton() {
  return (
    <div className={styles.toTop}>
      <Link href="#top">
        <a className={styles.toTopLink}>
          <div className={styles.toTopArrowWrap}>
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="/img/common/toTop-arrow--pc.svg"
              />
              <img src="/img/common/toTop-arrow--sp.svg" />
            </picture>
          </div>
          <span className={styles.toTopText}>TOP</span>
        </a>
      </Link>
    </div>
  );
}

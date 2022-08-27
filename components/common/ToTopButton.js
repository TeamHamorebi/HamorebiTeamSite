import styles from "../../styles/components/common/_ToTopButton.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ToTopButton() {
  // 一定量スクロール後ふわっと表示
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    window.scrollY > 200 ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    // return () => {
    //   window.removeEventListener("scroll", toggleVisibility);
    // };
  }, []);

  return (
    <div
      className={`${styles.toTop} ${
        isVisible ? styles.isFadeIn : styles.isFadeOut
      }`}
    >
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

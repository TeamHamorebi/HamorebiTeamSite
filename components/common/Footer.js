import styles from "../../styles/components/common/_Footer.module.scss";
import Link from "next/link";

export default function Footer(props) {
  const data = props.list;

  return (
    <footer className={styles.footer}>
      {/* Footer contents */}
      <div className={styles.contentsWrap}>
        {/* site info */}
        <div className={styles.siteInfo}>
          {/* logo */}
          <div className={styles.brandWrap}>
            <div className={styles.brandImgWrap}>
              <img
                src="/img/common/hamorebi_footer-logo_white.png"
                alt="はもれび"
              />
            </div>
            <p className={styles.brandName}>
              Hamorebi <span className={styles.brandSubName}>ーはもれびー</span>
            </p>
          </div>
          {/* /logo */}
          {/* text */}
          <div className={styles.infoTextWrap}>
            <p className={styles.infoText}>
              HamorebiはWeb制作を承るフリーランスチームです
              <br />
              Webサイト、ECサイト、ランディングページ、UIデザイン等の制作を行っております
            </p>
          </div>
          {/* /text */}
        </div>
        {/* /site info */}

        {/* Footer navigation */}
        <nav className={styles.navigation}>
          {/* nav items */}
          <ul className={styles.navItems}>
            {data.map((value, index) => {
              return (
                <li key={index} className={styles.navItem}>
                  <Link href={`/#${value.link}`}>
                    <a className={styles.navLink}>{value.name}</a>
                  </Link>
                </li>
              );
            })}
            <li className={styles.navItem}>
              <Link href="/#contact">
                <a className={styles.navLink}>お問い合わせ</a>
              </Link>
            </li>
          </ul>
          {/* /nav items */}
        </nav>
        {/* /Footer navigation */}
      </div>
      {/* /Footer contents */}

      {/* copyright */}
      <p className={styles.copyright}>&copy;2022 Hamorebi</p>
      {/* /copyright */}
    </footer>
  );
}

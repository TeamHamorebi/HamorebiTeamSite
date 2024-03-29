import styles from "../../styles/components/common/_Header.module.scss";
import Button from "./Button";
import InnerBase from "./InnerBase";
import Link from "next/link";

export default function Header(props) {
  const data = props.list; // Layout.jsで使用

  return (
    <header className={styles.header}>
      <InnerBase>
        {/* header wrap */}
        <div className={styles.headerWrap}>
          {/* header brand */}
          <div className={styles.brandWrap}>
            <h1 className={styles.brand}>
              <Link href="/">
                <a className={styles.brandLink}>
                  <picture>
                    <source
                      srcSet="/img/common/hamorebi_logo_color.webp"
                      type="image/webp"
                    />
                    <img
                      src="/img/common/hamorebi_logo_color.png"
                      alt="はもれび"
                    />
                  </picture>
                </a>
              </Link>
            </h1>
          </div>
          {/* /header brand */}

          {/* header navigation */}
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
            </ul>
            {/* /nav items */}
          </nav>
          {/* /header navigation */}

          <Button
            styles={styles.headerBtnWrap}
            text={"お問い合わせをする"}
            link={"/#contact"}
          />
        </div>
        {/* /header wrap */}
      </InnerBase>
    </header>
  );
}

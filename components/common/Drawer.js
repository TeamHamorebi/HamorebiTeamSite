import styles from "../../styles/components/common/_Drawer.module.scss";
import Link from "next/link";
import Button from "./Button";
import React, { useState } from "react";

export default function Drawer(props) {
  const data = props.list; // Layout.jsで使用

  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className={styles.header}>
      {/* inner */}
      <div className={styles.inner}>
        {/* header brand */}
        <div className={styles.brand}>
          <Link href="/">
            <a className={styles.brandLink}>
              <div className={styles.brandImgWrap}>
                <picture>
                <source srcSet="/img/common/hamorebi_logo_color.webp" type="image/webp" />
                <img src="/img/common/hamorebi_logo_color.png" alt="はもれび" />
                </picture>
              </div>
              <p className={styles.brandName}>
                Hamorebi{" "}
                <span className={styles.brandSubName}>ーはもれびー</span>
              </p>
            </a>
          </Link>
        </div>
        {/* /header brand */}

        {/* drawer button */}
        <div
          type="button"
          className={`${styles.drawerBtn} ${
            openMenu ? styles.isActive : undefined
          }`}
          onClick={() => menuFunction()}
        >
          <div className={styles.drawerBtnBarWrap}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        {/* /drawer button */}

        {/* drawer navigation */}
        <nav
          className={`${styles.navigation} ${
            openMenu ? styles.isOpen : undefined
          }`}
        >
          {/* drawer items */}
          <ul className={styles.drawerItems}>
            <li className={styles.drawerItem}>
              <Link href="/">
                <a
                  className={styles.drawerItemLink}
                  onClick={() => menuFunction()}
                >
                  TOP
                </a>
              </Link>
            </li>
            {data.map((value, index) => {
              return (
                <li key={index} className={styles.drawerItem}>
                  <Link href={`/#${value.link}`}>
                    <a
                      className={styles.drawerItemLink}
                      onClick={() => menuFunction()}
                    >
                      {value.name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* /drawer items */}
          {/* contact btn */}
          <div onClick={() => menuFunction()}>
            <Button
              styles={styles.drawerBtnWrap}
              text={"お問い合わせをする"}
              link={"/#contact"}
            />
          </div>
          {/* /contact btn */}
        </nav>
        {/* /drawer navigation */}
        {/* overlay */}
        <div
          className={`${styles.overlay} ${
            openMenu ? styles.isOpen : undefined
          }`}
          onClick={() => menuFunction()}
        ></div>
        {/* /overlay */}
      </div>
      {/* /inner */}
    </header>
  );
}

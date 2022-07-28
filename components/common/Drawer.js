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
          <Link href="./">
            <a className={styles.brandLink}>
              <div className={styles.brandImgWrap}>
                <img src="/img/common/hamorebi_logo_color.svg" alt="はもれび" />
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
            ></Button>
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

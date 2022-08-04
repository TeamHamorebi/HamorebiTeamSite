import styles from "../../styles/components/common/_Layout.module.scss";
import Header from "./Header";
import Drawer from "./Drawer";
import Footer from "./Footer";

export default function Layout({ children }) {
  const navItems = [
    {
      name: "Hamorebiについて",
      link: "about",
    },
    {
      name: "制作実績",
      link: "work",
    },
    {
      name: "サービス・料金",
      link: "service-and-price",
    },
    {
      name: "制作の流れ",
      link: "work-flow",
    },
    {
      name: "メンバー",
      link: "member",
    },
    {
      name: "よくあるご質問",
      link: "qa",
    },
  ];

  return (
    <>
      <Header list={navItems}></Header>
      <Drawer list={navItems}></Drawer>

      <main id="top" className={styles.main}>
        {children}
      </main>

      <Footer list={navItems}></Footer>
    </>
  );
}

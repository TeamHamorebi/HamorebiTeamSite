import styles from "../../styles/components/common/_Layout.module.scss";
import Header from "./Header";
import Drawer from "./Drawer";
import Footer from "./Footer";
import ToTopButton from "./ToTopButton";

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
    <div className={styles.contentsWrap}>
      <Header list={navItems} />
      <Drawer list={navItems} />
      <ToTopButton />

      <main id="top" className={styles.main}>
        {children}
      </main>

      <Footer list={navItems} />
    </div>
  );
}

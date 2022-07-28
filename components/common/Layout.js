import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/components/common/_Layout.module.scss";
import Header from "../../components/common/Header";
import Drawer from "../../components/common/Drawer";

export default function Layout({ children }) {
  const navItems = [
    {
      name: "TOP",
      link: "#top",
    },
    {
      name: "Hamorebiについて",
      link: "#about",
    },
    {
      name: "実績",
      link: "#work",
    },
    {
      name: "サービス・料金",
      link: "#service-and-price",
    },
    {
      name: "制作の流れ",
      link: "#work-flow",
    },
    {
      name: "メンバー",
      link: "#member",
    },
    {
      name: "よくあるご質問",
      link: "#qa",
    },
  ];

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header list={navItems}></Header>
      <Drawer list={navItems}></Drawer>

      <main className={styles.main}>{children}</main>

      <footer id="qa" className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}

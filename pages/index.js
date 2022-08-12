import Layout from "../components/common/Layout";
import Link from "next/link";
import Mv from "../components/home/Mv";
import AboutAndPromise from "../components/home/AboutAndPromise";
import TeamName from "../components/home/TeamName";

export default function Home() {
  return (
    <Layout>
      <Mv />
      <AboutAndPromise />
      <TeamName />
      <Link href="/hoge/hoge">
        <a>
          this page!
        </a>
      </Link>
    </Layout>
  );
}

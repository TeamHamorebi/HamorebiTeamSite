import Layout from "../components/common/Layout";
import Link from "next/link";
import Mv from "../components/home/Mv";
import AboutAndPromise from "../components/home/AboutAndPromise";
import TeamName from "../components/home/TeamName";
import Work from "../components/home/Work";
import ProductionAchievements from "../components/home/ProductionAchievements";

export default function Home() {
  return (
    <Layout>
      <Mv />
      <AboutAndPromise />
      <TeamName />
      <Work />
      <ProductionAchievements />
      <Link href="/hoge/hoge">
        <a>this page!</a>
      </Link>
    </Layout>
  );
}

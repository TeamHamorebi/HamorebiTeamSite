import Layout from "../components/common/Layout";
import Link from "next/link";
import Mv from "../components/home/Mv";
import AboutAndPromise from "../components/home/AboutAndPromise";
import TeamName from "../components/home/TeamName";
import Work from "../components/home/Work";
import ProductionAchievements from "../components/home/ProductionAchievements";
import ServiceAndPrice from "../components/home/ServiceAndPrice";
import Flow from "../components/home/Flow";
import Member from "../components/home/Member";

export default function Home() {
  return (
    <Layout>
      <Mv />
      <AboutAndPromise />
      <TeamName />
      <Work />
      <ProductionAchievements />
      <ServiceAndPrice />
      <Flow />
      <Member />
      <Link href="/hoge/hoge">
        <a>this page!</a>
      </Link>
    </Layout>
  );
}

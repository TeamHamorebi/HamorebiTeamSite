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
import QandA from "../components/home/QandA";
import Contact from "../components/home/Contact";
import { client } from "../lib/client";

export default function Home({ iconData }) {
  return (
    <Layout>
      <Mv />
      <AboutAndPromise />
      <TeamName />
      <Work data={iconData} />
      <ProductionAchievements />
      <ServiceAndPrice />
      <Flow />
      <Member />
      <QandA />
      <Contact />
      <Link href="/work-details/work-details">
        <a>制作実績ページのリンク（microCMSと連携したら削除するよ）</a>
      </Link>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const iconData = await client.get({
    endpoint: "work",
  });

  return {
    props: {
      iconData,
    },
  };
};

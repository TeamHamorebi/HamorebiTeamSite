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
// microCMSとの連携
import { client } from "../lib/client";

export default function Home({ work, member, workDetails }) {
  return (
    <Layout>
      <Mv />
      <AboutAndPromise />
      <TeamName />
      <Work data={work} />
      <ProductionAchievements data={workDetails} />
      <ServiceAndPrice />
      <Flow />
      <Member data={member} />
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
  const memberData = await client.get({
    endpoint: "member"
  })
  const workDetailsData = await client.get({
    endpoint: "work-details",
  });

  return {
    props: {
      work: iconData,
      member: memberData.contents,
      workDetails: workDetailsData.contents
    },
  };
};

import Layout from "../components/common/Layout";
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
// OGP
import Seo from "../components/common/Seo";

export default function Home({ work, member, workDetails }) {
  return (
    <Layout>
      <Seo
        pagePath={"https://hamorebi-team-site.netlify.app"}
        pageImg={
          "https://hamorebi-team-site.netlify.app/img/top/hamorebi_logo_color--big.png"
        }
        pageImgWidth={402}
        pageImgHeight={281}
        twitterCard={"summary"}
      />
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
    </Layout>
  );
}

export const getStaticProps = async () => {
  const iconData = await client.get({
    endpoint: "work",
  });
  const memberData = await client.get({
    endpoint: "member",
  });
  const workDetailsData = await client.get({
    endpoint: "work-details",
  });

  return {
    props: {
      work: iconData,
      member: memberData.contents,
      workDetails: workDetailsData.contents,
    },
  };
};

import Layout from "../components/common/Layout";
import Link from "next/link";
import Mv from "../components/home/Mv";

export default function Home() {
  return (
    <Layout>
      <Mv />
      <Link href="/hoge/hoge">
        <a>
          this page!
        </a>
      </Link>
    </Layout>
  );
}

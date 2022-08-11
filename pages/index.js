import Layout from "../components/common/Layout";
import Link from "next/link";
import Mv from "../components/home/Mv";
import AboutAndPromise from "../components/home/AboutAndPromise";

export default function Home() {
  return (
    <Layout>
      <Mv />
      <AboutAndPromise />
      <Link href="/hoge/hoge">
        <a>
          this page!
        </a>
      </Link>
    </Layout>
  );
}

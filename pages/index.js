import Layout from "../components/common/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <h1>TEST</h1>
      <Link href="/hoge/hoge">
        <a>
          this page!
        </a>
      </Link>

      <p id="about">test2</p>
    </Layout>
  );
}

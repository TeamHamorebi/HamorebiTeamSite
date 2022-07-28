import "../styles/base/_index.scss";
import { smoothScroll } from "../lib/smoothScroll";

function MyApp({ Component, pageProps }) {
  smoothScroll();

  return <Component {...pageProps} />;
}

export default MyApp;

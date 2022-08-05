import styles from "../../styles/components/common/_innerLarge.module.scss";

export default function InnerLarge({ children }) {
  return <div className={styles.inner}>{children}</div>;
}

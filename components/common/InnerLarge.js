import styles from "../../styles/components/common/_InnerLarge.module.scss";

export default function InnerLarge({ children }) {
  return <div className={styles.inner}>{children}</div>;
}

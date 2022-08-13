import styles from "../../styles/components/common/_SectionTitle.module.scss";

export default function SectionTitle(props) {
  return <h2 className={styles.sectionTitle}>{props.title}</h2>;
}

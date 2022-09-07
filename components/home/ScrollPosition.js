import styles from "../../styles/components/home/_ScrollPosition.module.scss";

export default function ScrollPosition({id, children}) {
    return (
        <div id={id} className={styles.scrollPosition}>
            {children}
        </div>
    )
}
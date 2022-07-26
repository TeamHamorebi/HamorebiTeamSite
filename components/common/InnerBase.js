import styles from "../../styles/components/common/_InnerBase.module.scss";

export default function InnerBase({ children }) {
    
    return (
        <div className={styles.inner}>
            {children}
        </div>
    );
}
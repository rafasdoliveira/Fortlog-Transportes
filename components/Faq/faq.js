import styles from "./faq.module.css";

export default function QA({ title, text }) {
  return (
    <div className={styles.row} style={{ height: "800px" }}>
      <div className={styles.faqcolumn}>
        <div className={styles.card}>
          <div>
            <p className={styles.title}>{title}</p>
          </div>
          <div>
            <p className={styles.text}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

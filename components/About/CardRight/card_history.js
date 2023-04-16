import styles from "./cardright.module.css";

export default function CardRight({image, title, subtitle}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardimage}>{image}</div>
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}><p>{subtitle }</p></div> 
      </div>
    </div>
  );
  }
import styles from "./cardhistory.module.css";

export default function CardHistory() {
  return (
    <div className={styles.card}>
      <div className={styles.cardimage}></div>
      {/* <div className={styles.text}> */}
      <div className={styles.category}> Illustration </div>
      <div className={styles.heading}>
      </div>
        {" "}
        A heading that must span over two lines
      
    </div>
  );
}

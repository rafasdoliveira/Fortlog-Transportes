import styles from "./cards_index.module.css";
  
export default function CardIndex({ image, title, text }) {
  return (
    <div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img className={styles.images} src={image} alt="icon" />
          <h1>{title}</h1>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  );
}

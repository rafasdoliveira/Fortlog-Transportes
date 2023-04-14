import styles from './cardabout.module.css'

export default function CardAbout(props) {
  return (
    <div className={styles.flipcard}>
      <div className={styles.flipcardinner}>
        <div className={styles.flipcardfront}>
          <p className={styles.title}>FLIP CARD</p>
          <p>Hover Me</p>
        </div>
        <div className={styles.flipcardback}>
          <p className={styles.title}>BACK</p>
          <p>Leave Me</p>
        </div>
      </div>
    </div>
  );
}

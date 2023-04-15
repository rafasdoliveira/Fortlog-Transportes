import styles from './cardabout.module.css'

export default function CardAbout({title, subtitle}) {
  return (
    <div className={styles.flipcard}>
      <div className={styles.flipcardinner}>
        <div className={styles.flipcardfront}>
          <p className={styles.title}>{title}</p>
          <p>{subtitle}</p>
        </div>
        <div className={styles.flipcardback}>
          <p className={styles.title}>{title}</p>
          <p>text</p>
        </div>
      </div>
    </div>
  );
}

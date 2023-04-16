import styles from "./social.module.css";

export default function Social() {
  return (
    <div className={styles.redes}>
      <div className={styles.title}>
        <p className={styles.title}>SOCIAL</p>
      </div>

      <div className={styles.socialimgs}>
        <a
          className={styles.a}
          href="https://www.instagram.com/fortlogbrasil/"
          target="_blank"
        >
          <img
            className={styles.icons}
            src="images/social/icons8-instagram.svg"
            alt="instagram"
          />
        </a>
        <a
          className={styles.a}
          href="https://www.facebook.com/people/Fortlog/100090840398682/"
          target="_blank"
        >
          <img
            className={styles.icons}
            src="images/social/icons8-facebook.svg"
            alt="facebook"
          />
        </a>
        <a
          className={styles.a}
          href="https://api.whatsapp.com/send?          
        phone=5585999064348&text=Ol%C3%A1%20Pedro%20Igor!%20Gostaria%20de%20algumas%20informa%C3%A7%C3%B5es%20sobre%20a%20Fortlog%20Transportes."
          target="_blank"
        >
          <img
            className={styles.icons}
            src="images/social/icons8-whatsapp.svg"
            alt="whatsapp"
          />
        </a>
        <a className={styles.a} href="services.html" target="_blank">
          <img
            className={styles.icons}
            src="images/social/icons8-linkedin.svg"
            alt="linkedin"
          />
        </a>
      </div>
    </div>
  );
}

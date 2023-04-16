import styles from './../styles/contact.module.css';

export default function Contact() {
  return (
    <div>
      <div className={styles.historia}>
        <p className={styles.title}>Localização</p>
        <p>Travessa José Bastos 79</p>
      </div>
      <div className={styles.maps}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.8156905139826!2d-38.5033111!3d-3.8497051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7506b2a23cb3f%3A0x77cd451210aac6ab!2sR.%20Augusto%20Benevides%2C%201304%20-%20Ancuri%2C%20Fortaleza%20-%20CE%2C%2060873-065!5e0!3m2!1spt-BR!2sbr!4v1678130678195!5m2!1spt-BR!2sbr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

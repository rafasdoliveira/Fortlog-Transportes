import Social from "../social/social";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.all}>
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <a href="index.html">
            <img
              width="110%"
              height="130%"
              src="images/logos/logo_fortlog_horizontal.png"
              alt="Logo Vertical"
            />
          </a>
        </div>

        <div className={styles.empresa}>
          <div className={styles.title}>
            <p className={styles.title}>EMPRESA</p>
          </div>

          <div className={styles.subtitle}>
            <a className={styles.a} href="about">
              Sobre Nós
            </a>
            <a className={styles.a} href="services">
              Serviços
            </a>
            <a className={styles.a} href="faq">
              Suporte
            </a>
            <a className={styles.a} href="contact">
              Contato
            </a>
          </div>
        </div>

        <div className={styles.grupo}>
          <div className={styles.title}>
            <p className={styles.title}>GRUPO</p>
          </div>

          <div className={styles.subtitle}>
            <a className={styles.a} href="https://www.fortsat.com.br/">
              Fortsat Comércio | Telecomunicações
            </a>
            <a className={styles.a} href="https://www.fortsunbrasil.com.br/">
              Fortsun Brasil | Energia Solar
            </a>
          </div>
        </div>

      <Social/>
      </footer>
      <div className={styles.developer}>
        <p>
          Copyright &copy; 2023 | Desenvolvido por
          <a
            className={styles.a}
            href="https://www.linkedin.com/in/rafasdoliveira/"
          >
            <strong>&nbsp;Oliveira's Software Solutions</strong>
          </a>
        </p>
      </div>
    </div>
  );
}

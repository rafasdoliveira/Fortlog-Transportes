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
              src="/assets/images/logos/logo_fortlog_vertical.png"
              alt="Logo Vertical"
            />
          </a>
        </div>

        <div className={styles.empresa}>
          <div className={styles.title}>
            <p className={styles.title}>EMPRESA</p>
          </div>

          <div className={styles.subtitle}>
            <a className={styles.a} href="about.html">
              Sobre Nós
            </a>
            <a className={styles.a} href="services.html">
              Serviços
            </a>
            <a className={styles.a} href="faq.htmlml">
              Suporte
            </a>
            <a className={styles.a} href="contact.html">
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
                src="assets/images/social/icons8-instagram.svg"
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
                src="assets/images/social/icons8-facebook.svg"
                alt="facebook"
              />
            </a>
            {/*Link do whatsapp encurtado**/}
            <a
              className={styles.a}
              href="https://api.whatsapp.com/send?          
          phone=5585999064348&text=Ol%C3%A1%20Pedro%20Igor!%20Gostaria%20de%20algumas%20informa%C3%A7%C3%B5es%20sobre%20a%20Fortlog%20Transportes."
              target="_blank"
            >
              <img
                className={styles.icons}
                src="assets/images/social/icons8-whatsapp.svg"
                alt="whatsapp"
              />
            </a>
            <a className={styles.a} href="services.html" target="_blank">
              <img
                className={styles.icons}
                src="assets/images/social/icons8-linkedin.svg"
                alt="linkedin"
              />
            </a>
          </div>
        </div>
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

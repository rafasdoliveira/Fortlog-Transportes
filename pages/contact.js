import Head from "next/head";
import Header from "./../components/_ui/header/header";
import Footer from "./../components/_ui/footer/footer";
import Form from "./../components/Contact/forms";
import Social from "./../components/_ui/social/social";
import styles from "./../styles/contact.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fortlog Transportes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="assets/images/logos/logo_fortlog_cortada.png" />
      </Head>
      <main>
        {/*Aqui chamamos o componente header, que será utilizado em todas as páginas da aplicação*/}
        <Header />
        <div className={styles.contact}>
          <div className={styles.message}>
            <div className={styles.heading}>
              <p>Entre em contato</p>
            </div>
            <div className={styles.social}>
              <Social />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.title}>Mande uma mensagem!</div>
            <div className={styles.input}>
              <Form label="Nome" type="text" />
              <Form label="Sobrenome" type="text" />
            </div>
            <div className={styles.input}>
              <Form label="E-mail" type="e-mail" />
              <Form label="Assunto" type="text" />
            </div>
            <Form label="Mensagem" type="text" />
          </div>
        </div>
        {/*Aqui chamamos o componente footer, que será utilizado em todas as páginas da aplicação*/}
        <Footer />
      </main>
    </div>
  );
}

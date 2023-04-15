import Head from "next/head";
import Header from "./../components/_ui/header/header";
import Footer from "./../components/_ui/footer/footer";

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
        <div className={styles.historia}>
          <p className={styles.title}>Distribuição de Produtos</p>
          <p>
            explique como funciona o processo de distribuição, os tipos de
            produtos que são distribuídos e em que áreas geográficas a
            distribuição é feita.
          </p>
        </div>
        <div className={styles.historia}>
          <p className={styles.title}>Logística</p>
          <p>
            explique como a empresa gerencia a logística para garantir que os
            produtos sejam entregues de maneira rápida e eficiente.
          </p>
        </div>
        <div className={styles.historia}>
          <p className={styles.title}>Armazenagem</p>
          <p>
            descreva as instalações de armazenagem da empresa e como os produtos
            são armazenados e gerenciados.
          </p>
        </div>
        <div className={styles.historia}>
          <p className={styles.title}>Atendimento ao cliente</p>
          <p>
            explique como a empresa oferece suporte e assistência aos clientes,
            desde a realização de pedidos até a resolução de problemas e
            dúvidas.
          </p>
        </div>

        {/*Aqui chamamos o componente footer, que será utilizado em todas as páginas da aplicação*/}
        <Footer />
      </main>
    </div>
  );
}

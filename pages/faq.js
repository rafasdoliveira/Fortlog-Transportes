import Head from "next/head";
import Header from "./../components/_ui/header/header";
import Footer from "./../components/_ui/footer/footer";
import QA from "./../components/Faq/faq";
import styles from "./../styles/faq.module.css";
import CardRight from "../components/About/CardRight/card_history";

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
        {/*Aqui chamamos o componente QA, onde mostramos as perguntas mais comuns*/}
        <div>
          <div>
            <p className={styles.enfase}>FAQ</p>
          </div>
          <div className={styles.qa}>
            <QA
              title="Quais territórios atendidos pela Fortlog?"
              text="Atendemos por completo os estados do Ceará e Piauí"
            />
            <QA
              title="Vocês oferecem suporte ao cliente em caso de dúvidas ou problemas?"
              text="Temos atendentes treinados para oferecer todo o suporte para nossos clientes"
            />
            <QA
              title="Quais territórios atendidos pela Fortlog?"
              text="Atendemos por completo os estados do Ceará e Piauí"
            />
            <QA
              title="Quais territórios atendidos pela Fortlog?"
              text="Atendemos por completo os estados do Ceará e Piauí"
            />
            <QA
              title="Quais territórios atendidos pela Fortlog?"
              text="Atendemos por completo os estados do Ceará e Piauí"
            />
          </div>
        </div>
        {/*Aqui chamamos o componente CardRight, para criarmos uma chamada para o cliente*/}
        <CardRight
        image=""
        title="Somos focados em performance!"
        subtitle="Foque no comercial e nas vendas do seu negócio, deixe a sua logística conosco!"
        />
        {/*Aqui chamamos o componente footer, que será utilizado em todas as páginas da aplicação*/}
        <Footer />
      </main>
    </div>
  );
}

import Head from "next/head";
import Header from "./../components/_ui/header/header";
import Footer from "./../components/_ui/footer/footer";
import CardAbout from "../components/About/Cards/card_mission";
import styles from "./../styles/about.module.css";
import CardRight from "../components/About/CardRight/card_history";
import CardLeft from "../components/About/CardLeft/card_history";

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
          <p className={styles.title}>Nossa História</p>
          <CardRight
            image=""
            title="2019"
            subtitle="Em 2019, após 17 anos com fota própria, Luciano e Lenise decidiram 
          investir no mercado de logística"
          />
          <CardLeft
            image=""
            title="2020"
            subtitle="Em 2019, após 17 anos com fota própria, Luciano e Lenise decidiram 
          investir no mercado de logística"
          />
          <CardRight
            image=""
            title="2021"
            subtitle="Em 2019, após 17 anos com fota própria, Luciano e Lenise decidiram 
          investir no mercado de logística"
          />
          <CardLeft
            image=""
            title="202"
            subtitle="Em 2019, após 17 anos com fota própria, Luciano e Lenise decidiram 
          investir no mercado de logística"
          />
        </div>

        <div className={styles.missao}>
          <div className={styles.title}>
            <p>Focados em entregar o melhor!</p>
          </div>
          <div className={styles.cards}>
            <CardAbout
              title="Missão"
              subtitle="Conheça nossa Missão!"
              text="Nossa missão é fornecer serviços de distribuição de alta qualidade no estado do 
              Ceará e Piauí, com uma abordagem centrada no cliente e um compromisso com a excelência."
            />
            <CardAbout
              title="Visão"
              subtitle="Conheça nossa Visão!"
              text="Nossa visão é ser a distribuidora líder no estado do Ceará e Piauí, reconhecida por nossos 
              clientes, fornecedores e parceiros como a melhor opção em termos de qualidade, 
              confiabilidade e eficiência."
            />
            <CardAbout
              title="Valores"
              subtitle="Conheça nossos Valores!"
              text="Integridade, Comprometimento, Inovação, Valorização das Pessoas, Orientação ao Cliente"
            />
          </div>
        </div>

        <div className={styles.historia}>
          <p className={styles.title}>Parceiros</p>
          <p>Confira nossos parceiros e clientes!</p>
        </div>

        {/*Aqui chamamos o componente footer, que será utilizado em todas as páginas da aplicação*/}
        <Footer />
      </main>
    </div>
  );
}

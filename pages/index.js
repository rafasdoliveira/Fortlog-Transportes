import Head from "next/head";
import Header from "./../components/_ui/header/header";
import Footer from "./../components/_ui/footer/footer";
import CardIndex from "./../components/Home/Cards/cards_index";
import styles from "./../styles/index.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fortlog Transportes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="images/logos/logo_fortlog_horizontal.png" />
      </Head>

      <main className={styles.main}>
        {/*Aqui chamamos o componente header, que será utilizado em todas as páginas da aplicação*/}
        <Header />

        <div className="chamada">
          <p className="chamada-title">
            Na Fortlog você tem a garantia que o seu produto terá o
            acondicionamento adequado, menor prazo de entrega e destino correto!
          </p>
          <form className="form-header" action="contact.html">
            <button className="orcamento">
              <strong>Faça uma Cotação!</strong>
            </button>
          </form>
        </div>
        {/*Aqui começa a classe que falamos sobre os diferenciais e podemos criar um componente aqui*/}
        <div className={styles.diferencial}>
          <p className={styles.title}>Confira nossos diferenciais!</p>
        </div>
        {/*Mostramos o diferencial da empresa por meio de cards, o arquivo "cards_index.js" é o componente que utilizamos abaixo*/}
        <div className={styles.cardstop}>
          <CardIndex
            image="images/icons/index/icons8-relatório-gráfico-60.png"
            title=""
            text="Relatórios personalizados conforme as necessidades do cliente"
          />
          <CardIndex
            image="images/icons/index/icons8-semi-truck-side-view-50.png"
            title=""
            text="Maior agilidade para a logística inbound da sua empresa"
          />
          <CardIndex
            image="images/icons/index/icons8-1-stop-flight-64.png"
            title=""
            text="Cadastro nos principais aeroportos facilitando a operação
          logística"
          />
          <CardIndex
            image="images/icons/index/icons8-mover-por-carrinho-50.png"
            title=""
            text="Disponibilização de equipamentos para operações logísticas"
          />
        </div>
        <div className={styles.cardsdown}>
          <CardIndex
            image="images/icons/index/icons8-relógio-despertador-48.png"
            title=""
            text="Menor prazo de entrega e coleta"
          />
          <CardIndex
            image="images/icons/index/icons8-escudo-de-segurança-verde-50.png"
            title=""
            text="Carga assegurada"
          />
          <CardIndex
            image="images/icons/index/icons8-pesquisar-mais-48.png"
            title=""
            text="Rastreabilidade da sua mercadoria"
          />
          <CardIndex
            image="images/icons/index/icons8-garantia-60.png"
            title=""
            text="Motoristas 100% qualificados"
          />
        </div>

        {/*Aqui chamamos o componente footer, que será utilizado em todas as páginas da aplicação*/}
        <Footer />
      </main>
    </div>
  );
}

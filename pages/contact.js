import Head from "next/head";
import Header from "./../components/_ui/header/header";
import Footer from "./../components/_ui/footer/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fortlog Transportes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="assets/images/logos/logo_fortlog_cortada.png"/>
      </Head>

      <main>
        {/*Aqui chamamos o componente header, que será utilizado em todas as páginas da aplicação*/}
        <Header />
        <div>
            Aqui terá um formulário de contato
        </div>
        {/*Aqui chamamos o componente footer, que será utilizado em todas as páginas da aplicação*/}
        <Footer />
      </main>
    </div>
  );
}

import { Fragment } from "react";
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Lista from "../../components/lista/Lista";

const CadastroFilme = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <Cadastro />
                <Lista />
            </main>
            <Footer />
        </Fragment>
    )
}
export default CadastroFilme;

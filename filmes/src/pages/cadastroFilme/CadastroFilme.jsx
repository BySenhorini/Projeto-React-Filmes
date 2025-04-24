import { Fragment } from "react";
import Cadastro from "../../components/cadastro/Cadastro";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const CadastroFilme = () => {
    return (
        <Fragment>
            <Header />
            <Cadastro/>
            <Footer />
        </Fragment>
    )
}
export default CadastroFilme;

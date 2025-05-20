import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";

import api from "../../Services/services";

import { useState, useEffect } from "react";

const CadastroFilme = () => {
    const [listaGenero, setListaGenero] = useState([]);
    const [genero, setGenero] = useState("");
    const [filme, setFilme] = useState("");
    //funcao para trazer os generos mo meu select
    async function listarGenero() {
        alert('lista apareceu')
        try {
            const resposta = await api.get('genero');
            setListaGenero(resposta.data);
        } catch (error) {
            console.log(error);
        }

    }
    async function cadastrarFilme() {
        if (filme.trim() !== "") {
            try {
                await api.post('filme', { titulo: filme, idGenero: genero });
                alerta("success", "Sucesso! Cadastro feito com sucesso.");
                setFilme("");
                setGenero("");


            } catch (error) {
                console.log(error);


            }
        } else (
            alerta("error", "Erro! Preencha os campos.")
        )

    }
    useEffect(() => {
        listarGenero();
    }, []);

    return (
        <>
            <Header />
            <main>
                <Cadastro
                    titulo="Cadastro de Filme"
                    placeholder="filme"
                    lista={listaGenero}
                    funcCadastro={cadastrarFilme}

                    valorInput={filme}
                    setValorInput={setFilme}

                    valorSelect={genero}
                    setvalorSelect={setGenero}
                />

                <Lista
                    tituloLista="Lista de Filmes" />

            </main>
            <Footer />
        </>
    )
}

export default CadastroFilme;



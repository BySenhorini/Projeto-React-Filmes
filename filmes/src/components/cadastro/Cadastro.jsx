import Botao from "../botao/Botao";
import "./Cadastro.css";

const Cadastro = () => {
    return (
        <section className="section_cadastro">
            <form action="" className="layout_grid form_cadastro">
                <h1>Cadastro de Filmes</h1>
            <hr />
                <div className="campos_cadastro">
                    <div className="campo_cad_nome">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" placeholder="Digite o nome do  filme:" />
                    </div>
                    <div className="campo_cad_genero">
                        <label htmlFor="genero">Genero</label>
                        <select name="genero" id="">
                            <option value="" disabled selected>Selecione</option>
                            <option value="">Romance</option>
                            <option value="">Suspense</option>
                            <option value="">Terror</option>
                        </select>
                    </div>
                    <Botao />

                </div>

            </form>
        </section>
    )
}
export default Cadastro;
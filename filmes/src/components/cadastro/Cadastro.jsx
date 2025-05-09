import "./Cadastro.css";
import Botao from "../botao/Botao"

const Cadastro = (props) => {
    return(
        <section className="section_cadastro">
            <form action="" className="layout_grid form_cadastro">
            <h1>{props.titulo}</h1>
            <hr/>
            <div className="campos_cadastro">
                <div className="campo_cad_nome">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text"  name="nome" placeholder={`Digite o nome do ${props.placeholder}`} />
                </div>
                <div className="campo_cad_genero" style={{display:props.visibilidade}}>
                    <label htmlFor="genero">Genero:</label>
                    <select name="" id="">
                        {/* /*disabled: desabilita a opcao de selecionar */
                        /*selected: faz com a opcao ja venha selecionada */ }
                        <option value="" disabled selected>Selecione</option>
                        <option value="">Ação</option>
                        <option value="">Terror</option>
                        <option value="">Animação</option>
                        <option value="">Suspense</option>
                        <option value="">Anime</option>
                    </select>
                </div>
                <Botao nomeDoBotao ="Cadastrar"/>
            </div>
            </form>
        </section>
    )
}

export default Cadastro;
import "./Lista.css";
import Editar from "../../assets/img/pen-to-square-solid.svg";
import Excluir from "../../assets/img/trash-can-regular.svg";

const Lista = (props) => {
    return (
        <section className="layout_grid listagem">
            <h1>{props.tituloLista}</h1>
            <hr />
            <div className="tabela">
                <table>
                    {/* cabecalho da tabela */}
                    <thead>
                        {/* table row */}
                        <tr className="table_cabecalho">
                            {/* table head */}
                            <th>Nome</th>
                            <th style={{ display: props.visibilidade }}>Gênero</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    {/* tbody é o corpo da tabela */}
                    <tbody>
                        {/* verificar se a lista esta vindo vazia */}
                        {props.lista && props.lista.length > 0 ? (
                            // vamos mapear os itens da lista
                            props.lista.map((item) => (
                                // colocando uma condicao
                                <tr className="item_lista" 
                                key={props.tipoLista == "genero" ? item.idGenero : item.idFilme}>
                                    <td data-cell="Nome">
                                        {props.tipoLista == "genero" ? item.nome : item.titulo}
                                    </td>
                                    <td data-cell="Gênero" style={{ display: props.visibilidade }}>
                                        {item.genero?.nome}</td>
                                    <td data-cell="Editar">
                                        <button onClick={() => { props.funcEditar(item)}}>
                                            <img src={Editar} alt="Caneta" />
                                        </button>
                                    </td>
                                    <td data-cell="Excluir">
                                        <button onClick={() => (props.funcExcluir(item))}>
                                            <img src={Excluir} alt="Imagem de uma caixa de lixo" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) :
                            (
                                <p>Nenhum genero foi encontrado.</p>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}
export default Lista;

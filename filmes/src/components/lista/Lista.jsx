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
                            <th style={{display:props.visibilidade}}>Gênero</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    {/* tbody é o corpo da tabela */}
                    <tbody>
                        <tr className="item_lista">
                            <td style={{display:props.visibilidade}} data-cell="Nome">Velozes e Furiosos</td>
                            <td data-cell="Genero">Ação</td>

                            <td data-cell="Editar"><img src={Editar} alt="Caneta" /></td>
                            <td data-cell="Excluir"><img src={Excluir} alt="Lixeira" /></td>
                        </tr>
                        <tr className="item_lista">
                            <td style={{display:props.visibilidade}} data-cell="Nome">Invocação do Mal</td>
                            <td data-cell="Genero">Terror</td>

                            <td data-cell="Editar"><img src={Editar} alt="Caneta" /></td>
                            <td data-cell="Excluir"><img src={Excluir} alt="Lixeira" /></td>
                        </tr>
                        <tr className="item_lista">
                            <td style={{display:props.visibilidade}} data-cell="Nome">Minions</td>
                            <td data-cell="Genero">Animação</td>

                            <td data-cell="Editar"><img src={Editar} alt="Caneta" /></td>
                            <td data-cell="Excluir"><img src={Excluir} alt="Lixeira" /></td>
                        </tr>
                        <tr className="item_lista">
                            <td style={{display:props.visibilidade}} data-cell="Nome">Esquadrão 6</td>
                            <td data-cell="Genero">Suspense</td>

                            <td data-cell="Editar"><img src={Editar} alt="Caneta" /></td>
                            <td data-cell="Excluir"><img src={Excluir} alt="Lixeira" /></td>
                        </tr>
                        <tr className="item_lista">
                            <td style={{display:props.visibilidade}} data-cell="Nome">Kakegurui</td>
                            <td data-cell="Genero">Drama</td>

                            <td data-cell="Editar"><img src={Editar} alt="Caneta" /></td>
                            <td data-cell="Excluir"><img src={Excluir} alt="Lixeira" /></td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </section>
    )
}
export default Lista;

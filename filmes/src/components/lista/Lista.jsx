import "./Lista.css";
import Editar from "../../assets/img/pen-to-square-solid.svg";
import Excluir from "../../assets/img/trash-can-regular.svg";

const Lista = () => {
    return (
        <section className="layout_grid listagem">
            <h1>Lista de Filmes</h1>
            <hr />
            <div className="tabela">
                <table>
                    {/* cabecalho da tabela */}
                    <thead>
                        {/* table row */}
                        <tr className="cabecalho">
                            {/* table head */}
                            <th>Nome</th>
                            <th>Genero</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    {/* tbody é o corpo da tabela */}
                    <tbody>
                        <tr className="item_lista">
                            <td>Velozes e Furiosos</td>
                            <td>Ação</td>
                            <td>Gente Grande</td>
                            <td>Comédia</td>
                            <td>Titanic</td>
                            <td>Romance</td>

                            <td><img src={Editar} alt="" /></td>
                            <td><img src={Excluir} alt="" /></td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </section>
    )
}
export default Lista;
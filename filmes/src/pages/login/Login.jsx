import Logo from "../../assets/img/logo.svg";
import "./Login.css";
import Botao from "../../components/botao/Botao";

const Login = () => {
    return (
        <main className="main_login">
            <div className="banner"></div>
            <section className="section_login">
                <img src={Logo} alt="Logo do Filmoteca"></img>
                <form action="" className="form_login">
                    <h1>Login</h1>
                    <div className="campos_login">
                        <div className="campos_input">
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" name="email" placeholder="Digite seu e-mail:" />
                        </div>
                        <div className="campos_input">
                            <label htmlFor="senha">Senha:</label>
                            <input type="password" name="senha" placeholder="Digite sua senha:" />
                        </div>
                    </div>
                    <Botao />
                </form>
            </section>
        </main>
    );
}
export default Login;

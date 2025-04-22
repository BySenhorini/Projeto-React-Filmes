import Logo from "../../assets/img/logo.svg";
import "./Login.css";

const Login = () => {
    return (
        <main className="main_login">
            <div className="banner"></div>
            <section className="section_login">
                <img src={Logo} alt="Logo do Filmoteca"></img>
                <form action="">
                    <h1>Login</h1>
                    <div>
                        <div>
                            <label htmlFor="email">E-mail:</label>
                            <input type="email" name="email" placeholder="Digite seu e-mail:" />
                        </div>
                        <div>
                            <label htmlFor="senha">Senha:</label>
                            <input type="password" name="senha" placeholder="Digite sua senha:" />
                        </div>
                    </div>
                </form>
            </section>
        </main>
    );
}
export default Login;

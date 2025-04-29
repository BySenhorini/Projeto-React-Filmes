import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";

const CadastroGenero = () => {
   return (
      <>
         <Header />
         <main>

            <Cadastro titulo="Cadastro de Gêneros"
               visibilidade="none"
               placeholder="gênero"
            />
            <Lista  
            tituloLista="Lista de Gêneros"
            visibilidade="none"/> 
            
           

         </main>
         <Footer />
      </>

   )
}
export default CadastroGenero;



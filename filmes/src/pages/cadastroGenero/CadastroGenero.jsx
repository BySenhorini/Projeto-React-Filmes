import { useEffect, useState } from "react";

import api from "../../Services/services";

//importar o sweetAlert
import Swal from 'sweetalert2'

//importação de componentes:
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";

const CadastroGenero = () => {

  //nome do genero
  const [genero, setGenero] = useState("");
  const [listaGenero, setListaGenero] = useState([]);
  const [deletaGenero, setDeletaGenero] = useState();


  function alerta(icone, mensagem) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: icone,
      title: mensagem
    });
  }

  // vai acontecer depois que eu clicar no botao cadastrar
  async function cadastrarGenero(e) {
    e.preventDefault();
    //Verificar se o input esta vindo vazio
    if (genero.trim() !== "") {
      //try => tentar(o esperado)
      //catch => pega a exceção
      try {
        //cadastrar um gênero: post
        await api.post("genero", { nome: genero })
        alerta("success", "Cadastro realizado com sucesso!")
        setGenero("")
        listarGenero();
      }
      catch (error) {
        alerta("error", "Erro! Entre em contato com o suporte!")
        console.log(error);
      }
    }
    else {
      alert("error", "Erro! Preencha o campo")
    }

  }
  async function listarGenero() {
    try {
      const resposta = await api.get("genero")
      console.log(resposta.data);
      setListaGenero(resposta.data);

    } catch (error) {
      console.log(error);


    }
  }
  async function excluirGenero(idGenero) {

    try {
      const excluirgenero = await api.delete(`genero/${idGenero}`);
      setDeletaGenero(excluirgenero.data)


      Swal.fire({
        title: "Você tem certeza?",
        text: "Essa alteração não poderá ser desfeita!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, delete isso!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deletado!",
            text: "Seus arquivos serão deletados!",
            icon: "success"
          });
        }
      });
    }
    catch (error) {
      console.log(error)
    }
  }




  // //Teste
  // useEffect(() => {
  //   console.log(genero);
  // },[genero]);
  // //Fim do teste

  //teste: validar o que esta sendo passado co,o respodsta em listarGenero
  useEffect(() => {
    listarGenero();
  }, [listaGenero])


  return (
    <>
      <Header />
      <main>

        <Cadastro titulo="Cadastro de Gêneros"
          visibilidade="none"
          placeholder="gênero"

          //Atribuindo a funcao
          funcCadastro={cadastrarGenero}

          //Atribuindo o valor ao input
          valorInput={genero}



          //Atirbuindo a funcao que atualiza o meu genero
          setValorInput={setGenero}
        />
        <Lista
          tituloLista="Lista de Gêneros"
          visibilidade="none"
          lista={listaGenero}
          deletar={excluirGenero}
        />
        {/* atribuir para lista, o meu estado atual */}



      </main>
      <Footer />
    </>

  )
}
export default CadastroGenero;



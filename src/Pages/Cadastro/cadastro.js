import { cadastrarUsuario } from "../../lib/firebase"; 
import logo_mundo_azul from "../Imagens/Mundo_azul_logo.png"

export function cadastro() {
  const containerCadastro = document.createElement("div");

  const templateCadastro = `   
    
    <header></header>

   <main>

     <div class = container-cadastro>

     <section class="logo_cadastro">     
     <img src= ${logo_mundo_azul} alt="Logo da página">
     </section>
      
      <section class="campos_de_preenchimento">
      <h2 class="subtitulo">Cadastre-se aqui!</h2>

      <label for="name" >Nome completo</label>
      <input type = "name"  class="name" id = "name" name= "name" placeholder = "" requered>
      
      <label for="email" >E-mail</label>
      <input type = "email" class="email" id = "email" name="email" placeholder = "" requered>
      
      <label for="senha" >Senha</label>
      <input type = "password" class="senha" id = "senha" name="senha" placeholder = "" requered>
       
      <button type="button" id="button">Cadastrar</button>
      </section>

     </div>

   </main>

   <footer>
     <p class="criadora"> Desenvolvido por Carolina Menezes</p>
   </footer>
`;
  containerCadastro.innerHTML = templateCadastro;

  const cadastroPage = document.createElement("link");
  cadastroPage.rel = "stylesheet";
  cadastroPage.href = "pages/Cadastro/cadastro.css";
  document.head.appendChild(cadastroPage); // Será que o CSS está dendo aplicado em todas as páginas por conta desta linha?


  function criarCadastro () {

    //const nome = containerCadastro.querySelector("#name");
    const email = containerCadastro.querySelector("#email");
    const senha = containerCadastro.querySelector("#senha");
    //const confirmarSenha = containerCadastro.querySelector("#confirme_a_senha");
    const emailCadastro = email.value;
    const senhaCadastro = senha.value;
    cadastrarUsuario(emailCadastro, senhaCadastro)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      alert ("Cadastro realizado com sucesso!");
      window.location.hash = "#login";
      console.log(userCredential)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert ("Ocorreu algum erro, verifique se o e-mail está correto e/ou se a senha possui pelo menos 6 dígitos.");
      console.log(error) 
    });
  }

  const botaoCriarUsuario = containerCadastro.querySelector("#button");
  botaoCriarUsuario.addEventListener("click", criarCadastro);
  
  
  return containerCadastro;
}




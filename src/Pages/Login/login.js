import logo_mundo_azul from "../Imagens/Mundo_azul_logo.png"
import icone_login from "../Imagens/icone_login.jpg"
import icone_senha from "../Imagens/icone_senha.jpg"
import { login } from "../../lib/firebase";

export function paginaLogin() {
  const containerLogin = document.createElement("div");

  const templateLogin = `   
    
    <header></header>

   <main>

     <div class = container-login>
     <section class="logotipo">

     <img src= ${logo_mundo_azul} alt="Logo da página"> 

     <p class="resumo_1">
      O Mundo Azul, é uma rede social destinada a mães, pais e cuidadores 
      de pessoas com TEA (Transtorno do Espectro Autista). 
      </p>
      <p class="resumo_2">
      Aqui você encontrará  acolhimento, empatia e dicas importantes para 
      entender melhor sobre este mundo. 
     </p>-
      </section>

     <section class="formulario">
      <h2 class="bem_vindos">Sejam bem vindes ao</h2>
      <h1>Mundo Azul</h1>
      <img src= ${icone_login} alt="Ìcone do login" class="icone_login">
      <label for="login" >Login</label>
      <input type = "email" class="login" id = "login" name="login" placeholder = "" requered>
      
      <img src= ${icone_senha} alt="Ìcone da senha" class="icone_senha">
      <label for="senha" >Senha</label>
      <input type = "password"  class="login" id = "senha-login" name="senha" placeholder = "" requered>
      
      <a href= "/#recuperar" id="recuperar-senha" class="recuperar-senha">Esqueci a senha</a>
          
      <a class="btn-entrar" href="/#feed"><button type="button" id="button">Entrar</button></a>

      <p class="cadastro">Não está cadastrado? <a href= "/#cadastro-clique-aqui" class="clique-aqui" id="clique-aqui">Clique aqui!</a></p>
     </section>
     </div>

   </main>

   <footer>
   <p class="desenvolvedora"> Desenvolvido por Carolina Menezes</p>
   </footer>
`;
  containerLogin.innerHTML = templateLogin;

  //interligando com a página de CSS
  const loginPage = document.createElement("link"); loginPage.rel = "stylesheet";
  loginPage.href = "pages/login/login.css";
  document.head.appendChild(loginPage);


  //função para fazer login

  function singIn () {

  const email = containerCadastro.querySelector("#login");
  const senha = containerCadastro.querySelector("#senha_login");
  const emailLogin = email.value;
  const senhaLogin = senha.value;
  login(emailLogin, senhaLogin)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.href = '#feed';
  })
  .catch((error) => {
    alert("Erro ao fazer login, verifique e-mail e senha, ou cadastra-se.")
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
  });

  }

  const botaoEntrar = containerLogin.querySelector("#button");
  botaoEntrar.addEventListener("click", singIn);

  return containerLogin;
}
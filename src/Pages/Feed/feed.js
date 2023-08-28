import { collection, addDoc } from "firebase/firestore";
import { async } from "regenerator-runtime";
import { buscarPostagens } from "../../lib/firebase";
import { salvarPost } from "../../lib/firebase";



export function feed () { 
  const containerFeed = document.createElement("div"); //um novo elemento <div>bé criado e armazenado na variável containerFeed.
//nas proximas linhas o código HTML  é definido como uma string multilinha na variável templateFeed.
  const templateFeed = `

   <header>
    <p>"Há palavras que ferem como espada, mas a língua dos sábios traz a cura... Provérbios 12:18".</p>
  </header>

  <main>

  <div class = "container-feed" id="post-container">
         <textarea class="post" placeholder="O que deseja compartilhar?"></textarea>
         <button id="btnPostar"  class="btn-post">Postar</button>
       </div>

  </main>
  <footer>
     <p class="desenvolvedora"> Desenvolvido por Lilian Damadi</p>
     </footer>
  ` ;
  
  containerFeed . innerHTML  =  templateFeed ; //o conteúdo do containerFeed é  preenchido com o código HTML definido na variável templateFeed.
     
const feedPage = document.createElement("link"); //criado para estilizar no CSS
feedPage.rel = "stylesheet"; 
feedPage.href = "pages/Feed/feed.css";
document.head.appendChild(feedPage);


const textarea = containerFeed.querySelector(".post"); //.post é um seletor CSS que procura por um elemento com a classe CSS chamada "post".
const btnPostar = containerFeed.querySelector("#btnPostar");
btnPostar.addEventListener("click", async () => {
  const textoPost = textarea.value;
  console.log("Texto do post:", textoPost);
  
  
  
    await salvarPost(textoPost);
  const postagens = await buscarPostagens();
    const containerFeed = document.querySelector(".container-feed");
    containerFeed.innerHTML = "";
    postagens.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("postagem"); // Adicione uma classe para estilização

      const mensagemElement = document.createElement("p");
      mensagemElement.textContent = post.mensagem; // Conteúdo da mensagem

      const dataElement = document.createElement("p");
      dataElement.textContent = post.data; // Conteúdo da data da postagem
      
      postElement.appendChild(mensagemElement);
      postElement.appendChild(dataElement);
      containerFeed.appendChild(postElement);
      postElement.textContent = post.mensagem; // Personalize conforme necessário
      
  });

   });


  return  containerFeed ;
 
};








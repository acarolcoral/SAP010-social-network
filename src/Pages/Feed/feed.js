import { collection, addDoc } from "firebase/firestore";
export function feed () {
  const containerFeed = document.createElement("div"); //um novo elemento <div>bé criado e armazenado na variável containerFeed.
//nas proximas linhas o código HTML  é definido como uma string multilinha na variável templateFeed.
  const templateFeed = `

   <header>
    <p>"Há palavras que ferem como espada, mas a língua dos sábios traz a cura... Provérbios 12:18".</p>
  </header>

  <main>

  <div class = "container-feed">
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

/*const buttonPostar = containerFeed.querySelector("btnPostar");

buttonPostar.addEventListener("click", ()=> {
  const modal = createModal(); //Modal abre caixa de diálogo quando botão for acionado
  containerFeed.appendChild(modal);
  modal.style.display = "flex" //faz o modal aparecer
});*/

const textarea = containerFeed.querySelector(".post"); //.post é um seletor CSS que procura por um elemento com a classe CSS chamada "post".
const btnPostar = containerFeed.querySelector("#btnPostar");
btnPostar.addEventListener("click", () => {
  const textoPost = textarea.value;
  console.log("Texto do post:", textoPost);

  
  });


  return  containerFeed ;
 
};








import { salvarPost, buscarPostagens } from "../../lib/firebase";
//import { async } from "regenerator-runtime";


export function feed() {
  const containerFeed = document.createElement("div"); //um novo elemento <div>é criado e armazenado na variável containerFeed.
  //nas proximas linhas o código HTML  é definido como uma string multilinha na variável templateFeed.
  const templateFeed = `

   <header>
    <p>"Há palavras que ferem como espada, mas a língua dos sábios traz a cura... Provérbios 12:18".</p>
  </header>

  <main>

  <div class = "container-feed" id="post-container">
         <textarea class="post"  placeholder="O que deseja compartilhar?"></textarea>
         <p>$(mensagem)</p>
         <p>$(timestamp.toDate())</p>
         <button id="btnPostar"  class="btn-post">Postar</button>
         <button id="apagar post" class="apagar-post">Apagar</button>
       </div>

  </main>
  <footer>
     <p class="desenvolvedora"> Desenvolvido por Lilian Damadi</p>
     </footer>
  ` ;

  containerFeed.innerHTML = templateFeed; //o conteúdo do containerFeed é  preenchido com o código HTML definido na variável templateFeed.

  const feedPage = document.createElement("link"); //criado para estilizar no CSS
  feedPage.rel = "stylesheet";
  feedPage.href = "pages/Feed/feed.css";
  document.head.appendChild(feedPage);

  //const btnDelete = containerFeed.querySelector('#apagar-post-${}');


  const textarea = containerFeed.querySelector(".post"); //.post é um seletor CSS que procura por um elemento com a classe CSS chamada "post".
  const btnPostar = containerFeed.querySelector("#btnPostar");

  btnPostar.addEventListener("click", async () => {
    const textoPost = textarea.value;
    console.log("Texto do post:", textoPost);
    if (textoPost.trim() !== "") { // Verifica se o texto não está vazio ou só contém espaços
     
      await salvarPost(textoPost);
      const postagens = await buscarPostagens();
      //const postContainer = containerFeed.querySelector("#post-container");
      //postContainer.innerHTML = "";
      

      /*const containerFeed = document.querySelector(".container-feed");
      containerFeed.innerHTML = "";*/

     console.log(postagens)
      postagens.forEach((post) => {
        console.log(post)

        // const postElement = document.createElement("div");
        // postElement.classList.add("postagem"); // Adiciona uma classe para estilização

        // const mensagemElement = document.createElement("p");
        // mensagemElement.textContent = post.mensagem; // Conteúdo da mensagem

        // const dataElement = document.createElement("p");
        // dataElement.textContent = post.data; // Conteúdo da data da postagem

        // postElement.appendChild(mensagemElement);
        // postElement.appendChild(dataElement);
        // containerFeed.appendChild(postElement);
        //postElement.textContent = post.mensagem; // 

        const printPost = async () => {
          buscarPostagens.innerHTML = '';
          const posts = await salvarPost();
          posts.forEach(post => {
            console.log(post);

          });
        };

        printPost();
        btnPostar.addEventListener('click', () => {
          const postContainer = containerFeed.querySelector('#post-container');
          console.log(postContainer);
          salvarPost(postContainer.value);
          printPost();
        });
      });

    };

  });

  return containerFeed;

};








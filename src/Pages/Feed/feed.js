import { salvarPost, buscarPostagens } from "../../lib/firebase";
import { excluirPost } from "../../lib/firebase";
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
         <p class="mensagem"></p>
         <p class="timestamp"></p>
         <button id="btnPostar"  class="btn-post">Postar</button>
         <button id="excluir post" class="excluir post">Excluir</button>
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

  //const btnDelete = containerFeed.querySelector('#apagar-post');


  const textarea = containerFeed.querySelector(".post"); //.post é um seletor CSS que procura por um elemento com a classe CSS chamada "post".
  const btnPostar = containerFeed.querySelector("#btnPostar");

  btnPostar.addEventListener("click", async () => {
    const textoPost = textarea.value;
    console.log("Texto do post:", textoPost);
    if (textoPost.trim() !== "") { // Verifica se o texto não está vazio ou só contém espaços

      await salvarPost(textoPost);
      const postagens = await buscarPostagens();
      const postContainer = containerFeed.querySelector("#post-container");
      postContainer.innerHTML = "";

      postagens.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("postagem");

        const mensagemElement = document.createElement("p");
        mensagemElement.textContent = post.mensagem;

        const timestampElement = document.createElement("p");
        timestampElement.textContent = post.data;

        const excluirButton = document.createElement("button");
        excluirButton.textContent = "Excluir";
        excluirButton.addEventListener("click", () => {
          excluirPost(post.id); // Chama a função para excluir a postagem ao clicar no botão
        });

        postElement.appendChild(mensagemElement);
        postElement.appendChild(timestampElement);
        postElement.appendChild(excluirButton); // Adicionei o botão "Excluir" à postagem
        postContainer.appendChild(postElement);
      });
    };
  });
  return containerFeed;
}






/*const containerFeed = document.querySelector(".container-feed");
containerFeed.innerHTML = "";*/

    //  console.log(postagens)
    // postagens.forEach((post) => {
    //     console.log(post)

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

        // const printPost = async () => {
        //   buscarPostagens.innerHTML = '';
        //   const posts = await salvarPost();
        //   posts.forEach(post => {
        //     console.log(post);

        //   });
        // };

//         printPost();
//         btnPostar.addEventListener('click', () => {
//           const postContainer = containerFeed.querySelector('#post-container');
//           console.log(postContainer);
//           salvarPost(postContainer.value);
//           printPost();
//         });
//       });

//     };

//   });

//   return containerFeed;

// };








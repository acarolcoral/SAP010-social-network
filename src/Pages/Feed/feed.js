//import { entrarFeed } from "../Feed/feed.js";

export function feed () {
  const containerFeed = document.createElement("div");

  const templateFeed = `

  <header>
    <h1>Feed Page</h1>
  </header>

  <body>

    <div>
        <input type="text" id="feedInput" placeholder="Digite algo...">
        <button id="submitBtn">Postar</button>
    </div>
    <div id="feedContainer">
        <!-- Aqui é onde os feeds serão exibidos -->
    </div>
    </body>
  `;
  containerFeed.innerHTML = templateFeed;

const feedPage = document.createElement("link"); 
feedPage.rel = "stylesheet"; 
feedPage.href = "pages/Feed/feed.css";
document.head.appendChild(feedPage);

const feedInput = document.querySelector('feedInput');
      const submitBtn = document.querySelector('submitBtn');
      const feedContainer = document.querySelector('feedContainer');

      submitBtn.addEventListener(('click', Postar) => { // Adicionando um ouvinte de evento ao botão de envio
      const feedText = feedInput.value;

      if (feedText.trim() !== '') { 
        const newFeedItem = document.createElement('div'); // Criando um novo elemento de feed (por exemplo, uma div) e adicionando ao feedContainer
        newFeedItem.textContent = feedText;
        feedContainer.appendChild(newFeedItem);
        feedInput.value = '';
            }
        });

/*entrarFeed (postarFeed).then((userCredential) => {
  const user = userCredential.user;
  console.log("Usuário autenticado:", user);
  
  })

  .catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  return errorMessage + errorCode;      
  });*

  const botaoPostar = containerLogin.querySelector("#feedInput");
  botaoEntrar.addEventListener("click", postarFeed); //mudar para */

  return containerFeed;
}


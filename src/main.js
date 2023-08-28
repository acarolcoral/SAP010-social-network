// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './index.js';

//myFunction();

import { async } from 'regenerator-runtime';
import { cadastro } from './Pages/Cadastro/index.js';
import { feed } from './Pages/Feed/feed.js';
import { login } from './Pages/Login/login.js';
import { recuperarSenha } from './Pages/Recuperar senha/recuperar_senha.js';
//import { buscarPostagens } from '../../lib/firebase';


const container = document.querySelector("#container");
const init = () => {
    window.addEventListener("hashchange", async () => {
    container.innerHTML = "";
    switch(window.location.hash) {
        case "#feed":
            container.appendChild(feed());
            try {
                const postagens = await buscarPostagens();
                console.log("Postagens:", postagens);
                // para exibir as postagens na interface do usuário, por exemplo:
                } catch (error) {
                console.error("Erro ao buscar postagens:", error);
            }
            break;
        case "#cadastro":
            container.appendChild(cadastro());
            break;
        case "#recuperar":
            container.appendChild(recuperarSenha());
            break;
        case "#cadastro-clique-aqui":
            container.appendChild(cadastro());
            break;
        default:
            container.appendChild(login());

    }
  })
}

window.addEventListener("load",  () => {
    container.appendChild(login());
    init();
})

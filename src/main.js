// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './index.js';

//myFunction();

import { cadastro } from './Pages/Cadastro/index.js';
import { feed } from './Pages/Feed/feed.js';
import { login } from './Pages/Login/login.js';
import { recuperarSenha } from './Pages/Recuperar senha/recuperar_senha.js';
      


const container = document.querySelector("#container");
const init = () => {
    window.addEventListener("hashchange", () => {
    container.innerHTML = "";
    switch(window.location.hash) {
        case "#feed":
            container.appendChild(feed());
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

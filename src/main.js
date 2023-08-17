// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './index.js';

//myFunction();

import { cadastro } from './Pages/Cadastro/cadastro.js';
import { paginaLogin } from './Pages/Login/login.js';
import { recuperarSenha } from './Pages/Recuperar senha/recuperar_senha.js';
import home from './Pages/Home/home.js';
import {feed} from './Pages/Feed/feed.js';


const container = document.querySelector("#container");
const init = () => {
    window.addEventListener("hashchange", () => {
    container.innerHTML = "";
    switch(window.location.hash) {
        case " ":
            container.appendChild(home());
            break;
        case "#login":
            container.appendChild(paginaLogin());
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
        case "#feed":
            container.appendChild(feed());
            break;
        default:
            container.appendChild(home());

    }
  })
}

window.addEventListener("load", () => {
    window.location.hash = ""
    container.appendChild(home()); //trocar por feed enquanto estou codando
    init();
})

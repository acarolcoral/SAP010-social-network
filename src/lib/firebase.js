import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"; /*acrescentei somente  signInWithEmailAndPassword para login*/
import { auth } from "./configurações_do_firebase/"; /*importei do configurações do firebase*/
import { db } from "./configurações_do_firebase/";

export function cadastrarEmail (email, password) {
console.log("antes da função")

return createUserWithEmailAndPassword(auth, email, password) /*função da promessa*/ 

  console.log("depois da função")
  
}

export function fazerLogin (email, password) {

return signInWithEmailAndPassword(auth, email, password) /*função da promessa*/ 

  
}
 
export const salvarPost =  async (mensagem) => {
  const docRef = await addDoc(collection(db, "Postagens"), {
    mensagem: "Tokyo",
    data_hora: "Japan"
  });
  console.log("Document written with ID: ", docRef.id);

  const postContainer = document.getElementById("post-container");
    
    const newPostButton = document.createElement("button");
    newPostButton.innerText = "Novo Post"; // Defina o texto do botão como desejado
    newPostButton.addEventListener("click", () => {
        // Lógica a ser executada quando o botão for clicado
        alert("Botão de novo post clicado!");
    });
    
    postContainer.appendChild(newPostButton);

    console.log("Document written with ID: ", docRef.id);
}




//import { getAuth, signOut } from "firebase/auth";

/*const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});      - para desconectar um usuário chame signOut*/
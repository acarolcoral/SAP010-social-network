import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./configurações_do_firebase/"; /*importei do configurações do firebase*/
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";



export function cadastrarUsuario(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

/*
const auth = getAuth();
return onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
});
*/




export function login (email, password) {
    
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
        

}

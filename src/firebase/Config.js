import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCi4nKOd-jpX0EE5sDtklaPWnySbNyQ84k",
  authDomain: "bibliotech-becca.firebaseapp.com",
  projectId: "bibliotech-becca",
  storageBucket: "bibliotech-becca.appspot.com",
  messagingSenderId: "796670678381",
  appId: "1:796670678381:web:ad5644233e56223b66f664"
};

// Inicializa o app com base nas configurações acima
export const app = initializeApp(firebaseConfig);
// Configurando o Authentication e seus recursos login/cadastro
export const auth = getAuth(app);
// Configura o Firestore e seus recursos de banco de dados
export const db = getFirestore(app);
// Configura o Storage e seus recursos de Upload
export const storage = getStorage(app);

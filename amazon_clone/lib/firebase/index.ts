// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACEAqobHkx-ACqoiupbh6iCNl5FsHvm8c",
  authDomain: "clone-89f3c.firebaseapp.com",
  projectId: "clone-89f3c",
  storageBucket: "clone-89f3c.appspot.com",
  messagingSenderId: "620550332774",
  appId: "1:620550332774:web:99ce3ba50a9c3cb97fe8a7",
  measurementId: "G-06ZJR302RG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// en firebase hice authentication puse para correo y contrae;a de ahi el auth es para 
//poder controlar y entrar a mi aplicacion
export const auth =getAuth(app);

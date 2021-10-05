// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdfJhWHaUuE7uXyTB4LOTS22X00q1FBgw",
  authDomain: "pokeapi-48f42.firebaseapp.com",
  projectId: "pokeapi-48f42",
  storageBucket: "pokeapi-48f42.appspot.com",
  messagingSenderId: "508184136820",
  appId: "1:508184136820:web:1ae15583f4588adf97d521"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
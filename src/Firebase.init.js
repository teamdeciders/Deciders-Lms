// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgXxY2DdnlcQJupfHpY9Fq3z1nAHnjTYA",
  authDomain: "hero-89363.firebaseapp.com",
  projectId: "hero-89363",
  storageBucket: "hero-89363.appspot.com",
  messagingSenderId: "768601478261",
  appId: "1:768601478261:web:e2eea84bc0e4e1cb2b143c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
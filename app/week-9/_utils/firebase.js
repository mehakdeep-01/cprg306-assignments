// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSBxAsxjSyOUGTu1fCv_Cyau1BgE_7Nfg",
  authDomain: "cprg-306assignments-3e81f.firebaseapp.com",
  projectId: "cprg-306assignments-3e81f",
  storageBucket: "cprg-306assignments-3e81f.firebasestorage.app",
  messagingSenderId: "137450605330",
  appId: "1:137450605330:web:099498a87ac0c46ed481cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
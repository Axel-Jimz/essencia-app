// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe2gn1Hk0C_M_FLOS-7WC-JSaw4ACbINw",
  authDomain: "essencia-app.firebaseapp.com",
  projectId: "essencia-app",
  storageBucket: "essencia-app.appspot.com",
  messagingSenderId: "124764512296",
  appId: "1:124764512296:web:528e4cc948dc6875f0951d",
  measurementId: "G-BM7WEF7F7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage();

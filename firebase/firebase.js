// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCicMjUHjfLrhIGN-QqsaULkFq-5DkaQHQ",
  authDomain: "sip-project-3a2b1.firebaseapp.com",
  projectId: "sip-project-3a2b1",
  storageBucket: "sip-project-3a2b1.appspot.com",
  messagingSenderId: "1012027596363",
  appId: "1:1012027596363:web:cbe66716a295c88e13f7ce",
  measurementId: "G-5E2S69MXPK"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export const auth = getAuth(app);
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {signInWithPhoneNumber , getAuth, RecaptchaVerifier} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqp-v5mdtB1tf0tAxCPfjsuy8efJSz7dg",
  authDomain: "pentavalue-4a41c.firebaseapp.com",
  projectId: "pentavalue-4a41c",
  storageBucket: "pentavalue-4a41c.appspot.com",
  messagingSenderId: "64420692841",
  appId: "1:64420692841:web:373d97760ca7981d3473f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export function setUpRecaptcha(number){
    const recapatcha = new RecaptchaVerifier('recaptcha-container' , {} , auth)
    recapatcha.render()
    return signInWithPhoneNumber(auth , number , recapatcha);
}
console.log(auth.currentUser)
export  const user = auth.currentUser  

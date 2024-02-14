// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider, EmailAuthCredential} from 'firebase/auth'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD14j1M34YDrjVpHl6BTmyl8IABaBZYRaE",
  authDomain: "blog-46e86.firebaseapp.com",
  projectId: "blog-46e86",
  storageBucket: "blog-46e86.appspot.com",
  messagingSenderId: "64693467385",
  appId: "1:64693467385:web:f87efe9d53c159e3610a28",
  measurementId: "G-S26RRXVWGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const provider2 = new EmailAuthCredential();
export const db = getFirestore(app);
export const storage = getStorage(app);
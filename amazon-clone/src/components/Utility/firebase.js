import firebase from "firebase/compat/app";
//auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgVUzyp08CkypwWiEDL1F0elKMffK23v4",
  authDomain: "clone-3770a.firebaseapp.com",
  projectId: "clone-3770a",
  storageBucket: "clone-3770a.firebasestorage.app",
  messagingSenderId: "771621218096",
  appId: "1:771621218096:web:169ad8833dab25ebd58af5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = firebase.firestore();
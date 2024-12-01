import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth"; // Ensure auth is included for compatibility

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgVUzyp08CkypwWiEDL1F0elKMffK23v4",
  authDomain: "clone-3770a.firebaseapp.com",
  projectId: "clone-3770a",
  storageBucket: "clone-3770a.appspot.com",
  messagingSenderId: "771621218096",
  appId: "1:771621218096:web:169ad8833dab25ebd58af5",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig); // Use `firebase.initializeApp` for compatibility
export const auth = firebase.auth(); // Use compatibility version
export const db = firebase.firestore();

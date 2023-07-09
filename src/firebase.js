import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuWVPpECXDqol9zrqpFa8pGDDhG8FN17o",
  authDomain: "whats-app-clone-360ad.firebaseapp.com",
  projectId: "whats-app-clone-360ad",
  storageBucket: "whats-app-clone-360ad.appspot.com",
  messagingSenderId: "191369123760",
  appId: "1:191369123760:web:5b7b92fba8133a6788a875",
  measurementId: "G-YK9BK19P15",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBF0PwnVZFFlVmCrNVWNw2QFaU-hBU4N2Q",
    authDomain: "facebook-clone-6199a.firebaseapp.com",
    databaseURL: "https://facebook-clone-6199a.firebaseio.com",
    projectId: "facebook-clone-6199a",
    storageBucket: "facebook-clone-6199a.appspot.com",
    messagingSenderId: "746436505332",
    appId: "1:746436505332:web:4629fb7d95afebb73078a1",
    measurementId: "G-NTB9EJW62D"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
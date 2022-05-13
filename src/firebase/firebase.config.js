import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3eylTX3IEmVa0tLn28mJlV-yftIWWH10",
  authDomain: "react-journal-app-98363.firebaseapp.com",
  projectId: "react-journal-app-98363",
  storageBucket: "react-journal-app-98363.appspot.com",
  messagingSenderId: "888697878524",
  appId: "1:888697878524:web:98557adee68f87b00c6479",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };

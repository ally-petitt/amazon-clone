import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAikG8YKnv6Otwono1CfzSbe8YgWDw-33U",
  authDomain: "clone-a30c4.firebaseapp.com",
  projectId: "clone-a30c4",
  storageBucket: "clone-a30c4.appspot.com",
  messagingSenderId: "180773774287",
  appId: "1:180773774287:web:fb4783d54edbb9daf768ba",
  measurementId: "G-YF62SN6R6Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

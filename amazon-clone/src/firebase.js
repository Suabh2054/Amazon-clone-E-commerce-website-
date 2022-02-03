// import firebase from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import * as firebase from "firebase/app"
const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyB-qFO511akqMgVndJlFC0CExF5dfoooHU",
  authDomain: "clone-77cef.firebaseapp.com",
  projectId: "clone-77cef",
  storageBucket: "clone-77cef.appspot.com",
  messagingSenderId: "758741827749",
  appId: "1:758741827749:web:fcd40e50f3cbb21adb8d4c",
  measurementId: "G-4P2N6WM5SV"




})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth } ;

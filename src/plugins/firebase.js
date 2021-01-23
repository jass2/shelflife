// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

var firebaseConfig = {
    apiKey: "AIzaSyAApcrYlB0B1SnyWi_5GNE9dflW9hlrccs",
    authDomain: "shelflifeblog-96b91.firebaseapp.com",
    projectId: "shelflifeblog-96b91",
    storageBucket: "shelflifeblog-96b91.appspot.com",
    messagingSenderId: "1070027080988",
    appId: "1:1070027080988:web:9a040b2dea8b8d7acda6d9",
    measurementId: "G-CXNWN4L0SD"
  }

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const db = firebase.firestore()
export const auth = firebase.auth()
export const adminSignIn = new firebase.auth.GoogleAuthProvider()

import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBdHm9ztW7X0fn0fIZnMNluteB3UC6SX64",
    authDomain: "e-ride-62402.firebaseapp.com",
    projectId: "e-ride-62402",
    storageBucket: "e-ride-62402.appspot.com",
    messagingSenderId: "62594963118",
    appId: "1:62594963118:web:edaae2167eda4e70e0ff3f"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

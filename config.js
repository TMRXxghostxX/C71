import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAHyg-GAHF-llM7SoPNr9XiM_YgacQtMLM",
    authDomain: "travesia-digital-cdecd.firebaseapp.com",
    projectId: "travesia-digital-cdecd",
    storageBucket: "travesia-digital-cdecd.appspot.com",
    messagingSenderId: "1088550847449",
    appId: "1:1088550847449:web:b471e88082faea4a6b8fc8",
    measurementId: "G-R94KGLJH55"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

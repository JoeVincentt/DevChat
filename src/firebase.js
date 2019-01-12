import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Initialize Firebase
const config = {
  apiKey: "XXX",
  authDomain: "XXXX",
  databaseURL: "XXXX",
  projectId: "XXX",
  storageBucket: "XXX",
  messagingSenderId: "XXX"
};
firebase.initializeApp(config);

export default firebase;

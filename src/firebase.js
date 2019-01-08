import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyB2Wdt6JyNaeqrQr2l4rqPL60_T9RMQBHw",
  authDomain: "slack-chat-app-by-eb.firebaseapp.com",
  databaseURL: "https://slack-chat-app-by-eb.firebaseio.com",
  projectId: "slack-chat-app-by-eb",
  storageBucket: "slack-chat-app-by-eb.appspot.com",
  messagingSenderId: "669048398190"
};
firebase.initializeApp(config);

export default firebase;

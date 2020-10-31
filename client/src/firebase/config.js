import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCDbz6JOTzRQZX9eP2Mz8EfAcqzILtISIQ",
    authDomain: "orbis-system.firebaseapp.com",
    databaseURL: "https://orbis-system.firebaseio.com",
    projectId: "orbis-system",
    storageBucket: "orbis-system.appspot.com",
    messagingSenderId: "595025236430",
    appId: "1:595025236430:web:fbe8a8e50c174736041b9f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const projectFirestore = firebase.firestore();

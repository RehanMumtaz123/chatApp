import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyCbdk1hhAUi8TpphZjSG8ZYKSbVV8vXc-M",
    authDomain: "rehanassignweb.firebaseapp.com",
    databaseURL: "https://rehanassignweb.firebaseio.com",
    projectId: "rehanassignweb",
    storageBucket: "rehanassignweb.appspot.com",
    messagingSenderId: "698364091693",
    appId: "1:698364091693:web:229e5660b6dbd26f2b87a4",
    measurementId: "G-26G00KTVES"
  };
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);


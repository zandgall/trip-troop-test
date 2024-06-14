// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from 'firebase/compat/app'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDApUQO-0qz5v2p23RFZ8u4WTirhcbI0TQ",
  authDomain: "trip-troop.firebaseapp.com",
  databaseURL: "https://trip-troop-default-rtdb.firebaseio.com",
  projectId: "trip-troop",
  storageBucket: "trip-troop.appspot.com",
  messagingSenderId: "544346147426",
  appId: "1:544346147426:web:705282e92b5d0d23375f3b",
  measurementId: "G-JN3RVYBW8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

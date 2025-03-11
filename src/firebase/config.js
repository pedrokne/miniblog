// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyTP0zFFmQtm79C244uIRrweEfRo6sI8s",
  authDomain: "miniblog-916e6.firebaseapp.com",
  projectId: "miniblog-916e6",
  storageBucket: "miniblog-916e6.firebasestorage.app",
  messagingSenderId: "325670885488",
  appId: "1:325670885488:web:aa337b54a23a472f02bcb5",
  measurementId: "G-9DK8RJBQ7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = getFirestore(app)

export {db, app}
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDlgH9AG63F0wCKkqT-7bGJ2OC9U7feII",
  authDomain: "referee-8cc26.firebaseapp.com",
  projectId: "referee-8cc26",
  storageBucket: "referee-8cc26.appspot.com",
  messagingSenderId: "950616561967",
  appId: "1:950616561967:web:4e3bda46820efc06d829da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db, collection, addDoc };

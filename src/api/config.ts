import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBR4mejJM3vyQEDAlWYMu478GoJts4Y4ag",
  authDomain: "gymapp-d10be.firebaseapp.com",
  projectId: "gymapp-d10be",
  storageBucket: "gymapp-d10be.appspot.com",
  messagingSenderId: "316980203554",
  appId: "1:316980203554:web:4455f1a3553c64c9ad3a7b",
  measurementId: "G-41CXWLBEZE",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = getAuth();
const firestore = getFirestore(firebaseApp);

export { firebaseApp, firebaseAuth, firestore };

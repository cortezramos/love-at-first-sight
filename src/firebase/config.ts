import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCO5cm5pmVDhUj247T0RwrQmibOgHfDQA0",
    authDomain: "love-at-first-sight-22e4c.firebaseapp.com",
    projectId: "love-at-first-sight-22e4c",
    storageBucket: "love-at-first-sight-22e4c.appspot.com",
    messagingSenderId: "131189172311",
    appId: "1:131189172311:web:ed9e3a60387c6ebe899b12"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Get a Firestore instance
export const db = getFirestore(app);
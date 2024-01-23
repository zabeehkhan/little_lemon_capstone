// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfWbabReUIObt69IcoLI-DiWcKagd-zFk",
    authDomain: "little-lemon-capstone.firebaseapp.com",
    projectId: "little-lemon-capstone",
    storageBucket: "little-lemon-capstone.appspot.com",
    messagingSenderId: "370635529692",
    appId: "1:370635529692:web:709a05e8de4fc3139ac319",
    measurementId: "G-K4Q2784X8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);
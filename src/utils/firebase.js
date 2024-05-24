// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvouRh6yITsHU0sV_pgEttgaiZMqb--bI",
  authDomain: "netflixgpt-78a5b.firebaseapp.com",
  projectId: "netflixgpt-78a5b",
  storageBucket: "netflixgpt-78a5b.appspot.com",
  messagingSenderId: "899153683326",
  appId: "1:899153683326:web:c9f06d83888fb42231092f",
  measurementId: "G-956M16TQEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
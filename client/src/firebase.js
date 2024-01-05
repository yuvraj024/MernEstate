// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3b2be.firebaseapp.com",
  projectId: "mern-estate-3b2be",
  storageBucket: "mern-estate-3b2be.appspot.com",
  messagingSenderId: "1023884823625",
  appId: "1:1023884823625:web:e4de4d942d8655753fc398"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
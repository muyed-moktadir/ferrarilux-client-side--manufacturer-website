// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX6xRTKY96IgKUBxF2tAParU6yDMyrgrg",
  authDomain: "ferrarilux.firebaseapp.com",
  projectId: "ferrarilux",
  storageBucket: "ferrarilux.appspot.com",
  messagingSenderId: "974312576711",
  appId: "1:974312576711:web:28961dc6584c84b27f90e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
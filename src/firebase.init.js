// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpoJK4kMOsvKcCgiiQoNddPxwbup09vA4",
  authDomain: "bdmobile-bf529.firebaseapp.com",
  projectId: "bdmobile-bf529",
  storageBucket: "bdmobile-bf529.appspot.com",
  messagingSenderId: "11699728947",
  appId: "1:11699728947:web:80b75f75fb27f852e26946"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
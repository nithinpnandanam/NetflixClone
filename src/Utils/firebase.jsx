// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeEAOTJjLz268pcUtoeGCI42PJo46moBw",
  authDomain: "netflixclone-5b532.firebaseapp.com",
  projectId: "netflixclone-5b532",
  storageBucket: "netflixclone-5b532.appspot.com",
  messagingSenderId: "112751100829",
  appId: "1:112751100829:web:73e7d45037dd22ab60e574",
  measurementId: "G-NKGGPFXYCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// while logging in or out auth is needed so we are using it in one place and exporting it
export const auth = getAuth();

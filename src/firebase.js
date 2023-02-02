// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5saKNX171Bg5p5TE3wZd_QIceFY5U30k",
  authDomain: "prop44-e0297.firebaseapp.com",
  projectId: "prop44-e0297",
  storageBucket: "prop44-e0297.appspot.com",
  messagingSenderId: "397910036781",
  appId: "1:397910036781:web:f036eeeffd6862a17f43a4",
  measurementId: "G-W5VMGYZPFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
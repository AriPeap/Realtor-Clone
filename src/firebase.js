// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2h1ZMTx8_9JFFpUGOp7S0VfSUwLKfRxY",
  authDomain: "realtor-clone-1ad02.firebaseapp.com",
  projectId: "realtor-clone-1ad02",
  storageBucket: "realtor-clone-1ad02.appspot.com",
  messagingSenderId: "908356760324",
  appId: "1:908356760324:web:b82ca32de31a1cb0f85651",
  measurementId: "G-F6QHV4FDXV",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

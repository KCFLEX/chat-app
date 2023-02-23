// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdpFgV9W20kXHc6LO2vWPPp2cuRThki3k",
  authDomain: "chat-app-5e752.firebaseapp.com",
  projectId: "chat-app-5e752",
  storageBucket: "chat-app-5e752.appspot.com",
  messagingSenderId: "367356987554",
  appId: "1:367356987554:web:4cc02d1c40ec3d0cac2ffb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
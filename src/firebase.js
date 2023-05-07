import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
     apiKey: "AIzaSyDNQ4HEpw1UI6hTD7QWXCg6kCbcvR2VMxE",
  authDomain: "guvy-c5705.firebaseapp.com",
  projectId: "guvy-c5705",
  storageBucket: "guvy-c5705.appspot.com",
  messagingSenderId: "15160196695",
  appId: "1:15160196695:web:5bdbaf4976243e19c2ad12",
  measurementId: "G-XZ0GVWS1FD"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

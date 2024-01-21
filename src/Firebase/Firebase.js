import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsZoKHIcp_GKkn0EOli0VFgiWdgfgeG44",
  authDomain: "alemeno01-9e072.firebaseapp.com",
  projectId: "alemeno01-9e072",
  storageBucket: "alemeno01-9e072.appspot.com",
  messagingSenderId: "605449024143",
  appId: "1:605449024143:web:b4e05cd3ab9118174236fa",
  measurementId: "G-20DY6CNRVW"
};

// Initialize Firebase
export const App = initializeApp(firebaseConfig);
const db = getFirestore(App);
export { db } ;
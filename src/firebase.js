import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDExpDA0tL9CwfRwFs7K0eZzw7LziHCXus",
  authDomain: "chatapp-7929a.firebaseapp.com",
  projectId: "chatapp-7929a",
  storageBucket: "chatapp-7929a.appspot.com",
  messagingSenderId: "203506636086",
  appId: "1:203506636086:web:67ab994439e82cd4080f97",
  measurementId: "G-SGY53FQESE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

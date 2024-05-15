import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBG03dvE5EBxosTjuveyyUpnEhJ4x8dxZs",
  authDomain: "chat-d6b65.firebaseapp.com",
  projectId: "chat-d6b65",
  storageBucket: "chat-d6b65.appspot.com",
  messagingSenderId: "737730615429",
  appId: "1:737730615429:web:d43bd9d91d3fb3b64df1ec",
  measurementId: "G-PH61V5RBYW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

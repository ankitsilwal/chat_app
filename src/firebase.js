import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXxsA8h-eI_mgUFpl51LAWrSR-n_k5gWM",
  authDomain: "new-chat-be1ca.firebaseapp.com",
  projectId: "new-chat-be1ca",
  storageBucket: "new-chat-be1ca.appspot.com",
  messagingSenderId: "596072760775",
  appId: "1:596072760775:web:2107b95fa7b1e8e5f645e2",
  measurementId: "G-CGBW6D0JG0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

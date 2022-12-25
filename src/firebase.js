import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAH0KLijTP94w3NP8bJr51u5if97FpsJVw",
  authDomain: "task-a9393.firebaseapp.com",
  projectId: "task-a9393",
  storageBucket: "task-a9393.appspot.com",
  messagingSenderId: "1012273522681",
  appId: "1:1012273522681:web:94e13ea9679ea5a3b2ff28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
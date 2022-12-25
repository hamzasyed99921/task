import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCIFqfuVLEP_yetVTDgg-Bv50Y8QRHRn-A",
    authDomain: "task-d6c9d.firebaseapp.com",
    projectId: "task-d6c9d",
    storageBucket: "task-d6c9d.appspot.com",
    messagingSenderId: "464805983309",
    appId: "1:464805983309:web:29716cd7f7b27915c1d804"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
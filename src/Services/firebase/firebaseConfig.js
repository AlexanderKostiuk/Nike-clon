import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAsb9u6nA_XZPqgL6nEgJGXof9IqR9QT0I",
  authDomain: "proyecto-nike-clon.firebaseapp.com",
  projectId: "proyecto-nike-clon",
  storageBucket: "proyecto-nike-clon.appspot.com",
  messagingSenderId: "708905065497",
  appId: "1:708905065497:web:1fc2a95590e49ae722de88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
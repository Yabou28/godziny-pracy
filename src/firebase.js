import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCszDXArmy1nsToy3p9pfDEz_YJwAOp1og",
  authDomain: "vegawork-3ed8b.firebaseapp.com",
  projectId: "vegawork-3ed8b",
  storageBucket: "vegawork-3ed8b.firebasestorage.app",
  messagingSenderId: "949621753001",
  appId: "1:949621753001:web:1f6df523887b131a5415b8",
  measurementId: "G-0H4M5483EB"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

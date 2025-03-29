
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "disneyplus-clone-2610b.firebaseapp.com",
  projectId: "disneyplus-clone-2610b",
  storageBucket: "disneyplus-clone-2610b.firebasestorage.app",
  messagingSenderId: "747653125638",
  appId: "1:747653125638:web:d03f9c81335b8e2e955587",
  measurementId: "G-JM3ZDX6SSL"
};

const app = initializeApp(firebaseConfig);
export { app };
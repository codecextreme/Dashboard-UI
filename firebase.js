// Your existing Firebase config and initializations
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging } from "firebase/messaging"; 

const firebaseConfig = {
  apiKey: "AIzaSyA0btAIaDUcZEHoNq6roAJUu5MzW8Qdbxw",
  authDomain: "vision-ui-73b05.firebaseapp.com",
  projectId: "vision-ui-73b05",
  storageBucket: "vision-ui-73b05.firebasestorage.app",
  messagingSenderId: "999954340452",
  appId: "1:999954340452:web:dee98b2fee0b18bef81d71",
  measurementId: "G-0WXD382CPY",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app); // ✅ Add this

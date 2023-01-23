import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAhiGKGxChlGNFCnvJ2AqEVrjpNRpmYHds",
  authDomain: "multimart-d295e.firebaseapp.com",
  projectId: "multimart-d295e",
  storageBucket: "multimart-d295e.appspot.com",
  messagingSenderId: "612279599400",
  appId: "1:612279599400:web:f7d31397ee59cec922501d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

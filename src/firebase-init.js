import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcozIa4F9lqY9rv-5aqNfp8zli77z3i7E",
  authDomain: "whatsapp-clone-372917.firebaseapp.com",
  projectId: "whatsapp-clone-372917",
  storageBucket: "whatsapp-clone-372917.appspot.com",
  messagingSenderId: "50620753406",
  appId: "1:50620753406:web:00a82f6b86c029a7b7ccaf",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // ✅ Add this

const firebaseConfig = {
  apiKey: "AIzaSyArH2J1b59uuL09t0PH6VI5HekBOOSp7A8",
  authDomain: "aapkacare-dc252.firebaseapp.com",
  projectId: "aapkacare-dc252",
  storageBucket: "aapkacare-dc252.appspot.com",
  messagingSenderId: "489116955693",
  appId: "1:489116955693:web:c5a08fe06adde4ae70f4a4",
  measurementId: "G-2E965SP2X1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);  // ✅ Get auth instance

export { db, app, auth };  // ✅ Export auth

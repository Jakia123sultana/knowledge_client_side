// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTy8QoGHr3BQR7gStfoKBKiAUx4UjcIKM",
  authDomain: "assignment011-9d123.firebaseapp.com",
  projectId: "assignment011-9d123",
  storageBucket: "assignment011-9d123.firebasestorage.app",
  messagingSenderId: "181169725522",
  appId: "1:181169725522:web:bef0a3a83cbebf9a3bbf8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
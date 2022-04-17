import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyByo00Jm131MjSkIADGy1Hu9wsQtIDpaBU",
  authDomain: "fir-pucpr-f6b89.firebaseapp.com",
  projectId: "fir-pucpr-f6b89",
  storageBucket: "fir-pucpr-f6b89.appspot.com",
  messagingSenderId: "831706321518",
  appId: "1:831706321518:web:9557e95ea706b1288ecc7f",
  measurementId: "G-DGQDMXZTP6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore()
export const auth = getAuth(app)
export const collectionRef = collection(db, "usuarios")
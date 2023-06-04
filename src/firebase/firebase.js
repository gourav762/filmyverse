import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore';
import App from "../App";

const firebaseConfig = {
  apiKey: "AIzaSyAT-6bO2ggIpGY22O4mNsLb569bfTPHsdc",
  authDomain: "filmyverse-5d834.firebaseapp.com",
  projectId: "filmyverse-5d834",
  storageBucket: "filmyverse-5d834.appspot.com",
  messagingSenderId: "547091651437",
  appId: "1:547091651437:web:a51c67043e30ae90325864"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;
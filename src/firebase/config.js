import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsSJlWF3cSYJ4Y0nlxVE6Xq6J96i-mgEs",
  authDomain: "bakery-7f58c.firebaseapp.com",
  databaseURL: "https://bakery-7f58c-default-rtdb.firebaseio.com",
  projectId: "bakery-7f58c",
  storageBucket: "bakery-7f58c.appspot.com",
  messagingSenderId: "737486484656",
  appId: "1:737486484656:web:c31395d7b741e5cfff3775",
};

// INITIALIZE FIREBASE:
const app = initializeApp(firebaseConfig);

//REFERENCIA A MI BASE DE DATOS:
export const db = getFirestore(app);

//AUTH:
export const auth = getAuth(app);

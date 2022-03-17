import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEw_VSVGjIgLpNuLb6aGarmC6vlgynOAo",
  authDomain: "carwash-f6ef1.firebaseapp.com",
  projectId: "carwash-f6ef1",
  storageBucket: "carwash-f6ef1.appspot.com",
  messagingSenderId: "641144140192",
  appId: "1:641144140192:web:d32dfc55449a3a4c10f4c5",
  measurementId: "G-Y16HZECX7G"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

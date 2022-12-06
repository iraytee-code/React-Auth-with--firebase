// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFlOEjQRtdLumPHRt6e5iWaslIO8eh_oI",
  authDomain: "fir-auth-b4b5e.firebaseapp.com",
  projectId: "fir-auth-b4b5e",
  storageBucket: "fir-auth-b4b5e.appspot.com",
  messagingSenderId: "33373477727",
  appId: "1:33373477727:web:c6fe56c17ccd9952ab74ea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMCKFJX6MSlzu5ANDTSJalNKoJ5667isU",
  authDomain: "nextjs-auth-project-5d77b.firebaseapp.com",
  projectId: "nextjs-auth-project-5d77b",
  storageBucket: "nextjs-auth-project-5d77b.appspot.com",
  messagingSenderId: "693062673105",
  appId: "1:693062673105:web:fa5bb5146c89322b545bf0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

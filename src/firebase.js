// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7fn9eU08LMWr8TyCgAntF5LTZ5ZdP--8",
  authDomain: "gunnscanner-f243a.firebaseapp.com",
  databaseURL: "https://gunnscanner-f243a-default-rtdb.firebaseio.com/",
  projectId: "gunnscanner-f243a",
  storageBucket: "gunnscanner-f243a.appspot.com",
  messagingSenderId: "1048232122866",
  appId: "1:1048232122866:web:5f315349ecd91ed4df336b",
  measurementId: "G-YKRS0ZD4YB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export const db =  getDatabase(app);

export { auth };

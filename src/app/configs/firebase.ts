// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmSc4YczonTBKEfYp27m2UhTdZMZ7-XuM",
    authDomain: "ccms-wika123.firebaseapp.com",
    projectId: "ccms-wika123",
    storageBucket: "ccms-wika123.appspot.com",
    messagingSenderId: "990866796162",
    appId: "1:990866796162:web:452acddc69863a648ece9b",
    measurementId: "G-GFSG7Y882T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
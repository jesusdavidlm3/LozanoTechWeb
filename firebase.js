// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyBbs0LfIVQH2OOidkAwOcrB2RUIptyI1TI",
    authDomain: "lozano-tech-web.firebaseapp.com",
    projectId: "lozano-tech-web",
    storageBucket: "lozano-tech-web.appspot.com",
    messagingSenderId: "444506054667",
    appId: "1:444506054667:web:df23cb724f38e5dce1e70e",
    measurementId: "G-6VMF5614LL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
export const Auth = getAuth();
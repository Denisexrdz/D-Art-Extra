// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIkkyNZVwk355Q9n391lIXj23hIvxc_iA",
  authDomain: "d-art-extra.firebaseapp.com",
  projectId: "d-art-extra",
  storageBucket: "d-art-extra.appspot.com",
  messagingSenderId: "194065336697",
  appId: "1:194065336697:web:7edde0dd2e3e95d89447a8",
  measurementId: "G-FQGSZF1QXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default app
export {db}
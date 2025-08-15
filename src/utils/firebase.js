// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJzY9Og0f1DjiXOr5ug7RqRUtbK20Ii2Y",
  authDomain: "formulario-pqrs-5a195.firebaseapp.com",
  databaseURL: "https://formulario-pqrs-5a195-default-rtdb.firebaseio.com",
  projectId: "formulario-pqrs-5a195",
  storageBucket: "formulario-pqrs-5a195.firebasestorage.app",
  messagingSenderId: "366767588477",
  appId: "1:366767588477:web:6f21d81f2bc86e20a31d14",
  measurementId: "G-LWHB79ZRQG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };

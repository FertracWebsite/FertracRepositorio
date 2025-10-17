import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJzY9Og0f1DjiXOr5ug7RqRUtbK20Ii2Y",
  authDomain: "formulario-pqrs-5a195.firebaseapp.com",
  databaseURL: "https://formulario-pqrs-5a195-default-rtdb.firebaseio.com",
  projectId: "formulario-pqrs-5a195",
  storageBucket: "formulario-pqrs-5a195.firebasestorage.app", // ✅ ojo, usa appspot.com
  messagingSenderId: "366767588477",
  appId: "1:366767588477:web:6f21d81f2bc86e20a31d14",
  measurementId: "G-Y9Y32WGKQ6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

console.log("🔥 Firebase inicializado correctamente");

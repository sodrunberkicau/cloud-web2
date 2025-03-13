import { initializeApp, FirebaseApp } from "firebase/app";
import { getDatabase, Database } from "firebase/database";
import { getStorage, FirebaseStorage } from "firebase/storage";
import { getAuth, Auth, setPersistence, browserLocalPersistence } from "firebase/auth";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCI7r8RJXFReYi7SA_CHgjcRD4UokBjIng",
  authDomain: "latihan-firebase-1e755.firebaseapp.com",
  databaseURL: "https://latihan-firebase-1e755-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "latihan-firebase-1e755",
  storageBucket: "latihan-firebase-1e755.firebasestorage.app",
  messagingSenderId: "881557238505",
  appId: "1:881557238505:web:a5b84db1495d3dd8cbf678",
  measurementId: "G-L08KZ6EDL0"
};

// Deklarasi variabel dengan tipe yang benar
let app: FirebaseApp | null = null;
let database: Database | null = null;
let storage: FirebaseStorage | null = null;
let auth: Auth | null = null;

try {
  app = initializeApp(firebaseConfig);
  database = getDatabase(app);
  storage = getStorage(app);
  auth = getAuth(app);

  // Atur persistence hanya jika dijalankan di browser
  if (typeof window !== "undefined" && auth) {
    setPersistence(auth, browserLocalPersistence).catch((error) => {
      console.error("Error setting auth persistence:", error);
    });
  }
} catch (error) {
  console.error("Error initializing Firebase:", error);
  app = null;
  database = null;
  storage = null;
  auth = null;
}

// Ekspor variabel dengan tipe yang benar
export { app, database, storage, auth };

// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDMSQRtm1DzS7ZcpuNTI73GYDyXqJ4dS5o",
  authDomain: "luzu-ai-app.firebaseapp.com",
  databaseURL: "https://luzu-ai-app-default-rtdb.firebaseio.com",
  projectId: "luzu-ai-app",
  storageBucket: "luzu-ai-app.firebasestorage.app",
  messagingSenderId: "283422211743",
  appId: "1:283422211743:web:e704374bb55856fab22caa",
  measurementId: "G-WBCYM89TML"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const dbStore = getFirestore(app);


export { auth, database, dbStore };

// const firebaseConfig = {
//   apiKey: "AIzaSyDMSQRtm1DzS7ZcpuNTI73GYDyXqJ4dS5o",
//   authDomain: "luzu-ai-app.firebaseapp.com",
//   databaseURL: "https://luzu-ai-app-default-rtdb.firebaseio.com",
//   projectId: "luzu-ai-app",
//   storageBucket: "luzu-ai-app.firebasestorage.app",
//   messagingSenderId: "283422211743",
//   appId: "1:283422211743:web:e704374bb55856fab22caa",
//   measurementId: "G-WBCYM89TML"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const database = getDatabase(app);
// const dbStore = getFirestore(app);


// export { auth, database, dbStore };

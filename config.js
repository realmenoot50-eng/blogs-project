import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB_1ZOWXkVGoe3gpHpukM5Aurej1s_Rleg",
    authDomain: "blog-79df5.firebaseapp.com",
    projectId: "blog-79df5",
    storageBucket: "blog-79df5.firebasestorage.app",
    messagingSenderId: "841048642616",
    appId: "1:841048642616:web:0a5688938e90fa0e2742cd"
  };
  const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);
 export const db = getFirestore(app);

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  };

// code segment to see if firebase has already been initialized
let app;
if (getApps().length === 0) {
  // new firebase instance
  app = initializeApp(firebaseConfig);
} else {
  // existing firebase instance
  app = getApp();
}

const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};



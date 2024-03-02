import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBJGq1WWb83cfmwp0Makl573aEAKBlnWgI",
    authDomain: "electron-chat-7c5f7.firebaseapp.com",
    projectId: "electron-chat-7c5f7",
    storageBucket: "electron-chat-7c5f7.appspot.com",
    messagingSenderId: "89290237635",
    appId: "1:89290237635:web:f38df80daff089244ce476",
    measurementId: "G-Q2866N6K28"
  };


const configEnv = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASURMENT_ID
}

export default firebase.initializeApp(firebaseConfig).firestore();